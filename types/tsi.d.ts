/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 同传结果数据 */
declare interface DisplayInfo {
  /** 句子 ID */
  SeId?: string;
  /** 句子版本号 */
  SeVer?: number;
  /** 识别结果 */
  SourceText?: string;
  /** 翻译结果 */
  TargetText?: string;
  /** 句子开始时间 */
  StartTime?: number;
  /** 句子结束时间 */
  EndTime?: number;
  /** 当前句子是否已结束 */
  IsEnd?: boolean;
}

declare interface TongChuanDisplayRequest {
  /** 一段完整的语音对应一个SessionUuid */
  SessionUuid: string;
  /** 句子排序方式，1-由新到旧 */
  IsNew: number;
  /** 最多返回几句，目前只支持 5 条数据 */
  SeMax: number;
}

declare interface TongChuanDisplayResponse {
  /** 同传结果数组 */
  List?: DisplayInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TongChuanRecognizeRequest {
  /** 一段完整的语音对应一个SessionUuid */
  SessionUuid: string;
  /** 源语言，支持：zh：中文en：英语ja：日语ko：韩语yue：粤语 */
  Source: string;
  /** 目标语言，各源语言的目标语言支持列表如下zh（中文）：en（英语）、ja（日语）、ko（韩语）、yue（粤语）en（英语）：zh（中文）ja（日语）：zh（中文）ko（韩语）：zh（中文）yue（粤语）：zh（中文） */
  Target: string;
  /** 语音编码类型，1-pcm */
  AudioFormat: number;
  /** 语音分片的序号，从0开始 */
  Seq: number;
  /** 语音开始的时间戳 */
  Utc: number;
  /** 是否最后一片语音分片，0-否，1-是 */
  IsEnd: number;
  /** 翻译时机，0-不翻译 2-句子实时翻译 */
  TranslateTime: number;
  /** 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。 */
  Data: string;
}

declare interface TongChuanRecognizeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TongChuanSyncRequest {
  /** 一段完整的语音对应一个SessionUuid */
  SessionUuid: string;
  /** 源语言，支持：zh：中文en：英语ja：日语ko：韩语yue：粤语 */
  Source: string;
  /** 目标语言，各源语言的目标语言支持列表如下zh（中文）：en（英语）、ja（日语）、ko（韩语）、yue（粤语）en（英语）：zh（中文）ja（日语）：zh（中文）ko（韩语）：zh（中文）yue（粤语）：zh（中文） */
  Target: string;
  /** 语音编码类型，1-pcm */
  AudioFormat: number;
  /** 语音分片的序号，从0开始 */
  Seq: number;
  /** 语音开始的时间戳 */
  Utc: number;
  /** 是否最后一片语音分片，0-否，1-是 */
  IsEnd: number;
  /** 翻译时机，0-不翻译 2-句子实时翻译 */
  TranslateTime: number;
  /** 语音分片内容进行 Base64 编码后的字符串。音频内容需包含有效并可识别的文本信息。 */
  Data: string;
}

declare interface TongChuanSyncResponse {
  /** 同传结果数组 */
  List?: DisplayInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tsi 腾讯同传系统} */
declare interface Tsi {
  (): Versions;
  /** 同传查询结果 {@link TongChuanDisplayRequest} {@link TongChuanDisplayResponse} */
  TongChuanDisplay(data: TongChuanDisplayRequest, config?: AxiosRequestConfig): AxiosPromise<TongChuanDisplayResponse>;
  /** 同传上传音频 {@link TongChuanRecognizeRequest} {@link TongChuanRecognizeResponse} */
  TongChuanRecognize(data: TongChuanRecognizeRequest, config?: AxiosRequestConfig): AxiosPromise<TongChuanRecognizeResponse>;
  /** 同传上传音频并查询结果 {@link TongChuanSyncRequest} {@link TongChuanSyncResponse} */
  TongChuanSync(data: TongChuanSyncRequest, config?: AxiosRequestConfig): AxiosPromise<TongChuanSyncResponse>;
}

export declare type Versions = ["2021-03-25"];

export default Tsi;
