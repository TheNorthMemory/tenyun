/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** APM浮点数类型键值对 */
declare interface APMKV {
  /** Key值定义 */
  Key: string | null;
  /** Value值定义 */
  Value: number | null;
}

/** Apm通用KV结构 */
declare interface APMKVItem {
  /** Key值定义 */
  Key: string | null;
  /** Value值定义 */
  Value: string | null;
}

/** apm Agent信息 */
declare interface ApmAgentInfo {
  /** Agent下载地址 */
  AgentDownloadURL: string | null;
  /** Collector上报地址 */
  CollectorURL: string | null;
  /** Token信息 */
  Token: string | null;
  /** 外网上报地址 */
  PublicCollectorURL: string | null;
  /** 自研VPC上报地址 */
  InnerCollectorURL: string | null;
  /** 内网上报地址(Private Link上报地址) */
  PrivateLinkCollectorURL: string | null;
}

/** 应用相关的配置列表项 */
declare interface ApmApplicationConfigView {
  /** 业务系统ID */
  InstanceKey?: string;
  /** 应用名 */
  ServiceName?: string;
  /** 接口过滤 */
  OperationNameFilter?: string;
  /** 错误类型过滤 */
  ExceptionFilter?: string;
  /** HTTP状态码过滤 */
  ErrorCodeFilter?: string;
  /** 应用诊断开关（已废弃） */
  EventEnable?: boolean | null;
  /** URL收敛开关 0 关 1 开 */
  UrlConvergenceSwitch?: number;
  /** URL收敛阈值 */
  UrlConvergenceThreshold?: number;
  /** URL收敛规则正则 */
  UrlConvergence?: string;
  /** URL排除规则正则 */
  UrlExclude?: string;
  /** 是否开启日志 0 关 1 开 */
  IsRelatedLog?: number;
  /** 日志源 */
  LogSource?: string | null;
  /** 日志集 */
  LogSet?: string;
  /** 日志主题 */
  LogTopicID?: string;
  /** 方法栈快照开关 true 开启 false 关闭 */
  SnapshotEnable?: boolean;
  /** 慢调用监听触发阈值 */
  SnapshotTimeout?: number;
  /** 探针总开关 */
  AgentEnable?: boolean;
  /** 组件列表开关（已废弃） */
  InstrumentList?: Instrument[] | null;
  /** 链路压缩开关（已废弃） */
  TraceSquash?: boolean;
}

/** 指标维度信息 */
declare interface ApmField {
  /** 昨日同比指标值，已弃用，不建议使用 */
  CompareVal: string | null;
  /** Compare值结果数组，推荐使用 */
  CompareVals: APMKVItem[] | null;
  /** 指标值 */
  Value: number | null;
  /** 指标所对应的单位 */
  Unit: string | null;
  /** 请求数 */
  Key: string;
  /** 同环比上周期具体数值 */
  LastPeriodValue: APMKV[] | null;
}

/** apm实例信息 */
declare interface ApmInstanceDetail {
  /** 存储使用量(MB) */
  AmountOfUsedStorage?: number | null;
  /** 实例名 */
  Name?: string | null;
  /** 实例所属tag列表 */
  Tags?: ApmTag[] | null;
  /** 实例ID */
  InstanceId?: string;
  /** 创建人Uin */
  CreateUin?: string | null;
  /** 该实例已上报的服务端应用数量 */
  ServiceCount?: number | null;
  /** 日均上报Span数 */
  CountOfReportSpanPerDay?: number | null;
  /** AppId信息 */
  AppId?: number;
  /** Trace数据保存时长 */
  TraceDuration?: number | null;
  /** 实例描述信息 */
  Description?: string | null;
  /** 实例状态 */
  Status?: number | null;
  /** 实例所属地域 */
  Region?: string | null;
  /** 实例上报额度 */
  SpanDailyCounters?: number | null;
  /** 实例是否开通计费 */
  BillingInstance?: number | null;
  /** 错误率阈值 */
  ErrRateThreshold?: number | null;
  /** 采样率阈值 */
  SampleRate?: number | null;
  /** 是否开启错误采样 0 关 1 开 */
  ErrorSample?: number | null;
  /** 慢调用保存阈值 */
  SlowRequestSavedThreshold?: number | null;
  /** cls日志所在地域 */
  LogRegion?: string | null;
  /** 日志来源 */
  LogSource?: string | null;
  /** 日志功能开关 0 关 | 1 开 */
  IsRelatedLog?: number | null;
  /** 日志主题ID */
  LogTopicID?: string | null;
  /** 该实例已上报的客户端应用数量 */
  ClientCount?: number | null;
  /** 该实例已上报的总应用数量 */
  TotalCount?: number | null;
  /** CLS日志集 | ES集群ID */
  LogSet?: string | null;
  /** Metric数据保存时长 */
  MetricDuration?: number | null;
  /** 用户自定义展示标签列表 */
  CustomShowTags?: string[] | null;
  /** 实例计费模式1为预付费0为按量付费 */
  PayMode?: number | null;
  /** 实例计费模式是否生效 */
  PayModeEffective?: boolean | null;
  /** 响应时间满意阈值 */
  ResponseDurationWarningThreshold?: number | null;
  /** 是否免费（0=否，1=限额免费，2=完全免费），默认0 */
  Free?: number | null;
  /** 是否tsf默认业务系统（0=否，1-是） */
  DefaultTSF?: number | null;
  /** 是否关联dashboard： 0 关 1 开 */
  IsRelatedDashboard?: number | null;
  /** dashboard ID */
  DashboardTopicID?: string | null;
  /** 是否开启组件漏洞检测 */
  IsInstrumentationVulnerabilityScan?: number | null;
  /** 是否开启SQL注入分析 */
  IsSqlInjectionAnalysis?: number | null;
}

/** 指标列表单元 */
declare interface ApmMetricRecord {
  /** field数组 */
  Fields: ApmField[];
  /** tag数组 */
  Tags: ApmTag[];
}

/** 维度（标签）对象 */
declare interface ApmTag {
  /** 维度Key(列名，标签Key) */
  Key: string;
  /** 维度值（标签值） */
  Value: string;
}

/** 查询过滤参数 */
declare interface Filter {
  /** 过滤方式（=, !=, in） */
  Type: string;
  /** 过滤维度名 */
  Key: string;
  /** 过滤值，in过滤方式用逗号分割多个值 */
  Value: string;
}

/** 查询过滤参数 */
declare interface GeneralFilter {
  /** 过滤维度名 */
  Key: string;
  /** 过滤值 */
  Value: string;
}

/** 组件 */
declare interface Instrument {
  /** 组件名称 */
  Name?: string | null;
  /** 组件开关 */
  Enable?: boolean | null;
}

/** 指标曲线数据 */
declare interface Line {
  /** 指标名 */
  MetricName: string;
  /** 指标中文名 */
  MetricNameCN: string;
  /** 时间序列 */
  TimeSerial: number[];
  /** 数据序列 */
  DataSerial: number[] | null;
  /** 维度列表 */
  Tags: ApmTag[] | null;
}

/** sql排序字段 */
declare interface OrderBy {
  /** 需要排序的字段 */
  Key: string;
  /** 顺序排序/倒序排序 */
  Value: string;
}

/** 查询 */
declare interface QueryMetricItem {
  /** 指标名 */
  MetricName: string;
  /** 同比，已弃用，不建议使用 */
  Compare?: string;
  /** 同比，支持多种同比方式 */
  Compares?: string[];
}

/** Span对象 */
declare interface Span {
  /** Trace Id */
  TraceID?: string | null;
  /** 日志 */
  Logs?: SpanLog[] | null;
  /** 标签 */
  Tags?: SpanTag[] | null;
  /** 上报应用服务信息 */
  Process?: SpanProcess | null;
  /** 产生时间戳(毫秒) */
  Timestamp?: number | null;
  /** Span名称 */
  OperationName?: string | null;
  /** 关联关系 */
  References?: SpanReference[] | null;
  /** 产生时间戳(微秒) */
  StartTime?: number | null;
  /** 持续耗时(微妙) */
  Duration?: number | null;
  /** Span Id */
  SpanID?: string | null;
  /** 产生时间戳(毫秒) */
  StartTimeMillis?: number | null;
  /** Parent Span Id */
  ParentSpanID?: string | null;
}

/** Span日志部分 */
declare interface SpanLog {
  /** 日志时间戳 */
  Timestamp: number;
  /** 标签 */
  Fields: SpanTag[];
}

/** 服务相关信息 */
declare interface SpanProcess {
  /** 应用服务名称 */
  ServiceName: string;
  /** Tags 标签数组 */
  Tags: SpanTag[];
}

/** Span上下游关联关系 */
declare interface SpanReference {
  /** 关联关系类型 */
  RefType: string;
  /** Span ID */
  SpanID: string;
  /** Trace ID */
  TraceID: string;
}

/** 标签 */
declare interface SpanTag {
  /** 标签类型 */
  Type: string;
  /** 标签Key */
  Key: string;
  /** 标签值 */
  Value: string;
}

declare interface CreateApmInstanceRequest {
  /** 实例名 */
  Name: string;
  /** 实例描述信息 */
  Description?: string;
  /** Trace数据保存时长，单位为天默认存储为3天 */
  TraceDuration?: number;
  /** 标签列表 */
  Tags?: ApmTag[];
  /** 实例上报额度值，默认赋值为0表示不限制上报额度 */
  SpanDailyCounters?: number;
  /** 实例的计费模式 */
  PayMode?: number;
  /** （0=付费版；1=tsf受限免费版；2=免费版） */
  Free?: number;
}

declare interface CreateApmInstanceResponse {
  /** 实例ID */
  InstanceId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApmAgentRequest {
  /** 实例ID */
  InstanceId: string;
  /** 接入方式 */
  AgentType?: string;
  /** 环境 */
  NetworkMode?: string;
  /** 语言 */
  LanguageEnvironment?: string;
  /** 上报方式 */
  ReportMethod?: string;
}

declare interface DescribeApmAgentResponse {
  /** Agent信息 */
  ApmAgent?: ApmAgentInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApmInstancesRequest {
  /** Tag列表 */
  Tags?: ApmTag[];
  /** 搜索实例名 */
  InstanceName?: string;
  /** 过滤实例ID */
  InstanceIds?: string[];
  /** 是否查询官方demo实例 */
  DemoInstanceFlag?: number;
  /** 是否查询全地域实例 */
  AllRegionsFlag?: number;
}

declare interface DescribeApmInstancesResponse {
  /** apm实例列表 */
  Instances?: ApmInstanceDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGeneralApmApplicationConfigRequest {
  /** 应用名 */
  ServiceName: string;
  /** 业务系统ID */
  InstanceId: string;
}

declare interface DescribeGeneralApmApplicationConfigResponse {
  /** 应用配置项 */
  ApmApplicationConfigView?: ApmApplicationConfigView;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGeneralMetricDataRequest {
  /** 需要查询的指标名称，不可自定义输入，[详情请见。](https://cloud.tencent.com/document/product/248/101681) */
  Metrics: string[];
  /** 业务系统ID */
  InstanceId: string;
  /** 视图名称，不可自定义输入。[详情请见。](https://cloud.tencent.com/document/product/248/101681) */
  ViewName: string;
  /** 要过滤的维度信息，不同视图有对应的指标维度，[详情请见。](https://cloud.tencent.com/document/product/248/101681) */
  Filters: GeneralFilter[];
  /** 聚合维度，不同视图有对应的指标维度，[详情请见。](https://cloud.tencent.com/document/product/248/101681) */
  GroupBy?: string[];
  /** 起始时间的时间戳，单位为秒，只支持查询2天内最多1小时的指标数据。 */
  StartTime?: number;
  /** 结束时间的时间戳，单位为秒，只支持查询2天内最多1小时的指标数据。 */
  EndTime?: number;
  /** 聚合粒度，单位为秒，最小为60s，即一分钟的聚合粒度；如果为空或0则计算开始时间到截止时间的指标数据，上报其他值会报错。 */
  Period?: number;
  /** 对查询指标进行排序：Key 填写云 API 指标名称，[详情请见。](https://cloud.tencent.com/document/product/248/101681)Value 填写排序方式： - asc:对查询指标进行升序排序- desc：对查询指标进行降序排序 */
  OrderBy?: OrderBy;
  /** 查询指标的限制条数，目前最多展示50条数据，PageSize取值为1-50，上送PageSize则根据PageSize的值展示限制条数。 */
  PageSize?: number;
}

declare interface DescribeGeneralMetricDataResponse {
  /** 指标结果集 */
  Records?: Line[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGeneralSpanListRequest {
  /** 分页 */
  Offset: number;
  /** 列表项个数 */
  Limit: number;
  /** 排序 */
  OrderBy?: OrderBy;
  /** span查询开始时间戳（单位:秒） */
  StartTime?: number;
  /** 实例名 */
  InstanceId?: string;
  /** 通用过滤参数 */
  Filters?: Filter[];
  /** 业务自身服务名 */
  BusinessName?: string;
  /** span查询结束时间戳（单位:秒） */
  EndTime?: number;
}

declare interface DescribeGeneralSpanListResponse {
  /** 总数量 */
  TotalCount: number;
  /** Span分页列表 */
  Spans: Span[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMetricRecordsRequest {
  /** 过滤条件 */
  Filters: Filter[];
  /** 指标列表 */
  Metrics: QueryMetricItem[];
  /** 聚合维度 */
  GroupBy: string[];
  /** 排序 */
  OrderBy?: OrderBy;
  /** 实例ID */
  InstanceId?: string;
  /** 每页大小 */
  Limit?: number;
  /** 开始时间 */
  StartTime?: number;
  /** 分页起始点 */
  Offset?: number;
  /** 结束时间 */
  EndTime?: number;
  /** 业务名称（默认值：taw） */
  BusinessName?: string;
  /** 页码 */
  PageIndex?: number;
  /** 页长 */
  PageSize?: number;
  /** Or过滤条件 */
  OrFilters?: Filter[];
  /** 数据来源 */
  Type?: string;
}

declare interface DescribeMetricRecordsResponse {
  /** 指标结果集 */
  Records?: ApmMetricRecord[] | null;
  /** 查询指标结果集条数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceOverviewRequest {
  /** 过滤条件 */
  Filters: Filter[];
  /** 指标列表 */
  Metrics: QueryMetricItem[];
  /** 聚合维度 */
  GroupBy: string[];
  /** 排序 */
  OrderBy?: OrderBy;
  /** 实例ID */
  InstanceId?: string;
  /** 每页大小 */
  Limit?: number;
  /** 开始时间 */
  StartTime?: number;
  /** 分页起始点 */
  Offset?: number;
  /** 结束时间 */
  EndTime?: number;
}

declare interface DescribeServiceOverviewResponse {
  /** 指标结果集 */
  Records: ApmMetricRecord[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagValuesRequest {
  /** 维度名 */
  TagKey: string;
  /** 实例ID */
  InstanceId?: string;
  /** 结束时间 */
  EndTime?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 开始时间 */
  StartTime?: number;
  /** Or过滤条件 */
  OrFilters?: Filter[];
  /** 使用类型 */
  Type?: string;
}

declare interface DescribeTagValuesResponse {
  /** 维度值列表 */
  Values?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApmInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例名 */
  Name: string;
  /** 标签列表 */
  Tags?: ApmTag[];
  /** 实例详情 */
  Description?: string;
  /** Trace数据保存时长 */
  TraceDuration?: number;
  /** 是否开启计费 */
  OpenBilling?: boolean;
  /** 实例上报额度 */
  SpanDailyCounters?: number;
  /** 错误率阈值 */
  ErrRateThreshold?: number;
  /** 采样率 */
  SampleRate?: number;
  /** 是否开启错误采样 0 关 1 开 */
  ErrorSample?: number;
  /** 慢请求阈值 */
  SlowRequestSavedThreshold?: number;
  /** 是否开启日志功能 0 关 1 开 */
  IsRelatedLog?: number;
  /** 日志地域 */
  LogRegion?: string;
  /** CLS日志主题ID | ES 索引名 */
  LogTopicID?: string;
  /** CLS日志集 | ES集群ID */
  LogSet?: string;
  /** CLS | ES */
  LogSource?: string;
  /** 用户自定义展示标签列表 */
  CustomShowTags?: string[];
  /** 修改计费模式1为预付费0为按量付费 */
  PayMode?: number;
  /** 响应时间满意阈值 */
  ResponseDurationWarningThreshold?: number;
  /** （0=付费版；1=tsf受限免费版；2=免费版） */
  Free?: number;
  /** 是否关联dashboard： 0 关 1 开 */
  IsRelatedDashboard?: number;
  /** dashboard ID */
  DashboardTopicID?: string;
  /** 是否开启SQL注入检测 */
  IsSqlInjectionAnalysis?: number;
  /** 是否开启组件漏洞检测 */
  IsInstrumentationVulnerabilityScan?: number;
}

declare interface ModifyApmInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGeneralApmApplicationConfigRequest {
  /** 业务系统Id */
  InstanceId: string;
  /** 需要修改的字段key value分别指定字段名、字段值[具体字段请见](https://cloud.tencent.com/document/product/248/111241) */
  Tags: ApmTag[];
  /** 需要修改配置的应用列表名称 */
  ServiceNames?: string[];
}

declare interface ModifyGeneralApmApplicationConfigResponse {
  /** 返回值描述 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateApmInstanceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface TerminateApmInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Apm 应用性能监控} */
declare interface Apm {
  (): Versions;
  /** 创建APM实例 {@link CreateApmInstanceRequest} {@link CreateApmInstanceResponse} */
  CreateApmInstance(data: CreateApmInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApmInstanceResponse>;
  /** 获取APM Agent信息 {@link DescribeApmAgentRequest} {@link DescribeApmAgentResponse} */
  DescribeApmAgent(data: DescribeApmAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApmAgentResponse>;
  /** 拉取APM实例列表 {@link DescribeApmInstancesRequest} {@link DescribeApmInstancesResponse} */
  DescribeApmInstances(data?: DescribeApmInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApmInstancesResponse>;
  /** 查询应用配置信息 {@link DescribeGeneralApmApplicationConfigRequest} {@link DescribeGeneralApmApplicationConfigResponse} */
  DescribeGeneralApmApplicationConfig(data: DescribeGeneralApmApplicationConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralApmApplicationConfigResponse>;
  /** 获取指标数据通用接口 {@link DescribeGeneralMetricDataRequest} {@link DescribeGeneralMetricDataResponse} */
  DescribeGeneralMetricData(data: DescribeGeneralMetricDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralMetricDataResponse>;
  /** 通用查询调用链列表 {@link DescribeGeneralSpanListRequest} {@link DescribeGeneralSpanListResponse} */
  DescribeGeneralSpanList(data: DescribeGeneralSpanListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralSpanListResponse>;
  /** 通用指标列表接口 {@link DescribeMetricRecordsRequest} {@link DescribeMetricRecordsResponse} */
  DescribeMetricRecords(data: DescribeMetricRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMetricRecordsResponse>;
  /** 获取服务概览数据 {@link DescribeServiceOverviewRequest} {@link DescribeServiceOverviewResponse} */
  DescribeServiceOverview(data: DescribeServiceOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceOverviewResponse>;
  /** 查询 Tag 数据 {@link DescribeTagValuesRequest} {@link DescribeTagValuesResponse} */
  DescribeTagValues(data: DescribeTagValuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagValuesResponse>;
  /** 修改APM实例 {@link ModifyApmInstanceRequest} {@link ModifyApmInstanceResponse} */
  ModifyApmInstance(data: ModifyApmInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApmInstanceResponse>;
  /** 修改应用配置信息 {@link ModifyGeneralApmApplicationConfigRequest} {@link ModifyGeneralApmApplicationConfigResponse} */
  ModifyGeneralApmApplicationConfig(data: ModifyGeneralApmApplicationConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGeneralApmApplicationConfigResponse>;
  /** 销毁实例 {@link TerminateApmInstanceRequest} {@link TerminateApmInstanceResponse} */
  TerminateApmInstance(data: TerminateApmInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateApmInstanceResponse>;
}

export declare type Versions = ["2021-06-22"];

export default Apm;
