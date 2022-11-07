/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等· 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。· 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 一个或者多个过滤值。 */
  Values?: string[];
  /** 过滤键的名称。 */
  Name?: string;
}

/** 日志导出记录 */
declare interface LogExport {
  /** 日志导出路径 */
  CosPath: string;
  /** 日志导出数量 */
  Count: number;
  /** 日志导出任务创建时间 */
  CreateTime: string;
  /** 日志导出任务ID */
  ExportID: string;
  /** 日志导出文件名 */
  FileName: string;
  /** 日志文件大小 */
  FileSize: number;
  /** 日志导出格式 */
  Format: string;
  /** 日志导出时间排序 */
  Order: string;
  /** 日志导出查询语句 */
  Query: string;
  /** 日志导出起始时间 */
  StartTime: string;
  /** 日志导出结束时间 */
  EndTime: string;
  /** 日志下载状态。Queuing:导出正在排队中，Processing:导出正在进行中，Complete:导出完成，Failed:导出失败，Expired:日志导出已过期（三天有效期）。 */
  Status: string;
}

/** 项目接口限制类型 */
declare interface ProjectLimit {
  /** 接口 */
  ProjectInterface: string;
  /** 上报率 */
  ReportRate: number;
  /** 上报类型 1：上报率 2：上报量限制 */
  ReportType: number;
  /** 主键ID */
  ID?: number;
  /** 项目ID */
  ProjectID?: number;
}

/** 发布文件列表(SOURCEMAP) */
declare interface ReleaseFile {
  /** 文件版本 */
  Version: string;
  /** 文件唯一 key */
  FileKey: string;
  /** 文件名 */
  FileName: string;
  /** 文件哈希值 */
  FileHash: string;
  /** 文件 id */
  ID: number | null;
}

/** Rum片区信息 */
declare interface RumAreaInfo {
  /** 片区Id */
  AreaId: number;
  /** 片区状态(1=有效，2=无效) */
  AreaStatus: number;
  /** 片区名称 */
  AreaName: string;
  /** 片区Key */
  AreaKey: string;
  /** 地域码表 id */
  AreaRegionID: string;
  /** 地域码表 code 如 ap-xxx（xxx 为地域词） */
  AreaRegionCode: string;
  /** 地域缩写 */
  AreaAbbr: string;
}

/** Rum实例信息 */
declare interface RumInstanceInfo {
  /** 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=已删除) */
  InstanceStatus: number;
  /** 片区Id */
  AreaId: number;
  /** 标签列表 */
  Tags: Tag[];
  /** 实例Id */
  InstanceId: string;
  /** 集群Id */
  ClusterId: number;
  /** 实例描述 */
  InstanceDesc: string;
  /** 计费状态(1=使用中，2=已过期，3=已销毁，4=分配中，5=分配失败) */
  ChargeStatus: number;
  /** 计费类型(1=免费版，2=预付费，3=后付费) */
  ChargeType: number;
  /** 更新时间 */
  UpdatedAt: string;
  /** 数据保留时间(天) */
  DataRetentionDays: number;
  /** 实例名称 */
  InstanceName: string;
  /** 创建时间 */
  CreatedAt: string;
}

/** Rum 项目信息 */
declare interface RumProject {
  /** 项目名 */
  Name: string;
  /** 创建者 id */
  Creator: string;
  /** 实例 id */
  InstanceID: string;
  /** 项目类型 */
  Type: string;
  /** 创建时间 */
  CreateTime: string;
  /** 项目仓库地址 */
  Repo: string | null;
  /** 项目网址地址 */
  URL: string | null;
  /** 项目采样频率 */
  Rate: string;
  /** 项目唯一key（长度 12 位） */
  Key: string;
  /** 是否开启url聚类 */
  EnableURLGroup: number;
  /** 实例名 */
  InstanceName: string;
  /** 项目 ID */
  ID: number;
  /** 实例 key */
  InstanceKey: string;
  /** 项目描述 */
  Desc: string | null;
  /** 是否星标 1:是 0:否 */
  IsStar: number | null;
  /** 项目状态(1 创建中，2 运行中，3 异常，4 重启中，5 停止中，6 已停止， 7 销毁中，8 已销毁) */
  ProjectStatus: number | null;
}

/** rum 日志对象 */
declare interface RumPvInfo {
  /** 项目ID */
  ProjectId: number;
  /** pv访问量 */
  Pv: string | null;
  /** 时间 */
  CreateTime: string;
}

/** RumUv 访问量 */
declare interface RumUvInfo {
  /** 项目ID */
  ProjectId: number;
  /** uv访问量 */
  Uv: string;
  /** 创建时间 */
  CreateTime: string;
}

/** project Score分数实体 */
declare interface ScoreInfo {
  /** duration */
  StaticDuration: string;
  /** pv */
  PagePv: string;
  /** 失败 */
  ApiFail: string;
  /** 请求 */
  ApiNum: string;
  /** fail */
  StaticFail: string;
  /** 项目id */
  ProjectID: number;
  /** uv */
  PageUv: string;
  /** 请求次数 */
  ApiDuration: string;
  /** 分数 */
  Score: string;
  /** error */
  PageError: string;
  /** num */
  StaticNum: string;
  /** num */
  RecordNum: number;
  /** Duration */
  PageDuration: string;
}

/** 标签 */
declare interface Tag {
  /** 标签key */
  Key: string;
  /** 标签value */
  Value: string;
}

/** 白名单 */
declare interface Whitelist {
  /** 备注 */
  Remark: string;
  /** 实例ID */
  InstanceID: string;
  /** 截止时间 */
  Ttl: string;
  /** 白名单自增ID */
  ID: string;
  /** 业务唯一标识 */
  WhitelistUin: string;
  /** 创建者ID */
  CreateUser: string;
  /** aid标识 */
  Aid: string;
  /** 创建时间 */
  CreateTime: string;
}

declare interface CreateLogExportRequest {
  /** 项目ID */
  ID: number;
  /** 日志导出起始时间 */
  StartTime: string;
  /** 日志导出结束时间 */
  EndTime: string;
  /** 日志导出检索语句 */
  Query: string;
  /** 日志导出数量, 最大值1000万 */
  Count: number;
  /** 日志导出时间排序。desc，asc，默认为desc */
  Order?: string;
  /** 日志导出数据格式。json，csv，默认为json */
  Format?: string;
}

declare interface CreateLogExportResponse {
  /** 日志导出ID */
  ExportID: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOfflineLogConfigRequest {
  /** 项目唯一上报 key */
  ProjectKey: string;
  /** 需要监听的用户唯一标示(aid 或 uin) */
  UniqueID: string;
}

declare interface CreateOfflineLogConfigResponse {
  /** 接口返回信息 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateProjectRequest {
  /** 创建的项目名(不为空且最长为 200) */
  Name: string;
  /** 业务系统 ID */
  InstanceID: string;
  /** 项目抽样率(大于等于 0) */
  Rate: string;
  /** 是否开启聚类 */
  EnableURLGroup: number;
  /** 项目类型("web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn") */
  Type: string;
  /** 项目对应仓库地址(可选，最长为 256) */
  Repo?: string;
  /** 项目对应网页地址(可选，最长为 256) */
  URL?: string;
  /** 创建的项目描述(可选，最长为 1000) */
  Desc?: string;
}

declare interface CreateProjectResponse {
  /** 项目 id */
  ID: number;
  /** 项目唯一key */
  Key: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateReleaseFileRequest {
  /** 项目 id */
  ProjectID: number;
  /** 文件信息列表 */
  Files: ReleaseFile[];
}

declare interface CreateReleaseFileResponse {
  /** 调用结果 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateStarProjectRequest {
  /** 实例ID：taw-123 */
  InstanceID: string;
  /** 项目ID */
  ID: number;
}

declare interface CreateStarProjectResponse {
  /** 接口返回信息 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTawInstanceRequest {
  /** 片区Id，(至少大于0) */
  AreaId: number;
  /** 计费类型, (1=后付费，2=预付费) */
  ChargeType: number;
  /** 数据保存时间，(至少大于0) */
  DataRetentionDays: number;
  /** 实例名称，(最大长度不超过255字节) */
  InstanceName: string;
  /** 标签列表 */
  Tags?: Tag[];
  /** 实例描述，(最大长度不超过1024字节) */
  InstanceDesc?: string;
  /** 每天数据上报量 */
  CountNum?: string;
  /** 数据存储时长计费 */
  PeriodRetain?: string;
  /** 实例购买渠道("cdn" 等) */
  BuyingChannel?: string;
}

declare interface CreateTawInstanceResponse {
  /** 实例Id */
  InstanceId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateWhitelistRequest {
  /** 实例ID：taw-123 */
  InstanceID: string;
  /** 备注 */
  Remark: string;
  /** uin：业务方标识 */
  WhitelistUin: string;
  /** 业务方标识 */
  Aid?: string;
}

declare interface CreateWhitelistResponse {
  /** 消息 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteInstanceRequest {
  /** 需要删除的实例id */
  InstanceId: string;
}

declare interface DeleteInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLogExportRequest {
  /** 项目ID */
  ID: number;
  /** 日志导出ID */
  ExportID: string;
}

declare interface DeleteLogExportResponse {
  /** 是否成功，成功则为success；失败则直接返回Error，不返回该参数 */
  Msg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteOfflineLogConfigRequest {
  /** 项目唯一上报 key */
  ProjectKey: string;
  /** 用户唯一标示(uin or aid) */
  UniqueID: string;
}

declare interface DeleteOfflineLogConfigResponse {
  /** 接口调用信息 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteOfflineLogRecordRequest {
  /** 项目唯一上报 key */
  ProjectKey: string;
  /** 离线日志文件 id */
  FileID: string;
}

declare interface DeleteOfflineLogRecordResponse {
  /** 接口调用信息 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteProjectRequest {
  /** 需要删除的项目 ID */
  ID: number;
}

declare interface DeleteProjectResponse {
  /** 操作信息 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteReleaseFileRequest {
  /** 文件 id */
  ID: number;
}

declare interface DeleteReleaseFileResponse {
  /** 接口请求返回字符串 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteStarProjectRequest {
  /** 实例ID：taw-123 */
  InstanceID: string;
  /** 项目ID */
  ID: number;
}

declare interface DeleteStarProjectResponse {
  /** 返回消息 */
  Msg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteWhitelistRequest {
  /** 实例ID */
  InstanceID: string;
  /** 名单ID */
  ID: string;
}

declare interface DeleteWhitelistResponse {
  /** 消息success */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataCustomUrlRequest {
  /** 开始时间 */
  StartTime: number;
  /** top：资源top视图，allcount：性能视图，day：14天数据，condition：条件列表，pagepv：性能视图，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算方式 */
  CostType?: string;
  /** 自定义测速的key的值 */
  Url?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataCustomUrlResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataEventUrlRequest {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，condition：条件列表，ckuv：获取uv趋势，ckpv：获取pv趋势，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 筛选条件 */
  Name?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataEventUrlResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataFetchProjectRequest {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算方式 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
  /** httpcode响应码 */
  Status?: string;
  /** retcode */
  Ret?: string;
}

declare interface DescribeDataFetchProjectResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataFetchUrlInfoRequest {
  /** 开始时间 */
  StartTime: number;
  /** 类型 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算方式 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataFetchUrlInfoResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataFetchUrlRequest {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，count40x：40X视图，count50x：50X视图，count5xand4x：40∑50视图，top：资源top视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算方式 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
  /** httpcode响应码 */
  Status?: string;
  /** retcode */
  Ret?: string;
  /** 网络状态 */
  NetStatus?: string;
}

declare interface DescribeDataFetchUrlResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataLogUrlInfoRequest {
  /** 项目ID */
  ID: number;
  /** 时间戳 */
  StartTime: number;
  /** 时间戳 */
  EndTime: number;
}

declare interface DescribeDataLogUrlInfoResponse {
  /** 返回字符串 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataLogUrlStatisticsRequest {
  /** 开始时间 */
  StartTime: number;
  /** analysis：异常分析，compare：异常列表对比，allcount：性能视图，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 环境区分 */
  Env?: string;
}

declare interface DescribeDataLogUrlStatisticsResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataPerformancePageRequest {
  /** 项目ID */
  ID: number;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** pagepv：性能视图，allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等 */
  Type: string;
  /** 日志等级 */
  Level?: string;
  /** 运营商 */
  Isp?: string;
  /** 地区 */
  Area?: string;
  /** 网络类型 */
  NetType?: string;
  /** 平台 */
  Platform?: string;
  /** 机型 */
  Device?: string;
  /** 版本 */
  VersionNum?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 自定义2 */
  ExtSecond?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 浏览器 */
  Browser?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 品牌 */
  Brand?: string;
  /** 来源页面 */
  From?: string;
  /** 耗时计算方式 */
  CostType?: string;
  /** 环境变量 */
  Env?: string;
  /** 网络状态 */
  NetStatus?: string;
}

declare interface DescribeDataPerformancePageResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataPerformanceProjectRequest {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，condition：条件列表，area：请求速度分布，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算 */
  CostType?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataPerformanceProjectResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataPvUrlInfoRequest {
  /** 开始时间 */
  StartTime: number;
  /** 类型 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataPvUrlInfoResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataPvUrlStatisticsRequest {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，vp：性能，ckuv：uv，ckpv：pv，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataPvUrlStatisticsResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataReportCountRequest {
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID?: number;
  /** 上报类型 */
  ReportType?: string;
  /** 实例ID */
  InstanceID?: string;
}

declare interface DescribeDataReportCountResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataRequest {
  /** 查询字符串 */
  Query: string;
  /** 项目ID */
  ID: number;
}

declare interface DescribeDataResponse {
  /** 返回字符串 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataSetUrlStatisticsRequest {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，data：小程序，component：小程序相关，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算 */
  CostType?: string;
  /** 环境 */
  Env?: string;
  /** 获取package */
  PackageType?: string;
}

declare interface DescribeDataSetUrlStatisticsResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataStaticProjectRequest {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算 */
  CostType?: string;
  /** 来源 */
  Url?: string[];
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataStaticProjectResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataStaticResourceRequest {
  /** 开始时间 */
  StartTime: number;
  /** top：资源top视图，count40x：40X视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算方式 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataStaticResourceResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataStaticUrlRequest {
  /** 开始时间 */
  StartTime: number;
  /** pagepv：性能视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等等 */
  Type: string;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算方式 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataStaticUrlResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataWebVitalsPageRequest {
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 自定义2 */
  ExtSecond?: string;
  /** 浏览器引擎 */
  Engine?: string;
  /** 运营商 */
  Isp?: string;
  /** 来源页面 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 类型暂无 */
  Type?: string;
  /** 品牌 */
  Brand?: string;
  /** 地区 */
  Area?: string;
  /** 版本 */
  VersionNum?: string;
  /** 平台 */
  Platform?: string;
  /** 自定义3 */
  ExtThird?: string;
  /** 自定义1 */
  ExtFirst?: string;
  /** 网络类型 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算 */
  CostType?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataWebVitalsPageResponse {
  /** 返回值 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeErrorRequest {
  /** 日期 */
  Date: string;
  /** 项目ID */
  ID: number;
}

declare interface DescribeErrorResponse {
  /** 内容 */
  Content: string;
  /** 项目ID */
  ID: number;
  /** 时间 */
  CreateTime: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLogExportsRequest {
  /** 项目ID */
  ID: number;
}

declare interface DescribeLogExportsResponse {
  /** 日志导出记录列表 */
  LogExportSet: LogExport[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLogListRequest {
  /** 排序方式 desc asc（必填） */
  Sort: string;
  /** searchlog histogram（必填） */
  ActionType: string;
  /** 项目ID（必填） */
  ID: number;
  /** 开始时间（必填） */
  StartTime?: string;
  /** 单次查询返回的原始日志条数，最大值为100（必填） */
  Limit?: number;
  /** 上下文，加载更多日志时使用，透传上次返回的 Context 值，获取后续的日志内容，总计最多可获取1万条原始日志。过期时间1小时 */
  Context?: string;
  /** 查询语句，参考控制台请求参数，语句长度最大为4096（必填）例："id:120001 AND type:\"log\"" */
  Query?: string;
  /** 结束时间（必填） */
  EndTime?: string;
}

declare interface DescribeLogListResponse {
  /** 返回字符串 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOfflineLogConfigsRequest {
  /** 项目唯一上报 key */
  ProjectKey: string;
}

declare interface DescribeOfflineLogConfigsResponse {
  /** 接口调用信息 */
  Msg: string;
  /** 用户唯一标示数组 */
  UniqueIDSet: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOfflineLogRecordsRequest {
  /** 项目唯一上报 key */
  ProjectKey: string;
}

declare interface DescribeOfflineLogRecordsResponse {
  /** 接口调用信息 */
  Msg: string;
  /** 记录 ID 数组 */
  RecordSet: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOfflineLogsRequest {
  /** 项目唯一上报 key */
  ProjectKey: string;
  /** 离线日志文件 id 列表 */
  FileIDs: string[];
}

declare interface DescribeOfflineLogsResponse {
  /** 接口调用返回信息 */
  Msg: string;
  /** 日志列表 */
  LogSet: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectLimitsRequest {
  /** 项目ID */
  ProjectID: number;
}

declare interface DescribeProjectLimitsResponse {
  /** 上报率数组列表 */
  ProjectLimitSet: ProjectLimit[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectsRequest {
  /** 分页每页数目，整型 */
  Limit: number;
  /** 分页页码，整型 */
  Offset: number;
  /** 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]} */
  Filters?: Filter[];
  /** 该参数已废弃，demo模式请在Filters内注明 */
  IsDemo?: number;
}

declare interface DescribeProjectsResponse {
  /** 列表总数 */
  TotalCount: number;
  /** 项目列表 */
  ProjectSet: RumProject[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePvListRequest {
  /** ID */
  ProjectId: number;
  /** 结束时间 */
  EndTime: string;
  /** 开始时间 */
  StartTime: string;
  /** 获取day：d， 获取min则不填 */
  Dimension?: string;
}

declare interface DescribePvListResponse {
  /** pv列表 */
  ProjectPvSet: RumPvInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReleaseFileSignRequest {
  /** 超时时间，不填默认是 5 分钟 */
  Timeout?: number;
}

declare interface DescribeReleaseFileSignResponse {
  /** 临时密钥key */
  SecretKey: string;
  /** 临时密钥 id */
  SecretID: string;
  /** 临时密钥临时 token */
  SessionToken: string;
  /** 开始时间戳 */
  StartTime: number;
  /** 过期时间戳 */
  ExpiredTime: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeReleaseFilesRequest {
  /** 项目 id */
  ProjectID: number;
  /** 文件版本 */
  FileVersion?: string;
}

declare interface DescribeReleaseFilesResponse {
  /** 文件信息列表 */
  Files: ReleaseFile[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeScoresRequest {
  /** 结束时间 */
  EndTime: string;
  /** 开始时间 */
  StartTime: string;
  /** 项目ID */
  ID?: number;
  /** 该参数已废弃 */
  IsDemo?: number;
}

declare interface DescribeScoresResponse {
  /** 数组 */
  ScoreSet: ScoreInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTawAreasRequest {
  /** 片区Id */
  AreaIds?: number[];
  /** 片区Key */
  AreaKeys?: string[];
  /** 分页Limit */
  Limit?: number;
  /** 片区状态(1=有效，2=无效) */
  AreaStatuses?: number[];
  /** 分页Offset */
  Offset?: number;
}

declare interface DescribeTawAreasResponse {
  /** 片区总数 */
  TotalCount: number;
  /** 片区列表 */
  AreaSet: RumAreaInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTawInstancesRequest {
  /** 计费状态 */
  ChargeStatuses?: number[];
  /** 计费类型 */
  ChargeTypes?: number[];
  /** 分页Limit */
  Limit?: number;
  /** 分页Offset */
  Offset?: number;
  /** 片区Id */
  AreaIds?: number[];
  /** 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=销毁中，8=已销毁) */
  InstanceStatuses?: number[];
  /** 实例Id */
  InstanceIds?: string[];
  /** 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]} */
  Filters?: Filter[];
  /** 该参数已废弃，demo模式请在Filters内注明 */
  IsDemo?: number;
}

declare interface DescribeTawInstancesResponse {
  /** 实例列表 */
  InstanceSet: RumInstanceInfo[];
  /** 实例总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUvListRequest {
  /** ID */
  ProjectId: number;
  /** 结束时间 */
  EndTime: string;
  /** 开始时间 */
  StartTime: string;
  /** 获取day：d， min:m */
  Dimension?: string;
}

declare interface DescribeUvListResponse {
  /** uv列表 */
  ProjectUvSet: RumUvInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeWhitelistsRequest {
  /** 实例instance-ID */
  InstanceID: string;
}

declare interface DescribeWhitelistsResponse {
  /** 白名单列表 */
  WhitelistSet: Whitelist[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 要修改的实例id */
  InstanceId: string;
  /** 新的实例名称(长度最大不超过255) */
  InstanceName?: string;
  /** 新的实例描述(长度最大不超过1024) */
  InstanceDesc?: string;
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyProjectLimitRequest {
  /** 项目ID */
  ProjectID: number;
  /** 项目接口 */
  ProjectInterface?: string;
  /** 上报比例 10代表10% */
  ReportRate?: number;
  /** 上报类型 1：比例 2：上报量 */
  ReportType?: number;
  /** 主键ID */
  ID?: number;
}

declare interface ModifyProjectLimitResponse {
  /** 返回信息 */
  Msg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyProjectRequest {
  /** 项目 id */
  ID: number;
  /** 项目名(可选，不为空且最长为 200) */
  Name?: string;
  /** 项目网页地址(可选，最长为 256) */
  URL?: string;
  /** 项目仓库地址(可选，最长为 256) */
  Repo?: string;
  /** 项目需要转移到的实例 id(可选) */
  InstanceID?: string;
  /** 项目采样率(可选) */
  Rate?: string;
  /** 是否开启聚类(可选) */
  EnableURLGroup?: number;
  /** 项目类型(可接受值为 "web", "mp", "android", "ios", "node", "hippy", "weex", "viola", "rn") */
  Type?: string;
  /** 项目描述(可选，最长为 1000) */
  Desc?: string;
}

declare interface ModifyProjectResponse {
  /** 操作信息 */
  Msg: string;
  /** 项目id */
  ID: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResumeInstanceRequest {
  /** 需要恢复的实例id */
  InstanceId: string;
}

declare interface ResumeInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopInstanceRequest {
  /** 需要停止的实例id */
  InstanceId: string;
}

declare interface StopInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Rum 前端性能监控} */
declare interface Rum {
  (): Versions;
  /** {@link CreateLogExport 创建日志下载任务}({@link CreateLogExportRequest 请求参数}): {@link CreateLogExportResponse 返回参数} */
  CreateLogExport(data: CreateLogExportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLogExportResponse>;
  /** {@link CreateOfflineLogConfig 创建离线日志监听}({@link CreateOfflineLogConfigRequest 请求参数}): {@link CreateOfflineLogConfigResponse 返回参数} */
  CreateOfflineLogConfig(data: CreateOfflineLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOfflineLogConfigResponse>;
  /** {@link CreateProject 创建项目}({@link CreateProjectRequest 请求参数}): {@link CreateProjectResponse 返回参数} */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** {@link CreateReleaseFile 创建发布文件记录}({@link CreateReleaseFileRequest 请求参数}): {@link CreateReleaseFileResponse 返回参数} */
  CreateReleaseFile(data: CreateReleaseFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseFileResponse>;
  /** {@link CreateStarProject 添加星标项目}({@link CreateStarProjectRequest 请求参数}): {@link CreateStarProjectResponse 返回参数} */
  CreateStarProject(data: CreateStarProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStarProjectResponse>;
  /** {@link CreateTawInstance 创建Rum实例}({@link CreateTawInstanceRequest 请求参数}): {@link CreateTawInstanceResponse 返回参数} */
  CreateTawInstance(data: CreateTawInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTawInstanceResponse>;
  /** {@link CreateWhitelist 创建白名单}({@link CreateWhitelistRequest 请求参数}): {@link CreateWhitelistResponse 返回参数} */
  CreateWhitelist(data: CreateWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWhitelistResponse>;
  /** {@link DeleteInstance 删除实例}({@link DeleteInstanceRequest 请求参数}): {@link DeleteInstanceResponse 返回参数} */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
  /** {@link DeleteLogExport 删除日志下载任务}({@link DeleteLogExportRequest 请求参数}): {@link DeleteLogExportResponse 返回参数} */
  DeleteLogExport(data: DeleteLogExportRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLogExportResponse>;
  /** {@link DeleteOfflineLogConfig 删除 rum 离线日志监听}({@link DeleteOfflineLogConfigRequest 请求参数}): {@link DeleteOfflineLogConfigResponse 返回参数} */
  DeleteOfflineLogConfig(data: DeleteOfflineLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOfflineLogConfigResponse>;
  /** {@link DeleteOfflineLogRecord 删除离线日志记录}({@link DeleteOfflineLogRecordRequest 请求参数}): {@link DeleteOfflineLogRecordResponse 返回参数} */
  DeleteOfflineLogRecord(data: DeleteOfflineLogRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOfflineLogRecordResponse>;
  /** {@link DeleteProject 删除 rum 项目}({@link DeleteProjectRequest 请求参数}): {@link DeleteProjectResponse 返回参数} */
  DeleteProject(data: DeleteProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectResponse>;
  /** {@link DeleteReleaseFile 删除发布文件}({@link DeleteReleaseFileRequest 请求参数}): {@link DeleteReleaseFileResponse 返回参数} */
  DeleteReleaseFile(data: DeleteReleaseFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReleaseFileResponse>;
  /** {@link DeleteStarProject 删除星标项目}({@link DeleteStarProjectRequest 请求参数}): {@link DeleteStarProjectResponse 返回参数} */
  DeleteStarProject(data: DeleteStarProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStarProjectResponse>;
  /** {@link DeleteWhitelist 删除白名单}({@link DeleteWhitelistRequest 请求参数}): {@link DeleteWhitelistResponse 返回参数} */
  DeleteWhitelist(data: DeleteWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWhitelistResponse>;
  /** {@link DescribeData 获取QueryData}({@link DescribeDataRequest 请求参数}): {@link DescribeDataResponse 返回参数} */
  DescribeData(data: DescribeDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataResponse>;
  /** {@link DescribeDataCustomUrl 获取DescribeDataCustomUrl信息}({@link DescribeDataCustomUrlRequest 请求参数}): {@link DescribeDataCustomUrlResponse 返回参数} */
  DescribeDataCustomUrl(data: DescribeDataCustomUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataCustomUrlResponse>;
  /** {@link DescribeDataEventUrl 获取DescribeDataEventUrl信息}({@link DescribeDataEventUrlRequest 请求参数}): {@link DescribeDataEventUrlResponse 返回参数} */
  DescribeDataEventUrl(data: DescribeDataEventUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEventUrlResponse>;
  /** {@link DescribeDataFetchProject 获取DescribeDataFetchProject信息（已下线，请使用DescribeDataFetchUrl）}({@link DescribeDataFetchProjectRequest 请求参数}): {@link DescribeDataFetchProjectResponse 返回参数} */
  DescribeDataFetchProject(data: DescribeDataFetchProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchProjectResponse>;
  /** {@link DescribeDataFetchUrl 获取DescribeDataFetchUrl信息}({@link DescribeDataFetchUrlRequest 请求参数}): {@link DescribeDataFetchUrlResponse 返回参数} */
  DescribeDataFetchUrl(data: DescribeDataFetchUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchUrlResponse>;
  /** {@link DescribeDataFetchUrlInfo 获取DescribeDataFetchUrlInfo信息}({@link DescribeDataFetchUrlInfoRequest 请求参数}): {@link DescribeDataFetchUrlInfoResponse 返回参数} */
  DescribeDataFetchUrlInfo(data: DescribeDataFetchUrlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchUrlInfoResponse>;
  /** {@link DescribeDataLogUrlInfo 获取dataloginfo信息}({@link DescribeDataLogUrlInfoRequest 请求参数}): {@link DescribeDataLogUrlInfoResponse 返回参数} */
  DescribeDataLogUrlInfo(data: DescribeDataLogUrlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataLogUrlInfoResponse>;
  /** {@link DescribeDataLogUrlStatistics 获取LogUrlStatistics信息}({@link DescribeDataLogUrlStatisticsRequest 请求参数}): {@link DescribeDataLogUrlStatisticsResponse 返回参数} */
  DescribeDataLogUrlStatistics(data: DescribeDataLogUrlStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataLogUrlStatisticsResponse>;
  /** {@link DescribeDataPerformancePage 获取PerformancePage信息}({@link DescribeDataPerformancePageRequest 请求参数}): {@link DescribeDataPerformancePageResponse 返回参数} */
  DescribeDataPerformancePage(data: DescribeDataPerformancePageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPerformancePageResponse>;
  /** {@link DescribeDataPerformanceProject 获取PerformanceProject信息（已停用，请使用DescribeDataPerformancePage）}({@link DescribeDataPerformanceProjectRequest 请求参数}): {@link DescribeDataPerformanceProjectResponse 返回参数} */
  DescribeDataPerformanceProject(data: DescribeDataPerformanceProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPerformanceProjectResponse>;
  /** {@link DescribeDataPvUrlInfo 获取PvUrlInfo信息}({@link DescribeDataPvUrlInfoRequest 请求参数}): {@link DescribeDataPvUrlInfoResponse 返回参数} */
  DescribeDataPvUrlInfo(data: DescribeDataPvUrlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPvUrlInfoResponse>;
  /** {@link DescribeDataPvUrlStatistics 获取DescribeDataPvUrlStatistics信息}({@link DescribeDataPvUrlStatisticsRequest 请求参数}): {@link DescribeDataPvUrlStatisticsResponse 返回参数} */
  DescribeDataPvUrlStatistics(data: DescribeDataPvUrlStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPvUrlStatisticsResponse>;
  /** {@link DescribeDataReportCount 获取上报量}({@link DescribeDataReportCountRequest 请求参数}): {@link DescribeDataReportCountResponse 返回参数} */
  DescribeDataReportCount(data: DescribeDataReportCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataReportCountResponse>;
  /** {@link DescribeDataSetUrlStatistics 获取DescribeDataSetUrlStatistics信息}({@link DescribeDataSetUrlStatisticsRequest 请求参数}): {@link DescribeDataSetUrlStatisticsResponse 返回参数} */
  DescribeDataSetUrlStatistics(data: DescribeDataSetUrlStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSetUrlStatisticsResponse>;
  /** {@link DescribeDataStaticProject 获取DescribeDataStaticProject信息}({@link DescribeDataStaticProjectRequest 请求参数}): {@link DescribeDataStaticProjectResponse 返回参数} */
  DescribeDataStaticProject(data: DescribeDataStaticProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticProjectResponse>;
  /** {@link DescribeDataStaticResource 获取DescribeDataStaticResource信息}({@link DescribeDataStaticResourceRequest 请求参数}): {@link DescribeDataStaticResourceResponse 返回参数} */
  DescribeDataStaticResource(data: DescribeDataStaticResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticResourceResponse>;
  /** {@link DescribeDataStaticUrl 获取DescribeDataStaticUrl信息}({@link DescribeDataStaticUrlRequest 请求参数}): {@link DescribeDataStaticUrlResponse 返回参数} */
  DescribeDataStaticUrl(data: DescribeDataStaticUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticUrlResponse>;
  /** {@link DescribeDataWebVitalsPage 获取DescribeDataWebVitalsPage信息}({@link DescribeDataWebVitalsPageRequest 请求参数}): {@link DescribeDataWebVitalsPageResponse 返回参数} */
  DescribeDataWebVitalsPage(data: DescribeDataWebVitalsPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataWebVitalsPageResponse>;
  /** {@link DescribeError 获取首页错误信息}({@link DescribeErrorRequest 请求参数}): {@link DescribeErrorResponse 返回参数} */
  DescribeError(data: DescribeErrorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeErrorResponse>;
  /** {@link DescribeLogExports 获取日志下载任务列表}({@link DescribeLogExportsRequest 请求参数}): {@link DescribeLogExportsResponse 返回参数} */
  DescribeLogExports(data: DescribeLogExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogExportsResponse>;
  /** {@link DescribeLogList 获取日志列表}({@link DescribeLogListRequest 请求参数}): {@link DescribeLogListResponse 返回参数} */
  DescribeLogList(data: DescribeLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogListResponse>;
  /** {@link DescribeOfflineLogConfigs 获取设置的离线日志监听配置}({@link DescribeOfflineLogConfigsRequest 请求参数}): {@link DescribeOfflineLogConfigsResponse 返回参数} */
  DescribeOfflineLogConfigs(data: DescribeOfflineLogConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfflineLogConfigsResponse>;
  /** {@link DescribeOfflineLogRecords 获取所有离线日志记录(最多100条)}({@link DescribeOfflineLogRecordsRequest 请求参数}): {@link DescribeOfflineLogRecordsResponse 返回参数} */
  DescribeOfflineLogRecords(data: DescribeOfflineLogRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfflineLogRecordsResponse>;
  /** {@link DescribeOfflineLogs 获取对应离线日志}({@link DescribeOfflineLogsRequest 请求参数}): {@link DescribeOfflineLogsResponse 返回参数} */
  DescribeOfflineLogs(data: DescribeOfflineLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfflineLogsResponse>;
  /** {@link DescribeProjectLimits 获取项目上报率列表}({@link DescribeProjectLimitsRequest 请求参数}): {@link DescribeProjectLimitsResponse 返回参数} */
  DescribeProjectLimits(data: DescribeProjectLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectLimitsResponse>;
  /** {@link DescribeProjects 获取项目列表}({@link DescribeProjectsRequest 请求参数}): {@link DescribeProjectsResponse 返回参数} */
  DescribeProjects(data: DescribeProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectsResponse>;
  /** {@link DescribePvList 获取PV列表}({@link DescribePvListRequest 请求参数}): {@link DescribePvListResponse 返回参数} */
  DescribePvList(data: DescribePvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePvListResponse>;
  /** {@link DescribeReleaseFileSign 获取存储临时密钥}({@link DescribeReleaseFileSignRequest 请求参数}): {@link DescribeReleaseFileSignResponse 返回参数} */
  DescribeReleaseFileSign(data?: DescribeReleaseFileSignRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseFileSignResponse>;
  /** {@link DescribeReleaseFiles 获取项目对应sourcemap文件列表}({@link DescribeReleaseFilesRequest 请求参数}): {@link DescribeReleaseFilesResponse 返回参数} */
  DescribeReleaseFiles(data: DescribeReleaseFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseFilesResponse>;
  /** {@link DescribeScores 获取首页分数列表}({@link DescribeScoresRequest 请求参数}): {@link DescribeScoresResponse 返回参数} */
  DescribeScores(data: DescribeScoresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScoresResponse>;
  /** {@link DescribeTawAreas 查询片区信息}({@link DescribeTawAreasRequest 请求参数}): {@link DescribeTawAreasResponse 返回参数} */
  DescribeTawAreas(data?: DescribeTawAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTawAreasResponse>;
  /** {@link DescribeTawInstances 查询实例信息}({@link DescribeTawInstancesRequest 请求参数}): {@link DescribeTawInstancesResponse 返回参数} */
  DescribeTawInstances(data?: DescribeTawInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTawInstancesResponse>;
  /** {@link DescribeUvList 获取UV列表}({@link DescribeUvListRequest 请求参数}): {@link DescribeUvListResponse 返回参数} */
  DescribeUvList(data: DescribeUvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUvListResponse>;
  /** {@link DescribeWhitelists 获取白名单列表}({@link DescribeWhitelistsRequest 请求参数}): {@link DescribeWhitelistsResponse 返回参数} */
  DescribeWhitelists(data: DescribeWhitelistsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhitelistsResponse>;
  /** {@link ModifyInstance 修改实例信息}({@link ModifyInstanceRequest 请求参数}): {@link ModifyInstanceResponse 返回参数} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** {@link ModifyProject 修改项目}({@link ModifyProjectRequest 请求参数}): {@link ModifyProjectResponse 返回参数} */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
  /** {@link ModifyProjectLimit 新增修改限流}({@link ModifyProjectLimitRequest 请求参数}): {@link ModifyProjectLimitResponse 返回参数} */
  ModifyProjectLimit(data: ModifyProjectLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectLimitResponse>;
  /** {@link ResumeInstance 恢复实例}({@link ResumeInstanceRequest 请求参数}): {@link ResumeInstanceResponse 返回参数} */
  ResumeInstance(data: ResumeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeInstanceResponse>;
  /** {@link StopInstance 停止实例}({@link StopInstanceRequest 请求参数}): {@link StopInstanceResponse 返回参数} */
  StopInstance(data: StopInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StopInstanceResponse>;
}

export declare type Versions = ["2021-06-22"];

export default Rum;