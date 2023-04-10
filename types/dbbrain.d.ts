/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 联系人contact描述。 */
declare interface ContactItem {
  /** 联系人id。 */
  Id: number;
  /** 联系人姓名。 */
  Name: string;
  /** 联系人绑定的邮箱。 */
  Mail: string;
}

/** 实例诊断历史事件 */
declare interface DiagHistoryEventItem {
  /** 诊断类型。 */
  DiagType: string;
  /** 结束时间。 */
  EndTime: string;
  /** 开始时间。 */
  StartTime: string;
  /** 事件唯一ID 。 */
  EventId: number;
  /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
  Severity: number;
  /** 诊断概要。 */
  Outline: string;
  /** 诊断项说明。 */
  DiagItem: string;
  /** 实例 ID 。 */
  InstanceId: string;
  /** 保留字段。 */
  Metric: string | null;
  /** 地域。 */
  Region: string;
}

/** 异常事件信息。 */
declare interface EventInfo {
  /** 事件 ID 。 */
  EventId: number;
  /** 诊断类型。 */
  DiagType: string;
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 概要。 */
  Outline: string;
  /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
  Severity: number;
  /** 扣分。 */
  ScoreLost: number;
  /** 保留字段。 */
  Metric: string;
  /** 告警数目。 */
  Count: number;
}

/** 描述组信息。 */
declare interface GroupItem {
  /** 组id。 */
  Id: number;
  /** 组名称。 */
  Name: string;
  /** 组成员数量。 */
  MemberCount: number;
}

/** 健康报告任务详情。 */
declare interface HealthReportTask {
  /** 异步任务请求 ID。 */
  AsyncRequestId: number;
  /** 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。 */
  Source: string;
  /** 任务完成进度，单位%。 */
  Progress: number;
  /** 任务创建时间。 */
  CreateTime: string;
  /** 任务开始执行时间。 */
  StartTime: string;
  /** 任务完成执行时间。 */
  EndTime: string;
  /** 任务所属实例的基础信息。 */
  InstanceInfo: InstanceBasicInfo;
  /** 健康报告中的健康信息。 */
  HealthStatus: HealthStatus;
}

/** 获取健康得分返回的详情。 */
declare interface HealthScoreInfo {
  /** 异常详情。 */
  IssueTypes: IssueTypeInfo[];
  /** 异常事件总数。 */
  EventsTotalCount: number;
  /** 健康得分。 */
  HealthScore: number;
  /** 健康等级, 如："HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"。 */
  HealthLevel: string;
}

/** 实例健康详情。 */
declare interface HealthStatus {
  /** 健康分数，满分100。 */
  HealthScore: number;
  /** 健康等级，取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK"- 危险；"HIGH_RISK" - 高危。 */
  HealthLevel: string;
  /** 总扣分分数。 */
  ScoreLost: number;
  /** 扣分详情。 */
  ScoreDetails: ScoreDetail[] | null;
}

/** 实例基础信息。 */
declare interface InstanceBasicInfo {
  /** 实例ID。 */
  InstanceId: string;
  /** 实例名称。 */
  InstanceName: string;
  /** 实例内网IP。 */
  Vip: string;
  /** 实例内网Port。 */
  Vport: number;
  /** 实例产品。 */
  Product: string;
  /** 实例引擎版本。 */
  EngineVersion: string;
}

/** 实例配置。 */
declare interface InstanceConfs {
  /** 数据库巡检开关, Yes/No。 */
  DailyInspection?: string;
  /** 实例概览开关，Yes/No。 */
  OverviewDisplay?: string;
  /** redis大key分析的自定义分割符，仅redis使用 */
  KeyDelimiters?: string[] | null;
}

/** 查询实例列表，返回实例的相关信息的对象。 */
declare interface InstanceInfo {
  /** 实例ID。 */
  InstanceId: string;
  /** 实例名称。 */
  InstanceName: string;
  /** 实例所属地域。 */
  Region: string;
  /** 健康得分。 */
  HealthScore: number;
  /** 所属产品。 */
  Product: string;
  /** 异常事件数量。 */
  EventCount: number;
  /** 实例类型：1:MASTER；2:DR，3：RO，4:SDR。 */
  InstanceType: number;
  /** 核心数。 */
  Cpu: number;
  /** 内存，单位MB。 */
  Memory: number;
  /** 硬盘存储，单位GB。 */
  Volume: number;
  /** 数据库版本。 */
  EngineVersion: string;
  /** 内网地址。 */
  Vip: string;
  /** 内网端口。 */
  Vport: number;
  /** 接入来源。 */
  Source: string;
  /** 分组ID。 */
  GroupId: string;
  /** 分组组名。 */
  GroupName: string;
  /** 实例状态：0：发货中；1：运行正常；4：销毁中；5：隔离中。 */
  Status: number;
  /** 子网统一ID。 */
  UniqSubnetId: string;
  /** cdb类型。 */
  DeployMode: string;
  /** cdb实例初始化标志：0：未初始化；1：已初始化。 */
  InitFlag: number;
  /** 任务状态。 */
  TaskStatus: number;
  /** 私有网络统一ID。 */
  UniqVpcId: string;
  /** 实例巡检/概览的状态。 */
  InstanceConf: InstanceConfs;
  /** 资源到期时间。 */
  DeadlineTime: string;
  /** 是否是DBbrain支持的实例。 */
  IsSupported: boolean;
  /** 实例安全审计日志开启状态：ON： 安全审计开启；OFF： 未开启安全审计。 */
  SecAuditStatus: string;
  /** 实例审计日志开启状态，ALL_AUDIT： 开启全审计；RULE_AUDIT： 开启规则审计；UNBOUND： 未开启审计。 */
  AuditPolicyStatus: string;
  /** 实例审计日志运行状态：normal： 运行中； paused： 欠费暂停。 */
  AuditRunningStatus: string;
  /** 内网vip */
  InternalVip?: string | null;
  /** 内网port */
  InternalVport?: number | null;
  /** 创建时间 */
  CreateTime?: string;
}

/** 指标信息。 */
declare interface IssueTypeInfo {
  /** 指标分类：AVAILABILITY：可用性，MAINTAINABILITY：可维护性，PERFORMANCE，性能，RELIABILITY可靠性。 */
  IssueType: string;
  /** 异常事件。 */
  Events: EventInfo[];
  /** 异常事件总数。 */
  TotalCount: number;
}

/** 邮件发送配置 */
declare interface MailConfiguration {
  /** 是否开启邮件发送: 0, 否; 1, 是。 */
  SendMail: number;
  /** 地域配置, 如["ap-guangzhou", "ap-shanghai"]。巡检的邮件发送模板，配置需要发送巡检邮件的地域；订阅的邮件发送模板，配置当前订阅实例的所属地域。 */
  Region: string[];
  /** 发送指定的健康等级的报告, 如["HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"]。 */
  HealthStatus: string[];
  /** 联系人id, 联系人/联系组不能都为空。 */
  ContactPerson?: number[];
  /** 联系组id, 联系人/联系组不能都为空。 */
  ContactGroup?: number[];
}

/** 监控数据（浮点型） */
declare interface MonitorFloatMetric {
  /** 指标名称。 */
  Metric: string;
  /** 指标单位。 */
  Unit: string;
  /** 指标值。 */
  Values: number[] | null;
}

/** 单位时间间隔内的监控指标数据（浮点型） */
declare interface MonitorFloatMetricSeriesData {
  /** 监控指标。 */
  Series: MonitorFloatMetric[];
  /** 监控指标对应的时间戳。 */
  Timestamp: number[];
}

/** 监控数据 */
declare interface MonitorMetric {
  /** 指标名称。 */
  Metric: string;
  /** 指标单位。 */
  Unit: string;
  /** 指标值。 */
  Values: number[] | null;
}

/** 单位时间间隔内的监控指标数据 */
declare interface MonitorMetricSeriesData {
  /** 监控指标。 */
  Series: MonitorMetric[];
  /** 监控指标对应的时间戳。 */
  Timestamp: number[];
}

/** 关系型数据库线程 */
declare interface MySqlProcess {
  /** 线程ID。 */
  ID: string;
  /** 线程的操作账号名。 */
  User: string;
  /** 线程的操作主机地址。 */
  Host: string;
  /** 线程的操作数据库。 */
  DB: string;
  /** 线程的操作状态。 */
  State: string;
  /** 线程的执行类型。 */
  Command: string;
  /** 线程的操作时长，单位秒。 */
  Time: string;
  /** 线程的操作语句。 */
  Info: string;
}

/** 实时会话统计详情。 */
declare interface ProcessStatistic {
  /** 会话详情数组。 */
  Items: SessionItem[];
  /** 总连接数。 */
  AllConnSum: number;
  /** 总活跃连接数。 */
  ActiveConnSum: number;
}

/** 用户配置的信息 */
declare interface ProfileInfo {
  /** 语言, 如"zh"。 */
  Language: string;
  /** 邮件模板的内容。 */
  MailConfiguration: MailConfiguration;
}

/** redis key空间信息。 */
declare interface RedisKeySpaceData {
  /** key名。 */
  Key: string;
  /** key类型。 */
  Type: string;
  /** key编码方式。 */
  Encoding: string;
  /** key过期时间戳（毫秒），0代表未设置过期时间。 */
  ExpireTime: number;
  /** key内存大小，单位Byte。 */
  Length: number;
  /** 元素个数。 */
  ItemCount: number;
  /** 最大元素长度。 */
  MaxElementSize: number;
}

/** redis key前缀空间信息 */
declare interface RedisPreKeySpaceData {
  /** 平均元素长度。 */
  AveElementSize: number;
  /** 总占用内存（Byte）。 */
  Length: number;
  /** key前缀。 */
  KeyPreIndex: string;
  /** 元素数量。 */
  ItemCount: number;
  /** key个数。 */
  Count: number;
  /** 最大元素长度。 */
  MaxElementSize: number;
}

/** 实例SQL限流任务。 */
declare interface SQLFilter {
  /** 任务ID。 */
  Id: number;
  /** 任务状态，取值包括RUNNING - 运行中, FINISHED - 已完成, TERMINATED - 已终止。 */
  Status: string;
  /** SQL类型，取值包括SELECT, UPDATE, DELETE, INSERT, REPLACE。 */
  SqlType: string;
  /** 筛选SQL的关键词，多个关键词用英文逗号拼接。 */
  OriginKeys: string;
  /** 筛选SQL的规则。 */
  OriginRule: string;
  /** 已拒绝SQL数目。 */
  RejectedSqlCount: number;
  /** 当前并发数。 */
  CurrentConcurrency: number;
  /** 最大并发数。 */
  MaxConcurrency: number;
  /** 任务创建时间。 */
  CreateTime: string;
  /** 当前时间。 */
  CurrentTime: string;
  /** 限流过期时间。 */
  ExpireTime: string;
}

/** SchemaItem数组 */
declare interface SchemaItem {
  /** 数据库名称 */
  Schema: string;
}

/** 库空间统计数据。 */
declare interface SchemaSpaceData {
  /** 库名。 */
  TableSchema: string;
  /** 数据空间（MB）。 */
  DataLength: number;
  /** 索引空间（MB）。 */
  IndexLength: number;
  /** 碎片空间（MB）。 */
  DataFree: number;
  /** 总使用空间（MB）。 */
  TotalLength: number;
  /** 碎片率（%）。 */
  FragRatio: number;
  /** 行数。 */
  TableRows: number;
  /** 库中所有表对应的独立物理文件大小加和（MB）。 */
  PhysicalFileSize: number | null;
}

/** 库空间时序数据 */
declare interface SchemaSpaceTimeSeries {
  /** 库名 */
  TableSchema: string;
  /** 单位时间间隔内的空间指标数据。 */
  SeriesData: MonitorMetricSeriesData;
}

/** 扣分详情。 */
declare interface ScoreDetail {
  /** 扣分项分类，取值包括：可用性、可维护性、性能及可靠性。 */
  IssueType: string;
  /** 扣分总分。 */
  ScoreLost: number;
  /** 扣分总分上限。 */
  ScoreLostMax: number;
  /** 扣分项列表。 */
  Items: ScoreItem[] | null;
}

/** 诊断扣分项。 */
declare interface ScoreItem {
  /** 异常诊断项名称。 */
  DiagItem: string;
  /** 诊断项分类，取值包括：可用性、可维护性、性能及可靠性。 */
  IssueType: string;
  /** 健康等级，取值包括：信息、提示、告警、严重、致命。 */
  TopSeverity: string;
  /** 该异常诊断项出现次数。 */
  Count: number;
  /** 扣分分数。 */
  ScoreLost: number;
}

/** 安全审计日志导出任务信息 */
declare interface SecLogExportTaskInfo {
  /** 异步任务Id。 */
  AsyncRequestId: number;
  /** 任务开始时间。 */
  StartTime: string | null;
  /** 任务结束时间。 */
  EndTime: string | null;
  /** 任务创建时间。 */
  CreateTime: string;
  /** 任务状态。 */
  Status: string;
  /** 任务执行进度。 */
  Progress: number;
  /** 导出日志开始时间。 */
  LogStartTime: string | null;
  /** 导出日志结束时间。 */
  LogEndTime: string | null;
  /** 日志文件总大小，单位KB。 */
  TotalSize: number | null;
  /** 风险等级列表。0 无风险；1 低风险；2 中风险；3 高风险。 */
  DangerLevels: number[] | null;
}

/** 实时会话访问来源详情。 */
declare interface SessionItem {
  /** 访问来源。 */
  Ip: string;
  /** 当前访问来源活跃连接数 */
  ActiveConn: string;
  /** 当前访问来源总连接数 */
  AllConn: number;
}

/** 慢日志来源地址详情。 */
declare interface SlowLogHost {
  /** 来源地址。 */
  UserHost: string;
  /** 该来源地址的慢日志数目占总数目的比例，单位%。 */
  Ratio: number;
  /** 该来源地址的慢日志数目。 */
  Count: number;
}

/** 慢日志TopSql */
declare interface SlowLogTopSqlItem {
  /** sql总锁等待时间，单位秒 */
  LockTime: number;
  /** 最大锁等待时间，单位秒 */
  LockTimeMax: number;
  /** 最小锁等待时间，单位秒 */
  LockTimeMin: number;
  /** 总扫描行数 */
  RowsExamined: number;
  /** 最大扫描行数 */
  RowsExaminedMax: number;
  /** 最小扫描行数 */
  RowsExaminedMin: number;
  /** 总耗时，单位秒 */
  QueryTime: number;
  /** 最大执行时间，单位秒 */
  QueryTimeMax: number;
  /** 最小执行时间，单位秒 */
  QueryTimeMin: number;
  /** 总返回行数 */
  RowsSent: number;
  /** 最大返回行数 */
  RowsSentMax: number;
  /** 最小返回行数 */
  RowsSentMin: number;
  /** 执行次数 */
  ExecTimes: number;
  /** sql模板 */
  SqlTemplate: string;
  /** 带参数SQL（随机） */
  SqlText: string;
  /** 数据库名 */
  Schema: string;
  /** 总耗时占比，单位% */
  QueryTimeRatio: number;
  /** sql总锁等待时间占比，单位% */
  LockTimeRatio: number;
  /** 总扫描行数占比，单位% */
  RowsExaminedRatio: number;
  /** 总返回行数占比，单位% */
  RowsSentRatio: number;
  /** 平均执行时间，单位秒 */
  QueryTimeAvg: number;
  /** 平均返回行数 */
  RowsSentAvg: number;
  /** 平均锁等待时间，单位秒 */
  LockTimeAvg: number;
  /** 平均扫描行数 */
  RowsExaminedAvg: number;
  /** SOL模板的MD5值 */
  Md5: string;
}

/** 表结构。 */
declare interface Table {
  /** 库名。 */
  TableSchema: string;
  /** 表名。 */
  TableName: string;
  /** 库表的存储引擎。 */
  Engine: string;
  /** 行数。 */
  TableRows: number;
  /** 总使用空间（MB）。 */
  TotalLength: number;
}

/** 库表空间统计数据。 */
declare interface TableSpaceData {
  /** 表名。 */
  TableName: string;
  /** 库名。 */
  TableSchema: string;
  /** 库表的存储引擎。 */
  Engine: string;
  /** 数据空间（MB）。 */
  DataLength: number;
  /** 索引空间（MB）。 */
  IndexLength: number;
  /** 碎片空间（MB）。 */
  DataFree: number;
  /** 总使用空间（MB）。 */
  TotalLength: number;
  /** 碎片率（%）。 */
  FragRatio: number;
  /** 行数。 */
  TableRows: number;
  /** 表对应的独立物理文件大小（MB）。 */
  PhysicalFileSize: number;
}

/** 库表空间时序数据 */
declare interface TableSpaceTimeSeries {
  /** 表名。 */
  TableName: string;
  /** 库名。 */
  TableSchema: string;
  /** 库表的存储引擎。 */
  Engine: string;
  /** 单位时间间隔内的空间指标数据。 */
  SeriesData: MonitorFloatMetricSeriesData;
}

/** 展示 redis kill 会话任务状态。 */
declare interface TaskInfo {
  /** 异步任务 ID。 */
  AsyncRequestId: number;
  /** 当前实例所有 proxy 列表。 */
  InstProxyList: string[];
  /** 当前实例所有 proxy 数量。 */
  InstProxyCount: number;
  /** 任务创建时间。 */
  CreateTime: string;
  /** 任务启动时间。 */
  StartTime: string;
  /** 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。 */
  TaskStatus: string;
  /** 完成 kill 任务的 proxyId。 */
  FinishedProxyList: string[];
  /** kill 任务实行失败的 proxyId。 */
  FailedProxyList: string[];
  /** 任务结束时间。 */
  EndTime: string;
  /** 任务执行进度。 */
  Progress: number;
  /** 实例 ID。 */
  InstanceId: string;
}

/** 单位时间间隔内的慢日志统计 */
declare interface TimeSlice {
  /** 总数 */
  Count: number;
  /** 统计开始时间 */
  Timestamp: number;
}

/** 用户配置的相关信息，包括邮件配置。 */
declare interface UserProfile {
  /** 配置的id。 */
  ProfileId: string | null;
  /** 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。 */
  ProfileType: string | null;
  /** 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。 */
  ProfileLevel: string | null;
  /** 配置名称。 */
  ProfileName: string | null;
  /** 配置详情。 */
  ProfileInfo: ProfileInfo;
}

declare interface AddUserContactRequest {
  /** 联系人姓名，由中英文、数字、空格、!@#$%^&*()_+-=（）组成，不能以下划线开头，长度在20以内。 */
  Name: string;
  /** 邮箱地址，支持大小写字母、数字、下划线及@字符， 不能以下划线开头，邮箱地址不可重复。 */
  ContactInfo: string;
  /** 服务产品类型，固定值："mysql"。 */
  Product: string;
}

declare interface AddUserContactResponse {
  /** 添加成功的联系人id。 */
  Id: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelKillTaskRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface CancelKillTaskResponse {
  /** kill会话任务终止成功返回1。 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBDiagReportTaskRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 开始时间，如“2020-11-08T14:00:00+08:00”。 */
  StartTime: string;
  /** 结束时间，如“2020-11-09T14:00:00+08:00”。 */
  EndTime: string;
  /** 是否发送邮件: 0 - 否，1 - 是。 */
  SendMailFlag: number;
  /** 接收邮件的联系人ID数组。 */
  ContactPerson?: number[];
  /** 接收邮件的联系组ID数组。 */
  ContactGroup?: number[];
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认值为"mysql"。 */
  Product?: string;
}

declare interface CreateDBDiagReportTaskResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBDiagReportUrlRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 健康报告相应的任务ID，可通过DescribeDBDiagReportTasks查询。 */
  AsyncRequestId: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface CreateDBDiagReportUrlResponse {
  /** 健康报告浏览地址。 */
  ReportUrl: string;
  /** 健康报告浏览地址到期时间戳（秒）。 */
  ExpireTime: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKillTaskRequest {
  /** kill会话任务的关联实例ID。 */
  InstanceId: string;
  /** 任务持续时间，单位秒，手动关闭任务传-1。 */
  Duration: number;
  /** 任务过滤条件，客户端IP。 */
  Host?: string;
  /** 任务过滤条件，数据库库名,多个","隔开。 */
  DB?: string;
  /** 任务过滤条件，相关命令，多个","隔开。 */
  Command?: string;
  /** 任务过滤条件，支持单条件前缀匹配。 */
  Info?: string;
  /** 任务过滤条件，用户类型。 */
  User?: string;
  /** 任务过滤条件，会话持续时长，单位秒。 */
  Time?: number;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface CreateKillTaskResponse {
  /** kill会话任务创建成功返回1 */
  Status: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMailProfileRequest {
  /** 邮件配置内容。 */
  ProfileInfo: ProfileInfo;
  /** 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。 */
  ProfileLevel: string;
  /** 配置名称，需要保持唯一性，数据库巡检邮件配置名称自拟；定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。 */
  ProfileName: string;
  /** 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。 */
  ProfileType: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL。 */
  Product: string;
  /** 配置绑定的实例ID，当配置级别为"Instance"时需要传入且只能为一个实例；当配置级别为“User”时，此参数不填。 */
  BindInstanceIds?: string[];
}

declare interface CreateMailProfileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProxySessionKillTaskRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface CreateProxySessionKillTaskResponse {
  /** 创建 kill 会话任务返回的异步任务 id */
  AsyncRequestId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSchedulerMailProfileRequest {
  /** 取值范围1-7，分别代表周一至周日。 */
  WeekConfiguration: number[];
  /** 邮件配置内容。 */
  ProfileInfo: ProfileInfo;
  /** 配置名称，需要保持唯一性，定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。 */
  ProfileName: string;
  /** 配置订阅的实例ID。 */
  BindInstanceId: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product: string;
}

declare interface CreateSchedulerMailProfileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityAuditLogExportTaskRequest {
  /** 安全审计组Id。 */
  SecAuditGroupId: string;
  /** 导出日志开始时间，例如2020-12-28 00:00:00。 */
  StartTime: string;
  /** 导出日志结束时间，例如2020-12-28 01:00:00。 */
  EndTime: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL。 */
  Product: string;
  /** 日志风险等级列表，支持值包括：0 无风险；1 低风险；2 中风险；3 高风险。 */
  DangerLevels?: number[];
}

declare interface CreateSecurityAuditLogExportTaskResponse {
  /** 日志导出任务Id。 */
  AsyncRequestId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSqlFilterRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 通过VerifyUserAccount获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。 */
  SessionToken: string;
  /** SQL类型，取值包括SELECT, UPDATE, DELETE, INSERT, REPLACE。 */
  SqlType: string;
  /** 关键字，用于筛选SQL语句，多个关键字用英文逗号分隔，逗号不能作为关键词，多个关键词之间的关系为“逻辑与”。 */
  FilterKey: string;
  /** 最大并发度，取值不能小于0，如果该值设为 0，则表示限制所有匹配的SQL执行。 */
  MaxConcurrency: number;
  /** 限流时长，单位秒，支持-1和小于2147483647的正整数，-1表示永不过期。 */
  Duration: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface CreateSqlFilterResponse {
  /** 限流任务ID。 */
  FilterId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDBDiagReportTasksRequest {
  /** 需要删除的任务id列表 */
  AsyncRequestIds: number[];
  /** 实例ID */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL， "mongodb" - 云数据库 CynosDB for MySQL，默认值为"mysql"。 */
  Product: string;
}

declare interface DeleteDBDiagReportTasksResponse {
  /** 任务删除状态, 0-删除成功 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityAuditLogExportTasksRequest {
  /** 安全审计组Id。 */
  SecAuditGroupId: string;
  /** 日志导出任务Id列表，接口会忽略不存在或已删除的任务Id。 */
  AsyncRequestIds: number[];
  /** 服务产品类型，支持值： "mysql" - 云数据库 MySQL。 */
  Product: string;
}

declare interface DeleteSecurityAuditLogExportTasksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSqlFiltersRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 通过VerifyUserAccount获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。 */
  SessionToken: string;
  /** 限流任务ID列表。 */
  FilterIds: number[];
}

declare interface DeleteSqlFiltersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllUserContactRequest {
  /** 服务产品类型，固定值：mysql。 */
  Product: string;
  /** 联系人名数组，支持模糊搜索。 */
  Names?: string[];
}

declare interface DescribeAllUserContactResponse {
  /** 联系人的总数量。 */
  TotalCount: number;
  /** 联系人的信息。 */
  Contacts: ContactItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllUserGroupRequest {
  /** 服务产品类型，固定值：mysql。 */
  Product: string;
  /** 联系组名称数组，支持模糊搜索。 */
  Names?: string[];
}

declare interface DescribeAllUserGroupResponse {
  /** 组总数。 */
  TotalCount: number;
  /** 组信息。 */
  Groups: GroupItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBDiagEventRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 事件 ID 。通过“获取实例诊断历史DescribeDBDiagHistory”获取。 */
  EventId?: number;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeDBDiagEventResponse {
  /** 诊断项。 */
  DiagItem: string;
  /** 诊断类型。 */
  DiagType: string;
  /** 事件 ID 。 */
  EventId: number;
  /** 诊断事件详情，若无附加解释信息则输出为空。 */
  Explanation: string;
  /** 诊断概要。 */
  Outline: string;
  /** 诊断出的问题。 */
  Problem: string;
  /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
  Severity: number;
  /** 开始时间 */
  StartTime: string;
  /** 诊断建议，若无建议则输出为空。 */
  Suggestions: string;
  /** 保留字段。 */
  Metric: string | null;
  /** 结束时间。 */
  EndTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBDiagEventsRequest {
  /** 开始时间，如“2021-05-27 00:00:00”，支持的最早查询时间为当前时间的前30天。 */
  StartTime: string;
  /** 结束时间，如“2021-05-27 01:00:00”，结束时间与开始时间的间隔最大可为7天。 */
  EndTime: string;
  /** 风险等级列表，取值按影响程度从高至低分别为：1 - 致命、2 -严重、3 - 告警、4 - 提示、5 -健康。 */
  Severities?: number[];
  /** 实例ID列表。 */
  InstanceIds?: string[];
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 返回数量，默认20，最大值为50。 */
  Limit?: number;
}

declare interface DescribeDBDiagEventsResponse {
  /** 诊断事件的总数目。 */
  TotalCount: number;
  /** 诊断事件的列表。 */
  Items: DiagHistoryEventItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBDiagHistoryRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 开始时间，如“2019-09-10 12:13:14”。 */
  StartTime: string;
  /** 结束时间，如“2019-09-11 12:13:14”，结束时间与开始时间的间隔最大可为2天。 */
  EndTime: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeDBDiagHistoryResponse {
  /** 事件描述。 */
  Events: DiagHistoryEventItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBDiagReportTasksRequest {
  /** 第一个任务的开始时间，用于范围查询，时间格式如：2019-09-10 12:13:14。 */
  StartTime?: string;
  /** 最后一个任务的开始时间，用于范围查询，时间格式如：2019-09-10 12:13:14。 */
  EndTime?: string;
  /** 实例ID数组，用于筛选指定实例的任务列表。 */
  InstanceIds?: string[];
  /** 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。 */
  Sources?: string[];
  /** 报告的健康等级，支持的取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK" - 危险；"HIGH_RISK" - 高危。 */
  HealthLevels?: string;
  /** 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。 */
  TaskStatuses?: string;
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 返回数量，默认20，最大值为100。 */
  Limit?: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeDBDiagReportTasksResponse {
  /** 任务总数目。 */
  TotalCount: number;
  /** 任务列表。 */
  Tasks: HealthReportTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSpaceStatusRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 时间段天数，截止日期为当日，默认为7天。 */
  RangeDays?: number;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeDBSpaceStatusResponse {
  /** 磁盘增长量(MB)。 */
  Growth: number;
  /** 磁盘剩余(MB)。 */
  Remain: number;
  /** 磁盘总量(MB)。 */
  Total: number;
  /** 预计可用天数。 */
  AvailableDays: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiagDBInstancesRequest {
  /** 是否是DBbrain支持的实例，固定传 true。 */
  IsSupported: boolean;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product: string;
  /** 分页参数，偏移量。 */
  Offset: number;
  /** 分页参数，分页值，最大值为100。 */
  Limit: number;
  /** 根据实例名称条件查询。 */
  InstanceNames?: string[];
  /** 根据实例ID条件查询。 */
  InstanceIds?: string[];
  /** 根据地域条件查询。 */
  Regions?: string[];
}

declare interface DescribeDiagDBInstancesResponse {
  /** 实例总数。 */
  TotalCount: number;
  /** 全实例巡检状态：0：开启全实例巡检；1：未开启全实例巡检。 */
  DbScanStatus: number;
  /** 实例相关信息。 */
  Items: InstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHealthScoreRequest {
  /** 需要获取健康得分的实例ID。 */
  InstanceId: string;
  /** 获取健康得分的时间，时间格式如：2019-09-10 12:13:14。 */
  Time: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product: string;
}

declare interface DescribeHealthScoreResponse {
  /** 健康得分以及异常扣分项。 */
  Data: HealthScoreInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMailProfileRequest {
  /** 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。 */
  ProfileType: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product: string;
  /** 分页偏移量。 */
  Offset: number;
  /** 分页单位，最大支持50。 */
  Limit: number;
  /** 根据邮件配置名称查询，定期发送的邮件配置名称遵循："scheduler_"+{instanceId}的规则。 */
  ProfileName?: string;
}

declare interface DescribeMailProfileResponse {
  /** 邮件配置详情。 */
  ProfileList: UserProfile[] | null;
  /** 邮件配置总数。 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMySqlProcessListRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 线程的ID，用于筛选线程列表。 */
  ID?: number;
  /** 线程的操作账号名，用于筛选线程列表。 */
  User?: string;
  /** 线程的操作主机地址，用于筛选线程列表。 */
  Host?: string;
  /** 线程的操作数据库，用于筛选线程列表。 */
  DB?: string;
  /** 线程的操作状态，用于筛选线程列表。 */
  State?: string;
  /** 线程的执行类型，用于筛选线程列表。 */
  Command?: string;
  /** 线程的操作时长最小值，单位秒，用于筛选操作时长大于该值的线程列表。 */
  Time?: number;
  /** 线程的操作语句，用于筛选线程列表。 */
  Info?: string;
  /** 返回数量，默认20。 */
  Limit?: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeMySqlProcessListResponse {
  /** 实时线程列表。 */
  ProcessList: MySqlProcess[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNoPrimaryKeyTablesRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 查询日期，如2021-05-27，最早为30天前的日期。 */
  Date: string;
  /** 查询数目，默认为20，最大为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeNoPrimaryKeyTablesResponse {
  /** 无主键表总数。 */
  NoPrimaryKeyTableCount?: number;
  /** 与昨日扫描无主键表的差值，正数为增加，负数为减少，0为无变化。 */
  NoPrimaryKeyTableCountDiff?: number;
  /** 记录的无主键表总数（不超过无主键表总数），可用于分页查询。 */
  NoPrimaryKeyTableRecordCount?: number;
  /** 无主键表列表。 */
  NoPrimaryKeyTables?: Table[];
  /** 采集时间戳（秒）。 */
  Timestamp?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyProcessStatisticsRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 该实例下需要查询的某一个 ProxyID 。 */
  InstanceProxyId: string;
  /** 返回数量。 */
  Limit: number;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 按照某字断排序。支持值包括："AllConn"，"ActiveConn"，"Ip"。 */
  SortBy?: string;
  /** 排序方向。支持值包括："DESC"，"ASC"。 */
  OrderDirection?: string;
}

declare interface DescribeProxyProcessStatisticsResponse {
  /** 实时会话统计详情。 */
  ProcessStatistics?: ProcessStatistic;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxySessionKillTasksRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** kill 会话异步任务 ID, 接口 CreateProxySessionKillTask 调用成功后获取。 */
  AsyncRequestIds: number[];
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface DescribeProxySessionKillTasksResponse {
  /** kill 任务的详情。 */
  Tasks: TaskInfo[];
  /** 任务总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisTopBigKeysRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 查询日期，如2021-05-27，最早可为前30天的日期。 */
  Date: string;
  /** 服务产品类型，支持值包括 "redis" - 云数据库 Redis。 */
  Product: string;
  /** 排序字段，取值包括Capacity - 内存，ItemCount - 元素数量，默认为Capacity。 */
  SortBy?: string;
  /** key类型筛选条件，默认为不进行筛选，取值包括string, list, set, hash, sortedset, stream。 */
  KeyType?: string;
  /** 查询数目，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeRedisTopBigKeysResponse {
  /** top key列表。 */
  TopKeys: RedisKeySpaceData[];
  /** 采集时间戳（秒）。 */
  Timestamp: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisTopKeyPrefixListRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 查询日期，如2021-05-27，最早可为前30天的日期。 */
  Date: string;
  /** 服务产品类型，支持值包括 "redis" - 云数据库 Redis。 */
  Product: string;
  /** 查询数目，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeRedisTopKeyPrefixListResponse {
  /** top key前缀列表。 */
  Items: RedisPreKeySpaceData[];
  /** 采集时间戳（秒）。 */
  Timestamp: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityAuditLogDownloadUrlsRequest {
  /** 安全审计组Id。 */
  SecAuditGroupId: string;
  /** 异步任务Id。 */
  AsyncRequestId: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL。 */
  Product: string;
}

declare interface DescribeSecurityAuditLogDownloadUrlsResponse {
  /** 导出结果的COS链接列表。当结果集很大时，可能会切分为多个url下载。 */
  Urls: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityAuditLogExportTasksRequest {
  /** 安全审计组Id。 */
  SecAuditGroupId: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL。 */
  Product: string;
  /** 日志导出任务Id列表。 */
  AsyncRequestIds?: number[];
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 返回数量，默认20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeSecurityAuditLogExportTasksResponse {
  /** 安全审计日志导出任务列表。 */
  Tasks: SecLogExportTaskInfo[];
  /** 安全审计日志导出任务总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowLogTimeSeriesStatsRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 开始时间，如“2019-09-10 12:13:14”。 */
  StartTime: string;
  /** 结束时间，如“2019-09-10 12:13:14”，结束时间与开始时间的间隔最大可为7天。 */
  EndTime: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeSlowLogTimeSeriesStatsResponse {
  /** 柱间单位时间间隔，单位为秒。 */
  Period: number;
  /** 单位时间间隔内慢日志数量统计。 */
  TimeSeries: TimeSlice[];
  /** 单位时间间隔内的实例 cpu 利用率监控数据。 */
  SeriesData: MonitorMetricSeriesData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowLogTopSqlsRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 开始时间，如“2019-09-10 12:13:14”。 */
  StartTime: string;
  /** 截止时间，如“2019-09-11 10:13:14”，截止时间与开始时间的间隔小于7天。 */
  EndTime: string;
  /** 排序键，目前支持 QueryTime,ExecTimes,RowsSent,LockTime以及RowsExamined 等排序键，默认为QueryTime。 */
  SortBy?: string;
  /** 排序方式，支持ASC（升序）以及DESC（降序），默认为DESC。 */
  OrderBy?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 数据库名称数组。 */
  SchemaList?: SchemaItem[];
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeSlowLogTopSqlsResponse {
  /** 符合条件的记录总数。 */
  TotalCount?: number;
  /** 慢日志 top sql 列表 */
  Rows?: SlowLogTopSqlItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowLogUserHostStatsRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 查询范围的开始时间，时间格式如：2019-09-10 12:13:14。 */
  StartTime: string;
  /** 查询范围的结束时间，时间格式如：2019-09-10 12:13:14。 */
  EndTime: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
  /** SOL模板的MD5值 */
  Md5?: string;
}

declare interface DescribeSlowLogUserHostStatsResponse {
  /** 来源地址数目。 */
  TotalCount: number;
  /** 各来源地址的慢日志占比详情列表。 */
  Items: SlowLogHost[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSqlFiltersRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 任务ID列表，用于筛选任务列表。 */
  FilterIds?: number[];
  /** 任务状态列表，用于筛选任务列表，取值包括RUNNING - 运行中, FINISHED - 已完成, TERMINATED - 已终止。 */
  Statuses?: string[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeSqlFiltersResponse {
  /** 限流任务总数目。 */
  TotalCount: number;
  /** 限流任务列表。 */
  Items: SQLFilter[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSqlTemplateRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 数据库名。 */
  Schema: string;
  /** SQL语句。 */
  SqlText: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeSqlTemplateResponse {
  /** 数据库名。 */
  Schema: string;
  /** SQL语句。 */
  SqlText: string;
  /** SQL类型。 */
  SqlType: string;
  /** SQL模版内容。 */
  SqlTemplate: string;
  /** SQL模版ID。 */
  SqlId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopSpaceSchemaTimeSeriesRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 返回的Top库数量，最大值为100，默认为20。 */
  Limit?: number;
  /** 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。 */
  SortBy?: string;
  /** 开始日期，如“2021-01-01”，最早为当日的前第29天，默认为截止日期的前第6天。 */
  StartDate?: string;
  /** 截止日期，如“2021-01-01”，最早为当日的前第29天，默认为当日。 */
  EndDate?: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeTopSpaceSchemaTimeSeriesResponse {
  /** 返回的Top库空间统计信息的时序数据列表。 */
  TopSpaceSchemaTimeSeries: SchemaSpaceTimeSeries[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopSpaceSchemasRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 返回的Top库数量，最大值为100，默认为20。 */
  Limit?: number;
  /** 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。 */
  SortBy?: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeTopSpaceSchemasResponse {
  /** 返回的Top库空间统计信息列表。 */
  TopSpaceSchemas: SchemaSpaceData[];
  /** 采集库空间数据的时间戳（秒）。 */
  Timestamp: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopSpaceTableTimeSeriesRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 返回的Top表数量，最大值为100，默认为20。 */
  Limit?: number;
  /** 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。 */
  SortBy?: string;
  /** 开始日期，如“2021-01-01”，最早为当日的前第29天，默认为截止日期的前第6天。 */
  StartDate?: string;
  /** 截止日期，如“2021-01-01”，最早为当日的前第29天，默认为当日。 */
  EndDate?: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeTopSpaceTableTimeSeriesResponse {
  /** 返回的Top表空间统计信息的时序数据列表。 */
  TopSpaceTableTimeSeries: TableSpaceTimeSeries[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopSpaceTablesRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 返回的Top表数量，最大值为100，默认为20。 */
  Limit?: number;
  /** 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。 */
  SortBy?: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeTopSpaceTablesResponse {
  /** 返回的Top表空间统计信息列表。 */
  TopSpaceTables: TableSpaceData[];
  /** 采集表空间数据的时间戳（秒）。 */
  Timestamp: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserSqlAdviceRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** SQL语句。 */
  SqlText: string;
  /** 库名。 */
  Schema?: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL；"dbbrain-mysql" - 自建 MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeUserSqlAdviceResponse {
  /** SQL优化建议，可解析为JSON数组，无需优化时输出为空。 */
  Advices: string;
  /** SQL优化建议备注，可解析为String数组，无需优化时输出为空。 */
  Comments: string;
  /** SQL语句。 */
  SqlText: string;
  /** 库名。 */
  Schema: string;
  /** 相关表的DDL信息，可解析为JSON数组。 */
  Tables: string;
  /** SQL执行计划，可解析为JSON，无需优化时输出为空。 */
  SqlPlan: string;
  /** SQL优化后的成本节约详情，可解析为JSON，无需优化时输出为空。 */
  Cost: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillMySqlThreadsRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** kill会话任务的阶段，取值包括："Prepare"-准备阶段，"Commit"-提交阶段。 */
  Stage: string;
  /** 需要kill的sql会话ID列表，此参数用于Prepare阶段。 */
  Threads?: number[];
  /** 执行ID，此参数用于Commit阶段。 */
  SqlExecId?: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface KillMySqlThreadsResponse {
  /** kill完成的sql会话ID列表。 */
  Threads: number[];
  /** 执行ID， Prepare阶段的任务输出，用于Commit阶段中指定执行kill操作的会话ID。 */
  SqlExecId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDiagDBInstanceConfRequest {
  /** 实例配置，包括巡检、概览开关等。 */
  InstanceConfs: InstanceConfs;
  /** 生效实例地域，取值为"All"，代表全地域。 */
  Regions: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL。 */
  Product: string;
  /** 指定更改巡检状态的实例ID。 */
  InstanceIds?: string[];
}

declare interface ModifyDiagDBInstanceConfResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySqlFiltersRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 通过VerifyUserAccount获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。 */
  SessionToken: string;
  /** SQL限流任务ID列表。 */
  FilterIds: number[];
  /** 限流任务状态，取值支持TERMINATED - 终止。 */
  Status: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface ModifySqlFiltersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyUserAccountRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 数据库账号名。 */
  User: string;
  /** 数据库账号密码。 */
  Password: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface VerifyUserAccountResponse {
  /** 会话token，有效期为5分钟。 */
  SessionToken: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20191016 {
  type VersionHeader = { headers: { 'X-TC-Version': '2019-10-16' } }

  /** 联系人contact描述。 */
  interface ContactItem {
    /** 联系人id。 */
    Id: number;
    /** 联系人姓名。 */
    Name: string;
    /** 联系人绑定的邮箱。 */
    Mail: string;
  }

  /** 实例诊断历史事件 */
  interface DiagHistoryEventItem {
    /** 诊断类型。 */
    DiagType: string;
    /** 结束时间。 */
    EndTime: string;
    /** 开始时间。 */
    StartTime: string;
    /** 事件 ID 。 */
    EventId: number;
    /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
    Severity: number;
    /** 概要。 */
    Outline: string;
    /** 诊断项。 */
    DiagItem: string;
    /** 实例 ID 。 */
    InstanceId: string | null;
    /** 保留字段 */
    Metric: string | null;
    /** 地域 */
    Region: string | null;
  }

  /** 异常事件信息。 */
  interface EventInfo {
    /** 事件 ID 。 */
    EventId: number;
    /** 诊断类型。 */
    DiagType: string;
    /** 开始时间。 */
    StartTime: string;
    /** 结束时间。 */
    EndTime: string;
    /** 概要。 */
    Outline: string;
    /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
    Severity: number;
    /** 扣分。 */
    ScoreLost: number;
    /** 保留字段。 */
    Metric: string;
    /** 告警数目。 */
    Count: number;
  }

  /** 描述组信息。 */
  interface GroupItem {
    /** 组id。 */
    Id: number;
    /** 组名称。 */
    Name: string;
    /** 组成员数量。 */
    MemberCount: number;
  }

  /** 健康报告任务详情。 */
  interface HealthReportTask {
    /** 异步任务请求 ID。 */
    AsyncRequestId: number;
    /** 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。 */
    Source: string;
    /** 任务完成进度，单位%。 */
    Progress: number;
    /** 任务创建时间。 */
    CreateTime: string;
    /** 任务开始执行时间。 */
    StartTime: string;
    /** 任务完成执行时间。 */
    EndTime: string;
    /** 任务所属实例的基础信息。 */
    InstanceInfo: InstanceBasicInfo;
    /** 健康报告中的健康信息。 */
    HealthStatus: HealthStatus;
  }

  /** 获取健康得分返回的详情。 */
  interface HealthScoreInfo {
    /** 异常详情。 */
    IssueTypes: IssueTypeInfo[];
    /** 异常事件总数。 */
    EventsTotalCount: number;
    /** 健康得分。 */
    HealthScore: number;
    /** 健康等级, 如："HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"。 */
    HealthLevel: string;
  }

  /** 实例健康详情。 */
  interface HealthStatus {
    /** 健康分数，满分100。 */
    HealthScore: number;
    /** 健康等级，取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK"- 危险；"HIGH_RISK" - 高危。 */
    HealthLevel: string;
    /** 总扣分分数。 */
    ScoreLost: number;
    /** 扣分详情。 */
    ScoreDetails: ScoreDetail[] | null;
  }

  /** 实例基础信息。 */
  interface InstanceBasicInfo {
    /** 实例ID。 */
    InstanceId: string;
    /** 实例名称。 */
    InstanceName: string;
    /** 实例内网IP。 */
    Vip: string;
    /** 实例内网Port。 */
    Vport: number;
    /** 实例产品。 */
    Product: string;
    /** 实例引擎版本。 */
    EngineVersion: string;
  }

  /** 实例配置。 */
  interface InstanceConfs {
    /** 数据库巡检开关, Yes/No。 */
    DailyInspection?: string;
    /** 实例概览开关，Yes/No。 */
    OverviewDisplay?: string;
  }

  /** 查询实例列表，返回实例的相关信息的对象。 */
  interface InstanceInfo {
    /** 实例ID。 */
    InstanceId: string;
    /** 实例名称。 */
    InstanceName: string;
    /** 实例所属地域。 */
    Region: string;
    /** 健康得分。 */
    HealthScore: number;
    /** 所属产品。 */
    Product: string;
    /** 异常事件数量。 */
    EventCount: number;
    /** 实例类型：1:MASTER；2:DR，3：RO，4:SDR。 */
    InstanceType: number;
    /** 核心数。 */
    Cpu: number;
    /** 内存，单位MB。 */
    Memory: number;
    /** 硬盘存储，单位GB。 */
    Volume: number;
    /** 数据库版本。 */
    EngineVersion: string;
    /** 内网地址。 */
    Vip: string;
    /** 内网端口。 */
    Vport: number;
    /** 接入来源。 */
    Source: string;
    /** 分组ID。 */
    GroupId: string;
    /** 分组组名。 */
    GroupName: string;
    /** 实例状态：0：发货中；1：运行正常；4：销毁中；5：隔离中。 */
    Status: number;
    /** 子网统一ID。 */
    UniqSubnetId: string;
    /** cdb类型。 */
    DeployMode: string;
    /** cdb实例初始化标志：0：未初始化；1：已初始化。 */
    InitFlag: number;
    /** 任务状态。 */
    TaskStatus: number;
    /** 私有网络统一ID。 */
    UniqVpcId: string;
    /** 实例巡检/概览的状态。 */
    InstanceConf: InstanceConfs;
    /** 资源到期时间。 */
    DeadlineTime: string;
    /** 是否是DBbrain支持的实例。 */
    IsSupported: boolean;
    /** 实例安全审计日志开启状态：ON： 安全审计开启；OFF： 未开启安全审计。 */
    SecAuditStatus: string;
    /** 实例审计日志开启状态，ALL_AUDIT： 开启全审计；RULE_AUDIT： 开启规则审计；UNBOUND： 未开启审计。 */
    AuditPolicyStatus: string;
    /** 实例审计日志运行状态：normal： 运行中； paused： 欠费暂停。 */
    AuditRunningStatus: string;
  }

  /** 指标信息。 */
  interface IssueTypeInfo {
    /** 指标分类：AVAILABILITY：可用性，MAINTAINABILITY：可维护性，PERFORMANCE，性能，RELIABILITY可靠性。 */
    IssueType: string;
    /** 异常事件。 */
    Events: EventInfo[];
    /** 异常事件总数。 */
    TotalCount: number;
  }

  /** 邮件发送配置 */
  interface MailConfiguration {
    /** 是否开启邮件发送: 0, 否; 1, 是。 */
    SendMail: number;
    /** 地域配置, 如["ap-guangzhou", "ap-shanghai"]。巡检的邮件发送模版，配置需要发送巡检邮件的地域；订阅的邮件发送模版，配置当前订阅实例的所属地域。 */
    Region: string[];
    /** 发送指定的健康等级的报告, 如["HEALTH", "SUB_HEALTH", "RISK", "HIGH_RISK"]。 */
    HealthStatus: string[];
    /** 联系人id, 联系人/联系组不能都为空。 */
    ContactPerson?: number[];
    /** 联系组id, 联系人/联系组不能都为空。 */
    ContactGroup?: number[];
  }

  /** 监控数据（浮点型） */
  interface MonitorFloatMetric {
    /** 指标名称。 */
    Metric: string;
    /** 指标单位。 */
    Unit: string;
    /** 指标值。 */
    Values: number[] | null;
  }

  /** 单位时间间隔内的监控指标数据（浮点型） */
  interface MonitorFloatMetricSeriesData {
    /** 监控指标。 */
    Series: MonitorFloatMetric[];
    /** 监控指标对应的时间戳。 */
    Timestamp: number[];
  }

  /** 监控数据 */
  interface MonitorMetric {
    /** 指标名称。 */
    Metric: string;
    /** 指标单位。 */
    Unit: string;
    /** 指标值。 */
    Values: number[] | null;
  }

  /** 单位时间间隔内的监控指标数据 */
  interface MonitorMetricSeriesData {
    /** 监控指标。 */
    Series: MonitorMetric[];
    /** 监控指标对应的时间戳。 */
    Timestamp: number[];
  }

  /** 用户配置的信息 */
  interface ProfileInfo {
    /** 语言, 如"zh"。 */
    Language: string;
    /** 邮件模板的内容。 */
    MailConfiguration: MailConfiguration;
  }

  /** SchemaItem数组 */
  interface SchemaItem {
    /** 数据库名称 */
    Schema: string;
  }

  /** 库空间统计数据。 */
  interface SchemaSpaceData {
    /** 库名。 */
    TableSchema: string;
    /** 数据空间（MB）。 */
    DataLength: number;
    /** 索引空间（MB）。 */
    IndexLength: number;
    /** 碎片空间（MB）。 */
    DataFree: number;
    /** 总使用空间（MB）。 */
    TotalLength: number;
    /** 碎片率（%）。 */
    FragRatio: number;
    /** 行数。 */
    TableRows: number;
    /** 库中所有表对应的独立物理文件大小加和（MB）。 */
    PhysicalFileSize: number | null;
  }

  /** 库空间时序数据 */
  interface SchemaSpaceTimeSeries {
    /** 库名 */
    TableSchema: string;
    /** 单位时间间隔内的空间指标数据。 */
    SeriesData: MonitorMetricSeriesData;
  }

  /** 扣分详情。 */
  interface ScoreDetail {
    /** 扣分项分类，取值包括：可用性、可维护性、性能及可靠性。 */
    IssueType: string;
    /** 扣分总分。 */
    ScoreLost: number;
    /** 扣分总分上限。 */
    ScoreLostMax: number;
    /** 扣分项列表。 */
    Items: ScoreItem[] | null;
  }

  /** 诊断扣分项。 */
  interface ScoreItem {
    /** 异常诊断项名称。 */
    DiagItem: string;
    /** 诊断项分类，取值包括：可用性、可维护性、性能及可靠性。 */
    IssueType: string;
    /** 健康等级，取值包括：信息、提示、告警、严重、致命。 */
    TopSeverity: string;
    /** 该异常诊断项出现次数。 */
    Count: number;
    /** 扣分分数。 */
    ScoreLost: number;
  }

  /** 安全审计日志导出任务信息 */
  interface SecLogExportTaskInfo {
    /** 异步任务Id。 */
    AsyncRequestId: number;
    /** 任务开始时间。 */
    StartTime: string | null;
    /** 任务结束时间。 */
    EndTime: string | null;
    /** 任务创建时间。 */
    CreateTime: string;
    /** 任务状态。 */
    Status: string;
    /** 任务执行进度。 */
    Progress: number;
    /** 导出日志开始时间。 */
    LogStartTime: string | null;
    /** 导出日志结束时间。 */
    LogEndTime: string | null;
    /** 日志文件总大小，单位KB。 */
    TotalSize: number | null;
    /** 风险等级列表。0 无风险；1 低风险；2 中风险；3 高风险。 */
    DangerLevels: number[] | null;
  }

  /** 慢日志来源地址详情。 */
  interface SlowLogHost {
    /** 来源地址。 */
    UserHost: string;
    /** 该来源地址的慢日志数目占总数目的比例，单位%。 */
    Ratio: number;
    /** 该来源地址的慢日志数目。 */
    Count: number;
  }

  /** 慢日志TopSql */
  interface SlowLogTopSqlItem {
    /** sql总锁等待时间 */
    LockTime: number;
    /** 最大锁等待时间 */
    LockTimeMax: number;
    /** 最小锁等待时间 */
    LockTimeMin: number;
    /** 总扫描行数 */
    RowsExamined: number;
    /** 最大扫描行数 */
    RowsExaminedMax: number;
    /** 最小扫描行数 */
    RowsExaminedMin: number;
    /** 总耗时 */
    QueryTime: number;
    /** 最大执行时间 */
    QueryTimeMax: number;
    /** 最小执行时间 */
    QueryTimeMin: number;
    /** 总返回行数 */
    RowsSent: number;
    /** 最大返回行数 */
    RowsSentMax: number;
    /** 最小返回行数 */
    RowsSentMin: number;
    /** 执行次数 */
    ExecTimes: number;
    /** sql模板 */
    SqlTemplate: string;
    /** 带参数SQL（随机） */
    SqlText: string;
    /** 数据库名 */
    Schema: string;
    /** 总耗时占比 */
    QueryTimeRatio: number;
    /** sql总锁等待时间占比 */
    LockTimeRatio: number;
    /** 总扫描行数占比 */
    RowsExaminedRatio: number;
    /** 总返回行数占比 */
    RowsSentRatio: number;
    /** 平均执行时间 */
    QueryTimeAvg: number;
    /** 平均返回行数 */
    RowsSentAvg: number;
    /** 平均锁等待时间 */
    LockTimeAvg: number;
    /** 平均扫描行数 */
    RowsExaminedAvg: number;
  }

  /** 库表空间统计数据。 */
  interface TableSpaceData {
    /** 表名。 */
    TableName: string;
    /** 库名。 */
    TableSchema: string;
    /** 库表的存储引擎。 */
    Engine: string;
    /** 数据空间（MB）。 */
    DataLength: number;
    /** 索引空间（MB）。 */
    IndexLength: number;
    /** 碎片空间（MB）。 */
    DataFree: number;
    /** 总使用空间（MB）。 */
    TotalLength: number;
    /** 碎片率（%）。 */
    FragRatio: number;
    /** 行数。 */
    TableRows: number;
    /** 表对应的独立物理文件大小（MB）。 */
    PhysicalFileSize: number;
  }

  /** 库表空间时序数据 */
  interface TableSpaceTimeSeries {
    /** 表名。 */
    TableName: string;
    /** 库名。 */
    TableSchema: string;
    /** 库表的存储引擎。 */
    Engine: string;
    /** 单位时间间隔内的空间指标数据。 */
    SeriesData: MonitorFloatMetricSeriesData;
  }

  /** 单位时间间隔内的慢日志统计 */
  interface TimeSlice {
    /** 总数 */
    Count: number;
    /** 统计开始时间 */
    Timestamp: number;
  }

  /** 用户配置的相关信息，包括邮件配置。 */
  interface UserProfile {
    /** 配置的id。 */
    ProfileId: string | null;
    /** 配置类型。 */
    ProfileType: string | null;
    /** 配置级别，"User"或"Instance"。 */
    ProfileLevel: string | null;
    /** 配置名称。 */
    ProfileName: string | null;
    /** 配置详情。 */
    ProfileInfo: ProfileInfo;
  }

  interface AddUserContactRequest {
    /** 联系人姓名，大小写字母+数字+下划线，最小 2 位最大 60 位的长度， 不能以"_"开头，且联系人名保持唯一。 */
    Name: string;
    /** 邮箱地址，大小写字母、数字及下划线组成， 不能以"_"开头。 */
    ContactInfo: string;
    /** 服务产品类型，固定值："mysql"。 */
    Product: string;
  }

  interface AddUserContactResponse {
    /** 添加成功的联系人id。 */
    Id: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDBDiagReportTaskRequest {
    /** 实例ID。 */
    InstanceId: string;
    /** 开始时间，如“2020-11-08T14:00:00+08:00”。 */
    StartTime: string;
    /** 结束时间，如“2020-11-09T14:00:00+08:00”。 */
    EndTime: string;
    /** 是否发送邮件: 0 - 否，1 - 是。 */
    SendMailFlag: number;
    /** 接收邮件的联系人ID数组。 */
    ContactPerson?: number[];
    /** 接收邮件的联系组ID数组。 */
    ContactGroup?: number[];
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认值为"mysql"。 */
    Product?: string;
  }

  interface CreateDBDiagReportTaskResponse {
    /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
    AsyncRequestId?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDBDiagReportUrlRequest {
    /** 实例ID。 */
    InstanceId: string;
    /** 健康报告相应的任务ID，可通过DescribeDBDiagReportTasks查询。 */
    AsyncRequestId: number;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface CreateDBDiagReportUrlResponse {
    /** 健康报告浏览地址。 */
    ReportUrl: string;
    /** 健康报告浏览地址到期时间戳（秒）。 */
    ExpireTime: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateMailProfileRequest {
    /** 邮件配置内容。 */
    ProfileInfo: ProfileInfo;
    /** 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。 */
    ProfileLevel: string;
    /** 配置名称，需要保持唯一性，数据库巡检邮件配置名称自拟；定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。 */
    ProfileName: string;
    /** 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。 */
    ProfileType: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL。 */
    Product: string;
    /** 配置绑定的实例ID，当配置级别为"Instance"时需要传入且只能为一个实例；当配置级别为“User”时，此参数不填。 */
    BindInstanceIds?: string[];
  }

  interface CreateMailProfileResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateSchedulerMailProfileRequest {
    /** 取值范围1-7，分别代表周一至周日。 */
    WeekConfiguration: number[];
    /** 邮件配置内容。 */
    ProfileInfo: ProfileInfo;
    /** 配置名称，需要保持唯一性，定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"schduler_cdb-test"。 */
    ProfileName: string;
    /** 配置订阅的实例ID。 */
    BindInstanceId: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
    Product: string;
  }

  interface CreateSchedulerMailProfileResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateSecurityAuditLogExportTaskRequest {
    /** 安全审计组Id。 */
    SecAuditGroupId: string;
    /** 导出日志开始时间，例如2020-12-28 00:00:00。 */
    StartTime: string;
    /** 导出日志结束时间，例如2020-12-28 01:00:00。 */
    EndTime: string;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL。 */
    Product: string;
    /** 日志风险等级列表，支持值包括：0 无风险；1 低风险；2 中风险；3 高风险。 */
    DangerLevels?: number[];
  }

  interface CreateSecurityAuditLogExportTaskResponse {
    /** 日志导出任务Id。 */
    AsyncRequestId: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteSecurityAuditLogExportTasksRequest {
    /** 安全审计组Id。 */
    SecAuditGroupId: string;
    /** 日志导出任务Id列表，接口会忽略不存在或已删除的任务Id。 */
    AsyncRequestIds: number[];
    /** 服务产品类型，支持值： "mysql" - 云数据库 MySQL。 */
    Product: string;
  }

  interface DeleteSecurityAuditLogExportTasksResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAllUserContactRequest {
    /** 服务产品类型，固定值：mysql。 */
    Product: string;
    /** 联系人名数组，支持模糊搜索。 */
    Names?: string[];
  }

  interface DescribeAllUserContactResponse {
    /** 联系人的总数量。 */
    TotalCount: number;
    /** 联系人的信息。 */
    Contacts: ContactItem[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAllUserGroupRequest {
    /** 服务产品类型，固定值：mysql。 */
    Product: string;
    /** 联系组名称数组，支持模糊搜索。 */
    Names?: string[];
  }

  interface DescribeAllUserGroupResponse {
    /** 组总数。 */
    TotalCount: number;
    /** 组信息。 */
    Groups: GroupItem[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDBDiagEventRequest {
    /** 实例 ID 。 */
    InstanceId: string;
    /** 事件 ID 。通过“获取实例诊断历史DescribeDBDiagHistory”获取。 */
    EventId?: number;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeDBDiagEventResponse {
    /** 诊断项。 */
    DiagItem: string;
    /** 诊断类型。 */
    DiagType: string;
    /** 事件 ID 。 */
    EventId: number;
    /** 事件详情。 */
    Explanation: string;
    /** 概要。 */
    Outline: string;
    /** 诊断出的问题。 */
    Problem: string;
    /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
    Severity: number;
    /** 开始时间 */
    StartTime: string;
    /** 建议。 */
    Suggestions: string;
    /** 保留字段。 */
    Metric: string | null;
    /** 结束时间。 */
    EndTime: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDBDiagHistoryRequest {
    /** 实例 ID 。 */
    InstanceId: string;
    /** 开始时间，如“2019-09-10 12:13:14”。 */
    StartTime: string;
    /** 结束时间，如“2019-09-11 12:13:14”，结束时间与开始时间的间隔最大可为2天。 */
    EndTime: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeDBDiagHistoryResponse {
    /** 事件描述。 */
    Events?: DiagHistoryEventItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDBDiagReportTasksRequest {
    /** 第一个任务的开始时间，用于范围查询，时间格式如：2019-09-10 12:13:14。 */
    StartTime?: string;
    /** 最后一个任务的开始时间，用于范围查询，时间格式如：2019-09-10 12:13:14。 */
    EndTime?: string;
    /** 实例ID数组，用于筛选指定实例的任务列表。 */
    InstanceIds?: string[];
    /** 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。 */
    Sources?: string[];
    /** 报告的健康等级，支持的取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK" - 危险；"HIGH_RISK" - 高危。 */
    HealthLevels?: string;
    /** 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。 */
    TaskStatuses?: string;
    /** 偏移量，默认0。 */
    Offset?: number;
    /** 返回数量，默认20。 */
    Limit?: number;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeDBDiagReportTasksResponse {
    /** 任务总数目。 */
    TotalCount: number;
    /** 任务列表。 */
    Tasks: HealthReportTask[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDBSpaceStatusRequest {
    /** 实例 ID 。 */
    InstanceId: string;
    /** 时间段天数，截止日期为当日，默认为7天。 */
    RangeDays?: number;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeDBSpaceStatusResponse {
    /** 磁盘增长量(MB)。 */
    Growth?: number;
    /** 磁盘剩余(MB)。 */
    Remain?: number;
    /** 磁盘总量(MB)。 */
    Total?: number;
    /** 预计可用天数。 */
    AvailableDays?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDiagDBInstancesRequest {
    /** 是否是DBbrain支持的实例，固定传 true。 */
    IsSupported: boolean;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
    Product: string;
    /** 分页参数，偏移量。 */
    Offset: number;
    /** 分页参数，分页值。 */
    Limit: number;
    /** 根据实例名称条件查询。 */
    InstanceNames?: string[];
    /** 根据实例ID条件查询。 */
    InstanceIds?: string[];
    /** 根据地域条件查询。 */
    Regions?: string[];
  }

  interface DescribeDiagDBInstancesResponse {
    /** 实例总数。 */
    TotalCount: number;
    /** 全实例巡检状态：0：开启全实例巡检；1：未开启全实例巡检。 */
    DbScanStatus: number;
    /** 实例相关信息。 */
    Items: InstanceInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeHealthScoreRequest {
    /** 需要获取健康得分的实例ID。 */
    InstanceId: string;
    /** 获取健康得分的时间。 */
    Time: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
    Product: string;
  }

  interface DescribeHealthScoreResponse {
    /** 健康得分以及异常扣分项。 */
    Data: HealthScoreInfo;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMailProfileRequest {
    /** 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。 */
    ProfileType: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
    Product: string;
    /** 分页偏移量。 */
    Offset: number;
    /** 分页单位，最大支持50。 */
    Limit: number;
    /** 根据邮件配置名称查询，定期发送的邮件配置名称遵循："scheduler_"+{instanceId}的规则。 */
    ProfileName?: string;
  }

  interface DescribeMailProfileResponse {
    /** 邮件配置详情。 */
    ProfileList: UserProfile[] | null;
    /** 邮件模版总数。 */
    TotalCount: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSecurityAuditLogDownloadUrlsRequest {
    /** 安全审计组Id。 */
    SecAuditGroupId: string;
    /** 异步任务Id。 */
    AsyncRequestId: number;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL。 */
    Product: string;
  }

  interface DescribeSecurityAuditLogDownloadUrlsResponse {
    /** 导出结果的COS链接列表。当结果集很大时，可能会切分为多个url下载。 */
    Urls: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSecurityAuditLogExportTasksRequest {
    /** 安全审计组Id。 */
    SecAuditGroupId: string;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL。 */
    Product: string;
    /** 日志导出任务Id列表。 */
    AsyncRequestIds?: number[];
    /** 偏移量，默认0。 */
    Offset?: number;
    /** 返回数量，默认20。 */
    Limit?: number;
  }

  interface DescribeSecurityAuditLogExportTasksResponse {
    /** 安全审计日志导出任务列表。 */
    Tasks: SecLogExportTaskInfo[];
    /** 安全审计日志导出任务总数。 */
    TotalCount: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSlowLogTimeSeriesStatsRequest {
    /** 实例 ID 。 */
    InstanceId: string;
    /** 开始时间，如“2019-09-10 12:13:14”。 */
    StartTime: string;
    /** 结束时间，如“2019-09-10 12:13:14”，结束时间与开始时间的间隔最大可为7天。 */
    EndTime: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeSlowLogTimeSeriesStatsResponse {
    /** 柱间单位时间间隔，单位为秒。 */
    Period?: number;
    /** 单位时间间隔内慢日志数量统计。 */
    TimeSeries?: TimeSlice[];
    /** 单位时间间隔内的实例 cpu 利用率监控数据。 */
    SeriesData?: MonitorMetricSeriesData;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSlowLogTopSqlsRequest {
    /** 实例 ID 。 */
    InstanceId: string;
    /** 开始时间，如“2019-09-10 12:13:14”。 */
    StartTime: string;
    /** 截止时间，如“2019-09-10 12:13:14”，截止时间与开始时间的间隔最大可为7天。 */
    EndTime: string;
    /** 排序键，目前支持 QueryTime,ExecTimes,RowsSent,LockTime以及RowsExamined 等排序键。 */
    SortBy?: string;
    /** 排序方式，支持ASC（升序）以及DESC（降序）。 */
    OrderBy?: string;
    /** 返回数量，默认为20，最大值为100。 */
    Limit?: number;
    /** 偏移量，默认为0。 */
    Offset?: number;
    /** 数据库名称数组。 */
    SchemaList?: SchemaItem[];
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeSlowLogTopSqlsResponse {
    /** 符合条件的记录总数。 */
    TotalCount?: number;
    /** 慢日志 top sql 列表 */
    Rows?: SlowLogTopSqlItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSlowLogUserHostStatsRequest {
    /** 实例ID。 */
    InstanceId: string;
    /** 查询范围的开始时间，时间格式如：2019-09-10 12:13:14。 */
    StartTime: string;
    /** 查询范围的结束时间，时间格式如：2019-09-10 12:13:14。 */
    EndTime: string;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeSlowLogUserHostStatsResponse {
    /** 来源地址数目。 */
    TotalCount: number;
    /** 各来源地址的慢日志占比详情列表。 */
    Items: SlowLogHost[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTopSpaceSchemaTimeSeriesRequest {
    /** 实例ID。 */
    InstanceId: string;
    /** 返回的Top库数量，最大值为100，默认为20。 */
    Limit?: number;
    /** 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。 */
    SortBy?: string;
    /** 开始日期，如“2021-01-01”，最早为当日的前第29天，默认为截止日期的前第6天。 */
    StartDate?: string;
    /** 截止日期，如“2021-01-01”，最早为当日的前第29天，默认为当日。 */
    EndDate?: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeTopSpaceSchemaTimeSeriesResponse {
    /** 返回的Top库空间统计信息的时序数据列表。 */
    TopSpaceSchemaTimeSeries: SchemaSpaceTimeSeries[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTopSpaceSchemasRequest {
    /** 实例 ID 。 */
    InstanceId: string;
    /** 返回的Top库数量，最大值为100，默认为20。 */
    Limit?: number;
    /** 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。 */
    SortBy?: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeTopSpaceSchemasResponse {
    /** 返回的Top库空间统计信息列表。 */
    TopSpaceSchemas: SchemaSpaceData[];
    /** 采集库空间数据的时间戳（秒）。 */
    Timestamp: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTopSpaceTableTimeSeriesRequest {
    /** 实例 ID 。 */
    InstanceId: string;
    /** 返回的Top表数量，最大值为100，默认为20。 */
    Limit?: number;
    /** 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize，默认为 PhysicalFileSize。 */
    SortBy?: string;
    /** 开始日期，如“2021-01-01”，最早为当日的前第29天，默认为截止日期的前第6天。 */
    StartDate?: string;
    /** 截止日期，如“2021-01-01”，最早为当日的前第29天，默认为当日。 */
    EndDate?: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeTopSpaceTableTimeSeriesResponse {
    /** 返回的Top表空间统计信息的时序数据列表。 */
    TopSpaceTableTimeSeries: TableSpaceTimeSeries[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTopSpaceTablesRequest {
    /** 实例 ID 。 */
    InstanceId: string;
    /** 返回的Top表数量，最大值为100，默认为20。 */
    Limit?: number;
    /** 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。 */
    SortBy?: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeTopSpaceTablesResponse {
    /** 返回的Top表空间统计信息列表。 */
    TopSpaceTables: TableSpaceData[];
    /** 采集表空间数据的时间戳（秒）。 */
    Timestamp: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeUserSqlAdviceRequest {
    /** 实例ID。 */
    InstanceId: string;
    /** SQL语句。 */
    SqlText: string;
    /** 库名。 */
    Schema?: string;
  }

  interface DescribeUserSqlAdviceResponse {
    /** SQL优化建议，可解析为JSON数组。 */
    Advices: string;
    /** SQL优化建议备注，可解析为String数组。 */
    Comments: string;
    /** SQL语句。 */
    SqlText: string;
    /** 库名。 */
    Schema: string;
    /** 相关表的DDL信息，可解析为JSON数组。 */
    Tables: string;
    /** SQL执行计划，可解析为JSON。 */
    SqlPlan: string;
    /** SQL优化后的成本节约详情，可解析为JSON。 */
    Cost: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDiagDBInstanceConfRequest {
    /** 巡检开关。 */
    InstanceConfs: InstanceConfs;
    /** 生效实例地域，取值为"All"，代表全地域。 */
    Regions: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL。 */
    Product: string;
    /** 指定更改巡检状态的实例ID。 */
    InstanceIds?: string[];
  }

  interface ModifyDiagDBInstanceConfResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Dbbrain 数据库智能管家 DBbrain} */
declare interface Dbbrain {
  (): Versions;
  /** 添加联系人信息 {@link AddUserContactRequest} {@link AddUserContactResponse} */
  AddUserContact(data: AddUserContactRequest, config?: AxiosRequestConfig): AxiosPromise<AddUserContactResponse>;
  /** 终止中断会话任务 {@link CancelKillTaskRequest} {@link CancelKillTaskResponse} */
  CancelKillTask(data: CancelKillTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CancelKillTaskResponse>;
  /** 创建健康报告生成任务 {@link CreateDBDiagReportTaskRequest} {@link CreateDBDiagReportTaskResponse} */
  CreateDBDiagReportTask(data: CreateDBDiagReportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBDiagReportTaskResponse>;
  /** 创建健康报告浏览地址 {@link CreateDBDiagReportUrlRequest} {@link CreateDBDiagReportUrlResponse} */
  CreateDBDiagReportUrl(data: CreateDBDiagReportUrlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBDiagReportUrlResponse>;
  /** 创建中断会话的任务 {@link CreateKillTaskRequest} {@link CreateKillTaskResponse} */
  CreateKillTask(data: CreateKillTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKillTaskResponse>;
  /** 创建邮件配置 {@link CreateMailProfileRequest} {@link CreateMailProfileResponse} */
  CreateMailProfile(data: CreateMailProfileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMailProfileResponse>;
  /** 创建中止代理节点会话的任务 {@link CreateProxySessionKillTaskRequest} {@link CreateProxySessionKillTaskResponse} */
  CreateProxySessionKillTask(data: CreateProxySessionKillTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProxySessionKillTaskResponse>;
  /** 创建定期生成的邮件发送配置 {@link CreateSchedulerMailProfileRequest} {@link CreateSchedulerMailProfileResponse} */
  CreateSchedulerMailProfile(data: CreateSchedulerMailProfileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSchedulerMailProfileResponse>;
  /** 创建安全审计日志导出任务 {@link CreateSecurityAuditLogExportTaskRequest} {@link CreateSecurityAuditLogExportTaskResponse} */
  CreateSecurityAuditLogExportTask(data: CreateSecurityAuditLogExportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityAuditLogExportTaskResponse>;
  /** 创建实例SQL限流任务 {@link CreateSqlFilterRequest} {@link CreateSqlFilterResponse} */
  CreateSqlFilter(data: CreateSqlFilterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSqlFilterResponse>;
  /** 删除健康报告生成任务 {@link DeleteDBDiagReportTasksRequest} {@link DeleteDBDiagReportTasksResponse} */
  DeleteDBDiagReportTasks(data: DeleteDBDiagReportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDBDiagReportTasksResponse>;
  /** 删除安全审计日志导出任务 {@link DeleteSecurityAuditLogExportTasksRequest} {@link DeleteSecurityAuditLogExportTasksResponse} */
  DeleteSecurityAuditLogExportTasks(data: DeleteSecurityAuditLogExportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityAuditLogExportTasksResponse>;
  /** 删除实例SQL限流任务 {@link DeleteSqlFiltersRequest} {@link DeleteSqlFiltersResponse} */
  DeleteSqlFilters(data: DeleteSqlFiltersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSqlFiltersResponse>;
  /** 获取邮件发送中联系人信息 {@link DescribeAllUserContactRequest} {@link DescribeAllUserContactResponse} */
  DescribeAllUserContact(data: DescribeAllUserContactRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllUserContactResponse>;
  /** 获取邮件发送中联系组信息 {@link DescribeAllUserGroupRequest} {@link DescribeAllUserGroupResponse} */
  DescribeAllUserGroup(data: DescribeAllUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllUserGroupResponse>;
  /** 获取诊断事件详情 {@link DescribeDBDiagEventRequest} {@link DescribeDBDiagEventResponse} */
  DescribeDBDiagEvent(data: DescribeDBDiagEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBDiagEventResponse>;
  /** 获取诊断事件列表 {@link DescribeDBDiagEventsRequest} {@link DescribeDBDiagEventsResponse} */
  DescribeDBDiagEvents(data: DescribeDBDiagEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBDiagEventsResponse>;
  /** 获取实例诊断历史 {@link DescribeDBDiagHistoryRequest} {@link DescribeDBDiagHistoryResponse} */
  DescribeDBDiagHistory(data: DescribeDBDiagHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBDiagHistoryResponse>;
  /** 查询健康报告生成任务列表 {@link DescribeDBDiagReportTasksRequest} {@link DescribeDBDiagReportTasksResponse} */
  DescribeDBDiagReportTasks(data?: DescribeDBDiagReportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBDiagReportTasksResponse>;
  /** 获取指定时间段内的实例空间使用概览 {@link DescribeDBSpaceStatusRequest} {@link DescribeDBSpaceStatusResponse} */
  DescribeDBSpaceStatus(data: DescribeDBSpaceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSpaceStatusResponse>;
  /** 获取实例信息列表 {@link DescribeDiagDBInstancesRequest} {@link DescribeDiagDBInstancesResponse} */
  DescribeDiagDBInstances(data: DescribeDiagDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiagDBInstancesResponse>;
  /** 获取健康得分 {@link DescribeHealthScoreRequest} {@link DescribeHealthScoreResponse} */
  DescribeHealthScore(data: DescribeHealthScoreRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHealthScoreResponse>;
  /** 获取邮件配置 {@link DescribeMailProfileRequest} {@link DescribeMailProfileResponse} */
  DescribeMailProfile(data: DescribeMailProfileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMailProfileResponse>;
  /** 查询实时线程列表 {@link DescribeMySqlProcessListRequest} {@link DescribeMySqlProcessListResponse} */
  DescribeMySqlProcessList(data: DescribeMySqlProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMySqlProcessListResponse>;
  /** 查询实例无主键表 {@link DescribeNoPrimaryKeyTablesRequest} {@link DescribeNoPrimaryKeyTablesResponse} */
  DescribeNoPrimaryKeyTables(data: DescribeNoPrimaryKeyTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNoPrimaryKeyTablesResponse>;
  /** 获取单个proxy实时会话统计详情 {@link DescribeProxyProcessStatisticsRequest} {@link DescribeProxyProcessStatisticsResponse} */
  DescribeProxyProcessStatistics(data: DescribeProxyProcessStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyProcessStatisticsResponse>;
  /** 查询代理节点 kill 会话任务执行状态 {@link DescribeProxySessionKillTasksRequest} {@link DescribeProxySessionKillTasksResponse} */
  DescribeProxySessionKillTasks(data: DescribeProxySessionKillTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxySessionKillTasksResponse>;
  /** 查询redis实例大key列表 {@link DescribeRedisTopBigKeysRequest} {@link DescribeRedisTopBigKeysResponse} */
  DescribeRedisTopBigKeys(data: DescribeRedisTopBigKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisTopBigKeysResponse>;
  /** 查询redis实例top key前缀列表 {@link DescribeRedisTopKeyPrefixListRequest} {@link DescribeRedisTopKeyPrefixListResponse} */
  DescribeRedisTopKeyPrefixList(data: DescribeRedisTopKeyPrefixListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisTopKeyPrefixListResponse>;
  /** 查询安全审计日志导出文件下载链接 {@link DescribeSecurityAuditLogDownloadUrlsRequest} {@link DescribeSecurityAuditLogDownloadUrlsResponse} */
  DescribeSecurityAuditLogDownloadUrls(data: DescribeSecurityAuditLogDownloadUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityAuditLogDownloadUrlsResponse>;
  /** 查询安全审计日志导出任务列表 {@link DescribeSecurityAuditLogExportTasksRequest} {@link DescribeSecurityAuditLogExportTasksResponse} */
  DescribeSecurityAuditLogExportTasks(data: DescribeSecurityAuditLogExportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityAuditLogExportTasksResponse>;
  /** 获取慢日志统计柱状图 {@link DescribeSlowLogTimeSeriesStatsRequest} {@link DescribeSlowLogTimeSeriesStatsResponse} */
  DescribeSlowLogTimeSeriesStats(data: DescribeSlowLogTimeSeriesStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogTimeSeriesStatsResponse>;
  /** 获取慢SQL模版列表 {@link DescribeSlowLogTopSqlsRequest} {@link DescribeSlowLogTopSqlsResponse} */
  DescribeSlowLogTopSqls(data: DescribeSlowLogTopSqlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogTopSqlsResponse>;
  /** 获取慢日志来源地址统计分布图 {@link DescribeSlowLogUserHostStatsRequest} {@link DescribeSlowLogUserHostStatsResponse} */
  DescribeSlowLogUserHostStats(data: DescribeSlowLogUserHostStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogUserHostStatsResponse>;
  /** 查询实例SQL限流任务列表 {@link DescribeSqlFiltersRequest} {@link DescribeSqlFiltersResponse} */
  DescribeSqlFilters(data: DescribeSqlFiltersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSqlFiltersResponse>;
  /** 查询SQL模板 {@link DescribeSqlTemplateRequest} {@link DescribeSqlTemplateResponse} */
  DescribeSqlTemplate(data: DescribeSqlTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSqlTemplateResponse>;
  /** 获取Top库在指定时间段内的每日空间统计信息 {@link DescribeTopSpaceSchemaTimeSeriesRequest} {@link DescribeTopSpaceSchemaTimeSeriesResponse} */
  DescribeTopSpaceSchemaTimeSeries(data: DescribeTopSpaceSchemaTimeSeriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopSpaceSchemaTimeSeriesResponse>;
  /** 获取Top库的空间统计信息 {@link DescribeTopSpaceSchemasRequest} {@link DescribeTopSpaceSchemasResponse} */
  DescribeTopSpaceSchemas(data: DescribeTopSpaceSchemasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopSpaceSchemasResponse>;
  /** 获取Top表在指定时间段内的每日空间统计信息 {@link DescribeTopSpaceTableTimeSeriesRequest} {@link DescribeTopSpaceTableTimeSeriesResponse} */
  DescribeTopSpaceTableTimeSeries(data: DescribeTopSpaceTableTimeSeriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopSpaceTableTimeSeriesResponse>;
  /** 获取Top表的空间统计信息 {@link DescribeTopSpaceTablesRequest} {@link DescribeTopSpaceTablesResponse} */
  DescribeTopSpaceTables(data: DescribeTopSpaceTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopSpaceTablesResponse>;
  /** 获取SQL优化建议 {@link DescribeUserSqlAdviceRequest} {@link DescribeUserSqlAdviceResponse} */
  DescribeUserSqlAdvice(data: DescribeUserSqlAdviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserSqlAdviceResponse>;
  /** 中断MySql会话线程 {@link KillMySqlThreadsRequest} {@link KillMySqlThreadsResponse} */
  KillMySqlThreads(data: KillMySqlThreadsRequest, config?: AxiosRequestConfig): AxiosPromise<KillMySqlThreadsResponse>;
  /** 修改实例巡检开关状态 {@link ModifyDiagDBInstanceConfRequest} {@link ModifyDiagDBInstanceConfResponse} */
  ModifyDiagDBInstanceConf(data: ModifyDiagDBInstanceConfRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDiagDBInstanceConfResponse>;
  /** 更改实例限流任务状态 {@link ModifySqlFiltersRequest} {@link ModifySqlFiltersResponse} */
  ModifySqlFilters(data: ModifySqlFiltersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySqlFiltersResponse>;
  /** 验证用户数据库账号权限 {@link VerifyUserAccountRequest} {@link VerifyUserAccountResponse} */
  VerifyUserAccount(data: VerifyUserAccountRequest, config?: AxiosRequestConfig): AxiosPromise<VerifyUserAccountResponse>;
  /** 添加联系人信息 {@link V20191016.AddUserContactRequest} {@link V20191016.AddUserContactResponse} */
  AddUserContact(data: V20191016.AddUserContactRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.AddUserContactResponse>;
  /** 创建健康报告生成任务 {@link V20191016.CreateDBDiagReportTaskRequest} {@link V20191016.CreateDBDiagReportTaskResponse} */
  CreateDBDiagReportTask(data: V20191016.CreateDBDiagReportTaskRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.CreateDBDiagReportTaskResponse>;
  /** 创建健康报告浏览地址 {@link V20191016.CreateDBDiagReportUrlRequest} {@link V20191016.CreateDBDiagReportUrlResponse} */
  CreateDBDiagReportUrl(data: V20191016.CreateDBDiagReportUrlRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.CreateDBDiagReportUrlResponse>;
  /** 创建邮件配置 {@link V20191016.CreateMailProfileRequest} {@link V20191016.CreateMailProfileResponse} */
  CreateMailProfile(data: V20191016.CreateMailProfileRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.CreateMailProfileResponse>;
  /** 创建定期生成的邮件发送配置 {@link V20191016.CreateSchedulerMailProfileRequest} {@link V20191016.CreateSchedulerMailProfileResponse} */
  CreateSchedulerMailProfile(data: V20191016.CreateSchedulerMailProfileRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.CreateSchedulerMailProfileResponse>;
  /** 创建安全审计日志导出任务 {@link V20191016.CreateSecurityAuditLogExportTaskRequest} {@link V20191016.CreateSecurityAuditLogExportTaskResponse} */
  CreateSecurityAuditLogExportTask(data: V20191016.CreateSecurityAuditLogExportTaskRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.CreateSecurityAuditLogExportTaskResponse>;
  /** 删除安全审计日志导出任务 {@link V20191016.DeleteSecurityAuditLogExportTasksRequest} {@link V20191016.DeleteSecurityAuditLogExportTasksResponse} */
  DeleteSecurityAuditLogExportTasks(data: V20191016.DeleteSecurityAuditLogExportTasksRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DeleteSecurityAuditLogExportTasksResponse>;
  /** 获取邮件发送中联系人信息 {@link V20191016.DescribeAllUserContactRequest} {@link V20191016.DescribeAllUserContactResponse} */
  DescribeAllUserContact(data: V20191016.DescribeAllUserContactRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeAllUserContactResponse>;
  /** 获取邮件发送中联系组信息 {@link V20191016.DescribeAllUserGroupRequest} {@link V20191016.DescribeAllUserGroupResponse} */
  DescribeAllUserGroup(data: V20191016.DescribeAllUserGroupRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeAllUserGroupResponse>;
  /** 获取诊断事件详情 {@link V20191016.DescribeDBDiagEventRequest} {@link V20191016.DescribeDBDiagEventResponse} */
  DescribeDBDiagEvent(data: V20191016.DescribeDBDiagEventRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeDBDiagEventResponse>;
  /** 获取实例诊断历史 {@link V20191016.DescribeDBDiagHistoryRequest} {@link V20191016.DescribeDBDiagHistoryResponse} */
  DescribeDBDiagHistory(data: V20191016.DescribeDBDiagHistoryRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeDBDiagHistoryResponse>;
  /** 查询健康报告生成任务列表 {@link V20191016.DescribeDBDiagReportTasksRequest} {@link V20191016.DescribeDBDiagReportTasksResponse} */
  DescribeDBDiagReportTasks(data: V20191016.DescribeDBDiagReportTasksRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeDBDiagReportTasksResponse>;
  /** 获取指定时间段内的实例空间使用概览 {@link V20191016.DescribeDBSpaceStatusRequest} {@link V20191016.DescribeDBSpaceStatusResponse} */
  DescribeDBSpaceStatus(data: V20191016.DescribeDBSpaceStatusRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeDBSpaceStatusResponse>;
  /** 获取实例信息列表 {@link V20191016.DescribeDiagDBInstancesRequest} {@link V20191016.DescribeDiagDBInstancesResponse} */
  DescribeDiagDBInstances(data: V20191016.DescribeDiagDBInstancesRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeDiagDBInstancesResponse>;
  /** 获取健康得分 {@link V20191016.DescribeHealthScoreRequest} {@link V20191016.DescribeHealthScoreResponse} */
  DescribeHealthScore(data: V20191016.DescribeHealthScoreRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeHealthScoreResponse>;
  /** 获取邮件配置 {@link V20191016.DescribeMailProfileRequest} {@link V20191016.DescribeMailProfileResponse} */
  DescribeMailProfile(data: V20191016.DescribeMailProfileRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeMailProfileResponse>;
  /** 查询安全审计日志导出文件下载链接 {@link V20191016.DescribeSecurityAuditLogDownloadUrlsRequest} {@link V20191016.DescribeSecurityAuditLogDownloadUrlsResponse} */
  DescribeSecurityAuditLogDownloadUrls(data: V20191016.DescribeSecurityAuditLogDownloadUrlsRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeSecurityAuditLogDownloadUrlsResponse>;
  /** 查询安全审计日志导出任务列表 {@link V20191016.DescribeSecurityAuditLogExportTasksRequest} {@link V20191016.DescribeSecurityAuditLogExportTasksResponse} */
  DescribeSecurityAuditLogExportTasks(data: V20191016.DescribeSecurityAuditLogExportTasksRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeSecurityAuditLogExportTasksResponse>;
  /** 获取慢日志统计柱状图 {@link V20191016.DescribeSlowLogTimeSeriesStatsRequest} {@link V20191016.DescribeSlowLogTimeSeriesStatsResponse} */
  DescribeSlowLogTimeSeriesStats(data: V20191016.DescribeSlowLogTimeSeriesStatsRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeSlowLogTimeSeriesStatsResponse>;
  /** 按照Sql模板查询指定时间段内的慢日志统计结果 {@link V20191016.DescribeSlowLogTopSqlsRequest} {@link V20191016.DescribeSlowLogTopSqlsResponse} */
  DescribeSlowLogTopSqls(data: V20191016.DescribeSlowLogTopSqlsRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeSlowLogTopSqlsResponse>;
  /** 获取慢日志来源地址统计分布图 {@link V20191016.DescribeSlowLogUserHostStatsRequest} {@link V20191016.DescribeSlowLogUserHostStatsResponse} */
  DescribeSlowLogUserHostStats(data: V20191016.DescribeSlowLogUserHostStatsRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeSlowLogUserHostStatsResponse>;
  /** 获取Top库在指定时间段内的每日空间统计信息 {@link V20191016.DescribeTopSpaceSchemaTimeSeriesRequest} {@link V20191016.DescribeTopSpaceSchemaTimeSeriesResponse} */
  DescribeTopSpaceSchemaTimeSeries(data: V20191016.DescribeTopSpaceSchemaTimeSeriesRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeTopSpaceSchemaTimeSeriesResponse>;
  /** 获取Top库的空间统计信息 {@link V20191016.DescribeTopSpaceSchemasRequest} {@link V20191016.DescribeTopSpaceSchemasResponse} */
  DescribeTopSpaceSchemas(data: V20191016.DescribeTopSpaceSchemasRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeTopSpaceSchemasResponse>;
  /** 获取Top表在指定时间段内的每日空间统计信息 {@link V20191016.DescribeTopSpaceTableTimeSeriesRequest} {@link V20191016.DescribeTopSpaceTableTimeSeriesResponse} */
  DescribeTopSpaceTableTimeSeries(data: V20191016.DescribeTopSpaceTableTimeSeriesRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeTopSpaceTableTimeSeriesResponse>;
  /** 获取Top表的空间统计信息 {@link V20191016.DescribeTopSpaceTablesRequest} {@link V20191016.DescribeTopSpaceTablesResponse} */
  DescribeTopSpaceTables(data: V20191016.DescribeTopSpaceTablesRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeTopSpaceTablesResponse>;
  /** 获取SQL优化建议 {@link V20191016.DescribeUserSqlAdviceRequest} {@link V20191016.DescribeUserSqlAdviceResponse} */
  DescribeUserSqlAdvice(data: V20191016.DescribeUserSqlAdviceRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeUserSqlAdviceResponse>;
  /** 修改实例巡检开关状态 {@link V20191016.ModifyDiagDBInstanceConfRequest} {@link V20191016.ModifyDiagDBInstanceConfResponse} */
  ModifyDiagDBInstanceConf(data: V20191016.ModifyDiagDBInstanceConfRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.ModifyDiagDBInstanceConfResponse>;
}

export declare type Versions = ["2021-05-27", "2019-10-16"];

export default Dbbrain;
