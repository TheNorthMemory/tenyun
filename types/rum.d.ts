/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 单应用总览评分 */
declare interface AppOverviewScore {
  /** 应用 ID */
  AppId?: string;
  /** 端 */
  Platform?: string;
  /** 加权总分，全部缺失时省略 */
  TotalScore?: number | null;
  /** 计分项 */
  Items?: OverviewScoreItem[] | null;
}

/** 应用 */
declare interface ApplicationItem {
  /** 应用 ID */
  AppId?: string;
  /** 应用 Key */
  ProjectKey?: string;
  /** 业务系统 ID */
  InstanceId?: string;
  /** 业务系统名称 */
  InstanceName?: string;
  /** 应用名称 */
  Name?: string;
  /** 端类型 */
  Type?: string;
  /** 描述 */
  Desc?: string;
  /** 是否排除已忽略错误 */
  ExcludeIgnoredErrors?: boolean;
  /** 状态：2 运行 / 6 停止 / 7 删除 */
  Status?: number;
  /** 创建时间 */
  CreatedAt?: string;
  /** 该应用绑定的腾讯云 APM 实例 ID 列表。空数组表示未绑定。 */
  ApmInstanceIds?: string[];
}

/** 业务系统 */
declare interface BusinessSystemItem {
  /** 业务系统 ID */
  InstanceId?: string;
  /** 名称 */
  InstanceName?: string;
  /** 描述 */
  InstanceDesc?: string;
  /** 状态：2 运行 / 6 停止 / 7 删除 */
  Status?: number;
  /** 状态： 2（隔离），1（使用中），3（已销毁） */
  ChargeStatus?: number;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
}

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

/** 拨测维度统计项 */
declare interface DialDimensionItem {
  /** 维度值。空值在控制台展示为未知。 */
  Value?: string;
  /** 执行次数。target_ip 按探测条数，其它维度按批次。 */
  ExecutionCount?: number;
  /** 成功次数 */
  SuccessCount?: number;
  /** 失败次数 */
  FailCount?: number;
  /** 平均时延，单位毫秒 */
  AvgDuration?: number;
  /** 平均丢包率，0 到 100 */
  AvgLoss?: number;
}

/** 一次拨测执行批次 */
declare interface DialExecution {
  /** 任务 ID */
  TaskId?: string;
  /** 任务名称。任务已删除时仍返回当时名称，找不到则为空。 */
  TaskName?: string;
  /** 拨测批次 ID */
  TaskSessionId?: string;
  /** 批次开始时间，毫秒时间戳 */
  StartTime?: number;
  /** 客户端平台 */
  Platform?: string;
  /** 应用版本 */
  AppVersion?: string;
  /** 设备机型 */
  Device?: string;
  /** 网络类型 */
  NetType?: string;
  /** 客户端运营商。不是目标 IP 运营商。 */
  Operator?: string;
  /** 客户端地区。不是目标 IP 地区。 */
  Region?: string;
  /** 本批次探测到的目标 IP，顺序与 TargetIpGeo 一致 */
  TargetIps?: string[];
  /** 每个目标 IP 的地区和运营商 */
  TargetIpGeo?: DialTargetIpGeo[];
  /** 本批次是否全部探测成功 */
  Success?: boolean;
  /** 本批次是否未实际探测 */
  NotProbed?: boolean | null;
  /** 本批次成功目标的平均时延，单位毫秒 */
  AvgDuration?: number;
  /** 本批次是否包含路由追踪 */
  HasMTR?: boolean;
  /** 所属用户会话 ID */
  SessionId?: string;
}

/** 一次目标探测结果 */
declare interface DialProbe {
  /** 探测目标 IP */
  TargetIp?: string;
  /** 本次探测是否成功 */
  PingSuccess?: boolean;
  /** 发送包数 */
  Sent?: number;
  /** 接收包数 */
  Received?: number;
  /** 丢包率，0 到 100 */
  Loss?: number;
  /** 最小时延，单位毫秒 */
  Min?: number;
  /** 最大时延，单位毫秒 */
  Max?: number;
  /** 平均时延，单位毫秒 */
  Avg?: number;
  /** 探测协议 */
  Protocol?: string;
  /** 探测目标域名或地址 */
  Domain?: string;
  /** 未探测原因 */
  SkipReason?: string | null;
  /** 目标 IP 所在地区。与客户端地区无关。无法解析时为未知。 */
  Region?: string;
  /** 目标 IP 所属运营商。与客户端运营商无关。无法解析时为未知。 */
  Operator?: string;
}

/** 拨测目标 IP 的地区和运营商 */
declare interface DialTargetIpGeo {
  /** 目标 IP，与 TargetIps 中的地址一致 */
  Ip?: string;
  /** 目标 IP 所在地区。无法解析时为未知。 */
  Region?: string;
  /** 目标 IP 所属运营商。无法解析时为未知。 */
  Operator?: string;
}

/** 拨测任务 */
declare interface DialTask {
  /** 任务 ID */
  TaskId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 任务状态。取值说明：active、paused；已删除任务不返回。 */
  Status?: string;
  /** 探测类型。取值说明：icmp、tcp。 */
  Type?: string;
  /** 执行时机。取值说明：realtime、after_request、after_error、after_slow、after_dns_slow。 */
  ExecutionTime?: string;
  /** 监听域名。非 realtime 时有值。 */
  WatchDomain?: string | null;
  /** 拨测目标。域名、IP 或 ldns。 */
  DialDomain?: string | null;
  /** TCP 端口。仅 tcp 任务返回。 */
  Port?: number | null;
  /** 实时拨测间隔，单位毫秒。仅 realtime 返回。取值说明：60000、300000、600000、900000、1800000、3600000。 */
  FrequencyMs?: number | null;
  /** 单次探测超时，单位毫秒。范围 1000 到 20000。 */
  TimeoutMs?: number;
  /** 探测周期，单位毫秒。 */
  PeriodMs?: number;
  /** 发包次数。范围 3 到 40。 */
  PackageCount?: number;
  /** ICMP 包大小，单位字节。范围 32 到 1024，默认 64。 */
  PackageSize?: number | null;
  /** 是否做路由追踪。取值说明：0 否，1 是。 */
  NeedMTR?: number;
  /** 路由追踪超时，单位毫秒。NeedMTR 为 1 时有值。 */
  MTRTimeoutMs?: number | null;
  /** 路由追踪最大跳数。NeedMTR 为 1 时有值。 */
  MTRMaxHop?: number | null;
  /** 每一跳发包次数。范围 3 到 40。 */
  MTRPingCount?: number | null;
  /** 慢请求阈值，单位毫秒。after_slow、after_dns_slow 时使用，默认 2000。 */
  SlowThresholdMs?: number | null;
  /** 错误类型过滤。after_error 时使用。 */
  ErrorType?: string | null;
  /** 允许启动的客户端地区，逗号分隔，名称与分析页客户端地区一致。空表示不限制。 */
  Regions?: string | null;
  /** 允许启动的客户端运营商，逗号分隔，名称与分析页客户端运营商一致。空表示不限制。 */
  Operators?: string | null;
  /** 允许启动的用户 ID，逗号分隔。空表示不限制。 */
  UserIds?: string | null;
  /** 允许启动的设备 ID，逗号分隔。空表示不限制。 */
  DeviceIds?: string | null;
  /** 创建人 */
  CreatedBy?: string | null;
  /** 创建时间 */
  CreatedAt?: string | null;
  /** 更新时间 */
  UpdatedAt?: string | null;
}

/** 拨测趋势点 */
declare interface DialTrendPoint {
  /** 时间桶，格式 yyyy-MM-dd HH:mm:ss */
  Time?: string;
  /** 执行批次数 */
  ExecutionCount?: number;
  /** 成功批次数 */
  SuccessCount?: number;
  /** 失败批次数 */
  FailCount?: number;
  /** 平均时延，单位毫秒 */
  AvgDuration?: number;
}

/** 堆栈帧 */
declare interface EventFrame {
  /** 绝对路径 */
  AbsPath?: string;
  /** 列号 */
  ColNo?: number;
  /** 文件名 */
  Filename?: string;
  /** 函数名 */
  Function?: string;
  /** 行号 */
  LineNo?: number;
  /** 是否应用内 0/1 */
  InApp?: number;
  /** 模块 */
  Module?: string;
  /** 包名 */
  Package?: string;
  /** 栈层级 */
  StackLevel?: number;
}

/** 事件排行。Kind=error 填指纹字段；URL 排行填 URL/Fail/Duration。 */
declare interface EventRankItem {
  /** 错误指纹 */
  Fingerprint?: string;
  /** 事件类型 */
  EventType?: string;
  /** 崩溃类型 */
  CrashType?: string;
  /** 错误类型 */
  ErrorType?: string;
  /** 错误值 */
  ErrorValue?: string;
  /** 问题单 ID */
  IssueId?: string;
  /** 问题单状态 */
  Status?: string;
  /** API 或资源 URL */
  URL?: string;
  /** 次数 */
  Count?: number;
  /** 影响用户数 */
  AffectedUser?: number;
  /** 失败次数 */
  Fail?: number;
  /** 耗时 */
  Duration?: number;
  /** 连接时长 */
  ConnectTime?: number;
  /** DNS 时长 */
  DomainLookupTime?: number;
  /** 时序 */
  Series?: EventRankPoint[] | null;
}

/** 事件排行时序点 */
declare interface EventRankPoint {
  /** 时间戳 Unix 毫秒 */
  Ts?: number;
  /** 次数 */
  Count?: number;
  /** 失败次数 */
  Fail?: number;
  /** 耗时 */
  Duration?: number;
}

/** 探索汇总分桶点 */
declare interface EventSearchSeriesPoint {
  /** 时间戳 Unix 毫秒 */
  Timestamp?: number;
  /** 次数 */
  Count?: number;
}

/** 事件异常栈 */
declare interface EventStack {
  /** 异常类型 */
  Type?: string;
  /** 异常信息 */
  Value?: string;
  /** mechanism 类型 */
  MechanismType?: string;
  /** 是否已处理 0/1 */
  MechanismHandled?: number;
}

/** 事件详情主表视图。空字符串省略。 */
declare interface EventView {
  /** 应用 ID */
  AppId?: string;
  /** 事件 ID */
  EventId?: string;
  /** 视图 ID */
  ViewId?: string;
  /** 事件类型 */
  EventType?: string;
  /** 事件分类 */
  EventCategory?: string;
  /** 事件名 */
  EventName?: string;
  /** 时间 RFC3339 */
  Timestamp?: string;
  /** 分区日期 YYYY-MM-DD */
  Date?: string;
  /** 平台 */
  Platform?: string;
  /** 应用版本 */
  AppVersion?: string;
  /** SDK 版本 */
  SdkVersion?: string;
  /** 问题单 ID */
  IssueId?: string;
  /** 错误指纹 */
  Fingerprint?: string;
  /** 是否已符号化 0/1 */
  IsSourceMapped?: number;
  /** 异常栈 */
  ExceptionStacks?: EventStack[] | null;
  /** 原始堆栈帧 */
  ExceptionFrames?: EventFrame[] | null;
  /** 事件属性 */
  EventProperties?: StringKeyValue[] | null;
  /** 会话 ID */
  SessionId?: string;
  /** 业务用户 ID */
  UserId?: string;
  /** 设备 ID */
  DeviceId?: string;
  /** 页面 URL */
  PageUrl?: string;
  /** 归一化页面 URL */
  NormalizedPageUrl?: string;
  /** 页面标题 */
  PageTitle?: string;
  /** 资源 URL */
  ResourceUrl?: string;
  /** 资源类型 */
  ResourceType?: string;
  /** 目标元素 */
  TargetElement?: string;
  /** 目标文本 */
  TargetText?: string;
  /** 日志级别 */
  LogLevel?: string;
  /** IP */
  Ip?: string;
  /** 国家 */
  Country?: string;
  /** 省份 */
  Province?: string;
  /** 城市 */
  City?: string;
  /** 运营商 */
  Isp?: string;
  /** 网络类型 */
  NetworkType?: string;
  /** 设备类型 */
  DeviceType?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 环境 */
  Environment?: string;
  /** 测量值 */
  Measurements?: FloatKeyValue[] | null;
  /** 标签 */
  Tags?: StringKeyValue[] | null;
}

/** 异常维度同批计数桶；IncludedInTotal 表示计入父行总数，ParentKey 表示包含关系。 */
declare interface ExceptionBucket {
  /** 固定目录分类 key，与请求平台、CategoryKeys 或 EventTypes 派生目录一致。 */
  Key?: string;
  /** 精确事件行数，0至9007199254740991的整数，0必须保留。 */
  Count?: number;
  /** 是否为计入 TotalCount 的互斥主项。包含项为false，不重复计总。 */
  IncludedInTotal?: boolean;
  /** 包含项所属主项的 Key；主项不返回该字段。 */
  ParentKey?: string;
}

/** 异常维度值的同批完整分类计数；TotalCount为互斥主类之和，Items包含全部适用类型。 */
declare interface ExceptionDimensionRow {
  /** 由目录域、维度或TagKey及归一化值确定的稳定、不透明唯一标识。 */
  RowKey?: string;
  /** 维度显示值；标签保留原始值，普通province/platform/network_type按既有显示别名归一化。 */
  Value?: string;
  /** 本行全部 IncludedInTotal=true 主项的 Count 之和，安全非负整数。 */
  TotalCount?: number;
  /** 完整固定分类向量，含0计数及适用包含项；不按数量裁剪。 */
  Items?: ExceptionBucket[];
}

/** Kind=exception_dimension时返回；Rows为同一次聚合的有界排行及完整分类向量，成功空结果返回空数组。 */
declare interface ExceptionDistribution {
  /** 按 TotalCount 降序、归一化值升序返回的完整维度行，行数不超过Limit；无数据返回空数组。 */
  Rows?: ExceptionDimensionRow[];
}

/** 探索事件列表项 */
declare interface ExplorationEventItem {
  /** 事件 ID */
  EventId?: string;
  /** 事件类型 */
  EventType?: string;
  /** 事件名 */
  EventName?: string;
  /** 事件分类 */
  EventCategory?: string;
  /** 时间戳 Unix 毫秒 */
  Timestamp?: number;
  /** 会话 ID */
  SessionId?: string;
  /** 视图 ID */
  ViewId?: string;
  /** 业务用户 ID */
  UserId?: string;
  /** 设备 ID */
  DeviceId?: string;
  /** 页面 URL */
  PageUrl?: string;
  /** 归一化页面 URL */
  NormalizedPageUrl?: string;
  /** 页面标题 */
  PageTitle?: string;
  /** 平台 */
  Platform?: string;
  /** 应用版本 */
  AppVersion?: string;
  /** 操作系统 */
  Os?: string;
  /** 浏览器 */
  Browser?: string;
  /** 设备类型 */
  DeviceType?: string;
  /** 国家 */
  Country?: string;
  /** 省份 */
  Province?: string;
  /** 城市 */
  City?: string;
  /** 运营商 */
  Isp?: string;
  /** 网络类型 */
  NetworkType?: string;
  /** IP */
  Ip?: string;
  /** 资源 URL */
  ResourceUrl?: string;
  /** 资源类型 */
  ResourceType?: string;
  /** 目标元素 */
  TargetElement?: string;
  /** 目标文本 */
  TargetText?: string;
  /** 日志级别 */
  LogLevel?: string;
  /** 问题单 ID */
  IssueId?: string;
  /** 是否已符号化 0/1 */
  IsSourceMapped?: number;
  /** 测量值 */
  Measurements?: FloatKeyValue[] | null;
  /** 事件属性 */
  EventProperties?: StringKeyValue[] | null;
  /** 异常栈摘要 */
  ExceptionStacks?: ExplorationExceptionStack[] | null;
  /** 事件标签列表。APM 全链路时包含 Key=trace_id，Value 为 32 位 hex TraceId（不是整段 traceparent）。无标签时省略或空数组。 */
  Tags?: StringKeyValue[];
}

/** 探索列表异常栈摘要 */
declare interface ExplorationExceptionStack {
  /** 异常类型 */
  Type?: string;
  /** 异常信息 */
  Value?: string;
  /** mechanism 类型 */
  MechanismType?: string;
  /** 是否已处理 0/1 */
  MechanismHandled?: number;
}

/** 字段值替换规则 */
declare interface FieldTransformRuleItem {
  /** 规则 ID */
  Id?: number;
  /** 应用 ID */
  AppId?: string;
  /** 规则名称 */
  Name?: string;
  /** 目标字段 */
  TargetField?: string;
  /** 匹配方式：exact / prefix / contains / regex */
  MatchType?: string;
  /** 匹配模式 */
  MatchPattern?: string;
  /** 替换动作：replace / regex_replace / mask */
  TransformAction?: string;
  /** 替换值 */
  ReplaceValue?: string;
  /** 优先级 */
  Priority?: number;
  /** 是否启用 */
  Enabled?: boolean;
  /** 创建人 */
  CreatedBy?: string;
  /** 更新人 */
  UpdatedBy?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
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

/** 数值键值对 */
declare interface FloatKeyValue {
  /** 键 */
  Key?: string;
  /** 值 */
  Value?: number;
}

/** 指标名值对 */
declare interface FloatNameValue {
  /** 指标名，如 Count / Rate / P95 */
  Name?: string;
  /** 指标值 */
  Value?: number;
}

/** TDEM漏斗步骤 */
declare interface FunnelStepInput {
  /** 应用id */
  StepName: string;
  /** 页面特征 */
  PagePattern?: string;
  /** 页面匹配模式 */
  PageMatchMode?: string;
  /** 控件Selector */
  Selector?: string;
  /** 事件类型 */
  ActionType?: string;
  /** 可视化名称，如控件文本、自定义事件名 */
  VisualName?: string;
}

/** 整型键值对。分类计数等枚举键用此结构，不把枚举值做成结构体字段。 */
declare interface IntKeyValue {
  /** 键，如 error / session */
  Key?: string;
  /** 整型值 */
  Value?: number;
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

/** 批量分布条目 */
declare interface MetricDistributionBatchItem {
  /** 条目 Key */
  Key?: string;
  /** 分布桶 */
  Items?: MetricDistributionItem[] | null;
  /** 合计 */
  Total?: number;
}

/** 分析指标分布桶 */
declare interface MetricDistributionItem {
  /** 维度值 */
  Value?: string;
  /** 次数 */
  Count?: number;
  /** 影响用户数 */
  AffectedUser?: number;
  /** 率，分母为 0 时省略 */
  Rate?: number | null;
  /** 影响用户率，缺省省略 */
  AffectedUserRate?: number | null;
  /** 均值，缺省省略 */
  Avg?: number;
  /** P50，缺省省略 */
  P50?: number;
  /** P75，缺省省略 */
  P75?: number;
  /** P95，缺省省略 */
  P95?: number;
  /** P99，缺省省略 */
  P99?: number;
}

/** 批量指标查询条目 */
declare interface MetricQueryItem {
  /** 事件类型 */
  EventType: string;
  /** 指标名列表，如 count / rate */
  Metrics: string[];
  /** 条目 Key，缺省为 EventType/SubType/MeasurementKey */
  Key?: string;
  /** 子类型 */
  SubType?: string;
  /** 分位/均值测量键 */
  MeasurementKey?: string;
}

/** 批量合计条目 */
declare interface MetricSummaryBatchItem {
  /** 条目 Key */
  Key?: string;
  /** 指标列表 */
  Metrics?: FloatNameValue[] | null;
  /** 可能尚未采集，false 时省略 */
  MaybeUncollected?: boolean;
}

/** 批量趋势条目 */
declare interface MetricTrendBatchItem {
  /** 条目 Key */
  Key?: string;
  /** 主窗时序 */
  Series?: MetricTrendPoint[] | null;
  /** 对比窗时序 */
  CompareSeries?: MetricTrendPoint[] | null;
  /** 可能尚未采集，false 时省略 */
  MaybeUncollected?: boolean;
}

/** 分析指标趋势点 */
declare interface MetricTrendPoint {
  /** 时间戳 Unix 毫秒 */
  Ts?: number;
  /** 该桶指标 */
  Metrics?: FloatNameValue[] | null;
}

/** 总览计分项。Score/Value 缺失时省略，前端展示 —。 */
declare interface OverviewScoreItem {
  /** 计分项，如 crash / anr / lag */
  Key?: string;
  /** 单项 0-100，缺失省略 */
  Score?: number | null;
  /** 原始值（率为小数、耗时为 ms） */
  Value?: number | null;
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
  /** 创建时间 */
  CreatedAt?: string;
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
  /** 忽略的配置项 */
  Exclusion?: string;
}

/** 字符串键值对 */
declare interface StringKeyValue {
  /** 键 */
  Key?: string;
  /** 值 */
  Value?: string;
}

/** 符号化结果。未翻译时只填 Status / SkipReason。 */
declare interface SymbolicatedView {
  /** 符号化版本 */
  SymbolicationVersion?: number;
  /** 符号化时间 */
  SymbolicatedAt?: string;
  /** 状态：success / missing / skipped */
  SymbolicationStatus?: string;
  /** 跳过原因 */
  SymbolicationSkipReason?: string;
  /** 来源 */
  SymbolicationSource?: string;
  /** release */
  SymbolicationRelease?: string;
  /** dist */
  SymbolicationDist?: string;
  /** 耗时毫秒 */
  SymbolicationDurationMs?: number;
  /** Symbolicator 请求 ID */
  SymbolicatorRequestId?: string;
  /** 翻译后堆栈帧 */
  Frames?: EventFrame[] | null;
}

/** 大模型对话多维分析行 */
declare interface TDEMSSEDimensionRow {
  /** 维度取值。空值保留为空字符串。 */
  DimensionValue?: string;
  /** 该取值的对话次数。 */
  ConversationCount?: number;
  /** 该取值上当前指标的值。没有可计算样本时为 null。 */
  Value?: number | null;
}

/** 大模型对话分布档 */
declare interface TDEMSSEDistributionBin {
  /** 档位左端，左闭。 */
  Start?: number;
  /** 档位右端。溢出档省略。 */
  End?: number | null;
  /** 是否为溢出档。溢出档为 true，且不返回 End。 */
  Overflow?: boolean;
  /** 落入该档的对话次数。 */
  Count?: number;
  /** 该档占有效样本的百分比，已乘 100。 */
  Rate?: number;
}

/** 大模型对话分位时间桶 */
declare interface TDEMSSEPercentilePoint {
  /** 时间桶起点，Unix 毫秒。 */
  Time?: number;
  /** 该桶算术平均值。没有样本的桶不返回。 */
  Average?: number | null;
  /** 50 分位。 */
  P50?: number | null;
  /** 75 分位。 */
  P75?: number | null;
  /** 95 分位。 */
  P95?: number | null;
  /** 99 分位。 */
  P99?: number | null;
}

/** 大模型对话趋势时间桶 */
declare interface TDEMSSETrendPoint {
  /** 时间桶起点，Unix 毫秒。 */
  Time?: number;
  /** 该桶内的对话次数。 */
  ConversationCount?: number;
  /** 该桶内当前指标的值。桶内没有可计算样本时为 null。 */
  Value?: number | null;
}

/** 大模型对话趋势维度序列 */
declare interface TDEMSSETrendSeries {
  /** 维度取值。空值保留为空字符串。 */
  DimensionValue?: string;
  /** 该取值在各个时间桶上的点。 */
  Points?: TDEMSSETrendPoint[];
}

/** 标签 */
declare interface Tag {
  /** 标签key */
  Key: string;
  /** 标签value */
  Value: string;
}

/** 用量明细行 */
declare interface UsageDetailRow {
  /** 业务系统 ID */
  InstanceId?: string;
  /** 业务系统名称 */
  InstanceName?: string;
  /** 业务系统状态 */
  InstanceStatus?: number;
  /** 应用 ID */
  AppId?: string;
  /** 应用名称 */
  AppName?: string;
  /** 端类型 */
  AppType?: string;
  /** 应用状态 */
  AppStatus?: number;
  /** 上报量 */
  ReportVolume?: number;
  /** 占当前结果集比例 */
  Percent?: number;
  /** 行趋势 */
  ByDate?: UsageTimePoint[] | null;
}

/** 用量趋势点 */
declare interface UsageTimePoint {
  /** 时间 YYYY-MM-DD HH:00:00 */
  Time?: string;
  /** 上报量 */
  ReportVolume?: number;
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

declare interface CreateFieldTransformRuleRequest {
  /** 项目id */
  ProjectId: number;
  /** 目标字段 */
  TargetField: string;
  /** 匹配方式 */
  MatchType: string;
  /** 匹配规则 */
  MatchPattern: string;
  /** 转换类型 */
  TransformAction: string;
  /** 规则名 */
  Name?: string;
  /** 替换值 */
  ReplaceValue?: string;
  /** 优先级 */
  Priority?: number;
  /** 是否开启 */
  Enabled?: boolean;
}

declare interface CreateFieldTransformRuleResponse {
  /** 结果 */
  Result?: string;
  /** 错误消息 */
  ErrorMsg?: string;
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

declare interface CreateTDEMApplicationRequest {
  /** 业务系统 ID（必填） */
  InstanceId: string;
  /** 应用名称（必填） */
  Name: string;
  /** 应用类型。取值：web、wx-miniprogram、uniapp、ios、android、electron、rn（React Native）。 */
  Type: string;
  /** 应用描述（可选） */
  Desc?: string;
  /** APM 实例 ID */
  ApmInstanceIds?: string[];
}

declare interface CreateTDEMApplicationResponse {
  /** 应用 ID */
  AppId?: string;
  /** 应用 Key */
  ProjectKey?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTDEMBusinessSystemRequest {
  /** 业务系统名称（必填） */
  InstanceName: string;
  /** 业务系统描述（可选） */
  InstanceDesc?: string;
  /** 标签列表 */
  Tags?: Tag[];
}

declare interface CreateTDEMBusinessSystemResponse {
  /** 业务系统 ID */
  InstanceId?: string;
  /** 业务系统状态状态：2 运行 / 6 停止 / 7 删除 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTDEMDialTaskRequest {
  /** 应用 ID */
  AppId: string;
  /** 任务名称，最长 128 个字符 */
  TaskName: string;
  /** 探测类型。取值说明：icmp、tcp。 */
  Type: string;
  /** 执行时机。取值说明：realtime、after_request、after_error、after_slow、after_dns_slow。tcp 不能使用 after_dns_slow。 */
  ExecutionTime: string;
  /** 单次探测超时，单位毫秒。范围 1000 到 20000。 */
  TimeoutMs: number;
  /** 探测周期，单位毫秒，必须大于 0。 */
  PeriodMs: number;
  /** 发包次数。范围 3 到 40。 */
  PackageCount: number;
  /** 任务状态。取值说明：active、paused。不传时默认为 active。 */
  Status?: string;
  /** 监听域名。ExecutionTime 不是 realtime 时必填。 */
  WatchDomain?: string;
  /** 拨测目标。域名、IP 或 ldns。after_dns_slow 固定为 ldns，其它时机必填。 */
  DialDomain?: string;
  /** TCP 端口，1 到 65535。Type 为 tcp 时必填。 */
  Port?: number;
  /** 实时拨测间隔，单位毫秒。ExecutionTime 为 realtime 时必填。取值说明：60000、300000、600000、900000、1800000、3600000。 */
  FrequencyMs?: number;
  /** ICMP 包大小，单位字节。范围 32 到 1024。不传时默认 64。 */
  PackageSize?: number;
  /** 是否做路由追踪。取值说明：0 否，1 是。不传时为 0。 */
  NeedMTR?: number;
  /** 路由追踪超时，单位毫秒。NeedMTR 为 1 时必填。 */
  MTRTimeoutMs?: number;
  /** 路由追踪最大跳数。NeedMTR 为 1 时填写。 */
  MTRMaxHop?: number;
  /** 每一跳发包次数。范围 3 到 40。 */
  MTRPingCount?: number;
  /** 慢请求阈值，单位毫秒。after_slow、after_dns_slow 不传时默认 2000。 */
  SlowThresholdMs?: number;
  /** 错误类型过滤。after_error 时使用。 */
  ErrorType?: string;
  /** 允许启动的客户端地区，逗号分隔，名称必须与分析页客户端地区完全一致。不传或空字符串表示不限制。 */
  Regions?: string;
  /** 允许启动的客户端运营商，逗号分隔，名称必须与分析页客户端运营商完全一致。不传或空字符串表示不限制。 */
  Operators?: string;
  /** 允许启动的用户 ID，逗号分隔。不传或空字符串表示不限制。 */
  UserIds?: string;
  /** 允许启动的设备 ID，逗号分隔。不传或空字符串表示不限制。 */
  DeviceIds?: string;
}

declare interface CreateTDEMDialTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTDEMFieldTransformRuleRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 目标字段（必填）：page_url / normalized_page_url / page_title / referrer / resource_url / user_id / target_element / target_text */
  TargetField: string;
  /** 匹配方式（必填）：exact / prefix / contains / regex */
  MatchType: string;
  /** 匹配模式（必填） */
  MatchPattern: string;
  /** 替换动作（必填）：replace / regex_replace / mask */
  TransformAction: string;
  /** 规则名称（可选） */
  Name?: string;
  /** 替换值（replace / regex_replace 使用） */
  ReplaceValue?: string;
  /** 优先级（可选） */
  Priority?: number;
  /** 是否启用，默认 true */
  Enabled?: boolean;
}

declare interface CreateTDEMFieldTransformRuleResponse {
  /** 创建后的规则 */
  Rule?: FieldTransformRuleItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTDEMFunnelRequest {
  /** 应用id */
  AppId: string;
  /** 漏斗名 */
  FunnelName: string;
  /** 漏斗步骤 */
  Steps: FunnelStepInput[];
  /** 描述 */
  Description?: string;
  /** 漏斗状态 */
  Status?: string;
  /** 漏斗来源 */
  Source?: string;
}

declare interface CreateTDEMFunnelResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
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

declare interface DeleteFieldTransformRuleRequest {
  /** 规则id */
  Id: number;
  /** 项目id */
  ProjectId: number;
}

declare interface DeleteFieldTransformRuleResponse {
  /** 结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
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

declare interface DeleteMiniProgramReplayPackRequest {
  /** 应用id */
  AppId: string;
  /** 回放包id（前缀mpr_） */
  PackId: string;
}

declare interface DeleteMiniProgramReplayPackResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 请求结果（JSON字符串，包含 AppId/PackId/Deleted） */
  Result?: string;
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

declare interface DeleteSymbolArtifactRequest {
  /** 制品类型。取值：js_sourcemap、ios_dsym、macos_dsym、windows_pdb、android_mapping、android_native、system_symbol。 */
  Kind: string;
  /** 制品 ID。 */
  ArtifactId: string;
  /** 应用 ID。删除应用级制品时必填，须与制品所属应用一致。 */
  AppId?: string;
  /** 兼容别名，未传 AppId 时使用。 */
  ProjectId?: string;
  /** 兼容字段，请勿传入。 */
  AppVersion?: string;
  /** 兼容字段，请勿传入。 */
  Platform?: string;
  /** 系统名称。system_symbol 场景可用于归属校验。 */
  OS?: string;
  /** 系统版本。system_symbol 场景可用于归属校验。 */
  OSVersion?: string;
}

declare interface DeleteSymbolArtifactResponse {
  /** 删除结果，JSON 格式字符串，包含 artifact_id、status 和 deleted_at。 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTDEMApplicationRequest {
  /** 应用 ID（必填） */
  AppId: string;
}

declare interface DeleteTDEMApplicationResponse {
  /** 应用 ID */
  AppId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTDEMBusinessSystemRequest {
  /** 业务系统 ID（必填） */
  InstanceId: string;
}

declare interface DeleteTDEMBusinessSystemResponse {
  /** 业务系统 ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTDEMDialTaskRequest {
  /** 应用 ID */
  AppId: string;
  /** 任务 ID */
  TaskId: string;
}

declare interface DeleteTDEMDialTaskResponse {
  /** 已删除的任务 ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTDEMFieldTransformRuleRequest {
  /** 规则 ID（必填） */
  Id: number;
  /** 应用 ID（必填） */
  AppId: string;
}

declare interface DeleteTDEMFieldTransformRuleResponse {
  /** 规则 ID */
  Id?: number;
  /** 是否已删除 */
  Deleted?: boolean;
  /** 提示信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTDEMFunnelRequest {
  /** 应用id */
  AppId: string;
  /** 漏斗id */
  FunnelId: string;
}

declare interface DeleteTDEMFunnelResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
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
  /** 来源页面， 可多选，用 “,” 隔开的 String */
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

declare interface DescribeFieldTransformRulesRequest {
  /** 项目id */
  ProjectId: number;
  /** 偏移 */
  Offset?: number;
  /** 限制 */
  Limit?: number;
}

declare interface DescribeFieldTransformRulesResponse {
  /** 结果 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFieldValuesRequest {
  /** 应用id */
  AppId: string;
  /** 开始时间单位：毫秒 */
  StartTime: number;
  /** 结束时间单位：毫秒 */
  EndTime: number;
  /** 字段名 */
  FieldName: string;
  /** 数量限制 */
  Limit?: number;
  /** 过滤条件 */
  Filters?: string;
  /** 事件分类 */
  Category?: string;
  /** 可选。按前缀过滤字段去重结果。查询 user_id 或 device_id 且开启 StrictPiiPrefix 时必填，去除首尾空格后长度须不少于 2。 */
  Prefix?: string;
  /** 用于采样配置，是否对 user_id、device_id 强制前缀匹配。为 true 时必须同时传入合法 Prefix，否则返回 InvalidParameter，且不会返回无前缀的全量去重列表。为 false 或不传时，按字段返回热门去重值，行为与历史接口一致。默认值：false */
  StrictPiiPrefix?: boolean;
  /** 查询口径。可选。只允许空或 event。Issue 标签分布传 event。为 event 时不能同时传 HasError、MinDuration、MaxDuration，也不能把 Category 设为 session。 */
  Scope?: string;
  /** 是否只看有错误的会话。可选。不传表示不过滤。Scope 为 event 时不能传。 */
  HasError?: boolean;
  /** 会话最短时长，单位毫秒。可选。0 或不传表示不限制。Scope 为 event 时不能传。 */
  MinDuration?: number;
  /** 会话最长时长，单位毫秒。可选。0 或不传表示不限制。Scope 为 event 时不能传。 */
  MaxDuration?: number;
}

declare interface DescribeFieldValuesResponse {
  /** 返回结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileCertificateRequest {
  /** 超时时间，不填默认是 5 分钟 */
  Timeout?: number;
  /** bucket类型，不填默认1:web，2:app */
  FileType?: number;
  /** ProjectID */
  ID?: number;
  /** reigon对应的id */
  RegionID?: number;
}

declare interface DescribeFileCertificateResponse {
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
  /** 桶地址 */
  BucketAddress?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssueAffectedUsersRequest {
  /** 应用 ID（string，必填）。空 → InvalidParameter */
  AppId: string;
  /** 问题 ID（string，必填）。空 → InvalidParameter */
  IssueId: string;
  /** 页码（整数，选填）。< 1 钳制为 1；缺省 1 */
  Page?: number;
  /** 每页条数（整数，选填）。< 1 或 > 1000 回落默认 20；导出场景按 1000 一批拉全量 */
  PageSize?: number;
  /** 应用版本（string，选填）。按 app_version 精确匹配；空表示不限版本 */
  AppVersion?: string;
  /** 起始毫秒时间戳（整数，选填）。<= 0 表示该侧不限 */
  StartTime?: number;
  /** 结束毫秒时间戳（整数，选填）。<= 0 表示该侧不限；与 StartTime 同时给出且 StartTime > EndTime → InvalidParameter */
  EndTime?: number;
  /** 身份值关键字（string，选填）。不区分大小写的子串匹配，命中 if(user_id='', session_id, user_id)；空表示不限 */
  Keyword?: string;
  /** 排序字段（string，选填）。可选 last_seen / first_seen / event_count；缺省 last_seen；其它值 → InvalidParameter */
  OrderKey?: string;
  /** 排序方向（string，选填）。可选 asc / desc；缺省 desc；其它值 → InvalidParameter */
  OrderBy?: string;
}

declare interface DescribeIssueAffectedUsersResponse {
  /** 业务数据 JSON 字符串，反序列化后：{Users,Total,Page,PageSize}。 Users[] 含 UserId（身份值）、HasUin（是否来自 user_id）、EventCount、FirstSeen / LastSeen（毫秒时间戳）。 */
  Result?: string;
  /** 错误信息（成功时为空） */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssueBreadcrumbsRequest {
  /** 应用 ID */
  AppId: string;
  /** Issue ID */
  IssueId: string;
  /** 事件 ID；为空时默认回退到最新事件 */
  EventId?: string;
  /** 向前回溯秒数，默认 60，最大 300 */
  Before?: number;
  /** 返回条数上限，默认 50，最大 100 */
  Limit?: number;
}

declare interface DescribeIssueBreadcrumbsResponse {
  /** 业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是 session_id + items */
  Result?: string;
  /** 错误信息；正常返回时为空 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssueCrashLogDownloadURLRequest {
  /** 应用ID */
  AppId: string;
  /** Issue ID */
  IssueId: string;
  /** Issue 事件ID */
  EventId: string;
}

declare interface DescribeIssueCrashLogDownloadURLResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误时返回的错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssueDetailRequest {
  /** 应用 ID */
  AppId: string;
  /** Issue ID */
  IssueId: string;
  /** 开始时间，Unix 毫秒时间戳。可选。与 EndTime 必须成对传入；都不传时按全保留期统计。 */
  StartTime?: number;
  /** 结束时间，Unix 毫秒时间戳。可选。与 StartTime 必须成对传入。 */
  EndTime?: number;
  /** 环境。可选。为空表示全部环境。 */
  Env?: string;
  /** 筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。可选。不传表示不附加这组筛选。 */
  Filters?: string;
}

declare interface DescribeIssueDetailResponse {
  /** 业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是单个 Issue 详情 */
  Result?: string;
  /** 错误信息；正常返回时为空 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssueEventDetailRequest {
  /** 应用 ID */
  AppId: string;
  /** Issue ID */
  IssueId: string;
  /** 事件 ID */
  EventId: string;
}

declare interface DescribeIssueEventDetailResponse {
  /** 业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是单个事件详情 */
  Result?: string;
  /** 错误信息；正常返回时为空 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssueEventsRequest {
  /** 应用 ID */
  AppId: string;
  /** Issue ID */
  IssueId: string;
  /** 开始时间，Unix 毫秒时间戳 */
  StartTime: number;
  /** 结束时间，Unix 毫秒时间戳 */
  EndTime: number;
  /** 事件关键字过滤 */
  Keyword?: string;
  /** 扩展过滤器 JSON 字符串；白名单字段包括 app_version、country、province、city、device_type、browser、os、isp、referrer、user_type、platform、normalized_page_url、event_type、issue_id、environment、process_type */
  Filters?: string;
  /** 页码，默认 1 */
  Page?: number;
  /** 分页大小，默认 20，范围 1~100 */
  PageSize?: number;
  /** 排序方向，可选值：asc、desc */
  SortOrder?: string;
}

declare interface DescribeIssueEventsResponse {
  /** 业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是 total + items */
  Result?: string;
  /** 错误信息；正常返回时为空 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIssueTrendRequest {
  /** 应用 ID */
  AppId: string;
  /** Issue ID */
  IssueId: string;
  /** 开始时间，Unix 毫秒时间戳 */
  StartTime: number;
  /** 结束时间，Unix 毫秒时间戳 */
  EndTime: number;
  /** 趋势分桶，可选值：auto、1m、10m、1h、1d */
  Bucket?: string;
  /** 环境。可选。为空表示全部环境。 */
  Env?: string;
  /** 关键字。可选。不传表示不过滤。 */
  Keyword?: string;
  /** 筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。可选。不传表示不附加这组筛选。 */
  Filters?: string;
}

declare interface DescribeIssueTrendResponse {
  /** 业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是 bucket + points */
  Result?: string;
  /** 错误信息；正常返回时为空 */
  ErrorMsg?: string;
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

declare interface DescribeIssuesRequest {
  /** 应用 ID */
  AppId: string;
  /** 开始时间，Unix 毫秒时间戳 */
  StartTime: number;
  /** 结束时间，Unix 毫秒时间戳 */
  EndTime: number;
  /** 环境过滤，如 prod、test */
  Env?: string;
  /** Issue 类型过滤，可选值：native_crash、js_error、event_loop_block */
  IssueTypes?: string[];
  /** 状态过滤，可选值：Unresolved、Resolved、Ignored、Regressed */
  Statuses?: string[];
  /** Issue 标题或错误关键字模糊搜索 */
  Keyword?: string;
  /** 扩展过滤器 JSON 字符串；白名单字段包括 app_version、country、province、city、device_type、browser、os、isp、referrer、user_type、platform、normalized_page_url、event_type、issue_id、environment、process_type */
  Filters?: string;
  /** 排序字段，可选值：last_seen、first_seen、event_count、affected_users */
  SortBy?: string;
  /** 排序方向，可选值：asc、desc */
  SortOrder?: string;
  /** 页码，默认 1 */
  Page?: number;
  /** 分页大小，默认 20，范围 1~100 */
  PageSize?: number;
}

declare interface DescribeIssuesResponse {
  /** 业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Total + Items */
  Result?: string;
  /** 错误信息；正常返回时为空 */
  ErrorMsg?: string;
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

declare interface DescribeMiniProgramReplayPackRequest {
  /** 应用id */
  AppId: string;
  /** 回放包hash（sha256前16位hex） */
  BundleHash: string;
}

declare interface DescribeMiniProgramReplayPackResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 请求结果（JSON字符串，包含 PackId/AppId/BundleHash/Status/PageCount/ComponentCount/Pack） */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMiniProgramReplayPacksRequest {
  /** 应用id */
  AppId: string;
  /** 状态过滤（compiling/ready/failed，可选） */
  Status?: string;
  /** 返回条数（默认20，最大100） */
  Limit?: number;
  /** 分页游标（可选） */
  Cursor?: string;
}

declare interface DescribeMiniProgramReplayPacksResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 请求结果（JSON字符串，包含 Items/NextCursor） */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePerformanceMetricsRequest {
  /** 应用id */
  AppId: string;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 平台 */
  Platform?: string;
  /** 过滤条件 */
  Filters?: string;
  /** 分位值 */
  Quantile?: number;
  /** 旅程筛选条件 JSON 字符串，格式与 Filters 相同：[{Key,Op,Values}]。可选。不传表示不过滤。 */
  JourneyFilters?: string;
  /** 是否只看包含挣扎的会话。可选。不传表示不过滤。 */
  HasStruggle?: boolean;
  /** 旅程起点页面。可选。不传表示不过滤。 */
  StartPage?: string;
  /** 旅程终点页面。可选。不传表示不过滤。 */
  EndPage?: string;
}

declare interface DescribePerformanceMetricsResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
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
  /** false/不传=保留「最近 3 个月」约束（旧行为）；true=绕过时间窗口 */
  IgnoreDefaultTimeRange?: boolean;
}

declare interface DescribeReleaseFilesResponse {
  /** 文件信息列表 */
  Files?: ReleaseFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReplayDataRequest {
  /** 应用id */
  AppId: string;
  /** 回放id */
  ReplayId: string;
  /** session id */
  SessionId?: string;
  /** segment id */
  SegmentId?: number;
  /** 单个录制分片解压后的最大允许字节数取值范围：[1, 8388608]单位：字节（Byte） */
  MaxDecodedBytes?: number;
}

declare interface DescribeReplayDataResponse {
  /** 返回结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReplayDetailsRequest {
  /** 应用id */
  AppId: string;
  /** 会话id */
  SessionId: string;
  /** 回放id */
  ReplayId: string;
  /** 事件类别， 默认为all */
  Categories?: string;
  /** 每页返回数量 */
  Limit?: number;
  /** 游标分页，传上一次返回的 NextCursor 值。首次请求不传 */
  Cursor?: number;
  /** 起始偏移（毫秒），相对于录屏开始时间。用于只查某个时间段的事件 */
  StartOffsetMs?: number;
  /** 结束偏移（毫秒），必须 ≥ StartOffsetMs */
  EndOffsetMs?: number;
}

declare interface DescribeReplayDetailsResponse {
  /** 返回结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReplayMetaRequest {
  /** 应用id */
  AppId: string;
  /** 回放id */
  ReplayId: string;
  /** 会话id */
  SessionId?: string;
  /** 是否仅查询指定录制分片的轻量索引。默认false。为true时必须通过IndexSegmentIds指定1～16个分片ID，返回IndexEntries，不返回录制正文。 */
  IndexOnly?: boolean;
  /** 待查询索引的录制分片ID列表。仅在IndexOnly为true时使用，包含1～16个非负且不重复的分片ID。ProbeMissingIndex为true时仅允许指定一个分片ID。 */
  IndexSegmentIds?: number[];
  /** 是否在录制分片缺少索引时进行受限兼容探测。默认false。为true时必须同时设置IndexOnly为true，且IndexSegmentIds仅包含一个分片ID。 */
  ProbeMissingIndex?: boolean;
}

declare interface DescribeReplayMetaResponse {
  /** 返回结果 */
  Result?: string;
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
  /** 页数，第几页（注意：该字段已废弃！） */
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

declare interface DescribeRumGroupLogV2Request {
  /** 排序方式 desc asc（必填） */
  OrderBy: string;
  /** 查询日志开始时间（必填） */
  StartTime: number;
  /** 单次查询返回的原始日志条数，最大值为100（必填） */
  Limit: number;
  /** 过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：日志查询相关 */
  Filter: string;
  /** 查询日志结束时间（必填） */
  EndTime: number;
  /** 项目ID（必填） */
  ID: number;
  /** 聚合字段 */
  Label: string;
  /** 页数，第几页（注意：该字段已废弃！） */
  Last?: number;
}

declare interface DescribeRumGroupLogV2Response {
  /** 日志聚合结果 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRumLogDetailsV2Request {
  /** 排序方式 desc asc */
  OrderBy: string;
  /** 查询日志开始时间（必填）格式为时间戳 毫秒 */
  StartTime: number;
  /** 单次查询返回的原始日志条数，最大值为100（必填） */
  Limit: number;
  /** 过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：日志查询相关 */
  Filter: string;
  /** 查询日志结束时间（必填）格式为时间戳 毫秒 */
  EndTime: number;
  /** 项目ID（必填） */
  ID: number;
  /** 上次查询的最后一个日志的时间戳 */
  LastTime?: number;
  /** 上次查询的最后一个日志的rowId */
  LastRowId?: number;
}

declare interface DescribeRumLogDetailsV2Response {
  /** 日志明细 */
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

declare interface DescribeRumLogExportV2Request {
  /** Name（string，必填）：导出任务名称标识，需要在使用API创建导出任务时填写。此字段为后续能力扩展预留，不在查询结果中返回。 */
  Name: string;
  /** 查询日志开始时间(必填) */
  StartTime: number;
  /** 过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：日志查询相关 */
  Filter: string;
  /** 查询日志结束时间(必填) */
  EndTime: number;
  /** 项目ID */
  ID: number;
  /** 注意：这个字段必选，不能为空！选择要导出哪些字段的参数，对应日志的列，可查看文档：日志查询相关枚举值：level： 日志类型url： URLip： 用户终端IPversion： 版本 */
  Fields?: string[];
}

declare interface DescribeRumLogExportV2Response {
  /** 日志导出任务TaskId */
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

declare interface DescribeRumLogExportsV2Request {
  /** 每页返回任务数 */
  PageSize: number;
  /** 当前页码 */
  PageNum: number;
  /** 项目ID */
  ID: number;
}

declare interface DescribeRumLogExportsV2Response {
  /** 日志导出列表 */
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

declare interface DescribeRumLogTotalV2Request {
  /** 排序方式 desc asc */
  OrderBy: string;
  /** 查询日志开始时间（必填）格式为时间戳 毫秒 */
  StartTime: number;
  /** 单次查询返回的原始日志条数，最大值为100（必填） */
  Limit: number;
  /** 过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：日志查询相关 */
  Filter: string;
  /** 查询日志结束时间（必填）格式为时间戳 毫秒 */
  EndTime: number;
  /** 项目ID（必填） */
  ID: number;
  /** 上次查询的最后一个日志的时间戳 */
  LastTime?: number;
  /** 上次查询的最后一个日志的rowId */
  LastRowId?: number;
}

declare interface DescribeRumLogTotalV2Response {
  /** 日志总量 */
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

declare interface DescribeRumStatsLogListV2Request {
  /** 查询日志开始时间（必填） */
  StartTime: number;
  /** 单次查询返回的原始日志条数，最大值为100（必填） */
  Limit: number;
  /** 过滤条件，其中key与运算符(Operator)对应可选字段枚举值与示例查看文档：日志查询相关 */
  Filter: string;
  /** 查询日志结束时间（必填） */
  EndTime: number;
  /** 项目ID（必填） */
  ID: number;
}

declare interface DescribeRumStatsLogListV2Response {
  /** 日志时间分布 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSampleRateRequest {
  /** 项目id */
  ProjectId: number;
}

declare interface DescribeSampleRateResponse {
  /** 结果 */
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

declare interface DescribeSessionListRequest {
  /** 应用id */
  AppId: string;
  /** 开始时间单位：毫秒 */
  StartTime: number;
  /** 结束时间单位：毫秒 */
  EndTime: number;
  /** session类型枚举值：all： 所有error： 错slow： 慢 */
  SessionType?: string;
  /** 页面号默认值：1 */
  Page?: number;
  /** 每一页的数量 */
  PageSize?: number;
  /** 排序字段 */
  SortBy?: string;
  /** 排序方式，ASC或DESC */
  SortOrder?: string;
  /** 用户id */
  UserId?: string;
  /** session id */
  SessionId?: string;
  /** 设备类型 */
  DeviceTypes?: string[];
  /** 浏览器 */
  Browsers?: string[];
  /** 操作系统 */
  OSList?: string[];
  /** 平台 */
  Platforms?: string[];
  /** 应用版本 */
  AppVersions?: string[];
  /** 国家 */
  Countries?: string[];
  /** 是否有挣扎事件 */
  HasStruggle?: boolean;
  /** 挣扎等级 */
  StruggleRanks?: string[];
  /** 挣扎事件类型 */
  StruggleTypes?: string[];
  /** 是否有错误 */
  HasError?: boolean;
  /** 访问页面 */
  VisitedPage?: string;
  /** 包含事件 */
  ContainsEvent?: string;
  /** 最小持续时间 */
  MinDuration?: number;
  /** 最大持续时间 */
  MaxDuration?: number;
  /** 性能过滤 */
  PerfFilter?: string;
  /** 地区 */
  Regions?: string[];
  /** 环境 */
  Environments?: string[];
  /** 筛选 */
  Filters?: string;
  /** 旅程起点页面。可选。不传表示不过滤。 */
  StartPage?: string;
  /** 旅程终点页面。可选。不传表示不过滤。 */
  EndPage?: string;
  /** 旅程筛选条件 JSON 字符串，格式与 Filters 相同：[{Key,Op,Values}]。可选。不传表示不过滤。 */
  JourneyFilters?: string;
}

declare interface DescribeSessionListResponse {
  /** 返回结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStruggleDistributionRequest {
  /** 应用id */
  AppId: string;
  /** 开始时间戳 */
  StartTime: number;
  /** 结束时间戳 */
  EndTime: number;
  /** 平台 */
  Platform?: string;
  /** 过滤条件 */
  Filters?: string;
  /** 旅程筛选条件 JSON 字符串，格式与 Filters 相同：[{Key,Op,Values}]。可选。不传表示不过滤。 */
  JourneyFilters?: string;
  /** 是否只看包含挣扎的会话。可选。不传表示不过滤。 */
  HasStruggle?: boolean;
  /** 旅程起点页面。可选。不传表示不过滤。 */
  StartPage?: string;
  /** 旅程终点页面。可选。不传表示不过滤。 */
  EndPage?: string;
}

declare interface DescribeStruggleDistributionResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSymbolArtifactUploadCredentialRequest {
  /** 制品类型。取值：js_sourcemap、ios_dsym、macos_dsym、windows_pdb、android_mapping、android_native、system_symbol。 */
  Kind: string;
  /** 上传文件名。 */
  FileName: string;
  /** 应用 ID。应用级制品必填；system_symbol 不传。 */
  AppId?: string;
  /** 兼容别名，未传 AppId 时使用。 */
  ProjectId?: string;
  /** 保留字段，请勿传入。 */
  Release?: string;
  /** 保留字段，请勿传入。 */
  Dist?: string;
  /** 保留字段，请勿传入。 */
  MinifiedUrl?: string;
  /** 保留字段，请勿传入。 */
  FileType?: string;
  /** 保留字段，请勿传入。 */
  DebugId?: string;
  /** 保留字段，请勿传入。 */
  BuildId?: string;
  /** 保留字段，请勿传入。 */
  AppVersion?: string;
  /** 保留字段，请勿传入。 */
  Platform?: string;
  /** 系统名称。 */
  OS?: string;
  /** 系统版本。 */
  OSVersion?: string;
  /** 保留字段，请勿传入。 */
  StorePath?: string;
  /** 文件内容类型，如 application/json。 */
  ContentType?: string;
}

declare interface DescribeSymbolArtifactUploadCredentialResponse {
  /** 上传临时凭证，JSON 格式字符串。 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSymbolArtifactsRequest {
  /** 制品类型。取值：js_sourcemap、ios_dsym、macos_dsym、windows_pdb、android_mapping、android_native、system_symbol。native_symbol 仅查询历史数据。 */
  Kind: string;
  /** 应用 ID。js_sourcemap 必填，其他应用级制品用于过滤。 */
  AppId?: string;
  /** 兼容别名，未传 AppId 时使用。 */
  ProjectId?: string;
  /** JS 应用版本过滤条件。 */
  Release?: string;
  /** JS 制品的历史 Dist 过滤条件。 */
  Dist?: string;
  /** JS 制品文件类型过滤条件。 */
  FileType?: string;
  /** 应用版本过滤条件。 */
  AppVersion?: string;
  /** 历史 native_symbol 的平台过滤条件。 */
  Platform?: string;
  /** 系统名称。system_symbol 场景过滤条件。 */
  OS?: string;
  /** 系统版本。system_symbol 场景过滤条件。 */
  OSVersion?: string;
  /** 状态过滤。可按 active、superseded、deleted、invalid 过滤。 */
  Status?: string;
  /** 分页大小。默认 50。 */
  Limit?: number;
  /** 分页游标。 */
  Cursor?: string;
}

declare interface DescribeSymbolArtifactsResponse {
  /** 制品列表，JSON 格式字符串，包含 artifacts、next_cursor 和 total。 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMApplicationsRequest {
  /** 分页偏移，默认 0 */
  Offset?: number;
  /** 每页数量，默认 20，上限 100 */
  Limit?: number;
  /** 业务系统 ID（可选，缺省返回名下全部应用） */
  InstanceId?: string;
  /** 演示模式开关 */
  DemoMode?: boolean;
}

declare interface DescribeTDEMApplicationsResponse {
  /** 总数 */
  TotalCount?: number;
  /** 应用列表 */
  ApplicationSet?: ApplicationItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMBusinessSystemsRequest {
  /** 分页偏移，默认 0 */
  Offset?: number;
  /** 每页数量，默认 20，上限 100 */
  Limit?: number;
  /** 演示模式开关 */
  DemoMode?: boolean;
}

declare interface DescribeTDEMBusinessSystemsResponse {
  /** 总数 */
  TotalCount?: number;
  /** 业务系统列表 */
  BusinessSystemSet?: BusinessSystemItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMDialDimensionsRequest {
  /** 应用 ID */
  AppId: string;
  /** 开始时间，毫秒时间戳 */
  StartTime: number;
  /** 结束时间，毫秒时间戳，必须大于 StartTime */
  EndTime: number;
  /** 维度。取值说明：platform、app_version、device、net_type、operator、region、country、target_ip。 */
  Dimension: string;
  /** 任务 ID。不传表示不过滤。 */
  TaskId?: string;
  /** 客户端平台。不传表示不过滤。 */
  Platform?: string;
  /** 应用版本。不传表示不过滤。 */
  AppVersion?: string;
  /** 设备机型，对应 device_type。不传表示不过滤。 */
  Device?: string;
  /** 网络类型，对应 network_type。不传表示不过滤。 */
  NetType?: string;
  /** 客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。 */
  Operator?: string;
  /** 客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。 */
  ClientRegion?: string;
  /** 目标 IP。不传表示不过滤。 */
  TargetIp?: string;
  /** 环境。可选。不传表示不过滤。 */
  Environment?: string;
}

declare interface DescribeTDEMDialDimensionsResponse {
  /** 本次查询的维度 */
  Dimension?: string;
  /** 维度统计项 */
  Items?: DialDimensionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMDialExecutionDetailRequest {
  /** 应用 ID */
  AppId: string;
  /** 开始时间，毫秒时间戳 */
  StartTime: number;
  /** 结束时间，毫秒时间戳，必须大于 StartTime */
  EndTime: number;
  /** 任务 ID。不传表示不过滤。 */
  TaskId: string;
  /** 拨测批次 ID */
  TaskSessionId: string;
  /** 客户端平台。不传表示不过滤。 */
  Platform?: string;
  /** 应用版本。不传表示不过滤。 */
  AppVersion?: string;
  /** 设备机型，对应 device_type。不传表示不过滤。 */
  Device?: string;
  /** 网络类型，对应 network_type。不传表示不过滤。 */
  NetType?: string;
  /** 客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。 */
  Operator?: string;
  /** 客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。 */
  ClientRegion?: string;
  /** 目标 IP。不传表示不过滤。 */
  TargetIp?: string;
  /** 环境。可选。不传表示不过滤。 */
  Environment?: string;
}

declare interface DescribeTDEMDialExecutionDetailResponse {
  /** 任务 ID */
  TaskId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 拨测批次 ID */
  TaskSessionId?: string;
  /** 批次开始时间，毫秒时间戳 */
  StartTime?: number;
  /** 所属用户会话 ID */
  SessionId?: string;
  /** 本批次是否全部探测成功 */
  Success?: boolean;
  /** 平均时延，单位毫秒 */
  AvgDuration?: number;
  /** 客户端平台 */
  Platform?: string;
  /** 应用版本 */
  AppVersion?: string;
  /** 设备机型 */
  Device?: string;
  /** 网络类型 */
  NetType?: string;
  /** 客户端运营商 */
  Operator?: string;
  /** 客户端地区 */
  Region?: string;
  /** 本批次目标 IP */
  TargetIps?: string[];
  /** 每个目标的探测结果 */
  Probes?: DialProbe[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMDialExecutionListRequest {
  /** 应用 ID */
  AppId: string;
  /** 开始时间，毫秒时间戳 */
  StartTime: number;
  /** 结束时间，毫秒时间戳，必须大于 StartTime */
  EndTime: number;
  /** 任务 ID。不传表示不过滤。 */
  TaskId?: string;
  /** 客户端平台。不传表示不过滤。 */
  Platform?: string;
  /** 应用版本。不传表示不过滤。 */
  AppVersion?: string;
  /** 设备机型，对应 device_type。不传表示不过滤。 */
  Device?: string;
  /** 网络类型，对应 network_type。不传表示不过滤。 */
  NetType?: string;
  /** 客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。 */
  Operator?: string;
  /** 客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。 */
  ClientRegion?: string;
  /** 目标 IP。不传表示不过滤。 */
  TargetIp?: string;
  /** 返回条数。范围 1 到 100，不传时为 20。 */
  Limit?: number;
  /** 偏移量。不传时为 0。 */
  Offset?: number;
  /** 是否只看成功或失败批次。不传表示不过滤。 */
  Success?: boolean;
  /** 环境。可选。不传表示不过滤。 */
  Environment?: string;
}

declare interface DescribeTDEMDialExecutionListResponse {
  /** 满足条件的批次数 */
  TotalCount?: number;
  /** 执行批次列表 */
  ExecutionSet?: DialExecution[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMDialOverviewRequest {
  /** 应用 ID */
  AppId: string;
  /** 开始时间，毫秒时间戳 */
  StartTime: number;
  /** 结束时间，毫秒时间戳，必须大于 StartTime */
  EndTime: number;
  /** 任务 ID。不传表示不过滤。 */
  TaskId?: string;
  /** 客户端平台。不传表示不过滤。 */
  Platform?: string;
  /** 应用版本。不传表示不过滤。 */
  AppVersion?: string;
  /** 设备机型，对应 device_type。不传表示不过滤。 */
  Device?: string;
  /** 网络类型，对应 network_type。不传表示不过滤。 */
  NetType?: string;
  /** 客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。 */
  Operator?: string;
  /** 客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。 */
  ClientRegion?: string;
  /** 目标 IP。不传表示不过滤。 */
  TargetIp?: string;
  /** 环境。可选。不传表示不过滤。 */
  Environment?: string;
}

declare interface DescribeTDEMDialOverviewResponse {
  /** 任务数 */
  TaskCount?: number;
  /** 执行批次数 */
  ExecutionCount?: number;
  /** 成功批次数 */
  SuccessCount?: number;
  /** 失败批次数 */
  FailCount?: number;
  /** 平均时延，单位毫秒 */
  AvgDuration?: number;
  /** 平均丢包率，0 到 100 */
  AvgLoss?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMDialTasksRequest {
  /** 应用 ID */
  AppId: string;
}

declare interface DescribeTDEMDialTasksResponse {
  /** 拨测任务列表 */
  TaskSet?: DialTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMDialTrendRequest {
  /** 应用 ID */
  AppId: string;
  /** 开始时间，毫秒时间戳 */
  StartTime: number;
  /** 结束时间，毫秒时间戳，必须大于 StartTime */
  EndTime: number;
  /** 任务 ID。不传表示不过滤。 */
  TaskId?: string;
  /** 客户端平台。不传表示不过滤。 */
  Platform?: string;
  /** 应用版本。不传表示不过滤。 */
  AppVersion?: string;
  /** 设备机型，对应 device_type。不传表示不过滤。 */
  Device?: string;
  /** 网络类型，对应 network_type。不传表示不过滤。 */
  NetType?: string;
  /** 客户端运营商，对应 isp。不传表示不过滤。不是目标 IP 运营商。 */
  Operator?: string;
  /** 客户端地区，对应 province。云 API 公共参数已占用 Region，筛选入参名为 ClientRegion。不传表示不过滤。不是目标 IP 地区。 */
  ClientRegion?: string;
  /** 目标 IP。不传表示不过滤。 */
  TargetIp?: string;
  /** 时间粒度。取值说明：hour、day。不传时为 hour。 */
  Granularity?: string;
  /** 环境。可选。不传表示不过滤。 */
  Environment?: string;
}

declare interface DescribeTDEMDialTrendResponse {
  /** 趋势点 */
  Points?: DialTrendPoint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMEventDetailRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 事件 ID（必填） */
  EventId: string;
  /** 分区日期 YYYY-MM-DD（推荐） */
  Date?: string;
}

declare interface DescribeTDEMEventDetailResponse {
  /** 事件主表视图 */
  Event?: EventView;
  /** 符号化结果，未翻译时可省略 */
  Symbolicated?: SymbolicatedView | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMEventRankRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 开始时间 Unix 毫秒（必填） */
  StartTime: number;
  /** 结束时间 Unix 毫秒（必填） */
  EndTime: number;
  /** 排行类型：error/api/resource/api_page/resource_page/api_status/api_status_top/resource_status/tag；exception_dimension 为异常维度同源统计，使用 ExceptionDistribution 返回结果。 */
  Kind: string;
  /** 旧 Kind 保持既有错误类型过滤规则；Kind=exception_dimension 标签模式必填，允许 js_error、promise_error、api_error、resource_error、blank_screen、log、native_crash、crash、no_response、lag_detected、app_launch。合法重复值去重，未知值拒绝；普通维度模式不传。 */
  EventTypes?: string[];
  /** 旧 Kind=tag 保持既有标签查询；Kind=exception_dimension 标签模式必填，与 GroupBy 二选一。使用既有标签名规范，长度 1–64，允许字母数字及 _-.；标签值保留原始内容。 */
  TagKey?: string;
  /** 返回条数，上限100。旧 Kind 缺省50；Kind=exception_dimension 缺省100，显式值为1–100，限制完整归一化维度行数，不裁剪分类向量。 */
  Limit?: number;
  /** 旧 Kind 可选粒度5m/1h/1d；Kind=exception_dimension 不支持，传非空值返回 InvalidParameter。 */
  Granularity?: string;
  /** 筛选条件 JSON 字符串，走 events 表白名单 */
  Filters?: string;
  /** 旧 Kind 耗时口径 avg/p50/p75/p95/p99；Kind=exception_dimension 不支持，传非空值返回 InvalidParameter。 */
  CostType?: string;
  /** 异常分布的聚合维度，仅 Kind=exception_dimension 的普通维度模式使用且必填。标签模式只传 TagKey，不传 GroupBy。枚举值：device_type： 设备型号os： 操作系统browser： 浏览器app_version： 应用版本province： 省份platform： 平台network_type： 网络类型 */
  GroupBy?: string;
  /** 仅 Kind=exception_dimension 普通维度模式必填。允许 web、android、ios，须与应用平台及 CategoryKeys 目录一致。标签模式不传。 */
  ProjectType?: string;
  /** 仅 Kind=exception_dimension 普通维度模式必填，为页面实际有效的异常目录 key 非空去重集合。仅接受对应 ProjectType 的固定目录，包含项须同时选择父项；未知、重复、空目录及互斥参数组合返回 InvalidParameter。标签模式不传。 */
  CategoryKeys?: string[];
}

declare interface DescribeTDEMEventRankResponse {
  /** 排行行 */
  Items?: EventRankItem[];
  /** 仅 Kind=exception_dimension 返回。Rows 为完整维度行及固定分类向量；空数据返回 Rows=[]。父行 TotalCount 等于 IncludedInTotal=true 的主项 Count 之和，包含项仅展示且不重复计总。所有计数为0至9007199254740991的整数。旧 Kind 继续使用 Items。 */
  ExceptionDistribution?: ExceptionDistribution;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMEventSearchRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 开始时间 Unix 毫秒（必填） */
  StartTime: number;
  /** 结束时间 Unix 毫秒（必填） */
  EndTime: number;
  /** 事件分类（必填，禁止 session） */
  Category: string;
  /** 筛选条件 JSON 字符串：[{Key,Op,Values}]，须在探索白名单 */
  Filters?: string;
  /** 排序字段：timestamp（默认）/ duration */
  SortBy?: string;
  /** 排序方向：asc / desc，默认 desc */
  SortOrder?: string;
  /** 页码，>=1，默认 1 */
  Page?: number;
  /** 每页条数，1-100，默认 20 */
  PageSize?: number;
  /** 是否只看有错误的会话。可选。不传表示不过滤。Category 为 session 的汇总查询会使用该条件。 */
  HasError?: boolean;
  /** 会话最短时长，单位毫秒。可选。0 或不传表示不限制。Category 为 session 的汇总查询会使用该条件。 */
  MinDuration?: number;
  /** 会话最长时长，单位毫秒。可选。0 或不传表示不限制。Category 为 session 的汇总查询会使用该条件。 */
  MaxDuration?: number;
}

declare interface DescribeTDEMEventSearchResponse {
  /** 事件列表 */
  Events?: ExplorationEventItem[];
  /** 总条数 */
  Total?: number;
  /** 页码 */
  Page?: number;
  /** 每页条数 */
  PageSize?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMEventSearchSummaryRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 开始时间 Unix 毫秒（必填） */
  StartTime: number;
  /** 结束时间 Unix 毫秒（必填） */
  EndTime: number;
  /** 事件分类（必填，可含 session） */
  Category: string;
  /** 筛选条件 JSON 字符串：[{Key,Op,Values}] */
  Filters?: string;
  /** 分桶秒数，正整数；缺省由服务端按窗口选取 */
  IntervalSec?: number;
  /** 是否只看有错误的会话。可选。不传表示不过滤。Category 为 session 的汇总查询会使用该条件。 */
  HasError?: boolean;
  /** 会话最短时长，单位毫秒。可选。0 或不传表示不限制。Category 为 session 的汇总查询会使用该条件。 */
  MinDuration?: number;
  /** 会话最长时长，单位毫秒。可选。0 或不传表示不限制。Category 为 session 的汇总查询会使用该条件。 */
  MaxDuration?: number;
}

declare interface DescribeTDEMEventSearchSummaryResponse {
  /** 各分类窗口计数，Key 为分类 id */
  CategoryCounts?: IntKeyValue[];
  /** 当前分类窗口条数 */
  Total?: number;
  /** 访问用户（设备） */
  Visitors?: number;
  /** 业务用户 */
  Users?: number;
  /** 实际分桶秒数 */
  IntervalSec?: number;
  /** 分桶趋势 */
  Series?: EventSearchSeriesPoint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMFieldTransformRulesRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 分页偏移，默认 0 */
  Offset?: number;
  /** 每页数量 */
  Limit?: number;
}

declare interface DescribeTDEMFieldTransformRulesResponse {
  /** 总数 */
  TotalCount?: number;
  /** 规则列表 */
  FieldTransformRuleSet?: FieldTransformRuleItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMFunnelDetailRequest {
  /** 应用id */
  AppId: string;
  /** 漏斗id */
  FunnelId: string;
}

declare interface DescribeTDEMFunnelDetailResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMFunnelDimensionsRequest {
  /** 应用id */
  AppId: string;
  /** 漏斗id */
  FunnelId: string;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 维度 */
  Dimension?: string;
  /** 平台 */
  Platform?: string;
  /** 设备类型 */
  DeviceType?: string;
  /** 浏览器 */
  Browser?: string;
  /** 操作系统 */
  OS?: string;
  /** 国家 */
  Country?: string;
  /** 页面来源 */
  Referrer?: string;
  /** 应用版本 */
  AppVersion?: string;
  /** 环境 */
  Environment?: string;
}

declare interface DescribeTDEMFunnelDimensionsResponse {
  /** 结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMFunnelListRequest {
  /** 应用id */
  AppId: string;
  /** 关键字，用于过滤漏斗名 */
  Keyword?: string;
  /** 漏斗状态 */
  Status?: string;
  /** 页面号 */
  Page?: number;
  /** 页面数量 */
  PageSize?: number;
}

declare interface DescribeTDEMFunnelListResponse {
  /** 结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMFunnelReportRequest {
  /** 应用id */
  AppId: string;
  /** 漏斗id */
  FunnelId: string;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 平台 */
  Platform?: string;
  /** 设备类型 */
  DeviceType?: string;
  /** 浏览器 */
  Browser?: string;
  /** 操作系统 */
  OS?: string;
  /** 国家 */
  Country?: string;
  /** 页面来源 */
  Referrer?: string;
  /** 应用版本 */
  AppVersion?: string;
  /** 环境选择 */
  Environment?: string;
}

declare interface DescribeTDEMFunnelReportResponse {
  /** 结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMFunnelStepSessionListRequest {
  /** 应用id */
  AppId: string;
  /** 漏斗id */
  FunnelId: string;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 步骤索引 */
  StepIndex: number;
  /** 漏斗步骤 */
  Steps?: string;
  /** 下钻类型 */
  DrillType?: string;
  /** 页面号 */
  Page?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 平台 */
  Platform?: string;
  /** 应用版本 */
  AppVersion?: string;
  /** 设备类型 */
  DeviceType?: string;
  /** 浏览器 */
  Browser?: string;
  /** 操作系统 */
  OS?: string;
  /** 国家 */
  Country?: string;
  /** 页面来源 */
  Referrer?: string;
  /** 环境 */
  Environment?: string;
}

declare interface DescribeTDEMFunnelStepSessionListResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMFunnelTrendRequest {
  /** 应用id */
  AppId: string;
  /** 漏斗id */
  FunnelId: string;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 间隔 */
  Interval?: string;
  /** 平台 */
  Platform?: string;
  /** 应用版本 */
  AppVersion?: string;
  /** 设备类型 */
  DeviceType?: string;
  /** 浏览器 */
  Browser?: string;
  /** 操作系统 */
  OS?: string;
  /** 国家 */
  Country?: string;
  /** 页面来源 */
  Referrer?: string;
  /** 环境 */
  Environment?: string;
}

declare interface DescribeTDEMFunnelTrendResponse {
  /** 结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMMetricDistributionRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 开始时间 Unix 毫秒（必填） */
  StartTime: number;
  /** 结束时间 Unix 毫秒（必填） */
  EndTime: number;
  /** 顶层事件类型；单查必填，批量用 Queries 时可不填 */
  EventType?: string;
  /** 子类型；未知返回 0 */
  SubType?: string;
  /** 筛选条件 JSON 字符串：[{Key,Op,Values}]，走分析立方白名单 */
  Filters?: string;
  /** 指标名列表，如 count / rate；单查必填 */
  Metrics?: string[];
  /** 分位/均值必填，如 lcp / duration */
  MeasurementKey?: string;
  /** 单维度（Distribution 用） */
  GroupBy?: string;
  /** 返回条数，Top 默认 10 上限 100 */
  Limit?: number;
  /** 批量查询，上限 32 */
  Queries?: MetricQueryItem[];
}

declare interface DescribeTDEMMetricDistributionResponse {
  /** 单查分布桶 */
  Items?: MetricDistributionItem[] | null;
  /** 单查合计，批量为空时省略 */
  Total?: number;
  /** 批量结果，Queries 非空时返回 */
  Results?: MetricDistributionBatchItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMMetricSummaryRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 开始时间 Unix 毫秒（必填） */
  StartTime: number;
  /** 结束时间 Unix 毫秒（必填） */
  EndTime: number;
  /** 顶层事件类型；单查必填，批量用 Queries 时可不填 */
  EventType?: string;
  /** 子类型；未知返回 0 */
  SubType?: string;
  /** 筛选条件 JSON 字符串：[{Key,Op,Values}]，走分析立方白名单 */
  Filters?: string;
  /** 指标名列表，如 count / rate；单查必填 */
  Metrics?: string[];
  /** 分位/均值必填，如 lcp / duration */
  MeasurementKey?: string;
  /** 批量查询，上限 32 */
  Queries?: MetricQueryItem[];
}

declare interface DescribeTDEMMetricSummaryResponse {
  /** 单查指标。缺测指标不出现，禁止 null */
  Metrics?: FloatNameValue[] | null;
  /** 批量结果，Queries 非空时返回 */
  Results?: MetricSummaryBatchItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMMetricTrendRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 开始时间 Unix 毫秒（必填） */
  StartTime: number;
  /** 结束时间 Unix 毫秒（必填） */
  EndTime: number;
  /** 粒度：5m（默认）/ 1h / 1d；跨度大时服务端可加粗 */
  Granularity?: string;
  /** 顶层事件类型；单查必填，批量用 Queries 时可不填 */
  EventType?: string;
  /** 子类型；未知返回 0 */
  SubType?: string;
  /** 筛选条件 JSON 字符串：[{Key,Op,Values}]，走分析立方白名单 */
  Filters?: string;
  /** 指标名列表，如 count / rate；单查必填 */
  Metrics?: string[];
  /** 分位/均值必填，如 lcp / duration */
  MeasurementKey?: string;
  /** 批量查询，上限 32 */
  Queries?: MetricQueryItem[];
  /** 对比窗开始 Unix 毫秒（仅 Trend 批量，须与 CompareEndTime 成对） */
  CompareStartTime?: number;
  /** 对比窗结束 Unix 毫秒（仅 Trend 批量） */
  CompareEndTime?: number;
}

declare interface DescribeTDEMMetricTrendResponse {
  /** 实际生效粒度 */
  Granularity?: string;
  /** 单查时序 */
  Series?: MetricTrendPoint[] | null;
  /** 批量结果，Queries 非空时返回 */
  Results?: MetricTrendBatchItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMOverviewScoresRequest {
  /** 应用 ID 列表，1-200（必填） */
  AppIds: string[];
  /** 开始时间 Unix 毫秒（必填） */
  StartTime: number;
  /** 结束时间 Unix 毫秒（必填） */
  EndTime: number;
  /** 筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。可选。总览总分按环境筛选时传入。 */
  Filters?: string;
}

declare interface DescribeTDEMOverviewScoresResponse {
  /** 各应用评分 */
  Scores?: AppOverviewScore[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMRelatedEventsRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 开始时间 Unix 毫秒（必填，用于分区裁剪） */
  StartTime: number;
  /** 结束时间 Unix 毫秒（必填） */
  EndTime: number;
  /** 模式：timeline / page / breadcrumb（必填） */
  Mode: string;
  /** 会话 ID（必填） */
  SessionId: string;
  /** 页面 URL（Mode=page 必填） */
  PageUrl?: string;
  /** 锚点 Unix 毫秒（Mode=page/breadcrumb 使用） */
  AnchorTimestamp?: number;
  /** 偏移，>=0，默认 0 */
  Offset?: number;
  /** 条数，1-200，默认 200 */
  Limit?: number;
  /** 事件分类（可选） */
  Category?: string;
  /** 关键字（可选） */
  Keyword?: string;
  /** 视图 ID */
  ViewId?: string;
}

declare interface DescribeTDEMRelatedEventsResponse {
  /** 关联事件，schema 与 Search 列表项相同 */
  Events?: ExplorationEventItem[];
  /** 偏移 */
  Offset?: number;
  /** 条数 */
  Limit?: number;
  /** 是否还有下一页 */
  HasMore?: boolean;
  /** 各分类计数，Key 为分类 id */
  CategoryCounts?: IntKeyValue[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMSSEDimensionsRequest {
  /** 应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。 */
  AppId: string;
  /** 开始时间，Unix 毫秒。 */
  StartTime: number;
  /** 结束时间，Unix 毫秒。须通过现有时间范围校验。 */
  EndTime: number;
  /** 指标。取值说明：token_throughput（token 吞吐率，token/秒）、first_message_delay（首次消息时延，毫秒）、error_rate（错误率，已乘 100 的百分比）、stall_rate（卡死率，已乘 100 的百分比）、fluency（流畅度，已乘 100 的百分比）。 */
  Metric: string;
  /** 多维分析维度。取值说明：region、app_version、platform、os、network_type、server_ip、isp、model_version。region 由 country 与 province 拼接，不属于趋势维度。 */
  Dimension: string;
  /** 筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。 */
  Filters?: string;
}

declare interface DescribeTDEMSSEDimensionsResponse {
  /** 按当前指标值降序的维度行，最多 200 行。没有对话时为空数组。 */
  Rows?: TDEMSSEDimensionRow[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMSSEDistributionRequest {
  /** 应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。 */
  AppId: string;
  /** 开始时间，Unix 毫秒。 */
  StartTime: number;
  /** 结束时间，Unix 毫秒。须通过现有时间范围校验。 */
  EndTime: number;
  /** 指标。只允许 token_throughput、first_message_delay、fluency。error_rate 与 stall_rate 返回 InvalidParameter。 */
  Metric: string;
  /** 筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。 */
  Filters?: string;
}

declare interface DescribeTDEMSSEDistributionResponse {
  /** 分布档。没有样本时为空数组。最后一档 Overflow 为 true 且省略 End。 */
  Bins?: TDEMSSEDistributionBin[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMSSEPercentileRequest {
  /** 应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。 */
  AppId: string;
  /** 开始时间，Unix 毫秒。 */
  StartTime: number;
  /** 结束时间，Unix 毫秒。须通过现有时间范围校验。 */
  EndTime: number;
  /** 指标。只允许 token_throughput、first_message_delay、fluency。error_rate 与 stall_rate 返回 InvalidParameter。 */
  Metric: string;
  /** 筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。 */
  Filters?: string;
}

declare interface DescribeTDEMSSEPercentileResponse {
  /** 时间桶宽度，单位秒，与趋势查询使用同一套分桶。 */
  IntervalSec?: number;
  /** 整个时间窗的算术平均。没有有效样本时为 null。 */
  Average?: number | null;
  /** 整个时间窗的 50 分位。没有有效样本时为 null。 */
  P50?: number | null;
  /** 整个时间窗的 75 分位。没有有效样本时为 null。 */
  P75?: number | null;
  /** 整个时间窗的 95 分位。没有有效样本时为 null。 */
  P95?: number | null;
  /** 整个时间窗的 99 分位。没有有效样本时为 null。 */
  P99?: number | null;
  /** 各时间桶的平均值和分位。没有样本的桶不返回，全部没有样本时为空数组。 */
  Points?: TDEMSSEPercentilePoint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMSSESummaryRequest {
  /** 应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。 */
  AppId: string;
  /** 开始时间，Unix 毫秒。 */
  StartTime: number;
  /** 结束时间，Unix 毫秒。须通过现有时间范围校验。 */
  EndTime: number;
  /** 筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。 */
  Filters?: string;
}

declare interface DescribeTDEMSSESummaryResponse {
  /** 对话次数。一条大模型对话对应一条 sse_call。 */
  ConversationCount?: number;
  /** token 总数。对话次数为 0 时为 0。 */
  TotalTokenCount?: number;
  /** token 吞吐率，单位 token/秒。对话次数为 0 时为 null。 */
  TokenThroughput?: number | null;
  /** 首次消息时延，单位毫秒。对话次数为 0 时为 null。 */
  FirstMessageDelay?: number | null;
  /** 错误率，已乘 100。对话次数为 0 时为 null。 */
  ErrorRate?: number | null;
  /** 卡死率，已乘 100。对话次数为 0 时为 null。 */
  StallRate?: number | null;
  /** 流畅度，已乘 100。对话次数为 0 时为 null。 */
  Fluency?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMSSETrendRequest {
  /** 应用 ID。这里是业务应用标识，不是腾讯云账号 AppId。 */
  AppId: string;
  /** 开始时间，Unix 毫秒。 */
  StartTime: number;
  /** 结束时间，Unix 毫秒。须通过现有时间范围校验。 */
  EndTime: number;
  /** 指标。取值说明：token_throughput（token 吞吐率，token/秒）、first_message_delay（首次消息时延，毫秒）、error_rate（错误率，已乘 100 的百分比）、stall_rate（卡死率，已乘 100 的百分比）、fluency（流畅度，已乘 100 的百分比）。 */
  Metric: string;
  /** 趋势维度。取值说明：overall、model_version、network_type、server_ip、isp。overall 返回 Points，其他维度返回 Series。 */
  Dimension: string;
  /** 筛选条件 JSON 字符串，格式为 [{Key,Op,Values}]。Op 只允许 in。Key 只允许 model_version、app_version、platform、os、region、is_error、is_stall、network_type、server_ip、isp、user_id。is_error 与 is_stall 的值只允许 true 或 false。 */
  Filters?: string;
  /** 头部维度数量，只允许 7、10、20。Dimension 为 overall 时忽略。 */
  TopN?: number;
}

declare interface DescribeTDEMSSETrendResponse {
  /** 时间桶宽度，单位秒。 */
  IntervalSec?: number;
  /** Dimension 为 overall 时的时间桶。没有对话时为空数组。 */
  Points?: TDEMSSETrendPoint[];
  /** 非 overall 时按指标从高到低取 TopN 后的序列。没有对话时为空数组。 */
  Series?: TDEMSSETrendSeries[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMSampleConfigRequest {
  /** 项目ID */
  AppId: string;
}

declare interface DescribeTDEMSampleConfigResponse {
  /** 业务数据 JSON 字符串，反序列化后：{ProjectId,Event,Replay,SnapshotId,UpdatedAt}。Event/Replay 结构见 ModifyTDEMSampleConfig 入参说明。无行时 SnapshotId=0、UpdatedAt 为空。 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMSampleRateRequest {
  /** 应用 ID（必填） */
  AppId: string;
}

declare interface DescribeTDEMSampleRateResponse {
  /** 应用 ID */
  AppId?: string;
  /** 采集采样率 0-100 */
  SampleRate?: number;
  /** 会话回放采样率 0-100；未配置时为 1 */
  ReplaySampleRate?: number;
  /** 创建时间 */
  CreatedAt?: string;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMSessionReplayTimelineRequest {
  /** 应用id */
  AppId: string;
  /** 会话id */
  SessionId: string;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
  /** 数量限制 */
  Limit?: number;
  /** 游标 */
  Cursor?: number;
  /** 时间线分页的事件ID游标，与时间游标Cursor共同定位续页起点，用于同一时间戳下的稳定分页。 */
  CursorEventId?: string;
}

declare interface DescribeTDEMSessionReplayTimelineResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMUsageDetailRequest {
  /** 开始时间，YYYY-MM-DD HH:00:00（小时对齐，必填） */
  StartTime: string;
  /** 结束时间，YYYY-MM-DD HH:00:00（小时对齐，必填） */
  EndTime: string;
  /** 可选关键字，匹配业务系统名称、应用名称或应用 ID */
  Keyword?: string;
  /** 分页偏移，默认 0 */
  Offset?: number;
  /** 每页数量，默认 20，上限 100 */
  Limit?: number;
  /** 演示模式开关 */
  DemoMode?: boolean;
}

declare interface DescribeTDEMUsageDetailResponse {
  /** 总行数 */
  TotalCount?: number;
  /** 当前结果集上报合计 */
  ReportVolume?: number;
  /** 明细 */
  DetailSet?: UsageDetailRow[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTDEMUsageSummaryRequest {
  /** 开始时间，YYYY-MM-DD HH:00:00（小时对齐，必填） */
  StartTime: string;
  /** 结束时间，YYYY-MM-DD HH:00:00（小时对齐，必填） */
  EndTime: string;
  /** 演示模式开关 */
  DemoMode?: boolean;
}

declare interface DescribeTDEMUsageSummaryResponse {
  /** 上报总量 */
  ReportVolume?: number;
  /** 窗口内有量应用数 */
  ResourceCount?: number;
  /** hour 或 day */
  Granularity?: string;
  /** 趋势 */
  ByDate?: UsageTimePoint[];
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

declare interface DescribeUserJourneySanKeyRequest {
  /** 应用id */
  AppId: string;
  /** 开始时间 */
  StartTime: number;
  /** 结束时间 */
  EndTime: number;
  /** 平台 */
  Platform?: string;
  /** 过滤条件 */
  Filters?: string;
  /** 每一步骤的数量 */
  TopPagesPerStep?: number;
  /** 每一个节点最小的会话数量 */
  MinSessionThreshold?: number;
  /** 开始页面 */
  StartPage?: string;
  /** 结束页面 */
  EndPage?: string;
  /** 是否有挣扎事件 */
  HasStruggle?: boolean;
}

declare interface DescribeUserJourneySanKeyResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
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

declare interface ModifyFieldTransformRuleRequest {
  /** 规则id */
  Id: number;
  /** 项目id */
  ProjectId: number;
  /** 规则名 */
  Name: string;
  /** 目标字段 */
  TargetField: string;
  /** 匹配方式 */
  MatchType: string;
  /** 匹配规则 */
  MatchPattern: string;
  /** 转换方式 */
  TransformAction: string;
  /** 替换值 */
  ReplaceValue?: string;
  /** 规则优先级 */
  Priority?: number;
  /** 是否开启 */
  Enabled?: boolean;
}

declare interface ModifyFieldTransformRuleResponse {
  /** 结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
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

declare interface ModifyIssueStatusRequest {
  /** 应用 ID */
  AppId: string;
  /** Issue ID */
  IssueId: string;
  /** 状态动作，可选值：resolve、ignore、reopen */
  IssueAction: string;
  /** 解决版本；当 IssueAction=resolve 时可传，不传则默认使用 latest_release */
  ResolvedRelease?: string;
}

declare interface ModifyIssueStatusResponse {
  /** 业务结果 JSON 字符串；前端会再做一次 JSON 解析。Result 内业务 JSON 为 Data，内容是状态流转结果 */
  Result?: string;
  /** 错误信息；正常返回时为空 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMiniProgramReplayPackRequest {
  /** 应用id */
  AppId: string;
  /** 回放包id（前缀mpr_） */
  PackId: string;
  /** 应用版本（可选） */
  Release?: string;
}

declare interface ModifyMiniProgramReplayPackResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 请求结果（JSON字符串，包含 PackId/AppId/BundleHash/Release/Status） */
  Result?: string;
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

declare interface ModifySampleRateRequest {
  /** 项目id */
  ProjectId: number;
  /** 会话采样率 */
  SampleRate?: number;
  /** 录制采样率 */
  ReplaySampleRate?: number;
}

declare interface ModifySampleRateResponse {
  /** 返回结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTDEMApplicationRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 应用名称（可选） */
  Name?: string;
  /** 应用描述（可选） */
  Desc?: string;
  /** 是否排除已忽略错误 */
  ExcludeIgnoredErrors?: boolean;
  /** APM 实例 ID 列表 */
  ApmInstanceIds?: string[];
}

declare interface ModifyTDEMApplicationResponse {
  /** 应用 ID */
  AppId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTDEMBusinessSystemRequest {
  /** 业务系统 ID（必填） */
  InstanceId: string;
  /** 业务系统名称（可选） */
  InstanceName?: string;
  /** 业务系统描述（可选） */
  InstanceDesc?: string;
}

declare interface ModifyTDEMBusinessSystemResponse {
  /** 业务系统 ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTDEMDialTaskRequest {
  /** 应用 ID */
  AppId: string;
  /** 任务 ID */
  TaskId: string;
  /** 任务名称。不传表示不修改。 */
  TaskName?: string;
  /** 任务状态。取值说明：active、paused。不传表示不修改。不能改为 deleted。 */
  Status?: string;
  /** 探测类型。创建后不可修改。 */
  Type?: string;
  /** 执行时机。创建后不可修改。 */
  ExecutionTime?: string;
  /** 监听域名。不传表示不修改。 */
  WatchDomain?: string;
  /** 拨测目标。不传表示不修改。 */
  DialDomain?: string;
  /** TCP 端口。不传表示不修改。 */
  Port?: number;
  /** 实时拨测间隔，单位毫秒。不传表示不修改。 */
  FrequencyMs?: number;
  /** 单次探测超时，单位毫秒。不传表示不修改。 */
  TimeoutMs?: number;
  /** 探测周期，单位毫秒。不传表示不修改。 */
  PeriodMs?: number;
  /** 发包次数。不传表示不修改。 */
  PackageCount?: number;
  /** ICMP 包大小，单位字节。不传表示不修改。 */
  PackageSize?: number;
  /** 是否做路由追踪。取值说明：0 否，1 是。不传表示不修改。 */
  NeedMTR?: number;
  /** 路由追踪超时，单位毫秒。不传表示不修改。 */
  MTRTimeoutMs?: number;
  /** 路由追踪最大跳数。不传表示不修改。 */
  MTRMaxHop?: number;
  /** 每一跳发包次数。不传表示不修改。 */
  MTRPingCount?: number;
  /** 慢请求阈值，单位毫秒。不传表示不修改。 */
  SlowThresholdMs?: number;
  /** 错误类型过滤。不传表示不修改。 */
  ErrorType?: string;
  /** 允许启动的客户端地区，逗号分隔，名称必须与分析页客户端地区完全一致。不传保留原值，空字符串清空。空名单表示不限制。 */
  Regions?: string;
  /** 允许启动的客户端运营商，逗号分隔，名称必须与分析页客户端运营商完全一致。不传保留原值，空字符串清空。空名单表示不限制。 */
  Operators?: string;
  /** 允许启动的用户 ID，逗号分隔。不传保留原值，空字符串清空。空名单表示不限制。 */
  UserIds?: string;
  /** 允许启动的设备 ID，逗号分隔。不传保留原值，空字符串清空。空名单表示不限制。 */
  DeviceIds?: string;
}

declare interface ModifyTDEMDialTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTDEMFieldTransformRuleRequest {
  /** 规则 ID（必填） */
  Id: number;
  /** 应用 ID（必填） */
  AppId: string;
  /** 目标字段（必填） */
  TargetField: string;
  /** 匹配方式（必填）：exact / prefix / contains / regex */
  MatchType: string;
  /** 匹配模式（必填） */
  MatchPattern: string;
  /** 替换动作（必填）：replace / regex_replace / mask */
  TransformAction: string;
  /** 规则名称（可选） */
  Name?: string;
  /** 替换值 */
  ReplaceValue?: string;
  /** 优先级 */
  Priority?: number;
  /** 是否启用 */
  Enabled?: boolean;
}

declare interface ModifyTDEMFieldTransformRuleResponse {
  /** 修改后的规则 */
  Rule?: FieldTransformRuleItem;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTDEMFunnelRequest {
  /** 应用id */
  AppId: string;
  /** 漏斗id */
  FunnelId: string;
  /** 漏斗名 */
  FunnelName: string;
  /** 漏斗步骤 */
  Steps: FunnelStepInput[];
  /** 漏斗描述 */
  Description?: string;
  /** 漏斗状态 */
  Status?: string;
  /** 漏斗来源 */
  Source?: string;
}

declare interface ModifyTDEMFunnelResponse {
  /** 请求结果 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTDEMSampleConfigRequest {
  /** 应用ID */
  AppId: string;
  /** 事件采样配置 JSON 字符串。反序列化后：{"Enabled":bool,"Types":{<event_type>:{"SampleRate":0-100最多两位小数,"Rules":[{"Name":string,"Enabled":bool,"SampleRate":0-100,"Conditions":[{"Field":string,"Operator":string,"Value":string或string[]}]}]}}}。Types 可只含改过的 type；未出现的 type 服务端视为 100% + 空规则。Types key 闭集：js_error,promise_error,resource_error,api_error,blank_screen,no_response,page_load,web_vitals,lag_detected,memory_usage,memory_oom,resource_load,api_call,sse_call,click,page_view,tab_hidden,tab_visible,form_focus,form_blur,form_change,form_submit,form_submit_result,struggle,custom,log（不含 rage_click/lcp）。Operator 白名单：equals,not_equals,contains,not_contains,in,not_in,starts_with,ends_with。规则 Conditions 至少 1 条；in/not_in 的 Value 为字符串数组。 */
  Event: string;
  /** 回放采样配置 JSON 字符串。反序列化后：{"Enabled":bool,"ExperienceSampleRate":0-100最多两位小数,"ErrorTraceback":bool,"ErrorSampleRate":0-100最多两位小数}。控制台/远程字段名为 ExperienceSampleRate（非 SessionSampleRate）。 */
  Replay: string;
}

declare interface ModifyTDEMSampleConfigResponse {
  /** 业务数据 JSON 字符串，反序列化后：{ProjectId,Event,Replay,SnapshotId,UpdatedAt}。SnapshotId 为本次写入的快照主键。 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTDEMSampleRateRequest {
  /** 应用 ID（必填） */
  AppId: string;
  /** 采集采样率 0-100（必填） */
  SampleRate: number;
  /** 会话回放采样率 0-100（可选） */
  ReplaySampleRate?: number;
}

declare interface ModifyTDEMSampleRateResponse {
  /** 应用 ID */
  AppId?: string;
  /** 采集采样率 0-100 */
  SampleRate?: number;
  /** 会话回放采样率 0-100 */
  ReplaySampleRate?: number;
  /** 更新时间 */
  UpdatedAt?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PreviewTDEMFunnelReportRequest {
  /** 应用id */
  AppId: string;
  /** 开始时间戳（毫秒） */
  StartTime: string;
  /** 结束时间戳（毫秒） */
  EndTime: string;
  /** 漏斗步骤配置JSON字符串（2~20步），格式：[{"StepName":"首页","PagePattern":"/","PageMatchMode":"exact","Selector":"","ActionType":"page_view","VisualName":""}] */
  Steps: string;
  /** 平台筛选 */
  Platform?: string;
  /** 应用版本筛选 */
  AppVersion?: string;
  /** 设备类型筛选 */
  DeviceType?: string;
  /** 浏览器筛选 */
  Browser?: string;
  /** 操作系统筛选 */
  OS?: string;
  /** 国家/地区筛选 */
  Country?: string;
  /** 来源筛选 */
  Referrer?: string;
  /** 环境选择 */
  Environment?: string;
}

declare interface PreviewTDEMFunnelReportResponse {
  /** 请求结果（JSON字符串，包含 FunnelId/FunnelName/Summary/Steps/Chart） */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
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

declare interface ResumeTDEMApplicationRequest {
  /** 应用 ID（必填） */
  AppId: string;
}

declare interface ResumeTDEMApplicationResponse {
  /** 应用 ID */
  AppId?: string;
  /** 恢复后为 2 */
  Status?: number;
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

declare interface StopTDEMApplicationRequest {
  /** 应用 ID（必填） */
  AppId: string;
}

declare interface StopTDEMApplicationResponse {
  /** 应用 ID */
  AppId?: string;
  /** 停止后为 6 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadMiniProgramSourceRequest {
  /** 应用id */
  AppId: string;
  /** 源码zip的Base64，请求包上限10240KB */
  FileBase64: string;
  /** 应用版本（可选） */
  Release?: string;
  /** 原始文件名（可选） */
  FileName?: string;
}

declare interface UploadMiniProgramSourceResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 请求结果（JSON字符串，包含 PackId/AppId/Release/BundleHash/Status/PageCount/ComponentCount/FileSize/Idempotent） */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadSymbolArtifactRequest {
  /** 制品类型。取值：js_sourcemap、ios_dsym、macos_dsym、windows_pdb、android_mapping、android_native、system_symbol。 */
  Kind: string;
  /** 对象大小（字节）。 */
  FileSize: number;
  /** 对象内容的 SHA256 十六进制摘要，长度固定为 64 个字符。 */
  Sha256: string;
  /** 已上传对象的腾讯云 COS URL。与 FileUrl 二选一至少传一个；优先使用 COSUrl。必须属于当前配置的 Bucket 和 Region。 */
  COSUrl?: string;
  /** 应用 ID。应用级制品必填；system_symbol 不传。 */
  AppId?: string;
  /** 兼容别名，未传 AppId 时使用。 */
  ProjectId?: string;
  /** JS 应用版本。未传 AppVersion 时使用。 */
  Release?: string;
  /** 兼容字段，不参与制品匹配。 */
  Dist?: string;
  /** 压缩文件 URL。Kind=js_sourcemap 且 FileType 非 source_bundle 时必填。 */
  MinifiedUrl?: string;
  /** JS 制品文件类型。可选值说明：sourcemap、minified、source_bundle；为空时默认 sourcemap。 */
  FileType?: string;
  /** 调试 ID。除 js_sourcemap 外均必填。 */
  DebugId?: string;
  /** 构建 ID。ios_dsym、android_mapping、android_native 必填。 */
  BuildId?: string;
  /** 应用版本。js_sourcemap 必填，未传时使用 Release。 */
  AppVersion?: string;
  /** 兼容字段，请勿传入。 */
  Platform?: string;
  /** 系统名称。system_symbol 可填写。 */
  OS?: string;
  /** 系统版本。system_symbol 可填写。 */
  OSVersion?: string;
  /** 兼容字段，请勿传入。 */
  StorePath?: string;
  /** 文件名。原生和系统符号必填；ios_dsym 使用模块名，android_native 使用 abi/文件名。 */
  FileName?: string;
  /** 文件内容类型，如 application/json。 */
  ContentType?: string;
  /** COSUrl 的兼容别名；当未传 COSUrl 时使用。与 COSUrl 二选一至少传一个。 */
  FileUrl?: string;
}

declare interface UploadSymbolArtifactResponse {
  /** 登记的制品信息，JSON 格式字符串。 */
  Result?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Rum 前端性能监控} */
declare interface Rum {
  (): Versions;
  /** 创建字段配置规则 {@link CreateFieldTransformRuleRequest} {@link CreateFieldTransformRuleResponse} */
  CreateFieldTransformRule(data: CreateFieldTransformRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFieldTransformRuleResponse>;
  /** 创建发布文件记录 {@link CreateReleaseFileRequest} {@link CreateReleaseFileResponse} */
  CreateReleaseFile(data: CreateReleaseFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseFileResponse>;
  /** 添加星标应用 {@link CreateStarProjectRequest} {@link CreateStarProjectResponse} */
  CreateStarProject(data: CreateStarProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStarProjectResponse>;
  /** 创建应用 {@link CreateTDEMApplicationRequest} {@link CreateTDEMApplicationResponse} */
  CreateTDEMApplication(data: CreateTDEMApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDEMApplicationResponse>;
  /** 创建业务系统 {@link CreateTDEMBusinessSystemRequest} {@link CreateTDEMBusinessSystemResponse} */
  CreateTDEMBusinessSystem(data: CreateTDEMBusinessSystemRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDEMBusinessSystemResponse>;
  /** 创建 TDEM 拨测任务 {@link CreateTDEMDialTaskRequest} {@link CreateTDEMDialTaskResponse} */
  CreateTDEMDialTask(data: CreateTDEMDialTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDEMDialTaskResponse>;
  /** 创建字段值替换规则 {@link CreateTDEMFieldTransformRuleRequest} {@link CreateTDEMFieldTransformRuleResponse} */
  CreateTDEMFieldTransformRule(data: CreateTDEMFieldTransformRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDEMFieldTransformRuleResponse>;
  /** 创建漏斗 {@link CreateTDEMFunnelRequest} {@link CreateTDEMFunnelResponse} */
  CreateTDEMFunnel(data: CreateTDEMFunnelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTDEMFunnelResponse>;
  /** 创建白名单 {@link CreateWhitelistRequest} {@link CreateWhitelistResponse} */
  CreateWhitelist(data: CreateWhitelistRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWhitelistResponse>;
  /** 删除字段配置规则 {@link DeleteFieldTransformRuleRequest} {@link DeleteFieldTransformRuleResponse} */
  DeleteFieldTransformRule(data: DeleteFieldTransformRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFieldTransformRuleResponse>;
  /** 删除 RUM 业务系统 {@link DeleteInstanceRequest} {@link DeleteInstanceResponse} */
  DeleteInstance(data: DeleteInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstanceResponse>;
  /** 删除小程序回放包 {@link DeleteMiniProgramReplayPackRequest} {@link DeleteMiniProgramReplayPackResponse} */
  DeleteMiniProgramReplayPack(data: DeleteMiniProgramReplayPackRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMiniProgramReplayPackResponse>;
  /** 删除 RUM 应用 {@link DeleteProjectRequest} {@link DeleteProjectResponse} */
  DeleteProject(data: DeleteProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectResponse>;
  /** 删除发布文件 {@link DeleteReleaseFileRequest} {@link DeleteReleaseFileResponse} */
  DeleteReleaseFile(data: DeleteReleaseFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReleaseFileResponse>;
  /** 删除星标应用 {@link DeleteStarProjectRequest} {@link DeleteStarProjectResponse} */
  DeleteStarProject(data: DeleteStarProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStarProjectResponse>;
  /** 删除符号制品 {@link DeleteSymbolArtifactRequest} {@link DeleteSymbolArtifactResponse} */
  DeleteSymbolArtifact(data: DeleteSymbolArtifactRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSymbolArtifactResponse>;
  /** 删除应用 {@link DeleteTDEMApplicationRequest} {@link DeleteTDEMApplicationResponse} */
  DeleteTDEMApplication(data: DeleteTDEMApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTDEMApplicationResponse>;
  /** 删除业务系统 {@link DeleteTDEMBusinessSystemRequest} {@link DeleteTDEMBusinessSystemResponse} */
  DeleteTDEMBusinessSystem(data: DeleteTDEMBusinessSystemRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTDEMBusinessSystemResponse>;
  /** 删除 TDEM 拨测任务 {@link DeleteTDEMDialTaskRequest} {@link DeleteTDEMDialTaskResponse} */
  DeleteTDEMDialTask(data: DeleteTDEMDialTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTDEMDialTaskResponse>;
  /** 删除字段值替换规则 {@link DeleteTDEMFieldTransformRuleRequest} {@link DeleteTDEMFieldTransformRuleResponse} */
  DeleteTDEMFieldTransformRule(data: DeleteTDEMFieldTransformRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTDEMFieldTransformRuleResponse>;
  /** 删除漏斗 {@link DeleteTDEMFunnelRequest} {@link DeleteTDEMFunnelResponse} */
  DeleteTDEMFunnel(data: DeleteTDEMFunnelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTDEMFunnelResponse>;
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
  /** 获取字段配置规则 {@link DescribeFieldTransformRulesRequest} {@link DescribeFieldTransformRulesResponse} */
  DescribeFieldTransformRules(data: DescribeFieldTransformRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFieldTransformRulesResponse>;
  /** 获取TDEM字段值 {@link DescribeFieldValuesRequest} {@link DescribeFieldValuesResponse} */
  DescribeFieldValues(data: DescribeFieldValuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFieldValuesResponse>;
  /** 获取cos鉴权 {@link DescribeFileCertificateRequest} {@link DescribeFileCertificateResponse} */
  DescribeFileCertificate(data?: DescribeFileCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileCertificateResponse>;
  /** 查询问题受影响用户清单 {@link DescribeIssueAffectedUsersRequest} {@link DescribeIssueAffectedUsersResponse} */
  DescribeIssueAffectedUsers(data: DescribeIssueAffectedUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssueAffectedUsersResponse>;
  /** 获取Issue Breadcrumbs {@link DescribeIssueBreadcrumbsRequest} {@link DescribeIssueBreadcrumbsResponse} */
  DescribeIssueBreadcrumbs(data: DescribeIssueBreadcrumbsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssueBreadcrumbsResponse>;
  /** 获取崩溃附件下载地址 {@link DescribeIssueCrashLogDownloadURLRequest} {@link DescribeIssueCrashLogDownloadURLResponse} */
  DescribeIssueCrashLogDownloadURL(data: DescribeIssueCrashLogDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssueCrashLogDownloadURLResponse>;
  /** 获取Issue详情 {@link DescribeIssueDetailRequest} {@link DescribeIssueDetailResponse} */
  DescribeIssueDetail(data: DescribeIssueDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssueDetailResponse>;
  /** 获取Issue事件详情 {@link DescribeIssueEventDetailRequest} {@link DescribeIssueEventDetailResponse} */
  DescribeIssueEventDetail(data: DescribeIssueEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssueEventDetailResponse>;
  /** 获取Issue事件列表 {@link DescribeIssueEventsRequest} {@link DescribeIssueEventsResponse} */
  DescribeIssueEvents(data: DescribeIssueEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssueEventsResponse>;
  /** 获取Issue趋势 {@link DescribeIssueTrendRequest} {@link DescribeIssueTrendResponse} */
  DescribeIssueTrend(data: DescribeIssueTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssueTrendResponse>;
  /** 获取Issue列表 {@link DescribeIssuesRequest} {@link DescribeIssuesResponse} */
  DescribeIssues(data: DescribeIssuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIssuesResponse>;
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
  /** 查询小程序回放包 {@link DescribeMiniProgramReplayPackRequest} {@link DescribeMiniProgramReplayPackResponse} */
  DescribeMiniProgramReplayPack(data: DescribeMiniProgramReplayPackRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMiniProgramReplayPackResponse>;
  /** 查询小程序回放包列表 {@link DescribeMiniProgramReplayPacksRequest} {@link DescribeMiniProgramReplayPacksResponse} */
  DescribeMiniProgramReplayPacks(data: DescribeMiniProgramReplayPacksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMiniProgramReplayPacksResponse>;
  /** 获取TDEM性能指标数据 {@link DescribePerformanceMetricsRequest} {@link DescribePerformanceMetricsResponse} */
  DescribePerformanceMetrics(data: DescribePerformanceMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePerformanceMetricsResponse>;
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
  /** 获取录屏数据 {@link DescribeReplayDataRequest} {@link DescribeReplayDataResponse} */
  DescribeReplayData(data: DescribeReplayDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReplayDataResponse>;
  /** 获取回放日志信息 {@link DescribeReplayDetailsRequest} {@link DescribeReplayDetailsResponse} */
  DescribeReplayDetails(data: DescribeReplayDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReplayDetailsResponse>;
  /** 获取回放元数据 {@link DescribeReplayMetaRequest} {@link DescribeReplayMetaResponse} */
  DescribeReplayMeta(data: DescribeReplayMetaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReplayMetaResponse>;
  /** 获取Rum日志聚合信息 {@link DescribeRumGroupLogRequest} {@link DescribeRumGroupLogResponse} */
  DescribeRumGroupLog(data: DescribeRumGroupLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumGroupLogResponse>;
  /** 根据label 聚合分析日志 {@link DescribeRumGroupLogV2Request} {@link DescribeRumGroupLogV2Response} */
  DescribeRumGroupLogV2(data: DescribeRumGroupLogV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeRumGroupLogV2Response>;
  /** 查询日志明细 {@link DescribeRumLogDetailsV2Request} {@link DescribeRumLogDetailsV2Response} */
  DescribeRumLogDetailsV2(data: DescribeRumLogDetailsV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogDetailsV2Response>;
  /** 导出Rum日志列表 {@link DescribeRumLogExportRequest} {@link DescribeRumLogExportResponse} */
  DescribeRumLogExport(data: DescribeRumLogExportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogExportResponse>;
  /** 创建日志导出 {@link DescribeRumLogExportV2Request} {@link DescribeRumLogExportV2Response} */
  DescribeRumLogExportV2(data: DescribeRumLogExportV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogExportV2Response>;
  /** 获取Rum日志导出列表 {@link DescribeRumLogExportsRequest} {@link DescribeRumLogExportsResponse} */
  DescribeRumLogExports(data: DescribeRumLogExportsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogExportsResponse>;
  /** 获取日志导出列表 {@link DescribeRumLogExportsV2Request} {@link DescribeRumLogExportsV2Response} */
  DescribeRumLogExportsV2(data: DescribeRumLogExportsV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogExportsV2Response>;
  /** 获取Rum日志列表 {@link DescribeRumLogListRequest} {@link DescribeRumLogListResponse} */
  DescribeRumLogList(data: DescribeRumLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogListResponse>;
  /** 日志总量查询 {@link DescribeRumLogTotalV2Request} {@link DescribeRumLogTotalV2Response} */
  DescribeRumLogTotalV2(data: DescribeRumLogTotalV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeRumLogTotalV2Response>;
  /** 获取Rum分钟级日志列表 {@link DescribeRumStatsLogListRequest} {@link DescribeRumStatsLogListResponse} */
  DescribeRumStatsLogList(data: DescribeRumStatsLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRumStatsLogListResponse>;
  /** 查询日志时间分布表 {@link DescribeRumStatsLogListV2Request} {@link DescribeRumStatsLogListV2Response} */
  DescribeRumStatsLogListV2(data: DescribeRumStatsLogListV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeRumStatsLogListV2Response>;
  /** 获取应用的采样率 {@link DescribeSampleRateRequest} {@link DescribeSampleRateResponse} */
  DescribeSampleRate(data: DescribeSampleRateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSampleRateResponse>;
  /** 获取首页分数列表 {@link DescribeScoresRequest} {@link DescribeScoresResponse} */
  DescribeScores(data: DescribeScoresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScoresResponse>;
  /** 获取首页分数列表V2 {@link DescribeScoresV2Request} {@link DescribeScoresV2Response} */
  DescribeScoresV2(data: DescribeScoresV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeScoresV2Response>;
  /** 获取会话列表 {@link DescribeSessionListRequest} {@link DescribeSessionListResponse} */
  DescribeSessionList(data: DescribeSessionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSessionListResponse>;
  /** 获取挣扎分布 {@link DescribeStruggleDistributionRequest} {@link DescribeStruggleDistributionResponse} */
  DescribeStruggleDistribution(data: DescribeStruggleDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStruggleDistributionResponse>;
  /** 查询符号制品上传临时凭证 {@link DescribeSymbolArtifactUploadCredentialRequest} {@link DescribeSymbolArtifactUploadCredentialResponse} */
  DescribeSymbolArtifactUploadCredential(data: DescribeSymbolArtifactUploadCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSymbolArtifactUploadCredentialResponse>;
  /** 查询符号制品列表 {@link DescribeSymbolArtifactsRequest} {@link DescribeSymbolArtifactsResponse} */
  DescribeSymbolArtifacts(data: DescribeSymbolArtifactsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSymbolArtifactsResponse>;
  /** 查询应用列表 {@link DescribeTDEMApplicationsRequest} {@link DescribeTDEMApplicationsResponse} */
  DescribeTDEMApplications(data?: DescribeTDEMApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMApplicationsResponse>;
  /** 查询业务系统列表 {@link DescribeTDEMBusinessSystemsRequest} {@link DescribeTDEMBusinessSystemsResponse} */
  DescribeTDEMBusinessSystems(data?: DescribeTDEMBusinessSystemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMBusinessSystemsResponse>;
  /** 查询 TDEM 拨测维度 {@link DescribeTDEMDialDimensionsRequest} {@link DescribeTDEMDialDimensionsResponse} */
  DescribeTDEMDialDimensions(data: DescribeTDEMDialDimensionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMDialDimensionsResponse>;
  /** 查询 TDEM 拨测执行详情 {@link DescribeTDEMDialExecutionDetailRequest} {@link DescribeTDEMDialExecutionDetailResponse} */
  DescribeTDEMDialExecutionDetail(data: DescribeTDEMDialExecutionDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMDialExecutionDetailResponse>;
  /** 查询 TDEM 拨测执行记录 {@link DescribeTDEMDialExecutionListRequest} {@link DescribeTDEMDialExecutionListResponse} */
  DescribeTDEMDialExecutionList(data: DescribeTDEMDialExecutionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMDialExecutionListResponse>;
  /** 查询 TDEM 拨测概览 {@link DescribeTDEMDialOverviewRequest} {@link DescribeTDEMDialOverviewResponse} */
  DescribeTDEMDialOverview(data: DescribeTDEMDialOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMDialOverviewResponse>;
  /** 查询 TDEM 拨测任务 {@link DescribeTDEMDialTasksRequest} {@link DescribeTDEMDialTasksResponse} */
  DescribeTDEMDialTasks(data: DescribeTDEMDialTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMDialTasksResponse>;
  /** 查询 TDEM 拨测趋势 {@link DescribeTDEMDialTrendRequest} {@link DescribeTDEMDialTrendResponse} */
  DescribeTDEMDialTrend(data: DescribeTDEMDialTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMDialTrendResponse>;
  /** 查询事件详情 {@link DescribeTDEMEventDetailRequest} {@link DescribeTDEMEventDetailResponse} */
  DescribeTDEMEventDetail(data: DescribeTDEMEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMEventDetailResponse>;
  /** 查询事件排行 {@link DescribeTDEMEventRankRequest} {@link DescribeTDEMEventRankResponse} */
  DescribeTDEMEventRank(data: DescribeTDEMEventRankRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMEventRankResponse>;
  /** 查询探索事件列表 {@link DescribeTDEMEventSearchRequest} {@link DescribeTDEMEventSearchResponse} */
  DescribeTDEMEventSearch(data: DescribeTDEMEventSearchRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMEventSearchResponse>;
  /** 查询探索事件汇总 {@link DescribeTDEMEventSearchSummaryRequest} {@link DescribeTDEMEventSearchSummaryResponse} */
  DescribeTDEMEventSearchSummary(data: DescribeTDEMEventSearchSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMEventSearchSummaryResponse>;
  /** 查询字段值替换规则 {@link DescribeTDEMFieldTransformRulesRequest} {@link DescribeTDEMFieldTransformRulesResponse} */
  DescribeTDEMFieldTransformRules(data: DescribeTDEMFieldTransformRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMFieldTransformRulesResponse>;
  /** 获取漏斗详情 {@link DescribeTDEMFunnelDetailRequest} {@link DescribeTDEMFunnelDetailResponse} */
  DescribeTDEMFunnelDetail(data: DescribeTDEMFunnelDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMFunnelDetailResponse>;
  /** 获取漏斗报告维度 {@link DescribeTDEMFunnelDimensionsRequest} {@link DescribeTDEMFunnelDimensionsResponse} */
  DescribeTDEMFunnelDimensions(data: DescribeTDEMFunnelDimensionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMFunnelDimensionsResponse>;
  /** 获取漏斗列表 {@link DescribeTDEMFunnelListRequest} {@link DescribeTDEMFunnelListResponse} */
  DescribeTDEMFunnelList(data: DescribeTDEMFunnelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMFunnelListResponse>;
  /** 获取漏斗报告 {@link DescribeTDEMFunnelReportRequest} {@link DescribeTDEMFunnelReportResponse} */
  DescribeTDEMFunnelReport(data: DescribeTDEMFunnelReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMFunnelReportResponse>;
  /** 获取漏斗步骤会话 {@link DescribeTDEMFunnelStepSessionListRequest} {@link DescribeTDEMFunnelStepSessionListResponse} */
  DescribeTDEMFunnelStepSessionList(data: DescribeTDEMFunnelStepSessionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMFunnelStepSessionListResponse>;
  /** 获取漏斗趋势 {@link DescribeTDEMFunnelTrendRequest} {@link DescribeTDEMFunnelTrendResponse} */
  DescribeTDEMFunnelTrend(data: DescribeTDEMFunnelTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMFunnelTrendResponse>;
  /** 查询分析指标分布 {@link DescribeTDEMMetricDistributionRequest} {@link DescribeTDEMMetricDistributionResponse} */
  DescribeTDEMMetricDistribution(data: DescribeTDEMMetricDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMMetricDistributionResponse>;
  /** 查询分析指标合计 {@link DescribeTDEMMetricSummaryRequest} {@link DescribeTDEMMetricSummaryResponse} */
  DescribeTDEMMetricSummary(data: DescribeTDEMMetricSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMMetricSummaryResponse>;
  /** 查询分析指标趋势 {@link DescribeTDEMMetricTrendRequest} {@link DescribeTDEMMetricTrendResponse} */
  DescribeTDEMMetricTrend(data: DescribeTDEMMetricTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMMetricTrendResponse>;
  /** 查询总览评分 {@link DescribeTDEMOverviewScoresRequest} {@link DescribeTDEMOverviewScoresResponse} */
  DescribeTDEMOverviewScores(data: DescribeTDEMOverviewScoresRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMOverviewScoresResponse>;
  /** 查询关联事件 {@link DescribeTDEMRelatedEventsRequest} {@link DescribeTDEMRelatedEventsResponse} */
  DescribeTDEMRelatedEvents(data: DescribeTDEMRelatedEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMRelatedEventsResponse>;
  /** 查询大模型体验多维分析 {@link DescribeTDEMSSEDimensionsRequest} {@link DescribeTDEMSSEDimensionsResponse} */
  DescribeTDEMSSEDimensions(data: DescribeTDEMSSEDimensionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMSSEDimensionsResponse>;
  /** 查询大模型体验分布 {@link DescribeTDEMSSEDistributionRequest} {@link DescribeTDEMSSEDistributionResponse} */
  DescribeTDEMSSEDistribution(data: DescribeTDEMSSEDistributionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMSSEDistributionResponse>;
  /** 查询大模型体验分位 {@link DescribeTDEMSSEPercentileRequest} {@link DescribeTDEMSSEPercentileResponse} */
  DescribeTDEMSSEPercentile(data: DescribeTDEMSSEPercentileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMSSEPercentileResponse>;
  /** 查询大模型体验汇总 {@link DescribeTDEMSSESummaryRequest} {@link DescribeTDEMSSESummaryResponse} */
  DescribeTDEMSSESummary(data: DescribeTDEMSSESummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMSSESummaryResponse>;
  /** 查询大模型体验趋势 {@link DescribeTDEMSSETrendRequest} {@link DescribeTDEMSSETrendResponse} */
  DescribeTDEMSSETrend(data: DescribeTDEMSSETrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMSSETrendResponse>;
  /** 查询 Web 规则化采样配置 {@link DescribeTDEMSampleConfigRequest} {@link DescribeTDEMSampleConfigResponse} */
  DescribeTDEMSampleConfig(data: DescribeTDEMSampleConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMSampleConfigResponse>;
  /** 查询应用采样率 {@link DescribeTDEMSampleRateRequest} {@link DescribeTDEMSampleRateResponse} */
  DescribeTDEMSampleRate(data: DescribeTDEMSampleRateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMSampleRateResponse>;
  /** 获取会话回放时间线数据 {@link DescribeTDEMSessionReplayTimelineRequest} {@link DescribeTDEMSessionReplayTimelineResponse} */
  DescribeTDEMSessionReplayTimeline(data: DescribeTDEMSessionReplayTimelineRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMSessionReplayTimelineResponse>;
  /** 查询用量明细 {@link DescribeTDEMUsageDetailRequest} {@link DescribeTDEMUsageDetailResponse} */
  DescribeTDEMUsageDetail(data: DescribeTDEMUsageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMUsageDetailResponse>;
  /** 查询用量合计 {@link DescribeTDEMUsageSummaryRequest} {@link DescribeTDEMUsageSummaryResponse} */
  DescribeTDEMUsageSummary(data: DescribeTDEMUsageSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTDEMUsageSummaryResponse>;
  /** 查询片区信息 {@link DescribeTawAreasRequest} {@link DescribeTawAreasResponse} */
  DescribeTawAreas(data?: DescribeTawAreasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTawAreasResponse>;
  /** 查询 RUM 业务系统信息 {@link DescribeTawInstancesRequest} {@link DescribeTawInstancesResponse} */
  DescribeTawInstances(data?: DescribeTawInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTawInstancesResponse>;
  /** 【融合版】获取查询参数的token {@link DescribeTokenRequest} {@link DescribeTokenResponse} */
  DescribeToken(data?: DescribeTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTokenResponse>;
  /** 【融合版】查询top问题列表 {@link DescribeTopIssuesRequest} {@link DescribeTopIssuesResponse} */
  DescribeTopIssues(data: DescribeTopIssuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopIssuesResponse>;
  /** 获取 用户旅程桑基图数据 {@link DescribeUserJourneySanKeyRequest} {@link DescribeUserJourneySanKeyResponse} */
  DescribeUserJourneySanKey(data: DescribeUserJourneySanKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserJourneySanKeyResponse>;
  /** 获取UV列表 {@link DescribeUvListRequest} {@link DescribeUvListResponse} */
  DescribeUvList(data: DescribeUvListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUvListResponse>;
  /** 获取白名单列表 {@link DescribeWhitelistsRequest} {@link DescribeWhitelistsResponse} */
  DescribeWhitelists(data: DescribeWhitelistsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWhitelistsResponse>;
  /** 修改字段配置 {@link ModifyFieldTransformRuleRequest} {@link ModifyFieldTransformRuleResponse} */
  ModifyFieldTransformRule(data: ModifyFieldTransformRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFieldTransformRuleResponse>;
  /** 修改 RUM 业务系统 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** 更新Issue状态 {@link ModifyIssueStatusRequest} {@link ModifyIssueStatusResponse} */
  ModifyIssueStatus(data: ModifyIssueStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIssueStatusResponse>;
  /** 修改小程序回放包 {@link ModifyMiniProgramReplayPackRequest} {@link ModifyMiniProgramReplayPackResponse} */
  ModifyMiniProgramReplayPack(data: ModifyMiniProgramReplayPackRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMiniProgramReplayPackResponse>;
  /** 修改 RUM 应用信息 {@link ModifyProjectRequest} {@link ModifyProjectResponse} */
  ModifyProject(data: ModifyProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectResponse>;
  /** 新增修改限流 {@link ModifyProjectLimitRequest} {@link ModifyProjectLimitResponse} */
  ModifyProjectLimit(data: ModifyProjectLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProjectLimitResponse>;
  /** 修改采样率 {@link ModifySampleRateRequest} {@link ModifySampleRateResponse} */
  ModifySampleRate(data: ModifySampleRateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySampleRateResponse>;
  /** 修改应用 {@link ModifyTDEMApplicationRequest} {@link ModifyTDEMApplicationResponse} */
  ModifyTDEMApplication(data: ModifyTDEMApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTDEMApplicationResponse>;
  /** 修改业务系统 {@link ModifyTDEMBusinessSystemRequest} {@link ModifyTDEMBusinessSystemResponse} */
  ModifyTDEMBusinessSystem(data: ModifyTDEMBusinessSystemRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTDEMBusinessSystemResponse>;
  /** 修改 TDEM 拨测任务 {@link ModifyTDEMDialTaskRequest} {@link ModifyTDEMDialTaskResponse} */
  ModifyTDEMDialTask(data: ModifyTDEMDialTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTDEMDialTaskResponse>;
  /** 修改字段值替换规则 {@link ModifyTDEMFieldTransformRuleRequest} {@link ModifyTDEMFieldTransformRuleResponse} */
  ModifyTDEMFieldTransformRule(data: ModifyTDEMFieldTransformRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTDEMFieldTransformRuleResponse>;
  /** 修改漏斗 {@link ModifyTDEMFunnelRequest} {@link ModifyTDEMFunnelResponse} */
  ModifyTDEMFunnel(data: ModifyTDEMFunnelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTDEMFunnelResponse>;
  /** 修改 Web 规则化采样配置 {@link ModifyTDEMSampleConfigRequest} {@link ModifyTDEMSampleConfigResponse} */
  ModifyTDEMSampleConfig(data: ModifyTDEMSampleConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTDEMSampleConfigResponse>;
  /** 修改应用采样率 {@link ModifyTDEMSampleRateRequest} {@link ModifyTDEMSampleRateResponse} */
  ModifyTDEMSampleRate(data: ModifyTDEMSampleRateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTDEMSampleRateResponse>;
  /** 预览漏斗报告 {@link PreviewTDEMFunnelReportRequest} {@link PreviewTDEMFunnelReportResponse} */
  PreviewTDEMFunnelReport(data: PreviewTDEMFunnelReportRequest, config?: AxiosRequestConfig): AxiosPromise<PreviewTDEMFunnelReportResponse>;
  /** 恢复 RUM 业务系统 {@link ResumeInstanceRequest} {@link ResumeInstanceResponse} */
  ResumeInstance(data: ResumeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeInstanceResponse>;
  /** 恢复 RUM 应用 {@link ResumeProjectRequest} {@link ResumeProjectResponse} */
  ResumeProject(data: ResumeProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeProjectResponse>;
  /** 恢复应用 {@link ResumeTDEMApplicationRequest} {@link ResumeTDEMApplicationResponse} */
  ResumeTDEMApplication(data: ResumeTDEMApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeTDEMApplicationResponse>;
  /** 停止RUM业务系统 {@link StopInstanceRequest} {@link StopInstanceResponse} */
  StopInstance(data: StopInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StopInstanceResponse>;
  /** 停止应用上报 {@link StopProjectRequest} {@link StopProjectResponse} */
  StopProject(data: StopProjectRequest, config?: AxiosRequestConfig): AxiosPromise<StopProjectResponse>;
  /** 停止应用 {@link StopTDEMApplicationRequest} {@link StopTDEMApplicationResponse} */
  StopTDEMApplication(data: StopTDEMApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<StopTDEMApplicationResponse>;
  /** 上传小程序源码包 {@link UploadMiniProgramSourceRequest} {@link UploadMiniProgramSourceResponse} */
  UploadMiniProgramSource(data: UploadMiniProgramSourceRequest, config?: AxiosRequestConfig): AxiosPromise<UploadMiniProgramSourceResponse>;
  /** 登记已上传的符号制品 {@link UploadSymbolArtifactRequest} {@link UploadSymbolArtifactResponse} */
  UploadSymbolArtifact(data: UploadSymbolArtifactRequest, config?: AxiosRequestConfig): AxiosPromise<UploadSymbolArtifactResponse>;
}

export declare type Versions = ["2021-06-22"];

export default Rum;
