/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** bcos网络信息 */
declare interface BcosClusterItem {
  /** 网络索引id */
  ChainId: number;
  /** 网络名称 */
  ChainName: string;
  /** 机构数量 */
  AgencyCount: number;
  /** 联盟id */
  ConsortiumId: number;
  /** 创建时间 */
  CreateTime: string;
  /** 过期时间 */
  ExpireTime: string;
  /** 网络状态 */
  ChainStatus: number;
  /** 资源 id */
  ResourceId: string;
  /** 集群id */
  ClusterId: string;
  /** 组织名称 */
  ConsortiumName: string;
  /** 机构id */
  AgencyId: number;
  /** 续费状态 */
  AutoRenewFlag: number;
  /** 网络模式 */
  TotalNetworkNode: number;
  /** 创建节点数 */
  TotalCreateNode: number;
  /** 总群组数量 */
  TotalGroups: number;
}

/** 联盟信息 */
declare interface ConsortiumItem {
  /** 联盟id */
  Id: number;
  /** 联盟名称 */
  Name: string;
}

/** 模板颁发量排名 */
declare interface CptIssueRank {
  /** 模板名称 */
  CptName: string;
  /** 名次 */
  Rank: number;
  /** 颁发量 */
  Count: number;
  /** 应用名称 */
  ApplyName: string;
  /** 应用ID */
  ApplyId: number;
}

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

/** did区块链网络信息 */
declare interface DidCluster {
  /** 链ID */
  ChainId: number;
  /** 链名称 */
  ChainName: string;
  /** 组织数量 */
  AgencyCount: number;
  /** 联盟ID */
  ConsortiumId: number;
  /** 创建时间 */
  CreateTime: string;
  /** 过期时间 */
  ExpireTime: string;
  /** 网络状态 */
  ChainStatus: number;
  /** 资源ID */
  ResourceId: string;
  /** 网络ID */
  ClusterId: string;
  /** 联盟名称 */
  ConsortiumName: string;
  /** 组织ID */
  AgencyId: number;
  /** 自动续费 */
  AutoRenewFlag: number;
  /** 网络节点总数 */
  TotalNetworkNode: number;
  /** 本机构节点数 */
  TotalCreateNode: number;
  /** 总群组数 */
  TotalGroups: number;
  /** DID总数 */
  DidCount: number;
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

/** did详情 */
declare interface Identity {
  /** 账户标识符 */
  AccountIdentifier: string;
  /** 链ID */
  ChainID: string;
  /** 完整tdid */
  Did: string;
  /** 群组ID */
  GroupId: number;
  /** 群组名称 */
  GroupName: string;
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

declare interface AddLabelRequest {
  /** 标签ID */
  LabelId: number;
  /** tdid */
  Did: string;
}

declare interface AddLabelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckChainRequest {
  /** 群组ID */
  GroupId: number;
  /** 网络ID */
  ClusterId: string;
  /** did服务机构名称 */
  AgencyName: string;
}

declare interface CheckChainResponse {
  /** 1为盟主，0为非盟主 */
  RoleType: number;
  /** 链ID */
  ChainId: string;
  /** 应用名称 */
  AppName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTDidByPrivateKeyRequest {
  /** 网络ID */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
  /** 私钥 */
  PrivateKey: string;
}

declare interface CreateTDidByPrivateKeyResponse {
  /** did的具体信息 */
  Did: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAgencyTDidRequest {
  /** 网络ID */
  ClusterId: string;
}

declare interface GetAgencyTDidResponse {
  /** 固定前缀 */
  Prefix: string;
  /** did详情 */
  Identity: Identity[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetConsortiumClusterListRequest {
  /** 联盟id */
  ConsortiumId: number;
}

declare interface GetConsortiumClusterListResponse {
  /** 网络列表 */
  ClusterList: BcosClusterItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetConsortiumListRequest {
}

declare interface GetConsortiumListResponse {
  /** 联盟列表 */
  ConsortiumList: ConsortiumItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCptInfoRequest {
  /** Cpt索引 */
  CptIndex: number;
}

declare interface GetCptInfoResponse {
  /** CptJsonData的具体信息 */
  CptJsonData: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCredentialCptRankRequest {
  /** 开始时间（支持到天 2021-4-23） */
  StartTime: string;
  /** 结束时间（支持到天 2021-4-23） */
  EndTime: string;
  /** 网络ID */
  ClusterId?: string;
}

declare interface GetCredentialCptRankResponse {
  /** Rank集合 */
  RankIssueResult: CptIssueRank[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCredentialStatusRequest {
  /** 凭证id */
  CredentialId: string;
}

declare interface GetCredentialStatusResponse {
  /** 凭证状态信息 */
  CredentialStatus: CredentialStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDidClusterDetailRequest {
  /** DID网络ID */
  ClusterId: string;
}

declare interface GetDidClusterDetailResponse {
  /** 网络ID */
  ClusterId: string;
  /** 组织名称 */
  ConsortiumName: string;
  /** 区块链组织名称 */
  ChainAgency: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDidClusterListRequest {
}

declare interface GetDidClusterListResponse {
  /** DID网络列表 */
  DidClusterList: DidCluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterCptRequest {
  /** 群组ID */
  GroupId: number;
  /** 网络ID */
  ClusterId: string;
  /** CptJson的具体信息 */
  CptJson: string;
  /** cptId 不填默认自增 */
  CptId?: number;
}

declare interface RegisterCptResponse {
  /** 凭证模板索引 */
  Id: number;
  /** 凭证模板id */
  CptId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetCredentialStatusRequest {
  /** 凭证状态 */
  CredentialStatus: CredentialStatus;
}

declare interface SetCredentialStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tdid 分布式身份} */
declare interface Tdid {
  (): Versions;
  /** @deprecated DID添加标签 {@link AddLabelRequest} {@link AddLabelResponse} */
  AddLabel(data: AddLabelRequest, config?: AxiosRequestConfig): AxiosPromise<AddLabelResponse>;
  /** 检查区块链信息 {@link CheckChainRequest} {@link CheckChainResponse} */
  CheckChain(data: CheckChainRequest, config?: AxiosRequestConfig): AxiosPromise<CheckChainResponse>;
  /** 创建凭证 {@link CreateCredentialRequest} {@link CreateCredentialResponse} */
  CreateCredential(data: CreateCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCredentialResponse>;
  /** 创建选择性批露凭证 {@link CreateSelectiveCredentialRequest} {@link CreateSelectiveCredentialResponse} */
  CreateSelectiveCredential(data: CreateSelectiveCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSelectiveCredentialResponse>;
  /** 创建机构DID {@link CreateTDidRequest} {@link CreateTDidResponse} */
  CreateTDid(data: CreateTDidRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidResponse>;
  /** 新建DID根据私钥生成Tdid {@link CreateTDidByPrivateKeyRequest} {@link CreateTDidByPrivateKeyResponse} */
  CreateTDidByPrivateKey(data: CreateTDidByPrivateKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidByPrivateKeyResponse>;
  /** 新建DID根据公钥生成Tdid {@link CreateTDidByPublicKeyRequest} {@link CreateTDidByPublicKeyResponse} */
  CreateTDidByPublicKey(data: CreateTDidByPublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidByPublicKeyResponse>;
  /** @deprecated 本机构DID详情 {@link GetAgencyTDidRequest} {@link GetAgencyTDidResponse} */
  GetAgencyTDid(data: GetAgencyTDidRequest, config?: AxiosRequestConfig): AxiosPromise<GetAgencyTDidResponse>;
  /** 获取权威机构信息 {@link GetAuthorityIssuerRequest} {@link GetAuthorityIssuerResponse} */
  GetAuthorityIssuer(data: GetAuthorityIssuerRequest, config?: AxiosRequestConfig): AxiosPromise<GetAuthorityIssuerResponse>;
  /** @deprecated 获取联盟bcos网络列表 {@link GetConsortiumClusterListRequest} {@link GetConsortiumClusterListResponse} */
  GetConsortiumClusterList(data: GetConsortiumClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<GetConsortiumClusterListResponse>;
  /** @deprecated 获取联盟列表 {@link GetConsortiumListRequest} {@link GetConsortiumListResponse} */
  GetConsortiumList(data?: GetConsortiumListRequest, config?: AxiosRequestConfig): AxiosPromise<GetConsortiumListResponse>;
  /** 凭证模版详情 {@link GetCptInfoRequest} {@link GetCptInfoResponse} */
  GetCptInfo(data: GetCptInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetCptInfoResponse>;
  /** @deprecated 凭证颁发模板排行 {@link GetCredentialCptRankRequest} {@link GetCredentialCptRankResponse} */
  GetCredentialCptRank(data: GetCredentialCptRankRequest, config?: AxiosRequestConfig): AxiosPromise<GetCredentialCptRankResponse>;
  /** 获取凭证链上状态 {@link GetCredentialStatusRequest} {@link GetCredentialStatusResponse} */
  GetCredentialStatus(data: GetCredentialStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetCredentialStatusResponse>;
  /** @deprecated 获取DID网络详情 {@link GetDidClusterDetailRequest} {@link GetDidClusterDetailResponse} */
  GetDidClusterDetail(data: GetDidClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidClusterDetailResponse>;
  /** @deprecated 获取DID网络列表 {@link GetDidClusterListRequest} {@link GetDidClusterListResponse} */
  GetDidClusterList(data?: GetDidClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidClusterListResponse>;
  /** 查看DID文档 {@link GetDidDocumentRequest} {@link GetDidDocumentResponse} */
  GetDidDocument(data: GetDidDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidDocumentResponse>;
  /** 凭证模版新建 {@link RegisterCptRequest} {@link RegisterCptResponse} */
  RegisterCpt(data: RegisterCptRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterCptResponse>;
  /** 设置凭证链上状态 {@link SetCredentialStatusRequest} {@link SetCredentialStatusResponse} */
  SetCredentialStatus(data: SetCredentialStatusRequest, config?: AxiosRequestConfig): AxiosPromise<SetCredentialStatusResponse>;
  /** 验证凭证 {@link VerifyCredentialRequest} {@link VerifyCredentialResponse} */
  VerifyCredential(data: VerifyCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyCredentialResponse>;
}

export declare type Versions = ["2021-05-19"];

export default Tdid;
