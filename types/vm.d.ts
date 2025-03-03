/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 音频输出参数 */
declare interface AudioResult {
  /** 该字段用于返回审核内容是否命中审核模型；取值：0（**未命中**）、1（**命中**）。 */
  HitFlag?: number;
  /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label?: string;
  /** 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion?: string;
  /** 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。 */
  Score?: number;
  /** 该字段用于返回音频文件经ASR识别后的文本信息。最长可识别**5小时**的音频文件，若超出时长限制，接口将会报错。 */
  Text?: string;
  /** 该字段用于返回审核结果的访问链接（URL）。备注：链接默认有效期为12小时。如果您需要更长时效的链接，请使用[COS预签名](https://cloud.tencent.com/document/product/1265/104001)功能更新签名时效。 */
  Url?: string;
  /** 该字段用于返回音频文件的时长，单位为毫秒。 */
  Duration?: string;
  /** 该字段用于返回输入参数中的额外附加信息（Extra），如未配置则默认返回值为空。备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。 */
  Extra?: string;
  /** 该字段用于返回音频文件经ASR识别后产生的文本的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。 */
  TextResults?: AudioResultDetailTextResult[];
  /** 该字段用于返回音频文件呻吟检测的详细审核结果。具体结果内容请参见AudioResultDetailMoanResult数据结构的细节描述。 */
  MoanResults?: AudioResultDetailMoanResult[];
  /** 该字段用于返回音频小语种检测的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。 */
  LanguageResults?: AudioResultDetailLanguageResult[];
  /** 该字段用于返回当前标签（Lable）下的二级标签。 */
  SubLabel?: string;
  /** 识别类标签结果信息列表 */
  RecognitionResults?: RecognitionResult[];
  /** 该字段用于返回音频文件说话人检测的详细审核结果 */
  SpeakerResults?: SpeakerResult[];
  /** 该字段用于返回音频文件出行检测的详细审核结果 */
  TravelResults?: TravelResult[];
  /** 该字段用于返回音频文件的三级标签 */
  SubTag?: string;
  /** 该字段用于返回音频文件的三级标签码 */
  SubTagCode?: string;
  /** 该字段用于返回音频文件歌曲识别的详细审核结果 */
  LabelResults?: LabelResult[];
}

/** 音频小语种检测结果 */
declare interface AudioResultDetailLanguageResult {
  /** 语种 */
  Label: string | null;
  /** 得分 */
  Score: number | null;
  /** 开始时间 */
  StartTime: number | null;
  /** 结束时间 */
  EndTime: number | null;
  /** 子标签码 */
  SubLabelCode: string | null;
}

/** 音频呻吟审核结果 */
declare interface AudioResultDetailMoanResult {
  /** 该字段用于返回检测结果需要检测的内容类型，此处固定为**Moan**（呻吟）以调用呻吟检测功能。 */
  Label: string | null;
  /** 该字段用于返回呻吟检测的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于呻吟内容。 */
  Score: number;
  /** 该字段用于返回对应呻吟标签的片段在音频文件内的开始时间，单位为毫秒。 */
  StartTime: number;
  /** 该字段用于返回对应呻吟标签的片段在音频文件内的结束时间，单位为毫秒。 */
  EndTime: number;
  /** *内测中，敬请期待* */
  SubLabelCode: string;
  /** 该字段用于返回当前标签（Lable）下的二级标签。 */
  SubLabel: string;
  /** 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion: string;
}

/** 音频ASR文本审核结果 */
declare interface AudioResultDetailTextResult {
  /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Label?: string;
  /** 该字段用于返回ASR识别出的文本内容命中的关键词信息，用于标注内容违规的具体原因（如：加我微信）。该参数可能会有多个返回值，代表命中的多个关键词；若返回值为空，Score不为空，则代表识别结果所对应的恶意标签（Label）来自于语义模型判断的返回值。 */
  Keywords?: string[];
  /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。 */
  LibId?: string;
  /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的名称,以方便自定义库管理和配置。 */
  LibName?: string;
  /** 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。 */
  Score?: number;
  /** 该字段用于返回自定义关键词对应的词库类型，取值为**1**（黑白库）和**2**（自定义关键词库），若未配置自定义关键词库,则默认值为1（黑白库匹配）。 */
  LibType?: number;
  /** 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion?: string;
  /** 该字段用于返回当前标签（Lable）下的二级标签。 */
  SubLabel?: string;
  /** 该字段用于返回命中的关键词信息 */
  HitInfos?: OcrHitInfo[];
}

/** 声音段信息 */
declare interface AudioSegments {
  /** 截帧时间。点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10直播流：该值为时间戳，例如：1594650717 */
  OffsetTime?: string;
  /** 结果集 */
  Result?: AudioResult;
  /** 创建时间 */
  CreatedAt?: string;
}

/** 文件桶信息参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352 */
declare interface BucketInfo {
  /** 腾讯云对象存储，存储桶名称 */
  Bucket: string;
  /** 地域 */
  Region: string;
  /** 对象Key */
  Object: string;
}

/** Result结果详情 */
declare interface ImageResult {
  /** 违规标志0 未命中1 命中 */
  HitFlag?: number;
  /** 命中的标签Porn 色情Sexy 性感Polity 政治Illegal 违法Abuse 谩骂Terror 暴恐Ad 广告 */
  Label?: string;
  /** 审核建议，可选值：Pass 通过，Review 建议人审，Block 确认违规 */
  Suggestion?: string;
  /** 得分 */
  Score?: number;
  /** 画面截帧图片结果集 */
  Results?: ImageResultResult[];
  /** 该字段用于返回审核结果的访问链接（URL）。备注：链接默认有效期为12小时。如果您需要更长时效的链接，请使用[COS预签名](https://cloud.tencent.com/document/product/1265/104001)功能更新签名时效。 */
  Url?: string;
  /** 附加字段 */
  Extra?: string;
  /** 二级标签 */
  SubLabel?: string;
  /** 场景结果 */
  RecognitionResults?: RecognitionResult[];
}

/** 图片输出结果的子结果 */
declare interface ImageResultResult {
  /** 场景Porn 色情Sexy 性感Polity 政治Illegal 违法Abuse 谩骂Terror 暴恐Ad 广告 */
  Scene?: string | null;
  /** 是否命中0 未命中1 命中 */
  HitFlag?: number | null;
  /** 审核建议，可选值：Pass 通过，Review 建议人审，Block 确认违规 */
  Suggestion?: string | null;
  /** 标签 */
  Label?: string | null;
  /** 子标签 */
  SubLabel?: string | null;
  /** 分数 */
  Score?: number | null;
  /** 人物名称列表，如未识别，则为null */
  Names?: string[] | null;
  /** 图片OCR文本 */
  Text?: string | null;
  /** 其他详情 */
  Details?: ImageResultsResultDetail[] | null;
}

/** 具体场景下的图片识别结果 */
declare interface ImageResultsResultDetail {
  /** 任务名称 */
  Name?: string | null;
  /** OCR识别文本 */
  Text?: string | null;
  /** 位置信息 */
  Location?: ImageResultsResultDetailLocation | null;
  /** 标签 */
  Label?: string | null;
  /** 库ID */
  LibId?: string | null;
  /** 库名称 */
  LibName?: string | null;
  /** 命中的关键词 */
  Keywords?: string[] | null;
  /** 建议 */
  Suggestion?: string | null;
  /** 得分 */
  Score?: number | null;
  /** 子标签码 */
  SubLabelCode?: string | null;
  /** 子标签 */
  SubLabel?: string;
  /** Ocr文本命中信息 */
  OcrHitInfos?: OcrHitInfo[];
}

/** 图片详情位置信息 */
declare interface ImageResultsResultDetailLocation {
  /** x坐标 */
  X: number | null;
  /** y坐标 */
  Y: number | null;
  /** 宽度 */
  Width: number | null;
  /** 高度 */
  Height: number | null;
  /** 旋转角度 */
  Rotate: number | null;
}

/** 图片段信息 */
declare interface ImageSegments {
  /** 截帧时间。点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10直播流：该值为时间戳，例如：1594650717 */
  OffsetTime?: string;
  /** 画面截帧结果详情 */
  Result?: ImageResult;
  /** 时间 */
  CreatedAt?: string;
  /** 截帧毫秒时间 */
  OffsetusTime?: string;
}

/** 输入信息详情 */
declare interface InputInfo {
  /** 传入的类型可选：URL，COS */
  Type: string | null;
  /** Url地址 */
  Url: string | null;
  /** 桶信息。当输入当时COS时，该字段不为空 */
  BucketInfo: string | null;
}

/** 歌曲识别结果 */
declare interface LabelResult {
  /** 场景 */
  Scene?: string;
  /** 建议 */
  Suggestion?: number;
  /** 标签 */
  Label?: string;
  /** 名字 */
  Name?: string;
  /** 分数 */
  Score?: number;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

/** 媒体类型 */
declare interface MediaInfo {
  /** 编码格式 */
  Codecs: string;
  /** 流检测时分片时长注意：此字段可能返回 0，表示取不到有效值。 */
  Duration: number;
  /** 宽，单位为像素 */
  Width: number;
  /** 高，单位为像素 */
  Height: number;
  /** 封面 */
  Thumbnail: string;
}

/** Ocr命中信息 */
declare interface OcrHitInfo {
  /** 关键词 */
  Type?: string;
  /** 关键词内容 */
  Keyword?: string;
  /** 自定义库名 */
  LibName?: string;
  /** 位置信息 */
  Positions?: TextPosition[];
}

/** 审核切片asr文本信息 */
declare interface RcbAsr {
  /** 该字段用于返回音频文件识别出的对应文本内容，最大支持**前1000个字符**。 */
  Text: string | null;
  /** 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。 */
  CreatedAt: string | null;
}

/** 识别类标签结果信息 */
declare interface RecognitionResult {
  /** 可能的取值有：Teenager 、Gender */
  Label: string | null;
  /** 识别标签列表 */
  Tags: Tag[] | null;
}

/** 明细数据相关的cos url */
declare interface SegmentCosUrlList {
  /** 全量图片片段的cos url */
  ImageAllUrl?: string | null;
  /** 全量音频片段的cos url */
  AudioAllUrl?: string | null;
  /** 违规图片片段的cos url */
  ImageBlockUrl?: string | null;
  /** 违规音频片段的cos url */
  AudioBlockUrl?: string | null;
  /** 全量音频识别文本的cos url */
  AsrUrl?: string | null;
}

/** 说话人结果 */
declare interface SpeakerResult {
  /** 标签 */
  Label?: string;
  /** 分数 */
  Score?: number;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

/** 数据存储信息 */
declare interface StorageInfo {
  /** 类型 可选：URL 资源链接类型COS 腾讯云对象存储类型 */
  Type?: string;
  /** 资源链接 */
  Url?: string;
  /** 腾讯云存储桶信息 */
  BucketInfo?: BucketInfo;
}

/** 音频切片识别标签 */
declare interface Tag {
  /** 根据Label字段确定具体名称：当Label 为Teenager 时 Name可能取值有：Teenager 当Label 为Gender 时 Name可能取值有：Male 、Female */
  Name: string | null;
  /** 置信分：0～100，数值越大表示置信度越高 */
  Score: number | null;
  /** 识别开始偏移时间，单位：毫秒 */
  StartTime: number | null;
  /** 识别结束偏移时间，单位：毫秒 */
  EndTime: number | null;
}

/** 任务数据 */
declare interface TaskData {
  /** 任务ID */
  TaskId: string | null;
  /** 输入的数据ID */
  DataId: string | null;
  /** 业务类型 */
  BizType: string | null;
  /** 任务名称 */
  Name: string | null;
  /** 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED */
  Status: string | null;
  /** 任务类型 */
  Type: string | null;
  /** 处理建议 */
  Suggestion: string | null;
  /** 标签 */
  Labels: TaskLabel[] | null;
  /** 媒体信息 */
  MediaInfo: MediaInfo | null;
  /** 输入信息 */
  InputInfo: InputInfo | null;
  /** 创建时间 */
  CreatedAt: string | null;
  /** 更新时间 */
  UpdatedAt: string | null;
}

/** Cos TaskFilter */
declare interface TaskFilter {
  /** 任务业务类型 */
  BizType?: string;
  /** 任务类型，可选：VIDEO，AUDIO， LIVE_VIDEO, LIVE_AUDIO */
  Type?: string;
  /** 建议，可选：Pass, Review,Block */
  Suggestion?: string;
  /** 状态，可选：PENDING，RUNNING，ERROR，FINISH，CANCELLED */
  TaskStatus?: string;
}

/** 音视频任务结构 */
declare interface TaskInput {
  /** 数据ID */
  DataId?: string;
  /** 任务名 */
  Name?: string;
  /** 任务输入 */
  Input?: StorageInfo;
}

/** 任务输出标签 */
declare interface TaskLabel {
  /** 命中的标签Porn 色情Sexy 性感Polity 政治Illegal 违法Abuse 谩骂Terror 暴恐Ad 广告 */
  Label: string | null;
  /** 审核建议，可选值：Pass 通过，Review 建议人审，Block 确认违规 */
  Suggestion: string | null;
  /** 得分，分数是 0 ～ 100 */
  Score: number | null;
  /** 命中的二级标签 */
  SubLabel: string | null;
}

/** 创建任务时的返回结果 */
declare interface TaskResult {
  /** 请求时传入的DataId */
  DataId: string | null;
  /** TaskId，任务ID */
  TaskId: string | null;
  /** 错误码。如果code为OK，则表示创建成功，其他则参考公共错误码 */
  Code: string | null;
  /** 如果错误，该字段表示错误详情 */
  Message: string | null;
}

/** 文本关键词命中的位置信息 */
declare interface TextPosition {
  /** 命中关键词在文本中的起始位置 */
  Start?: number;
  /** 命中关键词在文本中的结束位置 */
  End?: number;
}

/** 出行结果 */
declare interface TravelResult {
  /** 一级标签 */
  Label?: string;
  /** 二级标签 */
  SubLabel?: string;
  /** 风险等级 */
  RiskLevel?: string;
  /** 出行音频角色 */
  AudioRole?: string;
  /** 出行语音文本 */
  AudioText?: string;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

/** 用户信息 */
declare interface User {
  /** 业务用户ID 如填写，会根据账号历史恶意情况，判定消息有害结果，特别是有利于可疑恶意情况下的辅助判断。账号可以填写微信uin、QQ号、微信openid、QQopenid、字符串等。该字段和账号类别确定唯一账号。 */
  UserId?: string;
  /** 该字段表示业务用户ID对应的账号类型，取值：1-微信uin，2-QQ号，3-微信群uin，4-qq群号，5-微信openid，6-QQopenid，7-其它string。该字段与账号ID参数（UserId）配合使用可确定唯一账号。 */
  AccountType?: string;
  /** 用户昵称 */
  Nickname?: string;
  /** 性别 默认0 未知 1 男性 2 女性 */
  Gender?: number;
  /** 年龄 默认0 未知 */
  Age?: number;
  /** 用户等级，默认0 未知 1 低 2 中 3 高 */
  Level?: number;
  /** 手机号 */
  Phone?: string;
  /** 用户简介，长度不超过5000字 */
  Desc?: string;
  /** 用户头像图片链接 */
  HeadUrl?: string;
  /** 群聊场景房间ID */
  RoomId?: string;
  /** 群聊场景群ID */
  GroupId?: string;
  /** 群聊场景群用户数 */
  GroupSize?: number;
  /** 消息接收者ID */
  ReceiverId?: string;
  /** 消息生成时间，毫秒 */
  SendTime?: string;
}

declare interface CancelTaskRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface CancelTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVideoModerationTaskRequest {
  /** 该字段表示特定审核策略的编号，用于接口调度。需要提前在[内容安全控制台](https://console.cloud.tencent.com/cms/clouds/manage)中创建策略后获取该Biztype字段，传入该字段，会根据业务场景在审核时调用相应的审核策略。 备注：Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。 */
  BizType: string;
  /** 任务类型：可选VIDEO（点播视频），LIVE_VIDEO（直播视频） */
  Type: string;
  /** 输入的任务信息，最多可以同时创建10个任务 */
  Tasks: TaskInput[];
  /** 验证签名参数，具体可以参考[验签说明](https://cloud.tencent.com/document/product/1265/104001)。 */
  Seed?: string;
  /** 接收审核信息回调地址。如果设置了该字段，在审核过程中发现违规音频片段和画面截帧结果将发送至该接口。更多详情请参阅[回调配置说明](https://cloud.tencent.com/document/product/1265/104001)。 */
  CallbackUrl?: string;
  /** 审核排队优先级。当您有多个视频审核任务排队时，可以根据这个参数控制排队优先级。用于处理插队等逻辑。默认该参数为0 */
  Priority?: number;
  /** 该字段表示待检测对象对应的用户相关信息，若填入则可甄别相应违规风险用户 */
  User?: User;
}

declare interface CreateVideoModerationTaskResponse {
  /** 任务创建结果 */
  Results?: TaskResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskDetailRequest {
  /** 任务ID，创建任务后返回的TaskId字段 */
  TaskId: string;
  /** 是否展示所有分片，默认只展示命中规则的分片 */
  ShowAllSegments?: boolean;
}

declare interface DescribeTaskDetailResponse {
  /** 该字段用于返回创建视频审核任务后返回的任务ID（在Results参数中），用于标识需要查询任务详情的审核任务。 */
  TaskId?: string | null;
  /** 该字段用于返回调用视频审核接口时传入的数据ID参数，方便数据的辨别和管理。 */
  DataId?: string | null;
  /** 该字段用于返回调用视频审核接口时传入的BizType参数，方便数据的辨别和管理。 */
  BizType?: string | null;
  /** 该字段用于返回调用视频审核接口时传入的TaskInput参数中的任务名称，方便任务的识别与管理。 */
  Name?: string | null;
  /** 该字段用于返回所查询内容的任务状态。取值：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。 */
  Status?: string | null;
  /** 该字段用于返回调用视频审核接口时输入的视频审核类型，取值为：**VIDEO**（点播视频）和**LIVE_VIDEO**（直播视频），默认值为VIDEO。 */
  Type?: string | null;
  /** 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
  Suggestion?: string | null;
  /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
  Labels?: TaskLabel[] | null;
  /** 该字段用于返回输入媒体文件的详细信息，包括编解码格式、分片时长等信息。详细内容敬请参考MediaInfo数据结构的描述。 */
  MediaInfo?: MediaInfo | null;
  /** 该字段用于返回审核服务的媒体内容信息，主要包括传入文件类型和访问地址。 */
  InputInfo?: InputInfo | null;
  /** 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。 */
  CreatedAt?: string | null;
  /** 该字段用于返回被查询任务最后更新时间，格式采用 ISO 8601标准。 */
  UpdatedAt?: string | null;
  /** 在秒后重试 */
  TryInSeconds?: number | null;
  /** 该字段用于返回视频中截帧审核的结果，详细返回内容敬请参考ImageSegments数据结构的描述。 */
  ImageSegments?: ImageSegments[] | null;
  /** 该字段用于返回视频中音频审核的结果，详细返回内容敬请参考AudioSegments数据结构的描述。 */
  AudioSegments?: AudioSegments[] | null;
  /** 当任务状态为Error时，返回对应错误的类型，取值：**DECODE_ERROR**: 解码失败。（输入资源中可能包含无法解码的视频）**URL_ERROR**：下载地址验证失败。**TIMEOUT_ERROR**：处理超时。**CALLBACK_ERRORR**：回调错误。**MODERATION_ERROR**：审核失败。**URL_NOT_SUPPORTED**：源文件太大或没有图片音频帧任务状态非Error时默认返回为空。 */
  ErrorType?: string | null;
  /** 当任务状态为Error时，该字段用于返回对应错误的详细描述，任务状态非Error时默认返回为空。 */
  ErrorDescription?: string | null;
  /** 该字段用于返回检测结果所对应的标签。如果未命中恶意，返回Normal，如果命中恶意，则返回Labels中优先级最高的标签 */
  Label?: string | null;
  /** 该字段用于返回音频文件识别出的对应文本内容，最大支持**前1000个字符**。 */
  AudioText?: string | null;
  /** 该字段用于返回音频文件识别出的对应文本内容。 */
  Asrs?: RcbAsr[] | null;
  /** 该字段用于返回检测结果明细数据相关的cos url */
  SegmentCosUrlList?: SegmentCosUrlList | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksRequest {
  /** 该参数表示任务列表每页展示的任务条数，**默认值为10**（每页展示10条任务）。 */
  Limit?: number;
  /** 该参数表示任务筛选器的输入参数，可根据业务类型、审核文件类型、处理建议及任务状态筛选想要查看的审核任务，具体参数内容请参见TaskFilter数据结构的详细描述。 */
  Filter?: TaskFilter;
  /** 该参数表示翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。 */
  PageToken?: string;
  /** 该参数表示任务列表的开始时间，格式为ISO8601标准的时间戳。**默认值为最近3天**，若传入该参数，则在这一时间到EndTime之间的任务将会被筛选出来。备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。 */
  StartTime?: string;
  /** 该参数表示任务列表的结束时间，格式为ISO8601标准的时间戳。**默认值为空**，若传入该参数，则在这StartTime到这一时间之间的任务将会被筛选出来。备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。 */
  EndTime?: string;
}

declare interface DescribeTasksResponse {
  /** 该字段用于返回当前查询的任务总量，格式为int字符串。 */
  Total?: string | null;
  /** 该字段用于返回当前页的任务详细数据，具体输出内容请参见TaskData数据结构的详细描述。 */
  Data?: TaskData[] | null;
  /** 该字段用于返回翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。 */
  PageToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20201229 {
  type VersionHeader = { headers: { 'X-TC-Version': '2020-12-29' } }

  /** 敏感歌曲 */
  interface AudioLabelResult {
    /** 场景 */
    Scene?: string;
    /** 建议 */
    Suggestion?: number;
    /** 标签 */
    Label?: string;
    /** 歌曲名等 */
    Name?: string;
    /** 分数 */
    Score?: number;
    /** 开始时间 */
    StartTime?: number;
    /** 结束时间 */
    EndTime?: number;
  }

  /** 音频审核输出参数 */
  interface AudioResult {
    /** 该字段用于返回审核内容是否命中审核模型；取值：0（**未命中**）、1（**命中**）。 */
    HitFlag?: number;
    /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
    Label?: string;
    /** 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
    Suggestion?: string;
    /** 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。 */
    Score?: number;
    /** 该字段用于返回音频文件经ASR识别后的文本信息。最长可识别**5小时**的音频文件，若超出时长限制，接口将会报错。 */
    Text?: string;
    /** 该字段用于返回审核结果的访问链接（URL）。备注：链接默认有效期为12小时。如果您需要更长时效的链接，请使用[COS预签名](https://cloud.tencent.com/document/product/1265/104001)功能更新签名时效。 */
    Url?: string;
    /** 该字段用于返回音频文件的时长，单位为毫秒。 */
    Duration?: string;
    /** 该字段用于返回输入参数中的额外附加信息（Extra），如未配置则默认返回值为空。备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。 */
    Extra?: string;
    /** 该字段用于返回音频文件经ASR识别后产生的文本的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。 */
    TextResults?: AudioResultDetailTextResult[];
    /** 该字段用于返回音频文件呻吟检测的详细审核结果。具体结果内容请参见AudioResultDetailMoanResult数据结构的细节描述。 */
    MoanResults?: AudioResultDetailMoanResult[];
    /** 该字段用于返回音频小语种检测的详细审核结果。具体结果内容请参见AudioResultDetailLanguageResult数据结构的细节描述。 */
    LanguageResults?: AudioResultDetailLanguageResult[];
    /** 该字段用于返回当前标签（Lable）下的二级标签。 */
    SubLabel?: string;
    /** 识别类标签结果信息列表 */
    RecognitionResults?: RecognitionResult[];
    /** 该字段用于返回音频文件说话人检测的详细审核结果。 */
    SpeakerResults?: SpeakerResult[];
    /** 该字段用于返回音频文件歌曲检测的详细审核结果。 */
    LabelResults?: AudioLabelResult[];
    /** 该字段用于返回音频文件出行检测的详细审核结果。 */
    TravelResults?: TravelResult[];
    /** 三级标签 */
    SubTag?: string;
    /** 三级标签码 */
    SubTagCode?: string;
  }

  /** 音频语言种类检测结果 */
  interface AudioResultDetailLanguageResult {
    /** 该字段用于返回对应的语言种类信息。 */
    Label: string | null;
    /** 该参数用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于当前返回的语种标签； */
    Score: number | null;
    /** 该参数用于返回对应语种标签的片段在音频文件内的开始时间，单位为毫秒。 */
    StartTime: number | null;
    /** 该参数用于返回对应语种标签的片段在音频文件内的结束时间，单位为毫秒。 */
    EndTime: number | null;
    /** *内测中，敬请期待* */
    SubLabelCode: string | null;
  }

  /** 音频呻吟审核结果 */
  interface AudioResultDetailMoanResult {
    /** 该字段用于返回检测结果需要检测的内容类型，此处固定为**Moan**（呻吟）以调用呻吟检测功能。 */
    Label: string | null;
    /** 该字段用于返回呻吟检测的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表音频越有可能属于呻吟内容。 */
    Score: number;
    /** 该字段用于返回对应呻吟标签的片段在音频文件内的开始时间，单位为毫秒。 */
    StartTime: number;
    /** 该字段用于返回对应呻吟标签的片段在音频文件内的结束时间，单位为毫秒。 */
    EndTime: number;
    /** *内测中，敬请期待* */
    SubLabelCode: string;
    /** 该字段用于返回当前标签（Lable）下的二级标签。 */
    SubLabel: string | null;
    /** 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
    Suggestion: string;
  }

  /** 音频ASR文本审核结果 */
  interface AudioResultDetailTextResult {
    /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
    Label?: string;
    /** 该字段用于返回ASR识别出的文本内容命中的关键词信息，用于标注内容违规的具体原因（如：加我微信）。该参数可能会有多个返回值，代表命中的多个关键词；若返回值为空，Score不为空，则代表识别结果所对应的恶意标签（Label）来自于语义模型判断的返回值。 */
    Keywords?: string[];
    /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。 */
    LibId?: string;
    /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的名称,以方便自定义库管理和配置。 */
    LibName?: string;
    /** 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高**），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。 */
    Score?: number;
    /** 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
    Suggestion?: string;
    /** 该字段用于返回自定义关键词对应的词库类型，取值为**1**（黑白库）和**2**（自定义关键词库），若未配置自定义关键词库,则默认值为1（黑白库匹配）。 */
    LibType?: number;
    /** 该字段用于返回当前标签（Lable）下的二级标签。 */
    SubLabel?: string;
    /** 该字段用于返回命中的关键词信息 */
    HitInfos?: HitInfo[];
  }

  /** 用于返回音频片段的审核结果 */
  interface AudioSegments {
    /** 该字段用于返回音频片段的开始时间，单位为秒。对于点播文件，该参数代表对应音频相对于完整音轨的偏移时间，如0（代表不偏移），5（音轨开始后5秒），10（音轨开始后10秒）；对于直播文件，该参数则返回对应音频片段开始时的Unix时间戳，如：1594650717。 */
    OffsetTime?: string;
    /** 该字段用于返回音频片段的具体审核结果，详细内容敬请参考AudioResult数据结构的描述。 */
    Result?: AudioResult;
    /** 创建时间 */
    CreatedAt?: string;
  }

  /** 文件桶信息参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352 */
  interface BucketInfo {
    /** 该字段用于标识腾讯云对象存储的存储桶名称,关于文件桶的详细信息敬请参考 [腾讯云存储相关说明](https://cloud.tencent.com/document/product/436/44352)。 */
    Bucket: string;
    /** 该字段用于标识腾讯云对象存储的托管机房的分布地区，对象存储 COS 的数据存放在这些地域的存储桶中。 */
    Region: string;
    /** 该字段用于标识腾讯云对象存储的对象Key,对象z作为基本单元被存放在存储桶中；用户可以通过腾讯云控制台、API、SDK 等多种方式管理对象。有关对象的详细描述敬请参阅相应 [产品文档](https://cloud.tencent.com/document/product/436/13324)。 */
    Object: string;
  }

  /** 文本关键词命中信息 */
  interface HitInfo {
    /** 关键词 */
    Type?: string;
    /** 命中关键词 */
    Keyword?: string;
    /** 命中的自定义词库名 */
    LibName?: string;
    /** 关键词位置信息 */
    Positions?: TextPosition[];
  }

  /** Result结果详情 */
  interface ImageResult {
    /** 该参数用于标识审核内容是否命中恶意标签，取值：0（**未命中**）和1（**命中**）。 */
    HitFlag?: number | null;
    /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
    Label?: string | null;
    /** 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
    Suggestion?: string | null;
    /** 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 -性行为 99*，则表明该文本非常有可能属于色情性行为内容。 */
    Score?: number | null;
    /** 该字段用于返回图像审核结果的子结果，详细内容敬请参考ImageResultResult数据结构的描述。 */
    Results?: ImageResultResult[] | null;
    /** 该字段用于返回审核结果的访问链接（URL）。备注：链接默认有效期为12小时。如果您需要更长时效的链接，请使用[COS预签名](https://cloud.tencent.com/document/product/1265/104001)功能更新签名时效。 */
    Url?: string | null;
    /** 该字段用于返回输入参数中的额外附加信息（Extra），如未配置则默认返回值为空。备注：不同客户或Biztype下返回信息不同，如需配置该字段请提交工单咨询或联系售后专员处理。 */
    Extra?: string | null;
    /** 该字段用于返回当前标签（Lable）下的二级标签。 */
    SubLabel?: string | null;
    /** 该字段用于返回仅识别图片元素的模型结果；包括：场景模型命中的标签、置信度和位置信息 */
    RecognitionResults?: RecognitionResult[] | null;
  }

  /** 图片输出结果的子结果 */
  interface ImageResultResult {
    /** 该字段用于返回检测结果所对应的恶意场景。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**AppLogo**：广告台标，**Custom**：自定义违规，以及其他令人反感、不安全或不适宜的内容类型。 */
    Scene: string | null;
    /** 该参数用于标识审核内容是否命中恶意标签，取值：0（**未命中**）和1（**命中**）。 */
    HitFlag: number | null;
    /** 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
    Suggestion: string | null;
    /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
    Label: string | null;
    /** 该字段用于返回恶意标签下对应的子标签的检测结果，如：*Porn-SexBehavior*等子标签。 */
    SubLabel: string | null;
    /** 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 -性行为 99*，则表明该文本非常有可能属于色情性行为内容。 */
    Score: number | null;
    /** 该字段用于返回审核图片在敏感场景下命中的特定对象名称列表。 */
    Names: string[] | null;
    /** 该字段用于返回图片OCR文本识别的检测结果，识别**上限在5000字节内**。 */
    Text: string | null;
    /** 该字段用于返回图像审核子结果的其他详细信息，如文本位置、自定义库等。详细返回内容敬请参考ImageResultsResultDetail数据结构的描述。 */
    Details: ImageResultsResultDetail[] | null;
  }

  /** 具体场景下的图片识别结果 */
  interface ImageResultsResultDetail {
    /** 该字段用于返回调用视频审核接口时传入的TaskInput参数中的任务名称，方便任务的识别与管理。 */
    Name?: string;
    /** 该字段用于返回图片OCR文本识别的检测结果，识别**上限在5000字节内**。 */
    Text?: string;
    /** 该字段用于返回图像审核子结果的详细位置信息，如坐标、大小、旋转角度等。详细返回内容敬请参考ImageResultsResultDetailLocation数据结构的描述。 */
    Location?: ImageResultsResultDetailLocation;
    /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
    Label?: string;
    /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的ID，以方便自定义库管理和配置。 */
    LibId?: string;
    /** 该字段**仅当Label为Custom：自定义关键词时该参数有效**,用于返回自定义库的名称,以方便自定义库管理和配置。 */
    LibName?: string;
    /** 该字段用于返回检测文本命中的关键词信息，用于标注文本违规的具体原因（如：*加我微信*）。该参数可能会有多个返回值，代表命中的多个关键词；如返回值为空且Score不为空，则代表识别结果所对应的恶意标签（Label）是来自于语义模型判断的返回值。 */
    Keywords?: string[];
    /** 该字段用于返回后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
    Suggestion?: string;
    /** 该字段用于返回当前标签下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容。 */
    Score?: number;
    /** 该字段用于返回恶意标签下对应的子标签的检测结果，如：*Porn-SexBehavior*等子标签。 */
    SubLabelCode?: string;
    /** 该字段用于返回恶意标签下对应的子标签的检测结果，如：*Porn-SexBehavior*等子标签。 */
    SubLabel?: string;
    /** 该字段用于返回OCR命中的关键词信息。 */
    OcrHitInfos?: HitInfo[];
  }

  /** 图片详情位置信息 */
  interface ImageResultsResultDetailLocation {
    /** 该参数用于标识OCR检测框左上角位置的**横坐标**（x）所在的像素位置，结合剩余参数可唯一确定检测框的大小和位置。 */
    X: number | null;
    /** 该参数用于标识OCR检测框左上角位置的**纵坐标**（y）所在的像素位置，结合剩余参数可唯一确定检测框的大小和位置。 */
    Y: number | null;
    /** 该参数用于标识OCR检测框的宽度（**由左上角出发在x轴向右延伸的长度**）。结合剩余参数可唯一确定检测框的大小和位置。 */
    Width: number | null;
    /** 该参数用于标识OCR检测框的高度（**由左上角出发在y轴向下延伸的长度**）。结合剩余参数可唯一确定检测框的大小和位置。 */
    Height: number | null;
    /** 该参数用于标识OCR检测框的旋转角度，该参数结合X和Y两个坐标参数可唯一确定检测框的具体位置；取值：0-360（**角度制**），方向为**逆时针旋**转。 */
    Rotate: number | null;
  }

  /** 图片段信息 */
  interface ImageSegments {
    /** 该字段用于返回视频片段的截帧时间，单位为秒。对于点播文件，该参数代表对应截取图片相对于视频的偏移时间，如0（代表不偏移），5（视频开始后5秒），10（视频开始后10秒）；对于直播文件，该参数则返回对应图片的Unix时间戳，如：1594650717。 */
    OffsetTime?: string;
    /** 该字段用于返回视频片段的具体截帧审核结果，详细内容敬请参考ImageResult数据结构的描述。 */
    Result?: ImageResult;
    /** 该字段用于返回视频片段的具体截帧审核时间。 */
    CreatedAt?: string | null;
    /** 该字段用于返回视频片段的截帧时间，单位为豪秒。 */
    OffsetusTime?: string | null;
  }

  /** 输入信息详情 */
  interface InputInfo {
    /** 该字段表示文件访问类型，取值为**URL**（资源链接）和**COS** (腾讯云对象存储)。 */
    Type: string | null;
    /** 该字段表示文件访问的链接地址，格式为标准URL格式。 备注：当Type为URL时此字段不为空。 */
    Url: string | null;
    /** 该字段表示文件访问的腾讯云存储桶信息。 备注：当Type为COS时此字段不为空。 */
    BucketInfo: string | null;
  }

  /** 媒体类型 */
  interface MediaInfo {
    /** 该字段用于返回对传入的视频流进行分片的片段时长，单位为秒。**默认值为5秒**，支持用户自定义配置。备注：仅在审核文件为流媒体时生效；此字段返回0则代表未取到有效值。 */
    Duration: number;
  }

  /** 审核切片asr文本信息 */
  interface RcbAsr {
    /** 该字段用于返回音频文件识别出的对应文本内容，最大支持前1000个字符。 */
    Text?: string | null;
    /** 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。 */
    CreatedAt?: string | null;
  }

  /** 识别类标签结果信息 */
  interface RecognitionResult {
    /** 可能的取值有：Teenager 、Gender */
    Label: string | null;
    /** 识别标签列表 */
    Tags: Tag[] | null;
  }

  /** 明细数据相关的cos url */
  interface SegmentCosUrlList {
    /** 全量图片片段的cos url */
    ImageAllUrl?: string | null;
    /** 全量音频片段的cos url */
    AudioAllUrl?: string | null;
    /** 违规图片片段的cos url */
    ImageBlockUrl?: string | null;
    /** 违规音频片段的cos url */
    AudioBlockUrl?: string | null;
    /** 全量音频识别文本的cos url */
    AsrUrl?: string | null;
  }

  /** 说话人结果 */
  interface SpeakerResult {
    /** 标签 */
    Label?: string;
    /** 分数 */
    Score?: number;
    /** 开始时间 */
    StartTime?: number;
    /** 结束时间 */
    EndTime?: number;
  }

  /** 数据存储信息 */
  interface StorageInfo {
    /** 该字段表示文件访问类型，取值为**URL**（资源链接）和**COS** (腾讯云对象存储)；该字段应当与传入的访问类型相对应，可用于强校验并方便系统快速识别访问地址；若不传入此参数，则默认值为URL，此时系统将自动判定访问地址类型。 */
    Type?: string;
    /** 该字段表示文件访问的链接地址，格式为标准URL格式。 备注：当Type为URL时此字段不为空，该参数与BucketInfo参数须传入其中之一 */
    Url?: string;
    /** 该字段表示文件访问的腾讯云存储桶信息。 备注：当Type为COS时此字段不为空，该参数与Url参数须传入其中之一。 */
    BucketInfo?: BucketInfo;
  }

  /** 音频切片识别标签 */
  interface Tag {
    /** 根据Label字段确定具体名称：当Label 为Teenager 时 Name可能取值有：Teenager 当Label 为Gender 时 Name可能取值有：Male 、Female */
    Name: string | null;
    /** 置信分：0～100，数值越大表示置信度越高 */
    Score: number | null;
    /** 识别开始偏移时间，单位：毫秒 */
    StartTime: number | null;
    /** 识别结束偏移时间，单位：毫秒 */
    EndTime: number | null;
  }

  /** 任务数据 */
  interface TaskData {
    /** 该字段用于返回视频审核任务数据所对应的数据ID，方便后续查询和管理审核任务。 */
    DataId: string | null;
    /** 该字段用于返回视频审核任务所生成的任务ID，用于标识具体审核任务，方便后续查询和管理。 */
    TaskId: string;
    /** 该字段用于返回所查询内容的任务状态。取值：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。 */
    Status: string;
    /** 该字段用于返回视频审核任务所对应的任务名称，方便后续查询和管理审核任务。 */
    Name: string | null;
    /** 该字段用于返回调用视频审核接口时传入的BizType参数，方便数据的辨别和管理。 */
    BizType: string | null;
    /** 该字段用于返回调用音频审核接口时输入的音频审核类型，取值为：**VIDEO**（点播视频）和**LIVE_VIDEO**（直播视频），默认值为VIDEO。 */
    Type: string | null;
    /** 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示具体的后续建议操作。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
    Suggestion: string | null;
    /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
    Labels: TaskLabel[];
    /** 该字段用于返回输入媒体文件的详细信息，包括编码格式、分片时长等信息。详细内容敬请参考MediaInfo数据结构的描述。 */
    MediaInfo: MediaInfo | null;
    /** 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。 */
    CreatedAt: string;
    /** 该字段用于返回被查询任务最后更新时间，格式采用 ISO 8601标准。 */
    UpdatedAt: string | null;
    /** 该字段用于返回审核服务的媒体内容信息，主要包括传入文件类型和访问地址 */
    InputInfo: InputInfo | null;
  }

  /** 任务筛选器 */
  interface TaskFilter {
    /** 该字段用于传入任务对应的业务类型供筛选器进行筛选。Biztype为策略的具体的编号，用于接口调度，在内容安全控制台中可配置。不同Biztype关联不同的业务场景与审核策略，调用前请确认正确的Biztype。Biztype仅为**数字、字母与下划线的组合**，长度为3-32个字符。备注：在不传入该参数时筛选器默认不筛选业务类型。 */
    BizType?: string[] | null;
    /** 该字段用于传入视频审核对应的任务类型供筛选器进行筛选，取值为：**VIDEO**（点播视频审核），**AUDIO**（点播音频审核）， **LIVE_VIDEO**（直播视频审核）, **LIVE_AUDIO**（直播音频审核）。备注：在不传入该参数时筛选器默认不筛选任务类型。 */
    Type?: string;
    /** 该字段用于传入视频审核对应的建议操作供筛选器进行筛选，取值为：**Block**：建议屏蔽，**Review**：建议人工复审，**Pass**：建议通过。备注：在不传入该参数时筛选器默认不筛选建议操作。 */
    Suggestion?: string;
    /** 该字段用于传入审核任务的任务状态供筛选器进行筛选，取值为：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。备注：在不传入该参数时筛选器默认不筛选任务状态。 */
    TaskStatus?: string;
  }

  /** 音视频任务结构 */
  interface TaskInput {
    /** 选填参数，该字段表示您为待检测对象分配的数据ID，传入后可方便您对文件进行标识和管理。取值：由英文字母（大小写均可）、数字及四个特殊符号（_，-，@，#）组成，**长度不超过64个字符**。 */
    DataId?: string;
    /** 选填参数，该字段表示审核任务所对应的任务名称，方便后续查询和管理审核任务。 */
    Name?: string;
    /** 必填参数，该字段表示审核文件的访问参数，用于获取审核媒体文件，该参数内包括访问类型和访问地址。 */
    Input?: StorageInfo;
  }

  /** 任务输出标签 */
  interface TaskLabel {
    /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Normal**：正常，**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
    Label: string | null;
    /** 该字段用于返回当前标签（Label）下的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
    Suggestion: string | null;
    /** 该字段用于返回当前标签（Label）下的置信度，取值范围：0（**置信度最低**）-100（**置信度最高** ），越高代表文本越有可能属于当前返回的标签；如：*色情 99*，则表明该文本非常有可能属于色情内容；*色情 0*，则表明该文本不属于色情内容。 */
    Score: number | null;
    /** 该字段用于返回当前标签（Lable）下的二级标签。 */
    SubLabel: string | null;
  }

  /** 创建任务时的返回结果 */
  interface TaskResult {
    /** 该字段用于返回创建视频审核任务时在TaskInput结构内传入的DataId，用于标识具体审核任务。 */
    DataId: string | null;
    /** 该字段用于返回视频审核任务所生成的任务ID，用于标识具体审核任务，方便后续查询和管理。 */
    TaskId: string | null;
    /** 该字段用于返回任务创建的状态，如返回OK则代表任务创建成功，其他返回值可参考公共错误码。 */
    Code: string | null;
    /** **仅在Code的返回值为错误码时生效**，用于返回错误的详情内容。 */
    Message: string | null;
  }

  /** 文本关键词命中位置信息 */
  interface TextPosition {
    /** 关键词在文本中的起始位置 */
    Start?: number;
    /** 关键词在文本中的结束位置 */
    End?: number;
  }

  /** 出行结果 */
  interface TravelResult {
    /** 一级标签 */
    Label?: string;
    /** 二级标签 */
    SubLabel?: string;
    /** 风险等级 */
    RiskLevel?: string;
    /** 音频角色 */
    AudioRole?: string;
    /** 音频语音文本 */
    AudioText?: string;
    /** 开始时间 */
    StartTime?: number;
    /** 结束时间 */
    EndTime?: number;
  }

  interface CancelTaskRequest {
    /** 该字段表示创建视频审核任务后返回的任务ID（在Results参数中），用于标识需要取消的审核任务。 */
    TaskId: string;
  }

  interface CancelTaskResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateVideoModerationTaskRequest {
    /** 该参数用于传入审核任务的任务类型，取值：**VIDEO**（点播视频），**LIVE_VIDEO**（直播视频）。 */
    Type: string;
    /** 该字段表示输入的视频审核任务信息，具体输入内容请参见TaskInput数据结构的详细描述。 备注：最多同时可创建**10个任务**。 */
    Tasks: TaskInput[];
    /** 该字段表示策略的具体编号，用于接口调度，在内容安全控制台中可配置。若不传入Biztype参数（留空），则代表采用biztype为default的策略，没有则需要新建；传入则会在审核时根据业务场景取相应的审核策略。备注：Biztype仅为数字、字母与下划线的组合，长度为3-32个字符；不同Biztype关联不同的业务场景与识别能力策略，调用前请确认正确的Biztype。 */
    BizType?: string;
    /** 可选参数，该字段表示回调签名的key信息，用于保证数据的安全性。 签名方法为在返回的HTTP头部添加 X-Signature 的字段，值为： seed + body 的 SHA256 编码和Hex字符串，在收到回调数据后，可以根据返回的body，用 **sha256(seed + body)**, 计算出 `X-Signature` 进行验证。具体使用实例可参考 [回调签名示例](https://cloud.tencent.com/document/product/1265/51885)。 */
    Seed?: string;
    /** 可选参数，该字段表示接受审核信息回调的地址，格式为URL链接默认格式。配置成功后，审核过程中产生的违规音视频片段将通过此接口发送。回调返回内容格式请参考 [回调签名示例](https://cloud.tencent.com/document/product/1265/51879) 备注：音频默认截取时长为**15秒**，视频截帧默认为**5秒**截取一张图片；若用户自行配置截取间隔，则按照用户配置返回相应片段。 */
    CallbackUrl?: string;
    /** 可选参数，该参数用于传入审核任务的优先级。当您有多个视频审核任务排队时，可以根据这个参数控制排队优先级，用于处理插队等逻辑；该参数**默认值为0**。 */
    Priority?: number;
  }

  interface CreateVideoModerationTaskResponse {
    /** 该字段用于返回任务创建的结果，具体输出内容请参见TaskResult数据结构的详细描述。 */
    Results?: TaskResult[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskDetailRequest {
    /** 该字段表示创建视频审核任务后返回的任务ID（在Results参数中），用于标识需要查询任务详情的审核任务。备注：查询接口单次最大查询量为**20条每次**。 */
    TaskId: string;
    /** 该布尔字段表示是否展示全部的视频片段，取值：True(展示全部的视频分片)、False(只展示命中审核规则的视频分片)；默认值为False。 */
    ShowAllSegments?: boolean;
  }

  interface DescribeTaskDetailResponse {
    /** 该字段用于返回创建视频审核任务后返回的任务ID（在Results参数中），用于标识需要查询任务详情的审核任务。 */
    TaskId?: string | null;
    /** 该字段用于返回调用视频审核接口时传入的数据ID参数，方便数据的辨别和管理。 */
    DataId?: string | null;
    /** 该字段用于返回调用视频审核接口时传入的BizType参数，方便数据的辨别和管理。 */
    BizType?: string | null;
    /** 该字段用于返回调用视频审核接口时传入的TaskInput参数中的任务名称，方便任务的识别与管理。 */
    Name?: string | null;
    /** 该字段用于返回所查询内容的任务状态。取值：**FINISH**（任务已完成）、**PENDING** （任务等待中）、**RUNNING** （任务进行中）、**ERROR** （任务出错）、**CANCELLED** （任务已取消）。 */
    Status?: string | null;
    /** 该字段用于返回调用视频审核接口时输入的视频审核类型，取值为：**VIDEO**（点播视频）和**LIVE_VIDEO**（直播视频），默认值为VIDEO。 */
    Type?: string | null;
    /** 该字段用于返回基于恶意标签的后续操作建议。当您获取到判定结果后，返回值表示系统推荐的后续操作；建议您按照业务所需，对不同违规类型与建议值进行处理。返回值：**Block**：建议屏蔽，**Review** ：建议人工复审，**Pass**：建议通过 */
    Suggestion?: string | null;
    /** 该字段用于返回检测结果所对应的恶意标签。返回值：**Porn**：色情，**Abuse**：谩骂，**Ad**：广告，**Custom**：自定义违规；以及其他令人反感、不安全或不适宜的内容类型。 */
    Labels?: TaskLabel[] | null;
    /** 该字段用于返回输入媒体文件的详细信息，包括编解码格式、分片时长等信息。详细内容敬请参考MediaInfo数据结构的描述。 */
    MediaInfo?: MediaInfo | null;
    /** 该字段用于返回审核服务的媒体内容信息，主要包括传入文件类型和访问地址。 */
    InputInfo?: InputInfo | null;
    /** 该字段用于返回被查询任务创建的时间，格式采用 ISO 8601标准。 */
    CreatedAt?: string | null;
    /** 该字段用于返回被查询任务最后更新时间，格式采用 ISO 8601标准。 */
    UpdatedAt?: string | null;
    /** 该字段用于返回视频中截帧审核的结果，详细返回内容敬请参考ImageSegments数据结构的描述。 */
    ImageSegments?: ImageSegments[] | null;
    /** 该字段用于返回视频中音频审核的结果，详细返回内容敬请参考AudioSegments数据结构的描述。 */
    AudioSegments?: AudioSegments[] | null;
    /** 当任务状态为Error时，返回对应错误的类型，取值：**DECODE_ERROR**: 解码失败。（输入资源中可能包含无法解码的视频）**URL_ERROR**：下载地址验证失败。**TIMEOUT_ERROR**：处理超时。任务状态非Error时默认返回为空。 */
    ErrorType?: string | null;
    /** 当任务状态为Error时，该字段用于返回对应错误的详细描述，任务状态非Error时默认返回为空。 */
    ErrorDescription?: string | null;
    /** 该字段用于返回检测结果所对应的标签。如果未命中恶意，返回Normal，如果命中恶意，则返回Labels中优先级最高的标签 */
    Label?: string | null;
    /** 该字段用于返回检测结果明细数据相关的cos url */
    SegmentCosUrlList?: SegmentCosUrlList | null;
    /** 该字段用于返回音频审核的ASR识别结果 */
    AudioText?: string | null;
    /** 在秒后重试 */
    TryInSeconds?: number | null;
    /** 该字段用于返回音频文件识别出的对应文本内容。 */
    Asrs?: RcbAsr[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTasksRequest {
    /** 该参数表示任务列表每页展示的任务条数，**默认值为10**（每页展示10条任务）。 */
    Limit?: number;
    /** 该参数表示任务筛选器的输入参数，可根据业务类型、审核文件类型、处理建议及任务状态筛选想要查看的审核任务，具体参数内容请参见TaskFilter数据结构的详细描述。 */
    Filter?: TaskFilter;
    /** 该参数表示翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。 */
    PageToken?: string;
    /** 该参数表示任务列表的开始时间，格式为ISO8601标准的时间戳。**默认值为最近3天**，若传入该参数，则在这一时间到EndTime之间的任务将会被筛选出来。备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。 */
    StartTime?: string;
    /** 该参数表示任务列表的结束时间，格式为ISO8601标准的时间戳。**默认值为空**，若传入该参数，则在这StartTime到这一时间之间的任务将会被筛选出来。备注：该参数与Filter共同起到任务筛选作用，二者作用无先后顺序。 */
    EndTime?: string;
  }

  interface DescribeTasksResponse {
    /** 该字段用于返回当前查询的任务总量，格式为int字符串。 */
    Total?: string | null;
    /** 该字段用于返回当前页的任务详细数据，具体输出内容请参见TaskData数据结构的详细描述。 */
    Data?: TaskData[] | null;
    /** 该字段用于返回翻页时使用的Token信息，由系统自动生成，并在翻页时向下一个生成的页面传递此参数，以方便快速翻页功能的实现。当到最后一页时，该字段为空。 */
    PageToken?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

declare namespace V20200709 {
  type VersionHeader = { headers: { 'X-TC-Version': '2020-07-09' } }

  /** 音频输出参数 */
  interface AudioResult {
    /** 是否命中0 未命中1 命中 */
    HitFlag: number | null;
    /** 命中的标签Porn 色情Polity 政治Illegal 违法Abuse 谩骂Terror 暴恐Ad 广告Moan 呻吟 */
    Label: string | null;
    /** 审核建议，可选值：Pass 通过，Review 建议人审，Block 确认违规 */
    Suggestion: string | null;
    /** 得分，0-100 */
    Score: number | null;
    /** 音频ASR文本 */
    Text: string | null;
    /** 音频片段存储URL，有效期为1天 */
    Url: string | null;
    /** 音频时长 */
    Duration: string | null;
    /** 拓展字段 */
    Extra: string | null;
    /** 文本审核结果 */
    TextResults: AudioResultDetailTextResult[] | null;
    /** 音频呻吟审核结果 */
    MoanResults: AudioResultDetailMoanResult[] | null;
    /** 音频语种检测结果 */
    LanguageResults: AudioResultDetailLanguageResult[] | null;
  }

  /** 音频小语种检测结果 */
  interface AudioResultDetailLanguageResult {
    /** 语种 */
    Label: string | null;
    /** 得分 */
    Score: number | null;
    /** 开始时间 */
    StartTime: number | null;
    /** 结束时间 */
    EndTime: number | null;
    /** 子标签码 */
    SubLabelCode: string | null;
  }

  /** 音频呻吟审核结果 */
  interface AudioResultDetailMoanResult {
    /** 固定为Moan */
    Label: string | null;
    /** 分数 */
    Score: number;
    /** 开始时间 */
    StartTime: number;
    /** 结束时间 */
    EndTime: number;
    /** 子标签码 */
    SubLabelCode: string;
  }

  /** 音频ASR文本审核结果 */
  interface AudioResultDetailTextResult {
    /** 标签 */
    Label: string | null;
    /** 命中的关键词 */
    Keywords: string[] | null;
    /** 命中的LibId */
    LibId: string | null;
    /** 命中的LibName */
    LibName: string | null;
    /** 得分 */
    Score: number | null;
    /** 词库类型 1 黑白库 2 自定义库 */
    LibType: number | null;
    /** 审核建议 */
    Suggestion: string | null;
  }

  /** 声音段信息 */
  interface AudioSegments {
    /** 截帧时间。点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10直播流：该值为时间戳，例如：1594650717 */
    OffsetTime: string | null;
    /** 结果集 */
    Result: AudioResult | null;
  }

  /** 文件桶信息参考腾讯云存储相关说明 https://cloud.tencent.com/document/product/436/44352 */
  interface BucketInfo {
    /** 腾讯云对象存储，存储桶名称 */
    Bucket: string;
    /** 地域 */
    Region: string;
    /** 对象Key */
    Object: string;
  }

  /** 违规数据分布 */
  interface EvilCount {
    /** 违规类型：Terror	24001Porn	20002Polity	20001Ad	20105Abuse	20007	Illegal	20006	Spam	25001	Moan	26001 */
    EvilType: string;
    /** 分布类型总量 */
    Count: number;
  }

  /** Cos FileOutput */
  interface FileOutput {
    /** 存储的Bucket */
    Bucket: string;
    /** Cos Region */
    Region: string;
    /** 对象前缀 */
    ObjectPrefix: string;
  }

  /** 视频过滤条件 */
  interface Filters {
    /** 查询字段：策略BizType子账号SubUin日期区间DateRange */
    Name: string;
    /** 查询值 */
    Values: string[];
  }

  /** Result结果详情 */
  interface ImageResult {
    /** 违规标志0 未命中1 命中 */
    HitFlag: number | null;
    /** 命中的标签Porn 色情Sexy 性感Polity 政治Illegal 违法Abuse 谩骂Terror 暴恐Ad 广告 */
    Label: string | null;
    /** 审核建议，可选值：Pass 通过，Review 建议人审，Block 确认违规 */
    Suggestion: string | null;
    /** 得分 */
    Score: number | null;
    /** 画面截帧图片结果集 */
    Results: ImageResultResult[] | null;
    /** 图片URL地址 */
    Url: string | null;
    /** 附加字段 */
    Extra: string | null;
  }

  /** 图片输出结果的子结果 */
  interface ImageResultResult {
    /** 场景Porn 色情Sexy 性感Polity 政治Illegal 违法Abuse 谩骂Terror 暴恐Ad 广告 */
    Scene: string | null;
    /** 是否命中0 未命中1 命中 */
    HitFlag: number | null;
    /** 审核建议，可选值：Pass 通过，Review 建议人审，Block 确认违规 */
    Suggestion: string | null;
    /** 标签 */
    Label: string | null;
    /** 子标签 */
    SubLabel: string | null;
    /** 分数 */
    Score: number | null;
    /** 如果命中场景为涉政，则该数据为人物姓名列表，否则null */
    Names: string[] | null;
    /** 图片OCR文本 */
    Text: string | null;
    /** 其他详情 */
    Details: ImageResultsResultDetail[] | null;
  }

  /** 具体场景下的图片识别结果 */
  interface ImageResultsResultDetail {
    /** 任务名称 */
    Name: string | null;
    /** OCR识别文本 */
    Text: string | null;
    /** 位置信息 */
    Location: ImageResultsResultDetailLocation | null;
    /** 标签 */
    Label: string | null;
    /** 库ID */
    LibId: string | null;
    /** 库名称 */
    LibName: string | null;
    /** 命中的关键词 */
    Keywords: string[] | null;
    /** 建议 */
    Suggestion: string | null;
    /** 得分 */
    Score: number | null;
    /** 子标签码 */
    SubLabelCode: string | null;
  }

  /** 图片详情位置信息 */
  interface ImageResultsResultDetailLocation {
    /** x坐标 */
    X: number | null;
    /** y坐标 */
    Y: number | null;
    /** 宽度 */
    Width: number | null;
    /** 高度 */
    Height: number | null;
    /** 旋转角度 */
    Rotate: number | null;
  }

  /** 图片段信息 */
  interface ImageSegments {
    /** 截帧时间。点播文件：该值为相对于视频偏移时间，单位为秒，例如：0，5，10直播流：该值为时间戳，例如：1594650717 */
    OffsetTime: string;
    /** 画面截帧结果详情 */
    Result: ImageResult;
  }

  /** 输入信息详情 */
  interface InputInfo {
    /** 传入的类型可选：URL，COS */
    Type: string | null;
    /** Url地址 */
    Url: string | null;
    /** 桶信息。当输入当时COS时，该字段不为空 */
    BucketInfo: string | null;
  }

  /** 媒体类型 */
  interface MediaInfo {
    /** 编码格式 */
    Codecs: string;
    /** 流检测时分片时长注意：此字段可能返回 0，表示取不到有效值。 */
    Duration: number;
    /** 宽，单位为像素 */
    Width: number;
    /** 高，单位为像素 */
    Height: number;
  }

  /** 媒体审核配置 */
  interface MediaModerationConfig {
    /** 是否使用OCR，默认为true */
    UseOCR: boolean;
    /** 是否使用音频，默认为true。视频场景下，默认为 false */
    UseAudio: boolean;
    /** 图片取帧频率, 单位（秒/帧），默认 5， 可选 1 ～ 300 */
    ImageFrequency?: number;
    /** 音频片段长度。单位为：秒 */
    AudioFrequency?: number;
    /** 临时文件存储位置 */
    SegmentOutput?: FileOutput;
    /** 回调地址 */
    CallbackUrl?: string;
  }

  /** 识别结果统计 */
  interface Overview {
    /** 总调用量 */
    TotalCount: number;
    /** 总调用时长 */
    TotalHour: number;
    /** 通过量 */
    PassCount: number;
    /** 通过时长 */
    PassHour: number;
    /** 违规量 */
    EvilCount: number;
    /** 违规时长 */
    EvilHour: number;
    /** 疑似违规量 */
    SuspectCount: number;
    /** 疑似违规时长 */
    SuspectHour: number;
  }

  /** 数据存储信息 */
  interface StorageInfo {
    /** 类型 可选：URL 资源链接类型COS 腾讯云对象存储类型 */
    Type?: string;
    /** 资源链接 */
    Url?: string;
    /** 腾讯云存储桶信息 */
    BucketInfo?: BucketInfo;
  }

  /** 音视频任务结构 */
  interface TaskInput {
    /** 数据ID */
    DataId?: string;
    /** 任务名 */
    Name?: string;
    /** 任务输入 */
    Input?: StorageInfo;
  }

  /** 任务输出标签 */
  interface TaskLabel {
    /** 命中的标签Porn 色情Sexy 性感Polity 政治Illegal 违法Abuse 谩骂Terror 暴恐Ad 广告 */
    Label: string | null;
    /** 审核建议，可选值：Pass 通过，Review 建议人审，Block 确认违规 */
    Suggestion: string | null;
    /** 得分，分数是 0 ～ 100 */
    Score: number | null;
  }

  /** 创建任务时的返回结果 */
  interface TaskResult {
    /** 请求时传入的DataId */
    DataId: string | null;
    /** TaskId，任务ID */
    TaskId: string | null;
    /** 错误码。如果code为OK，则表示创建成功，其他则参考公共错误码 */
    Code: string | null;
    /** 如果错误，该字段表示错误详情 */
    Message: string | null;
  }

  /** 识别量统计 */
  interface TrendCount {
    /** 总调用量 */
    TotalCount: number;
    /** 总调用时长 */
    TotalHour: number;
    /** 通过量 */
    PassCount: number;
    /** 通过时长 */
    PassHour: number;
    /** 违规量 */
    EvilCount: number;
    /** 违规时长 */
    EvilHour: number;
    /** 疑似违规量 */
    SuspectCount: number;
    /** 疑似违规时长 */
    SuspectHour: number;
    /** 日期 */
    Date: string;
  }

  interface CancelTaskRequest {
    /** 任务ID */
    TaskId: string;
  }

  interface CancelTaskResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateBizConfigRequest {
    /** 业务ID，仅限英文字母、数字和下划线（_）组成，长度不超过8位 */
    BizType: string;
    /** 审核分类信息 */
    MediaModeration: MediaModerationConfig;
    /** 业务名称，用于标识业务场景，长度不超过32位 */
    BizName?: string;
    /** 审核内容，可选：Polity (政治); Porn (色情); Illegal(违法);Abuse (谩骂); Terror (暴恐); Ad (广告); Custom (自定义); */
    ModerationCategories?: string[];
  }

  interface CreateBizConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateVideoModerationTaskRequest {
    /** 业务类型, 定义 模版策略，输出存储配置。如果没有BizType，可以先参考 【创建业务配置】接口进行创建 */
    BizType: string;
    /** 任务类型：可选VIDEO（点播视频），LIVE_VIDEO（直播视频） */
    Type: string;
    /** 输入的任务信息，最多可以同时创建10个任务 */
    Tasks: TaskInput[];
    /** 回调签名key，具体可以查看签名文档。 */
    Seed?: string;
    /** 接收审核信息回调地址，如果设置，则审核过程中产生的违规音频片段和画面截帧发送此接口 */
    CallbackUrl?: string;
    /** 审核排队优先级。当您有多个视频审核任务排队时，可以根据这个参数控制排队优先级。用于处理插队等逻辑。默认该参数为0 */
    Priority?: number;
  }

  interface CreateVideoModerationTaskResponse {
    /** 任务创建结果 */
    Results?: TaskResult[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskDetailRequest {
    /** 任务ID，创建任务后返回的TaskId字段 */
    TaskId: string;
    /** 是否展示所有分片，默认只展示命中规则的分片 */
    ShowAllSegments?: boolean;
  }

  interface DescribeTaskDetailResponse {
    /** 任务Id */
    TaskId?: string | null;
    /** 审核时传入的数据Id */
    DataId?: string | null;
    /** 业务类型 */
    BizType?: string | null;
    /** 任务名称 */
    Name?: string | null;
    /** 状态，可选值：FINISH 已完成PENDING 等待中RUNNING 进行中ERROR 出错CANCELLED 已取消 */
    Status?: string | null;
    /** 类型 */
    Type?: string | null;
    /** 审核建议可选：Pass 通过Reveiw 建议复审Block 确认违规 */
    Suggestion?: string | null;
    /** 审核结果 */
    Labels?: TaskLabel[] | null;
    /** 媒体解码信息 */
    MediaInfo?: MediaInfo | null;
    /** 任务信息 */
    InputInfo?: InputInfo | null;
    /** 创建时间 */
    CreatedAt?: string | null;
    /** 更新时间 */
    UpdatedAt?: string | null;
    /** 在秒后重试 */
    TryInSeconds?: number | null;
    /** 图片结果 */
    ImageSegments?: ImageSegments[] | null;
    /** 音频结果 */
    AudioSegments?: AudioSegments[] | null;
    /** 如果返回的状态为ERROR，该字段会标记错误类型。可选值：：DECODE_ERROR: 解码失败。（输入资源中可能包含无法解码的视频）URL_ERROR：下载地址验证失败。TIMEOUT_ERROR：处理超时。 */
    ErrorType?: string | null;
    /** 审核任务错误日志。当Error不为空时，会展示该字段 */
    ErrorDescription?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeVideoStatRequest {
    /** 审核类型 1: 机器审核; 2: 人工审核 */
    AuditType: number;
    /** 查询条件 */
    Filters: Filters[];
  }

  interface DescribeVideoStatResponse {
    /** 识别结果统计 */
    Overview?: Overview;
    /** 识别量统计 */
    TrendCount?: TrendCount[];
    /** 违规数据分布 */
    EvilCount?: EvilCount[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Vm 视频内容安全} */
declare interface Vm {
  (): Versions;
  /** 取消任务 {@link CancelTaskRequest} {@link CancelTaskResponse} */
  CancelTask(data: CancelTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CancelTaskResponse>;
  /** 创建视频审核任务 {@link CreateVideoModerationTaskRequest} {@link CreateVideoModerationTaskResponse} */
  CreateVideoModerationTask(data: CreateVideoModerationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVideoModerationTaskResponse>;
  /** 查看任务详情 {@link DescribeTaskDetailRequest} {@link DescribeTaskDetailResponse} */
  DescribeTaskDetail(data: DescribeTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskDetailResponse>;
  /** 查看审核任务列表 {@link DescribeTasksRequest} {@link DescribeTasksResponse} */
  DescribeTasks(data?: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** 取消任务 {@link V20201229.CancelTaskRequest} {@link V20201229.CancelTaskResponse} */
  CancelTask(data: V20201229.CancelTaskRequest, config: AxiosRequestConfig & V20201229.VersionHeader): AxiosPromise<V20201229.CancelTaskResponse>;
  /** 创建视频审核任务 {@link V20201229.CreateVideoModerationTaskRequest} {@link V20201229.CreateVideoModerationTaskResponse} */
  CreateVideoModerationTask(data: V20201229.CreateVideoModerationTaskRequest, config: AxiosRequestConfig & V20201229.VersionHeader): AxiosPromise<V20201229.CreateVideoModerationTaskResponse>;
  /** 查看任务详情 {@link V20201229.DescribeTaskDetailRequest} {@link V20201229.DescribeTaskDetailResponse} */
  DescribeTaskDetail(data: V20201229.DescribeTaskDetailRequest, config: AxiosRequestConfig & V20201229.VersionHeader): AxiosPromise<V20201229.DescribeTaskDetailResponse>;
  /** 查看审核任务列表 {@link V20201229.DescribeTasksRequest} {@link V20201229.DescribeTasksResponse} */
  DescribeTasks(data: V20201229.DescribeTasksRequest, config: AxiosRequestConfig & V20201229.VersionHeader): AxiosPromise<V20201229.DescribeTasksResponse>;
  /** 取消任务 {@link V20200709.CancelTaskRequest} {@link V20200709.CancelTaskResponse} */
  CancelTask(data: V20200709.CancelTaskRequest, config: AxiosRequestConfig & V20200709.VersionHeader): AxiosPromise<V20200709.CancelTaskResponse>;
  /** 创建业务配置 {@link V20200709.CreateBizConfigRequest} {@link V20200709.CreateBizConfigResponse} */
  CreateBizConfig(data: V20200709.CreateBizConfigRequest, config: AxiosRequestConfig & V20200709.VersionHeader): AxiosPromise<V20200709.CreateBizConfigResponse>;
  /** 创建视频审核任务 {@link V20200709.CreateVideoModerationTaskRequest} {@link V20200709.CreateVideoModerationTaskResponse} */
  CreateVideoModerationTask(data: V20200709.CreateVideoModerationTaskRequest, config: AxiosRequestConfig & V20200709.VersionHeader): AxiosPromise<V20200709.CreateVideoModerationTaskResponse>;
  /** 查看任务详情 {@link V20200709.DescribeTaskDetailRequest} {@link V20200709.DescribeTaskDetailResponse} */
  DescribeTaskDetail(data: V20200709.DescribeTaskDetailRequest, config: AxiosRequestConfig & V20200709.VersionHeader): AxiosPromise<V20200709.DescribeTaskDetailResponse>;
  /** 识别统计 {@link V20200709.DescribeVideoStatRequest} {@link V20200709.DescribeVideoStatResponse} */
  DescribeVideoStat(data: V20200709.DescribeVideoStatRequest, config: AxiosRequestConfig & V20200709.VersionHeader): AxiosPromise<V20200709.DescribeVideoStatResponse>;
}

export declare type Versions = ["2021-09-22", "2020-12-29", "2020-07-09"];

export default Vm;
