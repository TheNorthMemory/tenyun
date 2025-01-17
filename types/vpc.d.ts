/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface DescribeNatsEipsInternalRequest {
  /** limit */
  Limit?: number;
  /** offset */
  Offset?: number;
}

declare interface DescribeNatsEipsInternalResponse {
  /** eip Ip列表 */
  EipSet?: string[];
  /** eip ip列表总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vpc 私有网络} */
declare interface Vpc {
  (): Versions;
  /** 获取NAT网关EIP列表（内部接口）。 {@link DescribeNatsEipsInternalRequest} {@link DescribeNatsEipsInternalResponse} */
  DescribeNatsEipsInternal(data?: DescribeNatsEipsInternalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatsEipsInternalResponse>;
}

export declare type Versions = ["2017-03-12"];

export default Vpc;
