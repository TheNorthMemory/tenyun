/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface GetUserBaseInfoRequest {
}

declare interface GetUserBaseInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Open 腾讯云 OAuth} */
declare interface Open {
  (): Versions;
  /** {@link GetUserAccessToken 用于获取用户第三方开放平台的 access token}({@link GetUserAccessTokenRequest 请求参数}): {@link GetUserAccessTokenResponse 返回参数} */
  GetUserAccessToken(data: GetUserAccessTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserAccessTokenResponse>;
  /** {@link GetUserBaseInfo 用于获取用户基础信息}({@link GetUserBaseInfoRequest 请求参数}): {@link GetUserBaseInfoResponse 返回参数} */
  GetUserBaseInfo(data?: GetUserBaseInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetUserBaseInfoResponse>;
}

export declare type Versions = ["2018-12-25"];

export default Open;
