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
  /** base64编码的wav/mp3音频数据 */
  Audio?: string;
}

/** 同传TTS请求参数 */
declare interface TTS {
  /** 返回音频格式，可取值：wav，mp3，pcm */
  Codec: string;
  /** 音色 ID，只包括标准音色（注，日文只有一个固定音色）。完整的音色 ID 列表请参见[音色列表](https://cloud.tencent.com/document/product/1073/92668)。 */
  VoiceType: number;
  /** 音量大小，范围[-10，10]，对应音量大小。默认为0，代表正常音量，值越大音量越高。 */
  Volume?: number;
  /** 语速，范围：[-2，6]，分别对应不同语速：- -2代表0.6倍- -1代表0.8倍- 0代表1.0倍（默认）- 1代表1.2倍- 2代表1.5倍- 6代表2.5倍如果需要更细化的语速，可以保留小数点后 2 位，例如0.5/1.25/2.81等。参数值与实际语速转换，可参考[代码示例](https://sdk-1300466766.cos.ap-shanghai.myqcloud.com/sample/speed_sample.tar.gz) */
  Speed?: number;
  /** 音频采样率：- 16000：16k（默认）- 8000：8k */
  SampleRate?: number;
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
  /** TTS播报控制参数 */
  TTS?: TTS;
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
  /** TTS播报控制参数 */
  TTS?: TTS;
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
