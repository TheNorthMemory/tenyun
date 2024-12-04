/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AI 智能分析模板详情 */
declare interface AIAnalysisTemplateItem {
  /** 智能分析模板唯一标识。 */
  Definition?: number;
  /** 智能分析模板名称。 */
  Name?: string;
  /** 智能分析模板描述信息。 */
  Comment?: string;
  /** 智能分类任务控制参数。 */
  ClassificationConfigure?: ClassificationConfigureInfo | null;
  /** 智能标签任务控制参数。 */
  TagConfigure?: TagConfigureInfo | null;
  /** 智能封面任务控制参数。 */
  CoverConfigure?: CoverConfigureInfo | null;
  /** 智能按帧标签任务控制参数。 */
  FrameTagConfigure?: FrameTagConfigureInfo | null;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime?: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime?: string;
  /** 模板类型，取值范围：* Preset：系统预置模板；* Custom：用户自定义模板。 */
  Type?: string | null;
}

/** 视频内容识别模板详情 */
declare interface AIRecognitionTemplateItem {
  /** 视频内容识别模板唯一标识。 */
  Definition?: number;
  /** 视频内容识别模板名称。 */
  Name?: string;
  /** 视频内容识别模板描述信息。 */
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
  /** 语音翻译控制参数。 */
  TranslateConfigure?: TranslateConfigureInfo | null;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime?: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime?: string;
  /** 模板类型，取值范围：* Preset：系统预置模板；* Custom：用户自定义模板。 */
  Type?: string | null;
}

/** 动作识别参数配置 */
declare interface ActionConfigInfo {
  /** 动作识别任务开关，可选值：ON：开启；OFF：关闭。 */
  Switch: string;
}

/** 编排原子任务 */
declare interface Activity {
  /** 原子任务类型：input: 起始节点output：终止节点action-trans：转码action-samplesnapshot：采样截图action-AIAnalysis: 分析action-AIRecognition：识别action-aiReview：审核action-animated-graphics：转动图action-image-sprite：雪碧图action-snapshotByTimeOffset: 时间点截图action-adaptive-substream：自适应码流action-AIQualityControl：媒体质检 */
  ActivityType: string | null;
  /** 后驱节点索引数组 */
  ReardriveIndex?: number[] | null;
  /** 原子任务参数 */
  ActivityPara?: ActivityPara | null;
}

/** 编排原子任务 */
declare interface ActivityPara {
  /** 视频转码任务 */
  TranscodeTask?: TranscodeTaskInput | null;
  /** 视频转动图任务 */
  AnimatedGraphicTask?: AnimatedGraphicTaskInput | null;
  /** 视频按时间点截图任务 */
  SnapshotByTimeOffsetTask?: SnapshotByTimeOffsetTaskInput | null;
  /** 视频采样截图任务 */
  SampleSnapshotTask?: SampleSnapshotTaskInput | null;
  /** 视频截雪碧图任务 */
  ImageSpriteTask?: ImageSpriteTaskInput | null;
  /** 转自适应码流任务 */
  AdaptiveDynamicStreamingTask?: AdaptiveDynamicStreamingTaskInput | null;
  /** 视频内容审核类型任务 */
  AiContentReviewTask?: AiContentReviewTaskInput | null;
  /** 视频内容分析类型任务 */
  AiAnalysisTask?: AiAnalysisTaskInput | null;
  /** 视频内容识别类型任务 */
  AiRecognitionTask?: AiRecognitionTaskInput | null;
  /** 媒体质检任务 */
  QualityControlTask?: AiQualityControlTaskInput | null;
}

/** 编排子任务输出 */
declare interface ActivityResItem {
  /** 转码任务输出 */
  TranscodeTask?: MediaProcessTaskTranscodeResult | null;
  /** 转动图任务输出 */
  AnimatedGraphicTask?: MediaProcessTaskAnimatedGraphicResult | null;
  /** 时间点截图任务输出 */
  SnapshotByTimeOffsetTask?: MediaProcessTaskSnapshotByTimeOffsetResult | null;
  /** 采样截图任务输出 */
  SampleSnapshotTask?: MediaProcessTaskSampleSnapshotResult | null;
  /** 雪碧图任务输出 */
  ImageSpriteTask?: MediaProcessTaskImageSpriteResult | null;
  /** 自适应码流任务输出 */
  AdaptiveDynamicStreamingTask?: MediaProcessTaskAdaptiveDynamicStreamingResult | null;
  /** 识别任务输出 */
  RecognitionTask?: ScheduleRecognitionTaskResult | null;
  /** 审核任务输出 */
  ReviewTask?: ScheduleReviewTaskResult | null;
  /** 分析任务输出 */
  AnalysisTask?: ScheduleAnalysisTaskResult | null;
  /** 媒体质检任务输出 */
  QualityControlTask?: ScheduleQualityControlTaskResult | null;
}

/** 编排任务输出 */
declare interface ActivityResult {
  /** 原子任务类型。Transcode：转码。SampleSnapshot：采样截图。AnimatedGraphics：转动图。SnapshotByTimeOffset：时间点截图。ImageSprites：雪碧图。AdaptiveDynamicStreaming：自适应码流。AiContentReview：内容审核。AIRecognition：智能识别。AIAnalysis：智能分析。AiQualityControl：媒体质检。 */
  ActivityType?: string;
  /** 原子任务输出。 */
  ActivityResItem?: ActivityResItem;
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
  /** 转自适应码流后，manifest 文件的输出路径，可以为相对路径或者绝对路径。若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。相对路径示例：文件名_{变量名}.{format}文件名.{format}绝对路径示例：/自定义路径/文件名_{变量名}.{format}如果不填，则默认为相对路径：{inputName}_adaptiveDynamicStreaming_{definition}.{format}。 */
  OutputObjectPath?: string;
  /** 转自适应码流后，子流文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}.{format}`。 */
  SubStreamObjectName?: string;
  /** 转自适应码流（仅 HLS）后，分片文件的输出路径，只能为相对路径。如果不填，则默认为相对路径：`{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}_{segmentNumber}.{format}`。 */
  SegmentObjectName?: string;
  /** 要插入的字幕文件。 */
  AddOnSubtitles?: AddOnSubtitle[] | null;
  /** Drm信息。 */
  DrmInfo?: DrmInfo | null;
  /** 自适应转码模板类型：Common：音视频类型PureAudio：纯音频类型 */
  DefinitionType?: string | null;
}

/** 转自适应码流模板详情 */
declare interface AdaptiveDynamicStreamingTemplate {
  /** 转自适应码流模板唯一标识。 */
  Definition?: number;
  /** 模板类型，取值范围：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string;
  /** 转自适应码流模板名称。 */
  Name?: string;
  /** 转自适应码流模板描述信息。 */
  Comment?: string;
  /** 转自适应码流格式，取值范围：HLS，MPEG-DASH。 */
  Format?: string;
  /** 转自适应码流输入流参数信息，最多输入10路流。 */
  StreamInfos?: AdaptiveStreamTemplate[];
  /** 是否禁止视频低码率转高码率，取值范围：0：否，1：是。 */
  DisableHigherVideoBitrate?: number;
  /** 是否禁止视频分辨率转高分辨率，取值范围：0：否，1：是。 */
  DisableHigherVideoResolution?: number;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
  CreateTime?: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/266/11732)。 */
  UpdateTime?: string;
  /** 是否为纯音频，0表示视频，1表示纯音频 */
  PureAudio?: number | null;
  /** hls 分片类型，可选值：ts-segment：HLS+TS 切片ts-byterange：HLS+TS byte rangemp4-segment：HLS+MP4 切片mp4-byterange：HLS+MP4 byte rangets-packed-audio：TS+Packed Audiomp4-packed-audio：MP4+Packed Audio默认值：ts-segment注：自适应码流的hls分片格式已此字段为准 */
  SegmentType?: string | null;
}

/** 自适应转码流参数模板 */
declare interface AdaptiveStreamTemplate {
  /** 音频参数信息。 */
  Audio: AudioTemplateInfo;
  /** 视频参数信息。 */
  Video?: VideoTemplateInfo;
  /** 是否移除音频流，取值范围：0：否，1：是。 */
  RemoveAudio?: number;
  /** 是否移除视频流，取值范围：0：否，1：是。 */
  RemoveVideo?: number;
}

/** 外挂字幕。 */
declare interface AddOnSubtitle {
  /** 插入形式，可选值：subtitle-stream：插入字幕轨道close-caption-708：CEA-708字幕编码到SEI帧close-caption-608：CEA-608字幕编码到SEI帧 */
  Type?: string | null;
  /** 字幕文件。 */
  Subtitle?: MediaInputInfo | null;
}

/** 智能分析结果 */
declare interface AiAnalysisResult {
  /** 任务的类型，可以取的值有：Classification：智能分类Cover：智能封面Tag：智能标签FrameTag：智能按帧标签Highlight：智能精彩集锦DeLogo：智能擦除Description：大模型摘要 */
  Type?: string;
  /** 视频内容分析智能分类任务的查询结果，当任务类型为 Classification 时有效。 */
  ClassificationTask?: AiAnalysisTaskClassificationResult | null;
  /** 视频内容分析智能封面任务的查询结果，当任务类型为 Cover 时有效。 */
  CoverTask?: AiAnalysisTaskCoverResult | null;
  /** 视频内容分析智能标签任务的查询结果，当任务类型为 Tag 时有效。 */
  TagTask?: AiAnalysisTaskTagResult | null;
  /** 视频内容分析智能按帧标签任务的查询结果，当任务类型为 FrameTag 时有效。 */
  FrameTagTask?: AiAnalysisTaskFrameTagResult | null;
  /** 视频内容分析集锦任务的查询结果，当任务类型为 Highlight时有效。 */
  HighlightTask?: AiAnalysisTaskHighlightResult | null;
  /** 视频内容分析智能擦除任务的查询结果，当任务类型为 DeLogo 时有效。 */
  DeLogoTask?: AiAnalysisTaskDelLogoResult | null;
  /** 视频内容分析拆条任务的查询结果，当任务类型为 SegmentRecognition 时有效。 */
  SegmentTask?: AiAnalysisTaskSegmentResult | null;
  /** 视频内容分析片头片尾任务的查询结果，当任务类型为 HeadTailRecognition 时有效。 */
  HeadTailTask?: AiAnalysisTaskHeadTailResult | null;
  /** 视频内容分析摘要任务的查询结果，当任务类型为 Description 时有效。 */
  DescriptionTask?: AiAnalysisTaskDescriptionResult | null;
  /** 视频内容分析横转竖任务的查询结果，当任务类型为 HorizontalToVertical 时有效。 */
  HorizontalToVerticalTask?: AiAnalysisTaskHorizontalToVerticalResult | null;
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
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 智能分类任务输入。 */
  Input?: AiAnalysisTaskClassificationInput;
  /** 智能分类任务输出。 */
  Output?: AiAnalysisTaskClassificationOutput | null;
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
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 智能封面任务输入。 */
  Input?: AiAnalysisTaskCoverInput;
  /** 智能封面任务输出。 */
  Output?: AiAnalysisTaskCoverOutput | null;
}

/** 智能擦除任务输入类型 */
declare interface AiAnalysisTaskDelLogoInput {
  /** 视频智能擦除模板 ID。 */
  Definition?: number;
}

/** 智能擦除结果信息 */
declare interface AiAnalysisTaskDelLogoOutput {
  /** 擦除后文件的路径。 */
  Path?: string;
  /** 擦除后文件的存储位置。 */
  OutputStorage?: TaskOutputStorage;
  /** 基于画面提取的字幕文件路径。 */
  OriginSubtitlePath?: string | null;
  /** 基于画面提取的字幕翻译文件路径。 */
  TranslateSubtitlePath?: string | null;
}

/** 智能擦除结果类型 */
declare interface AiAnalysisTaskDelLogoResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，0：成功，其他值：失败。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 智能擦除任务输入。 */
  Input?: AiAnalysisTaskDelLogoInput;
  /** 智能擦除任务输出。 */
  Output?: AiAnalysisTaskDelLogoOutput | null;
}

/** 智能分类任务输入类型 */
declare interface AiAnalysisTaskDescriptionInput {
  /** 视频智能描述模板 ID。 */
  Definition: number;
}

/** 智能描述结果信息 */
declare interface AiAnalysisTaskDescriptionOutput {
  /** 视频智能描述列表。 */
  DescriptionSet: MediaAiAnalysisDescriptionItem[];
}

/** 智能描述结果类型 */
declare interface AiAnalysisTaskDescriptionResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，0：成功，其他值：失败。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 智能描述任务输入。 */
  Input?: AiAnalysisTaskDescriptionInput;
  /** 智能描述任务输出。 */
  Output?: AiAnalysisTaskDescriptionOutput | null;
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
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 智能按帧标签任务输入。 */
  Input?: AiAnalysisTaskFrameTagInput;
  /** 智能按帧标签任务输出。 */
  Output?: AiAnalysisTaskFrameTagOutput | null;
}

/** 片头片尾任务输入类型 */
declare interface AiAnalysisTaskHeadTailInput {
  /** 片头片尾识别模板 ID。 */
  Definition: number;
}

/** 片头片尾结果信息 */
declare interface AiAnalysisTaskHeadTailOutput {
  /** 片头pts。 */
  HeadTimeOffset: number | null;
  /** 片尾pts。 */
  TailTimeOffset?: number | null;
}

/** 片头片尾结果类型 */
declare interface AiAnalysisTaskHeadTailResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，0：成功，其他值：失败。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 片头片尾任务输入。 */
  Input?: AiAnalysisTaskHeadTailInput;
  /** 片头片尾任务输出。 */
  Output?: AiAnalysisTaskHeadTailOutput | null;
}

/** 智能精彩片段任务输入类型 */
declare interface AiAnalysisTaskHighlightInput {
  /** 视频智能精彩片段模板 ID。 */
  Definition: number;
}

/** 智能精彩片段结果信息 */
declare interface AiAnalysisTaskHighlightOutput {
  /** 视频智能精彩片段列表。 */
  HighlightSet?: MediaAiAnalysisHighlightItem[];
  /** 精彩片段的存储位置。 */
  OutputStorage?: TaskOutputStorage | null;
}

/** 智能精彩片段结果类型 */
declare interface AiAnalysisTaskHighlightResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，0：成功，其他值：失败。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 智能精彩片段任务输入。 */
  Input?: AiAnalysisTaskHighlightInput;
  /** 智能精彩片段任务输出。 */
  Output?: AiAnalysisTaskHighlightOutput | null;
}

/** 智能横转竖任务输入类型 */
declare interface AiAnalysisTaskHorizontalToVerticalInput {
  /** 视频智能横转竖模板 ID */
  Definition?: number | null;
}

/** 智能横转竖结果信息 */
declare interface AiAnalysisTaskHorizontalToVerticalOutput {
  /** 视频智能横转竖列表 */
  Path?: string | null;
  /** 智能横转竖视频的存储位置 */
  OutputStorage?: TaskOutputStorage | null;
  /** 置信度。 */
  Confidence?: number | null;
}

/** 智能横转竖结果类型 */
declare interface AiAnalysisTaskHorizontalToVerticalResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种 */
  Status?: string | null;
  /** 错误码，0：成功，其他值：失败 */
  ErrCode?: number | null;
  /** 错误信息 */
  Message?: string | null;
  /** 智能横转竖任务输入 */
  Input?: AiAnalysisTaskHorizontalToVerticalInput | null;
  /** 智能横转竖任务输出 */
  Output?: AiAnalysisTaskHorizontalToVerticalOutput | null;
}

/** AI 视频智能分析输入参数类型 */
declare interface AiAnalysisTaskInput {
  /** 视频内容分析模板 ID。 */
  Definition: number;
  /** 扩展参数，其值为序列化的 json字符串。注意：此参数为定制需求参数，需要线下对接。 */
  ExtendedParameter?: string | null;
}

/** 拆条任务输入类型 */
declare interface AiAnalysisTaskSegmentInput {
  /** 拆条任务模板 ID。 */
  Definition: number;
}

/** 智能拆条结果信息 */
declare interface AiAnalysisTaskSegmentOutput {
  /** 智能拆条子片段列表。 */
  SegmentSet?: SegmentRecognitionItem[];
  /** 视频摘要，离线场景用。 */
  Abstract?: string | null;
}

/** 拆条结果类型 */
declare interface AiAnalysisTaskSegmentResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，0：成功，其他值：失败。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 拆条任务输入。 */
  Input?: AiAnalysisTaskSegmentInput;
  /** 拆条任务输出。 */
  Output?: AiAnalysisTaskSegmentOutput | null;
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
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 智能标签任务输入。 */
  Input?: AiAnalysisTaskTagInput;
  /** 智能标签任务输出。 */
  Output?: AiAnalysisTaskTagOutput | null;
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

/** 分段信息。 */
declare interface AiParagraphInfo {
  /** 分段摘要 */
  Summary?: string | null;
  /** 分段起始时间点，秒 */
  StartTimeOffset?: number | null;
  /** 分段结束时间点，秒 */
  EndTimeOffset?: number | null;
}

/** 媒体质检输入参数类型 */
declare interface AiQualityControlTaskInput {
  /** 媒体质检模板 ID 。可以直接使用预设模板，也可以在控制台自定义模板。预设模板如下：- 10：开启所有质检项；- 20：仅开启格式诊断对应质检项；- 30：仅开启无参考打分对应质检项；- 40：仅开启画面质量对应质检项。 */
  Definition?: number | null;
  /** 渠道扩展参数json序列化字符串。 */
  ChannelExtPara?: string | null;
}

/** 智能识别结果。 */
declare interface AiRecognitionResult {
  /** 任务的类型，取值范围：FaceRecognition：人脸识别，AsrWordsRecognition：语音关键词识别，OcrWordsRecognition：文本关键词识别，AsrFullTextRecognition：语音全文识别，OcrFullTextRecognition：文本全文识别。TransTextRecognition：语音翻译。 */
  Type?: string;
  /** 人脸识别结果，当 Type 为 FaceRecognition 时有效。 */
  FaceTask?: AiRecognitionTaskFaceResult | null;
  /** 语音关键词识别结果，当 Type 为 AsrWordsRecognition 时有效。 */
  AsrWordsTask?: AiRecognitionTaskAsrWordsResult | null;
  /** 语音全文识别结果，当 Type 为 AsrFullTextRecognition 时有效。 */
  AsrFullTextTask?: AiRecognitionTaskAsrFullTextResult | null;
  /** 文本关键词识别结果，当 Type 为 OcrWordsRecognition 时有效。 */
  OcrWordsTask?: AiRecognitionTaskOcrWordsResult | null;
  /** 文本全文识别结果，当 Type 为 OcrFullTextRecognition 时有效。 */
  OcrFullTextTask?: AiRecognitionTaskOcrFullTextResult | null;
  /** 翻译结果，当 Type 为TransTextRecognition 时有效。 */
  TransTextTask?: AiRecognitionTaskTransTextResult | null;
  /** 物体识别结果，当Type 为ObjectRecognition 时有效。 */
  ObjectTask?: AiRecognitionTaskObjectResult | null;
}

/** 语音全文识别结果。 */
declare interface AiRecognitionTaskAsrFullTextResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 语音全文识别任务输入信息。 */
  Input?: AiRecognitionTaskAsrFullTextResultInput;
  /** 语音全文识别任务输出信息。 */
  Output?: AiRecognitionTaskAsrFullTextResultOutput | null;
  /** 任务进度。 */
  Progress?: number | null;
}

/** 语音全文识别的输入。 */
declare interface AiRecognitionTaskAsrFullTextResultInput {
  /** 语音全文识别模板 ID。 */
  Definition: number;
}

/** 语音全文识别结果。 */
declare interface AiRecognitionTaskAsrFullTextResultOutput {
  /** 语音全文识别片段列表。 */
  SegmentSet?: AiRecognitionTaskAsrFullTextSegmentItem[];
  /** 字幕文件地址。 */
  SubtitlePath?: string;
  /** 字幕文件存储位置。 */
  OutputStorage?: TaskOutputStorage;
}

/** 语音全文识别片段。 */
declare interface AiRecognitionTaskAsrFullTextSegmentItem {
  /** 识别片段置信度。取值：0~100。 */
  Confidence?: number;
  /** 识别片段起始的偏移时间，单位：秒。 */
  StartTimeOffset?: number;
  /** 识别片段终止的偏移时间，单位：秒。 */
  EndTimeOffset?: number;
  /** 识别文本。 */
  Text?: string;
  /** 字词时间戳信息。 */
  Wordlist?: WordResult[];
}

/** 语音关键词识别结果。 */
declare interface AiRecognitionTaskAsrWordsResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 语音关键词识别任务输入信息。 */
  Input?: AiRecognitionTaskAsrWordsResultInput;
  /** 语音关键词识别任务输出信息。 */
  Output?: AiRecognitionTaskAsrWordsResultOutput | null;
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
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 人脸识别任务输入信息。 */
  Input?: AiRecognitionTaskFaceResultInput;
  /** 人脸识别任务输出信息。 */
  Output?: AiRecognitionTaskFaceResultOutput | null;
}

/** 人脸识别输入。 */
declare interface AiRecognitionTaskFaceResultInput {
  /** 人脸识别模板 ID。 */
  Definition: number;
}

/** 人脸识别结果 */
declare interface AiRecognitionTaskFaceResultItem {
  /** 人物唯一标识 ID。 */
  Id?: string;
  /** 人物库类型，表示识别出的人物来自哪个人物库：Default：默认人物库；UserDefine：用户自定义人物库。 */
  Type?: string;
  /** 人物名称。 */
  Name?: string;
  /** 人物出现的片段结果集。 */
  SegmentSet?: AiRecognitionTaskFaceSegmentItem[];
  /** 人物性别：Male：男性；Female：女性。 */
  Gender?: string | null;
  /** 人物出生日期。 */
  Birthday?: string | null;
  /** 人物职业或者职务。 */
  Profession?: string | null;
  /** 人物毕业院校。 */
  SchoolOfGraduation?: string | null;
  /** 人物简介。 */
  Abstract?: string | null;
  /** 人物出生地或者籍贯。 */
  PlaceOfBirth?: string | null;
  /** 人物类型：Politician：官员；Artist：艺人。 */
  PersonType?: string | null;
  /** 敏感度标注：Normal：正常；Sensitive：敏感。 */
  Remark?: string | null;
  /** 截图链接 */
  Url?: string | null;
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
  /** 用户扩展字段，一般场景不用填。 */
  UserExtPara?: string;
}

/** 物体识别结果。 */
declare interface AiRecognitionTaskObjectResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，0：成功，其他值：失败。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 物体识别任务输入信息。 */
  Input?: AiRecognitionTaskObjectResultInput;
  /** 物体识别任务输出信息。 */
  Output?: AiRecognitionTaskObjectResultOutput | null;
}

/** 物体识别任务输入类型。 */
declare interface AiRecognitionTaskObjectResultInput {
  /** 物体识别模板 ID。 */
  Definition: number;
}

/** 单个物体识别结果。 */
declare interface AiRecognitionTaskObjectResultItem {
  /** 识别的物体名称。 */
  Name: string;
  /** 物体出现的片段列表。 */
  SegmentSet: AiRecognitionTaskObjectSeqmentItem[];
}

/** 智能物体识别输出。 */
declare interface AiRecognitionTaskObjectResultOutput {
  /** 智能物体识别结果集。 */
  ResultSet: AiRecognitionTaskObjectResultItem[];
}

/** 物体识别结果片段。 */
declare interface AiRecognitionTaskObjectSeqmentItem {
  /** 识别片段起始的偏移时间，单位：秒。 */
  StartTimeOffset: number;
  /** 识别片段终止的偏移时间，单位：秒。 */
  EndTimeOffset: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence: number;
  /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
  AreaCoordSet: number[];
}

/** 文本全文识别结果。 */
declare interface AiRecognitionTaskOcrFullTextResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 文本全文识别任务输入信息。 */
  Input?: AiRecognitionTaskOcrFullTextResultInput;
  /** 文本全文识别任务输出信息。 */
  Output?: AiRecognitionTaskOcrFullTextResultOutput | null;
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
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 文本关键词识别任务输入信息。 */
  Input?: AiRecognitionTaskOcrWordsResultInput;
  /** 文本关键词识别任务输出信息。 */
  Output?: AiRecognitionTaskOcrWordsResultOutput | null;
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

/** 翻译结果。 */
declare interface AiRecognitionTaskTransTextResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 翻译任务输入信息。 */
  Input?: AiRecognitionTaskTransTextResultInput;
  /** 翻译任务输出信息。 */
  Output?: AiRecognitionTaskTransTextResultOutput | null;
  /** 任务进度。 */
  Progress?: number | null;
}

/** 翻译的输入。 */
declare interface AiRecognitionTaskTransTextResultInput {
  /** 翻译模板 ID。 */
  Definition: number;
}

/** 翻译结果。 */
declare interface AiRecognitionTaskTransTextResultOutput {
  /** 翻译片段列表。 */
  SegmentSet?: AiRecognitionTaskTransTextSegmentItem[];
  /** 字幕文件地址。 */
  SubtitlePath?: string;
}

/** 翻译片段。 */
declare interface AiRecognitionTaskTransTextSegmentItem {
  /** 识别片段置信度。取值：0~100。 */
  Confidence?: number;
  /** 识别片段起始的偏移时间，单位：秒。 */
  StartTimeOffset?: number;
  /** 识别片段终止的偏移时间，单位：秒。 */
  EndTimeOffset?: number;
  /** 识别文本。 */
  Text?: string;
  /** 翻译文本。 */
  Trans?: string;
  /** 字词时间戳信息。 */
  Wordlist?: WordResult[];
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
  Definition: number | null;
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
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核 Asr 文字敏感任务输入。 */
  Input?: AiReviewPoliticalAsrTaskInput;
  /** 内容审核 Asr 文字敏感任务输出。 */
  Output?: AiReviewPoliticalAsrTaskOutput | null;
}

/** 内容审核 Ocr 文字敏感任务结果类型 */
declare interface AiReviewTaskPoliticalOcrResult {
  /** 任务状态，有 PROCESSING，SUCCESS，FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核 Ocr 文字敏感任务输入。 */
  Input?: AiReviewPoliticalOcrTaskInput;
  /** 内容审核 Ocr 文字敏感任务输出。 */
  Output?: AiReviewPoliticalOcrTaskOutput | null;
}

/** 内容审核涉敏任务结果类型 */
declare interface AiReviewTaskPoliticalResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核涉敏任务输入。 */
  Input?: AiReviewPoliticalTaskInput;
  /** 内容审核涉敏任务输出。 */
  Output?: AiReviewPoliticalTaskOutput | null;
}

/** 内容审核 Asr 文字鉴黄任务结果类型 */
declare interface AiReviewTaskPornAsrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核 Asr 文字鉴黄任务输入。 */
  Input?: AiReviewPornAsrTaskInput;
  /** 内容审核 Asr 文字鉴黄任务输出。 */
  Output?: AiReviewPornAsrTaskOutput | null;
}

/** 内容审核 Ocr 文字鉴黄任务结果类型 */
declare interface AiReviewTaskPornOcrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核 Ocr 文字鉴黄任务输入。 */
  Input?: AiReviewPornOcrTaskInput;
  /** 内容审核 Ocr 文字鉴黄任务输出。 */
  Output?: AiReviewPornOcrTaskOutput | null;
}

/** 内容审核鉴黄任务结果类型 */
declare interface AiReviewTaskPornResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核鉴黄任务输入。 */
  Input?: AiReviewPornTaskInput;
  /** 内容审核鉴黄任务输出。 */
  Output?: AiReviewPornTaskOutput | null;
}

/** 内容审核 Asr 文字鉴任违禁务结果类型 */
declare interface AiReviewTaskProhibitedAsrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核 Asr 文字鉴违禁任务输入。 */
  Input?: AiReviewProhibitedAsrTaskInput;
  /** 内容审核 Asr 文字鉴违禁任务输出。 */
  Output?: AiReviewProhibitedAsrTaskOutput | null;
}

/** 内容审核 Ocr 文字鉴任违禁务结果类型 */
declare interface AiReviewTaskProhibitedOcrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核 Ocr 文字鉴违禁任务输入。 */
  Input?: AiReviewProhibitedOcrTaskInput;
  /** 内容审核 Ocr 文字鉴违禁任务输出。 */
  Output?: AiReviewProhibitedOcrTaskOutput | null;
}

/** 内容审核 Ocr 文字敏感任务结果类型 */
declare interface AiReviewTaskTerrorismOcrResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核 Ocr 文字敏感任务输入。 */
  Input?: AiReviewTerrorismOcrTaskInput;
  /** 内容审核 Ocr 文字敏感任务输出。 */
  Output?: AiReviewTerrorismOcrTaskOutput | null;
}

/** 内容审核涉敏任务结果类型 */
declare interface AiReviewTaskTerrorismResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 内容审核涉敏任务输入。 */
  Input?: AiReviewTerrorismTaskInput;
  /** 内容审核涉敏任务输出。 */
  Output?: AiReviewTerrorismTaskOutput | null;
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
  /** 转动图后文件的输出路径，可以为相对路径或者绝对路径。若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。相对路径示例：文件名_{变量名}.{format}文件名.{format}绝对路径示例：/自定义路径/文件名_{变量名}.{format}如果不填，则默认为相对路径：`{inputName}_animatedGraphic_{definition}.{format}`。 */
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
  /** 视频源语言。 */
  SourceLanguage?: string;
}

/** 语音全文识别任务控制参数 */
declare interface AsrFullTextConfigureInfoForUpdate {
  /** 语音全文识别任务开关，可选值：ON：开启智能语音全文识别任务；OFF：关闭智能语音全文识别任务。 */
  Switch?: string;
  /** 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：vtt：生成 WebVTT 字幕文件。 */
  SubtitleFormat?: string;
  /** 视频源语言。 */
  SourceLanguage?: string | null;
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

/** 音量美化配置 */
declare interface AudioBeautifyConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可多选，可选值：declick：杂音去除deesser：齿音压制默认值：declick。 */
  Types?: string[] | null;
}

/** 音频降噪配置 */
declare interface AudioDenoiseConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
}

/** 音频增强配置 */
declare interface AudioEnhanceConfig {
  /** 音频降噪配置。 */
  Denoise?: AudioDenoiseConfig | null;
  /** 音频分离配置。 */
  Separate?: AudioSeparateConfig | null;
  /** 音量均衡配置。 */
  VolumeBalance?: VolumeBalanceConfig | null;
  /** 音频美化配置。 */
  Beautify?: AudioBeautifyConfig | null;
}

/** 音频分离配置 */
declare interface AudioSeparateConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 场景类型，可选值：normal：人声背景声场景music：演唱伴奏场景默认值：normal。 */
  Type?: string | null;
  /** 输出音轨，可选值：vocal：输出人声background：应用场景为normal时输出背景声，应用场景为music时输出伴奏默认值：vocal。 */
  Track?: string | null;
}

/** 音频流配置参数 */
declare interface AudioTemplateInfo {
  /** 音频流的编码格式。当不需要对音频进行转码时，可选值为：copy。当外层参数 Container 为 mp3 时，可选值为：mp3。当外层参数 Container 为 ogg 或 flac 时，可选值为：flac。当外层参数 Container 为 m4a 时，可选值为：aac；ac3。当外层参数 Container 为 mp4 或 flv 时，可选值为：aac：更适合 mp4；mp3：更适合 flv；mp2。当外层参数 Container 为 hls 时，可选值为：aac；mp3。 */
  Codec: string;
  /** 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。当取值为 0，表示音频码率和原始音频保持一致。 */
  Bitrate: number;
  /** 音频流的采样率，可选值：320004410048000单位：Hz。 */
  SampleRate: number;
  /** 音频通道方式，可选值：1：单通道2：双通道6：5.1声道当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为5.1声道。默认值：2。 */
  AudioChannel?: number;
}

/** 音频流配置参数 */
declare interface AudioTemplateInfoForUpdate {
  /** 音频流的编码格式。当不需要对音频进行转码时，可选值为：copy。当外层参数 Container 为 mp3 时，可选值为：mp3。当外层参数 Container 为 ogg 或 flac 时，可选值为：flac。当外层参数 Container 为 m4a 时，可选值为：aac；ac3。当外层参数 Container 为 mp4 或 flv 时，可选值为：aac：更适合 mp4；mp3：更适合 flv；mp2。当外层参数 Container 为 hls 时，可选值为：aac；mp3。 */
  Codec?: string | null;
  /** 音频流的码率，取值范围：0 和 [26, 256]，单位：kbps。 当取值为 0，表示音频码率和原始音频保持一致。 */
  Bitrate?: number | null;
  /** 音频流的采样率，可选值：320004410048000单位：Hz。 */
  SampleRate?: number | null;
  /** 音频通道方式，可选值：1：单通道2：双通道6：5.1声道当媒体的封装格式是音频格式时（flac，ogg，mp3，m4a）时，声道数不允许设为5.1声道。 */
  AudioChannel?: number | null;
  /** 指定输出要保留的音频轨道。默认是全部保留源的。 */
  StreamSelects?: number[] | null;
}

/** AWS S3 文件是上传触发器。 */
declare interface AwsS3FileUploadTrigger {
  /** 绑定的 AWS S3 存储桶。 */
  S3Bucket: string;
  /** 绑定的桶所在 AWS 区域，目前支持： us-east-1 eu-west-3 */
  S3Region: string;
  /** 绑定的输入路径目录，必须为绝对路径，即以 `/` 开头和结尾。如`/movie/201907/`，不填代表根目录`/`。 */
  Dir?: string;
  /** 允许触发的文件格式列表，如 ["mp4", "flv", "mov"]。不填代表所有格式的文件都可以触发工作流。 */
  Formats?: string[];
  /** 绑定的 AWS S3 存储桶的秘钥ID。 */
  S3SecretId?: string | null;
  /** 绑定的 AWS S3 存储桶的秘钥Key。 */
  S3SecretKey?: string | null;
  /** 绑定的 AWS S3 存储桶对应的 SQS事件队列。注意：队列和桶需要在同一区域。 */
  AwsSQS?: AwsSQS | null;
}

/** Aws SQS 队列信息 */
declare interface AwsSQS {
  /** SQS 队列区域。 */
  SQSRegion: string | null;
  /** SQS 队列名称。 */
  SQSQueueName: string | null;
  /** 读写SQS的秘钥id。 */
  S3SecretId?: string | null;
  /** 读写SQS的秘钥key。 */
  S3SecretKey?: string | null;
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

/** 视频编辑/合成任务 音频元素信息。 */
declare interface ComposeAudioItem {
  /** 元素对应媒体信息。 */
  SourceMedia: ComposeSourceMedia;
  /** 元素在轨道时间轴上的时间信息，不填则紧跟上一个元素。 */
  TrackTime?: ComposeTrackTime;
  /** 对音频进行操作，如静音等。 */
  AudioOperations?: ComposeAudioOperation[];
}

/** 视频编辑/合成任务 音频操作。 */
declare interface ComposeAudioOperation {
  /** 音频操作类型，取值有：Volume：音量调节。 */
  Type: string;
  /** 当 Type = Volume 时有效。音量调节参数，取值范围: 0~5。 0 表示静音。小于1 表示降低音量。1 表示不变。大于1表示升高音量。 */
  Volume?: number;
}

/** 视频编辑/合成任务 音频流信息。 */
declare interface ComposeAudioStream {
  /** 音频流的编码方式，可选值：AAC：AAC 编码（默认），用于容器为 mp4。MP3：mp3 编码，用于容器为 mp3。 */
  Codec?: string;
  /** 音频流的采样率，单位：Hz，可选值：16000（默认）320004410048000 */
  SampleRate?: number;
  /** 声道数，可选值：1：单声道 。2：双声道（默认）。 */
  AudioChannel?: number;
  /** 参考码率，单位 kbps，范围：26~10000。如果设置，编码时会尽量按该码率进行编码。如果不设置，服务将根据音频参数自动采用合适的码率。 */
  Bitrate?: number;
}

/** 视频编辑/合成任务画布信息。 */
declare interface ComposeCanvas {
  /** 背景颜色对应的 RGB 参考值，取值格式： #RRGGBB，如 #F0F0F0 。 默认值：#000000（黑色）。 */
  Color?: string;
  /** 画布宽度，即输出视频的宽度，取值范围：0~ 3840，单位：px。 默认值：0，表示和第一个视频宽度一致。 */
  Width?: number;
  /** 画布高度，即输出视频的高度，取值范围：0~ 3840，单位：px。 默认值：0，表示和第一个视频高度一致。 */
  Height?: number;
}

/** 视频编辑/合成任务 空白占位元素信息。 */
declare interface ComposeEmptyItem {
  /** 元素时长，时间支持：以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒。 */
  Duration: string;
}

/** 视频编辑/合成任务 图片元素信息。 */
declare interface ComposeImageItem {
  /** 元素对应媒体信息。 */
  SourceMedia: ComposeSourceMedia;
  /** 元素在轨道时间轴上的时间信息，不填则紧跟上一个元素。 */
  TrackTime?: ComposeTrackTime;
  /** 元素中心点距离画布原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示元素 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布宽度的 10%。当字符串以 px 结尾，表示元素 XPos 单位为像素，如 100px 表示 XPos 为100像素。默认：50%。 */
  XPos?: string;
  /** 元素中心点距离画布原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示元素 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。当字符串以 px 结尾，表示元素 YPos 单位为像素，如 100px 表示 YPos 为100像素。默认：50%。 */
  YPos?: string;
  /** 视频片段的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示元素 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。当字符串以 px 结尾，表示元素 Width 单位为像素，如 100px 表示 Width 为100像素。为空（或0） 的场景：当 Width、Height 均为空，则 Width 和 Height 取源素材本身的 Width、Height。当 Width 为空，Height 非空，则 Width 按源素材比例缩放。当 Width 非空，Height 为空，则 Height 按源素材比例缩放。 */
  Width?: string;
  /** 元素的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示元素 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%。当字符串以 px 结尾，表示元素 Height 单位为像素，如 100px 表示 Height 为100像素。为空（或0） 的场景：当 Width、Height 均为空，则 Width 和 Height 取源素材本身的 Width、Height。当 Width 为空，Height 非空，则 Width 按源素材比例缩放。当 Width 非空，Height 为空，则 Height 按源素材比例缩放。 */
  Height?: string;
  /** 对图像画面进行的操作，如图像旋转等。 */
  ImageOperations?: ComposeImageOperation[];
}

/** 视频编辑/合成任务 视频图像转换操作。 */
declare interface ComposeImageOperation {
  /** 类型，取值有：Rotate：图像旋转。Flip：图像翻转。 */
  Type: string;
  /** 当 Type = Rotate 时有效。图像以中心点为原点进行旋转的角度，取值范围0~360。 */
  RotateAngle?: number;
  /** 当 Type = Flip 时有效。图像翻转动作，取值有： Horizental：水平翻转，即左右镜像。Vertical：垂直翻转，即上下镜像。 */
  FlipType?: string;
}

/** 视频编辑/合成任务 信息。关于 轨道、元素、时间轴 关系示意图：![image](https://ie-mps-1258344699.cos.ap-nanjing.tencentcos.cn/common/cloud/EditMedia-Compose-Track-Item.png) */
declare interface ComposeMediaConfig {
  /** 合成目标视频信息。 */
  TargetInfo?: ComposeTargetInfo;
  /** 合成目标视频的画布信息。 */
  Canvas?: ComposeCanvas;
  /** 全局样式，和轨道 Tracks 配合使用，用于定于样式，如字幕样式。 */
  Styles?: ComposeStyles[];
  /** 用于描述合成视频的轨道列表，包括：视频、音频、图片、文字等元素组成的多个轨道信息。关于轨道和时间：轨道时间轴即为目标视频时间轴。时间轴上相同时间点的不同轨道上的元素会重叠：视频、图片、文字：按轨道顺序进行图像的叠加，轨道顺序靠前的在上面。音频 ：进行混音。注意：同一轨道中各个元素（除字幕元素外）的轨道时间不能重叠。 */
  Tracks?: ComposeMediaTrack[];
}

/** 视频编辑/合成任务 轨道元素信息。 */
declare interface ComposeMediaItem {
  /** 元素类型。取值有：Video：视频元素。Audio：音频元素。Image：图片元素。Transition：转场元素。Subtitle：字幕元素。Empty：空白元素。 */
  Type: string;
  /** 视频元素，当 Type = Video 时有效。 */
  Video?: ComposeVideoItem;
  /** 音频元素，当 Type = Audio 时有效。 */
  Audio?: ComposeAudioItem;
  /** 图片元素，当 Type = Image 时有效。 */
  Image?: ComposeImageItem;
  /** 转场元素，当 Type = Transition 时有效。 */
  Transition?: ComposeTransitionItem;
  /** 字幕元素，当 Type = Subtitle 是有效。 */
  Subtitle?: ComposeSubtitleItem;
  /** 空白元素，当 Type = Empty 时有效。用于时间轴的占位。 */
  Empty?: ComposeEmptyItem;
}

/** 视频编辑/合成任务 轨道信息。 */
declare interface ComposeMediaTrack {
  /** 轨道类型，取值有：Video ：视频轨道。视频轨道可由以下元素组成：Video 元素Image 元素Transition 元素Empty 元素Audio ：音频轨道。音频轨道可由以下元素组成：Audio 元素Transition 元素Empty 元素Title：文字轨道。文字轨道可由以下元素组成：Subtitle 元素 */
  Type: string;
  /** 轨道上的元素列表。 */
  Items: ComposeMediaItem[];
}

/** 视频编辑/合成任务 媒体素材源信息。 */
declare interface ComposeSourceMedia {
  /** 媒体对应的素材ID，即 FileInfos 列表中对应素材的 ID。 */
  FileId: string;
  /** 媒体位于素材的起始时间，时间点支持 s、% 两种格式：当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；当字符串以 % 结尾，表示时间点为素材时长的百分比大小，如10%表示时间点为素材第10% 的时刻。默认：0s */
  StartTime?: string;
  /** 媒体位于素材的结束时间，和 StartTime 构成媒体在源素材的时间区间，时间点支持 s、% 两种格式：当字符串以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；当字符串以 % 结尾，表示时间点为素材时长的百分比大小，如10%表示时间点为素材第10%的时间。默认：如果对应轨道时长有设置，则默认轨道时长，否则为素材时长，无时长的素材默认为 1 秒。注意：至少需要大于 StartTime 0.02 秒。 */
  EndTime?: string;
}

/** 视频编辑/合成任务 样式信息。 */
declare interface ComposeStyles {
  /** 样式 Id，用于和轨道元素中的样式关联。注意：允许字母、数字、-、_ 组合，最长 32 字符。 */
  Id: string;
  /** 样式类型，取值有：Subtitle：字幕样式。 */
  Type: string;
  /** 字幕样式信息，当 Type = Subtitle 时有效。 */
  Subtitle?: ComposeSubtitleStyle;
}

/** 视频编辑/合成任务 字幕元素信息。 */
declare interface ComposeSubtitleItem {
  /** 字幕样式，Styles 列表中对应的 Subtitle样式的 ID。 */
  StyleId: string;
  /** 字幕文本。 */
  Text: string;
  /** 元素在轨道时间轴上的时间信息，不填则紧跟上一个元素。 */
  TrackTime?: ComposeTrackTime;
}

/** 视频编辑/合成任务 字幕样式。 */
declare interface ComposeSubtitleStyle {
  /** 字幕高度。支持 %、px 两种格式：当字符串以 % 结尾，表示为画布高度的百分比大小，如 10% 表示为画布高度的 10%。当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。默认为 FontSize 大小。 */
  Height?: string;
  /** 字幕距离下边框距离，支持 %、px 两种格式：当字符串以 % 结尾，表示为画布高度的百分比大小，如 10% 表示为画布高度的 10%。当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。默认：0px */
  MarginBottom?: string;
  /** 字体类型，支持：SimHei：黑体（默认）。SimSun：宋体。 */
  FontType?: string;
  /** 字体大小，支持 %、px 两种格式：当字符串以 % 结尾，表示为画布高度的百分比大小，如 10% 表示为画布高度的 10%。当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。默认：2% */
  FontSize?: string;
  /** 是否使用粗体，和字体相关，可选值：0：否（默认）。1：是。 */
  FontBold?: number;
  /** 是否使用斜体，和字体相关，可选值：0：否（默认）。1：是。 */
  FontItalic?: number;
  /** 字体颜色，格式：#RRGGBBAA。 默认值：0x000000FF（黑色）。 注意：其中 AA 部分指的是透明度，为可选。 */
  FontColor?: string;
  /** 文字对齐方式：Center：居中（默认）。Left：左对齐。Right：右对齐。 */
  FontAlign?: string;
  /** 用于字幕对齐留白：FontAlign=Left 时，表示距离左边距离。FontAlign=Right时，表示距离右边距离。支持 %、px 两种格式：当字符串以 % 结尾，表示为画布宽度的百分比大小，如 10% 表示为画布宽度的 10%。当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。 */
  FontAlignMargin?: string;
  /** 字体边框宽度，支持 %、px 两种格式：当字符串以 % 结尾，表示为画布高度的百分比大小，如 10% 表示为画布高度的 10%。当字符串以 px 结尾，表示单位为像素，如 100px 表示为100像素。默认： 0，表示不需要边框。 */
  BorderWidth?: string;
  /** 边框颜色，当 BorderWidth 不为 0 时生效，其值格式和 FontColor 一致。 */
  BorderColor?: string;
  /** 文字底色，其值格式和 FontColor 一致。 默认为空， 表示不使用底色。 */
  BottomColor?: string;
}

/** 视频编辑/合成任务 目标视频信息。 */
declare interface ComposeTargetInfo {
  /** 封装容器格式，可选值：mp4：视频文件（默认）。mp3：纯音频文件。 */
  Container?: string;
  /** 是否去除视频数据，可选值：0：保留（默认）。1：去除。 */
  RemoveVideo?: number;
  /** 是否去除音频数据，可选值：0：保留（默认）。1：去除。 */
  RemoveAudio?: number;
  /** 输出视频流信息。 */
  VideoStream?: ComposeVideoStream;
  /** 输出音频流信息。 */
  AudioStream?: ComposeAudioStream;
}

/** 视频编辑/合成任务 对应元素在目标视频轨道上的时间信息。 */
declare interface ComposeTrackTime {
  /** 元素在轨道上的起始时间，时间点支持：以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；注意：不填则默认为前一个元素的结束时间，此时可以通过 ComposeEmptyItem 元素来进行占位，实现轨道起始时间设置。 */
  Start?: string;
  /** 元素时长，时间支持：以 s 结尾，表示时间点单位为秒，如 3.5s 表示时间点为第3.5秒；默认：取对应 ComposeSourceMedia 媒体的有效时长（即 EndTime-StartTime），没有 ComposeSourceMedia 则默认为 1 秒。 */
  Duration?: string;
}

/** 视频编辑/合成任务 转场元素信息。 */
declare interface ComposeTransitionItem {
  /** 元素时长，时间支持：以 s 结尾，表示时间点单位为秒，如 3s 表示时间点为第3秒。默认：1s注意：必须是整数s，否则向下取整。转场 前后必须紧挨着两个不为 Empty 的元素。转场 Duration 必须小于前一个元素的 Duration，同时必须小于后一个元素的 Duration。进行转场处理的两个元素，第二个元素在轨道上的起始时间会自动调整为前一个元素的结束时间减去转场的 Duration。 */
  Duration?: string;
  /** 转场操作列表。默认：淡入淡出。注意：图像转场操作和音频转场操作各自最多支持一个。 */
  Transitions?: ComposeTransitionOperation[];
}

/** 视频编辑/合成任务 元素转场信息。 */
declare interface ComposeTransitionOperation {
  /** 转场类型。图像的转场操作，用于两个视频片段图像间的转场处理：ImageFadeInFadeOut：图像淡入淡出。BowTieHorizontal：水平蝴蝶结。BowTieVertical：垂直蝴蝶结。ButterflyWaveScrawler：晃动。Cannabisleaf：枫叶。Circle：弧形收放。CircleCrop：圆环聚拢。Circleopen：椭圆聚拢。Crosswarp：横向翘曲。Cube：立方体。DoomScreenTransition：幕布。Doorway：门廊。Dreamy：波浪。DreamyZoom：水平聚拢。FilmBurn：火烧云。GlitchMemories：抖动。Heart：心形。InvertedPageCurl：翻页。Luma：腐蚀。Mosaic：九宫格。Pinwheel：风车。PolarFunction：椭圆扩散。PolkaDotsCurtain：弧形扩散。Radial：雷达扫描。RotateScaleFade：上下收放。Squeeze：上下聚拢。Swap：放大切换。Swirl：螺旋。UndulatingBurnOutSwirl：水流蔓延。Windowblinds：百叶窗。WipeDown：向下收起。WipeLeft：向左收起。WipeRight：向右收起。WipeUp：向上收起。ZoomInCircles：水波纹。 音频的转场操作，用于两个音频片段间的转场处理：AudioFadeInFadeOut：声音淡入淡出。 */
  Type: string;
}

/** 视频编辑/合成任务 视频元素信息。 */
declare interface ComposeVideoItem {
  /** 元素对应媒体信息。 */
  SourceMedia: ComposeSourceMedia;
  /** 元素在轨道时间轴上的时间信息，不填则紧跟上一个元素。 */
  TrackTime?: ComposeTrackTime;
  /** 元素中心点距离画布原点的水平位置。支持 %、px 两种格式：当字符串以 % 结尾，表示元素 XPos 为画布宽度指定百分比的位置，如 10% 表示 XPos 为画布宽度的 10%。当字符串以 px 结尾，表示元素 XPos 单位为像素，如 100px 表示 XPos 为100像素。默认：50%。 */
  XPos?: string;
  /** 元素中心点距离画布原点的垂直位置。支持 %、px 两种格式：当字符串以 % 结尾，表示元素 YPos 为画布高度指定百分比的位置，如 10% 表示 YPos 为画布高度的 10%。当字符串以 px 结尾，表示元素 YPos 单位为像素，如 100px 表示 YPos 为100像素。默认：50%。 */
  YPos?: string;
  /** 视频片段的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示元素 Width 为画布宽度的百分比大小，如 10% 表示 Width 为画布宽度的 10%。当字符串以 px 结尾，表示元素 Width 单位为像素，如 100px 表示 Width 为100像素。为空（或0） 的场景：当 Width、Height 均为空，则 Width 和 Height 取源素材本身的 Width、Height。当 Width 为空，Height 非空，则 Width 按源素材比例缩放。当 Width 非空，Height 为空，则 Height 按源素材比例缩放。 */
  Width?: string;
  /** 元素的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示元素 Height 为画布高度的百分比大小，如 10% 表示 Height 为画布高度的 10%。当字符串以 px 结尾，表示元素 Height 单位为像素，如 100px 表示 Height 为100像素。为空（或0） 的场景：当 Width、Height 均为空，则 Width 和 Height 取源素材本身的 Width、Height。当 Width 为空，Height 非空，则 Width 按源素材比例缩放。当 Width 非空，Height 为空，则 Height 按源素材比例缩放。 */
  Height?: string;
  /** 对图像画面进行的操作，如图像旋转等。 */
  ImageOperations?: ComposeImageOperation[];
  /** 对音频进行操作，如静音等。 */
  AudioOperations?: ComposeAudioOperation[];
}

/** 视频编辑/合成任务 视频流信息。 */
declare interface ComposeVideoStream {
  /** 视频流的编码方式，可选值：H.264：H.264 编码（默认）。 */
  Codec?: string;
  /** 视频帧率，取值范围：[0, 60]，单位：Hz。 默认值：0，表示和第一个视频帧率一致。 */
  Fps?: number;
  /** 参考码率，单位 kbps，范围：50~35000。如果设置，编码时会尽量按该码率进行编码。如果不设置，服务将通过画面复杂度自动采用合适的码率。 */
  Bitrate?: number;
}

/** 容器格式诊断结果 */
declare interface ContainerDiagnoseResultItem {
  /** 诊断出的异常类别，取值范围：DecodeParamException：解码参数异常TimeStampException：时间戳异常FrameException： 帧率异常StreamStatusException：流状态异常StreamInfo：流信息异常StreamAbnormalCharacteristics：流特征异常DecodeException：解码异常HLSRequirements：HLS 格式异常 */
  Category?: string | null;
  /** 诊断出的具体异常类型，取值如下：VideoResolutionChanged：视频分辨率变化AudioSampleRateChanged：音频采样率变化AudioChannelsChanged：音频通道数变化ParameterSetsChanged：流参数集信息发生变化DarOrSarInvalid：视频的宽高比异常TimestampFallback：DTS时间戳回退DtsJitter：DTS抖动过大PtsJitter：PTS抖动过大AACDurationDeviation：AAC帧时间戳间隔不合理AudioDroppingFrames：音频丢帧VideoDroppingFrames：视频丢帧AVTimestampInterleave：音视频交织不合理PtsLessThanDts：媒体流的 pts 小于 dtsReceiveFpsJitter：网络接收帧率抖动过大ReceiveFpsTooSmall：网络接收视频帧率过小FpsJitter：通过PTS计算得到的流帧率抖动过大StreamOpenFailed：流打开失败StreamEnd：流结束StreamParseFailed：流解析失败VideoFirstFrameNotIdr：首帧不是IDR帧StreamNALUError：NALU起始码错误TsStreamNoAud：mpegts的H26x流缺失 AUD NALUAudioStreamLack：无音频流VideoStreamLack：无视频流LackAudioRecover：缺失音频流恢复LackVideoRecover：缺失视频流恢复VideoBitrateOutofRange：视频流码率(kbps)超出范围AudioBitrateOutofRange：音频流码率(kbps)超出范围VideoDecodeFailed：视频解码错误AudioDecodeFailed：音频解码错误AudioOutOfPhase：双通道音频相位相反VideoDuplicatedFrame：视频流中存在重复帧AudioDuplicatedFrame：音频流中存在重复帧VideoRotation：视频画面旋转TsMultiPrograms：MPEG2-TS流有多个programMp4InvalidCodecFourcc：MP4中codec fourcc不符合Apple HLS要求HLSBadM3u8Format：无效的m3u8文件HLSInvalidMasterM3u8：无效的main m3u8文件HLSInvalidMediaM3u8：无效的media m3u8文件HLSMasterM3u8Recommended：main m3u8缺少标准推荐的参数HLSMediaM3u8Recommended：media m3u8缺少标准推荐的参数HLSMediaM3u8DiscontinuityExist：media m3u8存在EXT-X-DISCONTINUITYHLSMediaSegmentsStreamNumChange：切片的流数目发生变化HLSMediaSegmentsPTSJitterDeviation：切片间PTS跳变且没有EXT-X-DISCONTINUITYHLSMediaSegmentsDTSJitterDeviation：切片间DTS跳变且没有EXT-X-DISCONTINUITYTimecodeTrackExist：MP4存在tmcd轨道 */
  Type?: string | null;
  /** 诊断出的异常级别，取值范围：Fatal：影响后续播放和解析，Error： 可能会影响播放，Warning： 可能会有潜在风险，但不一定会影响播放，Notice：比较重要的流信息，Info：一般性的流信息。 */
  SeverityLevel?: string | null;
  /** 警告出现的时间点，形式如 “2022-12-25T13:14:16Z” */
  DateTimeSet?: string[] | null;
  /** 时间戳 */
  TimestampSet?: number[] | null;
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

/** 创建输入的配置信息。 */
declare interface CreateInput {
  /** 输入名称，可填大小写、数字和下划线，长度为[1, 32]。 */
  InputName: string;
  /** 输入的协议，可选[SRT|RTP|RTMP|RTMP_PULL|RTSP_PULL|RIST]。 */
  Protocol: string;
  /** 输入描述，长度为[0, 255]。 */
  Description?: string;
  /** 输入的IP白名单，格式为CIDR。 */
  AllowIpList?: string[];
  /** 输入的SRT配置信息。 */
  SRTSettings?: CreateInputSRTSettings;
  /** 输入的RTP配置信息。 */
  RTPSettings?: CreateInputRTPSettings;
  /** 输入的主备开关，可选[OPEN|CLOSE]，默认为CLOSE。 */
  FailOver?: string;
  /** 输入的RTMP_PULL配置信息。 */
  RTMPPullSettings?: CreateInputRTMPPullSettings;
  /** 输入的RTSP_PULL配置信息。 */
  RTSPPullSettings?: CreateInputRTSPPullSettings;
  /** 输入的HLS_PULL配置信息。 */
  HLSPullSettings?: CreateInputHLSPullSettings;
  /** 延播平滑吐流配置信息。 */
  ResilientStream?: ResilientStreamConf;
  /** 绑定的输入安全组 ID。 */
  SecurityGroupIds?: string[];
  /** 可用区，非必填，如果开启容灾必须输入两个不同的可用区，否则最多只允许输入一个可用区。 */
  Zones?: string[];
  /** 输入的RIST配置信息。 */
  RISTSettings?: CreateInputRISTSettings;
  /** 输入节点的地区 */
  InputRegion?: string;
}

/** 创建的输入HLS拉流的配置信息。 */
declare interface CreateInputHLSPullSettings {
  /** HLS源站的源站地址，有且只能有一个。 */
  SourceAddresses: HLSPullSourceAddress[];
}

/** 创建的输入RIST的配置信息。 */
declare interface CreateInputRISTSettings {
  /** RIST模式，可选[LISTENER]，默认为LISTENER。 */
  Mode?: string;
  /** RIST配置方案，可选[MAIN|SIMPLE]，默认为MAIN。 */
  Profile?: string;
  /** RIST缓冲区大小，单位为毫秒。最小值为50毫秒，最大值为5000毫秒。默认值：120 */
  Buffer?: number;
}

/** 创建的输入RTMP拉流的配置信息。 */
declare interface CreateInputRTMPPullSettings {
  /** RTMP源站的源站地址，有且只能有一个。 */
  SourceAddresses: RTMPPullSourceAddress[];
}

/** 创建输入的RTP配置信息。 */
declare interface CreateInputRTPSettings {
  /** 默认为“none”，可选值['none']。 */
  FEC?: string;
  /** 空闲超时时间，默认5000，单位ms，范围为[1000, 10000]。 */
  IdleTimeout?: number;
}

/** 创建的输入RTSP拉流的配置信息。 */
declare interface CreateInputRTSPPullSettings {
  /** RTSP源站的源站地址，有且只能有一个。 */
  SourceAddresses: RTSPPullSourceAddress[];
}

/** 创建的输入SRT的配置信息。 */
declare interface CreateInputSRTSettings {
  /** SRT模式，可选[LISTENER|CALLER]，默认为LISTENER。 */
  Mode?: string;
  /** 流Id，可选大小写字母、数字和特殊字符（.#!:&,=_-），长度为0~512。具体格式可以参考：https://github.com/Haivision/srt/blob/master/docs/features/access-control.md#standard-keys。 */
  StreamId?: string;
  /** 延迟，默认0，单位ms，范围为[0, 3000]。 */
  Latency?: number;
  /** 接收延迟，默认120，单位ms，范围为[0, 3000]。 */
  RecvLatency?: number;
  /** 对端延迟，默认0，单位ms，范围为[0, 3000]。 */
  PeerLatency?: number;
  /** 对端超时时间，默认5000，单位ms，范围为[1000, 10000]。 */
  PeerIdleTimeout?: number;
  /** 解密密钥，默认为空，表示不加密。只可填ascii码值，长度为[10, 79]。 */
  Passphrase?: string;
  /** 密钥长度，默认为0，可选[0|16|24|32]。 */
  PbKeyLen?: number;
  /** SRT对端地址，当Mode为CALLER时必填，且只能填1组。 */
  SourceAddresses?: SRTSourceAddressReq[];
}

/** 创建输出的配置信息。 */
declare interface CreateOutputInfo {
  /** 输出的名称。 */
  OutputName: string;
  /** 输出描述。 */
  Description: string;
  /** 输出的转推协议，支持SRT|RTP|RTMP|RTMP_PULL|RTSP|RIST。 */
  Protocol: string;
  /** 输出地区。 */
  OutputRegion: string;
  /** 输出的SRT的配置。 */
  SRTSettings?: CreateOutputSRTSettings;
  /** 输出的RTMP的配置。 */
  RTMPSettings?: CreateOutputRTMPSettings;
  /** 输出的RTP的配置。 */
  RTPSettings?: CreateOutputInfoRTPSettings;
  /** IP白名单列表，格式为CIDR，如0.0.0.0/0。当Protocol为RTMP_PULL有效，为空代表不限制客户端IP。 */
  AllowIpList?: string[];
  /** 最大拉流并发数，最大4，默认4。 */
  MaxConcurrent?: number;
  /** 绑定的输入安全组 ID。 */
  SecurityGroupIds?: string[];
  /** 可用区，output最多只支持输入一个可用区。 */
  Zones?: string[];
  /** 输出类型：Internet/TencentCSS/StreamLive */
  OutputType?: string;
  /** 输出的RIST的配置。 */
  RISTSettings?: CreateOutputRistSettings;
}

/** 创建媒体传输流的输出的RTP配置。 */
declare interface CreateOutputInfoRTPSettings {
  /** 转推的目标地址，可填1~2个。 */
  Destinations: CreateOutputRTPSettingsDestinations[];
  /** 只能填none。 */
  FEC: string;
  /** 空闲超时时间，单位ms。 */
  IdleTimeout: number;
}

/** 创建媒体传输流的输出的RTMP配置。 */
declare interface CreateOutputRTMPSettings {
  /** 转推的目标地址，可填1~2个。 */
  Destinations: CreateOutputRtmpSettingsDestinations[];
  /** RTMP的Chunk大小，范围为[4096, 40960]。 */
  ChunkSize?: number;
}

/** 创建媒体传输流的输出的RTP的目标地址。 */
declare interface CreateOutputRTPSettingsDestinations {
  /** 转推的目标IP。 */
  Ip: string;
  /** 转推的目标端口。 */
  Port: number;
}

/** 创建媒体传输流的输出的RIST配置。 */
declare interface CreateOutputRistSettings {
  /** RIST模式，可选[LISTENER|CALLER]，默认为LISTENER。 */
  Mode?: string;
  /** RIST配置方案，可选[MAIN|SIMPLE]，默认为MAIN。 */
  Profile?: string;
  /** RIST缓冲区大小，单位为毫秒。最小值为50毫秒，最大值为5000毫秒。默认值：120 */
  Buffer?: number;
}

/** 创建媒体传输流的输出的RTMP的目标地址。 */
declare interface CreateOutputRtmpSettingsDestinations {
  /** 转推的URL，格式如：rtmp://domain/live。 */
  Url: string;
  /** 转推的StreamKey，格式如：stream?key=value。 */
  StreamKey: string;
}

/** 创建媒体传输流的输出的SRT配置。 */
declare interface CreateOutputSRTSettings {
  /** 转推的目标地址，当Mode为CALLER时必填，且只能填1组。 */
  Destinations: CreateOutputSRTSettingsDestinations[];
  /** 转推SRT的流Id，可选大小写字母、数字和特殊字符（.#!:&,=_-），长度为0~512。 */
  StreamId?: string;
  /** 转推SRT的总延迟，默认0，单位ms，范围为[0, 3000]。 */
  Latency?: number;
  /** 转推SRT的接收延迟，默认120，单位ms，范围为[0, 3000]。 */
  RecvLatency?: number;
  /** 转推SRT的对端延迟，默认0，单位ms，范围为[0, 3000]。 */
  PeerLatency?: number;
  /** 转推SRT的对端空闲超时时间，默认5000，单位ms，范围为[1000, 10000]。 */
  PeerIdleTimeout?: number;
  /** 转推SRT的加密密钥，默认为空，表示不加密。只可填ascii码值，长度为[10, 79]。 */
  Passphrase?: string;
  /** 转推SRT的密钥长度，默认为0，可选[0|16|24|32]。 */
  PbKeyLen?: number;
  /** SRT模式，可选[LISTENER|CALLER]，默认为CALLER。 */
  Mode?: string;
}

/** 创建媒体传输流的输出SRT的目标地址。 */
declare interface CreateOutputSRTSettingsDestinations {
  /** 输出的IP。 */
  Ip: string;
  /** 输出的端口。 */
  Port: number;
}

/** 查询Event的配置信息。 */
declare interface DescribeEvent {
  /** Event的名称。 */
  EventName: string;
  /** Event的Id，唯一标识一个event。 */
  EventId: string;
  /** Event创建时间，格式为yyyy-MM-ddTHH:mm:ssZ。 */
  CreateTime: string;
  /** Event的描述。 */
  Description: string;
  /** Event的状态信息0：未运行1：运行中 */
  Status: number;
  /** Event关联的Flow列表。 */
  AttachedFlowGroup: DescribeFlowId[] | null;
}

/** 查询Flow的配置信息。 */
declare interface DescribeFlow {
  /** 流Id。 */
  FlowId: string;
  /** 流名称。 */
  FlowName: string;
  /** 流状态，目前有IDLE/RUNNING。 */
  State: string;
  /** 最大带宽值。 */
  MaxBandwidth: number;
  /** 输入组。 */
  InputGroup: DescribeInput[];
  /** 输出组。 */
  OutputGroup: DescribeOutput[] | null;
  /** 该Flow关联的媒体传输事件EventId。 */
  EventId: string;
  /** 媒体传输输入流所属的区域，取值和InputRegion相同。 */
  Region: string;
}

/** Event管理的Flow列表 */
declare interface DescribeFlowId {
  /** FlowId，唯一标识一个flow。 */
  FlowId: string;
  /** flow所在的区域名称。 */
  Region: string;
}

/** 查询输入的HLS配置信息。 */
declare interface DescribeHLSPullSourceAddress {
  /** HLS源站的Url地址。 */
  Url: string | null;
}

/** 查询输入配置信息。 */
declare interface DescribeInput {
  /** 输入Id。 */
  InputId?: string;
  /** 输入名称。 */
  InputName?: string;
  /** 输入描述。 */
  Description?: string | null;
  /** 输入协议。 */
  Protocol?: string;
  /** 输入地址列表。 */
  InputAddressList?: InputAddress[];
  /** 输入IP白名单列表。 */
  AllowIpList?: string[];
  /** 输入的SRT配置信息。 */
  SRTSettings?: DescribeInputSRTSettings | null;
  /** 输入的RTP配置信息。 */
  RTPSettings?: DescribeInputRTPSettings | null;
  /** 输入的地区。 */
  InputRegion?: string;
  /** 输入的RTMP配置信息。 */
  RTMPSettings?: DescribeInputRTMPSettings;
  /** 输入的主备开关。 */
  FailOver?: string | null;
  /** 输入的RTMP_PULL配置信息。 */
  RTMPPullSettings?: DescribeInputRTMPPullSettings | null;
  /** 输入的RTSP_PULL配置信息。 */
  RTSPPullSettings?: DescribeInputRTSPPullSettings | null;
  /** 输入的HLS_PULL配置信息。 */
  HLSPullSettings?: DescribeInputHLSPullSettings | null;
  /** 延播平滑吐流配置信息。 */
  ResilientStream?: ResilientStreamConf | null;
  /** 绑定的输入安全组 ID。 */
  SecurityGroupIds?: string[] | null;
  /** 可用区配置，开启容灾情况下最多有两个，顺序和pipeline 0、1对应，否则最多只有一个可用区。 */
  Zones?: string[];
  /** 输入的RIST配置信息。 */
  RISTSettings?: DescribeInputRISTSettings | null;
}

/** 查询输入的HLS配置信息。 */
declare interface DescribeInputHLSPullSettings {
  /** HLS源站地址信息。 */
  SourceAddresses: DescribeHLSPullSourceAddress[];
}

/** 查询输入的RIST配置信息。 */
declare interface DescribeInputRISTSettings {
  /** RIST模式，可选[LISTENER|CALLER]，默认为LISTENER。 */
  Mode?: string;
  /** RIST配置方案，可选[MAIN|SIMPLE]，默认为MAIN。 */
  Profile?: string;
  /** RIST缓冲区大小，单位为毫秒。最小值为50毫秒，最大值为5000毫秒。默认值：120 */
  Buffer?: number;
}

/** 查询输入的RTMP配置信息。 */
declare interface DescribeInputRTMPPullSettings {
  /** RTMP源站地址信息。 */
  SourceAddresses: DescribeRTMPPullSourceAddress[];
}

/** 查询输入的RTMP配置信息。 */
declare interface DescribeInputRTMPSettings {
  /** RTMP的推流路径。 */
  AppName: string | null;
  /** RTMP的推流StreamKey。RTMP的推流地址拼接规则为：rtmp://Ip:1935/AppName/StreamKey */
  StreamKey: string;
}

/** 查询输入的RTP配置信息。 */
declare interface DescribeInputRTPSettings {
  /** 是否FEC。 */
  FEC: string;
  /** 空闲超时时间。 */
  IdleTimeout: number;
}

/** 查询输入的RTSP配置信息。 */
declare interface DescribeInputRTSPPullSettings {
  /** RTSP源站地址信息。 */
  SourceAddresses: DescribeRTSPPullSourceAddress[];
}

/** 查询输入的SRT配置信息。 */
declare interface DescribeInputSRTSettings {
  /** SRT模式。 */
  Mode?: string | null;
  /** 流Id。 */
  StreamId?: string;
  /** 延迟。 */
  Latency?: number;
  /** 接收延迟。 */
  RecvLatency?: number;
  /** 对端延迟。 */
  PeerLatency?: number;
  /** 对端空闲超时时间。 */
  PeerIdleTimeout?: number;
  /** 解密密钥。 */
  Passphrase?: string;
  /** 密钥长度。 */
  PbKeyLen?: number;
  /** SRT对端地址。 */
  SourceAddresses?: SRTSourceAddressResp[] | null;
}

/** 查询输出的配置信息。 */
declare interface DescribeOutput {
  /** 输出Id。 */
  OutputId?: string;
  /** 输出名称。 */
  OutputName?: string;
  /** 输出类型。 */
  OutputType?: string;
  /** 输出描述。 */
  Description?: string | null;
  /** 输出协议。 */
  Protocol?: string;
  /** 输出的出口地址信息列表。 */
  OutputAddressList?: OutputAddress[];
  /** 输出的地区。 */
  OutputRegion?: string | null;
  /** 输出的SRT配置信息。 */
  SRTSettings?: DescribeOutputSRTSettings | null;
  /** 输出的RTP配置信息。 */
  RTPSettings?: DescribeOutputRTPSettings | null;
  /** 输出的RTMP配置信息。 */
  RTMPSettings?: DescribeOutputRTMPSettings | null;
  /** 输出的RTMP拉流配置信息。 */
  RTMPPullSettings?: DescribeOutputRTMPPullSettings | null;
  /** CIDR白名单列表。当Protocol为RTMP_PULL有效，为空代表不限制客户端IP。 */
  AllowIpList?: string[] | null;
  /** 输出的RTSP拉流配置信息。 */
  RTSPPullSettings?: DescribeOutputRTSPPullSettings | null;
  /** 输出的HLS拉流配置信息。 */
  HLSPullSettings?: DescribeOutputHLSPullSettings | null;
  /** 最大拉流并发数，最大为4，默认4。 */
  MaxConcurrent?: number;
  /** 绑定的安全组 ID。 */
  SecurityGroupIds?: string[] | null;
  /** 可用区，output目前最多只支持一个。 */
  Zones?: string[];
  /** 输出的RIST配置信息。 */
  RISTSettings?: DescribeOutputRISTSettings | null;
}

/** 查询输出的HLS拉流URL信息。 */
declare interface DescribeOutputHLSPullServerUrl {
  /** HLS拉流地址的Url。 */
  Url: string;
}

/** 查询输出的HLS拉流配置信息。 */
declare interface DescribeOutputHLSPullSettings {
  /** HLS拉流地址列表。 */
  ServerUrls: DescribeOutputHLSPullServerUrl[] | null;
}

/** 查询输出的RIST拉流配置信息。 */
declare interface DescribeOutputRISTSettings {
  /** RIST模式，可选[LISTENER|CALLER]，默认为LISTENER。 */
  Mode?: string;
  /** RIST配置方案，可选[MAIN|SIMPLE]，默认为MAIN。 */
  Profile?: string;
  /** RIST缓冲区大小，单位为毫秒。最小值为50毫秒，最大值为5000毫秒。默认值：120 */
  Buffer?: number;
  /** 服务器监听地址，RIST模式为LISTENER时使用。 */
  SourceAddresses?: OutputRISTSourceAddressResp[] | null;
}

/** 查询输出的RTMP拉流URL信息。 */
declare interface DescribeOutputRTMPPullServerUrl {
  /** RTMP拉流地址的tcUrl。 */
  TcUrl: string;
  /** RTMP拉流地址的流key。 */
  StreamKey: string;
}

/** 查询输出的RTMP拉流配置信息。 */
declare interface DescribeOutputRTMPPullSettings {
  /** 拉流地址列表。 */
  ServerUrls: DescribeOutputRTMPPullServerUrl[] | null;
}

/** 查询输出的RTMP配置信息。 */
declare interface DescribeOutputRTMPSettings {
  /** 空闲超时时间。 */
  IdleTimeout: number | null;
  /** Chunk大小。 */
  ChunkSize: number | null;
  /** 转推RTMP的目标地址信息列表。 */
  Destinations: RTMPAddressDestination[] | null;
}

/** 查询输出的RTP配置信息。 */
declare interface DescribeOutputRTPSettings {
  /** 转推RTP的目标地址信息列表。 */
  Destinations: RTPAddressDestination[] | null;
  /** 是否FEC。 */
  FEC: string | null;
  /** 空闲超时时间。 */
  IdleTimeout: number | null;
}

/** 查询输出的RTSP拉流URL信息。 */
declare interface DescribeOutputRTSPPullServerUrl {
  /** RTSP拉流地址的Url。 */
  Url: string;
}

/** 查询输出的RTSP拉流配置信息。 */
declare interface DescribeOutputRTSPPullSettings {
  /** RTSP拉流地址列表。 */
  ServerUrls: DescribeOutputRTSPPullServerUrl[] | null;
}

/** 查询输出的SRT配置信息。 */
declare interface DescribeOutputSRTSettings {
  /** 转推的目标的地址信息列表，SRT模式为CALLER时使用。 */
  Destinations?: SRTAddressDestination[] | null;
  /** 流Id。 */
  StreamId?: string | null;
  /** 延迟。 */
  Latency?: number | null;
  /** 接收延迟。 */
  RecvLatency?: number | null;
  /** 对端延迟。 */
  PeerLatency?: number | null;
  /** 对端空闲超时时间。 */
  PeerIdleTimeout?: number | null;
  /** 加密密钥。 */
  Passphrase?: string | null;
  /** 加密密钥长度。 */
  PbKeyLen?: number | null;
  /** SRT模式。 */
  Mode?: string | null;
  /** 服务器监听地址，SRT模式为LISTENER时使用。 */
  SourceAddresses?: OutputSRTSourceAddressResp[] | null;
}

/** 查询输入的RTMP配置信息。 */
declare interface DescribeRTMPPullSourceAddress {
  /** RTMP源站的TcUrl地址。 */
  TcUrl: string | null;
  /** RTMP源站的StreamKey。RTMP源站地址拼接规则为：$TcUrl/$StreamKey。 */
  StreamKey: string;
}

/** 查询输入的RTSP配置信息。 */
declare interface DescribeRTSPPullSourceAddress {
  /** RTSP源站的Url地址。 */
  Url: string | null;
}

/** 诊断结果项。 */
declare interface DiagnoseResult {
  /** 诊断出的异常类别，取值范围：DecodeParamException：解码参数异常TimeStampException：时间戳异常FrameException： 帧率异常StreamStatusException：流状态异常StreamInfo：流信息异常StreamAbnormalCharacteristics：流特征异常DecodeException：解码异常HLSRequirements：HLS 格式异常 */
  Category?: string | null;
  /** 诊断出的具体异常类型，取值如下：VideoResolutionChanged：视频分辨率变化AudioSampleRateChanged：音频采样率变化AudioChannelsChanged：音频通道数变化ParameterSetsChanged：流参数集信息发生变化DarOrSarInvalid：视频的宽高比异常TimestampFallback：DTS时间戳回退DtsJitter：DTS抖动过大PtsJitter：PTS抖动过大AACDurationDeviation：AAC帧时间戳间隔不合理AudioDroppingFrames：音频丢帧VideoDroppingFrames：视频丢帧AVTimestampInterleave：音视频交织不合理PtsLessThanDts：媒体流的 pts 小于 dtsReceiveFpsJitter：网络接收帧率抖动过大ReceiveFpsTooSmall：网络接收视频帧率过小FpsJitter：通过PTS计算得到的流帧率抖动过大StreamOpenFailed：流打开失败StreamEnd：流结束StreamParseFailed：流解析失败VideoFirstFrameNotIdr：首帧不是IDR帧StreamNALUError：NALU起始码错误TsStreamNoAud：mpegts的H26x流缺失 AUD NALUAudioStreamLack：无音频流VideoStreamLack：无视频流LackAudioRecover：缺失音频流恢复LackVideoRecover：缺失视频流恢复VideoBitrateOutofRange：视频流码率(kbps)超出范围AudioBitrateOutofRange：音频流码率(kbps)超出范围VideoDecodeFailed：视频解码错误AudioDecodeFailed：音频解码错误AudioOutOfPhase：双通道音频相位相反VideoDuplicatedFrame：视频流中存在重复帧AudioDuplicatedFrame：音频流中存在重复帧VideoRotation：视频画面旋转TsMultiPrograms：MPEG2-TS流有多个programMp4InvalidCodecFourcc：MP4中codec fourcc不符合Apple HLS要求HLSBadM3u8Format：无效的m3u8文件HLSInvalidMasterM3u8：无效的main m3u8文件HLSInvalidMediaM3u8：无效的media m3u8文件HLSMasterM3u8Recommended：main m3u8缺少标准推荐的参数HLSMediaM3u8Recommended：media m3u8缺少标准推荐的参数HLSMediaM3u8DiscontinuityExist：media m3u8存在EXT-X-DISCONTINUITYHLSMediaSegmentsStreamNumChange：切片的流数目发生变化HLSMediaSegmentsPTSJitterDeviation：切片间PTS跳变且没有EXT-X-DISCONTINUITYHLSMediaSegmentsDTSJitterDeviation：切片间DTS跳变且没有EXT-X-DISCONTINUITYTimecodeTrackExist：MP4存在tmcd轨道 */
  Type?: string | null;
  /** 诊断出异常开始的PTS时间戳。 */
  Timestamp?: number | null;
  /** 诊断出的异常描述。 */
  Description?: string | null;
  /** 诊断到异常的北京时间，采用 ISO 日期格式。 */
  DateTime?: string | null;
  /** 诊断出的异常级别，取值范围：Fatal：影响后续播放和解析，Error： 可能会影响播放，Warning： 可能会有潜在风险，但不一定会影响播放，Notice：比较重要的流信息，Info：一般性的流信息。 */
  SeverityLevel?: string | null;
}

/** Drm 加密信息。 */
declare interface DrmInfo {
  /** 加密类型： simpleaes: aes-128 加密 */
  Type: string | null;
  /** SimpleAes 加密信息。 */
  SimpleAesDrm?: SimpleAesDrm | null;
}

/** 编辑点播视频文件信息 */
declare interface EditMediaFileInfo {
  /** 视频的输入信息。 */
  InputInfo: MediaInputInfo;
  /** 【剪辑】任务生效，视频剪辑的起始时间偏移，单位：秒。 */
  StartTimeOffset?: number;
  /** 【剪辑】任务生效，视频剪辑的结束时间偏移，单位：秒。 */
  EndTimeOffset?: number;
  /** 【合成】任务必选，用于轨道元素中媒体关联源素材 ID。注意：允许字母、数字、-、_ ，最长 32 字符 */
  Id?: string | null;
}

/** 编辑视频的结果文件输出配置。 */
declare interface EditMediaOutputConfig {
  /** 封装格式，可选值：mp4、hls、mov、flv、avi。默认是 mp4。 */
  Container?: string | null;
  /** 剪辑模式，可选值：normal（默认）：精准编辑fast：快速编辑，处理速度更快但精准度一定程度降低注意：fast只支持单文件，normal默认输出转码格式是h264 */
  Type?: string | null;
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
  FileInfoSet?: EditMediaFileInfo[];
}

/** 编辑视频任务的输出 */
declare interface EditMediaTaskOutput {
  /** 编辑后文件的目标存储。 */
  OutputStorage: TaskOutputStorage;
  /** 编辑后的视频文件路径。 */
  Path: string;
  /** 编辑后的视频文件元信息。 */
  MetaData?: MediaMetaData | null;
}

/** 音视频增强配置 */
declare interface EnhanceConfig {
  /** 视频增强配置。 */
  VideoEnhance?: VideoEnhanceConfig | null;
  /** 音频增强配置。 */
  AudioEnhance?: AudioEnhanceConfig | null;
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

/** 流的音频数据。 */
declare interface FlowAudio {
  /** 帧率。 */
  Fps: number;
  /** 码率，单位是bps。 */
  Rate: number;
  /** 音频Pid。 */
  Pid: number;
}

/** 传输流日志信息。 */
declare interface FlowLogInfo {
  /** 时间戳，单位为秒。 */
  Timestamp: number;
  /** 输入输出类型（input/output）。 */
  Type: string;
  /** 输入或输出Id。 */
  InputOutputId: string;
  /** 协议。 */
  Protocol: string;
  /** 事件代码。 */
  EventCode: string;
  /** 事件信息。 */
  EventMessage: string;
  /** 对端IP。 */
  RemoteIp: string;
  /** 对端端口。 */
  RemotePort: string;
  /** 主备通道，0为主通道，1为备通道。 */
  Pipeline: string;
  /** 输入或输出的名称。 */
  InputOutputName: string;
}

/** 传输流媒体的音频数据。 */
declare interface FlowMediaAudio {
  /** 帧率。 */
  Fps: number;
  /** 码率，单位是bps。 */
  Rate: number;
  /** 音频Pid。 */
  Pid: number;
  /** 标志同一次推流。 */
  SessionId: string;
}

/** 传输流的媒体数据。 */
declare interface FlowMediaInfo {
  /** 时间戳，单位是秒。 */
  Timestamp: number;
  /** 总带宽。 */
  Network: number;
  /** 传输流的视频数据。 */
  Video: FlowMediaVideo[];
  /** 传输流的音频数据。 */
  Audio: FlowMediaAudio[];
  /** 标志同一次推流。 */
  SessionId: string;
  /** 客户端IP。 */
  ClientIp: string;
}

/** 传输流媒体的视频数据。 */
declare interface FlowMediaVideo {
  /** 帧率。 */
  Fps: number;
  /** 码率，单位是bps。 */
  Rate: number;
  /** 视频Pid。 */
  Pid: number;
  /** 标志同一次推流。 */
  SessionId: string;
}

/** 实时流状态查询的通用状态信息。 */
declare interface FlowRealtimeStatusCommon {
  /** 当前连接状态，Connected|Waiting|Idle。 */
  State: string;
  /** 连接模式，Listener|Caller。 */
  Mode: string;
  /** 已连接时长，单位为ms。 */
  ConnectedTime: number;
  /** 实时码率，单位为bps。 */
  Bitrate: number;
  /** 重试次数。 */
  Reconnections: number;
}

/** 流状态实时查询接口的流状态信息 */
declare interface FlowRealtimeStatusItem {
  /** 类型，Input|Output。 */
  Type: string;
  /** 输入Id，如果Type为Input，此字段不为空。 */
  InputId: string;
  /** 输出Id，如果Type为Output，此字段不为空。 */
  OutputId: string;
  /** 流Id。 */
  FlowId: string;
  /** 协议， SRT | RTMP。 */
  Protocol: string;
  /** 共同状态信息。 */
  CommonStatus: FlowRealtimeStatusCommon;
  /** 如果是SRT协议则有此字段。 */
  SRTStatus: FlowRealtimeStatusSRT | null;
  /** 如果是RTMP协议则有此字段。 */
  RTMPStatus: FlowRealtimeStatusRTMP | null;
  /** 服务器IP。 */
  ConnectServerIP: string;
  /** 如果是RTP协议则有此字段。 */
  RTPStatus: FlowRealtimeStatusRTP | null;
}

/** 流状态实时查询接口的RTMP信息。 */
declare interface FlowRealtimeStatusRTMP {
  /** 视频帧率。 */
  VideoFPS: number;
  /** 音频帧率。 */
  AudioFPS: number;
}

/** 流状态实时查询接口的RTP流状态信息 */
declare interface FlowRealtimeStatusRTP {
  /** 传输的包个数 */
  Packets: number;
}

/** 流状态实时查询接口的SRT信息。 */
declare interface FlowRealtimeStatusSRT {
  /** 延迟，单位为ms。 */
  Latency: number;
  /** RTT，单位为ms。 */
  RTT: number;
  /** 实时发包数或者收包数。 */
  Packets: number;
  /** 丢包率。 */
  PacketLossRate: number;
  /** 重传率。 */
  RetransmitRate: number;
  /** 实时丢包数。 */
  DroppedPackets: number;
  /** 是否加密，On|Off。 */
  Encryption: string;
}

/** 传输流的SRT质量数据。 */
declare interface FlowSRTInfo {
  /** 时间戳，单位是秒。 */
  Timestamp: number;
  /** 发送丢包率。 */
  SendPacketLossRate: number;
  /** 发送重传率。 */
  SendRetransmissionRate: number;
  /** 接收丢包率。 */
  RecvPacketLossRate: number;
  /** 接收重传率。 */
  RecvRetransmissionRate: number;
  /** 与对端的RTT时延。 */
  RTT: number;
  /** 标志同一次推流。 */
  SessionId: string;
  /** 发送弃包数。 */
  SendPacketDropNumber: number;
  /** 接收弃包数。 */
  RecvPacketDropNumber: number;
}

/** 流的统计数据。 */
declare interface FlowStatistics {
  /** 会话Id。 */
  SessionId: string;
  /** 对端IP。 */
  ClientIp: string;
  /** 总带宽。 */
  Network: number;
  /** 视频数据。 */
  Video: FlowVideo[];
  /** 音频数据。 */
  Audio: FlowAudio[];
}

/** 流的统计数据列表。 */
declare interface FlowStatisticsArray {
  /** 时间戳。 */
  Timestamp: number;
  /** 每个会话的统计数据。 */
  FlowStatistics: FlowStatistics[];
}

/** 流的视频数据。 */
declare interface FlowVideo {
  /** 帧率。 */
  Fps: number;
  /** 码率，单位是bps。 */
  Rate: number;
  /** 音频Pid。 */
  Pid: number;
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

/** 创建的输入HLS拉流源站配置信息。 */
declare interface HLSPullSourceAddress {
  /** HLS源站的Url地址。 */
  Url: string;
}

/** HDR配置 */
declare interface HdrConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可选值：HDR10HLG默认值：HDR10。注意：video的编码方式需要为h265；注意：视频编码位深为10。 */
  Type?: string | null;
}

/** 片头片尾参数 */
declare interface HeadTailParameter {
  /** 片头列表。 */
  HeadSet?: MediaInputInfo[] | null;
  /** 片尾列表。 */
  TailSet?: MediaInputInfo[] | null;
}

/** 智能精彩集锦片段列表。 */
declare interface HighlightSegmentItem {
  /** 置信度。 */
  Confidence?: number;
  /** 片段起始时间偏移。 */
  StartTimeOffset?: number;
  /** 片段结束时间偏移。 */
  EndTimeOffset?: number;
  /** 片段标签 */
  SegmentTags?: string[] | null;
}

/** 图片编码格式参数 */
declare interface ImageEncodeConfig {
  /** 图片格式，取值范围：JPG、BMP、GIF、PNG、WebP，缺省为原图格式。 */
  Format?: string | null;
  /** 图片的相对质量，取值范围：1 - 100，数值以原图质量为标准，缺省为原图质量。 */
  Quality?: number | null;
}

/** 图片增强参数 */
declare interface ImageEnhanceConfig {
  /** 超分配置。 */
  SuperResolution?: SuperResolutionConfig | null;
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
  /** 截取雪碧图后，雪碧图图片文件的输出路径，可以为相对路径或者绝对路径。若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。相对路径示例：文件名_{变量名}.{format}文件名.{format}绝对路径示例：/自定义路径/文件名_{变量名}.{format}如果不填，则默认为相对路径：`{inputName}_imageSprite_{definition}_{number}.{format}`。 */
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
  /** 图片格式。 */
  Format: string;
}

/** 图片任务输入参数 */
declare interface ImageTaskInput {
  /** 图片编码配置。 */
  EncodeConfig?: ImageEncodeConfig | null;
  /** 图片增强配置。 */
  EnhanceConfig?: ImageEnhanceConfig | null;
}

/** 图片水印模板输入参数 */
declare interface ImageWatermarkInput {
  /** 水印图片 [Base64](https://tools.ietf.org/html/rfc4648) 编码后的字符串。支持 jpeg、png 图片格式。 */
  ImageContent: string;
  /** 水印的宽度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Width 为视频宽度的百分比大小，如 10% 表示 Width 为视频宽度的 10%；当字符串以 px 结尾，表示水印 Width 单位为像素，如 100px 表示 Width 为 100 像素。取值范围为[8, 4096]。当宽高都不填或者为0时，默认为 10%。 */
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
  /** 水印的高度。支持 %、px 两种格式：当字符串以 % 结尾，表示水印 Height 为视频高度的百分比大小，如 10% 表示 Height 为视频高度的 10%；当字符串以 px 结尾，表示水印 Height 单位为像素，如 100px 表示 Height 为 100 像素。取值范围为0或[8, 4096]。 */
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

/** 输入地址信息。 */
declare interface InputAddress {
  /** 输入地址的IP。 */
  Ip: string;
  /** 输入地址的端口。 */
  Port: number;
}

/** 直播编排子任务输出 */
declare interface LiveActivityResItem {
  /** 直播录制任务输出 */
  LiveRecordTask?: LiveScheduleLiveRecordTaskResult | null;
  /** 媒体质检任务输出 */
  LiveQualityControlTask?: ScheduleQualityControlTaskResult | null;
}

/** 直播编排任务输出 */
declare interface LiveActivityResult {
  /** 原子任务类型。LiveRecord：直播录制。AiQualityControl：媒体质检。 */
  ActivityType?: string | null;
  /** 原子任务输出。 */
  LiveActivityResItem?: LiveActivityResItem | null;
}

/** 直播录制输出文件信息 */
declare interface LiveRecordFile {
  /** 直播录制文件地址 */
  Url?: string | null;
  /** 直播录制文件大小 */
  Size?: number | null;
  /** 直播录制文件时长 */
  Duration?: number | null;
  /** 直播录制文件开始时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  StartTime?: string | null;
  /** 直播录制文件结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  EndTime?: string | null;
}

/** 直播录制结果 */
declare interface LiveRecordResult {
  /** 直播录制文件的目标存储。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 直播录制文件列表 */
  FileList?: LiveRecordFile[] | null;
}

/** 直播录制任务输入参数类型 */
declare interface LiveRecordTaskInput {
  /** 直播录制模板 ID。 */
  Definition: number;
  /** 直播录制后文件的目标存储，不填则继承上层的 OutputStorage 值。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 直播录制后文件的输出路径。 */
  OutputObjectPath?: string | null;
}

/** 直播编排直播录制任务结果类型 */
declare interface LiveScheduleLiveRecordTaskResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string | null;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number | null;
  /** 错误信息。 */
  Message?: string | null;
  /** 直播录制任务的输入。 */
  Input?: LiveRecordTaskInput | null;
  /** 直播录制任务的输出。 */
  Output?: LiveRecordResult | null;
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string | null;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string | null;
}

/** 直播编排任务信息 */
declare interface LiveScheduleTask {
  /** 直播编排任务 ID。 */
  TaskId?: string | null;
  /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
  Status?: string | null;
  /** 源异常时返回非0错误码，返回0 时请使用各个具体任务的 ErrCode。 */
  ErrCode?: number | null;
  /** 源异常时返回对应异常Message，否则请使用各个具体任务的 Message。 */
  Message?: string | null;
  /** 直播流 URL。 */
  Url?: string | null;
  /** 直播编排任务输出。 */
  LiveActivityResultSet?: LiveActivityResult[] | null;
}

/** 直播流分析结果 */
declare interface LiveStreamAiAnalysisResultInfo {
  /** 直播分析子任务结果，暂时只支持直播拆条。 */
  ResultSet?: LiveStreamAiAnalysisResultItem[] | null;
}

/** 直播流 AI 分析结果 */
declare interface LiveStreamAiAnalysisResultItem {
  /** 结果的类型，取值范围：SegmentRecognition：拆条。 */
  Type: string;
  /** 拆条结果，当 Type 为SegmentRecognition 时有效。 */
  SegmentResultSet: SegmentRecognitionItem[] | null;
}

/** 直播流媒体质检结果 */
declare interface LiveStreamAiQualityControlResultInfo {
  /** 内容质检结果列表。 */
  QualityControlResults?: QualityControlResult[] | null;
  /** 格式诊断结果列表。 */
  DiagnoseResults?: DiagnoseResult[] | null;
  /** 内容质检结果列表。 */
  QualityControlResultSet?: QualityControlResult[] | null;
  /** 格式诊断结果列表。 */
  DiagnoseResultSet?: DiagnoseResult[] | null;
}

/** 直播流 AI 识别结果 */
declare interface LiveStreamAiRecognitionResultInfo {
  /** 内容识别结果列表。 */
  ResultSet: LiveStreamAiRecognitionResultItem[];
}

/** 直播流 AI 识别结果 */
declare interface LiveStreamAiRecognitionResultItem {
  /** 结果的类型，取值范围：FaceRecognition：人脸识别，AsrWordsRecognition：语音关键词识别，OcrWordsRecognition：文本关键词识别，AsrFullTextRecognition：语音全文识别，OcrFullTextRecognition：文本全文识别。TransTextRecognition：语音翻译。ObjectRecognition：目标检测。TagRecognition：精彩打点。 */
  Type?: string;
  /** 人脸识别结果，当 Type 为FaceRecognition 时有效。 */
  FaceRecognitionResultSet?: LiveStreamFaceRecognitionResult[];
  /** 语音关键词识别结果，当 Type 为AsrWordsRecognition 时有效。 */
  AsrWordsRecognitionResultSet?: LiveStreamAsrWordsRecognitionResult[];
  /** 文本关键词识别结果，当 Type 为OcrWordsRecognition 时有效。 */
  OcrWordsRecognitionResultSet?: LiveStreamOcrWordsRecognitionResult[];
  /** 语音全文识别结果，当 Type 为AsrFullTextRecognition 时有效。 */
  AsrFullTextRecognitionResultSet?: LiveStreamAsrFullTextRecognitionResult[];
  /** 文本全文识别结果，当 Type 为OcrFullTextRecognition 时有效。 */
  OcrFullTextRecognitionResultSet?: LiveStreamOcrFullTextRecognitionResult[];
  /** 翻译结果，当Type 为 TransTextRecognition 时有效。 */
  TransTextRecognitionResultSet?: LiveStreamTransTextRecognitionResult[];
  /** 目标检测结果，当Type为 ObjectRecognition 时有效。 */
  ObjectRecognitionResultSet?: LiveStreamObjectRecognitionResult[];
  /** 打点结果，当Type 为 TagRecognition 时有效。 */
  TagRecognitionResultSet?: LiveStreamTagRecognitionResult[] | null;
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
  /** 审核结果的类型，可以取的值有：ImagePorn：图片鉴黄ImageTerrorism：图片涉敏ImagePolitical：图片涉敏VoicePorn：声音违规 */
  Type: string;
  /** 图片鉴黄的结果，当 Type 为 ImagePorn 时有效。 */
  ImagePornResultSet: LiveStreamAiReviewImagePornResult[];
  /** 图片涉敏的结果，当 Type 为 ImageTerrorism 时有效。 */
  ImageTerrorismResultSet: LiveStreamAiReviewImageTerrorismResult[];
  /** 图片涉敏的结果，当 Type 为 ImagePolitical 时有效。 */
  ImagePoliticalResultSet: LiveStreamAiReviewImagePoliticalResult[];
  /** 声音违规的结果，当 Type 为 VoicePorn 时有效。 */
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
  /** 识别开始UTC时间。 */
  StartTime?: string | null;
  /** 识别结束UTC时间。 */
  EndTime?: string | null;
  /** 稳态标记。 */
  SteadyState?: boolean | null;
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

/** 直播 AI 物体识别结果 */
declare interface LiveStreamObjectRecognitionResult {
  /** 识别的物体名称。 */
  Name?: string;
  /** 识别片段起始的 PTS 时间，单位：秒。 */
  StartPtsOffset?: number;
  /** 识别片段终止的 PTS 时间，单位：秒。 */
  EndPtsOffset?: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence?: number;
  /** 识别结果的区域坐标。数组包含 4 个元素 [x1,y1,x2,y2]，依次表示区域左上点、右下点的横纵坐标。 */
  AreaCoordSet?: number[];
  /** 截图链接。 */
  Url?: string | null;
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

/** 直播流录制结果 */
declare interface LiveStreamRecordResultInfo {
  /** 录制是否结束。0：录制未结束，返回单个文件结果1：录制结束，返回所有录制文件结果 */
  RecordOver?: number | null;
  /** 文件列表 */
  FileResults?: LiveRecordFile[] | null;
}

/** 直播 AI 打点识别结果 */
declare interface LiveStreamTagRecognitionResult {
  /** 打点事件。 */
  Id?: string;
  /** 识别片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime?: number;
  /** 识别片段终止的 PTS 时间，单位：秒。 */
  EndPtsTime?: number;
  /** 识别片段置信度。取值：0~100。 */
  Confidence?: number;
}

/** 任务处理的事件通知配置。 */
declare interface LiveStreamTaskNotifyConfig {
  /** 通知类型："CMQ"：回调消息写入cmq队列； "URL"： 指定URL时HTTP回调推送到 NotifyUrl 指定的地址，回调协议http+json，包体内容同[解析直播事件通知接口](https://cloud.tencent.com/document/product/862/39229) 的输出参数 注：不填或为空时默认 CMQ，如需采用其他类型需填写对应类型值。 */
  NotifyType?: string;
  /** HTTP回调地址，NotifyType为URL时必填。 */
  NotifyUrl?: string;
  /** CMQ 的模型，有 Queue 和 Topic 两种，目前仅支持 Queue。 */
  CmqModel?: string;
  /** CMQ 的园区，如 sh，bj 等。 */
  CmqRegion?: string;
  /** 当模型为 Queue 时有效，表示接收事件通知的 CMQ 的队列名。 */
  QueueName?: string;
  /** 当模型为 Topic 时有效，表示接收事件通知的 CMQ 的主题名。 */
  TopicName?: string;
  /** 用于生成回调签名的 Key。 */
  NotifyKey?: string | null;
}

/** 直播实时翻译结果 */
declare interface LiveStreamTransTextRecognitionResult {
  /** 识别文本。 */
  Text: string;
  /** 翻译片段起始的 PTS 时间，单位：秒。 */
  StartPtsTime: number;
  /** 翻译片段终止的 PTS 时间，单位：秒。 */
  EndPtsTime: number;
  /** 翻译片段置信度。取值：0~100。 */
  Confidence: number;
  /** 翻译文本。 */
  Trans: string;
  /** 翻译开始UTC时间。 */
  StartTime?: string | null;
  /** 翻译结束UTC时间。 */
  EndTime?: string | null;
  /** 稳态标记。 */
  SteadyState?: boolean | null;
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

/** 智能描述信息 */
declare interface MediaAiAnalysisDescriptionItem {
  /** 智能描述。 */
  Description?: string;
  /** 智能描述的可信度，取值范围是 0 到 100。 */
  Confidence?: number;
  /** 分段结果。 */
  Paragraphs?: AiParagraphInfo[] | null;
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

/** 智能精彩片段信息 */
declare interface MediaAiAnalysisHighlightItem {
  /** 智能精彩集锦地址。 */
  HighlightPath?: string;
  /** 智能精彩集锦封面地址。 */
  CovImgPath?: string;
  /** 智能精彩集锦的可信度，取值范围是 0 到 100。 */
  Confidence?: number;
  /** 智能精彩集锦持续时间。 */
  Duration?: number;
  /** 智能精彩集锦子片段列表。 */
  SegmentSet?: HighlightSegmentItem[];
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
  Bitrate?: number;
  /** 音频流的采样率，单位：hz。 */
  SamplingRate?: number;
  /** 音频流的编码格式，例如 aac。 */
  Codec?: string;
  /** 音频声道数，例如 2。 */
  Channel?: number | null;
  /** 音频Codecs。 */
  Codecs?: string | null;
  /** 音频响度。 */
  Loudness?: number | null;
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
  /** 输入来源对象的类型，支持： COS：COS源 URL：URL源 AWS-S3：AWS 源，目前只支持转码任务 */
  Type: string;
  /** 当 Type 为 COS 时有效，则该项为必填，表示媒体处理 COS 对象信息。 */
  CosInputInfo?: CosInputInfo;
  /** 当 Type 为 URL 时有效，则该项为必填，表示媒体处理 URL 对象信息。 */
  UrlInputInfo?: UrlInputInfo | null;
  /** 当 Type 为 AWS-S3 时有效，则该项为必填，表示媒体处理 AWS S3 对象信息。 */
  S3InputInfo?: S3InputInfo | null;
}

/** 点播媒体文件元信息 */
declare interface MediaMetaData {
  /** 上传的媒体文件大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。 */
  Size?: number;
  /** 容器类型，例如 m4a，mp4 等。 */
  Container?: string;
  /** 视频流码率平均值与音频流码率平均值之和，单位：bps。 */
  Bitrate?: number;
  /** 视频流高度的最大值，单位：px。 */
  Height?: number;
  /** 视频流宽度的最大值，单位：px。 */
  Width?: number;
  /** 视频时长，单位：秒。 */
  Duration?: number;
  /** 视频拍摄时的选择角度，单位：度。 */
  Rotate?: number;
  /** 视频流信息。 */
  VideoStreamSet?: MediaVideoStreamItem[];
  /** 音频流信息。 */
  AudioStreamSet?: MediaAudioStreamItem[];
  /** 视频时长，单位：秒。 */
  VideoDuration?: number;
  /** 音频时长，单位：秒。 */
  AudioDuration?: number;
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
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string | null;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string | null;
}

/** 转动图任务结果类型 */
declare interface MediaProcessTaskAnimatedGraphicResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 转动图任务的输入。 */
  Input?: AnimatedGraphicTaskInput;
  /** 转动图任务的输出。 */
  Output?: MediaAnimatedGraphicsItem | null;
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string | null;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string | null;
}

/** 对视频截雪碧图任务结果类型 */
declare interface MediaProcessTaskImageSpriteResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 对视频截雪碧图任务的输入。 */
  Input?: ImageSpriteTaskInput;
  /** 对视频截雪碧图任务的输出。 */
  Output?: MediaImageSpriteItem | null;
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string | null;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string | null;
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
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 对视频做采样截图任务输入。 */
  Input?: SampleSnapshotTaskInput;
  /** 对视频做采样截图任务输出。 */
  Output?: MediaSampleSnapshotItem | null;
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string | null;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string | null;
}

/** 对视频按指定时间点截图任务结果类型 */
declare interface MediaProcessTaskSnapshotByTimeOffsetResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 对视频按指定时间点截图任务输入。 */
  Input?: SnapshotByTimeOffsetTaskInput;
  /** 对视频按指定时间点截图任务输出。 */
  Output?: MediaSnapshotByTimeOffsetItem | null;
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string | null;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string | null;
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
  OutputStorage?: TaskOutputStorage;
  /** 转码后的视频文件路径。 */
  Path?: string;
  /** 转码规格 ID，参见[转码参数模板](https://cloud.tencent.com/document/product/862/37042)。 */
  Definition?: number;
  /** 视频流码率平均值与音频流码率平均值之和， 单位：bps。 */
  Bitrate?: number;
  /** 视频流高度的最大值，单位：px。 */
  Height?: number;
  /** 视频流宽度的最大值，单位：px。 */
  Width?: number;
  /** 媒体文件总大小（视频为 HLS 时，大小是 m3u8 和 ts 文件大小的总和），单位：字节。 */
  Size?: number;
  /** 视频时长，单位：秒。 */
  Duration?: number;
  /** 容器类型，例如 m4a，mp4 等。 */
  Container?: string;
  /** 视频的 md5 值。 */
  Md5?: string;
  /** 音频流信息。 */
  AudioStreamSet?: MediaAudioStreamItem[];
  /** 视频流信息。 */
  VideoStreamSet?: MediaVideoStreamItem[];
}

/** 点播文件视频流信息 */
declare interface MediaVideoStreamItem {
  /** 视频流的码率，单位：bps。 */
  Bitrate?: number;
  /** 视频流的高度，单位：px。 */
  Height?: number;
  /** 视频流的宽度，单位：px。 */
  Width?: number;
  /** 视频流的编码格式，例如 h264。 */
  Codec?: string;
  /** 帧率，单位：hz。 */
  Fps?: number;
  /** 色彩空间。 */
  ColorPrimaries?: string | null;
  /** 色彩空间。 */
  ColorSpace?: string | null;
  /** 色彩空间。 */
  ColorTransfer?: string | null;
  /** HDR类型。 */
  HdrType?: string | null;
  /** 视频Codecs。 */
  Codecs?: string | null;
  /** 帧率分子部分 */
  FpsNumerator?: number | null;
  /** 帧率分母部分 */
  FpsDenominator?: number | null;
}

/** 修改输入信息的参数。 */
declare interface ModifyInput {
  /** 输入Id。 */
  InputId: string;
  /** 输入名称。 */
  InputName: string;
  /** 输入描述。 */
  Description: string;
  /** 允许的推流的IP，CIDR格式。 */
  AllowIpList: string[];
  /** SRT的配置信息。 */
  SRTSettings: CreateInputSRTSettings;
  /** RTP的配置信息。 */
  RTPSettings: CreateInputRTPSettings;
  /** 输入的协议，可选[SRT|RTP|RTMP|RTMP_PULL|RTSP_PULL|RIST]。当输出包含RTP时，输入只能是RTP。当输出包含RTMP时，输入可以是SRT/RTMP。当输出包含SRT时，输入只能是SRT。 */
  Protocol?: string;
  /** 输入的主备开关，可选[OPEN|CLOSE]。 */
  FailOver?: string;
  /** RTMP_PULL的配置信息。 */
  RTMPPullSettings?: CreateInputRTMPPullSettings;
  /** RTSP_PULL的配置信息。 */
  RTSPPullSettings?: CreateInputRTSPPullSettings;
  /** HLS_PULL的配置信息。 */
  HLSPullSettings?: CreateInputHLSPullSettings;
  /** 延播平滑吐流配置信息。 */
  ResilientStream?: ResilientStreamConf;
  /** 绑定的输入安全组 ID。 仅支持关联一组安全组。 */
  SecurityGroupIds?: string[];
  /** 可用区，非必填，最多支持输入两个可用区，对于需改接口，只要第二个可用区会参与到资源分配。如果input开启容灾或者涉及RTSP_PULL协议切换时有效(会重新分配地址)。 */
  Zones?: string[];
  /** RIST的配置信息。 */
  RISTSettings?: CreateInputRISTSettings;
  /** 输入节点的地区 */
  InputRegion?: string;
}

/** 修改Output配置。 */
declare interface ModifyOutputInfo {
  /** 需要修改的Output的Id。 */
  OutputId: string;
  /** 输出的名称。 */
  OutputName: string;
  /** 输出的描述。 */
  Description: string;
  /** 输出的转推协议，支持SRT|RTP|RTMP|RTMP_PULL|RTSP|RIST。 */
  Protocol: string;
  /** 转推SRT的配置。 */
  SRTSettings?: CreateOutputSRTSettings;
  /** 转推RTP的配置。 */
  RTPSettings?: CreateOutputInfoRTPSettings;
  /** 转推RTMP的配置。 */
  RTMPSettings?: CreateOutputRTMPSettings;
  /** IP白名单列表，格式为CIDR，如0.0.0.0/0。当Protocol为RTMP_PULL有效，为空代表不限制客户端IP。 */
  AllowIpList?: string[];
  /** 最大拉流并发数，最大4，默认4。 */
  MaxConcurrent?: number;
  /** 绑定的安全组 ID。 仅支持关联一组安全组。 */
  SecurityGroupIds?: string[];
  /** 可用区 */
  Zones?: string[];
  /** 转推RIST的配置。 */
  RISTSettings?: CreateOutputRistSettings;
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

/** 输出的出口的地址。 */
declare interface OutputAddress {
  /** 出口IP。 */
  Ip: string;
}

/** RIST输出的监听地址。 */
declare interface OutputRISTSourceAddressResp {
  /** 监听IP。 */
  Ip?: string | null;
  /** 监听端口。 */
  Port?: number | null;
}

/** SRT输出的监听地址。 */
declare interface OutputSRTSourceAddressResp {
  /** 监听IP。 */
  Ip: string | null;
  /** 监听端口。 */
  Port: number | null;
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
  TEHDConfig?: TEHDConfigForUpdate | null;
  /** 字幕流配置参数。 */
  SubtitleTemplate?: SubtitleTemplate | null;
  /** 外挂音轨参数。 */
  AddonAudioStream?: MediaInputInfo[] | null;
  /** 转码扩展字段。 */
  StdExtInfo?: string | null;
  /** 要插入的字幕文件。 */
  AddOnSubtitles?: AddOnSubtitle[] | null;
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

/** 媒体质检结果输出。 */
declare interface QualityControlData {
  /** 为true时表示视频无音频轨。 */
  NoAudio?: boolean | null;
  /** 为true时表示视频无视频轨。 */
  NoVideo?: boolean | null;
  /** 视频无参考质量打分，百分制。 */
  QualityEvaluationScore?: number | null;
  /** 内容质检检出异常项。 */
  QualityControlResultSet?: QualityControlResult[] | null;
  /** 格式诊断检出异常项 */
  ContainerDiagnoseResultSet?: ContainerDiagnoseResultItem[] | null;
}

/** 质检结果项 */
declare interface QualityControlItem {
  /** 置信度，取值范围是 0 到 100。 */
  Confidence?: number | null;
  /** 出现的起始时间戳，秒。 */
  StartTimeOffset?: number;
  /** 出现的结束时间戳，秒。 */
  EndTimeOffset?: number;
  /** 区域坐标(px)，即左上角坐标、右下角坐标。 */
  AreaCoordSet?: number[] | null;
}

/** 质检项配置 */
declare interface QualityControlItemConfig {
  /** 质检项名称。质检项取值如下：LowEvaluation：无参考打分Mosaic：马赛克检测CrashScreen：花屏检测Blur：模糊检测BlackWhiteEdge：黑白边检测SolidColorScreen：纯色屏检测LowLighting：低光照HighLighting：过曝NoVoice：静音检测LowVoice：低音检测HighVoice：爆音检测Jitter：抖动检测Noise：噪点检测QRCode：二维码检测BarCode：条形码检测AppletCode：小程序码检测VideoResolutionChanged：视频分辨率变化AudioSampleRateChanged：音频采样率变化AudioChannelsChanged：音频通道数变化ParameterSetsChanged：流参数集信息发生变化DarOrSarInvalid：视频的宽高比异常TimestampFallback：DTS时间戳回退DtsJitter：DTS抖动过大PtsJitter：PTS抖动过大AACDurationDeviation：AAC帧时间戳间隔不合理AudioDroppingFrames：音频丢帧VideoDroppingFrames：视频丢帧AVTimestampInterleave：音视频交织不合理PtsLessThanDts：媒体流的 pts 小于 dtsReceiveFpsJitter：网络接收帧率抖动过大ReceiveFpsTooSmall：网络接收视频帧率过小FpsJitter：通过PTS计算得到的流帧率抖动过大StreamOpenFailed：流打开失败StreamEnd：流结束StreamParseFailed：流解析失败VideoFirstFrameNotIdr：首帧不是IDR帧StreamNALUError：NALU起始码错误TsStreamNoAud：mpegts的H26x流缺失 AUD NALUAudioStreamLack：无音频流VideoStreamLack：无视频流LackAudioRecover：缺失音频流恢复LackVideoRecover：缺失视频流恢复VideoBitrateOutofRange：视频流码率(kbps)超出范围AudioBitrateOutofRange：音频流码率(kbps)超出范围VideoDecodeFailed：视频解码错误AudioDecodeFailed：音频解码错误AudioOutOfPhase：双通道音频相位相反VideoDuplicatedFrame：视频流中存在重复帧AudioDuplicatedFrame：音频流中存在重复帧VideoRotation：视频画面旋转TsMultiPrograms：MPEG2-TS流有多个programMp4InvalidCodecFourcc：MP4中codec fourcc不符合Apple HLS要求HLSBadM3u8Format：无效的m3u8文件HLSInvalidMasterM3u8：无效的main m3u8文件HLSInvalidMediaM3u8：无效的media m3u8文件HLSMasterM3u8Recommended：main m3u8缺少标准推荐的参数HLSMediaM3u8Recommended：media m3u8缺少标准推荐的参数HLSMediaM3u8DiscontinuityExist：media m3u8存在EXT-X-DISCONTINUITYHLSMediaSegmentsStreamNumChange：切片的流数目发生变化HLSMediaSegmentsPTSJitterDeviation：切片间PTS跳变且没有EXT-X-DISCONTINUITYHLSMediaSegmentsDTSJitterDeviation：切片间DTS跳变且没有EXT-X-DISCONTINUITYTimecodeTrackExist：MP4存在tmcd轨道 */
  Type: string;
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string | null;
  /** 采样方式，取值范围：- Time：根据时间间隔采样。 */
  Sampling?: string | null;
  /** 采样间隔时间，单位：ms。 */
  IntervalTime?: number | null;
  /** 异常持续时间，单位：ms。 */
  Duration?: number | null;
  /** 检测项对应的阈值，不同检测项对应阈值不同。 */
  Threshold?: string | null;
}

/** 质检异常项。 */
declare interface QualityControlResult {
  /** 异常类型，取值范围：Jitter：抖动，Blur：模糊，LowLighting：低光照，HighLighting：过曝，CrashScreen：花屏，BlackWhiteEdge：黑白边，SolidColorScreen：纯色屏，Noise：噪点，Mosaic：马赛克，QRCode：二维码，AppletCode：小程序码，BarCode：条形码，LowVoice：低音，HighVoice：爆音，NoVoice：静音，LowEvaluation：无参考打分低于阈值。 */
  Type: string;
  /** 质检结果项。 */
  QualityControlItems: QualityControlItem[];
}

/** 媒体质检模板详情 */
declare interface QualityControlTemplate {
  /** 媒体质检模板唯一标识。 */
  Definition?: number;
  /** 媒体质检模板名称。 */
  Name?: string | null;
  /** 模板描述信息。 */
  Comment?: string | null;
  /** 模板类型，取值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string | null;
  /** 媒体质检配置参数。 */
  QualityControlItemSet?: QualityControlItemConfig[] | null;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime?: string | null;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime?: string | null;
}

/** RTMP转推的目标地址信息。 */
declare interface RTMPAddressDestination {
  /** 转推RTMP的目标Url，格式如'rtmp://domain/live'。 */
  Url: string;
  /** 转推RTMP的目标StreamKey，格式如'steamid?key=value'。 */
  StreamKey: string;
}

/** 创建的输入RTMP拉流源站配置信息。 */
declare interface RTMPPullSourceAddress {
  /** RTMP源站的TcUrl地址。 */
  TcUrl: string;
  /** RTMP源站的StreamKey信息。 */
  StreamKey: string;
}

/** 转推的RTP目标地址信息。 */
declare interface RTPAddressDestination {
  /** 转推的目标地址的IP。 */
  Ip: string;
  /** 转推的目标地址的端口。 */
  Port: number;
}

/** 创建的输入RTSP拉流源站配置信息。 */
declare interface RTSPPullSourceAddress {
  /** RTSP源站的Url地址。 */
  Url: string;
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

/** 地区信息。 */
declare interface RegionInfo {
  /** 地区名称。 */
  Name: string;
}

/** 延播平滑吐流配置。 */
declare interface ResilientStreamConf {
  /** 是否开启延播平滑吐流，true开启，false不开启，默认不开启。 */
  Enable?: boolean | null;
  /** 延播时间，单位秒，目前支持的范围为10~300秒。 */
  BufferTime?: number | null;
}

/** AWS S3存储输入 */
declare interface S3InputInfo {
  /** S3 bucket。 */
  S3Bucket: string | null;
  /** S3 bucket 对应的区域，目前支持： us-east-1 eu-west-3 */
  S3Region: string | null;
  /** S3 bucket 中的媒体资源路径。 */
  S3Object: string | null;
  /** AWS 内网访问 媒体资源的秘钥id。 */
  S3SecretId?: string | null;
  /** AWS 内网访问 媒体资源的秘钥key。 */
  S3SecretKey?: string | null;
}

/** AWS S3 输出位置 */
declare interface S3OutputStorage {
  /** S3 bucket。 */
  S3Bucket: string | null;
  /** S3 bucket 对应的区域。 */
  S3Region: string | null;
  /** AWS 内网上传 媒体资源的秘钥id。 */
  S3SecretId?: string | null;
  /** AWS 内网上传 媒体资源的秘钥key。 */
  S3SecretKey?: string | null;
}

/** 转推的目标地址信息。 */
declare interface SRTAddressDestination {
  /** 目标地址的IP。 */
  Ip?: string;
  /** 目标地址的端口。 */
  Port?: number;
}

/** SRT输入源地址。 */
declare interface SRTSourceAddressReq {
  /** 对端IP。 */
  Ip: string;
  /** 对端端口。 */
  Port: number;
}

/** SRT输入源地址。 */
declare interface SRTSourceAddressResp {
  /** 对端IP。 */
  Ip: string | null;
  /** 对端端口。 */
  Port: number | null;
}

/** 对视频做采样截图任务输入参数类型。 */
declare interface SampleSnapshotTaskInput {
  /** 采样截图模板 ID。 */
  Definition: number;
  /** 水印列表，支持多张图片或文字水印，最大可支持 10 张。 */
  WatermarkSet?: WatermarkInput[];
  /** 采样截图后文件的目标存储，不填则继承上层的 OutputStorage 值。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 采样截图后图片文件的输出路径，可以为相对路径或者绝对路径。若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。相对路径示例：文件名_{变量名}.{format}文件名.{format}绝对路径示例：/自定义路径/文件名_{变量名}.{format}如果不填，则默认为相对路径：`{inputName}_sampleSnapshot_{definition}_{number}.{format}`。 */
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
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string | null;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string | null;
}

/** 媒体质检任务结果类型 */
declare interface ScheduleQualityControlTaskResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 媒体质检任务的输入。 */
  Input?: AiQualityControlTaskInput;
  /** 媒体质检任务的输出。 */
  Output?: QualityControlData | null;
}

/** 编排视频识别任务结果类型 */
declare interface ScheduleRecognitionTaskResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 识别任务的输入。 */
  Input?: AiRecognitionTaskInput;
  /** 识别任务的输出。 */
  Output?: AiRecognitionResult[] | null;
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string | null;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string | null;
}

/** 编排视频审核任务结果类型 */
declare interface ScheduleReviewTaskResult {
  /** 任务状态，有 PROCESSING，SUCCESS 和 FAIL 三种。 */
  Status?: string;
  /** 错误码，空字符串表示成功，其他值表示失败，取值请参考 [媒体处理类错误码](https://cloud.tencent.com/document/product/862/50369) 列表。 */
  ErrCodeExt?: string;
  /** 错误码，0 表示成功，其他值表示失败（该字段已不推荐使用，建议使用新的错误码字段 ErrCodeExt）。 */
  ErrCode?: number;
  /** 错误信息。 */
  Message?: string;
  /** 审核任务的输入。 */
  Input?: AiContentReviewTaskInput;
  /** 审核任务的输出。 */
  Output?: AiContentReviewResult[] | null;
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string | null;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string | null;
}

/** 编排任务信息 */
declare interface ScheduleTask {
  /** 编排任务 ID。 */
  TaskId: string;
  /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
  Status: string;
  /** 源异常时返回非0错误码，返回0 时请使用各个具体任务的 ErrCode。 */
  ErrCode?: number;
  /** 源异常时返回对应异常Message，否则请使用各个具体任务的 Message。 */
  Message?: string;
  /** 媒体处理的目标文件信息。 */
  InputInfo: MediaInputInfo | null;
  /** 原始视频的元信息。 */
  MetaData: MediaMetaData | null;
  /** 编排任务输出。 */
  ActivityResultSet: ActivityResult[] | null;
}

/** 编排详情。 */
declare interface SchedulesInfo {
  /** 编排唯一标识。 */
  ScheduleId?: number;
  /** 编排名称。 */
  ScheduleName?: string | null;
  /** 编排类型，可选值： Preset：系统预置编排；Custom：用户自定义编排。 */
  Type?: string | null;
  /** 编排状态，取值范围：Enabled：已启用，Disabled：已禁用。 */
  Status?: string | null;
  /** 编排绑定的触发规则。 */
  Trigger?: WorkflowTrigger | null;
  /** 编排任务列表。 */
  Activities?: Activity[] | null;
  /** 媒体处理的文件输出存储位置。 */
  OutputStorage?: TaskOutputStorage | null;
  /** 媒体处理生成的文件输出的目标目录。 */
  OutputDir?: string | null;
  /** 任务的事件通知配置。 */
  TaskNotifyConfig?: TaskNotifyConfig | null;
  /** 创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime?: string | null;
  /** 最后编辑时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime?: string | null;
  /** 资源ID，对于没有关联资源ID的，用账号主资源ID填充。 */
  ResourceId?: string | null;
}

/** 去划痕配置 */
declare interface ScratchRepairConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 强度，取值范围：0.0~1.0。默认：0.0。 */
  Intensity?: number | null;
}

/** 视频检索的检索结果 */
declare interface SearchTaskResult {
  /** 视频在本次检索中的得分，得分越高和检索值越相似，取值范围[0,1] */
  Score?: number | null;
  /** 检索获得的视频ID */
  VideoId?: string | null;
}

/** 视频检索的检索输入 */
declare interface SearchValueInput {
  /** 检索输入的类型，目前支持：Text：文本检索 */
  SearchValueType: string;
  /** 当SearchValueType为Text时有效且必填，用于检索视频的文本 */
  TextInput?: string | null;
}

/** 智能拆条片段。 */
declare interface SegmentRecognitionItem {
  /** 置信度。 */
  Confidence?: number;
  /** 片段起始时间偏移。 */
  StartTimeOffset?: number;
  /** 片段结束时间偏移。 */
  EndTimeOffset?: number;
  /** 拆条片段URL。 */
  SegmentUrl?: string | null;
  /** 拆条片段封面。 */
  CovImgUrl?: string | null;
  /** 分段标题。 */
  Title?: string | null;
  /** 分段概要。 */
  Summary?: string | null;
  /** 分段关键词。 */
  Keywords?: string[];
  /** 直播切片对应直播起始时间点，采用 ISO 日期格式。 */
  BeginTime?: string | null;
  /** 直播切片对应直播结束时间点，采用 ISO 日期格式。 */
  EndTime?: string | null;
}

/** 切片特殊配置信息。 */
declare interface SegmentSpecificInfo {
  /** 启动分片时长开关，可选值：on：打开off：关闭默认off */
  Switch?: string | null;
  /** 启动时分片时长，单位：秒 */
  FragmentTime?: number | null;
  /** 生效分片数，表示前FragmentEndNum个分片以FragmentTime时长切片，取值>=1 */
  FragmentEndNum?: number | null;
}

/** 细节增强配置 */
declare interface SharpEnhanceConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 强度，取值范围：0.0~1.0。默认：0.0。 */
  Intensity?: number | null;
}

/** SimpleAes 加密信息。 */
declare interface SimpleAesDrm {
  /** 请求解密秘钥uri地址。 */
  Uri: string | null;
  /** 加密key(32字节字符串)。 */
  Key: string | null;
  /** 加密初始化向量(32字节字符串)。 */
  Vector?: string | null;
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
  /** 时间点截图后图片文件的输出路径，可以为相对路径或者绝对路径。若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。相对路径示例：文件名_{变量名}.{format}文件名.{format}绝对路径示例：/自定义路径/文件名_{变量名}.{format}如果不填，则默认为相对路径：`{inputName}_snapshotByTimeOffset_{definition}_{number}.{format}`。 */
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

/** 媒体传输的地区信息。 */
declare interface StreamLinkRegionInfo {
  /** 媒体直传输的地区信息列表。 */
  Regions: RegionInfo[];
}

/** 字幕流配置参数。 */
declare interface SubtitleTemplate {
  /** 要压制到视频中的字幕文件地址。 */
  Path?: string | null;
  /** 指定要压制到视频中的字幕轨道，如果有指定Path，则Path 优先级更高。Path 和 StreamIndex 至少指定一个。 */
  StreamIndex?: number | null;
  /** 字体类型，hei.ttf：黑体song.ttf：宋体simkai.ttf：楷体arial.ttf：仅支持英文默认hei.ttf */
  FontType?: string | null;
  /** 字体大小，格式：Npx，N 为数值，不指定则以字幕文件中为准。 */
  FontSize?: string | null;
  /** 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色） */
  FontColor?: string | null;
  /** 文字透明度，取值范围：(0, 1]0：完全透明1：完全不透明默认值：1。 */
  FontAlpha?: number | null;
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
  /** 极速高清类型，可选值：TEHD-100：极速高清-100（视频极速高清）。TEHD-200：极速高清-200（音频极速高清）。不填代表不启用极速高清。 */
  Type: string;
  /** 视频码率上限，当 Type 指定了极速高清类型时有效。不填或填0表示不设视频码率上限。 */
  MaxVideoBitrate?: number;
}

/** 极速高清参数配置。 */
declare interface TEHDConfigForUpdate {
  /** 极速高清类型，可选值：TEHD-100：极速高清-100（视频极速高清）。TEHD-200：极速高清-200（音频极速高清）。不填代表不修改。 */
  Type?: string | null;
  /** 视频码率上限，不填代表不修改。 */
  MaxVideoBitrate?: number | null;
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
  /** 通知类型，可选值：CMQ：已下线，建议切换到TDMQ-CMQTDMQ-CMQ：消息队列URL：指定URL时HTTP回调推送到 NotifyUrl 指定的地址，回调协议http+json，包体内容同解析事件通知接口的输出参数 SCF：不推荐使用，需要在控制台额外配置SCFAWS-SQS：AWS 队列，只适用于 AWS 任务，且要求同区域 注：不填或为空时默认 CMQ，如需采用其他类型需填写对应类型值。 */
  NotifyType?: string;
  /** 工作流通知的模式，可取值有 Finish 和 Change，不填代表 Finish。 */
  NotifyMode?: string;
  /** HTTP回调地址，NotifyType为URL时必填。 */
  NotifyUrl?: string;
  /** CMQ或TDMQ-CMQ 的模型，有 Queue 和 Topic 两种。 */
  CmqModel?: string;
  /** CMQ或TDMQ-CMQ 的园区，如 sh，bj 等。 */
  CmqRegion?: string;
  /** 当模型为 Topic 时有效，表示接收事件通知的 CMQ 或 TDMQ-CMQ 的主题名。 */
  TopicName?: string;
  /** 当模型为 Queue 时有效，表示接收事件通知的 CMQ 或 TDMQ-CMQ 的队列名。 */
  QueueName?: string;
  /** AWS SQS 回调，NotifyType为 AWS-SQS 时必填。 */
  AwsSQS?: AwsSQS | null;
  /** 用于生成回调签名的key。 */
  NotifyKey?: string | null;
}

/** 媒体处理输出对象信息。 */
declare interface TaskOutputStorage {
  /** 媒体处理输出对象存储位置的类型，支持：COS：COS存储AWS-S3：AWS 存储，只适用于AWS任务，且要求同区域 */
  Type: string;
  /** 当 Type 为 COS 时有效，则该项为必填，表示媒体处理 COS 输出位置。 */
  CosOutputStorage?: CosOutputStorage | null;
  /** 当 Type 为 AWS-S3 时有效，则该项为必填，表示媒体处理 AWS S3 输出位置。 */
  S3OutputStorage?: S3OutputStorage | null;
}

/** 任务概要信息 */
declare interface TaskSimpleInfo {
  /** 任务 ID。 */
  TaskId?: string;
  /** 任务类型，包含： WorkflowTask：工作流处理任务； EditMediaTask：视频编辑任务； LiveProcessTask：直播处理任务。 */
  TaskType?: string;
  /** 任务创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime?: string;
  /** 任务开始执行时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。若任务尚未开始，该字段为：0000-00-00T00:00:00Z。 */
  BeginProcessTime?: string;
  /** 任务结束时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。若任务尚未完成，该字段为：0000-00-00T00:00:00Z。 */
  FinishTime?: string;
  /** 子任务类型。 */
  SubTaskTypes?: string[];
}

/** 涉敏任务控制参数 */
declare interface TerrorismConfigureInfo {
  /** 画面涉敏任务控制参数。 */
  ImgReviewInfo?: TerrorismImgReviewTemplateInfo;
  /** 文本涉敏任务控制参数。 */
  OcrReviewInfo?: TerrorismOcrReviewTemplateInfo;
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
  /** 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：guns：武器枪支；crowd：人群聚集；bloody：血腥画面；police：警察部队；banners：涉敏旗帜；militant：武装分子；explosion：爆炸火灾；terrorists：涉敏人物； */
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
  /** 画面涉敏过滤标签，审核结果包含选择的标签则返回结果，如果过滤标签为空，则审核结果全部返回，可选值为：guns：武器枪支；crowd：人群聚集；bloody：血腥画面；police：警察部队；banners：涉敏旗帜；militant：武装分子；explosion：爆炸火灾；terrorists：涉敏人物； */
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
  /** 字体大小，格式：Npx，N 为数值。N的取值范围：[0,1] 和 [8, 4096] */
  FontSize: string;
  /** 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。 */
  FontColor: string;
  /** 文字透明度，取值范围：(0, 1]0：完全透明1：完全不透明默认值：1。 */
  FontAlpha: number;
  /** 文字内容，长度不超过100个字符。 */
  TextContent?: string | null;
}

/** 文字水印模板 */
declare interface TextWatermarkTemplateInputForUpdate {
  /** 字体类型，目前可以支持两种：simkai.ttf：可以支持中文和英文；arial.ttf：仅支持英文。 */
  FontType?: string;
  /** 字体大小，格式：Npx，N 为数值。N的取值范围：[0,1] 和 [8, 4096] */
  FontSize?: string;
  /** 字体颜色，格式：0xRRGGBB，默认值：0xFFFFFF（白色）。 */
  FontColor?: string;
  /** 文字透明度，取值范围：(0, 1]0：完全透明1：完全不透明 */
  FontAlpha?: number;
  /** 文字内容，长度不超过100个字符。 */
  TextContent?: string;
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
  /** 转码后主文件的输出路径，可以为相对路径或者绝对路径。若需定义输出路径，路径需以`.{format}`结尾。变量名请参考 [文件名变量说明](https://cloud.tencent.com/document/product/862/37039)。相对路径示例：文件名_{变量名}.{format}文件名.{format}绝对路径示例：/自定义路径/文件名_{变量名}.{format}如果不填，则默认为相对路径：`{inputName}_transcode_{definition}.{format}`。 */
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
  Definition?: string;
  /** 封装格式，取值：mp4、flv、hls、mp3、flac、ogg。 */
  Container?: string;
  /** 转码模板名称。 */
  Name?: string;
  /** 模板描述信息。 */
  Comment?: string;
  /** 模板类型，取值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string;
  /** 是否去除视频数据，取值：0：保留；1：去除。 */
  RemoveVideo?: number;
  /** 是否去除音频数据，取值：0：保留；1：去除。 */
  RemoveAudio?: number;
  /** 视频流配置参数，仅当 RemoveVideo 为 0，该字段有效。 */
  VideoTemplate?: VideoTemplateInfo;
  /** 音频流配置参数，仅当 RemoveAudio 为 0，该字段有效 。 */
  AudioTemplate?: AudioTemplateInfo;
  /** 极速高清转码参数。 */
  TEHDConfig?: TEHDConfig | null;
  /** 封装格式过滤条件，可选值：Video：视频格式，可以同时包含视频流和音频流的封装格式；PureAudio：纯音频格式，只能包含音频流的封装格式板。 */
  ContainerType?: string;
  /** 模板创建时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime?: string;
  /** 模板最后修改时间，使用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  UpdateTime?: string;
  /** 音视频增强配置。 */
  EnhanceConfig?: EnhanceConfig | null;
  /** 转码模板别名称。 */
  AliasName?: string | null;
}

/** 语音翻译任务控制参数 */
declare interface TranslateConfigureInfo {
  /** 语音翻译任务开关，可选值：ON：开启智能语音翻译任务；OFF：关闭智能语音翻译任务。 */
  Switch: string;
  /** 视频源语言。 */
  SourceLanguage?: string;
  /** 翻译目标语言。 */
  DestinationLanguage?: string;
  /** 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：vtt：生成 WebVTT 字幕文件。 */
  SubtitleFormat?: string | null;
}

/** 语音翻译任务控制参数 */
declare interface TranslateConfigureInfoForUpdate {
  /** 语音翻译任务开关，可选值：ON：开启智能语音翻译任务；OFF：关闭智能语音翻译任务。 */
  Switch?: string;
  /** 视频源语言。 */
  SourceLanguage?: string;
  /** 翻译目标语言。 */
  DestinationLanguage?: string;
  /** 生成的字幕文件格式，填空字符串表示不生成字幕文件，可选值：vtt：生成 WebVTT 字幕文件。 */
  SubtitleFormat?: string;
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
  LabelSet?: string[];
  /** 判定涉嫌违规的分数阈值，当智能审核达到该分数以上，认为涉嫌违规。取值范围：0~100。 */
  BlockConfidence?: number;
  /** 判定需人工复核是否违规的分数阈值，当智能审核达到该分数以上，认为需人工复核。取值范围：0~100。 */
  ReviewConfidence?: number;
}

/** 视频检索入库任务的结果 */
declare interface VideoDBEntryTaskResult {
  /** 入库的视频ID */
  VideoId?: string | null;
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
  /** 视频流的编码格式，可选值：h264：H.264 编码h265：H.265 编码h266：H.266 编码av1：AOMedia Video 1 编码vp8：VP8 编码vp9：VP9 编码mpeg2：MPEG2 编码dnxhd：DNxHD 编码mv-hevc：MV-HEVC 编码注意：av1 编码容器目前只支持 mp4 ，webm，mkv。注意：H.266 编码容器目前只支持 mp4 ，hls，ts，mov。注意：VP8、VP9编码容器目前只支持webm，mkv。注意：MPEG2、dnxhd 编码容器目前只支持mxf。注意：MV-HEVC编码容器目前只支持mp4，hls，mov。其中hls格式只支持mp4分片格式。 */
  Codec: string;
  /** 视频帧率，取值范围：当FpsDenominator的值为空时，范围：[0, 120]，单位：Hz；当FpsDenominator的值不为空时，Fps/FpsDenominator的范围：[0,120]当取值为 0，表示帧率和原始视频保持一致。 */
  Fps: number;
  /** 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。当取值为 0，表示视频码率和原始视频保持一致。 */
  Bitrate: number;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。默认值：open。注意：自适应模式时，Width不能小于Height。 */
  ResolutionAdaptive?: string;
  /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Width?: number;
  /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。默认值：0。 */
  Height?: number;
  /** 关键帧 I 帧之间的间隔，允许按帧或秒自定义GOP长度，取值范围：0 和 [1, 100000]，当填 0 或不填时，系统将自动设置 gop 长度。 */
  Gop?: number;
  /** Gop数值单位，可选值：frame：表示帧second：表示秒默认值：frame */
  GopUnit?: string | null;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。smarttailor：智能剪裁：智能选取视频画面，来保证画面比例裁剪。默认值：black 。注意：自适应码流只支持 stretch、black。 */
  FillType?: string;
  /** 视频恒定码率控制因子，取值范围为[0, 51]。如果指定该参数，将使用 CRF 的码率控制方式做转码（视频码率将不再生效）。如果没有特殊需求，不建议指定该参数。注意：若Mode选择ABR，无需配置Vcrf值若Mode选择CBR，无需配置Vcrf值 */
  Vcrf?: number | null;
  /** 分片平均时长，范围：（0-10]，单位：秒默认值：10注意：只能在封装格式hls的情况下使用 */
  HlsTime?: number | null;
  /** hls 分片类型，可选值 ：0：HLS+TS 切片2：HLS+TS byte range7：HLS+MP4 切片5：HLS+MP4 byte range默认值：0 */
  SegmentType?: number | null;
  /** 帧率分母部分注意：值必须大于0 */
  FpsDenominator?: number | null;
  /** 3D视频拼接方式，仅mv-hevc，3D视频生效，可选值：side_by_side：左右视角top_bottom：上下视角默认值:side_by_side */
  Stereo3dType?: string | null;
  /** Profile，适用于不同场景。baseline: 只支持I/P帧，并只支持无交错的场景，适用于视频通话、手机视频等场景。main: 主流Profile，提供I帧、P帧、B帧，并支持无交错模式和交错模式。主要用在主流的音视频消费产品如视频播放器、流媒体传输设备上。high: 最高编码等级，在Main Profile上添加了8X8的预测，并支持自定义量化。广泛应用在蓝光存储、高清电视等场景。default：随原视频自动填充。 仅编码标准选择h264时出现该配置， 支持 baseline/main/high，默认为：default */
  VideoProfile?: string | null;
  /** 编码器级别，默认为自动（""）若编码标准选择H264: 支持以下选项：""，1 , 1.1 , 1.2 , 1.3 , 2 , 2.1 , 2.2 , 3 , 3.1 , 3.2 , 4 , 4.1 , 4.2 , 5 , 5.1若编码标准选择H265: 支持以下选项：""，1 , 2 , 2.1 , 3 , 3.1 , 4 , 4.1 , 5 , 5.1 , 5.2 , 6 , 6.1 , 6.2 , 8.5 */
  VideoLevel?: string | null;
  /** 参考帧之间的B帧数，默认选自动，支持 0 - 16注意：不填表示使用自动 */
  Bframes?: number | null;
  /** 码率控制模式：可选值：VBR（Variable Bit Rate）：动态比特率，根据视频画面的复杂度动态调整输出的码率，使得画面质量更高，适用于存储场景和对画面质量要求较高的应用。ABR（Average Bit Rate）：平均比特率，尽量保持输出视频的平均码率稳定，但允许短期内的码率波动，适用于需要在保持一定画质的情况下尽量减少整体码率的场景。CBR（Constant Bit Rate）：恒定比特率，指视频编码时输出的码率保持恒定不变，不考虑画面复杂度的变化，适用于对网络带宽要求较为严格的场景，如直播等。VCRF（Constant Rate Factor）：恒定质量因子，通过设定一个质量因子来控制视频质量，实现视频的恒定质量编码，码率会根据内容的复杂度自动调整，适用于希望保持一定画质的场景。默认选择 VBR */
  Mode?: string | null;
  /** 显示高宽比，可选值：[1:1，2:1，default]默认值：default */
  Sar?: string | null;
  /** 自适应I帧决策，开启后，媒体处理将自动识别视频中不同场景之间的过渡点（通常是视觉上显著不同的帧，比如从一个镜头切换到另一个镜头），在这些点自适应插入关键帧（I帧），从而提高视频的随机访问性和编码效率。可选值：0：关闭自适应I帧决策 1：使用自适应I帧决策默认值：0 */
  NoScenecut?: number | null;
  /** 比特位：支持8/10，默认为8 */
  BitDepth?: number | null;
  /** 保持原始时间戳：可选值：0：表示关闭1：表示打开默认是关闭 */
  RawPts?: number | null;
  /** 按比例压缩码率，开启后，将根据比例来调整输出视频的码率。填写压缩率后，系统会根据视频源码率自动计算目标输出码率。压缩率范围0-100不填此值表示不开启，默认不开启 */
  Compress?: number | null;
  /** 切片特殊配置 */
  SegmentSpecificInfo?: SegmentSpecificInfo | null;
  /** 模版是否开启场景化 0：不开启 1：开启 默认值：0 */
  ScenarioBased?: number | null;
  /** 视频场景化，可选值： normal：通用转码场景：通用转码压缩场景。pgc：PGC高清影视：压缩时会注重影视剧的观看体验，根据影视剧特性进行ROI编码，同时保留高质量的视频内容和音频。 materials_video：高清素材：素材资源类场景，对画质要求极高，较多透明画面内容，在压缩的同时接近视觉无损。 ugc：UGC内容：适用于广泛的UGC/短视频场景，针对短视频的特性优化编码码率， 画质提升，提升业务QOS/QOE指标。 e-commerce_video：秀场/电商类：压缩时会强调细节清晰度和ROI区域提升，尤其注重保持人脸区域的画质。 educational_video：教育类：压缩时会强调文字和图像的清晰度和可读性，以便学生更好地理解内容，确保讲解内容清晰传达。 默认值：normal */
  SceneType?: string | null;
  /** 转码策略，可选值： ultra_compress：极致压缩：相比标准压缩，该策略能在保证一定画质的基础上最大限度压缩码率，极大节约带宽和存储成本。 standard_compress：综合最优：平衡压缩率与画质，在保证主观画质没有明显降低的情况下尽可能压缩文件。该策略仅收取音视频极速高清转码费用。 high_compress：码率优先：优先保证降低文件体积大小，可能有一定画质损失。该策略仅收取音视频极速高清转码费用。 low_compress：画质优先：优先保证画质，压缩出来的文件体积可能相对较大。该策略仅收取音视频极速高清转码费用。 默认值：standard_compress 注：若需要在电视上观看视频，不建议使用ultra_compress策略。ultra_compress策略计费标准为极速高清转码 + 音视频增强-去毛刺。 */
  CompressType?: string | null;
}

/** 视频流配置参数 */
declare interface VideoTemplateInfoForUpdate {
  /** 视频流的编码格式，可选值：h264：H.264 编码h265：H.265 编码h266：H.266 编码av1：AOMedia Video 1 编码vp8：VP8 编码vp9：VP9 编码mpeg2：MPEG2 编码dnxhd：DNxHD 编码mv-hevc：MV-HEVC 编码注意：av1 编码容器目前只支持 mp4 ，webm，mkv。注意：H.266 编码容器目前只支持 mp4 ，hls，ts，mov。注意：VP8、VP9编码容器目前只支持webm，mkv。注意：MPEG2、dnxhd 编码容器目前只支持mxf。注意：MV-HEVC编码容器目前只支持mp4，hls，mov。其中hls格式只支持mp4分片格式。 */
  Codec?: string | null;
  /** 视频帧率，取值范围：当FpsDenominator的值为空时，范围：[0, 120]，单位：Hz；当FpsDenominator的值不为空时，Fps/FpsDenominator的范围：[0,120]当取值为 0，表示帧率和原始视频保持一致。 */
  Fps?: number | null;
  /** 视频流的码率，取值范围：0 和 [128, 100000]，单位：kbps。当取值为 0，表示视频码率和原始视频保持一致。 */
  Bitrate?: number | null;
  /** 分辨率自适应，可选值：open：开启，此时，Width 代表视频的长边，Height 表示视频的短边；close：关闭，此时，Width 代表视频的宽度，Height 表示视频的高度。注意：自适应模式时，Width不能小于Height。 */
  ResolutionAdaptive?: string | null;
  /** 视频流宽度（或长边）的最大值，取值范围：0 和 [128, 4096]，单位：px。当 Width、Height 均为 0，则分辨率同源；当 Width 为 0，Height 非 0，则 Width 按比例缩放；当 Width 非 0，Height 为 0，则 Height 按比例缩放；当 Width、Height 均非 0，则分辨率按用户指定。 */
  Width?: number | null;
  /** 视频流高度（或短边）的最大值，取值范围：0 和 [128, 4096]，单位：px。 */
  Height?: number | null;
  /** 关键帧 I 帧之间的间隔，允许按帧或秒自定义GOP长度，取值范围：0 和 [1, 100000]。当填 0 时，系统将自动设置 gop 长度。 */
  Gop?: number | null;
  /** Gop数值单位，可选值： frame：表示帧 second：表示秒默认值：frame */
  GopUnit?: string | null;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊填充。smarttailor：智能剪裁：智能选取视频画面，来保证画面比例裁剪。默认值：black 。注意：自适应码流只支持 stretch、black。 */
  FillType?: string | null;
  /** 视频恒定码率控制因子。取值范围为[0, 51]和100。如果没有特殊需求，不建议指定该参数。注意：需要修改为自动时，填100若Mode选择ABR，无需配置Vcrf值若Mode选择CBR，无需配置Vcrf值 */
  Vcrf?: number | null;
  /** 内容自适应编码。可选值：0：不开启1：开启默认值: 0. 当开启该参数时，将会自适应生成多个不同分辨率，不同码率的码流， 其中VideoTemplate的宽和高为多个码流中的最大分辨率，VideoTemplate中的码率为多个码流中的最高码率， VideoTemplate中的vcrf为多个码流中的最高质量。 当不设置分辨率、码率和vcrf时， ContentAdaptStream 参数生成的最高分辨率为视频源的分辨率，视频质量为接近vmaf95分。 若要开启该参数或了解计费细节, 请联系您的腾讯云商务。 */
  ContentAdaptStream?: number | null;
  /** 分片平均时长，取值范围：（0-10]，单位：秒默认值：10注意：只在封装格式HLS时使用 */
  HlsTime?: number | null;
  /** hls 分片类型，可选值：0：HLS+TS 切片2：HLS+TS byte range7：HLS+MP4 切片5：HLS+MP4 byte range默认值：0 */
  SegmentType?: number | null;
  /** 帧率分母部分注意：值必须大于0 */
  FpsDenominator?: number | null;
  /** 3D视频拼接方式，仅mv-hevc，3D视频生效，可选值：side_by_side：左右视角top_bottom：上下视角默认值:side_by_side */
  Stereo3dType?: string | null;
  /** Profile，适用于不同场景。 baseline: 只支持I/P帧，并只支持无交错的场景，适用于视频通话、手机视频等场景。 main: 主流Profile，提供I帧、P帧、B帧，并支持无交错模式和交错模式。主要用在主流的音视频消费产品如视频播放器、流媒体传输设备上。 high: 最高编码等级，在Main Profile上添加了8X8的预测，并支持自定义量化。广泛应用在蓝光存储、高清电视等场景。default：随原视频自动填充仅编码标准选择h264时出现该配置，默认为：default */
  VideoProfile?: string | null;
  /** 编码器级别，默认为自动（""）若编码标准选择H264: 支持以下选项：""，1 , 1.1 , 1.2 , 1.3 , 2 , 2.1 , 2.2 , 3 , 3.1 , 3.2 , 4 , 4.1 , 4.2 , 5 , 5.1 若编码标准选择H265: 支持以下选项：""，1 , 2 , 2.1 , 3 , 3.1 , 4 , 4.1 , 5 , 5.1 , 5.2 , 6 , 6.1 , 6.2 , 8.5 */
  VideoLevel?: string | null;
  /** 最大连续B帧数，默认选自动，支持 0 - 16和-1注意：-1表示修改为自动值 */
  Bframes?: number | null;
  /** 码率控制模式：可选值： VBR（Variable Bit Rate）：动态比特率，根据视频画面的复杂度动态调整输出的码率，使得画面质量更高，适用于存储场景和对画面质量要求较高的应用。 ABR（Average Bit Rate）：平均比特率，尽量保持输出视频的平均码率稳定，但允许短期内的码率波动，适用于需要在保持一定画质的情况下尽量减少整体码率的场景。 CBR（Constant Bit Rate）：恒定比特率，指视频编码时输出的码率保持恒定不变，不考虑画面复杂度的变化，适用于对网络带宽要求较为严格的场景，如直播等。 VCRF（Constant Rate Factor）：恒定质量因子，通过设定一个质量因子来控制视频质量，实现视频的恒定质量编码，码率会根据内容的复杂度自动调整，适用于希望保持一定画质的场景。 默认选择 VBR */
  Mode?: string | null;
  /** 显示高宽比，可选值：[1:1，2:1，default]默认值：default */
  Sar?: string | null;
  /** 自适应I帧决策，开启后，媒体处理将自动识别视频中不同场景之间的过渡点（通常是视觉上显著不同的帧，比如从一个镜头切换到另一个镜头），在这些点自适应插入关键帧（I帧），从而提高视频的随机访问性和编码效率。可选值： 0：关闭自适应I帧决策 1：使用自适应I帧决策 默认值：0 */
  NoScenecut?: number | null;
  /** 比特位：支持8/10，默认为8 */
  BitDepth?: number | null;
  /** 保持原始时间戳：可选值： 0：表示关闭 1：表示打开 默认是关闭 */
  RawPts?: number | null;
  /** 按比例压缩码率，开启后，将根据比例来调整输出视频的码率。填写压缩率后，系统会根据视频源码率自动计算目标输出码率。压缩率范围0-100，可选值：[0-100]和-1 注意：-1表示修改为自动 */
  Compress?: number | null;
  /** 切片特殊配置 */
  SegmentSpecificInfo?: SegmentSpecificInfo | null;
  /** 模版是否开启场景化 0：不开启 1：开启 默认值：0 */
  ScenarioBased?: number | null;
  /** 视频场景化，可选值： normal：通用转码场景：通用转码压缩场景 pgc：PGC高清影视：压缩时会注重影视剧的观看体验，根据影视剧特性进行ROI编码，同时保留高质量的视频内容和音频。 materials_video：高清素材：素材资源类场景，对画质要求极高，较多透明画面内容，在压缩的同时接近视觉无损。 ugc：UGC内容：适用于广泛的UGC/短视频场景，针对短视频的特性优化编码码率， 画质提升，提升业务QOS/QOE指标。 e-commerce_video：秀场/电商类：压缩时会强调细节清晰度和ROI区域提升，尤其注重保持人脸区域的画质。 educational_video：教育类：压缩时会强调文字和图像的清晰度和可读性，以便学生更好地理解内容，确保讲解内容清晰传达。默认值：normal */
  SceneType?: string | null;
  /** 转码策略，可选值： ultra_compress：极致压缩：相比标准压缩，该策略能在保证一定画质的基础上最大限度压缩码率，极大节约带宽和存储成本。 standard_compress：综合最优：平衡压缩率与画质，在保证主观画质没有明显降低的情况下尽可能压缩文件。该策略仅收取音视频极速高清转码费用。 high_compress：码率优先：优先保证降低文件体积大小，可能有一定画质损失。该策略仅收取音视频极速高清转码费用。 low_compress：画质优先：优先保证画质，压缩出来的文件体积可能相对较大。该策略仅收取音视频极速高清转码费用。 默认值：standard_compress 注：若需要在电视上观看视频，不建议使用ultra_compress策略。ultra_compress策略计费标准为极速高清转码 + 音视频增强-去毛刺。 */
  CompressType?: string | null;
}

/** 音量均衡配置 */
declare interface VolumeBalanceConfig {
  /** 能力配置开关，可选值：ON：开启；OFF：关闭。默认值：ON。 */
  Switch?: string;
  /** 类型，可选值：loudNorm：响度标准化gainControl：减小突变默认值：loudNorm。 */
  Type?: string | null;
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
  /** 水印的起始时间偏移，单位：秒。不填或填0，表示水印从画面出现时开始显现。不填或填0，表示水印从画面开始就出现；当数值大于0时（假设为 n），表示水印从画面开始的第 n 秒出现；当数值小于0时（假设为 -n），表示水印从离画面结束 n 秒前开始出现。注：只用于视频场景，截图不支持。 */
  StartTimeOffset?: number;
  /** 水印的结束时间偏移，单位：秒。不填或填0，表示水印持续到画面结束；当数值大于0时（假设为 n），表示水印持续到第 n 秒时消失；当数值小于0时（假设为 -n），表示水印持续到离画面结束 n 秒前消失。注：只用于视频场景，截图不支持。 */
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

/** 字词信息。 */
declare interface WordResult {
  /** 字词文本。 */
  Word?: string;
  /** 字词起始时间戳，单位秒。 */
  Start?: number;
  /** 字词结束时间戳，单位秒。 */
  End?: number;
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
  TaskId?: string;
  /** 任务流状态，取值：PROCESSING：处理中；FINISH：已完成。 */
  Status?: string;
  /** 源异常时返回非0错误码，返回0 时请使用各个具体任务的 ErrCode。 */
  ErrCode?: number;
  /** 源异常时返回对应异常Message，否则请使用各个具体任务的 Message。 */
  Message?: string;
  /** 媒体处理的目标文件信息。 */
  InputInfo?: MediaInputInfo | null;
  /** 原始视频的元信息。 */
  MetaData?: MediaMetaData | null;
  /** 媒体处理任务的执行状态与结果。 */
  MediaProcessResultSet?: MediaProcessTaskResult[];
  /** 视频内容审核任务的执行状态与结果。 */
  AiContentReviewResultSet?: AiContentReviewResult[];
  /** 视频内容分析任务的执行状态与结果。 */
  AiAnalysisResultSet?: AiAnalysisResult[];
  /** 视频内容识别任务的执行状态与结果。 */
  AiRecognitionResultSet?: AiRecognitionResult[];
  /** 媒体质检任务的执行状态与结果。 */
  AiQualityControlTaskResult?: ScheduleQualityControlTaskResult | null;
}

/** 输入规则，当上传视频命中该规则时，即触发工作流。 */
declare interface WorkflowTrigger {
  /** 触发器的类型，可选值：CosFileUpload：COS触发AwsS3FileUpload：AWS触发，目前只支持转码任务。只有编排支持，工作流不支持。 */
  Type: string;
  /** 当 Type 为 CosFileUpload 时必填且有效，为 COS 触发规则。 */
  CosFileUploadTrigger?: CosFileUploadTrigger | null;
  /** 当 Type 为 AwsS3FileUpload 时必填且有效，为 AWS S3 触发规则。注意：目前AWS的S3、对应触发队列SQS、回调队列SQS的秘钥需要一致。 */
  AwsS3FileUploadTrigger?: AwsS3FileUploadTrigger | null;
}

declare interface BatchDeleteStreamLinkFlowRequest {
  /** EventId。 */
  EventId: string;
  /** Event关联的流Id数组，如果不传默认删除Event下面的所有媒体传输流。 */
  FlowIds?: string[];
}

declare interface BatchDeleteStreamLinkFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchStartStreamLinkFlowRequest {
  /** EventId。 */
  EventId: string;
  /** Event关联的流Id数组，如果不传默认启动Event下面的所有媒体传输流。 */
  FlowIds?: string[];
}

declare interface BatchStartStreamLinkFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchStopStreamLinkFlowRequest {
  /** EventId。 */
  EventId: string;
  /** 流Id，如果不传默认停止Event下所有的媒体传输流。 */
  FlowIds?: string[];
}

declare interface BatchStopStreamLinkFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 语音翻译控制参数。 */
  TranslateConfigure?: TranslateConfigureInfo;
}

declare interface CreateAIRecognitionTemplateResponse {
  /** 视频内容识别模板唯一标识。 */
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 是否为纯音频，0表示视频模版，1表示纯音频模版当值为1：1. StreamInfos.N.RemoveVideo=12. StreamInfos.N.RemoveAudio=03. StreamInfos.N.Video.Codec=copy当值为0：1. StreamInfos.N.Video.Codec不能为copy2. StreamInfos.N.Video.Fps不能为null */
  PureAudio?: number;
  /** hls 分片类型，可选值： ts-segment：HLS+TS 切片 ts-byterange：HLS+TS byte range mp4-segment：HLS+MP4 切片 mp4-byterange：HLS+MP4 byte range ts-packed-audio：TS+Packed Audio mp4-packed-audio：MP4+Packed Audio 默认值：ts-segment 注：自适应码流的hls分片格式已此字段为准 */
  SegmentType?: string;
}

declare interface CreateAdaptiveDynamicStreamingTemplateResponse {
  /** 自适应转码模板唯一标识。 */
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 图片格式，取值为 jpg、png、webp。默认为 jpg。 */
  Format?: string;
}

declare interface CreateImageSpriteTemplateResponse {
  /** 雪碧图模板唯一标识。 */
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateQualityControlTemplateRequest {
  /** 媒体质检模板名称，长度限制：64 个字符。 */
  Name: string;
  /** 媒体质检控制参数。 */
  QualityControlItemSet: QualityControlItemConfig[];
  /** 媒体质检模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
}

declare interface CreateQualityControlTemplateResponse {
  /** 媒体质检模板唯一标识。 */
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 图片格式，取值为 jpg、png、webp。默认为 jpg。 */
  Format?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType?: string;
}

declare interface CreateSampleSnapshotTemplateResponse {
  /** 采样截图模板唯一标识。 */
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScheduleRequest {
  /** 编排名称，最多128字符。同一个用户该名称唯一。 */
  ScheduleName: string;
  /** 编排绑定的触发规则，当上传视频命中该规则到该对象时即触发编排。 */
  Trigger: WorkflowTrigger;
  /** 编排任务列表。 */
  Activities: Activity[];
  /** 媒体处理的文件输出存储位置。不填则继承 Trigger 中的存储位置。 */
  OutputStorage?: TaskOutputStorage;
  /** 媒体处理生成的文件输出的目标目录，必选以 / 开头和结尾，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致。 */
  OutputDir?: string;
  /** 任务的事件通知配置，不填代表不获取事件通知。 */
  TaskNotifyConfig?: TaskNotifyConfig;
  /** 资源ID，需要保证对应资源是开启状态。默认为帐号主资源ID。 */
  ResourceId?: string;
}

declare interface CreateScheduleResponse {
  /** 编排 ID。 */
  ScheduleId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 图片格式，取值可以为 jpg、png、webp。默认为 jpg。 */
  Format?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType?: string;
}

declare interface CreateSnapshotByTimeOffsetTemplateResponse {
  /** 时间点截图模板唯一标识。 */
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStreamLinkEventRequest {
  /** 事件名称。 */
  EventName: string;
  /** 事件描述。 */
  Description?: string;
}

declare interface CreateStreamLinkEventResponse {
  /** 创建的Event信息。 */
  Info: DescribeEvent;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStreamLinkFlowRequest {
  /** 流名称。 */
  FlowName: string;
  /** 最大带宽，单位bps，可选[10000000, 20000000, 50000000]。 */
  MaxBandwidth: number;
  /** 流的输入组。 */
  InputGroup?: CreateInput[];
  /** 该Flow关联的媒体传输事件ID，每个flow只能关联一个Event。 */
  EventId?: string;
}

declare interface CreateStreamLinkFlowResponse {
  /** 创建的Flow信息。 */
  Info?: DescribeFlow;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStreamLinkInputRequest {
  /** 媒体传输流ID。 */
  FlowId: string;
  /** 流的输入组。 */
  InputGroup?: CreateInput[];
}

declare interface CreateStreamLinkInputResponse {
  /** 创建的Flow信息。 */
  Info?: DescribeFlow;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateStreamLinkOutputInfoRequest {
  /** 传输流Id。 */
  FlowId: string;
  /** 传输流的Output配置。 */
  Output: CreateOutputInfo;
}

declare interface CreateStreamLinkOutputInfoResponse {
  /** 创建后的Output信息。 */
  Info?: DescribeOutput;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTranscodeTemplateRequest {
  /** 封装格式，可选值：mp4、flv、hls、ts、webm、mkv、mxf、mov、mp3、flac、ogg、m4a。其中，mp3、flac、ogg、m4a 为纯音频文件。 */
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
  Definition?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVideoDatabaseEntryTaskRequest {
  /** 待入库视频信息 */
  InputInfo: MediaInputInfo;
  /** 可选，入库任务完成后向指定的回调地址传递任务结果，目前仅支持URL */
  TaskNotifyConfig?: TaskNotifyConfig;
}

declare interface CreateVideoDatabaseEntryTaskResponse {
  /** 任务ID */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVideoSearchTaskRequest {
  /** 用于检索任务的输入 */
  SearchValueInput: SearchValueInput;
  /** 返回视频的最大数量，取值范围[1,20]，将返回最相近的前Limit条视频,默认为5 */
  Limit?: number;
  /** 可选，用于检索任务完成后向回调方发送检索结果，目前仅支持URL方式 */
  TaskNotifyConfig?: TaskNotifyConfig;
}

declare interface CreateVideoSearchTaskResponse {
  /** 检索任务的Id，用于后续查询任务状态和返回任务结果时标识任务 */
  TaskId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Definition?: number;
  /** 水印图片地址，仅当 Type 为 image，该字段有效。 */
  ImageUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWordSamplesRequest {
  /** 关键词应用场景，可选值：1. Recognition.Ocr：通过光学字符识别技术，进行内容识别；2. Recognition.Asr：通过音频识别技术，进行内容识别；3. Review.Ocr：通过光学字符识别技术，进行不适宜内容识别；4. Review.Asr：通过音频识别技术，进行不适宜内容识别；可合并简写为：5. Recognition：通过光学字符识别技术、音频识别技术，进行内容识别，等价于 1+2；6. Review：通过光学字符识别技术、音频识别技术，进行不适宜内容识别，等价于 3+4；7. All：通过光学字符识别技术、音频识别技术，进行内容识别、不适宜内容识别，等价于 1+2+3+4。 */
  Usages: string[];
  /** 关键词，数组长度限制：100。 */
  Words: AiSampleWordInfo[];
}

declare interface CreateWordSamplesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkflowRequest {
  /** 工作流名称，最多128字符。同一个用户该名称唯一。 */
  WorkflowName: string;
  /** 工作流绑定的触发规则，当上传视频命中该规则到该对象时即触发工作流。 */
  Trigger: WorkflowTrigger;
  /** 媒体处理的文件输出存储位置。不填则继承 Trigger 中的存储位置。 */
  OutputStorage?: TaskOutputStorage;
  /** 媒体处理生成的文件输出的目标目录，必选以 / 开头和结尾，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致。 */
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
  WorkflowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAIAnalysisTemplateRequest {
  /** 视频内容分析模板唯一标识。 */
  Definition: number;
}

declare interface DeleteAIAnalysisTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAIRecognitionTemplateRequest {
  /** 视频内容识别模板唯一标识。 */
  Definition: number;
}

declare interface DeleteAIRecognitionTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAdaptiveDynamicStreamingTemplateRequest {
  /** 自适应转码模板唯一标识。 */
  Definition: number;
}

declare interface DeleteAdaptiveDynamicStreamingTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAnimatedGraphicsTemplateRequest {
  /** 转动图模板唯一标识。 */
  Definition: number;
}

declare interface DeleteAnimatedGraphicsTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteContentReviewTemplateRequest {
  /** 内容审核模板唯一标识。 */
  Definition: number;
}

declare interface DeleteContentReviewTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImageSpriteTemplateRequest {
  /** 雪碧图模板唯一标识。 */
  Definition: number;
}

declare interface DeleteImageSpriteTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePersonSampleRequest {
  /** 素材 ID。 */
  PersonId: string;
}

declare interface DeletePersonSampleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteQualityControlTemplateRequest {
  /** 媒体质检模板唯一标识。 */
  Definition: number;
}

declare interface DeleteQualityControlTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSampleSnapshotTemplateRequest {
  /** 采样截图模板唯一标识。 */
  Definition: number;
}

declare interface DeleteSampleSnapshotTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteScheduleRequest {
  /** 编排唯一标识。 */
  ScheduleId: number;
}

declare interface DeleteScheduleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSnapshotByTimeOffsetTemplateRequest {
  /** 指定时间点截图模板唯一标识。 */
  Definition: number;
}

declare interface DeleteSnapshotByTimeOffsetTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteStreamLinkEventRequest {
  /** 媒体传输事件Id，删除前需要保证该Event关联的所有Flow都已经删除。 */
  EventId: string;
}

declare interface DeleteStreamLinkEventResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteStreamLinkFlowRequest {
  /** 传输流Id。 */
  FlowId: string;
}

declare interface DeleteStreamLinkFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteStreamLinkOutputRequest {
  /** 流Id。 */
  FlowId: string;
  /** 输出Id。 */
  OutputId: string;
}

declare interface DeleteStreamLinkOutputResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTranscodeTemplateRequest {
  /** 转码模板唯一标识。 */
  Definition: number;
}

declare interface DeleteTranscodeTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWatermarkTemplateRequest {
  /** 水印模板唯一标识。 */
  Definition: number;
}

declare interface DeleteWatermarkTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWordSamplesRequest {
  /** 关键词，数组长度限制：100 个词。 */
  Keywords: string[];
}

declare interface DeleteWordSamplesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkflowRequest {
  /** 工作流 ID。 */
  WorkflowId: number;
}

declare interface DeleteWorkflowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 视频内容分析模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
}

declare interface DescribeAIAnalysisTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 视频内容分析模板详情列表。 */
  AIAnalysisTemplateSet?: AIAnalysisTemplateItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 视频内容识别模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
}

declare interface DescribeAIRecognitionTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 视频内容识别模板详情列表。 */
  AIRecognitionTemplateSet?: AIRecognitionTemplateItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 是否为纯音频，0表示视频，1表示纯音频 */
  PureAudio?: number;
  /** 自适应转码模板标识过滤条件，长度限制：64 个字符 */
  Name?: string;
}

declare interface DescribeAdaptiveDynamicStreamingTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 转自适应码流模板详情列表。 */
  AdaptiveDynamicStreamingTemplateSet?: AdaptiveDynamicStreamingTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 转动图模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
}

declare interface DescribeAnimatedGraphicsTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 转动图模板详情列表。 */
  AnimatedGraphicsTemplateSet?: AnimatedGraphicsTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 智能审核模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
}

declare interface DescribeContentReviewTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 内容审核模板详情列表。 */
  ContentReviewTemplateSet?: ContentReviewTemplateItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 雪碧图模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
}

declare interface DescribeImageSpriteTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 雪碧图模板详情列表。 */
  ImageSpriteTemplateSet?: ImageSpriteTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMediaMetaDataRequest {
  /** 需要获取元信息的文件输入信息。 */
  InputInfo: MediaInputInfo;
}

declare interface DescribeMediaMetaDataResponse {
  /** 媒体元信息。 */
  MetaData?: MediaMetaData;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQualityControlTemplatesRequest {
  /** 媒体质检模板唯一标识过滤条件，数组长度限制：100。 */
  Definitions?: number[];
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数默认值：10；最大值：100。 */
  Limit?: number;
  /** "Preset"：预设，Custom":自定义模板 */
  Type?: string;
  /** 媒体质检模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
}

declare interface DescribeQualityControlTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 媒体质检模板详情列表。 */
  QualityControlTemplateSet?: QualityControlTemplate[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 采样截图模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
}

declare interface DescribeSampleSnapshotTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 采样截图模板详情列表。 */
  SampleSnapshotTemplateSet?: SampleSnapshotTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSchedulesRequest {
  /** 编排 ID 过滤条件，数组长度限制：100。 */
  ScheduleIds?: number[];
  /** 编排触发类型，可选值：CosFileUpload： 腾讯云 COS 文件上传触发AwsS3FileUpload：Aws S3 文件上传触发。不填或者为空表示全部。 */
  TriggerType?: string;
  /** 状态，取值范围：Enabled：已启用，Disabled：已禁用。不填此参数，则不区编排状态。 */
  Status?: string;
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
}

declare interface DescribeSchedulesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 编排信息数组。 */
  ScheduleInfoSet?: SchedulesInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 指定时间点截图模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
}

declare interface DescribeSnapshotByTimeOffsetTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 指定时间点截图模板详情列表。 */
  SnapshotByTimeOffsetTemplateSet?: SnapshotByTimeOffsetTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkActivateStateRequest {
}

declare interface DescribeStreamLinkActivateStateResponse {
  /** 用户已激活为0，否则为非0。 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkEventAttachedFlowsRequest {
  /** EventId。 */
  EventId: string;
  /** 当前页数，默认1。 */
  PageNum?: number;
  /** 每页大小，默认1000。 */
  PageSize?: number;
}

declare interface DescribeStreamLinkEventAttachedFlowsResponse {
  /** 流的配置信息列表。 */
  Infos?: DescribeFlow[];
  /** 总数量。 */
  TotalNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkEventRequest {
  /** 媒体传输事件ID。 */
  EventId: string;
}

declare interface DescribeStreamLinkEventResponse {
  /** 媒体传输事件的配置信息。 */
  Info: DescribeEvent;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkEventsRequest {
  /** 当前页数，默认1。 */
  PageNum?: number;
  /** 每页大小，默认10。 */
  PageSize?: number;
}

declare interface DescribeStreamLinkEventsResponse {
  /** 媒体传输事件的配置信息列表。 */
  Infos?: DescribeEvent[];
  /** 当前页数。 */
  PageNum?: number;
  /** 每页大小。 */
  PageSize?: number;
  /** 总数量。 */
  TotalNum?: number;
  /** 总页数。 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkFlowLogsRequest {
  /** 传输流Id。 */
  FlowId: string;
  /** 统计的开始时间，默认为前一小时，最多支持查询近7天。UTC时间，如'2020-01-01T12:00:00Z'。 */
  StartTime: string;
  /** 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。UTC时间，如'2020-01-01T12:00:00Z'。 */
  EndTime: string;
  /** 输入或输出类型，可选[input|output]。 */
  Type: string[];
  /** 主通道或备通道，可选[0|1]。 */
  Pipeline: string[];
  /** 每页大小，默认100，范围为[1, 1000]。 */
  PageSize: number;
  /** 按Timestamp升序或降序排序，默认降序，可选[desc|asc]。 */
  SortType?: string;
  /** 页码，默认1，范围为[1, 1000]。 */
  PageNum?: number;
}

declare interface DescribeStreamLinkFlowLogsResponse {
  /** 日志信息列表。 */
  Infos: FlowLogInfo[];
  /** 当前页码。 */
  PageNum: number;
  /** 每页大小。 */
  PageSize: number;
  /** 总数量。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkFlowMediaStatisticsRequest {
  /** 传输流ID。 */
  FlowId: string;
  /** 输入或输出类型，可选[input|output]。 */
  Type: string;
  /** 输入或输出Id。 */
  InputOutputId: string;
  /** 主通道或备通道，可选[0|1]。 */
  Pipeline: string;
  /** 查询间隔，可选[5s|1min|5min|15min]。 */
  Period: string;
  /** 统计的开始时间，默认为前一小时，最多支持查询近7天。UTC时间，如'2020-01-01T12:00:00Z'。 */
  StartTime: string;
  /** 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。UTC时间，如'2020-01-01T12:00:00Z'。 */
  EndTime: string;
}

declare interface DescribeStreamLinkFlowMediaStatisticsResponse {
  /** 传输流的媒体数据列表。 */
  Infos: FlowMediaInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkFlowRealtimeStatusRequest {
  /** 流ID。 */
  FlowId: string;
  /** 输入id数组，如果输入输出数组都为空，则代表全量查询。 */
  InputIds?: string[];
  /** 输出id数组，如果输入输出数组都为空，则代表全量查询。 */
  OutputIds?: string[];
}

declare interface DescribeStreamLinkFlowRealtimeStatusResponse {
  /** 查询时间，单位s。 */
  Timestamp: number;
  /** 实时数据信息列表。 */
  Datas: FlowRealtimeStatusItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkFlowRequest {
  /** 流Id。 */
  FlowId: string;
}

declare interface DescribeStreamLinkFlowResponse {
  /** 流的配置信息。 */
  Info: DescribeFlow;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkFlowSRTStatisticsRequest {
  /** 传输流ID。 */
  FlowId: string;
  /** 输入或输出类型，可选[input|output]。 */
  Type: string;
  /** 输入或输出Id。 */
  InputOutputId: string;
  /** 主通道或备通道，可选[0|1]。 */
  Pipeline: string;
  /** 统计的开始时间，默认为前一小时，最多支持查询近7天。UTC时间，如'2020-01-01T12:00:00Z'。 */
  StartTime: string;
  /** 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。UTC时间，如'2020-01-01T12:00:00Z'。 */
  EndTime: string;
  /** 查询间隔，可选[5s|1min|5min|15min]。 */
  Period: string;
}

declare interface DescribeStreamLinkFlowSRTStatisticsResponse {
  /** 传输流的SRT质量数据列表。 */
  Infos: FlowSRTInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkFlowStatisticsRequest {
  /** 传输流ID。 */
  FlowId: string;
  /** 输入或输出类型，可选[input|output]。 */
  Type: string;
  /** 输入或输出Id。 */
  InputOutputId: string;
  /** 主通道或备通道，可选[0|1]。 */
  Pipeline: string;
  /** 查询间隔，可选[5s|1min|5min|15min]。 */
  Period: string;
  /** 统计的开始时间，默认为前一小时，最多支持查询近7天。UTC时间，如'2020-01-01T12:00:00Z'。 */
  StartTime: string;
  /** 统计的结束时间，默认为StartTime后一小时，最多支持查询24小时的数据。UTC时间，如'2020-01-01T12:00:00Z'。 */
  EndTime: string;
}

declare interface DescribeStreamLinkFlowStatisticsResponse {
  /** 传输流的媒体数据列表。 */
  Infos: FlowStatisticsArray[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkFlowsRequest {
  /** 当前页数，默认1。 */
  PageNum?: number;
  /** 每页大小，默认10。 */
  PageSize?: number;
}

declare interface DescribeStreamLinkFlowsResponse {
  /** 流的配置信息列表。 */
  Infos: DescribeFlow[];
  /** 当前页数。 */
  PageNum: number;
  /** 每页大小。 */
  PageSize: number;
  /** 总数量。 */
  TotalNum: number;
  /** 总页数。 */
  TotalPage: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStreamLinkRegionsRequest {
}

declare interface DescribeStreamLinkRegionsResponse {
  /** 媒体传输地区信息。 */
  Info?: StreamLinkRegionInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskDetailRequest {
  /** 视频处理任务的任务 ID。 */
  TaskId: string;
}

declare interface DescribeTaskDetailResponse {
  /** 任务类型，目前取值有：WorkflowTask：视频工作流处理任务。EditMediaTask：视频编辑任务。LiveStreamProcessTask：直播流处理任务。ScheduleTask：编排处理任务。EvaluationTask：评测任务。 */
  TaskType?: string;
  /** 任务状态，取值：WAITING：等待中；PROCESSING：处理中；FINISH：已完成。 */
  Status?: string;
  /** 任务的创建时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  CreateTime?: string;
  /** 任务开始执行的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  BeginProcessTime?: string;
  /** 任务执行完毕的时间，采用 [ISO 日期格式](https://cloud.tencent.com/document/product/862/37710)。 */
  FinishTime?: string;
  /** 视频编辑任务信息，仅当 TaskType 为 EditMediaTask，该字段有值。 */
  EditMediaTask?: EditMediaTask | null;
  /** 视频处理任务信息，仅当 TaskType 为 WorkflowTask，该字段有值。 */
  WorkflowTask?: WorkflowTask | null;
  /** 直播流处理任务信息，仅当 TaskType 为 LiveStreamProcessTask，该字段有值。 */
  LiveStreamProcessTask?: LiveStreamProcessTask | null;
  /** 任务的事件通知信息。 */
  TaskNotifyConfig?: TaskNotifyConfig | null;
  /** 任务流的优先级，取值范围为 [-10, 10]。 */
  TasksPriority?: number;
  /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。 */
  SessionId?: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。 */
  SessionContext?: string;
  /** 扩展信息字段，仅用于特定场景。 */
  ExtInfo?: string;
  /** 编排处理任务信息，仅当 TaskType 为 ScheduleTask，该字段有值。 */
  ScheduleTask?: ScheduleTask | null;
  /** 直播编排处理任务信息，仅当 TaskType 为 LiveScheduleTask，该字段有值。 */
  LiveScheduleTask?: LiveScheduleTask | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TaskSet?: TaskSimpleInfo[];
  /** 翻页标识，当请求未返回所有数据，该字段表示下一条记录的 ID。当该字段为空字符串，说明已无更多数据。 */
  ScrollToken?: string;
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTranscodeTemplatesRequest {
  /** 转码模板唯一标识过滤条件，数组长度限制：100。 */
  Definitions?: number[];
  /** 模板类型过滤条件，可选值：Preset：系统预置模板；Custom：用户自定义模板。 */
  Type?: string;
  /** 封装格式过滤条件，可选值：Video：视频格式，可以同时包含视频流和音频流的封装格式板；PureAudio：纯音频格式，只能包含音频流的封装格式。 */
  ContainerType?: string;
  /** （建议使用TranscodeType代替）极速高清过滤条件，用于过滤普通转码或极速高清转码模板，可选值：Common：普通转码模板；TEHD：极速高清模板。 */
  TEHDType?: string;
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 返回记录条数，默认值：10，最大值：100。 */
  Limit?: number;
  /** 模板类型（替换旧版本 TEHDType），可选值：Common：普通转码模板；TEHD：视频极速高清，老的类型（建议使用 TEHD-100） 。TEHD-100：视频极速高清TEHD-200：音频极速高清Enhance：音视频增强模板。默认空，不限制类型。 */
  TranscodeType?: string;
  /** 转码模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
  /** 视频场景化，可选值： normal：通用转码场景：通用转码压缩场景。 pgc：PGC高清影视：压缩时会注重影视剧的观看体验，根据影视剧特性进行ROI编码，同时保留高质量的视频内容和音频。 materials_video：高清素材：素材资源类场景，对画质要求极高，较多透明画面内容，在压缩的同时接近视觉无损。 ugc：UGC内容：适用于广泛的UGC/短视频场景，针对短视频的特性优化编码码率， 画质提升，提升业务QOS/QOE指标。 e-commerce_video：秀场/电商类：压缩时会强调细节清晰度和ROI区域提升，尤其注重保持人脸区域的画质。 educational_video：教育类：压缩时会强调文字和图像的清晰度和可读性，以便学生更好地理解内容，确保讲解内容清晰传达。 no_config：未配置。 */
  SceneType?: string;
  /** 转码策略，可选值： ultra_compress：极致压缩：相比标准压缩，该策略能在保证一定画质的基础上最大限度压缩码率，极大节约带宽和存储成本。 standard_compress：综合最优：平衡压缩率与画质，在保证主观画质没有明显降低的情况下尽可能压缩文件。该策略仅收取音视频极速高清转码费用。 high_compress：码率优先：优先保证降低文件体积大小，可能有一定画质损失。该策略仅收取音视频极速高清转码费用。 low_compress：画质优先：优先保证画质，压缩出来的文件体积可能相对较大。该策略仅收取音视频极速高清转码费用。 no_config：未配置。 */
  CompressType?: string;
}

declare interface DescribeTranscodeTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 转码模板详情列表。 */
  TranscodeTemplateSet?: TranscodeTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoDatabaseEntryTaskDetailRequest {
  /** 待查询的任务Id */
  TaskId: string;
}

declare interface DescribeVideoDatabaseEntryTaskDetailResponse {
  /** 查询的任务Id */
  TaskId?: string | null;
  /** 查询的任务的状态，可能为WAITING、PROCESSING、FAIL、SUCCESS。 */
  Status?: string | null;
  /** 查询的任务的结果 */
  VideoDBEntryTaskResults?: VideoDBEntryTaskResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVideoSearchTaskDetailRequest {
  /** 待查询的任务Id */
  TaskId: string;
}

declare interface DescribeVideoSearchTaskDetailResponse {
  /** 查询的任务Id */
  TaskId?: string | null;
  /** 查询的任务的状态，可能为WAITING、PROCESSING、FAIL、SUCCESS。 */
  Status?: string | null;
  /** 查询的任务的结果 */
  SearchTaskResults?: SearchTaskResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 水印模板标识过滤条件，长度限制：64 个字符。 */
  Name?: string;
}

declare interface DescribeWatermarkTemplatesResponse {
  /** 符合过滤条件的记录总数。 */
  TotalCount?: number;
  /** 水印模板详情列表。 */
  WatermarkTemplateSet?: WatermarkTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 工作流信息数组。 */
  WorkflowInfoSet?: WorkflowInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableScheduleRequest {
  /** 编排唯一表示。 */
  ScheduleId: number;
}

declare interface DisableScheduleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableWorkflowRequest {
  /** 工作流 ID。 */
  WorkflowId: number;
}

declare interface DisableWorkflowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EditMediaRequest {
  /** 输入的视频文件信息。 */
  FileInfos: EditMediaFileInfo[];
  /** 媒体处理输出文件的目标存储。 */
  OutputStorage: TaskOutputStorage;
  /** 媒体处理输出文件的目标路径。注意：对于复杂合成任务，路径中的文件名只可为数字、字母、-、_ 的组合，最长 64 个字符。 */
  OutputObjectPath: string;
  /** 【剪辑】任务生成的文件配置。 */
  OutputConfig?: EditMediaOutputConfig;
  /** 【合成】任务配置。注意：当其不为空时，认为是合成任务，否则按剪辑任务处理。 */
  ComposeConfig?: ComposeMediaConfig;
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
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableScheduleRequest {
  /** 编排唯一标识。 */
  ScheduleId: number;
}

declare interface EnableScheduleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableWorkflowRequest {
  /** 工作流 ID。 */
  WorkflowId: number;
}

declare interface EnableWorkflowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ManageTaskRequest {
  /** 操作类型，取值范围：Abort：终止任务。使用说明：若 [任务类型](/document/product/862/37614) 为直播流处理任务（LiveStreamProcessTask），支持终止 [任务状态](/document/product/862/37614) 为等待中（WAITING）或处理中（PROCESSING）的任务；否则，对于其他 [任务类型](/document/product/862/37614)，只支持终止 [任务状态](/document/product/862/37614) 为等待中（WAITING）的任务。 */
  OperationType: string;
  /** 视频处理的任务 ID。 */
  TaskId: string;
}

declare interface ManageTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 语音翻译控制参数。 */
  TranslateConfigure?: TranslateConfigureInfoForUpdate;
}

declare interface ModifyAIRecognitionTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 是否为纯音频，0表示视频模版，1表示纯音频模版当值为1：1. StreamInfos.N.RemoveVideo=12. StreamInfos.N.RemoveAudio=03. StreamInfos.N.Video.Codec=copy当值为0：1. StreamInfos.N.Video.Codec不能为copy2. StreamInfos.N.Video.Fps不能为null */
  PureAudio?: number;
  /** hls 分片类型，可选值： ts-segment：HLS+TS 切片 ts-byterange：HLS+TS byte range mp4-segment：HLS+MP4 切片 mp4-byterange：HLS+MP4 byte range ts-packed-audio：TS+Packed Audio mp4-packed-audio：MP4+Packed Audio 默认值：ts-segment 注：自适应码流的hls分片格式已此字段为准 */
  SegmentType?: string;
}

declare interface ModifyAdaptiveDynamicStreamingTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 图片格式，取值可以为 jpg、png、webp。 */
  Format?: string;
}

declare interface ModifyImageSpriteTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyQualityControlTemplateRequest {
  /** 媒体质检模板唯一标识。 */
  Definition: number;
  /** 媒体质检模板名称，长度限制：64 个字符。 */
  Name?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 媒体质检配置参数。 */
  QualityControlItemSet?: QualityControlItemConfig[];
}

declare interface ModifyQualityControlTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 图片格式，取值为 jpg、png、webp。 */
  Format?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType?: string;
}

declare interface ModifySampleSnapshotTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyScheduleRequest {
  /** 编排唯一标识。 */
  ScheduleId: number;
  /** 编排名称。 */
  ScheduleName?: string;
  /** 编排绑定的触发规则。 */
  Trigger?: WorkflowTrigger;
  /** 编排任务列表。注意：内部不允许部分更新，如果需要更新需全量提交编排任务列表。 */
  Activities?: Activity[];
  /** 媒体处理的文件输出存储位置。 */
  OutputStorage?: TaskOutputStorage;
  /** 媒体处理生成的文件输出的目标目录，必选以 / 开头和结尾。注意：如果设置为空，则表示取消老配置的OutputDir值。 */
  OutputDir?: string;
  /** 任务的事件通知配置。 */
  TaskNotifyConfig?: TaskNotifyConfig;
  /** 资源ID，需要保证对应资源是开启状态。 */
  ResourceId?: string;
}

declare interface ModifyScheduleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 图片格式，取值可以为 jpg、png、webp。 */
  Format?: string;
  /** 模板描述信息，长度限制：256 个字符。 */
  Comment?: string;
  /** 填充方式，当视频流配置宽高参数与原始视频的宽高比不一致时，对转码的处理方式，即为“填充”。可选填充方式： stretch：拉伸，对每一帧进行拉伸，填满整个画面，可能导致转码后的视频被“压扁“或者“拉长“；black：留黑，保持视频宽高比不变，边缘剩余部分使用黑色填充。white：留白，保持视频宽高比不变，边缘剩余部分使用白色填充。gauss：高斯模糊，保持视频宽高比不变，边缘剩余部分使用高斯模糊。默认值：black 。 */
  FillType?: string;
}

declare interface ModifySnapshotByTimeOffsetTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStreamLinkEventRequest {
  /** 媒体传输事件Event Id。 */
  EventId: string;
  /** 需要修改的事件名称。 */
  EventName: string;
  /** Event的描述信息。 */
  Description?: string;
}

declare interface ModifyStreamLinkEventResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStreamLinkFlowRequest {
  /** 流Id。 */
  FlowId: string;
  /** 需要修改的流名称。 */
  FlowName: string;
}

declare interface ModifyStreamLinkFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStreamLinkInputRequest {
  /** 流Id。 */
  FlowId: string;
  /** 需要修改的Input信息。 */
  Input: ModifyInput;
}

declare interface ModifyStreamLinkInputResponse {
  /** 修改后的Input信息。 */
  Info: DescribeInput;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyStreamLinkOutputInfoRequest {
  /** 流Id。 */
  FlowId: string;
  /** 需要修改的Output配置。 */
  Output: ModifyOutputInfo;
}

declare interface ModifyStreamLinkOutputInfoResponse {
  /** 修改后的Output配置。 */
  Info: DescribeOutput;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  ImageUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ParseLiveStreamProcessNotificationRequest {
  /** 从 CMQ 获取到的直播流事件通知内容。 */
  Content: string;
}

declare interface ParseLiveStreamProcessNotificationResponse {
  /** 直播流处理结果类型，包含：AiReviewResult：内容审核结果；AiRecognitionResult：内容识别结果；LiveRecordResult：直播录制结果；ProcessEof：直播流处理结束。 */
  NotificationType?: string;
  /** 视频处理任务 ID。 */
  TaskId?: string;
  /** 直播流处理错误信息，当 NotificationType 为 ProcessEof 时有效。 */
  ProcessEofInfo?: LiveStreamProcessErrorInfo | null;
  /** 内容审核结果，当 NotificationType 为 AiReviewResult 时有效。 */
  AiReviewResultInfo?: LiveStreamAiReviewResultInfo | null;
  /** 内容识别结果，当 NotificationType 为 AiRecognitionResult 时有效。 */
  AiRecognitionResultInfo?: LiveStreamAiRecognitionResultInfo | null;
  /** 内容分析结果，当 NotificationType 为 AiAnalysisResult 时有效。 */
  AiAnalysisResultInfo?: LiveStreamAiAnalysisResultInfo | null;
  /** 媒体质检结果，当 NotificationType 为 AiQualityControlResult 时有效。 */
  AiQualityControlResultInfo?: LiveStreamAiQualityControlResultInfo | null;
  /** 直播录制结果，当 NotificationType 为 LiveRecordResult 时有效。 */
  LiveRecordResultInfo?: LiveStreamRecordResultInfo | null;
  /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。 */
  SessionId?: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。 */
  SessionContext?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ParseNotificationRequest {
  /** 从 CMQ 获取到的事件通知内容。 */
  Content: string;
}

declare interface ParseNotificationResponse {
  /** 支持事件类型，目前取值有：WorkflowTask：视频工作流处理任务。EditMediaTask：视频编辑任务。ScheduleTask：编排任务。 */
  EventType?: string;
  /** 视频处理任务信息，仅当 EventType 为 WorkflowTask，该字段有值。 */
  WorkflowTaskEvent?: WorkflowTask | null;
  /** 视频编辑任务信息，仅当 EventType 为 EditMediaTask，该字段有值。 */
  EditMediaTaskEvent?: EditMediaTask | null;
  /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长50个字符，不带或者带空字符串表示不做去重。 */
  SessionId?: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长1000个字符。 */
  SessionContext?: string;
  /** 编排任务信息，仅当 EventType 为 ScheduleTask，该字段有值。 */
  ScheduleTaskEvent?: ScheduleTask | null;
  /** - 过期时间，事件通知签名过期 UNIX 时间戳。- 来自媒体处理的消息通知默认过期时间是10分钟，如果一条消息通知中的 Timestamp 值所指定的时间已经过期，则可以判定这条通知无效，进而可以防止网络重放攻击。- Timestamp 的格式为十进制 UNIX 时间戳，即从1970年01月01日（UTC/GMT 的午夜）开始所经过的秒数。 */
  Timestamp?: number;
  /** 事件通知安全签名 Sign = MD5（Timestamp + NotifyKey）。说明：媒体处理把Timestamp 和 TaskNotifyConfig 里面的NotifyKey 进行字符串拼接后通过 MD5 计算得出 Sign 值，并将其放在通知消息里，您的后台服务器在收到通知消息后可以根据同样的算法确认 Sign 是否正确，进而确认消息是否确实来自媒体处理后台。 */
  Sign?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ProcessImageRequest {
  /** 图片处理的文件输入信息。 */
  InputInfo: MediaInputInfo;
  /** 图片处理输出文件的目标存储。不填则继承 InputInfo 中的存储位置。 */
  OutputStorage?: TaskOutputStorage;
  /** 图片处理生成的文件输出的路径。如果不填表示与 InputInfo 中文件所在的目录一致。如果是目录，如`/image/201907/`，表示继承原文件名输出到该目录。 */
  OutputDir?: string;
  /** 图片处理参数。 */
  ImageTask?: ImageTaskInput;
}

declare interface ProcessImageResponse {
  /** 任务 ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 视频内容分析类型任务参数。 */
  AiAnalysisTask?: AiAnalysisTaskInput;
  /** 媒体质检类型任务参数。 */
  AiQualityControlTask?: AiQualityControlTaskInput;
  /** 用于去重的识别码，如果七天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不带或者带空字符串表示不做去重。 */
  SessionId?: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
  SessionContext?: string;
  /** 直播编排ID。注意1：对于OutputStorage、OutputDir参数：当服务编排中子任务节点配置了OutputStorage、OutputDir时，该子任务节点中配置的输出作为子任务的输出。当服务编排中子任务节点没有配置OutputStorage、OutputDir时，若对直播流发起处理（ProcessLiveStream）有输出，将覆盖原有编排的默认输出。注意2：对于TaskNotifyConfig参数，若创建任务接口（ProcessLiveStream）有设置，将覆盖原有编排的默认回调。 */
  ScheduleId?: number;
}

declare interface ProcessLiveStreamResponse {
  /** 任务 ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ProcessMediaRequest {
  /** 媒体处理的文件输入信息。 */
  InputInfo: MediaInputInfo;
  /** 媒体处理输出文件的目标存储。不填则继承 InputInfo 中的存储位置。注意：当InputInfo.Type为URL时，该参数是必填项 */
  OutputStorage?: TaskOutputStorage;
  /** 媒体处理生成的文件输出的目标目录，必选以 / 开头和结尾，如`/movie/201907/`。如果不填，表示与 InputInfo 中文件所在的目录一致。 */
  OutputDir?: string;
  /** 编排ID。注意1：对于OutputStorage、OutputDir参数：当服务编排中子任务节点配置了OutputStorage、OutputDir时，该子任务节点中配置的输出作为子任务的输出。当服务编排中子任务节点没有配置OutputStorage、OutputDir时，若创建任务接口（ProcessMedia）有指定输出，将覆盖原有编排的默认输出。即输出设置的优先级：编排子任务节点 > 任务接口指定 > 对应编排内的配置 注意2：对于TaskNotifyConfig参数，若创建任务接口（ProcessMedia）有设置，将覆盖原有编排的默认回调。注意3：编排的 Trigger 只是用来自动化触发场景，在手动发起的请求中已经配置的 Trigger 无意义。 */
  ScheduleId?: number;
  /** 媒体处理类型任务参数。 */
  MediaProcessTask?: MediaProcessTaskInput;
  /** 视频内容审核类型任务参数。 */
  AiContentReviewTask?: AiContentReviewTaskInput;
  /** 视频内容分析类型任务参数。 */
  AiAnalysisTask?: AiAnalysisTaskInput;
  /** 视频内容识别类型任务参数。 */
  AiRecognitionTask?: AiRecognitionTaskInput;
  /** 媒体质检类型任务参数。 */
  AiQualityControlTask?: AiQualityControlTaskInput;
  /** 任务的事件通知信息，不填代表不获取事件通知。 */
  TaskNotifyConfig?: TaskNotifyConfig;
  /** 任务流的优先级，数值越大优先级越高，取值范围是-10到 10，不填代表0。 */
  TasksPriority?: number;
  /** 用于去重的识别码，如果三天内曾有过相同的识别码的请求，则本次的请求会返回错误。最长 50 个字符，不传该参数或者参数为空字符串则本次请求不做去重操作。 */
  SessionId?: string;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
  SessionContext?: string;
  /** 任务类型，默认Online Online：实时任务 Offline：闲时任务，不保证实效性，默认3天内处理完 */
  TaskType?: string;
}

declare interface ProcessMediaResponse {
  /** 任务 ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 视频处理生成的文件输出的目标目录，必选以 / 开头和结尾，如`/movie/201907/`。如果不填，表示与触发文件所在的目录一致，即`{inputDir}`。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartStreamLinkFlowRequest {
  /** 流Id。 */
  FlowId: string;
}

declare interface StartStreamLinkFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopStreamLinkFlowRequest {
  /** 流Id。 */
  FlowId: string;
}

declare interface StopStreamLinkFlowResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface WithdrawsWatermarkRequest {
  /** 输入媒体文件存储信息。 */
  InputInfo: MediaInputInfo;
  /** 任务的事件通知信息，不填代表不获取事件通知。 */
  TaskNotifyConfig?: TaskNotifyConfig;
  /** 来源上下文，用于透传用户请求信息，任务流状态变更回调将返回该字段值，最长 1000 个字符。 */
  SessionContext?: string;
}

declare interface WithdrawsWatermarkResponse {
  /** 任务 ID，可以通过该 ID 查询任务状态和结果。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Mps 媒体处理} */
declare interface Mps {
  (): Versions;
  /** 批量删除媒体传输流 {@link BatchDeleteStreamLinkFlowRequest} {@link BatchDeleteStreamLinkFlowResponse} */
  BatchDeleteStreamLinkFlow(data: BatchDeleteStreamLinkFlowRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteStreamLinkFlowResponse>;
  /** 批量开启媒体传输流 {@link BatchStartStreamLinkFlowRequest} {@link BatchStartStreamLinkFlowResponse} */
  BatchStartStreamLinkFlow(data: BatchStartStreamLinkFlowRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStartStreamLinkFlowResponse>;
  /** 批量停止媒体传输流 {@link BatchStopStreamLinkFlowRequest} {@link BatchStopStreamLinkFlowResponse} */
  BatchStopStreamLinkFlow(data: BatchStopStreamLinkFlowRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopStreamLinkFlowResponse>;
  /** 创建内容分析模板 {@link CreateAIAnalysisTemplateRequest} {@link CreateAIAnalysisTemplateResponse} */
  CreateAIAnalysisTemplate(data?: CreateAIAnalysisTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAIAnalysisTemplateResponse>;
  /** 创建内容识别模板 {@link CreateAIRecognitionTemplateRequest} {@link CreateAIRecognitionTemplateResponse} */
  CreateAIRecognitionTemplate(data?: CreateAIRecognitionTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAIRecognitionTemplateResponse>;
  /** 创建转自适应码流模板 {@link CreateAdaptiveDynamicStreamingTemplateRequest} {@link CreateAdaptiveDynamicStreamingTemplateResponse} */
  CreateAdaptiveDynamicStreamingTemplate(data: CreateAdaptiveDynamicStreamingTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAdaptiveDynamicStreamingTemplateResponse>;
  /** 创建转动图模板 {@link CreateAnimatedGraphicsTemplateRequest} {@link CreateAnimatedGraphicsTemplateResponse} */
  CreateAnimatedGraphicsTemplate(data: CreateAnimatedGraphicsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAnimatedGraphicsTemplateResponse>;
  /** 创建内容审核模板 {@link CreateContentReviewTemplateRequest} {@link CreateContentReviewTemplateResponse} */
  CreateContentReviewTemplate(data?: CreateContentReviewTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateContentReviewTemplateResponse>;
  /** 创建雪碧图模板 {@link CreateImageSpriteTemplateRequest} {@link CreateImageSpriteTemplateResponse} */
  CreateImageSpriteTemplate(data: CreateImageSpriteTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageSpriteTemplateResponse>;
  /** 创建素材样本 {@link CreatePersonSampleRequest} {@link CreatePersonSampleResponse} */
  CreatePersonSample(data: CreatePersonSampleRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePersonSampleResponse>;
  /** 创建媒体质检模板 {@link CreateQualityControlTemplateRequest} {@link CreateQualityControlTemplateResponse} */
  CreateQualityControlTemplate(data: CreateQualityControlTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateQualityControlTemplateResponse>;
  /** 创建采样截图模板 {@link CreateSampleSnapshotTemplateRequest} {@link CreateSampleSnapshotTemplateResponse} */
  CreateSampleSnapshotTemplate(data: CreateSampleSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSampleSnapshotTemplateResponse>;
  /** 创建编排 {@link CreateScheduleRequest} {@link CreateScheduleResponse} */
  CreateSchedule(data: CreateScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScheduleResponse>;
  /** 创建指定时间点截图模板 {@link CreateSnapshotByTimeOffsetTemplateRequest} {@link CreateSnapshotByTimeOffsetTemplateResponse} */
  CreateSnapshotByTimeOffsetTemplate(data?: CreateSnapshotByTimeOffsetTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSnapshotByTimeOffsetTemplateResponse>;
  /** 创建媒体传输事件 {@link CreateStreamLinkEventRequest} {@link CreateStreamLinkEventResponse} */
  CreateStreamLinkEvent(data: CreateStreamLinkEventRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStreamLinkEventResponse>;
  /** 创建媒体传输流 {@link CreateStreamLinkFlowRequest} {@link CreateStreamLinkFlowResponse} */
  CreateStreamLinkFlow(data: CreateStreamLinkFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStreamLinkFlowResponse>;
  /** 创建媒体传输输入 {@link CreateStreamLinkInputRequest} {@link CreateStreamLinkInputResponse} */
  CreateStreamLinkInput(data: CreateStreamLinkInputRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStreamLinkInputResponse>;
  /** 创建媒体传输的输出信息 {@link CreateStreamLinkOutputInfoRequest} {@link CreateStreamLinkOutputInfoResponse} */
  CreateStreamLinkOutputInfo(data: CreateStreamLinkOutputInfoRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStreamLinkOutputInfoResponse>;
  /** 创建转码模板 {@link CreateTranscodeTemplateRequest} {@link CreateTranscodeTemplateResponse} */
  CreateTranscodeTemplate(data: CreateTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTranscodeTemplateResponse>;
  /** 创建视频检索的入库任务 {@link CreateVideoDatabaseEntryTaskRequest} {@link CreateVideoDatabaseEntryTaskResponse} */
  CreateVideoDatabaseEntryTask(data: CreateVideoDatabaseEntryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVideoDatabaseEntryTaskResponse>;
  /** 创建视频检索任务 {@link CreateVideoSearchTaskRequest} {@link CreateVideoSearchTaskResponse} */
  CreateVideoSearchTask(data: CreateVideoSearchTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVideoSearchTaskResponse>;
  /** 创建水印模板 {@link CreateWatermarkTemplateRequest} {@link CreateWatermarkTemplateResponse} */
  CreateWatermarkTemplate(data: CreateWatermarkTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWatermarkTemplateResponse>;
  /** 创建关键词样本 {@link CreateWordSamplesRequest} {@link CreateWordSamplesResponse} */
  CreateWordSamples(data: CreateWordSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWordSamplesResponse>;
  /** 创建工作流 {@link CreateWorkflowRequest} {@link CreateWorkflowResponse} */
  CreateWorkflow(data: CreateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowResponse>;
  /** 删除内容分析模板 {@link DeleteAIAnalysisTemplateRequest} {@link DeleteAIAnalysisTemplateResponse} */
  DeleteAIAnalysisTemplate(data: DeleteAIAnalysisTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAIAnalysisTemplateResponse>;
  /** 删除内容识别模板 {@link DeleteAIRecognitionTemplateRequest} {@link DeleteAIRecognitionTemplateResponse} */
  DeleteAIRecognitionTemplate(data: DeleteAIRecognitionTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAIRecognitionTemplateResponse>;
  /** 删除转自适应码流模板 {@link DeleteAdaptiveDynamicStreamingTemplateRequest} {@link DeleteAdaptiveDynamicStreamingTemplateResponse} */
  DeleteAdaptiveDynamicStreamingTemplate(data: DeleteAdaptiveDynamicStreamingTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAdaptiveDynamicStreamingTemplateResponse>;
  /** 删除转动图模板 {@link DeleteAnimatedGraphicsTemplateRequest} {@link DeleteAnimatedGraphicsTemplateResponse} */
  DeleteAnimatedGraphicsTemplate(data: DeleteAnimatedGraphicsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAnimatedGraphicsTemplateResponse>;
  /** 删除内容审核模板 {@link DeleteContentReviewTemplateRequest} {@link DeleteContentReviewTemplateResponse} */
  DeleteContentReviewTemplate(data: DeleteContentReviewTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteContentReviewTemplateResponse>;
  /** 删除雪碧图模板 {@link DeleteImageSpriteTemplateRequest} {@link DeleteImageSpriteTemplateResponse} */
  DeleteImageSpriteTemplate(data: DeleteImageSpriteTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImageSpriteTemplateResponse>;
  /** 删除素材样本 {@link DeletePersonSampleRequest} {@link DeletePersonSampleResponse} */
  DeletePersonSample(data: DeletePersonSampleRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePersonSampleResponse>;
  /** 删除媒体质检模板 {@link DeleteQualityControlTemplateRequest} {@link DeleteQualityControlTemplateResponse} */
  DeleteQualityControlTemplate(data: DeleteQualityControlTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQualityControlTemplateResponse>;
  /** 删除采样截图模板 {@link DeleteSampleSnapshotTemplateRequest} {@link DeleteSampleSnapshotTemplateResponse} */
  DeleteSampleSnapshotTemplate(data: DeleteSampleSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSampleSnapshotTemplateResponse>;
  /** 删除编排 {@link DeleteScheduleRequest} {@link DeleteScheduleResponse} */
  DeleteSchedule(data: DeleteScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScheduleResponse>;
  /** 删除指定时间点截图模板 {@link DeleteSnapshotByTimeOffsetTemplateRequest} {@link DeleteSnapshotByTimeOffsetTemplateResponse} */
  DeleteSnapshotByTimeOffsetTemplate(data: DeleteSnapshotByTimeOffsetTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSnapshotByTimeOffsetTemplateResponse>;
  /** 删除媒体传输事件 {@link DeleteStreamLinkEventRequest} {@link DeleteStreamLinkEventResponse} */
  DeleteStreamLinkEvent(data: DeleteStreamLinkEventRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStreamLinkEventResponse>;
  /** 删除媒体传输流 {@link DeleteStreamLinkFlowRequest} {@link DeleteStreamLinkFlowResponse} */
  DeleteStreamLinkFlow(data: DeleteStreamLinkFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStreamLinkFlowResponse>;
  /** 删除媒体传输输出 {@link DeleteStreamLinkOutputRequest} {@link DeleteStreamLinkOutputResponse} */
  DeleteStreamLinkOutput(data: DeleteStreamLinkOutputRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStreamLinkOutputResponse>;
  /** 删除转码模板 {@link DeleteTranscodeTemplateRequest} {@link DeleteTranscodeTemplateResponse} */
  DeleteTranscodeTemplate(data: DeleteTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTranscodeTemplateResponse>;
  /** 删除水印模板 {@link DeleteWatermarkTemplateRequest} {@link DeleteWatermarkTemplateResponse} */
  DeleteWatermarkTemplate(data: DeleteWatermarkTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWatermarkTemplateResponse>;
  /** 删除关键词样本 {@link DeleteWordSamplesRequest} {@link DeleteWordSamplesResponse} */
  DeleteWordSamples(data: DeleteWordSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWordSamplesResponse>;
  /** 删除工作流 {@link DeleteWorkflowRequest} {@link DeleteWorkflowResponse} */
  DeleteWorkflow(data: DeleteWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowResponse>;
  /** 获取内容分析模板列表 {@link DescribeAIAnalysisTemplatesRequest} {@link DescribeAIAnalysisTemplatesResponse} */
  DescribeAIAnalysisTemplates(data?: DescribeAIAnalysisTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIAnalysisTemplatesResponse>;
  /** 获取内容识别模板列表 {@link DescribeAIRecognitionTemplatesRequest} {@link DescribeAIRecognitionTemplatesResponse} */
  DescribeAIRecognitionTemplates(data?: DescribeAIRecognitionTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAIRecognitionTemplatesResponse>;
  /** 获取转自适应码流模板列表 {@link DescribeAdaptiveDynamicStreamingTemplatesRequest} {@link DescribeAdaptiveDynamicStreamingTemplatesResponse} */
  DescribeAdaptiveDynamicStreamingTemplates(data?: DescribeAdaptiveDynamicStreamingTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAdaptiveDynamicStreamingTemplatesResponse>;
  /** 获取转动图模板列表 {@link DescribeAnimatedGraphicsTemplatesRequest} {@link DescribeAnimatedGraphicsTemplatesResponse} */
  DescribeAnimatedGraphicsTemplates(data?: DescribeAnimatedGraphicsTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAnimatedGraphicsTemplatesResponse>;
  /** 获取智能审核模板列表 {@link DescribeContentReviewTemplatesRequest} {@link DescribeContentReviewTemplatesResponse} */
  DescribeContentReviewTemplates(data?: DescribeContentReviewTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContentReviewTemplatesResponse>;
  /** 获取雪碧图模板列表 {@link DescribeImageSpriteTemplatesRequest} {@link DescribeImageSpriteTemplatesResponse} */
  DescribeImageSpriteTemplates(data?: DescribeImageSpriteTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageSpriteTemplatesResponse>;
  /** 获取媒体元信息 {@link DescribeMediaMetaDataRequest} {@link DescribeMediaMetaDataResponse} */
  DescribeMediaMetaData(data: DescribeMediaMetaDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMediaMetaDataResponse>;
  /** 获取素材样本列表 {@link DescribePersonSamplesRequest} {@link DescribePersonSamplesResponse} */
  DescribePersonSamples(data?: DescribePersonSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePersonSamplesResponse>;
  /** 获取媒体质检模板列表 {@link DescribeQualityControlTemplatesRequest} {@link DescribeQualityControlTemplatesResponse} */
  DescribeQualityControlTemplates(data?: DescribeQualityControlTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQualityControlTemplatesResponse>;
  /** 获取采样截图模板列表 {@link DescribeSampleSnapshotTemplatesRequest} {@link DescribeSampleSnapshotTemplatesResponse} */
  DescribeSampleSnapshotTemplates(data?: DescribeSampleSnapshotTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSampleSnapshotTemplatesResponse>;
  /** 查询编排 {@link DescribeSchedulesRequest} {@link DescribeSchedulesResponse} */
  DescribeSchedules(data?: DescribeSchedulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSchedulesResponse>;
  /** 获取指定时间点截图模板列表 {@link DescribeSnapshotByTimeOffsetTemplatesRequest} {@link DescribeSnapshotByTimeOffsetTemplatesResponse} */
  DescribeSnapshotByTimeOffsetTemplates(data?: DescribeSnapshotByTimeOffsetTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotByTimeOffsetTemplatesResponse>;
  /** 查询媒体传输开通状态 {@link DescribeStreamLinkActivateStateRequest} {@link DescribeStreamLinkActivateStateResponse} */
  DescribeStreamLinkActivateState(data?: DescribeStreamLinkActivateStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkActivateStateResponse>;
  /** 查询媒体传输事件 {@link DescribeStreamLinkEventRequest} {@link DescribeStreamLinkEventResponse} */
  DescribeStreamLinkEvent(data: DescribeStreamLinkEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkEventResponse>;
  /** 查询媒体传输事件关联的所有媒体输入流的配置信息 {@link DescribeStreamLinkEventAttachedFlowsRequest} {@link DescribeStreamLinkEventAttachedFlowsResponse} */
  DescribeStreamLinkEventAttachedFlows(data: DescribeStreamLinkEventAttachedFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkEventAttachedFlowsResponse>;
  /** 批量查询媒体传输事件 {@link DescribeStreamLinkEventsRequest} {@link DescribeStreamLinkEventsResponse} */
  DescribeStreamLinkEvents(data?: DescribeStreamLinkEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkEventsResponse>;
  /** 查询媒体输入流 {@link DescribeStreamLinkFlowRequest} {@link DescribeStreamLinkFlowResponse} */
  DescribeStreamLinkFlow(data: DescribeStreamLinkFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkFlowResponse>;
  /** 查询传输流的日志 {@link DescribeStreamLinkFlowLogsRequest} {@link DescribeStreamLinkFlowLogsResponse} */
  DescribeStreamLinkFlowLogs(data: DescribeStreamLinkFlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkFlowLogsResponse>;
  /** 查询媒体质量数据 {@link DescribeStreamLinkFlowMediaStatisticsRequest} {@link DescribeStreamLinkFlowMediaStatisticsResponse} */
  DescribeStreamLinkFlowMediaStatistics(data: DescribeStreamLinkFlowMediaStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkFlowMediaStatisticsResponse>;
  /** 查询流实时状态接口 {@link DescribeStreamLinkFlowRealtimeStatusRequest} {@link DescribeStreamLinkFlowRealtimeStatusResponse} */
  DescribeStreamLinkFlowRealtimeStatus(data: DescribeStreamLinkFlowRealtimeStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkFlowRealtimeStatusResponse>;
  /** 查询SRT数据信息 {@link DescribeStreamLinkFlowSRTStatisticsRequest} {@link DescribeStreamLinkFlowSRTStatisticsResponse} */
  DescribeStreamLinkFlowSRTStatistics(data: DescribeStreamLinkFlowSRTStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkFlowSRTStatisticsResponse>;
  /** 查询流的媒体质量数据 {@link DescribeStreamLinkFlowStatisticsRequest} {@link DescribeStreamLinkFlowStatisticsResponse} */
  DescribeStreamLinkFlowStatistics(data: DescribeStreamLinkFlowStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkFlowStatisticsResponse>;
  /** 批量查询媒体输入流 {@link DescribeStreamLinkFlowsRequest} {@link DescribeStreamLinkFlowsResponse} */
  DescribeStreamLinkFlows(data?: DescribeStreamLinkFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkFlowsResponse>;
  /** 查询媒体传输地区 {@link DescribeStreamLinkRegionsRequest} {@link DescribeStreamLinkRegionsResponse} */
  DescribeStreamLinkRegions(data?: DescribeStreamLinkRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamLinkRegionsResponse>;
  /** 查询任务详情 {@link DescribeTaskDetailRequest} {@link DescribeTaskDetailResponse} */
  DescribeTaskDetail(data: DescribeTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskDetailResponse>;
  /** 获取任务列表 {@link DescribeTasksRequest} {@link DescribeTasksResponse} */
  DescribeTasks(data: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** 获取转码模板列表 {@link DescribeTranscodeTemplatesRequest} {@link DescribeTranscodeTemplatesResponse} */
  DescribeTranscodeTemplates(data?: DescribeTranscodeTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTranscodeTemplatesResponse>;
  /** 查询视频入库任务详情 {@link DescribeVideoDatabaseEntryTaskDetailRequest} {@link DescribeVideoDatabaseEntryTaskDetailResponse} */
  DescribeVideoDatabaseEntryTaskDetail(data: DescribeVideoDatabaseEntryTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoDatabaseEntryTaskDetailResponse>;
  /** 查询视频检索任务详情 {@link DescribeVideoSearchTaskDetailRequest} {@link DescribeVideoSearchTaskDetailResponse} */
  DescribeVideoSearchTaskDetail(data: DescribeVideoSearchTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVideoSearchTaskDetailResponse>;
  /** 获取水印模板列表 {@link DescribeWatermarkTemplatesRequest} {@link DescribeWatermarkTemplatesResponse} */
  DescribeWatermarkTemplates(data?: DescribeWatermarkTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWatermarkTemplatesResponse>;
  /** 获取关键词样本列表 {@link DescribeWordSamplesRequest} {@link DescribeWordSamplesResponse} */
  DescribeWordSamples(data?: DescribeWordSamplesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWordSamplesResponse>;
  /** 获取工作流列表 {@link DescribeWorkflowsRequest} {@link DescribeWorkflowsResponse} */
  DescribeWorkflows(data?: DescribeWorkflowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowsResponse>;
  /** 禁用编排 {@link DisableScheduleRequest} {@link DisableScheduleResponse} */
  DisableSchedule(data: DisableScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DisableScheduleResponse>;
  /** 禁用工作流 {@link DisableWorkflowRequest} {@link DisableWorkflowResponse} */
  DisableWorkflow(data: DisableWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<DisableWorkflowResponse>;
  /** 编辑视频 {@link EditMediaRequest} {@link EditMediaResponse} */
  EditMedia(data: EditMediaRequest, config?: AxiosRequestConfig): AxiosPromise<EditMediaResponse>;
  /** 启用编排 {@link EnableScheduleRequest} {@link EnableScheduleResponse} */
  EnableSchedule(data: EnableScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<EnableScheduleResponse>;
  /** 启用工作流 {@link EnableWorkflowRequest} {@link EnableWorkflowResponse} */
  EnableWorkflow(data: EnableWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<EnableWorkflowResponse>;
  /** 执行定制 API {@link ExecuteFunctionRequest} {@link ExecuteFunctionResponse} */
  ExecuteFunction(data: ExecuteFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<ExecuteFunctionResponse>;
  /** 任务管理 {@link ManageTaskRequest} {@link ManageTaskResponse} */
  ManageTask(data: ManageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ManageTaskResponse>;
  /** 修改内容分析模板 {@link ModifyAIAnalysisTemplateRequest} {@link ModifyAIAnalysisTemplateResponse} */
  ModifyAIAnalysisTemplate(data: ModifyAIAnalysisTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAIAnalysisTemplateResponse>;
  /** 修改内容识别模板 {@link ModifyAIRecognitionTemplateRequest} {@link ModifyAIRecognitionTemplateResponse} */
  ModifyAIRecognitionTemplate(data: ModifyAIRecognitionTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAIRecognitionTemplateResponse>;
  /** 修改转自适应码流模板 {@link ModifyAdaptiveDynamicStreamingTemplateRequest} {@link ModifyAdaptiveDynamicStreamingTemplateResponse} */
  ModifyAdaptiveDynamicStreamingTemplate(data: ModifyAdaptiveDynamicStreamingTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAdaptiveDynamicStreamingTemplateResponse>;
  /** 修改转动图模板 {@link ModifyAnimatedGraphicsTemplateRequest} {@link ModifyAnimatedGraphicsTemplateResponse} */
  ModifyAnimatedGraphicsTemplate(data: ModifyAnimatedGraphicsTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAnimatedGraphicsTemplateResponse>;
  /** 修改内容审核模板 {@link ModifyContentReviewTemplateRequest} {@link ModifyContentReviewTemplateResponse} */
  ModifyContentReviewTemplate(data: ModifyContentReviewTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyContentReviewTemplateResponse>;
  /** 修改雪碧图模板 {@link ModifyImageSpriteTemplateRequest} {@link ModifyImageSpriteTemplateResponse} */
  ModifyImageSpriteTemplate(data: ModifyImageSpriteTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyImageSpriteTemplateResponse>;
  /** 修改素材样本 {@link ModifyPersonSampleRequest} {@link ModifyPersonSampleResponse} */
  ModifyPersonSample(data: ModifyPersonSampleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPersonSampleResponse>;
  /** 修改媒体质检模板 {@link ModifyQualityControlTemplateRequest} {@link ModifyQualityControlTemplateResponse} */
  ModifyQualityControlTemplate(data: ModifyQualityControlTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQualityControlTemplateResponse>;
  /** 修改采样截图模板 {@link ModifySampleSnapshotTemplateRequest} {@link ModifySampleSnapshotTemplateResponse} */
  ModifySampleSnapshotTemplate(data: ModifySampleSnapshotTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySampleSnapshotTemplateResponse>;
  /** 修改编排 {@link ModifyScheduleRequest} {@link ModifyScheduleResponse} */
  ModifySchedule(data: ModifyScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyScheduleResponse>;
  /** 修改指定时间点截图模板 {@link ModifySnapshotByTimeOffsetTemplateRequest} {@link ModifySnapshotByTimeOffsetTemplateResponse} */
  ModifySnapshotByTimeOffsetTemplate(data: ModifySnapshotByTimeOffsetTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySnapshotByTimeOffsetTemplateResponse>;
  /** 修改媒体传输事件 {@link ModifyStreamLinkEventRequest} {@link ModifyStreamLinkEventResponse} */
  ModifyStreamLinkEvent(data: ModifyStreamLinkEventRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStreamLinkEventResponse>;
  /** 修改媒体传输流 {@link ModifyStreamLinkFlowRequest} {@link ModifyStreamLinkFlowResponse} */
  ModifyStreamLinkFlow(data: ModifyStreamLinkFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStreamLinkFlowResponse>;
  /** 修改媒体传输输入 {@link ModifyStreamLinkInputRequest} {@link ModifyStreamLinkInputResponse} */
  ModifyStreamLinkInput(data: ModifyStreamLinkInputRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStreamLinkInputResponse>;
  /** 修改媒体传输的输出信息 {@link ModifyStreamLinkOutputInfoRequest} {@link ModifyStreamLinkOutputInfoResponse} */
  ModifyStreamLinkOutputInfo(data: ModifyStreamLinkOutputInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyStreamLinkOutputInfoResponse>;
  /** 修改转码模板 {@link ModifyTranscodeTemplateRequest} {@link ModifyTranscodeTemplateResponse} */
  ModifyTranscodeTemplate(data: ModifyTranscodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTranscodeTemplateResponse>;
  /** 修改水印模板 {@link ModifyWatermarkTemplateRequest} {@link ModifyWatermarkTemplateResponse} */
  ModifyWatermarkTemplate(data: ModifyWatermarkTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWatermarkTemplateResponse>;
  /** 修改关键词样本 {@link ModifyWordSampleRequest} {@link ModifyWordSampleResponse} */
  ModifyWordSample(data: ModifyWordSampleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWordSampleResponse>;
  /** 解析直播流处理结果 {@link ParseLiveStreamProcessNotificationRequest} {@link ParseLiveStreamProcessNotificationResponse} */
  ParseLiveStreamProcessNotification(data: ParseLiveStreamProcessNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<ParseLiveStreamProcessNotificationResponse>;
  /** 解析事件通知 {@link ParseNotificationRequest} {@link ParseNotificationResponse} */
  ParseNotification(data: ParseNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<ParseNotificationResponse>;
  /** 发起图片处理 {@link ProcessImageRequest} {@link ProcessImageResponse} */
  ProcessImage(data: ProcessImageRequest, config?: AxiosRequestConfig): AxiosPromise<ProcessImageResponse>;
  /** 对直播流发起处理 {@link ProcessLiveStreamRequest} {@link ProcessLiveStreamResponse} */
  ProcessLiveStream(data: ProcessLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<ProcessLiveStreamResponse>;
  /** 发起媒体处理 {@link ProcessMediaRequest} {@link ProcessMediaResponse} */
  ProcessMedia(data: ProcessMediaRequest, config?: AxiosRequestConfig): AxiosPromise<ProcessMediaResponse>;
  /** 智学智能媒体识别 {@link RecognizeMediaForZhiXueRequest} {@link RecognizeMediaForZhiXueResponse} */
  RecognizeMediaForZhiXue(data: RecognizeMediaForZhiXueRequest, config?: AxiosRequestConfig): AxiosPromise<RecognizeMediaForZhiXueResponse>;
  /** 重设工作流 {@link ResetWorkflowRequest} {@link ResetWorkflowResponse} */
  ResetWorkflow(data: ResetWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<ResetWorkflowResponse>;
  /** 开启媒体传输流 {@link StartStreamLinkFlowRequest} {@link StartStreamLinkFlowResponse} */
  StartStreamLinkFlow(data: StartStreamLinkFlowRequest, config?: AxiosRequestConfig): AxiosPromise<StartStreamLinkFlowResponse>;
  /** 停止媒体传输流 {@link StopStreamLinkFlowRequest} {@link StopStreamLinkFlowResponse} */
  StopStreamLinkFlow(data: StopStreamLinkFlowRequest, config?: AxiosRequestConfig): AxiosPromise<StopStreamLinkFlowResponse>;
  /** 提取盲水印 {@link WithdrawsWatermarkRequest} {@link WithdrawsWatermarkResponse} */
  WithdrawsWatermark(data: WithdrawsWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<WithdrawsWatermarkResponse>;
}

export declare type Versions = ["2019-06-12"];

export default Mps;
