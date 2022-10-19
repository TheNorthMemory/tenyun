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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 设备安全 */
declare interface Tds {
  (): Versions;
  /** 查询设备风险 */
  DescribeFraudBase(data: DescribeFraudBaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFraudBaseResponse>;
  /** 查询设备标识及风险 */
  DescribeFraudPremium(data: DescribeFraudPremiumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFraudPremiumResponse>;
  /** 查询设备标识 */
  DescribeTrustedID(data: DescribeTrustedIDRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrustedIDResponse>;
}

export declare type Versions = ["2022-08-01"];

export default Tds;
