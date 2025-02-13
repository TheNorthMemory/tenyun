/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 语音验证码发送状态 */
declare interface SendStatus {
  /** 标识本次发送 ID，标识一次下发记录。 */
  CallId?: string;
  /** 用户的 session 内容，腾讯 server 回包中会原样返回。 */
  SessionContext?: string;
}

declare interface SendCodeVoiceRequest {
  /** 验证码，仅支持填写数字，实际播报语音时，会自动在数字前补充语音文本"您的验证码是"。 */
  CodeMessage: string;
  /** 被叫手机号码，采用 e.164 标准，格式为+[国家或地区码][用户号码]。例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
  CalledNumber: string;
  /** 在[语音控制台](https://console.cloud.tencent.com/vms)添加应用后生成的实际SdkAppid，示例如1400006666。 */
  VoiceSdkAppid: string;
  /** 播放次数，可选，最多3次，默认2次。 */
  PlayTimes?: number;
  /** 用户的 session 内容，腾讯 server 回包中会原样返回。 */
  SessionContext?: string;
}

declare interface SendCodeVoiceResponse {
  /** 语音验证码发送状态。 */
  SendStatus?: SendStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendTtsVoiceRequest {
  /** 模板 ID，在控制台审核通过的模板 ID。 */
  TemplateId: string;
  /** 被叫手机号码，采用 e.164 标准，格式为+[国家或地区码][用户号码]。例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号。 */
  CalledNumber: string;
  /** 在[语音控制台](https://console.cloud.tencent.com/vms)添加应用后生成的实际SdkAppid，示例如1400006666。 */
  VoiceSdkAppid: string;
  /** 模板参数，若模板没有参数，请提供为空数组。注：语音消息的内容长度不超过350字。 */
  TemplateParamSet?: string[];
  /** 播放次数，可选，最多3次，默认2次。 */
  PlayTimes?: number;
  /** 用户的 session 内容，腾讯 server 回包中会原样返回。 */
  SessionContext?: string;
}

declare interface SendTtsVoiceResponse {
  /** 语音通知发送状态。 */
  SendStatus?: SendStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vms 语音消息} */
declare interface Vms {
  (): Versions;
  /** 发送语音验证码 {@link SendCodeVoiceRequest} {@link SendCodeVoiceResponse} */
  SendCodeVoice(data: SendCodeVoiceRequest, config?: AxiosRequestConfig): AxiosPromise<SendCodeVoiceResponse>;
  /** 指定模板发送语音通知 {@link SendTtsVoiceRequest} {@link SendTtsVoiceResponse} */
  SendTtsVoice(data: SendTtsVoiceRequest, config?: AxiosRequestConfig): AxiosPromise<SendTtsVoiceResponse>;
}

export declare type Versions = ["2020-09-02"];

export default Vms;
