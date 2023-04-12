/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 声音复刻任务创建响应 */
declare interface CreateVRSTaskRespData {
  /** 任务ID */
  TaskId?: string | null;
}

/** 任务结果 */
declare interface DescribeVRSTaskStatusRespData {
  /** 任务ID */
  TaskId?: string | null;
  /** 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。 */
  Status?: number | null;
  /** 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。 */
  StatusStr?: string | null;
  /** 音色id */
  VoiceType?: number | null;
  /** 失败原因说明。 */
  ErrorMsg?: string | null;
}

/** 环境检测和音频检测响应 */
declare interface DetectionEnvAndSoundQualityRespData {
  /** 音频ID （用于创建任务接口AudioIds）,环境检测该值为空，仅在音质检测情况下返回 */
  AudioId?: string | null;
  /** 检测code 0 表示当前语音通过-1 表示检测失败，需要重试-2 表示语音检测不通过，提示用户再重新录制一下（通常漏读，错读，或多读）-3 表示语音中噪声较大，不通过 */
  DetectionCode?: number | null;
  /** 检测提示信息 */
  DetectionMsg?: string | null;
  /** 检测提示信息 */
  DetectionTip?: Words[] | null;
}

/** 训练文本 */
declare interface TrainingText {
  /** 文本ID */
  TextId?: string | null;
  /** 文本 */
  Text?: string | null;
}

/** 训练文本列表 */
declare interface TrainingTexts {
  /** 训练文本列表 */
  TrainingTextList?: TrainingText[] | null;
}

/** Words */
declare interface Words {
  /** 准确度 */
  PronAccuracy?: number | null;
  /** 流畅度 */
  PronFluency?: number | null;
  /** tag: 0: match, 1: insert, 2: delete, 3: replace, 4: oov, 5: unknown */
  Tag?: number | null;
  /** 字 */
  Word?: string | null;
}

declare interface CreateVRSTaskRequest {
  /** 唯一请求 ID */
  SessionId: string;
  /** 音色名称 */
  VoiceName: string;
  /** 音频采样率：16000：16k（默认） */
  SampleRate: number;
  /** 音色性别:1-male2-female */
  VoiceGender: number;
  /** 语言类型：1-中文（默认） */
  VoiceLanguage: number;
  /** 音频格式，音频类型(wav,mp3,aac,m4a) */
  Codec: string;
  /** 音频ID集合 */
  AudioIdList: string[];
  /** 回调 URL，用户自行搭建的用于接收结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。回调采用POST请求方式，Content-Type为application/x-www-form-urlencoded，回调数据格式如下:callback_body=checksum=&data={"TaskId":"xxxxxxxxxxxxxx","Status":2,"StatusStr":"success","VoiceType":xxxxx,"ErrorMsg":""} */
  CallbackUrl?: string;
}

declare interface CreateVRSTaskResponse {
  /** 创建任务结果 */
  Data?: CreateVRSTaskRespData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVRSTaskStatusRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DescribeVRSTaskStatusResponse {
  /** 声音复刻任务结果 */
  Data?: DescribeVRSTaskStatusRespData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetectEnvAndSoundQualityRequest {
  /** 标注文本信息 ID */
  TextId: string;
  /** 语音数据 要使用base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。 */
  AudioData: string;
  /** 音频格式，音频类型(wav,mp3,aac,m4a) */
  Codec: string;
  /** 1:环境检测 2:音质检测 */
  TypeId: number;
  /** 音频采样率：16000：16k（默认） */
  SampleRate?: number;
}

declare interface DetectEnvAndSoundQualityResponse {
  /** 检测结果 */
  Data?: DetectionEnvAndSoundQualityRespData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTrainingTextRequest {
}

declare interface GetTrainingTextResponse {
  /** 文本列表 */
  Data?: TrainingTexts;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vrs 声音复刻} */
declare interface Vrs {
  (): Versions;
  /** 声音复刻任务创建接口 {@link CreateVRSTaskRequest} {@link CreateVRSTaskResponse} */
  CreateVRSTask(data: CreateVRSTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVRSTaskResponse>;
  /** 声音复刻任务结果查询接口 {@link DescribeVRSTaskStatusRequest} {@link DescribeVRSTaskStatusResponse} */
  DescribeVRSTaskStatus(data: DescribeVRSTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVRSTaskStatusResponse>;
  /** 环境检测和音频质量检测 {@link DetectEnvAndSoundQualityRequest} {@link DetectEnvAndSoundQualityResponse} */
  DetectEnvAndSoundQuality(data: DetectEnvAndSoundQualityRequest, config?: AxiosRequestConfig): AxiosPromise<DetectEnvAndSoundQualityResponse>;
  /** 获取声音复刻训练文本 {@link GetTrainingTextRequest} {@link GetTrainingTextResponse} */
  GetTrainingText(data?: GetTrainingTextRequest, config?: AxiosRequestConfig): AxiosPromise<GetTrainingTextResponse>;
}

export declare type Versions = ["2020-08-24"];

export default Vrs;
