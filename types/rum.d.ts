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
  /** 时间 */
  CreateTime?: string | null;
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  ID?: number;
  /** 项目唯一key */
  Key?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTawInstanceRequest {
  /** 片区Id，(至少大于0) */
  AreaId: number;
  /** 计费类型, (1=后付费) */
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
  /** 预付费资源包类型(仅预付费需要) */
  ResourcePackageType?: number;
  /** 预付费资源包数量(仅预付费需要) */
  ResourcePackageNum?: number;
}

declare interface CreateTawInstanceResponse {
  /** 实例Id */
  InstanceId: string;
  /** 预付费订单 id */
  DealName: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 白名单ID */
  ID: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstanceRequest {
  /** 需要删除的实例id */
  InstanceId: string;
}

declare interface DeleteInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectRequest {
  /** 需要删除的项目 ID */
  ID: number;
}

declare interface DeleteProjectResponse {
  /** 操作信息 */
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReleaseFileRequest {
  /** 文件 id */
  ID: number;
}

declare interface DeleteReleaseFileResponse {
  /** 接口请求返回字符串 */
  Msg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Msg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppDimensionMetricsRequest {
  /** app 项目ID */
  ProjectID: number;
  /** 查询的表名 */
  From: string;
  /** 查询指标 fields */
  Fields: string;
  /** 查询的过滤条件 */
  Filter: string;
  /** 查询简单过滤条件 */
  FilterSimple?: string;
  /** group by 条件 */
  GroupBy?: string[];
  /** order by 条件 */
  OrderBy?: string[];
  /** limit 参数 */
  Limit?: number;
  /** offset 参数 */
  Offset?: number;
  /** 业务上下文参数 */
  BusinessContext?: string;
}

declare interface DescribeAppDimensionMetricsResponse {
  /** 查询数据返回 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppMetricsDataRequest {
  /** app 项目ID */
  ProjectID: number;
  /** 查询的表名 */
  From: string;
  /** 查询指标 field */
  Fields: string;
  /** 查询的过滤条件 */
  Filter: string;
  /** 查询简单过滤条件 */
  FilterSimple?: string;
  /** group by 条件 */
  GroupBy?: string[];
  /** order by 条件 */
  OrderBy?: string[];
  /** limit 参数 */
  Limit?: number;
  /** offset 参数 */
  Offset?: number;
  /** group by 参数 */
  GroupByModifier?: string;
}

declare interface DescribeAppMetricsDataResponse {
  /** 查询数据返回 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppSingleCaseDetailListRequest {
  /** app 项目ID */
  ProjectID: number;
  /** 查询的表名 */
  From: string;
  /** 查询指标 field */
  Fields: string;
  /** 查询的过滤条件 */
  Filter: string;
  /** 查询简单过滤条件 */
  FilterSimple?: string;
  /** group by 条件 */
  GroupBy?: string[];
  /** order by 条件 */
  OrderBy?: string[];
  /** limit 参数 */
  Limit?: number;
  /** offset 参数 */
  Offset?: number;
}

declare interface DescribeAppSingleCaseDetailListResponse {
  /** 查询数据返回 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppSingleCaseListRequest {
  /** app 项目 ID */
  ProjectID: number;
  /** 查询的表名 */
  From: string;
  /** 查询指标 field */
  Fields: string;
  /** 查询的过滤条件 */
  Filter: string;
  /** 查询简单过滤条件 */
  FilterSimple?: string;
  /** group by 条件 */
  GroupBy?: string[];
  /** order by 条件 */
  OrderBy?: string[];
  /** limit 参数 */
  Limit?: number;
  /** offset 参数 */
  Offset?: number;
}

declare interface DescribeAppSingleCaseListResponse {
  /** 查询数据返回 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLogExportsRequest {
  /** 项目ID */
  ID: number;
}

declare interface DescribeLogExportsResponse {
  /** 日志导出记录列表 */
  LogExportSet: LogExport[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectLimitsRequest {
  /** 项目ID */
  ProjectID: number;
}

declare interface DescribeProjectLimitsResponse {
  /** 上报率数组列表 */
  ProjectLimitSet?: ProjectLimit[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 项目列表 */
  ProjectSet?: RumProject[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReleaseFileSignRequest {
  /** 超时时间，不填默认是 5 分钟 */
  Timeout?: number;
  /** bucket类型，不填默认web，2:app */
  FileType?: number;
}

declare interface DescribeReleaseFileSignResponse {
  /** 临时密钥key */
  SecretKey?: string;
  /** 临时密钥 id */
  SecretID?: string;
  /** 临时密钥临时 token */
  SessionToken?: string;
  /** 开始时间戳 */
  StartTime?: number;
  /** 过期时间戳 */
  ExpiredTime?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Files?: ReleaseFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRumGroupLogRequest {
  /** 排序方式 desc asc（必填） */
  OrderBy: string;
  /** 开始时间（必填） */
  StartTime: string;
  /** 单次查询返回的原始日志条数，最大值为100（必填） */
  Limit: number;
  /** 页数，第几页 */
  Page: number;
  /** 查询语句，参考控制台请求参数，语句长度最大为4096（必填） */
  Query: string;
  /** 结束时间（必填） */
  EndTime: string;
  /** 项目ID（必填） */
  ID: number;
  /** 聚合字段 */
  GroupField: string;
}

declare interface DescribeRumGroupLogResponse {
  /** 返回字符串 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRumLogExportRequest {
  /** 导出标识name */
  Name: string;
  /** 开始时间（必填） */
  StartTime: string;
  /** 查询语句，参考控制台请求参数，语句长度最大为4096（必填） */
  Query: string;
  /** 结束时间（必填） */
  EndTime: string;
  /** 项目ID（必填） */
  ID: number;
  /** field条件 */
  Fields?: string[];
}

declare interface DescribeRumLogExportResponse {
  /** 返回字符串 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRumLogExportsRequest {
  /** 页面大小 */
  PageSize: number;
  /** 页数，第几页 */
  PageNum: number;
  /** 项目ID（必填） */
  ID: number;
}

declare interface DescribeRumLogExportsResponse {
  /** 返回字符串 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRumLogListRequest {
  /** 排序方式 desc asc（必填） */
  OrderBy: string;
  /** 开始时间（必填）格式为时间戳 毫秒 */
  StartTime: string;
  /** 单次查询返回的原始日志条数，最大值为100（必填） */
  Limit: number;
  /** 页数，第几页 */
  Page: number;
  /** 查询语句，参考控制台请求参数，语句长度最大为4096（必填） */
  Query: string;
  /** 结束时间（必填）格式为时间戳 毫秒 */
  EndTime: string;
  /** 项目ID（必填） */
  ID: number;
}

declare interface DescribeRumLogListResponse {
  /** 返回字符串 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRumStatsLogListRequest {
  /** 开始时间（必填） */
  StartTime: string;
  /** 单次查询返回的原始日志条数，最大值为100（必填） */
  Limit: number;
  /** 查询语句，参考控制台请求参数，语句长度最大为4096（必填） */
  Query: string;
  /** 结束时间（必填） */
  EndTime: string;
  /** 项目ID（必填） */
  ID: number;
}

declare interface DescribeRumStatsLogListResponse {
  /** 返回字符串 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 实例状态(1=创建中，2=运行中，3=异常，4=重启中，5=停止中，6=已停止，7=销毁中，8=已销毁), 该参数已废弃，请在Filters内注明 */
  InstanceStatuses?: number[];
  /** 实例Id, 该参数已废弃，请在Filters内注明 */
  InstanceIds?: string[];
  /** 过滤参数；demo模式传{"Name": "IsDemo", "Values":["1"]} */
  Filters?: Filter[];
  /** 该参数已废弃，demo模式请在Filters内注明 */
  IsDemo?: number;
}

declare interface DescribeTawInstancesResponse {
  /** 实例列表 */
  InstanceSet?: RumInstanceInfo[];
  /** 实例总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWhitelistsRequest {
  /** 实例instance-ID */
  InstanceID: string;
}

declare interface DescribeWhitelistsResponse {
  /** 白名单列表 */
  WhitelistSet: Whitelist[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Msg?: string;
  /** 项目id */
  ID?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeInstanceRequest {
  /** 需要恢复的实例id */
  InstanceId: string;
}

declare interface ResumeInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeProjectRequest {
  /** 项目 id */
  ProjectId: number;
}

declare interface ResumeProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopInstanceRequest {
  /** 需要停止的实例id */
  InstanceId: string;
}

declare interface StopInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopProjectRequest {
  /** 项目 id */
  ProjectId: number;
}

declare interface StopProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Rum 前端性能监控} */
declare interface Rum {
  (): Versions;
  /** 创建日志下载任务 {@link CreateLogExportRequest} {@link CreateLogExportResponse} */
  CreateLogExport(data: CreateLogExportRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLogExportResponse>;
  /** 创建离线日志监听 {@link CreateOfflineLogConfigRequest} {@link CreateOfflineLogConfigResponse} */
  CreateOfflineLogConfig(data: CreateOfflineLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOfflineLogConfigResponse>;
  /** 创建 RUM 应用 {@link CreateProjectRequest} {@link CreateProjectResponse} */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** 创建发布文件记录 {@link CreateReleaseFileRequest} {@link CreateReleaseFileResponse} */
  CreateReleaseFile(data: CreateReleaseFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseFileResponse>;
  /** 添加星标应用 {@link CreateStarProjectRequest} {@link CreateStarProjectResponse} */
  CreateStarProject(data: CreateStarProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStarProjectResponse>;
  /** 创建 RUM 业务系统 {@link CreateTawInstanceRequest} {@link CreateTawInstanceResponse} */
  CreateTawInstance(data: CreateTawInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTawInstanceResponse>;
  /** 创建白名单 {@link CreateWhitelistRequest} {@link CreateWhitelistResponse} */
  CreateWhitelist(data: CreateWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWhitelistResponse>;
  /** 删除 RUM 业务系统 {@link DeleteInstanceRequest} {@link DeleteInstanceResponse} */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
  /** 删除日志下载任务 {@link DeleteLogExportRequest} {@link DeleteLogExportResponse} */
  DeleteLogExport(data: DeleteLogExportRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLogExportResponse>;
  /** 删除 rum 离线日志监听 {@link DeleteOfflineLogConfigRequest} {@link DeleteOfflineLogConfigResponse} */
  DeleteOfflineLogConfig(data: DeleteOfflineLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOfflineLogConfigResponse>;
  /** 删除离线日志记录 {@link DeleteOfflineLogRecordRequest} {@link DeleteOfflineLogRecordResponse} */
  DeleteOfflineLogRecord(data: DeleteOfflineLogRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOfflineLogRecordResponse>;
  /** 删除 RUM 应用 {@link DeleteProjectRequest} {@link DeleteProjectResponse} */
  DeleteProject(data: DeleteProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectResponse>;
  /** 删除发布文件 {@link DeleteReleaseFileRequest} {@link DeleteReleaseFileResponse} */
  DeleteReleaseFile(data: DeleteReleaseFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReleaseFileResponse>;
  /** 删除星标应用 {@link DeleteStarProjectRequest} {@link DeleteStarProjectResponse} */
  DeleteStarProject(data: DeleteStarProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStarProjectResponse>;
  /** 删除白名单 {@link DeleteWhitelistRequest} {@link DeleteWhitelistResponse} */
  DeleteWhitelist(data: DeleteWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWhitelistResponse>;
  /** 查询 app 多维分析数据 {@link DescribeAppDimensionMetricsRequest} {@link DescribeAppDimensionMetricsResponse} */
  DescribeAppDimensionMetrics(data: DescribeAppDimensionMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppDimensionMetricsResponse>;
  /** 获取 app 监控指标数据 {@link DescribeAppMetricsDataRequest} {@link DescribeAppMetricsDataResponse} */
  DescribeAppMetricsData(data: DescribeAppMetricsDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppMetricsDataResponse>;
  /** 查询 app 监控个例样本详情列表 {@link DescribeAppSingleCaseDetailListRequest} {@link DescribeAppSingleCaseDetailListResponse} */
  DescribeAppSingleCaseDetailList(data: DescribeAppSingleCaseDetailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppSingleCaseDetailListResponse>;
  /** 查询 app 监控个例聚合列表 {@link DescribeAppSingleCaseListRequest} {@link DescribeAppSingleCaseListResponse} */
  DescribeAppSingleCaseList(data: DescribeAppSingleCaseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppSingleCaseListResponse>;
  /** 获取QueryData {@link DescribeDataRequest} {@link DescribeDataResponse} */
  DescribeData(data: DescribeDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataResponse>;
  /** 获取DescribeDataCustomUrl信息 {@link DescribeDataCustomUrlRequest} {@link DescribeDataCustomUrlResponse} */
  DescribeDataCustomUrl(data: DescribeDataCustomUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataCustomUrlResponse>;
  /** 获取DescribeDataEventUrl信息 {@link DescribeDataEventUrlRequest} {@link DescribeDataEventUrlResponse} */
  DescribeDataEventUrl(data: DescribeDataEventUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEventUrlResponse>;
  /** 获取DescribeDataFetchProject信息（已下线，请使用DescribeDataFetchUrl） {@link DescribeDataFetchProjectRequest} {@link DescribeDataFetchProjectResponse} */
  DescribeDataFetchProject(data: DescribeDataFetchProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchProjectResponse>;
  /** 获取DescribeDataFetchUrl信息 {@link DescribeDataFetchUrlRequest} {@link DescribeDataFetchUrlResponse} */
  DescribeDataFetchUrl(data: DescribeDataFetchUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchUrlResponse>;
  /** 获取DescribeDataFetchUrlInfo信息 {@link DescribeDataFetchUrlInfoRequest} {@link DescribeDataFetchUrlInfoResponse} */
  DescribeDataFetchUrlInfo(data: DescribeDataFetchUrlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchUrlInfoResponse>;
  /** 获取dataloginfo信息 {@link DescribeDataLogUrlInfoRequest} {@link DescribeDataLogUrlInfoResponse} */
  DescribeDataLogUrlInfo(data: DescribeDataLogUrlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataLogUrlInfoResponse>;
  /** 获取LogUrlStatistics信息 {@link DescribeDataLogUrlStatisticsRequest} {@link DescribeDataLogUrlStatisticsResponse} */
  DescribeDataLogUrlStatistics(data: DescribeDataLogUrlStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataLogUrlStatisticsResponse>;
  /** 获取PerformancePage信息 {@link DescribeDataPerformancePageRequest} {@link DescribeDataPerformancePageResponse} */
  DescribeDataPerformancePage(data: DescribeDataPerformancePageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPerformancePageResponse>;
  /** 获取PerformanceProject信息（已停用，请使用DescribeDataPerformancePage） {@link DescribeDataPerformanceProjectRequest} {@link DescribeDataPerformanceProjectResponse} */
  DescribeDataPerformanceProject(data: DescribeDataPerformanceProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPerformanceProjectResponse>;
  /** 获取PvUrlInfo信息 {@link DescribeDataPvUrlInfoRequest} {@link DescribeDataPvUrlInfoResponse} */
  DescribeDataPvUrlInfo(data: DescribeDataPvUrlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPvUrlInfoResponse>;
  /** 获取DescribeDataPvUrlStatistics信息 {@link DescribeDataPvUrlStatisticsRequest} {@link DescribeDataPvUrlStatisticsResponse} */
  DescribeDataPvUrlStatistics(data: DescribeDataPvUrlStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPvUrlStatisticsResponse>;
  /** 获取上报量 {@link DescribeDataReportCountRequest} {@link DescribeDataReportCountResponse} */
  DescribeDataReportCount(data: DescribeDataReportCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataReportCountResponse>;
  /** 获取DescribeDataSetUrlStatistics信息 {@link DescribeDataSetUrlStatisticsRequest} {@link DescribeDataSetUrlStatisticsResponse} */
  DescribeDataSetUrlStatistics(data: DescribeDataSetUrlStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSetUrlStatisticsResponse>;
  /** 获取DescribeDataStaticProject信息 {@link DescribeDataStaticProjectRequest} {@link DescribeDataStaticProjectResponse} */
  DescribeDataStaticProject(data: DescribeDataStaticProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticProjectResponse>;
  /** 获取DescribeDataStaticResource信息 {@link DescribeDataStaticResourceRequest} {@link DescribeDataStaticResourceResponse} */
  DescribeDataStaticResource(data: DescribeDataStaticResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticResourceResponse>;
  /** 获取DescribeDataStaticUrl信息 {@link DescribeDataStaticUrlRequest} {@link DescribeDataStaticUrlResponse} */
  DescribeDataStaticUrl(data: DescribeDataStaticUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticUrlResponse>;
  /** 获取DescribeDataWebVitalsPage信息 {@link DescribeDataWebVitalsPageRequest} {@link DescribeDataWebVitalsPageResponse} */
  DescribeDataWebVitalsPage(data: DescribeDataWebVitalsPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataWebVitalsPageResponse>;
  /** 获取首页错误信息 {@link DescribeErrorRequest} {@link DescribeErrorResponse} */
  DescribeError(data: DescribeErrorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeErrorResponse>;
  /** 获取日志下载任务列表 {@link DescribeLogExportsRequest} {@link DescribeLogExportsResponse} */
  DescribeLogExports(data: DescribeLogExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogExportsResponse>;
  /** 获取日志列表(已下线，请用DescribeRumLogList) {@link DescribeLogListRequest} {@link DescribeLogListResponse} */
  DescribeLogList(data: DescribeLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLogListResponse>;
  /** 获取设置的离线日志监听配置 {@link DescribeOfflineLogConfigsRequest} {@link DescribeOfflineLogConfigsResponse} */
  DescribeOfflineLogConfigs(data: DescribeOfflineLogConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfflineLogConfigsResponse>;
  /** 获取所有离线日志记录(最多100条) {@link DescribeOfflineLogRecordsRequest} {@link DescribeOfflineLogRecordsResponse} */
  DescribeOfflineLogRecords(data: DescribeOfflineLogRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfflineLogRecordsResponse>;
  /** 获取对应离线日志 {@link DescribeOfflineLogsRequest} {@link DescribeOfflineLogsResponse} */
  DescribeOfflineLogs(data: DescribeOfflineLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfflineLogsResponse>;
  /** 获取应用上报抽样信息 {@link DescribeProjectLimitsRequest} {@link DescribeProjectLimitsResponse} */
  DescribeProjectLimits(data: DescribeProjectLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectLimitsResponse>;
  /** 获取 RUM 应用列表 {@link DescribeProjectsRequest} {@link DescribeProjectsResponse} */
  DescribeProjects(data: DescribeProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectsResponse>;
  /** 获取PV列表 {@link DescribePvListRequest} {@link DescribePvListResponse} */
  DescribePvList(data: DescribePvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePvListResponse>;
  /** 获取存储临时密钥 {@link DescribeReleaseFileSignRequest} {@link DescribeReleaseFileSignResponse} */
  DescribeReleaseFileSign(data?: DescribeReleaseFileSignRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseFileSignResponse>;
  /** 获取应用对应sourcemap文件列表 {@link DescribeReleaseFilesRequest} {@link DescribeReleaseFilesResponse} */
  DescribeReleaseFiles(data: DescribeReleaseFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseFilesResponse>;
  /** 获取Rum日志聚合信息 {@link DescribeRumGroupLogRequest} {@link DescribeRumGroupLogResponse} */
  DescribeRumGroupLog(data: DescribeRumGroupLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumGroupLogResponse>;
  /** 导出Rum日志列表 {@link DescribeRumLogExportRequest} {@link DescribeRumLogExportResponse} */
  DescribeRumLogExport(data: DescribeRumLogExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogExportResponse>;
  /** 获取Rum日志导出列表 {@link DescribeRumLogExportsRequest} {@link DescribeRumLogExportsResponse} */
  DescribeRumLogExports(data: DescribeRumLogExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogExportsResponse>;
  /** 获取Rum日志列表 {@link DescribeRumLogListRequest} {@link DescribeRumLogListResponse} */
  DescribeRumLogList(data: DescribeRumLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogListResponse>;
  /** 获取Rum分钟级日志列表 {@link DescribeRumStatsLogListRequest} {@link DescribeRumStatsLogListResponse} */
  DescribeRumStatsLogList(data: DescribeRumStatsLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumStatsLogListResponse>;
  /** 获取首页分数列表 {@link DescribeScoresRequest} {@link DescribeScoresResponse} */
  DescribeScores(data: DescribeScoresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScoresResponse>;
  /** 查询片区信息 {@link DescribeTawAreasRequest} {@link DescribeTawAreasResponse} */
  DescribeTawAreas(data?: DescribeTawAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTawAreasResponse>;
  /** 查询 RUM 业务系统信息 {@link DescribeTawInstancesRequest} {@link DescribeTawInstancesResponse} */
  DescribeTawInstances(data?: DescribeTawInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTawInstancesResponse>;
  /** 获取UV列表 {@link DescribeUvListRequest} {@link DescribeUvListResponse} */
  DescribeUvList(data: DescribeUvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUvListResponse>;
  /** 获取白名单列表 {@link DescribeWhitelistsRequest} {@link DescribeWhitelistsResponse} */
  DescribeWhitelists(data: DescribeWhitelistsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhitelistsResponse>;
  /** 修改 RUM 业务系统 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** 修改 RUM 应用信息 {@link ModifyProjectRequest} {@link ModifyProjectResponse} */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
  /** 新增修改限流 {@link ModifyProjectLimitRequest} {@link ModifyProjectLimitResponse} */
  ModifyProjectLimit(data: ModifyProjectLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectLimitResponse>;
  /** 恢复 RUM 业务系统 {@link ResumeInstanceRequest} {@link ResumeInstanceResponse} */
  ResumeInstance(data: ResumeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeInstanceResponse>;
  /** 恢复 RUM 应用 {@link ResumeProjectRequest} {@link ResumeProjectResponse} */
  ResumeProject(data: ResumeProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeProjectResponse>;
  /** 停止RUM业务系统 {@link StopInstanceRequest} {@link StopInstanceResponse} */
  StopInstance(data: StopInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StopInstanceResponse>;
  /** 停止应用上报 {@link StopProjectRequest} {@link StopProjectResponse} */
  StopProject(data: StopProjectRequest, config?: AxiosRequestConfig): AxiosPromise<StopProjectResponse>;
}

export declare type Versions = ["2021-06-22"];

export default Rum;
