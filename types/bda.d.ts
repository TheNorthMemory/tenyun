/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 图像坐标信息。 */
declare interface ImageRect {
  /** 左上角横坐标。 */
  X: number;
  /** 左上角纵坐标。 */
  Y: number;
  /** 人体宽度。 */
  Width: number;
  /** 人体高度。 */
  Height: number;
  /** 分割选项名称。 */
  Label: string;
}

/** 此参数为分割选项，请根据需要选择自己所想从图片中分割的部分。注意所有选项均为非必选，如未选择则值默认为false, 但是必须要保证多于一个选项的描述为true。 */
declare interface SegmentationOptions {
  /** 分割选项-背景 */
  Background?: boolean;
  /** 分割选项-头发 */
  Hair?: boolean;
  /** 分割选项-左眉 */
  LeftEyebrow?: boolean;
  /** 分割选项-右眉 */
  RightEyebrow?: boolean;
  /** 分割选项-左眼 */
  LeftEye?: boolean;
  /** 分割选项-右眼 */
  RightEye?: boolean;
  /** 分割选项-鼻子 */
  Nose?: boolean;
  /** 分割选项-上唇 */
  UpperLip?: boolean;
  /** 分割选项-下唇 */
  LowerLip?: boolean;
  /** 分割选项-牙齿 */
  Tooth?: boolean;
  /** 分割选项-口腔（不包含牙齿） */
  Mouth?: boolean;
  /** 分割选项-左耳 */
  LeftEar?: boolean;
  /** 分割选项-右耳 */
  RightEar?: boolean;
  /** 分割选项-面部(不包含眼、耳、口、鼻等五官及头发。) */
  Face?: boolean;
  /** 复合分割选项-头部(包含所有的头部元素，相关装饰除外) */
  Head?: boolean;
  /** 分割选项-身体（包含脖子） */
  Body?: boolean;
  /** 分割选项-帽子 */
  Hat?: boolean;
  /** 分割选项-头饰 */
  Headdress?: boolean;
  /** 分割选项-耳环 */
  Earrings?: boolean;
  /** 分割选项-项链 */
  Necklace?: boolean;
  /** 分割选项-随身物品（ 例如伞、包、手机等。 ） */
  Belongings?: boolean;
}

/** 视频基础信息 */
declare interface VideoBasicInformation {
  /** 视频宽度 */
  FrameWidth: number;
  /** 视频高度 */
  FrameHeight: number;
  /** 视频帧速率(FPS) */
  FramesPerSecond: number;
  /** 视频时长 */
  Duration: number;
  /** 视频帧数 */
  TotalFrames: number;
}

declare interface CreateSegmentationTaskRequest {
  /** 需要分割的视频URL，可外网访问。 */
  VideoUrl: string;
  /** 背景图片URL。 可以将视频背景替换为输入的图片。 如果不输入背景图片，则输出人像区域mask。 */
  BackgroundImageUrl?: string;
  /** 预留字段，后期用于展示更多识别信息。 */
  Config?: string;
}

declare interface CreateSegmentationTaskResponse {
  /** 任务标识ID,可以用与追溯任务状态，查看任务结果 */
  TaskID?: string;
  /** 预估处理时间，单位为秒 */
  EstimatedProcessingTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSegmentationTaskRequest {
  /** 在提交分割任务成功时返回的任务标识ID。 */
  TaskID: string;
}

declare interface DescribeSegmentationTaskResponse {
  /** 当前任务状态：QUEUING 排队中PROCESSING 处理中FINISHED 处理完成 */
  TaskStatus?: string;
  /** 分割后视频URL, 存储于腾讯云COS */
  ResultVideoUrl?: string | null;
  /** 分割后视频MD5，用于校验 */
  ResultVideoMD5?: string | null;
  /** 视频基本信息 */
  VideoBasicInformation?: VideoBasicInformation | null;
  /** 分割任务错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SegmentCustomizedPortraitPicRequest {
  /** 此参数为分割选项，请根据需要选择自己所想从图片中分割的部分。注意所有选项均为非必选，如未选择则值默认为false, 但是必须要保证多于一个选项的描述为true。 */
  SegmentationOptions: SegmentationOptions;
  /** 图片 base64 数据，base64 编码后大小不可超过5M。图片分辨率须小于2000*2000。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。Url、Image必须提供一个，如果都提供，只使用 Url。图片分辨率须小于2000*2000 ，图片 base64 编码后大小不可超过5M。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
}

declare interface SegmentCustomizedPortraitPicResponse {
  /** 根据指定标签分割输出的透明背景人像图片的 base64 数据。 */
  PortraitImage?: string;
  /** 指定标签处理后的Mask。一个通过 Base64 编码的文件，解码后文件由 Float 型浮点数组成。这些浮点数代表原图从左上角开始的每一行的每一个像素点，每一个浮点数的值是原图相应像素点位于人体轮廓内的置信度（0-1）转化的灰度值（0-255） */
  MaskImage?: string;
  /** 坐标信息。 */
  ImageRects?: ImageRect[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SegmentPortraitPicRequest {
  /** 图片 base64 数据，base64 编码后大小不可超过5M。图片分辨率须小于2000*2000。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Image?: string;
  /** 图片的 Url 。Url、Image必须提供一个，如果都提供，只使用 Url。图片分辨率须小于2000*2000 ，图片 base64 编码后大小不可超过5M。 图片存储于腾讯云的Url可保障更高下载速度和稳定性，建议图片存储于腾讯云。 非腾讯云存储的Url速度和稳定性可能受一定影响。 支持PNG、JPG、JPEG、BMP，不支持 GIF 图片。 */
  Url?: string;
  /** 返回图像方式（base64 或 Url ) ，二选一。url有效期为30分钟。 */
  RspImgType?: string;
  /** 适用场景类型。取值：GEN/GS。GEN为通用场景模式；GS为绿幕场景模式，针对绿幕场景下的人像分割效果更好。两种模式选择一种传入，默认为GEN。 */
  Scene?: string;
}

declare interface SegmentPortraitPicResponse {
  /** 处理后的图片 base64 数据，透明背景图。 */
  ResultImage?: string | null;
  /** 一个通过 base64 编码的文件，解码后文件由 Float 型浮点数组成。这些浮点数代表原图从左上角开始的每一行的每一个像素点，每一个浮点数的值是原图相应像素点位于人体轮廓内的置信度（0-1）转化的灰度值（0-255）。 */
  ResultMask?: string | null;
  /** 图片是否存在前景。 */
  HasForeground?: boolean | null;
  /** 支持将处理过的图片 base64 数据，透明背景图以Url的形式返回值，Url有效期为30分钟。 */
  ResultImageUrl?: string | null;
  /** 一个通过 base64 编码的文件，解码后文件由 Float 型浮点数组成。支持以Url形式的返回值；Url有效期为30分钟。 */
  ResultMaskUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateSegmentationTaskRequest {
  /** 在提交分割任务成功时返回的任务标识ID。 */
  TaskID: string;
}

declare interface TerminateSegmentationTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Bda 人体分析} */
declare interface Bda {
  (): Versions;
  /** 创建视频人像分割处理任务 {@link CreateSegmentationTaskRequest} {@link CreateSegmentationTaskResponse} */
  CreateSegmentationTask(data: CreateSegmentationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSegmentationTaskResponse>;
  /** 查看视频人像分割处理任务信息 {@link DescribeSegmentationTaskRequest} {@link DescribeSegmentationTaskResponse} */
  DescribeSegmentationTask(data: DescribeSegmentationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSegmentationTaskResponse>;
  /** 自定义人像分割 {@link SegmentCustomizedPortraitPicRequest} {@link SegmentCustomizedPortraitPicResponse} */
  SegmentCustomizedPortraitPic(data: SegmentCustomizedPortraitPicRequest, config?: AxiosRequestConfig): AxiosPromise<SegmentCustomizedPortraitPicResponse>;
  /** 人像分割 {@link SegmentPortraitPicRequest} {@link SegmentPortraitPicResponse} */
  SegmentPortraitPic(data?: SegmentPortraitPicRequest, config?: AxiosRequestConfig): AxiosPromise<SegmentPortraitPicResponse>;
  /** 终止视频人像分割处理任务 {@link TerminateSegmentationTaskRequest} {@link TerminateSegmentationTaskResponse} */
  TerminateSegmentationTask(data: TerminateSegmentationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateSegmentationTaskResponse>;
}

export declare type Versions = ["2020-03-24"];

export default Bda;
