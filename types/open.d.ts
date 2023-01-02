/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface GetUserBaseInfoRequest {
}

declare interface GetUserBaseInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetUserAccessTokenRequest {
  /** auth code */
  UserAuthCode: string;
}

declare interface GetUserAccessTokenResponse {
  /** App ID */
  AppId?: string[];
  /** 第三方 openId */
  UserOpenId?: string;
  /** 第三方 unionId */
  UserUnionId?: string;
  /** 第三方 access token */
  UserAccessToken?: string;
  /** 过期时间 */
  ExpiresAt?: number;
  /** refresh token */
  UserRefreshToken?: string;
  /** 授权范围 */
  Scope?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Open 腾讯云 OAuth} */
declare interface Open {
  (): Versions;
  /** 用于获取用户第三方开放平台的 access token {@link GetUserAccessTokenRequest} {@link GetUserAccessTokenResponse} */
  GetUserAccessToken(data: GetUserAccessTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserAccessTokenResponse>;
  /** 用于获取用户基础信息 {@link GetUserBaseInfoRequest} {@link GetUserBaseInfoResponse} */
  GetUserBaseInfo(data?: GetUserBaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserBaseInfoResponse>;
}

export declare type Versions = ["2018-12-25"];

export default Open;
