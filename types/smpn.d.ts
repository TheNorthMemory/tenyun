/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface CHPRequest {
  /** 电话号码 */
  PhoneNumber: string;
}

declare interface CHPResponse {
  /** 标记类型 0: 无标记 50:骚扰电话 51:房产中介 52:保险理财 53:广告推销 54:诈骗电话 55:快递电话 56:出租车专车 */
  TagType: number;
  /** 标记次数 */
  TagCount: number;
}

declare interface DescribeSmpnChpRequest {
  /** 客户用于计费的资源Id */
  ResourceId: string;
  /** 终端骚扰保护请求 */
  RequestData: CHPRequest;
}

declare interface DescribeSmpnChpResponse {
  /** 终端骚扰保护回应 */
  ResponseData?: CHPResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSmpnFnrRequest {
  /** 虚假号码识别请求内容 */
  RequestData: FNRRequest;
  /** 用于计费的资源ID */
  ResourceId: string;
}

declare interface DescribeSmpnFnrResponse {
  /** 虚假号码识别回应内容 */
  ResponseData?: FNRResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FNRRequest {
  /** 电话号码 */
  PhoneNumber: string;
}

declare interface FNRResponse {
  /** 虚假号码描述 */
  Status: number;
}

/** {@link Smpn 营销号码安全} */
declare interface Smpn {
  (): Versions;
  /** @deprecated 终端骚扰保护 {@link DescribeSmpnChpRequest} {@link DescribeSmpnChpResponse} */
  DescribeSmpnChp(data: DescribeSmpnChpRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmpnChpResponse>;
  /** @deprecated 虚假号码识别 {@link DescribeSmpnFnrRequest} {@link DescribeSmpnFnrResponse} */
  DescribeSmpnFnr(data: DescribeSmpnFnrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmpnFnrResponse>;
}

export declare type Versions = ["2019-08-22"];

export default Smpn;
