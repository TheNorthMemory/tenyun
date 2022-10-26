/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 人脸变年龄信息 */
declare interface AgeInfo {
  /** 变化到的人脸年龄 [10,80]。 */
  Age: number;
  /** 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。 您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800) 接口获取人脸框位置信息。 */
  FaceRect?: FaceRect;
}

/** 人像渐变返回结果 */
declare interface FaceMorphOutput {
  /** 人像渐变输出的url */
  MorphUrl: string | null;
  /** 人像渐变输出的结果MD5，用于校验 */
  MorphMd5: string | null;
  /** 人像渐变输出的结果封面图base64字符串 */
  CoverImage: string | null;
}

/** 人脸框信息 */
declare interface FaceRect {
  /** 人脸框左上角纵坐标。 */
  Y: number;
  /** 人脸框左上角横坐标。 */
  X: number;
  /** 人脸框宽度。 */
  Width: number;
  /** 人脸框高度。 */
  Height: number;
}

/** 人脸转换性别信息 */
declare interface GenderInfo {
  /** 选择转换方向，0：男变女，1：女变男。 */
  Gender: number;
  /** 人脸框位置。若不输入则选择 Image 或 Url 中面积最大的人脸。 您可以通过 [人脸检测与分析](https://cloud.tencent.com/document/api/867/32800) 接口获取人脸框位置信息。 */
  FaceRect?: FaceRect;
}

/** 渐变参数 */
declare interface GradientInfo {
  /** 图片的展示时长，即单张图片静止不变的时间。GIF默认每张图片0.7s，视频默认每张图片0.5s。最大取值1s。 */
  Tempo?: number;
  /** 人像渐变的最长时间，即单张图片使用渐变特效的时间。 GIF默认值为0.5s，视频默值认为1s。最大取值1s。 */
  MorphTime?: number;
}

declare interface CancelFaceMorphJobRequest {
  /** 人像渐变任务Job id */
  JobId: string;
}

declare interface CancelFaceMorphJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ChangeAgePicRequest {
  /** 人脸变老变年轻信息。 您可以输入最多3个 AgeInfo 来实现给一张图中的最多3张人脸变老变年轻。 */
  AgeInfos: AgeInfo[];
  /** 图片 base64 数据，base64 编码后大小不可超过5M。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。 */
  RspImgType?: string;
}

declare interface ChangeAgePicResponse {
  /** RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64 */
  ResultImage?: string;
  /** RspImgType 为 url 时，返回处理后的图片 url 数据。 */
  ResultUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface FaceCartoonPicRequest {
  /** 图片 base64 数据，base64 编码后大小不可超过5M。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url ，对应图片 base64 编码后大小不可超过5M。图片的 Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。非腾讯云存储的Url速度和稳定性可能受一定影响。支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。 */
  RspImgType?: string;
  /** 关闭全图动漫化，传入true（不分大小写）即关闭全图动漫化。 */
  DisableGlobalEffect?: string;
}

declare interface FaceCartoonPicResponse {
  /** 结果图片Base64信息。 */
  ResultImage: string;
  /** RspImgType 为 url 时，返回处理后的图片 url 数据。(默认为base64) */
  ResultUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MorphFaceRequest {
  /** 图片 base64 数据，base64 编码后大小不可超过5M。 jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 人员人脸总数量至少2张，不可超过5张。 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Images?: string[];
  /** 图片的 Url 。对应图片 base64 编码后大小不可超过5M。jpg格式长边像素不可超过4000，其他格式图片长边像素不可超2000。 Url、Image必须提供一个，如果都提供，只使用 Url。图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 人员人脸总数量不可超过5张。 若图片中包含多张人脸，只选取其中人脸面积最大的人脸。 */
  Urls?: string[];
  /** 人脸渐变参数。可调整每张图片的展示时长、人像渐变的最长时间 */
  GradientInfos?: GradientInfo[];
  /** 视频帧率，取值[1,25]。默认10 */
  Fps?: number;
  /** 视频类型，取值0。目前仅支持MP4格式，默认为MP4格式 */
  OutputType?: number;
  /** 视频宽度，取值[128,1280]。默认值720 */
  OutputWidth?: number;
  /** 视频高度，取值[128,1280]。默认值1280 */
  OutputHeight?: number;
}

declare interface MorphFaceResponse {
  /** 人像渐变任务的Job id */
  JobId: string;
  /** 预估处理时间，粒度为秒 */
  EstimatedProcessTime: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface QueryFaceMorphJobRequest {
  /** 人像渐变任务Job id */
  JobId: string;
}

declare interface QueryFaceMorphJobResponse {
  /** 当前任务状态：排队中、处理中、处理失败或者处理完成 */
  JobStatus: string;
  /** 人像渐变输出的结果信息 */
  FaceMorphOutput: FaceMorphOutput | null;
  /** 当前任务状态码：1：排队中、3: 处理中、5: 处理失败、7:处理完成 */
  JobStatusCode: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SwapGenderPicRequest {
  /** 人脸转化性别信息。 您可以输入最多3个 GenderInfo 来实现给一张图中的最多3张人脸转换性别。 */
  GenderInfos: GenderInfo[];
  /** 图片 base64 数据，base64 编码后大小不可超过5M。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url ，对应图片 base64 编码后大小不可超过5M。 图片的 Url、Image必须提供一个，如果都提供，只使用 Url。 图片存储于腾讯云的 Url 可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 返回图像方式（base64 或 url ) ，二选一。url有效期为1天。 */
  RspImgType?: string;
}

declare interface SwapGenderPicResponse {
  /** RspImgType 为 base64 时，返回处理后的图片 base64 数据。默认返回base64 */
  ResultImage?: string;
  /** RspImgType 为 url 时，返回处理后的图片 url 数据。 */
  ResultUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [人像变换](https://cloud.tencent.com/document/product/1202) */
declare interface Ft {
  (): Versions;
  /** 撤销人像渐变任务 */
  CancelFaceMorphJob(data: CancelFaceMorphJobRequest, config?: AxiosRequestConfig): AxiosPromise<CancelFaceMorphJobResponse>;
  /** 人脸年龄变化 */
  ChangeAgePic(data: ChangeAgePicRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeAgePicResponse>;
  /** 人像动漫化 */
  FaceCartoonPic(data?: FaceCartoonPicRequest, config?: AxiosRequestConfig): AxiosPromise<FaceCartoonPicResponse>;
  /** 人像渐变 */
  MorphFace(data?: MorphFaceRequest, config?: AxiosRequestConfig): AxiosPromise<MorphFaceResponse>;
  /** 查询人像渐变任务 */
  QueryFaceMorphJob(data: QueryFaceMorphJobRequest, config?: AxiosRequestConfig): AxiosPromise<QueryFaceMorphJobResponse>;
  /** 人脸性别转换 */
  SwapGenderPic(data: SwapGenderPicRequest, config?: AxiosRequestConfig): AxiosPromise<SwapGenderPicResponse>;
}

export declare type Versions = ["2020-03-04"];

export default Ft;
