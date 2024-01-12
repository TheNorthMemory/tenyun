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

/** 可验证凭证证明信息 */
declare interface CredentialProof {
  /** 可验证凭证内容 */
  Credential: string;
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

/** did自定义属性 */
declare interface DidAttribute {
  /** 键名 */
  Key: string;
  /** 键值 */
  Val: string;
}

/** 资源计数统计数据 */
declare interface ResourceCounterData {
  /** DID总数 */
  DidCnt?: number | null;
  /** VC总数 */
  VCCnt?: number | null;
  /** CPT总数 */
  CPTCnt?: number | null;
  /** VC验证总数 */
  VerifyCnt?: number | null;
  /** 权威机构数量 */
  AuthCnt?: number | null;
}

declare interface CreateDisclosedCredentialRequest {
  /** 披露策略id，PolicyJson和PolicyId任选其一 */
  PolicyId?: number;
  /** 凭证文本内容，FunctionArg和CredentialText任选其一 */
  CredentialData?: string;
  /** 披露策略文本 */
  PolicyJson?: string;
  /** DID应用ID */
  DAPId?: number;
}

declare interface CreateDisclosedCredentialResponse {
  /** 凭证字符串 */
  CredentialData?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePresentationRequest {
  /** DID应用id */
  DAPId?: number;
  /** 凭证列表 */
  Credentials?: string[];
  /** VP持有人的DID标识 */
  Did?: string;
  /** VP随机验证码 */
  VerifyCode?: string;
  /** 选择性披露策略 */
  PolicyJson?: string;
  /** 是否签名，ture时signatureValue为待签名内容由调用端自行签名，false时signatureValue为平台自动已签名的内容。默认false */
  Unsigned?: boolean;
  /** 可验证凭证证明列表 */
  CredentialList?: CredentialProof[];
}

declare interface CreatePresentationResponse {
  /** 可验证表达内容 */
  PresentationData?: string;
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

declare interface GetAppSummaryRequest {
  /** DID应用Id */
  DAPId?: number;
}

declare interface GetAppSummaryResponse {
  /** 用户参与应用的统计指标 */
  AppCounter?: ResourceCounterData | null;
  /** 用户创建资源的统计指标 */
  UserCounter?: ResourceCounterData | null;
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

declare interface GetOverSummaryRequest {
}

declare interface GetOverSummaryResponse {
  /** 用户参与应用的统计指标 */
  AppCounter?: ResourceCounterData | null;
  /** 用户部署应用的统计指标 */
  UserCounter?: ResourceCounterData | null;
  /** 用户参与的应用总数 */
  AppCnt?: number | null;
  /** 用户部署的应用总数 */
  DeployCnt?: number | null;
  /** 部署网络子链总数 */
  ChainCnt?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTDidByObjectIdRequest {
  /** 业务层为DID设置的唯一标识 */
  ObjectId?: string;
  /** DID应用Id */
  DAPId?: number;
}

declare interface GetTDidByObjectIdResponse {
  /** DID标识 */
  Did?: string | null;
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

declare interface GetTDidPubKeyRequest {
  /** DID标识 */
  Did?: string;
  /** DID应用Id */
  DAPId?: number;
}

declare interface GetTDidPubKeyResponse {
  /** DID公钥数组 */
  AuthPublicKeyList?: string[];
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

declare interface QueryAuthorityInfoRequest {
  /** DID标识 */
  Did?: string;
  /** DID应用id */
  DAPId?: number;
  /** 权威机构名称 */
  Name?: string;
}

declare interface QueryAuthorityInfoResponse {
  /** 名称 */
  Name?: string;
  /** 权威机构did */
  Did?: string;
  /** 状态：1为已认证，2为未认证 */
  Status?: number;
  /** 机构备注信息 */
  Description?: string;
  /** 认证时间 */
  RecognizeTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCPTRequest {
  /** DID应用id */
  DAPId?: number;
  /** 凭证模板id */
  CPTId?: number;
}

declare interface QueryCPTResponse {
  /** 凭证模板内容 */
  CPTJson?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetTDidAttributeRequest {
  /** DID标识符 */
  Did?: string;
  /** 属性名值对数组 */
  Attributes?: DidAttribute[];
  /** DID应用Id */
  DAPId?: number;
  /** 操作鉴权凭证 */
  OperateCredential?: string;
}

declare interface SetTDidAttributeResponse {
  /** 上链交易信息 */
  Transaction?: ChainTransaction;
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

declare interface VerifyPresentationRequest {
  /** VP持有人的did标识 */
  Did?: string;
  /** 可验证表达内容 */
  PresentationData?: string;
  /** DID应用id */
  DAPId?: number;
  /** 随机验证码 */
  VerifyCode?: string;
}

declare interface VerifyPresentationResponse {
  /** 是否验证成功 */
  Result?: boolean;
  /** 验证返回码 */
  VerifyCode?: number;
  /** 验证消息 */
  VerifyMessage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tdid 分布式身份} */
declare interface Tdid {
  (): Versions;
  /** 创建选择性披露可验证凭证 {@link CreateDisclosedCredentialRequest} {@link CreateDisclosedCredentialResponse} */
  CreateDisclosedCredential(data?: CreateDisclosedCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDisclosedCredentialResponse>;
  /** 创建可验证表达 {@link CreatePresentationRequest} {@link CreatePresentationResponse} */
  CreatePresentation(data?: CreatePresentationRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePresentationResponse>;
  /** 自动生成公私钥注册DID标识 {@link CreateTDidByHostRequest} {@link CreateTDidByHostResponse} */
  CreateTDidByHost(data?: CreateTDidByHostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidByHostResponse>;
  /** 导入公钥注册DID标识 {@link CreateTDidByPubKeyRequest} {@link CreateTDidByPubKeyResponse} */
  CreateTDidByPubKey(data?: CreateTDidByPubKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidByPubKeyResponse>;
  /** 更新DID标识的禁用状态 {@link DeactivateTDidRequest} {@link DeactivateTDidResponse} */
  DeactivateTDid(data?: DeactivateTDidRequest, config?: AxiosRequestConfig): AxiosPromise<DeactivateTDidResponse>;
  /** 获取某个应用关键指标 {@link GetAppSummaryRequest} {@link GetAppSummaryResponse} */
  GetAppSummary(data?: GetAppSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<GetAppSummaryResponse>;
  /** 获取凭证链上的状态 {@link GetCredentialStateRequest} {@link GetCredentialStateResponse} */
  GetCredentialState(data?: GetCredentialStateRequest, config?: AxiosRequestConfig): AxiosPromise<GetCredentialStateResponse>;
  /** 获取某个应用的关键指标 {@link GetOverSummaryRequest} {@link GetOverSummaryResponse} */
  GetOverSummary(data?: GetOverSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<GetOverSummaryResponse>;
  /** 通过绑定的对象ID查询DID标识 {@link GetTDidByObjectIdRequest} {@link GetTDidByObjectIdResponse} */
  GetTDidByObjectId(data?: GetTDidByObjectIdRequest, config?: AxiosRequestConfig): AxiosPromise<GetTDidByObjectIdResponse>;
  /** 获取DID标识的文档 {@link GetTDidDocumentRequest} {@link GetTDidDocumentResponse} */
  GetTDidDocument(data?: GetTDidDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<GetTDidDocumentResponse>;
  /** 查询DID标识的认证公钥 {@link GetTDidPubKeyRequest} {@link GetTDidPubKeyResponse} */
  GetTDidPubKey(data?: GetTDidPubKeyRequest, config?: AxiosRequestConfig): AxiosPromise<GetTDidPubKeyResponse>;
  /** 颁发可验证凭证 {@link IssueCredentialRequest} {@link IssueCredentialResponse} */
  IssueCredential(data?: IssueCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<IssueCredentialResponse>;
  /** 查询权威机构信息 {@link QueryAuthorityInfoRequest} {@link QueryAuthorityInfoResponse} */
  QueryAuthorityInfo(data?: QueryAuthorityInfoRequest, config?: AxiosRequestConfig): AxiosPromise<QueryAuthorityInfoResponse>;
  /** 查询凭证模版内容 {@link QueryCPTRequest} {@link QueryCPTResponse} */
  QueryCPT(data?: QueryCPTRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCPTResponse>;
  /** 设置DID文档的属性值 {@link SetTDidAttributeRequest} {@link SetTDidAttributeResponse} */
  SetTDidAttribute(data?: SetTDidAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<SetTDidAttributeResponse>;
  /** 更新凭证的链上状态 {@link UpdateCredentialStateRequest} {@link UpdateCredentialStateResponse} */
  UpdateCredentialState(data?: UpdateCredentialStateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCredentialStateResponse>;
  /** 验证可验证凭证 {@link VerifyCredentialsRequest} {@link VerifyCredentialsResponse} */
  VerifyCredentials(data?: VerifyCredentialsRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyCredentialsResponse>;
  /** 验证可验证表达 {@link VerifyPresentationRequest} {@link VerifyPresentationResponse} */
  VerifyPresentation(data?: VerifyPresentationRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyPresentationResponse>;
}

export declare type Versions = ["2021-05-19"];

export default Tdid;
