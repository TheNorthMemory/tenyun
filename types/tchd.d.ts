/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 事件详情信息，包含：产品名称、地域名称、事件开始时间、事件结束时间、事件当前状态； */
declare interface EventDetail {
  /** 产品ID */
  ProductId?: string;
  /** 产品名称 */
  ProductName?: string;
  /** 地域ID，非区域性地域返回non-regional */
  RegionId?: string;
  /** 地域名称 */
  RegionName?: string;
  /** 事件开始时间 */
  StartTime?: string;
  /** 事件结束时间，当事件正在发生还未结束时，结束时间返回空 */
  EndTime?: string;
  /** 事件当前状态：提示、异常、正常 */
  CurrentStatus?: string;
}

/** 产品可用性事件详情列表 */
declare interface ProductEventList {
  /** 事件详情列表 */
  EventList?: EventDetail[];
}

/** 状态汇总 */
declare interface TotalStatus {
  /** 正常状态的数目 */
  NormalCount?: number;
  /** 通知状态的数目 */
  NotifyCount?: number;
  /** 异常状态的数目 */
  AbnormalCount?: number | null;
}

declare interface DescribeEventStatisticsRequest {
  /** 1. 查询非区域性产品事件时，地域ID指定为：non-regional2. 其他地域ID取值请参考：https://cloud.tencent.com/document/api/213/15692 */
  RegionId: string;
  /** 1. 不指定产品列表时将查询所有产品。2. 产品ID示例：cvm、lb、cdb、cdn、crs */
  ProductIds?: string[];
}

declare interface DescribeEventStatisticsResponse {
  /** 正常产品数 */
  Data?: TotalStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventsRequest {
  /** 事件的发生日期 */
  EventDate: string;
  /** 1. 不指定产品列表时将查询所有产品。2. 产品ID示例：cvm、lb、cdb、cdn、crs */
  ProductIds?: string[];
  /** 1. 不指定地域列表时将查询所有地域。2. 查询非区域性产品事件时，地域ID指定为：non-regional3. 其他地域ID取值请参考：https://cloud.tencent.com/document/api/213/15692 */
  RegionIds?: string[];
}

declare interface DescribeEventsResponse {
  /** 事件详情列表 */
  Data?: ProductEventList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tchd 腾讯云健康看板} */
declare interface Tchd {
  (): Versions;
  /** 查看事件统计 {@link DescribeEventStatisticsRequest} {@link DescribeEventStatisticsResponse} */
  DescribeEventStatistics(data: DescribeEventStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventStatisticsResponse>;
  /** 查看事件列表 {@link DescribeEventsRequest} {@link DescribeEventsResponse} */
  DescribeEvents(data: DescribeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventsResponse>;
}

export declare type Versions = ["2023-03-06"];

export default Tchd;
