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

declare interface CreateSmpnEpaRequest {
  /** 企业号码认证请求内容 */
  RequestData: EPARequest;
  /** 用于计费的资源ID */
  ResourceId: string;
}

declare interface CreateSmpnEpaResponse {
  /** 业号码认证回应内容 */
  ResponseData?: EPAResponse;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSmpnMhmRequest {
  /** 号码营销监控请求内容 */
  RequestData: MHMRequest;
  /** 用于计费的资源ID */
  ResourceId: string;
}

declare interface DescribeSmpnMhmResponse {
  /** 号码营销监控回应内容 */
  ResponseData?: MHMResponse;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSmpnMrlRequest {
  /** 恶意标记等级请求内容 */
  RequestData: MRLRequest;
  /** 用于计费的资源ID */
  ResourceId: string;
}

declare interface DescribeSmpnMrlResponse {
  /** 恶意标记等级回应内容 */
  ResponseData?: MRLResponse;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EPARequest {
  /** 电话号码 */
  PhoneNumber: string;
  /** 黄页名称 */
  Name: string;
}

declare interface EPAResponse {
  /** 0成功 其他失败 */
  RetCode: number;
}

declare interface FNRRequest {
  /** 电话号码 */
  PhoneNumber: string;
}

declare interface FNRResponse {
  /** 虚假号码描述 */
  Status: number;
}

declare interface MHMRequest {
  /** 电话号码 */
  PhoneNumber: string;
}

declare interface MHMResponse {
  /** 标记类型 0: 无标记 50:骚扰电话 51:房产中介 52:保险理财 53:广告推销 54:诈骗电话 55:快递电话 56:出租车专车 */
  TagType: number;
  /** 标记次数 */
  TagCount: number;
}

declare interface MRLRequest {
  /** 电话号码 */
  PhoneNumber: string;
}

declare interface MRLResponse {
  /** 骚扰电话恶意标记等级 */
  DisturbLevel: number;
  /** 房产中介恶意标记等级 */
  HouseAgentLevel: number;
  /** 保险理财恶意标记等级 */
  InsuranceLevel: number;
  /** 广告推销恶意标记等级 */
  SalesLevel: number;
  /** 诈骗电话恶意标记等级 */
  CheatLevel: number;
}

/** [营销号码安全](https://cloud.tencent.com/document/product/1127) */
declare interface Smpn {
  (): Versions;
  /** 企业号码认证 */
  CreateSmpnEpa(data: CreateSmpnEpaRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSmpnEpaResponse>;
  /** 终端骚扰保护 */
  DescribeSmpnChp(data: DescribeSmpnChpRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmpnChpResponse>;
  /** 虚假号码识别 */
  DescribeSmpnFnr(data: DescribeSmpnFnrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmpnFnrResponse>;
  /** 号码营销监控 */
  DescribeSmpnMhm(data: DescribeSmpnMhmRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmpnMhmResponse>;
  /** 恶意标记等级 */
  DescribeSmpnMrl(data: DescribeSmpnMrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSmpnMrlResponse>;
}

export declare type Versions = ["2019-08-22"];

export default Smpn;
