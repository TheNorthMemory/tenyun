/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 批量消息 */
declare interface BatchContent {
  /** 消息体 */
  Body: string;
  /** 消息的键名 */
  Key?: string;
}

declare interface SendMessageRequest {
  /** 接入资源ID */
  DataHubId: string;
  /** 批量消息 */
  Message: BatchContent[];
}

declare interface SendMessageResponse {
  /** 消息ID */
  MessageId: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 数据接入平台 */
declare interface Dataintegration {
  (): Versions;
  /** 数据上报 */
  SendMessage(data: SendMessageRequest, config?: AxiosRequestConfig): AxiosPromise<SendMessageResponse>;
}

export declare type Versions = ["2022-06-13"];

export default Dataintegration;
