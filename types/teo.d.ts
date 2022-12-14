/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 加速类型 */
declare interface AccelerateType {
  /** 加速开关。取值范围： on：打开;off：关闭。 */
  Switch: string;
}

/** 精准防护条件 */
declare interface AclCondition {
  /** 匹配字段，取值有：host：请求域名；sip：客户端IP；ua：User-Agent；cookie：会话 Cookie；cgi：CGI 脚本；xff：XFF 扩展头部；url：请求 URL；accept：请求内容类型；method：请求方式；header：请求头部；app_proto：应用层协议；sip_proto：网络层协议。 */
  MatchFrom: string;
  /** 匹配字符串。当 MatchFrom 为 header 时，可以填入 header 的 key 作为参数。 */
  MatchParam: string;
  /** 匹配关系，取值有：equal：字符串等于；not_equal：数值不等于；include：字符包含；not_include：字符不包含；match：ip匹配；not_match：ip不匹配；include_area：地域包含；is_empty：存在字段但值为空；not_exists：不存在关键字段；regexp：正则匹配；len_gt：数值大于；len_lt：数值小于；len_eq：数值等于；match_prefix：前缀匹配；match_suffix：后缀匹配；wildcard：通配符。 */
  Operator: string;
  /** 匹配内容。 */
  MatchContent: string;
}

/** ACL配置 */
declare interface AclConfig {
  /** 开关，取值有： on：开启； off：关闭。 */
  Switch: string;
  /** 用户自定义规则。 */
  AclUserRules: AclUserRule[];
}

/** 用户自定义规则 */
declare interface AclUserRule {
  /** 规则名。 */
  RuleName: string;
  /** 处罚动作，取值有：trans：放行；drop：拦截；monitor：观察；ban：IP封禁；redirect：重定向；page：指定页面；alg：Javascript挑战。 */
  Action: string;
  /** 规则状态，取值有：on：生效；off：失效。 */
  RuleStatus: string;
  /** 自定义规则。 */
  AclConditions: AclCondition[];
  /** 规则优先级，取值范围0-100。 */
  RulePriority: number;
  /** 规则Id。仅出参使用。 */
  RuleID?: number | null;
  /** 更新时间。仅出参使用。 */
  UpdateTime?: string | null;
  /** ip封禁的惩罚时间，取值范围0-2天。默认为0。 */
  PunishTime?: number | null;
  /** ip封禁的惩罚时间单位，取值有：second：秒；minutes：分；hour：小时。默认为second。 */
  PunishTimeUnit?: string | null;
  /** 自定义返回页面的名称。默认为空字符串。 */
  Name?: string | null;
  /** 自定义返回页面的实例id。默认为0。 */
  PageId?: number | null;
  /** 重定向时候的地址，必须为本用户接入的站点子域名。默认为空字符串。 */
  RedirectUrl?: string | null;
  /** 重定向时候的返回码。默认为0。 */
  ResponseCode?: number | null;
}

/** 规则引擎功能项操作，对于一种功能只对应下面三种类型的其中一种，RuleAction 数组中的每一项只能是其中一个类型，更多功能项的填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
declare interface Action {
  /** 常规功能操作，选择该类型的功能项有： 访问URL 重写（AccessUrlRedirect）； 回源 URL 重写 （UpstreamUrlRedirect）； QUIC（QUIC）； WebSocket （WebSocket）； 视频拖拽（VideoSeek）； Token 鉴权（Authentication）； 自定义CacheKey（CacheKey）； 节点缓存 TTL （Cache）； 浏览器缓存 TTL（MaxAge）； 离线缓存（OfflineCache）； 智能加速（SmartRouting）； 分片回源（RangeOriginPull）； HTTP/2 回源（UpstreamHttp2）； Host Header 重写（HostHeader）； 强制 HTTPS（ForceRedirect）； 回源 HTTPS（OriginPullProtocol）； 缓存预刷新（CachePrefresh）； 智能压缩（Compression）； Hsts； ClientIpHeader； TlsVersion； OcspStapling； HTTP/2 访问（Http2）； 回源跟随重定向(UpstreamFollowRedirect)。 */
  NormalAction?: NormalAction | null;
  /** 带有请求头/响应头的功能操作，选择该类型的功能项有： 修改 HTTP 请求头（RequestHeader）； 修改HTTP响应头（ResponseHeader）。 */
  RewriteAction?: RewriteAction | null;
  /** 带有状态码的功能操作，选择该类型的功能项有： 自定义错误页面（ErrorPage）； 状态码缓存 TTL（StatusCodeCache）。 */
  CodeAction?: CodeAction | null;
}

/** 描述键值对过滤器，用于条件过滤查询，支持模糊查询。例如过滤ID、名称、状态等。若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface AdvancedFilter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
  /** 是否启用模糊查询。 */
  Fuzzy?: boolean;
}

/** AI规则引擎防护 */
declare interface AiRule {
  /** AI规则引擎状态，取值有： smart_status_close：关闭； smart_status_open：拦截处置； smart_status_observe：观察处置。 */
  Mode: string;
}

/** 别称域名信息。 */
declare interface AliasDomain {
  /** 别称域名名称。 */
  AliasName: string;
  /** 站点 ID。 */
  ZoneId: string;
  /** 目标域名名称。 */
  TargetName: string;
  /** 别称域名状态，取值有： active：已生效； pending：部署中； conflict：被找回。 stop：已停用； */
  Status: string;
  /** 封禁模式，取值有： 0：未封禁； 11：合规封禁； 14：未备案封禁。 */
  ForbidMode: number;
  /** 别称域名创建时间。 */
  CreatedOn: string;
  /** 别称域名修改时间。 */
  ModifiedOn: string;
}

/** 应用代理实例 */
declare interface ApplicationProxy {
  /** 站点ID。 */
  ZoneId: string;
  /** 站点名称。 */
  ZoneName: string;
  /** 代理ID。 */
  ProxyId?: string;
  /** 当ProxyType=hostname时，表示域名或子域名；当ProxyType=instance时，表示代理名称。 */
  ProxyName: string;
  /** 四层代理模式，取值有：hostname：表示子域名模式；instance：表示实例模式。 */
  ProxyType: string;
  /** 调度模式，取值有：ip：表示Anycast IP调度；domain：表示CNAME调度。 */
  PlatType: string;
  /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。默认值：overseas */
  Area: string;
  /** 是否开启安全，取值有：0：关闭安全；1：开启安全。 */
  SecurityType: number;
  /** 是否开启加速，取值有：0：关闭加速；1：开启加速。 */
  AccelerateType: number;
  /** 会话保持时间。 */
  SessionPersistTime: number;
  /** 状态，取值有：online：启用；offline：停用；progress：部署中；stopping：停用中；fail：部署失败/停用失败。 */
  Status: string;
  /** 封禁状态，取值有：banned：已封禁;banning：封禁中；recover：已解封；recovering：解封禁中。 */
  BanStatus: string;
  /** 调度信息。 */
  ScheduleValue: string[];
  /** 当ProxyType=hostname时：表示代理加速唯一标识。 */
  HostId: string;
  /** Ipv6访问配置。 */
  Ipv6: Ipv6;
  /** 更新时间。 */
  UpdateTime: string;
  /** 规则列表。 */
  ApplicationProxyRules: ApplicationProxyRule[];
}

/** 应用代理规则 */
declare interface ApplicationProxyRule {
  /** 协议，取值有：TCP：TCP协议；UDP：UDP协议。 */
  Proto: string;
  /** 端口，支持格式：单个端口，如：80。端口段，如：81-82。表示81，82两个端口。注意：一条规则最多可填写20个端口。 */
  Port: string[];
  /** 源站类型，取值有：custom：手动添加；origins：源站组。 */
  OriginType: string;
  /** 源站信息：当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。 */
  OriginValue: string[];
  /** 规则ID。 */
  RuleId?: string;
  /** 状态，取值有：online：启用；offline：停用；progress：部署中；stopping：停用中；fail：部署失败/停用失败。 */
  Status?: string;
  /** 传递客户端IP，取值有：TOA：TOA（仅Proto=TCP时可选）；PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；PPV2：Proxy Protocol传递，协议版本V2；OFF：不传递。默认值：OFF。 */
  ForwardClientIp?: string;
  /** 是否开启会话保持，取值有：true：开启；false：关闭。默认值：false。 */
  SessionPersist?: boolean;
  /** 源站端口，支持格式：单端口，如：80。端口段：81-82，表示81，82两个端口。 */
  OriginPort?: string;
}

/** 站点归属信息 */
declare interface AscriptionInfo {
  /** 主机记录。 */
  Subdomain: string;
  /** 记录类型。 */
  RecordType: string;
  /** 记录值。 */
  RecordValue: string;
}

/** 安全Bot配置 */
declare interface BotConfig {
  /** bot开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 通用详细基础规则。如果为null，默认使用历史配置。 */
  BotManagedRule?: BotManagedRule;
  /** 用户画像规则。如果为null，默认使用历史配置。 */
  BotPortraitRule?: BotPortraitRule;
  /** Bot智能分析。如果为null，默认使用历史配置。 */
  IntelligenceRule?: IntelligenceRule | null;
}

/** Bot 规则，下列规则ID可参考接口 DescribeBotManagedRules返回的ID信息 */
declare interface BotManagedRule {
  /** 触发规则后的处置方式，取值有：drop：拦截；trans：放行；alg：Javascript挑战；monitor：观察。 */
  Action: string;
  /** 本规则的ID。仅出参使用。 */
  RuleID?: number;
  /** 放行的规则ID。默认所有规则不配置放行。 */
  TransManagedIds?: number[] | null;
  /** JS挑战的规则ID。默认所有规则不配置JS挑战。 */
  AlgManagedIds?: number[] | null;
  /** 数字验证码的规则ID。默认所有规则不配置数字验证码。 */
  CapManagedIds?: number[] | null;
  /** 观察的规则ID。默认所有规则不配置观察。 */
  MonManagedIds?: number[] | null;
  /** 拦截的规则ID。默认所有规则不配置拦截。 */
  DropManagedIds?: number[] | null;
}

/** bot 用户画像规则 */
declare interface BotPortraitRule {
  /** 本功能的开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 本规则的ID。仅出参使用。 */
  RuleID?: number;
  /** JS挑战的规则ID。默认所有规则不配置JS挑战。 */
  AlgManagedIds?: number[] | null;
  /** 数字验证码的规则ID。默认所有规则不配置数字验证码。 */
  CapManagedIds?: number[] | null;
  /** 观察的规则ID。默认所有规则不配置观察。 */
  MonManagedIds?: number[] | null;
  /** 拦截的规则ID。默认所有规则不配置拦截。 */
  DropManagedIds?: number[] | null;
}

/** cc配置项。 */
declare interface CC {
  /** Waf开关，取值为： on：开启； off：关闭。 */
  Switch: string;
  /** 策略ID。 */
  PolicyId?: number;
}

/** 缓存时间设置 */
declare interface Cache {
  /** 缓存配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 缓存过期时间设置。单位为秒，最大可设置为 365 天。 */
  CacheTime?: number | null;
  /** 是否开启强制缓存，取值有：on：开启；off：关闭。 */
  IgnoreCacheControl?: string | null;
}

/** 缓存规则配置。 */
declare interface CacheConfig {
  /** 缓存配置。 */
  Cache?: Cache | null;
  /** 不缓存配置。 */
  NoCache?: NoCache | null;
  /** 遵循源站配置。 */
  FollowOrigin?: FollowOrigin | null;
}

/** 缓存键配置。 */
declare interface CacheKey {
  /** 是否开启全路径缓存，取值有：on：开启全路径缓存（即关闭参数忽略）；off：关闭全路径缓存（即开启参数忽略）。 */
  FullUrlCache?: string | null;
  /** 是否忽略大小写缓存，取值有：on：忽略；off：不忽略。 */
  IgnoreCase?: string | null;
  /** CacheKey中包含请求参数。 */
  QueryString?: QueryString | null;
}

/** 缓存预刷新 */
declare interface CachePrefresh {
  /** 缓存预刷新配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 缓存预刷新百分比，取值范围：1-99。 */
  Percent?: number | null;
}

/** 回源时携带客户端IP所属地域信息，值的格式为ISO-3166-1两位字母代码。 */
declare interface ClientIpCountry {
  /** 配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 存放客户端IP所属地域信息的请求头名称，当Switch=on时有效。为空则使用默认值：EO-Client-IPCountry。 */
  HeaderName?: string;
}

/** 存储客户端请求IP的头部信息配置 */
declare interface ClientIpHeader {
  /** 配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 回源时，存放客户端IP的请求头名称。为空则使用默认值：X-Forwarded-IP。 */
  HeaderName?: string | null;
}

/** 客户端规则信息 */
declare interface ClientRule {
  /** 客户端ip。 */
  ClientIp: string;
  /** 规则类型。 */
  RuleType: string;
  /** 规则id。 */
  RuleId: number | null;
  /** 规则描述。 */
  Description: string | null;
  /** 封禁状态，取值有：block ：封禁 ；allow ：放行 。 */
  IpStatus: string;
  /** 封禁时间，采用unix秒级时间戳。 */
  BlockTime: number;
  /** 每条数据的唯一标识id。 */
  Id: string;
}

/** 日志任务主题信息 */
declare interface ClsLogTopicInfo {
  /** 任务名。 */
  TaskName: string;
  /** 站点名称。 */
  ZoneName: string;
  /** 日志集ID。 */
  LogSetId: string;
  /** 日志主题ID。 */
  TopicId: string;
  /** 任务类型。 */
  EntityType: string;
  /** 任务主题保存时间。 */
  Period: number;
  /** 任务主题是否开启。 */
  Enabled: boolean;
  /** 任务主题是否异常。 */
  Deleted: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 推送目标地址,取值有：cls: 推送到cls；custom_enpoint: 自定义推送地址。 */
  Target: string;
  /** 日志集所属地区。 */
  LogSetRegion: string | null;
  /** 站点id。 */
  ZoneId: string | null;
  /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
  Area: string;
  /** 推送任务类型，取值有：cls：推送到cls；custom_endpoint：推送到自定义接口。 */
  LogSetType: string;
}

/** 规则引擎带有状态码的动作 */
declare interface CodeAction {
  /** 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
  Action: string;
  /** 操作参数。 */
  Parameters: RuleCodeActionParams[];
}

/** 智能压缩配置。 */
declare interface Compression {
  /** 智能压缩配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 支持的压缩算法列表，取值有：brotli：brotli算法；gzip：gzip算法。 */
  Algorithms?: string[] | null;
}

/** DDoS配置 */
declare interface DDoS {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** https 服务端证书配置 */
declare interface DefaultServerCertInfo {
  /** 服务器证书 ID。 */
  CertId: string | null;
  /** 证书备注名。 */
  Alias?: string | null;
  /** 证书类型，取值有：default: 默认证书;upload:用户上传;managed:腾讯云托管。 */
  Type?: string | null;
  /** 证书过期时间。 */
  ExpireTime?: string | null;
  /** 证书生效时间。 */
  EffectiveTime?: string | null;
  /** 证书公用名。 */
  CommonName?: string | null;
  /** 证书SAN域名。 */
  SubjectAltName?: string[] | null;
  /** 部署状态，取值有：processing: 部署中；deployed: 已部署；failed: 部署失败。 */
  Status?: string | null;
  /** Status为失败时,此字段返回失败原因。 */
  Message?: string | null;
  /** 证书算法。 */
  SignAlgo?: string | null;
}

/** 域名配置信息 */
declare interface DetailHost {
  /** 站点ID。 */
  ZoneId: string;
  /** 加速服务状态，取值为： process：部署中； online：已启动； offline：已关闭。 */
  Status: string;
  /** 域名。 */
  Host: string;
  /** 站点名称。 */
  ZoneName: string;
  /** 分配的Cname域名 */
  Cname: string;
  /** 资源ID。 */
  Id: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 锁状态。 */
  Lock: number;
  /** 域名状态类型。 */
  Mode: number;
  /** 域名加速地域，取值有： global：全球； mainland：中国大陆； overseas：境外区域。 */
  Area: string;
  /** 加速类型配置项。 */
  AccelerateType: AccelerateType | null;
  /** Https配置项。 */
  Https: Https | null;
  /** 缓存配置项。 */
  CacheConfig: CacheConfig | null;
  /** 源站配置项。 */
  Origin: Origin | null;
  /** 安全类型。 */
  SecurityType: SecurityType | null;
  /** 缓存键配置项。 */
  CacheKey: CacheKey | null;
  /** 智能压缩配置项。 */
  Compression: Compression | null;
  /** Waf防护配置项。 */
  Waf: Waf | null;
  /** CC防护配置项。 */
  CC: CC | null;
  /** DDoS防护配置。 */
  DDoS: DDoS | null;
  /** 智能路由配置项。 */
  SmartRouting: SmartRouting | null;
  /** Ipv6访问配置项。 */
  Ipv6: Ipv6 | null;
  /** 回源时是否携带客户端IP所属地域信息的配置。 */
  ClientIpCountry: ClientIpCountry | null;
}

/** 最新IP白名单列表相比于当前IP白名单列表的区别 */
declare interface DiffIPWhitelist {
  /** 最新IP白名单列表。 */
  LatestIPWhitelist: IPWhitelist;
  /** 最新IP白名单列表相比于当前IP白名单列表，新增部分。 */
  AddedIPWhitelist: IPWhitelist;
  /** 最新IP白名单列表相比于当前IP白名单列表，删减部分。 */
  RemovedIPWhitelist: IPWhitelist;
  /** 最新IP白名单列表相比于当前IP白名单列表，不变部分。 */
  NoChangeIPWhitelist: IPWhitelist;
}

/** 拨测分地域统计数据 */
declare interface DistrictStatistics {
  /** ISO 3166-2 国家/地区简写，详情请参考[ISO 3166-2](https://zh.m.wikipedia.org/zh-hans/ISO_3166-2)。 */
  Alpha2: string;
  /** 整体拨测用时，单位ms。 */
  LoadTime: number;
}

/** Dns统计曲线数据项 */
declare interface DnsData {
  /** 时间。 */
  Time: string;
  /** 数值。 */
  Value: number;
}

/** 拦截页面的总体配置，用于配置各个模块的拦截后行为。 */
declare interface DropPageConfig {
  /** 配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** Waf(托管规则)模块的拦截页面配置。如果为null，默认使用历史配置。 */
  WafDropPageDetail?: DropPageDetail | null;
  /** 自定义页面的拦截页面配置。如果为null，默认使用历史配置。 */
  AclDropPageDetail?: DropPageDetail | null;
}

/** 拦截页面的配置信息 */
declare interface DropPageDetail {
  /** 拦截页面的唯一Id。系统默认包含一个自带拦截页面，Id值为0。该Id可通过创建拦截页面接口进行上传获取。如传入0，代表使用系统默认拦截页面。 */
  PageId: number;
  /** 拦截页面的HTTP状态码。状态码范围是100-600。 */
  StatusCode: number;
  /** 页面文件名或url。 */
  Name: string;
  /** 页面的类型，取值有： file：页面文件内容； url：上传的url地址。 */
  Type: string;
}

/** 例外规则，用于配置需要跳过特定场景的规则 */
declare interface ExceptConfig {
  /** 配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 例外规则详情。如果为null，默认使用历史配置。 */
  ExceptUserRules?: ExceptUserRule[] | null;
}

/** 例外规则的配置，包含生效的条件，生效的范围。 */
declare interface ExceptUserRule {
  /** 规则名称，不可使用中文。 */
  RuleName: string;
  /** 规则的处置方式，当前仅支持skip：跳过全部托管规则。 */
  Action: string;
  /** 规则生效状态，取值有：on：生效；off：失效。 */
  RuleStatus: string;
  /** 规则ID。仅出参使用。默认由底层生成。 */
  RuleID?: number;
  /** 更新时间，如果为null，默认由底层按当前时间生成。 */
  UpdateTime?: string | null;
  /** 匹配条件。 */
  ExceptUserRuleConditions?: ExceptUserRuleCondition[] | null;
  /** 规则生效的范围。 */
  ExceptUserRuleScope?: ExceptUserRuleScope | null;
  /** 优先级，取值范围0-100。如果为null，默认由底层设置为0。 */
  RulePriority?: number;
}

/** 例外规则生效的具体条件。 */
declare interface ExceptUserRuleCondition {
  /** 匹配项，取值有：host：请求域名；sip：客户端IP；ua：User-Agent；cookie：会话 Cookie；cgi：CGI 脚本；xff：XFF 扩展头部；url：请求 URL；accept：请求内容类型；method：请求方式；header：请求头部；sip_proto：网络层协议。 */
  MatchFrom?: string;
  /** 匹配项的参数。仅当 MatchFrom 为 header 时，可以使用本参数，值可填入 header 的 key 作为参数。 */
  MatchParam?: string;
  /** 匹配操作符，取值有：equal：字符串等于；not_equal：数值不等于；include：字符包含；not_include：字符不包含；match：ip匹配；not_match：ip不匹配；include_area：地域包含；is_empty：存在字段但值为空；not_exists：不存在关键字段；regexp：正则匹配；len_gt：数值大于；len_lt：数值小于；len_eq：数值等于；match_prefix：前缀匹配；match_suffix：后缀匹配；wildcard：通配符。 */
  Operator?: string;
  /** 匹配值。 */
  MatchContent?: string;
}

/** 例外规则的生效范围。 */
declare interface ExceptUserRuleScope {
  /** 例外规则类型。其中complete模式代表全量数据进行例外，partial模式代表可选择指定模块指定字段进行例外，该字段取值有：complete：完全跳过模式；partial：部分跳过模式。 */
  Type?: string;
  /** 生效的模块，该字段取值有：waf：托管规则；cc：速率限制规则；bot：Bot防护。 */
  Modules?: string[] | null;
  /** 跳过部分规则ID的例外规则详情。如果为null，默认使用历史配置。 */
  PartialModules?: PartialModule[] | null;
  /** 跳过具体字段不去扫描的例外规则详情。如果为null，默认使用历史配置。 */
  SkipConditions?: SkipCondition[] | null;
}

/** 失败原因 */
declare interface FailReason {
  /** 失败原因。 */
  Reason: string;
  /** 处理失败的资源列表。 */
  Targets: string[];
}

/** 站点归属权校验——文件校验信息。 */
declare interface FileAscriptionInfo {
  /** 文件校验目录。 */
  IdentifyPath: string;
  /** 文件校验内容。 */
  IdentifyContent: string;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等。若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 缓存遵循源站配置 */
declare interface FollowOrigin {
  /** 遵循源站配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 源站未返回 Cache-Control 头时, 设置默认的缓存时间 */
  DefaultCacheTime?: number | null;
  /** 源站未返回 Cache-Control 头时, 设置缓存/不缓存 */
  DefaultCache?: string | null;
  /** 源站未返回 Cache-Control 头时, 使用/不使用默认缓存策略 */
  DefaultCacheStrategy?: string | null;
}

/** 访问协议强制https跳转配置 */
declare interface ForceRedirect {
  /** 访问强制跳转配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 重定向状态码，取值有：301：301跳转；302：302跳转。 */
  RedirectStatusCode?: number | null;
}

/** Grpc配置项 */
declare interface Grpc {
  /** 是否开启Grpc配置，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 刷新预热附带的头部信息 */
declare interface Header {
  /** HTTP头部名称。 */
  Name: string;
  /** HTTP头部值。 */
  Value: string;
}

/** Hsts配置 */
declare interface Hsts {
  /** 是否开启，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** MaxAge数值。单位为秒，最大值为1天。 */
  MaxAge?: number | null;
  /** 是否包含子域名，取值有：on：开启；off：关闭。 */
  IncludeSubDomains?: string | null;
  /** 是否开启预加载，取值有：on：开启；off：关闭。 */
  Preload?: string | null;
}

/** 域名 https 加速配置，默认为关闭状态 */
declare interface Https {
  /** http2 配置开关，取值有：on：开启；off：关闭。 */
  Http2?: string | null;
  /** OCSP 配置开关，取值有：on：开启；off：关闭。 */
  OcspStapling?: string | null;
  /** Tls版本设置，取值有：TLSv1：TLSv1版本；TLSV1.1：TLSv1.1版本；TLSV1.2：TLSv1.2版本；TLSv1.3：TLSv1.3版本。修改时必须开启连续的版本。 */
  TlsVersion?: string[] | null;
  /** HSTS 配置。 */
  Hsts?: Hsts | null;
  /** 证书配置。 */
  CertInfo?: ServerCertInfo[] | null;
  /** 申请类型，取值有：apply：托管EdgeOne；none：不托管EdgeOne。不填，默认取值为none。 */
  ApplyType?: string | null;
}

/** 源站防护IP白名单 */
declare interface IPWhitelist {
  /** IPv4列表。 */
  IPv4: string[];
  /** IPv6列表。 */
  IPv6: string[];
}

/** 站点验证信息 */
declare interface Identification {
  /** 站点名称。 */
  ZoneName: string;
  /** 验证状态，取值有： pending：验证中； finished：验证完成。 */
  Status: string;
  /** 站点归属权校验：Dns校验信息。 */
  Ascription: AscriptionInfo;
  /** 域名当前的 NS 记录。 */
  OriginalNameServers: string[] | null;
  /** 站点归属权校验：文件校验信息。 */
  FileAscription: FileAscriptionInfo;
}

/** 智能分析规则 */
declare interface IntelligenceRule {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch?: string | null;
  /** 规则详情。 */
  IntelligenceRuleItems?: IntelligenceRuleItem[] | null;
}

/** Bot智能分析规则详情 */
declare interface IntelligenceRuleItem {
  /** 智能分析标签，取值有：evil_bot：恶意bot；suspect_bot：疑似bot；good_bot：良好bot；normal：正常请求。 */
  Label: string;
  /** 触发智能分析标签对应的处置方式，取值有：drop：拦截；trans：放行；alg：Javascript挑战；captcha：数字验证码；monitor：观察。 */
  Action: string;
}

/** IP黑白名单及IP区域控制配置 */
declare interface IpTableConfig {
  /** 开关，取值有：on：开启；off：关闭； */
  Switch: string | null;
  /** 基础管控规则。如果为null，默认使用历史配置。 */
  IpTableRules?: IpTableRule[] | null;
}

/** IP黑白名单详细规则 */
declare interface IpTableRule {
  /** 动作，取值有： drop：拦截； trans：放行； monitor：观察。 */
  Action: string;
  /** 根据类型匹配，取值有：ip：对ip进行匹配；area：对ip所属地区匹配。 */
  MatchFrom: string;
  /** 规则的匹配方式，默认为空代表等于。取值有： is_emty：配置为空； not_exists：配置为不存在； include：包含； not_include：不包含； equal：等于； not_equal：不等于。 */
  Operator?: string | null;
  /** 规则id。仅出参使用。 */
  RuleID?: number;
  /** 更新时间。仅出参使用。 */
  UpdateTime?: string;
  /** 规则启用状态，当返回为null时，为启用。取值有： on：启用； off：未启用。 */
  Status?: string | null;
  /** 规则名。 */
  RuleName?: string | null;
  /** 匹配内容。当 Operator为is_emty 或not_exists时，此值允许为空。 */
  MatchContent?: string;
}

/** Ipv6访问配置 */
declare interface Ipv6 {
  /** Ipv6访问功能配置，取值有：on：开启Ipv6访问功能；off：关闭Ipv6访问功能。 */
  Switch: string;
}

/** 离线日志详细信息 */
declare interface L4OfflineLog {
  /** 日志打包开始时间。 */
  LogTime: number;
  /** 四层实例ID。 */
  ProxyId: string | null;
  /** 原始大小 单位byte。 */
  Size: number;
  /** 下载地址。 */
  Url: string;
  /** 日志数据包名。 */
  LogPacketName: string;
  /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
  Area: string;
}

/** 离线日志详细信息 */
declare interface L7OfflineLog {
  /** 日志打包开始时间。 */
  LogTime: number;
  /** 子域名。 */
  Domain: string;
  /** 原始大小，单位byte。 */
  Size: number;
  /** 下载地址。 */
  Url: string;
  /** 日志数据包名。 */
  LogPacketName: string;
  /** 加速区域，取值有：mainland：中国大陆境内; overseas：全球（不含中国大陆）。 */
  Area: string;
}

/** 日志集基本信息 */
declare interface LogSetInfo {
  /** 日志集所属地区。 */
  LogSetRegion: string;
  /** 日志集名 */
  LogSetName: string;
  /** 日志集Id */
  LogSetId: string;
  /** 该日志集是否已被删除, 可选的值有：no: 日志集没有被删除；yes: 日志集已经被删除； */
  Deleted: string;
}

/** 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态 */
declare interface MaxAge {
  /** 是否遵循源站，取值有：on：遵循源站，忽略MaxAge 时间设置；off：不遵循源站，使用MaxAge 时间设置。 */
  FollowOrigin?: string;
  /** MaxAge 时间设置，单位秒，最大365天。注意：时间为0，即不缓存。 */
  MaxAgeTime?: number;
}

/** 不缓存配置 */
declare interface NoCache {
  /** 不缓存配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 规则引擎常规类型的动作 */
declare interface NormalAction {
  /** 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
  Action: string;
  /** 参数。 */
  Parameters: RuleNormalActionParams[];
}

/** 离线缓存是否开启 */
declare interface OfflineCache {
  /** 离线缓存是否开启，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 站点拨测优化建议 */
declare interface OptimizeAction {
  /** 站点性能优化配置项，取值有：Http2；Http3；Brotli。 */
  Name: string;
  /** 网络环境。 */
  Connectivity: string;
  /** 开启配置项后，预估性能优化效果，单位ms。 */
  Value: number;
  /** 开启配置项后，预估性能提升比例，单位%。 */
  Ratio: number;
}

/** 源站配置。 */
declare interface Origin {
  /** 主源站列表。 */
  Origins?: string[] | null;
  /** 备源站列表。 */
  BackupOrigins?: string[] | null;
  /** 回源协议配置，取值有：http：强制 http 回源；follow：协议跟随回源；https：强制 https 回源。 */
  OriginPullProtocol?: string | null;
  /** 源站为腾讯云COS时，是否为私有访问bucket，取值有：on：私有访问；off：公共访问。 */
  CosPrivateAccess?: string | null;
}

/** 源站组信息 */
declare interface OriginGroup {
  /** 站点ID。 */
  ZoneId: string;
  /** 站点名称。 */
  ZoneName: string;
  /** 源站组ID。 */
  OriginGroupId: string;
  /** 源站类型，取值有：self：自有源站；third_party：第三方源站；cos：腾讯云COS源站。 */
  OriginType: string;
  /** 源站组名称。 */
  OriginGroupName: string;
  /** 源站配置类型，当OriginType=self时，取值有：area：按区域配置；weight： 按权重配置。proto： 按HTTP协议配置。当OriginType=third_party/cos时放空。 */
  ConfigurationType: string;
  /** 源站记录信息。 */
  OriginRecords: OriginRecord[];
  /** 源站组更新时间。 */
  UpdateTime: string;
  /** 当OriginType=self时，表示回源Host。 */
  HostHeader: string | null;
}

/** 源站防护信息 */
declare interface OriginProtectionInfo {
  /** 站点ID。 */
  ZoneId: string;
  /** 域名列表。 */
  Hosts: string[];
  /** 代理ID列表。 */
  ProxyIds: string[];
  /** 当前版本的IP白名单。 */
  CurrentIPWhitelist: IPWhitelist | null;
  /** 该站点是否需要更新源站白名单，取值有：true ：需要更新IP白名单 ；false ：无需更新IP白名单。 */
  NeedUpdate: boolean;
  /** 源站防护状态，取值有：online ：源站防护启用中 ；offline ：源站防护已停用 ；nonactivate ：源站防护未激活，仅在从未使用过源站防护功能的站点调用中返回。 */
  Status: string;
  /** 站点套餐是否支持源站防护，取值有：true ：支持 ；false ：不支持。 */
  PlanSupport: boolean;
  /** 最新IP白名单与当前IP白名单的对比。 */
  DiffIPWhitelist: DiffIPWhitelist | null;
}

/** 源站组记录 */
declare interface OriginRecord {
  /** 源站记录值，不包含端口信息，可以为：IPv4，IPv6，域名格式。 */
  Record: string;
  /** 源站记录ID。 */
  RecordId?: string;
  /** 源站端口，取值范围：[1-65535]。 */
  Port?: number;
  /** 当源站配置类型ConfigurationType=weight时，表示权重。不配置权重信息时，所有源站组记录统一填写为0或者不填写，表示多个源站轮询回源。配置权重信息时，取值为[1-100]，多个源站权重总和应为100，表示多个源站按照权重回源。当源站配置类型ConfigurationType=proto时，表示权重。不配置权重信息时，所有源站组记录统一填写为0或者不填写，表示多个源站轮询回源。配置权重信息时，取值为[1-100]，源站组内Proto相同的多个源站权重总和应为100，表示多个源站按照权重回源。 */
  Weight?: number;
  /** 当源站配置类型ConfigurationType=proto时，表示源站的协议类型，将按照客户端请求协议回到相应的源站，取值有：http：HTTP协议源站；https：HTTPS协议源站。 */
  Proto?: string;
  /** 当源站配置类型ConfigurationType=area时，表示区域，为空表示全部地区。取值为iso-3166中alpha-2编码或者大洲区域代码。大洲区域代码取值为：Asia：亚洲；Europe：欧洲；Africa：非洲；Oceania：大洋洲；Americas：美洲。源站组记录中，至少需要有一项为全部地区。 */
  Area?: string[];
  /** 当源站类型OriginType=third_part时有效是否私有鉴权，取值有：true：使用私有鉴权；false：不使用私有鉴权。不填写，默认值为：false。 */
  Private?: boolean;
  /** 当源站类型Private=true时有效，表示私有鉴权使用参数。 */
  PrivateParameters?: PrivateParameter[];
}

/** 例外规则的详细模块配置。 */
declare interface PartialModule {
  /** 模块名称，取值为：waf：托管规则。 */
  Module?: string;
  /** 模块下的需要例外的具体规则ID列表。 */
  Include?: number[] | null;
}

/** edgeone套餐信息 */
declare interface PlanInfo {
  /** 结算货币类型，取值有： CNY ：人民币结算； USD ：美元结算。 */
  Currency: string;
  /** 套餐所含流量，该流量数值为安全加速流量，内容加速流量和智能加速流量的总和（单位：字节）。 */
  Flux: number;
  /** 结算周期，取值有： y ：按年结算； m ：按月结算； h ：按小时结算； M ：按分钟结算； s ：按秒结算。 */
  Frequency: string;
  /** 套餐类型，取值有： sta ：全球内容分发网络（不包括中国大陆）标准版套餐； sta_with_bot ：全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理； sta_cm ：中国大陆内容分发网络标准版套餐； sta_cm_with_bot ：中国大陆内容分发网络标准版套餐附带bot管理； sta_global ：全球内容分发网络（包括中国大陆）标准版套餐； sta_global_with_bot ：全球内容分发网络（包括中国大陆）标准版套餐附带bot管理； ent ：全球内容分发网络（不包括中国大陆）企业版套餐； ent_with_bot ： 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理； ent_cm ：中国大陆内容分发网络企业版套餐； ent_cm_with_bot ：中国大陆内容分发网络企业版套餐附带bot管理； ent_global ：全球内容分发网络（包括中国大陆）企业版套餐； ent_global_with_bot ：全球内容分发网络（包括中国大陆）企业版套餐附带bot管理。 */
  PlanType: string;
  /** 套餐价格（单位：分）。 */
  Price: number;
  /** 套餐所含请求次数，该请求次数为安全加速请求次数。（单位：次）。 */
  Request: number;
  /** 套餐所能绑定的站点个数。 */
  SiteNumber: number;
  /** 套餐加速区域类型，取值有： mainland ：中国大陆； overseas ：全球（不包括中国大陆）； global ：全球（包括中国大陆）。 */
  Area: string;
}

/** POST请求上传文件流式传输最大限制 */
declare interface PostMaxSize {
  /** 是否开启POST请求上传文件限制，平台默认为限制为32MB，取值有：on：开启限制；off：关闭限制。 */
  Switch: string;
  /** 最大限制，取值在1MB和500MB之间。单位字节。 */
  MaxSize?: number | null;
}

/** 源站记录私有鉴权参数 */
declare interface PrivateParameter {
  /** 私有鉴权参数名称，取值有：AccessKeyId：鉴权参数Access Key ID；SecretAccessKey：鉴权参数Secret Access Key。 */
  Name: string;
  /** 私有鉴权参数值。 */
  Value: string;
}

/** 查询条件 */
declare interface QueryCondition {
  /** 筛选条件的key。 */
  Key: string;
  /** 查询条件操作符，操作类型有：equals: 等于；notEquals: 不等于；include: 包含；notInclude: 不包含; startWith: 开始的值是value；notStartWith: 不以value的值开始；endWith: 结尾是value值；notEndWith: 不以value的值结尾。 */
  Operator: string;
  /** 筛选条件的值。 */
  Value: string[];
}

/** CacheKey中包含请求参数 */
declare interface QueryString {
  /** CacheKey是否由QueryString组成，取值有：on：是；off：否。 */
  Switch: string;
  /** CacheKey使用QueryString的方式，取值有：includeCustom：使用部分url参数；excludeCustom：排除部分url参数。 */
  Action?: string | null;
  /** 使用/排除的url参数数组。 */
  Value?: string[] | null;
}

/** Quic配置项 */
declare interface Quic {
  /** 是否开启Quic配置，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 刷新/预热 可用量及配额 */
declare interface Quota {
  /** 单次批量提交配额上限。 */
  Batch: number;
  /** 每日提交配额上限。 */
  Daily: number;
  /** 每日剩余的可提交配额。 */
  DailyAvailable: number;
  /** 刷新预热缓存类型，取值有： purge_prefix：按前缀刷新； purge_url：按URL刷新； purge_host：按Hostname刷新； purge_all：刷新全部缓存内容； purge_cache_tag：按CacheTag刷新； prefetch_url：按URL预热。 */
  Type: string;
}

/** RateLimit配置 */
declare interface RateLimitConfig {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 速率限制-用户规则列表。如果为null，默认使用历史配置。 */
  RateLimitUserRules?: RateLimitUserRule[];
  /** 速率限制模板功能。如果为null，默认使用历史配置。 */
  RateLimitTemplate?: RateLimitTemplate | null;
  /** 智能客户端过滤。如果为null，默认使用历史配置。 */
  RateLimitIntelligence?: RateLimitIntelligence | null;
}

/** 智能客户端过滤 */
declare interface RateLimitIntelligence {
  /** 功能开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 执行动作，取值有：monitor：观察；alg：挑战。 */
  Action: string;
  /** 规则id，仅出参使用。 */
  RuleId?: number;
}

/** 速率限制模板 */
declare interface RateLimitTemplate {
  /** 模板等级名称，取值有：sup_loose：超级宽松；loose：宽松；emergency：紧急；normal：适中；strict：严格；close：关闭，仅精准速率限制生效。 */
  Mode: string;
  /** 模板处置方式，取值有：alg：JavaScript挑战；monitor：观察。不填写默认取alg。 */
  Action?: string;
  /** 模板值详情。仅出参返回。 */
  RateLimitTemplateDetail?: RateLimitTemplateDetail;
}

/** 模板当前详细配置 */
declare interface RateLimitTemplateDetail {
  /** 模板等级名称，取值有：sup_loose：超级宽松；loose：宽松；emergency：紧急；normal：适中；strict：严格；close：关闭，仅精准速率限制生效。 */
  Mode: string | null;
  /** 唯一id。 */
  ID?: number;
  /** 模板处置方式，取值有：alg：JavaScript挑战；monitor：观察。 */
  Action?: string | null;
  /** 惩罚时间，取值范围0-2天，单位秒。 */
  PunishTime?: number | null;
  /** 统计阈值，单位是次，取值范围0-4294967294。 */
  Threshold?: number;
  /** 统计周期，取值范围0-120秒。 */
  Period?: number;
}

/** RateLimit规则 */
declare interface RateLimitUserRule {
  /** 速率限制统计阈值，单位是次，取值范围0-4294967294。 */
  Threshold: number;
  /** 速率限制统计时间，取值范围 10/20/30/40/50/60 单位是秒。 */
  Period: number;
  /** 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。 */
  RuleName: string;
  /** 处置动作，取值有：monitor：观察；drop：拦截；alg：JavaScript挑战。 */
  Action: string;
  /** 惩罚时长，0-2天。 */
  PunishTime: number;
  /** 处罚时长单位，取值有：second：秒；minutes：分钟；hour：小时。 */
  PunishTimeUnit: string;
  /** 规则状态，取值有：on：生效；off：不生效。默认on生效。 */
  RuleStatus: string;
  /** 规则详情。 */
  AclConditions: AclCondition[];
  /** 规则权重，取值范围0-100。 */
  RulePriority: number;
  /** 规则id。仅出参使用。 */
  RuleID?: number | null;
  /** 过滤词，取值有：sip：客户端ip。 */
  FreqFields?: string[] | null;
  /** 更新时间。 */
  UpdateTime?: string | null;
  /** 统计范围，字段为null时，代表source_to_eo。取值有：source_to_eo：（响应）源站到EdgeOne。client_to_eo：（请求）客户端到EdgeOne； */
  FreqScope?: string[] | null;
}

/** 计费资源 */
declare interface Resource {
  /** 资源 ID。 */
  Id: string;
  /** 付费模式，取值有：0：后付费。 */
  PayMode: number;
  /** 创建时间。 */
  CreateTime: string;
  /** 生效时间。 */
  EnableTime: string;
  /** 失效时间。 */
  ExpireTime: string;
  /** 套餐状态，取值有：normal：正常；isolated：隔离；destroyed：销毁。 */
  Status: string;
  /** 询价参数。 */
  Sv: Sv[];
  /** 是否自动续费，取值有：0：默认状态；1：自动续费；2：不自动续费。 */
  AutoRenewFlag: number;
  /** 套餐关联资源 ID。 */
  PlanId: string;
  /** 地域，取值有：mainland：国内；overseas：海外。 */
  Area: string;
}

/** 规则引擎HTTP请求头/响应头类型的动作 */
declare interface RewriteAction {
  /** 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
  Action: string;
  /** 参数。 */
  Parameters: RuleRewriteActionParams[];
}

/** 规则引擎规则项，Conditions 数组内多个项的关系为 或，内层 Conditions 列表内多个项的关系为 且。 */
declare interface Rule {
  /** 执行的功能。 */
  Actions: Action[];
  /** 执行功能判断条件。注意：满足该数组内任意一项条件，功能即可执行。 */
  Conditions: RuleAndConditions[];
  /** 嵌套规则。 */
  SubRules?: SubRuleItem[];
}

/** 规则引擎条件且关系条件列表 */
declare interface RuleAndConditions {
  /** 规则引擎条件，该数组内所有项全部满足即判断该条件满足。 */
  Conditions: RuleCondition[];
}

/** 规则引擎可应用于匹配请求的设置详细信息，可选参数配置项 */
declare interface RuleChoicePropertiesItem {
  /** 参数名称。 */
  Name: string;
  /** 参数值类型。 CHOICE：参数值只能在 ChoicesValue 中选择； TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择； CUSTOM_NUM：参数值用户自定义，整型类型； CUSTOM_STRING：参数值用户自定义，字符串类型。 */
  Type: string;
  /** 参数值的可选值。注意：若参数值为用户自定义则该数组为空数组。 */
  ChoicesValue: string[];
  /** 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
  Min: number;
  /** 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
  Max: number;
  /** 参数值是否支持多选或者填写多个。 */
  IsMultiple: boolean;
  /** 是否允许为空。 */
  IsAllowEmpty: boolean;
  /** 特殊参数。 为 NULL：RuleAction 选择 NormalAction； 成员参数 Id 为 Action：RuleAction 选择 RewirteAction； 成员参数 Id 为 StatusCode：RuleAction 选择 CodeAction。 */
  ExtraParameter: RuleExtraParameter;
}

/** 规则引擎条件使用StatusCode字段动作参数 */
declare interface RuleCodeActionParams {
  /** 状态 Code。 */
  StatusCode: number;
  /** 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
  Name: string;
  /** 参数值。 */
  Values: string[];
}

/** 规则引擎条件参数 */
declare interface RuleCondition {
  /** 运算符，取值有： equal: 等于； notequal: 不等于； exist: 存在； notexist: 不存在。 */
  Operator: string;
  /** 匹配类型，取值有： filename：文件名； extension：文件后缀； host：HOST； full_url：URL Full，当前站点下完整 URL 路径，必须包含 HTTP 协议，Host 和 路径； url：URL Path，当前站点下 URL 路径的请求； client_country：客户端国家/地区； query_string：查询字符串，当前站点下请求URL的查询字符串； request_header：HTTP请求头部。 */
  Target: string;
  /** 对应匹配类型的参数值，仅在匹配类型为查询字符串或HTTP请求头并且运算符取值为存在或不存在时允许传空数组，对应匹配类型有： 文件后缀：jpg、txt等文件后缀； 文件名称：例如 foo.jpg 中的 foo； 全部（站点任意请求）： all； HOST：当前站点下的 host ，例如www.maxx55.com； URL Path：当前站点下 URL 路径的请求，例如：/example； URL Full：当前站点下完整 URL 请求，必须包含 HTTP 协议，Host 和 路径，例如：https://www.maxx55.cn/example； 客户端国家/地区：符合ISO3166标准的国家/地区标识； 查询字符串: 当前站点下URL请求中查询字符串的参数值，例如lang=cn&version=1中的cn和1； HTTP 请求头: HTTP请求头部字段值，例如Accept-Language:zh-CN,zh;q=0.9中的zh-CN,zh;q=0.9。 */
  Values?: string[];
  /** 是否忽略参数值的大小写，默认值为 false。 */
  IgnoreCase?: boolean;
  /** 对应匹配类型的参数名称，在 Target 值为以下取值时有效，有效时值不能为空： query_string（查询字符串）: 当前站点下URL请求中查询字符串的参数名称，例如lang=cn&version=1中的lang和version； request_header（HTTP 请求头）: HTTP请求头部字段名，例如Accept-Language:zh-CN,zh;q=0.9中的Accept-Language。 */
  Name?: string;
  /** 是否忽略参数名称的大小写，默认值为 false。 */
  IgnoreNameCase?: boolean | null;
}

/** 规则引擎参数详情信息，特殊参数类型。 */
declare interface RuleExtraParameter {
  /** 参数名，取值有： Action：修改 HTTP 头部所需参数，RuleAction 选择 RewirteAction； StatusCode：状态码相关功能所需参数，RuleAction 选择 CodeAction。 */
  Id: string;
  /** 参数值类型。 CHOICE：参数值只能在 Values 中选择； CUSTOM_NUM：参数值用户自定义，整型类型； CUSTOM_STRING：参数值用户自定义，字符串类型。 */
  Type: string;
  /** 可选参数值。注意：当 Id 的值为 StatusCode 时数组中的值为整型，填写参数值时请填写字符串的整型数值。 */
  Choices: string[];
}

/** 规则引擎规则详情 */
declare interface RuleItem {
  /** 规则ID。 */
  RuleId: string;
  /** 规则名称，名称字符串长度 1~255。 */
  RuleName: string;
  /** 规则状态，取值有: enable: 启用； disable: 未启用。 */
  Status: string;
  /** 规则内容。 */
  Rules: Rule[];
  /** 规则优先级, 值越大优先级越高，最小为 1。 */
  RulePriority: number;
  /** 规则标签。 */
  Tags: string[];
}

/** 规则引擎条件常规动作参数 */
declare interface RuleNormalActionParams {
  /** 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
  Name: string;
  /** 参数值。 */
  Values: string[];
}

/** 规则引擎条件 HTTP 请求/响应头操作动作参数。 */
declare interface RuleRewriteActionParams {
  /** 功能参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。现在只有三种取值： add：添加 HTTP 头部； set：重写 HTTP 头部； del：删除 HTTP 头部。 */
  Action: string;
  /** 参数名称。 */
  Name: string;
  /** 参数值。 */
  Values: string[];
}

/** 规则引擎可应用于匹配请求的设置详细信息。 */
declare interface RulesProperties {
  /** 值为参数名称。 */
  Name: string;
  /** 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
  Min: number;
  /** 参数值的可选值。注意：若参数值为用户自定义则该数组为空数组。 */
  ChoicesValue: string[];
  /** 参数值类型。 CHOICE：参数值只能在 ChoicesValue 中选择； TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择； OBJECT：参数值为对象类型，ChoiceProperties 为改对象类型关联的属性； CUSTOM_NUM：参数值用户自定义，整型类型； CUSTOM_STRING：参数值用户自定义，字符串类型。注意：当参数类型为 OBJECT 类型时，请注意参考 [示例2 参数为 OBJECT 类型的创建](https://tcloud4api.woa.com/document/product/1657/79382?!preview&!document=1) */
  Type: string;
  /** 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
  Max: number;
  /** 参数值是否支持多选或者填写多个。 */
  IsMultiple: boolean;
  /** 是否允许为空。 */
  IsAllowEmpty: boolean;
  /** 该参数对应的关联配置参数，属于调用接口的必填参数。注意：如果可选参数无特殊新增参数则该数组为空数组。 */
  ChoiceProperties: RuleChoicePropertiesItem[];
  /** 为 NULL：无特殊参数，RuleAction 选择 NormalAction； */
  ExtraParameter: RuleExtraParameter | null;
}

/** 规则引擎可应用于匹配请求的设置列表及其详细信息 */
declare interface RulesSettingAction {
  /** 功能名称，取值有： 访问URL 重写（AccessUrlRedirect）； 回源 URL 重写 （UpstreamUrlRedirect）； 自定义错误页面(ErrorPage)； QUIC（QUIC）； WebSocket （WebSocket）； 视频拖拽（VideoSeek）； Token 鉴权（Authentication）； 自定义CacheKey（CacheKey）； 节点缓存 TTL （Cache）； 浏览器缓存 TTL（MaxAge）； 离线缓存（OfflineCache）； 智能加速（SmartRouting）； 分片回源（RangeOriginPull）； HTTP/2 回源（UpstreamHttp2）； Host Header 重写（HostHeader）； 强制 HTTPS（ForceRedirect）； 回源 HTTPS（OriginPullProtocol）； 缓存预刷新（CachePrefresh）； 智能压缩（Compression）； 修改 HTTP 请求头（RequestHeader）； 修改HTTP响应头（ResponseHeader）; 状态码缓存 TTL（StatusCodeCache）; Hsts； ClientIpHeader； TlsVersion； OcspStapling。 */
  Action: string;
  /** 参数信息。 */
  Properties: RulesProperties[];
}

/** 客户端ip信息 */
declare interface SecClientIp {
  /** 客户端ip。 */
  ClientIp: string;
  /** 最大qps。 */
  RequestMaxQps: number;
  /** 请求数。 */
  RequestNum: number;
}

/** 安全数据Entry返回值 */
declare interface SecEntry {
  /** 查询维度值。 */
  Key: string;
  /** 查询维度下详细数据。 */
  Value: SecEntryValue[];
}

/** 安全数据维度值信息 */
declare interface SecEntryValue {
  /** 指标名称。 */
  Metric: string;
  /** 时序数据详情。 */
  Detail: TimingDataItem[];
  /** 最大值。 */
  Max: number;
  /** 平均值。 */
  Avg: number;
  /** 数据总和。 */
  Sum: number;
}

/** 命中规则信息 */
declare interface SecHitRuleInfo {
  /** 站点ID。 */
  ZoneId: string;
  /** 规则ID。 */
  RuleId: number;
  /** 规则类型名称。 */
  RuleTypeName: string;
  /** 命中时间，采用unix秒级时间戳。 */
  HitTime: number;
  /** 请求数。 */
  RequestNum: number;
  /** 规则描述。 */
  Description: string;
  /** 子域名。 */
  Domain: string;
  /** 执行动作（处置方式），取值有：trans ：通过 ；alg ：算法挑战 ；drop ：丢弃 ；ban ：封禁源ip ；redirect ：重定向 ；page ：返回指定页面 ；monitor ：观察 。 */
  Action: string;
  /** Bot标签，取值有:evil_bot：恶意Bot；suspect_bot：疑似Bot；good_bot：正常Bot；normal：正常请求；none：未分类。 */
  BotLabel: string;
  /** 规则是否启用。 */
  RuleEnabled: boolean;
  /** 规则是否启用监控告警。 */
  AlarmEnabled: boolean;
  /** 规则是否存在，取值有：true: 规则不存在；false: 规则存在。 */
  RuleDeleted: boolean;
}

/** 安全规则（cc/waf/bot）相关信息 */
declare interface SecRuleRelatedInfo {
  /** 规则ID。 */
  RuleId: number;
  /** 执行动作（处置方式），取值有：trans ：通过 ；alg ：算法挑战 ；drop ：丢弃 ；ban ：封禁源ip ；redirect ：重定向 ；page ：返回指定页面 ；monitor ：观察 。 */
  Action: string;
  /** 风险等级（waf日志中独有），取值有：high risk ：高危 ；middle risk ：中危 ；low risk ：低危 ；unkonw ：未知 。 */
  RiskLevel: string;
  /** 规则等级，取值有：normal ：正常 。 */
  RuleLevel: string;
  /** 规则描述。 */
  Description: string;
  /** 规则类型名称。 */
  RuleTypeName: string;
  /** 攻击内容。 */
  AttackContent: string | null;
  /** 规则类型，取值有：waf: 托管规则；acl：自定义规则；rate：速率限制规则；bot：bot防护规则。 */
  RuleType: string;
  /** 规则是否开启。 */
  RuleEnabled: boolean;
  /** 规则是否存在，取值有：true: 规则不存在；false: 规则存在。 */
  RuleDeleted: boolean;
  /** 规则是否启用监控告警。 */
  AlarmEnabled: boolean;
}

/** 安全配置 */
declare interface SecurityConfig {
  /** 托管规则。如果为null，默认使用历史配置。 */
  WafConfig?: WafConfig | null;
  /** 速率限制。如果为null，默认使用历史配置。 */
  RateLimitConfig?: RateLimitConfig | null;
  /** 自定义规则。如果为null，默认使用历史配置。 */
  AclConfig?: AclConfig | null;
  /** Bot配置。如果为null，默认使用历史配置。 */
  BotConfig?: BotConfig | null;
  /** 七层防护总开关。如果为null，默认使用历史配置。 */
  SwitchConfig?: SwitchConfig | null;
  /** 基础访问管控。如果为null，默认使用历史配置。 */
  IpTableConfig?: IpTableConfig | null;
  /** 例外规则配置。如果为null，默认使用历史配置。 */
  ExceptConfig?: ExceptConfig | null;
  /** 自定义拦截页面配置。如果为null，默认使用历史配置。 */
  DropPageConfig?: DropPageConfig | null;
  /** 模板配置。此处仅出参数使用。 */
  TemplateConfig?: TemplateConfig | null;
}

/** 安全类型配置项。 */
declare interface SecurityType {
  /** 安全类型开关，取值为： on：开启； off：关闭。 */
  Switch: string;
}

/** https 服务端证书配置 */
declare interface ServerCertInfo {
  /** 服务器证书 ID。 */
  CertId: string | null;
  /** 证书备注名。 */
  Alias?: string | null;
  /** 证书类型，取值有：default：默认证书；upload：用户上传；managed：腾讯云托管。 */
  Type?: string | null;
  /** 证书过期时间。 */
  ExpireTime?: string | null;
  /** 证书部署时间。 */
  DeployTime?: string | null;
  /** 签名算法。 */
  SignAlgo?: string | null;
  /** 证书归属域名名称。 */
  CommonName?: string | null;
}

/** 单值类数据记录 */
declare interface SingleDataRecord {
  /** 查询维度值。 */
  TypeKey: string;
  /** 查询维度下具体指标值。 */
  TypeValue: SingleTypeValue[];
}

/** 单值指标数据 */
declare interface SingleTypeValue {
  /** 指标名。 */
  MetricName: string;
  /** 指标值。 */
  DetailData: number;
}

/** 例外规则的跳过匹配条件，即在例外时根据本匹配条件，略过指定字段及内容。 */
declare interface SkipCondition {
  /** 例外跳过类型，取值为：header_fields：HTTP请求Header；cookie：HTTP请求Cookie；query_string：HTTP请求URL中的Query参数；uri：HTTP请求URI；body_raw：HTTP请求Body；body_json： JSON格式的HTTP Body。 */
  Type: string;
  /** 选择跳过的字段，取值为：args：uri 下选择 query 参数: ?name1=jack&age=12；path：uri 下选择部分路径：/path/to/resource.jpg；full：uri 下选择完整路径：example.com/path/to/resource.jpg?name1=jack&age=12；upload_filename：分段文件名，即分段传输文件时；keys：所有的Key；values：匹配Key对应的值；key_value：匹配Key及匹配Value。 */
  Selector: string;
  /** 匹配Key所使用的匹配方式，取值为：equal：精准匹配，等于；wildcard：通配符匹配，支持 * 通配。 */
  MatchFromType?: string;
  /** 匹配Key的值。 */
  MatchFrom?: string[] | null;
  /** 匹配Content所使用的匹配方式，取值为：equal：精准匹配，等于；wildcard：通配符匹配，支持 * 通配。 */
  MatchContentType?: string;
  /** 匹配Value的值。 */
  MatchContent?: string[] | null;
}

/** 智能加速配置 */
declare interface SmartRouting {
  /** 智能加速配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 站点拨测配置 */
declare interface SpeedTestingConfig {
  /** 任务类型，取值有：1：页面性能;2：文件上传;3：文件下载;4：端口性能;5：网络质量;6：音视频体验。 */
  TaskType: number;
  /** 拨测 url。 */
  Url: string;
  /** 拨测 UA。 */
  UA: string;
  /** 网络类型。 */
  Connectivity: string;
}

/** 拨测详细数据，包括各地域性能数据。 */
declare interface SpeedTestingDetailData {
  /** 站点ID。 */
  ZoneId: string;
  /** 站点名称。 */
  ZoneName: string;
  /** 地域性能数据。 */
  DistrictStatistics: DistrictStatistics[];
}

/** 拨测结果信息 */
declare interface SpeedTestingInfo {
  /** 任务状态，取值有： 200：任务完成; 100：任务进行中； 503: 任务失败。 */
  StatusCode: number;
  /** 拨测任务 ID。 */
  TestId: string;
  /** 拨测任务配置。 */
  SpeedTestingConfig: SpeedTestingConfig;
  /** 拨测任务统计结果。 */
  SpeedTestingStatistics: SpeedTestingStatistics | null;
}

/** 不同维度的测速数据。 */
declare interface SpeedTestingMetricData {
  /** 站点ID。 */
  ZoneId: string;
  /** 站点名称。 */
  ZoneName: string;
  /** 源站拨测信息。 */
  OriginSpeedTestingInfo: SpeedTestingInfo[];
  /** EO 拨测信息。 */
  ProxySpeedTestingInfo: SpeedTestingInfo[];
  /** 站点状态。 */
  SpeedTestingStatus: SpeedTestingStatus;
  /** 优化建议。 */
  OptimizeAction: OptimizeAction[];
  /** EO 整体性能，单位ms。 */
  ProxyLoadTime: number | null;
  /** 源站整体性能，单位ms。 */
  OriginLoadTime: number | null;
}

/** 拨测配额数据。 */
declare interface SpeedTestingQuota {
  /** 站点总拨测次数。 */
  TotalTestRuns: number;
  /** 站点剩余可用拨测次数。 */
  AvailableTestRuns: number;
}

/** 拨测统计结果 */
declare interface SpeedTestingStatistics {
  /** 首屏时间，单位 ms。 */
  FirstContentfulPaint: number | null;
  /** 首屏完全渲染时间，单位 ms。 */
  FirstMeaningfulPaint: number | null;
  /** 整体下载速度，单位 KB/s。 */
  OverallDownloadSpeed: number | null;
  /** 渲染时间，单位 ms。 */
  RenderTime: number | null;
  /** 文档完成时间, 单位 ms。 */
  DocumentFinishTime: number | null;
  /** 基础文档TCP连接时间，单位 ms。 */
  TcpConnectionTime: number | null;
  /** 基础文档服务器响应时间，单位 ms。 */
  ResponseTime: number | null;
  /** 基础文档下载时间，单位 ms。 */
  FileDownloadTime: number | null;
  /** 整体性能，测试总时间，单位 ms。 */
  LoadTime: number | null;
}

/** 拨测任务状态信息 */
declare interface SpeedTestingStatus {
  /** 拨测 url。 */
  Url: string;
  /** 拨测 url 是否使用 https。 */
  Tls: boolean;
  /** 任务创建时间。 */
  CreatedOn: string;
  /** 任务状态，取值有： 200：任务完成; 100：任务进行中。 503: 任务失败。 */
  StatusCode: number | null;
  /** 拨测 UA。 */
  UA: string | null;
  /** 网络环境。 */
  Connectivity: string | null;
  /** 是否可达，取值： true：可达； false：不可达。 */
  Reachable: boolean | null;
  /** 是否超时，取值： true：超时； false：不超时。 */
  TimedOut: boolean | null;
}

/** 嵌套规则信息。 */
declare interface SubRule {
  /** 执行功能判断条件。注意：满足该数组内任意一项条件，功能即可执行。 */
  Conditions: RuleAndConditions[];
  /** 执行的功能。 */
  Actions: Action[];
}

/** 规则引擎嵌套规则 */
declare interface SubRuleItem {
  /** 嵌套规则信息。 */
  Rules: SubRule[];
  /** 规则标签。 */
  Tags?: string[];
}

/** 询价参数 */
declare interface Sv {
  /** 询价参数键。 */
  Key: string;
  /** 询价参数值。 */
  Value: string;
}

/** 功能总开关 */
declare interface SwitchConfig {
  /** Web类型的安全总开关，取值有：on：开启；off：关闭。不影响DDoS与Bot的开关。 */
  WebSwitch: string;
}

/** 标签配置 */
declare interface Tag {
  /** 标签键。 */
  TagKey: string | null;
  /** 标签值。 */
  TagValue: string | null;
}

/** 内容管理任务结果 */
declare interface Task {
  /** 任务 ID。 */
  JobId: string;
  /** 状态。 */
  Status: string;
  /** 资源。 */
  Target: string;
  /** 任务类型。 */
  Type: string;
  /** 任务创建时间。 */
  CreateTime: string;
  /** 任务完成时间。 */
  UpdateTime: string;
}

/** 安全模板配置 */
declare interface TemplateConfig {
  /** 模板ID。 */
  TemplateId: string;
  /** 模板名称。 */
  TemplateName: string;
}

/** 统计曲线数据项 */
declare interface TimingDataItem {
  /** 返回数据对应时间点，采用unix秒级时间戳。 */
  Timestamp: number;
  /** 具体数值。 */
  Value: number;
}

/** 时序数据信息 */
declare interface TimingDataRecord {
  /** 查询维度值。 */
  TypeKey: string;
  /** 详细时序数据。 */
  TypeValue: TimingTypeValue[];
}

/** 时序类型详细数据 */
declare interface TimingTypeValue {
  /** 数据和。 */
  Sum: number;
  /** 最大值。 */
  Max: number;
  /** 平均值。 */
  Avg: number;
  /** 指标名。 */
  MetricName: string;
  /** 详细数据。 */
  Detail: TimingDataItem[] | null;
}

/** Top类数据记录 */
declare interface TopDataRecord {
  /** 查询维度值。 */
  TypeKey: string;
  /** top数据排行。 */
  DetailData: TopDetailData[];
}

/** Top数据的详细信息 */
declare interface TopDetailData {
  /** 字段名。 */
  Key: string;
  /** 字段值。 */
  Value: number;
}

/** TopN的Entry数据 */
declare interface TopEntry {
  /** top查询维度值。 */
  Key: string;
  /** 查询具体数据。 */
  Value: TopEntryValue[];
}

/** TopN数据Entry */
declare interface TopEntryValue {
  /** 排序实体名。 */
  Name: string;
  /** 排序实体数量。 */
  Count: number;
}

/** Http2回源配置 */
declare interface UpstreamHttp2 {
  /** http2回源配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 自定义 nameservers */
declare interface VanityNameServers {
  /** 自定义 ns 开关，取值有： on：开启； off：关闭。 */
  Switch: string;
  /** 自定义 ns 列表。 */
  Servers?: string[];
}

/** 自定义名字服务器 IP 信息 */
declare interface VanityNameServersIps {
  /** 自定义名字服务器名称。 */
  Name: string;
  /** 自定义名字服务器 IPv4 地址。 */
  IPv4: string;
}

/** 无 */
declare interface Waf {
  /** Waf开关，取值为： on：开启； off：关闭。 */
  Switch: string;
  /** 策略ID。 */
  PolicyId?: number;
}

/** Waf配置。 */
declare interface WafConfig {
  /** WafConfig开关，取值有： on：开启； off：关闭。开关仅与配置是否生效有关，即使为off（关闭），也可以正常修改配置的内容。 */
  Switch: string;
  /** 上一次设置的防护级别，取值有： loose：宽松； normal：正常； strict：严格； stricter：超严格； custom：自定义。 */
  Level: string;
  /** 全局WAF模式，取值有： block：阻断（全局阻断，但可对详细规则配置观察）； observe：观察（无论详细规则配置什么，都为观察）。 */
  Mode: string;
  /** 托管规则详细配置。如果为null，默认使用历史配置。 */
  WafRule?: WafRule;
  /** AI规则引擎防护配置。如果为null，默认使用历史配置。 */
  AiRule?: AiRule;
}

/** Waf托管规则组 */
declare interface WafGroup {
  /** 执行动作，取值有： block：阻断； observe：观察。 */
  Action?: string | null;
  /** 防护级别，取值有： loose：宽松； normal：正常； strict：严格； stricter：超严格； custom：自定义。 */
  Level?: string | null;
  /** 规则类型id。 */
  TypeId?: number | null;
}

/** Waf规则 */
declare interface WafRule {
  /** 托管规则开关，取值有： on：开启； off：关闭。 */
  Switch: string;
  /** 黑名单，ID参考接口 [DescribeSecurityGroupManagedRules](https://tcloud4api.woa.com/document/product/1657/80807?!preview&!document=1)。 */
  BlockRuleIDs: number[];
  /** 观察模式ID列表，将规则ID加入本参数列表中代表该ID使用观察模式生效，即该规则ID进入观察模式。ID参考接口 [DescribeSecurityGroupManagedRules](https://tcloud4api.woa.com/document/product/1657/80807?!preview&!document=1)。 */
  ObserveRuleIDs: number[];
}

/** web攻击日志 */
declare interface WebLogs {
  /** 请求（事件）ID。 */
  EventId: string;
  /** 攻击源（客户端）Ip。 */
  AttackIp: string;
  /** 受攻击子域名。 */
  Domain: string;
  /** http 日志内容。 */
  HttpLog: string;
  /** IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json) */
  SipCountryCode: string;
  /** 攻击时间，采用unix秒级时间戳。 */
  AttackTime: number;
  /** 请求地址。 */
  RequestUri: string;
  /** 攻击内容。 */
  AttackContent: string | null;
  /** 规则相关信息列表。 */
  RuleDetailList: SecRuleRelatedInfo[] | null;
  /** 请求类型。 */
  ReqMethod: string | null;
  /** 日志所属区域。 */
  Area: string | null;
}

/** WebSocket配置 */
declare interface WebSocket {
  /** WebSocket 超时时间配置开关，取值有：on：使用Timeout作为WebSocket超时时间；off：平台仍支持WebSocket连接，此时使用系统默认的15秒为超时时间。 */
  Switch: string;
  /** 超时时间，单位为秒，最大超时时间120秒。 */
  Timeout?: number;
}

/** 站点信息 */
declare interface Zone {
  /** 站点ID。 */
  ZoneId: string;
  /** 站点名称。 */
  ZoneName: string;
  /** 站点当前使用的 NS 列表。 */
  OriginalNameServers: string[];
  /** 腾讯云分配的 NS 列表。 */
  NameServers: string[];
  /** 站点状态，取值有： active：NS 已切换； pending：NS 未切换； moved：NS 已切走； deactivated：被封禁。 */
  Status: string;
  /** 站点接入方式，取值有 full：NS 接入； partial：CNAME 接入。 */
  Type: string;
  /** 站点是否关闭。 */
  Paused: boolean;
  /** 是否开启 CNAME 加速，取值有： enabled：开启； disabled：关闭。 */
  CnameSpeedUp: string;
  /** CNAME 接入状态，取值有： finished：站点已验证； pending：站点验证中。 */
  CnameStatus: string;
  /** 资源标签列表。 */
  Tags: Tag[];
  /** 计费资源列表。 */
  Resources: Resource[];
  /** 站点创建时间。 */
  CreatedOn: string;
  /** 站点修改时间。 */
  ModifiedOn: string;
  /** 站点接入地域，取值有： global：全球； mainland：中国大陆； overseas：境外区域。 */
  Area: string;
  /** 用户自定义 NS 信息。 */
  VanityNameServers: VanityNameServers | null;
  /** 用户自定义 NS IP 信息。 */
  VanityNameServersIps: VanityNameServersIps[] | null;
  /** 展示状态，取值有： active：已启用； inactive：未生效； paused：已停用。 */
  ActiveStatus: string;
  /** 站点别名。数字、英文、-和_组合，限制20个字符。 */
  AliasZoneName: string | null;
}

/** 站点配置。 */
declare interface ZoneSetting {
  /** 站点名称。 */
  ZoneName: string;
  /** 站点加速区域信息，取值有： mainland：中国境内加速； overseas：中国境外加速。 */
  Area: string;
  /** 节点缓存键配置。 */
  CacheKey: CacheKey | null;
  /** Quic访问配置。 */
  Quic: Quic | null;
  /** POST请求传输配置。 */
  PostMaxSize: PostMaxSize | null;
  /** 智能压缩配置。 */
  Compression: Compression | null;
  /** Http2回源配置。 */
  UpstreamHttp2: UpstreamHttp2 | null;
  /** 访问协议强制Https跳转配置。 */
  ForceRedirect: ForceRedirect | null;
  /** 缓存过期时间配置。 */
  CacheConfig: CacheConfig | null;
  /** 源站配置。 */
  Origin: Origin | null;
  /** 智能加速配置。 */
  SmartRouting: SmartRouting | null;
  /** 浏览器缓存配置。 */
  MaxAge: MaxAge | null;
  /** 离线缓存配置。 */
  OfflineCache: OfflineCache | null;
  /** WebSocket配置。 */
  WebSocket: WebSocket | null;
  /** 客户端IP回源请求头配置。 */
  ClientIpHeader: ClientIpHeader | null;
  /** 缓存预刷新配置。 */
  CachePrefresh: CachePrefresh | null;
  /** Ipv6访问配置。 */
  Ipv6: Ipv6 | null;
  /** Https 加速配置。 */
  Https: Https | null;
  /** 回源时是否携带客户端IP所属地域信息的配置。 */
  ClientIpCountry: ClientIpCountry | null;
  /** Grpc协议支持配置。 */
  Grpc: Grpc | null;
}

declare interface BindZoneToPlanRequest {
  /** 未绑定套餐的站点ID。 */
  ZoneId: string;
  /** 待绑定的目标套餐ID。 */
  PlanId: string;
}

declare interface BindZoneToPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckCertificateRequest {
  /** 证书内容。 */
  Certificate: string;
  /** 私钥内容。 */
  PrivateKey: string;
}

declare interface CheckCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAliasDomainRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 别称域名名称。 */
  AliasName: string;
  /** 目标域名名称。 */
  TargetName: string;
  /** 证书配置，取值有： none：不配置； hosting：SSL托管证书。默认取值为 none。 */
  CertType?: string;
  /** 当 CertType 取值为 hosting 时需填入相应证书 ID。 */
  CertId?: string[];
}

declare interface CreateAliasDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationProxyRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 当ProxyType=hostname时，表示域名或子域名；当ProxyType=instance时，表示代理名称。 */
  ProxyName: string;
  /** 调度模式，取值有：ip：表示Anycast IP调度；domain：表示CNAME调度。 */
  PlatType: string;
  /** 是否开启安全，取值有：0：关闭安全；1：开启安全。 */
  SecurityType: number;
  /** 是否开启加速，取值有：0：关闭加速；1：开启加速。 */
  AccelerateType: number;
  /** 四层代理模式，取值有：hostname：表示子域名模式；instance：表示实例模式。不填写使用默认值instance。 */
  ProxyType?: string;
  /** 会话保持时间，取值范围：30-3600，单位：秒。不填写使用默认值600。 */
  SessionPersistTime?: number;
  /** Ipv6访问配置。不填写表示关闭Ipv6访问。 */
  Ipv6?: Ipv6;
  /** 规则详细信息。不填写则不创建规则。 */
  ApplicationProxyRules?: ApplicationProxyRule[];
}

declare interface CreateApplicationProxyResponse {
  /** 新增的四层代理应用ID。 */
  ProxyId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationProxyRuleRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 代理ID。 */
  ProxyId: string;
  /** 协议，取值有：TCP：TCP协议；UDP：UDP协议。 */
  Proto: string;
  /** 端口，支持格式：80：80端口；81-90：81至90端口。 */
  Port: string[];
  /** 源站类型，取值有：custom：手动添加；origins：源站组。 */
  OriginType: string;
  /** 源站信息：当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。 */
  OriginValue: string[];
  /** 传递客户端IP，取值有：TOA：TOA（仅Proto=TCP时可选）；PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；PPV2：Proxy Protocol传递，协议版本V2；OFF：不传递。默认值：OFF。 */
  ForwardClientIp?: string;
  /** 是否开启会话保持，取值有：true：开启；false：关闭。默认值：false。 */
  SessionPersist?: boolean;
  /** 源站端口，支持格式：单端口：80；端口段：81-90，81至90端口。 */
  OriginPort?: string;
}

declare interface CreateApplicationProxyRuleResponse {
  /** 规则ID */
  RuleId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCredentialRequest {
}

declare interface CreateCredentialResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOriginGroupRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 源站类型，取值有：self：自有源站；third_party：第三方源站；cos：腾讯云COS源站。 */
  OriginType: string;
  /** 源站组名称。 */
  OriginGroupName: string;
  /** 源站配置类型，当OriginType=self时，取值有：area：按区域配置；weight： 按权重配置；proto： 按HTTP协议配置。当OriginType=third_party/cos时放空。 */
  ConfigurationType: string;
  /** 源站记录信息。 */
  OriginRecords: OriginRecord[];
  /** 回源Host，仅当OriginType=self时可以设置。 */
  HostHeader?: string;
}

declare interface CreateOriginGroupResponse {
  /** 源站组ID。 */
  OriginGroupId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePlanForZoneRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 所要购买套餐的类型，取值有： sta: 全球内容分发网络（不包括中国大陆）标准版套餐； sta_with_bot: 全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理； sta_cm: 中国大陆内容分发网络标准版套餐； sta_cm_with_bot: 中国大陆内容分发网络标准版套餐附带bot管理； sta_global ：全球内容分发网络（包括中国大陆）标准版套餐； sta_global_with_bot ：全球内容分发网络（包括中国大陆）标准版套餐附带bot管理； ent: 全球内容分发网络（不包括中国大陆）企业版套餐； ent_with_bot: 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理； ent_cm: 中国大陆内容分发网络企业版套餐； ent_cm_with_bot: 中国大陆内容分发网络企业版套餐附带bot管理。 ent_global ：全球内容分发网络（包括中国大陆）企业版套餐； ent_global_with_bot ：全球内容分发网络（包括中国大陆）企业版套餐附带bot管理。当前账户可购买套餐类型请以DescribeAvailablePlans返回为准。 */
  PlanType: string;
}

declare interface CreatePlanForZoneResponse {
  /** 购买的资源名字列表。 */
  ResourceNames: string[];
  /** 购买的订单号列表。 */
  DealNames: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrefetchTaskRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 要预热的资源列表，每个元素格式类似如下:http://www.example.com/example.txt。 */
  Targets?: string[];
  /** 是否对url进行encode，若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。 */
  EncodeUrl?: boolean;
  /** 附带的http头部信息。 */
  Headers?: Header[];
}

declare interface CreatePrefetchTaskResponse {
  /** 任务 ID。 */
  JobId: string;
  /** 失败的任务列表。 */
  FailedList: FailReason[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePurgeTaskRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 清除缓存类型，取值有：purge_url：URL；purge_prefix：前缀；purge_host：Hostname；purge_all：全部缓存；purge_cache_tag：cache-tag刷新。 */
  Type: string;
  /** 要清除缓存的资源列表，每个元素格式依据Type而定：1) Type = purge_host 时：形如：www.example.com 或 foo.bar.example.com。2) Type = purge_prefix 时：形如：http://www.example.com/example。3) Type = purge_url 时：形如：https://www.example.com/example.jpg。4）Type = purge_all 时：Targets可为空，不需要填写。5）Type = purge_cache_tag 时：形如：tag1。 */
  Targets?: string[];
  /** 若有编码转换，仅清除编码转换后匹配的资源。若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。 */
  EncodeUrl?: boolean;
}

declare interface CreatePurgeTaskResponse {
  /** 任务ID。 */
  JobId: string;
  /** 失败的任务列表及原因。 */
  FailedList: FailReason[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReplayTaskRequest {
  /** 重放任务的 ID 列表。 */
  Ids: string[];
}

declare interface CreateReplayTaskResponse {
  /** 此次任务ID。 */
  JobId: string;
  /** 失败的任务列表及原因。 */
  FailedList: FailReason[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRuleRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 规则名称，名称字符串长度 1～255。 */
  RuleName: string;
  /** 规则状态，取值有： enable: 启用； disable: 未启用。 */
  Status: string;
  /** 规则内容。 */
  Rules: Rule[];
  /** 规则标签。 */
  Tags?: string[];
}

declare interface CreateRuleResponse {
  /** 规则 ID。 */
  RuleId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSpeedTestingRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 拨测子域名。 */
  Host?: string;
}

declare interface CreateSpeedTestingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateZoneRequest {
  /** 站点名称。 */
  ZoneName: string;
  /** 接入方式，取值有： full：NS接入； partial：CNAME接入，请先调用认证站点API（IdentifyZone）进行站点归属权校验，校验通过后继续调用本接口创建站点。不填写使用默认值full。 */
  Type?: string;
  /** 是否跳过站点现有的DNS记录扫描。默认值：false。 */
  JumpStart?: boolean;
  /** 资源标签。 */
  Tags?: Tag[];
  /** 是否允许重复接入。 true：允许重复接入； false：不允许重复接入。不填写使用默认值false。 */
  AllowDuplicates?: boolean;
  /** 站点别名。数字、英文、-和_组合，限制20个字符。 */
  AliasZoneName?: string;
}

declare interface CreateZoneResponse {
  /** 站点ID。 */
  ZoneId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAliasDomainRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 待删除别称域名名称。如果为空，则不执行删除操作。 */
  AliasNames?: string[];
}

declare interface DeleteAliasDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApplicationProxyRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 代理ID。 */
  ProxyId: string;
}

declare interface DeleteApplicationProxyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApplicationProxyRuleRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 代理ID。 */
  ProxyId: string;
  /** 规则ID。 */
  RuleId: string;
}

declare interface DeleteApplicationProxyRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOriginGroupRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 源站组ID。 */
  OriginGroupId: string;
}

declare interface DeleteOriginGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 指定删除的规则 ID 列表。 */
  RuleIds: string[];
}

declare interface DeleteRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteZoneRequest {
  /** 站点 ID。 */
  ZoneId: string;
}

declare interface DeleteZoneResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddableEntityListRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 推送数据类型，取值有:domain：七层加速日志；application：四层加速日志；web-rateLiming：速率限制日志；web-attack：web攻击防护日志；web-rule：自定义规则日志；web-bot：Bot管理日志。 */
  EntityType: string;
}

declare interface DescribeAddableEntityListResponse {
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 可添加的实体列表。 */
  EntityList: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAliasDomainsRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：target-name 按照【目标域名名称】进行过滤。 类型：String 必选：否alias-name 按照【别称域名名称】进行过滤。 类型：String 必选：否模糊查询时仅支持过滤字段名为alias-name。 */
  Filters?: AdvancedFilter[];
}

declare interface DescribeAliasDomainsResponse {
  /** 符合条件的别称域名个数。 */
  TotalCount: number;
  /** 别称域名详细信息列表。 */
  AliasDomains: AliasDomain[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationProxiesRequest {
  /** 分页查询偏移量。默认为0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：proxy-id 按照【代理ID】进行过滤。代理ID形如：proxy-ev2sawbwfd。 类型：String 必选：否zone-id 按照【站点ID】进行过滤。站点ID形如：zone-vawer2vadg。 类型：String 必选：否 */
  Filters?: Filter[];
}

declare interface DescribeApplicationProxiesResponse {
  /** 应用代理列表。 */
  ApplicationProxies: ApplicationProxy[];
  /** 记录总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAvailablePlansRequest {
}

declare interface DescribeAvailablePlansResponse {
  /** 当前账户可购买套餐类型及相关信息。 */
  PlanInfo: PlanInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClientRuleListRequest {
  /** 查询的站点ID. */
  ZoneId: string;
  /** 查询的子域名。 */
  Domain: string;
  /** 规则类型，取值有：acl：自定义规则；rate：限速规则。不填表示查询所有规则。 */
  RuleType?: string;
  /** 规则ID。 */
  RuleId?: number;
  /** 客户端IP。 */
  SourceClientIp?: string;
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。不填将根据用户所在地智能选择地区。 */
  Area?: string;
}

declare interface DescribeClientRuleListResponse {
  /** 封禁客户端数据列表。 */
  Data: ClientRule[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeContentQuotaRequest {
  /** 站点 ID。 */
  ZoneId: string;
}

declare interface DescribeContentQuotaResponse {
  /** 刷新相关配额。 */
  PurgeQuota: Quota[] | null;
  /** 预热相关配额。 */
  PrefetchQuota: Quota[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSAttackDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 统计指标列表，取值有：ddos_attackMaxBandwidth：攻击带宽峰值；ddos_attackMaxPackageRate：攻击包速率峰值 ；ddos_attackBandwidth：攻击带宽曲线；ddos_attackPackageRate：攻击包速率曲线。 */
  MetricNames: string[];
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** DDoS策略组ID列表，不填默认选择全部策略ID。 */
  PolicyIds?: number[];
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间与结束时间的间隔自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。 */
  Interval?: string;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeDDoSAttackDataResponse {
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** DDoS攻击数据内容列表。 */
  Data: SecEntry[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSAttackTopDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询的统计指标，取值有：ddos_attackFlux_protocol：按各协议的攻击流量排行；ddos_attackPackageNum_protocol：按各协议的攻击包量排行；ddos_attackNum_attackType：按各攻击类型的攻击数量排行；ddos_attackNum_sregion：按攻击源地区的攻击数量排行；ddos_attackFlux_sip：按攻击源IP的攻击数量排行；ddos_attackFlux_sregion：按攻击源地区的攻击数量排行。 */
  MetricName: string;
  /** 站点ID集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** DDoS策略组ID集合，不填默认选择全部策略ID。 */
  PolicyIds?: number[];
  /** 攻击类型，取值有：flood：洪泛攻击；icmpFlood：icmp洪泛攻击；all：所有的攻击类型。不填默认为all，表示查询全部攻击类型。 */
  AttackType?: string;
  /** 协议类型，取值有：tcp：tcp协议；udp：udp协议；all：所有的协议类型。不填默认为all，表示查询所有协议。 */
  ProtocolType?: string;
  /** 端口号。 */
  Port?: number;
  /** 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。 */
  Limit?: number;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。不填将根据用户所在地智能选择地区。 */
  Area?: string;
}

declare interface DescribeDDoSAttackTopDataResponse {
  /** DDoS攻击Top数据列表。 */
  Data: TopEntry[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDefaultCertificatesRequest {
  /** 过滤条件，Filters.Values的上限为5。详细的过滤条件如下：zone-id 按照【站点ID】进行过滤。站点ID形如：zone-xxx。 类型：String 必选：是 */
  Filters: Filter[];
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：100。 */
  Limit?: number;
}

declare interface DescribeDefaultCertificatesResponse {
  /** 证书总数。 */
  TotalCount: number;
  /** 默认证书列表。 */
  DefaultServerCertInfo: DefaultServerCertInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDnsDataRequest {
  /** 起始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：zone 按照【站点名称】进行过滤。站点名称形如：tencent.com 类型：String 必选：否，仅支持填写一个站点host 按照【域名】进行过滤。域名形如：test.tencent.com 类型：String 必选：否，仅支持填写一个域名type 按照【DNS解析类型】进行过滤 类型：String 必选：否 可选项： A：A记录 AAAA：AAAA记录 CNAME：CNAME记录 MX：MX记录 TXT：TXT记录 NS：NS记录 SRV：SRV记录 CAA：CAA记录code 按照【DNS解析状态码】进行过滤。 类型：String 必选：否 可选项： NoError：成功 NXDomain：请求域不存在 NotImp：不支持的请求类型 Refused：域名服务器因为策略的原因拒绝执行请求area 按照【DNS解析地域】进行过滤。 类型：String 必选：否。 可选项： 亚洲：Asia 欧洲：Europe 非洲：Africa 大洋洲：Oceania 美洲：Americas */
  Filters?: Filter[];
  /** 时间粒度，取值有：min：1分钟粒度；5min：5分钟粒度；hour：1小时粒度；day：天粒度。不填写，默认值为：min。 */
  Interval?: string;
}

declare interface DescribeDnsDataResponse {
  /** 统计数据。 */
  Data: DnsData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostsSettingRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 分页查询偏移量。默认值： 0，最小值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值： 100，最大值：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：host 按照【域名】进行过滤。 类型：string 必选：否 */
  Filters?: Filter[];
}

declare interface DescribeHostsSettingResponse {
  /** 域名列表。 */
  DetailHosts: DetailHost[];
  /** 域名数量。 */
  TotalNumber: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIdentificationsRequest {
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：zone-name 按照【站点名称】进行过滤。 类型：String 必选：是 */
  Filters: Filter[];
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
}

declare interface DescribeIdentificationsResponse {
  /** 符合条件的站点个数。 */
  TotalCount: number;
  /** 站点验证信息列表。 */
  Identifications: Identification[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogSetsRequest {
  /** 日志集所属的地域。 */
  LogSetRegion: string;
  /** 日志集ID。 */
  LogSetId?: string;
  /** 日志集名称。 */
  LogSetName?: string;
}

declare interface DescribeLogSetsResponse {
  /** 日志集列表数据。 */
  LogSetList: LogSetInfo[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogTopicTasksRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
}

declare interface DescribeLogTopicTasksResponse {
  /** 推送任务列表。 */
  TopicList: ClsLogTopicInfo[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOriginGroupRequest {
  /** 分页查询偏移量，默认为0。 */
  Offset: number;
  /** 分页查询限制数目，默认为10，取值：1-1000。 */
  Limit: number;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：zone-id 按照【站点ID】进行过滤。站点ID形如：zone-20hzkd4rdmy0 类型：String 必选：否 模糊查询：不支持origin-group-id 按照【源站组ID】进行过滤。源站组ID形如：origin-2ccgtb24-7dc5-46s2-9r3e-95825d53dwe3a 类型：String 必选：否 模糊查询：不支持origin-group-name 按照【源站组名称】进行过滤 类型：String 必选：否 模糊查询：支持。使用模糊查询时，仅支持填写一个源站组名称 */
  Filters?: AdvancedFilter[];
}

declare interface DescribeOriginGroupResponse {
  /** 记录总数。 */
  TotalCount: number;
  /** 源站组信息。 */
  OriginGroups: OriginGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOriginProtectionRequest {
  /** 查询的站点集合，不填默认查询所有站点。 */
  ZoneIds?: string[];
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：need-update 按照【站点是否需要更新源站防护IP白名单】进行过滤。 类型：String 必选：否 可选项： true：需要更新 false：无需更新plan-support 按照【站点套餐是否支持源站防护】进行过滤。 类型：String 必选：否 可选项： true：支持 false：不支持 */
  Filters?: Filter;
  /** 分页查询偏移量，默认为0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
}

declare interface DescribeOriginProtectionResponse {
  /** 源站防护信息。 */
  OriginProtectionInfo: OriginProtectionInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOverviewL7DataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询的指标，取值有：l7Flow_outFlux: 访问流量；l7Flow_request: 访问请求数；l7Flow_outBandwidth: 访问带宽；l7Flow_hit_outFlux: 缓存命中流量。 */
  MetricNames: string[];
  /** 站点集合。若不填写，默认选择全部站点，且最多只能查询近30天的数据；若填写，则可查询站点绑定套餐支持的数据分析最大查询范围。 */
  ZoneIds?: string[];
  /** 查询的域名集合，不填默认查询所有子域名。 */
  Domains?: string[];
  /** 查询的协议类型，取值有：http: http协议；https: https协议；http2: http2协议；all: 所有协议。不填默认为all，此参数暂未生效。 */
  Protocol?: string;
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。 */
  Interval?: string;
  /** 过滤条件，详细的过滤条件Key值如下：tagKey 按照【标签Key】进行过滤。tagValue 按照【标签Value】进行过滤。 */
  Filters?: QueryCondition[];
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeOverviewL7DataResponse {
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 七层监控类时序流量数据列表。 */
  Data: TimingDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrefetchTasksRequest {
  /** 查询起始时间。 */
  StartTime?: string;
  /** 查询结束时间。 */
  EndTime?: string;
  /** 分页查询偏移量，默认为 0。 */
  Offset?: number;
  /** 分页查询限制数目，默认值：20，上限：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：zone-id 按照【站点 ID】进行过滤。zone-id形如：zone-1379afjk91u32h，暂不支持多值。 类型：String 必选：否。 模糊查询：不支持。job-id 按照【任务ID】进行过滤。job-id形如：1379afjk91u32h，暂不支持多值。 类型：String 必选：否。 模糊查询：不支持。target 按照【目标资源信息】进行过滤。target形如：http://www.qq.com/1.txt，暂不支持多值。 类型：String 必选：否。 模糊查询：不支持。domains 按照【域名】进行过滤。domains形如：www.qq.com。 类型：String 必选：否。 模糊查询：不支持。statuses 按照【任务状态】进行过滤。 必选：否 模糊查询：不支持。 可选项： processing：处理中 success：成功 failed：失败 timeout：超时 */
  Filters?: AdvancedFilter[];
}

declare interface DescribePrefetchTasksResponse {
  /** 该查询条件总共条目数。 */
  TotalCount: number;
  /** 任务结果列表。 */
  Tasks: Task[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePurgeTasksRequest {
  /** 字段已废弃，请使用Filters中的zone-id。 */
  ZoneId?: string;
  /** 查询起始时间。 */
  StartTime?: string;
  /** 查询结束时间。 */
  EndTime?: string;
  /** 分页查询偏移量，默认为0。 */
  Offset?: number;
  /** 分页查限制数目，默认值：20，最大值：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：zone-id 按照【站点 ID】进行过滤。zone-id形如：zone-xxx，暂不支持多值 类型：String 必选：否 模糊查询：不支持job-id 按照【任务ID】进行过滤。job-id形如：1379afjk91u32h，暂不支持多值。 类型：String 必选：否 模糊查询：不支持target 按照【目标资源信息】进行过滤，target形如：http://www.qq.com/1.txt或者tag1，暂不支持多值 类型：String 必选：否 模糊查询：不支持domains 按照【域名】进行过滤，domains形如：www.qq.com 类型：String 必选：否 模糊查询：不支持。statuses 按照【任务状态】进行过滤 必选：否 模糊查询：不支持。 可选项： processing：处理中 success：成功 failed：失败 timeout：超时type 按照【清除缓存类型】进行过滤，暂不支持多值。 类型：String 必选：否 模糊查询：不支持 可选项： purge_url：URL purge_prefix：前缀 purge_all：全部缓存内容 purge_host：Hostname purge_cache_tag：CacheTag */
  Filters?: AdvancedFilter[];
}

declare interface DescribePurgeTasksResponse {
  /** 该查询条件总共条目数。 */
  TotalCount: number;
  /** 任务结果列表。 */
  Tasks: Task[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：rule-id 按照【规则ID】进行过滤。 类型：string 必选：否 */
  Filters?: Filter[];
}

declare interface DescribeRulesResponse {
  /** 站点 ID。 */
  ZoneId: string;
  /** 规则列表，按规则执行顺序从先往后排序。 */
  RuleItems: RuleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesSettingRequest {
}

declare interface DescribeRulesSettingResponse {
  /** 规则引擎可应用匹配请求的设置列表及其详细建议配置信息。 */
  Actions: RulesSettingAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSingleL7AnalysisDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询的指标，取值有: l7Flow_singleIpRequest：独立IP请求数。 */
  MetricNames: string[];
  /** 站点集合。若不填写，默认选择全部站点，且最多只能查询近30天的数据；若填写，则可查询站点绑定套餐支持的数据分析最大查询范围。 */
  ZoneIds?: string[];
  /** 过滤条件，详细的过滤条件Key值如下：country 按照【国家/地区】进行过滤，国家/地区遵循ISO 3166规范。domain 按照【子域名】进行过滤，子域名形如： test.example.com。protocol 按照【HTTP协议】进行过滤。 对应的Value可选项如下： HTTP/1.0：HTTP 1.0； HTTP/1.1：HTTP 1.1； HTTP/2.0：HTTP 2.0； HTTP/3.0：HTTP 3.0； WebSocket：WebSocket。tagKey 按照【标签Key】进行过滤。tagValue 按照【标签Value】进行过滤。 */
  Filters?: QueryCondition[];
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天;。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。 */
  Interval?: string;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeSingleL7AnalysisDataResponse {
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 单值流量数据列表。 */
  Data: SingleDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpeedTestingDetailsRequest {
  /** 站点ID。 */
  ZoneId?: string;
}

declare interface DescribeSpeedTestingDetailsResponse {
  /** 分地域拨测统计数据。 */
  SpeedTestingDetailData: SpeedTestingDetailData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpeedTestingMetricDataRequest {
  /** 站点ID。 */
  ZoneId: string;
}

declare interface DescribeSpeedTestingMetricDataResponse {
  /** 站点拨测维度数据。 */
  SpeedTestingMetricData: SpeedTestingMetricData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpeedTestingQuotaRequest {
  /** 站点ID。 */
  ZoneId: string;
}

declare interface DescribeSpeedTestingQuotaResponse {
  /** 配额数据。 */
  SpeedTestingQuota: SpeedTestingQuota;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTimingL4DataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询指标，取值有：l4Flow_connections: 访问连接数；l4Flow_flux: 访问总流量；l4Flow_inFlux: 访问入流量；l4Flow_outFlux: 访问出流量； l4Flow_outPkt: 访问出包量。 */
  MetricNames: string[];
  /** 站点集合。若不填写，默认选择全部站点，且最多只能查询近30天的数据；若填写，则可查询站点绑定套餐支持的数据分析最大查询范围。 */
  ZoneIds?: string[];
  /** 四层实例列表, 不填表示选择全部实例。 */
  ProxyIds?: string[];
  /** 查询时间粒度，取值有：min: 1分钟 ；5min: 5分钟 ；hour: 1小时 ；day: 1天 。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。 */
  Interval?: string;
  /** 过滤条件，详细的过滤条件Key值如下：ruleId 按照【转发规则ID】进行过滤。proxyId 按照【四层代理实例ID】进行过滤。 */
  Filters?: QueryCondition[];
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeTimingL4DataResponse {
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 四层时序流量数据列表。 */
  Data: TimingDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTimingL7AnalysisDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 指标列表，取值有:l7Flow_outFlux: 访问流量；l7Flow_request: 访问请求数；l7Flow_outBandwidth: 访问带宽。 */
  MetricNames: string[];
  /** 站点集合。若不填写，默认选择全部站点，且最多只能查询近30天的数据；若填写，则可查询站点绑定套餐支持的数据分析最大查询范围。 */
  ZoneIds?: string[];
  /** 查询时间粒度，取值有：min: 1分钟；5min: 5分钟；hour: 1小时；day: 1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。 */
  Interval?: string;
  /** 过滤条件，详细的过滤条件Key值如下：country 按照【国家/地区】进行过滤，国家/地区遵循ISO 3166规范。province 按照【省份】进行过滤，此参数只支持服务区域为中国大陆。isp 按照【运营商】进行过滤，此参数只支持服务区域为中国大陆。 对应的Value可选项如下： 2：中国电信； 26：中国联通； 1046：中国移动； 3947：中国铁通； 38：教育网； 43：长城宽带； 0：其他运营商。domain 按照【子域名】进行过滤，子域名形如： test.example.com。url 按照【URL Path】进行过滤，URL Path形如：/content或/content/test.jpg。 若只填写url参数，则最多可查询近30天的数据； 若同时填写url+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。referer 按照【Referer头信息】进行过滤, Referer形如：example.com。 若只填写referer参数，则最多可查询近30天的数据； 若同时填写referer+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。resourceType 按照【资源类型】进行过滤，资源类型一般是文件后缀，形如: .jpg, .css。 若只填写resourceType参数，则最多可查询近30天的数据； 若同时填写resourceType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。protocol 按照【HTTP协议】进行过滤。 对应的Value可选项如下： HTTP/1.0：HTTP 1.0； HTTP/1.1：HTTP 1.1； HTTP/2.0：HTTP 2.0； HTTP/3.0：HTTP 3.0； WebSocket：WebSocket。statusCode 按照【状态码】进行过滤。 若只填写statusCode参数，则最多可查询近30天的数据； 若同时填写statusCode+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应的Value可选项如下： 1XX：1xx类型的状态码； 100：100状态码； 101：101状态码； 102：102状态码； 2XX：2xx类型的状态码； 200：200状态码； 201：201状态码； 202：202状态码； 203：203状态码； 204：204状态码； 205：205状态码； 206：206状态码； 207：207状态码； 3XX：3xx类型的状态码； 300：300状态码； 301：301状态码； 302：302状态码； 303：303状态码； 304：304状态码； 305：305状态码； 307：307状态码； 4XX：4xx类型的状态码； 400：400状态码； 401：401状态码； 402：402状态码； 403：403状态码； 404：404状态码； 405：405状态码； 406：406状态码； 407：407状态码； 408：408状态码； 409：409状态码； 410：410状态码； 411：411状态码； 412：412状态码； 412：413状态码； 414：414状态码； 415：415状态码； 416：416状态码； 417：417状态码； 422：422状态码； 423：423状态码； 424：424状态码； 426：426状态码； 451：451状态码； 5XX：5xx类型的状态码； 500：500状态码； 501：501状态码； 502：502状态码； 503：503状态码； 504：504状态码； 505：505状态码； 506：506状态码； 507：507状态码； 510：510状态码； 514：514状态码； 544：544状态码。browserType 按照【浏览器类型】进行过滤。 若只填写browserType参数，则最多可查询近30天的数据； 若同时填写browserType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： Firefox：Firefox浏览器； Chrome：Chrome浏览器； Safari：Safari浏览器； Other：其他浏览器类型； Empty：浏览器类型为空； Bot：搜索引擎爬虫； MicrosoftEdge：MicrosoftEdge浏览器； IE：IE浏览器； Opera：Opera浏览器； QQBrowser：QQ浏览器； LBBrowser：LB浏览器； MaxthonBrowser：Maxthon浏览器； SouGouBrowser：搜狗浏览器； BIDUBrowser：百度浏览器； TaoBrowser：淘浏览器； UBrowser：UC浏览器。deviceType 按照【设备类型】进行过滤。 若只填写deviceType参数，则最多可查询近30天的数据； 若同时填写deviceType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： TV：TV设备； Tablet：Tablet设备； Mobile：Mobile设备； Desktop：Desktop设备； Other：其他设备类型； Empty：设备类型为空。operatingSystemType 按照【操作系统类型】进行过滤。 若只填写operatingSystemType参数，则最多可查询近30天的数据； 若同时填写operatingSystemType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： Linux：Linux操作系统； MacOS：MacOs操作系统； Android：Android操作系统； IOS：IOS操作系统； Windows：Windows操作系统； NetBSD：NetBSD； ChromiumOS：ChromiumOS； Bot：搜索引擎爬虫； Other：其他类型的操作系统； Empty：操作系统为空。tlsVersion 按照【TLS版本】进行过滤。 若只填写tlsVersion参数，则最多可查询近30天的数据； 若同时填写tlsVersion+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： TLS1.0：TLS 1.0； TLS1.1：TLS 1.1； TLS1.2：TLS 1.2； TLS1.3：TLS 1.3。ipVersion 按照【IP版本】进行过滤。 对应Value的可选项如下： 4：Ipv4； 6：Ipv6。tagKey 按照【标签Key】进行过滤。tagValue 按照【标签Value】进行过滤。 */
  Filters?: QueryCondition[];
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeTimingL7AnalysisDataResponse {
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 时序流量数据列表。 */
  Data: TimingDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTimingL7CacheDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询的指标，取值有：l7Cache_outFlux：响应流量；l7Cache_request：响应请求数； l7Cache_outBandwidth：响应带宽。 */
  MetricNames: string[];
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 过滤条件，详细的过滤条件如下：domain 按照【子域名】进行过滤，子域名形如： test.example.com。 类型：String 必选：否url 按照【URL】进行过滤，此参数只支持30天的时间范围，URL形如：/content。 类型：String 必选：否resourceType 按照【资源类型】进行过滤，此参数只支持30天的时间范围，资源类型形如：jpg，png。 类型：String 必选：否cacheType 按照【缓存类型】进行过滤。 类型：String 必选：否 可选项： hit：命中缓存； dynamic：资源不可缓存； miss：未命中缓存。statusCode 按照【状态码】进行过滤，此参数只支持30天的时间范围。 类型：String 必选：否 可选项： 1XX：1xx类型的状态码； 100：100状态码； 101：101状态码； 102：102状态码； 2XX：2xx类型的状态码； 200：200状态码； 201：201状态码； 202：202状态码； 203：203状态码； 204：204状态码； 100：100状态码； 206：206状态码； 207：207状态码； 3XX：3xx类型的状态码； 300：300状态码； 301：301状态码； 302：302状态码； 303：303状态码； 304：304状态码； 305：305状态码； 307：307状态码； 4XX：4xx类型的状态码； 400：400状态码； 401：401状态码； 402：402状态码； 403：403状态码； 404：404状态码； 405：405状态码； 406：406状态码； 407：407状态码； 408：408状态码； 409：409状态码； 410：410状态码； 411：411状态码； 412：412状态码； 412：413状态码； 414：414状态码； 415：415状态码； 416：416状态码； 417：417状态码； 422：422状态码； 423：423状态码； 424：424状态码； 426：426状态码； 451：451状态码； 5XX：5xx类型的状态码； 500：500状态码； 501：501状态码； 502：502状态码； 503：503状态码； 504：504状态码； 505：505状态码； 506：506状态码； 507：507状态码； 510：510状态码； 514：514状态码； 544：544状态码。tagKey 按照【标签Key】进行过滤。 类型：String 必选：否tagValue 按照【标签Value】进行过滤。 类型：String 必选：否 */
  Filters?: QueryCondition[];
  /** 查询时间粒度，可选的值有：min：1分钟的时间粒度；5min：5分钟的时间粒度；hour：1小时的时间粒度；day：1天的时间粒度。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeTimingL7CacheDataResponse {
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 七层缓存分析时序类流量数据列表。 */
  Data: TimingDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopL7AnalysisDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询的指标，取值有： l7Flow_outFlux_country：请求的国家； l7Flow_outFlux_statusCode：请求的状态码； l7Flow_outFlux_domain：请求域名； l7Flow_outFlux_url：请求的URL; l7Flow_outFlux_resourceType：请求的资源类型； l7Flow_outFlux_sip：客户端的源IP； l7Flow_outFlux_referers：refer信息； l7Flow_outFlux_ua_device：设备类型; l7Flow_outFlux_ua_browser：浏览器类型； l7Flow_outFlux_us_os：操作系统类型。 */
  MetricName: string;
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 查询前多少个数据，最大值为1000，不填默认默认为: 10， 表示查询前top10的数据。 */
  Limit?: number;
  /** 过滤条件，详细的过滤条件如下：country 按照【国家/地区】进行过滤，国家/地区遵循ISO 3166规范。 类型：String 必选：否province 按照【省份】进行过滤，此参数只支持服务区域为中国大陆。 类型：String 必选：否isp 按照【运营商】进行过滤，此参数只支持服务区域为中国大陆。 类型：String 必选：否 可选项： 2：中国电信； 26：中国联通； 1046：中国移动； 3947：中国铁通； 38：教育网； 43：长城带宽； 0：其他运营商。domain 按照【子域名】进行过滤，子域名形如： test.example.com。 类型：String 必选：否url 按照【URL】进行过滤，此参数最长支持30天的查询范围，如果需要过滤多个值，多个值之间使用分号间隔，URL形如：/content,。 类型：String 必选：否referer 按照【Referer头信息】进行过滤, 此参数最长支持30天的查询范围，Referer形如：example.com。 类型：String 必选：否 必选：否resourceType 按照【资源类型】进行过滤，此参数最长支持30天的的查询范围，资源类型形如：jpg，png。 类型：String 必选：否protocol 按照【HTTP协议】进行过滤。 类型：String 必选：否 可选项： HTTP/1.0：HTTP 1.0； HTTP/1.1：HTTP 1.1； HTTP/2.0：HTTP 2.0； HTTP/3.0：HTTP 3.0； WebSocket：WebSocket。statusCode 按照【状态码】进行过滤，此参数最长支持30天的查询范围。 类型：String 必选：否 可选项： 1XX：1xx类型的状态码； 100：100状态码； 101：101状态码； 102：102状态码； 2XX：2xx类型的状态码； 200：200状态码； 201：201状态码； 202：202状态码； 203：203状态码； 204：204状态码； 100：100状态码； 206：206状态码； 207：207状态码； 3XX：3xx类型的状态码； 300：300状态码； 301：301状态码； 302：302状态码； 303：303状态码； 304：304状态码； 305：305状态码； 307：307状态码； 4XX：4xx类型的状态码； 400：400状态码； 401：401状态码； 402：402状态码； 403：403状态码； 404：404状态码； 405：405状态码； 406：406状态码； 407：407状态码； 408：408状态码； 409：409状态码； 410：410状态码； 411：411状态码； 412：412状态码； 412：413状态码； 414：414状态码； 415：415状态码； 416：416状态码； 417：417状态码； 422：422状态码； 423：423状态码； 424：424状态码； 426：426状态码； 451：451状态码； 5XX：5xx类型的状态码； 500：500状态码； 501：501状态码； 502：502状态码； 503：503状态码； 504：504状态码； 505：505状态码； 506：506状态码； 507：507状态码； 510：510状态码； 514：514状态码； 544：544状态码。browserType 按照【浏览器类型】进行过滤，此参数最长支持30天的查询范围。 类型：String 必选：否 可选项： Firefox：Firefox浏览器； Chrome：Chrome浏览器； Safari：Safari浏览器； Other：其他浏览器类型； Empty：浏览器类型为空； Bot：Bot攻击； MicrosoftEdge：MicrosoftEdge浏览器； IE：IE浏览器； Opera：Opera浏览器； QQBrowser：QQ浏览器； LBBrowser：LB浏览器； MaxthonBrowser：Maxthon浏览器； SouGouBrowser：搜狗浏览器； BIDUBrowser：BIDU浏览器； TaoBrowser：淘浏览器； UBrowser：UB浏览器。deviceType 按照【设备类型】进行过滤，此参数最长支持30天的查询范围。 类型：String 必选：否 可选项： TV：TV设备； Tablet：Tablet设备； Mobile：Mobile设备； Desktop：Desktop设备； Other：其他设备类型； Empty：设备类型为空。operatingSystemType 按照【操作系统类型】进行过滤，此参数最长支持30天的查询范围。 类型：String 必选：否 可选项： Linux：Linux操作系统； MacOS：MacOs操作系统； Android：Android操作系统； IOS：IOS操作系统； Windows：Windows操作系统； NetBSD：NetBSD； ChromiumOS：ChromiumOS； Bot：Bot攻击； Other：其他类型的操作系统； Empty：操作系统为空。tlsVersion 按照【TLS版本】进行过滤，此参数最长支持30天的查询范围。 类型：String 必选：否 可选项： TLS1.0：TLS 1.0； TLS1.1：TLS 1.1； TLS1.2：TLS 1.2； TLS1.3：TLS 1.3。ipVersion 按照【IP版本】进行过滤。 类型：String 必选：否 可选项： 4：Ipv4； 6：Ipv6。tagKey 按照【标签Key】进行过滤。 类型：String 必选：否tagValue 按照【标签Value】进行过滤。 类型：String 必选：否 */
  Filters?: QueryCondition[];
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeTopL7AnalysisDataResponse {
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 七层流量前topN数据列表。 */
  Data: TopDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopL7CacheDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询的指标，取值有： l7Cache_outFlux_domain：host/域名； l7Cache_outFlux_url：url地址； l7Cache_outFlux_resourceType：资源类型； l7Cache_outFlux_statusCode：状态码。 */
  MetricName: string;
  /** 站点id集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。 */
  Limit?: number;
  /** 过滤条件，详细的过滤条件如下：domain 按照【子域名】进行过滤，子域名形如： test.example.com。 类型：String 必选：否url 按照【URL】进行过滤，此参数只支持30天的时间范围，URL形如：/content。 类型：String 必选：否resourceType 按照【资源类型】进行过滤，此参数只支持30天的时间范围，资源类型形如：jpg，png。 类型：String 必选：否cacheType 按照【缓存类型】进行过滤。 类型：String 必选：否 可选项： hit：命中缓存； dynamic：资源不可缓存； miss：未命中缓存。statusCode 按照【状态码】进行过滤，此参数只支持30天的时间范围。 类型：String 必选：否 可选项： 1XX：1xx类型的状态码； 100：100状态码； 101：101状态码； 102：102状态码； 2XX：2xx类型的状态码； 200：200状态码； 201：201状态码； 202：202状态码； 203：203状态码； 204：204状态码； 100：100状态码； 206：206状态码； 207：207状态码； 3XX：3xx类型的状态码； 300：300状态码； 301：301状态码； 302：302状态码； 303：303状态码； 304：304状态码； 305：305状态码； 307：307状态码； 4XX：4xx类型的状态码； 400：400状态码； 401：401状态码； 402：402状态码； 403：403状态码； 404：404状态码； 405：405状态码； 406：406状态码； 407：407状态码； 408：408状态码； 409：409状态码； 410：410状态码； 411：411状态码； 412：412状态码； 412：413状态码； 414：414状态码； 415：415状态码； 416：416状态码； 417：417状态码； 422：422状态码； 423：423状态码； 424：424状态码； 426：426状态码； 451：451状态码； 5XX：5xx类型的状态码； 500：500状态码； 501：501状态码； 502：502状态码； 503：503状态码； 504：504状态码； 505：505状态码； 506：506状态码； 507：507状态码； 510：510状态码； 514：514状态码； 544：544状态码。tagKey 按照【标签Key】进行过滤。 类型：String 必选：否tagValue 按照【标签Value】进行过滤。 类型：String 必选：否 */
  Filters?: QueryCondition[];
  /** 查询时间粒度，取值有：min: 1分钟；5min: 5分钟；hour: 1小时；day: 1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeTopL7CacheDataResponse {
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 七层缓存TopN流量数据列表。 */
  Data: TopDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebManagedRulesDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 统计指标列表，取值有：waf_interceptNum：waf拦截次数。 */
  MetricNames: string[];
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 子域名集合，不填默认选择全部子域名。 */
  Domains?: string[];
  /** 筛选条件，key可选的值有：action：执行动作。 */
  QueryCondition?: QueryCondition[];
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。不填将根据用户所在地智能选择地区。 */
  Area?: string;
}

declare interface DescribeWebManagedRulesDataResponse {
  /** WAF攻击的时序数据列表。 */
  Data: SecEntry[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebManagedRulesHitRuleDetailRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 子域名列表，不填默认选择全部全部子域名。 */
  Domains?: string[];
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天 。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 筛选条件，key可选的值有：action ：执行动作 。 */
  QueryCondition?: QueryCondition[];
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。不填将根据用户所在地智能选择地区。 */
  Area?: string;
}

declare interface DescribeWebManagedRulesHitRuleDetailResponse {
  /** 命中规则的详细列表。 */
  Data: SecHitRuleInfo[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebManagedRulesLogRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 域名集合，不填默认选择全部子域名。 */
  Domains?: string[];
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 筛选条件，key可选的值有：attackType：攻击类型；riskLevel：风险等级；action：执行动作（处置方式）；ruleId：规则id；sipCountryCode：ip所在国家；attackIp：攻击ip；oriDomain：被攻击的子域名；eventId：事件id；ua：用户代理；requestMethod：请求方法；uri：统一资源标识符。 */
  QueryCondition?: QueryCondition[];
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。不填将根据用户所在地智能选择地区。 */
  Area?: string;
}

declare interface DescribeWebManagedRulesLogResponse {
  /** Web攻击日志数据列表。 */
  Data: WebLogs[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebProtectionClientIpListRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 域名集合，不填默认选择全部子域名。 */
  Domains?: string[];
  /** 查询的时间粒度，支持的粒度有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 筛选条件，key可选的值有：action：执行动作。 */
  QueryCondition?: QueryCondition[];
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。不填将根据用户所在地智能选择地区。 */
  Area?: string;
}

declare interface DescribeWebProtectionClientIpListResponse {
  /** CC防护客户端（攻击源）ip信息列表。 */
  Data: SecClientIp[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebProtectionDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 统计指标，取值有：ccRate_interceptNum：速率限制规则限制次数；ccAcl_interceptNum：自定义规则拦截次数。 */
  MetricNames: string[];
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 域名集合，不填默认选择全部子域名。 */
  Domains?: string[];
  /** 查询时间粒度，支持的时间粒度有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 筛选条件，key可选的值有：action：执行动作。 */
  QueryCondition?: QueryCondition[];
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。不填将根据用户所在地智能选择地区。 */
  Area?: string;
}

declare interface DescribeWebProtectionDataResponse {
  /** CC防护时序数据列表。 */
  Data: SecEntry[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebProtectionHitRuleDetailRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 所属规则数据类型，支持的规则有：rate：限速规则；acl：自定义规则。 */
  EntityType: string;
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 域名列表，不填默认选择全部子域名。 */
  Domains?: string[];
  /** 筛选条件，key可选的值有：action：执行动作。 */
  QueryCondition?: QueryCondition[];
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 查询时间粒度，支持的时间粒度有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。不填将根据用户所在地智能选择地区。 */
  Area?: string;
}

declare interface DescribeWebProtectionHitRuleDetailResponse {
  /** cc防护命中规则列表。 */
  Data: SecHitRuleInfo[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWebProtectionTopDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 统计指标列表，取值有：ccRate_requestNum_url：速率限制规则请求次数url分布排行；ccRate_cipRequestNum_region：速率限制规则请求次数区域客户端ip分布排行；ccAcl_requestNum_url：自定义规则请求次数url分布排行；ccAcl_requestNum_cip：自定义规则请求次数客户端ip分布排行；ccAcl_cipRequestNum_region：自定义规则请求次数客户端区域分布排行。 */
  MetricName: string;
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 域名集合，不填默认选择全部子域名。 */
  Domains?: string[];
  /** 查询前多少个数据，不填默认默认为10， 表示查询前top 10的数据。 */
  Limit?: number;
  /** 筛选条件，key可选的值有：action：执行动作 。 */
  QueryCondition?: QueryCondition[];
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。不填将根据用户所在地智能选择地区。 */
  Area?: string;
}

declare interface DescribeWebProtectionTopDataResponse {
  /** CC防护的TopN数据列表。 */
  Data: TopEntry[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZoneSettingRequest {
  /** 站点ID。 */
  ZoneId: string;
}

declare interface DescribeZoneSettingResponse {
  /** 站点配置。 */
  ZoneSetting: ZoneSetting | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：zone-name 按照【站点名称】进行过滤。 类型：String 必选：否zone-id 按照【站点ID】进行过滤。站点ID形如：zone-xxx。 类型：String 必选：否status 按照【站点状态】进行过滤。 类型：String 必选：否tag-key 按照【标签键】进行过滤。 类型：String 必选：否tag-value 按照【标签值】进行过滤。 类型：String 必选：否模糊查询时仅支持过滤字段名为zone-name。 */
  Filters?: AdvancedFilter[];
  /** 排序字段，取值有： type：接入类型； area：加速区域； create-time：创建时间； zone-name：站点名称； use-time：最近使用时间； active-status：生效状态。不填写使用默认值create-time。 */
  Order?: string;
  /** 排序方向，取值有： asc：从小到大排序； desc：从大到小排序。不填写使用默认值desc。 */
  Direction?: string;
}

declare interface DescribeZonesResponse {
  /** 符合条件的站点个数。 */
  TotalCount: number;
  /** 站点详细信息列表。 */
  Zones: Zone[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadL4LogsRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 四层实例ID集合。 */
  ProxyIds?: string[];
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
}

declare interface DownloadL4LogsResponse {
  /** 四层离线日志数据列表。 */
  Data: L4OfflineLog[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadL7LogsRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 站点集合，不填默认选择全部站点。 */
  ZoneIds?: string[];
  /** 子域名集合，不填默认选择全部子域名。 */
  Domains?: string[];
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
}

declare interface DownloadL7LogsResponse {
  /** 七层离线日志数据列表。 */
  Data: L7OfflineLog[] | null;
  /** 查询结果的总条数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IdentifyZoneRequest {
  /** 站点名称。 */
  ZoneName: string;
}

declare interface IdentifyZoneResponse {
  /** 站点归属校验：Dns校验信息。 */
  Ascription: AscriptionInfo;
  /** 站点归属权校验：文件校验信息。 */
  FileAscription: FileAscriptionInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAliasDomainRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 别称域名名称。 */
  AliasName: string;
  /** 目标域名名称。 */
  TargetName: string;
  /** 证书配置，取值有： none：不配置； hosting：SSL托管证书； apply：申请免费证书。不填写保持原有配置。 */
  CertType?: string;
  /** 当 CertType 取值为 hosting 时填入相应证书 ID。 */
  CertId?: string[];
}

declare interface ModifyAliasDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAliasDomainStatusRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 别称域名状态，取值有： false：开启别称域名； true：关闭别称域名。 */
  Paused: boolean;
  /** 待修改状态的别称域名名称。如果为空，则不执行修改状态操作。 */
  AliasNames?: string[];
}

declare interface ModifyAliasDomainStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationProxyRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 代理ID。 */
  ProxyId: string;
  /** 当ProxyType=hostname时，表示域名或子域名；当ProxyType=instance时，表示代理名称。 */
  ProxyName: string;
  /** 会话保持时间，取值范围：30-3600，单位：秒。不填写保持原有配置。 */
  SessionPersistTime?: number;
  /** 四层代理模式，取值有：hostname：表示子域名模式；instance：表示实例模式。不填写保持原有配置。 */
  ProxyType?: string;
  /** Ipv6访问配置，不填写保持原有配置。 */
  Ipv6?: Ipv6;
}

declare interface ModifyApplicationProxyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationProxyRuleRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 代理ID。 */
  ProxyId: string;
  /** 规则ID。 */
  RuleId: string;
  /** 源站类型，取值有：custom：手动添加；origins：源站组。不填保持原有值。 */
  OriginType: string;
  /** 端口，支持格式：80：80端口；81-90：81至90端口。 */
  Port: string[];
  /** 协议，取值有：TCP：TCP协议；UDP：UDP协议。不填保持原有值。 */
  Proto?: string;
  /** 源站信息：当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。不填保持原有值。 */
  OriginValue?: string[];
  /** 传递客户端IP，取值有：TOA：TOA（仅Proto=TCP时可选）；PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；PPV2：Proxy Protocol传递，协议版本V2；OFF：不传递。不填保持原有值。 */
  ForwardClientIp?: string;
  /** 是否开启会话保持，取值有：true：开启；false：关闭。不填为false。 */
  SessionPersist?: boolean;
  /** 源站端口，支持格式：单端口：80；端口段：81-90，81至90端口。 */
  OriginPort?: string;
}

declare interface ModifyApplicationProxyRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationProxyRuleStatusRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 代理ID。 */
  ProxyId: string;
  /** 规则ID。 */
  RuleId: string;
  /** 状态，取值有：offline: 停用；online: 启用。 */
  Status: string;
}

declare interface ModifyApplicationProxyRuleStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationProxyStatusRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 代理ID。 */
  ProxyId: string;
  /** 状态，取值有：offline: 停用；online: 启用。 */
  Status: string;
}

declare interface ModifyApplicationProxyStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDefaultCertificateRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 默认证书ID。 */
  CertId?: string;
  /** 证书状态，取值有：deployed ：部署证书；disabled ：禁用证书。失败状态下重新deployed即可重试。 */
  Status?: string;
}

declare interface ModifyDefaultCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHostsCertificateRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 本次变更的域名列表。 */
  Hosts: string[];
  /** 证书信息, 只需要传入 CertId 即可, 如果为空, 则使用默认证书。 */
  ServerCertInfo?: ServerCertInfo[];
  /** 托管类型，取值有：apply：托管EO；none：不托管EO；不填，默认取值为apply。 */
  ApplyType?: string;
}

declare interface ModifyHostsCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOriginGroupRequest {
  /** 站点ID。 */
  ZoneId: string;
  /** 源站组ID。 */
  OriginGroupId: string;
  /** 源站类型，取值有：self：自有源站；third_party：第三方源站；cos：腾讯云COS源站。 */
  OriginType: string;
  /** 源站组名称。 */
  OriginGroupName: string;
  /** 源站配置类型，当OriginType=self时，取值有：area：按区域配置；weight： 按权重配置；proto： 按HTTP协议配置。当OriginType=third_party/cos时放空。 */
  ConfigurationType: string;
  /** 源站记录信息。 */
  OriginRecords: OriginRecord[];
  /** 回源Host，仅当OriginType=self时可以设置。不填写，表示使用已有配置。 */
  HostHeader?: string;
}

declare interface ModifyOriginGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRulePriorityRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 规则 ID 的顺序，多条规则执行顺序依次往下。 */
  RuleIds: string[];
}

declare interface ModifyRulePriorityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 规则名称，字符串名称长度 1~255。 */
  RuleName: string;
  /** 规则内容。 */
  Rules: Rule[];
  /** 规则 ID。 */
  RuleId: string;
  /** 规则状态，取值有： enable: 启用； disable: 未启用。 */
  Status: string;
  /** 规则标签。 */
  Tags?: string[];
}

declare interface ModifyRuleResponse {
  /** 规则 ID。 */
  RuleId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityPolicyRequest {
  /** 站点Id。 */
  ZoneId: string;
  /** 安全配置。 */
  SecurityConfig: SecurityConfig;
  /** 子域名/应用名。当使用Entity时可不填写TemplateId，否则必须填写TemplateId。 */
  Entity?: string;
  /** 模板策略id。当使用模板Id时可不填Entity，否则必须填写Entity。 */
  TemplateId?: string;
}

declare interface ModifySecurityPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityWafGroupPolicyRequest {
  /** 站点Id。当使用ZoneId和Entity时可不填写TemplateId，否则必须填写TemplateId。 */
  ZoneId?: string;
  /** 子域名。当使用ZoneId和Entity时可不填写TemplateId，否则必须填写TemplateId。 */
  Entity?: string;
  /** 总开关，取值有：on：开启；off：关闭。不填默认为上次的配置。 */
  Switch?: string;
  /** 规则等级，取值有： loose：宽松； normal：正常； strict：严格； stricter：超严格； custom：自定义。不填默认为上次的配置。 */
  Level?: string;
  /** 处置方式，取值有： block：阻断； observe：观察。不填默认为上次的配置。 */
  Mode?: string;
  /** 托管规则。不填默认为上次的配置。 */
  WafRules?: WafRule;
  /** AI引擎模式。不填默认为上次的配置。 */
  AiRule?: AiRule;
  /** 托管规则等级组。不填默认为上次的配置。 */
  WafGroups?: WafGroup[];
  /** 模板Id。当使用模板Id时可不填ZoneId和Entity，否则必须填写ZoneId和Entity。 */
  TemplateId?: string;
}

declare interface ModifySecurityWafGroupPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyZoneRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 站点接入方式，取值有： full：NS 接入； partial：CNAME 接入。不填写保持原有配置。 */
  Type?: string;
  /** 自定义站点信息，以替代系统默认分配的名称服务器。不填写保持原有配置。 */
  VanityNameServers?: VanityNameServers;
  /** 站点别名。数字、英文、-和_组合，限制20个字符。 */
  AliasZoneName?: string;
}

declare interface ModifyZoneResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyZoneSettingRequest {
  /** 待变更的站点ID。 */
  ZoneId: string;
  /** 缓存过期时间配置。不填写表示保持原有配置。 */
  CacheConfig?: CacheConfig;
  /** 节点缓存键配置。不填写表示保持原有配置。 */
  CacheKey?: CacheKey;
  /** 浏览器缓存配置。不填写表示保持原有配置。 */
  MaxAge?: MaxAge;
  /** 离线缓存配置。不填写表示保持原有配置。 */
  OfflineCache?: OfflineCache;
  /** Quic访问配置。不填写表示保持原有配置。 */
  Quic?: Quic;
  /** Post请求传输配置。不填写表示保持原有配置。 */
  PostMaxSize?: PostMaxSize;
  /** 智能压缩配置。不填写表示保持原有配置。 */
  Compression?: Compression;
  /** Http2回源配置。不填写表示保持原有配置。 */
  UpstreamHttp2?: UpstreamHttp2;
  /** 访问协议强制Https跳转配置。不填写表示保持原有配置。 */
  ForceRedirect?: ForceRedirect;
  /** Https加速配置。不填写表示保持原有配置。 */
  Https?: Https;
  /** 源站配置。不填写表示保持原有配置。 */
  Origin?: Origin;
  /** 智能加速配置。不填写表示保持原有配置。 */
  SmartRouting?: SmartRouting;
  /** WebSocket配置。不填写表示保持原有配置。 */
  WebSocket?: WebSocket;
  /** 客户端IP回源请求头配置。不填写表示保持原有配置。 */
  ClientIpHeader?: ClientIpHeader;
  /** 缓存预刷新配置。不填写表示保持原有配置。 */
  CachePrefresh?: CachePrefresh;
  /** Ipv6访问配置。不填写表示保持原有配置。 */
  Ipv6?: Ipv6;
  /** 回源时是否携带客户端IP所属地域信息的配置。不填写表示保持原有配置。 */
  ClientIpCountry?: ClientIpCountry;
  /** Grpc协议支持配置。不填写表示保持原有配置。 */
  Grpc?: Grpc;
}

declare interface ModifyZoneSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyZoneStatusRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 站点状态，取值有： false：开启站点； true：关闭站点。 */
  Paused: boolean;
}

declare interface ModifyZoneStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReclaimAliasDomainRequest {
  /** 站点 ID。 */
  ZoneId?: string;
  /** 站点名称。 */
  ZoneName?: string;
}

declare interface ReclaimAliasDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReclaimZoneRequest {
  /** 站点名称。 */
  ZoneName: string;
}

declare interface ReclaimZoneResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateOriginProtectionIPWhitelistRequest {
  /** 站点ID。 */
  ZoneId: string;
}

declare interface UpdateOriginProtectionIPWhitelistResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20220106 {
  type VersionHeader = { headers: { 'X-TC-Version': '2022-01-06' } }

  /** 精准防护条件 */
  interface ACLCondition {
    /** 匹配字段 */
    MatchFrom: string;
    /** 匹配字符串 */
    MatchParam: string;
    /** 匹配关系 */
    Operator: string;
    /** 匹配内容 */
    MatchContent: string;
  }

  /** ACL用户规则 */
  interface ACLUserRule {
    /** 规则名。 */
    RuleName: string;
    /** 处罚动作。1. trans 放行2. drop 拦截3. monitor 观察4. ban IP封禁5. redirect 重定向6. page 指定页面7. alg Javascript挑战 */
    Action: string;
    /** 规则状态。1. on 规则生效2. off 规则失效 */
    RuleStatus: string;
    /** ACL规则。 */
    Conditions: ACLCondition[];
    /** 规则优先级，0-100。 */
    RulePriority: number;
    /** 规则id。 */
    RuleID?: number | null;
    /** 更新时间。 */
    UpdateTime?: string | null;
    /** ip封禁的惩罚时间，0-2天 */
    PunishTime?: number | null;
    /** ip封禁的惩罚时间单位。1. second 秒2. 分钟 minutes3. hour 小时 */
    PunishTimeUnit?: string | null;
    /** 自定义返回页面的实例id。 */
    PageId?: number | null;
    /** 自定义返回页面的名称。 */
    Name?: string | null;
    /** 重定向时候的地址，必须为本用户接入的站点子域名。 */
    RedirectUrl?: string | null;
    /** 重定向时候的返回码。 */
    ResponseCode?: number | null;
  }

  /** ACL配置 */
  interface AclConfig {
    /** 开关。1. on 开启2. off 关闭 */
    Switch: string;
    /** 自定义-用户规则。 */
    UserRules: ACLUserRule[];
  }

  /** AI规则引擎防护 */
  interface AiRule {
    /** AI规则引擎状态，取值有： smart_status_close：关闭； smart_status_open：拦截处置； smart_status_observe：观察处置。 */
    Mode?: string | null;
  }

  /** 应用代理实例 */
  interface ApplicationProxy {
    /** 代理ID。 */
    ProxyId?: string;
    /** 当ProxyType=hostname时，表示域名或子域名；当ProxyType=instance时，表示代理名称。 */
    ProxyName: string;
    /** 调度模式，取值有：ip：表示Anycast IP调度；domain：表示CNAME调度。 */
    PlatType: string;
    /** 是否开启安全，取值有：0：关闭安全；1：开启安全。 */
    SecurityType: number;
    /** 是否开启加速，取值有：0：关闭加速；1：开启加速。 */
    AccelerateType: number;
    /** 字段已经废弃。 */
    ForwardClientIp: string;
    /** 字段已经废弃。 */
    SessionPersist: boolean;
    /** 规则列表。 */
    Rule: ApplicationProxyRule[];
    /** 状态，取值有：online：启用；offline：停用；progress：部署中；stopping：停用中；fail：部署失败/停用失败。 */
    Status: string;
    /** 调度信息。 */
    ScheduleValue: string[];
    /** 更新时间。 */
    UpdateTime: string;
    /** 站点ID。 */
    ZoneId: string;
    /** 站点名称。 */
    ZoneName: string;
    /** 会话保持时间。 */
    SessionPersistTime: number;
    /** 四层代理模式，取值有：hostname：表示子域名模式；instance：表示实例模式。 */
    ProxyType: string;
    /** 当ProxyType=hostname时：表示代理加速唯一标识。 */
    HostId: string;
    /** Ipv6访问配置。 */
    Ipv6: Ipv6Access;
    /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。默认值：overseas */
    Area: string;
    /** 封禁状态，取值有：banned：已封禁;banning：封禁中；recover：已解封；recovering：解封禁中。 */
    BanStatus: string;
  }

  /** 应用代理规则 */
  interface ApplicationProxyRule {
    /** 协议，取值有：TCP：TCP协议；UDP：UDP协议。 */
    Proto: string;
    /** 端口，支持格式：单个端口，如：80。端口段，如：81-82。表示81，82两个端口。注意：一条规则最多可填写20个端口。 */
    Port: string[];
    /** 源站类型，取值有：custom：手动添加；origins：源站组。 */
    OriginType: string;
    /** 源站信息：当OriginType=custom时，表示一个或多个源站，如：OriginValue=["8.8.8.8:80","9.9.9.9:80"]OriginValue=["test.com:80"]；当OriginType=origins时，要求有且仅有一个元素，表示源站组ID，如：OriginValue=["origin-537f5b41-162a-11ed-abaa-525400c5da15"]。 */
    OriginValue: string[];
    /** 规则ID。 */
    RuleId?: string;
    /** 状态，取值有：online：启用；offline：停用；progress：部署中；stopping：停用中；fail：部署失败/停用失败。 */
    Status?: string;
    /** 传递客户端IP，取值有：TOA：TOA（仅Proto=TCP时可选）；PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；PPV2：Proxy Protocol传递，协议版本V2；OFF：不传递。 */
    ForwardClientIp?: string;
    /** 是否开启会话保持，取值有：true：开启；false：关闭。 */
    SessionPersist?: boolean;
  }

  /** 安全Bot配置 */
  interface BotConfig {
    /** 开关。1. on 开启2. off 关闭 */
    Switch?: string;
    /** 通用详细基础规则。 */
    ManagedRule?: BotManagedRule;
    /** ua基础规则。 */
    UaBotRule?: BotManagedRule;
    /** isp基础规则。 */
    IspBotRule?: BotManagedRule;
    /** 用户画像规则。 */
    PortraitRule?: BotPortraitRule;
    /** Bot智能分析。 */
    IntelligenceRule?: IntelligenceRule | null;
  }

  /** Bot攻击日志 */
  interface BotLog {
    /** 攻击时间，采用unix秒级时间戳。 */
    AttackTime: number;
    /** 攻击源（客户端）ip。 */
    AttackIp: string;
    /** 受攻击域名。 */
    Domain: string;
    /** URI。 */
    RequestUri: string;
    /** 当前该字段无效。 */
    AttackType: string | null;
    /** 请求方法。 */
    RequestMethod: string;
    /** 攻击内容。 */
    AttackContent: string;
    /** 当前该字段无效 。 */
    RiskLevel: string | null;
    /** 当前该字段无效 。 */
    RuleId: number | null;
    /** IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)。 */
    SipCountryCode: string;
    /** 请求（事件）ID。 */
    EventId: string;
    /** 该字段当前无效。 */
    DisposalMethod: string | null;
    /** 该字段当前无效。 */
    HttpLog: string | null;
    /** user agent。 */
    Ua: string;
    /** 该字段当前无效。 */
    DetectionMethod: string | null;
    /** 该字段当前无效。 */
    Confidence: string | null;
    /** 该字段当前无效。 */
    Maliciousness: string | null;
    /** 规则相关信息列表。 */
    RuleDetailList: SecRuleRelatedInfo[] | null;
    /** Bot标签。 */
    Label: string | null;
  }

  /** 限速拦截日志 */
  interface BotLogData {
    /** Bot攻击日志数据集合。 */
    List: BotLog[] | null;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number | null;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number | null;
    /** 总页数。 */
    Pages: number | null;
    /** 总条数。 */
    TotalSize: number | null;
  }

  /** Bot 规则，下列规则ID可参考接口 DescribeBotManagedRules返回的ID信息 */
  interface BotManagedRule {
    /** 本规则的ID。 */
    RuleID: number;
    /** 老版本的通用规则ID。 */
    ManagedIds: number[] | null;
    /** 触发规则后的处置方式。1. drop 拦截2. trans 放行3. monitor 观察4. alg Javascript挑战 */
    Action?: string;
    /** 封禁的惩罚时间。 */
    PunishTime?: number | null;
    /** 封禁的惩罚时间单位。 */
    PunishTimeUnit?: string | null;
    /** 放行的规则ID。 */
    TransManagedIds?: number[] | null;
    /** JS挑战的规则ID。 */
    AlgManagedIds?: number[] | null;
    /** 数字验证码的规则ID。 */
    CapManagedIds?: number[] | null;
    /** 观察的规则ID。 */
    MonManagedIds?: number[] | null;
    /** 拦截的规则ID。 */
    DropManagedIds?: number[] | null;
    /** 自定义返回页面的实例id。 */
    PageId?: number | null;
    /** 自定义返回页面的名称。 */
    Name?: string | null;
    /** 重定向时候的地址，必须为本用户接入的站点子域名，使用URLENCODE。 */
    RedirectUrl?: string | null;
    /** 重定向时候的返回码。 */
    ResponseCode?: number | null;
  }

  /** bot托管规则详情 */
  interface BotManagedRuleDetail {
    /** 规则ID */
    RuleId: number;
    /** 规则描述 */
    Description: string;
    /** 规则分类 */
    RuleTypeName: string;
    /** 该规则开启/关闭 */
    Status: string;
  }

  /** bot 用户画像规则 */
  interface BotPortraitRule {
    /** 本功能的开关。1. on 开启2. off 关闭 */
    Switch?: string | null;
    /** 本规则的ID。 */
    RuleID?: number | null;
    /** JS挑战的规则ID。 */
    AlgManagedIds?: number[] | null;
    /** 数字验证码的规则ID。 */
    CapManagedIds?: number[] | null;
    /** 观察的规则ID。 */
    MonManagedIds?: number[] | null;
    /** 拦截的规则ID。 */
    DropManagedIds?: number[] | null;
    /** 保留。 */
    ManagedIds?: number[] | null;
    /** 保留。 */
    TransManagedIds?: number[] | null;
  }

  /** CC拦截事件 */
  interface CCInterceptEvent {
    /** 客户端ip */
    ClientIp: string | null;
    /** 拦截次数/min */
    InterceptNum: number | null;
    /** 速拦截时间，分钟时间/min,单位为s */
    InterceptTime: number;
  }

  /** CC拦截事件数据 */
  interface CCInterceptEventData {
    /** 攻击事件数据集合 */
    List: CCInterceptEvent[] | null;
    /** 当前页 */
    PageNo: number | null;
    /** 每页展示条数 */
    PageSize: number | null;
    /** 总页数 */
    Pages: number | null;
    /** 总条数 */
    TotalSize: number | null;
  }

  /** CC日志 */
  interface CCLog {
    /** 攻击请求时间，采用unix秒级时间戳。 */
    AttackTime: number;
    /** 客户端ip。 */
    AttackSip: string;
    /** 受攻击域名。 */
    AttackDomain: string;
    /** URI。 */
    RequestUri: string;
    /** 命中次数。 */
    HitCount: number;
    /** IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json)。 */
    SipCountryCode: string;
    /** 请求（事件）ID。 */
    EventId: string;
    /** 当前该字段已废弃。 */
    DisposalMethod: string | null;
    /** 当前该字段已废弃。 */
    HttpLog: string | null;
    /** 当前该字段已废弃。 */
    RuleId: number | null;
    /** 当前该字段已废弃。 */
    RiskLevel: string | null;
    /** User Agent，仅自定义规则日志中存在。 */
    Ua: string | null;
    /** 请求方法，仅自定义规则日志中存在。 */
    RequestMethod: string | null;
    /** 规则信息列表。 */
    RuleDetailList: SecRuleRelatedInfo[] | null;
  }

  /** 限速拦截日志 */
  interface CCLogData {
    /** CC拦截日志数据集合。 */
    List: CCLog[] | null;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number;
    /** 总页数。 */
    Pages: number;
    /** 总条数。 */
    TotalSize: number;
  }

  /** 缓存规则配置。 */
  interface CacheConfig {
    /** 缓存配置。 */
    Cache?: CacheConfigCache | null;
    /** 不缓存配置。 */
    NoCache?: CacheConfigNoCache | null;
    /** 遵循源站配置。 */
    FollowOrigin?: CacheConfigFollowOrigin | null;
  }

  /** 缓存时间设置 */
  interface CacheConfigCache {
    /** 缓存配置开关，取值有：on：开启；off：关闭。 */
    Switch: string;
    /** 缓存过期时间设置。单位为秒，最大可设置为 365 天。 */
    CacheTime?: number | null;
    /** 是否开启强制缓存，取值有：on：开启；off：关闭。 */
    IgnoreCacheControl?: string | null;
  }

  /** 缓存遵循源站配置 */
  interface CacheConfigFollowOrigin {
    /** 遵循源站配置开关，取值有：on：开启；off：关闭。 */
    Switch: string;
  }

  /** 不缓存配置 */
  interface CacheConfigNoCache {
    /** 不缓存配置开关，取值有：on：开启；off：关闭。 */
    Switch: string;
  }

  /** 缓存键配置 */
  interface CacheKey {
    /** 是否开启全路径缓存，取值有：on：开启全路径缓存（即关闭参数忽略）；off：关闭全路径缓存（即开启参数忽略）。 */
    FullUrlCache?: string | null;
    /** 是否忽略大小写缓存，取值有：on：忽略；off：不忽略。 */
    IgnoreCase?: string | null;
    /** CacheKey中包含请求参数。 */
    QueryString?: QueryString | null;
  }

  /** 缓存预刷新 */
  interface CachePrefresh {
    /** 缓存预刷新配置开关，取值有：on：开启；off：关闭。 */
    Switch: string;
    /** 缓存预刷新百分比，取值范围：1-99。 */
    Percent?: number | null;
  }

  /** 证书查询过滤条件 */
  interface CertFilter {
    /** 过滤字段名，支持的列表如下: - host：域名。 - certId: 证书ID - certAlias: 证书备用名 - certType: default: 默认证书, upload: 上传证书, managed:腾讯云证书 */
    Name: string;
    /** 过滤字段值 */
    Values: string[];
    /** 是否启用模糊查询，仅支持过滤字段名host。模糊查询时，Value长度最大为1。 */
    Fuzzy?: boolean;
  }

  /** 查询结果排序条件。 */
  interface CertSort {
    /** 排序字段，当前支持：createTime，域名创建时间certExpireTime，证书过期时间certDeployTime, 证书部署时间 */
    Key: string;
    /** asc/desc，默认desc。 */
    Sequence?: string;
  }

  /** 存储客户端请求IP的头部信息配置 */
  interface ClientIp {
    /** 配置开关，取值有：on：开启；off：关闭。 */
    Switch: string;
    /** 回源时，存放客户端IP的请求头名称。为空则使用默认值：X-Forwarded-IP。 */
    HeaderName?: string | null;
  }

  /** CNAME 状态 */
  interface CnameStatus {
    /** 记录名称 */
    Name: string;
    /** CNAME 地址 */
    Cname: string | null;
    /** 状态生效：active不生效：moved */
    Status: string | null;
  }

  /** 智能压缩配置 */
  interface Compression {
    /** 智能压缩配置开关，取值有：on：开启；off：关闭。 */
    Switch: string;
    /** 支持的压缩算法列表，取值有：brotli：brotli算法；gzip：gzip算法。 */
    Algorithms?: string[] | null;
  }

  /** DDoS配置端口过滤 */
  interface DDoSAcl {
    /** 目的端口结束，取值范围0-65535。 */
    DportEnd?: number;
    /** 目的端口开始，取值范围0-65535。 */
    DportStart?: number;
    /** 源端口结束，取值范围0-65535。 */
    SportEnd?: number;
    /** 源端口开始，取值范围0-65535。 */
    SportStart?: number;
    /** 协议，取值有：tcp ：tcp协议 ；udp ：udp协议 ；all ：全部协议 。 */
    Protocol?: string;
    /** 执行动作，取值为：drop ：丢弃 ；transmit ：放行 ；forward ：继续防护 。 */
    Action?: string;
    /** 是否为系统配置，取值为：0 ：修改配置 ；1 ：系统默认配置 。 */
    Default?: number;
  }

  /** DDoS协议防护+连接防护 */
  interface DDoSAntiPly {
    /** tcp协议封禁，取值有：off ：关闭 ；on ：开启 。 */
    DropTcp: string;
    /** udp协议封禁，取值有：off ：关闭 ；on ：开启 。 */
    DropUdp: string;
    /** icmp协议封禁，取值有：off ：关闭 ；on ：开启 。 */
    DropIcmp: string;
    /** 其他协议封禁，取值有：off ：关闭 ；on ：开启 。 */
    DropOther: string;
    /** 源站每秒新连接限速，取值范围0-4294967295。 */
    SourceCreateLimit: number;
    /** 源站并发连接控制，取值范围0-4294967295。 */
    SourceConnectLimit: number;
    /** 目的端口每秒新连接限速，取值范围0-4294967295。 */
    DestinationCreateLimit: number;
    /** 目的端口并发连接控制，取值范围0-4294967295。 */
    DestinationConnectLimit: number;
    /** 每秒异常连接数阈值，取值范围0-4294967295。 */
    AbnormalConnectNum: number;
    /** 异常syn报文百分比阈值，取值范围0-100。 */
    AbnormalSynRatio: number;
    /** 异常syn报文阈值，取值范围0-65535。 */
    AbnormalSynNum: number;
    /** 每秒连接超时检测，取值范围0-65535。 */
    ConnectTimeout: number;
    /** 空连接防护开启，取值有：off ：关闭 ；on ：开启 。 */
    EmptyConnectProtect: string;
    /** UDP分片开关，取值有：off ：关闭 ；on ：开启 。 */
    UdpShard?: string;
  }

  /** DDoS7层应用 */
  interface DDoSApplication {
    /** 二级域名 */
    Host?: string | null;
    /** 域名状态；init 待切nsoffline 需要dns开启站点加速process 在部署中，稍等一会online 正常状态 */
    Status?: string | null;
    /** 加速开关；on-开启加速；off-关闭加速（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强） */
    AccelerateType?: string | null;
    /** 安全开关；on-开启安全；off-关闭安全（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强） */
    SecurityType?: string | null;
  }

  /** DDoS配置 */
  interface DDoSConfig {
    /** 开关 */
    Switch: string;
  }

  /** DDoS特征过滤 */
  interface DDoSFeaturesFilter {
    /** 执行动作，取值有：drop ：丢弃 ；transmit ：放行 ；drop_block ：丢弃并拉黑 ；forward ：继续防护 。 */
    Action?: string;
    /** 协议，取值有：tcp ：tcp协议 ；udp ：udp协议 ；icmp ：icmp协议 ；all ：全部协议 。 */
    Protocol?: string;
    /** 目标端口开始，取值范围0-65535。 */
    DportStart?: number;
    /** 目标端口结束，取值范围0-65535。 */
    DportEnd?: number;
    /** 最小包长，取值范围0-1500。 */
    PacketMin?: number;
    /** 最大包长，取值范围0-1500。 */
    PacketMax?: number;
    /** 源端口开始，取值范围0-65535。 */
    SportStart?: number;
    /** 源端口结束，取值范围0-65535。 */
    SportEnd?: number;
    /** 匹配方式1，【特征1】，取值有：pcre ：正则匹配 ；sunday ：字符串匹配 。默认为空字符串。 */
    MatchType?: string;
    /** 取非判断，该参数对MatchType配合使用，【特征1】，取值有：0 ：匹配 ；1 ：不匹配 。 */
    IsNot?: number;
    /** 偏移量1，【特征1】，取值范围0-1500。 */
    Offset?: number;
    /** 检测包字符深度，【特征1】，取值范围1-1500。 */
    Depth?: number;
    /** 匹配开始层级，层级参考计算机网络结构，取值有：begin_l5 ：载荷开始检测 ；begin_l4 ：tcp/udp首部开始检测 ；begin_l3 ：ip首部开始检测 。 */
    MatchBegin?: string;
    /** 正则或字符串匹配的内容，【特征1】。 */
    Str?: string;
    /** 匹配方式2，【特征2】，取值有：pcre ：正则匹配 ；sunday ：字符串匹配 。默认为空字符串。 */
    MatchType2?: string;
    /** 取非判断2，该参数对MatchType2配合使用，【特征2】，取值有：0 ：匹配 ；1 ：不匹配 。 */
    IsNot2?: number;
    /** 偏移量2，【特征2】，取值范围0-1500。 */
    Offset2?: number;
    /** 检测包字符深度，【特征2】，取值范围1-1500。 */
    Depth2?: number;
    /** 匹配开始层级，层级参考计算机网络结构，取值有：begin_l5 ：载荷开始检测 ；begin_l4 ：tcp/udp首部开始检测；begin_l3 ：ip首部开始检测 。 */
    MatchBegin2?: string;
    /** 正则或字符串匹配的内容，【特征2】。 */
    Str2?: string;
    /** 多特征关系，仅配置【特征1】时填 none，存在【特征2】配置可不填。 */
    MatchLogic?: string;
  }

  /** DDoS地域封禁 */
  interface DDoSGeoIp {
    /** 区域封禁清空标识，取值有：off ：清空地域封禁列表 ；on ：不做处理 。 */
    Switch?: string;
    /** 地域信息，ID参考[DescribeSecurityPolicyRegions](https://tcloud4api.woa.com/document/product/1657/76031?!preview&!document=1)。 */
    RegionId?: number[];
  }

  /** DDoS封禁等级 */
  interface DDoSStatusInfo {
    /** 暂不支持，默认值off。 */
    AiStatus: string;
    /** 废弃字段。 */
    Appid: string;
    /** 策略等级，取值有:low ：宽松 ；middle ：适中 ；high : 严格。 */
    PlyLevel: string;
  }

  /** DDoS黑白名单 */
  interface DDoSUserAllowBlockIP {
    /** 客户端IP。 */
    Ip?: string;
    /** 掩码。 */
    Mask?: number;
    /** 类型，取值有：block ：丢弃 ；allow ：允许。 */
    Type?: string;
    /** 10位时间戳，例如1199116800。 */
    UpdateTime?: number;
    /** 客户端IP2，设置IP范围时使用，例如 1.1.1.1-1.1.1.2。 */
    Ip2?: string;
    /** 掩码2，设置IP网段范围时使用，例如 1.1.1.0/24-1.1.2.0/24。 */
    Mask2?: number;
  }

  /** DDos攻击事件对象 */
  interface DDosAttackEvent {
    /** ddos 策略组id */
    PolicyId: number | null;
    /** 攻击类型(对应交互事件名称) */
    AttackType: string | null;
    /** 攻击状态 */
    AttackStatus: number | null;
    /** 攻击最大带宽 */
    AttackMaxBandWidth: number | null;
    /** 攻击包速率峰值 */
    AttackPacketMaxRate: number | null;
    /** 攻击开始时间 单位为s */
    AttackStartTime: number | null;
    /** 攻击结束时间 单位为s */
    AttackEndTime: number | null;
    /** 事件ID */
    EventId: string | null;
    /** 站点id */
    ZoneId: string | null;
  }

  /** DDos攻击事件数据 */
  interface DDosAttackEventData {
    /** 攻击事件数据集合。 */
    List: DDosAttackEvent[] | null;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number | null;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number | null;
    /** 总页数。 */
    Pages: number | null;
    /** 总条数。 */
    TotalSize: number | null;
  }

  /** ddos 攻击事件的详情 */
  interface DDosAttackEventDetailData {
    /** 攻击状态，取值有：1 ：观察中 ；2 ：攻击开始 ；3 ：攻击结束 。 */
    AttackStatus: number;
    /** 攻击类型。 */
    AttackType: string;
    /** 结束时间。 */
    EndTime: number;
    /** 开始时间。 */
    StartTime: number;
    /** 最大带宽。 */
    MaxBandWidth: number;
    /** 最大包速率。 */
    PacketMaxRate: number;
    /** 事件Id。 */
    EventId: string;
    /** ddos 策略组id。 */
    PolicyId: number;
  }

  /** DDos攻击事件对象 */
  interface DDosAttackSourceEvent {
    /** 攻击源ip。 */
    AttackSourceIp: string | null;
    /** 地区（国家）。 */
    AttackRegion: string | null;
    /** 累计攻击流量。 */
    AttackFlow: number | null;
    /** 累计攻击包量。 */
    AttackPacketNum: number | null;
  }

  /** DDos攻击源数据 */
  interface DDosAttackSourceEventData {
    /** DDos攻击源数据集合。 */
    List: DDosAttackSourceEvent[] | null;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number | null;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number | null;
    /** 总页数。 */
    Pages: number | null;
    /** 总条数。 */
    TotalSize: number | null;
  }

  /** DDos主攻击事件 */
  interface DDosMajorAttackEvent {
    /** ddos 策略组id。 */
    PolicyId: number;
    /** 攻击最大带宽。 */
    AttackMaxBandWidth: number;
    /** 攻击请求时间，采用unix秒级时间戳。 */
    AttackTime: number;
  }

  /** 主攻击对象Data */
  interface DDosMajorAttackEventData {
    /** DDosMajorAttackEvent ddos 攻击事件。 */
    List: DDosMajorAttackEvent[] | null;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number | null;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number | null;
    /** 总页数。 */
    Pages: number | null;
    /** 总条数。 */
    TotalSize: number | null;
  }

  /** 统计曲线数据项 */
  interface DataItem {
    /** 时间 */
    Time: string;
    /** 数值 */
    Value: number | null;
  }

  /** ddos端口过滤 */
  interface DdosAcls {
    /** 端口过滤规则数组。 */
    Acl?: DDoSAcl[];
    /** 清空规则标识，取值有：off ：清空端口过滤规则列表，Acl无需填写。 ；on ：配置端口过滤规则，需填写Acl参数。默认值为on。 */
    Switch?: string;
  }

  /** ddos黑白名单 */
  interface DdosAllowBlock {
    /** 黑白名单数组。 */
    UserAllowBlockIp?: DDoSUserAllowBlockIP[];
    /** 开关标识防护是否清空，取值有：off ：清空黑白名单列表，UserAllowBlockIp无需填写。 ；on ：配置黑白名单，需填写UserAllowBlockIp参数。默认值为on。 */
    Switch?: string;
  }

  /** ddos特征过滤 */
  interface DdosPacketFilter {
    /** 特征过滤规则数组。 */
    PacketFilter?: DDoSFeaturesFilter[];
    /** 特征过滤清空标识，取值有：off ：清空特征过滤规则，无需填写 PacketFilter 参数 ；on ：配置特征过滤规则，需填写 PacketFilter 参数。默认值为on。 */
    Switch?: string;
  }

  /** Ddos防护配置 */
  interface DdosRule {
    /** DDoS防护等级。 */
    DdosStatusInfo?: DDoSStatusInfo | null;
    /** DDoS地域封禁。 */
    DdosGeoIp?: DDoSGeoIp | null;
    /** DDoS黑白名单。 */
    DdosAllowBlock?: DdosAllowBlock | null;
    /** DDoS 协议封禁+连接防护。 */
    DdosAntiPly?: DDoSAntiPly | null;
    /** DDoS特征过滤。 */
    DdosPacketFilter?: DdosPacketFilter | null;
    /** DDoS端口过滤。 */
    DdosAcl?: DdosAcls | null;
    /** DDoS开关，取值有:on ：开启 ；off ：关闭 。 */
    Switch?: string;
    /** UDP分片功能是否支持，取值有:on ：支持 ；off ：不支持 。 */
    UdpShardOpen?: string;
    /** DDoS源站访问速率限制。 */
    DdosSpeedLimit?: DdosSpeedLimit | null;
  }

  /** DDoS端口限速 */
  interface DdosSpeedLimit {
    /** 源站包量限制，支持单位有pps、Kpps、Mpps、Gpps。支持范围1 pps-10000 Gpps。"0 pps"或其他单位数值为0，即不限包。""为不更新。 */
    PackageLimit?: string;
    /** 源站流量限制，支持单位有bps、Kbps、Mbps、Gbps，支持范围1 bps-10000 Gbps。"0 bps"或其他单位数值为0，即不限流。""为不更新。 */
    FluxLimit?: string;
  }

  /** https 服务端证书配置 */
  interface DefaultServerCertInfo {
    /** 服务器证书 ID, 默认证书ID, 或在 SSL 证书管理进行证书托管时自动生成 */
    CertId: string | null;
    /** 证书备注名 */
    Alias?: string | null;
    /** 证书类型:default: 默认证书upload:用户上传managed:腾讯云托管 */
    Type?: string | null;
    /** 证书过期时间 */
    ExpireTime?: string | null;
    /** 证书生效时间 */
    EffectiveTime?: string | null;
    /** 证书公用名 */
    CommonName?: string | null;
    /** 证书SAN域名 */
    SubjectAltName?: string[] | null;
    /** 证书状态:applying: 证书申请中failed: 证书(申请)失败processing: 证书部署中deployed: 证书已部署disabled: 证书被禁用 */
    Status?: string | null;
    /** Status为失败时,此字段返回失败原因 */
    Message?: string | null;
  }

  /** 域名配置信息 */
  interface DetailHost {
    /** 腾讯云账号ID */
    AppId: number;
    /** 站点ID */
    ZoneId: string;
    /** 加速服务状态process：部署中online：已启动offline：已关闭 */
    Status: string;
    /** 域名 */
    Host: string;
  }

  /** Dns数据曲线过滤参数 */
  interface DnsDataFilter {
    /** 参数名称，取值范围：zone：站点名host：域名type：dns解析类型code：dns返回状态码area：解析服务器所在区域 */
    Name: string;
    /** 参数值当Name=area时，Value取值范围：亚洲：Asia欧洲：Europe非洲：Africa大洋洲：Oceania美洲：Americas当Name=code时，Value取值范围：NoError：成功的响应NXDomain：只在权威域名服务器的响应消息中有效，标示请求中请求的域不存在NotImp：域名服务器不支持请求的类型Refused：域名服务器因为策略的原因拒绝执行请求的操作 */
    Value?: string;
    /** 参数值当Name=area时，Value取值范围：亚洲：Asia欧洲：Europe非洲：Africa大洋洲：Oceania美洲：Americas当Name=code时，Value取值范围：NoError：成功的响应NXDomain：只在权威域名服务器的响应消息中有效，标示请求中请求的域不存在NotImp：域名服务器不支持请求的类型Refused：域名服务器因为策略的原因拒绝执行请求的操作 */
    Values?: string[];
  }

  /** DNS 记录 */
  interface DnsRecord {
    /** 记录 ID */
    Id: string;
    /** 记录类型 */
    Type: string;
    /** 主机记录 */
    Name: string;
    /** 记录值 */
    Content: string;
    /** 代理模式 */
    Mode: string;
    /** TTL 值 */
    Ttl: number;
    /** 优先级 */
    Priority: number | null;
    /** 创建时间 */
    CreatedOn: string;
    /** 修改时间 */
    ModifiedOn: string;
    /** 域名锁 */
    Locked: boolean;
    /** 站点 ID */
    ZoneId: string;
    /** 站点名称 */
    ZoneName: string;
    /** 解析状态active: 生效pending: 不生效 */
    Status: string;
    /** CNAME 地址 */
    Cname: string | null;
    /** 域名是否开启了负载均衡，四层代理，安全- lb 负载均衡- security 安全- l4 四层代理 */
    DomainStatus: string[] | null;
  }

  /** DNS 记录查询过滤条件 */
  interface DnsRecordFilter {
    /** 过滤字段名，支持的列表如下：- name: 站点名。- status: 站点状态 */
    Name: string;
    /** 过滤字段值 */
    Values: string[];
    /** 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1 */
    Fuzzy?: boolean;
  }

  /** DNSSEC 相关信息 */
  interface DnssecInfo {
    /** 标志 */
    Flags: number;
    /** 加密算法 */
    Algorithm: string;
    /** 加密类型 */
    KeyType: string;
    /** 摘要类型 */
    DigestType: string;
    /** 摘要算法 */
    DigestAlgorithm: string;
    /** 摘要信息 */
    Digest: string;
    /** DS 记录值 */
    DS: string;
    /** 密钥标签 */
    KeyTag: number;
    /** 公钥 */
    PublicKey: string;
  }

  /** 拦截页面的总体配置，用于配置各个模块的拦截后行为。 */
  interface DropPageConfig {
    /** 配置开关。1. on 开启2. off 关闭 */
    Switch: string;
    /** Waf(托管规则)模块的拦截页面配置。 */
    Waf: DropPageDetail | null;
    /** 自定义页面的拦截页面配置。 */
    Acl: DropPageDetail | null;
  }

  /** 拦截页面的配置信息 */
  interface DropPageDetail {
    /** 拦截页面的唯一Id。系统默认包含一个自带拦截页面，Id值为0。该Id可通过创建拦截页面接口进行上传获取。如传入0，代表使用系统默认拦截页面 */
    PageId: number;
    /** 拦截页面的HTTP状态码。状态码范围是 100 - 600。 */
    StatusCode: number;
    /** 页面的元信息，文件名或url。 */
    Name?: string;
    /** 页面的类型。 */
    Type?: string;
  }

  /** 例外规则，用于配置需要跳过特定场景的规则 */
  interface ExceptConfig {
    /** 开关。1. on 开启2. off 关闭 */
    Switch?: string | null;
    /** 例外规则详情。 */
    UserRules?: ExceptUserRule[] | null;
  }

  /** 例外规则的配置，包含生效的条件，生效的范围 */
  interface ExceptUserRule {
    /** 规则ID。 */
    RuleID?: number | null;
    /** 规则名称。 */
    RuleName?: string | null;
    /** 规则的处置方式。1. skip 跳过 */
    Action?: string | null;
    /** 规则生效状态。1. on 生效2. off 失效 */
    RuleStatus?: string | null;
    /** 更新时间。 */
    UpdateTime?: string | null;
    /** 匹配条件。 */
    Conditions?: ExceptUserRuleCondition[] | null;
    /** 规则生效的范围。 */
    Scope?: ExceptUserRuleScope | null;
    /** 优先级。 */
    RulePriority?: number | null;
  }

  /** 例外规则生效的具体条件 */
  interface ExceptUserRuleCondition {
    /** 匹配项。 */
    MatchFrom?: string | null;
    /** 匹配项的参数。当 MatchFrom 为 header 时，可以填入 header 的 key 作为参数。 */
    MatchParam?: string;
    /** 匹配操作符。 */
    Operator?: string | null;
    /** 匹配值。 */
    MatchContent?: string | null;
  }

  /** 例外规则的生效范围 */
  interface ExceptUserRuleScope {
    /** 生效的模块1. waf Waf防护2. bot Bot防护 */
    Modules?: string[] | null;
  }

  /** 失败原因 */
  interface FailReason {
    /** 失败原因 */
    Reason: string;
    /** 处理失败的资源列表。该列表元素来源于输入参数中的Targets，因此格式和入参中的Targets保持一致 */
    Targets: string[];
  }

  /** 过滤条件 */
  interface Filter {
    /** 筛选维度 */
    Key: string;
    /** 操作符 */
    Operator: string;
    /** 筛选维度值 */
    Value: string[];
  }

  /** 访问协议强制https跳转配置 */
  interface ForceRedirect {
    /** 访问强制跳转配置开关，取值有：on：开启；off：关闭。 */
    Switch: string;
    /** 重定向状态码，取值有：301：301跳转；302：302跳转。 */
    RedirectStatusCode?: number | null;
  }

  /** 地域信息 */
  interface GeoIp {
    /** 地域ID */
    RegionId: number;
    /** 国家名 */
    Country?: string;
    /** 洲 */
    Continent?: string;
    /** 国家英文名 */
    CountryEn?: string;
    /** 洲 */
    ContinentEn?: string;
  }

  /** 刷新预热附带的头部信息 */
  interface Header {
    /** HTTP头部 */
    Name: string;
    /** HTTP头部值 */
    Value: string;
  }

  /** 域名证书配置 */
  interface HostCertSetting {
    /** 域名 */
    Host: string | null;
    /** 服务端证书配置 */
    CertInfo: ServerCertInfo[] | null;
  }

  /** Hsts配置 */
  interface Hsts {
    /** 是否开启，取值有：on：开启；off：关闭。 */
    Switch: string;
    /** MaxAge数值。单位为秒，最大值为1天。 */
    MaxAge?: number | null;
    /** 是否包含子域名，取值有：on：开启；off：关闭。 */
    IncludeSubDomains?: string | null;
    /** 是否开启预加载，取值有：on：开启；off：关闭。 */
    Preload?: string | null;
  }

  /** 域名 https 加速配置，默认为关闭状态 */
  interface Https {
    /** http2 配置开关，取值有：on：开启；off：关闭。 */
    Http2?: string | null;
    /** OCSP 配置开关，取值有：on：开启；off：关闭。 */
    OcspStapling?: string | null;
    /** Tls版本设置，取值有：TLSv1：TLSv1版本；TLSV1.1：TLSv1.1版本；TLSV1.2：TLSv1.2版本；TLSv1.3：TLSv1.3版本。修改时必须开启连续的版本。 */
    TlsVersion?: string[] | null;
    /** HSTS 配置。 */
    Hsts?: Hsts | null;
  }

  /** 智能分析规则 */
  interface IntelligenceRule {
    /** 开关。1. on 开启2. off 关闭 */
    Switch?: string | null;
    /** 规则详情。 */
    Items?: IntelligenceRuleItem[] | null;
  }

  /** Bot智能分析规则详情 */
  interface IntelligenceRuleItem {
    /** 智能分析标签。1. evil_bot 恶意2. suspect_bot 疑似恶意3. good_bot 好的4. normal 正常 */
    Label?: string | null;
    /** 触发智能分析标签对应的处置方式。1. drop 拦截2. trans 放行3. monitor 监控4. alg Javascript挑战5. captcha 数字验证码 */
    Action?: string | null;
  }

  /** 基础管控规则配置。 */
  interface IpTableConfig {
    /** 开关。1. on 开启2. off 关闭 */
    Switch?: string | null;
    /** 基础管控规则。 */
    Rules?: IpTableRule[] | null;
  }

  /** 详细规则。 */
  interface IpTableRule {
    /** 规则ID。 */
    RuleID?: number | null;
    /** 处置动作。1. drop 拦截2. trans放行3. monitor观察 */
    Action?: string | null;
    /** 类型匹配。1. ip 根据ip2. area 根据区域3. ua 根据User-Agent4. referer 根据Referer */
    MatchFrom?: string | null;
    /** 匹配内容。 */
    MatchContent?: string | null;
    /** 更新时间。 */
    UpdateTime?: string | null;
  }

  /** Ipv6访问配置 */
  interface Ipv6Access {
    /** Ipv6访问功能配置，取值有：on：开启Ipv6访问功能；off：关闭Ipv6访问功能。 */
    Switch: string;
  }

  /** 离线日志详细信息 */
  interface L7OfflineLog {
    /** 日志打包开始时间 */
    LogTime: number | null;
    /** 子域名 */
    Domain: string | null;
    /** 原始大小 单位byte */
    Size: number | null;
    /** 下载地址 */
    Url: string | null;
    /** 日志数据包名 */
    LogPacketName: string | null;
    /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
    Area: string;
  }

  /** 负载均衡信息 */
  interface LoadBalancing {
    /** 负载均衡ID */
    LoadBalancingId: string;
    /** 站点ID */
    ZoneId: string;
    /** 子域名，填写@表示根域 */
    Host: string;
    /** 代理模式：dns_only: 仅DNSproxied: 开启代理 */
    Type: string;
    /** 当Type=dns_only表示DNS的TTL时间 */
    TTL: number;
    /** 使用的源站组ID */
    OriginId: string[];
    /** 使用的源站信息 */
    Origin: OriginGroup[];
    /** 更新时间 */
    UpdateTime: string;
    /** 状态 */
    Status: string;
    /** 调度域名 */
    Cname: string | null;
  }

  /** 门神规则 */
  interface ManagedRule {
    /** 规则id */
    RuleId: number;
    /** 规则描述 */
    Description: string;
    /** 规则类型名 */
    RuleTypeName: string;
    /** 策略规则防护等级 */
    RuleLevelDesc: string;
    /** 更新时间 */
    UpdateTime: string;
    /** 规则当前状态 block, allow */
    Status: string;
    /** 规则标签 */
    RuleTags?: string[] | null;
    /** 规则类型详细描述 */
    RuleTypeDesc?: string | null;
    /** 规则类型id */
    RuleTypeId?: number | null;
  }

  /** 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态 */
  interface MaxAge {
    /** 是否遵循源站，取值有：on：遵循源站，忽略MaxAge 时间设置；off：不遵循源站，使用MaxAge 时间设置。 */
    FollowOrigin?: string;
    /** MaxAge 时间设置，单位秒，最大365天。注意：时间为0，即不缓存。 */
    MaxAgeTime?: number;
  }

  /** 离线缓存是否开启 */
  interface OfflineCache {
    /** 离线缓存是否开启，取值有：on：开启；off：关闭。 */
    Switch: string;
  }

  /** 源站配置。 */
  interface Origin {
    /** 主源站列表。 */
    Origins?: string[] | null;
    /** 备源站列表。 */
    BackupOrigins?: string[] | null;
    /** 回源协议配置，取值有：http：强制 http 回源；follow：协议跟随回源；https：强制 https 回源，https 回源时仅支持源站 443 端口。 */
    OriginPullProtocol?: string | null;
    /** OriginType 为对象存储（COS）时，可以指定是否允许访问私有 bucket。 */
    CosPrivateAccess?: string | null;
  }

  /** 源站健康检查，源站状态信息 */
  interface OriginCheckOriginStatus {
    /** healthy: 健康，unhealthy: 不健康，process: 探测中 */
    Status: string;
    /** host列表，源站组不健康时存在值 */
    Host: string[] | null;
  }

  /** 源站组查询过滤参数 */
  interface OriginFilter {
    /** 要过滤的字段，支持：name */
    Name: string;
    /** 要过滤的值 */
    Value: string;
  }

  /** 源站组信息 */
  interface OriginGroup {
    /** 源站组ID */
    OriginId: string;
    /** 源站组名称 */
    OriginName: string;
    /** 源站组配置类型area：表示按照Record记录中的Area字段进行按客户端IP所在区域回源。weight：表示按照Record记录中的Weight字段进行按权重回源。 */
    Type: string;
    /** 记录 */
    Record: OriginRecord[];
    /** 更新时间 */
    UpdateTime: string;
    /** 站点ID */
    ZoneId: string;
    /** 站点名称 */
    ZoneName: string;
    /** 源站类型 */
    OriginType: string | null;
    /** 当前源站组是否被四层代理使用。 */
    ApplicationProxyUsed: boolean | null;
    /** 当前源站组是否被负载均衡使用。 */
    LoadBalancingUsed: boolean | null;
    /** 源站状态信息 */
    Status: OriginCheckOriginStatus | null;
    /** 使用当前源站组的负载均衡的类型：none：未被使用dns_only：被仅DNS类型负载均衡使用proxied：被代理加速类型负载均衡使用both：同时被仅DNS和代理加速类型负载均衡使用 */
    LoadBalancingUsedType: string | null;
  }

  /** 源站组记录 */
  interface OriginRecord {
    /** 记录值 */
    Record: string;
    /** 当源站配置类型Type=area时，表示区域为空表示默认区域 */
    Area: string[];
    /** 当源站配置类型Type=weight时，表示权重取值范围为[1-100]源站组内多个源站权重总和应为100。当源站配置类型Type=proto，表示权重取值范围为[1-100]源站组内Proto相同的多个源站权重总和应为100。 */
    Weight: number;
    /** 端口 */
    Port: number;
    /** 记录ID */
    RecordId?: string;
    /** 是否私有鉴权当源站类型OriginType=third_part时有效 */
    Private?: boolean | null;
    /** 私有鉴权参数当源站类型Private=true时有效 */
    PrivateParameter?: OriginRecordPrivateParameter[] | null;
    /** 当源站配置类型Type=proto时，表示客户端请求协议，取值：http/https */
    Proto?: string | null;
  }

  /** 源站记录私有鉴权参数 */
  interface OriginRecordPrivateParameter {
    /** 私有鉴权参数名称："AccessKeyId"：Access Key ID"SecretAccessKey"：Secret Access Key */
    Name: string;
    /** 私有鉴权参数数值 */
    Value: string;
  }

  /** edgeone套餐信息 */
  interface PlanInfo {
    /** 结算货币类型，取值有： CNY ：人民币结算； USD ：美元结算。 */
    Currency: string;
    /** 套餐所含流量（单位：字节） */
    Flux: number;
    /** 结算周期，取值有： y ：按年结算； m ：按月结算； h ：按小时结算； M ：按分钟结算； s ：按秒结算。 */
    Frequency: string;
    /** 套餐类型，取值有： sta ：全球内容分发网络（不包括中国大陆）标准版套餐； sta_with_bot ：全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理； sta_cm ：中国大陆内容分发网络标准版套餐； sta_cm_with_bot ：中国大陆内容分发网络标准版套餐附带bot管理； ent ：全球内容分发网络（不包括中国大陆）企业版套餐； ent_with_bot ： 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理； ent_cm ：中国大陆内容分发网络企业版套餐； ent_cm_with_bot ：中国大陆内容分发网络企业版套餐附带bot管理。 */
    PlanType: string;
    /** 套餐价格（单位：分） */
    Price: number;
    /** 套餐所含请求次数（单位：字节） */
    Request: number;
    /** 套餐所能绑定的站点个数。 */
    SiteNumber: number;
  }

  /** 用户画像规则详情 */
  interface PortraitManagedRuleDetail {
    /** 规则唯一id */
    RuleId?: number | null;
    /** 规则的描述 */
    Description?: string | null;
    /** 规则所属类型的名字, botdb(用户画像) */
    RuleTypeName?: string | null;
    /** 规则内的功能分类Id(扫描器，Bot行为等) */
    ClassificationId?: number | null;
    /** 规则当前所属动作状态(block, alg, ...) */
    Status?: string | null;
  }

  /** POST请求上传文件流式传输最大限制 */
  interface PostMaxSize {
    /** 是否开启POST请求上传文件限制，平台默认为限制为32MB，取值有：on：开启限制；off：关闭限制。 */
    Switch: string;
    /** 最大限制，取值在1MB和500MB之间。单位字节。 */
    MaxSize?: number | null;
  }

  /** 查询条件 */
  interface QueryCondition {
    /** 筛选条件的key。 */
    Key: string;
    /** 查询条件操作符，操作类型有：equals: 等于；notEquals: 不等于；include: 包含；notInclude: 不包含; startWith: 开始于；notStartWith: 不开始于；endWith: 结尾是；notEndWith: 不结尾是。 */
    Operator: string;
    /** 筛选条件的值。 */
    Value: string[];
  }

  /** CacheKey中包含请求参数 */
  interface QueryString {
    /** CacheKey是否由QueryString组成，取值有：on：是；off：否。 */
    Switch: string;
    /** CacheKey使用QueryString的方式，取值有：includeCustom：使用部分url参数；excludeCustom：排除部分url参数。 */
    Action?: string | null;
    /** 使用/排除的url参数数组。 */
    Value?: string[] | null;
  }

  /** Quic配置项 */
  interface Quic {
    /** 是否开启Quic配置，取值有：on：开启；off：关闭。 */
    Switch: string;
  }

  /** RateLimit配置 */
  interface RateLimitConfig {
    /** 开关。1. on 开启RateLimit；2. off 关闭RateLimit */
    Switch: string;
    /** 速率限制-用户规则列表。 */
    UserRules: RateLimitUserRule[];
    /** 速率限制模板功能。 */
    Template?: RateLimitTemplate | null;
    /** 智能客户端过滤。 */
    Intelligence?: RateLimitIntelligence | null;
  }

  /** 智能客户端过滤 */
  interface RateLimitIntelligence {
    /** 功能开关。1. on 开启2. off 关闭 */
    Switch?: string | null;
    /** 执行动作 1. monitor(观察)2. alg(挑战) */
    Action?: string | null;
  }

  /** 速率限制模板 */
  interface RateLimitTemplate {
    /** 模板等级名称。1. sup_loose 自适应 - 超级宽松2. loose 自适应 - 宽松3. emergency 自适应 - 紧急4. normal 自适应 - 适中5. strict 固定阈值 - 严格6. close 关闭 - 仅精准速率限制生效 */
    Mode?: string | null;
    /** 模板值详情。 */
    Detail?: RateLimitTemplateDetail | null;
  }

  /** 模板当前详细配置。 */
  interface RateLimitTemplateDetail {
    /** 模板等级名称。1. sup_loose 自适应 - 超级宽松2. loose 自适应 - 宽松3. emergency 自适应 - 紧急4. normal 自适应 - 适中5. strict 固定阈值 - 严格6. close 关闭 - 仅精准速率限制生效 */
    Mode?: string | null;
    /** 唯一id。 */
    ID?: number | null;
    /** 处置动作。模板阀值触发后的处罚行为。 */
    Action?: string | null;
    /** 惩罚时间，单位是秒。 */
    PunishTime?: number | null;
    /** 阈值。 */
    Threshold?: number | null;
    /** 统计周期。 */
    Period?: number | null;
  }

  /** RateLimit规则 */
  interface RateLimitUserRule {
    /** RateLimit统计阈值，单位是次，取值范围0-4294967294。 */
    Threshold: number;
    /** RateLimit统计时间，取值范围 10/20/30/40/50/60 单位是秒。 */
    Period: number;
    /** 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。 */
    RuleName: string;
    /** 处置动作。1. monitor(观察)；2. drop(拦截)；3. alg(Javascript挑战) */
    Action: string;
    /** 惩罚时长，0-100。 */
    PunishTime: number;
    /** 处罚时长单位。1. second 秒; 2. minutes 分钟3. hour 小时 */
    PunishTimeUnit: string;
    /** 规则状态。1. on 生效2. off 不生效 */
    RuleStatus: string;
    /** 规则。 */
    Conditions: ACLCondition[];
    /** 规则权重，取值范围0-100。 */
    RulePriority: number;
    /** 规则id。 */
    RuleID?: number | null;
    /** 过滤词。 */
    FreqFields?: string[] | null;
    /** 更新时间. */
    UpdateTime?: string | null;
  }

  /** 计费资源 */
  interface Resource {
    /** 资源 ID。 */
    Id: string;
    /** 付费模式，取值有：0：后付费。 */
    PayMode: number;
    /** 创建时间。 */
    CreateTime: string;
    /** 生效时间。 */
    EnableTime: string;
    /** 失效时间。 */
    ExpireTime: string;
    /** 套餐状态，取值有：normal：正常；isolated：隔离；destroyed：销毁。 */
    Status: string;
    /** 询价参数。 */
    Sv: Sv[];
    /** 是否自动续费，取值有：0：默认状态；1：自动续费；2：不自动续费。 */
    AutoRenewFlag: number;
    /** 套餐关联资源 ID。 */
    PlanId: string;
    /** 地域，取值有：mainland：国内；overseas：海外。 */
    Area: string;
  }

  /** 规则引擎功能项操作，对于一种功能只对应下面三种类型的其中一种，RuleAction 数组中的每一项只能是其中一个类型，更多功能项的填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
  interface RuleAction {
    /** 常规功能操作，选择该类型的功能项有： 访问URL 重写（AccessUrlRedirect）； 回源 URL 重写 （UpstreamUrlRedirect）； QUIC（QUIC）； WebSocket （WebSocket）； 视频拖拽（VideoSeek）； Token 鉴权（Authentication）； 自定义CacheKey（CacheKey）； 节点缓存 TTL （Cache）； 浏览器缓存 TTL（MaxAge）； 离线缓存（OfflineCache）； 智能加速（SmartRouting）； 分片回源（RangeOriginPull）； HTTP/2 回源（UpstreamHttp2）； Host Header 重写（HostHeader）； 强制 HTTPS（ForceRedirect）； 回源 HTTPS（OriginPullProtocol）； 缓存预刷新（CachePrefresh）； 智能压缩（Compression）； Hsts； ClientIpHeader； TlsVersion； OcspStapling。 HTTP/2 访问（Http2）。 */
    NormalAction?: RuleNormalAction | null;
    /** 带有请求头/响应头的功能操作，选择该类型的功能项有： 修改 HTTP 请求头（RequestHeader）； 修改HTTP响应头（ResponseHeader）。 */
    RewriteAction?: RuleRewriteAction | null;
    /** 带有状态码的功能操作，选择该类型的功能项有： 自定义错误页面（ErrorPage）； 状态码缓存 TTL（StatusCodeCache）。 */
    CodeAction?: RuleCodeAction | null;
  }

  /** 规则引擎条件且关系条件列表 */
  interface RuleAndConditions {
    /** 规则引擎条件，该数组内所有项全部满足即判断该条件满足。 */
    Conditions: RuleCondition[];
  }

  /** 规则引擎可应用于匹配请求的设置详细信息，可选参数配置项 */
  interface RuleChoicePropertiesItem {
    /** 参数名称。 */
    Name: string;
    /** 参数值类型。 CHOICE：参数值只能在 ChoicesValue 中选择； TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择； CUSTOM_NUM：参数值用户自定义，整型类型； CUSTOM_STRING：参数值用户自定义，字符串类型。 */
    Type: string;
    /** 参数值的可选值。注意：若参数值为用户自定义则该数组为空数组。 */
    ChoicesValue: string[];
    /** 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
    Min: number;
    /** 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
    Max: number;
    /** 参数值是否支持多选或者填写多个。 */
    IsMultiple: boolean;
    /** 是否允许为空。 */
    IsAllowEmpty: boolean;
    /** 特殊参数。 为 NULL：RuleAction 选择 NormalAction； 成员参数 Id 为 Action：RuleAction 选择 RewirteAction； 成员参数 Id 为 StatusCode：RuleAction 选择 CodeAction。 */
    ExtraParameter: RuleExtraParameter;
  }

  /** 规则引擎带有状态码的动作 */
  interface RuleCodeAction {
    /** 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
    Action: string;
    /** 操作参数。 */
    Parameters: RuleCodeActionParams[];
  }

  /** 规则引擎条件使用StatusCode字段动作参数 */
  interface RuleCodeActionParams {
    /** 状态 Code。 */
    StatusCode: number;
    /** 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
    Name: string;
    /** 参数值。 */
    Values: string[];
  }

  /** 规则引擎条件参数 */
  interface RuleCondition {
    /** 运算符，取值有： equal: 等于； notequal: 不等于。 */
    Operator: string;
    /** 匹配类型，取值有： 全部（站点任意请求）: host。 文件名: filename； 文件后缀: extension； HOST: host； URL Full: full_url，当前站点下完整 URL 路径，必须包含 HTTP 协议，Host 和 路径； URL Path: url，当前站点下 URL 路径的请求。 */
    Target: string;
    /** 对应匹配类型的参数值，对应匹配类型的取值有： 文件后缀：jpg、txt等文件后缀； 文件名称：例如 foo.jpg 中的 foo； 全部（站点任意请求）： all； HOST：当前站点下的 host ，例如www.maxx55.com； URL Path：当前站点下 URL 路径的请求，例如：/example； URL Full：当前站点下完整 URL 请求，必须包含 HTTP 协议，Host 和 路径，例如：https://www.maxx55.cn/example。 */
    Values: string[];
  }

  /** 规则引擎参数详情信息，特殊参数类型。 */
  interface RuleExtraParameter {
    /** 参数名，取值有： Action：修改 HTTP 头部所需参数，RuleAction 选择 RewirteAction； StatusCode：状态码相关功能所需参数，RuleAction 选择 CodeAction。 */
    Id: string;
    /** 参数值类型。 CHOICE：参数值只能在 Values 中选择； CUSTOM_NUM：参数值用户自定义，整型类型； CUSTOM_STRING：参数值用户自定义，字符串类型。 */
    Type: string;
    /** 可选参数值。注意：当 Id 的值为 StatusCode 时数组中的值为整型，填写参数值时请填写字符串的整型数值。 */
    Choices: string;
  }

  /** 规则查询 Filter */
  interface RuleFilter {
    /** 过滤参数，取值有： RULE_ID：规则 ID。 */
    Name: string;
    /** 参数值。 */
    Values: string[];
  }

  /** 规则引擎规则项，Conditions 数组内多个项的关系为 或，内层 Conditions 列表内多个项的关系为 且。 */
  interface RuleItem {
    /** 执行功能判断条件。注意：满足该数组内任意一项条件，功能即可执行。 */
    Conditions: RuleAndConditions[];
    /** 执行的功能。 */
    Actions: RuleAction[];
  }

  /** 规则引擎常规类型的动作 */
  interface RuleNormalAction {
    /** 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
    Action: string;
    /** 参数。 */
    Parameters: RuleNormalActionParams[];
  }

  /** 规则引擎条件常规动作参数 */
  interface RuleNormalActionParams {
    /** 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
    Name: string;
    /** 参数值。 */
    Values: string[];
  }

  /** 规则引擎HTTP请求头/响应头类型的动作 */
  interface RuleRewriteAction {
    /** 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。 */
    Action: string;
    /** 参数。 */
    Parameters: RuleRewriteActionParams[];
  }

  /** 规则引擎条件 HTTP 请求/响应头操作动作参数。 */
  interface RuleRewriteActionParams {
    /** 功能参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://tcloud4api.woa.com/document/product/1657/79433?!preview&!document=1) 查看。现在只有三种取值： add：添加 HTTP 头部； set：重写 HTTP 头部； del：删除 HTTP 头部。 */
    Action: string;
    /** 参数名称。 */
    Name: string;
    /** 参数值。 */
    Values: string[];
  }

  /** 规则引擎规则详情 */
  interface RuleSettingDetail {
    /** 规则ID。 */
    RuleId: string;
    /** 规则名称，名称字符串长度 1~255。 */
    RuleName: string;
    /** 规则状态，取值有: enable: 启用； disable: 未启用。 */
    Status: string;
    /** 规则内容。 */
    Rules: RuleItem[];
    /** 规则优先级, 值越大优先级越高，最小为 1。 */
    RulePriority: number;
  }

  /** 规则引擎可应用于匹配请求的设置详细信息。 */
  interface RulesProperties {
    /** 值为参数名称。 */
    Name: string;
    /** 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
    Min: number;
    /** 参数值的可选值。注意：若参数值为用户自定义则该数组为空数组。 */
    ChoicesValue: string[];
    /** 参数值类型。 CHOICE：参数值只能在 ChoicesValue 中选择； TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择； OBJECT：参数值为对象类型，ChoiceProperties 为改对象类型关联的属性； CUSTOM_NUM：参数值用户自定义，整型类型； CUSTOM_STRING：参数值用户自定义，字符串类型。注意：当参数类型为 OBJECT 类型时，请注意参考 [示例2 参数为 OBJECT 类型的创建](https://tcloud4api.woa.com/document/product/1657/79382?!preview&!document=1) */
    Type: string;
    /** 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
    Max: number;
    /** 参数值是否支持多选或者填写多个。 */
    IsMultiple: boolean;
    /** 是否允许为空。 */
    IsAllowEmpty: boolean;
    /** 该参数对应的关联配置参数，属于调用接口的必填参数。注意：如果可选参数无特殊新增参数则该数组为空数组。 */
    ChoiceProperties: RuleChoicePropertiesItem[];
    /** 为 NULL：无特殊参数，RuleAction 选择 NormalAction； */
    ExtraParameter: RuleExtraParameter | null;
  }

  /** 规则引擎可应用于匹配请求的设置列表及其详细信息 */
  interface RulesSettingAction {
    /** 功能名称，取值有： 访问URL 重写（AccessUrlRedirect）； 回源 URL 重写 （UpstreamUrlRedirect）； 自定义错误页面(ErrorPage)； QUIC（QUIC）； WebSocket （WebSocket）； 视频拖拽（VideoSeek）； Token 鉴权（Authentication）； 自定义CacheKey（CacheKey）； 节点缓存 TTL （Cache）； 浏览器缓存 TTL（MaxAge）； 离线缓存（OfflineCache）； 智能加速（SmartRouting）； 分片回源（RangeOriginPull）； HTTP/2 回源（UpstreamHttp2）； Host Header 重写（HostHeader）； 强制 HTTPS（ForceRedirect）； 回源 HTTPS（OriginPullProtocol）； 缓存预刷新（CachePrefresh）； 智能压缩（Compression）； 修改 HTTP 请求头（RequestHeader）； 修改HTTP响应头（ResponseHeader）; 状态码缓存 TTL（StatusCodeCache）; Hsts； ClientIpHeader； TlsVersion； OcspStapling。 */
    Action: string;
    /** 参数信息。 */
    Properties: RulesProperties[];
  }

  /** 安全数据Entry返回值 */
  interface SecEntry {
    /** 查询维度值。 */
    Key: string | null;
    /** 查询维度下详细数据。 */
    Value: SecEntryValue[] | null;
  }

  /** 安全数据Entry对应的值 */
  interface SecEntryValue {
    /** 指标名称。 */
    Metric: string | null;
    /** 时序数据详情。 */
    Detail: TimingDataItem[] | null;
    /** 最大值。 */
    Max: number | null;
    /** 平均值。 */
    Avg: number | null;
    /** 数据总和。 */
    Sum: number | null;
  }

  /** 安全规则（cc/waf/bot）相关信息 */
  interface SecRuleRelatedInfo {
    /** 规则ID列表（99999为无效id）。 */
    RuleId: number;
    /** 执行动作（处置方式），取值有：trans ：通过 ；alg ：算法挑战 ；drop ：丢弃 ；ban ：封禁源ip ；redirect ：重定向 ；page ：返回指定页面 ；monitor ：观察 。 */
    Action: string;
    /** 风险等级（waf日志中独有），取值有：high risk ：高危 ；middle risk ：中危 ；low risk ：低危 ；unkonw ：未知 。 */
    RiskLevel: string;
    /** 规则等级，取值有：normal ：正常 。 */
    RuleLevel: string;
    /** 规则描述。 */
    Description: string;
    /** 规则类型名称。 */
    RuleTypeName: string;
  }

  /** 安全配置。 */
  interface SecurityConfig {
    /** 托管规则。如果为null，默认使用历史配置。 */
    WafConfig?: WafConfig | null;
    /** 速率限制。如果为null，默认使用历史配置。 */
    RateLimitConfig?: RateLimitConfig | null;
    /** DDoS配置。如果为null，默认使用历史配置。 */
    DdosConfig?: DDoSConfig | null;
    /** 自定义规则。如果为null，默认使用历史配置。 */
    AclConfig?: AclConfig | null;
    /** Bot配置。如果为null，默认使用历史配置。 */
    BotConfig?: BotConfig | null;
    /** 七层防护总开关。如果为null，默认使用历史配置。 */
    SwitchConfig?: SwitchConfig | null;
    /** 基础访问管控。如果为null，默认使用历史配置。 */
    IpTableConfig?: IpTableConfig | null;
    /** 例外规则配置。如果为null，默认使用历史配置。 */
    ExceptConfig?: ExceptConfig | null;
    /** 自定义拦截页面配置。如果为null，默认使用历史配置。 */
    DropPageConfig?: DropPageConfig | null;
  }

  /** 安全防护实例 */
  interface SecurityEntity {
    /** 用户appid */
    AppId: number;
    /** 一级域名 */
    ZoneId: string;
    /** 二级域名 */
    Entity: string;
    /** 类型 domain/application */
    EntityType: string;
  }

  /** https 服务端证书配置 */
  interface ServerCertInfo {
    /** 服务器证书 ID。 */
    CertId: string | null;
    /** 证书备注名。 */
    Alias?: string | null;
    /** 证书类型，取值有：default: 默认证书;upload:用户上传;managed:腾讯云托管。 */
    Type?: string | null;
    /** 证书过期时间。 */
    ExpireTime?: string | null;
    /** 证书部署时间。 */
    DeployTime?: string | null;
    /** 部署状态，取值有：processing: 部署中;deployed: 已部署。 */
    Status?: string | null;
    /** 证书算法。 */
    SignAlgo?: string | null;
  }

  /** DDoS防护分区 */
  interface ShieldArea {
    /** 一级域名id */
    ZoneId: string;
    /** 策略id */
    PolicyId: number;
    /** 防护类型 domain/application */
    Type: string;
    /** 四层应用名 */
    EntityName?: string | null;
    /** 7层域名参数 */
    Application?: DDoSApplication[] | null;
    /** 四层tcp转发规则数 */
    TcpNum?: number | null;
    /** 四层udp转发规则数 */
    UdpNum?: number | null;
    /** 实例名称 */
    Entity?: string | null;
    /** 是否为共享资源客户，注意共享资源用户不可以切换代理模式，true-是；false-否 */
    Share?: boolean | null;
  }

  /** 智能加速配置 */
  interface SmartRouting {
    /** 智能加速配置开关，取值有：on：开启；off：关闭。 */
    Switch: string;
  }

  /** 询价参数 */
  interface Sv {
    /** 询价参数键。 */
    Key: string;
    /** 询价参数值。 */
    Value: string;
  }

  /** 功能总开关 */
  interface SwitchConfig {
    /** Web类型的安全总开关生效范围，Waf，自定义规则，速率限制。1. on 开启2. off 关闭 */
    WebSwitch: string;
  }

  /** 标签配置 */
  interface Tag {
    /** 标签键 */
    TagKey: string | null;
    /** 标签值 */
    TagValue: string | null;
  }

  /** 内容管理任务结果 */
  interface Task {
    /** 任务ID */
    JobId: string;
    /** 状态 */
    Status: string;
    /** 资源 */
    Target: string;
    /** 任务类型 */
    Type: string;
    /** 任务创建时间 */
    CreateTime: string;
    /** 任务完成时间 */
    UpdateTime: string;
  }

  /** 统计曲线数据项 */
  interface TimingDataItem {
    /** 返回数据对应时间点，采用unix秒级时间戳 */
    Timestamp: number | null;
    /** 具体数值 */
    Value: number | null;
  }

  /** L7数据分析时序数据 */
  interface TimingDataRecord {
    /** 查询维度值 */
    TypeKey: string;
    /** 详细时序数据 */
    TypeValue: TimingTypeValue[] | null;
  }

  /** 时序类型详细数据 */
  interface TimingTypeValue {
    /** 数据和 */
    Sum: number | null;
    /** 最大 */
    Max: number | null;
    /** 平均 */
    Avg: number | null;
    /** 指标名 */
    MetricName: string;
    /** 废弃字段，即将下线，请使用Detail字段 */
    DetailData: number[] | null;
    /** 详细数据 */
    Detail: TimingDataItem[] | null;
  }

  /** 七层数据分析类top数据 */
  interface TopDataRecord {
    /** 查询维度值 */
    TypeKey: string;
    /** top数据排行 */
    DetailData: TopDetailData[] | null;
  }

  /** 用于对top数据排序的结构体 */
  interface TopDetailData {
    /** 字段名 */
    Key: string;
    /** 字段值 */
    Value: number;
  }

  /** TopN entry */
  interface TopNEntry {
    /** top查询维度值。 */
    Key: string;
    /** 查询具体数据。 */
    Value: TopNEntryValue[];
  }

  /** TopN数据Entry */
  interface TopNEntryValue {
    /** 排序实体名。 */
    Name: string;
    /** 排序实体数量。 */
    Count: number;
  }

  /** Http2回源配置 */
  interface UpstreamHttp2 {
    /** http2回源配置开关，取值有：on：开启；off：关闭。 */
    Switch: string;
  }

  /** 自定义 nameservers */
  interface VanityNameServers {
    /** 自定义 ns 开关- on 开启- off 关闭 */
    Switch: string;
    /** 自定义 ns 列表 */
    Servers?: string[];
  }

  /** 自定义名字服务器 IP 信息 */
  interface VanityNameServersIps {
    /** 自定义名字服务器名称 */
    Name: string;
    /** 自定义名字服务器 IPv4 地址 */
    IPv4: string;
  }

  /** Waf配置。 */
  interface WafConfig {
    /** WafConfig开关，取值有： on：开启； off：关闭。开关仅与配置是否生效有关，即使为off（关闭），也可以正常修改配置的内容。 */
    Switch: string;
    /** 防护级别，取值有： loose：宽松； normal：正常； strict：严格； stricter：超严格； custom：自定义。 */
    Level: string;
    /** 全局WAF模式，取值有： block：阻断（全局阻断，但可对详细规则配置观察）； observe：观察（无论详细规则配置什么，都为观察）。 */
    Mode: string;
    /** 托管规则详细配置。 */
    WafRules: WafRule;
    /** AI规则引擎防护配置。 */
    AiRule?: AiRule | null;
  }

  /** Waf规则 */
  interface WafRule {
    /** 托管规则开关。 on为开启 */
    Switch: string;
    /** 黑名单ID列表，将规则ID加入本参数列表中代表该ID关闭，即该规则ID不再生效。ID参考接口 [DescribeSecurityPolicyManagedRules](https://tcloud4api.woa.com/document/product/1657/76030?!preview&!document=1)。 */
    BlockRuleIDs: number[];
    /** 观察模式ID列表，将规则ID加入本参数列表中代表该ID使用观察模式生效，即该规则ID进入观察模式。ID参考接口 [DescribeSecurityPolicyManagedRules](https://tcloud4api.woa.com/document/product/1657/76030?!preview&!document=1)。 */
    ObserveRuleIDs?: number[] | null;
  }

  /** Web拦截事件 */
  interface WebAttackEvent {
    /** 客户端ip */
    ClientIp: string | null;
    /** 攻击URL */
    AttackUrl: string | null;
    /** 攻击时间 单位为s */
    AttackTime: number | null;
  }

  /** web事件数据 */
  interface WebEventData {
    /** 攻击事件数据集合 */
    List: WebAttackEvent[] | null;
    /** 当前页 */
    PageNo: number | null;
    /** 每页展示条数 */
    PageSize: number | null;
    /** 总页数 */
    Pages: number | null;
    /** 总条数 */
    TotalSize: number | null;
  }

  /** web攻击日志Data */
  interface WebLogData {
    /** 分组数据。 */
    List: WebLogs[] | null;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number;
    /** 总页数。 */
    Pages: number;
    /** 总条数。 */
    TotalSize: number;
  }

  /** web攻击日志 */
  interface WebLogs {
    /** 该字段已废弃。 */
    AttackContent: string | null;
    /** 攻击源（客户端）Ip。 */
    AttackIp: string;
    /** 该字段已废弃。 */
    AttackType: string | null;
    /** 受攻击子域名。 */
    Domain: string;
    /** 该字段已废弃。 */
    Msuuid: string | null;
    /** 该字段已废弃。 */
    RequestMethod: string | null;
    /** URI */
    RequestUri: string;
    /** 该字段已废弃。 */
    RiskLevel: string | null;
    /** 该字段已废弃。 */
    RuleId: number | null;
    /** IP所在国家iso-3166中alpha-2编码，编码信息请参考[ISO-3166](https://git.woa.com/edgeone/iso-3166/blob/master/all/all.json) */
    SipCountryCode: string;
    /** 请求（事件）ID。 */
    EventId: string;
    /** 该字段已废弃。 */
    DisposalMethod: string | null;
    /** http log。 */
    HttpLog: string;
    /** 该字段已废弃。 */
    Ua: string | null;
    /** 攻击时间，采用unix秒级时间戳。 */
    AttackTime: number;
    /** 规则相关信息列表。 */
    RuleDetailList: SecRuleRelatedInfo[] | null;
  }

  /** WebSocket配置 */
  interface WebSocket {
    /** WebSocket 超时时间配置开关，取值有：on：使用Timeout作为WebSocket超时时间；off：平台仍支持WebSocket连接，此时使用系统默认的15秒为超时时间。 */
    Switch: string;
    /** 超时时间，单位为秒，最大超时时间120秒。 */
    Timeout?: number;
  }

  /** 站点信息 */
  interface Zone {
    /** 站点ID。 */
    Id: string;
    /** 站点名称。 */
    Name: string;
    /** 站点当前使用的 NS 列表。 */
    OriginalNameServers: string[];
    /** 腾讯云分配的 NS 列表。 */
    NameServers: string[];
    /** 站点状态，取值有： active：NS 已切换； pending：NS 未切换； moved：NS 已切走； deactivated：被封禁。 */
    Status: string;
    /** 站点接入方式，取值有 full：NS 接入； partial：CNAME 接入。 */
    Type: string;
    /** 站点是否关闭。 */
    Paused: boolean;
    /** 是否开启cname加速，取值有： enabled：开启； disabled：关闭。 */
    CnameSpeedUp: string;
    /** cname 接入状态，取值有： finished：站点已验证； pending：站点验证中。 */
    CnameStatus: string;
    /** 资源标签列表。 */
    Tags: Tag[];
    /** 计费资源列表。 */
    Resources: Resource[];
    /** 站点创建时间。 */
    CreatedOn: string;
    /** 站点修改时间。 */
    ModifiedOn: string;
    /** 站点接入地域，取值为： global：全球； mainland：中国大陆； overseas：境外区域。 */
    Area: string;
  }

  /** 站点查询过滤条件 */
  interface ZoneFilter {
    /** 过滤字段名，支持的列表如下： name：站点名； status：站点状态； tagKey：标签键； tagValue: 标签值。 */
    Name: string;
    /** 过滤字段值。 */
    Values: string[];
    /** 是否启用模糊查询，仅支持过滤字段名为name。模糊查询时，Values长度最大为1。默认为false。 */
    Fuzzy?: boolean;
  }

  interface CheckCertificateRequest {
    /** 证书 */
    Certificate: string;
    /** 私钥 */
    PrivateKey: string;
  }

  interface CheckCertificateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateApplicationProxyRequest {
    /** 站点ID。 */
    ZoneId: string;
    /** 站点名称。 */
    ZoneName: string;
    /** 当ProxyType=hostname时，表示域名或子域名；当ProxyType=instance时，表示代理名称。 */
    ProxyName: string;
    /** 调度模式，取值有：ip：表示Anycast IP调度；domain：表示CNAME调度。 */
    PlatType: string;
    /** 是否开启安全，取值有：0：关闭安全；1：开启安全。 */
    SecurityType: number;
    /** 是否开启加速，取值有：0：关闭加速；1：开启加速。 */
    AccelerateType: number;
    /** 字段已经废弃。 */
    SessionPersist: boolean;
    /** 字段已经废弃。 */
    ForwardClientIp: string;
    /** 规则详细信息。 */
    Rule?: ApplicationProxyRule[];
    /** 四层代理模式，取值有：hostname：表示子域名模式；instance：表示实例模式。不填写使用默认值instance。 */
    ProxyType?: string;
    /** 会话保持时间，取值范围：30-3600，单位：秒。不填写使用默认值600。 */
    SessionPersistTime?: number;
    /** Ipv6访问配置。不填写表示关闭Ipv6访问。 */
    Ipv6?: Ipv6Access;
  }

  interface CreateApplicationProxyResponse {
    /** 新增的四层代理应用ID。 */
    ProxyId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateApplicationProxyRuleRequest {
    /** 站点ID */
    ZoneId: string;
    /** 代理ID */
    ProxyId: string;
    /** 协议，取值为TCP或者UDP */
    Proto: string;
    /** 端口，支持格式：80：80端口81-90：81至90端口 */
    Port: string[];
    /** 源站类型，取值：custom：手动添加origins：源站组 */
    OriginType: string;
    /** 源站信息：当OriginType=custom时，表示多个：IP:端口域名:端口当OriginType=origins时，包含一个元素，表示源站组ID */
    OriginValue: string[];
    /** 传递客户端IP，当Proto=TCP时，取值：TOA：TOAPPV1: Proxy Protocol传递，协议版本V1PPV2: Proxy Protocol传递，协议版本V2OFF：不传递当Proto=UDP时，取值：PPV2: Proxy Protocol传递，协议版本V2OFF：不传递 */
    ForwardClientIp?: string;
    /** 是否开启会话保持 */
    SessionPersist?: boolean;
  }

  interface CreateApplicationProxyRuleResponse {
    /** 规则ID */
    RuleId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateApplicationProxyRulesRequest {
    /** 站点ID */
    ZoneId: string;
    /** 代理ID */
    ProxyId: string;
    /** 规则列表 */
    Rule: ApplicationProxyRule[];
  }

  interface CreateApplicationProxyRulesResponse {
    /** 新增的规则ID数组 */
    RuleId: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateCustomErrorPageRequest {
    /** zone的id */
    ZoneId: string;
    /** 具体所属实体 */
    Entity: string;
    /** 自定义页面的文件名 */
    Name: string;
    /** 自定义页面的内容 */
    Content: string;
  }

  interface CreateCustomErrorPageResponse {
    /** 自定义页面上传后的唯一id */
    PageId: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDnsRecordRequest {
    /** 站点 ID */
    ZoneId: string;
    /** 记录类型 */
    Type: string;
    /** 记录名 */
    Name: string;
    /** 记录内容 */
    Content: string;
    /** 代理模式，可选值：dns_only, cdn_only, secure_cdn */
    Mode: string;
    /** 生存时间值 */
    Ttl?: number;
    /** 优先级 */
    Priority?: number;
  }

  interface CreateDnsRecordResponse {
    /** 记录 ID */
    Id: string;
    /** 记录类型 */
    Type: string;
    /** 记录名称 */
    Name: string;
    /** 记录内容 */
    Content: string;
    /** 生存时间值 */
    Ttl: number;
    /** 优先级 */
    Priority: number;
    /** 代理模式 */
    Mode: string;
    /** 解析状态active: 生效pending: 不生效 */
    Status: string;
    /** 已锁定 */
    Locked: boolean;
    /** 创建时间 */
    CreatedOn: string;
    /** 修改时间 */
    ModifiedOn: string;
    /** 站点 ID */
    ZoneId: string;
    /** 站点名称 */
    ZoneName: string;
    /** CNAME 地址 */
    Cname: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateLoadBalancingRequest {
    /** 站点ID */
    ZoneId: string;
    /** 子域名 */
    Host: string;
    /** 代理模式：dns_only: 仅DNSproxied: 开启代理 */
    Type: string;
    /** 使用的源站组ID */
    OriginId: string[];
    /** 当Type=dns_only表示DNS的TTL时间 */
    TTL?: number;
  }

  interface CreateLoadBalancingResponse {
    /** 负载均衡ID */
    LoadBalancingId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateOriginGroupRequest {
    /** 源站组名称 */
    OriginName: string;
    /** 配置类型，当OriginType=self 时，需要填写：area: 按区域配置weight: 按权重配置当OriginType=third_party/cos 时，不需要填写 */
    Type: string;
    /** 源站记录 */
    Record: OriginRecord[];
    /** 站点ID */
    ZoneId: string;
    /** 源站类型self：自有源站third_party：第三方源站cos：腾讯云COS源站 */
    OriginType?: string;
  }

  interface CreateOriginGroupResponse {
    /** 新增的源站组ID */
    OriginId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePlanForZoneRequest {
    /** 站点ID。 */
    ZoneId: string;
    /** 所要购买套餐的类型，取值有： sta: 全球内容分发网络（不包括中国大陆）标准版套餐； sta_with_bot: 全球内容分发网络（不包括中国大陆）标准版套餐附带bot管理； sta_cm: 中国大陆内容分发网络标准版套餐； sta_cm_with_bot: 中国大陆内容分发网络标准版套餐附带bot管理； ent: 全球内容分发网络（不包括中国大陆）企业版套餐； ent_with_bot: 全球内容分发网络（不包括中国大陆）企业版套餐附带bot管理； ent_cm: 中国大陆内容分发网络企业版套餐； ent_cm_with_bot: 中国大陆内容分发网络企业版套餐附带bot管理。当前账户可购买套餐类型请以DescribeAvailablePlans返回为准。 */
    PlanType: string;
  }

  interface CreatePlanForZoneResponse {
    /** 购买的资源名字列表。 */
    ResourceNames: string[];
    /** 购买的订单号列表。 */
    DealNames: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrefetchTaskRequest {
    /** Zone ID */
    ZoneId: string;
    /** 要预热的资源列表，每个元素格式类似如下:http://www.example.com/example.txt */
    Targets?: string[];
    /** 是否对url进行encode若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986） */
    EncodeUrl?: boolean;
    /** 附带的http头部信息 */
    Headers?: Header[];
  }

  interface CreatePrefetchTaskResponse {
    /** 任务ID */
    JobId: string;
    /** 失败的任务列表 */
    FailedList: FailReason[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePurgeTaskRequest {
    /** Zone ID */
    ZoneId: string;
    /** 类型，当前支持的类型：- purge_url：URL- purge_prefix：前缀- purge_host：Hostname- purge_all：全部缓存 */
    Type: string;
    /** 要刷新的资源列表，每个元素格式依据Type而定1) Type = purge_host 时形如：www.example.com 或 foo.bar.example.com2) Type = purge_prefix 时形如：http://www.example.com/example3) Type = purge_url 时形如：https://www.example.com/example.jpg4）Type = purge_all 时Targets可为空，不需要填写 */
    Targets?: string[];
    /** 若有编码转换，仅清除编码转换后匹配的资源若内容含有非 ASCII 字符集的字符，请开启此开关，编码转换（编码规则遵循 RFC3986） */
    EncodeUrl?: boolean;
  }

  interface CreatePurgeTaskResponse {
    /** 任务ID */
    JobId: string;
    /** 失败的任务列表及原因 */
    FailedList: FailReason[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateRuleRequest {
    /** 站点 ID。 */
    ZoneId: string;
    /** 规则名称，名称字符串长度 1～255。 */
    RuleName: string;
    /** 规则状态，取值有： enable: 启用； disable: 未启用。 */
    Status: string;
    /** 规则内容。 */
    Rules: RuleItem[];
  }

  interface CreateRuleResponse {
    /** 规则 ID。 */
    RuleId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateZoneRequest {
    /** 站点名字 */
    Name: string;
    /** 接入方式，默认full- full NS接入- partial CNAME接入 */
    Type?: string;
    /** 是否跳过站点历史解析记录扫描 */
    JumpStart?: boolean;
    /** 资源标签 */
    Tags?: Tag[];
  }

  interface CreateZoneResponse {
    /** 站点ID */
    Id: string;
    /** 站点名称 */
    Name: string;
    /** 站点接入方式 */
    Type: string;
    /** 站点状态- pending 未切换NS- active NS 已切换到分配的 NS- moved NS 从腾讯云切走 */
    Status: string;
    /** 当前使用的 NS 列表 */
    OriginalNameServers: string[];
    /** 给用户分配的 NS 列表 */
    NameServers: string[];
    /** 站点创建时间 */
    CreatedOn: string;
    /** 站点更新时间 */
    ModifiedOn: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteApplicationProxyRequest {
    /** 站点ID */
    ZoneId: string;
    /** 代理ID */
    ProxyId: string;
  }

  interface DeleteApplicationProxyResponse {
    /** 代理ID */
    ProxyId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteApplicationProxyRuleRequest {
    /** 站点ID */
    ZoneId: string;
    /** 代理ID */
    ProxyId: string;
    /** 规则ID */
    RuleId: string;
  }

  interface DeleteApplicationProxyRuleResponse {
    /** 规则ID */
    RuleId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteDnsRecordsRequest {
    /** 站点 ID */
    ZoneId: string;
    /** 记录 ID */
    Ids: string[];
  }

  interface DeleteDnsRecordsResponse {
    /** 记录 ID */
    Ids: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteLoadBalancingRequest {
    /** 站点ID */
    ZoneId: string;
    /** 负载均衡ID */
    LoadBalancingId: string;
  }

  interface DeleteLoadBalancingResponse {
    /** 负载均衡ID */
    LoadBalancingId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteOriginGroupRequest {
    /** 源站组ID */
    OriginId: string;
    /** 站点ID */
    ZoneId: string;
  }

  interface DeleteOriginGroupResponse {
    /** 源站组ID */
    OriginId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteRulesRequest {
    /** 站点 ID。 */
    ZoneId: string;
    /** 指定删除的规则 ID 列表。 */
    RuleIds: string[];
  }

  interface DeleteRulesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteZoneRequest {
    /** 站点 ID */
    Id: string;
  }

  interface DeleteZoneResponse {
    /** 站点 ID */
    Id: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeApplicationProxyDetailRequest {
    /** 站点ID。 */
    ZoneId: string;
    /** 实例ID。 */
    ProxyId: string;
  }

  interface DescribeApplicationProxyDetailResponse {
    /** 实例ID。 */
    ProxyId: string;
    /** 当ProxyType=hostname时，表示域名或子域名；当ProxyType=instance时，表示代理名称。 */
    ProxyName: string;
    /** 调度模式，取值有：ip：表示Anycast IP调度；domain：表示CNAME调度。 */
    PlatType: string;
    /** 是否开启安全，取值有：0：关闭安全；1：开启安全。 */
    SecurityType: number;
    /** 是否开启加速，取值有：0：关闭加速；1：开启加速。 */
    AccelerateType: number;
    /** 字段已经废弃。 */
    ForwardClientIp: string;
    /** 字段已经废弃。 */
    SessionPersist: boolean;
    /** 规则列表。 */
    Rule: ApplicationProxyRule[];
    /** 状态，取值有：online：启用；offline：停用；progress：部署中。 */
    Status: string;
    /** 调度信息。 */
    ScheduleValue: string[];
    /** 更新时间。 */
    UpdateTime: string;
    /** 站点ID。 */
    ZoneId: string;
    /** 站点名称。 */
    ZoneName: string;
    /** 会话保持时间。 */
    SessionPersistTime: number;
    /** 四层代理模式，取值有：hostname：表示子域名模式；instance：表示实例模式。 */
    ProxyType: string;
    /** 当ProxyType=hostname时：表示代理加速唯一标识。 */
    HostId: string;
    /** IPv6访问配置。 */
    Ipv6: Ipv6Access;
    /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
    Area: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeApplicationProxyRequest {
    /** 站点ID。 */
    ZoneId?: string;
    /** 分页查询偏移量，默认为0。 */
    Offset?: number;
    /** 分页查询限制数目，默认为10，最大可设置为1000。 */
    Limit?: number;
    /** 代理ID。当ProxyId为空时，表示查询站点下所有应用代理的列表。 */
    ProxyId?: string;
  }

  interface DescribeApplicationProxyResponse {
    /** 应用代理列表。 */
    Data: ApplicationProxy[];
    /** 记录总数。 */
    TotalCount: number;
    /** 字段已废弃。 */
    Quota: number;
    /** 当ProxyId为空时，表示套餐内PlatType为ip的Anycast IP的实例数量。 */
    IpCount: number;
    /** 当ProxyId为空时，表示套餐内PlatType为domain的CNAME的实例数量。 */
    DomainCount: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAvailablePlansRequest {
  }

  interface DescribeAvailablePlansResponse {
    /** 当前账户可购买套餐类型及相关信息。 */
    PlanInfoList: PlanInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeBotLogRequest {
    /** 起始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number;
    /** 站点集合，不填默认查询所有站点。 */
    ZoneIds?: string[];
    /** 域名集合，不填默认查询所有子域名。 */
    Domains?: string[];
    /** 筛选条件，取值有：action ：执行动作（处置方式）；sipCountryCode ：ip所在国家 ；attackIp ：攻击ip ；ruleId ：规则id ；eventId ：事件id ；ua ：用户代理 ；requestMethod ：请求方法 ；uri ：统一资源标识符 。 */
    QueryCondition?: QueryCondition[];
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeBotLogResponse {
    /** Bot攻击数据内容。 */
    Data: BotLogData;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应信息。 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeBotManagedRulesRequest {
    /** 一级域名 */
    ZoneId: string;
    /** 子域名/应用名 */
    Entity: string;
    /** 页数 */
    Page: number;
    /** 每页数量 */
    PerPage: number;
    /** idcid/sipbot/uabot规则类型，空代表拉取全部 */
    RuleType?: string;
  }

  interface DescribeBotManagedRulesResponse {
    /** 本次返回的规则数 */
    Count: number;
    /** Bot规则 */
    Rules: BotManagedRuleDetail[];
    /** 总规则数 */
    Total: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCnameStatusRequest {
    /** 站点 ID */
    ZoneId: string;
    /** 域名列表 */
    Names: string[];
  }

  interface DescribeCnameStatusResponse {
    /** 状态列表 */
    Status: CnameStatus[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDDoSPolicyRequest {
    /** 策略组id */
    PolicyId: number;
    /** 一级域名zone */
    ZoneId: string;
  }

  interface DescribeDDoSPolicyResponse {
    /** DDoS防护配置 */
    DdosRule: DdosRule;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDDosAttackDataRequest {
    /** 开始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 统计指标列表，取值有：ddos_attackMaxBandwidth ：攻击带宽峰值 ；ddos_attackMaxPackageRate：攻击包速率峰值 ；ddos_attackBandwidth ：攻击带宽曲线 ；ddos_attackPackageRate ：攻击包速率曲线 。 */
    MetricNames: string[];
    /** 站点id列表，不填默认选择全部站点。 */
    ZoneIds?: string[];
    /** ddos策略组id列表，不填默认选择全部策略id。 */
    PolicyIds?: number[];
    /** 端口号。 */
    Port?: number;
    /** 协议类型，取值有：tcp ；udp ；all 。 */
    ProtocolType?: string;
    /** 攻击类型，取值有：flood ；icmpFlood ；all 。 */
    AttackType?: string;
    /** 查询时间粒度，取值有：min ：1分钟 ；5min ：5分钟 ；hour ：1小时 ；day ：1天 。 */
    Interval?: string;
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeDDosAttackDataResponse {
    /** DDos攻击数据内容。 */
    Data: SecEntry[] | null;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应信息。 */
    Msg: string;
    /** 查询时间粒度，取值有：min ：1分钟 ；5min ：5分钟 ；hour ：1小时 ；day ：1天 。 */
    Interval: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDDosAttackEventDetailRequest {
    /** 事件id。 */
    EventId: string;
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeDDosAttackEventDetailResponse {
    /** DDos攻击事件详情。 */
    Data: DDosAttackEventDetailData;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应信息。 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDDosAttackEventRequest {
    /** 开始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number;
    /** ddos策略组id列表，不填默认选择全部策略Id。 */
    PolicyIds?: number[];
    /** 站点id列表，不填默认选择全部站点。 */
    ZoneIds?: string[];
    /** 协议类型，取值有：tcp ；udp ；all 。 */
    ProtocolType?: string;
    /** 是否展示详情，取值有：Y ：展示 ；N ：不展示 。默认为Y。 */
    IsShowDetail?: string;
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeDDosAttackEventResponse {
    /** DDos攻击事件数据。 */
    Data: DDosAttackEventData;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应信息。 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDDosAttackSourceEventRequest {
    /** 开始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number;
    /** ddos策略组id 集合，不填默认选择全部策略id。 */
    PolicyIds?: number[];
    /** 站点集合，不填默认选择全部站点。 */
    ZoneIds?: string[];
    /** 协议类型，取值有：tcp ；udp ；all 。 */
    ProtocolType?: string;
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeDDosAttackSourceEventResponse {
    /** DDos攻击源数据。 */
    Data: DDosAttackSourceEventData;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应信息。 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDDosAttackTopDataRequest {
    /** 开始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 统计指标列表，取值有：ddos_attackFlux_protocol ：攻击总流量协议类型分布排行 ；ddos_attackPackageNum_protocol ：攻击总包量协议类型分布排行 ；ddos_attackNum_attackType ：攻击总次数攻击类型分布排行 ；ddos_attackNum_sregion ：攻击总次数攻击源地区分布排行 ；ddos_attackFlux_sip ：攻击总流量攻击源ip分布排行 ；ddos_attackFlux_sregion ：攻击总流量攻击源地区分布排行 。 */
    MetricName: string;
    /** 查询前多少个，传值为0返回全量。 */
    Limit: number;
    /** 站点id集合，不填默认选择全部站点。 */
    ZoneIds?: string[];
    /** ddos策略组id 集合，不填默认选择全部策略id。 */
    PolicyIds?: number[];
    /** 端口号。 */
    Port?: number;
    /** 协议类型，取值有：tcp ；udp ；all 。 */
    ProtocolType?: string;
    /** 攻击类型，取值有：flood ；icmpFlood ；all 。 */
    AttackType?: string;
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeDDosAttackTopDataResponse {
    /** top数据内容 */
    Data: TopNEntry[];
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应消息。 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDDosMajorAttackEventRequest {
    /** 开始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number;
    /** ddos 策略组id集合，不填默认选择全部策略id。 */
    PolicyIds?: number[];
    /** 协议类型，取值有：tcp ；udp ；all 。 */
    ProtocolType?: string;
    /** 站点id列表，不填默认选择全部站点。 */
    ZoneIds?: string[];
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeDDosMajorAttackEventResponse {
    /** DDos查询主攻击事件。 */
    Data: DDosMajorAttackEventData;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应消息。 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDefaultCertificatesRequest {
    /** Zone ID */
    ZoneId: string;
  }

  interface DescribeDefaultCertificatesResponse {
    /** 证书总数 */
    TotalCount: number;
    /** 默认证书列表 */
    CertInfo: DefaultServerCertInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDnsDataRequest {
    /** 起始时间 */
    StartTime: string;
    /** 结束时间 */
    EndTime: string;
    /** 过滤参数 */
    Filters?: DnsDataFilter[];
    /** 时间粒度，默认为1分钟粒度，服务端根据时间范围自适应。支持指定以下几种粒度：min：1分钟粒度5min：5分钟粒度hour：1小时粒度day：天粒度 */
    Interval?: string;
  }

  interface DescribeDnsDataResponse {
    /** 统计曲线数据 */
    Data: DataItem[] | null;
    /** 时间粒度 */
    Interval: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDnsRecordsRequest {
    /** 查询条件过滤器 */
    Filters?: DnsRecordFilter[];
    /** 排序 */
    Order?: string;
    /** 可选值 asc, desc */
    Direction?: string;
    /** 可选值 all, any */
    Match?: string;
    /** 分页查询限制数目，默认为 100，最大可设置为 1000 */
    Limit?: number;
    /** 分页查询偏移量，默认为 0 */
    Offset?: number;
    /** 站点 ID */
    ZoneId?: string;
  }

  interface DescribeDnsRecordsResponse {
    /** 总数，用于分页查询 */
    TotalCount: number;
    /** DNS 记录列表 */
    Records: DnsRecord[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDnssecRequest {
    /** 站点 ID */
    Id: string;
  }

  interface DescribeDnssecResponse {
    /** 站点 ID */
    Id: string;
    /** 站点名称 */
    Name: string;
    /** DNSSEC 状态- enabled 开启- disabled 关闭 */
    Status: string;
    /** DNSSEC 相关信息 */
    Dnssec: DnssecInfo | null;
    /** 修改时间 */
    ModifiedOn: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeHostsCertificateRequest {
    /** Zone ID */
    ZoneId: string;
    /** 分页查询偏移量，默认为 0 */
    Offset?: number;
    /** 分页查询限制数目，默认为 100，最大可设置为 1000 */
    Limit?: number;
    /** 查询条件过滤器 */
    Filters?: CertFilter[];
    /** 排序方式 */
    Sort?: CertSort;
  }

  interface DescribeHostsCertificateResponse {
    /** 总数，用于分页查询 */
    TotalCount: number;
    /** 域名证书配置列表 */
    Hosts: HostCertSetting[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeHostsSettingRequest {
    /** 站点ID */
    ZoneId: string;
    /** 分页查询偏移量，默认为 0 */
    Offset?: number;
    /** 分页查询限制数目，默认为 100，最大可设置为 1000 */
    Limit?: number;
    /** 指定域名查询 */
    Hosts?: string[];
  }

  interface DescribeHostsSettingResponse {
    /** 域名列表 */
    Hosts: DetailHost[];
    /** 域名数量 */
    TotalNumber: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIdentificationRequest {
    /** 站点名称 */
    Name: string;
  }

  interface DescribeIdentificationResponse {
    /** 站点名称 */
    Name: string;
    /** 验证状态- pending 验证中- finished 验证完成 */
    Status: string;
    /** 子域 */
    Subdomain: string;
    /** 记录类型 */
    RecordType: string;
    /** 记录值 */
    RecordValue: string;
    /** 域名当前的 NS 记录 */
    OriginalNameServers: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLoadBalancingDetailRequest {
    /** 站点ID */
    ZoneId: string;
    /** 负载均衡ID */
    LoadBalancingId: string;
  }

  interface DescribeLoadBalancingDetailResponse {
    /** 负载均衡ID */
    LoadBalancingId: string;
    /** 站点ID */
    ZoneId: string;
    /** 子域名，填写@表示根域 */
    Host: string;
    /** 代理模式：dns_only: 仅DNSproxied: 开启代理 */
    Type: string;
    /** 当Type=dns_only表示DNS的TTL时间 */
    TTL: number;
    /** 使用的源站组ID */
    OriginId: string[];
    /** 使用的源站信息 */
    Origin: OriginGroup[];
    /** 更新时间 */
    UpdateTime: string;
    /** 状态 */
    Status: string;
    /** 调度域名 */
    Cname: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLoadBalancingRequest {
    /** 站点ID */
    ZoneId: string;
    /** 分页参数Offset */
    Offset: number;
    /** 分页参数Limit */
    Limit: number;
    /** 过滤参数Host */
    Host?: string;
    /** 过滤参数Host是否支持模糊匹配 */
    Fuzzy?: boolean;
  }

  interface DescribeLoadBalancingResponse {
    /** 记录总数 */
    TotalCount: number;
    /** 负载均衡信息 */
    Data: LoadBalancing[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOriginGroupDetailRequest {
    /** 源站组ID */
    OriginId: string;
    /** 站点ID */
    ZoneId: string;
  }

  interface DescribeOriginGroupDetailResponse {
    /** 源站组ID */
    OriginId: string;
    /** 源站组名称 */
    OriginName: string;
    /** 源站组配置类型area：表示按照Record记录中的Area字段进行按客户端IP所在区域回源。weight：表示按照Record记录中的Weight字段进行按权重回源。 */
    Type: string;
    /** 记录 */
    Record: OriginRecord[];
    /** 更新时间 */
    UpdateTime: string;
    /** 站点ID */
    ZoneId: string;
    /** 站点名称 */
    ZoneName: string;
    /** 源站类型 */
    OriginType: string | null;
    /** 当前源站组是否被四层代理使用。 */
    ApplicationProxyUsed: boolean | null;
    /** 当前源站组是否被负载均衡使用。 */
    LoadBalancingUsed: boolean | null;
    /** 使用当前源站组的负载均衡的类型：none：未被使用dns_only：被仅DNS类型负载均衡使用proxied：被代理加速类型负载均衡使用both：同时被仅DNS和代理加速类型负载均衡使用 */
    LoadBalancingUsedType: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOriginGroupRequest {
    /** 分页参数Offset */
    Offset: number;
    /** 分页参数Limit */
    Limit: number;
    /** 过滤参数 */
    Filters?: OriginFilter[];
    /** 站点ID不填写获取所有站点源站组 */
    ZoneId?: string;
  }

  interface DescribeOriginGroupResponse {
    /** 源站组信息 */
    Data: OriginGroup[];
    /** 记录总数 */
    TotalCount: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOverviewL7DataRequest {
    /** 开始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 查询的指标，取值有：l7Flow_outFlux: 访问流量；l7Flow_request: 访问请求数；l7Flow_outBandwidth: 访问带宽；l7Flow_hit_outFlux: 缓存命中流量。 */
    MetricNames: string[];
    /** 查询时间粒度，取值有：min ：1分钟 ；5min ：5分钟 ；hour ：1小时 ；day ：1天 。 */
    Interval: string;
    /** 查询的站点集合，不填默认查询所有站点。 */
    ZoneIds?: string[];
    /** 查询的域名集合，不填默认查询所有子域名。 */
    Domains?: string[];
    /** 查询的协议类型，取值有：http: http协议；https: https协议；http2: http2协议；all: 所有协议。不填默认为: all，表示查询所有协议。 */
    Protocol?: string;
    /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
    Area?: string;
    /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：tagKey 按照【标签Key】进行过滤。 类型：String 必选：否tagValue 按照【标签Value】进行过滤。 类型：String 必选：否 */
    Filters?: QueryCondition[];
  }

  interface DescribeOverviewL7DataResponse {
    /** 查询维度。 */
    Type: string;
    /** 查询时间间隔。 */
    Interval: string;
    /** 七层监控类时序流量数据列表。 */
    Data: TimingDataRecord[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrefetchTasksRequest {
    /** 任务ID */
    JobId?: string;
    /** 查询起始时间 */
    StartTime?: string;
    /** 查询结束时间 */
    EndTime?: string;
    /** 查询起始偏移量 */
    Offset?: number;
    /** 查询最大返回的结果条数 */
    Limit?: number;
    /** 查询的状态允许的值为：processing、success、failed、timeout、invalid */
    Statuses?: string[];
    /** zone id */
    ZoneId?: string;
    /** 查询的域名列表 */
    Domains?: string[];
    /** 查询的资源 */
    Target?: string;
  }

  interface DescribePrefetchTasksResponse {
    /** 该查询条件总共条目数 */
    TotalCount: number;
    /** 任务结果列表 */
    Tasks: Task[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePurgeTasksRequest {
    /** 任务ID */
    JobId?: string;
    /** 类型 */
    Type?: string;
    /** 查询起始时间 */
    StartTime?: string;
    /** 查询结束时间 */
    EndTime?: string;
    /** 查询起始偏移量 */
    Offset?: number;
    /** 查询最大返回的结果条数 */
    Limit?: number;
    /** 查询的状态允许的值为：processing、success、failed、timeout、invalid */
    Statuses?: string[];
    /** zone id */
    ZoneId?: string;
    /** 查询的域名列表 */
    Domains?: string[];
    /** 查询内容 */
    Target?: string;
  }

  interface DescribePurgeTasksResponse {
    /** 该查询条件总共条目数 */
    TotalCount: number;
    /** 任务结果列表 */
    Tasks: Task[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRulesRequest {
    /** 站点 ID。 */
    ZoneId: string;
    /** 过滤参数，不填默认不过滤。 */
    Filters?: RuleFilter[];
  }

  interface DescribeRulesResponse {
    /** 站点 ID。 */
    ZoneId: string;
    /** 规则列表，按规则执行顺序从先往后排序。 */
    RuleList: RuleSettingDetail[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRulesSettingRequest {
  }

  interface DescribeRulesSettingResponse {
    /** 规则引擎可应用匹配请求的设置列表及其详细建议配置信息。 */
    Actions: RulesSettingAction[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSecurityPolicyListRequest {
    /** 一级域名 */
    ZoneId: string;
  }

  interface DescribeSecurityPolicyListResponse {
    /** 防护资源列表 */
    Entities: SecurityEntity[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSecurityPolicyManagedRulesIdRequest {
    /** 规则id集合 */
    RuleId: number[];
  }

  interface DescribeSecurityPolicyManagedRulesIdResponse {
    /** 返回总数 */
    Total: number;
    /** 门神规则 */
    Rules: ManagedRule[];
    /** 返回总数 */
    Count: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSecurityPolicyManagedRulesRequest {
    /** 一级域名 */
    ZoneId: string;
    /** 子域名/应用名 */
    Entity: string;
    /** 页数 */
    Page: number;
    /** 每页数量 */
    PerPage: number;
  }

  interface DescribeSecurityPolicyManagedRulesResponse {
    /** 本次返回的规则数 */
    Count: number;
    /** 门神规则 */
    Rules: ManagedRule[];
    /** 总规则数 */
    Total: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSecurityPolicyRegionsRequest {
  }

  interface DescribeSecurityPolicyRegionsResponse {
    /** 总数 */
    Count: number;
    /** 地域信息 */
    GeoIp: GeoIp[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSecurityPolicyRequest {
    /** 一级域名 */
    ZoneId: string;
    /** 二级域名 */
    Entity: string;
  }

  interface DescribeSecurityPolicyResponse {
    /** 用户id */
    AppId: number;
    /** 一级域名 */
    ZoneId: string;
    /** 二级域名 */
    Entity: string;
    /** 安全配置 */
    Config: SecurityConfig | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSecurityPortraitRulesRequest {
    /** 一级域名 */
    ZoneId: string;
    /** 子域名/应用名 */
    Entity: string;
  }

  interface DescribeSecurityPortraitRulesResponse {
    /** 本次返回的规则数 */
    Count: number;
    /** Bot用户画像规则 */
    Rules: PortraitManagedRuleDetail[];
    /** 总规则数 */
    Total: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTimingL4DataRequest {
    /** RFC3339格式，客户端时间 */
    StartTime: string;
    /** RFC3339格式，客户端时间 */
    EndTime: string;
    /** 支持的指标：l4Flow_connections: 访问连接数l4Flow_flux: 访问总流量l4Flow_inFlux: 访问入流量l4Flow_outFlux: 访问出流量 */
    MetricNames: string[];
    /** 站点id列表 */
    ZoneIds?: string[];
    /** 该字段已废弃，请使用ProxyIds字段 */
    InstanceIds?: string[];
    /** 该字段当前无效 */
    Protocol?: string;
    /** 时间间隔，选填{min, 5min, hour, day} */
    Interval?: string;
    /** 该字段当前无效，请使用Filter筛选 */
    RuleId?: string;
    /** 支持的 Filter：proxyd,ruleId */
    Filters?: Filter[];
    /** 四层实例列表 */
    ProxyIds?: string[];
    /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
    Area?: string;
  }

  interface DescribeTimingL4DataResponse {
    /** 查询维度 */
    Type: string;
    /** 时间间隔 */
    Interval: string;
    /** 详细数据 */
    Data: TimingDataRecord[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTimingL7AnalysisDataRequest {
    /** RFC3339标准，客户端时间 */
    StartTime: string;
    /** RFC3339标准，客户端时间 */
    EndTime: string;
    /** 指标列表，支持的指标l7Flow_outFlux: 访问流量l7Flow_request: 访问请求数l7Flow_outBandwidth: 访问带宽 */
    MetricNames: string[];
    /** 时间间隔，选填{min, 5min, hour, day, week} */
    Interval: string;
    /** ZoneId数组 */
    ZoneIds?: string[];
    /** 筛选条件 */
    Filters?: Filter[];
    /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
    Area?: string;
  }

  interface DescribeTimingL7AnalysisDataResponse {
    /** 详细数据 */
    Data: TimingDataRecord[] | null;
    /** 查询维度 */
    Type: string;
    /** 时间间隔 */
    Interval: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTimingL7CacheDataRequest {
    /** RFC3339标准，客户端时间 */
    StartTime: string;
    /** RFC3339标准，客户端时间 */
    EndTime: string;
    /** 时序类访问流量指标列表，支持的指标l7Cache_outFlux: 访问流量l7Cache_request: 访问请求数 */
    MetricNames: string[];
    /** 时间间隔，选填{min, 5min, hour, day, week} */
    Interval: string;
    /** 站点id列表 */
    ZoneIds?: string[];
    /** 筛选条件，筛选EO/源站响应如下：EO响应：{Key: "cacheType", Value: ["hit"], Operator: "equals"}；源站响应：{Key: "cacheType", Value: ["miss", "dynamic"], Operator: "equals"} */
    Filters?: Filter[];
    /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
    Area?: string;
  }

  interface DescribeTimingL7CacheDataResponse {
    /** 详细数据 */
    Data: TimingDataRecord[] | null;
    /** 查询维度 */
    Type: string;
    /** 时间间隔 */
    Interval: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTopL7AnalysisDataRequest {
    /** RFC3339标准，客户端时间 */
    StartTime: string;
    /** RFC3339标准，客户端时间 */
    EndTime: string;
    /** 时序类访问流量指标 */
    MetricName: string;
    /** topN,填0时返回全量数据 */
    Limit: number;
    /** 时间间隔，选填{min, 5min, hour, day, week} */
    Interval: string;
    /** ZoneId数组 */
    ZoneIds?: string[];
    /** 筛选条件 */
    Filters?: Filter[];
    /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
    Area?: string;
  }

  interface DescribeTopL7AnalysisDataResponse {
    /** top详细数据 */
    Data: TopDataRecord[] | null;
    /** 查询维度 */
    Type: string;
    /** 查询指标 */
    MetricName: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTopL7CacheDataRequest {
    /** RFC3339标准，客户端时间 */
    StartTime: string;
    /** RFC3339标准，客户端时间 */
    EndTime: string;
    /** 时序类访问流量指标 */
    MetricName: string;
    /** topN,填0时返回全量数据 */
    Limit: number;
    /** 时间间隔，选填{min, 5min, hour, day, week} */
    Interval: string;
    /** ZoneId数组 */
    ZoneIds?: string[];
    /** 筛选条件 */
    Filters?: Filter[];
    /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
    Area?: string;
  }

  interface DescribeTopL7CacheDataResponse {
    /** top详细数据 */
    Data: TopDataRecord[] | null;
    /** 查询维度 */
    Type: string;
    /** 查询指标 */
    MetricName: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWebManagedRulesAttackEventsRequest {
    /** 开始时间 */
    StartTime: string;
    /** 结束时间 */
    EndTime: string;
    /** 条数 */
    PageSize: number;
    /** 当前页 */
    PageNo: number;
    /** ddos策略组id列表 */
    PolicyIds?: number[];
    /** 站点集合 */
    ZoneIds?: string[];
    /** 子域名列表 */
    Domains?: string[];
    /** 选填{Y、N},默认为Y；Y：展示，N：不展示 */
    IsShowDetail?: string;
  }

  interface DescribeWebManagedRulesAttackEventsResponse {
    /** Web攻击事件数据 */
    Data: WebEventData;
    /** 状态，1:失败，0:成功 */
    Status: number;
    /** 返回数据 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWebManagedRulesDataRequest {
    /** 开始时间，RFC3339格式。 */
    StartTime: string;
    /** 结束时间，RFC3339格式。 */
    EndTime: string;
    /** 统计指标列表，取值有：waf_interceptNum ：waf拦截次数 。 */
    MetricNames: string[];
    /** 站点id列表，不填默认选择全部站点。 */
    ZoneIds?: string[];
    /** 子域名列表，不填默认选择子域名。 */
    Domains?: string[];
    /** 该字段已废弃，请勿传。 */
    ProtocolType?: string;
    /** 该字段已废弃，请勿传。 */
    AttackType?: string;
    /** 查询时间粒度，取值有：min ：1分钟 ；5min ：5分钟 ；hour ：1小时 ；day ：1天 。 */
    Interval?: string;
    /** 筛选条件，取值有：action ：执行动作 。 */
    QueryCondition?: QueryCondition[];
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeWebManagedRulesDataResponse {
    /** Web攻击日志实体。 */
    Data: SecEntry[] | null;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应消息。 */
    Msg: string;
    /** 查询时间粒度，取值有：min ：1分钟 ；5min ：5分钟 ；hour ：1小时 ；day ：1天 。 */
    Interval: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWebManagedRulesLogRequest {
    /** 起始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number;
    /** 站点集合，不填默认选择全部站点。 */
    ZoneIds?: string[];
    /** 域名集合，不填默认选择全部子域名。 */
    Domains?: string[];
    /** 筛选条件，取值有：attackType ：攻击类型 ；riskLevel ：风险等级 ；action ：执行动作（处置方式） ；ruleId ：规则id ；sipCountryCode ：ip所在国家 ；attackIp ：攻击ip ；oriDomain ：被攻击的子域名 ；eventId ：事件id ；ua ：用户代理 ；requestMethod ：请求方法 ；uri ：统一资源标识符 。 */
    QueryCondition?: QueryCondition[];
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeWebManagedRulesLogResponse {
    /** web攻击日志数据内容。 */
    Data: WebLogData;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应信息。 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWebManagedRulesTopDataRequest {
    /** 开始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 统计指标列表，取值有：waf_requestNum_url ：url请求数排行 ；waf_requestNum_cip：客户端ip请求数排行 ；waf_cipRequestNum_region ：客户端区域请求数排行 。 */
    MetricName: string;
    /** 查询前多少个，传值为0返回全量。 */
    Limit: number;
    /** 站点id列表，不填默认选择全部站点。 */
    ZoneIds?: string[];
    /** 该字段已废弃，请勿传。 */
    PolicyIds?: number[];
    /** 该字段已废弃，请勿传。 */
    Port?: number;
    /** 该字段已废弃，请勿传。 */
    ProtocolType?: string;
    /** 该字段已废弃，请勿传。 */
    AttackType?: string;
    /** 域名列表，不填默认选择全部子域名。 */
    Domains?: string[];
    /** 查询时间粒度，取值有：min ：1分钟 ；5min ：5分钟 ；hour ：1小时 ；day ：1天 。 */
    Interval?: string;
    /** 筛选条件，取值有：action ：执行动作 。 */
    QueryCondition?: QueryCondition[];
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeWebManagedRulesTopDataResponse {
    /** top数据内容。 */
    Data: TopNEntry[];
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应消息。 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWebProtectionAttackEventsRequest {
    /** 开始时间 */
    StartTime: string;
    /** 结束时间 */
    EndTime: string;
    /** 条数 */
    PageSize: number;
    /** 当前页 */
    PageNo: number;
    /** 域名 */
    Domains?: string[];
    /** 站点集合 */
    ZoneIds?: string[];
  }

  interface DescribeWebProtectionAttackEventsResponse {
    /** DDos攻击事件数据 */
    Data: CCInterceptEventData;
    /** 状态，1:失败，0:成功 */
    Status: number;
    /** 返回消息 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWebProtectionDataRequest {
    /** 开始时间，RFC3339格式。 */
    StartTime: string;
    /** 结束时间，RFC3339格式。 */
    EndTime: string;
    /** 统计指标列表，取值有：ccRate_interceptNum ：速率限制规则限制次数 ；ccAcl_interceptNum ：自定义规则拦截次数 。 */
    MetricNames: string[];
    /** 站点id列表，不填默认选择全部站点。 */
    ZoneIds?: string[];
    /** 子域名列表，不填默认选择全部子域名。 */
    Domains?: string[];
    /** 该字段已废弃，请勿传。 */
    ProtocolType?: string;
    /** 该字段已废弃，请勿传。 */
    AttackType?: string;
    /** 查询时间粒度，取值有：min ：1分钟 ；5min ：5分钟 ；hour ：1小时 ；day ：1天 。 */
    Interval?: string;
    /** 筛选条件，取值有：action ：执行动作 。 */
    QueryCondition?: QueryCondition[];
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeWebProtectionDataResponse {
    /** 数据详情。 */
    Data: SecEntry[] | null;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应消息。 */
    Msg: string;
    /** 查询时间粒度，取值有：min ：1分钟 ；5min ：5分钟 ；hour ：1小时 ；day ：1天 。 */
    Interval: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWebProtectionLogRequest {
    /** 起始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 分页拉取的最大返回结果数。最大值：1000。 */
    PageSize: number;
    /** 分页拉取的起始页号。最小值：1。 */
    PageNo: number;
    /** 站点集合，不填默认查询所有站点。 */
    ZoneIds?: string[];
    /** 域名集合，不填默认查询所有域名。 */
    Domains?: string[];
    /** 筛选条件。限速规则日志中取值有：action ：执行动作（处置方式）；ruleId ：规则id ；oriDomain ：被攻击的子域名 ；attackIp ：攻击ip 。自定义规则日志中取值有：action ：执行动作（处置方式）；ruleId ：规则id ；oriDomain ：被攻击的子域名 ；attackIp ：攻击ip ；eventId ：事件id ；ua ：用户代理 ；requestMethod ：请求方法 ；uri ：统一资源标识符 。 */
    QueryCondition?: QueryCondition[];
    /** 日志类型，取值有：rate ：限速日志 ；acl ：自定义规则日志 。不填默认为rate。 */
    EntityType?: string;
    /** 数据归属地区，取值有：overseas ：全球（除中国大陆地区）数据 ；mainland ：中国大陆地区数据 。不填默认查询overseas。 */
    Area?: string;
  }

  interface DescribeWebProtectionLogResponse {
    /** 限速拦截数据内容。 */
    Data: CCLogData;
    /** 请求响应状态，取值有：1 ：失败 ；0 ：成功 。 */
    Status: number;
    /** 请求响应信息。 */
    Msg: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeZoneDDoSPolicyRequest {
    /** 一级域名id */
    ZoneId?: string;
  }

  interface DescribeZoneDDoSPolicyResponse {
    /** 用户appid */
    AppId: number;
    /** 防护分区 */
    ShieldAreas: ShieldArea[];
    /** 所有子域名信息，包含安全加速/内容加速 */
    Domains: DDoSApplication[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeZoneDetailsRequest {
    /** 站点 ID */
    Id: string;
  }

  interface DescribeZoneDetailsResponse {
    /** 站点 ID */
    Id: string;
    /** 站点名称 */
    Name: string;
    /** 用户当前使用的 NS 列表 */
    OriginalNameServers: string[];
    /** 腾讯云分配给用户的 NS 列表 */
    NameServers: string[];
    /** 站点状态- active：NS 已切换- pending：NS 未切换- moved：NS 已切走- deactivated：被封禁 */
    Status: string;
    /** 站点接入方式- full：NS 接入- partial：CNAME 接入 */
    Type: string;
    /** 站点是否关闭 */
    Paused: boolean;
    /** 是否开启 CNAME 加速- enabled：开启- disabled：关闭 */
    CnameSpeedUp: string;
    /** cname切换验证状态- finished 切换完成- pending 切换验证中 */
    CnameStatus: string;
    /** 资源标签 */
    Tags: Tag[] | null;
    /** 站点接入地域，取值为： global：全球； mainland：中国大陆； overseas：境外区域。 */
    Area: string;
    /** 计费资源 */
    Resources: Resource[] | null;
    /** 站点修改时间 */
    ModifiedOn: string;
    /** 站点创建时间 */
    CreatedOn: string;
    /** 用户自定义 NS 信息 */
    VanityNameServers: VanityNameServers | null;
    /** 用户自定义 NS IP 信息 */
    VanityNameServersIps: VanityNameServersIps[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeZoneSettingRequest {
    /** 站点ID。 */
    ZoneId: string;
  }

  interface DescribeZoneSettingResponse {
    /** 站点ID。 */
    ZoneId: string;
    /** 站点名称。 */
    Zone: string;
    /** 缓存过期时间配置。 */
    Cache: CacheConfig | null;
    /** 节点缓存键配置。 */
    CacheKey: CacheKey | null;
    /** Quic访问配置。 */
    Quic: Quic | null;
    /** POST请求传输配置。 */
    PostMaxSize: PostMaxSize | null;
    /** 智能压缩配置。 */
    Compression: Compression | null;
    /** Http2回源配置。 */
    UpstreamHttp2: UpstreamHttp2 | null;
    /** 访问协议强制Https跳转配置。 */
    ForceRedirect: ForceRedirect | null;
    /** Https 加速配置。 */
    Https: Https | null;
    /** 源站配置。 */
    Origin: Origin | null;
    /** 智能加速配置。 */
    SmartRouting: SmartRouting | null;
    /** 浏览器缓存配置。 */
    MaxAge: MaxAge | null;
    /** 离线缓存配置。 */
    OfflineCache: OfflineCache | null;
    /** WebSocket配置。 */
    WebSocket: WebSocket | null;
    /** 客户端IP回源请求头配置。 */
    ClientIpHeader: ClientIp | null;
    /** 缓存预刷新配置。 */
    CachePrefresh: CachePrefresh | null;
    /** Ipv6访问配置。 */
    Ipv6: Ipv6Access | null;
    /** 站点加速区域信息，取值有：mainland：中国境内加速；overseas：中国境外加速。 */
    Area: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeZonesRequest {
    /** 分页查询偏移量。默认值：0，最小值：0。 */
    Offset?: number;
    /** 分页查询限制数目。默认值：1000，最大值：1000。 */
    Limit?: number;
    /** 查询条件过滤器，复杂类型。 */
    Filters?: ZoneFilter[];
  }

  interface DescribeZonesResponse {
    /** 符合条件的站点个数。 */
    TotalCount: number;
    /** 站点详细信息列表。 */
    Zones: Zone[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DownloadL7LogsRequest {
    /** 起始时间(需严格按照RFC3339标准传参) */
    StartTime: string;
    /** 结束时间(需严格按照RFC3339标准传参) */
    EndTime: string;
    /** 每页展示条数 */
    PageSize: number;
    /** 当前页 */
    PageNo: number;
    /** 站点名集合 */
    Zones?: string[];
    /** 子域名集合 */
    Domains?: string[];
  }

  interface DownloadL7LogsResponse {
    /** 七层离线日志data */
    Data: L7OfflineLog[] | null;
    /** 页面大小 */
    PageSize: number | null;
    /** 页号 */
    PageNo: number | null;
    /** 总页数 */
    Pages: number | null;
    /** 总条数 */
    TotalSize: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface IdentifyZoneRequest {
    /** 站点名称 */
    Name: string;
  }

  interface IdentifyZoneResponse {
    /** 站点名称 */
    Name: string;
    /** 子域 */
    Subdomain: string;
    /** 记录类型 */
    RecordType: string;
    /** 记录值 */
    RecordValue: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ImportDnsRecordsRequest {
    /** 站点 ID */
    ZoneId: string;
    /** 文件内容 */
    File: string;
  }

  interface ImportDnsRecordsResponse {
    /** 记录 ID */
    Ids: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyApplicationProxyRequest {
    /** 站点ID。 */
    ZoneId: string;
    /** 代理ID。 */
    ProxyId: string;
    /** 当ProxyType=hostname时，表示域名或子域名；当ProxyType=instance时，表示代理名称。 */
    ProxyName: string;
    /** 参数已经废弃。 */
    ForwardClientIp: string;
    /** 参数已经废弃。 */
    SessionPersist: boolean;
    /** 会话保持时间，不填写保持原有配置。取值范围：30-3600，单位：秒。 */
    SessionPersistTime?: number;
    /** 四层代理模式，取值有：hostname：表示子域名模式；instance：表示实例模式。不填写保持原有配置。 */
    ProxyType?: string;
    /** Ipv6访问配置，不填写保持原有配置。 */
    Ipv6?: Ipv6Access;
  }

  interface ModifyApplicationProxyResponse {
    /** 代理ID。 */
    ProxyId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyApplicationProxyRuleRequest {
    /** 站点ID */
    ZoneId: string;
    /** 代理ID */
    ProxyId: string;
    /** 规则ID */
    RuleId: string;
    /** 协议，取值为TCP或者UDP */
    Proto: string;
    /** 端口，支持格式：80：80端口81-90：81至90端口 */
    Port: string[];
    /** 源站类型，取值：custom：手动添加origins：源站组 */
    OriginType: string;
    /** 源站信息：当OriginType=custom时，表示一个或多个源站，如：OriginValue=["8.8.8.8:80","9.9.9.9:80"]OriginValue=["test.com:80"]当OriginType=origins时，包含一个元素，表示源站组ID，如：OriginValue=["origin-xxx"] */
    OriginValue: string[];
    /** 传递客户端IP，当Proto=TCP时，取值：TOA：TOAPPV1: Proxy Protocol传递，协议版本V1PPV2: Proxy Protocol传递，协议版本V2OFF：不传递当Proto=UDP时，取值：PPV2: Proxy Protocol传递，协议版本V2OFF：不传递 */
    ForwardClientIp?: string;
    /** 是否开启会话保持 */
    SessionPersist?: boolean;
  }

  interface ModifyApplicationProxyRuleResponse {
    /** 规则ID */
    RuleId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyApplicationProxyRuleStatusRequest {
    /** 站点ID */
    ZoneId: string;
    /** 代理ID */
    ProxyId: string;
    /** 规则ID */
    RuleId: string;
    /** 状态offline: 停用online: 启用 */
    Status: string;
  }

  interface ModifyApplicationProxyRuleStatusResponse {
    /** 规则ID */
    RuleId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyApplicationProxyStatusRequest {
    /** 站点ID */
    ZoneId: string;
    /** 代理ID */
    ProxyId: string;
    /** 状态offline: 停用online: 启用 */
    Status: string;
  }

  interface ModifyApplicationProxyStatusResponse {
    /** 代理ID */
    ProxyId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDDoSPolicyHostRequest {
    /** 站点id */
    ZoneId: string;
    /** 二级域名 */
    Host: string;
    /** 加速开关 on-开启加速；off-关闭加速（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强） */
    AccelerateType: string;
    /** 策略id */
    PolicyId: number;
    /** 安全开关 on-开启安全；off-关闭安全（AccelerateType：on，SecurityType：on，安全加速，未开防护增强；AccelerateType：off，SecurityType：on，安全加速，开启防护增强；AccelerateType：on，SecurityType：off，内容加速，未开防护增强） */
    SecurityType?: string;
  }

  interface ModifyDDoSPolicyHostResponse {
    /** 修改成功的host */
    Host: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDDoSPolicyRequest {
    /** 策略id。 */
    PolicyId: number;
    /** 站点id。 */
    ZoneId: string;
    /** DDoS防护配置详情。 */
    DdosRule?: DdosRule;
  }

  interface ModifyDDoSPolicyResponse {
    /** 策略id。 */
    PolicyId: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDefaultCertificateRequest {
    /** Zone ID */
    ZoneId: string;
    /** 默认证书ID */
    CertId?: string;
    /** 证书状态deployed: 部署证书disabled:禁用证书失败状态下重新deployed即可重试失败 */
    Status?: string;
  }

  interface ModifyDefaultCertificateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDnsRecordRequest {
    /** 记录 ID */
    Id: string;
    /** 站点 ID */
    ZoneId: string;
    /** 记录类型 */
    Type?: string;
    /** 记录名称 */
    Name?: string;
    /** 记录内容 */
    Content?: string;
    /** 生存时间值 */
    Ttl?: number;
    /** 优先级 */
    Priority?: number;
    /** 代理模式 */
    Mode?: string;
  }

  interface ModifyDnsRecordResponse {
    /** 记录 ID */
    Id: string;
    /** 记录类型 */
    Type: string;
    /** 记录名称 */
    Name: string;
    /** 记录内容 */
    Content: string;
    /** 生存时间值 */
    Ttl: number;
    /** 优先级 */
    Priority: number;
    /** 代理模式 */
    Mode: string;
    /** 解析状态 */
    Status: string;
    /** CNAME 地址 */
    Cname: string | null;
    /** 锁定状态 */
    Locked: boolean;
    /** 创建时间 */
    CreatedOn: string;
    /** 修改时间 */
    ModifiedOn: string;
    /** 站点 ID */
    ZoneId: string;
    /** 站点名称 */
    ZoneName: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDnssecRequest {
    /** 站点 ID */
    Id: string;
    /** DNSSEC 状态- enabled 开启- disabled 关闭 */
    Status: string;
  }

  interface ModifyDnssecResponse {
    /** 站点 ID */
    Id: string;
    /** 站点名称 */
    Name: string;
    /** DNSSEC 状态- enabled 开启- disabled 关闭 */
    Status: string;
    /** DNSSEC 相关信息 */
    Dnssec: DnssecInfo | null;
    /** 修改时间 */
    ModifiedOn: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyHostsCertificateRequest {
    /** Zone ID */
    ZoneId: string;
    /** 本次变更的域名 */
    Hosts: string[];
    /** 证书信息, 只需要传入 CertId 即可, 如果为空, 则使用默认证书 */
    CertInfo?: ServerCertInfo[];
  }

  interface ModifyHostsCertificateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyLoadBalancingRequest {
    /** 站点ID */
    ZoneId: string;
    /** 负载均衡ID */
    LoadBalancingId: string;
    /** 代理模式：dns_only: 仅DNSproxied: 开启代理 */
    Type: string;
    /** 使用的源站组ID */
    OriginId: string[];
    /** 当Type=dns_only表示DNS的TTL时间 */
    TTL?: number;
  }

  interface ModifyLoadBalancingResponse {
    /** 负载均衡ID */
    LoadBalancingId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyLoadBalancingStatusRequest {
    /** 站点ID */
    ZoneId: string;
    /** 负载均衡ID */
    LoadBalancingId: string;
    /** 状态online: 启用offline: 停用 */
    Status: string;
  }

  interface ModifyLoadBalancingStatusResponse {
    /** 负载均衡ID */
    LoadBalancingId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyOriginGroupRequest {
    /** 源站组ID */
    OriginId: string;
    /** 源站组名称 */
    OriginName: string;
    /** 配置类型，当OriginType=self 时，需要填写：area: 按区域配置weight: 按权重配置当OriginType=third_party/cos 时，不需要填写 */
    Type: string;
    /** 源站记录 */
    Record: OriginRecord[];
    /** 站点ID */
    ZoneId: string;
    /** 源站类型self：自有源站third_party：第三方源站cos：腾讯云COS源站 */
    OriginType?: string;
  }

  interface ModifyOriginGroupResponse {
    /** 源站组ID */
    OriginId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyRulePriorityRequest {
    /** 站点 ID。 */
    ZoneId: string;
    /** 规则 ID 的顺序，多条规则执行顺序依次往下。 */
    RuleIds: string[];
  }

  interface ModifyRulePriorityResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyRuleRequest {
    /** 站点 ID。 */
    ZoneId: string;
    /** 规则名称，字符串名称长度 1~255。 */
    RuleName: string;
    /** 规则内容。 */
    Rules: RuleItem[];
    /** 规则 ID。 */
    RuleId: string;
    /** 规则状态，取值有： enable: 启用； disable: 未启用。 */
    Status: string;
  }

  interface ModifyRuleResponse {
    /** 规则 ID。 */
    RuleId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifySecurityPolicyRequest {
    /** 一级域名 */
    ZoneId: string;
    /** 二级域名/应用名 */
    Entity: string;
    /** 安全配置 */
    Config: SecurityConfig;
  }

  interface ModifySecurityPolicyResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyZoneCnameSpeedUpRequest {
    /** 站点 ID */
    Id: string;
    /** CNAME 加速状态- enabled 开启- disabled 关闭 */
    Status: string;
  }

  interface ModifyZoneCnameSpeedUpResponse {
    /** 站点 ID */
    Id: string;
    /** 站点名称 */
    Name: string;
    /** CNAME 加速状态- enabled 开启- disabled 关闭 */
    Status: string;
    /** 更新时间 */
    ModifiedOn: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyZoneRequest {
    /** 站点 ID，用于唯一标识站点信息 */
    Id: string;
    /** 站点接入方式- full NS 接入- partial CNAME 接入 */
    Type?: string;
    /** 自定义站点信息 */
    VanityNameServers?: VanityNameServers;
  }

  interface ModifyZoneResponse {
    /** 站点 ID */
    Id: string;
    /** 站点名称 */
    Name: string;
    /** 站点当前使用的 NS */
    OriginalNameServers: string[];
    /** 站点状态- pending 未接入 NS- active 已接入 NS- moved NS 已切走 */
    Status: string;
    /** 站点接入方式- full NS 接入- partial CNAME 接入 */
    Type: string;
    /** 腾讯云分配的 NS 列表 */
    NameServers: string[];
    /** 创建时间 */
    CreatedOn: string;
    /** 修改时间 */
    ModifiedOn: string;
    /** cname 接入状态- finished 站点验证完成- pending 站点验证中 */
    CnameStatus: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyZoneSettingRequest {
    /** 待变更的站点ID。 */
    ZoneId: string;
    /** 缓存过期时间配置。不填写表示保持原有配置。 */
    Cache?: CacheConfig;
    /** 节点缓存键配置。不填写表示保持原有配置。 */
    CacheKey?: CacheKey;
    /** 浏览器缓存配置。不填写表示保持原有配置。 */
    MaxAge?: MaxAge;
    /** 离线缓存配置。不填写表示保持原有配置。 */
    OfflineCache?: OfflineCache;
    /** Quic访问配置。不填写表示保持原有配置。 */
    Quic?: Quic;
    /** Post请求传输配置。不填写表示保持原有配置。 */
    PostMaxSize?: PostMaxSize;
    /** 智能压缩配置。不填写表示保持原有配置。 */
    Compression?: Compression;
    /** Http2回源配置。不填写表示保持原有配置。 */
    UpstreamHttp2?: UpstreamHttp2;
    /** 访问协议强制Https跳转配置。不填写表示保持原有配置。 */
    ForceRedirect?: ForceRedirect;
    /** Https加速配置。不填写表示保持原有配置。 */
    Https?: Https;
    /** 源站配置。不填写表示保持原有配置。 */
    Origin?: Origin;
    /** 智能加速配置。不填写表示保持原有配置。 */
    SmartRouting?: SmartRouting;
    /** WebSocket配置。不填写表示保持原有配置。 */
    WebSocket?: WebSocket;
    /** 客户端IP回源请求头配置。不填写表示保持原有配置。 */
    ClientIpHeader?: ClientIp;
    /** 缓存预刷新配置。不填写表示保持原有配置。 */
    CachePrefresh?: CachePrefresh;
    /** Ipv6访问配置。不填写表示保持原有配置。 */
    Ipv6?: Ipv6Access;
  }

  interface ModifyZoneSettingResponse {
    /** 站点ID。 */
    ZoneId: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyZoneStatusRequest {
    /** 站点 ID */
    Id: string;
    /** 站点状态- false 开启站点- true 关闭站点 */
    Paused: boolean;
  }

  interface ModifyZoneStatusResponse {
    /** 站点 ID */
    Id: string;
    /** 站点名称 */
    Name: string;
    /** 站点状态- false 开启站点- true 关闭站点 */
    Paused: boolean;
    /** 更新时间 */
    ModifiedOn: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ReclaimZoneRequest {
    /** 站点名称 */
    Name: string;
  }

  interface ReclaimZoneResponse {
    /** 站点名称 */
    Name: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ScanDnsRecordsRequest {
    /** 站点 ID */
    ZoneId: string;
  }

  interface ScanDnsRecordsResponse {
    /** 扫描状态- doing 扫描中- done 扫描完成 */
    Status: string;
    /** 扫描后添加的记录数 */
    RecordsAdded: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Teo 边缘安全加速平台} */
declare interface Teo {
  (): Versions;
  /** 为站点绑定套餐 {@link BindZoneToPlanRequest} {@link BindZoneToPlanResponse} */
  BindZoneToPlan(data: BindZoneToPlanRequest, config?: AxiosRequestConfig): AxiosPromise<BindZoneToPlanResponse>;
  /** 校验证书 {@link CheckCertificateRequest} {@link CheckCertificateResponse} */
  CheckCertificate(data: CheckCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCertificateResponse>;
  /** 创建别称域名 {@link CreateAliasDomainRequest} {@link CreateAliasDomainResponse} */
  CreateAliasDomain(data: CreateAliasDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAliasDomainResponse>;
  /** 创建应用代理 {@link CreateApplicationProxyRequest} {@link CreateApplicationProxyResponse} */
  CreateApplicationProxy(data: CreateApplicationProxyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationProxyResponse>;
  /** 创建应用代理规则 {@link CreateApplicationProxyRuleRequest} {@link CreateApplicationProxyRuleResponse} */
  CreateApplicationProxyRule(data: CreateApplicationProxyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationProxyRuleResponse>;
  /** 创建凭证 {@link CreateCredentialRequest} {@link CreateCredentialResponse} */
  CreateCredential(data?: CreateCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCredentialResponse>;
  /** 创建源站组 {@link CreateOriginGroupRequest} {@link CreateOriginGroupResponse} */
  CreateOriginGroup(data: CreateOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOriginGroupResponse>;
  /** 为未购买套餐的站点购买套餐 {@link CreatePlanForZoneRequest} {@link CreatePlanForZoneResponse} */
  CreatePlanForZone(data: CreatePlanForZoneRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePlanForZoneResponse>;
  /** 创建预热任务 {@link CreatePrefetchTaskRequest} {@link CreatePrefetchTaskResponse} */
  CreatePrefetchTask(data: CreatePrefetchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrefetchTaskResponse>;
  /** 创建清除缓存任务 {@link CreatePurgeTaskRequest} {@link CreatePurgeTaskResponse} */
  CreatePurgeTask(data: CreatePurgeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePurgeTaskResponse>;
  /** 创建重放任务 {@link CreateReplayTaskRequest} {@link CreateReplayTaskResponse} */
  CreateReplayTask(data: CreateReplayTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReplayTaskResponse>;
  /** 创建规则引擎规则 {@link CreateRuleRequest} {@link CreateRuleResponse} */
  CreateRule(data: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 创建站点拨测任务 {@link CreateSpeedTestingRequest} {@link CreateSpeedTestingResponse} */
  CreateSpeedTesting(data: CreateSpeedTestingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSpeedTestingResponse>;
  /** 创建站点 {@link CreateZoneRequest} {@link CreateZoneResponse} */
  CreateZone(data: CreateZoneRequest, config?: AxiosRequestConfig): AxiosPromise<CreateZoneResponse>;
  /** 删除别称域名 {@link DeleteAliasDomainRequest} {@link DeleteAliasDomainResponse} */
  DeleteAliasDomain(data: DeleteAliasDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAliasDomainResponse>;
  /** 删除应用代理 {@link DeleteApplicationProxyRequest} {@link DeleteApplicationProxyResponse} */
  DeleteApplicationProxy(data: DeleteApplicationProxyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationProxyResponse>;
  /** 删除应用代理规则 {@link DeleteApplicationProxyRuleRequest} {@link DeleteApplicationProxyRuleResponse} */
  DeleteApplicationProxyRule(data: DeleteApplicationProxyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationProxyRuleResponse>;
  /** 删除源站组 {@link DeleteOriginGroupRequest} {@link DeleteOriginGroupResponse} */
  DeleteOriginGroup(data: DeleteOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOriginGroupResponse>;
  /** 批量删除规则引擎规则 {@link DeleteRulesRequest} {@link DeleteRulesResponse} */
  DeleteRules(data: DeleteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRulesResponse>;
  /** 删除站点 {@link DeleteZoneRequest} {@link DeleteZoneResponse} */
  DeleteZone(data: DeleteZoneRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteZoneResponse>;
  /** 查询剩余可添加的日志推送实体列表 {@link DescribeAddableEntityListRequest} {@link DescribeAddableEntityListResponse} */
  DescribeAddableEntityList(data: DescribeAddableEntityListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddableEntityListResponse>;
  /** 查询别称域名信息列表 {@link DescribeAliasDomainsRequest} {@link DescribeAliasDomainsResponse} */
  DescribeAliasDomains(data: DescribeAliasDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAliasDomainsResponse>;
  /** 查询应用代理列表 {@link DescribeApplicationProxiesRequest} {@link DescribeApplicationProxiesResponse} */
  DescribeApplicationProxies(data?: DescribeApplicationProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationProxiesResponse>;
  /** 查询当前账户可购买套餐信息列表 {@link DescribeAvailablePlansRequest} {@link DescribeAvailablePlansResponse} */
  DescribeAvailablePlans(data?: DescribeAvailablePlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailablePlansResponse>;
  /** 查询封禁客户端信息列表 {@link DescribeClientRuleListRequest} {@link DescribeClientRuleListResponse} */
  DescribeClientRuleList(data: DescribeClientRuleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClientRuleListResponse>;
  /** 查询内容管理接口配额 {@link DescribeContentQuotaRequest} {@link DescribeContentQuotaResponse} */
  DescribeContentQuota(data: DescribeContentQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContentQuotaResponse>;
  /** 查询DDoS攻击时序数据 {@link DescribeDDoSAttackDataRequest} {@link DescribeDDoSAttackDataResponse} */
  DescribeDDoSAttackData(data: DescribeDDoSAttackDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackDataResponse>;
  /** 查询DDoS攻击Top数据 {@link DescribeDDoSAttackTopDataRequest} {@link DescribeDDoSAttackTopDataResponse} */
  DescribeDDoSAttackTopData(data: DescribeDDoSAttackTopDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackTopDataResponse>;
  /** 查询默认证书列表 {@link DescribeDefaultCertificatesRequest} {@link DescribeDefaultCertificatesResponse} */
  DescribeDefaultCertificates(data: DescribeDefaultCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefaultCertificatesResponse>;
  /** 获取DNS请求数统计曲线 {@link DescribeDnsDataRequest} {@link DescribeDnsDataResponse} */
  DescribeDnsData(data: DescribeDnsDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDnsDataResponse>;
  /** 查询域名详细配置 {@link DescribeHostsSettingRequest} {@link DescribeHostsSettingResponse} */
  DescribeHostsSetting(data: DescribeHostsSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostsSettingResponse>;
  /** 查询站点的验证信息 {@link DescribeIdentificationsRequest} {@link DescribeIdentificationsResponse} */
  DescribeIdentifications(data: DescribeIdentificationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIdentificationsResponse>;
  /** 获取日志集列表 {@link DescribeLogSetsRequest} {@link DescribeLogSetsResponse} */
  DescribeLogSets(data: DescribeLogSetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogSetsResponse>;
  /** 获取推送任务列表 {@link DescribeLogTopicTasksRequest} {@link DescribeLogTopicTasksResponse} */
  DescribeLogTopicTasks(data: DescribeLogTopicTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogTopicTasksResponse>;
  /** 获取源站组列表 {@link DescribeOriginGroupRequest} {@link DescribeOriginGroupResponse} */
  DescribeOriginGroup(data: DescribeOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOriginGroupResponse>;
  /** 查询源站防护信息 {@link DescribeOriginProtectionRequest} {@link DescribeOriginProtectionResponse} */
  DescribeOriginProtection(data?: DescribeOriginProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOriginProtectionResponse>;
  /** 查询监控流量时序数据 {@link DescribeOverviewL7DataRequest} {@link DescribeOverviewL7DataResponse} */
  DescribeOverviewL7Data(data: DescribeOverviewL7DataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewL7DataResponse>;
  /** 查询预热任务状态 {@link DescribePrefetchTasksRequest} {@link DescribePrefetchTasksResponse} */
  DescribePrefetchTasks(data?: DescribePrefetchTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrefetchTasksResponse>;
  /** 查询清除缓存历史记录 {@link DescribePurgeTasksRequest} {@link DescribePurgeTasksResponse} */
  DescribePurgeTasks(data?: DescribePurgeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePurgeTasksResponse>;
  /** 查询规则引擎规则 {@link DescribeRulesRequest} {@link DescribeRulesResponse} */
  DescribeRules(data: DescribeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesResponse>;
  /** 查询规则引擎的设置参数 {@link DescribeRulesSettingRequest} {@link DescribeRulesSettingResponse} */
  DescribeRulesSetting(data?: DescribeRulesSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesSettingResponse>;
  /** 查询流量分析单值数据 {@link DescribeSingleL7AnalysisDataRequest} {@link DescribeSingleL7AnalysisDataResponse} */
  DescribeSingleL7AnalysisData(data: DescribeSingleL7AnalysisDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSingleL7AnalysisDataResponse>;
  /** 查询拨测分地区数据 {@link DescribeSpeedTestingDetailsRequest} {@link DescribeSpeedTestingDetailsResponse} */
  DescribeSpeedTestingDetails(data?: DescribeSpeedTestingDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpeedTestingDetailsResponse>;
  /** 查询站点拨测结果 {@link DescribeSpeedTestingMetricDataRequest} {@link DescribeSpeedTestingMetricDataResponse} */
  DescribeSpeedTestingMetricData(data: DescribeSpeedTestingMetricDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpeedTestingMetricDataResponse>;
  /** 查询站点拨测配额 {@link DescribeSpeedTestingQuotaRequest} {@link DescribeSpeedTestingQuotaResponse} */
  DescribeSpeedTestingQuota(data: DescribeSpeedTestingQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpeedTestingQuotaResponse>;
  /** 查询四层流量时序数据 {@link DescribeTimingL4DataRequest} {@link DescribeTimingL4DataResponse} */
  DescribeTimingL4Data(data: DescribeTimingL4DataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimingL4DataResponse>;
  /** 查询流量分析时序数据 {@link DescribeTimingL7AnalysisDataRequest} {@link DescribeTimingL7AnalysisDataResponse} */
  DescribeTimingL7AnalysisData(data: DescribeTimingL7AnalysisDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimingL7AnalysisDataResponse>;
  /** 查询缓存分析时序数据 {@link DescribeTimingL7CacheDataRequest} {@link DescribeTimingL7CacheDataResponse} */
  DescribeTimingL7CacheData(data: DescribeTimingL7CacheDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimingL7CacheDataResponse>;
  /** 查询流量分析Top数据 {@link DescribeTopL7AnalysisDataRequest} {@link DescribeTopL7AnalysisDataResponse} */
  DescribeTopL7AnalysisData(data: DescribeTopL7AnalysisDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopL7AnalysisDataResponse>;
  /** 查询缓存分析Top数据 {@link DescribeTopL7CacheDataRequest} {@link DescribeTopL7CacheDataResponse} */
  DescribeTopL7CacheData(data: DescribeTopL7CacheDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopL7CacheDataResponse>;
  /** 查询WAF攻击时序数据 {@link DescribeWebManagedRulesDataRequest} {@link DescribeWebManagedRulesDataResponse} */
  DescribeWebManagedRulesData(data: DescribeWebManagedRulesDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebManagedRulesDataResponse>;
  /** 查询Web攻击命中规则详情 {@link DescribeWebManagedRulesHitRuleDetailRequest} {@link DescribeWebManagedRulesHitRuleDetailResponse} */
  DescribeWebManagedRulesHitRuleDetail(data: DescribeWebManagedRulesHitRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebManagedRulesHitRuleDetailResponse>;
  /** 查询Web攻击日志 {@link DescribeWebManagedRulesLogRequest} {@link DescribeWebManagedRulesLogResponse} */
  DescribeWebManagedRulesLog(data: DescribeWebManagedRulesLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebManagedRulesLogResponse>;
  /** 查询CC防护攻击源IP信息列表 {@link DescribeWebProtectionClientIpListRequest} {@link DescribeWebProtectionClientIpListResponse} */
  DescribeWebProtectionClientIpList(data: DescribeWebProtectionClientIpListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebProtectionClientIpListResponse>;
  /** 查询CC防护时序数据列表 {@link DescribeWebProtectionDataRequest} {@link DescribeWebProtectionDataResponse} */
  DescribeWebProtectionData(data: DescribeWebProtectionDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebProtectionDataResponse>;
  /** 查询CC防护命中规则详情列表 {@link DescribeWebProtectionHitRuleDetailRequest} {@link DescribeWebProtectionHitRuleDetailResponse} */
  DescribeWebProtectionHitRuleDetail(data: DescribeWebProtectionHitRuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebProtectionHitRuleDetailResponse>;
  /** 查询CC防护Top数据 {@link DescribeWebProtectionTopDataRequest} {@link DescribeWebProtectionTopDataResponse} */
  DescribeWebProtectionTopData(data: DescribeWebProtectionTopDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWebProtectionTopDataResponse>;
  /** 查询站点配置 {@link DescribeZoneSettingRequest} {@link DescribeZoneSettingResponse} */
  DescribeZoneSetting(data: DescribeZoneSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneSettingResponse>;
  /** 查询用户站点信息列表 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data?: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 下载四层离线日志 {@link DownloadL4LogsRequest} {@link DownloadL4LogsResponse} */
  DownloadL4Logs(data: DownloadL4LogsRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadL4LogsResponse>;
  /** 下载七层离线日志 {@link DownloadL7LogsRequest} {@link DownloadL7LogsResponse} */
  DownloadL7Logs(data: DownloadL7LogsRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadL7LogsResponse>;
  /** 认证站点 {@link IdentifyZoneRequest} {@link IdentifyZoneResponse} */
  IdentifyZone(data: IdentifyZoneRequest, config?: AxiosRequestConfig): AxiosPromise<IdentifyZoneResponse>;
  /** 修改别称域名 {@link ModifyAliasDomainRequest} {@link ModifyAliasDomainResponse} */
  ModifyAliasDomain(data: ModifyAliasDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAliasDomainResponse>;
  /** 修改别称域名状态 {@link ModifyAliasDomainStatusRequest} {@link ModifyAliasDomainStatusResponse} */
  ModifyAliasDomainStatus(data: ModifyAliasDomainStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAliasDomainStatusResponse>;
  /** 修改应用代理 {@link ModifyApplicationProxyRequest} {@link ModifyApplicationProxyResponse} */
  ModifyApplicationProxy(data: ModifyApplicationProxyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationProxyResponse>;
  /** 修改应用代理规则 {@link ModifyApplicationProxyRuleRequest} {@link ModifyApplicationProxyRuleResponse} */
  ModifyApplicationProxyRule(data: ModifyApplicationProxyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationProxyRuleResponse>;
  /** 修改应用代理规则的状态 {@link ModifyApplicationProxyRuleStatusRequest} {@link ModifyApplicationProxyRuleStatusResponse} */
  ModifyApplicationProxyRuleStatus(data: ModifyApplicationProxyRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationProxyRuleStatusResponse>;
  /** 修改应用代理的状态 {@link ModifyApplicationProxyStatusRequest} {@link ModifyApplicationProxyStatusResponse} */
  ModifyApplicationProxyStatus(data: ModifyApplicationProxyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationProxyStatusResponse>;
  /** 修改默认证书状态 {@link ModifyDefaultCertificateRequest} {@link ModifyDefaultCertificateResponse} */
  ModifyDefaultCertificate(data: ModifyDefaultCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDefaultCertificateResponse>;
  /** 修改域名证书 {@link ModifyHostsCertificateRequest} {@link ModifyHostsCertificateResponse} */
  ModifyHostsCertificate(data: ModifyHostsCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHostsCertificateResponse>;
  /** 修改源站组 {@link ModifyOriginGroupRequest} {@link ModifyOriginGroupResponse} */
  ModifyOriginGroup(data: ModifyOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOriginGroupResponse>;
  /** 修改规则引擎规则 {@link ModifyRuleRequest} {@link ModifyRuleResponse} */
  ModifyRule(data: ModifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleResponse>;
  /** 修改规则引擎规则优先级 {@link ModifyRulePriorityRequest} {@link ModifyRulePriorityResponse} */
  ModifyRulePriority(data: ModifyRulePriorityRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRulePriorityResponse>;
  /** 修改Web&Bot安全配置 {@link ModifySecurityPolicyRequest} {@link ModifySecurityPolicyResponse} */
  ModifySecurityPolicy(data: ModifySecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityPolicyResponse>;
  /** 修改安全配置托管规则 {@link ModifySecurityWafGroupPolicyRequest} {@link ModifySecurityWafGroupPolicyResponse} */
  ModifySecurityWafGroupPolicy(data?: ModifySecurityWafGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityWafGroupPolicyResponse>;
  /** 修改站点 {@link ModifyZoneRequest} {@link ModifyZoneResponse} */
  ModifyZone(data: ModifyZoneRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneResponse>;
  /** 修改站点配置 {@link ModifyZoneSettingRequest} {@link ModifyZoneSettingResponse} */
  ModifyZoneSetting(data: ModifyZoneSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneSettingResponse>;
  /** 切换站点状态 {@link ModifyZoneStatusRequest} {@link ModifyZoneStatusResponse} */
  ModifyZoneStatus(data: ModifyZoneStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneStatusResponse>;
  /** 取回别称域名 {@link ReclaimAliasDomainRequest} {@link ReclaimAliasDomainResponse} */
  ReclaimAliasDomain(data?: ReclaimAliasDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ReclaimAliasDomainResponse>;
  /** 找回站点 {@link ReclaimZoneRequest} {@link ReclaimZoneResponse} */
  ReclaimZone(data: ReclaimZoneRequest, config?: AxiosRequestConfig): AxiosPromise<ReclaimZoneResponse>;
  /** 更新源站防护IP白名单 {@link UpdateOriginProtectionIPWhitelistRequest} {@link UpdateOriginProtectionIPWhitelistResponse} */
  UpdateOriginProtectionIPWhitelist(data: UpdateOriginProtectionIPWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOriginProtectionIPWhitelistResponse>;
  /** 校验证书 {@link V20220106.CheckCertificateRequest} {@link V20220106.CheckCertificateResponse} */
  CheckCertificate(data: V20220106.CheckCertificateRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CheckCertificateResponse>;
  /** 创建应用代理 {@link V20220106.CreateApplicationProxyRequest} {@link V20220106.CreateApplicationProxyResponse} */
  CreateApplicationProxy(data: V20220106.CreateApplicationProxyRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreateApplicationProxyResponse>;
  /** 创建应用代理规则 {@link V20220106.CreateApplicationProxyRuleRequest} {@link V20220106.CreateApplicationProxyRuleResponse} */
  CreateApplicationProxyRule(data: V20220106.CreateApplicationProxyRuleRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreateApplicationProxyRuleResponse>;
  /** 批量创建应用代理规则 {@link V20220106.CreateApplicationProxyRulesRequest} {@link V20220106.CreateApplicationProxyRulesResponse} */
  CreateApplicationProxyRules(data: V20220106.CreateApplicationProxyRulesRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreateApplicationProxyRulesResponse>;
  /** 创建自定义页 {@link V20220106.CreateCustomErrorPageRequest} {@link V20220106.CreateCustomErrorPageResponse} */
  CreateCustomErrorPage(data: V20220106.CreateCustomErrorPageRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreateCustomErrorPageResponse>;
  /** 创建 DNS 记录 {@link V20220106.CreateDnsRecordRequest} {@link V20220106.CreateDnsRecordResponse} */
  CreateDnsRecord(data: V20220106.CreateDnsRecordRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreateDnsRecordResponse>;
  /** 创建负载均衡 {@link V20220106.CreateLoadBalancingRequest} {@link V20220106.CreateLoadBalancingResponse} */
  CreateLoadBalancing(data: V20220106.CreateLoadBalancingRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreateLoadBalancingResponse>;
  /** 源站组创建 {@link V20220106.CreateOriginGroupRequest} {@link V20220106.CreateOriginGroupResponse} */
  CreateOriginGroup(data: V20220106.CreateOriginGroupRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreateOriginGroupResponse>;
  /** 为未购买套餐的站点购买套餐 {@link V20220106.CreatePlanForZoneRequest} {@link V20220106.CreatePlanForZoneResponse} */
  CreatePlanForZone(data: V20220106.CreatePlanForZoneRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreatePlanForZoneResponse>;
  /** 创建预热任务 {@link V20220106.CreatePrefetchTaskRequest} {@link V20220106.CreatePrefetchTaskResponse} */
  CreatePrefetchTask(data: V20220106.CreatePrefetchTaskRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreatePrefetchTaskResponse>;
  /** 创建清除缓存任务 {@link V20220106.CreatePurgeTaskRequest} {@link V20220106.CreatePurgeTaskResponse} */
  CreatePurgeTask(data: V20220106.CreatePurgeTaskRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreatePurgeTaskResponse>;
  /** 创建规则引擎规则 {@link V20220106.CreateRuleRequest} {@link V20220106.CreateRuleResponse} */
  CreateRule(data: V20220106.CreateRuleRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreateRuleResponse>;
  /** 创建站点 {@link V20220106.CreateZoneRequest} {@link V20220106.CreateZoneResponse} */
  CreateZone(data: V20220106.CreateZoneRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreateZoneResponse>;
  /** 删除应用代理 {@link V20220106.DeleteApplicationProxyRequest} {@link V20220106.DeleteApplicationProxyResponse} */
  DeleteApplicationProxy(data: V20220106.DeleteApplicationProxyRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DeleteApplicationProxyResponse>;
  /** 删除应用代理规则 {@link V20220106.DeleteApplicationProxyRuleRequest} {@link V20220106.DeleteApplicationProxyRuleResponse} */
  DeleteApplicationProxyRule(data: V20220106.DeleteApplicationProxyRuleRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DeleteApplicationProxyRuleResponse>;
  /** 批量删除 DNS 记录 {@link V20220106.DeleteDnsRecordsRequest} {@link V20220106.DeleteDnsRecordsResponse} */
  DeleteDnsRecords(data: V20220106.DeleteDnsRecordsRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DeleteDnsRecordsResponse>;
  /** 删除负载均衡 {@link V20220106.DeleteLoadBalancingRequest} {@link V20220106.DeleteLoadBalancingResponse} */
  DeleteLoadBalancing(data: V20220106.DeleteLoadBalancingRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DeleteLoadBalancingResponse>;
  /** 源站组删除 {@link V20220106.DeleteOriginGroupRequest} {@link V20220106.DeleteOriginGroupResponse} */
  DeleteOriginGroup(data: V20220106.DeleteOriginGroupRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DeleteOriginGroupResponse>;
  /** 批量删除规则引擎规则 {@link V20220106.DeleteRulesRequest} {@link V20220106.DeleteRulesResponse} */
  DeleteRules(data: V20220106.DeleteRulesRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DeleteRulesResponse>;
  /** 删除站点 {@link V20220106.DeleteZoneRequest} {@link V20220106.DeleteZoneResponse} */
  DeleteZone(data: V20220106.DeleteZoneRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DeleteZoneResponse>;
  /** 获取应用代理列表 {@link V20220106.DescribeApplicationProxyRequest} {@link V20220106.DescribeApplicationProxyResponse} */
  DescribeApplicationProxy(data: V20220106.DescribeApplicationProxyRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeApplicationProxyResponse>;
  /** 获取应用代理详细信息 {@link V20220106.DescribeApplicationProxyDetailRequest} {@link V20220106.DescribeApplicationProxyDetailResponse} */
  DescribeApplicationProxyDetail(data: V20220106.DescribeApplicationProxyDetailRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeApplicationProxyDetailResponse>;
  /** 查询当前账户可购买套餐信息列表 {@link V20220106.DescribeAvailablePlansRequest} {@link V20220106.DescribeAvailablePlansResponse} */
  DescribeAvailablePlans(data: V20220106.DescribeAvailablePlansRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeAvailablePlansResponse>;
  /** 查询Bot攻击日志 {@link V20220106.DescribeBotLogRequest} {@link V20220106.DescribeBotLogResponse} */
  DescribeBotLog(data: V20220106.DescribeBotLogRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeBotLogResponse>;
  /** 分页查询Bot托管规则 {@link V20220106.DescribeBotManagedRulesRequest} {@link V20220106.DescribeBotManagedRulesResponse} */
  DescribeBotManagedRules(data: V20220106.DescribeBotManagedRulesRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeBotManagedRulesResponse>;
  /** 查询域名 CNAME 状态 {@link V20220106.DescribeCnameStatusRequest} {@link V20220106.DescribeCnameStatusResponse} */
  DescribeCnameStatus(data: V20220106.DescribeCnameStatusRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeCnameStatusResponse>;
  /** 查询DDoS防护配置详情 {@link V20220106.DescribeDDoSPolicyRequest} {@link V20220106.DescribeDDoSPolicyResponse} */
  DescribeDDoSPolicy(data: V20220106.DescribeDDoSPolicyRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDDoSPolicyResponse>;
  /** 查询DDos攻击时序数据 {@link V20220106.DescribeDDosAttackDataRequest} {@link V20220106.DescribeDDosAttackDataResponse} */
  DescribeDDosAttackData(data: V20220106.DescribeDDosAttackDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDDosAttackDataResponse>;
  /** 查询DDos攻击事件 {@link V20220106.DescribeDDosAttackEventRequest} {@link V20220106.DescribeDDosAttackEventResponse} */
  DescribeDDosAttackEvent(data: V20220106.DescribeDDosAttackEventRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDDosAttackEventResponse>;
  /** 查询DDos攻击事件详情 {@link V20220106.DescribeDDosAttackEventDetailRequest} {@link V20220106.DescribeDDosAttackEventDetailResponse} */
  DescribeDDosAttackEventDetail(data: V20220106.DescribeDDosAttackEventDetailRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDDosAttackEventDetailResponse>;
  /** 查询DDos攻击源信息 {@link V20220106.DescribeDDosAttackSourceEventRequest} {@link V20220106.DescribeDDosAttackSourceEventResponse} */
  DescribeDDosAttackSourceEvent(data: V20220106.DescribeDDosAttackSourceEventRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDDosAttackSourceEventResponse>;
  /** 查询DDos攻击Top数据 {@link V20220106.DescribeDDosAttackTopDataRequest} {@link V20220106.DescribeDDosAttackTopDataResponse} */
  DescribeDDosAttackTopData(data: V20220106.DescribeDDosAttackTopDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDDosAttackTopDataResponse>;
  /** 查询DDos主攻击事件 {@link V20220106.DescribeDDosMajorAttackEventRequest} {@link V20220106.DescribeDDosMajorAttackEventResponse} */
  DescribeDDosMajorAttackEvent(data: V20220106.DescribeDDosMajorAttackEventRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDDosMajorAttackEventResponse>;
  /** 查询默认证书列表 {@link V20220106.DescribeDefaultCertificatesRequest} {@link V20220106.DescribeDefaultCertificatesResponse} */
  DescribeDefaultCertificates(data: V20220106.DescribeDefaultCertificatesRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDefaultCertificatesResponse>;
  /** 获取DNS请求数统计曲线 {@link V20220106.DescribeDnsDataRequest} {@link V20220106.DescribeDnsDataResponse} */
  DescribeDnsData(data: V20220106.DescribeDnsDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDnsDataResponse>;
  /** 查询 DNS 记录列表 {@link V20220106.DescribeDnsRecordsRequest} {@link V20220106.DescribeDnsRecordsResponse} */
  DescribeDnsRecords(data: V20220106.DescribeDnsRecordsRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDnsRecordsResponse>;
  /** 查询 DNSSEC 信息 {@link V20220106.DescribeDnssecRequest} {@link V20220106.DescribeDnssecResponse} */
  DescribeDnssec(data: V20220106.DescribeDnssecRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeDnssecResponse>;
  /** 查询域名证书列表 {@link V20220106.DescribeHostsCertificateRequest} {@link V20220106.DescribeHostsCertificateResponse} */
  DescribeHostsCertificate(data: V20220106.DescribeHostsCertificateRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeHostsCertificateResponse>;
  /** 查询域名详细配置 {@link V20220106.DescribeHostsSettingRequest} {@link V20220106.DescribeHostsSettingResponse} */
  DescribeHostsSetting(data: V20220106.DescribeHostsSettingRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeHostsSettingResponse>;
  /** 查询站点的验证状态 {@link V20220106.DescribeIdentificationRequest} {@link V20220106.DescribeIdentificationResponse} */
  DescribeIdentification(data: V20220106.DescribeIdentificationRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeIdentificationResponse>;
  /** 获取负载均衡列表 {@link V20220106.DescribeLoadBalancingRequest} {@link V20220106.DescribeLoadBalancingResponse} */
  DescribeLoadBalancing(data: V20220106.DescribeLoadBalancingRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeLoadBalancingResponse>;
  /** 获取负载均衡详细信息 {@link V20220106.DescribeLoadBalancingDetailRequest} {@link V20220106.DescribeLoadBalancingDetailResponse} */
  DescribeLoadBalancingDetail(data: V20220106.DescribeLoadBalancingDetailRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeLoadBalancingDetailResponse>;
  /** 获取源站组信息列表 {@link V20220106.DescribeOriginGroupRequest} {@link V20220106.DescribeOriginGroupResponse} */
  DescribeOriginGroup(data: V20220106.DescribeOriginGroupRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeOriginGroupResponse>;
  /** 获取源站组详细信息 {@link V20220106.DescribeOriginGroupDetailRequest} {@link V20220106.DescribeOriginGroupDetailResponse} */
  DescribeOriginGroupDetail(data: V20220106.DescribeOriginGroupDetailRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeOriginGroupDetailResponse>;
  /** 查询七层监控类时序流量数据 {@link V20220106.DescribeOverviewL7DataRequest} {@link V20220106.DescribeOverviewL7DataResponse} */
  DescribeOverviewL7Data(data: V20220106.DescribeOverviewL7DataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeOverviewL7DataResponse>;
  /** 查询预热任务状态 {@link V20220106.DescribePrefetchTasksRequest} {@link V20220106.DescribePrefetchTasksResponse} */
  DescribePrefetchTasks(data: V20220106.DescribePrefetchTasksRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribePrefetchTasksResponse>;
  /** 查询清除缓存历史记录 {@link V20220106.DescribePurgeTasksRequest} {@link V20220106.DescribePurgeTasksResponse} */
  DescribePurgeTasks(data: V20220106.DescribePurgeTasksRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribePurgeTasksResponse>;
  /** 查询规则引擎规则 {@link V20220106.DescribeRulesRequest} {@link V20220106.DescribeRulesResponse} */
  DescribeRules(data: V20220106.DescribeRulesRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeRulesResponse>;
  /** 查询规则引擎的设置参数 {@link V20220106.DescribeRulesSettingRequest} {@link V20220106.DescribeRulesSettingResponse} */
  DescribeRulesSetting(data: V20220106.DescribeRulesSettingRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeRulesSettingResponse>;
  /** 查询安全防护配置详情 {@link V20220106.DescribeSecurityPolicyRequest} {@link V20220106.DescribeSecurityPolicyResponse} */
  DescribeSecurityPolicy(data: V20220106.DescribeSecurityPolicyRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeSecurityPolicyResponse>;
  /** 查询全部安全实例 {@link V20220106.DescribeSecurityPolicyListRequest} {@link V20220106.DescribeSecurityPolicyListResponse} */
  DescribeSecurityPolicyList(data: V20220106.DescribeSecurityPolicyListRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeSecurityPolicyListResponse>;
  /** 分页查询门神规则 {@link V20220106.DescribeSecurityPolicyManagedRulesRequest} {@link V20220106.DescribeSecurityPolicyManagedRulesResponse} */
  DescribeSecurityPolicyManagedRules(data: V20220106.DescribeSecurityPolicyManagedRulesRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeSecurityPolicyManagedRulesResponse>;
  /** 规则id查询门神规则详情 {@link V20220106.DescribeSecurityPolicyManagedRulesIdRequest} {@link V20220106.DescribeSecurityPolicyManagedRulesIdResponse} */
  DescribeSecurityPolicyManagedRulesId(data: V20220106.DescribeSecurityPolicyManagedRulesIdRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeSecurityPolicyManagedRulesIdResponse>;
  /** 查询所有地域信息 {@link V20220106.DescribeSecurityPolicyRegionsRequest} {@link V20220106.DescribeSecurityPolicyRegionsResponse} */
  DescribeSecurityPolicyRegions(data: V20220106.DescribeSecurityPolicyRegionsRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeSecurityPolicyRegionsResponse>;
  /** 查询Bot用户画像规则 {@link V20220106.DescribeSecurityPortraitRulesRequest} {@link V20220106.DescribeSecurityPortraitRulesResponse} */
  DescribeSecurityPortraitRules(data: V20220106.DescribeSecurityPortraitRulesRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeSecurityPortraitRulesResponse>;
  /** 四层时序流量数据查询接口 {@link V20220106.DescribeTimingL4DataRequest} {@link V20220106.DescribeTimingL4DataResponse} */
  DescribeTimingL4Data(data: V20220106.DescribeTimingL4DataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeTimingL4DataResponse>;
  /** 查询七层数据分析类时序流量数据 {@link V20220106.DescribeTimingL7AnalysisDataRequest} {@link V20220106.DescribeTimingL7AnalysisDataResponse} */
  DescribeTimingL7AnalysisData(data: V20220106.DescribeTimingL7AnalysisDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeTimingL7AnalysisDataResponse>;
  /** 七层缓存分析类时序流量数据接口 {@link V20220106.DescribeTimingL7CacheDataRequest} {@link V20220106.DescribeTimingL7CacheDataResponse} */
  DescribeTimingL7CacheData(data: V20220106.DescribeTimingL7CacheDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeTimingL7CacheDataResponse>;
  /** 七层数据分析类top流量数据接口 {@link V20220106.DescribeTopL7AnalysisDataRequest} {@link V20220106.DescribeTopL7AnalysisDataResponse} */
  DescribeTopL7AnalysisData(data: V20220106.DescribeTopL7AnalysisDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeTopL7AnalysisDataResponse>;
  /** 七层缓存分析类top流量数据接口 {@link V20220106.DescribeTopL7CacheDataRequest} {@link V20220106.DescribeTopL7CacheDataResponse} */
  DescribeTopL7CacheData(data: V20220106.DescribeTopL7CacheDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeTopL7CacheDataResponse>;
  /** 查询Web托管攻击事件 {@link V20220106.DescribeWebManagedRulesAttackEventsRequest} {@link V20220106.DescribeWebManagedRulesAttackEventsResponse} */
  DescribeWebManagedRulesAttackEvents(data: V20220106.DescribeWebManagedRulesAttackEventsRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeWebManagedRulesAttackEventsResponse>;
  /** 查询waf攻击时序数据 {@link V20220106.DescribeWebManagedRulesDataRequest} {@link V20220106.DescribeWebManagedRulesDataResponse} */
  DescribeWebManagedRulesData(data: V20220106.DescribeWebManagedRulesDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeWebManagedRulesDataResponse>;
  /** 查询waf攻击日志 {@link V20220106.DescribeWebManagedRulesLogRequest} {@link V20220106.DescribeWebManagedRulesLogResponse} */
  DescribeWebManagedRulesLog(data: V20220106.DescribeWebManagedRulesLogRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeWebManagedRulesLogResponse>;
  /** 查询waf攻击top数据 {@link V20220106.DescribeWebManagedRulesTopDataRequest} {@link V20220106.DescribeWebManagedRulesTopDataResponse} */
  DescribeWebManagedRulesTopData(data: V20220106.DescribeWebManagedRulesTopDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeWebManagedRulesTopDataResponse>;
  /** 查询web防护攻击事件 {@link V20220106.DescribeWebProtectionAttackEventsRequest} {@link V20220106.DescribeWebProtectionAttackEventsResponse} */
  DescribeWebProtectionAttackEvents(data: V20220106.DescribeWebProtectionAttackEventsRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeWebProtectionAttackEventsResponse>;
  /** 查询CC防护时序数据 {@link V20220106.DescribeWebProtectionDataRequest} {@link V20220106.DescribeWebProtectionDataResponse} */
  DescribeWebProtectionData(data: V20220106.DescribeWebProtectionDataRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeWebProtectionDataResponse>;
  /** 查询CC防护日志 {@link V20220106.DescribeWebProtectionLogRequest} {@link V20220106.DescribeWebProtectionLogResponse} */
  DescribeWebProtectionLog(data: V20220106.DescribeWebProtectionLogRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeWebProtectionLogResponse>;
  /** 查询所有DDoS防护分区 {@link V20220106.DescribeZoneDDoSPolicyRequest} {@link V20220106.DescribeZoneDDoSPolicyResponse} */
  DescribeZoneDDoSPolicy(data: V20220106.DescribeZoneDDoSPolicyRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeZoneDDoSPolicyResponse>;
  /** 查询某个站点的详细信息 {@link V20220106.DescribeZoneDetailsRequest} {@link V20220106.DescribeZoneDetailsResponse} */
  DescribeZoneDetails(data: V20220106.DescribeZoneDetailsRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeZoneDetailsResponse>;
  /** 查询站点配置 {@link V20220106.DescribeZoneSettingRequest} {@link V20220106.DescribeZoneSettingResponse} */
  DescribeZoneSetting(data: V20220106.DescribeZoneSettingRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeZoneSettingResponse>;
  /** 查询用户站点信息列表 {@link V20220106.DescribeZonesRequest} {@link V20220106.DescribeZonesResponse} */
  DescribeZones(data: V20220106.DescribeZonesRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeZonesResponse>;
  /** 七层离线日志下载 {@link V20220106.DownloadL7LogsRequest} {@link V20220106.DownloadL7LogsResponse} */
  DownloadL7Logs(data: V20220106.DownloadL7LogsRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DownloadL7LogsResponse>;
  /** 认证站点 {@link V20220106.IdentifyZoneRequest} {@link V20220106.IdentifyZoneResponse} */
  IdentifyZone(data: V20220106.IdentifyZoneRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.IdentifyZoneResponse>;
  /** 导入 DNS 记录 {@link V20220106.ImportDnsRecordsRequest} {@link V20220106.ImportDnsRecordsResponse} */
  ImportDnsRecords(data: V20220106.ImportDnsRecordsRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ImportDnsRecordsResponse>;
  /** 修改应用代理 {@link V20220106.ModifyApplicationProxyRequest} {@link V20220106.ModifyApplicationProxyResponse} */
  ModifyApplicationProxy(data: V20220106.ModifyApplicationProxyRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyApplicationProxyResponse>;
  /** 修改应用代理规则 {@link V20220106.ModifyApplicationProxyRuleRequest} {@link V20220106.ModifyApplicationProxyRuleResponse} */
  ModifyApplicationProxyRule(data: V20220106.ModifyApplicationProxyRuleRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyApplicationProxyRuleResponse>;
  /** 修改应用代理规则的状态 {@link V20220106.ModifyApplicationProxyRuleStatusRequest} {@link V20220106.ModifyApplicationProxyRuleStatusResponse} */
  ModifyApplicationProxyRuleStatus(data: V20220106.ModifyApplicationProxyRuleStatusRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyApplicationProxyRuleStatusResponse>;
  /** 修改应用代理的状态 {@link V20220106.ModifyApplicationProxyStatusRequest} {@link V20220106.ModifyApplicationProxyStatusResponse} */
  ModifyApplicationProxyStatus(data: V20220106.ModifyApplicationProxyStatusRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyApplicationProxyStatusResponse>;
  /** 修改DDoS防护分区配置 {@link V20220106.ModifyDDoSPolicyRequest} {@link V20220106.ModifyDDoSPolicyResponse} */
  ModifyDDoSPolicy(data: V20220106.ModifyDDoSPolicyRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyDDoSPolicyResponse>;
  /** 域名DDoS高可用开关 {@link V20220106.ModifyDDoSPolicyHostRequest} {@link V20220106.ModifyDDoSPolicyHostResponse} */
  ModifyDDoSPolicyHost(data: V20220106.ModifyDDoSPolicyHostRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyDDoSPolicyHostResponse>;
  /** 修改默认证书状态 {@link V20220106.ModifyDefaultCertificateRequest} {@link V20220106.ModifyDefaultCertificateResponse} */
  ModifyDefaultCertificate(data: V20220106.ModifyDefaultCertificateRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyDefaultCertificateResponse>;
  /** 修改 DNS 记录 {@link V20220106.ModifyDnsRecordRequest} {@link V20220106.ModifyDnsRecordResponse} */
  ModifyDnsRecord(data: V20220106.ModifyDnsRecordRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyDnsRecordResponse>;
  /** 修改 DNSSEC {@link V20220106.ModifyDnssecRequest} {@link V20220106.ModifyDnssecResponse} */
  ModifyDnssec(data: V20220106.ModifyDnssecRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyDnssecResponse>;
  /** 修改域名证书 {@link V20220106.ModifyHostsCertificateRequest} {@link V20220106.ModifyHostsCertificateResponse} */
  ModifyHostsCertificate(data: V20220106.ModifyHostsCertificateRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyHostsCertificateResponse>;
  /** 修改负载均衡 {@link V20220106.ModifyLoadBalancingRequest} {@link V20220106.ModifyLoadBalancingResponse} */
  ModifyLoadBalancing(data: V20220106.ModifyLoadBalancingRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyLoadBalancingResponse>;
  /** 修改负载均衡状态 {@link V20220106.ModifyLoadBalancingStatusRequest} {@link V20220106.ModifyLoadBalancingStatusResponse} */
  ModifyLoadBalancingStatus(data: V20220106.ModifyLoadBalancingStatusRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyLoadBalancingStatusResponse>;
  /** 源站组修改 {@link V20220106.ModifyOriginGroupRequest} {@link V20220106.ModifyOriginGroupResponse} */
  ModifyOriginGroup(data: V20220106.ModifyOriginGroupRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyOriginGroupResponse>;
  /** 修改规则引擎规则 {@link V20220106.ModifyRuleRequest} {@link V20220106.ModifyRuleResponse} */
  ModifyRule(data: V20220106.ModifyRuleRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyRuleResponse>;
  /** 修改规则引擎规则优先级 {@link V20220106.ModifyRulePriorityRequest} {@link V20220106.ModifyRulePriorityResponse} */
  ModifyRulePriority(data: V20220106.ModifyRulePriorityRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyRulePriorityResponse>;
  /** 修改Web&Bot安全配置 {@link V20220106.ModifySecurityPolicyRequest} {@link V20220106.ModifySecurityPolicyResponse} */
  ModifySecurityPolicy(data: V20220106.ModifySecurityPolicyRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifySecurityPolicyResponse>;
  /** 修改站点 {@link V20220106.ModifyZoneRequest} {@link V20220106.ModifyZoneResponse} */
  ModifyZone(data: V20220106.ModifyZoneRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyZoneResponse>;
  /** 修改 CNAME 加速状态 {@link V20220106.ModifyZoneCnameSpeedUpRequest} {@link V20220106.ModifyZoneCnameSpeedUpResponse} */
  ModifyZoneCnameSpeedUp(data: V20220106.ModifyZoneCnameSpeedUpRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyZoneCnameSpeedUpResponse>;
  /** 修改站点配置 {@link V20220106.ModifyZoneSettingRequest} {@link V20220106.ModifyZoneSettingResponse} */
  ModifyZoneSetting(data: V20220106.ModifyZoneSettingRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyZoneSettingResponse>;
  /** 切换站点状态 {@link V20220106.ModifyZoneStatusRequest} {@link V20220106.ModifyZoneStatusResponse} */
  ModifyZoneStatus(data: V20220106.ModifyZoneStatusRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ModifyZoneStatusResponse>;
  /** 找回站点 {@link V20220106.ReclaimZoneRequest} {@link V20220106.ReclaimZoneResponse} */
  ReclaimZone(data: V20220106.ReclaimZoneRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ReclaimZoneResponse>;
  /** 扫描站点历史解析记录 {@link V20220106.ScanDnsRecordsRequest} {@link V20220106.ScanDnsRecordsResponse} */
  ScanDnsRecords(data: V20220106.ScanDnsRecordsRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.ScanDnsRecordsResponse>;
}

export declare type Versions = ["2022-09-01", "2022-01-06"];

export default Teo;
