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
  AmountOfUsedStorage: number | null;
  /** 实例名 */
  Name: string | null;
  /** 实例所属tag列表 */
  Tags: ApmTag[] | null;
  /** 实例ID */
  InstanceId: string;
  /** 创建人Uin */
  CreateUin: string | null;
  /** 该实例已上报的服务端应用数量 */
  ServiceCount: number | null;
  /** 日均上报Span数 */
  CountOfReportSpanPerDay: number | null;
  /** AppId信息 */
  AppId: number;
  /** Trace数据保存时长 */
  TraceDuration: number | null;
  /** 实例描述信息 */
  Description: string | null;
  /** 实例状态 */
  Status: number | null;
  /** 实例所属地域 */
  Region: string | null;
  /** 实例上报额度 */
  SpanDailyCounters: number | null;
  /** 实例是否开通计费 */
  BillingInstance: number | null;
  /** 错误率阈值 */
  ErrRateThreshold: number | null;
  /** 采样率阈值 */
  SampleRate: number | null;
  /** 是否开启错误采样 0 关 1 开 */
  ErrorSample: number | null;
  /** 慢调用保存阈值 */
  SlowRequestSavedThreshold: number | null;
  /** cls日志所在地域 */
  LogRegion: string | null;
  /** 日志来源 */
  LogSource: string | null;
  /** 日志功能开关 0 关 | 1 开 */
  IsRelatedLog: number | null;
  /** 日志主题ID */
  LogTopicID: string | null;
  /** 该实例已上报的客户端应用数量 */
  ClientCount: number | null;
  /** 该实例已上报的总应用数量 */
  TotalCount: number | null;
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

declare interface CreateApmInstanceRequest {
  /** 实例名 */
  Name: string;
  /** 实例描述信息 */
  Description?: string;
  /** Trace数据保存时长 */
  TraceDuration?: number;
  /** 标签列表 */
  Tags?: ApmTag[];
  /** 实例上报额度值 */
  SpanDailyCounters?: number;
}

declare interface CreateApmInstanceResponse {
  /** 实例ID */
  InstanceId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ApmAgent: ApmAgentInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface DescribeApmInstancesResponse {
  /** apm实例列表 */
  Instances: ApmInstanceDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGeneralMetricDataRequest {
  /** 要过滤的维度信息：service_metric视图支持：service.name（服务名）、span.kind（客户端/服务端视角）为维度进行过滤，service.name（服务名）必填。span.kind:	server:服务端视角	client:客户端视角默认为服务端视角进行查询。runtime_metric视图支持：service.name（服务名）维度进行过滤，service.name（服务名）必填。sql_metric视图支持：service.name（服务名）、db.instance（数据库名称）、db.ip（数据库实例ip）维度进行过滤，查询service_slow_sql_count（慢sql）指标时service.name必填，查询sql_duration_avg（耗时）指标时db.instance（数据库名称）必填。 */
  Filters: GeneralFilter[];
  /** 需要查询的指标，不可自定义输入。service_metric视图支持：service_request_count（总请求）、service_duration（平均响应时间）、service_error_req_rate（平均错误率）、service_slow_call_count（慢调用）、service_error_request_count（异常数量）。runtime_metric视图支持：service_gc_full_count（Full GC）。sql_metric视图支持：service_slow_sql_count（慢sql）、sql_duration_avg（耗时）。 */
  Metrics: string[];
  /** 业务系统ID */
  InstanceId: string;
  /** 视图名称，不可自定义输入。支持：service_metric、runtime_metric、sql_metric。 */
  ViewName: string;
  /** 聚合维度：service_metric视图支持：service.name（服务名）、span.kind （客户端/服务端视角）维度进行聚合，service.name（服务名）必填。runtime_metric视图支持：service.name（服务名）维度进行聚合，service.name（服务名）必填。sql_metric视图支持：service.name（服务名）、db.statement（sql语句）维度进行聚合，查询service_slow_sql_count（慢sql）时service.name（服务名）必填，查询sql_duration_avg（耗时）指标时service.name（服务名）、db.statement（sql语句）必填。 */
  GroupBy?: string[];
  /** 起始时间的时间戳，单位为秒，只支持查询2天内最多1小时的指标数据。 */
  StartTime?: number;
  /** 结束时间的时间戳，单位为秒，只支持查询2天内最多1小时的指标数据。 */
  EndTime?: number;
  /** 聚合粒度，单位为秒，最小为60s，即一分钟的聚合粒度；如果为空或0则计算开始时间到截止时间的指标数据，上报其他值会报错。 */
  Period?: number;
  /** 对查询指标进行排序：service_metric视图支持：service_request_count（总请求）、service_duration（平均响应时间）、service_error_req_rate（平均错误率）、service_slow_call_count（慢调用）、service_error_request_count（异常数量）。runtime_metric视图支持：service_gc_full_count（Full GC）。sql_metric视图支持：service_slow_sql_count（慢sql）、sql_duration_avg（耗时）。asc:对查询指标进行升序排序desc：对查询指标进行降序排序 */
  OrderBy?: OrderBy;
  /** 查询指标的限制条数，目前最多展示50条数据，PageSize取值为1-50，上送PageSize则根据PageSize的值展示限制条数。 */
  PageSize?: number;
}

declare interface DescribeGeneralMetricDataResponse {
  /** 指标结果集 */
  Records: Line[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface DescribeMetricRecordsResponse {
  /** 指标结果集 */
  Records: ApmMetricRecord[] | null;
  /** 查询指标结果集条数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Apm 应用性能观测} */
declare interface Apm {
  (): Versions;
  /** {@link CreateApmInstance 创建Apm实例}({@link CreateApmInstanceRequest 请求参数}): {@link CreateApmInstanceResponse 返回参数} */
  CreateApmInstance(data: CreateApmInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApmInstanceResponse>;
  /** {@link DescribeApmAgent 获取Apm Agent信息}({@link DescribeApmAgentRequest 请求参数}): {@link DescribeApmAgentResponse 返回参数} */
  DescribeApmAgent(data: DescribeApmAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApmAgentResponse>;
  /** {@link DescribeApmInstances 拉取APM实例列表}({@link DescribeApmInstancesRequest 请求参数}): {@link DescribeApmInstancesResponse 返回参数} */
  DescribeApmInstances(data?: DescribeApmInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApmInstancesResponse>;
  /** {@link DescribeGeneralMetricData 获取指标数据通用接口}({@link DescribeGeneralMetricDataRequest 请求参数}): {@link DescribeGeneralMetricDataResponse 返回参数} */
  DescribeGeneralMetricData(data: DescribeGeneralMetricDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralMetricDataResponse>;
  /** {@link DescribeMetricRecords 通用指标列表接口}({@link DescribeMetricRecordsRequest 请求参数}): {@link DescribeMetricRecordsResponse 返回参数} */
  DescribeMetricRecords(data: DescribeMetricRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMetricRecordsResponse>;
  /** {@link DescribeServiceOverview 获取服务概览数据}({@link DescribeServiceOverviewRequest 请求参数}): {@link DescribeServiceOverviewResponse 返回参数} */
  DescribeServiceOverview(data: DescribeServiceOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceOverviewResponse>;
}

export declare type Versions = ["2021-06-22"];

export default Apm;
