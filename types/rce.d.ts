/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账号信息。 */
declare interface AccountInfo {
  /** 用户账号类型；默认开通QQOpenId、手机号MD5权限；如果需要使用微信OpenId入参，则需要"提交工单"或联系对接人进行资格审核，审核通过后方可正常使用微信开放账号。1：QQ开放账号2：微信开放账号10004：手机号MD5，中国大陆11位手机号进行MD5加密，取32位小写值10005：手机号SHA256，中国大陆11位手机号进行SHA256加密，取64位小写值 */
  AccountType: number;
  /** QQ账号信息，AccountType是"1"时，该字段必填。 */
  QQAccount?: QQAccountInfo;
  /** 微信账号信息，AccountType是"2"时，该字段必填。 */
  WeChatAccount?: WeChatAccountInfo;
  /** 其它账号信息，AccountType是10004或10005时，该字段必填。 */
  OtherAccount?: OtherAccountInfo;
}

/** 数据授权信息 */
declare interface DataAuthorizationInfo {
  /** 客户主体名称。示例值：某某有限公司。 */
  DataProviderName: string;
  /** 接收方主体名称。固定填：腾讯云计算（北京）有限责任公司示例值：腾讯云计算（北京）有限责任公司 */
  DataRecipientName: string;
  /** 客户请求RCE所涉及的用户敏感数据类型，支持多选。实际以接口请求传参为准。1-手机号；2-微信开放账号；3-QQ开放账号；4-IP地址；5-设备指纹；999-其它；示例值：[1, 4] */
  UserDataType: number[];
  /** 客户是否已经获取用户授权。1-已授权；其它值为未授权。示例值：1 */
  IsAuthorize: number;
  /** 是否是用户个人敏感数据。固定填：1。示例值：1 */
  IsPersonalData: number;
  /** 客户获得的用户授权期限时间戳（单位秒）。不填默认无固定期限。示例值：1719805604 */
  AuthorizationTerm?: number;
  /** 客户获得用户授权所依赖的协议地址。示例值：https://www.*****.com/***** */
  PrivacyPolicyLink?: string;
}

/** 全栈式风控引擎入参 */
declare interface InputCryptoManageMarketingRisk {
  /** 是否授权：1已授权，否则未授权。 调用全栈式风控引擎接口服务时，客户需先明确授权 */
  IsAuthorized?: string;
  /** 加密类型：1AES加密 */
  CryptoType?: string;
  /** 加密内容，非空时接口采用加密模式。 */
  CryptoContent?: string;
}

/** 入参的详细参数信息 */
declare interface InputDetails {
  /** 字段名称 */
  FieldName: string;
  /** 字段值 */
  FieldValue: string;
}

/** 全栈式风控引擎入参 */
declare interface InputManageMarketingRisk {
  /** 用户账号类型；默认开通QQOpenId、手机号MD5权限；如果需要使用微信OpenId入参，则需要"提交工单"或联系对接人进行资格审核，审核通过后方可正常使用微信开放账号。1：QQ开放账号2：微信开放账号10004：手机号MD5，中国大陆11位手机号进行MD5加密，取32位小写值10005：手机号SHA256，中国大陆11位手机号进行SHA256加密，取64位小写值 */
  Account: AccountInfo;
  /** 场景码，用于识别和区分不同的业务场景，可在控制台上新建和管理控制台链接：https://console.cloud.tencent.com/rce/risk/strategy/scene-root活动防刷默认场景码：e_activity_antirush 登录保护默认场景码：e_login_protection注册保护默认场景码：e_register_protection */
  SceneCode: string;
  /** 用户外网ip（传入用户非外网ip会影响判断结果）。 */
  UserIp: string;
  /** 用户操作时间戳，精确到秒。 */
  PostTime: number;
  /** 业务平台用户唯一标识，支持自定义。 */
  UserId?: string;
  /** 设备指纹DeviceToken值，集成设备指纹后获取；如果集成了相应的设备指纹，该字段必填。 */
  DeviceToken?: string;
  /** 设备指纹 BusinessId。 */
  DeviceBusinessId?: number;
  /** 业务ID。网站或应用在多个业务中使用此服务，通过此ID区分统计数据。 */
  BusinessId?: number;
  /** 昵称，UTF-8 编码。 */
  Nickname?: string;
  /** 用户邮箱地址。 */
  EmailAddress?: string;
  /** 是否识别设备异常：0：不识别。1：识别。 */
  CheckDevice?: number;
  /** 用户HTTP请求中的Cookie进行2次hash的值，只要保证相同Cookie的hash值一致即可。 */
  CookieHash?: string;
  /** 用户HTTP请求的Referer值。 */
  Referer?: string;
  /** 用户HTTP请求的User-Agent值。 */
  UserAgent?: string;
  /** 用户HTTP请求的X-Forwarded-For值。 */
  XForwardedFor?: string;
  /** MAC地址或设备唯一标识。 */
  MacAddress?: string;
  /** 手机制造商ID，如果手机注册，请带上此信息。 */
  VendorId?: string;
  /** 设备类型(已不推荐使用)。 */
  DeviceType?: number;
  /** 扩展字段。 */
  Details?: InputDetails[];
  /** 邀请助力场景相关信息。 */
  Sponsor?: SponsorInfo;
  /** 详情请跳转至OnlineScamInfo查看。 */
  OnlineScam?: OnlineScamInfo;
  /** 1：Android2：iOS3：H54：小程序 */
  Platform?: string;
  /** 数据授权信息。 */
  DataAuthorization?: DataAuthorizationInfo;
}

/** 诈骗信息。 */
declare interface OnlineScamInfo {
  /** 内容标签。 */
  ContentLabel?: string;
  /** 内容风险等级：0：正常。1：可疑。 */
  ContentRiskLevel?: number;
  /** 内容产生形式：0：对话。1：广播。 */
  ContentType?: number;
  /** 类型 */
  FraudType?: number;
  /** 账号 */
  FraudAccount?: string;
}

/** 其它账号信息。 */
declare interface OtherAccountInfo {
  /** 其他账号信息；AccountType是10004时，填入中国大陆标准11位手机号的MD5值AccountType是10005时，填入中国大陆标准11位手机号的SHA256值注释：MD5手机号加密方式，使用中国大陆11位手机号进行MD5加密，加密后取32位小写值。SHA256手机号加密方式，使用中国大陆11位手机号进行SHA256加密，加密后取64位小写值。 */
  AccountId: string;
  /** 账号绑定的MD5或SHA256加密的手机号（该字段已不推荐使用）。注释：支持标准中国大陆11位手机号MD5加密后位的32位小写字符串； 支持标准中国大陆11位手机号SHA256加密后位的64位小写字符串。 */
  MobilePhone?: string;
  /** 用户设备号（该字段已不推荐使用）。 */
  DeviceId?: string;
}

/** 全栈式风控引擎出参 */
declare interface OutputManageMarketingRisk {
  /** 错误码，0 表示成功，非0表示失败错误码。0：成功1：错误1002：参数错误4300：未开通服务4301：后端未创建对应产品 */
  Code?: number | null;
  /** UTF-8编码，出错消息。 */
  Message?: string | null;
  /** 业务详情。 */
  Value?: OutputManageMarketingRiskValue | null;
  /** 控制台显示的req_id。 */
  UUid?: string | null;
}

/** 全栈式风控引擎出参值 */
declare interface OutputManageMarketingRiskValue {
  /** 账号ID：对应输入参数。当AccountType为1时，对应QQ的OpenId；当AccountType为2时，对应微信的OpenId/UnionId；当AccountType为10004时，对应手机号的MD5值；当AccountType为10005时，对应手机号的SHA256值。 */
  UserId?: string | null;
  /** 操作时间戳，单位秒（对应输入参数）。 */
  PostTime?: number | null;
  /** 业务参数。 */
  AssociateAccount?: string | null;
  /** 操作来源的外网IP（对应输入参数）。 */
  UserIp?: string | null;
  /** 风险等级pass：无恶意review：低风险，需要人工审核reject：高风险，建议拦截 */
  RiskLevel?: string | null;
  /** 风险类型，可能同时命中多个风险类型1: 账号信用低，账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素。11: 疑似低活跃账号，账号活跃度与正常用户有差异。2: 垃圾账号，疑似批量注册小号，近期存在严重违规或大量举报。21: 疑似小号，账号有疑似线上养号，小号等行为。22: 疑似违规账号，账号曾有违规行为、曾被举报过、曾因违规被处罚过等。3: 无效账号，送检账号参数无法成功解析，请检查微信 OpenId 是否有误/AppId 与 QQ OpenId 无法关联/微信 OpenId 权限是否开通/手机号是否为中国大陆手机号；4: 黑名单，该账号在业务侧有过拉黑记录。5: 白名单，业务自行有添加过白名单记录。101: 批量操作，存在 IP/设备/环境等因素的聚集性异常。1011: 疑似 IP 属性聚集，出现 IP 聚集。1012: 疑似设备属性聚集，出现设备聚集。102: 自动机，疑似自动机批量请求。103: 恶意行为-网赚，疑似网赚。104: 微信登录态无效，检查 WeChatAccessToken 参数，是否已经失效。201: 环境风险，环境异常操作 IP/设备/环境存在异常。当前 IP 为非常用 IP 或恶意 IP 段。2011: 疑似非常用IP，请求当前请求 IP 非该账号常用 IP。2012: 疑似 IP 异常，使用 IDC 机房 IP 或使用代理 IP 或使用恶意 IP 等。205: 非公网有效 IP，传进来的 IP 地址为内网 IP 地址或者 IP 保留地址。 */
  RiskType?: number[] | null;
  /** 设备指纹ID，如果集成了设备指纹，并传入了正确的DeviceToken和Platform，该字段正常输出；如果DeviceToken异常（校验不通过），则会在RiskType中返回"-1"标签，ConstId字段为空；如果没有集成设备指纹ConstId字段默认为空。 */
  ConstId?: string | null;
  /** 风险扩展数据。 */
  RiskInformation?: string | null;
}

/** QQ账号信息。 */
declare interface QQAccountInfo {
  /** QQ的OpenId。 */
  QQOpenId: string;
  /** QQ分配给网站或应用的AppId，用来唯一标识网站或应用。 */
  AppIdUser: string;
  /** 用于标识QQ用户登录后所关联业务自身的账号ID。 */
  AssociateAccount?: string;
  /** 账号绑定的MD5或SHA256加密的手机号。注释：支持标准中国大陆11位手机号MD5加密后位的32位小写字符串； 支持标准中国大陆11位手机号SHA256加密后位的64位小写字符串。 */
  MobilePhone?: string;
  /** 用户设备号（已不推荐使用）。 */
  DeviceId?: string;
}

/** 网赚防刷相关参数 */
declare interface SponsorInfo {
  /** 助力场景建议填写：活动发起人微信OpenId。 */
  SponsorOpenId?: string;
  /** 助力场景建议填写：发起人设备号 */
  SponsorDeviceNumber?: string;
  /** 助力场景建议填写：发起人的MD5手机号 */
  SponsorPhone?: string;
  /** 助力场景建议填写：发起人IP */
  SponsorIp?: string;
  /** 助力场景建议填写：活动链接 */
  CampaignUrl?: string;
}

/** 微信账号信息。 */
declare interface WeChatAccountInfo {
  /** 微信的OpenId/UnionId。 */
  WeChatOpenId: string;
  /** 微信开放账号类型：1：微信公众号/微信第三方登录。2：微信小程序。 */
  WeChatSubType?: number;
  /** 随机串。如果WeChatSubType是2，该字段必填。Token签名随机数，建议16个字符。 */
  RandStr?: string;
  /** 如果WeChatSubType 是1，填入授权的 access_token（注意：不是普通 access_token，详情请参阅官方说明文档。获取网页版本的 access_token 时，scope 字段必需填写snsapi_userinfo如果WeChatSubType是2，填入以session_key 为密钥签名随机数RandStr（hmac_sha256签名算法）得到的字符串。 */
  WeChatAccessToken?: string;
  /** 用于标识微信用户登录后所关联业务自身的账号ID。 */
  AssociateAccount?: string;
  /** 账号绑定的MD5或SHA256加密的手机号。注释：支持标准中国大陆11位手机号MD5加密后位的32位小写字符串； 支持标准中国大陆11位手机号SHA256加密后位的64位小写字符串。 */
  MobilePhone?: string;
  /** 用户设备号（已不推荐使用）。 */
  DeviceId?: string;
}

declare interface ManageMarketingRiskRequest {
  /** 业务入参 */
  BusinessSecurityData?: InputManageMarketingRisk;
  /** 业务入参 */
  BusinessCryptoData?: InputCryptoManageMarketingRisk;
}

declare interface ManageMarketingRiskResponse {
  /** 业务出参 */
  Data?: OutputManageMarketingRisk;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Rce 全栈式风控引擎} */
declare interface Rce {
  (): Versions;
  /** 全栈式风控引擎 {@link ManageMarketingRiskRequest} {@link ManageMarketingRiskResponse} */
  ManageMarketingRisk(data?: ManageMarketingRiskRequest, config?: AxiosRequestConfig): AxiosPromise<ManageMarketingRiskResponse>;
}

export declare type Versions = ["2020-11-03"];

export default Rce;
