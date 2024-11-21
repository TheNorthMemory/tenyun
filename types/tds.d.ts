/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 数据授权信息 */
declare interface DataAuthorizationInfo {
  /** 数据委托方、需求方：客户主体名称。 */
  DataProviderName: string;
  /** 数据受托方、提供方：腾讯云主体名称。固定填：腾讯云计算（北京）有限责任公司 */
  DataRecipientName: string;
  /** 客户请求所涉及的用户个人信息类型，支持多选。实际以接口请求传参为准。1-手机号；2-微信开放账号；3-QQ开放账号；4-IP地址； */
  UserDataType: number[];
  /** 客户是否已按合规指南要求获取用户授权，同意客户委托腾讯云处理入参信息，结合已合法收集的用户数据进行必要处理得出服务结果，并返回给客户。1-已授权；其它值为未授权。 */
  IsAuthorize: number;
  /** 客户获得的用户授权期限时间戳（单位秒）。不填或0默认无固定期限。 */
  AuthorizationTerm?: number;
  /** 客户获得用户授权所依赖的协议地址。 */
  PrivacyPolicyLink?: string;
}

/** 风险信息 */
declare interface RiskInfo {
  /** 风险类型。更多详情请参见：[Android](https://cloud.tencent.com/document/product/1628/85898)、[iOS](https://cloud.tencent.com/document/product/1628/85896)、[H5](https://cloud.tencent.com/document/product/1628/85897)、[小程序](https://cloud.tencent.com/document/product/1628/85895)、[场景风险](https://cloud.tencent.com/document/product/1628/88912) */
  Type?: number;
  /** [风险等级](https://cloud.tencent.com/document/product/1628/85308) */
  Level?: number;
}

declare interface DescribeFraudBaseRequest {
  /** 客户端通过SDK获取的设备Token */
  DeviceToken: string;
}

declare interface DescribeFraudBaseResponse {
  /** App版本信息 */
  AppVersion: string;
  /** 品牌 */
  Brand: string;
  /** 客户端IP */
  ClientIp: string;
  /** 机型 */
  Model: string;
  /** 网络类型 */
  NetworkType: string;
  /** 应用包名 */
  PackageName: string;
  /** 平台（2-Android，3-iOS，4-H5，5-微信小程序） */
  Platform: string;
  /** 系统版本 */
  SystemVersion: string;
  /** SDK版本号 */
  SdkBuildNo: string;
  /** 实时风险信息 */
  RiskInfos: RiskInfo[];
  /** 离线风险信息 */
  HistRiskInfos: RiskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFraudPremiumRequest {
  /** 客户端通过SDK获取的设备Token */
  DeviceToken: string;
}

declare interface DescribeFraudPremiumResponse {
  /** App版本信息 */
  AppVersion: string;
  /** 品牌 */
  Brand: string;
  /** 客户端IP */
  ClientIp: string;
  /** 机型 */
  Model: string;
  /** 网络类型 */
  NetworkType: string;
  /** 应用包名 */
  PackageName: string;
  /** 平台（2-Android，3-iOS，4-H5，5-微信小程序） */
  Platform: string;
  /** 系统版本 */
  SystemVersion: string;
  /** SDK版本号 */
  SdkBuildNo: string;
  /** 实时风险信息 */
  RiskInfos: RiskInfo[];
  /** 离线风险信息 */
  HistRiskInfos: RiskInfo[];
  /** 设备匿名标识 */
  Openid: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFraudUltimateRequest {
  /** 客户端通过SDK获取的设备Token */
  DeviceToken: string;
  /** 使用场景。目前仅支持login-登录场景、register-注册场景 */
  SceneCode: string;
  /** 用户唯一标识 */
  UserId: string;
  /** 事件时间戳（毫秒） */
  EventTime: number;
  /** 事件耗时（毫秒），例如进入登录界面到点击登录按钮耗时 */
  ElapsedTime?: number;
  /** 微信的OpenId */
  WeChatOpenId?: string;
  /** 手机号码（注：不需要带国家代码 例如：13430421011）。可以传入原文或MD5 */
  PhoneNumber?: string;
  /** 客户端IP */
  ClientIP?: string;
  /** QQ的OpenId */
  QQOpenId?: string;
  /** 数据授权信息 */
  DataAuthorization?: DataAuthorizationInfo;
}

declare interface DescribeFraudUltimateResponse {
  /** App版本信息 */
  AppVersion?: string;
  /** 品牌 */
  Brand?: string;
  /** 客户端IP */
  ClientIp?: string;
  /** 机型 */
  Model?: string;
  /** 网络类型 */
  NetworkType?: string;
  /** 应用包名 */
  PackageName?: string;
  /** 平台（2-Android，3-iOS，4-H5，5-微信小程序） */
  Platform?: string;
  /** 系统版本 */
  SystemVersion?: string;
  /** SDK版本号 */
  SdkBuildNo?: string;
  /** 实时风险信息 */
  RiskInfos?: RiskInfo[];
  /** 离线风险信息 */
  HistRiskInfos?: RiskInfo[];
  /** 设备匿名标识 */
  Openid?: string;
  /** 场景风险信息 */
  SceneRiskInfos?: RiskInfo[];
  /** 建议等级。1-极差，2-较差，3-中等，4-良好，5-优秀 */
  SuggestionLevel?: number;
  /** 图灵盾统一ID */
  Unionid?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrustedIDRequest {
  /** 客户端通过SDK获取的设备Token */
  DeviceToken: string;
}

declare interface DescribeTrustedIDResponse {
  /** 设备匿名标识 */
  Openid: string;
  /** App版本信息 */
  AppVersion: string;
  /** 品牌 */
  Brand: string;
  /** 客户端IP */
  ClientIp: string;
  /** 机型 */
  Model: string;
  /** 网络类型 */
  NetworkType: string;
  /** 应用包名 */
  PackageName: string;
  /** 平台（2-Android，3-iOS，4-H5，5-微信小程序） */
  Platform: string;
  /** 系统版本 */
  SystemVersion: string;
  /** SDK版本号 */
  SdkBuildNo: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tds 设备安全} */
declare interface Tds {
  (): Versions;
  /** 查询设备风险 {@link DescribeFraudBaseRequest} {@link DescribeFraudBaseResponse} */
  DescribeFraudBase(data: DescribeFraudBaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFraudBaseResponse>;
  /** 查询设备标识及风险 {@link DescribeFraudPremiumRequest} {@link DescribeFraudPremiumResponse} */
  DescribeFraudPremium(data: DescribeFraudPremiumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFraudPremiumResponse>;
  /** 查询设备标识及风险（旗舰版） {@link DescribeFraudUltimateRequest} {@link DescribeFraudUltimateResponse} */
  DescribeFraudUltimate(data: DescribeFraudUltimateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFraudUltimateResponse>;
  /** 查询设备标识 {@link DescribeTrustedIDRequest} {@link DescribeTrustedIDResponse} */
  DescribeTrustedID(data: DescribeTrustedIDRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrustedIDResponse>;
}

export declare type Versions = ["2022-08-01"];

export default Tds;
