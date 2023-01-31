/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 权威机构 */
declare interface Authority {
  /** 权威机构ID */
  Id: number;
  /** Did的ID */
  DidId: number;
  /** DID具体信息 */
  Did: string;
  /** 机构名称 */
  Name: string;
  /** 权威认证 1:已认证，2:未认证 */
  Status: number;
  /** DID服务ID */
  DidServiceId: number;
  /** 应用ID */
  ContractAppId: number;
  /** 备注 */
  Remark: string;
  /** 注册时间 */
  RegisterTime: string | null;
  /** 认证时间 */
  RecognizeTime: string | null;
  /** 生成时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 网络ID */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
  /** 合约名称 */
  AppName: string;
  /** 链上标签 */
  LabelName: string;
}

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

/** 部署合约 */
declare interface Contract {
  /** 应用名 */
  ApplyName: string;
  /** 合约状态 true:已启用 false:未启用 */
  Enable: boolean;
  /** 合约CNS地址 */
  Hash: string;
  /** 合约CNS地址脱敏 */
  HashShow: string;
  /** 部署机构DID */
  WeId: string;
  /** 部署机构名称 */
  DeployName: string;
  /** 部署群组 */
  GroupId: string;
  /** 部署时间 */
  CreateTime: string;
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

/** cpt集合数据 */
declare interface CptListData {
  /** ID信息 */
  Id: number;
  /** 模版名称 */
  Name: string;
  /** 网络ID */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
  /** 服务ID */
  ServiceId: number;
  /** 合约应用ID */
  ContractAppId: number;
  /** 凭证模板ID */
  CptId: number;
  /** 模板类型，1: 系统模板，2: 用户模板，3:普通模板 */
  CptType: number;
  /** 凭证模版描述 */
  Description: string;
  /** 凭证模板Json */
  CptJson: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 创建者DID */
  CreatorDid: string;
  /** 应用名称 */
  AppName: string;
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

/** DID列表 */
declare interface DidData {
  /** 服务ID */
  ServiceId: number;
  /** 群组ID */
  GroupId: number;
  /** 应用名称 */
  AppName: string;
  /** did号码 */
  Did: string;
  /** 备注 */
  Remark: string;
  /** 权威机构认证状态 1未注册 2 未认证 3 已认证 */
  AuthorityState: number;
  /** DID标签名称 */
  LabelName: string;
  /** DID创建时间 */
  CreatedAt: string;
  /** 网络ID */
  ClusterId: string;
  /** 联盟名称 */
  AllianceName: string;
  /** DID标签id */
  LabelId: number;
}

/** DID服务基本信息 */
declare interface DidServiceInfo {
  /** DID服务索引 */
  Id: number;
  /** 应用ID */
  Appid: number;
  /** 账号唯一标识 */
  Uin: string;
  /** 联盟id */
  ConsortiumId: number;
  /** 联盟名称 */
  ConsortiumName: string;
  /** 网络ID */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
  /** 链ID */
  ChainId: string;
  /** 1为盟主，0为非盟主 */
  RoleType: number;
  /** 机构DID */
  AgencyDid: string;
  /** 机构名称 */
  CreateOrg: string;
  /** 端点 */
  Endpoint: string;
  /** 生成时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 群组名称 */
  GroupName: string;
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

/** 群组 */
declare interface Group {
  /** 群组ID */
  GroupId: number;
  /** 节点数量 */
  NodeCount: number;
  /** 所属机构节点数量 */
  NodeCountOfAgency: number;
  /** 群组描述 */
  Description: string;
  /** 参与角色，盟主或非盟主 */
  RoleType: number;
  /** 链id */
  ChainId: string;
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

/** 标签 */
declare interface Label {
  /** 标签ID */
  LabelId: number;
  /** 标签名称 */
  LabelName: string;
  /** did数量 */
  DidCount: number;
  /** 创建者did */
  Did: string;
  /** 网络ID */
  ClusterId: string;
  /** 创建时间 */
  CreateTime: string;
  /** 群组ID */
  GroupId: number;
}

/** 策略管理 */
declare interface Policy {
  /** 披露策略索引 */
  Id: number;
  /** 披露策略名称 */
  Name: string;
  /** 网络ID */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
  /** 服务ID */
  ServiceId: number;
  /** 合约应用ID */
  ContractAppId: number;
  /** 披露策略ID */
  PolicyId: number;
  /** 凭证模板ID */
  CptId: number;
  /** 策略Json */
  PolicyJson: string;
  /** 生成时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 创建者DID */
  CreatorDid: string;
  /** 应用名称 */
  AppName: string;
  /** 模板索引 */
  CptIndex: number;
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

/** CreateDidService、CheckDidDeploy出参 */
declare interface Task {
  /** 任务ID */
  Id: number;
  /** 应用ID */
  AppId: number;
  /** 网络ID */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
  /** 服务ID */
  ServiceId: number;
  /** 0: 部署中，1:部署成功，其他失败 */
  Status: number;
  /** 错误码 */
  ErrorCode: string;
  /** 错误提示 */
  ErrorMsg: string;
  /** 生成时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
}

/** 创建凭证第二个 */
declare interface TransactionArg {
  /** 凭证did */
  InvokerTDid: string;
}

/** 趋势 */
declare interface Trend {
  /** 时间点 */
  Time: string;
  /** 数量 */
  Count: number;
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

declare interface CancelAuthorityIssuerRequest {
  /** did具体信息 */
  Did: string;
}

declare interface CancelAuthorityIssuerResponse {
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

declare interface CheckDidDeployRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface CheckDidDeployResponse {
  /** 服务信息 */
  Task: Task;
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

declare interface CreateDidServiceRequest {
  /** 联盟名称 */
  ConsortiumName: string;
  /** 联盟ID */
  ConsortiumId: number;
  /** 群组ID */
  GroupId: number;
  /** 机构名称 */
  AgencyName: string;
  /** 应用名称 */
  AppName: string;
  /** 网络ID */
  ClusterId: string;
  /** 群组名称 */
  GroupName: string;
}

declare interface CreateDidServiceResponse {
  /** 服务信息 */
  Task: Task;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLabelRequest {
  /** 标签名称 */
  LabelName: string;
  /** 网络Id */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
}

declare interface CreateLabelResponse {
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

declare interface DeployByNameRequest {
  /** 应用名称 */
  ApplicationName: string;
  /** 网络ID */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
}

declare interface DeployByNameResponse {
  /** 哈希值 */
  Hash: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownCptRequest {
  /** Cpt索引 */
  CptIndex: number;
}

declare interface DownCptResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableHashRequest {
  /** 合约CNS地址 */
  Hash: string;
}

declare interface EnableHashResponse {
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

declare interface GetAuthoritiesListRequest {
  /** 页码，从1开始 */
  PageNumber: number;
  /** 每页大小 */
  PageSize: number;
  /** Did信息 */
  Did?: string;
  /** 权威认证 1:已认证，2:未认证 */
  Status?: number;
}

declare interface GetAuthoritiesListResponse {
  /** 数据集合 */
  ResultList: Authority[];
  /** 总数 */
  AllCount: number;
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

declare interface GetCptListRequest {
  /** 起始位置 */
  DisplayStart: number;
  /** 长度 */
  DisplayLength: number;
  /** 模板类型，0: 所有模板，1: 系统模板，2: 用户模板，3:普通模板 */
  CptType?: number;
}

declare interface GetCptListResponse {
  /** cpt数据集合 */
  CptDataList: CptListData[];
  /** 凭证模板总数 */
  AllCount: number;
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

declare interface GetCredentialIssueRankRequest {
  /** 开始时间（支持到天 2021-4-23） */
  StartTime: string;
  /** 结束时间（支持到天 2021-4-23） */
  EndTime: string;
  /** 网络ID */
  ClusterId?: string;
}

declare interface GetCredentialIssueRankResponse {
  /** Rank集合 */
  RankIssueResult: CptIssueRank[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCredentialIssueTrendRequest {
  /** 开始时间（支持到天 2021-4-23） */
  StartTime: string;
  /** 结束时间（支持到天 2021-4-23） */
  EndTime: string;
  /** 网络ID */
  ClusterId?: string;
}

declare interface GetCredentialIssueTrendResponse {
  /** Trend集合 */
  Trend: Trend[];
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

declare interface GetDataPanelRequest {
  /** 网络ID */
  ClusterId?: string;
}

declare interface GetDataPanelResponse {
  /** 区块链网络数量 */
  BlockNetworkCount: number;
  /** 区块链网络名称 */
  BlockNetworkName: string;
  /** 当前区块高度 */
  BlockHeight: number;
  /** 区块链网络类型 */
  BlockNetworkType: number;
  /** did数量 */
  DidCount: number;
  /** 凭证模版数量 */
  CptCount: number;
  /** 已认证权威机构数量 */
  CertificatedAuthCount: number;
  /** 颁发凭证数量 */
  IssueCptCount: number;
  /** 本周新增DID数量 */
  NewDidCount: number;
  /** BCOS网络类型数量 */
  BcosCount: number;
  /** Fabric网络类型数量 */
  FabricCount: number;
  /** 长安链网络类型数量 */
  ChainMakerCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDeployInfoRequest {
  /** 合约CNS地址 */
  Hash: string;
}

declare interface GetDeployInfoResponse {
  /** 合约CNS地址 */
  Hash: string;
  /** 合约主群组ID */
  GroupId: string;
  /** 部署机构DID */
  DeployDid: string;
  /** TDID SDK版本 */
  SdkVersion: string;
  /** TDID 合约版本 */
  ContractVersion: string;
  /** 区块链节点版本 */
  BlockVersion: string;
  /** 区块链节点IP */
  BlockIp: string;
  /** DID合约地址 */
  DidAddress: string;
  /** CPT合约地址 */
  CptAddress: string;
  /** Authority Issuer地址 */
  AuthorityAddress: string;
  /** Evidence合约地址 */
  EvidenceAddress: string;
  /** Specific Issuer合约地址 */
  SpecificAddress: string;
  /** 链ID */
  ChainId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDeployListRequest {
  /** 网络ID */
  ClusterId: string;
  /** 群组ID */
  GroupId: number;
  /** 起始位置 */
  DisplayStart: number;
  /** 长度 */
  DisplayLength: number;
}

declare interface GetDeployListResponse {
  /** 合约总数 */
  AllCount: number;
  /** 合约部署列表 */
  Result: Contract[];
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

declare interface GetDidDetailRequest {
  /** DID号码的具体信息 */
  Did: string;
}

declare interface GetDidDetailResponse {
  /** DID名称 */
  Did: string;
  /** 备注 */
  Remark: string;
  /** 公钥 */
  PublicKey: string;
  /** 权威认证 */
  AuthorityState: number;
  /** 联盟ID */
  ConsortiumId: number;
  /** 联盟名称 */
  ConsortiumName: string;
  /** 群组ID */
  GroupId: number;
  /** 网络ID */
  ClusterId: string;
  /** bcos资源ID */
  ResChainId: string;
  /** 创建时间 */
  CreateTime: string;
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

declare interface GetDidListRequest {
  /** 每页大小 */
  PageSize: number;
  /** 页码，从1开始 */
  PageNumber: number;
  /** Did信息 */
  Did?: string;
  /** 网络ID */
  ClusterId?: string;
  /** 群组ID */
  GroupId?: number;
}

declare interface GetDidListResponse {
  /** 数据列表 */
  DataList: DidData[];
  /** 数据总条数 */
  AllCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDidRegisterTrendRequest {
  /** 开始时间（支持到天 2021-4-23） */
  StartTime: string;
  /** 结束时间（支持到天 2021-4-23） */
  EndTime: string;
  /** 网络ID */
  ClusterId?: string;
}

declare interface GetDidRegisterTrendResponse {
  /** Trend集合 */
  Trend: Trend[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDidServiceDetailRequest {
  /** DID服务ID */
  ServiceId: number;
}

declare interface GetDidServiceDetailResponse {
  /** did服务信息 */
  DidService: DidServiceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDidServiceListRequest {
  /** 1: 以网络维度输出, 0: 以服务维度输出 */
  Type: number;
}

declare interface GetDidServiceListResponse {
  /** DID服务列表 */
  DidServiceList: DidServiceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetGroupListRequest {
  /** 0为未部署DID服务的群组，1为已部署DID服务的群组 */
  Status: number;
  /** 网络ID */
  ClusterId: string;
}

declare interface GetGroupListResponse {
  /** 群组数据集合 */
  Result: Group[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLabelListRequest {
  /** 每页大小 */
  PageSize: number;
  /** 页码，从1开始 */
  PageNumber: number;
  /** 网络ID */
  ClusterId?: string;
  /** 群组ID */
  GroupId?: number;
}

declare interface GetLabelListResponse {
  /** 数据集合 */
  Result: Label[];
  /** 总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPolicyListRequest {
  /** 起始位置 */
  DisplayStart: number;
  /** 长度 */
  DisplayLength: number;
}

declare interface GetPolicyListResponse {
  /** 策略Policy管理列表 */
  PolicyDataList: Policy[];
  /** 总数 */
  AllCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPublicKeyRequest {
  /** did的具体号码 */
  Did: string;
}

declare interface GetPublicKeyResponse {
  /** DID的具体信息 */
  Did: string;
  /** 公钥 */
  PublicKey: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryPolicyRequest {
  /** policy索引 */
  PolicyIndex: number;
}

declare interface QueryPolicyResponse {
  /** 披露策略索引 */
  Id: number;
  /** 披露策略ID */
  PolicyId: number;
  /** 凭证模板ID */
  CptId: number;
  /** 披露策略的具体信息 */
  PolicyData: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecognizeAuthorityIssuerRequest {
  /** did具体信息 */
  Did: string;
}

declare interface RecognizeAuthorityIssuerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterClaimPolicyRequest {
  /** Cpt索引 */
  CptIndex: number;
  /** 披露策略 */
  Policy: string;
}

declare interface RegisterClaimPolicyResponse {
  /** 披露策略索引 */
  Id: number;
  /** 披露策略ID */
  PolicyId: number;
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

declare interface RegisterIssuerRequest {
  /** tdid */
  Did: string;
  /** 权威机构名称 */
  Name: string;
  /** 备注 */
  Description: string;
}

declare interface RegisterIssuerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveHashRequest {
  /** 合约CNS地址 */
  Hash: string;
}

declare interface RemoveHashResponse {
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
  /** DID添加标签 {@link AddLabelRequest} {@link AddLabelResponse} */
  AddLabel(data: AddLabelRequest, config?: AxiosRequestConfig): AxiosPromise<AddLabelResponse>;
  /** 撤消权威机构认证 {@link CancelAuthorityIssuerRequest} {@link CancelAuthorityIssuerResponse} */
  CancelAuthorityIssuer(data: CancelAuthorityIssuerRequest, config?: AxiosRequestConfig): AxiosPromise<CancelAuthorityIssuerResponse>;
  /** 检查区块链信息 {@link CheckChainRequest} {@link CheckChainResponse} */
  CheckChain(data: CheckChainRequest, config?: AxiosRequestConfig): AxiosPromise<CheckChainResponse>;
  /** 检查部署情况 {@link CheckDidDeployRequest} {@link CheckDidDeployResponse} */
  CheckDidDeploy(data: CheckDidDeployRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDidDeployResponse>;
  /** 创建凭证 {@link CreateCredentialRequest} {@link CreateCredentialResponse} */
  CreateCredential(data: CreateCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCredentialResponse>;
  /** 创建DID服务 {@link CreateDidServiceRequest} {@link CreateDidServiceResponse} */
  CreateDidService(data: CreateDidServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDidServiceResponse>;
  /** 新建标签 {@link CreateLabelRequest} {@link CreateLabelResponse} */
  CreateLabel(data: CreateLabelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLabelResponse>;
  /** 创建选择性批露凭证 {@link CreateSelectiveCredentialRequest} {@link CreateSelectiveCredentialResponse} */
  CreateSelectiveCredential(data: CreateSelectiveCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSelectiveCredentialResponse>;
  /** 创建机构DID {@link CreateTDidRequest} {@link CreateTDidResponse} */
  CreateTDid(data: CreateTDidRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidResponse>;
  /** 新建DID根据私钥生成Tdid {@link CreateTDidByPrivateKeyRequest} {@link CreateTDidByPrivateKeyResponse} */
  CreateTDidByPrivateKey(data: CreateTDidByPrivateKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidByPrivateKeyResponse>;
  /** 新建DID根据公钥生成Tdid {@link CreateTDidByPublicKeyRequest} {@link CreateTDidByPublicKeyResponse} */
  CreateTDidByPublicKey(data: CreateTDidByPublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDidByPublicKeyResponse>;
  /** 通过Name部署TDID合约 {@link DeployByNameRequest} {@link DeployByNameResponse} */
  DeployByName(data: DeployByNameRequest, config?: AxiosRequestConfig): AxiosPromise<DeployByNameResponse>;
  /** 凭证模版下载 {@link DownCptRequest} {@link DownCptResponse} */
  DownCpt(data: DownCptRequest, config?: AxiosRequestConfig): AxiosPromise<DownCptResponse>;
  /** 启用合约 {@link EnableHashRequest} {@link EnableHashResponse} */
  EnableHash(data: EnableHashRequest, config?: AxiosRequestConfig): AxiosPromise<EnableHashResponse>;
  /** 本机构DID详情 {@link GetAgencyTDidRequest} {@link GetAgencyTDidResponse} */
  GetAgencyTDid(data: GetAgencyTDidRequest, config?: AxiosRequestConfig): AxiosPromise<GetAgencyTDidResponse>;
  /** 权威机构列表 {@link GetAuthoritiesListRequest} {@link GetAuthoritiesListResponse} */
  GetAuthoritiesList(data: GetAuthoritiesListRequest, config?: AxiosRequestConfig): AxiosPromise<GetAuthoritiesListResponse>;
  /** 获取权威机构信息 {@link GetAuthorityIssuerRequest} {@link GetAuthorityIssuerResponse} */
  GetAuthorityIssuer(data: GetAuthorityIssuerRequest, config?: AxiosRequestConfig): AxiosPromise<GetAuthorityIssuerResponse>;
  /** 获取联盟bcos网络列表 {@link GetConsortiumClusterListRequest} {@link GetConsortiumClusterListResponse} */
  GetConsortiumClusterList(data: GetConsortiumClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<GetConsortiumClusterListResponse>;
  /** 获取联盟列表 {@link GetConsortiumListRequest} {@link GetConsortiumListResponse} */
  GetConsortiumList(data?: GetConsortiumListRequest, config?: AxiosRequestConfig): AxiosPromise<GetConsortiumListResponse>;
  /** 凭证模版详情 {@link GetCptInfoRequest} {@link GetCptInfoResponse} */
  GetCptInfo(data: GetCptInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetCptInfoResponse>;
  /** 凭证模版列表 {@link GetCptListRequest} {@link GetCptListResponse} */
  GetCptList(data: GetCptListRequest, config?: AxiosRequestConfig): AxiosPromise<GetCptListResponse>;
  /** 凭证颁发模板排行 {@link GetCredentialCptRankRequest} {@link GetCredentialCptRankResponse} */
  GetCredentialCptRank(data: GetCredentialCptRankRequest, config?: AxiosRequestConfig): AxiosPromise<GetCredentialCptRankResponse>;
  /** 凭证颁发机构排行 {@link GetCredentialIssueRankRequest} {@link GetCredentialIssueRankResponse} */
  GetCredentialIssueRank(data: GetCredentialIssueRankRequest, config?: AxiosRequestConfig): AxiosPromise<GetCredentialIssueRankResponse>;
  /** 凭证颁发趋势 {@link GetCredentialIssueTrendRequest} {@link GetCredentialIssueTrendResponse} */
  GetCredentialIssueTrend(data: GetCredentialIssueTrendRequest, config?: AxiosRequestConfig): AxiosPromise<GetCredentialIssueTrendResponse>;
  /** 获取凭证链上状态 {@link GetCredentialStatusRequest} {@link GetCredentialStatusResponse} */
  GetCredentialStatus(data: GetCredentialStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetCredentialStatusResponse>;
  /** 概览 {@link GetDataPanelRequest} {@link GetDataPanelResponse} */
  GetDataPanel(data?: GetDataPanelRequest, config?: AxiosRequestConfig): AxiosPromise<GetDataPanelResponse>;
  /** 合约部署详情 {@link GetDeployInfoRequest} {@link GetDeployInfoResponse} */
  GetDeployInfo(data: GetDeployInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeployInfoResponse>;
  /** 合约部署列表 {@link GetDeployListRequest} {@link GetDeployListResponse} */
  GetDeployList(data: GetDeployListRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeployListResponse>;
  /** 获取DID网络详情 {@link GetDidClusterDetailRequest} {@link GetDidClusterDetailResponse} */
  GetDidClusterDetail(data: GetDidClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidClusterDetailResponse>;
  /** 获取DID网络列表 {@link GetDidClusterListRequest} {@link GetDidClusterListResponse} */
  GetDidClusterList(data?: GetDidClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidClusterListResponse>;
  /** DID详情 {@link GetDidDetailRequest} {@link GetDidDetailResponse} */
  GetDidDetail(data: GetDidDetailRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidDetailResponse>;
  /** 查看DID文档 {@link GetDidDocumentRequest} {@link GetDidDocumentResponse} */
  GetDidDocument(data: GetDidDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidDocumentResponse>;
  /** DID列表 {@link GetDidListRequest} {@link GetDidListResponse} */
  GetDidList(data: GetDidListRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidListResponse>;
  /** DID注册趋势 {@link GetDidRegisterTrendRequest} {@link GetDidRegisterTrendResponse} */
  GetDidRegisterTrend(data: GetDidRegisterTrendRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidRegisterTrendResponse>;
  /** 获取DID服务详情 {@link GetDidServiceDetailRequest} {@link GetDidServiceDetailResponse} */
  GetDidServiceDetail(data: GetDidServiceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidServiceDetailResponse>;
  /** 获取DID服务列表 {@link GetDidServiceListRequest} {@link GetDidServiceListResponse} */
  GetDidServiceList(data: GetDidServiceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetDidServiceListResponse>;
  /** 主群组配置列表 {@link GetGroupListRequest} {@link GetGroupListResponse} */
  GetGroupList(data: GetGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<GetGroupListResponse>;
  /** 标签列表 {@link GetLabelListRequest} {@link GetLabelListResponse} */
  GetLabelList(data: GetLabelListRequest, config?: AxiosRequestConfig): AxiosPromise<GetLabelListResponse>;
  /** 披露策略Policy管理列表 {@link GetPolicyListRequest} {@link GetPolicyListResponse} */
  GetPolicyList(data: GetPolicyListRequest, config?: AxiosRequestConfig): AxiosPromise<GetPolicyListResponse>;
  /** 查看公钥 {@link GetPublicKeyRequest} {@link GetPublicKeyResponse} */
  GetPublicKey(data: GetPublicKeyRequest, config?: AxiosRequestConfig): AxiosPromise<GetPublicKeyResponse>;
  /** 披露策略Policy查看 {@link QueryPolicyRequest} {@link QueryPolicyResponse} */
  QueryPolicy(data: QueryPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<QueryPolicyResponse>;
  /** 认证权威机构 {@link RecognizeAuthorityIssuerRequest} {@link RecognizeAuthorityIssuerResponse} */
  RecognizeAuthorityIssuer(data: RecognizeAuthorityIssuerRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeAuthorityIssuerResponse>;
  /** 披露策略Policy注册 {@link RegisterClaimPolicyRequest} {@link RegisterClaimPolicyResponse} */
  RegisterClaimPolicy(data: RegisterClaimPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterClaimPolicyResponse>;
  /** 凭证模版新建 {@link RegisterCptRequest} {@link RegisterCptResponse} */
  RegisterCpt(data: RegisterCptRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterCptResponse>;
  /** 注册为权威机构 {@link RegisterIssuerRequest} {@link RegisterIssuerResponse} */
  RegisterIssuer(data: RegisterIssuerRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterIssuerResponse>;
  /** 删除合约 {@link RemoveHashRequest} {@link RemoveHashResponse} */
  RemoveHash(data: RemoveHashRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveHashResponse>;
  /** 设置凭证链上状态 {@link SetCredentialStatusRequest} {@link SetCredentialStatusResponse} */
  SetCredentialStatus(data: SetCredentialStatusRequest, config?: AxiosRequestConfig): AxiosPromise<SetCredentialStatusResponse>;
  /** 验证凭证 {@link VerifyCredentialRequest} {@link VerifyCredentialResponse} */
  VerifyCredential(data: VerifyCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyCredentialResponse>;
}

export declare type Versions = ["2021-05-19"];

export default Tdid;
