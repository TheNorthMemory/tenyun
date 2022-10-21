/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 账号信息。 */
declare interface AccountInfo {
  /** 账号类型 */
  AccountType: number;
  /** QQ账号信息，AccountType是1时，该字段必填。 */
  QQAccount?: QQAccountInfo;
  /** 微信账号信息，AccountType是2时，该字段必填。 */
  WeChatAccount?: WeChatAccountInfo;
  /** 其它账号信息，AccountType是0、4、8或10004时，该字段必填。 */
  OtherAccount?: OtherAccountInfo;
}

/** 全栈式风控引擎入参 */
declare interface InputCryptoManageMarketingRisk {
  /** 是否授权 */
  IsAuthorized?: string;
  /** 加密类型 */
  CryptoType?: string;
  /** 加密内容 */
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
  /** 账号信息。 */
  Account: AccountInfo;
  /** 场景类型：场景SceneCode, 控制台上新建对应的场景并获取对应的值；例如：e_register_protection_1521184361控制台链接：https://console.cloud.tencent.com/rce/risk/sceneroot； */
  SceneCode: string;
  /** 登录来源的外网IP */
  UserIp: string;
  /** 时间戳 */
  PostTime: number;
  /** 用户唯一标识。 */
  UserId?: string;
  /** 设备指纹token。 */
  DeviceToken?: string;
  /** 设备指纹BusinessId */
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
  /** 设备类型：1：Android2：IOS */
  DeviceType?: number;
  /** 详细信息 */
  Details?: InputDetails[];
  /** 可选填写。详情请跳转至SponsorInfo查看。 */
  Sponsor?: SponsorInfo;
  /** 可选填写。详情请跳转至OnlineScamInfo查看。 */
  OnlineScam?: OnlineScamInfo;
  /** 平台: 1android */
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
  /** id */
  AccountId: string;
  /** 手机号 */
  MobilePhone?: string;
  /** id */
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
  /** 账号ID。对应输入参数：AccountType是1时，对应QQ的OpenID。AccountType是2时，对应微信的OpenID/UnionID。AccountType是4时，对应手机号。AccountType是8时，对应imei、idfa、imeiMD5或者idfaMD5。AccountType是0时，对应账号信息。AccountType是10004时，对应手机号的MD5。 */
  UserId: string | null;
  /** 操作时间戳，单位秒（对应输入参数）。 */
  PostTime: number | null;
  /** 对应输入参数，AccountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号ID。 */
  AssociateAccount: string | null;
  /** 操作来源的外网IP（对应输入参数）。 */
  UserIp: string | null;
  /** 风险值pass : 无恶意review：需要人工审核reject：拒绝，高风险恶意 */
  RiskLevel: string | null;
  /** 风险类型，请参考官网风险类型账号风险 1 账号信用低,账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素11 疑似 低活跃账号,账号活跃度与正常用户有差异2 垃圾账号 疑似批量注册小号，近期存在严重违规或大量举报21 疑似小号 账号有疑似线上养号，小号等行为22 疑似违规账号 账号曾有违规行为、曾被举报过、曾因违规被处罚过等3 无效账号 送检账号参数无法成功解析，请检查微信 openid 是否有误/appid与QQopenid无法关联/微信openid权限是否有开通/手机号是否为中国大陆手机号；4 黑名单 该账号在业务侧有过拉黑记录5 白名单 业务自行有添加过白名单记录行为风险 101 批量操作 存在 ip/设备/环境等因素的聚集性异常1011 疑似 IP 属性聚集，出现 IP 聚集1012 疑似 设备属性聚集 出现设备聚集102 自动机 疑似自动机批量请求103 恶意行为-网赚 疑似网赚104 微信登录态无效 检查 WeChatAccessToken 参数，是否已经失效；201 环境风险 环境异常 操作 ip/设备/环境存在异常。当前 ip 为非常用 ip 或恶意 ip 段2011 疑似 非常用IP 请求 当前请求 IP 非该账号常用 IP2012 疑似 IP 异常 使用 idc 机房 ip 或 使用代理 ip 或 使用恶意 ip 等205 非公网有效ip 传进来的 IP 地址为内网 ip 地址或者 ip 保留地址；设备风险206 设备异常 该设备存在异常的使用行为2061 疑似 非常用设备 当前请求的设备非该账号常用设备2062 疑似 虚拟设备 请求设备为模拟器、脚本、云设备等虚拟设备2063 疑似 群控设备 请求设备为猫池、手机墙等群控设备 */
  RiskType: number[] | null;
  /** 唯一ID */
  ConstId: string | null;
}

/** QQ账号信息。 */
declare interface QQAccountInfo {
  /** QQ的OpenID。 */
  QQOpenId: string;
  /** QQ分配给网站或应用的AppId，用来唯一标识网站或应用。 */
  AppIdUser: string;
  /** 用于标识QQ用户登录后所关联业务自身的账号ID。 */
  AssociateAccount?: string;
  /** 账号绑定的手机号。 */
  MobilePhone?: string;
  /** 用户设备号。 */
  DeviceId?: string;
}

/** 网赚防刷相关参数 */
declare interface SponsorInfo {
  /** OpenID */
  SponsorOpenId?: string;
  /** 设备号 */
  SponsorDeviceNumber?: string;
  /** 手机号 */
  SponsorPhone?: string;
  /** IP */
  SponsorIp?: string;
  /** 链接 */
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
  /** token */
  WeChatAccessToken?: string;
  /** 用于标识微信用户登录后所关联业务自身的账号ID。 */
  AssociateAccount?: string;
  /** 账号绑定的手机号。 */
  MobilePhone?: string;
  /** 用户设备号。 */
  DeviceId?: string;
}

declare interface DescribeRiskAssessmentRequest {
}

declare interface DescribeRiskAssessmentResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRiskTrendsRequest {
  /** 业务入参 */
  BusinessSecurityData: InputFrontRisk;
}

declare interface DescribeRiskTrendsResponse {
  /** 业务出参 */
  Data?: OutputFrontRiskData;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [全栈式风控引擎](https://cloud.tencent.com/document/product/1343) */
declare interface Rce {
  (): Versions;
  /** 查询风险评估结果 */
  DescribeRiskAssessment(data?: DescribeRiskAssessmentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskAssessmentResponse>;
  /** 风险趋势统计 */
  DescribeRiskTrends(data: DescribeRiskTrendsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRiskTrendsResponse>;
  /** 全栈式风控引擎 */
  ManageMarketingRisk(data: ManageMarketingRiskRequest, config?: AxiosRequestConfig): AxiosPromise<ManageMarketingRiskResponse>;
}

export declare type Versions = ["2020-11-03"];

export default Rce;
