/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 风险信息 */
declare interface RiskInfo {
  /** 风险类型 */
  Type: number;
  /** 风险等级 */
  Level: number;
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
