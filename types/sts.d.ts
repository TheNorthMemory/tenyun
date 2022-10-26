/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** API密钥数据列表 */
declare interface ApiKey {
  /** 密钥ID */
  SecretId: string;
  /** 创建时间(时间戳) */
  CreateTime: number;
  /** 状态(2:有效, 3:禁用, 4:已删除) */
  Status: number;
}

/** 临时证书 */
declare interface Credentials {
  /** token。token长度和绑定的策略有关，最长不超过4096字节。 */
  Token: string;
  /** 临时证书密钥ID。最长不超过1024字节。 */
  TmpSecretId: string;
  /** 临时证书密钥Key。最长不超过1024字节。 */
  TmpSecretKey: string;
}

/** 标签 */
declare interface Tag {
  /** 标签键，最长128个字符，区分大小写。 */
  Key: string;
  /** 标签值，最长256个字符，区分大小写。 */
  Value: string;
}

declare interface AssumeRoleRequest {
  /** 角色的资源描述，可在[访问管理](https://console.cloud.tencent.com/cam/role)，点击角色名获取。普通角色：qcs::cam::uin/12345678:role/4611686018427397919、qcs::cam::uin/12345678:roleName/testRoleName服务角色：qcs::cam::uin/12345678:role/tencentcloudServiceRole/4611686018427397920、qcs::cam::uin/12345678:role/tencentcloudServiceRoleName/testServiceRoleName */
  RoleArn: string;
  /** 临时会话名称，由用户自定义名称。长度在2到128之间，可包含大小写字符，数字以及特殊字符：=,.@_-。 正则为：[\w+=,.@_-]* */
  RoleSessionName: string;
  /** 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒 */
  DurationSeconds?: number;
  /** 策略描述注意：1、policy 需要做 urlencode（如果通过 GET 方法请求云 API，发送请求前，所有参数都需要按照[云 API 规范](https://cloud.tencent.com/document/api/598/33159)再 urlencode 一次）。2、策略语法参照[ CAM 策略语法](https://cloud.tencent.com/document/product/598/10603)。3、策略中不能包含 principal 元素。 */
  Policy?: string;
  /** 角色外部ID，可在[访问管理](https://console.cloud.tencent.com/cam/role)，点击角色名获取。长度在2到128之间，可包含大小写字符，数字以及特殊字符：=,.@:/-。 正则为：[\w+=,.@:\/-]* */
  ExternalId?: string;
  /** 会话标签列表。最多可以传递 50 个会话标签，不支持包含相同标签键。 */
  Tags?: Tag[];
  /** 调用者身份uin */
  SourceIdentity?: string;
}

declare interface AssumeRoleResponse {
  /** 临时安全证书 */
  Credentials: Credentials;
  /** 证书无效的时间，返回 Unix 时间戳，精确到秒 */
  ExpiredTime: number;
  /** 证书无效的时间，以 iso8601 格式的 UTC 时间表示 */
  Expiration: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssumeRoleWithSAMLRequest {
  /** base64 编码的 SAML 断言信息 */
  SAMLAssertion: string;
  /** 扮演者访问描述名 */
  PrincipalArn: string;
  /** 角色访问描述名 */
  RoleArn: string;
  /** 会话名称 */
  RoleSessionName: string;
  /** 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒 */
  DurationSeconds?: number;
}

declare interface AssumeRoleWithSAMLResponse {
  /** 对象里面包含 Token，TmpSecretId，TmpSecretKey 三元组 */
  Credentials?: Credentials;
  /** 证书无效的时间，返回 Unix 时间戳，精确到秒 */
  ExpiredTime?: number;
  /** 证书无效的时间，以 ISO8601 格式的 UTC 时间表示 */
  Expiration?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssumeRoleWithWebIdentityRequest {
  /** 身份提供商名称 */
  ProviderId: string;
  /** IdP签发的OIDC令牌 */
  WebIdentityToken: string;
  /** 角色访问描述名 */
  RoleArn: string;
  /** 会话名称 */
  RoleSessionName: string;
  /** 指定临时证书的有效期，单位：秒，默认 7200 秒，最长可设定有效期为 43200 秒 */
  DurationSeconds?: number;
}

declare interface AssumeRoleWithWebIdentityResponse {
  /** 临时秘钥过期时间(时间戳) */
  ExpiredTime: number;
  /** 临时秘钥过期时间 */
  Expiration: string;
  /** 临时秘钥 */
  Credentials: Credentials;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetCallerIdentityRequest {
}

declare interface GetCallerIdentityResponse {
  /** 当前调用者ARN。 */
  Arn?: string;
  /** 当前调用者所属主账号Uin。 */
  AccountId?: string;
  /** 身份标识。1. 调用者是云账号时，返回的是当前账号Uin2. 调用者是角色时，返回的是roleId:roleSessionName3. 调用者是联合身份时，返回的是uin:federatedUserName */
  UserId?: string;
  /** 密钥所属账号Uin。1. 调用者是云账号，返回的当前账号Uin2, 调用者是角色，返回的申请角色密钥的账号Uin */
  PrincipalId?: string;
  /** 身份类型。 */
  Type?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetFederationTokenRequest {
  /** 您可以自定义调用方英文名称，由字母组成。 */
  Name: string;
  /** 授予该临时证书权限的CAM策略注意：1、策略语法参照[ CAM 策略语法](https://cloud.tencent.com/document/product/598/10603)。2、策略中不能包含 principal 元素。3、该参数需要做urlencode。 */
  Policy: string;
  /** 指定临时证书的有效期，单位：秒，默认1800秒，主账号最长可设定有效期为7200秒，子账号最长可设定有效期为129600秒。 */
  DurationSeconds?: number;
}

declare interface GetFederationTokenResponse {
  /** 临时证书 */
  Credentials?: Credentials;
  /** 临时证书有效的时间，返回 Unix 时间戳，精确到秒 */
  ExpiredTime?: number;
  /** 证书有效的时间，以 iso8601 格式的 UTC 时间表示 */
  Expiration?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface QueryApiKeyRequest {
  /** 待查询的账号(不填默认查当前账号) */
  TargetUin?: number;
}

declare interface QueryApiKeyResponse {
  /** 密钥ID列表 */
  IdKeys?: ApiKey[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [安全凭证服务](https://cloud.tencent.com/document/product/1312) */
declare interface Sts {
  (): Versions;
  /** 申请扮演角色 */
  AssumeRole(data: AssumeRoleRequest, config?: AxiosRequestConfig): AxiosPromise<AssumeRoleResponse>;
  /** 根据 SAML 断言申请角色临时凭证 */
  AssumeRoleWithSAML(data: AssumeRoleWithSAMLRequest, config?: AxiosRequestConfig): AxiosPromise<AssumeRoleWithSAMLResponse>;
  /** 申请OIDC角色临时密钥 */
  AssumeRoleWithWebIdentity(data: AssumeRoleWithWebIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<AssumeRoleWithWebIdentityResponse>;
  /** 获取当前调用者的身份信息 */
  GetCallerIdentity(data?: GetCallerIdentityRequest, config?: AxiosRequestConfig): AxiosPromise<GetCallerIdentityResponse>;
  /** 获取联合身份临时访问凭证 */
  GetFederationToken(data: GetFederationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetFederationTokenResponse>;
  /** 拉取API密钥列表 */
  QueryApiKey(data?: QueryApiKeyRequest, config?: AxiosRequestConfig): AxiosPromise<QueryApiKeyResponse>;
}

export declare type Versions = ["2018-08-13"];

export default Sts;
