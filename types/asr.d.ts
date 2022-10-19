/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 音频流异步识别任务信息 */
declare interface AsyncRecognitionTaskInfo {
  /** 任务ID */
  TaskId: number;
  /** 音频流Url */
  Url: string;
}

/** 音频流异步识别任务列表 */
declare interface AsyncRecognitionTasks {
  /** 任务列表 */
  Tasks: AsyncRecognitionTaskInfo[] | null;
}

/** 热词的词和权重 */
declare interface HotWord {
  /** 热词 */
  Word: string;
  /** 权重 */
  Weight: number;
}

/** 自学习模型信息 */
declare interface Model {
  /** 模型名称 */
  ModelName: string;
  /** 模型文件名称 */
  DictName: string;
  /** 模型Id */
  ModelId: string;
  /** 模型类型，“8k”或者”16k“ */
  ModelType: string;
  /** 服务类型 */
  ServiceType: string;
  /** 模型状态，-1下线状态，1上线状态, 0训练中, -2 训练失败 */
  ModelState: number;
  /** 最后更新时间 */
  AtUpdated: string;
  /** 标签信息 */
  TagInfos: string[] | null;
}

/** 单句的详细识别结果，包含单个词的时间偏移，一般用于生成字幕的场景。 */
declare interface SentenceDetail {
  /** 单句最终识别结果 */
  FinalSentence: string | null;
  /** 单句中间识别结果，使用空格拆分为多个词 */
  SliceSentence: string | null;
  /** 单句开始时间（毫秒） */
  StartMs: number | null;
  /** 单句结束时间（毫秒） */
  EndMs: number | null;
  /** 单句中词个数 */
  WordsNum: number | null;
  /** 单句中词详情 */
  Words: SentenceWords[] | null;
  /** 单句语速，单位：字数/秒 */
  SpeechSpeed: number | null;
  /** 声道或说话人 Id（请求中如果设置了 speaker_diarization或者ChannelNum为双声道，可区分说话人或声道） */
  SpeakerId: number | null;
}

/** 一句话识别返回的词时间戳 */
declare interface SentenceWord {
  /** 词结果 */
  Word: string;
  /** 词在音频中的开始时间 */
  StartTime: number;
  /** 词在音频中的结束时间 */
  EndTime: number;
}

/** 识别结果中词文本，以及对应时间偏移 */
declare interface SentenceWords {
  /** 词文本 */
  Word: string | null;
  /** 在句子中的开始时间偏移量 */
  OffsetStartMs: number | null;
  /** 在句子中的结束时间偏移量 */
  OffsetEndMs: number | null;
}

/** 录音文件识别、实时语音异步识别请求的返回数据 */
declare interface Task {
  /** 任务ID，可通过此ID在轮询接口获取识别状态与结果。注意：TaskId数据类型为uint64 */
  TaskId: number;
}

/** 获取录音识别结果的返回参数 */
declare interface TaskStatus {
  /** 任务标识。 */
  TaskId: number;
  /** 任务状态码，0：任务等待，1：任务执行中，2：任务成功，3：任务失败。 */
  Status: number;
  /** 任务状态，waiting：任务等待，doing：任务执行中，success：任务成功，failed：任务失败。 */
  StatusStr: string;
  /** 识别结果。 */
  Result: string;
  /** 失败原因说明。 */
  ErrorMsg: string;
  /** 识别结果详情，包含每个句子中的词时间偏移，一般用于生成字幕的场景。(录音识别请求中ResTextFormat=1时该字段不为空) */
  ResultDetail: SentenceDetail[] | null;
  /** 音频时长(秒)。 */
  AudioDuration: number | null;
}

/** 词表内容 */
declare interface Vocab {
  /** 热词表名称 */
  Name: string;
  /** 热词表描述 */
  Description: string;
  /** 热词表ID */
  VocabId: string;
  /** 词权重列表 */
  WordWeights: HotWord[];
  /** 词表创建时间 */
  CreateTime: string;
  /** 词表更新时间 */
  UpdateTime: string;
  /** 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态 */
  State: number;
  /** 标签数组 */
  TagInfos: string[] | null;
}

declare interface CloseAsyncRecognitionTaskRequest {
  /** 语音流异步识别任务的唯一标识，在创建任务时会返回 */
  TaskId: number;
}

declare interface CloseAsyncRecognitionTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAsrVocabRequest {
  /** 热词表名称，长度在1-255之间 */
  Name: string;
  /** 热词表描述，长度在0-1000之间 */
  Description?: string;
  /** 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10，权重为[1,10]之间整数，数组长度不大于128 */
  WordWeights?: HotWord[];
  /** 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略 */
  WordWeightStr?: string;
}

declare interface CreateAsrVocabResponse {
  /** 词表ID，可用于获取词表信息 */
  VocabId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAsyncRecognitionTaskRequest {
  /** 引擎模型类型。• 16k_zh：16k 中文普通话通用；• 16k_zh_video：16k 音视频领域；• 16k_en：16k 英语；• 16k_ca：16k 粤语； */
  EngineType: string;
  /** 语音流地址，支持rtmp、rtsp等流媒体协议，以及各类基于http协议的直播流(不支持hls) */
  Url: string;
  /** 支持HTTP和HTTPS协议，用于接收识别结果，您需要自行搭建公网可调用的服务。回调格式&内容详见：[语音流异步识别回调说明](https://cloud.tencent.com/document/product/1093/52633) */
  CallbackUrl: string;
  /** 用于生成回调通知中的签名 */
  SignToken?: string;
  /** 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0 */
  FilterDirty?: number;
  /** 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0 */
  FilterModal?: number;
  /** 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认为0 */
  FilterPunc?: number;
  /** 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1 */
  ConvertNumMode?: number;
  /** 是否显示词级别时间戳。0：不显示；1：显示，不包含标点时间戳，2：显示，包含标点时间戳。默认为0 */
  WordInfo?: number;
  /** 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。 */
  HotwordId?: string;
  /** 回调数据中，是否需要对应音频数据。 */
  AudioData?: boolean;
}

declare interface CreateAsyncRecognitionTaskResponse {
  /** 请求返回结果，包含本次的任务ID(TaskId) */
  Data: Task;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCustomizationRequest {
  /** 自学习模型名称，需在1-20字符之间 */
  ModelName: string;
  /** 文本文件的下载地址，服务会从该地址下载文件，目前仅支持腾讯云cos */
  TextUrl: string;
  /** 自学习模型类型，填写8k或者16k */
  ModelType: string;
  /** 标签信息 */
  TagInfos?: string[];
}

declare interface CreateCustomizationResponse {
  /** 模型ID */
  ModelId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRecTaskRequest {
  /** 引擎模型类型。注意：非电话场景请务必使用16k的引擎。电话场景：• 8k_en：电话 8k 英语；• 8k_zh：电话 8k 中文普通话通用；非电话场景：• 16k_zh：16k 中文普通话通用；• 16k_zh_video：16k 音视频领域；• 16k_en：16k 英语；• 16k_ca：16k 粤语；• 16k_ja：16k 日语；• 16k_zh_edu 中文教育；• 16k_en_edu 英文教育；• 16k_zh_medical 医疗；• 16k_th 泰语； */
  EngineModelType: string;
  /** 识别声道数。1：单声道（非电话场景，直接选择单声道即可，忽略音频声道数）；2：双声道（仅支持8k_zh电话场景，双声道应分别对应通话双方）。注意：双声道的电话音频已物理分离说话人，无需再开启说话人分离功能。 */
  ChannelNum: number;
  /** 识别结果返回形式。0： 识别结果文本(含分段时间戳)； 1：词级别粒度的[详细识别结果](https://cloud.tencent.com/document/api/1093/37824)(不含标点，含语速值)；2：词级别粒度的详细识别结果（包含标点、语速值）；3: 标点符号分段，包含每段时间戳，特别适用于字幕场景（包含词级时间、标点、语速值）。 */
  ResTextFormat: number;
  /** 语音数据来源。0：语音 URL；1：语音数据（post body）。 */
  SourceType: number;
  /** 是否开启说话人分离，0：不开启，1：开启(仅支持8k_zh，16k_zh，16k_zh_video，单声道音频)，默认值为 0。注意：8k电话场景建议使用双声道来区分通话双方，设置ChannelNum=2即可，不用开启说话人分离。 */
  SpeakerDiarization?: number;
  /** 说话人分离人数（需配合开启说话人分离使用），取值范围：0-10，0代表自动分离（目前仅支持≤6个人），1-10代表指定说话人数分离。默认值为 0。注：话者分离目前是beta版本，请根据您的需要谨慎使用 */
  SpeakerNumber?: number;
  /** 回调 URL，用户自行搭建的用于接收识别结果的服务URL。如果用户使用轮询方式获取识别结果，则无需提交该参数。回调格式&内容详见：[录音识别回调说明](https://cloud.tencent.com/document/product/1093/52632) */
  CallbackUrl?: string;
  /** 语音的URL地址，需要公网可下载。长度小于2048字节，当 SourceType 值为 0 时须填写该字段，为 1 时不需要填写。注意：请确保录音文件时长在5个小时之内，否则可能识别失败。请保证文件的下载速度，否则可能下载失败。 */
  Url?: string;
  /** 语音数据base64编码，当SourceType 值为1时必须填写，为0可不写。音频数据要小于5MB。 */
  Data?: string;
  /** 数据长度，非必填（此数据长度为数据未进行base64编码时的数据长度）。 */
  DataLen?: number;
  /** 是否进行阿拉伯数字智能转换（目前支持中文普通话引擎）。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字，3: 打开数学相关数字转换。默认值为 1。 */
  ConvertNumMode?: number;
  /** 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0。 */
  FilterDirty?: number;
  /** 热词表id。如不设置该参数，自动生效默认热词表；如设置了该参数，那么将生效对应的热词表。 */
  HotwordId?: string;
  /** 自学习模型 id。如设置了该参数，将生效对应的自学习模型。 */
  CustomizationId?: string;
  /** 附加参数(该参数无意义，忽略即可) */
  Extra?: string;
  /** 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认值为 0。 */
  FilterPunc?: number;
  /** 是否过滤语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0。 */
  FilterModal?: number;
}

declare interface CreateRecTaskResponse {
  /** 录音文件识别的请求返回结果，包含结果查询需要的TaskId */
  Data: Task;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAsrVocabRequest {
  /** 热词表Id */
  VocabId: string;
}

declare interface DeleteAsrVocabResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCustomizationRequest {
  /** 要删除的模型ID */
  ModelId: string;
}

declare interface DeleteCustomizationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAsyncRecognitionTasksRequest {
}

declare interface DescribeAsyncRecognitionTasksResponse {
  /** 任务列表 */
  Data?: AsyncRecognitionTasks | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskStatusRequest {
  /** 从CreateRecTask接口获取的TaskId，用于获取任务状态与结果。 */
  TaskId: number;
}

declare interface DescribeTaskStatusResponse {
  /** 录音文件识别的请求返回结果。 */
  Data: TaskStatus;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DownloadAsrVocabRequest {
  /** 词表ID。 */
  VocabId: string;
}

declare interface DownloadAsrVocabResponse {
  /** 词表ID。 */
  VocabId?: string;
  /** 词表权重文件形式的base64值。 */
  WordWeightStr?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DownloadCustomizationRequest {
  /** 自学习模型ID */
  ModelId: string;
}

declare interface DownloadCustomizationResponse {
  /** 下载地址 */
  DownloadUrl: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetAsrVocabListRequest {
  /** 标签信息，格式为“$TagKey : $TagValue ”，中间分隔符为“空格”+“:”+“空格” */
  TagInfos?: string[];
  /** 分页Offset */
  Offset?: number;
  /** 分页Limit */
  Limit?: number;
}

declare interface GetAsrVocabListResponse {
  /** 热词表列表 */
  VocabList: Vocab[];
  /** 热词列表总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetAsrVocabRequest {
  /** 热词表ID */
  VocabId: string;
}

declare interface GetAsrVocabResponse {
  /** 热词表名称 */
  Name?: string;
  /** 热词表描述 */
  Description?: string;
  /** 热词表ID */
  VocabId?: string;
  /** 词权重列表 */
  WordWeights?: HotWord[];
  /** 词表创建时间 */
  CreateTime?: string;
  /** 词表更新时间 */
  UpdateTime?: string;
  /** 热词表状态，1为默认状态即在识别时默认加载该热词表进行识别，0为初始状态 */
  State?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetCustomizationListRequest {
  /** 标签信息，格式为“$TagKey : $TagValue ”，中间分隔符为“空格”+“:”+“空格” */
  TagInfos?: string[];
  /** 分页大小，默认1000 */
  Limit?: number;
  /** 分页offset，默认0 */
  Offset?: number;
}

declare interface GetCustomizationListResponse {
  /** 自学习模型数组 */
  Data: Model[] | null;
  /** 自学习模型总量 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCustomizationRequest {
  /** 要修改的模型ID */
  ModelId: string;
  /** 要修改的模型名称，长度需在1-20个字符之间 */
  ModelName?: string;
  /** 要修改的模型类型，为8k或者16k */
  ModelType?: string;
  /** 要修改的模型语料的下载地址，目前仅支持腾讯云cos */
  TextUrl?: string;
}

declare interface ModifyCustomizationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCustomizationStateRequest {
  /** 自学习模型ID */
  ModelId: string;
  /** 想要变换的模型状态，-1代表下线，1代表上线 */
  ToState: number;
}

declare interface ModifyCustomizationStateResponse {
  /** 自学习模型ID */
  ModelId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SentenceRecognitionRequest {
  /** 腾讯云项目 ID，废弃参数，默认填写0即可。 */
  ProjectId: number;
  /** 子服务类型。2： 一句话识别。 */
  SubServiceType: number;
  /** 引擎模型类型。电话场景：• 8k_en：电话 8k 英语；• 8k_zh：电话 8k 中文普通话通用；非电话场景：• 16k_zh：16k 中文普通话通用；• 16k_en：16k 英语；• 16k_ca：16k 粤语；• 16k_ja：16k 日语；• 16k_zh_medical：16k 医疗； */
  EngSerViceType: string;
  /** 语音数据来源。0：语音 URL；1：语音数据（post body）。 */
  SourceType: number;
  /** 识别音频的音频格式，支持wav、pcm、ogg-opus、speex、silk、mp3、m4a、aac。 */
  VoiceFormat: string;
  /** 用户端对此任务的唯一标识。废弃参数，忽略即可。 */
  UsrAudioKey: string;
  /** 语音 URL，公网可下载。当 SourceType 值为 0（语音 URL上传） 时须填写该字段，为 1 时不填；URL 的长度大于 0，小于 2048，需进行urlencode编码。音频时长不能超过60s，音频文件大小不能超过3MB。 */
  Url?: string;
  /** 语音数据，当SourceType 值为1（本地语音数据上传）时必须填写，当SourceType 值为0（语音 URL上传）可不写。要使用base64编码(采用python语言时注意读取文件应该为string而不是byte，以byte格式读取后要decode()。编码后的数据不可带有回车换行符)。音频时长不能超过60s，音频文件大小不能超过3MB（Base64后）。 */
  Data?: string;
  /** 数据长度，单位为字节。当 SourceType 值为1（本地语音数据上传）时必须填写，当 SourceType 值为0（语音 URL上传）可不写（此数据长度为数据未进行base64编码时的数据长度）。 */
  DataLen?: number;
  /** 是否显示词级别时间戳。0：不显示；1：显示，不包含标点时间戳，2：显示，包含标点时间戳。默认值为 0。 */
  WordInfo?: number;
  /** 是否过滤脏词（目前支持中文普通话引擎）。0：不过滤脏词；1：过滤脏词；2：将脏词替换为 * 。默认值为 0。 */
  FilterDirty?: number;
  /** 是否过语气词（目前支持中文普通话引擎）。0：不过滤语气词；1：部分过滤；2：严格过滤 。默认值为 0。 */
  FilterModal?: number;
  /** 是否过滤标点符号（目前支持中文普通话引擎）。 0：不过滤，1：过滤句末标点，2：过滤所有标点。默认值为 0。 */
  FilterPunc?: number;
  /** 是否进行阿拉伯数字智能转换。0：不转换，直接输出中文数字，1：根据场景智能转换为阿拉伯数字。默认值为1。 */
  ConvertNumMode?: number;
  /** 热词id。用于调用对应的热词表，如果在调用语音识别服务时，不进行单独的热词id设置，自动生效默认热词；如果进行了单独的热词id设置，那么将生效单独设置的热词id。 */
  HotwordId?: string;
  /** 自学习模型 id。如设置了该参数，将生效对应的自学习模型。 */
  CustomizationId?: string;
}

declare interface SentenceRecognitionResponse {
  /** 识别结果。 */
  Result: string;
  /** 请求的音频时长，单位为ms */
  AudioDuration: number;
  /** 词时间戳列表的长度 */
  WordSize: number | null;
  /** 词时间戳列表 */
  WordList: SentenceWord[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetVocabStateRequest {
  /** 热词表ID。 */
  VocabId: string;
  /** 热词表状态，1：设为默认状态；0：设为非默认状态。 */
  State: number;
}

declare interface SetVocabStateResponse {
  /** 热词表ID */
  VocabId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAsrVocabRequest {
  /** 热词表ID */
  VocabId: string;
  /** 热词表名称，长度在1-255之间 */
  Name?: string;
  /** 词权重数组，包含全部的热词和对应的权重。每个热词的长度不大于10，权重为[1,10]之间整数，数组长度不大于128 */
  WordWeights?: HotWord[];
  /** 词权重文件（纯文本文件）的二进制base64编码，以行分隔，每行的格式为word|weight，即以英文符号|为分割，左边为词，右边为权重，如：你好|5。当用户传此参数（参数长度大于0），即以此参数解析词权重，WordWeights会被忽略 */
  WordWeightStr?: string;
  /** 热词表描述，长度在0-1000之间 */
  Description?: string;
}

declare interface UpdateAsrVocabResponse {
  /** 热词表ID */
  VocabId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** 语音识别 */
declare interface Asr {
  (): Versions;
  /** 语音流异步识别任务关闭 */
  CloseAsyncRecognitionTask(data: CloseAsyncRecognitionTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CloseAsyncRecognitionTaskResponse>;
  /** 创建热词表 */
  CreateAsrVocab(data: CreateAsrVocabRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAsrVocabResponse>;
  /** 语音流异步识别任务创建 */
  CreateAsyncRecognitionTask(data: CreateAsyncRecognitionTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAsyncRecognitionTaskResponse>;
  /** 创建自学习模型 */
  CreateCustomization(data: CreateCustomizationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomizationResponse>;
  /** 录音文件识别请求 */
  CreateRecTask(data: CreateRecTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRecTaskResponse>;
  /** 删除热词表 */
  DeleteAsrVocab(data: DeleteAsrVocabRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAsrVocabResponse>;
  /** 删除自学习模型 */
  DeleteCustomization(data: DeleteCustomizationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomizationResponse>;
  /** 语音流异步识别任务列表 */
  DescribeAsyncRecognitionTasks(data?: DescribeAsyncRecognitionTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAsyncRecognitionTasksResponse>;
  /** 录音文件识别结果查询 */
  DescribeTaskStatus(data: DescribeTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStatusResponse>;
  /** 下载热词表 */
  DownloadAsrVocab(data: DownloadAsrVocabRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadAsrVocabResponse>;
  /** 下载自学习模型语料 */
  DownloadCustomization(data: DownloadCustomizationRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadCustomizationResponse>;
  /** 获取热词表 */
  GetAsrVocab(data: GetAsrVocabRequest, config?: AxiosRequestConfig): AxiosPromise<GetAsrVocabResponse>;
  /** 列举热词表 */
  GetAsrVocabList(data: GetAsrVocabListRequest, config?: AxiosRequestConfig): AxiosPromise<GetAsrVocabListResponse>;
  /** 查询自学习模型列表 */
  GetCustomizationList(data: GetCustomizationListRequest, config?: AxiosRequestConfig): AxiosPromise<GetCustomizationListResponse>;
  /** 更新自学习模型 */
  ModifyCustomization(data: ModifyCustomizationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomizationResponse>;
  /** 修改自学习模型状态 */
  ModifyCustomizationState(data: ModifyCustomizationStateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomizationStateResponse>;
  /** 一句话识别 */
  SentenceRecognition(data: SentenceRecognitionRequest, config?: AxiosRequestConfig): AxiosPromise<SentenceRecognitionResponse>;
  /** 设置热词表状态 */
  SetVocabState(data: SetVocabStateRequest, config?: AxiosRequestConfig): AxiosPromise<SetVocabStateResponse>;
  /** 更新热词表 */
  UpdateAsrVocab(data: UpdateAsrVocabRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAsrVocabResponse>;
}

export declare type Versions = ["2019-06-14"];

export default Asr;
