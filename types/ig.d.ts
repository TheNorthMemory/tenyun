/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface DescribeIgOrderListRequest {
  /** 页码 */
  PageNumber: number;
  /** 每页数目 */
  PageSize: number;
  /** 产品类型 */
  ProductType: string;
  /** 订单状态 */
  OrderStatus?: number;
  /** 搜索关键字 */
  KeyWord?: string;
}

declare interface DescribeIgOrderListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ig 智能导诊} */
declare interface Ig {
  (): Versions;
  /** 查询智能导诊订单列表 {@link DescribeIgOrderListRequest} {@link DescribeIgOrderListResponse} */
  DescribeIgOrderList(data: DescribeIgOrderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIgOrderListResponse>;
}

export declare type Versions = ["2021-05-18"];

export default Ig;
