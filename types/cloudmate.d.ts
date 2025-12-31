/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 智能诊断结果内容结构 */
declare interface ChatContent {
  /** 角色，可选值： - user - model_thinking - model_output - knowledge */
  Role?: string;
  /** 内容分片 */
  Parts?: ChatEventContentPart[] | null;
}

/** 智能诊断时间内容分片结构 */
declare interface ChatEventContentPart {
  /** 文本内容（流式或完整） */
  Text?: string;
  /** 函数调用信息 */
  FunctionCall?: string;
  /** 函数返回结果 */
  FunctionResponse?: string;
}

declare interface CloudMateAgentRequest {
  /** 空间 ID */
  WorkspaceId: string;
  /** 用户提问内容 */
  Message: string;
  /** 场景 ID */
  ScenarioId?: string;
  /** 会话 ID- 填写上一次接口调用返回的会话 ID（SessionId），可在原有会话基础上继续对话- 未填写会话 ID 时，创建新会话 */
  SessionId?: string;
  /** 是否使用流式响应，默认为 false，不启用流式响应 */
  Streaming?: boolean;
}

declare interface CloudMateAgentResponse {
  /** 会话ID，用于后续继续对话 */
  SessionId?: string;
  /** Unix 时间戳 */
  Timestamp?: number;
  /** 诊断内容 */
  Content?: ChatContent;
  /** 是否为部分内容（流式场景） */
  Partial?: boolean;
  /** 本轮对话是否完成 */
  TurnComplete?: boolean;
  /** 错误代码，无错误时无该字段 */
  ErrorCode?: string;
  /** 错误详细信息，无错误时无该字段 */
  ErrorMessage?: string;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

/** {@link Cloudmate Cloud Mate} */
declare interface Cloudmate {
  (): Versions;
  /** 发起智能诊断对话 {@link CloudMateAgentRequest} {@link CloudMateAgentResponse} */
  CloudMateAgent(data: CloudMateAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CloudMateAgentResponse>;
}

export declare type Versions = ["2025-10-30"];

export default Cloudmate;
