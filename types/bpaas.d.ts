/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** bpaas申请入参 */
declare interface ApplyParam {
  /** 审批流中表单唯一标识 */
  Key: string | null;
  /** 表单value */
  Value: string[] | null;
  /** 表单参数描述 */
  Name?: string | null;
}

/** 审批意见 */
declare interface ApproveOpinion {
  /** 方式 1:输入文字反馈 2:预设选项 */
  Type: number;
  /** 审批意见 */
  Content?: string[] | null;
}

/** 审批人 */
declare interface ApproveUser {
  /** 用户uin */
  Uin: number;
  /** 用户类型 (1:用户 2:用户组) */
  Type: number;
  /** 用户描述 */
  Desc?: string | null;
  /** 用户昵称 */
  Nick?: string | null;
  /** 动态获取Scf */
  Scf?: Scf | null;
  /** 审批状态 （取值范围 0:待审批 1:审批通过 2:拒绝 6:其他人已审批） */
  ApproveStatus?: number | null;
  /** 审批意见 */
  ApproveMsg?: string | null;
  /** 审批时间 */
  ApproveTime?: string | null;
  /** 审批组名称 */
  ApproveGroup?: string | null;
}

/** 云函数SCF */
declare interface Scf {
  /** Scf函数地域id */
  ScfRegion: string;
  /** Scf函数地域 */
  ScfRegionName: string;
  /** Scf函数名称 */
  ScfName?: string | null;
  /** Scf函数入参 */
  Params?: ScfParam[] | null;
}

/** Scf函数入参 */
declare interface ScfParam {
  /** 参数Key */
  Key: string;
  /** 参数类型 1用户输入 2预设参数 3表单参数 */
  Type: number;
  /** 参数值 */
  Values: string[];
  /** 参数描述 */
  Name?: string | null;
}

/** 状态节点 */
declare interface StatusNode {
  /** 节点id */
  NodeId?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 节点类型 1:审批节点 2:执行节点 3:条件节点 */
  NodeType?: number;
  /** 下一个节点 */
  NextNode?: string;
  /** 审批意见模型 */
  Opinion?: ApproveOpinion;
  /** scf函数名称 */
  ScfName?: string;
  /** 状态（0：待审批，1：审批通过，2：拒绝，3：scf执行失败，4：scf执行成功）18: 外部审批中 */
  SubStatus?: number;
  /** 审批节点审批人 */
  ApprovedUin?: number[];
  /** 审批时间 */
  CreateTime?: string;
  /** 审批意见信息 审批节点:审批人意见 执行节点:scf函数执行日志 */
  Msg?: string;
  /** 有权限审批该节点的uin */
  Users?: ApproveUser;
  /** 是否有权限审批该节点 */
  IsApprove?: boolean;
  /** 审批id */
  ApproveId?: string;
  /** 审批方式 0或签 1会签 */
  ApproveMethod?: number;
  /** 审批节点审批类型，1人工审批 2自动通过 3自动决绝 4外部审批scf */
  ApproveType?: number;
  /** 外部审批类型 scf:0或null ; CKafka:1 */
  CallMethod?: number;
  /** CKafka - 接入资源ID */
  DataHubId?: string;
  /** CKafka - 任务名称 */
  TaskName?: string;
  /** CKafka - 地域 */
  CKafkaRegion?: string;
  /** 外部审批Url */
  ExternalUrl?: string;
  /** 并行节点 3-4 */
  ParallelNodes?: string;
  /** scf拒绝时返回信息 */
  RejectedCloudFunctionMsg?: string;
  /** 上一个节点 */
  PrevNode?: string;
}

declare interface GetBpaasApproveDetailRequest {
  /** 审批id */
  ApproveId: number;
}

declare interface GetBpaasApproveDetailResponse {
  /** 申请人uin */
  ApplyUin?: number;
  /** 申请人主账号 */
  ApplyOwnUin?: number;
  /** 申请人昵称 */
  ApplyUinNick?: string;
  /** 审批流id */
  BpaasId?: number;
  /** 审批流名称 */
  BpaasName?: string;
  /** 申请参数 */
  ApplicationParams?: ApplyParam[];
  /** 申请原因 */
  Reason?: string;
  /** 申请时间 */
  CreateTime?: string;
  /** 申请单状态 */
  Status?: number;
  /** 节点信息 */
  Nodes?: StatusNode[];
  /** 正在审批的节点id */
  ApprovingNodeId?: string;
  /** 更新时间，时间格式：2021-12-12 10:12:10 */
  ModifyTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OutApproveBpaasApplicationRequest {
  /** 状态 1:通过 2:拒绝 */
  Status: number;
  /** 审批单id */
  ApproveId: number;
  /** 审批意见 */
  Msg?: string;
}

declare interface OutApproveBpaasApplicationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Bpaas 商业流程服务} */
declare interface Bpaas {
  (): Versions;
  /** 查看审批详情 {@link GetBpaasApproveDetailRequest} {@link GetBpaasApproveDetailResponse} */
  GetBpaasApproveDetail(data: GetBpaasApproveDetailRequest, config?: AxiosRequestConfig): AxiosPromise<GetBpaasApproveDetailResponse>;
  /** 外部审批申请单 {@link OutApproveBpaasApplicationRequest} {@link OutApproveBpaasApplicationResponse} */
  OutApproveBpaasApplication(data: OutApproveBpaasApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<OutApproveBpaasApplicationResponse>;
}

export declare type Versions = ["2018-12-17"];

export default Bpaas;
