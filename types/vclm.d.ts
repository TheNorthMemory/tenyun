/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 文本片段及其时间戳 */
declare interface AsrTimestamps {
  /** 文本片段 */
  Text: string | null;
  /** 开始时间 */
  StartMs: number | null;
  /** 结束时间 */
  EndMs: number | null;
}

/** 音频翻译结果 */
declare interface TranslateResult {
  /** 翻译源文字 */
  SourceText?: string | null;
  /** 翻译后文字。 */
  TargetText?: string | null;
}

declare interface ConfirmVideoTranslateJobRequest {
  /** 视频翻译任务 ID */
  JobId: string;
  /** 待确认文本 */
  TranslateResults: TranslateResult[];
}

declare interface ConfirmVideoTranslateJobResponse {
  /** 视频翻译任务 ID */
  JobId?: string;
  /** 音频转换任务 ID */
  TaskId?: string;
  /** 音频翻译结果确认 session */
  SessionId?: string;
  /** 视频转译任务状态 */
  Status?: number;
  /** 视频转译任务信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageAnimateJobRequest {
  /** 任务ID。 */
  JobId?: string;
}

declare interface DescribeImageAnimateJobResponse {
  /** 任务状态。WAIT：等待中，RUN：执行中，FAIL：任务失败，DONE：任务成功 */
  Status?: string;
  /** 错误码。 */
  ErrorCode?: string;
  /** 错误信息。 */
  ErrorMessage?: string;
  /** 结果视频URL。有效期 24 小时。 */
  ResultVideoUrl?: string;
  /** 掩码视频链接 */
  MaskVideoUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePortraitSingJobRequest {
  /** 任务ID */
  JobId: string;
}

declare interface DescribePortraitSingJobResponse {
  /** 任务ID */
  JobId?: string;
  /** 任务状态码—RUN：处理中—FAIL：处理失败—STOP：处理终止—DONE：处理完成 */
  StatusCode?: string;
  /** 任务状态信息 */
  StatusMsg?: string;
  /** 错误码 */
  ErrorCode?: string;
  /** 错误信息 */
  ErrorMessage?: string;
  /** 生成视频的URL地址有效期24小时 */
  ResultVideoUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoStylizationJobRequest {
  /** 任务ID */
  JobId: string;
}

declare interface DescribeVideoStylizationJobResponse {
  /** 任务ID。 */
  JobId?: string;
  /** 任务状态码：JobInit: "初始化中"JobModerationFailed: "审核失败",JobRunning: "处理中",JobFailed: "处理失败",JobSuccess: "处理完成"。 */
  StatusCode?: string;
  /** 任务状态描述。 */
  StatusMsg?: string;
  /** 处理结果视频Url。URL有效期为24小时。 */
  ResultVideoUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoTranslateJobRequest {
  /** 视频转译任务 ID */
  JobId: string;
}

declare interface DescribeVideoTranslateJobResponse {
  /** 任务状态。 1：音频翻译中。 2：音频翻译失败。 3：音频翻译成功。 4：音频结果待确认。 5：音频结果已确认完毕。6：视频翻译中。 7：视频翻译失败。 8：视频翻译成功。 */
  JobStatus?: number;
  /** 任务错误码。 */
  JobErrorCode?: string;
  /** 任务错误信息。 */
  JobErrorMsg?: string;
  /** 视频翻译结果。 */
  ResultVideoUrl?: string;
  /** 音频翻译结果。 */
  TranslateResults?: TranslateResult[];
  /** 是否需要确认翻译结果。0：不需要，1：需要 */
  JobConfirm?: number;
  /** 音频任务 ID */
  JobAudioTaskId?: string;
  /** 视频审核任务ID */
  JobVideoModerationId?: string;
  /** 音频审核任务 ID */
  JobAudioModerationId?: string;
  /** 口型驱动任务 ID */
  JobVideoId?: string;
  /** 视频素材原始 URL */
  OriginalVideoUrl?: string;
  /** 文本片段及其时间戳 */
  AsrTimestamps?: AsrTimestamps[];
  /** 提交视频翻译任务时的 requestId */
  JobSubmitReqId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitImageAnimateJobRequest {
  /** 图片格式：支持PNG、JPG、JPEG格式；图片分辨率：长边分辨率不超过2056；图片大小：不超过10M；图片宽高比：【宽：高】数值在 1:2 到 1:1.2 范围内 */
  ImageUrl?: string;
  /** 图片base64数据。图片格式：支持PNG、JPG、JPEG格式；图片分辨率：长边分辨率不超过2056；图片大小：不超过10M；图片宽高比：【宽：高】数值在 1:2 到 1:1.2 范围内 */
  ImageBase64?: string;
  /** 动作模板ID。取值说明：ke3 科目三；tuziwu 兔子舞；huajiangwu 划桨舞。 */
  TemplateId?: string;
  /** 结果视频是否保留模板音频。默认为true */
  EnableAudio?: boolean;
  /** 是否检测输入图人体12个身体部位（头部、颈部、右肩、右肘、右腕、左肩、左肘、左腕、右髋、左髋,、左膝、右膝）。默认不检测。 */
  EnableBodyJoins?: boolean;
  /** 最终视频是否保留原图的背景（该模式对于tuziwu、huajiangwu不生效） */
  EnableSegment?: boolean;
}

declare interface SubmitImageAnimateJobResponse {
  /** 任务ID。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitPortraitSingJobRequest {
  /** 传入音频URL地址，音频要求：- 音频时长：2秒 - 60秒- 音频格式：mp3、wav、m4a */
  AudioUrl: string;
  /** 传入图片URL地址，图片要求：- 图片格式：jpg、jpeg、png、bmp、webp- 图片分辨率：192～4096- 图片大小：不超过10M- 图片宽高比：图片【宽：高】在1:2到2:1范围内- 图片内容：避免上传无人脸/宠物脸或脸部过小、不完整、不清晰、偏转角度过大的图片。 */
  ImageUrl?: string;
  /** 传入图片Base64编码，编码后请求体大小不超过10M。图片Base64编码与URL地址必传其一，如果都传以ImageBase64为准。 */
  ImageBase64?: string;
  /** 唱演模式，默认使用人像模式。Person：人像模式，仅支持上传人像图片，人像生成效果更好，如果图中未检测到有效人脸将被拦截，生成时会将视频短边分辨率放缩至512。Pet：宠物模式，支持宠物等非人像图片，固定生成512:512分辨率视频。 */
  Mode?: string;
}

declare interface SubmitPortraitSingJobResponse {
  /** 任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitVideoStylizationJobRequest {
  /** 风格ID，取值说明：2d_anime 2D动漫；3d_cartoon 3D卡通；3d_china 3D国潮；pixel_art	像素风。 */
  StyleId: string;
  /** 输入视频URL。视频要求：- 视频格式：mp4、mov；- 视频时长：1～60秒；- 视频分辨率：540P~2056P，即长宽像素数均在540px～2056px范围内；- 视频大小：不超过200M；- 视频FPS：15～60fps。 */
  VideoUrl: string;
  /** 风格化强度 可选参数["low","medium","high"] "low":风格化强度弱,"medium":"风格化强度中等","high":"风格化强度强" 默认为medium */
  StyleStrength?: string;
}

declare interface SubmitVideoStylizationJobResponse {
  /** 任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitVideoTranslateJobRequest {
  /** 视频地址URL。格式要求：支持 mp4、mov 。时长要求：【10-300】秒。fps 要求：【15-60】fps分辨率要求：单边像素要求在 【540~1920】 之间。 */
  VideoUrl: string;
  /** 源语言：zh(中文), en(英文) */
  SrcLang: string;
  /** 目标语种：zh(简体中文)、en(英语)、ar(阿拉伯语)、de(德语)、es(西班牙语)、fr(法语)、id(印尼语)、it(意大利语)、ja(日语)、ko(韩语)、ms(马来语)、pt(葡萄牙语)、ru(俄语)、th(泰语)、tr(土耳其语)、vi(越南语) */
  DstLang?: string;
  /** 当音频 URL 不为空时，默认以音频驱动视频任务口型。格式要求：支持 mp3、m4a、acc、wav 格式。时长要求：【10~300】秒大小要求：不超过 100M。 */
  AudioUrl?: string;
  /** 是否需要去除VideoUrl或AudioUrl中背景音，取值范围：0-不需要，1-需要，默认0 。 */
  RemoveVocal?: number;
  /** 是否需要确认翻译结果0：不需要，1：需要 */
  Confirm?: number;
  /** 是否开启口型驱动，0：不开启，1：开启。默认开启。 */
  LipSync?: number;
  /** 音色种别：一种音色种别对应一种不同区域的音色1）目标语种为小语种(非zh,en)时，该项为必填2）目标语种为zh,en时，该项为非必填，若填入，则对应填入的音色具体音色包含请见“支持音色种别列表” */
  VoiceType?: string;
}

declare interface SubmitVideoTranslateJobResponse {
  /** 视频转译任务的Job id */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vclm 大模型视频创作引擎} */
declare interface Vclm {
  (): Versions;
  /** 确认视频转译结果 {@link ConfirmVideoTranslateJobRequest} {@link ConfirmVideoTranslateJobResponse} */
  ConfirmVideoTranslateJob(data: ConfirmVideoTranslateJobRequest, config?: AxiosRequestConfig): AxiosPromise<ConfirmVideoTranslateJobResponse>;
  /** 查询图片跳舞任务 {@link DescribeImageAnimateJobRequest} {@link DescribeImageAnimateJobResponse} */
  DescribeImageAnimateJob(data?: DescribeImageAnimateJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageAnimateJobResponse>;
  /** 查询图片唱演任务 {@link DescribePortraitSingJobRequest} {@link DescribePortraitSingJobResponse} */
  DescribePortraitSingJob(data: DescribePortraitSingJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePortraitSingJobResponse>;
  /** 查询视频风格化任务 {@link DescribeVideoStylizationJobRequest} {@link DescribeVideoStylizationJobResponse} */
  DescribeVideoStylizationJob(data: DescribeVideoStylizationJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoStylizationJobResponse>;
  /** 查询视频转译任务 {@link DescribeVideoTranslateJobRequest} {@link DescribeVideoTranslateJobResponse} */
  DescribeVideoTranslateJob(data: DescribeVideoTranslateJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoTranslateJobResponse>;
  /** 提交图片跳舞任务 {@link SubmitImageAnimateJobRequest} {@link SubmitImageAnimateJobResponse} */
  SubmitImageAnimateJob(data?: SubmitImageAnimateJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitImageAnimateJobResponse>;
  /** 提交图片唱演任务 {@link SubmitPortraitSingJobRequest} {@link SubmitPortraitSingJobResponse} */
  SubmitPortraitSingJob(data: SubmitPortraitSingJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitPortraitSingJobResponse>;
  /** 提交视频风格化任务 {@link SubmitVideoStylizationJobRequest} {@link SubmitVideoStylizationJobResponse} */
  SubmitVideoStylizationJob(data: SubmitVideoStylizationJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitVideoStylizationJobResponse>;
  /** 提交视频转译任务 {@link SubmitVideoTranslateJobRequest} {@link SubmitVideoTranslateJobResponse} */
  SubmitVideoTranslateJob(data: SubmitVideoTranslateJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitVideoTranslateJobResponse>;
}

export declare type Versions = ["2024-05-23"];

export default Vclm;
