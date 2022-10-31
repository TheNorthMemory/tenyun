/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 识别出人脸对应的候选人。 */
declare interface Candidate {
  /** 识别出人脸对应的候选人数组。当前返回相似度最高的候选人。 */
  Name: string;
  /** 相似度，0-100之间。 */
  Confidence: number;
}

/** 恶心识别结果。 */
declare interface DisgustResult {
  /** 该识别场景的错误码：0表示成功，-1表示系统错误，-2表示引擎错误。 */
  Code: number;
  /** 错误码描述信息。 */
  Msg: string;
  /** 识别场景的审核结论：PASS：正常REVIEW：疑似BLOCK：违规 */
  Suggestion: string;
  /** 图像恶心的分数，0-100之间，分数越高恶心几率越大。 */
  Confidence: number;
}

/** 识别出的人脸在图片中的位置。 */
declare interface FaceRect {
  /** 人脸区域左上角横坐标。 */
  X: number;
  /** 人脸区域左上角纵坐标。 */
  Y: number;
  /** 人脸区域宽度。 */
  Width: number;
  /** 人脸区域高度。 */
  Height: number;
}

/** 人脸识别结果。 */
declare interface FaceResult {
  /** 检测出的人脸框位置。 */
  FaceRect: FaceRect;
  /** 候选人列表。当前返回相似度最高的候选人。 */
  Candidates: Candidate[];
}

/** 政治敏感识别结果。 */
declare interface PoliticsResult {
  /** 该识别场景的错误码：0表示成功，-1表示系统错误，-2表示引擎错误，-1400表示图片解码失败，-1401表示图片不符合规范。 */
  Code: number;
  /** 错误码描述信息。 */
  Msg: string;
  /** 识别场景的审核结论：PASS：正常REVIEW：疑似BLOCK：违规 */
  Suggestion: string;
  /** 图像涉政的分数，0-100之间，分数越高涉政几率越大。Type为DNA时：0到75，Suggestion建议为PASS75到90，Suggestion建议为REVIEW90到100，Suggestion建议为BLOCKType为FACE时：0到55，Suggestion建议为PASS55到60，Suggestion建议为REVIEW60到100，Suggestion建议为BLOCK */
  Confidence: number;
  /** Type取值为‘FACE’时，人脸识别的结果列表。基于图片中实际检测到的人脸数，返回数组最大值不超过5个。 */
  FaceResults: FaceResult[];
  /** 取值'DNA' 或‘FACE’。DNA表示结论和置信度来自图像指纹，FACE表示结论和置信度来自人脸识别。 */
  Type: string;
  /** 鉴政识别返回的详细标签后期开放。 */
  AdvancedInfo: string;
}

/** 色情识别结果。 */
declare interface PornResult {
  /** 该识别场景的错误码：0表示成功，-1表示系统错误，-2表示引擎错误，-1400表示图片解码失败。 */
  Code: number;
  /** 错误码描述信息。 */
  Msg: string;
  /** 识别场景的审核结论：PASS：正常REVIEW：疑似BLOCK：违规 */
  Suggestion: string;
  /** 算法对于Suggestion的置信度，0-100之间，值越高，表示对于Suggestion越确定。 */
  Confidence: number;
  /** 预留字段，后期用于展示更多识别信息。 */
  AdvancedInfo: string;
  /** 取值'LABEL‘，LABEL表示结论和置信度来自标签分类。 */
  Type: string;
}

/** 暴恐识别结果。 */
declare interface TerrorismResult {
  /** 该识别场景的错误码：0表示成功，-1表示系统错误，-2表示引擎错误，-1400表示图片解码失败。 */
  Code: number;
  /** 错误码描述信息。 */
  Msg: string;
  /** 识别场景的审核结论：PASS：正常REVIEW：疑似BLOCK：违规 */
  Suggestion: string;
  /** 图像涉恐的分数，0-100之间，分数越高涉恐几率越大。Type为LABEL时：0到86，Suggestion建议为PASS86到91，Suggestion建议为REVIEW91到100，Suggestion建议为BLOCKType为FACE时：0到55，Suggestion建议为PASS55到60，Suggestion建议为REVIEW60到100，Suggestion建议为BLOCK */
  Confidence: number;
  /** Type取值为‘FACE’时，人脸识别的结果列表。基于图片中实际检测到的人脸数，返回数组最大值不超过5个。 */
  FaceResults: FaceResult[];
  /** 暴恐识别返回的详细标签后期开放。 */
  AdvancedInfo: string;
  /** 取值'LABEL' 或‘FACE’，LABEL表示结论和置信度来自标签分类，FACE表示结论和置信度来自人脸识别。 */
  Type: string;
}

/** 内容审核 Asr 文字审核嫌疑片段 */
declare interface VodAsrTextSegmentItem {
  /** 嫌疑片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 嫌疑片段结束的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 嫌疑片段置信度。 */
  Confidence: number;
  /** 嫌疑片段审核结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 嫌疑关键词列表。 */
  KeywordSet: string[];
}

/** 文件音频流信息 */
declare interface VodAudioStreamItem {
  /** 音频流的码率，单位：bps。 */
  Bitrate: number;
  /** 音频流的采样率，单位：hz。 */
  SamplingRate: number;
  /** 音频流的编码格式，例如 aac。 */
  Codec: string;
}

/** 媒体文件元信息。 */
declare interface VodMetaData {
  /** 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。 */
  Size: number;
  /** 容器类型，例如 m4a，mp4 等。 */
  Container: string;
  /** 视频流码率平均值与音频流码率平均值之和，单位：bps。 */
  Bitrate: number;
  /** 视频流高度的最大值，单位：px。 */
  Height: number;
  /** 视频流宽度的最大值，单位：px。 */
  Width: number;
  /** 视频时长，单位：秒。 */
  Duration: number;
  /** 视频拍摄时的选择角度，单位：度。 */
  Rotate: number;
  /** 视频流信息。 */
  VideoStreamSet: VodVideoStreamItem[];
  /** 音频流信息。 */
  AudioStreamSet: VodAudioStreamItem[];
  /** 视频时长，单位：秒。 */
  VideoDuration: number;
  /** 音频时长，单位：秒。 */
  AudioDuration: number;
}

/** 内容审核 Ocr 文字审核嫌疑片段 */
declare interface VodOcrTextSegmentItem {
  /** 嫌疑片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 嫌疑片段结束的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 嫌疑片段置信度。 */
  Confidence: number;
  /** 嫌疑片段审核结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 嫌疑关键词列表。 */
  KeywordSet: string[];
  /** 嫌疑文字出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
  AreaCoordSet: number[];
}

/** 内容审核 Asr 文字鉴政、敏感任务结果类型 */
declare interface VodPoliticalAsrReviewResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，0：成功，其他值：失败。 */
  Code: number;
  /** 错误信息。 */
  Msg: string;
  /** 嫌疑片段审核结果建议，取值范围：pass。review。block。Asr 文字涉政、敏感评分，分值为0到100。 */
  Confidence: number;
  /** Asr 文字涉政、敏感结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Asr 文字有涉政、敏感嫌疑的视频片段列表。 */
  SegmentSet: VodAsrTextSegmentItem[];
}

/** 内容审核 Ocr 文字鉴政、敏感任务结果类型 */
declare interface VodPoliticalOcrReviewResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，0：成功，其他值：失败。 */
  Code: number;
  /** 错误信息。 */
  Msg: string;
  /** Ocr 文字涉政、敏感评分，分值为0到100。 */
  Confidence: number;
  /** Ocr 文字涉政、敏感结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Ocr 文字有涉政、敏感嫌疑的视频片段列表。 */
  SegmentSet: VodOcrTextSegmentItem[];
}

/** 涉政信息 */
declare interface VodPoliticalReviewResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，0：成功，其他值：失败。 */
  Code: number;
  /** 错误信息。 */
  Msg: string;
  /** 视频涉政评分，分值为0到100。 */
  Confidence: number;
  /** 涉政结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 视频鉴政结果标签，取值范围：politician：政治人物。violation_photo：违规图标。 */
  Label: string;
  /** 有涉政嫌疑的视频片段列表。 */
  SegmentSet: VodPoliticalReviewSegmentItem[];
}

/** 内容审核鉴政任务结果类型 */
declare interface VodPoliticalReviewSegmentItem {
  /** 嫌疑片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 嫌疑片段结束的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 嫌疑片段涉政分数。 */
  Confidence: number;
  /** 嫌疑片段鉴政结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 涉政人物、违规图标名字。 */
  Name: string;
  /** 嫌疑片段鉴政结果标签。 */
  Label: string;
  /** 嫌疑图片 URL （图片不会永久存储，到达PicUrlExpireTime 时间点后图片将被删除）。 */
  Url: string;
  /** 嫌疑图片 URL 失效时间，使用 ISO 日期格式。 */
  PicUrlExpireTimeStamp: number;
  /** 涉政人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
  AreaCoordSet: number[];
}

/** Asr 文字涉黄信息 */
declare interface VodPornAsrReviewResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，0：成功，其他值：失败。 */
  Code: number;
  /** 错误信息。 */
  Msg: string;
  /** Asr 文字涉黄评分，分值为0到100。 */
  Confidence: number;
  /** Asr 文字涉黄结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Asr 文字有涉黄嫌疑的视频片段列表。 */
  SegmentSet: VodAsrTextSegmentItem[];
}

/** 内容审核 Ocr 文字鉴黄任务结果类型 */
declare interface VodPornOcrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，0：成功，其他值：失败。 */
  Code: number;
  /** 错误信息。 */
  Msg: string;
  /** Ocr 文字涉黄评分，分值为0到100。 */
  Confidence: number;
  /** Ocr 文字涉黄结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Ocr 文字有涉黄嫌疑的视频片段列表。 */
  SegmentSet: VodOcrTextSegmentItem[];
}

/** 内容审核鉴黄任务结果类型 */
declare interface VodPornReviewResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，0：成功，其他值：失败。 */
  Code: number;
  /** 错误信息。 */
  Msg: string;
  /** 视频鉴黄评分，分值为0到100。 */
  Confidence: number;
  /** 鉴黄结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 视频鉴黄结果标签，取值范围：porn：色情。sexy：性感。vulgar：低俗。intimacy：亲密行为。 */
  Label: string;
  /** 有涉黄嫌疑的视频片段列表。 */
  SegmentSet: VodPornReviewSegmentItem[];
}

/** 内容审核涉黄/暴恐嫌疑片段 */
declare interface VodPornReviewSegmentItem {
  /** 嫌疑片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 嫌疑片段结束的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 嫌疑片段涉黄分数。 */
  Confidence: number;
  /** 嫌疑片段鉴黄结果标签。 */
  Label: string;
  /** 嫌疑片段鉴黄结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 嫌疑图片 URL （图片不会永久存储，到达PicUrlExpireTime 时间点后图片将被删除）。 */
  Url: string;
  /** 嫌疑图片 URL 失效时间，使用 ISO 日期格式。 */
  PicUrlExpireTimeStamp: number;
}

/** 暴恐信息 */
declare interface VodTerrorismReviewResult {
  /** 视频暴恐评分，分值为0到100。 */
  Confidence: number;
  /** 暴恐结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 视频暴恐结果标签，取值范围：guns：武器枪支。crowd：人群聚集。police：警察部队。bloody：血腥画面。banners：暴恐旗帜。militant：武装分子。explosion：爆炸火灾。terrorists：暴恐人物。 */
  Label: string;
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，0：成功，其他值：失败。 */
  Code: number;
  /** 错误信息。 */
  Msg: string;
  /** 有暴恐嫌疑的视频片段列表。 */
  SegmentSet: VodPornReviewSegmentItem[];
}

/** 文件视频流信息 */
declare interface VodVideoStreamItem {
  /** 视频流的码率，单位：bps。 */
  Bitrate: number;
  /** 视频流的高度，单位：px。 */
  Height: number;
  /** 视频流的宽度，单位：px。 */
  Width: number;
  /** 视频流的编码格式，例如 h264。 */
  Codec: string;
  /** 帧率，单位：hz。 */
  Fps: number;
}

declare interface DescribeVideoTaskRequest {
  /** 需要查询的视频审核的任务ID */
  VodTaskId: string;
}

declare interface DescribeVideoTaskResponse {
  /** 任务状态，取值：WAITING：等待中；PROCESSING：处理中；FINISH：已完成。 */
  Status?: string;
  /** 任务开始执行的时间，采用 ISO 日期格式。 */
  BeginProcessTime?: string;
  /** 任务执行完毕的时间，采用 ISO 日期格式。 */
  FinishTime?: string;
  /** 视频内容审核智能画面鉴黄任务的查询结果。 */
  PornResult?: VodPornReviewResult;
  /** 视频内容审核智能画面鉴恐任务的查询结果。 */
  TerrorismResult?: VodTerrorismReviewResult;
  /** 视频内容审核智能画面鉴政任务的查询结果。 */
  PoliticalResult?: VodPoliticalReviewResult;
  /** 视频内容审核 Ocr 文字鉴政任务的查询结果。 */
  PoliticalOcrResult?: VodPoliticalOcrReviewResult;
  /** 视频内容审核 Asr 文字鉴黄任务的查询结果。 */
  PornAsrResult?: VodPornAsrReviewResult;
  /** 视频内容审核 Asr 文字鉴政任务的查询结果。 */
  PoliticalAsrResult?: VodPoliticalAsrReviewResult;
  /** 视频内容审核 Ocr 文字鉴黄任务的查询结果。 */
  PornOcrResult?: VodPornOcrResult;
  /** 原始视频的元信息。 */
  MetaData?: VodMetaData;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ImageModerationRequest {
  /** 本次调用支持的识别场景，可选值如下：1. PORN，即色情识别2. TERRORISM，即暴恐识别3. POLITICS，即政治敏感识别支持多场景（Scenes）一起检测。例如，使用 Scenes=["PORN", "TERRORISM"]，即对一张图片同时进行色情识别和暴恐识别。 */
  Scenes: string[];
  /** 图片URL地址。 图片限制： • 图片格式：PNG、JPG、JPEG。 • 图片大小：所下载图片经Base64编码后不超过4M。图片下载时间不超过3秒。 • 图片像素：大于50*50像素，否则影响识别效果； • 长宽比：长边：短边<5； 接口响应时间会受到图片下载时间的影响，建议使用更可靠的存储服务，推荐将图片存储在腾讯云COS。 */
  ImageUrl?: string;
  /** 预留字段，后期用于展示更多识别信息。 */
  Config?: string;
  /** 透传字段，透传简单信息。 */
  Extra?: string;
  /** 图片经过base64编码的内容。最大不超过4M。与ImageUrl同时存在时优先使用ImageUrl字段。 */
  ImageBase64?: string;
}

declare interface ImageModerationResponse {
  /** 识别场景的审核结论：PASS：正常REVIEW：疑似BLOCK：违规 */
  Suggestion?: string;
  /** 色情识别结果。 */
  PornResult?: PornResult | null;
  /** 暴恐识别结果。 */
  TerrorismResult?: TerrorismResult | null;
  /** 政治敏感识别结果。 */
  PoliticsResult?: PoliticsResult | null;
  /** 透传字段，透传简单信息。 */
  Extra?: string;
  /** 恶心内容识别结果。 */
  DisgustResult?: DisgustResult | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface VideoModerationRequest {
  /** 需要审核的视频的URL地址 */
  VideoUrl: string;
  /** 开发者标识 */
  DeveloperId?: string;
  /** 审核完成后回调地址 */
  CBUrl?: string;
  /** 透传字段，透传简单信息。 */
  Extra?: string;
}

declare interface VideoModerationResponse {
  /** 视频审核任务ID */
  VodTaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Ticm 智能鉴黄} */
declare interface Ticm {
  (): Versions;
  /** {@link DescribeVideoTask 查询视频内容审核的结果}({@link DescribeVideoTaskRequest 请求参数}): {@link DescribeVideoTaskResponse 返回参数} */
  DescribeVideoTask(data: DescribeVideoTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoTaskResponse>;
  /** {@link ImageModeration 图像内容审核}({@link ImageModerationRequest 请求参数}): {@link ImageModerationResponse 返回参数} */
  ImageModeration(data: ImageModerationRequest, config?: AxiosRequestConfig): AxiosPromise<ImageModerationResponse>;
  /** {@link VideoModeration 视频内容识别}({@link VideoModerationRequest 请求参数}): {@link VideoModerationResponse 返回参数} */
  VideoModeration(data: VideoModerationRequest, config?: AxiosRequestConfig): AxiosPromise<VideoModerationResponse>;
}

export declare type Versions = ["2018-11-27"];

export default Ticm;
