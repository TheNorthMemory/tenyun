/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 查询用户设备的授权绑定情况 */
declare interface Device {
  /** 设备ID */
  DeviceId?: string | null;
  /** 设备名称 */
  DeviceName?: string | null;
  /** 已经绑定license数量 */
  LicenseCount?: number | null;
  /** 剩余天数：天 */
  RemainDay?: number | null;
  /** 过期时间：s */
  ExpireTime?: string | null;
  /** 服务时长：s */
  Duration?: string | null;
  /** 已经绑定licenseId列表 */
  LicenseIds?: string[] | null;
  /** 每月license的限定时长 */
  MonthlyRemainTime?: number | null;
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

/** 按授权查看的license列表 */
declare interface License {
  /** 该类型的license个数 */
  Count?: number | null;
  /** license状态：0:未绑定；1:已绑定；2:已停服；3:已退费 */
  Status?: number | null;
  /** 到期时间戳：s */
  ExpireTime?: string | null;
  /** 服务时长：s */
  Duration?: string | null;
  /** 剩余天数：天 */
  RemainDay?: number | null;
  /** 该类型的licenseId列表 */
  LicenseIds?: string[] | null;
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
  ProjectId: string;
  /** 项目名称 */
  ProjectName: string;
  /** 项目描述 */
  ProjectDescription: string;
  /** 项目权限模式，black为黑名单，white为白名单 */
  PolicyMode: string;
  /** 项目信息修改时间 */
  ModifyTime: string;
}

/** 最新会话信息 */
declare interface RecentSessionInfo {
  /** 会话ID */
  SessionId: string;
  /** 远端设备ID */
  RemoteDeviceId: string;
  /** 现场设备ID */
  FieldDeviceId: string;
  /** 分辨率 */
  Resolution: string;
  /** 会话开始时间 */
  StartTime: number;
  /** 最后更新时间 */
  LatestUpdateTime: number;
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
  Ver?: string | null;
  /** 模式(p2p/server) */
  SdkMode?: string | null;
  /** 解码耗时，单位：ms */
  DecodeCost?: number[] | null;
  /** 渲染耗时，单位：ms */
  RenderConst?: number[] | null;
  /** 卡顿k100 */
  K100?: number[] | null;
  /** 卡顿k150 */
  K150?: number[] | null;
  /** nack请求数 */
  NACK?: number[] | null;
  /** 服务端调控码率,单位：kbps */
  BitRateEstimate?: number[] | null;
  /** 宽度 */
  Width?: number | null;
  /** 高度 */
  Height?: number | null;
  /** 编码耗时，单位：ms */
  EncodeCost?: number[] | null;
  /** 采集耗时，单位：ms */
  CaptureCost?: number[] | null;
}

/** 会话信息 */
declare interface SessionInfo {
  /** 会话ID */
  SessionId: string;
  /** 远端设备ID */
  RemoteDeviceId: string;
  /** 现场设备ID */
  FieldDeviceId: string;
  /** 分辨率 */
  Resolution: string;
  /** 会话开始时间 */
  StartTime: number;
  /** 会话结束时间 */
  EndTime: number;
  /** 通话质量：good|normal|bad，对应优良差 */
  Quality: string;
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

declare interface BatchDeleteDevicesRequest {
  /** 目标删除设备所属项目ID */
  ProjectId: string;
  /** 目标删除设备的设备ID数组 */
  DeviceIds: string[];
}

declare interface BatchDeleteDevicesResponse {
  /** 删除失败的设备ID列表 */
  FailedDeviceIds: string[] | null;
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
  ProjectId: string;
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
}

declare interface DescribeDeviceListResponse {
  /** 设备信息列表 */
  Devices: DeviceInfo[];
  /** 设备总数 */
  Total: number;
  /** 本次返回的设备数 */
  Num: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeviceSessionDetailsRequest {
  /** 会话ID */
  SessionId: string;
}

declare interface DescribeDeviceSessionDetailsResponse {
  /** 按设备区分的会话详细数据 */
  Details: SessionDeviceDetail[];
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
  Total: number;
  /** 会话列表 */
  DeviceSessionList: SessionInfo[];
  /** 本页数量 */
  Num: number;
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
  PolicyMode: string;
  /** 返回的权限模式是否为当前生效的权限模式 */
  PolicyEnabled: boolean;
  /** 权限信息列表 */
  PolicyInfo: PolicyInfo[];
  /** 本次返回的权限信息数量 */
  Num: number;
  /** 权限信息总数 */
  Total: number;
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
  Total: number;
  /** 会话列表 */
  RecentSessionList: RecentSessionInfo[];
  /** 本页数量 */
  Num: number;
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
  SessionStatistics: SessionIntervalStatistic[];
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
  SessionNum: number;
  /** 通话时长，单位：分钟 */
  TotalDuration: number;
  /** 活跃现场设备数 */
  ActiveFieldDeviceNum: number;
  /** 活跃远端设备数 */
  ActiveRemoteDeviceNum: number;
  /** 优良会话占比，单位：% */
  NotBadSessionRatio: number;
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
  FailedInsertIds: string[] | null;
  /** 解除关联失败的现场设备ID列表 */
  FailedDeleteIds: string[] | null;
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

/** {@link Trro 远程实时操控} */
declare interface Trro {
  (): Versions;
  /** 批量删除设备 {@link BatchDeleteDevicesRequest} {@link BatchDeleteDevicesResponse} */
  BatchDeleteDevices(data: BatchDeleteDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteDevicesResponse>;
  /** 批量删除权限 {@link BatchDeletePolicyRequest} {@link BatchDeletePolicyResponse} */
  BatchDeletePolicy(data: BatchDeletePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeletePolicyResponse>;
  /** 设备绑定license {@link BoundLicensesRequest} {@link BoundLicensesResponse} */
  BoundLicenses(data: BoundLicensesRequest, config?: AxiosRequestConfig): AxiosPromise<BoundLicensesResponse>;
  /** 创建设备 {@link CreateDeviceRequest} {@link CreateDeviceResponse} */
  CreateDevice(data: CreateDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeviceResponse>;
  /** 创建项目 {@link CreateProjectRequest} {@link CreateProjectResponse} */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
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
  /** licenses统计 {@link GetLicenseStatRequest} {@link GetLicenseStatResponse} */
  GetLicenseStat(data?: GetLicenseStatRequest, config?: AxiosRequestConfig): AxiosPromise<GetLicenseStatResponse>;
  /** 查看license列表 {@link GetLicensesRequest} {@link GetLicensesResponse} */
  GetLicenses(data: GetLicensesRequest, config?: AxiosRequestConfig): AxiosPromise<GetLicensesResponse>;
  /** 修改设备信息 {@link ModifyDeviceRequest} {@link ModifyDeviceResponse} */
  ModifyDevice(data: ModifyDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeviceResponse>;
  /** 修改权限 {@link ModifyPolicyRequest} {@link ModifyPolicyResponse} */
  ModifyPolicy(data: ModifyPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPolicyResponse>;
  /** 修改项目 {@link ModifyProjectRequest} {@link ModifyProjectResponse} */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
}

export declare type Versions = ["2022-03-25"];

export default Trro;
