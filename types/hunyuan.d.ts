/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 返回的回复, 支持多个 */
declare interface Choice {
  /** 流式结束标志位，为 stop 则表示尾包。 */
  FinishReason?: string;
  /** 返回值。 */
  Delta?: Delta;
}

/** 返回的内容（流式返回） */
declare interface Delta {
  /** 角色名称。 */
  Role?: string;
  /** 内容详情。 */
  Content?: string;
}

/** embedding 信息，当前不支持批量，所以数组元素数目为1。 */
declare interface EmbeddingData {
  /** embedding 信息。 */
  Embedding?: number[] | null;
  /** 下标。 */
  Index?: number | null;
  /** embedding */
  Object?: string | null;
}

/** token 使用计数。 */
declare interface EmbeddingUsage {
  /** 输入Token数。 */
  PromptTokens?: number;
  /** 总Token数。 */
  TotalTokens?: number;
}

/** 运行时异常信息。 */
declare interface ErrorMsg {
  /** 错误提示信息。 */
  Msg?: string;
  /** 错误码。4000 服务内部异常。4001 请求模型超时。 */
  Code?: number;
}

/** 会话内容, 按对话时间序排列，长度最多为40 */
declare interface Message {
  /** 角色 */
  Role: string;
  /** 消息的内容 */
  Content: string;
}

/** token 数量 */
declare interface Usage {
  /** 输入 token 数量。 */
  PromptTokens?: number;
  /** 输出 token 数量。 */
  CompletionTokens?: number;
  /** 总 token 数量。 */
  TotalTokens?: number;
}

declare interface ChatProRequest {
  /** 聊天上下文信息。说明：1.长度最多为40, 按对话时间从旧到新在数组中排列。2.Message的Role当前可选值：user、assistant，其中，user和assistant需要交替出现(一问一答)，最后一个为user提问, 且Content不能为空。3.Messages中Content总长度不超过16000 token，超过则会截断最前面的内容，只保留尾部内容。建议不超过4000 token。 */
  Messages: Message[];
  /** 说明：1.影响输出文本的多样性，取值越大，生成文本的多样性越强。2.默认1.0，取值区间为[0.0, 1.0]。3.非必要不建议使用, 不合理的取值会影响效果。 */
  TopP?: number;
  /** 说明：1.较高的数值会使输出更加随机，而较低的数值会使其更加集中和确定。2.默认1.0，取值区间为[0.0，2.0]。3.非必要不建议使用,不合理的取值会影响效果。 */
  Temperature?: number;
}

declare interface ChatProResponse {
  /** unix 时间戳，单位为秒。 */
  Created?: number;
  /** token统计信息。按照总token数量计费。 */
  Usage?: Usage;
  /** 免责声明。 */
  Note?: string;
  /** 本轮对话的id。 */
  Id?: string;
  /** 回复内容。 */
  Choices?: Choice[];
  /** 错误信息。如果流式返回中服务处理异常，返回该错误信息。 */
  ErrorMsg?: ErrorMsg | null;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface ChatStdRequest {
  /** 聊天上下文信息。说明：1.长度最多为40, 按对话时间从旧到新在数组中排列。2.Message的Role当前可选值：user、assistant，其中，user和assistant需要交替出现(一问一答)，最后一个为user提问, 且Content不能为空。3.Messages中Content总长度不超过16000 token，超过则会截断最前面的内容，只保留尾部内容。建议不超过4000 token。 */
  Messages: Message[];
  /** 说明：1.影响输出文本的多样性，取值越大，生成文本的多样性越强。2.默认1.0，取值区间为[0.0, 1.0]。3.非必要不建议使用, 不合理的取值会影响效果。 */
  TopP?: number;
  /** 说明：1.较高的数值会使输出更加随机，而较低的数值会使其更加集中和确定。2.默认1.0，取值区间为[0.0，2.0]。3.非必要不建议使用,不合理的取值会影响效果。 */
  Temperature?: number;
}

declare interface ChatStdResponse {
  /** unix 时间戳，单位为秒。 */
  Created?: number;
  /** token统计信息。按照总token数量计费。 */
  Usage?: Usage;
  /** 免责声明。 */
  Note?: string;
  /** 本轮对话的id。 */
  Id?: string;
  /** 回复内容。 */
  Choices?: Choice[];
  /** 错误信息。如果流式返回中服务处理异常，返回该错误信息。 */
  ErrorMsg?: ErrorMsg | null;
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface GetEmbeddingRequest {
  /** 输入文本。总长度不超过1024 个token, 超过则会截断最后面的内容。 */
  Input: string;
}

declare interface GetEmbeddingResponse {
  /** 返回的 embedding 信息。 */
  Data?: EmbeddingData[];
  /** token 使用计数，按照总token数量收费。 */
  Usage?: EmbeddingUsage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTokenCountRequest {
  /** 输入文本 */
  Prompt: string;
}

declare interface GetTokenCountResponse {
  /** token计数 */
  TokenCount?: number;
  /** 字符计数 */
  CharacterCount?: number;
  /** 切分后的列表 */
  Tokens?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Hunyuan 腾讯混元大模型} */
declare interface Hunyuan {
  (): Versions;
  /** 腾讯混元大模型高级版 {@link ChatProRequest} {@link ChatProResponse} */
  ChatPro(data: ChatProRequest, config?: AxiosRequestConfig): AxiosPromise<ChatProResponse>;
  /** 腾讯混元大模型标准版 {@link ChatStdRequest} {@link ChatStdResponse} */
  ChatStd(data: ChatStdRequest, config?: AxiosRequestConfig): AxiosPromise<ChatStdResponse>;
  /** 腾讯混元-Embedding {@link GetEmbeddingRequest} {@link GetEmbeddingResponse} */
  GetEmbedding(data: GetEmbeddingRequest, config?: AxiosRequestConfig): AxiosPromise<GetEmbeddingResponse>;
  /** Token计数 {@link GetTokenCountRequest} {@link GetTokenCountResponse} */
  GetTokenCount(data: GetTokenCountRequest, config?: AxiosRequestConfig): AxiosPromise<GetTokenCountResponse>;
}

export declare type Versions = ["2023-09-01"];

export default Hunyuan;
