/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 取消任务响应 */
declare interface CancelVRSTaskRsp {
}

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
  /** 音色id。（若为一句话复刻时，该值为固定值“200000000”） */
  VoiceType?: number | null;
  /** 失败原因说明。 */
  ErrorMsg?: string | null;
  /** 任务过期时间。（当复刻类型为一句话复刻时展示） */
  ExpireTime?: string | null;
  /** 快速复刻音色ID。（当复刻类型为一句话复刻时展示） */
  FastVoiceType?: string | null;
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

/** 离线声音复刻模型下载响应 */
declare interface DownloadVRSModelRsp {
  /** 模型cos地址 */
  Model?: string | null;
  /** 音色名称 */
  VoiceName?: string | null;
  /** 音色性别:1-male2-female */
  VoiceGender?: number | null;
  /** 语言类型：1-中文 */
  VoiceLanguage?: number | null;
  /** 任务ID */
  TaskId?: string;
}

/** 训练文本 */
declare interface TrainingText {
  /** 文本ID当复刻类型为一句话声音复刻时，生成的TextId有效期为7天，且在成功创建一次复刻任务后失效。 */
  TextId?: string | null;
  /** 文本 */
  Text?: string | null;
}

/** 训练文本列表 */
declare interface TrainingTexts {
  /** 训练文本列表 */
  TrainingTextList?: TrainingText[] | null;
}

/** 复刻音色详情 */
declare interface VoiceTypeInfo {
  /** 音色id。（若为一句话复刻时，该值为固定值“200000000”） */
  VoiceType?: number;
  /** 音色名称 */
  VoiceName?: string;
  /** 音色性别: 1-male 2-female */
  VoiceGender?: number;
  /** 复刻类型: 0-轻量版复刻 1-基础版复刻 */
  TaskType?: number;
  /** 复刻任务 ID */
  TaskID?: string;
  /** 创建时间 */
  DateCreated?: string;
  /** 部署状态。若已部署，则可通过语音合成接口调用该音色 */
  IsDeployed?: boolean;
  /** 任务过期时间。（当复刻类型为一句话复刻时展示） */
  ExpireTime?: string | null;
  /** 快速复刻音色ID。（当复刻类型为一句话复刻时展示） */
  FastVoiceType?: string | null;
}

/** 音色信息列表 */
declare interface VoiceTypeListData {
  /** 音色信息列表 */
  VoiceTypeList?: VoiceTypeInfo[] | null;
}

/** 音频检测提示信息：1.检测字是否存在多读、 少读、 错读等2.检测准确度和流畅度 */
declare interface Words {
  /** 准确度 (<75则认为不合格) */
  PronAccuracy?: number | null;
  /** 流畅度 (<0.95则认为不合格) */
  PronFluency?: number | null;
  /** tag: 0: match 匹配1: insert 多读2: delete 少读3: replace 错读4: oov 待评估字不在发音评估的词库5: unknown 未知错误 */
  Tag?: number | null;
  /** 字 */
  Word?: string | null;
}

declare interface CancelVRSTaskRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface CancelVRSTaskResponse {
  /** 任务ID */
  Data?: CancelVRSTaskRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVRSTaskRequest {
  /** 唯一请求 ID */
  SessionId: string;
  /** 音色名称 */
  VoiceName: string;
  /** 音色性别:1-male2-female */
  VoiceGender: number;
  /** 语言类型：1-中文 */
  VoiceLanguage: number;
  /** 音频ID集合。（一句话声音复刻仅需填写一个音质检测接口返回的AudioId） */
  AudioIdList: string[];
  /** 音频采样率：16000：16k */
  SampleRate?: number;
  /** 音频格式，音频类型(wav,mp3,aac,m4a) */
  Codec?: string;
  /** 回调 URL，用户自行搭建的用于接收结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。回调采用POST请求方式，Content-Type为application/json，回调数据格式如下:{"TaskId":"xxxxxxxxxxxxxx","Status":2,"StatusStr":"success","VoiceType":xxxxx,"ErrorMsg":""} */
  CallbackUrl?: string;
  /** 模型类型 1:在线 2:离线 默认为1 */
  ModelType?: number;
  /** 复刻类型。0 - 轻量版声音复刻（默认）；5 - 一句话声音复刻。 */
  TaskType?: number;
  /** 校验音频ID。（仅基础版声音复刻使用） */
  VPRAudioId?: string;
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
  /** 语音数据 要使用base64编码(采用python语言时注意读取文件时需要转成base64字符串编码，例如：str(base64.b64encode(open("input.aac", mode="rb").read()), encoding='utf-8') )。 */
  AudioData: string;
  /** 1:环境检测 2:音质检测 */
  TypeId: number;
  /** 音频格式，音频类型(wav,mp3,aac,m4a) */
  Codec?: string;
  /** 音频采样率。16000：16k（默认）；24000：24k（仅一句话声音复刻支持）；48000：48k（仅一句话声音复刻支持）。 */
  SampleRate?: number;
  /** 复刻类型。0 - 轻量版声音复刻（默认）;5 - 一句话声音复刻。 */
  TaskType?: number;
}

declare interface DetectEnvAndSoundQualityResponse {
  /** 检测结果 */
  Data?: DetectionEnvAndSoundQualityRespData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadVRSModelRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DownloadVRSModelResponse {
  /** 响应 */
  Data?: DownloadVRSModelRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTrainingTextRequest {
  /** 复刻类型。0 - 轻量版声音复刻（默认）;5 - 一句话声音复刻。 */
  TaskType?: number;
  /** 音色场景。（仅支持一句话声音复刻，其余复刻类型不生效） 0 - 通用场景（默认）； 1 - 聊天场景； 2 - 阅读场景； 3 - 资讯播报场景。 */
  Domain?: number;
  /** 文本语种。（仅支持一句话声音复刻，其余复刻类型不生效） 1 - 中文（默认）。 */
  TextLanguage?: number;
}

declare interface GetTrainingTextResponse {
  /** 文本列表 */
  Data?: TrainingTexts;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetVRSVoiceTypesRequest {
  /** 复刻类型。0 - 除快速声音复刻外其他复刻类型（默认）；5 - 一句话声音复刻。 */
  TaskType?: number;
}

declare interface GetVRSVoiceTypesResponse {
  /** 复刻音色信息 */
  Data?: VoiceTypeListData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vrs 声音复刻} */
declare interface Vrs {
  (): Versions;
  /** 声音复刻取消任务接口 {@link CancelVRSTaskRequest} {@link CancelVRSTaskResponse} */
  CancelVRSTask(data: CancelVRSTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CancelVRSTaskResponse>;
  /** 声音复刻任务创建接口 {@link CreateVRSTaskRequest} {@link CreateVRSTaskResponse} */
  CreateVRSTask(data: CreateVRSTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVRSTaskResponse>;
  /** 声音复刻任务结果查询接口 {@link DescribeVRSTaskStatusRequest} {@link DescribeVRSTaskStatusResponse} */
  DescribeVRSTaskStatus(data: DescribeVRSTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVRSTaskStatusResponse>;
  /** 环境检测和音频质量检测 {@link DetectEnvAndSoundQualityRequest} {@link DetectEnvAndSoundQualityResponse} */
  DetectEnvAndSoundQuality(data: DetectEnvAndSoundQualityRequest, config?: AxiosRequestConfig): AxiosPromise<DetectEnvAndSoundQualityResponse>;
  /** 下载声音复刻离线模型（暂未开放） {@link DownloadVRSModelRequest} {@link DownloadVRSModelResponse} */
  DownloadVRSModel(data: DownloadVRSModelRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadVRSModelResponse>;
  /** 获取声音复刻训练文本 {@link GetTrainingTextRequest} {@link GetTrainingTextResponse} */
  GetTrainingText(data?: GetTrainingTextRequest, config?: AxiosRequestConfig): AxiosPromise<GetTrainingTextResponse>;
  /** 查询复刻音色 {@link GetVRSVoiceTypesRequest} {@link GetVRSVoiceTypesResponse} */
  GetVRSVoiceTypes(data?: GetVRSVoiceTypesRequest, config?: AxiosRequestConfig): AxiosPromise<GetVRSVoiceTypesResponse>;
}

export declare type Versions = ["2020-08-24"];

export default Vrs;
