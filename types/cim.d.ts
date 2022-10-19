/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface DescribeSdkAppidRequest {
}

declare interface DescribeSdkAppidResponse {
  /** 表示 appid 对应的 SdkAppid 的数据 */
  SdkAppids?: number[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface Cim {
  (): Versions;
  /** 获取云通信 IM 的 SDKAppid */
  DescribeSdkAppid(data?: DescribeSdkAppidRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSdkAppidResponse>;
}

export declare type Versions = ["2019-03-18"];

export default Cim;
