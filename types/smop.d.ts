/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 后端提交任务事件返回Data复杂类型 */
declare interface TaskEventData {
  /** 状态码 */
  Code?: number | null;
  /** 提示信息 */
  Message?: string | null;
  /** 任务ID */
  TaskId?: number | null;
  /** 当前完成或正在完成的任务订单ID */
  TaskOrderId?: string | null;
  /** 当前任务订单状态码 */
  TaskCode?: number | null;
  /** 获得积分数/成长值 */
  TaskCoinNumber?: number | null;
  /** 任务类型后台代码 */
  TaskType?: number | null;
  /** 当前积分 */
  TotalCoin?: number | null;
  /** 用户透传的代码块 */
  Attach?: string | null;
  /** 计次任务当前完成次数 */
  DoneTimes?: number | null;
  /** 计次任务当前所需完成次数 */
  TotalTimes?: number | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 当前成长值 */
  GrowScore?: number | null;
}

declare interface SubmitTaskEventRequest {
  /** 用户ID */
  AccountId: string;
  /** 设备ID */
  DeviceId: string;
  /** 订单ID */
  OrderId: string;
  /** 任务事件Code */
  Code: string;
  /** 同步异步方式：0为同步、1位异步 */
  Async: number;
  /** 产品ID */
  ProductId: number;
  /** 回调地址 */
  NotifyURL?: string;
}

declare interface SubmitTaskEventResponse {
  /** 订单ID */
  OrderId?: string | null;
  /** 信息码 */
  Code?: number | null;
  /** success */
  Message?: string | null;
  /** 任务处理结果列表 */
  Data?: TaskEventData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Smop 腾讯安心用户运营平台} */
declare interface Smop {
  (): Versions;
  /** 提交任务事件 {@link SubmitTaskEventRequest} {@link SubmitTaskEventResponse} */
  SubmitTaskEvent(data: SubmitTaskEventRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTaskEventResponse>;
}

export declare type Versions = ["2020-12-03"];

export default Smop;
