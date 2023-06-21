/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 年龄语音识别子任务 */
declare interface AgeDetectTask {
  /** 数据唯一ID */
  DataId: string;
  /** 数据文件的url，为 urlencode 编码,音频文件格式支持的类型：.wav、.m4a、.amr、.mp3、.aac、.wma、.ogg */
  Url: string;
}

/** 年龄语音任务结果 */
declare interface AgeDetectTaskResult {
  /** 数据唯一ID */
  DataId: string;
  /** 数据文件的url */
  Url: string;
  /** 任务状态，0: 已创建，1:运行中，2:正常结束，3:异常结束，4:运行超时 */
  Status: number;
  /** 任务结果：0: 成年，1:未成年，100:未知 */
  Age: number;
}

/** 应用用量统计数据 */
declare interface AppStatisticsItem {
  /** 实时语音统计数据 */
  RealtimeSpeechStatisticsItem: RealTimeSpeechStatisticsItem | null;
  /** 语音消息统计数据 */
  VoiceMessageStatisticsItem: VoiceMessageStatisticsItem | null;
  /** 语音过滤统计数据 */
  VoiceFilterStatisticsItem: VoiceFilterStatisticsItem | null;
  /** 统计时间 */
  Date: string;
  /** 录音转文本用量统计数据 */
  AudioTextStatisticsItem: AudioTextStatisticsItem | null;
  /** 流式转文本用量数据 */
  StreamTextStatisticsItem: StreamTextStatisticsItem | null;
  /** 海外转文本用量数据 */
  OverseaTextStatisticsItem: OverseaTextStatisticsItem | null;
  /** 实时语音转文本用量数据 */
  RealtimeTextStatisticsItem: RealtimeTextStatisticsItem | null;
}

/** 应用统计数据 */
declare interface ApplicationDataStatistics {
  /** 应用ID */
  BizId: number;
  /** Dau统计项数目 */
  DauDataNum: number;
  /** 大陆地区Dau统计数据，单位人 */
  DauDataMainland: StatisticsItem[];
  /** 海外地区Dau统计数据，单位人 */
  DauDataOversea: StatisticsItem[];
  /** 大陆和海外地区Dau统计数据汇总，单位人 */
  DauDataSum: StatisticsItem[];
  /** 实时语音时长统计项数目 */
  DurationDataNum: number;
  /** 大陆地区实时语音时长统计数据，单位分钟 */
  DurationDataMainland: StatisticsItem[];
  /** 海外地区实时语音时长统计数据，单位分钟 */
  DurationDataOversea: StatisticsItem[];
  /** 大陆和海外地区实时语音时长统计数据汇总，单位分钟 */
  DurationDataSum: StatisticsItem[];
  /** Pcu统计项数目 */
  PcuDataNum: number;
  /** 大陆地区Pcu统计数据，单位人 */
  PcuDataMainland: StatisticsItem[];
  /** 海外地区Pcu统计数据，单位人 */
  PcuDataOversea: StatisticsItem[];
  /** 大陆和海外地区Pcu统计数据汇总，单位人 */
  PcuDataSum: StatisticsItem[];
}

/** 获取应用列表返回 */
declare interface ApplicationList {
  /** 服务开关状态 */
  ServiceConf: ServiceStatus;
  /** 应用ID(AppID) */
  BizId: number;
  /** 应用名称 */
  AppName: string;
  /** 项目ID，默认为0 */
  ProjectId: number;
  /** 应用状态，返回0表示正常，1表示关闭，2表示欠费停服，3表示欠费回收 */
  AppStatus: number;
  /** 创建时间，Unix时间戳格式 */
  CreateTime: number;
  /** 应用类型，无需关注此数值 */
  AppType: number;
}

/** 语音转文本配置数据 */
declare interface AsrConf {
  /** 语音转文本服务开关，取值：open/close */
  Status?: string;
}

/** 录音转文本用量统计数据 */
declare interface AudioTextStatisticsItem {
  /** 统计值，单位：秒 */
  Data: number | null;
}

/** CreateApp的输出参数 */
declare interface CreateAppResp {
  /** 应用ID，由后台自动生成。 */
  BizId: number;
  /** 应用名称，透传输入参数的AppName */
  AppName: string;
  /** 项目ID，透传输入的ProjectId */
  ProjectId: number;
  /** 应用密钥，GME SDK初始化时使用 */
  SecretKey: string;
  /** 服务创建时间戳 */
  CreateTime: number;
  /** 实时语音服务配置数据 */
  RealtimeSpeechConf: RealtimeSpeechConf;
  /** 语音消息服务配置数据 */
  VoiceMessageConf: VoiceMessageConf;
  /** 语音分析服务配置数据 */
  VoiceFilterConf: VoiceFilterConf;
  /** 语音转文本服务配置数据 */
  AsrConf?: AsrConf;
}

/** 语音消息转文本热句模型配置 */
declare interface CustomizationConfigs {
  /** 应用 ID，登录控制台创建应用得到的AppID */
  BizId: number;
  /** 模型ID */
  ModelId: string;
  /** 模型状态，-1下线状态，1上线状态, 0训练中, -2训练失败, 3上线中, 4下线中 */
  ModelState: number;
  /** 模型名称 */
  ModelName?: string;
  /** 文本文件的下载地址，服务会从该地址下载文件，目前仅支持腾讯云cos */
  TextUrl?: string;
  /** 更新时间，11位时间戳 */
  UpdateTime?: number;
}

/** 剔除房间操作结果 */
declare interface DeleteResult {
  /** 错误码，0-剔除成功 其他-剔除失败 */
  Code: number;
  /** 错误描述 */
  ErrorMsg: string;
}

/** 获取应用用量统计数据输出参数 */
declare interface DescribeAppStatisticsResp {
  /** 应用用量统计数据 */
  AppStatistics: AppStatisticsItem[];
}

/** 语音检测结果返回 */
declare interface DescribeScanResult {
  /** 业务返回码 */
  Code: number;
  /** 数据唯一 ID */
  DataId: string;
  /** 检测完成的时间戳 */
  ScanFinishTime: number;
  /** 是否违规 */
  HitFlag: boolean;
  /** 是否为流 */
  Live: boolean;
  /** 业务返回描述 */
  Msg: string | null;
  /** 检测结果，Code 为 0 时返回 */
  ScanPiece: ScanPiece[] | null;
  /** 提交检测的时间戳 */
  ScanStartTime: number;
  /** 语音检测场景，对应请求时的 Scene */
  Scenes: string[];
  /** 语音检测任务 ID，由后台分配 */
  TaskId: string;
  /** 文件或接流地址 */
  Url: string;
  /** 检测任务执行结果状态，分别为：Start: 任务开始Success: 成功结束Error: 异常 */
  Status: string;
  /** 提交检测的应用 ID */
  BizId: number;
}

/** 查找过滤 */
declare interface Filter {
  /** 要过滤的字段名, 比如"AppName" */
  Name?: string;
  /** 多个关键字 */
  Values?: string[];
}

/** 房间内的事件 */
declare interface InOutTimeInfo {
  /** 进入房间时间 */
  StartTime: number;
  /** 退出房间时间 */
  EndTime: number;
}

/** ModifyAppStatus接口输出参数 */
declare interface ModifyAppStatusResp {
  /** GME应用ID */
  BizId: number;
  /** 应用状态，取值：open/close */
  Status: string;
}

/** 海外转文本用量数据 */
declare interface OverseaTextStatisticsItem {
  /** 统计值，单位：秒 */
  Data: number | null;
}

/** 实时语音用量统计数据 */
declare interface RealTimeSpeechStatisticsItem {
  /** 大陆地区DAU */
  MainLandDau: number;
  /** 大陆地区PCU */
  MainLandPcu: number;
  /** 大陆地区总使用时长，单位为min */
  MainLandDuration: number;
  /** 海外地区DAU */
  OverseaDau: number;
  /** 海外地区PCU */
  OverseaPcu: number;
  /** 海外地区总使用时长，单位为min */
  OverseaDuration: number;
}

/** 实时语音配置数据 */
declare interface RealtimeSpeechConf {
  /** 实时语音服务开关，取值：open/close */
  Status?: string;
  /** 实时语音音质类型，取值：high-高音质 ordinary-普通音质 */
  Quality?: string;
}

/** 实时语音转文本用量数据 */
declare interface RealtimeTextStatisticsItem {
  /** 统计值，单位：秒 */
  Data: number | null;
}

/** 房间内录制信息。 */
declare interface RecordInfo {
  /** 用户ID（当混流模式时，取值为0）。 */
  UserId: string;
  /** 录制文件名。 */
  FileName: string;
  /** 录制开始时间（unix时间戳如：1234567868）。 */
  RecordBeginTime: number;
  /** 录制状态：2代表正在录制 10代表等待转码 11代表正在转码 12正在上传 13代表上传完成 14代表通知用户完成。 */
  RecordStatus: number;
}

/** 房间内用户信息 */
declare interface RoomUser {
  /** 房间id */
  RoomId: number;
  /** 房间里用户uin列表 */
  Uins: number[] | null;
  /** 字符串房间id */
  StrRoomId: string | null;
  /** 房间里用户字符串uin列表 */
  StrUins?: string[] | null;
}

/** 语音检测详情 */
declare interface ScanDetail {
  /** 违规场景，参照Label定义 */
  Label: string;
  /** 该场景下概率[0.00,100.00],分值越大违规概率越高 */
  Rate: string;
  /** 违规关键字 */
  KeyWord: string;
  /** 关键字在音频的开始时间，从0开始的偏移量，单位为毫秒 */
  StartTime: number;
  /** 关键字在音频的结束时间，从0开始的偏移量,，单位为毫秒 */
  EndTime: number;
}

/** 语音检测结果，Code 为 0 时返回 */
declare interface ScanPiece {
  /** 流检测时返回，音频转存地址，保留30min */
  DumpUrl: string | null;
  /** 是否违规 */
  HitFlag: boolean;
  /** 违规主要类型 */
  MainType: string | null;
  /** 语音检测详情 */
  ScanDetail: ScanDetail[];
  /** gme实时语音房间ID，透传任务传入时的RoomId */
  RoomId: string | null;
  /** gme实时语音用户ID，透传任务传入时的OpenId */
  OpenId: string | null;
  /** 备注 */
  Info: string | null;
  /** 流检测时分片在流中的偏移时间，单位毫秒 */
  Offset: number | null;
  /** 流检测时分片时长 */
  Duration: number | null;
  /** 分片开始检测时间 */
  PieceStartTime: number | null;
}

/** 语音检测返回结果 */
declare interface ScanVoiceResult {
  /** 数据ID */
  DataId: string;
  /** 任务ID */
  TaskId: string;
}

/** SceneInfo场景信息'RealTime','实时语音分析','VoiceMessage','语音消息','GMECloudApi':'GME云API接口' */
declare interface SceneInfo {
}

/** 服务开关状态 */
declare interface ServiceStatus {
  /** 实时语音服务开关状态 */
  RealTimeSpeech: StatusInfo | null;
  /** 语音消息服务开关状态 */
  VoiceMessage: StatusInfo | null;
  /** 语音内容安全服务开关状态 */
  Porn: StatusInfo | null;
  /** 语音录制服务开关状态 */
  Live: StatusInfo | null;
  /** 语音转文本服务开关状态 */
  RealTimeAsr: StatusInfo | null;
  /** 文本翻译服务开关状态 */
  TextTranslate?: StatusInfo | null;
}

/** 用量数据单元 */
declare interface StatisticsItem {
  /** 日期，格式为年-月-日，如2018-07-13 */
  StatDate: string;
  /** 统计值 */
  Data: number;
}

/** 服务开关状态 */
declare interface StatusInfo {
  /** 服务开关状态， 0-正常，1-关闭 */
  Status: number;
}

/** 流式转文本用量数据 */
declare interface StreamTextStatisticsItem {
  /** 统计值，单位：秒 */
  Data: number | null;
}

/** 指定订阅流白名单或者黑名单。 */
declare interface SubscribeRecordUserIds {
  /** 订阅音频流黑名单，指定不订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表不订阅UserId 1，2，3的音频流。默认不填订阅房间内所有音频流，订阅列表用户数不超过20。注意：只能同时设置UnSubscribeAudioUserIds、SubscribeAudioUserIds 其中1个参数 */
  UnSubscribeUserIds?: string[];
  /** 订阅音频流白名单，指定订阅哪几个UserId的音频流，例如["1", "2", "3"], 代表订阅UserId 1，2，3的音频流。默认不填订阅房间内所有音频流，订阅列表用户数不超过20。注意：只能同时设置UnSubscribeAudioUserIds、SubscribeAudioUserIds 其中1个参数。 */
  SubscribeUserIds?: string[];
}

/** 标签列表 */
declare interface Tag {
  /** 标签键 */
  TagKey?: string | null;
  /** 标签值 */
  TagValue?: string | null;
}

/** 语音检测任务列表 */
declare interface Task {
  /** 数据的唯一ID */
  DataId: string;
  /** 数据文件的url，为 urlencode 编码，流式则为拉流地址 */
  Url: string;
  /** gme实时语音房间ID，通过gme实时语音进行语音分析时输入 */
  RoomId?: string;
  /** gme实时语音用户ID，通过gme实时语音进行语音分析时输入 */
  OpenId?: string;
}

/** 用户麦克风状态 */
declare interface UserMicStatus {
  /** 开麦状态。1表示关闭麦克风，2表示打开麦克风。 */
  EnableMic: number;
  /** 客户端用于标识用户的Openid。（Uid、StrUid必须填一个，优先处理StrUid。） */
  Uid?: number;
  /** 客户端用于标识字符串型用户的Openid。（Uid、StrUid必须填一个，优先处理StrUid。） */
  StrUid?: string | null;
}

/** 语音过滤服务配置数据 */
declare interface VoiceFilterConf {
  /** 语音过滤服务开关，取值：open/close */
  Status?: string;
  /** 场景配置信息，如开关状态，回调地址。 */
  SceneInfos?: SceneInfo[] | null;
}

/** 语音过滤用量统计数据 */
declare interface VoiceFilterStatisticsItem {
  /** 语音过滤总时长，单位为min */
  Duration: number;
}

/** 离线语音服务配置数据 */
declare interface VoiceMessageConf {
  /** 离线语音服务开关，取值：open/close */
  Status?: string;
  /** 离线语音支持语种，取值： all-全部，cnen-中英文。默认为中英文 */
  Language?: string;
}

/** 语音消息用量统计信息 */
declare interface VoiceMessageStatisticsItem {
  /** 离线语音DAU */
  Dau: number;
}

declare interface CreateAgeDetectTaskRequest {
  /** 应用id */
  BizId: number;
  /** 语音检测子任务列表，列表最多支持100个检测子任务。结构体中包含：DataId：数据的唯一IDUrl：数据文件的url，为 urlencode 编码，流式则为拉流地址 */
  Tasks: AgeDetectTask[];
  /** 任务结束时gme后台会自动触发回调 */
  Callback?: string;
}

declare interface CreateAgeDetectTaskResponse {
  /** 本次任务提交后唯一id，用于获取任务运行结果 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAppRequest {
  /** 应用名称 */
  AppName: string;
  /** 腾讯云项目ID，默认为0，表示默认项目 */
  ProjectId?: number;
  /** 需要支持的引擎列表，默认全选。取值：android/ios/unity/cocos/unreal/windows */
  EngineList?: string[];
  /** 服务区域列表，默认全选。取值：mainland-大陆地区，hmt-港澳台，sea-东南亚，na-北美，eu-欧洲，jpkr-日韩亚太，sa-南美，oc-澳洲，me-中东 */
  RegionList?: string[];
  /** 实时语音服务配置数据 */
  RealtimeSpeechConf?: RealtimeSpeechConf;
  /** 语音消息服务配置数据 */
  VoiceMessageConf?: VoiceMessageConf;
  /** 语音分析服务配置数据 */
  VoiceFilterConf?: VoiceFilterConf;
  /** 语音转文本配置数据 */
  AsrConf?: AsrConf;
  /** 需要添加的标签列表 */
  Tags?: Tag[];
}

declare interface CreateAppResponse {
  /** 创建应用返回数据 */
  Data?: CreateAppResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCustomizationRequest {
  /** 应用 ID，登录控制台创建应用得到的AppID */
  BizId: number;
  /** 文本文件的下载地址，服务会从该地址下载文件，目前仅支持腾讯云cos */
  TextUrl: string;
  /** 模型名称，名称长度不超过36，默认为BizId。 */
  ModelName?: string;
}

declare interface CreateCustomizationResponse {
  /** 模型ID */
  ModelId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateScanUserRequest {
  /** 应用ID，登录控制台 - 服务管理创建应用得到的AppID */
  BizId: number;
  /** 需要新增送检的用户号。示例：1234 */
  UserId?: number;
}

declare interface CreateScanUserResponse {
  /** 返回结果码 */
  ErrorCode?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomizationRequest {
  /** 删除的模型ID */
  ModelId: string;
  /** 应用 ID，登录控制台创建应用得到的AppID */
  BizId: number;
}

declare interface DeleteCustomizationResponse {
  /** 返回值。0为成功，非0为失败。 */
  ErrorCode?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRoomMemberRequest {
  /** 要操作的房间id */
  RoomId: string;
  /** 剔除类型 1-删除房间 2-剔除用户 */
  DeleteType: number;
  /** 应用id */
  BizId: number;
  /** 要剔除的用户列表 */
  Uids?: string[];
}

declare interface DeleteRoomMemberResponse {
  /** 剔除房间或成员的操作结果 */
  DeleteResult?: DeleteResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteScanUserRequest {
  /** 应用ID，登录控制台 - 服务管理创建应用得到的AppID */
  BizId: number;
  /** 需要删除送检的用户号。示例：1234 */
  UserId?: number;
}

declare interface DeleteScanUserResponse {
  /** 返回结果码 */
  ErrorCode?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgeDetectTaskRequest {
  /** 应用id */
  BizId: number;
  /** [创建年龄语音识别任务](https://cloud.tencent.com/document/product/607/60620)时返回的taskid */
  TaskId: string;
}

declare interface DescribeAgeDetectTaskResponse {
  /** 任务ID */
  TaskId?: string;
  /** 语音检测返回。Results 字段是 JSON 数组，每一个元素包含：DataId： 请求中对应的 DataId。Url ：该请求中对应的 Url。Status ：子任务状态，0:已创建，1:运行中，2:已完成，3:任务异常，4:任务超时。Age ：子任务完成后的结果，0:成年人，1:未成年人，100:未知结果。 */
  Results?: AgeDetectTaskResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppStatisticsRequest {
  /** GME应用ID */
  BizId: number;
  /** 数据开始时间，东八区时间，格式: 年-月-日，如: 2018-07-13 */
  StartDate: string;
  /** 数据结束时间，东八区时间，格式: 年-月-日，如: 2018-07-13 */
  EndDate: string;
  /** 要查询的服务列表，取值：RealTimeSpeech/VoiceMessage/VoiceFilter/SpeechToText */
  Services: string[];
}

declare interface DescribeAppStatisticsResponse {
  /** 应用用量统计数据 */
  Data?: DescribeAppStatisticsResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationDataRequest {
  /** 应用ID */
  BizId: number;
  /** 数据开始时间，格式为 年-月-日，如: 2018-07-13 */
  StartDate: string;
  /** 数据结束时间，格式为 年-月-日，如: 2018-07-13 */
  EndDate: string;
}

declare interface DescribeApplicationDataResponse {
  /** 应用统计数据 */
  Data: ApplicationDataStatistics;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationListRequest {
  /** 项目ID，0表示默认项目，-1表示所有项目，如果需要查找具体项目下的应用列表，请填入具体项目ID，项目ID在项目管理中查看 https://console.cloud.tencent.com/project */
  ProjectId: number;
  /** 页码ID，0表示第一页，以此后推。默认填0 */
  PageNo: number;
  /** 每页展示应用数量。默认填200 */
  PageSize: number;
  /** 所查找应用名称的关键字，支持模糊匹配查找。空串表示查询所有应用 */
  SearchText: string;
  /** 标签列表 */
  TagSet?: Tag[];
  /** 查找过滤关键字列表 */
  Filters?: Filter[];
}

declare interface DescribeApplicationListResponse {
  /** 获取应用列表返回 */
  ApplicationList?: ApplicationList[];
  /** 应用总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRealtimeScanConfigRequest {
  /** 应用ID */
  BizId: number;
}

declare interface DescribeRealtimeScanConfigResponse {
  /** 返回结果码，0正常，非0失败 */
  ErrorCode?: number;
  /** 应用ID */
  BizId?: number;
  /** 送检类型，0: 全量送审，1: 自定义送审 */
  AuditType?: number;
  /** 用户号正则表达式 */
  UserIdRegex?: string[];
  /** 房间号正则表达式 */
  RoomIdRegex?: string[];
  /** 用户号字符串，逗号分隔，示例："0001,0002,0003" */
  UserIdString?: string;
  /** 房间号字符串，逗号分隔，示例："0001,0002,0003" */
  RoomIdString?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecordInfoRequest {
  /** 进行中的任务taskid（StartRecord接口返回）。 */
  TaskId: number;
  /** 应用ID。 */
  BizId: number;
}

declare interface DescribeRecordInfoResponse {
  /** 录制信息。 */
  RecordInfo: RecordInfo[] | null;
  /** 录制类型：1代表单流 2代表混流 3代表单流和混流。 */
  RecordMode: number;
  /** 房间ID。 */
  RoomId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoomInfoRequest {
  /** 应用ID，登录[控制台 - 服务管理](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID */
  SdkAppId: number;
  /** 房间号列表，最大不能超过10个（RoomIds、StrRoomIds必须填一个） */
  RoomIds?: number[];
  /** 字符串类型房间号列表，最大不能超过10个（RoomIds、StrRoomIds必须填一个） */
  StrRoomIds?: string[];
}

declare interface DescribeRoomInfoResponse {
  /** 操作结果, 0成功, 非0失败 */
  Result?: number | null;
  /** 房间用户信息 */
  RoomUsers?: RoomUser[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScanResultListRequest {
  /** 应用 ID，登录[控制台](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID */
  BizId: number;
  /** 查询的任务 ID 列表，任务 ID 列表最多支持 100 个。 */
  TaskIdList: string[];
  /** 任务返回结果数量，默认10，上限500。大文件任务忽略此参数，返回全量结果 */
  Limit?: number;
}

declare interface DescribeScanResultListResponse {
  /** 要查询的语音检测任务的结果 */
  Data?: DescribeScanResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskInfoRequest {
  /** 应用ID。 */
  BizId: number;
  /** 房间ID。 */
  RoomId: string;
}

declare interface DescribeTaskInfoResponse {
  /** 进行中的任务taskid（StartRecord接口返回）。 */
  TaskId: number | null;
  /** 录制类型：1代表单流 2代表混流 3代表单流和混流。 */
  RecordMode: number | null;
  /** 指定订阅流白名单或者黑名单。 */
  SubscribeRecordUserIds: SubscribeRecordUserIds | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserInAndOutTimeRequest {
  /** 应用ID */
  BizId: number;
  /** 房间ID */
  RoomId: number;
  /** 用户ID */
  UserId: number;
  /** 字符串类型用户ID */
  UserIdStr?: string;
  /** 字符串类型房间ID */
  RoomIdStr?: string;
}

declare interface DescribeUserInAndOutTimeResponse {
  /** 用户在房间得进出时间列表 */
  InOutList?: InOutTimeInfo[];
  /** 用户在房间中总时长 */
  Duration?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCustomizationListRequest {
  /** 应用 ID，登录控制台创建应用得到的AppID */
  BizId: number;
}

declare interface GetCustomizationListResponse {
  /** 语音消息转文本热句模型配置 */
  CustomizationConfigs?: CustomizationConfigs[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAppStatusRequest {
  /** 应用ID，创建应用后由后台生成并返回。 */
  BizId: number;
  /** 应用状态，取值：open/close */
  Status: string;
}

declare interface ModifyAppStatusResponse {
  /** 修改应用开关状态返回数据 */
  Data: ModifyAppStatusResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomizationRequest {
  /** 应用 ID，登录控制台创建应用得到的AppID */
  BizId: number;
  /** 文本文件的下载地址，服务会从该地址下载文件，目前仅支持腾讯云cos */
  TextUrl: string;
  /** 修改的模型ID */
  ModelId: string;
}

declare interface ModifyCustomizationResponse {
  /** 返回值。0为成功，非0为失败。 */
  ErrorCode?: number;
  /** 模型ID */
  ModelId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomizationStateRequest {
  /** 模型ID */
  ModelId: string;
  /** 想要变换的模型状态，-1代表下线，1代表上线 */
  ToState: number;
  /** 应用 ID，登录控制台创建应用得到的AppID */
  BizId: number;
}

declare interface ModifyCustomizationStateResponse {
  /** 模型ID */
  ModelId?: string;
  /** 返回值。0为成功，非0为失败。 */
  ErrorCode?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRecordInfoRequest {
  /** 进行中的任务taskid（StartRecord接口返回）。 */
  TaskId: number;
  /** 录制类型：1代表单流 2代表混流 3代表单流和混流。 */
  RecordMode: number;
  /** 应用ID。 */
  BizId: number;
  /** 指定订阅流白名单或者黑名单。 */
  SubscribeRecordUserIds?: SubscribeRecordUserIds;
}

declare interface ModifyRecordInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserMicStatusRequest {
  /** 来自 [腾讯云控制台](https://console.cloud.tencent.com/gamegme) 的 GME 服务提供的 AppID，获取请参考 [语音服务开通指引](https://cloud.tencent.com/document/product/607/10782)。 */
  BizId: number;
  /** 实时语音房间号。 */
  RoomId: string;
  /** 需要操作的房间内用户以及该用户的目标麦克风状态。 */
  Users: UserMicStatus[];
}

declare interface ModifyUserMicStatusResponse {
  /** 返回结果：0为成功，非0为失败。 */
  Result?: number;
  /** 错误信息。 */
  ErrMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScanVoiceRequest {
  /** 应用ID，登录[控制台 - 服务管理](https://console.cloud.tencent.com/gamegme)创建应用得到的AppID */
  BizId: number;
  /** 语音检测场景，参数值目前要求为 default。 预留场景设置： 谩骂、色情、广告、违禁等场景，具体取值见上述 Label 说明。 */
  Scenes: string[];
  /** 是否为直播流。值为 false 时表示普通语音文件检测；为 true 时表示语音流检测。 */
  Live: boolean;
  /** 语音检测任务列表，列表最多支持100个检测任务。结构体中包含：DataId：数据的唯一IDUrl：数据文件的url，为 urlencode 编码，流式则为拉流地址 */
  Tasks: Task[];
  /** 异步检测结果回调地址，具体见上述回调相关说明。（说明：该字段为空时，必须通过接口(查询语音检测结果)获取检测结果）。 */
  Callback?: string;
  /** 语种，不传默认中文 */
  Lang?: string;
}

declare interface ScanVoiceResponse {
  /** 语音检测返回。Data 字段是 JSON 数组，每一个元素包含：DataId： 请求中对应的 DataId。TaskID ：该检测任务的 ID，用于轮询语音检测结果。 */
  Data: ScanVoiceResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartRecordRequest {
  /** 应用ID。 */
  BizId: number;
  /** 房间ID。 */
  RoomId: string;
  /** 录制类型：1代表单流 2代表混流 3代表单流和混流。 */
  RecordMode: number;
  /** 指定订阅流白名单或者黑名单（不传默认订阅房间内所有音频流）。 */
  SubscribeRecordUserIds?: SubscribeRecordUserIds;
}

declare interface StartRecordResponse {
  /** 任务taskid。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopRecordRequest {
  /** 任务ID。 */
  TaskId: number;
  /** 应用ID。 */
  BizId: number;
}

declare interface StopRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateScanRoomsRequest {
  /** 应用ID */
  BizId: number;
  /** 需要送检的所有房间号。多个房间号之间用","分隔。示例："0001,0002,0003" */
  RoomIdString?: string;
  /** 符合此正则表达式规则的房间号将被送检。示例：["^6.*"] 表示所有以6开头的房间号将被送检 */
  RoomIdRegex?: string[];
}

declare interface UpdateScanRoomsResponse {
  /** 返回结果码 */
  ErrorCode?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateScanUsersRequest {
  /** 应用ID */
  BizId: number;
  /** 需要送检的所有用户号。多个用户号之间用","分隔。示例："0001,0002,0003" */
  UserIdString?: string;
  /** 符合此正则表达式规则的用户号将被送检。示例：["^6.*"] 表示所有以6开头的用户号将被送检 */
  UserIdRegex?: string[];
}

declare interface UpdateScanUsersResponse {
  /** 返回结果码 */
  ErrorCode?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Gme 游戏多媒体引擎} */
declare interface Gme {
  (): Versions;
  /** 提交年龄语音识别任务 {@link CreateAgeDetectTaskRequest} {@link CreateAgeDetectTaskResponse} */
  CreateAgeDetectTask(data: CreateAgeDetectTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgeDetectTaskResponse>;
  /** 创建GME应用 {@link CreateAppRequest} {@link CreateAppResponse} */
  CreateApp(data: CreateAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAppResponse>;
  /** 创建语音消息转文本热句模型 {@link CreateCustomizationRequest} {@link CreateCustomizationResponse} */
  CreateCustomization(data: CreateCustomizationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomizationResponse>;
  /** 新增自定义送检用户 {@link CreateScanUserRequest} {@link CreateScanUserResponse} */
  CreateScanUser(data: CreateScanUserRequest, config?: AxiosRequestConfig): AxiosPromise<CreateScanUserResponse>;
  /** 删除语音消息转文本热句模型 {@link DeleteCustomizationRequest} {@link DeleteCustomizationResponse} */
  DeleteCustomization(data: DeleteCustomizationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomizationResponse>;
  /** 剔除房间或房间成员 {@link DeleteRoomMemberRequest} {@link DeleteRoomMemberResponse} */
  DeleteRoomMember(data: DeleteRoomMemberRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoomMemberResponse>;
  /** 删除自定义送检用户 {@link DeleteScanUserRequest} {@link DeleteScanUserResponse} */
  DeleteScanUser(data: DeleteScanUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScanUserResponse>;
  /** 查询年龄语音识别任务结果 {@link DescribeAgeDetectTaskRequest} {@link DescribeAgeDetectTaskResponse} */
  DescribeAgeDetectTask(data: DescribeAgeDetectTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgeDetectTaskResponse>;
  /** 获取应用用量统计数据 {@link DescribeAppStatisticsRequest} {@link DescribeAppStatisticsResponse} */
  DescribeAppStatistics(data: DescribeAppStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppStatisticsResponse>;
  /** 获取数据详情 {@link DescribeApplicationDataRequest} {@link DescribeApplicationDataResponse} */
  DescribeApplicationData(data: DescribeApplicationDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationDataResponse>;
  /** 查询某账号下的应用列表 {@link DescribeApplicationListRequest} {@link DescribeApplicationListResponse} */
  DescribeApplicationList(data: DescribeApplicationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationListResponse>;
  /** 获取用户自定义送检信息 {@link DescribeRealtimeScanConfigRequest} {@link DescribeRealtimeScanConfigResponse} */
  DescribeRealtimeScanConfig(data: DescribeRealtimeScanConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealtimeScanConfigResponse>;
  /** 查询录制任务信息 {@link DescribeRecordInfoRequest} {@link DescribeRecordInfoResponse} */
  DescribeRecordInfo(data: DescribeRecordInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecordInfoResponse>;
  /** 获取房间内用户信息 {@link DescribeRoomInfoRequest} {@link DescribeRoomInfoResponse} */
  DescribeRoomInfo(data: DescribeRoomInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomInfoResponse>;
  /** 查询语音检测结果 {@link DescribeScanResultListRequest} {@link DescribeScanResultListResponse} */
  DescribeScanResultList(data: DescribeScanResultListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScanResultListResponse>;
  /** 查询房间录制信息 {@link DescribeTaskInfoRequest} {@link DescribeTaskInfoResponse} */
  DescribeTaskInfo(data: DescribeTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInfoResponse>;
  /** 拉取用户在房间得进出时间 {@link DescribeUserInAndOutTimeRequest} {@link DescribeUserInAndOutTimeResponse} */
  DescribeUserInAndOutTime(data: DescribeUserInAndOutTimeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserInAndOutTimeResponse>;
  /** 查询语音消息转文本热句模型列表 {@link GetCustomizationListRequest} {@link GetCustomizationListResponse} */
  GetCustomizationList(data: GetCustomizationListRequest, config?: AxiosRequestConfig): AxiosPromise<GetCustomizationListResponse>;
  /** 修改应用开关状态 {@link ModifyAppStatusRequest} {@link ModifyAppStatusResponse} */
  ModifyAppStatus(data: ModifyAppStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppStatusResponse>;
  /** 更新语音消息转文本热句模型 {@link ModifyCustomizationRequest} {@link ModifyCustomizationResponse} */
  ModifyCustomization(data: ModifyCustomizationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomizationResponse>;
  /** 修改语音消息转文本热句模型状态 {@link ModifyCustomizationStateRequest} {@link ModifyCustomizationStateResponse} */
  ModifyCustomizationState(data: ModifyCustomizationStateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomizationStateResponse>;
  /** 更新录制信息 {@link ModifyRecordInfoRequest} {@link ModifyRecordInfoResponse} */
  ModifyRecordInfo(data: ModifyRecordInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRecordInfoResponse>;
  /** 修改用户麦克风状态 {@link ModifyUserMicStatusRequest} {@link ModifyUserMicStatusResponse} */
  ModifyUserMicStatus(data: ModifyUserMicStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserMicStatusResponse>;
  /** 提交语音检测任务 {@link ScanVoiceRequest} {@link ScanVoiceResponse} */
  ScanVoice(data: ScanVoiceRequest, config?: AxiosRequestConfig): AxiosPromise<ScanVoiceResponse>;
  /** 开始录制 {@link StartRecordRequest} {@link StartRecordResponse} */
  StartRecord(data: StartRecordRequest, config?: AxiosRequestConfig): AxiosPromise<StartRecordResponse>;
  /** 停止录制 {@link StopRecordRequest} {@link StopRecordResponse} */
  StopRecord(data: StopRecordRequest, config?: AxiosRequestConfig): AxiosPromise<StopRecordResponse>;
  /** 更新送检房间号 {@link UpdateScanRoomsRequest} {@link UpdateScanRoomsResponse} */
  UpdateScanRooms(data: UpdateScanRoomsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateScanRoomsResponse>;
  /** 更新送检用户号 {@link UpdateScanUsersRequest} {@link UpdateScanUsersResponse} */
  UpdateScanUsers(data: UpdateScanUsersRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateScanUsersResponse>;
}

export declare type Versions = ["2018-07-11"];

export default Gme;
