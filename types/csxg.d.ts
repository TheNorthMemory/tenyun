/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface Create5GInstanceRequest {
}

declare interface Create5GInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface Delete5GInstanceRequest {
}

declare interface Delete5GInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface Describe5GAPNsRequest {
}

declare interface Describe5GAPNsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface Describe5GInstancesRequest {
}

declare interface Describe5GInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface Modify5GInstanceAttributeRequest {
}

declare interface Modify5GInstanceAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Csxg 5G入云服务} */
declare interface Csxg {
  (): Versions;
  /** 创建5G入云服务 {@link Create5GInstanceRequest} {@link Create5GInstanceResponse} */
  Create5GInstance(data?: Create5GInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<Create5GInstanceResponse>;
  /** 删除5G入云服务 {@link Delete5GInstanceRequest} {@link Delete5GInstanceResponse} */
  Delete5GInstance(data?: Delete5GInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<Delete5GInstanceResponse>;
  /** 查询APN信息 {@link Describe5GAPNsRequest} {@link Describe5GAPNsResponse} */
  Describe5GAPNs(data?: Describe5GAPNsRequest, config?: AxiosRequestConfig): AxiosPromise<Describe5GAPNsResponse>;
  /** 查询5G入云服务 {@link Describe5GInstancesRequest} {@link Describe5GInstancesResponse} */
  Describe5GInstances(data?: Describe5GInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<Describe5GInstancesResponse>;
  /** 修改5G入云服务 {@link Modify5GInstanceAttributeRequest} {@link Modify5GInstanceAttributeResponse} */
  Modify5GInstanceAttribute(data?: Modify5GInstanceAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<Modify5GInstanceAttributeResponse>;
}

export declare type Versions = ["2023-03-03"];

export default Csxg;
