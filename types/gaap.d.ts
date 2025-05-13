/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 通道组加速地域列表，包括加速地域，以及该加速地域对应的带宽和并发配置。 */
declare interface AccessConfiguration {
  /** 加速地域。 */
  AccessRegion: string;
  /** 通道带宽上限，单位：Mbps。 */
  Bandwidth: number;
  /** 通道并发量上限，表示同时在线的连接数，单位：万。 */
  Concurrent: number;
  /** 网络类型，可取值：normal、cn2，默认值为normal */
  NetworkType?: string;
}

/** 根据源站查询的可用加速区域信息及对应的可选带宽和并发量。 */
declare interface AccessRegionDetial {
  /** 区域ID */
  RegionId?: string;
  /** 区域的中文或英文名称 */
  RegionName?: string;
  /** 可选的并发量取值数组 */
  ConcurrentList?: number[];
  /** 可选的带宽取值数组 */
  BandwidthList?: number[];
  /** 机房所属大区 */
  RegionArea?: string;
  /** 机房所属大区名 */
  RegionAreaName?: string;
  /** 机房类型, dc表示DataCenter数据中心, ec表示EdgeComputing边缘节点 */
  IDCType?: string;
  /** 特性位图，每个bit位代表一种特性，其中：0，表示不支持该特性；1，表示支持该特性。特性位图含义如下（从右往左）：第1个bit，支持4层加速；第2个bit，支持7层加速；第3个bit，支持Http3接入；第4个bit，支持IPv6；第5个bit，支持精品BGP接入；第6个bit，支持三网接入；第7个bit，支持接入段Qos加速。 */
  FeatureBitmap?: number;
}

/** 域名就近接入配置 */
declare interface AccessRegionDomainConf {
  /** 地域ID。 */
  RegionId: string;
  /** 就近接入区域国家内部编码，编码列表可通过DescribeCountryAreaMapping接口获取。 */
  NationCountryInnerList?: string[];
}

/** 带宽梯度价格 */
declare interface BandwidthPriceGradient {
  /** 带宽范围。 */
  BandwidthRange?: number[];
  /** 在对应带宽范围内的单宽单价，单位：元/Mbps/天。 */
  BandwidthUnitPrice?: number;
  /** 带宽折扣价，单位：元/Mbps/天。 */
  DiscountBandwidthUnitPrice?: number;
}

/** 已绑定的源站信息 */
declare interface BindRealServer {
  /** 源站ID */
  RealServerId?: string;
  /** 源站IP或者域名 */
  RealServerIP?: string;
  /** 该源站所占权重 */
  RealServerWeight?: number;
  /** 源站健康检查状态，其中：0表示正常；1表示异常。未开启健康检查状态时，该状态始终为正常。 */
  RealServerStatus?: number;
  /** 源站的端口号 */
  RealServerPort?: number;
  /** 当源站为域名时，域名被解析成一个或者多个IP，该字段表示其中异常的IP列表。状态异常，但该字段为空时，表示域名解析异常。 */
  DownIPList?: string[];
  /** 源站主备角色：master表示主，slave表示备，该参数必须在监听器打开了源站主备模式。 */
  RealServerFailoverRole?: string;
}

/** 添加源站的源站信息返回值 */
declare interface BindRealServerInfo {
  /** 源站的IP或域名 */
  RealServerIP?: string;
  /** 源站ID */
  RealServerId?: string;
  /** 源站名称 */
  RealServerName?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 标签列表 */
  TagSet?: TagPair[];
}

/** 服务器证书 */
declare interface Certificate {
  /** 证书ID */
  CertificateId?: string;
  /** 证书名称（旧参数，请使用CertificateAlias）。 */
  CertificateName?: string;
  /** 证书类型。 */
  CertificateType?: number;
  /** 证书名称。 */
  CertificateAlias?: string;
  /** 证书创建时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。 */
  CreateTime?: number;
  /** 证书生效起始时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。 */
  BeginTime?: number;
  /** 证书过期时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。 */
  EndTime?: number;
  /** 证书签发者通用名称。 */
  IssuerCN?: string;
  /** 证书主题通用名称。 */
  SubjectCN?: string;
}

/** 证书别名信息 */
declare interface CertificateAliasInfo {
  /** 证书ID */
  CertificateId?: string;
  /** 证书别名 */
  CertificateAlias?: string;
}

/** 证书详情，包括证书ID， 证书名字，证书类型，证书内容以及密钥内容。 */
declare interface CertificateDetail {
  /** 证书ID。 */
  CertificateId?: string;
  /** 证书类型。 */
  CertificateType?: number;
  /** 证书名字。 */
  CertificateAlias?: string;
  /** 证书内容。 */
  CertificateContent?: string;
  /** 密钥内容。仅当证书类型为SSL证书时，返回该字段。 */
  CertificateKey?: string;
  /** 创建时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。 */
  CreateTime?: number;
  /** 证书生效起始时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。 */
  BeginTime?: number;
  /** 证书过期时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。 */
  EndTime?: number;
  /** 证书签发者通用名称。 */
  IssuerCN?: string;
  /** 证书主题通用名称。 */
  SubjectCN?: string;
}

/** 国家地区映射关系（名称和编码） */
declare interface CountryAreaMap {
  /** 国家名称。 */
  NationCountryName?: string;
  /** 国家编码。 */
  NationCountryInnerCode?: string;
  /** 地区名称。 */
  GeographicalZoneName?: string;
  /** 地区编码。 */
  GeographicalZoneInnerCode?: string;
  /** 大洲名称。 */
  ContinentName?: string;
  /** 大洲编码。 */
  ContinentInnerCode?: string;
  /** 标注信息 */
  Remark?: string;
}

/** 统一域名信息 */
declare interface Domain {
  /** 域名ID */
  DomainId?: string;
  /** 完整域名记录 */
  FullDomain?: string;
  /** 别名 */
  Alias?: string;
  /** 类型 */
  Type?: string;
  /** 状态，1表示关闭，0表示开启，2表示关闭中，3表示开启中 */
  Status?: number;
  /** 所属项目 */
  ProjectId?: number;
  /** 默认入口 */
  DefaultValue?: string;
  /** 通道数量 */
  ProxyCount?: number;
  /** 创建时间，使用UNIX时间戳 */
  CreateTime?: number;
  /** 更新时间，使用UNIX时间戳 */
  UpdateTime?: number | null;
  /** 标签列表 */
  TagSet?: TagPair[];
  /** 封禁解封状态：BANNED表示已封禁，RECOVER表示已解封或未封禁，BANNING表示封禁中，RECOVERING表示解封中，BAN_FAILED表示封禁失败，RECOVER_FAILED表示解封失败。 */
  BanStatus?: string;
}

/** 域名解析就近访问配置详情 */
declare interface DomainAccessRegionDict {
  /** 就近接入区域 */
  NationCountryInnerList?: NationCountryInnerInfo[];
  /** 加速区域通道列表 */
  ProxyList?: ProxyIdDict[];
  /** 加速区域ID */
  RegionId?: string;
  /** 加速区域内部编码 */
  GeographicalZoneInnerCode?: string;
  /** 加速区域所属大洲内部编码 */
  ContinentInnerCode?: string;
  /** 加速区域别名 */
  RegionName?: string;
}

/** 域名的定制错误响应配置 */
declare interface DomainErrorPageInfo {
  /** 错误定制响应的配置ID */
  ErrorPageId?: string;
  /** 监听器ID */
  ListenerId?: string;
  /** 域名 */
  Domain?: string;
  /** 原始错误码 */
  ErrorNos?: number[];
  /** 新的错误码 */
  NewErrorNo?: number;
  /** 需要清理的响应头 */
  ClearHeaders?: string[];
  /** 需要设置的响应头 */
  SetHeaders?: HttpHeaderParam[];
  /** 设置的响应体(不包括 HTTP头) */
  Body?: string;
  /** 规则状态,0为成功 */
  Status?: number;
}

/** 按照域名分类的7层监听器转发规则信息 */
declare interface DomainRuleSet {
  /** 转发规则域名。 */
  Domain?: string;
  /** 该域名对应的转发规则列表。 */
  RuleSet?: RuleInfo[];
  /** 该域名对应的服务器证书ID，值为default时，表示使用默认证书（监听器配置的证书）。 */
  CertificateId?: string;
  /** 该域名对应服务器证书名称。 */
  CertificateAlias?: string;
  /** 该域名对应的客户端证书ID，值为default时，表示使用默认证书（监听器配置的证书）。 */
  ClientCertificateId?: string;
  /** 该域名对应客户端证书名称。 */
  ClientCertificateAlias?: string;
  /** 该域名对应基础认证配置ID。 */
  BasicAuthConfId?: string;
  /** 基础认证开关，其中：0，表示未开启；1，表示已开启。 */
  BasicAuth?: number;
  /** 该域名对应基础认证配置名称。 */
  BasicAuthConfAlias?: string;
  /** 该域名对应源站认证证书ID。 */
  RealServerCertificateId?: string;
  /** 源站认证开关，其中：0，表示未开启；1，表示已开启。 */
  RealServerAuth?: number;
  /** 该域名对应源站认证证书名称。 */
  RealServerCertificateAlias?: string;
  /** 该域名对应通道认证证书ID。 */
  GaapCertificateId?: string;
  /** 通道认证开关，其中：0，表示未开启；1，表示已开启。 */
  GaapAuth?: number;
  /** 该域名对应通道认证证书名称。 */
  GaapCertificateAlias?: string;
  /** 源站认证域名。 */
  RealServerCertificateDomain?: string;
  /** 多客户端证书时，返回多个证书的id和别名 */
  PolyClientCertificateAliasInfo?: CertificateAliasInfo[];
  /** 多源站证书时，返回多个证书的id和别名 */
  PolyRealServerCertificateAliasInfo?: CertificateAliasInfo[];
  /** 域名的状态。0表示运行中，1表示变更中，2表示删除中。 */
  DomainStatus?: number;
  /** 封禁解封状态：BANNED表示已封禁，RECOVER表示已解封或未封禁，BANNING表示封禁中，RECOVERING表示解封中，BAN_FAILED表示封禁失败，RECOVER_FAILED表示解封失败。 */
  BanStatus?: string;
  /** Http3特性标识，其中：0表示关闭；1表示启用。 */
  Http3Supported?: number;
  /** 是否为默认域名 */
  IsDefaultServer?: boolean;
  /** TLS套件包 */
  TLSCiphers?: string;
  /** TLS版本 */
  TLSSupportVersion?: string[];
}

/** 过滤条件 */
declare interface Filter {
  /** 过滤条件 */
  Name: string;
  /** 过滤值 */
  Values: string[];
}

/** 统一域名解析的DNS记录 */
declare interface GlobalDns {
  /** 解析记录ID */
  DnsRecordId: number;
  /** 域名就近接入地域信息列表 */
  CountryAreaList: CountryAreaMap[];
  /** 域名解析对应的通道接入点信息列表 */
  AccessList: ProxyAccessInfo[];
  /** 解析状态：1表示运行中，2表示创建中，3表示修改中，4表示删除中 */
  Status: number;
}

/** 可以显示统计数据的通道组和对应通道信息 */
declare interface GroupStatisticsInfo {
  /** 通道组ID */
  GroupId?: string;
  /** 通道组名称 */
  GroupName?: string;
  /** 通道组下通道列表 */
  ProxySet?: ProxySimpleInfo[];
}

/** HTTP类型监听器信息 */
declare interface HTTPListener {
  /** 监听器ID */
  ListenerId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 监听器端口 */
  Port?: number;
  /** 监听器创建时间，Unix时间戳 */
  CreateTime?: number;
  /** 监听器协议， HTTP表示HTTP，HTTPS表示HTTPS，此结构取值HTTP */
  Protocol?: string;
  /** 监听器状态，其中：0表示运行中；1表示创建中；2表示销毁中；3表示源站调整中；4表示配置变更中。 */
  ListenerStatus?: number;
  /** 监听器的通道ID，如果监听器属于通道组，则为null */
  ProxyId?: string;
  /** 监听器的通道组ID，如果监听器属于通道，则为null */
  GroupId?: string | null;
}

/** HTTPS类型监听器信息 */
declare interface HTTPSListener {
  /** 监听器ID */
  ListenerId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 监听器端口 */
  Port?: number;
  /** 监听器协议， HTTP表示HTTP，HTTPS表示HTTPS，此结构取值HTTPS */
  Protocol?: string;
  /** 监听器状态，其中：0表示运行中；1表示创建中；2表示销毁中；3表示源站调整中；4表示配置变更中。 */
  ListenerStatus?: number;
  /** 监听器服务器SSL证书ID */
  CertificateId?: string;
  /** 监听器后端转发源站协议 */
  ForwardProtocol?: string;
  /** 监听器创建时间，Unix时间戳 */
  CreateTime?: number;
  /** 服务器SSL证书的别名 */
  CertificateAlias?: string;
  /** 监听器客户端CA证书ID */
  ClientCertificateId?: string | null;
  /** 监听器认证方式。其中，0表示单向认证；1表示双向认证。 */
  AuthType?: number;
  /** 客户端CA证书别名 */
  ClientCertificateAlias?: string | null;
  /** 多客户端CA证书别名信息 */
  PolyClientCertificateAliasInfo?: CertificateAliasInfo[];
  /** 是否支持Http3，其中：0，不支持Http3接入；1，持Http3接入。注意：如果支持了Http3的功能，那么该监听器会占用对应的UDP接入端口，不可再创建相同端口的UDP监听器。 */
  Http3Supported?: number;
  /** 监听器的通道ID，如果监听器属于通道组，则为null */
  ProxyId?: string;
  /** 监听器的通道组ID，如果监听器属于通道，则为null */
  GroupId?: string | null;
  /** 支持的TLS版本 */
  TLSSupportVersion?: string[];
  /** 支持的TLS密码套件 */
  TLSCiphers?: string;
}

/** 描述HTTP的包头参数 */
declare interface HttpHeaderParam {
  /** HTTP头名 */
  HeaderName: string;
  /** HTTP头值 */
  HeaderValue: string;
}

/** ip信息详情 */
declare interface IPDetail {
  /** IP字符串 */
  IP: string;
  /** 供应商，BGP表示默认，CMCC表示中国移动，CUCC表示中国联通，CTCC表示中国电信 */
  Provider: string;
  /** 带宽 */
  Bandwidth: number;
}

/** 内部接口使用，返回可以查询统计数据的监听器信息 */
declare interface ListenerInfo {
  /** 监听器ID */
  ListenerId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 监听器监听端口 */
  Port?: number;
  /** 监听器协议类型 */
  Protocol?: string;
}

/** 单指标的统计数据 */
declare interface MetricStatisticsInfo {
  /** 指标名称 */
  MetricName?: string;
  /** 指标统计数据 */
  MetricData?: StatisticsDataInfo[];
}

/** 就近接入的国家地区详情 */
declare interface NationCountryInnerInfo {
  /** 国家名 */
  NationCountryName?: string;
  /** 国家内部编码 */
  NationCountryInnerCode?: string;
}

/** 新添加源站信息 */
declare interface NewRealServer {
  /** 源站ID */
  RealServerId?: string;
  /** 源站ip或域名 */
  RealServerIP?: string;
}

/** 加速通道接入点详细信息(包含id、地域、ip等） */
declare interface ProxyAccessInfo {
  /** 地域ID */
  RegionId?: string;
  /** 地域名称 */
  RegionName?: string;
  /** 通道ID */
  ProxyId?: string;
  /** 通道接入ip */
  Vip?: string;
  /** 三网通道VIP列表 */
  VipList?: IPDetail[];
  /** 接入点IDC类型。ec或dc */
  SourceRegionIdcType?: string;
}

/** 通道组详情信息 */
declare interface ProxyGroupDetail {
  /** 创建时间 */
  CreateTime?: number;
  /** 项目ID */
  ProjectId?: number;
  /** 通道组中通道数量 */
  ProxyNum?: number;
  /** 通道组状态：0表示正常运行；1表示创建中；4表示销毁中；11表示迁移中；12表示部分部署中。 */
  Status?: number;
  /** 归属Uin */
  OwnerUin?: string;
  /** 创建Uin */
  CreateUin?: string;
  /** 通道名称 */
  GroupName?: string;
  /** 通道组域名解析默认IP */
  DnsDefaultIp?: string;
  /** 通道组域名 */
  Domain?: string | null;
  /** 目标地域 */
  RealServerRegionInfo?: RegionDetail;
  /** 是否老通道组，2018-08-03之前创建的通道组为老通道组 */
  IsOldGroup?: boolean;
  /** 通道组ID */
  GroupId?: string;
  /** 标签列表 */
  TagSet?: TagPair[];
  /** 安全策略ID，当设置了安全策略时，存在该字段。 */
  PolicyId?: string;
  /** 通道组版本 */
  Version?: string;
  /** 通道获取客户端IP的方式，0表示TOA，1表示Proxy Protocol */
  ClientIPMethod?: number[];
  /** IP版本，可取值：IPv4、IPv6，默认值IPv4 */
  IPAddressVersion?: string;
  /** 通道组套餐类型：Thunder表示标准通道组，Accelerator表示银牌加速通道组，CrossBorder表示跨境通道组。 */
  PackageType?: string;
  /** 支持Http3特性的标识，其中：0表示关闭；1表示启用。 */
  Http3Supported?: number;
  /** 特性位图，每个bit位代表一种特性，其中：0，表示不支持该特性；1，表示支持该特性。特性位图含义如下（从右往左）：第1个bit，支持4层加速；第2个bit，支持7层加速；第3个bit，支持Http3接入；第4个bit，支持IPv6；第5个bit，支持精品BGP接入；第6个bit，支持三网接入；第7个bit，支持接入段Qos加速。 */
  FeatureBitmap?: number;
  /** 是否支持设置TLS设置0表示不支持；1表示支持。 */
  IsSupportTLSChoice?: number;
}

/** 通道组详情列表 */
declare interface ProxyGroupInfo {
  /** 通道组id */
  GroupId?: string;
  /** 通道组域名 */
  Domain?: string | null;
  /** 通道组名称 */
  GroupName?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 目标地域 */
  RealServerRegionInfo?: RegionDetail;
  /** 通道组状态。其中，RUNNING表示运行中；CREATING表示创建中；DESTROYING表示销毁中；MOVING表示通道迁移中；CLOSED表示已关闭；CHANGING表示部分部署中。 */
  Status?: string;
  /** 标签列表。 */
  TagSet?: TagPair[];
  /** 通道组版本 */
  Version?: string;
  /** 创建时间 */
  CreateTime?: number;
  /** 通道组是否包含微软通道 */
  ProxyType?: number;
  /** 支持Http3特性的标识，其中：0表示关闭；1表示启用。 */
  Http3Supported?: number;
  /** 特性位图，每个bit位代表一种特性，其中：0，表示不支持该特性；1，表示支持该特性。特性位图含义如下（从右往左）：第1个bit，支持4层加速；第2个bit，支持7层加速；第3个bit，支持Http3接入；第4个bit，支持IPv6；第5个bit，支持精品BGP接入；第6个bit，支持三网接入；第7个bit，支持接入段Qos加速。 */
  FeatureBitmap?: number;
}

/** 通道ID */
declare interface ProxyIdDict {
  /** 通道ID */
  ProxyId: string;
}

/** 通道信息 */
declare interface ProxyInfo {
  /** （旧参数，请使用ProxyId）通道实例ID。 */
  InstanceId?: string;
  /** 创建时间，采用Unix时间戳的方式，表示从1970年1月1日（UTC/GMT的午夜）开始所经过的秒数。 */
  CreateTime?: number;
  /** 项目ID。 */
  ProjectId?: number;
  /** 通道名称。 */
  ProxyName?: string;
  /** 接入地域。 */
  AccessRegion?: string;
  /** 源站地域。 */
  RealServerRegion?: string;
  /** 带宽，单位：Mbps。 */
  Bandwidth?: number;
  /** 并发，单位：万个/秒。 */
  Concurrent?: number;
  /** 通道状态。其中：RUNNING表示运行中；CREATING表示创建中；DESTROYING表示销毁中；OPENING表示开启中；CLOSING表示关闭中；CLOSED表示已关闭；ADJUSTING表示配置变更中；ISOLATING表示隔离中；ISOLATED表示已隔离；CLONING表示复制中；RECOVERING表示通道维护中；MOVING表示迁移中。 */
  Status?: string;
  /** 接入域名。 */
  Domain?: string;
  /** 接入IP。 */
  IP?: string;
  /** 通道版本号：1.0，2.0，3.0。 */
  Version?: string;
  /** （新参数）通道实例ID。 */
  ProxyId?: string;
  /** 1，该通道可缩扩容；0，该通道无法缩扩容。 */
  Scalarable?: number;
  /** 支持的协议类型。 */
  SupportProtocols?: string[];
  /** 通道组ID，当通道归属于某一通道组时，存在该字段。 */
  GroupId?: string | null;
  /** 安全策略ID，当设置了安全策略时，存在该字段。 */
  PolicyId?: string | null;
  /** 接入地域详细信息，包括地域ID和地域名。 */
  AccessRegionInfo?: RegionDetail;
  /** 源站地域详细信息，包括地域ID和地域名。 */
  RealServerRegionInfo?: RegionDetail;
  /** 通道转发IP */
  ForwardIP?: string;
  /** 标签列表，不存在标签时，该字段为空列表。 */
  TagSet?: TagPair[];
  /** 是否支持安全组配置 */
  SupportSecurity?: number;
  /** 计费类型: 0表示按带宽计费 1表示按流量计费。 */
  BillingType?: number;
  /** 关联了解析的域名列表 */
  RelatedGlobalDomains?: string[];
  /** 配置变更时间 */
  ModifyConfigTime?: number | null;
  /** 通道类型，100表示THUNDER通道，103表示微软合作通道 */
  ProxyType?: number;
  /** 通道获取客户端IP的方式，0表示TOA，1表示Proxy Protocol */
  ClientIPMethod?: number[];
  /** IP版本：IPv4、IPv6 */
  IPAddressVersion?: string;
  /** 网络类型：normal表示常规BGP，cn2表示精品BGP，triple表示三网，secure_eip表示定制安全EIP */
  NetworkType?: string;
  /** 通道套餐类型：Thunder表示标准通道，Accelerator表示银牌加速通道，CrossBorder表示跨境通道。 */
  PackageType?: string;
  /** 封禁解封状态：BANNED表示已封禁，RECOVER表示已解封或未封禁，BANNING表示封禁中，RECOVERING表示解封中，BAN_FAILED表示封禁失败，RECOVER_FAILED表示解封失败。 */
  BanStatus?: string;
  /** IP列表 */
  IPList?: IPDetail[];
  /** 支持Http3协议的标识，其中：0表示关闭；1表示启用。 */
  Http3Supported?: number;
  /** 是否在封禁黑名单中，其中：0表示不在黑名单中，1表示在黑名单中。 */
  InBanBlacklist?: number;
  /** 特性位图，每个bit位代表一种特性，其中：0，表示不支持该特性；1，表示支持该特性。特性位图含义如下（从右往左）：第1个bit，支持4层加速；第2个bit，支持7层加速；第3个bit，支持Http3接入；第4个bit，支持IPv6；第5个bit，支持精品BGP接入；第6个bit，支持三网接入；第7个bit，支持接入段Qos加速。 */
  FeatureBitmap?: number;
  /** 是否是开启了auto scale的通道，0表示否，1表示是。 */
  IsAutoScaleProxy?: number;
  /** 是否允许设置TLS配置0表示不支持；1表示支持。 */
  IsSupportTLSChoice?: number;
}

/** 内部接口使用，返回可以查询统计数据的通道和对应的监听器信息 */
declare interface ProxySimpleInfo {
  /** 通道ID */
  ProxyId?: string;
  /** 通道名称 */
  ProxyName?: string;
  /** 监听器列表 */
  ListenerList?: ListenerInfo[];
}

/** 通道状态信息 */
declare interface ProxyStatus {
  /** 通道实例ID。 */
  InstanceId: string;
  /** 通道状态。其中：RUNNING表示运行中；CREATING表示创建中；DESTROYING表示销毁中；OPENING表示开启中；CLOSING表示关闭中；CLOSED表示已关闭；ADJUSTING表示配置变更中；ISOLATING表示隔离中；ISOLATED表示已隔离；MOVING表示迁移中。 */
  Status: string;
}

/** 查询监听器或者规则相关的源站信息，不包括tag信息 */
declare interface RealServer {
  /** 源站的IP或域名 */
  RealServerIP?: string;
  /** 源站ID */
  RealServerId?: string;
  /** 源站名称 */
  RealServerName?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 是否在封禁黑名单中，其中：0表示不在黑名单中，1表示在黑名单中。 */
  InBanBlacklist?: number;
}

/** 绑定的源站信息 */
declare interface RealServerBindSetReq {
  /** 源站id */
  RealServerId: string;
  /** 源站端口 */
  RealServerPort: number;
  /** 源站IP */
  RealServerIP: string;
  /** 源站权重 */
  RealServerWeight?: number;
  /** 源站主备角色：master表示主，slave表示备，该参数必须在监听器打开了源站主备模式。 */
  RealServerFailoverRole?: string;
}

/** 源站绑定信息查询，BindStatus， 0: 未被绑定 1：被规则或者监听器绑定 */
declare interface RealServerStatus {
  /** 源站ID。 */
  RealServerId?: string;
  /** 0表示未被绑定 1表示被规则或者监听器绑定。 */
  BindStatus?: number;
  /** 绑定此源站的通道ID，没有绑定时为空字符串。 */
  ProxyId?: string;
  /** 绑定此源站的通道组ID，没有绑定时为空字符串。 */
  GroupId?: string | null;
}

/** 区域信息详情 */
declare interface RegionDetail {
  /** 区域ID */
  RegionId?: string;
  /** 区域英文名或中文名 */
  RegionName?: string;
  /** 机房所属大区 */
  RegionArea?: string;
  /** 机房所属大区名 */
  RegionAreaName?: string;
  /** 机房类型, dc表示DataCenter数据中心, ec表示EdgeComputing边缘节点 */
  IDCType?: string;
  /** 特性位图，每个bit位代表一种特性，其中：0，表示不支持该特性；1，表示支持该特性。特性位图含义如下（从右往左）：第1个bit，支持4层加速；第2个bit，支持7层加速；第3个bit，支持Http3接入；第4个bit，支持IPv6；第5个bit，支持精品BGP接入；第6个bit，支持三网接入；第7个bit，支持接入段Qos加速。 */
  FeatureBitmap?: number;
  /** 接入区域支持的能力 */
  SupportFeature?: SupportFeature | null;
}

/** 7层监听器转发规则健康检查相关参数 */
declare interface RuleCheckParams {
  /** 健康检查的时间间隔 */
  DelayLoop: number;
  /** 健康检查的响应超时时间 */
  ConnectTimeout: number;
  /** 健康检查的检查路径 */
  Path: string;
  /** 健康检查的方法，GET/HEAD */
  Method: string;
  /** 确认源站正常的返回码，可选范围[100, 200, 300, 400, 500] */
  StatusCode: number[];
  /** 健康检查的检查域名。当调用ModifyRuleAttribute时，不支持修改该参数。 */
  Domain?: string;
  /** 源站服务失败统计频率 */
  FailedCountInter?: number;
  /** 源站健康性检查阀值，超过该阀值会屏蔽服务 */
  FailedThreshold?: number;
  /** 源站健康性检测超出阀值后，屏蔽的时间 */
  BlockInter?: number;
}

/** 7层监听器转发规则信息 */
declare interface RuleInfo {
  /** 规则信息 */
  RuleId?: string;
  /** 监听器信息 */
  ListenerId?: string;
  /** 规则域名 */
  Domain?: string;
  /** 规则路径 */
  Path?: string;
  /** 源站类型 */
  RealServerType?: string;
  /** 监听器源站访问策略，其中：rr表示轮询；wrr表示加权轮询；lc表示最小连接数；lrtt表示最小时延。 */
  Scheduler?: string;
  /** 是否开启健康检查标志，1表示开启，0表示关闭 */
  HealthCheck?: number;
  /** 规则状态，0表示运行中，1表示创建中，2表示销毁中，3表示绑定解绑源站中，4表示配置更新中 */
  RuleStatus?: number;
  /** 健康检查相关参数 */
  CheckParams?: RuleCheckParams;
  /** 已绑定的源站相关信息 */
  RealServerSet?: BindRealServer[];
  /** 源站的服务状态，0表示异常，1表示正常。未开启健康检查时，该状态始终未正常。只要有一个源站健康状态为异常时，该状态为异常，具体源站的状态请查看RealServerSet。 */
  BindStatus?: number;
  /** 通道转发到源站的请求所携带的host，其中default表示直接转发接收到的host。 */
  ForwardHost?: string;
  /** 服务器名称指示（ServerNameIndication，简称SNI）开关。ON表示开启，OFF表示关闭。 */
  ServerNameIndicationSwitch?: string;
  /** 服务器名称指示（ServerNameIndication，简称SNI），当SNI开关打开时，该字段必填。 */
  ServerNameIndication?: string;
  /** 强转HTTPS指示，当传递值为https:时表示强转为https */
  ForcedRedirect?: string | null;
}

/** 安全策略规则（入参） */
declare interface SecurityPolicyRuleIn {
  /** 请求来源IP或IP段。 */
  SourceCidr: string;
  /** 策略：允许（ACCEPT）或拒绝（DROP） */
  Action: string;
  /** 规则别名 */
  AliasName?: string;
  /** 协议：TCP或UDP，ALL表示所有协议 */
  Protocol?: string;
  /** 目标端口，填写格式举例：单个端口: 80多个端口: 80,443连续端口: 3306-20000所有端口: ALL */
  DestPortRange?: string;
}

/** 安全策略规则（出参） */
declare interface SecurityPolicyRuleOut {
  /** 策略：允许（ACCEPT）或拒绝（DROP） */
  Action?: string;
  /** 请求来源Ip或Ip段 */
  SourceCidr?: string;
  /** 规则别名 */
  AliasName?: string;
  /** 目标端口范围 */
  DestPortRange?: string;
  /** 规则ID */
  RuleId?: string;
  /** 要匹配的协议类型（TCP/UDP） */
  Protocol?: string;
  /** 安全策略ID */
  PolicyId?: string;
}

/** 统计数据信息 */
declare interface StatisticsDataInfo {
  /** 对应的时间点 */
  Time: number;
  /** 统计数据值 */
  Data: number | null;
}

/** 加速区域支持的能力，包括支持的网络类型等等。 */
declare interface SupportFeature {
  /** 接入区域支持的网络类型列表，normal表示支持常规BGP，cn2表示精品BGP，triple表示三网，secure_eip表示定制安全eip。 */
  NetworkType: string[];
}

/** TCP类型监听器信息 */
declare interface TCPListener {
  /** 监听器ID */
  ListenerId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 监听器端口 */
  Port?: number;
  /** 监听器转发源站端口，仅对版本为1.0的通道有效 */
  RealServerPort?: number | null;
  /** 监听器绑定源站类型 */
  RealServerType?: string;
  /** 监听器协议， TCP */
  Protocol?: string;
  /** 监听器状态，其中：0表示运行中；1表示创建中；2表示销毁中；3表示源站调整中；4表示配置变更中。 */
  ListenerStatus?: number;
  /** 监听器源站访问策略，其中：rr表示轮询；wrr表示加权轮询；lc表示最小连接数；lrtt表示最小时延。 */
  Scheduler?: string;
  /** 源站健康检查响应超时时间，单位：秒 */
  ConnectTimeout?: number;
  /** 源站健康检查时间间隔，单位：秒 */
  DelayLoop?: number;
  /** 监听器是否开启健康检查，其中：0表示关闭；1表示开启 */
  HealthCheck?: number;
  /** 监听器绑定的源站状态， 其中：0表示异常；1表示正常。 */
  BindStatus?: number;
  /** 监听器绑定的源站信息 */
  RealServerSet?: BindRealServer[];
  /** 监听器创建时间，Unix时间戳 */
  CreateTime?: number;
  /** 监听器获取客户端 IP 的方式，0表示TOA, 1表示Proxy Protocol */
  ClientIPMethod?: number;
  /** 健康阈值，表示连续检查成功多少次后认定源站健康。范围为1到10 */
  HealthyThreshold?: number;
  /** 不健康阈值，表示连续检查失败多少次数后认为源站不健康。范围为1到10 */
  UnhealthyThreshold?: number;
  /** 源站是否开启主备模式：1开启，0关闭，DOMAIN类型源站不支持开启 */
  FailoverSwitch?: number;
  /** 是否开启会话保持选项：0关闭， 非0开启，非0值为会话保持时间 */
  SessionPersist?: number;
  /** 监听器的通道ID，如果监听器属于通道组，则为null */
  ProxyId?: string;
  /** 监听器的通道组ID，如果监听器属于通道，则为null */
  GroupId?: string | null;
}

/** 标签键值对 */
declare interface TagPair {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 标签对应资源信息 */
declare interface TagResourceInfo {
  /** 资源类型，其中：Proxy表示通道，ProxyGroup表示通道组，RealServer表示源站 */
  ResourceType?: string;
  /** 资源ID */
  ResourceId?: string;
}

/** UDP类型监听器信息 */
declare interface UDPListener {
  /** 监听器ID */
  ListenerId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 监听器端口 */
  Port?: number;
  /** 监听器转发源站端口，仅V1版本通道或通道组监听器有效 */
  RealServerPort?: number;
  /** 监听器绑定源站类型 */
  RealServerType?: string;
  /** 监听器协议， UDP */
  Protocol?: string;
  /** 监听器状态，其中：0表示运行中；1表示创建中；2表示销毁中；3表示源站调整中；4表示配置变更中。 */
  ListenerStatus?: number;
  /** 监听器源站访问策略，其中：rr表示轮询；wrr表示加权轮询；lc表示最小连接数；lrtt表示最小时延。 */
  Scheduler?: string;
  /** 监听器绑定源站状态， 0表示正常，1表示IP异常，2表示域名解析异常 */
  BindStatus?: number;
  /** 监听器绑定的源站信息 */
  RealServerSet?: BindRealServer[];
  /** 监听器创建时间，Unix时间戳 */
  CreateTime?: number;
  /** 是否开启会话保持选项：0关闭， 非0开启，非0值为会话保持时间 */
  SessionPersist?: number;
  /** 源站健康检查时间间隔，单位：秒。时间间隔取值在[5，300]之间。 */
  DelayLoop?: number;
  /** 源站健康检查响应超时时间，单位：秒。超时时间取值在[2，60]之间。超时时间应小于健康检查时间间隔DelayLoop。 */
  ConnectTimeout?: number;
  /** 健康阈值，表示连续检查成功多少次后认定源站健康。范围为1到10 */
  HealthyThreshold?: number;
  /** 不健康阈值，表示连续检查失败多少次数后认为源站不健康。范围为1到10 */
  UnhealthyThreshold?: number;
  /** 源站是否开启主备模式：1开启，0关闭，DOMAIN类型源站不支持开启 */
  FailoverSwitch?: number;
  /** 源站是否开启健康检查：1开启，0关闭。 */
  HealthCheck?: number;
  /** UDP源站健康类型。PORT表示检查端口，PING表示PING。 */
  CheckType?: string;
  /** UDP源站健康检查探测端口。 */
  CheckPort?: number;
  /** UDP源站健康检查端口探测报文类型：TEXT表示文本。仅在健康检查类型为PORT时使用。 */
  ContextType?: string;
  /** UDP源站健康检查端口探测发送报文。仅在健康检查类型为PORT时使用。 */
  SendContext?: string;
  /** UDP源站健康检查端口探测接收报文。仅在健康检查类型为PORT时使用。 */
  RecvContext?: string;
  /** 监听器的通道ID，如果监听器属于通道组，则为null */
  ProxyId?: string;
  /** 监听器的通道组ID，如果监听器属于通道，则为null */
  GroupId?: string;
}

declare interface AddRealServersRequest {
  /** 源站对应的项目ID */
  ProjectId: number;
  /** 源站对应的IP或域名 */
  RealServerIP: string[];
  /** 源站名称 */
  RealServerName: string;
  /** 标签列表 */
  TagSet?: TagPair[];
}

declare interface AddRealServersResponse {
  /** 源站信息列表 */
  RealServerSet?: NewRealServer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BanAndRecoverProxyRequest {
}

declare interface BanAndRecoverProxyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindListenerRealServersRequest {
  /** 监听器ID */
  ListenerId: string;
  /** 待绑定源站列表。如果该监听器的源站调度策略是加权轮询，需要填写源站权重 RealServerWeight, 不填或者其他调度类型默认源站权重为1。 */
  RealServerBindSet?: RealServerBindSetReq[];
}

declare interface BindListenerRealServersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindRuleRealServersRequest {
  /** 转发规则ID */
  RuleId: string;
  /** 需要绑定的源站信息列表。如果已经存在绑定的源站，则会覆盖更新成这个源站列表。当不带该字段时，表示解绑该规则上的所有源站。如果该规则的源站调度策略是加权轮询，需要填写源站权重 RealServerWeight, 不填或者其他调度类型默认源站权重为1。 */
  RealServerBindSet?: RealServerBindSetReq[];
}

declare interface BindRuleRealServersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckProxyCreateRequest {
  /** 通道的接入(加速)区域。取值可通过接口DescribeAccessRegionsByDestRegion获取到 */
  AccessRegion: string;
  /** 通道的源站区域。取值可通过接口DescribeDestRegions获取到 */
  RealServerRegion: string;
  /** 通道带宽上限，单位：Mbps。 */
  Bandwidth: number;
  /** 通道并发量上限，表示同时在线的连接数，单位：万。 */
  Concurrent: number;
  /** 如果在通道组下创建通道，需要填写通道组的ID */
  GroupId?: string;
  /** IP版本，可取值：IPv4、IPv6，默认值IPv4 */
  IPAddressVersion?: string;
  /** 网络类型，可取值：normal、cn2，默认值normal */
  NetworkType?: string;
  /** 通道套餐类型。Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。 */
  PackageType?: string;
  /** 该字段已废弃，当IPAddressVersion为IPv4时，所创建的通道默认支持Http3.0；当为IPv6，默认不支持Http3.0。 */
  Http3Supported?: number;
}

declare interface CheckProxyCreateResponse {
  /** 查询能否创建给定配置的通道，1可以创建，0不可创建。 */
  CheckFlag?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseProxiesRequest {
  /** （旧参数，请切换到ProxyIds）通道的实例ID。 */
  InstanceIds?: string[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性。 */
  ClientToken?: string;
  /** （新参数）通道的实例ID。 */
  ProxyIds?: string[];
}

declare interface CloseProxiesResponse {
  /** 非运行状态下的通道实例ID列表，不可开启。 */
  InvalidStatusInstanceSet?: string[];
  /** 开启操作失败的通道实例ID列表。 */
  OperationFailedInstanceSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseProxyGroupRequest {
  /** 通道组的实例 ID。 */
  GroupId: string;
}

declare interface CloseProxyGroupResponse {
  /** 非运行状态下的通道实例ID列表，不可开启。 */
  InvalidStatusInstanceSet?: string[];
  /** 开启操作失败的通道实例ID列表。 */
  OperationFailedInstanceSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseSecurityPolicyRequest {
  /** 通道ID。操作通道组时无需填此参数。 */
  ProxyId?: string;
  /** 安全组策略ID。操作通道组时须填此参数。 */
  PolicyId?: string;
}

declare interface CloseSecurityPolicyResponse {
  /** 异步流程ID，可以通过DescribeAsyncTaskStatus 查询流程执行进展和状态 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCertificateRequest {
  /** 证书类型。其中：0，表示基础认证配置；1，表示客户端CA证书；2，服务器SSL证书；3，表示源站CA证书；4，表示通道SSL证书。 */
  CertificateType: number;
  /** 证书内容。采用url编码。其中：当证书类型为基础认证配置时，该参数填写用户名/密码对。格式：“用户名：密码”，例如：root:FSGdT。其中密码使用htpasswd或者openssl，例如：openssl passwd -crypt 123456。当证书类型为CA/SSL证书时，该参数填写证书内容，格式为pem。 */
  CertificateContent: string;
  /** 证书名称 */
  CertificateAlias?: string;
  /** 密钥内容。采用url编码。仅当证书类型为SSL证书时，需要填写该参数。格式为pem。 */
  CertificateKey?: string;
}

declare interface CreateCertificateResponse {
  /** 证书ID */
  CertificateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCustomHeaderRequest {
  /** 规则id */
  RuleId: string;
  /** 新增的header名称和内容列表， ‘’$remote_addr‘’会被解析替换成客户端ip，其他值原样透传到源站。 */
  Headers?: HttpHeaderParam[];
}

declare interface CreateCustomHeaderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainErrorPageInfoRequest {
  /** 监听器ID */
  ListenerId: string;
  /** 域名 */
  Domain: string;
  /** 原始错误码 */
  ErrorNos: number[];
  /** 新的响应包体 */
  Body: string;
  /** 新错误码 */
  NewErrorNo?: number;
  /** 需要删除的响应头 */
  ClearHeaders?: string[];
  /** 需要设置的响应头 */
  SetHeaders?: HttpHeaderParam[];
}

declare interface CreateDomainErrorPageInfoResponse {
  /** 错误定制响应的配置ID */
  ErrorPageId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDomainRequest {
  /** 监听器ID。 */
  ListenerId: string;
  /** 需要创建的域名，一个监听器下最大支持100个域名。 */
  Domain: string;
  /** 服务器证书，用于客户端与GAAP的HTTPS的交互。 */
  CertificateId?: string;
  /** 客户端CA证书，用于客户端与GAAP的HTTPS的交互。仅当采用双向认证的方式时，需要设置该字段或PolyClientCertificateIds字段。 */
  ClientCertificateId?: string;
  /** 客户端CA证书，用于客户端与GAAP的HTTPS的交互。仅当采用双向认证的方式时，需要设置该字段或ClientCertificateId字段。 */
  PolyClientCertificateIds?: string[];
  /** 是否开启Http3特性的标识，其中：0，表示不开启Http3；1，表示开启Http3。默认不开启Http3。可以通过SetDomainHttp3开启。 */
  Http3Supported?: number;
  /** 是否作为默认域名，默认为“否” */
  IsDefaultServer?: boolean;
}

declare interface CreateDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGlobalDomainDnsRequest {
  /** 域名ID */
  DomainId: string;
  /** 通道ID列表 */
  ProxyIdList: string[];
  /** 国家ID列表 */
  NationCountryInnerCodes: string[];
}

declare interface CreateGlobalDomainDnsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGlobalDomainRequest {
  /** 域名所属项目ID */
  ProjectId: number;
  /** 域名默认入口 */
  DefaultValue: string;
  /** 别名 */
  Alias?: string;
  /** 标签列表 */
  TagSet?: TagPair[];
}

declare interface CreateGlobalDomainResponse {
  /** 域名ID */
  DomainId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHTTPListenerRequest {
  /** 监听器名称 */
  ListenerName: string;
  /** 监听器端口，基于同种传输层协议（TCP 或 UDP）的监听器，端口不可重复 */
  Port: number;
  /** 通道ID，与GroupId不能同时设置，对应为通道创建监听器 */
  ProxyId?: string;
  /** 通道组ID，与ProxyId不能同时设置，对应为通道组创建监听器 */
  GroupId?: string;
}

declare interface CreateHTTPListenerResponse {
  /** 创建的监听器ID */
  ListenerId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHTTPSListenerRequest {
  /** 监听器名称 */
  ListenerName: string;
  /** 监听器端口，基于同种传输层协议（TCP 或 UDP）的监听器，端口不可重复 */
  Port: number;
  /** 服务器证书ID */
  CertificateId: string;
  /** 加速通道转发到源站的协议类型：HTTP | HTTPS */
  ForwardProtocol: string;
  /** 通道ID，与GroupId之间只能设置一个。表示创建通道的监听器。 */
  ProxyId?: string;
  /** 认证类型，其中：0，单向认证；1，双向认证。默认使用单向认证。 */
  AuthType?: number;
  /** 客户端CA单证书ID，仅当双向认证时设置该参数或PolyClientCertificateIds参数 */
  ClientCertificateId?: string;
  /** 新的客户端多CA证书ID，仅当双向认证时设置该参数或设置ClientCertificateId参数 */
  PolyClientCertificateIds?: string[];
  /** 通道组ID，与ProxyId之间只能设置一个。表示创建通道组的监听器。 */
  GroupId?: string;
  /** 支持Http3的开关，其中：0，表示不需要支持Http3接入；1，表示需要支持Http3接入。注意：如果支持了Http3的功能，那么该监听器会占用对应的UDP接入端口，不可再创建相同端口的UDP监听器。该功能的启停无法在监听器创建完毕后再修改。 */
  Http3Supported?: number;
}

declare interface CreateHTTPSListenerResponse {
  /** 创建的监听器ID */
  ListenerId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProxyGroupDomainRequest {
  /** 需要开启域名的通道组ID。 */
  GroupId: string;
}

declare interface CreateProxyGroupDomainResponse {
  /** 通道组ID。 */
  GroupId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProxyGroupRequest {
  /** 通道组所属项目ID */
  ProjectId: number;
  /** 通道组别名 */
  GroupName: string;
  /** 源站地域，参考接口 [https://cloud.tencent.com/document/api/608/36964] 返回参数RegionDetail中的RegionId */
  RealServerRegion: string;
  /** 标签列表 */
  TagSet?: TagPair[];
  /** 加速地域列表，包括加速地域名，及该地域对应的带宽和并发配置。 */
  AccessRegionSet?: AccessConfiguration[];
  /** IP版本，可取值：IPv4、IPv6，默认值IPv4 */
  IPAddressVersion?: string;
  /** 通道组套餐类型，可取值：Thunder、Accelerator，默认值Thunder */
  PackageType?: string;
  /** 该字段已废弃，当IPAddressVersion为IPv4时，所创建的通道组默认支持Http3.0；当为IPv6，默认不支持Http3.0。 */
  Http3Supported?: number;
}

declare interface CreateProxyGroupResponse {
  /** 通道组ID */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProxyRequest {
  /** 通道的项目ID。 */
  ProjectId: number;
  /** 通道名称。 */
  ProxyName: string;
  /** 接入地域。 */
  AccessRegion: string;
  /** 通道带宽上限，单位：Mbps。 */
  Bandwidth: number;
  /** 通道并发量上限，表示同时在线的连接数，单位：万。 */
  Concurrent: number;
  /** 源站地域。当GroupId存在时，源站地域为通道组的源站地域,此时可不填该字段。当GroupId不存在时，需要填写该字段 */
  RealServerRegion?: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性。 */
  ClientToken?: string;
  /** 通道所在的通道组ID，当在通道组中创建通道时必带，否则忽略该字段。 */
  GroupId?: string;
  /** 通道需要添加的标签列表。 */
  TagSet?: TagPair[];
  /** 被复制的通道ID。只有处于运行中状态的通道可以被复制。当设置该参数时，表示复制该通道。 */
  ClonedProxyId?: string;
  /** 计费方式 (0:按带宽计费，1:按流量计费 默认按带宽计费） */
  BillingType?: number;
  /** IP版本，可取值：IPv4、IPv6，默认值IPv4 */
  IPAddressVersion?: string;
  /** 网络类型，normal表示常规BGP，cn2表示精品BGP，triple表示三网 */
  NetworkType?: string;
  /** 通道套餐类型，Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。 */
  PackageType?: string;
  /** 该字段已废弃，当IPAddressVersion为IPv4时，所创建的通道默认支持Http3.0；当为IPv6，默认不支持Http3.0。 */
  Http3Supported?: number;
}

declare interface CreateProxyResponse {
  /** 通道的实例ID。 */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRuleRequest {
  /** 7层监听器ID */
  ListenerId: string;
  /** 转发规则的域名 */
  Domain: string;
  /** 转发规则的路径 */
  Path: string;
  /** 转发规则对应源站的类型，支持IP和DOMAIN类型。 */
  RealServerType: string;
  /** 监听器源站访问策略，其中：rr表示轮询；wrr表示加权轮询；lc表示最小连接数。 */
  Scheduler: string;
  /** 规则是否开启健康检查，1开启，0关闭。 */
  HealthCheck: number;
  /** 源站健康检查相关参数 */
  CheckParams?: RuleCheckParams;
  /** 加速通道转发到源站的协议类型：支持HTTP或HTTPS。不传递该字段时表示使用对应监听器的ForwardProtocol。 */
  ForwardProtocol?: string;
  /** 回源Host。加速通道转发到源站的host，不设置该参数时，使用默认的host设置，即客户端发起的http请求的host。 */
  ForwardHost?: string;
  /** 服务器名称指示（ServerNameIndication，简称SNI）开关。ON表示开启，OFF表示关闭。创建HTTP监听器转发规则时，SNI功能默认关闭。 */
  ServerNameIndicationSwitch?: string;
  /** 服务器名称指示（ServerNameIndication，简称SNI），当SNI开关打开时，该字段必填。 */
  ServerNameIndication?: string;
  /** HTTP强制跳转HTTPS。输入当前规则对应的域名与地址。 */
  ForcedRedirect?: string;
}

declare interface CreateRuleResponse {
  /** 创建转发规则成功返回规则ID */
  RuleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityPolicyRequest {
  /** 默认策略：ACCEPT或DROP */
  DefaultAction: string;
  /** 加速通道ID */
  ProxyId?: string;
  /** 通道组ID */
  GroupId?: string;
}

declare interface CreateSecurityPolicyResponse {
  /** 安全策略ID */
  PolicyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityRulesRequest {
  /** 安全策略ID */
  PolicyId: string;
  /** 访问规则列表 */
  RuleList: SecurityPolicyRuleIn[];
}

declare interface CreateSecurityRulesResponse {
  /** 规则ID列表 */
  RuleIdList: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTCPListenersRequest {
  /** 监听器名称。 */
  ListenerName: string;
  /** 监听器端口列表。 */
  Ports: number[];
  /** 监听器源站访问策略，其中：rr表示轮询；wrr表示加权轮询；lc表示最小连接数；lrtt表示最小时延。 */
  Scheduler: string;
  /** 源站是否开启健康检查：1开启，0关闭，UDP监听器不支持健康检查 */
  HealthCheck: number;
  /** 监听器绑定源站类型。IP表示IP地址，DOMAIN表示域名。 */
  RealServerType: string;
  /** 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。 */
  ProxyId?: string;
  /** 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。 */
  GroupId?: string;
  /** 源站健康检查时间间隔，单位：秒。时间间隔取值在[5，300]之间。 */
  DelayLoop?: number;
  /** 源站健康检查响应超时时间，单位：秒。超时时间取值在[2，60]之间。超时时间应小于健康检查时间间隔DelayLoop。 */
  ConnectTimeout?: number;
  /** 源站端口列表，该参数仅支持v1版本监听器和通道组监听器。 */
  RealServerPorts?: number[];
  /** 监听器获取客户端 IP 的方式，0表示 TOA, 1表示Proxy Protocol */
  ClientIPMethod?: number;
  /** 源站是否开启主备模式：1开启，0关闭，DOMAIN类型源站不支持开启 */
  FailoverSwitch?: number;
  /** 健康阈值，表示连续检查成功多少次后认定源站健康。范围为1到10 */
  HealthyThreshold?: number;
  /** 不健康阈值，表示连续检查失败多少次数后认为源站不健康。范围为1到10 */
  UnhealthyThreshold?: number;
}

declare interface CreateTCPListenersResponse {
  /** 返回监听器ID */
  ListenerIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUDPListenersRequest {
  /** 监听器名称 */
  ListenerName: string;
  /** 监听器端口列表 */
  Ports: number[];
  /** 监听器源站访问策略，其中：rr表示轮询；wrr表示加权轮询；lc表示最小连接数；lrtt表示最小时延。 */
  Scheduler: string;
  /** 监听器绑定源站类型。IP表示IP地址，DOMAIN表示域名。 */
  RealServerType: string;
  /** 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。 */
  ProxyId?: string;
  /** 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。 */
  GroupId?: string;
  /** 源站端口列表，该参数仅支持v1版本监听器和通道组监听器 */
  RealServerPorts?: number[];
  /** 源站健康检查时间间隔，单位：秒。时间间隔取值在[5，300]之间。 */
  DelayLoop?: number;
  /** 源站健康检查响应超时时间，单位：秒。超时时间取值在[2，60]之间。超时时间应小于健康检查时间间隔DelayLoop。 */
  ConnectTimeout?: number;
  /** 健康阈值，表示连续检查成功多少次后认定源站健康。范围为1到10 */
  HealthyThreshold?: number;
  /** 不健康阈值，表示连续检查失败多少次数后认为源站不健康。范围为1到10 */
  UnhealthyThreshold?: number;
  /** 源站是否开启主备模式：1开启，0关闭，DOMAIN类型源站不支持开启 */
  FailoverSwitch?: number;
  /** 源站是否开启健康检查：1开启，0关闭。 */
  HealthCheck?: number;
  /** UDP源站健康类型。PORT表示检查端口，PING表示PING。 */
  CheckType?: string;
  /** UDP源站健康检查探测端口。 */
  CheckPort?: number;
  /** UDP源站健康检查端口探测报文类型：TEXT表示文本。仅在健康检查类型为PORT时使用。 */
  ContextType?: string;
  /** UDP源站健康检查端口探测发送报文。仅在健康检查类型为PORT时使用。 */
  SendContext?: string;
  /** UDP源站健康检查端口探测接收报文。仅在健康检查类型为PORT时使用。 */
  RecvContext?: string;
}

declare interface CreateUDPListenersResponse {
  /** 返回监听器ID */
  ListenerIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCertificateRequest {
  /** 需要删除的证书ID。 */
  CertificateId: string;
}

declare interface DeleteCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainErrorPageInfoRequest {
  /** 定制错误响应页的唯一ID，请参考CreateDomainErrorPageInfo的响应 */
  ErrorPageId: string;
}

declare interface DeleteDomainErrorPageInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainRequest {
  /** 监听器ID */
  ListenerId: string;
  /** 需要删除的域名 */
  Domain: string;
  /** 是否强制删除已绑定源站的转发规则，0非强制，1强制。当采用非强制删除时，如果域名下已有规则绑定了源站，则无法删除。 */
  Force: number;
}

declare interface DeleteDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGlobalDomainDnsRequest {
  /** 解析记录的ID */
  DnsRecordId: number;
}

declare interface DeleteGlobalDomainDnsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGlobalDomainRequest {
  /** 域名ID */
  DomainId: string;
}

declare interface DeleteGlobalDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteListenersRequest {
  /** 待删除的监听器ID列表 */
  ListenerIds: string[];
  /** 已绑定源站的监听器是否允许强制删除，1：允许， 0：不允许 */
  Force: number;
  /** 通道组ID，该参数和ProxyId必须设置一个，但不能同时设置。 */
  GroupId?: string;
  /** 通道ID，该参数和GroupId必须设置一个，但不能同时设置。 */
  ProxyId?: string;
}

declare interface DeleteListenersResponse {
  /** 删除操作失败的监听器ID列表 */
  OperationFailedListenerSet?: string[];
  /** 删除操作成功的监听器ID列表 */
  OperationSucceedListenerSet?: string[];
  /** 无效的监听器ID列表，如：监听器不存在，监听器对应实例不匹配 */
  InvalidStatusListenerSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProxyGroupRequest {
  /** 需要删除的通道组ID。 */
  GroupId: string;
  /** 强制删除标识。其中：0，不强制删除，1，强制删除。默认为0，当通道组中存在通道或通道组中存在监听器/规则绑定了源站时，且Force为0时，该操作会返回失败。 */
  Force?: number;
}

declare interface DeleteProxyGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRuleRequest {
  /** 7层监听器ID */
  ListenerId: string;
  /** 转发规则ID */
  RuleId: string;
  /** 是否可以强制删除已绑定源站的转发规则，0非强制，1强制 */
  Force: number;
}

declare interface DeleteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityPolicyRequest {
  /** 策略ID */
  PolicyId: string;
}

declare interface DeleteSecurityPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityRulesRequest {
  /** 安全策略ID */
  PolicyId: string;
  /** 访问规则ID列表 */
  RuleIdList: string[];
}

declare interface DeleteSecurityRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessRegionsByDestRegionRequest {
  /** 源站区域：接口DescribeDestRegions返回DestRegionSet中的RegionId字段值 */
  DestRegion: string;
  /** IP版本，可取值：IPv4、IPv6，默认值IPv4 */
  IPAddressVersion?: string;
  /** 通道套餐类型，Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。 */
  PackageType?: string;
}

declare interface DescribeAccessRegionsByDestRegionResponse {
  /** 可用加速区域数量 */
  TotalCount?: number;
  /** 可用加速区域信息列表 */
  AccessRegionSet?: AccessRegionDetial[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessRegionsRequest {
}

declare interface DescribeAccessRegionsResponse {
  /** 加速区域总数 */
  TotalCount?: number;
  /** 加速区域详情列表 */
  AccessRegionSet?: RegionDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuthSignatureRequest {
}

declare interface DescribeAuthSignatureResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBlackHeaderRequest {
}

declare interface DescribeBlackHeaderResponse {
  /** 禁用的自定义header列表 */
  BlackHeaders?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateDetailRequest {
  /** 证书ID。 */
  CertificateId: string;
}

declare interface DescribeCertificateDetailResponse {
  /** 证书详情。 */
  CertificateDetail: CertificateDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificatesRequest {
  /** 证书类型。其中：0，表示基础认证配置；1，表示客户端CA证书；2，表示服务器SSL证书；3，表示源站CA证书；4，表示通道SSL证书。-1，所有类型。默认为-1。 */
  CertificateType?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 限制数量，默认为20。 */
  Limit?: number;
}

declare interface DescribeCertificatesResponse {
  /** 服务器证书列表，包括证书ID 和证书名称。 */
  CertificateSet?: Certificate[];
  /** 满足查询条件的服务器证书总数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCountryAreaMappingRequest {
}

declare interface DescribeCountryAreaMappingResponse {
  /** 国家地区编码映射表。 */
  CountryAreaMappingList?: CountryAreaMap[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCrossBorderProxiesRequest {
}

declare interface DescribeCrossBorderProxiesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomHeaderRequest {
  /** 规则ID */
  RuleId: string;
}

declare interface DescribeCustomHeaderResponse {
  /** 规则id */
  RuleId?: string;
  /** 自定义header列表 */
  Headers?: HttpHeaderParam[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDestRegionsRequest {
  /** 通道质量:0表示金牌，1表示银牌。默认不传该参数，表示金牌。本参数确定查询指定通道质量的源站区域 */
  QualityType?: number;
}

declare interface DescribeDestRegionsResponse {
  /** 源站区域总数 */
  TotalCount?: number;
  /** 源站区域详情列表 */
  DestRegionSet?: RegionDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainErrorPageInfoByIdsRequest {
  /** 定制错误ID列表，最多支持10个 */
  ErrorPageIds: string[];
}

declare interface DescribeDomainErrorPageInfoByIdsResponse {
  /** 定制错误响应配置集 */
  ErrorPageSet?: DomainErrorPageInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainErrorPageInfoRequest {
  /** 监听器ID */
  ListenerId: string;
  /** 域名 */
  Domain: string;
}

declare interface DescribeDomainErrorPageInfoResponse {
  /** 定制错误响应配置集 */
  ErrorPageSet?: DomainErrorPageInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGlobalDomainDnsRequest {
  /** 域名ID */
  DomainId: string;
}

declare interface DescribeGlobalDomainDnsResponse {
  /** DNS解析记录详细信息列表 */
  GlobalDnsList?: GlobalDns[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGlobalDomainsRequest {
  /** 项目ID */
  ProjectId: number;
  /** 分页偏移量 */
  Offset: number;
  /** 分页数量限制 */
  Limit: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 标签列表，当存在该字段时，拉取对应标签下的资源列表。最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，域名会被拉取出来。 */
  TagSet?: TagPair[];
}

declare interface DescribeGlobalDomainsResponse {
  /** 域名信息列表 */
  Domains?: Domain[];
  /** 总记录数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupAndStatisticsProxyRequest {
  /** 项目ID */
  ProjectId: number;
}

declare interface DescribeGroupAndStatisticsProxyResponse {
  /** 可以统计的通道组信息 */
  GroupSet: GroupStatisticsInfo[];
  /** 通道组数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupDomainConfigRequest {
  /** 通道组ID。 */
  GroupId: string;
}

declare interface DescribeGroupDomainConfigResponse {
  /** 域名解析就近接入配置列表。 */
  AccessRegionList: DomainAccessRegionDict[];
  /** 默认访问Ip。 */
  DefaultDnsIp: string;
  /** 通道组ID。 */
  GroupId: string;
  /** 接入地域的配置的总数。 */
  AccessRegionCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHTTPListenersRequest {
  /** 通道ID。ListenerId、ProxyId、GroupId须至少填写一个，且ProxyId与GroupId至多只能填写其中一个。 */
  ProxyId?: string;
  /** 通道组ID。ListenerId、ProxyId、GroupId须至少填写一个，且ProxyId与GroupId至多只能填写其中一个。 */
  GroupId?: string;
  /** 过滤条件，按照监听器ID进行精确查询。ListenerId、ProxyId、GroupId须至少填写一个，且ProxyId与GroupId至多只能填写其中一个。 */
  ListenerId?: string;
  /** 过滤条件，按照监听器名称进行精确查询 */
  ListenerName?: string;
  /** 过滤条件，按照监听器端口进行精确查询 */
  Port?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 限制数量，默认为20个 */
  Limit?: number;
  /** 过滤条件，支持按照端口或监听器名称进行模糊查询，该参数不能与ListenerName和Port同时使用 */
  SearchValue?: string;
}

declare interface DescribeHTTPListenersResponse {
  /** 监听器数量 */
  TotalCount?: number;
  /** HTTP监听器列表 */
  ListenerSet?: HTTPListener[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHTTPSListenersRequest {
  /** 通道ID。ListenerId、ProxyId、GroupId须至少填写一个，且ProxyId与GroupId至多只能填写其中一个。 */
  ProxyId?: string;
  /** 通道组ID。ListenerId、ProxyId、GroupId须至少填写一个，且ProxyId与GroupId至多只能填写其中一个。 */
  GroupId?: string;
  /** 过滤条件，根据监听器ID进行精确查询。ListenerId、ProxyId、GroupId须至少填写一个，且ProxyId与GroupId至多只能填写其中一个。 */
  ListenerId?: string;
  /** 过滤条件，根据监听器名称进行精确查询。 */
  ListenerName?: string;
  /** 过滤条件，根据监听器端口进行精确查询。 */
  Port?: number;
  /** 偏移量， 默认为0 */
  Offset?: number;
  /** 限制数量，默认为20 */
  Limit?: number;
  /** 过滤条件，支持按照端口或监听器名称进行模糊查询 */
  SearchValue?: string;
  /** 支持Http3的开关，其中：0，表示不需要支持Http3接入；1，表示需要支持Http3接入。注意：如果支持了Http3的功能，那么该监听器会占用对应的UDP接入端口，不可再创建相同端口的UDP监听器。该功能的启停无法在监听器创建完毕后再修改。 */
  Http3Supported?: number;
}

declare interface DescribeHTTPSListenersResponse {
  /** 监听器数量 */
  TotalCount?: number;
  /** HTTPS监听器列表 */
  ListenerSet?: HTTPSListener[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenerRealServersRequest {
  /** 监听器ID */
  ListenerId: string;
}

declare interface DescribeListenerRealServersResponse {
  /** 可绑定源站的个数 */
  TotalCount?: number;
  /** 源站信息列表 */
  RealServerSet?: RealServer[];
  /** 已绑定源站的个数 */
  BindRealServerTotalCount?: number;
  /** 已绑定源站信息列表 */
  BindRealServerSet?: BindRealServer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenerStatisticsRequest {
  /** 监听器ID */
  ListenerId: string;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 统计指标名称列表，支持: 入带宽:InBandwidth, 出带宽:OutBandwidth, 并发:Concurrent, 入包量:InPackets, 出包量:OutPackets。 */
  MetricNames: string[];
  /** 监控粒度，目前支持300，3600，86400，单位：秒。查询时间范围不超过1天，支持最小粒度300秒；查询间范围不超过7天，支持最小粒度3600秒；查询间范围超过7天，支持最小粒度86400秒。 */
  Granularity: number;
}

declare interface DescribeListenerStatisticsResponse {
  /** 通道组统计数据 */
  StatisticsData?: MetricStatisticsInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxiesRequest {
  /** （旧参数，请切换到ProxyIds）按照一个或者多个实例ID查询。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。 */
  InstanceIds?: string[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 过滤条件。 每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定InstanceIds和Filters。 ProjectId - String - 是否必填：否 -（过滤条件）按照项目ID过滤。 AccessRegion - String - 是否必填：否 - （过滤条件）按照接入地域过滤。 RealServerRegion - String - 是否必填：否 - （过滤条件）按照源站地域过滤。GroupId - String - 是否必填：否 - （过滤条件）按照通道组ID过滤。IPAddressVersion - String - 是否必填：否 - （过滤条件）按照IP版本过滤。PackageType - String - 是否必填：否 - （过滤条件）按照通道套餐类型过滤。 */
  Filters?: Filter[];
  /** （新参数，替代InstanceIds）按照一个或者多个实例ID查询。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。 */
  ProxyIds?: string[];
  /** 标签列表，当存在该字段时，拉取对应标签下的资源列表。最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，通道会被拉取出来。 */
  TagSet?: TagPair[];
  /** 当该字段为1时，仅拉取非通道组的通道，当该字段为0时，仅拉取通道组的通道，不存在该字段时，拉取所有通道，包括独立通道和通道组通道。 */
  Independent?: number;
  /** 输出通道列表的排列顺序。取值范围：asc：升序排列；desc：降序排列。默认为降序。 */
  Order?: string;
  /** 通道列表排序的依据字段。取值范围：create_time：依据通道的创建时间排序；proxy_id：依据通道的ID排序；bandwidth：依据通道带宽上限排序；concurrent_connections：依据通道并发排序；默认按通道创建时间排序。 */
  OrderField?: string;
}

declare interface DescribeProxiesResponse {
  /** 通道个数。 */
  TotalCount?: number;
  /** （旧参数，请切换到ProxySet）通道实例信息列表。 */
  InstanceSet?: ProxyInfo[];
  /** （新参数）通道实例信息列表。 */
  ProxySet?: ProxyInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxiesStatusRequest {
  /** （旧参数，请切换到ProxyIds）通道ID列表。 */
  InstanceIds?: string[];
  /** （新参数）通道ID列表。 */
  ProxyIds?: string[];
}

declare interface DescribeProxiesStatusResponse {
  /** 通道状态列表。 */
  InstanceStatusSet?: ProxyStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyAndStatisticsListenersRequest {
  /** 项目ID */
  ProjectId: number;
}

declare interface DescribeProxyAndStatisticsListenersResponse {
  /** 可以统计的通道信息 */
  ProxySet: ProxySimpleInfo[];
  /** 通道数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyDetailRequest {
  /** 需查询的通道ID。 */
  ProxyId: string;
}

declare interface DescribeProxyDetailResponse {
  /** 通道详情信息。 */
  ProxyDetail?: ProxyInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyGroupDetailsRequest {
  /** 通道组ID。 */
  GroupId: string;
}

declare interface DescribeProxyGroupDetailsResponse {
  /** 通道组详细信息。 */
  ProxyGroupDetail?: ProxyGroupDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyGroupListRequest {
  /** 偏移量，默认值为0。 */
  Offset: number;
  /** 返回数量，默认值为20，最大值为100。 */
  Limit: number;
  /** 项目ID。取值范围：-1，该用户下所有项目0，默认项目其他值，指定的项目 */
  ProjectId: number;
  /** 过滤条件。 每次请求的Filter.Values的上限为5。RealServerRegion - String - 是否必填：否 -（过滤条件）按照源站地域过滤，可参考DescribeDestRegions接口返回结果中的RegionId。PackageType - String - 是否必填：否 - （过滤条件）通道组类型，Thunder表示标准通道组，Accelerator表示银牌加速通道组。 */
  Filters?: Filter[];
  /** 标签列表，当存在该字段时，拉取对应标签下的资源列表。最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，该通道组会被拉取出来。 */
  TagSet?: TagPair[];
}

declare interface DescribeProxyGroupListResponse {
  /** 通道组总数。 */
  TotalCount?: number;
  /** 通道组列表。 */
  ProxyGroupList?: ProxyGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyGroupStatisticsRequest {
  /** 通道组ID */
  GroupId: string;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 统计指标名称列表，支持: 入带宽:InBandwidth, 出带宽:OutBandwidth, 并发:Concurrent, 入包量:InPackets, 出包量:OutPackets */
  MetricNames: string[];
  /** 监控粒度，目前支持60，300，3600，86400，单位：秒。当时间范围不超过1天，支持最小粒度60秒；当时间范围不超过7天，支持最小粒度3600秒；当时间范围不超过30天，支持最小粒度86400秒。 */
  Granularity: number;
}

declare interface DescribeProxyGroupStatisticsResponse {
  /** 通道组统计数据 */
  StatisticsData: MetricStatisticsInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyStatisticsRequest {
  /** 通道ID */
  ProxyId: string;
  /** 起始时间(2019-03-25 12:00:00) */
  StartTime: string;
  /** 结束时间(2019-03-25 12:00:00) */
  EndTime: string;
  /** 统计指标名称列表，支持: 入带宽:InBandwidth, 出带宽:OutBandwidth, 并发:Concurrent, 入包量:InPackets, 出包量:OutPackets, 丢包率:PacketLoss, 延迟:Latency，HTTP请求量：HttpQPS, HTTP请求量利用率：HttpQPSPercent,HTTPS请求量：HttpsQPS,HTTPS请求量利用率：HttpsQPSPercent */
  MetricNames: string[];
  /** 监控粒度，目前支持60，300，3600，86400，单位：秒。当时间范围不超过3天，支持最小粒度60秒；当时间范围不超过7天，支持最小粒度300秒；当时间范围不超过30天，支持最小粒度3600秒。 */
  Granularity: number;
  /** 运营商（通道为三网通道时有效），支持CMCC，CUCC，CTCC，传空值或不传则合并三个运营商数据 */
  Isp?: string;
}

declare interface DescribeProxyStatisticsResponse {
  /** 通道统计数据 */
  StatisticsData?: MetricStatisticsInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRealServerStatisticsRequest {
  /** 源站ID */
  RealServerId: string;
  /** 监听器ID */
  ListenerId?: string;
  /** L7层规则ID */
  RuleId?: string;
  /** 统计时长，单位：小时。仅支持最近1,3,6,12,24小时的统计查询 */
  WithinTime?: number;
  /** 统计开始时间(2020-08-19 00:00:00) */
  StartTime?: string;
  /** 统计结束时间(2020-08-19 23:59:59) */
  EndTime?: string;
  /** 统计的数据粒度，单位：秒，仅支持1分钟-60和5分钟-300粒度 */
  Granularity?: number;
}

declare interface DescribeRealServerStatisticsResponse {
  /** 指定监听器的源站状态统计数据 */
  StatisticsData?: StatisticsDataInfo[];
  /** 多个源站状态统计数据 */
  RsStatisticsData?: MetricStatisticsInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRealServersRequest {
  /** 查询源站的所属项目ID，-1表示所有项目 */
  ProjectId: number;
  /** 需要查询的源站IP或域名，支持模糊匹配 */
  SearchValue?: string;
  /** 偏移量，默认值是0 */
  Offset?: number;
  /** 返回数量，默认为20个，最大值为50个 */
  Limit?: number;
  /** 标签列表，当存在该字段时，拉取对应标签下的资源列表。最多支持5个标签，当存在两个或两个以上的标签时，满足其中任意一个标签时，源站会被拉取出来。 */
  TagSet?: TagPair[];
  /** 过滤条件。filter的name取值(RealServerName,RealServerIP) */
  Filters?: Filter[];
}

declare interface DescribeRealServersResponse {
  /** 源站信息列表 */
  RealServerSet: BindRealServerInfo[];
  /** 查询得到的源站数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRealServersStatusRequest {
  /** 源站ID列表 */
  RealServerIds: string[];
}

declare interface DescribeRealServersStatusResponse {
  /** 返回源站查询结果的个数 */
  TotalCount?: number;
  /** 源站被绑定状态列表 */
  RealServerStatusSet?: RealServerStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionAndPriceRequest {
  /** IP版本，可取值：IPv4、IPv6，默认值IPv4 */
  IPAddressVersion?: string;
  /** 通道套餐类型，Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。 */
  PackageType?: string;
}

declare interface DescribeRegionAndPriceResponse {
  /** 源站区域总数 */
  TotalCount?: number;
  /** 源站区域详情列表 */
  DestRegionSet?: RegionDetail[];
  /** 通道带宽费用梯度价格 */
  BandwidthUnitPrice?: BandwidthPriceGradient[];
  /** 带宽价格货币类型：CNY 人民币USD 美元 */
  Currency?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourcesByTagRequest {
  /** 标签键。 */
  TagKey: string;
  /** 标签值。 */
  TagValue: string;
  /** 资源类型，其中：Proxy表示通道；ProxyGroup表示通道组；RealServer表示源站。不指定该字段则查询该标签下所有资源。 */
  ResourceType?: string;
}

declare interface DescribeResourcesByTagResponse {
  /** 资源总数 */
  TotalCount?: number;
  /** 标签对应的资源列表 */
  ResourceSet?: TagResourceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleRealServersRequest {
  /** 转发规则ID */
  RuleId: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为1000。 */
  Limit?: number;
}

declare interface DescribeRuleRealServersResponse {
  /** 可绑定的源站个数 */
  TotalCount?: number;
  /** 可绑定的源站信息列表 */
  RealServerSet?: RealServer[];
  /** 已绑定的源站个数 */
  BindRealServerTotalCount?: number;
  /** 已绑定的源站信息列表 */
  BindRealServerSet?: BindRealServer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesByRuleIdsRequest {
  /** 规则ID列表。最多支持10个规则。 */
  RuleIds: string[];
}

declare interface DescribeRulesByRuleIdsResponse {
  /** 返回的规则总个数。 */
  TotalCount?: number;
  /** 返回的规则列表。 */
  RuleSet?: RuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesRequest {
  /** 7层监听器Id。 */
  ListenerId: string;
}

declare interface DescribeRulesResponse {
  /** 按照域名分类的规则信息列表 */
  DomainRuleSet?: DomainRuleSet[];
  /** 该监听器下的域名总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityPolicyDetailRequest {
  /** 安全策略ID */
  PolicyId: string;
}

declare interface DescribeSecurityPolicyDetailResponse {
  /** 通道ID */
  ProxyId: string | null;
  /** 安全策略状态：BOUND，已开启安全策略UNBIND，已关闭安全策略BINDING，安全策略开启中UNBINDING，安全策略关闭中。 */
  Status: string;
  /** 默认策略：ACCEPT或DROP。 */
  DefaultAction: string;
  /** 策略ID */
  PolicyId: string;
  /** 规则列表 */
  RuleList: SecurityPolicyRuleOut[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityRulesRequest {
  /** 安全规则ID列表。总数不能超过20个。 */
  SecurityRuleIds: string[];
}

declare interface DescribeSecurityRulesResponse {
  /** 返回的安全规则详情总数。 */
  TotalCount: number;
  /** 返回的安全规则详情列表。 */
  SecurityRuleSet: SecurityPolicyRuleOut[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTCPListenersRequest {
  /** 过滤条件，根据通道ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。 */
  ProxyId?: string;
  /** 过滤条件，根据监听器ID精确查询。当设置了ProxyId时，会检查该监听器是否归属于该通道。当设置了GroupId时，会检查该监听器是否归属于该通道组。 */
  ListenerId?: string;
  /** 过滤条件，根据监听器名称精确查询 */
  ListenerName?: string;
  /** 过滤条件，根据监听器端口精确查询 */
  Port?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 限制数量，默认为20 */
  Limit?: number;
  /** 过滤条件，根据通道组ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。 */
  GroupId?: string;
  /** 过滤条件，支持按照端口或监听器名称进行模糊查询，该参数不能与ListenerName和Port同时使用 */
  SearchValue?: string;
}

declare interface DescribeTCPListenersResponse {
  /** 满足条件的监听器总个数 */
  TotalCount?: number;
  /** TCP监听器列表 */
  ListenerSet?: TCPListener[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskStatusRequest {
  /** 任务ID，值为异步接口返回的RequestId，此参数不能传空值。 */
  TaskId?: string;
}

declare interface DescribeTaskStatusResponse {
  /** 任务状态：RUNNING，FAIL，SUCCESS */
  Status?: string;
  /** 任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUDPListenersRequest {
  /** 过滤条件，根据通道ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。 */
  ProxyId?: string;
  /** 过滤条件，根据监听器ID精确查询。当设置了ProxyId时，会检查该监听器是否归属于该通道。当设置了GroupId时，会检查该监听器是否归属于该通道组。 */
  ListenerId?: string;
  /** 过滤条件，根据监听器名称精确查询 */
  ListenerName?: string;
  /** 过滤条件，根据监听器端口精确查询 */
  Port?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 限制数量，默认为20 */
  Limit?: number;
  /** 过滤条件，根据通道组ID进行拉取，ProxyId/GroupId/ListenerId必须设置一个，但ProxyId和GroupId不能同时设置。 */
  GroupId?: string;
  /** 过滤条件，支持按照端口或监听器名称进行模糊查询，该参数不能与ListenerName和Port同时使用 */
  SearchValue?: string;
}

declare interface DescribeUDPListenersResponse {
  /** 监听器个数 */
  TotalCount?: number;
  /** UDP监听器列表 */
  ListenerSet?: UDPListener[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyProxiesRequest {
  /** 强制删除标识。1，强制删除该通道列表，无论是否已经绑定了源站；0，如果已绑定了源站，则无法删除。删除多通道时，如果该标识为0，只有所有的通道都没有绑定源站，才允许删除。 */
  Force: number;
  /** （旧参数，请切换到ProxyIds）通道实例ID列表。 */
  InstanceIds?: string[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性。 */
  ClientToken?: string;
  /** （新参数）通道实例ID列表。 */
  ProxyIds?: string[];
}

declare interface DestroyProxiesResponse {
  /** 处于不可销毁状态下的通道实例ID列表。 */
  InvalidStatusInstanceSet?: string[];
  /** 销毁操作失败的通道实例ID列表。 */
  OperationFailedInstanceSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableGlobalDomainRequest {
  /** 域名ID */
  DomainId: string;
}

declare interface DisableGlobalDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableGlobalDomainRequest {
  /** 域名ID */
  DomainId: string;
}

declare interface EnableGlobalDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceCreateProxyRequest {
  /** 加速区域名称。 */
  AccessRegion: string;
  /** 通道带宽上限，单位：Mbps。 */
  Bandwidth: number;
  /** （旧参数，请切换到RealServerRegion）源站区域名称。 */
  DestRegion?: string;
  /** （此参数为旧参数，请填写新参数Concurrent，二者必须填写一个）通道并发量上限，表示同时在线的连接数，单位：万。 */
  Concurrency?: number;
  /** （新参数）源站区域名称。 */
  RealServerRegion?: string;
  /** （新参数）通道并发量上限，表示同时在线的连接数，单位：万。 */
  Concurrent?: number;
  /** 计费方式，0表示按带宽计费，1表示按流量计费。默认按带宽计费 */
  BillingType?: number;
  /** IP版本，可取值：IPv4、IPv6，默认值IPv4 */
  IPAddressVersion?: string;
  /** 网络类型，可取值：normal、cn2，默认值normal */
  NetworkType?: string;
  /** 通道套餐类型，Thunder表示标准通道组，Accelerator表示游戏加速器通道，CrossBorder表示跨境通道。 */
  PackageType?: string;
  /** 该字段已废弃，当IPAddressVersion为IPv4时，所创建的通道默认支持Http3.0；当为IPv6，默认不支持Http3.0。 */
  Http3Supported?: number;
}

declare interface InquiryPriceCreateProxyResponse {
  /** 通道基础费用价格，单位：元/天。 */
  ProxyDailyPrice?: number;
  /** 通道带宽费用梯度价格。 */
  BandwidthUnitPrice?: BandwidthPriceGradient[] | null;
  /** 通道基础费用折扣价格，单位：元/天。 */
  DiscountProxyDailyPrice?: number;
  /** 价格使用的货币，支持人民币，美元等。 */
  Currency?: string;
  /** 通道的流量费用价格，单位: 元/GB */
  FlowUnitPrice?: number | null;
  /** 通道的流量费用折扣价格，单位:元/GB */
  DiscountFlowUnitPrice?: number | null;
  /** 精品BGP的带宽费用价格，单位: 元/Mbps/天 */
  Cn2BandwidthPrice?: number;
  /** 精品BGP的折后带宽费用价格，单位: 元/Mbps/天 */
  Cn2BandwidthPriceWithDiscount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCertificateAttributesRequest {
  /** 证书ID。 */
  CertificateId: string;
  /** 证书名字。长度不超过50个字符。 */
  CertificateAlias?: string;
}

declare interface ModifyCertificateAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCertificateRequest {
  /** 监听器实例ID */
  ListenerId: string;
  /** 需要修改证书的域名 */
  Domain: string;
  /** 新的服务器证书ID。其中：当CertificateId=default时，表示使用监听器的证书。 */
  CertificateId: string;
  /** 新的客户端证书ID。其中：当ClientCertificateId=default时，表示使用监听器的证书。仅当采用双向认证方式时，需要设置该参数或者PolyClientCertificateIds。 */
  ClientCertificateId?: string;
  /** 新的多客户端证书ID列表。其中：仅当采用双向认证方式时，需要设置该参数或ClientCertificateId参数。 */
  PolyClientCertificateIds?: string[];
}

declare interface ModifyCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainRequest {
  /** 7层监听器ID */
  ListenerId: string;
  /** 修改前的域名信息 */
  OldDomain: string;
  /** 修改后的域名信息 */
  NewDomain: string;
  /** 服务器SSL证书ID，仅适用于version3.0的通道。其中：不带该字段时，表示使用原证书；携带该字段时并且CertificateId=default，表示使用监听器证书；其他情况，使用该CertificateId指定的证书。 */
  CertificateId?: string;
  /** 客户端CA证书ID，仅适用于version3.0的通道。其中：不带该字段和PolyClientCertificateIds时，表示使用原证书；携带该字段时并且ClientCertificateId=default，表示使用监听器证书；其他情况，使用该ClientCertificateId或PolyClientCertificateIds指定的证书。 */
  ClientCertificateId?: string;
  /** 客户端CA证书ID，仅适用于version3.0的通道。其中：不带该字段和ClientCertificateId时，表示使用原证书；携带该字段时并且ClientCertificateId=default，表示使用监听器证书；其他情况，使用该ClientCertificateId或PolyClientCertificateIds指定的证书。 */
  PolyClientCertificateIds?: string[];
  /** 是否作为默认域名，默认为“否” */
  IsDefaultServer?: boolean;
}

declare interface ModifyDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGlobalDomainAttributeRequest {
  /** 域名ID */
  DomainId: string;
  /** 项目ID */
  ProjectId: number;
  /** 别名 */
  Alias?: string;
  /** 默认入口 */
  DefaultValue?: string;
}

declare interface ModifyGlobalDomainAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGlobalDomainDnsRequest {
  /** 解析记录ID */
  DnsRecordId: number;
  /** 域名ID */
  DomainId: string;
  /** 国家ID列表 */
  NationCountryInnerCodes: string[];
  /** 通道ID列表 */
  ProxyIdList: string[];
}

declare interface ModifyGlobalDomainDnsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGroupDomainConfigRequest {
  /** 通道组ID。 */
  GroupId: string;
  /** 域名解析默认访问IP或域名。 */
  DefaultDnsIp: string;
  /** 就近接入区域配置。 */
  AccessRegionList?: AccessRegionDomainConf[];
}

declare interface ModifyGroupDomainConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHTTPListenerAttributeRequest {
  /** 需要修改的监听器ID */
  ListenerId: string;
  /** 新的监听器名称 */
  ListenerName: string;
  /** 通道ID */
  ProxyId?: string;
}

declare interface ModifyHTTPListenerAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHTTPSListenerAttributeRequest {
  /** 监听器ID */
  ListenerId: string;
  /** 通道ID， 若为单通道监听器，此项必须填写 */
  ProxyId?: string;
  /** 修改后的监听器名称 */
  ListenerName?: string;
  /** 监听器后端转发与源站之间的协议类型 */
  ForwardProtocol?: string;
  /** 修改后的监听器服务器证书ID */
  CertificateId?: string;
  /** 修改后的监听器客户端证书ID，不支持多客户端证书，多客户端证书新采用PolyClientCertificateIds字段 */
  ClientCertificateId?: string;
  /** 新字段,修改后的监听器客户端证书ID */
  PolyClientCertificateIds?: string[];
}

declare interface ModifyHTTPSListenerAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProxiesAttributeRequest {
  /** （旧参数，请切换到ProxyIds）一个或多个待操作的通道ID。 */
  InstanceIds?: string[];
  /** 通道名称。可任意命名，但不得超过32个字符。 */
  ProxyName?: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性。 */
  ClientToken?: string;
  /** （新参数）一个或多个待操作的通道ID。 */
  ProxyIds?: string[];
}

declare interface ModifyProxiesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProxiesProjectRequest {
  /** 需要修改到的项目ID。 */
  ProjectId: number;
  /** （旧参数，请切换到ProxyIds）一个或多个待操作的通道ID。 */
  InstanceIds?: string[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性。 */
  ClientToken?: string;
  /** （新参数）一个或多个待操作的通道ID。 */
  ProxyIds?: string[];
}

declare interface ModifyProxiesProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProxyConfigurationRequest {
  /** （旧参数，请切换到ProxyId）通道的实例ID。 */
  InstanceId?: string;
  /** 需要调整到的目标带宽，单位：Mbps。Bandwidth与Concurrent必须至少设置一个。取值范围根据DescribeAccessRegionsByDestRegion接口获取得到 */
  Bandwidth?: number;
  /** 需要调整到的目标并发值，单位：万。Bandwidth与Concurrent必须至少设置一个。取值范围根据DescribeAccessRegionsByDestRegion接口获取得到 */
  Concurrent?: number;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性。 */
  ClientToken?: string;
  /** （新参数）通道的实例ID。 */
  ProxyId?: string;
  /** 计费方式 (0:按带宽计费，1:按流量计费 默认按带宽计费） */
  BillingType?: number;
}

declare interface ModifyProxyConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProxyGroupAttributeRequest {
  /** 需要修改的通道组ID。 */
  GroupId: string;
  /** 修改后的通道组名称：不超过30个字符，否则修改失败。 */
  GroupName?: string;
  /** 项目ID */
  ProjectId?: number;
}

declare interface ModifyProxyGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRealServerNameRequest {
  /** 源站名称 */
  RealServerName: string;
  /** 源站ID */
  RealServerId: string;
}

declare interface ModifyRealServerNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleAttributeRequest {
  /** 监听器ID */
  ListenerId: string;
  /** 转发规则ID */
  RuleId: string;
  /** 监听器源站访问策略，其中：rr表示轮询；wrr表示加权轮询；lc表示最小连接数；lrtt表示最小时延。 */
  Scheduler?: string;
  /** 源站健康检查开关，其中：1，开启；0，关闭。 */
  HealthCheck?: number;
  /** 健康检查配置参数 */
  CheckParams?: RuleCheckParams;
  /** 转发规则路径 */
  Path?: string;
  /** 加速通道转发到源站的协议类型，支持：default, HTTP和HTTPS。当ForwardProtocol=default时，表示使用对应监听器的ForwardProtocol。 */
  ForwardProtocol?: string;
  /** 回源Host。加速通道转发到源站的请求中携带的host。当ForwardHost=default时，使用规则的域名，其他情况为该字段所设置的值。 */
  ForwardHost?: string;
  /** 服务器名称指示（ServerNameIndication，简称SNI）开关。ON表示开启，OFF表示关闭。 */
  ServerNameIndicationSwitch?: string;
  /** 服务器名称指示（ServerNameIndication，简称SNI），当SNI开关打开时，该字段必填。 */
  ServerNameIndication?: string;
  /** HTTP强制跳转HTTPS。输入当前规则对应的域名与地址。 */
  ForcedRedirect?: string;
}

declare interface ModifyRuleAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityRuleRequest {
  /** 规则ID */
  RuleId: string;
  /** 规则名：不得超过30个字符，超过部分会被截断。 */
  AliasName: string;
  /** 安全策略ID */
  PolicyId: string;
  /** 安全规则动作 */
  RuleAction?: string;
  /** 规则关联地址，格式需要满足CIDR网络地址规范 */
  SourceCidr?: string;
  /** 协议类型 */
  Protocol?: string;
  /** 端口范围，支持以下格式单个端口: 80多个端口: 80,443连续端口: 3306-20000所有端口: ALL */
  DestPortRange?: string;
}

declare interface ModifySecurityRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTCPListenerAttributeRequest {
  /** 监听器ID */
  ListenerId: string;
  /** 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。 */
  GroupId?: string;
  /** 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。 */
  ProxyId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 监听器源站访问策略，其中：rr表示轮询；wrr表示加权轮询；lc表示最小连接数；lrtt表示最小时延。注意：lrtt需要开通白名单；RealServerType 为 DOMAIN 不支持wrr 和 lrtt。 */
  Scheduler?: string;
  /** 源站健康检查时间间隔，单位：秒。时间间隔取值在[5，300]之间。 */
  DelayLoop?: number;
  /** 源站健康检查响应超时时间，单位：秒。超时时间取值在[2，60]之间。超时时间应小于健康检查时间间隔DelayLoop。 */
  ConnectTimeout?: number;
  /** 是否开启健康检查，1开启，0关闭。 */
  HealthCheck?: number;
  /** 源站是否开启主备模式：1开启，0关闭，DOMAIN类型源站不支持开启 */
  FailoverSwitch?: number;
  /** 健康阈值，表示连续检查成功多少次数后认定源站健康。范围为1到10 */
  HealthyThreshold?: number;
  /** 不健康阈值，表示连续检查失败次数后认定源站不健康。范围为1到10 */
  UnhealthyThreshold?: number;
}

declare interface ModifyTCPListenerAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUDPListenerAttributeRequest {
  /** 监听器ID */
  ListenerId: string;
  /** 通道组ID，ProxyId和GroupId必须设置一个，但不能同时设置。 */
  GroupId?: string;
  /** 通道ID，ProxyId和GroupId必须设置一个，但不能同时设置。 */
  ProxyId?: string;
  /** 监听器名称 */
  ListenerName?: string;
  /** 监听器源站访问策略，其中：rr表示轮询；wrr表示加权轮询；lc表示最小连接数；lrtt表示最小时延。 */
  Scheduler?: string;
  /** 源站健康检查时间间隔，单位：秒。时间间隔取值在[5，300]之间。 */
  DelayLoop?: number;
  /** 源站健康检查响应超时时间，单位：秒。超时时间取值在[2，60]之间。超时时间应小于健康检查时间间隔DelayLoop。 */
  ConnectTimeout?: number;
  /** 健康阈值，表示连续检查成功多少次后认定源站健康。范围为1到10 */
  HealthyThreshold?: number;
  /** 不健康阈值，表示连续检查失败多少次数后认为源站不健康。范围为1到10 */
  UnhealthyThreshold?: number;
  /** 源站是否开启主备模式：1开启，0关闭，DOMAIN类型源站不支持开启 */
  FailoverSwitch?: number;
  /** 源站是否开启健康检查：1开启，0关闭。 */
  HealthCheck?: number;
  /** UDP源站健康类型。PORT表示检查端口，PING表示PING。 */
  CheckType?: string;
  /** UDP源站健康检查探测端口。 */
  CheckPort?: number;
  /** UDP源站健康检查端口探测报文类型：TEXT表示文本。仅在健康检查类型为PORT时使用。 */
  ContextType?: string;
  /** UDP源站健康检查端口探测发送报文。仅在健康检查类型为PORT时使用。 */
  SendContext?: string;
  /** UDP源站健康检查端口探测接收报文。仅在健康检查类型为PORT时使用。 */
  RecvContext?: string;
}

declare interface ModifyUDPListenerAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenProxiesRequest {
  /** （旧参数，请切换到ProxyIds）通道的实例ID列表。 */
  InstanceIds?: string[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性。 */
  ClientToken?: string;
  /** （新参数）通道的实例ID列表。 */
  ProxyIds?: string[];
}

declare interface OpenProxiesResponse {
  /** 非关闭状态下的通道实例ID列表，不可开启。 */
  InvalidStatusInstanceSet?: string[];
  /** 开启操作失败的通道实例ID列表。 */
  OperationFailedInstanceSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenProxyGroupRequest {
  /** 通道组实例 ID */
  GroupId: string;
}

declare interface OpenProxyGroupResponse {
  /** 非关闭状态下的通道实例ID列表，不可开启。 */
  InvalidStatusInstanceSet?: string[];
  /** 开启操作失败的通道实例ID列表。 */
  OperationFailedInstanceSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenSecurityPolicyRequest {
  /** 需开启安全策略的通道ID */
  ProxyId?: string;
  /** 安全策略ID */
  PolicyId?: string;
}

declare interface OpenSecurityPolicyResponse {
  /** 异步流程ID，可以通过DescribeAsyncTaskStatus接口查询流程运行状态 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveRealServersRequest {
  /** 源站Id列表 */
  RealServerIds: string[];
}

declare interface RemoveRealServersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetAuthenticationRequest {
  /** 监听器ID。 */
  ListenerId: string;
  /** 需要进行高级配置的域名，该域名为监听器下的转发规则的域名。 */
  Domain: string;
  /** 基础认证开关，其中：0，关闭基础认证；1，开启基础认证。默认为0。 */
  BasicAuth?: number;
  /** 通道认证开关，用于源站对Gaap的认证，其中：0，关闭通道认证；1，开启通道认证。默认为0。 */
  GaapAuth?: number;
  /** 源站认证开关，用于Gaap对服务器的认证，其中：0，关闭源站认证；1，开启源站认证。默认为0。 */
  RealServerAuth?: number;
  /** 基础认证配置ID，从证书管理页获取。 */
  BasicAuthConfId?: string;
  /** 通道SSL证书ID，从证书管理页获取。 */
  GaapCertificateId?: string;
  /** 源站CA证书ID，从证书管理页获取。源站认证时，填写该参数或RealServerCertificateId参数 */
  RealServerCertificateId?: string;
  /** 该字段已废弃，请使用创建规则和修改规则中的SNI功能。 */
  RealServerCertificateDomain?: string;
  /** 多源站CA证书ID，从证书管理页获取。源站认证时，填写该参数或RealServerCertificateId参数 */
  PolyRealServerCertificateIds?: string[];
  /** TLS支持的版本支持TLSv1，TLSv1.1,TLSv1.2,TLSv1.3 */
  TLSSupportVersion?: string[];
  /** 支持的TLS密码套件，可选值为：[GAAP_TLS_CIPHERS_WIDE,GAAPTLS_CIPHERS_GENERAL,GAAPTLS_CIPHERS_STRICT] */
  TLSCiphers?: string;
}

declare interface SetAuthenticationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetTlsVersionRequest {
  /** 监听器ID */
  ListenerId: string;
  /** TLS版本,可选TLSv1、TLSv1.1、TLSv1.2、TLSv1.3 */
  TLSSupportVersion: string[];
  /** 密码套件包,可选 GAAP_TLS_CIPHERS_STRICT，GAAP_TLS_CIPHERS_GENERAL，GAAP_TLS_CIPHERS_WIDE(默认) */
  TLSCiphers: string;
}

declare interface SetTlsVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Gaap 全球应用加速} */
declare interface Gaap {
  (): Versions;
  /** 添加源站 {@link AddRealServersRequest} {@link AddRealServersResponse} */
  AddRealServers(data: AddRealServersRequest, config?: AxiosRequestConfig): AxiosPromise<AddRealServersResponse>;
  /** 封禁解封跨境通道实例 {@link BanAndRecoverProxyRequest} {@link BanAndRecoverProxyResponse} */
  BanAndRecoverProxy(data?: BanAndRecoverProxyRequest, config?: AxiosRequestConfig): AxiosPromise<BanAndRecoverProxyResponse>;
  /** 监听器绑定源站 {@link BindListenerRealServersRequest} {@link BindListenerRealServersResponse} */
  BindListenerRealServers(data: BindListenerRealServersRequest, config?: AxiosRequestConfig): AxiosPromise<BindListenerRealServersResponse>;
  /** 转发规则绑定源站 {@link BindRuleRealServersRequest} {@link BindRuleRealServersResponse} */
  BindRuleRealServers(data: BindRuleRealServersRequest, config?: AxiosRequestConfig): AxiosPromise<BindRuleRealServersResponse>;
  /** 查询通道是否可以创建 {@link CheckProxyCreateRequest} {@link CheckProxyCreateResponse} */
  CheckProxyCreate(data: CheckProxyCreateRequest, config?: AxiosRequestConfig): AxiosPromise<CheckProxyCreateResponse>;
  /** 关闭通道 {@link CloseProxiesRequest} {@link CloseProxiesResponse} */
  CloseProxies(data?: CloseProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<CloseProxiesResponse>;
  /** 关闭通道组 {@link CloseProxyGroupRequest} {@link CloseProxyGroupResponse} */
  CloseProxyGroup(data: CloseProxyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CloseProxyGroupResponse>;
  /** 关闭安全策略 {@link CloseSecurityPolicyRequest} {@link CloseSecurityPolicyResponse} */
  CloseSecurityPolicy(data?: CloseSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CloseSecurityPolicyResponse>;
  /** 创建证书 {@link CreateCertificateRequest} {@link CreateCertificateResponse} */
  CreateCertificate(data: CreateCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCertificateResponse>;
  /** 创建自定义header {@link CreateCustomHeaderRequest} {@link CreateCustomHeaderResponse} */
  CreateCustomHeader(data: CreateCustomHeaderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomHeaderResponse>;
  /** 创建HTTPS监听器的访问域名 {@link CreateDomainRequest} {@link CreateDomainResponse} */
  CreateDomain(data: CreateDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainResponse>;
  /** 定制域名指定错误码的错误响应 {@link CreateDomainErrorPageInfoRequest} {@link CreateDomainErrorPageInfoResponse} */
  CreateDomainErrorPageInfo(data: CreateDomainErrorPageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDomainErrorPageInfoResponse>;
  /** 创建域名 {@link CreateGlobalDomainRequest} {@link CreateGlobalDomainResponse} */
  CreateGlobalDomain(data: CreateGlobalDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGlobalDomainResponse>;
  /** 创建域名解析记录 {@link CreateGlobalDomainDnsRequest} {@link CreateGlobalDomainDnsResponse} */
  CreateGlobalDomainDns(data: CreateGlobalDomainDnsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGlobalDomainDnsResponse>;
  /** 创建HTTP监听器 {@link CreateHTTPListenerRequest} {@link CreateHTTPListenerResponse} */
  CreateHTTPListener(data: CreateHTTPListenerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHTTPListenerResponse>;
  /** 创建HTTPS监听器 {@link CreateHTTPSListenerRequest} {@link CreateHTTPSListenerResponse} */
  CreateHTTPSListener(data: CreateHTTPSListenerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHTTPSListenerResponse>;
  /** 创建通道 {@link CreateProxyRequest} {@link CreateProxyResponse} */
  CreateProxy(data: CreateProxyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProxyResponse>;
  /** 创建通道组 {@link CreateProxyGroupRequest} {@link CreateProxyGroupResponse} */
  CreateProxyGroup(data: CreateProxyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProxyGroupResponse>;
  /** 开通通道组域名（废弃） {@link CreateProxyGroupDomainRequest} {@link CreateProxyGroupDomainResponse} */
  CreateProxyGroupDomain(data: CreateProxyGroupDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProxyGroupDomainResponse>;
  /** 创建监听器转发规则 {@link CreateRuleRequest} {@link CreateRuleResponse} */
  CreateRule(data: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 创建安全策略 {@link CreateSecurityPolicyRequest} {@link CreateSecurityPolicyResponse} */
  CreateSecurityPolicy(data: CreateSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityPolicyResponse>;
  /** 添加安全策略规则 {@link CreateSecurityRulesRequest} {@link CreateSecurityRulesResponse} */
  CreateSecurityRules(data: CreateSecurityRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityRulesResponse>;
  /** 创建TCP监听器 {@link CreateTCPListenersRequest} {@link CreateTCPListenersResponse} */
  CreateTCPListeners(data: CreateTCPListenersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTCPListenersResponse>;
  /** 创建UDP监听器 {@link CreateUDPListenersRequest} {@link CreateUDPListenersResponse} */
  CreateUDPListeners(data: CreateUDPListenersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUDPListenersResponse>;
  /** 删除证书 {@link DeleteCertificateRequest} {@link DeleteCertificateResponse} */
  DeleteCertificate(data: DeleteCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCertificateResponse>;
  /** 根据域名删除转发规则 {@link DeleteDomainRequest} {@link DeleteDomainResponse} */
  DeleteDomain(data: DeleteDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainResponse>;
  /** 删除域名的定制错误 {@link DeleteDomainErrorPageInfoRequest} {@link DeleteDomainErrorPageInfoResponse} */
  DeleteDomainErrorPageInfo(data: DeleteDomainErrorPageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainErrorPageInfoResponse>;
  /** 删除域名 {@link DeleteGlobalDomainRequest} {@link DeleteGlobalDomainResponse} */
  DeleteGlobalDomain(data: DeleteGlobalDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGlobalDomainResponse>;
  /** 删除域名解析记录 {@link DeleteGlobalDomainDnsRequest} {@link DeleteGlobalDomainDnsResponse} */
  DeleteGlobalDomainDns(data: DeleteGlobalDomainDnsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGlobalDomainDnsResponse>;
  /** 删除通道监听器 {@link DeleteListenersRequest} {@link DeleteListenersResponse} */
  DeleteListeners(data: DeleteListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteListenersResponse>;
  /** 删除通道组 {@link DeleteProxyGroupRequest} {@link DeleteProxyGroupResponse} */
  DeleteProxyGroup(data: DeleteProxyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProxyGroupResponse>;
  /** 删除7层监听器转发规则 {@link DeleteRuleRequest} {@link DeleteRuleResponse} */
  DeleteRule(data: DeleteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleResponse>;
  /** 删除安全策略 {@link DeleteSecurityPolicyRequest} {@link DeleteSecurityPolicyResponse} */
  DeleteSecurityPolicy(data: DeleteSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityPolicyResponse>;
  /** 删除安全策略规则 {@link DeleteSecurityRulesRequest} {@link DeleteSecurityRulesResponse} */
  DeleteSecurityRules(data: DeleteSecurityRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityRulesResponse>;
  /** 查询加速区域 {@link DescribeAccessRegionsRequest} {@link DescribeAccessRegionsResponse} */
  DescribeAccessRegions(data?: DescribeAccessRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessRegionsResponse>;
  /** 根据源站区域查询可用加速区域 {@link DescribeAccessRegionsByDestRegionRequest} {@link DescribeAccessRegionsByDestRegionResponse} */
  DescribeAccessRegionsByDestRegion(data: DescribeAccessRegionsByDestRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessRegionsByDestRegionResponse>;
  /** 获取计费签名 {@link DescribeAuthSignatureRequest} {@link DescribeAuthSignatureResponse} */
  DescribeAuthSignature(data?: DescribeAuthSignatureRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthSignatureResponse>;
  /** 查询禁用自定义header 名称列表 {@link DescribeBlackHeaderRequest} {@link DescribeBlackHeaderResponse} */
  DescribeBlackHeader(data?: DescribeBlackHeaderRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlackHeaderResponse>;
  /** 查询证书详情 {@link DescribeCertificateDetailRequest} {@link DescribeCertificateDetailResponse} */
  DescribeCertificateDetail(data: DescribeCertificateDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateDetailResponse>;
  /** 查询服务器证书列表 {@link DescribeCertificatesRequest} {@link DescribeCertificatesResponse} */
  DescribeCertificates(data?: DescribeCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificatesResponse>;
  /** 获取国家地区编码映射表 {@link DescribeCountryAreaMappingRequest} {@link DescribeCountryAreaMappingResponse} */
  DescribeCountryAreaMapping(data?: DescribeCountryAreaMappingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCountryAreaMappingResponse>;
  /** 查询跨境通道实例列表 {@link DescribeCrossBorderProxiesRequest} {@link DescribeCrossBorderProxiesResponse} */
  DescribeCrossBorderProxies(data?: DescribeCrossBorderProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderProxiesResponse>;
  /** 查询自定义header列表 {@link DescribeCustomHeaderRequest} {@link DescribeCustomHeaderResponse} */
  DescribeCustomHeader(data: DescribeCustomHeaderRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomHeaderResponse>;
  /** 查询源站区域 {@link DescribeDestRegionsRequest} {@link DescribeDestRegionsResponse} */
  DescribeDestRegions(data?: DescribeDestRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDestRegionsResponse>;
  /** 查询目前定制域名的错误响应 {@link DescribeDomainErrorPageInfoRequest} {@link DescribeDomainErrorPageInfoResponse} */
  DescribeDomainErrorPageInfo(data: DescribeDomainErrorPageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainErrorPageInfoResponse>;
  /** 根据定制错误ID查询错误响应 {@link DescribeDomainErrorPageInfoByIdsRequest} {@link DescribeDomainErrorPageInfoByIdsResponse} */
  DescribeDomainErrorPageInfoByIds(data: DescribeDomainErrorPageInfoByIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainErrorPageInfoByIdsResponse>;
  /** 查询域名解析列表 {@link DescribeGlobalDomainDnsRequest} {@link DescribeGlobalDomainDnsResponse} */
  DescribeGlobalDomainDns(data: DescribeGlobalDomainDnsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGlobalDomainDnsResponse>;
  /** 查询域名列表 {@link DescribeGlobalDomainsRequest} {@link DescribeGlobalDomainsResponse} */
  DescribeGlobalDomains(data: DescribeGlobalDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGlobalDomainsResponse>;
  /** 查询统计通道组和通道信息 {@link DescribeGroupAndStatisticsProxyRequest} {@link DescribeGroupAndStatisticsProxyResponse} */
  DescribeGroupAndStatisticsProxy(data: DescribeGroupAndStatisticsProxyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupAndStatisticsProxyResponse>;
  /** 获取通道组域名解析配置详情（废弃） {@link DescribeGroupDomainConfigRequest} {@link DescribeGroupDomainConfigResponse} */
  DescribeGroupDomainConfig(data: DescribeGroupDomainConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupDomainConfigResponse>;
  /** 查询HTTP监听器信息 {@link DescribeHTTPListenersRequest} {@link DescribeHTTPListenersResponse} */
  DescribeHTTPListeners(data?: DescribeHTTPListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHTTPListenersResponse>;
  /** 查询HTTPS监听器信息 {@link DescribeHTTPSListenersRequest} {@link DescribeHTTPSListenersResponse} */
  DescribeHTTPSListeners(data?: DescribeHTTPSListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHTTPSListenersResponse>;
  /** 查询监听器源站列表 {@link DescribeListenerRealServersRequest} {@link DescribeListenerRealServersResponse} */
  DescribeListenerRealServers(data: DescribeListenerRealServersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenerRealServersResponse>;
  /** 查询监听器统计数据 {@link DescribeListenerStatisticsRequest} {@link DescribeListenerStatisticsResponse} */
  DescribeListenerStatistics(data: DescribeListenerStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenerStatisticsResponse>;
  /** 查询通道实例列表 {@link DescribeProxiesRequest} {@link DescribeProxiesResponse} */
  DescribeProxies(data?: DescribeProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxiesResponse>;
  /** 查询通道状态列表 {@link DescribeProxiesStatusRequest} {@link DescribeProxiesStatusResponse} */
  DescribeProxiesStatus(data?: DescribeProxiesStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxiesStatusResponse>;
  /** 查询统计通道和监听器信息 {@link DescribeProxyAndStatisticsListenersRequest} {@link DescribeProxyAndStatisticsListenersResponse} */
  DescribeProxyAndStatisticsListeners(data: DescribeProxyAndStatisticsListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyAndStatisticsListenersResponse>;
  /** 查询通道详情 {@link DescribeProxyDetailRequest} {@link DescribeProxyDetailResponse} */
  DescribeProxyDetail(data: DescribeProxyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyDetailResponse>;
  /** 查询通道组详情 {@link DescribeProxyGroupDetailsRequest} {@link DescribeProxyGroupDetailsResponse} */
  DescribeProxyGroupDetails(data: DescribeProxyGroupDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyGroupDetailsResponse>;
  /** 拉取通道组列表 {@link DescribeProxyGroupListRequest} {@link DescribeProxyGroupListResponse} */
  DescribeProxyGroupList(data: DescribeProxyGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyGroupListResponse>;
  /** 查询通道组统计数据 {@link DescribeProxyGroupStatisticsRequest} {@link DescribeProxyGroupStatisticsResponse} */
  DescribeProxyGroupStatistics(data: DescribeProxyGroupStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyGroupStatisticsResponse>;
  /** 查询通道统计数据 {@link DescribeProxyStatisticsRequest} {@link DescribeProxyStatisticsResponse} */
  DescribeProxyStatistics(data: DescribeProxyStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyStatisticsResponse>;
  /** 查询已绑定源站健康检查统计数据(废弃) {@link DescribeRealServerStatisticsRequest} {@link DescribeRealServerStatisticsResponse} */
  DescribeRealServerStatistics(data: DescribeRealServerStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealServerStatisticsResponse>;
  /** 查询源站信息 {@link DescribeRealServersRequest} {@link DescribeRealServersResponse} */
  DescribeRealServers(data: DescribeRealServersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealServersResponse>;
  /** 查询源站绑定状态 {@link DescribeRealServersStatusRequest} {@link DescribeRealServersStatusResponse} */
  DescribeRealServersStatus(data: DescribeRealServersStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealServersStatusResponse>;
  /** 获取源站区域和带宽梯度价格 {@link DescribeRegionAndPriceRequest} {@link DescribeRegionAndPriceResponse} */
  DescribeRegionAndPrice(data?: DescribeRegionAndPriceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionAndPriceResponse>;
  /** 根据标签拉取资源列表 {@link DescribeResourcesByTagRequest} {@link DescribeResourcesByTagResponse} */
  DescribeResourcesByTag(data: DescribeResourcesByTagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesByTagResponse>;
  /** 查询转发规则相关源站信息 {@link DescribeRuleRealServersRequest} {@link DescribeRuleRealServersResponse} */
  DescribeRuleRealServers(data: DescribeRuleRealServersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleRealServersResponse>;
  /** 查询转发规则信息 {@link DescribeRulesRequest} {@link DescribeRulesResponse} */
  DescribeRules(data: DescribeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesResponse>;
  /** 根据规则ID拉取规则信息列表 {@link DescribeRulesByRuleIdsRequest} {@link DescribeRulesByRuleIdsResponse} */
  DescribeRulesByRuleIds(data: DescribeRulesByRuleIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesByRuleIdsResponse>;
  /** 获取安全策略详情 {@link DescribeSecurityPolicyDetailRequest} {@link DescribeSecurityPolicyDetailResponse} */
  DescribeSecurityPolicyDetail(data: DescribeSecurityPolicyDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityPolicyDetailResponse>;
  /** 根据安全规则ID查询安全规则详情列表 {@link DescribeSecurityRulesRequest} {@link DescribeSecurityRulesResponse} */
  DescribeSecurityRules(data: DescribeSecurityRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityRulesResponse>;
  /** 查询TCP监听器列表 {@link DescribeTCPListenersRequest} {@link DescribeTCPListenersResponse} */
  DescribeTCPListeners(data?: DescribeTCPListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTCPListenersResponse>;
  /** 查询异步任务状态 {@link DescribeTaskStatusRequest} {@link DescribeTaskStatusResponse} */
  DescribeTaskStatus(data?: DescribeTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStatusResponse>;
  /** 查询UDP监听器列表 {@link DescribeUDPListenersRequest} {@link DescribeUDPListenersResponse} */
  DescribeUDPListeners(data?: DescribeUDPListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUDPListenersResponse>;
  /** 销毁通道 {@link DestroyProxiesRequest} {@link DestroyProxiesResponse} */
  DestroyProxies(data: DestroyProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyProxiesResponse>;
  /** 暂停域名解析 {@link DisableGlobalDomainRequest} {@link DisableGlobalDomainResponse} */
  DisableGlobalDomain(data: DisableGlobalDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DisableGlobalDomainResponse>;
  /** 开启域名解析 {@link EnableGlobalDomainRequest} {@link EnableGlobalDomainResponse} */
  EnableGlobalDomain(data: EnableGlobalDomainRequest, config?: AxiosRequestConfig): AxiosPromise<EnableGlobalDomainResponse>;
  /** 创建加速通道询价 {@link InquiryPriceCreateProxyRequest} {@link InquiryPriceCreateProxyResponse} */
  InquiryPriceCreateProxy(data: InquiryPriceCreateProxyRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceCreateProxyResponse>;
  /** 修改域名对应的证书 {@link ModifyCertificateRequest} {@link ModifyCertificateResponse} */
  ModifyCertificate(data: ModifyCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCertificateResponse>;
  /** 修改证书属性 {@link ModifyCertificateAttributesRequest} {@link ModifyCertificateAttributesResponse} */
  ModifyCertificateAttributes(data: ModifyCertificateAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCertificateAttributesResponse>;
  /** 更新监听器转发规则域名 {@link ModifyDomainRequest} {@link ModifyDomainResponse} */
  ModifyDomain(data: ModifyDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainResponse>;
  /** 修改域名属性 {@link ModifyGlobalDomainAttributeRequest} {@link ModifyGlobalDomainAttributeResponse} */
  ModifyGlobalDomainAttribute(data: ModifyGlobalDomainAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGlobalDomainAttributeResponse>;
  /** 修改域名解析记录 {@link ModifyGlobalDomainDnsRequest} {@link ModifyGlobalDomainDnsResponse} */
  ModifyGlobalDomainDns(data: ModifyGlobalDomainDnsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGlobalDomainDnsResponse>;
  /** 配置通道组就近接入域名（废弃） {@link ModifyGroupDomainConfigRequest} {@link ModifyGroupDomainConfigResponse} */
  ModifyGroupDomainConfig(data: ModifyGroupDomainConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGroupDomainConfigResponse>;
  /** 修改HTTP监听器配置 {@link ModifyHTTPListenerAttributeRequest} {@link ModifyHTTPListenerAttributeResponse} */
  ModifyHTTPListenerAttribute(data: ModifyHTTPListenerAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHTTPListenerAttributeResponse>;
  /** 修改HTTPS监听器配置 {@link ModifyHTTPSListenerAttributeRequest} {@link ModifyHTTPSListenerAttributeResponse} */
  ModifyHTTPSListenerAttribute(data: ModifyHTTPSListenerAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHTTPSListenerAttributeResponse>;
  /** 修改通道的属性 {@link ModifyProxiesAttributeRequest} {@link ModifyProxiesAttributeResponse} */
  ModifyProxiesAttribute(data?: ModifyProxiesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProxiesAttributeResponse>;
  /** 修改通道所属项目 {@link ModifyProxiesProjectRequest} {@link ModifyProxiesProjectResponse} */
  ModifyProxiesProject(data: ModifyProxiesProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProxiesProjectResponse>;
  /** 修改通道配置 {@link ModifyProxyConfigurationRequest} {@link ModifyProxyConfigurationResponse} */
  ModifyProxyConfiguration(data?: ModifyProxyConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProxyConfigurationResponse>;
  /** 修改通道组属性 {@link ModifyProxyGroupAttributeRequest} {@link ModifyProxyGroupAttributeResponse} */
  ModifyProxyGroupAttribute(data: ModifyProxyGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProxyGroupAttributeResponse>;
  /** 修改源站名称 {@link ModifyRealServerNameRequest} {@link ModifyRealServerNameResponse} */
  ModifyRealServerName(data: ModifyRealServerNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRealServerNameResponse>;
  /** 修改转发规则信息 {@link ModifyRuleAttributeRequest} {@link ModifyRuleAttributeResponse} */
  ModifyRuleAttribute(data: ModifyRuleAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleAttributeResponse>;
  /** 修改安全策略规则名 {@link ModifySecurityRuleRequest} {@link ModifySecurityRuleResponse} */
  ModifySecurityRule(data: ModifySecurityRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityRuleResponse>;
  /** 修改TCP监听器配置 {@link ModifyTCPListenerAttributeRequest} {@link ModifyTCPListenerAttributeResponse} */
  ModifyTCPListenerAttribute(data: ModifyTCPListenerAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTCPListenerAttributeResponse>;
  /** 修改UDP监听器配置 {@link ModifyUDPListenerAttributeRequest} {@link ModifyUDPListenerAttributeResponse} */
  ModifyUDPListenerAttribute(data: ModifyUDPListenerAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUDPListenerAttributeResponse>;
  /** 开启通道 {@link OpenProxiesRequest} {@link OpenProxiesResponse} */
  OpenProxies(data?: OpenProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<OpenProxiesResponse>;
  /** 开启通道组 {@link OpenProxyGroupRequest} {@link OpenProxyGroupResponse} */
  OpenProxyGroup(data: OpenProxyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<OpenProxyGroupResponse>;
  /** 开启安全策略 {@link OpenSecurityPolicyRequest} {@link OpenSecurityPolicyResponse} */
  OpenSecurityPolicy(data?: OpenSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<OpenSecurityPolicyResponse>;
  /** 删除源站 {@link RemoveRealServersRequest} {@link RemoveRealServersResponse} */
  RemoveRealServers(data: RemoveRealServersRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveRealServersResponse>;
  /** 认证高级配置 {@link SetAuthenticationRequest} {@link SetAuthenticationResponse} */
  SetAuthentication(data: SetAuthenticationRequest, config?: AxiosRequestConfig): AxiosPromise<SetAuthenticationResponse>;
  /** 设置监听器TLS配置 {@link SetTlsVersionRequest} {@link SetTlsVersionResponse} */
  SetTlsVersion(data: SetTlsVersionRequest, config?: AxiosRequestConfig): AxiosPromise<SetTlsVersionResponse>;
}

export declare type Versions = ["2018-05-29"];

export default Gaap;
