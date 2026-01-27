/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 云端录制文件上传到云存储的参数（对象存储cos） */
declare interface CloudStorage {
  /** 腾讯云对象存储COS以及第三方云存储账号信息0：腾讯云对象存储 COS1：AWS【注意】目前第三方云存储仅支持AWS，更多第三方云存储陆续支持中示例值：0 */
  Vendor: number;
  /** 腾讯云对象存储的[地域信息]（https://cloud.tencent.com/document/product/436/6224) */
  Region: string;
  /** 云存储桶名称。 */
  Bucket: string;
  /** 云存储的access_key账号信息。若存储至腾讯云对象存储COS，请前往https://console.cloud.tencent.com/cam/capi 查看或创建，对应链接中密钥字段的SecretId值。 */
  AccessKey: string;
  /** 云存储的secret_key账号信息。若存储至腾讯云对象存储COS，请前往https://console.cloud.tencent.com/cam/capi 查看或创建，对应链接中密钥字段的SecretKey值。 */
  SecretKey: string;
  /** 云存储bucket 的指定位置，由字符串数组组成。合法的字符串范围az,AZ,0~9,'_'和'-'，举个例子，录制文件xxx.m3u8在 ["prefix1", "prefix2"]作用下，会变成prefix1/prefix2/TaskId/xxx.m3u8。 */
  FileNamePrefix?: string[];
}

/** 查询用户设备的授权绑定情况 */
declare interface Device {
  /** 设备ID */
  DeviceId?: string;
  /** 设备名称 */
  DeviceName?: string;
  /** 已经绑定license数量 */
  LicenseCount?: number;
  /** 剩余天数：天 */
  RemainDay?: number;
  /** 过期时间：s */
  ExpireTime?: string;
  /** 服务时长：s */
  Duration?: string;
  /** 已经绑定licenseId列表 */
  LicenseIds?: string[];
  /** 每月license的限定时长 */
  MonthlyRemainTime?: number;
  /** 月封顶时长（分钟) */
  LimitedTime?: number;
}

/** 设备信息 */
declare interface DeviceInfo {
  /** 设备ID */
  DeviceId: string;
  /** 设备名称 */
  DeviceName: string;
  /** 设备状态，offline为离线，ready为在线准备，connected为会话中 */
  DeviceStatus: string;
  /** 设备类型，field为现场设备（受控方），remote为远端设备（操控方） */
  DeviceType: string;
  /** 设备信息最近修改时间 */
  ModifyTime: string;
  /** 设备状态最近更新时间 */
  LastReportTime: string;
  /** 设备所属项目Id */
  ProjectId: string;
}

/** 会话时长明细 */
declare interface DurationDetails {
  /** 会话时间 */
  SessionTime?: string;
  /** 语音:min */
  Voice?: number;
  /** 标清:min */
  SD?: number;
  /** 高清:min */
  HD?: number;
  /** 超高清:min */
  FHD?: number;
  /** 2k:min */
  TwoK?: number;
  /** 4k:min */
  FourK?: number;
  /** 在线时长:min */
  Online?: number;
  /** 多网标清:min */
  MultiSD?: number;
  /** 多网高清:min */
  MultiHD?: number;
  /** 多网超高清:min */
  MultiFHD?: number;
  /** 多网2k:min */
  MultiTwoK?: number;
  /** 多网4k:min */
  MultiFourK?: number;
  /** 多网在线时长:min */
  MultiOnline?: number;
  /** 抵扣时长:min */
  DeductDuration?: number;
}

/** 按授权查看的license列表 */
declare interface License {
  /** 该类型的license个数 */
  Count?: number;
  /** license状态：0:未绑定；1:已绑定；2:已停服；3:已退费 */
  Status?: number;
  /** 到期时间戳：s */
  ExpireTime?: string;
  /** 服务时长：s */
  Duration?: string;
  /** 剩余天数：天 */
  RemainDay?: number;
  /** 该类型的licenseId列表 */
  LicenseIds?: string[];
}

/** 多网的网卡状态信息 */
declare interface MultiNet {
  /** 网卡序号 */
  NetId?: number;
  /** 网卡IP */
  NetIp?: string;
  /** 时延，单位ms */
  Rtt?: number[];
  /** 丢包率，单位% */
  Lost?: number[];
  /** 发送bps，单位kbps */
  SendBps?: number[];
  /** 接收bps，单位kbps */
  RecvBps?: number[];
}

/** 权限信息 */
declare interface PolicyInfo {
  /** 远端设备ID */
  RemoteDeviceId: string;
  /** 关联的现场设备ID */
  FieldDeviceIds: string[];
  /** 最近添加时间 */
  ModifyTime: string;
}

/** 项目信息 */
declare interface ProjectInfo {
  /** 项目ID */
  ProjectId?: string;
  /** 项目名称 */
  ProjectName?: string;
  /** 项目描述 */
  ProjectDescription?: string;
  /** 项目权限模式，black为黑名单，white为白名单 */
  PolicyMode?: string;
  /** 项目信息修改时间 */
  ModifyTime?: string;
}

/** 转推参数，一个任务最多支持10个推流URL。 */
declare interface PublishParams {
  /** 腾讯云直播推流地址url */
  PublishUrl: string;
  /** 是否是腾讯云CDN，0为转推非腾讯云CDN，1为转推腾讯CDN，不携带该参数默认为1。 */
  IsTencentUrl: number;
}

/** 最新会话信息 */
declare interface RecentSessionInfo {
  /** 会话ID */
  SessionId?: string;
  /** 远端设备ID */
  RemoteDeviceId?: string;
  /** 现场设备ID */
  FieldDeviceId?: string;
  /** 分辨率 */
  Resolution?: string;
  /** 会话开始时间 */
  StartTime?: number;
  /** 最后更新时间 */
  LatestUpdateTime?: number;
}

/** 会话数据详单（按设备区分） */
declare interface SessionDeviceDetail {
  /** 设备类型：field或remote */
  DeviceType?: string;
  /** 起始点位时间，单位：秒 */
  StartTime?: number;
  /** 结束点位时间，单位：秒 */
  EndTime?: number;
  /** 会话ID */
  SessionId?: string;
  /** 码率，单位：kbps */
  Rate?: number[];
  /** 帧率 */
  Fps?: number[];
  /** 丢包率，单位：% */
  Lost?: number[];
  /** 网络时延，单位：ms */
  NetworkLatency?: number[];
  /** 视频时延，单位：ms */
  VideoLatency?: number[];
  /** CPU使用率，单位：% */
  CpuUsed?: number[];
  /** 内存使用率，单位：% */
  MemUsed?: number[];
  /** 时间偏移量，单位：秒 */
  TimeOffset?: number[];
  /** 项目ID */
  ProjectId?: string;
  /** 设备ID */
  DeviceId?: string;
  /** sdk版本 */
  Ver?: string;
  /** 模式(p2p/server) */
  SdkMode?: string;
  /** 解码耗时，单位：ms */
  DecodeCost?: number[];
  /** 【已废弃，使用RenderCost】 */
  RenderConst?: number[] | null;
  /** 卡顿k100 */
  K100?: number[];
  /** 卡顿k150 */
  K150?: number[];
  /** nack请求数 */
  NACK?: number[];
  /** 服务端调控码率,单位：kbps */
  BitRateEstimate?: number[];
  /** 宽度 */
  Width?: number;
  /** 高度 */
  Height?: number;
  /** 编码耗时，单位：ms */
  EncodeCost?: number[];
  /** 采集耗时，单位：ms */
  CaptureCost?: number[];
  /** 渲染耗时，单位：ms */
  RenderCost?: number[];
  /** 配置宽度 */
  ConfigWidth?: number;
  /** 配置高度 */
  ConfigHeight?: number;
  /** 平均帧间隔 */
  FrameDelta?: number[];
  /** 最大帧间隔 */
  MaxFrameDelta?: number[];
  /** 总码率评估,单位：kbps */
  TotalBitrateEstimate?: number[];
  /** 帧间隔大于100ms的卡顿时长 */
  Lag100Duration?: number[];
  /** 帧间隔大于150ms的卡顿时长 */
  Lag150Duration?: number[];
  /** 是否开启多网：0 单网，1 多网 */
  MultiMode?: number;
  /** 多网卡信息 */
  MultiNet?: MultiNet[];
}

/** 会话信息 */
declare interface SessionInfo {
  /** 会话ID */
  SessionId?: string;
  /** 远端设备ID */
  RemoteDeviceId?: string;
  /** 现场设备ID */
  FieldDeviceId?: string;
  /** 分辨率 */
  Resolution?: string;
  /** 会话开始时间 */
  StartTime?: number;
  /** 会话结束时间 */
  EndTime?: number;
  /** 通话质量：good|normal|bad，对应优良差 */
  Quality?: string;
}

/** 单位时间间隔的会话统计数据 */
declare interface SessionIntervalStatistic {
  /** 活跃现场设备数 */
  ActiveFieldDeviceNum: number;
  /** 活跃远端设备数 */
  ActiveRemoteDeviceNum: number;
  /** 会话数量 */
  SessionNum: number;
  /** 会话时长，单位：分钟 */
  TotalDuration: number;
  /** 时间戳，单位：秒 */
  StartTime: number;
  /** 时间戳，单位：秒 */
  EndTime: number;
  /** 优良会话占比，单位：% */
  NotBadSessionRatio: number;
}

/** 原视频流参数列表 */
declare interface VideoList {
  /** 项目id */
  ProjectId: string;
  /** 设备id */
  DeviceId: string;
  /** 流id */
  VideoStreamId: number;
  /** 子画面在输出时的宽度，单位为像素值，不填默认为0。 */
  Width: number;
  /** 子画面在输出时的高度，单位为像素值，不填默认为0。 */
  Height: number;
}

/** 转推视频参数 */
declare interface VideoParams {
  /** 输出流宽，音视频输出时必填。取值范围[0,1920]，单位为像素值。 */
  Width: number;
  /** 输出流高，音视频输出时必填。取值范围[0,1080]，单位为像素值。 */
  Height: number;
  /** 输出流帧率，音视频输出时必填。取值范围[1,60]，表示混流的输出帧率可选范围为1到60fps。 */
  Fps: number;
  /** 输出流码率，音视频输出时必填。取值范围[1,10000]，单位为kbps。 */
  BitRate: number;
  /** 输出流gop，音视频输出时必填。取值范围[1,5]，单位为秒。 */
  Gop: number;
  /** 转推视频流列表 */
  VideoList: VideoList[];
}

declare interface BatchDeleteDevicesRequest {
  /** 目标删除设备所属项目ID */
  ProjectId: string;
  /** 目标删除设备的设备ID数组 */
  DeviceIds: string[];
}

declare interface BatchDeleteDevicesResponse {
  /** 删除失败的设备ID列表 */
  FailedDeviceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeletePolicyRequest {
  /** 删除权限配置的项目ID */
  ProjectId: string;
  /** 删除权限配置的远端设备ID列表 */
  RemoteDeviceIds: string[];
  /** 删除权限配置的权限模式, black为黑名单，white为白名单 */
  PolicyMode: string;
}

declare interface BatchDeletePolicyResponse {
  /** 删除权限配置失败的远端设备ID列表 */
  FailedRemoteDeviceIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BoundLicensesRequest {
  /** license数量 */
  Count: number;
  /** 设备id */
  DeviceId: string;
  /** 项目ID */
  ProjectId: string;
}

declare interface BoundLicensesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudRecordingRequest {
  /** 项目id */
  ProjectId: string;
  /** 设备id */
  DeviceId: string;
  /** 视频流号 */
  VideoStreamId: number;
  /** 腾讯云对象存储COS以及第三方云存储的账号信息 */
  CloudStorage: CloudStorage;
  /** 如果是aac或者mp4文件格式，超过长度限制后，系统会自动拆分视频文件。单位：分钟。默认为1440min（24h），取值范围为1-1440。【单文件限制最大为2G，满足文件大小 >2G 或录制时长度 > 24h任意一个条件，文件都会自动切分】 Hls 格式录制此参数不生效。 */
  MaxMediaFileDuration?: number;
  /** 输出文件的格式（存储至COS等第三方存储时有效）。0：输出文件为hls格式。1：输出文件格式为hls+mp4。2：输出文件格式为hls+aac 。3：(默认)输出文件格式为mp4。4：输出文件格式为aac。 */
  OutputFormat?: number;
  /** 房间内持续没有主播的状态超过MaxIdleTime的时长，自动停止录制，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。 示例值：30 */
  MaxIdleTime?: number;
}

declare interface CreateCloudRecordingResponse {
  /** 云录制服务分配的任务 ID。任务 ID 是对一次录制生命周期过程的唯一标识，结束录制时会失去意义。任务 ID需要业务保存下来，作为下次针对这个录制任务操作的参数。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeviceRequest {
  /** 创建设备所归属的项目ID */
  ProjectId: string;
  /** 创建设备ID，项目内需要唯一，由小写英文字母、数字和下划线构成，长度不超过18 */
  DeviceId: string;
  /** 创建设备名称，长度小于24, 可包含中文、数字、英文字母和下划线 */
  DeviceName: string;
  /** 设备类型，field为现场设备（受控设备），remote为远端设备（操控设备），不填默认为field */
  DeviceType: string;
  /** 设备认证口令，由大小写英文字母和数字构成，须为16位 */
  DeviceToken: string;
}

declare interface CreateDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProjectRequest {
  /** 项目名称，长度不超过24个字符 */
  ProjectName: string;
  /** 项目描述，长度不超过120个字符，不填默认为空 */
  ProjectDescription?: string;
  /** 权限模式，black为黑名单，white为白名单，不填默认为black */
  PolicyMode?: string;
}

declare interface CreateProjectResponse {
  /** 项目ID，长度为16位 */
  ProjectId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudRecordingRequest {
  /** 录制任务的唯一Id，在启动录制成功后会返回。 */
  TaskId: string;
}

declare interface DeleteCloudRecordingResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectRequest {
  /** 项目ID */
  ProjectId: string;
}

declare interface DeleteProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceInfoRequest {
  /** 目标设备所属项目ID */
  ProjectId: string;
  /** 目标设备ID */
  DeviceId: string;
}

declare interface DescribeDeviceInfoResponse {
  /** 设备名称 */
  DeviceName: string;
  /** 设备类型，field为现场设备（被控方），remote为远端设备（操控方） */
  DeviceType: string;
  /** 设备状态，offline为离线，ready为在线准备，connected为会话中 */
  DeviceStatus: string;
  /** 设备状态最后更新时间 */
  LastReportTime: string;
  /** 设备信息最后修改时间 */
  ModifyTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceListRequest {
  /** 设备所属项目ID */
  ProjectId: string;
  /** 设备类型筛选，不填默认为全部设备类型 */
  DeviceType?: string;
  /** 对设备ID或Name按关键字进行模糊匹配，不填则不进行模糊匹配 */
  SearchWords?: string;
  /** 每页返回的最大设备数，不填默认为10 */
  PageSize?: number;
  /** 当前页码，不填默认为1（首页） */
  PageNumber?: number;
  /** 设备状态筛选，不填默认为不过滤。取值：[&quot;ready&quot;,&quot;connected&quot;,&quot;online&quot;]，online代表ready或connected */
  DeviceStatus?: string;
  /** 标识查询项目下的设备注册类型，默认不包含免注册登录设备。 若存在免注册登录设备，该参数传&quot;1&quot;枚举值：0： 项目不包含免注册登录设备1： 项目包含免注册登录设备默认值：0 */
  RegisterType?: number;
}

declare interface DescribeDeviceListResponse {
  /** 设备信息列表 */
  Devices?: DeviceInfo[];
  /** 设备总数 */
  Total?: number;
  /** 本次返回的设备数 */
  Num?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceSessionDetailsRequest {
  /** 会话ID */
  SessionId: string;
}

declare interface DescribeDeviceSessionDetailsResponse {
  /** 按设备区分的会话详细数据 */
  Details?: SessionDeviceDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceSessionListRequest {
  /** 项目ID */
  ProjectId: string;
  /** 页码，从1开始 */
  PageNumber: number;
  /** 每页个数 */
  PageSize: number;
  /** 设备ID */
  DeviceId?: string;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

declare interface DescribeDeviceSessionListResponse {
  /** 总个数 */
  Total?: number;
  /** 会话列表 */
  DeviceSessionList?: SessionInfo[];
  /** 本页数量 */
  Num?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePolicyRequest {
  /** 查看权限的项目ID */
  ProjectId: string;
  /** 查看的权限模式，black为黑名单，white为白名单，不填默认为当前项目生效的权限模式 */
  PolicyMode?: string;
  /** 模糊匹配模式，remoteMatch为远端设备ID匹配，fieldMatch为现场ID匹配，不填默认为remoteMatch */
  SearchMode?: string;
  /** 模糊匹配关键字，不填默认不进行模糊匹配 */
  SearchWords?: string;
  /** 每页返回的最大数量，不填默认为10 */
  PageSize?: number;
  /** 当前页码，不填默认为1（首页） */
  PageNumber?: number;
}

declare interface DescribePolicyResponse {
  /** 权限模式 */
  PolicyMode?: string;
  /** 返回的权限模式是否为当前生效的权限模式 */
  PolicyEnabled?: boolean;
  /** 权限信息列表 */
  PolicyInfo?: PolicyInfo[];
  /** 本次返回的权限信息数量 */
  Num?: number;
  /** 权限信息总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectInfoRequest {
  /** 目标项目ID，必填参数 */
  ProjectId: string;
}

declare interface DescribeProjectInfoResponse {
  /** 项目名称 */
  ProjectName?: string;
  /** 项目描述 */
  ProjectDescription?: string;
  /** 项目权限模式，black为黑名单，white为白名单 */
  PolicyMode?: string;
  /** 项目信息修改时间 */
  ModifyTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectListRequest {
  /** 每页返回的最大项目数量，不填默认为10 */
  PageSize?: number;
  /** 当前页码，不填默认为1（首页） */
  PageNumber?: number;
}

declare interface DescribeProjectListResponse {
  /** 项目信息数组 */
  Projects: ProjectInfo[];
  /** 项目总数 */
  Total: number;
  /** 本次返回的项目数 */
  Num: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRecentSessionListRequest {
  /** 项目ID */
  ProjectId: string;
  /** 页码，从1开始 */
  PageNumber: number;
  /** 每页个数 */
  PageSize: number;
  /** 设备ID，支持过滤远端设备或现场设备 */
  DeviceId?: string;
  /** 时间范围的起始时间。时间范围最大为最近两小时，若不传或超出范围，则起始时间按两小时前计算 */
  StartTime?: number;
  /** 时间范围的结束时间。时间范围最大为最近两小时，若不传或超出范围，则结束时间按当前时间计算 */
  EndTime?: number;
}

declare interface DescribeRecentSessionListResponse {
  /** 总个数 */
  Total?: number;
  /** 会话列表 */
  RecentSessionList?: RecentSessionInfo[];
  /** 本页数量 */
  Num?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSessionStatisticsByIntervalRequest {
  /** 项目ID */
  ProjectId: string;
  /** 统计时间间隔：hour|day|month */
  StatisticInterval: string;
  /** 设备ID */
  DeviceId?: string;
  /** 起始时间，单位：秒 */
  StartTime?: number;
  /** 结束时间，单位：秒 */
  EndTime?: number;
}

declare interface DescribeSessionStatisticsByIntervalResponse {
  /** 各时间段的会话统计数据 */
  SessionStatistics?: SessionIntervalStatistic[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSessionStatisticsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 设备ID */
  DeviceId?: string;
  /** 起始时间，单位：秒 */
  StartTime?: number;
  /** 结束时间，单位：秒 */
  EndTime?: number;
}

declare interface DescribeSessionStatisticsResponse {
  /** 会话数量 */
  SessionNum?: number;
  /** 通话时长，单位：分钟 */
  TotalDuration?: number;
  /** 活跃现场设备数 */
  ActiveFieldDeviceNum?: number;
  /** 活跃远端设备数 */
  ActiveRemoteDeviceNum?: number;
  /** 优良会话占比，单位：% */
  NotBadSessionRatio?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDeviceLicenseRequest {
  /** 目标设备所属项目ID */
  ProjectId: string;
  /** 目标设备ID */
  DeviceId: string;
}

declare interface GetDeviceLicenseResponse {
  /** 指定设备已经绑定的可用license数量 */
  AvailableCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDevicesRequest {
  /** 页码 */
  PageNum: number;
  /** 页面数量 */
  PageSize: number;
  /** 项目 ID */
  ProjectId?: string;
  /** 设备ID */
  DeviceId?: string;
}

declare interface GetDevicesResponse {
  /** 设备授权列表 */
  Devices?: Device[];
  /** 列表数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDurationDetailsRequest {
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 页码 */
  PageNum: number;
  /** 页面数量 */
  PageSize: number;
  /** 项目id */
  ProjectId: string;
  /** 设备ID，不传查全部设备 */
  DeviceId?: string;
}

declare interface GetDurationDetailsResponse {
  /** 列表总数 */
  TotalCount?: number;
  /** 时长明细列表 */
  DurationDetails?: DurationDetails[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLicenseStatRequest {
}

declare interface GetLicenseStatResponse {
  /** 有效授权 */
  Valid?: number;
  /** 已绑定授权 */
  Bound?: number;
  /** 未绑定授权 */
  UnBound?: number;
  /** 过期授权 */
  Expire?: number;
  /** 当月用量超时授权个数 */
  MonthlyExpire?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetLicensesRequest {
  /** 页码 */
  PageNum: number;
  /** 页面数量 */
  PageSize: number;
  /** projectId */
  ProjectId?: string;
  /** DeviceId */
  DeviceId?: string;
  /** license状态：0:未绑定；1:已绑定；2:已停服；3:已退费 */
  Status?: number;
}

declare interface GetLicensesResponse {
  /** license列表 */
  Licenses?: License[];
  /** license列表项数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTotalDurationRequest {
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 项目id */
  ProjectId: string;
  /** 设备id，不传查全部 */
  DeviceId?: string;
}

declare interface GetTotalDurationResponse {
  /** 语音:min */
  Voice?: number;
  /** 标清:min */
  SD?: number;
  /** 高清:min */
  HD?: number;
  /** 超高清:min */
  FHD?: number;
  /** 2k:min */
  TwoK?: number;
  /** 4k:min */
  FourK?: number;
  /** 在线时长:min */
  Online?: number;
  /** 多网标清:min */
  MultiSD?: number;
  /** 多网高清:min */
  MultiHD?: number;
  /** 多网超高清:min */
  MultiFHD?: number;
  /** 多网2k:min */
  MultiTwoK?: number;
  /** 多网4k:min */
  MultiFourK?: number;
  /** 多网在线时长:min */
  MultiOnline?: number;
  /** 总抵扣时长:min */
  DeductDuration?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCallbackUrlRequest {
  /** 项目id */
  ProjectId: string;
  /** 回调URL */
  CallbackUrl: string;
  /** 回调签名密钥，用于校验回调信息的完整性 */
  SignKey?: string;
}

declare interface ModifyCallbackUrlResponse {
  /** 响应码，0：成功，其他：失败 */
  Code?: number;
  /** 响应消息，ok:成功，其他：失败 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDeviceRequest {
  /** 要修改设备归属项目的项目ID */
  ProjectId: string;
  /** 要修改设备的设备ID */
  DeviceId: string;
  /** 修改后的设备名称，不填则不修改 */
  DeviceName?: string;
  /** 修改后的设备认证口令，不填则不修改 */
  DeviceToken?: string;
}

declare interface ModifyDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPolicyRequest {
  /** 修改权限配置的项目ID */
  ProjectId: string;
  /** 修改权限配置的远端设备ID */
  RemoteDeviceId: string;
  /** 权限修改涉及的现场设备ID数组 */
  FieldDeviceIds: string[];
  /** 修改的目标权限模式，black为黑名单，white为白名单 */
  PolicyMode: string;
  /** 修改模式，add为新增（添加现场设备I关联），remove为删除（解除现场设备关联），set为设置（更新现场设备关联） */
  ModifyMode: string;
}

declare interface ModifyPolicyResponse {
  /** 添加关联失败的现场设备ID列表 */
  FailedInsertIds?: string[];
  /** 解除关联失败的现场设备ID列表 */
  FailedDeleteIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProjectRequest {
  /** 目标修改项目的项目ID */
  ProjectId: string;
  /** 修改后的项目名称，不填则不修改 */
  ProjectName?: string;
  /** 修改后的项目描述，不填则不修改 */
  ProjectDescription?: string;
  /** 修改后的权限模式，black为黑名单，white为白名单,不填则不修改 */
  PolicyMode?: string;
}

declare interface ModifyProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProjectSecModeRequest {
  /** 项目ID */
  ProjectId: string;
  /** 安全模式 0：关闭项目共享密钥 1：开启项目共享密钥 */
  Mode: number;
  /** 项目密钥 32位 小写英文+数字； 项目密钥模式必填 */
  Key?: string;
  /** 自动注册方式0：关闭自动注册1：仅允许现场设备自动注册2：仅允许远端设备自动注册3：允许现场和远端设备均自动注册 */
  AutoRegister?: number;
  /** 是否允许远端获取现场设备列表（getGwList）0：不允许1：允许 */
  FieldListEnable?: number;
}

declare interface ModifyProjectSecModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartPublishLiveStreamRequest {
  /** 是否转码，0表示无需转码，1表示需要转码。是否收取转码费是由WithTranscoding参数决定的，WithTranscoding为0，表示旁路转推，不会收取转码费用，WithTranscoding为1，表示混流转推，会收取转码费用。 示例值：1 */
  WithTranscoding: number;
  /** 所有参与混流转推的主播持续离开TRTC房间或切换成观众超过MaxIdleTime的时长，自动停止转推，单位：秒。默认值为 30 秒，该值需大于等于 5秒，且小于等于 86400秒(24小时)。 */
  MaxIdleTime: number;
  /** 转推视频参数 */
  VideoParams: VideoParams;
  /** 转推的URL参数，一个任务最多支持10个推流URL */
  PublishParams: PublishParams[];
}

declare interface StartPublishLiveStreamResponse {
  /** 用于唯一标识转推任务，由腾讯云服务端生成，后续停止请求需要携带TaskiD参数。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopPublishLiveStreamRequest {
  /** 唯一标识转推任务。 */
  TaskId: string;
}

declare interface StopPublishLiveStreamResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Trro 实时互动-工业能源版} */
declare interface Trro {
  (): Versions;
  /** 批量删除设备 {@link BatchDeleteDevicesRequest} {@link BatchDeleteDevicesResponse} */
  BatchDeleteDevices(data: BatchDeleteDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteDevicesResponse>;
  /** 批量删除权限 {@link BatchDeletePolicyRequest} {@link BatchDeletePolicyResponse} */
  BatchDeletePolicy(data: BatchDeletePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeletePolicyResponse>;
  /** 设备绑定license {@link BoundLicensesRequest} {@link BoundLicensesResponse} */
  BoundLicenses(data: BoundLicensesRequest, config?: AxiosRequestConfig): AxiosPromise<BoundLicensesResponse>;
  /** 开始云端录制 {@link CreateCloudRecordingRequest} {@link CreateCloudRecordingResponse} */
  CreateCloudRecording(data: CreateCloudRecordingRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudRecordingResponse>;
  /** 创建设备 {@link CreateDeviceRequest} {@link CreateDeviceResponse} */
  CreateDevice(data: CreateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceResponse>;
  /** 创建项目 {@link CreateProjectRequest} {@link CreateProjectResponse} */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** 停止云端录制 {@link DeleteCloudRecordingRequest} {@link DeleteCloudRecordingResponse} */
  DeleteCloudRecording(data: DeleteCloudRecordingRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudRecordingResponse>;
  /** 删除项目 {@link DeleteProjectRequest} {@link DeleteProjectResponse} */
  DeleteProject(data: DeleteProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectResponse>;
  /** 查询设备信息 {@link DescribeDeviceInfoRequest} {@link DescribeDeviceInfoResponse} */
  DescribeDeviceInfo(data: DescribeDeviceInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceInfoResponse>;
  /** 获取设备列表 {@link DescribeDeviceListRequest} {@link DescribeDeviceListResponse} */
  DescribeDeviceList(data: DescribeDeviceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceListResponse>;
  /** 获取设备会话数据详单 {@link DescribeDeviceSessionDetailsRequest} {@link DescribeDeviceSessionDetailsResponse} */
  DescribeDeviceSessionDetails(data: DescribeDeviceSessionDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceSessionDetailsResponse>;
  /** 获取设备会话列表 {@link DescribeDeviceSessionListRequest} {@link DescribeDeviceSessionListResponse} */
  DescribeDeviceSessionList(data: DescribeDeviceSessionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeviceSessionListResponse>;
  /** 查看权限配置 {@link DescribePolicyRequest} {@link DescribePolicyResponse} */
  DescribePolicy(data: DescribePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePolicyResponse>;
  /** 查询项目信息 {@link DescribeProjectInfoRequest} {@link DescribeProjectInfoResponse} */
  DescribeProjectInfo(data: DescribeProjectInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectInfoResponse>;
  /** 获取项目列表 {@link DescribeProjectListRequest} {@link DescribeProjectListResponse} */
  DescribeProjectList(data?: DescribeProjectListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectListResponse>;
  /** 获取最新设备会话列表 {@link DescribeRecentSessionListRequest} {@link DescribeRecentSessionListResponse} */
  DescribeRecentSessionList(data: DescribeRecentSessionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRecentSessionListResponse>;
  /** 获取会话统计值 {@link DescribeSessionStatisticsRequest} {@link DescribeSessionStatisticsResponse} */
  DescribeSessionStatistics(data: DescribeSessionStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSessionStatisticsResponse>;
  /** 获取各时间段的会话统计值 {@link DescribeSessionStatisticsByIntervalRequest} {@link DescribeSessionStatisticsByIntervalResponse} */
  DescribeSessionStatisticsByInterval(data: DescribeSessionStatisticsByIntervalRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSessionStatisticsByIntervalResponse>;
  /** 获取设备授权数量 {@link GetDeviceLicenseRequest} {@link GetDeviceLicenseResponse} */
  GetDeviceLicense(data: GetDeviceLicenseRequest, config?: AxiosRequestConfig): AxiosPromise<GetDeviceLicenseResponse>;
  /** 设备的授权列表 {@link GetDevicesRequest} {@link GetDevicesResponse} */
  GetDevices(data: GetDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<GetDevicesResponse>;
  /** 累计时长明细 {@link GetDurationDetailsRequest} {@link GetDurationDetailsResponse} */
  GetDurationDetails(data: GetDurationDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<GetDurationDetailsResponse>;
  /** licenses统计 {@link GetLicenseStatRequest} {@link GetLicenseStatResponse} */
  GetLicenseStat(data?: GetLicenseStatRequest, config?: AxiosRequestConfig): AxiosPromise<GetLicenseStatResponse>;
  /** 查看license列表 {@link GetLicensesRequest} {@link GetLicensesResponse} */
  GetLicenses(data: GetLicensesRequest, config?: AxiosRequestConfig): AxiosPromise<GetLicensesResponse>;
  /** 累计时长 {@link GetTotalDurationRequest} {@link GetTotalDurationResponse} */
  GetTotalDuration(data: GetTotalDurationRequest, config?: AxiosRequestConfig): AxiosPromise<GetTotalDurationResponse>;
  /** 修改录制和转推回调URL {@link ModifyCallbackUrlRequest} {@link ModifyCallbackUrlResponse} */
  ModifyCallbackUrl(data: ModifyCallbackUrlRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCallbackUrlResponse>;
  /** 修改设备信息 {@link ModifyDeviceRequest} {@link ModifyDeviceResponse} */
  ModifyDevice(data: ModifyDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeviceResponse>;
  /** 修改权限 {@link ModifyPolicyRequest} {@link ModifyPolicyResponse} */
  ModifyPolicy(data: ModifyPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPolicyResponse>;
  /** 修改项目 {@link ModifyProjectRequest} {@link ModifyProjectResponse} */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
  /** 修改项目安全模式 {@link ModifyProjectSecModeRequest} {@link ModifyProjectSecModeResponse} */
  ModifyProjectSecMode(data: ModifyProjectSecModeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectSecModeResponse>;
  /** 开启旁路转推 {@link StartPublishLiveStreamRequest} {@link StartPublishLiveStreamResponse} */
  StartPublishLiveStream(data: StartPublishLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StartPublishLiveStreamResponse>;
  /** 停止旁路转推 {@link StopPublishLiveStreamRequest} {@link StopPublishLiveStreamResponse} */
  StopPublishLiveStream(data: StopPublishLiveStreamRequest, config?: AxiosRequestConfig): AxiosPromise<StopPublishLiveStreamResponse>;
}

export declare type Versions = ["2022-03-25"];

export default Trro;
