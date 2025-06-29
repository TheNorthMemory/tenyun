/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** APM 浮点数类型键值对 */
declare interface APMKV {
  /** Key 值定义 */
  Key?: string;
  /** Value 值定义 */
  Value?: number;
}

/** APM 通用 KV 结构 */
declare interface APMKVItem {
  /** Key 值定义 */
  Key: string;
  /** Value 值定义 */
  Value: string;
}

/** APM Agent 信息 */
declare interface ApmAgentInfo {
  /** Agent 下载地址 */
  AgentDownloadURL?: string;
  /** Collector 上报地址 */
  CollectorURL?: string;
  /** Token 信息 */
  Token?: string;
  /** 外网上报地址 */
  PublicCollectorURL?: string;
  /** 自研 VPC 上报地址 */
  InnerCollectorURL?: string;
  /** 内网上报地址( Private Link 上报地址) */
  PrivateLinkCollectorURL?: string;
}

/** 应用相关的配置列表项 */
declare interface ApmApplicationConfigView {
  /** 业务系统 ID */
  InstanceKey?: string;
  /** 应用名 */
  ServiceName?: string;
  /** 接口过滤 */
  OperationNameFilter?: string;
  /** 错误类型过滤 */
  ExceptionFilter?: string;
  /** HTTP 状态码过滤 */
  ErrorCodeFilter?: string;
  /** 应用诊断开关（已废弃） */
  EventEnable?: boolean;
  /** URL 收敛开关 0 关 1 开 */
  UrlConvergenceSwitch?: number;
  /** URL 收敛阈值 */
  UrlConvergenceThreshold?: number;
  /** URL 收敛规则正则 */
  UrlConvergence?: string;
  /** URL 排除规则正则 */
  UrlExclude?: string;
  /** 是否开启日志 0 关 1 开 */
  IsRelatedLog?: number;
  /** 日志源 */
  LogSource?: string;
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
  InstrumentList?: Instrument[];
  /** 链路压缩开关（已废弃） */
  TraceSquash?: boolean;
}

/** 指标维度信息 */
declare interface ApmField {
  /** 指标名 */
  Key?: string;
  /** 指标数值 */
  Value?: number;
  /** 指标所对应的单位 */
  Unit?: string;
  /** 同比结果数组，推荐使用 */
  CompareVals?: APMKVItem[] | null;
  /** 同比上一个周期的具体指标数值 */
  LastPeriodValue?: APMKV[] | null;
  /** 同比指标值，已弃用，不建议使用 */
  CompareVal?: string;
}

/** APM 业务系统信息 */
declare interface ApmInstanceDetail {
  /** 业务系统 ID */
  InstanceId?: string;
  /** 业务系统名 */
  Name?: string;
  /** 业务系统描述信息 */
  Description?: string;
  /** 业务系统状态。{1: 初始化中; 2: 运行中; 4: 限流} */
  Status?: number;
  /** 业务系统所属地域 */
  Region?: string;
  /** 业务系统 Tag 列表 */
  Tags?: ApmTag[];
  /** AppID 信息 */
  AppId?: number;
  /** 创建人 Uin */
  CreateUin?: string;
  /** 存储使用量(单位：MB) */
  AmountOfUsedStorage?: number;
  /** 该业务系统服务端应用数量 */
  ServiceCount?: number;
  /** 日均上报 Span 数 */
  CountOfReportSpanPerDay?: number;
  /** Trace 数据保存时长（单位：天） */
  TraceDuration?: number;
  /** 业务系统上报额度 */
  SpanDailyCounters?: number;
  /** 业务系统是否已开通计费（0=未开通，1=已开通） */
  BillingInstance?: number;
  /** 错误警示线（单位：%） */
  ErrRateThreshold?: number;
  /** 采样率（单位：%） */
  SampleRate?: number;
  /** 是否开启错误采样（0=关, 1=开） */
  ErrorSample?: number;
  /** 采样慢调用保存阈值（单位：ms） */
  SlowRequestSavedThreshold?: number;
  /** CLS 日志所在地域 */
  LogRegion?: string;
  /** 日志源 */
  LogSource?: string;
  /** 日志功能开关（0=关， 1=开） */
  IsRelatedLog?: number;
  /** 日志主题 ID */
  LogTopicID?: string;
  /** 该业务系统客户端应用数量 */
  ClientCount?: number;
  /** 该业务系统最近2天活跃应用数量 */
  TotalCount?: number;
  /** CLS 日志集 */
  LogSet?: string;
  /** Metric 数据保存时长（单位：天） */
  MetricDuration?: number;
  /** 用户自定义展示标签列表 */
  CustomShowTags?: string[];
  /** 业务系统计费模式（1为预付费，0为按量付费） */
  PayMode?: number;
  /** 业务系统计费模式是否生效 */
  PayModeEffective?: boolean;
  /** 响应时间警示线（单位：ms） */
  ResponseDurationWarningThreshold?: number;
  /** 是否免费（0=否，1=限额免费，2=完全免费），默认0 */
  Free?: number;
  /** 是否 TSF 默认业务系统（0=否，1=是） */
  DefaultTSF?: number;
  /** 是否关联 Dashboard（0=关, 1=开） */
  IsRelatedDashboard?: number;
  /** 关联的 Dashboard ID */
  DashboardTopicID?: string;
  /** 是否开启组件漏洞检测（0=关， 1=开） */
  IsInstrumentationVulnerabilityScan?: number;
  /** 是否开启 SQL 注入分析（0=关， 1=开） */
  IsSqlInjectionAnalysis?: number;
  /** 限流原因。{1: 正式版限额;2: 试用版限额;4: 试用版到期;8: 账号欠费} */
  StopReason?: number;
  /** 是否开远程命令执行检测（0=关， 1=开） */
  IsRemoteCommandExecutionAnalysis?: number;
  /** 是否开内存马执行检测（0=关， 1=开） */
  IsMemoryHijackingAnalysis?: number;
  /** CLS索引类型(0=全文索引，1=键值索引) */
  LogIndexType?: number;
  /** traceId的索引key: 当CLS索引类型为键值索引时生效 */
  LogTraceIdKey?: string;
  /** 业务系统鉴权 token */
  Token?: string;
}

/** 指标列表单元 */
declare interface ApmMetricRecord {
  /** field数组，用于指标的查询结果 */
  Fields?: ApmField[];
  /** tag数组，用于区分 Groupby 的对象 */
  Tags?: ApmTag[];
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
  Name?: string;
  /** 组件开关 */
  Enable?: boolean;
}

/** 指标曲线数据 */
declare interface Line {
  /** 指标名 */
  MetricName?: string;
  /** 指标中文名 */
  MetricNameCN?: string;
  /** 时间序列 */
  TimeSerial?: number[];
  /** 数据序列 */
  DataSerial?: number[];
  /** 维度列表 */
  Tags?: ApmTag[];
  /** 指标数据单位 */
  MetricUnit?: string;
}

/** 排序字段 */
declare interface OrderBy {
  /** 需要排序的字段，现支持 startTIme, endTime, duration */
  Key: string;
  /** asc 顺序排序 / desc 倒序排序 */
  Value: string;
}

/** 查询 */
declare interface QueryMetricItem {
  /** 指标名 */
  MetricName: string;
  /** 同比，现支持 CompareByYesterday (与昨天相比)和CompareByLastWeek (与上周相比) */
  Compares?: string[];
  /** 同比，已弃用，不建议使用 */
  Compare?: string;
}

/** Span 对象 */
declare interface Span {
  /** Trace ID */
  TraceID?: string;
  /** 日志 */
  Logs?: SpanLog[];
  /** 标签 */
  Tags?: SpanTag[];
  /** 上报应用服务信息 */
  Process?: SpanProcess;
  /** 产生时间戳(毫秒) */
  Timestamp?: number;
  /** Span 名称 */
  OperationName?: string;
  /** 关联关系 */
  References?: SpanReference[];
  /** 产生时间戳(微秒) */
  StartTime?: number;
  /** 持续耗时(微妙) */
  Duration?: number;
  /** Span ID */
  SpanID?: string;
  /** 产生时间戳(毫秒) */
  StartTimeMillis?: number;
  /** Parent Span ID */
  ParentSpanID?: string;
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
  /** 业务系统名 */
  Name: string;
  /** 业务系统描述信息 */
  Description?: string;
  /** Trace 数据保存时长（单位：天，默认存储时长为3天） */
  TraceDuration?: number;
  /** 业务系统 Tag 列表 */
  Tags?: ApmTag[];
  /** 业务系统上报额度值，默认赋值为0表示不限制上报额度，已废弃 */
  SpanDailyCounters?: number;
  /** 业务系统的计费模式（0=按量付费，1=预付费） */
  PayMode?: number;
  /** 是否为免费版业务系统（0=付费版；1=TSF 受限免费版；2=免费版） */
  Free?: number;
}

declare interface CreateApmInstanceResponse {
  /** 业务系统 ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProfileTaskRequest {
  /** 应用名称 */
  ServiceName: string;
  /** APM业务系统ID */
  InstanceId: string;
  /** 应用实例（在线） */
  ServiceInstance: string;
  /** 事件类型（cpu、alloc） */
  Event: string;
  /** 任务持续时长(单位：毫秒)，范围限制在5~180秒 */
  Duration: number;
  /** 执行次数，范围限制在1~100次 */
  AllTimes: number;
  /** 开始时间戳，0代表从当前开始(单位：秒) */
  StartTime?: number;
  /** 任务执行间隔(单位：毫秒)，范围限制在10~600秒，不可小于1.5倍的Duration */
  TaskInterval?: number;
}

declare interface CreateProfileTaskResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApmAgentRequest {
  /** 业务系统 ID */
  InstanceId: string;
  /** 接入方式，现支持 skywalking, ot, ebpf 方式接入上报，不填默认为 ot */
  AgentType?: string;
  /** 上报环境，现支持 pl (内网上报), public (外网), inner (自研 VPC )环境上报，不传默认为 public */
  NetworkMode?: string;
  /** 语言，现支持 java, golang, php, python, dotNet, nodejs 语言上报，不传默认为 golang */
  LanguageEnvironment?: string;
  /** 上报方式，已弃用 */
  ReportMethod?: string;
}

declare interface DescribeApmAgentResponse {
  /** Agent 信息 */
  ApmAgent?: ApmAgentInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApmInstancesRequest {
  /** Tag 列表 */
  Tags?: ApmTag[];
  /** 按业务系统名过滤，支持模糊检索 */
  InstanceName?: string;
  /** 按业务系统 ID 过滤，支持模糊检索 */
  InstanceId?: string;
  /** 按业务系统 ID 过滤 */
  InstanceIds?: string[];
  /** 是否查询官方 Demo 业务系统（0=非 Demo 业务系统，1=Demo 业务系统，默认为0） */
  DemoInstanceFlag?: number;
  /** 是否查询全地域业务系统（0=不查询全地域，1=查询全地域，默认为0） */
  AllRegionsFlag?: number;
}

declare interface DescribeApmInstancesResponse {
  /** APM 业务系统列表 */
  Instances?: ApmInstanceDetail[];
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
  /** 业务系统 ID */
  InstanceId: string;
  /** 视图名称，不可自定义输入。[详情请见。](https://cloud.tencent.com/document/product/248/101681) */
  ViewName: string;
  /** 要过滤的维度信息，不同视图有对应的指标维度，[详情请见。](https://cloud.tencent.com/document/product/248/101681) */
  Filters: GeneralFilter[];
  /** 聚合维度，不同视图有对应的指标维度，[详情请见。](https://cloud.tencent.com/document/product/248/101681) */
  GroupBy?: string[];
  /** 起始时间的时间戳，支持查询30天内的指标数据。（单位：秒） */
  StartTime?: number;
  /** 结束时间的时间戳，支持查询30天内的指标数据。（单位：秒） */
  EndTime?: number;
  /** 是否按固定时间跨度聚合，填入1及大于1的值按1处理，不填按0处理。- 填入0，则计算开始时间到截止时间的指标数据。- 填入1，则会按照开始时间到截止时间的时间跨度选择聚合粒度： - 时间跨度 (0,12) 小时，则按一分钟粒度聚合。 - 时间跨度 [12,48] 小时，则按五分钟粒度聚合。 - 时间跨度 (48, +∞) 小时，则按一小时粒度聚合。 */
  Period?: number;
  /** 对查询指标进行排序：Key 填写云 API 指标名称，[详情请见。](https://cloud.tencent.com/document/product/248/101681)Value 填写排序方式： - asc：对查询指标进行升序排序- desc：对查询指标进行降序排序 */
  OrderBy?: OrderBy;
  /** 查询指标的限制条数，目前最多展示50条数据，PageSize取值为1-50，上送PageSize则根据PageSize的值展示限制条数。 */
  PageSize?: number;
}

declare interface DescribeGeneralMetricDataResponse {
  /** 指标结果集 */
  Records?: Line[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGeneralOTSpanListRequest {
  /** 业务系统 ID */
  InstanceId: string;
  /** Span 查询开始时间戳（单位：秒） */
  StartTime: number;
  /** Span 查询结束时间戳（单位：秒） */
  EndTime: number;
  /** 通用过滤参数 */
  Filters?: Filter[];
  /** 排序现支持的 Key 有：- startTime(开始时间)- endTime(结束时间)- duration(响应时间)现支持的 Value 有：- desc(降序排序)- asc(升序排序) */
  OrderBy?: OrderBy;
  /** 业务自身服务名，控制台用户请填写taw */
  BusinessName?: string;
  /** 单页项目个数，默认为10000，合法取值范围为0～10000 */
  Limit?: number;
  /** 分页 */
  Offset?: number;
}

declare interface DescribeGeneralOTSpanListResponse {
  /** 总数量 */
  TotalCount?: number;
  /** Spans字段中包含了链路数据的全部内容，由于数据经过了压缩，需要对结果进行如下三步转换，以还原始的文本。1. 将Spans字段中的文本进行 Base64 解码，得到经过压缩后字节数组。2. 使用 gzip 对压缩后的字节数组进行解压，得到压缩前的字节数组。3. 使用 UTF-8 字符集，将压缩前的字节数组转换为文本。 */
  Spans?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGeneralSpanListRequest {
  /** 业务系统 ID */
  InstanceId: string;
  /** Span 查询开始时间戳（单位：秒） */
  StartTime: number;
  /** Span 查询结束时间戳（单位：秒） */
  EndTime: number;
  /** 通用过滤参数 */
  Filters?: Filter[];
  /** 排序现支持的 Key 有：- startTime(开始时间)- endTime(结束时间)- duration(响应时间)现支持的 Value 有：- desc(降序排序)- asc(升序排序) */
  OrderBy?: OrderBy;
  /** 业务自身服务名，控制台用户请填写taw */
  BusinessName?: string;
  /** 单页项目个数，默认为10000，合法取值范围为0～10000 */
  Limit?: number;
  /** 分页 */
  Offset?: number;
}

declare interface DescribeGeneralSpanListResponse {
  /** 总数量 */
  TotalCount?: number;
  /** Span 分页列表 */
  Spans?: Span[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMetricRecordsRequest {
  /** 业务系统 ID */
  InstanceId: string;
  /** 指标列表 */
  Metrics: QueryMetricItem[];
  /** 开始时间（单位为秒） */
  StartTime: number;
  /** 结束时间（单位为秒） */
  EndTime: number;
  /** 聚合维度 */
  GroupBy: string[];
  /** 过滤条件 */
  Filters?: Filter[];
  /** Or 过滤条件 */
  OrFilters?: Filter[];
  /** 排序现支持的 Key 有：- startTime(开始时间)- endTime(结束时间)- duration(响应时间)现支持的 Value 有：- desc(降序排序)- asc(升序排序) */
  OrderBy?: OrderBy;
  /** 业务名称，控制台用户请填写taw。 */
  BusinessName?: string;
  /** 特殊处理查询结果 */
  Type?: string;
  /** 每页大小，默认为1000，合法取值范围为0~1000 */
  Limit?: number;
  /** 分页起始点 */
  Offset?: number;
  /** 页码 */
  PageIndex?: number;
  /** 页长 */
  PageSize?: number;
}

declare interface DescribeMetricRecordsResponse {
  /** 指标结果集 */
  Records?: ApmMetricRecord[];
  /** 查询指标结果集条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceOverviewRequest {
  /** 业务系统 ID */
  InstanceId: string;
  /** 指标列表 */
  Metrics: QueryMetricItem[];
  /** 开始时间（单位：秒） */
  StartTime: number;
  /** 结束时间（单位：秒） */
  EndTime: number;
  /** 聚合维度 */
  GroupBy: string[];
  /** 过滤条件 */
  Filters?: Filter[];
  /** 排序方式Value 填写：- asc：对查询指标进行升序排序- desc：对查询指标进行降序排序 */
  OrderBy?: OrderBy;
  /** 每页大小 */
  Limit?: number;
  /** 分页起始点 */
  Offset?: number;
}

declare interface DescribeServiceOverviewResponse {
  /** 指标结果集 */
  Records?: ApmMetricRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTagValuesRequest {
  /** 业务系统 ID */
  InstanceId: string;
  /** 维度名 */
  TagKey: string;
  /** 开始时间（单位为秒） */
  StartTime: number;
  /** 结束时间（单位为秒） */
  EndTime: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** Or 过滤条件 */
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
  /** 业务系统 ID */
  InstanceId: string;
  /** 业务系统名 */
  Name: string;
  /** Tag 列表 */
  Tags?: ApmTag[];
  /** 业务系统描述 */
  Description?: string;
  /** Trace 数据保存时长（单位：天） */
  TraceDuration?: number;
  /** 是否开启计费 */
  OpenBilling?: boolean;
  /** 业务系统上报额度 */
  SpanDailyCounters?: number;
  /** 错误率警示线，当应用的平均错误率超出该阈值时，系统会给出异常提示。 */
  ErrRateThreshold?: number;
  /** 采样率（单位：%） */
  SampleRate?: number;
  /** 是否开启错误采样（0=关, 1=开） */
  ErrorSample?: number;
  /** 采样慢调用保存阈值（单位：ms） */
  SlowRequestSavedThreshold?: number;
  /** 是否开启日志功能（0=关, 1=开） */
  IsRelatedLog?: number;
  /** 日志地域，开启日志功能后才会生效 */
  LogRegion?: string;
  /** CLS 日志主题 ID，开启日志功能后才会生效 */
  LogTopicID?: string;
  /** 日志集，开启日志功能后才会生效 */
  LogSet?: string;
  /** 日志源，开启日志功能后才会生效 */
  LogSource?: string;
  /** 用户自定义展示标签列表 */
  CustomShowTags?: string[];
  /** 修改计费模式（1为预付费，0为按量付费） */
  PayMode?: number;
  /** 响应时间警示线 */
  ResponseDurationWarningThreshold?: number;
  /** 是否免费（0=付费版；1=TSF 受限免费版；2=免费版），默认0 */
  Free?: number;
  /** 是否关联 Dashboard（0=关,1=开） */
  IsRelatedDashboard?: number;
  /** 关联的 Dashboard ID，开启关联 Dashboard 后才会生效 */
  DashboardTopicID?: string;
  /** 是否开启 SQL 注入检测（0=关,1=开） */
  IsSqlInjectionAnalysis?: number;
  /** 是否开启组件漏洞检测（0=关,1=开） */
  IsInstrumentationVulnerabilityScan?: number;
  /** 是否开启远程命令攻击检测 */
  IsRemoteCommandExecutionAnalysis?: number;
  /** 是否开启内存马检测 */
  IsMemoryHijackingAnalysis?: number;
  /** CLS索引类型(0=全文索引，1=键值索引) */
  LogIndexType?: number;
  /** traceId的索引key: 当CLS索引类型为键值索引时生效 */
  LogTraceIdKey?: string;
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
  ServiceNames: string[];
}

declare interface ModifyGeneralApmApplicationConfigResponse {
  /** 返回值描述 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateApmInstanceRequest {
  /** 业务系统ID */
  InstanceId: string;
}

declare interface TerminateApmInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Apm 应用性能监控} */
declare interface Apm {
  (): Versions;
  /** 创建 APM 业务系统 {@link CreateApmInstanceRequest} {@link CreateApmInstanceResponse} */
  CreateApmInstance(data: CreateApmInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApmInstanceResponse>;
  /** 创建性能剖析事件任务 {@link CreateProfileTaskRequest} {@link CreateProfileTaskResponse} */
  CreateProfileTask(data: CreateProfileTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProfileTaskResponse>;
  /** 获取 APM 接入点 {@link DescribeApmAgentRequest} {@link DescribeApmAgentResponse} */
  DescribeApmAgent(data: DescribeApmAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApmAgentResponse>;
  /** 获取 APM 业务系统列表 {@link DescribeApmInstancesRequest} {@link DescribeApmInstancesResponse} */
  DescribeApmInstances(data?: DescribeApmInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApmInstancesResponse>;
  /** 查询应用配置信息 {@link DescribeGeneralApmApplicationConfigRequest} {@link DescribeGeneralApmApplicationConfigResponse} */
  DescribeGeneralApmApplicationConfig(data: DescribeGeneralApmApplicationConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralApmApplicationConfigResponse>;
  /** 获取指标数据通用接口 {@link DescribeGeneralMetricDataRequest} {@link DescribeGeneralMetricDataResponse} */
  DescribeGeneralMetricData(data: DescribeGeneralMetricDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralMetricDataResponse>;
  /** 通用查询 OpenTelemetry 调用链列表 {@link DescribeGeneralOTSpanListRequest} {@link DescribeGeneralOTSpanListResponse} */
  DescribeGeneralOTSpanList(data: DescribeGeneralOTSpanListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralOTSpanListResponse>;
  /** 通用查询调用链列表 {@link DescribeGeneralSpanListRequest} {@link DescribeGeneralSpanListResponse} */
  DescribeGeneralSpanList(data: DescribeGeneralSpanListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralSpanListResponse>;
  /** 通用指标列表接口 {@link DescribeMetricRecordsRequest} {@link DescribeMetricRecordsResponse} */
  DescribeMetricRecords(data: DescribeMetricRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMetricRecordsResponse>;
  /** 获取应用概览数据 {@link DescribeServiceOverviewRequest} {@link DescribeServiceOverviewResponse} */
  DescribeServiceOverview(data: DescribeServiceOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceOverviewResponse>;
  /** 查询 Tag 数据 {@link DescribeTagValuesRequest} {@link DescribeTagValuesResponse} */
  DescribeTagValues(data: DescribeTagValuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTagValuesResponse>;
  /** 修改 APM 业务系统 {@link ModifyApmInstanceRequest} {@link ModifyApmInstanceResponse} */
  ModifyApmInstance(data: ModifyApmInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApmInstanceResponse>;
  /** 修改应用配置信息 {@link ModifyGeneralApmApplicationConfigRequest} {@link ModifyGeneralApmApplicationConfigResponse} */
  ModifyGeneralApmApplicationConfig(data: ModifyGeneralApmApplicationConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGeneralApmApplicationConfigResponse>;
  /** 销毁业务系统 {@link TerminateApmInstanceRequest} {@link TerminateApmInstanceResponse} */
  TerminateApmInstance(data: TerminateApmInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateApmInstanceResponse>;
}

export declare type Versions = ["2021-06-22"];

export default Apm;
