/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AI 智能分析模板详情 */
declare interface AIAnalysisTemplateItem {
  /** 智能分析模板唯一标识。 */
  Definition: number;
  /** 智能分析模板名称。 */
  Name: string;
  /** 智能分析模板描述信息。 */
  Comment: string;
  /** 智能分类任务控制参数。 */
  ClassificationConfigure: ClassificationConfigureInfo | null;
  /** 智能标签任务控制参数。 */
  TagConfigure: TagConfigureInfo | null;
  /** 智能封面任务控制参数。 */
  CoverConfigure: CoverConfigureInfo | null;
  /** 智能按帧标签任务控制参数。 */
  FrameTagConfigure: FrameTagConfigureInfo | null;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
  /** 模板类型，取值范围：* Preset：系统预置模板；* Custom：用户自定义模板。 */
  Type: string | null;
}

/** 视频内容识别模板详情 */
declare interface AIRecognitionTemplateItem {
  /** 视频内容识别模板唯一标识。 */
  Definition: number;
  /** 视频内容识别模板名称。 */
  Name: string;
  /** 视频内容识别模板描述信息。 */
  Comment: string;
  /** 人脸识别控制参数。 */
  FaceConfigure: FaceConfigureInfo;
  /** 文本全文识别控制参数。 */
  OcrFullTextConfigure: OcrFullTextConfigureInfo;
  /** 文本关键词识别控制参数。 */
  OcrWordsConfigure: OcrWordsConfigureInfo;
  /** 语音全文识别控制参数。 */
  AsrFullTextConfigure: AsrFullTextConfigureInfo;
  /** 语音关键词识别控制参数。 */
  AsrWordsConfigure: AsrWordsConfigureInfo;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
  /** 模板类型，取值范围：* Preset：系统预置模板；* Custom：用户自定义模板。 */
  Type: string | null;
}

/** 动作识别参数配置 */
declare interface ActionConfigInfo {
  /** 动作识别任务开关，可选值：ON：开启；OFF：关闭。 */
  Switch: string;
}

/** 编排子任务输出 */
declare interface ActivityResItem {
  /** 转码任务输出 */
  TranscodeTask: MediaProcessTaskTranscodeResult | null;
  /** 转动图任务输出 */
  AnimatedGraphicTask: MediaProcessTaskAnimatedGraphicResult | null;
  /** 时间点截图任务输出 */
  SnapshotByTimeOffsetTask: MediaProcessTaskSampleSnapshotResult | null;
  /** 采样截图任务输出 */
  SampleSnapshotTask: MediaProcessTaskSampleSnapshotResult | null;
  /** 雪碧图任务输出 */
  ImageSpriteTask: MediaProcessTaskImageSpriteResult | null;
  /** 自适应码流任务输出 */
  AdaptiveDynamicStreamingTask: MediaProcessTaskAdaptiveDynamicStreamingResult | null;
  /** 识别任务输出 */
  RecognitionTask: ScheduleRecognitionTaskResult | null;
  /** 审核任务输出 */
  ReviewTask: ScheduleReviewTaskResult | null;
  /** 分析任务输出 */
  AnalysisTask: ScheduleAnalysisTaskResult | null;
}

/** 编排任务输出 */
declare interface ActivityResult {
  /** 原子任务类型。Transcode：转码。SampleSnapshot：采样截图。AnimatedGraphics：转动图。SnapshotByTimeOffset：时间点截图。ImageSprites：雪碧图。AdaptiveDynamicStreaming：自适应码流。AiContentReview：内容审核。AIRecognition：智能识别。AIAnalysis：智能分析。 */
  ActivityType: string;
  /** 原子任务输出。 */
  ActivityResItem: ActivityResItem;
}

/** 转自适应码流信息 */
declare interface AdaptiveDynamicStreamingInfoItem {
  /** 转自适应码流规格。 */
  Definition: number;
  /** 打包格式，可能为 HLS和 MPEG-DASH 两种。 */
  Package: string;
  /** 播放路径。 */
  Path: string;
  /** 自适应码流文件的存储位置。 */
  Storage: TaskOutputStorage;
}

/** 对视频转自适应码流的输入参数类型 */
declare interface AdaptiveDynamicStreamingTaskInput {
  /** 转自适应码流模板 ID。 */
  Definition: number;
  /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
  WatermarkSet?: WatermarkInput[];
  /** 转自适应码流后文件的目标存储，不填则继承上层的 OutputStorage 值。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 转自适应码流后，manifest 文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}.{format}`。 */
  OutputObjectPath?: string;
  /** 转自适应码流后，子流文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}.{format}`。 */
  SubStreamObjectName?: string;
  /** 转自适应码流（仅 HLS）后，分片文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}_{segmentNumber}.{format}`。 */
  SegmentObjectName?: string;
}

/** 转自适应码流模板详情 */
declare interface AdaptiveDynamicStreamingTemplate {
  /** 转自适应码流模板唯一标识。 */
  Definition: number;
  /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type: string;
  /** 转自适应码流模板名称。 */
  Name: string;
  /** 转自适应码流模板描述信息。 */
  Comment: string;
  /** 转自适应码流格式，取值范围：HLS，MPEG-DASH。 */
  Format: string;
  /** 转自适应码流输入流参数信息，最多输入10路流。 */
  StreamInfos: AdaptiveStreamTemplate[];
  /** 是否禁止视频低码率转高码率，取值范围：0：否，1：是。 */
  DisableHigherVideoBitrate: number;
  /** 是否禁止视频分辨率转高分辨率，取值范围：0：否，1：是。 */
  DisableHigherVideoResolution: number;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
  UpdateTime: string;
}

/** 自适应转码流参数模板 */
declare interface AdaptiveStreamTemplate {
  /** 视频参数信息。 */
  Video: VideoTemplateInfo;
  /** 音频参数信息。 */
  Audio: AudioTemplateInfo;
  /** 是否移除音频流，取值范围：0：否，1：是。 */
  RemoveAudio?: number;
  /** 是否移除视频流，取值范围：0：否，1：是。 */
  RemoveVideo?: number;
}

/** 智能分析结果 */
declare interface AiAnalysisResult {
  /** 任务的类型，可以取的值有：Classification：智能分类Cover：智能封面Tag：智能标签FrameTag：智能按帧标签Highlight：智能精彩集锦 */
  Type: string;
  /** 视频内容分析智能分类任务的查询结果，当任务类型为 Classification 时有效。 */
  ClassificationTask: AiAnalysisTaskClassificationResult | null;
  /** 视频内容分析智能封面任务的查询结果，当任务类型为 Cover 时有效。 */
  CoverTask: AiAnalysisTaskCoverResult | null;
  /** 视频内容分析智能标签任务的查询结果，当任务类型为 Tag 时有效。 */
  TagTask: AiAnalysisTaskTagResult | null;
  /** 视频内容分析智能按帧标签任务的查询结果，当任务类型为 FrameTag 时有效。 */
  FrameTagTask: AiAnalysisTaskFrameTagResult | null;
}

/** 智能分类任务输入类型 */
declare interface AiAnalysisTaskClassificationInput {
  /** 视频智能分类模板 ID。 */
  Definition: number;
}

/** 智能分类结果信息 */
declare interface AiAnalysisTaskClassificationOutput {
  /** 视频智能分类列表。 */
  ClassificationSet: MediaAiAnalysisClassificationItem[];
}

/** 智能分类任务结果类型 */
declare interface AiAnalysisTaskClassificationResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 智能分类任务输入。 */
  Input: AiAnalysisTaskClassificationInput;
  /** 智能分类任务输出。 */
  Output: AiAnalysisTaskClassificationOutput | null;
}

/** 智能分类任务输入类型 */
declare interface AiAnalysisTaskCoverInput {
  /** 视频智能封面模板 ID。 */
  Definition: number;
}

/** 智能封面结果信息 */
declare interface AiAnalysisTaskCoverOutput {
  /** 智能封面列表。 */
  CoverSet: MediaAiAnalysisCoverItem[];
  /** 智能封面的存储位置。 */
  OutputStorage: TaskOutputStorage;
}

/** 智能封面结果类型 */
declare interface AiAnalysisTaskCoverResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 智能封面任务输入。 */
  Input: AiAnalysisTaskCoverInput;
  /** 智能封面任务输出。 */
  Output: AiAnalysisTaskCoverOutput | null;
}

/** 智能按帧标签任务输入类型 */
declare interface AiAnalysisTaskFrameTagInput {
  /** 视频智能按帧标签模板 ID。 */
  Definition: number;
}

/** 智能按帧标签结果信息 */
declare interface AiAnalysisTaskFrameTagOutput {
  /** 视频按帧标签列表。 */
  SegmentSet: MediaAiAnalysisFrameTagSegmentItem[];
}

/** 智能按帧标签结果类型 */
declare interface AiAnalysisTaskFrameTagResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 智能按帧标签任务输入。 */
  Input: AiAnalysisTaskFrameTagInput;
  /** 智能按帧标签任务输出。 */
  Output: AiAnalysisTaskFrameTagOutput | null;
}

/** AI 视频智能分析输入参数类型 */
declare interface AiAnalysisTaskInput {
  /** 视频内容分析模板 ID。 */
  Definition: number;
}

/** 智能标签任务输入类型 */
declare interface AiAnalysisTaskTagInput {
  /** 视频智能标签模板 ID。 */
  Definition: number;
}

/** 智能标签结果信息 */
declare interface AiAnalysisTaskTagOutput {
  /** 视频智能标签列表。 */
  TagSet: MediaAiAnalysisTagItem[];
}

/** 智能标签结果类型 */
declare interface AiAnalysisTaskTagResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 智能标签任务输入。 */
  Input: AiAnalysisTaskTagInput;
  /** 智能标签任务输出。 */
  Output: AiAnalysisTaskTagOutput | null;
}

/** 内容审核结果 */
declare interface AiContentReviewResult {
  /** 任务的类型，可以取的值有：Porn：图片鉴黄Terrorism：图片敏感Political：图片敏感Porn.Asr：Asr 文字鉴黄Porn.Ocr：Ocr 文字鉴黄Political.Asr：Asr 文字敏感Political.Ocr：Ocr 文字敏感Terrorism.Ocr：Ocr 文字敏感Prohibited.Asr：Asr 文字鉴违禁Prohibited.Ocr：Ocr 文字鉴违禁 */
  Type: string;
  /** 采样频率，即对视频每秒截取进行审核的帧数。 */
  SampleRate: number;
  /** 审核的视频时长，单位：秒。 */
  Duration: number;
  /** 视频内容审核智能画面鉴黄任务的查询结果，当任务类型为 Porn 时有效。 */
  PornTask: AiReviewTaskPornResult | null;
  /** 视频内容审核智能画面敏感任务的查询结果，当任务类型为 Terrorism 时有效。 */
  TerrorismTask: AiReviewTaskTerrorismResult | null;
  /** 视频内容审核智能画面敏感任务的查询结果，当任务类型为 Political 时有效。 */
  PoliticalTask: AiReviewTaskPoliticalResult | null;
  /** 视频内容审核 Asr 文字鉴黄任务的查询结果，当任务类型为 Porn.Asr 时有效。 */
  PornAsrTask: AiReviewTaskPornAsrResult | null;
  /** 视频内容审核 Ocr 文字鉴黄任务的查询结果，当任务类型为 Porn.Ocr 时有效。 */
  PornOcrTask: AiReviewTaskPornOcrResult | null;
  /** 视频内容审核 Asr 文字敏感任务的查询结果，当任务类型为 Political.Asr 时有效。 */
  PoliticalAsrTask: AiReviewTaskPoliticalAsrResult | null;
  /** 视频内容审核 Ocr 文字敏感任务的查询结果，当任务类型为 Political.Ocr 时有效。 */
  PoliticalOcrTask: AiReviewTaskPoliticalOcrResult | null;
  /** 视频内容审核 Ocr 文字敏感任务的查询结果，当任务类型为 Terrorism.Ocr 时有效。 */
  TerrorismOcrTask: AiReviewTaskTerrorismOcrResult | null;
  /** 视频内容审核 Asr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Asr 时有效。 */
  ProhibitedAsrTask: AiReviewTaskProhibitedAsrResult | null;
  /** 视频内容审核 Ocr 文字鉴违禁任务的查询结果，当任务类型为 Prohibited.Ocr 时有效。 */
  ProhibitedOcrTask: AiReviewTaskProhibitedOcrResult | null;
}

/** 智能内容审核任务类型 */
declare interface AiContentReviewTaskInput {
  /** 视频内容审核模板 ID。 */
  Definition: number;
}

/** 智能识别结果。 */
declare interface AiRecognitionResult {
  /** 任务的类型，取值范围：FaceRecognition：人脸识别，AsrWordsRecognition：语音关键词识别，OcrWordsRecognition：文本关键词识别，AsrFullTextRecognition：语音全文识别，OcrFullTextRecognition：文本全文识别。 */
  Type: string;
  /** 人脸识别结果，当 Type 为 FaceRecognition 时有效。 */
  FaceTask: AiRecognitionTaskFaceResult | null;
  /** 语音关键词识别结果，当 Type 为 AsrWordsRecognition 时有效。 */
  AsrWordsTask: AiRecognitionTaskAsrWordsResult | null;
  /** 语音全文识别结果，当 Type 为 AsrFullTextRecognition 时有效。 */
  AsrFullTextTask: AiRecognitionTaskAsrFullTextResult | null;
  /** 文本关键词识别结果，当 Type 为 OcrWordsRecognition 时有效。 */
  OcrWordsTask: AiRecognitionTaskOcrWordsResult | null;
  /** 文本全文识别结果，当 Type 为 OcrFullTextRecognition 时有效。 */
  OcrFullTextTask: AiRecognitionTaskOcrFullTextResult | null;
}

/** 语音全文识别结果。 */
declare interface AiRecognitionTaskAsrFullTextResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 语音全文识别任务输入信息。 */
  Input: AiRecognitionTaskAsrFullTextResultInput;
  /** 语音全文识别任务输出信息。 */
  Output: AiRecognitionTaskAsrFullTextResultOutput | null;
}

/** 语音全文识别的输入。 */
declare interface AiRecognitionTaskAsrFullTextResultInput {
  /** 语音全文识别模板 ID。 */
  Definition: number;
}

/** 语音全文识别结果。 */
declare interface AiRecognitionTaskAsrFullTextResultOutput {
  /** 语音全文识别片段列表。 */
  SegmentSet: AiRecognitionTaskAsrFullTextSegmentItem[];
  /** 字幕文件地址。 */
  SubtitlePath: string;
  /** 字幕文件存储位置。 */
  OutputStorage: TaskOutputStorage;
}

/** 语音全文识别片段。 */
declare interface AiRecognitionTaskAsrFullTextSegmentItem {
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
  /** 识别片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 识别片段终止的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 识别文本。 */
  Text: string;
}

/** 语音关键词识别结果。 */
declare interface AiRecognitionTaskAsrWordsResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 语音关键词识别任务输入信息。 */
  Input: AiRecognitionTaskAsrWordsResultInput;
  /** 语音关键词识别任务输出信息。 */
  Output: AiRecognitionTaskAsrWordsResultOutput | null;
}

/** 语音关键词识别输入。 */
declare interface AiRecognitionTaskAsrWordsResultInput {
  /** 语音关键词识别模板 ID。 */
  Definition: number;
}

/** 语音关键词识别结果。 */
declare interface AiRecognitionTaskAsrWordsResultItem {
  /** 语音关键词。 */
  Word: string;
  /** 语音关键词出现的时间片段列表。 */
  SegmentSet: AiRecognitionTaskAsrWordsSegmentItem[];
}

/** 语音关键词识别输出。 */
declare interface AiRecognitionTaskAsrWordsResultOutput {
  /** 语音关键词识别结果集。 */
  ResultSet: AiRecognitionTaskAsrWordsResultItem[];
}

/** 语音识别片段。 */
declare interface AiRecognitionTaskAsrWordsSegmentItem {
  /** 识别片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 识别片段终止的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
}

/** 人脸识别结果。 */
declare interface AiRecognitionTaskFaceResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 人脸识别任务输入信息。 */
  Input: AiRecognitionTaskFaceResultInput;
  /** 人脸识别任务输出信息。 */
  Output: AiRecognitionTaskFaceResultOutput | null;
}

/** 人脸识别输入。 */
declare interface AiRecognitionTaskFaceResultInput {
  /** 人脸识别模板 ID。 */
  Definition: number;
}

/** 人脸识别结果 */
declare interface AiRecognitionTaskFaceResultItem {
  /** 人物唯一标识 ID。 */
  Id: string;
  /** 人物库类型，表示识别出的人物来自哪个人物库：Default：默认人物库；UserDefine：用户自定义人物库。 */
  Type: string;
  /** 人物名称。 */
  Name: string;
  /** 人物出现的片段结果集。 */
  SegmentSet: AiRecognitionTaskFaceSegmentItem[];
  /** 人物性别：Male：男性；Female：女性。 */
  Gender: string | null;
  /** 人物出生日期。 */
  Birthday: string | null;
  /** 人物职业或者职务。 */
  Profession: string | null;
  /** 人物毕业院校。 */
  SchoolOfGraduation: string | null;
  /** 人物简介。 */
  Abstract: string | null;
  /** 人物出生地或者籍贯。 */
  PlaceOfBirth: string | null;
  /** 人物类型：Politician：官员；Artist：艺人。 */
  PersonType: string | null;
  /** 敏感度标注：Normal：正常；Sensitive：敏感。 */
  Remark: string | null;
  /** 截图链接 */
  Url: string | null;
}

/** 智能人脸识别输出。 */
declare interface AiRecognitionTaskFaceResultOutput {
  /** 智能人脸识别结果集。 */
  ResultSet: AiRecognitionTaskFaceResultItem[];
}

/** 人脸识别结果片段 */
declare interface AiRecognitionTaskFaceSegmentItem {
  /** 识别片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 识别片段终止的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
  /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
  AreaCoordSet: number[];
}

/** 视频内容识别输入参数类型 */
declare interface AiRecognitionTaskInput {
  /** 视频智能识别模板 ID 。 */
  Definition: number;
}

/** 文本全文识别结果。 */
declare interface AiRecognitionTaskOcrFullTextResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 文本全文识别任务输入信息。 */
  Input: AiRecognitionTaskOcrFullTextResultInput;
  /** 文本全文识别任务输出信息。 */
  Output: AiRecognitionTaskOcrFullTextResultOutput | null;
}

/** 文本全文识别输入。 */
declare interface AiRecognitionTaskOcrFullTextResultInput {
  /** 文本全文识别模板 ID。 */
  Definition: number;
}

/** 文本全文识别输出。 */
declare interface AiRecognitionTaskOcrFullTextResultOutput {
  /** 文本全文识别结果集。 */
  SegmentSet: AiRecognitionTaskOcrFullTextSegmentItem[];
}

/** 文本全文识别片段。 */
declare interface AiRecognitionTaskOcrFullTextSegmentItem {
  /** 识别片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 识别片段终止的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 识别片段结果集。 */
  TextSet: AiRecognitionTaskOcrFullTextSegmentTextItem[];
}

/** 文本全文识别片段。 */
declare interface AiRecognitionTaskOcrFullTextSegmentTextItem {
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
  /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
  AreaCoordSet: number[];
  /** 识别文本。 */
  Text: string;
}

/** 文本关键识别结果。 */
declare interface AiRecognitionTaskOcrWordsResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 文本关键词识别任务输入信息。 */
  Input: AiRecognitionTaskOcrWordsResultInput;
  /** 文本关键词识别任务输出信息。 */
  Output: AiRecognitionTaskOcrWordsResultOutput | null;
}

/** 文本关键词识别输入。 */
declare interface AiRecognitionTaskOcrWordsResultInput {
  /** 文本关键词识别模板 ID。 */
  Definition: number;
}

/** 文本关键词识别结果。 */
declare interface AiRecognitionTaskOcrWordsResultItem {
  /** 文本关键词。 */
  Word: string;
  /** 文本关键出现的片段列表。 */
  SegmentSet: AiRecognitionTaskOcrWordsSegmentItem[];
}

/** 文本关键词识别输出。 */
declare interface AiRecognitionTaskOcrWordsResultOutput {
  /** 文本关键词识别结果集。 */
  ResultSet: AiRecognitionTaskOcrWordsResultItem[];
}

/** 文本识别片段。 */
declare interface AiRecognitionTaskOcrWordsSegmentItem {
  /** 识别片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 识别片段终止的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
  /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
  AreaCoordSet: number[];
}

/** 内容审核 Asr 文字敏感任务输入参数类型 */
declare interface AiReviewPoliticalAsrTaskInput {
  /** 模板 ID。 */
  Definition: number;
}

/** Asr 文字敏感信息 */
declare interface AiReviewPoliticalAsrTaskOutput {
  /** Asr 文字敏感评分，分值为0到100。 */
  Confidence: number;
  /** Asr 文字敏感结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Asr 文字敏感嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewAsrTextSegmentItem[];
}

/** 内容审核 Ocr 文字敏感任务输入参数类型 */
declare interface AiReviewPoliticalOcrTaskInput {
  /** 模板 ID。 */
  Definition: number;
}

/** Ocr 文字敏感信息 */
declare interface AiReviewPoliticalOcrTaskOutput {
  /** Ocr 文字敏感评分，分值为0到100。 */
  Confidence: number;
  /** Ocr 文字敏感结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Ocr 文字有敏感嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewOcrTextSegmentItem[];
}

/** 内容审核敏感任务输入参数类型 */
declare interface AiReviewPoliticalTaskInput {
  /** 模板 ID。 */
  Definition: number;
}

/** 涉敏信息 */
declare interface AiReviewPoliticalTaskOutput {
  /** 视频涉敏评分，分值为0到100。 */
  Confidence: number;
  /** 涉敏结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 视频涉敏结果标签。内容审核模板[画面涉敏任务控制参数](https://cloud.tencent.com/document/api/862/37615)里 LabelSet 参数与此参数取值范围的对应关系：violation_photo：violation_photo：违规图标。其他（即 politician/entertainment/sport/entrepreneur/scholar/celebrity/military）：politician：涉敏人物。 */
  Label: string;
  /** 有涉敏嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewPoliticalSegmentItem[];
}

/** 内容审核 Asr 文字鉴黄任务输入参数类型 */
declare interface AiReviewPornAsrTaskInput {
  /** 鉴黄模板 ID。 */
  Definition: number;
}

/** Asr 文字涉黄信息 */
declare interface AiReviewPornAsrTaskOutput {
  /** Asr 文字涉黄评分，分值为0到100。 */
  Confidence: number;
  /** Asr 文字涉黄结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Asr 文字有涉黄嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewAsrTextSegmentItem[];
}

/** 内容审核 Ocr 文字鉴黄任务输入参数类型 */
declare interface AiReviewPornOcrTaskInput {
  /** 鉴黄模板 ID。 */
  Definition: number;
}

/** Ocr 文字涉黄信息 */
declare interface AiReviewPornOcrTaskOutput {
  /** Ocr 文字涉黄评分，分值为0到100。 */
  Confidence: number;
  /** Ocr 文字涉黄结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Ocr 文字有涉黄嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewOcrTextSegmentItem[];
}

/** 内容审核鉴黄任务输入参数类型 */
declare interface AiReviewPornTaskInput {
  /** 鉴黄模板 ID。 */
  Definition: number;
}

/** 鉴黄结果信息 */
declare interface AiReviewPornTaskOutput {
  /** 视频鉴黄评分，分值为0到100。 */
  Confidence: number;
  /** 鉴黄结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 视频鉴黄结果标签，取值范围：porn：色情。sexy：性感。vulgar：低俗。intimacy：亲密行为。 */
  Label: string;
  /** 有涉黄嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewSegmentItem[];
}

/** 内容审核 Asr 文字鉴违禁任务输入参数类型 */
declare interface AiReviewProhibitedAsrTaskInput {
  /** 鉴违禁模板 ID。 */
  Definition: number;
}

/** Asr 文字涉违禁信息 */
declare interface AiReviewProhibitedAsrTaskOutput {
  /** Asr 文字涉违禁评分，分值为0到100。 */
  Confidence: number;
  /** Asr 文字涉违禁结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Asr 文字有涉违禁嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewAsrTextSegmentItem[];
}

/** 内容审核 Ocr 文字鉴违禁任务输入参数类型 */
declare interface AiReviewProhibitedOcrTaskInput {
  /** 鉴违禁模板 ID。 */
  Definition: number;
}

/** Ocr 文字涉违禁信息 */
declare interface AiReviewProhibitedOcrTaskOutput {
  /** Ocr 文字涉违禁评分，分值为0到100。 */
  Confidence: number;
  /** Ocr 文字涉违禁结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Ocr 文字有涉违禁嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewOcrTextSegmentItem[];
}

/** 内容审核 Asr 文字敏感任务结果类型 */
declare interface AiReviewTaskPoliticalAsrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核 Asr 文字敏感任务输入。 */
  Input: AiReviewPoliticalAsrTaskInput;
  /** 内容审核 Asr 文字敏感任务输出。 */
  Output: AiReviewPoliticalAsrTaskOutput | null;
}

/** 内容审核 Ocr 文字敏感任务结果类型 */
declare interface AiReviewTaskPoliticalOcrResult {
  /** 任务状态，有 PROCESSING，SUCCESS，FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核 Ocr 文字敏感任务输入。 */
  Input: AiReviewPoliticalOcrTaskInput;
  /** 内容审核 Ocr 文字敏感任务输出。 */
  Output: AiReviewPoliticalOcrTaskOutput | null;
}

/** 内容审核涉敏任务结果类型 */
declare interface AiReviewTaskPoliticalResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核涉敏任务输入。 */
  Input: AiReviewPoliticalTaskInput;
  /** 内容审核涉敏任务输出。 */
  Output: AiReviewPoliticalTaskOutput | null;
}

/** 内容审核 Asr 文字鉴黄任务结果类型 */
declare interface AiReviewTaskPornAsrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核 Asr 文字鉴黄任务输入。 */
  Input: AiReviewPornAsrTaskInput;
  /** 内容审核 Asr 文字鉴黄任务输出。 */
  Output: AiReviewPornAsrTaskOutput | null;
}

/** 内容审核 Ocr 文字鉴黄任务结果类型 */
declare interface AiReviewTaskPornOcrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核 Ocr 文字鉴黄任务输入。 */
  Input: AiReviewPornOcrTaskInput;
  /** 内容审核 Ocr 文字鉴黄任务输出。 */
  Output: AiReviewPornOcrTaskOutput | null;
}

/** 内容审核鉴黄任务结果类型 */
declare interface AiReviewTaskPornResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核鉴黄任务输入。 */
  Input: AiReviewPornTaskInput;
  /** 内容审核鉴黄任务输出。 */
  Output: AiReviewPornTaskOutput | null;
}

/** 内容审核 Asr 文字鉴任违禁务结果类型 */
declare interface AiReviewTaskProhibitedAsrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核 Asr 文字鉴违禁任务输入。 */
  Input: AiReviewProhibitedAsrTaskInput;
  /** 内容审核 Asr 文字鉴违禁任务输出。 */
  Output: AiReviewProhibitedAsrTaskOutput | null;
}

/** 内容审核 Ocr 文字鉴任违禁务结果类型 */
declare interface AiReviewTaskProhibitedOcrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核 Ocr 文字鉴违禁任务输入。 */
  Input: AiReviewProhibitedOcrTaskInput;
  /** 内容审核 Ocr 文字鉴违禁任务输出。 */
  Output: AiReviewProhibitedOcrTaskOutput | null;
}

/** 内容审核 Ocr 文字敏感任务结果类型 */
declare interface AiReviewTaskTerrorismOcrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核 Ocr 文字敏感任务输入。 */
  Input: AiReviewTerrorismOcrTaskInput;
  /** 内容审核 Ocr 文字敏感任务输出。 */
  Output: AiReviewTerrorismOcrTaskOutput | null;
}

/** 内容审核涉敏任务结果类型 */
declare interface AiReviewTaskTerrorismResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 内容审核涉敏任务输入。 */
  Input: AiReviewTerrorismTaskInput;
  /** 内容审核涉敏任务输出。 */
  Output: AiReviewTerrorismTaskOutput | null;
}

/** 内容审核 Ocr 文字敏感任务输入参数类型 */
declare interface AiReviewTerrorismOcrTaskInput {
  /** 模板 ID。 */
  Definition: number;
}

/** Ocr 文字涉敏信息 */
declare interface AiReviewTerrorismOcrTaskOutput {
  /** Ocr 文字涉敏评分，分值为0到100。 */
  Confidence: number;
  /** Ocr 文字涉敏结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** Ocr 文字有涉敏嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewOcrTextSegmentItem[];
}

/** 内容审核涉敏任务输入参数类型 */
declare interface AiReviewTerrorismTaskInput {
  /** 模板 ID。 */
  Definition: number;
}

/** 涉敏信息 */
declare interface AiReviewTerrorismTaskOutput {
  /** 视频涉敏评分，分值为0到100。 */
  Confidence: number;
  /** 涉敏结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 视频涉敏结果标签，取值范围：guns：武器枪支。crowd：人群聚集。police：警察部队。bloody：血腥画面。banners：涉敏旗帜。militant：武装分子。explosion：爆炸火灾。terrorists：涉敏人物。scenario：涉敏画面。 */
  Label: string;
  /** 有涉敏嫌疑的视频片段列表。 */
  SegmentSet: MediaContentReviewSegmentItem[];
}

/** AI 样本管理，人脸信息。 */
declare interface AiSampleFaceInfo {
  /** 人脸图片 ID。 */
  FaceId: string;
  /** 人脸图片地址。 */
  Url: string;
}

/** AI 样本管理，人脸数据操作。 */
declare interface AiSampleFaceOperation {
  /** 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。重置操作将清空该人物已有人脸数据，并添加 FaceContents 指定人脸数据。 */
  Type: string;
  /** 人脸 ID 集合，当 Type为delete 时，该字段必填。 */
  FaceIds?: string[];
  /** 人脸图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串集合。当 Type为add 或 reset 时，该字段必填；数组长度限制：5 张图片。注意：图片必须是单人像正面人脸较清晰的照片，像素不低于 200*200。 */
  FaceContents?: string[];
}

/** AI 样本管理，处理失败的人脸信息 */
declare interface AiSampleFailFaceInfo {
  /** 对应入参 FaceContents 中错误图片下标，从 0 开始。 */
  Index: number;
  /** 错误码，取值：0：成功；其他：失败。 */
  ErrCode: number;
  /** 错误描述。 */
  Message: string;
}

/** AI 样本管理，人物信息。 */
declare interface AiSamplePerson {
  /** 人物 ID。 */
  PersonId: string;
  /** 人物名称。 */
  Name: string;
  /** 人物描述。 */
  Description: string;
  /** 人脸信息。 */
  FaceInfoSet: AiSampleFaceInfo[];
  /** 人物标签。 */
  TagSet: string[];
  /** 应用场景。 */
  UsageSet: string[];
  /** 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
}

/** AI 样本管理，标签操作。 */
declare interface AiSampleTagOperation {
  /** 操作类型，可选值：add（添加）、delete（删除）、reset（重置）。 */
  Type: string;
  /** 标签，长度限制：128 个字符。 */
  Tags: string[];
}

/** AI 样本管理，关键词输出信息。 */
declare interface AiSampleWord {
  /** 关键词。 */
  Keyword: string;
  /** 关键词标签。 */
  TagSet: string[];
  /** 关键词应用场景。 */
  UsageSet: string[];
  /** 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
}

/** AI 样本管理，关键词输入信息。 */
declare interface AiSampleWordInfo {
  /** 关键词，长度限制：20 个字符。 */
  Keyword: string;
  /** 关键词标签数组长度限制：20 个标签；单个标签长度限制：128 个字符。 */
  Tags?: string[];
}

/** 转动图任务类型。 */
declare interface AnimatedGraphicTaskInput {
  /** 视频转动图模板 ID。 */
  Definition: number;
  /** 动图在视频中的开始时间，单位为秒。 */
  StartTimeOffset: number;
  /** 动图在视频中的结束时间，单位为秒。 */
  EndTimeOffset: number;
  /** 转动图后文件的目标存储，不填则继承上层的 OutputStorage 值。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 转动图后文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_animatedGraphic_{definition}.{format}`。 */
  OutputObjectPath?: string;
}

/** 转动图模板详情。 */
declare interface AnimatedGraphicsTemplate {
  /** 转动图模板唯一标识。 */
  Definition: number;
  /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type: string;
  /** 转动图模板名称。 */
  Name: string;
  /** 转动图模板描述。 */
  Comment: string;
  /** 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width: number;
  /** 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive: string;
  /** 动图格式。 */
  Format: string;
  /** 帧率。 */
  Fps: number;
  /** 图片质量。 */
  Quality: number;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
}

/** 去伪影（毛刺）配置 */
declare interface ArtifactRepairConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可选值：weakstrong默认值：weak。 */
  Type?: string | null;
}

/** 语音全文识别任务控制参数 */
declare interface AsrFullTextConfigureInfo {
  /** 语音全文识别任务开关，可选值：ON：开启智能语音全文识别任务；OFF：关闭智能语音全文识别任务。 */
  Switch: string;
  /** 生成的字幕文件格式，不填或者填空字符串表示不生成字幕文件，可选值：vtt：生成 WebVTT 字幕文件。 */
  SubtitleFormat?: string;
}

/** 语音全文识别任务控制参数 */
declare interface AsrFullTextConfigureInfoForUpdate {
  /** 语音全文识别任务开关，可选值：ON：开启智能语音全文识别任务；OFF：关闭智能语音全文识别任务。 */
  Switch?: string;
  /** 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：vtt：生成 WebVTT 字幕文件。 */
  SubtitleFormat?: string;
}

/** 语音关键词识别控制参数。 */
declare interface AsrWordsConfigureInfo {
  /** 语音关键词识别任务开关，可选值：ON：开启语音关键词识别任务；OFF：关闭语音关键词识别任务。 */
  Switch: string;
  /** 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string[];
}

/** 语音关键词识别控制参数。 */
declare interface AsrWordsConfigureInfoForUpdate {
  /** 语音关键词识别任务开关，可选值：ON：开启语音关键词识别任务；OFF：关闭语音关键词识别任务。 */
  Switch?: string;
  /** 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string[];
}

/** 音频流配置参数 */
declare interface AudioTemplateInfo {
  /** 音频流的编码格式。当外层参数 Container 为 mp3 时，可选值为：libmp3lame。当外层参数 Container 为 ogg 或 flac 时，可选值为：flac。当外层参数 Container 为 m4a 时，可选值为：libfdk_aac；libmp3lame；ac3。当外层参数 Container 为 mp4 或 flv 时，可选值为：libfdk_aac：更适合 mp4；libmp3lame：更适合 flv。当外层参数 Container 为 hls 时，可选值为：libfdk_aac；libmp3lame。 */
  Codec: string;
  /** 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。当取值为 0，表示音频码率和原始音频保持一致。 */
  Bitrate: number;
  /** 音频流的采样率，可选值：320004410048000单位：Hz。 */
  SampleRate: number;
  /** 音频通道方式，可选值：1：单通道2：双通道6：立体声当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。默认值：2。 */
  AudioChannel?: number;
}

/** 音频流配置参数 */
declare interface AudioTemplateInfoForUpdate {
  /** 音频流的编码格式。当外层参数 Container 为 mp3 时，可选值为：libmp3lame。当外层参数 Container 为 ogg 或 flac 时，可选值为：flac。当外层参数 Container 为 m4a 时，可选值为：libfdk_aac；libmp3lame；ac3。当外层参数 Container 为 mp4 或 flv 时，可选值为：libfdk_aac：更适合 mp4；libmp3lame：更适合 flv；mp2。当外层参数 Container 为 hls 时，可选值为：libfdk_aac；libmp3lame。 */
  Codec?: string;
  /** 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。 当取值为 0，表示音频码率和原始音频保持一致。 */
  Bitrate?: number;
  /** 音频流的采样率，可选值：320004410048000单位：Hz。 */
  SampleRate?: number;
  /** 音频通道方式，可选值：1：单通道2：双通道6：立体声当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为立体声。 */
  AudioChannel?: number;
}

/** 智能分类任务控制参数 */
declare interface ClassificationConfigureInfo {
  /** 智能分类任务开关，可选值：ON：开启智能分类任务；OFF：关闭智能分类任务。 */
  Switch: string;
}

/** 智能分类任务控制参数 */
declare interface ClassificationConfigureInfoForUpdate {
  /** 智能分类任务开关，可选值：ON：开启智能分类任务；OFF：关闭智能分类任务。 */
  Switch?: string;
}

/** 色彩增强配置 */
declare interface ColorEnhanceConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可选值：weaknormalstrong默认值：weak。 */
  Type?: string | null;
}

/** 内容审核模板详情 */
declare interface ContentReviewTemplateItem {
  /** 内容审核模板唯一标识。 */
  Definition: number;
  /** 内容审核模板名称，长度限制：64 个字符。 */
  Name: string;
  /** 内容审核模板描述信息，长度限制：256 个字符。 */
  Comment: string;
  /** 鉴黄控制参数。 */
  PornConfigure: PornConfigureInfo | null;
  /** 涉敏控制参数。 */
  TerrorismConfigure: TerrorismConfigureInfo | null;
  /** 涉敏控制参数。 */
  PoliticalConfigure: PoliticalConfigureInfo | null;
  /** 违禁控制参数。违禁内容包括：谩骂；涉毒违法。 */
  ProhibitedConfigure: ProhibitedConfigureInfo | null;
  /** 用户自定义内容审核控制参数。 */
  UserDefineConfigure: UserDefineConfigureInfo | null;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
  /** 模板类型，取值范围：* Preset：系统预置模板；* Custom：用户自定义模板。 */
  Type: string | null;
}

/** 绑定到 COS 的输入规则。 */
declare interface CosFileUploadTrigger {
  /** 工作流绑定的 COS Bucket 名，如 TopRankVideo-125xxx88。 */
  Bucket: string;
  /** 工作流绑定的 COS Bucket 所属园区，如 ap-chongiqng。 */
  Region: string;
  /** 工作流绑定的输入路径目录，必须为绝对路径，即以 `/` 开头和结尾。如`/movie/201907/`，不填代表根目录`/`。 */
  Dir?: string;
  /** 工作流允许触发的文件格式列表，如 ["mp4", "flv", "mov"]。不填代表所有格式的文件都可以触发工作流。 */
  Formats?: string[];
}

/** 媒体处理 COS 对象信息。 */
declare interface CosInputInfo {
  /** 媒体处理对象文件所在的 COS Bucket 名，如 TopRankVideo-125xxx88。 */
  Bucket: string;
  /** 媒体处理对象文件所在的 COS Bucket 所属园区，如 ap-chongqing。 */
  Region: string;
  /** 媒体处理对象文件的输入路径，如`/movie/201907/WildAnimal.mov`。 */
  Object: string;
}

/** 媒体处理 COS 输出对象信息。 */
declare interface CosOutputStorage {
  /** 媒体处理生成的文件输出的目标 Bucket 名，如 TopRankVideo-125xxx88。如果不填，表示继承上层。 */
  Bucket?: string;
  /** 媒体处理生成的文件输出的目标 Bucket 的园区，如 ap-chongqing。如果不填，表示继承上层。 */
  Region?: string;
}

/** 智能封面任务控制参数 */
declare interface CoverConfigureInfo {
  /** 智能封面任务开关，可选值：ON：开启智能封面任务；OFF：关闭智能封面任务。 */
  Switch: string;
}

/** 智能封面任务控制参数 */
declare interface CoverConfigureInfoForUpdate {
  /** 智能封面任务开关，可选值：ON：开启智能封面任务；OFF：关闭智能封面任务。 */
  Switch?: string;
}

/** 编辑点播视频文件信息 */
declare interface EditMediaFileInfo {
  /** 视频的输入信息。 */
  InputInfo: MediaInputInfo;
  /** 视频剪辑的起始时间偏移，单位：秒。 */
  StartTimeOffset?: number;
  /** 视频剪辑的结束时间偏移，单位：秒。 */
  EndTimeOffset?: number;
}

/** 编辑视频的结果文件输出配置。 */
declare interface EditMediaOutputConfig {
  /** 封装格式，可选值：mp4、hls、mov、flv、avi。默认是 mp4。 */
  Container?: string;
  /** 剪辑模式，可选值 normal、fast。默认是精确剪辑 normal */
  Type?: string;
}

/** 编辑视频任务信息 */
declare interface EditMediaTask {
  /** 任务 ID。 */
  TaskId: string;
  /** 任务状态，取值：PROCESSING：处理中；FINISH：已完成。 */
  Status: string;
  /** 错误码0：成功；其他值：失败。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 视频编辑任务的输入。 */
  Input: EditMediaTaskInput;
  /** 视频编辑任务的输出。 */
  Output: EditMediaTaskOutput | null;
}

/** 编辑视频任务的输入。 */
declare interface EditMediaTaskInput {
  /** 输入的视频文件信息。 */
  FileInfoSet: EditMediaFileInfo[];
}

/** 编辑视频任务的输出 */
declare interface EditMediaTaskOutput {
  /** 编辑后文件的目标存储。 */
  OutputStorage: TaskOutputStorage;
  /** 编辑后的视频文件路径。 */
  Path: string;
}

/** 音视频增强配置 */
declare interface EnhanceConfig {
  /** 视频增强配置。 */
  VideoEnhance?: VideoEnhanceConfig | null;
}

/** 表情识别参数配置 */
declare interface ExpressionConfigInfo {
  /** 表情识别任务开关，可选值：ON：开启；OFF：关闭。 */
  Switch: string;
}

/** 人脸识别任务控制参数 */
declare interface FaceConfigureInfo {
  /** 人脸识别任务开关，可选值：ON：开启智能人脸识别任务；OFF：关闭智能人脸识别任务。 */
  Switch: string;
  /** 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。默认 95 分。取值范围：0 - 100。 */
  Score?: number;
  /** 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：entertainment：娱乐明星；sport：体育明星；politician：敏感人物。 */
  DefaultLibraryLabelSet?: string[];
  /** 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。标签个数最多 100 个，每个标签长度最多 16 个字符。 */
  UserDefineLibraryLabelSet?: string[];
  /** 人物库选择，可选值：Default：使用默认人物库；UserDefine：使用用户自定义人物库。All：同时使用默认人物库和用户自定义人物库。默认值：All，使用系统默认人物库及用户自定义人物库。 */
  FaceLibrary?: string;
}

/** 人脸识别任务控制参数 */
declare interface FaceConfigureInfoForUpdate {
  /** 人脸识别任务开关，可选值：ON：开启智能人脸识别任务；OFF：关闭智能人脸识别任务。 */
  Switch?: string;
  /** 人脸识别过滤分数，当识别结果达到该分数以上，返回识别结果。取值范围：0-100。 */
  Score?: number;
  /** 默认人物过滤标签，指定需要返回的默认人物的标签。如果未填或者为空，则全部默认人物结果都返回。标签可选值：entertainment：娱乐明星；sport：体育明星；politician：敏感人物。 */
  DefaultLibraryLabelSet?: string[];
  /** 用户自定义人物过滤标签，指定需要返回的用户自定义人物的标签。如果未填或者为空，则全部自定义人物结果都返回。标签个数最多 100 个，每个标签长度最多 16 个字符。 */
  UserDefineLibraryLabelSet?: string[];
  /** 人物库选择，可选值：Default：使用默认人物库；UserDefine：使用用户自定义人物库。All：同时使用默认人物库和用户自定义人物库。 */
  FaceLibrary?: string;
}

/** 人脸增强配置 */
declare interface FaceEnhanceConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 强度，取值范围：0.0~1.0。默认：0.0。 */
  Intensity?: number | null;
}

/** 插帧帧率配置 */
declare interface FrameRateConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 帧率，取值范围：[0, 100]，单位：Hz。默认值 0。注意：对于转码，该参数会覆盖 VideoTemplate 内部的 Fps。 */
  Fps?: number | null;
}

/** 智能按帧标签任务控制参数 */
declare interface FrameTagConfigureInfo {
  /** 智能按帧标签任务开关，可选值：ON：开启智能按帧标签任务；OFF：关闭智能按帧标签任务。 */
  Switch: string;
}

/** 智能按帧标签任务控制参数 */
declare interface FrameTagConfigureInfoForUpdate {
  /** 智能按帧标签任务开关，可选值：ON：开启智能按帧标签任务；OFF：关闭智能按帧标签任务。 */
  Switch?: string;
}

/** HDR配置 */
declare interface HdrConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可选值：HDR10HLG默认值：HDR10。注意：video的编码方式需要为libx265；注意：视频编码位深为10。 */
  Type?: string | null;
}

/** 片头片尾参数 */
declare interface HeadTailParameter {
  /** 片头列表。 */
  HeadSet?: MediaInputInfo[];
  /** 片尾列表。 */
  TailSet?: MediaInputInfo[];
}

/** 综合增强配置 */
declare interface ImageQualityEnhanceConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可选值：weaknormalstrong默认值：weak。 */
  Type?: string | null;
}

/** 对视频截雪碧图任务输入参数类型 */
declare interface ImageSpriteTaskInput {
  /** 雪碧图模板 ID。 */
  Definition: number;
  /** 截取雪碧图后文件的目标存储，不填则继承上层的 OutputStorage 值。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 截取雪碧图后，雪碧图图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}_{number}.{format}`。 */
  OutputObjectPath?: string;
  /** 截取雪碧图后，Web VTT 文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}.{format}`。 */
  WebVttObjectName?: string;
  /** 截取雪碧图后输出路径中的`{number}`变量的规则。 */
  ObjectNumberFormat?: NumberFormat | null;
}

/** 雪碧图模板详情 */
declare interface ImageSpriteTemplate {
  /** 雪碧图模板唯一标识。 */
  Definition: number;
  /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type: string;
  /** 雪碧图模板名称。 */
  Name: string;
  /** 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width: number;
  /** 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive: string;
  /** 采样类型。 */
  SampleType: string;
  /** 采样间隔。 */
  SampleInterval: number;
  /** 雪碧图中小图的行数。 */
  RowCount: number;
  /** 雪碧图中小图的列数。 */
  ColumnCount: number;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。默认值：black 。 */
  FillType: string;
  /** 模板描述信息。 */
  Comment: string;
}

/** 图片水印模板输入参数 */
declare interface ImageWatermarkInput {
  /** 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。 */
  ImageContent: string;
  /** 水印的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。默认值：10%。 */
  Width?: string;
  /** 水印的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。 */
  Height?: string;
  /** 水印重复类型。使用场景：水印为动态图像。取值范围：once：动态水印播放完后，不再出现；repeat_last_frame：水印播放完后，停留在最后一帧；repeat：水印循环播放，直到视频结束（默认值）。 */
  RepeatType?: string;
}

/** 图片水印模板输入参数 */
declare interface ImageWatermarkInputForUpdate {
  /** 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。 */
  ImageContent?: string;
  /** 水印的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。 */
  Width?: string;
  /** 水印的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。 */
  Height?: string;
  /** 水印重复类型。使用场景：水印为动态图像。取值范围：once：动态水印播放完后，不再出现；repeat_last_frame：水印播放完后，停留在最后一帧；repeat：水印循环播放，直到视频结束。 */
  RepeatType?: string;
}

/** 图片水印模板 */
declare interface ImageWatermarkTemplate {
  /** 水印图片地址。 */
  ImageUrl: string;
  /** 水印的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。 */
  Width: string;
  /** 水印的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；0px：表示 Height 按照 Width 对视频宽度的比例缩放。 */
  Height: string;
  /** 水印重复类型。使用场景：水印为动态图像。取值范围：once：动态水印播放完后，不再出现；repeat_last_frame：水印播放完后，停留在最后一帧；repeat：水印循环播放，直到视频结束。 */
  RepeatType: string;
}

/** 直播流 AI 识别结果 */
declare interface LiveStreamAiRecognitionResultInfo {
  /** 内容识别结果列表。 */
  ResultSet: LiveStreamAiRecognitionResultItem[];
}

/** 直播流 AI 识别结果 */
declare interface LiveStreamAiRecognitionResultItem {
  /** 结果的类型，取值范围：FaceRecognition：人脸识别，AsrWordsRecognition：语音关键词识别，OcrWordsRecognition：文本关键词识别，AsrFullTextRecognition：语音全文识别，OcrFullTextRecognition：文本全文识别。 */
  Type: string;
  /** 人脸识别结果，当 Type 为FaceRecognition 时有效。 */
  FaceRecognitionResultSet: LiveStreamFaceRecognitionResult[];
  /** 语音关键词识别结果，当 Type 为AsrWordsRecognition 时有效。 */
  AsrWordsRecognitionResultSet: LiveStreamAsrWordsRecognitionResult[];
  /** 文本关键词识别结果，当 Type 为OcrWordsRecognition 时有效。 */
  OcrWordsRecognitionResultSet: LiveStreamOcrWordsRecognitionResult[];
  /** 语音全文识别结果，当 Type 为AsrFullTextRecognition 时有效。 */
  AsrFullTextRecognitionResultSet: LiveStreamAsrFullTextRecognitionResult[];
  /** 文本全文识别结果，当 Type 为OcrFullTextRecognition 时有效。 */
  OcrFullTextRecognitionResultSet: LiveStreamOcrFullTextRecognitionResult[];
}

/** 直播 AI 内容审核图片敏感结果 */
declare interface LiveStreamAiReviewImagePoliticalResult {
  /** 嫌疑片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 嫌疑片段结束的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 嫌疑片段敏感分数。 */
  Confidence: number;
  /** 嫌疑片段鉴黄结果建议，取值范围：passreviewblock */
  Suggestion: string;
  /** 视频敏感结果标签，取值范围：politician：敏感人物。violation_photo：违规图标。 */
  Label: string;
  /** 敏感人物、违规图标名字。 */
  Name: string;
  /** 敏感人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
  AreaCoordSet: number[];
  /** 嫌疑图片 URL （图片不会永久存储，到达PicUrlExpireTime 时间点后图片将被删除）。 */
  Url: string;
  /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  PicUrlExpireTime: string;
}

/** 直播 AI 内容审核图片鉴黄结果 */
declare interface LiveStreamAiReviewImagePornResult {
  /** 嫌疑片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 嫌疑片段结束的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 嫌疑片段涉黄分数。 */
  Confidence: number;
  /** 嫌疑片段鉴黄结果建议，取值范围：passreviewblock */
  Suggestion: string;
  /** 视频鉴黄结果标签，取值范围：porn：色情。sexy：性感。vulgar：低俗。intimacy：亲密行为。 */
  Label: string;
  /** 嫌疑图片 URL （图片不会永久存储，到达PicUrlExpireTime 时间点后图片将被删除）。 */
  Url: string;
  /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  PicUrlExpireTime: string;
}

/** 直播 AI 内容审核图片涉敏结果 */
declare interface LiveStreamAiReviewImageTerrorismResult {
  /** 嫌疑片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 嫌疑片段结束的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 嫌疑片段涉敏分数。 */
  Confidence: number;
  /** 嫌疑片段涉敏结果建议，取值范围：passreviewblock */
  Suggestion: string;
  /** 视频涉敏结果标签，取值范围：guns：武器枪支。crowd：人群聚集。police：警察部队。bloody：血腥画面。banners：涉敏旗帜。militant：武装分子。explosion：爆炸火灾。terrorists：涉敏人物。 */
  Label: string;
  /** 嫌疑图片 URL （图片不会永久存储，到达PicUrlExpireTime 时间点后图片将被删除）。 */
  Url: string;
  /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  PicUrlExpireTime: string;
}

/** 直播流 AI 审核结果 */
declare interface LiveStreamAiReviewResultInfo {
  /** 内容审核结果列表。 */
  ResultSet: LiveStreamAiReviewResultItem[];
}

/** 直播流 AI 审核结果 */
declare interface LiveStreamAiReviewResultItem {
  /** 审核结果的类型，可以取的值有：ImagePorn：图片鉴黄ImageTerrorism：图片涉敏ImagePolitical：图片涉敏PornVoice：声音鉴黄 */
  Type: string;
  /** 图片鉴黄的结果，当 Type 为 ImagePorn 时有效。 */
  ImagePornResultSet: LiveStreamAiReviewImagePornResult[];
  /** 图片涉敏的结果，当 Type 为 ImageTerrorism 时有效。 */
  ImageTerrorismResultSet: LiveStreamAiReviewImageTerrorismResult[];
  /** 图片涉敏的结果，当 Type 为 ImagePolitical 时有效。 */
  ImagePoliticalResultSet: LiveStreamAiReviewImagePoliticalResult[];
  /** 声音鉴黄的结果，当 Type 为 PornVoice 时有效。 */
  VoicePornResultSet: LiveStreamAiReviewVoicePornResult[];
}

/** 直播 AI 内容审核声音鉴黄结果 */
declare interface LiveStreamAiReviewVoicePornResult {
  /** 嫌疑片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 嫌疑片段结束的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 嫌疑片段涉黄分数。 */
  Confidence: number;
  /** 嫌疑片段鉴黄结果建议，取值范围：passreviewblock */
  Suggestion: string;
  /** 视频鉴黄结果标签，取值范围：sexual_moan：呻吟。 */
  Label: string;
}

/** 直播识别 Asr 全文识别 */
declare interface LiveStreamAsrFullTextRecognitionResult {
  /** 识别文本。 */
  Text: string;
  /** 识别片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 识别片段终止的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
}

/** 直播 AI Asr 单词识别结果 */
declare interface LiveStreamAsrWordsRecognitionResult {
  /** 语音关键词。 */
  Word: string;
  /** 识别片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 识别片段终止的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
}

/** 直播 AI 人脸识别结果 */
declare interface LiveStreamFaceRecognitionResult {
  /** 人物唯一标识 ID。 */
  Id: string;
  /** 人物名称。 */
  Name: string;
  /** 人物库类型，表示识别出的人物来自哪个人物库：Default：默认人物库；UserDefine：用户自定义人物库。 */
  Type: string;
  /** 识别片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 识别片段终止的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
  /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
  AreaCoordSet: number[];
}

/** 直播识别 Ocr 全文识别 */
declare interface LiveStreamOcrFullTextRecognitionResult {
  /** 语音文本。 */
  Text: string;
  /** 识别片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 识别片段终止的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
  /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
  AreaCoordSet: number[];
}

/** 直播 AI Ocr 单词识别结果 */
declare interface LiveStreamOcrWordsRecognitionResult {
  /** 文本关键词。 */
  Word: string;
  /** 识别片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 识别片段终止的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
  /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
  AreaCoords: number[];
}

/** 直播流处理错误信息 */
declare interface LiveStreamProcessErrorInfo {
  /** 错误码：0表示没有错误；非0表示错误，请参考 Message 错误信息。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
}

/** 直播处理任务信息 */
declare interface LiveStreamProcessTask {
  /** 媒体处理任务 ID。 */
  TaskId: string;
  /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
  Status: string;
  /** 错误码，0 表示成功，其他值表示失败。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 直播流 URL。 */
  Url: string;
}

/** 任务处理的事件通知配置。 */
declare interface LiveStreamTaskNotifyConfig {
  /** CMQ 的模型，有 Queue 和 Topic 两种，目前仅支持 Queue。 */
  CmqModel: string;
  /** CMQ 的园区，如 sh，bj 等。 */
  CmqRegion: string;
  /** 当模型为 Queue 时有效，表示接收事件通知的 CMQ 的队列名。 */
  QueueName?: string;
  /** 当模型为 Topic 时有效，表示接收事件通知的 CMQ 的主题名。 */
  TopicName?: string;
  /** 通知类型，默认CMQ，指定URL时HTTP回调推送到 NotifyUrl 指定的地址。 */
  NotifyType?: string;
  /** HTTP回调地址，NotifyType为URL时必填。 */
  NotifyUrl?: string;
}

/** 低光照增强配置 */
declare interface LowLightEnhanceConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可选值：normal默认值：normal。 */
  Type?: string | null;
}

/** 智能分类结果 */
declare interface MediaAiAnalysisClassificationItem {
  /** 智能分类的类别名称。 */
  Classification: string;
  /** 智能分类的可信度，取值范围是 0 到 100。 */
  Confidence: number;
}

/** 智能封面信息 */
declare interface MediaAiAnalysisCoverItem {
  /** 智能封面存储路径。 */
  CoverPath: string;
  /** 智能封面的可信度，取值范围是 0 到 100。 */
  Confidence: number;
}

/** 智能按帧标签结果信息 */
declare interface MediaAiAnalysisFrameTagItem {
  /** 按帧标签名称。 */
  Tag: string;
  /** 按帧标签名称的分类列表，CategorySet.N 表示第 N+1级分类。比如 Tag 为“塔楼”时，CategorySet 包含两个元素：CategorySet.0 为“场景”，CategorySet.1为 “建筑”，表示按帧标签为“塔楼”，且第1级分类是“场景”，第2级分类是“建筑”。 */
  CategorySet: string[];
  /** 按帧标签的可信度，取值范围是 0 到 100。 */
  Confidence: number;
}

/** 按帧标签片段列表 */
declare interface MediaAiAnalysisFrameTagSegmentItem {
  /** 按帧标签起始的偏移时间。 */
  StartTimeOffset: number;
  /** 按帧标签结束的偏移时间。 */
  EndTimeOffset: number;
  /** 时间片段内的标签列表。 */
  TagSet: MediaAiAnalysisFrameTagItem[];
}

/** 智能标签结果信息 */
declare interface MediaAiAnalysisTagItem {
  /** 标签名称。 */
  Tag: string;
  /** 标签的可信度，取值范围是 0 到 100。 */
  Confidence: number;
}

/** 视频转动图结果信息 */
declare interface MediaAnimatedGraphicsItem {
  /** 转动图文件的存储位置。 */
  Storage: TaskOutputStorage;
  /** 转动图的文件路径。 */
  Path: string;
  /** 转动图模板 ID，参见[转动图参数模板](https://cloud.tencent.com/document/product/862/37042)。 */
  Definition: number;
  /** 动图格式，如 gif。 */
  Container: string;
  /** 动图的高度，单位：px。 */
  Height: number;
  /** 动图的宽度，单位：px。 */
  Width: number;
  /** 动图码率，单位：bps。 */
  Bitrate: number;
  /** 动图大小，单位：字节。 */
  Size: number;
  /** 动图的md5值。 */
  Md5: string;
  /** 动图在视频中的起始时间偏移，单位：秒。 */
  StartTimeOffset: number;
  /** 动图在视频中的结束时间偏移，单位：秒。 */
  EndTimeOffset: number;
}

/** 点播文件音频流信息 */
declare interface MediaAudioStreamItem {
  /** 音频流的码率，单位：bps。 */
  Bitrate: number;
  /** 音频流的采样率，单位：hz。 */
  SamplingRate: number;
  /** 音频流的编码格式，例如 aac。 */
  Codec: string;
  /** 音频声道数，例如 2。 */
  Channel: number | null;
}

/** 内容审核 Asr 文字审核嫌疑片段 */
declare interface MediaContentReviewAsrTextSegmentItem {
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

/** 内容审核 Ocr 文字审核嫌疑片段 */
declare interface MediaContentReviewOcrTextSegmentItem {
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
  /** 嫌疑图片 URL （图片不会永久存储，到达PicUrlExpireTime 时间点后图片将被删除）。 */
  Url: string;
  /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  PicUrlExpireTime: string;
}

/** 内容审核涉敏嫌疑片段 */
declare interface MediaContentReviewPoliticalSegmentItem {
  /** 嫌疑片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 嫌疑片段结束的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 嫌疑片段涉敏分数。 */
  Confidence: number;
  /** 嫌疑片段涉敏结果建议，取值范围：pass。review。block。 */
  Suggestion: string;
  /** 涉敏人物、违规图标名字。 */
  Name: string;
  /** 嫌疑片段涉敏结果标签。内容审核模板[画面涉敏任务控制参数](https://cloud.tencent.com/document/api/862/37615)里 LabelSet 参数与此参数取值范围的对应关系：violation_photo：violation_photo：违规图标。politician：nation_politician：国家领导人；province_politician: 省部级领导人；bureau_politician：厅局级领导人；county_politician：县处级领导人；rural_politician：乡科级领导人；sensitive_politician：涉敏人物；foreign_politician：国外领导人。entertainment：sensitive_entertainment：敏感娱乐人物。sport：sensitive_sport：敏感体育人物。entrepreneur：sensitive_entrepreneur：敏感商业人物。scholar：sensitive_scholar：敏感教育学者。celebrity：sensitive_celebrity：敏感知名人物；historical_celebrity：历史知名人物。military：sensitive_military：敏感军事人物。 */
  Label: string;
  /** 嫌疑图片 URL （图片不会永久存储，到达 PicUrlExpireTime 时间点后图片将被删除）。 */
  Url: string;
  /** 涉敏人物、违规图标出现的区域坐标 (像素级)，[x1, y1, x2, y2]，即左上角坐标、右下角坐标。 */
  AreaCoordSet: number[];
  /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  PicUrlExpireTime: string;
}

/** 内容审核涉黄/涉敏嫌疑片段 */
declare interface MediaContentReviewSegmentItem {
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
  /** 嫌疑图片 URL （图片不会永久存储，到达 PicUrlExpireTime 时间点后图片将被删除）。 */
  Url: string;
  /** 嫌疑图片 URL 失效时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  PicUrlExpireTime: string;
}

/** 雪碧图信息 */
declare interface MediaImageSpriteItem {
  /** 雪碧图规格，参见[雪碧图参数模板](https://cloud.tencent.com/document/product/266/33480)。 */
  Definition: number;
  /** 雪碧图小图的高度。 */
  Height: number;
  /** 雪碧图小图的宽度。 */
  Width: number;
  /** 每一张雪碧图大图里小图的数量。 */
  TotalCount: number;
  /** 每一张雪碧图大图的路径。 */
  ImagePathSet: string[];
  /** 雪碧图子图位置与时间关系的 WebVtt 文件路径。WebVtt 文件表明了各个雪碧图小图对应的时间点，以及在雪碧大图里的坐标位置，一般被播放器用于实现预览。 */
  WebVttPath: string;
  /** 雪碧图文件的存储位置。 */
  Storage: TaskOutputStorage;
}

/** 媒体处理的输入对象信息。 */
declare interface MediaInputInfo {
  /** 输入来源对象的类型，支持 COS 和 URL 两种。 */
  Type: string;
  /** 当 Type 为 COS 时有效，则该项为必填，表示媒体处理 COS 对象信息。 */
  CosInputInfo?: CosInputInfo;
  /** 当 Type 为 URL 时有效，则该项为必填，表示媒体处理 URL 对象信息。 */
  UrlInputInfo?: UrlInputInfo | null;
}

/** 点播媒体文件元信息 */
declare interface MediaMetaData {
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
  VideoStreamSet: MediaVideoStreamItem[];
  /** 音频流信息。 */
  AudioStreamSet: MediaAudioStreamItem[];
  /** 视频时长，单位：秒。 */
  VideoDuration: number;
  /** 音频时长，单位：秒。 */
  AudioDuration: number;
}

/** 对视频转自适应码流任务结果类型 */
declare interface MediaProcessTaskAdaptiveDynamicStreamingResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 对视频转自适应码流任务的输入。 */
  Input: AdaptiveDynamicStreamingTaskInput;
  /** 对视频转自适应码流任务的输出。 */
  Output: AdaptiveDynamicStreamingInfoItem | null;
}

/** 转动图任务结果类型 */
declare interface MediaProcessTaskAnimatedGraphicResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 转动图任务的输入。 */
  Input: AnimatedGraphicTaskInput;
  /** 转动图任务的输出。 */
  Output: MediaAnimatedGraphicsItem | null;
}

/** 对视频截雪碧图任务结果类型 */
declare interface MediaProcessTaskImageSpriteResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 对视频截雪碧图任务的输入。 */
  Input: ImageSpriteTaskInput;
  /** 对视频截雪碧图任务的输出。 */
  Output: MediaImageSpriteItem | null;
}

/** 媒体处理任务类型 */
declare interface MediaProcessTaskInput {
  /** 视频转码任务列表。 */
  TranscodeTaskSet?: TranscodeTaskInput[];
  /** 视频转动图任务列表。 */
  AnimatedGraphicTaskSet?: AnimatedGraphicTaskInput[];
  /** 对视频按时间点截图任务列表。 */
  SnapshotByTimeOffsetTaskSet?: SnapshotByTimeOffsetTaskInput[];
  /** 对视频采样截图任务列表。 */
  SampleSnapshotTaskSet?: SampleSnapshotTaskInput[];
  /** 对视频截雪碧图任务列表。 */
  ImageSpriteTaskSet?: ImageSpriteTaskInput[];
  /** 转自适应码流任务列表。 */
  AdaptiveDynamicStreamingTaskSet?: AdaptiveDynamicStreamingTaskInput[];
}

/** 任务查询结果类型 */
declare interface MediaProcessTaskResult {
  /** 任务的类型，可以取的值有：Transcode：转码AnimatedGraphics：转动图SnapshotByTimeOffset：时间点截图SampleSnapshot：采样截图ImageSprites：雪碧图CoverBySnapshot：截图做封面AdaptiveDynamicStreaming：自适应码流 */
  Type: string;
  /** 视频转码任务的查询结果，当任务类型为 Transcode 时有效。 */
  TranscodeTask: MediaProcessTaskTranscodeResult | null;
  /** 视频转动图任务的查询结果，当任务类型为 AnimatedGraphics 时有效。 */
  AnimatedGraphicTask: MediaProcessTaskAnimatedGraphicResult | null;
  /** 对视频按时间点截图任务的查询结果，当任务类型为 SnapshotByTimeOffset 时有效。 */
  SnapshotByTimeOffsetTask: MediaProcessTaskSnapshotByTimeOffsetResult | null;
  /** 对视频采样截图任务的查询结果，当任务类型为 SampleSnapshot 时有效。 */
  SampleSnapshotTask: MediaProcessTaskSampleSnapshotResult | null;
  /** 对视频截雪碧图任务的查询结果，当任务类型为 ImageSprite 时有效。 */
  ImageSpriteTask: MediaProcessTaskImageSpriteResult | null;
  /** 转自适应码流任务查询结果，当任务类型为 AdaptiveDynamicStreaming 时有效。 */
  AdaptiveDynamicStreamingTask: MediaProcessTaskAdaptiveDynamicStreamingResult | null;
}

/** 对视频做采样截图任务结果类型 */
declare interface MediaProcessTaskSampleSnapshotResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 对视频做采样截图任务输入。 */
  Input: SampleSnapshotTaskInput;
  /** 对视频做采样截图任务输出。 */
  Output: MediaSampleSnapshotItem | null;
}

/** 对视频按指定时间点截图任务结果类型 */
declare interface MediaProcessTaskSnapshotByTimeOffsetResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 对视频按指定时间点截图任务输入。 */
  Input: SnapshotByTimeOffsetTaskInput;
  /** 对视频按指定时间点截图任务输出。 */
  Output: MediaSnapshotByTimeOffsetItem | null;
}

/** 转码任务结果类型 */
declare interface MediaProcessTaskTranscodeResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 转码任务的输入。 */
  Input: TranscodeTaskInput;
  /** 转码任务的输出。 */
  Output: MediaTranscodeItem | null;
  /** 转码进度，取值范围 [0-100] */
  Progress: number | null;
}

/** 采样截图信息 */
declare interface MediaSampleSnapshotItem {
  /** 采样截图规格 ID，参见[采样截图参数模板](https://cloud.tencent.com/document/product/266/33480)。 */
  Definition: number;
  /** 采样方式，取值范围：Percent：根据百分比间隔采样。Time：根据时间间隔采样。 */
  SampleType: string;
  /** 采样间隔当 SampleType 为 Percent 时，该值表示多少百分比一张图。当 SampleType 为 Time 时，该值表示多少时间间隔一张图，单位秒， 第一张图均为视频首帧。 */
  Interval: number;
  /** 截图后文件的存储位置。 */
  Storage: TaskOutputStorage;
  /** 生成的截图 path 列表。 */
  ImagePathSet: string[];
  /** 截图如果被打上了水印，被打水印的模板 ID 列表。 */
  WaterMarkDefinition: number[];
}

/** 点播文件指定时间点截图信息 */
declare interface MediaSnapshotByTimeOffsetItem {
  /** 指定时间点截图规格，参见[指定时间点截图参数模板](https://cloud.tencent.com/document/product/266/33480)。 */
  Definition: number;
  /** 同一规格的截图信息集合，每个元素代表一张截图。 */
  PicInfoSet: MediaSnapshotByTimePicInfoItem[];
  /** 指定时间点截图文件的存储位置。 */
  Storage: TaskOutputStorage;
}

/** 指定时间点截图信息 */
declare interface MediaSnapshotByTimePicInfoItem {
  /** 该张截图对应视频文件中的时间偏移，单位为秒。 */
  TimeOffset: number;
  /** 该张截图的路径。 */
  Path: string;
  /** 截图如果被打上了水印，被打水印的模板 ID 列表。 */
  WaterMarkDefinition: number[];
}

/** 转码信息 */
declare interface MediaTranscodeItem {
  /** 转码后文件的目标存储。 */
  OutputStorage: TaskOutputStorage;
  /** 转码后的视频文件路径。 */
  Path: string;
  /** 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/862/37042)。 */
  Definition: number;
  /** 视频流码率平均值与音频流码率平均值之和， 单位：bps。 */
  Bitrate: number;
  /** 视频流高度的最大值，单位：px。 */
  Height: number;
  /** 视频流宽度的最大值，单位：px。 */
  Width: number;
  /** 媒体文件总大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。 */
  Size: number;
  /** 视频时长，单位：秒。 */
  Duration: number;
  /** 容器类型，例如 m4a，mp4 等。 */
  Container: string;
  /** 视频的 md5 值。 */
  Md5: string;
  /** 音频流信息。 */
  AudioStreamSet: MediaAudioStreamItem[];
  /** 视频流信息。 */
  VideoStreamSet: MediaVideoStreamItem[];
}

/** 点播文件视频流信息 */
declare interface MediaVideoStreamItem {
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
  /** 色彩空间。 */
  ColorPrimaries: string | null;
  /** 色彩空间。 */
  ColorSpace: string | null;
  /** 色彩空间。 */
  ColorTransfer: string | null;
  /** HDR类型。 */
  HdrType: string | null;
}

/** 媒体处理任务中的马赛克参数类型 */
declare interface MosaicInput {
  /** 原点位置，目前仅支持：TopLeft：表示坐标原点位于视频图像左上角，马赛克原点为图片或文字的左上角。默认值：TopLeft。 */
  CoordinateOrigin?: string;
  /** 马赛克原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示马赛克 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；当字符串以 px 结尾，表示马赛克 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。默认值：0px。 */
  XPos?: string;
  /** 马赛克原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示马赛克 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；当字符串以 px 结尾，表示马赛克 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。默认值：0px。 */
  YPos?: string;
  /** 马赛克的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示马赛克 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示马赛克 Width 单位为像素，如 100px 表示 Width 为 100 像素。默认值：10%。 */
  Width?: string;
  /** 马赛克的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示马赛克 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示马赛克 Height 单位为像素，如 100px 表示 Height 为 100 像素。默认值：10%。 */
  Height?: string;
  /** 马赛克的起始时间偏移，单位：秒。不填或填0，表示马赛克从画面出现时开始显现。不填或填0，表示马赛克从画面开始就出现；当数值大于0时（假设为 n），表示马赛克从画面开始的第 n 秒出现；当数值小于0时（假设为 -n），表示马赛克从离画面结束 n 秒前开始出现。 */
  StartTimeOffset?: number;
  /** 马赛克的结束时间偏移，单位：秒。不填或填0，表示马赛克持续到画面结束；当数值大于0时（假设为 n），表示马赛克持续到第 n 秒时消失；当数值小于0时（假设为 -n），表示马赛克持续到离画面结束 n 秒前消失。 */
  EndTimeOffset?: number;
}

/** 输出文件名的`{number}`变量的规则。 */
declare interface NumberFormat {
  /** `{number}`变量的起始值，默认为0。 */
  InitialValue?: number;
  /** `{number}`变量的增长步长，默认为1。 */
  Increment?: number;
  /** `{number}`变量的最小长度，不足时补占位符。默认为1。 */
  MinLength?: number;
  /** `{number}`变量的长度不足时，补充的占位符。默认为"0"。 */
  PlaceHolder?: string;
}

/** 文本全文本识别任务控制参数 */
declare interface OcrFullTextConfigureInfo {
  /** 文本全文识别任务开关，可选值：ON：开启智能文本全文识别任务；OFF：关闭智能文本全文识别任务。 */
  Switch: string;
}

/** 文本全文本识别任务控制参数 */
declare interface OcrFullTextConfigureInfoForUpdate {
  /** 文本全文识别任务开关，可选值：ON：开启智能文本全文识别任务；OFF：关闭智能文本全文识别任务。 */
  Switch?: string;
}

/** 文本关键词识别控制参数。 */
declare interface OcrWordsConfigureInfo {
  /** 文本关键词识别任务开关，可选值：ON：开启文本关键词识别任务；OFF：关闭文本关键词识别任务。 */
  Switch: string;
  /** 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string[];
}

/** 文本关键词识别控制参数。 */
declare interface OcrWordsConfigureInfoForUpdate {
  /** 文本关键词识别任务开关，可选值：ON：开启文本关键词识别任务；OFF：关闭文本关键词识别任务。 */
  Switch?: string;
  /** 关键词过滤标签，指定需要返回的关键词的标签。如果未填或者为空，则全部结果都返回。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string[];
}

/** 自定义转码的规格参数。用于覆盖模板中对应参数值。 */
declare interface OverrideTranscodeParameter {
  /** 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。 */
  Container?: string;
  /** 是否去除视频数据，取值：0：保留；1：去除。 */
  RemoveVideo?: number;
  /** 是否去除音频数据，取值：0：保留；1：去除。 */
  RemoveAudio?: number;
  /** 视频流配置参数。 */
  VideoTemplate?: VideoTemplateInfoForUpdate;
  /** 音频流配置参数。 */
  AudioTemplate?: AudioTemplateInfoForUpdate;
  /** 极速高清转码参数。 */
  TEHDConfig?: TEHDConfigForUpdate;
}

/** 语音涉敏任务控制参数 */
declare interface PoliticalAsrReviewTemplateInfo {
  /** 语音涉敏任务开关，可选值：ON：开启语音涉敏任务；OFF：关闭语音涉敏任务。 */
  Switch: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 语音涉敏任务控制参数。 */
declare interface PoliticalAsrReviewTemplateInfoForUpdate {
  /** 语音涉敏任务开关，可选值：ON：开启语音涉敏任务；OFF：关闭语音涉敏任务。 */
  Switch?: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 涉敏任务控制参数 */
declare interface PoliticalConfigureInfo {
  /** 画面涉敏控制参数。 */
  ImgReviewInfo?: PoliticalImgReviewTemplateInfo;
  /** 语音涉敏控制参数。 */
  AsrReviewInfo?: PoliticalAsrReviewTemplateInfo;
  /** 文本涉敏控制参数。 */
  OcrReviewInfo?: PoliticalOcrReviewTemplateInfo;
}

/** 涉敏任务控制参数。 */
declare interface PoliticalConfigureInfoForUpdate {
  /** 画面涉敏控制参数。 */
  ImgReviewInfo?: PoliticalImgReviewTemplateInfoForUpdate;
  /** 语音涉敏控制参数。 */
  AsrReviewInfo?: PoliticalAsrReviewTemplateInfoForUpdate;
  /** 文本涉敏控制参数。 */
  OcrReviewInfo?: PoliticalOcrReviewTemplateInfoForUpdate;
}

/** 画面涉敏任务控制参数 */
declare interface PoliticalImgReviewTemplateInfo {
  /** 画面涉敏任务开关，可选值：ON：开启画面涉敏任务；OFF：关闭画面涉敏任务。 */
  Switch: string;
  /** 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：violation_photo：违规图标；politician：涉敏人物；entertainment：娱乐人物；sport：体育人物；entrepreneur：商业人物；scholar：教育学者；celebrity：知名人物；military：军事人物。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 画面涉敏任务控制参数。 */
declare interface PoliticalImgReviewTemplateInfoForUpdate {
  /** 画面涉敏任务开关，可选值：ON：开启画面涉敏任务；OFF：关闭画面涉敏任务。 */
  Switch?: string;
  /** 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：violation_photo：违规图标；politician：涉敏人物；entertainment：娱乐人物；sport：体育人物；entrepreneur：商业人物；scholar：教育学者；celebrity：知名人物；military：军事人物。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 文本涉敏任务控制参数 */
declare interface PoliticalOcrReviewTemplateInfo {
  /** 文本涉敏任务开关，可选值：ON：开启文本涉敏任务；OFF：关闭文本涉敏任务。 */
  Switch: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 文本涉敏任务控制参数。 */
declare interface PoliticalOcrReviewTemplateInfoForUpdate {
  /** 文本涉敏任务开关，可选值：ON：开启文本涉敏任务；OFF：关闭文本涉敏任务。 */
  Switch?: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 语音鉴黄任务控制参数 */
declare interface PornAsrReviewTemplateInfo {
  /** 语音鉴黄任务开关，可选值：ON：开启语音鉴黄任务；OFF：关闭语音鉴黄任务。 */
  Switch: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 语音鉴黄任务控制参数。 */
declare interface PornAsrReviewTemplateInfoForUpdate {
  /** 语音鉴黄任务开关，可选值：ON：开启语音鉴黄任务；OFF：关闭语音鉴黄任务。 */
  Switch?: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 鉴黄任务控制参数 */
declare interface PornConfigureInfo {
  /** 画面鉴黄控制参数。 */
  ImgReviewInfo?: PornImgReviewTemplateInfo;
  /** 语音鉴黄控制参数。 */
  AsrReviewInfo?: PornAsrReviewTemplateInfo;
  /** 文本鉴黄控制参数。 */
  OcrReviewInfo?: PornOcrReviewTemplateInfo;
}

/** 鉴黄任务控制参数。 */
declare interface PornConfigureInfoForUpdate {
  /** 画面鉴黄控制参数。 */
  ImgReviewInfo?: PornImgReviewTemplateInfoForUpdate;
  /** 语音鉴黄控制参数。 */
  AsrReviewInfo?: PornAsrReviewTemplateInfoForUpdate;
  /** 文本鉴黄控制参数。 */
  OcrReviewInfo?: PornOcrReviewTemplateInfoForUpdate;
}

/** 画面鉴黄任务控制参数 */
declare interface PornImgReviewTemplateInfo {
  /** 画面鉴黄任务开关，可选值：ON：开启画面鉴黄任务；OFF：关闭画面鉴黄任务。 */
  Switch: string;
  /** 画面鉴黄过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：porn：色情；vulgar：低俗；intimacy：亲密行为；sexy：性感。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 0 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 画面鉴黄任务控制参数。 */
declare interface PornImgReviewTemplateInfoForUpdate {
  /** 画面鉴黄任务开关，可选值：ON：开启画面鉴黄任务；OFF：关闭画面鉴黄任务。 */
  Switch?: string;
  /** 画面鉴黄过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：porn：色情；vulgar：低俗；intimacy：亲密行为；sexy：性感。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 文本鉴黄任务控制参数 */
declare interface PornOcrReviewTemplateInfo {
  /** 文本鉴黄任务开关，可选值：ON：开启文本鉴黄任务；OFF：关闭文本鉴黄任务。 */
  Switch: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 文本鉴黄任务控制参数。 */
declare interface PornOcrReviewTemplateInfoForUpdate {
  /** 文本鉴黄任务开关，可选值：ON：开启文本鉴黄任务；OFF：关闭文本鉴黄任务。 */
  Switch?: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 语音违禁任务控制参数 */
declare interface ProhibitedAsrReviewTemplateInfo {
  /** 语音违禁任务开关，可选值：ON：开启语音违禁任务；OFF：关闭语音违禁任务。 */
  Switch: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 语音违禁任务控制参数 */
declare interface ProhibitedAsrReviewTemplateInfoForUpdate {
  /** 语音违禁任务开关，可选值：ON：开启语音违禁任务；OFF：关闭语音违禁任务。 */
  Switch?: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 违禁任务控制参数 */
declare interface ProhibitedConfigureInfo {
  /** 语音违禁控制参数。 */
  AsrReviewInfo?: ProhibitedAsrReviewTemplateInfo | null;
  /** 文本违禁控制参数。 */
  OcrReviewInfo?: ProhibitedOcrReviewTemplateInfo | null;
}

/** 违禁任务控制参数 */
declare interface ProhibitedConfigureInfoForUpdate {
  /** 语音违禁控制参数。 */
  AsrReviewInfo?: ProhibitedAsrReviewTemplateInfoForUpdate;
  /** 文本违禁控制参数。 */
  OcrReviewInfo?: ProhibitedOcrReviewTemplateInfoForUpdate;
}

/** 文本违禁任务控制参数 */
declare interface ProhibitedOcrReviewTemplateInfo {
  /** 文本违禁任务开关，可选值：ON：开启文本违禁任务；OFF：关闭文本违禁任务。 */
  Switch: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 文本违禁任务控制参数 */
declare interface ProhibitedOcrReviewTemplateInfoForUpdate {
  /** 文本违禁任务开关，可选值：ON：开启文本违禁任务；OFF：关闭文本违禁任务。 */
  Switch?: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 图片水印模板输入参数 */
declare interface RawImageWatermarkInput {
  /** 水印图片的输入内容。支持 jpeg、png 图片格式。 */
  ImageContent: MediaInputInfo;
  /** 水印的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。默认值：10%。 */
  Width?: string;
  /** 水印的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。默认值：0px，表示 Height 按照原始水印图片的宽高比缩放。 */
  Height?: string;
  /** 水印重复类型。使用场景：水印为动态图像。取值范围：once：动态水印播放完后，不再出现；repeat_last_frame：水印播放完后，停留在最后一帧；repeat：水印循环播放，直到视频结束（默认值）。 */
  RepeatType?: string;
}

/** 自定义转码的规格参数。 */
declare interface RawTranscodeParameter {
  /** 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。 */
  Container: string;
  /** 是否去除视频数据，取值：0：保留；1：去除。默认值：0。 */
  RemoveVideo?: number;
  /** 是否去除音频数据，取值：0：保留；1：去除。默认值：0。 */
  RemoveAudio?: number;
  /** 视频流配置参数，当 RemoveVideo 为 0，该字段必填。 */
  VideoTemplate?: VideoTemplateInfo;
  /** 音频流配置参数，当 RemoveAudio 为 0，该字段必填。 */
  AudioTemplate?: AudioTemplateInfo;
  /** 极速高清转码参数。 */
  TEHDConfig?: TEHDConfig;
}

/** 自定义水印规格参数。 */
declare interface RawWatermarkParameter {
  /** 水印类型，可选值：image：图片水印。 */
  Type: string;
  /** 原点位置，目前仅支持：TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角。默认值：TopLeft。 */
  CoordinateOrigin?: string;
  /** 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。默认值：0px。 */
  XPos?: string;
  /** 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。默认值：0px。 */
  YPos?: string;
  /** 图片水印模板，当 Type 为 image，该字段必填。当 Type 为 text，该字段无效。 */
  ImageTemplate?: RawImageWatermarkInput;
}

/** 对视频做采样截图任务输入参数类型。 */
declare interface SampleSnapshotTaskInput {
  /** 采样截图模板 ID。 */
  Definition: number;
  /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
  WatermarkSet?: WatermarkInput[];
  /** 采样截图后文件的目标存储，不填则继承上层的 OutputStorage 值。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 采样截图后图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_sampleSnapshot_{definition}_{number}.{format}`。 */
  OutputObjectPath?: string;
  /** 采样截图后输出路径中的`{number}`变量的规则。 */
  ObjectNumberFormat?: NumberFormat | null;
}

/** 采样截图模板详情 */
declare interface SampleSnapshotTemplate {
  /** 采样截图模板唯一标识。 */
  Definition: number;
  /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type: string;
  /** 采样截图模板名称。 */
  Name: string;
  /** 模板描述信息。 */
  Comment: string;
  /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width: number;
  /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive: string;
  /** 图片格式。 */
  Format: string;
  /** 采样截图类型。 */
  SampleType: string;
  /** 采样间隔。 */
  SampleInterval: number;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType: string;
}

/** 编排视频分析任务结果类型 */
declare interface ScheduleAnalysisTaskResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 分析任务的输入。 */
  Input: AiAnalysisTaskInput;
  /** 分析任务的输出。 */
  Output: AiAnalysisResult[] | null;
}

/** 编排视频识别任务结果类型 */
declare interface ScheduleRecognitionTaskResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 识别任务的输入。 */
  Input: AiRecognitionTaskInput;
  /** 识别任务的输出。 */
  Output: AiRecognitionResult[] | null;
}

/** 编排视频审核任务结果类型 */
declare interface ScheduleReviewTaskResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode: number;
  /** 错误信息。 */
  Message: string;
  /** 审核任务的输入。 */
  Input: AiContentReviewTaskInput;
  /** 审核任务的输出。 */
  Output: AiContentReviewResult[] | null;
}

/** 编排任务信息 */
declare interface ScheduleTask {
  /** 编排任务 ID。 */
  TaskId: string;
  /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
  Status: string;
  /** 媒体处理的目标文件信息。 */
  InputInfo: MediaInputInfo | null;
  /** 原始视频的元信息。 */
  MetaData: MediaMetaData | null;
  /** 编排任务输出。 */
  ActivityResultSet: ActivityResult[] | null;
}

/** 去划痕配置 */
declare interface ScratchRepairConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 强度，取值范围：0.0~1.0。默认：0.0。 */
  Intensity?: number | null;
}

/** 细节增强配置 */
declare interface SharpEnhanceConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 强度，取值范围：0.0~1.0。默认：0.0。 */
  Intensity?: number | null;
}

/** 对视频按指定时间点截图任务输入参数类型 */
declare interface SnapshotByTimeOffsetTaskInput {
  /** 指定时间点截图模板 ID。 */
  Definition: number;
  /** 截图时间点列表，时间点支持 s、% 两种格式：当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；当字符串以 % 结尾，表示时间点为视频时长的百分比大小，如10%表示时间点为视频前第10%的时间。 */
  ExtTimeOffsetSet?: string[];
  /** 截图时间点列表，单位为秒。此参数已不再建议使用，建议您使用 ExtTimeOffsetSet 参数。 */
  TimeOffsetSet?: number[];
  /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
  WatermarkSet?: WatermarkInput[];
  /** 时间点截图后文件的目标存储，不填则继承上层的 OutputStorage 值。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 时间点截图后图片文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_snapshotByTimeOffset_{definition}_{number}.{format}`。 */
  OutputObjectPath?: string;
  /** 时间点截图后输出路径中的`{number}`变量的规则。 */
  ObjectNumberFormat?: NumberFormat | null;
}

/** 时间点截图模板详情 */
declare interface SnapshotByTimeOffsetTemplate {
  /** 时间点截图模板唯一标识。 */
  Definition: number;
  /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type: string;
  /** 时间点截图模板名称。 */
  Name: string;
  /** 模板描述信息。 */
  Comment: string;
  /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width: number;
  /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive: string;
  /** 图片格式。 */
  Format: string;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。black：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。black：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType: string;
}

/** 超分配置 */
declare interface SuperResolutionConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可选值：lq：针对低清晰度有较多噪声视频的超分；hq：针对高清晰度视频超分。默认值：lq。 */
  Type?: string | null;
  /** 超分倍数，可选值：2：目前只支持 2 倍超分。默认值：2。 */
  Size?: number | null;
}

/** SVG水印模板输入参数 */
declare interface SvgWatermarkInput {
  /** 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；当字符串以 % 结尾时，含义同 W%。默认值为 10W%。 */
  Width?: string;
  /** 水印的高度，支持 px，W%，H%，S%，L% 六种格式：当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；当字符串以 % 结尾时，含义同 H%。默认值为 0px。 */
  Height?: string;
}

/** SVG水印模板输入参数 */
declare interface SvgWatermarkInputForUpdate {
  /** 水印的宽度，支持 px，%，W%，H%，S%，L% 六种格式：当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素；当填 0px 且 Height 不为 0px 时，表示水印的宽度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的宽度取原始 SVG 图像的宽度；当字符串以 W% 结尾，表示水印 Width 为视频宽度的百分比大小，如 10W% 表示 Width 为视频宽度的 10%；当字符串以 H% 结尾，表示水印 Width 为视频高度的百分比大小，如 10H% 表示 Width 为视频高度的 10%；当字符串以 S% 结尾，表示水印 Width 为视频短边的百分比大小，如 10S% 表示 Width 为视频短边的 10%；当字符串以 L% 结尾，表示水印 Width 为视频长边的百分比大小，如 10L% 表示 Width 为视频长边的 10%；当字符串以 % 结尾时，含义同 W%。默认值为 10W%。 */
  Width?: string;
  /** 水印的高度，支持 px，%，W%，H%，S%，L% 六种格式：当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素；当填 0px 且 Width 不为 0px 时，表示水印的高度按原始 SVG 图像等比缩放；当 Width、Height 都填 0px 时，表示水印的高度取原始 SVG 图像的高度；当字符串以 W% 结尾，表示水印 Height 为视频宽度的百分比大小，如 10W% 表示 Height 为视频宽度的 10%；当字符串以 H% 结尾，表示水印 Height 为视频高度的百分比大小，如 10H% 表示 Height 为视频高度的 10%；当字符串以 S% 结尾，表示水印 Height 为视频短边的百分比大小，如 10S% 表示 Height 为视频短边的 10%；当字符串以 L% 结尾，表示水印 Height 为视频长边的百分比大小，如 10L% 表示 Height 为视频长边的 10%；当字符串以 % 结尾时，含义同 H%。默认值为 0px。 */
  Height?: string;
}

/** 极速高清参数配置。 */
declare interface TEHDConfig {
  /** 极速高清类型，可选值：TEHD-100：极速高清-100。不填代表不启用极速高清。 */
  Type: string;
  /** 视频码率上限，当 Type 指定了极速高清类型时有效。不填或填0表示不设视频码率上限。 */
  MaxVideoBitrate?: number;
}

/** 极速高清参数配置。 */
declare interface TEHDConfigForUpdate {
  /** 极速高清类型，可选值：TEHD-100：极速高清-100。不填代表不修改。 */
  Type?: string;
  /** 视频码率上限，不填代表不修改。 */
  MaxVideoBitrate?: number;
}

/** 智能标签任务控制参数 */
declare interface TagConfigureInfo {
  /** 智能标签任务开关，可选值：ON：开启智能标签任务；OFF：关闭智能标签任务。 */
  Switch: string;
}

/** 智能标签任务控制参数 */
declare interface TagConfigureInfoForUpdate {
  /** 智能标签任务开关，可选值：ON：开启智能标签任务；OFF：关闭智能标签任务。 */
  Switch?: string;
}

/** 任务的事件通知配置。 */
declare interface TaskNotifyConfig {
  /** CMQ或TDMQ-CMQ 的模型，有 Queue 和 Topic 两种。 */
  CmqModel: string;
  /** CMQ或TDMQ-CMQ 的园区，如 sh，bj 等。 */
  CmqRegion: string;
  /** 当模型为 Topic 时有效，表示接收事件通知的 CMQ 或 TDMQ-CMQ 的主题名。 */
  TopicName?: string;
  /** 当模型为 Queue 时有效，表示接收事件通知的 CMQ 或 TDMQ-CMQ 的队列名。 */
  QueueName?: string;
  /** 工作流通知的模式，可取值有 Finish 和 Change，不填代表 Finish。 */
  NotifyMode?: string;
  /** 通知类型，可选值：CMQ：已下线，建议切换到TDMQ-CMQTDMQ-CMQ：消息队列URL：指定URL时HTTP回调推送到 NotifyUrl 指定的地址，回调协议http+json，包体内容同解析事件通知接口的输出参数 SCF：不推荐使用，需要在控制台额外配置SCF目前 默认CMQ。 */
  NotifyType?: string;
  /** HTTP回调地址，NotifyType为URL时必填。 */
  NotifyUrl?: string;
}

/** 媒体处理输出对象信息。 */
declare interface TaskOutputStorage {
  /** 媒体处理输出对象存储位置的类型，现在仅支持 COS。 */
  Type: string;
  /** 当 Type 为 COS 时有效，则该项为必填，表示媒体处理 COS 输出位置。 */
  CosOutputStorage?: CosOutputStorage | null;
}

/** 任务概要信息 */
declare interface TaskSimpleInfo {
  /** 任务 ID。 */
  TaskId: string;
  /** 任务类型，包含： WorkflowTask：工作流处理任务； EditMediaTask：视频编辑任务； LiveProcessTask：直播处理任务。 */
  TaskType: string;
  /** 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。若任务尚未开始，该字段为：0000-00-00T00:00:00Z。 */
  BeginProcessTime: string;
  /** 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。若任务尚未完成，该字段为：0000-00-00T00:00:00Z。 */
  FinishTime: string;
  /** 子任务类型。 */
  SubTaskTypes: string[];
}

/** 涉敏任务控制参数 */
declare interface TerrorismConfigureInfo {
  /** 画面涉敏任务控制参数。 */
  ImgReviewInfo?: TerrorismImgReviewTemplateInfo;
  /** 文本涉敏任务控制参数。 */
  OcrReviewInfo: TerrorismOcrReviewTemplateInfo;
}

/** 涉敏任务控制参数。 */
declare interface TerrorismConfigureInfoForUpdate {
  /** 画面涉敏任务控制参数。 */
  ImgReviewInfo?: TerrorismImgReviewTemplateInfoForUpdate;
  /** 文本涉敏任务控制参数。 */
  OcrReviewInfo?: TerrorismOcrReviewTemplateInfoForUpdate;
}

/** 画面涉敏任务控制参数 */
declare interface TerrorismImgReviewTemplateInfo {
  /** 画面涉敏任务开关，可选值：ON：开启画面涉敏任务；OFF：关闭画面涉敏任务。 */
  Switch: string;
  /** 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：guns：武器枪支；crowd：人群聚集；bloody：血腥画面；police：警察部队；banners：涉敏旗帜；militant：武装分子；explosion：爆炸火灾；terrorists：涉敏人物；scenario：涉敏画面。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 90 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 80 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 画面涉敏任务控制参数。 */
declare interface TerrorismImgReviewTemplateInfoForUpdate {
  /** 画面涉敏任务开关，可选值：ON：开启画面涉敏任务；OFF：关闭画面涉敏任务。 */
  Switch?: string;
  /** 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：guns：武器枪支；crowd：人群聚集；bloody：血腥画面；police：警察部队；banners：涉敏旗帜；militant：武装分子；explosion：爆炸火灾；terrorists：涉敏人物；scenario：涉敏画面。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 文本涉敏任务控制参数 */
declare interface TerrorismOcrReviewTemplateInfo {
  /** 文本涉敏任务开关，可选值：ON：开启文本涉敏任务；OFF：关闭文本涉敏任务。 */
  Switch: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 文本涉敏任务控制参数 */
declare interface TerrorismOcrReviewTemplateInfoForUpdate {
  /** 文本涉敏任务开关，可选值：ON：开启文本涉敏任务；OFF：关闭文本涉敏任务。 */
  Switch?: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 文字水印模板 */
declare interface TextWatermarkTemplateInput {
  /** 字体类型，目前可以支持两种：simkai.ttf：可以支持中文和英文；arial.ttf：仅支持英文。 */
  FontType: string;
  /** 字体大小，格式：Npx，N 为数值。 */
  FontSize: string;
  /** 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。 */
  FontColor: string;
  /** 文字透明度，取值范围：(0, 1]0：完全透明1：完全不透明默认值：1。 */
  FontAlpha: number;
}

/** 文字水印模板 */
declare interface TextWatermarkTemplateInputForUpdate {
  /** 字体类型，目前可以支持两种：simkai.ttf：可以支持中文和英文；arial.ttf：仅支持英文。 */
  FontType?: string;
  /** 字体大小，格式：Npx，N 为数值。 */
  FontSize?: string;
  /** 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。 */
  FontColor?: string;
  /** 文字透明度，取值范围：(0, 1]0：完全透明1：完全不透明 */
  FontAlpha?: number;
}

/** 转码任务输入参数类型 */
declare interface TranscodeTaskInput {
  /** 视频转码模板 ID。 */
  Definition: number;
  /** 视频转码自定义参数，当 Definition 填 0 时有效。该参数用于高度定制场景，建议您优先使用 Definition 指定转码参数。 */
  RawParameter?: RawTranscodeParameter | null;
  /** 视频转码自定义参数，当 Definition 不填 0 时有效。当填写了该结构中的部分转码参数时，将使用填写的参数覆盖转码模板中的参数。该参数用于高度定制场景，建议您仅使用 Definition 指定转码参数。 */
  OverrideParameter?: OverrideTranscodeParameter | null;
  /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
  WatermarkSet?: WatermarkInput[] | null;
  /** 马赛克列表，最大可支持 10 张。 */
  MosaicSet?: MosaicInput[];
  /** 转码后的视频的起始时间偏移，单位：秒。不填或填0，表示转码后的视频从原始视频的起始位置开始；当数值大于0时（假设为 n），表示转码后的视频从原始视频的第 n 秒位置开始；当数值小于0时（假设为 -n），表示转码后的视频从原始视频结束 n 秒前的位置开始。 */
  StartTimeOffset?: number;
  /** 转码后视频的终止时间偏移，单位：秒。不填或填0，表示转码后的视频持续到原始视频的末尾终止；当数值大于0时（假设为 n），表示转码后的视频持续到原始视频第 n 秒时终止；当数值小于0时（假设为 -n），表示转码后的视频持续到原始视频结束 n 秒前终止。 */
  EndTimeOffset?: number;
  /** 转码后文件的目标存储，不填则继承上层的 OutputStorage 值。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 转码后主文件的输出路径，可以为相对路径或者绝对路径。如果不填，则默认为相对路径：`{inputName}_transcode_{definition}.{format}`。 */
  OutputObjectPath?: string;
  /** 转码后分片文件的输出路径（转码 HLS 时 ts 的路径），只能为相对路径。如果不填，则默认为：`{inputName}_transcode_{definition}_{number}.{format}`。 */
  SegmentObjectName?: string;
  /** 转码后输出路径中的`{number}`变量的规则。 */
  ObjectNumberFormat?: NumberFormat | null;
  /** 片头片尾参数。 */
  HeadTailParameter?: HeadTailParameter | null;
}

/** 转码模板详情 */
declare interface TranscodeTemplate {
  /** 转码模板唯一标识。 */
  Definition: string;
  /** 封装格式，取值：mp4、flv、hls、mp3、flac、ogg。 */
  Container: string;
  /** 转码模板名称。 */
  Name: string;
  /** 模板描述信息。 */
  Comment: string;
  /** 模板类型，取值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type: string;
  /** 是否去除视频数据，取值：0：保留；1：去除。 */
  RemoveVideo: number;
  /** 是否去除音频数据，取值：0：保留；1：去除。 */
  RemoveAudio: number;
  /** 视频流配置参数，仅当 RemoveVideo 为 0，该字段有效。 */
  VideoTemplate: VideoTemplateInfo;
  /** 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。 */
  AudioTemplate: AudioTemplateInfo;
  /** 极速高清转码参数。 */
  TEHDConfig: TEHDConfig | null;
  /** 封装格式过滤条件，可选值：Video：视频格式，可以同时包含视频流和音频流的封装格式；PureAudio：纯音频格式，只能包含音频流的封装格式板。 */
  ContainerType: string;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
  /** 音视频增强配置。 */
  EnhanceConfig: EnhanceConfig | null;
}

/** 媒体处理 URL 对象信息。 */
declare interface UrlInputInfo {
  /** 视频的 URL。 */
  Url: string;
}

/** 用户自定义语音审核任务控制参数 */
declare interface UserDefineAsrTextReviewTemplateInfo {
  /** 用户自定语音审核任务开关，可选值：ON：开启自定义语音审核任务；OFF：关闭自定义语音审核任务。 */
  Switch: string;
  /** 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 用户自定义语音审核任务控制参数 */
declare interface UserDefineAsrTextReviewTemplateInfoForUpdate {
  /** 用户自定语音审核任务开关，可选值：ON：开启自定义语音审核任务；OFF：关闭自定义语音审核任务。 */
  Switch?: string;
  /** 用户自定义语音过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义语音关键词素材时需要添加对应标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 用户自定义审核任务控制参数 */
declare interface UserDefineConfigureInfo {
  /** 用户自定义人物审核控制参数。 */
  FaceReviewInfo?: UserDefineFaceReviewTemplateInfo;
  /** 用户自定义语音审核控制参数。 */
  AsrReviewInfo?: UserDefineAsrTextReviewTemplateInfo;
  /** 用户自定义文本审核控制参数。 */
  OcrReviewInfo?: UserDefineOcrTextReviewTemplateInfo;
}

/** 用户自定义审核任务控制参数。 */
declare interface UserDefineConfigureInfoForUpdate {
  /** 用户自定义人物审核控制参数。 */
  FaceReviewInfo: UserDefineFaceReviewTemplateInfoForUpdate;
  /** 用户自定义语音审核控制参数。 */
  AsrReviewInfo: UserDefineAsrTextReviewTemplateInfoForUpdate;
  /** 用户自定义文本审核控制参数。 */
  OcrReviewInfo: UserDefineOcrTextReviewTemplateInfoForUpdate;
}

/** 用户自定义人物审核任务控制参数 */
declare interface UserDefineFaceReviewTemplateInfo {
  /** 用户自定义人物审核任务开关，可选值：ON：开启自定义人物审核任务；OFF：关闭自定义人物审核任务。 */
  Switch: string;
  /** 用户自定义人物过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 97 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 95 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 用户自定义人物审核任务控制参数。 */
declare interface UserDefineFaceReviewTemplateInfoForUpdate {
  /** 用户自定义人物审核任务开关，可选值：ON：开启自定义人物审核任务；OFF：关闭自定义人物审核任务。 */
  Switch?: string;
  /** 用户自定义人物过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义人物库的时，需要添加对应人物标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 用户自定义文本审核任务控制参数 */
declare interface UserDefineOcrTextReviewTemplateInfo {
  /** 用户自定文本审核任务开关，可选值：ON：开启自定义文本审核任务；OFF：关闭自定义文本审核任务。 */
  Switch: string;
  /** 用户自定义文本过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规，不填默认为 100 分。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核，不填默认为 75 分。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 用户自定义文本审核任务控制参数。 */
declare interface UserDefineOcrTextReviewTemplateInfoForUpdate {
  /** 用户自定文本审核任务开关，可选值：ON：开启自定义文本审核任务；OFF：关闭自定义文本审核任务。 */
  Switch?: string;
  /** 用户自定义文本过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回。如果要使用标签过滤功能，添加自定义文本关键词素材时需要添加对应标签。标签个数最多 10 个，每个标签长度最多 16 个字符。 */
  LabelSet?: string;
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 视频降噪配置 */
declare interface VideoDenoiseConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可选值：weakstrong默认值：weak。 */
  Type?: string | null;
}

/** 视频增强配置 */
declare interface VideoEnhanceConfig {
  /** 插帧帧率配置。 */
  FrameRate?: FrameRateConfig | null;
  /** 超分配置。 */
  SuperResolution?: SuperResolutionConfig | null;
  /** HDR配置。 */
  Hdr?: HdrConfig | null;
  /** 视频降噪配置。 */
  Denoise?: VideoDenoiseConfig | null;
  /** 综合增强配置。 */
  ImageQualityEnhance?: ImageQualityEnhanceConfig | null;
  /** 色彩增强配置。 */
  ColorEnhance?: ColorEnhanceConfig | null;
  /** 细节增强配置。 */
  SharpEnhance?: SharpEnhanceConfig | null;
  /** 人脸增强配置。 */
  FaceEnhance?: FaceEnhanceConfig | null;
  /** 低光照增强配置。 */
  LowLightEnhance?: LowLightEnhanceConfig | null;
  /** 去划痕配置。 */
  ScratchRepair?: ScratchRepairConfig | null;
  /** 去伪影（毛刺）配置。 */
  ArtifactRepair?: ArtifactRepairConfig | null;
}

/** 视频流配置参数 */
declare interface VideoTemplateInfo {
  /** 视频流的编码格式，可选值：libx264：H.264 编码libx265：H.265 编码av1：AOMedia Video 1 编码注意：目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。注意：av1 编码容器目前只支持 mp4 。 */
  Codec: string;
  /** 视频帧率，取值范围：[0, 100]，单位：Hz。当取值为 0，表示帧率和原始视频保持一致。注意：自适应码率时取值范围是 [0, 60] */
  Fps: number;
  /** 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。当取值为 0，表示视频码率和原始视频保持一致。 */
  Bitrate: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。注意：自适应模式时，Width不能小于Height。 */
  ResolutionAdaptive?: string;
  /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。当填 0 或不填时，系统将自动设置 gop 长度。 */
  Gop?: number;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。默认值：black 。注意：自适应码流只支持 stretch、black。 */
  FillType?: string;
  /** 视频恒定码率控制因子，取值范围为[1, 51]。如果指定该参数，将使用 CRF 的码率控制方式做转码（视频码率将不再生效）。如果没有特殊需求，不建议指定该参数。 */
  Vcrf?: number;
}

/** 视频流配置参数 */
declare interface VideoTemplateInfoForUpdate {
  /** 视频流的编码格式，可选值：libx264：H.264 编码libx265：H.265 编码av1：AOMedia Video 1 编码注意：目前 H.265 编码必须指定分辨率，并且需要在 640*480 以内。注意：av1 编码容器目前只支持 mp4 。 */
  Codec?: string;
  /** 视频帧率，取值范围：[0, 100]，单位：Hz。当取值为 0，表示帧率和原始视频保持一致。 */
  Fps?: number;
  /** 视频流的码率，取值范围：0 和 [128, 35000]，单位：kbps。当取值为 0，表示视频码率和原始视频保持一致。 */
  Bitrate?: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。注意：自适应模式时，Width不能小于Height。 */
  ResolutionAdaptive?: string;
  /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。 */
  Width?: number;
  /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。 */
  Height?: number;
  /** 关键帧 I 帧之间的间隔，取值范围：0 和 [1, 100000]，单位：帧数。当填 0 时，系统将自动设置 gop 长度。 */
  Gop?: number;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。 */
  FillType?: string;
  /** 视频恒定码率控制因子。取值范围为[0, 51]，填0表示禁用该参数。如果没有特殊需求，不建议指定该参数。 */
  Vcrf?: number;
  /** 内容自适应编码。可选值：0：不开启1：开启默认值: 0. 当开启该参数时，将会自适应生成多个不同分辨率，不同码率的码流， 其中VideoTemplate的宽和高为多个码流中的最大分辨率，VideoTemplate中的码率为多个码流中的最高码率， VideoTemplate中的vcrf为多个码流中的最高质量。 当不设置分辨率、码率和vcrf时， ContentAdaptStream 参数生成的最高分辨率为视频源的分辨率，视频质量为接近vmaf95分。 若要开启该参数或了解计费细节, 请联系您的腾讯云商务。 */
  ContentAdaptStream?: number;
}

/** 媒体处理任务中的水印参数类型 */
declare interface WatermarkInput {
  /** 水印模板 ID。 */
  Definition: number;
  /** 水印自定义参数，当 Definition 填 0 时有效。该参数用于高度定制场景，建议您优先使用 Definition 指定水印参数。水印自定义参数不支持截图打水印。 */
  RawParameter?: RawWatermarkParameter;
  /** 文字内容，长度不超过100个字符。仅当水印类型为文字水印时填写。文字水印不支持截图打水印。 */
  TextContent?: string;
  /** SVG 内容。长度不超过 2000000 个字符。仅当水印类型为 SVG 水印时填写。SVG 水印不支持截图打水印。 */
  SvgContent?: string;
  /** 水印的起始时间偏移，单位：秒。不填或填0，表示水印从画面出现时开始显现。不填或填0，表示水印从画面开始就出现；当数值大于0时（假设为 n），表示水印从画面开始的第 n 秒出现；当数值小于0时（假设为 -n），表示水印从离画面结束 n 秒前开始出现。 */
  StartTimeOffset?: number;
  /** 水印的结束时间偏移，单位：秒。不填或填0，表示水印持续到画面结束；当数值大于0时（假设为 n），表示水印持续到第 n 秒时消失；当数值小于0时（假设为 -n），表示水印持续到离画面结束 n 秒前消失。 */
  EndTimeOffset?: number;
}

/** 水印模板详情 */
declare interface WatermarkTemplate {
  /** 水印模板唯一标识。 */
  Definition: number;
  /** 水印类型，取值：image：图片水印；text：文字水印。 */
  Type: string;
  /** 水印模板名称。 */
  Name: string;
  /** 模板描述信息。 */
  Comment: string;
  /** 水印图片原点距离视频图像原点的水平位置。当字符串以 % 结尾，表示水印 Left 为视频宽度指定百分比的位置，如 10% 表示 Left 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Left 为视频宽度指定像素的位置，如 100px 表示 Left 为 100 像素。 */
  XPos: string;
  /** 水印图片原点距离视频图像原点的垂直位置。当字符串以 % 结尾，表示水印 Top 为视频高度指定百分比的位置，如 10% 表示 Top 为视频高度的 10%；当字符串以 px 结尾，表示水印 Top 为视频高度指定像素的位置，如 100px 表示 Top 为 100 像素。 */
  YPos: string;
  /** 图片水印模板，仅当 Type 为 image，该字段有效。 */
  ImageTemplate: ImageWatermarkTemplate | null;
  /** 文字水印模板，仅当 Type 为 text，该字段有效。 */
  TextTemplate: TextWatermarkTemplateInput | null;
  /** SVG 水印模板，当 Type 为 svg，该字段有效。 */
  SvgTemplate: SvgWatermarkInput | null;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
  /** 原点位置，可选值：topLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；topRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；bottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；bottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下。； */
  CoordinateOrigin: string;
}

/** 工作流信息详情。 */
declare interface WorkflowInfo {
  /** 工作流 ID。 */
  WorkflowId: number;
  /** 工作流名称。 */
  WorkflowName: string;
  /** 工作流状态，取值范围：Enabled：已启用，Disabled：已禁用。 */
  Status: string;
  /** 工作流绑定的输入规则，当上传视频命中该规则到该对象时即触发工作流。 */
  Trigger: WorkflowTrigger;
  /** 媒体处理的文件输出存储位置。 */
  OutputStorage: TaskOutputStorage | null;
  /** 媒体处理类型任务参数。 */
  MediaProcessTask: MediaProcessTaskInput | null;
  /** 视频内容审核类型任务参数。 */
  AiContentReviewTask: AiContentReviewTaskInput | null;
  /** 视频内容分析类型任务参数。 */
  AiAnalysisTask: AiAnalysisTaskInput | null;
  /** 视频内容识别类型任务参数。 */
  AiRecognitionTask: AiRecognitionTaskInput | null;
  /** 任务的事件通知信息，不填代表不获取事件通知。 */
  TaskNotifyConfig: TaskNotifyConfig | null;
  /** 任务流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
  TaskPriority: number;
  /** 媒体处理生成的文件输出的目标目录，如`/movie/201907/`。 */
  OutputDir: string;
  /** 工作流创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 工作流最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime: string;
}

/** 媒体处理任务信息 */
declare interface WorkflowTask {
  /** 媒体处理任务 ID。 */
  TaskId: string;
  /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
  Status: string;
  /** 源异常时返回非0错误码，返回0 时请使用各个具体任务的 ErrCode。 */
  ErrCode: number;
  /** 源异常时返回对应异常Message，否则请使用各个具体任务的 Message。 */
  Message: string;
  /** 媒体处理的目标文件信息。 */
  InputInfo: MediaInputInfo | null;
  /** 原始视频的元信息。 */
  MetaData: MediaMetaData | null;
  /** 媒体处理任务的执行状态与结果。 */
  MediaProcessResultSet: MediaProcessTaskResult[];
  /** 视频内容审核任务的执行状态与结果。 */
  AiContentReviewResultSet: AiContentReviewResult[];
  /** 视频内容分析任务的执行状态与结果。 */
  AiAnalysisResultSet: AiAnalysisResult[];
  /** 视频内容识别任务的执行状态与结果。 */
  AiRecognitionResultSet: AiRecognitionResult[];
}

/** 输入规则，当上传视频命中该规则时，即触发工作流。 */
declare interface WorkflowTrigger {
  /** 触发器的类型，目前仅支持 CosFileUpload。 */
  Type: string;
  /** 当 Type 为 CosFileUpload 时必填且有效，为 COS 触发规则。 */
  CosFileUploadTrigger?: CosFileUploadTrigger | null;
}

declare interface CreateAIAnalysisTemplateRequest {
  /** 视频内容分析模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 视频内容分析模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 智能分类任务控制参数。 */
  ClassificationConfigure?: ClassificationConfigureInfo;
  /** 智能标签任务控制参数。 */
  TagConfigure?: TagConfigureInfo;
  /** 智能封面任务控制参数。 */
  CoverConfigure?: CoverConfigureInfo;
  /** 智能按帧标签任务控制参数。 */
  FrameTagConfigure?: FrameTagConfigureInfo;
}

declare interface CreateAIAnalysisTemplateResponse {
  /** 视频内容分析模板唯一标识。 */
  Definition: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAIRecognitionTemplateRequest {
  /** 视频内容识别模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 视频内容识别模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 人脸识别控制参数。 */
  FaceConfigure?: FaceConfigureInfo;
  /** 文本全文识别控制参数。 */
  OcrFullTextConfigure?: OcrFullTextConfigureInfo;
  /** 文本关键词识别控制参数。 */
  OcrWordsConfigure?: OcrWordsConfigureInfo;
  /** 语音全文识别控制参数。 */
  AsrFullTextConfigure?: AsrFullTextConfigureInfo;
  /** 语音关键词识别控制参数。 */
  AsrWordsConfigure?: AsrWordsConfigureInfo;
}

declare interface CreateAIRecognitionTemplateResponse {
  /** 视频内容识别模板唯一标识。 */
  Definition: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAdaptiveDynamicStreamingTemplateRequest {
  /** 自适应转码格式，取值范围：HLS，MPEG-DASH。 */
  Format: string;
  /** 转自适应码流输出子流参数信息，最多输出10路子流。注意：各个子流的帧率必须保持一致；如果不一致，采用第一个子流的帧率作为输出帧率。 */
  StreamInfos: AdaptiveStreamTemplate[];
  /** 模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 是否禁止视频低码率转高码率，取值范围：0：否，1：是。默认为否。 */
  DisableHigherVideoBitrate?: number;
  /** 是否禁止视频分辨率转高分辨率，取值范围：0：否，1：是。默认为否。 */
  DisableHigherVideoResolution?: number;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
}

declare interface CreateAdaptiveDynamicStreamingTemplateResponse {
  /** 自适应转码模板唯一标识。 */
  Definition: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAnimatedGraphicsTemplateRequest {
  /** 帧率，取值范围：[1, 30]，单位：Hz。 */
  Fps: number;
  /** 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive?: string;
  /** 动图格式，取值为 gif 和 webp。默认为 gif。 */
  Format?: string;
  /** 图片质量，取值范围：[1, 100]，默认值为 75。 */
  Quality?: number;
  /** 转动图模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
}

declare interface CreateAnimatedGraphicsTemplateResponse {
  /** 转动图模板唯一标识。 */
  Definition: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateContentReviewTemplateRequest {
  /** 内容审核模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 内容审核模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 令人反感的信息的控制参数。 */
  PornConfigure?: PornConfigureInfo;
  /** 令人不安全的信息的控制参数。 */
  TerrorismConfigure?: TerrorismConfigureInfo;
  /** 令人不适宜的信息的控制参数。 */
  PoliticalConfigure?: PoliticalConfigureInfo;
  /** 违禁控制参数。违禁内容包括：谩骂；涉毒违法。注意：此参数尚未支持。 */
  ProhibitedConfigure?: ProhibitedConfigureInfo;
  /** 用户自定义内容审核控制参数。 */
  UserDefineConfigure?: UserDefineConfigureInfo;
}

declare interface CreateContentReviewTemplateResponse {
  /** 内容审核模板唯一标识。 */
  Definition: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateImageSpriteTemplateRequest {
  /** 采样类型，取值：Percent：按百分比。Time：按时间间隔。 */
  SampleType: string;
  /** 采样间隔。当 SampleType 为 Percent 时，指定采样间隔的百分比。当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。 */
  SampleInterval: number;
  /** 雪碧图中小图的行数。 */
  RowCount: number;
  /** 雪碧图中小图的列数。 */
  ColumnCount: number;
  /** 雪碧图模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive?: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。默认值：black 。 */
  FillType?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
}

declare interface CreateImageSpriteTemplateResponse {
  /** 雪碧图模板唯一标识。 */
  Definition: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreatePersonSampleRequest {
  /** 素材名称，长度限制：20 个字符。 */
  Name: string;
  /** 素材应用场景，可选值：1. Recognition：用于内容识别，等价于 Recognition.Face。2. Review：用于不适宜内容识别，等价于 Review.Face。3. All：包含以上全部，等价于 1+2。 */
  Usages: string[];
  /** 素材描述，长度限制：1024 个字符。 */
  Description?: string;
  /** 素材图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串，仅支持 jpeg、png 图片格式。数组长度限制：5 张图片。注意：图片必须是单人像五官较清晰的照片，像素不低于 200*200。 */
  FaceContents?: string[];
  /** 素材标签数组长度限制：20 个标签；单个标签长度限制：128 个字符。 */
  Tags?: string[];
}

declare interface CreatePersonSampleResponse {
  /** 素材信息。 */
  Person?: AiSamplePerson;
  /** 处理失败的五官定位信息。 */
  FailFaceInfoSet?: AiSampleFailFaceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSampleSnapshotTemplateRequest {
  /** 采样截图类型，取值：Percent：按百分比。Time：按时间间隔。 */
  SampleType: string;
  /** 采样间隔。当 SampleType 为 Percent 时，指定采样间隔的百分比。当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。 */
  SampleInterval: number;
  /** 采样截图模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive?: string;
  /** 图片格式，取值为 jpg 和 png。默认为 jpg。 */
  Format?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType?: string;
}

declare interface CreateSampleSnapshotTemplateResponse {
  /** 采样截图模板唯一标识。 */
  Definition: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSnapshotByTimeOffsetTemplateRequest {
  /** 指定时间点截图模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive?: string;
  /** 图片格式，取值可以为 jpg 和 png。默认为 jpg。 */
  Format?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType?: string;
}

declare interface CreateSnapshotByTimeOffsetTemplateResponse {
  /** 时间点截图模板唯一标识。 */
  Definition: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTranscodeTemplateRequest {
  /** 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。 */
  Container: string;
  /** 转码模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 是否去除视频数据，可选值：0：保留1：去除默认值：0。 */
  RemoveVideo?: number;
  /** 是否去除音频数据，可选值：0：保留1：去除默认值：0。 */
  RemoveAudio?: number;
  /** 视频流配置参数，当 RemoveVideo 为 0，该字段必填。 */
  VideoTemplate?: VideoTemplateInfo;
  /** 音频流配置参数，当 RemoveAudio 为 0，该字段必填。 */
  AudioTemplate?: AudioTemplateInfo;
  /** 极速高清转码参数。 */
  TEHDConfig?: TEHDConfig;
  /** 音视频增强配置。 */
  EnhanceConfig?: EnhanceConfig;
}

declare interface CreateTranscodeTemplateResponse {
  /** 转码模板唯一标识。 */
  Definition: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateWatermarkTemplateRequest {
  /** 水印类型，可选值：image：图片水印；text：文字水印；svg：SVG 水印。 */
  Type: string;
  /** 水印模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 原点位置，可选值：TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。默认值：TopLeft。 */
  CoordinateOrigin?: string;
  /** 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。默认值：0px。 */
  XPos?: string;
  /** 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。默认值：0px。 */
  YPos?: string;
  /** 图片水印模板，仅当 Type 为 image，该字段必填且有效。 */
  ImageTemplate?: ImageWatermarkInput;
  /** 文字水印模板，仅当 Type 为 text，该字段必填且有效。 */
  TextTemplate?: TextWatermarkTemplateInput;
  /** SVG 水印模板，仅当 Type 为 svg，该字段必填且有效。 */
  SvgTemplate?: SvgWatermarkInput;
}

declare interface CreateWatermarkTemplateResponse {
  /** 水印模板唯一标识。 */
  Definition: number;
  /** 水印图片地址，仅当 Type 为 image，该字段有效。 */
  ImageUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateWordSamplesRequest {
  /** 关键词应用场景，可选值：1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；2. Recognition.Asr：通过音频识别技术，进行内容识别；3. Review.Ocr：通过光学字符识别技术，进行不适宜内容识别；4. Review.Asr：通过音频识别技术，进行不适宜内容识别；可合并简写为：5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；6. Review：通过光学字符识别技术、音频识别技术，进行不适宜内容识别，等价于 3+4；7. All：通过光学字符识别技术、音频识别技术，进行内容识别、不适宜内容识别，等价于 1+2+3+4。 */
  Usages: string[];
  /** 关键词，数组长度限制：100。 */
  Words: AiSampleWordInfo[];
}

declare interface CreateWordSamplesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateWorkflowRequest {
  /** 工作流名称，最多128字符。同一个用户该名称唯一。 */
  WorkflowName: string;
  /** 工作流绑定的触发规则，当上传视频命中该规则到该对象时即触发工作流。 */
  Trigger: WorkflowTrigger;
  /** 媒体处理的文件输出存储位置。不填则继承 Trigger 中的存储位置。 */
  OutputStorage?: TaskOutputStorage;
  /** 媒体处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致。 */
  OutputDir?: string;
  /** 媒体处理类型任务参数。 */
  MediaProcessTask?: MediaProcessTaskInput;
  /** 视频内容审核类型任务参数。 */
  AiContentReviewTask?: AiContentReviewTaskInput;
  /** 视频内容分析类型任务参数。 */
  AiAnalysisTask?: AiAnalysisTaskInput;
  /** 视频内容识别类型任务参数。 */
  AiRecognitionTask?: AiRecognitionTaskInput;
  /** 任务的事件通知配置，不填代表不获取事件通知。 */
  TaskNotifyConfig?: TaskNotifyConfig;
  /** 工作流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
  TaskPriority?: number;
}

declare interface CreateWorkflowResponse {
  /** 工作流 ID。 */
  WorkflowId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAIAnalysisTemplateRequest {
  /** 视频内容分析模板唯一标识。 */
  Definition: number;
}

declare interface DeleteAIAnalysisTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAIRecognitionTemplateRequest {
  /** 视频内容识别模板唯一标识。 */
  Definition: number;
}

declare interface DeleteAIRecognitionTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAdaptiveDynamicStreamingTemplateRequest {
  /** 自适应转码模板唯一标识。 */
  Definition: number;
}

declare interface DeleteAdaptiveDynamicStreamingTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAnimatedGraphicsTemplateRequest {
  /** 转动图模板唯一标识。 */
  Definition: number;
}

declare interface DeleteAnimatedGraphicsTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteContentReviewTemplateRequest {
  /** 内容审核模板唯一标识。 */
  Definition: number;
}

declare interface DeleteContentReviewTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteImageSpriteTemplateRequest {
  /** 雪碧图模板唯一标识。 */
  Definition: number;
}

declare interface DeleteImageSpriteTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeletePersonSampleRequest {
  /** 素材 ID。 */
  PersonId: string;
}

declare interface DeletePersonSampleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSampleSnapshotTemplateRequest {
  /** 采样截图模板唯一标识。 */
  Definition: number;
}

declare interface DeleteSampleSnapshotTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSnapshotByTimeOffsetTemplateRequest {
  /** 指定时间点截图模板唯一标识。 */
  Definition: number;
}

declare interface DeleteSnapshotByTimeOffsetTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTranscodeTemplateRequest {
  /** 转码模板唯一标识。 */
  Definition: number;
}

declare interface DeleteTranscodeTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteWatermarkTemplateRequest {
  /** 水印模板唯一标识。 */
  Definition: number;
}

declare interface DeleteWatermarkTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteWordSamplesRequest {
  /** 关键词，数组长度限制：100 个词。 */
  Keywords: string[];
}

declare interface DeleteWordSamplesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteWorkflowRequest {
  /** 工作流 ID。 */
  WorkflowId: number;
}

declare interface DeleteWorkflowResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAIAnalysisTemplatesRequest {
  /** 视频内容分析模板唯一标识过滤条件，数组长度限制：10。 */
  Definitions?: number[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
  /** 模板类型过滤条件，不填则返回所有，可选值：* Preset：系统预置模板；* Custom：用户自定义模板。 */
  Type?: string;
}

declare interface DescribeAIAnalysisTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 视频内容分析模板详情列表。 */
  AIAnalysisTemplateSet: AIAnalysisTemplateItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAIRecognitionTemplatesRequest {
  /** 视频内容识别模板唯一标识过滤条件，数组长度限制：10。 */
  Definitions?: number[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：50。 */
  Limit?: number;
  /** 模板类型过滤条件，不填则返回所有，可选值：* Preset：系统预置模板；* Custom：用户自定义模板。 */
  Type?: string;
}

declare interface DescribeAIRecognitionTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 视频内容识别模板详情列表。 */
  AIRecognitionTemplateSet: AIRecognitionTemplateItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAdaptiveDynamicStreamingTemplatesRequest {
  /** 转自适应码流模板唯一标识过滤条件，数组长度限制：100。 */
  Definitions?: number[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
  /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string;
}

declare interface DescribeAdaptiveDynamicStreamingTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 转自适应码流模板详情列表。 */
  AdaptiveDynamicStreamingTemplateSet: AdaptiveDynamicStreamingTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAnimatedGraphicsTemplatesRequest {
  /** 转动图模板唯一标识过滤条件，数组长度限制：100。 */
  Definitions?: number[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
  /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string;
}

declare interface DescribeAnimatedGraphicsTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 转动图模板详情列表。 */
  AnimatedGraphicsTemplateSet: AnimatedGraphicsTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeContentReviewTemplatesRequest {
  /** 智能审核模板唯一标识过滤条件，数组长度限制：50。 */
  Definitions?: number[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：50。 */
  Limit?: number;
  /** 模板类型过滤条件，不填则返回所有，可选值：* Preset：系统预置模板；* Custom：用户自定义模板。 */
  Type?: string;
}

declare interface DescribeContentReviewTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 内容审核模板详情列表。 */
  ContentReviewTemplateSet: ContentReviewTemplateItem[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeImageSpriteTemplatesRequest {
  /** 雪碧图模板唯一标识过滤条件，数组长度限制：100。 */
  Definitions?: number[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
  /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string;
}

declare interface DescribeImageSpriteTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 雪碧图模板详情列表。 */
  ImageSpriteTemplateSet: ImageSpriteTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMediaMetaDataRequest {
  /** 需要获取元信息的文件输入信息。 */
  InputInfo: MediaInputInfo;
}

declare interface DescribeMediaMetaDataResponse {
  /** 媒体元信息。 */
  MetaData?: MediaMetaData;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePersonSamplesRequest {
  /** 拉取的素材类型，可选值：UserDefine：用户自定义素材库；Default：系统默认素材库。默认值：UserDefine，拉取用户自定义素材库素材。说明：如果是拉取系统默认素材库，只能使用素材名字或者素材 ID + 素材名字的方式进行拉取，且人脸图片只返回一张。 */
  Type?: string;
  /** 素材 ID，数组长度限制：100。 */
  PersonIds?: string[];
  /** 素材名称，数组长度限制：20。 */
  Names?: string[];
  /** 素材标签，数组长度限制：20。 */
  Tags?: string[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：100，最大值：100。 */
  Limit?: number;
}

declare interface DescribePersonSamplesResponse {
  /** 符合条件的记录总数。 */
  TotalCount?: number;
  /** 素材信息。 */
  PersonSet?: AiSamplePerson[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSampleSnapshotTemplatesRequest {
  /** 采样截图模板唯一标识过滤条件，数组长度限制：100。 */
  Definitions?: number[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
  /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string;
}

declare interface DescribeSampleSnapshotTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 采样截图模板详情列表。 */
  SampleSnapshotTemplateSet: SampleSnapshotTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSnapshotByTimeOffsetTemplatesRequest {
  /** 指定时间点截图模板唯一标识过滤条件，数组长度限制：100。 */
  Definitions?: number[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
  /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string;
}

declare interface DescribeSnapshotByTimeOffsetTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 指定时间点截图模板详情列表。 */
  SnapshotByTimeOffsetTemplateSet: SnapshotByTimeOffsetTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskDetailRequest {
  /** 视频处理任务的任务 ID。 */
  TaskId: string;
}

declare interface DescribeTaskDetailResponse {
  /** 任务类型，目前取值有：WorkflowTask：视频工作流处理任务。EditMediaTask：视频编辑任务。LiveStreamProcessTask：直播流处理任务。ScheduleTask：编排处理任务。 */
  TaskType: string;
  /** 任务状态，取值：WAITING：等待中；PROCESSING：处理中；FINISH：已完成。 */
  Status: string;
  /** 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime: string;
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime: string;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime: string;
  /** 视频编辑任务信息，仅当 TaskType 为 EditMediaTask，该字段有值。 */
  EditMediaTask: EditMediaTask | null;
  /** 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。 */
  WorkflowTask: WorkflowTask | null;
  /** 直播流处理任务信息，仅当 TaskType 为 LiveStreamProcessTask，该字段有值。 */
  LiveStreamProcessTask: LiveStreamProcessTask | null;
  /** 任务的事件通知信息。 */
  TaskNotifyConfig: TaskNotifyConfig | null;
  /** 任务流的优先级，取值范围为 [-10, 10]。 */
  TasksPriority: number;
  /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。 */
  SessionId: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。 */
  SessionContext: string;
  /** 扩展信息字段，仅用于特定场景。 */
  ExtInfo: string;
  /** 编排处理任务信息，仅当 TaskType 为 ScheduleTask，该字段有值。 */
  ScheduleTask: ScheduleTask | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTasksRequest {
  /** 过滤条件：任务状态，可选值：WAITING（等待中）、PROCESSING（处理中）、FINISH（已完成）。 */
  Status: string;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
  /** 翻页标识，分批拉取时使用：当单次请求无法拉取所有数据，接口将会返回 ScrollToken，下一次请求携带该 Token，将会从下一条记录开始获取。 */
  ScrollToken?: string;
}

declare interface DescribeTasksResponse {
  /** 任务概要列表。 */
  TaskSet: TaskSimpleInfo[];
  /** 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空字符串，说明已无更多数据。 */
  ScrollToken: string;
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTranscodeTemplatesRequest {
  /** 转码模板唯一标识过滤条件，数组长度限制：100。 */
  Definitions?: number[];
  /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string;
  /** 封装格式过滤条件，可选值：Video：视频格式，可以同时包含视频流和音频流的封装格式板；PureAudio：纯音频格式，只能包含音频流的封装格式。 */
  ContainerType?: string;
  /** 极速高清过滤条件，用于过滤普通转码或极速高清转码模板，可选值：Common：普通转码模板；TEHD：极速高清模板。 */
  TEHDType?: string;
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
  /** 模板类型（替换旧版本 TEHDType），可选值：Common：普通转码模板；TEHD：极速高清模板。Enhance：音视频增强模板。默认空，不限制类型。 */
  TranscodeType?: string;
}

declare interface DescribeTranscodeTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 转码模板详情列表。 */
  TranscodeTemplateSet: TranscodeTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWatermarkTemplatesRequest {
  /** 水印模板唯一标识过滤条件，数组长度限制：100。 */
  Definitions?: number[];
  /** 水印类型过滤条件，可选值：image：图片水印；text：文字水印。 */
  Type?: string;
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数默认值：10；最大值：100。 */
  Limit?: number;
}

declare interface DescribeWatermarkTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 水印模板详情列表。 */
  WatermarkTemplateSet: WatermarkTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWordSamplesRequest {
  /** 关键词过滤条件，数组长度限制：100 个词。 */
  Keywords?: string[];
  /** 关键词应用场景过滤条件，可选值：1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；2. Recognition.Asr：通过音频识别技术，进行内容识别；3. Review.Ocr：通过光学字符识别技术，进行不适宜内容的识别；4. Review.Asr：通过音频识别技术，进行不适宜内容的识别；可合并简写为：5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；6. Review：通过光学字符识别技术、音频识别技术，进行不适宜内容的识别，等价于 3+4；可多选，元素间关系为 or，即关键词的应用场景包含该字段集合中任意元素的记录，均符合该条件。 */
  Usages?: string[];
  /** 标签过滤条件，数组长度限制：20 个词。 */
  Tags?: string[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：100，最大值：100。 */
  Limit?: number;
}

declare interface DescribeWordSamplesResponse {
  /** 符合条件的记录总数。 */
  TotalCount?: number | null;
  /** 关键词信息。 */
  WordSet?: AiSampleWord[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWorkflowsRequest {
  /** 工作流 ID 过滤条件，数组长度限制：100。 */
  WorkflowIds?: number[];
  /** 工作流状态，取值范围：Enabled：已启用，Disabled：已禁用。不填此参数，则不区分工作流状态。 */
  Status?: string;
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
}

declare interface DescribeWorkflowsResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount: number;
  /** 工作流信息数组。 */
  WorkflowInfoSet: WorkflowInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableWorkflowRequest {
  /** 工作流 ID。 */
  WorkflowId: number;
}

declare interface DisableWorkflowResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EditMediaRequest {
  /** 输入的视频文件信息。 */
  FileInfos: EditMediaFileInfo[];
  /** 媒体处理输出文件的目标存储。 */
  OutputStorage: TaskOutputStorage;
  /** 媒体处理输出文件的目标路径。 */
  OutputObjectPath: string;
  /** 编辑后生成的文件配置。 */
  OutputConfig?: EditMediaOutputConfig;
  /** 任务的事件通知信息，不填代表不获取事件通知。 */
  TaskNotifyConfig?: TaskNotifyConfig;
  /** 任务优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。 */
  TasksPriority?: number;
  /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
  SessionId?: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
  SessionContext?: string;
}

declare interface EditMediaResponse {
  /** 编辑视频的任务 ID，可以通过该 ID 查询编辑任务的状态。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableWorkflowRequest {
  /** 工作流 ID。 */
  WorkflowId: number;
}

declare interface EnableWorkflowResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ExecuteFunctionRequest {
  /** 调用后端接口名称。 */
  FunctionName: string;
  /** 接口参数，具体参数格式调用时与后端协调。 */
  FunctionArg: string;
}

declare interface ExecuteFunctionResponse {
  /** 处理结果打包后的字符串，具体与后台一同协调。 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ManageTaskRequest {
  /** 操作类型，取值范围：Abort：终止任务。使用说明：若 [任务类型](/document/product/862/37614) 为直播流处理任务（LiveStreamProcessTask），支持终止 [任务状态](/document/product/862/37614) 为等待中（WAITING）或处理中（PROCESSING）的任务；否则，对于其他 [任务类型](/document/product/862/37614)，只支持终止 [任务状态](/document/product/862/37614) 为等待中（WAITING）的任务。 */
  OperationType: string;
  /** 视频处理的任务 ID。 */
  TaskId: string;
}

declare interface ManageTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAIAnalysisTemplateRequest {
  /** 视频内容分析模板唯一标识。 */
  Definition: number;
  /** 视频内容分析模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 视频内容分析模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 智能分类任务控制参数。 */
  ClassificationConfigure?: ClassificationConfigureInfoForUpdate;
  /** 智能标签任务控制参数。 */
  TagConfigure?: TagConfigureInfoForUpdate;
  /** 智能封面任务控制参数。 */
  CoverConfigure?: CoverConfigureInfoForUpdate;
  /** 智能按帧标签任务控制参数。 */
  FrameTagConfigure?: FrameTagConfigureInfoForUpdate;
}

declare interface ModifyAIAnalysisTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAIRecognitionTemplateRequest {
  /** 视频内容识别模板唯一标识。 */
  Definition: number;
  /** 视频内容识别模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 视频内容识别模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 人脸识别控制参数。 */
  FaceConfigure?: FaceConfigureInfoForUpdate;
  /** 文本全文识别控制参数。 */
  OcrFullTextConfigure?: OcrFullTextConfigureInfoForUpdate;
  /** 文本关键词识别控制参数。 */
  OcrWordsConfigure?: OcrWordsConfigureInfoForUpdate;
  /** 语音全文识别控制参数。 */
  AsrFullTextConfigure?: AsrFullTextConfigureInfoForUpdate;
  /** 语音关键词识别控制参数。 */
  AsrWordsConfigure?: AsrWordsConfigureInfoForUpdate;
}

declare interface ModifyAIRecognitionTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAdaptiveDynamicStreamingTemplateRequest {
  /** 转自适应码流模板唯一标识。 */
  Definition: number;
  /** 模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 转自适应码流格式，取值范围：HLS，MPEG-DASH。 */
  Format?: string;
  /** 是否禁止视频低码率转高码率，取值范围：0：否，1：是。 */
  DisableHigherVideoBitrate?: number;
  /** 是否禁止视频分辨率转高分辨率，取值范围：0：否，1：是。 */
  DisableHigherVideoResolution?: number;
  /** 转自适应码流输入流参数信息，最多输入10路流。注意：各个流的帧率必须保持一致；如果不一致，采用第一个流的帧率作为输出帧率。 */
  StreamInfos?: AdaptiveStreamTemplate[];
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
}

declare interface ModifyAdaptiveDynamicStreamingTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAnimatedGraphicsTemplateRequest {
  /** 转动图模板唯一标识。 */
  Definition: number;
  /** 转动图模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 动图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 动图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive?: string;
  /** 动图格式，取值为 gif 和 webp。 */
  Format?: string;
  /** 帧率，取值范围：[1, 30]，单位：Hz。 */
  Fps?: number;
  /** 图片质量，取值范围：[1, 100]，默认值为 75。 */
  Quality?: number;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
}

declare interface ModifyAnimatedGraphicsTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyContentReviewTemplateRequest {
  /** 内容审核模板唯一标识。 */
  Definition: number;
  /** 内容审核模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 内容审核模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 令人反感的信息的控制参数。 */
  PornConfigure?: PornConfigureInfoForUpdate;
  /** 令人不安全的信息的控制参数。 */
  TerrorismConfigure?: TerrorismConfigureInfoForUpdate;
  /** 令人不适宜的控制参数。 */
  PoliticalConfigure?: PoliticalConfigureInfoForUpdate;
  /** 违禁控制参数。违禁内容包括：谩骂；涉毒违法。注意：此参数尚未支持。 */
  ProhibitedConfigure?: ProhibitedConfigureInfoForUpdate;
  /** 用户自定义内容审核控制参数。 */
  UserDefineConfigure?: UserDefineConfigureInfoForUpdate;
}

declare interface ModifyContentReviewTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyImageSpriteTemplateRequest {
  /** 雪碧图模板唯一标识。 */
  Definition: number;
  /** 雪碧图模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 雪碧图中小图的宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 雪碧图中小图的高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive?: string;
  /** 采样类型，取值：Percent：按百分比。Time：按时间间隔。 */
  SampleType?: string;
  /** 采样间隔。当 SampleType 为 Percent 时，指定采样间隔的百分比。当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。 */
  SampleInterval?: number;
  /** 雪碧图中小图的行数。 */
  RowCount?: number;
  /** 雪碧图中小图的列数。 */
  ColumnCount?: number;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。默认值：black 。 */
  FillType?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
}

declare interface ModifyImageSpriteTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPersonSampleRequest {
  /** 素材 ID。 */
  PersonId: string;
  /** 名称，长度限制：128 个字符。 */
  Name?: string;
  /** 描述，长度限制：1024 个字符。 */
  Description?: string;
  /** 素材应用场景，可选值：1. Recognition：用于内容识别，等价于 Recognition.Face。2. Review：用于不适宜的内容识别，等价于 Review.Face。3. All：用于内容识别、不适宜的内容识别，等价于 1+2。 */
  Usages?: string[];
  /** 五官操作信息。 */
  FaceOperationInfo?: AiSampleFaceOperation;
  /** 标签操作信息。 */
  TagOperationInfo?: AiSampleTagOperation;
}

declare interface ModifyPersonSampleResponse {
  /** 素材信息。 */
  Person?: AiSamplePerson;
  /** 处理失败的五官信息。 */
  FailFaceInfoSet?: AiSampleFailFaceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySampleSnapshotTemplateRequest {
  /** 采样截图模板唯一标识。 */
  Definition: number;
  /** 采样截图模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive?: string;
  /** 采样截图类型，取值：Percent：按百分比。Time：按时间间隔。 */
  SampleType?: string;
  /** 采样间隔。当 SampleType 为 Percent 时，指定采样间隔的百分比。当 SampleType 为 Time 时，指定采样间隔的时间，单位为秒。 */
  SampleInterval?: number;
  /** 图片格式，取值为 jpg 和 png。 */
  Format?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType?: string;
}

declare interface ModifySampleSnapshotTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySnapshotByTimeOffsetTemplateRequest {
  /** 指定时间点截图模板唯一标识。 */
  Definition: number;
  /** 指定时间点截图模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 截图宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 截图高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。 */
  ResolutionAdaptive?: string;
  /** 图片格式，取值可以为 jpg 和 png。 */
  Format?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType?: string;
}

declare interface ModifySnapshotByTimeOffsetTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTranscodeTemplateRequest {
  /** 转码模板唯一标识。 */
  Definition: number;
  /** 封装格式，可选值：mp4、flv、hls、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。 */
  Container?: string;
  /** 转码模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 是否去除视频数据，可选值：0：保留1：去除 */
  RemoveVideo?: number;
  /** 是否去除音频数据，可选值：0：保留1：去除 */
  RemoveAudio?: number;
  /** 视频流配置参数。 */
  VideoTemplate?: VideoTemplateInfoForUpdate;
  /** 音频流配置参数。 */
  AudioTemplate?: AudioTemplateInfoForUpdate;
  /** 极速高清转码参数。 */
  TEHDConfig?: TEHDConfigForUpdate;
  /** 音视频增强参数。 */
  EnhanceConfig?: EnhanceConfig;
}

declare interface ModifyTranscodeTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyWatermarkTemplateRequest {
  /** 水印模板唯一标识。 */
  Definition: number;
  /** 水印模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 原点位置，可选值：TopLeft：表示坐标原点位于视频图像左上角，水印原点为图片或文字的左上角；TopRight：表示坐标原点位于视频图像的右上角，水印原点为图片或文字的右上角；BottomLeft：表示坐标原点位于视频图像的左下角，水印原点为图片或文字的左下角；BottomRight：表示坐标原点位于视频图像的右下角，水印原点为图片或文字的右下角。 */
  CoordinateOrigin?: string;
  /** 水印原点距离视频图像坐标原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 XPos 为视频宽度指定百分比，如 10% 表示 XPos 为视频宽度的 10%；当字符串以 px 结尾，表示水印 XPos 为指定像素，如 100px 表示 XPos 为 100 像素。 */
  XPos?: string;
  /** 水印原点距离视频图像坐标原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 YPos 为视频高度指定百分比，如 10% 表示 YPos 为视频高度的 10%；当字符串以 px 结尾，表示水印 YPos 为指定像素，如 100px 表示 YPos 为 100 像素。 */
  YPos?: string;
  /** 图片水印模板，该字段仅对图片水印模板有效。 */
  ImageTemplate?: ImageWatermarkInputForUpdate;
  /** 文字水印模板，该字段仅对文字水印模板有效。 */
  TextTemplate?: TextWatermarkTemplateInputForUpdate;
  /** SVG水印模板，当 Type 为 svg，该字段必填。当 Type 为 image 或 text，该字段无效。 */
  SvgTemplate?: SvgWatermarkInputForUpdate;
}

declare interface ModifyWatermarkTemplateResponse {
  /** 图片水印地址，仅当 ImageTemplate.ImageContent 非空，该字段有效。 */
  ImageUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyWordSampleRequest {
  /** 关键词，长度限制：128 个字符。 */
  Keyword: string;
  /** 关键词应用场景，可选值：1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；2. Recognition.Asr：通过音频识别技术，进行内容识别；3. Review.Ocr：通过光学字符识别技术，进行不适宜的内容识别；4. Review.Asr：通过音频识别技术，进行不适宜的音频识别；可合并简写为：5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；6. Review：通过光学字符识别技术、音频识别技术，进行不适宜的内容识别，等价于 3+4；7. All：包含以上全部，等价于 1+2+3+4。 */
  Usages?: string[];
  /** 标签操作信息。 */
  TagOperationInfo?: AiSampleTagOperation;
}

declare interface ModifyWordSampleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ParseLiveStreamProcessNotificationRequest {
  /** 从 CMQ 获取到的直播流事件通知内容。 */
  Content: string;
}

declare interface ParseLiveStreamProcessNotificationResponse {
  /** 直播流处理结果类型，包含：AiReviewResult：内容审核结果；AiRecognitionResult：内容识别结果；ProcessEof：直播流处理结束。 */
  NotificationType?: string;
  /** 视频处理任务 ID。 */
  TaskId?: string;
  /** 直播流处理错误信息，当 NotificationType 为 ProcessEof 时有效。 */
  ProcessEofInfo?: LiveStreamProcessErrorInfo | null;
  /** 内容审核结果，当 NotificationType 为 AiReviewResult 时有效。 */
  AiReviewResultInfo?: LiveStreamAiReviewResultInfo | null;
  /** 内容识别结果，当 NotificationType 为 AiRecognitionResult 时有效。 */
  AiRecognitionResultInfo?: LiveStreamAiRecognitionResultInfo | null;
  /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。 */
  SessionId?: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。 */
  SessionContext?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ParseNotificationRequest {
  /** 从 CMQ 获取到的事件通知内容。 */
  Content: string;
}

declare interface ParseNotificationResponse {
  /** 支持事件类型，目前取值有：WorkflowTask：视频工作流处理任务。EditMediaTask：视频编辑任务。ScheduleTask：编排任务。 */
  EventType: string;
  /** 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。 */
  WorkflowTaskEvent: WorkflowTask | null;
  /** 视频编辑任务信息，仅当 TaskType 为 EditMediaTask，该字段有值。 */
  EditMediaTaskEvent: EditMediaTask | null;
  /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。 */
  SessionId: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。 */
  SessionContext: string;
  /** 编排任务信息，仅当 TaskType 为 ScheduleTask，该字段有值。 */
  ScheduleTaskEvent: ScheduleTask | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ProcessLiveStreamRequest {
  /** 直播流 URL（必须是直播文件地址，支持 rtmp，hls 和 flv 等）。 */
  Url: string;
  /** 任务的事件通知信息，用于指定直播流处理的结果。 */
  TaskNotifyConfig: LiveStreamTaskNotifyConfig;
  /** 直播流处理输出文件的目标存储。如处理有文件输出，该参数为必填项。 */
  OutputStorage?: TaskOutputStorage;
  /** 直播流处理生成的文件输出的目标目录，如`/movie/201909/`，如果不填为 `/` 目录。 */
  OutputDir?: string;
  /** 视频内容审核类型任务参数。 */
  AiContentReviewTask?: AiContentReviewTaskInput;
  /** 视频内容识别类型任务参数。 */
  AiRecognitionTask?: AiRecognitionTaskInput;
  /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
  SessionId?: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
  SessionContext?: string;
}

declare interface ProcessLiveStreamResponse {
  /** 任务 ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ProcessMediaRequest {
  /** 媒体处理的文件输入信息。 */
  InputInfo: MediaInputInfo;
  /** 媒体处理输出文件的目标存储。不填则继承 InputInfo 中的存储位置。 */
  OutputStorage?: TaskOutputStorage;
  /** 媒体处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与 InputInfo 中文件所在的目录一致。 */
  OutputDir?: string;
  /** 媒体处理类型任务参数。 */
  MediaProcessTask?: MediaProcessTaskInput;
  /** 视频内容审核类型任务参数。 */
  AiContentReviewTask?: AiContentReviewTaskInput;
  /** 视频内容分析类型任务参数。 */
  AiAnalysisTask?: AiAnalysisTaskInput;
  /** 视频内容识别类型任务参数。 */
  AiRecognitionTask?: AiRecognitionTaskInput;
  /** 任务的事件通知信息，不填代表不获取事件通知。 */
  TaskNotifyConfig?: TaskNotifyConfig;
  /** 任务流的优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。 */
  TasksPriority?: number;
  /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
  SessionId?: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
  SessionContext?: string;
  /** 编排ID。注意1：对于OutputStorage、OutputDir，如果编排任务里没有配置，将采用请求里对应参数。注意2：对于TaskNotifyConfig，如果编排任务里没有配置，将采用请求里对应的参数。注意3：编排的 Trigger 只是用来自动化触发场景，在手动发起的请求中已经配置的 Trigger 无意义。 */
  ScheduleId?: number;
}

declare interface ProcessMediaResponse {
  /** 任务 ID。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RecognizeMediaForZhiXueRequest {
  /** 输入媒体文件存储信息。 */
  InputInfo: MediaInputInfo;
  /** 表情识别参数配置。默认开启。 */
  ExpressionConfig?: ExpressionConfigInfo;
  /** 动作识别参数配置。默认开启。 */
  ActionConfig?: ActionConfigInfo;
}

declare interface RecognizeMediaForZhiXueResponse {
  /** 任务 ID，可以通过该 ID 查询任务状态和结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetWorkflowRequest {
  /** 工作流 ID。 */
  WorkflowId: number;
  /** 工作流名称，最多128字符。同一个用户该名称唯一。 */
  WorkflowName: string;
  /** 工作流绑定的触发规则，当上传视频命中该规则到该对象时即触发工作流。 */
  Trigger: WorkflowTrigger;
  /** 视频处理的文件输出配置。不填则继承 Trigger 中的存储位置。 */
  OutputStorage?: TaskOutputStorage;
  /** 视频处理生成的文件输出的目标目录，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致，即`{inputDir}`。 */
  OutputDir?: string;
  /** 视频处理类型任务参数。 */
  MediaProcessTask?: MediaProcessTaskInput;
  /** 视频内容审核类型任务参数。 */
  AiContentReviewTask?: AiContentReviewTaskInput;
  /** 视频内容分析类型任务参数。 */
  AiAnalysisTask?: AiAnalysisTaskInput;
  /** 视频内容识别类型任务参数。 */
  AiRecognitionTask?: AiRecognitionTaskInput;
  /** 工作流的优先级，数值越大优先级越高，取值范围是 -10 到 10，不填代表 0。 */
  TaskPriority?: number;
  /** 任务的事件通知信息，不填代表不获取事件通知。 */
  TaskNotifyConfig?: TaskNotifyConfig;
}

declare interface ResetWorkflowResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 视频处理 */
declare interface Mps {
  (): Versions;
  /** 创建内容分析模板 */
  CreateAIAnalysisTemplate(data: CreateAIAnalysisTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAIAnalysisTemplateResponse>;
  /** 创建内容识别模板 */
  CreateAIRecognitionTemplate(data: CreateAIRecognitionTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAIRecognitionTemplateResponse>;
  /** 创建转自适应码流模板 */
  CreateAdaptiveDynamicStreamingTemplate(data: CreateAdaptiveDynamicStreamingTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAdaptiveDynamicStreamingTemplateResponse>;
  /** 创建转动图模板 */
  CreateAnimatedGraphicsTemplate(data: CreateAnimatedGraphicsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAnimatedGraphicsTemplateResponse>;
  /** 创建内容审核模板 */
  CreateContentReviewTemplate(data: CreateContentReviewTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateContentReviewTemplateResponse>;
  /** 创建雪碧图模板 */
  CreateImageSpriteTemplate(data: CreateImageSpriteTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageSpriteTemplateResponse>;
  /** 创建素材样本 */
  CreatePersonSample(data: CreatePersonSampleRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePersonSampleResponse>;
  /** 创建采样截图模板 */
  CreateSampleSnapshotTemplate(data: CreateSampleSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSampleSnapshotTemplateResponse>;
  /** 创建指定时间点截图模板 */
  CreateSnapshotByTimeOffsetTemplate(data: CreateSnapshotByTimeOffsetTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSnapshotByTimeOffsetTemplateResponse>;
  /** 创建转码模板 */
  CreateTranscodeTemplate(data: CreateTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTranscodeTemplateResponse>;
  /** 创建水印模板 */
  CreateWatermarkTemplate(data: CreateWatermarkTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWatermarkTemplateResponse>;
  /** 创建关键词样本 */
  CreateWordSamples(data: CreateWordSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWordSamplesResponse>;
  /** 创建工作流 */
  CreateWorkflow(data: CreateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowResponse>;
  /** 删除内容分析模板 */
  DeleteAIAnalysisTemplate(data: DeleteAIAnalysisTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAIAnalysisTemplateResponse>;
  /** 删除内容识别模板 */
  DeleteAIRecognitionTemplate(data: DeleteAIRecognitionTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAIRecognitionTemplateResponse>;
  /** 删除转自适应码流模板 */
  DeleteAdaptiveDynamicStreamingTemplate(data: DeleteAdaptiveDynamicStreamingTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAdaptiveDynamicStreamingTemplateResponse>;
  /** 删除转动图模板 */
  DeleteAnimatedGraphicsTemplate(data: DeleteAnimatedGraphicsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAnimatedGraphicsTemplateResponse>;
  /** 删除内容审核模板 */
  DeleteContentReviewTemplate(data: DeleteContentReviewTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteContentReviewTemplateResponse>;
  /** 删除雪碧图模板 */
  DeleteImageSpriteTemplate(data: DeleteImageSpriteTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImageSpriteTemplateResponse>;
  /** 删除素材样本 */
  DeletePersonSample(data: DeletePersonSampleRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePersonSampleResponse>;
  /** 删除采样截图模板 */
  DeleteSampleSnapshotTemplate(data: DeleteSampleSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSampleSnapshotTemplateResponse>;
  /** 删除指定时间点截图模板 */
  DeleteSnapshotByTimeOffsetTemplate(data: DeleteSnapshotByTimeOffsetTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSnapshotByTimeOffsetTemplateResponse>;
  /** 删除转码模板 */
  DeleteTranscodeTemplate(data: DeleteTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTranscodeTemplateResponse>;
  /** 删除水印模板 */
  DeleteWatermarkTemplate(data: DeleteWatermarkTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWatermarkTemplateResponse>;
  /** 删除关键词样本 */
  DeleteWordSamples(data: DeleteWordSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWordSamplesResponse>;
  /** 删除工作流 */
  DeleteWorkflow(data: DeleteWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowResponse>;
  /** 获取内容分析模板列表 */
  DescribeAIAnalysisTemplates(data: DescribeAIAnalysisTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIAnalysisTemplatesResponse>;
  /** 获取内容识别模板列表 */
  DescribeAIRecognitionTemplates(data: DescribeAIRecognitionTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIRecognitionTemplatesResponse>;
  /** 获取转自适应码流模板列表 */
  DescribeAdaptiveDynamicStreamingTemplates(data: DescribeAdaptiveDynamicStreamingTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAdaptiveDynamicStreamingTemplatesResponse>;
  /** 获取转动图模板列表 */
  DescribeAnimatedGraphicsTemplates(data: DescribeAnimatedGraphicsTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAnimatedGraphicsTemplatesResponse>;
  /** 获取智能审核模板列表 */
  DescribeContentReviewTemplates(data: DescribeContentReviewTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContentReviewTemplatesResponse>;
  /** 获取雪碧图模板列表 */
  DescribeImageSpriteTemplates(data: DescribeImageSpriteTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageSpriteTemplatesResponse>;
  /** 获取媒体元信息 */
  DescribeMediaMetaData(data: DescribeMediaMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMediaMetaDataResponse>;
  /** 获取素材样本列表 */
  DescribePersonSamples(data: DescribePersonSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonSamplesResponse>;
  /** 获取采样截图模板列表 */
  DescribeSampleSnapshotTemplates(data: DescribeSampleSnapshotTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSampleSnapshotTemplatesResponse>;
  /** 获取指定时间点截图模板列表 */
  DescribeSnapshotByTimeOffsetTemplates(data: DescribeSnapshotByTimeOffsetTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotByTimeOffsetTemplatesResponse>;
  /** 查询任务详情 */
  DescribeTaskDetail(data: DescribeTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskDetailResponse>;
  /** 获取任务列表 */
  DescribeTasks(data: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** 获取转码模板列表 */
  DescribeTranscodeTemplates(data: DescribeTranscodeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTranscodeTemplatesResponse>;
  /** 获取水印模板列表 */
  DescribeWatermarkTemplates(data: DescribeWatermarkTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWatermarkTemplatesResponse>;
  /** 获取关键词样本列表 */
  DescribeWordSamples(data: DescribeWordSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWordSamplesResponse>;
  /** 获取工作流列表 */
  DescribeWorkflows(data: DescribeWorkflowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowsResponse>;
  /** 禁用工作流 */
  DisableWorkflow(data: DisableWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<DisableWorkflowResponse>;
  /** 编辑视频 */
  EditMedia(data: EditMediaRequest, config?: AxiosRequestConfig): AxiosPromise<EditMediaResponse>;
  /** 启用工作流 */
  EnableWorkflow(data: EnableWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<EnableWorkflowResponse>;
  /** 执行定制 API */
  ExecuteFunction(data: ExecuteFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<ExecuteFunctionResponse>;
  /** 任务管理 */
  ManageTask(data: ManageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ManageTaskResponse>;
  /** 修改内容分析模板 */
  ModifyAIAnalysisTemplate(data: ModifyAIAnalysisTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAIAnalysisTemplateResponse>;
  /** 修改内容识别模板 */
  ModifyAIRecognitionTemplate(data: ModifyAIRecognitionTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAIRecognitionTemplateResponse>;
  /** 修改转自适应码流模板 */
  ModifyAdaptiveDynamicStreamingTemplate(data: ModifyAdaptiveDynamicStreamingTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAdaptiveDynamicStreamingTemplateResponse>;
  /** 修改转动图模板 */
  ModifyAnimatedGraphicsTemplate(data: ModifyAnimatedGraphicsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAnimatedGraphicsTemplateResponse>;
  /** 修改内容审核模板 */
  ModifyContentReviewTemplate(data: ModifyContentReviewTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyContentReviewTemplateResponse>;
  /** 修改雪碧图模板 */
  ModifyImageSpriteTemplate(data: ModifyImageSpriteTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyImageSpriteTemplateResponse>;
  /** 修改素材样本 */
  ModifyPersonSample(data: ModifyPersonSampleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPersonSampleResponse>;
  /** 修改采样截图模板 */
  ModifySampleSnapshotTemplate(data: ModifySampleSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySampleSnapshotTemplateResponse>;
  /** 修改指定时间点截图模板 */
  ModifySnapshotByTimeOffsetTemplate(data: ModifySnapshotByTimeOffsetTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySnapshotByTimeOffsetTemplateResponse>;
  /** 修改转码模板 */
  ModifyTranscodeTemplate(data: ModifyTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTranscodeTemplateResponse>;
  /** 修改水印模板 */
  ModifyWatermarkTemplate(data: ModifyWatermarkTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWatermarkTemplateResponse>;
  /** 修改关键词样本 */
  ModifyWordSample(data: ModifyWordSampleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWordSampleResponse>;
  /** 解析直播流处理结果 */
  ParseLiveStreamProcessNotification(data: ParseLiveStreamProcessNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<ParseLiveStreamProcessNotificationResponse>;
  /** 解析事件通知 */
  ParseNotification(data: ParseNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<ParseNotificationResponse>;
  /** 对直播流发起处理 */
  ProcessLiveStream(data: ProcessLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ProcessLiveStreamResponse>;
  /** 发起媒体处理 */
  ProcessMedia(data: ProcessMediaRequest, config?: AxiosRequestConfig): AxiosPromise<ProcessMediaResponse>;
  /** 智学智能媒体识别 */
  RecognizeMediaForZhiXue(data: RecognizeMediaForZhiXueRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeMediaForZhiXueResponse>;
  /** 重设工作流 */
  ResetWorkflow(data: ResetWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<ResetWorkflowResponse>;
}

export declare type Versions = ["2019-06-12"];

export default Mps;
