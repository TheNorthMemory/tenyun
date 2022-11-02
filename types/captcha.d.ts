/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** DescribeCaptchaOperData方法 拦截情况type = 2 返回的数据结构 */
declare interface CaptchaOperDataInterceptUnit {
  /** 时间 */
  DateKey: string;
  /** 停止验证数量 */
  AllStopCnt: number;
  /** 图片停止加载数量 */
  PicStopCnt: number;
  /** 策略拦截数量 */
  StrategyStopCnt: number;
}

/** 操作数据查询方法DescribeCaptchaOperData 的返回结果，安全验证码加载耗时type = 1 */
declare interface CaptchaOperDataLoadTimeUnit {
  /** 时间 */
  DateKey: string;
  /** Market加载时间 */
  MarketLoadTime: number;
  /** AppId加载时间 */
  AppIdLoadTime: number;
}

/** DescribeCaptchaOperData 接口 返回数据类型集合 */
declare interface CaptchaOperDataRes {
  /** 验证码加载耗时数据返回 */
  OperDataLoadTimeUnitArray: CaptchaOperDataLoadTimeUnit[] | null;
  /** 验证码拦截情况数据返回 */
  OperDataInterceptUnitArray: CaptchaOperDataInterceptUnit[] | null;
  /** 验证码尝试次数数据返回 */
  OperDataTryTimesUnitArray: CaptchaOperDataTryTimesUnit[] | null;
  /** 验证码尝试次数分布数据返回 */
  OperDataTryTimesDistributeUnitArray: CaptchaOperDataTryTimesDistributeUnit[] | null;
}

/** DescribeCaptchaOperData方法 尝试次数分布 type = 4 */
declare interface CaptchaOperDataTryTimesDistributeUnit {
  /** 尝试次数 */
  TryCount: number;
  /** 用户请求数量 */
  UserCount: number;
}

/** DescribeCaptchaOperData操作数据查询尝试次数 type = 3 */
declare interface CaptchaOperDataTryTimesUnit {
  /** 时间 */
  DateKey: string;
  /** 平均尝试次数 */
  CntPerPass: number[];
  /** market平均尝试次数 */
  MarketCntPerPass: number;
}

/** 该类型为DescribeCaptchaData 方法返回数据类型 */
declare interface CaptchaQueryData {
  /** 数量 */
  Cnt: number;
  /** 时间 */
  Date: string;
}

/** 验证码统计图Obj */
declare interface CaptchaStatisticObj {
  /** 请求总量 */
  ActionTotal: number;
  /** 验证总量 */
  VerifyTotal: number;
  /** 验证通过总量 */
  VerifyThroughTotal: number;
  /** 验证拦截总量 */
  VerifyInterceptTotal: number;
  /** 票据校验总量 */
  TicketTotal: number;
  /** 票据通过总量 */
  TicketThroughTotal: number;
  /** 票据拦截总量 */
  TicketInterceptTotal: number;
  /** 请求趋势图 */
  RequestTrend: RequestTrendObj[] | null;
  /** 拦截率趋势图 */
  InterceptPerTrend: InterceptPerTrendObj[] | null;
  /** 票据校验趋势图 */
  TicketCheckTrend: TicketCheckTrendObj[] | null;
}

/** DescribeCaptchaTicketData 接口 返回数据类型集合 */
declare interface CaptchaTicketDataRes {
  /** 票据验证总量返回 */
  TicketAmountArray: TicketAmountUnit[];
  /** 票据验证通过量返回 */
  TicketThroughArray: TicketThroughUnit[];
  /** 票据验证拦截量返回 */
  TicketInterceptArray: TicketInterceptUnit[];
}

/** 用户注册的APPID和应用名称对象 */
declare interface CaptchaUserAllAppId {
  /** 验证码应用ID */
  CaptchaAppId: number;
  /** 注册应用名称 */
  AppName: string;
  /** 腾讯云APPID */
  TcAppId: number;
  /** 渠道信息 */
  ChannelInfo: string;
}

/** 拦截率趋势obj */
declare interface InterceptPerTrendObj {
  /** 时间参数 */
  Ftime: string;
  /** 拦截率 */
  RequestInterceptPer: number;
  /** 答案拦截率 */
  AnswerInterceptPer: number;
  /** 策略拦截率 */
  PolicyInterceptPer: number;
}

/** 拦截策略返回信息 */
declare interface OutputManageMarketingRiskValue {
  /** 账号 ID。对应输入参数： AccountType 是 1 时，对应 QQ 的 OpenID。AccountType 是 2 时，对应微信的 OpenID/UnionID。AccountType 是 4 时，对应手机号。AccountType 是 8 时，对应 imei、idfa、imeiMD5 或者 idfaMD5。AccountType 是 0 时，对应账号信息。AccountType 是 10004 时，对应手机号的 MD5。 */
  UserId: string | null;
  /** 操作时间戳，单位秒（对应输入参数）。 */
  PostTime: number | null;
  /** 对应输入参数，AccountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录 后关联业务自身的账号 ID。 */
  AssociateAccount: string | null;
  /** 业务详情。 */
  UserIp: string | null;
  /** 风险值 pass : 无恶意review：需要人工审核reject：拒绝，高风险恶意 */
  RiskLevel: string | null;
  /** 风险类型，请查看下面详细说明 账号风险 账号信用低	1	账号近期存在因恶意被处罚历史，网络低活跃，被举报等因素	疑似 低活跃账号	11	账号活跃度与正常用户有差异	垃圾账号	2	疑似批量注册小号，近期存在严重违规或大量举报	疑似小号	21	账号有疑似线上养号，小号等行为	疑似 违规账号	22	账号曾有违规行为、曾被举报过、曾因违规被处罚过等	无效账号	3	送检账号参数无法成功解析，请检查微信 openid 是否有	黑名单	4	该账号在业务侧有过拉黑记录	白名单 5	业务自行有添加过白名单记录行为风险 批量操作	101	存在 ip/设备/环境等因素的聚集性异常	疑似 IP 属性聚集 1011	出现 IP 聚集	疑似 设备属性聚集 1012	出现设备聚集	自动机 103	疑似自动机批量请求	微信登录态无效 104	检查 wxtoken 参数，是否已经失效环境风险 环境异常 201	操作 ip/设备/环境存在异常。当前 ip 为非常用 ip 或恶意 ip 段	疑似 非常用IP请求 2011	当前请求 IP 非该账号常用 IP	疑似 IP 异常 2012	使用 idc 机房 ip 或 使用代理 ip 或 使用恶意 ip 非公网有效 ip 205	传进来的 IP 地址为内网 ip 地址或者 ip 保留地 */
  RiskType: number[] | null;
}

/** 验证码请求趋势图obj */
declare interface RequestTrendObj {
  /** 时间参数 */
  Ftime: string;
  /** 请求量 */
  RequestAction: number;
  /** 验证量 */
  RequestVerify: number;
  /** 通过量 */
  RequestThroughput: number;
  /** 拦截量 */
  RequestIntercept: number;
}

/** DescribeCaptchaTicketData 返回的数据结构 */
declare interface TicketAmountUnit {
  /** 时间 */
  DateKey: string;
  /** 票据验证总量 */
  Amount: number;
}

/** 验证码票据校验趋势obj */
declare interface TicketCheckTrendObj {
  /** 时间参数 */
  Ftime: string;
  /** 票据校验量 */
  TicketCount: number;
  /** 票据通过量 */
  TicketThroughput: number;
  /** 票据拦截量 */
  TicketIntercept: number;
}

/** DescribeCaptchaTicketData 返回的数据结构 */
declare interface TicketInterceptUnit {
  /** 时间 */
  DateKey: string;
  /** 票据验证拦截量 */
  Intercept: number;
}

/** DescribeCaptchaTicketData 返回的数据结构 */
declare interface TicketThroughUnit {
  /** 时间 */
  DateKey: string;
  /** 票据验证的通过量 */
  Through: number;
}

declare interface DescribeCaptchaAppIdInfoRequest {
  /** 验证码应用注册APPID */
  CaptchaAppId: number;
}

declare interface DescribeCaptchaAppIdInfoResponse {
  /** 界面风格 */
  SchemeColor?: string;
  /** 语言 */
  Language?: number;
  /** 场景 */
  SceneType?: number;
  /** 防控风险等级 */
  EvilInterceptGrade?: number;
  /** 智能验证 */
  SmartVerify?: number;
  /** 智能引擎 */
  SmartEngine?: number;
  /** 验证码类型 */
  CapType?: number;
  /** 应用名称 */
  AppName?: string;
  /** 域名限制 */
  DomainLimit?: string;
  /** 邮件告警 */
  MailAlarm?: string[] | null;
  /** 流量控制 */
  TrafficThreshold?: number;
  /** 加密key */
  EncryptKey?: string;
  /** 是否全屏 */
  TopFullScreen?: number;
  /** 成功返回0 其它失败 */
  CaptchaCode?: number;
  /** 返回操作信息 */
  CaptchaMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaDataRequest {
  /** 验证码应用ID */
  CaptchaAppId: number;
  /** 查询开始时间 */
  Start: number;
  /** 查询结束时间 */
  End: number;
  /** 查询类型 */
  Type: number;
}

declare interface DescribeCaptchaDataResponse {
  /** 返回码 0 成功 其它失败 */
  CaptchaCode?: number;
  /** 数据数组 */
  Data?: CaptchaQueryData[] | null;
  /** 返回信息描述 */
  CaptchaMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaDataSumRequest {
  /** 验证码应用ID */
  CaptchaAppId: number;
  /** 查询开始时间 */
  Start: number;
  /** 查询结束时间 */
  End: number;
}

declare interface DescribeCaptchaDataSumResponse {
  /** 请求总量 */
  GetSum: number;
  /** 请求验证成功量 */
  VfySuccSum: number;
  /** 请求验证量 */
  VfySum: number;
  /** 拦截攻击量 */
  AttackSum: number;
  /** 返回信息 */
  CaptchaMsg: string | null;
  /** 成功返回0 其它失败 */
  CaptchaCode: number;
  /** 票据校验总量 */
  CheckTicketSum: number;
  /** 票据验证通过量 */
  TicketThroughputSum: number;
  /** 票据验证拦截量 */
  TicketInterceptSum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaMiniDataRequest {
  /** 验证码应用ID */
  CaptchaAppId: number;
  /** 查询开始时间 例如：2019112900 */
  Start: number;
  /** 查询结束时间 例如：2019112902 */
  End: number;
  /** 查询类型 安全验证码小程序插件分类查询数据接口，请求量type=0、通过量type=1、验证量type=2、拦截量type=3 小时级查询（五小时左右延迟） */
  Type: number;
}

declare interface DescribeCaptchaMiniDataResponse {
  /** 返回码 0 成功 其它失败 */
  CaptchaCode: number;
  /** 数据数组 */
  Data: CaptchaQueryData[] | null;
  /** 返回信息描述 */
  CaptchaMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaMiniDataSumRequest {
  /** 验证码应用ID */
  CaptchaAppId: number;
  /** 查询开始时间 */
  Start: number;
  /** 查询结束时间 */
  End: number;
}

declare interface DescribeCaptchaMiniDataSumResponse {
  /** 请求总量 */
  GetSum?: number | null;
  /** 请求验证成功量 */
  VfySuccSum?: number | null;
  /** 请求验证量 */
  VfySum?: number | null;
  /** 拦截攻击量 */
  AttackSum?: number | null;
  /** 返回信息 */
  CaptchaMsg?: string | null;
  /** 成功返回0 其它失败 */
  CaptchaCode?: number | null;
  /** 票据校验总量 */
  CheckTicketSum?: number | null;
  /** 票据验证通过量 */
  TicketThroughputSum?: number | null;
  /** 票据验证拦截量 */
  TicketInterceptSum?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaMiniOperDataRequest {
  /** 验证码应用ID */
  CaptchaAppId: number;
  /** 查询开始时间 */
  Start: number;
  /** 查询类型 */
  Type: number;
  /** 查询结束时间 */
  End?: number;
}

declare interface DescribeCaptchaMiniOperDataResponse {
  /** 成功返回 0 其它失败 */
  CaptchaCode: number;
  /** 返回信息 */
  CaptchaMsg: string | null;
  /** 用户操作数据 */
  Data: CaptchaOperDataRes | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaMiniResultRequest {
  /** 固定填值：9（滑块验证码） */
  CaptchaType: number;
  /** 验证码返回给用户的票据 */
  Ticket: string;
  /** 业务侧获取到的验证码使用者的外网IP */
  UserIp: string;
  /** 验证码应用ID。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到CaptchaAppId。 */
  CaptchaAppId: number;
  /** 验证码应用密钥。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到AppSecretKey。AppSecretKey属于服务器端校验验证码票据的密钥，请妥善保密，请勿泄露给第三方。 */
  AppSecretKey: string;
  /** 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据 */
  BusinessId?: number;
  /** 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据 */
  SceneId?: number;
  /** mac 地址或设备唯一标识 */
  MacAddress?: string;
  /** 手机设备号 */
  Imei?: string;
}

declare interface DescribeCaptchaMiniResultResponse {
  /** 1 ticket verification succeeded 票据验证成功7 CaptchaAppId does not match 票据与验证码应用APPID不匹配8 ticket expired 票据超时10 ticket format error 票据格式不正确15 ticket decryption failed 票据解密失败16 CaptchaAppId wrong format 检查验证码应用APPID错误21 ticket error 票据验证错误25 invalid ticket 无效票据26 system internal error 系统内部错误31 UnauthorizedOperation.Unauthorized	无有效套餐包/账户已欠费100 param err 参数校验错误 */
  CaptchaCode: number;
  /** 状态描述及验证错误信息 */
  CaptchaMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaMiniRiskResultRequest {
  /** 固定填值：9（滑块验证码） */
  CaptchaType: number;
  /** 验证码返回给用户的票据 */
  Ticket: string;
  /** 业务侧获取到的验证码使用者的外网IP */
  UserIp: string;
  /** 验证码应用APPID */
  CaptchaAppId: number;
  /** 用于服务器端校验验证码票据的验证密钥，请妥善保密，请勿泄露给第三方 */
  AppSecretKey: string;
  /** 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据 */
  BusinessId?: number;
  /** 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据 */
  SceneId?: number;
  /** mac 地址或设备唯一标识 */
  MacAddress?: string;
  /** 手机设备号 */
  Imei?: string;
  /** 验证场景：1 活动防刷场景，2 登录保护场景，3 注册保护场景。根据需求选择场景参数。 */
  SceneCode?: number;
  /** 用户操作来源的微信开放账号 */
  WeChatOpenId?: string;
}

declare interface DescribeCaptchaMiniRiskResultResponse {
  /** 1 ticket verification succeeded 票据验证成功7 CaptchaAppId does not match 票据与验证码应用APPID不匹配8 ticket expired 票据超时10 ticket format error 票据格式不正确15 ticket decryption failed 票据解密失败16 CaptchaAppId wrong format 检查验证码应用APPID错误21 ticket error 票据验证错误25 bad visitor 策略拦截26 system internal error 系统内部错误100 param err 参数校验错误 */
  CaptchaCode: number;
  /** 状态描述及验证错误信息 */
  CaptchaMsg: string | null;
  /** 拦截策略返回信息 */
  ManageMarketingRiskValue: OutputManageMarketingRiskValue | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaOperDataRequest {
  /** 验证码应用ID */
  CaptchaAppId: number;
  /** 查询开始时间 */
  Start: number;
  /** 查询类型 */
  Type: number;
  /** 查询结束时间 */
  End?: number;
}

declare interface DescribeCaptchaOperDataResponse {
  /** 成功返回 0 其它失败 */
  CaptchaCode: number;
  /** 返回信息 */
  CaptchaMsg: string | null;
  /** 用户操作数据 */
  Data: CaptchaOperDataRes | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaResultRequest {
  /** 固定填值：9。可在控制台配置不同验证码类型。 */
  CaptchaType: number;
  /** 前端回调函数返回的用户验证票据 */
  Ticket: string;
  /** 业务侧获取到的验证码使用者的外网IP */
  UserIp: string;
  /** 前端回调函数返回的随机字符串 */
  Randstr: string;
  /** 验证码应用ID。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到CaptchaAppId。 */
  CaptchaAppId: number;
  /** 验证码应用密钥。登录 [验证码控制台](https://console.cloud.tencent.com/captcha/graphical)，在验证列表的【密钥】列，即可查看到AppSecretKey。AppSecretKey属于服务器端校验验证码票据的密钥，请妥善保密，请勿泄露给第三方。 */
  AppSecretKey: string;
  /** 业务 ID，网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据 */
  BusinessId?: number;
  /** 场景 ID，网站或应用的业务下有多个场景使用此服务，通过此 ID 区分统计数据 */
  SceneId?: number;
  /** mac 地址或设备唯一标识 */
  MacAddress?: string;
  /** 手机设备号 */
  Imei?: string;
  /** 是否返回前端获取验证码时间，取值1：需要返回 */
  NeedGetCaptchaTime?: number;
}

declare interface DescribeCaptchaResultResponse {
  /** 1 OK 验证通过7 captcha no match 传入的Randstr不合法，请检查Randstr是否与前端返回的Randstr一致8 ticket expired 传入的Ticket已过期（Ticket有效期5分钟），请重新生成Ticket、Randstr进行校验9 ticket reused 传入的Ticket被重复使用，请重新生成Ticket、Randstr进行校验15 decrypt fail 传入的Ticket不合法，请检查Ticket是否与前端返回的Ticket一致16 appid-ticket mismatch 传入的CaptchaAppId错误，请检查CaptchaAppId是否与前端传入的CaptchaAppId一致，并且保障CaptchaAppId是从验证码控制台【验证管理】->【基础配置】中获取21 diff 票据校验异常，可能的原因是（1）若Ticket包含terror前缀，一般是由于用户网络较差，导致前端自动容灾，而生成了容灾票据，业务侧可根据需要进行跳过或二次处理。（2）若Ticket不包含terror前缀，则是由于验证码风控系统发现请求有安全风险，业务侧可根据需要进行拦截。100 appid-secretkey-ticket mismatch 参数校验错误，（1）请检查CaptchaAppId与AppSecretKey是否正确，CaptchaAppId、AppSecretKey需要在验证码控制台【验证管理】>【基础配置】中获取（2）请检查传入的Ticket是否由传入的CaptchaAppId生成 */
  CaptchaCode: number;
  /** 状态描述及验证错误信息 */
  CaptchaMsg: string | null;
  /** 无感验证模式下，该参数返回验证结果：EvilLevel=0 请求无恶意EvilLevel=100 请求有恶意 */
  EvilLevel: number | null;
  /** 前端获取验证码时间，时间戳格式 */
  GetCaptchaTime: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaTicketDataRequest {
  /** 验证码应用ID */
  CaptchaAppId: number;
  /** 查询开始时间 例如：20200909 */
  Start: number;
  /** 查询结束时间 例如：20220314 */
  End?: number;
}

declare interface DescribeCaptchaTicketDataResponse {
  /** 成功返回 0 其它失败 */
  CaptchaCode: number;
  /** 返回信息 */
  CaptchaMsg: string | null;
  /** 验证码票据信息 */
  Data: CaptchaTicketDataRes | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCaptchaUserAllAppIdRequest {
}

declare interface DescribeCaptchaUserAllAppIdResponse {
  /** 用户注册的所有Appid和应用名称 */
  Data?: CaptchaUserAllAppId[] | null;
  /** 成功返回 0 其它失败 */
  CaptchaCode?: number;
  /** 返回操作信息 */
  CaptchaMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTicketStatisticsRequest {
  /** 验证码appid */
  CaptchaAppId: string;
  /** 开始时间字符串 */
  StartTimeStr: string;
  /** 结束时间字符串 */
  EndTimeStr: string;
  /** 查询粒度 */
  Dimension: string;
}

declare interface GetTicketStatisticsResponse {
  /** 查询后数据块 */
  Data: CaptchaStatisticObj | null;
  /** 验证码返回码 */
  CaptchaCode: number;
  /** 验证码返回信息 */
  CaptchaMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetTotalTicketStatisticsRequest {
  /** 开始时间 */
  StartTimeStr: string;
  /** 结束时间 */
  EndTimeStr: string;
  /** 查询粒度分钟：“1”小时：“2”天：“3” */
  Dimension: string;
}

declare interface GetTotalTicketStatisticsResponse {
  /** 返回数据 */
  Data: CaptchaStatisticObj | null;
  /** 返回码 */
  CaptchaCode: number;
  /** 返回信息 */
  CaptchaMsg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCaptchaAppIdInfoRequest {
  /** 验证码应用ID */
  CaptchaAppId: number;
  /** 应用名 */
  AppName: string;
  /** 域名限制 */
  DomainLimit: string;
  /** 场景类型 */
  SceneType: number;
  /** 验证码类型 */
  CapType: number;
  /** 风险级别 */
  EvilInterceptGrade: number;
  /** 智能检测 */
  SmartVerify: number;
  /** 开启智能引擎 */
  SmartEngine: number;
  /** web风格 */
  SchemeColor: string;
  /** 语言 */
  CaptchaLanguage: number;
  /** 告警邮箱 */
  MailAlarm: string;
  /** 是否全屏 */
  TopFullScreen: number;
  /** 流量限制 */
  TrafficThreshold: number;
}

declare interface UpdateCaptchaAppIdInfoResponse {
  /** 返回码 0 成功，其它失败 */
  CaptchaCode?: number;
  /** 返回操作信息 */
  CaptchaMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Captcha 验证码} */
declare interface Captcha {
  (): Versions;
  /** {@link DescribeCaptchaAppIdInfo 查询安全验证码应用APPId信息}({@link DescribeCaptchaAppIdInfoRequest 请求参数}): {@link DescribeCaptchaAppIdInfoResponse 返回参数} */
  DescribeCaptchaAppIdInfo(data: DescribeCaptchaAppIdInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaAppIdInfoResponse>;
  /** {@link DescribeCaptchaData 安全验证码分类查询数据接口}({@link DescribeCaptchaDataRequest 请求参数}): {@link DescribeCaptchaDataResponse 返回参数} */
  DescribeCaptchaData(data: DescribeCaptchaDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaDataResponse>;
  /** {@link DescribeCaptchaDataSum 安全验证码查询请求数据概况}({@link DescribeCaptchaDataSumRequest 请求参数}): {@link DescribeCaptchaDataSumResponse 返回参数} */
  DescribeCaptchaDataSum(data: DescribeCaptchaDataSumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaDataSumResponse>;
  /** {@link DescribeCaptchaMiniData 安全验证码小程序插件分类查询数据接口}({@link DescribeCaptchaMiniDataRequest 请求参数}): {@link DescribeCaptchaMiniDataResponse 返回参数} */
  DescribeCaptchaMiniData(data: DescribeCaptchaMiniDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaMiniDataResponse>;
  /** {@link DescribeCaptchaMiniDataSum 安全验证码小程序插件查询请求数据概况}({@link DescribeCaptchaMiniDataSumRequest 请求参数}): {@link DescribeCaptchaMiniDataSumResponse 返回参数} */
  DescribeCaptchaMiniDataSum(data: DescribeCaptchaMiniDataSumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaMiniDataSumResponse>;
  /** {@link DescribeCaptchaMiniOperData 安全验证码小程序插件用户操作数据查询}({@link DescribeCaptchaMiniOperDataRequest 请求参数}): {@link DescribeCaptchaMiniOperDataResponse 返回参数} */
  DescribeCaptchaMiniOperData(data: DescribeCaptchaMiniOperDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaMiniOperDataResponse>;
  /** {@link DescribeCaptchaMiniResult 核查验证码票据结果(小程序插件)}({@link DescribeCaptchaMiniResultRequest 请求参数}): {@link DescribeCaptchaMiniResultResponse 返回参数} */
  DescribeCaptchaMiniResult(data: DescribeCaptchaMiniResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaMiniResultResponse>;
  /** {@link DescribeCaptchaMiniRiskResult 核查验证码小程序插件票据接入风控结果(Beta)}({@link DescribeCaptchaMiniRiskResultRequest 请求参数}): {@link DescribeCaptchaMiniRiskResultResponse 返回参数} */
  DescribeCaptchaMiniRiskResult(data: DescribeCaptchaMiniRiskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaMiniRiskResultResponse>;
  /** {@link DescribeCaptchaOperData 安全验证码用户操作数据查询}({@link DescribeCaptchaOperDataRequest 请求参数}): {@link DescribeCaptchaOperDataResponse 返回参数} */
  DescribeCaptchaOperData(data: DescribeCaptchaOperDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaOperDataResponse>;
  /** {@link DescribeCaptchaResult 核查验证码票据结果(Web及APP)}({@link DescribeCaptchaResultRequest 请求参数}): {@link DescribeCaptchaResultResponse 返回参数} */
  DescribeCaptchaResult(data: DescribeCaptchaResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaResultResponse>;
  /** {@link DescribeCaptchaTicketData 安全验证码用户操作票据数据查询}({@link DescribeCaptchaTicketDataRequest 请求参数}): {@link DescribeCaptchaTicketDataResponse 返回参数} */
  DescribeCaptchaTicketData(data: DescribeCaptchaTicketDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaTicketDataResponse>;
  /** {@link DescribeCaptchaUserAllAppId 安全验证码获取用户注册所有APPId和应用名称}({@link DescribeCaptchaUserAllAppIdRequest 请求参数}): {@link DescribeCaptchaUserAllAppIdResponse 返回参数} */
  DescribeCaptchaUserAllAppId(data?: DescribeCaptchaUserAllAppIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCaptchaUserAllAppIdResponse>;
  /** {@link GetTicketStatistics 查询单个票据校验统计}({@link GetTicketStatisticsRequest 请求参数}): {@link GetTicketStatisticsResponse 返回参数} */
  GetTicketStatistics(data: GetTicketStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<GetTicketStatisticsResponse>;
  /** {@link GetTotalTicketStatistics 查询整体票据校验统计（控制台2.0-当前版本）}({@link GetTotalTicketStatisticsRequest 请求参数}): {@link GetTotalTicketStatisticsResponse 返回参数} */
  GetTotalTicketStatistics(data: GetTotalTicketStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<GetTotalTicketStatisticsResponse>;
  /** {@link UpdateCaptchaAppIdInfo 更新验证码应用APPId信息}({@link UpdateCaptchaAppIdInfoRequest 请求参数}): {@link UpdateCaptchaAppIdInfoResponse 返回参数} */
  UpdateCaptchaAppIdInfo(data: UpdateCaptchaAppIdInfoRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCaptchaAppIdInfoResponse>;
}

export declare type Versions = ["2019-07-22"];

export default Captcha;
