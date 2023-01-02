/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface QueryLoginProtectionRequest {
  /** 登录来源的外网 IP。 */
  LoginIp: string;
  /** 用户 ID 不同的 accountType 对应不同的用户 ID。如果是 QQ，则填入对应的 openid，微信用户则填入对应的 openid/unionid，手机号则填入对应真实用户手机号（如13123456789）。 */
  Uid: string;
  /** 登录时间戳，单位：秒。 */
  LoginTime: string;
  /** 用户账号类型（QQ 开放帐号、微信开放账号需要 提交工单 由腾讯云进行资格审核）：1：QQ 开放帐号。2：微信开放账号。4：手机号。0：其他。10004：手机号 MD5。 */
  AccountType: string;
  /** accountType 是 QQ 或微信开放账号时，该参数必填，表示 QQ 或微信分配给网站或应用的 AppID，用来唯一标识网站或应用。 */
  AppIdU?: string;
  /** accountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号 ID。 */
  AssociateAccount?: string;
  /** 昵称，UTF-8 编码。 */
  NickName?: string;
  /** 手机号：国家代码-手机号， 如0086-15912345687（0086前不需要+号）。 */
  PhoneNumber?: string;
  /** 用户邮箱地址（非系统自动生成）。 */
  EmailAddress?: string;
  /** 注册来源的外网 IP。 */
  RegisterTime?: string;
  /** 地址。 */
  Address?: string;
  /** 用户 HTTP 请求中的 cookie 进行2次 hash 的值，只要保证相同 cookie 的 hash 值一致即可。 */
  CookieHash?: string;
  /** 登录来源：0：其他1：PC 网页2：移动页面3：App4：微信公众号 */
  LoginSource?: string;
  /** 登录方式：0：其他1：手动帐号密码输入2：动态短信密码登录3：二维码扫描登录 */
  LoginType?: string;
  /** 用户 HTTP 请求的 referer 值。 */
  Referer?: string;
  /** 登录成功后跳转页面。 */
  JumpUrl?: string;
  /** 用户 HTTP 请求的 userAgent。 */
  UserAgent?: string;
  /** 用户 HTTP 请求中的 x_forward_for。 */
  XForwardedFor?: string;
  /** 用户操作过程中鼠标单击次数。 */
  MouseClickCount?: string;
  /** 用户操作过程中键盘单击次数。 */
  KeyboardClickCount?: string;
  /** 注册结果：0：失败1：成功 */
  Result?: string;
  /** 失败原因：0：其他1：参数错误2：帐号冲突3：验证错误 */
  Reason?: string;
  /** 登录耗时，单位：秒。 */
  LoginSpend?: string;
  /** MAC 地址或设备唯一标识。 */
  MacAddress?: string;
  /** 手机制造商 ID，如果手机注册，请带上此信息。 */
  VendorId?: string;
  /** App 客户端版本。 */
  AppVersion?: string;
  /** 手机设备号。 */
  Imei?: string;
  /** 业务 ID 网站或应用在多个业务中使用此服务，通过此 ID 区分统计数据。 */
  BusinessId?: string;
  /** 1：微信公众号2：微信小程序 */
  WxSubType?: string;
  /** Token 签名随机数，微信小程序必填，建议16个字符。 */
  RandNum?: string;
  /** 如果是微信小程序，该字段为以 ssesion_key 为 key 去签名随机数radnNum得到的值（hmac_sha256 签名算法）。如果是微信公众号或第三方登录，则为授权的 access_token（注意：不是普通 access_token，具体看 微信官方文档）。 */
  WxToken?: string;
}

declare interface QueryLoginProtectionResponse {
  /** AssociateAccountaccountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号 ID。LoginTime操作时间。Uid用户 ID 不同的 accountType 对应不同的用户 ID。如果是 QQ，则填入对应的 openid，微信用户则填入对应的 openid/unionid，手机号则填入对应真实用户手机号（如13123456789）。LoginIp登录 IP。Level0：表示无恶意。1 - 4：恶意等级由低到高。RiskType风险类型。出参不用填"Req业务侧错误码。成功时返回 Success，错误时返回具体业务错误原因。uestId"等公共出参， 详细解释>>> */
  CodeDesc?: string | null;
  /** accountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号 ID。 */
  AssociateAccount?: string | null;
  /** 操作时间。 */
  LoginTime?: string | null;
  /** 用户 ID 不同的 accountType 对应不同的用户 ID。如果是 QQ，则填入对应的 openid，微信用户则填入对应的 openid/unionid，手机号则填入对应真实用户手机号（如13123456789）。 */
  Uid?: string | null;
  /** 登录 IP。 */
  LoginIp?: string | null;
  /** 0：表示无恶意。1 - 4：恶意等级由低到高。 */
  Level?: number;
  /** 风险类型。 */
  RiskType?: number[];
  /** accountType 是 QQ 或微信开放账号时，用于标识 QQ 或微信用户登录后关联业务自身的账号 ID。 */
  RootId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Lp 登录保护} */
declare interface Lp {
  (): Versions;
  /** 登录保护 {@link QueryLoginProtectionRequest} {@link QueryLoginProtectionResponse} */
  QueryLoginProtection(data: QueryLoginProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<QueryLoginProtectionResponse>;
}

export declare type Versions = ["2020-02-24"];

export default Lp;
