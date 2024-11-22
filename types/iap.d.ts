/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface CreateIAPUserOIDCConfigRequest {
  /** 身份提供商URL。OpenID Connect身份提供商标识。对应企业IdP提供的Openid-configuration中"issuer"字段的值。 */
  IdentityUrl: string;
  /** 客户端ID，在OpenID Connect身份提供商注册的客户端ID。 */
  ClientId: string;
  /** 授权请求Endpoint，OpenID Connect身份提供商授权地址。对应企业IdP提供的Openid-configuration中"authorization_endpoint"字段的值。 */
  AuthorizationEndpoint: string;
  /** 授权请求Response type，固定值id_token */
  ResponseType: string;
  /** 授权请求Response mode。授权请求返回模式，form_post和fragment两种可选模式，推荐选择form_post模式。 */
  ResponseMode: string;
  /** 映射字段名称。IdP的id_token中哪一个字段映射到子用户的用户名，通常是sub或者name字段 */
  MappingFiled: string;
  /** 签名公钥，需要base64_encode。验证OpenID Connect身份提供商ID Token签名的公钥。为了您的账号安全，建议您定期轮换签名公钥。 */
  IdentityKey: string;
  /** 授权请求Scope。openid; email;profile。授权请求信息范围。默认必选openid。 */
  Scope?: string[];
  /** 描述 */
  Description?: string;
}

declare interface CreateIAPUserOIDCConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIAPLoginSessionDurationRequest {
}

declare interface DescribeIAPLoginSessionDurationResponse {
  /** 登录会话时长 */
  Duration?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIAPUserOIDCConfigRequest {
}

declare interface DescribeIAPUserOIDCConfigResponse {
  /** 身份提供商类型。 13：IAP用户OIDC身份提供商 */
  ProviderType?: number;
  /** 身份提供商URL */
  IdentityUrl?: string;
  /** 签名公钥 */
  IdentityKey?: string;
  /** 客户端id */
  ClientId?: string;
  /** 状态：0:未设置，11:已开启，2:已禁用 */
  Status?: number;
  /** HTTPS CA证书的验证指纹，允许英文字母和数字，每个指纹长度为40个字符，最多5个指纹。 */
  Fingerprints?: string[];
  /** 是否需要开启自动使用OIDC签名公钥，1:需要，2:不需要，默认不需要 */
  EnableAutoPublicKey?: number;
  /** 授权请求Endpoint */
  AuthorizationEndpoint?: string;
  /** 授权请求Scope */
  Scope?: string[];
  /** 授权请求Response type */
  ResponseType?: string;
  /** 授权请求Response mode */
  ResponseMode?: string;
  /** 映射字段名称 */
  MappingFiled?: string;
  /** 描述 */
  Description?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableIAPUserSSORequest {
}

declare interface DisableIAPUserSSOResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIAPLoginSessionDurationRequest {
  /** 登录会话时长 */
  Duration: number;
}

declare interface ModifyIAPLoginSessionDurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateIAPUserOIDCConfigRequest {
  /** 身份提供商URL。OpenID Connect身份提供商标识。对应企业IdP提供的Openid-configuration中"issuer"字段的值。 */
  IdentityUrl: string;
  /** 客户端ID，在OpenID Connect身份提供商注册的客户端ID。 */
  ClientId: string;
  /** 授权请求Endpoint，OpenID Connect身份提供商授权地址。对应企业IdP提供的Openid-configuration中"authorization_endpoint"字段的值。 */
  AuthorizationEndpoint: string;
  /** 授权请求Response type，固定值id_token */
  ResponseType: string;
  /** 授权请求Response mode。授权请求返回模式，form_post和fragment两种可选模式，推荐选择form_post模式。 */
  ResponseMode: string;
  /** 映射字段名称。IdP的id_token中哪一个字段映射到子用户的用户名，通常是sub或者name字段 */
  MappingFiled: string;
  /** RSA签名公钥，JWKS格式，需要进行base64_encode。验证OpenID Connect身份提供商ID Token签名的公钥。为了您的账号安全，建议您定期轮换签名公钥。 */
  IdentityKey: string;
  /** 授权请求Scope。openid; email;profile。授权请求信息范围。默认必选openid。 */
  Scope?: string[];
  /** 描述，长度为1~255个英文或中文字符，默认值为空。 */
  Description?: string;
}

declare interface UpdateIAPUserOIDCConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Iap 身份识别平台} */
declare interface Iap {
  (): Versions;
  /** 创建IAP服务OIDC配置 {@link CreateIAPUserOIDCConfigRequest} {@link CreateIAPUserOIDCConfigResponse} */
  CreateIAPUserOIDCConfig(data: CreateIAPUserOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIAPUserOIDCConfigResponse>;
  /** 查询IAP的登录会话时长 {@link DescribeIAPLoginSessionDurationRequest} {@link DescribeIAPLoginSessionDurationResponse} */
  DescribeIAPLoginSessionDuration(data?: DescribeIAPLoginSessionDurationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIAPLoginSessionDurationResponse>;
  /** 查询IAP服务OIDC配置 {@link DescribeIAPUserOIDCConfigRequest} {@link DescribeIAPUserOIDCConfigResponse} */
  DescribeIAPUserOIDCConfig(data?: DescribeIAPUserOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIAPUserOIDCConfigResponse>;
  /** 禁用IAP服务SSO {@link DisableIAPUserSSORequest} {@link DisableIAPUserSSOResponse} */
  DisableIAPUserSSO(data?: DisableIAPUserSSORequest, config?: AxiosRequestConfig): AxiosPromise<DisableIAPUserSSOResponse>;
  /** 修改IAP登录会话时长 {@link ModifyIAPLoginSessionDurationRequest} {@link ModifyIAPLoginSessionDurationResponse} */
  ModifyIAPLoginSessionDuration(data: ModifyIAPLoginSessionDurationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIAPLoginSessionDurationResponse>;
  /** 修改IAP服务OIDC配置 {@link UpdateIAPUserOIDCConfigRequest} {@link UpdateIAPUserOIDCConfigResponse} */
  UpdateIAPUserOIDCConfig(data: UpdateIAPUserOIDCConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateIAPUserOIDCConfigResponse>;
}

export declare type Versions = ["2024-07-13"];

export default Iap;
