/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** DescribeAccessFastAnalysis接口的出参 */
declare interface AccessFieldValueRatioInfo {
  /** 日志条数 */
  Count?: number;
  /** 对应的Value值的百分比 */
  Ratio?: number;
  /** 字段对应的值 */
  Value?: string;
}

/** DescribeAccessIndex */
declare interface AccessFullTextInfo {
  /** 是否大小写敏感 */
  CaseSensitive?: boolean;
  /** 全文索引的分词符，字符串中每个字符代表一个分词符 */
  Tokenizer?: string;
  /** 是否包含中文 */
  ContainZH?: boolean;
}

/** 用于接口DescribeAccessHistogram 的出参 */
declare interface AccessHistogramItem {
  /** 时间，单位ms */
  BTime?: number;
  /** 日志条数 */
  Count?: number;
  /** 时间，单位ms */
  BeginTime?: number;
}

/** 用于 DescribeAccessIndex 的出参 */
declare interface AccessKeyValueInfo {
  /** 需要配置键值或者元字段索引的字段 */
  Key?: string;
  /** 字段的索引描述信息 */
  Value?: AccessValueInfo;
}

/** 单条日志数据描述 */
declare interface AccessLogInfo {
  /** 日志时间，单位ms */
  Time?: number;
  /** 日志主题ID */
  TopicId?: string;
  /** 日志主题名称 */
  TopicName?: string;
  /** 日志来源IP */
  Source?: string;
  /** 日志文件名称 */
  FileName?: string;
  /** 日志上报请求包的ID */
  PkgId?: string;
  /** 请求包内日志的ID */
  PkgLogId?: string;
  /** 日志内容的Json序列化字符串 */
  LogJson?: string;
}

/** 日志KeyValue对 */
declare interface AccessLogItem {
  /** 日记Key */
  Key?: string;
  /** 日志Value */
  Value?: string;
}

/** 日志KeyValue对数组，用于搜索访问日志 */
declare interface AccessLogItems {
  /** 分析结果返回的KV数据对 */
  Data?: AccessLogItem[];
}

/** DescribeAccessIndex接口的出参数 */
declare interface AccessRuleInfo {
  /** 全文索引配置 */
  FullText?: AccessFullTextInfo;
  /** 键值索引配置 */
  KeyValue?: AccessRuleKeyValueInfo;
  /** 元字段索引配置 */
  Tag?: AccessRuleTagInfo;
}

/** DescribeAccessIndex接口的出参 */
declare interface AccessRuleKeyValueInfo {
  /** 是否大小写敏感 */
  CaseSensitive?: boolean;
  /** 需要建立索引的键值对信息；最大只能配置100个键值对 */
  KeyValues?: AccessKeyValueInfo[];
}

/** DescribeAccessIndex接口的出参 */
declare interface AccessRuleTagInfo {
  /** 是否大小写敏感 */
  CaseSensitive?: boolean;
  /** 标签索引配置中的字段信息 */
  KeyValues?: AccessKeyValueInfo[];
}

/** 用于DescribeAccessIndex接口的出参 */
declare interface AccessValueInfo {
  /** 字段类型，目前支持的类型有：long、text、double */
  Type?: string;
  /** 字段的分词符，只有当字段类型为text时才有意义；输入字符串中的每个字符代表一个分词符 */
  Tokenizer?: string;
  /** 字段是否开启分析功能 */
  SqlFlag?: boolean;
  /** 是否包含中文 */
  ContainZH?: boolean;
}

/** api列表 */
declare interface ApiAsset {
  /** 域名 */
  Domain?: string;
  /** 请求方法 */
  Method?: string;
  /** api名称 */
  ApiName?: string;
  /** 场景 */
  Scene?: string;
  /** 数据标签 */
  Label?: string[];
  /** 过去7天是否活跃 */
  Active?: boolean;
  /** 最近更新时间 */
  Timestamp?: number;
  /** api发现时间 */
  InsertTime?: number;
  /** 资产状态，1:新发现，2，确认中，3，已确认，4，已下线，5，已忽略 */
  Mode?: string;
  /** 风险等级，100,200,300对应低中高 */
  Level?: string;
  /** 近30天调用量 */
  Count?: number;
  /** 备注 */
  Remark?: string;
  /** 是否鉴权，1标识是，0表示否 */
  IsAuth?: number;
  /** 如果添加了api入参检测规则，则此id返回值不为0 */
  ApiRequestRuleId?: number;
  /** 如果添加了api限流规则，则此id返回值不为0 */
  ApiLimitRuleId?: number;
  /** 对象接入和泛域名接入时，展示host列表 */
  HostList?: string[];
}

/** api资产列表过滤器 */
declare interface ApiDataFilter {
  /** 数据标签，是否活跃，功能场景 */
  Entity: string;
  /** 等于 */
  Operator: string;
  /** 日期，手机号，邮箱等 */
  Value: string;
}

/** api历史样例返回结构体 */
declare interface ApiDetailSampleHistory {
  /** 样例名称 */
  SampleNme?: string;
  /** 请求样例 */
  RepLog?: string;
  /** 响应样例 */
  RspLog?: string;
}

/** api请求参数类型 */
declare interface ApiParameterType {
  /** 参数名称 */
  ParameterName?: string;
  /** 参数类型 */
  Type?: string;
  /** 参数位置 */
  Location?: string;
  /** 数据标签(敏感字段) */
  Label?: string[];
  /** 时间戳 */
  Timestamp?: number;
  /** 备注信息 */
  Remark?: string;
  /** 来源是请求或者响应 */
  Source?: string;
  /** 是否需要泛化 ，0表示不需要，1表示需要 */
  IsPan?: number;
  /** 是否鉴权，1表示是，0表示否 */
  IsAuth?: number;
}

/** API安全资源信息 */
declare interface ApiPkg {
  /** 资源id */
  ResourceIds?: string;
  /** 状态 */
  Status?: number;
  /** 地域 */
  Region?: number;
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 申请数量 */
  InquireNum?: number;
  /** 使用数量 */
  UsedNum?: number;
  /** 续费标志 */
  RenewFlag?: number;
  /** 计费项 */
  BillingItem?: string;
  /** api安全7天试用标识。1试用。0没试用 */
  IsAPISecurityTrial?: number;
}

/** api列表 */
declare interface ApiSecKey {
  /** api名称 */
  ApiName: string;
  /** 域名 */
  Domain: string;
  /** 请求方法 */
  Method: string;
}

/** 地域信息 */
declare interface Area {
  /** 国家，除了标准的国家外还支持国内、国外这两个特殊的标识 */
  Country: string;
  /** 省份 */
  Region?: string;
  /** 城市 */
  City?: string;
}

/** 地域封禁规则详情 */
declare interface AreaBanRule {
  /** 状态 0：未开启地域封禁、1：开启地域封禁 */
  Status?: number;
  /** 数据来源 custom：自定义(默认)、batch：批量防护 */
  Source?: string;
  /** 配置的地域列表 */
  Areas?: Area[];
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType?: string;
  /** 定时任务配置 */
  JobDateTime?: JobDateTime;
  /** 如果是周期任务类型，那么表示周期的类型，支持 Week：按周、Month：按月 */
  CronType?: string;
  /** 地域信息的语言，支持cn、en，默认为中文cn */
  Lang?: string;
}

/** 攻击日志详情 */
declare interface AttackLogInfo {
  /** 攻击日志的详情内容 */
  Content?: string;
  /** CLS返回内容 */
  FileName?: string;
  /** CLS返回内容 */
  Source?: string;
  /** CLS返回内容 */
  TimeStamp?: string;
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

/** 多域名黑白名单describe返回 */
declare interface BatchIpAccessControlData {
  /** 总数 */
  TotalCount?: number;
  /** 黑白名单条目 */
  Res?: BatchIpAccessControlItem[];
}

/** 批量多域名黑白名单列表Ip */
declare interface BatchIpAccessControlItem {
  /** mongo表自增Id */
  Id?: string;
  /** 黑名单42或白名单40 */
  ActionType?: number;
  /** 黑白名单的IP */
  Ip?: string;
  /** 备注 */
  Note?: string;
  /** batch为批量域名，batch-group为防护对象组 */
  Source?: string;
  /** 修改时间 */
  TsVersion?: number;
  /** 超时时间 */
  ValidTs?: number;
  /** 域名列表 */
  Hosts?: string[];
  /** 55101145 */
  RuleId?: number;
  /** IP列表 */
  IpList?: string[];
  /** 创建时间 */
  CreateTime?: number;
  /** 定时任务类型 */
  JobType?: string;
  /** 周期任务类型 */
  CronType?: string;
  /** 定时任务配置详情 */
  JobDateTime?: JobDateTime;
  /** 生效状态 */
  ValidStatus?: number;
  /** 防护对象组ID列表，如果绑定的是防护对象组 */
  GroupIds?: number[];
}

/** 动作策略的匹配规则实体 */
declare interface BotActionScopeRuleEntry {
  /** 参数 */
  Key?: string;
  /** 匹配符 */
  Op?: string;
  /** 参数值 */
  Value?: string;
  /** 对于头部字段匹配value的时候指定的头部名 */
  Name?: string;
  /** 470后使用此字段存储多值 */
  ValueArray?: string[];
}

/** Bot资源信息 */
declare interface BotPkg {
  /** 资源id */
  ResourceIds?: string;
  /** 状态 */
  Status?: number;
  /** 地域 */
  Region?: number;
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 申请数量 */
  InquireNum?: number;
  /** 使用数量 */
  UsedNum?: number;
  /** 子产品code */
  Type?: string;
  /** 续费标志 */
  RenewFlag?: number;
  /** 购买页bot6折 */
  BotCPWaf?: number;
  /** 控制台买bot5折 */
  BotNPWaf?: number;
  /** 7天bot试用标识 1 试用 0 没有试用 */
  IsBotTrial?: number;
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
  RenewFlag: number;
}

/** 获取场景动作策略列表时的动作策略实体 */
declare interface BotSceneActionRule {
  /** 动作策略ID */
  RuleId?: string;
  /** 动作策略名称 */
  RuleName?: string;
  /** 策略优先级 */
  Priority?: number;
  /** 策略生效状态 */
  Status?: boolean;
  /** 分数范围 */
  Score?: BotScoreRuleEntry[];
  /** 100-宽松、200-中等、300-严格、0-自定义 */
  Level?: string;
  /** 生效范围，为空表示全部范围 */
  Scope?: BotActionScopeRuleEntry[];
  /** default：默认创建 custom：自定义创建 */
  Type?: string;
  /** 匹配范围类型：全局匹配 or 自定义匹配范围 */
  ScopeType?: string;
  /** 匹配条件间的与或关系 */
  ActionMatchType?: string;
}

/** 场景的详细配置信息 */
declare interface BotSceneInfo {
  /** 场景ID */
  SceneId?: string;
  /** 场景类型，default:默认场景,custom:非默认场景 */
  Type?: string;
  /** 场景名 */
  SceneName?: string;
  /** 更新时间 */
  UpdateTime?: number;
  /** 场景模板类型，登录: login 秒杀:seckill 爬内容：crawl 自定义: custom */
  BusinessType?: string[];
  /** 客户端类型，浏览器/H5 : browser 小程序: miniApp App: */
  ClientType?: string[];
  /** 优先级 */
  Priority?: number;
  /** 匹配范围 */
  MatchCondition?: BotSceneMatchCondition[];
  /** 场景开关 */
  SceneStatus?: boolean;
  /** 前端对抗开关 */
  JsInjectStatus?: boolean;
  /** AI开关 */
  AIStatus?: boolean;
  /** TI开关 */
  TIStatus?: boolean;
  /** 智能统计开关 */
  StatisticStatus?: boolean;
  /** 动作策略数量 */
  ActionRuleCount?: number;
  /** 自定义规则数量 */
  UCBCount?: number;
  /** 场景的匹配范围，global-全部匹配 custom-自定义匹配范围 */
  MatchType?: string;
  /** 匹配条件间的与或关系 */
  ActionMatchType?: string;
  /** UA模块开关 */
  UAStatus?: boolean;
  /** 简易模式场景：前端对抗对应mysql的记录id */
  JsInjectRuleId?: number;
  /** 简易模式场景：前端对抗配置动作 */
  JsInjectAction?: number;
  /** 简易模式场景：前端对抗重定向路径 */
  JsInjectRedirect?: string;
  /** 简易模式场景：动作策略信息 PS:简易模式只有一个动作策略 */
  ActionRuleList?: BotSceneActionRule[];
  /** 简易模式场景：monitor-观察 intercept-拦截 custom-自定义 */
  BotIdPattern?: string;
  /** 简易模式场景：bot_id规则总数 */
  BotIdCount?: number;
  /** 简易模式场景：观察动作的规则总数 */
  BotIdMonitorCount?: number;
  /** 简易模式场景：拦截动作的规则总数 */
  BotIdInterceptCount?: number;
  /** 创建场景时选择的规则集 */
  RuleSetSelection?: string[];
  /** 改场景的bot token列表 */
  TokenList?: BotToken[];
  /** 简易模式场景：重定向动作的规则总数 */
  BotIdRedirectCount?: number;
  /** 简易模式场景：人机识别动作的规则总数 */
  BotIdCaptchaCount?: number;
  /** 简易模式场景：防护等级 */
  BotIdProtectLevel?: string;
  /** 简易模式场景：全局重定向路径 */
  BotIdGlobalRedirect?: string;
  /** 简易模式场景：JS校验动作的规则总数 */
  BotIdJsChallengeCount?: number;
}

/** 场景匹配条件 */
declare interface BotSceneMatchCondition {
  /** 匹配参数 */
  Key: string;
  /** 匹配符 */
  Op: string;
  /** 匹配值 */
  Value: string;
  /** 对于头部字段匹配value的时候指定的头部名 */
  Name?: string;
  /** 470后使用此入参存在多值 */
  ValueArray?: string[];
}

/** 动作策略的一条分数段实体 */
declare interface BotScoreRuleEntry {
  /** 分数区间上限 */
  Upper: string;
  /** 分数区间下限 */
  Lower: string;
  /** 处置动作 */
  Action: string;
  /** 流量标签 */
  Label: string;
  /** 重定向 */
  Redirect?: string;
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

/** bot-token配置 */
declare interface BotToken {
  /** 会话名称 */
  Name?: string;
  /** 会话描述 */
  Description?: string;
  /** 会话id */
  Id?: string;
  /** 策略的开关状态 */
  Status?: boolean;
  /** 会话位置 */
  Location?: string;
  /** 会话key */
  Key?: string;
  /** 会话匹配方式，前缀匹配、后缀匹配等 */
  Operator?: string;
  /** 会话更新的时间戳 */
  Timestamp?: number;
  /** 场景列表，内容为空表示全部场景应用 */
  Scene?: string[];
  /** 优先级 */
  Priority?: number;
}

/** 数据封装 */
declare interface CCRuleData {
  /** cc规则 */
  Res?: CCRuleItem[];
  /** 规则数目 */
  TotalCount?: number;
}

/** cc规则 */
declare interface CCRuleItem {
  /** 动作，20表示观察，21表示人机识别，22表示拦截，23表示精准拦截，24表示JS校验 */
  ActionType?: number;
  /** 高级模式 */
  Advance?: number;
  /** 时间周期 */
  Interval?: number;
  /** 限制次数 */
  Limit?: number;
  /** 匹配方法 */
  MatchFunc?: number;
  /** 名称 */
  Name?: string;
  /** 优先级 */
  Priority?: number;
  /** 状态 */
  Status?: number;
  /** 更新时间戳 */
  TsVersion?: number;
  /** 匹配url */
  Url?: string;
  /** 策略动作有效时间 */
  ValidTime?: number;
  /** 高级参数 */
  OptionsArr?: string;
  /** url长度 */
  Length?: number;
  /** 规则ID */
  RuleId?: number;
  /** 事件id */
  EventId?: string;
  /** 关联的Session规则 */
  SessionApplied?: number[];
  /** 创建时间 */
  CreateTime?: number;
}

/** CC规则详情 */
declare interface CCRuleItems {
  /** 名字 */
  Name?: string;
  /** 状态 */
  Status?: number;
  /** 模式 */
  Advance?: number;
  /** 限制 */
  Limit?: number;
  /** 范围 */
  Interval?: number;
  /** 网址 */
  Url?: string;
  /** 匹配类型 */
  MatchFunc?: number;
  /** 动作，20表示观察，21表示人机识别，22表示拦截，23表示精准拦截，24表示JS校验 */
  ActionType?: number;
  /** 优先级 */
  Priority?: number;
  /** 有效时间 */
  ValidTime?: number;
  /** 版本 */
  TsVersion?: number;
  /** 规则详情 */
  Options?: string;
  /** 规则ID */
  RuleId?: number;
  /** 事件id */
  EventId?: string;
  /** 关联的Session规则 */
  SessionApplied?: number[];
  /** 创建时间 */
  CreateTime?: number;
  /** 限频方式 */
  LimitMethod?: string;
  /** cel表达式 */
  CelRule?: string;
  /** 逻辑操作符 */
  LogicalOp?: string;
}

/** CC规则总览 */
declare interface CCRuleLists {
  /** 总数 */
  TotalCount?: number;
  /** 规则 */
  Res?: CCRuleItems[];
}

/** 防篡改url元素 */
declare interface CacheUrlItems {
  /** 标识 */
  Id?: number;
  /** 名字 */
  Name?: string;
  /** 域名 */
  Domain?: string;
  /** 网址 */
  Uri?: string;
  /** 协议 */
  Protocol?: string;
  /** 状态 */
  Status?: number;
  /** 修改时间 */
  ModifyTime?: string;
  /** 创建时间 */
  CreateTime?: string;
}

/** CDC场景下负载均衡WAF的集群信息 */
declare interface CdcCluster {
  /** cdc的集群id */
  Id: string;
  /** cdc的集群名称 */
  Name: string;
}

/** CDC场景下负载均衡WAF的地域信息 */
declare interface CdcRegion {
  /** 地域 */
  Region: string;
  /** 该地域对应的集群信息 */
  Clusters: CdcCluster[];
}

/** 负载均衡型WAF域名详情 */
declare interface ClbDomainsInfo {
  /** 域名 */
  Domain?: string;
  /** 域名唯一ID */
  DomainId?: string;
  /** 域名所属实例ID */
  InstanceId?: string;
  /** 域名所属实例名 */
  InstanceName?: string;
  /** 域名所属实例类型 */
  Edition?: string;
  /** waf前是否部署有七层代理服务。 0：没有部署代理服务 1：有部署代理服务，waf将使用XFF获取客户端IP 2：有部署代理服务，waf将使用remote_addr获取客户端IP 3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP */
  IsCdn?: number;
  /** 负载均衡类型为clb时，对应的负载均衡器信息 */
  LoadBalancerSet?: LoadBalancerPackageNew[];
  /** 负载均衡型WAF的流量模式，1：清洗模式，0：镜像模式 */
  FlowMode?: number;
  /** 域名绑定负载均衡器状态 */
  State?: number;
  /** 负载均衡类型，clb或者apisix */
  AlbType?: string;
  /** IsCdn=3时，表示自定义header */
  IpHeaders?: string[];
  /** cdc-clb-waf类型WAF的CDC集群信息 */
  CdcClusters?: string;
  /** 云类型:public:公有云；private:私有云;hybrid:混合云 */
  CloudType?: string;
  /** 域名备注信息 */
  Note?: string;
  /** 域名标签 */
  Labels?: string[];
  /** clbwaf接入状态，0代表“尚无流量接入”，1代表“流量接入”，2代表“CLB监听器已注销”，3代表“配置生效中”，4代表“配置下发失败中” */
  AccessStatus?: number;
}

/** Clb类型防护对象 */
declare interface ClbObject {
  /** 对象ID */
  ObjectId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 精准域名列表 */
  PreciseDomains?: string[];
  /** WAF功能开关状态，0关闭1开启 */
  Status?: number;
  /** WAF日志开关状态，0关闭1开启 */
  ClsStatus?: number;
  /** CLB对象对应的虚拟域名 */
  VirtualDomain?: string;
  /** 对象名称 */
  ObjectName?: string;
  /** 公网地址 */
  PublicIp?: string[];
  /** 内网地址 */
  PrivateIp?: string[];
  /** VPC名称 */
  VpcName?: string;
  /** VPC ID */
  Vpc?: string;
  /** waf实例等级，如果未绑定实例为0 */
  InstanceLevel?: number;
  /** clb投递开关 */
  PostCLSStatus?: number;
  /** kafka投递开关 */
  PostCKafkaStatus?: number;
  /** 对象类型：CLB:负载均衡器，TSE:云原生网关 */
  Type?: string;
  /** 对象地域 */
  Region?: string;
  /** 代理状态: 0:不开启,1:以XFF的第一个IP地址作为客户端IP,2:以remote_addr作为客户端IP,3:从指定的头部字段获取客户端IP，字段通过IpHeaders字段给出 */
  Proxy?: number;
  /** 指定获取客户端IP的头部字段列表。IsCdn为3时有效 */
  IpHeaders?: string[];
  /** bot防护开关 */
  BotStatus?: number;
  /** api防护开关 */
  ApiStatus?: number;
  /** 对象接入模式，0表示镜像模式，1表示清洗模式，2表示体检模式，默认为清洗模式 */
  ObjectFlowMode?: number;
  /** 数值形式的私有网络 ID */
  NumericalVpcId?: number;
  /** 修改时间 */
  ModifyTime?: string;
  /** 创建时间 */
  AddTime?: string;
}

/** Clb-waf地域信息 */
declare interface ClbWafRegionItem {
  /** 地域ID */
  Id?: string;
  /** 地域中文说明 */
  Text?: string;
  /** 地域英文全拼 */
  Value?: string;
  /** 地域编码 */
  Code?: string;
}

/** 通用返回 */
declare interface CommonRspData {
  /** 操作结果 */
  Code?: number;
  /** 输出信息 */
  Msg?: string;
}

/** 计费下单接口出入参Goods */
declare interface CreateDealsGoods {
  /** 商品数量 */
  GoodsNum: number;
  /** 商品明细 */
  GoodsDetail: CreateDealsGoodsDetail;
  /** 订单类型ID，用来唯一标识一个业务的一种场景（总共三种场景：新购、配置变更、续费）高级版: 102375(新购),102376(续费),102377(变配)企业版 : 102378(新购),102379(续费),102380(变配)旗舰版 : 102369(新购),102370(续费),102371(变配)域名包 : 102372(新购),102373(续费),102374(变配)业务扩展包 : 101040(新购),101041(续费),101042(变配)高级版-CLB: 新购 101198 续费 101199 变配 101200企业版-CLB 101204(新购),101205(续费),101206(变配)旗舰版-CLB : 101201(新购),101202(续费),101203(变配)域名包-CLB: 101207(新购),101208(续费),101209(变配)业务扩展包-CLB: 101210(新购),101211(续费),101212(变配) */
  GoodsCategoryId?: number;
  /** 购买waf实例区域ID1 表示购买大陆资源;9表示购买非中国大陆资源 */
  RegionId?: number;
}

/** 产品明细 */
declare interface CreateDealsGoodsDetail {
  /** 时间间隔 */
  TimeSpan?: number;
  /** 单位，支持购买d、m、y 即（日、月、年） */
  TimeUnit?: string;
  /** 子产品标签,。新购，续费必传，变配时放在oldConfig newConfig里面Saas 高级版 ：sp_wsm_waf_premiumSaas企业版 ：sp_wsm_waf_enterpriseSaas旗舰版 ：sp_wsm_waf_ultimateSaas 业务扩展包：sp_wsm_waf_qpsepSaas 域名扩展包：sp_wsm_waf_domain高级版-CLB:sp_wsm_waf_premium_clb企业版-CLB : sp_wsm_waf_enterprise_clb旗舰版-CLB:sp_wsm_waf_ultimate_clb 业务扩展包-CLB：sp_wsm_waf_qpsep_clb域名扩展包-CLB：sp_wsm_waf_domain_clb */
  SubProductCode?: string;
  /** 业务产品申请的pid（对应一个定价公式），通过pid计费查询到定价模型高级版 ：1000827企业版 ：1000830旗舰版 ：1000832域名包 : 1000834业务扩展包 : 1000481高级版-CLB:1001150企业版-CLB : 1001152旗舰版-CLB:1001154域名包-CLB: 1001156业务扩展包-CLB : 1001160 */
  Pid?: number;
  /** waf实例名 */
  InstanceName?: string;
  /** 1:自动续费，0:不自动续费 */
  AutoRenewFlag?: number;
  /** waf购买的实际地域信息 */
  RealRegion?: number;
  /** 计费细项标签数组Saas 高级版 sv_wsm_waf_package_premium Saas 企业版 sv_wsm_waf_package_enterpriseSaas 旗舰版 sv_wsm_waf_package_ultimate Saas 非中国大陆高级版 sv_wsm_waf_package_premium_intlSaas 非中国大陆企业版 sv_wsm_waf_package_enterprise_intlSaas 非中国大陆旗舰版 sv_wsm_waf_package_ultimate _intlSaas 业务扩展包 sv_wsm_waf_qps_epSaas 域名扩展包 sv_wsm_waf_domain高级版CLB sv_wsm_waf_package_premium_clb企业版CLB sv_wsm_waf_package_enterprise_clb旗舰版CLB sv_wsm_waf_package_ultimate_clb非中国大陆高级版 CLB sv_wsm_waf_package_premium_clb_intl非中国大陆企业版CLB sv_wsm_waf_package_premium_clb_intl非中国大陆旗舰版CLB sv_wsm_waf_package_ultimate_clb _intl业务扩展包CLB sv_wsm_waf_qps_ep_clb域名扩展包CLB sv_wsm_waf_domain_clb */
  LabelTypes?: string[];
  /** 计费细项标签数量，一般和SvLabelType一一对应 */
  LabelCounts?: number[];
  /** 变配使用，实例到期时间 */
  CurDeadline?: string;
  /** 对存在的实例购买bot 或api 安全 */
  InstanceId?: string;
  /** 资源id */
  ResourceId?: string;
}

/** 规则周期执行的数据结构 */
declare interface CronJob {
  /** 每个月的几号执行 */
  Days?: number[];
  /** 每个星期的星期几执行 */
  WDays?: number[];
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

/** 计费下单响应实体 */
declare interface DealData {
  /** 订单号列表，元素个数与请求包的goods数组的元素个数一致，商品详情与订单按顺序对应 */
  DealNames?: string[];
  /** 大订单号，一个大订单号下可以有多个子订单，说明是同一次下单[{},{}] */
  BigDealId?: string;
}

/** DescribeAntiInfoLeakRules返回的规则元素中的具体的规则元素 */
declare interface DescribeAntiInfoLeakRulesStrategyItem {
  /** 字段 */
  Field?: string;
  /** 条件 */
  CompareFunc?: string;
  /** 内容 */
  Content?: string;
}

/** 出参 */
declare interface DescribeAntiLeakageItem {
  /** 规则ID */
  RuleId?: number;
  /** 名称 */
  Name?: string;
  /** 状态值 */
  Status?: number;
  /** 动作 */
  Action?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 匹配条件 */
  Strategies?: DescribeAntiInfoLeakRulesStrategyItem[];
  /** 匹配的URL */
  Uri?: string;
  /** 修改时间 */
  ModifyTime?: string;
}

/** DescribeAreaBanAreas接口的回包 */
declare interface DescribeAreaBanAreasRsp {
  /** 状态 "0"：未开启地域封禁 "1"：开启地域封禁 */
  Status?: string;
  /** 数据来源 custom-自定义(默认)、batch-批量防护 */
  Source?: string;
  /** 字符串数据，配置的地域列表 */
  Areas?: string[];
  /** 定时任务类型 */
  JobType?: string;
  /** 定时任务详细配置 */
  JobDateTime?: JobDateTime;
  /** 周期任务配置 */
  CronType?: string;
}

/** 获取自定义规则列表时的出参 */
declare interface DescribeBotUCBRuleRsp {
  /** 规则列表 */
  Res?: InOutputBotUCBRule[];
  /** 规则总数 */
  TotalCount?: number;
}

/** DescribeCustomRules接口回包中的复杂类型 */
declare interface DescribeCustomRulesRspRuleListItem {
  /** 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向，5代表JS校验 */
  ActionType?: string;
  /** 跳过的策略 */
  Bypass?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 过期时间 */
  ExpireTime?: string;
  /** 策略名称 */
  Name?: string;
  /** 重定向地址 */
  Redirect?: string;
  /** 策略ID */
  RuleId?: string;
  /** 优先级 */
  SortId?: string;
  /** 状态 */
  Status?: string;
  /** 策略详情 */
  Strategies?: Strategy[];
  /** 事件id */
  EventId?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 生效状态 */
  ValidStatus?: number;
  /** 来源 */
  Source?: string;
  /** 定时任务类型 */
  JobType?: string;
  /** 定时任务配置信息 */
  JobDateTime?: JobDateTime;
  /** 周期任务粒度 */
  CronType?: string;
  /** 自定义标签，风控规则用，用来表示是内置规则还是用户自定义的 */
  Label?: string;
  /** 拦截页面id */
  PageId?: string;
  /** 域名 */
  Domain?: string;
  /** 匹配条件的逻辑关系，支持and、or，分别表示多个逻辑匹配条件是与、或的关系 */
  LogicalOp?: string;
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
  /** 域名所属实例类型。sparta-waf：SaaS型WAF实例clb-waf：负载均衡型WAF实例cdc-clb-waf：CDC环境下负载均衡型WAF实例 */
  Edition: string;
  /** 地域。"多伦多": "ca""广州": "gz""成都": "cd""福州": "fzec""深圳": "szx""印度": "in""济南": "jnec""重庆": "cq""天津": "tsn""欧洲东北": "ru""南京": "nj""美国硅谷": "usw""泰国": "th""广州Open": "gzopen""深圳金融": "szjr""法兰克福": "de""日本": "jp""弗吉尼亚": "use""北京": "bj""中国香港": "hk""杭州": "hzec""北京金融": "bjjr""上海金融": "shjr""台北": "tpe""首尔": "kr""上海": "sh""新加坡": "sg""清远": "qy" */
  Region: string;
  /** 实例名 */
  InstanceName: string;
  /** 访问日志开关状态。0：关闭1：开启 */
  ClsStatus: number;
  /** 负载均衡型WAF使用模式。0：镜像模式 1：清洗模式 */
  FlowMode: number;
  /** waf开关状态。0：关闭 1：开启 */
  Status: number;
  /** 规则引擎防护模式。0：观察模式 1：拦截模式 */
  Mode: number;
  /** 规则引擎和AI引擎防护模式联合状态。1:初始状态,规则引擎拦截&&AI引擎未操作开关状态10：规则引擎观察&&AI引擎关闭模式 11：规则引擎观察&&AI引擎观察模式 12：规则引擎观察&&AI引擎拦截模式 20：规则引擎拦截&&AI引擎关闭模式 21：规则引擎拦截&&AI引擎观察模式 22：规则引擎拦截&&AI引擎拦截模式 */
  Engine: number;
  /** 沙箱集群回源出口IP列表 */
  CCList: string[];
  /** 生产集群回源出口IP列表 */
  RsList: string[];
  /** 服务端口配置 */
  Ports: PortInfo[];
  /** 负载均衡器相关配置 */
  LoadBalancerSet: LoadBalancerPackageNew[];
  /** 用户id */
  AppId: number;
  /** 负载均衡型WAF域名LB监听器状态。0：操作成功 4：正在绑定LB 6：正在解绑LB 7：解绑LB失败 8：绑定LB失败 10：内部错误 */
  State: number;
  /** 创建时间 */
  CreateTime?: string;
  /** Ipv6开关状态。0：关闭 1：开启 */
  Ipv6Status?: number;
  /** BOT开关状态。0：关闭 1：关闭2：开启3：开启 */
  BotStatus?: number;
  /** 实例版本信息。101：小微敏捷版 102：小微超轻版2：高级版3：企业版4：旗舰版6：独享版 */
  Level?: number;
  /** 投递CLS状态。0：关闭 1：开启 */
  PostCLSStatus?: number;
  /** 投递CKafka状态。0：关闭 1：开启 */
  PostCKafkaStatus?: number;
  /** cdc实例域名接入的集群信息,非cdc实例忽略。 */
  CdcClusters?: string;
  /** api安全开关状态。0：关闭 1：开启 */
  ApiStatus?: number;
  /** 应用型负载均衡类型，默认clb。clb：七层负载均衡器类型apisix：apisix网关型 */
  AlbType?: string;
  /** 安全组状态。0：不展示1：非腾讯云源站2：安全组绑定失败3：安全组发生变更 */
  SgState?: number;
  /** 安全组状态的详细解释 */
  SgDetail?: string;
  /** 域名云环境。hybrid：混合云域名public：公有云域名 */
  CloudType?: string;
  /** 域名备注信息 */
  Note?: string;
  /** SAASWAF源站IP列表 */
  SrcList?: string[];
  /** SAASWAF源站域名列表 */
  UpstreamDomainList?: string[];
  /** 安全组ID */
  SgID?: string;
  /** clbwaf接入状态，0代表“尚无流量接入”，1代表“流量接入”，2代表“CLB监听器已注销”，3代表“配置生效中”，4代表“配置下发失败中” */
  AccessStatus?: number;
  /** 域名标签 */
  Labels?: string[];
}

/** waf 域名扩展套餐 */
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

/** 域名-规则id结构体 */
declare interface DomainRuleId {
  /** 域名 */
  Domain?: string;
  /** 规则id */
  RuleId?: string;
}

/** 唯一定位Domain */
declare interface DomainURI {
  /** 域名 */
  Domain: string;
  /** 版本 */
  Edition: string;
  /** 实例ID */
  InstanceID?: string;
}

/** SaaS型WAF域名详情 */
declare interface DomainsPartInfo {
  /** 域名 */
  Domain?: string;
  /** 域名唯一ID */
  DomainId?: string;
  /** 域名所属实例唯一ID */
  InstanceId?: string;
  /** 域名所属实例类型 */
  Edition?: string;
  /** 域名所属实例名 */
  InstanceName?: string;
  /** 证书 */
  Cert?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 规则引擎和AI引擎防护模式联合状态。1:初始状态,规则引擎拦截&&AI引擎未操作开关状态10：规则引擎观察&&AI引擎关闭模式 11：规则引擎观察&&AI引擎观察模式 12：规则引擎观察&&AI引擎拦截模式 20：规则引擎拦截&&AI引擎关闭模式 21：规则引擎拦截&&AI引擎观察模式 22：规则引擎拦截&&AI引擎拦截模式 */
  Engine?: number;
  /** 是否开启HTTP强制跳转到HTTPS。0：不强制跳转1：开启强制跳转 */
  HttpsRewrite?: number;
  /** HTTPS回源端口 */
  HttpsUpstreamPort?: string;
  /** waf前是否部署有七层代理服务。0：没有部署代理服务1：有部署代理服务，waf将使用XFF获取客户端IP2：有部署代理服务，waf将使用remote_addr获取客户端IP3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP */
  IsCdn?: number;
  /** 是否开启灰度。 */
  IsGray?: number;
  /** 是否开启HTTP2，需要开启HTTPS协议支持。0：关闭1：开启 */
  IsHttp2?: number;
  /** 是否开启WebSocket支持。0：关闭1：开启 */
  IsWebsocket?: number;
  /** 回源负载均衡策略。0：轮询1：IP hash2：加权轮询 */
  LoadBalance?: number;
  /** 防护模式。0：观察模式1：拦截模式 */
  Mode?: number;
  /** 自有证书的私钥 */
  PrivateKey?: string;
  /** CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  SSLId?: string;
  /** 域名回源时的回源域名。UpstreamType为1时，需要填充此字段 */
  UpstreamDomain?: string;
  /** 回源类型。0：通过IP回源1：通过域名回源 */
  UpstreamType?: number;
  /** IP回源时的回源IP列表。UpstreamType为0时，需要填充此字段 */
  SrcList?: string[];
  /** 域名端口配置 */
  Ports?: PortInfo[];
  /** 证书类型。0：仅配置HTTP监听端口，没有证书1：证书来源为自有证书2：证书来源为托管证书 */
  CertType?: number;
  /** 服务配置有HTTPS端口时，HTTPS的回源协议。http：使用http协议回源，和HttpsUpstreamPort配合使用https：使用https协议回源 */
  UpstreamScheme?: string;
  /** 日志包是否开启。0：关闭1：开启 */
  Cls?: number;
  /** 接入Cname，SaaS型域名使用此Cname进行接入 */
  Cname?: string;
  /** 是否开启长连接。0： 短连接1： 长连接 */
  IsKeepAlive?: number;
  /** 是否开启主动健康检测。0：不开启1：开启 */
  ActiveCheck?: number;
  /** TLS版本信息 */
  TLSVersion?: number;
  /** 自定义的加密套件列表。CipherTemplate为3时需要填此字段，表示自定义的加密套件，值通过DescribeCiphersDetail接口获取。 */
  Ciphers?: number[];
  /** 加密套件模板。0：不支持选择，使用默认模板 1：通用型模板 2：安全型模板3：自定义模板 */
  CipherTemplate?: number;
  /** WAF与源站的读超时时间，默认300s。 */
  ProxyReadTimeout?: number;
  /** WAF与源站的写超时时间，默认300s。 */
  ProxySendTimeout?: number;
  /** WAF回源时的SNI类型。0：关闭SNI，不配置client_hello中的server_name1：开启SNI，client_hello中的server_name为防护域名2：开启SNI，SNI为域名回源时的源站域名3：开启SNI，SNI为自定义域名 */
  SniType?: number;
  /** SniType为3时，需要填此参数，表示自定义的SNI； */
  SniHost?: string;
  /** 回源IP权重 */
  Weights?: string[];
  /** IsCdn=3时，表示自定义header */
  IpHeaders?: string[];
  /** 是否开启XFF重置。0：关闭1：开启 */
  XFFReset?: number;
  /** 域名备注信息 */
  Note?: string;
  /** 自定义回源Host。默认为空字符串，表示使用防护域名作为回源Host。 */
  UpstreamHost?: string;
  /** 防护规则 */
  Level?: string;
  /** 是否开启缓存 0-关闭 1-开启 */
  ProxyBuffer?: number;
  /** 国密选项。0：不开启国密 1：在原有TLS选项的基础上追加支持国密 2：开启国密并仅支持国密客户端访问 */
  GmType?: number;
  /** 国密证书类型。0：无国密证书 1：证书来源为自有国密证书 2：证书来源为托管国密证书 */
  GmCertType?: number;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的证书链 */
  GmCert?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的私钥 */
  GmPrivateKey?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书 */
  GmEncCert?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书的私钥 */
  GmEncPrivateKey?: string;
  /** GmCertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  GmSSLId?: string;
  /** 域名标签 */
  Labels?: string[];
  /** 拨测状态。 0: 禁用拨测, 1: 启用拨测 */
  ProbeStatus?: number;
  /** 回源策略。0：负载均衡回源1：分流回源 */
  UpstreamPolicy?: number;
  /** 分流回源策略 */
  UpstreamRules?: UpstreamRule[];
  /** 业务场景。0：默认值，表示常规业务场景 1：大模型业务场景 */
  UseCase?: number;
}

/** 下载攻击日志记录数据项 */
declare interface DownloadAttackRecordInfo {
  /** 记录ID */
  Id?: number;
  /** 下载任务名 */
  TaskName?: string;
  /** 任务ID */
  TaskId?: string;
  /** 域名 */
  Host?: string;
  /** 当前下载任务的日志条数 */
  Count?: number;
  /** 下载任务运行状态：-1-下载超时，0-下载等待，1-下载完成，2-下载失败，4-正在下载 */
  Status?: number;
  /** 下载文件URL */
  Url?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 最后更新修改时间 */
  ModifyTime?: string;
  /** 过期时间 */
  ExpireTime?: string;
  /** 下载任务需下载的日志总条数 */
  TotalCount?: number;
}

/** DescribeAccessExports接口 */
declare interface ExportAccessInfo {
  /** 日志导出任务ID */
  ExportId?: string;
  /** 日志导出查询语句 */
  Query?: string;
  /** 日志导出文件名 */
  FileName?: string;
  /** 日志文件大小 */
  FileSize?: number;
  /** 日志导出时间排序 */
  Order?: string;
  /** 日志导出格式 */
  Format?: string;
  /** 日志导出数量 */
  Count?: number;
  /** 日志下载状态。Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期） */
  Status?: string;
  /** 日志导出起始时间 */
  From?: number;
  /** 日志导出结束时间 */
  To?: number;
  /** 日志导出路径 */
  CosPath?: string;
  /** 日志导出创建时间 */
  CreateTime?: string;
}

/** 设置哪些字段是否存储或转发 */
declare interface FieldWriteConfig {
  /** 1:开启 0:不开启 */
  EnableHeaders?: number;
  /** 1:开启 0:不开启 */
  EnableBody?: number;
  /** 1:开启 0:不开启 */
  EnableBot?: number;
}

/** 过滤数组 */
declare interface FiltersItemNew {
  /** 字段名； 过滤子订单号过滤通过name 为：DealName； value为子订单号 */
  Name: string;
  /** 过滤值 */
  Values: string[];
  /** 是否精确查找 */
  ExactMatch: boolean;
}

/** 域名列表 */
declare interface FindAllDomainDetail {
  /** 用户id */
  Appid?: number;
  /** 域名 */
  Domain?: string;
  /** 域名ip */
  Ips?: string[];
  /** 发现时间 */
  FindTime?: string;
  /** 实例id */
  InstanceId?: string;
  /** 域名id */
  DomainId?: string;
  /** waf类型 */
  Edition?: string;
  /** 是否接入waf */
  IsWafDomain?: number;
}

/** 业务安全资源信息 */
declare interface FraudPkg {
  /** 资源id */
  ResourceIds?: string;
  /** 状态 */
  Status?: number;
  /** 地域 */
  Region?: number;
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 申请数量 */
  InquireNum?: number;
  /** 使用数量 */
  UsedNum?: number;
  /** 续费标志 */
  RenewFlag?: number;
}

/** 当前开启的、匹配范围为全局、优先级最高的场景信息 */
declare interface GlobalSceneInfo {
  /** 场景ID */
  SceneId?: string;
  /** 场景名称 */
  SceneName?: string;
  /** 场景优先级 */
  Priority?: number;
  /** 场景更新时间 */
  UpdateTime?: number;
}

/** 计费下单接口出入参Goods */
declare interface GoodNews {
  /** 商品数量 */
  GoodsNum: number;
  /** 商品明细 */
  GoodsDetail: GoodsDetailNew;
  /** 订单类型ID，用来唯一标识一个业务的一种场景（总共三种场景：新购、配置变更、续费）高级版: 102375(新购),102376(续费),102377(变配)企业版 : 102378(新购),102379(续费),102380(变配)旗舰版 : 102369(新购),102370(续费),102371(变配)域名包 : 102372(新购),102373(续费),102374(变配)业务扩展包 : 101040(新购),101041(续费),101042(变配)高级版-CLB: 新购 101198 续费 101199 变配 101200企业版-CLB 101204(新购),101205(续费),101206(变配)旗舰版-CLB : 101201(新购),101202(续费),101203(变配)域名包-CLB: 101207(新购),101208(续费),101209(变配)业务扩展包-CLB: 101210(新购),101211(续费),101212(变配) */
  GoodsCategoryId?: number;
  /** 购买waf实例区域ID1 表示购买大陆资源;9表示购买非中国大陆资源 */
  RegionId?: number;
}

/** 计费下单接口出入参Goods */
declare interface Goods {
  /** 付费类型，1:预付费，0:后付费 */
  PayMode: number;
  /** 商品数量 */
  GoodsNum: number;
  /** 商品明细 */
  GoodsDetail: GoodsDetail;
  /** 默认为0 */
  ProjectId: number;
  /** 计费类目ID，对应cid */
  GoodsCategoryId?: number;
  /** 平台类型，默认1 */
  Platform?: number;
  /** 购买waf实例区域ID */
  RegionId?: number;
}

/** 产品明细 */
declare interface GoodsDetail {
  /** 时间间隔 */
  TimeSpan: number;
  /** 单位，支持m、y、d */
  TimeUnit: string;
  /** 产品码 */
  ProductCode: string;
  /** 二级产品码 */
  SubProductCode: string;
  /** 计费策略id */
  Pid: number;
  /** waf产品码 */
  ProductInfo?: ProductInfo[];
  /** waf实例名 */
  InstanceName?: string;
  /** QPS数量 */
  ElasticQps?: number;
  /** 弹性账单 */
  FlexBill?: number;
  /** 1:自动续费，0:不自动续费 */
  AutoRenewFlag?: number;
  /** waf购买的实际地域信息 */
  RealRegion?: number;
  /** Waf实例对应的二级产品码 */
  Type?: string;
  /** 计费细项标签数组 */
  LabelTypes?: string[];
  /** 计费细项标签数量，一般和SvLabelType一一对应 */
  LabelCounts?: number[];
  /** 变配使用，实例到期时间 */
  CurDeadline?: string;
  /** 对存在的实例购买bot 或api 安全 */
  InstanceId?: string;
}

/** 产品明细 */
declare interface GoodsDetailNew {
  /** 时间间隔 */
  TimeSpan?: number;
  /** 单位，支持购买d、m、y 即（日、月、年） */
  TimeUnit?: string;
  /** 子产品标签,。新购，续费必传，变配时放在oldConfig newConfig里面Saas 高级版 ：sp_wsm_waf_premiumSaas企业版 ：sp_wsm_waf_enterpriseSaas旗舰版 ：sp_wsm_waf_ultimateSaas 业务扩展包：sp_wsm_waf_qpsepSaas 域名扩展包：sp_wsm_waf_domain高级版-CLB:sp_wsm_waf_premium_clb企业版-CLB : sp_wsm_waf_enterprise_clb旗舰版-CLB:sp_wsm_waf_ultimate_clb 业务扩展包-CLB：sp_wsm_waf_qpsep_clb域名扩展包-CLB：sp_wsm_waf_domain_clb */
  SubProductCode?: string;
  /** 业务产品申请的pid（对应一个定价公式），通过pid计费查询到定价模型高级版 ：1000827企业版 ：1000830旗舰版 ：1000832域名包 : 1000834业务扩展包 : 1000481高级版-CLB:1001150企业版-CLB : 1001152旗舰版-CLB:1001154域名包-CLB: 1001156业务扩展包-CLB : 1001160 */
  Pid?: number;
  /** waf实例名 */
  InstanceName?: string;
  /** 1:自动续费，0:不自动续费 */
  AutoRenewFlag?: number;
  /** waf购买的实际地域信息 */
  RealRegion?: number;
  /** 计费细项标签数组Saas 高级版 sv_wsm_waf_package_premium Saas 企业版 sv_wsm_waf_package_enterpriseSaas 旗舰版 sv_wsm_waf_package_ultimate Saas 非中国大陆高级版 sv_wsm_waf_package_premium_intlSaas 非中国大陆企业版 sv_wsm_waf_package_enterprise_intlSaas 非中国大陆旗舰版 sv_wsm_waf_package_ultimate _intlSaas 业务扩展包 sv_wsm_waf_qps_epSaas 域名扩展包 sv_wsm_waf_domain高级版CLB sv_wsm_waf_package_premium_clb企业版CLB sv_wsm_waf_package_enterprise_clb旗舰版CLB sv_wsm_waf_package_ultimate_clb非中国大陆高级版 CLB sv_wsm_waf_package_premium_clb_intl非中国大陆企业版CLB sv_wsm_waf_package_premium_clb_intl非中国大陆旗舰版CLB sv_wsm_waf_package_ultimate_clb _intl业务扩展包CLB sv_wsm_waf_qps_ep_clb域名扩展包CLB sv_wsm_waf_domain_clb */
  LabelTypes?: string[];
  /** 计费细项标签数量，一般和SvLabelType一一对应 */
  LabelCounts?: number[];
  /** 变配使用，实例到期时间 */
  CurDeadline?: string;
  /** 对存在的实例购买bot 或api 安全 */
  InstanceId?: string;
  /** 资源id */
  ResourceId?: string;
  /** 模式clb-waf或者saas-waf */
  MicroVersion?: string;
}

/** CLB-WAF删除域名参数 */
declare interface HostDel {
  /** 域名 */
  Domain: string;
  /** 域名ID */
  DomainId: string;
  /** 实例类型 */
  InstanceID?: string;
}

/** 负载均衡型WAF域名信息 */
declare interface HostRecord {
  /** 域名 */
  Domain: string;
  /** 域名唯一ID */
  DomainId: string;
  /** 主域名，入参时为空 */
  MainDomain: string;
  /** 规则引擎防护模式。0：观察模式1：拦截模式 */
  Mode: number;
  /** waf和负载均衡器的绑定关系。0：未绑定1：已绑定 */
  Status: number;
  /** clbwaf域名监听器状态。0：操作成功4：正在绑定LB6：正在解绑LB 7：解绑LB失败 8：绑定LB失败 10：内部错误 */
  State: number;
  /** 规则引擎和AI引擎防护模式联合状态。1:初始状态,规则引擎拦截&&AI引擎未操作开关状态10：规则引擎观察&&AI引擎关闭模式 11：规则引擎观察&&AI引擎观察模式 12：规则引擎观察&&AI引擎拦截模式 20：规则引擎拦截&&AI引擎关闭模式 21：规则引擎拦截&&AI引擎观察模式 22：规则引擎拦截&&AI引擎拦截模式 */
  Engine: number;
  /** waf前是否部署有七层代理服务。 0：没有部署代理服务 1：有部署代理服务，waf将使用XFF获取客户端IP 2：有部署代理服务，waf将使用remote_addr获取客户端IP 3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP */
  IsCdn: number;
  /** 绑定的负载均衡器信息列表 */
  LoadBalancerSet: LoadBalancer[];
  /** 域名绑定的LB的地域，以逗号分割多个地域 */
  Region: string;
  /** 域名所属实例类型。负载均衡型WAF为"clb-waf" */
  Edition: string;
  /** 负载均衡型WAF域名的流量模式。1：清洗模式0：镜像模式 */
  FlowMode: number;
  /** 是否开启访问日志。1：开启0：关闭 */
  ClsStatus: number;
  /** 防护等级，可选值100,200,300 */
  Level?: number;
  /** 域名需要下发到的cdc集群列表。仅CDC场景下填充 */
  CdcClusters?: string[];
  /** 应用型负载均衡类型，默认clb。 clb：七层负载均衡器类型 apisix：apisix网关型tsegw：云原生API网关scf：云函数 */
  AlbType?: string;
  /** IsCdn=3时，需要填此参数，表示自定义header */
  IpHeaders?: string[];
  /** 规则引擎类型。1: menshen2: tiga */
  EngineType?: number;
  /** 云类型。public:公有云private:私有云hybrid:混合云 */
  CloudType?: string;
  /** 域名备注信息 */
  Note?: string;
}

/** 设置WAF状态的结构体 */
declare interface HostStatus {
  /** 域名 */
  Domain: string;
  /** 域名ID */
  DomainId: string;
  /** WAF的开关，1：开，0：关 */
  Status: number;
  /** 实例ID */
  InstanceID?: string;
}

/** 混合云节点资源信息 */
declare interface HybridPkg {
  /** 资源id */
  ResourceIds?: string;
  /** 状态 */
  Status?: number;
  /** 地域 */
  Region?: number;
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 申请数量 */
  InquireNum?: number;
  /** 使用数量 */
  UsedNum?: number;
  /** 续费标志 */
  RenewFlag?: number;
}

/** 修改/新增自定义规则的入参，查询自定义规则列表时的出参 */
declare interface InOutputBotUCBRule {
  /** 域名 */
  Domain: string;
  /** 规则名称 */
  Name: string;
  /** UCB的具体规则项 */
  Rule: InOutputUCBRuleEntry[];
  /** 处置动作 */
  Action: string;
  /** 规则开关 */
  OnOff: string;
  /** 规则类型 */
  RuleType: number;
  /** 规则优先级 */
  Prior: number;
  /** 修改时间戳 */
  Timestamp: number;
  /** 标签 */
  Label: string;
  /** 入参ID */
  Id?: string;
  /** 场景ID */
  SceneId?: string;
  /** 生效时间 */
  ValidTime?: number;
  /** 传入的appid */
  Appid?: number;
  /** 额外参数 */
  AdditionArg?: string;
  /** 规则描述 */
  Desc?: string;
  /** 规则ID */
  RuleId?: string;
  /** true-系统预设规则 false-自定义规则 */
  PreDefine?: boolean;
  /** 定时任务类型 */
  JobType?: string;
  /** 定时任务配置 */
  JobDateTime?: JobDateTime;
  /** 生效截止时间 */
  ExpireTime?: number;
  /** 生效-1,失效-0 */
  ValidStatus?: number;
  /** 自定义拦截页面ID */
  BlockPageId?: number;
  /** 当Action=intercept时，此字段必填 */
  ActionList?: UCBActionProportion[];
  /** 惩罚时间 */
  DelayTime?: number;
}

/** 自定义规则UCB的Rule生效条件 */
declare interface InOutputUCBRuleEntry {
  /** 键 */
  Key?: string;
  /** 操作符 */
  Op?: string;
  /** 值 */
  Value?: UCBEntryValue;
  /** 可选的补充操作符 */
  OpOp?: string;
  /** 可选的补充参数 */
  OpArg?: string[];
  /** 可选的补充值 */
  OpValue?: number;
  /** Header参数值时使用 */
  Name?: string;
  /** 区域选择 */
  Areas?: Area[];
  /** 语言环境 */
  Lang?: string;
  /** 参数匹配 */
  ParamCompareList?: ParamCompareList[];
}

/** 一个实例的详细信息 */
declare interface InstanceInfo {
  /** 实例唯一ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
  /** 实例对应资源ID，计费使用 */
  ResourceIds: string;
  /** 实例所属地域 */
  Region: string;
  /** 付费模式 */
  PayMode: number;
  /** 自动续费标识。0：关闭1：开启 */
  RenewFlag: number;
  /** 弹性计费开关。0：关闭1：开启 */
  Mode: number;
  /** 实例套餐版本。101：小微版102：超轻版2：高级版3：企业版4：旗舰版6：独享版 */
  Level: number;
  /** 实例过期时间 */
  ValidTime: string;
  /** 实例开始时间 */
  BeginTime: string;
  /** 已配置域名个数 */
  DomainCount: number;
  /** 域名数量上限 */
  SubDomainLimit: number;
  /** 已配置主域名个数 */
  MainDomainCount: number;
  /** 主域名数量上限 */
  MainDomainLimit: number;
  /** 实例30天内QPS峰值 */
  MaxQPS: number;
  /** qps扩展包信息 */
  QPS: QPSPackageNew;
  /** 域名扩展包信息 */
  DomainPkg: DomainPackageNew;
  /** 用户appid */
  AppId: number;
  /** clb或saas */
  Edition: string;
  /** 业务安全包 */
  FraudPkg?: FraudPkg;
  /** Bot资源包 */
  BotPkg?: BotPkg;
  /** bot的qps详情 */
  BotQPS?: BotQPS;
  /** qps弹性计费上限 */
  ElasticBilling?: number;
  /** 攻击日志投递开关 */
  AttackLogPost?: number;
  /** 带宽峰值，单位为B/s(字节每秒) */
  MaxBandwidth?: number;
  /** api安全是否购买 */
  APISecurity?: number;
  /** 购买的qps规格 */
  QpsStandard?: number;
  /** 购买的带宽规格 */
  BandwidthStandard?: number;
  /** 实例状态 */
  Status?: number;
  /** 实例沙箱qps值 */
  SandboxQps?: number;
  /** 是否api 安全试用 */
  IsAPISecurityTrial?: number;
  /** 重保包 */
  MajorEventsPkg?: MajorEventsPkg;
  /** 混合云子节点包 */
  HybridPkg?: HybridPkg;
  /** API安全资源包 */
  ApiPkg?: ApiPkg;
  /** 小程序安全加速包 */
  MiniPkg?: MiniPkg;
  /** 小程序qps规格 */
  MiniQpsStandard?: number;
  /** 小程序qps峰值 */
  MiniMaxQPS?: number;
  /** 最近一次超量时间 */
  LastQpsExceedTime?: string;
  /** 小程序安全接入ID数量扩张包 */
  MiniExtendPkg?: MiniExtendPkg;
  /** 计费项 */
  BillingItem?: string;
  /** 实例延期释放标识 */
  FreeDelayFlag?: number;
  /** 最近3天最大qps */
  Last3MaxQPS?: number;
  /** 最近3天最大带宽 */
  Last3MaxBandwidth?: number;
  /** 重保增强包 */
  MajorEventsProPkg?: MajorEventsProPkg;
  /** 1是基础2025版本；0不是 */
  BasicFlag?: number;
  /** 实例的网络配置 */
  NetworkConfig?: NetworkConfig;
}

/** 数据封装 */
declare interface IpAccessControlData {
  /** ip黑白名单 */
  Res?: IpAccessControlItem[];
  /** 计数 */
  TotalCount?: number;
}

/** ip黑白名单 */
declare interface IpAccessControlItem {
  /** mongo表自增Id */
  Id?: string;
  /** 动作 */
  ActionType?: number;
  /** ip */
  Ip?: string;
  /** 备注 */
  Note?: string;
  /** 来源 */
  Source?: string;
  /** 更新时间戳 */
  TsVersion?: number;
  /** 有效截止时间戳 */
  ValidTs?: number;
  /** 生效状态 */
  ValidStatus?: number;
  /** 55000001 */
  RuleId?: number;
  /** IP列表 */
  IpList?: string[];
  /** 规则创建时间 */
  CreateTime?: number;
  /** 定时任务类型 */
  JobType?: string;
  /** 周期任务类型 */
  CronType?: string;
  /** 定时任务配置详情 */
  JobDateTime?: JobDateTime;
}

/** IP黑白名单参数结构体，主要用于IP黑白名单的导入。 */
declare interface IpAccessControlParam {
  /** IP列表 */
  IpList: string[];
  /** valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00）） */
  ValidTs: number;
  /** 42为黑名单，40为白名单 */
  ActionType: number;
  /** 备注 */
  Note?: string;
}

/** ip封堵状态数据 */
declare interface IpHitItem {
  /** 动作 */
  Action?: number;
  /** 类别 */
  Category?: string;
  /** ip */
  Ip?: string;
  /** 规则名称 */
  Name?: string;
  /** 时间戳 */
  TsVersion?: number;
  /** 有效截止时间戳 */
  ValidTs?: number;
}

/** 封装参数 */
declare interface IpHitItemsData {
  /** 数组封装 */
  Res?: IpHitItem[];
  /** 总数目 */
  TotalCount?: number;
}

/** 规则执行的时间结构体 */
declare interface JobDateTime {
  /** 定时执行的时间参数 */
  Timed?: TimedJob[];
  /** 周期执行的时间参数 */
  Cron?: CronJob[];
  /** 时区 */
  TimeTZone?: string;
}

/** Key-Value的形式，Value为Int */
declare interface KVInt {
  /** Key */
  Key?: string;
  /** Value */
  Value?: number;
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
  /** 负载均衡实例的端口 */
  Vport: number;
  /** 负载均衡LD的地域 */
  Region: string;
  /** 监听器协议，http、https */
  Protocol: string;
  /** 负载均衡监听器所在的zone */
  Zone: string;
  /** 负载均衡实例的IP。域名化CLB VIP可填空。 */
  Vip?: string;
  /** 负载均衡的VPCID，公网为-1，内网按实际填写 */
  NumericalVpcId?: number;
  /** 负载均衡的网络类型。OPEN： 公网 INTERNAL ：内网 */
  LoadBalancerType?: string;
  /** 负载均衡的域名 */
  LoadBalancerDomain?: string;
}

/** 负载均衡器 */
declare interface LoadBalancerPackageNew {
  /** 监听id */
  ListenerId: string;
  /** 监听名 */
  ListenerName: string;
  /** 负载均衡id */
  LoadBalancerId: string;
  /** 负载均衡名 */
  LoadBalancerName: string;
  /** 协议 */
  Protocol: string;
  /** 地区"多伦多": "ca", "广州": "gz", "成都": "cd", "福州": "fzec", "深圳": "szx", "印度": "in", "济南": "jnec", "重庆": "cq", "天津": "tsn", "欧洲东北": "ru", "南京": "nj", "美国硅谷": "usw", "泰国": "th", "广州Open": "gzopen", "深圳金融": "szjr", "法兰克福": "de", "日本": "jp", "弗吉尼亚": "use", "北京": "bj", "中国香港": "hk", "杭州": "hzec", "北京金融": "bjjr", "上海金融": "shjr", "台北": "tpe", "首尔": "kr", "上海": "sh", "新加坡": "sg", "清远": "qy" */
  Region: string;
  /** 接入IP */
  Vip: string;
  /** 接入端口 */
  Vport: number;
  /** 地域 */
  Zone: string;
  /** VPCID */
  NumericalVpcId: number;
  /** CLB类型 */
  LoadBalancerType: string;
  /** 负载均衡器的域名 */
  LoadBalancerDomain?: string;
}

/** 攻击日志统计详情 */
declare interface LogHistogramInfo {
  /** 日志条数 */
  Count?: number;
  /** 时间戳 */
  TimeStamp?: number;
}

/** 重保防护资源信息 */
declare interface MajorEventsPkg {
  /** 资源id */
  ResourceIds?: string;
  /** 状态 */
  Status?: number;
  /** 地域 */
  Region?: number;
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 申请数量 */
  InquireNum?: number;
  /** 使用数量 */
  UsedNum?: number;
  /** 续费标志 */
  RenewFlag?: number;
  /** 计费项 */
  BillingItem?: string;
  /** 护网包状态 */
  HWState?: number;
}

/** 重保防护资源信息 */
declare interface MajorEventsProPkg {
  /** 资源id */
  ResourceIds?: string;
  /** 状态 */
  Status?: number;
  /** 地域 */
  Region?: number;
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 申请数量 */
  InquireNum?: number;
  /** 使用数量 */
  UsedNum?: number;
  /** 续费标志 */
  RenewFlag?: number;
  /** 计费项 */
  BillingItem?: string;
}

/** 小程序安全接入ID扩展资源信息 */
declare interface MiniExtendPkg {
  /** 资源id */
  ResourceIds?: string;
  /** 状态 */
  Status?: number;
  /** 地域 */
  Region?: number;
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 购买数量 */
  Count?: number;
  /** 续费标志 */
  RenewFlag?: number;
  /** 计费项 */
  BillingItem?: string;
}

/** 小程序安全资源信息 */
declare interface MiniPkg {
  /** 资源id */
  ResourceIds?: string;
  /** 状态 */
  Status?: number;
  /** 地域 */
  Region?: number;
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 购买数量 */
  Count?: number;
  /** 续费标志 */
  RenewFlag?: number;
  /** 计费项 */
  BillingItem?: string;
}

/** 实例的网络配置 */
declare interface NetworkConfig {
  /** 高防EIP地址 */
  AntiDDosEip?: string;
  /** 高防EIP绑定状态。0：解绑1：绑定 */
  AntiDDosEipStatus?: number;
  /** WAF原生VIP绑定状态。0：解绑1：绑定 */
  VipStatus?: number;
}

/** Owasp规则 */
declare interface OwaspRule {
  /** 规则ID */
  RuleId?: number;
  /** 规则描述 */
  Description?: string;
  /** 规则开关，0：关闭、1：开启、2：只观察 */
  Status?: number;
  /** 规则的防护等级，100：宽松、200：正常、300：严格、400：超严格 */
  Level?: number;
  /** 威胁等级，0：未知，100：低危，200：中危，300：高危，400：危急 */
  VulLevel?: number;
  /** CVE ID */
  CveID?: string;
  /** 规则所属的类型ID */
  TypeId?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  ModifyTime?: string;
  /** 是否被锁定 */
  Locked?: number;
  /** 修改原因0：无(兼容记录为空)1：业务自身特性误报避免2：规则误报上报3：核心业务规则灰度4：其它 */
  Reason?: number;
}

/** Owasp规则类型 */
declare interface OwaspRuleType {
  /** 类型ID */
  TypeId: number;
  /** 类型名称 */
  TypeName: string;
  /** 类型描述 */
  Description?: string;
  /** 类型分类 */
  Classification?: string;
  /** 规则类型的防护模式，0：观察、1：拦截 */
  Action?: number;
  /** 规则类型的防护等级，100：宽松、200：正常、300：严格、400：超严格 */
  Level?: number;
  /** 规则类型的开关状态，0：关闭、1：开启 */
  Status?: number;
  /** 规则类型下的所有规则总是 */
  TotalRule?: number;
  /** 规则类型下的启用的规则总数 */
  ActiveRule?: number;
}

/** 规则引擎白名单 */
declare interface OwaspWhiteRule {
  /** 白名单的规则ID */
  RuleId?: number;
  /** 规则名 */
  Name?: string;
  /** 加白的规则ID列表 */
  Ids?: number[];
  /** 白名单规则的状态，0：关闭、1：开启 */
  Status?: number;
  /** 加白的类型，0:按照特定规则ID加白、1:按照规则类型加白 */
  Type?: number;
  /** 规则匹配策略列表 */
  Strategies?: Strategy[];
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
  /** 定时任务类型 */
  JobType?: string;
  /** 定时任务配置 */
  JobDateTime?: JobDateTime;
  /** 周期任务粒度 */
  CronType?: string;
  /** 当前是否有效 */
  ValidStatus?: boolean;
}

/** bot-自定义规则请求参数比对结构体 */
declare interface ParamCompareList {
  /** 请求参数比对的匹配参数 */
  Key?: string;
  /** 请求参数比对的匹配值 */
  Value?: string;
}

/** PeakPoints数组项 */
declare interface PeakPointsItem {
  /** 秒级别时间戳 */
  Time?: number;
  /** QPS */
  Access?: number;
  /** 上行带宽峰值，单位B */
  Up?: number;
  /** 下行带宽峰值，单位B */
  Down?: number;
  /** Web攻击次数 */
  Attack?: number;
  /** CC攻击次数 */
  Cc?: number;
  /** Bot qps */
  BotAccess?: number;
  /** WAF返回给客户端状态码5xx次数 */
  StatusServerError?: number;
  /** WAF返回给客户端状态码4xx次数 */
  StatusClientError?: number;
  /** WAF返回给客户端状态码302次数 */
  StatusRedirect?: number;
  /** WAF返回给客户端状态码202次数 */
  StatusOk?: number;
  /** 源站返回给WAF状态码5xx次数 */
  UpstreamServerError?: number;
  /** 源站返回给WAF状态码4xx次数 */
  UpstreamClientError?: number;
  /** 源站返回给WAF状态码302次数 */
  UpstreamRedirect?: number;
  /** 黑名单次数 */
  BlackIP?: number;
  /** 防篡改次数 */
  Tamper?: number;
  /** 信息防泄露次数 */
  Leak?: number;
  /** 访问控制 */
  ACL?: number;
  /** 小程序 qps */
  WxAccess?: number;
  /** 小程序请求数 */
  WxCount?: number;
  /** 小程序上行带宽峰值，单位B */
  WxUp?: number;
  /** 小程序下行带宽峰值，单位B */
  WxDown?: number;
}

/** 饼图数据类型 */
declare interface PiechartItem {
  /** 类型 */
  Type?: string;
  /** 数量 */
  Count?: number;
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
  /** Nginx的服务器ID,新增域名时填"0" */
  NginxServerId: string;
}

/** CKafka投递流 */
declare interface PostCKafkaFlowInfo {
  /** 投递流唯一ID */
  FlowId?: number;
  /** 1-访问日志 2-攻击日志 */
  LogType?: number;
  /** 状态 0-为关闭 1-为启用 */
  Status?: number;
  /** CKafka所在区域 */
  CKafkaRegion?: string;
  /** CKafka实例ID */
  CKafkaID?: string;
  /** ckafka地址信息 */
  Brokers?: string;
  /** ckafka版本号 */
  Version?: string;
  /** 主题名称 */
  Topic?: string;
  /** 压缩算法，支持gzip 和 lz4 */
  Compression?: string;
  /** 是否支持SASL,0-关闭，1-开启 */
  SASLEnable?: number;
  /** SASL用户名 */
  SASLUser?: string;
  /** SALS密码 */
  SASLPassword?: string;
  /** 描述信息 */
  Content?: string;
  /** 1-外网TGW，2-支撑环境，默认为支撑环境 */
  VipType?: number;
  /** 配置状态 */
  WriteConfig?: FieldWriteConfig;
}

/** CKafka投递流 */
declare interface PostCLSFlowInfo {
  /** 投递流唯一ID */
  FlowId?: number;
  /** 1-访问日志 2-攻击日志 */
  LogType?: number;
  /** 状态 0-为关闭 1-为启用 */
  Status?: number;
  /** CLS所在区域 */
  CLSRegion?: string;
  /** CLS日志集合名称 */
  LogsetName?: string;
  /** CLS日志集合ID */
  LogsetID?: string;
  /** CLS日志主题名称 */
  LogTopicName?: string;
  /** CLS日志集合ID */
  LogTopicID?: string;
}

/** waf产品 */
declare interface ProductInfo {
  /** 产品名称 */
  Name?: string;
  /** 版本 */
  Value?: string;
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
  /** 计费项 */
  BillingItem?: string;
}

/** 获取弹性qps的默认相关值 */
declare interface QpsData {
  /** 弹性qps默认值 */
  ElasticBillingDefault?: number;
  /** 弹性qps最小值 */
  ElasticBillingMin?: number;
  /** 弹性qps最大值 */
  ElasticBillingMax?: number;
  /** 业务扩展包最大qps */
  QPSExtendMax?: number;
  /** 境外业务扩展包最大qps */
  QPSExtendIntlMax?: number;
}

/** 用户规则更新输出规则子项 */
declare interface ReqUserRule {
  /** 特征序号 */
  Id: string;
  /** 规则开关0：关1：开2：只告警 */
  Status: number;
  /** 修改原因0：无(兼容记录为空)1：业务自身特性误报避免2：规则误报上报3：核心业务规则灰度4：其它 */
  Reason?: number | null;
}

/** 响应体的返回码 */
declare interface ResponseCode {
  /** 如果成功则返回Success，失败则返回云api定义的错误码 */
  Code?: string;
  /** 如果成功则返回Success，失败则返回WAF定义的二级错误码 */
  Message?: string;
}

/** 规则列表详情 */
declare interface Rule {
  /** 规则id */
  Id?: number;
  /** 规则类型 */
  Type?: string;
  /** 规则等级 */
  Level?: string;
  /** 规则描述 */
  Description?: string;
  /** 规则防护的CVE编号 */
  CVE?: string;
  /** 规则的状态 */
  Status?: number;
  /** 规则修改的时间 */
  ModifyTime?: string;
  /** 门神规则新增/更新时间 */
  AddTime?: string;
}

/** 规则白名单 */
declare interface RuleList {
  /** 规则Id */
  Id?: number;
  /** 规则列表的id */
  Rules?: number[];
  /** 请求url */
  Url?: string;
  /** 请求的方法 */
  Function?: string;
  /** 时间戳 */
  Time?: string;
  /** 开关状态 */
  Status?: number;
  /** 创建时间 */
  CreateTime?: string;
}

/** Tiga规则 */
declare interface RuleType {
  /** 规则ID */
  TypeID?: string;
  /** 规则名称 */
  Name?: string;
  /** 规则类型描述 */
  Desc?: string;
  /** 规则类型状态，即类型生效开关，0：关闭，1：开启 */
  RuleTypeStatus?: number;
  /** 类型下生效的规则数量 */
  ActiveRuleCount?: number;
  /** 类型下的规则总数量 */
  TotalRuleCount?: number;
}

/** 扫描ip信息 */
declare interface ScanIpInfo {
  /** 所属业务 */
  Bussiness?: string;
  /** 扫描对象 */
  Target?: string;
  /** ip列表 */
  IpList?: string[];
  /** 扫描说明 */
  Descibe?: string;
  /** 官方公告 */
  Referer?: string;
  /** 更新时间 */
  UpdateTime?: number;
}

/** 接入列表查询复杂条件 */
declare interface SearchItem {
  /** 日志开关 */
  ClsStatus?: string;
  /** waf开关 */
  Status?: string;
  /** 流量模式 */
  FlowMode?: string;
}

/** 参数包装 */
declare interface SessionData {
  /** session定义 */
  Res?: SessionItem[];
}

/** session定义 */
declare interface SessionItem {
  /** 匹配类型 */
  Category?: string;
  /** 起始模式 */
  KeyOrStartMat?: string;
  /** 结束模式 */
  EndMat?: string;
  /** 起始偏移 */
  StartOffset?: string;
  /** 结束偏移 */
  EndOffset?: string;
  /** 数据源 */
  Source?: string;
  /** 更新时间戳 */
  TsVersion?: string;
  /** SessionID */
  SessionId?: number;
  /** Session名 */
  SessionName?: string;
  /** Session是否正在被启用 */
  SessionInUsed?: boolean;
  /** Session关联的CC规则ID */
  RelatedRuleID?: number[];
}

/** waf斯巴达-编辑防护域名中的端口结构 */
declare interface SpartaProtectionPort {
  /** 分配的服务器id。首次接入的域名和端口该参数填0，已接入的域名和端口分配的id可以通过DescribeDomainDetailsSaas或DescribeDomains接口获取。 */
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

/** 规则的匹配条件结构体 */
declare interface Strategy {
  /** 匹配字段 匹配字段不同，相应的匹配参数、逻辑符号、匹配内容有所不同具体如下所示：匹配字段匹配参数逻辑符号匹配内容IP（来源IP）不支持参数ipmatch（匹配）ipnmatch（不匹配）多个IP以英文逗号隔开,最多20个IPV6（来源IPv6）不支持参数ipmatch（匹配）ipnmatch（不匹配）支持单个IPV6地址Referer（Referer）不支持参数empty（内容为空）null（不存在）eq（等于）neq（不等于）contains（包含）ncontains（不包含）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）rematch（正则匹配）请输入内容,512个字符以内URL（请求路径）不支持参数eq（等于）neq（不等于）contains（包含）ncontains（不包含）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）rematch（正则匹配）请以/开头,512个字符以内UserAgent（UserAgent）不支持参数同匹配字段Referer逻辑符号请输入内容,512个字符以内HTTP_METHOD（HTTP请求方法）不支持参数eq（等于）neq（不等于）请输入方法名称,建议大写QUERY_STRING（请求字符串）不支持参数同匹配字段请求路径逻辑符号请输入内容,512个字符以内GET（GET参数值）支持参数录入contains（包含）ncontains（不包含）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）请输入内容,512个字符以内GET_PARAMS_NAMES（GET参数名）不支持参数exsit（存在参数）nexsit（不存在参数）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）请输入内容,512个字符以内POST（POST参数值）支持参数录入同匹配字段GET参数值逻辑符号请输入内容,512个字符以内GET_POST_NAMES（POST参数名）不支持参数同匹配字段GET参数名逻辑符号请输入内容,512个字符以内POST_BODY（完整BODY）不支持参数同匹配字段请求路径逻辑符号请输入BODY内容,512个字符以内COOKIE（Cookie）不支持参数empty（内容为空）null（不存在）rematch（正则匹配）暂不支持GET_COOKIES_NAMES（Cookie参数名）不支持参数同匹配字段GET参数名逻辑符号请输入内容,512个字符以内ARGS_COOKIE（Cookie参数值）支持参数录入同匹配字段GET参数值逻辑符号请输入内容,512个字符以内GET_HEADERS_NAMES（Header参数名）不支持参数exsit（存在参数）nexsit（不存在参数）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）rematch（正则匹配）请输入内容,建议小写,512个字符以内ARGS_HEADER（Header参数值）支持参数录入contains（包含）ncontains（不包含）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）rematch（正则匹配）请输入内容,512个字符以内CONTENT_LENGTH（Content-length）支持参数录入numgt（数值大于）numlt（数值小于）numeq（数值等于）请输入0-9999999999999之间的整数IP_GEO（来源IP归属地）支持参数录入geo_in（属于）geo_not_in（不属于）请输入内容,10240字符以内，格式为序列化的JSON，格式为：[{"Country":"中国","Region":"广东","City":"深圳"}] */
  Field: string;
  /** 逻辑符号 逻辑符号一共分为以下几种类型： empty （ 内容为空） null （不存在） eq （ 等于） neq （ 不等于） contains （ 包含） ncontains （ 不包含） strprefix （ 前缀匹配） strsuffix （ 后缀匹配） len_eq （ 长度等于） len_gt （ 长度大于） len_lt （ 长度小于） ipmatch （ 属于） ipnmatch （ 不属于） numgt （ 数值大于） numlt （ 数值小于） numeq （ 数值等于） geo_in （ IP地理属于） geo_not_in （ IP地理不属于） 各匹配字段对应的逻辑符号不同，详见上述匹配字段表格 */
  CompareFunc: string;
  /** 匹配内容 目前 当匹配字段为COOKIE（Cookie）时，不需要输入 匹配内容其他都需要 */
  Content: string;
  /** 匹配参数 配置参数一共分2种类型 不支持参数与支持参数 当匹配字段为以下4个时，匹配参数才能录入，否则不支持该参数 GET（GET参数值） POST（POST参数值） ARGS_COOKIE（Cookie参数值） ARGS_HEADER（Header参数值） */
  Arg: string;
  /** 0：大小写敏感1：大小写不敏感 */
  CaseNotSensitive?: number;
}

/** 防信息泄露的匹配条件结构体 */
declare interface StrategyForAntiInfoLeak {
  /** 匹配条件，returncode（响应码）、keywords（关键字）、information（敏感信息） */
  Field: string;
  /** 逻辑符号，固定取值为contains */
  CompareFunc: string;
  /** 匹配内容。以下三个对应Field为information时可取的匹配内容：idcard（身份证）、phone（手机号）、bankcard（银行卡）。以下为对应Field为returncode时可取的匹配内容：400（状态码400）、403（状态码403）、404（状态码404）、4xx（其它4xx状态码）、500（状态码500）、501（状态码501）、502（状态码502）、504（状态码504）、5xx（其它5xx状态码）。当对应Field为keywords时由用户自己输入匹配内容。 */
  Content: string;
}

/** TLS 加密套件 */
declare interface TLSCiphers {
  /** TLS版本ID */
  VersionId?: number;
  /** 加密套件ID */
  CipherId?: number;
  /** 加密套件 */
  CipherName?: string;
}

/** TLS信息 */
declare interface TLSVersion {
  /** TLSVERSION的ID */
  VersionId?: number;
  /** TLSVERSION的NAME */
  VersionName?: string;
}

/** 需要开启/关闭API安全的 实例+域名 组合实体 */
declare interface TargetEntity {
  /** 实例ID */
  InstanceId?: string;
  /** 域名 */
  Domain?: string;
}

/** Tiga引擎中Mainclass的TypeID和防护模式 */
declare interface TigaMainClassMode {
  /** MainclassID */
  TypeID?: string;
  /** 防护模式，0表示观察，1表示拦截 */
  Mode?: number;
}

/** 规则定时任务数据结构 */
declare interface TimedJob {
  /** 开始时间戳，单位为秒 */
  StartDateTime?: number;
  /** 结束时间戳，单位为秒 */
  EndDateTime?: number;
}

/** bot自定义规则动作灰度 */
declare interface UCBActionProportion {
  /** 动作 */
  Action?: string;
  /** 比例 */
  Proportion?: number;
}

/** 云图API改版后, 不支持将复杂json类型编码成string,因此通过此复杂类型识别传入的不同类型参数值 */
declare interface UCBEntryValue {
  /** string类型值 */
  BasicValue?: string;
  /** 布尔类型值 */
  LogicValue?: boolean;
  /** string数组类型值 */
  BelongValue?: string[];
  /** 指示有效的字段 */
  ValidKey?: string;
  /** string数组类型值 */
  MultiValue?: string[];
}

/** SAASWAF规则回源时的规则数据结构 */
declare interface UpstreamRule {
  /** 匹配的关键字。目前支持host、uri两种 */
  KeyName: string;
  /** 逻辑符号。equal：等于not equal：不等于belong：属于not belong：不属于 */
  Symbol: string;
  /** 匹配的内容。equal和not equal时，数组只能有一个元素 */
  ContentList: string[];
  /** 规则匹配后生效的回源地址。 */
  AddressList: string[];
  /** 回源负载均衡类型，仅多个回源地址时生效。0：轮询1：IP_HASH */
  BalanceType: number;
}

/** saas和clb信息 */
declare interface UserDomainInfo {
  /** 用户id */
  Appid?: number;
  /** 域名 */
  Domain?: string;
  /** 域名id */
  DomainId?: string;
  /** 实例id */
  InstanceId?: string;
  /** 实例名 */
  InstanceName?: string;
  /** waf类型 */
  Edition?: string;
  /** 版本 */
  Level?: string;
  /** 指定域名访问日志字段的开关 */
  WriteConfig?: string;
  /** 指定域名是否写cls的开关 1:写 0:不写 */
  Cls?: number;
  /** 标记是否是混合云接入。hybrid表示混合云接入域名 */
  CloudType?: string;
  /** 标记clbwaf类型 */
  AlbType?: string;
  /** BOT开关状态 */
  BotStatus?: number;
  /** API开关状态 */
  ApiStatus?: number;
}

/** 用户特征规则描述 */
declare interface UserSignatureRule {
  /** 特征ID */
  ID?: string;
  /** 规则开关 */
  Status?: number;
  /** 主类ID */
  MainClassID?: string;
  /** 子类ID */
  SubClassID?: string;
  /** CVE ID */
  CveID?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  ModifyTime?: string;
  /** 主类名字，根据Language字段输出中文/英文 */
  MainClassName?: string;
  /** 子类名字，根据Language字段输出中文/英文，若子类id为00000000，此字段为空 */
  SubClassName?: string;
  /** 规则描述 */
  Description?: string;
  /** 0/1 */
  Reason?: number;
  /** 1: 高危 2:中危 3:低危 */
  RiskLevel?: number;
}

/** 用户规则白名单 */
declare interface UserWhiteRule {
  /** 白名单的id */
  WhiteRuleId?: number;
  /** 规则id */
  SignatureId?: string;
  /** 状态 */
  Status?: number;
  /** 匹配域 */
  MatchField?: string;
  /** 匹配参数 */
  MatchParams?: string;
  /** 匹配方法 */
  MatchMethod?: string;
  /** 匹配内容 */
  MatchContent?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 规则ID列表 */
  SignatureIds?: string[];
  /** 大类规则ID列表 */
  TypeIds?: string[];
  /** 大类规则ID */
  TypeId?: string;
  /** 0:按照特定规则ID加白, 1:按照规则类型加白 */
  Mode?: number;
  /** 规则名 */
  Name?: string;
  /** 匹配规则列表 */
  MatchInfo?: UserWhiteRuleItem[];
  /** MatchInfo字符串 */
  MatchInfoStr?: string;
}

/** 用户规则白名单规则子项 */
declare interface UserWhiteRuleItem {
  /** 匹配域 */
  MatchField: string;
  /** 匹配方法 */
  MatchMethod: string;
  /** 匹配内容 */
  MatchContent: string;
  /** 匹配参数名 */
  MatchParams?: string;
}

/** Vip信息 */
declare interface VipInfo {
  /** VIP地址 */
  Vip?: string;
  /** waf实例id */
  InstanceId?: string;
  /** 创建时间 */
  InstanceCreateTime?: string;
  /** 地域 */
  Region?: string;
  /** 地域ID */
  RegionId?: number;
  /** ip运营商类型 */
  ISP?: string;
  /** ip类型 */
  VipType?: string;
  /** 域名信息 */
  AddressName?: string;
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
  Tags?: string[];
  /** 封禁模组启用状态 */
  DefenseStatus?: number;
  /** 最后更新时间 */
  LastUpdateTime?: string;
}

/** 域名的webshell开启状态 */
declare interface WebshellStatus {
  /** 域名 */
  Domain: string;
  /** webshell开关，1：开。0：关。2：观察 */
  Status: number;
}

declare interface AddAntiFakeUrlRequest {
  /** 域名 */
  Domain: string;
  /** 名称 */
  Name: string;
  /** uri */
  Uri: string;
}

declare interface AddAntiFakeUrlResponse {
  /** 结果 */
  Result?: string;
  /** 规则ID */
  Id?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddAntiInfoLeakRulesRequest {
  /** 域名 */
  Domain: string;
  /** 规则名称 */
  Name: string;
  /** 动作，0（告警）、1（替换）、2（仅显示前四位）、3（仅显示后四位）、4（阻断） */
  ActionType: number;
  /** 策略详情 */
  Strategies: StrategyForAntiInfoLeak[];
  /** 网址 */
  Uri?: string;
}

declare interface AddAntiInfoLeakRulesResponse {
  /** 规则ID */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddAreaBanAreasRequest {
  /** 需要修改的域名 */
  Domain: string;
  /** 需要新增的封禁地域 */
  Areas: string[];
  /** waf版本信息，spart-waf或者clb-waf，其他无效，请一定填写 */
  Edition?: string;
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType?: string;
  /** 定时任务配置 */
  JobDateTime?: JobDateTime;
}

declare interface AddAreaBanAreasResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddAttackWhiteRuleRequest {
  /** 域名 */
  Domain: string;
  /** 规则状态 */
  Status: number;
  /** 匹配规则项列表 */
  Rules: UserWhiteRuleItem[];
  /** 规则序号 */
  RuleId?: number;
  /** 规则Id */
  SignatureId?: string;
  /** 加白的规则ID列表 */
  SignatureIds?: string[];
  /** 加白的大类规则ID */
  TypeIds?: string[];
  /** 0:按照特定规则ID加白, 1:按照规则类型加白 */
  Mode?: number;
  /** 规则名 */
  Name?: string;
}

declare interface AddAttackWhiteRuleResponse {
  /** 规则总数 */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCustomRuleRequest {
  /** 规则名称 */
  Name: string;
  /** 优先级 */
  SortId: string;
  /** 策略详情 */
  Strategies: Strategy[];
  /** 需要添加策略的域名 */
  Domain: string;
  /** 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向，5代表JS校验 */
  ActionType: string;
  /** 如果动作是重定向，则表示重定向的地址；其他情况可以为空 */
  Redirect?: string;
  /** 过期时间，单位为秒级时间戳，例如1677254399表示过期时间为2023-02-24 23:59:59. 0表示永不过期 */
  ExpireTime?: string;
  /** WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF */
  Edition?: string;
  /** 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果多个勾选那么以,串接。默认是"geoip,cc,owasp,ai,antileakage" */
  Bypass?: string;
  /** 添加规则的来源，默认为空 */
  EventId?: string;
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType?: string;
  /** 规则执行的时间 */
  JobDateTime?: JobDateTime;
  /** 规则来源，判断是不是小程序的 */
  Source?: string;
  /** 规则标签，小程序规则用，标识是内置规则还是自定义规则 */
  Label?: string;
  /** 开关状态，小程序风控规则的时候传该值 */
  Status?: number;
  /** 拦截页面id */
  PageId?: string;
  /** 匹配条件的逻辑关系，支持and、or，分别表示多个逻辑匹配条件是与、或的关系 */
  LogicalOp?: string;
}

declare interface AddCustomRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success?: ResponseCode;
  /** 添加成功的规则ID */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCustomWhiteRuleRequest {
  /** 规则名称 */
  Name: string;
  /** 优先级 */
  SortId: string;
  /** 策略详情 */
  Strategies: Strategy[];
  /** 需要添加策略的域名 */
  Domain: string;
  /** 放行的模块，多个模块之间用逗号连接。支持的模块：acl（自定义规则）、owasp（规则引擎）、webshell（恶意文件检测）、geoip（地域封禁）、bwip（IP黑白名单）、cc、botrpc（BOT防护）、antileakage（信息防泄露）、api（API安全）、ai（AI引擎）、ip_auto_deny（IP封禁）、applet（小程序流量风控） */
  Bypass: string;
  /** 如果没有设置JobDateTime字段则用此字段，0表示永久生效，其它表示定时生效的截止时间（单位为秒） */
  ExpireTime?: string;
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType?: string;
  /** 定时任务配置 */
  JobDateTime?: JobDateTime;
  /** 匹配条件的逻辑关系，支持and、or，分别表示多个逻辑匹配条件是与、或的关系 */
  LogicalOp?: string;
}

declare interface AddCustomWhiteRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success?: ResponseCode;
  /** 添加成功的规则ID */
  RuleId?: number;
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
  /** 需要防护的域名 */
  Domain: string;
  /** 证书类型。0：仅配置HTTP监听端口，没有证书1：证书来源为自有证书2：证书来源为托管证书 */
  CertType: number;
  /** waf前是否部署有七层代理服务。0：没有部署代理服务1：有部署代理服务，waf将使用XFF获取客户端IP2：有部署代理服务，waf将使用remote_addr获取客户端IP3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP */
  IsCdn: number;
  /** 回源类型。0：通过IP回源1：通过域名回源 */
  UpstreamType: number;
  /** 是否开启WebSocket支持。0：关闭1：开启 */
  IsWebsocket: number;
  /** 回源负载均衡策略。0：轮询1：IP hash2：加权轮询 */
  LoadBalance: string;
  /** 服务端口列表配置。NginxServerId：新增域名时填'0'Port：监听端口号Protocol：端口协议UpstreamPort：与Port相同UpstreamProtocol：与Protocol相同 */
  Ports: PortItem[];
  /** 必填项，是否开启长连接。0： 短连接1： 长连接 */
  IsKeepAlive: string;
  /** 必填项，域名所属实例id */
  InstanceID: string;
  /** CertType为1时，需要填充此参数，表示自有证书的证书链 */
  Cert?: string;
  /** CertType为1时，需要填充此参数，表示自有证书的私钥 */
  PrivateKey?: string;
  /** CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  SSLId?: string;
  /** Waf的资源ID。 */
  ResourceId?: string;
  /** IsCdn为3时，需要填此参数，表示自定义header */
  IpHeaders?: string[];
  /** 服务配置有HTTPS端口时，HTTPS的回源协议。http：使用http协议回源，和HttpsUpstreamPort配合使用https：使用https协议回源 */
  UpstreamScheme?: string;
  /** HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段 */
  HttpsUpstreamPort?: string;
  /** 是否开启灰度，0表示不开启灰度。 */
  IsGray?: number;
  /** 灰度的地区 */
  GrayAreas?: string[];
  /** 必填项，是否开启HTTP强制跳转到HTTPS。0：不强制跳转1：开启强制跳转 */
  HttpsRewrite?: number;
  /** 域名回源时的回源域名。UpstreamType为1时，需要填充此字段 */
  UpstreamDomain?: string;
  /** IP回源时的回源IP列表。UpstreamType为0时，需要填充此字段 */
  SrcList?: string[];
  /** 必填项，是否开启HTTP2，需要开启HTTPS协议支持。0：关闭1：开启 */
  IsHttp2?: number;
  /** WAF实例类型。sparta-waf：SAAS型WAFclb-waf：负载均衡型WAFcdn-waf：CDN上的Web防护能力 */
  Edition?: string;
  /** 目前填0即可。anycast IP类型开关： 0 普通IP 1 Anycast IP */
  Anycast?: number;
  /** 回源IP列表各IP的权重，和SrcList一一对应。当且仅当UpstreamType为0，并且SrcList有多个IP，并且LoadBalance为2时需要填写，否则填 [] */
  Weights?: number[];
  /** 必填项，是否开启主动健康检测。0：不开启1：开启 */
  ActiveCheck?: number;
  /** TLS版本信息 */
  TLSVersion?: number;
  /** 必填项，加密套件模板。0：不支持选择，使用默认模板 1：通用型模板 2：安全型模板3：自定义模板 */
  CipherTemplate?: number;
  /** 自定义的加密套件列表。CipherTemplate为3时需要填此字段，表示自定义的加密套件，值通过DescribeCiphersDetail接口获取。 */
  Ciphers?: number[];
  /** WAF与源站的读超时时间，默认300s。 */
  ProxyReadTimeout?: number;
  /** WAF与源站的写超时时间，默认300s。 */
  ProxySendTimeout?: number;
  /** WAF回源时的SNI类型。0：关闭SNI，不配置client_hello中的server_name1：开启SNI，client_hello中的server_name为防护域名2：开启SNI，SNI为域名回源时的源站域名3：开启SNI，SNI为自定义域名 */
  SniType?: number;
  /** SniType为3时，需要填此参数，表示自定义的SNI； */
  SniHost?: string;
  /** 是否开启XFF重置。0：关闭 1：开启 */
  XFFReset?: number;
  /** 域名备注信息 */
  Note?: string;
  /** 自定义回源Host。默认为空字符串，表示使用防护域名作为回源Host。 */
  UpstreamHost?: string;
  /** 是否开启缓存。 0：关闭 1：开启 */
  ProxyBuffer?: number;
  /** 是否开启拨测。 0: 禁用拨测 1: 启用拨测。默认启用拨测 */
  ProbeStatus?: number;
  /** 国密选项。0：不开启国密 1：在原有TLS选项的基础上追加支持国密 2：开启国密并仅支持国密客户端访问 */
  GmType?: number;
  /** 国密证书类型。0：无国密证书 1：证书来源为自有国密证书 2：证书来源为托管国密证书 */
  GmCertType?: number;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的证书链 */
  GmCert?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的私钥 */
  GmPrivateKey?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书 */
  GmEncCert?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书的私钥 */
  GmEncPrivateKey?: string;
  /** GmCertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  GmSSLId?: string;
  /** 回源策略，支持负载均衡回源和分流回源两种方式。0：默认值，负载均衡回源；1：分流回源 */
  UpstreamPolicy?: number;
  /** 分流回源时生效，分流回源的规则。 */
  UpstreamRules?: UpstreamRule[];
  /** 业务场景。0：默认值，表示常规业务场景 1：大模型业务场景 */
  UseCase?: number;
}

declare interface AddSpartaProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchOperateUserSignatureRulesRequest {
  /** 域名 */
  Domain: string;
  /** 0:关闭，1:开启，2:仅观察 */
  Status: string;
  /** 如果SelectedAll为true，则表示反选的规则，否则表示手动选择的规则ID */
  RuleIds?: string[];
  /** 仅观察原因 */
  Reason?: number;
  /** 是否全选 */
  SelectedAll?: boolean;
  /** 过滤 */
  Filters?: FiltersItemNew[];
}

declare interface BatchOperateUserSignatureRulesResponse {
  /** 操作结果 */
  CommonRsp?: CommonRspData;
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
  ExportId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAreaBanRuleRequest {
  /** 需要修改的域名 */
  Domain: string;
  /** 需要新增的封禁地域 */
  Areas: Area[];
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType: string;
  /** 定时任务配置 */
  JobDateTime: JobDateTime;
  /** 地域信息的语言，支持cn、en，默认为中文cn */
  Lang: string;
}

declare interface CreateAreaBanRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDealsRequest {
  /** 计费下单入参 */
  Goods: CreateDealsGoods[];
}

declare interface CreateDealsResponse {
  /** 计费下单响应结构体 */
  Data?: DealData;
  /** 1:成功，0:失败 */
  Status?: number;
  /** 返回message */
  ReturnMessage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHostRequest {
  /** 防护域名配置信息。内网负载均衡器必须携带对应的NumericalVpcId。 */
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

declare interface CreateIpAccessControlRequest {
  /** 具体域名如：test.qcloudwaf.com全局域名为：global */
  Domain: string;
  /** ip参数列表 */
  IpList: string[];
  /** 42为黑名单，40为白名单 */
  ActionType: number;
  /** valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00）） */
  ValidTS?: number;
  /** 实例Id */
  InstanceId?: string;
  /** WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF */
  Edition?: string;
  /** 可选值为：batch（批量添加）、bot（BOT流量分析中的BOT详情列表中添加时）、cc（在攻击日志列表中对攻击类型为CC的IP添加时）、custom（非批量添加时的默认值） */
  SourceType?: string;
  /** 备注 */
  Note?: string;
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType?: string;
  /** 定时配置详情 */
  JobDateTime?: JobDateTime;
}

declare interface CreateIpAccessControlResponse {
  /** 新增的规则对应的ID */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOwaspWhiteRuleRequest {
  /** 规则名称 */
  Name: string;
  /** 域名 */
  Domain: string;
  /** 规则匹配策略列表 */
  Strategies: Strategy[];
  /** 加白的规则ID列表 */
  Ids: number[];
  /** 加白的类型，0:按照特定规则ID加白, 1:按照规则类型加白 */
  Type: number;
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType: string;
  /** 定时任务配置 */
  JobDateTime: JobDateTime;
  /** 如果没有设置JobDateTime字段则用此字段，0表示永久生效，其它表示定时生效的截止时间（单位为秒） */
  ExpireTime: number;
  /** 规则状态，0：关闭、1：开启，默认为开启 */
  Status?: number;
}

declare interface CreateOwaspWhiteRuleResponse {
  /** 规则ID */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePostCKafkaFlowRequest {
  /** 投递的CKafka所在区域 */
  CKafkaRegion: string;
  /** 客户的CKafka 实例ID */
  CKafkaID: string;
  /** 支撑环境是IP:PORT，外网环境是domain:PORT */
  Brokers: string;
  /** 默认为none，支持snappy、gzip和lz4压缩，推荐snappy */
  Compression: string;
  /** 1-外网TGW，2-支撑环境，默认为支撑环境 */
  VipType: number;
  /** 1-访问日志，2-攻击日志，默认为访问日志 */
  LogType: number;
  /** 主题名称，默认不传或者传空字符串，默认值为waf_post_access_log */
  Topic: string;
  /** kafka集群的版本号 */
  KafkaVersion: string;
  /** 是否开启SASL校验，默认不开启，0-关闭，1-开启 */
  SASLEnable?: number;
  /** SASL用户名 */
  SASLUser?: string;
  /** SASL密码 */
  SASLPassword?: string;
  /** 开启访问日志某些字段是否投递 */
  WriteConfig?: FieldWriteConfig;
}

declare interface CreatePostCKafkaFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePostCLSFlowRequest {
  /** 投递的CLS所在区域，默认为ap-shanghai */
  CLSRegion?: string;
  /** 投递的CLS所在日志集合名称，默认为 waf_post_logset */
  LogsetName?: string;
  /** 1-访问日志，2-攻击日志，默认为访问日志。 */
  LogType?: number;
  /** 投递的CLS所在日志主题的名称，默认为 waf_post_logtopic */
  LogTopicName?: string;
}

declare interface CreatePostCLSFlowResponse {
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

declare interface DeleteAntiFakeUrlRequest {
  /** 域名 */
  Domain: string;
  /** Id */
  Id: number;
}

declare interface DeleteAntiFakeUrlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAntiInfoLeakRuleRequest {
  /** 域名 */
  Domain: string;
  /** 规则id */
  RuleId: number;
}

declare interface DeleteAntiInfoLeakRuleResponse {
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

declare interface DeleteAttackWhiteRuleRequest {
  /** 规则序号组 */
  Ids: number[];
  /** 用户域名 */
  Domain: string;
}

declare interface DeleteAttackWhiteRuleResponse {
  /** 删除失败的规则序号组 */
  FailIds?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBotSceneUCBRuleRequest {
  /** 域名 */
  Domain: string;
  /** 自定义规则ID */
  RuleId: string;
  /** 1.BOT全局白名单处调用时，传"global";2.BOT场景配置时，传具体的场景ID */
  SceneId: string;
}

declare interface DeleteBotSceneUCBRuleResponse {
  /** 正常情况下为null */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCCRuleRequest {
  /** 域名 */
  Domain: string;
  /** 规则名称 */
  Name: string;
  /** clb-waf或者sparta-waf */
  Edition?: string;
  /** 规则Id */
  RuleId?: number;
}

declare interface DeleteCCRuleResponse {
  /** 一般为null */
  Data?: string;
  /** 操作的规则Id */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomRuleRequest {
  /** 删除的域名 */
  Domain: string;
  /** 删除的规则ID */
  RuleId: string;
  /** WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。 */
  Edition?: string;
  /** 批量删除的规则列表 */
  DomainRuleIdList?: DomainRuleId[];
}

declare interface DeleteCustomRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success?: ResponseCode;
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
  Success?: ResponseCode;
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
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteHostRequest {
  /** 删除的域名列表 */
  HostsDel: HostDel[];
}

declare interface DeleteHostResponse {
  /** 域名删除结果。Code表示状态码，Message表示详细信息。 */
  Success?: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIpAccessControlRequest {
  /** 域名 */
  Domain: string;
  /** 删除的ip数组 */
  Items: string[];
  /** 若IsId字段为True，则Items列表元素需为Id，否则为IP */
  IsId?: boolean;
  /** 是否删除对应的域名下的所有黑/白IP名单，true表示全部删除，false表示只删除指定ip名单 */
  DeleteAll?: boolean;
  /** 是否为多域名黑白名单 */
  SourceType?: string;
  /** IP黑白名单类型，40为IP白名单，42为IP黑名单 */
  ActionType?: number;
}

declare interface DeleteIpAccessControlResponse {
  /** 删除失败的条目 */
  FailedItems?: string;
  /** 删除失败的条目数 */
  FailedCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIpAccessControlV2Request {
  /** 域名 */
  Domain: string;
  /** 规则ID列表，支持批量删除，在DeleteAll参数为true的时候可以不传 */
  RuleIds?: number[];
  /** 是否删除对应的域名下的所有黑/白IP名单，true表示全部删除，false表示只删除指定IP名单，批量防护不支持 */
  DeleteAll?: boolean;
  /** batch表示为批量防护的IP黑白名单 */
  SourceType?: string;
  /** IP黑白名单类型，40为IP白名单，42为IP黑名单，在DeleteAll为true的时候必传此参数 */
  ActionType?: number;
}

declare interface DeleteIpAccessControlV2Response {
  /** 在批量删除的时候表示删除失败的条数 */
  FailedCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOwaspRuleStatusRequest {
  /** 域名 */
  Domain: string;
  /** 规则ID列表 */
  RuleIDs: string[];
}

declare interface DeleteOwaspRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOwaspWhiteRuleRequest {
  /** 规则白名单ID列表 */
  Ids: number[];
  /** 域名 */
  Domain: string;
}

declare interface DeleteOwaspWhiteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSessionRequest {
  /** 域名 */
  Domain: string;
  /** clb-waf 或者 sprta-waf */
  Edition?: string;
  /** 要删除的SessionID */
  SessionID?: number;
}

declare interface DeleteSessionResponse {
  /** 结果 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSpartaProtectionRequest {
  /** 域名列表 */
  Domains: string[];
  /** 实例类型 */
  Edition?: string;
  /** 必填项。域名所属实例ID */
  InstanceID?: string;
}

declare interface DeleteSpartaProtectionResponse {
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
  TotalCount?: number;
  /** 日志导出列表 */
  Exports?: ExportAccessInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessFastAnalysisRequest {
  /** 要查询的日志的起始时间，Unix时间戳，单位ms */
  From: number;
  /** 要查询的日志的结束时间，Unix时间戳，单位ms */
  To: number;
  /** 查询语句，语句长度最大为4096，由于本接口是分析接口，如果无过滤条件，必须传 * 表示匹配所有，参考CLS的分析统计语句的文档 */
  Query: string;
  /** 需要分析统计的字段名 */
  FieldName: string;
  /** 客户要查询的日志主题ID，每个客户都有对应的一个主题 */
  TopicId?: string;
  /** 排序字段,升序asc,降序desc，默认降序desc */
  Sort?: string;
  /** 返回的top数，默认返回top5 */
  Count?: number;
}

declare interface DescribeAccessFastAnalysisResponse {
  /** 注意：此字段可能返回 null，表示取不到有效值 */
  FieldValueRatioInfos?: AccessFieldValueRatioInfo[];
  /** 日志条数 */
  TotalCount?: number;
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
  HistogramInfos?: AccessHistogramItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessIndexRequest {
}

declare interface DescribeAccessIndexResponse {
  /** 是否生效，true表示生效，false表示未生效 */
  Status?: boolean;
  /** 索引配置信息 */
  Rule?: AccessRuleInfo;
  /** 索引修改时间，初始值为索引创建时间。 */
  ModifyTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAntiFakeRulesRequest {
  /** 域名 */
  Domain: string;
  /** 偏移 */
  Offset: number;
  /** 容量 */
  Limit: number;
  /** 过滤数组,name可以是如下的值： RuleID,ParamName,Url,Action,Method,Source,Status */
  Filters?: FiltersItemNew[];
  /** asc或者desc */
  Order?: string;
  /** 目前支持根据create_time、modify_time、id排序 */
  By?: string;
}

declare interface DescribeAntiFakeRulesResponse {
  /** 总数 */
  Total?: number;
  /** 返回值 */
  Data?: CacheUrlItems[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAntiInfoLeakageRulesRequest {
  /** 域名 */
  Domain: string;
  /** 翻页支持，读取偏移 */
  Offset?: number;
  /** 翻页支持，读取长度限制 */
  Limit?: number;
  /** 排序方式，asc或者desc */
  Order?: string;
  /** 过滤器,可以允许如下的值：RuleId,Match_field,Name,Action,Status */
  Filters?: FiltersItemNew[];
}

declare interface DescribeAntiInfoLeakageRulesResponse {
  /** 记录条数 */
  Total?: number;
  /** 规则列表 */
  RuleList?: DescribeAntiLeakageItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiDetailRequest {
  /** 域名 */
  Domain: string;
  /** Api名称 */
  ApiName: string;
  /** 请求方法 */
  Method: string;
  /** 是否仅查询敏感的，1表示查询，0表示不查询 */
  IsSensitive?: number;
  /** 是否仅查询泛化的，1表示查询，0表示不查询 */
  IsPan?: number;
}

declare interface DescribeApiDetailResponse {
  /** 请求样例，json字符串格式 */
  Log?: string;
  /** 请求参数样例列表 */
  ParameterList?: ApiParameterType[];
  /** 当前场景标签 */
  Scene?: string;
  /** 敏感字段 */
  SensitiveFields?: string[];
  /** 7天内是否活跃 */
  IsActive?: boolean;
  /** 访问ip数 */
  IpCount?: number;
  /** 访问地域数量 */
  RegionCount?: number;
  /** 关联事件数 */
  EventCount?: number;
  /** 涉敏数据条数 */
  SensitiveCount?: number;
  /** 风险等级 */
  Level?: number;
  /** 响应体 */
  RspLog?: string;
  /** 昨日访问峰值QPS */
  MaxQPS?: number;
  /** 历史样例 */
  ApiDetailSampleHistory?: ApiDetailSampleHistory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiListVersionTwoRequest {
  /** 域名 */
  Domain: string;
  /** 页面索引，第几页 */
  PageIndex: number;
  /** 页面大小 */
  PageSize: number;
  /** 过滤条件 */
  Filters?: ApiDataFilter[];
  /** 排序方法，1 升序，-1 降序 */
  Sort?: string[];
  /** 是否进行总数查询 */
  NeedTotalCount?: boolean;
  /** 查询开始时间 */
  StartTs?: number;
  /** 查询结束时间 */
  EndTs?: number;
}

declare interface DescribeApiListVersionTwoResponse {
  /** api资产列表 */
  Data?: ApiAsset[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAreaBanAreasRequest {
  /** 需要查询的域名 */
  Domain: string;
}

declare interface DescribeAreaBanAreasResponse {
  /** 回包内容 */
  Data?: DescribeAreaBanAreasRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAreaBanRuleRequest {
  /** 需要查询的域名 */
  Domain: string;
}

declare interface DescribeAreaBanRuleResponse {
  /** 规则内容 */
  Data?: AreaBanRule;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAreaBanSupportAreasRequest {
}

declare interface DescribeAreaBanSupportAreasResponse {
  /** 地域封禁的地域列表，要解析成json后使用 */
  Data?: string;
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
  /** api风险事件数量 */
  ApiRiskEventCount?: number;
  /** 黑名单总数 */
  IPBlackCount?: number;
  /** 防篡改总数 */
  TamperCount?: number;
  /** 信息泄露总数 */
  LeakCount?: number;
  /** API风险事件周环比 */
  ApiRiskEventCircleCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackTypeRequest {
  /** 起始时间 */
  FromTime: string;
  /** 结束时间 */
  ToTime: string;
  /** 兼容Host，逐步淘汰Host字段 */
  Host?: string;
  /** 只有两个值有效，sparta-waf，clb-waf，不传则不过滤 */
  Edition?: string;
  /** WAF实例ID，不传则不过滤 */
  InstanceID?: string;
  /** 域名过滤，不传则不过滤，用于替代Host字段，逐步淘汰Host */
  Domain?: string;
}

declare interface DescribeAttackTypeResponse {
  /** 数量 */
  Piechart?: PiechartItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAttackWhiteRuleRequest {
  /** 需要查询的域名 */
  Domain: string;
  /** 分页 */
  Offset: number;
  /** 每页容量 */
  Limit: number;
  /** 排序的字段，支持user_id, signature_id, modify_time */
  By?: string;
  /** 排序方式 */
  Order?: string;
  /** 筛选条件，支持SignatureId, MatchContent */
  Filters?: FiltersItemNew[];
}

declare interface DescribeAttackWhiteRuleResponse {
  /** 规则总数 */
  Total?: number;
  /** 规则白名单列表 */
  List?: UserWhiteRule[];
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

declare interface DescribeBatchIpAccessControlRequest {
  /** 筛选条件，支持 ActionType（可选的值为40：白名单，42：黑名单），ValidStatus（可选的值0：全部，1：生效，2：过期），Ip，Domains（域名列表），GroupId（防护对象组ID），GroupName（防护对象组名），RuleId（规则ID），TimerType（生效方式，1：永久生效，2：定时生效，3：按周周期生效，4：按月周期生效） */
  Filters: FiltersItemNew[];
  /** 偏移 */
  OffSet?: number;
  /** 限制 */
  Limit?: number;
  /** 排序参数 */
  Sort?: string;
}

declare interface DescribeBatchIpAccessControlResponse {
  /** 输出 */
  Data?: BatchIpAccessControlData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBotSceneListRequest {
  /** 域名 */
  Domain: string;
  /** 每页数量 */
  Limit: number;
  /** 页码 */
  Offset: number;
  /** 场景模板类型，通过此下拉字段进行场景筛选。全部: all 登录: login 秒杀:seckill 爬内容：crawl 自定义: custom */
  BusinessType?: string[];
  /** 通过场景名称模糊搜索 */
  SceneName?: string;
  /** 是否只显示默认场景 */
  IsDefault?: boolean;
  /** 是否仅显示生效场景 */
  IsValid?: boolean;
  /** 要查询的场景id */
  SceneId?: string;
}

declare interface DescribeBotSceneListResponse {
  /** 符合筛选条件的场景数目 */
  TotalCount?: number;
  /** 当TotalCount为0时，返回空 */
  BotSceneList?: BotSceneInfo[];
  /** true-简易模式 */
  SimpleFlag?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBotSceneOverviewRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeBotSceneOverviewResponse {
  /** BOT总开关 */
  Status?: boolean;
  /** 场景总数 */
  SceneCount?: number;
  /** 生效场景数 */
  ValidSceneCount?: number;
  /** 当前开启的、匹配范围为全局、优先级最高的场景 */
  CurrentGlobalScene?: GlobalSceneInfo;
  /** 自定义规则总数，不包括BOT白名单 */
  CustomRuleNums?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBotSceneUCBRuleRequest {
  /** 域名 */
  Domain: string;
  /** 翻页组件的起始页 */
  Skip: number;
  /** 翻页组件的页数据条数 */
  Limit: number;
  /** 排序参数 */
  Sort: string;
  /** 1.BOT全局白名单处调用时，传"global";2.BOT场景配置处调用时，传具体的场景ID */
  SceneId: string;
  /** 需要过滤的动作 */
  Operate?: string;
  /** 需要过滤的规则名称 */
  Name?: string;
  /** 兼容老数据和新旧版前端 */
  VersionFlag?: string;
  /** 生效方式：0-全部 1-永久生效 2-定时生效 3-周粒度生效 4-月粒度生效 */
  TimerType?: number;
  /** 0-全部 1-生效中 2-已过期 */
  ValidStatus?: number;
  /** 规则id */
  RuleId?: string;
}

declare interface DescribeBotSceneUCBRuleResponse {
  /** 返回数据包 */
  Data?: DescribeBotUCBRuleRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCAutoStatusRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeCCAutoStatusResponse {
  /** 配置状态，0表示关闭，1表示开启 */
  AutoCCSwitch?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCRuleListRequest {
  /** 需要查询的API所属的域名 */
  Domain: string;
  /** 偏移 */
  Offset: number;
  /** 容量 */
  Limit: number;
  /** 目前支持根据ts_version排序 */
  By: string;
  /** 过滤数组,name可以是如下的值： RuleID,ParamName,Url,Action,Method,Source,Status */
  Filters?: FiltersItemNew[];
  /** asc或者desc */
  Order?: string;
}

declare interface DescribeCCRuleListResponse {
  /** 查询到的CC规则的列表 */
  Data?: CCRuleLists;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCCRuleRequest {
  /** 域名 */
  Domain: string;
  /** 页码 */
  Offset: number;
  /** 页的数目 */
  Limit: number;
  /** 排序参数 */
  Sort?: string;
  /** clb-waf 或者 sparta-waf */
  Edition?: string;
  /** 过滤条件 */
  Name?: string;
}

declare interface DescribeCCRuleResponse {
  /** 结果 */
  Data?: CCRuleData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateVerifyResultRequest {
  /** 域名 */
  Domain: string;
  /** 证书类型，此参数和GmCertType不可同时为0。 0：不检测国际标准证书 1：证书来源为自有证书 2：证书来源为托管证书 */
  CertType?: number;
  /** CertType为1时，需要填充此参数，表示自有证书的证书链 */
  Certificate?: string;
  /** CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  CertID?: string;
  /** CertType为1时，需要填充此参数，表示自有证书的私钥 */
  PrivateKey?: string;
  /** 国密证书类型，此参数和CertType不可同时为0。0：不检测国密证书 1：证书来源为自有国密证书 2：证书来源为托管国密证书 */
  GmCertType?: number;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的证书链 */
  GmCert?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的私钥 */
  GmPrivateKey?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书 */
  GmEncCert?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书的私钥 */
  GmEncPrivateKey?: string;
  /** GmCertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  GmSSLId?: string;
}

declare interface DescribeCertificateVerifyResultResponse {
  /** 状态码。0：证书正常310：证书异常311：证书过期312：证书即将过期 */
  Status?: number;
  /** 错误详情 */
  Detail?: string[];
  /** 过期时间 */
  NotAfter?: string;
  /** 证书是否改变。0：未变化1：有变化 */
  Changed?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCiphersDetailRequest {
}

declare interface DescribeCiphersDetailResponse {
  /** 加密套件信息 */
  Ciphers?: TLSCiphers[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomRuleListRequest {
  /** 域名 */
  Domain: string;
  /** 偏移 */
  Offset: number;
  /** 容量 */
  Limit: number;
  /** 过滤数组,name可以是如下的值： RuleID,RuleName,Match */
  Filters?: FiltersItemNew[];
  /** asc或者desc */
  Order?: string;
  /** exp_ts或者mod_ts */
  By?: string;
  /** 查询的域名列表,访问控制页面不用传 */
  DomainList?: string[];
}

declare interface DescribeCustomRuleListResponse {
  /** 规则详情 */
  RuleList?: DescribeCustomRulesRspRuleListItem[];
  /** 规则条数 */
  TotalCount?: string;
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

declare interface DescribeDomainCountInfoRequest {
}

declare interface DescribeDomainCountInfoResponse {
  /** 域名总数 */
  AllDomain?: number;
  /** 最近发现时间 */
  UpdateTime?: string;
  /** 接入域名总数 */
  WafDomainCount?: number;
  /** 剩下配额 */
  LeftDomainCount?: number;
  /** 开启防护域名数 */
  OpenWafDomain?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainDetailsClbRequest {
  /** 域名 */
  Domain: string;
  /** 域名id */
  DomainId: string;
  /** 实例id */
  InstanceId: string;
}

declare interface DescribeDomainDetailsClbResponse {
  /** clb域名详情 */
  DomainsClbPartInfo?: ClbDomainsInfo;
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

declare interface DescribeDomainRulesRequest {
  /** 需要查询的域名 */
  Domain?: string;
}

declare interface DescribeDomainRulesResponse {
  /** 规则列表详情 */
  Rules?: Rule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainVerifyResultRequest {
  /** 域名 */
  Domain: string;
  /** 实例id */
  InstanceID: string;
}

declare interface DescribeDomainVerifyResultResponse {
  /** 结果描述；如果可以添加返回空字符串 */
  Msg?: string;
  /** 检验状态：0表示可以添加，大于0为不能添加 */
  VerifyCode?: number;
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
  /** 分页偏移量，取Limit整数倍。最小值为0，最大值= Total/Limit向上取整 */
  Offset: number;
  /** 返回域名的数量 */
  Limit: number;
  /** 过滤数组，过滤字段包括：Edition：实例版本，sparta-waf或clb-waf Domain：域名 DomainId：域名ID InstanceName：实例名称 InstanceId：实例ID FlowMode：流量接入模式，仅支持CLBWAF FlowCheckMode：流量体检模式，仅支持CLBWAF ClsStatus：日志开关 Status：WAF开关BotStatus：BOT开关 ApiStatus：API安全开关 Engine：引擎模式 UpstreamIP：源站IP，仅支持SAAS型WAF UpstreamDomain：源站域名，仅支持SAAS型WAF DomainState：域名状态，仅支持SAAS型WAF SgState：安全组状态，仅支持SAAS型WAF Label：分组标签，同时仅支持一种标签过滤 */
  Filters?: FiltersItemNew[];
}

declare interface DescribeDomainsResponse {
  /** 总数 */
  Total?: number;
  /** domain列表 */
  Domains?: DomainInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFindDomainListRequest {
  /** 分页 */
  Offset: number;
  /** 每页容量 */
  Limit: number;
  /** 过滤条件 */
  Key: string;
  /** 是否接入waf；传"1"返回接入域名的详情，传"0"返回未接入域名的详情，传""返回接入和未接入域名的详情 */
  IsWafDomain: string;
  /** 排序参数 */
  By?: string;
  /** 排序方式 */
  Order?: string;
}

declare interface DescribeFindDomainListResponse {
  /** 域名总数 */
  Total?: number;
  /** 域名信息列表 */
  List?: FindAllDomainDetail[];
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

declare interface DescribeHistogramRequest {
  /** 起始时间 */
  FromTime: string;
  /** 结束时间 */
  ToTime: string;
  /** 聚类字段，ip为ip聚合，art为响应耗时聚合，url为url聚合，local为ip转化的城市聚合,qps为每秒请求数峰值的聚合，up为上行带宽峰值聚合，down为下行带峰值聚合 */
  QueryField: string;
  /** 条件，access为访问日志，attack为攻击日志 */
  Source: string;
  /** 兼容Host，逐步淘汰Host字段 */
  Host?: string;
  /** 只有两个值有效，sparta-waf，clb-waf，不传则不过滤 */
  Edition?: string;
  /** WAF实例ID，不传则不过滤 */
  InstanceID?: string;
  /** 域名过滤，不传则不过滤，用于替代Host字段，逐步淘汰Host */
  Domain?: string;
}

declare interface DescribeHistogramResponse {
  /** 统计数据 */
  Histogram?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostLimitRequest {
  /** 添加的域名 */
  Domain: string;
  /** 实例id */
  InstanceID?: string;
  /** 流量来源 */
  AlbType?: string;
}

declare interface DescribeHostLimitResponse {
  /** 成功返回的状态码 */
  Success?: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostRequest {
  /** 域名 */
  Domain: string;
  /** 域名ID */
  DomainId: string;
  /** 实例ID */
  InstanceID?: string;
}

declare interface DescribeHostResponse {
  /** 域名详情 */
  Host?: HostRecord;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostsRequest {
  /** 防护域名，如果是要查询某一具体的防护域名则传入此参数，要求是准确的域名，此参数不支持模糊搜索 */
  Domain?: string;
  /** 防护域名ID，如果是要查询某一具体的防护域名则传入此参数，要求是准确的域名ID，此参数不支持模糊搜索 */
  DomainId?: string;
  /** 搜索条件，根据此参数对域名做模糊搜索 */
  Search?: string;
  /** 复杂的搜索条件 */
  Item?: SearchItem;
  /** 实例id */
  InstanceID?: string;
}

declare interface DescribeHostsResponse {
  /** 防护域名列表的长度 */
  TotalCount?: number;
  /** 防护域名的列表 */
  HostList?: HostRecord[];
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
  /** 释放延期标识 */
  FreeDelayFlag?: number;
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
  /** 分页偏移量，取Limit整数倍。最小值为0，最大值= Total/Limit向上取整 */
  OffSet?: number;
  /** 每页返回的数量，默认为20 */
  Limit?: number;
  /** 来源 */
  Source?: string;
  /** 排序参数 */
  Sort?: string;
  /** IP */
  Ip?: string;
  /** 生效状态，1表示生效中，2表示过期，0表示全部 */
  ValidStatus?: number;
  /** 最小有效时间的时间戳 */
  ValidTimeStampMin?: string;
  /** 最大有效时间的时间戳 */
  ValidTimeStampMax?: string;
  /** 规则ID */
  RuleId?: number;
  /** 0表示全部，1表示永久生效，2表示定时生效，3表示周粒度生效，4表示月粒度生效 */
  TimerType?: number;
}

declare interface DescribeIpAccessControlResponse {
  /** 输出 */
  Data?: IpAccessControlData;
  /** 已经使用的IP黑白名单的IP总数 */
  UsedTotal?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpHitItemsRequest {
  /** 域名 */
  Domain: string;
  /** 计数标识 */
  Count: number;
  /** 类别，ip封禁传值auto_deny */
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
  /** 限制数目，category不等于threat_intelligence时，该值需要必传 */
  Limit?: number;
  /** 策略名称 */
  Name?: string;
  /** 排序参数 */
  Sort?: string;
  /** IP,category传threat_intelligence的时候，该值必传 */
  Ip?: string;
  /** 有效时间最小时间戳 */
  ValidTimeStampMin?: number;
  /** 有效时间最大时间戳 */
  ValidTimeStampMax?: number;
}

declare interface DescribeIpHitItemsResponse {
  /** 结果 */
  Data?: IpHitItemsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModuleStatusRequest {
  /** 要查询状态的域名 */
  Domain: string;
}

declare interface DescribeModuleStatusResponse {
  /** WEB安全规则是否开启 */
  WebSecurity?: number;
  /** 访问控制规则是否开启 */
  AccessControl?: number;
  /** CC防护是否开启 */
  CcProtection?: number;
  /** 网页防篡改是否开启 */
  AntiTamper?: number;
  /** 信息防泄漏是否开启 */
  AntiLeakage?: number;
  /** API安全是否开启 */
  ApiProtection?: number;
  /** 限流模块开关 */
  RateLimit?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeObjectsRequest {
  /** 支持的过滤器:	ObjectId: clb实例ID	VIP: clb实例的公网IP	InstanceId: waf实例ID	Domain: 精准域名	Status: waf防护开关状态: 0关闭，1开启	ClsStatus: waf日志开关: 0关闭，1开启 */
  Filters?: FiltersItemNew[];
  /** 排序方式，支持asc或者desc */
  Order?: string;
  /** 根据哪个字段排序 */
  By?: string;
}

declare interface DescribeObjectsResponse {
  /** 对象列表 */
  ClbObjects?: ClbObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOwaspRuleTypesRequest {
  /** 查询域名 */
  Domain: string;
  /** 分页页数，默认为0 */
  Offset?: number;
  /** 每页容量，默认为10 */
  Limit?: number;
  /** 筛选条件，支持 RuleId：规则ID、CveID：CVE编号、Desc：描述 */
  Filters?: FiltersItemNew[];
}

declare interface DescribeOwaspRuleTypesResponse {
  /** 规则类型数量 */
  Total?: number;
  /** 规则类型列表及信息 */
  List?: OwaspRuleType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOwaspRulesRequest {
  /** 需要查询的域名 */
  Domain: string;
  /** 分页页数，默认为0 */
  Offset?: number;
  /** 每页容量，默认为10 */
  Limit?: number;
  /** 排序字段，支持 RuleId, UpdateTime */
  By?: string;
  /** 排序方式，支持asc、desc */
  Order?: string;
  /** 筛选条件，支持 RuleId：规则ID、TypeId：规则类型、Desc：规则描述 、CveID：CVE编号、Status：规则状态、VulLevel：威胁等级 */
  Filters?: FiltersItemNew[];
}

declare interface DescribeOwaspRulesResponse {
  /** 规则总数 */
  Total?: number;
  /** 规则列表 */
  List?: OwaspRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOwaspWhiteRulesRequest {
  /** 需要查询的域名 */
  Domain: string;
  /** 分页分页，默认为0 */
  Offset?: number;
  /** 每页容量，默认为10 */
  Limit?: number;
  /** 排序的字段，支持CreateTime：新建时间、UpdateTime：修改时间 */
  By?: string;
  /** 排序方式，支持asc、desc */
  Order?: string;
  /** 筛选条件，支持RuleId：加白规则ID、 Name：规则名称、RuleType：加白的规则类型、Status：规则开关状态、ValidStatus：规则生效状态、TimerType：生效方式、ID：具体的加白id，根据RuleType来判断是规则id还是类型id */
  Filters?: FiltersItemNew[];
}

declare interface DescribeOwaspWhiteRulesResponse {
  /** 规则总数 */
  Total?: number;
  /** 规则白名单列表 */
  List?: OwaspWhiteRule[];
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
  /** 十二个值可选：access-峰值qps趋势图botAccess- bot峰值qps趋势图down-下行峰值带宽趋势图up-上行峰值带宽趋势图attack-Web攻击总数趋势图cc-CC攻击总数趋势图bw-黑IP攻击总数趋势图tamper-防篡改攻击总数趋势图leak-防泄露攻击总数趋势图acl-访问控制攻击总数趋势图http_status-状态码各次数趋势图wx_access-微信小程序峰值qps趋势图 */
  MetricName?: string;
}

declare interface DescribePeakPointsResponse {
  /** 数据点 */
  Points?: PeakPointsItem[];
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
  Access?: number;
  /** 上行带宽峰值，单位B */
  Up?: number;
  /** 下行带宽峰值，单位B */
  Down?: number;
  /** Web攻击总数 */
  Attack?: number;
  /** CC攻击总数 */
  Cc?: number;
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
  InstanceId?: string;
  /** 防护状态 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePortsRequest {
  /** 实例ID */
  InstanceID?: string;
  /** 实例类型 */
  Edition?: string;
}

declare interface DescribePortsResponse {
  /** http端口列表 */
  HttpPorts?: string[];
  /** https端口列表 */
  HttpsPorts?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePostCKafkaFlowsRequest {
  /** 1-访问日志，2-攻击日志，默认为访问日志。 */
  LogType?: number;
}

declare interface DescribePostCKafkaFlowsResponse {
  /** 客户的投递流列表 */
  PostCKafkaFlows?: PostCKafkaFlowInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePostCLSFlowsRequest {
  /** 1-访问日志，2-攻击日志，默认为访问日志。 */
  LogType?: number;
}

declare interface DescribePostCLSFlowsResponse {
  /** 客户的投递流列表 */
  PostCLSFlows?: PostCLSFlowInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProtectionModesRequest {
  /** sparta-waf或clb */
  Edition: string;
  /** 域名 */
  Domain: string;
}

declare interface DescribeProtectionModesResponse {
  /** 规则大类ID及防护模式 */
  Modes?: TigaMainClassMode[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleLimitRequest {
  /** 域名 */
  Domain: string;
  /** 实例Id */
  InstanceId?: string;
}

declare interface DescribeRuleLimitResponse {
  /** waf模块的规格 */
  Res?: WafRuleLimit;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanIpRequest {
  /** 要查询的ip地址 */
  Ip: string;
}

declare interface DescribeScanIpResponse {
  /** ip列表,当入参Ip为all时，返回所有已知ip列表 */
  IpList?: ScanIpInfo[];
  /** 所属业务 */
  Bussiness?: string;
  /** 业务特征 */
  Characteristic?: string;
  /** 扫描说明 */
  Descibe?: string;
  /** 官方公告 */
  Referer?: string;
  /** 扫描示例 */
  Demo?: string;
  /** 扫描对象 */
  Target?: string;
  /** 扫描目的 */
  Purpose?: string;
  /** 产品文案 */
  Announcement?: string;
  /** 更新时间 */
  UpdateTime?: number;
  /** ipowner */
  IpOwner?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSessionRequest {
  /** 域名 */
  Domain: string;
  /** clb-waf或者sparta-waf */
  Edition?: string;
}

declare interface DescribeSessionResponse {
  /** 返回结果 */
  Data?: SessionData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpartaProtectionInfoRequest {
  /** 域名 */
  Domain: string;
  /** 版本 */
  Edition?: string;
  /** 实例 */
  InstanceID?: string;
}

declare interface DescribeSpartaProtectionInfoResponse {
  /** 域名 */
  Domain?: string;
  /** 域名ID */
  DomainId?: string;
  /** cname取值 */
  Cname?: string;
  /** 状态 */
  Status?: string;
  /** 源IP地址列表 */
  SrcList?: string[];
  /** 证书类型 */
  CertType?: string;
  /** 证书 */
  Cert?: string;
  /** 私有密钥 */
  PrivateKey?: string;
  /** ssl的id */
  Sslid?: string;
  /** 是否是cdn */
  IsCdn?: string;
  /** 灰度区域列表 */
  GrayAreas?: string[];
  /** 引擎 */
  Engine?: string;
  /** HTTPS重写 */
  HttpsRewrite?: string;
  /** upstreamType取值 */
  UpstreamType?: string;
  /** upstreamDomain取值 */
  UpstreamDomain?: string;
  /** upstreamScheme取值 */
  UpstreamScheme?: string;
  /** 是否是HTTP2 */
  IsHttp2?: string;
  /** 是否含有websocket */
  IsWebsocket?: string;
  /** loadBalance信息 */
  LoadBalance?: string;
  /** httpsUpstreamPort取值 */
  HttpsUpstreamPort?: string;
  /** port信息 */
  Ports?: PortItem[];
  /** 是否灰度 */
  IsGray?: string;
  /** 模式 */
  Mode?: string;
  /** 防御等级,100,200,300 */
  Level?: string;
  /** 与源站是否保持长连接 */
  IsKeepAlive?: string;
  /** 0：BGP 1：Anycast */
  Anycast?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTlsVersionRequest {
}

declare interface DescribeTlsVersionResponse {
  /** TLS信息 */
  TLS?: TLSVersion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopAttackDomainRequest {
  /** 查询起始时间 */
  FromTime: string;
  /** 查询结束时间 */
  ToTime: string;
  /** TOP N,可从0-10选择，默认是10 */
  Count?: number;
  /** 只有两个值有效，sparta-waf，clb-waf，不传则不过滤 */
  Edition?: string;
  /** WAF实例ID，不传则不过滤 */
  InstanceID?: string;
}

declare interface DescribeTopAttackDomainResponse {
  /** CC攻击域名列表 */
  CC?: KVInt[];
  /** Web攻击域名列表 */
  Web?: KVInt[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserCdcClbWafRegionsRequest {
}

declare interface DescribeUserCdcClbWafRegionsResponse {
  /** CdcRegion的类型描述 */
  Data?: CdcRegion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserClbWafRegionsRequest {
  /** 流量来源，不填默认clb。clb：负载均衡器，tsegw：云原生API网关，scf：云函数，apisix：腾讯云上其他网关 */
  AlbType?: string;
}

declare interface DescribeUserClbWafRegionsResponse {
  /** 地域（标准的ap-格式）列表 */
  Data?: string[];
  /** 包含详细属性的地域信息 */
  RichDatas?: ClbWafRegionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserDomainInfoRequest {
}

declare interface DescribeUserDomainInfoResponse {
  /** saas和clb域名信息 */
  UsersInfo?: UserDomainInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserLevelRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeUserLevelResponse {
  /** 300:正常 400:严格 */
  Level?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserSignatureClassRequest {
  /** 查询域名 */
  Domain: string;
}

declare interface DescribeUserSignatureClassResponse {
  /** 规则类型数量 */
  Total?: number;
  /** 规则类型列表及信息 */
  RuleTypeList?: RuleType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserSignatureRuleRequest {
  /** 需要查询的域名 */
  Domain: string;
  /** 分页 */
  Offset: number;
  /** 每页容量 */
  Limit: number;
  /** 排序字段，支持 signature_id, modify_time */
  By?: string;
  /** 排序方式 */
  Order?: string;
  /** 筛选条件，支持 MainClassName，SubClassID ,CveID, Status, ID; ID为规则id */
  Filters?: FiltersItemNew[];
}

declare interface DescribeUserSignatureRuleResponse {
  /** 规则总数 */
  Total?: number;
  /** 规则列表 */
  Rules?: UserSignatureRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserSignatureRuleV2Request {
  /** 需要查询的域名 */
  Domain: string;
  /** 分页 */
  Offset: number;
  /** 每页容量 */
  Limit: number;
  /** 排序字段，支持 signature_id, modify_time */
  By?: string;
  /** 排序方式 */
  Order?: string;
  /** 筛选条件，支持 MainClassName，SubClassID ,CveID, Status, ID; ID为规则id */
  Filters?: FiltersItemNew[];
}

declare interface DescribeUserSignatureRuleV2Response {
  /** 规则总数 */
  Total?: number;
  /** 规则列表 */
  Rules?: UserSignatureRule[];
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
  /** 实例Id */
  InstanceId?: string;
}

declare interface DescribeWafAutoDenyRulesResponse {
  /** 攻击次数阈值 */
  AttackThreshold?: number;
  /** 攻击时间阈值 */
  TimeThreshold?: number;
  /** 自动封禁时间 */
  DenyTimeThreshold?: number;
  /** 自动封禁状态 */
  DefenseStatus?: number;
  /** 数据来源Source字段 custom-自定义(默认)、batch-domain-批量域名 */
  Source?: string;
  /** 重保护网域名状态 */
  HWState?: number;
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
  WafThreatenIntelligenceDetails?: WafThreatenIntelligenceDetails;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebshellStatusRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeWebshellStatusResponse {
  /** webshell域名 */
  Domain?: string;
  /** 开关状态 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyPostCKafkaFlowRequest {
  /** 投递流的流ID */
  FlowId: number;
  /** 1-访问日志，2-攻击日志，默认为访问日志。 */
  LogType?: number;
}

declare interface DestroyPostCKafkaFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyPostCLSFlowRequest {
  /** 投递流的流ID */
  FlowId: number;
  /** 1-访问日志，2-攻击日志，默认为访问日志。 */
  LogType?: number;
}

declare interface DestroyPostCLSFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FreshAntiFakeUrlRequest {
  /** 域名 */
  Domain: string;
  /** Id */
  Id: number;
}

declare interface FreshAntiFakeUrlResponse {
  /** 结果成功与否 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateDealsAndPayNewRequest {
  /** 计费下单入参 */
  Goods: GoodNews[];
}

declare interface GenerateDealsAndPayNewResponse {
  /** 计费下单响应结构体 */
  Data?: DealData;
  /** 1:成功，0:失败 */
  Status?: number;
  /** 返回message */
  ReturnMessage?: string;
  /** 购买的实例ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAttackDownloadRecordsRequest {
}

declare interface GetAttackDownloadRecordsResponse {
  /** 下载攻击日志记录数组 */
  Records?: DownloadAttackRecordInfo[];
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

declare interface GetAttackTotalCountRequest {
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 查询的域名，全部域名填all */
  Domain: string;
  /** 查询条件，默认为"" */
  QueryString: string;
}

declare interface GetAttackTotalCountResponse {
  /** 攻击总次数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetInstanceQpsLimitRequest {
  /** 套餐实例id */
  InstanceId: string;
  /** 套餐类型 */
  Type?: string;
}

declare interface GetInstanceQpsLimitResponse {
  /** 弹性qps相关值集合 */
  QpsData?: QpsData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportIpAccessControlRequest {
  /** 导入的IP黑白名单列表 */
  Data: IpAccessControlParam[];
  /** 具体域名如：test.qcloudwaf.com全局域名为：global */
  Domain: string;
  /** 是否为批量防护IP黑白名单，当为批量防护IP黑白名单时，取值为batch，否则为空 */
  SourceType: string;
  /** 实例Id */
  InstanceId?: string;
}

declare interface ImportIpAccessControlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAntiFakeUrlRequest {
  /** 域名 */
  Domain: string;
  /** 名称 */
  Name: string;
  /** uri */
  Uri: string;
  /** ID */
  Id: number;
}

declare interface ModifyAntiFakeUrlResponse {
  /** 结果 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAntiFakeUrlStatusRequest {
  /** 域名 */
  Domain: string;
  /** 状态 */
  Status: number;
  /** Id列表 */
  Ids: number[];
}

declare interface ModifyAntiFakeUrlStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAntiInfoLeakRuleStatusRequest {
  /** 域名 */
  Domain: string;
  /** 规则 */
  RuleId: number;
  /** 状态 */
  Status: number;
}

declare interface ModifyAntiInfoLeakRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAntiInfoLeakRulesRequest {
  /** 规则ID */
  RuleId: number;
  /** 规则名称 */
  Name: string;
  /** 域名 */
  Domain: string;
  /** Action 值 */
  ActionType: number;
  /** 策略数组 */
  Strategies: StrategyForAntiInfoLeak[];
}

declare interface ModifyAntiInfoLeakRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApiAnalyzeStatusRequest {
  /** 开关状态 */
  Status: number;
  /** 域名 */
  Domain?: string;
  /** 实例id */
  InstanceId?: string;
  /** 需要批量开启的实体列表 */
  TargetList?: TargetEntity[];
}

declare interface ModifyApiAnalyzeStatusResponse {
  /** 已经开启的数量,如果返回值为3（大于支持的域名开启数量），则表示开启失败 */
  Count?: number;
  /** 不支持开启的域名列表 */
  UnSupportedList?: string[];
  /** 开启/关闭失败的域名列表 */
  FailDomainList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApiSecEventChangeRequest {
  /** 变更状态，1:新发现，2，确认中，3，已确认，4，已下线，5，已忽略 */
  Mode?: string;
  /** 处理人 */
  UserName?: string;
  /** 备注，有长度显示1k */
  Remark?: string;
  /** 批量操作的事件列表 */
  EventIdList?: string[];
  /** 批量操作的api列表 */
  ApiNameList?: ApiSecKey[];
  /** 判断是否删除，包括删除事件和删除资产 */
  IsDelete?: boolean;
  /** 判断是否是更新api的备注，更新api备注的时候，为true */
  UpdateApiRemark?: boolean;
}

declare interface ModifyApiSecEventChangeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAreaBanAreasRequest {
  /** 需要修改的域名 */
  Domain: string;
  /** 需要调整的地域信息，一个字符串数组 */
  Areas: string[];
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType?: string;
  /** 定时任务配置 */
  JobDateTime?: JobDateTime;
}

declare interface ModifyAreaBanAreasResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAreaBanRuleRequest {
  /** 需要修改的域名 */
  Domain: string;
  /** 需要新增的封禁地域 */
  Areas: Area[];
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType: string;
  /** 定时任务配置 */
  JobDateTime: JobDateTime;
  /** 地域信息的语言，支持cn、en，默认为中文cn */
  Lang?: string;
}

declare interface ModifyAreaBanRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAreaBanStatusRequest {
  /** 需要修改的域名 */
  Domain: string;
  /** 状态值，0表示关闭，1表示开启 */
  Status: number;
}

declare interface ModifyAreaBanStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAttackWhiteRuleRequest {
  /** 规则序号 */
  RuleId: number;
  /** 域名 */
  Domain: string;
  /** 规则状态 */
  Status: number;
  /** 匹配规则项列表 */
  Rules: UserWhiteRuleItem[];
  /** 规则Id */
  SignatureId?: string;
  /** 编辑的加白的规则ID列表 */
  SignatureIds?: string[];
  /** 加白的大类规则ID */
  TypeIds?: string[];
  /** 0表示按照特定规则ID加白, 1表示按照规则类型加白 */
  Mode?: number;
  /** 规则名 */
  Name?: string;
}

declare interface ModifyAttackWhiteRuleResponse {
  /** 规则总数 */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBotSceneStatusRequest {
  /** 域名 */
  Domain: string;
  /** 场景ID */
  SceneId: string;
  /** true-开启 false-关闭 */
  Status: boolean;
}

declare interface ModifyBotSceneStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBotSceneUCBRuleRequest {
  /** 域名 */
  Domain: string;
  /** 1.BOT全局白名单处调用时，传"global";2.BOT场景配置时，传具体的场景ID */
  SceneId: string;
  /** 规则内容, 增加编码SceneId信息,1.BOT全局白名单处调用时，SceneId为"global", RuleType传10, Action为"permit";2.BOT场景配置时，SceneId为场景ID */
  Rule?: InOutputBotUCBRule;
  /** 530改批量操作 */
  BatchRules?: InOutputBotUCBRule[];
}

declare interface ModifyBotSceneUCBRuleResponse {
  /** 正常情况下为null */
  Data?: string;
  /** ["1231"] */
  RuleIdList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBotStatusRequest {
  /** 类别 */
  Category: string;
  /** 状态 */
  Status: string;
  /** 域名 */
  Domain?: string;
  /** 实例id */
  InstanceID?: string;
  /** 是否是bot4.0版本 */
  IsVersionFour?: boolean;
  /** 传入Bot版本号，场景化版本为"4.1.0" */
  BotVersion?: string;
  /** 批量开启BOT开关的域名列表 */
  DomainList?: string[];
}

declare interface ModifyBotStatusResponse {
  /** 正常情况为null */
  Data?: string;
  /** 未购买BOT的域名列表 */
  UnSupportedList?: string[];
  /** 已购买但操作失败的域名列表 */
  FailDomainList?: string[];
  /** 成功数目 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomRuleRequest {
  /** 编辑的域名 */
  Domain: string;
  /** 编辑的规则ID */
  RuleId: number;
  /** 编辑的规则名称 */
  RuleName: string;
  /** 动作类型，1代表阻断，2代表人机识别，3代表观察，4代表重定向，5代表JS校验 */
  RuleAction: string;
  /** 匹配条件数组 */
  Strategies: Strategy[];
  /** WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。 */
  Edition?: string;
  /** 动作为重定向的时候重定向URL，默认为"/" */
  Redirect?: string;
  /** 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果多个勾选那么以,串接。默认是"geoip,cc,owasp,ai,antileakage" */
  Bypass?: string;
  /** 优先级，1~100的整数，数字越小，代表这条规则的执行优先级越高。默认是100 */
  SortId?: number;
  /** 规则生效截止时间，0：永久生效，其它值为对应时间的时间戳。默认是0 */
  ExpireTime?: number;
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType?: string;
  /** 定时任务配置 */
  JobDateTime?: JobDateTime;
  /** 规则来源，判断是不是小程序的 */
  Source?: string;
  /** 开关状态，小程序风控规则的时候传该值 */
  Status?: number;
  /** 拦截页面id */
  PageId?: string;
  /** 匹配条件的逻辑关系，支持and、or，分别表示多个逻辑匹配条件是与、或的关系 */
  LogicalOp?: string;
}

declare interface ModifyCustomRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success?: ResponseCode;
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
  /** 规则id */
  DomainRuleIdList?: DomainRuleId[];
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
  /** 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果勾选多个，则以“，”串接。 */
  Bypass: string;
  /** 优先级，1~100的整数，数字越小，代表这条规则的执行优先级越高。 */
  SortId: number;
  /** 如果没有设置JobDateTime字段则用此字段，0表示永久生效，其它表示定时生效的截止时间（单位为秒） */
  ExpireTime: number;
  /** 匹配条件数组 */
  Strategies: Strategy[];
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType?: string;
  /** 定时任务配置 */
  JobDateTime?: JobDateTime;
  /** 匹配条件的逻辑关系，支持and、or，分别表示多个逻辑匹配条件是与、或的关系 */
  LogicalOp?: string;
}

declare interface ModifyCustomWhiteRuleResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success?: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomWhiteRuleStatusRequest {
  /** 域名 */
  Domain: string;
  /** 规则ID */
  RuleId: number;
  /** 开关的状态，1是开启、0是关闭 */
  Status: number;
}

declare interface ModifyCustomWhiteRuleStatusResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success?: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainIpv6StatusRequest {
  /** 需要修改的域名所属的实例ID */
  InstanceId: string;
  /** 需要修改的域名 */
  Domain: string;
  /** 需要修改的域名ID */
  DomainId: string;
  /** 修改域名的Ipv6开关为Status （1:开启 2:关闭） */
  Status: number;
}

declare interface ModifyDomainIpv6StatusResponse {
  /** 返回的状态 （0: 操作失败 1:操作成功 2:企业版以上不支持 3:企业版以下不支持 ） */
  Ipv6Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDomainPostActionRequest {
  /** 域名 */
  Domain: string;
  /** 0-关闭投递，1-开启投递 */
  PostCLSAction: number;
  /** 0-关闭投递，1-开启投递 */
  PostCKafkaAction: number;
}

declare interface ModifyDomainPostActionResponse {
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

declare interface ModifyDomainsCLSStatusRequest {
  /** 需要修改的域名列表 */
  Domains: DomainURI[];
  /** 修改域名的访问日志开关为Status */
  Status: number;
}

declare interface ModifyDomainsCLSStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGenerateDealsRequest {
  /** 计费下单入参 */
  Goods: Goods[];
}

declare interface ModifyGenerateDealsResponse {
  /** 计费下单响应结构体 */
  Data?: DealData;
  /** 1:成功，0:失败 */
  Status?: number;
  /** 返回message */
  ReturnMessage?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHostFlowModeRequest {
  /** 域名 */
  Domain: string;
  /** 域名ID */
  DomainId: string;
  /** WAF流量模式。0：镜像模式（默认）1：清洗模式 */
  FlowMode: number;
  /** 实例ID */
  InstanceID?: string;
}

declare interface ModifyHostFlowModeResponse {
  /** 成功的状态码 */
  Success?: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHostModeRequest {
  /** 域名 */
  Domain: string;
  /** 域名ID */
  DomainId: string;
  /** 防护状态：10：规则观察&&AI关闭模式，11：规则观察&&AI观察模式，12：规则观察&&AI拦截模式20：规则拦截&&AI关闭模式，21：规则拦截&&AI观察模式，22：规则拦截&&AI拦截模式 */
  Mode: number;
  /** 0:修改防护模式，1:修改AI */
  Type?: number;
  /** 实例ID */
  InstanceID?: string;
  /** 实例类型 */
  Edition?: string;
}

declare interface ModifyHostModeResponse {
  /** 操作的状态码，如果所有的资源操作成功则返回的是成功的状态码，如果有资源操作失败则需要解析Message的内容来查看哪个资源失败 */
  Success?: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHostRequest {
  /** 编辑的域名配置信息 */
  Host: HostRecord;
  /** 实例唯一ID */
  InstanceID?: string;
}

declare interface ModifyHostResponse {
  /** 编辑的域名ID */
  DomainId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHostStatusRequest {
  /** 域名状态列表 */
  HostsStatus: HostStatus[];
}

declare interface ModifyHostStatusResponse {
  /** 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码） */
  Success?: ResponseCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceAttackLogPostRequest {
  /** 实例ID */
  InstanceId: string;
  /** 攻击日志投递开关 */
  AttackLogPost: number;
}

declare interface ModifyInstanceAttackLogPostResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceElasticModeRequest {
  /** 实例ID */
  InstanceId: string;
  /** 弹性计费开关 */
  Mode: number;
}

declare interface ModifyInstanceElasticModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceNameRequest {
  /** 新名称 */
  InstanceName: string;
  /** 实例id */
  InstanceID: string;
  /** 实例版本，支持clb-waf、sparta-waf */
  Edition: string;
}

declare interface ModifyInstanceNameResponse {
  /** 修改状态：0为成功 */
  ModifyCode?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceQpsLimitRequest {
  /** 套餐实例id */
  InstanceId: string;
  /** qps上限 */
  QpsLimit: number;
}

declare interface ModifyInstanceQpsLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRenewFlagRequest {
  /** 实例ID */
  InstanceId: string;
  /** 续费开关 */
  RenewFlag: number;
}

declare interface ModifyInstanceRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIpAccessControlRequest {
  /** 具体域名如：test.qcloudwaf.com全局域名为：global */
  Domain: string;
  /** ip参数列表 */
  IpList: string[];
  /** 42为黑名单，40为白名单 */
  ActionType: number;
  /** 规则ID */
  RuleId: number;
  /** valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00）） */
  ValidTS?: number;
  /** 实例Id */
  InstanceId?: string;
  /** WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF */
  Edition?: string;
  /** 是否为批量防护IP黑白名单，当为批量防护IP黑白名单时，取值为batch，否则为空 */
  SourceType?: string;
  /** 备注 */
  Note?: string;
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType?: string;
  /** 定时配置详情 */
  JobDateTime?: JobDateTime;
}

declare interface ModifyIpAccessControlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModuleStatusRequest {
  /** 需要设置的domain */
  Domain: string;
  /** Web 安全模块开关，0或1 */
  WebSecurity: number;
  /** 访问控制模块开关，0或者1 */
  AccessControl: number;
  /** CC模块开关，0或者1 */
  CcProtection: number;
  /** API安全模块开关，0或者1 */
  ApiProtection: number;
  /** 防篡改模块开关，0或者1 */
  AntiTamper?: number;
  /** 防泄漏模块开关，0或者1 */
  AntiLeakage?: number;
  /** 限流模块开关，0或1 */
  RateLimit?: number;
}

declare interface ModifyModuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyObjectRequest {
  /** 修改对象标识 */
  ObjectId: string;
  /** 改动作类型:Status修改开关，InstanceId绑定实例, Proxy设置代理状态 */
  OpType: string;
  /** 新的Waf开关状态，如果和已有状态相同认为修改成功 */
  Status?: number;
  /** 新的实例ID，如果和已绑定的实例相同认为修改成功 */
  InstanceId?: string;
  /** 是否开启代理，0:不开启,1:以XFF的第一个IP地址作为客户端IP,2:以remote_addr作为客户端IP,3:从指定的头部字段获取客户端IP，字段通过IpHeaders字段给出(OpType为Status或Proxy时，该值有效) */
  Proxy?: number;
  /** IsCdn=3时，需要填此参数，表示自定义header(OpType为Status或Proxy时，该值有效) */
  IpHeaders?: string[];
}

declare interface ModifyObjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOwaspRuleStatusRequest {
  /** 域名 */
  Domain: string;
  /** 规则开关，0：关闭、1：开启、2：只观察 */
  RuleStatus: number;
  /** 是否全选 */
  SelectAll: boolean;
  /** 规则ID列表 */
  RuleIDs?: string[];
  /** 如果反转需要传入类型 */
  TypeId?: number;
  /** 修改原因 0：无(兼容记录为空) 1：业务自身特性误报避免 2：规则误报上报 3：核心业务规则灰度 4：其它 */
  Reason?: number;
}

declare interface ModifyOwaspRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOwaspRuleTypeActionRequest {
  /** 域名 */
  Domain: string;
  /** 规则类型ID列表 */
  TypeIDs: string[];
  /** 规则类型的防护模式，0：观察、1：拦截 */
  RuleTypeAction: number;
}

declare interface ModifyOwaspRuleTypeActionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOwaspRuleTypeLevelRequest {
  /** 域名 */
  Domain: string;
  /** 规则类型ID列表 */
  TypeIDs: string[];
  /** 规则的防护等级，100：宽松、200：正常、300：严格、400：超严格 */
  RuleTypeLevel: number;
}

declare interface ModifyOwaspRuleTypeLevelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOwaspRuleTypeStatusRequest {
  /** 域名 */
  Domain: string;
  /** 规则类型ID列表 */
  TypeIDs: string[];
  /** 规则类型的开关状态，0：关闭、1：开启 */
  RuleTypeStatus: number;
}

declare interface ModifyOwaspRuleTypeStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOwaspWhiteRuleRequest {
  /** 规则ID */
  RuleId: number;
  /** 规则名称 */
  Name: string;
  /** 域名 */
  Domain: string;
  /** 规则匹配策略列表 */
  Strategies: Strategy[];
  /** 加白的规则ID列表 */
  Ids: number[];
  /** 加白的类型，0:按照特定规则ID加白, 1:按照规则类型加白 */
  Type: number;
  /** 规则执行的方式，TimedJob为定时执行，CronJob为周期执行 */
  JobType: string;
  /** 定时任务配置 */
  JobDateTime: JobDateTime;
  /** 如果没有设置JobDateTime字段则用此字段，0表示永久生效，其它表示定时生效的截止时间（单位为秒） */
  ExpireTime: number;
  /** 规则状态，0：关闭、1：开启，默认为开启 */
  Status?: number;
}

declare interface ModifyOwaspWhiteRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProtectionStatusRequest {
  /** 域名 */
  Domain: string;
  /** 1：开启WAF开关，0：关闭WAF开关 */
  Status: number;
  /** WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。 */
  Edition?: string;
}

declare interface ModifyProtectionStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySpartaProtectionModeRequest {
  /** 域名 */
  Domain: string;
  /** 防护状态：10：规则观察&&AI关闭模式，11：规则观察&&AI观察模式，12：规则观察&&AI拦截模式20：规则拦截&&AI关闭模式，21：规则拦截&&AI观察模式，22：规则拦截&&AI拦截模式 */
  Mode: number;
  /** WAF的版本，clb-waf代表负载均衡WAF、sparta-waf代表SaaS WAF，默认是sparta-waf。 */
  Edition?: string;
  /** 0是修改规则引擎状态，1是修改AI的状态 */
  Type?: number;
  /** 实例id */
  InstanceID?: string;
}

declare interface ModifySpartaProtectionModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySpartaProtectionRequest {
  /** 域名 */
  Domain: string;
  /** 必填项。域名唯一ID */
  DomainId: string;
  /** 必填项。域名所属实例id */
  InstanceID: string;
  /** 证书类型。0：仅配置HTTP监听端口，没有证书1：证书来源为自有证书2：证书来源为托管证书 */
  CertType?: number;
  /** CertType为1时，需要填充此参数，表示自有证书的证书链 */
  Cert?: string;
  /** CertType为1时，需要填充此参数，表示自有证书的私钥 */
  PrivateKey?: string;
  /** CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  SSLId?: string;
  /** waf前是否部署有七层代理服务。0：没有部署代理服务1：有部署代理服务，waf将使用XFF获取客户端IP2：有部署代理服务，waf将使用remote_addr获取客户端IP3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP */
  IsCdn?: number;
  /** 服务配置有HTTPS端口时，HTTPS的回源协议。http：使用http协议回源，和HttpsUpstreamPort配合使用https：使用https协议回源 */
  UpstreamScheme?: string;
  /** HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段 */
  HttpsUpstreamPort?: string;
  /** 是否开启HTTP强制跳转到HTTPS。0：不强制跳转1：开启强制跳转 */
  HttpsRewrite?: number;
  /** 回源类型。0：通过IP回源1：通过域名回源 */
  UpstreamType?: number;
  /** 域名回源时的回源域名。UpstreamType为1时，需要填充此字段 */
  UpstreamDomain?: string;
  /** IP回源时的回源IP列表。UpstreamType为0时，需要填充此字段 */
  SrcList?: string[];
  /** 是否开启HTTP2，需要开启HTTPS协议支持。0：关闭1：开启 */
  IsHttp2?: number;
  /** 是否开启WebSocket支持。0：关闭1：开启 */
  IsWebsocket?: number;
  /** 回源负载均衡策略。0：轮询1：IP hash2：加权轮询 */
  LoadBalance?: number;
  /** 是否开启灰度，0表示不开启灰度。 */
  IsGray?: number;
  /** 域名所属实例类型 */
  Edition?: string;
  /** 端口信息，可通过DescribeDomains接口获取具体参数信息。 */
  Ports?: SpartaProtectionPort[];
  /** 是否开启长连接。0： 短连接1： 长连接 */
  IsKeepAlive?: string;
  /** 目前填0即可。anycast IP类型开关： 0 普通IP 1 Anycast IP */
  Anycast?: number;
  /** 回源IP列表各IP的权重，和SrcList一一对应。当且仅当UpstreamType为0，并且SrcList有多个IP，并且LoadBalance为2时需要填写，否则填 [] */
  Weights?: number[];
  /** 是否开启主动健康检测。0：不开启1：开启 */
  ActiveCheck?: number;
  /** TLS版本信息 */
  TLSVersion?: number;
  /** 加密套件信息 */
  Ciphers?: number[];
  /** 加密套件模板。0：不支持选择，使用默认模板 1：通用型模板 2：安全型模板3：自定义模板 */
  CipherTemplate?: number;
  /** WAF与源站的读超时时间，默认300s。 */
  ProxyReadTimeout?: number;
  /** WAF与源站的写超时时间，默认300s。 */
  ProxySendTimeout?: number;
  /** WAF回源时的SNI类型。0：关闭SNI，不配置client_hello中的server_name1：开启SNI，client_hello中的server_name为防护域名2：开启SNI，SNI为域名回源时的源站域名3：开启SNI，SNI为自定义域名 */
  SniType?: number;
  /** SniType为3时，需要填此参数，表示自定义的SNI； */
  SniHost?: string;
  /** IsCdn=3时，需要填此参数，表示自定义header */
  IpHeaders?: string[];
  /** 是否开启XFF重置。0：关闭1：开启 */
  XFFReset?: number;
  /** 域名备注信息 */
  Note?: string;
  /** 自定义回源Host。默认为空字符串，表示使用防护域名作为回源Host。 */
  UpstreamHost?: string;
  /** 是否开启缓存。 0：关闭 1：开启 */
  ProxyBuffer?: number;
  /** 是否开启拨测。 0: 禁用拨测 1: 启用拨测。默认启用拨测 */
  ProbeStatus?: number;
  /** 国密选项。0：不开启国密 1：在原有TLS选项的基础上追加支持国密 2：开启国密并仅支持国密客户端访问 */
  GmType?: number;
  /** 国密证书类型。0：无国密证书 1：证书来源为自有国密证书 2：证书来源为托管国密证书 */
  GmCertType?: number;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的证书链 */
  GmCert?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的私钥 */
  GmPrivateKey?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书 */
  GmEncCert?: string;
  /** GmCertType为1时，需要填充此参数，表示自有国密证书的加密证书的私钥 */
  GmEncPrivateKey?: string;
  /** GmCertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  GmSSLId?: string;
  /** 回源策略，支持负载均衡回源和分流回源两种方式。0：默认值，负载均衡回源；1：分流回源 */
  UpstreamPolicy?: number;
  /** 分流回源时生效，分流回源的规则。 */
  UpstreamRules?: UpstreamRule[];
  /** 业务场景。0：默认值，表示常规业务场景 1：大模型业务场景 */
  UseCase?: number;
}

declare interface ModifySpartaProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserLevelRequest {
  /** 域名 */
  Domain: string;
  /** 防护规则等级 300=standard，400=extended */
  Level: number;
}

declare interface ModifyUserLevelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserSignatureClassRequest {
  /** 域名 */
  Domain?: string;
  /** 规则类型ID */
  TypeID?: string;
  /** 规则类型状态，0:关闭，1:开启 */
  Status?: number;
}

declare interface ModifyUserSignatureClassResponse {
  /** 规则类型ID */
  TypeID?: string;
  /** 规则类型状态，0：关闭，1：开启 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserSignatureRuleRequest {
  /** 域名 */
  Domain: string;
  /** 主类id */
  MainClassID?: string;
  /** 主类开关0=关闭，1=开启，2=只告警 */
  Status?: number;
  /** 下发修改的规则列表 */
  RuleID?: ReqUserRule[];
}

declare interface ModifyUserSignatureRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserSignatureRuleV2Request {
  /** 域名 */
  Domain: string;
  /** 主类id */
  MainClassID?: string;
  /** 主类开关0=关闭，1=开启，2=只告警 */
  Status?: number;
  /** 下发修改的规则列表 */
  RuleID?: ReqUserRule[];
}

declare interface ModifyUserSignatureRuleV2Response {
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

declare interface ModifyWebshellStatusRequest {
  /** 域名webshell状态 */
  Webshell: WebshellStatus;
}

declare interface ModifyWebshellStatusResponse {
  /** 成功的状态码，需要JSON解码后再使用，返回的格式是{"域名":"状态"}，成功的状态码为Success，其它的为失败的状态码（yunapi定义的错误码） */
  Success?: ResponseCode;
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

declare interface RefreshAccessCheckResultRequest {
  /** 域名 */
  Domain: string;
}

declare interface RefreshAccessCheckResultResponse {
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
  ColNames?: string[];
  /** 日志查询结果；当Analysis为True时，可能返回为null注意：此字段可能返回 null，表示取不到有效值 */
  Results?: AccessLogInfo[];
  /** 日志分析结果；当Analysis为False时，可能返回为null注意：此字段可能返回 null，表示取不到有效值 */
  AnalysisResults?: AccessLogItems[];
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

declare interface SwitchElasticModeRequest {
  /** 版本，只能是sparta-waf, clb-waf, cdn-waf */
  Edition: string;
  /** 0代表关闭，1代表打开 */
  Mode: number;
  /** 实例id */
  InstanceID?: string;
}

declare interface SwitchElasticModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateProtectionModesRequest {
  /** 域名 */
  Domain: string;
  /** 资源类型 */
  Edition: string;
  /** 大类规则ID */
  TypeIDs: string[];
  /** 0表示观察，1表示拦截 */
  Mode: number;
}

declare interface UpdateProtectionModesResponse {
  /** 操作结果 */
  CommonRsp?: CommonRspData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpsertCCAutoStatusRequest {
  /** 域名 */
  Domain: string;
  /** 状态值 */
  Value: number;
  /** 版本：clb-waf, spart-waf */
  Edition?: string;
}

declare interface UpsertCCAutoStatusResponse {
  /** 正常情况为null */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpsertCCRuleRequest {
  /** 域名 */
  Domain: string;
  /** 名称 */
  Name: string;
  /** 状态 */
  Status: number;
  /** 高级模式（是否使用Session检测），0表示不启用，1表示启用 */
  Advance: string;
  /** CC检测阈值 */
  Limit: string;
  /** CC检测周期 */
  Interval: string;
  /** 动作，20表示观察，21表示人机识别，22表示拦截，23表示精准拦截，26表示精准人机识别，27表示JS校验 */
  ActionType: string;
  /** 优先级 */
  Priority: number;
  /** 动作有效时间 */
  ValidTime: number;
  /** 检测Url */
  Url?: string;
  /** 匹配方法，0表示等于，1表示前缀匹配，2表示包含，3表示不等于，6表示后缀匹配，7表示不包含 */
  MatchFunc?: number;
  /** CC的匹配条件JSON序列化的字符串，示例：[{\"key\":\"Method\",\"args\":[\"=R0VU\"],\"match\":\"0\",\"encodeflag\":true}] Key可选值为 Method、Post、Referer、Cookie、User-Agent、CustomHeader match可选值为，当Key为Method的时候可选值为0（等于）、3（不等于）。 Key为Post的时候可选值为0（等于）、3（不等于），Key为Cookie的时候可选值为0（等于）、2（包含），3（不等于）、7（不包含）、 当Key为Referer的时候可选值为0（等于）、3（不等于）、1（前缀匹配）、6（后缀匹配）、2（包含）、7（不包含）、12（存在）、5（不存在）、4（内容为空）， 当Key为Cookie的时候可选值为0（等于）、3（不等于）、2（包含）、7（不包含）、12（存在）、5（不存在）、4（内容为空）， 当Key为User-Agent的时候可选值为0（等于）、3（不等于）、1（前缀匹配）、6（后缀匹配）、2（包含）、7（不包含）、12（存在）、5（不存在）、4（内容为空）， 当Key为CustomHeader的时候可选值为0（等于）、3（不等于）、2（包含）、7（不包含）、12（存在）、5（不存在）、4（内容为空）。 Key为IPLocation时，可选值为13（属于）、14（不属于）。args用来表示匹配内容，需要设置encodeflag为true，当Key为Post、Cookie、CustomHeader时，用等号=来分别串接Key和Value，并分别用Base64编码，类似YWJj=YWJj。当Key为Referer、User-Agent时，用等号=来串接Value，类似=YWJj。 */
  OptionsArr?: string;
  /** waf版本，sparta-waf或者clb-waf */
  Edition?: string;
  /** 操作类型 */
  Type?: number;
  /** 添加规则的来源事件id */
  EventId?: string;
  /** 规则需要启用的SessionID */
  SessionApplied?: number[];
  /** 规则ID，新增时填0 */
  RuleId?: number;
  /** 规则创建时间 */
  CreateTime?: number;
  /** url长度 */
  Length?: number;
  /** 限频方式 */
  LimitMethod?: string;
  /** cel表达式 */
  CelRule?: string;
  /** 配置方式的逻辑操作符，and或者or */
  LogicalOp?: string;
}

declare interface UpsertCCRuleResponse {
  /** 一般为null */
  Data?: string;
  /** 操作的RuleId */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpsertIpAccessControlRequest {
  /** 具体域名如：test.qcloudwaf.com全局域名为：global */
  Domain: string;
  /** IP 参数列表，json数组由IP，source，note，action，valid_ts组成。IP对应配置的IP地址，source固定为custom值，note为注释，action值42为黑名单，40为白名单，valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00）） */
  Items: string[];
  /** 实例Id */
  InstanceId?: string;
  /** WAF实例类型，sparta-waf表示SAAS型WAF，clb-waf表示负载均衡型WAF */
  Edition?: string;
  /** 可选值为：batch（批量添加）、bot、cc、custom（非批量添加时的默认值） */
  SourceType?: string;
}

declare interface UpsertIpAccessControlResponse {
  /** 添加或修改失败的条目 */
  FailedItems?: string;
  /** 添加或修改失败的数目 */
  FailedCount?: number;
  /** 添加或修改的IP数据Id列表 */
  Ids?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpsertSessionRequest {
  /** 域名 */
  Domain: string;
  /** session来源位置 */
  Source: string;
  /** 提取类别 */
  Category: string;
  /** 提取key或者起始匹配模式 */
  KeyOrStartMat: string;
  /** 结束匹配模式 */
  EndMat: string;
  /** 起始偏移位置 */
  StartOffset: string;
  /** 结束偏移位置 */
  EndOffset: string;
  /** 版本 */
  Edition?: string;
  /** Session名 */
  SessionName?: string;
  /** Session对应ID */
  SessionID?: number;
}

declare interface UpsertSessionResponse {
  /** 结果 */
  Data?: string;
  /** SessionID */
  SessionID?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Waf Web 应用防火墙} */
declare interface Waf {
  (): Versions;
  /** 添加防篡改url {@link AddAntiFakeUrlRequest} {@link AddAntiFakeUrlResponse} */
  AddAntiFakeUrl(data: AddAntiFakeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<AddAntiFakeUrlResponse>;
  /** 添加信息防泄漏规则 {@link AddAntiInfoLeakRulesRequest} {@link AddAntiInfoLeakRulesResponse} */
  AddAntiInfoLeakRules(data: AddAntiInfoLeakRulesRequest, config?: AxiosRequestConfig): AxiosPromise<AddAntiInfoLeakRulesResponse>;
  /** 添加封禁地域 {@link AddAreaBanAreasRequest} {@link AddAreaBanAreasResponse} */
  AddAreaBanAreas(data: AddAreaBanAreasRequest, config?: AxiosRequestConfig): AxiosPromise<AddAreaBanAreasResponse>;
  /** 增加规则引擎白名单 {@link AddAttackWhiteRuleRequest} {@link AddAttackWhiteRuleResponse} */
  AddAttackWhiteRule(data: AddAttackWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddAttackWhiteRuleResponse>;
  /** 新增自定义规则 {@link AddCustomRuleRequest} {@link AddCustomRuleResponse} */
  AddCustomRule(data: AddCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddCustomRuleResponse>;
  /** 添加精准白名单规则 {@link AddCustomWhiteRuleRequest} {@link AddCustomWhiteRuleResponse} */
  AddCustomWhiteRule(data: AddCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddCustomWhiteRuleResponse>;
  /** 增加域名规则白名单 {@link AddDomainWhiteRuleRequest} {@link AddDomainWhiteRuleResponse} */
  AddDomainWhiteRule(data?: AddDomainWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddDomainWhiteRuleResponse>;
  /** 添加SaaS型WAF防护域名 {@link AddSpartaProtectionRequest} {@link AddSpartaProtectionResponse} */
  AddSpartaProtection(data: AddSpartaProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<AddSpartaProtectionResponse>;
  /** 批量操作Tiga规则 {@link BatchOperateUserSignatureRulesRequest} {@link BatchOperateUserSignatureRulesResponse} */
  BatchOperateUserSignatureRules(data: BatchOperateUserSignatureRulesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchOperateUserSignatureRulesResponse>;
  /** 创建访问日志导出 {@link CreateAccessExportRequest} {@link CreateAccessExportResponse} */
  CreateAccessExport(data: CreateAccessExportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessExportResponse>;
  /** 添加地域封禁规则 {@link CreateAreaBanRuleRequest} {@link CreateAreaBanRuleResponse} */
  CreateAreaBanRule(data: CreateAreaBanRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAreaBanRuleResponse>;
  /** 计费实例创建订单 {@link CreateDealsRequest} {@link CreateDealsResponse} */
  CreateDeals(data: CreateDealsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDealsResponse>;
  /** 添加负载均衡型WAF防护域名 {@link CreateHostRequest} {@link CreateHostResponse} */
  CreateHost(data: CreateHostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHostResponse>;
  /** IP黑白名单新增接口 {@link CreateIpAccessControlRequest} {@link CreateIpAccessControlResponse} */
  CreateIpAccessControl(data: CreateIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIpAccessControlResponse>;
  /** 添加规则引擎白名单 {@link CreateOwaspWhiteRuleRequest} {@link CreateOwaspWhiteRuleResponse} */
  CreateOwaspWhiteRule(data: CreateOwaspWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOwaspWhiteRuleResponse>;
  /** 创建CKafka投递流任务 {@link CreatePostCKafkaFlowRequest} {@link CreatePostCKafkaFlowResponse} */
  CreatePostCKafkaFlow(data: CreatePostCKafkaFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePostCKafkaFlowResponse>;
  /** 创建CLS投递流任务 {@link CreatePostCLSFlowRequest} {@link CreatePostCLSFlowResponse} */
  CreatePostCLSFlow(data?: CreatePostCLSFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePostCLSFlowResponse>;
  /** 删除访问日志导出 {@link DeleteAccessExportRequest} {@link DeleteAccessExportResponse} */
  DeleteAccessExport(data: DeleteAccessExportRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccessExportResponse>;
  /** 删除防篡改url {@link DeleteAntiFakeUrlRequest} {@link DeleteAntiFakeUrlResponse} */
  DeleteAntiFakeUrl(data: DeleteAntiFakeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAntiFakeUrlResponse>;
  /** 信息防泄漏删除规则 {@link DeleteAntiInfoLeakRuleRequest} {@link DeleteAntiInfoLeakRuleResponse} */
  DeleteAntiInfoLeakRule(data: DeleteAntiInfoLeakRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAntiInfoLeakRuleResponse>;
  /** 删除攻击日志下载任务记录 {@link DeleteAttackDownloadRecordRequest} {@link DeleteAttackDownloadRecordResponse} */
  DeleteAttackDownloadRecord(data: DeleteAttackDownloadRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAttackDownloadRecordResponse>;
  /** 删除规则引擎白名单 {@link DeleteAttackWhiteRuleRequest} {@link DeleteAttackWhiteRuleResponse} */
  DeleteAttackWhiteRule(data: DeleteAttackWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAttackWhiteRuleResponse>;
  /** 场景化后删除Bot的UCB自定义规则 {@link DeleteBotSceneUCBRuleRequest} {@link DeleteBotSceneUCBRuleResponse} */
  DeleteBotSceneUCBRule(data: DeleteBotSceneUCBRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBotSceneUCBRuleResponse>;
  /** Waf CC V2 Delete接口 {@link DeleteCCRuleRequest} {@link DeleteCCRuleResponse} */
  DeleteCCRule(data: DeleteCCRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCCRuleResponse>;
  /** 删除自定义规则 {@link DeleteCustomRuleRequest} {@link DeleteCustomRuleResponse} */
  DeleteCustomRule(data: DeleteCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomRuleResponse>;
  /** 删除精准白名单规则 {@link DeleteCustomWhiteRuleRequest} {@link DeleteCustomWhiteRuleResponse} */
  DeleteCustomWhiteRule(data: DeleteCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomWhiteRuleResponse>;
  /** 删除域名规则白名单 {@link DeleteDomainWhiteRulesRequest} {@link DeleteDomainWhiteRulesResponse} */
  DeleteDomainWhiteRules(data?: DeleteDomainWhiteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainWhiteRulesResponse>;
  /** 删除负载均衡型WAF域名 {@link DeleteHostRequest} {@link DeleteHostResponse} */
  DeleteHost(data: DeleteHostRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHostResponse>;
  /** Waf IP黑白名单Delete接口 {@link DeleteIpAccessControlRequest} {@link DeleteIpAccessControlResponse} */
  DeleteIpAccessControl(data: DeleteIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIpAccessControlResponse>;
  /** IP黑白名单删除接口 {@link DeleteIpAccessControlV2Request} {@link DeleteIpAccessControlV2Response} */
  DeleteIpAccessControlV2(data: DeleteIpAccessControlV2Request, config?: AxiosRequestConfig): AxiosPromise<DeleteIpAccessControlV2Response>;
  /** 删除用户自定义规则状态 {@link DeleteOwaspRuleStatusRequest} {@link DeleteOwaspRuleStatusResponse} */
  DeleteOwaspRuleStatus(data: DeleteOwaspRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOwaspRuleStatusResponse>;
  /** 删除用户规则引擎白名单 {@link DeleteOwaspWhiteRuleRequest} {@link DeleteOwaspWhiteRuleResponse} */
  DeleteOwaspWhiteRule(data: DeleteOwaspWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOwaspWhiteRuleResponse>;
  /** 删除CC攻击的session设置 {@link DeleteSessionRequest} {@link DeleteSessionResponse} */
  DeleteSession(data: DeleteSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSessionResponse>;
  /** 删除SaaS型WAF防护域名 {@link DeleteSpartaProtectionRequest} {@link DeleteSpartaProtectionResponse} */
  DeleteSpartaProtection(data: DeleteSpartaProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSpartaProtectionResponse>;
  /** 获取访问日志导出列表 {@link DescribeAccessExportsRequest} {@link DescribeAccessExportsResponse} */
  DescribeAccessExports(data: DescribeAccessExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessExportsResponse>;
  /** 访问日志快速分析统计 {@link DescribeAccessFastAnalysisRequest} {@link DescribeAccessFastAnalysisResponse} */
  DescribeAccessFastAnalysis(data: DescribeAccessFastAnalysisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessFastAnalysisResponse>;
  /** 访问日志柱状趋势图 {@link DescribeAccessHistogramRequest} {@link DescribeAccessHistogramResponse} */
  DescribeAccessHistogram(data: DescribeAccessHistogramRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessHistogramResponse>;
  /** 获取访问日志索引配置信息 {@link DescribeAccessIndexRequest} {@link DescribeAccessIndexResponse} */
  DescribeAccessIndex(data?: DescribeAccessIndexRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessIndexResponse>;
  /** 获取防篡改信息 {@link DescribeAntiFakeRulesRequest} {@link DescribeAntiFakeRulesResponse} */
  DescribeAntiFakeRules(data: DescribeAntiFakeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAntiFakeRulesResponse>;
  /** 获取信息防泄漏规则列表 {@link DescribeAntiInfoLeakageRulesRequest} {@link DescribeAntiInfoLeakageRulesResponse} */
  DescribeAntiInfoLeakageRules(data: DescribeAntiInfoLeakageRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAntiInfoLeakageRulesResponse>;
  /** 获取Api请求详情信息 {@link DescribeApiDetailRequest} {@link DescribeApiDetailResponse} */
  DescribeApiDetail(data: DescribeApiDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiDetailResponse>;
  /** api资产列表 {@link DescribeApiListVersionTwoRequest} {@link DescribeApiListVersionTwoResponse} */
  DescribeApiListVersionTwo(data: DescribeApiListVersionTwoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiListVersionTwoResponse>;
  /** 获取地域封禁配置 {@link DescribeAreaBanAreasRequest} {@link DescribeAreaBanAreasResponse} */
  DescribeAreaBanAreas(data: DescribeAreaBanAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAreaBanAreasResponse>;
  /** 获取地域封禁规则 {@link DescribeAreaBanRuleRequest} {@link DescribeAreaBanRuleResponse} */
  DescribeAreaBanRule(data: DescribeAreaBanRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAreaBanRuleResponse>;
  /** 获取WAF地域封禁支持的地域列表 {@link DescribeAreaBanSupportAreasRequest} {@link DescribeAreaBanSupportAreasResponse} */
  DescribeAreaBanSupportAreas(data?: DescribeAreaBanSupportAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAreaBanSupportAreasResponse>;
  /** 攻击总览 {@link DescribeAttackOverviewRequest} {@link DescribeAttackOverviewResponse} */
  DescribeAttackOverview(data: DescribeAttackOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackOverviewResponse>;
  /** 查询TOP N攻击类型 {@link DescribeAttackTypeRequest} {@link DescribeAttackTypeResponse} */
  DescribeAttackType(data: DescribeAttackTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackTypeResponse>;
  /** 获取用户规则白名单列表 {@link DescribeAttackWhiteRuleRequest} {@link DescribeAttackWhiteRuleResponse} */
  DescribeAttackWhiteRule(data: DescribeAttackWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackWhiteRuleResponse>;
  /** 描述WAF自动封禁IP详情 {@link DescribeAutoDenyIPRequest} {@link DescribeAutoDenyIPResponse} */
  DescribeAutoDenyIP(data: DescribeAutoDenyIPRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoDenyIPResponse>;
  /** 批量防护IP黑白名单查询 {@link DescribeBatchIpAccessControlRequest} {@link DescribeBatchIpAccessControlResponse} */
  DescribeBatchIpAccessControl(data: DescribeBatchIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchIpAccessControlResponse>;
  /** 获取BOT场景列表与概览 {@link DescribeBotSceneListRequest} {@link DescribeBotSceneListResponse} */
  DescribeBotSceneList(data: DescribeBotSceneListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBotSceneListResponse>;
  /** 获取Bot场景全局概览 {@link DescribeBotSceneOverviewRequest} {@link DescribeBotSceneOverviewResponse} */
  DescribeBotSceneOverview(data: DescribeBotSceneOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBotSceneOverviewResponse>;
  /** 场景化后Bot获取UCB自定义规则策略 {@link DescribeBotSceneUCBRuleRequest} {@link DescribeBotSceneUCBRuleResponse} */
  DescribeBotSceneUCBRule(data: DescribeBotSceneUCBRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBotSceneUCBRuleResponse>;
  /** 获取SAAS型接入的紧急CC防护状态 {@link DescribeCCAutoStatusRequest} {@link DescribeCCAutoStatusResponse} */
  DescribeCCAutoStatus(data: DescribeCCAutoStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCAutoStatusResponse>;
  /** Waf CC V2 Query接口旧版 {@link DescribeCCRuleRequest} {@link DescribeCCRuleResponse} */
  DescribeCCRule(data: DescribeCCRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCRuleResponse>;
  /** 查询CC规则 {@link DescribeCCRuleListRequest} {@link DescribeCCRuleListResponse} */
  DescribeCCRuleList(data: DescribeCCRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCRuleListResponse>;
  /** 获取证书的检查结果 {@link DescribeCertificateVerifyResultRequest} {@link DescribeCertificateVerifyResultResponse} */
  DescribeCertificateVerifyResult(data: DescribeCertificateVerifyResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertificateVerifyResultResponse>;
  /** 查询加密套件信息 {@link DescribeCiphersDetailRequest} {@link DescribeCiphersDetailResponse} */
  DescribeCiphersDetail(data?: DescribeCiphersDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCiphersDetailResponse>;
  /** 查询访问控制规则 {@link DescribeCustomRuleListRequest} {@link DescribeCustomRuleListResponse} */
  DescribeCustomRuleList(data: DescribeCustomRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomRuleListResponse>;
  /** 查询精准白名单规则 {@link DescribeCustomWhiteRuleRequest} {@link DescribeCustomWhiteRuleResponse} */
  DescribeCustomWhiteRule(data: DescribeCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomWhiteRuleResponse>;
  /** 获取域名概况 {@link DescribeDomainCountInfoRequest} {@link DescribeDomainCountInfoResponse} */
  DescribeDomainCountInfo(data?: DescribeDomainCountInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainCountInfoResponse>;
  /** 获取负载均衡型WAF域名详情 {@link DescribeDomainDetailsClbRequest} {@link DescribeDomainDetailsClbResponse} */
  DescribeDomainDetailsClb(data: DescribeDomainDetailsClbRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainDetailsClbResponse>;
  /** 查询单个Saas型WAF域名详情 {@link DescribeDomainDetailsSaasRequest} {@link DescribeDomainDetailsSaasResponse} */
  DescribeDomainDetailsSaas(data: DescribeDomainDetailsSaasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainDetailsSaasResponse>;
  /** 拉取域名的防护规则列表 {@link DescribeDomainRulesRequest} {@link DescribeDomainRulesResponse} */
  DescribeDomainRules(data?: DescribeDomainRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainRulesResponse>;
  /** 获取添加域名操作的结果 {@link DescribeDomainVerifyResultRequest} {@link DescribeDomainVerifyResultResponse} */
  DescribeDomainVerifyResult(data: DescribeDomainVerifyResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainVerifyResultResponse>;
  /** 获取域名的规则白名单 {@link DescribeDomainWhiteRulesRequest} {@link DescribeDomainWhiteRulesResponse} */
  DescribeDomainWhiteRules(data: DescribeDomainWhiteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainWhiteRulesResponse>;
  /** 获取域名列表 {@link DescribeDomainsRequest} {@link DescribeDomainsResponse} */
  DescribeDomains(data: DescribeDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainsResponse>;
  /** 获取发现域名列表接口 {@link DescribeFindDomainListRequest} {@link DescribeFindDomainListResponse} */
  DescribeFindDomainList(data: DescribeFindDomainListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFindDomainListResponse>;
  /** 获取waf流量访问趋势 {@link DescribeFlowTrendRequest} {@link DescribeFlowTrendResponse} */
  DescribeFlowTrend(data: DescribeFlowTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowTrendResponse>;
  /** 查询多种聚类分析 {@link DescribeHistogramRequest} {@link DescribeHistogramResponse} */
  DescribeHistogram(data: DescribeHistogramRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHistogramResponse>;
  /** 获取防护域名详情 {@link DescribeHostRequest} {@link DescribeHostResponse} */
  DescribeHost(data: DescribeHostRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostResponse>;
  /** 验证添加的域名是否已经存在 {@link DescribeHostLimitRequest} {@link DescribeHostLimitResponse} */
  DescribeHostLimit(data: DescribeHostLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostLimitResponse>;
  /** 获取防护域名列表 {@link DescribeHostsRequest} {@link DescribeHostsResponse} */
  DescribeHosts(data?: DescribeHostsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostsResponse>;
  /** 查询用户所有实例的详细信息 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** IP黑白名单查询 {@link DescribeIpAccessControlRequest} {@link DescribeIpAccessControlResponse} */
  DescribeIpAccessControl(data: DescribeIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpAccessControlResponse>;
  /** Waf IP封堵状态查询 {@link DescribeIpHitItemsRequest} {@link DescribeIpHitItemsResponse} */
  DescribeIpHitItems(data: DescribeIpHitItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpHitItemsResponse>;
  /** 查询waf各个模块接口的开关状态 {@link DescribeModuleStatusRequest} {@link DescribeModuleStatusResponse} */
  DescribeModuleStatus(data: DescribeModuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModuleStatusResponse>;
  /** 查看防护对象列表 {@link DescribeObjectsRequest} {@link DescribeObjectsResponse} */
  DescribeObjects(data?: DescribeObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeObjectsResponse>;
  /** 查询规则引擎规则类型列表 {@link DescribeOwaspRuleTypesRequest} {@link DescribeOwaspRuleTypesResponse} */
  DescribeOwaspRuleTypes(data: DescribeOwaspRuleTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOwaspRuleTypesResponse>;
  /** 查询规则引擎的规则列表 {@link DescribeOwaspRulesRequest} {@link DescribeOwaspRulesResponse} */
  DescribeOwaspRules(data: DescribeOwaspRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOwaspRulesResponse>;
  /** 获取用户规则引擎白名单 {@link DescribeOwaspWhiteRulesRequest} {@link DescribeOwaspWhiteRulesResponse} */
  DescribeOwaspWhiteRules(data: DescribeOwaspWhiteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOwaspWhiteRulesResponse>;
  /** 查询业务和攻击概要趋势 {@link DescribePeakPointsRequest} {@link DescribePeakPointsResponse} */
  DescribePeakPoints(data: DescribePeakPointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePeakPointsResponse>;
  /** 获取业务和攻击概览峰值 {@link DescribePeakValueRequest} {@link DescribePeakValueResponse} */
  DescribePeakValue(data: DescribePeakValueRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePeakValueResponse>;
  /** 获取防护状态以及生效的实例id {@link DescribePolicyStatusRequest} {@link DescribePolicyStatusResponse} */
  DescribePolicyStatus(data: DescribePolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyStatusResponse>;
  /** 获取Saas型WAF防护端口列表 {@link DescribePortsRequest} {@link DescribePortsResponse} */
  DescribePorts(data?: DescribePortsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePortsResponse>;
  /** 获取CKafka投递流任务列表 {@link DescribePostCKafkaFlowsRequest} {@link DescribePostCKafkaFlowsResponse} */
  DescribePostCKafkaFlows(data?: DescribePostCKafkaFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePostCKafkaFlowsResponse>;
  /** 获取CLS投递流任务列表 {@link DescribePostCLSFlowsRequest} {@link DescribePostCLSFlowsResponse} */
  DescribePostCLSFlows(data?: DescribePostCLSFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePostCLSFlowsResponse>;
  /** 查询tiga引擎下大类规则的防护模式 {@link DescribeProtectionModesRequest} {@link DescribeProtectionModesResponse} */
  DescribeProtectionModes(data: DescribeProtectionModesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProtectionModesResponse>;
  /** 获取规格限制 {@link DescribeRuleLimitRequest} {@link DescribeRuleLimitResponse} */
  DescribeRuleLimit(data: DescribeRuleLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleLimitResponse>;
  /** DescribeScanIp {@link DescribeScanIpRequest} {@link DescribeScanIpResponse} */
  DescribeScanIp(data: DescribeScanIpRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanIpResponse>;
  /** Waf 会话定义查询接口 {@link DescribeSessionRequest} {@link DescribeSessionResponse} */
  DescribeSession(data: DescribeSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSessionResponse>;
  /** waf斯巴达-获取防护域名信息 {@link DescribeSpartaProtectionInfoRequest} {@link DescribeSpartaProtectionInfoResponse} */
  DescribeSpartaProtectionInfo(data: DescribeSpartaProtectionInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpartaProtectionInfoResponse>;
  /** 查询SaaS型WAF支持的TLS版本 {@link DescribeTlsVersionRequest} {@link DescribeTlsVersionResponse} */
  DescribeTlsVersion(data?: DescribeTlsVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTlsVersionResponse>;
  /** 查询Top5的攻击域名 {@link DescribeTopAttackDomainRequest} {@link DescribeTopAttackDomainResponse} */
  DescribeTopAttackDomain(data: DescribeTopAttackDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopAttackDomainResponse>;
  /** 获取CDC场景下对客户已经开放的负载均衡型WAF(cdc-clb-waf)的地域 {@link DescribeUserCdcClbWafRegionsRequest} {@link DescribeUserCdcClbWafRegionsResponse} */
  DescribeUserCdcClbWafRegions(data?: DescribeUserCdcClbWafRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserCdcClbWafRegionsResponse>;
  /** 获取对客户已经开放的负载均衡型WAF(clb-waf)的地域 {@link DescribeUserClbWafRegionsRequest} {@link DescribeUserClbWafRegionsResponse} */
  DescribeUserClbWafRegions(data?: DescribeUserClbWafRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserClbWafRegionsResponse>;
  /** 查询saas和clb的域名信息 {@link DescribeUserDomainInfoRequest} {@link DescribeUserDomainInfoResponse} */
  DescribeUserDomainInfo(data?: DescribeUserDomainInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserDomainInfoResponse>;
  /** 获取用户防护规则等级 {@link DescribeUserLevelRequest} {@link DescribeUserLevelResponse} */
  DescribeUserLevel(data: DescribeUserLevelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserLevelResponse>;
  /** 查询Tiga引擎规则类型及状态 {@link DescribeUserSignatureClassRequest} {@link DescribeUserSignatureClassResponse} */
  DescribeUserSignatureClass(data: DescribeUserSignatureClassRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserSignatureClassResponse>;
  /** 获取用户特征规则列表 {@link DescribeUserSignatureRuleRequest} {@link DescribeUserSignatureRuleResponse} */
  DescribeUserSignatureRule(data: DescribeUserSignatureRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserSignatureRuleResponse>;
  /** 获取用户特征规则列表V2 {@link DescribeUserSignatureRuleV2Request} {@link DescribeUserSignatureRuleV2Response} */
  DescribeUserSignatureRuleV2(data: DescribeUserSignatureRuleV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeUserSignatureRuleV2Response>;
  /** 查询VIP信息 {@link DescribeVipInfoRequest} {@link DescribeVipInfoResponse} */
  DescribeVipInfo(data: DescribeVipInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVipInfoResponse>;
  /** 查询ip惩罚规则 {@link DescribeWafAutoDenyRulesRequest} {@link DescribeWafAutoDenyRulesResponse} */
  DescribeWafAutoDenyRules(data: DescribeWafAutoDenyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafAutoDenyRulesResponse>;
  /** @deprecated 描述WAF自动封禁模块详情 {@link DescribeWafAutoDenyStatusRequest} {@link DescribeWafAutoDenyStatusResponse} */
  DescribeWafAutoDenyStatus(data?: DescribeWafAutoDenyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafAutoDenyStatusResponse>;
  /** 描述WAF威胁情报封禁模块配置详情 {@link DescribeWafThreatenIntelligenceRequest} {@link DescribeWafThreatenIntelligenceResponse} */
  DescribeWafThreatenIntelligence(data?: DescribeWafThreatenIntelligenceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafThreatenIntelligenceResponse>;
  /** 获取域名webshell状态 {@link DescribeWebshellStatusRequest} {@link DescribeWebshellStatusResponse} */
  DescribeWebshellStatus(data: DescribeWebshellStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebshellStatusResponse>;
  /** 销毁CKafka投递流任务 {@link DestroyPostCKafkaFlowRequest} {@link DestroyPostCKafkaFlowResponse} */
  DestroyPostCKafkaFlow(data: DestroyPostCKafkaFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyPostCKafkaFlowResponse>;
  /** 销毁CLS投递流任务 {@link DestroyPostCLSFlowRequest} {@link DestroyPostCLSFlowResponse} */
  DestroyPostCLSFlow(data: DestroyPostCLSFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyPostCLSFlowResponse>;
  /** 刷新防篡改url {@link FreshAntiFakeUrlRequest} {@link FreshAntiFakeUrlResponse} */
  FreshAntiFakeUrl(data: FreshAntiFakeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<FreshAntiFakeUrlResponse>;
  /** 计费资源购买、续费下单接口 {@link GenerateDealsAndPayNewRequest} {@link GenerateDealsAndPayNewResponse} */
  GenerateDealsAndPayNew(data: GenerateDealsAndPayNewRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateDealsAndPayNewResponse>;
  /** 查询下载攻击日志任务记录列表 {@link GetAttackDownloadRecordsRequest} {@link GetAttackDownloadRecordsResponse} */
  GetAttackDownloadRecords(data?: GetAttackDownloadRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<GetAttackDownloadRecordsResponse>;
  /** 攻击日志统计 {@link GetAttackHistogramRequest} {@link GetAttackHistogramResponse} */
  GetAttackHistogram(data: GetAttackHistogramRequest, config?: AxiosRequestConfig): AxiosPromise<GetAttackHistogramResponse>;
  /** 攻击总次数 {@link GetAttackTotalCountRequest} {@link GetAttackTotalCountResponse} */
  GetAttackTotalCount(data: GetAttackTotalCountRequest, config?: AxiosRequestConfig): AxiosPromise<GetAttackTotalCountResponse>;
  /** 获取套餐实例的弹性qps上限 {@link GetInstanceQpsLimitRequest} {@link GetInstanceQpsLimitResponse} */
  GetInstanceQpsLimit(data: GetInstanceQpsLimitRequest, config?: AxiosRequestConfig): AxiosPromise<GetInstanceQpsLimitResponse>;
  /** 导入IP黑白名单 {@link ImportIpAccessControlRequest} {@link ImportIpAccessControlResponse} */
  ImportIpAccessControl(data: ImportIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<ImportIpAccessControlResponse>;
  /** 编辑防篡改url {@link ModifyAntiFakeUrlRequest} {@link ModifyAntiFakeUrlResponse} */
  ModifyAntiFakeUrl(data: ModifyAntiFakeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAntiFakeUrlResponse>;
  /** 切换防篡改开关 {@link ModifyAntiFakeUrlStatusRequest} {@link ModifyAntiFakeUrlStatusResponse} */
  ModifyAntiFakeUrlStatus(data: ModifyAntiFakeUrlStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAntiFakeUrlStatusResponse>;
  /** 信息防泄漏切换规则开关 {@link ModifyAntiInfoLeakRuleStatusRequest} {@link ModifyAntiInfoLeakRuleStatusResponse} */
  ModifyAntiInfoLeakRuleStatus(data: ModifyAntiInfoLeakRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAntiInfoLeakRuleStatusResponse>;
  /** 编辑信息防泄漏规则 {@link ModifyAntiInfoLeakRulesRequest} {@link ModifyAntiInfoLeakRulesResponse} */
  ModifyAntiInfoLeakRules(data: ModifyAntiInfoLeakRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAntiInfoLeakRulesResponse>;
  /** api分析页面开关 {@link ModifyApiAnalyzeStatusRequest} {@link ModifyApiAnalyzeStatusResponse} */
  ModifyApiAnalyzeStatus(data: ModifyApiAnalyzeStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApiAnalyzeStatusResponse>;
  /** api安全状态变更接口 {@link ModifyApiSecEventChangeRequest} {@link ModifyApiSecEventChangeResponse} */
  ModifyApiSecEventChange(data?: ModifyApiSecEventChangeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApiSecEventChangeResponse>;
  /** 修改地域封禁中地域信息 {@link ModifyAreaBanAreasRequest} {@link ModifyAreaBanAreasResponse} */
  ModifyAreaBanAreas(data: ModifyAreaBanAreasRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAreaBanAreasResponse>;
  /** 编辑地域封禁规则 {@link ModifyAreaBanRuleRequest} {@link ModifyAreaBanRuleResponse} */
  ModifyAreaBanRule(data: ModifyAreaBanRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAreaBanRuleResponse>;
  /** 修改地域封禁状态 {@link ModifyAreaBanStatusRequest} {@link ModifyAreaBanStatusResponse} */
  ModifyAreaBanStatus(data: ModifyAreaBanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAreaBanStatusResponse>;
  /** 修改规则引擎白名单 {@link ModifyAttackWhiteRuleRequest} {@link ModifyAttackWhiteRuleResponse} */
  ModifyAttackWhiteRule(data: ModifyAttackWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAttackWhiteRuleResponse>;
  /** bot子场景开关 {@link ModifyBotSceneStatusRequest} {@link ModifyBotSceneStatusResponse} */
  ModifyBotSceneStatus(data: ModifyBotSceneStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBotSceneStatusResponse>;
  /** 场景化后更新Bot的UCB自定义规则 {@link ModifyBotSceneUCBRuleRequest} {@link ModifyBotSceneUCBRuleResponse} */
  ModifyBotSceneUCBRule(data: ModifyBotSceneUCBRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBotSceneUCBRuleResponse>;
  /** Bot_V2 bot总开关更新 {@link ModifyBotStatusRequest} {@link ModifyBotStatusResponse} */
  ModifyBotStatus(data: ModifyBotStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBotStatusResponse>;
  /** 编辑自定义规则 {@link ModifyCustomRuleRequest} {@link ModifyCustomRuleResponse} */
  ModifyCustomRule(data: ModifyCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomRuleResponse>;
  /** 开启或禁用访问控制（自定义策略） {@link ModifyCustomRuleStatusRequest} {@link ModifyCustomRuleStatusResponse} */
  ModifyCustomRuleStatus(data: ModifyCustomRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomRuleStatusResponse>;
  /** 编辑精准白名单 {@link ModifyCustomWhiteRuleRequest} {@link ModifyCustomWhiteRuleResponse} */
  ModifyCustomWhiteRule(data: ModifyCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomWhiteRuleResponse>;
  /** 开启或禁用精准白名单 {@link ModifyCustomWhiteRuleStatusRequest} {@link ModifyCustomWhiteRuleStatusResponse} */
  ModifyCustomWhiteRuleStatus(data: ModifyCustomWhiteRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomWhiteRuleStatusResponse>;
  /** 切换ipv6开关 {@link ModifyDomainIpv6StatusRequest} {@link ModifyDomainIpv6StatusResponse} */
  ModifyDomainIpv6Status(data: ModifyDomainIpv6StatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainIpv6StatusResponse>;
  /** 修改域名投递状态 {@link ModifyDomainPostActionRequest} {@link ModifyDomainPostActionResponse} */
  ModifyDomainPostAction(data: ModifyDomainPostActionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainPostActionResponse>;
  /** 更改某一条规则 {@link ModifyDomainWhiteRuleRequest} {@link ModifyDomainWhiteRuleResponse} */
  ModifyDomainWhiteRule(data?: ModifyDomainWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainWhiteRuleResponse>;
  /** 修改域名列表的访问日志开关 {@link ModifyDomainsCLSStatusRequest} {@link ModifyDomainsCLSStatusResponse} */
  ModifyDomainsCLSStatus(data: ModifyDomainsCLSStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDomainsCLSStatusResponse>;
  /** 计费下单接口 {@link ModifyGenerateDealsRequest} {@link ModifyGenerateDealsResponse} */
  ModifyGenerateDeals(data: ModifyGenerateDealsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGenerateDealsResponse>;
  /** 编辑负载均衡型WAF防护域名 {@link ModifyHostRequest} {@link ModifyHostResponse} */
  ModifyHost(data: ModifyHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHostResponse>;
  /** 编辑负载均衡型WAF防护域名的流量模式 {@link ModifyHostFlowModeRequest} {@link ModifyHostFlowModeResponse} */
  ModifyHostFlowMode(data: ModifyHostFlowModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHostFlowModeResponse>;
  /** 设置防护域名防护状态 {@link ModifyHostModeRequest} {@link ModifyHostModeResponse} */
  ModifyHostMode(data: ModifyHostModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHostModeResponse>;
  /** 设置防护域名WAF开关 {@link ModifyHostStatusRequest} {@link ModifyHostStatusResponse} */
  ModifyHostStatus(data: ModifyHostStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHostStatusResponse>;
  /** 修改实例攻击日志投递开关 {@link ModifyInstanceAttackLogPostRequest} {@link ModifyInstanceAttackLogPostResponse} */
  ModifyInstanceAttackLogPost(data: ModifyInstanceAttackLogPostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceAttackLogPostResponse>;
  /** 修改实例的QPS弹性计费开关 {@link ModifyInstanceElasticModeRequest} {@link ModifyInstanceElasticModeResponse} */
  ModifyInstanceElasticMode(data: ModifyInstanceElasticModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceElasticModeResponse>;
  /** 修改实例名称 {@link ModifyInstanceNameRequest} {@link ModifyInstanceNameResponse} */
  ModifyInstanceName(data: ModifyInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNameResponse>;
  /** 设置套餐实例的弹性qps上限 {@link ModifyInstanceQpsLimitRequest} {@link ModifyInstanceQpsLimitResponse} */
  ModifyInstanceQpsLimit(data: ModifyInstanceQpsLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceQpsLimitResponse>;
  /** 修改实例的自动续费开关 {@link ModifyInstanceRenewFlagRequest} {@link ModifyInstanceRenewFlagResponse} */
  ModifyInstanceRenewFlag(data: ModifyInstanceRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceRenewFlagResponse>;
  /** IP黑白名单编辑接口 {@link ModifyIpAccessControlRequest} {@link ModifyIpAccessControlResponse} */
  ModifyIpAccessControl(data: ModifyIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIpAccessControlResponse>;
  /** 设置某个domain下基础安全模块的开关 {@link ModifyModuleStatusRequest} {@link ModifyModuleStatusResponse} */
  ModifyModuleStatus(data: ModifyModuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModuleStatusResponse>;
  /** 修改防护对象 {@link ModifyObjectRequest} {@link ModifyObjectResponse} */
  ModifyObject(data: ModifyObjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyObjectResponse>;
  /** 更新规则的开关 {@link ModifyOwaspRuleStatusRequest} {@link ModifyOwaspRuleStatusResponse} */
  ModifyOwaspRuleStatus(data: ModifyOwaspRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOwaspRuleStatusResponse>;
  /** 更新规则类型的防护模式 {@link ModifyOwaspRuleTypeActionRequest} {@link ModifyOwaspRuleTypeActionResponse} */
  ModifyOwaspRuleTypeAction(data: ModifyOwaspRuleTypeActionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOwaspRuleTypeActionResponse>;
  /** 更新规则类型的防护等级 {@link ModifyOwaspRuleTypeLevelRequest} {@link ModifyOwaspRuleTypeLevelResponse} */
  ModifyOwaspRuleTypeLevel(data: ModifyOwaspRuleTypeLevelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOwaspRuleTypeLevelResponse>;
  /** 更新规则类型的开关 {@link ModifyOwaspRuleTypeStatusRequest} {@link ModifyOwaspRuleTypeStatusResponse} */
  ModifyOwaspRuleTypeStatus(data: ModifyOwaspRuleTypeStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOwaspRuleTypeStatusResponse>;
  /** 编辑规则引擎白名单 {@link ModifyOwaspWhiteRuleRequest} {@link ModifyOwaspWhiteRuleResponse} */
  ModifyOwaspWhiteRule(data: ModifyOwaspWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOwaspWhiteRuleResponse>;
  /** 开启、关闭WAF开关 {@link ModifyProtectionStatusRequest} {@link ModifyProtectionStatusResponse} */
  ModifyProtectionStatus(data: ModifyProtectionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProtectionStatusResponse>;
  /** 编辑SaaS型WAF域名 {@link ModifySpartaProtectionRequest} {@link ModifySpartaProtectionResponse} */
  ModifySpartaProtection(data: ModifySpartaProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySpartaProtectionResponse>;
  /** 设置waf防护状态 {@link ModifySpartaProtectionModeRequest} {@link ModifySpartaProtectionModeResponse} */
  ModifySpartaProtectionMode(data: ModifySpartaProtectionModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySpartaProtectionModeResponse>;
  /** 修改用户防护规则等级 {@link ModifyUserLevelRequest} {@link ModifyUserLevelResponse} */
  ModifyUserLevel(data: ModifyUserLevelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserLevelResponse>;
  /** 切换规则类型生效开关 {@link ModifyUserSignatureClassRequest} {@link ModifyUserSignatureClassResponse} */
  ModifyUserSignatureClass(data?: ModifyUserSignatureClassRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserSignatureClassResponse>;
  /** 修改用户防护规则 {@link ModifyUserSignatureRuleRequest} {@link ModifyUserSignatureRuleResponse} */
  ModifyUserSignatureRule(data: ModifyUserSignatureRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserSignatureRuleResponse>;
  /** 修改用户防护规则V2 {@link ModifyUserSignatureRuleV2Request} {@link ModifyUserSignatureRuleV2Response} */
  ModifyUserSignatureRuleV2(data: ModifyUserSignatureRuleV2Request, config?: AxiosRequestConfig): AxiosPromise<ModifyUserSignatureRuleV2Response>;
  /** 修改ip惩罚规则 {@link ModifyWafAutoDenyRulesRequest} {@link ModifyWafAutoDenyRulesResponse} */
  ModifyWafAutoDenyRules(data: ModifyWafAutoDenyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWafAutoDenyRulesResponse>;
  /** 配置WAF威胁情报封禁模块详情 {@link ModifyWafThreatenIntelligenceRequest} {@link ModifyWafThreatenIntelligenceResponse} */
  ModifyWafThreatenIntelligence(data?: ModifyWafThreatenIntelligenceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWafThreatenIntelligenceResponse>;
  /** 设置webshell状态 {@link ModifyWebshellStatusRequest} {@link ModifyWebshellStatusResponse} */
  ModifyWebshellStatus(data: ModifyWebshellStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWebshellStatusResponse>;
  /** 创建搜索下载攻击日志任务 {@link PostAttackDownloadTaskRequest} {@link PostAttackDownloadTaskResponse} */
  PostAttackDownloadTask(data: PostAttackDownloadTaskRequest, config?: AxiosRequestConfig): AxiosPromise<PostAttackDownloadTaskResponse>;
  /** 刷新接入检查的结果 {@link RefreshAccessCheckResultRequest} {@link RefreshAccessCheckResultResponse} */
  RefreshAccessCheckResult(data: RefreshAccessCheckResultRequest, config?: AxiosRequestConfig): AxiosPromise<RefreshAccessCheckResultResponse>;
  /** 搜索访问日志 {@link SearchAccessLogRequest} {@link SearchAccessLogResponse} */
  SearchAccessLog(data: SearchAccessLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchAccessLogResponse>;
  /** 搜索CLS新版本攻击日志 {@link SearchAttackLogRequest} {@link SearchAttackLogResponse} */
  SearchAttackLog(data: SearchAttackLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchAttackLogResponse>;
  /** 切换域名的规则开关 {@link SwitchDomainRulesRequest} {@link SwitchDomainRulesResponse} */
  SwitchDomainRules(data?: SwitchDomainRulesRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchDomainRulesResponse>;
  /** 切换弹性QPS的开关 {@link SwitchElasticModeRequest} {@link SwitchElasticModeResponse} */
  SwitchElasticMode(data: SwitchElasticModeRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchElasticModeResponse>;
  /** 批量更新规则防护模式 {@link UpdateProtectionModesRequest} {@link UpdateProtectionModesResponse} */
  UpdateProtectionModes(data: UpdateProtectionModesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateProtectionModesResponse>;
  /** 编辑SAAS型接入的紧急CC防护状态 {@link UpsertCCAutoStatusRequest} {@link UpsertCCAutoStatusResponse} */
  UpsertCCAutoStatus(data: UpsertCCAutoStatusRequest, config?: AxiosRequestConfig): AxiosPromise<UpsertCCAutoStatusResponse>;
  /** Waf CC V2 Upsert接口 {@link UpsertCCRuleRequest} {@link UpsertCCRuleResponse} */
  UpsertCCRule(data: UpsertCCRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpsertCCRuleResponse>;
  /** Waf IP黑白名单Upsert接口 {@link UpsertIpAccessControlRequest} {@link UpsertIpAccessControlResponse} */
  UpsertIpAccessControl(data: UpsertIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<UpsertIpAccessControlResponse>;
  /** Waf 会话定义 Upsert接口 {@link UpsertSessionRequest} {@link UpsertSessionResponse} */
  UpsertSession(data: UpsertSessionRequest, config?: AxiosRequestConfig): AxiosPromise<UpsertSessionResponse>;
}

export declare type Versions = ["2018-01-25"];

export default Waf;
