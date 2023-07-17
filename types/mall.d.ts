/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 输出用户的资源数据 */
declare interface ResourceDrawListType {
  /** 记录id */
  Id?: number | null;
  /** 资源记录id */
  FlowId?: number | null;
  /** 资源id */
  ResourceId?: string | null;
  /** 本订单资源序列号 */
  IndexId?: string | null;
  /** 客户的Uin */
  Uin?: string | null;
  /** 大订单号 */
  BigDealId?: string | null;
  /** 小订单号 */
  SmallOrderId?: string | null;
  /** 资源创建时间 */
  ResourceNewStartTime?: string | null;
  /** 资源到期时间 */
  ResourceNewEndTime?: string | null;
  /** 资源状态 */
  ResourceStatus?: number | null;
  /** 本记录状态 */
  Status?: number | null;
  /** 项目类型 */
  ResourceType?: number | null;
}

declare interface DescribeDrawResourceListRequest {
  /** PageNumber */
  PageNumber: number;
  /** PageSize */
  PageSize: number;
}

declare interface DescribeDrawResourceListResponse {
  /** 返回数据条数 */
  TotalCount?: number;
  /** 返回数据内容 */
  ResourceDrawList?: ResourceDrawListType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mall 商场客留通} */
declare interface Mall {
  (): Versions;
  /** 查询所有用户的资源接口 {@link DescribeDrawResourceListRequest} {@link DescribeDrawResourceListResponse} */
  DescribeDrawResourceList(data: DescribeDrawResourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDrawResourceListResponse>;
}

export declare type Versions = ["2023-05-18"];

export default Mall;
