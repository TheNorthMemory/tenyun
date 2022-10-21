/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 信誉分，1-5从低到高 */
declare interface Score {
  /** 信誉分，1-5从低到高 */
  Star: number;
}

/** 用户信息 */
declare interface UserInfos {
  /** 用户的手机号 */
  PhoneNum: string;
  /** 用户的微信OpenID */
  Openid: string;
  /** 用户移动设备的客户端IP */
  IP?: string;
  /** 用户WiFi的BSSID */
  WiFiBssid?: string;
  /** 用户Android设备的IMEI */
  IMEI?: string;
  /** 用户Android设备的OAID */
  OAID?: string;
  /** 用户iOS设备的IDFA */
  IDFA?: string;
}

declare interface DescribeNewUserAcquisitionRequest {
  /** 用户信息 */
  ServiceParams: UserInfos;
}

declare interface DescribeNewUserAcquisitionResponse {
  /** 用户信誉分，1-5从低到高 */
  ServiceRsp: Score;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStockEstimationRequest {
  /** 用户信息 */
  ServiceParams: UserInfos;
}

declare interface DescribeStockEstimationResponse {
  /** 用户信誉分，1-5从低到高 */
  ServiceRsp: Score;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [私域安全](https://cloud.tencent.com/document/product/1473) */
declare interface Pds {
  (): Versions;
  /** 拉新判断服务 */
  DescribeNewUserAcquisition(data: DescribeNewUserAcquisitionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNewUserAcquisitionResponse>;
  /** 存量判断服务 */
  DescribeStockEstimation(data: DescribeStockEstimationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStockEstimationResponse>;
}

export declare type Versions = ["2021-07-01"];

export default Pds;
