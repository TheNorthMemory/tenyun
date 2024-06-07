/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 文本片段及其时间戳 */
declare interface AsrTimestamps {
  /** 文本片段 */
  Text?: string | null;
  /** 开始时间 */
  StartMs?: number | null;
  /** 结束时间 */
  EndMs?: number | null;
}

/** 音频翻译结果 */
declare interface AudioTranslateResult {
  /** 原文本 */
  SourceText: string;
  /** 目标文本 */
  TargetText: string;
}

/** 音频翻译结果。 */
declare interface TranslateResult {
  /** 翻译源文字。 */
  SourceText?: string | null;
  /** 翻译后文字。 */
  TargetText?: string | null;
}

declare interface ConfirmVideoTranslateJobRequest {
  /** 视频翻译任务 ID */
  JobId: string;
  /** 待确认文本 */
  TranslateResults: AudioTranslateResult[];
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

declare interface DescribeVideoTranslateJobRequest {
  /** JobId。 */
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
  /** 视频生成任务 ID */
  JobVideoId?: string;
  /** 视频素材原始 URL */
  OriginalVideoUrl?: string;
  /** 文本片段及其时间戳 */
  AsrTimestamps?: AsrTimestamps[];
  /** 提交视频翻译任务时的 requestId */
  JobSubmitReqId?: string;
  /** 音频审核任务 ID */
  JobAudioModerationId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitVideoTranslateJobRequest {
  /** 视频地址URL。 */
  VideoUrl: string;
  /** 源语言：zh, en */
  SrcLang: string;
  /** 目标语言：zh, en */
  DstLang: string;
  /** 当音频 URL 不为空时，默认以音频驱动视频任务口型 */
  AudioUrl?: string;
  /** 是否需要确认翻译结果0：不需要，1：需要 */
  Confirm?: number;
  /** 是否开启口型驱动，0：不开启，1：开启。默认开启。 */
  LipSync?: number;
}

declare interface SubmitVideoTranslateJobResponse {
  /** 任务ID。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vtc 视频转译} */
declare interface Vtc {
  (): Versions;
  /** 确认视频翻译结果 {@link ConfirmVideoTranslateJobRequest} {@link ConfirmVideoTranslateJobResponse} */
  ConfirmVideoTranslateJob(data: ConfirmVideoTranslateJobRequest, config?: AxiosRequestConfig): AxiosPromise<ConfirmVideoTranslateJobResponse>;
  /** 查询视频转译任务 {@link DescribeVideoTranslateJobRequest} {@link DescribeVideoTranslateJobResponse} */
  DescribeVideoTranslateJob(data: DescribeVideoTranslateJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoTranslateJobResponse>;
  /** 提交视频转译任务 {@link SubmitVideoTranslateJobRequest} {@link SubmitVideoTranslateJobResponse} */
  SubmitVideoTranslateJob(data: SubmitVideoTranslateJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitVideoTranslateJobResponse>;
}

export declare type Versions = ["2024-02-23"];

export default Vtc;
