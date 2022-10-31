/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface FlowProductRemindRequest {
  /** 服务商uin */
  ProviderUin: string;
  /** 服务商实例ID */
  SignId: string;
  /** 云市场实例ID */
  ResourceId: string;
  /** 实例总流量 */
  TotalFlow: string;
  /** 剩余流量 */
  LeftFlow: string;
  /** 流量单位 */
  FlowUnit: string;
}

declare interface FlowProductRemindResponse {
  /** 是否成功 */
  Success: string;
  /** 流水号 */
  FlowId: string;
  /** 消息 */
  Info: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetUsagePlanUsageAmountRequest {
  /** 用于查询实例的Id */
  InstanceId: string;
}

declare interface GetUsagePlanUsageAmountResponse {
  /** 最大调用量 */
  MaxRequestNum: number;
  /** 已经调用量 */
  InUseRequestNum: number;
  /** 剩余调用量 */
  RemainingRequestNum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Market 云市场} */
declare interface Market {
  (): Versions;
  /** {@link FlowProductRemind 计量商品用量提醒}({@link FlowProductRemindRequest 请求参数}): {@link FlowProductRemindResponse 返回参数} */
  FlowProductRemind(data: FlowProductRemindRequest, config?: AxiosRequestConfig): AxiosPromise<FlowProductRemindResponse>;
  /** {@link GetUsagePlanUsageAmount 查询使用计划使用量}({@link GetUsagePlanUsageAmountRequest 请求参数}): {@link GetUsagePlanUsageAmountResponse 返回参数} */
  GetUsagePlanUsageAmount(data: GetUsagePlanUsageAmountRequest, config?: AxiosRequestConfig): AxiosPromise<GetUsagePlanUsageAmountResponse>;
}

export declare type Versions = ["2019-10-10"];

export default Market;
