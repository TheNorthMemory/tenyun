/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账号信息。 */
declare interface AccountInfo {
  /** 用户账号类型（默认开通QQopenid、手机号MD5；如需使用微信开放账号，则需要"提交工单"或联系对接人进行资格审核，审核通过后方可正常使用微信开放账号）1：QQ开放账号2：微信开放账号8：设备号（imei/imeiMD5/idfa/idfaMd5）10004：手机号MD5，中国大陆11位手机号进行MD5加密，取32位小写值 */
  AccountType: number;
  /** QQ账号信息，AccountType是1时，该字段必填。 */
  QQAccount?: QQAccountInfo;
  /** 微信账号信息，AccountType是2时，该字段必填。 */
  WeChatAccount?: WeChatAccountInfo;
  /** 其它账号信息，AccountType是8或10004时，该字段必填。 */
  OtherAccount?: OtherAccountInfo;
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

/** 风险趋势统计--入参 */
declare interface InputFrontRisk {
  /** 事件ID */
  EventId: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 趋势类型 */
  Type?: number;
  /** 当前开始时间 */
  CurrentStartTime?: string;
  /** 当前结束时间 */
  CurrentEndTime?: string;
}

/** 全栈式风控引擎入参 */
declare interface InputManageMarketingRisk {
  /** 用户账号类型（默认开通 QQ 开放账号，手机 MD5 账号类型查询。如需使用微信开放账号，则需要 提交工单 由腾讯云进行资格审核，审核通过后方可正常使用微信开放账号）： 1：QQ 开放账号；2：微信开放账号；8：设备号（imei/imeiMD5/idfa/idfaMd5）；10004：手机号 MD5。 */
  Account: AccountInfo;
  /** 场景码，用于识别和区分不同的业务场景，可在控制台上新建和管理控制台链接：https://console.cloud.tencent.com/rce/risk/strategy/scene-root活动防刷默认场景码：e_activity_antirush 登陆保护默认场景码：e_login_protection注册保护默认场景码：e_register_protection */
  SceneCode: string;
  /** 用户外网ip（传入用户非外网ip会影响判断结果）。 */
  UserIp: string;
  /** 用户操作时间戳，精确到秒。 */
  PostTime: number;
  /** 业务平台用户唯一标识。 */
  UserId?: string;
  /** 设备指纹Devicetoken值，集成设备指纹后获取，如果集成了相应的设备指纹，该字段必填。 */
  DeviceToken?: string;
  /** 设备指纹 BusinessId。 */
  DeviceBusinessId?: number;
  /** 业务ID。网站或应用在多个业务中使用此服务，通过此ID区分统计数据。 */
  BusinessId?: number;
  /** 昵称，UTF-8 编码。 */
  Nickname?: string;
  /** 用户邮箱地址（非系统自动生成）。 */
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
  /** 设备类型，账号类型（AccountType）为8时填写。1:Imei；国际移动设备识别号（15-17位数字）；2:ImeiMd5；国际移动设备识别号，通过MD5加密后取32位小写值；3:Idfa；4:IdfaMD5； 国际移动设备识别号，通过MD5加密后取32位小写值。 */
  DeviceType?: number;
  /** 扩展字段。 */
  Details?: InputDetails[];
  /** 邀请助力场景相关信息。 */
  Sponsor?: SponsorInfo;
  /** 详情请跳转至OnlineScamInfo查看。 */
  OnlineScam?: OnlineScamInfo;
  /** 1：安卓；2：iOS ；3：H5 ；4：小程序 。 */
  Platform?: string;
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
  /** 其他账号信息；AccountType是8时，填入设备号（imei/imeimd5/idfa/idfamd5）AccountType是10004时，填入中国大陆标准11位手机号的MD5值注释：MD5手机号加密方式，中国大陆11位手机号进行MD5加密，加密后取32位小写值imeiMD5/IdfaMd5加密方式，对imei/IdfaMd5明文进行MD5加密，加密后取32位小写值。 */
  AccountId: string;
  /** MD5手机号,AccountType是10004时，此处无需重复填写。 */
  MobilePhone?: string;
  /** 用户设备号，AccountType是8时，此处无需重复填写。 */
  DeviceId?: string;
}

/** 风险趋势统计出参，需要为数组 */
declare interface OutputFrontRisk {
  /** 名称 */
  Name: string | null;
  /** 参数值 */
  Value: OutputFrontRiskValue[] | null;
}

/** 风险趋势统计--出参 */
declare interface OutputFrontRiskData {
  /** 返回码[0：成功；非0：标识失败错误码]。 */
  Code: number | null;
  /** 出错消息[UTF-8编码]。 */
  Message: string | null;
  /** 返回结果。 */
  Value: OutputFrontRisk[] | null;
}

/** 风险趋势统计--值 */
declare interface OutputFrontRiskValue {
  /** 请求次数 */
  Requests: number | null;
  /** 日期标签 */
  Index: string | null;
}

/** 全栈式风控引擎出参 */
declare interface OutputManageMarketingRisk {
  /** 返回码。0表示成功，非0标识失败错误码。 */
  Code: number | null;
  /** UTF-8编码，出错消息。 */
  Message: string | null;
  /** 业务详情。 */
  Value: OutputManageMarketingRiskValue | null;
  /** 控制台显示的req_id。 */
  UUid: string | null;
}

/** 全栈式风控引擎出参值 */
declare interface OutputManageMarketingRiskValue {
  /** 账号ID。对应输入参数：AccountType是1时，对应QQ的OpenID。AccountType是2时，对应微信的OpenID/UnionID。AccountType是8时，对应imei、idfa、imeiMD5或者idfaMD5。AccountType是10004时，对应手机号的MD5。 */
  UserId?: string | null;
  /** 操作时间戳，单位秒（对应输入参数）。 */
  PostTime?: number | null;
  /** 业务参数。 */
  AssociateAccount?: string | null;
  /** 操作来源的外网IP（对应输入参数）。 */
  UserIp?: string | null;
  /** 风险等级pass：无恶意review：低风险，需要人工审核reject：高风险，建议拦截 */
  RiskLevel?: string | null;
  /** 风险类型，请参考官网风险类型账号风险 1 账号信用低,账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素11 疑似 低活跃账号,账号活跃度与正常用户有差异2 垃圾账号 疑似批量注册小号，近期存在严重违规或大量举报21 疑似小号 账号有疑似线上养号，小号等行为22 疑似违规账号 账号曾有违规行为、曾被举报过、曾因违规被处罚过等3 无效账号 送检账号参数无法成功解析，请检查微信 openid 是否有误/appid与QQopenid无法关联/微信openid权限是否有开通/手机号是否为中国大陆手机号；4 黑名单 该账号在业务侧有过拉黑记录5 白名单 业务自行有添加过白名单记录行为风险 101 批量操作 存在 ip/设备/环境等因素的聚集性异常1011 疑似 IP 属性聚集，出现 IP 聚集1012 疑似 设备属性聚集 出现设备聚集102 自动机 疑似自动机批量请求103 恶意行为-网赚 疑似网赚104 微信登录态无效 检查 WeChatAccessToken 参数，是否已经失效；201 环境风险 环境异常 操作 ip/设备/环境存在异常。当前 ip 为非常用 ip 或恶意 ip 段2011 疑似 非常用IP 请求 当前请求 IP 非该账号常用 IP2012 疑似 IP 异常 使用 idc 机房 ip 或 使用代理 ip 或 使用恶意 ip 等205 非公网有效ip 传进来的 IP 地址为内网 ip 地址或者 ip 保留地址；设备风险206 设备异常 该设备存在异常的使用行为2061 疑似 非常用设备 当前请求的设备非该账号常用设备2062 疑似 虚拟设备 请求设备为模拟器、脚本、云设备等虚拟设备2063 疑似 群控设备 请求设备为猫池、手机墙等群控设备 */
  RiskType?: number[] | null;
  /** 设备指纹ID，如果集成了设备指纹，并传入了正确的DeviceToken和Platform，该字段正常输出；如果DeviceToken异常（校验不通过），则会在RiskType中返回"-1"标签，ConstId字段为空；如果没有集成设备指纹ConstId字段默认为空。 */
  ConstId?: string | null;
  /** 风险扩展数据。 */
  RiskInformation?: string | null;
}

/** QQ账号信息。 */
declare interface QQAccountInfo {
  /** QQ的OpenID。 */
  QQOpenId: string;
  /** QQ分配给网站或应用的AppId，用来唯一标识网站或应用。 */
  AppIdUser: string;
  /** 用于标识QQ用户登录后所关联业务自身的账号ID。 */
  AssociateAccount?: string;
  /** 账号绑定的MD5手机号，注释：只支中国大陆11位手机号MD5加密后位的32位小写字符串。 */
  MobilePhone?: string;
  /** 用户设备号，支持imei/imeiMD5/Idfa/IdfaMd5注释：imeiMD5/IdfaMd5加密方式，对imei/IdfaMd5明文进行MD5加密，加密后取32位小写值。 */
  DeviceId?: string;
}

/** 网赚防刷相关参数 */
declare interface SponsorInfo {
  /** 助力场景建议填写：活动发起人微信 OpenID */
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
  /** 微信的OpenID/UnionID 。 */
  WeChatOpenId: string;
  /** 微信开放账号类型：1：微信公众号/微信第三方登录。2：微信小程序。 */
  WeChatSubType?: number;
  /** 随机串。如果WeChatSubType是2，该字段必填。Token签名随机数，建议16个字符。 */
  RandStr?: string;
  /** 如果WeChatSubType 是1，填入授权的 access_token（注意：不是普通 access_token，详情请参阅官方说明文档。获取网页版本的 access_token 时，scope 字段必需填写snsapi_userinfo如果WeChatSubType是2，填入以session_key 为密钥签名随机数RandStr（hmac_sha256签名算法）得到的字符串。 */
  WeChatAccessToken?: string;
  /** 用于标识微信用户登录后所关联业务自身的账号ID。 */
  AssociateAccount?: string;
  /** 账号绑定的MD5手机号，注释：只支持标准中国大陆11位手机号MD5加密后位的32位小写字符串。 */
  MobilePhone?: string;
  /** 用户设备号，支持imei/imeiMD5/Idfa/IdfaMd5注释：imeiMD5/IdfaMd5加密方式，对imei/IdfaMd5明文进行MD5加密，加密后取32位小写值。 */
  DeviceId?: string;
}

declare interface DescribeRiskAssessmentRequest {
}

declare interface DescribeRiskAssessmentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRiskTrendsRequest {
  /** 业务入参 */
  BusinessSecurityData: InputFrontRisk;
}

declare interface DescribeRiskTrendsResponse {
  /** 业务出参 */
  Data?: OutputFrontRiskData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ManageMarketingRiskRequest {
  /** 业务入参 */
  BusinessSecurityData?: InputManageMarketingRisk;
  /** 业务入参 */
  BusinessCryptoData?: InputCryptoManageMarketingRisk;
}

declare interface ManageMarketingRiskResponse {
  /** 业务出参 */
  Data: OutputManageMarketingRisk;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Rce 全栈式风控引擎} */
declare interface Rce {
  (): Versions;
  /** 查询风险评估结果 {@link DescribeRiskAssessmentRequest} {@link DescribeRiskAssessmentResponse} */
  DescribeRiskAssessment(data?: DescribeRiskAssessmentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskAssessmentResponse>;
  /** 风险趋势统计 {@link DescribeRiskTrendsRequest} {@link DescribeRiskTrendsResponse} */
  DescribeRiskTrends(data: DescribeRiskTrendsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskTrendsResponse>;
  /** 全栈式风控引擎 {@link ManageMarketingRiskRequest} {@link ManageMarketingRiskResponse} */
  ManageMarketingRisk(data?: ManageMarketingRiskRequest, config?: AxiosRequestConfig): AxiosPromise<ManageMarketingRiskResponse>;
}

export declare type Versions = ["2020-11-03"];

export default Rce;
