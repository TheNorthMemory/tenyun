/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 请求头部及请求url访问控制 */
declare interface AccessControl {
  /** on | off 是否启用请求头部及请求url访问控制 */
  Switch: string;
  /** 请求头部及请求url访问规则 */
  AccessControlRules?: AccessControlRule[] | null;
  /** 返回状态码 */
  ReturnCode?: number | null;
}

/** 访问控制规则 */
declare interface AccessControlRule {
  /** requestHeader ：对请求头部进行访问控制url ： 对访问url进行访问控制 */
  RuleType: string | null;
  /** 封禁内容 */
  RuleContent: string | null;
  /** on ：正则匹配off ：字面匹配 */
  Regex: string | null;
  /** RuleType为requestHeader时必填，否则不需要填 */
  RuleHeader?: string | null;
}

/** 缓存配置高级版本规则 */
declare interface AdvanceCacheRule {
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效default：源站未返回 max-age 情况下的缓存规则 */
  CacheType: string | null;
  /** 对应类型下的匹配内容：all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/test/path 时填充绝对路径，如 /xxx/test.htmldefault 时填充 "no max-age" */
  CacheContents: string[] | null;
  /** 缓存过期时间单位为秒，最大可设置为 365 天 */
  CacheTime: number | null;
}

/** 高级配置集合 */
declare interface AdvanceConfig {
  /** 高级配置名称。 */
  Name: string | null;
  /** 是否支持高级配置，on：支持off：不支持 */
  Value: string | null;
}

/** 回源的自定义Https配置 */
declare interface AdvanceHttps {
  /** 自定义Tls数据开关 */
  CustomTlsStatus?: string | null;
  /** Tls版本列表，支持设置 TLSv1, TLSV1.1, TLSV1.2, TLSv1.3，修改时必须开启连续的版本 */
  TlsVersion?: string[] | null;
  /** 自定义加密套件 */
  Cipher?: string | null;
  /** 回源双向校验开启状态off - 关闭校验oneWay - 校验源站twoWay - 双向校验 */
  VerifyOriginType?: string | null;
  /** 回源层证书配置信息 */
  CertInfo?: ServerCert | null;
  /** 源站证书配置信息 */
  OriginCertInfo?: ClientCert | null;
}

/** 时间戳防盗链高级版配置，白名单功能 */
declare interface AdvancedAuthentication {
  /** 防盗链配置开关，on或off，开启时必须且只能配置一种模式，其余模式为null。 */
  Switch: string;
  /** 时间戳防盗链高级版模式A配置。 */
  TypeA?: AdvancedAuthenticationTypeA | null;
  /** 时间戳防盗链高级版模式B配置。 */
  TypeB?: AdvancedAuthenticationTypeB | null;
  /** 时间戳防盗链高级版模式C配置。 */
  TypeC?: AdvancedAuthenticationTypeC | null;
  /** 时间戳防盗链高级版模式D配置。 */
  TypeD?: AdvancedAuthenticationTypeD | null;
  /** 时间戳防盗链高级版模式E配置。 */
  TypeE?: AdvancedAuthenticationTypeE | null;
  /** 时间戳防盗链高级版模式F配置。 */
  TypeF?: AdvancedAuthenticationTypeF | null;
}

/** 时间戳防盗链高级版模式A配置。 */
declare interface AdvancedAuthenticationTypeA {
  /** 用于计算签名的密钥，只允许字母和数字，长度6-32字节。 */
  SecretKey: string;
  /** uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  SignParam: string;
  /** uri串中时间的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  TimeParam: string;
  /** 过期时间，单位秒。 */
  ExpireTime: number;
  /** 是否必须提供过期时间参数。 */
  ExpireTimeRequired: boolean;
  /** Url组成格式，如：${private_key}${schema}${host}${full_uri。 */
  Format: string;
  /** 时间格式，dec，hex分别表示十进制，十六进制。 */
  TimeFormat: string;
  /** 鉴权失败时返回的状态码。 */
  FailCode: number;
  /** 链接过期时返回的状态码。 */
  ExpireCode: number;
  /** 需要鉴权的url路径列表。 */
  RulePaths: string[];
  /** 保留字段。 */
  Transformation?: number;
}

/** 时间戳防盗链高级版模式B配置。 */
declare interface AdvancedAuthenticationTypeB {
  /** alpha键名。 */
  KeyAlpha: string;
  /** beta键名。 */
  KeyBeta: string;
  /** gamma键名。 */
  KeyGamma: string;
  /** uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  SignParam: string;
  /** uri串中时间的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  TimeParam: string;
  /** 过期时间，单位秒。 */
  ExpireTime: number;
  /** 时间格式，dec，hex分别表示十进制，十六进制。 */
  TimeFormat: string;
  /** 鉴权失败时返回的状态码。 */
  FailCode: number;
  /** 链接过期时返回的状态码。 */
  ExpireCode: number;
  /** 需要鉴权的url路径列表。 */
  RulePaths: string[];
}

/** 时间戳防盗链高级版模式C配置。 */
declare interface AdvancedAuthenticationTypeC {
  /** 访问密钥。 */
  AccessKey: string;
  /** 鉴权密钥。 */
  SecretKey: string;
}

/** 时间戳防盗链高级版模式D配置。 */
declare interface AdvancedAuthenticationTypeD {
  /** 用于计算签名的密钥，只允许字母和数字，长度6-32字节。 */
  SecretKey: string;
  /** 备份密钥，当使用SecretKey鉴权失败时会使用该密钥重新鉴权。 */
  BackupSecretKey: string;
  /** uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  SignParam: string;
  /** uri串中时间的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  TimeParam: string;
  /** 过期时间，单位秒。 */
  ExpireTime: number;
  /** 时间格式，dec，hex分别表示十进制，十六进制。 */
  TimeFormat: string;
}

/** 时间戳防盗链高级版模式E配置。 */
declare interface AdvancedAuthenticationTypeE {
  /** 用于计算签名的密钥，只允许字母和数字，长度6-32字节。 */
  SecretKey: string | null;
  /** uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  SignParam: string | null;
  /** uri串中Acl签名的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  AclSignParam: string | null;
  /** uri串中开始时间字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  StartTimeParam: string | null;
  /** uri串中过期时间字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  ExpireTimeParam: string | null;
  /** 时间格式，dec */
  TimeFormat: string | null;
}

/** 时间戳防盗链高级鉴权模式TypeF配置 */
declare interface AdvancedAuthenticationTypeF {
  /** uri串中签名的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  SignParam: string | null;
  /** uri串中时间的字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  TimeParam: string | null;
  /** uri串中Transaction字段名，字母，数字或下划线构成，同时必须以字母开头。 */
  TransactionParam: string | null;
  /** 用于计算签名的主密钥，只允许字母和数字，长度6-32字节。 */
  SecretKey: string | null;
  /** 用于计算签名的备选密钥，主密钥校验失败后再次尝试备选密钥，只允许字母和数字，长度6-32字节。 */
  BackupSecretKey?: string | null;
}

/** scdn 的自定义 cc 规则 */
declare interface AdvancedCCRules {
  /** 规则名称 */
  RuleName?: string;
  /** 探测时长 */
  DetectionTime?: number | null;
  /** 限频阈值 */
  FrequencyLimit?: number | null;
  /** IP 惩罚开关，可选on|off */
  PunishmentSwitch?: string | null;
  /** IP 惩罚时长 */
  PunishmentTime?: number | null;
  /** 执行动作，intercept|redirect */
  Action?: string | null;
  /** 动作为 redirect 时，重定向的url */
  RedirectUrl?: string | null;
  /** 七层限频具体配置 */
  Configure?: ScdnSevenLayerRules[] | null;
  /** 是否开启改规则 on 开启，off关闭 */
  Switch?: string | null;
}

/** 缓存过期配置高级版，注意：此字段已经弃用，请使用RuleCache */
declare interface AdvancedCache {
  /** 缓存过期规则 */
  CacheRules: AdvanceCacheRule[] | null;
  /** 强制缓存配置on：开启off：关闭开启时，源站返回 no-cache、no-store 头部时，仍按照缓存过期规则进行节点缓存默认为关闭状态 */
  IgnoreCacheControl: string | null;
  /** 当源站返回Set-Cookie头部时，节点是否缓存该头部及bodyon：开启，不缓存该头部及bodyoff：关闭，遵循用户自定义的节点缓存规则默认为关闭状态 */
  IgnoreSetCookie: string | null;
}

/** SCDN精准访问控制配置 */
declare interface AdvancedScdnAclGroup {
  /** 规则名称 */
  RuleName: string;
  /** 具体配置 */
  Configure: AdvancedScdnAclRule[];
  /** 执行动作，intercept|redirect */
  Result: string;
  /** 规则是否生效，active|inactive */
  Status?: string;
  /** 错误页面配置 */
  ErrorPage?: ScdnErrorPage;
}

/** 精准访问控制匹配规则 */
declare interface AdvancedScdnAclRule {
  /** 匹配关键字：protocol：HTTP协议httpVersion：HTTP版本method：请求方法ip：请求源IPipAsn：请求源IP自治域号ipCountry：请求源IP所在国家ipArea：请求源IP所在大区xForwardFor：请求头X-Forward-Fordirectory：路径index：首页path：文件全路径file：文件扩展名param：请求参数referer：请求头Referercookie：请求头CookieuserAgent：请求头User-Agenthead：自定义请求头 */
  MatchKey: string;
  /** 逻辑操作符，取值如下：不包含：exclude包含：include不等于：notequal等于：equal前缀匹配：matching内容为空或不存在：null */
  LogicOperator: string;
  /** 匹配值。当MatchKey为protocol时取值：HTTP、HTTPS当MatchKey为httpVersion时取值：HTTP/1.0、HTTP/1.1、HTTP/1.2、HTTP/2、HTTP/3当MatchKey为method时取值：HEAD、GET、POST、PUT、OPTIONS、TRACE、DELETE、PATCH、CONNECT当MatchKey为ipCountry时，取值为：其他：OTHER委内瑞拉：VE乌拉圭：UY苏里南：SR巴拉圭：PY秘鲁：PE圭亚那：GY厄瓜多尔：EC哥伦比亚：CO智利：CL巴西：BR玻利维亚：BO阿根廷：AR新西兰：NZ萨摩亚：WS瓦努阿图：VU图瓦卢：TV汤加：TO托克劳：TK帕劳：PW纽埃：NU瑙鲁：NR基里巴斯：KI关岛：GU密克罗尼西亚：FM澳大利亚：AU美国：US波多黎各：PR多米尼加共和国：DO哥斯达黎加：CR东萨摩亚：AS安提瓜和巴布达：AG巴拿马：PA尼加拉瓜：NI墨西哥：MX牙买加：JM海地：HT洪都拉斯：HN危地马拉：GT瓜德罗普岛：GP格陵兰：GL格林纳达：GD古巴：CU加拿大：CA伯利兹：BZ巴哈马：BS百慕大：BM巴巴多斯：BB阿鲁巴：AW安圭拉：AI梵蒂冈：VA斯洛伐克：SK俄罗斯：RU英国：GB捷克共和国：CZ乌克兰：UA土耳其：TR斯洛文尼亚：SI瑞典：SE塞尔维亚：RS罗马尼亚：RO葡萄牙：PT波兰：PL挪威：NO荷兰：NL马耳他：MT马其顿：MK黑山：ME摩尔多瓦：MD摩纳哥：MC拉脱维亚：LV卢森堡：LU立陶宛：LT列支敦士登：LI哈萨克斯坦：KZ意大利：IT冰岛：IS爱尔兰：IE匈牙利：HU克罗地亚：HR希腊：GR直布罗陀：GI根西岛：GG格鲁吉亚：GE法国：FR芬兰：FI西班牙：ES爱沙尼亚：EE丹麦：DK德国：DE塞浦路斯：CY瑞士：CH白俄罗斯：BY保加利亚：BG比利时：BE阿塞拜疆：AZ奥地利：AT亚美尼亚：AM阿尔巴尼亚：AL安道尔：AD东帝汶：TL叙利亚：SY沙特阿拉伯：SA巴勒斯坦：PS斯里兰卡：LK斯里兰卡：LK朝鲜：KP吉尔吉斯斯坦：KG中国香港：HK文莱：BN孟加拉：BD阿联酋：AE也门：YE越南：VN乌兹别克斯坦：UZ中国台湾：TW土库曼斯坦：TM塔吉克斯坦：TJ泰国：TH新加坡：SG卡塔尔：QA巴基斯坦：PK菲律宾：PH阿曼：OM尼泊尔：NP马来西亚：MY马尔代夫：MV中国澳门：MO蒙古：MN缅甸：MM黎巴嫩：LB科威特：KW韩国：KR柬埔寨：KH日本：JP约旦：JO伊朗：IR伊拉克：IQ印度：IN以色列：IL印度尼西亚：ID中国：CN不丹：BT巴林：BH阿富汗：AF利比亚：LY刚果金：CG留尼汪岛：RE斯威士兰：SZ津巴布韦：ZW赞比亚：ZM马约特：YT乌干达：UG坦桑尼亚：TZ突尼斯：TN多哥：TG乍得：TD索马里：SO塞内加尔：SN苏丹：SD塞舌尔：SC卢旺达：RW尼日利亚：NG尼日尔：NE纳米比亚：NA莫桑比克：MZ马拉维：MW毛里求斯：MU毛里塔尼亚：MR马里：ML马达加斯加：MG摩洛哥：MA莱索托：LS利比里亚：LR科摩罗：KM肯尼亚：KE几内亚：GN冈比亚：GM加纳：GH加蓬：GA埃塞俄比亚：ET厄立特里亚：ER埃及：EG阿尔及利亚：DZ吉布提：DJ喀麦隆：CM刚果：CG博茨瓦纳：BW贝宁：BJ布隆迪：BI安哥拉：AO当MatchKey为ipArea时，取值为：其他：OTHER亚洲：AS欧洲：EU南极洲：AN非洲：AF大洋洲：OC北美洲：NA南美洲：SA当MatchKey为index时取值为：/;/index.html */
  MatchValue: string[];
  /** 是否区分大小写 true：区分 false：不区分 */
  CaseSensitive?: boolean;
  /** 当MatchKey为param时必填：表示请求参数Key 当MatchKey为cookie时必填：表示请求头Cookie中参数的 */
  MatchKeyParam?: string;
}

/** 时间戳防盗链配置 */
declare interface Authentication {
  /** 防盗链配置开关on：开启off：关闭开启时必须且只配置一种模式，其余模式需要设置为 null */
  Switch: string;
  /** 时间戳防盗链模式 A 配置 */
  TypeA?: AuthenticationTypeA | null;
  /** 时间戳防盗链模式 B 配置（模式 B 后台升级中，暂时不支持配置） */
  TypeB?: AuthenticationTypeB | null;
  /** 时间戳防盗链模式 C 配置 */
  TypeC?: AuthenticationTypeC | null;
  /** 时间戳防盗链模式 D 配置 */
  TypeD?: AuthenticationTypeD | null;
}

/** 时间戳防盗链模式 A 配置时间戳防盗链模式 A 的访问 URL 格式为：http://DomainName/Filename?sign=timestamp-rand-uid-md5hash其中 timestamp 为十进制 UNIX 时间戳；rand 为随机字符串，0 ~ 100 位大小写字母与数字组成；uid 为 0；md5hash：MD5（文件路径-timestamp-rand-uid-自定义密钥） */
declare interface AuthenticationTypeA {
  /** 计算签名的密钥仅允许大小写字母与数字，长度 6~32 位 */
  SecretKey: string | null;
  /** 签名参数名设置仅允许大小写字母、数字或下划线，长度 1~100 位，不能以数字开头 */
  SignParam: string;
  /** 签名过期时间设置单位为秒，最大可设置为 630720000 */
  ExpireTime: number;
  /** 鉴权/不做鉴权的文件扩展名列表设置如果包含字符 * 则表示所有文件 */
  FileExtensions: string[];
  /** whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权 */
  FilterType: string;
  /** 计算签名的备用密钥仅允许大小写字母与数字，长度 6~32 位 */
  BackupSecretKey?: string | null;
}

/** 时间戳防盗链模式 B 配置（B 模式正在进行平台升级，暂不支持配置） */
declare interface AuthenticationTypeB {
  /** 计算签名的密钥仅允许大小写字母与数字，长度 6~32 位 */
  SecretKey: string | null;
  /** 签名过期时间设置单位为秒，最大可设置为 630720000 */
  ExpireTime: number;
  /** 鉴权/不做鉴权的文件扩展名列表设置如果包含字符 * 则表示所有文件 */
  FileExtensions: string[];
  /** whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权 */
  FilterType: string;
  /** 计算签名的备用密钥仅允许大小写字母与数字，长度 6~32 位 */
  BackupSecretKey?: string | null;
}

/** 时间戳防盗链模式 C 配置时间戳防盗链模式 C 的访问 URL 格式为：http://DomainName/md5hash/timestamp/FileName其中 timestamp 为十六进制 UNIX 时间戳；md5hash：MD5（自定义密钥 + 文件路径 + timestamp） */
declare interface AuthenticationTypeC {
  /** 计算签名的密钥仅允许大小写字母与数字，长度 6~32 位 */
  SecretKey: string | null;
  /** 签名过期时间设置单位为秒，最大可设置为 630720000 */
  ExpireTime: number;
  /** 鉴权/不做鉴权的文件扩展名列表设置如果包含字符 * 则表示所有文件 */
  FileExtensions: string[];
  /** whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权 */
  FilterType: string;
  /** 时间戳进制设置dec：十进制hex：十六进制 */
  TimeFormat?: string | null;
  /** 计算签名的备用密钥仅允许大小写字母与数字，长度 6~32 位 */
  BackupSecretKey?: string | null;
}

/** 时间戳防盗链模式 D 配置时间戳防盗链模式 D 的访问 URL 格式为：http://DomainName/FileName?sign=md5hash&t=timestamp其中 timestamp 为十进制或十六进制 UNIX 时间戳；md5hash：MD5（自定义密钥 + 文件路径 + timestamp） */
declare interface AuthenticationTypeD {
  /** 计算签名的密钥仅允许大小写字母与数字，长度 6~32 位 */
  SecretKey: string | null;
  /** 签名过期时间设置单位为秒，最大可设置为 630720000 */
  ExpireTime: number;
  /** 鉴权/不做鉴权的文件扩展名列表设置如果包含字符 * 则表示所有文件 */
  FileExtensions: string[];
  /** whitelist：白名单，表示对除了 FileExtensions 列表之外的所有类型进行鉴权blacklist：黑名单，表示仅对 FileExtensions 中的类型进行鉴权 */
  FilterType: string;
  /** 签名参数名设置仅允许大小写字母、数字或下划线，长度 1~100 位，不能以数字开头 */
  SignParam: string;
  /** 时间戳参数名设置仅允许大小写字母、数字或下划线，长度 1~100 位，不能以数字开头 */
  TimeParam: string;
  /** 时间戳进制设置dec：十进制hex：十六进制 */
  TimeFormat: string;
  /** 计算签名的备用密钥仅允许大小写字母与数字，长度 6~32 位 */
  BackupSecretKey?: string | null;
}

/** 图片优化-AvifAdapter配置 */
declare interface AvifAdapter {
  /** 开关，"on/off" */
  Switch?: string | null;
}

/** s3源站回源鉴权。 */
declare interface AwsPrivateAccess {
  /** 开关，on/off。 */
  Switch: string;
  /** 访问ID。 */
  AccessKey?: string | null;
  /** 密钥。 */
  SecretKey?: string | null;
  /** 地域 */
  Region?: string | null;
  /** Bucketname */
  Bucket?: string | null;
}

/** 带宽封顶配置，默认为关闭状态 */
declare interface BandwidthAlert {
  /** 用量封顶配置开关on：开启off：关闭 */
  Switch: string;
  /** 用量封顶阈值，带宽单位为bps，流量单位byte */
  BpsThreshold?: number | null;
  /** 达到阈值后的操作RETURN_404：全部请求返回 404 */
  CounterMeasure?: string | null;
  /** 境内区域上次触发用量封顶阈值的时间 */
  LastTriggerTime?: string | null;
  /** 用量封顶提醒开关on：开启off：关闭 */
  AlertSwitch?: string | null;
  /** 用量封顶阈值提醒百分比 */
  AlertPercentage?: number | null;
  /** 海外区域上次触发用量封顶阈值的时间 */
  LastTriggerTimeOverseas?: string | null;
  /** 用量阈值触发的维度带宽：bandwidth流量：flux */
  Metric?: string | null;
  /** 累计用量配置 */
  StatisticItems?: StatisticItem[] | null;
}

/** Bot cookie策略 */
declare interface BotCookie {
  /** on|off */
  Switch: string;
  /** 规则类型，当前只有all */
  RuleType: string;
  /** 规则值，['*'] */
  RuleValue: string[];
  /** 执行动作，monitor|intercept|redirect|captcha */
  Action: string;
  /** 重定向时设置的重定向页面 */
  RedirectUrl?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
}

/** Bot js策略 */
declare interface BotJavaScript {
  /** on|off */
  Switch: string;
  /** 规则类型，当前只有file */
  RuleType: string;
  /** 规则值，['html', 'htm'] */
  RuleValue: string[];
  /** 执行动作，monitor|intercept|redirect|captcha */
  Action: string;
  /** 重定向时设置的重定向页面 */
  RedirectUrl?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
}

/** BOT记录详细内容 */
declare interface BotRecord {
  /** 动作，取值为以为3个类型中的一个："intercept","permit","monitor"，分别表示： 拦截， 放行，监控 */
  Action: string;
  /** 会话总次数 */
  Nums: number;
  /** BotType=UB时，表示预测标签，取值如下： "crawler_unregular", "crawler_regular", "request_repeat", "credential_miss_user", "credential_without_user", "credential_only_action", "credential_user_password", "credential_cracking", "credential_stuffing", "brush_sms", "brush_captcha", "reg_malicious"BotType=TCB时，表示Bot分类，取值如下： "Uncategorised", "Search engine bot", "Site monitor", "Screenshot creator", "Link checker", "Web scraper", "Vulnerability scanner", "Virus scanner", "Speed tester", "Feed Fetcher", "Tool", "Marketing"BotType=UCB时，为二期接口，暂时未定义内容 */
  RuleName: string;
  /** 会话持续时间 */
  SessionDuration: number;
  /** 访问源IP */
  SrcIp: string;
  /** 异常特征 */
  BotFeature: string[];
  /** 最新检测时间 */
  Time: string;
  /** BOT得分 */
  Score: number;
  /** 平均速率 */
  AvgSpeed: number;
  /** BotType=TCB，表示TCB名称 */
  TcbDetail: string | null;
  /** BOT记录唯一ID，用于查询访问详情 */
  Id: string;
  /** 域名 */
  Domain: string | null;
}

/** Bot记录的排序选项 */
declare interface BotSortBy {
  /** 排序参数名称， 取值为：timestamp， nums， session_duration，score.total，stat.avg_speed分别表示按照：最新检测时间，会话总次数，会话持续时间，BOT得分，平均速率排序 */
  Key: string;
  /** asc/desc */
  Sequence: string;
}

/** session/ip维度的bot统计复杂对象 */
declare interface BotStatisticsCount {
  /** BOT次数 */
  Count: number;
  /** Top指标值,如果是ip维度就是ip如果是session维度就是域名 */
  Value: string;
  /** ip所在国家 */
  Country: string;
  /** ip所在省份 */
  Province: string;
  /** ip归属的idc */
  Isp: string;
}

/** BOT统计结果数据 */
declare interface BotStats {
  /** 指标名称 */
  Metric: string;
  /** 指标详细数据 */
  DetailData: BotStatsDetailData[];
}

/** BOT统计结果数据详细数据 */
declare interface BotStatsDetailData {
  /** 时间 */
  Time: string;
  /** 数据值 */
  Value: number;
}

/** 域名基础配置信息，含 CNAME、状态、业务类型、加速区域、创建时间、更新时间、源站配置等。 */
declare interface BriefDomain {
  /** 域名 ID */
  ResourceId?: string;
  /** 腾讯云账号 ID */
  AppId?: number;
  /** 加速域名 */
  Domain?: string;
  /** 域名对应的 CNAME 地址 */
  Cname?: string;
  /** 加速服务状态rejected：域名审核未通过，域名备案过期/被注销导致processing：部署中online：已启动offline：已关闭 */
  Status?: string;
  /** 项目 ID，可前往腾讯云项目管理页面查看 */
  ProjectId?: number;
  /** 域名业务类型web：静态加速download：下载加速media：流媒体点播加速 */
  ServiceType?: string;
  /** 域名创建时间 */
  CreateTime?: string;
  /** 域名更新时间 */
  UpdateTime?: string;
  /** 源站配置详情 */
  Origin?: Origin;
  /** 域名封禁状态normal：正常状态overdue：账号欠费导致域名关闭，充值完成后可自行启动加速服务malicious：域名出现恶意行为，强制关闭加速服务ddos：域名被大规模 DDoS 攻击，关闭加速服务idle：域名超过 90 天内无任何操作、数据产生，判定为不活跃域名自动关闭加速服务，可自行启动加速服务unlicensed：域名未备案/备案注销，自动关闭加速服务，备案完成后可自行启动加速服务capping：触发配置的带宽阈值上限readonly：域名存在特殊配置，被锁定 */
  Disable: string;
  /** 加速区域mainland：中国境内加速overseas：中国境外加速global：全球加速 */
  Area: string;
  /** 域名锁定状态normal：未锁定mainland：中国境内锁定overseas：中国境外锁定global：全球锁定 */
  Readonly: string;
  /** 域名所属产品，cdn/ecdn */
  Product: string;
  /** 主域名 */
  ParentHost: string;
}

/** 节点缓存过期时间配置，分为以下两种：+ 基础版缓存过期规则配置+ 高级版缓存过期规则配置 */
declare interface Cache {
  /** 基础缓存过期时间配置 */
  SimpleCache?: SimpleCache | null;
  /** 高级缓存过期时间配置（已弃用） */
  AdvancedCache?: AdvancedCache | null;
  /** 高级路径缓存配置 */
  RuleCache?: RuleCache[] | null;
}

/** 启发式自定义时间缓存配置 */
declare interface CacheConfig {
  /** on 代表开启自定义启发式缓存时间off 代表关闭自定义启发式缓存时间 */
  HeuristicCacheTimeSwitch: string;
  /** 单位 秒. */
  HeuristicCacheTime: number;
}

/** 路径缓存缓存配置 */
declare interface CacheConfigCache {
  /** 缓存配置开关on：开启off：关闭 */
  Switch: string | null;
  /** 缓存过期时间设置单位为秒，最大可设置为 365 天 */
  CacheTime: number | null;
  /** 高级缓存过期配置，开启时会对比源站返回的 max-age 值与 CacheRules 中设置的缓存过期时间，取最小值在节点进行缓存on：开启off：关闭默认为关闭状态 */
  CompareMaxAge: string | null;
  /** 强制缓存on：开启off：关闭默认为关闭状态，开启后，源站返回的 no-store、no-cache 资源，也将按照 CacheRules 规则进行缓存 */
  IgnoreCacheControl: string | null;
  /** 当源站返回Set-Cookie头部时，节点是否缓存该头部及bodyon：开启，不缓存该头部及bodyoff：关闭，遵循用户自定义的节点缓存规则默认为关闭状态 */
  IgnoreSetCookie: string | null;
}

/** 路径缓存遵循源站配置 */
declare interface CacheConfigFollowOrigin {
  /** 遵循源站配置开关on：开启off：关闭 */
  Switch: string;
  /** 启发式缓存配置 */
  HeuristicCache?: HeuristicCache | null;
}

/** 路径缓存不缓存配置 */
declare interface CacheConfigNoCache {
  /** 不缓存配置开关on：开启off：关闭 */
  Switch: string | null;
  /** 总是回源站校验on：开启off：关闭默认为关闭状态 */
  Revalidate: string | null;
}

/** 缓存键配置（忽略参数配置） */
declare interface CacheKey {
  /** 是否开启全路径缓存on：开启全路径缓存（即关闭参数忽略）off：关闭全路径缓存（即开启参数忽略） */
  FullUrlCache?: string;
  /** 是否忽略大小写缓存 */
  IgnoreCase?: string | null;
  /** CacheKey中包含请求参数 */
  QueryString?: QueryStringKey | null;
  /** CacheKey中包含Cookie */
  Cookie?: CookieKey | null;
  /** CacheKey中包含请求头部 */
  Header?: HeaderKey | null;
  /** CacheKey中包含自定义字符串 */
  CacheTag?: CacheTagKey | null;
  /** CacheKey中包含请求协议 */
  Scheme?: SchemeKey | null;
  /** 分路径缓存键配置 */
  KeyRules?: KeyRule[] | null;
}

/** 违规资源封禁/解封返回类型 */
declare interface CacheOptResult {
  /** 成功的url列表 */
  SuccessUrls?: string[] | null;
  /** 失败的url列表 */
  FailUrls: string[] | null;
}

/** 组成CacheKey的一部分 */
declare interface CacheTagKey {
  /** 是否使用CacheTag作为CacheKey的一部分 */
  Switch: string | null;
  /** 自定义CacheTag的值 */
  Value?: string | null;
}

/** 下行限速配置规则，最多可配置 100 条 */
declare interface CappingRule {
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效 */
  RuleType: string;
  /** RuleType 对应类型下的匹配内容： all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/test/path 时填充绝对路径，如 /xxx/test.html */
  RulePaths: string[];
  /** 下行速度值设置，单位为 KB/s */
  KBpsThreshold: number;
}

/** CC攻击Top数据 */
declare interface CcTopData {
  /** 客户端Ip */
  Ip: string | null;
  /** 访问URL */
  Url: string | null;
  /** 客户端UserAgent */
  UserAgent: string | null;
  /** 请求数 */
  Value: number | null;
  /** 域名 */
  Domain: string | null;
}

/** 访问明细数据类型 */
declare interface CdnData {
  /** 查询指定的指标名称：flux：流量，单位为 bytebandwidth：带宽，单位为 bpsrequest：请求数，单位为 次fluxHitRate：流量命中率，单位为 %statusCode：状态码，返回 2XX、3XX、4XX、5XX 汇总数据，单位为 个2XX：返回 2XX 状态码汇总及各 2 开头状态码数据，单位为 个3XX：返回 3XX 状态码汇总及各 3 开头状态码数据，单位为 个4XX：返回 4XX 状态码汇总及各 4 开头状态码数据，单位为 个5XX：返回 5XX 状态码汇总及各 5 开头状态码数据，单位为 个或指定查询的某一具体状态码 */
  Metric: string;
  /** 明细数据组合 */
  DetailData: TimestampData[];
  /** 汇总数据组合 */
  SummarizedData: SummarizedData;
}

/** IP 属性信息 */
declare interface CdnIp {
  /** 指定查询的 IP */
  Ip: string;
  /** IP 归属：yes：节点归属于腾讯云 CDNno：节点不属于腾讯云 CDN */
  Platform: string;
  /** 节点所处的省份/国家unknown 表示节点位置未知 */
  Location: string;
  /** 节点上下线历史记录 */
  History: CdnIpHistory[];
  /** 节点的所在区域mainland：中国境内加速节点overseas：中国境外加速节点unknown：服务地域无法获取 */
  Area: string;
  /** 节点的所在城市 */
  City: string | null;
}

/** CDN 节点上下线历史记录 */
declare interface CdnIpHistory {
  /** 操作类型online：节点上线offline：节点下线 */
  Status: string;
  /** 操作类型对应的操作时间当该值为 null 时表示无历史状态变更记录 */
  Datetime: string | null;
}

/** https 客户端证书配置 */
declare interface ClientCert {
  /** 客户端证书PEM 格式，需要进行 Base 64 编码 */
  Certificate: string | null;
  /** 客户端证书名称 */
  CertName?: string | null;
  /** 证书过期时间作为入参时无需填充 */
  ExpireTime?: string | null;
  /** 证书颁发时间作为入参时无需填充 */
  DeployTime?: string | null;
}

/** 客户端信息 */
declare interface ClientInfo {
  /** 省份。 */
  ProvName: string | null;
  /** 国家。 */
  Country: string | null;
  /** 运营商。 */
  IspName: string | null;
  /** 客户端IP */
  Ip: string | null;
}

/** 通过Cls日志，计算出来的IP每秒访问数量 */
declare interface ClsLogIpData {
  /** IP */
  ClientIp: string;
  /** 在给定的时间段中，1秒内的最大请求量 */
  Request: number;
  /** 在获取的Top信息中，IP出现的次数 */
  Count: number;
  /** 在给定的时间段中，1秒内的最大请求量对应的时间 */
  Time: string;
}

/** CLS日志搜索对象 */
declare interface ClsLogObject {
  /** 主题ID */
  TopicId: string;
  /** 主题名字 */
  TopicName: string;
  /** 日志时间 */
  Timestamp: string;
  /** 日志内容 */
  Content: string;
  /** 采集路径 */
  Filename: string;
  /** 日志来源设备 */
  Source: string;
}

/** Cls日志搜索结果 */
declare interface ClsSearchLogs {
  /** 获取更多检索结果的游标 */
  Context: string;
  /** 搜索结果是否已经全部返回 */
  Listover: boolean;
  /** 日志内容信息 */
  Results: ClsLogObject[];
}

/** 是否兼容旧版配置 */
declare interface Compatibility {
  /** 兼容标志状态码。 */
  Code: number | null;
}

/** 智能压缩配置，默认对 js、html、css、xml、json、shtml、htm 后缀且大小为 256 ~ 2097152 字节的文件进行 GZIP 压缩 */
declare interface Compression {
  /** 智能压缩配置开关on：开启off：关闭 */
  Switch: string;
  /** 压缩规则数组 */
  CompressionRules?: CompressionRule[] | null;
}

/** 智能压缩规则配置 */
declare interface CompressionRule {
  /** true：需要设置为 ture，启用压缩 */
  Compress: boolean | null;
  /** 触发压缩的文件长度最小值，单位为字节数 */
  MinLength: number | null;
  /** 触发压缩的文件长度最大值，单位为字节数最大可设置为 30MB */
  MaxLength: number | null;
  /** 文件压缩算法gzip：指定 GZIP 压缩brotli：指定Brotli压缩 */
  Algorithms: string[] | null;
  /** 根据文件后缀类型压缩例如 jpg、txt */
  FileExtensions?: string[] | null;
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效contentType：指定Content-Type头为特定值时生效当指定了此字段时，FileExtensions字段不生效 */
  RuleType?: string | null;
  /** CacheType 对应类型下的匹配内容：all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/testpath 时填充绝对路径，如 /xxx/test.htmlcontentType 时填充 text/html */
  RulePaths?: string[] | null;
}

/** 组成CacheKey的一部分 */
declare interface CookieKey {
  /** on | off 是否使用Cookie作为Cache的一部分 */
  Switch: string | null;
  /** 使用的cookie，';' 分割 */
  Value?: string | null;
}

/** ddos攻击带宽峰值数据 */
declare interface DDoSAttackBandwidthData {
  /** ddos攻击类型，当值为all的时候表示所有的攻击类型的总带宽峰值 */
  AttackType: string;
  /** ddos攻击带宽大小 */
  Value: number;
  /** 攻击时间点 */
  Time: string;
}

/** 攻击ip数据详细数据 */
declare interface DDoSAttackIPTopData {
  /** 攻击ip */
  AttackIP: string;
  /** 攻击ip所在省份 */
  Province: string;
  /** 攻击ip所在国家 */
  Country: string;
  /** 红果电信 */
  Isp: string;
  /** 攻击次数 */
  AttackCount: number;
}

/** DDoS统计数据 */
declare interface DDoSStatsData {
  /** 时间 */
  Time: string;
  /** 带宽数值，单位bps */
  Value: number;
}

/** DDoS攻击Top数据 */
declare interface DDoSTopData {
  /** 攻击类型 */
  AttackType: string;
  /** 攻击带宽，单位：bps */
  Value: number;
}

/** 加速域名全量配置信息 */
declare interface DetailDomain {
  /** 域名 ID */
  ResourceId: string;
  /** 腾讯云账号ID */
  AppId: number;
  /** 加速域名 */
  Domain: string;
  /** 域名对应的 CNAME 地址 */
  Cname: string | null;
  /** 加速服务状态rejected：域名审核未通过，域名备案过期/被注销导致processing：部署中online：已启动offline：已关闭 */
  Status: string;
  /** 项目 ID，可前往腾讯云项目管理页面查看 */
  ProjectId: number;
  /** 加速域名业务类型web：网页小文件download：下载大文件media：音视频点播hybrid: 动静加速dynamic: 动态加速 */
  ServiceType: string;
  /** 域名创建时间 */
  CreateTime: string;
  /** 域名更新时间 */
  UpdateTime: string;
  /** 源站配置 */
  Origin: Origin;
  /** IP 黑白名单配置 */
  IpFilter: IpFilter | null;
  /** IP 访问限频配置 */
  IpFreqLimit: IpFreqLimit | null;
  /** 状态码缓存配置 */
  StatusCodeCache: StatusCodeCache | null;
  /** 智能压缩配置 */
  Compression: Compression | null;
  /** 带宽封顶配置 */
  BandwidthAlert: BandwidthAlert | null;
  /** Range 回源配置 */
  RangeOriginPull: RangeOriginPull | null;
  /** 301/302 回源自动跟随配置 */
  FollowRedirect: FollowRedirect | null;
  /** 自定义错误页面配置 */
  ErrorPage: ErrorPage | null;
  /** 自定义请求头部配置 */
  RequestHeader: RequestHeader | null;
  /** 自定义响应头部配置 */
  ResponseHeader: ResponseHeader | null;
  /** 单链接下行限速配置 */
  DownstreamCapping: DownstreamCapping | null;
  /** 带参/不带参缓存配置 */
  CacheKey: CacheKey | null;
  /** 源站头部缓存配置 */
  ResponseHeaderCache: ResponseHeaderCache | null;
  /** 视频拖拽配置 */
  VideoSeek: VideoSeek | null;
  /** 节点缓存过期规则配置 */
  Cache: Cache | null;
  /** 跨国链路优化配置（功能灰度中，敬请期待） */
  OriginPullOptimization: OriginPullOptimization | null;
  /** Https 加速相关配置 */
  Https: Https | null;
  /** 时间戳防盗链配置 */
  Authentication: Authentication | null;
  /** SEO 优化配置 */
  Seo: Seo | null;
  /** 域名封禁状态normal：正常状态overdue：账号欠费导致域名关闭，充值完成后可自行启动加速服务malicious：域名出现恶意行为，强制关闭加速服务ddos：域名被大规模 DDoS 攻击，关闭加速服务idle：域名超过 90 天内无任何操作、数据产生，判定为不活跃域名自动关闭加速服务，可自行启动加速服务unlicensed：域名未备案/备案注销，自动关闭加速服务，备案完成后可自行启动加速服务capping：触发配置的带宽阈值上限readonly：域名存在特殊配置，被锁定 */
  Disable: string | null;
  /** 访问协议强制跳转配置 */
  ForceRedirect: ForceRedirect | null;
  /** Referer 防盗链配置 */
  Referer: Referer | null;
  /** 浏览器缓存过期规则配置（功能灰度中，敬请期待） */
  MaxAge: MaxAge | null;
  /** Ipv6 回源配置（功能灰度中，敬请期待） */
  Ipv6: Ipv6 | null;
  /** 是否兼容旧版本配置（内部兼容性字段） */
  Compatibility: Compatibility | null;
  /** 区域特殊配置 */
  SpecificConfig: SpecificConfig | null;
  /** 加速区域mainland：中国境内加速overseas：中国境外加速global：全球加速 */
  Area: string | null;
  /** 域名锁定状态normal：未锁定mainland：中国境内锁定overseas：中国境外锁定global：全球锁定 */
  Readonly: string | null;
  /** 回源超时配置 */
  OriginPullTimeout: OriginPullTimeout | null;
  /** 回源S3鉴权配置 */
  AwsPrivateAccess: AwsPrivateAccess | null;
  /** Scdn配置 */
  SecurityConfig: SecurityConfig | null;
  /** ImageOptimization配置 */
  ImageOptimization: ImageOptimization | null;
  /** UA黑白名单配置 */
  UserAgentFilter: UserAgentFilter | null;
  /** 访问控制 */
  AccessControl: AccessControl | null;
  /** 是否支持高级配置项on：支持off：不支持 */
  Advance: string | null;
  /** URL重定向配置 */
  UrlRedirect: UrlRedirect | null;
  /** 访问端口配置 */
  AccessPort: number[] | null;
  /** 标签配置 */
  Tag: Tag[] | null;
  /** 时间戳防盗链高级配置，白名单功能 */
  AdvancedAuthentication: AdvancedAuthentication | null;
  /** 回源鉴权高级配置，白名单功能 */
  OriginAuthentication: OriginAuthentication | null;
  /** Ipv6访问配置 */
  Ipv6Access: Ipv6Access | null;
  /** 高级配置集合 */
  AdvanceSet: AdvanceConfig[] | null;
  /** 离线缓存（功能灰度中，尚未全量，请等待后续全量发布） */
  OfflineCache: OfflineCache | null;
  /** 合并回源（白名单功能） */
  OriginCombine: OriginCombine | null;
  /** POST上传配置项 */
  PostMaxSize: PostSize | null;
  /** Quic配置 */
  Quic: Quic | null;
  /** 回源OSS私有鉴权 */
  OssPrivateAccess: OssPrivateAccess | null;
  /** WebSocket配置 */
  WebSocket: WebSocket | null;
  /** 远程鉴权配置 */
  RemoteAuthentication: RemoteAuthentication | null;
  /** 共享CNAME配置（白名单功能） */
  ShareCname: ShareCname | null;
  /** 规则引擎 */
  RuleEngine: RuleEngine | null;
  /** 主域名 */
  ParentHost: string | null;
  /** 华为云对象存储回源鉴权 */
  HwPrivateAccess: HwPrivateAccess | null;
  /** 七牛云对象存储回源鉴权 */
  QnPrivateAccess: QnPrivateAccess | null;
  /** https 请求计费开关 */
  HttpsBilling: HttpsBilling | null;
}

/** 诊断报告内容数据 */
declare interface DiagnoseData {
  /** 诊断报告内容 */
  Data: DiagnoseUnit[] | null;
  /** 当前诊断项是否正常。"ok"：正常"error"：异常"warning"："警告" */
  Status: string | null;
}

/** 诊断信息 */
declare interface DiagnoseInfo {
  /** 待诊断的URL。 */
  DiagnoseUrl: string | null;
  /** 由系统生成的诊断链接。 */
  DiagnoseLink: string | null;
  /** 诊断创建时间。 */
  CreateTime: string | null;
  /** 诊断链接过期时间。 */
  ExpireDate: string | null;
  /** 诊断链接当前访问次数，一个诊断链接最多可访问10次。 */
  VisitCount: number | null;
  /** 访问诊断链接的客户端简易信息 */
  ClientList: DiagnoseList[] | null;
  /** 域名加速区域 */
  Area: string | null;
}

/** 客户端访问诊断URL信息列表 */
declare interface DiagnoseList {
  /** 诊断任务标签。 */
  DiagnoseTag: string | null;
  /** 报告ID，用于获取详细诊断报告。 */
  ReportId: string | null;
  /** 客户端信息。 */
  ClientInfo: ClientInfo[] | null;
  /** 最终诊断结果。-1：已提交0 ：检测中1 ：检测正常2 ： 检测异常3 ： 诊断页面异常关闭 */
  FinalDiagnose: number | null;
  /** 诊断任务创建时间。 */
  CreateTime: string | null;
}

/** 诊断报告单元信息 */
declare interface DiagnoseUnit {
  /** 内容单元英文名称。 */
  Key: string | null;
  /** 内容单元中文名称。 */
  KeyText: string | null;
  /** 报告内容。 */
  Value: string | null;
  /** 报告内容。 */
  ValueText: string | null;
}

/** 地区运营商明细数据 */
declare interface DistrictIspInfo {
  /** 域名 */
  Domain: string;
  /** 协议类型 */
  Protocol: string;
  /** IP协议类型 */
  IpProtocol: string;
  /** 起始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 时间间隔，单位为分钟 */
  Interval: number;
  /** 指标名称 */
  Metric: string;
  /** 地区ID */
  District: number;
  /** 运营商ID */
  Isp: number;
  /** 指标数据点 */
  DataPoints: number[];
  /** 地区名称 */
  DistrictName: string;
  /** 运营商名称 */
  IspName: string;
}

/** 域名地区配置 */
declare interface DomainAreaConfig {
  /** 域名 */
  Domain: string;
  /** 地区列表，其中元素可为mainland/overseas */
  Area: string[];
}

/** 域名及其他指标Bot次数 */
declare interface DomainBotCount {
  /** 域名 */
  Domain: string;
  /** BOT次数 */
  Count: number;
  /** Top指标值 */
  Value: string | null;
  /** 国家/地区 */
  Country: string | null;
  /** 省份 */
  Province: string | null;
  /** 运营商 */
  Isp: string | null;
}

/** 域名查询时过滤条件。 */
declare interface DomainFilter {
  /** 过滤字段名，支持的列表如下：- origin：主源站。- domain：域名。- resourceId：域名id。- status：域名状态，online，offline或processing。- serviceType：业务类型，web，download，media，hybrid或dynamic。- projectId：项目ID。- domainType：主源站类型，cname表示自有源，cos表示cos接入，third_party表示第三方对象存储。- fullUrlCache：全路径缓存，on或off。- https：是否配置https，on，off或processing。- originPullProtocol：回源协议类型，支持http，follow或https。- tagKey：标签键。 */
  Name: string;
  /** 过滤字段值。 */
  Value: string[];
  /** 是否启用模糊查询，仅支持过滤字段名为origin，domain。模糊查询时，Value长度最大为1，否则Value长度最大为5。 */
  Fuzzy?: boolean;
}

/** 日志包下载链接详情 */
declare interface DomainLog {
  /** 日志包起始时间 */
  StartTime: string;
  /** 日志包结束时间 */
  EndTime: string;
  /** 日志包下载链接 */
  LogPath: string;
  /** 日志包对应加速区域mainland：境内overseas：境外 */
  Area: string;
  /** 日志包文件名 */
  LogName: string;
}

/** 单链接下行限速配置，默认为关闭状态 */
declare interface DownstreamCapping {
  /** 下行速度配置开关on：开启off：关闭 */
  Switch: string;
  /** 下行限速规则 */
  CappingRules?: CappingRule[] | null;
}

/** 状态码重定向配置，默认为关闭状态 */
declare interface ErrorPage {
  /** 状态码重定向配置开关on：开启off：关闭 */
  Switch: string | null;
  /** 状态码重定向规则配置 */
  PageRules?: ErrorPageRule[] | null;
}

/** 状态码重定向规则配置 */
declare interface ErrorPageRule {
  /** 状态码支持 400、403、404、500 */
  StatusCode: number;
  /** 重定向状态码设置支持 301 或 302 */
  RedirectCode: number;
  /** 重定向 URL需要为完整跳转路径，如 https://www.test.com/error.html */
  RedirectUrl: string;
}

/** 事件日志统计数据结果 */
declare interface EventLogStatsData {
  /** 时间 */
  Datetime: string;
  /** 请求数 */
  Request: number;
}

/** 除上海外其他区域日志集和日志主题信息 */
declare interface ExtraLogset {
  /** 日志集信息 */
  Logset: LogSetInfo | null;
  /** 日志主题信息列表 */
  Topics: TopicInfo[] | null;
}

/** 回源 301/302 状态码自动跟随配置，默认为关闭状态 */
declare interface FollowRedirect {
  /** 回源跟随开关on：开启off：关闭 */
  Switch: string;
  /** 自定义回源302 follow请求host配置，该功能为白名单功能，需要开启请联系腾讯云工程师。 */
  RedirectConfig?: RedirectConfig | null;
}

/** 访问协议强制跳转配置，默认为关闭状态 */
declare interface ForceRedirect {
  /** 访问强制跳转配置开关on：开启off：关闭 */
  Switch: string | null;
  /** 访问强制跳转类型http：强制 http 跳转https：强制 https 跳转 */
  RedirectType?: string | null;
  /** 强制跳转时返回状态码 支持 301、302 */
  RedirectStatusCode?: number | null;
  /** 强制跳转时是否返回增加的头部。 */
  CarryHeaders?: string | null;
}

/** 图片优化-GuetzliAdapter配置 */
declare interface GuetzliAdapter {
  /** 开关，"on/off" */
  Switch?: string | null;
}

/** HTTP 请求头 */
declare interface HTTPHeader {
  /** 请求头名称 */
  Name: string;
  /** 请求头值 */
  Value: string;
}

/** 组成CacheKey */
declare interface HeaderKey {
  /** 是否组成Cachekey */
  Switch?: string | null;
  /** 组成CacheKey的header数组，';' 分割 */
  Value?: string | null;
}

/** 启发式缓存配置 */
declare interface HeuristicCache {
  /** on 代表开启启发式缓存off 代表关闭启发式缓存 */
  Switch: string;
  /** 自定义启发式缓存时间配置 */
  CacheConfig?: CacheConfig;
}

/** HSTS 配置。 */
declare interface Hsts {
  /** 是否开启，on或off。 */
  Switch: string;
  /** MaxAge数值。 */
  MaxAge?: number | null;
  /** 是否包含子域名，on或off。 */
  IncludeSubDomains?: string | null;
}

/** Http 头部设置规则，最多可设置 100 条 */
declare interface HttpHeaderPathRule {
  /** http 头部设置方式set：设置。变更指定头部参数的取值为设置后的值；若设置的头部不存在，则会增加该头部；若存在多个重复的头部参数，则会全部变更，同时合并为一个头部。del：删除。删除指定的头部参数add：增加。增加指定的头部参数，默认允许重复添加，即重复添加相同的头部（注：重复添加可能会影响浏览器响应，请优先使用set操作） */
  HeaderMode: string | null;
  /** http 头部名称，最多可设置 100 个字符 */
  HeaderName: string | null;
  /** http 头部值，最多可设置 1000 个字符Mode 为 del 时非必填Mode 为 add/set 时必填 */
  HeaderValue: string | null;
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效 */
  RuleType: string | null;
  /** RuleType 对应类型下的匹配内容：all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/test/path 时填充绝对路径，如 /xxx/test.html */
  RulePaths: string[] | null;
}

/** http头部设置规则。 */
declare interface HttpHeaderRule {
  /** http头部设置方式，支持add，set或del，分别表示新增，设置或删除头部。 */
  HeaderMode: string;
  /** http头部名称。 */
  HeaderName: string;
  /** http头部值。 */
  HeaderValue: string;
}

/** 域名 https 加速配置，默认为关闭状态 */
declare interface Https {
  /** https 配置开关on：开启off：关闭 */
  Switch: string | null;
  /** http2 配置开关on：开启off：关闭 */
  Http2?: string | null;
  /** OCSP 配置开关on：开启off：关闭默认为关闭状态 */
  OcspStapling?: string | null;
  /** 客户端证书校验功能on：开启off：关闭默认为关闭状态，开启时需要上传客户端证书信息，该配置项目前在灰度中，尚未全量 */
  VerifyClient?: string | null;
  /** 服务端证书配置信息 */
  CertInfo?: ServerCert | null;
  /** 客户端证书配置信息 */
  ClientCertInfo?: ClientCert | null;
  /** Spdy 配置开关on：开启off：关闭默认为关闭状态 */
  Spdy?: string | null;
  /** https 证书部署状态closed：已关闭deploying：部署中deployed：部署成功failed：部署失败 */
  SslStatus?: string | null;
  /** Hsts配置 */
  Hsts?: Hsts | null;
  /** Tls版本设置，仅支持部分Advance域名，支持设置 TLSv1, TLSV1.1, TLSV1.2, TLSv1.3，修改时必须开启连续的版本 */
  TlsVersion?: string[] | null;
}

/** 支持 https 请求开关，若关闭，下发配置拦截https请求 */
declare interface HttpsBilling {
  /** https请求计费开关 */
  Switch: string;
}

/** 华为云对象存储回源鉴权 */
declare interface HwPrivateAccess {
  /** 开关 on/off */
  Switch: string;
  /** 访问 ID */
  AccessKey?: string | null;
  /** 密钥 */
  SecretKey?: string | null;
  /** bucketname */
  Bucket?: string | null;
}

/** ImageOptimization配置 */
declare interface ImageOptimization {
  /** WebpAdapter配置 */
  WebpAdapter: WebpAdapter | null;
  /** TpgAdapter配置 */
  TpgAdapter: TpgAdapter | null;
  /** GuetzliAdapter配置 */
  GuetzliAdapter: GuetzliAdapter | null;
  /** AvifAdapter配置 */
  AvifAdapter: AvifAdapter | null;
}

/** IP 黑白名单配置，默认为关闭状态 */
declare interface IpFilter {
  /** IP 黑白名单配置开关on：开启off：关闭 */
  Switch: string;
  /** IP 黑白名单类型whitelist：白名单blacklist：黑名单 */
  FilterType?: string | null;
  /** IP 黑白名单列表支持 X.X.X.X 形式 IP，或 /8、 /16、/24 形式网段最多可填充 50 个白名单或 50 个黑名单 */
  Filters?: string[] | null;
  /** IP 黑白名单分路径配置，白名单功能 */
  FilterRules?: IpFilterPathRule[] | null;
  /** IP 黑白名单验证失败时返回的 code（即将下线） */
  ReturnCode?: number | null;
}

/** IP黑白名单分路径配置 */
declare interface IpFilterPathRule {
  /** IP 黑白名单类型whitelist：白名单blacklist：黑名单 */
  FilterType: string | null;
  /** IP 黑白名单列表支持 X.X.X.X 形式 IP，或 /8、 /16、/24 形式网段最多可填充 50 个白名单或 50 个黑名单 */
  Filters: string[] | null;
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效 */
  RuleType: string | null;
  /** RuleType 对应类型下的匹配内容：all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/test/path 时填充绝对路径，如 /xxx/test.html */
  RulePaths: string[] | null;
}

/** 单节点单 IP 访问限频配置，默认为关闭状态 */
declare interface IpFreqLimit {
  /** IP 限频配置开关on：开启off：关闭 */
  Switch: string;
  /** 设置每秒请求数限制超出限制的请求会直接返回 514 */
  Qps?: number | null;
}

/** 节点 IP 信息 */
declare interface IpStatus {
  /** 节点 IP */
  Ip: string;
  /** 节点所属区域 */
  District: string;
  /** 节点所属运营商 */
  Isp: string;
  /** 节点所在城市 */
  City: string;
  /** 节点状态online：上线状态，正常调度服务中offline：下线状态 */
  Status: string;
  /** 节点 IPV6 */
  Ipv6: string | null;
}

/** Ipv6启用配置，不可更改 */
declare interface Ipv6 {
  /** 域名是否开启ipv6功能，on或off。 */
  Switch: string | null;
}

/** Ipv6访问配置 */
declare interface Ipv6Access {
  /** 域名是否开启ipv6访问功能，on或off。 */
  Switch: string | null;
}

/** 缓存键分路径配置 */
declare interface KeyRule {
  /** CacheType 对应类型下的匹配内容：file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/testpath 时填充绝对路径，如 /xxx/test.htmlindex 时填充 / */
  RulePaths: string[] | null;
  /** 规则类型：file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效index：首页 */
  RuleType: string | null;
  /** 是否开启全路径缓存on：开启全路径缓存（即关闭参数忽略）off：关闭全路径缓存（即开启参数忽略） */
  FullUrlCache: string | null;
  /** 是否忽略大小写缓存 */
  IgnoreCase: string | null;
  /** CacheKey中包含请求参数 */
  QueryString: RuleQueryString | null;
  /** 路径缓存键标签，传 user */
  RuleTag: string | null;
}

/** 日志集信息 */
declare interface LogSetInfo {
  /** 开发者ID */
  AppId: number;
  /** 渠道 */
  Channel: string | null;
  /** 日志集ID */
  LogsetId: string;
  /** 日志集名字 */
  LogsetName: string;
  /** 是否默认日志集 */
  IsDefault: number;
  /** 日志保存时间，单位为天 */
  LogsetSavePeriod: number;
  /** 创建日期 */
  CreateTime: string;
  /** 区域 */
  Region: string;
  /** cls侧是否已经被删除 */
  Deleted: string | null;
  /** 英文区域 */
  RegionEn: string | null;
}

/** 域名国内地区特殊配置。分地区特殊配置。UpdateDomainConfig接口只支持修改部分分地区配置，为了兼容旧版本配置，本类型会列出旧版本所有可能存在差异的配置列表，支持修改的配置列表如下：+ Authentication+ BandwidthAlert+ ErrorPage+ IpFilter+ Origin+ Referer */
declare interface MainlandConfig {
  /** 时间戳防盗链配置。 */
  Authentication?: Authentication | null;
  /** 带宽封顶配置。 */
  BandwidthAlert?: BandwidthAlert | null;
  /** 缓存规则配置。 */
  Cache?: Cache | null;
  /** 缓存相关配置。 */
  CacheKey?: CacheKey | null;
  /** 智能压缩配置。 */
  Compression?: Compression | null;
  /** 下载限速配置。 */
  DownstreamCapping?: DownstreamCapping | null;
  /** 错误码重定向配置。 */
  ErrorPage?: ErrorPage | null;
  /** 301和302自动回源跟随配置。 */
  FollowRedirect?: FollowRedirect | null;
  /** 访问协议强制跳转配置。 */
  ForceRedirect?: ForceRedirect | null;
  /** Https配置。 */
  Https?: Https | null;
  /** IP黑白名单配置。 */
  IpFilter?: IpFilter | null;
  /** IP限频配置。 */
  IpFreqLimit?: IpFreqLimit | null;
  /** 浏览器缓存规则配置。 */
  MaxAge?: MaxAge | null;
  /** 源站配置。 */
  Origin?: Origin | null;
  /** 跨国优化配置。 */
  OriginPullOptimization?: OriginPullOptimization | null;
  /** Range回源配置。 */
  RangeOriginPull?: RangeOriginPull | null;
  /** 防盗链配置。 */
  Referer?: Referer | null;
  /** 回源请求头部配置。 */
  RequestHeader?: RequestHeader | null;
  /** 源站响应头部配置。 */
  ResponseHeader?: ResponseHeader | null;
  /** 遵循源站缓存头部配置。 */
  ResponseHeaderCache?: ResponseHeaderCache | null;
  /** seo优化配置。 */
  Seo?: Seo | null;
  /** 域名业务类型，web，download，media分别表示静态加速，下载加速和流媒体加速。 */
  ServiceType?: string | null;
  /** 状态码缓存配置。 */
  StatusCodeCache?: StatusCodeCache | null;
  /** 视频拖拽配置。 */
  VideoSeek?: VideoSeek | null;
  /** 回源S3私有鉴权。 */
  AwsPrivateAccess?: AwsPrivateAccess | null;
  /** 回源OSS私有鉴权。 */
  OssPrivateAccess?: OssPrivateAccess | null;
  /** 华为云对象存储回源鉴权 */
  HwPrivateAccess?: HwPrivateAccess | null;
  /** 七牛云对象存储回源鉴权 */
  QnPrivateAccess?: QnPrivateAccess | null;
}

/** 名称与ID映射关系 */
declare interface MapInfo {
  /** 对象 Id */
  Id: number;
  /** 对象名称 */
  Name: string;
}

/** 浏览器缓存规则配置，用于设置 MaxAge 默认值，默认为关闭状态 */
declare interface MaxAge {
  /** 浏览器缓存配置开关on：开启off：关闭 */
  Switch: string | null;
  /** MaxAge 规则 */
  MaxAgeRules?: MaxAgeRule[] | null;
  /** MaxAge 状态码相关规则 */
  MaxAgeCodeRule?: MaxAgeCodeRule | null;
}

/** MaxAge 状态码相关规则配置 */
declare interface MaxAgeCodeRule {
  /** 处理动作clear：清除 cache-control 头部 */
  Action: string;
  /** 指定HTTP状态码生效，当前仅支持填写"400-599" */
  StatusCodes: string[];
}

/** MagAge 规则配置 */
declare interface MaxAgeRule {
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效index: 指定主页生效 */
  MaxAgeType: string;
  /** MaxAgeType 对应类型下的匹配内容：all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/test/path 时填充绝对路径，如 /xxx/test.htmlindex 时填充 /注意：all规则不可删除，默认遵循源站，可修改。 */
  MaxAgeContents: string[];
  /** MaxAge 时间设置，单位秒注意：时间为0，即不缓存。 */
  MaxAgeTime: number;
  /** 是否遵循源站，on或off，开启时忽略时间设置。 */
  FollowOrigin?: string | null;
}

/** 离线缓存是否开启 */
declare interface OfflineCache {
  /** on | off, 离线缓存是否开启 */
  Switch: string;
}

/** 源站配置复杂类型，支持以下配置：+ 源站指定为单个域名+ 源站指定为多个 IP，可配置端口（1~65535），可配置权重（1~100），格式为 IP:端口:权重+ 回源域名配置+ 对象存储（COS）作为源站+ 热备源站指定为单个域名+ 热备源站指定为多个 IP，可配置端口（1~65535），暂不支持权重配置+ 热备源站回源域名配置 */
declare interface Origin {
  /** 主源站列表修改源站时，需要同时填充对应的 OriginType */
  Origins?: string[] | null;
  /** 主源站类型入参支持以下几种类型：domain：域名类型domainv6：域名解析V6类型cos：对象存储源站ip：IP 列表作为源站ipv6：源站列表为一个单独的 IPv6 地址ip_ipv6：源站列表为多个 IPv4 地址和IPv6 地址ip_domain: 支持IP和域名形式源站混填（白名单功能）ip_domainv6：源站列表为多个 IPv4 地址以及域名解析v6地址ipv6_domain: 源站列表为多个 IPv6 地址以及域名ipv6_domainv6：源站列表为多个 IPv6 地址以及域名解析v6地址domain_domainv6：源站列表为多个域名解析v4 地址以及域名解析v6地址ip_ipv6_domain：源站列表为多个 IPv4 地址IPv6 地址以及域名ip_ipv6_domainv6：源站列表为多个 IPv4 地址IPv6 地址以及域名解析v6地址ip_domain_domainv6：源站列表为多个 IPv4 地址域名解析v4 地址以及域名解析v6地址ipv6_domain_domainv6：源站列表为多个 域名解析v4 地址IPv6 地址以及域名解析v6地址ip_ipv6_domain_domainv6：源站列表为多个 IPv4 地址IPv6 地址 域名解析v4 地址以及域名解析v6地址出参增加以下几种类型：image：数据万象源站ftp：历史 FTP 托管源源站，现已不维护修改 Origins 时需要同时填充对应的 OriginTypeIPv6 功能目前尚未全量，需要先申请试用 */
  OriginType?: string | null;
  /** 当源站类型为cos或者第三方存储加速时,ServerName字段必填回主源站时 Host 头部，不填充则默认为加速域名若接入的是泛域名，则回源 Host 默认为访问时的子域名 */
  ServerName?: string | null;
  /** OriginType 为对象存储（COS）时，可以指定是否允许访问私有 bucket注意：需要先授权 CDN 访问该私有 Bucket 的权限后，才可开启此配置。取值范围: on/off */
  CosPrivateAccess?: string | null;
  /** 回源协议配置http：强制 http 回源follow：协议跟随回源https：强制 https 回源，https 回源时仅支持源站 443 端口 */
  OriginPullProtocol?: string | null;
  /** 备源站列表修改备源站时，需要同时填充对应的 BackupOriginType */
  BackupOrigins?: string[] | null;
  /** 备源站类型，支持以下类型：domain：域名类型ip：IP 列表作为源站修改 BackupOrigins 时需要同时填充对应的 BackupOriginType以下备源源站类型尚未全量支持，需要申请试用：ipv6_domain: 源站列表为多个 IPv6 地址以及域名ip_ipv6：源站列表为多个 IPv4 地址和IPv6 地址ipv6_domain: 源站列表为多个 IPv6 地址以及域名ip_ipv6_domain：源站列表为多个 IPv4 地址IPv6 地址以及域名 */
  BackupOriginType?: string | null;
  /** 回备源站时 Host 头部，不填充则默认为主源站的 ServerName */
  BackupServerName?: string | null;
  /** 回源路径 */
  BasePath?: string | null;
  /** 回源路径重写规则配置 */
  PathRules?: PathRule[] | null;
  /** 分路径回源配置 */
  PathBasedOrigin?: PathBasedOriginRule[] | null;
  /** HTTPS回源高级配置 */
  AdvanceHttps?: AdvanceHttps | null;
  /** 对象存储回源厂商 */
  OriginCompany?: string | null;
}

/** 回源鉴权高级配置 */
declare interface OriginAuthentication {
  /** 鉴权开关，on或off */
  Switch: string | null;
  /** 鉴权类型A配置 */
  TypeA?: OriginAuthenticationTypeA | null;
}

/** 回源鉴权高级配置TypeA */
declare interface OriginAuthenticationTypeA {
  /** 用于计算签名的密钥，只允许字母和数字，长度6-32字节。 */
  SecretKey: string | null;
}

/** 合并回源配置项 */
declare interface OriginCombine {
  /** on|off 是否开启合并回源 */
  Switch: string;
}

/** CDN回源节点IP信息 */
declare interface OriginIp {
  /** 回源IP段/回源IP，默认返回IP段信息。 */
  Ip: string;
}

/** 跨国回源优化配置，默认为关闭状态 (已下线) */
declare interface OriginPullOptimization {
  /** 跨国回源优化配置开关on：开启off：关闭 */
  Switch: string;
  /** 跨国类型OVToCN：境外回源境内CNToOV：境内回源境外 */
  OptimizationType?: string | null;
}

/** 回源超时配置 */
declare interface OriginPullTimeout {
  /** 回源建连超时时间，单位为秒，要求5~60之间 */
  ConnectTimeout: number | null;
  /** 回源接收超时时间，单位为秒，要求10 ~ 300之间 */
  ReceiveTimeout: number | null;
}

/** oss回源鉴权 */
declare interface OssPrivateAccess {
  /** 开关， on/off。 */
  Switch: string;
  /** 访问ID。 */
  AccessKey?: string | null;
  /** 密钥。 */
  SecretKey?: string | null;
  /** 地域 */
  Region?: string | null;
  /** Bucketname */
  Bucket?: string | null;
}

/** 域名海外地区特殊配置。UpdateDomainConfig接口只支持修改部分分地区配置，为了兼容旧版本配置，本类型会列出旧版本所有可能存在差异的配置列表，支持修改的配置列表如下：+ Authentication+ BandwidthAlert+ ErrorPage+ IpFilter+ Origin+ Referer */
declare interface OverseaConfig {
  /** 时间戳防盗链配置。 */
  Authentication?: Authentication | null;
  /** 带宽封顶配置。 */
  BandwidthAlert?: BandwidthAlert | null;
  /** 缓存规则配置。 */
  Cache?: Cache | null;
  /** 缓存相关配置。 */
  CacheKey?: CacheKey | null;
  /** 智能压缩配置。 */
  Compression?: Compression | null;
  /** 下载限速配置。 */
  DownstreamCapping?: DownstreamCapping | null;
  /** 错误码重定向配置。 */
  ErrorPage?: ErrorPage | null;
  /** 301和302自动回源跟随配置。 */
  FollowRedirect?: FollowRedirect | null;
  /** 访问协议强制跳转配置。 */
  ForceRedirect?: ForceRedirect | null;
  /** Https配置。 */
  Https?: Https | null;
  /** IP黑白名单配置。 */
  IpFilter?: IpFilter | null;
  /** IP限频配置。 */
  IpFreqLimit?: IpFreqLimit | null;
  /** 浏览器缓存规则配置。 */
  MaxAge?: MaxAge | null;
  /** 源站配置。 */
  Origin?: Origin | null;
  /** 跨国优化配置。 */
  OriginPullOptimization?: OriginPullOptimization | null;
  /** Range回源配置。 */
  RangeOriginPull?: RangeOriginPull | null;
  /** 防盗链配置。 */
  Referer?: Referer | null;
  /** 回源请求头部配置。 */
  RequestHeader?: RequestHeader | null;
  /** 源站响应头部配置。 */
  ResponseHeader?: ResponseHeader | null;
  /** 遵循源站缓存头部配置。 */
  ResponseHeaderCache?: ResponseHeaderCache | null;
  /** seo优化配置。 */
  Seo?: Seo | null;
  /** 域名业务类型，web，download，media分别表示静态加速，下载加速和流媒体加速。 */
  ServiceType?: string | null;
  /** 状态码缓存配置。 */
  StatusCodeCache?: StatusCodeCache | null;
  /** 视频拖拽配置。 */
  VideoSeek?: VideoSeek | null;
  /** 回源S3私有鉴权。 */
  AwsPrivateAccess?: AwsPrivateAccess | null;
  /** 回源OSS私有鉴权。 */
  OssPrivateAccess?: OssPrivateAccess | null;
  /** 华为云对象存储鉴权 */
  HwPrivateAccess?: HwPrivateAccess | null;
  /** 七牛云对象存储鉴权 */
  QnPrivateAccess?: QnPrivateAccess | null;
}

/** 分路径回源规则 */
declare interface PathBasedOriginRule {
  /** 规则类型：file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效index: 指定主页生效 */
  RuleType: string;
  /** RuleType 对应类型下的匹配内容：file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/test/path 时填充绝对路径，如 /xxx/test.htmlindex 时填充 / */
  RulePaths: string[];
  /** 源站列表，支持域名或ipv4地址 */
  Origin: string[];
}

/** 分路径回源配置规则。 */
declare interface PathRule {
  /** 是否开启通配符“*”匹配：false：关闭true：开启 */
  Regex: boolean | null;
  /** 匹配的URL路径，仅支持Url路径，不支持参数。默认完全匹配，开启通配符“*”匹配后，最多支持5个通配符，最大长度为1024个字符。 */
  Path: string | null;
  /** 路径匹配时的回源源站。暂不支持开了私有读写的COS源。不填写时沿用默认源站。 */
  Origin?: string | null;
  /** 路径匹配时回源的Host头部。不填写时沿用默认ServerName。 */
  ServerName?: string | null;
  /** 源站所属区域，支持CN，OV：CN：中国境内OV：中国境外默认为CN。 */
  OriginArea?: string | null;
  /** 路径匹配时回源的URI路径，必须以“/”开头，不包含参数部分。最大长度为1024个字符。可使用$1, $2, $3, $4, $5分别捕获匹配路径中的通配符号“*”，最多支持10个捕获值。 */
  ForwardUri?: string | null;
  /** 路径匹配时回源的头部设置。 */
  RequestHeaders?: HttpHeaderRule[] | null;
  /** 当Regex为false时，Path是否开启完全匹配。false：关闭true：开启 */
  FullMatch?: boolean | null;
}

/** POST请求上传文件流式传输最大限制 */
declare interface PostSize {
  /** 是调整POST请求限制，平台默认为32MB。关闭：off，开启：on。 */
  Switch: string;
  /** 最大限制，取值在1MB和200MB之间。 */
  MaxSize?: number;
}

/** 刷新任务详情 */
declare interface PurgeTask {
  /** 刷新任务 ID */
  TaskId: string;
  /** 刷新 URL */
  Url: string;
  /** 刷新任务状态fail：刷新失败done：刷新成功process：刷新中 */
  Status: string;
  /** 刷新类型url：URL 刷新path：目录刷新 */
  PurgeType: string;
  /** 刷新方式flush：刷新更新资源（仅目录刷新时有此类型）delete：刷新全部资源 */
  FlushType: string;
  /** 刷新任务提交时间 */
  CreateTime: string;
}

/** 预热任务详情 */
declare interface PushTask {
  /** 预热任务 ID */
  TaskId: string;
  /** 预热 URL */
  Url: string;
  /** 预热任务状态fail：预热失败done：预热成功process：预热中invalid：预热无效(源站返回4xx或5xx状态码) */
  Status: string;
  /** 预热进度百分比 */
  Percent: number;
  /** 预热任务提交时间 */
  CreateTime: string;
  /** 预热区域mainland：境内overseas：境外global：全球 */
  Area: string;
  /** 预热任务更新时间 */
  UpdateTime: string | null;
}

/** 七牛元对象存储回源鉴权配置 */
declare interface QnPrivateAccess {
  /** 开关 on/off */
  Switch: string;
  /** 访问 ID */
  AccessKey?: string | null;
  /** 密钥 */
  SecretKey?: string;
}

/** 组成CacheKey的一部分 */
declare interface QueryStringKey {
  /** on | off CacheKey是否由QueryString组成 */
  Switch: string | null;
  /** 是否重新排序 */
  Reorder?: string | null;
  /** includeAll | excludeAll | includeCustom | excludeCustom 使用/排除部分url参数 */
  Action?: string | null;
  /** 使用/排除的url参数数组，';' 分割 */
  Value?: string | null;
}

/** Quic配置项 */
declare interface Quic {
  /** 是否启动Quic配置 */
  Switch: string;
}

/** 刷新/预热 可用量及配额 */
declare interface Quota {
  /** 单次批量提交配额上限。 */
  Batch: number;
  /** 每日提交配额上限。 */
  Total: number;
  /** 每日剩余的可提交配额。 */
  Available: number;
  /** 配额的区域。 */
  Area: string;
}

/** 分片回源配置，默认为开启状态 */
declare interface RangeOriginPull {
  /** 分片回源配置开关on：开启off：关闭 */
  Switch: string;
  /** 分路径分片回源配置 */
  RangeRules?: RangeOriginPullRule[] | null;
}

/** 分路径分片回源配置 */
declare interface RangeOriginPullRule {
  /** 分片回源配置开关 */
  Switch: string;
  /** 规则类型：file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效 */
  RuleType: string | null;
  /** RuleType 对应类型下的匹配内容：file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/testpath 时填充绝对路径，如 /xxx/test.html */
  RulePaths: string[] | null;
}

/** 自定义回源302 follow请求host配置 */
declare interface RedirectConfig {
  /** 配置开关 */
  Switch: string;
  /** 主源站follow302请求时带的自定义的host头部 */
  FollowRedirectHost: string;
  /** 备份源站follow302请求时带的自定义的host头部 */
  FollowRedirectBackupHost?: string;
}

/** Referer 黑白名单配置，默认为关闭状态 */
declare interface Referer {
  /** referer 黑白名单配置开关on：开启off：关闭 */
  Switch: string;
  /** referer 黑白名单配置规则 */
  RefererRules?: RefererRule[] | null;
}

/** Referer 黑白名单配置规则，针对特定资源生效 */
declare interface RefererRule {
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效 */
  RuleType: string;
  /** RuleType 对应类型下的匹配内容：all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/test/path 时填充绝对路径，如 /xxx/test.html */
  RulePaths: string[];
  /** referer 配置类型whitelist：白名单blacklist：黑名单 */
  RefererType: string;
  /** referer 内容列表列表 */
  Referers: string[];
  /** 是否允许空 referer防盗链类型为白名单时，true表示允许空 referer，false表示不允许空 referer；防盗链类型为黑名单时，true表示拒绝空referer，false表示不拒绝空referer； */
  AllowEmpty: boolean;
}

/** 区域映射id和子区域id的关联信息。 */
declare interface RegionMapRelation {
  /** 区域ID。 */
  RegionId: number;
  /** 子区域ID列表 */
  SubRegionIdList: number[];
}

/** 远程鉴权规则配置，可以包含多种规则配置。RemoteAuthenticationRules和Server 互斥，只需要配置其中一个。若只配置Server ，RemoteAuthenticationRules中详细规则参数将采用默认参数；默认参数值见各个配置项中说明； */
declare interface RemoteAuthentication {
  /** 远程鉴权开关；on : 开启;off: 关闭； */
  Switch: string | null;
  /** 远程鉴权规则配置 */
  RemoteAuthenticationRules?: RemoteAuthenticationRule[] | null;
  /** 远程鉴权Server */
  Server?: string | null;
}

/** 远程鉴权规则。 */
declare interface RemoteAuthenticationRule {
  /** 远程鉴权Server。默认值:和上层配置的"Server"一致； */
  Server: string;
  /** 请求远程鉴权服务器的http方法；取值范围[get,post,head,all]; all: 表示"遵循终端用户请求方法"默认值: all */
  AuthMethod: string;
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定目录生效path：指定文件绝对路径生效默认值:all */
  RuleType: string;
  /** 对应类型下的匹配内容：all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/testpath 时填充绝对路径，如 /xxx/test.htmlindex 时填充 /默认值:* */
  RulePaths: string[];
  /** 请求远程鉴权服务器超时时间，单位毫秒；取值范围：[1,30 000]默认值:20000 */
  AuthTimeout: number;
  /** 请求远程鉴权服务器超时后执行拦截或者放行；RETURN_200: 超时后放行；RETURN_403:超时拦截；默认值:RETURN_200 */
  AuthTimeoutAction: string;
}

/** CDN报表数据 */
declare interface ReportData {
  /** 项目ID/域名ID。 */
  ResourceId: string;
  /** 项目名称/域名。 */
  Resource: string;
  /** 流量总和/带宽最大值，单位分别为bytes，bps。 */
  Value: number;
  /** 单个资源占总体百分比。 */
  Percentage: number;
  /** 计费流量总和/计费带宽最大值，单位分别为bytes，bps。 */
  BillingValue: number;
  /** 计费数值占总体百分比。 */
  BillingPercentage: number;
}

/** 自定义请求头配置，默认为关闭状态 */
declare interface RequestHeader {
  /** 自定义请求头配置开关on：开启off：关闭 */
  Switch: string;
  /** 自定义请求头配置规则 */
  HeaderRules?: HttpHeaderPathRule[] | null;
}

/** 计费数据明细 */
declare interface ResourceBillingData {
  /** 资源名称，根据查询条件不同分为以下几类：某一个具体域名：表示该域名明细数据multiDomains：表示多域名汇总明细数据某一个项目 ID：指定项目查询时，显示为项目 IDall：账号维度数据明细 */
  Resource: string;
  /** 计费数据详情 */
  BillingData: CdnData[];
}

/** 查询对象及其对应的访问明细数据 */
declare interface ResourceData {
  /** 资源名称，根据查询条件不同分为以下几类：单域名：指定单域名查询，表示该域名明细数据，当传入参数 detail 指定为 true 时，显示该域名（ detail 参数默认为 false ）多域名：指定多个域名查询，表示多域名汇总明细数据，显示 multiDomains项目 ID：指定项目查询时，表示该项目下的域名汇总明细数据，显示该项目 IDall：账号维度明细数据，即账号下所有域名的汇总明细数据 */
  Resource: string;
  /** 资源对应的数据明细 */
  CdnData: CdnData[];
}

/** 查询对象及其对应的回源明细数据 */
declare interface ResourceOriginData {
  /** 资源名称，根据查询条件不同分为以下几类：具体域名：表示该域名明细数据multiDomains：表示多域名汇总明细数据项目 ID：指定项目查询时，显示为项目 IDall：账号维度明细数据 */
  Resource: string;
  /** 回源数据详情 */
  OriginData: CdnData[];
}

/** 自定义响应头配置，默认为关闭状态 */
declare interface ResponseHeader {
  /** 自定义响应头开关on：开启off：关闭 */
  Switch: string;
  /** 自定义响应头规则 */
  HeaderRules?: HttpHeaderPathRule[] | null;
}

/** 源站头部缓存配置，默认为开启状态，缓存所有头部信息 */
declare interface ResponseHeaderCache {
  /** 源站头部缓存开关on：开启off：关闭 */
  Switch: string;
}

/** 是否回源站校验 */
declare interface Revalidate {
  /** on | off 是否总是回源校验 */
  Switch: string | null;
  /** 只在特定请求路径回源站校验 */
  Path?: string | null;
}

/** 缓存配置分路径版本。默认情况下所有文件缓存过期时间为 30 天 默认情况下静态加速类型的域名 .php;.jsp;.asp;.aspx 不缓存 */
declare interface RuleCache {
  /** CacheType 对应类型下的匹配内容：all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/testpath 时填充绝对路径，如 /xxx/test.htmlindex 时填充 / */
  RulePaths: string[] | null;
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效index：首页 */
  RuleType: string | null;
  /** 缓存配置。 */
  CacheConfig: RuleCacheConfig | null;
}

/** 路径缓存缓存配置（三种缓存模式中选取一种） */
declare interface RuleCacheConfig {
  /** 缓存配置 */
  Cache: CacheConfigCache | null;
  /** 不缓存配置 */
  NoCache: CacheConfigNoCache | null;
  /** 遵循源站配置 */
  FollowOrigin: CacheConfigFollowOrigin | null;
}

/** 规则引擎配置 */
declare interface RuleEngine {
  /** 规则引擎配置开关on：开启off：关闭 */
  Switch: string;
  /** 规则 */
  Content?: string | null;
}

/** 路径保留参数配置 */
declare interface RuleQueryString {
  /** on | off CacheKey是否由QueryString组成 */
  Switch: string | null;
  /** includeCustom 包含部分url参数 */
  Action: string | null;
  /** 使用/排除的url参数数组，';' 分割 */
  Value: string | null;
}

/** SCDN访问控制 */
declare interface ScdnAclConfig {
  /** 是否开启，on | off */
  Switch: string;
  /** 新版本请使用AdvancedScriptData */
  ScriptData?: ScdnAclGroup[] | null;
  /** 错误页面配置 */
  ErrorPage?: ScdnErrorPage | null;
  /** Acl规则组，switch为on时必填 */
  AdvancedScriptData?: AdvancedScdnAclGroup[] | null;
}

/** SCDN精准访问控制配置 */
declare interface ScdnAclGroup {
  /** 规则名称 */
  RuleName: string;
  /** 具体配置 */
  Configure: ScdnAclRule[];
  /** 执行动作，intercept|redirect */
  Result: string;
  /** 规则是否生效，active|inactive */
  Status?: string;
  /** 错误页面配置 */
  ErrorPage?: ScdnErrorPage | null;
}

/** 精准访问控制匹配规则 */
declare interface ScdnAclRule {
  /** 匹配关键字 */
  MatchKey: string;
  /** 逻辑操作符，取值如下 */
  LogiOperator: string;
  /** 匹配值。 */
  MatchValue: string;
}

/** bot配置类型 */
declare interface ScdnBotConfig {
  /** on|off */
  Switch: string;
  /** Bot cookie策略 */
  BotCookie?: BotCookie[] | null;
  /** Bot Js策略 */
  BotJavaScript?: BotJavaScript[] | null;
}

/** scdn 的自定义 cc 规则 */
declare interface ScdnCCRules {
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效index：首页 */
  RuleType: string;
  /** 规则值 */
  RuleValue: string[];
  /** 规则限频 */
  Qps?: number;
  /** 探测时长 */
  DetectionTime?: number | null;
  /** 限频阈值 */
  FrequencyLimit?: number | null;
  /** IP 惩罚开关，可选on|off */
  PunishmentSwitch?: string | null;
  /** IP 惩罚时长 */
  PunishmentTime?: number | null;
  /** 执行动作，intercept|redirect */
  Action?: string | null;
  /** 动作为 redirect 时，重定向的url */
  RedirectUrl?: string | null;
}

/** cc的配置类型 */
declare interface ScdnConfig {
  /** on | off */
  Switch: string;
  /** 自定义 cc 防护规则 */
  Rules?: ScdnCCRules[] | null;
  /** 增强自定义 cc 防护规则 */
  AdvancedRules?: AdvancedCCRules[] | null;
  /** 增强自定义 cc 防护规则， 全局 */
  GlobalAdvancedRules?: AdvancedCCRules[] | null;
}

/** ddos配置类型 */
declare interface ScdnDdosConfig {
  /** on|off */
  Switch: string;
}

/** 聚合了SCDN域名的基本信息 */
declare interface ScdnDomain {
  /** 域名 */
  Domain: string;
  /** 当前状态，取值online | offline | process */
  Status: string;
  /** Waf 状态默认为‘/’，取值 close | intercept | observe */
  Waf: string;
  /** Acl 状态默认为‘/’，取值 close | open */
  Acl: string;
  /** CC 状态默认为‘/’，取值 close | open */
  CC: string;
  /** Ddos 状态默认为‘/’，取值 close | open */
  Ddos: string;
  /** 项目ID */
  ProjectId: string;
  /** Acl 规则数 */
  AclRuleNumbers: number;
  /** Bot 状态默认为‘/’，取值 close | open */
  Bot: string;
  /** 域名加速区域，取值global | mainland | overseas */
  Area: string | null;
  /** waf规则等级，可取100|200|300 */
  WafLevel: number | null;
}

/** acl的错误页面 */
declare interface ScdnErrorPage {
  /** 状态码执行动作为：intercept 默认传值 403执行动作为：redirect 默认传值 301 */
  RedirectCode: number;
  /** 重定向url */
  RedirectUrl: string;
}

/** SCDN 事件日志查询条件 */
declare interface ScdnEventLogConditions {
  /** 匹配关键字，ip, attack_location */
  Key: string;
  /** 逻辑操作符，取值 exclude, include */
  Operator: string;
  /** 匹配值，允许使用通配符(*)查询，匹配零个、单个、多个字符，例如 1.2.* */
  Value: string;
}

/** scdn的IP白名单策略 */
declare interface ScdnIpStrategy {
  /** 域名|global表示全部域名 */
  Domain: string;
  /** 策略ID */
  StrategyId: string;
  /** IP白名单列表 */
  IpList: string[];
  /** 更新时间 */
  UpdateTime: string;
  /** 备注 */
  Remark: string;
  /** 规则类型 */
  RuleType: string | null;
  /** 规则值 */
  RuleValue: string[] | null;
}

/** IP策略查询过滤参数 */
declare interface ScdnIpStrategyFilter {
  /** 过滤字段名，支持domain, ip */
  Name: string;
  /** 过滤字段值 */
  Value: string[];
  /** 是否启用模糊查询，仅支持过滤字段名为domain。模糊查询时，Value长度最大为1 */
  Fuzzy?: boolean;
}

/** SCDN日志事件详细信息 */
declare interface ScdnLogTaskDetail {
  /** scdn域名 */
  Domain: string;
  /** 防护类型 */
  Mode: string;
  /** 查询任务开始时间 */
  StartTime: string;
  /** 查询任务结束时间 */
  EndTime: string;
  /** 任务创建时间 */
  CreateTime: string;
  /** 日志包下载链接成功返回下载链接，其他情况返回'-' */
  DownloadUrl: string | null;
  /** 任务状态created->任务已经创建processing->任务正在执行done->任务执行成功failed->任务执行失败no-log->没有日志产生 */
  Status: string;
  /** 日志任务唯一id */
  TaskID: string;
  /** 攻击类型, 可以为"all"AttackType映射如下: other = '未知类型' malicious_scan = "恶意扫描" sql_inject = "SQL注入攻击" xss = "XSS攻击" cmd_inject = "命令注入攻击" ldap_inject = "LDAP注入攻击" ssi_inject = "SSI注入攻击" xml_inject = "XML注入攻击" web_service = "WEB服务漏洞攻击" web_app = "WEB应用漏洞攻击" path_traversal = "路径跨越攻击" illegal_access_core_file = "核心文件非法访问" file_upload = "文件上传攻击" trojan_horse = "木马后门攻击" csrf = "CSRF攻击" custom_policy = "自定义策略" ai_engine= 'AI引擎检出' malicious_file_upload= '恶意文件上传' */
  AttackType: string;
  /** 防御模式,可以为"all"DefenceMode映射如下： observe = '观察模式' intercept = '防御模式' */
  DefenceMode: string;
  /** 查询条件 */
  Conditions: ScdnEventLogConditions[] | null;
  /** mainland或overseas */
  Area: string | null;
}

/** Scdn的七层限频配置 */
declare interface ScdnSevenLayerRules {
  /** 区分大小写 */
  CaseSensitive: boolean;
  /** 规则类型：protocol：协议，填写 HTTP/HTTPSmethod：请求方法，支持 HEAD、GET、POST、PUT、OPTIONS、TRACE、DELETE、PATCH、CONNECTall：域名 匹配内容固定为"*",不可编辑修改ip：IP 填写 CIDR 表达式directory：路径，以/开头，支持目录和具体路径，128字符以内index：首页 默认固定值：/;/index.html,不可编辑修改path：文件全路径，资源地址，如/acb/test.png，支持通配符，如/abc/*.jpgfile：文件扩展名，填写具体扩展名，如 jpg;png;cssparam：请求参数，填写具体 value 值，512字符以内referer：Referer，填写具体 value 值，512字符以内cookie：Cookie，填写具体 value 值，512字符以内user-agent：User-Agent，填写具体 value 值，512字符以内head：自定义请求头，填写具体value值，512字符以内；内容为空或者不存在时，无匹配内容输入框，填写匹配参数即可 */
  RuleType: string;
  /** 逻辑操作符，取值 ：不包含：exclude, 包含：include, 不等于：notequal, 等于：equal, 前缀匹配：matching内容为空或不存在：null */
  LogicOperator: string;
  /** 规则值 */
  RuleValue?: string[] | null;
  /** 匹配参数，只有请求参数、Cookie、自定义请求头 有值 */
  RuleParam?: string | null;
}

/** SCDN攻击数据Top展示 */
declare interface ScdnTopData {
  /** 时间 */
  Time: string;
  /** 数值 */
  Value: number;
  /** 运营商 */
  Isp: string;
  /** IP地址 */
  Ip: string;
  /** 区域 */
  District: string;
}

/** SCDN攻击数据Top展示 */
declare interface ScdnTopDomainData {
  /** 域名 */
  Domain: string;
  /** 请求量 */
  Value: number;
  /** 百分比 */
  Percent: number;
}

/** SCDN攻击数据Top URL展示 */
declare interface ScdnTopUrlData {
  /** Top数据的URL */
  Url: string;
  /** 数值 */
  Value: number;
  /** 时间 */
  Time: string;
  /** 域名 */
  Domain: string | null;
}

/** Scdn饼图数据，waf仅有 */
declare interface ScdnTypeData {
  /** 攻击类型 */
  AttackType: string;
  /** 攻击值 */
  Value: number;
}

/** waf配置类型 */
declare interface ScdnWafConfig {
  /** on|off */
  Switch: string;
  /** intercept|observe，默认intercept */
  Mode?: string | null;
  /** 重定向的错误页面 */
  ErrorPage?: ScdnErrorPage | null;
  /** webshell拦截开关，on|off，默认off */
  WebShellSwitch?: string | null;
  /** 类型拦截规则 */
  Rules?: ScdnWafRule[] | null;
  /** waf规则等级，可取100|200|300 */
  Level?: number | null;
  /** waf子规则开关 */
  SubRuleSwitch?: WafSubRuleStatus[] | null;
}

/** Waf 规则信息 */
declare interface ScdnWafRule {
  /** 攻击类型 */
  AttackType: string;
  /** 防护措施，observe */
  Operate: string;
}

/** 作为CacheKey的一部分 */
declare interface SchemeKey {
  /** on | off 是否使用scheme作为cache key的一部分 */
  Switch: string | null;
}

/** scdn相关的配置 */
declare interface SecurityConfig {
  /** on|off */
  Switch: string;
}

/** SEO 搜索引擎优化配置，默认为关闭状态 */
declare interface Seo {
  /** SEO 配置开关on：开启off：关闭 */
  Switch: string | null;
}

/** https 加速服务端证书配置：+ 支持使用托管至 SSL 证书管理的证书进行部署+ 支持上传 PEM 格式的证书进行部署 */
declare interface ServerCert {
  /** 服务器证书 ID 在 SSL 证书管理进行证书托管时自动生成 */
  CertId?: string | null;
  /** 服务器证书名称在 SSL 证书管理进行证书托管时自动生成 */
  CertName?: string | null;
  /** 服务器证书信息上传自有证书时必填，需要包含完整的证书链 */
  Certificate?: string | null;
  /** 服务器密钥信息上传自有证书时必填 */
  PrivateKey?: string | null;
  /** 证书过期时间作为入参配置时无需填充 */
  ExpireTime?: string | null;
  /** 证书颁发时间作为入参配置时无需填充 */
  DeployTime?: string | null;
  /** 证书备注信息 */
  Message?: string | null;
  /** 证书来源 */
  From?: string | null;
}

/** ShareCname配置 */
declare interface ShareCname {
  /** ShareCname 配置开关, 开关为off时，域名使用默认CNAME，若需要使用共享CNAME，将开关置为on.* ShareCname 为内测功能,如需使用,请联系腾讯云工程师开白. */
  Switch: string;
  /** 设置共享CNAME. */
  Cname?: string | null;
}

/** 缓存配置基础版本默认情况下所有文件缓存过期时间为 30 天默认情况下静态加速类型的域名 .php;.jsp;.asp;.aspx 不缓存注意：该版本不支持设置源站未返回 max-age 情况下的缓存过期规则设置 */
declare interface SimpleCache {
  /** 缓存过期时间规则 */
  CacheRules: SimpleCacheRule[] | null;
  /** 遵循源站 Cache-Control: max-age 配置on：开启off：关闭开启后，未能匹配 CacheRules 规则的资源将根据源站返回的 max-age 值进行节点缓存；匹配了 CacheRules 规则的资源将按照 CacheRules 中设置的缓存过期时间在节点进行缓存与 CompareMaxAge 冲突，不能同时开启 */
  FollowOrigin: string | null;
  /** 强制缓存on：开启off：关闭默认为关闭状态，开启后，源站返回的 no-store、no-cache 资源，也将按照 CacheRules 规则进行缓存 */
  IgnoreCacheControl: string | null;
  /** 忽略源站的Set-Cookie头部on：开启off：关闭默认为关闭状态 */
  IgnoreSetCookie: string | null;
  /** 高级缓存过期配置，开启时会对比源站返回的 max-age 值与 CacheRules 中设置的缓存过期时间，取最小值在节点进行缓存on：开启off：关闭默认为关闭状态 */
  CompareMaxAge: string | null;
  /** 总是回源站校验 */
  Revalidate?: Revalidate | null;
}

/** 缓存过期规则配置 */
declare interface SimpleCacheRule {
  /** 规则类型：all：所有文件生效file：指定文件后缀生效directory：指定路径生效path：指定绝对路径生效index：首页 */
  CacheType: string;
  /** CacheType 对应类型下的匹配内容：all 时填充 *file 时填充后缀名，如 jpg、txtdirectory 时填充路径，如 /xxx/testpath 时填充绝对路径，如 /xxx/test.htmlindex 时填充 / */
  CacheContents: string[];
  /** 缓存过期时间设置单位为秒，最大可设置为 365 天 */
  CacheTime: number;
}

/** 查询结果排序条件 */
declare interface Sort {
  /** 排序字段，当前支持：createTime，域名创建时间certExpireTime，证书过期时间默认createTime。 */
  Key?: string;
  /** asc/desc，默认desc。 */
  Sequence?: string;
}

/** 域名国内海外分地区特殊配置。 */
declare interface SpecificConfig {
  /** 国内特殊配置。 */
  Mainland?: MainlandConfig | null;
  /** 海外特殊配置。 */
  Overseas?: OverseaConfig | null;
}

/** 累计用量封顶的配置 */
declare interface StatisticItem {
  /** 封顶类型，累计用量total，瞬时用量moment */
  Type?: string | null;
  /** 自动解封时间 */
  UnBlockTime?: number | null;
  /** 带宽、流量阈值 */
  BpsThreshold?: number | null;
  /** 关闭方式 返回404:RETURN_404, dns回源：RESOLVE_DNS_TO_ORIGIN */
  CounterMeasure?: string | null;
  /** 触发提醒阈值百分比 */
  AlertPercentage?: number | null;
  /** 提醒开关 on/off */
  AlertSwitch?: string | null;
  /** 指标类型，流量flux或带宽bandwidth */
  Metric?: string | null;
  /** 检测周期，单位分钟，60或1440 */
  Cycle?: number | null;
  /** 是否开启该选项，on/off */
  Switch?: string | null;
}

/** 状态码缓存过期配置，默认情况下会对 404 状态码缓存 10 秒 */
declare interface StatusCodeCache {
  /** 状态码缓存过期配置开关on：开启off：关闭 */
  Switch: string | null;
  /** 状态码缓存过期规则明细 */
  CacheRules?: StatusCodeCacheRule[] | null;
}

/** 状态码缓存过期时间规则配置 */
declare interface StatusCodeCacheRule {
  /** http 状态码支持 403、404 状态码 */
  StatusCode: string;
  /** 状态码缓存过期时间，单位秒 */
  CacheTime: number;
}

/** 明细数据的汇总值，各指标根据其特性不同拥有不同汇总方式 */
declare interface SummarizedData {
  /** 汇总方式，存在以下几种：sum：累加求和max：最大值，带宽模式下，采用 5 分钟粒度汇总数据，计算峰值带宽avg：平均值 */
  Name: string;
  /** 汇总后的数据值 */
  Value: number;
}

/** 域名标签配置 */
declare interface Tag {
  /** 标签键 */
  TagKey: string | null;
  /** 标签值 */
  TagValue: string | null;
}

/** 时间戳与其对应的数值 */
declare interface TimestampData {
  /** 数据统计时间点，采用向前汇总模式以 5 分钟粒度为例，13:35:00 时间点代表的统计数据区间为 13:35:00 至 13:39:59 */
  Time: string;
  /** 数据值 */
  Value: number;
}

/** 排序类型数据结构 */
declare interface TopData {
  /** 资源名称，根据查询条件不同分为以下几类：具体域名：表示该域名明细数据multiDomains：表示多域名汇总明细数据项目 ID：指定项目查询时，显示为项目 IDall：账号维度明细数据 */
  Resource: string;
  /** 排序结果详情 */
  DetailData: TopDetailData[];
}

/** 排序类型数据结构 */
declare interface TopDataMore {
  /** 资源名称，根据查询条件不同分为以下几类： */
  Resource: string;
  /** 排序结果详情 */
  DetailData: TopDetailDataMore[];
}

/** 排序类型的数据结构 */
declare interface TopDetailData {
  /** 数据类型的名称 */
  Name: string;
  /** 数据值 */
  Value: number;
}

/** 排序类型的数据结构，同时附带上该项的在总值的占比 */
declare interface TopDetailDataMore {
  /** 数据类型的名称 */
  Name: string;
  /** 数据值 */
  Value: number;
  /** 数据值在总值中的百分比 */
  Percent: number | null;
}

/** CLS主题信息 */
declare interface TopicInfo {
  /** 主题ID */
  TopicId: string;
  /** 主题名字 */
  TopicName: string;
  /** 是否启用投递 */
  Enabled: number;
  /** 创建时间 */
  CreateTime: string | null;
  /** 归属于cdn或ecdn */
  Channel: string | null;
  /** cls侧是否已经被删除 */
  Deleted: string | null;
}

/** 图片优化-TpgAdapter配置 */
declare interface TpgAdapter {
  /** 开关，"on/off" */
  Switch?: string | null;
}

/** CDN加速流量包。 */
declare interface TrafficPackage {
  /** 流量包 Id */
  Id: number;
  /** 流量包类型 */
  Type: string;
  /** 流量包大小（单位为 Byte） */
  Bytes: number;
  /** 已消耗流量（单位为 Byte） */
  BytesUsed: number;
  /** 流量包状态enabled：已启用expired：已过期disabled：未启用 */
  Status: string;
  /** 流量包发放时间 */
  CreateTime: string;
  /** 流量包生效时间 */
  EnableTime: string;
  /** 流量包过期时间 */
  ExpireTime: string;
  /** 流量包是否续订 */
  ContractExtension: boolean;
  /** 流量包是否自动续订 */
  AutoExtension: boolean;
  /** 流量包来源 */
  Channel: string;
  /** 流量包生效区域，mainland或overseas */
  Area: string;
  /** 流量包生命周期月数 */
  LifeTimeMonth: number;
  /** 流量包是否支持续订 */
  ExtensionAvailable: boolean;
  /** 流量包是否支持退费 */
  RefundAvailable: boolean;
  /** 流量包生效区域0：中国大陆1：亚太一区2：亚太二区3：亚太三区4：中东5：北美6：欧洲7：南美8：非洲 */
  Region: number | null;
  /** 流量包类型id */
  ConfigId: number | null;
  /** 流量包当前续订模式，0 未续订、1到期续订、2用完续订、3到期或用完续订 */
  ExtensionMode: number | null;
  /** 流量包实际生效时间 */
  TrueEnableTime: string | null;
  /** 流量包实际过期时间 */
  TrueExpireTime: string | null;
}

/** 封禁url的详细信息 */
declare interface UrlRecord {
  /** 状态(disable表示封禁，enable表示解封) */
  Status: string | null;
  /** 对应的url */
  RealUrl: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
}

/** 访问URL重写配置 */
declare interface UrlRedirect {
  /** 访问URL重写配置开关on：开启off：关闭 */
  Switch: string;
  /** 访问URL重写规则，当Switch为on时必填，规则数量最大为10个。 */
  PathRules?: UrlRedirectRule[] | null;
}

/** Url重定向规则配置 */
declare interface UrlRedirectRule {
  /** 重定向状态码，301 | 302 */
  RedirectStatusCode: number;
  /** 待匹配的Url，仅支持Url路径，不支持参数。默认完全匹配，支持通配符 *，最多支持5个通配符，最大长度1024字符。 */
  Pattern: string;
  /** 目标URL，必须以“/”开头，不包含参数部分。最大长度1024字符。可使用$1, $2, $3, $4, $5分别捕获匹配路径中的通配符号，最多支持10个捕获值。 */
  RedirectUrl: string;
  /** 目标host，必须以http://或https://开头，并填写标准格式域名，如果不填写，默认为http:// + 当前域名 */
  RedirectHost?: string | null;
  /** 指定是全路径配置还是任意匹配 */
  FullMatch?: boolean | null;
}

/** UserAgent黑白名单配置 */
declare interface UserAgentFilter {
  /** 开关，on或off */
  Switch: string | null;
  /** UA黑白名单生效规则列表 */
  FilterRules?: UserAgentFilterRule[] | null;
}

/** UserAgent黑白名单规则配置 */
declare interface UserAgentFilterRule {
  /** 访问路径生效类型all: 所有访问路径生效file: 根据文件后缀类型生效directory: 根据目录生效path: 根据完整访问路径生效 */
  RuleType: string | null;
  /** 访问路径生效内容 */
  RulePaths: string[] | null;
  /** UserAgent列表 */
  UserAgents: string[] | null;
  /** 黑名单或白名单，blacklist或whitelist */
  FilterType: string | null;
}

/** 视频拖拽配置，默认为关闭状态 */
declare interface VideoSeek {
  /** 视频拖拽开关on：开启off：关闭 */
  Switch: string;
}

/** 违规 URL 详情 */
declare interface ViolationUrl {
  /** ID */
  Id: number;
  /** 违规资源原始访问 URL */
  RealUrl: string;
  /** 快照路径，用于控制台展示违规内容快照 */
  DownloadUrl: string;
  /** 违规资源当前状态forbid：已封禁release：已解封delay ： 延迟处理reject ：申诉驳回，状态仍为封禁态complain：申诉进行中 */
  UrlStatus: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
}

/** Waf子规则开关状态 */
declare interface WafSubRuleStatus {
  /** 子规则状态，on|off */
  Switch: string;
  /** 规则id列表 */
  SubIds: number[];
}

/** WebSocket配置 */
declare interface WebSocket {
  /** WebSocket 超时配置开关, 开关为off时，平台仍支持WebSocket连接，此时超时时间默认为15秒，若需要调整超时时间，将开关置为on.* WebSocket 为ECDN产品功能，如需使用请通过ECDN域名配置. */
  Switch: string;
  /** 设置超时时间，单位为秒，最大超时时间300秒。 */
  Timeout?: number | null;
}

/** 图片优化-WebpAdapter配置 */
declare interface WebpAdapter {
  /** 开关，"on/off" */
  Switch?: string | null;
}

declare interface AddCLSTopicDomainsRequest {
  /** 日志集ID */
  LogsetId: string;
  /** 日志主题ID */
  TopicId: string;
  /** 域名区域配置 */
  DomainAreaConfigs: DomainAreaConfig[];
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
}

declare interface AddCLSTopicDomainsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCdnDomainRequest {
  /** 域名 */
  Domain: string;
  /** 加速域名业务类型web：网页小文件download：下载大文件media：音视频点播hybrid: 动静加速dynamic: 动态加速 */
  ServiceType: string;
  /** 源站配置 */
  Origin: Origin;
  /** 项目 ID，默认为 0，代表【默认项目】 */
  ProjectId?: number;
  /** IP 黑白名单配置 */
  IpFilter?: IpFilter;
  /** IP 限频配置 */
  IpFreqLimit?: IpFreqLimit;
  /** 状态码缓存配置 */
  StatusCodeCache?: StatusCodeCache;
  /** 智能压缩配置 */
  Compression?: Compression;
  /** 带宽封顶配置 */
  BandwidthAlert?: BandwidthAlert;
  /** Range 回源配置 */
  RangeOriginPull?: RangeOriginPull;
  /** 301/302 回源跟随配置。 */
  FollowRedirect?: FollowRedirect;
  /** 错误码重定向配置（功能灰度中，尚未全量） */
  ErrorPage?: ErrorPage;
  /** 请求头部配置 */
  RequestHeader?: RequestHeader;
  /** 响应头部配置 */
  ResponseHeader?: ResponseHeader;
  /** 下载速度配置 */
  DownstreamCapping?: DownstreamCapping;
  /** 节点缓存键配置 */
  CacheKey?: CacheKey;
  /** 头部缓存配置 */
  ResponseHeaderCache?: ResponseHeaderCache;
  /** 视频拖拽配置 */
  VideoSeek?: VideoSeek;
  /** 缓存过期时间配置 */
  Cache?: Cache;
  /** 跨国链路优化配置 */
  OriginPullOptimization?: OriginPullOptimization;
  /** Https 加速配置 */
  Https?: Https;
  /** 时间戳防盗链配置 */
  Authentication?: Authentication;
  /** SEO 优化配置 */
  Seo?: Seo;
  /** 访问协议强制跳转配置 */
  ForceRedirect?: ForceRedirect;
  /** Referer 防盗链配置 */
  Referer?: Referer;
  /** 浏览器缓存配置（功能灰度中，尚未全量） */
  MaxAge?: MaxAge;
  /** Ipv6 配置（功能灰度中，尚未全量） */
  Ipv6?: Ipv6;
  /** 地域属性特殊配置适用于域名境内加速、境外加速配置不一致场景 */
  SpecificConfig?: SpecificConfig;
  /** 域名加速区域mainland：中国境内加速overseas：中国境外加速global：全球加速使用中国境外加速、全球加速时，需要先开通中国境外加速服务 */
  Area?: string;
  /** 回源超时配置 */
  OriginPullTimeout?: OriginPullTimeout;
  /** 标签配置 */
  Tag?: Tag[];
  /** Ipv6 访问配置 */
  Ipv6Access?: Ipv6Access;
  /** 离线缓存 */
  OfflineCache?: OfflineCache;
  /** Quic访问（收费服务，详见计费说明和产品文档） */
  Quic?: Quic;
  /** 回源S3私有鉴权 */
  AwsPrivateAccess?: AwsPrivateAccess;
  /** 回源OSS私有鉴权 */
  OssPrivateAccess?: OssPrivateAccess;
  /** 华为云对象存储回源鉴权 */
  HwPrivateAccess?: HwPrivateAccess;
  /** 七牛云对象存储回源鉴权 */
  QnPrivateAccess?: QnPrivateAccess;
}

declare interface AddCdnDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClsLogTopicRequest {
  /** 日志主题名称 */
  TopicName: string;
  /** 日志集ID */
  LogsetId: string;
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
  /** 域名区域信息 */
  DomainAreaConfigs?: DomainAreaConfig[];
}

declare interface CreateClsLogTopicResponse {
  /** 主题ID */
  TopicId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDiagnoseUrlRequest {
  /** 需诊断的url，形如：http://www.test.com/test.txt。 */
  Url: string;
  /** 请求源带协议头，形如：https://console.cloud.tencent.com */
  Origin?: string;
}

declare interface CreateDiagnoseUrlResponse {
  /** 系统生成的诊断链接，一个诊断链接最多可访问10次，有效期为24h。 */
  DiagnoseLink: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEdgePackTaskRequest {
  /** apk 所在的 cos 存储桶, 如 edgepack-xxxxxxxx */
  CosBucket: string;
  /** apk 源文件的存储路径, 如 /apk/xxxx.apk */
  CosUriFrom: string;
  /** BlockID 的值, WALLE为1903654775(0x71777777)，VasDolly为2282837503(0x881155ff),传0或不传时默认为 WALLE 方案 */
  BlockID?: number;
  /** 拓展之后的 apk 目标存储路径,如 /out/xxxx.apk */
  CosUriTo?: string;
}

declare interface CreateEdgePackTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScdnDomainRequest {
  /** 域名 */
  Domain: string;
  /** Web 攻击防护（WAF）配置 */
  Waf?: ScdnWafConfig;
  /** 自定义防护策略配置 */
  Acl?: ScdnAclConfig;
  /** CC 防护配置，目前 CC 防护默认开启 */
  CC?: ScdnConfig;
  /** DDOS 防护配置，目前 DDoS 防护默认开启 */
  Ddos?: ScdnDdosConfig;
  /** BOT 防护配置 */
  Bot?: ScdnBotConfig;
}

declare interface CreateScdnDomainResponse {
  /** 创建结果，Success表示成功 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScdnFailedLogTaskRequest {
  /** 重试失败任务的taskID */
  TaskId: string;
  /** 地域：mainland或overseas */
  Area?: string;
}

declare interface CreateScdnFailedLogTaskResponse {
  /** 创建结果, "0" -> 创建成功 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScdnLogTaskRequest {
  /** 防护类型Mode 映射如下： waf = "Web攻击" cc = "CC攻击" bot = "Bot攻击" */
  Mode: string;
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间 */
  EndTime: string;
  /** 指定域名查询, 不填默认查询全部域名 */
  Domain?: string;
  /** 指定攻击类型, 不填默认查询全部攻击类型AttackType 映射如下: other = '未知类型' malicious_scan = "恶意扫描" sql_inject = "SQL注入攻击" xss = "XSS攻击" cmd_inject = "命令注入攻击" ldap_inject = "LDAP注入攻击" ssi_inject = "SSI注入攻击" xml_inject = "XML注入攻击" web_service = "WEB服务漏洞攻击" web_app = "WEB应用漏洞攻击" path_traversal = "路径跨越攻击" illegal_access_core_file = "核心文件非法访问" trojan_horse = "木马后门攻击" csrf = "CSRF攻击" malicious_file_upload= '恶意文件上传' js = "JS主动探测" cookie = "Cookie指纹" */
  AttackType?: string;
  /** 指定执行动作, 不填默认查询全部执行动作DefenceMode 映射如下： observe = '观察模式' intercept = '拦截模式' captcha = "验证码" redirect = "重定向" */
  DefenceMode?: string;
  /** 不填为全部ip */
  Ip?: string;
  /** 指定域名查询, 与 Domain 参数同时有值时使用 Domains 参数，不填默认查询全部域名，指定域名查询时最多支持同时选择 5 个域名查询 */
  Domains?: string[];
  /** 指定攻击类型查询, 与 AttackType 参数同时有值时使用 AttackTypes 参数，不填默认查询全部攻击类型 */
  AttackTypes?: string[];
  /** 查询条件 */
  Conditions?: ScdnEventLogConditions[];
  /** 来源产品 cdn ecdn */
  Source?: string;
  /** 地域：mainland 或 overseas */
  Area?: string;
}

declare interface CreateScdnLogTaskResponse {
  /** 创建结果, "0" -> 创建成功 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVerifyRecordRequest {
  /** 要取回的域名 */
  Domain: string;
}

declare interface CreateVerifyRecordResponse {
  /** 子解析 */
  SubDomain: string;
  /** 解析值 */
  Record: string;
  /** 解析类型 */
  RecordType: string;
  /** 文件验证 URL 指引 */
  FileVerifyUrl: string | null;
  /** 文件校验域名列表 */
  FileVerifyDomains: string[] | null;
  /** 文件校验文件名 */
  FileVerifyName: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCdnDomainRequest {
  /** 域名域名状态需要为【已停用】 */
  Domain: string;
}

declare interface DeleteCdnDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClsLogTopicRequest {
  /** 日志主题ID */
  TopicId: string;
  /** 日志集ID */
  LogsetId: string;
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
}

declare interface DeleteClsLogTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteScdnDomainRequest {
  /** 域名 */
  Domain: string;
}

declare interface DeleteScdnDomainResponse {
  /** 创建结果，Success表示成功 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBillingDataRequest {
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间根据指定时间粒度参数不同，会进行向前取整，如指定起始时间为 2018-09-04 10:40:00 按小时粒度查询，返回的第一个数据对应时间点为 2018-09-04 10:00:00起始时间与结束时间间隔小于等于 90 天 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间根据指定时间粒度参数不同，会进行向前取整，如指定结束时间为 2018-09-04 10:40:00 按小时粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:00:00起始时间与结束时间间隔小于等于 90 天 */
  EndTime: string;
  /** 时间粒度，支持模式如下：min：1 分钟粒度，查询区间需要小于等于 24 小时5min：5 分钟粒度，查询区间需要小于等于 31 天(计费数据粒度)hour：1 小时粒度，查询区间需要小于等于 31 天内day：天粒度，查询区间需要大于 31 天Area 字段为 overseas 时暂不支持1分钟粒度数据查询 */
  Interval?: string;
  /** 指定域名查询计费数据 */
  Domain?: string;
  /** 指定项目 ID 查询，[前往查看项目 ID](https://console.cloud.tencent.com/project)若 Domain 参数填充了具体域名信息，则返回该域名的计费数据，而非指定项目计费数据 */
  Project?: number;
  /** 指定加速区域查询计费数据：mainland：中国境内overseas：中国境外不填充时，默认为 mainland */
  Area?: string;
  /** Area 为 overseas 时，指定国家/地区查询省份、国家/地区编码可以查看 [省份编码映射](https://cloud.tencent.com/document/product/228/6316)不填充时，查询所有国家/地区 */
  District?: number;
  /** 计费统计类型flux：计费流量bandwidth：计费带宽默认为 bandwidth */
  Metric?: string;
  /** 指定查询的产品数据，可选为cdn或者ecdn，默认为cdn */
  Product?: string;
  /** 指定查询时间的时区，默认UTC+08:00 */
  TimeZone?: string;
}

declare interface DescribeBillingDataResponse {
  /** 时间粒度，根据查询时传递参数指定：min：1 分钟粒度5min：5 分钟粒度hour：1 小时粒度day：天粒度 */
  Interval: string;
  /** 数据明细 */
  Data: ResourceBillingData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcDataRequest {
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间 */
  EndTime: string;
  /** 时间粒度，支持以下几种模式：min：1 分钟粒度，指定查询区间 24 小时内（含 24 小时），可返回 1 分钟粒度明细数据5min：5 分钟粒度，指定查询区间 31 天内（含 31 天），可返回 5 分钟粒度明细数据hour：1 小时粒度，指定查询区间 31 天内（含 31 天），可返回 1 小时粒度明细数据day：天粒度，指定查询区间大于 31 天，可返回天粒度明细数据 */
  Interval?: string;
  /** 指定域名查询，为空时，表示查询账号级别数据 */
  Domain?: string;
  /** 执行动作，取值为：intercept/redirect/observe分别表示：拦截/重定向/观察为空时，表示所有执行动作 */
  ActionName?: string;
  /** 指定域名列表查询，为空时，表示查询账号级别数据 */
  Domains?: string[];
  /** cdn表示CDN数据，默认值ecdn表示ECDN数据 */
  Source?: string;
  /** 地域：mainland或overseas，表示国内或海外，不填写默认表示国内 */
  Area?: string;
}

declare interface DescribeCcDataResponse {
  /** 指定执行动作的请求数数据，如果指定类型为空，表示所有类型的请求总数 */
  Data: TimestampData[];
  /** 粒度 */
  Interval: string;
  /** 执行动作为拦截类型QPS统计数据 */
  InterceptQpsData: TimestampData[] | null;
  /** 执行动作为重定向类型QPS统计数据 */
  RedirectQpsData: TimestampData[] | null;
  /** 执行动作为观察类型QPS统计数据 */
  ObserveQpsData: TimestampData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCdnDataRequest {
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的第一个数据对应时间点为 2018-09-04 10:00:00起始时间与结束时间间隔小于等于 90 天 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:00:00起始时间与结束时间间隔小于等于 90 天 */
  EndTime: string;
  /** 指定查询指标，支持的类型有：flux：流量，单位为 bytefluxIn：上行流量，单位为 byte，该指标仅ecdn支持查询fluxOut：下行流量，单位为 byte，该指标仅ecdn支持查询bandwidth：带宽，单位为 bpsbandwidthIn：上行带宽，单位为 bps，该指标仅ecdn支持查询bandwidthOut：下行带宽，单位为 bps，该指标仅ecdn支持查询request：请求数，单位为 次hitRequest：命中请求数，单位为 次requestHitRate：请求命中率，单位为 %，保留小数点后两位hitFlux：命中流量，单位为bytefluxHitRate：流量命中率，单位为 %，保留小数点后两位statusCode：状态码，返回 2xx、3xx、4xx、5xx 汇总数据，单位为 个2xx：返回 2xx 状态码汇总及各 2 开头状态码数据，单位为 个3xx：返回 3xx 状态码汇总及各 3 开头状态码数据，单位为 个4xx：返回 4xx 状态码汇总及各 4 开头状态码数据，单位为 个5xx：返回 5xx 状态码汇总及各 5 开头状态码数据，单位为 个支持指定具体状态码查询，若未产生过，则返回为空 */
  Metric: string;
  /** 指定查询域名列表查询单域名：指定单个域名查询多个域名：指定多个域名，最多可一次性查询 30 个查询账号下所有域名：不传参，默认查询账号维度 */
  Domains?: string[];
  /** 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主 */
  Project?: number;
  /** 时间粒度，支持以下几种模式：min：1 分钟粒度，指定查询区间 24 小时内（含 24 小时），可返回 1 分钟粒度明细数据（指定查询服务地域为中国境外时不支持 1 分钟粒度）5min：5 分钟粒度，指定查询区间 31 天内（含 31 天），可返回 5 分钟粒度明细数据hour：1 小时粒度，指定查询区间 31 天内（含 31 天），可返回 1 小时粒度明细数据day：天粒度，指定查询区间大于 31 天，可返回天粒度明细数据 */
  Interval?: string;
  /** 多域名查询时，默认（false)返回多个域名的汇总数据可按需指定为 true，返回每一个 Domain 的明细数据（statusCode 指标暂不支持） */
  Detail?: boolean;
  /** 查询中国境内CDN数据时，指定运营商查询，不填充表示查询所有运营商运营商编码可以查看 [运营商编码映射](https://cloud.tencent.com/document/product/228/6316)指定运营商查询时，不可同时指定省份、IP协议查询 */
  Isp?: number;
  /** 查询中国境内CDN数据时，指定省份查询，不填充表示查询所有省份查询中国境外CDN数据时，指定国家/地区查询，不填充表示查询所有国家/地区省份、国家/地区编码可以查看 [省份编码映射](https://cloud.tencent.com/document/product/228/6316)指定（中国境内）省份查询时，不可同时指定运营商、IP协议查询 */
  District?: number;
  /** 指定协议查询，不填充表示查询所有协议all：所有协议http：指定查询 HTTP 对应指标https：指定查询 HTTPS 对应指标 */
  Protocol?: string;
  /** 指定数据源查询，白名单功能 */
  DataSource?: string;
  /** 指定IP协议查询，不填充表示查询所有协议all：所有协议ipv4：指定查询 ipv4 对应指标ipv6：指定查询 ipv6 对应指标指定IP协议查询时，不可同时指定省份、运营商查询注意：非IPv6白名单用户不可指定ipv4、ipv6进行查询 */
  IpProtocol?: string;
  /** 指定服务地域查询，不填充表示查询中国境内CDN数据mainland：指定查询中国境内 CDN 数据overseas：指定查询中国境外 CDN 数据 */
  Area?: string;
  /** 查询中国境外CDN数据时，可指定地区类型查询，不填充表示查询服务地区数据（仅在 Area 为 overseas 时可用）server：指定查询服务地区（腾讯云 CDN 节点服务器所在地区）数据client：指定查询客户端地区（用户请求终端所在地区）数据 */
  AreaType?: string;
  /** 指定查询的产品数据，可选为cdn或者ecdn，默认为cdn */
  Product?: string;
  /** 指定查询时间的时区，默认UTC+08:00 */
  TimeZone?: string;
}

declare interface DescribeCdnDataResponse {
  /** 返回数据的时间粒度，查询时指定：min：1 分钟粒度5min：5 分钟粒度hour：1 小时粒度day：天粒度 */
  Interval: string;
  /** 指定条件查询得到的数据明细 */
  Data: ResourceData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCdnDomainLogsRequest {
  /** 指定域名查询 */
  Domain: string;
  /** 开始时间，如 2019-09-04 00:00:00 */
  StartTime: string;
  /** 结束时间，如 2019-09-04 12:00:00 */
  EndTime: string;
  /** 分页查询偏移量，默认为 0 */
  Offset?: number;
  /** 分页查询限制数目，默认为 100，最大为 1000 */
  Limit?: number;
  /** 指定区域下载日志mainland：获取境内加速日志包下载链接overseas：获取境外加速日志包下载链接global：同时获取境内、境外加速日志包下载链接（分开打包）不指定时默认为 mainland */
  Area?: string;
  /** 指定下载日志的类型，目前仅支持访问日志（access）。access：访问日志 */
  LogType?: string;
}

declare interface DescribeCdnDomainLogsResponse {
  /** 日志包下载链接。下载内容是gz后缀的压缩包，解压后是无扩展名的文本文件。 */
  DomainLogs: DomainLog[];
  /** 查询到的总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCdnIpRequest {
  /** 需要查询的 IP 列表 */
  Ips: string[];
}

declare interface DescribeCdnIpResponse {
  /** 查询的节点归属详情。 */
  Ips: CdnIp[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCdnOriginIpRequest {
}

declare interface DescribeCdnOriginIpResponse {
  /** 回源节点IP详情。 */
  Ips: OriginIp[];
  /** 回源节点IP总个数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCertDomainsRequest {
  /** PEM格式证书Base64编码后的字符串 */
  Cert?: string;
  /** 托管证书ID，Cert和CertId不能均未空，都填写时以CerId为准。 */
  CertId?: string;
  /** 域名所属产品，cdn或ecdn，默认cdn。 */
  Product?: string;
}

declare interface DescribeCertDomainsResponse {
  /** 已接入CDN的域名列表 */
  Domains: string[] | null;
  /** 已配置证书的CDN域名列表 */
  CertifiedDomains: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDDoSDataRequest {
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间 */
  EndTime: string;
  /** 时间粒度，支持以下几种模式：min：1 分钟粒度，指定查询区间 24 小时内（含 24 小时），可返回 1 分钟粒度明细数据5min：5 分钟粒度，指定查询区间 31 天内（含 31 天），可返回 5 分钟粒度明细数据hour：1 小时粒度，指定查询区间 31 天内（含 31 天），可返回 1 小时粒度明细数据day：天粒度，指定查询区间大于 31 天，可返回天粒度明细数据 */
  Interval: string;
}

declare interface DescribeDDoSDataResponse {
  /** DDoS统计数据数组 */
  Data: DDoSStatsData[];
  /** 时间粒度：min：1 分钟粒度5min：5 分钟粒度hour：1 小时粒度day：天粒度 */
  Interval: string;
  /** DDoS统计攻击带宽峰值数组 */
  AttackBandwidthData: DDoSAttackBandwidthData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiagnoseReportRequest {
  /** 报告ID */
  ReportId: string;
}

declare interface DescribeDiagnoseReportResponse {
  /** 诊断报告基础信息 */
  BaskInfo: DiagnoseData;
  /** CNAME检测信息 */
  CnameInfo: DiagnoseData;
  /** 客户端检测信息 */
  ClientInfo: DiagnoseData;
  /** DNS检测信息 */
  DnsInfo: DiagnoseData;
  /** 网络检测信息 */
  NetworkInfo: DiagnoseData;
  /** 边缘节点检测信息 */
  OcNodeInfo: DiagnoseData;
  /** 中间源节点检测信息 */
  MidNodeInfo: DiagnoseData;
  /** 源站检测信息 */
  OriginInfo: DiagnoseData;
  /** 刷新检测信息 */
  PurgeInfo: DiagnoseData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDistrictIspDataRequest {
  /** 域名列表，最多支持20个域名 */
  Domains: string[];
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间支持近 60 天内的数据查询，每次查询时间区间为 3 小时 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间结束时间与起始时间区间最大为 3 小时 */
  EndTime: string;
  /** 指定查询指标，支持:bandwidth：带宽，单位为 bpsrequest：请求数，单位为 次 */
  Metric: string;
  /** 指定省份查询，不填充表示查询所有省份省份、国家/地区编码可以查看 [省份编码映射](https://cloud.tencent.com/document/product/228/6316) */
  Districts?: number[];
  /** 指定运营商查询，不填充表示查询所有运营商运营商编码可以查看 [运营商编码映射](https://cloud.tencent.com/document/product/228/6316) */
  Isps?: number[];
  /** 指定协议查询，不填充表示查询所有协议all：所有协议http：指定查询 HTTP 对应指标https：指定查询 HTTPS 对应指标 */
  Protocol?: string;
  /** 指定IP协议查询，不填充表示查询所有协议all：所有协议ipv4：指定查询 ipv4 对应指标ipv6：指定查询 ipv6 对应指标指定IP协议查询时，不可同时指定省份、运营商查询 */
  IpProtocol?: string;
  /** 时间粒度，支持以下几种模式（默认5min）：min：1 分钟粒度，支持近 60 天内的数据查询，每次查询时间区间不超过10分钟，可返回 1 分钟粒度明细数据5min：5 分钟粒度，支持近 60 天内的数据查询，每次查询时间区间不超过3 小时，可返回 5 分钟粒度明细数据 */
  Interval?: string;
}

declare interface DescribeDistrictIspDataResponse {
  /** 地区运营商数据明细 */
  Data: DistrictIspInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainsConfigRequest {
  /** 分页查询偏移量，默认为 0 */
  Offset?: number;
  /** 分页查询限制数目，默认为 100，最大可设置为 1000 */
  Limit?: number;
  /** 查询条件过滤器，复杂类型 */
  Filters?: DomainFilter[];
  /** 排序规则 */
  Sort?: Sort;
}

declare interface DescribeDomainsConfigResponse {
  /** 域名列表 */
  Domains: DetailDomain[];
  /** 符合查询条件的域名总数用于分页查询 */
  TotalNumber: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDomainsRequest {
  /** 分页查询偏移量，默认为 0 */
  Offset?: number;
  /** 分页查询限制数目，默认为 100，最大可设置为 1000 */
  Limit?: number;
  /** 查询条件过滤器，复杂类型 */
  Filters?: DomainFilter[];
}

declare interface DescribeDomainsResponse {
  /** 域名列表 */
  Domains: BriefDomain[];
  /** 符合查询条件的域名总数用于分页查询 */
  TotalNumber: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventLogDataRequest {
  /** 防护类型，映射如下： waf = "Web攻击" cc = "CC攻击" */
  Mode: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间，最长跨度为30分钟 */
  EndTime: string;
  /** 域名 */
  Domain: string;
  /** 执行动作，取值为：intercept/redirect/observe分别表示：拦截/重定向/观察参数放空，表示查询全部动作数据 */
  ActionName: string;
  /** 请求URL，支持URL开头和结尾使用\*表示通配如：/files/* 表示所有以/files/开头的请求*.jpg 表示所有以.jpg结尾的请求 */
  Url: string;
  /** 地域 mainland 或者 overseas，为空时默认 mainland */
  Area?: string;
  /** 来源产品，cdn 或者 ecdn，为空时默认 cdn */
  Source?: string;
}

declare interface DescribeEventLogDataResponse {
  /** 统计曲线结果 */
  Results: EventLogStatsData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageConfigRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeImageConfigResponse {
  /** WebpAdapter配置 */
  WebpAdapter: WebpAdapter | null;
  /** TpgAdapter配置 */
  TpgAdapter: TpgAdapter | null;
  /** GuetzliAdapter配置 */
  GuetzliAdapter: GuetzliAdapter | null;
  /** AvifAdapter配置项 */
  AvifAdapter: AvifAdapter | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpStatusRequest {
  /** 加速域名 */
  Domain: string;
  /** 节点类型：edge：表示边缘节点last：表示回源层节点不填充情况下，默认返回边缘节点信息 */
  Layer?: string;
  /** 查询区域：mainland: 国内节点overseas: 海外节点global: 全球节点 */
  Area?: string;
  /** 是否以IP段的格式返回。 */
  Segment?: boolean;
  /** 是否查询节点 IPV6 信息。 */
  ShowIpv6?: boolean;
  /** 是否对IPV6进行缩写。 */
  AbbreviationIpv6?: boolean;
}

declare interface DescribeIpStatusResponse {
  /** 节点列表 */
  Ips: IpStatus[];
  /** 节点总个数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpVisitRequest {
  /** 查询起始时间，如：2018-09-04 10:40:10，返回结果大于等于指定时间根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:10 在按 5 分钟的时间粒度查询时，返回的第一个数据对应时间点为 2018-09-04 10:40:00 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:10，返回结果小于等于指定时间根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:10 在按 5 分钟的时间粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:40:00 */
  EndTime: string;
  /** 指定查询域名列表，最多可一次性查询 30 个加速域名明细 */
  Domains?: string[];
  /** 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主 */
  Project?: number;
  /** 时间粒度，支持以下几种模式：5min：5 分钟粒度，查询时间区间 24 小时内，默认返回 5 分钟粒度活跃用户数day：天粒度，查询时间区间大于 1 天时，默认返回天粒度活跃用户数 */
  Interval?: string;
}

declare interface DescribeIpVisitResponse {
  /** 数据统计的时间粒度，支持5min, day，分别表示5分钟，1天的时间粒度。 */
  Interval: string;
  /** 各个资源的回源数据详情。 */
  Data: ResourceData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMapInfoRequest {
  /** 映射查询类别：isp：运营商映射查询district：省份（中国境内）、国家/地区（中国境外）映射查询 */
  Name: string;
}

declare interface DescribeMapInfoResponse {
  /** 映射关系数组。 */
  MapInfoList: MapInfo[];
  /** 服务端区域id和子区域id的映射关系。 */
  ServerRegionRelation: RegionMapRelation[] | null;
  /** 客户端区域id和子区域id的映射关系。 */
  ClientRegionRelation: RegionMapRelation[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOriginDataRequest {
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的第一个数据对应时间点为 2018-09-04 10:00:00起始时间与结束时间间隔小于等于 90 天 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间根据指定时间粒度不同，会进行向前归整，如 2018-09-04 10:40:00 在按 1 小时的时间粒度查询时，返回的最后一个数据对应时间点为 2018-09-04 10:00:00起始时间与结束时间间隔小于等于 90 天 */
  EndTime: string;
  /** 指定查询指标，支持的类型有：flux：回源流量，单位为 bytebandwidth：回源带宽，单位为 bpsrequest：回源请求数，单位为 次failRequest：回源失败请求数，单位为 次failRate：回源失败率，单位为 %statusCode：回源状态码，返回 2xx、3xx、4xx、5xx 汇总数据，单位为 个2xx：返回 2xx 回源状态码汇总及各 2 开头回源状态码数据，单位为 个3xx：返回 3xx 回源状态码汇总及各 3 开头回源状态码数据，单位为 个4xx：返回 4xx 回源状态码汇总及各 4 开头回源状态码数据，单位为 个5xx：返回 5xx 回源状态码汇总及各 5 开头回源状态码数据，单位为 个支持指定具体状态码查询，若未产生过，则返回为空 */
  Metric: string;
  /** 指定查询域名列表，最多可一次性查询 30 个加速域名明细 */
  Domains?: string[];
  /** 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)未填充域名情况下，指定项目查询，最多可一次性查询 30 个加速域名明细若填充了具体域名信息，以域名为主 */
  Project?: number;
  /** 时间粒度，支持以下几种模式：min：1 分钟粒度，指定查询区间 24 小时内（含 24 小时），可返回 1 分钟粒度明细数据（指定查询服务地域为中国境外时不支持 1 分钟粒度）5min：5 分钟粒度，指定查询区间 31 天内（含 31 天），可返回 5 分钟粒度明细数据hour：1 小时粒度，指定查询区间 31 天内（含 31 天），可返回 1 小时粒度明细数据day：天粒度，指定查询区间大于 31 天，可返回天粒度明细数据 */
  Interval?: string;
  /** Domains 传入多个时，默认（false)返回多个域名的汇总数据可按需指定为 true，返回每一个 Domain 的明细数据（statusCode 指标暂不支持） */
  Detail?: boolean;
  /** 指定服务地域查询，不填充表示查询中国境内 CDN 数据mainland：指定查询中国境内 CDN 数据overseas：指定查询中国境外 CDN 数据 */
  Area?: string;
  /** 指定查询时间的时区，默认UTC+08:00 */
  TimeZone?: string;
}

declare interface DescribeOriginDataResponse {
  /** 数据统计的时间粒度，支持min, 5min, hour, day，分别表示1分钟，5分钟，1小时和1天的时间粒度。 */
  Interval: string;
  /** 各个资源的回源数据详情。 */
  Data: ResourceOriginData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePayTypeRequest {
  /** 指定服务地域查询mainland：境内计费方式查询overseas：境外计费方式查询未填充时默认为 mainland */
  Area?: string;
  /** 指定查询的产品数据，可选为cdn或者ecdn，默认为cdn */
  Product?: string;
}

declare interface DescribePayTypeResponse {
  /** 计费类型：flux：流量计费bandwidth：带宽计费request：请求数计费flux_sep：动静分离流量计费bandwidth_sep：动静分离带宽计费日结计费方式切换时，若当日产生消耗，则此字段表示第二天即将生效的计费方式，若未产生消耗，则表示已经生效的计费方式。 */
  PayType: string;
  /** 计费周期：day：日结计费month：月结计费hour：小时结计费 */
  BillingCycle: string;
  /** monthMax：日峰值月平均，月结模式day95：日 95 带宽，月结模式month95：月95带宽，月结模式sum：总流量/总请求数，日结或月结模式max：峰值带宽，日结模式 */
  StatType: string;
  /** 境外计费类型：all：全地区统一计费multiple：分地区计费 */
  RegionType: string;
  /** 当前生效计费类型：flux：流量计费bandwidth：带宽计费request：请求数计费flux_sep：动静分离流量计费bandwidth_sep：动静分离带宽计费 */
  CurrentPayType: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePurgeQuotaRequest {
}

declare interface DescribePurgeQuotaResponse {
  /** URL刷新用量及配额。 */
  UrlPurge: Quota[];
  /** 目录刷新用量及配额。 */
  PathPurge: Quota[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePurgeTasksRequest {
  /** 指定刷新类型查询url：url 刷新记录path：目录刷新记录 */
  PurgeType?: string;
  /** 根据时间区间查询时，填充开始时间，如 2018-08-08 00:00:00 */
  StartTime?: string;
  /** 根据时间区间查询时，填充结束时间，如 2018-08-08 23:59:59 */
  EndTime?: string;
  /** 根据任务 ID 查询时，填充任务 ID查询时任务 ID 与起始时间必须填充一项 */
  TaskId?: string;
  /** 分页查询偏移量，默认为 0 */
  Offset?: number;
  /** 分页查询限制数目，默认为 20 */
  Limit?: number;
  /** 支持域名过滤，或 http(s):// 开头完整 URL 过滤 */
  Keyword?: string;
  /** 指定任务状态查询fail：刷新失败done：刷新成功process：刷新中 */
  Status?: string;
  /** 指定刷新地域查询mainland：境内overseas：境外global：全球 */
  Area?: string;
}

declare interface DescribePurgeTasksResponse {
  /** 详细刷新记录 */
  PurgeLogs: PurgeTask[] | null;
  /** 任务总数，用于分页 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePushQuotaRequest {
}

declare interface DescribePushQuotaResponse {
  /** Url预热用量及配额。 */
  UrlPush: Quota[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePushTasksRequest {
  /** 开始时间，如2018-08-08 00:00:00。 */
  StartTime?: string;
  /** 结束时间，如2018-08-08 23:59:59。 */
  EndTime?: string;
  /** 指定任务 ID 查询TaskId 和起始时间必须指定一项 */
  TaskId?: string;
  /** 查询关键字，请输入域名或 http(s):// 开头完整 URL */
  Keyword?: string;
  /** 分页查询偏移量，默认为 0 */
  Offset?: number;
  /** 分页查询限制数目，默认为 20 */
  Limit?: number;
  /** 指定地区查询预热纪录mainland：境内overseas：境外global：全球 */
  Area?: string;
  /** 指定任务状态查询fail：预热失败done：预热成功process：预热中invalid: 预热无效(源站返回4xx或5xx状态码) */
  Status?: string;
}

declare interface DescribePushTasksResponse {
  /** 预热历史记录 */
  PushLogs: PushTask[] | null;
  /** 任务总数，用于分页 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReportDataRequest {
  /** 查询起始时间：yyyy-MM-dd当报表类型为daily，起始时间和结束时间必须为同一天当报表类型为weekly，起始时间须为周一，结束时间须为同一周的周日当报表类型为monthly，起始时间须为自然月第一天，即1号，结束时间须为该自然月最后一天 */
  StartTime: string;
  /** 查询结束时间：yyyy-MM-dd当报表类型为daily，起始时间和结束时间必须为同一天当报表类型为weekly，起始时间须为周一，结束时间须为同一周的周日当报表类型为monthly，起始时间须为自然月第一天，即1号，结束时间须为该自然月最后一天 */
  EndTime: string;
  /** 报表类型daily：日报表weekly：周报表（周一至周日）monthly：月报表（自然月） */
  ReportType: string;
  /** 域名加速区域mainland：中国境内overseas：中国境外 */
  Area: string;
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 数据个数，默认1000。 */
  Limit?: number;
  /** 按项目ID筛选 */
  Project?: number;
}

declare interface DescribeReportDataResponse {
  /** 域名维度数据详情 */
  DomainReport: ReportData[];
  /** 项目维度数据详情 */
  ProjectReport: ReportData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScdnBotDataRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** mainland 大陆地区 overseas境外地区 */
  Area: string;
  /** 取值："2min"或者"hour"，表示查询2分钟或者1小时粒度的数据，如果查询时间范围>1天，则强制返回1小时粒度数据 */
  Interval?: string;
  /** 域名数组，多选域名时，使用此参数,不填写表示查询所有域名的数据（AppID维度数据） */
  Domains?: string[];
}

declare interface DescribeScdnBotDataResponse {
  /** 统计信息详细数据 */
  Data: BotStats[];
  /** 当前返回数据的粒度，取值："2min"或者"hour"，分别表示2分钟或者1小时粒度 */
  Interval: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScdnBotRecordsRequest {
  /** BOT类型，取值为"UB","UCB","TCB"，分别表示：未知类型，自定义类型，公开类型 */
  BotType: string;
  /** 域名 */
  Domain: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 分页参数 */
  Offset: number;
  /** 分页参数 */
  Limit: number;
  /** mainland 大陆地区 overseas境外地区 */
  Area: string;
  /** 排序参数 */
  SortBy?: BotSortBy[];
  /** BotType=UB时，表示需要过滤的预测标签，取值如下： "crawler_unregular", "crawler_regular", "request_repeat", "credential_miss_user", "credential_without_user", "credential_only_action", "credential_user_password", "credential_cracking", "credential_stuffing", "brush_sms", "brush_captcha", "reg_malicious"BotType=TCB时，表示需要过滤的Bot分类，取值如下： "Uncategorised", "Search engine bot", "Site monitor", "Screenshot creator", "Link checker", "Web scraper", "Vulnerability scanner", "Virus scanner", "Speed tester", "Feed Fetcher", "Tool", "Marketing"BotType=UCB时，取值如下：User-Agent为空或不存在User-Agent类型为BOTUser-Agent类型为HTTP LibraryUser-Agent类型为FrameworkUser-Agent类型为ToolsUser-Agent类型为Unkonwn BOTUser-Agent类型为ScannerReferer空或不存在Referer滥用(多个UA使用相同Referer)Cookie滥用(多个UA使用相同Cookie)Cookie空或不存在Connection空或不存在Accept空或不存在Accept-Language空或不存在Accept-Enconding空或不存在使用HTTP HEAD方法HTTP协议为1.0或者更低IDC-IP 腾讯云IDC-IP 阿里云IDC-IP 华为云IDC-IP 金山云IDC-IP UCloudIDC-IP 百度云IDC-IP 京东云IDC-IP 青云IDC-IP AwsIDC-IP AzureIDC-IP Google以上所有类型，FilterName为空时，表示不过滤，获取所有内容 */
  FilterName?: string;
  /** 目前支持的Action"intercept" 拦截"monitor"，监控"permit" 放行"redirect" 重定向尚未支持的Action"captcha" 验证码 */
  FilterAction?: string;
  /** 过滤的IP */
  FilterIp?: string;
  /** 域名列表，为空表示查询AppID维度数据 */
  Domains?: string[];
}

declare interface DescribeScdnBotRecordsResponse {
  /** BOT拦截结果数组 */
  Data: BotRecord[];
  /** 记录数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScdnConfigRequest {
  /** 域名 */
  Domain: string;
}

declare interface DescribeScdnConfigResponse {
  /** 自定义防护策略配置 */
  Acl: ScdnAclConfig;
  /** Web 攻击防护（WAF）配置 */
  Waf: ScdnWafConfig;
  /** CC 防护配置 */
  CC: ScdnConfig;
  /** DDOS 防护配置 */
  Ddos: ScdnDdosConfig;
  /** BOT 防护配置 */
  Bot: ScdnBotConfig;
  /** 当前状态，取值online | offline */
  Status: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScdnIpStrategyRequest {
  /** 分页起始地址 */
  Offset?: number;
  /** 列表分页记录条数，最大1000 */
  Limit?: number;
  /** 查询条件过滤器 */
  Filters?: ScdnIpStrategyFilter[];
  /** 指定查询返回结果的排序字段，支持domain，update_time */
  Order?: string;
  /** 排序方式，支持asc，desc */
  Sequence?: string;
}

declare interface DescribeScdnIpStrategyResponse {
  /** IP策略列表 */
  IpStrategyList?: ScdnIpStrategy[] | null;
  /** 配置的策略条数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScdnTopDataRequest {
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间 */
  EndTime: string;
  /** 查询的SCDN TOP攻击数据类型：waf：Web 攻击防护TOP数据 */
  Mode: string;
  /** 排序对象，支持以下几种形式：url：攻击目标 url 排序ip：攻击源 IP 排序attackType：攻击类型排序 */
  Metric: string;
  /** 排序使用的指标名称：request：请求次数 */
  Filter: string;
  /** 指定域名查询 */
  Domain?: string;
  /** 指定攻击类型, 仅 Mode=waf 时有效不填则查询所有攻击类型的数据总和AttackType 映射如下: other = '未知类型' malicious_scan = "恶意扫描" sql_inject = "SQL注入攻击" xss = "XSS攻击" cmd_inject = "命令注入攻击" ldap_inject = "LDAP注入攻击" ssi_inject = "SSI注入攻击" xml_inject = "XML注入攻击" web_service = "WEB服务漏洞攻击" web_app = "WEB应用漏洞攻击" path_traversal = "路径跨越攻击" illegal_access_core_file = "核心文件非法访问" trojan_horse = "木马后门攻击" csrf = "CSRF攻击" malicious_file_upload= '恶意文件上传' */
  AttackType?: string;
  /** 指定防御模式,仅 Mode=waf 时有效不填则查询所有防御模式的数据总和DefenceMode 映射如下： observe = '观察模式' intercept = '拦截模式' */
  DefenceMode?: string;
}

declare interface DescribeScdnTopDataResponse {
  /** WAF 攻击类型统计 */
  TopTypeData?: ScdnTypeData[] | null;
  /** TOP 攻击源 IP 统计 */
  TopIpData?: ScdnTopData[] | null;
  /** 查询的SCDN类型，当前仅支持 waf */
  Mode?: string;
  /** TOP URL 统计 */
  TopUrlData?: ScdnTopUrlData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopDataRequest {
  /** 查询起始日期：yyyy-MM-dd HH:mm:ss仅支持按天粒度的数据查询，取入参中的天信息作为起始日期返回大于等于起始日期当天 00:00:00 点产生的数据，如 StartTime为2018-09-04 10:40:00，返回数据的起始时间为2018-09-04 00:00:00仅支持 90 天内数据查询 */
  StartTime: string;
  /** 查询结束日期：yyyy-MM-dd HH:mm:ss仅支持按天粒度的数据查询，取入参中的天信息作为结束日期返回小于等于结束日期当天 23:59:59 产生的数据，如EndTime为2018-09-05 22:40:00，返回数据的结束时间为2018-09-05 23:59:59EndTime 需要大于等于 StartTime */
  EndTime: string;
  /** 排序对象，支持以下几种形式：ip、ua_device、ua_browser、ua_os、referer */
  Metric: string;
  /** 排序使用的指标名称：flux：Metric 为 host 时指代访问流量request：Metric 为 host 时指代访问请求数 */
  Filter: string;
  /** 指定查询域名列表，最多可一次性查询 30 个加速域名明细 */
  Domains?: string[];
  /** 未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主 */
  Project?: number;
  /** 是否详细显示每个域名的的具体数值 */
  Detail?: boolean;
  /** 指定服务地域查询，不填充表示查询中国境内 CDN 数据mainland：指定查询中国境内 CDN 数据overseas：指定查询中国境外 CDN 数据 */
  Area?: string;
  /** 指定查询的产品数据，目前仅可使用cdn */
  Product?: string;
}

declare interface DescribeTopDataResponse {
  /** 各个资源的Top 访问数据详情。 */
  Data: TopDataMore[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrafficPackagesRequest {
  /** 分页查询起始地址，默认 0 */
  Offset?: number;
  /** 分页查询记录个数，默认100，最大1000 */
  Limit?: number;
  /** 流量包排序方式，支持以下值：expireTimeDesc：默认值，按过期时间倒序expireTimeAsc：按过期时间正序createTimeDesc：按创建时间倒序createTimeAsc：按创建时间正序status：按状态排序，正常抵扣>未生效>已用尽>已过期channel：按来源排序，主动购买>自动续订>CDN赠送 */
  SortBy?: string;
}

declare interface DescribeTrafficPackagesResponse {
  /** 流量包总个数 */
  TotalCount: number;
  /** 流量包详情 */
  TrafficPackages: TrafficPackage[];
  /** 即将过期的流量包个数（7天内） */
  ExpiringCount: number;
  /** 有效流量包个数 */
  EnabledCount: number;
  /** 付费流量包个数 */
  PaidCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUrlViolationsRequest {
  /** 分页查询偏移量，默认为 0 */
  Offset?: number;
  /** 分页查询限制数目，默认为 100 */
  Limit?: number;
  /** 指定的域名查询 */
  Domains?: string[];
}

declare interface DescribeUrlViolationsResponse {
  /** 违规 URL 详情 */
  UrlRecordList: ViolationUrl[] | null;
  /** 记录总数，用于分页 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWafDataRequest {
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间 */
  EndTime: string;
  /** 时间粒度，支持以下几种模式：min：1 分钟粒度，指定查询区间 24 小时内（含 24 小时），可返回 1 分钟粒度明细数据5min：5 分钟粒度，指定查询区间 31 天内（含 31 天），可返回 5 分钟粒度明细数据hour：1 小时粒度，指定查询区间 31 天内（含 31 天），可返回 1 小时粒度明细数据day：天粒度，指定查询区间大于 31 天，可返回天粒度明细数据仅支持30天内数据查询，且查询时间范围在 7 到 30 天最小粒度是 hour。 */
  Interval: string;
  /** 指定域名查询 */
  Domain?: string;
  /** 指定攻击类型不填则查询所有攻击类型的数据分布AttackType 映射如下:"webshell" : Webshell检测防护"oa" : 常见OA漏洞防护"xss" : XSS跨站脚本攻击防护"xxe" : XXE攻击防护"webscan" : 扫描器攻击漏洞防护"cms" : 常见CMS漏洞防护"upload" : 恶意文件上传攻击防护"sql" : SQL注入攻击防护"cmd_inject": 命令/代码注入攻击防护"osc" : 开源组件漏洞防护"file_read" : 任意文件读取"ldap" : LDAP注入攻击防护"other" : 其它漏洞防护 */
  AttackType?: string;
  /** 指定防御模式不填则查询所有防御模式的数据总和DefenceMode映射如下： observe = '观察模式' intercept = '拦截模式' */
  DefenceMode?: string;
  /** 地域：mainland 或 overseas */
  Area?: string;
  /** 指定多个攻击类型，取值参考AttackType */
  AttackTypes?: string[];
  /** 指定域名列表查询 */
  Domains?: string[];
}

declare interface DescribeWafDataResponse {
  /** 粒度数据 */
  Data: TimestampData[];
  /** 粒度 */
  Interval: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableCachesRequest {
  /** 禁用的 URL 列表（分协议生效，必须包含http://或https://）每次最多可提交 100 条，每日最多可提交 3000 条 */
  Urls: string[];
}

declare interface DisableCachesResponse {
  /** 提交结果 */
  CacheOptResult: CacheOptResult | null;
  /** 任务ID */
  TaskId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableClsLogTopicRequest {
  /** 日志集ID */
  LogsetId: string;
  /** 日志主题ID */
  TopicId: string;
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
}

declare interface DisableClsLogTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DuplicateDomainConfigRequest {
  /** 新增域名 */
  Domain: string;
  /** 被拷贝配置的域名 */
  ReferenceDomain: string;
}

declare interface DuplicateDomainConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableCachesRequest {
  /** 解封 URL 列表 */
  Urls: string[];
  /** URL封禁日期 */
  Date?: string;
}

declare interface EnableCachesResponse {
  /** 结果列表 */
  CacheOptResult: CacheOptResult | null;
  /** 任务ID */
  TaskId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableClsLogTopicRequest {
  /** 日志集ID */
  LogsetId: string;
  /** 日志主题ID */
  TopicId: string;
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
}

declare interface EnableClsLogTopicResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDisableRecordsRequest {
  /** 指定 URL 查询 */
  Url?: string;
  /** 开始时间，如：2018-12-12 10:24:00。 */
  StartTime?: string;
  /** 结束时间，如：2018-12-14 10:24:00。 */
  EndTime?: string;
  /** URL 当前状态disable：当前仍为禁用状态，访问返回 403enable：当前为可用状态，已解禁，可正常访问 */
  Status?: string;
  /** 分页查询偏移量，默认为 0 */
  Offset?: number;
  /** 分页查询限制数目，默认为20。 */
  Limit?: number;
  /** 任务ID，任务ID和起始时间需要至少填写一项。 */
  TaskId?: string;
}

declare interface GetDisableRecordsResponse {
  /** 封禁历史记录 */
  UrlRecordList: UrlRecord[] | null;
  /** 任务总数，用于分页 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListClsLogTopicsRequest {
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
}

declare interface ListClsLogTopicsResponse {
  /** 上海区域日志集信息 */
  Logset: LogSetInfo;
  /** 上海区域日志主题信息列表 */
  Topics: TopicInfo[] | null;
  /** 其他区域日志集信息列表 */
  ExtraLogset: ExtraLogset[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListClsTopicDomainsRequest {
  /** 日志集ID */
  LogsetId: string;
  /** 日志主题ID */
  TopicId: string;
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
}

declare interface ListClsTopicDomainsResponse {
  /** 开发者ID */
  AppId: number;
  /** 渠道 */
  Channel: string;
  /** 日志集ID */
  LogsetId: string;
  /** 日志主题ID */
  TopicId: string;
  /** 域名区域配置，其中可能含有已删除的域名，如果要再传回ManageClsTopicDomains接口，需要结合ListCdnDomains接口排除掉已删除的域名 */
  DomainAreaConfigs: DomainAreaConfig[];
  /** 日志主题名称 */
  TopicName: string;
  /** 日志主题最近更新时间 */
  UpdateTime: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDiagnoseReportRequest {
  /** 用于搜索诊断URL的关键字，不填时返回用户所有的诊断任务。 */
  KeyWords?: string;
  /** 用于搜索诊断系统返回的诊断链接，形如：http://cdn.cloud.tencent.com/self_diagnose/xxxxx */
  DiagnoseLink?: string;
  /** 请求源带协议头，形如：https://console.cloud.tencent.com */
  Origin?: string;
}

declare interface ListDiagnoseReportResponse {
  /** 诊断信息。 */
  Data: DiagnoseInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListScdnDomainsRequest {
  /** 分页起始地址 */
  Offset?: number;
  /** 列表分页记录条数，最大1000 */
  Limit?: number;
  /** 域名信息 */
  Domain?: string;
}

declare interface ListScdnDomainsResponse {
  /** 域名列表信息 */
  DomainList?: ScdnDomain[] | null;
  /** 域名的总条数。 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListScdnLogTasksRequest {
  /** 产品来源 cdn/ecdn */
  Source?: string;
  /** 地域：mainland 或 overseas 为空表示查询所有地域 */
  Area?: string;
}

declare interface ListScdnLogTasksResponse {
  /** 日志下载任务详情 */
  TaskList: ScdnLogTaskDetail[];
  /** 查询到的下载任务的总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListScdnTopBotDataRequest {
  /** 获取Top量，取值范围[1-10] */
  TopCount: number;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** mainland 大陆地区 overseas境外地区 */
  Area: string;
  /** session表示查询BOT会话的Top信息ip表示查询BOT客户端IP的Top信息不填代表获取会话信息 */
  Metric?: string;
  /** 域名，仅当Metric=ip，并且Domain为空时有效，不填写表示获取AppID信息 */
  Domains?: string[];
}

declare interface ListScdnTopBotDataResponse {
  /** 域名BOT次数列表 */
  Data: BotStatisticsCount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTopBotDataRequest {
  /** 获取Top量，取值范围[1-10] */
  TopCount: number;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** session表示查询BOT会话的Top信息ip表示查询BOT客户端IP的Top信息不填代表获取会话信息 */
  Metric?: string;
  /** 域名，仅当Metric=ip时有效，不填写表示使用Domains参数 */
  Domain?: string;
  /** 域名，仅当Metric=ip，并且Domain为空时有效，不填写表示获取AppID信息 */
  Domains?: string[];
}

declare interface ListTopBotDataResponse {
  /** 域名BOT次数列表 */
  Data: DomainBotCount[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTopCcDataRequest {
  /** 查询Top数据的开始时间，格式为：2020-01-01 00:00:00 */
  StartTime: string;
  /** 查询Top数据的结束时间，格式为：2020-01-01 23:59:59支持 90 天内数据查询，不传此参数，表示查当天数据时间跨度要小于等于7天 */
  EndTime: string;
  /** 域名，不传此参数，表示查询账号级别数据 */
  Domain?: string;
  /** 统计指标：ip_url : Top IP+URL 默认值ua : Top UA */
  Metric?: string;
  /** cdn表示CDN数据，默认值ecdn表示ECDN数据 */
  Source?: string;
  /** 域名列表，不传此参数，表示查询账号级别数据 */
  Domains?: string[];
  /** 执行动作，取值为：intercept/redirect/observe分别表示：拦截/重定向/观察为空表示查询所有执行动作数据 */
  ActionName?: string;
  /** 地域：mainland或overseas，表示国内或海外，不填写默认表示国内 */
  Area?: string;
}

declare interface ListTopCcDataResponse {
  /** Top数据 */
  Data: CcTopData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTopClsLogDataRequest {
  /** 需要查询的日志集ID */
  LogsetId: string;
  /** 需要查询的日志主题ID组合，多个以逗号分隔 */
  TopicIds: string;
  /** 需要查询的日志的起始时间，格式 YYYY-mm-dd HH:MM:SS */
  StartTime: string;
  /** 需要查询的日志的结束时间，格式 YYYY-mm-dd HH:MM:SS，时间跨度应小于10分钟 */
  EndTime: string;
  /** 指定域名查询 */
  Domain: string;
  /** 指定访问的URL查询，支持URL开头和结尾使用\*表示通配如：/files/* 表示所有以/files/开头的请求*.jpg 表示所有以.jpg结尾的请求 */
  Url: string;
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
  /** 要查询的Top条数，最大值为100，默认为10 */
  Limit?: number;
  /** 按请求量排序， asc（升序）或者 desc（降序），默认为 desc */
  Sort?: string;
}

declare interface ListTopClsLogDataResponse {
  /** 数据列表 */
  Data: ClsLogIpData[];
  /** 获取到Top总记录数 */
  TotalCount: number;
  /** 获取到的不重复IP条数 */
  IpCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTopDDoSDataRequest {
  /** 查询Top数据的开始时间，格式为：2020-01-01 00:00:00 */
  StartTime: string;
  /** 查询Top数据的结束时间，格式为：2020-01-01 23:59:59支持 90 天内数据查询，时间跨度要小于等于7天 */
  EndTime: string;
  /** 查询Top的数量，不填默认值为10 */
  TopCount?: number;
  /** AttackIP表示查询攻击ip的top排行，AttackType表示攻击类型的top排行，为空默认为AttackType */
  Metric?: string;
}

declare interface ListTopDDoSDataResponse {
  /** DDoS 攻击类型的top数据，当Metric=AttackType的时候返回攻击类型的统计数据，IPData为空 */
  Data: DDoSTopData[];
  /** ddos攻击ip的top数据，Metric=AttackIP的时候返回IPData，Data为空 */
  IPData: DDoSAttackIPTopData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTopDataRequest {
  /** 查询起始日期：yyyy-MM-dd HH:mm:ss仅支持按天粒度的数据查询，取入参中的天信息作为起始日期返回大于等于起始日期当天 00:00:00 点产生的数据，如 StartTime为2018-09-04 10:40:00，返回数据的起始时间为2018-09-04 00:00:00仅支持 90 天内数据查询 */
  StartTime: string;
  /** 查询结束日期：yyyy-MM-dd HH:mm:ss仅支持按天粒度的数据查询，取入参中的天信息作为结束日期返回小于等于结束日期当天 23:59:59 产生的数据，如EndTime为2018-09-05 22:40:00，返回数据的结束时间为2018-09-05 23:59:59EndTime 需要大于等于 StartTime */
  EndTime: string;
  /** 排序对象，支持以下几种形式：url：访问 URL 排序（无参数的URL），支持的 Filter 为 flux、requestdistrict：省份、国家/地区排序，支持的 Filter 为 flux、requestisp：运营商排序，支持的 Filter 为 flux、requesthost：域名访问数据排序，支持的 Filter 为：flux、request、bandwidth、fluxHitRate、2XX、3XX、4XX、5XX、statusCodeoriginHost：域名回源数据排序，支持的 Filter 为 flux、request、bandwidth、origin_2XX、origin_3XX、origin_4XX、origin_5XX、OriginStatusCode */
  Metric: string;
  /** 排序使用的指标名称：flux：Metric 为 host 时指代访问流量，originHost 时指代回源流量bandwidth：Metric 为 host 时指代访问带宽，originHost 时指代回源带宽request：Metric 为 host 时指代访问请求数，originHost 时指代回源请求数fluxHitRate：平均流量命中率2XX：访问 2XX 状态码3XX：访问 3XX 状态码4XX：访问 4XX 状态码5XX：访问 5XX 状态码origin_2XX：回源 2XX 状态码origin_3XX：回源 3XX 状态码origin_4XX：回源 4XX 状态码origin_5XX：回源 5XX 状态码statusCode：指定访问状态码统计，在 Code 参数中填充指定状态码OriginStatusCode：指定回源状态码统计，在 Code 参数中填充指定状态码 */
  Filter: string;
  /** 指定查询域名列表，最多可一次性查询 30 个加速域名明细 */
  Domains?: string[];
  /** 指定要查询的项目 ID，[前往查看项目 ID](https://console.cloud.tencent.com/project)未填充域名情况下，指定项目查询，若填充了具体域名信息，以域名为主 */
  Project?: number;
  /** 多域名查询时，默认（false)返回所有域名汇总排序结果Metric 为 url、path、district、isp，Filter 为 flux、request 时，可设置为 true，返回每一个 Domain 的排序数据 */
  Detail?: boolean;
  /** Filter 为 statusCode、OriginStatusCode 时，填充指定状态码查询排序结果 */
  Code?: string;
  /** 指定服务地域查询，不填充表示查询中国境内 CDN 数据mainland：指定查询中国境内 CDN 数据overseas：指定查询中国境外 CDN 数据，支持的 Metric 为 url、district、host、originHost，当 Metric 为 originHost 时仅支持 flux、request、bandwidth Filter */
  Area?: string;
  /** 查询中国境外CDN数据，且仅当 Metric 为 district 或 host 时，可指定地区类型查询，不填充表示查询服务地区数据（仅在 Area 为 overseas，且 Metric 是 district 或 host 时可用）server：指定查询服务地区（腾讯云 CDN 节点服务器所在地区）数据client：指定查询客户端地区（用户请求终端所在地区）数据，当 Metric 为 host 时仅支持 flux、request、bandwidth Filter */
  AreaType?: string;
  /** 指定查询的产品数据，可选为cdn或者ecdn，默认为cdn */
  Product?: string;
  /** 只返回前N条数据，默认为最大值100，metric=url时默认为最大值1000 */
  Limit?: number;
}

declare interface ListTopDataResponse {
  /** 各个资源的Top 访问数据详情。 */
  Data: TopData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTopWafDataRequest {
  /** 查询起始时间，如：2018-09-04 10:40:00，返回结果大于等于指定时间 */
  StartTime: string;
  /** 查询结束时间，如：2018-09-04 10:40:00，返回结果小于等于指定时间 */
  EndTime: string;
  /** 指定域名查询，不填写查询整个AppID下数据 */
  Domain?: string;
  /** 指定攻击类型不填则查询所有攻击类型的数据总和AttackType 映射如下:"webshell" : Webshell检测防护"oa" : 常见OA漏洞防护"xss" : XSS跨站脚本攻击防护"xxe" : XXE攻击防护"webscan" : 扫描器攻击漏洞防护"cms" : 常见CMS漏洞防护"upload" : 恶意文件上传攻击防护"sql" : SQL注入攻击防护"cmd_inject": 命令/代码注入攻击防护"osc" : 开源组件漏洞防护"file_read" : 任意文件读取"ldap" : LDAP注入攻击防护"other" : 其它漏洞防护 */
  AttackType?: string;
  /** 指定防御模式不填则查询所有防御模式的数据总和DefenceMode 映射如下： observe = '观察模式' intercept = '拦截模式' */
  DefenceMode?: string;
  /** 排序对象，支持以下几种形式：url：攻击目标 url 排序ip：攻击源 IP 排序attackType：攻击类型排序domain：当查询整个AppID下数据时，按照域名请求量排序 */
  Metric?: string;
  /** 地域：mainland 或 overseas */
  Area?: string;
  /** 指定攻击类型列表，取值参考AttackType */
  AttackTypes?: string[];
  /** 指定域名列表查询，不填写查询整个AppID下数据 */
  Domains?: string[];
}

declare interface ListTopWafDataResponse {
  /** 攻击类型统计 */
  TopTypeData: ScdnTypeData[];
  /** IP统计 */
  TopIpData: ScdnTopData[];
  /** URL统计 */
  TopUrlData: ScdnTopUrlData[];
  /** 域名统计 */
  TopDomainData: ScdnTopDomainData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ManageClsTopicDomainsRequest {
  /** 日志集ID */
  LogsetId: string;
  /** 日志主题ID */
  TopicId: string;
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
  /** 域名区域配置，注意：如果此字段为空，则表示解绑对应主题下的所有域名 */
  DomainAreaConfigs?: DomainAreaConfig[];
}

declare interface ManageClsTopicDomainsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPurgeFetchTaskStatusRequest {
  /** 执行时间 */
  ExecutionTime: string;
  /** 执行状态success: 成功failed: 失败 */
  ExecutionStatus: string;
  /** 任务 ID */
  Id: string;
  /** 执行状态详情 */
  ExecutionStatusDesc?: string;
}

declare interface ModifyPurgeFetchTaskStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PurgePathCacheRequest {
  /** 目录列表，需要包含协议头部 http:// 或 https:// */
  Paths: string[];
  /** 刷新类型flush：刷新产生更新的资源delete：刷新全部资源 */
  FlushType: string;
  /** 是否对中文字符进行编码后刷新 */
  UrlEncode?: boolean;
  /** 刷新区域无此参数时，默认刷新加速域名所在加速区域填充 mainland 时，仅刷新中国境内加速节点上缓存内容填充 overseas 时，仅刷新中国境外加速节点上缓存内容指定刷新区域时，需要与域名加速区域匹配 */
  Area?: string;
}

declare interface PurgePathCacheResponse {
  /** 刷新任务 ID，同一批次提交的目录共用一个任务 ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PurgeUrlsCacheRequest {
  /** URL 列表，需要包含协议头部 http:// 或 https:// */
  Urls: string[];
  /** 刷新区域无此参数时，默认刷新加速域名所在加速区域填充 mainland 时，仅刷新中国境内加速节点上缓存内容填充 overseas 时，仅刷新中国境外加速节点上缓存内容指定刷新区域时，需要与域名加速区域匹配 */
  Area?: string;
  /** 是否对中文字符进行编码后刷新 */
  UrlEncode?: boolean;
}

declare interface PurgeUrlsCacheResponse {
  /** 刷新任务 ID，同一批次提交的 URL 共用一个任务 ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PushUrlsCacheRequest {
  /** URL 列表，需要包含协议头部 http:// 或 https:// */
  Urls: string[];
  /** 指定预热请求回源时 HTTP 请求的 User-Agent 头部默认为 TencentCdn */
  UserAgent?: string;
  /** 预热生效区域mainland：预热至境内节点overseas：预热至境外节点global：预热全球节点不填充情况下，默认为 mainland， URL 中域名必须在对应区域启用了加速服务才能提交对应区域的预热任务 */
  Area?: string;
  /** 中国境内区域默认预热至中间层节点，中国境外区域默认预热至边缘节点。预热至边缘产生的边缘层流量会计入计费流量。填写"middle"或不填充时，可指定预热至中间层节点。 */
  Layer?: string;
  /** 是否递归解析m3u8文件中的ts分片预热注意事项：1. 该功能要求m3u8索引文件能直接请求获取2. 当前只支持递归解析一级索引和子索引中的ts分片，递归深度不超过3层3. 解析获取的ts分片会正常累加每日预热用量，当用量超出配额时，会静默处理，不再执行预热 */
  ParseM3U8?: boolean;
  /** 是否关闭Range回源注意事项：此功能灰度发布中，敬请期待 */
  DisableRange?: boolean;
  /** 自定义 HTTP 请求头。最多定义 20 个，Name 长度不超过 128 字节，Value 长度不超过 1024 字节 */
  Headers?: HTTPHeader[];
  /** 是否对URL进行编码 */
  UrlEncode?: boolean;
}

declare interface PushUrlsCacheResponse {
  /** 此批提交的任务 ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchClsLogRequest {
  /** 需要查询的日志集ID */
  LogsetId: string;
  /** 需要查询的日志主题ID组合，以逗号分隔 */
  TopicIds: string;
  /** 需要查询的日志的起始时间，格式 YYYY-mm-dd HH:MM:SS */
  StartTime: string;
  /** 需要查询的日志的结束时间，格式 YYYY-mm-dd HH:MM:SS */
  EndTime: string;
  /** 单次要返回的日志条数，单次返回的最大条数为100 */
  Limit: number;
  /** 接入渠道，cdn或者ecdn，默认值为cdn */
  Channel?: string;
  /** 需要查询的内容，详情请参考https://cloud.tencent.com/document/product/614/16982 */
  Query?: string;
  /** 加载更多使用，透传上次返回的 context 值，获取后续的日志内容，通过游标最多可获取10000条，请尽可能缩小时间范围 */
  Context?: string;
  /** 按日志时间排序， asc（升序）或者 desc（降序），默认为 desc */
  Sort?: string;
}

declare interface SearchClsLogResponse {
  /** 查询结果 */
  Logs: ClsSearchLogs;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartCdnDomainRequest {
  /** 域名域名状态需要为【已停用】 */
  Domain: string;
}

declare interface StartCdnDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartScdnDomainRequest {
  /** 域名 */
  Domain: string;
}

declare interface StartScdnDomainResponse {
  /** 开启结果，Success表示成功 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopCdnDomainRequest {
  /** 域名域名需要为【已启动】状态 */
  Domain: string;
}

declare interface StopCdnDomainResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopScdnDomainRequest {
  /** 域名 */
  Domain: string;
}

declare interface StopScdnDomainResponse {
  /** 关闭结果，Success表示成功 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDomainConfigRequest {
  /** 域名 */
  Domain: string;
  /** 项目 ID */
  ProjectId?: number;
  /** 源站配置 */
  Origin?: Origin;
  /** IP 黑白名单配置 */
  IpFilter?: IpFilter;
  /** IP 限频配置 */
  IpFreqLimit?: IpFreqLimit;
  /** 状态码缓存配置 */
  StatusCodeCache?: StatusCodeCache;
  /** 智能压缩配置 */
  Compression?: Compression;
  /** 带宽封顶配置 */
  BandwidthAlert?: BandwidthAlert;
  /** Range 回源配置 */
  RangeOriginPull?: RangeOriginPull;
  /** 301/302 回源跟随配置 */
  FollowRedirect?: FollowRedirect;
  /** 错误码重定向配置（功能灰度中，尚未全量） */
  ErrorPage?: ErrorPage;
  /** 请求头部配置 */
  RequestHeader?: RequestHeader;
  /** 响应头部配置 */
  ResponseHeader?: ResponseHeader;
  /** 下载速度配置 */
  DownstreamCapping?: DownstreamCapping;
  /** 节点缓存键配置 */
  CacheKey?: CacheKey;
  /** 头部缓存配置 */
  ResponseHeaderCache?: ResponseHeaderCache;
  /** 视频拖拽配置 */
  VideoSeek?: VideoSeek;
  /** 缓存过期时间配置 */
  Cache?: Cache;
  /** 跨国链路优化配置（已下线） */
  OriginPullOptimization?: OriginPullOptimization;
  /** Https 加速配置 */
  Https?: Https;
  /** 时间戳防盗链配置 */
  Authentication?: Authentication;
  /** SEO 优化配置 */
  Seo?: Seo;
  /** 访问协议强制跳转配置 */
  ForceRedirect?: ForceRedirect;
  /** Referer 防盗链配置 */
  Referer?: Referer;
  /** 浏览器缓存配置（功能灰度中，尚未全量） */
  MaxAge?: MaxAge;
  /** 地域属性特殊配置适用于域名境内加速、境外加速配置不一致场景 */
  SpecificConfig?: SpecificConfig;
  /** 域名业务类型web：静态加速download：下载加速media：流媒体点播加速 */
  ServiceType?: string;
  /** 域名加速区域mainland：中国境内加速overseas：中国境外加速global：全球加速从mainland/overseas修改至global时，域名的配置将被同步至overseas/mainland。若域名含有后端特殊配置，此类配置的同步过程有一定延时，请耐心等待 */
  Area?: string;
  /** 回源超时配置 */
  OriginPullTimeout?: OriginPullTimeout;
  /** 回源S3私有鉴权 */
  AwsPrivateAccess?: AwsPrivateAccess;
  /** UA黑白名单配置 */
  UserAgentFilter?: UserAgentFilter;
  /** 访问控制 */
  AccessControl?: AccessControl;
  /** 访问URL重写配置 */
  UrlRedirect?: UrlRedirect;
  /** 访问端口配置 */
  AccessPort?: number[];
  /** 时间戳防盗链高级版配置，白名单功能 */
  AdvancedAuthentication?: AdvancedAuthentication;
  /** 回源鉴权高级版配置，白名单功能 */
  OriginAuthentication?: OriginAuthentication;
  /** Ipv6 访问配置 */
  Ipv6Access?: Ipv6Access;
  /** 离线缓存 */
  OfflineCache?: OfflineCache;
  /** 合并回源 */
  OriginCombine?: OriginCombine;
  /** POST请求传输配置 */
  PostMaxSize?: PostSize;
  /** Quic访问（收费服务，详见计费说明和产品文档） */
  Quic?: Quic;
  /** 回源OSS私有鉴权 */
  OssPrivateAccess?: OssPrivateAccess;
  /** WebSocket配置 */
  WebSocket?: WebSocket;
  /** 远程鉴权配置 */
  RemoteAuthentication?: RemoteAuthentication;
  /** 共享CNAME配置，白名单功能 */
  ShareCname?: ShareCname;
  /** 华为云对象存储回源鉴权 */
  HwPrivateAccess?: HwPrivateAccess;
  /** 七牛云对象存储回源鉴权 */
  QnPrivateAccess?: QnPrivateAccess;
}

declare interface UpdateDomainConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateImageConfigRequest {
  /** 域名 */
  Domain: string;
  /** WebpAdapter配置项 */
  WebpAdapter?: WebpAdapter;
  /** TpgAdapter配置项 */
  TpgAdapter?: TpgAdapter;
  /** GuetzliAdapter配置项 */
  GuetzliAdapter?: GuetzliAdapter;
  /** AvifAdapter配置项 */
  AvifAdapter?: AvifAdapter;
}

declare interface UpdateImageConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdatePayTypeRequest {
  /** 计费区域，mainland或overseas。 */
  Area: string;
  /** 计费类型，flux或bandwidth。 */
  PayType: string;
}

declare interface UpdatePayTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateScdnDomainRequest {
  /** 域名 */
  Domain: string;
  /** Web 攻击防护（WAF）配置 */
  Waf?: ScdnWafConfig;
  /** 自定义防护策略配置 */
  Acl?: ScdnAclConfig;
  /** CC 防护配置，目前 CC 防护默认开启 */
  CC?: ScdnConfig;
  /** DDOS 防护配置，目前 DDoS 防护默认开启 */
  Ddos?: ScdnDdosConfig;
  /** BOT 防护配置 */
  Bot?: ScdnBotConfig;
}

declare interface UpdateScdnDomainResponse {
  /** 提交结果，Success表示成功 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyDomainRecordRequest {
  /** 域名 */
  Domain: string;
  /** 验证方式dns: DNS 解析验证（默认值）file: 文件验证 */
  VerifyType?: string;
}

declare interface VerifyDomainRecordResponse {
  /** 是否验证成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cdn 内容分发网络 CDN} */
declare interface Cdn {
  (): Versions;
  /** 新增日志主题下绑定的域名 {@link AddCLSTopicDomainsRequest} {@link AddCLSTopicDomainsResponse} */
  AddCLSTopicDomains(data: AddCLSTopicDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<AddCLSTopicDomainsResponse>;
  /** 新增加速域名 {@link AddCdnDomainRequest} {@link AddCdnDomainResponse} */
  AddCdnDomain(data: AddCdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<AddCdnDomainResponse>;
  /** 创建日志主题 {@link CreateClsLogTopicRequest} {@link CreateClsLogTopicResponse} */
  CreateClsLogTopic(data: CreateClsLogTopicRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClsLogTopicResponse>;
  /** 添加诊断URL {@link CreateDiagnoseUrlRequest} {@link CreateDiagnoseUrlResponse} */
  CreateDiagnoseUrl(data: CreateDiagnoseUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDiagnoseUrlResponse>;
  /** 动态打包任务提交 {@link CreateEdgePackTaskRequest} {@link CreateEdgePackTaskResponse} */
  CreateEdgePackTask(data: CreateEdgePackTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgePackTaskResponse>;
  /** 创建SCDN域名 {@link CreateScdnDomainRequest} {@link CreateScdnDomainResponse} */
  CreateScdnDomain(data: CreateScdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScdnDomainResponse>;
  /** 重试创建事件日志任务 {@link CreateScdnFailedLogTaskRequest} {@link CreateScdnFailedLogTaskResponse} */
  CreateScdnFailedLogTask(data: CreateScdnFailedLogTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScdnFailedLogTaskResponse>;
  /** 创建事件日志任务 {@link CreateScdnLogTaskRequest} {@link CreateScdnLogTaskResponse} */
  CreateScdnLogTask(data: CreateScdnLogTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScdnLogTaskResponse>;
  /** 生成解析记录 {@link CreateVerifyRecordRequest} {@link CreateVerifyRecordResponse} */
  CreateVerifyRecord(data: CreateVerifyRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVerifyRecordResponse>;
  /** 删除加速域名 {@link DeleteCdnDomainRequest} {@link DeleteCdnDomainResponse} */
  DeleteCdnDomain(data: DeleteCdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCdnDomainResponse>;
  /** 删除日志主题 {@link DeleteClsLogTopicRequest} {@link DeleteClsLogTopicResponse} */
  DeleteClsLogTopic(data: DeleteClsLogTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClsLogTopicResponse>;
  /** 删除SCDN域名 {@link DeleteScdnDomainRequest} {@link DeleteScdnDomainResponse} */
  DeleteScdnDomain(data: DeleteScdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScdnDomainResponse>;
  /** 计费数据查询 {@link DescribeBillingDataRequest} {@link DescribeBillingDataResponse} */
  DescribeBillingData(data: DescribeBillingDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBillingDataResponse>;
  /** CC统计数据查询 {@link DescribeCcDataRequest} {@link DescribeCcDataResponse} */
  DescribeCcData(data: DescribeCcDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcDataResponse>;
  /** 访问数据查询 {@link DescribeCdnDataRequest} {@link DescribeCdnDataResponse} */
  DescribeCdnData(data: DescribeCdnDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCdnDataResponse>;
  /** 日志下载链接查询 {@link DescribeCdnDomainLogsRequest} {@link DescribeCdnDomainLogsResponse} */
  DescribeCdnDomainLogs(data: DescribeCdnDomainLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCdnDomainLogsResponse>;
  /** IP 归属查询 {@link DescribeCdnIpRequest} {@link DescribeCdnIpResponse} */
  DescribeCdnIp(data: DescribeCdnIpRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCdnIpResponse>;
  /** 查询回源节点 {@link DescribeCdnOriginIpRequest} {@link DescribeCdnOriginIpResponse} */
  DescribeCdnOriginIp(data?: DescribeCdnOriginIpRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCdnOriginIpResponse>;
  /** 获取SSL证书中的可用域名 {@link DescribeCertDomainsRequest} {@link DescribeCertDomainsResponse} */
  DescribeCertDomains(data?: DescribeCertDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCertDomainsResponse>;
  /** DDoS统计数据查询 {@link DescribeDDoSDataRequest} {@link DescribeDDoSDataResponse} */
  DescribeDDoSData(data: DescribeDDoSDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDDoSDataResponse>;
  /** 获取诊断报告 {@link DescribeDiagnoseReportRequest} {@link DescribeDiagnoseReportResponse} */
  DescribeDiagnoseReport(data: DescribeDiagnoseReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiagnoseReportResponse>;
  /** 地区运营商明细查询 {@link DescribeDistrictIspDataRequest} {@link DescribeDistrictIspDataResponse} */
  DescribeDistrictIspData(data: DescribeDistrictIspDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDistrictIspDataResponse>;
  /** 查询域名基本信息 {@link DescribeDomainsRequest} {@link DescribeDomainsResponse} */
  DescribeDomains(data?: DescribeDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainsResponse>;
  /** 查询域名详细配置 {@link DescribeDomainsConfigRequest} {@link DescribeDomainsConfigResponse} */
  DescribeDomainsConfig(data?: DescribeDomainsConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDomainsConfigResponse>;
  /** 查询事件日志统计曲线 {@link DescribeEventLogDataRequest} {@link DescribeEventLogDataResponse} */
  DescribeEventLogData(data: DescribeEventLogDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventLogDataResponse>;
  /** 获取图片优化的配置 {@link DescribeImageConfigRequest} {@link DescribeImageConfigResponse} */
  DescribeImageConfig(data: DescribeImageConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageConfigResponse>;
  /** 查询域名节点状态 {@link DescribeIpStatusRequest} {@link DescribeIpStatusResponse} */
  DescribeIpStatus(data: DescribeIpStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpStatusResponse>;
  /** 活跃用户查询 {@link DescribeIpVisitRequest} {@link DescribeIpVisitResponse} */
  DescribeIpVisit(data: DescribeIpVisitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpVisitResponse>;
  /** 省份运营商映射查询 {@link DescribeMapInfoRequest} {@link DescribeMapInfoResponse} */
  DescribeMapInfo(data: DescribeMapInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMapInfoResponse>;
  /** 回源数据查询 {@link DescribeOriginDataRequest} {@link DescribeOriginDataResponse} */
  DescribeOriginData(data: DescribeOriginDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOriginDataResponse>;
  /** 查询计费方式 {@link DescribePayTypeRequest} {@link DescribePayTypeResponse} */
  DescribePayType(data?: DescribePayTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePayTypeResponse>;
  /** 查询刷新用量配额 {@link DescribePurgeQuotaRequest} {@link DescribePurgeQuotaResponse} */
  DescribePurgeQuota(data?: DescribePurgeQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePurgeQuotaResponse>;
  /** 刷新历史查询 {@link DescribePurgeTasksRequest} {@link DescribePurgeTasksResponse} */
  DescribePurgeTasks(data?: DescribePurgeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePurgeTasksResponse>;
  /** 查询预热用量配额 {@link DescribePushQuotaRequest} {@link DescribePushQuotaResponse} */
  DescribePushQuota(data?: DescribePushQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePushQuotaResponse>;
  /** 预热历史查询 {@link DescribePushTasksRequest} {@link DescribePushTasksResponse} */
  DescribePushTasks(data?: DescribePushTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePushTasksResponse>;
  /** 查询报表数据 {@link DescribeReportDataRequest} {@link DescribeReportDataResponse} */
  DescribeReportData(data: DescribeReportDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportDataResponse>;
  /** 获取BOT统计数据列表 {@link DescribeScdnBotDataRequest} {@link DescribeScdnBotDataResponse} */
  DescribeScdnBotData(data: DescribeScdnBotDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScdnBotDataResponse>;
  /** 查询BOT会话记录列表 {@link DescribeScdnBotRecordsRequest} {@link DescribeScdnBotRecordsResponse} */
  DescribeScdnBotRecords(data: DescribeScdnBotRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScdnBotRecordsResponse>;
  /** SCDN域名配置 {@link DescribeScdnConfigRequest} {@link DescribeScdnConfigResponse} */
  DescribeScdnConfig(data: DescribeScdnConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScdnConfigResponse>;
  /** 查询SCDN安全防护IP白名单 {@link DescribeScdnIpStrategyRequest} {@link DescribeScdnIpStrategyResponse} */
  DescribeScdnIpStrategy(data?: DescribeScdnIpStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScdnIpStrategyResponse>;
  /** 获取SCDN的Top数据 {@link DescribeScdnTopDataRequest} {@link DescribeScdnTopDataResponse} */
  DescribeScdnTopData(data: DescribeScdnTopDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScdnTopDataResponse>;
  /** TOP 新版数据查询（beta版） {@link DescribeTopDataRequest} {@link DescribeTopDataResponse} */
  DescribeTopData(data: DescribeTopDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopDataResponse>;
  /** 流量包查询 {@link DescribeTrafficPackagesRequest} {@link DescribeTrafficPackagesResponse} */
  DescribeTrafficPackages(data?: DescribeTrafficPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrafficPackagesResponse>;
  /** 违规历史查询 {@link DescribeUrlViolationsRequest} {@link DescribeUrlViolationsResponse} */
  DescribeUrlViolations(data?: DescribeUrlViolationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUrlViolationsResponse>;
  /** Waf统计数据查询 {@link DescribeWafDataRequest} {@link DescribeWafDataResponse} */
  DescribeWafData(data: DescribeWafDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafDataResponse>;
  /** 禁用 URL {@link DisableCachesRequest} {@link DisableCachesResponse} */
  DisableCaches(data: DisableCachesRequest, config?: AxiosRequestConfig): AxiosPromise<DisableCachesResponse>;
  /** 停止日志主题投递 {@link DisableClsLogTopicRequest} {@link DisableClsLogTopicResponse} */
  DisableClsLogTopic(data: DisableClsLogTopicRequest, config?: AxiosRequestConfig): AxiosPromise<DisableClsLogTopicResponse>;
  /** 拷贝域名 {@link DuplicateDomainConfigRequest} {@link DuplicateDomainConfigResponse} */
  DuplicateDomainConfig(data: DuplicateDomainConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DuplicateDomainConfigResponse>;
  /** 解禁 URL {@link EnableCachesRequest} {@link EnableCachesResponse} */
  EnableCaches(data: EnableCachesRequest, config?: AxiosRequestConfig): AxiosPromise<EnableCachesResponse>;
  /** 启动日志主题投递 {@link EnableClsLogTopicRequest} {@link EnableClsLogTopicResponse} */
  EnableClsLogTopic(data: EnableClsLogTopicRequest, config?: AxiosRequestConfig): AxiosPromise<EnableClsLogTopicResponse>;
  /** 禁用历史查询 {@link GetDisableRecordsRequest} {@link GetDisableRecordsResponse} */
  GetDisableRecords(data?: GetDisableRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<GetDisableRecordsResponse>;
  /** 显示日志主题列表 {@link ListClsLogTopicsRequest} {@link ListClsLogTopicsResponse} */
  ListClsLogTopics(data?: ListClsLogTopicsRequest, config?: AxiosRequestConfig): AxiosPromise<ListClsLogTopicsResponse>;
  /** 获取日志主题下绑定的域名 {@link ListClsTopicDomainsRequest} {@link ListClsTopicDomainsResponse} */
  ListClsTopicDomains(data: ListClsTopicDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<ListClsTopicDomainsResponse>;
  /** 获取诊断任务列表 {@link ListDiagnoseReportRequest} {@link ListDiagnoseReportResponse} */
  ListDiagnoseReport(data?: ListDiagnoseReportRequest, config?: AxiosRequestConfig): AxiosPromise<ListDiagnoseReportResponse>;
  /** 查询SCDN域名列表 {@link ListScdnDomainsRequest} {@link ListScdnDomainsResponse} */
  ListScdnDomains(data?: ListScdnDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<ListScdnDomainsResponse>;
  /** 查询SCDN日志下载任务列表 {@link ListScdnLogTasksRequest} {@link ListScdnLogTasksResponse} */
  ListScdnLogTasks(data?: ListScdnLogTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListScdnLogTasksResponse>;
  /** 获取Bot攻击的Top数据列表 {@link ListScdnTopBotDataRequest} {@link ListScdnTopBotDataResponse} */
  ListScdnTopBotData(data: ListScdnTopBotDataRequest, config?: AxiosRequestConfig): AxiosPromise<ListScdnTopBotDataResponse>;
  /** 获取Bot攻击的Top信息 {@link ListTopBotDataRequest} {@link ListTopBotDataResponse} */
  ListTopBotData(data: ListTopBotDataRequest, config?: AxiosRequestConfig): AxiosPromise<ListTopBotDataResponse>;
  /** 获取CC攻击Top数据 {@link ListTopCcDataRequest} {@link ListTopCcDataResponse} */
  ListTopCcData(data: ListTopCcDataRequest, config?: AxiosRequestConfig): AxiosPromise<ListTopCcDataResponse>;
  /** 通过CLS日志计算Top信息 {@link ListTopClsLogDataRequest} {@link ListTopClsLogDataResponse} */
  ListTopClsLogData(data: ListTopClsLogDataRequest, config?: AxiosRequestConfig): AxiosPromise<ListTopClsLogDataResponse>;
  /** 获取DDoS攻击Top数据 {@link ListTopDDoSDataRequest} {@link ListTopDDoSDataResponse} */
  ListTopDDoSData(data: ListTopDDoSDataRequest, config?: AxiosRequestConfig): AxiosPromise<ListTopDDoSDataResponse>;
  /** TOP 数据查询 {@link ListTopDataRequest} {@link ListTopDataResponse} */
  ListTopData(data: ListTopDataRequest, config?: AxiosRequestConfig): AxiosPromise<ListTopDataResponse>;
  /** 获取Waf攻击Top数据 {@link ListTopWafDataRequest} {@link ListTopWafDataResponse} */
  ListTopWafData(data: ListTopWafDataRequest, config?: AxiosRequestConfig): AxiosPromise<ListTopWafDataResponse>;
  /** 管理日志主题下绑定的域名 {@link ManageClsTopicDomainsRequest} {@link ManageClsTopicDomainsResponse} */
  ManageClsTopicDomains(data: ManageClsTopicDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<ManageClsTopicDomainsResponse>;
  /** 上报定时刷新预热任务执行状态 {@link ModifyPurgeFetchTaskStatusRequest} {@link ModifyPurgeFetchTaskStatusResponse} */
  ModifyPurgeFetchTaskStatus(data: ModifyPurgeFetchTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPurgeFetchTaskStatusResponse>;
  /** 刷新目录 {@link PurgePathCacheRequest} {@link PurgePathCacheResponse} */
  PurgePathCache(data: PurgePathCacheRequest, config?: AxiosRequestConfig): AxiosPromise<PurgePathCacheResponse>;
  /** 刷新 URL {@link PurgeUrlsCacheRequest} {@link PurgeUrlsCacheResponse} */
  PurgeUrlsCache(data: PurgeUrlsCacheRequest, config?: AxiosRequestConfig): AxiosPromise<PurgeUrlsCacheResponse>;
  /** 预热 URL {@link PushUrlsCacheRequest} {@link PushUrlsCacheResponse} */
  PushUrlsCache(data: PushUrlsCacheRequest, config?: AxiosRequestConfig): AxiosPromise<PushUrlsCacheResponse>;
  /** 搜索CLS日志 {@link SearchClsLogRequest} {@link SearchClsLogResponse} */
  SearchClsLog(data: SearchClsLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchClsLogResponse>;
  /** 启用加速域名 {@link StartCdnDomainRequest} {@link StartCdnDomainResponse} */
  StartCdnDomain(data: StartCdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<StartCdnDomainResponse>;
  /** 启动SCDN域名安全防护 {@link StartScdnDomainRequest} {@link StartScdnDomainResponse} */
  StartScdnDomain(data: StartScdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<StartScdnDomainResponse>;
  /** 停用加速域名 {@link StopCdnDomainRequest} {@link StopCdnDomainResponse} */
  StopCdnDomain(data: StopCdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<StopCdnDomainResponse>;
  /** 停止SCDN域名安全防护 {@link StopScdnDomainRequest} {@link StopScdnDomainResponse} */
  StopScdnDomain(data: StopScdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<StopScdnDomainResponse>;
  /** 更新加速域名配置 {@link UpdateDomainConfigRequest} {@link UpdateDomainConfigResponse} */
  UpdateDomainConfig(data: UpdateDomainConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDomainConfigResponse>;
  /** 更新图片优化配置 {@link UpdateImageConfigRequest} {@link UpdateImageConfigResponse} */
  UpdateImageConfig(data: UpdateImageConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateImageConfigResponse>;
  /** 修改计费类型 {@link UpdatePayTypeRequest} {@link UpdatePayTypeResponse} */
  UpdatePayType(data: UpdatePayTypeRequest, config?: AxiosRequestConfig): AxiosPromise<UpdatePayTypeResponse>;
  /** 更新SCDN域名配置 {@link UpdateScdnDomainRequest} {@link UpdateScdnDomainResponse} */
  UpdateScdnDomain(data: UpdateScdnDomainRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateScdnDomainResponse>;
  /** 验证域名解析 {@link VerifyDomainRecordRequest} {@link VerifyDomainRecordResponse} */
  VerifyDomainRecord(data: VerifyDomainRecordRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyDomainRecordResponse>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  TcbCheckResource(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  TcbModifyAttribute(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
  /** abstract via [@wxcloud/cloudapi@1.1.3](https://www.npmjs.com/package/@wxcloud/cloudapi) */
  TcbPurge(data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
}

export declare type Versions = ["2018-06-06"];

export default Cdn;
