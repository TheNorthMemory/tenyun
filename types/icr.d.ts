/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 获取成员列表入参payload */
declare interface GetIndustryV1HomeMembersReqPayload {
  /** 用户ID */
  ID: string;
}

/** 获取成员列表回包DataList */
declare interface GetIndustryV1HomeMembersRespData {
  /** 修改时间 */
  EditTime: number | null;
  /** 功能列表 */
  FeatureList: GetIndustryV1HomeMembersRespFeature | null;
  /** 用户ID */
  ID: string | null;
  /** 用户行业分类 */
  IndustryType: string | null;
  /** 子用户数量 */
  MemberNum: number | null;
  /** 机器人列表 */
  ProductList: GetIndustryV1HomeMembersRespProduct | null;
  /** 备注 */
  Remark: string | null;
  /** 是否有效 */
  Status: number | null;
  /** 功能列表 */
  TypeList: GetIndustryV1HomeMembersRespType | null;
  /** 用户账号 */
  UserAccount: string | null;
}

/** 获取成员列表接口回包Feature */
declare interface GetIndustryV1HomeMembersRespFeature {
  /** 功能名称 */
  FeatureName: string | null;
  /** 功能ID */
  ID: string | null;
}

/** 获取成员列表回包Industry */
declare interface GetIndustryV1HomeMembersRespIndustry {
  /** 行业ID */
  ID: string | null;
  /** 行业名称 */
  IndustryName: string | null;
}

/** 获取成员列表回包Payload */
declare interface GetIndustryV1HomeMembersRespPayload {
  /** 用户级别 */
  AccountLevel: string | null;
  /** 用户列表 */
  DataList: GetIndustryV1HomeMembersRespData[] | null;
  /** 每页数量 */
  Limit: number | null;
  /** 分页偏移量，从0开始 */
  Offset: number | null;
  /** 用户总数 */
  Total: number | null;
}

/** 获取成员列表接口回包ProductList */
declare interface GetIndustryV1HomeMembersRespProduct {
  /** 创建时间 */
  CreateTime: string | null;
  /** 编辑时间 */
  EditTime: string | null;
  /** 机器人ID（AppKey信息） */
  AppKey: string | null;
  /** 机器人图标 */
  Image: string | null;
  /** 行业信息 */
  Industry: GetIndustryV1HomeMembersRespIndustry[] | null;
  /** 操作员列表 */
  OperatorList: string | null;
  /** 机器人名字 */
  ProductName: string | null;
  /** 备注 */
  Remark: string | null;
  /** 模板列表 */
  TemplateList: string | null;
}

/** 获取成员列表接口回包TypeList */
declare interface GetIndustryV1HomeMembersRespType {
  /** 类型ID */
  Type: string | null;
  /** 类型名称 */
  TypeName: string | null;
}

/** 请求的Metadata */
declare interface ReqMetadata {
  /** 渠道 */
  ChannelID?: string;
  /** 无 */
  BusinessName?: string;
  /** 无 */
  GUID?: string;
  /** 无 */
  AppKey?: string;
  /** 位置定位服务 */
  LBS?: ReqMetadataLBS;
  /** 透传字段 */
  Vagrants?: ReqMetadataVagrant[];
}

/** 请求参数的lbs */
declare interface ReqMetadataLBS {
  /** 纬度 */
  Latitude?: number;
  /** 经度 */
  Longitude?: number;
}

/** 请求参数Vagrant */
declare interface ReqMetadataVagrant {
  /** 无 */
  Key?: string;
  /** 无 */
  Value?: string;
}

/** 回包的meta data */
declare interface RspMetadata {
  /** 无 */
  Code: number;
  /** 无 */
  Message: string;
  /** 无 */
  SessionID: string;
  /** 无 */
  SessionDelta: string;
}

declare interface GetIndustryV1HomeMembersRequest {
  /** 无 */
  Payload: GetIndustryV1HomeMembersReqPayload;
  /** 无 */
  Metadata?: ReqMetadata;
}

declare interface GetIndustryV1HomeMembersResponse {
  /** 无 */
  Metadata: RspMetadata | null;
  /** 无 */
  Payload: GetIndustryV1HomeMembersRespPayload | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 对话机器人 */
declare interface Icr {
  (): Versions;
  /** 获取成员列表 */
  GetIndustryV1HomeMembers(data: GetIndustryV1HomeMembersRequest, config?: AxiosRequestConfig): AxiosPromise<GetIndustryV1HomeMembersResponse>;
}

export declare type Versions = ["2021-10-14"];

export default Icr;
