/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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

declare interface SubmitVideoStylizationJobRequest {
  /** 风格ID，取值说明：2d_anime 2D动漫；3d_cartoon 3D卡通；3d_china 3D国潮；pixel_art	像素风。 */
  StyleId: string;
  /** 输入视频URL。视频要求：- 视频格式：mp4、mov；- 视频时长：1～60秒；- 视频分辨率：540P~2056P，即长宽像素数均在540px～2056px范围内；- 视频大小：不超过200M；- 视频FPS：15～60fps。 */
  VideoUrl: string;
}

declare interface SubmitVideoStylizationJobResponse {
  /** 任务ID */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vcg 视频生成} */
declare interface Vcg {
  (): Versions;
  /** 查询视频风格化任务 {@link DescribeVideoStylizationJobRequest} {@link DescribeVideoStylizationJobResponse} */
  DescribeVideoStylizationJob(data: DescribeVideoStylizationJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoStylizationJobResponse>;
  /** 提交视频风格化任务 {@link SubmitVideoStylizationJobRequest} {@link SubmitVideoStylizationJobResponse} */
  SubmitVideoStylizationJob(data: SubmitVideoStylizationJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitVideoStylizationJobResponse>;
}

export declare type Versions = ["2024-04-04"];

export default Vcg;
