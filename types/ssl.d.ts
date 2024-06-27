/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** apiGateway实例详情 */
declare interface ApiGatewayInstanceDetail {
  /** 实例ID */
  ServiceId: string;
  /** 实例名称 */
  ServiceName: string;
  /** 域名 */
  Domain: string;
  /** 证书ID */
  CertId: string | null;
  /** 使用协议 */
  Protocol: string;
}

/** apigateway实例详情 - 异步关联云资源数据结构 */
declare interface ApiGatewayInstanceList {
  /** 地域 */
  Region?: string;
  /** apigateway实例详情 */
  InstanceList?: ApiGatewayInstanceDetail[] | null;
  /** 该地域下apigateway实例总数 */
  TotalCount?: number;
  /** 是否查询异常 */
  Error?: string | null;
}

/** 绑定资源地域结果 */
declare interface BindResourceRegionResult {
  /** 地域 */
  Region?: string | null;
  /** 关联资源总数 */
  TotalCount?: number;
}

/** 绑定资源结果 */
declare interface BindResourceResult {
  /** 资源类型：clb、cdn、waf、live、vod、ddos、tke、apigateway、tcb、teo（edgeOne） */
  ResourceType?: string;
  /** 绑定资源地域结果 */
  BindResourceRegionResult?: BindResourceRegionResult[];
}

/** cos实例详情 - 异步关联云资源数据结构 */
declare interface COSInstanceList {
  /** 地域 */
  Region?: string | null;
  /** 实例详情 */
  InstanceList?: CosInstanceDetail[] | null;
  /** 地域下总数 */
  TotalCount?: number | null;
  /** 错误信息 */
  Error?: string | null;
}

/** CDN实例详情 */
declare interface CdnInstanceDetail {
  /** 域名 */
  Domain?: string;
  /** 已部署证书ID */
  CertId?: string;
  /** 域名状态 */
  Status?: string;
  /** 域名计费状态 */
  HttpsBillingSwitch?: string;
}

/** cdn实例详情 - 异步关联云资源数据结构 */
declare interface CdnInstanceList {
  /** 该地域下CDN域名总数 */
  TotalCount?: number;
  /** cdn域名详情 */
  InstanceList?: CdnInstanceDetail[] | null;
  /** 是否查询异常 */
  Error?: string | null;
}

/** 证书异步任务ID */
declare interface CertTaskId {
  /** 证书ID */
  CertId?: string;
  /** 异步任务ID */
  TaskId?: string;
}

/** CLB证书详情 */
declare interface Certificate {
  /** 证书ID */
  CertId?: string;
  /** 证书绑定的域名 */
  DnsNames?: string[];
  /** 根证书ID */
  CertCaId?: string | null;
  /** 证书认证模式：UNIDIRECTIONAL单向认证，MUTUAL双向认证 */
  SSLMode?: string | null;
}

/** 获取证书列表（DescribeCertificates）返回参数键为 Certificates 数组下，key为CertificateExtra 的内容。 */
declare interface CertificateExtra {
  /** 证书可配置域名数量。 */
  DomainNumber?: string | null;
  /** 原始证书 ID。 */
  OriginCertificateId?: string | null;
  /** 重颁发证书原始 ID。 */
  ReplacedBy?: string | null;
  /** 重颁发证书新 ID。 */
  ReplacedFor?: string | null;
  /** 新订单证书 ID。 */
  RenewOrder?: string | null;
  /** 是否是国密证书 */
  SMCert?: number | null;
  /** 公司类型 */
  CompanyType?: number | null;
}

/** 获取证书列表（DescribeCertificates）返回参数键为 Certificates 的内容。 */
declare interface Certificates {
  /** 用户 UIN。 */
  OwnerUin?: string | null;
  /** 项目 ID。 */
  ProjectId?: string | null;
  /** 证书来源。 */
  From?: string | null;
  /** 证书套餐类型：2 = TrustAsia TLS RSA CA，3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = Wotrus 国密域名型证书，34 = Wotrus 国密域名型多域名证书，35 = Wotrus 国密域名型通配符证书，37 = Wotrus 国密企业型证书，38 = Wotrus 国密企业型多域名证书，39 = Wotrus 国密企业型通配符证书，40 = Wotrus 国密增强型证书，41 = Wotrus 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书，43 = DNSPod-企业型(OV)SSL证书，44 = DNSPod-企业型(OV)通配符SSL证书，45 = DNSPod-企业型(OV)多域名SSL证书， 46 = DNSPod-增强型(EV)SSL证书，47 = DNSPod-增强型(EV)多域名SSL证书，48 = DNSPod-域名型(DV)SSL证书，49 = DNSPod-域名型(DV)通配符SSL证书，50 = DNSPod-域名型(DV)多域名SSL证书，51 = DNSPod（国密）-企业型(OV)SSL证书，52 = DNSPod（国密）-企业型(OV)通配符SSL证书，53 = DNSPod（国密）-企业型(OV)多域名SSL证书，54 = DNSPod（国密）-域名型(DV)SSL证书，55 = DNSPod（国密）-域名型(DV)通配符SSL证书， 56 = DNSPod（国密）-域名型(DV)多域名SSL证书，57 = SecureSite 企业型专业版多域名(OV Pro)，58 = SecureSite 企业型多域名(OV)，59 = SecureSite 增强型专业版多域名(EV Pro)，60 = SecureSite 增强型多域名(EV)，61 = Geotrust 增强型多域名(EV) */
  PackageType?: string | null;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string | null;
  /** 颁发者。 */
  ProductZhName?: string | null;
  /** 主域名。 */
  Domain?: string | null;
  /** 备注名称。 */
  Alias?: string | null;
  /** 状态。0：审核中，1：已通过，2：审核失败，3：已过期，4：验证方式为 DNS_AUTO 类型的证书， 已添加DNS记录，5：企业证书，待提交，6：订单取消中，7：已取消，8：已提交资料， 待上传确认函，9：证书吊销中，10：已吊销，11：重颁发中，12：待上传吊销确认函，13：免费证书待提交资料状态，14：已退款， */
  Status?: number | null;
  /** 证书扩展信息。 */
  CertificateExtra?: CertificateExtra | null;
  /** 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启 */
  VulnerabilityStatus?: string | null;
  /** 状态信息。 */
  StatusMsg?: string | null;
  /** 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。 */
  VerifyType?: string | null;
  /** 证书生效时间。 */
  CertBeginTime?: string | null;
  /** 证书过期时间。 */
  CertEndTime?: string | null;
  /** 证书有效期，单位（月）。 */
  ValidityPeriod?: string | null;
  /** 创建时间。 */
  InsertTime?: string | null;
  /** 证书 ID。 */
  CertificateId?: string | null;
  /** 证书包含的多个域名（包含主域名）。 */
  SubjectAltName?: string[] | null;
  /** 证书类型名称。 */
  PackageTypeName?: string | null;
  /** 状态名称。 */
  StatusName?: string | null;
  /** 是否为 VIP 客户。 */
  IsVip?: boolean | null;
  /** 是否为 DV 版证书。 */
  IsDv?: boolean | null;
  /** 是否为泛域名证书。 */
  IsWildcard?: boolean | null;
  /** 是否启用了漏洞扫描功能。 */
  IsVulnerability?: boolean | null;
  /** 是否可续费。 */
  RenewAble?: boolean | null;
  /** 项目信息。 */
  ProjectInfo?: ProjectInfo | null;
  /** 关联的云资源，暂不可用 */
  BoundResource?: string[] | null;
  /** 是否可部署。 */
  Deployable?: boolean | null;
  /** 标签列表 */
  Tags?: Tags[] | null;
  /** 是否已忽略到期通知 */
  IsIgnore?: boolean | null;
  /** 是否国密证书 */
  IsSM?: boolean | null;
  /** 证书算法 */
  EncryptAlgorithm?: string | null;
  /** 上传CA证书的加密算法 */
  CAEncryptAlgorithms?: string[] | null;
  /** 上传CA证书的过期时间 */
  CAEndTimes?: string[] | null;
  /** 上传CA证书的通用名称 */
  CACommonNames?: string[] | null;
  /** 证书预审核信息 */
  PreAuditInfo?: PreAuditInfo | null;
  /** 是否自动续费 */
  AutoRenewFlag?: number | null;
  /** 托管状态，0，托管中，5，资源替换中， 10， 托管完成， -1未托管 */
  HostingStatus?: number | null;
  /** 托管完成时间 */
  HostingCompleteTime?: string | null;
  /** 托管新证书ID */
  HostingRenewCertId?: string | null;
  /** 存在的续费证书ID */
  HasRenewOrder?: string | null;
  /** 重颁发证书原证书是否删除 */
  ReplaceOriCertIsDelete?: boolean | null;
  /** 是否即将过期， 证书即将到期的30天内为即将过期 */
  IsExpiring?: boolean | null;
  /** DV证书添加验证截止时间 */
  DVAuthDeadline?: string | null;
  /** 域名验证通过时间 */
  ValidationPassedTime?: string | null;
  /** 证书关联的多域名 */
  CertSANs?: string[] | null;
  /** 域名验证驳回信息 */
  AwaitingValidationMsg?: string | null;
  /** 是否允许下载 */
  AllowDownload?: boolean | null;
  /** 证书域名是否全部在DNSPOD托管解析 */
  IsDNSPODResolve?: boolean | null;
  /** 是否是权益点购买的证书 */
  IsPackage?: boolean | null;
  /** 是否存在私钥密码 */
  KeyPasswordCustomFlag?: boolean | null;
  /** 支持下载的WEB服务器类型： nginx、apache、iis、tomcat、jks、root、other */
  SupportDownloadType?: SupportDownloadType | null;
}

/** clb实例详情 */
declare interface ClbInstanceDetail {
  /** CLB实例ID */
  LoadBalancerId: string;
  /** CLB实例名称 */
  LoadBalancerName: string;
  /** CLB监听器列表 */
  Listeners: ClbListener[] | null;
}

/** clb实例详情 - 异步关联云资源数据结构 */
declare interface ClbInstanceList {
  /** 地域 */
  Region?: string;
  /** clb实例详情 */
  InstanceList?: ClbInstanceDetail[] | null;
  /** 该地域下Clb实例总数 */
  TotalCount?: number;
  /** 是否查询异常 */
  Error?: string | null;
}

/** CLB实例监听器 */
declare interface ClbListener {
  /** 监听器ID */
  ListenerId: string;
  /** 监听器名称 */
  ListenerName: string;
  /** 是否开启SNI，1为开启，0为关闭 */
  SniSwitch: number;
  /** 监听器协议类型， HTTPS|TCP_SSL */
  Protocol: string;
  /** 监听器绑定的证书数据 */
  Certificate: Certificate | null;
  /** 监听器规则列表 */
  Rules: ClbListenerRule[] | null;
  /** 不匹配域名列表 */
  NoMatchDomains?: string[] | null;
}

/** CLB监听器规则 */
declare interface ClbListenerRule {
  /** 规则ID */
  LocationId?: string;
  /** 规则绑定的域名 */
  Domain?: string;
  /** 规则是否匹配待绑定证书的域名 */
  IsMatch?: boolean;
  /** 规则已绑定的证书数据 */
  Certificate?: Certificate | null;
  /** 不匹配域名列表 */
  NoMatchDomains?: string[] | null;
}

/** 公司信息 */
declare interface CompanyInfo {
  /** 公司名称 */
  CompanyName: string;
  /** 公司ID */
  CompanyId: number;
  /** 公司所在国家 */
  CompanyCountry: string;
  /** 公司所在省份 */
  CompanyProvince: string;
  /** 公司所在城市 */
  CompanyCity: string;
  /** 公司所在详细地址 */
  CompanyAddress: string;
  /** 公司电话 */
  CompanyPhone: string;
  /** 类型 */
  IdType?: string | null;
  /** ID号 */
  IdNumber?: string | null;
}

/** COS实例详情 */
declare interface CosInstanceDetail {
  /** 域名 */
  Domain: string;
  /** 已绑定的证书ID */
  CertId: string | null;
  /** ENABLED: 域名上线状态DISABLED:域名下线状态 */
  Status: string;
  /** 存储桶名称 */
  Bucket: string | null;
  /** 存储桶地域 */
  Region: string | null;
}

/** ddos复杂类型 */
declare interface DdosInstanceDetail {
  /** 域名 */
  Domain: string;
  /** 实例ID */
  InstanceId: string;
  /** 协议类型 */
  Protocol: string;
  /** 证书ID */
  CertId: string | null;
  /** 转发端口 */
  VirtualPort: string;
}

/** ddos实例详情 - 异步关联云资源数据结构 */
declare interface DdosInstanceList {
  /** 该地域下ddos域名总数 */
  TotalCount?: number;
  /** ddos实例详情 */
  InstanceList?: DdosInstanceDetail[] | null;
  /** 是否查询异常 */
  Error?: string | null;
}

/** 批量删除证书异步任务结果 */
declare interface DeleteTaskResult {
  /** 任务ID */
  TaskId?: string;
  /** 证书ID */
  CertId?: string;
  /** 异步查询结果： 0表示任务进行中、 1表示任务成功、 2表示任务失败、3表示未授权服务角色导致任务失败、4表示有未解绑的云资源导致任务失败、5表示查询关联云资源超时导致任务失败 */
  Status?: number;
  /** 错误信息 */
  Error?: string | null;
  /** 当前结果缓存时间 */
  CacheTime?: string | null;
  /** 包含的域名 */
  Domains?: string[] | null;
}

/** 部署记录详情 */
declare interface DeployRecordDetail {
  /** 部署记录详情ID */
  Id?: number;
  /** 部署证书ID */
  CertId?: string;
  /** 原绑定证书ID */
  OldCertId?: string | null;
  /** 部署实例ID */
  InstanceId?: string;
  /** 部署实例名称 */
  InstanceName?: string;
  /** 部署监听器ID */
  ListenerId?: string | null;
  /** 部署域名列表 */
  Domains?: string[];
  /** 部署监听器协议 */
  Protocol?: string | null;
  /** 部署状态 */
  Status?: number;
  /** 部署错误信息 */
  ErrorMsg?: string | null;
  /** 部署记录详情创建时间 */
  CreateTime?: string;
  /** 部署记录详情最后一次更新时间 */
  UpdateTime?: string;
  /** 部署监听器名称 */
  ListenerName?: string;
  /** 是否开启SNI */
  SniSwitch?: number;
  /** COS存储桶名称 */
  Bucket?: string | null;
  /** 命名空间名称 */
  Namespace?: string | null;
  /** secret名称 */
  SecretName?: string | null;
  /** 端口 */
  Port?: number | null;
  /** TCB环境ID */
  EnvId?: string | null;
  /** 部署的TCB类型 */
  TCBType?: string | null;
  /** 部署的TCB地域 */
  Region?: string | null;
}

/** 部署记录信息 */
declare interface DeployRecordInfo {
  /** 部署记录ID */
  Id: number;
  /** 部署证书ID */
  CertId: string;
  /** 部署资源类型 */
  ResourceType: string;
  /** 部署地域 */
  Region: string;
  /** 部署状态 */
  Status: number;
  /** 部署时间 */
  CreateTime: string;
  /** 最近一次更新时间 */
  UpdateTime: string;
}

/** 资源详情 */
declare interface DeployedResources {
  /** 证书ID */
  CertificateId: string;
  /** 数量 */
  Count: number;
  /** 资源标识:clb,cdn,live,waf,antiddos */
  Type: string;
  /** 不建议使用。字段返回和Resources相同。本字段后续只返回null */
  ResourceIds: string[] | null;
  /** 关联资源ID或关联域名。 */
  Resources: string[] | null;
}

/** 获取证书列表（DescribeCertificate）返回参数键为 DvAuthDetail 的内容。 */
declare interface DvAuthDetail {
  /** DV 认证密钥。 */
  DvAuthKey?: string | null;
  /** DV 认证值。 */
  DvAuthValue?: string | null;
  /** DV 认证值域名。 */
  DvAuthDomain: string | null;
  /** DV 认证值路径。 */
  DvAuthPath: string | null;
  /** DV 认证子域名。 */
  DvAuthKeySubDomain: string | null;
  /** DV 认证信息。 */
  DvAuths: DvAuths[] | null;
}

/** 返回参数键为 DvAuths 的内容。 */
declare interface DvAuths {
  /** DV 认证密钥。 */
  DvAuthKey?: string | null;
  /** DV 认证值。 */
  DvAuthValue?: string | null;
  /** DV 认证值域名。 */
  DvAuthDomain?: string | null;
  /** DV 认证值路径。 */
  DvAuthPath?: string | null;
  /** DV 认证子域名， */
  DvAuthSubDomain?: string | null;
  /** DV 认证类型。 */
  DvAuthVerifyType?: string | null;
}

/** 错误异常 */
declare interface Error {
  /** 异常错误码 */
  Code?: string | null;
  /** 异常错误信息 */
  Message?: string | null;
}

/** 过滤参数列表 */
declare interface Filter {
  /** 过滤参数key */
  FilterKey: string;
  /** 过滤参数值 */
  FilterValue: string;
}

/** 云原生网关证书信息 */
declare interface GatewayCertificate {
  /** 网关证书ID */
  Id?: string | null;
  /** 网关证书名称 */
  Name?: string | null;
  /** 绑定域名 */
  BindDomains?: string[] | null;
  /** 证书来源 */
  CertSource?: string | null;
  /** 当前绑定的SSL证书ID */
  CertId?: string | null;
}

/** Lighthouse实例 */
declare interface LighthouseInstanceDetail {
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** IP地址 */
  IP: string[];
  /** 可选择域名 */
  Domain: string[];
}

/** live实例详情 */
declare interface LiveInstanceDetail {
  /** 域名 */
  Domain: string;
  /** 已绑定的证书ID */
  CertId: string | null;
  /** -1：域名未关联证书。1： 域名https已开启。0： 域名https已关闭。 */
  Status: number;
}

/** live实例详情 - 异步关联云资源数据结构 */
declare interface LiveInstanceList {
  /** 该地域下live实例总数 */
  TotalCount?: number;
  /** live实例详情 */
  InstanceList?: LiveInstanceDetail[] | null;
  /** 是否查询异常 */
  Error?: string | null;
}

/** 管理人信息 */
declare interface ManagerInfo {
  /** 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期 */
  Status: string;
  /** 管理人姓名 */
  ManagerFirstName: string;
  /** 管理人姓名 */
  ManagerLastName: string;
  /** 管理人职位 */
  ManagerPosition: string;
  /** 管理人电话 */
  ManagerPhone: string;
  /** 管理人邮箱 */
  ManagerMail: string;
  /** 管理人所属部门 */
  ManagerDepartment: string;
  /** 创建时间 */
  CreateTime: string | null;
  /** 管理人域名数量 */
  DomainCount: number;
  /** 管理人证书数量 */
  CertCount: number;
  /** 管理人ID */
  ManagerId: number;
  /** 审核有效到期时间 */
  ExpireTime: string | null;
  /** 最近一次提交审核时间 */
  SubmitAuditTime: string | null;
  /** 审核通过时间 */
  VerifyTime: string | null;
  /** 具体审核状态信息 */
  StatusInfo: ManagerStatusInfo[] | null;
}

/** 管理人的四种审核状态 */
declare interface ManagerStatusInfo {
}

/** 证书操作日志。 */
declare interface OperationLog {
  /** 操作证书动作。 */
  Action?: string;
  /** 操作时间。 */
  CreatedOn?: string;
  /** 主账号 */
  Uin?: string | null;
  /** 子账号 */
  SubAccountUin?: string | null;
  /** 证书ID */
  CertId?: string | null;
  /** 操作 */
  Type?: string | null;
}

/** 权益包基本信息 */
declare interface PackageInfo {
  /** 权益包ID。 */
  PackageId: string;
  /** 权益包内权益点总量。 */
  Total: number;
  /** 权益包内权益点余量。 */
  Balance: number;
  /** 权益包名称。 */
  Type: string;
  /** 权益点是转入时，来源信息。 */
  SourceUin: number | null;
  /** 权益点状态。 */
  Status: string;
  /** 过期时间。 */
  ExpireTime: string;
  /** 更新时间。 */
  UpdateTime: string;
  /** 生成时间。 */
  CreateTime: string;
  /** 来源类型。 */
  SourceType: string;
  /** 转移信息。 */
  TransferOutInfos: PackageTransferOutInfo[] | null;
}

/** 权益包转出详情 */
declare interface PackageTransferOutInfo {
  /** 权益包ID。 */
  PackageId: string;
  /** 转移码。 */
  TransferCode: string;
  /** 本次转移点数。 */
  TransferCount: number;
  /** 转入的PackageID。 */
  ReceivePackageId: string | null;
  /** 本次转移过期时间。 */
  ExpireTime: string;
  /** 本次转移生成时间。 */
  CreateTime: string;
  /** 本次转移更新时间。 */
  UpdateTime: string;
  /** 转移状态。 */
  TransferStatus: string;
  /** 接收者uin。 */
  ReceiverUin: number | null;
  /** 接收时间。 */
  ReceiveTime: string | null;
}

/** 预审核信息列表 */
declare interface PreAuditInfo {
  /** 证书总年限 */
  TotalPeriod: number | null;
  /** 证书当前年限 */
  NowPeriod: number | null;
  /** 证书预审核管理人ID */
  ManagerId: string | null;
}

/** 获取证书列表（DescribeCertificates）返回参数键为 Certificates 下，key为 ProjectInfo 的内容。 */
declare interface ProjectInfo {
  /** 项目名称。 */
  ProjectName: string | null;
  /** 项目创建用户 UIN。 */
  ProjectCreatorUin: number | null;
  /** 项目创建时间。 */
  ProjectCreateTime: string | null;
  /** 项目信息简述。 */
  ProjectResume: string | null;
  /** 用户 UIN。 */
  OwnerUin: number | null;
  /** 项目 ID。 */
  ProjectId: string | null;
}

/** 云资源地域列表 */
declare interface ResourceTypeRegions {
  /** 云资源类型 */
  ResourceType?: string | null;
  /** 地域列表 */
  Regions?: string[] | null;
}

/** 返回参数键为 RevokeDomainValidateAuths 的内容。 */
declare interface RevokeDomainValidateAuths {
  /** DV 认证值路径。 */
  DomainValidateAuthPath: string | null;
  /** DV 认证 KEY。 */
  DomainValidateAuthKey: string | null;
  /** DV 认证值。 */
  DomainValidateAuthValue: string | null;
  /** DV 认证域名。 */
  DomainValidateAuthDomain: string | null;
}

/** 根证书 */
declare interface RootCertificates {
  /** 国密签名证书 */
  Sign: string | null;
  /** 国密加密证书 */
  Encrypt: string | null;
  /** 标准证书 */
  Standard: string | null;
}

/** 获取证书列表（DescribeCertificate）返回参数键为 SubmittedData 的内容。 */
declare interface SubmittedData {
  /** CSR 类型，（online = 在线生成CSR，parse = 粘贴 CSR）。 */
  CsrType?: string | null;
  /** CSR 内容。 */
  CsrContent?: string | null;
  /** 域名信息。 */
  CertificateDomain?: string | null;
  /** DNS 信息。 */
  DomainList?: string[] | null;
  /** 私钥密码。 */
  KeyPassword?: string | null;
  /** 企业或单位名称。 */
  OrganizationName?: string | null;
  /** 部门。 */
  OrganizationDivision?: string | null;
  /** 地址。 */
  OrganizationAddress?: string | null;
  /** 国家。 */
  OrganizationCountry?: string | null;
  /** 市。 */
  OrganizationCity?: string | null;
  /** 省。 */
  OrganizationRegion?: string | null;
  /** 邮政编码。 */
  PostalCode?: string | null;
  /** 座机区号。 */
  PhoneAreaCode?: string | null;
  /** 座机号码。 */
  PhoneNumber?: string | null;
  /** 管理员名。 */
  AdminFirstName?: string | null;
  /** 管理员姓。 */
  AdminLastName?: string | null;
  /** 管理员电话号码。 */
  AdminPhoneNum?: string | null;
  /** 管理员邮箱地址。 */
  AdminEmail?: string | null;
  /** 管理员职位。 */
  AdminPosition?: string | null;
  /** 联系人名。 */
  ContactFirstName?: string | null;
  /** 联系人姓。 */
  ContactLastName?: string | null;
  /** 联系人电话号码。 */
  ContactNumber?: string | null;
  /** 联系人邮箱地址， */
  ContactEmail?: string | null;
  /** 联系人职位。 */
  ContactPosition?: string | null;
  /** 验证类型。 */
  VerifyType?: string | null;
}

/** 支持下载的类型 */
declare interface SupportDownloadType {
  /** 是否可以下载nginx可用格式 */
  NGINX?: boolean;
  /** 是否可以下载apache可用格式 */
  APACHE?: boolean;
  /** 是否可以下载tomcat可用格式 */
  TOMCAT?: boolean;
  /** 是否可以下载iis可用格式 */
  IIS?: boolean;
  /** 是否可以下载JKS可用格式 */
  JKS?: boolean;
  /** 是否可以下载其他格式 */
  OTHER?: boolean;
  /** 是否可以下载根证书 */
  ROOT?: boolean;
}

/** 异步任务证书关联云资源结果 */
declare interface SyncTaskBindResourceResult {
  /** 任务ID */
  TaskId?: string;
  /** 关联云资源结果 */
  BindResourceResult?: BindResourceResult[] | null;
  /** 关联云资源异步查询结果： 0表示查询中， 1表示查询成功。 2表示查询异常； 若状态为1，则查看BindResourceResult结果；若状态为2，则查看Error原因 */
  Status?: number;
  /** 关联云资源错误信息 */
  Error?: Error | null;
  /** 当前结果缓存时间 */
  CacheTime?: string;
}

/** TCB访问服务实例 */
declare interface TCBAccessInstance {
  /** 域名 */
  Domain?: string | null;
  /** 状态 */
  Status?: number | null;
  /** 统一域名状态 */
  UnionStatus?: number | null;
  /** 是否被抢占, 被抢占表示域名被其他环境绑定了，需要解绑或者重新绑定。 */
  IsPreempted?: boolean | null;
  /** icp黑名单封禁状态，0-未封禁，1-封禁 */
  ICPStatus?: number | null;
  /** 已绑定证书ID */
  OldCertificateId?: string | null;
}

/** TCB访问服务列表 */
declare interface TCBAccessService {
  /** 实例列表 */
  InstanceList?: TCBAccessInstance[] | null;
  /** 数量 */
  TotalCount?: number | null;
}

/** TCB环境 */
declare interface TCBEnvironment {
  /** 唯一ID */
  ID?: string | null;
  /** 来源 */
  Source?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 状态 */
  Status?: string | null;
}

/** tcb环境实例详情 - 异步关联云资源数据结构 */
declare interface TCBEnvironments {
  /** tcb环境 */
  Environment?: TCBEnvironment | null;
  /** 访问服务 */
  AccessService?: TCBAccessService | null;
  /** 静态托管 */
  HostService?: TCBHostService | null;
}

/** TCB静态托管服务实例 */
declare interface TCBHostInstance {
  /** 域名 */
  Domain?: string | null;
  /** 状态 */
  Status?: string | null;
  /** 解析状态 */
  DNSStatus?: string | null;
  /** 已绑定证书ID */
  OldCertificateId?: string | null;
}

/** TCB静态托管服务列表 */
declare interface TCBHostService {
  /** 实例列表 */
  InstanceList?: TCBHostInstance[] | null;
  /** 数量 */
  TotalCount?: number | null;
}

/** tcb地域实例详情 - 异步关联云资源数据结构 */
declare interface TCBInstanceList {
  /** 地域 */
  Region?: string;
  /** tcb环境实例详情 */
  Environments?: TCBEnvironments[] | null;
  /** 是否查询异常 */
  Error?: string | null;
}

/** tse实例详情 */
declare interface TSEInstanceDetail {
  /** 网关ID */
  GatewayId?: string | null;
  /** 网关名称 */
  GatewayName?: string | null;
  /** 网关证书列表 */
  CertificateList?: GatewayCertificate[] | null;
}

/** TSE实例详情 - 异步关联云资源数据结构 */
declare interface TSEInstanceList {
  /** TSE实例详情 */
  InstanceList?: TSEInstanceDetail[] | null;
  /** 该地域下TSE实例总数 */
  TotalCount?: number;
  /** 地域 */
  Region?: string;
  /** 是否查询异常 */
  Error?: string | null;
}

/** 标签 */
declare interface Tags {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** teo实例详情 */
declare interface TeoInstanceDetail {
  /** 域名 */
  Host: string;
  /** 证书ID */
  CertId: string;
  /** 区域ID */
  ZoneId?: string | null;
  /** 域名状态 */
  Status?: string;
}

/** edgeone实例详情 - 异步关联云资源数据结构 */
declare interface TeoInstanceList {
  /** edgeone实例详情 */
  InstanceList?: TeoInstanceDetail[] | null;
  /** edgeone实例总数 */
  TotalCount?: number;
  /** 是否查询异常 */
  Error?: string | null;
}

/** tke ingress实例详情 */
declare interface TkeIngressDetail {
  /** ingress名称 */
  IngressName: string;
  /** tls域名列表 */
  TlsDomains: string[];
  /** ingress域名列表 */
  Domains: string[];
}

/** tke实例详情 */
declare interface TkeInstanceDetail {
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群命名空间列表 */
  NamespaceList?: TkeNameSpaceDetail[];
  /** 集群类型 */
  ClusterType?: string;
  /** 集群版本 */
  ClusterVersion?: string;
}

/** tke实例详情 - 异步关联云资源数据结构 */
declare interface TkeInstanceList {
  /** 地域 */
  Region?: string;
  /** tke实例详情 */
  InstanceList?: TkeInstanceDetail[] | null;
  /** 该地域下tke实例总数 */
  TotalCount?: number;
  /** 是否查询异常 */
  Error?: string | null;
}

/** tke namespace详情 */
declare interface TkeNameSpaceDetail {
  /** namespace名称 */
  Name: string;
  /** secret列表 */
  SecretList: TkeSecretDetail[];
}

/** tke secret详情 */
declare interface TkeSecretDetail {
  /** secret名称 */
  Name: string;
  /** 证书ID */
  CertId: string;
  /** ingress列表 */
  IngressList: TkeIngressDetail[];
  /** 和新证书不匹配的域名列表 */
  NoMatchDomains: string[] | null;
}

/** 更新记录详情 */
declare interface UpdateRecordDetail {
  /** 详情记录id */
  Id?: number;
  /** 新证书ID */
  CertId?: string;
  /** 旧证书ID */
  OldCertId?: string;
  /** 部署域名列表 */
  Domains?: string[] | null;
  /** 部署资源类型 */
  ResourceType?: string;
  /** 部署地域 */
  Region?: string | null;
  /** 部署状态 */
  Status?: number;
  /** 部署错误信息 */
  ErrorMsg?: string | null;
  /** 部署时间 */
  CreateTime?: string;
  /** 最后一次更新时间 */
  UpdateTime?: string;
  /** 部署实例ID */
  InstanceId?: string | null;
  /** 部署实例名称 */
  InstanceName?: string | null;
  /** 部署监听器ID（CLB专用） */
  ListenerId?: string | null;
  /** 部署监听器名称（CLB专用） */
  ListenerName?: string | null;
  /** 协议 */
  Protocol?: string | null;
  /** 是否开启SNI（CLB专用） */
  SniSwitch?: number | null;
  /** bucket名称（COS专用） */
  Bucket?: string | null;
  /** 端口 */
  Port?: number | null;
  /** 命名空间（TKE专用） */
  Namespace?: string | null;
  /** secret名称（TKE专用） */
  SecretName?: string | null;
  /** 环境ID */
  EnvId?: string | null;
  /** TCB部署类型 */
  TCBType?: string | null;
}

/** 更新记录详情列表 */
declare interface UpdateRecordDetails {
  /** 部署资源类型 */
  ResourceType: string;
  /** 部署资源详情列表 */
  List: UpdateRecordDetail[];
  /** 该部署资源总数 */
  TotalCount?: number;
}

/** 部署记录信息 */
declare interface UpdateRecordInfo {
  /** 记录ID */
  Id: number;
  /** 新证书ID */
  CertId: string;
  /** 原证书ID */
  OldCertId: string;
  /** 部署资源类型列表 */
  ResourceTypes: string[];
  /** 部署地域列表 */
  Regions: string[] | null;
  /** 部署状态 */
  Status: number;
  /** 部署时间 */
  CreateTime: string;
  /** 最后一次更新时间 */
  UpdateTime: string;
}

/** 更新异步任务进度 */
declare interface UpdateSyncProgress {
  /** 资源类型 */
  ResourceType?: string | null;
  /** 地域结果列表 */
  UpdateSyncProgressRegions?: UpdateSyncProgressRegion[] | null;
  /** 异步更新进度状态：0， 待处理， 1 已处理， 3 处理中 */
  Status?: number | null;
}

/** 更新异步任务进度 */
declare interface UpdateSyncProgressRegion {
  /** 资源类型 */
  Region?: string | null;
  /** 总数 */
  TotalCount?: number | null;
  /** 执行完成数量 */
  OffsetCount?: number | null;
  /** 异步更新进度状态：0， 待处理， 1 已处理， 3 处理中 */
  Status?: number | null;
}

/** vod实例详情 - 异步关联云资源数据结构 */
declare interface VODInstanceList {
  /** vod实例详情 */
  InstanceList?: VodInstanceDetail[] | null;
  /** 该地域下vod实例总数 */
  TotalCount?: number;
  /** 是否查询异常 */
  Error?: string | null;
}

/** Vod实例 */
declare interface VodInstanceDetail {
  /** 域名 */
  Domain: string;
  /** 证书ID */
  CertId: string;
}

/** waf实例详情 */
declare interface WafInstanceDetail {
  /** 域名 */
  Domain?: string;
  /** 证书ID */
  CertId?: string | null;
  /** 是否保持长连接，1是，0 否 */
  Keepalive?: number | null;
}

/** waf实例详情 - 异步关联云资源数据结构 */
declare interface WafInstanceList {
  /** 地域 */
  Region?: string;
  /** waf实例详情 */
  InstanceList?: WafInstanceDetail[] | null;
  /** 该地域下waf实例总数 */
  TotalCount?: number;
  /** 是否查询异常 */
  Error?: string | null;
}

declare interface ApplyCertificateRequest {
  /** 验证方式：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证。 */
  DvAuthMethod: string;
  /** 域名。 */
  DomainName: string;
  /** 项目 ID。 */
  ProjectId?: number;
  /** 证书类型，目前仅支持类型83。83 = TrustAsia C1 DV Free。 */
  PackageType?: string;
  /** 邮箱。 */
  ContactEmail?: string;
  /** 手机。 */
  ContactPhone?: string;
  /** 有效期，默认3个月，目前仅支持3个月。 */
  ValidityPeriod?: string;
  /** 加密算法，支持 RSA及ECC。 */
  CsrEncryptAlgo?: string;
  /** 密钥对参数，RSA仅支持2048。ECC仅支持prime256v1。加密算法选择ECC时，此参数必填 */
  CsrKeyParameter?: string;
  /** CSR 的加密密码。 */
  CsrKeyPassword?: string;
  /** 备注名称。 */
  Alias?: string;
  /** 原证书 ID，用于重新申请。 */
  OldCertificateId?: string;
  /** 权益包ID，用于免费证书扩容包使用 */
  PackageId?: string;
  /** 签发后是否删除自动域名验证记录， 默认为否；仅域名为DNS_AUTO验证类型支持传参 */
  DeleteDnsAutoRecord?: boolean;
  /** 域名数组（多域名证书可以上传）。 */
  DnsNames?: string[];
}

declare interface ApplyCertificateResponse {
  /** 证书 ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelAuditCertificateRequest {
  /** 证书ID */
  CertificateId: string;
}

declare interface CancelAuditCertificateResponse {
  /** 操作是否成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelCertificateOrderRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface CancelCertificateOrderResponse {
  /** 取消订单成功的证书 ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckCertificateChainRequest {
  /** 待检查的证书链 */
  CertificateChain: string;
}

declare interface CheckCertificateChainResponse {
  /** true为通过检查，false为未通过检查。 */
  IsValid?: boolean;
  /** true为可信CA，false为不可信CA。 */
  IsTrustedCA?: boolean;
  /** 包含证书链中每一段证书的通用名称。 */
  Chains?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CommitCertificateInformationRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** 域名验证方式 */
  VerifyType?: string;
}

declare interface CommitCertificateInformationResponse {
  /** CA机构侧订单号。 */
  OrderId?: string;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CompleteCertificateRequest {
  /** 证书ID */
  CertificateId: string;
}

declare interface CompleteCertificateResponse {
  /** 证书ID */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCertificateBindResourceSyncTaskRequest {
  /** 证书ID列表，总数不能超过100 */
  CertificateIds: string[];
  /** 是否使用缓存， 1使用缓存，0不使用缓存； 默认为1使用缓存； 若当前证书ID存在半小时已完成的任务， 则使用缓存的情况下， 会读取半小时内离当前时间最近的查询结果 */
  IsCache: number;
}

declare interface CreateCertificateBindResourceSyncTaskResponse {
  /** 证书关联云资源异步任务ID列表 */
  CertTaskIds?: CertTaskId[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCertificateByPackageRequest {
  /** 证书产品PID。 */
  ProductPid: number;
  /** 要消耗的权益包ID。 */
  PackageIds: string[];
  /** 证书域名数量。 */
  DomainCount: string;
  /** 多年期证书年限。 */
  Period: number;
  /** 要续费的原证书ID（续费时填写）。 */
  OldCertificateId?: string;
  /** 续费时CSR生成方式（original、upload、online）。 */
  RenewGenCsrMethod?: string;
  /** 续费时选择上传CSR时填写CSR。 */
  RenewCsr?: string;
  /** 续费证书CSR的算法类型。 */
  RenewAlgorithmType?: string;
  /** 续费证书CSR的算法参数。 */
  RenewAlgorithmParam?: string;
  /** 项目ID。 */
  ProjectId?: number;
  /** 标签。 */
  Tags?: Tags[];
  /** 续费证书的私钥密码。 */
  RenewKeyPass?: string;
  /** 批量购买证书时预填写的域名。 */
  DomainNames?: string;
  /** 批量购买证书数量。 */
  CertificateCount?: number;
  /** 预填写的管理人ID。 */
  ManagerId?: number;
  /** 预填写的公司ID。 */
  CompanyId?: number;
  /** 验证方式 */
  VerifyType?: string;
}

declare interface CreateCertificateByPackageResponse {
  /** 证书ID。 */
  CertificateId?: string;
  /** 批量购买证书时返回多个证书ID。 */
  CertificateIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCertificateRequest {
  /** 证书商品ID，3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = DNSPod 国密域名型证书，34 = DNSPod 国密域名型多域名证书，35 = DNSPod 国密域名型通配符证书，37 = DNSPod 国密企业型证书，38 = DNSPod 国密企业型多域名证书，39 = DNSPod 国密企业型通配符证书，40 = DNSPod 国密增强型证书，41 = DNSPod 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书。 */
  ProductId: number;
  /** 证书包含的域名数量 */
  DomainNum: number;
  /** 证书年限，当前只支持 1 年证书的购买 */
  TimeSpan: number;
}

declare interface CreateCertificateResponse {
  /** 证书ID列表 */
  CertificateIds: string[];
  /** 订单号列表 */
  DealIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** 删除时是否检查证书关联了云资源。默认不检查。如选择检查(需要授权服务角色SSL_QCSLinkedRoleInReplaceLoadCertificate)删除将变成异步,接口会返回异步任务ID。需使用DescribeDeleteCertificatesTaskResult接口查询删除是否成功。 */
  IsCheckResource?: boolean;
}

declare interface DeleteCertificateResponse {
  /** 删除结果（true：删除成功，false：删除失败） */
  DeleteResult?: boolean;
  /** 异步删除的任务ID */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteManagerRequest {
  /** 管理人ID */
  ManagerId: number;
}

declare interface DeleteManagerResponse {
  /** 管理人ID */
  ManagerId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployCertificateInstanceRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 需要部署实例列表 */
  InstanceIdList: string[];
  /** 部署的云资源类型 */
  ResourceType?: string;
  /** 部署云资源状态：云直播：-1：域名未关联证书。1： 域名https已开启。0： 域名https已关闭。 */
  Status?: number;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
}

declare interface DeployCertificateInstanceResponse {
  /** 云资源部署任务ID */
  DeployRecordId?: number | null;
  /** 部署状态，1表示部署成功，0表示部署失败 */
  DeployStatus?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployCertificateRecordRetryRequest {
  /** 待重试部署记录ID */
  DeployRecordId?: number;
  /** 待重试部署记录详情ID */
  DeployRecordDetailId?: number;
}

declare interface DeployCertificateRecordRetryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployCertificateRecordRollbackRequest {
  /** 待重试部署记录ID */
  DeployRecordId?: number;
}

declare interface DeployCertificateRecordRollbackResponse {
  /** 回滚部署记录ID */
  DeployRecordId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateBindResourceTaskDetailRequest {
  /** 任务ID，根据任务ID查询绑定云资源结果 */
  TaskId: string;
  /** 每页展示数量， 默认10，最大值100; 分页总数为云资源地域下实例总数， 即第一页会拉群每个云资源的地域下面Limit数量实例 */
  Limit?: string;
  /** 当前偏移量 */
  Offset?: string;
  /** 查询资源类型的结果详情， 不传则查询所有 */
  ResourceTypes?: string[];
  /** 查询地域列表的数据，CLB、TKE、WAF、APIGATEWAY、TCB支持地域查询， 其他资源类型不支持 */
  Regions?: string[];
}

declare interface DescribeCertificateBindResourceTaskDetailResponse {
  /** 关联clb资源详情 */
  CLB?: ClbInstanceList[] | null;
  /** 关联cdn资源详情 */
  CDN?: CdnInstanceList[] | null;
  /** 关联waf资源详情 */
  WAF?: WafInstanceList[] | null;
  /** 关联ddos资源详情 */
  DDOS?: DdosInstanceList[] | null;
  /** 关联live资源详情 */
  LIVE?: LiveInstanceList[] | null;
  /** 关联vod资源详情 */
  VOD?: VODInstanceList[] | null;
  /** 关联tke资源详情 */
  TKE?: TkeInstanceList[] | null;
  /** 关联apigateway资源详情 */
  APIGATEWAY?: ApiGatewayInstanceList[] | null;
  /** 关联tcb资源详情 */
  TCB?: TCBInstanceList[] | null;
  /** 关联teo资源详情 */
  TEO?: TeoInstanceList[] | null;
  /** 关联云资源异步查询结果： 0表示查询中， 1表示查询成功。 2表示查询异常； 若状态为1，则查看BindResourceResult结果；若状态为2，则查看Error原因 */
  Status?: number;
  /** 当前结果缓存时间 */
  CacheTime?: string;
  /** 关联tse资源详情 */
  TSE?: TSEInstanceList[] | null;
  /** 关联的COS资源详情 */
  COS?: COSInstanceList[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateBindResourceTaskResultRequest {
  /** 任务ID，根据任务ID查询绑定云资源结果， 最大支持100个 */
  TaskIds: string[];
}

declare interface DescribeCertificateBindResourceTaskResultResponse {
  /** 异步任务绑定关联云资源结果列表 */
  SyncTaskBindResourceResult?: SyncTaskBindResourceResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateDetailRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface DescribeCertificateDetailResponse {
  /** 用户 UIN。 */
  OwnerUin?: string | null;
  /** 项目 ID。 */
  ProjectId?: string | null;
  /** 证书来源：trustasia = 亚洲诚信，upload = 用户上传。 */
  From?: string | null;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string | null;
  /** 证书套餐类型：null = 用户上传证书（没有套餐类型），1 = GeoTrust DV SSL CA - G3， 2 = TrustAsia TLS RSA CA， 3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = DNSPod 国密域名型证书，34 = DNSPod 国密域名型多域名证书，35 = DNSPod 国密域名型通配符证书，37 = DNSPod 国密企业型证书，38 = DNSPod 国密企业型多域名证书，39 = DNSPod 国密企业型通配符证书，40 = DNSPod 国密增强型证书，41 = DNSPod 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书。 */
  PackageType?: string | null;
  /** 颁发者。 */
  ProductZhName?: string | null;
  /** 域名。 */
  Domain?: string | null;
  /** 备注名称。 */
  Alias?: string | null;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。 */
  Status?: number | null;
  /** 状态信息。 */
  StatusMsg?: string | null;
  /** 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。 */
  VerifyType?: string | null;
  /** 漏洞扫描状态。 */
  VulnerabilityStatus?: string | null;
  /** 证书生效时间。 */
  CertBeginTime?: string | null;
  /** 证书失效时间。 */
  CertEndTime?: string | null;
  /** 证书有效期：单位（月）。 */
  ValidityPeriod?: string | null;
  /** 申请时间。 */
  InsertTime?: string | null;
  /** 订单 ID。 */
  OrderId?: string | null;
  /** 证书扩展信息。 */
  CertificateExtra?: CertificateExtra | null;
  /** 证书私钥 */
  CertificatePrivateKey?: string | null;
  /** 证书公钥（即证书内容） */
  CertificatePublicKey?: string | null;
  /** DV 认证信息。 */
  DvAuthDetail?: DvAuthDetail | null;
  /** 漏洞扫描评估报告。 */
  VulnerabilityReport?: string | null;
  /** 证书 ID。 */
  CertificateId?: string | null;
  /** 证书类型名称。 */
  TypeName?: string | null;
  /** 状态描述。 */
  StatusName?: string | null;
  /** 证书包含的多个域名（不包含主域名，主域名使用Domain字段） */
  SubjectAltName?: string[] | null;
  /** 是否为付费证书。 */
  IsVip?: boolean | null;
  /** 是否为泛域名证书。 */
  IsWildcard?: boolean | null;
  /** 是否为 DV 版证书。 */
  IsDv?: boolean | null;
  /** 是否启用了漏洞扫描功能。 */
  IsVulnerability?: boolean | null;
  /** 提交的资料信息。 */
  SubmittedData?: SubmittedData | null;
  /** 是否可续费。 */
  RenewAble?: boolean | null;
  /** 是否可部署。 */
  Deployable?: boolean | null;
  /** 关联标签列表。 */
  Tags?: Tags[] | null;
  /** 根证书。 */
  RootCert?: RootCertificates | null;
  /** 国密加密证书 */
  EncryptCert?: string | null;
  /** 国密加密私钥 */
  EncryptPrivateKey?: string | null;
  /** 签名证书 SHA1指纹 */
  CertFingerprint?: string | null;
  /** 加密证书 SHA1指纹 （国密证书特有） */
  EncryptCertFingerprint?: string | null;
  /** 证书算法 */
  EncryptAlgorithm?: string | null;
  /** DV证书吊销验证值 */
  DvRevokeAuthDetail?: DvAuths[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateOperateLogsRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 请求日志数量，默认为20。 */
  Limit?: number;
  /** 开始时间，默认15天前。 */
  StartTime?: string;
  /** 结束时间，默认现在时间。 */
  EndTime?: string;
}

declare interface DescribeCertificateOperateLogsResponse {
  /** 当前查询条件日志总数。 */
  AllTotal?: number;
  /** 本次请求返回的日志数量。 */
  TotalCount?: number;
  /** 证书操作日志列表。 */
  OperateLogs?: OperationLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface DescribeCertificateResponse {
  /** 用户 UIN。 */
  OwnerUin?: string | null;
  /** 项目 ID。 */
  ProjectId?: string | null;
  /** 证书来源：trustasia = 亚洲诚信，upload = 用户上传。 */
  From?: string | null;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string | null;
  /** 证书套餐类型： 2 = TrustAsia TLS RSA CA，3 = SecureSite 增强型企业版（EV Pro）， 4 = SecureSite 增强型（EV）， 5 = SecureSite 企业型专业版（OV Pro）， 6 = SecureSite 企业型（OV）， 7 = SecureSite 企业型（OV）通配符， 8 = Geotrust 增强型（EV）， 9 = Geotrust 企业型（OV）， 10 = Geotrust 企业型（OV）通配符， 11 = TrustAsia 域名型多域名 SSL 证书， 12 = TrustAsia 域名型（DV）通配符， 13 = TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14 = TrustAsia 企业型（OV）SSL 证书（D3）， 15 = TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16 = TrustAsia 增强型 （EV）SSL 证书（D3）， 17 = TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18 = GlobalSign 企业型（OV）SSL 证书， 19 = GlobalSign 企业型通配符 （OV）SSL 证书， 20 = GlobalSign 增强型 （EV）SSL 证书， 21 = TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22 = GlobalSign 企业型多域名（OV）SSL 证书， 23 = GlobalSign 企业型通配符多域名（OV）SSL 证书， 24 = GlobalSign 增强型多域名（EV）SSL 证书，25 = Wotrus 域名型证书，26 = Wotrus 域名型多域名证书，27 = Wotrus 域名型通配符证书，28 = Wotrus 企业型证书，29 = Wotrus 企业型多域名证书，30 = Wotrus 企业型通配符证书，31 = Wotrus 增强型证书，32 = Wotrus 增强型多域名证书，33 = Wotrus 国密域名型证书，34 = Wotrus 国密域名型多域名证书，35 = Wotrus 国密域名型通配符证书，37 = Wotrus 国密企业型证书，38 = Wotrus 国密企业型多域名证书，39 = Wotrus 国密企业型通配符证书，40 = Wotrus 国密增强型证书，41 = Wotrus 国密增强型多域名证书，42 = TrustAsia 域名型通配符多域名证书，43 = DNSPod-企业型(OV)SSL证书，44 = DNSPod-企业型(OV)通配符SSL证书，45 = DNSPod-企业型(OV)多域名SSL证书， 46 = DNSPod-增强型(EV)SSL证书，47 = DNSPod-增强型(EV)多域名SSL证书，48 = DNSPod-域名型(DV)SSL证书，49 = DNSPod-域名型(DV)通配符SSL证书，50 = DNSPod-域名型(DV)多域名SSL证书，51 = DNSPod（国密）-企业型(OV)SSL证书，52 = DNSPod（国密）-企业型(OV)通配符SSL证书，53 = DNSPod（国密）-企业型(OV)多域名SSL证书，54 = DNSPod（国密）-域名型(DV)SSL证书，55 = DNSPod（国密）-域名型(DV)通配符SSL证书， 56 = DNSPod（国密）-域名型(DV)多域名SSL证书，57 = SecureSite 企业型专业版多域名(OV Pro)，58 = SecureSite 企业型多域名(OV)，59 = SecureSite 增强型专业版多域名(EV Pro)，60 = SecureSite 增强型多域名(EV)，61 = Geotrust 增强型多域名(EV) */
  PackageType?: string | null;
  /** 证书颁发者名称。 */
  ProductZhName?: string | null;
  /** 域名。 */
  Domain?: string | null;
  /** 备注名称。 */
  Alias?: string | null;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函。 */
  Status?: number | null;
  /** 状态信息。 */
  StatusMsg?: string | null;
  /** 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。 */
  VerifyType?: string | null;
  /** 漏洞扫描状态。 */
  VulnerabilityStatus?: string | null;
  /** 证书生效时间。 */
  CertBeginTime?: string | null;
  /** 证书失效时间。 */
  CertEndTime?: string | null;
  /** 证书有效期：单位(月)。 */
  ValidityPeriod?: string | null;
  /** 申请时间。 */
  InsertTime?: string | null;
  /** 订单 ID。 */
  OrderId?: string | null;
  /** 证书扩展信息。 */
  CertificateExtra?: CertificateExtra | null;
  /** DV 认证信息。 */
  DvAuthDetail?: DvAuthDetail | null;
  /** 漏洞扫描评估报告。 */
  VulnerabilityReport?: string | null;
  /** 证书 ID。 */
  CertificateId?: string | null;
  /** 证书类型名称。 */
  PackageTypeName?: string | null;
  /** 状态描述。 */
  StatusName?: string | null;
  /** 证书包含的多个域名（包含主域名）。 */
  SubjectAltName?: string[] | null;
  /** 是否为 VIP 客户。 */
  IsVip?: boolean | null;
  /** 是否为泛域名证书。 */
  IsWildcard?: boolean | null;
  /** 是否为 DV 版证书。 */
  IsDv?: boolean | null;
  /** 是否启用了漏洞扫描功能。 */
  IsVulnerability?: boolean | null;
  /** 是否可重颁发证书。 */
  RenewAble?: boolean | null;
  /** 提交的资料信息。 */
  SubmittedData?: SubmittedData | null;
  /** 是否可部署。 */
  Deployable?: boolean | null;
  /** 标签列表 */
  Tags?: Tags[] | null;
  /** CA证书的所有加密方式 */
  CAEncryptAlgorithms?: string[] | null;
  /** CA证书的所有通用名称 */
  CACommonNames?: string[] | null;
  /** CA证书所有的到期时间 */
  CAEndTimes?: string[] | null;
  /** DV证书吊销验证值 */
  DvRevokeAuthDetail?: DvAuths[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificatesRequest {
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。最大1000 */
  Limit?: number;
  /** 搜索关键词，可搜索证书 ID、备注名称、域名。例如： a8xHcaIs。 */
  SearchKey?: string;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string;
  /** 项目 ID。 */
  ProjectId?: number;
  /** 按到期时间排序：DESC = 降序， ASC = 升序。 */
  ExpirationSort?: string;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。 */
  CertificateStatus?: number[];
  /** 是否可部署，可选值：1 = 可部署，0 = 不可部署。 */
  Deployable?: number;
  /** 是否筛选上传托管的 1筛选，0不筛选 */
  Upload?: number;
  /** 是否筛选可续期证书 1筛选 0不筛选 */
  Renew?: number;
  /** 筛选来源， upload：上传证书， buy：腾讯云证书， 不传默认全部 */
  FilterSource?: string;
  /** 是否筛选国密证书。1:筛选 0:不筛选 */
  IsSM?: number;
  /** 筛选证书是否即将过期，传1是筛选，0不筛选 */
  FilterExpiring?: number;
  /** 是否可托管，可选值：1 = 可托管，0 = 不可托管。 */
  Hostable?: number;
  /** 筛选指定标签的证书 */
  Tags?: Tags[];
  /** //是否筛选等待签发的证书，传1是筛选，0和null不筛选 */
  IsPendingIssue?: number;
}

declare interface DescribeCertificatesResponse {
  /** 总数量。 */
  TotalCount?: number | null;
  /** 列表。 */
  Certificates?: Certificates[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCompaniesRequest {
  /** 分页偏移量 */
  Offset?: number;
  /** 分页每页限制数 */
  Limit?: number;
  /** 公司ID */
  CompanyId?: number;
}

declare interface DescribeCompaniesResponse {
  /** 公司列表 */
  Companies: CompanyInfo[];
  /** 公司总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeleteCertificatesTaskResultRequest {
  /** DeleteCertificates接口返回的任务ID， 最大支持100个 */
  TaskIds: string[];
}

declare interface DescribeDeleteCertificatesTaskResultResponse {
  /** 批量删除证书异步任务结果 */
  DeleteTaskResult?: DeleteTaskResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeployedResourcesRequest {
  /** 证书ID */
  CertificateIds: string[];
  /** 资源类型:clb,cdn,live,waf,antiddos */
  ResourceType: string;
}

declare interface DescribeDeployedResourcesResponse {
  /** 资源详情 */
  DeployedResources?: DeployedResources[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDownloadCertificateUrlRequest {
  /** 证书ID */
  CertificateId: string;
  /** 下载的服务类型: nginx tomcat apache iis jks other root */
  ServiceType?: string;
}

declare interface DescribeDownloadCertificateUrlResponse {
  /** 下载链接 */
  DownloadCertificateUrl: string;
  /** 下载文件的名称 */
  DownloadFilename: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostApiGatewayInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 部署资源类型 */
  ResourceType: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 已部署的证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostApiGatewayInstanceListResponse {
  /** apiGateway实例列表 */
  InstanceList?: ApiGatewayInstanceDetail[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostCdnInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 部署资源类型 */
  ResourceType: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 原证书ID */
  OldCertificateId?: string;
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 是否异步 */
  AsyncCache?: number;
}

declare interface DescribeHostCdnInstanceListResponse {
  /** CDN实例列表 */
  InstanceList?: CdnInstanceDetail[] | null;
  /** CDN域名总数 */
  TotalCount?: number | null;
  /** 异步刷新总数 */
  AsyncTotalNum?: number | null;
  /** 异步刷新当前执行数 */
  AsyncOffset?: number | null;
  /** 当前缓存读取时间 */
  AsyncCacheTime?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostClbInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 是否异步缓存 */
  AsyncCache?: number;
  /** 原证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostClbInstanceListResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** CLB实例监听器列表 */
  InstanceList?: ClbInstanceDetail[] | null;
  /** 异步刷新总数 */
  AsyncTotalNum?: number | null;
  /** 异步刷新当前执行数 */
  AsyncOffset?: number | null;
  /** 当前缓存读取时间 */
  AsyncCacheTime?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostCosInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表 */
  Filters?: Filter[];
  /** 部署资源类型 cos */
  ResourceType?: string;
  /** 原证书ID */
  OldCertificateId?: string;
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 是否异步 */
  AsyncCache?: number;
}

declare interface DescribeHostCosInstanceListResponse {
  /** COS实例列表 */
  InstanceList?: CosInstanceDetail[] | null;
  /** 总数 */
  TotalCount?: number | null;
  /** 异步刷新总数 */
  AsyncTotalNum?: number | null;
  /** 异步刷新当前执行数 */
  AsyncOffset?: number | null;
  /** 当前缓存读取时间 */
  AsyncCacheTime?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostDdosInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 部署资源类型 */
  ResourceType: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 已部署的证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostDdosInstanceListResponse {
  /** DDOS实例列表 */
  InstanceList?: DdosInstanceDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostDeployRecordDetailRequest {
  /** 部署记录ID */
  DeployRecordId: string;
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
}

declare interface DescribeHostDeployRecordDetailResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** 证书部署记录列表 */
  DeployRecordDetailList?: DeployRecordDetail[] | null;
  /** 成功总数 */
  SuccessTotalCount?: number | null;
  /** 失败总数 */
  FailedTotalCount?: number | null;
  /** 部署中总数 */
  RunningTotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostDeployRecordRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 资源类型 */
  ResourceType?: string;
}

declare interface DescribeHostDeployRecordResponse {
  /** 总数 */
  TotalCount: number | null;
  /** 证书部署记录列表 */
  DeployRecordList: DeployRecordInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostLighthouseInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 部署资源类型 lighthouse */
  ResourceType: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表 */
  Filters?: Filter[];
}

declare interface DescribeHostLighthouseInstanceListResponse {
  /** Lighthouse实例列表 */
  InstanceList: LighthouseInstanceDetail[] | null;
  /** 总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostLiveInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 部署资源类型 */
  ResourceType: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 已部署的证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostLiveInstanceListResponse {
  /** live实例列表 */
  InstanceList?: LiveInstanceDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostTeoInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 部署资源类型 */
  ResourceType: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 已部署的证书ID */
  OldCertificateId?: string;
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 是否异步 */
  AsyncCache?: number;
}

declare interface DescribeHostTeoInstanceListResponse {
  /** teo实例列表 */
  InstanceList?: TeoInstanceDetail[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostTkeInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 是否异步缓存 */
  AsyncCache?: number;
  /** 原证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostTkeInstanceListResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** CLB实例监听器列表 */
  InstanceList?: TkeInstanceDetail[] | null;
  /** 异步刷新总数 */
  AsyncTotalNum?: number | null;
  /** 异步刷新当前执行数 */
  AsyncOffset?: number | null;
  /** 当前缓存读取时间 */
  AsyncCacheTime?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostUpdateRecordDetailRequest {
  /** 一键更新记录ID */
  DeployRecordId: string;
  /** 每页数量，默认10。 */
  Limit?: string;
  /** 分页偏移量，从0开始。 */
  Offset?: string;
}

declare interface DescribeHostUpdateRecordDetailResponse {
  /** 总数 */
  TotalCount?: number | null;
  /** 证书部署记录列表 */
  RecordDetailList?: UpdateRecordDetails[] | null;
  /** 成功总数 */
  SuccessTotalCount?: number | null;
  /** 失败总数 */
  FailedTotalCount?: number | null;
  /** 部署中总数 */
  RunningTotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostUpdateRecordRequest {
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 新证书ID */
  CertificateId?: string;
  /** 原证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostUpdateRecordResponse {
  /** 总数 */
  TotalCount: number | null;
  /** 证书部署记录列表 */
  DeployRecordList: UpdateRecordInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostVodInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 部署资源类型 vod */
  ResourceType: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表 */
  Filters?: Filter[];
  /** 已部署的证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostVodInstanceListResponse {
  /** Vod实例列表 */
  InstanceList?: VodInstanceDetail[] | null;
  /** 总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostWafInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 部署资源类型 */
  ResourceType: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 已部署的证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostWafInstanceListResponse {
  /** WAF实例列表 */
  InstanceList?: LiveInstanceDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeManagerDetailRequest {
  /** 管理人ID */
  ManagerId: number;
  /** 分页每页数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
}

declare interface DescribeManagerDetailResponse {
  /** 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期 */
  Status: string;
  /** 管理人姓名 */
  ManagerFirstName: string;
  /** 管理人邮箱 */
  ManagerMail: string;
  /** 联系人姓名 */
  ContactFirstName: string;
  /** 管理人姓名 */
  ManagerLastName: string;
  /** 联系人职位 */
  ContactPosition: string;
  /** 管理人职位 */
  ManagerPosition: string;
  /** 核验通过时间 */
  VerifyTime: string | null;
  /** 创建时间 */
  CreateTime: string;
  /** 核验过期时间 */
  ExpireTime: string | null;
  /** 联系人姓名 */
  ContactLastName: string;
  /** 管理人电话 */
  ManagerPhone: string;
  /** 联系人电话 */
  ContactPhone: string;
  /** 联系人邮箱 */
  ContactMail: string;
  /** 管理人所属部门 */
  ManagerDepartment: string;
  /** 管理人所属公司信息 */
  CompanyInfo: CompanyInfo;
  /** 管理人公司ID */
  CompanyId: number;
  /** 管理人ID */
  ManagerId: number;
  /** 审核状态详细信息 */
  StatusInfo: ManagerStatusInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeManagersRequest {
  /** 公司ID */
  CompanyId: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 分页每页数量 */
  Limit?: number;
  /** 管理人姓名（将废弃），请使用SearchKey */
  ManagerName?: string;
  /** 模糊查询管理人邮箱（将废弃），请使用SearchKey */
  ManagerMail?: string;
  /** 根据管理人状态进行筛选，取值有'none' 未提交审核'audit', 亚信审核中'CAaudit' CA审核中'ok' 已审核'invalid' 审核失败'expiring' 即将过期'expired' 已过期 */
  Status?: string;
  /** 管理人姓/管理人名/邮箱/部门精准匹配 */
  SearchKey?: string;
}

declare interface DescribeManagersResponse {
  /** 公司管理人列表 */
  Managers: ManagerInfo[];
  /** 公司管理人总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackagesRequest {
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 限制数目，默认20。 */
  Limit?: number;
  /** 按状态筛选。 */
  Status?: string;
  /** 按过期时间升序或降序排列。 */
  ExpireTime?: string;
  /** 按权益包ID搜索。 */
  PackageId?: string;
  /** 按权益包类型搜索。 */
  Type?: string;
  /** 子产品编号 */
  Pid?: number;
}

declare interface DescribePackagesResponse {
  /** 权益包列表。 */
  Packages: PackageInfo[];
  /** 总条数。 */
  TotalCount: number;
  /** 权益点总余额。 */
  TotalBalance: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface DownloadCertificateResponse {
  /** ZIP base64 编码内容，base64 解码后可保存为 ZIP 文件。 */
  Content?: string | null;
  /** MIME 类型：application/zip = ZIP 压缩文件。 */
  ContentType?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCertificateAliasRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** 备注名称。 */
  Alias?: string;
}

declare interface ModifyCertificateAliasResponse {
  /** 修改成功的证书 ID。 */
  CertificateId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCertificateProjectRequest {
  /** 需要修改所属项目的证书 ID 集合，最多100个证书。 */
  CertificateIdList: string[];
  /** 项目 ID。 */
  ProjectId: number;
}

declare interface ModifyCertificateProjectResponse {
  /** 修改所属项目成功的证书集合。 */
  SuccessCertificates?: string[] | null;
  /** 修改所属项目失败的证书集合。 */
  FailCertificates?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCertificateResubmitRequest {
  /** 证书ID。 */
  CertificateId: string;
}

declare interface ModifyCertificateResubmitResponse {
  /** 证书ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCertificatesExpiringNotificationSwitchRequest {
  /** 证书ID列表。最多50个 */
  CertificateIds: string[];
  /** 0:不忽略通知。1:忽略通知 */
  SwitchStatus: number;
}

declare interface ModifyCertificatesExpiringNotificationSwitchResponse {
  /** 证书ID列表 */
  CertificateIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** 验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。 */
  ValidType: string;
  /** 类型，默认 Original。可选项：Original = 原证书 CSR，Upload = 手动上传，Online = 在线生成。 */
  CsrType?: string;
  /** CSR 内容。 */
  CsrContent?: string;
  /** KEY 密码。 */
  CsrkeyPassword?: string;
  /** 重颁发原因。 */
  Reason?: string;
  /** CSR加密方式，可选：RSA、ECC、SM2（CsrType为Online才可选）， 默认为RSA */
  CertCSREncryptAlgo?: string;
  /** CSR加密参数，CsrEncryptAlgo为RSA时， 可选2048、4096等默认为2048；CsrEncryptAlgo为ECC时，可选prime256v1，secp384r1等，默认为prime256v1; */
  CertCSRKeyParameter?: string;
}

declare interface ReplaceCertificateResponse {
  /** 证书 ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevokeCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** 吊销证书原因。 */
  Reason?: string;
}

declare interface RevokeCertificateResponse {
  /** 吊销证书域名验证信息。 */
  RevokeDomainValidateAuths?: RevokeDomainValidateAuths[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitAuditManagerRequest {
  /** 管理人ID */
  ManagerId: number;
}

declare interface SubmitAuditManagerResponse {
  /** 管理人ID */
  ManagerId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitCertificateInformationRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** CSR 生成方式：online = 在线生成, parse = 手动上传。 */
  CsrType?: string;
  /** 上传的 CSR 内容。 */
  CsrContent?: string;
  /** 绑定证书的域名。 */
  CertificateDomain?: string;
  /** 上传的域名数组（多域名证书可以上传）。 */
  DomainList?: string[];
  /** 私钥密码（非必填）。 */
  KeyPassword?: string;
  /** 公司名称。 */
  OrganizationName?: string;
  /** 部门名称。 */
  OrganizationDivision?: string;
  /** 公司详细地址。 */
  OrganizationAddress?: string;
  /** 国家名称，如中国：CN 。 */
  OrganizationCountry?: string;
  /** 公司所在城市。 */
  OrganizationCity?: string;
  /** 公司所在省份。 */
  OrganizationRegion?: string;
  /** 公司邮编。 */
  PostalCode?: string;
  /** 公司座机区号。 */
  PhoneAreaCode?: string;
  /** 公司座机号码。 */
  PhoneNumber?: string;
  /** 证书验证方式。验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。 */
  VerifyType?: string;
  /** 管理人名。 */
  AdminFirstName?: string;
  /** 管理人姓。 */
  AdminLastName?: string;
  /** 管理人手机号码。 */
  AdminPhoneNum?: string;
  /** 管理人邮箱地址。 */
  AdminEmail?: string;
  /** 管理人职位。 */
  AdminPosition?: string;
  /** 联系人名。 */
  ContactFirstName?: string;
  /** 联系人姓。 */
  ContactLastName?: string;
  /** 联系人邮箱地址。 */
  ContactEmail?: string;
  /** 联系人手机号码。 */
  ContactNumber?: string;
  /** 联系人职位。 */
  ContactPosition?: string;
}

declare interface SubmitCertificateInformationResponse {
  /** 证书 ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCertificateInstanceRequest {
  /** 一键更新原证书ID， 查询绑定该证书的云资源然后进行证书更新 */
  OldCertificateId: string;
  /** 需要部署的资源类型，参数值可选（小写）：clb、cdn、waf、live、ddos、teo、apigateway、vod、tke、tcb、tse */
  ResourceTypes: string[];
  /** 一键更新新证书ID，不传该则证书公钥和私钥必传 */
  CertificateId?: string;
  /** 需要部署的地域列表（废弃） */
  Regions?: string[];
  /** 云资源需要部署的地域列表，支持地域的云资源类型必传，如：clb、tke、apigateway、waf、tcb、tse等 */
  ResourceTypesRegions?: ResourceTypeRegions[];
  /** 证书公钥， 若上传证书公钥， 则CertificateId不用传 */
  CertificatePublicKey?: string;
  /** 证书私钥，若上传证书公钥， 则CertificateId不用传 */
  CertificatePrivateKey?: string;
  /** 旧证书是否忽略到期提醒 0:不忽略通知。1:忽略通知，忽略OldCertificateId到期提醒 */
  ExpiringNotificationSwitch?: number;
  /** 相同的证书是否允许重复上传，若选择上传证书， 则可以配置该参数 */
  Repeatable?: boolean;
  /** 是否允许下载，若选择上传证书， 则可以配置该参数 */
  AllowDownload?: boolean;
  /** 标签列表，若选择上传证书， 则可以配置该参数 */
  Tags?: Tags[];
  /** 项目 ID，若选择上传证书， 则可以配置该参数 */
  ProjectId?: number;
}

declare interface UpdateCertificateInstanceResponse {
  /** 云资源部署任务ID */
  DeployRecordId?: number | null;
  /** 部署状态，1表示部署成功，0表示部署失败 */
  DeployStatus?: number;
  /** 更新异步创建任务进度详情 */
  UpdateSyncProgress?: UpdateSyncProgress[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCertificateRecordRetryRequest {
  /** 待重试部署记录ID */
  DeployRecordId?: number;
  /** 待重试部署记录详情ID */
  DeployRecordDetailId?: number;
}

declare interface UpdateCertificateRecordRetryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCertificateRecordRollbackRequest {
  /** 待重试部署记录ID */
  DeployRecordId?: number;
}

declare interface UpdateCertificateRecordRollbackResponse {
  /** 回滚部署记录ID */
  DeployRecordId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadCertificateRequest {
  /** 证书内容。 */
  CertificatePublicKey: string;
  /** 私钥内容，证书类型为 SVR 时必填，为 CA 时可不填。 */
  CertificatePrivateKey?: string;
  /** 证书类型，默认 SVR。CA = CA证书，SVR = 服务器证书。 */
  CertificateType?: string;
  /** 备注名称。 */
  Alias?: string;
  /** 项目 ID。 */
  ProjectId?: number;
  /** 证书用途/证书来源。“CLB，CDN，WAF，LIVE，DDOS” */
  CertificateUse?: string;
  /** 标签列表 */
  Tags?: Tags[];
  /** 相同的证书是否允许重复上传 */
  Repeatable?: boolean;
}

declare interface UploadCertificateResponse {
  /** 证书 ID。 */
  CertificateId?: string;
  /** 重复证书的ID */
  RepeatCertId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadConfirmLetterRequest {
  /** 证书ID */
  CertificateId: string;
  /** base64编码后的证书确认函文件，格式应为jpg、jpeg、png、pdf，大小应在1kb与1.4M之间。 */
  ConfirmLetter: string;
}

declare interface UploadConfirmLetterResponse {
  /** 证书ID */
  CertificateId?: string;
  /** 是否成功 */
  IsSuccess?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadRevokeLetterRequest {
  /** 证书 ID。 */
  CertificateId: string;
  /** base64编码后的证书确认函文件，格式应为jpg、jpeg、png、pdf，大小应在1kb与1.4M之间。 */
  RevokeLetter: string;
}

declare interface UploadRevokeLetterResponse {
  /** 证书 ID。 */
  CertificateId: string;
  /** 是否成功。 */
  IsSuccess: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyManagerRequest {
  /** 管理人ID */
  ManagerId: number;
}

declare interface VerifyManagerResponse {
  /** 管理人ID */
  ManagerId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ssl SSL 证书} */
declare interface Ssl {
  (): Versions;
  /** 免费证书申请 {@link ApplyCertificateRequest} {@link ApplyCertificateResponse} */
  ApplyCertificate(data: ApplyCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyCertificateResponse>;
  /** 取消证书审核 {@link CancelAuditCertificateRequest} {@link CancelAuditCertificateResponse} */
  CancelAuditCertificate(data: CancelAuditCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CancelAuditCertificateResponse>;
  /** 取消证书订单 {@link CancelCertificateOrderRequest} {@link CancelCertificateOrderResponse} */
  CancelCertificateOrder(data: CancelCertificateOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CancelCertificateOrderResponse>;
  /** 检查证书链完整性 {@link CheckCertificateChainRequest} {@link CheckCertificateChainResponse} */
  CheckCertificateChain(data: CheckCertificateChainRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCertificateChainResponse>;
  /** 提交证书订单 {@link CommitCertificateInformationRequest} {@link CommitCertificateInformationResponse} */
  CommitCertificateInformation(data: CommitCertificateInformationRequest, config?: AxiosRequestConfig): AxiosPromise<CommitCertificateInformationResponse>;
  /** 主动触发证书验证 {@link CompleteCertificateRequest} {@link CompleteCertificateResponse} */
  CompleteCertificate(data: CompleteCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteCertificateResponse>;
  /** 创建付费证书 {@link CreateCertificateRequest} {@link CreateCertificateResponse} */
  CreateCertificate(data: CreateCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCertificateResponse>;
  /** 创建证书关联云资源异步任务 {@link CreateCertificateBindResourceSyncTaskRequest} {@link CreateCertificateBindResourceSyncTaskResponse} */
  CreateCertificateBindResourceSyncTask(data: CreateCertificateBindResourceSyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCertificateBindResourceSyncTaskResponse>;
  /** 使用权益点创建证书 {@link CreateCertificateByPackageRequest} {@link CreateCertificateByPackageResponse} */
  CreateCertificateByPackage(data: CreateCertificateByPackageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCertificateByPackageResponse>;
  /** 删除证书 {@link DeleteCertificateRequest} {@link DeleteCertificateResponse} */
  DeleteCertificate(data: DeleteCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCertificateResponse>;
  /** 删除管理人 {@link DeleteManagerRequest} {@link DeleteManagerResponse} */
  DeleteManager(data: DeleteManagerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteManagerResponse>;
  /** 证书部署到云资源实例列表 {@link DeployCertificateInstanceRequest} {@link DeployCertificateInstanceResponse} */
  DeployCertificateInstance(data: DeployCertificateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeployCertificateInstanceResponse>;
  /** 云资源部署重试部署记录 {@link DeployCertificateRecordRetryRequest} {@link DeployCertificateRecordRetryResponse} */
  DeployCertificateRecordRetry(data?: DeployCertificateRecordRetryRequest, config?: AxiosRequestConfig): AxiosPromise<DeployCertificateRecordRetryResponse>;
  /** 云资源部署一键回滚 {@link DeployCertificateRecordRollbackRequest} {@link DeployCertificateRecordRollbackResponse} */
  DeployCertificateRecordRollback(data?: DeployCertificateRecordRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<DeployCertificateRecordRollbackResponse>;
  /** 获取证书信息 {@link DescribeCertificateRequest} {@link DescribeCertificateResponse} */
  DescribeCertificate(data: DescribeCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateResponse>;
  /** 查询证书关联云资源任务结果 - 返回关联详情 {@link DescribeCertificateBindResourceTaskDetailRequest} {@link DescribeCertificateBindResourceTaskDetailResponse} */
  DescribeCertificateBindResourceTaskDetail(data: DescribeCertificateBindResourceTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateBindResourceTaskDetailResponse>;
  /** 查询证书关联云资源任务结果 - 仅返回总数 {@link DescribeCertificateBindResourceTaskResultRequest} {@link DescribeCertificateBindResourceTaskResultResponse} */
  DescribeCertificateBindResourceTaskResult(data: DescribeCertificateBindResourceTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateBindResourceTaskResultResponse>;
  /** 获取证书详情 {@link DescribeCertificateDetailRequest} {@link DescribeCertificateDetailResponse} */
  DescribeCertificateDetail(data: DescribeCertificateDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateDetailResponse>;
  /** 获取证书操作日志 {@link DescribeCertificateOperateLogsRequest} {@link DescribeCertificateOperateLogsResponse} */
  DescribeCertificateOperateLogs(data?: DescribeCertificateOperateLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateOperateLogsResponse>;
  /** 获取证书列表 {@link DescribeCertificatesRequest} {@link DescribeCertificatesResponse} */
  DescribeCertificates(data?: DescribeCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificatesResponse>;
  /** 查询公司列表 {@link DescribeCompaniesRequest} {@link DescribeCompaniesResponse} */
  DescribeCompanies(data?: DescribeCompaniesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCompaniesResponse>;
  /** 查询批量删除任务结果 {@link DescribeDeleteCertificatesTaskResultRequest} {@link DescribeDeleteCertificatesTaskResultResponse} */
  DescribeDeleteCertificatesTaskResult(data: DescribeDeleteCertificatesTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeleteCertificatesTaskResultResponse>;
  /** 证书查询关联资源 {@link DescribeDeployedResourcesRequest} {@link DescribeDeployedResourcesResponse} */
  DescribeDeployedResources(data: DescribeDeployedResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeployedResourcesResponse>;
  /** 获取下载证书链接 {@link DescribeDownloadCertificateUrlRequest} {@link DescribeDownloadCertificateUrlResponse} */
  DescribeDownloadCertificateUrl(data: DescribeDownloadCertificateUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDownloadCertificateUrlResponse>;
  /** 查询证书apiGateway云资源部署实例列表 {@link DescribeHostApiGatewayInstanceListRequest} {@link DescribeHostApiGatewayInstanceListResponse} */
  DescribeHostApiGatewayInstanceList(data: DescribeHostApiGatewayInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostApiGatewayInstanceListResponse>;
  /** 查询证书cdn云资源部署实例列表 {@link DescribeHostCdnInstanceListRequest} {@link DescribeHostCdnInstanceListResponse} */
  DescribeHostCdnInstanceList(data: DescribeHostCdnInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostCdnInstanceListResponse>;
  /** 查询证书CLB云资源部署实例列表信息 {@link DescribeHostClbInstanceListRequest} {@link DescribeHostClbInstanceListResponse} */
  DescribeHostClbInstanceList(data: DescribeHostClbInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostClbInstanceListResponse>;
  /** 查询证书cos云资源部署实例列表 {@link DescribeHostCosInstanceListRequest} {@link DescribeHostCosInstanceListResponse} */
  DescribeHostCosInstanceList(data?: DescribeHostCosInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostCosInstanceListResponse>;
  /** 查询证书ddos云资源部署实例列表 {@link DescribeHostDdosInstanceListRequest} {@link DescribeHostDdosInstanceListResponse} */
  DescribeHostDdosInstanceList(data: DescribeHostDdosInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostDdosInstanceListResponse>;
  /** 查询证书云资源部署记录列表 {@link DescribeHostDeployRecordRequest} {@link DescribeHostDeployRecordResponse} */
  DescribeHostDeployRecord(data: DescribeHostDeployRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostDeployRecordResponse>;
  /** 查询证书云资源部署记录详情列表 {@link DescribeHostDeployRecordDetailRequest} {@link DescribeHostDeployRecordDetailResponse} */
  DescribeHostDeployRecordDetail(data: DescribeHostDeployRecordDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostDeployRecordDetailResponse>;
  /** 查询证书Lighthouse云资源部署实例列表 {@link DescribeHostLighthouseInstanceListRequest} {@link DescribeHostLighthouseInstanceListResponse} */
  DescribeHostLighthouseInstanceList(data: DescribeHostLighthouseInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostLighthouseInstanceListResponse>;
  /** 查询证书live云资源部署实例列表 {@link DescribeHostLiveInstanceListRequest} {@link DescribeHostLiveInstanceListResponse} */
  DescribeHostLiveInstanceList(data: DescribeHostLiveInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostLiveInstanceListResponse>;
  /** 查询证书EdgeOne云资源部署实例列表 {@link DescribeHostTeoInstanceListRequest} {@link DescribeHostTeoInstanceListResponse} */
  DescribeHostTeoInstanceList(data: DescribeHostTeoInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostTeoInstanceListResponse>;
  /** 查询证书tke云资源部署实例列表 {@link DescribeHostTkeInstanceListRequest} {@link DescribeHostTkeInstanceListResponse} */
  DescribeHostTkeInstanceList(data: DescribeHostTkeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostTkeInstanceListResponse>;
  /** 查询证书云资源更新记录列表 {@link DescribeHostUpdateRecordRequest} {@link DescribeHostUpdateRecordResponse} */
  DescribeHostUpdateRecord(data?: DescribeHostUpdateRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostUpdateRecordResponse>;
  /** 查询证书云资源更新记录详情列表 {@link DescribeHostUpdateRecordDetailRequest} {@link DescribeHostUpdateRecordDetailResponse} */
  DescribeHostUpdateRecordDetail(data: DescribeHostUpdateRecordDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostUpdateRecordDetailResponse>;
  /** 查询证书Vod云资源部署实例列表 {@link DescribeHostVodInstanceListRequest} {@link DescribeHostVodInstanceListResponse} */
  DescribeHostVodInstanceList(data: DescribeHostVodInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostVodInstanceListResponse>;
  /** 查询证书waf云资源部署实例列表 {@link DescribeHostWafInstanceListRequest} {@link DescribeHostWafInstanceListResponse} */
  DescribeHostWafInstanceList(data: DescribeHostWafInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostWafInstanceListResponse>;
  /** 查询管理人详情 {@link DescribeManagerDetailRequest} {@link DescribeManagerDetailResponse} */
  DescribeManagerDetail(data: DescribeManagerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeManagerDetailResponse>;
  /** 查询管理人列表 {@link DescribeManagersRequest} {@link DescribeManagersResponse} */
  DescribeManagers(data: DescribeManagersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeManagersResponse>;
  /** 获得权益包列表 {@link DescribePackagesRequest} {@link DescribePackagesResponse} */
  DescribePackages(data?: DescribePackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackagesResponse>;
  /** 下载证书 {@link DownloadCertificateRequest} {@link DownloadCertificateResponse} */
  DownloadCertificate(data: DownloadCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadCertificateResponse>;
  /** 修改证书备注 {@link ModifyCertificateAliasRequest} {@link ModifyCertificateAliasResponse} */
  ModifyCertificateAlias(data: ModifyCertificateAliasRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCertificateAliasResponse>;
  /** 修改证书所属项目 {@link ModifyCertificateProjectRequest} {@link ModifyCertificateProjectResponse} */
  ModifyCertificateProject(data: ModifyCertificateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCertificateProjectResponse>;
  /** 证书重新发起申请 {@link ModifyCertificateResubmitRequest} {@link ModifyCertificateResubmitResponse} */
  ModifyCertificateResubmit(data: ModifyCertificateResubmitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCertificateResubmitResponse>;
  /** 修改是否忽略证书到期通知 {@link ModifyCertificatesExpiringNotificationSwitchRequest} {@link ModifyCertificatesExpiringNotificationSwitchResponse} */
  ModifyCertificatesExpiringNotificationSwitch(data: ModifyCertificatesExpiringNotificationSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCertificatesExpiringNotificationSwitchResponse>;
  /** 重颁发证书 {@link ReplaceCertificateRequest} {@link ReplaceCertificateResponse} */
  ReplaceCertificate(data: ReplaceCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceCertificateResponse>;
  /** 吊销证书 {@link RevokeCertificateRequest} {@link RevokeCertificateResponse} */
  RevokeCertificate(data: RevokeCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<RevokeCertificateResponse>;
  /** 重新提交审核管理人 {@link SubmitAuditManagerRequest} {@link SubmitAuditManagerResponse} */
  SubmitAuditManager(data: SubmitAuditManagerRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitAuditManagerResponse>;
  /** 提交证书资料 {@link SubmitCertificateInformationRequest} {@link SubmitCertificateInformationResponse} */
  SubmitCertificateInformation(data: SubmitCertificateInformationRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitCertificateInformationResponse>;
  /** 一键更新旧证书资源 {@link UpdateCertificateInstanceRequest} {@link UpdateCertificateInstanceResponse} */
  UpdateCertificateInstance(data: UpdateCertificateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCertificateInstanceResponse>;
  /** 云资源更新重试部署记录 {@link UpdateCertificateRecordRetryRequest} {@link UpdateCertificateRecordRetryResponse} */
  UpdateCertificateRecordRetry(data?: UpdateCertificateRecordRetryRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCertificateRecordRetryResponse>;
  /** 云资源更新一键回滚 {@link UpdateCertificateRecordRollbackRequest} {@link UpdateCertificateRecordRollbackResponse} */
  UpdateCertificateRecordRollback(data?: UpdateCertificateRecordRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCertificateRecordRollbackResponse>;
  /** 上传证书 {@link UploadCertificateRequest} {@link UploadCertificateResponse} */
  UploadCertificate(data: UploadCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<UploadCertificateResponse>;
  /** 上传证书确认函 {@link UploadConfirmLetterRequest} {@link UploadConfirmLetterResponse} */
  UploadConfirmLetter(data: UploadConfirmLetterRequest, config?: AxiosRequestConfig): AxiosPromise<UploadConfirmLetterResponse>;
  /** 上传证书吊销确认函 {@link UploadRevokeLetterRequest} {@link UploadRevokeLetterResponse} */
  UploadRevokeLetter(data: UploadRevokeLetterRequest, config?: AxiosRequestConfig): AxiosPromise<UploadRevokeLetterResponse>;
  /** 重新核验管理人 {@link VerifyManagerRequest} {@link VerifyManagerResponse} */
  VerifyManager(data: VerifyManagerRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyManagerResponse>;
}

export declare type Versions = ["2019-12-05"];

export default Ssl;
