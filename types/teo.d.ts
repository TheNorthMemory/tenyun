/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 中国大陆加速优化配置。 */
declare interface AccelerateMainland {
  /** 是否开启中国大陆加速优化配置，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 中国大陆加速优化配置。 */
declare interface AccelerateMainlandParameters {
  /** 中国大陆加速优化配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
}

/** 加速类型 */
declare interface AccelerateType {
  /** 加速开关。取值范围： on：打开;off：关闭。 */
  Switch: string;
}

/** 加速域名 */
declare interface AccelerationDomain {
  /** 站点 ID。 */
  ZoneId?: string;
  /** 加速域名名称。 */
  DomainName?: string;
  /** 加速域名状态，取值有：online：已生效；process：部署中；offline：已停用；forbidden：已封禁；init：未生效，待激活站点； */
  DomainStatus?: string;
  /** 源站信息。 */
  OriginDetail?: OriginDetail | null;
  /** 回源协议，取值有：FOLLOW: 协议跟随；HTTP: HTTP协议回源；HTTPS: HTTPS协议回源。 */
  OriginProtocol?: string | null;
  /** 域名证书信息 */
  Certificate?: AccelerationDomainCertificate | null;
  /** HTTP回源端口。 */
  HttpOriginPort?: number | null;
  /** HTTPS回源端口。 */
  HttpsOriginPort?: number | null;
  /** IPv6状态，取值有：follow：遵循站点IPv6配置；on：开启状态；off：关闭状态。 */
  IPv6Status?: string | null;
  /** CNAME 地址。 */
  Cname?: string;
  /** 加速域名归属权验证状态，取值有： pending：待验证； finished：已完成验证。 */
  IdentificationStatus?: string | null;
  /** 创建时间。 */
  CreatedOn?: string;
  /** 修改时间。 */
  ModifiedOn?: string;
  /** 当域名需要进行归属权验证才能继续提供服务时，该对象会携带对应验证方式所需要的信息。 */
  OwnershipVerification?: OwnershipVerification | null;
}

/** 加速域名所对应的证书信息。 */
declare interface AccelerationDomainCertificate {
  /** 配置证书的模式，取值有： disable：不配置证书； eofreecert：配置 EdgeOne 免费证书； sslcert：配置 SSL 证书。 */
  Mode?: string;
  /** 服务端证书列表，相关证书部署在 EO 的入口侧。 */
  List?: CertificateInfo[] | null;
  /** 在边缘双向认证场景下，该字段为客户端的 CA 证书，部署在 EO 节点内，用于 EO 节点认证客户端证书。 */
  ClientCertInfo?: MutualTLS;
  /** 用于 EO 节点回源时携带的证书，源站启用双向认证握手时使用，用于源站认证客户端证书是否有效，确保请求来源于受信任的 EO 节点。 */
  UpstreamCertInfo?: UpstreamCertInfo;
}

/** 访问 URL 重定向 配置参数。 */
declare interface AccessURLRedirectParameters {
  /** 状态码，取值为 301、302、303、307、308 之一。 */
  StatusCode?: number;
  /** 目标请求协议，取值有：http：目标请求协议 HTTP；https：目标请求协议 HTTPS；follow：跟随请求。 */
  Protocol?: string;
  /** 目标 HostName 。 */
  HostName?: HostName | null;
  /** 目标路径。 */
  URLPath?: URLPath | null;
  /** 携带查询参数。 */
  QueryString?: AccessURLRedirectQueryString | null;
}

/** 访问 URL 重定向 配置参数。 */
declare interface AccessURLRedirectQueryString {
  /** 执行动作，取值有：full：全部保留；ignore：全部忽略。 */
  Action?: string;
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
  Customizes?: AclUserRule[];
}

/** 用户自定义规则 */
declare interface AclUserRule {
  /** 规则名。 */
  RuleName: string;
  /** 处罚动作，取值有：trans：放行；drop：拦截；monitor：观察；ban：IP 封禁；redirect：重定向；page：指定页面；alg：JavaScript 挑战。 */
  Action: string;
  /** 规则状态，取值有：on：生效；off：失效。 */
  RuleStatus: string;
  /** 自定义规则。 */
  AclConditions: AclCondition[];
  /** 规则优先级，取值范围0-100。 */
  RulePriority: number;
  /** 规则 Id。仅出参使用。 */
  RuleID?: number;
  /** 更新时间。仅出参使用。 */
  UpdateTime?: string;
  /** ip 封禁的惩罚时间。Action 是 ban 时必填，且不能为空，取值范围0-2天。 */
  PunishTime?: number;
  /** ip 封禁的惩罚时间单位，取值有：second：秒；minutes：分；hour：小时。默认为 second。 */
  PunishTimeUnit?: string;
  /** 自定义返回页面的名称。Action 是 page 时必填，且不能为空。 */
  Name?: string;
  /** 自定义返回页面的实例 Id。默认为0，代表使用系统默认拦截页面。该参数已废弃。 */
  PageId?: number;
  /** 自定义响应 Id。该 Id 可通过查询自定义错误页列表接口获取。默认值为default，使用系统默认页面。Action 是 page 时必填，且不能为空。 */
  CustomResponseId?: string;
  /** 自定义返回页面的响应码。Action 是 page 时必填，且不能为空，取值: 100~600，不支持 3xx 响应码。默认值：567。 */
  ResponseCode?: number;
  /** 重定向时候的地址。Action 是 redirect 时必填，且不能为空。 */
  RedirectUrl?: string;
}

/** 规则引擎功能项操作，对于一种功能只对应下面三种类型的其中一种，RuleAction 数组中的每一项只能是其中一个类型，更多功能项的填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。 */
declare interface Action {
  /** 常规功能操作，选择该类型的功能项有： 访问URL 重写（AccessUrlRedirect）； 回源 URL 重写 （UpstreamUrlRedirect）； QUIC（QUIC）； WebSocket （WebSocket）； 视频拖拽（VideoSeek）； Token 鉴权（Authentication）； 自定义CacheKey（CacheKey）； 节点缓存 TTL （Cache）； 浏览器缓存 TTL（MaxAge）； 离线缓存（OfflineCache）； 智能加速（SmartRouting）； 分片回源（RangeOriginPull）； HTTP/2 回源（UpstreamHttp2）； Host Header 重写（HostHeader）； 强制 HTTPS（ForceRedirect）； 回源 HTTPS（OriginPullProtocol）； 单连接下载限速（ResponseSpeedLimit）； 缓存预刷新（CachePrefresh）； 智能压缩（Compression）； Hsts； ClientIpHeader； SslTlsSecureConf； OcspStapling； HTTP/2 访问（Http2）； 回源跟随重定向(UpstreamFollowRedirect)； 修改源站(Origin)。 七层回源超时(HTTPUpstreamTimeout)。 Http应答（HttpResponse）。 */
  NormalAction?: NormalAction | null;
  /** 带有请求头/响应头的功能操作，选择该类型的功能项有： 修改 HTTP 请求头（RequestHeader）； 修改HTTP响应头（ResponseHeader）。 */
  RewriteAction?: RewriteAction | null;
  /** 带有状态码的功能操作，选择该类型的功能项有： 自定义错误页面（ErrorPage）； 状态码缓存 TTL（StatusCodeCache）。 */
  CodeAction?: CodeAction | null;
}

/** 自适应频控 */
declare interface AdaptiveFrequencyControl {
  /** 自适应频控是否开启。取值有：on：开启；off：关闭。 */
  Enabled: string;
  /** 自适应频控的限制等级，当 Enabled 为 on 时，此字段必填。取值有：Loose：宽松；Moderate：适中；Strict：严格。 */
  Sensitivity?: string;
  /** 自适应频控的处置方式，当 Enabled 为 on 时，此字段必填。SecurityAction 的 Name 取值支持：Monitor：观察；Deny：拦截；Challenge：挑战，其中ChallengeActionParameters.Name仅支持JSChallenge。 */
  Action?: SecurityAction;
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
  AlgDetectSession?: AlgDetectSession;
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
  AliasName?: string;
  /** 站点 ID。 */
  ZoneId?: string;
  /** 目标域名名称。 */
  TargetName?: string;
  /** 别称域名状态，取值有： active：已生效； pending：部署中； conflict：被找回。 stop：已停用； */
  Status?: string;
  /** 封禁模式，取值有： 0：未封禁； 11：合规封禁； 14：未备案封禁。 */
  ForbidMode?: number;
  /** 别称域名创建时间。 */
  CreatedOn?: string;
  /** 别称域名修改时间。 */
  ModifiedOn?: string;
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
  /** 源站类型，取值有：custom：手动添加；loadbalancer：负载均衡；origins：源站组。 */
  OriginType: string;
  /** 源站信息：当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；当 OriginType 为 loadbalancer 时，表示一个负载均衡，如`["lb-xdffsfasdfs"]`；当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。 */
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
  SessionPersistTime?: number;
  /** 源站端口，支持格式：单端口，如：80。端口段：81-82，表示81，82两个端口。 */
  OriginPort?: string;
  /** 规则标签。 */
  RuleTag?: string;
}

/** 站点归属信息 */
declare interface AscriptionInfo {
  /** 主机记录。 */
  Subdomain?: string;
  /** 记录类型。 */
  RecordType?: string;
  /** 记录值。 */
  RecordValue?: string;
}

/** Token 鉴权 配置参数。 */
declare interface AuthenticationParameters {
  /** 鉴权类型。取值有：TypeA：鉴权方式 A 类型，具体含义请参考 [鉴权方式 A](https://cloud.tencent.com/document/product/1552/109329)；TypeB：鉴权方式 B 类型，具体含义请参考 [鉴权方式 B](https://cloud.tencent.com/document/product/1552/109330)；TypeC：鉴权方式 C 类型，具体含义请参考 [鉴权方式 C](https://cloud.tencent.com/document/product/1552/109331)；TypeD：鉴权方式 D 类型，具体含义请参考 [鉴权方式 D](https://cloud.tencent.com/document/product/1552/109332)；TypeVOD：鉴权方式 V 类型，具体含义请参考 [鉴权方式 V](https://cloud.tencent.com/document/product/1552/109333)。 */
  AuthType?: string;
  /** 主鉴权密钥，由 6～40 位大小写英文字母或数字组成，不能包含 " 和 $。 */
  SecretKey?: string;
  /** 鉴权 URL 的有效时长，单位为秒，取值：1～630720000。用于判断客户端访问请求是否过期：若当前时间超过 “timestamp + 有效时长” 时间，则为过期请求，直接返回 403。若当前时间未超过 “timestamp + 有效时长” 时间，则请求未过期，继续校验 md5 字符串。注意：当 AuthType 为 TypeA、TypeB、TypeC、TypeD 之一时，此字段必填。 */
  Timeout?: number;
  /** 备鉴权密钥，由 6～40 位大小写英文字母或数字组成，不能包含 " 和 $。 */
  BackupSecretKey?: string;
  /** 鉴权参数名称，节点将校验此参数名对应的值。由 1～100 位大小写字母、数字或下划线组成。注意：当 AuthType 为 TypeA、TypeD 之一时，此字段必填。 */
  AuthParam?: string;
  /** 鉴权时间戳，和 AuthParam 字段的值不能相同。注意：当 AuthType 为 TypeD 时，此字段必填。 */
  TimeParam?: string;
  /** 鉴权时间格式，取值有：dec：十进制；hex：十六进制。注意：当 AuthType 为 TypeD 时，此字段必填。默认为 hex。 */
  TimeFormat?: string;
}

/** 流量防盗刷（仅适用中国大陆地区）的具体配置。 */
declare interface BandwidthAbuseDefense {
  /** 流量防盗刷（仅适用中国大陆地区）是否开启。取值有：on：开启；off：关闭。 */
  Enabled: string;
  /** 流量防盗刷（仅适用中国大陆地区）的处置方式，当 Enabled 为 on 时，此字段必填。SecurityAction 的 Name 取值支持：Monitor：观察；Deny：拦截；Challenge：挑战，其中ChallengeActionParameters.Name仅支持JSChallenge。 */
  Action?: SecurityAction;
}

/** 计费数据项 */
declare interface BillingData {
  /** 时间。 */
  Time?: string;
  /** 数值。 */
  Value?: number;
}

/** 计费数据过滤条件。 */
declare interface BillingDataFilter {
  /** 参数名称。 */
  Type: string;
  /** 参数值。 */
  Value: string;
}

/** 共享 CNAME 和接入域名的绑定关系 */
declare interface BindSharedCNAMEMap {
  /** 需要绑定或解绑的共享 CNAME。 */
  SharedCNAME: string;
  /** 加速域名，可传递多个，最多20个。 */
  DomainNames: string[];
}

/** Web安全IP封禁的附加参数 */
declare interface BlockIPActionParameters {
  /** 封禁 IP 的惩罚时长。支持的单位有：s：秒，取值范围1～120；m：分，取值范围1～120；h：小时，取值范围1～48。 */
  Duration: string;
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
  IntelligenceRule?: IntelligenceRule;
  /** Bot自定义规则。如果为null，默认使用历史配置。 */
  BotUserRules?: BotUserRule[];
  /** Bot主动特征识别规则。 */
  AlgDetectRule?: AlgDetectRule[];
  /** Bot托管定制策略，入参可不填，仅出参使用。 */
  Customizes?: BotUserRule[];
}

/** Bot扩展处置方式，多处置动作组合。 */
declare interface BotExtendAction {
  /** 处置动作，取值有：monitor：观察；alg：JavaScript挑战；captcha：托管挑战；random：随机，按照ExtendActions分配处置动作和比例；silence：静默；shortdelay：短时响应；longdelay：长时响应。 */
  Action: string;
  /** 处置方式的触发概率，范围0-100。 */
  Percent?: number;
}

/** Bot 规则，下列规则ID可参考接口 DescribeBotManagedRules返回的ID信息 */
declare interface BotManagedRule {
  /** 触发规则后的处置方式，取值有：drop：拦截；trans：放行；alg：Javascript挑战；monitor：观察。 */
  Action: string;
  /** 本规则的ID。仅出参使用。 */
  RuleID?: number;
  /** 放行的规则ID。默认所有规则不配置放行。 */
  TransManagedIds?: number[];
  /** JS挑战的规则ID。默认所有规则不配置JS挑战。 */
  AlgManagedIds?: number[];
  /** 数字验证码的规则ID。默认所有规则不配置数字验证码。 */
  CapManagedIds?: number[];
  /** 观察的规则ID。默认所有规则不配置观察。 */
  MonManagedIds?: number[];
  /** 拦截的规则ID。默认所有规则不配置拦截。 */
  DropManagedIds?: number[];
}

/** bot 用户画像规则 */
declare interface BotPortraitRule {
  /** 本功能的开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 本规则的ID。仅出参使用。 */
  RuleID?: number;
  /** JS挑战的规则ID。默认所有规则不配置JS挑战。 */
  AlgManagedIds?: number[];
  /** 数字验证码的规则ID。默认所有规则不配置数字验证码。 */
  CapManagedIds?: number[];
  /** 观察的规则ID。默认所有规则不配置观察。 */
  MonManagedIds?: number[];
  /** 拦截的规则ID。默认所有规则不配置拦截。 */
  DropManagedIds?: number[];
}

/** Bot自定义规则 */
declare interface BotUserRule {
  /** 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。 */
  RuleName: string;
  /** 处置动作，取值有：drop：拦截；monitor：观察；trans：放行；redirect：重定向；page：指定页面；alg：JavaScript 挑战；captcha：托管挑战；random：随机处置；silence：静默；shortdelay：短时响应；longdelay：长时响应。 */
  Action: string;
  /** 规则状态，取值有：on：生效；off：不生效。默认 on 生效。 */
  RuleStatus: string;
  /** 规则详情。 */
  AclConditions: AclCondition[];
  /** 规则权重，取值范围0-100。 */
  RulePriority: number;
  /** 规则 Id。仅出参使用。 */
  RuleID?: number;
  /** 随机处置的处置方式及占比，非随机处置可不填暂不支持。 */
  ExtendActions?: BotExtendAction[];
  /** 过滤词，取值有：sip：客户端 ip。默认为空字符串。 */
  FreqFields?: string[];
  /** 更新时间。仅出参使用。 */
  UpdateTime?: string;
  /** 统计范围。取值有：source_to_eo：（响应）源站到 EdgeOne；client_to_eo：（请求）客户端到 EdgeOne。默认为 source_to_eo。 */
  FreqScope?: string[];
  /** 自定义返回页面的名称。Action 是 page 时必填，且不能为空。 */
  Name?: string;
  /** 自定义响应 Id。该 Id 可通过查询自定义错误页列表接口获取。默认值为default，使用系统默认页面。Action 是 page 时必填，且不能为空。 */
  CustomResponseId?: string;
  /** 自定义返回页面的响应码。Action 是 page 时必填，且不能为空，取值: 100~600，不支持 3xx 响应码。默认值：567。 */
  ResponseCode?: number;
  /** 重定向时候的地址。Action 是 redirect 时必填，且不能为空。 */
  RedirectUrl?: string;
}

/** cc配置项。 */
declare interface CC {
  /** Waf开关，取值为： on：开启； off：关闭。 */
  Switch: string;
  /** 策略ID。 */
  PolicyId?: number;
}

/** 实时日志投递到腾讯云 CLS 的配置信息。 */
declare interface CLSTopic {
  /** 腾讯云 CLS 日志集 ID。 */
  LogSetId: string;
  /** 腾讯云 CLS 日志主题 ID。 */
  TopicId: string;
  /** 腾讯云 CLS 日志集所在的地域。 */
  LogSetRegion: string;
}

/** 缓存时间设置 */
declare interface Cache {
  /** 缓存配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 缓存过期时间设置。单位为秒，最大可设置为 365 天。 */
  CacheTime?: number;
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

/** 节点缓存 TTL 自定义缓存时间配置参数。 */
declare interface CacheConfigCustomTime {
  /** 自定义缓存时间开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 自定义缓存时间数值，单位为秒，取值：0-315360000。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  CacheTime?: number;
}

/** 节点缓存 TTL 配置参数。 */
declare interface CacheConfigParameters {
  /** 遵循源站缓存配置。FollowOrigin、NoCache、CustomTime 最多只能配置一个 Switch 为 on。 */
  FollowOrigin?: FollowOrigin | null;
  /** 不缓存配置。FollowOrigin、NoCache、CustomTime 最多只能配置一个 Switch 为 on。 */
  NoCache?: NoCache | null;
  /** 自定义缓存时间配置。FollowOrigin、NoCache、CustomTime 最多只能配置一个 Switch 为 on。 */
  CustomTime?: CacheConfigCustomTime | null;
}

/** 缓存键配置。 */
declare interface CacheKey {
  /** 是否开启全路径缓存，取值有：on：开启全路径缓存（即关闭参数忽略）；off：关闭全路径缓存（即开启参数忽略）。 */
  FullUrlCache?: string;
  /** 是否忽略大小写缓存，取值有：on：忽略；off：不忽略。 */
  IgnoreCase?: string;
  /** CacheKey 中包含请求参数。 */
  QueryString?: QueryString | null;
}

/** 缓存键配置。 */
declare interface CacheKeyConfigParameters {
  /** 是否开启全路径缓存，取值有：on：开启全路径缓存（即关闭参数忽略）；off：关闭全路径缓存（即开启参数忽略）。 */
  FullURLCache?: string;
  /** 是否忽略大小写缓存，取值有：on：忽略；off：不忽略。 */
  IgnoreCase?: string;
  /** 查询字符串保留配置参数。此字段和 FullURLCache 必须同时设置，但不能同为 on。 */
  QueryString?: CacheKeyQueryString;
}

/** 自定义 Cache Key Cookie 配置参数。 */
declare interface CacheKeyCookie {
  /** 功能开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 缓存动作，取值有：full：全部保留； ignore：全部忽略； includeCustom：保留指定参数；excludeCustom：忽略指定参数。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  Action?: string;
  /** 自定义 Cache Key Cookie 名称列表。注意：当 Action 为 includeCustom 或 excludeCustom 时，此字段必填；当 Action 为 full 或 ignore 时，无需填写此字段，若填写则不生效。 */
  Values?: string[];
}

/** 自定义 Cache Key HTTP 请求头配置参数。 */
declare interface CacheKeyHeader {
  /** 功能开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 自定义 Cache Key HTTP 请求头列表。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  Values?: string[];
}

/** 自定义 Cache Key 配置参数。该配置参数的 FullURLCache 和 QueryString 采用组合表达，具体示例可以参考：- 查询字符串全部保留。开启忽略大小写。```{ "CacheKey": { "FullURLCache": "on", "QueryString": { "Switch": "off" }, "IgnoreCase": "on" }}```- 查询字符串全部忽略。开启忽略大小写。```{ "CacheKey": { "FullURLCache": "off", "QueryString": { "Switch": "off" }, "IgnoreCase": "on" }}```- 查询字符串保留指定参数。关闭忽略大小写。```{ "CacheKey": { "FullURLCache": "off", "QueryString": { "Switch": "on", "Action": "includeCustom", "Values": ["name1","name2","name3"] }, "IgnoreCase": "off" }}```- 查询字符串忽略指定参数。关闭忽略大小写。```{ "CacheKey": { "FullURLCache": "off", "QueryString": { "Switch": "on", "Action": "excludeCustom", "Values": ["name1","name2","name3"] }, "IgnoreCase": "off" }}``` */
declare interface CacheKeyParameters {
  /** 查询字符串全部保留开关，取值有：on：开启；off：关闭。注意：FullURLCache、IgnoreCase、Header、Scheme、Cookie 至少设置一个配置。此字段和 QueryString.Switch 必须同时设置，但不能同为 on。 */
  FullURLCache?: string;
  /** 查询字符串保留配置参数。此字段和 FullURLCache 必须同时设置，但不能同为 on。 */
  QueryString?: CacheKeyQueryString | null;
  /** 忽略大小写开关，取值有：on：开启；off：关闭。注意：FullURLCache、IgnoreCase、Header、Scheme、Cookie 至少设置一个配置。 */
  IgnoreCase?: string;
  /** HTTP 请求头配置参数。FullURLCache、IgnoreCase、Header、Scheme、Cookie 至少设置一个配置。 */
  Header?: CacheKeyHeader | null;
  /** 请求协议开关，取值有：on：开启；off：关闭。注意：FullURLCache、IgnoreCase、Header、Scheme、Cookie 至少设置一个配置。 */
  Scheme?: string;
  /** Cookie 配置参数。FullURLCache、IgnoreCase、Header、Scheme、Cookie 至少设置一个配置。 */
  Cookie?: CacheKeyCookie | null;
}

/** 自定义 Cache Key 查询字符串配置参数。 */
declare interface CacheKeyQueryString {
  /** 查询字符串保留/忽略指定参数开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 查询字符串保留/忽略指定参数动作。取值有：includeCustom：表示保留部分参数；excludeCustom：表示忽略部分参数。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  Action?: string;
  /** 查询字符串中需保留/忽略的参数名列表。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  Values?: string[];
}

/** 节点缓存 TTL 配置参数。 */
declare interface CacheParameters {
  /** 缓存遵循源站。不填表示不设置该配置，FollowOrigin、NoCache、CustomTime 最多只能配置一个 Switch 为 on。 */
  FollowOrigin?: FollowOrigin | null;
  /** 不缓存。不填表示不设置该配置，FollowOrigin、NoCache、CustomTime 最多只能配置一个 Switch 为 on。 */
  NoCache?: NoCache | null;
  /** 自定义缓存时间。不填表示不设置该配置，FollowOrigin、NoCache、CustomTime 最多只能配置一个 Switch 为 on。 */
  CustomTime?: CustomTime | null;
}

/** 缓存预刷新 */
declare interface CachePrefresh {
  /** 缓存预刷新配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 缓存预刷新百分比，取值范围：1-99。 */
  Percent?: number;
}

/** 缓存预刷新 配置参数。 */
declare interface CachePrefreshParameters {
  /** 缓存预刷新开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 预刷新时间设置为节点缓存时间的百分比数值，取值：1～99。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  CacheTimePercent?: number;
}

/** 节点缓存清除类型取值为 purge_cache_tag 时附带的信息。 */
declare interface CacheTag {
  /** 待清除缓存的域名列表。 */
  Domains: string[];
}

/** https 证书配置。 */
declare interface CertificateInfo {
  /** 证书 ID。来源于 SSL 侧，您可以前往 [SSL 证书列表](https://console.cloud.tencent.com/ssl) 查看 CertId。 */
  CertId: string;
  /** 证书备注名。 */
  Alias?: string;
  /** 证书类型，取值有：default：默认证书；upload：用户上传；managed：腾讯云托管。 */
  Type?: string;
  /** 证书过期时间。 */
  ExpireTime?: string;
  /** 证书部署时间。 */
  DeployTime?: string;
  /** 签名算法。 */
  SignAlgo?: string;
  /** 证书状态，取值有：deployed：已部署；processing：部署中；applying：申请中；failed：申请失败；issued：绑定失败。 */
  Status?: string;
}

/** Web 安全 Challenge 挑战的附加参数 */
declare interface ChallengeActionParameters {
  /** 安全执行的具体挑战动作。取值有： InterstitialChallenge：插页式挑战； InlineChallenge：内嵌式挑战； JSChallenge：JavaScript 挑战； ManagedChallenge：托管挑战。 */
  ChallengeOption: string;
  /** 重复挑战的时间间隔，当 Name 为 InterstitialChallenge/InlineChallenge 时，该字段必填。默认值为 300s。支持的单位有：s：秒，取值范围1～60；m：分，取值范围1～60；h：小时，取值范围1～24。 */
  Interval?: string;
  /** 客户端认证方式 ID 。当 Name 为 InterstitialChallenge/InlineChallenge 时，该字段必填。 */
  AttesterId?: string;
}

/** 各个健康检查区域下源站的健康状态。 */
declare interface CheckRegionHealthStatus {
  /** 健康检查区域，ISO-3166-1 两位字母代码。 */
  Region?: string;
  /** 单健康检查区域下探测源站的健康状态，取值有：Healthy：健康；Unhealthy：不健康； Undetected：未探测到数据。说明：单健康检查区域下所有源站为健康，则状态为健康，否则为不健康。 */
  Healthy?: string;
  /** 源站健康状态。 */
  OriginHealthStatus?: OriginHealthStatus[];
}

/** 智能客户端过滤 */
declare interface ClientFiltering {
  /** 智能客户端过滤是否开启。取值有：on：开启；off：关闭。 */
  Enabled: string;
  /** 智能客户端过滤的处置方式，当 Enabled 为 on 时，此字段必填。SecurityAction 的 Name 取值支持：Monitor：观察；Deny：拦截；Challenge：挑战，其中ChallengeActionParameters.Name仅支持JSChallenge。 */
  Action?: SecurityAction;
}

/** 回源时携带客户端 IP 所属地域信息，值的格式为 ISO-3166-1 两位字母代码。 */
declare interface ClientIPCountryParameters {
  /** 配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 存放客户端 IP 所属地域信息的请求头名称，当 Switch=on 时有效。为空则使用默认值：EO-Client-IPCountry。 */
  HeaderName?: string;
}

/** 存储客户端请求IP的头部信息配置。 */
declare interface ClientIPHeaderParameters {
  /** 配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 回源时，存放客户端 IP 的请求头名称。当 Switch 为 on 时，该参数必填。该参数不允许填写 X-Forwarded-For。 */
  HeaderName?: string;
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
  /** 回源时，存放客户端 IP 的请求头名称。当 Switch 为 on 时，该参数必填。该参数不允许填写 X-Forwarded-For。 */
  HeaderName?: string;
}

/** CNAME 状态 */
declare interface CnameStatus {
  /** 记录名称。 */
  RecordName?: string;
  /** CNAME 地址。 */
  Cname?: string | null;
  /** CNAME 状态信息，取值有：active：生效；moved：不生效； */
  Status?: string;
}

/** 规则引擎带有状态码的动作 */
declare interface CodeAction {
  /** 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。 */
  Action: string;
  /** 操作参数。 */
  Parameters: RuleCodeActionParams[];
}

/** 智能压缩配置。 */
declare interface Compression {
  /** 智能压缩配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 支持的压缩算法列表，取值有：brotli：brotli算法；gzip：gzip算法。 */
  Algorithms?: string[];
}

/** 智能压缩配置。 */
declare interface CompressionParameters {
  /** 智能压缩配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 支持的压缩算法列表。当 Switch 为 on 时，此字段必填，否则此字段不生效。取值有：brotli：brotli 算法；gzip：gzip 算法。 */
  Algorithms?: string[];
}

/** 配置组版本信息。 */
declare interface ConfigGroupVersionInfo {
  /** 版本 ID。 */
  VersionId: string;
  /** 版本号。 */
  VersionNumber?: string;
  /** 配置组 ID。 */
  GroupId?: string;
  /** 配置组类型。取值有：l7_acceleration ：七层加速配置组。edge_functions ：边缘函数配置组。 */
  GroupType?: string;
  /** 版本描述。 */
  Description?: string;
  /** 版本状态，取值有：creating：创建中；inactive：未生效；active：已生效。 */
  Status?: string;
  /** 版本创建时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  CreateTime?: string;
}

/** 内容标识符。该功能仅白名单开放。 */
declare interface ContentIdentifier {
  /** 内容标识符 ID。 */
  ContentId?: string;
  /** 内容标识符描述。 */
  Description?: string;
  /** 被规则引擎引用的次数。 */
  ReferenceCount?: number;
  /** 绑定的套餐 ID。 */
  PlanId?: string;
  /** 绑定的标签。 */
  Tags?: Tag[];
  /** 内容标识符状态，取值有： active：已生效； deleted：已删除。 */
  Status?: string;
  /** 创建时间，时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  CreatedOn?: string;
  /** 最新一次更新时间，时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  ModifiedOn?: string;
  /** 删除时间，状态非 deleted 时候为空；时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  DeletedOn?: string | null;
}

/** 实时日志投递到自定义 HTTP(S) 接口的配置信息。 */
declare interface CustomEndpoint {
  /** 实时日志投递的自定义 HTTP 接口地址，暂仅支持 HTTP/HTTPS 协议。 */
  Url: string;
  /** 填写自定义的 SecretId 用于生成加密签名，如果源站需要鉴权此参数必填。 */
  AccessId?: string;
  /** 填写自定义的 SecretKey 用于生成加密签名，如果源站需要鉴权此参数必填。 */
  AccessKey?: string;
  /** 数据压缩类型，取值有: gzip：使用 gzip 方式压缩。不填表示不启用压缩。 */
  CompressType?: string;
  /** POST 请求投递日志时，使用的应用层协议类型，取值有： http：HTTP 协议；https：HTTPS 协议。如果不填默认根据填写的 URL 地址解析出协议类型。 */
  Protocol?: string;
  /** 投递日志时携带的自定义请求头。若您填写的头部名称为 Content-Type 等 EdgeOne 日志推送默认携带的头部，那么您填写的头部值将覆盖默认值。头部值引用单个变量${batchSize}，以获取每次 POST 请求中包含的日志条数。 */
  Headers?: Header[];
}

/** 自定义错误码页面结构体。 */
declare interface CustomErrorPage {
  /** 自定义错误页面 ID。 */
  PageId?: string;
  /** 站点 ID。 */
  ZoneId?: string;
  /** 自定义错误页面名称。 */
  Name?: string;
  /** 自定义错误页面类型。 */
  ContentType?: string;
  /** 自定义错误页面描述。 */
  Description?: string;
  /** 自定义错误页面内容。 */
  Content?: string;
  /** 自定义错误页面引用。 */
  References?: ErrorPageReference[];
}

/** 实时日志投递任务中的自定义日志字段。 */
declare interface CustomField {
  /** 自定义日志字段类型。从 HTTP 请求和响应中的指定位置提取数据，取值有：ReqHeader：从 HTTP 请求头中提取指定字段值；RspHeader：从 HTTP 响应头中提取指定字段值；Cookie: 从 Cookie 中提取指定字段值；ReqBody: 从 HTTP 请求正文中通过 Google RE2 正则表达式提取指定内容。 */
  Name: string;
  /** 根据字段类型（Name）填入字段值的定义。需要区分大小写。当字段类型为 ReqHeader、RspHeader、Cookie 时，填入需要提取值的参数名称，例如：Accept-Language。可输入 1-100 个字符，允许的字符开头为字母，中间为字母、数字、-，结尾为字母、数字；当字段类型为 ReqBody 时，填入 Google RE2 正则表达式，正则表达式长度上限为 4KB。 */
  Value: string;
  /** 是否投递该字段，不填表示不投递此字段。 */
  Enabled?: boolean;
}

/** Web安全的自定义规则 */
declare interface CustomRule {
  /** 自定义规则的名称。 */
  Name: string;
  /** 自定义规则的具体内容，需符合表达式语法，详细规范参见产品文档。 */
  Condition: string;
  /** 自定义规则的执行动作。	SecurityAction 的 Name 取值支持：Deny：拦截；Monitor：观察；ReturnCustomPage：使用指定页面拦截；Redirect：重定向至 URL；BlockIP：IP 封禁；JSChallenge：JavaScript 挑战；ManagedChallenge：托管挑战；Allow：放行。 */
  Action: SecurityAction;
  /** 自定义规则是否开启。取值有：on：开启off：关闭 */
  Enabled: string;
  /** 自定义规则的 ID。通过规则 ID 可支持不同的规则配置操作： - 增加新规则：ID 为空或不指定 ID 参数； - 修改已有规则：指定需要更新/修改的规则 ID； - 删除已有规则：CustomRules 参数中，Rules 列表中未包含的已有规则将被删除。 */
  Id?: string;
  /** 自定义规则的类型。取值有：BasicAccessRule：基础访问管控；PreciseMatchRule：精准匹配规则，默认；ManagedAccessRule：专家定制规则，仅出参。默认为PreciseMatchRule。 */
  RuleType?: string;
  /** 自定义规则的优先级，范围是 0 ~ 100，默认为 0，仅支持精准匹配规则（PreciseMatchRule）。 */
  Priority?: number;
}

/** Web安全的自定义规则结构 */
declare interface CustomRules {
  /** 自定义规则的定义列表。使用 ModifySecurityPolicy 修改 Web 防护配置时: - 若未指定 Rules 参数，或 Rules 参数长度为零：清空所有自定义规则配置。 - 若 SecurityPolicy 参数中，未指定 CustomRules 参数值：保持已有自定义规则配置，不做修改。 */
  Rules?: CustomRule[];
}

/** 节点缓存 TTL 自定义缓存时间参数配置。 */
declare interface CustomTime {
  /** 自定义缓存时间开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 忽略源站 CacheControl 开关，取值有：on：开启；off：关闭。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  IgnoreCacheControl?: string;
  /** 自定义缓存时间数值，单位为秒，取值：0～315360000。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  CacheTime?: number;
}

/** 负载均衡实例 HTTP/HTTPS 健康检查策略下可配置的自定义头部。 */
declare interface CustomizedHeader {
  /** 自定义头部 Key。 */
  Key: string;
  /** 自定义头部 Value。 */
  Value: string;
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

/** 适用于四层代理或 Web 站点服务的独立 DDoS 防护规格配置。 */
declare interface DDosProtectionConfig {
  /** 中国大陆地区独立 DDoS 防护的规格。详情请参考 [独立 DDoS 防护相关费用](https://cloud.tencent.com/document/product/1552/94162)PLATFORM：平台默认防护，即不开启独立 DDoS 防护；BASE30_MAX300：开启独立 DDoS 防护，提供 30 Gbps 保底防护带宽以及 300 Gbps 弹性防护带宽；BASE60_MAX600：开启独立 DDoS 防护，提供 60 Gbps 保底防护带宽以及 600 Gbps 弹性防护带宽。不填写参数时，取默认值 PLATFORM。 */
  LevelMainland?: string;
  /** 中国大陆地区独立 DDoS 防护的弹性防护带宽配置。仅当开启中国大陆区域独立 DDos 防护时有效（详见 LevelMainland 参数配置），且取值范围有如下限制：开启中国大陆地区独立 DDoS 防护，使用 30 Gbps 保底防护带宽规格时（ LevelMainland 参数值为 BASE30_MAX300 ）：有效取值范围为 30 至 300，单位为 Gbps；开启中国大陆地区独立 DDoS 防护，使用 60 Gbps 保底防护带宽规格时（ LevelMainland 参数值为 BASE60_MAX600 ）：有效取值范围为 60 至 600，单位为 Gbps；使用平台默认防护（ LevelMainland 参数值为 PLATFORM ）：不支持配置，本参数值无效。 */
  MaxBandwidthMainland?: number;
  /** 全球（除中国大陆以外）地区独立 DDoS 防护的规格。PLATFORM：平台默认防护，即不开启独立 DDoS 防护；ANYCAST300：开启独立 DDoS 防护，提供 300 Gbps 防护带宽；ANYCAST_ALLIN：开启独立 DDoS 防护，使用全部可用防护资源进行防护。不填写参数时，取默认值 PLATFORM。 */
  LevelOverseas?: string;
}

/** https 服务端证书配置 */
declare interface DefaultServerCertInfo {
  /** 服务器证书 ID。 */
  CertId: string;
  /** 证书备注名。 */
  Alias?: string;
  /** 证书类型，取值有：default: 默认证书;upload:用户上传;managed:腾讯云托管。 */
  Type?: string;
  /** 证书过期时间。 */
  ExpireTime?: string;
  /** 证书生效时间。 */
  EffectiveTime?: string;
  /** 证书公用名。 */
  CommonName?: string;
  /** 证书SAN域名。 */
  SubjectAltName?: string[];
  /** 部署状态，取值有：processing: 部署中；deployed: 已部署；failed: 部署失败。 */
  Status?: string;
  /** Status为失败时,此字段返回失败原因。 */
  Message?: string;
  /** 证书算法。 */
  SignAlgo?: string;
}

/** 实时日志投递条件，用于定义投递日志范围。DeliveryCondition 数组内多个项的关系为“或”，内层 Conditions 数组内多个项的关系为“且”。 */
declare interface DeliveryCondition {
  /** 日志过滤条件，详细的过滤条件如下：EdgeResponseStatusCode：按照 EdgeOne 节点响应返回给客户端的状态码进行过滤。 支持运算符：equal、great、less、great_equal、less_equal 取值范围：任意大于等于 0 的整数OriginResponseStatusCode：按照源站响应状态码进行过滤。 支持运算符：equal、great、less、great_equal、less_equal 取值范围：任意大于等于 -1 的整数SecurityAction：按照请求命中安全规则后的最终处置动作进行过滤。 支持运算符：equal 可选项如下： -：未知/未命中 Monitor：观察 JSChallenge：JavaScript 挑战 Deny：拦截 Allow：放行 BlockIP：IP 封禁 Redirect：重定向 ReturnCustomPage：返回自定义页面 ManagedChallenge：托管挑战 Silence：静默 LongDelay：长时间等待后响应 ShortDelay：短时间等待后响应SecurityModule：按照最终处置请求的安全模块名称进行过滤。 支持运算符：equal 可选项如下： -：未知/未命中 CustomRule：Web防护 - 自定义规则 RateLimitingCustomRule：Web防护 - 速率限制规则 ManagedRule：Web防护 - 托管规则 L7DDoS：Web防护 - CC攻击防护 BotManagement：Bot管理 - Bot基础管理 BotClientReputation：Bot管理 - 客户端画像分析 BotBehaviorAnalysis：Bot管理 - Bot智能分析 BotCustomRule：Bot管理 - 自定义Bot规则 BotActiveDetection：Bot管理 - 主动特征识别 */
  Conditions?: QueryCondition[];
}

/** 安全执行动作为封禁的附加参数。 */
declare interface DenyActionParameters {
  /** 是否对来源 IP 延长封禁。取值有：on：开启；off：关闭。启用后，对触发规则的客户端 IP 持续拦截。当启用该选项时，必须同时指定 BlockIpDuration 参数。注意：该选项不可与 ReturnCustomPage 或 Stall 选项同时启用。 */
  BlockIp?: string;
  /** 当 BlockIP 为 on 时IP 的封禁时长。 */
  BlockIpDuration?: string;
  /** 是否使用自定义页面。取值有：on：开启；off：关闭。启用后，使用自定义页面内容拦截（响应）请求，当启用该选项时，必须同时指定 ResponseCode 和 ErrorPageId 参数。注意：该选项不可与 BlockIp 或 Stall 选项同时启用。 */
  ReturnCustomPage?: string;
  /** 自定义页面的状态码。 */
  ResponseCode?: string;
  /** 自定义页面的PageId。 */
  ErrorPageId?: string;
  /** 是否对请求来源挂起不予处理。取值有：on：开启；off：关闭。启用后，不再响应当前连接会话内请求，且不会主动断开连接。用于爬虫对抗时，消耗客户端连接资源。注意：该选项不可与 BlockIp 或 ReturnCustomPage 选项同时启用。 */
  Stall?: string;
}

/** 配置组版本发布记录详情。 */
declare interface DeployRecord {
  /** 发布版本的详细信息。 */
  ConfigGroupVersionInfos?: ConfigGroupVersionInfo[];
  /** 发布时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  DeployTime?: string;
  /** 发布状态，取值有： deploying ：发布中；failure ：发布失败；success： 发布成功。 */
  Status?: string;
  /** 发布结果信息。 */
  Message?: string;
  /** 发布记录 ID。 */
  RecordId?: string;
  /** 变更说明。 */
  Description?: string;
}

/** 域名配置信息 */
declare interface DetailHost {
  /** 站点ID。 */
  ZoneId?: string;
  /** 加速服务状态，取值为： process：部署中； online：已启动； offline：已关闭。 */
  Status?: string;
  /** 域名。 */
  Host?: string;
  /** 站点名称。 */
  ZoneName?: string;
  /** 分配的Cname域名 */
  Cname?: string;
  /** 资源ID。 */
  Id?: string;
  /** 实例ID。 */
  InstanceId?: string;
  /** 锁状态。 */
  Lock?: number;
  /** 域名状态类型。 */
  Mode?: number;
  /** 域名加速地域，取值有： global：全球； mainland：中国大陆； overseas：境外区域。 */
  Area?: string;
  /** 加速类型配置项。 */
  AccelerateType?: AccelerateType | null;
  /** Https配置项。 */
  Https?: Https | null;
  /** 缓存配置项。 */
  CacheConfig?: CacheConfig | null;
  /** 源站配置项。 */
  Origin?: Origin | null;
  /** 安全类型。 */
  SecurityType?: SecurityType | null;
  /** 缓存键配置项。 */
  CacheKey?: CacheKey | null;
  /** 智能压缩配置项。 */
  Compression?: Compression | null;
  /** Waf防护配置项。 */
  Waf?: Waf | null;
  /** CC防护配置项。 */
  CC?: CC | null;
  /** DDoS防护配置。 */
  DDoS?: DDoS | null;
  /** 智能路由配置项。 */
  SmartRouting?: SmartRouting | null;
  /** Ipv6访问配置项。 */
  Ipv6?: Ipv6 | null;
  /** 回源时是否携带客户端IP所属地域信息的配置。 */
  ClientIpCountry?: ClientIpCountry | null;
}

/** 检测长度限制配置条件。 */
declare interface DetectLengthLimitCondition {
  /** 匹配条件的参数名称，取值有：body_depth：请求正文包部分的检测深度。 */
  Name: string;
  /** 匹配条件的参数值，取值与 Name 成对使用。当 Name 值为 body_depth 时， Values 只支持传入单个值，取值有：10KB；64KB；128KB。 */
  Values: string[];
}

/** 检测长度限制 */
declare interface DetectLengthLimitConfig {
  /** 检测长度限制的规则列表。 */
  DetectLengthLimitRules: DetectLengthLimitRule[];
}

/** 检测长度限制规则详情 */
declare interface DetectLengthLimitRule {
  /** 规则Id。仅出参使用。 */
  RuleId: number;
  /** 规则名称。仅出参使用。 */
  RuleName: string;
  /** 规则描述，仅出参使用。 */
  Description: string;
  /** 规则配置条件。仅出参使用。 */
  Conditions: DetectLengthLimitCondition[];
  /** 处置方式，取值有：skip：当请求正文数据超过 Conditions 出参中 body_depth 设置的检测深度时，跳过所有请求正文内容的检测；scan：仅检测 Conditions 出参中 body_depth 设置的检测深度，对超出部分的请求正文内容直接截断处理，超出部分的请求正文不会经过安全检测。仅出参使用。 */
  Action: string;
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

/** DNS 记录 */
declare interface DnsRecord {
  /** 站点 ID。注意：ZoneId 仅做出参使用，在 ModifyDnsRecords 不可作为入参使用，如有传此参数，会忽略。 */
  ZoneId?: string;
  /** DNS 记录 ID。 */
  RecordId?: string;
  /** DNS 记录名。 */
  Name?: string;
  /** DNS 记录类型，取值有：A：将域名指向一个外网 IPv4 地址，如 8.8.8.8；AAAA：将域名指向一个外网 IPv6 地址；MX：用于邮箱服务器。存在多条 MX 记录时，优先级越低越优先；CNAME：将域名指向另一个域名，再由该域名解析出最终 IP 地址；TXT：对域名进行标识和说明，常用于域名验证和 SPF 记录（反垃圾邮件）；NS：如果需要将子域名交给其他 DNS 服务商解析，则需要添加 NS 记录。根域名无法添加 NS 记录；CAA：指定可为本站点颁发证书的 CA；SRV：标识某台服务器使用了某个服务，常见于微软系统的目录管理。 */
  Type?: string;
  /** DNS 记录解析线路，不指定默认为 Default，表示默认解析线路，代表全部地域生效。解析线路配置仅适用于当 Type（DNS 记录类型）为 A、AAAA、CNAME 时。取值请参考：[解析线路及对应代码枚举](https://cloud.tencent.com/document/product/1552/112542)。 */
  Location?: string;
  /** DNS 记录内容。根据 Type 值填入与之相对应的内容。 */
  Content?: string;
  /** 缓存时间，取值范围 60~86400，数值越小，修改记录各地生效时间越快，单位：秒。 */
  TTL?: number;
  /** DNS 记录权重，取值范围 -1~100，为 -1 时表示不分配权重，为 0 时表示不解析。权重配置仅适用于当 Type（DNS 记录类型）为 A、AAAA、CNAME 时。 */
  Weight?: number;
  /** MX 记录优先级，取值范围 0~50，数值越小越优先。 */
  Priority?: number;
  /** DNS 记录解析状态，取值有：enable：已生效；disable：已停用。注意：Status 仅做出参使用，在 ModifyDnsRecords 不可作为入参使用，如有传此参数，会忽略。 */
  Status?: string;
  /** 创建时间。注意：CreatedOn 仅做出参使用，在 ModifyDnsRecords 不可作为入参使用，如有传此参数，会忽略。 */
  CreatedOn?: string;
  /** 修改时间。注意：ModifiedOn 仅做出参使用，在 ModifyDnsRecords 不可作为入参使用，如有传此参数，会忽略。 */
  ModifiedOn?: string;
}

/** CNAME 接入，使用 DNS 解析验证时所需的信息。 */
declare interface DnsVerification {
  /** 主机记录。 */
  Subdomain?: string;
  /** 记录类型。 */
  RecordType?: string;
  /** 记录值。 */
  RecordValue?: string;
}

/** 拦截页面的总体配置，用于配置各个模块的拦截后行为。 */
declare interface DropPageConfig {
  /** 配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** Waf(托管规则)模块的拦截页面配置。如果为null，默认使用历史配置。 */
  WafDropPageDetail?: DropPageDetail;
  /** 自定义页面的拦截页面配置。如果为null，默认使用历史配置。 */
  AclDropPageDetail?: DropPageDetail;
}

/** 拦截页面的配置信息 */
declare interface DropPageDetail {
  /** 拦截页面的唯一 Id。系统默认包含一个自带拦截页面，Id 值为0。该 Id 可通过创建拦截页面接口进行上传获取。如传入0，代表使用系统默认拦截页面。该参数已废弃。 */
  PageId: number;
  /** 拦截页面的 HTTP 状态码。状态码取值：100～600，不支持 3xx 状态码。托管规则拦截页面默认：566，安全防护（除托管规则外）拦截页面默认：567. */
  StatusCode: number;
  /** 页面文件名或 url。 */
  Name: string;
  /** 页面的类型，取值有：page：指定页面。 */
  Type: string;
  /** 自定义响应 Id。该 Id 可通过查询自定义错误页列表接口获取。默认值为default，使用系统默认页面。Type 类型是 page 时必填，且不能为空。 */
  CustomResponseId?: string;
}

/** 安全实例状态。 */
declare interface EntityStatus {
  /** 实例名，现在只有子域名。 */
  Entity?: string;
  /** 实例配置下发状态，取值有：online：配置已生效；fail：配置失败； process：配置下发中。 */
  Status?: string;
  /** 实例配置下发信息提示。 */
  Message?: string;
}

/** 环境信息。 */
declare interface EnvInfo {
  /** 环境 ID。 */
  EnvId?: string;
  /** 环境类型，取值有：production: 生产环境；staging: 测试环境。 */
  EnvType?: string;
  /** 环境状态，取值有：creating：创建中；running：稳定运行中，可进行版本变更；version_deploying：版本部署中，不能进行新的变更。 */
  Status?: string;
  /** 当前环境的配置生效范围：当 EnvType 取值为 production 时，该参数值为 ["ALL"]，代表全网生效；当 EnvType 取值为 staging 时，会返回测试节点 IP，可用于绑定 host 测试。 */
  Scope?: string[];
  /** 当前环境中各配置组实际生效的版本，根据 Status 的取值有以下两种情况：当 Status 取值为 version_deploying 时，本字段返回的值为执行变更动作之前生效的版本，即新版本部署期间，实际生效的版本为执行变更动作之前的版本；当 Status 取值为 running 时，本字段返回的值即为当前实际生效的版本。 */
  CurrentConfigGroupVersionInfos?: ConfigGroupVersionInfo[];
  /** 创建时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  CreateTime?: string;
  /** 更新时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  UpdateTime?: string;
}

/** 自定义错误页面。 */
declare interface ErrorPage {
  /** 状态码。支持范围为 400、403、404、405、414、416、451、500、501、502、503、504。 */
  StatusCode: number;
  /** 重定向 URL，需要为完整跳转路径，如 https://www.test.com/error.html。 */
  RedirectURL: string;
}

/** 自定义错误页面配置参数。 */
declare interface ErrorPageParameters {
  /** 自定义错误页面配置列表。 */
  ErrorPageParams?: ErrorPage[] | null;
}

/** 自定义错误页面被引用的来源 */
declare interface ErrorPageReference {
  /** 引用的业务 ID，如自定义拦截规则 ID。 */
  BusinessId?: string;
}

/** 例外规则，用于配置需要跳过特定场景的规则 */
declare interface ExceptConfig {
  /** 配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 例外规则详情。如果为null，默认使用历史配置。 */
  ExceptUserRules?: ExceptUserRule[];
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
  UpdateTime?: string;
  /** 匹配条件。 */
  ExceptUserRuleConditions?: ExceptUserRuleCondition[];
  /** 规则生效的范围。 */
  ExceptUserRuleScope?: ExceptUserRuleScope;
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
  Modules?: string[];
  /** 跳过部分规则ID的例外规则详情。如果为null，默认使用历史配置。 */
  PartialModules?: PartialModule[];
  /** 跳过具体字段不去扫描的例外规则详情。如果为null，默认使用历史配置。 */
  SkipConditions?: SkipCondition[];
}

/** Web安全的例外规则 */
declare interface ExceptionRule {
  /** 例外规则的 ID。通过规则 ID 可支持不同的规则配置操作： 增加新规则：ID 为空或不指定 ID 参数； 修改已有规则：指定需要更新/修改的规则 ID； 删除已有规则：ExceptionRules 参数中，Rules 列表中未包含的已有规则将被删除。 */
  Id?: string;
  /** 例外规则的名称。 */
  Name?: string;
  /** 例外规则的具体内容，需符合表达式语法，详细规范参见产品文档。 */
  Condition?: string;
  /** 例外规则执行选项，取值有：WebSecurityModules: 指定例外规则的安全防护模块。ManagedRules：指定托管规则。 */
  SkipScope?: string;
  /** 跳过请求的具体类型，取值有：SkipOnAllRequestFields: 跳过所有请求；SkipOnSpecifiedRequestFields: 跳过指定请求字段。仅当 SkipScope 为 ManagedRules 时有效。 */
  SkipOption?: string;
  /** 指定例外规则的安全防护模块，仅当 SkipScope 为 WebSecurityModules 时有效。取值有：websec-mod-managed-rules：托管规则；websec-mod-rate-limiting：速率限制；websec-mod-custom-rules：自定义规则；websec-mod-adaptive-control：自适应频控、智能客户端过滤、慢速攻击防护、流量盗刷防护；websec-mod-bot：Bot管理。 */
  WebSecurityModulesForException?: string[];
  /** 指定例外规则的具体托管规则，仅当 SkipScope 为 ManagedRules 时有效，且此时不能指定 ManagedRuleGroupsForException 。 */
  ManagedRulesForException?: string[];
  /** 指定例外规则的托管规则组，仅当 SkipScope 为 ManagedRules 时有效，且此时不能指定 ManagedRulesForException 。 */
  ManagedRuleGroupsForException?: string[];
  /** 指定例外规则跳过指定请求字段的具体配置，仅当 SkipScope 为 ManagedRules 并且 SkipOption 为 SkipOnSpecifiedRequestFields 时有效。 */
  RequestFieldsForException?: RequestFieldsForException[];
  /** 例外规则是否开启。取值有：on：开启off：关闭 */
  Enabled?: string;
}

/** Web安全的例外规则 */
declare interface ExceptionRules {
  /** 例外规则的定义列表。使用 ModifySecurityPolicy 修改 Web 防护配置时: 若未指定 Rules 参数，或 Rules 参数长度为零：清空所有例外规则配置。若 SecurityPolicy 参数中，未指定 ExceptionRules 参数值：保持已有例外规则配置，不做修改。 */
  Rules?: ExceptionRule[];
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

/** CNAME 接入，使用文件验证时所需的信息。 */
declare interface FileVerification {
  /** EdgeOne 后台服务器将通过 Scheme + Host + URL Path 的格式（例如 https://www.example.com/.well-known/teo-verification/z12h416twn.txt）获取文件验证信息。该字段为您需要创建的 URL Path 部分。 */
  Path?: string;
  /** 验证文件的内容。该字段的内容需要您填写至 Path 字段返回的 txt 文件中。 */
  Content?: string;
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
  Switch: string;
  /** 首段包的统计时长，单位是秒，即期望首段包的统计时长是多少，默认5秒。 */
  StatTime?: number;
}

/** 缓存遵循源站配置。 */
declare interface FollowOrigin {
  /** 遵循源站配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 源站未返回 Cache-Control 头时，缓存/不缓存开关。当 Switch 为 on 时，此字段必填，当 Switch 为 off 时，无需填写此字段，若填写则不生效。取值有：on：缓存；off：不缓存。 */
  DefaultCache?: string;
  /** 源站未返回 Cache-Control 头时，使用/不使用默认缓存策略开关。当 DefaultCache 为 on 时，此字段必填，否则此字段不生效；当 DefaultCacheTime 不为 0 时，此字段必须为 off。取值有：on：使用默认缓存策略；off：不使用默认缓存策略。 */
  DefaultCacheStrategy?: string;
  /** 源站未返回 Cache-Control 头时，表示默认的缓存时间，单位为秒，取值：0-315360000。当 DefaultCache 为 on 时，此字段必填，否则此字段不生效；当 DefaultCacheStrategy 为 on 时， 此字段必须为 0。 */
  DefaultCacheTime?: number;
}

/** 访问协议强制 HTTPS 跳转配置。 */
declare interface ForceRedirect {
  /** 访问强制跳转配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 重定向状态码，取值有：301：301跳转；302：302跳转。 */
  RedirectStatusCode?: number;
}

/** 访问协议强制 HTTPS 跳转配置。 */
declare interface ForceRedirectHTTPSParameters {
  /** 访问强制跳转配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 重定向状态码。当 Switch 为 on 时，此字段必填，否则此字段不生效。取值有：301：301跳转；302：302跳转。 */
  RedirectStatusCode?: number;
}

/** 边缘函数详情 */
declare interface Function {
  /** 函数 ID。 */
  FunctionId?: string;
  /** 站点 ID。 */
  ZoneId?: string;
  /** 函数名字。 */
  Name?: string;
  /** 函数描述。 */
  Remark?: string;
  /** 函数内容。 */
  Content?: string;
  /** 函数默认域名。 */
  Domain?: string;
  /** 创建时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  CreateTime?: string;
  /** 修改时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  UpdateTime?: string;
}

/** 边缘函数环境变量 */
declare interface FunctionEnvironmentVariable {
  /** 变量的名称，限制只能包含大小写字母、数字，特殊字符仅支持 @ . - _ ，最大 64 个字节，不支持重复。 */
  Key: string;
  /** 变量的值，限制最大 5000 字节，默认值为空。 */
  Value?: string;
  /** 变量的类型，取值有：string：字符串类型；json：json 对象类型。默认值为：string。 */
  Type?: string;
}

/** 边缘函数触发规则。 */
declare interface FunctionRule {
  /** 规则ID。 */
  RuleId?: string;
  /** 规则条件列表，列表项之间为或关系。 */
  FunctionRuleConditions?: FunctionRuleCondition[];
  /** 函数 ID，命中触发规则条件后执行的函数。 */
  FunctionId?: string;
  /** 规则描述。 */
  Remark?: string;
  /** 函数名称。 */
  FunctionName?: string;
  /** 函数触发规则优先级，数值越大，优先级越高。 */
  Priority?: number;
  /** 创建时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  CreateTime?: string;
  /** 更新时间。时间为世界标准时间（UTC）， 遵循 ISO 8601 标准的日期和时间格式。 */
  UpdateTime?: string;
}

/** 边缘函数触发规则条件。 */
declare interface FunctionRuleCondition {
  /** 边缘函数触发规则条件，该列表内所有项全部满足即判断该条件满足。 */
  RuleConditions: RuleCondition[];
}

/** Grpc配置项 */
declare interface Grpc {
  /** 是否开启 Grpc 配置，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** gRPC 配置项。 */
declare interface GrpcParameters {
  /** gRPC 配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
}

/** HSTS 配置参数。 */
declare interface HSTSParameters {
  /** HSTS 配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 缓存 HSTS 头部时间，单位为秒，取值：1-31536000。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  Timeout?: number;
  /** 是否允许其他子域名继承相同的 HSTS 头部，取值有：on：允许其他子域名继承相同的 HSTS 头部；off：不允许其他子域名继承相同的 HSTS 头部。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  IncludeSubDomains?: string;
  /** 是否允许浏览器预加载 HSTS 头部，取值有：on：允许浏览器预加载 HSTS 头部；off：不允许浏览器预加载 HSTS 头部。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  Preload?: string;
}

/** HTTP2 接入配置参数。 */
declare interface HTTP2Parameters {
  /** HTTP2 接入配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
}

/** HTTP 应答配置参数。 */
declare interface HTTPResponseParameters {
  /** 响应状态码。支持 2XX、4XX、5XX，不包括 499、514、101、301、302、303、509、520-599。 */
  StatusCode?: number;
  /** 响应页面 ID。 */
  ResponsePage?: string;
}

/** 七层回源超时配置。 */
declare interface HTTPUpstreamTimeoutParameters {
  /** HTTP 应答超时时间，单位为秒，取值：5～600。 */
  ResponseTimeout?: number;
}

/** 刷新预热附带的头部信息 */
declare interface Header {
  /** HTTP头部名称。 */
  Name: string;
  /** HTTP头部值。 */
  Value: string;
}

/** HTTP 头部设置规则。 */
declare interface HeaderAction {
  /** HTTP 头部设置方式。取值有：set：设置。变更指定头部参数的取值为设置后的值；del：删除。删除指定的头部参数；add：增加。增加指定的头部参数。 */
  Action: string;
  /** HTTP 头部名称。 */
  Name: string;
  /** HTTP 头部值。当 Action 取值为 set 或者 add 时，该参数必填；当 Action 取值为 del 时，该参数无需填写。 */
  Value?: string;
}

/** 负载均衡实例健康检查策略。 */
declare interface HealthChecker {
  /** 健康检查策略，取值有：HTTP；HTTPS；TCP；UDP；ICMP Ping；NoCheck。注意：NoCheck 表示不启用健康检查策略。 */
  Type: string;
  /** 检查端口。当 Type=HTTP 或 Type=HTTPS 或 Type=TCP 或 Type=UDP 时为必填。 */
  Port?: number;
  /** 检查频率，表示多久发起一次健康检查任务，单位为秒。可取值有：30，60，180，300 或 600。 */
  Interval?: number;
  /** 每一次健康检查的超时时间，若健康检查消耗时间大于此值，则检查结果判定为”不健康“， 单位为秒，默认值为 5s，取值必须小于 Interval。 */
  Timeout?: number;
  /** 健康阈值，表示连续几次健康检查结果为"健康"，则判断源站为"健康"，单位为次，默认 3 次，最小取值 1 次。 */
  HealthThreshold?: number;
  /** 不健康阈值，表示连续几次健康检查结果为"不健康"，则判断源站为"不健康"，单位为次，默认 2 次。 */
  CriticalThreshold?: number;
  /** 该参数仅当 Type=HTTP 或 Type=HTTPS 时有效，表示探测路径，需要填写完整的 host/path，不包含协议部分，例如：www.example.com/test。 */
  Path?: string;
  /** 该参数仅当 Type=HTTP 或 Type=HTTPS 时有效，表示请求方法，取值有：GET；HEAD。 */
  Method?: string;
  /** 该参数仅当 Type=HTTP 或 Type=HTTPS 时有效，表示探测节点向源站发起健康检查时，响应哪些状态码可用于认定探测结果为健康。 */
  ExpectedCodes?: string[];
  /** 该参数仅当 Type=HTTP 或 Type=HTTPS 时有效，表示探测请求携带的自定义 HTTP 请求头，至多可配置 10 个。 */
  Headers?: CustomizedHeader[];
  /** 该参数仅当 Type=HTTP 或 Type=HTTPS 时有效，表示是否启用遵循 301/302 重定向。启用后，301/302 默认为"健康"的状态码，默认跳转 3 次。 */
  FollowRedirect?: string;
  /** 该参数仅当 Type=UDP 时有效，表示健康检查发送的内容。只允许 ASCII 可见字符，最大长度限制 500 个字符。 */
  SendContext?: string;
  /** 该参数仅当 Type=UDP 时有效，表示健康检查期望源站返回结果。只允许 ASCII 可见字符，最大长度限制 500 个字符。 */
  RecvContext?: string;
}

/** Host Header 重写配置参数。 */
declare interface HostHeaderParameters {
  /** 执行动作，取值有：followOrigin：跟随源站域名；custom：自定义。 */
  Action?: string;
  /** Host Header 重写，需要填写完整域名。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  ServerName?: string;
}

/** 访问 URL 重定向 HostName 配置参数。 */
declare interface HostName {
  /** 目标 HostName 配置，取值有：follow：跟随请求；custom：自定义。 */
  Action?: string;
  /** 目标 HostName 自定义取值，最大长度 1024。注意：当 Action 为 custom 时，此字段必填；当 Action 为 follow 时，此字段不生效。 */
  Value?: string;
}

/** Hsts配置 */
declare interface Hsts {
  /** 是否开启，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** MaxAge 数值。单位为秒，最大值为1天。 */
  MaxAge?: number;
  /** 是否包含子域名，取值有：on：开启；off：关闭。 */
  IncludeSubDomains?: string;
  /** 是否开启预加载，取值有：on：开启；off：关闭。 */
  Preload?: string;
}

/** HTTP DDOS防护配置。 */
declare interface HttpDDoSProtection {
  /** 自适应频控的具体配置。 */
  AdaptiveFrequencyControl?: AdaptiveFrequencyControl;
  /** 智能客户端过滤的具体配置。 */
  ClientFiltering?: ClientFiltering;
  /** 流量防盗刷的具体配置。 */
  BandwidthAbuseDefense?: BandwidthAbuseDefense;
  /** 慢速攻击防护的具体配置。 */
  SlowAttackDefense?: SlowAttackDefense;
}

/** 域名 https 加速配置，默认为关闭状态 */
declare interface Https {
  /** http2 配置开关，取值有：on：开启；off：关闭。 */
  Http2?: string;
  /** OCSP 配置开关，取值有：on：开启；off：关闭。 */
  OcspStapling?: string;
  /** Tls 版本设置，取值有：TLSv1：TLSv1版本；TLSV1.1：TLSv1.1版本；TLSV1.2：TLSv1.2版本；TLSv1.3：TLSv1.3版本。修改时必须开启连续的版本。 */
  TlsVersion?: string[];
  /** HSTS 配置。 */
  Hsts?: Hsts | null;
  /** 证书配置。 */
  CertInfo?: ServerCertInfo[] | null;
  /** 申请类型，取值有：apply：托管EdgeOne；none：不托管EdgeOne。不填，默认取值为none。 */
  ApplyType?: string;
  /** 密码套件，取值有：loose-v2023：提供高兼容性，安全性一般，支持 TLS 1.0-1.3 密码套件；general-v2023：提供较高兼容性，安全性中等，支持 TLS 1.2-1.3 密码套件；strict-v2023：提供高安全性能，禁用所有含不安全隐患的加密套件，支持 TLS 1.2-1.3 密码套件。 */
  CipherSuite?: string;
}

/** 存储定时过期时间和对应 IP。 */
declare interface IPExpireInfo {
  /** 定时过期时间，遵循 ISO 8601 标准的日期和时间格式。例如 "2022-01-01T00:00:00+08:00"。 */
  ExpireTime?: string;
  /** IP 列表。仅支持 IP 及 IP 网段。 */
  IPList?: string[];
}

/** IP 网段组 */
declare interface IPGroup {
  /** 组 Id，创建时填 0 即可。 */
  GroupId: number;
  /** 组名称。 */
  Name: string;
  /** IP 组内容，仅支持 IP 及 IP 网段。 */
  Content: string[];
  /** IP 定时过期信息。作为入参：用于为指定的 IP 地址或网段配置定时过期时间。作为出参，包含以下两类信息：当前未到期的定时过期信息：尚未触发的过期配置。一周内已到期的定时过期信息：已触发的过期配置。 */
  IPExpireInfo?: IPExpireInfo[];
}

/** IP 归属信息查询 */
declare interface IPRegionInfo {
  /** IP 地址，IPV4 或 IPV6。 */
  IP?: string;
  /** IP 是否属于 EdgeOne 节点，取值有：yes：该 IP 属于 EdgeOne 节点；no：该 IP 不属于 EdgeOne 节点。 */
  IsEdgeOneIP?: string;
}

/** 源站防护IP白名单 */
declare interface IPWhitelist {
  /** IPv4列表。 */
  IPv4: string[];
  /** IPv6列表。 */
  IPv6: string[];
}

/** IPv6 访问配置。 */
declare interface IPv6Parameters {
  /** IPv6 访问功能配置，取值有：on：开启 IPv6 访问功能；off：关闭 IPv6 访问功能。 */
  Switch?: string;
}

/** 站点验证信息 */
declare interface Identification {
  /** 站点名称。 */
  ZoneName?: string;
  /** 验证子域名。验证站点时，该值为空。验证子域名是为具体子域名。 */
  Domain?: string;
  /** 验证状态，取值有： pending：验证中； finished：验证完成。 */
  Status?: string;
  /** 站点归属权校验：Dns校验信息。 */
  Ascription?: AscriptionInfo;
  /** 域名当前的 NS 记录。 */
  OriginalNameServers?: string[];
  /** 站点归属权校验：文件校验信息。 */
  FileAscription?: FileAscriptionInfo;
}

/** 图片优化配置。 */
declare interface ImageOptimize {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 智能分析规则 */
declare interface IntelligenceRule {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 规则详情。 */
  IntelligenceRuleItems?: IntelligenceRuleItem[];
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
  Switch: string;
  /** 基础管控规则。如果为null，默认使用历史配置。 */
  IpTableRules?: IpTableRule[];
}

/** 自定义规则-基础访问管控配置。 */
declare interface IpTableRule {
  /** 动作，取值有： drop：拦截； trans：放行； monitor：观察。 */
  Action: string;
  /** 根据类型匹配，取值有：ip：客户端 IP 进行匹配；area：客户端 IP 所属地区匹配；asn：客户端所属的自治系统进行匹配；referer：请求头 Referer 进行匹配；ua：请求头 User-Agent 进行匹配；url：请求 URL 进行匹配。 */
  MatchFrom: string;
  /** 规则的匹配方式。取值有： match：匹配，适用于 MatchFrom 为 ip； not_match：不匹配，适用于 MatchFrom 为 ip； include_area：地域包含，适用于 MatchFrom 为 area； not_include_area：地域不包含，适用于 MatchFrom 为 area； asn_match：ASN 包含，适用于 MatchFrom 为 asn； asn_not_match：ASN 不包含，适用于 MatchFrom 为 asn； equal：等于，适用于 MatchFrom 为 ua , referer； not_equal：不等于，适用于 MatchFrom 为 ua , referer； include：通配符匹配，适用于 MatchFrom 为 ua , referer , url； not_include：通配符不匹配，适用于 MatchFrom 为 ua , referer； is_emty：配置内容为空，适用于 MatchFrom 为 ua , referer； not_exists：配置内容不存在，适用于 MatchFrom 为 ua , referer。 */
  Operator?: string;
  /** 规则id。仅出参使用。 */
  RuleID?: number;
  /** 更新时间。仅出参使用。 */
  UpdateTime?: string;
  /** 规则启用状态。取值有： on：启用； off：未启用。当入参缺省时，按 on 取值。 */
  Status?: string;
  /** 规则名。 */
  RuleName?: string;
  /** 匹配内容。支持多值输入。当输入多个匹配值时，请使用英文逗号分隔；当 MatchFrom 为 ua 时，不支持多值输入；当 Operator 为 is_empty 或 not_exists 时，本字段入参值无效。 */
  MatchContent?: string;
}

/** Ipv6访问配置 */
declare interface Ipv6 {
  /** Ipv6 访问功能配置，取值有：on：开启Ipv6访问功能；off：关闭Ipv6访问功能。 */
  Switch: string;
}

/** 视频即时处理配置 */
declare interface JITVideoProcess {
  /** 视频即时处理配置开关，取值有：on：开启；off：关闭。 */
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

/** 四层代理实例。 */
declare interface L4Proxy {
  /** 站点 ID。 */
  ZoneId?: string;
  /** 四层代理实例 ID。 */
  ProxyId?: string;
  /** 四层代理实例名称。 */
  ProxyName?: string;
  /** 四层代理实例的加速区域。 mainland：中国大陆可用区；overseas： 全球可用区（不含中国大陆）； global：全球可用区。 */
  Area?: string;
  /** 接入 CNAME。 */
  Cname?: string;
  /** 开启固定 IP 后，该值会返回对应的接入 IP；未开启时，该值为空。 */
  Ips?: string[];
  /** 四层代理实例状态。online：已启用；offline：已停用；progress：部署中；	stopping：停用中；banned：已封禁；fail：部署失败/停用失败。 */
  Status?: string;
  /** 是否开启 IPv6 访问。 on：开启； off：关闭。 */
  Ipv6?: string;
  /** 是否开启固定 IP。 on：开启； off：关闭。 */
  StaticIp?: string;
  /** 是否开启中国大陆网络优化。 on：开启 off：关闭 */
  AccelerateMainland?: string;
  /** 安全防护配置。 */
  DDosProtectionConfig?: DDosProtectionConfig | null;
  /** 四层代理实例下的转发规则数量。 */
  L4ProxyRuleCount?: number;
  /** 最新变更时间。 */
  UpdateTime?: string;
}

/** 四层远程鉴权信息 */
declare interface L4ProxyRemoteAuth {
  /** 四层远程鉴权开关，取值有：on：表示开启;off：表示关闭。 */
  Switch: string;
  /** 远程鉴权服务地址，格式为: domain/ip:port。例：example.auth.com:8888 */
  Address: string;
  /** 远程鉴权服务不可访问后，经过四层转发规则默认回源行为，取值有：reject：表示进行拦截，拒绝访问;allow：表示允许通过。 */
  ServerFaultyBehavior: string;
}

/** 四层代理转发规则详情。 */
declare interface L4ProxyRule {
  /** 转发规则 ID。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数请勿填写；在 ModifyL4ProxyRules 作为入参使用时，该参数必填。 */
  RuleId?: string;
  /** 转发协议。取值有：TCP：TCP 协议；UDP：UDP 协议。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。 */
  Protocol?: string;
  /** 转发端口，支持按照以下形式填写：单端口，如：80；端口段，如：81-85。表示 81、82、83、84、85 五个端口。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。 */
  PortRange?: string[];
  /** 源站类型，取值有：IP_DOMAIN：IP/域名源站；ORIGIN_GROUP：源站组；LB：负载均衡，当前仅白名单开放。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。 */
  OriginType?: string;
  /** 源站地址：当 OriginType 为 IP_DOMAIN 时，填写 IP 或域名，如 8.8.8.8 或 test.com ；当 OriginType 为 ORIGIN_GROUP 时，填写源站组 ID，如 og-537y24vf5b41；当 OriginType 为 LB 时，填写负载均衡实例 ID，如 lb-2qwk30xf7s9g。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。 */
  OriginValue?: string[];
  /** 源站端口，支持按照以下形式填写：单端口，如：80；端口段，如：81-85，表示 81、82、83、84、85 五个端口。填写端口段时，则需要与转发端口段长度保持一致，例如转发端口：80-90，则转发端口：90-100。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数必填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写时表示不修改。 */
  OriginPortRange?: string;
  /** 传递客户端 IP 的形式，取值有：TOA：TOA（仅 Protocol = TCP 时可选）； PPV1：Proxy Protocol 传递，协议版本 V1（仅 Protocol = TCP 时可选）；PPV2：Proxy Protocol 传递，协议版本 V2； SPP：Simple Proxy Protocol 传递，（仅 Protocol = UDP 时可选）； OFF：不传递。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数选填，不填写时默认为 OFF；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写表示不修改。 */
  ClientIPPassThroughMode?: string;
  /** 是否开启会话保持，取值有：on：开启；off：关闭。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数选填，不填写时默认为 off；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写表示不修改。 */
  SessionPersist?: string;
  /** 会话保持时间，取值范围为 30-3600，单位为秒。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数选填，仅当 SessionPersist = on 时，该值才会生效，且当 SessionPersist = on ，该值不填写默认为 3600；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写表示不修改。 */
  SessionPersistTime?: number;
  /** 规则标签。可输入1-50 个任意字符。注意：L4ProxyRule 在 CreateL4ProxyRules 作为入参使用时，该参数选填；在 ModifyL4ProxyRules 作为入参使用时，该参数选填，不填写表示不修改。 */
  RuleTag?: string;
  /** 规则状态，取值有：online：已启用；offline：已停用；progress：部署中；stopping：停用中；fail：部署失败/停用失败。注意：L4ProxyRule 在 CreateL4ProxyRules、ModifyL4ProxyRules 作为入参使用时，该参数请勿填写。 */
  Status?: string;
  /** BuID。 */
  BuId?: string;
  /** 远程鉴权信息。注意：RemoteAuth 在 CreateL4ProxyRules 或 ModifyL4ProxyRules 不可作为入参使用，如有传此参数，会忽略。在 DescribeL4ProxyRules 返回为空时，表示没有开启远程鉴权。 */
  RemoteAuth?: L4ProxyRemoteAuth | null;
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

/** 负载均衡实例信息。 */
declare interface LoadBalancer {
  /** 实例 ID。 */
  InstanceId?: string;
  /** 实例名称，可输入 1-200 个字符，允许字符为 a-z，A-Z，0-9，_，-。 */
  Name?: string;
  /** 实例类型，取值有：HTTP：HTTP 专用型，支持添加 HTTP 专用型和通用型源站组，仅支持被站点加速相关服务引用（如域名服务和规则引擎）；GENERAL：通用型，仅支持添加通用型源站组，能被站点加速服务（如域名服务和规则引擎）和四层代理引用。 */
  Type?: string;
  /** 健康检查策略。详情请参考 [健康检查策略介绍](https://cloud.tencent.com/document/product/1552/104228)。 */
  HealthChecker?: HealthChecker;
  /** 源站组间的流量调度策略，取值有：Pritory：按优先级顺序进行故障转移 。 */
  SteeringPolicy?: string;
  /** 实际访问某源站失败时的请求重试策略，详情请参考 [请求重试策略介绍](https://cloud.tencent.com/document/product/1552/104227)，取值有：OtherOriginGroup：单次请求失败后，请求优先重试下一优先级源站组；OtherRecordInOriginGroup：单次请求失败后，请求优先重试同源站组内的其他源站。 */
  FailoverPolicy?: string;
  /** 源站组健康状态。 */
  OriginGroupHealthStatus?: OriginGroupHealthStatus[];
  /** 负载均衡状态，取值有：Pending：部署中；Deleting：删除中；Running：已生效。 */
  Status?: string;
  /** 该负载均衡实例绑的定四层层代理实例的列表。 */
  L4UsedList?: string[];
  /** 该负载均衡实例绑定的七层域名列表。 */
  L7UsedList?: string[];
}

/** 实时日志投递的输出格式。您可以直接通过 FormatType 参数使用指定预设日志输出格式（JSON Lines / csv），也可以在预设日志输出格式基础上，通过其他参数来自定义变体输出格式。 */
declare interface LogFormat {
  /** 日志投递的预设输出格式类型，取值有：json：使用预设日志输出格式 JSON Lines，单条日志中的字段以键值对方式呈现；csv：使用预设日志输出格式 csv，单条日志中仅呈现字段值，不呈现字段名称。 */
  FormatType: string;
  /** 在每个日志投递批次之前添加的字符串。每个日志投递批次可能包含多条日志记录。 */
  BatchPrefix?: string;
  /** 在每个日志投递批次后附加的字符串。 */
  BatchSuffix?: string;
  /** 在每条日志记录之前添加的字符串。 */
  RecordPrefix?: string;
  /** 在每条日志记录后附加的字符串。 */
  RecordSuffix?: string;
  /** 插入日志记录之间作为分隔符的字符串，取值有：\n：换行符；\t：制表符；，：半角逗号。 */
  RecordDelimiter?: string;
  /** 单条日志记录内，插入字段之间作为分隔符的字符串，取值有：\t：制表符；，：半角逗号；;：半角分号。 */
  FieldDelimiter?: string;
}

/** 托管规则的项配置 */
declare interface ManagedRuleAction {
  /** 托管规则组下的具体项，用于改写此单条规则项配置的内容，具体参考产品文档。 */
  RuleId: string;
  /** RuleId 中指定托管规则项的处置动作。 SecurityAction 的 Name 取值支持：Deny：拦截，响应拦截页面；Monitor：观察，不处理请求记录安全事件到日志中；Disabled：未启用，不扫描请求跳过该规则。 */
  Action: SecurityAction;
}

/** 托管规则自动更新选项 */
declare interface ManagedRuleAutoUpdate {
  /** 是否开启自动更新至最新版本。取值有：on：开启off：关闭 */
  AutoUpdateToLatestVersion: string;
  /** 当前使用的版本，格式符合ISO 8601标准，如2023-12-21T12:00:32Z，默认为空，仅出参。 */
  RulesetVersion?: string;
}

/** 托管规则详情 */
declare interface ManagedRuleDetail {
  /** 托管规则Id。 */
  RuleId?: string;
  /** 托管规则的防护级别。取值有：low：低风险，此规则风险较低，适用于非常严格控制环境下的访问场景，该等级规则可能造成较多的误报；medium：中风险，表示此条规则风险正常，适用较为严格的防护场景；high：高风险，表示此条规则风险较高，大多数场景不会产生误报；extreme：超高风险，表示此条规则风险极高，基本不会产生误报； */
  RiskLevel?: string;
  /** 规则描述。 */
  Description?: string;
  /** 规则标签。部分类型的规则不存在标签。 */
  Tags?: string[];
  /** 规则所属版本。 */
  RuleVersion?: string;
}

/** 托管规则组配置。 */
declare interface ManagedRuleGroup {
  /** 托管规则的组名称，未指定配置的规则分组将按照默认配置处理，GroupId 的具体取值参考产品文档。 */
  GroupId: string;
  /** 托管规则组的防护级别。取值有：loose：宽松，只包含超高风险规则，此时需配置Action，且RuleActions配置无效；normal：正常，包含超高风险和高风险规则，此时需配置Action，且RuleActions配置无效；strict：严格，包含超高风险、高风险和中风险规则，此时需配置Action，且RuleActions配置无效；extreme：超严格，包含超高风险、高风险、中风险和低风险规则，此时需配置Action，且RuleActions配置无效；custom：自定义，精细化策略，按单条规则配置处置方式，此时Action字段无效，使用RuleActions配置单条规则的精细化策略。 */
  SensitivityLevel: string;
  /** 托管规则组的处置动作。SecurityAction 的 Name 取值支持：Deny：拦截，响应拦截页面；Monitor：观察，不处理请求记录安全事件到日志中；Disabled：未启用，不扫描请求跳过该规则。 */
  Action: SecurityAction;
  /** 托管规则组下规则项的具体配置，仅在 SensitivityLevel 为 custom 时配置生效。 */
  RuleActions?: ManagedRuleAction[];
  /** 托管规则组信息，仅出参。 */
  MetaData?: ManagedRuleGroupMeta;
}

/** 托管规则组信息 */
declare interface ManagedRuleGroupMeta {
  /** 托管规则组描述，仅出参。 */
  GroupDetail?: string;
  /** 托管规则组名称，仅出参。 */
  GroupName?: string;
  /** 当前托管规则组下的所有子规则信息，仅出参。 */
  RuleDetails?: ManagedRuleDetail[];
}

/** Web安全的托管规则 */
declare interface ManagedRules {
  /** 托管规则是否开启。取值有：on：开启，所有托管规则按配置生效；off：关闭，所有托管规则不生效。 */
  Enabled: string;
  /** 评估模式是否开启，仅在 Enabled 参数为 on 时有效。取值有：on：开启，表示所有托管规则以观察模式生效；off：关闭，表示所有托管规则以实际配置生效。 */
  DetectionOnly: string;
  /** 托管规则语义分析选项是否开启，仅在 Enabled 参数为 on 时有效。取值有：on：开启，对请求进行语义分析后进行处理；off：关闭，对请求不进行语义分析，直接进行处理。 默认为 off。 */
  SemanticAnalysis?: string;
  /** 托管规则自动更新选项。 */
  AutoUpdate?: ManagedRuleAutoUpdate;
  /** 托管规则组的配置。如果此结构传空数组或 GroupId 未包含在列表内将按照默认方式处理。 */
  ManagedRuleGroups?: ManagedRuleGroup[];
}

/** 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态 */
declare interface MaxAge {
  /** 是否遵循源站，取值有：on：遵循源站，忽略MaxAge 时间设置；off：不遵循源站，使用MaxAge 时间设置。 */
  FollowOrigin?: string;
  /** MaxAge 时间设置，单位秒，最大365天。注意：时间为0，即不缓存。 */
  MaxAgeTime?: number;
}

/** 浏览器缓存 TTL 配置参数。 */
declare interface MaxAgeParameters {
  /** 遵循源站 Cache-Control 开关，取值有：on：遵循源站，忽略 CacheTime 时间设置；off：不遵循源站，使用 CacheTime 时间设置。 */
  FollowOrigin?: string;
  /** 自定义缓存时间数值，单位为秒，取值：0～315360000。注意：当 FollowOrigin 为 off 时，表示不遵循源站，使用 CacheTime 设置缓存时间，否则此字段不生效。 */
  CacheTime?: number;
}

/** 正文传输最小速率阈值的具体配置。 */
declare interface MinimalRequestBodyTransferRate {
  /** 正文传输最小速率阈值，单位仅支持bps。 */
  MinimalAvgTransferRateThreshold: string;
  /** 正文传输最小速率统计时间范围，取值有：10s：10秒；30s：30秒；60s：60秒；120s：120秒。 */
  CountingPeriod: string;
  /** 正文传输最小速率阈值是否开启。取值有：on：开启；off：关闭。 */
  Enabled: string;
}

/** 修改源站配置参数。 */
declare interface ModifyOriginParameters {
  /** 源站类型。取值有：IPDomain：IPV4、IPV6 或域名类型源站；OriginGroup：源站组类型源站；LoadBalance：负载均衡，该功能内测中，如需使用，请提工单或联系智能客服；COS：腾讯云 COS 对象存储源站；AWSS3：支持 AWS S3 协议的所有对象存储源站。 */
  OriginType?: string;
  /** 源站地址，根据 OriginType 的取值分为以下情况：当 OriginType = IPDomain 时，该参数请填写 IPV4、IPV6 地址或域名；当 OriginType = COS 时，该参数请填写 COS 桶的访问域名；当 OriginType = AWSS3，该参数请填写 S3 桶的访问域名；当 OriginType = OriginGroup 时，该参数请填写源站组 ID；当 OriginType = LoadBalance 时，该参数请填写负载均衡实例 ID，该功能当前仅白名单开放。 */
  Origin?: string;
  /** 回源协议配置。当 OriginType 取值为 IPDomain、OriginGroup、LoadBalance 时该参数必填。取值有：http：使用 HTTP 协议；https：使用 HTTPS 协议；follow：协议跟随。 */
  OriginProtocol?: string;
  /** HTTP 回源端口，取值范围 1～65535。当回源协议 OriginProtocol 为 http 或者 follow 时该参数必填。 */
  HTTPOriginPort?: number;
  /** HTTPS 回源端口，取值范围 1～65535。当回源协议 OriginProtocol 为 https 或者 follow 时该参数必填。 */
  HTTPSOriginPort?: number;
  /** 指定是否允许访问私有对象存储源站，当源站类型 OriginType = COS 或 AWSS3 时该参数必填，取值有：on：使用私有鉴权；off：不使用私有鉴权。 */
  PrivateAccess?: string;
  /** 私有鉴权使用参数，该参数仅当 OriginType = AWSS3 且 PrivateAccess = on 时会生效。 */
  PrivateParameters?: OriginPrivateParameters | null;
}

/** 修改 HTTP 回源请求头配置参数。 */
declare interface ModifyRequestHeaderParameters {
  /** HTTP 头部设置规则列表。 */
  HeaderActions?: HeaderAction[] | null;
}

/** 修改 HTTP 节点响应头配置参数。 */
declare interface ModifyResponseHeaderParameters {
  /** HTTP 回源头部规则列表。 */
  HeaderActions?: HeaderAction[] | null;
}

/** HTTPS 双向认证。 */
declare interface MutualTLS {
  /** 双向认证配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 双向认证证书列表。注意：MutualTLS 在 ModifyHostsCertificate 作为入参使用时，该参数传入对应证书的 CertId 即可。您可以前往 [SSL 证书列表](https://console.cloud.tencent.com/ssl) 查看 CertId。 */
  CertInfos?: CertificateInfo[];
}

/** 不缓存配置 */
declare interface NoCache {
  /** 不缓存配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 规则引擎常规类型的动作 */
declare interface NormalAction {
  /** 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。 */
  Action: string;
  /** 参数。 */
  Parameters: RuleNormalActionParams[];
}

/** NS 接入，切换 DNS 服务器所需的信息。 */
declare interface NsVerification {
  /** NS 接入时，分配给用户的 DNS 服务器地址，需要将域名的 NameServer 切换至该地址。 */
  NameServers?: string[];
}

/** OCSP 装订配置参数。 */
declare interface OCSPStaplingParameters {
  /** OCSP 装订配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
}

/** 离线缓存是否开启 */
declare interface OfflineCache {
  /** 离线缓存是否开启，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 离线缓存是否开启。 */
declare interface OfflineCacheParameters {
  /** 离线缓存开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
}

/** 源站配置。 */
declare interface Origin {
  /** 主源站列表。 */
  Origins?: string[];
  /** 备源站列表。 */
  BackupOrigins?: string[];
  /** 回源协议配置，取值有：http：强制 http 回源；follow：协议跟随回源；https：强制 https 回源。 */
  OriginPullProtocol?: string;
  /** 源站为腾讯云 COS 时，是否为私有访问 bucket，取值有：on：私有访问；off：公共访问。 */
  CosPrivateAccess?: string;
}

/** 加速域名源站信息。 */
declare interface OriginDetail {
  /** 源站类型，取值有：IP_DOMAIN：IPV4、IPV6 或域名类型源站；COS：腾讯云 COS 对象存储源站；AWS_S3：AWS S3 对象存储源站；ORIGIN_GROUP：源站组类型源站；VOD：云点播；SPACE：源站卸载，当前仅白名单开放；LB：负载均衡，当前仅白名单开放。 */
  OriginType?: string;
  /** 源站地址，根据 OriginType 的取值分为以下情况：当 OriginType = IP_DOMAIN 时，该参数为 IPv4、IPv6 地址或域名；当 OriginType = COS 时，该参数为 COS 桶的访问域名；当 OriginType = AWS_S3，该参数为 S3 桶的访问域名；当 OriginType = ORIGIN_GROUP 时，该参数为源站组 ID；当 OriginType = VOD 时，该参数请填写云点播应用 ID ； */
  Origin?: string;
  /** 备用源站组 ID，该参数仅在 OriginType = ORIGIN_GROUP 且配置了备源站组时会生效。 */
  BackupOrigin?: string;
  /** 主源源站组名称，当 OriginType = ORIGIN_GROUP 时该参数会返回值。 */
  OriginGroupName?: string;
  /** 备用源站组名称，该参数仅当 OriginType = ORIGIN_GROUP 且配置了备用源站组时会生效。 */
  BackOriginGroupName?: string;
  /** 指定是否允许访问私有对象存储源站，该参数仅当源站类型OriginType = COS 或 AWS_S3 时会生效，取值有：on：使用私有鉴权；off：不使用私有鉴权。不填写，默认值为 off。 */
  PrivateAccess?: string;
  /** 私有鉴权使用参数，该参数仅当源站类型 PrivateAccess = on 时会生效。 */
  PrivateParameters?: PrivateParameter[] | null;
  /** 当前配置的回源 HOST 头。 */
  HostHeader?: string;
  /** MO 子应用 ID */
  VodeoSubAppId?: number;
  /** MO 分发范围，取值有： All：全部 Bucket：存储桶 */
  VodeoDistributionRange?: string;
  /** MO 存储桶 ID，分发范围(DistributionRange)为存储桶(Bucket)时必填 */
  VodeoBucketId?: string;
  /** 云点播回源范围，当 OriginType = VOD 时该参数会返回值。取值有:all：当前源站对应的云点播应用内所有文件，默认值为 all； bucket：当前源站对应的云点播应用下指定某一个存储桶内的文件。通过参数 VodBucketId 来指定存储桶。 */
  VodOriginScope?: string;
  /** 云点播存储桶 ID，该参数当 OriginType = VOD 且 VodOriginScope = bucket 时必填。数据来源：云点播专业版应用下存储桶的存储 ID 。 */
  VodBucketId?: string;
}

/** 源站组信息 */
declare interface OriginGroup {
  /** 源站组ID。 */
  GroupId?: string;
  /** 源站组名称。 */
  Name?: string;
  /** 源站组类型，取值有：GENERAL：通用型源站组；HTTP： HTTP专用型源站组。 */
  Type?: string;
  /** 源站记录信息。 */
  Records?: OriginRecord[];
  /** 源站组被引用实例列表。 */
  References?: OriginGroupReference[];
  /** 源站组创建时间。 */
  CreateTime?: string;
  /** 源站组更新时间。 */
  UpdateTime?: string;
  /** 回源Host Header。 */
  HostHeader?: string;
}

/** 源站组健康状态。 */
declare interface OriginGroupHealthStatus {
  /** 源站组 ID。 */
  OriginGroupID?: string;
  /** 源站组名。 */
  OriginGroupName?: string;
  /** 源站组类型，取值有：HTTP：HTTP 专用型；GENERAL：通用型。 */
  OriginType?: string;
  /** 优先级。 */
  Priority?: string;
  /** 源站组里各源站的健康状态。 */
  OriginHealthStatus?: OriginHealthStatus[];
}

/** 源站组健康状态详情。 */
declare interface OriginGroupHealthStatusDetail {
  /** 源站组 ID。 */
  OriginGroupId?: string;
  /** 根据所有探测区域的结果综合决策出来的源站组下各个源站的健康状态。超过一半的地域判定该源站不健康，则对应状态为不健康，否则为健康。 */
  OriginHealthStatus?: OriginHealthStatus[];
  /** 各个健康检查区域下源站的健康状态。 */
  CheckRegionHealthStatus?: CheckRegionHealthStatus[];
}

/** 负载均衡实例中需要绑定的源站组和优先级关系。 */
declare interface OriginGroupInLoadBalancer {
  /** 优先级，填写格式为 "priority_" + "数字"，最高优先级为 "priority_1"。参考取值有：priority_1：第一优先级；priority_2：第二优先级；priority_3：第三优先级。其他优先级可以将数字递增，最多可以递增至 "priority_10"。 */
  Priority: string;
  /** 源站组 ID。 */
  OriginGroupId: string;
}

/** 源站组引用服务。 */
declare interface OriginGroupReference {
  /** 引用服务类型，取值有：AccelerationDomain: 加速域名；RuleEngine: 规则引擎；Loadbalance: 负载均衡；ApplicationProxy: 四层代理。 */
  InstanceType?: string;
  /** 引用类型的实例ID。 */
  InstanceId?: string;
  /** 应用类型的实例名称。 */
  InstanceName?: string;
}

/** 源站组里的源站健康状态。 */
declare interface OriginHealthStatus {
  /** 源站。 */
  Origin?: string;
  /** 源站健康状态，取值有：Healthy：健康；Unhealthy：不健康；Undetected：未探测到数据。 */
  Healthy?: string;
}

/** 加速域名源站信息。 */
declare interface OriginInfo {
  /** 源站类型，取值有：IP_DOMAIN：IPV4、IPV6 或域名类型源站；COS：腾讯云 COS 对象存储源站；AWS_S3：AWS S3 对象存储源站；ORIGIN_GROUP：源站组类型源站； VOD：云点播；SPACE：源站卸载，当前仅白名单开放；LB：负载均衡，当前仅白名单开放。 */
  OriginType: string;
  /** 源站地址，根据 OriginType 的取值分为以下情况：当 OriginType = IP_DOMAIN 时，该参数请填写 IPv4、IPv6 地址或域名；当 OriginType = COS 时，该参数请填写 COS 桶的访问域名；当 OriginType = AWS_S3，该参数请填写 S3 桶的访问域名；当 OriginType = ORIGIN_GROUP 时，该参数请填写源站组 ID；当 OriginType = VOD 时，该参数请填写云点播应用 ID ；当 OriginType = LB 时，该参数请填写负载均衡实例 ID，该功能当前仅白名单开放；当 OriginType = SPACE 时，该参数请填写源站卸载空间 ID，该功能当前仅白名单开放。 */
  Origin: string;
  /** 备用源站组 ID，该参数仅在 OriginType = ORIGIN_GROUP 时生效，该字段为旧版能力，调用后控制台无法进行配置修改，如需使用请提交工单咨询。 */
  BackupOrigin?: string;
  /** 指定是否允许访问私有对象存储源站，该参数仅当源站类型 OriginType = COS 或 AWS_S3 时会生效，取值有：on：使用私有鉴权；off：不使用私有鉴权。不填写时，默认值为off。 */
  PrivateAccess?: string;
  /** 私有鉴权使用参数，该参数仅当源站类型 PrivateAccess = on 时会生效。 */
  PrivateParameters?: PrivateParameter[];
  /** 自定义回源 HOST 头，该参数仅当 OriginType=IP_DOMAIN 时生效。如果 OriginType=COS 或 AWS_S3 时，回源 HOST 头将与源站域名保持一致。如果OriginType=ORIGIN_GROUP 或 LB 时，回源 HOST 头遵循源站组内配置，如果没有配置则默认为加速域名。如果 OriginType=VOD 或 SPACE 时，无需配置该头部，按对应的回源域名生效。 */
  HostHeader?: string;
  /** VODEO 子应用 ID。该参数当 OriginType = VODEO 时必填。 */
  VodeoSubAppId?: number;
  /** VODEO 分发范围，该参数当 OriginType = VODEO 时必填。取值有： All：当前应用下所有存储桶； Bucket：指定的某一个存储桶。 */
  VodeoDistributionRange?: string;
  /** VODEO 存储桶 ID，该参数当 OriginType = VODEO 且 VodeoDistributionRange = Bucket 时必填。 */
  VodeoBucketId?: string;
  /** 云点播回源范围，该参数当 OriginType = VOD 时生效。取值有：all：当前源站对应的云点播应用内所有文件，默认值为 all；bucket：当前源站对应的云点播应用下指定某一个存储桶内的文件。通过参数 VodBucketId 来指定存储桶。 */
  VodOriginScope?: string;
  /** VOD 存储桶 ID，该参数当 OriginType = VOD 且 VodOriginScope = bucket 时必填。数据来源：云点播专业版应用下存储桶的存储 ID 。 */
  VodBucketId?: string;
}

/** 对象存储源站私有鉴权参数。 */
declare interface OriginPrivateParameters {
  /** 鉴权参数 Access Key ID。 */
  AccessKeyId: string;
  /** 鉴权参数 Secret Access Key。 */
  SecretAccessKey: string;
  /** 鉴权版本。取值有：v2：v2版本；v4：v4版本。 */
  SignatureVersion: string;
  /** 存储桶地域。 */
  Region?: string;
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
  /** 源站类型，取值有：IP_DOMAIN：IPV4、IPV6、域名类型源站；COS：COS源。AWS_S3：AWS S3对象存储源站。 */
  Type?: string;
  /** 源站记录ID。 */
  RecordId?: string;
  /** 源站权重，取值为0-100, 不填表示不设置权重，由系统自由调度，填0表示权重为0, 流量将不会调度到此源站。 */
  Weight?: number | null;
  /** 是否私有鉴权，当源站类型 RecordType=COS/AWS_S3 时生效，取值有：true：使用私有鉴权；false：不使用私有鉴权。不填写，默认值为：false。 */
  Private?: boolean;
  /** 私有鉴权参数，当源站类型Private=true时有效。 */
  PrivateParameters?: PrivateParameter[];
}

/** 该结构体表示各种场景、模式下，用于验证用户对站点域名的归属权内容。 */
declare interface OwnershipVerification {
  /** CNAME 、无域名接入时，使用 DNS 解析验证时所需的信息。详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。 */
  DnsVerification?: DnsVerification | null;
  /** CNAME 、无域名接入时，使用文件验证时所需的信息。详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。 */
  FileVerification?: FileVerification | null;
  /** NS 接入，切换 DNS 服务器所需的信息。详情参考 [修改 DNS 服务器](https://cloud.tencent.com/document/product/1552/90452)。 */
  NsVerification?: NsVerification | null;
}

/** 例外规则的详细模块配置。 */
declare interface PartialModule {
  /** 模块名称，取值为：waf：托管规则。 */
  Module?: string;
  /** 模块下的需要例外的具体规则ID列表。 */
  Include?: number[];
}

/** 套餐信息 */
declare interface Plan {
  /** 套餐类型。取值有：plan-trial: 试用版套餐；plan-personal: 个人版套餐；plan-basic: 基础版套餐；plan-standard: 标准版套餐；plan-enterprise-v2: 企业版套餐；plan-enterprise-model-a: 企业版 Model A 套餐。plan-enterprise: 旧企业版套餐。 */
  PlanType?: string;
  /** 套餐 ID。形如 edgeone-2y041pblwaxe。 */
  PlanId?: string;
  /** 服务区域，取值有：mainland: 中国大陆；overseas: 全球（不包括中国大陆)；global: 全球（包括中国大陆)。 */
  Area?: string;
  /** 套餐状态，取值有：normal：正常状态；expiring-soon：即将到期状态；expired：到期状态；isolated：隔离状态；overdue-isolated：欠费隔离状态。 */
  Status?: string;
  /** 付费类型，取值有：0: 后付费；1: 预付费。 */
  PayMode?: number;
  /** 套餐绑定的站点信息，包括站点id和站点名称，站点状态。 */
  ZonesInfo?: ZoneInfo[];
  /** 套餐内智能加速请求数规格，单位：次。 */
  SmartRequestCapacity?: number;
  /** 套餐内VAU规格，单位：个。 */
  VAUCapacity?: number;
  /** 套餐内内容加速流量规格，单位：字节。 */
  AccTrafficCapacity?: number;
  /** 套餐内智能加速流量规格，单位：字节。 */
  SmartTrafficCapacity?: number;
  /** 套餐内DDoS防护流量规格，单位：字节。 */
  DDoSTrafficCapacity?: number;
  /** 套餐内安全流量规格，单位：字节。 */
  SecTrafficCapacity?: number;
  /** 套餐内安全请求数规格，单位：次。 */
  SecRequestCapacity?: number;
  /** 套餐内四层加速流量规格，单位：字节。 */
  L4TrafficCapacity?: number;
  /** 套餐内中国大陆网络优化流量规格，单位：字节。 */
  CrossMLCTrafficCapacity?: number;
  /** 套餐是否允许绑定新站点，取值有：true: 允许绑定新站点；false: 不允许绑定新站点。 */
  Bindable?: string;
  /** 套餐生效时间。 */
  EnabledTime?: string;
  /** 套餐过期时间。 */
  ExpiredTime?: string;
  /** 套餐所支持的功能，取值有：ContentAcceleration：内容加速功能；SmartAcceleration：智能加速功能；L4：四层加速功能；Waf：高级 Web 防护；QUIC：QUIC功能；CrossMLC：中国大陆网络优化功能；ProcessMedia：媒体处理功能；L4DDoS：四层DDoS防护功能；L7DDoS功能只会出现以下所有规格中的一项L7DDoS.CM30G；七层DDoS防护功能-中国大陆30G保底带宽规格；L7DDoS.CM60G；七层DDoS防护功能-中国大陆60G保底带宽规格；L7DDoS.CM100G；七层DDoS防护功能-中国大陆100G保底带宽规格；L7DDoS.Anycast300G；七层DDoS防护功能-中国大陆以外Anycast300G保底带宽规格；L7DDoS.AnycastUnlimited；七层DDoS防护功能-中国大陆以外Anycast无上限全力防护规格；L7DDoS.CM30G_Anycast300G；七层DDoS防护功能-中国大陆30G保底带宽规格，中国大陆以外Anycast300G保底带宽规格；L7DDoS.CM60G_Anycast300G；七层DDoS防护功能-中国大陆60G保底带宽规格，中国大陆以外Anycast300G保底带宽规格；L7DDoS.CM100G_Anycast300G；七层DDoS防护功能-中国大陆100G保底带宽规格，中国大陆以外Anycast300G保底带宽规格；L7DDoS.CM30G_AnycastUnlimited；七层DDoS防护功能-中国大陆30G保底带宽规格，中国大陆以外Anycast无上限全力防护规格；L7DDoS.CM60G_AnycastUnlimited；七层DDoS防护功能-中国大陆60G保底带宽规格，中国大陆以外Anycast无上限全力防护规格；L7DDoS.CM100G_AnycastUnlimited；七层DDoS防护功能-中国大陆100G保底带宽规格，中国大陆以外Anycast无上限全力防护规格； */
  Features?: string[];
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
  MaxSize?: number;
}

/** POST 请求上传文件流式传输最大限制。 */
declare interface PostMaxSizeParameters {
  /** 是否开启 POST 请求上传文件限制，单位为 Byte，平台默认为限制为 32 * 220 Byte，取值有：on：开启限制；off：关闭限制。 */
  Switch?: string;
  /** POST 请求上传文件流式传输最大限制，单位为 Byte，取值：1 * 220 Byte～500 * 220 Byte。 */
  MaxSize?: number;
}

/** 预付费套餐计费参数 */
declare interface PrepaidPlanParam {
  /** 订阅预付费套餐的周期，单位：月，取值有：1，2，3，4，5，6，7，8，9，10，11，12，24，36。不填写使用默认值 1。 */
  Period?: number;
  /** 预付费套餐的自动续费标志，取值有： on：开启自动续费； off：不开启自动续费。不填写使用默认值 off，自动续费时，默认续费1个月。 */
  RenewFlag?: string;
}

/** 对象存储源站私有鉴权参数 */
declare interface PrivateParameter {
  /** 私有鉴权参数名称，取值有：AccessKeyId：鉴权参数 Access Key ID；SecretAccessKey：鉴权参数 Secret Access Key；SignatureVersion：鉴权版本，v2 或者 v4；Region：存储桶地域。 */
  Name: string;
  /** 私有鉴权参数值。 */
  Value: string;
}

/** QUIC 配置项。 */
declare interface QUICParameters {
  /** QUIC 配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
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
  Action?: string;
  /** 使用/排除的url参数数组。 */
  Value?: string[];
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

/** 分片回源配置参数。 */
declare interface RangeOriginPullParameters {
  /** 分片回源开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
}

/** 速率限制规则 */
declare interface RateLimitConfig {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 速率限制-用户规则列表。如果为null，默认使用历史配置。 */
  RateLimitUserRules?: RateLimitUserRule[];
  /** 速率限制模板功能。如果为null，默认使用历史配置。 */
  RateLimitTemplate?: RateLimitTemplate;
  /** 智能客户端过滤。如果为null，默认使用历史配置。 */
  RateLimitIntelligence?: RateLimitIntelligence;
  /** 速率限制-托管定制规则。如果为null，默认使用历史配置。 */
  RateLimitCustomizes?: RateLimitUserRule[];
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
  Mode: string;
  /** 唯一id。 */
  ID: number;
  /** 模板处置方式，取值有：alg：JavaScript挑战；monitor：观察。 */
  Action: string;
  /** 惩罚时间，取值范围0-2天，单位秒。 */
  PunishTime: number;
  /** 统计阈值，单位是次，取值范围0-4294967294。 */
  Threshold: number;
  /** 统计周期，取值范围0-120秒。 */
  Period: number;
}

/** RateLimit规则 */
declare interface RateLimitUserRule {
  /** 速率限制统计阈值，单位是次，取值范围0-4294967294。 */
  Threshold: number;
  /** 速率限制统计时间，取值范围 10/20/30/40/50/60 单位是秒。 */
  Period: number;
  /** 规则名，只能以英文字符，数字，下划线组合，且不能以下划线开头。 */
  RuleName: string;
  /** 处置动作，取值有： monitor：观察； drop：拦截； redirect：重定向； page：指定页面；alg：JavaScript 挑战。 */
  Action: string;
  /** 惩罚时长，0-2天。 */
  PunishTime: number;
  /** 处罚时长单位，取值有：second：秒；minutes：分钟；hour：小时。 */
  PunishTimeUnit: string;
  /** 规则状态，取值有：on：生效；off：不生效。默认 on 生效。 */
  RuleStatus: string;
  /** 规则详情。 */
  AclConditions: AclCondition[];
  /** 规则权重，取值范围0-100。 */
  RulePriority: number;
  /** 规则 Id。仅出参使用。 */
  RuleID?: number;
  /** 过滤词，取值有：sip：客户端 ip。默认为空字符串。 */
  FreqFields?: string[];
  /** 更新时间。仅出参使用。修改时默认为当前时间。 */
  UpdateTime?: string;
  /** 统计范围。取值有：source_to_eo：（响应）源站到 EdgeOne；client_to_eo：（请求）客户端到 EdgeOne。默认为 source_to_eo。 */
  FreqScope?: string[];
  /** 自定义返回页面的名称。Action 是 page 时必填，且不能为空。 */
  Name?: string;
  /** 自定义响应 Id。该 Id 可通过查询自定义错误页列表接口获取。默认值为default，使用系统默认页面。Action 是 page 时必填，且不能为空。 */
  CustomResponseId?: string;
  /** 自定义返回页面的响应码。Action 是 page 时必填，且不能为空，取值: 100~600，不支持 3xx 响应码。默认值：567。 */
  ResponseCode?: number;
  /** 重定向时候的地址。Action 是 redirect 时必填，且不能为空。 */
  RedirectUrl?: string;
}

/** 速率限制的具体配置。 */
declare interface RateLimitingRule {
  /** 精准速率限制的 ID。通过规则 ID 可支持不同的规则配置操作： 增加新规则：ID 为空或不指定 ID 参数；修改已有规则：指定需要更新/修改的规则 ID；删除已有规则：RateLimitingRules 参数中，Rules 列表中未包含的已有规则将被删除。 */
  Id?: string;
  /** 精准速率限制的名称。 */
  Name?: string;
  /** 精准速率限制的具体内容，需符合表达式语法，详细规范参见产品文档。 */
  Condition?: string;
  /** 速率阈值请求特征的匹配方式， 当 Enabled 为 on 时，此字段必填。当条件有多个时，将组合多个条件共同进行统计计算，条件最多不可超过5条。取值有：http.request.ip：客户端 IP；http.request.xff_header_ip：客户端 IP（优先匹配 XFF 头部）；http.request.uri.path：请求的访问路径；http.request.cookies['session']：名称为session的Cookie，其中session可替换为自己指定的参数；http.request.headers['user-agent']：名称为user-agent的HTTP头部，其中user-agent可替换为自己指定的参数；http.request.ja3：请求的JA3指纹；http.request.uri.query['test']：名称为test的URL查询参数，其中test可替换为自己指定的参数。 */
  CountBy?: string[];
  /** 精准速率限制在时间范围内的累计拦截次数，取值范围 1 ~ 100000。 */
  MaxRequestThreshold?: number;
  /** 统计的时间窗口，取值有：1s：1秒；5s：5秒；10s：10秒；20s：20秒；30s：30秒；40s：40秒；50s：50秒；1m：1分钟；2m：2分钟；5m：5分钟；10m：10分钟；1h：1小时。 */
  CountingPeriod?: string;
  /** Action 动作的持续时长，单位仅支持：s：秒，取值 1 ~ 120；m：分钟，取值 1 ~ 120；h：小时，取值 1 ~ 48；d：天，取值 1 ~ 30。 */
  ActionDuration?: string;
  /** 精准速率限制的处置方式。取值有：Monitor：观察；Deny：拦截，其中DenyActionParameters.Name支持Deny和ReturnCustomPage；Challenge：挑战，其中ChallengeActionParameters.Name支持JSChallenge和ManagedChallenge；Redirect：重定向至URL； */
  Action?: SecurityAction;
  /** 精准速率限制的优先级，范围是 0 ~ 100，默认为 0。 */
  Priority?: number;
  /** 精准速率限制规则是否开启。取值有：on：开启；off：关闭。 */
  Enabled?: string;
}

/** 精准速率限制的配置 */
declare interface RateLimitingRules {
  /** 精准速率限制的定义列表。使用 ModifySecurityPolicy 修改 Web 防护配置时: 若未指定 Rules 参数，或 Rules 参数长度为零：清空所有精准速率限制配置。 若 SecurityPolicy 参数中，未指定 RateLimitingRules 参数值：保持已有自定义规则配置，不做修改。 */
  Rules?: RateLimitingRule[];
}

/** 实时日志投递任务。 */
declare interface RealtimeLogDeliveryTask {
  /** 实时日志投递任务 ID。 */
  TaskId?: string;
  /** 实时日志投递任务的名称。 */
  TaskName?: string;
  /** 实时日志投递任务的状态，取值有： enabled: 已启用； disabled: 已停用；deleted: 异常删除状态，请检查目的地腾讯云 CLS 日志集/日志主题是否已被删除。 */
  DeliveryStatus?: string;
  /** 实时日志投递任务类型，取值有： cls: 推送到腾讯云 CLS； custom_endpoint：推送到自定义 HTTP(S) 地址； s3：推送到 AWS S3 兼容存储桶地址。 */
  TaskType?: string;
  /** 实时日志投递任务对应的实体（七层域名或者四层代理实例）列表。取值示例如下： 七层域名：domain.example.com； 四层代理实例：sid-2s69eb5wcms7。 */
  EntityList?: string[];
  /** 数据投递类型，取值有： domain：站点加速日志； application：四层代理日志； web-rateLiming：速率限制和 CC 攻击防护日志； web-attack：托管规则日志； web-rule：自定义规则日志； web-bot：Bot管理日志。 */
  LogType?: string;
  /** 数据投递区域，取值有： mainland：中国大陆境内； overseas：全球（不含中国大陆）。 */
  Area?: string;
  /** 投递的预设字段列表。 */
  Fields?: string[];
  /** 投递的自定义字段列表。 */
  CustomFields?: CustomField[];
  /** 日志投递的过滤条件。 */
  DeliveryConditions?: DeliveryCondition[];
  /** 采样比例，采用千分制，取值范围为1-1000，例如：605 表示采样比例为 60.5%。 */
  Sample?: number;
  /** 日志投递的输出格式。出参为 null 时表示为默认格式，默认格式逻辑如下：当 TaskType 取值为 custom_endpoint 时，默认格式为多个 JSON 对象组成的数组，每个 JSON 对象为一条日志；当 TaskType 取值为 s3 时，默认格式为 JSON Lines。 */
  LogFormat?: LogFormat | null;
  /** CLS 的配置信息。 */
  CLS?: CLSTopic | null;
  /** 自定义 HTTP 服务的配置信息。 */
  CustomEndpoint?: CustomEndpoint | null;
  /** AWS S3 兼容存储桶的配置信息。 */
  S3?: S3 | null;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** Web安全重定向的附加参数 */
declare interface RedirectActionParameters {
  /** 重定向的URL。 */
  URL: string;
}

/** 预付费套餐自动续费配置项。 */
declare interface RenewFlag {
  /** 预付费套餐的自动续费标志，取值有： on：开启自动续费； off：不开启自动续费。 */
  Switch: string;
}

/** 正文传输超时时长的具体配置。 */
declare interface RequestBodyTransferTimeout {
  /** 正文传输超时时长，取值 5 ~ 120，单位仅支持秒（s）。 */
  IdleTimeout: string;
  /** 正文传输超时时长是否开启。取值有：on：开启；off：关闭。 */
  Enabled: string;
}

/** 例外规则中的跳过字段配置 */
declare interface RequestFieldsForException {
  /** 跳过的具体字段。取值支持：body.json：JSON 请求内容；此时 Condition 支持 key、value, TargetField 支持 key、value，例如 { "Scope": "body.json", "Condition": "", "TargetField": "key" }，表示 JSON 请求内容所有参数跳过 WAF 扫描；cookie：Cookie；此时 Condition 支持 key、value, TargetField 支持 key、value，例如 { "Scope": "cookie", "Condition": "${key} in ['account-id'] and ${value} like ['prefix-*']", "TargetField": "value" }，表示 Cookie 参数名称等于account-id 并且参数值通配符匹配 prefix-* 跳过 WAF 扫描；header：HTTP 头部参数；此时 Condition 支持 key、value, TargetField 支持 key、value，例如 { "Scope": "header", "Condition": "${key} like ['x-auth-*']", "TargetField": "value" }，表示 header 参数名称通配符匹配 x-auth-* 跳过 WAF 扫描；uri.query：URL 编码内容/查询参数；此时 Condition 支持 key、value, TargetField 支持 key、value，例如 { "Scope": "uri.query", "Condition": "${key} in ['action'] and ${value} in ['upload', 'delete']", "TargetField": "value" }，表示 URL 编码内容/查询参数的参数名称等于 action 并且参数值等于 upload 或 delete 跳过 WAF 扫描；uri：请求路径URI；此时 Condition 必须为空， TargetField 支持 query、path、fullpath，例如 { "Scope": "uri", "Condition": "", "TargetField": "query" }，表示请求路径 URI 仅查询参数跳过 WAF 扫描；body：请求正文内容。此时 Condition 必须为空， TargetField 支持 fullbody、multipart，例如 { "Scope": "body", "Condition": "", "TargetField": "fullbody" }，表示请求正文内容为完整请求正文跳过 WAF 扫描； */
  Scope: string;
  /** 跳过的具体字段的表达式，需要符合表达式语法。Condition 支持表达式配置语法： 按规则的匹配条件表达式语法编写，支持引用 key、value。 支持 in、like 操作符，以及 and 逻辑组合。例如：${key} in ['x-trace-id']：参数名称等于x-trace-id。${key} in ['x-trace-id'] and ${value} like ['Bearer *']：参数名称等于x-trace-id并且参数值通配符匹配Bearer *。 */
  Condition: string;
  /** Scope 参数使用不同取值时，TargetField 表达式中支持的值如下： body.json：支持 key、value cookie：支持 key、value header：支持 key、value uri.query：支持 key、value uri：支持 path、query、fullpath body：支持 fullbody、multipart */
  TargetField: string;
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
  /** 资源标记类型，取值有：vodeo：vodeo资源。 */
  Type?: string;
}

/** 单连接下载限速配置参数。 */
declare interface ResponseSpeedLimitParameters {
  /** 下载限速模式，取值有：LimitUponDownload：全过程下载限速；LimitAfterSpecificBytesDownloaded：全速下载特定字节后开始限速；LimitAfterSpecificSecondsDownloaded：全速下载特定时间后开始限速。 */
  Mode: string;
  /** 限速值，指定限速大小，填写含单位的数值或变量。当前支持单位有：KB/s。 */
  MaxSpeed: string;
  /** 限速开始值，可以为下载大小或指定时长，填写含单位的数值或变量，指定下载大小或指定时长。- 当Mode 取值为 LimitAfterSpecificBytesDownloaded 时，单位取值有： KB；- 当Mode 取值为 LimitAfterSpecificSecondsDownloaded 时，单位取值有： s。 */
  StartAt?: string;
}

/** Web安全自定义页面的附加参数 */
declare interface ReturnCustomPageActionParameters {
  /** 响应状态码。 */
  ResponseCode: string;
  /** 响应的自定义页面ID。 */
  ErrorPageId: string;
}

/** 规则引擎HTTP请求头/响应头类型的动作 */
declare interface RewriteAction {
  /** 功能名称，功能名称填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。 */
  Action: string;
  /** 参数。 */
  Parameters: RuleRewriteActionParams[];
}

/** 规则引擎规则项，Conditions 数组内多个项的关系为 或，内层 Conditions 列表内多个项的关系为 且。 */
declare interface Rule {
  /** 执行功能判断条件。注意：满足该数组内任意一项条件，功能即可执行。 */
  Conditions: RuleAndConditions[];
  /** 执行的功能。注意：Actions 和 SubRules 不可都为空 */
  Actions?: Action[];
  /** 嵌套规则。注意：SubRules 和 Actions 不可都为空 */
  SubRules?: SubRuleItem[];
}

/** 规则引擎条件且关系条件列表 */
declare interface RuleAndConditions {
  /** 规则引擎条件，该数组内所有项全部满足即判断该条件满足。 */
  Conditions: RuleCondition[];
}

/** 子规则分支。 */
declare interface RuleBranch {
  /** [匹配条件](https://cloud.tencent.com/document/product/1552/90438)。 */
  Condition?: string;
  /** [操作](https://cloud.tencent.com/document/product/1552/90438)。注意：Actions 和 SubRules 不可同时为空。 */
  Actions?: RuleEngineAction[] | null;
  /** 子规则列表。此列表中时存在多条规则，按照从上往下的顺序依次执行。注意：SubRules 和 Actions 不可同时为空。且当前只支持填写一层 SubRules。 */
  SubRules?: RuleEngineSubRule[] | null;
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
  /** 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。 */
  Name: string;
  /** 参数值。 */
  Values: string[];
}

/** 规则引擎条件参数 */
declare interface RuleCondition {
  /** 运算符，取值有： equal: 等于； notequal: 不等于； exist: 存在； notexist: 不存在。 */
  Operator: string;
  /** 匹配类型，取值有： filename：文件名； extension：文件后缀； host：HOST； full_url：URL Full，当前站点下完整 URL 路径，必须包含 HTTP 协议，Host 和 路径； url：URL Path，当前站点下 URL 路径的请求； client_country：客户端国家/地区； query_string：查询字符串，当前站点下请求 URL 的查询字符串； request_header：HTTP 请求头部。 client_ip：客户端 IP。 request_protocol：请求协议。 request_method：HTTP 请求方法。 */
  Target: string;
  /** 对应匹配类型的参数值，仅在匹配类型为查询字符串或HTTP请求头并且运算符取值为存在或不存在时允许传空数组，对应匹配类型有： 文件后缀：jpg、txt 等文件后缀； 文件名称：例如 foo.jpg 中的 foo； 全部（站点任意请求）：all； HOST：当前站点下的 host ，例如www.maxx55.com； URL Path：当前站点下 URL 路径的请求，例如：/example； URL Full：当前站点下完整 URL 请求，必须包含 HTTP 协议，Host 和 路径，例如：https://www.maxx55.cn/example； 客户端国家/地区：符合 ISO3166 标准的国家/地区标识； 查询字符串: 当前站点下 URL 请求中查询字符串的参数值，例如 lang=cn&version=1 中的 cn 和 1； HTTP 请求头: HTTP 请求头部字段值，例如 Accept-Language:zh-CN,zh;q=0.9中的zh-CN,zh;q=0.9 ； 客户端 IP: 当前请求携带的客户端请求 IP，支持 IPv4/IPv6, 支持 IP 段； 请求协议: 当前请求的协议，取值范围为：HTTP、HTTPS； HTTP 请求方法: 当前请求的方法，取值范围为：GET、HEAD、POST、PUT、DELETE、TRACE、CONNECT、OPTIONS、PATCH、COPY、LOCK、MKCOL、MOVE、PROPFIND、PROPPATCH、UNLOCK。 */
  Values?: string[];
  /** 是否忽略参数值的大小写，默认值为 false。 */
  IgnoreCase?: boolean;
  /** 对应匹配类型的参数名称，在 Target 值为以下取值时有效，有效时值不能为空： query_string（查询字符串）: 当前站点下URL请求中查询字符串的参数名称，例如lang=cn&version=1中的lang和version； request_header（HTTP 请求头）: HTTP请求头部字段名，例如Accept-Language:zh-CN,zh;q=0.9中的Accept-Language。 */
  Name?: string;
  /** 是否忽略参数名称的大小写，默认值为 false。 */
  IgnoreNameCase?: boolean | null;
}

/** 规则引擎操作。 */
declare interface RuleEngineAction {
  /** 操作名称。名称需要与参数结构体对应，例如 Name=Cache，则 CacheParameters 必填。Cache：节点缓存 TTL；CacheKey：自定义 Cache Key；CachePrefresh：缓存预刷新；AccessURLRedirect：访问 URL 重定向；UpstreamURLRewrite：回源 URL 重写；QUIC：QUIC；WebSocket：WebSocket；Authentication：Token 鉴权；MaxAge：浏览器缓存 TTL；StatusCodeCache：状态码缓存 TTL；OfflineCache：离线缓存；SmartRouting：智能加速；RangeOriginPull：分片回源 ；UpstreamHTTP2：HTTP2 回源；HostHeader：Host Header 重写；ForceRedirectHTTPS：访问协议强制 HTTPS 跳转配置；OriginPullProtocol：回源 HTTPS；Compression：智能压缩配置；HSTS：HSTS；ClientIPHeader：存储客户端请求 IP 的头部信息配置；OCSPStapling：OCSP 装订；HTTP2：HTTP2 接入；PostMaxSize：POST 请求上传文件流式传输最大限制配置；ClientIPCountry：回源时携带客户端 IP 所属地域信息；UpstreamFollowRedirect：回源跟随重定向参数配置；UpstreamRequest：回源请求参数；TLSConfig：SSL/TLS 安全；ModifyOrigin：修改源站；HTTPUpstreamTimeout：七层回源超时配置；HttpResponse：HTTP 应答；ErrorPage：自定义错误页面；ModifyResponseHeader：修改 HTTP 节点响应头；ModifyRequestHeader：修改 HTTP 节点请求头；ResponseSpeedLimit：单连接下载限速；SetContentIdentifier：设置内容标识符；Vary：Vary 特性配置。 */
  Name: string;
  /** 节点缓存 TTL 配置参数，当 Name 取值为 Cache 时，该参数必填。 */
  CacheParameters?: CacheParameters | null;
  /** 自定义 Cache Key 配置参数，当 Name 取值为 CacheKey 时，该参数必填。 */
  CacheKeyParameters?: CacheKeyParameters | null;
  /** 缓存预刷新配置参数，当 Name 取值为 CachePrefresh 时，该参数必填。 */
  CachePrefreshParameters?: CachePrefreshParameters | null;
  /** 访问 URL 重定向配置参数，当 Name 取值为 AccessURLRedirect 时，该参数必填。 */
  AccessURLRedirectParameters?: AccessURLRedirectParameters | null;
  /** 回源 URL 重写配置参数，当 Name 取值为 UpstreamURLRewrite 时，该参数必填。 */
  UpstreamURLRewriteParameters?: UpstreamURLRewriteParameters | null;
  /** QUIC 配置参数，当 Name 取值为 QUIC 时，该参数必填。 */
  QUICParameters?: QUICParameters | null;
  /** WebSocket 配置参数，当 Name 取值为 WebSocket 时，该参数必填。 */
  WebSocketParameters?: WebSocketParameters | null;
  /** Token 鉴权配置参数，当 Name 取值为 Authentication 时，该参数必填。 */
  AuthenticationParameters?: AuthenticationParameters | null;
  /** 浏览器缓存 TTL 配置参数，当 Name 取值为 MaxAge 时，该参数必填。 */
  MaxAgeParameters?: MaxAgeParameters | null;
  /** 状态码缓存 TTL 配置参数，当 Name 取值为 StatusCodeCache 时，该参数必填。 */
  StatusCodeCacheParameters?: StatusCodeCacheParameters | null;
  /** 离线缓存配置参数，当 Name 取值为 OfflineCache 时，该参数必填。 */
  OfflineCacheParameters?: OfflineCacheParameters | null;
  /** 智能加速配置参数，当 Name 取值为 SmartRouting 时，该参数必填。 */
  SmartRoutingParameters?: SmartRoutingParameters | null;
  /** 分片回源配置参数，当 Name 取值为 RangeOriginPull 时，该参数必填。 */
  RangeOriginPullParameters?: RangeOriginPullParameters | null;
  /** HTTP2 回源配置参数，当 Name 取值为 UpstreamHTTP2 时，该参数必填。 */
  UpstreamHTTP2Parameters?: UpstreamHTTP2Parameters | null;
  /** Host Header 重写配置参数，当 Name 取值为 HostHeader 时，该参数必填。 */
  HostHeaderParameters?: HostHeaderParameters | null;
  /** 访问协议强制 HTTPS 跳转配置，当 Name 取值为 ForceRedirectHTTPS 时，该参数必填。 */
  ForceRedirectHTTPSParameters?: ForceRedirectHTTPSParameters | null;
  /** 智能压缩配置，当 Name 取值为 Compression 时，该参数必填。 */
  CompressionParameters?: CompressionParameters | null;
  /** HSTS 配置参数，当 Name 取值为 HSTS 时，该参数必填。 */
  HSTSParameters?: HSTSParameters | null;
  /** 存储客户端请求 IP 的头部信息配置，当 Name 取值为 ClientIPHeader 时，该参数必填。 */
  ClientIPHeaderParameters?: ClientIPHeaderParameters | null;
  /** OCSP 装订配置参数，当 Name 取值为 OCSPStapling 时，该参数必填。 */
  OCSPStaplingParameters?: OCSPStaplingParameters | null;
  /** HTTP2 接入配置参数，当 Name 取值为 HTTP2 时，该参数必填。 */
  HTTP2Parameters?: HTTP2Parameters | null;
  /** POST 请求上传文件流式传输最大限制配置，当 Name 取值为 PostMaxSize 时，该参数必填。 */
  PostMaxSizeParameters?: PostMaxSizeParameters | null;
  /** 回源时携带客户端 IP 所属地域信息配置参数，当 Name 取值为 ClientIPCountry 时，该参数必填。 */
  ClientIPCountryParameters?: ClientIPCountryParameters | null;
  /** 回源跟随重定向参数配置，当 Name 取值为 UpstreamFollowRedirect 时，该参数必填。 */
  UpstreamFollowRedirectParameters?: UpstreamFollowRedirectParameters | null;
  /** 回源请求参数配置参数，当 Name 取值为 UpstreamRequest 时，该参数必填。 */
  UpstreamRequestParameters?: UpstreamRequestParameters | null;
  /** SSL/TLS 安全配置参数，当 Name 取值为 TLSConfig 时，该参数必填。 */
  TLSConfigParameters?: TLSConfigParameters | null;
  /** 修改源站配置参数，当 Name 取值为 ModifyOrigin 时，该参数必填。 */
  ModifyOriginParameters?: ModifyOriginParameters | null;
  /** 七层回源超时配置，当 Name 取值为 HTTPUpstreamTimeout 时，该参数必填。 */
  HTTPUpstreamTimeoutParameters?: HTTPUpstreamTimeoutParameters | null;
  /** HTTP 应答配置参数，当 Name 取值为 HttpResponse 时，该参数必填。 */
  HttpResponseParameters?: HTTPResponseParameters | null;
  /** 自定义错误页面配置参数，当 Name 取值为 ErrorPage 时，该参数必填。 */
  ErrorPageParameters?: ErrorPageParameters | null;
  /** 修改 HTTP 节点响应头配置参数，当 Name 取值为 ModifyResponseHeader 时，该参数必填。 */
  ModifyResponseHeaderParameters?: ModifyResponseHeaderParameters | null;
  /** 修改 HTTP 节点请求头配置参数，当 Name 取值为 ModifyRequestHeader 时，该参数必填。 */
  ModifyRequestHeaderParameters?: ModifyRequestHeaderParameters | null;
  /** 单连接下载限速配置参数，当 Name 取值为 ResponseSpeedLimit 时，该参数必填。 */
  ResponseSpeedLimitParameters?: ResponseSpeedLimitParameters | null;
  /** 内容标识配置参数，当 Name 取值为 SetContentIdentifier 时，该参数必填。 */
  SetContentIdentifierParameters?: SetContentIdentifierParameters | null;
  /** Vary 特性配置参数，当 Name 取值为 Vary 时，该参数必填。 */
  VaryParameters?: VaryParameters;
}

/** 规则引擎规则详情。 */
declare interface RuleEngineItem {
  /** 规则状态。取值有： enable: 启用； disable: 未启用。 */
  Status?: string;
  /** 规则 ID。规则的唯一性标识，当调用 ModifyL7AccRules 时，该参数必填。 */
  RuleId?: string;
  /** 规则名称。名称长度限制不超过 255 个字符。 */
  RuleName?: string;
  /** 规则注释。可以填写多个注释。 */
  Description?: string[];
  /** 子规则分支。此列表当前只支持填写一项规则，多填无效。 */
  Branches?: RuleBranch[] | null;
  /** 规则优先级。仅作为出参使用。 */
  RulePriority?: number;
}

/** 子规则。 */
declare interface RuleEngineSubRule {
  /** 子规则分支 */
  Branches?: RuleBranch[] | null;
  /** 规则注释。 */
  Description?: string[];
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
  RuleId?: string;
  /** 规则名称，名称字符串长度 1~255。 */
  RuleName?: string;
  /** 规则状态，取值有: enable: 启用； disable: 未启用。 */
  Status?: string;
  /** 规则内容。 */
  Rules?: Rule[];
  /** 规则优先级, 值越大优先级越高，最小为 1。 */
  RulePriority?: number;
  /** 规则标签。 */
  Tags?: string[];
}

/** 规则引擎条件常规动作参数 */
declare interface RuleNormalActionParams {
  /** 参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。 */
  Name: string;
  /** 参数值。 */
  Values: string[];
}

/** 规则引擎条件 HTTP 请求/响应头操作动作参数。 */
declare interface RuleRewriteActionParams {
  /** 功能参数名称，参数填写规范可调用接口 [查询规则引擎的设置参数](https://cloud.tencent.com/document/product/1552/80618) 查看。现在只有三种取值： add：添加 HTTP 头部； set：重写 HTTP 头部； del：删除 HTTP 头部。 */
  Action: string;
  /** 参数名称。 */
  Name: string;
  /** 参数值。 */
  Values: string[];
}

/** 规则引擎可应用于匹配请求的设置详细信息。 */
declare interface RulesProperties {
  /** 值为参数名称。 */
  Name?: string;
  /** 数值参数的最小值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
  Min?: number;
  /** 参数值的可选值。注意：若参数值为用户自定义则该数组为空数组。 */
  ChoicesValue?: string[];
  /** 参数值类型。 CHOICE：参数值只能在 ChoicesValue 中选择； TOGGLE：参数值为开关类型，可在 ChoicesValue 中选择； OBJECT：参数值为对象类型，ChoiceProperties 为改对象类型关联的属性； CUSTOM_NUM：参数值用户自定义，整型类型； CUSTOM_STRING：参数值用户自定义，字符串类型。注意：当参数类型为 OBJECT 类型时，请注意参考 [示例2 参数为 OBJECT 类型的创建](https://cloud.tencent.com/document/product/1552/80622) */
  Type?: string;
  /** 数值参数的最大值，非数值参数或 Min 和 Max 值都为 0 则此项无意义。 */
  Max?: number;
  /** 参数值是否支持多选或者填写多个。 */
  IsMultiple?: boolean;
  /** 是否允许为空。 */
  IsAllowEmpty?: boolean;
  /** 该参数对应的关联配置参数，属于调用接口的必填参数。注意：如果可选参数无特殊新增参数则该数组为空数组。 */
  ChoiceProperties?: RuleChoicePropertiesItem[];
  /** 为 NULL：无特殊参数，RuleAction 选择 NormalAction； */
  ExtraParameter?: RuleExtraParameter | null;
}

/** 规则引擎可应用于匹配请求的设置列表及其详细信息 */
declare interface RulesSettingAction {
  /** 功能名称，取值有： 访问URL 重写（AccessUrlRedirect）； 回源 URL 重写 （UpstreamUrlRedirect）； 自定义错误页面(ErrorPage)； QUIC（QUIC）； WebSocket （WebSocket）； 视频拖拽（VideoSeek）； Token 鉴权（Authentication）； 自定义CacheKey（CacheKey）； 节点缓存 TTL （Cache）； 浏览器缓存 TTL（MaxAge）； 离线缓存（OfflineCache）； 智能加速（SmartRouting）； 分片回源（RangeOriginPull）； HTTP/2 回源（UpstreamHttp2）； Host Header 重写（HostHeader）； 强制 HTTPS（ForceRedirect）； 回源 HTTPS（OriginPullProtocol）； 缓存预刷新（CachePrefresh）； 智能压缩（Compression）； 修改 HTTP 请求头（RequestHeader）； 修改HTTP响应头（ResponseHeader）; 状态码缓存 TTL（StatusCodeCache）; Hsts； ClientIpHeader； TlsVersion； OcspStapling。 */
  Action: string;
  /** 参数信息。 */
  Properties: RulesProperties[];
}

/** 实时日志投递到 AWS S3 兼容存储桶的配置信息。 */
declare interface S3 {
  /** 不包含存储桶名称或路径的 URL，例如：`https://storage.googleapis.com`、`https://s3.ap-northeast-2.amazonaws.com`、`https://cos.ap-nanjing.myqcloud.com`。 */
  Endpoint: string;
  /** 存储桶所在的地域，例如：`ap-northeast-2`。 */
  Region: string;
  /** 存储桶名称和日志存储目录，例如：`your_bucket_name/EO-logs/`。如果存储桶中无此目录则会自动创建。 */
  Bucket: string;
  /** 访问存储桶使用的 Access Key ID。 */
  AccessId: string;
  /** 访问存储桶使用的 secret key。 */
  AccessKey: string;
  /** 数据压缩类型，取值有: gzip：gzip压缩。不填表示不启用压缩。 */
  CompressType?: string;
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

/** 安全的执行动作 */
declare interface SecurityAction {
  /** 安全执行的具体动作。取值有：Deny：拦截，阻止请求访问站点资源；Monitor：观察，仅记录日志；Redirect：重定向至 URL；Disabled：未启用，不启用指定规则；Allow：允许访问，但延迟处理请求；Challenge：挑战，响应挑战内容；BlockIP：待废弃，IP 封禁；ReturnCustomPage：待废弃，使用指定页面拦截；JSChallenge：待废弃，JavaScript 挑战；ManagedChallenge：待废弃，托管挑战。 */
  Name: string;
  /** 当 Name 为 Deny 时的附加参数。 */
  DenyActionParameters?: DenyActionParameters;
  /** 当 Name 为 Redirect 时的附加参数。 */
  RedirectActionParameters?: RedirectActionParameters;
  /** 当 Name 为 Challenge 时的附加参数。 */
  ChallengeActionParameters?: ChallengeActionParameters;
  /** 待废弃，当 Name 为 BlockIP 时的附加参数。 */
  BlockIPActionParameters?: BlockIPActionParameters;
  /** 待废弃，当 Name 为 ReturnCustomPage 时的附加参数。 */
  ReturnCustomPageActionParameters?: ReturnCustomPageActionParameters;
}

/** Web安全配置 */
declare interface SecurityConfig {
  /** 托管规则。如果入参为空或不填，默认使用历史配置。 */
  WafConfig?: WafConfig;
  /** 速率限制。如果入参为空或不填，默认使用历史配置。 */
  RateLimitConfig?: RateLimitConfig;
  /** 自定义规则。如果入参为空或不填，默认使用历史配置。 */
  AclConfig?: AclConfig;
  /** Bot配置。如果入参为空或不填，默认使用历史配置。 */
  BotConfig?: BotConfig;
  /** 七层防护总开关。如果入参为空或不填，默认使用历史配置。 */
  SwitchConfig?: SwitchConfig;
  /** 基础访问管控。如果入参为空或不填，默认使用历史配置。 */
  IpTableConfig?: IpTableConfig;
  /** 例外规则配置。如果入参为空或不填，默认使用历史配置。 */
  ExceptConfig?: ExceptConfig;
  /** 自定义拦截页面配置。如果入参为空或不填，默认使用历史配置。 */
  DropPageConfig?: DropPageConfig;
  /** 模板配置。此处仅出参数使用。 */
  TemplateConfig?: TemplateConfig;
  /** 慢速攻击配置。如果入参为空或不填，默认使用历史配置。 */
  SlowPostConfig?: SlowPostConfig;
  /** 检测长度限制配置。仅出参使用。 */
  DetectLengthLimitConfig?: DetectLengthLimitConfig;
}

/** 安全策略配置 */
declare interface SecurityPolicy {
  /** 自定义规则配置。 */
  CustomRules?: CustomRules;
  /** 托管规则配置。 */
  ManagedRules?: ManagedRules;
  /** HTTP DDOS防护配置。 */
  HttpDDoSProtection?: HttpDDoSProtection;
  /** 速率限制规则配置。 */
  RateLimitingRules?: RateLimitingRules;
  /** 例外规则配置。 */
  ExceptionRules?: ExceptionRules;
}

/** 安全策略模板的绑定关系。 */
declare interface SecurityTemplateBinding {
  /** 模板ID */
  TemplateId?: string;
  /** 模板绑定状态。 */
  TemplateScope?: TemplateScope[];
}

/** 安全类型配置项。 */
declare interface SecurityType {
  /** 安全类型开关，取值为： on：开启； off：关闭。 */
  Switch: string;
}

/** https 服务端证书配置 */
declare interface ServerCertInfo {
  /** 服务器证书 ID。来源于 SSL 侧，您可以前往 [SSL 证书列表](https://console.cloud.tencent.com/ssl) 查看 CertId。 */
  CertId: string;
  /** 证书备注名。 */
  Alias?: string;
  /** 证书类型，取值有：default：默认证书；upload：用户上传；managed：腾讯云托管。 */
  Type?: string;
  /** 证书过期时间。 */
  ExpireTime?: string;
  /** 证书部署时间。 */
  DeployTime?: string;
  /** 签名算法。 */
  SignAlgo?: string;
  /** 证书归属域名名称。 */
  CommonName?: string;
}

/** 内容标识配置参数。 */
declare interface SetContentIdentifierParameters {
  /** 内容标识id */
  ContentIdentifier?: string;
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
  MatchFrom?: string[];
  /** 匹配Content所使用的匹配方式，取值为：equal：精准匹配，等于；wildcard：通配符匹配，支持 * 通配。 */
  MatchContentType?: string;
  /** 匹配Value的值。 */
  MatchContent?: string[];
}

/** 慢速攻击防护的具体配置。 */
declare interface SlowAttackDefense {
  /** 慢速攻击防护是否开启。取值有：on：开启；off：关闭。 */
  Enabled: string;
  /** 慢速攻击防护的处置方式，当 Enabled 为 on 时，此字段必填。SecurityAction 的 Name 取值支持：Monitor：观察；Deny：拦截； */
  Action?: SecurityAction;
  /** 正文传输最小速率阈值的具体配置，当 Enabled 为 on 时，此字段必填。 */
  MinimalRequestBodyTransferRate?: MinimalRequestBodyTransferRate;
  /** 正文传输超时时长的具体配置，当 Enabled 为 on 时，此字段必填。 */
  RequestBodyTransferTimeout?: RequestBodyTransferTimeout;
}

/** 慢速攻击配置。 */
declare interface SlowPostConfig {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 首包配置。 */
  FirstPartConfig?: FirstPartConfig;
  /** 基础配置。 */
  SlowRateConfig?: SlowRateConfig;
  /** 慢速攻击的处置动作，取值有：monitor：观察；drop：拦截。 */
  Action?: string;
  /** 本规则的Id。 */
  RuleId?: number;
}

/** 慢速攻击的基础配置。 */
declare interface SlowRateConfig {
  /** 开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 统计的间隔，单位是秒，即在首段包传输结束后，将数据传输轴按照本参数切分，每个分片独立计算慢速攻击。 */
  Interval?: number;
  /** 统计时应用的速率阈值，单位是bps，即如果本分片中的传输速率没达到本参数的值，则判定为慢速攻击，应用慢速攻击的处置方式。 */
  Threshold?: number;
}

/** 智能加速配置 */
declare interface SmartRouting {
  /** 智能加速配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 智能加速配置。 */
declare interface SmartRoutingParameters {
  /** 智能加速配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
}

/** 支持标准debug结构体 */
declare interface StandardDebug {
  /** Debug 功能开关，取值有：on：开启；off：关闭。 */
  Switch: string;
  /** 允许的客户端来源。支持填写 IPv4 以及 IPv6 的 IP/IP 段。0.0.0.0/0 表示允许所有 IPv4 客户端进行调试，::/0 表示允许所有 IPv6 客户端进行调试。 */
  AllowClientIPList: string[];
  /** Debug 功能到期时间。超出设置的时间，则功能失效。 */
  ExpireTime: string;
}

/** Debug 调试结构体。 */
declare interface StandardDebugParameters {
  /** Debug 功能开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 允许的客户端来源。支持填写 IPv4 以及 IPv6 的 IP 网段。0.0.0.0/0 表示允许所有 IPv4 客户端进行调试；::/0 表示允许所有 IPv6 客户端进行调试；不能填写 127.0.0.1。注意：当 Switch 字段为 on 时，此字段必填，且填写个数为 1～100；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  AllowClientIPList?: string[];
  /** Debug 功能到期时间。超出设置的时间，则功能失效。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  Expires?: string;
}

/** 状态码缓存 TTL 配置参数内部结构。 */
declare interface StatusCodeCacheParam {
  /** 状态码，取值为 400、 401、403、 404、 405、 407、 414、 500、 501、 502、 503、 504、 509、 514 之一。 */
  StatusCode?: number;
  /** 缓存时间数值，单位为秒，取值：0～31536000。 */
  CacheTime?: number;
}

/** 状态码缓存 TTL 配置参数。 */
declare interface StatusCodeCacheParameters {
  /** 状态码缓存 TTL 。 */
  StatusCodeCacheParams?: StatusCodeCacheParam[] | null;
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

/** SSL/TLS 安全配置参数。 */
declare interface TLSConfigParameters {
  /** TLS 版本。至少填写一个，如果是多个时，需要为连续版本号，例如：开启 TLS1、1.1、1.2 和 1.3，不可仅开启 1 和 1.2 而关闭 1.1。取值有：TLSv1：TLSv1 版本；TLSv1.1：TLSv1.1 版本；TLSv1.2：TLSv1.2 版本；TLSv1.3：TLSv1.3 版本。 */
  Version?: string[];
  /** 密码套件。详细介绍请参考 [TLS 版本及密码套件说明](https://cloud.tencent.com/document/product/1552/86545)。取值有：loose-v2023：loose-v2023 密码套件；general-v2023：general-v2023 密码套件；strict-v2023：strict-v2023 密码套件。 */
  CipherSuite?: string;
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
  JobId?: string;
  /** 资源。 */
  Target?: string;
  /** 任务类型。 */
  Type?: string;
  /** 节点缓存清除方法，取值有：invalidate：标记过期，用户请求时触发回源校验，即发送带有 If-None-Match 和 If-Modified-Since 头部的 HTTP 条件请求。若源站响应 200，则节点会回源拉取新的资源并更新缓存；若源站响应 304，则节点不会更新缓存；delete：直接删除节点缓存，用户请求时触发回源拉取资源。 */
  Method?: string;
  /** 状态。取值有：processing：处理中；success：成功； failed：失败；timeout：超时；canceled：已取消。 */
  Status?: string;
  /** 任务创建时间。 */
  CreateTime?: string;
  /** 任务完成时间。 */
  UpdateTime?: string;
}

/** 安全模板配置 */
declare interface TemplateConfig {
  /** 模板ID。 */
  TemplateId: string;
  /** 模板名称。 */
  TemplateName: string;
}

/** 安全模板绑定域名状态 */
declare interface TemplateScope {
  /** 站点ID。 */
  ZoneId?: string | null;
  /** 实例状态列表。 */
  EntityStatus?: EntityStatus[] | null;
}

/** 统计曲线数据项 */
declare interface TimingDataItem {
  /** 返回数据对应时间点，采用 unix 秒级时间戳。 */
  Timestamp?: number;
  /** 具体数值。 */
  Value?: number;
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

/** 访问 URL 重定向路径配置参数。 */
declare interface URLPath {
  /** 执行动作，取值有：follow：跟随请求；custom：自定义；regex：正则匹配。 */
  Action?: string;
  /** 正则匹配的表达式，长度范围为 1～1024。注意：当 Action 为 regex 时，此字段必填；当 Action 为 follow 或 custom 时，无需填写此字段，若填写则不生效。 */
  Regex?: string;
  /** 重定向的目标URL，长度范围为 1～1024。注意：当 Action 为 regex 或 custom 时，此字段必填；当 Action 为 follow 时，无需填写此字段，若填写则不生效。 */
  Value?: string;
}

/** 用于 EO 节点回源时携带的证书，源站启用双向认证握手时使用，用于源站认证客户端证书是否有效，确保请求来源于受信任的 EO 节点。 */
declare interface UpstreamCertInfo {
  /** 在回源双向认证场景下，该字段为 EO 节点回源时携带的证书（包含公钥、私钥即可），部署在 EO 节点，用于源站对 EO 节点进行认证。在作为入参使用时，不填写表示保持原有配置。 */
  UpstreamMutualTLS?: MutualTLS;
}

/** 回源跟随重定向参数配置。 */
declare interface UpstreamFollowRedirectParameters {
  /** 回源跟随重定向配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 最大重定向次数。取值为 1-5。注意：当 Switch 为 on 时，此字段必填；当 Switch 为 off 时，无需填写此字段，若填写则不生效。 */
  MaxTimes?: number;
}

/** HTTP2 回源配置。 */
declare interface UpstreamHTTP2Parameters {
  /** HTTP2 回源配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
}

/** Http2回源配置 */
declare interface UpstreamHttp2 {
  /** http2 回源配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
}

/** 回源请求参数 Cookie 配置。 */
declare interface UpstreamRequestCookie {
  /** 回源请求参数 Cookie 配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 回源请求参数 Cookie 模式。当 Switch 为 on 时，该参数必填。取值有：full：表示全部保留；ignore：表示全部忽略；includeCustom：表示保留部分参数；excludeCustom：表示忽略部分参数。 */
  Action?: string;
  /** 指定参数值。仅当查询字符串模式 Action 为 includeCustom 或者 excludeCustom 时该参数生效，用于指定需要保留或者忽略的参数。最大支持 10 个参数。 */
  Values?: string[];
}

/** 回源请求参数配置参数。 */
declare interface UpstreamRequestParameters {
  /** 查询字符串配置。可选配置项，不填表示不配置。 */
  QueryString?: UpstreamRequestQueryString | null;
  /** Cookie 配置。可选配置项，不填表示不配置。 */
  Cookie?: UpstreamRequestCookie | null;
}

/** 回源请求参数查询字符串配置。 */
declare interface UpstreamRequestQueryString {
  /** 回源请求参数查询字符串配置开关，取值有：on：开启；off：关闭。 */
  Switch?: string;
  /** 查询字符串模式。当 Switch 为 on 时，该参数必填。取值有：full：全部保留；ignore：全部忽略；includeCustom：保留部分参数；excludeCustom：忽略部分参数。 */
  Action?: string;
  /** 指定参数值。仅当查询字符串模式 Action 为 includeCustom 或者 excludeCustom 时该参数生效，用于指定需要保留或者忽略的参数。最大支持 10 个参数。 */
  Values?: string[];
}

/** 回源 URL 重写 配置参数。 */
declare interface UpstreamURLRewriteParameters {
  /** 回源 URL 重写类型。仅支持填写 Path。 */
  Type?: string;
  /** 回源 URL 重写动作。取值有：replace：指替换完整路径。用于将完整的请求 URL Path 替换为指定路径。addPrefix：指增加路径前缀。用于增加指定路径前缀至请求 URL Path。rmvPrefix：指移除路径前缀。用于移除请求 URL Path 的指定路径前缀。regexReplace：指正则替换完整路径。用于通过 Google RE2 正则表达式匹配和替换完整路径。 */
  Action?: string;
  /** 回源 URL 重写值。需要满足 URL Path 规范，且保证重写后的 Path 以 / 开头，以防止回源 URL 的 Host 被修改，长度范围为 1～1024。当 Action 为 addPrefix 时，不能以 / 结尾；当 Action 为 rmvPrefix 时，不能存在 *；当 Action 为 regexReplace 时，支持用 $NUM 引用正则捕获组，其中 NUM 代表组编号，如 $1，最多支持 $9。 */
  Value?: string;
  /** 回源 URL 重写用于正则替换匹配完整路径的正则表达式。需要满足 Google RE2 规范，长度范围为 1～1024。当 Action 为 regexReplace 时，此字段必填，否则无需填写此字段。 */
  Regex?: string;
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

/** [Vary 特性](https://cloud.tencent.com/document/product/1552/89301) 配置参数。 */
declare interface VaryParameters {
  /** Vary 特性配置开关，取值有：on：开启；off：关闭。 */
  Switch: string;
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

/** WebSocket 配置。 */
declare interface WebSocketParameters {
  /** WebSocket 超时时间配置开关，取值有：on：使用 Timeout 作为 WebSocket 超时时间；off：平台仍支持 WebSocket 连接，此时使用系统默认的 15 秒为超时时间。 */
  Switch?: string;
  /** 超时时间，单位为秒，最大超时时间 120 秒。注意：当 Switch 为 on 时，此字段必填，否则此字段不生效。 */
  Timeout?: number;
}

/** 站点信息 */
declare interface Zone {
  /** 站点 ID。 */
  ZoneId?: string;
  /** 站点名称。 */
  ZoneName?: string;
  /** 站点当前使用的 NS 列表。 */
  OriginalNameServers?: string[];
  /** 腾讯云分配的 NS 列表。 */
  NameServers?: string[];
  /** 站点状态，取值有： active：NS 已切换； pending：NS 未切换； moved：NS 已切走； deactivated：被封禁。 initializing：待绑定套餐。 */
  Status?: string;
  /** 站点接入方式，取值有： full：NS 接入； partial：CNAME 接入； noDomainAccess：无域名接入； */
  Type?: string;
  /** 站点是否关闭。 */
  Paused?: boolean;
  /** 是否开启 CNAME 加速，取值有： enabled：开启； disabled：关闭。 */
  CnameSpeedUp?: string;
  /** CNAME 接入状态，取值有： finished：站点已验证； pending：站点验证中。 */
  CnameStatus?: string;
  /** 资源标签列表。 */
  Tags?: Tag[];
  /** 计费资源列表。 */
  Resources?: Resource[];
  /** 站点创建时间。 */
  CreatedOn?: string;
  /** 站点修改时间。 */
  ModifiedOn?: string;
  /** 站点接入地域，取值有： global：全球； mainland：中国大陆； overseas：境外区域。 */
  Area?: string;
  /** 用户自定义 NS 信息。 */
  VanityNameServers?: VanityNameServers | null;
  /** 用户自定义 NS IP 信息。 */
  VanityNameServersIps?: VanityNameServersIps[] | null;
  /** 展示状态，取值有： active：已启用； inactive：未生效； paused：已停用。 */
  ActiveStatus?: string;
  /** 站点别名。数字、英文、-和_组合，限制20个字符。 */
  AliasZoneName?: string;
  /** 是否伪站点，取值有： 0：非伪站点； 1：伪站点。 */
  IsFake?: number;
  /** 锁定状态，取值有： enable：正常，允许进行修改操作； disable：锁定中，不允许进行修改操作； plan_migrate：套餐迁移中，不允许进行修改操作。 */
  LockStatus?: string;
  /** 归属权验证信息。 */
  OwnershipVerification?: OwnershipVerification | null;
}

/** 站点加速配置。 */
declare interface ZoneConfig {
  /** 智能加速配置。 */
  SmartRouting?: SmartRoutingParameters | null;
  /** 缓存过期时间配置。 */
  Cache?: CacheConfigParameters | null;
  /** 浏览器缓存配置。 */
  MaxAge?: MaxAgeParameters | null;
  /** 节点缓存键配置。 */
  CacheKey?: CacheKeyConfigParameters | null;
  /** 缓存预刷新配置。 */
  CachePrefresh?: CachePrefreshParameters | null;
  /** 离线缓存配置。 */
  OfflineCache?: OfflineCacheParameters | null;
  /** 智能压缩配置。 */
  Compression?: CompressionParameters | null;
  /** 访问协议强制 HTTPS 跳转配置。 */
  ForceRedirectHTTPS?: ForceRedirectHTTPSParameters | null;
  /** HSTS 相关配置。 */
  HSTS?: HSTSParameters | null;
  /** TLS 相关配置。 */
  TLSConfig?: TLSConfigParameters | null;
  /** OCSP 装订配置。 */
  OCSPStapling?: OCSPStaplingParameters | null;
  /** HTTP2 相关配置。 */
  HTTP2?: HTTP2Parameters | null;
  /** QUIC 访问配置。 */
  QUIC?: QUICParameters | null;
  /** HTTP2 回源配置。 */
  UpstreamHTTP2?: UpstreamHTTP2Parameters | null;
  /** IPv6 访问配置。 */
  IPv6?: IPv6Parameters | null;
  /** WebSocket 配置。 */
  WebSocket?: WebSocketParameters | null;
  /** POST 请求传输配置。 */
  PostMaxSize?: PostMaxSizeParameters | null;
  /** 客户端 IP 回源请求头配置。 */
  ClientIPHeader?: ClientIPHeaderParameters | null;
  /** 回源时是否携带客户端 IP 所属地域信息的配置。 */
  ClientIPCountry?: ClientIPCountryParameters | null;
  /** gRPC 协议支持配置。 */
  Grpc?: GrpcParameters | null;
  /** 中国大陆加速优化配置。 */
  AccelerateMainland?: AccelerateMainlandParameters | null;
  /** 标准 Debug 配置。 */
  StandardDebug?: StandardDebugParameters | null;
}

/** 站点配置相关信息。 */
declare interface ZoneConfigParameters {
  /** 站点名称。 */
  ZoneName?: string;
  /** 站点配置信息。 */
  ZoneConfig?: ZoneConfig | null;
}

/** 返回站点信息 */
declare interface ZoneInfo {
  /** 站点id。 */
  ZoneId?: string;
  /** 站点名称。 */
  ZoneName?: string;
  /** 站点是否停用。取值有：false：非停用；true：停用。 */
  Paused?: boolean;
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
  /** 视频即时处理配置。 */
  JITVideoProcess?: JITVideoProcess | null;
}

declare interface BindSecurityTemplateToEntityRequest {
  /** 需要绑定或解绑的策略模板所属站点 ID。 */
  ZoneId: string;
  /** 绑定至策略模板（或者从策略模板解绑）的域名列表。 */
  Entities: string[];
  /** 绑定或解绑操作选项，取值有：bind：绑定域名至策略模板。unbind-keep-policy：将域名从策略模板解绑，解绑时保留当前策略。unbind-use-default：将域名从策略模板解绑，并使用默认空白策略。注意：解绑操作当前仅支持单个域名解绑。即：当 Operate 参数取值为 unbind-keep-policy 或 unbind-use-default 时，Entities 参数列表仅支持填写一个域名。 */
  Operate: string;
  /** 指定绑定或解绑的策略模板 ID 或站点全局策略如需绑定至策略模板，或从策略模板解绑，请指定策略模板 ID。如需绑定至站点全局策略，或从站点全局策略解绑，请使用 @ZoneLevel@domain 参数值。注意：解绑后，域名将使用独立策略，并单独计算规则配额，请确保解绑前套餐规则配额充足。 */
  TemplateId: string;
  /** 传入域名如果已经绑定了策略模板（含站点级防护策略），通过设置该参数表示是否替换该模板，默认值为 true。支持下列取值：true： 替换域名当前绑定的模板。false：不替换域名当前绑定的模板。注意：当设置为 false 时，若传入域名已经绑定策略模板，API 将返回错误；站点级防护策略也为一种策略模板。 */
  OverWrite?: boolean;
}

declare interface BindSecurityTemplateToEntityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindSharedCNAMERequest {
  /** 加速域名所属站点 ID。 */
  ZoneId: string;
  /** 绑定类型，取值有：bind：绑定；unbind：解绑。 */
  BindType: string;
  /** 接入域名与共享 CNAME 的绑定关系。 */
  BindSharedCNAMEMaps: BindSharedCNAMEMap[];
}

declare interface BindSharedCNAMEResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  /** 加速域名所属站点 ID。 */
  ZoneId: string;
  /** 加速域名。 */
  DomainName: string;
  /** 源站信息。 */
  OriginInfo: OriginInfo;
  /** 回源协议，取值有：FOLLOW: 协议跟随；HTTP: HTTP协议回源；HTTPS: HTTPS协议回源。不填默认为： FOLLOW。 */
  OriginProtocol?: string;
  /** HTTP回源端口，取值为1-65535，当OriginProtocol=FOLLOW/HTTP时生效, 不填默认为80。 */
  HttpOriginPort?: number;
  /** HTTPS回源端口，取值为1-65535，当OriginProtocol=FOLLOW/HTTPS时生效，不填默认为443。 */
  HttpsOriginPort?: number;
  /** IPv6状态，取值有：follow：遵循站点IPv6配置；on：开启状态；off：关闭状态。不填默认为：follow。 */
  IPv6Status?: string;
}

declare interface CreateAccelerationDomainResponse {
  /** 当您的站点未进行归属权验证时，您可通过该参数返回的信息单独对域名进行归属权校验。详情参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789)。 */
  OwnershipVerification?: OwnershipVerification | null;
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
  /** 四层代理模式，取值有： instance：表示实例模式。不填写使用默认值instance。 */
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
  /** 源站类型，取值有：custom：手动添加；loadbalancer：负载均衡；origins：源站组。 */
  OriginType: string;
  /** 源站信息：当 OriginType 为 custom 时，表示一个或多个源站，如`["8.8.8.8","9.9.9.9"]` 或 `OriginValue=["test.com"]`；当 OriginType 为 loadbalancer 时，表示一个负载均衡，如`["lb-xdffsfasdfs"]`；当 OriginType 为 origins 时，要求有且仅有一个元素，表示源站组ID，如`["origin-537f5b41-162a-11ed-abaa-525400c5da15"]`。 */
  OriginValue: string[];
  /** 传递客户端IP，取值有：TOA：TOA（仅Proto=TCP时可选）；PPV1：Proxy Protocol传递，协议版本V1（仅Proto=TCP时可选）；PPV2：Proxy Protocol传递，协议版本V2；OFF：不传递。默认值：OFF。 */
  ForwardClientIp?: string;
  /** 是否开启会话保持，取值有：true：开启；false：关闭。默认值：false。 */
  SessionPersist?: boolean;
  /** 会话保持的时间，只有当SessionPersist为true时，该值才会生效。 */
  SessionPersistTime?: number;
  /** 源站端口，支持格式：单端口：80；端口段：81-90，81至90端口。 */
  OriginPort?: string;
  /** 规则标签。默认值为空字符串。 */
  RuleTag?: string;
}

declare interface CreateApplicationProxyRuleResponse {
  /** 规则ID */
  RuleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCLSIndexRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 实时日志投递任务 ID。 */
  TaskId: string;
}

declare interface CreateCLSIndexResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigGroupVersionRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 待新建版本的配置组 ID。 */
  GroupId: string;
  /** 待导入的配置内容。要求采用 JSON 格式，按照 UTF-8 方式进行编码。配置文件内容可参考下方示例。 */
  Content: string;
  /** 版本描述，可输入最大长度为 50 个字符，可以通过本字段填写该版本的使用场景等。 */
  Description?: string;
}

declare interface CreateConfigGroupVersionResponse {
  /** 版本 ID。 */
  VersionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateContentIdentifierRequest {
  /** 内容标识符的描述，长度限制不超过 20 个字符。 */
  Description: string;
  /** 待绑定的目标套餐 ID，仅限企业版可用。当您账号下已存在套餐时，需要先前往 [套餐管理](https://console.cloud.tencent.com/edgeone/package) 获取套餐 ID，直接将内容标识符绑定至该套餐；若您当前没有可绑定的套餐时，请先购买企业版套餐。 */
  PlanId: string;
  /** 标签。该参数用于对内容标识符进行分权限管控。您需要先前往 [标签控制台](https://console.cloud.tencent.com/tag/taglist) 创建标签才可以在此处传入对应的标签键和标签值。 */
  Tags?: Tag[];
}

declare interface CreateContentIdentifierResponse {
  /** 生成的内容标识符 ID。创建完成之后您可以前往规则引擎在一定匹配条件下「设置内容标识符」。 */
  ContentId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCustomizeErrorPageRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 自定义错误页名称，名称为 2-30 个字符。 */
  Name: string;
  /** 自定义错误页面类型，取值有：text/html； application/json；text/plain；text/xml。 */
  ContentType: string;
  /** 自定义错误页面描述，描述不超过 60 个字符。 */
  Description?: string;
  /** 自定义错误页面内容，内容不超过 2KB。 */
  Content?: string;
}

declare interface CreateCustomizeErrorPageResponse {
  /** 页面 ID。 */
  PageId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDnsRecordRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** DNS 记录名，如果是中文、韩文、日文域名，需要转换为 punycode 后输入。 */
  Name: string;
  /** DNS 记录类型，取值有：A：将域名指向一个外网 IPv4 地址，如 8.8.8.8；AAAA：将域名指向一个外网 IPv6 地址；MX：用于邮箱服务器。存在多条 MX 记录时，优先级越低越优先；CNAME：将域名指向另一个域名，再由该域名解析出最终 IP 地址；TXT：对域名进行标识和说明，常用于域名验证和 SPF 记录（反垃圾邮件）；NS：如果需要将子域名交给其他 DNS 服务商解析，则需要添加 NS 记录。根域名无法添加 NS 记录；CAA：指定可为本站点颁发证书的 CA；SRV：标识某台服务器使用了某个服务，常见于微软系统的目录管理。不同的记录类型呢例如 SRV、CAA 记录对主机记录名称、记录值格式有不同的要求，各记录类型的详细说明介绍和格式示例请参考：[解析记录类型介绍](https://cloud.tencent.com/document/product/1552/90453)。 */
  Type: string;
  /** DNS 记录内容，根据 Type 值填入与之相对应的内容，如果是中文、韩文、日文域名，需要转换为 punycode 后输入。 */
  Content: string;
  /** DNS 记录解析线路，不指定默认为 Default，表示默认解析线路，代表全部地域生效。- 解析线路配置仅适用于当 Type（DNS 记录类型）为 A、AAAA、CNAME 时。- 解析线路配置仅适用于标准版、企业版套餐使用，取值请参考：[解析线路及对应代码枚举](https://cloud.tencent.com/document/product/1552/112542)。 */
  Location?: string;
  /** 缓存时间，用户可指定值范围 60~86400，数值越小，修改记录各地生效时间越快，默认为 300，单位：秒。 */
  TTL?: number;
  /** DNS 记录权重，用户可指定值范围 -1~100，设置为 0 时表示不解析，不指定默认为 -1，表示不设置权重。权重配置仅适用于当 Type（DNS 记录类型）为 A、AAAA、CNAME 时。注意：同一个子域名下，相同解析线路的不同 DNS 记录，应保持同时设置权重或者同时都不设置权重。 */
  Weight?: number;
  /** MX 记录优先级，该参数仅在当 Type（DNS 记录类型）为 MX 时生效，值越小优先级越高，用户可指定值范围0~50，不指定默认为0。 */
  Priority?: number;
}

declare interface CreateDnsRecordResponse {
  /** DNS 记录 ID。 */
  RecordId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFunctionRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 函数名称，只能包含小写字母、数字、连字符，以数字或字母开头，以数字或字母结尾，最大支持 30 个字符。 */
  Name: string;
  /** 函数内容，当前仅支持 JavaScript 代码，最大支持 5MB 大小。 */
  Content: string;
  /** 函数描述，最大支持 60 个字符。 */
  Remark?: string;
}

declare interface CreateFunctionResponse {
  /** 函数 ID。 */
  FunctionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFunctionRuleRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 规则条件列表，相同触发规则的不同条件匹配项之间为或关系。 */
  FunctionRuleConditions: FunctionRuleCondition[];
  /** 函数 ID，命中触发规则条件后执行的函数。 */
  FunctionId: string;
  /** 规则描述，最大支持 60 个字符。 */
  Remark?: string;
}

declare interface CreateFunctionRuleResponse {
  /** 规则 ID。 */
  RuleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL4ProxyRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 四层代理实例名称，可输入 1-50 个字符，允许的字符为 a-z、0-9、-，且 - 不能单独注册或连续使用，不能放在开头或结尾。创建完成后不支持修改。 */
  ProxyName: string;
  /** 四层代理实例加速区域。mainland：中国大陆可用区；overseas：全球可用区（不含中国大陆）；global：全球可用区。 */
  Area: string;
  /** 是否开启 IPv6 访问，不填写时默认为 off。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：on：开启；off：关闭。 */
  Ipv6?: string;
  /** 是否开启固定 IP，不填写时默认为 off。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：on：开启；off：关闭。 */
  StaticIp?: string;
  /** 是否开启中国大陆网络优化，不填写时默认为 off。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：on：开启；off：关闭。 */
  AccelerateMainland?: string;
  /** L3/L4 DDoS 防护配置，不填写时默认使用平台默认防护选项。详情参考 [独立 DDoS 防护](https://cloud.tencent.com/document/product/1552/95994)。 */
  DDosProtectionConfig?: DDosProtectionConfig;
}

declare interface CreateL4ProxyResponse {
  /** 四层实例 ID。 */
  ProxyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL4ProxyRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 四层代理实例 ID。 */
  ProxyId: string;
  /** 转发规则列表。单次最多支持 200 条转发规则。注意：L4ProxyRule 在此处使用时，Protocol、PortRange、OriginType、OriginValue、OriginPortRange 为必填字段；ClientIPPassThroughMode、SessionPersist、SessionPersistTime、RuleTag 均为选填字段；RuleId、Status 请勿填写。 */
  L4ProxyRules: L4ProxyRule[];
}

declare interface CreateL4ProxyRulesResponse {
  /** 新增转发规则的 ID，以数组的形式返回。 */
  L4ProxyRuleIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateL7AccRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 规则内容。 */
  Rules: RuleEngineItem[];
}

declare interface CreateL7AccRulesResponse {
  /** 规则 ID 列表。 */
  RuleIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLoadBalancerRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 实例名称，可输入 1-200 个字符，允许字符为 a-z，A-Z，0-9，_，-。 */
  Name: string;
  /** 实例类型，取值有：HTTP：HTTP 专用型，支持添加 HTTP 专用型和通用型源站组，仅支持被站点加速相关服务引用（如域名服务和规则引擎）；GENERAL：通用型，仅支持添加通用型源站组，能被站点加速服务（如域名服务和规则引擎）和四层代理引用。 */
  Type: string;
  /** 源站组列表及其对应的容灾调度优先级。详情请参考 [快速创建负载均衡实例](https://cloud.tencent.com/document/product/1552/104223) 中的示例场景。 */
  OriginGroups: OriginGroupInLoadBalancer[];
  /** 健康检查策略。详情请参考 [健康检查策略介绍](https://cloud.tencent.com/document/product/1552/104228)。不填写时，默认为不启用健康检查。 */
  HealthChecker?: HealthChecker;
  /** 源站组间的流量调度策略，取值有：Pritory：按优先级顺序进行故障转移。默认值为 Pritory。 */
  SteeringPolicy?: string;
  /** 实际访问某源站失败时的请求重试策略，详情请参考 [请求重试策略介绍](https://cloud.tencent.com/document/product/1552/104227)，取值有：OtherOriginGroup：单次请求失败后，请求优先重试下一优先级源站组；OtherRecordInOriginGroup：单次请求失败后，请求优先重试同源站组内的其他源站。默认值为 OtherRecordInOriginGroup。 */
  FailoverPolicy?: string;
}

declare interface CreateLoadBalancerResponse {
  /** 负载均衡实例 ID。 */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOriginGroupRequest {
  /** 站点 ID */
  ZoneId: string;
  /** 源站组名称，可输入1 - 200个字符，允许的字符为 a - z, A - Z, 0 - 9, _, - 。 */
  Name?: string;
  /** 源站组类型，此参数必填，取值有：GENERAL：通用型源站组，仅支持添加 IP/域名 源站，可以被域名服务、规则引擎、四层代理、通用型负载均衡、HTTP 专用型负载均衡引用；HTTP： HTTP 专用型源站组，支持添加 IP/域名、对象存储源站作为源站，无法被四层代理引用，仅支持被添加加速域名、规则引擎-修改源站、HTTP 专用型负载均衡引用。 */
  Type?: string;
  /** 源站记录信息，此参数必填。 */
  Records?: OriginRecord[];
  /** 回源 Host Header，仅 Type = HTTP 时传入生效，规则引擎修改 Host Header 配置优先级高于源站组的 Host Header。 */
  HostHeader?: string;
}

declare interface CreateOriginGroupResponse {
  /** 源站组ID。 */
  OriginGroupId?: string;
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
  ResourceNames?: string[];
  /** 购买的订单号列表。 */
  DealNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePlanRequest {
  /** 订阅的套餐类型，取值有： personal：个人版套餐，预付费套餐； basic：基础版套餐，预付费套餐； standard：标准版套餐，预付费套餐； enterprise：企业版套餐，后付费套餐。订阅预付费套餐时，请确保账号内有足够余额，余额不足会产生一个待支付的订单。计费概述参考 [Edgeone计费概述](https://cloud.tencent.com/document/product/1552/94156)不同套餐区别参考 [Edgeone计费套餐选型对比](https://cloud.tencent.com/document/product/1552/94165) */
  PlanType: string;
  /** 是否自动使用代金券，取值有： true：是； false：否。该参数仅在 PlanType 为 personal, basic, standard 时有效。不填写使用默认值 false。 */
  AutoUseVoucher?: string;
  /** 订阅预付费套餐参数，PlanType 为 personal, basic, standard 时，可以选填该参数，用于传入套餐的订阅时长和是否开启自动续费。不填该参数时，默认开通套餐时长为 1 个月，不开启自动续费。 */
  PrepaidPlanParam?: PrepaidPlanParam;
}

declare interface CreatePlanResponse {
  /** 套餐 ID，形如 edgeone-2unuvzjmmn2q。 */
  PlanId?: string;
  /** 订单号。 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrefetchTaskRequest {
  /** 站点 ID。若您希望快速提交不同站点下的 Targets Url，可以将其填写为 *，但前提是调用该 API 的账号必须具备主账号下全部站点资源的权限。 */
  ZoneId: string;
  /** 要预热的资源列表，每个元素格式类似如下:http://www.example.com/example.txt。参数值当前必填。注意：提交任务数受计费套餐配额限制，请查看 [EO计费套餐](https://cloud.tencent.com/document/product/1552/77380)。 */
  Targets?: string[];
  /** 是否对url进行encode，若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。 */
  EncodeUrl?: boolean;
  /** 附带的http头部信息。 */
  Headers?: Header[];
  /** 媒体分片预热控制，取值有：on：开启分片预热，预热描述文件，并递归解析描述文件分片进行预热；off：仅预热提交的描述文件；不填写时，默认值为 off。注意事项：1. 支持的描述文件为 M3U8，对应分片为 TS；2. 要求描述文件能正常请求，并按行业标准描述分片路径；3. 递归解析深度不超过 3 层；4. 解析获取的分片会正常累加每日预热用量，当用量超出配额时，会静默处理，不再执行预热。该参数为白名单功能，如有需要，请联系腾讯云工程师处理。 */
  PrefetchMediaSegments?: string;
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
  /** 站点 ID。若您希望快速提交不同站点下的 Targets Url，可以将其填写为 *，但前提是调用该 API 的账号必须具备主账号下全部站点资源的权限。 */
  ZoneId: string;
  /** 节点缓存清除类型，取值有：purge_url：URL刷新；purge_prefix：目录刷新；purge_host：Hostname 刷新；purge_all：站点下全部缓存刷新；purge_cache_tag：cache-tag 刷新。缓存清除类型详情请查看[清除缓存](https://cloud.tencent.com/document/product/1552/70759)。 */
  Type: string;
  /** 节点缓存清除方法，针对目录刷新、Hostname 刷新以及刷新全部缓存类型有效，取值有： invalidate：仅刷新目录下产生了更新的资源； delete：无论目录下资源是否更新都刷新节点资源。默认值： invalidate。 */
  Method?: string;
  /** 需清除缓存的资源列表，如 https://www.example.com/example.jpg，必须携带协议信息。更多元素格式依据清除缓存类型而定，可参考下方接口调用示例。单次提交的任务数受计费套餐配额限制，请查看 [EO 计费套餐](https://cloud.tencent.com/document/product/1552/77380)。 */
  Targets?: string[];
  /** 若有编码转换，仅清除编码转换后匹配的资源。若内容含有非 ASCII 字符集的字符，请开启此开关进行编码转换（编码规则遵循 RFC3986）。 */
  EncodeUrl?: boolean;
  /** 节点缓存清除类型取值为 purge_cache_tag 时附带的信息。 */
  CacheTag?: CacheTag;
}

declare interface CreatePurgeTaskResponse {
  /** 任务 ID。 */
  JobId?: string;
  /** 失败的任务列表及原因。 */
  FailedList?: FailReason[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRealtimeLogDeliveryTaskRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 实时日志投递任务的名称，格式为数字、英文、-和_组合，最多 200 个字符。 */
  TaskName: string;
  /** 实时日志投递任务类型，取值有：cls: 推送到腾讯云 CLS；custom_endpoint：推送到自定义 HTTP(S) 地址；s3：推送到 AWS S3 兼容存储桶地址。 */
  TaskType: string;
  /** 实时日志投递任务对应的实体（七层域名或者四层代理实例）列表。取值示例如下：七层域名：domain.example.com；四层代理实例：sid-2s69eb5wcms7。 */
  EntityList: string[];
  /** 数据投递类型，取值有：domain：站点加速日志；application：四层代理日志；web-rateLiming：速率限制和 CC 攻击防护日志；web-attack：托管规则日志；web-rule：自定义规则日志；web-bot：Bot管理日志。 */
  LogType: string;
  /** 数据投递区域，取值有：mainland：中国大陆境内；overseas：全球（不含中国大陆）。 */
  Area: string;
  /** 投递的预设字段列表。 */
  Fields: string[];
  /** 投递的自定义字段列表，支持在 HTTP 请求头、响应头、Cookie、请求正文中提取指定内容。自定义字段名称不能重复，且最多不能超过 200 个字段。单个实时日志推送任务最多添加 5 个请求正文类型的自定义字段。目前仅站点加速日志（LogType=domain）支持添加自定义字段。 */
  CustomFields?: CustomField[];
  /** 日志投递的过滤条件，不填表示投递全量日志。 */
  DeliveryConditions?: DeliveryCondition[];
  /** 采样比例，采用千分制，取值范围为1-1000，例如：填写 605 表示采样比例为 60.5%。不填表示采样比例为 100%。 */
  Sample?: number;
  /** 日志投递的输出格式。不填表示为默认格式，默认格式逻辑如下：当 TaskType 取值为 custom_endpoint 时，默认格式为多个 JSON 对象组成的数组，每个 JSON 对象为一条日志；当 TaskType 取值为 s3 时，默认格式为 JSON Lines；特别地，当 TaskType 取值为 cls 时，LogFormat.FormatType 的值只能为 json，且 LogFormat 中其他参数将被忽略，建议不传 LogFormat。 */
  LogFormat?: LogFormat;
  /** CLS 的配置信息。当 TaskType 取值为 cls 时，该参数必填。 */
  CLS?: CLSTopic;
  /** 自定义 HTTP 服务的配置信息。当 TaskType 取值为 custom_endpoint 时，该参数必填。 */
  CustomEndpoint?: CustomEndpoint;
  /** AWS S3 兼容存储桶的配置信息。当 TaskType 取值为 s3 时，该参数必填。 */
  S3?: S3;
}

declare interface CreateRealtimeLogDeliveryTaskResponse {
  /** 创建成功的任务ID。 */
  TaskId?: string;
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

declare interface CreateSharedCNAMERequest {
  /** 共享 CNAME 所属站点的 ID。 */
  ZoneId: string;
  /** 共享 CNAME 前缀。请输入合法的域名前缀，例如"test-api"、"test-api.com"，限制输入 50 个字符。共享 CNAME 完整格式为：`<自定义前缀>++share.dnse[0-5].com`。例如前缀传入 example.com，EO 会为您创建共享 CNAME：example.com.sai2ig51kaa5.share.dnse2.com。 */
  SharedCNAMEPrefix: string;
  /** 描述。可输入 1-50 个任意字符。 */
  Description?: string;
}

declare interface CreateSharedCNAMEResponse {
  /** 共享 CNAME。格式为：`<自定义前缀>++share.dnse[0-5].com`。 */
  SharedCNAME?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateZoneRequest {
  /** 站点接入类型。该参数取值如下，不填写时默认为 partial：partial：CNAME 接入；full：NS 接入；noDomainAccess：无域名接入；dnsPodAccess：DNSPod 托管接入，该接入模式要求您的域名已托管在 DNSPod 内。 */
  Type?: string;
  /** 站点名称。CNAME/NS 接入的时，请传入二级域名（example.com）作为站点名称；无域名接入时，该值请保留为空。 */
  ZoneName?: string;
  /** Type 取值为 partial/full 时，七层域名的加速区域。以下为该参数取值，不填写时该值默认为 overseas。Type 取值为 noDomainAccess 时该值请保留为空： global: 全球可用区； mainland: 中国大陆可用区； overseas: 全球可用区（不含中国大陆）。 */
  Area?: string;
  /** 待绑定的目标套餐 ID。当您账号下已存在套餐时，可以填写此参数，直接将站点绑定至该套餐。若您当前没有可绑定的套餐时，请前往控制台购买套餐完成站点创建。 */
  PlanId?: string;
  /** 同名站点标识。限制输入数字、英文、"." 、"-" 和 "_"，长度 200 个字符以内。详情参考 [同名站点标识](https://cloud.tencent.com/document/product/1552/70202)，无此使用场景时，该字段保留为空即可。 */
  AliasZoneName?: string;
  /** 标签。该参数用于对站点进行分权限管控、分账。需要先前往 [标签控制台](https://console.cloud.tencent.com/tag/taglist) 创建对应的标签才可以在此处传入对应的标签键和标签值。 */
  Tags?: Tag[];
  /** 是否允许重复接入。 true：允许重复接入； false：不允许重复接入。不填写使用默认值false。 */
  AllowDuplicates?: boolean;
  /** 是否跳过站点现有的DNS记录扫描。默认值：false。 */
  JumpStart?: boolean;
}

declare interface CreateZoneResponse {
  /** 站点 ID。 */
  ZoneId?: string;
  /** 站点归属权验证信息。站点完成创建后，您还需要完成归属权校验，站点才能正常服务。Type = partial 时，您需要参考 [站点/域名归属权验证](https://cloud.tencent.com/document/product/1552/70789) 前往您的域名解析服务商添加 TXT 记录或者前往根域名服务器添加文件，再调用接口 [VerifyOwnership]() 完成验证；Type = full 时，您需要参考 [修改 DNS 服务器](https://cloud.tencent.com/document/product/1552/90452) 切换 DNS 服务器即可，可通过接口 [VerifyOwnership]() 查询 DNS 是否切换成功；Type = noDomainAccess 时，该值为空，不需要进行任何操作。 */
  OwnershipVerification?: OwnershipVerification | null;
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

declare interface DeleteContentIdentifierRequest {
  /** 内容标识符 ID。 */
  ContentId: string;
}

declare interface DeleteContentIdentifierResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomErrorPageRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 自定义页面 ID。 */
  PageId: string;
}

declare interface DeleteCustomErrorPageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDnsRecordsRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 待删除的 DNS 记录 ID 列表，上限：1000。 */
  RecordIds: string[];
}

declare interface DeleteDnsRecordsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFunctionRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 函数 ID。 */
  FunctionId: string;
}

declare interface DeleteFunctionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFunctionRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 规则 ID 列表。 */
  RuleIds: string[];
}

declare interface DeleteFunctionRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteL4ProxyRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 四层代理实例 ID。 */
  ProxyId: string;
}

declare interface DeleteL4ProxyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteL4ProxyRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 四层代理实例 ID。 */
  ProxyId: string;
  /** 转发规则 ID 列表。单次最多支持 200 条转发规则。 */
  RuleIds: string[];
}

declare interface DeleteL4ProxyRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteL7AccRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 需要删除的规则 ID 列表。您可以通过 DescribeL7AccRules 获取 Ruleid。 */
  RuleIds: string[];
}

declare interface DeleteL7AccRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoadBalancerRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 负载均衡实例 ID。 */
  InstanceId: string;
}

declare interface DeleteLoadBalancerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOriginGroupRequest {
  /** 站点 ID */
  ZoneId: string;
  /** 源站组 ID，此参数必填。 */
  GroupId?: string;
}

declare interface DeleteOriginGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRealtimeLogDeliveryTaskRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 实时日志投递任务 ID。 */
  TaskId: string;
}

declare interface DeleteRealtimeLogDeliveryTaskResponse {
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

declare interface DeleteSharedCNAMERequest {
  /** 共享 CNAME 所属站点 ID。 */
  ZoneId: string;
  /** 需要删除的共享 CNAME。 */
  SharedCNAME: string;
}

declare interface DeleteSharedCNAMEResponse {
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

declare interface DeployConfigGroupVersionRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 环境 ID。请填写版本需要发布到的环境 ID。 */
  EnvId: string;
  /** 需要发布的版本信息。可以同时变更多个不同配置组的版本，每个配置组一次仅支持变更一个版本。 */
  ConfigGroupVersionInfos: ConfigGroupVersionInfo[];
  /** 变更说明。用于描述此次变更的内容、原因，最大支持 100 个字符。 */
  Description: string;
}

declare interface DeployConfigGroupVersionResponse {
  /** 发布记录 ID。 */
  RecordId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccelerationDomainsRequest {
  /** 加速域名所属站点 ID。 */
  ZoneId: string;
  /** 分页查询偏移量，默认为 0。 */
  Offset?: number;
  /** 分页查询限制数目，默认值：20，上限：200。 */
  Limit?: number;
  /** 过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 zone-id 下所有域名信息。详细的过滤条件如下：domain-name：按照加速域名进行过滤；origin-type：按照源站类型进行过滤；origin：按照主源站地址进行过滤；backup-origin： 按照备用源站地址进行过滤；domain-cname：按照 CNAME 进行过滤；share-cname：按照共享 CNAME 进行过滤； */
  Filters?: AdvancedFilter[];
  /** 可根据该字段对返回结果进行排序，取值有：created_on：加速域名创建时间；domain-name：加速域名。不填写时，默认对返回结果按照 domain-name 排序。 */
  Order?: string;
  /** 排序方向，如果是字段值为数字，则根据数字大小排序；如果字段值为文本，则根据 ascill 码的大小排序。取值有：asc：升序排列；desc：降序排列。不填写使用默认值 asc。 */
  Direction?: string;
  /** 匹配方式，取值有：all：返回匹配所有查询条件的加速域名；any：返回匹配任意一个查询条件的加速域名。不填写时默认值为 all。 */
  Match?: string;
}

declare interface DescribeAccelerationDomainsResponse {
  /** 符合查询条件的加速域名个数。 */
  TotalCount?: number;
  /** 符合查询条件的所有加速域名的信息。 */
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
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：target-name：目标域名名称进行过滤；alias-name：按照别称域名名称进行过滤。模糊查询时仅支持过滤字段名为 alias-name。 */
  Filters?: AdvancedFilter[];
}

declare interface DescribeAliasDomainsResponse {
  /** 符合条件的别称域名个数。 */
  TotalCount?: number;
  /** 别称域名详细信息列表。 */
  AliasDomains?: AliasDomain[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationProxiesRequest {
  /** 站点ID。该参数必填。 */
  ZoneId?: string;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：proxy-id 按照【代理ID】进行过滤。代理ID形如：proxy-ev2sawbwfd。 类型：String 必选：否zone-id 按照【站点ID】进行过滤。站点ID形如：zone-vawer2vadg。 类型：String 必选：否rule-tag 按照【规则标签】对应用代理下的规则进行过滤。规则标签形如：rule-service-1。 类型：String 必选：否 */
  Filters?: Filter[];
  /** 分页查询偏移量。默认为0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
}

declare interface DescribeApplicationProxiesResponse {
  /** 应用代理列表。 */
  ApplicationProxies?: ApplicationProxy[];
  /** 记录总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAvailablePlansRequest {
}

declare interface DescribeAvailablePlansResponse {
  /** 当前账户可购买套餐类型及相关信息。 */
  PlanInfo?: PlanInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillingDataRequest {
  /** 起始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 站点 ID 集合，此参数必填。 */
  ZoneIds: string[];
  /** 指标列表，取值有：acc_flux: 内容加速流量，单位为 Byte；smt_flux: 智能加速流量，单位为 Byte；l4_flux: 四层加速流量，单位为 Byte；sec_flux: 独立防护流量，单位为 Byte；zxctg_flux: 中国大陆网络优化流量，单位为 Byte；acc_bandwidth: 内容加速带宽，单位为 bps；smt_bandwidth: 智能加速带宽，单位为 bps；l4_bandwidth: 四层加速带宽，单位为 bps；sec_bandwidth: 独立防护带宽，单位为 bps；zxctg_bandwidth: 中国大陆网络优化带宽，单位为 bps；sec_request_clean: HTTP/HTTPS 请求，单位为次；smt_request_clean: 智能加速请求，单位为次；quic_request: QUIC 请求，单位为次；bot_request_clean: Bot 请求，单位为次；cls_count: 实时日志推送条数，单位为条；ddos_bandwidth: 弹性 DDoS 防护带宽，单位为 bps；total_transcode：所有规格音频，视频即时转码，转封装时长，单位为秒；remux：转封装时长，单位为秒；transcode_audio：音频转码时长，单位为秒；transcode_H264_SD：H.264 编码方式的标清视频（短边 <= 480 px）时长，单位为秒；transcode_H264_HD：H.264 编码方式的高清视频（短边 <= 720 px）时长，单位为秒；transcode_H264_FHD：H.264 编码方式的全高清视频（短边 <= 1080 px）时长，单位为秒；transcode_H264_2K：H.264 编码方式的 2K 视频（短边 <= 1440 px）时长，单位为秒。 */
  MetricName: string;
  /** 查询时间粒度，取值有：5min：5 分钟粒度；hour：1 小时粒度；day：1 天粒度。 */
  Interval: string;
  /** 过滤条件，详细的过滤条件取值如下：host：按照域名进行过滤。示例值：test.example.com。proxy-id：按照四层代理实例 ID 进行过滤。示例值：sid-2rugn89bkla9。region-id：按照计费大区进行过滤。可选项如下： CH：中国大陆境内 AF：非洲 AS1：亚太一区 AS2：亚太二区 AS3：亚太三区 EU：欧洲 MidEast：中东 NA：北美 SA：南美 */
  Filters?: BillingDataFilter[];
}

declare interface DescribeBillingDataResponse {
  /** 数据点列表。 */
  Data?: BillingData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigGroupVersionDetailRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 版本 ID。 */
  VersionId: string;
}

declare interface DescribeConfigGroupVersionDetailResponse {
  /** 版本信息。 */
  ConfigGroupVersionInfo?: ConfigGroupVersionInfo;
  /** 版本文件的内容。以 JSON 格式返回。 */
  Content?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigGroupVersionsRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 配置组 ID。 */
  GroupId: string;
  /** 过滤条件，Filters.Values 的上限为 20，该参数不填写时，返回所选配置组下的所有版本信息。详细的过滤条件如下：version-id：按照版本 ID 进行过滤； */
  Filters?: AdvancedFilter[];
  /** 分页查询偏移量。默认值为 0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeConfigGroupVersionsResponse {
  /** 版本总数。 */
  TotalCount?: number;
  /** 版本信息列表。 */
  ConfigGroupVersionInfos?: ConfigGroupVersionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeContentIdentifiersRequest {
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：100。 */
  Limit?: number;
  /** 过滤条件，Filters 的上限为 20，Filters.Values 的上限为 20。该参数不填写时，默认返回当前 AppId 下有权限的内容标识符。详细的过滤条件如下：description：按照内容标识符描述批量进行过滤；例如：test；content-id：按照内容标识符 ID 批量进行过滤；例如：eocontent-2noz78a8ev6k；tag-key：按照标签键进行过滤； tag-value： 按照标签值进行过滤；status：按照内容标识符状态进行过滤，取值有：active：生效中；deleted：已删除。仅支持按照 description 模糊查询，其余字段需要精准查询。 */
  Filters?: AdvancedFilter[];
}

declare interface DescribeContentIdentifiersResponse {
  /** 符合过滤条件的内容标识符总数。 */
  TotalCount?: number;
  /** 内容标识符详细内容列表。 */
  ContentIdentifiers?: ContentIdentifier[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeContentQuotaRequest {
  /** 站点 ID。 */
  ZoneId: string;
}

declare interface DescribeContentQuotaResponse {
  /** 刷新相关配额。 */
  PurgeQuota?: Quota[] | null;
  /** 预热相关配额。 */
  PrefetchQuota?: Quota[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomErrorPagesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 过滤条件，Filters.Values 的上限为20，详细的过滤条件Name值如下：page-id： 按照页面 ID 进行过滤；name： 按照页面名称进行过滤；description：按照页面描述过滤；content-type：按照页面类型过滤。 */
  Filters?: AdvancedFilter[];
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
}

declare interface DescribeCustomErrorPagesResponse {
  /** 自定义错误页面总数。 */
  TotalCount?: number;
  /** 自定义错误页面数据列表。 */
  ErrorPages?: CustomErrorPage[];
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
  /** 站点集合，此参数必填。 */
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
  TotalCount?: number;
  /** DDoS攻击数据内容列表。 */
  Data?: SecEntry[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSAttackEventRequest {
  /** 开始时间，时间范围为 30 天。 */
  StartTime: string;
  /** 结束时间，时间范围为 30 天。 */
  EndTime: string;
  /** ddos策略组集合，不填默认选择全部策略。 */
  PolicyIds?: number[];
  /** 站点集合，此参数必填。 */
  ZoneIds?: string[];
  /** 分页查询的限制数目，默认值为20，最大查询条目为1000。 */
  Limit?: number;
  /** 分页的偏移量，默认值为0。 */
  Offset?: number;
  /** 展示攻击详情的参数，若填false，默认只返回攻击次数，不返回攻击详情；若填true，返回攻击详情。 */
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
  /** 站点ID集合，此参数必填。 */
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
  Data?: TopEntry[] | null;
  /** 查询结果的总条数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDefaultCertificatesRequest {
  /** 站点 ID。 */
  ZoneId?: string;
  /** 过滤条件，Filters.Values的上限为5。详细的过滤条件如下：zone-id 按照【站点ID】进行过滤。站点ID形如：zone-xxx。 类型：String 必选：是 */
  Filters?: Filter[];
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：100。 */
  Limit?: number;
}

declare interface DescribeDefaultCertificatesResponse {
  /** 证书总数。 */
  TotalCount?: number;
  /** 默认证书列表。 */
  DefaultServerCertInfo?: DefaultServerCertInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeployHistoryRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 环境 ID。 */
  EnvId: string;
  /** 过滤条件，Filters.Values 的上限为 20，详细的过滤条件如下：record-id：按照发布记录 ID 进行过滤进行过滤。 */
  Filters?: AdvancedFilter[];
}

declare interface DescribeDeployHistoryResponse {
  /** 发布记录总数。 */
  TotalCount?: number;
  /** 发布记录详情。 */
  Records?: DeployRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDnsRecordsRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 分页查询偏移量，默认为 0。 */
  Offset?: number;
  /** 分页查询限制数目，默认值：20，上限：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values 的上限为20。详细的过滤条件如下：id： 按照 DNS 记录 ID 进行过滤，支持模糊查询；name：按照 DNS 记录名称进行过滤，支持模糊查询；content：按照 DNS 记录内容进行过滤，支持模糊查询；type：按照 DNS 记录类型进行过滤，不支持模糊查询。可选项： A：将域名指向一个外网 IPv4 地址，如 8.8.8.8； AAAA：将域名指向一个外网 IPv6 地址； CNAME：将域名指向另一个域名，再由该域名解析出最终 IP 地址； TXT：对域名进行标识和说明，常用于域名验证和 SPF 记录（反垃圾邮件）； NS：如果需要将子域名交给其他 DNS 服务商解析，则需要添加 NS 记录。根域名无法添加 NS 记录； CAA：指定可为本站点颁发证书的 CA； SRV：标识某台服务器使用了某个服务，常见于微软系统的目录管理； MX：指定收件人邮件服务器。ttl：按照解析生效时间进行过滤，不支持模糊查询。 */
  Filters?: AdvancedFilter[];
  /** 排序依据，取值有：content：DNS 记录内容；created-on：DNS 记录创建时间；name：DNS 记录名称；ttl：缓存时间；type：DNS 记录类型。默认根据 type, name 属性组合排序。 */
  SortBy?: string;
  /** 列表排序方式，取值有：asc：升序排列；desc：降序排列。默认值为 asc。 */
  SortOrder?: string;
  /** 匹配方式，取值有：all：返回匹配所有查询条件的记录；any：返回匹配任意一个查询条件的记录。默认值为 all。 */
  Match?: string;
}

declare interface DescribeDnsRecordsResponse {
  /** DNS 记录总数。 */
  TotalCount?: number;
  /** DNS 记录列表。 */
  DnsRecords?: DnsRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentsRequest {
  /** 站点 ID。 */
  ZoneId: string;
}

declare interface DescribeEnvironmentsResponse {
  /** 环境总数。 */
  TotalCount?: number;
  /** 环境列表。 */
  EnvInfos?: EnvInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFunctionRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 过滤条件列表，多个条件为且关系，Filters.Values 的上限为 20。详细的过滤条件如下：rule-id：按照【规则 ID】进行精确匹配。function-id：按照【函数 ID】进行精确匹配。remark：按照【规则描述】进行模糊匹配。 */
  Filters?: Filter[];
}

declare interface DescribeFunctionRulesResponse {
  /** 规则详情列表。 */
  FunctionRules?: FunctionRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFunctionRuntimeEnvironmentRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 函数 ID。 */
  FunctionId: string;
}

declare interface DescribeFunctionRuntimeEnvironmentResponse {
  /** 环境变量列表。 */
  EnvironmentVariables?: FunctionEnvironmentVariable[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFunctionsRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 按照函数 ID 列表过滤。 */
  FunctionIds?: string[];
  /** 过滤条件列表，多个条件为且关系，Filters.Values 的上限为 20。详细的过滤条件如下：name：按照【函数名称】进行模糊匹配。remark：按照【函数描述】进行模糊匹配。 */
  Filters?: Filter[];
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：200。 */
  Limit?: number;
}

declare interface DescribeFunctionsResponse {
  /** 符合查询条件的函数总数。 */
  TotalCount?: number;
  /** 符合查询条件的所有函数信息。 */
  Functions?: Function[];
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
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：host：按照域名进行过滤。 */
  Filters?: Filter[];
}

declare interface DescribeHostsSettingResponse {
  /** 域名列表。 */
  DetailHosts?: DetailHost[];
  /** 域名数量。 */
  TotalNumber?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIPRegionRequest {
  /** 待查询的 IP 列表，支持 IPV4 和 IPV6，最大可查询 100 条。 */
  IPs: string[];
}

declare interface DescribeIPRegionResponse {
  /** IP 归属信息列表。 */
  IPRegionInfo?: IPRegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIdentificationsRequest {
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：zone-name：按照站点名称进行过滤。 */
  Filters: Filter[];
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
}

declare interface DescribeIdentificationsResponse {
  /** 符合条件的站点个数。 */
  TotalCount?: number;
  /** 站点验证信息列表。 */
  Identifications?: Identification[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL4ProxyRequest {
  /** 四层代理实例所属站点的 ID。 */
  ZoneId: string;
  /** 分页查询偏移量，不填写时默认为 0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 zone-id 下所有四层代理实例信息。详细的过滤条件如下：proxy-id：按照四层代理实例 ID 进行过滤；ddos-protection-type：按照安全防护类型进行过滤。 */
  Filters?: Filter[];
}

declare interface DescribeL4ProxyResponse {
  /** 四层代理实例的数量。 */
  TotalCount?: number;
  /** 四层代理实例列表。 */
  L4Proxies?: L4Proxy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL4ProxyRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 四层代理实例 ID。 */
  ProxyId: string;
  /** 分页查询偏移量，不填写时默认为 0。 */
  Offset: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit: number;
  /** 过滤条件，Filters.Values的上限为20。不填写时返回当前四层实例下所有的规则信息，详细的过滤条件如下： rule-id：按照规则 ID 对四层代理实例下的规则进行过滤。规则 ID 形如：rule-31vv7qig0vjy； rule-tag：按照规则标签对四层代理实例下的规则进行过滤。 */
  Filters?: Filter[];
}

declare interface DescribeL4ProxyRulesResponse {
  /** 转发规则总数。 */
  TotalCount?: number;
  /** 转发规则列表。 */
  L4ProxyRules?: L4ProxyRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL7AccRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 过滤条件，Filters.Values 的上限为 20，不填写此参数时默认按顺序返回站点下的规则。详细的过滤条件如下：rule-id：按照规则 ID 进行过滤。 */
  Filters?: Filter[];
  /** 分页查询限制数目，默认值：20，上限：1000。 */
  Limit?: number;
  /** 分页查询偏移量，默认为 0。 */
  Offset?: number;
}

declare interface DescribeL7AccRulesResponse {
  /** 规则总数。 */
  TotalCount?: number;
  /** 规则列表，规则按照从上到下的顺序执行，详情参考[规则生效优先级](https://cloud.tencent.com/document/product/1552/70901)。 */
  Rules?: RuleEngineItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeL7AccSettingRequest {
  /** 站点 ID。 */
  ZoneId: string;
}

declare interface DescribeL7AccSettingResponse {
  /** 站点加速全局配置。 */
  ZoneSetting?: ZoneConfigParameters | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancerListRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 分页查询偏移量，默认为 0。 */
  Offset?: number;
  /** 分页查询限制数目，默认值：20，最大值：100。 */
  Limit?: number;
  /** 过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 zone-id 下所有负载均衡实例信息。详细的过滤条件如下：InstanceName：按照负载均衡实例名称进行过滤；InstanceId：按照负载均衡实例 ID 进行过滤。 */
  Filters?: Filter[];
}

declare interface DescribeLoadBalancerListResponse {
  /** 负载均衡实例总数。 */
  TotalCount?: number;
  /** 负载均衡实例列表。 */
  LoadBalancerList?: LoadBalancer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOriginGroupHealthStatusRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 负载均衡实例 ID。 */
  LBInstanceId: string;
  /** 源站组 ID。不填写时默认获取负载均衡下所有源站组的健康状态。 */
  OriginGroupIds?: string[];
}

declare interface DescribeOriginGroupHealthStatusResponse {
  /** 源站组下源站的健康状态。 */
  OriginGroupHealthStatusList?: OriginGroupHealthStatusDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOriginGroupRequest {
  /** 站点ID，此参数必填。 */
  ZoneId?: string;
  /** 分页查询偏移量，不填默认为0。 */
  Offset?: number;
  /** 分页查询限制数目，不填默认为20，取值：1-1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：origin-group-id：按照源站组 ID 进行过滤，不支持模糊查询。源站组 ID 形如：origin-2ccgtb24-7dc5-46s2-9r3e-95825d53dwe3a；origin-group-name： 按照源站组名称进行过滤，使用模糊查询时，仅支持填写一个源站组名称。 */
  Filters?: AdvancedFilter[];
}

declare interface DescribeOriginGroupResponse {
  /** 记录总数。 */
  TotalCount?: number;
  /** 源站组信息。 */
  OriginGroups?: OriginGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOriginProtectionRequest {
  /** 查询的站点ID集合。该参数必填。 */
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
  /** 站点 ID 集合，此参数必填。 */
  ZoneIds?: string[];
  /** 查询的域名集合，此参数已经废弃。 */
  Domains?: string[];
  /** 查询的协议类型，取值有：http: http协议；https: https协议；http2: http2协议；all: 所有协议。不填默认为all，此参数暂未生效。 */
  Protocol?: string;
  /** 查询时间粒度，取值有：min：1分钟；5min：5分钟；hour：1小时；day：1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。 */
  Interval?: string;
  /** 过滤条件，详细的过滤条件Key值如下：socket 按照【HTTP协议类型】进行过滤。 对应的Value可选项如下： HTTP：HTTP 协议； HTTPS：HTTPS协议； QUIC：QUIC协议。domain 按照【域名】进行过滤。tagKey 按照【标签Key】进行过滤。tagValue 按照【标签Value】进行过滤。 */
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

declare interface DescribePlansRequest {
  /** 过滤条件，Filters.Values 的上限为 20。详细的过滤条件如下：plan-type 按照【套餐类型】进行过滤。 可选的类型有： plan-trial：试用版套餐； plan-personal：个人版套餐； plan-basic：基础版套餐； plan-standard：标准版套餐； plan-enterprise：企业版套餐。 plan-id 按照【套餐 ID】进行过滤。套餐 ID 形如：edgeone-268z103ob0sx。area 按照【套餐加速地域】进行过滤。 服务区域，可选的类型有： mainland: 中国大陆； overseas: 全球（不包括中国大陆)； global: 全球（包括中国大陆)。status 按照【套餐状态】进行过滤。 可选的状态有： normal：正常状态； expiring-soon：即将过期； expired：已到期; isolated：已隔离。 */
  Filters?: Filter[];
  /** 排序字段，取值有： enable-time：生效时间； expire-time：过期时间。不填写使用默认值 enable-time。 */
  Order?: string;
  /** 排序方向，取值有：asc：从小到大排序；desc：从大到小排序。不填写使用默认值 desc。 */
  Direction?: string;
  /** 分页查询限制数目。默认值：20，最大值：200。 */
  Limit?: number;
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
}

declare interface DescribePlansResponse {
  /** 符合条件的套餐个数。 */
  TotalCount?: number;
  /** 套餐信息列表。 */
  Plans?: Plan[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrefetchTasksRequest {
  /** 站点ID。该参数必填。 */
  ZoneId?: string;
  /** 查询起始时间，时间与 job-id 必填一个。 */
  StartTime?: string;
  /** 查询结束时间，时间与 job-id 必填一个。 */
  EndTime?: string;
  /** 分页查询偏移量，默认为 0。 */
  Offset?: number;
  /** 分页查询限制数目，默认值：20，上限：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values 的上限为 20。详细的过滤条件如下：job-id：按照任务 ID 进行过滤。job-id 形如：1379afjk91u32h，暂不支持多值，不支持模糊查询；target：按照目标资源信息进行过滤。target 形如：http://www.qq.com/1.txt，暂不支持多值，不支持模糊查询；domains：按照域名行过滤。domains 形如：www.qq.com，不支持模糊查询；statuses：按照任务状态进行过滤，不支持模糊查询。可选项： processing：处理中 success：成功 failed：失败 timeout：超时 invalid：无效。即源站响应非 2xx 状态码，请检查源站服务。 */
  Filters?: AdvancedFilter[];
}

declare interface DescribePrefetchTasksResponse {
  /** 该查询条件总共条目数。 */
  TotalCount?: number;
  /** 任务结果列表。 */
  Tasks?: Task[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePurgeTasksRequest {
  /** 站点 ID。该参数必填。 */
  ZoneId?: string;
  /** 查询起始时间，时间与 job-id 必填一个。 */
  StartTime?: string;
  /** 查询结束时间，时间与 job-id 必填一个。 */
  EndTime?: string;
  /** 分页查询偏移量，默认为 0。 */
  Offset?: number;
  /** 分页查询限制数目，默认值：20，最大值：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：job-id：按照任务 ID 进行过滤。job-id 形如：1379afjk91u32h，暂不支持多值，不支持模糊查询；target：按照目标资源信息进行过滤，target 形如：http://www.qq.com/1.txt 或者 tag1，暂不支持多值，支持模糊查询；domains：按照域名进行过滤，形如：www.qq.com，不支持模糊查询；statuses：按照任务状态进行过滤，不支持模糊查询。可选项： processing：处理中 success：成功 failed：失败 timeout：超时type：按照清除缓存类型进行过滤，暂不支持多值，不支持模糊查询。可选项： purge_url：URL purge_prefix：前缀 purge_all：全部缓存内容 purge_host：Hostname purge_cache_tag：CacheTag */
  Filters?: AdvancedFilter[];
}

declare interface DescribePurgeTasksResponse {
  /** 该查询条件总共条目数。 */
  TotalCount?: number;
  /** 任务结果列表。 */
  Tasks?: Task[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRealtimeLogDeliveryTasksRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：1000。 */
  Limit?: number;
  /** 过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 zone-id 下所有实时日志投递任务信息。详细的过滤条件如下：task-id：按照实时日志投递任务 ID进行过滤。不支持模糊查询。task-name：按照实时日志投递任务名称进行过滤。支持模糊查询，使用模糊查询时，仅支持填写一个实时日志投递任务名称。entity-list：按照实时日志投递任务对应的实体进行过滤。不支持模糊查询。示例值：domain.example.com 或者 sid-2s69eb5wcms7。task-type：按照实时日志投递任务类型进行过滤。不支持模糊查询。可选项如下： cls: 推送到腾讯云 CLS； custom_endpoint：推送到自定义 HTTP(S) 地址； s3：推送到 AWS S3 兼容存储桶地址。 */
  Filters?: AdvancedFilter[];
}

declare interface DescribeRealtimeLogDeliveryTasksResponse {
  /** 符合查询条件的实时日志投递任务个数。 */
  TotalCount?: number;
  /** 符合查询条件的所有实时日志投递任务列表。 */
  RealtimeLogDeliveryTasks?: RealtimeLogDeliveryTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 过滤条件，Filters.Values的上限为20。详细的过滤条件如下：rule-id：按照规则 ID 进行过滤。 */
  Filters?: Filter[];
}

declare interface DescribeRulesResponse {
  /** 站点 ID。 */
  ZoneId?: string;
  /** 规则列表，按规则执行顺序从先往后排序。 */
  RuleItems?: RuleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesSettingRequest {
}

declare interface DescribeRulesSettingResponse {
  /** 规则引擎可应用匹配请求的设置列表及其详细建议配置信息。 */
  Actions?: RulesSettingAction[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityIPGroupInfoRequest {
  /** 站点的 ID ，用于指定查询的站点范围。 */
  ZoneId: string;
  /** 单次返回的最大条目数。默认值为 20 ，最大查询条目为 1000 。 */
  Limit?: number;
  /** 分页查询的起始条目偏移量。默认值为 0 。 */
  Offset?: number;
}

declare interface DescribeSecurityIPGroupInfoResponse {
  /** 返回的满足条件的 IP 组数量。 */
  TotalCount?: number;
  /** IP 组的详细配置信息。包含每个 IP 组的 ID 、名称和 IP /网段列表信息。 */
  IPGroups?: IPGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityIPGroupRequest {
  /** 站点 ID ，用于指定查询的站点范围。 */
  ZoneId: string;
  /** 指定安全 IP 组 ID。 提供该参数时，仅查询指定 ID 的安全 IP 组配置； 不传递参数时，返回站点下所有安全 IP 组信息。 */
  GroupIds?: number[];
}

declare interface DescribeSecurityIPGroupResponse {
  /** 安全 IP 组的详细配置信息。包含每个安全 IP 组的 ID 、名称、 IP / 网段列表信息和过期时间信息。 */
  IPGroups?: IPGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityPolicyRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 安全策略类型，可使用以下参数值进行查询： ZoneDefaultPolicy：用于指定查询站点级策略；Template：用于指定查询策略模板，需要同时指定 TemplateId 参数；Host：用于指定查询域名级策略（注意：当使用域名来指定域名服务策略时，仅支持已经应用了域名级策略的域名服务或者策略模板）。 */
  Entity?: string;
  /** 指定策略模板 ID。当 Entity 参数值为 Template 时，使用本参数指定策略模板的 ID 查询模板配置。 */
  TemplateId?: string;
  /** 指定域名。当 Entity 参数值为 Host 时，使用本参数指定的域名级策略查询域名配置，例如：使用 www.example.com ，配置该域名的域名级策略。 */
  Host?: string;
}

declare interface DescribeSecurityPolicyResponse {
  /** 安全策略配置。 */
  SecurityPolicy?: SecurityPolicy | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityTemplateBindingsRequest {
  /** 要查询的站点 ID。 */
  ZoneId: string;
  /** 要查询的策略模板 ID。 */
  TemplateId: string[];
}

declare interface DescribeSecurityTemplateBindingsResponse {
  /** 指定策略模板的绑定关系列表。当某个站点中的域名包含在指定策略模板的绑定关系中时，绑定关系列表 `TemplateScope` 中会包含该站点的 `ZoneId`，和该站点下的和该策略模板有关的域名绑定关系。注意：当没有任何域名正在绑定或已经绑定到指定策略模板时，绑定关系为空。即：返回结构体中，`TemplateScope` 数组长度为 0。绑定关系中，同一域名可能在 `EntityStatus` 列表中重复出现，并标记为不同 `Status` 。例如，正在被绑定到其他策略模板的域名，会同时标记为 `online` 和 `pending` 。 */
  SecurityTemplate?: SecurityTemplateBinding[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTimingL4DataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询指标，取值有：l4Flow_connections: 访问并发连接数；l4Flow_flux: 访问总流量；l4Flow_inFlux: 访问入流量；l4Flow_outFlux: 访问出流量；l4Flow_inBandwidth: 访问入向带宽峰值；l4Flow_outBandwidth: 访问出向带宽峰值。 */
  MetricNames: string[];
  /** 站点 ID 集合，此参数必填。 */
  ZoneIds?: string[];
  /** 四层实例列表, 不填表示选择全部实例。 */
  ProxyIds?: string[];
  /** 查询时间粒度，取值有：min: 1分钟 ；5min: 5分钟 ；hour: 1小时 ；day: 1天 。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：1小时范围内以min粒度查询，2天范围内以5min粒度查询，7天范围内以hour粒度查询，超过7天以day粒度查询。 */
  Interval?: string;
  /** 过滤条件，详细的过滤条件Key值如下：ruleId：按照转发规则 ID 进行过滤。proxyId：按照四层代理实例 ID 进行过滤。 */
  Filters?: QueryCondition[];
  /** 数据归属地区。该参数已废弃。请在 Filters.country 中按客户端地域过滤数据。 */
  Area?: string;
}

declare interface DescribeTimingL4DataResponse {
  /** 查询结果的总条数。 */
  TotalCount?: number;
  /** 四层时序流量数据列表。 */
  Data?: TimingDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTimingL7AnalysisDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 指标列表，取值有:l7Flow_outFlux: L7 EdgeOne 响应流量，单位：Byte；l7Flow_inFlux: L7 客户端请求流量，单位：Byte；l7Flow_flux: L7 访问总流量（EdgeOne 响应+客户端请求），单位：Byte；l7Flow_outBandwidth: L7 EdgeOne 响应带宽，单位：bps；l7Flow_inBandwidth：L7 客户端请求带宽，单位：bps；l7Flow_bandwidth：L7 访问总带宽（EdgeOne 响应+客户端请求），单位：bps；l7Flow_request: L7 访问请求数，单位：次； l7Flow_avgResponseTime: L7 访问平均响应耗时，单位：ms； l7Flow_avgFirstByteResponseTime: L7 访问平均首字节响应耗时，单位：ms。 */
  MetricNames: string[];
  /** 站点 ID 集合，此参数必填。 */
  ZoneIds?: string[];
  /** 查询时间粒度，取值有：min: 1分钟；5min: 5分钟；hour: 1小时；day: 1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：2 小时范围内以 min 粒度查询，2 天范围内以 5min 粒度查询，7 天范围内以 hour 粒度查询，超过 7 天以 day 粒度查询。 */
  Interval?: string;
  /** 过滤条件，详细的过滤条件 Key 值如下：country：按照国家/地区进行过滤，国家/地区遵循 ISO 3166-1 alpha-2 规范。示例值：CN。province：按照省份进行过滤，此参数只支持服务区域为中国大陆。省份代码参考境内省份映射表，示例值：22。isp：按照运营商进行过滤，此参数只支持服务区域为中国大陆。对应的 Value 可选项如下： 2：中国电信； 26：中国联通； 1046：中国移动； 3947：中国铁通； 38：教育网； 43：长城宽带； 0：其他运营商。domain：按照子域名进行过滤，示例值： www.example.com。url：按照 URL Path 进行过滤，示例值：/content 或 /content/test.jpg。若填写 url 参数，则最多可查询近 30 天的数据。referer：按照 Referer 请求头部进行过滤，示例值：http://www.example.com/。若填写 referer 参数，则最多可查询近 30 天的数据；resourceType：按照资源类型进行过滤，资源类型一般是文件后缀，示例值：.jpg。若填写 resourceType 参数，则最多可查询近 30 天的数据；protocol：按照 HTTP 协议版本进行过滤。对应的 Value 可选项如下： HTTP/1.0； HTTP/1.1； HTTP/2.0； HTTP/3； WebSocket。socket：按照 HTTP协议类型进行过滤。对应的 Value 可选项如下： HTTP：HTTP 协议； HTTPS：HTTPS 协议； QUIC：QUIC 协议。statusCode：按照边缘状态码进行过滤。若填写 statusCode 参数，则最多可查询近 30 天的数据。对应的 Value 可选项如下： 1XX：1xx类型的状态码； 2XX：2xx类型的状态码； 3XX：3xx类型的状态码； 4XX：4xx类型的状态码； 5XX：5xx类型的状态码； 在 [0,600) 范围内的整数。browserType：按照浏览器类型进行过滤。若填写 browserType 参数，则最多可查询近 30 天的数据。对应 Value 的可选项如下： Firefox：Firefox浏览器； Chrome：Chrome浏览器； Safari：Safari浏览器； Other：其他浏览器类型； Empty：浏览器类型为空； Bot：搜索引擎爬虫； MicrosoftEdge：MicrosoftEdge浏览器； IE：IE浏览器； Opera：Opera浏览器； QQBrowser：QQ浏览器； LBBrowser：LB浏览器； MaxthonBrowser：Maxthon浏览器； SouGouBrowser：搜狗浏览器； BIDUBrowser：百度浏览器； TaoBrowser：淘浏览器； UBrowser：UC浏览器。deviceType：按照设备类型进行过滤。若填写 deviceType 参数，则最多可查询近 30 天的数据。对应 Value 的可选项如下： TV：TV设备； Tablet：Tablet设备； Mobile：Mobile设备； Desktop：Desktop设备； Other：其他设备类型； Empty：设备类型为空。operatingSystemType：按照操作系统类型进行过滤。若填写 operatingSystemType 参数，则最多可查询近 30 天的数据。对应 Value 的可选项如下： Linux：Linux操作系统； MacOS：MacOs操作系统； Android：Android操作系统； IOS：IOS操作系统； Windows：Windows操作系统； NetBSD：NetBSD； ChromiumOS：ChromiumOS； Bot：搜索引擎爬虫； Other：其他类型的操作系统； Empty：操作系统为空。tlsVersion：按照 TLS 版本进行过滤。若填写 tlsVersion 参数，则最多可查询近 30 天的数据。对应 Value 的可选项如下： TLS1.0； TLS1.1； TLS1.2； TLS1.3。ipVersion：按照 IP 版本进行过滤。对应 Value 的可选项如下： 4：IPv4； 6：IPv6。cacheType：按照缓存状态进行过滤。对应 Value 的可选项如下： hit：请求命中 EdgeOne 节点缓存，资源由节点缓存提供。资源部分命中缓存也会记录为 hit。 miss：请求未命中 EdgeOne 节点缓存，资源由源站提供。 dynamic：请求的资源无法缓存/未配置被节点缓存，资源由源站提供。 other：无法被识别的缓存状态。边缘函数响应的请求会记录为 other。clientIp：按照客户端 IP 进行过滤。若填写 clientIp 参数，则最多可查询近 30 天的数据。userAgent：按照 User-Agent 请求头部进行过滤。若填写 userAgent 参数，则最多可查询近 30 天的数据。 */
  Filters?: QueryCondition[];
  /** 数据归属地区。该参数已废弃。请在 Filters.country 中按客户端地域过滤数据。 */
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
  /** 站点 ID 集合，此参数必填。 */
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
  TotalCount?: number;
  /** 七层缓存分析时序类流量数据列表。 */
  Data?: TimingDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopL7AnalysisDataRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 查询的指标，取值有： l7Flow_outFlux_country：按国家/地区维度统计 L7 EdgeOne 响应流量指标； l7Flow_outFlux_province：按中国大陆境内省份维度统计 L7 EdgeOne 响应流量指标； l7Flow_outFlux_statusCode：按状态码维度统计 L7 EdgeOne 响应流量指标； l7Flow_outFlux_domain：按域名维度统计 L7 EdgeOne 响应流量指标； l7Flow_outFlux_url：按 URL Path 维度统计 L7 EdgeOne 响应流量指标; l7Flow_outFlux_resourceType：按资源类型维度统计 L7 EdgeOne 响应流量指标； l7Flow_outFlux_sip：按客户端 IP 维度统计 L7 EdgeOne 响应流量指标； l7Flow_outFlux_referers：按 Referer 维度统计 L7 EdgeOne 响应流量指标； l7Flow_outFlux_ua_device：按设备类型维度统计 L7 EdgeOne 响应流量指标; l7Flow_outFlux_ua_browser：按浏览器类型维度统计 L7 EdgeOne 响应流量指标； l7Flow_outFlux_ua_os：按操作系统类型维度统计 L7 EdgeOne 响应流量指标； l7Flow_outFlux_ua：按 User-Agent 维度统计 L7 EdgeOne 响应流量指标； l7Flow_request_country：按国家/地区维度统计 L7 访问请求数指标； l7Flow_request_province：按中国大陆境内省份维度统计 L7 访问请求数指标； l7Flow_request_statusCode：按状态码维度统计 L7 访问请求数指标； l7Flow_request_domain：按域名维度统计 L7 访问请求数指标； l7Flow_request_url：按 URL Path 维度统计 L7 访问请求数指标; l7Flow_request_resourceType：按资源类型维度统计 L7 访问请求数指标； l7Flow_request_sip：按客户端 IP 维度统计 L7 访问请求数指标； l7Flow_request_referer：按 Referer 维度统计 L7 访问请求数指标； l7Flow_request_ua_device：按设备类型维度统计 L7 访问请求数指标; l7Flow_request_ua_browser：按浏览器类型维度统计 L7 访问请求数指标； l7Flow_request_ua_os：按操作系统类型维度统计 L7 访问请求数指标； l7Flow_request_ua：按 User-Agent 维度统计 L7 访问请求数指标。 */
  MetricName: string;
  /** 站点 ID 集合，此参数必填。 */
  ZoneIds?: string[];
  /** 查询前多少个 top 数据，最大值为1000。不填默认为10，表示查询 top10 的数据。 */
  Limit?: number;
  /** 过滤条件，详细的过滤条件 Key 值如下：country：按照国家/地区进行过滤，国家/地区遵循 ISO 3166-1 alpha-2 规范。示例值：CN。province：按照省份进行过滤，此参数只支持服务区域为中国大陆。省份代码参考境内省份映射表，示例值：22。isp：按照运营商进行过滤，此参数只支持服务区域为中国大陆。对应的 Value 可选项如下： 2：中国电信； 26：中国联通； 1046：中国移动； 3947：中国铁通； 38：教育网； 43：长城宽带； 0：其他运营商。domain：按照子域名进行过滤，示例值： www.example.com。url：按照 URL Path 进行过滤，示例值：/content 或 /content/test.jpg。若填写 url 参数，则最多可查询近 30 天的数据。referer：按照 Referer 请求头部进行过滤，示例值：http://www.example.com/。若填写 referer 参数，则最多可查询近 30 天的数据；resourceType：按照资源类型进行过滤，资源类型一般是文件后缀，示例值：.jpg。若填写 resourceType 参数，则最多可查询近 30 天的数据；protocol：按照 HTTP 协议版本进行过滤。对应的 Value 可选项如下： HTTP/1.0； HTTP/1.1； HTTP/2.0； HTTP/3； WebSocket。socket：按照 HTTP协议类型进行过滤。对应的 Value 可选项如下： HTTP：HTTP 协议； HTTPS：HTTPS 协议； QUIC：QUIC 协议。statusCode：按照边缘状态码进行过滤。若填写 statusCode 参数，则最多可查询近 30 天的数据。对应的 Value 可选项如下： 1XX：1xx类型的状态码； 2XX：2xx类型的状态码； 3XX：3xx类型的状态码； 4XX：4xx类型的状态码； 5XX：5xx类型的状态码； 在 [0,600) 范围内的整数。browserType：按照浏览器类型进行过滤。若填写 browserType 参数，则最多可查询近 30 天的数据。对应 Value 的可选项如下： Firefox：Firefox浏览器； Chrome：Chrome浏览器； Safari：Safari浏览器； Other：其他浏览器类型； Empty：浏览器类型为空； Bot：搜索引擎爬虫； MicrosoftEdge：MicrosoftEdge浏览器； IE：IE浏览器； Opera：Opera浏览器； QQBrowser：QQ浏览器； LBBrowser：LB浏览器； MaxthonBrowser：Maxthon浏览器； SouGouBrowser：搜狗浏览器； BIDUBrowser：百度浏览器； TaoBrowser：淘浏览器； UBrowser：UC浏览器。deviceType：按照设备类型进行过滤。若填写 deviceType 参数，则最多可查询近 30 天的数据。对应 Value 的可选项如下： TV：TV设备； Tablet：Tablet设备； Mobile：Mobile设备； Desktop：Desktop设备； Other：其他设备类型； Empty：设备类型为空。operatingSystemType：按照操作系统类型进行过滤。若填写 operatingSystemType 参数，则最多可查询近 30 天的数据。对应 Value 的可选项如下： Linux：Linux操作系统； MacOS：MacOs操作系统； Android：Android操作系统； IOS：IOS操作系统； Windows：Windows操作系统； NetBSD：NetBSD； ChromiumOS：ChromiumOS； Bot：搜索引擎爬虫； Other：其他类型的操作系统； Empty：操作系统为空。tlsVersion：按照 TLS 版本进行过滤。若填写 tlsVersion 参数，则最多可查询近 30 天的数据。对应 Value 的可选项如下： TLS1.0； TLS1.1； TLS1.2； TLS1.3。ipVersion：按照 IP 版本进行过滤。对应 Value 的可选项如下： 4：IPv4； 6：IPv6。cacheType：按照缓存状态进行过滤。对应 Value 的可选项如下： hit：请求命中 EdgeOne 节点缓存，资源由节点缓存提供。资源部分命中缓存也会记录为 hit。 miss：请求未命中 EdgeOne 节点缓存，资源由源站提供。 dynamic：请求的资源无法缓存/未配置被节点缓存，资源由源站提供。 other：无法被识别的缓存状态。边缘函数响应的请求会记录为 other。clientIp：按照客户端 IP 进行过滤。若填写 clientIp 参数，则最多可查询近 30 天的数据。userAgent：按照 User-Agent 请求头部进行过滤。若填写 userAgent 参数，则最多可查询近 30 天的数据。 */
  Filters?: QueryCondition[];
  /** 查询时间粒度，取值有：min: 1分钟；5min: 5分钟；hour: 1小时；day: 1天。不填将根据开始时间跟结束时间的间距自动推算粒度，具体为：2 小时范围内以 min 粒度查询，2 天范围内以 5min 粒度查询，7 天范围内以 hour 粒度查询，超过 7 天以 day 粒度查询。 */
  Interval?: string;
  /** 数据归属地区。该参数已废弃。请在 Filters.country 中按客户端地域过滤数据。 */
  Area?: string;
}

declare interface DescribeTopL7AnalysisDataResponse {
  /** 查询结果的总条数。 */
  TotalCount?: number;
  /** 七层访问数据按照 MetricName 指定统计维度的前 topN 数据列表。 */
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
  /** 站点 ID 集合，此参数必填。 */
  ZoneIds?: string[];
  /** 查询前多少个数据，最大值为1000，不填默认为10， 表示查询前top 10的数据。 */
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
  TotalCount?: number;
  /** 七层缓存TopN流量数据列表。 */
  Data?: TopDataRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZoneConfigImportResultRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 表示需要查询结果的导入配置任务 Id，导入任务 Id 仅支持查询最近 7 天的导入任务。 */
  TaskId: string;
}

declare interface DescribeZoneConfigImportResultResponse {
  /** 本次导入任务的导入状态。取值有： success：表示配置项导入成功； failure：表示配置项导入失败； doing：表示配置项正在导入中。 */
  Status?: string;
  /** 本次导入任务的状态的提示信息。当配置项导入失败时，可通过本字段查看失败原因。 */
  Message?: string;
  /** 本次导入任务的配置内容。 */
  Content?: string;
  /** 本次导入任务的开始时间。 */
  ImportTime?: string;
  /** 本次导入任务的结束时间。 */
  FinishTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZoneSettingRequest {
  /** 站点ID。 */
  ZoneId: string;
}

declare interface DescribeZoneSettingResponse {
  /** 站点配置。 */
  ZoneSetting?: ZoneSetting | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
  /** 分页查询偏移量。默认值：0。 */
  Offset?: number;
  /** 分页查询限制数目。默认值：20，最大值：100。 */
  Limit?: number;
  /** 过滤条件，Filters.Values 的上限为 20。该参数不填写时，返回当前 appid 下有权限的所有站点信息。详细的过滤条件如下：zone-name：按照站点名称进行过滤；zone-id：按照站点 ID进行过滤。站点 ID 形如：zone-2noz78a8ev6k；status：按照站点状态进行过滤；tag-key：按照标签键进行过滤；tag-value： 按照标签值进行过滤。alias-zone-name： 按照同名站点标识进行过滤。模糊查询时支持过滤字段名为 zone-name 或 alias-zone-name。 */
  Filters?: AdvancedFilter[];
  /** 可根据该字段对返回结果进行排序，取值有： type：接入类型； area：加速区域； create-time：创建时间； zone-name：站点名称； use-time：最近使用时间； active-status：生效状态。不填写时对返回结果默认按照 create-time 排序。 */
  Order?: string;
  /** 排序方向，如果是字段值为数字，则根据数字大小排序；如果字段值为文本，则根据 ascill 码的大小排序。取值有： asc：从小到大排序； desc：从大到小排序。不填写使用默认值 desc。 */
  Direction?: string;
}

declare interface DescribeZonesResponse {
  /** 符合条件的站点个数。 */
  TotalCount?: number;
  /** 站点详细信息。 */
  Zones?: Zone[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyPlanRequest {
  /** 套餐 ID，形如 edgeone-2wdo315m2y4c。 */
  PlanId: string;
}

declare interface DestroyPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadL4LogsRequest {
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 站点 ID 集合，此参数必填。 */
  ZoneIds?: string[];
  /** 四层实例 ID 集合。 */
  ProxyIds?: string[];
  /** 分页查询的限制数目，默认值为 20，最大查询条目为 300。 */
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
  /** 站点ID集合，此参数必填。 */
  ZoneIds?: string[];
  /** 子域名集合，不填默认选择全部子域名。 */
  Domains?: string[];
  /** 分页查询的限制数目，默认值为 20，最大查询条目为 300。 */
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

declare interface ExportZoneConfigRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 导出配置项的类型列表，不填表示导出所有类型的配置，当前支持的取值有：L7AccelerationConfig：表示导出七层加速配置，对应控制台「站点加速-全局加速配置」和「站点加速-规则引擎」。需注意：后续支持导出的类型会随着迭代增加，导出所有类型时需要注意导出文件大小，建议使用时指定需要导出的配置类型，以便控制请求响应包负载大小。 */
  Types?: string[];
}

declare interface ExportZoneConfigResponse {
  /** 导出的配置的具体内容。以 JSON 格式返回，按照 UTF-8 方式进行编码。配置内容可参考下方示例。 */
  Content?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface HandleFunctionRuntimeEnvironmentRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 函数 ID。 */
  FunctionId: string;
  /** 操作类型，取值有：setEnvironmentVariable：设置环境变量，当环境变量存在时为修改行为，否则为添加行为；deleteEnvironmentVariable：删除环境变量变量；clearEnvironmentVariable：清空环境变量变量；resetEnvironmentVariable：重置环境变量变量。 */
  Operation: string;
  /** 环境变量列表，函数运行环境最多支持 64 个变量。当 Operation 取值为 setEnvironmentVariable、deleteEnvironmentVariable、resetEnvironmentVariable 时必填。 */
  EnvironmentVariables?: FunctionEnvironmentVariable[];
}

declare interface HandleFunctionRuntimeEnvironmentResponse {
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

declare interface ImportZoneConfigRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 待导入的配置内容。要求采用 JSON 格式，按照 UTF-8 方式进行编码。配置内容可通过站点配置导出接口（ExportZoneConfig）获取。您可以单独导入「站点加速-全局加速配置」或「站点加速-规则引擎」，传入对应的字段即可，详情可以参考下方示例。 */
  Content: string;
}

declare interface ImportZoneConfigResponse {
  /** 表示该次导入配置的任务 Id，通过查询站点配置导入结果接口（DescribeZoneConfigImportResult）获取本次导入任务执行的结果。注意：导入任务 Id 仅支持查询最近 7 天的导入任务。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IncreasePlanQuotaRequest {
  /** 套餐 ID, 形如 edgeone-2unuvzjmmn2q。 */
  PlanId: string;
  /** 新增的套餐配额类型，取值有： site：站点数； precise_access_control_rule：Web 防护 - 自定义规则 - 精准匹配策略的规则配额； rate_limiting_rule：Web 防护 - 速率限制 - 精准速率限制模块的规则配额。 */
  QuotaType: string;
  /** 新增的配额个数。单次新增的配额个数上限为 100。 */
  QuotaNumber: number;
}

declare interface IncreasePlanQuotaResponse {
  /** 订单号。 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccelerationDomainRequest {
  /** 加速域名所属站点ID。 */
  ZoneId: string;
  /** 加速域名名称。 */
  DomainName: string;
  /** 源站信息。 */
  OriginInfo?: OriginInfo;
  /** 回源协议，取值有：FOLLOW: 协议跟随；HTTP: HTTP协议回源；HTTPS: HTTPS协议回源。不填保持原有配置。 */
  OriginProtocol?: string;
  /** HTTP回源端口，取值为1-65535，当OriginProtocol=FOLLOW/HTTP时生效, 不填保持原有配置。 */
  HttpOriginPort?: number;
  /** HTTPS回源端口，取值为1-65535，当OriginProtocol=FOLLOW/HTTPS时生效，不填保持原有配置。 */
  HttpsOriginPort?: number;
  /** IPv6状态，取值有：follow：遵循站点IPv6配置；on：开启状态；off：关闭状态。不填保持原有配置。 */
  IPv6Status?: string;
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
  /** 四层代理模式，取值有：instance：表示实例模式。不填写使用默认值instance。 */
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
  /** 源站类型，取值有：custom：手动添加；origins：源站组。 */
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
  /** 规则标签。不填保持原有值。 */
  RuleTag?: string;
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

declare interface ModifyContentIdentifierRequest {
  /** 内容标识符 ID。 */
  ContentId: string;
  /** 内容标识符描述，长度限制不超过 20 个字符。 */
  Description: string;
}

declare interface ModifyContentIdentifierResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomErrorPageRequest {
  /** 自定义错误页面 ID。 */
  PageId: string;
  /** 站点 ID。 */
  ZoneId: string;
  /** 自定义错误页名称，名称为2 - 60个字符。 */
  Name?: string;
  /** 自定义错误页描述，描述内容不超过60个字符。 */
  Description?: string;
  /** 自定义错误页面类型，取值有：text/html。 application/json。plain/text。text/xml。 */
  ContentType?: string;
  /** 自定义错误页面内容。内容不超过 2KB。 */
  Content?: string;
}

declare interface ModifyCustomErrorPageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDnsRecordsRequest {
  /** 站点 ID 。 */
  ZoneId: string;
  /** DNS 记录修改数据列表，一次最多修改100条。 */
  DnsRecords?: DnsRecord[];
}

declare interface ModifyDnsRecordsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDnsRecordsStatusRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 待启用的 DNS 记录 ID 列表，上限：200。注意：同个 DNS 记录 ID 不能同时存在于 RecordsToEnable 和 RecordsToDisable。 */
  RecordsToEnable?: string[];
  /** 待停用的 DNS 记录 ID 列表，上限：200。注意：同个 DNS 记录 ID 不能同时存在于 RecordsToEnable 和 RecordsToDisable。 */
  RecordsToDisable?: string[];
}

declare interface ModifyDnsRecordsStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFunctionRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 函数 ID。 */
  FunctionId: string;
  /** 函数描述，最大支持 60 个字符，不填写保持原有配置。 */
  Remark?: string;
  /** 函数内容，当前仅支持 JavaScript 代码，最大支持 5MB 大小，不填写保持原有配置。 */
  Content?: string;
}

declare interface ModifyFunctionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFunctionRulePriorityRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 规则 ID 列表，必须填入调整优先级后的所有规则 ID，多条规则执行顺序依次从上往下，不填写保持原优先级顺序。 */
  RuleIds: string[];
}

declare interface ModifyFunctionRulePriorityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFunctionRuleRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 规则 ID。 */
  RuleId: string;
  /** 规则条件列表，相同触发规则的不同条件匹配项之间为或关系，不填写保持原有配置。 */
  FunctionRuleConditions?: FunctionRuleCondition[];
  /** 函数 ID，命中触发规则条件后执行的函数，不填写保持原有配置。 */
  FunctionId?: string;
  /** 规则描述，最大支持 60 个字符，不填写保持原有配置。 */
  Remark?: string;
}

declare interface ModifyFunctionRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHostsCertificateRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 需要修改证书配置的加速域名。 */
  Hosts: string[];
  /** 配置服务端证书的模式，取值有：disable：不配置服务端证书；eofreecert：配置 EdgeOne 免费服务端证书；sslcert：配置 SSL 托管服务端证书；不填写表示服务端证书保持原有配置。 */
  Mode?: string;
  /** SSL 证书配置，本参数仅在 mode 为 sslcert 时生效，传入对应证书的 CertId 即可。您可以前往 [SSL 证书列表](https://console.cloud.tencent.com/ssl) 查看 CertId。 */
  ServerCertInfo?: ServerCertInfo[];
  /** 托管类型，取值有：none：不托管EO；apply：托管EO不填，默认取值为none。 */
  ApplyType?: string;
  /** 在边缘双向认证场景下，该字段为客户端的 CA 证书，部署在 EO 节点内，用于客户端对 EO 节点进行认证。默认关闭，不填写表示保持原有配置。 */
  ClientCertInfo?: MutualTLS;
}

declare interface ModifyHostsCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4ProxyRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 应用 ID。 */
  ProxyId: string;
  /** 是否开启 IPv6 访问。 不填该参数时，表示不修改该配置。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：on：开启； off：关闭。 */
  Ipv6?: string;
  /** 是否开启中国大陆网络优化。不填该参数时，表示不修改该配置。该配置仅在部分加速区域和安全防护配置下支持开启，详情请参考 [新建四层代理实例](https://cloud.tencent.com/document/product/1552/90025) 。取值为：on：开启； off：关闭。 */
  AccelerateMainland?: string;
}

declare interface ModifyL4ProxyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4ProxyRulesRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 四层代理实例 ID。 */
  ProxyId: string;
  /** 转发规则列表。单次最多支持 200 条转发规则。注意：L4ProxyRule 在此处使用时，RuleId 为必填字段；Protocol、PortRange、OriginType、OriginValue、OriginPortRange、ClientIPPassThroughMode、SessionPersist、SessionPersistTime、RuleTag 均为选填字段，不填写表示不修改；Status 请勿填写。 */
  L4ProxyRules: L4ProxyRule[];
}

declare interface ModifyL4ProxyRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4ProxyRulesStatusRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 四层代理实例 ID。 */
  ProxyId: string;
  /** 转发规则 ID 列表。单次最多支持 200 条转发规则。 */
  RuleIds: string[];
  /** 转发规则状态，取值有：online：启用；offline：停用。 */
  Status: string;
}

declare interface ModifyL4ProxyRulesStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL4ProxyStatusRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 四层代理实例 ID。 */
  ProxyId: string;
  /** 四层代理实例状态，取值有：online：启用；offline：停用。 */
  Status: string;
}

declare interface ModifyL4ProxyStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL7AccRulePriorityRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 站点 ID 下完整的规则 ID 列表，规则 ID 列表可以通过 [查询七层加速规则](https://cloud.tencent.com/document/product/1552/115820) 获取，最终优先级顺序将调整成规则 ID 列表的顺序，从前往后依次执行。 */
  RuleIds: string[];
}

declare interface ModifyL7AccRulePriorityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL7AccRuleRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 需要修改的规则。您可以先通过 DescribeL7AccRules 接口来获取需要修改的规则的 Ruleid，然后传入修改后的规则内容，原规则内容会被覆盖式更新。 */
  Rule: RuleEngineItem;
}

declare interface ModifyL7AccRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyL7AccSettingRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 站点加速全局配置，该参数中的配置会对站点下的所有域名生效。您只需直接修改所需的配置，未传入的其他配置将保持原有状态。 */
  ZoneConfig: ZoneConfig;
}

declare interface ModifyL7AccSettingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 负载均衡实例 ID。 */
  InstanceId: string;
  /** 实例名称，可输入 1-200 个字符，允许字符为 a-z，A-Z，0-9，_，-。不填写表示维持原有配置。 */
  Name?: string;
  /** 源站组列表及其对应的容灾调度优先级。详情请参考 [快速创建负载均衡实例](https://cloud.tencent.com/document/product/1552/104223) 中的示例场景。不填写表示维持原有配置。 */
  OriginGroups?: OriginGroupInLoadBalancer[];
  /** 健康检查策略。详情请参考 [健康检查策略介绍](https://cloud.tencent.com/document/product/1552/104228)。不填写表示维持原有配置。 */
  HealthChecker?: HealthChecker;
  /** 源站组间的流量调度策略，取值有：Pritory：按优先级顺序进行故障转移 。不填写表示维持原有配置。 */
  SteeringPolicy?: string;
  /** 实际访问某源站失败时的请求重试策略，详情请参考 [请求重试策略介绍](https://cloud.tencent.com/document/product/1552/104227)，取值有：OtherOriginGroup：单次请求失败后，请求优先重试下一优先级源站组；OtherRecordInOriginGroup：单次请求失败后，请求优先重试同源站组内的其他源站。不填写表示维持原有配置。 */
  FailoverPolicy?: string;
}

declare interface ModifyLoadBalancerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyOriginGroupRequest {
  /** 站点 ID */
  ZoneId: string;
  /** 源站组 ID，此参数必填。 */
  GroupId?: string;
  /** 源站组名称，不填保持原有配置，可输入1 - 200个字符，允许的字符为 a - z, A - Z, 0 - 9, _, - 。 */
  Name?: string;
  /** 源站组类型，取值有：GENERAL：通用型源站组，仅支持添加 IP/域名 源站，可以被域名服务、规则引擎、四层代理、通用型负载均衡引用；HTTP： HTTP专用型源站组，支持添加 IP/域名、对象存储源站，无法被四层代理引用。不填保持原有配置。 */
  Type?: string;
  /** 源站记录信息，不填保持原有配置。 */
  Records?: OriginRecord[];
  /** 回源 Host Header，仅 Type = HTTP 时生效， 不填或者填空表示不配置回源Host，规则引擎修改 Host Header 配置优先级高于源站组的 Host Header。 */
  HostHeader?: string;
}

declare interface ModifyOriginGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPlanRequest {
  /** 套餐 ID，形如 edgeone-2unuvzjmmn2q。 */
  PlanId: string;
  /** 预付费套餐自动续费配置。若开启了自动续费，则会在套餐到期前一天自动续费，仅支持个人版，基础版，标准版套餐。不填写表示保持原有配置。 */
  RenewFlag?: RenewFlag;
}

declare interface ModifyPlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRealtimeLogDeliveryTaskRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 实时日志投递任务 ID。 */
  TaskId: string;
  /** 实时日志投递任务的名称，格式为数字、英文、-和_组合，最多 200 个字符。不填保持原有配置。 */
  TaskName?: string;
  /** 实时日志投递任务的状态，取值有：enabled: 启用；disabled: 停用。不填保持原有配置。 */
  DeliveryStatus?: string;
  /** 实时日志投递任务对应的实体（七层域名或者四层代理实例）列表。取值示例如下：七层域名：domain.example.com；四层代理实例：sid-2s69eb5wcms7。不填保持原有配置。 */
  EntityList?: string[];
  /** 投递的预设字段列表。不填保持原有配置。 */
  Fields?: string[];
  /** 投递的自定义字段列表，支持在 HTTP 请求头、响应头、Cookie、请求正文中提取指定内容。不填保持原有配置。自定义字段名称不能重复，且最多不能超过 200 个字段。单个实时日志推送任务最多添加 5 个请求正文类型的自定义字段。目前仅站点加速日志（LogType=domain）支持添加自定义字段。 */
  CustomFields?: CustomField[];
  /** 日志投递的过滤条件。不填表示投递全量日志。 */
  DeliveryConditions?: DeliveryCondition[];
  /** 采样比例，采用千分制，取值范围为1-1000，例如：填写 605 表示采样比例为 60.5%。不填保持原有配置。 */
  Sample?: number;
  /** 日志投递的输出格式。不填保持原有配置。特别地，当 TaskType 取值为 cls 时，LogFormat.FormatType 的值只能为 json，且 LogFormat 中其他参数将被忽略，建议不传 LogFormat。 */
  LogFormat?: LogFormat;
  /** 自定义 HTTP 服务的配置信息，不填保持原有配置。 */
  CustomEndpoint?: CustomEndpoint;
  /** AWS S3 兼容存储桶的配置信息，不填保持原有配置。 */
  S3?: S3;
}

declare interface ModifyRealtimeLogDeliveryTaskResponse {
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
  /** 操作类型，取值有： append: 向 IPGroup 中添加新的 IP 地址或设置定时过期时间； remove: 从 IPGroup 中删除指定的 IP 地址或其定时过期时间； update: 完全替换 IPGroup 中 Content 或 ExpireInfo 的内容，并且可以修改 IPGroup 的名称。 使用 append 操作时注意： 为 IP 或网段添加定时过期时间时，必须晚于当前时间。如果该 IP 或网段在组中不存在，必须同时在 Content 参数中添加该 IP 或网段。若该 IP 或网段已存在过期时间，则新时间将覆盖原有时间。 使用 remove 操作时注意： 删除 IP 或网段时，相关的未过期的定时过期时间也会被删除； 删除定时过期时间时，仅能删除当前未过期的时间。 使用 update 操作时注意： 替换 Content 内容时，不在 Content 中的 IP 或网段的未过期时间会被删除； 替换 IPExpireInfo 内容时，IPExpireInfo 中的 IP 或网段必须在 Content 中或在 IP 组中存在。 */
  Mode: string;
}

declare interface ModifySecurityIPGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityPolicyRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 安全策略配置。当 SecurityPolicy 参数中的 ExceptionRules 被设置时，SecurityConfig 参数中的 ExceptConfig 将被忽略；当 SecurityPolicy 参数中的 CustomRules 被设置时，SecurityConfig 参数中的 AclConfig、 IpTableConfig 将被忽略；当 SecurityPolicy 参数中的 HttpDDoSProtection 和 RateLimitingRules 被设置时，SecurityConfig 参数中的 RateLimitConfig 将被忽略；当 SecurityPolicy 参数中的 ManagedRule 被设置时，SecurityConfig 参数中的 WafConfig 将被忽略；对于例外规则、自定义规则、速率限制以及托管规则策略配置建议使用 SecurityPolicy 参数进行设置。 */
  SecurityConfig: SecurityConfig;
  /** 安全策略配置。对 Web 例外规则、防护自定义策略、速率规则和托管规则配置建议使用，支持表达式语法对安全策略进行配置。 */
  SecurityPolicy?: SecurityPolicy;
  /** 安全策略类型，可使用以下参数值： ZoneDefaultPolicy：用于指定站点级策略；Template：用于指定策略模板，需要同时指定 TemplateId 参数；Host：用于指定域名级策略（注意：当使用域名来指定域名服务策略时，仅支持已经应用了域名级策略的域名服务或者策略模板）。 */
  Entity?: string;
  /** 指定域名。当 Entity 参数值为 Host 时，使用本参数指定的域名级策略，例如：使用 www.example.com ，配置该域名的域名级策略。 */
  Host?: string;
  /** 指定策略模板 ID。当 Entity 参数值为 Template 时，使用本参数指定策略模板的 ID。 */
  TemplateId?: string;
}

declare interface ModifySecurityPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyZoneRequest {
  /** 站点 ID。 */
  ZoneId: string;
  /** 站点接入方式，取值有：full：NS 接入；partial：CNAME 接入，如果站点当前是无域名接入，仅支持切换到 CNAME 接入；dnsPodAccess：DNSPod 托管接入，该接入模式要求您的域名已托管在 DNSPod 内。不填写保持原有配置。 */
  Type?: string;
  /** 自定义站点信息，以替代系统默认分配的名称服务器。不填写保持原有配置。当站点是无域名接入方式时不允许传此参数。 */
  VanityNameServers?: VanityNameServers;
  /** 同名站点标识。限制输入数字、英文、"." 、"-" 和 "_"，长度 200 个字符以内。 */
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
  /** 视频即时处理配置。不填写表示保持原有配置。 */
  JITVideoProcess?: JITVideoProcess;
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

declare interface RenewPlanRequest {
  /** 套餐 ID，形如 edgeone-2unuvzjmmn2q。 */
  PlanId: string;
  /** 续费套餐的时长，单位：月，取值有：1，2，3，4，5，6，7，8，9，10，11，12，24，36。 */
  Period: number;
  /** 是否自动使用代金券，取值有： true：是； false：否。不填写使用默认值 false。 */
  AutoUseVoucher?: string;
}

declare interface RenewPlanResponse {
  /** 订单号。 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradePlanRequest {
  /** 套餐 ID，形如 edgeone-2unuvzjmmn2q。 */
  PlanId: string;
  /** 需要升级到的目标套餐版本，取值有： basic：基础版套餐； standard：标准版套餐。 */
  PlanType: string;
  /** 是否自动使用代金券，取值有： true：是； false：否。不填写使用默认值 false。 */
  AutoUseVoucher?: string;
}

declare interface UpgradePlanResponse {
  /** 订单号。 */
  DealName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyOwnershipRequest {
  /** 站点域名或者站点下的加速域名。 */
  Domain: string;
}

declare interface VerifyOwnershipResponse {
  /** 归属权验证结果。success：验证成功；fail：验证失败。 */
  Status?: string;
  /** 当验证结果为不通过时，该字段会返回原因，协助您排查问题。 */
  Result?: string;
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
  /** 绑定或解绑安全策略模板 {@link BindSecurityTemplateToEntityRequest} {@link BindSecurityTemplateToEntityResponse} */
  BindSecurityTemplateToEntity(data: BindSecurityTemplateToEntityRequest, config?: AxiosRequestConfig): AxiosPromise<BindSecurityTemplateToEntityResponse>;
  /** 绑定共享 CNAME {@link BindSharedCNAMERequest} {@link BindSharedCNAMEResponse} */
  BindSharedCNAME(data: BindSharedCNAMERequest, config?: AxiosRequestConfig): AxiosPromise<BindSharedCNAMEResponse>;
  /** 为站点绑定套餐 {@link BindZoneToPlanRequest} {@link BindZoneToPlanResponse} */
  BindZoneToPlan(data: BindZoneToPlanRequest, config?: AxiosRequestConfig): AxiosPromise<BindZoneToPlanResponse>;
  /** 校验域名 CNAME 状态 {@link CheckCnameStatusRequest} {@link CheckCnameStatusResponse} */
  CheckCnameStatus(data: CheckCnameStatusRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCnameStatusResponse>;
  /** 创建加速域名 {@link CreateAccelerationDomainRequest} {@link CreateAccelerationDomainResponse} */
  CreateAccelerationDomain(data: CreateAccelerationDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccelerationDomainResponse>;
  /** 创建别称域名 {@link CreateAliasDomainRequest} {@link CreateAliasDomainResponse} */
  CreateAliasDomain(data: CreateAliasDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAliasDomainResponse>;
  /** 创建应用代理（旧） {@link CreateApplicationProxyRequest} {@link CreateApplicationProxyResponse} */
  CreateApplicationProxy(data: CreateApplicationProxyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationProxyResponse>;
  /** 创建应用代理规则（旧） {@link CreateApplicationProxyRuleRequest} {@link CreateApplicationProxyRuleResponse} */
  CreateApplicationProxyRule(data: CreateApplicationProxyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationProxyRuleResponse>;
  /** 创建 CLS 索引 {@link CreateCLSIndexRequest} {@link CreateCLSIndexResponse} */
  CreateCLSIndex(data: CreateCLSIndexRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCLSIndexResponse>;
  /** 创建配置组版本 {@link CreateConfigGroupVersionRequest} {@link CreateConfigGroupVersionResponse} */
  CreateConfigGroupVersion(data: CreateConfigGroupVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigGroupVersionResponse>;
  /** 创建内容标识符 {@link CreateContentIdentifierRequest} {@link CreateContentIdentifierResponse} */
  CreateContentIdentifier(data: CreateContentIdentifierRequest, config?: AxiosRequestConfig): AxiosPromise<CreateContentIdentifierResponse>;
  /** 创建自定义响应页面 {@link CreateCustomizeErrorPageRequest} {@link CreateCustomizeErrorPageResponse} */
  CreateCustomizeErrorPage(data: CreateCustomizeErrorPageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomizeErrorPageResponse>;
  /** 创建 DNS 记录 {@link CreateDnsRecordRequest} {@link CreateDnsRecordResponse} */
  CreateDnsRecord(data: CreateDnsRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDnsRecordResponse>;
  /** 创建边缘函数 {@link CreateFunctionRequest} {@link CreateFunctionResponse} */
  CreateFunction(data: CreateFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFunctionResponse>;
  /** 创建边缘函数触发规则 {@link CreateFunctionRuleRequest} {@link CreateFunctionRuleResponse} */
  CreateFunctionRule(data: CreateFunctionRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFunctionRuleResponse>;
  /** 创建四层代理实例 {@link CreateL4ProxyRequest} {@link CreateL4ProxyResponse} */
  CreateL4Proxy(data: CreateL4ProxyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL4ProxyResponse>;
  /** 创建四层代理转发规则 {@link CreateL4ProxyRulesRequest} {@link CreateL4ProxyRulesResponse} */
  CreateL4ProxyRules(data: CreateL4ProxyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL4ProxyRulesResponse>;
  /** 创建七层加速规则 {@link CreateL7AccRulesRequest} {@link CreateL7AccRulesResponse} */
  CreateL7AccRules(data: CreateL7AccRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateL7AccRulesResponse>;
  /** 创建负载均衡实例 {@link CreateLoadBalancerRequest} {@link CreateLoadBalancerResponse} */
  CreateLoadBalancer(data: CreateLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoadBalancerResponse>;
  /** 创建源站组 {@link CreateOriginGroupRequest} {@link CreateOriginGroupResponse} */
  CreateOriginGroup(data: CreateOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOriginGroupResponse>;
  /** 创建套餐 {@link CreatePlanRequest} {@link CreatePlanResponse} */
  CreatePlan(data: CreatePlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePlanResponse>;
  /** 为未购买套餐的站点购买套餐 {@link CreatePlanForZoneRequest} {@link CreatePlanForZoneResponse} */
  CreatePlanForZone(data: CreatePlanForZoneRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePlanForZoneResponse>;
  /** 创建预热任务 {@link CreatePrefetchTaskRequest} {@link CreatePrefetchTaskResponse} */
  CreatePrefetchTask(data: CreatePrefetchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrefetchTaskResponse>;
  /** 创建清除缓存任务 {@link CreatePurgeTaskRequest} {@link CreatePurgeTaskResponse} */
  CreatePurgeTask(data: CreatePurgeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePurgeTaskResponse>;
  /** 创建实时日志投递任务 {@link CreateRealtimeLogDeliveryTaskRequest} {@link CreateRealtimeLogDeliveryTaskResponse} */
  CreateRealtimeLogDeliveryTask(data: CreateRealtimeLogDeliveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRealtimeLogDeliveryTaskResponse>;
  /** 创建规则引擎规则（旧） {@link CreateRuleRequest} {@link CreateRuleResponse} */
  CreateRule(data: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 创建安全 IP 组 {@link CreateSecurityIPGroupRequest} {@link CreateSecurityIPGroupResponse} */
  CreateSecurityIPGroup(data: CreateSecurityIPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityIPGroupResponse>;
  /** 创建共享 CNAME {@link CreateSharedCNAMERequest} {@link CreateSharedCNAMEResponse} */
  CreateSharedCNAME(data: CreateSharedCNAMERequest, config?: AxiosRequestConfig): AxiosPromise<CreateSharedCNAMEResponse>;
  /** 创建站点 {@link CreateZoneRequest} {@link CreateZoneResponse} */
  CreateZone(data?: CreateZoneRequest, config?: AxiosRequestConfig): AxiosPromise<CreateZoneResponse>;
  /** 批量删除加速域名 {@link DeleteAccelerationDomainsRequest} {@link DeleteAccelerationDomainsResponse} */
  DeleteAccelerationDomains(data: DeleteAccelerationDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccelerationDomainsResponse>;
  /** 删除别称域名 {@link DeleteAliasDomainRequest} {@link DeleteAliasDomainResponse} */
  DeleteAliasDomain(data: DeleteAliasDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAliasDomainResponse>;
  /** 删除应用代理（旧） {@link DeleteApplicationProxyRequest} {@link DeleteApplicationProxyResponse} */
  DeleteApplicationProxy(data: DeleteApplicationProxyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationProxyResponse>;
  /** 删除应用代理规则（旧） {@link DeleteApplicationProxyRuleRequest} {@link DeleteApplicationProxyRuleResponse} */
  DeleteApplicationProxyRule(data: DeleteApplicationProxyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationProxyRuleResponse>;
  /** 删除内容标识符 {@link DeleteContentIdentifierRequest} {@link DeleteContentIdentifierResponse} */
  DeleteContentIdentifier(data: DeleteContentIdentifierRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteContentIdentifierResponse>;
  /** 删除自定义响应页面 {@link DeleteCustomErrorPageRequest} {@link DeleteCustomErrorPageResponse} */
  DeleteCustomErrorPage(data: DeleteCustomErrorPageRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomErrorPageResponse>;
  /** 批量删除 DNS 记录 {@link DeleteDnsRecordsRequest} {@link DeleteDnsRecordsResponse} */
  DeleteDnsRecords(data: DeleteDnsRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDnsRecordsResponse>;
  /** 删除边缘函数 {@link DeleteFunctionRequest} {@link DeleteFunctionResponse} */
  DeleteFunction(data: DeleteFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFunctionResponse>;
  /** 删除边缘函数触发规则 {@link DeleteFunctionRulesRequest} {@link DeleteFunctionRulesResponse} */
  DeleteFunctionRules(data: DeleteFunctionRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFunctionRulesResponse>;
  /** 删除四层代理实例 {@link DeleteL4ProxyRequest} {@link DeleteL4ProxyResponse} */
  DeleteL4Proxy(data: DeleteL4ProxyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteL4ProxyResponse>;
  /** 删除四层代理转发规则 {@link DeleteL4ProxyRulesRequest} {@link DeleteL4ProxyRulesResponse} */
  DeleteL4ProxyRules(data: DeleteL4ProxyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteL4ProxyRulesResponse>;
  /** 删除七层加速规则 {@link DeleteL7AccRulesRequest} {@link DeleteL7AccRulesResponse} */
  DeleteL7AccRules(data: DeleteL7AccRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteL7AccRulesResponse>;
  /** 删除负载均衡实例 {@link DeleteLoadBalancerRequest} {@link DeleteLoadBalancerResponse} */
  DeleteLoadBalancer(data: DeleteLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoadBalancerResponse>;
  /** 删除源站组 {@link DeleteOriginGroupRequest} {@link DeleteOriginGroupResponse} */
  DeleteOriginGroup(data: DeleteOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOriginGroupResponse>;
  /** 删除实时日志投递任务 {@link DeleteRealtimeLogDeliveryTaskRequest} {@link DeleteRealtimeLogDeliveryTaskResponse} */
  DeleteRealtimeLogDeliveryTask(data: DeleteRealtimeLogDeliveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRealtimeLogDeliveryTaskResponse>;
  /** 批量删除规则引擎规则（旧） {@link DeleteRulesRequest} {@link DeleteRulesResponse} */
  DeleteRules(data: DeleteRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRulesResponse>;
  /** 删除安全 IP 组 {@link DeleteSecurityIPGroupRequest} {@link DeleteSecurityIPGroupResponse} */
  DeleteSecurityIPGroup(data: DeleteSecurityIPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityIPGroupResponse>;
  /** 删除共享 CNAME {@link DeleteSharedCNAMERequest} {@link DeleteSharedCNAMEResponse} */
  DeleteSharedCNAME(data: DeleteSharedCNAMERequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSharedCNAMEResponse>;
  /** 删除站点 {@link DeleteZoneRequest} {@link DeleteZoneResponse} */
  DeleteZone(data: DeleteZoneRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteZoneResponse>;
  /** 发布配置组版本 {@link DeployConfigGroupVersionRequest} {@link DeployConfigGroupVersionResponse} */
  DeployConfigGroupVersion(data: DeployConfigGroupVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DeployConfigGroupVersionResponse>;
  /** 查询加速域名列表 {@link DescribeAccelerationDomainsRequest} {@link DescribeAccelerationDomainsResponse} */
  DescribeAccelerationDomains(data: DescribeAccelerationDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccelerationDomainsResponse>;
  /** 查询别称域名信息列表 {@link DescribeAliasDomainsRequest} {@link DescribeAliasDomainsResponse} */
  DescribeAliasDomains(data: DescribeAliasDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAliasDomainsResponse>;
  /** 查询应用代理列表（旧） {@link DescribeApplicationProxiesRequest} {@link DescribeApplicationProxiesResponse} */
  DescribeApplicationProxies(data?: DescribeApplicationProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationProxiesResponse>;
  /** 查询当前账户可购买套餐信息列表 {@link DescribeAvailablePlansRequest} {@link DescribeAvailablePlansResponse} */
  DescribeAvailablePlans(data?: DescribeAvailablePlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailablePlansResponse>;
  /** 查询计费数据 {@link DescribeBillingDataRequest} {@link DescribeBillingDataResponse} */
  DescribeBillingData(data: DescribeBillingDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillingDataResponse>;
  /** 查询配置组版本详情 {@link DescribeConfigGroupVersionDetailRequest} {@link DescribeConfigGroupVersionDetailResponse} */
  DescribeConfigGroupVersionDetail(data: DescribeConfigGroupVersionDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigGroupVersionDetailResponse>;
  /** 查询配置组版本列表 {@link DescribeConfigGroupVersionsRequest} {@link DescribeConfigGroupVersionsResponse} */
  DescribeConfigGroupVersions(data: DescribeConfigGroupVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigGroupVersionsResponse>;
  /** 批量查询内容标识符 {@link DescribeContentIdentifiersRequest} {@link DescribeContentIdentifiersResponse} */
  DescribeContentIdentifiers(data?: DescribeContentIdentifiersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContentIdentifiersResponse>;
  /** 查询内容管理接口配额 {@link DescribeContentQuotaRequest} {@link DescribeContentQuotaResponse} */
  DescribeContentQuota(data: DescribeContentQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContentQuotaResponse>;
  /** 查询自定义响应页面列表 {@link DescribeCustomErrorPagesRequest} {@link DescribeCustomErrorPagesResponse} */
  DescribeCustomErrorPages(data: DescribeCustomErrorPagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomErrorPagesResponse>;
  /** 查询DDoS攻击时序数据 {@link DescribeDDoSAttackDataRequest} {@link DescribeDDoSAttackDataResponse} */
  DescribeDDoSAttackData(data: DescribeDDoSAttackDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackDataResponse>;
  /** 查询DDoS攻击事件列表 {@link DescribeDDoSAttackEventRequest} {@link DescribeDDoSAttackEventResponse} */
  DescribeDDoSAttackEvent(data: DescribeDDoSAttackEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackEventResponse>;
  /** 查询DDoS攻击Top数据 {@link DescribeDDoSAttackTopDataRequest} {@link DescribeDDoSAttackTopDataResponse} */
  DescribeDDoSAttackTopData(data: DescribeDDoSAttackTopDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSAttackTopDataResponse>;
  /** 查询默认证书列表 {@link DescribeDefaultCertificatesRequest} {@link DescribeDefaultCertificatesResponse} */
  DescribeDefaultCertificates(data?: DescribeDefaultCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefaultCertificatesResponse>;
  /** 查询版本发布历史 {@link DescribeDeployHistoryRequest} {@link DescribeDeployHistoryResponse} */
  DescribeDeployHistory(data: DescribeDeployHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeployHistoryResponse>;
  /** 查询 DNS 记录列表 {@link DescribeDnsRecordsRequest} {@link DescribeDnsRecordsResponse} */
  DescribeDnsRecords(data: DescribeDnsRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDnsRecordsResponse>;
  /** 查询环境信息 {@link DescribeEnvironmentsRequest} {@link DescribeEnvironmentsResponse} */
  DescribeEnvironments(data: DescribeEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentsResponse>;
  /** 查询边缘函数触发规则 {@link DescribeFunctionRulesRequest} {@link DescribeFunctionRulesResponse} */
  DescribeFunctionRules(data: DescribeFunctionRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionRulesResponse>;
  /** 查询边缘函数运行环境 {@link DescribeFunctionRuntimeEnvironmentRequest} {@link DescribeFunctionRuntimeEnvironmentResponse} */
  DescribeFunctionRuntimeEnvironment(data: DescribeFunctionRuntimeEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionRuntimeEnvironmentResponse>;
  /** 查询边缘函数列表 {@link DescribeFunctionsRequest} {@link DescribeFunctionsResponse} */
  DescribeFunctions(data: DescribeFunctionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionsResponse>;
  /** 查询域名详细配置（旧） {@link DescribeHostsSettingRequest} {@link DescribeHostsSettingResponse} */
  DescribeHostsSetting(data: DescribeHostsSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostsSettingResponse>;
  /** 查询 IP 归属信息 {@link DescribeIPRegionRequest} {@link DescribeIPRegionResponse} */
  DescribeIPRegion(data: DescribeIPRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIPRegionResponse>;
  /** 查询站点的验证信息 {@link DescribeIdentificationsRequest} {@link DescribeIdentificationsResponse} */
  DescribeIdentifications(data: DescribeIdentificationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIdentificationsResponse>;
  /** 查询四层代理实例列表 {@link DescribeL4ProxyRequest} {@link DescribeL4ProxyResponse} */
  DescribeL4Proxy(data: DescribeL4ProxyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL4ProxyResponse>;
  /** 查询四层代理转发规则列表 {@link DescribeL4ProxyRulesRequest} {@link DescribeL4ProxyRulesResponse} */
  DescribeL4ProxyRules(data: DescribeL4ProxyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL4ProxyRulesResponse>;
  /** 查询七层加速规则 {@link DescribeL7AccRulesRequest} {@link DescribeL7AccRulesResponse} */
  DescribeL7AccRules(data: DescribeL7AccRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL7AccRulesResponse>;
  /** 查询七层加速全局配置 {@link DescribeL7AccSettingRequest} {@link DescribeL7AccSettingResponse} */
  DescribeL7AccSetting(data: DescribeL7AccSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeL7AccSettingResponse>;
  /** 查询负载均衡实例列表 {@link DescribeLoadBalancerListRequest} {@link DescribeLoadBalancerListResponse} */
  DescribeLoadBalancerList(data: DescribeLoadBalancerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancerListResponse>;
  /** 获取源站组列表 {@link DescribeOriginGroupRequest} {@link DescribeOriginGroupResponse} */
  DescribeOriginGroup(data?: DescribeOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOriginGroupResponse>;
  /** 查询负载均衡实例下源站组健康状态 {@link DescribeOriginGroupHealthStatusRequest} {@link DescribeOriginGroupHealthStatusResponse} */
  DescribeOriginGroupHealthStatus(data: DescribeOriginGroupHealthStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOriginGroupHealthStatusResponse>;
  /** 查询源站防护信息 {@link DescribeOriginProtectionRequest} {@link DescribeOriginProtectionResponse} */
  DescribeOriginProtection(data?: DescribeOriginProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOriginProtectionResponse>;
  /** 查询监控流量时序数据（待废弃） {@link DescribeOverviewL7DataRequest} {@link DescribeOverviewL7DataResponse} */
  DescribeOverviewL7Data(data: DescribeOverviewL7DataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewL7DataResponse>;
  /** 查询套餐信息列表 {@link DescribePlansRequest} {@link DescribePlansResponse} */
  DescribePlans(data?: DescribePlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePlansResponse>;
  /** 查询预热任务状态 {@link DescribePrefetchTasksRequest} {@link DescribePrefetchTasksResponse} */
  DescribePrefetchTasks(data?: DescribePrefetchTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrefetchTasksResponse>;
  /** 查询清除缓存历史记录 {@link DescribePurgeTasksRequest} {@link DescribePurgeTasksResponse} */
  DescribePurgeTasks(data?: DescribePurgeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePurgeTasksResponse>;
  /** 查询实时日志投递任务列表 {@link DescribeRealtimeLogDeliveryTasksRequest} {@link DescribeRealtimeLogDeliveryTasksResponse} */
  DescribeRealtimeLogDeliveryTasks(data: DescribeRealtimeLogDeliveryTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealtimeLogDeliveryTasksResponse>;
  /** 查询规则引擎规则（旧） {@link DescribeRulesRequest} {@link DescribeRulesResponse} */
  DescribeRules(data: DescribeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesResponse>;
  /** 查询规则引擎的设置参数（旧） {@link DescribeRulesSettingRequest} {@link DescribeRulesSettingResponse} */
  DescribeRulesSetting(data?: DescribeRulesSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesSettingResponse>;
  /** 查询安全 IP 组 {@link DescribeSecurityIPGroupRequest} {@link DescribeSecurityIPGroupResponse} */
  DescribeSecurityIPGroup(data: DescribeSecurityIPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityIPGroupResponse>;
  /** 查询安全 IP 组（已废弃） {@link DescribeSecurityIPGroupInfoRequest} {@link DescribeSecurityIPGroupInfoResponse} */
  DescribeSecurityIPGroupInfo(data: DescribeSecurityIPGroupInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityIPGroupInfoResponse>;
  /** 查询安全防护配置详情 {@link DescribeSecurityPolicyRequest} {@link DescribeSecurityPolicyResponse} */
  DescribeSecurityPolicy(data: DescribeSecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityPolicyResponse>;
  /** 查询指定策略模板的绑定关系列表 {@link DescribeSecurityTemplateBindingsRequest} {@link DescribeSecurityTemplateBindingsResponse} */
  DescribeSecurityTemplateBindings(data: DescribeSecurityTemplateBindingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityTemplateBindingsResponse>;
  /** 查询四层流量时序数据 {@link DescribeTimingL4DataRequest} {@link DescribeTimingL4DataResponse} */
  DescribeTimingL4Data(data: DescribeTimingL4DataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimingL4DataResponse>;
  /** 查询流量分析时序数据 {@link DescribeTimingL7AnalysisDataRequest} {@link DescribeTimingL7AnalysisDataResponse} */
  DescribeTimingL7AnalysisData(data: DescribeTimingL7AnalysisDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimingL7AnalysisDataResponse>;
  /** 查询缓存分析时序数据（待废弃） {@link DescribeTimingL7CacheDataRequest} {@link DescribeTimingL7CacheDataResponse} */
  DescribeTimingL7CacheData(data: DescribeTimingL7CacheDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimingL7CacheDataResponse>;
  /** 查询流量分析Top数据 {@link DescribeTopL7AnalysisDataRequest} {@link DescribeTopL7AnalysisDataResponse} */
  DescribeTopL7AnalysisData(data: DescribeTopL7AnalysisDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopL7AnalysisDataResponse>;
  /** 查询缓存分析Top数据（待废弃） {@link DescribeTopL7CacheDataRequest} {@link DescribeTopL7CacheDataResponse} */
  DescribeTopL7CacheData(data: DescribeTopL7CacheDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopL7CacheDataResponse>;
  /** 查询站点配置导入结果 {@link DescribeZoneConfigImportResultRequest} {@link DescribeZoneConfigImportResultResponse} */
  DescribeZoneConfigImportResult(data: DescribeZoneConfigImportResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneConfigImportResultResponse>;
  /** 查询站点配置（旧） {@link DescribeZoneSettingRequest} {@link DescribeZoneSettingResponse} */
  DescribeZoneSetting(data: DescribeZoneSettingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneSettingResponse>;
  /** 查询站点列表 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data?: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 销毁套餐 {@link DestroyPlanRequest} {@link DestroyPlanResponse} */
  DestroyPlan(data: DestroyPlanRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyPlanResponse>;
  /** 下载四层离线日志 {@link DownloadL4LogsRequest} {@link DownloadL4LogsResponse} */
  DownloadL4Logs(data: DownloadL4LogsRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadL4LogsResponse>;
  /** 下载七层离线日志 {@link DownloadL7LogsRequest} {@link DownloadL7LogsResponse} */
  DownloadL7Logs(data: DownloadL7LogsRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadL7LogsResponse>;
  /** 导出站点配置 {@link ExportZoneConfigRequest} {@link ExportZoneConfigResponse} */
  ExportZoneConfig(data: ExportZoneConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ExportZoneConfigResponse>;
  /** 操作边缘函数运行环境 {@link HandleFunctionRuntimeEnvironmentRequest} {@link HandleFunctionRuntimeEnvironmentResponse} */
  HandleFunctionRuntimeEnvironment(data: HandleFunctionRuntimeEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<HandleFunctionRuntimeEnvironmentResponse>;
  /** 认证站点 {@link IdentifyZoneRequest} {@link IdentifyZoneResponse} */
  IdentifyZone(data: IdentifyZoneRequest, config?: AxiosRequestConfig): AxiosPromise<IdentifyZoneResponse>;
  /** 导入站点配置 {@link ImportZoneConfigRequest} {@link ImportZoneConfigResponse} */
  ImportZoneConfig(data: ImportZoneConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ImportZoneConfigResponse>;
  /** 增购套餐配额 {@link IncreasePlanQuotaRequest} {@link IncreasePlanQuotaResponse} */
  IncreasePlanQuota(data: IncreasePlanQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<IncreasePlanQuotaResponse>;
  /** 修改加速域名信息 {@link ModifyAccelerationDomainRequest} {@link ModifyAccelerationDomainResponse} */
  ModifyAccelerationDomain(data: ModifyAccelerationDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccelerationDomainResponse>;
  /** 批量修改加速域名状态 {@link ModifyAccelerationDomainStatusesRequest} {@link ModifyAccelerationDomainStatusesResponse} */
  ModifyAccelerationDomainStatuses(data: ModifyAccelerationDomainStatusesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccelerationDomainStatusesResponse>;
  /** 修改别称域名 {@link ModifyAliasDomainRequest} {@link ModifyAliasDomainResponse} */
  ModifyAliasDomain(data: ModifyAliasDomainRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAliasDomainResponse>;
  /** 修改别称域名状态 {@link ModifyAliasDomainStatusRequest} {@link ModifyAliasDomainStatusResponse} */
  ModifyAliasDomainStatus(data: ModifyAliasDomainStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAliasDomainStatusResponse>;
  /** 修改应用代理（旧） {@link ModifyApplicationProxyRequest} {@link ModifyApplicationProxyResponse} */
  ModifyApplicationProxy(data: ModifyApplicationProxyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationProxyResponse>;
  /** 修改应用代理规则（旧） {@link ModifyApplicationProxyRuleRequest} {@link ModifyApplicationProxyRuleResponse} */
  ModifyApplicationProxyRule(data: ModifyApplicationProxyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationProxyRuleResponse>;
  /** 修改应用代理规则的状态（旧） {@link ModifyApplicationProxyRuleStatusRequest} {@link ModifyApplicationProxyRuleStatusResponse} */
  ModifyApplicationProxyRuleStatus(data: ModifyApplicationProxyRuleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationProxyRuleStatusResponse>;
  /** 修改应用代理的状态（旧） {@link ModifyApplicationProxyStatusRequest} {@link ModifyApplicationProxyStatusResponse} */
  ModifyApplicationProxyStatus(data: ModifyApplicationProxyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationProxyStatusResponse>;
  /** 修改内容标识符 {@link ModifyContentIdentifierRequest} {@link ModifyContentIdentifierResponse} */
  ModifyContentIdentifier(data: ModifyContentIdentifierRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyContentIdentifierResponse>;
  /** 修改自定义响应页面 {@link ModifyCustomErrorPageRequest} {@link ModifyCustomErrorPageResponse} */
  ModifyCustomErrorPage(data: ModifyCustomErrorPageRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomErrorPageResponse>;
  /** 批量修改 DNS 记录 {@link ModifyDnsRecordsRequest} {@link ModifyDnsRecordsResponse} */
  ModifyDnsRecords(data: ModifyDnsRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDnsRecordsResponse>;
  /** 批量修改 DNS 记录状态 {@link ModifyDnsRecordsStatusRequest} {@link ModifyDnsRecordsStatusResponse} */
  ModifyDnsRecordsStatus(data: ModifyDnsRecordsStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDnsRecordsStatusResponse>;
  /** 修改边缘函数 {@link ModifyFunctionRequest} {@link ModifyFunctionResponse} */
  ModifyFunction(data: ModifyFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFunctionResponse>;
  /** 修改边缘函数触发规则 {@link ModifyFunctionRuleRequest} {@link ModifyFunctionRuleResponse} */
  ModifyFunctionRule(data: ModifyFunctionRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFunctionRuleResponse>;
  /** 修改边缘函数触发规则优先级 {@link ModifyFunctionRulePriorityRequest} {@link ModifyFunctionRulePriorityResponse} */
  ModifyFunctionRulePriority(data: ModifyFunctionRulePriorityRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFunctionRulePriorityResponse>;
  /** 配置域名证书 {@link ModifyHostsCertificateRequest} {@link ModifyHostsCertificateResponse} */
  ModifyHostsCertificate(data: ModifyHostsCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHostsCertificateResponse>;
  /** 修改四层代理实例 {@link ModifyL4ProxyRequest} {@link ModifyL4ProxyResponse} */
  ModifyL4Proxy(data: ModifyL4ProxyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4ProxyResponse>;
  /** 修改四层代理转发规则 {@link ModifyL4ProxyRulesRequest} {@link ModifyL4ProxyRulesResponse} */
  ModifyL4ProxyRules(data: ModifyL4ProxyRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4ProxyRulesResponse>;
  /** 修改四层代理转发规则状态 {@link ModifyL4ProxyRulesStatusRequest} {@link ModifyL4ProxyRulesStatusResponse} */
  ModifyL4ProxyRulesStatus(data: ModifyL4ProxyRulesStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4ProxyRulesStatusResponse>;
  /** 修改四层代理实例状态 {@link ModifyL4ProxyStatusRequest} {@link ModifyL4ProxyStatusResponse} */
  ModifyL4ProxyStatus(data: ModifyL4ProxyStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL4ProxyStatusResponse>;
  /** 修改七层加速规则 {@link ModifyL7AccRuleRequest} {@link ModifyL7AccRuleResponse} */
  ModifyL7AccRule(data: ModifyL7AccRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL7AccRuleResponse>;
  /** 修改七层加速规则优先级 {@link ModifyL7AccRulePriorityRequest} {@link ModifyL7AccRulePriorityResponse} */
  ModifyL7AccRulePriority(data: ModifyL7AccRulePriorityRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL7AccRulePriorityResponse>;
  /** 修改七层加速全局配置 {@link ModifyL7AccSettingRequest} {@link ModifyL7AccSettingResponse} */
  ModifyL7AccSetting(data: ModifyL7AccSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyL7AccSettingResponse>;
  /** 修改负载均衡实例 {@link ModifyLoadBalancerRequest} {@link ModifyLoadBalancerResponse} */
  ModifyLoadBalancer(data: ModifyLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerResponse>;
  /** 修改源站组 {@link ModifyOriginGroupRequest} {@link ModifyOriginGroupResponse} */
  ModifyOriginGroup(data: ModifyOriginGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyOriginGroupResponse>;
  /** 修改套餐配置 {@link ModifyPlanRequest} {@link ModifyPlanResponse} */
  ModifyPlan(data: ModifyPlanRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPlanResponse>;
  /** 修改实时日志投递任务 {@link ModifyRealtimeLogDeliveryTaskRequest} {@link ModifyRealtimeLogDeliveryTaskResponse} */
  ModifyRealtimeLogDeliveryTask(data: ModifyRealtimeLogDeliveryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRealtimeLogDeliveryTaskResponse>;
  /** 修改规则引擎规则（旧） {@link ModifyRuleRequest} {@link ModifyRuleResponse} */
  ModifyRule(data: ModifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleResponse>;
  /** 修改安全 IP 组 {@link ModifySecurityIPGroupRequest} {@link ModifySecurityIPGroupResponse} */
  ModifySecurityIPGroup(data: ModifySecurityIPGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityIPGroupResponse>;
  /** 修改Web&Bot安全配置 {@link ModifySecurityPolicyRequest} {@link ModifySecurityPolicyResponse} */
  ModifySecurityPolicy(data: ModifySecurityPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityPolicyResponse>;
  /** 修改站点 {@link ModifyZoneRequest} {@link ModifyZoneResponse} */
  ModifyZone(data: ModifyZoneRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneResponse>;
  /** 修改站点配置（旧） {@link ModifyZoneSettingRequest} {@link ModifyZoneSettingResponse} */
  ModifyZoneSetting(data: ModifyZoneSettingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneSettingResponse>;
  /** 切换站点状态 {@link ModifyZoneStatusRequest} {@link ModifyZoneStatusResponse} */
  ModifyZoneStatus(data: ModifyZoneStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyZoneStatusResponse>;
  /** 续费套餐 {@link RenewPlanRequest} {@link RenewPlanResponse} */
  RenewPlan(data: RenewPlanRequest, config?: AxiosRequestConfig): AxiosPromise<RenewPlanResponse>;
  /** 升级套餐 {@link UpgradePlanRequest} {@link UpgradePlanResponse} */
  UpgradePlan(data: UpgradePlanRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradePlanResponse>;
  /** 验证归属权 {@link VerifyOwnershipRequest} {@link VerifyOwnershipResponse} */
  VerifyOwnership(data: VerifyOwnershipRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyOwnershipResponse>;
  /** @deprecated 创建预热任务 {@link V20220106.CreatePrefetchTaskRequest} {@link V20220106.CreatePrefetchTaskResponse} */
  CreatePrefetchTask(data: V20220106.CreatePrefetchTaskRequest, config: AxiosRequestConfig & V20220106.VersionHeader): AxiosPromise<V20220106.CreatePrefetchTaskResponse>;
  /** @deprecated 创建清除缓存任务 {@link V20220106.CreatePurgeTaskRequest} {@link V20220106.CreatePurgeTaskResponse} */
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
