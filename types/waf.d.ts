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

/** 域名的详细信息 */
declare interface DomainInfo {
}

/** clb-waf 域名扩展套餐 */
declare interface DomainPackageNew {
  /** 资源ID */
  ResourceIds: string;
  /** 过期时间 */
  ValidTime: string;
  /** 是否自动续费，1：自动续费，0：不自动续费 */
  RenewFlag: number;
  /** 套餐购买个数 */
  Count: number;
  /** 套餐购买地域，clb-waf暂时没有用到 */
  Region: string;
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

/** 实例入参过滤器 */
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
}

/** 一个实例的详细信息 */
declare interface InstanceInfo {
  /** id */
  InstanceId: string;
  /** name */
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
  ResourceIds: string;
  /** 过期时间 */
  ValidTime: string;
  /** 是否自动续费，1：自动续费，0：不自动续费 */
  RenewFlag: number;
  /** 套餐购买个数 */
  Count: number;
  /** 套餐购买地域，clb-waf暂时没有用到 */
  Region: string;
}

/** 响应体的返回码 */
declare interface ResponseCode {
  /** 如果成功则返回Success，失败则返回yunapi定义的错误码 */
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

/** 自定义规则的匹配条件结构体 */
declare interface Strategy {
  /** 匹配字段 */
  Field: string;
  /** 逻辑符号 */
  CompareFunc: string;
  /** 匹配内容 */
  Content: string;
  /** 匹配参数 */
  Arg: string;
}

/** Waf 威胁情报封禁模块配置详情 */
declare interface WafThreatenIntelligenceDetails {
  /** 封禁模组启用状态 */
  DefenseStatus: number;
  /** 封禁属性标签 */
  Tags?: string[] | null;
  /** 最后更新时间 */
  LastUpdateTime?: string;
}

declare interface AddCustomRuleRequest {
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
  /** 动作类型 */
  ActionType: string;
  /** 如果动作是重定向，则表示重定向的地址；其他情况可以为空 */
  Redirect?: string;
  /** "clb-waf"或者"sparta-waf" */
  Edition?: string;
  /** 放行的详情 */
  Bypass?: string;
}

declare interface AddCustomRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success: ResponseCode;
  /** 添加成功的规则ID */
  RuleId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddDomainWhiteRuleRequest {
  /** 需要添加的域名 */
  Domain: string;
  /** 需要添加的规则 */
  Rules: number[];
  /** 需要添加的规则url */
  Url: string;
  /** 规则的方法 */
  Function: string;
  /** 规则的开关 */
  Status: number;
}

declare interface AddDomainWhiteRuleResponse {
  /** 规则id */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 负载均衡策略，0表示轮徇，1表示IP hash */
  LoadBalance: string;
  /** CertType=1时，需要填次参数，表示证书内容 */
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
  /** 版本：sparta-waf、clb-waf、cdn-waf */
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
}

declare interface AddSpartaProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAccessExportRequest {
  /** 日志导出ID */
  ExportId: string;
  /** 日志主题 */
  TopicId: string;
}

declare interface DeleteAccessExportResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAttackDownloadRecordRequest {
  /** 下载任务记录唯一标记 */
  Id: number;
}

declare interface DeleteAttackDownloadRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDomainWhiteRulesRequest {
  /** 需要删除的规则域名 */
  Domain: string;
  /** 需要删除的白名单规则 */
  Ids: number[];
}

declare interface DeleteDomainWhiteRulesResponse {
  /** 出参 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDownloadRecordRequest {
  /** 记录id */
  Flow: string;
}

declare interface DeleteDownloadRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteIpAccessControlRequest {
  /** 域名 */
  Domain: string;
  /** 删除的ip数组 */
  Items: string[];
  /** 删除对应的域名下的所有黑/白IP名额单 */
  DeleteAll?: boolean;
  /** 是否为多域名黑白名单 */
  SourceType?: string;
}

declare interface DeleteIpAccessControlResponse {
  /** 删除失败的条目 */
  FailedItems: string | null;
  /** 删除失败的条目数 */
  FailedCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccessIndexRequest {
}

declare interface DescribeAccessIndexResponse {
  /** 是否生效 */
  Status: boolean;
  /** 索引配置信息 */
  Rule: AccessRuleInfo | null;
  /** 索引修改时间，初始值为索引创建时间。 */
  ModifyTime: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 排序方式 */
  Sort?: string;
  /** 规则ID */
  RuleId?: string;
}

declare interface DescribeDomainWhiteRulesResponse {
  /** 规则列表 */
  RuleList: RuleList[];
  /** 规则的数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDomainsRequest {
  /** 偏移 */
  Offset: number;
  /** 容量 */
  Limit: number;
  /** 过滤数组 */
  Filters?: FiltersItemNew[];
}

declare interface DescribeDomainsResponse {
  /** 总数 */
  Total: number;
  /** domain列表 */
  Domains: DomainInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 偏移 */
  Offset: number;
  /** 容量 */
  Limit: number;
  /** 过滤数组 */
  Filters?: FiltersItemNew[];
}

declare interface DescribeInstancesResponse {
  /** 总数 */
  Total: number;
  /** instance列表 */
  Instances: InstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIpAccessControlRequest {
  /** 域名 */
  Domain: string;
  /** 计数标识 */
  Count: number;
  /** 动作 */
  ActionType?: number;
  /** 有效时间最小时间戳 */
  VtsMin?: number;
  /** 有效时间最大时间戳 */
  VtsMax?: number;
  /** 创建时间最小时间戳 */
  CtsMin?: number;
  /** 创建时间最大时间戳 */
  CtsMax?: number;
  /** 偏移 */
  OffSet?: number;
  /** 限制 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserCdcClbWafRegionsRequest {
}

declare interface DescribeUserCdcClbWafRegionsResponse {
  /** CdcRegion的类型描述 */
  Data: CdcRegion[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserClbWafRegionsRequest {
}

declare interface DescribeUserClbWafRegionsResponse {
  /** 地域（标准的ap-格式）列表 */
  Data: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWafAutoDenyStatusRequest {
}

declare interface DescribeWafAutoDenyStatusResponse {
  /** WAF 自动封禁详情 */
  WafAutoDenyDetails?: AutoDenyDetail;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWafThreatenIntelligenceRequest {
}

declare interface DescribeWafThreatenIntelligenceResponse {
  /** WAF 威胁情报封禁信息 */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetAttackDownloadRecordsRequest {
}

declare interface GetAttackDownloadRecordsResponse {
  /** 下载攻击日志记录数组 */
  Records: DownloadAttackRecordInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAccessPeriodRequest {
  /** 访问日志保存期限，范围为[1, 30] */
  Period: number;
  /** 日志主题 */
  TopicId: string;
}

declare interface ModifyAccessPeriodResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Success: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDomainWhiteRuleRequest {
  /** 需要更改的规则的域名 */
  Domain: string;
  /** 白名单id */
  Id: number;
  /** 规则的id列表 */
  Rules: number[];
  /** 规则匹配路径 */
  Url: string;
  /** 规则匹配方法 */
  Function: string;
  /** 规则的开关状态 */
  Status: number;
}

declare interface ModifyDomainWhiteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyWafAutoDenyRulesRequest {
  /** 域名 */
  Domain: string;
  /** 攻击次数阈值 */
  AttackThreshold: number;
  /** 攻击时间阈值 */
  TimeThreshold: number;
  /** 自动封禁时间 */
  DenyTimeThreshold: number;
  /** 自动封禁状态 */
  DefenseStatus: number;
}

declare interface ModifyWafAutoDenyRulesResponse {
  /** 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码） */
  Success: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyWafAutoDenyStatusRequest {
  /** WAF 自动封禁配置项 */
  WafAutoDenyDetails: AutoDenyDetail;
}

declare interface ModifyWafAutoDenyStatusResponse {
  /** WAF 自动封禁配置项 */
  WafAutoDenyDetails?: AutoDenyDetail;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyWafThreatenIntelligenceRequest {
  /** 配置WAF威胁情报封禁模块详情 */
  WafThreatenIntelligenceDetails: WafThreatenIntelligenceDetails;
}

declare interface ModifyWafThreatenIntelligenceResponse {
  /** 当前WAF威胁情报封禁模块详情 */
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface PostAttackDownloadTaskResponse {
  /** 任务task id */
  Flow?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchAccessLogRequest {
  /** 客户要查询的日志主题ID，每个客户都有对应的一个主题 */
  TopicId: string;
  /** 要查询的日志的起始时间，Unix时间戳，单位ms */
  From: number;
  /** 要查询的日志的结束时间，Unix时间戳，单位ms */
  To: number;
  /** 查询语句，语句长度最大为4096 */
  Query: string;
  /** 单次查询返回的日志条数，最大值为100 */
  Limit?: number;
  /** 加载更多日志时使用，透传上次返回的Context值，获取后续的日志内容 */
  Context?: string;
  /** 日志接口是否按时间排序返回；可选值：asc(升序)、desc(降序)，默认为 desc */
  Sort?: string;
}

declare interface SearchAccessLogResponse {
  /** 加载后续内容的Context */
  Context: string;
  /** 日志查询结果是否全部返回 */
  ListOver: boolean;
  /** 返回的是否为分析结果 */
  Analysis: boolean;
  /** 如果Analysis为True，则返回分析结果的列名，否则为空 */
  ColNames: string[] | null;
  /** 日志查询结果；当Analysis为True时，可能返回为null注意：此字段可能返回 null，表示取不到有效值 */
  Results: AccessLogInfo[] | null;
  /** 日志分析结果；当Analysis为False时，可能返回为null注意：此字段可能返回 null，表示取不到有效值 */
  AnalysisResults: AccessLogItems[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpsertIpAccessControlRequest {
  /** 域名 */
  Domain: string;
  /** ip 参数列表，json数组由ip，source，note，action，valid_ts组成。ip对应配置的ip地址，source固定为custom值，note为注释，action值42为黑名单，40为白名单，valid_ts为有效日期，值为秒级时间戳 */
  Items: string[];
  /** clb-waf或者sparta-waf */
  Edition?: string;
  /** 是否为多域名黑白名单 */
  SourceType?: string;
}

declare interface UpsertIpAccessControlResponse {
  /** 添加或修改失败的条目 */
  FailedItems: string | null;
  /** 添加或修改失败的数目 */
  FailedCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Waf Web 应用防火墙} */
declare interface Waf {
  (): Versions;
  /** {@link AddCustomRule 增加自定义策略}({@link AddCustomRuleRequest 请求参数}): {@link AddCustomRuleResponse 返回参数} */
  AddCustomRule(data: AddCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddCustomRuleResponse>;
  /** {@link AddDomainWhiteRule 增加域名规则白名单}({@link AddDomainWhiteRuleRequest 请求参数}): {@link AddDomainWhiteRuleResponse 返回参数} */
  AddDomainWhiteRule(data: AddDomainWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddDomainWhiteRuleResponse>;
  /** {@link AddSpartaProtection 添加Spart防护域名}({@link AddSpartaProtectionRequest 请求参数}): {@link AddSpartaProtectionResponse 返回参数} */
  AddSpartaProtection(data: AddSpartaProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<AddSpartaProtectionResponse>;
  /** {@link CreateAccessExport 创建访问日志导出}({@link CreateAccessExportRequest 请求参数}): {@link CreateAccessExportResponse 返回参数} */
  CreateAccessExport(data: CreateAccessExportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessExportResponse>;
  /** {@link DeleteAccessExport 删除访问日志导出}({@link DeleteAccessExportRequest 请求参数}): {@link DeleteAccessExportResponse 返回参数} */
  DeleteAccessExport(data: DeleteAccessExportRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccessExportResponse>;
  /** {@link DeleteAttackDownloadRecord 删除攻击日志下载任务记录}({@link DeleteAttackDownloadRecordRequest 请求参数}): {@link DeleteAttackDownloadRecordResponse 返回参数} */
  DeleteAttackDownloadRecord(data: DeleteAttackDownloadRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAttackDownloadRecordResponse>;
  /** {@link DeleteDomainWhiteRules 删除域名规则白名单}({@link DeleteDomainWhiteRulesRequest 请求参数}): {@link DeleteDomainWhiteRulesResponse 返回参数} */
  DeleteDomainWhiteRules(data: DeleteDomainWhiteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainWhiteRulesResponse>;
  /** {@link DeleteDownloadRecord 删除访问日志下载记录}({@link DeleteDownloadRecordRequest 请求参数}): {@link DeleteDownloadRecordResponse 返回参数} */
  DeleteDownloadRecord(data: DeleteDownloadRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDownloadRecordResponse>;
  /** {@link DeleteIpAccessControl Waf IP黑白名单Delete接口}({@link DeleteIpAccessControlRequest 请求参数}): {@link DeleteIpAccessControlResponse 返回参数} */
  DeleteIpAccessControl(data: DeleteIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIpAccessControlResponse>;
  /** {@link DeleteSession 删除CC攻击的session设置}({@link DeleteSessionRequest 请求参数}): {@link DeleteSessionResponse 返回参数} */
  DeleteSession(data: DeleteSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSessionResponse>;
  /** {@link DescribeAccessExports 获取访问日志导出列表}({@link DescribeAccessExportsRequest 请求参数}): {@link DescribeAccessExportsResponse 返回参数} */
  DescribeAccessExports(data: DescribeAccessExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessExportsResponse>;
  /** {@link DescribeAccessFastAnalysis 访问日志快速分析统计}({@link DescribeAccessFastAnalysisRequest 请求参数}): {@link DescribeAccessFastAnalysisResponse 返回参数} */
  DescribeAccessFastAnalysis(data: DescribeAccessFastAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessFastAnalysisResponse>;
  /** {@link DescribeAccessIndex 获取访问日志索引配置信息}({@link DescribeAccessIndexRequest 请求参数}): {@link DescribeAccessIndexResponse 返回参数} */
  DescribeAccessIndex(data?: DescribeAccessIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessIndexResponse>;
  /** {@link DescribeAutoDenyIP 描述WAF自动封禁IP详情}({@link DescribeAutoDenyIPRequest 请求参数}): {@link DescribeAutoDenyIPResponse 返回参数} */
  DescribeAutoDenyIP(data: DescribeAutoDenyIPRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoDenyIPResponse>;
  /** {@link DescribeDomainWhiteRules 获取域名的规则白名单}({@link DescribeDomainWhiteRulesRequest 请求参数}): {@link DescribeDomainWhiteRulesResponse 返回参数} */
  DescribeDomainWhiteRules(data: DescribeDomainWhiteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainWhiteRulesResponse>;
  /** {@link DescribeDomains 查询用户所有域名的详细信息}({@link DescribeDomainsRequest 请求参数}): {@link DescribeDomainsResponse 返回参数} */
  DescribeDomains(data: DescribeDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainsResponse>;
  /** {@link DescribeFlowTrend 获取waf流量访问趋势}({@link DescribeFlowTrendRequest 请求参数}): {@link DescribeFlowTrendResponse 返回参数} */
  DescribeFlowTrend(data: DescribeFlowTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowTrendResponse>;
  /** {@link DescribeInstances 查询用户所有实例的详细信息}({@link DescribeInstancesRequest 请求参数}): {@link DescribeInstancesResponse 返回参数} */
  DescribeInstances(data: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** {@link DescribeIpAccessControl Waf ip黑白名单查询}({@link DescribeIpAccessControlRequest 请求参数}): {@link DescribeIpAccessControlResponse 返回参数} */
  DescribeIpAccessControl(data: DescribeIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpAccessControlResponse>;
  /** {@link DescribeIpHitItems Waf IP封堵状态查询}({@link DescribeIpHitItemsRequest 请求参数}): {@link DescribeIpHitItemsResponse 返回参数} */
  DescribeIpHitItems(data: DescribeIpHitItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpHitItemsResponse>;
  /** {@link DescribeUserCdcClbWafRegions 获取CDC场景下对客户已经开放的负载均衡型WAF(cdc-clb-waf)的地域}({@link DescribeUserCdcClbWafRegionsRequest 请求参数}): {@link DescribeUserCdcClbWafRegionsResponse 返回参数} */
  DescribeUserCdcClbWafRegions(data?: DescribeUserCdcClbWafRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCdcClbWafRegionsResponse>;
  /** {@link DescribeUserClbWafRegions 获取对客户已经开放的负载均衡型WAF(clb-waf)的地域}({@link DescribeUserClbWafRegionsRequest 请求参数}): {@link DescribeUserClbWafRegionsResponse 返回参数} */
  DescribeUserClbWafRegions(data?: DescribeUserClbWafRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserClbWafRegionsResponse>;
  /** {@link DescribeWafAutoDenyRules 查询ip惩罚规则}({@link DescribeWafAutoDenyRulesRequest 请求参数}): {@link DescribeWafAutoDenyRulesResponse 返回参数} */
  DescribeWafAutoDenyRules(data: DescribeWafAutoDenyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafAutoDenyRulesResponse>;
  /** {@link DescribeWafAutoDenyStatus 描述WAF自动封禁模块详情}({@link DescribeWafAutoDenyStatusRequest 请求参数}): {@link DescribeWafAutoDenyStatusResponse 返回参数} */
  DescribeWafAutoDenyStatus(data?: DescribeWafAutoDenyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafAutoDenyStatusResponse>;
  /** {@link DescribeWafThreatenIntelligence 描述WAF威胁情报封禁模块配置详情}({@link DescribeWafThreatenIntelligenceRequest 请求参数}): {@link DescribeWafThreatenIntelligenceResponse 返回参数} */
  DescribeWafThreatenIntelligence(data?: DescribeWafThreatenIntelligenceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafThreatenIntelligenceResponse>;
  /** {@link GetAttackDownloadRecords 查询下载攻击日志任务记录列表}({@link GetAttackDownloadRecordsRequest 请求参数}): {@link GetAttackDownloadRecordsResponse 返回参数} */
  GetAttackDownloadRecords(data?: GetAttackDownloadRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<GetAttackDownloadRecordsResponse>;
  /** {@link ModifyAccessPeriod 修改访问日志保存期限}({@link ModifyAccessPeriodRequest 请求参数}): {@link ModifyAccessPeriodResponse 返回参数} */
  ModifyAccessPeriod(data: ModifyAccessPeriodRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessPeriodResponse>;
  /** {@link ModifyCustomRuleStatus 开启或禁用自定义策略}({@link ModifyCustomRuleStatusRequest 请求参数}): {@link ModifyCustomRuleStatusResponse 返回参数} */
  ModifyCustomRuleStatus(data: ModifyCustomRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomRuleStatusResponse>;
  /** {@link ModifyDomainWhiteRule 更改某一条规则}({@link ModifyDomainWhiteRuleRequest 请求参数}): {@link ModifyDomainWhiteRuleResponse 返回参数} */
  ModifyDomainWhiteRule(data: ModifyDomainWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainWhiteRuleResponse>;
  /** {@link ModifyWafAutoDenyRules 修改ip惩罚规则}({@link ModifyWafAutoDenyRulesRequest 请求参数}): {@link ModifyWafAutoDenyRulesResponse 返回参数} */
  ModifyWafAutoDenyRules(data: ModifyWafAutoDenyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWafAutoDenyRulesResponse>;
  /** {@link ModifyWafAutoDenyStatus 配置WAF自动封禁模块状态}({@link ModifyWafAutoDenyStatusRequest 请求参数}): {@link ModifyWafAutoDenyStatusResponse 返回参数} */
  ModifyWafAutoDenyStatus(data: ModifyWafAutoDenyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWafAutoDenyStatusResponse>;
  /** {@link ModifyWafThreatenIntelligence 配置WAF威胁情报封禁模块详情}({@link ModifyWafThreatenIntelligenceRequest 请求参数}): {@link ModifyWafThreatenIntelligenceResponse 返回参数} */
  ModifyWafThreatenIntelligence(data: ModifyWafThreatenIntelligenceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWafThreatenIntelligenceResponse>;
  /** {@link PostAttackDownloadTask 创建搜索下载攻击日志任务}({@link PostAttackDownloadTaskRequest 请求参数}): {@link PostAttackDownloadTaskResponse 返回参数} */
  PostAttackDownloadTask(data: PostAttackDownloadTaskRequest, config?: AxiosRequestConfig): AxiosPromise<PostAttackDownloadTaskResponse>;
  /** {@link SearchAccessLog 搜索访问日志}({@link SearchAccessLogRequest 请求参数}): {@link SearchAccessLogResponse 返回参数} */
  SearchAccessLog(data: SearchAccessLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchAccessLogResponse>;
  /** {@link UpsertIpAccessControl Waf IP黑白名单Upsert接口}({@link UpsertIpAccessControlRequest 请求参数}): {@link UpsertIpAccessControlResponse 返回参数} */
  UpsertIpAccessControl(data: UpsertIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<UpsertIpAccessControlResponse>;
}

export declare type Versions = ["2018-01-25"];

export default Waf;
