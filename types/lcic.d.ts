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

/** 场景配置 */
declare interface SceneItem {
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
  /** 老师ID。通过[注册用户]接口获取的UserId。 */
  TeacherId?: string;
  /** 进入课堂时是否自动连麦。可以有以下取值：0 不自动连麦（需要手动申请上麦，默认值）1 自动连麦 */
  AutoMic?: number;
  /** 高音质模式。可以有以下取值：0 不开启高音质（默认值）1 开启高音质 */
  AudioQuality?: number;
  /** 上课后是否禁止自动录制。可以有以下取值：0 不禁止录制（自动开启录制，默认值）1 禁止录制注：如果该配置取值为0，录制将从上课后开始，课堂结束后停止。 */
  DisableRecord?: number;
  /** 助教Id列表。通过[注册用户]接口获取的UserId。 */
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
  /** 老师ID。 */
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
  /** 助教Id列表。 */
  Assistants?: string[] | null;
  /** 录制地址。仅在房间结束后存在。 */
  RecordUrl?: string | null;
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
  PeakMemberNumber: number;
  /** 累计在线人数。 */
  MemberNumber: number;
  /** 记录总数。包含进入房间或者应到未到的。 */
  Total: number;
  /** 成员记录列表。 */
  MemberRecords: MemberRecord[];
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
  /** 绑定文档到房间 {@link BindDocumentToRoomRequest} {@link BindDocumentToRoomResponse} */
  BindDocumentToRoom(data: BindDocumentToRoomRequest, config?: AxiosRequestConfig): AxiosPromise<BindDocumentToRoomResponse>;
  /** 创建文档 {@link CreateDocumentRequest} {@link CreateDocumentResponse} */
  CreateDocument(data: CreateDocumentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDocumentResponse>;
  /** 创建房间 {@link CreateRoomRequest} {@link CreateRoomResponse} */
  CreateRoom(data: CreateRoomRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoomResponse>;
  /** 创建巡课 {@link CreateSupervisorRequest} {@link CreateSupervisorResponse} */
  CreateSupervisor(data?: CreateSupervisorRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSupervisorResponse>;
  /** 删除房间 {@link DeleteRoomRequest} {@link DeleteRoomResponse} */
  DeleteRoom(data: DeleteRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoomResponse>;
  /** 获取应用详情 {@link DescribeAppDetailRequest} {@link DescribeAppDetailResponse} */
  DescribeAppDetail(data: DescribeAppDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppDetailResponse>;
  /** 获取房间信息 {@link DescribeRoomRequest} {@link DescribeRoomResponse} */
  DescribeRoom(data: DescribeRoomRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomResponse>;
  /** 获取房间统计信息 {@link DescribeRoomStatisticsRequest} {@link DescribeRoomStatisticsResponse} */
  DescribeRoomStatistics(data: DescribeRoomStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoomStatisticsResponse>;
  /** 获取用户信息 {@link DescribeUserRequest} {@link DescribeUserResponse} */
  DescribeUser(data: DescribeUserRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserResponse>;
  /** 源账号登录 {@link LoginOriginIdRequest} {@link LoginOriginIdResponse} */
  LoginOriginId(data: LoginOriginIdRequest, config?: AxiosRequestConfig): AxiosPromise<LoginOriginIdResponse>;
  /** 登录 {@link LoginUserRequest} {@link LoginUserResponse} */
  LoginUser(data: LoginUserRequest, config?: AxiosRequestConfig): AxiosPromise<LoginUserResponse>;
  /** 修改应用 {@link ModifyAppRequest} {@link ModifyAppResponse} */
  ModifyApp(data: ModifyAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppResponse>;
  /** 注册用户 {@link RegisterUserRequest} {@link RegisterUserResponse} */
  RegisterUser(data: RegisterUserRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterUserResponse>;
  /** 设置应用自定义内容 {@link SetAppCustomContentRequest} {@link SetAppCustomContentResponse} */
  SetAppCustomContent(data: SetAppCustomContentRequest, config?: AxiosRequestConfig): AxiosPromise<SetAppCustomContentResponse>;
  /** 文档从房间解绑 {@link UnbindDocumentFromRoomRequest} {@link UnbindDocumentFromRoomResponse} */
  UnbindDocumentFromRoom(data: UnbindDocumentFromRoomRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindDocumentFromRoomResponse>;
}

export declare type Versions = ["2022-08-17"];

export default Lcic;
