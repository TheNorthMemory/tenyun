/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** DescribeAccessIndex */
declare interface AccessFullTextInfo {
  /** 是否大小写敏感 */
  CaseSensitive: boolean | null;
  /** 全文索引的分词符，字符串中每个字符代表一个分词符 */
  Tokenizer: string | null;
  /** 是否包含中文 */
  ContainZH: boolean | null;
}

/** 用于接口DescribeAccessHistogram 的出参 */
declare interface AccessHistogramItem {
  /** 时间，单位ms */
  BTime?: number;
  /** 日志条数 */
  Count?: number;
}

/** 用于 DescribeAccessIndex 的出参 */
declare interface AccessKeyValueInfo {
  /** 需要配置键值或者元字段索引的字段 */
  Key: string | null;
  /** 字段的索引描述信息 */
  Value: AccessValueInfo | null;
}

/** 单条日志数据描述 */
declare interface AccessLogInfo {
  /** 日志时间，单位ms */
  Time: number | null;
  /** 日志主题ID */
  TopicId: string | null;
  /** 日志主题名称 */
  TopicName: string | null;
  /** 日志来源IP */
  Source: string | null;
  /** 日志文件名称 */
  FileName: string | null;
  /** 日志上报请求包的ID */
  PkgId: string | null;
  /** 请求包内日志的ID */
  PkgLogId: string | null;
  /** 日志内容的Json序列化字符串 */
  LogJson: string | null;
}

/** 日志KeyValue对 */
declare interface AccessLogItem {
  /** 日记Key */
  Key: string | null;
  /** 日志Value */
  Value: string | null;
}

/** 日志KeyValue对数组，用于搜索访问日志 */
declare interface AccessLogItems {
  /** 分析结果返回的KV数据对 */
  Data: AccessLogItem[] | null;
}

/** DescribeAccessIndex接口的出参数 */
declare interface AccessRuleInfo {
  /** 全文索引配置 */
  FullText: AccessFullTextInfo | null;
  /** 键值索引配置 */
  KeyValue: AccessRuleKeyValueInfo | null;
  /** 元字段索引配置 */
  Tag: AccessRuleTagInfo | null;
}

/** DescribeAccessIndex接口的出参 */
declare interface AccessRuleKeyValueInfo {
  /** 是否大小写敏感 */
  CaseSensitive: boolean | null;
  /** 需要建立索引的键值对信息；最大只能配置100个键值对 */
  KeyValues: AccessKeyValueInfo[] | null;
}

/** DescribeAccessIndex接口的出参 */
declare interface AccessRuleTagInfo {
  /** 是否大小写敏感 */
  CaseSensitive: boolean | null;
  /** 标签索引配置中的字段信息 */
  KeyValues: AccessKeyValueInfo[] | null;
}

/** 用于DescribeAccessIndex接口的出参 */
declare interface AccessValueInfo {
  /** 字段类型，目前支持的类型有：long、text、double */
  Type: string | null;
  /** 字段的分词符，只有当字段类型为text时才有意义；输入字符串中的每个字符代表一个分词符 */
  Tokenizer: string | null;
  /** 字段是否开启分析功能 */
  SqlFlag: boolean | null;
  /** 是否包含中文 */
  ContainZH: boolean | null;
}

/** 攻击日志详情 */
declare interface AttackLogInfo {
  /** 攻击日志的详情内容 */
  Content: string;
  /** CLS返回内容 */
  FileName: string;
  /** CLS返回内容 */
  Source: string;
  /** CLS返回内容 */
  TimeStamp: string;
}

/** Waf 攻击自动封禁详情 */
declare interface AutoDenyDetail {
  /** 攻击封禁类型标签 */
  AttackTags: string[];
  /** 攻击次数阈值 */
  AttackThreshold: number;
  /** 自动封禁状态 */
  DefenseStatus: number;
  /** 攻击时间阈值 */
  TimeThreshold: number;
  /** 自动封禁时间 */
  DenyTimeThreshold: number;
  /** 最后更新时间 */
  LastUpdateTime?: string;
}

/** Bot资源信息 */
declare interface BotPkg {
  /** 资源id */
  ResourceIds?: string | null;
  /** 状态 */
  Status?: number | null;
  /** 地域 */
  Region?: number | null;
  /** 开始时间 */
  BeginTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
  /** 申请数量 */
  InquireNum?: number | null;
  /** 使用数量 */
  UsedNum?: number | null;
  /** 子产品code */
  Type?: string | null;
  /** 续费标志 */
  RenewFlag?: number | null;
}

/** bot的qps详情 */
declare interface BotQPS {
  /** 资源id */
  ResourceIds: string;
  /** 有效时间 */
  ValidTime: string;
  /** 资源数量 */
  Count: number;
  /** 资源所在地区 */
  Region: string;
  /** 使用qps的最大值 */
  MaxBotQPS: number;
  /** 续费标志 */
  RenewFlag?: number | null;
}

/** bot的趋势图对象 */
declare interface BotStatPointItem {
  /** 横坐标 */
  TimeStamp: string;
  /** value的所属对象 */
  Key: string;
  /** 纵列表 */
  Value: number;
  /** Key对应的页面展示内容 */
  Label: string;
}

/** CDC场景下负载均衡WAF的集群信息 */
declare interface CdcCluster {
  /** cdc的集群id */
  Id: string;
  /** cdc的集群名称 */
  Name: string | null;
}

/** CDC场景下负载均衡WAF的地域信息 */
declare interface CdcRegion {
  /** 地域 */
  Region: string;
  /** 该地域对应的集群信息 */
  Clusters: CdcCluster[] | null;
}

/** DescribeCustomRules接口回包中的复杂类型 */
declare interface DescribeCustomRulesRspRuleListItem {
  /** 动作类型 */
  ActionType: string;
  /** 跳过的策略 */
  Bypass: string;
  /** 创建时间 */
  CreateTime: string;
  /** 过期时间 */
  ExpireTime: string;
  /** 策略名称 */
  Name: string;
  /** 重定向地址 */
  Redirect: string;
  /** 策略ID */
  RuleId: string;
  /** 优先级 */
  SortId: string;
  /** 状态 */
  Status: string;
  /** 策略详情 */
  Strategies: Strategy[];
  /** 事件id */
  EventId: string | null;
}

/** domain列表 */
declare interface DomainInfo {
  /** 域名 */
  Domain: string;
  /** 域名ID */
  DomainId: string;
  /** 实例ID */
  InstanceId: string;
  /** cname地址 */
  Cname: string;
  /** 实例类型,sparta-waf表示saaswaf实例域名,clb-waf表示clbwaf实例域名,cdc-clb-waf表示CDC环境下clbwaf实例域名,cdn-waf表示cdnwaf实例域名 */
  Edition: string;
  /** 地域 */
  Region: string;
  /** 实例名 */
  InstanceName: string;
  /** 日志包 */
  ClsStatus: number;
  /** clbwaf使用模式,0镜像模式 1清洗模式 */
  FlowMode: number;
  /** waf开关,0关闭 1开启 */
  Status: number;
  /** 规则防御模式,0观察模式 1拦截模式 */
  Mode: number;
  /** AI防御模式,10规则引擎观察&&AI引擎关闭模式 11规则引擎观察&&AI引擎观察模式 12规则引擎观察&&AI引擎拦截模式 20规则引擎拦截&&AI引擎关闭模式 21规则引擎拦截&&AI引擎观察模式 22规则引擎拦截&&AI引擎拦截模式 */
  Engine: number;
  /** CC列表 */
  CCList: string[];
  /** 回源ip */
  RsList: string[];
  /** 服务端口配置 */
  Ports: PortInfo[];
  /** 负载均衡器 */
  LoadBalancerSet: LoadBalancerPackageNew[];
  /** 用户id */
  AppId: number;
  /** clbwaf域名监听器状态,0操作成功 4正在绑定LB 6正在解绑LB 7解绑LB失败 8绑定LB失败 10内部错误 */
  State: number;
  /** 创建时间 */
  CreateTime?: string;
  /** Ipv6开关状态,0关闭 1开启 */
  Ipv6Status?: number;
  /** BOT开关状态,0关闭 1开启 */
  BotStatus?: number;
  /** 版本信息 */
  Level?: number;
  /** 是否开启投递CLS功能,0关闭 1开启 */
  PostCLSStatus?: number;
  /** 是否开启投递CKafka功能,0关闭 1开启 */
  PostCKafkaStatus?: number;
  /** cdc实例域名接入的集群信息,非cdc实例忽略 */
  CdcClusters?: string | null;
  /** api安全开关状态,0关闭 1开启 */
  ApiStatus?: number | null;
  /** 应用型负载均衡类型,clb或者apisix，默认clb */
  AlbType?: string | null;
  /** 安全组状态,0不展示 1非腾讯云源站 2安全组绑定失败 3安全组发生变更 */
  SgState?: number | null;
  /** 安全组状态的详细解释 */
  SgDetail?: string | null;
}

/** clb-waf 域名扩展套餐 */
declare interface DomainPackageNew {
  /** 资源ID */
  ResourceIds: string | null;
  /** 过期时间 */
  ValidTime: string | null;
  /** 是否自动续费，1：自动续费，0：不自动续费 */
  RenewFlag: number | null;
  /** 套餐购买个数 */
  Count: number | null;
  /** 套餐购买地域，clb-waf暂时没有用到 */
  Region: string | null;
}

/** saas域名详情 */
declare interface DomainsPartInfo {
  /** 是否开启httpRewrite */
  HttpsRewrite: number;
  /** https回源端口 */
  HttpsUpstreamPort: string;
  /** 是否是cdn */
  IsCdn: number;
  /** 是否开启gray */
  IsGray: number;
  /** 是否是http2 */
  IsHttp2: number;
  /** 是否开启websocket */
  IsWebsocket: number;
  /** 负载均衡 */
  LoadBalance: number;
  /** 防御模式 */
  Mode: number;
  /** 私钥 */
  PrivateKey: string;
  /** ssl id */
  SSLId: string;
  /** 回源域名 */
  UpstreamDomain: string;
  /** 回源类型 */
  UpstreamType: number;
  /** 回源ip */
  SrcList: string[];
  /** 服务端口配置 */
  Ports: PortInfo[];
  /** 证书类型 */
  CertType: number;
  /** 回源方式 */
  UpstreamScheme: string;
  /** 日志包 */
  Cls: number;
  /** 一级cname */
  Cname: string;
  /** 是否长连接 */
  IsKeepAlive: number;
  /** 是否开启主动健康检测，1表示开启，0表示不开启 */
  ActiveCheck: number | null;
  /** TLS版本信息 */
  TLSVersion: number | null;
  /** 加密套件信息 */
  Ciphers: number[] | null;
  /** 模版 */
  CipherTemplate: number | null;
  /** 300s */
  ProxyReadTimeout: number | null;
  /** 300s */
  ProxySendTimeout: number | null;
  /** 0:关闭SNI；1:开启SNI，SNI=源请求host；2:开启SNI，SNI=修改为源站host；3：开启SNI，自定义host，SNI=SniHost； */
  SniType: number | null;
  /** SniType=3时，需要填此参数，表示自定义的host； */
  SniHost: string | null;
  /** 无 */
  Weights?: string[] | null;
  /** IsCdn=3时，表示自定义header */
  IpHeaders: string[] | null;
  /** 0:关闭xff重置；1:开启xff重置 */
  XFFReset?: number | null;
}

/** 下载攻击日志记录数据项 */
declare interface DownloadAttackRecordInfo {
  /** 记录ID */
  Id: number;
  /** 下载任务名 */
  TaskName: string;
  /** 任务ID */
  TaskId: string;
  /** 域名 */
  Host: string;
  /** 当前下载任务的日志条数 */
  Count: number;
  /** 下载任务运行状态：-1-下载超时，0-下载等待，1-下载完成，2-下载失败，4-正在下载 */
  Status: number;
  /** 下载文件URL */
  Url: string;
  /** 创建时间 */
  CreateTime: string;
  /** 最后更新修改时间 */
  ModifyTime: string;
  /** 过期时间 */
  ExpireTime: string;
  /** 下载任务需下载的日志总条数 */
  TotalCount: number;
}

/** DescribeAccessExports接口 */
declare interface ExportAccessInfo {
  /** 日志导出任务ID */
  ExportId: string | null;
  /** 日志导出查询语句 */
  Query: string | null;
  /** 日志导出文件名 */
  FileName: string | null;
  /** 日志文件大小 */
  FileSize: number;
  /** 日志导出时间排序 */
  Order: string | null;
  /** 日志导出格式 */
  Format: string | null;
  /** 日志导出数量 */
  Count: number | null;
  /** 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期） */
  Status: string;
  /** 日志导出起始时间 */
  From: number;
  /** 日志导出结束时间 */
  To: number;
  /** 日志导出路径 */
  CosPath: string;
  /** 日志导出创建时间 */
  CreateTime: string;
}

/** 过滤数组 */
declare interface FiltersItemNew {
  /** 字段名 */
  Name: string;
  /** 过滤值 */
  Values: string[];
  /** 是否精确查找 */
  ExactMatch: boolean;
}

/** 业务安全资源信息 */
declare interface FraudPkg {
  /** 资源id */
  ResourceIds?: string | null;
  /** 状态 */
  Status?: number | null;
  /** 地域 */
  Region?: number | null;
  /** 开始时间 */
  BeginTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
  /** 申请数量 */
  InquireNum?: number | null;
  /** 使用数量 */
  UsedNum?: number | null;
  /** 续费标志 */
  RenewFlag?: number | null;
}

/** clb-waf防护域名 */
declare interface HostRecord {
  /** 域名 */
  Domain: string;
  /** 域名ID */
  DomainId: string;
  /** 主域名，入参时为空 */
  MainDomain: string;
  /** waf模式，同saas waf保持一致 */
  Mode: number;
  /** waf和LD的绑定，0：没有绑定，1：绑定 */
  Status: number;
  /** 域名状态，0：正常，1：未检测到流量，2：即将过期，3：过期 */
  State: number;
  /** 使用的规则，同saas waf保持一致 */
  Engine: number;
  /** 是否开启代理，0：不开启，1：开启 */
  IsCdn: number;
  /** 绑定的LB列表 */
  LoadBalancerSet: LoadBalancer[];
  /** 域名绑定的LB的地域，以,分割多个地域 */
  Region: string;
  /** 产品分类，取值为：sparta-waf、clb-waf、cdn-waf */
  Edition: string;
  /** WAF的流量模式，1：清洗模式，0：镜像模式 */
  FlowMode: number;
  /** 是否开启访问日志，1：开启，0：关闭 */
  ClsStatus: number;
  /** 防护等级，可选值100,200,300 */
  Level?: number | null;
  /** 域名需要下发到的cdc集群列表 */
  CdcClusters?: string[] | null;
  /** 应用型负载均衡类型: clb或者apisix，默认clb */
  AlbType?: string | null;
  /** IsCdn=3时，需要填此参数，表示自定义header */
  IpHeaders?: string[] | null;
  /** 规则引擎类型， 1: menshen, 2:tiga */
  EngineType?: number | null;
}

/** 一个实例的详细信息 */
declare interface InstanceInfo {
  /** id */
  InstanceId: string;
  /** Name */
  InstanceName: string;
  /** 资源id */
  ResourceIds: string;
  /** 地域 */
  Region: string;
  /** 付费模式 */
  PayMode: number;
  /** 自动续费 */
  RenewFlag: number;
  /** 弹性计费 */
  Mode: number;
  /** 套餐版本 */
  Level: number;
  /** 过期时间 */
  ValidTime: string;
  /** 开始时间 */
  BeginTime: string;
  /** 已用 */
  DomainCount: number;
  /** 上限 */
  SubDomainLimit: number;
  /** 已用 */
  MainDomainCount: number;
  /** 上限 */
  MainDomainLimit: number;
  /** 峰值 */
  MaxQPS: number;
  /** qps套餐 */
  QPS: QPSPackageNew;
  /** 域名套餐 */
  DomainPkg: DomainPackageNew;
  /** 用户appid */
  AppId: number;
  /** clb或saas */
  Edition: string;
  /** 业务安全包 */
  FraudPkg?: FraudPkg | null;
  /** Bot资源包 */
  BotPkg?: BotPkg | null;
  /** bot的qps详情 */
  BotQPS?: BotQPS | null;
  /** qps弹性计费上限 */
  ElasticBilling?: number | null;
  /** 攻击日志投递开关 */
  AttackLogPost?: number | null;
  /** 带宽峰值，单位为B/s(字节每秒) */
  MaxBandwidth?: number | null;
  /** api安全是否购买 */
  APISecurity?: number;
  /** 购买的qps规格 */
  QpsStandard?: number | null;
  /** 购买的带宽规格 */
  BandwidthStandard?: number | null;
  /** 实例状态 */
  Status?: number | null;
  /** 实例沙箱值 */
  SandboxQps?: number | null;
  /** 是否api 安全试用 */
  IsAPISecurityTrial?: number | null;
}

/** 数据封装 */
declare interface IpAccessControlData {
  /** ip黑白名单 */
  Res: IpAccessControlItem[] | null;
  /** 计数 */
  TotalCount: number;
}

/** ip黑白名单 */
declare interface IpAccessControlItem {
  /** 动作 */
  ActionType: number;
  /** ip */
  Ip: string;
  /** 备注 */
  Note: string;
  /** 来源 */
  Source: string;
  /** 更新时间戳 */
  TsVersion: number | null;
  /** 有效截止时间戳 */
  ValidTs: number;
}

/** ip封堵状态数据 */
declare interface IpHitItem {
  /** 动作 */
  Action: number;
  /** 类别 */
  Category: string;
  /** ip */
  Ip: string;
  /** 规则名称 */
  Name: string;
  /** 时间戳 */
  TsVersion: number;
  /** 有效截止时间戳 */
  ValidTs: number;
}

/** 封装参数 */
declare interface IpHitItemsData {
  /** 数组封装 */
  Res: IpHitItem[];
  /** 总数目 */
  TotalCount: number;
}

/** 负载均衡的监听器 */
declare interface LoadBalancer {
  /** 负载均衡LD的ID */
  LoadBalancerId: string;
  /** 负载均衡LD的名称 */
  LoadBalancerName: string;
  /** 负载均衡监听器的ID */
  ListenerId: string;
  /** 负载均衡监听器的名称 */
  ListenerName: string;
  /** 负载均衡实例的IP */
  Vip: string;
  /** 负载均衡实例的端口 */
  Vport: number;
  /** 负载均衡LD的地域 */
  Region: string;
  /** 监听器协议，http、https */
  Protocol: string;
  /** 负载均衡监听器所在的zone */
  Zone: string;
  /** 负载均衡的VPCID，公网为-1，内网按实际填写 */
  NumericalVpcId?: number | null;
  /** 负载均衡的网络类型 */
  LoadBalancerType?: string | null;
}

/** 负载均衡器 */
declare interface LoadBalancerPackageNew {
  /** 监听id */
  ListenerId: string | null;
  /** 监听名 */
  ListenerName: string | null;
  /** 负载均衡id */
  LoadBalancerId: string | null;
  /** 负载均衡名 */
  LoadBalancerName: string | null;
  /** 协议 */
  Protocol: string | null;
  /** 地区 */
  Region: string | null;
  /** 接入IP */
  Vip: string | null;
  /** 接入端口 */
  Vport: number | null;
  /** 地域 */
  Zone: string | null;
  /** VPCID */
  NumericalVpcId: number | null;
  /** CLB类型 */
  LoadBalancerType: string | null;
}

/** 攻击日志统计详情 */
declare interface LogHistogramInfo {
  /** 日志条数 */
  Count: number;
  /** 时间戳 */
  TimeStamp: number;
}

/** PeakPoints数组项 */
declare interface PeakPointsItem {
  /** 秒级别时间戳 */
  Time: number;
  /** QPS */
  Access: number;
  /** 上行带宽峰值，单位B */
  Up: number;
  /** 下行带宽峰值，单位B */
  Down: number;
  /** Web攻击次数 */
  Attack: number;
  /** CC攻击次数 */
  Cc: number;
  /** Bot qps */
  BotAccess: number;
  /** WAF返回给客户端状态码次数 */
  StatusServerError: number | null;
  /** WAF返回给客户端状态码次数 */
  StatusClientError: number | null;
  /** WAF返回给客户端状态码次数 */
  StatusRedirect: number | null;
  /** WAF返回给客户端状态码次数 */
  StatusOk: number | null;
  /** 源站返回给WAF状态码次数 */
  UpstreamServerError: number | null;
  /** 源站返回给WAF状态码次数 */
  UpstreamClientError: number | null;
  /** 源站返回给WAF状态码次数 */
  UpstreamRedirect: number | null;
}

/** 服务端口配置 */
declare interface PortInfo {
  /** Nginx的服务器id */
  NginxServerId: number;
  /** 监听端口配置 */
  Port: string;
  /** 与端口对应的协议 */
  Protocol: string;
  /** 回源端口 */
  UpstreamPort: string;
  /** 回源协议 */
  UpstreamProtocol: string;
}

/** 防护域名端口配置信息 */
declare interface PortItem {
  /** 监听端口配置 */
  Port: string;
  /** 与Port一一对应，表示端口对应的协议 */
  Protocol: string;
  /** 与Port一一对应, 表示回源端口 */
  UpstreamPort: string;
  /** 与Port一一对应, 表示回源协议 */
  UpstreamProtocol: string;
  /** Nginx的服务器ID */
  NginxServerId: string;
}

/** clb-waf QPS套餐 New */
declare interface QPSPackageNew {
  /** 资源ID */
  ResourceIds: string | null;
  /** 过期时间 */
  ValidTime: string | null;
  /** 是否自动续费，1：自动续费，0：不自动续费 */
  RenewFlag: number | null;
  /** 套餐购买个数 */
  Count: number | null;
  /** 套餐购买地域，clb-waf暂时没有用到 */
  Region: string | null;
  /** 计费项 */
  BillingItem?: string | null;
}

/** 响应体的返回码 */
declare interface ResponseCode {
  /** 如果成功则返回Success，失败则返回云api定义的错误码 */
  Code: string;
  /** 如果成功则返回Success，失败则返回WAF定义的二级错误码 */
  Message: string;
}

/** 规则白名单 */
declare interface RuleList {
  /** 规则Id */
  Id: number;
  /** 规则列表的id */
  Rules: number[];
  /** 请求url */
  Url: string;
  /** 请求的方法 */
  Function: string;
  /** 时间戳 */
  Time: string;
  /** 开关状态 */
  Status: number;
}

/** waf斯巴达-编辑防护域名中的端口结构 */
declare interface SpartaProtectionPort {
  /** nginx Id */
  NginxServerId: number;
  /** 端口 */
  Port: string;
  /** 协议 */
  Protocol: string;
  /** 后端端口 */
  UpstreamPort: string;
  /** 后端协议 */
  UpstreamProtocol: string;
}

/** 自定义规则的匹配条件结构体 */
declare interface Strategy {
  /** 匹配字段 */
  Field: string | null;
  /** 逻辑符号 */
  CompareFunc: string | null;
  /** 匹配内容 */
  Content: string | null;
  /** 匹配参数 */
  Arg: string | null;
}

/** Vip信息 */
declare interface VipInfo {
  /** Virtual IP */
  Vip?: string | null;
  /** waf实例id */
  InstanceId?: string | null;
}

/** waf模块的规格 */
declare interface WafRuleLimit {
  /** 自定义CC的规格 */
  CC: number;
  /** 自定义策略的规格 */
  CustomRule: number;
  /** 黑白名单的规格 */
  IPControl: number;
  /** 信息防泄漏的规格 */
  AntiLeak: number;
  /** 防篡改的规格 */
  AntiTamper: number;
  /** 紧急CC的规格 */
  AutoCC: number;
  /** 地域封禁的规格 */
  AreaBan: number;
  /** 自定义CC中配置session */
  CCSession: number;
  /** AI的规格 */
  AI: number;
  /** 精准白名单的规格 */
  CustomWhite: number;
  /** api安全的规格 */
  ApiSecurity: number;
  /** 客户端流量标记的规格 */
  ClientMsg: number;
  /** 流量标记的规格 */
  TrafficMarking: number;
}

/** 当前WAF威胁情报封禁模块详情 */
declare interface WafThreatenIntelligenceDetails {
  /** 封禁属性标签 */
  Tags?: string[] | null;
  /** 封禁模组启用状态 */
  DefenseStatus?: number;
  /** 最后更新时间 */
  LastUpdateTime?: string;
}

declare interface AddCustomRuleRequest {
  /** 规则名称 */
  Name: string;
  /** 优先级 */
  SortId: string;
  /** 过期时间，单位为秒级时间戳，例如1677254399表示过期时间为2023-02-24 23:59:59. 0表示永不过期 */
  ExpireTime: string;
  /** 策略详情 */
  Strategies: Strategy[];
  /** 需要添加策略的域名 */
  Domain: string;
  /** 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向 */
  ActionType: string;
  /** 如果动作是重定向，则表示重定向的地址；其他情况可以为空 */
  Redirect?: string;
  /** WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF */
  Edition?: string;
  /** 放行的详情 */
  Bypass?: string;
  /** 添加规则的来源，默认为空 */
  EventId?: string;
}

declare interface AddCustomRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success?: ResponseCode;
  /** 添加成功的规则ID */
  RuleId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCustomWhiteRuleRequest {
  /** 规则名称 */
  Name: string;
  /** 优先级 */
  SortId: string;
  /** 过期时间 */
  ExpireTime: string;
  /** 策略详情 */
  Strategies: Strategy[];
  /** 需要添加策略的域名 */
  Domain: string;
  /** 放行的详情 */
  Bypass: string;
}

declare interface AddCustomWhiteRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success: ResponseCode;
  /** 添加成功的规则ID */
  RuleId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddDomainWhiteRuleRequest {
  /** 需要添加的域名 */
  Domain?: string;
  /** 需要添加的规则 */
  Rules?: number[];
  /** 需要添加的规则url */
  Url?: string;
  /** 规则的方法 */
  Function?: string;
  /** 规则的开关，0表示规则关闭，1表示规则打开 */
  Status?: number;
}

declare interface AddDomainWhiteRuleResponse {
  /** 规则id */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddSpartaProtectionRequest {
  /** 需要防御的域名 */
  Domain: string;
  /** 证书类型，0表示没有证书，CertType=1表示自有证书,2 为托管证书 */
  CertType: number;
  /** 表示是否开启了CDN代理，1：有部署CDN，0：未部署CDN */
  IsCdn: number;
  /** 回源类型，0表示通过IP回源,1 表示通过域名回源 */
  UpstreamType: number;
  /** 是否开启WebSocket支持，1表示开启，0不开启 */
  IsWebsocket: number;
  /** 负载均衡策略，0表示轮询，1表示IP hash */
  LoadBalance: string;
  /** 值为1时，需要填次参数，表示证书内容 */
  Cert?: string;
  /** CertType=1时，需要填次参数，表示证书的私钥 */
  PrivateKey?: string;
  /** CertType=2时，需要填次参数，表示证书的ID */
  SSLId?: string;
  /** Waf的资源ID */
  ResourceId?: string;
  /** HTTPS回源协议，填http或者https */
  UpstreamScheme?: string;
  /** HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段 */
  HttpsUpstreamPort?: string;
  /** 是否开启灰度，0表示不开启灰度 */
  IsGray?: number;
  /** 灰度的地区 */
  GrayAreas?: string[];
  /** UpstreamType=1时，填次字段表示回源域名 */
  UpstreamDomain?: string;
  /** UpstreamType=0时，填次字段表示回源IP */
  SrcList?: string[];
  /** 是否开启HTTP2,开启HTTP2需要HTTPS支持 */
  IsHttp2?: number;
  /** 表示是否强制跳转到HTTPS，1强制跳转Https，0不强制跳转 */
  HttpsRewrite?: number;
  /** 服务有多端口需要设置此字段 */
  Ports?: PortItem[];
  /** WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF，cdn-waf表示CDN上的Web防护能力 */
  Edition?: string;
  /** 是否开启长连接，仅IP回源时可以用填次参数，域名回源时这个参数无效 */
  IsKeepAlive?: string;
  /** 实例id，上线之后带上此字段 */
  InstanceID?: string;
  /** anycast IP类型开关： 0 普通IP 1 Anycast IP */
  Anycast?: number;
  /** src权重 */
  Weights?: number[];
  /** 是否开启主动健康检测，1表示开启，0表示不开启 */
  ActiveCheck?: number;
  /** TLS版本信息 */
  TLSVersion?: number;
  /** 加密套件信息 */
  Ciphers?: number[];
  /** 0:不支持选择：默认模版 1:通用型模版 2:安全型模版 3:自定义模版 */
  CipherTemplate?: number;
  /** 300s */
  ProxyReadTimeout?: number;
  /** 300s */
  ProxySendTimeout?: number;
  /** 0:关闭SNI；1:开启SNI，SNI=源请求host；2:开启SNI，SNI=修改为源站host；3：开启SNI，自定义host，SNI=SniHost； */
  SniType?: number;
  /** SniType=3时，需要填此参数，表示自定义的host； */
  SniHost?: string;
  /** is_cdn=3时，需要填此参数，表示自定义header */
  IpHeaders?: string[];
  /** 0:关闭xff重置；1:开启xff重置 */
  XFFReset?: number;
}

declare interface AddSpartaProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccessExportRequest {
  /** 客户要查询的日志主题ID，每个客户都有对应的一个主题 */
  TopicId: string;
  /** 要查询的日志的起始时间，Unix时间戳，单位ms */
  From: number;
  /** 要查询的日志的结束时间，Unix时间戳，单位ms */
  To: number;
  /** 日志导出检索语句 */
  Query: string;
  /** 日志导出数量，最大值100w */
  Count: number;
  /** 日志导出数据格式。json，csv，默认为json */
  Format?: string;
  /** 日志导出时间排序。desc，asc，默认为desc */
  Order?: string;
}

declare interface CreateAccessExportResponse {
  /** 日志导出ID。 */
  ExportId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHostRequest {
  /** 防护域名配置信息 */
  Host: HostRecord;
  /** 实例id */
  InstanceID?: string;
}

declare interface CreateHostResponse {
  /** 新增防护域名ID */
  DomainId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccessExportRequest {
  /** 日志导出ID */
  ExportId: string;
  /** 日志主题 */
  TopicId: string;
}

declare interface DeleteAccessExportResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAttackDownloadRecordRequest {
  /** 下载任务记录唯一标记 */
  Id: number;
}

declare interface DeleteAttackDownloadRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomWhiteRuleRequest {
  /** 删除的域名 */
  Domain: string;
  /** 删除的规则ID */
  RuleId: number;
}

declare interface DeleteCustomWhiteRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDomainWhiteRulesRequest {
  /** 需要删除的规则域名 */
  Domain?: string;
  /** 需要删除的白名单规则 */
  Ids?: number[];
}

declare interface DeleteDomainWhiteRulesResponse {
  /** 出参 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDownloadRecordRequest {
  /** 记录id */
  Flow: string;
}

declare interface DeleteDownloadRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIpAccessControlRequest {
  /** 域名 */
  Domain: string;
  /** 删除的ip数组 */
  Items: string[];
  /** 是否删除对应的域名下的所有黑/白IP名单，true表示全部删除，false表示只删除指定ip名单 */
  DeleteAll?: boolean;
  /** 是否为多域名黑白名单 */
  SourceType?: string;
}

declare interface DeleteIpAccessControlResponse {
  /** 删除失败的条目 */
  FailedItems?: string | null;
  /** 删除失败的条目数 */
  FailedCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSessionRequest {
  /** 域名 */
  Domain: string;
  /** clb-waf 或者 sprta-waf */
  Edition?: string;
}

declare interface DeleteSessionResponse {
  /** 结果 */
  Data: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessExportsRequest {
  /** 客户要查询的日志主题ID，每个客户都有对应的一个主题 */
  TopicId: string;
  /** 分页的偏移量，默认值为0 */
  Offset?: number;
  /** 分页单页限制数目，默认值为20，最大值100 */
  Limit?: number;
}

declare interface DescribeAccessExportsResponse {
  /** 日志导出ID。 */
  TotalCount: number;
  /** 日志导出列表 */
  Exports: ExportAccessInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessFastAnalysisRequest {
  /** 客户要查询的日志主题ID，每个客户都有对应的一个主题 */
  TopicId: string;
  /** 要查询的日志的起始时间，Unix时间戳，单位ms */
  From: number;
  /** 要查询的日志的结束时间，Unix时间戳，单位ms */
  To: number;
  /** 查询语句，语句长度最大为4096，由于本接口是分析接口，如果无过滤条件，必须传 * 表示匹配所有，参考CLS的分析统计语句的文档 */
  Query: string;
  /** 需要分析统计的字段名 */
  FieldName: string;
}

declare interface DescribeAccessFastAnalysisResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessHistogramRequest {
  /** 老版本查询的日志主题ID，新版本传空字符串即可 */
  TopicId: string;
  /** 要查询的日志的起始时间，Unix时间戳，单位ms */
  From: number;
  /** 要查询的日志的结束时间，Unix时间戳，单位ms */
  To: number;
  /** 查询语句，语句长度最大为4096 */
  Query: string;
  /** 柱状图间隔时间差，单位ms */
  Interval?: number;
}

declare interface DescribeAccessHistogramResponse {
  /** 柱状图间隔时间差，单位ms */
  Interval?: number;
  /** 满足条件的日志条数 */
  TotalCount?: number;
  /** 注意：此字段可能返回 null，表示取不到有效值 */
  HistogramInfos?: AccessHistogramItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessIndexRequest {
}

declare interface DescribeAccessIndexResponse {
  /** 是否生效，true表示生效，false表示未生效 */
  Status?: boolean;
  /** 索引配置信息 */
  Rule?: AccessRuleInfo | null;
  /** 索引修改时间，初始值为索引创建时间。 */
  ModifyTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackOverviewRequest {
  /** 查询开始时间 */
  FromTime: string;
  /** 查询结束时间 */
  ToTime: string;
  /** 客户的Appid */
  Appid?: number;
  /** 被查询的域名 */
  Domain?: string;
  /** 只有两个值有效，sparta-waf，clb-waf，不传则不过滤 */
  Edition?: string;
  /** WAF实例ID，不传则不过滤 */
  InstanceID?: string;
}

declare interface DescribeAttackOverviewResponse {
  /** 访问请求总数 */
  AccessCount?: number;
  /** Web攻击总数 */
  AttackCount?: number;
  /** 访问控制总数 */
  ACLCount?: number;
  /** CC攻击总数 */
  CCCount?: number;
  /** Bot攻击总数 */
  BotCount?: number;
  /** api资产总数 */
  ApiAssetsCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoDenyIPRequest {
  /** 域名 */
  Domain: string;
  /** 查询IP自动封禁状态 */
  Ip?: string;
  /** 计数标识 */
  Count?: number;
  /** 类别 */
  Category?: string;
  /** 有效时间最小时间戳 */
  VtsMin?: number;
  /** 有效时间最大时间戳 */
  VtsMax?: number;
  /** 创建时间最小时间戳 */
  CtsMin?: number;
  /** 创建时间最大时间戳 */
  CtsMax?: number;
  /** 偏移量 */
  Skip?: number;
  /** 限制条数 */
  Limit?: number;
  /** 策略名字 */
  Name?: string;
  /** 排序参数 */
  Sort?: string;
}

declare interface DescribeAutoDenyIPResponse {
  /** 查询IP封禁状态返回结果 */
  Data?: IpHitItemsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomWhiteRuleRequest {
  /** 域名 */
  Domain: string;
  /** 偏移量 */
  Offset: number;
  /** 容量 */
  Limit: number;
  /** 过滤数组,name可以是如下的值： RuleID,RuleName,Match */
  Filters?: FiltersItemNew[];
  /** asc或者desc */
  Order?: string;
  /** exp_ts或者mod_ts */
  By?: string;
}

declare interface DescribeCustomWhiteRuleResponse {
  /** 规则详情 */
  RuleList?: DescribeCustomRulesRspRuleListItem[];
  /** 规则条数 */
  TotalCount?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainDetailsSaasRequest {
  /** 域名 */
  Domain: string;
  /** 域名id */
  DomainId: string;
  /** 实例id */
  InstanceId: string;
}

declare interface DescribeDomainDetailsSaasResponse {
  /** 域名详情 */
  DomainsPartInfo?: DomainsPartInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainWhiteRulesRequest {
  /** 需要查询的域名 */
  Domain: string;
  /** 请求的白名单匹配路径 */
  Url?: string;
  /** 翻到多少页 */
  Page?: number;
  /** 每页展示的条数 */
  Count?: number;
  /** 排序方式,desc表示降序，asc表示升序 */
  Sort?: string;
  /** 规则ID */
  RuleId?: string;
}

declare interface DescribeDomainWhiteRulesResponse {
  /** 规则列表 */
  RuleList?: RuleList[];
  /** 规则的数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainsRequest {
  /** 数据偏移量，从1开始。 */
  Offset: number;
  /** 返回域名的数量 */
  Limit: number;
  /** 过滤数组 */
  Filters?: FiltersItemNew[];
}

declare interface DescribeDomainsResponse {
  /** 总数 */
  Total?: number;
  /** domain列表 */
  Domains?: DomainInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowTrendRequest {
  /** 需要获取流量趋势的域名, all表示所有域名 */
  Domain: string;
  /** 起始时间戳，精度秒 */
  StartTs: number;
  /** 结束时间戳，精度秒 */
  EndTs: number;
}

declare interface DescribeFlowTrendResponse {
  /** 流量趋势数据 */
  Data: BotStatPointItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 偏移量 */
  Offset: number;
  /** 容量 */
  Limit: number;
  /** 过滤数组 */
  Filters?: FiltersItemNew[];
}

declare interface DescribeInstancesResponse {
  /** 总数 */
  Total?: number;
  /** instance列表 */
  Instances?: InstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpAccessControlRequest {
  /** 域名 */
  Domain: string;
  /** 计数标识 */
  Count: number;
  /** 动作，40表示查询白名单，42表示查询黑名单 */
  ActionType?: number;
  /** 最小有效时间的时间戳 */
  VtsMin?: number;
  /** 最大有效时间的时间戳 */
  VtsMax?: number;
  /** 最小创建时间的时间戳 */
  CtsMin?: number;
  /** 最大创建时间的时间戳 */
  CtsMax?: number;
  /** 分页开始条数 */
  OffSet?: number;
  /** 每页的条数 */
  Limit?: number;
  /** 来源 */
  Source?: string;
  /** 排序参数 */
  Sort?: string;
  /** ip */
  Ip?: string;
}

declare interface DescribeIpAccessControlResponse {
  /** 输出 */
  Data?: IpAccessControlData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpHitItemsRequest {
  /** 域名 */
  Domain: string;
  /** 计数标识 */
  Count: number;
  /** 类别 */
  Category: string;
  /** 有效时间最小时间戳 */
  VtsMin?: number;
  /** 有效时间最大时间戳 */
  VtsMax?: number;
  /** 创建时间最小时间戳 */
  CtsMin?: number;
  /** 创建时间最大时间戳 */
  CtsMax?: number;
  /** 偏移参数 */
  Skip?: number;
  /** 限制数目 */
  Limit?: number;
  /** 策略名称 */
  Name?: string;
  /** 排序参数 */
  Sort?: string;
  /** IP */
  Ip?: string;
}

declare interface DescribeIpHitItemsResponse {
  /** 结果 */
  Data?: IpHitItemsData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePeakPointsRequest {
  /** 查询起始时间 */
  FromTime: string;
  /** 查询终止时间 */
  ToTime: string;
  /** 查询的域名，如果查询所有域名数据，该参数不填写 */
  Domain?: string;
  /** 只有两个值有效，sparta-waf，clb-waf，不传则不过滤 */
  Edition?: string;
  /** WAF实例ID，不传则不过滤 */
  InstanceID?: string;
  /** 十三个值可选：access-峰值qps趋势图botAccess- bot峰值qps趋势图down-下行峰值带宽趋势图up-上行峰值带宽趋势图attack-Web攻击总数趋势图cc-CC攻击总数趋势图StatusServerError-WAF返回给客户端状态码次数趋势图StatusClientError-WAF返回给客户端状态码次数趋势图StatusRedirect-WAF返回给客户端状态码次数趋势图StatusOk-WAF返回给客户端状态码次数趋势图UpstreamServerError-源站返回给WAF状态码次数趋势图UpstreamClientError-源站返回给WAF状态码次数趋势图UpstreamRedirect-源站返回给WAF状态码次数趋势图 */
  MetricName?: string;
}

declare interface DescribePeakPointsResponse {
  /** 数据点 */
  Points: PeakPointsItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePeakValueRequest {
  /** 查询起始时间 */
  FromTime: string;
  /** 查询结束时间 */
  ToTime: string;
  /** 需要查询的域名，当前用户所有域名可以不传 */
  Domain?: string;
  /** 只有两个值有效，sparta-waf，clb-waf，不传则不过滤 */
  Edition?: string;
  /** WAF实例ID，不传则不过滤 */
  InstanceID?: string;
  /** 五个值可选：access-峰值qpsdown-下行峰值带宽up-上行峰值带宽attack-Web攻击总数cc-CC攻击总数趋势图 */
  MetricName?: string;
}

declare interface DescribePeakValueResponse {
  /** QPS峰值 */
  Access: number;
  /** 上行带宽峰值，单位B */
  Up: number;
  /** 下行带宽峰值，单位B */
  Down: number;
  /** Web攻击总数 */
  Attack: number;
  /** CC攻击总数 */
  Cc: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyStatusRequest {
  /** 域名 */
  Domain: string;
  /** clb-waf或者saas-waf */
  Edition: string;
}

declare interface DescribePolicyStatusResponse {
  /** 实例ID */
  InstanceId: string;
  /** 防护状态 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleLimitRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeRuleLimitResponse {
  /** waf模块的规格 */
  Res: WafRuleLimit;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserCdcClbWafRegionsRequest {
}

declare interface DescribeUserCdcClbWafRegionsResponse {
  /** CdcRegion的类型描述 */
  Data: CdcRegion[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserClbWafRegionsRequest {
}

declare interface DescribeUserClbWafRegionsResponse {
  /** 地域（标准的ap-格式）列表 */
  Data: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVipInfoRequest {
  /** waf实例id列表 */
  InstanceIds: string[];
}

declare interface DescribeVipInfoResponse {
  /** VIP信息 */
  VipInfo?: VipInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWafAutoDenyRulesRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeWafAutoDenyRulesResponse {
  /** 攻击次数阈值 */
  AttackThreshold: number;
  /** 攻击时间阈值 */
  TimeThreshold: number;
  /** 自动封禁时间 */
  DenyTimeThreshold: number;
  /** 自动封禁状态 */
  DefenseStatus: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWafAutoDenyStatusRequest {
}

declare interface DescribeWafAutoDenyStatusResponse {
  /** WAF 自动封禁详情 */
  WafAutoDenyDetails?: AutoDenyDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWafThreatenIntelligenceRequest {
}

declare interface DescribeWafThreatenIntelligenceResponse {
  /** WAF 威胁情报封禁信息 */
  WafThreatenIntelligenceDetails: WafThreatenIntelligenceDetails;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAttackDownloadRecordsRequest {
}

declare interface GetAttackDownloadRecordsResponse {
  /** 下载攻击日志记录数组 */
  Records: DownloadAttackRecordInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAttackHistogramRequest {
  /** 查询的域名，所有域名使用all */
  Domain: string;
  /** 查询起始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
  /** Lucene语法 */
  QueryString: string;
}

declare interface GetAttackHistogramResponse {
  /** 统计详情 */
  Data?: LogHistogramInfo[];
  /** 时间段大小 */
  Period?: number;
  /** 统计的条目数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccessPeriodRequest {
  /** 访问日志保存期限，范围为[1, 30] */
  Period: number;
  /** 日志主题 */
  TopicId: string;
}

declare interface ModifyAccessPeriodResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAreaBanStatusRequest {
  /** 修要修改的域名 */
  Domain: string;
  /** 状态值，0表示关闭，1表示开启 */
  Status: number;
}

declare interface ModifyAreaBanStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomRuleStatusRequest {
  /** 域名 */
  Domain: string;
  /** 规则ID */
  RuleId: number;
  /** 开关的状态，1是开启、0是关闭 */
  Status: number;
  /** WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。 */
  Edition?: string;
}

declare interface ModifyCustomRuleStatusResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success?: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomWhiteRuleRequest {
  /** 编辑的域名 */
  Domain: string;
  /** 编辑的规则ID */
  RuleId: number;
  /** 编辑的规则名称 */
  RuleName: string;
  /** 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果多个勾选那么以,串接。 */
  Bypass: string;
  /** 优先级，1~100的整数，数字越小，代表这条规则的执行优先级越高。 */
  SortId: number;
  /** 规则生效截止时间，0：永久生效，其它值为对应时间的时间戳。 */
  ExpireTime: number;
  /** 匹配条件数组 */
  Strategies: Strategy[];
}

declare interface ModifyCustomWhiteRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainWhiteRuleRequest {
  /** 需要更改的规则的域名 */
  Domain?: string;
  /** 白名单id */
  Id?: number;
  /** 规则的id列表 */
  Rules?: number[];
  /** 规则匹配路径 */
  Url?: string;
  /** 规则匹配方法 */
  Function?: string;
  /** 规则的开关状态，0表示关闭开关，1表示打开开关 */
  Status?: number;
}

declare interface ModifyDomainWhiteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySpartaProtectionRequest {
  /** 域名 */
  Domain: string;
  /** 域名ID */
  DomainId?: string;
  /** 证书类型，0表示没有证书，CertType=1表示自有证书,2 为托管证书 */
  CertType?: number;
  /** CertType=1时，需要填次参数，表示证书内容 */
  Cert?: string;
  /** CertType=1时，需要填次参数，表示证书的私钥 */
  PrivateKey?: string;
  /** CertType=2时，需要填次参数，表示证书的ID */
  SSLId?: string;
  /** 表示是否开启了CDN代理 */
  IsCdn?: number;
  /** HTTPS回源协议 */
  UpstreamScheme?: string;
  /** HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段 */
  HttpsUpstreamPort?: string;
  /** 表示是否强制跳转到HTTPS，1表示开启，0表示不开启 */
  HttpsRewrite?: number;
  /** 回源类型，0表示通过IP回源,1 表示通过域名回源 */
  UpstreamType?: number;
  /** UpstreamType=1时，填次字段表示回源域名 */
  UpstreamDomain?: string;
  /** UpstreamType=0时，填次字段表示回源ip */
  SrcList?: string[];
  /** 是否开启HTTP2，1表示开启，0表示不开启http2。开启HTTP2需要HTTPS支持 */
  IsHttp2?: number;
  /** 是否开启WebSocket， 1：开启WebSocket，0：不开启WebSocket */
  IsWebsocket?: number;
  /** 负载均衡策略，0表示轮徇，1表示IP hash */
  LoadBalance?: number;
  /** 是否灰度 */
  IsGray?: number;
  /** WAF版本 */
  Edition?: string;
  /** 端口信息 */
  Ports?: SpartaProtectionPort[];
  /** 长短连接标志，仅IP回源时有效 */
  IsKeepAlive?: string;
  /** 实例id */
  InstanceID?: string;
  /** 是否为Anycast ip类型：1 Anycast 0 普通ip */
  Anycast?: number;
  /** src的权重 */
  Weights?: number[];
  /** 是否开启源站的主动健康检测，1表示开启，0表示不开启 */
  ActiveCheck?: number;
  /** TLS版本信息 */
  TLSVersion?: number;
  /** 加密套件信息 */
  Ciphers?: number[];
  /** 0:不支持选择：默认模板 1:通用型模板 2:安全型模板 3:自定义模板 */
  CipherTemplate?: number;
  /** 300s */
  ProxyReadTimeout?: number;
  /** 300s */
  ProxySendTimeout?: number;
  /** 0:关闭SNI；1:开启SNI，SNI=源请求host；2:开启SNI，SNI=修改为源站host；3：开启SNI，自定义host，SNI=SniHost； */
  SniType?: number;
  /** SniType=3时，需要填此参数，表示自定义的host； */
  SniHost?: string;
  /** IsCdn=3时，需要填此参数，表示自定义header */
  IpHeaders?: string[];
  /** 0:关闭xff重置；1:开启xff重置 */
  XFFReset?: number;
}

declare interface ModifySpartaProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWafAutoDenyRulesRequest {
  /** 域名 */
  Domain: string;
  /** 触发IP封禁的攻击次数阈值，范围为2~100次 */
  AttackThreshold: number;
  /** IP封禁统计时间，范围为1-60分钟 */
  TimeThreshold: number;
  /** 触发IP封禁后的封禁时间，范围为5~360分钟 */
  DenyTimeThreshold: number;
  /** 自动封禁状态，0表示关闭，1表示打开 */
  DefenseStatus: number;
}

declare interface ModifyWafAutoDenyRulesResponse {
  /** 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码） */
  Success?: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWafAutoDenyStatusRequest {
  /** WAF 自动封禁配置项 */
  WafAutoDenyDetails: AutoDenyDetail;
}

declare interface ModifyWafAutoDenyStatusResponse {
  /** WAF 自动封禁配置项 */
  WafAutoDenyDetails?: AutoDenyDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWafThreatenIntelligenceRequest {
  /** 配置WAF威胁情报封禁模块详情 */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails;
}

declare interface ModifyWafThreatenIntelligenceResponse {
  /** 当前WAF威胁情报封禁模块详情 */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PostAttackDownloadTaskRequest {
  /** 查询的域名，所有域名使用all */
  Domain: string;
  /** 查询起始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
  /** Lucene语法 */
  QueryString: string;
  /** 任务名称 */
  TaskName: string;
  /** 默认为desc，可以取值desc和asc */
  Sort?: string;
  /** 下载的日志条数 */
  Count?: number;
}

declare interface PostAttackDownloadTaskResponse {
  /** 任务task id */
  Flow?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchAccessLogRequest {
  /** 客户要查询的日志主题ID，每个客户都有对应的一个主题，新版本此字段填空字符串 */
  TopicId: string;
  /** 要查询的日志的起始时间，Unix时间戳，单位ms */
  From: number;
  /** 要查询的日志的结束时间，Unix时间戳，单位ms */
  To: number;
  /** 查询语句，语句长度最大为4096 */
  Query: string;
  /** 单次查询返回的日志条数，最大值为100 */
  Limit?: number;
  /** 新版本此字段失效，填空字符串，翻页使用Page */
  Context?: string;
  /** 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc */
  Sort?: string;
  /** 第几页，从0开始。新版本接口字段 */
  Page?: number;
}

declare interface SearchAccessLogResponse {
  /** 新接口此字段失效，默认返回空字符串 */
  Context?: string;
  /** 日志查询结果是否全部返回，其中，“true”表示结果返回，“false”表示结果为返回 */
  ListOver?: boolean;
  /** 返回的是否为分析结果，其中，“true”表示返回分析结果，“false”表示未返回分析结果 */
  Analysis?: boolean;
  /** 如果Analysis为True，则返回分析结果的列名，否则为空 */
  ColNames?: string[] | null;
  /** 日志查询结果；当Analysis为True时，可能返回为null注意：此字段可能返回 null，表示取不到有效值 */
  Results?: AccessLogInfo[] | null;
  /** 日志分析结果；当Analysis为False时，可能返回为null注意：此字段可能返回 null，表示取不到有效值 */
  AnalysisResults?: AccessLogItems[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchAttackLogRequest {
  /** 查询的域名，所有域名使用all */
  Domain: string;
  /** 查询起始时间 */
  StartTime: string;
  /** 查询结束时间 */
  EndTime: string;
  /** 接口升级，这个字段传空字符串,翻页使用Page字段 */
  Context: string;
  /** Lucene语法 */
  QueryString: string;
  /** 查询的数量，默认10条，最多100条 */
  Count?: number;
  /** 默认为desc，可以取值desc和asc */
  Sort?: string;
  /** 第几页，从0开始 */
  Page?: number;
}

declare interface SearchAttackLogResponse {
  /** 当前返回的攻击日志条数 */
  Count?: number;
  /** 接口升级，此字段无效，默认返回空字符串 */
  Context?: string;
  /** 攻击日志数组条目内容 */
  Data?: AttackLogInfo[];
  /** CLS接口返回内容 */
  ListOver?: boolean;
  /** CLS接口返回内容，标志是否启动新版本索引 */
  SqlFlag?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchDomainRulesRequest {
  /** 域名 */
  Domain?: string;
  /** 规则列表 */
  Ids?: number[];
  /** 开关状态，0表示关闭，1表示开启，2表示只观察 */
  Status?: number;
  /** 设置为观察模式原因，1表示业务自身原因观察，2表示系统规则误报上报，3表示核心业务灰度观察，4表示其他 */
  Reason?: number;
}

declare interface SwitchDomainRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpsertIpAccessControlRequest {
  /** 域名 */
  Domain: string;
  /** ip 参数列表，json数组由ip，source，note，action，valid_ts组成。ip对应配置的ip地址，source固定为custom值，note为注释，action值42为黑名单，40为白名单，valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00）） */
  Items: string[];
  /** WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF */
  Edition?: string;
  /** 是否为多域名黑白名单，当为多域名的黑白名单时，取值为batch，否则为空 */
  SourceType?: string;
}

declare interface UpsertIpAccessControlResponse {
  /** 添加或修改失败的条目 */
  FailedItems?: string | null;
  /** 添加或修改失败的数目 */
  FailedCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Waf Web 应用防火墙} */
declare interface Waf {
  (): Versions;
  /** 增加访问控制（自定义策略） {@link AddCustomRuleRequest} {@link AddCustomRuleResponse} */
  AddCustomRule(data: AddCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddCustomRuleResponse>;
  /** 添加精准白名单规则 {@link AddCustomWhiteRuleRequest} {@link AddCustomWhiteRuleResponse} */
  AddCustomWhiteRule(data: AddCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddCustomWhiteRuleResponse>;
  /** 增加域名规则白名单 {@link AddDomainWhiteRuleRequest} {@link AddDomainWhiteRuleResponse} */
  AddDomainWhiteRule(data?: AddDomainWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddDomainWhiteRuleResponse>;
  /** 添加SAAS-WAF防护域名 {@link AddSpartaProtectionRequest} {@link AddSpartaProtectionResponse} */
  AddSpartaProtection(data: AddSpartaProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<AddSpartaProtectionResponse>;
  /** 创建访问日志导出 {@link CreateAccessExportRequest} {@link CreateAccessExportResponse} */
  CreateAccessExport(data: CreateAccessExportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessExportResponse>;
  /** 添加防护域名 {@link CreateHostRequest} {@link CreateHostResponse} */
  CreateHost(data: CreateHostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHostResponse>;
  /** 删除访问日志导出 {@link DeleteAccessExportRequest} {@link DeleteAccessExportResponse} */
  DeleteAccessExport(data: DeleteAccessExportRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccessExportResponse>;
  /** 删除攻击日志下载任务记录 {@link DeleteAttackDownloadRecordRequest} {@link DeleteAttackDownloadRecordResponse} */
  DeleteAttackDownloadRecord(data: DeleteAttackDownloadRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAttackDownloadRecordResponse>;
  /** 删除精准白名单规则 {@link DeleteCustomWhiteRuleRequest} {@link DeleteCustomWhiteRuleResponse} */
  DeleteCustomWhiteRule(data: DeleteCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomWhiteRuleResponse>;
  /** 删除域名规则白名单 {@link DeleteDomainWhiteRulesRequest} {@link DeleteDomainWhiteRulesResponse} */
  DeleteDomainWhiteRules(data?: DeleteDomainWhiteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainWhiteRulesResponse>;
  /** 删除访问日志下载记录 {@link DeleteDownloadRecordRequest} {@link DeleteDownloadRecordResponse} */
  DeleteDownloadRecord(data: DeleteDownloadRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDownloadRecordResponse>;
  /** Waf IP黑白名单Delete接口 {@link DeleteIpAccessControlRequest} {@link DeleteIpAccessControlResponse} */
  DeleteIpAccessControl(data: DeleteIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIpAccessControlResponse>;
  /** 删除CC攻击的session设置 {@link DeleteSessionRequest} {@link DeleteSessionResponse} */
  DeleteSession(data: DeleteSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSessionResponse>;
  /** 获取访问日志导出列表 {@link DescribeAccessExportsRequest} {@link DescribeAccessExportsResponse} */
  DescribeAccessExports(data: DescribeAccessExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessExportsResponse>;
  /** 访问日志快速分析统计 {@link DescribeAccessFastAnalysisRequest} {@link DescribeAccessFastAnalysisResponse} */
  DescribeAccessFastAnalysis(data: DescribeAccessFastAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessFastAnalysisResponse>;
  /** 访问日志柱状趋势图 {@link DescribeAccessHistogramRequest} {@link DescribeAccessHistogramResponse} */
  DescribeAccessHistogram(data: DescribeAccessHistogramRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessHistogramResponse>;
  /** 获取访问日志索引配置信息 {@link DescribeAccessIndexRequest} {@link DescribeAccessIndexResponse} */
  DescribeAccessIndex(data?: DescribeAccessIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessIndexResponse>;
  /** 攻击总览 {@link DescribeAttackOverviewRequest} {@link DescribeAttackOverviewResponse} */
  DescribeAttackOverview(data: DescribeAttackOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackOverviewResponse>;
  /** @deprecated 描述WAF自动封禁IP详情 {@link DescribeAutoDenyIPRequest} {@link DescribeAutoDenyIPResponse} */
  DescribeAutoDenyIP(data: DescribeAutoDenyIPRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoDenyIPResponse>;
  /** 查询精准白名单规则 {@link DescribeCustomWhiteRuleRequest} {@link DescribeCustomWhiteRuleResponse} */
  DescribeCustomWhiteRule(data: DescribeCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomWhiteRuleResponse>;
  /** 查询单个saas域名详情 {@link DescribeDomainDetailsSaasRequest} {@link DescribeDomainDetailsSaasResponse} */
  DescribeDomainDetailsSaas(data: DescribeDomainDetailsSaasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainDetailsSaasResponse>;
  /** 获取域名的规则白名单 {@link DescribeDomainWhiteRulesRequest} {@link DescribeDomainWhiteRulesResponse} */
  DescribeDomainWhiteRules(data: DescribeDomainWhiteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainWhiteRulesResponse>;
  /** 获取域名列表 {@link DescribeDomainsRequest} {@link DescribeDomainsResponse} */
  DescribeDomains(data: DescribeDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainsResponse>;
  /** 获取waf流量访问趋势 {@link DescribeFlowTrendRequest} {@link DescribeFlowTrendResponse} */
  DescribeFlowTrend(data: DescribeFlowTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowTrendResponse>;
  /** 查询用户所有实例的详细信息 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** Waf ip黑白名单查询 {@link DescribeIpAccessControlRequest} {@link DescribeIpAccessControlResponse} */
  DescribeIpAccessControl(data: DescribeIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpAccessControlResponse>;
  /** Waf IP封堵状态查询 {@link DescribeIpHitItemsRequest} {@link DescribeIpHitItemsResponse} */
  DescribeIpHitItems(data: DescribeIpHitItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpHitItemsResponse>;
  /** 查询业务和攻击概要趋势 {@link DescribePeakPointsRequest} {@link DescribePeakPointsResponse} */
  DescribePeakPoints(data: DescribePeakPointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePeakPointsResponse>;
  /** 获取业务和攻击概览峰值 {@link DescribePeakValueRequest} {@link DescribePeakValueResponse} */
  DescribePeakValue(data: DescribePeakValueRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePeakValueResponse>;
  /** 获取防护状态以及生效的实例id {@link DescribePolicyStatusRequest} {@link DescribePolicyStatusResponse} */
  DescribePolicyStatus(data: DescribePolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyStatusResponse>;
  /** 获取规格限制 {@link DescribeRuleLimitRequest} {@link DescribeRuleLimitResponse} */
  DescribeRuleLimit(data: DescribeRuleLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleLimitResponse>;
  /** 获取CDC场景下对客户已经开放的负载均衡型WAF(cdc-clb-waf)的地域 {@link DescribeUserCdcClbWafRegionsRequest} {@link DescribeUserCdcClbWafRegionsResponse} */
  DescribeUserCdcClbWafRegions(data?: DescribeUserCdcClbWafRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCdcClbWafRegionsResponse>;
  /** 获取对客户已经开放的负载均衡型WAF(clb-waf)的地域 {@link DescribeUserClbWafRegionsRequest} {@link DescribeUserClbWafRegionsResponse} */
  DescribeUserClbWafRegions(data?: DescribeUserClbWafRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserClbWafRegionsResponse>;
  /** 查询VIP信息 {@link DescribeVipInfoRequest} {@link DescribeVipInfoResponse} */
  DescribeVipInfo(data: DescribeVipInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVipInfoResponse>;
  /** 查询ip惩罚规则 {@link DescribeWafAutoDenyRulesRequest} {@link DescribeWafAutoDenyRulesResponse} */
  DescribeWafAutoDenyRules(data: DescribeWafAutoDenyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafAutoDenyRulesResponse>;
  /** 描述WAF自动封禁模块详情 {@link DescribeWafAutoDenyStatusRequest} {@link DescribeWafAutoDenyStatusResponse} */
  DescribeWafAutoDenyStatus(data?: DescribeWafAutoDenyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafAutoDenyStatusResponse>;
  /** 描述WAF威胁情报封禁模块配置详情 {@link DescribeWafThreatenIntelligenceRequest} {@link DescribeWafThreatenIntelligenceResponse} */
  DescribeWafThreatenIntelligence(data?: DescribeWafThreatenIntelligenceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafThreatenIntelligenceResponse>;
  /** 查询下载攻击日志任务记录列表 {@link GetAttackDownloadRecordsRequest} {@link GetAttackDownloadRecordsResponse} */
  GetAttackDownloadRecords(data?: GetAttackDownloadRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<GetAttackDownloadRecordsResponse>;
  /** 攻击日志统计 {@link GetAttackHistogramRequest} {@link GetAttackHistogramResponse} */
  GetAttackHistogram(data: GetAttackHistogramRequest, config?: AxiosRequestConfig): AxiosPromise<GetAttackHistogramResponse>;
  /** 修改访问日志保存期限 {@link ModifyAccessPeriodRequest} {@link ModifyAccessPeriodResponse} */
  ModifyAccessPeriod(data: ModifyAccessPeriodRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessPeriodResponse>;
  /** 修改地域封禁状态 {@link ModifyAreaBanStatusRequest} {@link ModifyAreaBanStatusResponse} */
  ModifyAreaBanStatus(data: ModifyAreaBanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAreaBanStatusResponse>;
  /** 开启或禁用访问控制（自定义策略） {@link ModifyCustomRuleStatusRequest} {@link ModifyCustomRuleStatusResponse} */
  ModifyCustomRuleStatus(data: ModifyCustomRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomRuleStatusResponse>;
  /** 编辑精准白名单 {@link ModifyCustomWhiteRuleRequest} {@link ModifyCustomWhiteRuleResponse} */
  ModifyCustomWhiteRule(data: ModifyCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomWhiteRuleResponse>;
  /** 更改某一条规则 {@link ModifyDomainWhiteRuleRequest} {@link ModifyDomainWhiteRuleResponse} */
  ModifyDomainWhiteRule(data?: ModifyDomainWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainWhiteRuleResponse>;
  /** 修改域名配置 {@link ModifySpartaProtectionRequest} {@link ModifySpartaProtectionResponse} */
  ModifySpartaProtection(data: ModifySpartaProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySpartaProtectionResponse>;
  /** 修改ip惩罚规则 {@link ModifyWafAutoDenyRulesRequest} {@link ModifyWafAutoDenyRulesResponse} */
  ModifyWafAutoDenyRules(data: ModifyWafAutoDenyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWafAutoDenyRulesResponse>;
  /** 配置WAF自动封禁模块状态 {@link ModifyWafAutoDenyStatusRequest} {@link ModifyWafAutoDenyStatusResponse} */
  ModifyWafAutoDenyStatus(data: ModifyWafAutoDenyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWafAutoDenyStatusResponse>;
  /** 配置WAF威胁情报封禁模块详情 {@link ModifyWafThreatenIntelligenceRequest} {@link ModifyWafThreatenIntelligenceResponse} */
  ModifyWafThreatenIntelligence(data?: ModifyWafThreatenIntelligenceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWafThreatenIntelligenceResponse>;
  /** 创建搜索下载攻击日志任务 {@link PostAttackDownloadTaskRequest} {@link PostAttackDownloadTaskResponse} */
  PostAttackDownloadTask(data: PostAttackDownloadTaskRequest, config?: AxiosRequestConfig): AxiosPromise<PostAttackDownloadTaskResponse>;
  /** 搜索访问日志 {@link SearchAccessLogRequest} {@link SearchAccessLogResponse} */
  SearchAccessLog(data: SearchAccessLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchAccessLogResponse>;
  /** 搜索CLS新版本攻击日志 {@link SearchAttackLogRequest} {@link SearchAttackLogResponse} */
  SearchAttackLog(data: SearchAttackLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchAttackLogResponse>;
  /** 切换域名的规则开关 {@link SwitchDomainRulesRequest} {@link SwitchDomainRulesResponse} */
  SwitchDomainRules(data?: SwitchDomainRulesRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDomainRulesResponse>;
  /** Waf IP黑白名单Upsert接口 {@link UpsertIpAccessControlRequest} {@link UpsertIpAccessControlResponse} */
  UpsertIpAccessControl(data: UpsertIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<UpsertIpAccessControlResponse>;
}

export declare type Versions = ["2018-01-25"];

export default Waf;
