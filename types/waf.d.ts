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
  /** 时间，单位ms */
  BeginTime?: number;
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

/** API安全资源信息 */
declare interface ApiPkg {
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
  /** 计费项 */
  BillingItem?: string | null;
  /** api安全7天试用标识。1试用。0没试用 */
  IsAPISecurityTrial?: number | null;
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

/** 多域名黑白名单describe返回 */
declare interface BatchIpAccessControlData {
  /** 总数 */
  TotalCount: number;
  /** 黑白名单条目 */
  Res: BatchIpAccessControlItem[];
}

/** 批量多域名黑白名单列表Ip */
declare interface BatchIpAccessControlItem {
  /** mongo表自增Id */
  Id?: string | null;
  /** 黑名单42或白名单40 */
  ActionType?: number;
  /** 黑白名单的IP */
  Ip?: string;
  /** 备注 */
  Note?: string;
  /** 添加路径 */
  Source?: string;
  /** 修改时间 */
  TsVersion?: number;
  /** 超时时间 */
  ValidTs?: number;
  /** 域名列表 */
  Hosts?: string[];
  /** 55101145 */
  RuleId?: number | null;
  /** IP列表 */
  IpList?: string[] | null;
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
  /** 购买页bot6折 */
  BotCPWaf?: number | null;
  /** 控制台买bot5折 */
  BotNPWaf?: number | null;
  /** 7天bot试用标识 1 试用 0 没有试用 */
  IsBotTrial?: number | null;
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
  RenewFlag: number | null;
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

/** 数据封装 */
declare interface CCRuleData {
  /** cc规则 */
  Res: CCRuleItem[];
  /** 规则数目 */
  TotalCount: number;
}

/** cc规则 */
declare interface CCRuleItem {
  /** 动作 */
  ActionType: number;
  /** 高级模式 */
  Advance: number;
  /** 时间周期 */
  Interval: number;
  /** 限制次数 */
  Limit: number;
  /** 匹配方法 */
  MatchFunc: number;
  /** 名称 */
  Name: string;
  /** 优先级 */
  Priority: number;
  /** 状态 */
  Status: number;
  /** 更新时间戳 */
  TsVersion: number;
  /** 匹配url */
  Url: string;
  /** 策略动作有效时间 */
  ValidTime: number;
  /** 高级参数 */
  OptionsArr: string | null;
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
  /** 动作 */
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
  EventId?: string | null;
  /** 关联的Session规则 */
  SessionApplied?: number[] | null;
}

/** CC规则总览 */
declare interface CCRuleLists {
  /** 总数 */
  TotalCount: number;
  /** 规则 */
  Res: CCRuleItems[] | null;
}

/** 防篡改url元素 */
declare interface CacheUrlItem {
  /** Id */
  Id: string;
  /** 名称 */
  Name: string;
  /** 域名 */
  Domain: string;
  /** uri */
  Uri: string;
  /** 协议 */
  Protocol: string;
  /** 状态 */
  Status: string;
}

/** 防篡改url元素 */
declare interface CacheUrlItems {
  /** 标识 */
  Id: number;
  /** 名字 */
  Name: string;
  /** 域名 */
  Domain: string;
  /** 网址 */
  Uri: string;
  /** 协议 */
  Protocol: string;
  /** 状态 */
  Status: number;
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
  State?: number | null;
  /** 负载均衡类型，clb或者apisix */
  AlbType?: string | null;
  /** IsCdn=3时，表示自定义header */
  IpHeaders?: string[] | null;
  /** cdc-clb-waf类型WAF的CDC集群信息 */
  CdcClusters?: string | null;
  /** 云类型:public:公有云；private:私有云;hybrid:混合云 */
  CloudType?: string | null;
  /** 域名备注信息 */
  Note?: string | null;
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
  Type?: string | null;
  /** 对象地域 */
  Region?: string | null;
}

/** Clb-waf地域信息 */
declare interface ClbWafRegionItem {
  /** 地域ID */
  Id?: string | null;
  /** 地域中文说明 */
  Text?: string | null;
  /** 地域英文全拼 */
  Value?: string | null;
  /** 地域编码 */
  Code?: string | null;
}

/** 计费下单接口出入参Goods */
declare interface CreateDealsGoods {
  /** 商品数量 */
  GoodsNum: number;
  /** 商品明细 */
  GoodsDetail: CreateDealsGoodsDetail;
  /** 订单类型ID，用来唯一标识一个业务的一种场景（总共三种场景：新购、配置变更、续费）高级版: 102375(新购),102376(续费),102377(变配)企业版 : 102378(新购),102379(续费),102380(变配)旗舰版 : 102369(新购),102370(续费),102371(变配)域名包 : 102372(新购),102373(续费),102374(变配)业务扩展包 : 101040(新购),101041(续费),101042(变配)高级版-CLB: 新购 101198 续费 101199 变配 101200企业版-CLB 101204(新购),101205(续费),101206(变配)旗舰版-CLB : 101201(新购),101202(续费),101203(变配)域名包-CLB: 101207(新购),101208(续费),101209(变配)业务扩展包-CLB: 101210(新购),101211(续费),101212(变配) */
  GoodsCategoryId?: number | null;
  /** 购买waf实例区域ID1 表示购买大陆资源;9表示购买非中国大陆资源 */
  RegionId?: number | null;
}

/** 产品明细 */
declare interface CreateDealsGoodsDetail {
  /** 时间间隔 */
  TimeSpan?: number | null;
  /** 单位，支持购买d、m、y 即（日、月、年） */
  TimeUnit?: string | null;
  /** 子产品标签,。新购，续费必传，变配时放在oldConfig newConfig里面Saas 高级版 ：sp_wsm_waf_premiumSaas企业版 ：sp_wsm_waf_enterpriseSaas旗舰版 ：sp_wsm_waf_ultimateSaas 业务扩展包：sp_wsm_waf_qpsepSaas 域名扩展包：sp_wsm_waf_domain高级版-CLB:sp_wsm_waf_premium_clb企业版-CLB : sp_wsm_waf_enterprise_clb旗舰版-CLB:sp_wsm_waf_ultimate_clb 业务扩展包-CLB：sp_wsm_waf_qpsep_clb域名扩展包-CLB：sp_wsm_waf_domain_clb */
  SubProductCode?: string | null;
  /** 业务产品申请的pid（对应一个定价公式），通过pid计费查询到定价模型高级版 ：1000827企业版 ：1000830旗舰版 ：1000832域名包 : 1000834业务扩展包 : 1000481高级版-CLB:1001150企业版-CLB : 1001152旗舰版-CLB:1001154域名包-CLB: 1001156业务扩展包-CLB : 1001160 */
  Pid?: number | null;
  /** waf实例名 */
  InstanceName?: string | null;
  /** 1:自动续费，0:不自动续费 */
  AutoRenewFlag?: number | null;
  /** waf购买的实际地域信息 */
  RealRegion?: number | null;
  /** 计费细项标签数组Saas 高级版 sv_wsm_waf_package_premium Saas 企业版 sv_wsm_waf_package_enterpriseSaas 旗舰版 sv_wsm_waf_package_ultimate Saas 非中国大陆高级版 sv_wsm_waf_package_premium_intlSaas 非中国大陆企业版 sv_wsm_waf_package_enterprise_intlSaas 非中国大陆旗舰版 sv_wsm_waf_package_ultimate _intlSaas 业务扩展包 sv_wsm_waf_qps_epSaas 域名扩展包 sv_wsm_waf_domain高级版CLB sv_wsm_waf_package_premium_clb企业版CLB sv_wsm_waf_package_enterprise_clb旗舰版CLB sv_wsm_waf_package_ultimate_clb非中国大陆高级版 CLB sv_wsm_waf_package_premium_clb_intl非中国大陆企业版CLB sv_wsm_waf_package_premium_clb_intl非中国大陆旗舰版CLB sv_wsm_waf_package_ultimate_clb _intl业务扩展包CLB sv_wsm_waf_qps_ep_clb域名扩展包CLB sv_wsm_waf_domain_clb */
  LabelTypes?: string[] | null;
  /** 计费细项标签数量，一般和SvLabelType一一对应 */
  LabelCounts?: number[] | null;
  /** 变配使用，实例到期时间 */
  CurDeadline?: string | null;
  /** 对存在的实例购买bot 或api 安全 */
  InstanceId?: string | null;
  /** 资源id */
  ResourceId?: string | null;
}

/** 计费下单响应实体 */
declare interface DealData {
  /** 订单号列表，元素个数与请求包的goods数组的元素个数一致，商品详情与订单按顺序对应 */
  DealNames?: string[];
  /** 大订单号，一个大订单号下可以有多个子订单，说明是同一次下单[{},{}] */
  BigDealId?: string;
}

/** DescribeAntiInfoLeakRules返回的规则列表元素 */
declare interface DescribeAntiInfoLeakRulesRuleItem {
  /** 规则ID */
  RuleId: string;
  /** 规则名称 */
  Name: string;
  /** 规则状态 */
  Status: string;
  /** 规则动作类型 */
  ActionType: string;
  /** 规则创建时间 */
  CreateTime: string;
  /** 详细的规则 */
  Strategies: DescribeAntiInfoLeakRulesStrategyItem[];
}

/** DescribeAntiInfoLeakRules返回的规则元素中的具体的规则元素 */
declare interface DescribeAntiInfoLeakRulesStrategyItem {
  /** 字段 */
  Field: string;
  /** 条件 */
  CompareFunc: string;
  /** 内容 */
  Content: string;
}

/** 出参 */
declare interface DescribeAntiLeakageItem {
  /** 规则ID */
  RuleId: number;
  /** 名称 */
  Name: string;
  /** 状态值 */
  Status: number;
  /** 动作 */
  Action: string;
  /** 创建时间 */
  CreateTime: string;
  /** 匹配条件 */
  Strategies: DescribeAntiInfoLeakRulesStrategyItem[] | null;
  /** 匹配的URL */
  Uri: string | null;
}

/** DescribeCustomRules接口回包中的复杂类型 */
declare interface DescribeCustomRulesRspRuleListItem {
  /** 动作类型 */
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
  EventId?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 生效状态 */
  ValidStatus?: number | null;
  /** 来源 */
  Source?: string | null;
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
  CdcClusters?: string | null;
  /** api安全开关状态。0：关闭 1：开启 */
  ApiStatus?: number | null;
  /** 应用型负载均衡类型，默认clb。clb：七层负载均衡器类型apisix：apisix网关型 */
  AlbType?: string | null;
  /** 安全组状态。0：不展示1：非腾讯云源站2：安全组绑定失败3：安全组发生变更 */
  SgState?: number | null;
  /** 安全组状态的详细解释 */
  SgDetail?: string | null;
  /** 域名云环境。hybrid：混合云域名public：公有云域名 */
  CloudType?: string | null;
  /** 域名备注信息 */
  Note?: string | null;
  /** SAASWAF源站IP列表 */
  SrcList?: string[] | null;
  /** SAASWAF源站域名列表 */
  UpstreamDomainList?: string[] | null;
  /** 安全组ID */
  SgID?: string | null;
  /** clbwaf接入状态 */
  AccessStatus?: number | null;
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

/** 唯一定位Domain */
declare interface DomainURI {
  /** 域名 */
  Domain: string;
  /** 版本 */
  Edition: string;
  /** 实例ID */
  InstanceID?: string | null;
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
  /** 是否开启灰度，已废弃。 */
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
  ActiveCheck?: number | null;
  /** TLS版本信息 */
  TLSVersion?: number | null;
  /** 自定义的加密套件列表。CipherTemplate为3时需要填此字段，表示自定义的加密套件，值通过DescribeCiphersDetail接口获取。 */
  Ciphers?: number[] | null;
  /** 加密套件模板。0：不支持选择，使用默认模板 1：通用型模板 2：安全型模板3：自定义模板 */
  CipherTemplate?: number | null;
  /** WAF与源站的读超时时间，默认300s。 */
  ProxyReadTimeout?: number | null;
  /** WAF与源站的写超时时间，默认300s。 */
  ProxySendTimeout?: number | null;
  /** WAF回源时的SNI类型。0：关闭SNI，不配置client_hello中的server_name1：开启SNI，client_hello中的server_name为防护域名2：开启SNI，SNI为域名回源时的源站域名3：开启SNI，SNI为自定义域名 */
  SniType?: number | null;
  /** SniType为3时，需要填此参数，表示自定义的SNI； */
  SniHost?: string | null;
  /** 回源IP权重 */
  Weights?: string[] | null;
  /** IsCdn=3时，表示自定义header */
  IpHeaders?: string[] | null;
  /** 是否开启XFF重置。0：关闭1：开启 */
  XFFReset?: number | null;
  /** 域名备注信息 */
  Note?: string | null;
  /** 自定义回源Host。默认为空字符串，表示使用防护域名作为回源Host。 */
  UpstreamHost?: string | null;
  /** 防护规则 */
  Level?: string | null;
  /** 是否开启缓存 0-关闭 1-开启 */
  ProxyBuffer?: number | null;
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
  Appid: number;
  /** 域名 */
  Domain: string;
  /** 域名ip */
  Ips: string[];
  /** 发现时间 */
  FindTime: string;
  /** 实例id */
  InstanceId: string;
  /** 域名id */
  DomainId: string;
  /** waf类型 */
  Edition: string;
  /** 是否接入waf */
  IsWafDomain: number;
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

/** 计费下单接口出入参Goods */
declare interface GoodNews {
  /** 商品数量 */
  GoodsNum: number;
  /** 商品明细 */
  GoodsDetail: GoodsDetailNew;
  /** 订单类型ID，用来唯一标识一个业务的一种场景（总共三种场景：新购、配置变更、续费）高级版: 102375(新购),102376(续费),102377(变配)企业版 : 102378(新购),102379(续费),102380(变配)旗舰版 : 102369(新购),102370(续费),102371(变配)域名包 : 102372(新购),102373(续费),102374(变配)业务扩展包 : 101040(新购),101041(续费),101042(变配)高级版-CLB: 新购 101198 续费 101199 变配 101200企业版-CLB 101204(新购),101205(续费),101206(变配)旗舰版-CLB : 101201(新购),101202(续费),101203(变配)域名包-CLB: 101207(新购),101208(续费),101209(变配)业务扩展包-CLB: 101210(新购),101211(续费),101212(变配) */
  GoodsCategoryId?: number | null;
  /** 购买waf实例区域ID1 表示购买大陆资源;9表示购买非中国大陆资源 */
  RegionId?: number | null;
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
  ProjectId: number | null;
  /** 计费类目ID，对应cid */
  GoodsCategoryId?: number | null;
  /** 平台类型，默认1 */
  Platform?: number | null;
  /** 购买waf实例区域ID */
  RegionId?: number | null;
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
  ProductInfo?: ProductInfo[] | null;
  /** waf实例名 */
  InstanceName?: string | null;
  /** QPS数量 */
  ElasticQps?: number | null;
  /** 弹性账单 */
  FlexBill?: number | null;
  /** 1:自动续费，0:不自动续费 */
  AutoRenewFlag?: number | null;
  /** waf购买的实际地域信息 */
  RealRegion?: number | null;
  /** Waf实例对应的二级产品码 */
  Type?: string | null;
  /** 计费细项标签数组 */
  LabelTypes?: string[] | null;
  /** 计费细项标签数量，一般和SvLabelType一一对应 */
  LabelCounts?: number[] | null;
  /** 变配使用，实例到期时间 */
  CurDeadline?: string | null;
  /** 对存在的实例购买bot 或api 安全 */
  InstanceId?: string | null;
}

/** 产品明细 */
declare interface GoodsDetailNew {
  /** 时间间隔 */
  TimeSpan?: number | null;
  /** 单位，支持购买d、m、y 即（日、月、年） */
  TimeUnit?: string | null;
  /** 子产品标签,。新购，续费必传，变配时放在oldConfig newConfig里面Saas 高级版 ：sp_wsm_waf_premiumSaas企业版 ：sp_wsm_waf_enterpriseSaas旗舰版 ：sp_wsm_waf_ultimateSaas 业务扩展包：sp_wsm_waf_qpsepSaas 域名扩展包：sp_wsm_waf_domain高级版-CLB:sp_wsm_waf_premium_clb企业版-CLB : sp_wsm_waf_enterprise_clb旗舰版-CLB:sp_wsm_waf_ultimate_clb 业务扩展包-CLB：sp_wsm_waf_qpsep_clb域名扩展包-CLB：sp_wsm_waf_domain_clb */
  SubProductCode?: string | null;
  /** 业务产品申请的pid（对应一个定价公式），通过pid计费查询到定价模型高级版 ：1000827企业版 ：1000830旗舰版 ：1000832域名包 : 1000834业务扩展包 : 1000481高级版-CLB:1001150企业版-CLB : 1001152旗舰版-CLB:1001154域名包-CLB: 1001156业务扩展包-CLB : 1001160 */
  Pid?: number | null;
  /** waf实例名 */
  InstanceName?: string | null;
  /** 1:自动续费，0:不自动续费 */
  AutoRenewFlag?: number | null;
  /** waf购买的实际地域信息 */
  RealRegion?: number | null;
  /** 计费细项标签数组Saas 高级版 sv_wsm_waf_package_premium Saas 企业版 sv_wsm_waf_package_enterpriseSaas 旗舰版 sv_wsm_waf_package_ultimate Saas 非中国大陆高级版 sv_wsm_waf_package_premium_intlSaas 非中国大陆企业版 sv_wsm_waf_package_enterprise_intlSaas 非中国大陆旗舰版 sv_wsm_waf_package_ultimate _intlSaas 业务扩展包 sv_wsm_waf_qps_epSaas 域名扩展包 sv_wsm_waf_domain高级版CLB sv_wsm_waf_package_premium_clb企业版CLB sv_wsm_waf_package_enterprise_clb旗舰版CLB sv_wsm_waf_package_ultimate_clb非中国大陆高级版 CLB sv_wsm_waf_package_premium_clb_intl非中国大陆企业版CLB sv_wsm_waf_package_premium_clb_intl非中国大陆旗舰版CLB sv_wsm_waf_package_ultimate_clb _intl业务扩展包CLB sv_wsm_waf_qps_ep_clb域名扩展包CLB sv_wsm_waf_domain_clb */
  LabelTypes?: string[] | null;
  /** 计费细项标签数量，一般和SvLabelType一一对应 */
  LabelCounts?: number[] | null;
  /** 变配使用，实例到期时间 */
  CurDeadline?: string | null;
  /** 对存在的实例购买bot 或api 安全 */
  InstanceId?: string | null;
  /** 资源id */
  ResourceId?: string | null;
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
  Level?: number | null;
  /** 域名需要下发到的cdc集群列表。仅CDC场景下填充 */
  CdcClusters?: string[] | null;
  /** 应用型负载均衡类型，默认clb。 clb：七层负载均衡器类型 apisix：apisix网关型 */
  AlbType?: string | null;
  /** IsCdn=3时，需要填此参数，表示自定义header */
  IpHeaders?: string[] | null;
  /** 规则引擎类型。1: menshen2: tiga */
  EngineType?: number | null;
  /** 云类型。public:公有云private:私有云hybrid:混合云 */
  CloudType?: string | null;
  /** 域名备注信息 */
  Note?: string | null;
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
  /** 实例沙箱qps值 */
  SandboxQps?: number | null;
  /** 是否api 安全试用 */
  IsAPISecurityTrial?: number | null;
  /** 重保包 */
  MajorEventsPkg?: MajorEventsPkg | null;
  /** 混合云子节点包 */
  HybridPkg?: HybridPkg | null;
  /** API安全资源包 */
  ApiPkg?: ApiPkg | null;
  /** 小程序安全加速包 */
  MiniPkg?: MiniPkg | null;
  /** 小程序qps规格 */
  MiniQpsStandard?: number | null;
  /** 小程序qps峰值 */
  MiniMaxQPS?: number | null;
  /** 最近一次超量时间 */
  LastQpsExceedTime?: string | null;
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
  /** mongo表自增Id */
  Id?: string | null;
  /** 动作 */
  ActionType?: number;
  /** ip */
  Ip?: string;
  /** 备注 */
  Note?: string;
  /** 来源 */
  Source?: string;
  /** 更新时间戳 */
  TsVersion?: number | null;
  /** 有效截止时间戳 */
  ValidTs?: number;
  /** 生效状态 */
  ValidStatus?: number | null;
  /** 55000001 */
  RuleId?: number | null;
  /** IP列表 */
  IpList?: string[] | null;
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

/** Key-Value的形式，Value为Int */
declare interface KVInt {
  /** Key */
  Key: string;
  /** Value */
  Value: number;
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
  /** 负载均衡的域名 */
  LoadBalancerDomain?: string | null;
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
  /** 地区"多伦多": "ca", "广州": "gz", "成都": "cd", "福州": "fzec", "深圳": "szx", "印度": "in", "济南": "jnec", "重庆": "cq", "天津": "tsn", "欧洲东北": "ru", "南京": "nj", "美国硅谷": "usw", "泰国": "th", "广州Open": "gzopen", "深圳金融": "szjr", "法兰克福": "de", "日本": "jp", "弗吉尼亚": "use", "北京": "bj", "中国香港": "hk", "杭州": "hzec", "北京金融": "bjjr", "上海金融": "shjr", "台北": "tpe", "首尔": "kr", "上海": "sh", "新加坡": "sg", "清远": "qy" */
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
  /** 负载均衡器的域名 */
  LoadBalancerDomain?: string | null;
}

/** 攻击日志统计详情 */
declare interface LogHistogramInfo {
  /** 日志条数 */
  Count: number;
  /** 时间戳 */
  TimeStamp: number;
}

/** 重保防护资源信息 */
declare interface MajorEventsPkg {
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
  /** 计费项 */
  BillingItem?: string | null;
  /** 护网包状态 */
  HWState?: number | null;
}

/** API安全资源信息 */
declare interface MiniPkg {
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
  /** 购买数量 */
  Count?: number | null;
  /** 续费标志 */
  RenewFlag?: number | null;
  /** 计费项 */
  BillingItem?: string | null;
}

/** 公共翻页参数 */
declare interface PageInfo {
  /** 页码 */
  PageNumber: string;
  /** 页条目数量 */
  PageSize: string;
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
  StatusServerError?: number | null;
  /** WAF返回给客户端状态码4xx次数 */
  StatusClientError?: number | null;
  /** WAF返回给客户端状态码302次数 */
  StatusRedirect?: number | null;
  /** WAF返回给客户端状态码202次数 */
  StatusOk?: number | null;
  /** 源站返回给WAF状态码5xx次数 */
  UpstreamServerError?: number | null;
  /** 源站返回给WAF状态码4xx次数 */
  UpstreamClientError?: number | null;
  /** 源站返回给WAF状态码302次数 */
  UpstreamRedirect?: number | null;
  /** 黑名单次数 */
  BlackIP?: number | null;
  /** 防篡改次数 */
  Tamper?: number | null;
  /** 信息防泄露次数 */
  Leak?: number | null;
  /** 访问控制 */
  ACL?: number | null;
  /** 小程序 qps */
  WxAccess?: number | null;
  /** 小程序请求数 */
  WxCount?: number | null;
  /** 小程序上行带宽峰值，单位B */
  WxUp?: number | null;
  /** 小程序下行带宽峰值，单位B */
  WxDown?: number | null;
}

/** 饼图数据类型 */
declare interface PiechartItem {
  /** 类型 */
  Type: string;
  /** 数量 */
  Count: number;
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

/** waf产品 */
declare interface ProductInfo {
  /** 产品名称 */
  Name?: string | null;
  /** 版本 */
  Value?: string | null;
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

/** 获取弹性qps的默认相关值 */
declare interface QpsData {
  /** 弹性qps默认值 */
  ElasticBillingDefault?: number | null;
  /** 弹性qps最小值 */
  ElasticBillingMin?: number | null;
  /** 弹性qps最大值 */
  ElasticBillingMax?: number | null;
  /** 业务扩展包最大qps */
  QPSExtendMax?: number | null;
  /** 海外业务扩展包最大qps */
  QPSExtendIntlMax?: number | null;
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
  Code: string;
  /** 如果成功则返回Success，失败则返回WAF定义的二级错误码 */
  Message: string;
}

/** 规则列表详情 */
declare interface Rule {
  /** 规则id */
  Id?: number;
  /** 规则类型 */
  Type?: string | null;
  /** 规则等级 */
  Level?: string;
  /** 规则描述 */
  Description?: string | null;
  /** 规则防护的CVE编号 */
  CVE?: string | null;
  /** 规则的状态 */
  Status?: number;
  /** 规则修改的时间 */
  ModifyTime?: string;
  /** 门神规则新增/更新时间 */
  AddTime?: string | null;
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
  Res: SessionItem[];
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
  SessionId?: number | null;
  /** Session名 */
  SessionName?: string | null;
  /** Session是否正在被启用 */
  SessionInUsed?: boolean | null;
  /** Session关联的CC规则ID */
  RelatedRuleID?: number[] | null;
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
  /** 匹配字段 匹配字段不同，相应的匹配参数、逻辑符号、匹配内容有所不同具体如下所示：匹配字段匹配参数逻辑符号匹配内容IP（来源IP）不支持参数ipmatch（匹配）ipnmatch（不匹配）多个IP以英文逗号隔开,最多20个IPV6（来源IPv6）不支持参数ipmatch（匹配）ipnmatch（不匹配）支持单个IPV6地址Referer（Referer）不支持参数empty（内容为空）null（不存在）eq（等于）neq（不等于）contains（包含）ncontains（不包含）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）rematch（正则匹配）请输入内容,512个字符以内URL（请求路径）不支持参数eq（等于）neq（不等于）contains（包含）ncontains（不包含）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）rematch（正则匹配）请以/开头,512个字符以内UserAgent（UserAgent）不支持参数同匹配字段Referer逻辑符号请输入内容,512个字符以内HTTP_METHOD（HTTP请求方法）不支持参数eq（等于）neq（不等于）请输入方法名称,建议大写QUERY_STRING（请求字符串）不支持参数同匹配字段请求路径逻辑符号请输入内容,512个字符以内GET（GET参数值）支持参数录入contains（包含）ncontains（不包含）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）请输入内容,512个字符以内GET_PARAMS_NAMES（GET参数名）不支持参数exsit（存在参数）nexsit（不存在参数）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）请输入内容,512个字符以内POST（POST参数值）支持参数录入同匹配字段GET参数值逻辑符号请输入内容,512个字符以内GET_POST_NAMES（POST参数名）不支持参数同匹配字段GET参数名逻辑符号请输入内容,512个字符以内POST_BODY（完整BODY）不支持参数同匹配字段请求路径逻辑符号请输入BODY内容,512个字符以内COOKIE（Cookie）不支持参数empty（内容为空）null（不存在）rematch（正则匹配）暂不支持GET_COOKIES_NAMES（Cookie参数名）不支持参数同匹配字段GET参数名逻辑符号请输入内容,512个字符以内ARGS_COOKIE（Cookie参数值）支持参数录入同匹配字段GET参数值逻辑符号请输入内容,512个字符以内GET_HEADERS_NAMES（Header参数名）不支持参数exsit（存在参数）nexsit（不存在参数）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）rematch（正则匹配）请输入内容,建议小写,512个字符以内ARGS_HEADER（Header参数值）支持参数录入contains（包含）ncontains（不包含）len_eq（长度等于）len_gt（长度大于）len_lt（长度小于）strprefix（前缀匹配）strsuffix（后缀匹配）rematch（正则匹配）请输入内容,512个字符以内 */
  Field: string | null;
  /** 逻辑符号 逻辑符号一共分为以下几种类型： empty （ 内容为空） null （不存在） eq （ 等于） neq （ 不等于） contains （ 包含） ncontains （ 不包含） strprefix （ 前缀匹配） strsuffix （ 后缀匹配） len_eq （ 长度等于） len_gt （ 长度大于） len_lt （ 长度小于） ipmatch （ 属于） ipnmatch （ 不属于） 各匹配字段对应的逻辑符号不同，详见上述匹配字段表格 */
  CompareFunc: string | null;
  /** 匹配内容 目前 当匹配字段为COOKIE（Cookie）时，不需要输入 匹配内容其他都需要 */
  Content: string | null;
  /** 匹配参数 配置参数一共分2种类型 不支持参数与支持参数 当匹配字段为以下4个时，匹配参数才能录入，否则不支持该参数 GET（GET参数值） POST（POST参数值） ARGS_COOKIE（Cookie参数值） ARGS_HEADER（Header参数值） */
  Arg: string | null;
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
  VersionId: number | null;
  /** 加密套件ID */
  CipherId: number | null;
  /** 加密套件 */
  CipherName: string | null;
}

/** TLS信息 */
declare interface TLSVersion {
  /** TLSVERSION的ID */
  VersionId: number | null;
  /** TLSVERSION的NAME */
  VersionName: string | null;
}

/** 需要开启/关闭API安全的 实例+域名 组合实体 */
declare interface TargetEntity {
  /** 实例ID */
  InstanceId?: string;
  /** 域名 */
  Domain?: string;
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
  Level?: string | null;
  /** 指定域名访问日志字段的开关 */
  WriteConfig?: string | null;
  /** 指定域名是否写cls的开关 1:写 0:不写 */
  Cls?: number | null;
  /** 标记是否是混合云接入。hybrid表示混合云接入域名 */
  CloudType?: string | null;
}

/** 用户特征规则描述 */
declare interface UserSignatureRule {
  /** 特征ID */
  ID: string;
  /** 规则开关 */
  Status: number;
  /** 主类ID */
  MainClassID: string;
  /** 子类ID */
  SubClassID: string;
  /** CVE ID */
  CveID: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  ModifyTime: string;
  /** 主类名字，根据Language字段输出中文/英文 */
  MainClassName: string;
  /** 子类名字，根据Language字段输出中文/英文，若子类id为00000000，此字段为空 */
  SubClassName: string;
  /** 规则描述 */
  Description: string;
  /** 0/1 */
  Reason: number;
}

/** 用户规则白名单 */
declare interface UserWhiteRule {
  /** 白名单的id */
  WhiteRuleId: number;
  /** 规则id */
  SignatureId: string;
  /** 状态 */
  Status: number;
  /** 匹配域 */
  MatchField: string;
  /** 匹配方法 */
  MatchMethod: string;
  /** 匹配内容 */
  MatchContent: string;
  /** 创建时间 */
  CreateTime: string;
  /** 修改时间 */
  ModifyTime: string;
}

/** 用户规则白名单规则子项 */
declare interface UserWhiteRuleItem {
  /** 匹配域 */
  MatchField: string;
  /** 匹配方法 */
  MatchMethod: string;
  /** 匹配内容 */
  MatchContent: string;
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
  /** 待废弃，可不填。Waf的资源ID。 */
  ResourceId?: string;
  /** IsCdn为3时，需要填此参数，表示自定义header */
  IpHeaders?: string[];
  /** 服务配置有HTTPS端口时，HTTPS的回源协议。http：使用http协议回源，和HttpsUpstreamPort配合使用https：使用https协议回源 */
  UpstreamScheme?: string;
  /** HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段 */
  HttpsUpstreamPort?: string;
  /** 待废弃，可不填。是否开启灰度，0表示不开启灰度。 */
  IsGray?: number;
  /** 待废弃，可不填。灰度的地区 */
  GrayAreas?: string[];
  /** 必填项，是否开启HTTP强制跳转到HTTPS。0：不强制跳转1：开启强制跳转 */
  HttpsRewrite?: number;
  /** 域名回源时的回源域名。UpstreamType为1时，需要填充此字段 */
  UpstreamDomain?: string;
  /** IP回源时的回源IP列表。UpstreamType为0时，需要填充此字段 */
  SrcList?: string[];
  /** 必填项，是否开启HTTP2，需要开启HTTPS协议支持。0：关闭1：开启 */
  IsHttp2?: number;
  /** 待废弃，可不填。WAF实例类型。sparta-waf：SAAS型WAFclb-waf：负载均衡型WAFcdn-waf：CDN上的Web防护能力 */
  Edition?: string;
  /** 待废弃，目前填0即可。anycast IP类型开关： 0 普通IP 1 Anycast IP */
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
  /** 是否开启XFF重置。0：关闭1：开启 */
  XFFReset?: number;
  /** 域名备注信息 */
  Note?: string;
  /** 自定义回源Host。默认为空字符串，表示使用防护域名作为回源Host。 */
  UpstreamHost?: string;
  /** 是否开启缓存 0-关闭 1-开启 */
  ProxyBuffer?: number;
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

declare interface CreateDealsRequest {
  /** 计费下单入参 */
  Goods: CreateDealsGoods[];
}

declare interface CreateDealsResponse {
  /** 计费下单响应结构体 */
  Data?: DealData | null;
  /** 1:成功，0:失败 */
  Status?: number;
  /** 返回message */
  ReturnMessage?: string | null;
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
  FailIds: number[] | null;
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
  Data?: string | null;
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
}

declare interface DeleteCustomRuleResponse {
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
  /** 要删除的SessionID */
  SessionID?: number;
}

declare interface DeleteSessionResponse {
  /** 结果 */
  Data?: string | null;
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
  /** 排序字段,升序asc,降序desc，默认降序desc */
  Sort?: string;
  /** 返回的top数，默认返回top5 */
  Count?: number;
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
  /** 目前支持根据ts排序 */
  By?: string;
}

declare interface DescribeAntiFakeRulesResponse {
  /** 返回值 */
  Data: CacheUrlItems[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAntiFakeUrlRequest {
  /** 域名 */
  Domain: string;
  /** 翻页参数 */
  PageInfo: PageInfo;
}

declare interface DescribeAntiFakeUrlResponse {
  /** 总数 */
  Total?: string;
  /** 信息 */
  List?: CacheUrlItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAntiInfoLeakRulesRequest {
  /** 域名 */
  Domain: string;
  /** 动作类型 */
  ActionType?: number;
  /** 翻页 */
  PageInfo?: PageInfo;
}

declare interface DescribeAntiInfoLeakRulesResponse {
  /** 记录条数 */
  TotalCount?: string;
  /** 规则列表 */
  RuleList?: DescribeAntiInfoLeakRulesRuleItem[];
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
  ApiRiskEventCount?: number | null;
  /** 黑名单总数 */
  IPBlackCount?: number | null;
  /** 防篡改总数 */
  TamperCount?: number | null;
  /** 信息泄露总数 */
  LeakCount?: number | null;
  /** API风险事件周环比 */
  ApiRiskEventCircleCount?: number | null;
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
  Piechart: PiechartItem[];
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
  /** 排序字段，支持user_id, signature_id, modify_time */
  By?: string;
  /** 排序方式 */
  Order?: string;
  /** 筛选条件，支持SignatureId, MatchContent */
  Filters?: FiltersItemNew[];
}

declare interface DescribeAttackWhiteRuleResponse {
  /** 规则总数 */
  Total: number;
  /** 规则白名单列表 */
  List: UserWhiteRule[] | null;
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
  /** 筛选条件，支持 ActionType 40/42，Ip：ip地址，Domain：域名三类 */
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
  Data?: BatchIpAccessControlData | null;
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
  Data?: CCRuleLists | null;
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
  Data?: CCRuleData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertificateVerifyResultRequest {
  /** 域名 */
  Domain: string;
  /** 证书类型。 0：仅配置HTTP监听端口，没有证书 1：证书来源为自有证书 2：证书来源为托管证书 */
  CertType: number;
  /** CertType为1时，需要填充此参数，表示自有证书的证书链 */
  Certificate?: string;
  /** CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  CertID?: string;
  /** CertType为1时，需要填充此参数，表示自有证书的私钥 */
  PrivateKey?: string;
}

declare interface DescribeCertificateVerifyResultResponse {
  /** 状态码。0：证书正常310：证书异常311：证书过期312：证书即将过期 */
  Status?: number;
  /** 错误详情 */
  Detail?: string[];
  /** 过期时间 */
  NotAfter?: string;
  /** 证书是否改变。0：未变化1：有变化 */
  Changed?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCiphersDetailRequest {
}

declare interface DescribeCiphersDetailResponse {
  /** 加密套件信息 */
  Ciphers?: TLSCiphers[] | null;
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
}

declare interface DescribeCustomRuleListResponse {
  /** 规则详情 */
  RuleList: DescribeCustomRulesRspRuleListItem[];
  /** 规则条数 */
  TotalCount: string;
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
  AllDomain: number;
  /** 最近发现时间 */
  UpdateTime: string;
  /** 接入域名总数 */
  WafDomainCount: number;
  /** 剩下配额 */
  LeftDomainCount: number;
  /** 开启防护域名数 */
  OpenWafDomain: number;
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

declare interface DescribeFindDomainListRequest {
  /** 分页 */
  Offset: number;
  /** 每页容量 */
  Limit: number;
  /** 过滤条件 */
  Key: string;
  /** 是否接入waf */
  IsWafDomain: string;
  /** 排序参数 */
  By?: string;
  /** 排序方式 */
  Order?: string;
}

declare interface DescribeFindDomainListResponse {
  /** 域名总数 */
  Total: number;
  /** 域名信息列表 */
  List: FindAllDomainDetail[];
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
  /** 聚类字段，ip为ip聚合，art为响应耗时聚合，url为url聚合，local为ip转化的城市聚合 */
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
  Histogram: string[];
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
  Success?: ResponseCode | null;
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
  Host: HostRecord;
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
  TotalCount: number;
  /** 防护域名的列表 */
  HostList: HostRecord[] | null;
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
  /** 分页偏移量，取Limit整数倍。最小值为0，最大值= Total/Limit向上取整 */
  OffSet?: number;
  /** 每页返回的数量 */
  Limit?: number;
  /** 来源 */
  Source?: string;
  /** 排序参数 */
  Sort?: string;
  /** IP */
  Ip?: string;
  /** 生效状态 */
  ValidStatus?: number;
  /** 最小有效时间的时间戳 */
  ValidTimeStampMin?: string;
  /** 最大有效时间的时间戳 */
  ValidTimeStampMax?: string;
  /** 规则ID */
  RuleId?: number;
}

declare interface DescribeIpAccessControlResponse {
  /** 输出 */
  Data?: IpAccessControlData | null;
  /** 已经使用的IP黑白名单的IP总数 */
  UsedTotal?: number | null;
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
  /** 有效时间最小时间戳 */
  ValidTimeStampMin?: number;
  /** 有效时间最大时间戳 */
  ValidTimeStampMax?: number;
}

declare interface DescribeIpHitItemsResponse {
  /** 结果 */
  Data?: IpHitItemsData | null;
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
}

declare interface DescribeObjectsResponse {
  /** 对象列表 */
  ClbObjects?: ClbObject[];
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

declare interface DescribeSessionRequest {
  /** 域名 */
  Domain: string;
  /** clb-waf或者sparta-waf */
  Edition?: string;
}

declare interface DescribeSessionResponse {
  /** 返回结果 */
  Data?: SessionData | null;
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
  Domain: string;
  /** 域名ID */
  DomainId: string;
  /** cname取值 */
  Cname: string;
  /** 状态 */
  Status: string;
  /** 源IP地址列表 */
  SrcList: string[];
  /** 证书类型 */
  CertType: string;
  /** 证书 */
  Cert: string;
  /** 私有密钥 */
  PrivateKey: string;
  /** ssl的id */
  Sslid: string;
  /** 是否是cdn */
  IsCdn: string;
  /** 灰度区域列表 */
  GrayAreas: string[];
  /** 引擎 */
  Engine: string;
  /** HTTPS重写 */
  HttpsRewrite: string;
  /** upstreamType取值 */
  UpstreamType: string;
  /** upstreamDomain取值 */
  UpstreamDomain: string;
  /** upstreamScheme取值 */
  UpstreamScheme: string;
  /** 是否是HTTP2 */
  IsHttp2: string;
  /** 是否含有websocket */
  IsWebsocket: string;
  /** loadBalance信息 */
  LoadBalance: string;
  /** httpsUpstreamPort取值 */
  HttpsUpstreamPort: string;
  /** port信息 */
  Ports: PortItem[];
  /** 是否灰度 */
  IsGray: string;
  /** 模式 */
  Mode: string;
  /** 防御等级,100,200,300 */
  Level: string;
  /** 与源站是否保持长连接 */
  IsKeepAlive: string;
  /** 0：BGP 1：Anycast */
  Anycast: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTlsVersionRequest {
}

declare interface DescribeTlsVersionResponse {
  /** TLS key value */
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
  CC: KVInt[];
  /** Web攻击域名列表 */
  Web: KVInt[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserCdcClbWafRegionsRequest {
}

declare interface DescribeUserCdcClbWafRegionsResponse {
  /** CdcRegion的类型描述 */
  Data?: CdcRegion[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserClbWafRegionsRequest {
}

declare interface DescribeUserClbWafRegionsResponse {
  /** 地域（标准的ap-格式）列表 */
  Data?: string[] | null;
  /** 包含详细属性的地域信息 */
  RichDatas?: ClbWafRegionItem[] | null;
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
  Level: number;
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
  Total: number;
  /** 规则列表 */
  Rules: UserSignatureRule[] | null;
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
  Source?: string | null;
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
  WafThreatenIntelligenceDetails: WafThreatenIntelligenceDetails;
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
  Data?: DealData | null;
  /** 1:成功，0:失败 */
  Status?: number;
  /** 返回message */
  ReturnMessage?: string | null;
  /** 购买的实例ID */
  InstanceId?: string | null;
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

declare interface GetAttackTotalCountRequest {
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 查询的域名，全部域名不指定 */
  Domain: string;
  /** 查询条件，默认为"" */
  QueryString: string;
}

declare interface GetAttackTotalCountResponse {
  /** 攻击总次数 */
  TotalCount: number;
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

declare interface ModifyAccessPeriodRequest {
  /** 访问日志保存期限，范围为[1, 180] */
  Period: number;
  /** 日志主题，新版本不需要再传 */
  TopicId?: string;
}

declare interface ModifyAccessPeriodResponse {
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
  Count?: number | null;
  /** 不支持开启的域名列表 */
  UnSupportedList?: string[] | null;
  /** 开启/关闭失败的域名列表 */
  FailDomainList?: string[] | null;
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
}

declare interface ModifyAttackWhiteRuleResponse {
  /** 规则总数 */
  RuleId?: number;
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
  Data?: string | null;
  /** 未购买BOT的域名列表 */
  UnSupportedList?: string[] | null;
  /** 已购买但操作失败的域名列表 */
  FailDomainList?: string[] | null;
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
  /** 执行动作，0：放行、1：阻断、2：人机识别、3：观察、4：重定向 */
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
}

declare interface ModifyCustomRuleResponse {
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
  /** 放行时是否继续执行其它检查逻辑，继续执行地域封禁防护：geoip、继续执行CC策略防护：cc、继续执行WEB应用防护：owasp、继续执行AI引擎防护：ai、继续执行信息防泄漏防护：antileakage。如果勾选多个，则以“，”串接。 */
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
  Success: ResponseCode;
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
  /** www.tx.com */
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
  Data: DealData | null;
  /** 1:成功，0:失败 */
  Status: number;
  /** 返回message */
  ReturnMessage: string | null;
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
  Success: ResponseCode | null;
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
  /** 版本 */
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

declare interface ModifyModuleStatusRequest {
  /** 需要设置的domain */
  Domain: string;
  /** WEB 安全模块开关，0或1 */
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

declare interface ModifyProtectionStatusRequest {
  /** 域名 */
  Domain: string;
  /** 状态 */
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
  /** 必填项。证书类型。0：仅配置HTTP监听端口，没有证书1：证书来源为自有证书2：证书来源为托管证书 */
  CertType?: number;
  /** CertType为1时，需要填充此参数，表示自有证书的证书链 */
  Cert?: string;
  /** CertType为1时，需要填充此参数，表示自有证书的私钥 */
  PrivateKey?: string;
  /** CertType为2时，需要填充此参数，表示腾讯云SSL平台托管的证书id */
  SSLId?: string;
  /** 必填项。waf前是否部署有七层代理服务。0：没有部署代理服务1：有部署代理服务，waf将使用XFF获取客户端IP2：有部署代理服务，waf将使用remote_addr获取客户端IP3：有部署代理服务，waf将使用ip_headers中的自定义header获取客户端IP */
  IsCdn?: number;
  /** 服务配置有HTTPS端口时，HTTPS的回源协议。http：使用http协议回源，和HttpsUpstreamPort配合使用https：使用https协议回源 */
  UpstreamScheme?: string;
  /** HTTPS回源端口,仅UpstreamScheme为http时需要填当前字段 */
  HttpsUpstreamPort?: string;
  /** 必填项。是否开启HTTP强制跳转到HTTPS。0：不强制跳转1：开启强制跳转 */
  HttpsRewrite?: number;
  /** 必填项。回源类型。0：通过IP回源1：通过域名回源 */
  UpstreamType?: number;
  /** 域名回源时的回源域名。UpstreamType为1时，需要填充此字段 */
  UpstreamDomain?: string;
  /** IP回源时的回源IP列表。UpstreamType为0时，需要填充此字段 */
  SrcList?: string[];
  /** 必填项。是否开启HTTP2，需要开启HTTPS协议支持。0：关闭1：开启 */
  IsHttp2?: number;
  /** 必填项。是否开启WebSocket支持。0：关闭1：开启 */
  IsWebsocket?: number;
  /** 必填项。回源负载均衡策略。0：轮询1：IP hash2：加权轮询 */
  LoadBalance?: number;
  /** 待废弃，可不填。是否开启灰度，0表示不开启灰度。 */
  IsGray?: number;
  /** 域名所属实例类型 */
  Edition?: string;
  /** 必填项。端口信息，可通过DescribeDomains接口获取具体参数信息。 */
  Ports?: SpartaProtectionPort[];
  /** 必填项。是否开启长连接。0： 短连接1： 长连接 */
  IsKeepAlive?: string;
  /** 必填项，待废弃。目前填0即可。anycast IP类型开关： 0 普通IP 1 Anycast IP */
  Anycast?: number;
  /** 回源IP列表各IP的权重，和SrcList一一对应。当且仅当UpstreamType为0，并且SrcList有多个IP，并且LoadBalance为2时需要填写，否则填 [] */
  Weights?: number[];
  /** 必填项，是否开启主动健康检测。0：不开启1：开启 */
  ActiveCheck?: number;
  /** TLS版本信息 */
  TLSVersion?: number;
  /** 加密套件信息 */
  Ciphers?: number[];
  /** 必填项。加密套件模板。0：不支持选择，使用默认模板 1：通用型模板 2：安全型模板3：自定义模板 */
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
  /** 必填项。是否开启XFF重置。0：关闭1：开启 */
  XFFReset?: number;
  /** 域名备注信息 */
  Note?: string;
  /** 自定义回源Host。默认为空字符串，表示使用防护域名作为回源Host。 */
  UpstreamHost?: string;
  /** 是否开启缓存 0-关闭 1-开启 */
  ProxyBuffer?: number;
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
  Data?: string | null;
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
  /** 检测Url */
  Url: string;
  /** 匹配方法，0表示等于，1表示前缀匹配，2表示包含 */
  MatchFunc: number;
  /** 动作，20表示观察，21表示人机识别，22表示拦截，23表示精准拦截 */
  ActionType: string;
  /** 优先级 */
  Priority: number;
  /** 动作有效时间 */
  ValidTime: number;
  /** 附加参数 */
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
}

declare interface UpsertCCRuleResponse {
  /** 一般为null */
  Data?: string | null;
  /** 操作的RuleId */
  RuleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpsertIpAccessControlRequest {
  /** 具体域名如：test.qcloudwaf.com全局域名为：global */
  Domain: string;
  /** ip 参数列表，json数组由ip，source，note，action，valid_ts组成。ip对应配置的ip地址，source固定为custom值，note为注释，action值42为黑名单，40为白名单，valid_ts为有效日期，值为秒级时间戳（（如1680570420代表2023-04-04 09:07:00）） */
  Items: string[];
  /** 实例Id */
  InstanceId?: string;
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
  /** 添加或修改的IP数据Id列表 */
  Ids?: string[] | null;
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
  Data?: string | null;
  /** SessionID */
  SessionID?: number | null;
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
  /** 增加规则引擎白名单 {@link AddAttackWhiteRuleRequest} {@link AddAttackWhiteRuleResponse} */
  AddAttackWhiteRule(data: AddAttackWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddAttackWhiteRuleResponse>;
  /** 增加访问控制（自定义策略） {@link AddCustomRuleRequest} {@link AddCustomRuleResponse} */
  AddCustomRule(data: AddCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddCustomRuleResponse>;
  /** 添加精准白名单规则 {@link AddCustomWhiteRuleRequest} {@link AddCustomWhiteRuleResponse} */
  AddCustomWhiteRule(data: AddCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddCustomWhiteRuleResponse>;
  /** 增加域名规则白名单 {@link AddDomainWhiteRuleRequest} {@link AddDomainWhiteRuleResponse} */
  AddDomainWhiteRule(data?: AddDomainWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<AddDomainWhiteRuleResponse>;
  /** 添加SaaS型WAF防护域名 {@link AddSpartaProtectionRequest} {@link AddSpartaProtectionResponse} */
  AddSpartaProtection(data: AddSpartaProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<AddSpartaProtectionResponse>;
  /** 创建访问日志导出 {@link CreateAccessExportRequest} {@link CreateAccessExportResponse} */
  CreateAccessExport(data: CreateAccessExportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccessExportResponse>;
  /** 计费实例创建订单 {@link CreateDealsRequest} {@link CreateDealsResponse} */
  CreateDeals(data: CreateDealsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDealsResponse>;
  /** 添加负载均衡型WAF防护域名 {@link CreateHostRequest} {@link CreateHostResponse} */
  CreateHost(data: CreateHostRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHostResponse>;
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
  /** Waf CC V2 Delete接口 {@link DeleteCCRuleRequest} {@link DeleteCCRuleResponse} */
  DeleteCCRule(data: DeleteCCRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCCRuleResponse>;
  /** 删除自定义规则 {@link DeleteCustomRuleRequest} {@link DeleteCustomRuleResponse} */
  DeleteCustomRule(data: DeleteCustomRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomRuleResponse>;
  /** 删除精准白名单规则 {@link DeleteCustomWhiteRuleRequest} {@link DeleteCustomWhiteRuleResponse} */
  DeleteCustomWhiteRule(data: DeleteCustomWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomWhiteRuleResponse>;
  /** 删除域名规则白名单 {@link DeleteDomainWhiteRulesRequest} {@link DeleteDomainWhiteRulesResponse} */
  DeleteDomainWhiteRules(data?: DeleteDomainWhiteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDomainWhiteRulesResponse>;
  /** @deprecated 删除访问日志下载记录 {@link DeleteDownloadRecordRequest} {@link DeleteDownloadRecordResponse} */
  DeleteDownloadRecord(data: DeleteDownloadRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDownloadRecordResponse>;
  /** 删除负载均衡型WAF域名 {@link DeleteHostRequest} {@link DeleteHostResponse} */
  DeleteHost(data: DeleteHostRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHostResponse>;
  /** Waf IP黑白名单Delete接口 {@link DeleteIpAccessControlRequest} {@link DeleteIpAccessControlResponse} */
  DeleteIpAccessControl(data: DeleteIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIpAccessControlResponse>;
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
  /** @deprecated 获取防篡改url {@link DescribeAntiFakeUrlRequest} {@link DescribeAntiFakeUrlResponse} */
  DescribeAntiFakeUrl(data: DescribeAntiFakeUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAntiFakeUrlResponse>;
  /** @deprecated 获取信息防泄漏规则列表【老接口】 {@link DescribeAntiInfoLeakRulesRequest} {@link DescribeAntiInfoLeakRulesResponse} */
  DescribeAntiInfoLeakRules(data: DescribeAntiInfoLeakRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAntiInfoLeakRulesResponse>;
  /** 获取信息防泄漏规则列表 {@link DescribeAntiInfoLeakageRulesRequest} {@link DescribeAntiInfoLeakageRulesResponse} */
  DescribeAntiInfoLeakageRules(data: DescribeAntiInfoLeakageRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAntiInfoLeakageRulesResponse>;
  /** 攻击总览 {@link DescribeAttackOverviewRequest} {@link DescribeAttackOverviewResponse} */
  DescribeAttackOverview(data: DescribeAttackOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackOverviewResponse>;
  /** 查询TOP N攻击类型 {@link DescribeAttackTypeRequest} {@link DescribeAttackTypeResponse} */
  DescribeAttackType(data: DescribeAttackTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackTypeResponse>;
  /** 获取用户规则白名单列表 {@link DescribeAttackWhiteRuleRequest} {@link DescribeAttackWhiteRuleResponse} */
  DescribeAttackWhiteRule(data: DescribeAttackWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAttackWhiteRuleResponse>;
  /** 描述WAF自动封禁IP详情 {@link DescribeAutoDenyIPRequest} {@link DescribeAutoDenyIPResponse} */
  DescribeAutoDenyIP(data: DescribeAutoDenyIPRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoDenyIPResponse>;
  /** Waf 批量防护IP黑白名单查询 {@link DescribeBatchIpAccessControlRequest} {@link DescribeBatchIpAccessControlResponse} */
  DescribeBatchIpAccessControl(data: DescribeBatchIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchIpAccessControlResponse>;
  /** 获取SAAS型接入的紧急CC防护状态 {@link DescribeCCAutoStatusRequest} {@link DescribeCCAutoStatusResponse} */
  DescribeCCAutoStatus(data: DescribeCCAutoStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCCAutoStatusResponse>;
  /** Waf CC V2 Query接口 {@link DescribeCCRuleRequest} {@link DescribeCCRuleResponse} */
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
  /** Waf ip黑白名单查询 {@link DescribeIpAccessControlRequest} {@link DescribeIpAccessControlResponse} */
  DescribeIpAccessControl(data: DescribeIpAccessControlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpAccessControlResponse>;
  /** Waf IP封堵状态查询 {@link DescribeIpHitItemsRequest} {@link DescribeIpHitItemsResponse} */
  DescribeIpHitItems(data: DescribeIpHitItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpHitItemsResponse>;
  /** 查询waf各个模块接口的开关状态 {@link DescribeModuleStatusRequest} {@link DescribeModuleStatusResponse} */
  DescribeModuleStatus(data: DescribeModuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModuleStatusResponse>;
  /** 查看防护对象列表 {@link DescribeObjectsRequest} {@link DescribeObjectsResponse} */
  DescribeObjects(data?: DescribeObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeObjectsResponse>;
  /** 查询业务和攻击概要趋势 {@link DescribePeakPointsRequest} {@link DescribePeakPointsResponse} */
  DescribePeakPoints(data: DescribePeakPointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePeakPointsResponse>;
  /** 获取业务和攻击概览峰值 {@link DescribePeakValueRequest} {@link DescribePeakValueResponse} */
  DescribePeakValue(data: DescribePeakValueRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePeakValueResponse>;
  /** 获取防护状态以及生效的实例id {@link DescribePolicyStatusRequest} {@link DescribePolicyStatusResponse} */
  DescribePolicyStatus(data: DescribePolicyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyStatusResponse>;
  /** 获取Saas型WAF防护端口列表 {@link DescribePortsRequest} {@link DescribePortsResponse} */
  DescribePorts(data?: DescribePortsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePortsResponse>;
  /** 获取规格限制 {@link DescribeRuleLimitRequest} {@link DescribeRuleLimitResponse} */
  DescribeRuleLimit(data: DescribeRuleLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleLimitResponse>;
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
  /** 获取用户特征规则列表 {@link DescribeUserSignatureRuleRequest} {@link DescribeUserSignatureRuleResponse} */
  DescribeUserSignatureRule(data: DescribeUserSignatureRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserSignatureRuleResponse>;
  /** 查询VIP信息 {@link DescribeVipInfoRequest} {@link DescribeVipInfoResponse} */
  DescribeVipInfo(data: DescribeVipInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVipInfoResponse>;
  /** 查询ip惩罚规则 {@link DescribeWafAutoDenyRulesRequest} {@link DescribeWafAutoDenyRulesResponse} */
  DescribeWafAutoDenyRules(data: DescribeWafAutoDenyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafAutoDenyRulesResponse>;
  /** 描述WAF自动封禁模块详情 {@link DescribeWafAutoDenyStatusRequest} {@link DescribeWafAutoDenyStatusResponse} */
  DescribeWafAutoDenyStatus(data?: DescribeWafAutoDenyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafAutoDenyStatusResponse>;
  /** 描述WAF威胁情报封禁模块配置详情 {@link DescribeWafThreatenIntelligenceRequest} {@link DescribeWafThreatenIntelligenceResponse} */
  DescribeWafThreatenIntelligence(data?: DescribeWafThreatenIntelligenceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafThreatenIntelligenceResponse>;
  /** 获取域名webshell状态 {@link DescribeWebshellStatusRequest} {@link DescribeWebshellStatusResponse} */
  DescribeWebshellStatus(data: DescribeWebshellStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebshellStatusResponse>;
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
  /** 修改访问日志保存期限等字段信息 {@link ModifyAccessPeriodRequest} {@link ModifyAccessPeriodResponse} */
  ModifyAccessPeriod(data: ModifyAccessPeriodRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessPeriodResponse>;
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
  /** 修改地域封禁状态 {@link ModifyAreaBanStatusRequest} {@link ModifyAreaBanStatusResponse} */
  ModifyAreaBanStatus(data: ModifyAreaBanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAreaBanStatusResponse>;
  /** 修改规则引擎白名单 {@link ModifyAttackWhiteRuleRequest} {@link ModifyAttackWhiteRuleResponse} */
  ModifyAttackWhiteRule(data: ModifyAttackWhiteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAttackWhiteRuleResponse>;
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
  /** 修改实例的QPS弹性计费开关 {@link ModifyInstanceElasticModeRequest} {@link ModifyInstanceElasticModeResponse} */
  ModifyInstanceElasticMode(data: ModifyInstanceElasticModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceElasticModeResponse>;
  /** 修改实例名称 {@link ModifyInstanceNameRequest} {@link ModifyInstanceNameResponse} */
  ModifyInstanceName(data: ModifyInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNameResponse>;
  /** 设置套餐实例的弹性qps上限 {@link ModifyInstanceQpsLimitRequest} {@link ModifyInstanceQpsLimitResponse} */
  ModifyInstanceQpsLimit(data: ModifyInstanceQpsLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceQpsLimitResponse>;
  /** 修改实例的自动续费开关 {@link ModifyInstanceRenewFlagRequest} {@link ModifyInstanceRenewFlagResponse} */
  ModifyInstanceRenewFlag(data: ModifyInstanceRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceRenewFlagResponse>;
  /** 设置某个domain下基础安全模块的开关 {@link ModifyModuleStatusRequest} {@link ModifyModuleStatusResponse} */
  ModifyModuleStatus(data: ModifyModuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModuleStatusResponse>;
  /** 修改防护对象 {@link ModifyObjectRequest} {@link ModifyObjectResponse} */
  ModifyObject(data: ModifyObjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyObjectResponse>;
  /** 获取基础安全防护（WAF开关）状态 {@link ModifyProtectionStatusRequest} {@link ModifyProtectionStatusResponse} */
  ModifyProtectionStatus(data: ModifyProtectionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProtectionStatusResponse>;
  /** 编辑SaaS型WAF域名 {@link ModifySpartaProtectionRequest} {@link ModifySpartaProtectionResponse} */
  ModifySpartaProtection(data: ModifySpartaProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySpartaProtectionResponse>;
  /** 设置waf防护状态 {@link ModifySpartaProtectionModeRequest} {@link ModifySpartaProtectionModeResponse} */
  ModifySpartaProtectionMode(data: ModifySpartaProtectionModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySpartaProtectionModeResponse>;
  /** 修改用户防护规则等级 {@link ModifyUserLevelRequest} {@link ModifyUserLevelResponse} */
  ModifyUserLevel(data: ModifyUserLevelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserLevelResponse>;
  /** 修改用户防护规则 {@link ModifyUserSignatureRuleRequest} {@link ModifyUserSignatureRuleResponse} */
  ModifyUserSignatureRule(data: ModifyUserSignatureRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserSignatureRuleResponse>;
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
