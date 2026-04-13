/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** BugLY比较结构体 */
declare interface CompareCondition {
  /** App版本 */
  AppVersion?: string;
  /** 筛选条件 */
  Filters?: Filters;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

/** 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等· 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。· 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 一个或者多个过滤值。 */
  Values?: string[];
  /** 过滤键的名称。 */
  Name?: string;
}

/** BugLY筛选结构体 */
declare interface Filters {
  /** 是否反转 */
  IsReversed?: boolean;
  /** 键 */
  Key?: string;
  /** 名称 */
  Name?: string;
  /** 运算符 */
  Operator?: string;
  /** 类型 */
  Type?: number;
  /** 值 */
  Values?: string[];
}

/** 旁路kafka配置 */
declare interface Kafka {
  /** 1：开启0：关闭 */
  EnableKafka?: number;
  /** host地址 */
  KafkaHost?: string;
  /** topic */
  KafkaTopic?: string;
  /** 版本 */
  KafkaVersion?: string;
  /** username */
  SaslUserName?: string;
  /** password */
  SaslPassword?: string;
  /** ssl */
  SaslMechanism?: string;
  /** 默认算子id为0新增算子一旦算子新增成功会返回正确的算子id值 */
  SinkId?: number;
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
  Version?: string;
  /** 文件唯一 key */
  FileKey?: string;
  /** 文件名 */
  FileName?: string;
  /** 文件哈希值 */
  FileHash?: string;
  /** 文件 id */
  ID?: number;
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
  InstanceStatus?: number;
  /** 片区Id */
  AreaId?: number;
  /** 标签列表 */
  Tags?: Tag[];
  /** 实例Id */
  InstanceId?: string;
  /** 集群Id */
  ClusterId?: number;
  /** 实例描述 */
  InstanceDesc?: string;
  /** 计费状态(1=使用中，2=已过期，3=已销毁，4=分配中，5=分配失败) */
  ChargeStatus?: number;
  /** 计费类型(1=免费版，2=预付费，3=后付费) */
  ChargeType?: number;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 数据保留时间(天) */
  DataRetentionDays?: number;
  /** 实例名称 */
  InstanceName?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 实例类型 1:原web相关类型 2:app端类型 */
  InstanceType?: number;
}

/** Rum 项目信息 */
declare interface RumProject {
  /** 项目名 */
  Name?: string;
  /** 创建者 id */
  Creator?: string;
  /** 实例 id */
  InstanceID?: string;
  /** 项目类型 */
  Type?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 项目仓库地址 */
  Repo?: string;
  /** 项目网址地址 */
  URL?: string;
  /** 项目采样频率 */
  Rate?: string;
  /** 项目唯一key（长度 12 位） */
  Key?: string;
  /** 是否开启url聚类 */
  EnableURLGroup?: number;
  /** 实例名 */
  InstanceName?: string;
  /** 项目 ID */
  ID?: number;
  /** 实例 key */
  InstanceKey?: string;
  /** 项目描述 */
  Desc?: string;
  /** 是否星标 1:是 0:否 */
  IsStar?: number;
  /** 项目状态(1 创建中，2 运行中，3 异常，4 重启中，5 停止中，6 已停止， 7 销毁中，8 已销毁) */
  ProjectStatus?: number;
  /** 日志接入点，用户忽略。 */
  AccessPoint?: string;
  /** kafka旁路配置信息 */
  Kafka?: Kafka;
}

/** rum 日志对象 */
declare interface RumPvInfo {
  /** 项目ID */
  ProjectId?: number;
  /** pv访问量 */
  Pv?: string;
  /** 时间 */
  CreateTime?: string;
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
  StaticDuration?: string;
  /** pv */
  PagePv?: string;
  /** 失败 */
  ApiFail?: string;
  /** 请求 */
  ApiNum?: string;
  /** fail */
  StaticFail?: string;
  /** 项目id */
  ProjectID?: number;
  /** uv */
  PageUv?: string;
  /** 请求次数 */
  ApiDuration?: string;
  /** 项目总分 */
  Score?: string;
  /** error */
  PageError?: string;
  /** num */
  StaticNum?: string;
  /** num */
  RecordNum?: number;
  /** Duration */
  PageDuration?: string;
  /** 时间 */
  CreateTime?: string;
  /** 页面性能评分 */
  PagePerformanceScore?: string;
  /** js错误评分 */
  JsErrorScore?: string;
  /** API性能评分 */
  ApiPerformanceScore?: string;
  /** API可用性评分 */
  ApiAvaliableScore?: string;
  /** 静态资源性能评分 */
  StaticPerformanceScore?: string;
  /** 静态资源可用性评分 */
  StaticAvaliableScore?: string;
}

/** project Score分数实体 */
declare interface ScoreInfoV2 {
  /** 项目id */
  ProjectID?: number;
  /** 项目总分 */
  Score?: number;
  /** API性能评分 */
  ApiPerformanceScore?: number;
  /** API可用性评分 */
  ApiAvailableScore?: number;
  /** API调用总数 */
  ApiNum?: number;
  /** API失败次数 */
  ApiFail?: number;
  /** API平均持续时间 */
  ApiDuration?: number;
  /** 页面性能评分 */
  PagePerformanceScore?: number;
  /** 页面浏览量 */
  PagePv?: number;
  /** 独立访客数 */
  PageUv?: number;
  /** 页面错误数 */
  PageError?: number;
  /** 首屏时间 */
  PageDuration?: number;
  /** 平均 LCP */
  PageLCP?: number;
  /** 平均 FID */
  PageFID?: number;
  /** 平均 CLS */
  PageCLS?: number;
  /** 平均 FCP */
  PageFCP?: number;
  /** 平均 INP */
  PageINP?: number;
  /** JavaScript错误评分 */
  JsErrorScore?: number;
  /** 静态资源可用性评分 */
  StaticAvailableScore?: number;
  /** 静态资源性能评分 */
  StaticPerformanceScore?: number;
  /** 静态资源请求总数 */
  StaticNum?: number;
  /** 静态资源加载失败数 */
  StaticFail?: number;
  /** 静态资源加载时间 */
  StaticDuration?: number;
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
  Remark?: string;
  /** 实例ID */
  InstanceID?: string;
  /** 截止时间 */
  Ttl?: string;
  /** 白名单自增ID */
  ID?: string;
  /** 业务唯一标识 */
  WhitelistUin?: string;
  /** 创建者ID */
  CreateUser?: string;
  /** aid标识 */
  Aid?: string;
  /** 创建时间 */
  CreateTime?: string;
}

declare interface CreateReleaseFileRequest {
  /** 项目 id */
  ProjectID: number;
  /** 文件信息列表 */
  Files: ReleaseFile[];
}

declare interface CreateReleaseFileResponse {
  /** 调用结果 */
  Msg?: string;
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

declare interface CreateWhitelistRequest {
  /** 实例ID：taw-123 */
  InstanceID: string;
  /** 备注（暂未作字节数限制） */
  Remark: string;
  /** uin：业务方标识 */
  WhitelistUin: string;
  /** 业务方标识 */
  Aid?: string;
}

declare interface CreateWhitelistResponse {
  /** 消息 */
  Msg?: string;
  /** 白名单ID */
  ID?: number;
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
  /** 实例ID：****-1792 */
  InstanceID: string;
  /** 项目ID */
  ID: number;
}

declare interface DeleteStarProjectResponse {
  /** 返回消息,请求成功才会返回，出现异常默认为null */
  Msg?: string;
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
  Msg?: string;
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
  Data?: string;
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
  Data?: string;
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
  Data?: string;
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
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationExitReportDetailRequest {
  /** 产品Id */
  ProductId: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 formlist 的值 */
  ParamToken?: string;
  /** 问题Id */
  ClientIdentify?: string;
  /** 开始时间 */
  StartEventTime?: number;
  /** 结束时间 */
  EndEventTime?: number;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeApplicationExitReportDetailResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationExitReportListRequest {
  /** 产品Id */
  ProductId: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 formlist 的值 */
  ParamToken?: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListString?: string;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页展示最大数量 */
  PageSize?: number;
  /** 排序字段 */
  SortField?: string;
  /** 排序类型 */
  SortType?: string;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeApplicationExitReportListResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataBridgeUrlV2Request {
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
  /** url名称 */
  Name?: string;
  /** http状态码 */
  Status?: string;
  /** retcode */
  Ret?: string;
  /** 网络状态 */
  NetStatus?: string;
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataBridgeUrlV2Response {
  /** 返回值 */
  Result?: string;
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
  /** 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（使用 percentile2 计算分位数）；"avg" 表示均值（使用 avg 计算）。 */
  CostType?: string;
  /** 自定义测速的key的值 */
  Url?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataCustomUrlResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataCustomUrlV2Request {
  /** 开始时间 */
  StartTime: number;
  /** top：资源top视图，allcount：性能视图，day：14天数据，condition：条件列表，pagepv：性能视图，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等 */
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
  /** 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataCustomUrlV2Response {
  /** 返回值 */
  Result?: string;
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
  /** netType | 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。也可通过 Type=condition（show tag values）查询当前数据集中的实际可选值。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataEventUrlV2Request {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，condition：条件列表，ckuv：获取uv趋势，ckpv：获取pv趋势，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等 */
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
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 筛选条件 */
  Name?: string;
  /** 环境 */
  Env?: string;
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataEventUrlV2Response {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataFetchProjectRequest {
  /** 开始时间，示例值：1625454840 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等 */
  Type: string;
  /** 结束时间，示例值：1625454840 */
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
  /** 日志等级（1表示白名单日志，2表示一般日志，4表示错误日志，8表示Promise 错误，16表示Ajax 请求异常，32表示JS 加载异常，64表示图片加载异常，128表示css 加载异常，256表示console.error，512表示音视频资源异常，1024表示retcode 异常，2048表示aegis report，4096表示PV日志，8192表示自定义事件，16384表示小程序 页面不存在，32768表示websocket错误，65536表示js bridge错误） */
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
  /** 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
  /** HTTP 状态码（tag 值）：用于过滤字段 status；取值一般为 200/301/404/500 等，也可配合 4xx/5xx 统计逻辑使用 */
  Status?: string;
  /** retcode */
  Ret?: string;
}

declare interface DescribeDataFetchProjectResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataFetchUrlInfoRequest {
  /** 开始时间 */
  StartTime: number;
  /** Type	是	String	无枚举值。此接口不使用 Type 做分支判断，SQL 固定 group by "url"，Type 字段传任何值不影响查询。 */
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
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataFetchUrlInfoResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataFetchUrlRequest {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，pagepv：pv视图，day：14天数据，count40x：40X视图，count50x：50X视图，count5xand4x：40∑50视图，top：资源top视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等等 */
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
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
  /** HTTP 状态码（tag 值）：用于过滤字段 status；支持 4xx（status =~ /4[0-9]{2}/）和 5xx（status =~ /5[0-9]{2}/）等错误码统计。 */
  Status?: string;
  /** retcode */
  Ret?: string;
  /** 网络状态(tag 值):用于过滤/聚合字段 netStatus；枚举值：0(正常)、1(弱网)、2(断网)、3(其他)。 */
  NetStatus?: string;
}

declare interface DescribeDataFetchUrlResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataFetchUrlV2Request {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，pagepv：pv视图，day：14天数据，count40x：40X视图，count50x：50X视图，count5xand4x：40∑50视图，top：资源top视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等 */
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
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataFetchUrlV2Response {
  /** 返回值 */
  Result?: string;
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
  Result?: string;
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
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 环境区分 */
  Env?: string;
  /** js异常信息 */
  ErrorMsg?: string;
}

declare interface DescribeDataLogUrlStatisticsResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataLogUrlStatisticsV2Request {
  /** 开始时间 */
  StartTime: number;
  /** analysis：异常分析，compare：异常列表对比，allcount：性能视图，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等 */
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
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 环境区分 */
  Env?: string;
  /** js异常信息 */
  ErrorMsg?: string;
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataLogUrlStatisticsV2Response {
  /** 返回值 */
  Result?: string;
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
  /** pagepv：pv视图，allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等 */
  Type: string;
  /** 日志等级 */
  Level?: string;
  /** 运营商 */
  Isp?: string;
  /** 地区 */
  Area?: string;
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
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
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  /** 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。 */
  CostType?: string;
  /** 环境变量 */
  Env?: string;
  /** 网络状态(tag 值):用于过滤/聚合字段 netStatus；枚举值：0(正常)、1(弱网)、2(断网)、3(其他)。 */
  NetStatus?: string;
  /** 是否返回webvitals数据 */
  WebVitals?: boolean;
}

declare interface DescribeDataPerformancePageResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataPerformancePageV2Request {
  /** 项目ID */
  ID: number;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** pagepv：pv视图，allcount：性能视图，falls：页面加载瀑布图，samp：首屏时间，day：14天数据，nettype：网络/平台视图，performance：页面性能TOP视图，version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：ISP视图/地区视图/浏览器视图等 */
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
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  /** 是否返回webvitals数据 */
  WebVitals?: boolean;
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataPerformancePageV2Response {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataPvUrlInfoRequest {
  /** 开始时间 */
  StartTime: number;
  /** 查询类型（string）：当前后端实现固定按 from 聚合统计，未使用该字段（保留字段，传值不会影响结果）。 */
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
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataPvUrlStatisticsRequest {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，vp：性能，ckuv：uv，ckpv：pv，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等 */
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
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 环境 */
  Env?: string;
  /** group by 参数值枚举1:1m 2:5m 3:30m 4:1h 5:1d */
  GroupByType?: number;
  /** 1: 查询智研0: 走旧逻辑，已下线，勿使用 */
  IsNewData?: number;
}

declare interface DescribeDataPvUrlStatisticsResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataPvUrlStatisticsV2Request {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，vp：性能，ckuv：uv，ckpv：pv，condition：条件列表，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等 */
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
  /** 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 环境 */
  Env?: string;
  /** group by 参数值枚举1:1m 2:5m 3:30m 4:1h 5:1d */
  GroupByType?: number;
  /** 1: 查询智研0: 走旧逻辑，已下线，勿使用 */
  IsNewData?: number;
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataPvUrlStatisticsV2Response {
  /** 返回值 */
  Result?: string;
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
  /** 上报类型（custom，event，log，miniProgramData，performance，pv，speed，webvitals） */
  ReportType?: string;
  /** 实例ID */
  InstanceID?: string;
}

declare interface DescribeDataReportCountResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataReportCountV2Request {
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 项目ID */
  ID?: number;
  /** 上报类型（custom，event，log，miniProgramData，performance，pv，speed，webvitals） */
  ReportType?: string;
  /** 实例ID */
  InstanceID?: string;
}

declare interface DescribeDataReportCountV2Response {
  /** 返回值 */
  Result?: string;
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
  Result?: string;
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
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时/数据量口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。 */
  CostType?: string;
  /** 环境 */
  Env?: string;
  /** 小程序包类型（tag 值）：用于过滤字段 type（请求参数名为 PackageType）；取值由上报数据决定，可通过 Type=condition（show tag values）获取可选值集合。 */
  PackageType?: string;
}

declare interface DescribeDataSetUrlStatisticsResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataSetUrlStatisticsV2Request {
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
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataSetUrlStatisticsV2Response {
  /** 返回值 */
  Result?: string;
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
  /** 日志等级（1表示白名单日志，2表示一般日志，4表示错误日志，8表示Promise 错误，16表示Ajax 请求异常，32表示JS 加载异常，64表示图片加载异常，128表示css 加载异常，256表示console.error，512表示音视频资源异常，1024表示retcode 异常，2048表示aegis report，4096表示PV日志，8192表示自定义事件，16384表示小程序 页面不存在，32768表示websocket错误，65536表示js bridge错误） */
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
  /** 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。 */
  CostType?: string;
  /** 来源 */
  Url?: string[];
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataStaticProjectResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataStaticProjectV2Request {
  /** 开始时间 */
  StartTime: number;
  /** allcount：性能视图，day：14天数据，condition：条件列表，area：请求速度分布，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图/ext1视图等 */
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
  /** 日志等级（1表示白名单日志，2表示一般日志，4表示错误日志，8表示Promise 错误，16表示Ajax 请求异常，32表示JS 加载异常，64表示图片加载异常，128表示css 加载异常，256表示console.error，512表示音视频资源异常，1024表示retcode 异常，2048表示aegis report，4096表示PV日志，8192表示自定义事件，16384表示小程序 页面不存在，32768表示websocket错误，65536表示js bridge错误） */
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
  /** 网络类型（1,2,3,4,5,100），1表示WIFI, 2表示2G, 3表示3G, 4表示4G, 5表示5G, 6表示6G, 100表示未知。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataStaticProjectV2Response {
  /** 返回值 */
  Result?: string;
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
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataStaticResourceResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataStaticResourceV2Request {
  /** 开始时间 */
  StartTime: number;
  /** top：资源top视图，count40x：40X视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等 */
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
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataStaticResourceV2Response {
  /** 返回值 */
  Result?: string;
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
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。 */
  CostType?: string;
  /** 来源 */
  Url?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataStaticUrlResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataStaticUrlV2Request {
  /** 开始时间 */
  StartTime: number;
  /** pagepv：性能视图，nettype/version/platform/isp/region/device/browser/ext1/ext2/ext3/ret/status/from/url/env/：网络平台视图/Version视图/设备视图/ISP视图/地区视图/浏览器视图//ext1视图等 */
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
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
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
  /** 自定义4 */
  ExtFourth?: string;
  /** 自定义5 */
  ExtFifth?: string;
  /** 自定义6 */
  ExtSixth?: string;
  /** 自定义7 */
  ExtSeventh?: string;
  /** 自定义8 */
  ExtEighth?: string;
  /** 自定义9 */
  ExtNinth?: string;
  /** 自定义10 */
  ExtTenth?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataStaticUrlV2Response {
  /** 返回值 */
  Result?: string;
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
  /** 查询维度：from=按页面来源(from)聚合输出；其他值/空值=输出整体汇总。 */
  From?: string;
  /** 日志等级 */
  Level?: string;
  /** 按页面来源分组（group by from），返回每个页面的 LCP/FID/CLS/FCP */
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
  /** 网络类型(tag 值):用于过滤/聚合字段 netType；枚举值：1(WiFi)、2(2G)、3(3G)、4(4G)、5(5G)、6(6G)、100(未知网络)。 */
  NetType?: string;
  /** 机型 */
  Device?: string;
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** Web Vitals 口径："50"/"75"/"90"/"95"/"99"/"99.5" 分别表示 TP50/TP75/TP90/TP95/TP99/TP99.5（percentile2）；"avg" 表示均值（avg）。 */
  CostType?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeDataWebVitalsPageResponse {
  /** 返回值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataWebVitalsPageV2Request {
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
  /** 显示是否海外,1表示海外，0表示非海外；默认值为空，查询所有。 */
  IsAbroad?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 耗时计算 */
  CostType?: string;
  /** 环境 */
  Env?: string;
  /** 时间段 */
  Granularity?: string;
}

declare interface DescribeDataWebVitalsPageV2Response {
  /** 返回值 */
  Result?: string;
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
  Content?: string;
  /** 项目ID */
  ID?: number;
  /** 时间 */
  CreateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExceptionDetailRequest {
  /** 产品Id */
  ProductId: string;
  /** 消息唯一标识 */
  ClientIdentify?: string;
  /** 集群堆栈类型 */
  ClusterStackType?: number;
  /** 特征 */
  Feature?: string;
  /** 问题类型 */
  IssueType?: number;
  /** 事件开始时间 */
  StartEventTime?: number;
  /** 事件结束时间 */
  EndEventTime?: number;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeExceptionDetailResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExceptionReportListRequest {
  /** 产品Id */
  ProductId?: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListString?: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 form_list 的值 */
  ParamToken?: string;
  /** 问题类型 */
  IssueType?: number;
  /** 排序字段 */
  SortField?: string;
  /** 排序方式 */
  SortType?: string;
  /** 特征 */
  Feature?: string;
  /** 每页数目 */
  PageSize?: number;
  /** 页码 */
  PageNumber?: number;
  /** 拓展字段 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeExceptionReportListResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFOOMMallocProblemDetailRequest {
  /** 产品Id */
  ProductId: string;
  /** 消息唯一标识 */
  ClientIdentify?: string;
  /** 特征 */
  Feature?: string;
  /** 事件开始时间 */
  StartEventTime?: number;
  /** 事件结束时间 */
  EndEventTime?: number;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeFOOMMallocProblemDetailResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFOOMMallocProblemListRequest {
  /** 产品Id */
  ProductId: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 formlist 的值 */
  ParamToken?: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListString?: string;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页展示最大数量 */
  PageSize?: number;
  /** 排序字段 */
  SortField?: string;
  /** 排序类型 */
  SortType?: string;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeFOOMMallocProblemListResponse {
  /** 返回值 */
  Data?: string;
  /** 消息 */
  Message?: string;
  /** 状态码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFOOMMallocReportListRequest {
  /** 产品Id */
  ProductId: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListString?: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 formlist 的值 */
  ParamToken?: string;
  /** 特征 */
  Feature?: string;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页展示最大数量 */
  PageSize?: number;
  /** 排序字段 */
  SortField?: string;
  /** 排序类型 */
  SortType?: string;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeFOOMMallocReportListResponse {
  /** 返回值 */
  Data?: string;
  /** 消息 */
  Message?: string;
  /** 状态码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFOOMProblemDetailRequest {
  /** 产品Id */
  ProductId: string;
  /** 消息唯一标识 */
  ClientIdentify?: string;
  /** 特征 */
  Feature?: string;
  /** 事件开始时间 */
  StartEventTime?: number;
  /** 事件结束时间 */
  EndEventTime?: number;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeFOOMProblemDetailResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFOOMProblemListRequest {
  /** 产品Id */
  ProductId: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 formlist 的值 */
  ParamToken?: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListString?: string;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页展示最大数量 */
  PageSize?: number;
  /** 排序字段 */
  SortField?: string;
  /** 排序类型 */
  SortType?: string;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeFOOMProblemListResponse {
  /** 返回值 */
  Data?: string;
  /** 消息 */
  Message?: string;
  /** 状态码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFOOMReportListRequest {
  /** 产品Id */
  ProductId: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListString?: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 formlist 的值 */
  ParamToken?: string;
  /** 特征 */
  Feature?: string;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页展示最大数量 */
  PageSize?: number;
  /** 排序字段 */
  SortField?: string;
  /** 排序类型 */
  SortType?: string;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeFOOMReportListResponse {
  /** 返回值 */
  Data?: string;
  /** 消息 */
  Message?: string;
  /** 状态码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssuesDistributionRequest {
  /** 产品Id */
  ProductId?: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListString?: string;
  /** 分布维度是自定义维度时，填‘user_custom’ */
  DimType?: string;
  /** 维度，e.g. os_version, app_version, model等 */
  Dimension?: string;
  /** 数字类型字段的区间范围 */
  Intervals?: number[];
  /** 提供给前端使用，当填写本字段时，会覆盖 form_list 的值 */
  ParamToken?: string;
  /** 问题Id */
  IssueId?: string;
  /** 问题类型 */
  IssueType?: number;
  /** 限制返回的个数，默认返回所有值 */
  ParamLimit?: number;
  /** 键 */
  MapKey?: string;
  /** 名称 */
  MapName?: string;
  /** 指标类型 */
  MetricType?: number;
  /** 每页数目 */
  PageSize?: number;
  /** 页码 */
  PageNumber?: number;
  /** 用户自定义维度key */
  UserCustomKey?: string;
  /** 拓展字段 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeIssuesDistributionResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssuesListRequest {
  /** 产品Id */
  ProductId?: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormList?: string;
  /** 接口调试专用，对比模式下条件A，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListA?: string;
  /** 接口调试专用，对比模式下条件B，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListB?: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 form_list 的值 */
  ParamToken?: string;
  /** 问题类型 */
  IssueType?: number;
  /** 排序字段 */
  SortField?: string;
  /** 排序方式 */
  SortType?: string;
  /** 每页数目 */
  PageSize?: number;
  /** 页码 */
  PageNumber?: number;
  /** 问题对比列表模式下，用于标识是按照sort_field字段的A值排序还是B值还是ratio值 */
  SortABRatio?: string;
  /** 模式：false:问题列表模式，true:对比列表模式 */
  Compare?: boolean;
  /** 对比状态 0:所有 1:新增 2：遗留 3:已解决 */
  CompareStatus?: number;
  /** 拓展字段 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeIssuesListResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssuesStatisticsTrendRequest {
  /** 产品Id */
  ProductId: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 form_list 的值 */
  ParamToken?: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormList?: string;
  /** 问题Id */
  IssueId?: string;
  /** 问题类型 */
  IssueType?: number;
  /** 时间窗口 */
  TimeWindow?: number;
  /** 累计值 */
  TotalSize?: boolean;
  /** 无 */
  Stat?: number;
  /** 指标类型 */
  MetricType?: number;
  /** 拓展字段 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
  /** 无 */
  TrendStat?: number;
}

declare interface DescribeIssuesStatisticsTrendResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLagANRProblemAccountDetailRequest {
  /** 产品Id */
  ProductId: string;
  /** 消息唯一标识 */
  ClientIdentify?: string;
  /** 特征 */
  Feature?: string;
  /** 事件开始时间 */
  StartEventTime?: number;
  /** 事件结束时间 */
  EndEventTime?: number;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeLagANRProblemAccountDetailResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLagANRProblemFeatureAccountsRequest {
  /** 产品Id */
  ProductId: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListString?: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 formlist 的值 */
  ParamToken?: string;
  /** 问题特征 */
  Feature?: string;
  /** 排序字段 */
  SortField?: string;
  /** 排序类型 */
  SortType?: string;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页展示最大数量 */
  PageSize?: number;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeLagANRProblemFeatureAccountsResponse {
  /** 返回值 */
  Data?: string;
  /** 消息 */
  Message?: string;
  /** 状态码 */
  Code?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLagANRProblemListRequest {
  /** 产品Id */
  ProductId: string;
  /** 提供给前端使用，当填写本字段时，会覆盖 formlist 的值 */
  ParamToken?: string;
  /** 接口调试专用，当 token 为空时，以这里的 value 作为筛选表单信息 */
  FormListString?: string;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页展示最大数量 */
  PageSize?: number;
  /** 排序字段 */
  SortField?: string;
  /** 排序类型 */
  SortType?: string;
  /** 拓展数据 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeLagANRProblemListResponse {
  /** 返回值 */
  Data?: string;
  /** 消息 */
  Message?: string;
  /** 状态码 */
  Code?: number;
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
  /** 对PV指标的查询维度。获取day：d， 获取min则不填。 */
  Dimension?: string;
}

declare interface DescribePvListResponse {
  /** pv列表 */
  ProjectPvSet?: RumPvInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReleaseFileSignRequest {
  /** 超时时间，不填默认是 5 分钟 */
  Timeout?: number;
  /** bucket类型，不填默认1:web，2:app */
  FileType?: number;
  /** 获取临时签名的bucket是境内还是境外（1表示境外，其它表示境内） */
  Site?: number;
  /** ProjectID */
  ID?: number;
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
  /** 查询过滤条件（根据sourcemap的文件名模糊匹配） */
  FileName?: string;
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
  Result?: string;
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
  Result?: string;
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
  Result?: string;
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
  Result?: string;
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
  /** 项目 ID 列表 */
  IDList?: number[];
}

declare interface DescribeScoresResponse {
  /** 数组 */
  ScoreSet?: ScoreInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScoresV2Request {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 项目 ID 列表 */
  IDList?: number[];
  /** 查询粒度，hour 或 day */
  Type?: string;
  /** 环境 */
  Env?: string;
}

declare interface DescribeScoresV2Response {
  /** 项目得分数组 */
  ScoreSet?: ScoreInfoV2[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTawAreasRequest {
  /** 片区Id */
  AreaIds?: number[];
  /** 片区Key */
  AreaKeys?: string[];
  /** 分页Limit，默认根据AreaKeys和AreaStatuses参数查询所有。 */
  Limit?: number;
  /** 片区状态(1=有效，2=无效) */
  AreaStatuses?: number[];
  /** 分页Offset，默认根据AreaKeys和AreaStatuses参数查询所有。 */
  Offset?: number;
}

declare interface DescribeTawAreasResponse {
  /** 片区总数 */
  TotalCount?: number;
  /** 片区列表 */
  AreaSet?: RumAreaInfo[];
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

declare interface DescribeTokenRequest {
  /** 筛选条件 */
  FormListString?: string;
  /** 仅对比模式下填写，筛选条件A */
  FormListAString?: string;
  /** 仅对比模式下填写，筛选条件B */
  FormListBString?: string;
  /** 请求头 */
  RequestHeader?: string;
  /** 拓展字段 */
  ExtraData?: string;
}

declare interface DescribeTokenResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopIssuesRequest {
  /** 产品Id */
  ProductId: string;
  /** 需要对比的查询条件，没有则不填 */
  Compare?: CompareCondition;
  /** 查询条件 */
  Condition?: CompareCondition;
  /** 问题类型 */
  IssueType?: number;
  /** 排序字段 */
  SortField?: string;
  /** 排序方式 */
  SortType?: string;
  /** topN */
  TopNum?: number;
  /** 拓展字段 */
  ExtraData?: string;
  /** 请求头 */
  RequestHeader?: string;
}

declare interface DescribeTopIssuesResponse {
  /** 返回值 */
  Data?: string;
  /** 状态码 */
  Code?: number;
  /** 消息 */
  Message?: string;
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
  /** 取值为[log speed performance webvitals pv event custom miniProgramData]其中之一 */
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
  Msg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProjectRequest {
  /** 项目 id */
  ID: number;
  /** 应用名称(可选，不为空且最长为 200字符) */
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
  /** 应用描述(可选，最长为 1000字符) */
  Desc?: string;
  /** 启动kafka配置 */
  EnableKafka?: number;
  /** kafka_host */
  KafkaHost?: string;
  /** topic */
  KafkaTopic?: string;
  /** kafka_version */
  KafkaVersion?: string;
  /** kafka_username */
  SaslUserName?: string;
  /** kafka_pwd */
  SaslPassword?: string;
  /** SaslMechanism */
  SaslMechanism?: string;
  /** sink_id，日知汇算子id */
  SinkId?: number;
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
  /** 修改是否包括白名单 */
  IsModifyAll?: boolean;
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
  /** 修改是否包括白名单 */
  IsModifyAll?: boolean;
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
  /** 创建发布文件记录 {@link CreateReleaseFileRequest} {@link CreateReleaseFileResponse} */
  CreateReleaseFile(data: CreateReleaseFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseFileResponse>;
  /** 添加星标应用 {@link CreateStarProjectRequest} {@link CreateStarProjectResponse} */
  CreateStarProject(data: CreateStarProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStarProjectResponse>;
  /** 创建白名单 {@link CreateWhitelistRequest} {@link CreateWhitelistResponse} */
  CreateWhitelist(data: CreateWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWhitelistResponse>;
  /** 删除 RUM 业务系统 {@link DeleteInstanceRequest} {@link DeleteInstanceResponse} */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
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
  /** 【融合版】获取异常退出分析个例详情 {@link DescribeApplicationExitReportDetailRequest} {@link DescribeApplicationExitReportDetailResponse} */
  DescribeApplicationExitReportDetail(data: DescribeApplicationExitReportDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationExitReportDetailResponse>;
  /** 【融合版】获取异常退出分析个例列表 {@link DescribeApplicationExitReportListRequest} {@link DescribeApplicationExitReportListResponse} */
  DescribeApplicationExitReportList(data: DescribeApplicationExitReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationExitReportListResponse>;
  /** 获取QueryData {@link DescribeDataRequest} {@link DescribeDataResponse} */
  DescribeData(data: DescribeDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataResponse>;
  /** 获取DescribeDataBridgeUrlV2信息 {@link DescribeDataBridgeUrlV2Request} {@link DescribeDataBridgeUrlV2Response} */
  DescribeDataBridgeUrlV2(data: DescribeDataBridgeUrlV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataBridgeUrlV2Response>;
  /** 获取DescribeDataCustomUrl信息 {@link DescribeDataCustomUrlRequest} {@link DescribeDataCustomUrlResponse} */
  DescribeDataCustomUrl(data: DescribeDataCustomUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataCustomUrlResponse>;
  /** 获取DescribeDataCustomUrlV2信息 {@link DescribeDataCustomUrlV2Request} {@link DescribeDataCustomUrlV2Response} */
  DescribeDataCustomUrlV2(data: DescribeDataCustomUrlV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataCustomUrlV2Response>;
  /** 获取DescribeDataEventUrl信息 {@link DescribeDataEventUrlRequest} {@link DescribeDataEventUrlResponse} */
  DescribeDataEventUrl(data: DescribeDataEventUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEventUrlResponse>;
  /** 获取DescribeDataEventUrl信息V2 {@link DescribeDataEventUrlV2Request} {@link DescribeDataEventUrlV2Response} */
  DescribeDataEventUrlV2(data: DescribeDataEventUrlV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataEventUrlV2Response>;
  /** 获取DescribeDataFetchProject信息（已下线，请使用DescribeDataFetchUrl） {@link DescribeDataFetchProjectRequest} {@link DescribeDataFetchProjectResponse} */
  DescribeDataFetchProject(data: DescribeDataFetchProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchProjectResponse>;
  /** 获取DescribeDataFetchUrl信息 {@link DescribeDataFetchUrlRequest} {@link DescribeDataFetchUrlResponse} */
  DescribeDataFetchUrl(data: DescribeDataFetchUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchUrlResponse>;
  /** 获取DescribeDataFetchUrlInfo信息 {@link DescribeDataFetchUrlInfoRequest} {@link DescribeDataFetchUrlInfoResponse} */
  DescribeDataFetchUrlInfo(data: DescribeDataFetchUrlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchUrlInfoResponse>;
  /** 获取DescribeDataFetchUrlV2信息 {@link DescribeDataFetchUrlV2Request} {@link DescribeDataFetchUrlV2Response} */
  DescribeDataFetchUrlV2(data: DescribeDataFetchUrlV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataFetchUrlV2Response>;
  /** 获取dataloginfo信息 {@link DescribeDataLogUrlInfoRequest} {@link DescribeDataLogUrlInfoResponse} */
  DescribeDataLogUrlInfo(data: DescribeDataLogUrlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataLogUrlInfoResponse>;
  /** 获取LogUrlStatistics信息 {@link DescribeDataLogUrlStatisticsRequest} {@link DescribeDataLogUrlStatisticsResponse} */
  DescribeDataLogUrlStatistics(data: DescribeDataLogUrlStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataLogUrlStatisticsResponse>;
  /** 获取LogUrlStatistics信息V2 {@link DescribeDataLogUrlStatisticsV2Request} {@link DescribeDataLogUrlStatisticsV2Response} */
  DescribeDataLogUrlStatisticsV2(data: DescribeDataLogUrlStatisticsV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataLogUrlStatisticsV2Response>;
  /** 获取PerformancePage信息 {@link DescribeDataPerformancePageRequest} {@link DescribeDataPerformancePageResponse} */
  DescribeDataPerformancePage(data: DescribeDataPerformancePageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPerformancePageResponse>;
  /** 获取PerformancePage信息V2 {@link DescribeDataPerformancePageV2Request} {@link DescribeDataPerformancePageV2Response} */
  DescribeDataPerformancePageV2(data: DescribeDataPerformancePageV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPerformancePageV2Response>;
  /** 获取PvUrlInfo信息 {@link DescribeDataPvUrlInfoRequest} {@link DescribeDataPvUrlInfoResponse} */
  DescribeDataPvUrlInfo(data: DescribeDataPvUrlInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPvUrlInfoResponse>;
  /** 获取DescribeDataPvUrlStatistics信息 {@link DescribeDataPvUrlStatisticsRequest} {@link DescribeDataPvUrlStatisticsResponse} */
  DescribeDataPvUrlStatistics(data: DescribeDataPvUrlStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPvUrlStatisticsResponse>;
  /** 获取DescribeDataPvUrlStatistics信息V2 {@link DescribeDataPvUrlStatisticsV2Request} {@link DescribeDataPvUrlStatisticsV2Response} */
  DescribeDataPvUrlStatisticsV2(data: DescribeDataPvUrlStatisticsV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataPvUrlStatisticsV2Response>;
  /** 获取上报量 {@link DescribeDataReportCountRequest} {@link DescribeDataReportCountResponse} */
  DescribeDataReportCount(data: DescribeDataReportCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataReportCountResponse>;
  /** 获取上报量v2 {@link DescribeDataReportCountV2Request} {@link DescribeDataReportCountV2Response} */
  DescribeDataReportCountV2(data: DescribeDataReportCountV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataReportCountV2Response>;
  /** 获取DescribeDataSetUrlStatistics信息 {@link DescribeDataSetUrlStatisticsRequest} {@link DescribeDataSetUrlStatisticsResponse} */
  DescribeDataSetUrlStatistics(data: DescribeDataSetUrlStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSetUrlStatisticsResponse>;
  /** 获取DescribeDataSetUrlStatisticsV2信息 {@link DescribeDataSetUrlStatisticsV2Request} {@link DescribeDataSetUrlStatisticsV2Response} */
  DescribeDataSetUrlStatisticsV2(data: DescribeDataSetUrlStatisticsV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSetUrlStatisticsV2Response>;
  /** 获取DescribeDataStaticProject信息 {@link DescribeDataStaticProjectRequest} {@link DescribeDataStaticProjectResponse} */
  DescribeDataStaticProject(data: DescribeDataStaticProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticProjectResponse>;
  /** 获取DescribeDataStaticProjectV2信息 {@link DescribeDataStaticProjectV2Request} {@link DescribeDataStaticProjectV2Response} */
  DescribeDataStaticProjectV2(data: DescribeDataStaticProjectV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticProjectV2Response>;
  /** 获取DescribeDataStaticResource信息 {@link DescribeDataStaticResourceRequest} {@link DescribeDataStaticResourceResponse} */
  DescribeDataStaticResource(data: DescribeDataStaticResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticResourceResponse>;
  /** 获取DescribeDataStaticResourceV2信息 {@link DescribeDataStaticResourceV2Request} {@link DescribeDataStaticResourceV2Response} */
  DescribeDataStaticResourceV2(data: DescribeDataStaticResourceV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticResourceV2Response>;
  /** 获取DescribeDataStaticUrl信息 {@link DescribeDataStaticUrlRequest} {@link DescribeDataStaticUrlResponse} */
  DescribeDataStaticUrl(data: DescribeDataStaticUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticUrlResponse>;
  /** 获取DescribeDataStaticUrlV2信息 {@link DescribeDataStaticUrlV2Request} {@link DescribeDataStaticUrlV2Response} */
  DescribeDataStaticUrlV2(data: DescribeDataStaticUrlV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataStaticUrlV2Response>;
  /** 获取DescribeDataWebVitalsPage信息 {@link DescribeDataWebVitalsPageRequest} {@link DescribeDataWebVitalsPageResponse} */
  DescribeDataWebVitalsPage(data: DescribeDataWebVitalsPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataWebVitalsPageResponse>;
  /** 获取DescribeDataWebVitalsPageV2信息 {@link DescribeDataWebVitalsPageV2Request} {@link DescribeDataWebVitalsPageV2Response} */
  DescribeDataWebVitalsPageV2(data: DescribeDataWebVitalsPageV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeDataWebVitalsPageV2Response>;
  /** 获取首页错误信息 {@link DescribeErrorRequest} {@link DescribeErrorResponse} */
  DescribeError(data: DescribeErrorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeErrorResponse>;
  /** 【融合版】获取异常问题详情数据 {@link DescribeExceptionDetailRequest} {@link DescribeExceptionDetailResponse} */
  DescribeExceptionDetail(data: DescribeExceptionDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExceptionDetailResponse>;
  /** 【融合版】获取异常(崩溃 错误 安卓anr 安卓foom)个例列表 {@link DescribeExceptionReportListRequest} {@link DescribeExceptionReportListResponse} */
  DescribeExceptionReportList(data?: DescribeExceptionReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExceptionReportListResponse>;
  /** 【融合版】FOOM内存分配问题详情 {@link DescribeFOOMMallocProblemDetailRequest} {@link DescribeFOOMMallocProblemDetailResponse} */
  DescribeFOOMMallocProblemDetail(data: DescribeFOOMMallocProblemDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFOOMMallocProblemDetailResponse>;
  /** 【融合版】获取FOOM内存分配问题列表数据 {@link DescribeFOOMMallocProblemListRequest} {@link DescribeFOOMMallocProblemListResponse} */
  DescribeFOOMMallocProblemList(data: DescribeFOOMMallocProblemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFOOMMallocProblemListResponse>;
  /** 【融合版】FOOM内存分配问题个例列表 {@link DescribeFOOMMallocReportListRequest} {@link DescribeFOOMMallocReportListResponse} */
  DescribeFOOMMallocReportList(data: DescribeFOOMMallocReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFOOMMallocReportListResponse>;
  /** 【融合版】获取FOOM个例详情数据 {@link DescribeFOOMProblemDetailRequest} {@link DescribeFOOMProblemDetailResponse} */
  DescribeFOOMProblemDetail(data: DescribeFOOMProblemDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFOOMProblemDetailResponse>;
  /** 【融合版】获取FOOM问题列表数据 {@link DescribeFOOMProblemListRequest} {@link DescribeFOOMProblemListResponse} */
  DescribeFOOMProblemList(data: DescribeFOOMProblemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFOOMProblemListResponse>;
  /** 【融合版】获取FOOM个例列表 {@link DescribeFOOMReportListRequest} {@link DescribeFOOMReportListResponse} */
  DescribeFOOMReportList(data: DescribeFOOMReportListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFOOMReportListResponse>;
  /** 【融合版】获取问题指定维度下的分布数据 {@link DescribeIssuesDistributionRequest} {@link DescribeIssuesDistributionResponse} */
  DescribeIssuesDistribution(data?: DescribeIssuesDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssuesDistributionResponse>;
  /** 【融合版】获取问题列表数据 {@link DescribeIssuesListRequest} {@link DescribeIssuesListResponse} */
  DescribeIssuesList(data?: DescribeIssuesListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssuesListResponse>;
  /** 【融合版】获取问题趋势数据 {@link DescribeIssuesStatisticsTrendRequest} {@link DescribeIssuesStatisticsTrendResponse} */
  DescribeIssuesStatisticsTrend(data: DescribeIssuesStatisticsTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssuesStatisticsTrendResponse>;
  /** 【融合版】获取卡顿ANR问题个例详情 {@link DescribeLagANRProblemAccountDetailRequest} {@link DescribeLagANRProblemAccountDetailResponse} */
  DescribeLagANRProblemAccountDetail(data: DescribeLagANRProblemAccountDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLagANRProblemAccountDetailResponse>;
  /** 【融合版】获取卡顿ANR问题个例列表 {@link DescribeLagANRProblemFeatureAccountsRequest} {@link DescribeLagANRProblemFeatureAccountsResponse} */
  DescribeLagANRProblemFeatureAccounts(data: DescribeLagANRProblemFeatureAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLagANRProblemFeatureAccountsResponse>;
  /** 【融合版】获取卡顿ANR问题列表 {@link DescribeLagANRProblemListRequest} {@link DescribeLagANRProblemListResponse} */
  DescribeLagANRProblemList(data: DescribeLagANRProblemListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLagANRProblemListResponse>;
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
  /** 获取首页分数列表V2 {@link DescribeScoresV2Request} {@link DescribeScoresV2Response} */
  DescribeScoresV2(data: DescribeScoresV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeScoresV2Response>;
  /** 查询片区信息 {@link DescribeTawAreasRequest} {@link DescribeTawAreasResponse} */
  DescribeTawAreas(data?: DescribeTawAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTawAreasResponse>;
  /** 查询 RUM 业务系统信息 {@link DescribeTawInstancesRequest} {@link DescribeTawInstancesResponse} */
  DescribeTawInstances(data?: DescribeTawInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTawInstancesResponse>;
  /** 【融合版】获取查询参数的token {@link DescribeTokenRequest} {@link DescribeTokenResponse} */
  DescribeToken(data?: DescribeTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTokenResponse>;
  /** 【融合版】查询top问题列表 {@link DescribeTopIssuesRequest} {@link DescribeTopIssuesResponse} */
  DescribeTopIssues(data: DescribeTopIssuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopIssuesResponse>;
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
