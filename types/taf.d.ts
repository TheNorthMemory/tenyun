/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 业务入参 */
declare interface ManagePortraitRiskInput {
  /** 请求时间戳秒 */
  PostTime: number;
  /** 用户公网ip（仅支持IPv4） */
  UserIp: string;
  /** 渠道号 */
  Channel: number;
}

/** 业务出参 */
declare interface ManagePortraitRiskOutput {
  /** 返回码（0，成功，其他失败） */
  Code?: number;
  /** 返回码对应的信息 */
  Message?: string | null;
  /** 结果 */
  Value?: ManagePortraitRiskValueOutput | null;
}

/** 业务出参 */
declare interface ManagePortraitRiskValueOutput {
  /** 对应的IP */
  UserIp?: string;
  /** 返回风险等级, 0 - 4，0代表无风险，数值越大，风险越高 */
  Level?: number;
}

declare interface ManagePortraitRiskRequest {
  /** 业务入参 */
  BusinessSecurityData: ManagePortraitRiskInput;
}

declare interface ManagePortraitRiskResponse {
  /** 业务出参 */
  Data?: ManagePortraitRiskOutput | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Taf 流量反欺诈} */
declare interface Taf {
  (): Versions;
  /** 虚假流量识别 {@link ManagePortraitRiskRequest} {@link ManagePortraitRiskResponse} */
  ManagePortraitRisk(data: ManagePortraitRiskRequest, config?: AxiosRequestConfig): AxiosPromise<ManagePortraitRiskResponse>;
}

export declare type Versions = ["2020-02-10"];

export default Taf;
