/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** Album */
declare interface Album {
  /** 专辑名 */
  AlbumName: string;
  /** 专辑图片大小及类别 */
  ImagePathMap: ImagePath[] | null;
}

/** 用户license基础信息 */
declare interface ApplicationLicenseInput {
  /** 应用名称，注：后面三个字段AndroidPackageName、IOSBundleId、PcIdentifier，三者选填一个 */
  AppName: string;
  /** app的安卓包名 */
  AndroidPackageName?: string;
  /** app的IOS的BundleId名 */
  IOSBundleId?: string;
  /** PC标识名 */
  PcIdentifier?: string;
}

/** Artist */
declare interface Artist {
  /** 歌手名 */
  ArtistName: string;
}

/** AuthInfo集合 */
declare interface AuthInfo {
  /** 主体名称 */
  SubjectName: string | null;
  /** 项目名称 */
  ProjectName: string | null;
  /** 应用场景 */
  AppScene: number;
  /** 应用地域 */
  AppRegion: number;
  /** 授权时间 */
  AuthPeriod: number;
  /** 是否可商业化 */
  Commercialization: number;
  /** 是否可跨平台 */
  Platform: number;
  /** 加密后Id */
  Id: string;
}

/** 副歌片段信息 */
declare interface ChorusClip {
  /** 副歌时间，单位：毫秒 */
  StartTime: number;
  /** 副歌结束时间，单位：毫秒 */
  EndTime: number;
}

/** 数据信息 */
declare interface DataInfo {
  /** Song Name */
  Name: string;
  /** 歌曲版本 */
  Version: string;
  /** 歌曲总时长（非试听时长） */
  Duration: string;
  /** 试听开始时间 */
  AuditionBegin: number;
  /** 试听结束时间 */
  AuditionEnd: number;
  /** 标签名称 */
  TagNames: string[];
}

/** 图片路径 */
declare interface ImagePath {
  /** station图片大小及类别 */
  Key: string | null;
  /** station图片地址 */
  Value: string | null;
}

/** 歌曲信息 */
declare interface Item {
  /** Song ID */
  ItemID: string;
  /** Song info */
  DataInfo: DataInfo | null;
  /** 专辑信息 */
  Album: Album | null;
  /** 多个歌手集合 */
  Artists: Artist[] | null;
  /** 歌曲状态，1:添加进购物车；2:核销进曲库包 */
  Status: number | null;
}

/** 直播进房输入参数 */
declare interface JoinRoomInput {
  /** TRTC进房参数 */
  TRTCJoinRoomInput?: TRTCJoinRoomInput;
}

/** KTV 曲目基础信息 */
declare interface KTVMusicBaseInfo {
  /** 歌曲 Id */
  MusicId: string;
  /** 歌曲名称 */
  Name: string;
  /** 演唱者基础信息列表 */
  SingerInfoSet: KTVSingerBaseInfo[];
  /** 已弃用，请使用SingerInfoSet */
  SingerSet: string[];
  /** 作词者列表 */
  LyricistSet: string[];
  /** 作曲者列表 */
  ComposerSet: string[];
  /** 标签列表 */
  TagSet: string[];
  /** 歌曲时长 */
  Duration: number;
}

/** 直播互动歌曲规格信息。 */
declare interface KTVMusicDefinitionInfo {
  /** 规格，取值有：audio/mi：低规格；audio/lo：中规格；audio/hi：高规格。 */
  Definition: string;
  /** 码率，单位为 bps。 */
  Bitrate: number;
  /** 文件大小，单位为字节。 */
  Size: number;
}

/** 即使广播曲库歌曲信息详情列表 */
declare interface KTVMusicDetailInfo {
  /** 即使广播曲库歌曲基础信息 */
  KTVMusicBaseInfo: KTVMusicBaseInfo;
  /** 播放凭证 */
  PlayToken: string;
  /** 歌词下载地址 */
  LyricsUrl: string;
  /** 歌曲规格信息列表 */
  DefinitionInfoSet: KTVMusicDefinitionInfo[];
  /** 音高数据文件下载地址 */
  MidiJsonUrl: string;
  /** 副歌片段数据列表 */
  ChorusClipSet: ChorusClip[];
  /** 前奏间隔，单位：毫秒；注：若参数返回为0则无人声部分 */
  PreludeInterval: number;
}

/** 即使广播曲库歌曲标签分组信息 */
declare interface KTVMusicTagGroup {
  /** 标签分组英文名 */
  EnglishGroupName: string;
  /** 标签分组中文名 */
  ChineseGroupName: string;
  /** 标签分类下标签列表 */
  TagSet: KTVMusicTagInfo[];
}

/** 即使广播曲库歌曲标签信息 */
declare interface KTVMusicTagInfo {
  /** 标签Id */
  TagId: string;
  /** 标签 */
  TagName: string;
}

/** 排行榜结构 */
declare interface KTVMusicTopInfo {
  /** 歌曲Id */
  MusicId: string;
  /** 歌曲名称 */
  Name: string;
  /** 歌手名称列表 */
  SingerInfoSet: KTVSingerBaseInfo[];
  /** 歌词名称列表 */
  LyricistSet: string[];
  /** 作曲列表 */
  ComposerSet: string[];
  /** 标签列表 */
  TagSet: string[];
  /** 播放时长 */
  Duration: number;
}

/** 推荐歌单基础信息 */
declare interface KTVPlaylistBaseInfo {
  /** 歌单Id */
  PlaylistId: string;
  /** 歌单标题 */
  Title: string;
  /** 歌单介绍 */
  Description: string;
  /** 歌曲数量 */
  MusicNum: number;
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
  /** 音量，范围 0~100，默认为 50。 */
  SetVolumeInput: SetVolumeCommandInput;
}

/** KTV 歌手基础信息 */
declare interface KTVSingerBaseInfo {
  /** 歌手id */
  SingerId: string;
  /** 歌手名 */
  Name: string;
}

/** KTV歌手分类信息 */
declare interface KTVSingerCategoryInfo {
  /** 分类中文名 */
  ChineseName: string;
  /** 分类英文名 */
  EnglishName: string;
}

/** 直播互动歌曲的歌手信息。 */
declare interface KTVSingerInfo {
  /** 歌手id */
  SingerId: string;
  /** 歌手名 */
  Name: string;
  /** 歌手性别: 男，女，组合 */
  Gender: string;
  /** 地区: 大陆，港台，欧美，日本 */
  Area: string;
  /** 歌曲数 */
  MusicCount: number;
  /** 歌曲总播放次数 */
  PlayCount: number;
}

/** 即使广播曲库联想词信息 */
declare interface KTVSuggestionInfo {
  /** 联想词 */
  Suggestion: string;
}

/** 歌词信息 */
declare interface Lyric {
  /** 歌词cdn地址 */
  Url: string;
  /** 歌词后缀名 */
  FileNameExt: string;
  /** 歌词类型 */
  SubItemType: string;
}

/** 音乐详情 */
declare interface Music {
  /** 音乐播放链接相对路径，必须通过在正版曲库直通车控制台上登记的域名进行拼接。 */
  Url: string;
  /** 音频文件大小 */
  FileSize: number;
  /** 音频文件类型 */
  FileExtension: string;
  /** Song fragment start.试听片段开始时间，试听时长为auditionEnd-auditionBeginUnit :ms */
  AuditionBegin: number;
  /** Song fragment end.试听片段结束时间, 试听时长为auditionEnd-auditionBeginUnit :ms */
  AuditionEnd: number;
  /** 音乐播放链接全路径，前提是在正版曲库直通车控制台添加过域名，否则返回空字符。如果添加过多个域名只返回第一个添加域名的播放全路径。 */
  FullUrl: string;
}

/** 歌曲变更细节 */
declare interface MusicDetailInfo {
  /** 资源方音乐Id */
  MusicId: string;
  /** 资源方识别信息 */
  AmeId: string;
  /** 分类标签 */
  Tags?: string[];
  /** 关键词 */
  HitWords?: string[];
  /** 节奏信息 */
  Bpm?: number;
  /** 商业化权益 */
  Score?: number;
  /** 应用歌曲信息,1.图文/短视频,2.网络直播,3.网络电台FM,4.免费游戏,5.商业游戏,6.网店网站设计,7.广告营销,8.网络长视频 */
  Scene?: string[];
  /** 应用地域,1. 中国大陆,2. 中国含港澳台,3. 全球 */
  Region?: string[];
  /** 授权时间,1. 1年, 5. 随片永久 */
  AuthPeriod?: string;
  /** 商业化授权，1. 支持商业化 ,2. 不支持商业化 */
  Commercialization?: string;
  /** 跨平台传播，1. 支持跨平台传播 ,2. 不支持跨平台传播 */
  Platform?: string;
  /** 传播渠道 */
  Channel?: string;
}

/** 对外开放信息 */
declare interface MusicOpenDetail {
  /** 音乐Id */
  MusicId: string | null;
  /** 专辑名称 */
  AlbumName: string | null;
  /** 专辑图片路径 */
  AlbumImageUrl: string | null;
  /** 音乐名称 */
  MusicName: string | null;
  /** 音乐图片路径 */
  MusicImageUrl: string | null;
  /** 歌手 */
  Singers: string[] | null;
  /** 播放时长 */
  Duration: number | null;
  /** 标签 */
  Tags: string[] | null;
  /** 歌词url */
  LyricUrl: string | null;
  /** 波形图url */
  WaveformUrl: string | null;
}

/** 返回单曲页面歌曲是否在售状态 */
declare interface MusicStatus {
  /** 歌曲Id */
  MusicId: string;
  /** 在售状态,0为在售，1为临时下架，2为永久下架 */
  SaleStatus: number;
}

/** 曲库包已下架歌曲详细信息 */
declare interface OfflineMusicDetail {
  /** 歌曲Id */
  ItemId: string;
  /** 歌曲名称 */
  MusicName: string;
  /** 不可用原因 */
  OffRemark: string;
  /** 不可用时间 */
  OffTime: string;
}

/** 曲库包信息 */
declare interface Package {
  /** 订单id */
  OrderId: string;
  /** 曲库包名称 */
  Name: string;
  /** 授权地区-global: 全球 CN: 中国 */
  AuthorizedArea: string;
  /** 授权次数 */
  AuthorizedLimit: number;
  /** 套餐有效期，单位:天 */
  TermOfValidity: number;
  /** 0:不可商业化；1:可商业化 */
  Commercial: number;
  /** 套餐价格，单位：元 */
  PackagePrice: number;
  /** 生效开始时间,格式yyyy-MM-dd HH:mm:ss */
  EffectTime: string;
  /** 生效结束时间,格式yyyy-MM-dd HH:mm:ss */
  ExpireTime: string;
  /** 剩余授权次数 */
  UsedCount: number;
  /** 曲库包用途信息 */
  UseRanges: UseRange[];
}

/** 曲库包歌曲信息 */
declare interface PackageItem {
  /** 订单id */
  OrderId: string;
  /** 歌曲名 */
  TrackName: string;
  /** 歌曲ID */
  ItemID: string;
  /** 专辑图片 */
  Img: string;
  /** 歌手名 */
  ArtistName: string;
  /** 歌曲时长 */
  Duration: string;
  /** 授权区域，global: 全球 CN: 中国 */
  AuthorizedArea: string;
  /** 标签数组 */
  Tags: string[];
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
  /** 规格，取值有：audio/mi：低规格audio/lo：中规格audio/hi：高规格 */
  Definition?: string;
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
  /** 歌曲 ID 列表，当 Type 取 Add 时，与MusicURLs必填其中一项。 */
  MusicIds?: string[];
  /** 歌曲 URL 列表，当 Type 取 Add 时，与MusicIds必填其中一项。注：URL必须以.mp3结尾且必须是mp3编码文件。 */
  MusicURLs?: string[];
}

/** 设置音量。 */
declare interface SetVolumeCommandInput {
  /** 音量大小，取值范围为 0~100，默认值为 50。 */
  Volume: number;
}

/** 排序依据 */
declare interface SortBy {
  /** 排序字段 */
  Field: string;
  /** 排序方式，可选值：Asc（升序）、Desc（降序） */
  Order: string;
}

/** 分类内容 */
declare interface Station {
  /** StationID */
  CategoryID: string;
  /** Station MCCode */
  CategoryCode: string | null;
  /** Category Name */
  Name: string | null;
  /** Station的排序值，供参考（返回结果已按其升序） */
  Rank: number | null;
  /** station图片集合 */
  ImagePathMap: ImagePath[] | null;
}

/** KTV 机器人初始化参数，在创建后自动完成相关初始化工作。 */
declare interface SyncRobotCommand {
  /** 可同时传入多个指令，顺序执行。取值有：Play：播放Pause：暂停SwitchPrevious：上一首SwitchNext：下一首SetPlayMode：设置播放模式Seek：调整播放进度SetPlaylist：歌单变更SetAudioParam：音频参数变更SendMessage：发送自定义消息SetDestroyMode：设置销毁模式SetVolume：设置音量 */
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
  /** 音量，当Command取SetVolume时，必填。 */
  SetVolumeCommandInput?: SetVolumeCommandInput;
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
  /** 进房钥匙，若需要权限控制请携带该参数。 [privateMapKey 权限设置](/document/product/647/32240) */
  PrivateMapKey?: string;
  /** 用户角色，目前支持两种角色：anchor：主播audience：观众 */
  Role?: string;
}

/** 下架歌曲复合结构 */
declare interface TakeMusicOffShelves {
  /** 资源方对应音乐Id */
  MusicIds: string;
  /** 当曲目临时下架时：已订购客户无影响，无需消息通知。当曲目封杀下架后，推送消息至已订购老客户，枚举值，判断是否上/下架在售状态，0在售，1临时下架，2永久下架 */
  SaleStatus: string;
}

/** 时间范围 */
declare interface TimeRange {
  /** 大于等于此时间（起始时间）。格式按照 ISO 8601标准表示，详见 ISO 日期格式说明。 */
  Before?: string;
  /** 小于此时间（结束时间）。格式按照 ISO 8601标准表示，详见 ISO 日期格式说明。 */
  After?: string;
}

/** 曲库包用途信息 */
declare interface UseRange {
  /** 用途id */
  UseRangeId: number;
  /** 用途范围名称 */
  Name: string;
}

declare interface BatchDescribeKTVMusicDetailsRequest {
  /** 歌曲Id列表，注：列表最大长度为50 */
  MusicIds: string[];
}

declare interface BatchDescribeKTVMusicDetailsResponse {
  /** 歌曲详情列表信息 */
  KTVMusicDetailInfoSet: KTVMusicDetailInfo[];
  /** 不存在的歌曲 ID 列表。 */
  NotExistMusicIdSet: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKTVRobotRequest {
  /** RTC厂商类型，取值有：TRTC */
  RTCSystem: string;
  /** 进房参数。 */
  JoinRoomInput: JoinRoomInput;
  /** license基础信息 */
  ApplicationLicenseInput?: ApplicationLicenseInput;
  /** 创建机器人时初始化参数。 */
  SyncRobotCommands?: SyncRobotCommand[];
}

declare interface CreateKTVRobotResponse {
  /** 机器人Id。 */
  RobotId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuthInfoRequest {
  /** 偏移量：Offset=Offset+Limit */
  Offset?: number;
  /** 数据条数 */
  Limit?: number;
  /** 搜索关键字 */
  Key?: string;
}

declare interface DescribeAuthInfoResponse {
  /** 授权项目列表 */
  AuthInfo?: AuthInfo[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudMusicPurchasedRequest {
  /** 授权项目Id */
  AuthInfoId: string;
}

declare interface DescribeCloudMusicPurchasedResponse {
  /** 云音乐列表 */
  MusicOpenDetail: MusicOpenDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudMusicRequest {
  /** 歌曲Id */
  MusicId: string;
  /** 歌曲类型，可选值有：MP3-128K-FTW：含有水印的试听资源；MP3-320K-FTD-P：320kbps歌曲热门片段；MP3-320K-FTD：320kbps已核验歌曲完整资源。默认为：MP3-128K-FTW */
  MusicType?: string;
}

declare interface DescribeCloudMusicResponse {
  /** 歌曲Id */
  MusicId: string;
  /** 歌曲名称 */
  MusicName: string;
  /** 歌曲时长 */
  Duration: number | null;
  /** 歌曲链接 */
  MusicUrl: string;
  /** 歌曲图片 */
  MusicImageUrl: string | null;
  /** 歌手列表 */
  Singers: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeItemByIdRequest {
  /** 歌曲ID，目前暂不支持批量查询 */
  ItemIDs: string;
}

declare interface DescribeItemByIdResponse {
  /** 歌曲信息 */
  Items?: Item[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeItemsRequest {
  /** offset (Default = 0)，(当前页-1) * Limit */
  Offset: number;
  /** 条数，必须大于0，最大值为30 */
  Limit: number;
  /** （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从获取分类内容（Station）列表接口中获取。 */
  CategoryId?: string;
  /** （电台/歌单）ID，CategoryId和CategoryCode两个必传1个，可以从获取分类内容（Station）列表接口中获取。 */
  CategoryCode?: string;
}

declare interface DescribeItemsResponse {
  /** 分页偏移量 */
  Offset?: number;
  /** 当前页歌曲数量 */
  Size?: number;
  /** 总数据条数 */
  Total?: number;
  /** 剩余数量（total-offset-size），通过这个值判断是否还有下一页 */
  HaveMore?: number;
  /** Items 歌曲列表 */
  Items?: Item[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVMusicDetailRequest {
  /** 曲目 Id */
  MusicId: string;
}

declare interface DescribeKTVMusicDetailResponse {
  /** 歌曲基础信息 */
  KTVMusicBaseInfo: KTVMusicBaseInfo;
  /** 播放凭证 */
  PlayToken: string;
  /** 歌词下载地址 */
  LyricsUrl: string;
  /** 歌曲规格信息列表 */
  DefinitionInfoSet: KTVMusicDefinitionInfo[];
  /** 音高数据文件下载地址 */
  MidiJsonUrl: string;
  /** 副歌片段数据列表 */
  ChorusClipSet: ChorusClip[];
  /** 前奏间隔，单位：毫秒；注：若参数返回为0则无人声部分 */
  PreludeInterval: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVMusicTagsRequest {
}

declare interface DescribeKTVMusicTagsResponse {
  /** 标签分组列表 */
  TagGroupSet: KTVMusicTagGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVPlaylistDetailRequest {
  /** 歌单Id */
  PlaylistId: string;
  /** 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。 */
  Offset?: number;
  /** 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。 */
  Limit?: number;
}

declare interface DescribeKTVPlaylistDetailResponse {
  /** 歌曲基础信息列表 */
  KTVMusicInfoSet: KTVMusicBaseInfo[];
  /** 歌单基础信息 */
  PlaylistBaseInfo: KTVPlaylistBaseInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVPlaylistsRequest {
  /** 歌单类型，取值有：·OfficialRec：官方推荐·Normal：自定义当该字段未填时，默认为取OfficialRec */
  Type?: string;
  /** 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。取值范围：Offset + Limit 不超过5000 */
  Offset?: number;
  /** 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。取值范围：Offset + Limit 不超过5000 */
  Limit?: number;
}

declare interface DescribeKTVPlaylistsResponse {
  /** 推荐歌单列表 */
  PlaylistBaseInfoSet: KTVPlaylistBaseInfo[];
  /** 推荐歌单列表总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVRobotsRequest {
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

declare interface DescribeKTVSingerCategoriesRequest {
}

declare interface DescribeKTVSingerCategoriesResponse {
  /** 歌手性别分类列表 */
  GenderSet: KTVSingerCategoryInfo[];
  /** 歌手区域分类列表 */
  AreaSet: KTVSingerCategoryInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVSingerMusicsRequest {
  /** 歌手id */
  SingerId: string;
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。 */
  Limit?: number;
}

declare interface DescribeKTVSingerMusicsResponse {
  /** 总曲目数 */
  TotalCount: number;
  /** KTV 曲目列表 */
  KTVMusicInfoSet: KTVMusicBaseInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVSingersRequest {
  /** 歌手id集合，精确匹配歌手id 数组长度限制10 */
  SingerIds?: string[];
  /** 歌手性别集合，不传为全部，精确匹配歌手性别类型，数组长度限制1取值范围：直播互动曲库歌手分类信息接口，返回性别分类信息列表中，分类英文名 */
  Genders?: string[];
  /** 歌手区域集合，不传为全部，精确匹配歌手区域数组长度限制10取值范围：直播互动曲库歌手分类信息接口，返回的区域分类信息列表中，分类英文名 */
  Areas?: string[];
  /** 排序方式。默认按照播放数倒序 Sort.Field 可选 PlayCount。 */
  Sort?: SortBy;
  /** 分页偏移量，默认值：0。 */
  Offset?: number;
  /** 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。 */
  Limit?: number;
}

declare interface DescribeKTVSingersResponse {
  /** 总歌手数 */
  TotalCount: number;
  /** KTV歌手列表 */
  KTVSingerInfoSet: KTVSingerInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVSuggestionsRequest {
  /** 联想关键词 */
  KeyWord: string;
}

declare interface DescribeKTVSuggestionsResponse {
  /** 联想词信息列表。返回总数最大为10。 */
  KTVSuggestionInfoSet: KTVSuggestionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKTVTopListRequest {
  /** 榜单类型。默认Hot Hot, 热歌榜。 */
  Type?: string;
  /** 榜单周期 默认为Week Week, 周榜。 Month, 月榜。 */
  Period?: string;
}

declare interface DescribeKTVTopListResponse {
  /** 歌曲基础信息列表 */
  KTVMusicTopInfoSet: KTVMusicTopInfo[];
  /** 返回总条数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLyricRequest {
  /** 歌曲ID */
  ItemId: string;
  /** 格式，可选项，可不填写，默认值为：LRC-LRC。LRC-LRC：歌词；JSON-ST：波形图。 */
  SubItemType?: string;
}

declare interface DescribeLyricResponse {
  /** 歌词或者波形图详情 */
  Lyric: Lyric | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMusicRequest {
  /** 歌曲ID */
  ItemId: string;
  /** 在应用前端播放音乐C端用户的唯一标识。无需是账户信息，用户唯一标识即可。 */
  IdentityId: string;
  /** MP3-320K-FTD-P 为获取320kbps歌曲热门片段。MP3-320K-FTD 为获取320kbps已核验歌曲完整资源。 */
  SubItemType?: string;
  /** CDN URL Protocol:HTTP or HTTPS/SSLValues:Y , N(default) */
  Ssl?: string;
}

declare interface DescribeMusicResponse {
  /** 音乐相关信息 */
  Music: Music | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMusicSaleStatusRequest {
  /** 歌曲Id集合，可传单个，也可传多个，上线查询单次50个 */
  MusicIds: string[];
  /** 查询哪个渠道的数据，1为曲库包，2为单曲 */
  PurchaseType: number;
}

declare interface DescribeMusicSaleStatusResponse {
  /** musicId对应歌曲状态 */
  MusicStatusSet: MusicStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackageItemsRequest {
  /** 订单id，从获取已购曲库包列表中获取 */
  OrderId: string;
  /** 默认0，Offset=Offset+Length */
  Offset?: number;
  /** 默认20 */
  Length?: number;
}

declare interface DescribePackageItemsResponse {
  /** 已核销歌曲信息列表 */
  PackageItems?: PackageItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackagesRequest {
  /** 默认0，Offset=Offset+Length */
  Offset?: number;
  /** 默认20 */
  Length?: number;
}

declare interface DescribePackagesResponse {
  /** 已购曲库包列表 */
  Packages?: Package[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePkgOfflineMusicRequest {
  /** 订单id */
  PackageOrderId: string;
  /** 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条(注：单次上限为100)。 */
  Limit?: number;
  /** 分页返回的记录条数，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。 */
  Offset?: number;
}

declare interface DescribePkgOfflineMusicResponse {
  /** 曲库包中不可用歌曲信息 */
  OfflineMusicSet: OfflineMusicDetail[];
  /** 返回总量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStationsRequest {
  /** 条数，必须大于0 */
  Limit: number;
  /** offset (Default = 0)，Offset=Offset+Limit */
  Offset: number;
}

declare interface DescribeStationsResponse {
  /** 总数量 */
  Total?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 当前页station数量 */
  Size?: number;
  /** 剩余数量（total-offset-size），通过这个值判断是否还有下一页 */
  HaveMore?: number;
  /** Stations 素材库列表 */
  Stations?: Station[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyKTVRobotRequest {
  /** 机器人Id。 */
  RobotId: string;
}

declare interface DestroyKTVRobotResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMusicOnShelvesRequest {
  /** 歌曲变更信息 */
  MusicDetailInfos: MusicDetailInfo;
  /** ame对接资源方密钥 */
  AmeKey?: string;
}

declare interface ModifyMusicOnShelvesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PutMusicOnTheShelvesRequest {
  /** 资源方歌曲Id */
  MusicIds: string[];
}

declare interface PutMusicOnTheShelvesResponse {
  /** 操作成功数量 */
  SuccessNum: number;
  /** 操作失败数量 */
  FailedNum: number;
  /** 失败歌曲Id */
  FailedMusicIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportDataRequest {
  /** 上报数据注:reportData为客户端压缩后的上报数据进行16进制转换的字符串数据压缩说明：a) 上报的json格式字符串通过流的转换（ByteArrayInputStream, java.util.zip.GZIPOutputStream），获取到压缩后的字节数组。b) 将压缩后的字节数组转成16进制字符串。reportData由两部分数据组成：1）report_type（上报类型）2）data（歌曲上报数据）不同的report_type对应的data数据结构不一样。详细说明请参考文档reportdata.docx：https://github.com/tencentyun/ame-documents */
  ReportData: string;
}

declare interface ReportDataResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchKTVMusicsRequest {
  /** 搜索关键词 */
  KeyWord: string;
  /** 分页返回的起始偏移量，默认值：0。将返回第 Offset 到第 Offset+Limit-1 条。取值范围：Offset + Limit 不超过5000。 */
  Offset: number;
  /** 分页返回的起始偏移量，默认值：50。将返回第 Offset 到第 Offset+Limit-1 条。 */
  Limit: number;
  /** 排序方式。默认按照匹配度排序 Sort.Field 可选 CreateTime Sort.Order 可选 Desc 当 KeyWord 不为空时，Sort.Field 字段无效， 搜索结果将以匹配度排序。 */
  Sort?: SortBy;
  /** 标签 ID 集合，匹配集合指定所有 ID 。数组长度限制：10。 */
  TagIds?: string[];
}

declare interface SearchKTVMusicsResponse {
  /** 总记录数 */
  TotalCount: number;
  /** KTV 曲目列表 */
  KTVMusicInfoSet: KTVMusicBaseInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncKTVRobotCommandRequest {
  /** 机器人Id。 */
  RobotId: string;
  /** 指令，取值有：Play：播放Pause：暂停SwitchPrevious：上一首SwitchNext：下一首SetPlayMode：设置播放模式Seek：调整播放进度SetPlaylist：歌单变更SetAudioParam：音频参数变更SendMessage：发送自定义消息SetDestroyMode：设置销毁模式SetVolume：设置音量 */
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
  /** 音量，当Command取SetVolume时，必填。 */
  SetVolumeCommandInput?: SetVolumeCommandInput;
}

declare interface SyncKTVRobotCommandResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TakeMusicOffShelvesRequest {
  /** 资源方下架必传结构 */
  TakeMusicOffShelves: TakeMusicOffShelves[];
}

declare interface TakeMusicOffShelvesResponse {
  /** 返回成功数量 */
  SuccessNum: number;
  /** 返回失败数量 */
  FailedNum: number;
  /** 返回失败歌曲musicId */
  FailedMusicIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ame 正版曲库直通车} */
declare interface Ame {
  (): Versions;
  /** 批量获取直播互动曲目详情 {@link BatchDescribeKTVMusicDetailsRequest} {@link BatchDescribeKTVMusicDetailsResponse} */
  BatchDescribeKTVMusicDetails(data: BatchDescribeKTVMusicDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDescribeKTVMusicDetailsResponse>;
  /** 创建直播互动机器人 {@link CreateKTVRobotRequest} {@link CreateKTVRobotResponse} */
  CreateKTVRobot(data: CreateKTVRobotRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKTVRobotResponse>;
  /** 获取授权项目列表 {@link DescribeAuthInfoRequest} {@link DescribeAuthInfoResponse} */
  DescribeAuthInfo(data?: DescribeAuthInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuthInfoResponse>;
  /** 获取云音乐播放信息 {@link DescribeCloudMusicRequest} {@link DescribeCloudMusicResponse} */
  DescribeCloudMusic(data: DescribeCloudMusicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudMusicResponse>;
  /** 获取授权项目已购云音乐列表 {@link DescribeCloudMusicPurchasedRequest} {@link DescribeCloudMusicPurchasedResponse} */
  DescribeCloudMusicPurchased(data: DescribeCloudMusicPurchasedRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudMusicPurchasedResponse>;
  /** 根据歌曲ID查询歌曲信息 {@link DescribeItemByIdRequest} {@link DescribeItemByIdResponse} */
  DescribeItemById(data: DescribeItemByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeItemByIdResponse>;
  /** 获取分类内容下歌曲列表 {@link DescribeItemsRequest} {@link DescribeItemsResponse} */
  DescribeItems(data: DescribeItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeItemsResponse>;
  /** 获取直播互动曲目详情 {@link DescribeKTVMusicDetailRequest} {@link DescribeKTVMusicDetailResponse} */
  DescribeKTVMusicDetail(data: DescribeKTVMusicDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVMusicDetailResponse>;
  /** 获取直播互动曲库标签信息 {@link DescribeKTVMusicTagsRequest} {@link DescribeKTVMusicTagsResponse} */
  DescribeKTVMusicTags(data?: DescribeKTVMusicTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVMusicTagsResponse>;
  /** 获取直播互动曲库推荐歌单详情 {@link DescribeKTVPlaylistDetailRequest} {@link DescribeKTVPlaylistDetailResponse} */
  DescribeKTVPlaylistDetail(data: DescribeKTVPlaylistDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVPlaylistDetailResponse>;
  /** 获取直播互动曲库推荐歌单列表 {@link DescribeKTVPlaylistsRequest} {@link DescribeKTVPlaylistsResponse} */
  DescribeKTVPlaylists(data?: DescribeKTVPlaylistsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVPlaylistsResponse>;
  /** 获取直播互动机器人信息 {@link DescribeKTVRobotsRequest} {@link DescribeKTVRobotsResponse} */
  DescribeKTVRobots(data?: DescribeKTVRobotsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVRobotsResponse>;
  /** 获取直播互动曲库歌手分类信息 {@link DescribeKTVSingerCategoriesRequest} {@link DescribeKTVSingerCategoriesResponse} */
  DescribeKTVSingerCategories(data?: DescribeKTVSingerCategoriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVSingerCategoriesResponse>;
  /** 获取歌手下歌曲列表 {@link DescribeKTVSingerMusicsRequest} {@link DescribeKTVSingerMusicsResponse} */
  DescribeKTVSingerMusics(data: DescribeKTVSingerMusicsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVSingerMusicsResponse>;
  /** 获取直播互动曲库歌手 {@link DescribeKTVSingersRequest} {@link DescribeKTVSingersResponse} */
  DescribeKTVSingers(data?: DescribeKTVSingersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVSingersResponse>;
  /** 获取直播互动曲库联想词 {@link DescribeKTVSuggestionsRequest} {@link DescribeKTVSuggestionsResponse} */
  DescribeKTVSuggestions(data: DescribeKTVSuggestionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVSuggestionsResponse>;
  /** 获取直播互动曲库歌曲排行榜 {@link DescribeKTVTopListRequest} {@link DescribeKTVTopListResponse} */
  DescribeKTVTopList(data?: DescribeKTVTopListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKTVTopListResponse>;
  /** 获取歌词信息 {@link DescribeLyricRequest} {@link DescribeLyricResponse} */
  DescribeLyric(data: DescribeLyricRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLyricResponse>;
  /** 获取曲库包歌曲播放信息 {@link DescribeMusicRequest} {@link DescribeMusicResponse} */
  DescribeMusic(data: DescribeMusicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMusicResponse>;
  /** 查询歌曲在售状态 {@link DescribeMusicSaleStatusRequest} {@link DescribeMusicSaleStatusResponse} */
  DescribeMusicSaleStatus(data: DescribeMusicSaleStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMusicSaleStatusResponse>;
  /** 获取曲库包已核销歌曲列表 {@link DescribePackageItemsRequest} {@link DescribePackageItemsResponse} */
  DescribePackageItems(data: DescribePackageItemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackageItemsResponse>;
  /** 获取已购曲库包列表 {@link DescribePackagesRequest} {@link DescribePackagesResponse} */
  DescribePackages(data?: DescribePackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackagesResponse>;
  /** 曲库包获取已核销歌曲回退数据 {@link DescribePkgOfflineMusicRequest} {@link DescribePkgOfflineMusicResponse} */
  DescribePkgOfflineMusic(data: DescribePkgOfflineMusicRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePkgOfflineMusicResponse>;
  /** 获取分类内容（Station）列表 {@link DescribeStationsRequest} {@link DescribeStationsResponse} */
  DescribeStations(data: DescribeStationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStationsResponse>;
  /** 销毁直播互动机器人 {@link DestroyKTVRobotRequest} {@link DestroyKTVRobotResponse} */
  DestroyKTVRobot(data: DestroyKTVRobotRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyKTVRobotResponse>;
  /** 变更歌曲参数 {@link ModifyMusicOnShelvesRequest} {@link ModifyMusicOnShelvesResponse} */
  ModifyMusicOnShelves(data: ModifyMusicOnShelvesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMusicOnShelvesResponse>;
  /** 上架歌曲 {@link PutMusicOnTheShelvesRequest} {@link PutMusicOnTheShelvesResponse} */
  PutMusicOnTheShelves(data: PutMusicOnTheShelvesRequest, config?: AxiosRequestConfig): AxiosPromise<PutMusicOnTheShelvesResponse>;
  /** 上报歌曲播放数据 {@link ReportDataRequest} {@link ReportDataResponse} */
  ReportData(data: ReportDataRequest, config?: AxiosRequestConfig): AxiosPromise<ReportDataResponse>;
  /** 搜索直播互动曲库歌曲 {@link SearchKTVMusicsRequest} {@link SearchKTVMusicsResponse} */
  SearchKTVMusics(data: SearchKTVMusicsRequest, config?: AxiosRequestConfig): AxiosPromise<SearchKTVMusicsResponse>;
  /** 同步直播互动机器人指令 {@link SyncKTVRobotCommandRequest} {@link SyncKTVRobotCommandResponse} */
  SyncKTVRobotCommand(data: SyncKTVRobotCommandRequest, config?: AxiosRequestConfig): AxiosPromise<SyncKTVRobotCommandResponse>;
  /** 下架歌曲 {@link TakeMusicOffShelvesRequest} {@link TakeMusicOffShelvesResponse} */
  TakeMusicOffShelves(data: TakeMusicOffShelvesRequest, config?: AxiosRequestConfig): AxiosPromise<TakeMusicOffShelvesResponse>;
}

export declare type Versions = ["2019-09-16"];

export default Ame;
