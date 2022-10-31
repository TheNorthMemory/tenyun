/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 出现信息索引对AppearIndex可选值定义如下：| AppearIndex名称 | AppearIndex取值 | AppearIndex描述 ||---|---|---|| APPEAR_INDEX_INVALID | 0 | 非法的任务状态 || APPEAR_INDEX_AUDIO | 1 | 音频出现信息|| APPEAR_INDEX_TEXT | 2 | 可视文本出现信息|| APPEAR_INDEX_VIDEO | 3 | 视频出现信息|例如，当AppearIndex=1，Index=15，则意味着目标关键词出现在第16个(Index计数从0开始)音频文字识别结果之中 */
declare interface AppearIndexPair {
  /** 出现信息，取值范围为[1，3] */
  AppearIndex: number;
  /** AppearInfo中AppearIndex对应元素的第Index元素，从0开始技术 */
  Index: number;
}

/** 出现信息结构包含关键词在音频转文字(ASR)，图片转文字(OCR)以及视频结果中的出现信息 */
declare interface AppearInfo {
  /** 关键词在音频文本结果中的出现位置数组 */
  AudioAppearSet: TextAppearInfo[] | null;
  /** 关键词在可视文本结果中的出现位置数组 */
  TextAppearSet: TextAppearInfo[] | null;
  /** 关键词在视频信息中的出现位置数组 */
  VideoAppearSet: VideoAppearInfo[] | null;
}

/** 音频文件分析结果数据 */
declare interface AudioData {
  /** 音频识别文本结果 */
  AudioInfoSet: AudioInfo[] | null;
  /** 音频识别标签数据 */
  TextTagSet: MultiLevelTag;
}

/** 音频识别结果信息 */
declare interface AudioInfo {
  /** ASR提取的文字信息 */
  Content: string;
  /** ASR起始时间戳，从0开始 */
  StartTimeStamp: number;
  /** ASR结束时间戳，从0开始 */
  EndTimeStamp: number;
  /** ASR提取的音频标签 */
  Tag: string;
}

/** 音频文件元信息 */
declare interface AudioMetadata {
  /** 媒资音频文件大小，单位为Byte */
  FileSize: number | null;
  /** 媒资音频文件MD5 */
  MD5: string | null;
  /** 媒资音频时长，单位为秒 */
  Duration: number | null;
  /** 媒资音频采样率，单位为khz */
  SampleRate: number | null;
  /** 媒资音频码率，单位为kbps */
  BitRate: number | null;
  /** 媒资音频文件格式 */
  Format: string | null;
}

/** 已分类的人物信息 */
declare interface ClassifiedPersonInfo {
  /** 人物分类名称 */
  ClassifyName: string | null;
  /** 符合特定分类的人物信息数组 */
  PersonInfoSet: PersonInfo[] | null;
}

/** 自定义分类信息 */
declare interface CustomCategory {
  /** 自定义分类ID */
  CategoryId: string;
  /** 一级自定义类型 */
  L1Category: string;
  /** 二级自定义类型 */
  L2Category: string;
}

/** 自定义人物批量查询过滤条件 */
declare interface CustomPersonFilter {
  /** 待查询的人物姓名 */
  Name: string;
  /** 待过滤的自定义类型Id数组 */
  CategoryIdSet: string[];
  /** 待过滤的自定义人物Id数组 */
  PersonIdSet: string[];
  /** 一级自定义人物类型数组 */
  L1CategorySet: string[];
}

/** 自定义人物信息 */
declare interface CustomPersonInfo {
  /** 自定义人物Id */
  PersonId: string;
  /** 自定义人物姓名 */
  Name: string;
  /** 自定义人物简介信息 */
  BasicInfo: string;
  /** 一级自定义人物类型 */
  L1Category: string;
  /** 二级自定义人物类型 */
  L2Category: string;
  /** 自定义人物图片信息 */
  ImageInfoSet: PersonImageInfo[];
  /** 自定义人物创建时间 */
  CreateTime: string;
}

/** 任务结果数据 */
declare interface Data {
  /** 节目粒度结构化结果 */
  ShowInfo: ShowInfo | null;
}

/** 图片文件标签结果 */
declare interface ImageData {
  /** 图片中出现的可视文本识别结果 */
  OcrSet: ImageOcr[] | null;
  /** 图片中出现的帧标签识别结果 */
  FrameTagSet: MultiLevelTag | null;
  /** 图片中出现的层级人物识别结果 */
  MultiLevelPersonInfoSet: MultiLevelPersonInfo[] | null;
  /** 图片中出现的台标识别结果 */
  TvLogo: ImageLogo | null;
  /** 图片中出现的来源信息识别结果 */
  SourceLogo: ImageLogo | null;
}

/** 图片中出现的Logo信息 */
declare interface ImageLogo {
  /** 图片中出现的Logo识别结果 */
  Logo: string | null;
  /** Logo在图片中出现的位置 */
  AppearRect: Rectf | null;
}

/** 图片文件元信息 */
declare interface ImageMetadata {
  /** 媒资图片文件大小，单位为Byte */
  FileSize: number | null;
  /** 媒资图片文件MD5 */
  MD5: string | null;
  /** 媒资图片文件宽度 */
  Width: number | null;
  /** 媒资图片文件高度 */
  Height: number | null;
  /** 媒资图片文件格式 */
  Format: string | null;
}

/** 图片OCR识别结果 */
declare interface ImageOcr {
  /** 图片中可视文本识别结果 */
  Content: string | null;
  /** 可视文本在图片中的位置信息 */
  AppearRect: Rectf | null;
}

/** 一级标签信息请注意，一级标签信息可能不包含二级标签(此时L2TagSet为空)。在这种情况下，一级标签可直接包含出现信息。 */
declare interface L1Tag {
  /** 一级标签名 */
  Name: string;
  /** 二级标签数组 */
  L2TagSet: L2Tag[] | null;
  /** 一级标签出现信息 */
  AppearIndexPairSet: AppearIndexPair[] | null;
  /** 一级标签首次出现信息 */
  FirstAppear: number | null;
}

/** 二级标签信息请注意，二级标签信息可能不包含三级标签(此时L3TagSet为空)。 */
declare interface L2Tag {
  /** 二级标签名 */
  Name: string;
  /** 从属于此二级标签的三级标签数组 */
  L3TagSet: L3Tag[] | null;
  /** 二级标签出现信息 */
  AppearIndexPairSet: AppearIndexPair[] | null;
  /** 二级标签首次出现信息 */
  FirstAppear: number | null;
}

/** 三级标签信息。三级标签不再包含任何子标签。所有三级标签都对应着识别结果中的出现信息，出现信息使用AppearIndexPairSet定位。 */
declare interface L3Tag {
  /** 三级标签名 */
  Name: string;
  /** 三级标签出现信息索引数组 */
  AppearIndexPairSet: AppearIndexPair[] | null;
  /** 三级标签首次出现信息，可选值为[1,3] */
  FirstAppear: number | null;
}

/** 媒资过滤条件 */
declare interface MediaFilter {
  /** 媒资名称过滤条件 */
  MediaNameSet?: string[] | null;
  /** 媒资状态数组，媒资状态可选值参见MediaInfo */
  StatusSet?: number[] | null;
  /** 媒资ID数组 */
  MediaIdSet?: string[] | null;
  /** 媒资自定义标签数组 */
  LabelSet?: string[] | null;
  /** 媒资文件类型，定义参见[MediaPreknownInfo.MediaType](https://cloud.tencent.com/document/product/1509/65063) */
  MediaType?: number | null;
}

/** 媒资信息结构体媒资状态定义如下：| 状态名 | 状态值 | 状态描述 | |---|---|---|| MEDIA_STATUS_INVALID | 0 | 非法状态|| MEDIA_STATUS_WAITING| 1 | 等待中 || MEDIA_STATUS_DOWNLOADING | 2 | 下载中 || MEDIA_STATUS_DOWNLOADED | 3 | 下载完成 || MEDIA_STATUS_DOWNLOAD_FAILED | 4 | 下载失败(已废弃) || MEDIA_STATUS_TRANSCODING | 5 | 转码中 || MEDIA_STATUS_TRANSCODED | 6 | 转码完成 | | MEDIA_STATUS_TRANCODE_FAILED | 7 | 转码失败(已废弃) || MEDIA_STATUS_SUCCESS | 8 | 媒资文件状态就绪，可发起任务 || MEDIA_STATUS_EXPIRED | 9 | 媒资文件已过期 || MEDIA_STATUS_FAILED | 10 | 媒资导入失败 | */
declare interface MediaInfo {
  /** 媒资ID */
  MediaId: string;
  /** 媒资名称 */
  Name: string | null;
  /** 媒资下载地址 */
  DownLoadURL: string | null;
  /** 媒资状态，取值参看上方表格 */
  Status: number | null;
  /** 若状态为失败，表示失败原因 */
  FailedReason: string | null;
  /** 媒资视频元信息，仅在MediaType=VIDEO时有效 */
  Metadata: MediaMetadata | null;
  /** 导入视频进度，取值范围为[0,100] */
  Progress: number | null;
  /** 媒资自定义标签 */
  Label: string | null;
  /** 媒资导入完成后的回调地址 */
  CallbackURL: string | null;
  /** 媒资文件类型，具体参看[MediaPreknownInfo](https://cloud.tencent.com/document/product/1509/65063) */
  MediaType: number | null;
  /** 媒资音频元信息，仅在MediaType=Audio时有效 */
  AudioMetadata: AudioMetadata | null;
  /** 媒资图片文件元信息，仅在MediaType=Image时有效 */
  ImageMetadata: ImageMetadata | null;
  /** 媒资文本文件元信息，仅在MediaType=Text时有效 */
  TextMetadata: TextMetadata | null;
}

/** 媒资文件视频元信息，包括分辨率，帧率，码率等 */
declare interface MediaMetadata {
  /** 媒资视频文件大小，单位为字节 */
  FileSize: number;
  /** 媒资视频文件MD5 */
  MD5: string;
  /** 媒资视频时长，单位为秒 */
  Duration: number | null;
  /** 媒资视频总帧数 */
  NumFrames: number | null;
  /** 媒资视频宽度，单位为像素 */
  Width: number | null;
  /** 媒资视频高度，单位为像素 */
  Height: number | null;
  /** 媒资视频帧率，单位为Hz */
  FPS: number | null;
  /** 媒资视频比特率，单位为kbps */
  BitRate: number | null;
}

/** 描述输入媒资的先验知识，例如文件类型(视频)，媒体类型(新闻/综艺等)MediaPreknownInfo.MediaType:| MediaType 名称| MediaType取值 | MediaType描述 ||---|---|---|| MEDIA_TYPE_INVALID | 0 | 非法的媒资文件类型 | | MEDIA_TYPE_IMAGE | 1 | 图片 || MEDIA_TYPE_VIDEO | 2 | 视频 || MEDIA_TYPE_AUDIO | 3 | 音频 || MEDIA_TYPE_VIDEO_STREAM | 4 | 视频流，暂不支持 || MEDIA_TYPE_TEXT | 5 | 文本 |MediaPreknownInfo.MediaLabel:| MediaLabel名称 | MediaLabel取值 | MediaLabel描述 ||---|---|---|| MEDIA_LABEL_INVALID | 0 | 非法的一级媒资素材类型 || MEDIA_LABEL_NEWS | 1 | 新闻 || MEDIA_LABEL_ENTERTAINMENT | 2 | 综艺|| MEDIA_LABEL_INTERNET_INFO | 3 | 互联网资讯 | | MEDIA_LABEL_MOVIE | 4 | 电影 || MEDIA_LABEL_SERIES | 5 | 电视连续剧 || MEDIA_LABEL_SPECIAL | 6 | 专题 || MEDIA_LABEL_SPORT | 7 | 体育 |MediaPreknownInfo.MediaSecondLabel请注意：**当且仅当MediaLabel=2(综艺)时MediaSecondLabel才有意义**| MediaSecondLabel名称 | MediaSecondLabel取值 | MediaSecondLabel 描述||---|---|---|| MEDIA_SECOND_LABEL_INVALID | 0 | 非法的MediaSecondLabel || MEDIA_SECOND_LABEL_EVENING | 1 | 综艺晚会 || MEDIA_SECOND_LABEL_OTHERS | 2 | 其他 |MediaMeta.MediaLang| MediaLang名称 | MediaLang取值 | MediaLang描述 ||---|---|---|| MEDIA_LANG_INVALID | 0 | 非法的MediaLang || MEDIA_LANG_MANDARIN | 1 | 普通话 || MEDIA_LANG_CANTONESE | 2 | 粤语 | */
declare interface MediaPreknownInfo {
  /** 媒资文件类型，参见MediaPreknownInfo结构体定义 */
  MediaType: number;
  /** 媒资素材一级类型，参见MediaPreknownInfo结构体定义 */
  MediaLabel: number;
  /** 媒资素材二级类型，参见MediaPreknownInfo结构体定义 */
  MediaSecondLabel: number | null;
  /** 媒资音频类型，参见MediaPreknownInfo结构体定义 */
  MediaLang?: number | null;
}

/** 带类型树的已分类人物信息 */
declare interface MultiLevelPersonInfo {
  /** 一级分类名称(分类信息参见自定义人物类型) */
  L1ClassifyName: string | null;
  /** 已分类人物信息数组(所有分类类型为二级分类) */
  L2ClassifiedPersonInfoSet: ClassifiedPersonInfo[] | null;
  /** 检测结果来源 */
  Source: number | null;
}

/** 标签信息结构体包含多级(最多三级)标签结果，以及这些标签在识别结果中的出现位置 */
declare interface MultiLevelTag {
  /** 树状标签信息 */
  TagSet: L1Tag[] | null;
  /** 标签在识别结果中的定位信息 */
  AppearInfo: AppearInfo | null;
}

/** 自定义人物人脸图片信息 */
declare interface PersonImageInfo {
  /** 人脸图片ID */
  ImageId: string;
  /** 自定义人脸图片的URL，存储在IVLDCustomPreson存储桶内 */
  ImageURL: string;
  /** 自定义人脸图片处理错误码 */
  ErrorCode: string;
  /** 自定义人脸图片处理错误信息 */
  ErrorMsg: string;
}

/** 人物信息 */
declare interface PersonInfo {
  /** 公众人物姓名 */
  Name: string;
  /** 公众人物职务 */
  Job: string;
  /** 首次出现模态，可选值为[1,3]，详细参见AppearIndex定义 */
  FirstAppear: number;
  /** 人物出现信息 */
  AppearInfo: AppearInfo;
  /** 人脸在图片中的位置，仅在图片标签任务有效 */
  AppearRect: Rectf | null;
}

/** 矩形内容框 */
declare interface Rectf {
  /** 矩形框左上角水平座标 */
  X: number | null;
  /** 矩形框左上角竖直座标 */
  Y: number | null;
  /** 矩形框宽度 */
  Width: number | null;
  /** 矩形框长度 */
  Height: number | null;
}

/** 视频结构化结果 */
declare interface ShowInfo {
  /** 节目日期(只在新闻有效) */
  Date: string | null;
  /** 台标 */
  Logo: string | null;
  /** 节目名称 */
  Column: string | null;
  /** 来源信息 */
  Source: string | null;
  /** 节目封面 */
  CoverImageURL: string | null;
  /** 节目内容概要列表 */
  SummarySet: string[] | null;
  /** 节目片段标题列表 */
  TitleSet: string[] | null;
  /** 音频识别结果列表 */
  AudioInfoSet: AudioInfo[] | null;
  /** 可视文字识别结果列表 */
  TextInfoSet: TextInfo[] | null;
  /** 已分类人物信息列表 */
  ClassifiedPersonInfoSet: ClassifiedPersonInfo[] | null;
  /** 文本标签列表，包含标签内容和出现信息 */
  TextTagSet: MultiLevelTag | null;
  /** 帧标签列表，包括人物信息，场景信息等 */
  FrameTagSet: MultiLevelTag | null;
  /** 视频下载地址 */
  WebMediaURL: string | null;
  /** 媒资分类信息 */
  MediaClassifierSet: string[] | null;
  /** 概要标签信息 */
  SummaryTagSet: string[] | null;
  /** 未知人物信息 */
  UnknownPersonSet: UnknownPerson[] | null;
  /** 树状已分类人物信息 */
  MultiLevelPersonInfoSet: MultiLevelPersonInfo[] | null;
}

/** 排序条件 */
declare interface SortBy {
  /** 排序字段，默认为CreateTime */
  By?: string;
  /** true表示降序，false表示升序 */
  Descend?: boolean;
}

/** 任务筛选条件结构体 */
declare interface TaskFilter {
  /** 媒资文件类型 */
  MediaTypeSet?: number[];
  /** 待筛选的任务状态列表 */
  TaskStatusSet?: number[];
  /** 待筛选的任务名称数组 */
  TaskNameSet?: string[];
  /** TaskId数组 */
  TaskIdSet?: string[];
  /** 媒资文件名数组 */
  MediaNameSet?: string[];
  /** 媒资语言类型 */
  MediaLangSet?: number[];
  /** 媒资素材一级类型 */
  MediaLabelSet?: number[];
  /** 媒资自定义标签数组 */
  LabelSet?: string[];
}

/** 任务信息TaskStatus定义如下:| TaskStatus名称 | TaskStatus取值 | TaskStatus描述 ||---|---|---|| TASK_STATUS_INVALID | 0 | 非法的任务状态 || TASK_STATUS_WAITING | 1 | 排队中 || TASK_STATUS_ANALYSING | 2 | 任务分析中 || TASK_STATUS_ANALYSED | 3 | 任务分析完成 || TASK_STATUS_SNAPSHOT_CREATING | 4 | 任务结果快照生成中 || TASK_STATUS_SNAPSHOT_CREATED | 5 | 任务结果快照生成完成 || TASK_STATUS_RESULT_UPLOADING | 6 | 任务结果快照上传中 || TASK_STATUS_RESULT_UPLOADED | 7 | 任务结果快照上传完成 || TASK_STATUS_SUCCESS | 8 | 任务执行完成 || TASK_STATUS_FAILED | 9 | 任务执行失败 | */
declare interface TaskInfo {
  /** 任务ID */
  TaskId: string;
  /** 描述任务名称，指定后可根据名称筛选 */
  TaskName: string | null;
  /** 媒资文件ID */
  MediaId: string;
  /** 任务执行状态 */
  TaskStatus: number;
  /** 任务进度，范围为[0，100] */
  TaskProgress: number | null;
  /** 任务执行时间 */
  TaskTimeCost: number | null;
  /** 任务创建时间 */
  TaskCreateTime: string;
  /** 任务开始执行时间 */
  TaskStartTime: string | null;
  /** 任务失败原因 */
  FailedReason: string | null;
  /** 任务执行时指定的先验知识 */
  MediaPreknownInfo: MediaPreknownInfo;
  /** 媒资文件名称 */
  MediaName: string | null;
  /** 媒资自定义标签 */
  Label: string | null;
  /** 任务分析完成后的后调地址 */
  CallbackURL: string | null;
  /** 任务对应的媒资文件元信息，仅在MediaType为Audio时有效 */
  AudioMetadata: AudioMetadata | null;
  /** 任务对应的媒资文件元信息，仅在MediaType为Audio时有效 */
  ImageMetadata: ImageMetadata | null;
  /** 任务对应的媒资文件元信息，仅在MediaType为Text时有效 */
  TextMetadata: TextMetadata | null;
  /** 任务对应的媒资文件元信息，仅在MediaType为Video时有效 */
  Metadata: MediaMetadata | null;
}

/** 关键词在文本中的定位信息Position为关键词在文本中的偏移量，从0开始。例如，给定文本结果"欢迎收看新闻三十分”，以及关键词"新闻三十分"，那么StartPosition的值为4，EndPosition的值为9 */
declare interface TextAppearInfo {
  /** 文本结果数组中的下标 */
  Index: number;
  /** 关键词在文本中出现的起始偏移量(包含) */
  StartPosition: number;
  /** 关键词在文本中出现的结束偏移量(不包含) */
  EndPosition: number;
}

/** 文本文件标签识别结果 */
declare interface TextData {
  /** 文本内容信息 */
  Content: string | null;
  /** 文本概要信息 */
  Summary: string | null;
  /** 文本标签信息 */
  TextTagSet: MultiLevelTag | null;
}

/** 可视文本识别结果信息(OCR) */
declare interface TextInfo {
  /** OCR提取的内容 */
  Content: string;
  /** OCR起始时间戳，从0开始 */
  StartTimeStamp: number;
  /** OCR结束时间戳，从0开始 */
  EndTimeStamp: number;
  /** OCR标签信息 */
  Tag: string;
}

/** 文本文件元信息 */
declare interface TextMetadata {
  /** 媒资文本文件大小，单位为字节 */
  FileSize: number | null;
  /** 媒资文本文件MD5 */
  MD5: string | null;
  /** 媒资文本文件字符数 */
  Length: number | null;
  /** 媒资文本文件格式 */
  Format: string | null;
}

/** 未知人物信息 */
declare interface UnknownPerson {
  /** 视觉出现信息 */
  VideoAppearSet: VideoAppearInfo[] | null;
  /** 未知人物是否可以入库(只有当未知人物人脸小图质量分符合要求时才可入库) */
  PutLibraryAllowed: boolean | null;
}

/** 关键词在视觉结果中的定位信息 */
declare interface VideoAppearInfo {
  /** 视觉信息起始时间戳，从0开始 */
  StartTimeStamp: number;
  /** 视觉信息终止时间戳，从0开始关键词在视觉信息中的区间为[StartTimeStamp, EndTimeStamp) */
  EndTimeStamp: number;
  /** 关键词在视觉信息中的封面图片 */
  ImageURL: string;
}

declare interface AddCustomPersonImageRequest {
  /** 自定义人物Id */
  PersonId: string;
  /** 自定义人物图片地址 */
  ImageURL?: string;
  /** 图片数据base64之后的结果 */
  Image?: string;
}

declare interface AddCustomPersonImageResponse {
  /** 自定义人物Id */
  PersonId: string;
  /** 自定义人脸图片信息 */
  ImageInfo: PersonImageInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCustomCategoryRequest {
  /** 自定义一级类型 */
  L1Category: string;
  /** 自定义二级类型 */
  L2Category: string;
}

declare interface CreateCustomCategoryResponse {
  /** 自定义分类信息ID */
  CategoryId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCustomGroupRequest {
  /** 人脸图片COS存储桶Host地址 */
  Bucket: string;
}

declare interface CreateCustomGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCustomPersonRequest {
  /** 自定义人物姓名 */
  Name: string;
  /** 自定义人物简要信息(仅用于标记，不支持检索) */
  BasicInfo: string;
  /** 自定义分类ID，如不存在接口会报错 */
  CategoryId: string;
  /** 自定义人物图片URL，可支持任意地址，推荐使用COS */
  ImageURL?: string;
  /** 原始图片base64编码后的数据 */
  Image?: string;
}

declare interface CreateCustomPersonResponse {
  /** 自定义人物Id */
  PersonId: string;
  /** 自定义人脸信息 */
  ImageInfo: PersonImageInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDefaultCategoriesRequest {
}

declare interface CreateDefaultCategoriesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTaskRequest {
  /** 媒资文件ID，最长32B */
  MediaId: string;
  /** 媒资素材先验知识，相关限制参考MediaPreknownInfo */
  MediaPreknownInfo: MediaPreknownInfo;
  /** 任务名称，最长100个中文字符 */
  TaskName?: string;
  /** 是否上传转码后的视频，仅设置true时上传，默认为false */
  UploadVideo?: boolean;
  /** 自定义标签，可用于查询 */
  Label?: string;
  /** 任务分析完成的回调地址，该设置优先级高于控制台全局的设置； */
  CallbackURL?: string;
}

declare interface CreateTaskResponse {
  /** 智能标签视频分析任务ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCustomCategoryRequest {
  /** 自定义分类ID */
  CategoryId: string;
}

declare interface DeleteCustomCategoryResponse {
  /** 123 */
  CategoryId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCustomPersonImageRequest {
  /** 自定义人物Id */
  PersonId: string;
  /** 自定义人脸图片Id */
  ImageId: string;
}

declare interface DeleteCustomPersonImageResponse {
  /** 自定义人物Id */
  PersonId: string;
  /** 已删除的人物图片Id */
  ImageId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCustomPersonRequest {
  /** 待删除的自定义人物ID */
  PersonId: string;
}

declare interface DeleteCustomPersonResponse {
  /** 已删除的自定义人物Id */
  PersonId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMediaRequest {
  /** 媒资文件在系统中的ID */
  MediaId: string;
}

declare interface DeleteMediaResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTaskRequest {
  /** 任务Id */
  TaskId: string;
}

declare interface DeleteTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomCategoriesRequest {
}

declare interface DescribeCustomCategoriesResponse {
  /** 自定义人物类型数组 */
  CategorySet: CustomCategory[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomGroupRequest {
}

declare interface DescribeCustomGroupResponse {
  /** 自定义人物库所包含的人物个数 */
  GroupSize: number;
  /** 自定义人物库图片后续所在的存储桶 */
  Bucket: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomPersonDetailRequest {
  /** 自定义人物Id */
  PersonId: string;
}

declare interface DescribeCustomPersonDetailResponse {
  /** 自定义人物信息 */
  PersonInfo: CustomPersonInfo;
  /** 出现该自定义人物的所有分析人物Id */
  TaskIdSet: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomPersonsRequest {
  /** 分页序号，从1开始 */
  PageNumber: number;
  /** 分页数据行数，最多50 */
  PageSize: number;
  /** 排序信息，默认倒序 */
  SortBy?: SortBy;
  /** 自定义人物过滤条件 */
  Filter?: CustomPersonFilter;
}

declare interface DescribeCustomPersonsResponse {
  /** 满足过滤条件的自定义人物数量 */
  TotalCount: number;
  /** 自定义人物信息 */
  PersonInfoSet: CustomPersonInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMediaRequest {
  /** 导入媒资返回的媒资ID，最长32B */
  MediaId: string;
}

declare interface DescribeMediaResponse {
  /** 媒资信息 */
  MediaInfo: MediaInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMediasRequest {
  /** 分页序号，从1开始 */
  PageNumber: number;
  /** 每个分页所包含的元素数量，最大为50 */
  PageSize: number;
  /** 列举过滤条件，相关限制相见MediaFilter */
  MediaFilter?: MediaFilter;
  /** 返回结果排序信息，By字段只支持CreateTime */
  SortBy?: SortBy;
}

declare interface DescribeMediasResponse {
  /** 满足过滤条件的媒资视频总数量 */
  TotalCount: number;
  /** 满足过滤条件的媒资信息 */
  MediaInfoSet: MediaInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskDetailRequest {
  /** 创建任务返回的TaskId */
  TaskId: string;
}

declare interface DescribeTaskDetailResponse {
  /** 任务信息，不包含任务结果 */
  TaskInfo: TaskInfo | null;
  /** 视频任务结果数据，只在视频任务结束时返回 */
  TaskData: Data | null;
  /** 图片任务结果数据，只在图片任务结束时返回 */
  ImageTaskData: ImageData | null;
  /** 音频任务结果数据，只在音频任务结束时返回 */
  AudioTaskData: AudioData | null;
  /** 文本任务结果数据，只在文本任务结束时返回 */
  TextTaskData: TextData | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskRequest {
  /** CreateTask返回的任务ID，最长32B */
  TaskId: string;
}

declare interface DescribeTaskResponse {
  /** 任务信息，详情参见TaskInfo的定义 */
  TaskInfo: TaskInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTasksRequest {
  /** 分页序号，从1开始 */
  PageNumber?: number;
  /** 每个分页所包含的元素数量，最大为50 */
  PageSize?: number;
  /** 任务过滤条件，相关限制参见TaskFilter */
  TaskFilter?: TaskFilter;
  /** 返回结果排序信息，By字段只支持CreateTimeStamp */
  SortBy?: SortBy;
}

declare interface DescribeTasksResponse {
  /** 满足过滤条件的任务总数量 */
  TotalCount: number;
  /** 满足过滤条件的任务数组 */
  TaskInfoSet: TaskInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ImportMediaRequest {
  /** 待分析视频的URL，目前只支持*不带签名的*COS地址，长度最长1KB */
  URL: string;
  /** 待分析视频的MD5，为空时不做校验，否则会做MD5校验，长度必须为32B */
  MD5?: string;
  /** 待分析视频的名称，指定后可支持筛选，最多64B */
  Name?: string;
  /** 当非本人外部视频地址导入时，该字段为转存的cos桶地址且不可为空; 示例：https://${Bucket}-${AppId}.cos.${Region}.myqcloud.com/${PathPrefix}/ (注意，cos路径需要以/分隔符结尾)。推荐采用本主帐号COS桶，如果使用其他帐号COS桶，请确保COS桶可写，否则可导致分析失败 */
  WriteBackCosPath?: string;
  /** 自定义标签，可用于查询 */
  Label?: string;
  /** 媒资导入完成的回调地址，该设置优先级高于控制台全局的设置； */
  CallbackURL?: string;
  /** 媒资文件类型，详细定义参见[MediaPreknownInfo.MediaType](https://cloud.tencent.com/document/product/1509/65063)默认为2(视频) */
  MediaType?: number;
}

declare interface ImportMediaResponse {
  /** 媒资文件在系统中的ID */
  MediaId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCallbackRequest {
  /** 任务分析完成后回调地址 */
  TaskFinishNotifyURL: string;
  /** 媒体导入完成后回调地址 */
  MediaFinishNotifyURL: string;
}

declare interface ModifyCallbackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface QueryCallbackRequest {
}

declare interface QueryCallbackResponse {
  /** 任务分析完成后回调地址 */
  TaskFinishNotifyURL: string;
  /** 媒体导入完成后回调地址 */
  MediaFinishNotifyURL: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCustomCategoryRequest {
  /** 自定义人物类型Id */
  CategoryId: string;
  /** 一级自定义人物类型 */
  L1Category: string;
  /** 二级自定义人物类型 */
  L2Category?: string;
}

declare interface UpdateCustomCategoryResponse {
  /** 成功更新的自定义人物类型Id */
  CategoryId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateCustomPersonRequest {
  /** 待更新的自定义人物Id */
  PersonId: string;
  /** 更新后的自定义人物名称，如为空则不更新 */
  Name?: string;
  /** 更新后的自定义人物简介，如为空则不更新 */
  BasicInfo?: string;
  /** 更新后的分类信息，如为空则不更新 */
  CategoryId?: string;
}

declare interface UpdateCustomPersonResponse {
  /** 成功更新的自定义人物Id */
  PersonId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Ivld 媒体智能标签} */
declare interface Ivld {
  (): Versions;
  /** {@link AddCustomPersonImage 增加自定义人脸图片}({@link AddCustomPersonImageRequest 请求参数}): {@link AddCustomPersonImageResponse 返回参数} */
  AddCustomPersonImage(data: AddCustomPersonImageRequest, config?: AxiosRequestConfig): AxiosPromise<AddCustomPersonImageResponse>;
  /** {@link CreateCustomCategory 创建自定义人物分类}({@link CreateCustomCategoryRequest 请求参数}): {@link CreateCustomCategoryResponse 返回参数} */
  CreateCustomCategory(data: CreateCustomCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomCategoryResponse>;
  /** {@link CreateCustomGroup 创建自定义人物库}({@link CreateCustomGroupRequest 请求参数}): {@link CreateCustomGroupResponse 返回参数} */
  CreateCustomGroup(data: CreateCustomGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomGroupResponse>;
  /** {@link CreateCustomPerson 创建自定义人物}({@link CreateCustomPersonRequest 请求参数}): {@link CreateCustomPersonResponse 返回参数} */
  CreateCustomPerson(data: CreateCustomPersonRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomPersonResponse>;
  /** {@link CreateDefaultCategories 创建默认自定义人物类型}({@link CreateDefaultCategoriesRequest 请求参数}): {@link CreateDefaultCategoriesResponse 返回参数} */
  CreateDefaultCategories(data?: CreateDefaultCategoriesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDefaultCategoriesResponse>;
  /** {@link CreateTask 创建任务}({@link CreateTaskRequest 请求参数}): {@link CreateTaskResponse 返回参数} */
  CreateTask(data: CreateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskResponse>;
  /** {@link DeleteCustomCategory 删除自定义分类}({@link DeleteCustomCategoryRequest 请求参数}): {@link DeleteCustomCategoryResponse 返回参数} */
  DeleteCustomCategory(data: DeleteCustomCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomCategoryResponse>;
  /** {@link DeleteCustomPerson 删除自定义人物}({@link DeleteCustomPersonRequest 请求参数}): {@link DeleteCustomPersonResponse 返回参数} */
  DeleteCustomPerson(data: DeleteCustomPersonRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomPersonResponse>;
  /** {@link DeleteCustomPersonImage 删除自定义人脸}({@link DeleteCustomPersonImageRequest 请求参数}): {@link DeleteCustomPersonImageResponse 返回参数} */
  DeleteCustomPersonImage(data: DeleteCustomPersonImageRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomPersonImageResponse>;
  /** {@link DeleteMedia 删除媒资文件}({@link DeleteMediaRequest 请求参数}): {@link DeleteMediaResponse 返回参数} */
  DeleteMedia(data: DeleteMediaRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMediaResponse>;
  /** {@link DeleteTask 删除任务}({@link DeleteTaskRequest 请求参数}): {@link DeleteTaskResponse 返回参数} */
  DeleteTask(data: DeleteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskResponse>;
  /** {@link DescribeCustomCategories 批量描述自定义人物分类}({@link DescribeCustomCategoriesRequest 请求参数}): {@link DescribeCustomCategoriesResponse 返回参数} */
  DescribeCustomCategories(data?: DescribeCustomCategoriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomCategoriesResponse>;
  /** {@link DescribeCustomGroup 描述自定义人物库}({@link DescribeCustomGroupRequest 请求参数}): {@link DescribeCustomGroupResponse 返回参数} */
  DescribeCustomGroup(data?: DescribeCustomGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomGroupResponse>;
  /** {@link DescribeCustomPersonDetail 描述自定义人物详细信息}({@link DescribeCustomPersonDetailRequest 请求参数}): {@link DescribeCustomPersonDetailResponse 返回参数} */
  DescribeCustomPersonDetail(data: DescribeCustomPersonDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomPersonDetailResponse>;
  /** {@link DescribeCustomPersons 批量描述自定义人物}({@link DescribeCustomPersonsRequest 请求参数}): {@link DescribeCustomPersonsResponse 返回参数} */
  DescribeCustomPersons(data: DescribeCustomPersonsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomPersonsResponse>;
  /** {@link DescribeMedia 描述媒资文件}({@link DescribeMediaRequest 请求参数}): {@link DescribeMediaResponse 返回参数} */
  DescribeMedia(data: DescribeMediaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMediaResponse>;
  /** {@link DescribeMedias 批量描述媒资文件}({@link DescribeMediasRequest 请求参数}): {@link DescribeMediasResponse 返回参数} */
  DescribeMedias(data: DescribeMediasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMediasResponse>;
  /** {@link DescribeTask 描述任务}({@link DescribeTaskRequest 请求参数}): {@link DescribeTaskResponse 返回参数} */
  DescribeTask(data: DescribeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResponse>;
  /** {@link DescribeTaskDetail 描述任务与任务结果}({@link DescribeTaskDetailRequest 请求参数}): {@link DescribeTaskDetailResponse 返回参数} */
  DescribeTaskDetail(data: DescribeTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskDetailResponse>;
  /** {@link DescribeTasks 批量描述任务}({@link DescribeTasksRequest 请求参数}): {@link DescribeTasksResponse 返回参数} */
  DescribeTasks(data?: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** {@link ImportMedia 导入媒资文件}({@link ImportMediaRequest 请求参数}): {@link ImportMediaResponse 返回参数} */
  ImportMedia(data: ImportMediaRequest, config?: AxiosRequestConfig): AxiosPromise<ImportMediaResponse>;
  /** {@link ModifyCallback 编辑回调地址}({@link ModifyCallbackRequest 请求参数}): {@link ModifyCallbackResponse 返回参数} */
  ModifyCallback(data: ModifyCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCallbackResponse>;
  /** {@link QueryCallback 查询回调设置}({@link QueryCallbackRequest 请求参数}): {@link QueryCallbackResponse 返回参数} */
  QueryCallback(data?: QueryCallbackRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCallbackResponse>;
  /** {@link UpdateCustomCategory 更新自定义人物分类}({@link UpdateCustomCategoryRequest 请求参数}): {@link UpdateCustomCategoryResponse 返回参数} */
  UpdateCustomCategory(data: UpdateCustomCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCustomCategoryResponse>;
  /** {@link UpdateCustomPerson 更新自定义人物信息}({@link UpdateCustomPersonRequest 请求参数}): {@link UpdateCustomPersonResponse 返回参数} */
  UpdateCustomPerson(data: UpdateCustomPersonRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCustomPersonResponse>;
}

export declare type Versions = ["2021-09-03"];

export default Ivld;
