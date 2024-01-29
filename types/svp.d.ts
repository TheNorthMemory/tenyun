/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface CreateSavingPlanOrderRequest {
  /** 地域编码 */
  RegionId: number;
  /** 区域编码 */
  ZoneId: number;
  /** 预付费类型 */
  PrePayType: string;
  /** 时长 */
  TimeSpan: number;
  /** 时长单位 */
  TimeUnit: string;
  /** 商品唯一标识 */
  CommodityCode: string;
  /** 承诺时长内的小额金额（单位：元） */
  PromiseUseAmount: number;
  /** 节省计划的指定生效时间，若不传则为当前下单时间。传参数格式:"2023-10-01 00:00:00"，仅支持指定日期的0点时刻 */
  SpecifyEffectTime?: string;
  /** 可重入ID */
  ClientToken?: string;
}

declare interface CreateSavingPlanOrderResponse {
  /** 订单号 */
  BigDealId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Svp 节省计划} */
declare interface Svp {
  (): Versions;
  /** 创建节省计划订单 {@link CreateSavingPlanOrderRequest} {@link CreateSavingPlanOrderResponse} */
  CreateSavingPlanOrder(data: CreateSavingPlanOrderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSavingPlanOrderResponse>;
}

export declare type Versions = ["2024-01-25"];

export default Svp;
