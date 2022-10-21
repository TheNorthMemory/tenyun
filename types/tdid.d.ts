/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 凭证链上状态信息 */
declare interface CredentialStatus {
  /** 凭证唯一id */
  CredentialId: string;
  /** 凭证状态（0：吊销；1：有效） */
  Status: number;
  /** 凭证颁发者Did */
  Issuer: string;
  /** 凭证摘要 */
  Digest: string | null;
  /** 凭证签名 */
  Signature: string | null;
  /** 更新时间戳 */
  TimeStamp: number | null;
}

/** 创建凭证入参的FunctionArg */
declare interface FunctionArg {
  /** CPT ID */
  CptId: number;
  /** 签发者 did */
  Issuer: string;
  /** 过期时间 */
  ExpirationDate: string;
  /** 声明 */
  ClaimJson: string;
}

/** 验证凭证签名 */
declare interface Proof {
  /** 创建时间 */
  Created: number;
  /** 创建着did */
  Creator: string;
  /** salt值 */
  SaltJson: string;
  /** 签名 */
  SignatureValue: string;
  /** type类型 */
  Type: string;
}

/** 创建凭证第二个 */
declare interface TransactionArg {
  /** 凭证did */
  InvokerTDid: string;
}

/** 验证凭证参数值 */
declare interface VerifyFunctionArg {
  /** CPT ID */
  CptId: number;
  /** issuer did */
  Issuer: string;
  /** 过期时间 */
  ExpirationDate: number;
  /** 声明 */
  ClaimJson: string;
  /** 颁发时间 */
  IssuanceDate: number;
  /** context值 */
  Context: string;
  /** id值 */
  Id: string;
  /** 签名值 */
  Proof: Proof;
  /** type值 */
  Type: string[];
}

declare interface CreateCredentialRequest {
  /** 参数集合，详见示例 */
  FunctionArg: FunctionArg;
  /** 参数集合，详见示例 */
  TransactionArg: TransactionArg;
  /** 版本 */
  VersionCredential: string;
  /** 是否未签名 */
  UnSigned?: boolean;
}

declare interface CreateCredentialResponse {
  /** Credential的具体信息 */
  CredentialData: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSelectiveCredentialRequest {
  /** 参数集合 */
  FunctionArg: VerifyFunctionArg;
  /** 批露策略id */
  PolicyId: number;
}

declare interface CreateSelectiveCredentialResponse {
  /** 凭证字符串 */
  CredentialData: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTDidByPublicKeyRequest {
  /** 网络ID */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
  /** 身份公钥 */
  PublicKey: string;
  /** 加密公钥 */
  EncryptPubKey?: string;
}

declare interface CreateTDidByPublicKeyResponse {
  /** did具体信息 */
  Did: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTDidRequest {
  /** 群组ID */
  GroupId: number;
  /** 网络ID */
  ClusterId: string;
  /** 部署机构为1，否则为0 */
  Relegation: number;
}

declare interface CreateTDidResponse {
  /** TDID */
  Did: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetAuthorityIssuerRequest {
  /** tdid */
  Did: string;
}

declare interface GetAuthorityIssuerResponse {
  /** 名称 */
  Name: string;
  /** 区块链网络id */
  ClusterId: string;
  /** 区块链群组id */
  GroupId: number;
  /** 权威机构did */
  Did: string;
  /** 机构备注信息 */
  Remark: string;
  /** 注册时间 */
  RegisterTime: string;
  /** 认证时间 */
  RecognizeTime: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetDidDocumentRequest {
  /** tdid */
  Did: string;
}

declare interface GetDidDocumentResponse {
  /** 名称 */
  Name: string;
  /** DID文档 */
  Document: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetCredentialStatusRequest {
  /** 凭证状态 */
  CredentialStatus: CredentialStatus;
}

declare interface SetCredentialStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VerifyCredentialRequest {
  /** 参数集合 */
  FunctionArg: VerifyFunctionArg;
}

declare interface VerifyCredentialResponse {
  /** 是否验证成功 */
  Result: boolean;
  /** 验证返回码 */
  VerifyCode: number;
  /** 验证消息 */
  VerifyMessage: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [分布式身份](https://cloud.tencent.com/document/product/1439) */
declare interface Tdid {
  (): Versions;
  /** 创建凭证 */
  CreateCredential(data: CreateCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCredentialResponse>;
  /** 创建选择性批露凭证 */
  CreateSelectiveCredential(data: CreateSelectiveCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSelectiveCredentialResponse>;
  /** 创建机构DID */
  CreateTDid(data: CreateTDidRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidResponse>;
  /** 新建DID根据公钥生成Tdid */
  CreateTDidByPublicKey(data: CreateTDidByPublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidByPublicKeyResponse>;
  /** 获取权威机构信息 */
  GetAuthorityIssuer(data: GetAuthorityIssuerRequest, config?: AxiosRequestConfig): AxiosPromise<GetAuthorityIssuerResponse>;
  /** 查看DID文档 */
  GetDidDocument(data: GetDidDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidDocumentResponse>;
  /** 设置凭证链上状态 */
  SetCredentialStatus(data: SetCredentialStatusRequest, config?: AxiosRequestConfig): AxiosPromise<SetCredentialStatusResponse>;
  /** 验证凭证 */
  VerifyCredential(data: VerifyCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyCredentialResponse>;
}

export declare type Versions = ["2021-05-19"];

export default Tdid;
