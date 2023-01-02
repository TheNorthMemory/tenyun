/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 申请Token延期 */
declare interface ApplyEmbedTokenInfo {
  /** 申请结果 */
  Result: boolean | null;
}

/** 报表嵌出数据结构-强鉴权 */
declare interface EmbedTokenInfo {
  /** 信息标识 */
  Id?: number | null;
  /** 令牌 */
  BIToken?: string | null;
  /** 项目Id */
  ProjectId?: string | null;
  /** 创建人 */
  CreatedUser?: string | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 更新人 */
  UpdatedUser?: string | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
  /** 页面Id */
  PageId?: string | null;
  /** 备用 */
  ExtraParam?: string | null;
  /** 嵌出类型 */
  Scope: string | null;
  /** 过期时间，分钟为单位，最大240 */
  ExpireTime: number | null;
}

declare interface ApplyEmbedIntervalRequest {
  /** 分享项目id，必选 */
  ProjectId?: number;
  /** 分享页面id，嵌出看板时此为空值0 */
  PageId?: number;
  /** 需要申请延期的Token */
  BIToken?: string;
  /** 备用字段 */
  ExtraParam?: string;
  /** panel,看板；page，页面 */
  Scope?: string;
}

declare interface ApplyEmbedIntervalResponse {
  /** 额外参数 */
  Extra: string | null;
  /** 结果数据 */
  Data: ApplyEmbedTokenInfo | null;
  /** 结果描述 */
  Msg: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEmbedTokenRequest {
  /** 分享项目id，必选 */
  ProjectId?: number;
  /** 分享页面id，嵌出看板时此为空值0 */
  PageId?: number;
  /** page表示嵌出页面，panel表嵌出整个看板 */
  Scope?: string;
  /** 过期时间。 单位：分钟 最大值：240。即，4小时 默认值：240 */
  ExpireTime?: string;
  /** 备用字段 */
  ExtraParam?: string;
}

declare interface CreateEmbedTokenResponse {
  /** 额外信息 */
  Extra: string | null;
  /** 数据 */
  Data: EmbedTokenInfo | null;
  /** 结果描述 */
  Msg: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Bi 商业智能分析 BI} */
declare interface Bi {
  (): Versions;
  /** 申请延长Token可用时间接口 {@link ApplyEmbedIntervalRequest} {@link ApplyEmbedIntervalResponse} */
  ApplyEmbedInterval(data?: ApplyEmbedIntervalRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyEmbedIntervalResponse>;
  /** 创建嵌出报表Token {@link CreateEmbedTokenRequest} {@link CreateEmbedTokenResponse} */
  CreateEmbedToken(data?: CreateEmbedTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEmbedTokenResponse>;
}

export declare type Versions = ["2022-01-05"];

export default Bi;
