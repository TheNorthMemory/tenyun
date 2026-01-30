/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** apiGateway实例详情 */
declare interface ApiGatewayInstanceDetail {
  /** 实例ID */
  ServiceId?: string;
  /** 实例名称 */
  ServiceName?: string;
  /** 域名 */
  Domain?: string;
  /** 证书ID */
  CertId?: string;
  /** 使用协议 */
  Protocol?: string;
}

/** apigateway实例详情 - 异步关联云资源数据结构 */
declare interface ApiGatewayInstanceList {
  /** 地域 */
  Region?: string;
  /** apigateway实例详情 */
  InstanceList?: ApiGatewayInstanceDetail[];
  /** 该地域下apigateway实例总数 */
  TotalCount?: number;
  /** 是否查询异常 */
  Error?: string;
}

/** 批量删除失败的项 */
declare interface BatchDeleteFail {
  /** 失败的证书ID */
  CertId?: string;
  /** 失败的原因 */
  Msg?: string;
}

/** 绑定资源地域结果 */
declare interface BindResourceRegionResult {
  /** 地域 */
  Region?: string;
  /** 关联资源总数 */
  TotalCount?: number;
  /** 是否查询异常 */
  Error?: string;
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
  Region?: string;
  /** 实例详情 */
  InstanceList?: CosInstanceDetail[];
  /** 地域下总数 */
  TotalCount?: number;
  /** 错误信息 */
  Error?: string;
}

/** CDN实例详情 */
declare interface CdnInstanceDetail {
  /** 域名 */
  Domain?: string;
  /** 已部署证书ID */
  CertId?: string;
  /** 域名状态 rejected：域名审核未通过，域名备案过期/被注销导致，processing：部署中，online：已启动，offline：已关闭 */
  Status?: string;
  /** 域名计费状态，on表示开启，off表示关闭。 */
  HttpsBillingSwitch?: string;
}

/** cdn实例详情 - 异步关联云资源数据结构 */
declare interface CdnInstanceList {
  /** 该地域下CDN域名总数 */
  TotalCount?: number;
  /** cdn域名详情 */
  InstanceList?: CdnInstanceDetail[];
  /** 是否查询异常 */
  Error?: string;
}

/** 证书基本信息 */
declare interface CertBasicInfo {
  /** 颁发者 */
  Issuer?: string;
  /** 颁发给 */
  Subject?: string;
  /** 证书指纹 */
  Fingerprint?: string;
  /** 证书有效期开始时间 */
  ValidFrom?: string;
  /** 证书有效期结束时间 */
  ValidTo?: string;
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
  CertCaId?: string;
  /** 证书认证模式：UNIDIRECTIONAL单向认证，MUTUAL双向认证 */
  SSLMode?: string;
}

/** 获取证书列表（DescribeCertificates）返回参数键为 Certificates 数组下，key为CertificateExtra 的内容。 */
declare interface CertificateExtra {
  /** 证书可配置域名数量。 */
  DomainNumber?: string;
  /** 续费原证书 ID。 */
  OriginCertificateId?: string | null;
  /** 重颁发证书原始 ID。 */
  ReplacedBy?: string | null;
  /** 重颁发证书ID。 */
  ReplacedFor?: string | null;
  /** 续费证书 ID。 */
  RenewOrder?: string | null;
  /** 是否是国密证书 */
  SMCert?: number;
  /** 公司类型，取值：1（个人）；2（公司） */
  CompanyType?: number;
}

/** 获取证书列表（DescribeCertificates）返回参数键为 Certificates 的内容。 */
declare interface Certificates {
  /** 用户 UIN。 */
  OwnerUin?: string;
  /** 项目 ID。 */
  ProjectId?: string;
  /** 证书来源：trustasia：亚洲诚信，upload：用户上传。wosign：沃通sheca：上海CA */
  From?: string;
  /** 证书套餐类型：null：用户上传证书（没有套餐类型），2：TrustAsia TLS RSA CA， 3：SecureSite 增强型企业版（EV Pro）， 4：SecureSite 增强型（EV）， 5：SecureSite 企业型专业版（OV Pro），6：SecureSite 企业型（OV）， 7：SecureSite 企业型（OV）通配符， 8：Geotrust 增强型（EV）， 9：Geotrust 企业型（OV）， 10：Geotrust 企业型（OV）通配符， 11：TrustAsia 域名型多域名 SSL 证书， 12：TrustAsia 域名型（DV）通配符， 13：TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14：TrustAsia 企业型（OV）SSL 证书（D3）， 15：TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16：TrustAsia 增强型 （EV）SSL 证书（D3）， 17：TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18：GlobalSign 企业型（OV）SSL 证书， 19：GlobalSign 企业型通配符 （OV）SSL 证书， 20：GlobalSign 增强型 （EV）SSL 证书， 21：TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22：GlobalSign 企业型多域名（OV）SSL 证书， 23：GlobalSign 企业型通配符多域名（OV）SSL 证书，24：GlobalSign 增强型多域名（EV）SSL 证书，25：Wotrus 域名型证书，26：Wotrus 域名型多域名证书，27：Wotrus 域名型通配符证书，28：Wotrus 企业型证书，29：Wotrus 企业型多域名证书，30：Wotrus 企业型通配符证书，31：Wotrus 增强型证书，32：Wotrus 增强型多域名证书，33：WoTrus-国密域名型证书，34：WoTrus-国密域名型证书（多域名），35：WoTrus-国密域名型证书（通配符），37：WoTrus-国密企业型证书，38：WoTrus-国密企业型证书（多域名），39：WoTrus-国密企业型证书（通配符），40：WoTrus-国密增强型证书，41：WoTrus-国密增强型证书（多域名），42：TrustAsia-域名型证书（通配符多域名），43：DNSPod-企业型(OV)SSL证书44：DNSPod-企业型(OV)通配符SSL证书45：DNSPod-企业型(OV)多域名SSL证书46：DNSPod-增强型(EV)SSL证书47：DNSPod-增强型(EV)多域名SSL证书48：DNSPod-域名型(DV)SSL证书49：DNSPod-域名型(DV)通配符SSL证书50：DNSPod-域名型(DV)多域名SSL证书51：DNSPod（国密）-企业型(OV)SSL证书52：DNSPod（国密）-企业型(OV)通配符SSL证书53：DNSPod（国密）-企业型(OV)多域名SSL证书54：DNSPod（国密）-域名型(DV)SSL证书55：DNSPod（国密）-域名型(DV)通配符SSL证书56：DNSPod（国密）-域名型(DV)多域名SSL证书57：SecureSite 企业型专业版多域名(OV Pro)58：SecureSite 企业型多域名(OV)59：SecureSite 增强型专业版多域名(EV Pro)60：SecureSite 增强型多域名(EV)61：Geotrust 增强型多域名(EV)75：SecureSite 企业型(OV)76：SecureSite 企业型(OV)通配符77：SecureSite 增强型(EV)78：Geotrust 企业型(OV)79：Geotrust 企业型(OV)通配符80：Geotrust 增强型(EV)81：GlobalSign 企业型（OV）SSL证书82：GlobalSign 企业型通配符 （OV）SSL证书83：TrustAsia C1 DV Free85：GlobalSign 增强型 （EV）SSL证书88：GlobalSign 企业型通配符多域名 （OV）SSL证书89：GlobalSign 企业型多域名 （OV）SSL证书90：GlobalSign 增强型多域名（EV） SSL证书91：Geotrust 增强型多域名(EV)92：SecureSite 企业型专业版多域名(OV Pro)93：SecureSite 企业型多域名(OV)94：SecureSite 增强型专业版多域名(EV Pro)95：SecureSite 增强型多域名(EV)96：SecureSite 增强型专业版(EV Pro)97：SecureSite 企业型专业版(OV Pro)98：CFCA 企业型(OV)SSL证书99：CFCA 企业型多域名(OV)SSL证书100：CFCA 企业型通配符(OV)SSL证书101：CFCA 增强型(EV)SSL证书 */
  PackageType?: string;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string;
  /** 证书产品名称 */
  ProductZhName?: string;
  /** 主域名。 */
  Domain?: string;
  /** 备注名称。 */
  Alias?: string;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 自动添加DNS记录，5 = 企业证书，待提交资料，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。14 = 证书已退款。 15 = 证书迁移中 */
  Status?: number;
  /** 证书扩展信息。 */
  CertificateExtra?: CertificateExtra;
  /** 漏洞扫描状态：INACTIVE = 未开启，ACTIVE = 已开启 */
  VulnerabilityStatus?: string;
  /** 状态信息。 */
  StatusMsg?: string;
  /** 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，DNS_PROXY = DNS代理验证。FILE_PROXY = 文件代理验证 */
  VerifyType?: string;
  /** 证书生效时间。时区为GMT+8:00 */
  CertBeginTime?: string;
  /** 证书过期时间。时区为GMT+8:00 */
  CertEndTime?: string;
  /** 证书有效期，单位（月）。 */
  ValidityPeriod?: string;
  /** 创建时间。时区为GMT+8:00 */
  InsertTime?: string;
  /** 证书 ID。 */
  CertificateId?: string;
  /** 证书包含的多个域名（包含主域名）。 */
  SubjectAltName?: string[];
  /** 证书类型名称。 */
  PackageTypeName?: string;
  /** 状态名称。 */
  StatusName?: string;
  /** 是否为 VIP 客户。 */
  IsVip?: boolean;
  /** 是否为 DV 版证书。 */
  IsDv?: boolean;
  /** 是否为泛域名证书。 */
  IsWildcard?: boolean;
  /** 是否启用了漏洞扫描功能。 */
  IsVulnerability?: boolean;
  /** 是否可续费。 */
  RenewAble?: boolean;
  /** 项目信息。 */
  ProjectInfo?: ProjectInfo;
  /** 关联的云资源，暂不可用 */
  BoundResource?: string[];
  /** 是否可部署。 */
  Deployable?: boolean;
  /** 标签列表 */
  Tags?: Tags[];
  /** 是否已忽略到期通知 */
  IsIgnore?: boolean;
  /** 是否国密证书 */
  IsSM?: boolean;
  /** 证书算法 */
  EncryptAlgorithm?: string;
  /** 上传CA证书的加密算法 */
  CAEncryptAlgorithms?: string[];
  /** 上传CA证书的过期时间 */
  CAEndTimes?: string[];
  /** 上传CA证书的通用名称 */
  CACommonNames?: string[];
  /** 证书预审核信息 */
  PreAuditInfo?: PreAuditInfo;
  /** 是否自动续费 */
  AutoRenewFlag?: number;
  /** 托管状态，0，托管中，5，资源替换中， 10， 托管完成， -1未托管 */
  HostingStatus?: number;
  /** 托管完成时间 */
  HostingCompleteTime?: string;
  /** 托管新证书ID */
  HostingRenewCertId?: string;
  /** 存在的续费证书ID */
  HasRenewOrder?: string;
  /** 重颁发证书原证书是否删除 */
  ReplaceOriCertIsDelete?: boolean;
  /** 是否即将过期， 证书即将到期的30天内为即将过期 */
  IsExpiring?: boolean;
  /** DV证书添加验证截止时间，时区为GMT+8:00 */
  DVAuthDeadline?: string;
  /** 域名验证通过时间，时区为GMT+8:00 */
  ValidationPassedTime?: string;
  /** 证书关联的多域名 */
  CertSANs?: string[];
  /** 域名验证驳回信息 */
  AwaitingValidationMsg?: string;
  /** 是否允许下载 */
  AllowDownload?: boolean;
  /** 证书域名是否全部在DNSPOD托管解析 */
  IsDNSPODResolve?: boolean;
  /** 是否是权益点购买的证书 */
  IsPackage?: boolean;
  /** 是否存在私钥密码 */
  KeyPasswordCustomFlag?: boolean;
  /** 支持下载的WEB服务器类型： nginx、apache、iis、tomcat、jks、root、other */
  SupportDownloadType?: SupportDownloadType;
  /** 证书吊销完成时间，时区为GMT+8:00 */
  CertRevokedTime?: string;
  /** 托管资源类型列表 */
  HostingResourceTypes?: string[];
  /** 托管配置信息 */
  HostingConfig?: HostingConfig | null;
  /** 是否是上传托管续费证书 */
  IsHostingUploadRenewCert?: boolean;
  /** 订阅服务ID */
  ServiceId?: string;
  /** 订阅服务状态枚举值： initing： 未激活 running： 生效中 expired： 已过期 refunded： 已退款 nearExpire： 即将到期 */
  ServiceStatus?: string;
  /** 订阅服务开始时间 */
  CertServiceBeginTime?: string;
  /** 订阅服务结束时间 */
  CertServiceEndTime?: string;
}

/** clb实例详情 */
declare interface ClbInstanceDetail {
  /** CLB实例ID */
  LoadBalancerId?: string;
  /** CLB实例名称 */
  LoadBalancerName?: string;
  /** CLB监听器列表 */
  Listeners?: ClbListener[];
  /** 负载均衡类型，0 传统型负载均衡； 1 应用型负载均衡 */
  Forward?: number;
}

/** clb实例详情 - 异步关联云资源数据结构 */
declare interface ClbInstanceList {
  /** 地域 */
  Region?: string;
  /** clb实例详情 */
  InstanceList?: ClbInstanceDetail[];
  /** 该地域下Clb实例总数 */
  TotalCount?: number;
  /** 是否查询异常 */
  Error?: string;
}

/** CLB实例监听器 */
declare interface ClbListener {
  /** 监听器ID */
  ListenerId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 是否开启SNI，1为开启，0为关闭 */
  SniSwitch?: number;
  /** 监听器协议类型， HTTPS|TCP_SSL */
  Protocol?: string;
  /** 监听器绑定的证书数据 */
  Certificate?: Certificate;
  /** 监听器规则列表 */
  Rules?: ClbListenerRule[];
  /** 不匹配域名列表 */
  NoMatchDomains?: string[];
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
  Certificate?: Certificate;
  /** 不匹配域名列表 */
  NoMatchDomains?: string[];
  /** 规则绑定的路径 */
  Url?: string;
}

/** 公司信息 */
declare interface CompanyInfo {
  /** 公司名称 */
  CompanyName?: string;
  /** 公司ID */
  CompanyId?: number;
  /** 公司所在国家 */
  CompanyCountry?: string;
  /** 公司所在省份 */
  CompanyProvince?: string;
  /** 公司所在城市 */
  CompanyCity?: string;
  /** 公司所在详细地址 */
  CompanyAddress?: string;
  /** 公司电话 */
  CompanyPhone?: string;
  /** 公司证件类型，取值范围：TYDMZ（统一社会信用代码 ）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段OTHERS（其他） */
  IdType?: string;
  /** 公司证件号码，取值范围：TYDMZ（统一社会信用代码 ）：11532xxxxxxxx24820 */
  IdNumber?: string;
  /** 标签 */
  Tags?: Tags[];
}

/** COS实例详情 */
declare interface CosInstanceDetail {
  /** 域名 */
  Domain?: string;
  /** 已绑定的证书ID */
  CertId?: string;
  /** ENABLED: 域名上线状态DISABLED:域名下线状态 */
  Status?: string;
  /** 存储桶名称 */
  Bucket?: string;
  /** 存储桶地域 */
  Region?: string;
}

/** ddos复杂类型 */
declare interface DdosInstanceDetail {
  /** 域名 */
  Domain?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 协议类型 */
  Protocol?: string;
  /** 证书ID */
  CertId?: string;
  /** 转发端口 */
  VirtualPort?: string;
}

/** ddos实例详情 - 异步关联云资源数据结构 */
declare interface DdosInstanceList {
  /** 该地域下ddos域名总数 */
  TotalCount?: number;
  /** ddos实例详情 */
  InstanceList?: DdosInstanceDetail[];
  /** 是否查询异常 */
  Error?: string;
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
  Error?: string;
  /** 当前结果缓存时间 */
  CacheTime?: string;
  /** 包含的域名 */
  Domains?: string[];
}

/** 托管记录 */
declare interface DeployRecord {
  /** 总数 */
  TotalCount?: number;
  /** 成功总数 */
  SuccessTotalCount?: number;
  /** 失败总数 */
  FailedTotalCount?: number;
  /** 部署中总数 */
  RunningTotalCount?: number;
  /** 部署记录类型 0 为部署， 1 为回滚 */
  Type?: number;
  /** 部署记录详情列表 */
  RecordDetailList?: DeployRecordList[];
  /** 托管资源部署状态：0 等待部署， 1 部署成功， 2 部署失败 3 部署中， 4 回滚成功， 5 回滚失败 */
  Status?: number;
  /** 托管资源创建时间 */
  CreateTime?: string;
  /** 待部署总数 */
  PendingTotalCount?: number;
}

/** 部署记录详情 */
declare interface DeployRecordDetail {
  /** 部署记录详情ID */
  Id?: number;
  /** 部署证书ID */
  CertId?: string;
  /** 原绑定证书ID */
  OldCertId?: string;
  /** 部署实例ID */
  InstanceId?: string;
  /** 部署实例名称 */
  InstanceName?: string;
  /** 部署监听器ID */
  ListenerId?: string;
  /** 部署域名列表 */
  Domains?: string[];
  /** 部署监听器协议 */
  Protocol?: string;
  /** 部署状态 */
  Status?: number;
  /** 部署错误信息 */
  ErrorMsg?: string;
  /** 部署记录详情创建时间 */
  CreateTime?: string;
  /** 部署记录详情最后一次更新时间 */
  UpdateTime?: string;
  /** 部署监听器名称 */
  ListenerName?: string;
  /** 是否开启SNI */
  SniSwitch?: number;
  /** COS存储桶名称 */
  Bucket?: string;
  /** 命名空间名称 */
  Namespace?: string;
  /** secret名称 */
  SecretName?: string;
  /** 端口 */
  Port?: number;
  /** TCB环境ID */
  EnvId?: string;
  /** 部署的TCB类型 */
  TCBType?: string;
  /** 部署的TCB地域 */
  Region?: string;
  /** 部署CLB监听器的Url */
  Url?: string[];
  /** 当前部署证书加密算法 */
  Algorithm?: string;
  /** 原证书加密算法 */
  OldAlgorithm?: string;
  /** 实例状态，不同云产品状态不一样 */
  InstanceStatus?: string;
  /** 监听器状态 */
  ListenerStatus?: string;
}

/** 部署记录信息 */
declare interface DeployRecordInfo {
  /** 部署记录ID */
  Id?: number;
  /** 部署证书ID */
  CertId?: string;
  /** 部署资源类型 */
  ResourceType?: string;
  /** 部署地域 */
  Region?: string;
  /** 部署状态:0 未开始， 1 成功， 2 失败 */
  Status?: number;
  /** 部署时间 */
  CreateTime?: string;
  /** 最近一次更新时间 */
  UpdateTime?: string;
}

/** 部署记录详情 */
declare interface DeployRecordItem {
  /** 部署记录详情ID */
  Id?: number;
  /** 原绑定证书ID */
  OldCertId?: string;
  /** 部署实例ID */
  InstanceId?: string;
  /** 部署实例名称 */
  InstanceName?: string;
  /** 部署监听器ID */
  ListenerId?: string;
  /** 部署域名列表 */
  Domains?: string[];
  /** 部署监听器协议 */
  Protocol?: string;
  /** 部署状态 */
  Status?: number;
  /** 部署错误信息 */
  ErrorMsg?: string;
  /** 部署记录详情创建时间 */
  CreateTime?: string;
  /** 部署记录详情最后一次更新时间 */
  UpdateTime?: string;
  /** 部署监听器名称 */
  ListenerName?: string;
  /** 是否开启SNI */
  SniSwitch?: number;
  /** COS存储桶名称 */
  Bucket?: string;
  /** 命名空间名称 */
  Namespace?: string;
  /** secret名称 */
  SecretName?: string;
  /** 端口 */
  Port?: number;
  /** 部署的TCB地域 */
  Region?: string;
  /** 负载均衡类型，0 传统型负载均衡； 1 应用型负载均衡 */
  Forward?: number;
  /** 证书认证模式：UNIDIRECTIONAL单向认证，MUTUAL双向认证 */
  SSLMode?: string;
  /** 部署资源类型 */
  ResourceType?: string;
}

/** 托管记录详情信息 */
declare interface DeployRecordList {
  /** 部署资源类型 */
  ResourceType?: string;
  /** 部署资源详情列表 */
  List?: DeployRecordItem[] | null;
  /** 该部署资源总数 */
  TotalCount?: number;
}

/** 资源详情 */
declare interface DeployedResources {
  /** 证书ID */
  CertificateId?: string;
  /** 数量 */
  Count?: number;
  /** 资源标识:clb,cdn,live,waf,antiddos */
  Type?: string;
  /** 不建议使用。字段返回和Resources相同。本字段后续只返回null */
  ResourceIds?: string[];
  /** 关联资源ID或关联域名。 */
  Resources?: string[];
}

/** 证书域名验证结果 */
declare interface DomainValidationResult {
  /** 证书绑定的域名。 */
  Domain?: string;
  /** 域名验证类型。 取值为：DNS、FILE、DNS_AUTO、DNS_PROXY、FILE_PROXY */
  VerifyType?: string;
  /** 腾讯云检测结果，取值：1（验证通过）； -1（被限频或者 txt record not found）；-2（txt record not match）；-3（ns record not found）；-4（file not found）；-5（file not match）；-6（cname record not found）；-7（cname record not match）；-8（ns record not found）-9（file not found）；-10（file not match） */
  LocalCheck?: number;
  /** CA检查结果。取值： -1（未检测通过）；2（检测通过） */
  CaCheck?: number;
  /** 检查失败原因。状态LocalCheck的具体描述 */
  LocalCheckFailReason?: string;
  /** 检查到的值。 */
  CheckValue?: string[];
  /** 是否被限频拦截， 取值：false（未被限频）；true（被限频） */
  Frequently?: boolean;
  /** 证书是否已经签发。取值： false（未签发）；true（已签发） */
  Issued?: boolean;
}

/** 获取证书列表（DescribeCertificate）返回参数键为 DvAuthDetail 的内容。 */
declare interface DvAuthDetail {
  /** 证书域名验证记录Key */
  DvAuthKey?: string | null;
  /** 证书域名验证记录值 */
  DvAuthValue?: string | null;
  /** 证书域名验证域名值 */
  DvAuthDomain?: string | null;
  /** 证书域名验证文件路径， 仅FILE、FILE_PROXY使用 */
  DvAuthPath?: string | null;
  /** 证书域名验证子域名 */
  DvAuthKeySubDomain?: string | null;
  /** 证书域名验证信息， 存在多个域名验证使用本字段 */
  DvAuths?: DvAuths[] | null;
}

/** 返回参数键为 DvAuths 的内容。 */
declare interface DvAuths {
  /** 证书域名验证记录Key */
  DvAuthKey?: string;
  /** 证书域名验证记录值 */
  DvAuthValue?: string;
  /** 证书域名验证域名值 */
  DvAuthDomain?: string;
  /** 证书域名验证文件路径， 仅FILE、FILE_PROXY使用 */
  DvAuthPath?: string;
  /** 证书域名验证子域名 */
  DvAuthSubDomain?: string;
  /** 证书域名验证类型，取值：TXT：DNS域名验证添加TXT记录FILE：域名文件验证CNAME：DNS域名验证添加CNAME记录 */
  DvAuthVerifyType?: string;
}

/** 错误异常 */
declare interface Error {
  /** 异常错误码 */
  Code?: string;
  /** 异常错误信息 */
  Message?: string;
}

/** 过滤参数列表 */
declare interface Filter {
  /** 过滤参数key */
  FilterKey: string;
  /** 过滤参数值 */
  FilterValue: string;
}

/** GAAP实例详情 */
declare interface GAAPInstanceDetail {
  /** 实例ID */
  InstanceId?: string;
  /** 监听器列表 */
  ListenerList?: GAAPListenerDetail[];
  /** 加速实例名称 */
  InstanceName?: string;
}

/** GAAP实例详情 - 异步关联云资源数据结构 */
declare interface GAAPInstanceList {
  /** 实例详情 */
  InstanceList?: GAAPInstanceDetail[];
  /** 总数 */
  TotalCount?: number;
  /** 错误信息 */
  Error?: string;
}

/** GAAP监听器详情 */
declare interface GAAPListenerDetail {
  /** 监听器状态 */
  ListenerStatus?: string;
  /** 监听器ID */
  ListenerId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 不匹配的域名列表 */
  NoMatchDomains?: string[];
  /** 实例绑定的证书列表 */
  CertIdList?: string[];
  /** 监听器协议 */
  Protocol?: string;
}

/** 云原生网关证书信息 */
declare interface GatewayCertificate {
  /** 网关证书ID */
  Id?: string;
  /** 网关证书名称 */
  Name?: string;
  /** 绑定域名 */
  BindDomains?: string[];
  /** 证书来源 */
  CertSource?: string;
  /** 当前绑定的SSL证书ID */
  CertId?: string;
}

/** 托管配置 */
declare interface HostingConfig {
  /** 托管资源替换时间， 默认为证书过期前30天存在续费证书则替换 */
  ReplaceTime?: number;
  /** 托管发送消息类型：0，托管开始前消息提醒（没有续费证书也会收到该提示消息）； 1， 托管开始消息提醒（存在续费证书才会收到消息提醒）； 2， 托管资源替换失败消息提醒； 3 托管资源替换成功消息提醒 */
  MessageTypes?: number[];
  /** 资源替换开始时间 */
  ReplaceStartTime?: string;
  /** 资源替换结束时间 */
  ReplaceEndTime?: string;
}

/** Lighthouse实例 */
declare interface LighthouseInstanceDetail {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** IP地址 */
  IP?: string[];
  /** 可选择域名 */
  Domain?: string[];
}

/** live实例详情 */
declare interface LiveInstanceDetail {
  /** 域名 */
  Domain?: string;
  /** 已绑定的证书ID */
  CertId?: string | null;
  /** -1：域名未关联证书。1： 域名https已开启。0： 域名https已关闭。 */
  Status?: number;
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

/** MQTT实例详情 */
declare interface MQTTInstanceDetail {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 不匹配的域名列表 */
  NoMatchDomains?: string[];
  /** 服务端证书列表 */
  ServerCertIdList?: string[];
  /** ca证书列表 */
  CaCertIdList?: string[];
}

/** MQTT实例详情 - 异步关联云资源数据结构 */
declare interface MQTTInstanceList {
  /** 地域 */
  Region?: string;
  /** 实例详情 */
  InstanceList?: MQTTInstanceDetail[];
  /** 地域下总数 */
  TotalCount?: number;
  /** 错误信息 */
  Error?: string;
}

/** 管理人信息 */
declare interface ManagerInfo {
  /** 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期 */
  Status?: string;
  /** 管理人姓名 */
  ManagerFirstName?: string;
  /** 管理人姓名 */
  ManagerLastName?: string;
  /** 管理人职位 */
  ManagerPosition?: string;
  /** 管理人电话 */
  ManagerPhone?: string;
  /** 管理人邮箱 */
  ManagerMail?: string;
  /** 管理人所属部门 */
  ManagerDepartment?: string;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 管理人域名数量 */
  DomainCount?: number;
  /** 管理人证书数量 */
  CertCount?: number;
  /** 管理人ID */
  ManagerId?: number;
  /** 审核有效到期时间 */
  ExpireTime?: string | null;
  /** 最近一次提交审核时间 */
  SubmitAuditTime?: string | null;
  /** 审核通过时间 */
  VerifyTime?: string | null;
  /** 具体审核状态信息 */
  StatusInfo?: ManagerStatusInfo[] | null;
  /** 标签 */
  Tags?: Tags[];
}

/** 管理人预审核的域名列表 */
declare interface ManagerPreAuditDomain {
  /** 预审核域名信息 */
  Domain: string;
  /** 预审核域名创建时间 */
  CreateTime: string;
  /** 预审核域名过期时间 */
  ExpireTime: string;
}

/** 管理人的四种审核状态 */
declare interface ManagerStatusInfo {
  /** 审核类型，枚举值：ov,ev */
  Type?: string;
  /** 审核状态，枚举值：pending,completed,invalid,submitted,expiring,expired */
  Status?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 过期时间 */
  ExpireTime?: string;
  /** 管理人预审核的域名列表 */
  ManagerPreAuditDomains?: ManagerPreAuditDomain[];
}

/** 证书操作日志。 */
declare interface OperationLog {
  /** 操作证书动作。 */
  Action?: string;
  /** 操作时间。 */
  CreatedOn?: string;
  /** 主账号 */
  Uin?: string;
  /** 子账号 */
  SubAccountUin?: string;
  /** 证书ID */
  CertId?: string;
  /** 每个操作类型都对应一个具体的操作描述。以下是对每个操作类型及其描述的文字说明：1. apply - 表示申请一个免费的证书。2. delete - 表示删除操作。3. download - 表示下载操作。4. upload - 表示上传操作。5. revoke - 表示吊销证书。6. cancelRevoke - 表示取消吊销操作。7. updateAlias - 表示更新备注信息。8. changeProject - 表示将证书分配到某个项目。9. uploadConfirmLetter - 表示上传确认函。10. cancel - 表示取消订单操作。11. replace - 表示重颁发证书。12. downloadConfirmLetter - 表示下载证书吊销确认函。13. editRevokeLetter - 表示上传证书吊销确认函。14. renewVIP - 表示续费付费证书。15. applyVIP - 表示申请付费证书。16. submitInfo - 表示提交资料。17. downloadConfirmLetter - 表示下载确认函模版。18. uploadFromYunAPI - 表示通过云 API 上传。19. transferIn - 表示证书转入操作。20. transferOut - 表示证书转出操作。21. refund - 表示申请退款。22. multiYearsRenew - 表示多年期自动续期。23. modifyDownloadLimit - 表示修改下载限制开关。24. issued - 表示证书签发。25. domainValidationPassed - 表示域名验证完成。26. Resubmit - 表示证书重新申请。 */
  Type?: string;
}

/** 权益包基本信息 */
declare interface PackageInfo {
  /** 权益包ID。 */
  PackageId?: string;
  /** 权益包内权益点总量。 */
  Total?: number;
  /** 权益包内权益点余量。 */
  Balance?: number;
  /** 权益包名称。 */
  Type?: string;
  /** 权益点是转入时，来源信息。 */
  SourceUin?: number | null;
  /** 权益点状态。 */
  Status?: string;
  /** 过期时间。 */
  ExpireTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
  /** 生成时间。 */
  CreateTime?: string;
  /** 来源类型。 */
  SourceType?: string;
  /** 转移信息。 */
  TransferOutInfos?: PackageTransferOutInfo[] | null;
}

/** 权益包转出详情 */
declare interface PackageTransferOutInfo {
  /** 权益包ID。 */
  PackageId?: string;
  /** 转移码。 */
  TransferCode?: string;
  /** 本次转移点数。 */
  TransferCount?: number;
  /** 转入的PackageID。 */
  ReceivePackageId?: string;
  /** 本次转移过期时间。 */
  ExpireTime?: string;
  /** 本次转移生成时间。 */
  CreateTime?: string;
  /** 本次转移更新时间。 */
  UpdateTime?: string;
  /** 转移状态。 */
  TransferStatus?: string;
  /** 接收者uin。 */
  ReceiverUin?: number;
  /** 接收时间。 */
  ReceiveTime?: string;
}

/** 预审核信息列表 */
declare interface PreAuditInfo {
  /** 证书总年限 */
  TotalPeriod?: number;
  /** 证书当前年限 */
  NowPeriod?: number;
  /** 证书预审核管理人ID */
  ManagerId?: string;
}

/** 获取证书列表（DescribeCertificates）返回参数键为 Certificates 下，key为 ProjectInfo 的内容。 */
declare interface ProjectInfo {
  /** 项目名称。 */
  ProjectName?: string;
  /** 项目创建用户 UIN。 */
  ProjectCreatorUin?: number;
  /** 项目创建时间。 */
  ProjectCreateTime?: string;
  /** 项目信息简述。 */
  ProjectResume?: string;
  /** 用户 UIN。 */
  OwnerUin?: number;
  /** 项目 ID。 */
  ProjectId?: string;
}

/** 云资源地域列表 */
declare interface ResourceTypeRegions {
  /** 云资源类型，支持clb、waf、apigateway、cos、tke、tse、tcb */
  ResourceType?: string;
  /** 地域列表 */
  Regions?: string[];
}

/** 吊销证书域名验证信息。 */
declare interface RevokeDomainValidateAuths {
  /** DV 认证值路径。 */
  DomainValidateAuthPath?: string;
  /** DV 认证 KEY。 */
  DomainValidateAuthKey?: string;
  /** DV 认证值。 */
  DomainValidateAuthValue?: string;
  /** DV 认证域名。 */
  DomainValidateAuthDomain?: string;
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

/** SCF实例详情 */
declare interface SCFInstanceDetail {
  /** 证书ID */
  CertificateId?: string;
  /** 协议 */
  Protocol?: string;
  /** 域名 */
  Domain?: string;
  /** 地域 */
  Region?: string;
}

/** SCF实例详情 - 异步关联云资源数据结构 */
declare interface SCFInstanceList {
  /** 地域 */
  Region?: string;
  /** SCF实例详情 */
  InstanceList?: SCFInstanceDetail[];
  /** 错误信息 */
  Error?: string;
  /** 地域下总数 */
  TotalCount?: number;
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
  BindResourceResult?: BindResourceResult[];
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
  Domain?: string;
  /** 状态 */
  Status?: number;
  /** 统一域名状态 */
  UnionStatus?: number;
  /** 是否被抢占, 被抢占表示域名被其他环境绑定了，需要解绑或者重新绑定。 */
  IsPreempted?: boolean;
  /** icp黑名单封禁状态，0-未封禁，1-封禁 */
  ICPStatus?: number;
  /** 已绑定证书ID */
  OldCertificateId?: string;
}

/** TCB访问服务列表 */
declare interface TCBAccessService {
  /** 实例列表 */
  InstanceList?: TCBAccessInstance[];
  /** 数量 */
  TotalCount?: number;
}

/** TCB环境 */
declare interface TCBEnvironment {
  /** 唯一ID */
  ID?: string;
  /** 来源 */
  Source?: string;
  /** 名称 */
  Name?: string;
  /** 状态 */
  Status?: string;
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
  Domain?: string;
  /** 状态 */
  Status?: string;
  /** 解析状态 */
  DNSStatus?: string;
  /** 已绑定证书ID */
  OldCertificateId?: string;
}

/** TCB静态托管服务列表 */
declare interface TCBHostService {
  /** 实例列表 */
  InstanceList?: TCBHostInstance[];
  /** 数量 */
  TotalCount?: number;
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

/** TDMQ - Rabbit实例详情 */
declare interface TDMQInstanceDetail {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 服务端证书ID */
  CertId?: string;
  /** CA证书ID */
  CaCertId?: string;
  /** 不匹配的域名列表 */
  NoMatchDomains?: string[];
}

/** TDMQ - Rabbit实例详情 - 异步关联云资源数据结构 */
declare interface TDMQInstanceList {
  /** 地域 */
  Region?: string;
  /** 实例详情 */
  InstanceList?: TDMQInstanceDetail[];
  /** 地域下总数 */
  TotalCount?: number;
  /** 错误信息 */
  Error?: string;
}

/** tse实例详情 */
declare interface TSEInstanceDetail {
  /** 网关ID */
  GatewayId?: string;
  /** 网关名称 */
  GatewayName?: string;
  /** 网关证书列表 */
  CertificateList?: GatewayCertificate[];
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
  Host?: string;
  /** 证书ID */
  CertId?: string;
  /** 区域ID */
  ZoneId?: string | null;
  /** 域名状态deployed：已部署；processing：部署中；applying：申请中；failed：申请失败；issued：绑定失败。 */
  Status?: string;
  /** 证书加密算法 */
  Algorithm?: string;
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
  IngressName?: string;
  /** tls域名列表 */
  TlsDomains?: string[];
  /** ingress域名列表 */
  Domains?: string[];
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
  Name?: string;
  /** secret列表 */
  SecretList?: TkeSecretDetail[];
}

/** tke secret详情 */
declare interface TkeSecretDetail {
  /** secret名称 */
  Name?: string;
  /** 证书ID */
  CertId?: string;
  /** ingress列表 */
  IngressList?: TkeIngressDetail[];
  /** 和新证书不匹配的域名列表 */
  NoMatchDomains?: string[] | null;
}

/** 更新记录详情 */
declare interface UpdateRecordDetail {
  /** 更新详情记录id */
  Id?: number;
  /** 新旧证书更新 - 新证书ID */
  CertId?: string;
  /** 新旧证书更新 - 旧证书ID */
  OldCertId?: string;
  /** 部署域名列表 */
  Domains?: string[] | null;
  /** 新旧证书更新云资源的云资源类型：- clb- cdn- ddos- live- vod- waf- apigateway- teo- tke- cos- tse- tcb */
  ResourceType?: string;
  /** 部署地域 */
  Region?: string | null;
  /** 部署状态， 取值范围：0：待部署1：部署成功2：部署失败3：部署中4：回滚成功5：回滚失败6：无资源，无需部署 */
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
  EnvId?: string;
  /** TCB部署类型 */
  TCBType?: string;
  /** 监听器Url(clb专属) */
  Url?: string;
  /** 新证书加密算法 */
  Algorithm?: string;
  /** 旧证书加密算法 */
  OldAlgorithm?: string;
  /** 实例状态，不同云产品状态不一样 */
  InstanceStatus?: string;
  /** 监听器状态 */
  ListenerStatus?: string;
}

/** 更新记录详情 */
declare interface UpdateRecordDetails {
  /** 新旧证书更新云资源的云资源类型：- clb- cdn- ddos- live- vod- waf- apigateway- teo- tke- cos- tse- tcb */
  ResourceType?: string;
  /** 该云资源更新详情 */
  List?: UpdateRecordDetail[];
  /** 该云资源更新资源总数 */
  TotalCount?: number;
}

/** 部署记录信息 */
declare interface UpdateRecordInfo {
  /** 记录ID */
  Id?: number;
  /** 新证书ID */
  CertId?: string;
  /** 原证书ID */
  OldCertId?: string;
  /** 部署资源类型列表 */
  ResourceTypes?: string[];
  /** 部署地域列表 */
  Regions?: string[];
  /** 部署状态 */
  Status?: number;
  /** 部署时间 */
  CreateTime?: string;
  /** 最后一次更新时间 */
  UpdateTime?: string;
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

/** 部署记录列表信息 */
declare interface UploadUpdateRecordInfo {
  /** 记录ID */
  Id?: number;
  /** 原证书ID */
  OldCertId?: string;
  /** 部署资源类型列表 */
  ResourceTypes?: string[];
  /** 部署状态 */
  Status?: number;
  /** 部署时间 */
  CreateTime?: string;
  /** 最后一次更新时间 */
  UpdateTime?: string;
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
  /** 证书域名验证方式：DNS_AUTO： 自动添加域名DNS验证， 需用户域名解析托管在『[云解析DNS](https://console.cloud.tencent.com/cns)』，且与申请证书归属同一个腾讯云账号DNS：手动添加域名DNS验证，需用户手动去域名解析服务商添加验证值FILE：手动添加域名文件验证。 需要用户手动在域名站点根目录添加指定路径文件进行文件验证， http&https任一通过即可；且域名站点需海外CA机构能访问， 具体访问白名单为：64.78.193.238，216.168.247.9，216.168.249.9，54.189.196.217 */
  DvAuthMethod: string;
  /** 证书绑定的域名。 */
  DomainName: string;
  /** 证书关联的项目 ID。 默认为0（默认项目） */
  ProjectId?: number;
  /** 证书类型， 可不传，目前仅支持类型83。83 = TrustAsia C1 DV Free。 */
  PackageType?: string;
  /** 证书订单关联邮箱。默认为腾讯云账号邮箱， 不存在则关联固定邮箱 */
  ContactEmail?: string;
  /** 证书关联手机号码， 不存在则关联固定手机号码 */
  ContactPhone?: string;
  /** 证书有效期，默认3（月），目前仅支持3个月。 */
  ValidityPeriod?: string;
  /** 加密算法，取值为ECC、RSA， 默认为RSA */
  CsrEncryptAlgo?: string;
  /** 密钥对参数，RSA仅支持2048。ECC仅支持prime256v1。加密算法选择ECC时，此参数必填 */
  CsrKeyParameter?: string;
  /** 私钥密码， 目前仅使用在生成jks、pfx格式证书时密码； 其他格式私钥证书未加密 */
  CsrKeyPassword?: string;
  /** 证书别名 */
  Alias?: string;
  /** 旧证书 ID，用于证书续费（证书有效期在30天内，且未过期），会建立续费关系， 可用于托管； 不传则表示新申请证书 */
  OldCertificateId?: string;
  /** 权益包ID，用于免费证书扩容包使用， 免费证书扩容包已下线 */
  PackageId?: string;
  /** 签发后是否删除自动域名验证记录， 默认为否；仅域名为DNS_AUTO验证类型支持传参 */
  DeleteDnsAutoRecord?: boolean;
  /** 证书绑定的其他域名，待开放。目前不支持此参数 */
  DnsNames?: string[];
}

declare interface ApplyCertificateResponse {
  /** 新申请成功的证书 ID。 */
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
  Result?: boolean;
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

declare interface CertificateInfoSubmitRequest {
  /** 待提交资料的付费证书 ID。 */
  CertId: string;
  /** 此字段必传。 CSR 生成方式， 取值为：- online：腾讯云提交的填写的参数信息生成CSR和私钥，并由腾讯云加密存储- parse：自行生成CSR和私钥，并通过上传CSR申请证书 */
  GenCsrType: string;
  /** 证书绑定的通用名称， 若是上传的CSR，则该域名需与CSR解析的通用名称一致 */
  CertCommonName: string;
  /** 组织信息类型， 取值范围：1（个人）：仅DV类型证书可设置为1， 个人类型证书组织信息字段可不传：Org开头，Admin开头，Tech开头2（公司）：所有类型证书都可设置为2， 按需传组织信息字段 */
  CompanyType: number;
  /** 公司ID，在 [腾讯云控制台](https://console.cloud.tencent.com/ssl/info) 可进行查看，若无满足的公司信息， 则本参数传0 ； 若存在满足当前订单的公司信息， 可以根据 [DescribeCompanies](https://cloud.tencent.com/document/product/400/90375) 查看公司ID； 若传了公司ID，则Org开头的参数可不传 */
  CompanyId: string;
  /** 公司证件类型，取值范围：TYDMZ（统一社会信用代码 ）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段OTHERS（其他） */
  OrgIdType?: string;
  /** 公司证件号码，取值范围：TYDMZ（统一社会信用代码 ）：11532xxxxxxxx24820 */
  OrgIdNumber?: string;
  /** 管理人证件类型，取值范围：SFZ（身份证）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段HZ（护照）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段 */
  AdminIdType?: string;
  /** 管理人证件号码，仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段， 取值范围：SFZ（身份证）：110000xxxxxxxx1242HZ（护照）:EFxxxxxxx */
  AdminIdNumber?: string;
  /** 联系人证件类型，取值范围：SFZ（身份证）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段HZ（护照）：仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段 */
  TechIdType?: string;
  /** 联系人证件号码，仅CFCA类型证书需要使用本字段， 其他类型证书不需要使用本字段，取值范围：SFZ（身份证）：110000xxxxxxxx1242HZ（护照）:EFxxxxxxx */
  TechIdNumber?: string;
  /** 上传的 CSR 内容。若GenCsrType为parse， 则此字段必传。 */
  Csr?: string;
  /** 证书绑定的其他域名， 单域名、泛域名证书无需提供。 多域名、多泛域名必填 */
  DnsNames?: string[];
  /** 私钥密码， 目前仅使用在生成jks、pfx格式证书时密码； 其他格式私钥证书未加密 */
  KeyPass?: string;
  /** 公司名称。若没有传CompanyId或者ManagerId， 则此字段必传 */
  OrgOrganization?: string;
  /** 部门名称。若没有传CompanyId或者ManagerId， 则此字段必传 */
  OrgDivision?: string;
  /** 公司详细地址。若没有传CompanyId或者ManagerId， 则此字段必传 */
  OrgAddress?: string;
  /** 国家名称，如中国：CN 。若没有传CompanyId或者ManagerId， 则此字段必传 */
  OrgCountry?: string;
  /** 公司所在城市。若没有传CompanyId或者ManagerId， 则此字段必传 */
  OrgCity?: string;
  /** 公司所在省份。若没有传CompanyId或者ManagerId， 则此字段必传 */
  OrgRegion?: string;
  /** 公司所属区号。若没有传CompanyId或者ManagerId， 则此字段必传如：021。 手机号码传 86 */
  OrgPhoneArea?: string;
  /** 公司所属号码。若没有传CompanyId或者ManagerId， 则此字段必传 */
  OrgPhoneNumber?: string;
  /** 证书域名验证方式：DNS_AUTO： 自动添加域名DNS验证， 需用户域名解析托管在『[云解析DNS](https://console.cloud.tencent.com/cns)』，且与申请证书归属同一个腾讯云账号DNS：手动添加域名DNS验证，需用户手动去域名解析服务商添加验证值FILE：手动添加域名文件验证。 需要用户手动在域名站点根目录添加指定路径文件进行文件验证， http&https任一通过即可；且域名站点需海外CA机构能访问， 具体访问白名单为：64.78.193.238，216.168.247.9，216.168.249.9，54.189.196.217 */
  VerifyType?: string;
  /** 管理人名。若没有传ManagerId， 则此字段必传 */
  AdminFirstName?: string;
  /** 管理人姓。若没有传ManagerId， 则此字段必传 */
  AdminLastName?: string;
  /** 管理人手机号码。若没有传ManagerId， 则此字段必传 */
  AdminPhone?: string;
  /** 管理人邮箱地址。若没有传ManagerId， 则此字段必传 */
  AdminEmail?: string;
  /** 管理人职位。若没有传ManagerId， 则此字段必传 */
  AdminTitle?: string;
  /** 联系人名。若没有传ManagerId， 则此字段必传 */
  TechFirstName?: string;
  /** 联系人姓。若没有传ManagerId， 则此字段必传 */
  TechLastName?: string;
  /** 联系人邮箱地址。CompanyType为1时， 此字段必传 */
  ContactEmail?: string;
  /** 是否开启自动续费： 0， 不开启； 1， 开启； 默认为0 */
  AutoRenewFlag?: number;
  /** 密钥对参数，RSA支持2048，4096。ECC仅支持prime256v1。当 CSR 生成方式为online的时候，此参数必填。 */
  CsrKeyParameter?: string;
  /** 加密算法，取值为ECC、RSA， 默认为RSA。当 CSR 生成方式为online的时候，此参数必填。 */
  CsrEncryptAlgo?: string;
  /** 管理人ID，在 [腾讯云控制台](https://console.cloud.tencent.com/ssl/info) 可进行查看，若无满足的管理人信息， 则本参数传0 ； 若存在满足当前订单的管理人信息， 可以根据 [DescribeManagers](https://cloud.tencent.com/document/product/400/52672) 查看管理人ID； 若传了管理人ID，则Org开头、Admin开头、Tech开头的参数可不传； 管理人ID会包含公司信息 */
  ManagerId?: string;
  /** 联系人电话。若没有传ManagerId， 则此字段必传 */
  TechPhone?: string;
  /** 联系人邮箱 */
  TechEmail?: string;
  /** 联系人职位。若没有传ManagerId， 则此字段必传 */
  TechTitle?: string;
  /** 证书类型 */
  Type?: number;
  /** 只针对Dnspod系列证书有效，ca机构类型可为sectigo和digicert */
  CaType?: string;
  /** 签名算法 */
  SignAlgo?: string;
  /** 是否使用交叉根证书 */
  UseCrossSignRoot?: boolean;
}

declare interface CertificateInfoSubmitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CertificateOrderSubmitRequest {
  /** 待提交资料的付费证书 ID。 */
  CertId: string;
  /** 是否删除自动DNS验证值：0，不删除； 1，删除； 默认不删除 */
  DeleteDnsAutoRecord?: number;
  /** 证书域名验证方式：DNS_AUTO： 自动添加域名DNS验证， 需用户域名解析托管在『[云解析DNS](https://console.cloud.tencent.com/cns)』，且与申请证书归属同一个腾讯云账号DNS：手动添加域名DNS验证，需用户手动去域名解析服务商添加验证值FILE：手动添加域名文件验证。 需要用户手动在域名站点根目录添加指定路径文件进行文件验证， http&https任一通过即可；且域名站点需海外CA机构能访问， 具体访问白名单见控制台页面 */
  VerifyType?: string;
}

declare interface CertificateOrderSubmitResponse {
  /** CA机构侧订单号。 */
  OrderId?: string;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。 */
  Status?: number;
  /** 是否预审核 */
  IsAudited?: boolean;
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

declare interface CheckCertificateDomainVerificationRequest {
  /** 证书ID。 */
  CertificateId: string;
}

declare interface CheckCertificateDomainVerificationResponse {
  /** 证书域名验证结果列表， 证书若绑定了多个域名， 则返回数组有多份 */
  VerificationResults?: DomainValidationResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckCertificateExistRequest {
  /** 证书公钥内容， 包含证书链 */
  CertificatePublicKey: string;
}

declare interface CheckCertificateExistResponse {
  /** 重复的证书ID */
  RepeatCertId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CommitCertificateInformationRequest {
  /** 待提交资料的付费证书 ID。 */
  CertificateId: string;
  /** 证书域名验证方式：DNS_AUTO： 自动添加域名DNS验证， 需用户域名解析托管在『[云解析DNS](https://console.cloud.tencent.com/cns)』，且与申请证书归属同一个腾讯云账号DNS：手动添加域名DNS验证，需用户手动去域名解析服务商添加验证值FILE：手动添加域名文件验证。 需要用户手动在域名站点根目录添加指定路径文件进行文件验证， http&https任一通过即可；且域名站点需海外CA机构能访问， 具体访问白名单为：64.78.193.238，216.168.247.9，216.168.249.9，54.189.196.217 */
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
  /** 证书产品PID，以下是对每个PID及其对应的证书文字说明：1. 1022451 - CFCA-增强型(EV)SSL证书2. 1022449 - CFCA-企业型(OV) SSL证书(通配符)3. 1022447 - CFCA-企业型(OV)SSL证书4. 1014028 - DNSPod亚信国密-企业型(OV)通配符证书5. 1014030 - DNSPod亚信国密-企业型(OV)多域名证书6. 1014026 - DNSPod亚信国密-企业型(OV)证书7. 1014022 - DNSPod亚信国密-域名型(DV)通配符证书8. 1014024 - DNSPod亚信国密-域名型(DV)多域名证书9. 1014020 - DNSPod亚信国密-域名型(DV)证书10. 1013949 - DNSPod SSL 域名型SSL证书(C1)11. 1013953 - DNSPod SSL域名型多域名SSL证书(C1)12. 1013951 - DNSPod-SSL域名型DV（泛域名）13. 1013955 - DNSPod 企业型SSL证书(C1)14. 1013959 - DNSPod 企业型多域名SSL证书(C1)15. 1013957 - DNSPod 企业型通配符SSL证书(C1)16. 1013961 - DNSPod 增强型 SSL 证书(C1)17. 1013963 - DNSPod 增强型多域名SSL证书(C1)18. 1005919 - TrustAsia-域名型DV（通配符多域名）19. 1013882 - SecureSite-增强型专业版EVPro（多域名）20. 1018559 - SecureSite-增强型专业版EVPro（单域名）21. 1013910 - GlobalSign-增强型EV（多域名）22. 1013904 - GlobalSign-增强型EV（单域名）23. 1013898 - TrustAsia-增强型EV（多域名）24. 1013888 - TrustAsia-增强型EV（单域名）25. 1013886 - GeoTrust-增强型EV（多域名）26. 1018529 - GeoTrust-增强型EV（单域名）27. 1013880 - SecureSite-增强型EV（多域名）28. 1018557 - SecureSite-增强型EV（单域名）29. 1018586 - TrustAsia-域名型DV（泛域名）30. 1018584 - TrustAsia-域名型DV（多域名）31. 1013878 - SecureSite-企业型专业版OV Pro（多域名）32. 1018582 - SecureSite-企业型专业版OV Pro（单域名）33. 1013908 - GlobalSign-企业型OV（通配符多域名）34. 1013902 - GlobalSign-企业型OV（泛域名）35. 1013906 - GlobalSign-企业型OV（多域名）36. 1013900 - GlobalSign-企业型OV（单域名）37. 1013896 - TrustAsia-企业型OV（通配符多域名）38. 1013892 - TrustAsia-企业型OV（泛域名）39. 1013894 - TrustAsia-企业型OV（多域名）40. 1013890 - TrustAsia-企业型OV（单域名）41. 1004360 - GeoTrust-企业型OV（泛域名）42. 1013884 - GeoTrust-企业型OV（单域名）43. 1013874 - SecureSite-企业型OV（泛域名）44. 1013876 - SecureSite-企业型OV（多域名）45. 1018580 - SecureSite-企业型OV（单域名）46. 1004460 - DNSPod-国密增强型证书（多域名）47. 1004458 - DNSPod-国密增强型证书48. 1004370 - DNSPod-国密企业型证书（通配符）49. 1004368 - DNSPod-国密企业型证书（多域名）50. 1004366 - DNSPod-国密企业型证书51. 1004362 - DNSPod-国密域名型证书（通配符）52. 1004364 - DNSPod-国密域名型证书（多域名）53. 1004358 - DNSPod-国密域名型证书54. 1004456 - WoTrus-增强型证书（多域名）55. 1004454 - WoTrus-增强型证书56. 1004168 - WoTrus-企业型证书（通配符）57. 1004166 - WoTrus-企业型证书（多域名）58. 1004164 - WoTrus-企业型证书59. 1004159 - WoTrus-域名型证书（通配符）60. 1004161 - WoTrus-域名型证书（多域名）61. 1004157 - WoTrus-域名型证书 */
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
  /** 续费证书CSR的算法类型：RSA,ECC,SM2 */
  RenewAlgorithmType?: string;
  /** 续费证书CSR的算法参数:2048,4096,prime256v1 */
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
  /** 询价参数，以下是对每个询价参数及其对应的证书文字说明：1. sv_ssl_cost_cfca_ca_ev - CFCA-增强型(EV)SSL证书2. sv_ssl_cost_cfca_ca_ovwildcard - CFCA-企业型(OV) SSL证书(通配符)3. sv_ssl_cost_cfca_ca_ov - CFCA-企业型(OV)SSL证书4. sv_ssl_cost_dnspod_ca_sm2_ovwildcard - DNSPod亚信国密-企业型(OV)通配符证书5. sv_ssl_cost_dnspod_ca_sm2_ovmultidomain - DNSPod亚信国密-企业型(OV)多域名证书6. sv_ssl_cost_dnspod_ca_sm2_ov - DNSPod亚信国密-企业型(OV)证书7. sv_ssl_cost_dnspod_ca_sm2_dvwildcard - DNSPod亚信国密-域名型(DV)通配符证书8. sv_ssl_cost_dnspod_ca_sm2_dvmultidomain - DNSPod亚信国密-域名型(DV)多域名证书9. sv_ssl_cost_dnspod_ca_sm2_dv - DNSPod亚信国密-域名型(DV)证书10. sv_ssl_cost_dnspod_ca_dv - DNSPod SSL 域名型SSL证书(C1)11. sv_ssl_cost_dnspod_ca_dvmultidomain - DNSPod SSL域名型多域名SSL证书(C1)12. sv_ssl_cost_dnspod_ca_dvwildcard - DNSPod-SSL域名型DV（泛域名）13. sv_ssl_cost_dnspod_ca_ov - DNSPod 企业型SSL证书(C1)14. sv_ssl_cost_dnspod_ca_ovmultidomain - DNSPod 企业型多域名SSL证书(C1)15. sv_ssl_cost_dnspod_ca_ovwildcard - DNSPod 企业型通配符SSL证书(C1)16. sv_ssl_cost_dnspod_ca_ev - DNSPod 增强型 SSL 证书(C1)17. sv_ssl_cost_dnspod_ca_evmultidomain - DNSPod 增强型多域名SSL证书(C1)18. sv_ssl_cost_trustasia_dvwildcardmulti - TrustAsia-域名型DV（通配符多域名）19. sv_ssl_cost_securesiteevpromul_sh - SecureSite-增强型专业版EVPro（多域名）20. sv_ssl_cost_symantec_evpro - SecureSite-增强型专业版EVPro（单域名）21. sv_ssl_cost_globalsign_ev_mul_sh - GlobalSign-增强型EV（多域名）22. sv_ssl_cost_globalsign_ev - GlobalSign-增强型EV（单域名）23. sv_ssl_cost_trustasia_evmultidomain - TrustAsia-增强型EV（多域名）24. sv_ssl_cost_trustasia_ev - TrustAsia-增强型EV（单域名）25. sv_ssl_cost_geotrust_evmultidomain - GeoTrust-增强型EV（多域名）26. sv_ssl_cost_geotrust_ev - GeoTrust-增强型EV（单域名）27. sv_ssl_cost_symantec_evmultidomain - SecureSite-增强型EV（多域名）28. sv_ssl_cost_symantec_ev - SecureSite-增强型EV（单域名）29. sv_ssl_cost_trustasia_dvwildcard - TrustAsia-域名型DV（泛域名）30. sv_ssl_cost_trustasia_dvmultidomain - TrustAsia-域名型DV（多域名）31. sv_ssl_cost_symantec_ovpromultidomain - SecureSite-企业型专业版OV Pro（多域名）32. sv_ssl_cost_symantec_ovpro - SecureSite-企业型专业版OV Pro（单域名）33. sv_ssl_cost_globalsign_ovwildcardmulti - GlobalSign-企业型OV（通配符多域名）34. sv_ssl_cost_globalsign_ovwildcard - GlobalSign-企业型OV（泛域名）35. sv_ssl_cost_globalsign_ovmultidomain - GlobalSign-企业型OV（多域名）36. sv_ssl_cost_globalsign_ov - GlobalSign-企业型OV（单域名）37. sv_ssl_cost_trustasia_ovwildcardmulti - TrustAsia-企业型OV（通配符多域名）38. sv_ssl_cost_trustasia_ovwildcard - TrustAsia-企业型OV（泛域名）39. sv_ssl_cost_trustasia_ovmultidomain - TrustAsia-企业型OV（多域名）40. sv_ssl_cost_trustasia_ov - TrustAsia-企业型OV（单域名）41. sv_ssl_cost_geotrust_ovwildcard - GeoTrust-企业型OV（泛域名）42. sv_ssl_cost_geotrust_ov - GeoTrust-企业型OV（单域名）43. sv_ssl_cost_symantec_ovwildcard - SecureSite-企业型OV（泛域名）44. sv_ssl_cost_symantec_ovmultidomain - SecureSite-企业型OV（多域名）45. sv_ssl_cost_symantec_ov - SecureSite-企业型OV（单域名）46. sv_ssl_cost_dnspod_evmultidomain - DNSPod-国密增强型证书（多域名）47. sv_ssl_cost_dnspod_ev - DNSPod-国密增强型证书48. sv_ssl_cost_dnspod_ovwildcard - DNSPod-国密企业型证书（通配符）49. sv_ssl_cost_dnspod_ovmultidomain - DNSPod-国密企业型证书（多域名）50. sv_ssl_cost_dnspod_ov - DNSPod-国密企业型证书51. sv_ssl_cost_dnspod_dvwildcard - DNSPod-国密域名型证书（通配符）52. sv_ssl_cost_dnspod_dvmultidomain - DNSPod-国密域名型证书（多域名）53. sv_ssl_cost_dnspod_dv - DNSPod-国密域名型证书54. sv_ssl_cost_wotrus_evmultidomain - WoTrus-增强型证书（多域名）55. sv_ssl_cost_wotrus_ev - WoTrus-增强型证书56. sv_ssl_cost_wotrus_ovwildcard - WoTrus-企业型证书（通配符）57. sv_ssl_cost_wotrus_ovmultidomain - WoTrus-企业型证书（多域名）58. sv_ssl_cost_wotrus_ov - WoTrus-企业型证书59. sv_ssl_cost_wotrus_dvwildcard - WoTrus-域名型证书（通配符）60. sv_ssl_cost_wotrus_dvmultidomain - WoTrus-域名型证书（多域名）61. sv_ssl_cost_wotrus_dv - WoTrus-域名型证书 */
  PriceKey?: string;
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
  /** 证书套餐类型：3：SecureSite 增强型企业版（EV Pro）， 4：SecureSite 增强型（EV）， 5：SecureSite 企业型专业版（OV Pro），6：SecureSite 企业型（OV）， 7：SecureSite 企业型（OV）通配符， 8：Geotrust 增强型（EV）， 9：Geotrust 企业型（OV）， 10：Geotrust 企业型（OV）通配符， 11：TrustAsia 域名型多域名 SSL 证书， 12：TrustAsia 域名型（DV）通配符， 13：TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14：TrustAsia 企业型（OV）SSL 证书（D3）， 15：TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16：TrustAsia 增强型 （EV）SSL 证书（D3）， 17：TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18：GlobalSign 企业型（OV）SSL 证书， 19：GlobalSign 企业型通配符 （OV）SSL 证书， 20：GlobalSign 增强型 （EV）SSL 证书， 21：TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22：GlobalSign 企业型多域名（OV）SSL 证书， 23：GlobalSign 企业型通配符多域名（OV）SSL 证书，24：GlobalSign 增强型多域名（EV）SSL 证书，25：Wotrus 域名型证书，26：Wotrus 域名型多域名证书，27：Wotrus 域名型通配符证书，28：Wotrus 企业型证书，29：Wotrus 企业型多域名证书，30：Wotrus 企业型通配符证书，31：Wotrus 增强型证书，32：Wotrus 增强型多域名证书，33：WoTrus-国密域名型证书，34：WoTrus-国密域名型证书（多域名），35：WoTrus-国密域名型证书（通配符），37：WoTrus-国密企业型证书，38：WoTrus-国密企业型证书（多域名），39：WoTrus-国密企业型证书（通配符），40：WoTrus-国密增强型证书，41：WoTrus-国密增强型证书（多域名），42：TrustAsia-域名型证书（通配符多域名），43：DNSPod-企业型(OV)SSL证书44：DNSPod-企业型(OV)通配符SSL证书45：DNSPod-企业型(OV)多域名SSL证书46：DNSPod-增强型(EV)SSL证书47：DNSPod-增强型(EV)多域名SSL证书48：DNSPod-域名型(DV)SSL证书49：DNSPod-域名型(DV)通配符SSL证书50：DNSPod-域名型(DV)多域名SSL证书51：DNSPod（国密）-企业型(OV)SSL证书52：DNSPod（国密）-企业型(OV)通配符SSL证书53：DNSPod（国密）-企业型(OV)多域名SSL证书54：DNSPod（国密）-域名型(DV)SSL证书55：DNSPod（国密）-域名型(DV)通配符SSL证书56：DNSPod（国密）-域名型(DV)多域名SSL证书57：SecureSite 企业型专业版多域名(OV Pro)58：SecureSite 企业型多域名(OV)59：SecureSite 增强型专业版多域名(EV Pro)60：SecureSite 增强型多域名(EV)61：Geotrust 增强型多域名(EV)75：SecureSite 企业型(OV)76：SecureSite 企业型(OV)通配符77：SecureSite 增强型(EV)78：Geotrust 企业型(OV)79：Geotrust 企业型(OV)通配符80：Geotrust 增强型(EV)81：GlobalSign 企业型（OV）SSL证书82：GlobalSign 企业型通配符 （OV）SSL证书85：GlobalSign 增强型 （EV）SSL证书88：GlobalSign 企业型通配符多域名 （OV）SSL证书89：GlobalSign 企业型多域名 （OV）SSL证书90：GlobalSign 增强型多域名（EV） SSL证书91：Geotrust 增强型多域名(EV)92：SecureSite 企业型专业版多域名(OV Pro)93：SecureSite 企业型多域名(OV)94：SecureSite 增强型专业版多域名(EV Pro)95：SecureSite 增强型多域名(EV)96：SecureSite 增强型专业版(EV Pro)97：SecureSite 企业型专业版(OV Pro)98：CFCA 企业型(OV)SSL证书99：CFCA 企业型多域名(OV)SSL证书，不支持多年期100：CFCA 企业型通配符(OV)SSL证书，不支持多年期101：CFCA 增强型(EV)SSL证书，不支持多年期102: Rapid-域名型(DV)SSL证书103: Rapid-域名型(DV)SSL证书(通配符)104: TrustAsia-域名型(单域名)105: SSL单域名证书(一年期) */
  ProductId: number;
  /** 证书包含的域名数量。 多域名或者多泛域名证书类型必须大于1 */
  DomainNum: number;
  /** 证书年限。 支持多年期的证书才可以大于1年 */
  TimeSpan: number;
  /** 是否自动使用代金券：1是，0否；默认为1 */
  AutoVoucher?: number;
  /** 标签， 生成证书打标签 */
  Tags?: Tags[];
}

declare interface CreateCertificateResponse {
  /** 证书ID列表 */
  CertificateIds?: string[];
  /** 订单号列表 */
  DealIds?: string[];
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

declare interface DeleteCertificatesRequest {
  /** 要删除的证书ID。单次最多100个 */
  CertificateIds: string[];
  /** 删除时是否检查证书关联了云资源。默认不检查。如需要检查关联云资源 (需授权服务角色SSL_QCSLinkedRoleInReplaceLoadCertificate)，完成授权后且该参数传true，删除将变成异步任务，接口会返回异步任务ID。需搭配 DescribeDeleteCertificatesTaskResult接口使用，查询删除任务是否成功。 */
  IsSync?: boolean;
}

declare interface DeleteCertificatesResponse {
  /** 成功的ID */
  Success?: string[];
  /** 失败的ID和原因 */
  Fail?: BatchDeleteFail[];
  /** 证书ID和异步任务的ID */
  CertTaskIds?: CertTaskId[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteManagerRequest {
  /** 管理人ID */
  ManagerId: number;
}

declare interface DeleteManagerResponse {
  /** 管理人ID */
  ManagerId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployCertificateInstanceRequest {
  /** 待部署的证书ID */
  CertificateId: string;
  /** 证书部署的实例列表，不同云资源类型如下- clb：若监听器开启了SNI，则需要指定到域名LoadBalancerId|ListenerId|Domain，例：["lb-bid2fs4g|lbl-a8af11gs|tencent.com"]，若监听器未开启SNI或者为四层监听器，则指定到监听器，例：["lb-bid2fs4g|lbl-1c6rp5eo"]- cdn：Domain|计费开关，例：["cdn2.tencent.com|off", "cdn.tencent.com|on"]- ddos：InsId|Domain|VirtualPort，例：["bgpip-000001ms|tencent.com|443"]- live：Domain，例：["live1.tencent.com", "live2.tencent.com"]- vod：Domain， 例：["vod1.tencent.com", "vod2.tencent.com"]- waf：Domain， 例：["waf1.tencent.com", "waf2.tencent.com"]- apigateway：ServiceId|Domain， 例：["service-8sk7cqmd|apigw1.tencent.com", "service-8sk7cqmd|apigw2.minghuang.online"]- teo：Domain， 例：["edgeone1.tencent.com", "edgeone2.tencent.com"]- tke：ClusterId|NameSpace|SecretName， 例：["cls-42sa0ae0|default|test-tencent"]- cos：Region|Bucket|Domain， 例：["ap-hongkong|ssl-server-1251810746|tencent.com"]- lighthouse：Region|InstanceId|Domain， 例：["ap-shanghai|lhins-nh7lql34|tencent.com"]- tse：GatewayId|CertificateId， 例：["gateway-s1da9151|fa61bc05-cc54-4eea-c932-24de52577372"]- tcb：Type|Region|EnvId|Domain， 例：["AccessService|ap-shanghai|ceshi-4s5h0ymg11c839c7|tencent.com"]- mqtt: InstanceId|CertId, 例：["mqtt-rdnwp7kb|gehs6jsx"]- gaap: InstanceId|ListenerId 例：["ga-a3e4z3ae|lsr-a73amjob"] */
  InstanceIdList: string[];
  /** 证书部署云资源支持的云资源类型， 不传则默认部署clb：- clb- cdn- ddos- live- vod- waf- apigateway- teo- tke- cos- lighthouse- tse- tcb- mqtt当云资源类型传入clb、waf、apigateway、cos、lighthouse、tke、tse、tcb、mqtt 时，公共参数Region必传。</dx-alert> */
  ResourceType?: string;
  /** 部署云资源状态：云直播：-1：域名未关联证书。1： 域名https已开启。0： 域名https已关闭。 */
  Status?: number;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，默认缓存半小时 */
  IsCache?: number;
}

declare interface DeployCertificateInstanceResponse {
  /** 云资源部署任务ID */
  DeployRecordId?: number;
  /** 部署任务创建状态；1表示创建成功； 0表示当前存在部署中的任务，未创建新的部署任务；返回值DeployRecordId为部署中的任务ID */
  DeployStatus?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployCertificateRecordRetryRequest {
  /** 待重试部署记录ID，通过DeployCertificateInstance获得 */
  DeployRecordId?: number;
  /** 待重试部署记录详情ID，通过DescribeHostDeployRecordDetail获得 */
  DeployRecordDetailId?: number;
}

declare interface DeployCertificateRecordRetryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployCertificateRecordRollbackRequest {
  /** 待重试部署记录ID, 就是通过DeployCertificateInstance返回的DeployRecordId */
  DeployRecordId?: number;
}

declare interface DeployCertificateRecordRollbackResponse {
  /** 回滚部署记录ID */
  DeployRecordId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateBindResourceTaskDetailRequest {
  /** 任务ID，根据CreateCertificateBindResourceSyncTask得到的任务ID查询绑定云资源结果 */
  TaskId: string;
  /** 每页展示数量， 默认10，最大值100; 分页总数为云资源地域下实例总数， 即第一页会拉群每个云资源的地域下面Limit数量实例 */
  Limit?: string;
  /** 当前偏移量，默认为0 */
  Offset?: string;
  /** 查询资源类型的结果详情， 不传则查询所有，取值支持：- clb- cdn- ddos- live- vod- waf- apigateway- teo- tke- cos- tse- tcb */
  ResourceTypes?: string[];
  /** 查询地域列表的数据，clb、tke、waf、apigateway、tcb、cos、tse支持地域查询， 其他资源类型不支持 */
  Regions?: string[];
}

declare interface DescribeCertificateBindResourceTaskDetailResponse {
  /** 关联clb资源详情 */
  CLB?: ClbInstanceList[];
  /** 关联cdn资源详情 */
  CDN?: CdnInstanceList[];
  /** 关联waf资源详情 */
  WAF?: WafInstanceList[];
  /** 关联ddos资源详情 */
  DDOS?: DdosInstanceList[];
  /** 关联live资源详情 */
  LIVE?: LiveInstanceList[];
  /** 关联vod资源详情 */
  VOD?: VODInstanceList[];
  /** 关联tke资源详情 */
  TKE?: TkeInstanceList[];
  /** 关联apigateway资源详情 */
  APIGATEWAY?: ApiGatewayInstanceList[];
  /** 关联tcb资源详情 */
  TCB?: TCBInstanceList[];
  /** 关联teo资源详情 */
  TEO?: TeoInstanceList[];
  /** 关联云资源异步查询结果： 0表示查询中， 1表示查询成功。 2表示查询异常； 若状态为1，则查看BindResourceResult结果；若状态为2，则查看Error原因 */
  Status?: number;
  /** 当前结果缓存时间 */
  CacheTime?: string;
  /** 关联tse资源详情 */
  TSE?: TSEInstanceList[];
  /** 关联的COS资源详情 */
  COS?: COSInstanceList[];
  /** 关联的TDMQ - Rabbit资源详情 */
  TDMQ?: TDMQInstanceList[];
  /** 关联的MQTT资源详情 */
  MQTT?: MQTTInstanceList[];
  /** 关联的GAAP资源详情 */
  GAAP?: GAAPInstanceList[];
  /** 关联的SCF资源详情 */
  SCF?: SCFInstanceList[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateBindResourceTaskResultRequest {
  /** 任务ID，根据CreateCertificateBindResourceSyncTask得到的任务ID查询绑定云资源结果， 最大支持100个 */
  TaskIds: string[];
}

declare interface DescribeCertificateBindResourceTaskResultResponse {
  /** 异步任务绑定关联云资源结果列表 */
  SyncTaskBindResourceResult?: SyncTaskBindResourceResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateDetailRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface DescribeCertificateDetailResponse {
  /** 证书所属用户主账号 UIN。 */
  OwnerUin?: string;
  /** 项目 ID。 */
  ProjectId?: string;
  /** 证书来源：trustasia：亚洲诚信，upload：用户上传。wosign：沃通sheca：上海CA */
  From?: string;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string;
  /** 证书套餐类型：null：用户上传证书（没有套餐类型），2：TrustAsia TLS RSA CA， 3：SecureSite 增强型企业版（EV Pro）， 4：SecureSite 增强型（EV）， 5：SecureSite 企业型专业版（OV Pro），6：SecureSite 企业型（OV）， 7：SecureSite 企业型（OV）通配符， 8：Geotrust 增强型（EV）， 9：Geotrust 企业型（OV）， 10：Geotrust 企业型（OV）通配符， 11：TrustAsia 域名型多域名 SSL 证书， 12：TrustAsia 域名型（DV）通配符， 13：TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14：TrustAsia 企业型（OV）SSL 证书（D3）， 15：TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16：TrustAsia 增强型 （EV）SSL 证书（D3）， 17：TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18：GlobalSign 企业型（OV）SSL 证书， 19：GlobalSign 企业型通配符 （OV）SSL 证书， 20：GlobalSign 增强型 （EV）SSL 证书， 21：TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22：GlobalSign 企业型多域名（OV）SSL 证书， 23：GlobalSign 企业型通配符多域名（OV）SSL 证书，24：GlobalSign 增强型多域名（EV）SSL 证书，25：Wotrus 域名型证书，26：Wotrus 域名型多域名证书，27：Wotrus 域名型通配符证书，28：Wotrus 企业型证书，29：Wotrus 企业型多域名证书，30：Wotrus 企业型通配符证书，31：Wotrus 增强型证书，32：Wotrus 增强型多域名证书，33：WoTrus-国密域名型证书，34：WoTrus-国密域名型证书（多域名），35：WoTrus-国密域名型证书（通配符），37：WoTrus-国密企业型证书，38：WoTrus-国密企业型证书（多域名），39：WoTrus-国密企业型证书（通配符），40：WoTrus-国密增强型证书，41：WoTrus-国密增强型证书（多域名），42：TrustAsia-域名型证书（通配符多域名），43：DNSPod-企业型(OV)SSL证书44：DNSPod-企业型(OV)通配符SSL证书45：DNSPod-企业型(OV)多域名SSL证书46：DNSPod-增强型(EV)SSL证书47：DNSPod-增强型(EV)多域名SSL证书48：DNSPod-域名型(DV)SSL证书49：DNSPod-域名型(DV)通配符SSL证书50：DNSPod-域名型(DV)多域名SSL证书51：DNSPod（国密）-企业型(OV)SSL证书52：DNSPod（国密）-企业型(OV)通配符SSL证书53：DNSPod（国密）-企业型(OV)多域名SSL证书54：DNSPod（国密）-域名型(DV)SSL证书55：DNSPod（国密）-域名型(DV)通配符SSL证书56：DNSPod（国密）-域名型(DV)多域名SSL证书57：SecureSite 企业型专业版多域名(OV Pro)58：SecureSite 企业型多域名(OV)59：SecureSite 增强型专业版多域名(EV Pro)60：SecureSite 增强型多域名(EV)61：Geotrust 增强型多域名(EV)75：SecureSite 企业型(OV)76：SecureSite 企业型(OV)通配符77：SecureSite 增强型(EV)78：Geotrust 企业型(OV)79：Geotrust 企业型(OV)通配符80：Geotrust 增强型(EV)81：GlobalSign 企业型（OV）SSL证书82：GlobalSign 企业型通配符 （OV）SSL证书83：TrustAsia C1 DV Free85：GlobalSign 增强型 （EV）SSL证书88：GlobalSign 企业型通配符多域名 （OV）SSL证书89：GlobalSign 企业型多域名 （OV）SSL证书90：GlobalSign 增强型多域名（EV） SSL证书91：Geotrust 增强型多域名(EV)92：SecureSite 企业型专业版多域名(OV Pro)93：SecureSite 企业型多域名(OV)94：SecureSite 增强型专业版多域名(EV Pro)95：SecureSite 增强型多域名(EV)96：SecureSite 增强型专业版(EV Pro)97：SecureSite 企业型专业版(OV Pro)98：CFCA 企业型(OV)SSL证书99：CFCA 企业型多域名(OV)SSL证书100：CFCA 企业型通配符(OV)SSL证书101：CFCA 增强型(EV)SSL证书 */
  PackageType?: string | null;
  /** 证书产品名称 */
  ProductZhName?: string;
  /** 证书绑定通用名称域名。 */
  Domain?: string;
  /** 备注名称。 */
  Alias?: string;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 自动添加DNS记录，5 = 企业证书，待提交资料，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。14 = 证书已退款。 15 = 证书迁移中 */
  Status?: number;
  /** 状态信息。 取值范围：//通用状态信息1、PRE-REVIEWING：预审核中2、LEGAL-REVIEWING：法务审核中3、CA-REVIEWING：CA审核中4、PENDING-DCV：域名验证中5、WAIT-ISSUE：等待签发（域名验证已通过）//证书审核失败状态信息1、订单审核失败2、CA审核失败，域名未通过安全审查3、域名验证超时，订单自动关闭，请您重新进行证书申请4、证书资料未通过证书CA机构审核，审核人员会致电您证书预留的联系方式，请您留意来电。后续可通过“修改资料”重新提交资料待持续完善 */
  StatusMsg?: string | null;
  /** 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，EMAIL = 邮件验证。 */
  VerifyType?: string | null;
  /** 漏洞扫描状态。 */
  VulnerabilityStatus?: string;
  /** 证书生效时间。时区为GMT+8:00 */
  CertBeginTime?: string | null;
  /** 证书失效时间。时区为GMT+8:00 */
  CertEndTime?: string | null;
  /** 证书有效期：单位（月）。 */
  ValidityPeriod?: string;
  /** 证书申请时间。时区为GMT+8:00 */
  InsertTime?: string;
  /** CA订单 ID。 */
  OrderId?: string | null;
  /** 证书扩展信息。 */
  CertificateExtra?: CertificateExtra;
  /** 私钥证书， 国密证书则为签名证书中的私钥证书 */
  CertificatePrivateKey?: string | null;
  /** 公钥证书， 国密则为签名证书中的公钥证书 */
  CertificatePublicKey?: string | null;
  /** 证书域名验证信息。 */
  DvAuthDetail?: DvAuthDetail | null;
  /** 漏洞扫描评估报告。 */
  VulnerabilityReport?: string | null;
  /** 证书 ID。 */
  CertificateId?: string;
  /** 证书类型名称。 */
  TypeName?: string | null;
  /** 状态描述。 */
  StatusName?: string;
  /** 证书包含的多个域名（不包含主域名，主域名使用Domain字段） */
  SubjectAltName?: string[];
  /** 是否为付费证书。 */
  IsVip?: boolean;
  /** 是否为泛域名证书。 */
  IsWildcard?: boolean;
  /** 是否为 DV 版证书。 */
  IsDv?: boolean;
  /** 是否启用了漏洞扫描功能。 */
  IsVulnerability?: boolean;
  /** 付费证书提交的资料信息。 */
  SubmittedData?: SubmittedData | null;
  /** 是否可续费。 */
  RenewAble?: boolean;
  /** 是否可部署。 */
  Deployable?: boolean;
  /** 关联标签列表。 */
  Tags?: Tags[];
  /** 根证书。 */
  RootCert?: RootCertificates;
  /** 国密加密证书公钥， 仅国密证书有值 */
  EncryptCert?: string | null;
  /** 国密加密私钥证书， 仅国密证书有值 */
  EncryptPrivateKey?: string | null;
  /** 签名证书 SHA1指纹 */
  CertFingerprint?: string | null;
  /** 加密证书 SHA1指纹 （国密证书特有） */
  EncryptCertFingerprint?: string | null;
  /** 证书加密算法（国密证书特有） */
  EncryptAlgorithm?: string;
  /** DV证书吊销验证值 */
  DvRevokeAuthDetail?: DvAuths[] | null;
  /** 证书链信息 */
  CertChainInfo?: CertBasicInfo[] | null;
  /** 证书域名类型， 1（单域名）；2（多域名）；3（泛域名）；4（多泛域名） */
  DomainType?: number;
  /** 证书类型，DV（域名型）；OV（企业型）；EV（增强型） */
  CertType?: string;
  /** 是否使用交叉根 */
  UseCrossSignRoot?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateOperateLogsRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 请求日志数量，默认为20, 最大值为1000，如超过1000按照1000处理。 */
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
  OperateLogs?: OperationLog[];
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
  /** 证书来源：trustasia：亚洲诚信，upload：用户上传。wosign：沃通sheca：上海CA */
  From?: string | null;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string | null;
  /** 证书套餐类型：null：用户上传证书（没有套餐类型），2：TrustAsia TLS RSA CA， 3：SecureSite 增强型企业版（EV Pro）， 4：SecureSite 增强型（EV）， 5：SecureSite 企业型专业版（OV Pro），6：SecureSite 企业型（OV）， 7：SecureSite 企业型（OV）通配符， 8：Geotrust 增强型（EV）， 9：Geotrust 企业型（OV）， 10：Geotrust 企业型（OV）通配符， 11：TrustAsia 域名型多域名 SSL 证书， 12：TrustAsia 域名型（DV）通配符， 13：TrustAsia 企业型通配符（OV）SSL 证书（D3）， 14：TrustAsia 企业型（OV）SSL 证书（D3）， 15：TrustAsia 企业型多域名 （OV）SSL 证书（D3）， 16：TrustAsia 增强型 （EV）SSL 证书（D3）， 17：TrustAsia 增强型多域名（EV）SSL 证书（D3）， 18：GlobalSign 企业型（OV）SSL 证书， 19：GlobalSign 企业型通配符 （OV）SSL 证书， 20：GlobalSign 增强型 （EV）SSL 证书， 21：TrustAsia 企业型通配符多域名（OV）SSL 证书（D3）， 22：GlobalSign 企业型多域名（OV）SSL 证书， 23：GlobalSign 企业型通配符多域名（OV）SSL 证书，24：GlobalSign 增强型多域名（EV）SSL 证书，25：Wotrus 域名型证书，26：Wotrus 域名型多域名证书，27：Wotrus 域名型通配符证书，28：Wotrus 企业型证书，29：Wotrus 企业型多域名证书，30：Wotrus 企业型通配符证书，31：Wotrus 增强型证书，32：Wotrus 增强型多域名证书，33：WoTrus-国密域名型证书，34：WoTrus-国密域名型证书（多域名），35：WoTrus-国密域名型证书（通配符），37：WoTrus-国密企业型证书，38：WoTrus-国密企业型证书（多域名），39：WoTrus-国密企业型证书（通配符），40：WoTrus-国密增强型证书，41：WoTrus-国密增强型证书（多域名），42：TrustAsia-域名型证书（通配符多域名），43：DNSPod-企业型(OV)SSL证书44：DNSPod-企业型(OV)通配符SSL证书45：DNSPod-企业型(OV)多域名SSL证书46：DNSPod-增强型(EV)SSL证书47：DNSPod-增强型(EV)多域名SSL证书48：DNSPod-域名型(DV)SSL证书49：DNSPod-域名型(DV)通配符SSL证书50：DNSPod-域名型(DV)多域名SSL证书51：DNSPod（国密）-企业型(OV)SSL证书52：DNSPod（国密）-企业型(OV)通配符SSL证书53：DNSPod（国密）-企业型(OV)多域名SSL证书54：DNSPod（国密）-域名型(DV)SSL证书55：DNSPod（国密）-域名型(DV)通配符SSL证书56：DNSPod（国密）-域名型(DV)多域名SSL证书57：SecureSite 企业型专业版多域名(OV Pro)58：SecureSite 企业型多域名(OV)59：SecureSite 增强型专业版多域名(EV Pro)60：SecureSite 增强型多域名(EV)61：Geotrust 增强型多域名(EV)75：SecureSite 企业型(OV)76：SecureSite 企业型(OV)通配符77：SecureSite 增强型(EV)78：Geotrust 企业型(OV)79：Geotrust 企业型(OV)通配符80：Geotrust 增强型(EV)81：GlobalSign 企业型（OV）SSL证书82：GlobalSign 企业型通配符 （OV）SSL证书83：TrustAsia C1 DV Free85：GlobalSign 增强型 （EV）SSL证书88：GlobalSign 企业型通配符多域名 （OV）SSL证书89：GlobalSign 企业型多域名 （OV）SSL证书90：GlobalSign 增强型多域名（EV） SSL证书91：Geotrust 增强型多域名(EV)92：SecureSite 企业型专业版多域名(OV Pro)93：SecureSite 企业型多域名(OV)94：SecureSite 增强型专业版多域名(EV Pro)95：SecureSite 增强型多域名(EV)96：SecureSite 增强型专业版(EV Pro)97：SecureSite 企业型专业版(OV Pro)98：CFCA 企业型(OV)SSL证书99：CFCA 企业型多域名(OV)SSL证书100：CFCA 企业型通配符(OV)SSL证书101：CFCA 增强型(EV)SSL证书 */
  PackageType?: string | null;
  /** 证书产品名称 */
  ProductZhName?: string | null;
  /** 域名。 */
  Domain?: string | null;
  /** 备注名称。 */
  Alias?: string | null;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 自动添加DNS记录，5 = 企业证书，待提交资料，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。14 = 证书已退款。 15 = 证书迁移中 */
  Status?: number | null;
  /** 状态信息。 取值范围：//通用状态信息1、PRE-REVIEWING：预审核中2、LEGAL-REVIEWING：法务审核中3、CA-REVIEWING：CA审核中4、PENDING-DCV：域名验证中5、WAIT-ISSUE：等待签发（域名验证已通过）//证书审核失败状态信息1、订单审核失败2、CA审核失败，域名未通过安全审查3、域名验证超时，订单自动关闭，请您重新进行证书申请4、证书资料未通过证书CA机构审核，审核人员会致电您证书预留的联系方式，请您留意来电。后续可通过“修改资料”重新提交资料待持续完善 */
  StatusMsg?: string | null;
  /** 验证类型：DNS_AUTO = 自动DNS验证，DNS = 手动DNS验证，FILE = 文件验证，DNS_PROXY = DNS代理验证。FILE_PROXY = 文件代理验证 */
  VerifyType?: string | null;
  /** 漏洞扫描状态。 */
  VulnerabilityStatus?: string | null;
  /** 证书生效时间。时区为GMT+8:00 */
  CertBeginTime?: string | null;
  /** 证书失效时间。时区为GMT+8:00 */
  CertEndTime?: string | null;
  /** 证书有效期：单位(月)。 */
  ValidityPeriod?: string | null;
  /** 申请时间。时区为GMT+8:00 */
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
  /** CA证书的所有加密方式。仅证书类型CertificateType为CA有效 */
  CAEncryptAlgorithms?: string[] | null;
  /** CA证书的所有通用名称。仅证书类型CertificateType为CA有效 */
  CACommonNames?: string[] | null;
  /** CA证书所有的到期时间。仅证书类型CertificateType为CA有效，时区为GMT+8:00 */
  CAEndTimes?: string[] | null;
  /** DV证书吊销验证值 */
  DvRevokeAuthDetail?: DvAuths[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificatesRequest {
  /** 分页偏移量，从0开始。 默认为0 */
  Offset?: number;
  /** 每页数量，默认10。最大值1000，如超过1000按1000处理 */
  Limit?: number;
  /** 搜索关键词，模糊匹配证书 ID、备注名称、证书域名 */
  SearchKey?: string;
  /** 证书类型：CA = 客户端证书，SVR = 服务器证书。 */
  CertificateType?: string;
  /** 项目 ID。 */
  ProjectId?: number;
  /** 默认按照证书申请时间降序； 若传排序则按到期时间排序：DESC = 证书到期时间降序， ASC = 证书到期时间升序。 */
  ExpirationSort?: string;
  /** 证书状态：0 = 审核中，1 = 已通过，2 = 审核失败，3 = 已过期，4 = 已添加DNS记录，5 = 企业证书，待提交，6 = 订单取消中，7 = 已取消，8 = 已提交资料， 待上传确认函，9 = 证书吊销中，10 = 已吊销，11 = 重颁发中，12 = 待上传吊销确认函，13 = 免费证书待提交资料。14 = 已退款。 15 = 证书迁移中 */
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
  /** 是否筛选等待签发的证书，传1是筛选，0和null不筛选 */
  IsPendingIssue?: number;
  /** 筛选指定证书ID的证书，只支持有权限的证书ID */
  CertIds?: string[];
  /** 订阅服务ID */
  ServiceId?: string;
}

declare interface DescribeCertificatesResponse {
  /** 总数量。 */
  TotalCount?: number;
  /** 列表。 */
  Certificates?: Certificates[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCompaniesRequest {
  /** 分页偏移量，默认值为0. */
  Offset?: number;
  /** 分页每页限制数，默认值为0，最大值1000. */
  Limit?: number;
  /** 公司ID */
  CompanyId?: number;
}

declare interface DescribeCompaniesResponse {
  /** 公司列表 */
  Companies?: CompanyInfo[];
  /** 公司总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeleteCertificatesTaskResultRequest {
  /** DeleteCertificates接口返回的任务ID， 最大支持100个 */
  TaskIds: string[];
}

declare interface DescribeDeleteCertificatesTaskResultResponse {
  /** 批量删除证书异步任务结果 */
  DeleteTaskResult?: DeleteTaskResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeployedResourcesRequest {
  /** 证书ID */
  CertificateIds: string[];
  /** 资源类型:clb,cdn,live,vod,waf,antiddos,teo */
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
  /** 下载的服务类型: nginx tomcat apache iis jks other root， 不传则默认下载nginx格式 */
  ServiceType?: string;
}

declare interface DescribeDownloadCertificateUrlResponse {
  /** 下载链接 */
  DownloadCertificateUrl?: string;
  /** 下载文件的名称 */
  DownloadFilename?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostApiGatewayInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 部署资源类型apigateway */
  ResourceType?: string;
  /** 已部署的证书ID */
  OldCertificateId?: string;
  /** 每页数量，默认10，最大值为200。 */
  Limit?: number;
  /** 分页偏移量，默认值为0。 */
  Offset?: string;
}

declare interface DescribeHostApiGatewayInstanceListResponse {
  /** apiGateway实例列表,如取不到值返回空数组 */
  InstanceList?: ApiGatewayInstanceDetail[];
  /** 总数，如取不到值返回0 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostCdnInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 部署资源类型cdn */
  ResourceType?: string;
  /** 原证书ID */
  OldCertificateId?: string;
  /** 分页偏移量，默认值为0。 */
  Offset?: number;
  /** 每页数量，默认10，最大值为200。 */
  Limit?: number;
  /** 是否异步,0表示否，1表示是，默认为0 */
  AsyncCache?: number;
}

declare interface DescribeHostCdnInstanceListResponse {
  /** CDN实例列表，如取不到值返回空数组 */
  InstanceList?: CdnInstanceDetail[];
  /** CDN域名总数，如取不到值返回0 */
  TotalCount?: number;
  /** 异步刷新总数，如取不到值返回0 */
  AsyncTotalNum?: number;
  /** 异步刷新当前执行数，如取不到值返回0 */
  AsyncOffset?: number;
  /** 当前缓存读取时间 */
  AsyncCacheTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostClbInstanceListRequest {
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 是否异步缓存,0表示否,1表示是 */
  AsyncCache?: number;
  /** 原证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostClbInstanceListResponse {
  /** 总数，取不到值返回0 */
  TotalCount?: number;
  /** CLB实例监听器列表，取不到值返回空数组 */
  InstanceList?: ClbInstanceDetail[];
  /** 异步刷新总数，取不到值返回0 */
  AsyncTotalNum?: number;
  /** 异步刷新当前执行数，取不到值返回0 */
  AsyncOffset?: number;
  /** 当前缓存读取时间，去不到值返回空 */
  AsyncCacheTime?: string;
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
  /** 是否异步，0表示否，1表示是 */
  AsyncCache?: number;
}

declare interface DescribeHostCosInstanceListResponse {
  /** COS实例列表 */
  InstanceList?: CosInstanceDetail[];
  /** 总数 */
  TotalCount?: number;
  /** 异步刷新总数 */
  AsyncTotalNum?: number;
  /** 异步刷新当前执行数 */
  AsyncOffset?: number;
  /** 当前缓存读取时间 */
  AsyncCacheTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostDdosInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 部署资源类型ddos */
  ResourceType?: string;
  /** 已部署的证书ID */
  OldCertificateId?: string;
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
}

declare interface DescribeHostDdosInstanceListResponse {
  /** DDOS实例列表,取不到值返回空数组 */
  InstanceList?: DdosInstanceDetail[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostDeployRecordDetailRequest {
  /** 部署记录ID，通过调用DeployCertificateInstance接口返回的记录ID， 或者通过DeployCertificateRecordRollback回滚接口返回的记录ID */
  DeployRecordId: string;
  /** 分页偏移量，从0开始。默认为0 */
  Offset?: number;
  /** 每页数量，默认10。最大值为200 */
  Limit?: number;
}

declare interface DescribeHostDeployRecordDetailResponse {
  /** 部署记录总数 */
  TotalCount?: number;
  /** 证书部署记录列表 */
  DeployRecordDetailList?: DeployRecordDetail[];
  /** 成功总数 */
  SuccessTotalCount?: number;
  /** 失败总数 */
  FailedTotalCount?: number;
  /** 部署中总数 */
  RunningTotalCount?: number;
  /** 待部署总数 */
  PendingTotalCount?: number;
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
  /** 支持的资源类型如下,clb,cdn,ddos,waf,apigateway,teo,tke,cos,lighthouse,vod,tcb,tse,live */
  ResourceType?: string;
}

declare interface DescribeHostDeployRecordResponse {
  /** 总数 */
  TotalCount?: number;
  /** 证书部署记录列表 */
  DeployRecordList?: DeployRecordInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostLighthouseInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 部署资源类型 lighthouse */
  ResourceType?: string;
}

declare interface DescribeHostLighthouseInstanceListResponse {
  /** Lighthouse实例列表,如取不到返回空数组 */
  InstanceList?: LighthouseInstanceDetail[];
  /** 总数，如取不到返回0 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostLiveInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 部署资源类型 */
  ResourceType?: string;
  /** 已部署的证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostLiveInstanceListResponse {
  /** live实例列表,如取不到值返回空数组 */
  InstanceList?: LiveInstanceDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostTeoInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 部署资源类型 */
  ResourceType?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 已部署的证书ID */
  OldCertificateId?: string;
  /** 分页偏移量，默认值为0. */
  Offset?: number;
  /** 每页数量，默认10，最大值为200。 */
  Limit?: number;
  /** 是否异步，1表示是，0表示否，默认为0 */
  AsyncCache?: number;
}

declare interface DescribeHostTeoInstanceListResponse {
  /** teo实例列表，如取不到值返回空数组 */
  InstanceList?: TeoInstanceDetail[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostTkeInstanceListRequest {
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 是否异步缓存，0表示否，1表示是，默认为0 */
  AsyncCache?: number;
  /** 原证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostTkeInstanceListResponse {
  /** 总数，取不到值返回0 */
  TotalCount?: number;
  /** tke实例列表，取不到值返回空数组 */
  InstanceList?: TkeInstanceDetail[];
  /** 异步刷新总数，取不到值返回0 */
  AsyncTotalNum?: number;
  /** 异步刷新当前执行数，取不到值返回0 */
  AsyncOffset?: number;
  /** 当前缓存读取时间 */
  AsyncCacheTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostUpdateRecordDetailRequest {
  /** 部署记录ID，通过调用UpdateCertificateInstance接口返回的记录ID， 或者通过UpdateCertificateRecordRollback回滚接口返回的记录ID */
  DeployRecordId: string;
  /** 每页数量，默认10。最大值为200 */
  Limit?: string;
  /** 分页偏移量，从0开始。默认为0 */
  Offset?: string;
}

declare interface DescribeHostUpdateRecordDetailResponse {
  /** 总数,如果取不到返回0 */
  TotalCount?: number;
  /** 证书部署记录列表，如果取不到值返回空数组 */
  RecordDetailList?: UpdateRecordDetails[];
  /** 成功总数,如果取不到返回0 */
  SuccessTotalCount?: number;
  /** 失败总数,如果取不到返回0 */
  FailedTotalCount?: number;
  /** 部署中总数,如果取不到返回0 */
  RunningTotalCount?: number;
  /** 待部署总数 */
  PendingTotalCount?: number;
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
  TotalCount?: number;
  /** 证书部署记录列表 */
  DeployRecordList?: UpdateRecordInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostUploadUpdateRecordDetailRequest {
  /** 托管记录ID */
  DeployRecordId: number;
  /** 每页数量，默认为10，最大为200， 超过200则为200 */
  Limit?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
}

declare interface DescribeHostUploadUpdateRecordDetailResponse {
  /** 托管记录详情列表 */
  DeployRecordDetail?: DeployRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostUploadUpdateRecordRequest {
  /** 分页偏移量，从0开始。 */
  Offset?: number;
  /** 每页数量，默认10。 */
  Limit?: number;
  /** 原证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostUploadUpdateRecordResponse {
  /** 总数 */
  TotalCount?: number;
  /** 证书部署记录列表 */
  DeployRecordList?: UploadUpdateRecordInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostVodInstanceListRequest {
  /** 待部署的证书ID,必填选项 */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 部署资源类型 vod */
  ResourceType?: string;
  /** 已部署的证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostVodInstanceListResponse {
  /** Vod实例列表，如果取不到值返回空数组 */
  InstanceList?: VodInstanceDetail[];
  /** 总数,如果取不到值返回0 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostWafInstanceListRequest {
  /** 待部署的证书ID */
  CertificateId?: string;
  /** 是否查询缓存，1：是； 0：否， 默认为查询缓存，缓存半小时 */
  IsCache?: number;
  /** 过滤参数列表； FilterKey：domainMatch（查询域名是否匹配的实例列表） FilterValue：1，表示查询匹配； 0，表示查询不匹配； 默认查询匹配 */
  Filters?: Filter[];
  /** 部署资源类型，如waf */
  ResourceType?: string;
  /** 已部署的证书ID */
  OldCertificateId?: string;
}

declare interface DescribeHostWafInstanceListResponse {
  /** WAF实例列表，如果没有取到值返回空数组 */
  InstanceList?: WafInstanceDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeManagerDetailRequest {
  /** 管理人ID,可以从describeManagers接口获得 */
  ManagerId: number;
  /** 分页每页数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
}

declare interface DescribeManagerDetailResponse {
  /** 状态: audit: 审核中 ok: 审核通过 invalid: 失效 expiring: 即将过期 expired: 已过期 */
  Status?: string;
  /** 管理人姓名 */
  ManagerFirstName?: string;
  /** 管理人邮箱 */
  ManagerMail?: string;
  /** 联系人姓名 */
  ContactFirstName?: string;
  /** 管理人姓名 */
  ManagerLastName?: string;
  /** 联系人职位 */
  ContactPosition?: string;
  /** 管理人职位 */
  ManagerPosition?: string;
  /** 核验通过时间 */
  VerifyTime?: string | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 核验过期时间 */
  ExpireTime?: string | null;
  /** 联系人姓名 */
  ContactLastName?: string;
  /** 管理人电话 */
  ManagerPhone?: string;
  /** 联系人电话 */
  ContactPhone?: string;
  /** 联系人邮箱 */
  ContactMail?: string;
  /** 管理人所属部门 */
  ManagerDepartment?: string;
  /** 管理人所属公司信息 */
  CompanyInfo?: CompanyInfo;
  /** 管理人公司ID */
  CompanyId?: number;
  /** 管理人ID */
  ManagerId?: number;
  /** 审核状态详细信息 */
  StatusInfo?: ManagerStatusInfo[];
  /** 管理员证件类型，SFZ代表身份证，HZ代表护照 */
  ManagerIdType?: string;
  /** 管理员证件号码 */
  ManagerIdNumber?: string;
  /** 联系人证件类型，SFZ代表身份证，HZ代表护照 */
  ContactIdType?: string;
  /** 联系人证件号码 */
  ContactIdNumber?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeManagersRequest {
  /** 公司ID,可以从DescribeCompanies接口获取 */
  CompanyId: number;
  /** 分页偏移量，如果不传默认值为0 */
  Offset?: number;
  /** 分页每页数量，如果不传默认值为10，最大值为1000 */
  Limit?: number;
  /** 管理人姓名（将废弃），请使用SearchKey */
  ManagerName?: string;
  /** 模糊查询管理人邮箱（将废弃），请使用SearchKey */
  ManagerMail?: string;
  /** 根据管理人状态进行筛选，取值有'none' 未提交审核'audit', 亚信审核中'CAaudit' CA审核中'ok' 已审核'invalid' 审核失败'expiring' 即将过期'expired' 已过期 */
  Status?: string;
  /** 根据这样的格式:管理人姓|管理人名|邮箱|部门 ,进行精准匹配 */
  SearchKey?: string;
}

declare interface DescribeManagersResponse {
  /** 公司管理人列表 */
  Managers?: ManagerInfo[];
  /** 公司管理人总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackagesRequest {
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 限制数目，默认20。 */
  Limit?: number;
  /** 按状态筛选。状态值包括usable(可用)，used(已用)，expired(已过期)，refund(已退款) */
  Status?: string;
  /** 按过期时间升序或降序排列，可选值为asc(升序)和desc(降序) */
  ExpireTime?: string;
  /** 按权益包ID搜索。 */
  PackageId?: string;
  /** 按权益包类型搜索。类型包括：ssl_100(证书批量权益100点)，ssl_500(证书批量权益500点），ssl_2000(证书批量权益2000点） */
  Type?: string;
  /** 子产品编号 */
  Pid?: number;
}

declare interface DescribePackagesResponse {
  /** 权益包列表。 */
  Packages?: PackageInfo[];
  /** 总条数。 */
  TotalCount?: number;
  /** 权益点总余额。 */
  TotalBalance?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadCertificateRequest {
  /** 证书 ID。 */
  CertificateId: string;
}

declare interface DownloadCertificateResponse {
  /** ZIP base64 编码内容，base64 解码后可保存为 ZIP 文件。 */
  Content?: string;
  /** MIME 类型：application/zip = ZIP 压缩文件。 */
  ContentType?: string;
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
  CertificateId?: string;
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
  SuccessCertificates?: string[];
  /** 修改所属项目失败的证书集合。 */
  FailCertificates?: string[];
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
  /** 类型，默认 original。可选项：original = 原证书 CSR，upload = 手动上传，online = 在线生成。 */
  CsrType?: string;
  /** CSR 内容，手动上传的时候需要。 */
  CsrContent?: string;
  /** KEY 密码。 */
  CsrkeyPassword?: string;
  /** 重颁发原因。 */
  Reason?: string;
  /** CSR加密方式，可选：RSA、ECC、SM2（CsrType为Online才可选）， 默认为RSA */
  CertCSREncryptAlgo?: string;
  /** CSR加密参数，CsrEncryptAlgo为RSA时， 可选2048、4096等默认为2048；CsrEncryptAlgo为ECC时，可选prime256v1，secp384r1等，默认为prime256v1; */
  CertCSRKeyParameter?: string;
  /** 签名算法 */
  SignAlgo?: string;
  /** 是否使用交叉根证书，默认为true */
  UseCrossSignRoot?: boolean;
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
  RevokeDomainValidateAuths?: RevokeDomainValidateAuths[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitAuditManagerRequest {
  /** 管理人ID */
  ManagerId: number;
}

declare interface SubmitAuditManagerResponse {
  /** 管理人ID */
  ManagerId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitCertificateInformationRequest {
  /** 待提交资料的付费证书 ID。 */
  CertificateId: string;
  /** 此字段必传。 CSR 生成方式， 取值为：online：腾讯云提交的填写的参数信息生成CSR和私钥， 并由腾讯云加密存储parse：自行生成CSR和私钥， 并通过上传CSR申请证书 */
  CsrType?: string;
  /** 上传的 CSR 内容。若CstType为parse， 则此字段必传。 */
  CsrContent?: string;
  /** 证书绑定的通用名称， 若是上传的CSR，则该域名需与CSR解析的通用名称一致 */
  CertificateDomain?: string;
  /** 证书绑定的其他域名， 单域名、泛域名证书无需提供。 多域名、多泛域名必填 */
  DomainList?: string[];
  /** 私钥密码， 目前仅使用在生成jks、pfx格式证书时密码； 其他格式私钥证书未加密 */
  KeyPassword?: string;
  /** 字段必传， 公司名称。 */
  OrganizationName?: string;
  /** 字段必传， 部门名称。 */
  OrganizationDivision?: string;
  /** 字段必传， 公司详细地址。 */
  OrganizationAddress?: string;
  /** 字段必传， 国家名称，传CN即可 */
  OrganizationCountry?: string;
  /** 字段必传， 公司所在城市。 */
  OrganizationCity?: string;
  /** 字段必传， 公司所在省份。 */
  OrganizationRegion?: string;
  /** 公司邮编。 */
  PostalCode?: string;
  /** 字段必传， 公司座机区号。 */
  PhoneAreaCode?: string;
  /** 字段必传， 公司座机号码。 */
  PhoneNumber?: string;
  /** 证书验证方式。验证类型：DNS_AUTO = 自动DNS验证（仅支持在腾讯云解析且解析状态正常的域名使用该验证类型），DNS = 手动DNS验证，FILE = 文件验证。 */
  VerifyType?: string;
  /** 字段必传，管理人名。 */
  AdminFirstName?: string;
  /** 字段必传，管理人姓。 */
  AdminLastName?: string;
  /** 字段必传，管理人手机号码。 */
  AdminPhoneNum?: string;
  /** 字段必传，管理人邮箱地址。 */
  AdminEmail?: string;
  /** 字段必传，管理人职位。 */
  AdminPosition?: string;
  /** 字段必传，联系人名。 */
  ContactFirstName?: string;
  /** 字段必传，联系人姓。 */
  ContactLastName?: string;
  /** 字段必传，联系人邮箱地址。 */
  ContactEmail?: string;
  /** 字段必传，联系人手机号码。 */
  ContactNumber?: string;
  /** 字段必传，联系人职位。 */
  ContactPosition?: string;
  /** 是否DV证书。默认false */
  IsDV?: boolean;
}

declare interface SubmitCertificateInformationResponse {
  /** 证书 ID。 */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCertificateInstanceRequest {
  /** 一键更新的旧证书ID。 通过查询该证书ID绑定的云资源，然后使用新证书对这些云资源进行更新 */
  OldCertificateId: string;
  /** 需要部署的资源类型，参数值可选（小写）：clb、cdn、waf、live、ddos、teo、apigateway、vod、tke、tcb、tse、cos、mqtt、scf、tdmq、gaap */
  ResourceTypes: string[];
  /** 一键更新的新证书ID。 不传该参数，则公钥证书和私钥证书必传 */
  CertificateId?: string;
  /** 需要部署的地域列表（废弃） */
  Regions?: string[];
  /** 云资源需要部署的地域列表，支持地域的云资源类型必传，取值：clb、tke、apigateway、waf、tcb、tse、cos、mqtt、scf、tdmq */
  ResourceTypesRegions?: ResourceTypeRegions[];
  /** 公钥证书， 若上传公钥证书，那么私钥证书必传。 则CertificateId不用传 */
  CertificatePublicKey?: string;
  /** 私钥证书，若上传私钥证书， 那么公钥证书必传； 则CertificateId不用传 */
  CertificatePrivateKey?: string;
  /** 旧证书是否忽略到期提醒 0:不忽略通知。1:忽略通知，忽略OldCertificateId到期提醒 */
  ExpiringNotificationSwitch?: number;
  /** 相同的证书是否允许重复上传，若选择上传公钥私钥证书， 则可以配置该参数。 若存在相同重复证书，则更新任务会失败 */
  Repeatable?: boolean;
  /** 是否允许下载，若选择上传公私钥证书， 则可以配置该参数 */
  AllowDownload?: boolean;
  /** 标签列表，若选择上传公私钥证书， 则可以配置该参数 */
  Tags?: Tags[];
  /** 项目 ID，若选择上传公私钥证书， 则可以配置该参数 */
  ProjectId?: number;
}

declare interface UpdateCertificateInstanceResponse {
  /** 云资源更新任务ID， DeployRecordId为0表示任务进行中， 重复请求这个接口， 当返回DeployRecordId大于0则表示任务创建成功。 未创建成功则会抛出异常 */
  DeployRecordId?: number;
  /** 更新任务创建状态；1表示创建成功； 0表示当前存在更新中的任务，未创建新的更新任务；返回值DeployRecordId为更新中的任务ID */
  DeployStatus?: number;
  /** 更新异步创建任务进度详情 */
  UpdateSyncProgress?: UpdateSyncProgress[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCertificateRecordRetryRequest {
  /** 待重试部署记录ID,通过UpdateCertificateInstance得到部署记录ID。 本参数不传的话，则DeployRecordDetailId必传 */
  DeployRecordId?: number;
  /** 待重试部署记录详情ID,通过DescribeHostUpdateRecordDetail接口获得， 本参数不传的话， 则DeployRecordId必传 */
  DeployRecordDetailId?: number;
}

declare interface UpdateCertificateRecordRetryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCertificateRecordRollbackRequest {
  /** 更新证书待回滚的记录ID, 通过UpdateCertificateInstance获得 */
  DeployRecordId?: number;
}

declare interface UpdateCertificateRecordRollbackResponse {
  /** 新生成的回滚部署任务的记录ID */
  DeployRecordId?: number;
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
  /** 相同的证书是否允许重复上传； true：允许上传相同指纹的证书； false：不允许上传相同指纹的证书； 默认值：true */
  Repeatable?: boolean;
  /** 私钥密码 */
  KeyPassword?: string;
}

declare interface UploadCertificateResponse {
  /** 证书 ID。 */
  CertificateId?: string;
  /** 当入参Repeatable为false的时候 返回的重复证书的ID，注意当用户上传相同的证书超过5000张的时候，当前接口会无视入参Repeatable，直接返回重复证书的ID。 */
  RepeatCertId?: string;
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
  CertificateId?: string;
  /** 是否成功。 */
  IsSuccess?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadUpdateCertificateInstanceRequest {
  /** 一键更新的旧证书ID。 通过查询该证书ID绑定的云资源，然后使用新证书对这些云资源进行更新 */
  OldCertificateId: string;
  /** 需要部署的资源类型，参数值可选（小写）：clb */
  ResourceTypes: string[];
  /** 公钥证书 */
  CertificatePublicKey: string;
  /** 私钥证书 */
  CertificatePrivateKey: string;
  /** 云资源需要部署的地域列表，支持地域的云资源类型必传，取值：clb */
  ResourceTypesRegions?: ResourceTypeRegions[];
}

declare interface UploadUpdateCertificateInstanceResponse {
  /** 云资源更新任务ID， DeployRecordId为0表示任务进行中， 重复请求这个接口， 当返回DeployRecordId大于0则表示任务创建成功。 未创建成功则会抛出异常 */
  DeployRecordId?: number;
  /** 更新任务创建状态；1表示创建成功； 0表示当前存在更新中的任务，未创建新的更新任务；返回值DeployRecordId为更新中的任务ID */
  DeployStatus?: number;
  /** 更新异步创建任务进度详情 */
  UpdateSyncProgress?: UpdateSyncProgress[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadUpdateCertificateRecordRetryRequest {
  /** 待重试部署记录ID,通过UpdateCertificateInstance得到部署记录ID。 本参数不传的话，则DeployRecordDetailId必传 */
  DeployRecordId?: number;
  /** 待重试部署记录详情ID,通过DescribeHostUpdateRecordDetail接口获得， 本参数不传的话， 则DeployRecordId必传 */
  DeployRecordDetailId?: number;
}

declare interface UploadUpdateCertificateRecordRetryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadUpdateCertificateRecordRollbackRequest {
  /** 更新证书待回滚的记录ID, 通过UpdateCertificateInstance获得 */
  DeployRecordId: number;
}

declare interface UploadUpdateCertificateRecordRollbackResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyManagerRequest {
  /** 管理人ID */
  ManagerId: number;
}

declare interface VerifyManagerResponse {
  /** 管理人ID */
  ManagerId?: number;
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
  /** 付费提交证书资料 {@link CertificateInfoSubmitRequest} {@link CertificateInfoSubmitResponse} */
  CertificateInfoSubmit(data: CertificateInfoSubmitRequest, config?: AxiosRequestConfig): AxiosPromise<CertificateInfoSubmitResponse>;
  /** 付费证书提交订单 {@link CertificateOrderSubmitRequest} {@link CertificateOrderSubmitResponse} */
  CertificateOrderSubmit(data: CertificateOrderSubmitRequest, config?: AxiosRequestConfig): AxiosPromise<CertificateOrderSubmitResponse>;
  /** 检查证书链完整性 {@link CheckCertificateChainRequest} {@link CheckCertificateChainResponse} */
  CheckCertificateChain(data: CheckCertificateChainRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCertificateChainResponse>;
  /** 检查证书域名验证是否通过 {@link CheckCertificateDomainVerificationRequest} {@link CheckCertificateDomainVerificationResponse} */
  CheckCertificateDomainVerification(data: CheckCertificateDomainVerificationRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCertificateDomainVerificationResponse>;
  /** 检测证书内容是否存在 {@link CheckCertificateExistRequest} {@link CheckCertificateExistResponse} */
  CheckCertificateExist(data: CheckCertificateExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCertificateExistResponse>;
  /** 付费证书提交证书订单 {@link CommitCertificateInformationRequest} {@link CommitCertificateInformationResponse} */
  CommitCertificateInformation(data: CommitCertificateInformationRequest, config?: AxiosRequestConfig): AxiosPromise<CommitCertificateInformationResponse>;
  /** 主动触发证书验证 {@link CompleteCertificateRequest} {@link CompleteCertificateResponse} */
  CompleteCertificate(data: CompleteCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CompleteCertificateResponse>;
  /** 购买付费证书 {@link CreateCertificateRequest} {@link CreateCertificateResponse} */
  CreateCertificate(data: CreateCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCertificateResponse>;
  /** 创建证书关联云资源异步任务 {@link CreateCertificateBindResourceSyncTaskRequest} {@link CreateCertificateBindResourceSyncTaskResponse} */
  CreateCertificateBindResourceSyncTask(data: CreateCertificateBindResourceSyncTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCertificateBindResourceSyncTaskResponse>;
  /** 使用权益点创建证书 {@link CreateCertificateByPackageRequest} {@link CreateCertificateByPackageResponse} */
  CreateCertificateByPackage(data: CreateCertificateByPackageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCertificateByPackageResponse>;
  /** 删除证书 {@link DeleteCertificateRequest} {@link DeleteCertificateResponse} */
  DeleteCertificate(data: DeleteCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCertificateResponse>;
  /** 批量删除证书 {@link DeleteCertificatesRequest} {@link DeleteCertificatesResponse} */
  DeleteCertificates(data: DeleteCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCertificatesResponse>;
  /** 删除管理人 {@link DeleteManagerRequest} {@link DeleteManagerResponse} */
  DeleteManager(data: DeleteManagerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteManagerResponse>;
  /** 证书部署到云资源实例列表 {@link DeployCertificateInstanceRequest} {@link DeployCertificateInstanceResponse} */
  DeployCertificateInstance(data: DeployCertificateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeployCertificateInstanceResponse>;
  /** 云资源部署重试部署记录 {@link DeployCertificateRecordRetryRequest} {@link DeployCertificateRecordRetryResponse} */
  DeployCertificateRecordRetry(data?: DeployCertificateRecordRetryRequest, config?: AxiosRequestConfig): AxiosPromise<DeployCertificateRecordRetryResponse>;
  /** 云资源部署成功记录回滚 {@link DeployCertificateRecordRollbackRequest} {@link DeployCertificateRecordRollbackResponse} */
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
  DescribeHostApiGatewayInstanceList(data?: DescribeHostApiGatewayInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostApiGatewayInstanceListResponse>;
  /** 查询证书cdn云资源部署实例列表 {@link DescribeHostCdnInstanceListRequest} {@link DescribeHostCdnInstanceListResponse} */
  DescribeHostCdnInstanceList(data?: DescribeHostCdnInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostCdnInstanceListResponse>;
  /** 查询证书CLB云资源部署实例列表信息 {@link DescribeHostClbInstanceListRequest} {@link DescribeHostClbInstanceListResponse} */
  DescribeHostClbInstanceList(data?: DescribeHostClbInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostClbInstanceListResponse>;
  /** 查询证书cos云资源部署实例列表 {@link DescribeHostCosInstanceListRequest} {@link DescribeHostCosInstanceListResponse} */
  DescribeHostCosInstanceList(data?: DescribeHostCosInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostCosInstanceListResponse>;
  /** 查询证书ddos云资源部署实例列表 {@link DescribeHostDdosInstanceListRequest} {@link DescribeHostDdosInstanceListResponse} */
  DescribeHostDdosInstanceList(data?: DescribeHostDdosInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostDdosInstanceListResponse>;
  /** 查询证书云资源部署记录列表 {@link DescribeHostDeployRecordRequest} {@link DescribeHostDeployRecordResponse} */
  DescribeHostDeployRecord(data: DescribeHostDeployRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostDeployRecordResponse>;
  /** 查询证书云资源部署记录详情 {@link DescribeHostDeployRecordDetailRequest} {@link DescribeHostDeployRecordDetailResponse} */
  DescribeHostDeployRecordDetail(data: DescribeHostDeployRecordDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostDeployRecordDetailResponse>;
  /** 查询证书Lighthouse云资源部署实例列表 {@link DescribeHostLighthouseInstanceListRequest} {@link DescribeHostLighthouseInstanceListResponse} */
  DescribeHostLighthouseInstanceList(data?: DescribeHostLighthouseInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostLighthouseInstanceListResponse>;
  /** 查询证书live云资源部署实例列表 {@link DescribeHostLiveInstanceListRequest} {@link DescribeHostLiveInstanceListResponse} */
  DescribeHostLiveInstanceList(data?: DescribeHostLiveInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostLiveInstanceListResponse>;
  /** 查询证书EdgeOne云资源部署实例列表 {@link DescribeHostTeoInstanceListRequest} {@link DescribeHostTeoInstanceListResponse} */
  DescribeHostTeoInstanceList(data?: DescribeHostTeoInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostTeoInstanceListResponse>;
  /** 查询证书tke云资源部署实例列表 {@link DescribeHostTkeInstanceListRequest} {@link DescribeHostTkeInstanceListResponse} */
  DescribeHostTkeInstanceList(data?: DescribeHostTkeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostTkeInstanceListResponse>;
  /** 查询证书云资源更新记录列表 {@link DescribeHostUpdateRecordRequest} {@link DescribeHostUpdateRecordResponse} */
  DescribeHostUpdateRecord(data?: DescribeHostUpdateRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostUpdateRecordResponse>;
  /** 查询证书云资源更新记录详情 {@link DescribeHostUpdateRecordDetailRequest} {@link DescribeHostUpdateRecordDetailResponse} */
  DescribeHostUpdateRecordDetail(data: DescribeHostUpdateRecordDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostUpdateRecordDetailResponse>;
  /** 查询证书云资源更新（证书ID不变）记录列表 {@link DescribeHostUploadUpdateRecordRequest} {@link DescribeHostUploadUpdateRecordResponse} */
  DescribeHostUploadUpdateRecord(data?: DescribeHostUploadUpdateRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostUploadUpdateRecordResponse>;
  /** 查询证书更新记录（证书ID不变）部署记录详情 {@link DescribeHostUploadUpdateRecordDetailRequest} {@link DescribeHostUploadUpdateRecordDetailResponse} */
  DescribeHostUploadUpdateRecordDetail(data: DescribeHostUploadUpdateRecordDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostUploadUpdateRecordDetailResponse>;
  /** 查询证书Vod云资源部署实例列表 {@link DescribeHostVodInstanceListRequest} {@link DescribeHostVodInstanceListResponse} */
  DescribeHostVodInstanceList(data?: DescribeHostVodInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostVodInstanceListResponse>;
  /** 查询证书waf云资源部署实例列表 {@link DescribeHostWafInstanceListRequest} {@link DescribeHostWafInstanceListResponse} */
  DescribeHostWafInstanceList(data?: DescribeHostWafInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostWafInstanceListResponse>;
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
  /** 付费证书提交资料 {@link SubmitCertificateInformationRequest} {@link SubmitCertificateInformationResponse} */
  SubmitCertificateInformation(data: SubmitCertificateInformationRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitCertificateInformationResponse>;
  /** 一键更新新旧证书资源 {@link UpdateCertificateInstanceRequest} {@link UpdateCertificateInstanceResponse} */
  UpdateCertificateInstance(data: UpdateCertificateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCertificateInstanceResponse>;
  /** 云资源更新失败重试部署记录 {@link UpdateCertificateRecordRetryRequest} {@link UpdateCertificateRecordRetryResponse} */
  UpdateCertificateRecordRetry(data?: UpdateCertificateRecordRetryRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCertificateRecordRetryResponse>;
  /** 云资源更新成功记录回滚 {@link UpdateCertificateRecordRollbackRequest} {@link UpdateCertificateRecordRollbackResponse} */
  UpdateCertificateRecordRollback(data?: UpdateCertificateRecordRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCertificateRecordRollbackResponse>;
  /** 上传证书 {@link UploadCertificateRequest} {@link UploadCertificateResponse} */
  UploadCertificate(data: UploadCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<UploadCertificateResponse>;
  /** 上传证书确认函 {@link UploadConfirmLetterRequest} {@link UploadConfirmLetterResponse} */
  UploadConfirmLetter(data: UploadConfirmLetterRequest, config?: AxiosRequestConfig): AxiosPromise<UploadConfirmLetterResponse>;
  /** 上传证书吊销确认函 {@link UploadRevokeLetterRequest} {@link UploadRevokeLetterResponse} */
  UploadRevokeLetter(data: UploadRevokeLetterRequest, config?: AxiosRequestConfig): AxiosPromise<UploadRevokeLetterResponse>;
  /** 更新证书内容（证书ID不变）并更新关联的云资源 {@link UploadUpdateCertificateInstanceRequest} {@link UploadUpdateCertificateInstanceResponse} */
  UploadUpdateCertificateInstance(data: UploadUpdateCertificateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UploadUpdateCertificateInstanceResponse>;
  /** 云资源更新（证书ID不变）失败重试部署记录 {@link UploadUpdateCertificateRecordRetryRequest} {@link UploadUpdateCertificateRecordRetryResponse} */
  UploadUpdateCertificateRecordRetry(data?: UploadUpdateCertificateRecordRetryRequest, config?: AxiosRequestConfig): AxiosPromise<UploadUpdateCertificateRecordRetryResponse>;
  /** 云资源更新成功（证书ID不变）记录回滚 {@link UploadUpdateCertificateRecordRollbackRequest} {@link UploadUpdateCertificateRecordRollbackResponse} */
  UploadUpdateCertificateRecordRollback(data: UploadUpdateCertificateRecordRollbackRequest, config?: AxiosRequestConfig): AxiosPromise<UploadUpdateCertificateRecordRollbackResponse>;
  /** 重新核验管理人 {@link VerifyManagerRequest} {@link VerifyManagerResponse} */
  VerifyManager(data: VerifyManagerRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyManagerResponse>;
}

export declare type Versions = ["2019-12-05"];

export default Ssl;
