/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 颁发凭证的数据参数 */
declare interface CRDLArg {
  /** CPT ID */
  CPTId: number;
  /** 签发者 did */
  Issuer: string;
  /** 过期时间 */
  ExpirationDate: string;
  /** 声明 */
  ClaimJson: string;
  /** 凭证类型 */
  Type?: string[];
  /** 多方签名的用户did */
  Parties?: string[];
}

/** 链上交易信息 */
declare interface ChainTransaction {
  /** 交易哈希 */
  TransactionHash: string;
}

/** 凭证链上状态信息 */
declare interface CredentialState {
  /** 凭证唯一id */
  Id?: string;
  /** 凭证状态（0：吊销；1：有效） */
  Status?: number;
  /** 凭证颁发者Did */
  Issuer?: string;
  /** VC摘要，对应凭证Proof的vcDigest字段 */
  VCDigest?: string;
  /** 交易摘要，对应凭证Proof的txDigest字段 */
  TXDigest?: string;
  /** 颁布凭证的UTC时间戳 */
  IssueTime?: number;
  /** 凭证过期的UTC时间戳 */
  ExpireTime?: number;
  /** 凭证模板id */
  CPTId?: number;
  /** 凭证签名 */
  Signature?: string;
  /** 元数据摘要 */
  MetaDigest?: string;
}

declare interface CheckNewPurchaseRequest {
}

declare interface CheckNewPurchaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTDidByHostRequest {
  /** DID应用ID */
  DAPId?: number;
  /** 自定义DID文档json属性 */
  CustomAttribute?: string;
}

declare interface CreateTDidByHostResponse {
  /** DID标识 */
  Did?: string;
  /** 链上交易信息 */
  Transaction?: ChainTransaction;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTDidByPubKeyRequest {
  /** DID应用id */
  DAPId?: number;
  /** pem格式的认证公钥 */
  PublicKey?: string;
  /** 自定义DID初始化属性json字符串 */
  CustomAttribute?: string;
  /** 0:did存在返回错误，1:did存在返回该did，默认:0 */
  IgnoreExisted?: number;
}

declare interface CreateTDidByPubKeyResponse {
  /** did标识 */
  Did?: string;
  /** 链上交易信息 */
  Transaction?: ChainTransaction;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeactivateTDidRequest {
  /** DID标识符 */
  Did?: string;
  /** 设置DID禁用状态的临时凭证内容，通过创建凭证接口(CreateCredential)生成并签名，凭证类型为：OperateCredential, 为安全起见凭证过期时间不适合太长，建议设置为1分钟内 */
  OperateCredential?: string;
  /** DID应用Id */
  DAPId?: number;
  /** 是否禁用 */
  Deactivated?: string;
}

declare interface DeactivateTDidResponse {
  /** 上链交易信息 */
  Transaction?: ChainTransaction;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCredentialStateRequest {
  /** 凭证唯一Id */
  CredentialId?: string;
  /** 用户应用Id */
  DAPId?: number;
}

declare interface GetCredentialStateResponse {
  /** 凭证状态信息 */
  CredentialState?: CredentialState | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTDidDocumentRequest {
  /** DID标识 */
  Did?: string;
  /** DID应用ID */
  DAPId?: number;
}

declare interface GetTDidDocumentResponse {
  /** DID文档内容 */
  Document?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IssueCredentialRequest {
  /** 参数集合，详见示例 */
  CRDLArg?: CRDLArg;
  /** 是否未签名 */
  UnSigned?: boolean;
  /** DID应用id */
  DAPId?: number;
}

declare interface IssueCredentialResponse {
  /** 可验证凭证内容 */
  CredentialData?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCredentialStateRequest {
  /** DID应用Id */
  DAPId?: number;
  /** 更新VC状态的临时凭证内容，通过创建凭证接口(CreateCredential)生成并签名，凭证类型为：OperateCredential, 为安全起见凭证过期时间不适合太长，建议设置为1分钟内 */
  OperateCredential?: string;
}

declare interface UpdateCredentialStateResponse {
  /** 更新是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyCredentialsRequest {
  /** 0:仅验证签名，1:验证签名和链上状态，2, 仅验证链上状态，默认为0, 3.验证DID和凭证状态以及签名，4. 验证历史凭证有效性 */
  VerifyType?: number;
  /** 凭证内容 */
  CredentialData?: string;
  /** DID应用id */
  DAPId?: number;
}

declare interface VerifyCredentialsResponse {
  /** 是否验证成功 */
  Result?: boolean;
  /** 验证返回码 */
  VerifyCode?: number;
  /** 验证结果信息 */
  VerifyMessage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tdid 分布式身份} */
declare interface Tdid {
  (): Versions;
  /** 检查用户套餐购买状态 {@link CheckNewPurchaseRequest} {@link CheckNewPurchaseResponse} */
  CheckNewPurchase(data?: CheckNewPurchaseRequest, config?: AxiosRequestConfig): AxiosPromise<CheckNewPurchaseResponse>;
  /** 自动生成公私钥注册DID标识 {@link CreateTDidByHostRequest} {@link CreateTDidByHostResponse} */
  CreateTDidByHost(data?: CreateTDidByHostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidByHostResponse>;
  /** 导入公钥注册DID标识 {@link CreateTDidByPubKeyRequest} {@link CreateTDidByPubKeyResponse} */
  CreateTDidByPubKey(data?: CreateTDidByPubKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidByPubKeyResponse>;
  /** 更新DID标识的禁用状态 {@link DeactivateTDidRequest} {@link DeactivateTDidResponse} */
  DeactivateTDid(data?: DeactivateTDidRequest, config?: AxiosRequestConfig): AxiosPromise<DeactivateTDidResponse>;
  /** 获取凭证链上的状态 {@link GetCredentialStateRequest} {@link GetCredentialStateResponse} */
  GetCredentialState(data?: GetCredentialStateRequest, config?: AxiosRequestConfig): AxiosPromise<GetCredentialStateResponse>;
  /** 获取DID标识的文档 {@link GetTDidDocumentRequest} {@link GetTDidDocumentResponse} */
  GetTDidDocument(data?: GetTDidDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<GetTDidDocumentResponse>;
  /** 颁发可验证凭证 {@link IssueCredentialRequest} {@link IssueCredentialResponse} */
  IssueCredential(data?: IssueCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<IssueCredentialResponse>;
  /** 更新凭证的链上状态 {@link UpdateCredentialStateRequest} {@link UpdateCredentialStateResponse} */
  UpdateCredentialState(data?: UpdateCredentialStateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCredentialStateResponse>;
  /** 验证可验证凭证 {@link VerifyCredentialsRequest} {@link VerifyCredentialsResponse} */
  VerifyCredentials(data?: VerifyCredentialsRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyCredentialsResponse>;
}

export declare type Versions = ["2021-05-19"];

export default Tdid;
