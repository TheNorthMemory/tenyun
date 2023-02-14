/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用配置信息 */
declare interface AppConfig {
}

/** 应用自定义内容 */
declare interface AppCustomContent {
  /** 场景参数，一个应用下可以设置多个不同场景。 */
  Scene: string;
  /** logo地址。 */
  LogoUrl?: string;
  /** 主页地址，可设置用于跳转。 */
  HomeUrl?: string;
  /** 自定义的js。 */
  JsUrl?: string;
  /** 自定义的css。 */
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
}

/** 成员记录信息。 */
declare interface MemberRecord {
  /** 用户ID。 */
  UserId: string;
  /** 用户名称。 */
  UserName: string;
  /** 在线时长，单位秒。 */
  PresentTime: number;
  /** 是否开启摄像头。 */
  Camera: number;
  /** 是否开启麦克风。 */
  Mic: number;
  /** 是否禁言。 */
  Silence: number;
  /** 回答问题数量。 */
  AnswerQuestions: number;
  /** 举手数量。 */
  HandUps: number;
  /** 首次进入房间的unix时间戳。 */
  FirstJoinTimestamp: number;
  /** 最后一次退出房间的unix时间戳。 */
  LastQuitTimestamp: number;
  /** 奖励次数。 */
  Rewords: number;
}

/** 批量创建房间的房间信息 */
declare interface RoomInfo {
  /** 房间名称。 */
  Name: string | null;
  /** 预定的房间开始时间，unix时间戳。 */
  StartTime: number | null;
  /** 预定的房间结束时间，unix时间戳。 */
  EndTime: number | null;
  /** 分辨率。可以有如下取值： 1 标清 2 高清 3 全高清 */
  Resolution: number | null;
  /** 最大连麦人数（不包括老师）。取值范围[0, 16] */
  MaxMicNumber: number | null;
  /** 房间子类型，可以有以下取值： videodoc 文档+视频 video 纯视频 coteaching 双师 */
  SubType: string | null;
  /** 老师ID。通过[注册用户]接口获取的UserId。 */
  TeacherId?: string | null;
  /** 进入课堂时是否自动连麦。可以有以下取值： 0 不自动连麦（需要手动申请上麦，默认值） 1 自动连麦 */
  AutoMic?: number | null;
  /** 释放音视频权限后是否自动取消连麦。可以有以下取值： 0 自动取消连麦（默认值） 1 保持连麦状态 */
  TurnOffMic?: number | null;
  /** 高音质模式。可以有以下取值： 0 不开启高音质（默认值） 1 开启高音质 */
  AudioQuality?: number | null;
  /** 上课后是否禁止自动录制。可以有以下取值： 0 不禁止录制（自动开启录制，默认值） 1 禁止录制 注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。 */
  DisableRecord?: number | null;
  /** 助教Id列表。通过[注册用户]接口获取的UserId。 */
  Assistants?: string[] | null;
  /** rtc人数。 */
  RTCAudienceNumber?: number | null;
  /** 观看类型。 */
  AudienceType?: number | null;
  /** 录制布局。 */
  RecordLayout?: number | null;
}

/** 场景配置 */
declare interface SceneItem {
}

/** 文字水印配置 */
declare interface TextMarkConfig {
  /** 文字水印内容 */
  Text?: string | null;
  /** 文字水印颜色 */
  Color?: string | null;
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
  SdkAppId: number | null;
  /** 用户名称。 */
  Name?: string | null;
  /** 用户在客户系统的Id，需要在同一应用下唯一。 */
  OriginId?: string | null;
  /** 用户头像。 */
  Avatar?: string | null;
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
  /** 转码类型，可以有如下取值：0 无需转码（默认）1 需要转码的文档，ppt，pptx，pdf，doc，docx2 需要转码的视频，mp4，3pg，mpeg，avi，flv，wmv，rm，h264等2 需要转码的音频，mp3，wav，wma，aac，flac，opus */
  TranscodeType?: number;
  /** 权限，可以有如下取值：0 私有文档（默认）1 公共文档 */
  Permission?: number;
  /** 文档后缀名。 */
  DocumentType?: string;
  /** 文档大小，单位 字节 */
  DocumentSize?: number;
}

declare interface CreateDocumentResponse {
  /** 文档ID。 */
  DocumentId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRoomRequest {
  /** 房间名称。 */
  Name: string;
  /** 预定的房间开始时间，unix时间戳。 */
  StartTime: number;
  /** 预定的房间结束时间，unix时间戳。 */
  EndTime: number;
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 分辨率。可以有如下取值：1 标清2 高清3 全高清 */
  Resolution: number;
  /** 最大连麦人数（不包括老师）。取值范围[0, 16] */
  MaxMicNumber: number;
  /** 房间子类型，可以有以下取值：videodoc 文档+视频video 纯视频coteaching 双师 */
  SubType: string;
  /** 老师ID。通过[注册用户]接口获取的UserId。指定后该用户在房间内拥有老师权限。 */
  TeacherId?: string;
  /** 进入课堂时是否自动连麦。可以有以下取值：0 不自动连麦（需要手动申请上麦，默认值）1 自动连麦 */
  AutoMic?: number;
  /** 高音质模式。可以有以下取值：0 不开启高音质（默认值）1 开启高音质 */
  AudioQuality?: number;
  /** 上课后是否禁止自动录制。可以有以下取值：0 不禁止录制（自动开启录制，默认值）1 禁止录制注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。 */
  DisableRecord?: number;
  /** 助教Id列表。通过[注册用户]接口获取的UserId。指定后该用户在房间内拥有助教权限。 */
  Assistants?: string[];
  /** 录制布局。 */
  RecordLayout?: number;
}

declare interface CreateRoomResponse {
  /** 房间ID。 */
  RoomId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSupervisorRequest {
}

declare interface CreateSupervisorResponse {
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDocumentRequest {
  /** 文档Id（唯一id） */
  DocumentId: string;
}

declare interface DescribeDocumentResponse {
  /** 文档Id */
  DocumentId: string;
  /** 文档原址url */
  DocumentUrl: string;
  /** 文档名称 */
  DocumentName: string;
  /** 文档所有者UserId */
  Owner: string;
  /** 应用Id */
  SdkAppId: number;
  /** 文档权限 */
  Permission: number;
  /** 转码结果，无需转码为空，转码成功为结果url，转码失败为错误码 */
  TranscodeResult: string;
  /** 转码类型 */
  TranscodeType: number;
  /** 转码进度， 0 - 100 表示（0% - 100%） */
  TranscodeProgress: number;
  /** 转码状态，0为无需转码，1为正在转码，2为转码失败，3为转码成功 */
  TranscodeState: number;
  /** 转码失败后的错误信息 */
  TranscodeInfo: string;
  /** 文档类型 */
  DocumentType: string;
  /** 文档大小，单位：字节 */
  DocumentSize: number;
  /** 更新的UNIX时间戳 */
  UpdateTime: number;
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

declare interface DescribeRoomRequest {
  /** 房间Id。 */
  RoomId: number;
}

declare interface DescribeRoomResponse {
  /** 房间名称。 */
  Name?: string;
  /** 预定的房间开始时间，unix时间戳。 */
  StartTime?: number;
  /** 预定的房间结束时间，unix时间戳。 */
  EndTime?: number;
  /** 老师的UserId。 */
  TeacherId?: string;
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId?: number;
  /** 分辨率。可以有如下取值：1 标清2 高清3 全高清 */
  Resolution?: number;
  /** 最大连麦人数（不包括老师）。取值范围[0, 16] */
  MaxMicNumber?: number;
  /** 进入课堂时是否自动连麦。可以有以下取值：0 不自动连麦（需要手动申请上麦，默认值）1 自动连麦 */
  AutoMic?: number;
  /** 高音质模式。可以有以下取值：0 不开启高音质（默认值）1 开启高音质 */
  AudioQuality?: number;
  /** 房间子类型，可以有以下取值：videodoc 文档+视频video 纯视频coteaching 双师 */
  SubType?: string;
  /** 上课后是否禁止自动录制。可以有以下取值：0 不禁止录制（自动开启录制，默认值）1 禁止录制注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。 */
  DisableRecord?: number;
  /** 助教UserId列表。 */
  Assistants?: string[] | null;
  /** 录制地址。仅在房间结束后存在。 */
  RecordUrl?: string | null;
  /** 课堂状态。0为未开始，1为正在上课，2为已结束，3为已过期。 */
  Status?: number | null;
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

declare interface DescribeUserRequest {
  /** 用户Id。 */
  UserId: string;
}

declare interface DescribeUserResponse {
  /** 应用Id。 */
  SdkAppId: number;
  /** 用户Id。 */
  UserId: string;
  /** 用户昵称。 */
  Name: string;
  /** 用户头像Url。 */
  Avatar: string;
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

declare interface LoginOriginIdRequest {
  /** 低代码互动课堂的SdkAppId。 */
  SdkAppId: number;
  /** 用户在客户系统的Id，需要在同一应用下唯一。 */
  OriginId: string;
}

declare interface LoginOriginIdResponse {
  /** 用户Id。 */
  UserId: string;
  /** 登录/注册成功后返回登录态token。有效期7天。 */
  Token: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LoginUserRequest {
  /** 注册获取的用户id。 */
  UserId: string;
}

declare interface LoginUserResponse {
  /** 用户Id。 */
  UserId: string;
  /** 登录/注册成功后返回登录态token。有效期7天。 */
  Token: string;
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
}

declare interface ModifyAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRoomRequest {
  /** 房间ID。 */
  RoomId: number;
  /** 低代码互动课堂的SdkAppId */
  SdkAppId: number;
  /** 预定的房间开始时间，unix时间戳。直播开始后不允许修改。 */
  StartTime?: number;
  /** 预定的房间结束时间，unix时间戳。直播开始后不允许修改。 */
  EndTime?: number;
  /** 老师ID。直播开始后不允许修改。 */
  TeacherId?: string;
  /** 房间名称。 */
  Name?: string;
  /** 分辨率。可以有如下取值：1 标清2 高清3 全高清直播开始后不允许修改。 */
  Resolution?: number;
  /** 最大连麦人数（不包括老师）。取值范围[0, 17)直播开始后不允许修改。 */
  MaxMicNumber?: number;
  /** 进入房间时是否自动连麦。可以有以下取值：0 不自动连麦（默认值）1 自动连麦直播开始后不允许修改。 */
  AutoMic?: number;
  /** 高音质模式。可以有以下取值：0 不开启高音质（默认值）1 开启高音质直播开始后不允许修改。 */
  AudioQuality?: number;
  /** 房间子类型，可以有以下取值：videodoc 文档+视频video 纯视频coteaching 双师直播开始后不允许修改。 */
  SubType?: string;
  /** 禁止录制。可以有以下取值：0 不禁止录制（默认值）1 禁止录制直播开始后不允许修改。 */
  DisableRecord?: number;
  /** 助教Id列表。直播开始后不允许修改。 */
  Assistants?: string[];
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

/** {@link Lcic 低代码互动课堂} */
declare interface Lcic {
  (): Versions;
  /** 批量创建房间 {@link BatchCreateRoomRequest} {@link BatchCreateRoomResponse} */
  BatchCreateRoom(data: BatchCreateRoomRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateRoomResponse>;
  /** 批量删除多个房间的录制文件 {@link BatchDeleteRecordRequest} {@link BatchDeleteRecordResponse} */
  BatchDeleteRecord(data: BatchDeleteRecordRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteRecordResponse>;
  /** 用户批量注册 {@link BatchRegisterRequest} {@link BatchRegisterResponse} */
  BatchRegister(data: BatchRegisterRequest, config?: AxiosRequestConfig): AxiosPromise<BatchRegisterResponse>;
  /** 绑定文档到房间 {@link BindDocumentToRoomRequest} {@link BindDocumentToRoomResponse} */
  BindDocumentToRoom(data: BindDocumentToRoomRequest, config?: AxiosRequestConfig): AxiosPromise<BindDocumentToRoomResponse>;
  /** 创建文档 {@link CreateDocumentRequest} {@link CreateDocumentResponse} */
  CreateDocument(data: CreateDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDocumentResponse>;
  /** 创建房间 {@link CreateRoomRequest} {@link CreateRoomResponse} */
  CreateRoom(data: CreateRoomRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoomResponse>;
  /** 创建巡课 {@link CreateSupervisorRequest} {@link CreateSupervisorResponse} */
  CreateSupervisor(data?: CreateSupervisorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSupervisorResponse>;
  /** 删除文档 {@link DeleteDocumentRequest} {@link DeleteDocumentResponse} */
  DeleteDocument(data: DeleteDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDocumentResponse>;
  /** 删除指定房间的录制文件 {@link DeleteRecordRequest} {@link DeleteRecordResponse} */
  DeleteRecord(data: DeleteRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRecordResponse>;
  /** 删除房间 {@link DeleteRoomRequest} {@link DeleteRoomResponse} */
  DeleteRoom(data: DeleteRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoomResponse>;
  /** 获取应用详情 {@link DescribeAppDetailRequest} {@link DescribeAppDetailResponse} */
  DescribeAppDetail(data: DescribeAppDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppDetailResponse>;
  /** 获取文档信息 {@link DescribeDocumentRequest} {@link DescribeDocumentResponse} */
  DescribeDocument(data: DescribeDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocumentResponse>;
  /** 获取指定房间下文档 {@link DescribeDocumentsByRoomRequest} {@link DescribeDocumentsByRoomResponse} */
  DescribeDocumentsByRoom(data: DescribeDocumentsByRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocumentsByRoomResponse>;
  /** 获取房间信息 {@link DescribeRoomRequest} {@link DescribeRoomResponse} */
  DescribeRoom(data: DescribeRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomResponse>;
  /** 获取房间统计信息 {@link DescribeRoomStatisticsRequest} {@link DescribeRoomStatisticsResponse} */
  DescribeRoomStatistics(data: DescribeRoomStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomStatisticsResponse>;
  /** 获取应用ID下用户列表 {@link DescribeSdkAppIdUsersRequest} {@link DescribeSdkAppIdUsersResponse} */
  DescribeSdkAppIdUsers(data: DescribeSdkAppIdUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSdkAppIdUsersResponse>;
  /** 获取用户信息 {@link DescribeUserRequest} {@link DescribeUserResponse} */
  DescribeUser(data: DescribeUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserResponse>;
  /** 获取水印设置 {@link GetWatermarkRequest} {@link GetWatermarkResponse} */
  GetWatermark(data: GetWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<GetWatermarkResponse>;
  /** 源账号登录 {@link LoginOriginIdRequest} {@link LoginOriginIdResponse} */
  LoginOriginId(data: LoginOriginIdRequest, config?: AxiosRequestConfig): AxiosPromise<LoginOriginIdResponse>;
  /** 登录 {@link LoginUserRequest} {@link LoginUserResponse} */
  LoginUser(data: LoginUserRequest, config?: AxiosRequestConfig): AxiosPromise<LoginUserResponse>;
  /** 修改应用 {@link ModifyAppRequest} {@link ModifyAppResponse} */
  ModifyApp(data: ModifyAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppResponse>;
  /** 修改房间 {@link ModifyRoomRequest} {@link ModifyRoomResponse} */
  ModifyRoom(data: ModifyRoomRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRoomResponse>;
  /** 修改用户配置 {@link ModifyUserProfileRequest} {@link ModifyUserProfileResponse} */
  ModifyUserProfile(data: ModifyUserProfileRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserProfileResponse>;
  /** 注册用户 {@link RegisterUserRequest} {@link RegisterUserResponse} */
  RegisterUser(data: RegisterUserRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterUserResponse>;
  /** 设置应用自定义内容 {@link SetAppCustomContentRequest} {@link SetAppCustomContentResponse} */
  SetAppCustomContent(data: SetAppCustomContentRequest, config?: AxiosRequestConfig): AxiosPromise<SetAppCustomContentResponse>;
  /** 设置水印 {@link SetWatermarkRequest} {@link SetWatermarkResponse} */
  SetWatermark(data: SetWatermarkRequest, config?: AxiosRequestConfig): AxiosPromise<SetWatermarkResponse>;
  /** 文档从房间解绑 {@link UnbindDocumentFromRoomRequest} {@link UnbindDocumentFromRoomResponse} */
  UnbindDocumentFromRoom(data: UnbindDocumentFromRoomRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindDocumentFromRoomResponse>;
}

export declare type Versions = ["2022-08-17"];

export default Lcic;
