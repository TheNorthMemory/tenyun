/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 后端提交任务事件返回Data复杂类型 */
declare interface TaskEventData {
  /** 状态码，0为成功，-1为失败 */
  Code?: number | null;
  /** 提示信息 */
  Message?: string | null;
  /** 任务ID */
  TaskId?: number | null;
  /** 当前完成或正在完成的安心用户运营平台的任务订单ID */
  TaskOrderId?: string | null;
  /** 当前任务订单状态码。1代表未完成；2代表已完成但未提交任务；3表示已完成，且已提交获得积分任务；4表示过期任务，提交后不获得积分。 */
  TaskCode?: number | null;
  /** 获得积分数 */
  TaskCoinNumber?: number | null;
  /** 任务类型后台代码 */
  TaskType?: number | null;
  /** 用户的当前积分 */
  TotalCoin?: number | null;
  /** 用户透传的附加数据 */
  Attach?: string | null;
  /** 计次任务当前完成次数 */
  DoneTimes?: number | null;
  /** 计次任务当前所需完成次数 */
  TotalTimes?: number | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 用户当前成长值 */
  GrowScore?: number | null;
}

declare interface SubmitTaskEventRequest {
  /** 用户唯一标识，最大长度为64 */
  AccountId: string;
  /** 用户设备ID，最大长度为64 */
  DeviceId: string;
  /** 任务的唯一订单号，只能是数字、大小写字母，且在同一个产品ID下唯一，最大长度为64 */
  OrderId: string;
  /** 任务事件Code，在腾讯安心用户运营平台下的任务事件列表中设置并获取 */
  Code: string;
  /** 任务结果是否异步通知。0表示任务结果在返回信息中同步返回；1表示任务结果通过回调结果异步通知。 */
  Async: number;
  /** 产品ID，可在腾讯安心用户运营平台的企业管理中获取 */
  ProductId: number;
  /** 异步接收任务结果通知的回调地址。在Async为1的时候，会将任务结果通过该回调地址进行通知。 */
  NotifyURL?: string;
}

declare interface SubmitTaskEventResponse {
  /** 任务的唯一订单号 */
  OrderId?: string | null;
  /** 信息码。0表示成功，-1标识失败 */
  Code?: number | null;
  /** 提示信息 */
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
