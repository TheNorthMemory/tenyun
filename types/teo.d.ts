/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 中国大陆加速优化配置。 */
declare interface AccelerateMainland {
  /** 是否开启中国大陆加速优化配置，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 加速类型 */
declare interface AccelerateType {
  /** 加速开关。取值范围： on：打开;off：关闭。 */
  Switch: string;
}

/** 加速域名 */
declare interface AccelerationDomain {
  /** 源站信息。 */
  OriginDetail?: OriginDetail | null;
  /** 创建时间。 */
  CreatedOn?: string;
  /** 加速域名名称。 */
  DomainName?: string;
  /** 修改时间。 */
  ModifiedOn?: string;
  /** 站点 ID。 */
  ZoneId?: string;
  /** 加速域名状态，取值有：online：已生效；process：部署中；offline：已停用；forbidden：已封禁；init：未生效，待激活站点； */
  DomainStatus?: string;
  /** CNAME 地址。 */
  Cname?: string;
  /** 加速域名归属权验证状态，取值有： pending：待验证； finished：已完成验证。 */
  IdentificationStatus?: string | null;
}

/** 精准防护条件 */
declare interface AclCondition {
  /** 匹配字段，取值有：host：请求域名；sip：客户端IP；ua：User-Agent；cookie：会话 Cookie；cgi：CGI 脚本；xff：XFF 扩展头部；url：请求 URL；accept：请求内容类型；method：请求方式；header：请求头部；app_proto：应用层协议；sip_proto：网络层协议；uabot：UA 特征规则，仅bot自定义规则可用；idcid：IDC 规则，仅bot自定义规则可用；sipbot：搜索引擎规则，仅bot自定义规则可用；portrait：画像分析，仅bot自定义规则可用；header_seq：请求头顺序，仅bot自定义规则可用；hdr：请求正文，仅Web防护自定义规则可用。 */
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
  /** 托管定制规则 */
  Customizes?: AclUserRule[] | null;
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
  /** 常规功能操作，选择该类型的功能项有： 访问URL 重写（AccessUrlRedirect）； 回源 URL 重写 （UpstreamUrlRedirect）； QUIC（QUIC）； WebSocket （WebSocket）； 视频拖拽（VideoSeek）； Token 鉴权（Authentication）； 自定义CacheKey（CacheKey）； 节点缓存 TTL （Cache）； 浏览器缓存 TTL（MaxAge）； 离线缓存（OfflineCache）； 智能加速（SmartRouting）； 分片回源（RangeOriginPull）； HTTP/2 回源（UpstreamHttp2）； Host Header 重写（HostHeader）； 强制 HTTPS（ForceRedirect）； 回源 HTTPS（OriginPullProtocol）； 缓存预刷新（CachePrefresh）； 智能压缩（Compression）； Hsts； ClientIpHeader； SslTlsSecureConf； OcspStapling； HTTP/2 访问（Http2）； 回源跟随重定向(UpstreamFollowRedirect)； 修改源站(Origin)。 */
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

/** Bot主动特征识别客户端行为校验。 */
declare interface AlgDetectJS {
  /** 操作名称。 */
  Name?: string;
  /** 工作量证明 (proof_Of-Work)校验强度，默认low，取值有：low：低；middle：中；high：高。 */
  WorkLevel?: string;
  /** 执行方式，js延迟执行的时间。单位为ms，默认500，取值：0～1000。 */
  ExecuteMode?: number;
  /** 客户端末启用JS（末完成检测）统计周期。单位为秒，默认10，取值：5～3600。 */
  InvalidStatTime?: number;
  /** 客户端末启用JS（末完成检测）触发阈值。单位为次，默认300，取值：1～100000000。 */
  InvalidThreshold?: number;
  /** Bot主动特征识别客户端行为校验结果。 */
  AlgDetectResults?: AlgDetectResult[];
}

/** Bot主动特征识别校验结果。 */
declare interface AlgDetectResult {
  /** 校验结果，取值有：invalid：不合法Cookie；cookie_empty：末携带Cookie或Cookie己过期；js_empty：客户端末启用JS（末完成检测）；low：会话速率和周期特征校验低风险；middle：会话速率和周期特征校验中风险；high：会话速率和周期特征校验高风险；timeout：检测超时时长；not_browser：不合法浏览器；is_bot：Bot客户端。 */
  Result?: string;
  /** 处罚动作，取值有：drop：拦截；monitor：观察；silence：静默；shortdelay：（短时间）等待后响应；longdelay：（长时间）等待后响应。 */
  Action?: string;
}

/** Bot主动特征识别规则。 */
declare interface AlgDetectRule {
  /** 规则id。 */
  RuleID?: number;
  /** 规则名。 */
  RuleName?: string;
  /** 规则开关。 */
  Switch?: string;
  /** 自定义规则。 */
  AlgConditions?: AclCondition[];
  /** Cookie校验和会话行为分析。 */
  AlgDetectSession?: AlgDetectSession | null;
  /** 客户端行为校验。 */
  AlgDetectJS?: AlgDetectJS[];
  /** 更新时间。仅出参使用。 */
  UpdateTime?: string;
}

/** Cookie校验与会话跟踪。 */
declare interface AlgDetectSession {
  /** 操作名称。 */
  Name?: string;
  /** 校验方式，默认update_detect，取值有：detect：仅校验；update_detect：更新Cookie并校验。 */
  DetectMode?: string;
  /** 会话速率和周期特征校验开关，默认off，取值有：off：关闭；on：打开。 */
  SessionAnalyzeSwitch?: string;
  /** 校验结果为未携带Cookie或Cookie已过期的统计周期。单位为秒，默认10，取值：5～3600。 */
  InvalidStatTime?: number;
  /** 校验结果为未携带Cookie或Cookie已过期的触发阈值。单位为次，默认300，取值：1～100000000。 */
  InvalidThreshold?: number;
  /** Cookie校验校验结果。 */
  AlgDetectResults?: AlgDetectResult[];
  /** 会话速率和周期特征校验结果。 */
  SessionBehaviors?: AlgDetectResult[];
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
  ZoneId?: string;
  /** 站点名称。 */
  ZoneName?: string;
  /** 代理ID。 */
  ProxyId?: string;
  /** 当ProxyType=hostname时，表示域名或子域名；当ProxyType=instance时，表示代理名称。 */
  ProxyName?: string;
  /** 四层代理模式，取值有：hostname：表示子域名模式；instance：表示实例模式。 */
  ProxyType?: string;
  /** 调度模式，取值有：ip：表示Anycast IP调度；domain：表示CNAME调度。 */
  PlatType?: string;
  /** 加速区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。默认值：overseas */
  Area?: string;
  /** 是否开启安全，取值有：0：关闭安全；1：开启安全。 */
  SecurityType?: number;
  /** 是否开启加速，取值有：0：关闭加速；1：开启加速。 */
  AccelerateType?: number;
  /** 会话保持时间。 */
  SessionPersistTime?: number;
  /** 状态，取值有：online：启用；offline：停用；progress：部署中；stopping：停用中；fail：部署失败/停用失败。 */
  Status?: string;
  /** 封禁状态，取值有：banned：已封禁;banning：封禁中；recover：已解封；recovering：解封禁中。 */
  BanStatus?: string;
  /** 调度信息。 */
  ScheduleValue?: string[];
  /** 当ProxyType=hostname时：表示代理加速唯一标识。 */
  HostId?: string;
  /** Ipv6访问配置。 */
  Ipv6?: Ipv6;
  /** 更新时间。 */
  UpdateTime?: string;
  /** 规则列表。 */
  ApplicationProxyRules?: ApplicationProxyRule[];
  /** 中国大陆加速优化配置。 */
  AccelerateMainland?: AccelerateMainland;
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
  /** 会话保持的时间，只有当SessionPersist为true时，该值才会生效。 */
  SessionPersistTime?: number | null;
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
  /** Bot自定义规则。如果为null，默认使用历史配置。 */
  BotUserRules?: BotUserRule[];
  /** Bot主动特征识别规则。 */
  AlgDetectRule?: AlgDetectRule[];
  /** Bot托管定制策略，入参可不填，仅出参使用。 */
  Customizes?: BotUserRule[] | null;
}

/** Bot扩展处置方式，多处置动作组合。 */
declare interface BotExtendAction {
  /** 处置动作，取值有：monitor：观察；alg：JavaScript挑战；captcha：托管挑战；random：随机，按照ExtendActions分配处置动作和比例；silence：静默；shortdelay：短时响应；longdelay：长时响应。 */
  Action: string;
  /** 处置方式的触发概率，范围0-100。 */
  Percent?: number | null;
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

/** Bot自定义规则 */
declare interface BotUserRule {
  /** 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。 */
  RuleName: string;
  /** 处置动作，取值有：drop：拦截；monitor：观察；trans：放行；alg：JavaScript挑战；captcha：托管挑战；random：随机处置；silence：静默；shortdelay：短时响应；longdelay：长时响应。 */
  Action: string;
  /** 规则状态，取值有：on：生效；off：不生效。默认on生效。 */
  RuleStatus: string;
  /** 规则详情。 */
  AclConditions: AclCondition[];
  /** 规则权重，取值范围0-100。 */
  RulePriority: number;
  /** 规则id。仅出参使用。 */
  RuleID?: number | null;
  /** 随机处置的处置方式及占比，非随机处置可不填暂不支持。 */
  ExtendActions?: BotExtendAction[];
  /** 过滤词，取值有：sip：客户端ip。 */
  FreqFields?: string[] | null;
  /** 更新时间。 */
  UpdateTime?: string | null;
  /** 统计范围，字段为null时，代表source_to_eo。取值有：source_to_eo：（响应）源站到EdgeOne。client_to_eo：（请求）客户端到EdgeOne； */
  FreqScope?: string[] | null;
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
  /** CacheKey 中包含请求参数。 */
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
  /** 存放客户端 IP 所属地域信息的请求头名称，当 Switch=on 时有效。为空则使用默认值：EO-Client-IPCountry。 */
  HeaderName?: string;
}

/** 存储客户端请求IP的头部信息配置 */
declare interface ClientIpHeader {
  /** 配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 回源时，存放客户端 IP 的请求头名称。为空则使用默认值：X-Forwarded-IP。 */
  HeaderName?: string | null;
}

/** CNAME 状态 */
declare interface CnameStatus {
  /** 记录名称。 */
  RecordName: string;
  /** CNAME 地址。 */
  Cname: string | null;
  /** Cname状态信息，取值有：active：生效；moved：不生效。 */
  Status: string | null;
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

/** DDoS攻击事件对象 */
declare interface DDoSAttackEvent {
  /** 事件ID。 */
  EventId: string;
  /** 攻击类型(对应交互事件名称)。 */
  AttackType: string;
  /** 攻击状态。 */
  AttackStatus: number;
  /** 攻击最大带宽。 */
  AttackMaxBandWidth: number;
  /** 攻击包速率峰值。 */
  AttackPacketMaxRate: number;
  /** 攻击开始时间，单位为s。 */
  AttackStartTime: number;
  /** 攻击结束时间，单位为s。 */
  AttackEndTime: number;
  /** DDoS策略组ID。 */
  PolicyId: number | null;
  /** 站点ID。 */
  ZoneId: string | null;
  /** 攻击事件所属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据。 */
  Area: string | null;
  /** 封禁解封信息。 */
  DDoSBlockData: DDoSBlockData[] | null;
}

/** DDoS封禁解封信息 */
declare interface DDoSBlockData {
  /** 开始时间，采用unix时间戳。 */
  StartTime: number;
  /** 结束时间，采用unix时间戳, 为0表示还处于封禁中。 */
  EndTime: number;
  /** 封禁受影响区域。 */
  BlockArea: string;
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
  /** 生效的模块，该字段取值有：waf：托管规则；rate：速率限制；acl：自定义规则；cc：cc攻击防护；bot：Bot防护。 */
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

/** 慢速攻击的首段包配置。 */
declare interface FirstPartConfig {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string | null;
  /** 首段包的统计时长，单位是秒，即期望首段包的统计时长是多少，默认5秒。 */
  StatTime?: number | null;
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
  /** 是否开启 Grpc 配置，取值有：on：开启；off：关闭。 */
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
  /** MaxAge 数值。单位为秒，最大值为1天。 */
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
  /** Tls 版本设置，取值有：TLSv1：TLSv1版本；TLSV1.1：TLSv1.1版本；TLSV1.2：TLSv1.2版本；TLSv1.3：TLSv1.3版本。修改时必须开启连续的版本。 */
  TlsVersion?: string[] | null;
  /** HSTS 配置。 */
  Hsts?: Hsts | null;
  /** 证书配置。 */
  CertInfo?: ServerCertInfo[] | null;
  /** 申请类型，取值有：apply：托管EdgeOne；none：不托管EdgeOne。不填，默认取值为none。 */
  ApplyType?: string | null;
  /** 密码套件，取值有：loose-v2023：提供最高的兼容性，安全性一般，支持 TLS 1.0-1.3 密码套件；general-v2023：提供较高的兼容性，安全性中等，支持 TLS 1.2-1.3 密码套件；strict-v2023：提供最高的安全性能，禁用所有含不安全隐患的加密套件，支持 TLS 1.2-1.3 密码套件。 */
  CipherSuite?: string | null;
}

/** IP 网段组 */
declare interface IPGroup {
  /** 组 Id，创建时填 0 即可。 */
  GroupId: number;
  /** 组名称。 */
  Name: string;
  /** IP 组内容，可以填入 IP 及 IP 掩码。 */
  Content: string[];
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
  /** 验证子域名。验证站点时，该值为空。验证子域名是为具体子域名。 */
  Domain?: string | null;
  /** 验证状态，取值有： pending：验证中； finished：验证完成。 */
  Status: string;
  /** 站点归属权校验：Dns校验信息。 */
  Ascription: AscriptionInfo;
  /** 域名当前的 NS 记录。 */
  OriginalNameServers: string[] | null;
  /** 站点归属权校验：文件校验信息。 */
  FileAscription: FileAscriptionInfo;
}

/** 图片优化配置。 */
declare interface ImageOptimize {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
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
  /** Ipv6 访问功能配置，取值有：on：开启Ipv6访问功能；off：关闭Ipv6访问功能。 */
  Switch: string;
}

/** 离线日志详细信息 */
declare interface L4OfflineLog {
  /** 四层代理实例 ID。 */
  ProxyId?: string;
  /** 日志所属区域，取值有：mainland：中国大陆境内;overseas：全球（不含中国大陆）。 */
  Area?: string;
  /** 离线日志数据包名。 */
  LogPacketName?: string;
  /** 离线日志下载地址。 */
  Url?: string;
  /** 日志打包时间，此参数已经废弃。 */
  LogTime?: number;
  /** 日志打包开始时间。 */
  LogStartTime?: string;
  /** 日志打包结束时间。 */
  LogEndTime?: string;
  /** 日志大小，单位为 Byte。 */
  Size?: number;
}

/** 七层离线日志详细信息。 */
declare interface L7OfflineLog {
  /** 离线日志域名。 */
  Domain?: string;
  /** 日志所属区域，取值有：mainland：中国大陆境内; overseas：全球（不含中国大陆）。 */
  Area?: string;
  /** 离线日志数据包名。 */
  LogPacketName?: string;
  /** 离线日志下载地址。 */
  Url?: string;
  /** 日志打包时间，此参数已经废弃。 */
  LogTime?: number;
  /** 日志打包开始时间。 */
  LogStartTime?: string;
  /** 日志打包结束时间。 */
  LogEndTime?: string;
  /** 日志原始大小，单位 Byte。 */
  Size?: number;
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

/** 源站配置。 */
declare interface Origin {
  /** 主源站列表。 */
  Origins?: string[] | null;
  /** 备源站列表。 */
  BackupOrigins?: string[] | null;
  /** 回源协议配置，取值有：http：强制 http 回源；follow：协议跟随回源；https：强制 https 回源。 */
  OriginPullProtocol?: string | null;
  /** 源站为腾讯云 COS 时，是否为私有访问 bucket，取值有：on：私有访问；off：公共访问。 */
  CosPrivateAccess?: string | null;
}

/** 加速域名源站信息。 */
declare interface OriginDetail {
  /** 源站类型，取值有：IP_DOMAIN：IPV4、IPV6或域名类型源站；COS：COS源。ORIGIN_GROUP：源站组类型源站。AWS_S3：AWS S3对象存储源站。 */
  OriginType?: string;
  /** 源站地址，当OriginType参数指定为ORIGIN_GROUP时，该参数填写源站组ID，其他情况下填写源站地址。 */
  Origin?: string;
  /** 备用源站组ID，该参数在OriginType参数指定为ORIGIN_GROUP时生效，为空表示不使用备用源站。 */
  BackupOrigin?: string;
  /** 主源源站组名称，当OriginType参数指定为ORIGIN_GROUP时该参数生效。 */
  OriginGroupName?: string;
  /** 备用源站源站组名称，当OriginType参数指定为ORIGIN_GROUP，且用户指定了被用源站时该参数生效。 */
  BackOriginGroupName?: string;
  /** 指定是否允许访问私有对象存储源站。当源站类型OriginType=COS或AWS_S3时有效 取值有：on：使用私有鉴权；off：不使用私有鉴权。不填写，默认值为off。 */
  PrivateAccess?: string;
  /** 私有鉴权使用参数，当源站类型PrivateAccess=on时有效。 */
  PrivateParameters?: PrivateParameter[] | null;
}

/** 源站组信息 */
declare interface OriginGroup {
  /** 站点ID。 */
  ZoneId?: string;
  /** 站点名称。 */
  ZoneName?: string;
  /** 源站组ID。 */
  OriginGroupId?: string;
  /** 源站类型，取值有：self：自有源站；third_party：第三方源站；cos：腾讯云COS源站。 */
  OriginType?: string;
  /** 源站组名称。 */
  OriginGroupName?: string;
  /** 源站配置类型，当OriginType=self时，取值有：area：按区域配置；weight： 按权重配置。proto： 按HTTP协议配置。当OriginType=third_party/cos时放空。 */
  ConfigurationType?: string;
  /** 源站记录信息。 */
  OriginRecords?: OriginRecord[];
  /** 源站组更新时间。 */
  UpdateTime?: string;
  /** 当OriginType=self时，表示回源Host。 */
  HostHeader?: string | null;
}

/** 加速域名源站信息。 */
declare interface OriginInfo {
  /** 源站类型，取值有：IP_DOMAIN：IPV4、IPV6或域名类型源站；COS：COS源。ORIGIN_GROUP：源站组类型源站。AWS_S3：AWS S3对象存储源站。SPACE：Edgeone源站Space存储，Space存储不允许配置该类型源站。 */
  OriginType: string;
  /** 源站地址，当OriginType参数指定为ORIGIN_GROUP时，该参数填写源站组ID，其他情况下填写源站地址。 */
  Origin: string;
  /** 备用源站组ID，该参数在OriginType参数指定为ORIGIN_GROUP时生效，为空表示不使用备用源站。 */
  BackupOrigin?: string;
  /** 指定是否允许访问私有对象存储源站，当源站类型OriginType=COS或AWS_S3时有效，取值有：on：使用私有鉴权；off：不使用私有鉴权。不填写，默认值为：off。 */
  PrivateAccess?: string;
  /** 私有鉴权使用参数，当源站类型PrivateAccess=on时有效。 */
  PrivateParameters?: PrivateParameter[];
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
  /** 是否开启 POST 请求上传文件限制，平台默认为限制为32MB，取值有：on：开启限制；off：关闭限制。 */
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
  /** 是否开启 Quic 配置，取值有：on：开启；off：关闭。 */
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

/** 速率限制规则 */
declare interface RateLimitConfig {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 速率限制-用户规则列表。如果为null，默认使用历史配置。 */
  RateLimitUserRules?: RateLimitUserRule[];
  /** 速率限制模板功能。如果为null，默认使用历史配置。 */
  RateLimitTemplate?: RateLimitTemplate | null;
  /** 智能客户端过滤。如果为null，默认使用历史配置。 */
  RateLimitIntelligence?: RateLimitIntelligence | null;
  /** 速率限制-托管定制规则。如果为null，默认使用历史配置。 */
  RateLimitCustomizes?: RateLimitUserRule[] | null;
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
  /** 处置动作，取值有： monitor：观察； drop：拦截； alg：JavaScript挑战。 */
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
  /** 规则 Id。仅出参使用。 */
  RuleID?: number | null;
  /** 过滤词，取值有：sip：客户端ip。 */
  FreqFields?: string[] | null;
  /** 更新时间。 */
  UpdateTime?: string | null;
  /** 统计范围，字段为 null 时，代表 source_to_eo。取值有：source_to_eo：（响应）源站到EdgeOne。client_to_eo：（请求）客户端到EdgeOne； */
  FreqScope?: string[] | null;
}

/** 计费资源 */
declare interface Resource {
  /** 资源 ID。 */
  Id?: string;
  /** 付费模式，取值有：0：后付费。 */
  PayMode?: number;
  /** 创建时间。 */
  CreateTime?: string;
  /** 生效时间。 */
  EnableTime?: string;
  /** 失效时间。 */
  ExpireTime?: string;
  /** 套餐状态，取值有：normal：正常；isolated：隔离；destroyed：销毁。 */
  Status?: string;
  /** 询价参数。 */
  Sv?: Sv[];
  /** 是否自动续费，取值有：0：默认状态；1：自动续费；2：不自动续费。 */
  AutoRenewFlag?: number;
  /** 套餐关联资源 ID。 */
  PlanId?: string;
  /** 地域，取值有：mainland：国内；overseas：海外。global：全球。 */
  Area?: string;
  /** 资源类型，取值有：plan：套餐类型；pay-as-you-go：后付费类型。value-added：增值服务类型。 */
  Group?: string | null;
  /** 当前资源绑定的站点数量。 */
  ZoneNumber?: number | null;
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
  /** 慢速攻击配置。如果为null，默认使用历史配置。 */
  SlowPostConfig?: SlowPostConfig | null;
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

/** 慢速攻击配置。 */
declare interface SlowPostConfig {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 首包配置。 */
  FirstPartConfig?: FirstPartConfig | null;
  /** 基础配置。 */
  SlowRateConfig?: SlowRateConfig | null;
  /** 慢速攻击的处置动作，取值有：monitor：观察；drop：拦截。 */
  Action?: string | null;
  /** 本规则的Id。 */
  RuleId?: number | null;
}

/** 慢速攻击的基础配置。 */
declare interface SlowRateConfig {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 统计的间隔，单位是秒，即在首段包传输结束后，将数据传输轴按照本参数切分，每个分片独立计算慢速攻击。 */
  Interval?: number | null;
  /** 统计时应用的速率阈值，单位是bps，即如果本分片中的传输速率没达到本参数的值，则判定为慢速攻击，应用慢速攻击的处置方式。 */
  Threshold?: number | null;
}

/** 智能加速配置 */
declare interface SmartRouting {
  /** 智能加速配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 支持标准debug结构体 */
declare interface StandardDebug {
  /** Debug 功能开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 允许的客户端来源。支持填写 IPV4 以及 IPV6 的 IP/IP 段，不填则表示允许任意客户端 IP。 */
  AllowClientIPList: string[];
  /** Debug 功能到期时间。超出设置的时间，则功能失效。 */
  ExpireTime: string;
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
  /** 询价参数映射的配额，取值有：zone：站点数；custom-rule：自定义规则数；rate-limiting-rule：速率限制规则数；l4-proxy-instance：四层代理实例数。 */
  Pack?: string | null;
  /** 询价参数映射的四层代理实例Id。 */
  InstanceId?: string | null;
  /** 询价参数对应的防护等级。取值有： cm_30G：中国大陆加速区域保底防护30Gbps； cm_60G：中国大陆加速区域保底防护60Gbps； cm_100G：中国大陆加速区域保底防护100Gbps； anycast_300G：全球加速区域（除中国大陆）Anycast联防300Gbps； anycast_unlimited：全球加速区域（除中国大陆）Anycast无上限全力防护； cm_30G_anycast_300G：中国大陆加速区域保底防护30Gbps，全球加速区域（除中国大陆）Anycast联防300Gbps； cm_30G_anycast_unlimited：中国大陆加速区域保底防护30Gbps，全球加速区域（除中国大陆）Anycast无上限全力防护； cm_60G_anycast_300G：中国大陆加速区域保底防护60Gbps，全球加速区域（除中国大陆）Anycast联防300Gbps； cm_60G_anycast_unlimited：中国大陆加速区域保底防护60Gbps，全球加速区域（除中国大陆）Anycast无上限全力防护； cm_100G_anycast_300G：中国大陆加速区域保底防护100Gbps，全球加速区域（除中国大陆）Anycast联防300Gbps； cm_100G_anycast_unlimited：中国大陆加速区域保底防护100Gbps，全球加速区域（除中国大陆）Anycast无上限全力防护。 */
  ProtectionSpecs?: string | null;
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
  /** http2 回源配置开关，取值有：on：开启；off：关闭。 */
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

/** Waf规则 */
declare interface WafRule {
  /** 托管规则开关，取值有： on：开启； off：关闭。 */
  Switch: string;
  /** 黑名单ID列表，将规则ID加入本参数列表中代表该ID关闭，即该规则ID不再生效。 */
  BlockRuleIDs: number[];
  /** 观察模式ID列表，将规则ID加入本参数列表中代表该ID使用观察模式生效，即该规则ID进入观察模式。 */
  ObserveRuleIDs: number[];
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
  /** 站点接入方式，取值有 full：NS 接入； partial：CNAME 接入； noDomainAccess：无域名接入。 */
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
  /** 是否伪站点，取值有： 0：非伪站点； 1：伪站点。 */
  IsFake: number;
  /** 锁定状态，取值有： enable：正常，允许进行修改操作； disable：锁定中，不允许进行修改操作。 */
  LockStatus?: string;
}

/** 站点配置。 */
declare interface ZoneSetting {
  /** 站点名称。 */
  ZoneName?: string;
  /** 站点加速区域信息，取值有： mainland：中国境内加速； overseas：中国境外加速。 */
  Area?: string;
  /** 节点缓存键配置。 */
  CacheKey?: CacheKey | null;
  /** Quic访问配置。 */
  Quic?: Quic | null;
  /** POST请求传输配置。 */
  PostMaxSize?: PostMaxSize | null;
  /** 智能压缩配置。 */
  Compression?: Compression | null;
  /** Http2回源配置。 */
  UpstreamHttp2?: UpstreamHttp2 | null;
  /** 访问协议强制Https跳转配置。 */
  ForceRedirect?: ForceRedirect | null;
  /** 缓存过期时间配置。 */
  CacheConfig?: CacheConfig | null;
  /** 源站配置。 */
  Origin?: Origin | null;
  /** 智能加速配置。 */
  SmartRouting?: SmartRouting | null;
  /** 浏览器缓存配置。 */
  MaxAge?: MaxAge | null;
  /** 离线缓存配置。 */
  OfflineCache?: OfflineCache | null;
  /** WebSocket配置。 */
  WebSocket?: WebSocket | null;
  /** 客户端IP回源请求头配置。 */
  ClientIpHeader?: ClientIpHeader | null;
  /** 缓存预刷新配置。 */
  CachePrefresh?: CachePrefresh | null;
  /** Ipv6访问配置。 */
  Ipv6?: Ipv6 | null;
  /** Https 加速配置。 */
  Https?: Https | null;
  /** 回源时是否携带客户端IP所属地域信息的配置。 */
  ClientIpCountry?: ClientIpCountry | null;
  /** Grpc协议支持配置。 */
  Grpc?: Grpc | null;
  /** 图片优化相关配置。 */
  ImageOptimize?: ImageOptimize | null;
  /** 中国大陆加速优化配置。 */
  AccelerateMainland?: AccelerateMainland | null;
  /** 标准 Debug 配置。 */
  StandardDebug?: StandardDebug | null;
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

declare interface CheckCnameStatusRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 加速域名列表。 */
  RecordNames: string[];
}

declare interface CheckCnameStatusResponse {
  /** 加速域名 CNAME 状态信息列表。 */
  CnameStatus?: CnameStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccelerationDomainRequest {
  /** 加速域名所属站点ID。 */
  ZoneId: string;
  /** 加速域名名称。 */
  DomainName: string;
  /** 源站信息。 */
  OriginInfo: OriginInfo;
}

declare interface CreateAccelerationDomainResponse {
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
  /** 站点 ID。 */
  ZoneId: string;
  /** 当 ProxyType=hostname 时，表示域名或子域名；当 ProxyType=instance 时，表示代理名称。 */
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
  /** Ipv6 访问配置。不填写表示关闭 Ipv6 访问。 */
  Ipv6?: Ipv6;
  /** 规则详细信息。不填写则不创建规则。 */
  ApplicationProxyRules?: ApplicationProxyRule[];
  /** 中国大陆加速优化配置。不填写表示关闭中国大陆加速优化。 */
  AccelerateMainland?: AccelerateMainland;
}

declare interface CreateApplicationProxyResponse {
  /** 新增的四层代理应用ID。 */
  ProxyId?: string;
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
  /** 会话保持的时间，只有当SessionPersist为true时，该值才会生效。 */
  SessionPersistTime?: number;
  /** 源站端口，支持格式：单端口：80；端口段：81-90，81至90端口。 */
  OriginPort?: string;
}

declare interface CreateApplicationProxyRuleResponse {
  /** 规则ID */
  RuleId?: string;
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
  /** 要预热的资源列表，每个元素格式类似如下:http://www.example.com/example.txt。注意：提交任务数受计费套餐配额限制，请查看 [EO计费套餐](https://cloud.tencent.com/document/product/1552/77380)。 */
  Targets?: string[];
  /** 是否对url进行encode，若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。 */
  EncodeUrl?: boolean;
  /** 附带的http头部信息。 */
  Headers?: Header[];
}

declare interface CreatePrefetchTaskResponse {
  /** 任务 ID。 */
  JobId?: string;
  /** 失败的任务列表。 */
  FailedList?: FailReason[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePurgeTaskRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 节点缓存清除类型，取值有：purge_url：URL刷新；purge_prefix：目录刷新；purge_host：Hostname 刷新；purge_all：站点下全部缓存刷新；purge_cache_tag：cache-tag 刷新。缓存清除类型详情请查看[清除缓存](https://cloud.tencent.com/document/product/1552/70759)。 */
  Type: string;
  /** 节点缓存清除方法，仅对目录刷新类型有效，取值有： invalidate：仅刷新目录下产生了更新的资源； delete：无论目录下资源是否更新都刷新节点资源。注意：使用目录刷新时，默认值： invalidate。 */
  Method?: string;
  /** 要清除缓存的资源列表。每个元素格式依据清除缓存类型而定，可参考接口示例。EO 默认针对内容含有非 ASCII 字符集的字符进行转义，编码规则遵循 RFC3986；单次提交的任务数受计费套餐配额限制，请查看 [EO计费套餐](https://cloud.tencent.com/document/product/1552/77380)。 */
  Targets?: string[];
  /** 若有编码转换，仅清除编码转换后匹配的资源。若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。 */
  EncodeUrl?: boolean;
}

declare interface CreatePurgeTaskResponse {
  /** 任务 ID。 */
  JobId?: string;
  /** 失败的任务列表及原因。 */
  FailedList?: FailReason[] | null;
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
  RuleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityIPGroupRequest {
  /** 站点 Id。 */
  ZoneId: string;
  /** IP 组信息。 */
  IPGroup: IPGroup;
}

declare interface CreateSecurityIPGroupResponse {
  /** IP 组 Id。 */
  GroupId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateZoneRequest {
  /** 站点名称。 */
  ZoneName?: string;
  /** 接入方式，取值有： full：NS接入； partial：CNAME接入，请先调用认证站点API（IdentifyZone）进行站点归属权校验，校验通过后继续调用本接口创建站点；noDomainAccess：无域名接入，取此值时仅Tags字段有效。不填写使用默认值full。 */
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
  ZoneId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccelerationDomainsRequest {
  /** 加速域名所属站点ID。 */
  ZoneId: string;
  /** 需要删除的加速域名ID列表。 */
  DomainNames: string[];
  /** 是否强制删除。当域名存在关联资源（如马甲域名、流量调度功能）时，是否强制删除该域名，取值有： true：删除该域名及所有关联资源； false：当该加速域名存在关联资源时，不允许删除。不填写，默认值为：false。 */
  Force?: boolean;
}

declare interface DeleteAccelerationDomainsResponse {
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

declare interface DeleteSecurityIPGroupRequest {
  /** 站点 Id。 */
  ZoneId: string;
  /** IP 组 Id。 */
  GroupId: number;
}

declare interface DeleteSecurityIPGroupResponse {
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

declare interface DescribeAccelerationDomainsRequest {
  /** 加速域名所属站点ID。 */
  ZoneId: string;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：domain-name 按照【加速域名名称】进行过滤。 类型：String 必选：否origin-type 按照【源站类型】进行过滤。 类型：String 必选：否origin 按照【主源站地址】进行过滤。 类型：String 必选：否backup-origin 按照【备用源站地址】进行过滤。 类型：String 必选：否domain-cname 按照【加速CNAME名】进行过滤。 类型：String 必选：否share-cname 按照【共享CNAME名】进行过滤。 类型：String 必选：否 */
  Filters?: AdvancedFilter[];
  /** 列表排序方式，取值有：asc：升序排列；desc：降序排列。默认值为asc。 */
  Direction?: string;
  /** 匹配方式，取值有：all：返回匹配所有查询条件的加速域名；any：返回匹配任意一个查询条件的加速域名。默认值为all。 */
  Match?: string;
  /** 分页查询限制数目，默认值：20，上限：200。 */
  Limit?: number;
  /** 分页查询偏移量，默认为 0。 */
  Offset?: number;
  /** 排序依据，取值有：created_on：加速域名创建时间；domain-name：加速域名名称；默认根据domain-name属性排序。 */
  Order?: string;
}

declare interface DescribeAccelerationDomainsResponse {
  /** 加速域名总数。 */
  TotalCount?: number;
  /** 加速域名列表。 */
  AccelerationDomains?: AccelerationDomain[];
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

declare interface DescribeDDoSAttackEventRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** ddos策略组集合，不填默认选择全部策略。 */
  PolicyIds?: number[];
  /** 站点集合，此参数必填，不填默认查询为空。 */
  ZoneIds?: string[];
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 是否展示详细信息。 */
  ShowDetail?: boolean;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据；不填默认取值为global。 */
  Area?: string;
  /** 排序字段，取值有：MaxBandWidth：带宽峰值；AttackStartTime：攻击开始时间。不填默认值为：AttackStartTime。 */
  OrderBy?: string;
  /** 排序方式，取值有：asc：升序方式；desc：降序方式。不填默认值为：desc。 */
  OrderType?: string;
}

declare interface DescribeDDoSAttackEventResponse {
  /** DDOS攻击事件数据列表。 */
  Data?: DDoSAttackEvent[] | null;
  /** 查询结果的总条数。 */
  TotalCount?: number;
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
  Filters?: Filter[];
  /** 分页查询偏移量，默认为0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
}

declare interface DescribeOriginProtectionResponse {
  /** 源站防护信息。 */
  OriginProtectionInfo?: OriginProtectionInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOverviewL7DataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询的指标，取值有：l7Flow_outFlux: Edegone响应流量；l7Flow_inFlux: Edgeone请求流量；l7Flow_outBandwidth: Edegone响应带宽；l7Flow_inBandwidth: Edegone请求带宽；l7Flow_hit_outFlux: 缓存命中流量；l7Flow_request: 访问请求数；l7Flow_flux: 访问请求上行+下行流量；l7Flow_bandwidth：访问请求上行+下行带宽。 */
  MetricNames: string[];
  /** 站点集合。若不填写，默认选择全部站点，且最多只能查询近30天的数据；若填写，则可查询站点绑定套餐支持的数据分析最大查询范围。 */
  ZoneIds?: string[];
  /** 查询的域名集合，不填默认查询所有子域名。 */
  Domains?: string[];
  /** 查询的协议类型，取值有：http: http协议；https: https协议；http2: http2协议；all: 所有协议。不填默认为all，此参数暂未生效。 */
  Protocol?: string;
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。 */
  Interval?: string;
  /** 过滤条件，详细的过滤条件Key值如下：socket 按照【HTTP协议类型】进行过滤。 对应的Value可选项如下： HTTP：HTTP 协议； HTTPS：HTTPS协议； QUIC：QUIC协议。tagKey 按照【标签Key】进行过滤。tagValue 按照【标签Value】进行过滤。 */
  Filters?: QueryCondition[];
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeOverviewL7DataResponse {
  /** 查询结果的总条数。 */
  TotalCount?: number;
  /** 七层监控类时序流量数据列表。 */
  Data?: TimingDataRecord[] | null;
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
  /** 指标列表，取值有:l7Flow_outFlux: Edgeone响应流量；l7Flow_inFlux: Edgeone请求流量；l7Flow_outBandwidth: Edgeone响应带宽；l7Flow_inBandwidth：Edgeone请求带宽；l7Flow_request: 访问请求数；l7Flow_flux: 访问请求上行+下行流量；l7Flow_bandwidth：访问请求上行+下行带宽。 */
  MetricNames: string[];
  /** 站点集合。若不填写，默认选择全部站点，且最多只能查询近30天的数据；若填写，则可查询站点绑定套餐支持的数据分析最大查询范围。 */
  ZoneIds?: string[];
  /** 查询时间粒度，取值有：min: 1分钟；5min: 5分钟；hour: 1小时；day: 1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。 */
  Interval?: string;
  /** 过滤条件，详细的过滤条件Key值如下：country 按照【国家/地区】进行过滤，国家/地区遵循ISO 3166规范。province 按照【省份】进行过滤，此参数只支持服务区域为中国大陆。isp 按照【运营商】进行过滤，此参数只支持服务区域为中国大陆。 对应的Value可选项如下： 2：中国电信； 26：中国联通； 1046：中国移动； 3947：中国铁通； 38：教育网； 43：长城宽带； 0：其他运营商。domain 按照【子域名】进行过滤，子域名形如： test.example.com。url 按照【URL Path】进行过滤，URL Path形如：/content或/content/test.jpg。 若只填写url参数，则最多可查询近30天的数据； 若同时填写url+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。referer 按照【Referer头信息】进行过滤, Referer形如：example.com。 若只填写referer参数，则最多可查询近30天的数据； 若同时填写referer+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。resourceType 按照【资源类型】进行过滤，资源类型一般是文件后缀，形如: .jpg, .css。 若只填写resourceType参数，则最多可查询近30天的数据； 若同时填写resourceType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。protocol 按照【HTTP协议版本】进行过滤。 对应的Value可选项如下： HTTP/1.0：HTTP 1.0； HTTP/1.1：HTTP 1.1； HTTP/2.0：HTTP 2.0； HTTP/3.0：HTTP 3.0； WebSocket：WebSocket。socket 按照【HTTP协议类型】进行过滤。 对应的Value可选项如下： HTTP：HTTP 协议； HTTPS：HTTPS协议； QUIC：QUIC协议。statusCode 按照【状态码】进行过滤。 若只填写statusCode参数，则最多可查询近30天的数据； 若同时填写statusCode+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应的Value可选项如下： 1XX：1xx类型的状态码； 100：100状态码； 101：101状态码； 102：102状态码； 2XX：2xx类型的状态码； 200：200状态码； 201：201状态码； 202：202状态码； 203：203状态码； 204：204状态码； 205：205状态码； 206：206状态码； 207：207状态码； 3XX：3xx类型的状态码； 300：300状态码； 301：301状态码； 302：302状态码； 303：303状态码； 304：304状态码； 305：305状态码； 307：307状态码； 4XX：4xx类型的状态码； 400：400状态码； 401：401状态码； 402：402状态码； 403：403状态码； 404：404状态码； 405：405状态码； 406：406状态码； 407：407状态码； 408：408状态码； 409：409状态码； 410：410状态码； 411：411状态码； 412：412状态码； 412：413状态码； 414：414状态码； 415：415状态码； 416：416状态码； 417：417状态码； 422：422状态码； 423：423状态码； 424：424状态码； 426：426状态码； 451：451状态码； 5XX：5xx类型的状态码； 500：500状态码； 501：501状态码； 502：502状态码； 503：503状态码； 504：504状态码； 505：505状态码； 506：506状态码； 507：507状态码； 510：510状态码； 514：514状态码； 544：544状态码。browserType 按照【浏览器类型】进行过滤。 若只填写browserType参数，则最多可查询近30天的数据； 若同时填写browserType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： Firefox：Firefox浏览器； Chrome：Chrome浏览器； Safari：Safari浏览器； Other：其他浏览器类型； Empty：浏览器类型为空； Bot：搜索引擎爬虫； MicrosoftEdge：MicrosoftEdge浏览器； IE：IE浏览器； Opera：Opera浏览器； QQBrowser：QQ浏览器； LBBrowser：LB浏览器； MaxthonBrowser：Maxthon浏览器； SouGouBrowser：搜狗浏览器； BIDUBrowser：百度浏览器； TaoBrowser：淘浏览器； UBrowser：UC浏览器。deviceType 按照【设备类型】进行过滤。 若只填写deviceType参数，则最多可查询近30天的数据； 若同时填写deviceType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： TV：TV设备； Tablet：Tablet设备； Mobile：Mobile设备； Desktop：Desktop设备； Other：其他设备类型； Empty：设备类型为空。operatingSystemType 按照【操作系统类型】进行过滤。 若只填写operatingSystemType参数，则最多可查询近30天的数据； 若同时填写operatingSystemType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： Linux：Linux操作系统； MacOS：MacOs操作系统； Android：Android操作系统； IOS：IOS操作系统； Windows：Windows操作系统； NetBSD：NetBSD； ChromiumOS：ChromiumOS； Bot：搜索引擎爬虫； Other：其他类型的操作系统； Empty：操作系统为空。tlsVersion 按照【TLS版本】进行过滤。 若只填写tlsVersion参数，则最多可查询近30天的数据； 若同时填写tlsVersion+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： TLS1.0：TLS 1.0； TLS1.1：TLS 1.1； TLS1.2：TLS 1.2； TLS1.3：TLS 1.3。ipVersion 按照【IP版本】进行过滤。 对应Value的可选项如下： 4：Ipv4； 6：Ipv6。tagKey 按照【标签Key】进行过滤。tagValue 按照【标签Value】进行过滤。 */
  Filters?: QueryCondition[];
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeTimingL7AnalysisDataResponse {
  /** 查询结果的总条数。 */
  TotalCount?: number;
  /** 时序流量数据列表。 */
  Data?: TimingDataRecord[] | null;
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
  /** 查询的指标，取值有： l7Flow_outFlux_country：按国家/地区维度统计流量指标； l7Flow_outFlux_statusCode：按状态码维度统计流量指标； l7Flow_outFlux_domain：按域名维度统计流量指标； l7Flow_outFlux_url：按URL维度统计流量指标; l7Flow_outFlux_resourceType：按资源类型维度统计流量指标； l7Flow_outFlux_sip：按客户端的源IP维度统计流量指标； l7Flow_outFlux_referers：按refer信息维度统计流量指标； l7Flow_outFlux_ua_device：按设备类型维度统计流量指标; l7Flow_outFlux_ua_browser：按浏览器类型维度统计流量指标； l7Flow_outFlux_us_os：按操作系统类型维度统计流量指标； l7Flow_request_country：按国家/地区维度统计请求数指标； l7Flow_request_statusCode：按状态码维度统计请求数指标； l7Flow_request_domain：按域名维度统计请求数指标； l7Flow_request_url：按URL维度统计请求数指标; l7Flow_request_resourceType：按资源类型维度统计请求数指标； l7Flow_request_sip：按客户端的源IP维度统计请求数指标； l7Flow_request_referer：按refer信息维度统计请求数指标； l7Flow_request_ua_device：按设备类型维度统计请求数指标; l7Flow_request_ua_browser：按浏览器类型维度统计请求数指标； l7Flow_request_us_os：按操作系统类型维度统计请求数指标。 */
  MetricName: string;
  /** 站点集合，此参数必填，不填默认查询为空。 */
  ZoneIds?: string[];
  /** 查询前多少个数据，最大值为1000，不填默认默认为: 10， 表示查询前top10的数据。 */
  Limit?: number;
  /** 过滤条件，详细的过滤条件Key值如下：country 按照【国家/地区】进行过滤，国家/地区遵循ISO 3166规范。province 按照【省份】进行过滤，此参数只支持服务区域为中国大陆。isp 按照【运营商】进行过滤，此参数只支持服务区域为中国大陆。 对应的Value可选项如下： 2：中国电信； 26：中国联通； 1046：中国移动； 3947：中国铁通； 38：教育网； 43：长城宽带； 0：其他运营商。domain 按照【子域名】进行过滤，子域名形如： test.example.com。url 按照【URL Path】进行过滤，URL Path形如：/content或/content/test.jpg。 若只填写url参数，则最多可查询近30天的数据； 若同时填写url+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。referer 按照【Referer头信息】进行过滤, Referer形如：example.com。 若只填写referer参数，则最多可查询近30天的数据； 若同时填写referer+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。resourceType 按照【资源类型】进行过滤，资源类型一般是文件后缀，形如: .jpg, .css。 若只填写resourceType参数，则最多可查询近30天的数据； 若同时填写resourceType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。protocol 按照【HTTP协议版本】进行过滤。 对应的Value可选项如下： HTTP/1.0：HTTP 1.0； HTTP/1.1：HTTP 1.1； HTTP/2.0：HTTP 2.0； HTTP/3.0：HTTP 3.0； WebSocket：WebSocket。socket 按照【HTTP协议类型】进行过滤。 对应的Value可选项如下： HTTP：HTTP 协议； HTTPS：HTTPS协议； QUIC：QUIC协议。statusCode 按照【状态码】进行过滤。 若只填写statusCode参数，则最多可查询近30天的数据； 若同时填写statusCode+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应的Value可选项如下： 1XX：1xx类型的状态码； 100：100状态码； 101：101状态码； 102：102状态码； 2XX：2xx类型的状态码； 200：200状态码； 201：201状态码； 202：202状态码； 203：203状态码； 204：204状态码； 205：205状态码； 206：206状态码； 207：207状态码； 3XX：3xx类型的状态码； 300：300状态码； 301：301状态码； 302：302状态码； 303：303状态码； 304：304状态码； 305：305状态码； 307：307状态码； 4XX：4xx类型的状态码； 400：400状态码； 401：401状态码； 402：402状态码； 403：403状态码； 404：404状态码； 405：405状态码； 406：406状态码； 407：407状态码； 408：408状态码； 409：409状态码； 410：410状态码； 411：411状态码； 412：412状态码； 412：413状态码； 414：414状态码； 415：415状态码； 416：416状态码； 417：417状态码； 422：422状态码； 423：423状态码； 424：424状态码； 426：426状态码； 451：451状态码； 5XX：5xx类型的状态码； 500：500状态码； 501：501状态码； 502：502状态码； 503：503状态码； 504：504状态码； 505：505状态码； 506：506状态码； 507：507状态码； 510：510状态码； 514：514状态码； 544：544状态码。browserType 按照【浏览器类型】进行过滤。 若只填写browserType参数，则最多可查询近30天的数据； 若同时填写browserType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： Firefox：Firefox浏览器； Chrome：Chrome浏览器； Safari：Safari浏览器； Other：其他浏览器类型； Empty：浏览器类型为空； Bot：搜索引擎爬虫； MicrosoftEdge：MicrosoftEdge浏览器； IE：IE浏览器； Opera：Opera浏览器； QQBrowser：QQ浏览器； LBBrowser：LB浏览器； MaxthonBrowser：Maxthon浏览器； SouGouBrowser：搜狗浏览器； BIDUBrowser：百度浏览器； TaoBrowser：淘浏览器； UBrowser：UC浏览器。deviceType 按照【设备类型】进行过滤。 若只填写deviceType参数，则最多可查询近30天的数据； 若同时填写deviceType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： TV：TV设备； Tablet：Tablet设备； Mobile：Mobile设备； Desktop：Desktop设备； Other：其他设备类型； Empty：设备类型为空。operatingSystemType 按照【操作系统类型】进行过滤。 若只填写operatingSystemType参数，则最多可查询近30天的数据； 若同时填写operatingSystemType+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： Linux：Linux操作系统； MacOS：MacOs操作系统； Android：Android操作系统； IOS：IOS操作系统； Windows：Windows操作系统； NetBSD：NetBSD； ChromiumOS：ChromiumOS； Bot：搜索引擎爬虫； Other：其他类型的操作系统； Empty：操作系统为空。tlsVersion 按照【TLS版本】进行过滤。 若只填写tlsVersion参数，则最多可查询近30天的数据； 若同时填写tlsVersion+Zonelds参数，则支持的查询数据范围为套餐支持的数据分析最大查询范围与30天两者中的较小值。 对应Value的可选项如下： TLS1.0：TLS 1.0； TLS1.1：TLS 1.1； TLS1.2：TLS 1.2； TLS1.3：TLS 1.3。ipVersion 按照【IP版本】进行过滤。 对应Value的可选项如下： 4：Ipv4； 6：Ipv6。tagKey 按照【标签Key】进行过滤。tagValue 按照【标签Value】进行过滤。 */
  Filters?: QueryCondition[];
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：一小时范围内以min粒度查询，两天范围内以5min粒度查询，七天范围内以hour粒度查询，超过七天以day粒度查询。 */
  Interval?: string;
  /** 数据归属地区，取值有：overseas：全球（除中国大陆地区）数据；mainland：中国大陆地区数据；global：全球数据。不填默认取值为global。 */
  Area?: string;
}

declare interface DescribeTopL7AnalysisDataResponse {
  /** 查询结果的总条数。 */
  TotalCount?: number;
  /** 七层流量前topN数据列表。 */
  Data?: TopDataRecord[] | null;
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
  /** 查询前多少个数据，最大值为1000，不填默认默认为10， 表示查询前top 10的数据。 */
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
  /** 站点集合，此参数必填，不填默认查询为空。 */
  ZoneIds?: string[];
  /** 四层实例 ID 集合。 */
  ProxyIds?: string[];
  /** 分页查询的限制数目，默认值为 20，最大查询条目为 1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为 0。 */
  Offset?: number;
}

declare interface DownloadL4LogsResponse {
  /** 查询结果的总条数。 */
  TotalCount?: number;
  /** 四层离线日志数据列表。 */
  Data?: L4OfflineLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadL7LogsRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 站点集合，此参数必填，不填默认查询为空。 */
  ZoneIds?: string[];
  /** 子域名集合，不填默认选择全部子域名。 */
  Domains?: string[];
  /** 分页查询的限制数目，默认值为 20，最大查询条目为 1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为 0。 */
  Offset?: number;
}

declare interface DownloadL7LogsResponse {
  /** 查询结果的总条数。 */
  TotalCount?: number;
  /** 七层离线日志数据列表。 */
  Data?: L7OfflineLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IdentifyZoneRequest {
  /** 站点名称。 */
  ZoneName: string;
  /** 站点下的子域名。如果验证站点下的子域名，则传该值，否则为空。 */
  Domain?: string;
}

declare interface IdentifyZoneResponse {
  /** 站点归属校验：Dns校验信息。 */
  Ascription?: AscriptionInfo;
  /** 站点归属权校验：文件校验信息。 */
  FileAscription?: FileAscriptionInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccelerationDomainRequest {
  /** 加速域名所属站点ID。 */
  ZoneId: string;
  /** 加速域名名称。 */
  DomainName: string;
  /** 源站信息。 */
  OriginInfo: OriginInfo;
}

declare interface ModifyAccelerationDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccelerationDomainStatusesRequest {
  /** 加速域名所属站点ID。 */
  ZoneId: string;
  /** 要执行状态变更的加速域名列表。 */
  DomainNames: string[];
  /** 加速域名状态，取值有：online：启用；offline：停用。 */
  Status: string;
  /** 是否强制停用。当域名存在关联资源（如马甲域名、流量调度功能）时，是否强制停用该域名，取值有： true：停用该域名及所有关联资源； false：当该加速域名存在关联资源时，不允许停用。不填写，默认值为：false。 */
  Force?: boolean;
}

declare interface ModifyAccelerationDomainStatusesResponse {
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
  /** 站点 ID。 */
  ZoneId: string;
  /** 代理 ID。 */
  ProxyId: string;
  /** 当 ProxyType=hostname 时，表示域名或子域名；当 ProxyType=instance 时，表示代理名称。 */
  ProxyName: string;
  /** 会话保持时间，取值范围：30-3600，单位：秒。不填写保持原有配置。 */
  SessionPersistTime?: number;
  /** 四层代理模式，取值有：hostname：表示子域名模式；instance：表示实例模式。不填写保持原有配置。 */
  ProxyType?: string;
  /** Ipv6 访问配置，不填写保持原有配置。 */
  Ipv6?: Ipv6;
  /** 中国大陆加速优化配置。 不填写表示保持原有配置。 */
  AccelerateMainland?: AccelerateMainland;
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
  /** 会话保持的时间，只有当SessionPersist为true时，该值才会生效。 */
  SessionPersistTime?: number;
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

declare interface ModifyHostsCertificateRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 本次变更的域名列表。 */
  Hosts: string[];
  /** 证书信息, 只需要传入 CertId 即可, 如果为空, 则使用默认证书。 */
  ServerCertInfo?: ServerCertInfo[];
  /** 托管类型，取值有：apply：托管EO；none：不托管EO；不填，默认取值为none。 */
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
  RuleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityIPGroupRequest {
  /** 站点 Id。 */
  ZoneId: string;
  /** IP 组配置。 */
  IPGroup: IPGroup;
  /** 操作类型，取值有： append: 向 IPGroup 中追加 Content 参数中内容； remove: 从 IPGroup 中删除 Content 参数中内容； update: 全量替换 IPGroup 内容，并可修改 IPGroup 名称。 */
  Mode: string;
}

declare interface ModifySecurityIPGroupResponse {
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

declare interface ModifyZoneRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 站点接入方式，取值有： full：NS 接入； partial：CNAME 接入，如果站点当前是无域名接入，仅支持切换到CNAME接入。不填写保持原有配置。 */
  Type?: string;
  /** 自定义站点信息，以替代系统默认分配的名称服务器。不填写保持原有配置。当站点是无域名接入方式时不允许传此参数。 */
  VanityNameServers?: VanityNameServers;
  /** 站点别名。数字、英文、-和_组合，限制20个字符。 */
  AliasZoneName?: string;
  /** 站点接入地域，取值有： global：全球； mainland：中国大陆； overseas：境外区域。当站点是无域名接入方式时，不允许传此参数。 */
  Area?: string;
  /** 站点名称。仅当站点由无域名接入方式切换到CNAME接入方式的场景下有效。 */
  ZoneName?: string;
}

declare interface ModifyZoneResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyZoneSettingRequest {
  /** 待变更的站点 ID。 */
  ZoneId: string;
  /** 缓存过期时间配置。不填写表示保持原有配置。 */
  CacheConfig?: CacheConfig;
  /** 节点缓存键配置。不填写表示保持原有配置。 */
  CacheKey?: CacheKey;
  /** 浏览器缓存配置。不填写表示保持原有配置。 */
  MaxAge?: MaxAge;
  /** 离线缓存配置。不填写表示保持原有配置。 */
  OfflineCache?: OfflineCache;
  /** Quic 访问配置。不填写表示保持原有配置。 */
  Quic?: Quic;
  /** Post 请求传输配置。不填写表示保持原有配置。 */
  PostMaxSize?: PostMaxSize;
  /** 智能压缩配置。不填写表示保持原有配置。 */
  Compression?: Compression;
  /** Http2 回源配置。不填写表示保持原有配置。 */
  UpstreamHttp2?: UpstreamHttp2;
  /** 访问协议强制 Https 跳转配置。不填写表示保持原有配置。 */
  ForceRedirect?: ForceRedirect;
  /** Https 加速配置。不填写表示保持原有配置。 */
  Https?: Https;
  /** 源站配置。不填写表示保持原有配置。 */
  Origin?: Origin;
  /** 智能加速配置。不填写表示保持原有配置。 */
  SmartRouting?: SmartRouting;
  /** WebSocket 配置。不填写表示保持原有配置。 */
  WebSocket?: WebSocket;
  /** 客户端 IP 回源请求头配置。不填写表示保持原有配置。 */
  ClientIpHeader?: ClientIpHeader;
  /** 缓存预刷新配置。不填写表示保持原有配置。 */
  CachePrefresh?: CachePrefresh;
  /** Ipv6 访问配置。不填写表示保持原有配置。 */
  Ipv6?: Ipv6;
  /** 回源时是否携带客户端 IP 所属地域信息的配置。不填写表示保持原有配置。 */
  ClientIpCountry?: ClientIpCountry;
  /** Grpc 协议支持配置。不填写表示保持原有配置。 */
  Grpc?: Grpc;
  /** 图片优化配置。不填写表示关闭。 */
  ImageOptimize?: ImageOptimize;
  /** 标准 Debug 配置。 */
  StandardDebug?: StandardDebug;
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

declare namespace V20220106 {
  type VersionHeader = { headers: { 'X-TC-Version': '2022-01-06' } }

  /** 失败原因 */
  interface FailReason {
    /** 失败原因 */
    Reason: string;
    /** 处理失败的资源列表。该列表元素来源于输入参数中的Targets，因此格式和入参中的Targets保持一致 */
    Targets: string[];
  }

  /** 刷新预热附带的头部信息 */
  interface Header {
    /** HTTP头部 */
    Name: string;
    /** HTTP头部值 */
    Value: string;
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

  /** 询价参数 */
  interface Sv {
    /** 询价参数键。 */
    Key: string;
    /** 询价参数值。 */
    Value: string;
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
}

/** {@link Teo 边缘安全加速平台} */
declare interface Teo {
  (): Versions;
  /** 为站点绑定套餐 {@link BindZoneToPlanRequest} {@link BindZoneToPlanResponse} */
  BindZoneToPlan(data: BindZoneToPlanRequest, config?: AxiosRequestConfig): AxiosPromise<BindZoneToPlanResponse>;
  /** 校验域名 CNAME 状态 {@link CheckCnameStatusRequest} {@link CheckCnameStatusResponse} */
  CheckCnameStatus(data: CheckCnameStatusRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCnameStatusResponse>;
  /** 创建加速域名 {@link CreateAccelerationDomainRequest} {@link CreateAccelerationDomainResponse} */
  CreateAccelerationDomain(data: CreateAccelerationDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccelerationDomainResponse>;
  /** 创建别称域名 {@link CreateAliasDomainRequest} {@link CreateAliasDomainResponse} */
  CreateAliasDomain(data: CreateAliasDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAliasDomainResponse>;
  /** 创建应用代理 {@link CreateApplicationProxyRequest} {@link CreateApplicationProxyResponse} */
  CreateApplicationProxy(data: CreateApplicationProxyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationProxyResponse>;
  /** 创建应用代理规则 {@link CreateApplicationProxyRuleRequest} {@link CreateApplicationProxyRuleResponse} */
  CreateApplicationProxyRule(data: CreateApplicationProxyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationProxyRuleResponse>;
  /** 创建源站组 {@link CreateOriginGroupRequest} {@link CreateOriginGroupResponse} */
  CreateOriginGroup(data: CreateOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOriginGroupResponse>;
  /** 为未购买套餐的站点购买套餐 {@link CreatePlanForZoneRequest} {@link CreatePlanForZoneResponse} */
  CreatePlanForZone(data: CreatePlanForZoneRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePlanForZoneResponse>;
  /** 创建预热任务 {@link CreatePrefetchTaskRequest} {@link CreatePrefetchTaskResponse} */
  CreatePrefetchTask(data: CreatePrefetchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrefetchTaskResponse>;
  /** 创建清除缓存任务 {@link CreatePurgeTaskRequest} {@link CreatePurgeTaskResponse} */
  CreatePurgeTask(data: CreatePurgeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePurgeTaskResponse>;
  /** 创建规则引擎规则 {@link CreateRuleRequest} {@link CreateRuleResponse} */
  CreateRule(data: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 创建安全 IP 组 {@link CreateSecurityIPGroupRequest} {@link CreateSecurityIPGroupResponse} */
  CreateSecurityIPGroup(data: CreateSecurityIPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityIPGroupResponse>;
  /** 创建站点 {@link CreateZoneRequest} {@link CreateZoneResponse} */
  CreateZone(data?: CreateZoneRequest, config?: AxiosRequestConfig): AxiosPromise<CreateZoneResponse>;
  /** 批量删除加速域名 {@link DeleteAccelerationDomainsRequest} {@link DeleteAccelerationDomainsResponse} */
  DeleteAccelerationDomains(data: DeleteAccelerationDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccelerationDomainsResponse>;
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
  /** 删除安全 IP 组 {@link DeleteSecurityIPGroupRequest} {@link DeleteSecurityIPGroupResponse} */
  DeleteSecurityIPGroup(data: DeleteSecurityIPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityIPGroupResponse>;
  /** 删除站点 {@link DeleteZoneRequest} {@link DeleteZoneResponse} */
  DeleteZone(data: DeleteZoneRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteZoneResponse>;
  /** 查询加速域名列表 {@link DescribeAccelerationDomainsRequest} {@link DescribeAccelerationDomainsResponse} */
  DescribeAccelerationDomains(data: DescribeAccelerationDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccelerationDomainsResponse>;
  /** 查询别称域名信息列表 {@link DescribeAliasDomainsRequest} {@link DescribeAliasDomainsResponse} */
  DescribeAliasDomains(data: DescribeAliasDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAliasDomainsResponse>;
  /** 查询应用代理列表 {@link DescribeApplicationProxiesRequest} {@link DescribeApplicationProxiesResponse} */
  DescribeApplicationProxies(data?: DescribeApplicationProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationProxiesResponse>;
  /** 查询当前账户可购买套餐信息列表 {@link DescribeAvailablePlansRequest} {@link DescribeAvailablePlansResponse} */
  DescribeAvailablePlans(data?: DescribeAvailablePlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailablePlansResponse>;
  /** 查询内容管理接口配额 {@link DescribeContentQuotaRequest} {@link DescribeContentQuotaResponse} */
  DescribeContentQuota(data: DescribeContentQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContentQuotaResponse>;
  /** 查询DDoS攻击时序数据 {@link DescribeDDoSAttackDataRequest} {@link DescribeDDoSAttackDataResponse} */
  DescribeDDoSAttackData(data: DescribeDDoSAttackDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackDataResponse>;
  /** 查询DDoS攻击事件列表 {@link DescribeDDoSAttackEventRequest} {@link DescribeDDoSAttackEventResponse} */
  DescribeDDoSAttackEvent(data: DescribeDDoSAttackEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackEventResponse>;
  /** 查询DDoS攻击Top数据 {@link DescribeDDoSAttackTopDataRequest} {@link DescribeDDoSAttackTopDataResponse} */
  DescribeDDoSAttackTopData(data: DescribeDDoSAttackTopDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackTopDataResponse>;
  /** 查询默认证书列表 {@link DescribeDefaultCertificatesRequest} {@link DescribeDefaultCertificatesResponse} */
  DescribeDefaultCertificates(data: DescribeDefaultCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefaultCertificatesResponse>;
  /** 查询域名详细配置 {@link DescribeHostsSettingRequest} {@link DescribeHostsSettingResponse} */
  DescribeHostsSetting(data: DescribeHostsSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostsSettingResponse>;
  /** 查询站点的验证信息 {@link DescribeIdentificationsRequest} {@link DescribeIdentificationsResponse} */
  DescribeIdentifications(data: DescribeIdentificationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIdentificationsResponse>;
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
  /** 修改加速域名信息 {@link ModifyAccelerationDomainRequest} {@link ModifyAccelerationDomainResponse} */
  ModifyAccelerationDomain(data: ModifyAccelerationDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccelerationDomainResponse>;
  /** 批量修改加速域名状态 {@link ModifyAccelerationDomainStatusesRequest} {@link ModifyAccelerationDomainStatusesResponse} */
  ModifyAccelerationDomainStatuses(data: ModifyAccelerationDomainStatusesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccelerationDomainStatusesResponse>;
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
  /** 修改域名证书 {@link ModifyHostsCertificateRequest} {@link ModifyHostsCertificateResponse} */
  ModifyHostsCertificate(data: ModifyHostsCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHostsCertificateResponse>;
  /** 修改源站组 {@link ModifyOriginGroupRequest} {@link ModifyOriginGroupResponse} */
  ModifyOriginGroup(data: ModifyOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOriginGroupResponse>;
  /** 修改规则引擎规则 {@link ModifyRuleRequest} {@link ModifyRuleResponse} */
  ModifyRule(data: ModifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleResponse>;
  /** 修改安全 IP 组 {@link ModifySecurityIPGroupRequest} {@link ModifySecurityIPGroupResponse} */
  ModifySecurityIPGroup(data: ModifySecurityIPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityIPGroupResponse>;
  /** 修改Web&Bot安全配置 {@link ModifySecurityPolicyRequest} {@link ModifySecurityPolicyResponse} */
  ModifySecurityPolicy(data: ModifySecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityPolicyResponse>;
  /** 修改站点 {@link ModifyZoneRequest} {@link ModifyZoneResponse} */
  ModifyZone(data: ModifyZoneRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneResponse>;
  /** 修改站点配置 {@link ModifyZoneSettingRequest} {@link ModifyZoneSettingResponse} */
  ModifyZoneSetting(data: ModifyZoneSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneSettingResponse>;
  /** 切换站点状态 {@link ModifyZoneStatusRequest} {@link ModifyZoneStatusResponse} */
  ModifyZoneStatus(data: ModifyZoneStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneStatusResponse>;
  /** 创建预热任务 {@link V20220106.CreatePrefetchTaskRequest} {@link V20220106.CreatePrefetchTaskResponse} */
  CreatePrefetchTask(data: V20220106.CreatePrefetchTaskRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreatePrefetchTaskResponse>;
  /** 创建清除缓存任务 {@link V20220106.CreatePurgeTaskRequest} {@link V20220106.CreatePurgeTaskResponse} */
  CreatePurgeTask(data: V20220106.CreatePurgeTaskRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreatePurgeTaskResponse>;
  /** 查询预热任务状态 {@link V20220106.DescribePrefetchTasksRequest} {@link V20220106.DescribePrefetchTasksResponse} */
  DescribePrefetchTasks(data: V20220106.DescribePrefetchTasksRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribePrefetchTasksResponse>;
  /** 查询清除缓存历史记录 {@link V20220106.DescribePurgeTasksRequest} {@link V20220106.DescribePurgeTasksResponse} */
  DescribePurgeTasks(data: V20220106.DescribePurgeTasksRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribePurgeTasksResponse>;
  /** 查询用户站点信息列表 {@link V20220106.DescribeZonesRequest} {@link V20220106.DescribeZonesResponse} */
  DescribeZones(data: V20220106.DescribeZonesRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.DescribeZonesResponse>;
}

export declare type Versions = ["2022-09-01", "2022-01-06"];

export default Teo;
