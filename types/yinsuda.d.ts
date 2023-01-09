/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AME 曲库歌曲基础信息。 */
declare interface AMEMusicBaseInfo {
  /** 歌曲 Id。 */
  MusicId: string;
  /** 歌曲名称。 */
  Name: string;
  /** 歌手列表。 */
  SingerSet: string[];
}

/** 副歌片段信息。 */
declare interface ChorusClip {
  /** 开始时间，单位：毫秒。 */
  StartTime: number;
  /** 结束时间，单位：毫秒。 */
  EndTime: number;
}

/** 直播进房输入参数 */
declare interface JoinRoomInput {
  /** TRTC进房参数 */
  TRTCJoinRoomInput: TRTCJoinRoomInput;
}

/** 节拍信息。 */
declare interface KTVBPMInfo {
  /** 节拍类型，取值有：Slow：慢；Middle：中等；Fast：快；Unknown：未知。 */
  Type: string;
  /** BPM 值。 */
  Value: number;
}

/** 匹配歌曲信息。 */
declare interface KTVMatchMusic {
  /** 匹配到的歌曲基础信息。 */
  KTVMusicBaseInfo: KTVMusicBaseInfo;
  /** 命中规则。 */
  MatchRule: KTVMatchRule;
  /** AME 歌曲基础信息，仅在使用音速达歌曲 Id 匹配 AME 曲库时有效。 */
  AMEMusicBaseInfo: AMEMusicBaseInfo | null;
}

/** 歌曲匹配规则。 */
declare interface KTVMatchRule {
  /** AME 曲库 Id。 */
  AMEMusicId?: string;
  /** 歌曲匹配信息。 */
  MusicInfo?: KTVMatchRuleMusicInfo | null;
  /** 音速达歌曲 Id，用于匹配 AME 曲库歌曲。 */
  MusicIdToMatchAME?: string;
}

/** 歌曲信息匹配。 */
declare interface KTVMatchRuleMusicInfo {
  /** 歌曲名称。 */
  MusicName: string;
  /** 歌手列表。 */
  SingerSet: string[];
}

/** 歌曲基础信息。 */
declare interface KTVMusicBaseInfo {
  /** 歌曲Id。 */
  MusicId: string;
  /** 歌曲名称。 */
  Name: string;
  /** 歌手名称。 */
  SingerSet: string[];
  /** 播放时长。 */
  Duration: number;
  /** 歌手图片链接。 */
  SingerImageUrl: string;
  /** 专辑信息。 */
  AlbumInfo: MusicAlbumInfo | null;
  /** 权益列表，取值有：Play：可播；Sing：可唱。 */
  RightSet: string[];
  /** 推荐类型，取值有：Featured：精选；Other：其他。 */
  RecommendType: string;
}

/** 歌曲详细信息。 */
declare interface KTVMusicDetailInfo {
  /** 歌曲基础信息。 */
  KTVMusicBaseInfo: KTVMusicBaseInfo;
  /** 播放凭证。 */
  PlayToken: string;
  /** 歌词下载链接。 */
  LyricsUrl: string;
  /** 音高数据下载链接。 */
  MidiUrl: string;
  /** 副歌片段信息。 */
  ChorusClipSet: ChorusClip[];
  /** 前奏间隔。 */
  PreludeInterval: number;
  /** 歌曲流派列表。 */
  GenreSet: string[];
  /** 节拍信息。 */
  BPMInfo: KTVBPMInfo | null;
}

/** 歌单基础信息。 */
declare interface KTVPlaylistBaseInfo {
  /** 歌单Id。 */
  PlaylistId: string;
  /** 歌单标题。 */
  Title: string;
}

/** 机器人信息 */
declare interface KTVRobotInfo {
  /** 机器人Id。 */
  RobotId: string;
  /** 状态，取值有：Play：播放Pause：暂停Destroy：销毁 */
  Status: string;
  /** 播放列表。 */
  Playlists: string[];
  /** 当前歌单索引位置。 */
  CurIndex: number;
  /** 播放进度，单位：毫秒。 */
  Position: number;
  /** 音频参数。 */
  SetAudioParamInput: SetAudioParamCommandInput;
  /** 进房信息。 */
  JoinRoomInput: JoinRoomInput;
  /** RTC厂商类型，取值有：TRTC */
  RTCSystem: string;
  /** 播放模式，PlayMode取值有：RepeatPlaylist：列表循环Order：顺序播放RepeatSingle：单曲循环Shuffle：随机播放 */
  SetPlayModeInput: SetPlayModeCommandInput;
}

/** 联想词信息。 */
declare interface KTVSuggestionInfo {
  /** 联想词。 */
  Suggestion: string;
}

/** 标签分组信息。 */
declare interface KTVTagGroupInfo {
  /** 分组 Id。 */
  GroupId: string;
  /** 分组名。 */
  Name: string;
  /** 标签列表。 */
  TagInfoSet: KTVTagInfo[];
}

/** 标签信息。 */
declare interface KTVTagInfo {
  /** 标签 Id。 */
  TagId: string;
  /** 标签名称。 */
  Name: string;
}

/** 歌曲专辑封面信息。 */
declare interface MusicAlbumCoverInfo {
  /** 尺寸规格，取值有：Mini：150 x 150 尺寸；Small：240 x 240 尺寸；Medium：480 x 480 尺寸。 */
  Dimension: string;
  /** 下载链接。 */
  Url: string;
}

/** 歌曲专辑信息。 */
declare interface MusicAlbumInfo {
  /** 专辑名称。 */
  Name: string;
  /** 封面列表。 */
  CoverInfoSet: MusicAlbumCoverInfo[];
}

/** 播放指令输入参数 */
declare interface PlayCommandInput {
  /** 歌曲位置索引。 */
  Index: number;
}

/** 调整播放进度指令参数 */
declare interface SeekCommandInput {
  /** 播放位置，单位：毫秒。 */
  Position: number;
}

/** 发送自定义信息指令参数 */
declare interface SendMessageCommandInput {
  /** 自定义消息，json格式字符串。 */
  Message: string;
  /** 消息重复次数，默认为 1。 */
  Repeat?: number;
}

/** 音频参数信息 */
declare interface SetAudioParamCommandInput {
  /** 音频类型，取值有：Original：原唱Accompaniment：伴奏 */
  Type?: string;
}

/** 设置销毁模式 */
declare interface SetDestroyModeCommandInput {
  /** 销毁模式，取值有：Auto：房间没人时自动销毁Expire：房间没人时过期自动销毁Never：不自动销毁，需手动销毁默认为：Auto。 */
  DestroyMode: string;
  /** 过期销毁时间，单位：秒，当DestroyMode取Expire时必填。 */
  DestroyExpireTime?: number;
}

/** 设置播放模式 */
declare interface SetPlayModeCommandInput {
  /** 播放模式，取值有：RepeatPlaylist：列表循环Order：顺序播放RepeatSingle：单曲循环Shuffle：随机播放 */
  PlayMode: string;
}

/** 设置播放列表指令参数 */
declare interface SetPlaylistCommandInput {
  /** 变更类型，取值有：Add：添加Delete：删除ClearList：清空歌曲列表Move：移动歌曲 */
  Type: string;
  /** 歌单索引位置，当 Type 取 Add 时，-1表示添加在列表最后位置，大于-1表示要添加的位置；当 Type 取 Delete 时，表示待删除歌曲的位置；当 Type 取 Move 时，表示待调整歌曲的位置。 */
  Index?: number;
  /** 当 Type 取 Move 时，必填，表示移动歌曲的目标位置。 */
  ChangedIndex?: number;
  /** 歌曲 ID 列表，当 Type 取 Add 时，必填。 */
  MusicIds?: string[];
}

/** KTV 机器人初始化参数，在创建后自动完成相关初始化工作。 */
declare interface SyncRobotCommand {
  /** 可同时传入多个指令，顺序执行。取值有：Play：播放Pause：暂停SwitchPrevious：上一首SwitchNext：下一首SetPlayMode：设置播放模式Seek：调整播放进度SetPlaylist：歌单变更SetAudioParam：音频参数变更SendMessage：发送自定义消息SetDestroyMode：设置销毁模式 */
  Command: string;
  /** 播放参数。 */
  PlayCommandInput?: PlayCommandInput;
  /** 播放列表变更信息，当Command取SetPlaylist时，必填。 */
  SetPlaylistCommandInput?: SetPlaylistCommandInput;
  /** 播放进度，当Command取Seek时，必填。 */
  SeekCommandInput?: SeekCommandInput;
  /** 音频参数，当Command取SetAudioParam时，必填。 */
  SetAudioParamCommandInput?: SetAudioParamCommandInput;
  /** 自定义消息，当Command取SendMessage时，必填。 */
  SendMessageCommandInput?: SendMessageCommandInput;
  /** 播放模式，当Command取SetPlayMode时，必填。 */
  SetPlayModeCommandInput?: SetPlayModeCommandInput;
  /** 销毁模式，当Command取SetDestroyMode时，必填。 */
  SetDestroyModeCommandInput?: SetDestroyModeCommandInput;
}

/** TRTC推流进房信息 */
declare interface TRTCJoinRoomInput {
  /** 签名。 */
  Sign: string;
  /** 房间号。 */
  RoomId: string;
  /** 推流应用ID。 */
  SdkAppId: string;
  /** 用户唯一标识。 */
  UserId: string;
}

/** 时间范围 */
declare interface TimeRange {
  /** 大于等于此时间（起始时间）。格式按照 ISO 8601标准表示，详见 ISO 日期格式说明。 */
  Before?: string;
  /** 小于此时间（结束时间）。格式按照 ISO 8601标准表示，详见 ISO 日期格式说明。 */
  After?: string;
}

declare interface ApplyChorusRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 房间号。 */
  RoomId: string;
  /** 歌曲 Id。 */
  MusicId: string;
  /** 最大合唱人数，默认值为 8，最大值为 20。 */
  MaxChorusNum?: number;
  /** 合唱用户标识列表。 */
  ChorusUserIds?: string[];
}

declare interface ApplyChorusResponse {
  /** 合唱 Token。 */
  ChorusToken: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDescribeKTVMusicDetailsRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 歌曲 Id 列表。 */
  MusicIds: string[];
}

declare interface BatchDescribeKTVMusicDetailsResponse {
  /** 歌曲详细信息列表。 */
  KTVMusicDetailInfoSet: KTVMusicDetailInfo[];
  /** 不存在歌曲Id列表。 */
  NotExistMusicIdSet: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKTVRobotRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** RTC厂商类型，取值有：TRTC */
  RTCSystem: string;
  /** 进房参数。 */
  JoinRoomInput: JoinRoomInput;
  /** 创建机器人时初始化参数。 */
  SyncRobotCommands?: SyncRobotCommand[];
}

declare interface CreateKTVRobotResponse {
  /** 机器人Id。 */
  RobotId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVMatchMusicsRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 匹配规则列表。 */
  Rules: KTVMatchRule[];
}

declare interface DescribeKTVMatchMusicsResponse {
  /** 匹配到的歌曲列表。 */
  MatchMusicSet: KTVMatchMusic[];
  /** 未匹配的规则列表。 */
  NotMatchRuleSet: KTVMatchRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVMusicsByTagRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 标签 Id。 */
  TagId: string;
  /** 滚动标记。 */
  ScrollToken?: string;
  /** 返回条数限制，默认 20，最大 50。 */
  Limit?: number;
  /** 权益过滤，取值有：Play：可播；Sing：可唱。 */
  RightFilters?: string[];
}

declare interface DescribeKTVMusicsByTagResponse {
  /** 歌曲信息列表。 */
  KTVMusicInfoSet: KTVMusicBaseInfo[];
  /** 滚动标记，用于设置下次请求的 ScrollToken 参数。 */
  ScrollToken: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVPlaylistDetailRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 歌单 Id。 */
  PlaylistId: string;
  /** 滚动标记。 */
  ScrollToken?: string;
  /** 返回条数，默认：20，最大：50。 */
  Limit?: number;
  /** 权益过滤，取值有：Play：可播；Sing：可唱。 */
  RightFilters?: string[];
}

declare interface DescribeKTVPlaylistDetailResponse {
  /** 歌曲信息列表。 */
  KTVMusicInfoSet: KTVMusicBaseInfo[];
  /** 滚动标记，用于设置下次请求的 ScrollToken 参数。 */
  ScrollToken: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVPlaylistsRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 类型列表，取值有：OfficialRec：官方推荐；Customize：自定义。默认值为 OfficialRec。 */
  Types?: string[];
  /** 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。 */
  Offset?: number;
  /** 分页返回的记录条数，默认值：20，最大值：50。 */
  Limit?: number;
}

declare interface DescribeKTVPlaylistsResponse {
  /** 歌单基础信息。 */
  PlaylistBaseInfoSet: KTVPlaylistBaseInfo[];
  /** 歌单总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVRobotsRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 机器人Id列表。 */
  RobotIds?: string[];
  /** 机器人状态，取值有：Play：播放Pause：暂停Destroy：销毁 */
  Statuses?: string[];
  /** 匹配创建时间在此时间段内的机器人。包含所指定的头尾时间点。 */
  CreateTime?: TimeRange;
  /** 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。 */
  Offset?: number;
  /** 分页返回的起始偏移量，默认值：10。 */
  Limit?: number;
}

declare interface DescribeKTVRobotsResponse {
  /** 机器人总数。 */
  TotalCount: number;
  /** 机器人信息集合。 */
  KTVRobotInfoSet: KTVRobotInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVSuggestionsRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 搜索词。 */
  KeyWord: string;
}

declare interface DescribeKTVSuggestionsResponse {
  /** 联想词信息列表。 */
  KTVSuggestionInfoSet: KTVSuggestionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVTagsRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
}

declare interface DescribeKTVTagsResponse {
  /** 标签分组列表。 */
  TagGroupInfoSet: KTVTagGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyKTVRobotRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 机器人Id。 */
  RobotId: string;
}

declare interface DestroyKTVRobotResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchKTVMusicsRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 关键词。 */
  KeyWord: string;
  /** 滚动标记。 */
  ScrollToken?: string;
  /** 返回条数限制，默认 20，最大 50. */
  Limit?: number;
  /** 权益过滤，取值有：Play：可播；Sing：可唱。 */
  RightFilters?: string[];
}

declare interface SearchKTVMusicsResponse {
  /** 歌曲信息列表。 */
  KTVMusicInfoSet: KTVMusicBaseInfo[];
  /** 滚动标记，用于设置下次请求的 ScrollToken 参数。 */
  ScrollToken: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncKTVRobotCommandRequest {
  /** 应用名称。 */
  AppName: string;
  /** 用户标识。 */
  UserId: string;
  /** 机器人Id。 */
  RobotId: string;
  /** 指令及指令参数数组。 */
  SyncRobotCommands: SyncRobotCommand[];
}

declare interface SyncKTVRobotCommandResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Yinsuda 音速达直播音乐版权引擎} */
declare interface Yinsuda {
  (): Versions;
  /** 申请合唱 {@link ApplyChorusRequest} {@link ApplyChorusResponse} */
  ApplyChorus(data: ApplyChorusRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyChorusResponse>;
  /** 批量获取歌曲详情 {@link BatchDescribeKTVMusicDetailsRequest} {@link BatchDescribeKTVMusicDetailsResponse} */
  BatchDescribeKTVMusicDetails(data: BatchDescribeKTVMusicDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDescribeKTVMusicDetailsResponse>;
  /** 创建机器人 {@link CreateKTVRobotRequest} {@link CreateKTVRobotResponse} */
  CreateKTVRobot(data: CreateKTVRobotRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKTVRobotResponse>;
  /** 匹配歌曲 {@link DescribeKTVMatchMusicsRequest} {@link DescribeKTVMatchMusicsResponse} */
  DescribeKTVMatchMusics(data: DescribeKTVMatchMusicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVMatchMusicsResponse>;
  /** 获取标签歌曲 {@link DescribeKTVMusicsByTagRequest} {@link DescribeKTVMusicsByTagResponse} */
  DescribeKTVMusicsByTag(data: DescribeKTVMusicsByTagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVMusicsByTagResponse>;
  /** 获取歌单详情 {@link DescribeKTVPlaylistDetailRequest} {@link DescribeKTVPlaylistDetailResponse} */
  DescribeKTVPlaylistDetail(data: DescribeKTVPlaylistDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVPlaylistDetailResponse>;
  /** 获取推荐歌单列表 {@link DescribeKTVPlaylistsRequest} {@link DescribeKTVPlaylistsResponse} */
  DescribeKTVPlaylists(data: DescribeKTVPlaylistsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVPlaylistsResponse>;
  /** 获取机器人信息 {@link DescribeKTVRobotsRequest} {@link DescribeKTVRobotsResponse} */
  DescribeKTVRobots(data: DescribeKTVRobotsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVRobotsResponse>;
  /** 获取联想词 {@link DescribeKTVSuggestionsRequest} {@link DescribeKTVSuggestionsResponse} */
  DescribeKTVSuggestions(data: DescribeKTVSuggestionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVSuggestionsResponse>;
  /** 获取标签列表 {@link DescribeKTVTagsRequest} {@link DescribeKTVTagsResponse} */
  DescribeKTVTags(data: DescribeKTVTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVTagsResponse>;
  /** 销毁机器人 {@link DestroyKTVRobotRequest} {@link DestroyKTVRobotResponse} */
  DestroyKTVRobot(data: DestroyKTVRobotRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyKTVRobotResponse>;
  /** 搜索歌曲 {@link SearchKTVMusicsRequest} {@link SearchKTVMusicsResponse} */
  SearchKTVMusics(data: SearchKTVMusicsRequest, config?: AxiosRequestConfig): AxiosPromise<SearchKTVMusicsResponse>;
  /** 同步机器人指令 {@link SyncKTVRobotCommandRequest} {@link SyncKTVRobotCommandResponse} */
  SyncKTVRobotCommand(data: SyncKTVRobotCommandRequest, config?: AxiosRequestConfig): AxiosPromise<SyncKTVRobotCommandResponse>;
}

export declare type Versions = ["2022-05-27"];

export default Yinsuda;
