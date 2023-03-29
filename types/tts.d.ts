/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 异步合成请求的返回数据 */
declare interface CreateTtsTaskRespData {
  /** 任务ID，可通过此ID在轮询接口获取合成状态与结果。注意：TaskId数据类型为string */
  TaskId: string;
}

/** 获取异步合成结果的返回参数 */
declare interface DescribeTtsTaskStatusRespData {
  /** 任务标识。 */
  TaskId: string;
  /** 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。 */
  Status: number;
  /** 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。 */
  StatusStr: string;
  /** 合成音频COS地址（链接有效期1天）。 */
  ResultUrl: string;
  /** 失败原因说明。 */
  ErrorMsg: string;
}

/** 时间戳信息。 */
declare interface Subtitle {
  /** ⽂本信息。 */
  Text: string;
  /** ⽂本对应tts语⾳开始时间戳，单位ms。 */
  BeginTime: number;
  /** ⽂本对应tts语⾳结束时间戳，单位ms。 */
  EndTime: number;
  /** 该字在整句中的开始位置，从0开始。 */
  BeginIndex: number;
  /** 该字在整句中的结束位置，从0开始。 */
  EndIndex: number;
  /** 该字的音素 */
  Phoneme?: string | null;
}

declare interface CreateTtsTaskRequest {
  /** 合成语音的源文本，按UTF-8编码统一计算，最多支持10万字符 */
  Text: string;
  /** 模型类型，1-默认模型。 */
  ModelType: number;
  /** 音量大小，范围：[0，10]，分别对应11个等级的音量，默认为0，代表正常音量。没有静音选项。 */
  Volume?: number;
  /** 语速，范围：[-2，2]，分别对应不同语速：-2代表0.6倍-1代表0.8倍0代表1.0倍（默认）1代表1.2倍2代表1.5倍如果需要更细化的语速，可以保留小数点后一位，例如0.5 1.1 1.8等。 */
  Speed?: number;
  /** 项目id，用户自定义，默认为0。 */
  ProjectId?: number;
  /** 标准音色10510000-智逍遥，旁对白阅读风格男声1001-智瑜，情感女声1002-智聆，通用女声1003-智美，客服女声1004-智云，通用男声1005-智莉，通用女声1007-智娜，客服女声1008-智琪，客服女声1009-智芸，知性女声1010-智华，通用男声1017-智蓉，情感女声1018-智靖，情感男声1050-WeJack，英文男声1051-WeRose，英文女声精品音色精品音色拟真度更高，价格不同于标准音色，查看[购买指南](https://cloud.tencent.com/document/product/1073/34112)100510000-智逍遥，阅读男声101001-智瑜，情感女声101002-智聆，通用女声101003-智美，客服女声101004-智云，通用男声101005-智莉，通用女声101006-智言，助手女声101007-智娜，客服女声101008-智琪，客服女声101009-智芸，知性女声101010-智华，通用男声101011-智燕，新闻女声101012-智丹，新闻女声101013-智辉，新闻男声101014-智宁，新闻男声101015-智萌，男童声101016-智甜，女童声101017-智蓉，情感女声101018-智靖，情感男声101019-智彤，粤语女声101020-智刚，新闻男声101021-智瑞，新闻男声101022-智虹，新闻女声101023-智萱，聊天女声101024-智皓，聊天男声101025-智薇，聊天女声101026-智希，通用女声101027-智梅，通用女声101028-智洁，通用女声101029-智凯，通用男声101030-智柯，通用男声101031-智奎，通用男声101032-智芳，通用女声101033-智蓓，客服女声101034-智莲，通用女声101035-智依，通用女声101040-智川，四川女声101050-WeJack，英文男声101051-WeRose，英文女声101052-智味，通用男声101053-智方，通用男声101054-智友，通用男声101055-智付，通用女声101056-智林，东北男声 */
  VoiceType?: number;
  /** 主语言类型：1-中文（默认）2-英文 */
  PrimaryLanguage?: number;
  /** 音频采样率：16000：16k（默认）8000：8k */
  SampleRate?: number;
  /** 返回音频格式，可取值：mp3（默认），wav，pcm */
  Codec?: string;
  /** 回调 URL，用户自行搭建的用于接收识别结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。[回调说明](https://cloud.tencent.com/document/product/1073/55746) */
  CallbackUrl?: string;
  /** 旁白与对白文本解析，分别合成相应风格（仅适用于旁对白音色），默认 false */
  VoiceoverDialogueSplit?: boolean;
}

declare interface CreateTtsTaskResponse {
  /** 任务 id */
  Data?: CreateTtsTaskRespData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTtsTaskStatusRequest {
  /** 任务id */
  TaskId: string;
}

declare interface DescribeTtsTaskStatusResponse {
  /** 任务状态返回 */
  Data: DescribeTtsTaskStatusRespData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TextToVoiceRequest {
  /** 合成语音的源文本，按UTF-8编码统一计算。中文最大支持150个汉字（全角标点符号算一个汉字）；英文最大支持500个字母（半角标点符号算一个字母）。 */
  Text: string;
  /** 一次请求对应一个SessionId，会原样返回，建议传入类似于uuid的字符串防止重复。 */
  SessionId: string;
  /** 音量大小，范围：[0，10]，分别对应11个等级的音量，默认为0，代表正常音量。没有静音选项。 */
  Volume?: number;
  /** 语速，范围：[-2，2]，分别对应不同语速：-2代表0.6倍-1代表0.8倍0代表1.0倍（默认）1代表1.2倍2代表1.5倍如果需要更细化的语速，可以保留小数点后一位，例如0.5 1.1 1.8等。 */
  Speed?: number;
  /** 项目id，用户自定义，默认为0。 */
  ProjectId?: number;
  /** 模型类型，1-默认模型。 */
  ModelType?: number;
  /** 标准音色10510000-智逍遥，阅读男声1001-智瑜，情感女声1002-智聆，通用女声1003-智美，客服女声1004-智云，通用男声1005-智莉，通用女声1007-智娜，客服女声1008-智琪，客服女声1009-智芸，知性女声1010-智华，通用男声1017-智蓉，情感女声1018-智靖，情感男声1050-WeJack，英文男声1051-WeRose，英文女声精品音色精品音色拟真度更高，价格不同于标准音色，查看[购买指南](https://cloud.tencent.com/document/product/1073/34112)100510000-智逍遥，阅读男声101001-智瑜，情感女声101002-智聆，通用女声101003-智美，客服女声101004-智云，通用男声101005-智莉，通用女声101006-智言，助手女声101007-智娜，客服女声101008-智琪，客服女声101009-智芸，知性女声101010-智华，通用男声101011-智燕，新闻女声101012-智丹，新闻女声101013-智辉，新闻男声101014-智宁，新闻男声101015-智萌，男童声101016-智甜，女童声101017-智蓉，情感女声101018-智靖，情感男声101019-智彤，粤语女声101020-智刚，新闻男声101021-智瑞，新闻男声101022-智虹，新闻女声101023-智萱，聊天女声101024-智皓，聊天男声101025-智薇，聊天女声101026-智希，通用女声101027-智梅，通用女声101028-智洁，通用女声101029-智凯，通用男声101030-智柯，通用男声101031-智奎，通用男声101032-智芳，通用女声101033-智蓓，客服女声101034-智莲，通用女声101035-智依，通用女声101040-智川，四川女声101050-WeJack，英文男声101051-WeRose，英文女声101052-智味，通用男声101053-智方，通用男声101054-智友，通用男声101055-智付，通用女声101056-智林，东北男声 */
  VoiceType?: number;
  /** 主语言类型：1-中文（默认）2-英文 */
  PrimaryLanguage?: number;
  /** 音频采样率：16000：16k（默认）8000：8k */
  SampleRate?: number;
  /** 返回音频格式，可取值：wav（默认），mp3，pcm */
  Codec?: string;
  /** 是否开启时间戳功能，默认为false。 */
  EnableSubtitle?: boolean;
  /** 断句敏感阈值，默认值为：0，取值范围：[0,1,2]。该值越大越不容易断句，模型会更倾向于仅按照标点符号断句。此参数建议不要随意调整，可能会影响合成效果。 */
  SegmentRate?: number;
}

declare interface TextToVoiceResponse {
  /** base64编码的wav/mp3音频数据 */
  Audio: string;
  /** 一次请求对应一个SessionId */
  SessionId: string;
  /** 时间戳信息，若未开启时间戳，则返回空数组。 */
  Subtitles: Subtitle[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tts 语音合成} */
declare interface Tts {
  (): Versions;
  /** 长文本语音合成请求 {@link CreateTtsTaskRequest} {@link CreateTtsTaskResponse} */
  CreateTtsTask(data: CreateTtsTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTtsTaskResponse>;
  /** 长文本语音合成结果查询 {@link DescribeTtsTaskStatusRequest} {@link DescribeTtsTaskStatusResponse} */
  DescribeTtsTaskStatus(data: DescribeTtsTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTtsTaskStatusResponse>;
  /** 基础语音合成 {@link TextToVoiceRequest} {@link TextToVoiceResponse} */
  TextToVoice(data: TextToVoiceRequest, config?: AxiosRequestConfig): AxiosPromise<TextToVoiceResponse>;
}

export declare type Versions = ["2019-08-23"];

export default Tts;
