/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 房间问答答案详情 */
declare interface AnswerInfo {
  /** 用户名 */
  Name?: string;
  /** 答案（按照位表示是否选择，如0x1表示选择A，0x11表示选择AB） */
  Answer?: number;
  /** 答题用时 */
  CostTime?: number;
  /** 用户ID */
  UserId?: string;
  /** 答案是否正确（1正确0错误） */
  IsCorrect?: number;
}

/** 每个选项答题人数统计 */
declare interface AnswerStat {
  /** 选项（按照位表示是否选择，如0x1表示选择A，0x11表示选择AB） */
  Answer?: number;
  /** 答题人数 */
  Count?: number;
}

/** 应用配置信息 */
declare interface AppConfig {
  /** 应用ID */
  ApplicationId?: string;
  /** 应用名称 */
  AppName?: string | null;
  /** 应用状态 1正常 2停用 */
  State?: number | null;
  /** 1试用 2轻量版 3标准版 4旗舰版 */
  AppVersion?: number | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 回调 */
  Callback?: string | null;
  /** 回调Key */
  CallbackKey?: string | null;
}

/** 应用自定义内容 */
declare interface AppCustomContent {
  /** 场景参数，一个应用下可以设置多个不同场景。 */
  Scene: string;
  /** logo地址，用于上课时展示的课堂或平台图标，支持开发商自定义业务品牌展示。 */
  LogoUrl?: string;
  /** HomeUrl：主页地址，用于上课结束后课堂跳转，支持跳转到自己的业务系统。如果配置为空则下课后关闭课堂页面。 */
  HomeUrl?: string;
  /** JsUrl ：自定义js。针对应用用于开发上自定义课堂界面、模块功能、监控操作，支持数据请求与响应处理。 */
  JsUrl?: string;
  /** Css : 自定义的css。针对应用用于支持课堂界面的、模块的UI渲染修改、皮肤配色修改、功能模块的隐藏和展示。 */
  CssUrl?: string;
}

/** 背景图片配置 */
declare interface BackgroundPictureConfig {
  /** 背景图片的url */
  Url: string | null;
}

/** 批量注册用户信息 */
declare interface BatchUserInfo {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId?: number;
  /** 用户ID。 */
  UserId?: string | null;
  /** 用户在客户系统的Id。 若用户注册时该字段为空，则默认为 UserId 值一致。 */
  OriginId?: string | null;
}

/** 课堂评分字段 */
declare interface ClassScoreItem {
  /** 课堂iD */
  RoomId?: number | null;
  /** 用户ID */
  UserId?: string | null;
  /** 评分时间 */
  CreateTime?: number | null;
  /** 课堂评分 */
  Score?: number | null;
  /** 课堂评价 */
  ScoreMsg?: string | null;
}

/** 文档信息 */
declare interface DocumentInfo {
  /** 文档Id */
  DocumentId?: string | null;
  /** 文档原址url */
  DocumentUrl?: string | null;
  /** 文档名称 */
  DocumentName?: string | null;
  /** 文档所有者UserId */
  Owner?: string | null;
  /** 应用Id */
  SdkAppId?: number | null;
  /** 文档权限，0：私有课件 1：公共课件 */
  Permission?: number | null;
  /** 转码结果，无需转码为空，转码成功为结果url，转码失败为错误码 */
  TranscodeResult?: string | null;
  /** 转码类型 */
  TranscodeType?: number | null;
  /** 转码进度， 0 - 100 表示（0% - 100%） */
  TranscodeProgress?: number | null;
  /** 转码状态，0为无需转码，1为正在转码，2为转码失败，3为转码成功 */
  TranscodeState?: number | null;
  /** 转码失败后的错误信息 */
  TranscodeInfo?: string | null;
  /** 文档类型 */
  DocumentType?: string | null;
  /** 文档大小，单位：字节 */
  DocumentSize?: number | null;
  /** 更新的UNIX时间戳 */
  UpdateTime?: number | null;
  /** 课件页数 */
  Pages?: number | null;
  /** 宽，仅在静态转码的课件有效 */
  Width?: number | null;
  /** 高，仅在静态转码的课件有效 */
  Height?: number | null;
  /** 封面，仅转码的课件会生成封面 */
  Cover?: string | null;
  /** 课件预览地址 */
  Preview?: string | null;
}

/** 房间事件对应的信息。 */
declare interface EventDataInfo {
  /** 事件发生的房间号。 */
  RoomId?: number | null;
  /** 事件发生的用户。 */
  UserId?: string | null;
  /** 用户设备类型。0: Unknown; 1: Windows; 2: macOS; 3: Android; 4: iOS; 5: Web; 6: Mobile webpage; 7: Weixin Mini Program. */
  Device?: number | null;
  /** 录制时长。单位：秒 */
  Duration?: number | null;
  /** 录制文件大小 */
  RecordSize?: number | null;
  /** 录制url */
  RecordUrl?: string | null;
}

/** 房间事件信息。 */
declare interface EventInfo {
  /** 事件发生的秒级unix时间戳。 */
  Timestamp?: number;
  /** 事件类型,有以下值:RoomStart:房间开始 RoomEnd:房间结束 MemberJoin:成员加入 MemberQuit:成员退出 RecordFinish:录制结束CameraOn: 摄像头打开CameraOff: 摄像头关闭MicOn: 麦克风打开MicOff: 麦克风关闭ScreenOn: 屏幕共享打开ScreenOff: 屏幕共享关闭VisibleOn: 页面可见VisibleOff: 页面不可见 */
  EventType?: string;
  /** 事件详细内容，包含房间号,成员类型事件包含用户Id。 */
  EventData?: EventDataInfo | null;
}

/** 表情消息 */
declare interface FaceMsgContent {
  /** 表情索引，用户自定义。 */
  Index: number;
  /** 额外数据。 */
  Data?: string;
}

/** 批量创建群组基础信息 */
declare interface GroupBaseInfo {
  /** 待创建群组名 */
  GroupName: string | null;
  /** 群组主讲人ID */
  TeacherId?: string | null;
}

/** 获取群组列表返回的群组信息 */
declare interface GroupInfo {
  /** 群组ID */
  GroupId?: string | null;
  /** 群组名称 */
  GroupName?: string | null;
  /** 群组主讲人ID */
  TeacherId?: string | null;
  /** 群组类型 0-基础群组 1-组合群组，若为1时会返回子群组ID列表 */
  GroupType?: number | null;
  /** 子群组ID列表，如有。 */
  SubGroupIds?: string | null;
}

/** 单张图片信息 */
declare interface ImageInfo {
  /** 图片类型：1-原图2-大图3-缩略图 */
  Type: number;
  /** 图片数据大小，单位：字节。 */
  Size: number;
  /** 图片宽度，单位为像素。 */
  Width: number;
  /** 图片高度，单位为像素。 */
  Height: number;
  /** 图片下载地址。 */
  URL: string;
}

/** 图片消息 */
declare interface ImageMsgContent {
  /** 图片的唯一标识，客户端用于索引图片的键值。 */
  UUID: string;
  /** 图片格式。JPG = 1GIF = 2PNG = 3BMP = 4其他 = 255 */
  ImageFormat: number;
  /** 图片信息 */
  ImageInfoList: ImageInfo[];
}

/** 成员记录信息。 */
declare interface MemberRecord {
  /** 用户ID。 */
  UserId?: string;
  /** 用户名称。 */
  UserName?: string;
  /** 在线时长，单位秒。 */
  PresentTime?: number;
  /** 是否开启摄像头。 */
  Camera?: number;
  /** 是否开启麦克风。 */
  Mic?: number;
  /** 是否禁言。 */
  Silence?: number;
  /** 回答问题数量。 */
  AnswerQuestions?: number;
  /** 举手数量。 */
  HandUps?: number;
  /** 首次进入房间的unix时间戳。 */
  FirstJoinTimestamp?: number;
  /** 最后一次退出房间的unix时间戳。 */
  LastQuitTimestamp?: number;
  /** 奖励次数。 */
  Rewords?: number;
  /** 用户IP。 */
  IPAddress?: string;
  /** 用户位置信息。 */
  Location?: string;
  /** 用户设备平台信息。0:unknown 1:windows 2:mac 3:android 4:ios 5:web 6:h5 7:miniprogram （小程序） */
  Device?: number;
  /** 每个成员上麦次数。 */
  PerMemberMicCount?: number;
  /** 每个成员发送消息数量。 */
  PerMemberMessageCount?: number;
  /** 用户角色。0代表学生；1代表老师； 2助教；3巡课。 */
  Role?: number;
  /** 上课班号 */
  GroupId?: string;
  /** 子上课班号 */
  SubGroupId?: string[] | null;
  /** 用户的上台状态 */
  Stage?: number | null;
  /** 用户状态。0为未到，1为在线，2为离线，3为被踢，4为永久被踢，5为暂时掉线 */
  CurrentState?: number | null;
}

/** 单条消息体内容 */
declare interface MessageItem {
  /** 消息类型。0表示文本消息，1表示图片消息 */
  MessageType?: number | null;
  /** 文本消息内容。message type为0时有效。 */
  TextMessage?: string | null;
  /** 图片消息URL。 message type为1时有效。 */
  ImageMessage?: string | null;
}

/** 历史消息列表 */
declare interface MessageList {
  /** 消息时间戳 */
  Timestamp?: number | null;
  /** 消息发送者 */
  FromAccount?: string | null;
  /** 消息序列号，当前课堂内唯一且单调递增 */
  Seq?: number | null;
  /** 历史消息列表 */
  MessageBody?: MessageItem[] | null;
}

/** 自定义消息结构 */
declare interface MsgBody {
  /** TIM 消息对象类型，目前支持的消息对象包括：TIMTextElem（文本消息）TIMFaceElem（表情消息）TIMImageElem（图像消息） */
  MsgType: string;
  /** 文本消息，当MsgType 为TIMTextElem（文本消息）必选。 */
  TextMsgContent?: TextMsgContent;
  /** 表情消息，当MsgType 为TIMFaceElem（表情消息）必选。 */
  FaceMsgContent?: FaceMsgContent;
  /** 图像消息，当MsgType为TIMImageElem（图像消息）必选。 */
  ImageMsgContent?: ImageMsgContent;
}

/** 禁言用户信息数组，内容包括被禁言的成员 ID，及其被禁言到的时间（使用 UTC 时间，即世界协调时间） */
declare interface MutedAccountList {
  /** 用户 ID */
  MemberAccount?: string | null;
  /** 禁言到的时间（使用 UTC 时间，即世界协调时间） */
  MutedUntil?: number | null;
}

/** 房间问答问题详情 */
declare interface QuestionInfo {
  /** 问题ID */
  QuestionId?: string;
  /** 问题内容 */
  QuestionContent?: string;
  /** 倒计时答题设置的秒数（0 表示不计时） */
  Duration?: number;
  /** 正确答案（按照位表示是否选择，如0x1表示选择A，0x11表示选择AB） */
  CorrectAnswer?: number;
  /** 每个选项答题人数统计 */
  AnswerStats?: AnswerStat[] | null;
}

/** 批量创建房间的房间信息 */
declare interface RoomInfo {
  /** 房间名称。 */
  Name: string;
  /** 预定的房间开始时间，unix时间戳。 */
  StartTime: number;
  /** 预定的房间结束时间，unix时间戳。 */
  EndTime: number;
  /** 分辨率。可以有如下取值： 1 标清 2 高清 3 全高清 */
  Resolution: number;
  /** 最大连麦人数（不包括老师）。取值范围[0, 16] */
  MaxMicNumber: number;
  /** 房间子类型，可以有以下取值： videodoc 文档+视频 video 纯视频 */
  SubType: string;
  /** 老师ID。通过[注册用户]接口获取的UserId。 */
  TeacherId?: string;
  /** 进入课堂时是否自动连麦。可以有以下取值： 0 不自动连麦（需要手动申请上麦，默认值） 1 自动连麦 */
  AutoMic?: number;
  /** 释放音视频权限后是否自动取消连麦。可以有以下取值： 0 自动取消连麦（默认值） 1 保持连麦状态 */
  TurnOffMic?: number;
  /** 高音质模式。可以有以下取值： 0 不开启高音质（默认值） 1 开启高音质 */
  AudioQuality?: number;
  /** 上课后是否禁止自动录制。可以有以下取值： 0 不禁止录制（自动开启录制，默认值） 1 禁止录制 注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。 */
  DisableRecord?: number;
  /** 助教Id列表。通过[注册用户]接口获取的UserId。 */
  Assistants?: string[];
  /** rtc人数。 */
  RTCAudienceNumber?: number;
  /** 观看类型。 */
  AudienceType?: number;
  /** 录制布局。 */
  RecordLayout?: number;
  /** 房间绑定的群组ID */
  GroupId?: string;
  /** 打开学生麦克风/摄像头的授权开关 */
  EnableDirectControl?: number;
  /** 开启专注模式。 0 收看全部角色音视频(默认) 1 只看老师和助教 */
  InteractionMode?: number;
  /** 横竖屏。0：横屏开播（默认值）; 1：竖屏开播，当前仅支持移动端的纯视频类型 */
  VideoOrientation?: number;
  /** 开启课后评分。 0：不开启(默认) 1：开启 */
  IsGradingRequiredPostClass?: number;
  /** 房间类型: 0 小班课（默认值）; 1 大班课; 2 1V1 (后续扩展) */
  RoomType?: number;
  /** 拖堂时间：单位分钟，0为不限制(默认值), -1为不能拖堂，大于0为拖堂的时间，最大值120分钟 */
  EndDelayTime?: number;
  /** 直播类型：0 常规（默认）1 伪直播 */
  LiveType?: number;
  /** 伪直播回放链接 */
  RecordLiveUrl?: string;
  /** 是否自动开始上课：0 不自动上课（默认） 1 自动上课 live_type=1的时候有效 */
  EnableAutoStart?: number;
  /** 录制文件背景图片，支持png、jpg、jpeg、bmp格式，暂不支持透明通道 */
  RecordBackground?: string;
  /** 录制自定义场景，仅recordlayout=9的时候此参数有效,数据内容为用户自定义场景参数，数据格式为json键值对方式，其中键值对的value为string类型。 */
  RecordScene?: string;
  /** 录制自定义语言，仅recordlayout=9的时候此参数有效 */
  RecordLang?: string;
}

/** 房间列表 */
declare interface RoomItem {
  /** 名称 */
  Name?: string | null;
  /** 房间ID */
  RoomId?: number | null;
  /** 房间状态。0 未开始 ；1进行中 ；2 已结束；3已过期 */
  Status?: number | null;
  /** 开始时间 */
  StartTime?: number | null;
  /** 结束时间 */
  EndTime?: number | null;
  /** 实际开始时间 */
  RealStartTime?: number | null;
  /** 实际结束时间 */
  RealEndTime?: number | null;
  /** 分辨率。1 标清2 高清3 全高清 */
  Resolution?: number | null;
  /** 最大允许连麦人数 */
  MaxRTCMember?: number | null;
  /** 房间录制地址。已废弃，使用新字段 RecordUrl */
  ReplayUrl?: string | null;
  /** 录制地址（协议为https)。仅在房间结束后存在。 */
  RecordUrl?: string | null;
  /** 最高房间内人数（不包括老师），0表示不限制，默认为0 */
  MaxMicNumber?: number | null;
  /** 打开学生麦克风/摄像头的授权开关 */
  EnableDirectControl?: number | null;
  /** 开启专注模式。 0 收看全部角色音视频(默认) 1 只看老师和助教 */
  InteractionMode?: number | null;
  /** 横竖屏。0：横屏开播（默认值）; 1：竖屏开播，当前仅支持移动端的纯视频类型 */
  VideoOrientation?: number | null;
  /** 开启课后评分。 0：不开启(默认) 1：开启 */
  IsGradingRequiredPostClass?: number | null;
  /** 房间类型。0:小班课（默认值）；1:大班课；2:1V1（后续扩展） */
  RoomType?: number | null;
  /** 拖堂时间：单位分钟，0为不限制(默认值), -1为不能拖堂，大于0为拖堂的时间，最大值120分钟 */
  EndDelayTime?: number | null;
  /** 直播类型：0 常规（默认）1 伪直播 */
  LiveType?: number | null;
  /** 伪直播回放链接 */
  RecordLiveUrl?: string | null;
  /** 是否自动开始上课：0 不自动上课（默认） 1 自动上课 live_type=1的时候有效 */
  EnableAutoStart?: number | null;
  /** 录制文件背景图片，支持png、jpg、jpeg、bmp格式，暂不支持透明通道 */
  RecordBackground?: string | null;
  /** 录制自定义场景，仅recordlayout=9的时候此参数有效,数据内容为用户自定义场景参数，数据格式为json键值对方式，其中键值对的value为string类型。 */
  RecordScene?: string | null;
  /** 录制自定义语言，仅recordlayout=9的时候此参数有效 */
  RecordLang?: string;
}

/** 场景配置 */
declare interface SceneItem {
  /** 场景名称 */
  Scene?: string;
  /** logo地址 */
  LogoUrl?: string | null;
  /** 主页地址 */
  HomeUrl?: string | null;
  /** 自定义的js */
  JSUrl?: string | null;
  /** 自定义的css */
  CSSUrl?: string | null;
}

/** 文字水印配置 */
declare interface TextMarkConfig {
  /** 文字水印内容 */
  Text?: string | null;
  /** 文字水印颜色 */
  Color?: string | null;
}

/** 文本消息 */
declare interface TextMsgContent {
  /** 文本消息。 */
  Text: string;
}

/** 转存配置 */
declare interface TransferItem {
  /** 转存状态， 1正常 2停用 */
  State?: number | null;
}

/** 用户信息结构体 */
declare interface UserInfo {
  /** 应用Id。 */
  SdkAppId?: number | null;
  /** 用户Id。 */
  UserId?: string | null;
  /** 用户昵称。 */
  Name?: string | null;
  /** 用户头像Url。 */
  Avatar?: string | null;
  /** 用户在客户系统的Id */
  OriginId?: string | null;
}

/** 水印配置 */
declare interface WatermarkConfig {
  /** 水印图片的url */
  Url?: string | null;
  /** 水印宽。为比例值 */
  Width?: number | null;
  /** 水印高。为比例值 */
  Height?: number | null;
  /** 水印X偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间。 */
  LocationX?: number | null;
  /** 水印Y偏移, 取值:0-100, 表示区域Y方向的百分比。比如50，则表示位于Y轴中间。 */
  LocationY?: number | null;
}

declare interface AddGroupMemberRequest {
  /** 群组ID */
  GroupId: string;
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 成员列表，最大值200 */
  MemberIds: string[];
}

declare interface AddGroupMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchAddGroupMemberRequest {
  /** 待添加群组ID列表，最大值100 */
  GroupIds: string[];
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 待添加成员列表，最大值200 */
  MemberIds: string[];
}

declare interface BatchAddGroupMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchCreateGroupWithMembersRequest {
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 批量创建群组基础信息，最大长度限制256 */
  GroupBaseInfos: GroupBaseInfo[];
  /** 群组绑定的成员列表，一次性最多200个 */
  MemberIds?: string[];
}

declare interface BatchCreateGroupWithMembersResponse {
  /** 新创建群组ID列表，与输入创建参数顺序一致 */
  GroupIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchCreateRoomRequest {
  /** 低代码平台的SdkAppId。 */
  SdkAppId: number;
  /** 创建房间ID列表 */
  RoomInfos: RoomInfo[];
}

declare interface BatchCreateRoomResponse {
  /** 创建成功课堂ID，与传入课堂信息顺序一致 */
  RoomIds?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeleteGroupMemberRequest {
  /** 待添加群组ID列表，最大值100 */
  GroupIds: string[];
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 待添加成员列表，最大值256 */
  MemberIds: string[];
}

declare interface BatchDeleteGroupMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeleteRecordRequest {
  /** 房间ID列表 */
  RoomIds: number[];
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
}

declare interface BatchDeleteRecordResponse {
  /** 本次操作删除成功的房间ID列表。如果入参列表中某个房间ID的录制文件已经删除，则出参列表中无对应的房间ID。 */
  RoomIds?: number[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDescribeDocumentRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 分页查询当前页数，从1开始递增 */
  Page: number;
  /** 每页数据量，最大1000 */
  Limit: number;
  /** 课件权限。[0]：获取owner的私有课件；[1]：获取owner的公开课件; [0,1]：则获取owner的私有课件和公开课件；[2]：获取owner的私有课件和所有人(包括owner)的公开课件 */
  Permission: number[];
  /** 课件所有者的user_id，不填默认获取SdkAppId下所有课件 */
  Owner?: string;
  /** 课件名称搜索词 */
  Keyword?: string;
  /** 课件id列表，从列表中查询，忽略错误的id */
  DocumentId?: string[];
}

declare interface BatchDescribeDocumentResponse {
  /** 符合查询条件文档总数 */
  Total?: number;
  /** 文档信息列表 */
  Documents?: DocumentInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchRegisterRequest {
  /** 批量注册用户信息列表 */
  Users: BatchUserRequest[];
}

declare interface BatchRegisterResponse {
  /** 注册成功的用户列表 */
  Users?: BatchUserInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchUserRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 用户名称。 */
  Name?: string;
  /** 用户在客户系统的Id，需要在同一应用下唯一。入参为空时默认赋值为UserId。 */
  OriginId?: string;
  /** 用户头像。 */
  Avatar?: string;
}

declare interface BindDocumentToRoomRequest {
  /** 房间ID。 */
  RoomId: number;
  /** 文档ID。 */
  DocumentId: string;
  /** 绑定类型。后台可透传到客户端，默认为0。客户端可以根据这个字段实现业务逻辑。 */
  BindType?: number;
}

declare interface BindDocumentToRoomResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDocumentRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 文档地址。 */
  DocumentUrl: string;
  /** 文档名称。 */
  DocumentName: string;
  /** 文档所有者的Id */
  Owner: string;
  /** 转码类型，可以有如下取值：0 无需转码（默认），bmp，jpg，jpeg，png，gif1 需要转码的文档，ppt，pptx，pdf，doc，docx，xls，xlsx2 需要转码的视频，mp4，3pg，mpeg，avi，flv，wmv，rm，h264等2 需要转码的音频，mp3，wav，wma，aac，flac，opus */
  TranscodeType?: number;
  /** 权限，可以有如下取值：0 私有文档（默认）1 公共文档 */
  Permission?: number;
  /** 文档后缀名。 */
  DocumentType?: string;
  /** 文档大小，单位 字节 */
  DocumentSize?: number;
  /** 是否对不支持元素开启自动处理的功能。默认关闭。自动处理的元素如下：1. 墨迹：移除不支持的墨迹（例如WPS墨迹）2. 自动翻页：移除PPT上所有自动翻页设置，并设置为单击鼠标翻页3. 已损坏音视频：移除PPT上对损坏音视频的引用 */
  AutoHandleUnsupportedElement?: boolean;
}

declare interface CreateDocumentResponse {
  /** 文档ID。 */
  DocumentId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGroupWithMembersRequest {
  /** 待创建群组名称 */
  GroupName: string;
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 默认绑定主讲老师ID */
  TeacherId?: string;
  /** 群组成员列表,一次性最多200个 */
  MemberIds?: string[];
}

declare interface CreateGroupWithMembersResponse {
  /** 创建成功群组ID */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGroupWithSubGroupRequest {
  /** 待创建的新群组名 */
  GroupName: string;
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 子群组ID列表，子群组ID不能重复，最多40个 */
  SubGroupIds: string[];
  /** 群组默认主讲老师ID */
  TeacherId?: string;
}

declare interface CreateGroupWithSubGroupResponse {
  /** 新创建群组ID */
  GroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRoomRequest {
  /** 房间名称。 */
  Name: string;
  /** 预定的房间开始时间，unix时间戳（秒）。 */
  StartTime: number;
  /** 预定的房间结束时间，unix时间戳（秒）。 */
  EndTime: number;
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 分辨率。可以有如下取值：1 标清2 高清3 全高清 */
  Resolution: number;
  /** 设置房间/课堂同时最大可与老师进行连麦互动的人数，该参数支持正式上课/开播前调用修改房间修改。取值范围[0,16]，当取值为0时表示当前课堂/直播，不支持连麦互动。 */
  MaxMicNumber: number;
  /** 房间子类型，可以有以下取值：videodoc 文档+视频video 纯视频 */
  SubType: string;
  /** 老师ID。通过[注册用户]接口获取的UserId。指定后该用户在房间内拥有老师权限。 */
  TeacherId?: string;
  /** 进入课堂时是否自动连麦。可以有以下取值：0 不自动连麦（需要手动申请上麦，默认值）1 自动连麦 */
  AutoMic?: number;
  /** 释放音视频权限后是否自动取消连麦。可以有以下取值：0 自动取消连麦（默认值）1 保持连麦状态 */
  TurnOffMic?: number;
  /** 声音音质。可以有以下取值：0：流畅模式（默认值），占用更小的带宽、拥有更好的降噪效果，适用于1对1、小班教学、多人音视频会议等场景。1：高音质模式，适合需要高保真传输音乐的场景，但降噪效果会被削弱，适用于音乐教学场景。 */
  AudioQuality?: number;
  /** 上课后是否禁止自动录制。可以有以下取值：0 不禁止录制（自动开启录制，默认值）1 禁止录制注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。 */
  DisableRecord?: number;
  /** 助教Id列表。通过[注册用户]接口获取的UserId。指定后该用户在房间内拥有助教权限。 */
  Assistants?: string[];
  /** rtc人数。 */
  RTCAudienceNumber?: number;
  /** 观看类型。互动观看 （默认） */
  AudienceType?: number;
  /** 录制模板。房间子类型为视频+白板（SubType=videodoc）时默认为3，房间子类型为纯视频（SubType=video）时默认为0。录制模板枚举值参考：https://cloud.tencent.com/document/product/1639/89744 */
  RecordLayout?: number;
  /** 房间绑定的群组ID,非空时限制组成员进入 */
  GroupId?: string;
  /** 是否允许老师/助教直接控制学生的摄像头/麦克风。可以有以下取值：0 不允许直接控制（需同意，默认值）1 允许直接控制（无需同意） */
  EnableDirectControl?: number;
  /** 开启专注模式。0 收看全部角色音视频(默认)1 只看老师和助教 */
  InteractionMode?: number;
  /** 横竖屏。0：横屏开播（默认值）; 1：竖屏开播，当前仅支持移动端的纯视频类型 */
  VideoOrientation?: number;
  /** 开启课后评分。 0：不开启(默认) 1：开启 */
  IsGradingRequiredPostClass?: number;
  /** 房间类型: 0 小班课（默认值）; 1 大班课; 2 1V1 (预留参数，暂未开放) */
  RoomType?: number;
  /** 拖堂时间：单位分钟，0为不限制(默认值), -1为不能拖堂，大于0为拖堂的时间，最大值120分钟 */
  EndDelayTime?: number;
  /** 直播类型：0 常规（默认）1 伪直播 */
  LiveType?: number;
  /** 伪直播链接 */
  RecordLiveUrl?: string;
  /** 是否自动开始上课：0 不自动上课（默认） 1 自动上课 live_type=1的时候有效 */
  EnableAutoStart?: number;
  /** 录制文件背景图片，支持png、jpg、jpeg、bmp格式，暂不支持透明通道 */
  RecordBackground?: string;
  /** 录制自定义场景，仅recordlayout=9的时候此参数有效,数据内容为用户自定义场景参数，数据格式为json键值对方式，其中键值对的value为string类型。 */
  RecordScene?: string;
  /** 录制自定义语言，仅recordlayout=9的时候此参数有效 */
  RecordLang?: string;
}

declare interface CreateRoomResponse {
  /** 房间ID。 */
  RoomId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSupervisorRequest {
  /** 应用ID。 */
  SdkAppId: number;
  /** 用户ID列表。 */
  Users: string[];
}

declare interface CreateSupervisorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAppCustomContentRequest {
  /** 应用ID。 */
  SdkAppId: number;
  /** 指定需要删除的已设置的scene场景自定义元素，如果为空则删除应用下已设置的所有自定义元素。 */
  Scenes?: string[];
}

declare interface DeleteAppCustomContentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDocumentRequest {
  /** 文档ID。 */
  DocumentId: string;
}

declare interface DeleteDocumentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGroupMemberRequest {
  /** 群组ID，联合群组无法删除群组成员 */
  GroupId: string;
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 成员列表，最大值200 */
  MemberIds: string[];
}

declare interface DeleteGroupMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGroupRequest {
  /** 待删除群组ID列表 */
  GroupIds: string[];
  /** 低代码平台应用ID */
  SdkAppId: number;
}

declare interface DeleteGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRecordRequest {
  /** 房间Id。 */
  RoomId: number;
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
}

declare interface DeleteRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRoomRequest {
  /** 房间ID。 */
  RoomId: number;
}

declare interface DeleteRoomResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSupervisorRequest {
  /** 应用ID */
  SdkAppId: number;
  /** 用户ID列表 */
  Users: string[];
}

declare interface DeleteSupervisorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUserRequest {
  /** 待删除用户的ID */
  UserId: string;
}

declare interface DeleteUserResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAnswerListRequest {
  /** 问题ID */
  QuestionId: string;
  /** 1 */
  Page?: number;
  /** 100 */
  Limit?: number;
}

declare interface DescribeAnswerListResponse {
  /** 符合查询条件的房间答案总数 */
  Total?: number;
  /** 房间提问答案列表 */
  AnswerInfo?: AnswerInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppDetailRequest {
  /** 应用ID。低代码互动课堂的SdkAppId。 */
  ApplicationId: string;
  /** 开发商ID */
  DeveloperId: string;
}

declare interface DescribeAppDetailResponse {
  /** SDK 对应的AppId */
  SdkAppId?: string;
  /** 应用配置 */
  AppConfig?: AppConfig;
  /** 场景配置 */
  SceneConfig?: SceneItem[];
  /** 转存配置 */
  TransferConfig?: TransferItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCurrentMemberListRequest {
  /** 房间Id。 */
  RoomId: number;
  /** 分页查询当前页数，从1开始递增。 */
  Page: number;
  /** 每页数据量，最大1000。 */
  Limit: number;
}

declare interface DescribeCurrentMemberListResponse {
  /** 记录总数。当前房间的总人数。 */
  Total?: number;
  /** 成员记录列表。 */
  MemberRecords?: MemberRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeveloperRequest {
}

declare interface DescribeDeveloperResponse {
  /** 开发商ID */
  DeveloperId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDocumentRequest {
  /** 文档Id（唯一id） */
  DocumentId: string;
}

declare interface DescribeDocumentResponse {
  /** 文档Id */
  DocumentId?: string;
  /** 文档原址url */
  DocumentUrl?: string;
  /** 文档名称 */
  DocumentName?: string;
  /** 文档所有者UserId */
  Owner?: string;
  /** 应用Id */
  SdkAppId?: number;
  /** 文档权限 */
  Permission?: number;
  /** 转码结果，无需转码为空，转码成功为结果url，转码失败为错误码 */
  TranscodeResult?: string;
  /** 转码类型 */
  TranscodeType?: number;
  /** 转码进度， 0 - 100 表示（0% - 100%） */
  TranscodeProgress?: number;
  /** 转码状态，0为无需转码，1为正在转码，2为转码失败，3为转码成功 */
  TranscodeState?: number;
  /** 转码失败后的错误信息 */
  TranscodeInfo?: string;
  /** 文档类型 */
  DocumentType?: string;
  /** 文档大小，单位：字节 */
  DocumentSize?: number;
  /** 更新的UNIX时间戳 */
  UpdateTime?: number;
  /** 课件页数 */
  Pages?: number;
  /** 课件预览地址 */
  Preview?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDocumentsByRoomRequest {
  /** 房间ID。 */
  RoomId: number;
  /** 低代码互动课堂的SdkAppId */
  SdkAppId: number;
  /** 分页查询当前页数，从1开始递增，默认值为1 */
  Page?: number;
  /** 每页数据量，最大1000，默认值为100 */
  Limit?: number;
  /** 课件权限。[0]：获取owner的私有课件；[1]：获取owner的公开课件;[0,1]：则获取owner的私有课件和公开课件；[2]：获取owner的私有课件和所有人(包括owner)的公开课件。默认值为[2] */
  Permission?: number[];
  /** 文档所有者的user_id，不填默认获取SdkAppId下所有课件 */
  Owner?: string;
}

declare interface DescribeDocumentsByRoomResponse {
  /** 文档信息列表 */
  Documents?: DocumentInfo[] | null;
  /** 符合查询条件文档总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDocumentsRequest {
  /** 学校id */
  SchoolId: number;
  /** 分页查询当前页数，从1开始递增 */
  Page: number;
  /** 每页数据量，最大1000 */
  Limit: number;
  /** 课件权限。[0]：获取owner的私有课件；[1]：获取owner的公开课件; [0,1]：则获取owner的私有课件和公开课件；[2]：获取owner的私有课件和所有人(包括owner)的公开课件 */
  Permission: number[];
  /** 课件所有者的user_id，不填默认获取school_id下所有课件 */
  Owner?: string;
  /** 课件名称搜索词 */
  Keyword?: string;
  /** 课件id列表，从列表中查询，忽略错误的id */
  DocumentId?: string[];
}

declare interface DescribeDocumentsResponse {
  /** 符合查询条件文档总数 */
  Total?: number;
  /** 文档信息列表 */
  Documents?: DocumentInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupListRequest {
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 分页查询当前页数，默认从1开始递增。 */
  Page?: number;
  /** 每页数据量，默认20，最大1000。 */
  Limit?: number;
  /** 主讲人ID筛选群组，与MemberId有且只有一个,都传时以此字段获取 */
  TeacherId?: string;
  /** 成员ID刷选群组，与TeacherId有且只有一个 */
  MemberId?: string;
}

declare interface DescribeGroupListResponse {
  /** 记录总数。当前匹配群组总数。 */
  Total?: number;
  /** 群组信息列表。 */
  GroupInfos?: GroupInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupMemberListRequest {
  /** 群组ID */
  GroupId: string;
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 分页值，默认1 */
  Page?: number;
  /** 每页数据量，默认20，最大1000 */
  Limit?: number;
}

declare interface DescribeGroupMemberListResponse {
  /** 符合查询条件总条数 */
  Total?: number;
  /** 查询成员列表 */
  MemberIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupRequest {
  /** 群组ID */
  GroupId: string;
  /** 低代码平台应用ID */
  SdkAppId: number;
}

declare interface DescribeGroupResponse {
  /** 群组ID */
  GroupId?: string;
  /** 群组名称 */
  GroupName?: string;
  /** 群主主讲人ID */
  TeacherId?: string | null;
  /** 群组类型0-基础群组1-组合群组，若为1时会返回子群组ID */
  GroupType?: number;
  /** 子群组ID列表 */
  SubGroupIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQuestionListRequest {
  /** 房间ID */
  RoomId: number;
  /** 分页查询当前页数，从1开始递增，默认值为1 */
  Page?: number;
  /** 分页查询当前页数，从1开始递增，默认值为1 */
  Limit?: number;
}

declare interface DescribeQuestionListResponse {
  /** 符合查询条件的房间问答问题总数 */
  Total?: number;
  /** 房间问答问题列表 */
  QuestionInfo?: QuestionInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoomForbiddenUserRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 房间ID。 */
  RoomId: number;
}

declare interface DescribeRoomForbiddenUserResponse {
  /** 禁言用户信息数组，内容包括被禁言的成员 ID，及其被禁言到的时间（使用 UTC 时间，即世界协调时间） */
  MutedAccountList?: MutedAccountList[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoomRequest {
  /** 房间Id。 */
  RoomId: number;
  /** 请求RTMP推流链接，0：否，1：是，默认为0。 */
  RTMPStreamingURL?: number;
}

declare interface DescribeRoomResponse {
  /** 房间名称。 */
  Name?: string;
  /** 预定的房间开始时间，unix时间戳（秒）。 */
  StartTime?: number;
  /** 预定的房间结束时间，unix时间戳（秒）。 */
  EndTime?: number;
  /** 老师的UserId。 */
  TeacherId?: string;
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId?: number;
  /** 观看类型。互动观看 （默认） */
  AudienceType?: number;
  /** 分辨率。可以有如下取值：1 标清2 高清3 全高清 */
  Resolution?: number;
  /** 最大连麦人数（不包括老师）。取值范围[0, 16] */
  MaxMicNumber?: number;
  /** 进入课堂时是否自动连麦。可以有以下取值：0 不自动连麦（需要手动申请上麦，默认值）1 自动连麦 */
  AutoMic?: number;
  /** 高音质模式。可以有以下取值：0 不开启高音质（默认值）1 开启高音质 */
  AudioQuality?: number;
  /** 房间子类型，可以有以下取值：videodoc 文档+视频video 纯视频 */
  SubType?: string;
  /** 上课后是否禁止自动录制。可以有以下取值：0 不禁止录制（自动开启录制，默认值）1 禁止录制注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。 */
  DisableRecord?: number;
  /** 助教UserId列表。 */
  Assistants?: string[] | null;
  /** 录制地址（协议为https)。仅在房间结束后存在。 */
  RecordUrl?: string | null;
  /** 课堂状态。0为未开始，1为已开始，2为已结束，3为已过期。 */
  Status?: number | null;
  /** 房间绑定的群组ID */
  GroupId?: string | null;
  /** 打开学生麦克风/摄像头的授权开关 */
  EnableDirectControl?: number;
  /** 开启专注模式。0 收看全部角色音视频(默认)1 只看老师和助教 */
  InteractionMode?: number;
  /** 横竖屏。0：横屏开播（默认值）; 1：竖屏开播，当前仅支持移动端的纯视频类型 */
  VideoOrientation?: number;
  /** 该房间是否开启了课后评分功能。0：未开启 1：开启 */
  IsGradingRequiredPostClass?: number;
  /** 房间类型: 0 小班课（默认值）; 1 大班课; 2 1V1 (后续扩展) */
  RoomType?: number;
  /** 录制时长 */
  VideoDuration?: number;
  /** 拖堂时间：单位分钟，0为不限制(默认值), -1为不能拖堂，大于0为拖堂的时间，最大值120分钟 */
  EndDelayTime?: number;
  /** 直播类型：0 常规（默认）1 伪直播 */
  LiveType?: number;
  /** 伪直播链接 */
  RecordLiveUrl?: string;
  /** 是否自动开始上课：0 不自动上课（默认） 1 自动上课 live_type=1的时候有效 */
  EnableAutoStart?: number;
  /** 录制文件背景图片，支持png、jpg、jpeg、bmp格式，暂不支持透明通道 */
  RecordBackground?: string;
  /** RTMP推流链接 */
  RTMPStreamingURL?: string;
  /** 录制自定义场景，仅recordlayout=9的时候此参数有效 */
  RecordScene?: string;
  /** 录制自定义语言，仅recordlayout=9的时候此参数有效 */
  RecordLang?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoomStatisticsRequest {
  /** 房间Id。 */
  RoomId: number;
  /** 分页查询当前页数，从1开始递增。 */
  Page: number;
  /** 每页数据量，最大1000。 */
  Limit: number;
}

declare interface DescribeRoomStatisticsResponse {
  /** 峰值在线成员人数。 */
  PeakMemberNumber?: number;
  /** 累计在线人数。 */
  MemberNumber?: number;
  /** 记录总数。包含进入房间或者应到未到的。 */
  Total?: number;
  /** 成员记录列表。 */
  MemberRecords?: MemberRecord[];
  /** 秒级unix时间戳，实际房间开始时间。 */
  RealStartTime?: number | null;
  /** 秒级unix时间戳，实际房间结束时间。 */
  RealEndTime?: number | null;
  /** 房间消息总数。 */
  MessageCount?: number;
  /** 房间连麦总数。 */
  MicCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScoreListRequest {
  /** 课堂ID */
  RoomId: number;
  /** 分页查询当前页数，从1开始递增 */
  Page?: number;
  /** 默认是10条 */
  Limit?: number;
}

declare interface DescribeScoreListResponse {
  /** 总数 */
  Total?: number;
  /** 课堂评分列表 */
  Scores?: ClassScoreItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSdkAppIdUsersRequest {
  /** 应用ID */
  SdkAppId: number;
  /** 分页，默认值为1 */
  Page?: number;
  /** 分页数据限制，默认值为20 */
  Limit?: number;
}

declare interface DescribeSdkAppIdUsersResponse {
  /** 用户总数 */
  Total?: number;
  /** 当前获取用户信息数组列表 */
  Users?: UserInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSupervisorsRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 每页数据量，最大100。 不填默认20. */
  Limit?: number;
  /** 分页查询当前页数，从1开始递增，不填默认为1。 */
  Page?: number;
}

declare interface DescribeSupervisorsResponse {
  /** 数据总量 */
  Total?: number;
  /** 分页查询当前页数 */
  Page?: number;
  /** 当前页数据量 */
  Limit?: number;
  /** 巡课列表 */
  UserIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserRequest {
  /** 用户Id。 */
  UserId: string;
}

declare interface DescribeUserResponse {
  /** 应用Id。 */
  SdkAppId?: number;
  /** 用户Id。 */
  UserId?: string;
  /** 用户昵称。 */
  Name?: string;
  /** 用户头像Url。 */
  Avatar?: string;
  /** 用户在客户系统的Id */
  OriginId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EndRoomRequest {
  /** 房间ID。 */
  RoomId: number;
}

declare interface EndRoomResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ForbidSendMsgRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 房间ID。 */
  RoomId: number;
  /** 需要禁言的用户账号，最多支持500个账号 */
  MembersAccount: string[];
  /** 需禁言时间，单位为秒，为0时表示取消禁言，4294967295为永久禁言。 */
  MuteTime: number;
}

declare interface ForbidSendMsgResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRoomEventRequest {
  /** 房间Id。 */
  RoomId: number;
  /** 应用Id。 */
  SdkAppId: number;
  /** 起始页，1开始。keyword为空时有效。 */
  Page: number;
  /** 每页个数。keyword为空时有效。一次性最多200条。 */
  Limit: number;
  /** 搜索事件类型。有以下事件类型:RoomStart:房间开始RoomEnd:房间结束MemberJoin:成员加入MemberQuit:成员退出RecordFinish:录制结束CameraOn: 摄像头打开CameraOff: 摄像头关闭MicOn: 麦克风打开MicOff: 麦克风关闭ScreenOn: 屏幕共享打开ScreenOff: 屏幕共享关闭VisibleOn: 页面可见VisibleOff: 页面不可见 */
  Keyword?: string;
}

declare interface GetRoomEventResponse {
  /** 该房间的事件总数，keyword搜索不影响该值。 */
  Total?: number;
  /** 详细事件内容。包含相应的类型、发生的时间戳。 */
  Events?: EventInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRoomMessageRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 房间Id。 */
  RoomId: number;
  /** 消息序列。获取该序列以前的消息(不包含该seq消息) */
  Seq?: number;
  /** 消息拉取的条数。最大数量不能超过套餐包限制。 */
  Limit?: number;
}

declare interface GetRoomMessageResponse {
  /** 消息列表 */
  Messages?: MessageList[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRoomsRequest {
  /** 低代码平台的SdkAppId。 */
  SdkAppId: number;
  /** 开始时间。默认以当前时间减去半小时作为开始时间。 */
  StartTime?: number;
  /** 结束时间。默认以当前时间加上半小时作为结束时间。 */
  EndTime?: number;
  /** 分页查询当前页数，从1开始递增 */
  Page?: number;
  /** 默认是10条 */
  Limit?: number;
  /** 课堂状态。默认展示所有课堂，0为未开始，1为正在上课，2为已结束，3为已过期 */
  Status?: number[];
}

declare interface GetRoomsResponse {
  /** 总数 */
  Total?: number;
  /** 房间列表 */
  Rooms?: RoomItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWatermarkRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
}

declare interface GetWatermarkResponse {
  /** 老师视频区域的水印参数配置 */
  TeacherLogo?: WatermarkConfig | null;
  /** 白板区域的水印参数配置 */
  BoardLogo?: WatermarkConfig | null;
  /** 背景图片配置 */
  BackgroundPicture?: BackgroundPictureConfig | null;
  /** 文字水印配置 */
  Text?: TextMarkConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KickUserFromRoomRequest {
  /** 房间Id。 */
  RoomId: number;
  /** 低代码平台的SdkAppId。 */
  SdkAppId: number;
  /** 需要踢出成员Id */
  UserId: string;
  /** 踢出类型：1：临时踢出，可以使用Duration参数指定污点时间，污点时间间隔内用户无法进入房间。2：永久踢出 */
  KickType: number;
  /** 污点时间(单位秒)，KickType = 1时生效，默认为0 */
  Duration: number;
}

declare interface KickUserFromRoomResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LoginOriginIdRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 用户在客户系统的Id，需要在同一应用下唯一。 */
  OriginId: string;
}

declare interface LoginOriginIdResponse {
  /** 用户Id。 */
  UserId?: string;
  /** 登录/注册成功后返回登录态token。有效期7天。 */
  Token?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LoginUserRequest {
  /** 注册获取的用户id。 */
  UserId: string;
}

declare interface LoginUserResponse {
  /** 用户Id。 */
  UserId?: string;
  /** 注册成功后返回登录态token，有效期7天。token过期后可以通过调用“登录”或“源账号登录”进行更新。 */
  Token?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAppRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 回调地址。 */
  Callback?: string;
  /** 回调key。 */
  CallbackKey?: string;
  /** 转存id */
  TransferId?: string;
  /** 转存地址 */
  TransferUrl?: string;
}

declare interface ModifyAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGroupRequest {
  /** 需要修改的群组ID */
  GroupId: string;
  /** 低代码平台应用ID */
  SdkAppId: number;
  /** 默认绑定主讲老师ID */
  TeacherId?: string;
  /** 待修改的群组名称 */
  GroupName?: string;
}

declare interface ModifyGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRoomRequest {
  /** 房间ID。 */
  RoomId: number;
  /** 低代码互动课堂的SdkAppId */
  SdkAppId: number;
  /** 预定的房间开始时间，unix时间戳（秒）。直播开始后不允许修改。 */
  StartTime?: number;
  /** 预定的房间结束时间，unix时间戳（秒）。直播开始后不允许修改。 */
  EndTime?: number;
  /** 老师ID。直播开始后不允许修改。 */
  TeacherId?: string;
  /** 房间名称。 */
  Name?: string;
  /** 分辨率。可以有如下取值：1 标清2 高清3 全高清直播开始后不允许修改。 */
  Resolution?: number;
  /** 设置房间/课堂同时最大可与老师进行连麦互动的人数，该参数支持正式上课/开播前调用修改房间修改。取值范围[0,16]，当取值为0时表示当前课堂/直播，不支持连麦互动。 */
  MaxMicNumber?: number;
  /** 进入房间时是否自动连麦。可以有以下取值：0 不自动连麦（默认值）1 自动连麦直播开始后不允许修改。 */
  AutoMic?: number;
  /** 高音质模式。可以有以下取值：0 不开启高音质（默认值）1 开启高音质直播开始后不允许修改。 */
  AudioQuality?: number;
  /** 房间子类型，可以有以下取值：videodoc 文档+视频video 纯视频直播开始后不允许修改。 */
  SubType?: string;
  /** 禁止录制。可以有以下取值：0 不禁止录制（默认值）1 禁止录制直播开始后不允许修改。 */
  DisableRecord?: number;
  /** 助教Id列表。直播开始后不允许修改。 */
  Assistants?: string[];
  /** 房间绑定的群组ID。直播开始后不允许修改。 */
  GroupId?: string;
  /** 打开学生麦克风/摄像头的授权开关。直播开始后不允许修改。 */
  EnableDirectControl?: number;
  /** 开启专注模式。0 收看全部角色音视频(默认)1 只看老师和助教 */
  InteractionMode?: number;
  /** 横竖屏。0：横屏开播（默认值）; 1：竖屏开播，当前仅支持移动端的纯视频类型 */
  VideoOrientation?: number;
  /** 开启课后评分。 0：不开启(默认) 1：开启 */
  IsGradingRequiredPostClass?: number;
  /** 房间类型: 0 小班课（默认值）; 1 大班课; 2 1V1 （预留参数、暂未开放) */
  RoomType?: number;
  /** 录制模板。仅可修改还未开始的房间。录制模板枚举值参考：https://cloud.tencent.com/document/product/1639/89744 */
  RecordLayout?: number;
  /** 拖堂时间：单位分钟，0为不限制(默认值), -1为不能拖堂，大于0为拖堂的时间，最大值120分钟 */
  EndDelayTime?: number;
  /** 直播方式：0 常规模式（默认）1 回放直播模式（伪直播） */
  LiveType?: number;
  /** 伪直播链接 */
  RecordLiveUrl?: string;
  /** 是否自动开始上课：0 不自动上课（默认） 1 自动上课 live_type=1的时候有效 */
  EnableAutoStart?: number;
  /** 录制自定义场景，仅recordlayout=9的时候此参数有效,数据内容为用户自定义场景参数，数据格式为json键值对方式，其中键值对的value为string类型。 */
  RecordScene?: string;
  /** 录制自定义语言，仅recordlayout=9的时候此参数有效 */
  RecordLang?: string;
}

declare interface ModifyRoomResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserProfileRequest {
  /** 待修改用户ID */
  UserId: string;
  /** 待修改的用户名 */
  Nickname?: string;
  /** 待修改头像url */
  Avatar?: string;
}

declare interface ModifyUserProfileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterUserRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 用户名称。 */
  Name?: string;
  /** 用户在客户系统的Id，需要在同一应用下唯一。 */
  OriginId?: string;
  /** 用户头像。 */
  Avatar?: string;
}

declare interface RegisterUserResponse {
  /** 用户Id。 */
  UserId: string;
  /** 登录/注册成功后返回登录态token。有效期7天。 */
  Token: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendRoomNormalMessageRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 房间ID。 */
  RoomId: number;
  /** 管理员指定消息发送方账号（若需设置 FromAccount 信息，则该参数取值不能为空） */
  FromAccount: string;
  /** 自定义消息 */
  MsgBody: MsgBody[];
  /** 消息自定义数据（云端保存，会发送到对端，程序卸载重装后还能拉取到）。 */
  CloudCustomData?: string;
  /** 昵称，当FromAccount没有在房间中，需要填写NickName，当FromAccount在房间中，填写NickName无意义 */
  NickName?: string;
}

declare interface SendRoomNormalMessageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SendRoomNotificationMessageRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 房间ID。 */
  RoomId: number;
  /** 消息。 */
  MsgContent: string;
}

declare interface SendRoomNotificationMessageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetAppCustomContentRequest {
  /** 自定义内容。 */
  CustomContent: AppCustomContent[];
  /** 应用ID。 */
  SdkAppId: number;
}

declare interface SetAppCustomContentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetWatermarkRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 老师视频区域的水印参数地址，设置为空字符串表示删除 */
  TeacherUrl?: string;
  /** 白板视频区域的水印参数地址，设置为空字符串表示删除 */
  BoardUrl?: string;
  /** 视频默认图片（在没有视频流的时候显示），设置为空字符串表示删除 */
  VideoUrl?: string;
  /** 白板区域水印的宽度，取值:0-100，默认为0，表示区域X方向的百分比 */
  BoardW?: number;
  /** 白板区域水印的高度，取值:0-100，默认为0, 表示区域Y方向的百分比 */
  BoardH?: number;
  /** 白板区域水印X偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间 */
  BoardX?: number;
  /** 白板区域水印Y偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间 */
  BoardY?: number;
  /** 老师视频区域水印的宽度，取值:0-100，默认为0，表示区域X方向的百分比 */
  TeacherW?: number;
  /** 老师视频区域水印的高度，取值:0-100，默认为0, 表示区域Y方向的百分比 */
  TeacherH?: number;
  /** 老师视频区域水印X偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间 */
  TeacherX?: number;
  /** 老师视频区域水印Y偏移, 取值:0-100, 表示区域X方向的百分比。比如50，则表示位于X轴中间 */
  TeacherY?: number;
  /** 文字水印内容，设置为空字符串表示删除 */
  Text?: string;
  /** 文字水印颜色 */
  TextColor?: string;
}

declare interface SetWatermarkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartRoomRequest {
  /** 房间ID。 */
  RoomId: number;
}

declare interface StartRoomResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindDocumentFromRoomRequest {
  /** 房间ID。 */
  RoomId: number;
  /** 文档ID。 */
  DocumentId: string;
}

declare interface UnbindDocumentFromRoomResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Lcic 实时互动-教育版} */
declare interface Lcic {
  (): Versions;
  /** 新增成员到群组 {@link AddGroupMemberRequest} {@link AddGroupMemberResponse} */
  AddGroupMember(data: AddGroupMemberRequest, config?: AxiosRequestConfig): AxiosPromise<AddGroupMemberResponse>;
  /** 批量新增成员到群组 {@link BatchAddGroupMemberRequest} {@link BatchAddGroupMemberResponse} */
  BatchAddGroupMember(data: BatchAddGroupMemberRequest, config?: AxiosRequestConfig): AxiosPromise<BatchAddGroupMemberResponse>;
  /** 批量创建群组 {@link BatchCreateGroupWithMembersRequest} {@link BatchCreateGroupWithMembersResponse} */
  BatchCreateGroupWithMembers(data: BatchCreateGroupWithMembersRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateGroupWithMembersResponse>;
  /** 批量创建房间 {@link BatchCreateRoomRequest} {@link BatchCreateRoomResponse} */
  BatchCreateRoom(data: BatchCreateRoomRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateRoomResponse>;
  /** 批量删除群组成员 {@link BatchDeleteGroupMemberRequest} {@link BatchDeleteGroupMemberResponse} */
  BatchDeleteGroupMember(data: BatchDeleteGroupMemberRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteGroupMemberResponse>;
  /** 批量删除多个房间的录制文件 {@link BatchDeleteRecordRequest} {@link BatchDeleteRecordResponse} */
  BatchDeleteRecord(data: BatchDeleteRecordRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteRecordResponse>;
  /** 批量获取文档详情 {@link BatchDescribeDocumentRequest} {@link BatchDescribeDocumentResponse} */
  BatchDescribeDocument(data: BatchDescribeDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDescribeDocumentResponse>;
  /** 用户批量注册 {@link BatchRegisterRequest} {@link BatchRegisterResponse} */
  BatchRegister(data: BatchRegisterRequest, config?: AxiosRequestConfig): AxiosPromise<BatchRegisterResponse>;
  /** 绑定文档到房间 {@link BindDocumentToRoomRequest} {@link BindDocumentToRoomResponse} */
  BindDocumentToRoom(data: BindDocumentToRoomRequest, config?: AxiosRequestConfig): AxiosPromise<BindDocumentToRoomResponse>;
  /** 创建文档 {@link CreateDocumentRequest} {@link CreateDocumentResponse} */
  CreateDocument(data: CreateDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDocumentResponse>;
  /** 创建群组 {@link CreateGroupWithMembersRequest} {@link CreateGroupWithMembersResponse} */
  CreateGroupWithMembers(data: CreateGroupWithMembersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGroupWithMembersResponse>;
  /** 创建联合群组 {@link CreateGroupWithSubGroupRequest} {@link CreateGroupWithSubGroupResponse} */
  CreateGroupWithSubGroup(data: CreateGroupWithSubGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGroupWithSubGroupResponse>;
  /** 创建房间 {@link CreateRoomRequest} {@link CreateRoomResponse} */
  CreateRoom(data: CreateRoomRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoomResponse>;
  /** 创建巡课 {@link CreateSupervisorRequest} {@link CreateSupervisorResponse} */
  CreateSupervisor(data: CreateSupervisorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSupervisorResponse>;
  /** 删除应用自定义内容 {@link DeleteAppCustomContentRequest} {@link DeleteAppCustomContentResponse} */
  DeleteAppCustomContent(data: DeleteAppCustomContentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAppCustomContentResponse>;
  /** 删除文档 {@link DeleteDocumentRequest} {@link DeleteDocumentResponse} */
  DeleteDocument(data: DeleteDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDocumentResponse>;
  /** 删除群组 {@link DeleteGroupRequest} {@link DeleteGroupResponse} */
  DeleteGroup(data: DeleteGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupResponse>;
  /** 删除群组成员 {@link DeleteGroupMemberRequest} {@link DeleteGroupMemberResponse} */
  DeleteGroupMember(data: DeleteGroupMemberRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupMemberResponse>;
  /** 删除指定房间的录制文件 {@link DeleteRecordRequest} {@link DeleteRecordResponse} */
  DeleteRecord(data: DeleteRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordResponse>;
  /** 删除房间 {@link DeleteRoomRequest} {@link DeleteRoomResponse} */
  DeleteRoom(data: DeleteRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoomResponse>;
  /** 删除巡课 {@link DeleteSupervisorRequest} {@link DeleteSupervisorResponse} */
  DeleteSupervisor(data: DeleteSupervisorRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSupervisorResponse>;
  /** 删除用户 {@link DeleteUserRequest} {@link DeleteUserResponse} */
  DeleteUser(data: DeleteUserRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUserResponse>;
  /** 获取房间答题详情 {@link DescribeAnswerListRequest} {@link DescribeAnswerListResponse} */
  DescribeAnswerList(data: DescribeAnswerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAnswerListResponse>;
  /** 获取应用详情 {@link DescribeAppDetailRequest} {@link DescribeAppDetailResponse} */
  DescribeAppDetail(data: DescribeAppDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppDetailResponse>;
  /** 获取当前房间的成员列表 {@link DescribeCurrentMemberListRequest} {@link DescribeCurrentMemberListResponse} */
  DescribeCurrentMemberList(data: DescribeCurrentMemberListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCurrentMemberListResponse>;
  /** 开发商信息获取 {@link DescribeDeveloperRequest} {@link DescribeDeveloperResponse} */
  DescribeDeveloper(data?: DescribeDeveloperRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeveloperResponse>;
  /** 获取文档信息 {@link DescribeDocumentRequest} {@link DescribeDocumentResponse} */
  DescribeDocument(data: DescribeDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocumentResponse>;
  /** @deprecated 批量获取文档信息【已废弃】 {@link DescribeDocumentsRequest} {@link DescribeDocumentsResponse} */
  DescribeDocuments(data: DescribeDocumentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocumentsResponse>;
  /** 获取指定房间下文档 {@link DescribeDocumentsByRoomRequest} {@link DescribeDocumentsByRoomResponse} */
  DescribeDocumentsByRoom(data: DescribeDocumentsByRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocumentsByRoomResponse>;
  /** 获取群组详情 {@link DescribeGroupRequest} {@link DescribeGroupResponse} */
  DescribeGroup(data: DescribeGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupResponse>;
  /** 获取群组列表 {@link DescribeGroupListRequest} {@link DescribeGroupListResponse} */
  DescribeGroupList(data: DescribeGroupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupListResponse>;
  /** 获取群组成员列表 {@link DescribeGroupMemberListRequest} {@link DescribeGroupMemberListResponse} */
  DescribeGroupMemberList(data: DescribeGroupMemberListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupMemberListResponse>;
  /** 获取课堂提问列表 {@link DescribeQuestionListRequest} {@link DescribeQuestionListResponse} */
  DescribeQuestionList(data: DescribeQuestionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQuestionListResponse>;
  /** 获取房间配置信息 {@link DescribeRoomRequest} {@link DescribeRoomResponse} */
  DescribeRoom(data: DescribeRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomResponse>;
  /** 获取房间中被禁言成员列表 {@link DescribeRoomForbiddenUserRequest} {@link DescribeRoomForbiddenUserResponse} */
  DescribeRoomForbiddenUser(data: DescribeRoomForbiddenUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomForbiddenUserResponse>;
  /** 获取房间统计信息 {@link DescribeRoomStatisticsRequest} {@link DescribeRoomStatisticsResponse} */
  DescribeRoomStatistics(data: DescribeRoomStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomStatisticsResponse>;
  /** 获取课堂评分列表 {@link DescribeScoreListRequest} {@link DescribeScoreListResponse} */
  DescribeScoreList(data: DescribeScoreListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScoreListResponse>;
  /** 获取应用ID下用户列表 {@link DescribeSdkAppIdUsersRequest} {@link DescribeSdkAppIdUsersResponse} */
  DescribeSdkAppIdUsers(data: DescribeSdkAppIdUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSdkAppIdUsersResponse>;
  /** 获取巡课列表 {@link DescribeSupervisorsRequest} {@link DescribeSupervisorsResponse} */
  DescribeSupervisors(data: DescribeSupervisorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSupervisorsResponse>;
  /** 获取用户信息 {@link DescribeUserRequest} {@link DescribeUserResponse} */
  DescribeUser(data: DescribeUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserResponse>;
  /** 结束房间 {@link EndRoomRequest} {@link EndRoomResponse} */
  EndRoom(data: EndRoomRequest, config?: AxiosRequestConfig): AxiosPromise<EndRoomResponse>;
  /** 禁言和取消禁言 {@link ForbidSendMsgRequest} {@link ForbidSendMsgResponse} */
  ForbidSendMsg(data: ForbidSendMsgRequest, config?: AxiosRequestConfig): AxiosPromise<ForbidSendMsgResponse>;
  /** 获取房间事件 {@link GetRoomEventRequest} {@link GetRoomEventResponse} */
  GetRoomEvent(data: GetRoomEventRequest, config?: AxiosRequestConfig): AxiosPromise<GetRoomEventResponse>;
  /** 获取房间历史消息 {@link GetRoomMessageRequest} {@link GetRoomMessageResponse} */
  GetRoomMessage(data: GetRoomMessageRequest, config?: AxiosRequestConfig): AxiosPromise<GetRoomMessageResponse>;
  /** 获取房间列表 {@link GetRoomsRequest} {@link GetRoomsResponse} */
  GetRooms(data: GetRoomsRequest, config?: AxiosRequestConfig): AxiosPromise<GetRoomsResponse>;
  /** 获取水印设置 {@link GetWatermarkRequest} {@link GetWatermarkResponse} */
  GetWatermark(data: GetWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<GetWatermarkResponse>;
  /** 踢出房间用户 {@link KickUserFromRoomRequest} {@link KickUserFromRoomResponse} */
  KickUserFromRoom(data: KickUserFromRoomRequest, config?: AxiosRequestConfig): AxiosPromise<KickUserFromRoomResponse>;
  /** 源账号登录 {@link LoginOriginIdRequest} {@link LoginOriginIdResponse} */
  LoginOriginId(data: LoginOriginIdRequest, config?: AxiosRequestConfig): AxiosPromise<LoginOriginIdResponse>;
  /** 登录 {@link LoginUserRequest} {@link LoginUserResponse} */
  LoginUser(data: LoginUserRequest, config?: AxiosRequestConfig): AxiosPromise<LoginUserResponse>;
  /** 修改应用 {@link ModifyAppRequest} {@link ModifyAppResponse} */
  ModifyApp(data: ModifyAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppResponse>;
  /** 修改群组 {@link ModifyGroupRequest} {@link ModifyGroupResponse} */
  ModifyGroup(data: ModifyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGroupResponse>;
  /** 修改房间 {@link ModifyRoomRequest} {@link ModifyRoomResponse} */
  ModifyRoom(data: ModifyRoomRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRoomResponse>;
  /** 修改用户配置 {@link ModifyUserProfileRequest} {@link ModifyUserProfileResponse} */
  ModifyUserProfile(data: ModifyUserProfileRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserProfileResponse>;
  /** 注册用户 {@link RegisterUserRequest} {@link RegisterUserResponse} */
  RegisterUser(data: RegisterUserRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterUserResponse>;
  /** 指定用户给房间中发送消息 {@link SendRoomNormalMessageRequest} {@link SendRoomNormalMessageResponse} */
  SendRoomNormalMessage(data: SendRoomNormalMessageRequest, config?: AxiosRequestConfig): AxiosPromise<SendRoomNormalMessageResponse>;
  /** 房间中发送系统通知 {@link SendRoomNotificationMessageRequest} {@link SendRoomNotificationMessageResponse} */
  SendRoomNotificationMessage(data: SendRoomNotificationMessageRequest, config?: AxiosRequestConfig): AxiosPromise<SendRoomNotificationMessageResponse>;
  /** 设置应用自定义内容 {@link SetAppCustomContentRequest} {@link SetAppCustomContentResponse} */
  SetAppCustomContent(data: SetAppCustomContentRequest, config?: AxiosRequestConfig): AxiosPromise<SetAppCustomContentResponse>;
  /** 设置水印 {@link SetWatermarkRequest} {@link SetWatermarkResponse} */
  SetWatermark(data: SetWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<SetWatermarkResponse>;
  /** 开始房间 {@link StartRoomRequest} {@link StartRoomResponse} */
  StartRoom(data: StartRoomRequest, config?: AxiosRequestConfig): AxiosPromise<StartRoomResponse>;
  /** 文档从房间解绑 {@link UnbindDocumentFromRoomRequest} {@link UnbindDocumentFromRoomResponse} */
  UnbindDocumentFromRoom(data: UnbindDocumentFromRoomRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindDocumentFromRoomResponse>;
}

export declare type Versions = ["2022-08-17"];

export default Lcic;
