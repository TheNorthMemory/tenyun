/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** Group是消息组的具体定义，当前包含ContentType、Url、Content三个字段。其中，具体的ContentType字段定义，参考互联网MIME类型标准。 */
declare interface Group {
  /** 消息类型参考互联网MIME类型标准，当前仅支持"text/plain"。 */
  ContentType: string;
  /** 返回内容以链接形式提供。 */
  Url: string | null;
  /** 普通文本。 */
  Content: string | null;
}

/** 从TBP-RTS服务v1.3版本起，机器人以消息组列表的形式响应，消息组列表GroupList包含多组消息，用户根据需要对部分或全部消息组进行组合使用。 */
declare interface ResponseMessage {
  /** 消息组列表。 */
  GroupList: Group[] | null;
}

/** 槽位信息 */
declare interface SlotInfo {
  /** 槽位名称 */
  SlotName: string | null;
  /** 槽位值 */
  SlotValue: string | null;
}

declare interface TextProcessRequest {
  /** 机器人标识，用于定义抽象机器人。 */
  BotId: string;
  /** 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。 */
  BotEnv: string;
  /** 终端标识，每个终端(或线程)对应一个，区分并发多用户。 */
  TerminalId: string;
  /** 请求的文本。 */
  InputText: string;
  /** 透传字段，透传给用户自定义的WebService服务。 */
  SessionAttributes?: string;
  /** 平台类型，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount；企业微信: WXWork}。 */
  PlatformType?: string;
  /** 当PlatformType为微信公众号或企业微信时，传递对应微信公众号或企业微信的唯一标识 */
  PlatformId?: string;
}

declare interface TextProcessResponse {
  /** 当前会话状态{会话开始: START; 会话中: COUTINUE; 会话结束: COMPLETE}。 */
  DialogStatus?: string | null;
  /** 匹配到的机器人名称。 */
  BotName?: string | null;
  /** 匹配到的意图名称。 */
  IntentName?: string | null;
  /** 槽位信息。 */
  SlotInfoList?: SlotInfo[] | null;
  /** 原始的用户说法。 */
  InputText?: string | null;
  /** 机器人应答。 */
  ResponseMessage?: ResponseMessage | null;
  /** 透传字段，由用户自定义的WebService服务返回。 */
  SessionAttributes?: string | null;
  /** 结果类型 {中间逻辑出错:0; 任务型机器人:1; 问答型机器人:2; 闲聊型机器人:3; 未匹配上，返回预设兜底话术:5; 未匹配上，返回相似问题列表:6}。 */
  ResultType?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextResetRequest {
  /** 机器人标识，用于定义抽象机器人。 */
  BotId: string;
  /** 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。 */
  BotEnv: string;
  /** 终端标识，每个终端(或线程)对应一个，区分并发多用户。 */
  TerminalId: string;
  /** 平台类型，{小程序：MiniProgram；小微：XiaoWei；公众号：OfficialAccount；企业微信: WXWork}。 */
  PlatformType?: string;
  /** 当PlatformType为微信公众号或企业微信时，传递对应微信公众号或企业微信的唯一标识 */
  PlatformId?: string;
}

declare interface TextResetResponse {
  /** 当前会话状态{会话开始: START; 会话中: COUTINUE; 会话结束: COMPLETE}。 */
  DialogStatus?: string | null;
  /** 匹配到的机器人名称。 */
  BotName?: string | null;
  /** 匹配到的意图名称。 */
  IntentName?: string | null;
  /** 槽位信息。 */
  SlotInfoList?: SlotInfo[] | null;
  /** 原始的用户说法。 */
  InputText?: string | null;
  /** 机器人应答。 */
  ResponseMessage?: ResponseMessage | null;
  /** 透传字段，由用户自定义的WebService服务返回。 */
  SessionAttributes?: string | null;
  /** 结果类型 {中间逻辑出错:0; 任务型机器人:1; 问答型机器人:2; 闲聊型机器人:3; 未匹配上，返回预设兜底话术:5; 未匹配上，返回相似问题列表:6}。 */
  ResultType?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20190311 {
  type VersionHeader = { headers: { 'X-TC-Version': '2019-03-11' } }

  /** 槽位信息 */
  interface SlotInfo {
    /** 槽位名称 */
    SlotName: string | null;
    /** 槽位值 */
    SlotValue: string | null;
  }

  interface CreateBotRequest {
    /** 机器人名称 */
    BotName: string;
    /** 机器人中文名称 */
    BotCnName?: string;
  }

  interface CreateBotResponse {
    /** 任务ID */
    TaskRequestId?: string;
    /** 任务信息 */
    Msg?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ResetRequest {
    /** 机器人标识 */
    BotId: string;
    /** 子账户id，每个终端对应一个 */
    UserId: string;
    /** 机器人版本号。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev */
    BotVersion?: string;
    /** 机器人环境{dev:测试;release:线上}。BotVersion/BotEnv二选一：二者均填，仅BotVersion有效；二者均不填，默认BotEnv=dev */
    BotEnv?: string;
  }

  interface ResetResponse {
    /** 当前会话状态。取值:"start"/"continue"/"complete" */
    DialogStatus?: string | null;
    /** 匹配到的机器人名称 */
    BotName?: string | null;
    /** 匹配到的意图名称 */
    IntentName?: string | null;
    /** 机器人回答 */
    ResponseText?: string;
    /** 语义解析的槽位结果列表 */
    SlotInfoList?: SlotInfo[] | null;
    /** 透传字段 */
    SessionAttributes?: string | null;
    /** 用户说法。该说法是用户原生说法或ASR识别结果，未经过语义优化 */
    Question?: string | null;
    /** tts合成pcm音频存储链接。仅当请求参数NeedTts=true时返回 */
    WaveUrl?: string | null;
    /** tts合成的pcm音频。二进制数组经过base64编码(暂时不返回) */
    WaveData?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TextProcessRequest {
    /** 机器人标识，用于定义抽象机器人。 */
    BotId: string;
    /** 终端标识，每个终端(或线程)对应一个，区分并发多用户。 */
    TerminalId: string;
    /** 请求的文本。 */
    InputText: string;
    /** 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。 */
    BotEnv?: string;
    /** 透传字段，透传给用户自定义的WebService服务。 */
    SessionAttributes?: string;
  }

  interface TextProcessResponse {
    /** 当前会话状态{会话开始: START; 会话中: COUTINUE; 会话结束: COMPLETE}。 */
    DialogStatus?: string | null;
    /** 匹配到的机器人名称。 */
    BotName?: string | null;
    /** 匹配到的意图名称。 */
    IntentName?: string | null;
    /** 槽位信息。 */
    SlotInfoList?: SlotInfo[] | null;
    /** 原始的用户说法。 */
    InputText?: string | null;
    /** 透传字段，由用户自定义的WebService服务返回。 */
    SessionAttributes?: string | null;
    /** 机器人对话的应答文本。 */
    ResponseText?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TextResetRequest {
    /** 机器人标识，用于定义抽象机器人。 */
    BotId: string;
    /** 终端标识，每个终端(或线程)对应一个，区分并发多用户。 */
    TerminalId: string;
    /** 机器人版本，取值"dev"或"release"，{调试版本：dev；线上版本：release}。 */
    BotEnv?: string;
  }

  interface TextResetResponse {
    /** 当前会话状态，取值："START"/"COUTINUE"/"COMPLETE"。 */
    DialogStatus?: string | null;
    /** 匹配到的机器人名称。 */
    BotName?: string | null;
    /** 匹配到的意图名称。 */
    IntentName?: string | null;
    /** 槽位信息。 */
    SlotInfoList?: SlotInfo[] | null;
    /** 原始的用户说法。 */
    InputText?: string | null;
    /** 透传字段，由用户自定义的WebService服务返回。 */
    SessionAttributes?: string | null;
    /** 机器人对话的应答文本。 */
    ResponseText?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Tbp 腾讯智能对话平台} */
declare interface Tbp {
  (): Versions;
  /** 文本处理 {@link TextProcessRequest} {@link TextProcessResponse} */
  TextProcess(data: TextProcessRequest, config?: AxiosRequestConfig): AxiosPromise<TextProcessResponse>;
  /** 会话重置 {@link TextResetRequest} {@link TextResetResponse} */
  TextReset(data: TextResetRequest, config?: AxiosRequestConfig): AxiosPromise<TextResetResponse>;
  /** 创建机器人 {@link V20190311.CreateBotRequest} {@link V20190311.CreateBotResponse} */
  CreateBot(data: V20190311.CreateBotRequest, config: AxiosRequestConfig & V20190311.VersionHeader): AxiosPromise<V20190311.CreateBotResponse>;
  /** 复位 {@link V20190311.ResetRequest} {@link V20190311.ResetResponse} */
  Reset(data: V20190311.ResetRequest, config: AxiosRequestConfig & V20190311.VersionHeader): AxiosPromise<V20190311.ResetResponse>;
  /** 文本处理 {@link V20190311.TextProcessRequest} {@link V20190311.TextProcessResponse} */
  TextProcess(data: V20190311.TextProcessRequest, config: AxiosRequestConfig & V20190311.VersionHeader): AxiosPromise<V20190311.TextProcessResponse>;
  /** 会话重置 {@link V20190311.TextResetRequest} {@link V20190311.TextResetResponse} */
  TextReset(data: V20190311.TextResetRequest, config: AxiosRequestConfig & V20190311.VersionHeader): AxiosPromise<V20190311.TextResetResponse>;
}

export declare type Versions = ["2019-06-27", "2019-03-11"];

export default Tbp;
