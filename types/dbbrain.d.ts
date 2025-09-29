/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** mongodb慢查模板概览明细 */
declare interface Aggregation {
  /** 平均执行时间（ms）。 */
  AvgExecTime?: number;
  /** 平均扫描行数。 */
  AvgDocsExamined?: number;
  /** 产生慢查次数（/天）。 */
  SlowLogCount?: number;
  /** 内存排序次数。 */
  SortCount?: number;
  /** 慢查模板概览。 */
  SlowLogs?: string[];
}

/** 通知模板 */
declare interface AlarmProfileList {
  /** 0-不是 1-是 */
  IsWebHook?: number;
  /** 接收告警用户数量 */
  ReceiveUinCount?: number;
  /** 语言 */
  Lang?: string;
  /** 模板类型 */
  TemplateType?: string;
  /** 备注 */
  Remark?: string;
  /** 接收组数量 */
  ReceiveGroupCount?: number;
  /** 更新用户的uin */
  UpdateUin?: number;
  /** 接收类型 */
  ReceiveType?: number[];
  /** 接收用户信息 */
  ReceiveInfo?: ReceiveInfo[];
  /** 更新时间，格式: "yyyy-MM-dd HH:mm:ss" */
  UpdateTime?: string;
  /** 模板名 */
  TemplateName?: string;
  /** 发送渠道 */
  SendChannel?: number[];
  /** 模板id */
  TemplateId?: number;
  /** webhook数量 */
  WebHookCount?: number;
}

/** 告警规则 */
declare interface AlarmsRules {
  /** 间隔 */
  Interval: number;
  /** 告警名 */
  Name: string;
  /** 指标 */
  Metric: string;
  /** 操作符 */
  Operator: string;
  /** 等级 fatal-致命critical-严重warning-告警information-通知 */
  Severity: string;
  /** 指标值 */
  Value?: number;
}

/** 实例详细信息 */
declare interface AuditInstance {
  /** 审计状态，已开通审计为：YES，未开通审计为：ON。 */
  AuditStatus?: string;
  /** 审计日志大小，为兼容老版本用。 */
  BillingAmount?: number;
  /** 计费确认状态，0-未确认；1-已确认。 */
  BillingConfirmed?: number;
  /** 低频存储时长。 */
  ColdLogExpireDay?: number;
  /** 低频日志存储量单位MB。 */
  ColdLogSize?: number;
  /** 高频日志存储天数。 */
  HotLogExpireDay?: number;
  /** 高频日志存储量，单位MB。 */
  HotLogSize?: number;
  /** 实例Id。 */
  InstanceId?: string;
  /** 日志保存总天数，为高频存储时长+低频存储时长。 */
  LogExpireDay?: number;
  /** 实例创建时间。 */
  CreateTime?: string;
  /** 实例详细信息。 */
  InstanceInfo?: AuditInstanceInfo;
}

/** 实例列表查询条件 */
declare interface AuditInstanceFilter {
  /** 搜索条件名称 */
  Name: string;
  /** 要搜索的条件的值 */
  Values: string[];
}

/** 实例详情 */
declare interface AuditInstanceInfo {
  /** appId。 */
  AppId?: number;
  /** 审计状态，0-未开通审计；1-已开通审计。 */
  AuditStatus?: number;
  /** 实例Id。 */
  InstanceId?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 项目Id。 */
  ProjectId?: number;
  /** 实例所在地域。 */
  Region?: string;
  /** 资源Tags。 */
  ResourceTags?: string[];
}

/** 审计日志文件 */
declare interface AuditLogFile {
  /** 审计日志文件生成异步任务ID。 */
  AsyncRequestId?: number;
  /** 审计日志文件名称。 */
  FileName?: string;
  /** 审计日志文件创建时间。格式为 : "2019-03-20 17:09:13"。 */
  CreateTime?: string;
  /** 文件状态值。可能返回的值为："creating" - 生成中;"failed" - 创建失败;"success" - 已生成; */
  Status?: string;
  /** 文件大小，单位为 KB。 */
  FileSize?: number;
  /** 审计日志下载地址。 */
  DownloadUrl?: string;
  /** 错误信息。 */
  ErrMsg?: string;
  /** 文件生成进度。（单位：%） */
  Progress?: number;
  /** 文件生成成功时间。格式: "yyyy-MM-dd HH:mm:ss" */
  FinishTime?: string;
}

/** 过滤条件。可按设置的过滤条件过滤日志。 */
declare interface AuditLogFilter {
  /** 客户端地址。 */
  Host?: string[];
  /** 数据库名称。 */
  DBName?: string[];
  /** 用户名。 */
  User?: string[];
  /** 返回行数。表示筛选返回行数大于该值的审计日志。 */
  SentRows?: number;
  /** 影响行数。表示筛选影响行数大于该值的审计日志。 */
  AffectRows?: number;
  /** 执行时间。单位为：µs。表示筛选执行时间大于该值的审计日志。 */
  ExecTime?: number;
}

/** redis自治事件任务详情 */
declare interface AutonomyActionVo {
  /** 自治任务ID。 */
  ActionId?: number;
  /** 自治事件ID。 */
  EventId?: number;
  /** 类型：支持RedisAutoScaleUp */
  Type?: string;
  /** 自治任务触发时间。格式: "yyyy-MM-dd HH:mm:ss" */
  TriggerTime?: string;
  /** 自治任务创建时间。格式: "yyyy-MM-dd HH:mm:ss" */
  CreateTime?: string;
  /** 自治任务更新时间，格式: "yyyy-MM-dd HH:mm:ss" */
  UpdateTime?: string;
  /** 自治任务完成时间。格式: "yyyy-MM-dd HH:mm:ss" */
  FinishTime?: string;
  /** 剩余时间，单位：秒。 */
  ExpireTime?: number;
  /** 触发原因。 */
  Reason?: string;
  /** 自治任务状态：RUNNING，FINISHED，TERMINATED，CANCELLED其中：RUNNING - 运行中 FINISHED - 已完成 TERMINATED - 已终止 CANCELLED - 已取消 */
  Status?: string;
}

/** 自治事件详情 */
declare interface AutonomyEventVo {
  /** 自治事件ID。 */
  EventId?: number;
  /** 自治事件类型：支持RunningAutoRecovery，RedisAutoScale */
  Type?: string;
  /** 自治事件状态：支持 RUNNING，FINISHED，TERMINATED */
  Status?: string;
  /** 触发原因。 */
  Reason?: string;
  /** 自治任务触发时间。 */
  TriggerTime?: number;
  /** 自治任务最后触发时间。 */
  LastTriggerTime?: number;
  /** 自治任务创建时间。 */
  CreateTime?: number;
  /** 自治任务更新时间。 */
  UpdateTime?: number;
  /** 自治任务完成时间；非结束状态的时候，该值无意义。 */
  FinishTime?: number;
}

/** 自治用户配置详情 */
declare interface AutonomyUserProfileInfo {
  /** 是否开启自治。枚举值：true，false。其中：true - 开启false - 关闭 */
  Enabled?: boolean;
  /** 用户Uin。 */
  Uin?: string;
  /** 内存上限。 */
  MemoryUpperLimit?: number;
  /** 指标阈值规则。 */
  ThresholdRule?: MetricThreshold;
  /** 自治功能类型。 */
  EnabledItems?: string[];
}

/** redis延迟分布区间详情 */
declare interface CmdCostGroup {
  /** 该延迟区间内命令数占总命令数百分比 */
  Percent?: number;
  /** 延迟区间上界，单位ms */
  CostUpperLimit?: string;
  /** 延迟区间下界，单位ms */
  CostLowerLimit?: string;
  /** 该延迟区间内命令次数 */
  Count?: number;
}

/** redis命令延迟趋势 */
declare interface CmdPerfInfo {
  /** redis命令 */
  Command?: string;
  /** 监控数据 */
  SeriesData?: MonitorMetricSeriesData;
}

/** 联系人contact描述。 */
declare interface ContactItem {
  /** 联系人id。 */
  Id?: number;
  /** 联系人姓名。 */
  Name?: string;
  /** 联系人绑定的邮箱。 */
  Mail?: string;
}

/** 实例诊断历史事件 */
declare interface DiagHistoryEventItem {
  /** 诊断类型。 */
  DiagType?: string;
  /** 结束时间。 */
  EndTime?: string;
  /** 开始时间。 */
  StartTime?: string;
  /** 事件唯一ID 。 */
  EventId?: number;
  /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
  Severity?: number;
  /** 诊断概要。 */
  Outline?: string;
  /** 诊断项说明。 */
  DiagItem?: string;
  /** 实例 ID 。 */
  InstanceId?: string;
  /** 保留字段。 */
  Metric?: string;
  /** 地域。 */
  Region?: string;
  /** 集群ID。 */
  ClusterId?: string;
  /** 集群名称。 */
  ClusterName?: string;
  /** vip地址。 */
  Vip?: string;
  /** vip端口。 */
  Vport?: number;
}

/** 异常事件信息。 */
declare interface EventInfo {
  /** 事件 ID 。 */
  EventId?: number;
  /** 诊断类型。 */
  DiagType?: string;
  /** 开始时间。 */
  StartTime?: string;
  /** 结束时间。 */
  EndTime?: string;
  /** 概要。 */
  Outline?: string;
  /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
  Severity?: number;
  /** 扣分。 */
  ScoreLost?: number;
  /** 保留字段。 */
  Metric?: string;
  /** 告警数目。 */
  Count?: number;
}

/** 描述组信息。 */
declare interface GroupItem {
  /** 组id。 */
  Id?: number;
  /** 组名称。 */
  Name?: string;
  /** 组成员数量。 */
  MemberCount?: number;
}

/** 健康报告任务详情。 */
declare interface HealthReportTask {
  /** 异步任务请求 ID。 */
  AsyncRequestId?: number;
  /** 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。 */
  Source?: string;
  /** 任务完成进度，单位%。 */
  Progress?: number;
  /** 任务创建时间。 */
  CreateTime?: string;
  /** 任务开始执行时间。 */
  StartTime?: string;
  /** 任务完成执行时间。 */
  EndTime?: string;
  /** 任务所属实例的基础信息。 */
  InstanceInfo?: InstanceBasicInfo;
  /** 健康报告中的健康信息。 */
  HealthStatus?: HealthStatus;
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

/** 健康得分趋势 */
declare interface HealthScoreTimeSeriesData {
  /** 平均得分 */
  Avg?: number;
  /** 健康状态1-health2-warning3-critical */
  HealthStatus?: number;
  /** 指标名称 */
  Metric?: string;
  /** 得分序列 */
  Series?: number[];
  /** 时间序列，单位：毫秒数 */
  Timestamp?: number[];
  /** 单位 */
  Unit?: string;
}

/** 实例健康详情。 */
declare interface HealthStatus {
  /** 健康分数，满分100。 */
  HealthScore?: number;
  /** 健康等级，取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK"- 危险；"HIGH_RISK" - 高危。 */
  HealthLevel?: string;
  /** 总扣分分数。 */
  ScoreLost?: number;
  /** 扣分详情。 */
  ScoreDetails?: ScoreDetail[];
  /** 健康等级版本，默认为"V1" */
  HealthLevelVersion?: string;
}

/** 推荐的索引 */
declare interface IndexesToBuild {
  /** 索引id，唯一标识一个索引。 */
  Id?: number;
  /** 创建索引命令。 */
  IndexCommand?: string;
  /** 索引字符串。 */
  IndexStr?: string;
  /** 优化级别，1-4，优先级从高到低。 */
  Level?: number;
  /** 索引得分。 */
  Score?: number;
  /** 签名。 */
  Signs?: string[];
  /** 0-待创建；1-创建中。 */
  Status?: number;
}

/** 无效索引 */
declare interface IndexesToDrop {
  /** 索引字符串。 */
  IndexStr?: string;
  /** 索引得分。 */
  Score?: number;
  /** 无效原因。 */
  Reason?: string;
  /** 删除索引命令。 */
  IndexCommand?: string;
  /** 索引名。 */
  IndexName?: string;
}

/** 实例基础信息。 */
declare interface InstanceBasicInfo {
  /** 实例ID。 */
  InstanceId?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 实例内网IP。 */
  Vip?: string;
  /** 实例内网Port。 */
  Vport?: number;
  /** 实例产品。 */
  Product?: string;
  /** 实例引擎版本。 */
  EngineVersion?: string;
  /** CPU数量，对于Redis为0。 */
  Cpu?: number;
  /** 实例部署模式。 */
  DeployMode?: string;
  /** 实例内存配置。 */
  InstanceConf?: RedisInstanceConf;
  /** DBbrain是否支持该实例。 */
  IsSupported?: boolean;
  /** 实例内存，单位MB。 */
  Memory?: number;
  /** 实例地域。 */
  Region?: string;
  /** 实例子网统一ID，对于redis为空字符串。 */
  UniqSubnetId?: string;
  /** 实例私有网络统一ID，对于redis为空字符串。 */
  UniqVpcId?: string;
  /** 实例磁盘容量，对于Redis为0。 */
  Volume?: number;
}

/** 实例配置。 */
declare interface InstanceConfs {
  /** 数据库巡检开关, Yes/No。 */
  DailyInspection?: string;
  /** 实例概览开关，Yes/No。 */
  OverviewDisplay?: string;
  /** redis大key分析的自定义分割符，仅redis使用 */
  KeyDelimiters?: string[];
  /** 分片节点数量。 */
  ShardNum?: string;
  /** 是否开启大key周期性分析，仅redis产品有效。 */
  AnalysisTopKey?: string;
}

/** 实例id */
declare interface InstanceID {
  /** 实例id */
  InstanceId?: string;
}

/** 查询实例列表，返回实例的相关信息的对象。 */
declare interface InstanceInfo {
  /** 实例ID。 */
  InstanceId?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 实例所属地域。 */
  Region?: string;
  /** 健康得分。 */
  HealthScore?: number;
  /** 所属产品。 */
  Product?: string;
  /** 异常事件数量。 */
  EventCount?: number;
  /** 实例类型：1:MASTER；2:DR，3：RO，4:SDR。 */
  InstanceType?: number;
  /** 核心数。 */
  Cpu?: number;
  /** 内存，单位MB。 */
  Memory?: number;
  /** 硬盘存储，单位GB。 */
  Volume?: number;
  /** 数据库版本。 */
  EngineVersion?: string;
  /** 内网地址。 */
  Vip?: string;
  /** 内网端口。 */
  Vport?: number;
  /** 接入来源。 */
  Source?: string;
  /** 分组ID。 */
  GroupId?: string;
  /** 分组组名。 */
  GroupName?: string;
  /** 实例状态：0：发货中；1：运行正常；4：销毁中；5：隔离中。 */
  Status?: number;
  /** 子网统一ID。 */
  UniqSubnetId?: string;
  /** cdb类型。 */
  DeployMode?: string;
  /** cdb实例初始化标志：0：未初始化；1：已初始化。 */
  InitFlag?: number;
  /** 任务状态。 */
  TaskStatus?: number;
  /** 私有网络统一ID。 */
  UniqVpcId?: string;
  /** 实例巡检/概览的状态。 */
  InstanceConf?: InstanceConfs;
  /** 资源到期时间。 */
  DeadlineTime?: string;
  /** 是否是DBbrain支持的实例。 */
  IsSupported?: boolean;
  /** 实例安全审计日志开启状态：ON： 安全审计开启；OFF： 未开启安全审计。 */
  SecAuditStatus?: string;
  /** 实例审计日志开启状态，ALL_AUDIT： 开启全审计；RULE_AUDIT： 开启规则审计；UNBOUND： 未开启审计。 */
  AuditPolicyStatus?: string;
  /** 实例审计日志运行状态：normal： 运行中； paused： 欠费暂停。 */
  AuditRunningStatus?: string;
  /** 内网vip。 */
  InternalVip?: string;
  /** 内网port。 */
  InternalVport?: number;
  /** 创建时间。 */
  CreateTime?: string;
  /** 所属集群ID（仅对集群数据库产品该字段非空，如TDSQL-C）。 */
  ClusterId?: string;
  /** 所属集群名称（仅对集群数据库产品该字段非空，如TDSQL-C）。 */
  ClusterName?: string;
  /** 自建MySQL的Agent状态，"not_deployed" - 未部署，"deploying" - 部署中，"connected" - 连接正常，"deploy_failed" - 连接失败，"monitoring" - 连接正常，"stopped" - 暂停连接，"connect_failed" - 连接失败，unknown - 未知。 */
  AgentStatus?: string;
  /** 自建MySQL的实例状态，"not_attached" - 未连接，"attached" - 连接正常，"failed" - 连接失败，"stopped" - 停止监控，unknown- 未知。 */
  InstanceStatus?: string;
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
  /** 包含的健康等级，包括值：HEALTH-健康，SUB_HEALTH-亚健康，RISK-风险，HIGH_RISK-高危。 */
  HealthStatus: string[];
  /** 联系人id, 联系人/联系组不能都为空。 */
  ContactPerson?: number[];
  /** 联系组id, 联系人/联系组不能都为空。 */
  ContactGroup?: number[];
}

/** 自治指标阈值 */
declare interface MetricThreshold {
  /** 指标。 */
  Metric?: string;
  /** 阈值。 */
  Threshold?: number;
  /** 时间间隔。 */
  Duration?: number;
}

/** Mongodb索引项 */
declare interface MongoDBIndex {
  /** 实例id。 */
  ClusterId?: string;
  /** 表名。 */
  Collection?: string;
  /** 库名。 */
  Db?: string;
  /** 优化级别，1-4，优先级从高到低。 */
  Level?: number;
  /** 得分。 */
  Score?: number;
  /** 推荐索引列表。 */
  IndexesToBuild?: IndexesToBuild[];
  /** 无效索引列表。 */
  IndexesToDrop?: IndexesToDrop[];
}

/** 监控数据（浮点型） */
declare interface MonitorFloatMetric {
  /** 指标名称。 */
  Metric?: string;
  /** 指标单位。 */
  Unit?: string;
  /** 指标值。 */
  Values?: number[];
}

/** 单位时间间隔内的监控指标数据（浮点型） */
declare interface MonitorFloatMetricSeriesData {
  /** 监控指标。 */
  Series?: MonitorFloatMetric[];
  /** 监控指标对应的时间戳。 */
  Timestamp?: number[];
}

/** 监控数据 */
declare interface MonitorMetric {
  /** 指标名称。 */
  Metric?: string;
  /** 指标单位。 */
  Unit?: string;
  /** 指标值。 */
  Values?: number[];
}

/** 单位时间间隔内的监控指标数据 */
declare interface MonitorMetricSeriesData {
  /** 监控指标。 */
  Series?: MonitorMetric[];
  /** 监控指标对应的时间戳。（精度：秒） */
  Timestamp?: number[];
}

/** 关系型数据库线程 */
declare interface MySqlProcess {
  /** 线程ID。 */
  ID?: string;
  /** 线程的操作账号名。 */
  User?: string;
  /** 线程的操作主机地址。 */
  Host?: string;
  /** 线程的操作数据库。 */
  DB?: string;
  /** 线程的操作状态。 */
  State?: string;
  /** 线程的执行类型。 */
  Command?: string;
  /** 线程的操作时长，单位秒。 */
  Time?: string;
  /** 线程的操作语句。 */
  Info?: string;
}

/** 实时会话详情。 */
declare interface Process {
  /** 会话 ID。 */
  Id?: number;
  /** 访问来源，IP 地址和端口号。格式：IP:Port */
  Address?: string;
  /** 文件描述符。 */
  FileDescriptor?: number;
  /** 会话名称，使用 CLIENT SETNAME 命令设置。 */
  Name?: string;
  /** 最后一次执行的命令。 */
  LastCommand?: string;
  /** 会话存活时间，单位：秒。 */
  Age?: number;
  /** 最后一次执行命令后空闲的时间，单位：秒。 */
  Idle?: number;
  /** 会话所属的 Proxy节点 ID。 */
  ProxyId?: string;
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
  /** 语言类型, 包含“zh”-中文，“en”-英文。 */
  Language: string;
  /** 邮件模板的内容。 */
  MailConfiguration: MailConfiguration;
}

/** 接收组信息 */
declare interface ReceiveInfo {
  /** 接收组 */
  ReceiveGroup?: number[];
  /** 最后接收时间，格式: "HH:mm:ss" */
  EndReceiveTime?: string;
  /** 接收名 */
  ReceiveName?: string;
  /** 推送渠道 */
  SendChannel?: number[];
  /** 开始时间，格式: "HH:mm:ss" */
  StartReceiveTime?: string;
  /** 接收用户列表 */
  ReceiveUin?: ReceiveUin[];
}

/** 接收用户 */
declare interface ReceiveUin {
  /** 用户名 */
  UinName?: string;
  /** 用户id */
  Uin?: string;
}

/** Redis大Key分析任务详情。 */
declare interface RedisBigKeyTask {
  /** 异步任务请求 ID。 */
  AsyncRequestId?: number;
  /** 任务创建时间。 */
  CreateTime?: string;
  /** 任务开始时间。 */
  StartTime?: string;
  /** 任务结束时间。 */
  EndTime?: string;
  /** 任务状态。 */
  TaskStatus?: string;
  /** 任务执行进度。 */
  Progress?: number;
  /** 任务包含的分片节点序号列表。 */
  ShardIds?: number[];
}

/** redis访问命令详情 */
declare interface RedisCmdInfo {
  /** redis命令 */
  Cmd?: string;
  /** 命令次数 */
  Count?: number;
}

/** redis命令cost详情 */
declare interface RedisCostCmd {
  /** 命令 */
  Cmd?: string;
  /** 最大cost */
  MaxCost?: number;
}

/** Redis实例内存配置参数 */
declare interface RedisInstanceConf {
  /** 副本数量 */
  ReplicasNum?: string;
  /** 分片数量 */
  ShardNum?: string;
  /** 分片内存大小，单位MB */
  ShardSize?: string;
}

/** redis key空间信息。 */
declare interface RedisKeySpaceData {
  /** key名。 */
  Key?: string;
  /** key类型。 */
  Type?: string;
  /** key编码方式。 */
  Encoding?: string;
  /** key过期时间戳（毫秒），0代表未设置过期时间。 */
  ExpireTime?: number;
  /** key内存大小，单位Byte。 */
  Length?: number;
  /** 元素个数。 */
  ItemCount?: number;
  /** 最大元素长度。 */
  MaxElementSize?: number;
  /** 平均元素长度。 */
  AveElementSize?: number;
  /** 所属分片序号。 */
  ShardId?: string;
}

/** Redis DescribeMetricTopProxies 接口返回数据 */
declare interface RedisMetricTopProxiesData {
  /** host */
  Host?: string | null;
  /** Proxy Id */
  InstanceProxyId?: string | null;
  /** 端口 */
  Port?: number | null;
  /** 最新的值 */
  Value?: number | null;
  /** 时间（秒） */
  Timestamp?: number[] | null;
  /** 序列数据 */
  Series?: MonitorFloatMetric[] | null;
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
  Id?: number;
  /** 任务状态，取值包括RUNNING - 运行中, FINISHED - 已完成, TERMINATED - 已终止。 */
  Status?: string;
  /** SQL类型，取值包括SELECT, UPDATE, DELETE, INSERT, REPLACE。 */
  SqlType?: string;
  /** 筛选SQL的关键词，多个关键词用英文逗号拼接。 */
  OriginKeys?: string;
  /** 筛选SQL的规则。 */
  OriginRule?: string;
  /** 已拒绝SQL数目。 */
  RejectedSqlCount?: number;
  /** 当前并发数。 */
  CurrentConcurrency?: number;
  /** 最大并发数。 */
  MaxConcurrency?: number;
  /** 任务创建时间。 */
  CreateTime?: string;
  /** 当前时间。 */
  CurrentTime?: string;
  /** 限流过期时间。 */
  ExpireTime?: string;
}

/** SchemaItem数组 */
declare interface SchemaItem {
  /** 数据库名称 */
  Schema: string;
}

/** 库空间统计数据。 */
declare interface SchemaSpaceData {
  /** 库名。 */
  TableSchema?: string;
  /** 数据空间（MB）。 */
  DataLength?: number;
  /** 索引空间（MB）。 */
  IndexLength?: number;
  /** 碎片空间（MB）。 */
  DataFree?: number;
  /** 总使用空间（MB）。 */
  TotalLength?: number;
  /** 碎片率（%）。 */
  FragRatio?: number;
  /** 行数。 */
  TableRows?: number;
  /** 库中所有表对应的独立物理文件大小加和（MB）。 */
  PhysicalFileSize?: number;
}

/** 库空间时序数据 */
declare interface SchemaSpaceTimeSeries {
  /** 库名 */
  TableSchema?: string;
  /** 单位时间间隔内的空间指标数据。 */
  SeriesData?: MonitorMetricSeriesData;
}

/** 扣分详情。 */
declare interface ScoreDetail {
  /** 扣分项分类，取值包括：可用性、可维护性、性能及可靠性。 */
  IssueType?: string;
  /** 扣分总分。 */
  ScoreLost?: number;
  /** 扣分总分上限。 */
  ScoreLostMax?: number;
  /** 扣分项列表。 */
  Items?: ScoreItem[];
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
  AsyncRequestId?: number;
  /** 任务开始时间。 */
  StartTime?: string;
  /** 任务结束时间。 */
  EndTime?: string;
  /** 任务创建时间。 */
  CreateTime?: string;
  /** 任务状态。 */
  Status?: string;
  /** 任务执行进度。 */
  Progress?: number;
  /** 导出日志开始时间。 */
  LogStartTime?: string;
  /** 导出日志结束时间。 */
  LogEndTime?: string;
  /** 日志文件总大小，单位KB。 */
  TotalSize?: number;
  /** 风险等级列表。0 无风险；1 低风险；2 中风险；3 高风险。 */
  DangerLevels?: number[];
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

/** redis top慢日志聚合详情。 */
declare interface SlowLogAgg {
  /** 命令模版。 */
  Cmd?: string;
  /** 命令详情。 */
  Detail?: string;
  /** 执行次数。 */
  ExecTimes?: number;
  /** 总耗时。 */
  QueryTime?: number;
  /** 平均执行时间。 */
  QueryTimeAvg?: number;
  /** 最大执行时间。 */
  QueryTimeMax?: number;
  /** 最小执行时间。 */
  QueryTimeMin?: number;
  /** 总耗时占比 */
  QueryTimeRatio?: number;
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

/** 慢日志详细信息 */
declare interface SlowLogInfoItem {
  /** 慢日志开始时间 */
  Timestamp?: string;
  /** sql语句 */
  SqlText?: string;
  /** 数据库 */
  Database?: string;
  /** User来源 */
  UserName?: string;
  /** IP来源 */
  UserHost?: string;
  /** 执行时间,单位秒 */
  QueryTime?: number;
  /** 锁时间,单位秒 */
  LockTime?: number;
  /** 扫描行数 */
  RowsExamined?: number;
  /** 返回行数 */
  RowsSent?: number;
}

/** 慢日志TopSql */
declare interface SlowLogTopSqlItem {
  /** sql总锁等待时间，单位秒 */
  LockTime?: number;
  /** 最大锁等待时间，单位秒 */
  LockTimeMax?: number;
  /** 最小锁等待时间，单位秒 */
  LockTimeMin?: number;
  /** 总扫描行数 */
  RowsExamined?: number;
  /** 最大扫描行数 */
  RowsExaminedMax?: number;
  /** 最小扫描行数 */
  RowsExaminedMin?: number;
  /** 总耗时，单位秒 */
  QueryTime?: number;
  /** 最大执行时间，单位秒 */
  QueryTimeMax?: number;
  /** 最小执行时间，单位秒 */
  QueryTimeMin?: number;
  /** 总返回行数 */
  RowsSent?: number;
  /** 最大返回行数 */
  RowsSentMax?: number;
  /** 最小返回行数 */
  RowsSentMin?: number;
  /** 执行次数 */
  ExecTimes?: number;
  /** sql模板 */
  SqlTemplate?: string;
  /** 带参数SQL（随机） */
  SqlText?: string;
  /** 数据库名 */
  Schema?: string;
  /** 总耗时占比，单位% */
  QueryTimeRatio?: number;
  /** sql总锁等待时间占比，单位% */
  LockTimeRatio?: number;
  /** 总扫描行数占比，单位% */
  RowsExaminedRatio?: number;
  /** 总返回行数占比，单位% */
  RowsSentRatio?: number;
  /** 平均执行时间，单位秒 */
  QueryTimeAvg?: number;
  /** 平均返回行数 */
  RowsSentAvg?: number;
  /** 平均锁等待时间，单位秒 */
  LockTimeAvg?: number;
  /** 平均扫描行数 */
  RowsExaminedAvg?: number;
  /** SQL模板的MD5值 */
  Md5?: string;
}

/** 慢日志来源用户详情。 */
declare interface SlowLogUser {
  /** 来源用户名。 */
  UserName?: string;
  /** 该来源用户名的慢日志数目占总数目的比例，单位%。 */
  Ratio?: number;
  /** 该来源用户名的慢日志数目。 */
  Count?: number;
}

/** 分段耗时 SQL 分布 */
declare interface SqlCostDistribution {
  /** sql条数。 */
  Count?: number;
  /** 分段耗时下边界，单位是秒。 */
  From?: number;
  /** 分段耗时上边界，单位是秒。 */
  To?: number;
  /** 耗时占比。单位（%） */
  Ratio?: number;
}

/** 会话统计的维度信息,可以多个维度 */
declare interface StatDimension {
  /** 维度名称，目前仅支持：SqlTag。 */
  Dimension: string;
  /** SQL 标签过滤与统计信息示例：示例 1：[p=position] 统计包含 p=position 标签的 SQL 会话。示例 2：[p] 统计包含 p 标签的 SQL 会话。示例 3：[p=position, c=idCard] 统计同时包含 p=position 标签和 c=idCard 标签的 SQL 会话。 */
  Data?: string[];
}

/** 统计分析维度下的统计数据详情 */
declare interface StatisticDataInfo {
  /** 统计维度的值。 */
  Name?: string;
  /** 平均时间。 */
  TimeAvg?: number;
  /** 总时间。 */
  TimeSum?: number;
  /** 数量。 */
  Count?: number;
}

/** sql会话统计信息 */
declare interface StatisticInfo {
  /** 统计分析的维度。 */
  Dimension?: string;
  /** 统计分析的维度下的统计数据详情。 */
  Data?: StatisticDataInfo[];
}

/** 表结构。 */
declare interface Table {
  /** 库名。 */
  TableSchema?: string;
  /** 表名。 */
  TableName?: string;
  /** 库表的存储引擎。 */
  Engine?: string;
  /** 行数。 */
  TableRows?: number;
  /** 总使用空间（MB）。 */
  TotalLength?: number;
}

/** 库表空间统计数据。 */
declare interface TableSpaceData {
  /** 表名。 */
  TableName?: string;
  /** 库名。 */
  TableSchema?: string;
  /** 库表的存储引擎。 */
  Engine?: string;
  /** 数据空间（MB）。 */
  DataLength?: number;
  /** 索引空间（MB）。 */
  IndexLength?: number;
  /** 碎片空间（MB）。 */
  DataFree?: number;
  /** 总使用空间（MB）。 */
  TotalLength?: number;
  /** 碎片率（%）。 */
  FragRatio?: number;
  /** 行数。 */
  TableRows?: number;
  /** 表对应的独立物理文件大小（MB）。 */
  PhysicalFileSize?: number;
}

/** 库表空间时序数据 */
declare interface TableSpaceTimeSeries {
  /** 表名。 */
  TableName?: string;
  /** 库名。 */
  TableSchema?: string;
  /** 库表的存储引擎。 */
  Engine?: string;
  /** 单位时间间隔内的空间指标数据。 */
  SeriesData?: MonitorFloatMetricSeriesData;
}

/** 展示 redis kill 会话任务状态。 */
declare interface TaskInfo {
  /** 异步任务 ID。 */
  AsyncRequestId?: number;
  /** 当前实例所有 proxy 列表。 */
  InstProxyList?: string[];
  /** 当前实例所有 proxy 数量。 */
  InstProxyCount?: number;
  /** 任务创建时间。 */
  CreateTime?: string;
  /** 任务启动时间。 */
  StartTime?: string;
  /** 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。 */
  TaskStatus?: string;
  /** 完成 kill 任务的 proxyId。 */
  FinishedProxyList?: string[];
  /** kill 任务实行失败的 proxyId。 */
  FailedProxyList?: string[];
  /** 任务结束时间。 */
  EndTime?: string;
  /** 任务执行进度。 */
  Progress?: number;
  /** 实例 ID。 */
  InstanceId?: string;
}

/** 通知模板 */
declare interface TemplateInfo {
  /** 模板id,通过接口[通知模板查询](https://cloud.tencent.com/document/product/1130/97726)获得。 */
  TemplateId: string;
  /** 模板名,通过接口[通知模板查询](https://cloud.tencent.com/document/product/1130/97726)获得。 */
  TemplateName: string;
}

/** 单位时间间隔内的慢日志统计 */
declare interface TimeSlice {
  /** 总数 */
  Count: number;
  /** 统计开始时间 */
  Timestamp: number;
}

/** 热key分析返回信息 */
declare interface TopHotKeys {
  /** 访问频次。 */
  Count?: number;
  /** 热Key所属数据库。 */
  Db?: string;
  /** Redis节点。 */
  InstanceNodeId?: string;
  /** 热Key。 */
  Key?: string;
  /** 数据类型。 */
  Type?: string;
}

/** 用户配置的相关信息，包括邮件配置。 */
declare interface UserProfile {
  /** 配置的id。 */
  ProfileId?: string;
  /** 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。 */
  ProfileType?: string;
  /** 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。 */
  ProfileLevel?: string;
  /** 配置名称。 */
  ProfileName?: string;
  /** 配置详情。 */
  ProfileInfo?: ProfileInfo;
}

declare interface AddUserContactRequest {
  /** 联系人姓名，由中英文、数字、空格、!@#$%^&*()_+-=（）组成，不能以下划线开头，长度在20以内。 */
  Name: string;
  /** 邮箱地址，支持大小写字母、数字、下划线、连字符及@字符， 只能以数字或字母开头，邮箱地址不可重复。 */
  ContactInfo: string;
  /** 服务产品类型，固定值："mysql"。 */
  Product: string;
}

declare interface AddUserContactResponse {
  /** 添加成功的联系人id。 */
  Id?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelDBAutonomyActionRequest {
  /** 自治任务ID。 */
  ActionId: number;
  /** 实列ID。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface CancelDBAutonomyActionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelDBAutonomyEventRequest {
  /** 自治事件ID。 */
  EventId: number;
  /** 实列ID。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface CancelDBAutonomyEventResponse {
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

declare interface CancelRedisBigKeyAnalysisTasksRequest {
  /** 自治任务ID。 */
  AsyncRequestIds: number[];
  /** 实列ID。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface CancelRedisBigKeyAnalysisTasksResponse {
  /** 终止大Key任务结果；0-成功。 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseAuditServiceRequest {
  /** 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB。 */
  Product: string;
  /** NodeRequestType主要标识数据库产品类型，与Product保持一致。如："dcdb" ,"mariadb"。 */
  NodeRequestType: string;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
}

declare interface CloseAuditServiceResponse {
  /** 0-关闭审计成功，非0关闭审计失败。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAuditLogFileRequest {
  /** 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB for MariaDB。 */
  Product: string;
  /** 与Product保持一致。如："dcdb" ,"mariadb" */
  NodeRequestType: string;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 开始时间，如“2025-03-17T00:00:00+00:00”。 */
  StartTime: string;
  /** 结束时间，如“2025-03-17T01:00:00+00:00”。 */
  EndTime: string;
  /** 过滤条件。可按设置的过滤条件过滤日志。 */
  Filter?: AuditLogFilter;
}

declare interface CreateAuditLogFileResponse {
  /** 审计日志文件下载的任务ID */
  AsyncRequestId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBDiagReportTaskRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
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
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，"mariadb" - 云数据库 MariaDB，"dcdb" - 云数据库 TDSQL MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface CreateDBDiagReportTaskResponse {
  /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
  AsyncRequestId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBDiagReportUrlRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。示例值：cdb-dctw4edd */
  InstanceId: string;
  /** 健康报告相应的任务ID，可通过[DescribeDBDiagReportTasks](https://cloud.tencent.com/document/product/1130/54873)查询。 */
  AsyncRequestId: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，"mariadb" - 云数据库 MariaDB，"dcdb" - 云数据库 TDSQL MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface CreateDBDiagReportUrlResponse {
  /** 健康报告浏览地址。 */
  ReportUrl?: string;
  /** 健康报告浏览地址到期时间戳（秒）。 */
  ExpireTime?: number;
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
  /** 任务过滤条件，支持多个关键字匹配，与Info参数互斥。 */
  Infos?: string[];
  /** 任务过滤条件，用户类型。 */
  User?: string;
  /** 任务过滤条件，会话持续时长，单位秒。 */
  Time?: number;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface CreateKillTaskResponse {
  /** kill会话任务创建成功返回1 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMailProfileRequest {
  /** 邮件配置内容。 */
  ProfileInfo: ProfileInfo;
  /** 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。 */
  ProfileLevel: string;
  /** 配置名称，需要保持唯一性，数据库巡检邮件配置名称自拟；定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"scheduler_cdb-test"。 */
  ProfileName: string;
  /** 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。 */
  ProfileType: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，"mariadb" - 云数据库 MariaDB，"dcdb" - 云数据库 TDSQL MySQL，默认为"mysql"。 */
  Product: string;
  /** 配置绑定的实例ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。当配置级别为"Instance"时需要传入且只能为一个实例；当配置级别为“User”时，此参数不填。 */
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
  /** 实列代理ID。 */
  InstanceProxyId?: string;
}

declare interface CreateProxySessionKillTaskResponse {
  /** 创建 kill 会话任务返回的异步任务 id */
  AsyncRequestId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRedisBigKeyAnalysisTaskRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括 "redis" - 云数据库 Redis。 */
  Product: string;
  /** 分片节点序号列表。当列表为空时，选择所有分片节点。 */
  ShardIds?: number[];
  /** Top Key前缀的分隔符列表。目前仅支持以下分割符：[",", ";", ":", "_", "-", "+", "@", "=", "|", "#", "."]，当列表为空时，默认选择所有分隔符。 */
  KeyDelimiterList?: string[];
}

declare interface CreateRedisBigKeyAnalysisTaskResponse {
  /** 异步任务ID。 */
  AsyncRequestId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSchedulerMailProfileRequest {
  /** 取值范围1-7，分别代表周一至周日。 */
  WeekConfiguration: number[];
  /** 邮件配置内容。 */
  ProfileInfo: ProfileInfo;
  /** 配置名称，需要保持唯一性，定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"scheduler_cdb-test"。 */
  ProfileName: string;
  /** 配置订阅的实例ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  BindInstanceId: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，"mariadb" - 云数据库 MariaDB，"dcdb" - 云数据库 TDSQL MySQL，默认为"mysql"。 */
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
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** SQL语句的类型，取值包括SELECT, UPDATE, DELETE, INSERT, REPLACE。其中：SELECT - 查询 UPDATE - 更新 DELETE - 删除 INSERT - 插入 REPLACE - 替换 */
  SqlType: string;
  /** 关键字，用于筛选SQL语句，多个关键字用英文逗号分隔，逗号不能作为关键词，多个关键词之间的关系为“逻辑与”。 */
  FilterKey: string;
  /** 最大并发度，取值不能小于0，如果该值设为 0，则表示限制所有匹配的SQL执行。 */
  MaxConcurrency: number;
  /** 限流时长，单位秒，支持-1和小于2147483647的正整数，-1表示永不过期。 */
  Duration: number;
  /** 通过 [VerifyUserAccount](https://cloud.tencent.com/document/product/1130/72828) 获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。 */
  SessionToken?: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface CreateSqlFilterResponse {
  /** 限流任务ID。 */
  FilterId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUserAutonomyProfileRequest {
  /** 配置类型，为需要配置的功能枚举值，目前包含以下枚举值：AutonomyGlobal（自治功能全局配置）、RedisAutoScaleUp（Redis自治扩容配置） */
  ProfileType: string;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
  /** 自治功能相关配置，标准JSON字符串格式。 */
  ProfileInfo?: string;
}

declare interface CreateUserAutonomyProfileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuditLogFileRequest {
  /** 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB for MariaDB， "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL， "postgres" - 云数据库 PostgreSQL。 */
  Product: string;
  /** NodeRequestType主要标识数据库产品类型，与Product保持一致。该字段规则如下： 当product为"dcdb"则输入"dcdb"， 当product为"mariadb"则输入"mariadb"， 当product为"mysql"则输入"mysql"， 当product为"cynosdb"则输入"mysql"， 当product为"postgres"则输入"postgres"。 */
  NodeRequestType: string;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 审计日志文件生成异步任务ID。可通过[查询审计日志文件](https://cloud.tencent.com/document/product/1130/90371)获得。 */
  AsyncRequestId: number;
}

declare interface DeleteAuditLogFileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDBDiagReportTasksRequest {
  /** 需要删除的任务id列表。可通过[查询健康报告生成任务列表](https://cloud.tencent.com/document/product/1130/57805)获取 */
  AsyncRequestIds: number[];
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"dbbrain-mysql" - 自建 MySQL，"redis" - 云数据库 Redis，默认为"mysql"。 */
  Product?: string;
}

declare interface DeleteDBDiagReportTasksResponse {
  /** 任务删除状态, 0-删除成功 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRedisBigKeyAnalysisTasksRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 待删除的异步任务ID列表。 */
  AsyncRequestIds: number[];
  /** 服务产品类型，支持值包括 "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface DeleteRedisBigKeyAnalysisTasksResponse {
  /** 状态值，为0时代表正常处理。 */
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
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 限流任务ID列表。通过接口[创建实例SQL限流任务](https://cloud.tencent.com/document/product/1130/72835)获得。 */
  FilterIds: number[];
  /** 通过 [VerifyUserAccount](https://cloud.tencent.com/document/product/1130/72828) 获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。 */
  SessionToken?: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DeleteSqlFiltersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAlarmTemplateRequest {
  /** 搜索字段 */
  TemplateNameRegexp: string;
  /** 返回限制长度，最大值: 50，默认值: 50 */
  Limit: number;
  /** 偏置，最大值: 无限制，默认值: 0 */
  Offset: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL */
  Product?: string;
}

declare interface DescribeAlarmTemplateResponse {
  /** 模板列表 */
  ProfileList?: AlarmProfileList[];
  /** 模板总数 */
  TotalCount?: number;
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
  TotalCount?: number;
  /** 联系人的信息。 */
  Contacts?: ContactItem[];
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
  TotalCount?: number;
  /** 组信息。 */
  Groups?: GroupItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditInstanceListRequest {
  /** 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB。 */
  Product: string;
  /** NodeRequestType主要标识数据库产品类型，与Product保持一致。如："dcdb" ,"mariadb"。 */
  NodeRequestType: string;
  /** 审计状态标识，0-未开通审计；1-已开通审计，默认为0。 */
  AuditSwitch?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 查询数目，默认为20，最大为100。 */
  Limit?: number;
  /** 查询实例的搜索条件。Name包括：InstanceId， InstanceName。 */
  Filters?: AuditInstanceFilter[];
}

declare interface DescribeAuditInstanceListResponse {
  /** 符合条件的实例个数。 */
  TotalCount?: number;
  /** 实例详情。 */
  Items?: AuditInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditLogFilesRequest {
  /** 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB for MariaDB， "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL， "postgres" - 云数据库 PostgreSQL */
  Product: string;
  /** 该字段规则如下： 当product为"dcdb"则输入"dcdb"， 当product为"mariadb"则输入"mariadb"， 当product为"mysql"则输入"mysql"， 当product为"cynosdb"则输入"mysql"， 当product为"postgres"则输入"postgres"。 */
  NodeRequestType: string;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 查询数目，默认为20，最大为100。 */
  Limit?: number;
}

declare interface DescribeAuditLogFilesResponse {
  /** 符合条件的审计日志文件个数。 */
  TotalCount?: number;
  /** 审计日志文件详情。 */
  Items?: AuditLogFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBAutonomyActionRequest {
  /** 自治任务ID。可通过 [DescribeDBAutonomyActions](https://cloud.tencent.com/document/product/1130/116974) 接口获取。 */
  ActionId: number;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface DescribeDBAutonomyActionResponse {
  /** 自治任务ID。 */
  ActionId?: number;
  /** 自治事件ID。 */
  EventId?: number;
  /** 任务ID。 */
  TaskId?: number;
  /** 类型：支持RedisAutoScaleUp */
  Type?: string;
  /** 自治任务触发时间。格式: "yyyy-MM-dd HH:mm:ss" */
  TriggerTime?: string;
  /** 自治任务创建时间。格式: "yyyy-MM-dd HH:mm:ss" */
  CreateTime?: string;
  /** 自治任务更新时间。格式: "yyyy-MM-dd HH:mm:ss" */
  UpdateTime?: string;
  /** 自治任务完成时间。格式: "yyyy-MM-dd HH:mm:ss" */
  FinishTime?: string;
  /** 剩余时间，单位：秒。 */
  ExpireTime?: number;
  /** 触发原因。 */
  Reason?: string;
  /** 自治任务状态：支持 RUNNING，FINISHED，TERMINATED，CANCELLED其中：RUNNING - 运行中 FINISHED - 已完成 TERMINATED - 已终止 CANCELLED - 已取消 */
  Status?: string;
  /** 任务相关的图表等信息。 */
  Info?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBAutonomyActionsRequest {
  /** 事件ID。可通过 [DescribeDBDiagHistory](https://cloud.tencent.com/document/product/1130/39559) 接口获取。 */
  EventId: number;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface DescribeDBAutonomyActionsResponse {
  /** 自治事件总数。 */
  TotalCount?: number;
  /** 自治事件列表。 */
  Actions?: AutonomyActionVo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBAutonomyEventsRequest {
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
  /** 实列ID。 */
  InstanceId: string;
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 分页参数，默认值为0。 */
  Offset?: number;
  /** 分页参数，默认值为20。 */
  Limit?: number;
}

declare interface DescribeDBAutonomyEventsResponse {
  /** 自治事件列表总数。 */
  TotalCount?: number;
  /** 自治事件列表。 */
  Events?: AutonomyEventVo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBDiagEventRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 事件 ID 。通过“获取实例诊断历史[DescribeDBDiagHistory](https://cloud.tencent.com/document/product/1130/39559) ”获取。 */
  EventId?: number;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，"redis" - 云数据库 Redis，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeDBDiagEventResponse {
  /** 诊断项。 */
  DiagItem?: string;
  /** 诊断类型。支持值包括"高危账号","自增键耗尽","连接性检查","CPU利用率","死锁","全表扫描","高并发/压力请求","预编译语句过多","内存利用率","Metadata lock","磁盘超限","内存超限","只读锁","只读实例剔除","行锁","活跃会话","慢SQL","数据库快照","磁盘空间利用率","执行计划变化","主从切换","Table open cache命中率低","大表","事务未提交","事务导致复制延迟"等。 */
  DiagType?: string;
  /** 事件 ID 。 */
  EventId?: number;
  /** 诊断事件详情，若无附加解释信息则输出为空。 */
  Explanation?: string;
  /** 诊断概要。 */
  Outline?: string;
  /** 诊断出的问题。 */
  Problem?: string;
  /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
  Severity?: number;
  /** 开始时间。格式: "yyyy-MM-dd HH:mm:ss" */
  StartTime?: string;
  /** 诊断建议，若无建议则输出为空。 */
  Suggestions?: string;
  /** 保留字段。 */
  Metric?: string;
  /** 结束时间。格式: "yyyy-MM-dd HH:mm:ss" */
  EndTime?: string;
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
  /** 服务产品类型，支持值包括："mysql" - 云数据库 MySQL，"redis" - 云数据库 Redis，默认为"mysql"。 */
  Product?: string;
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 返回数量，默认20，最大值为50。 */
  Limit?: number;
}

declare interface DescribeDBDiagEventsResponse {
  /** 诊断事件的总数目。 */
  TotalCount?: number;
  /** 诊断事件的列表。 */
  Items?: DiagHistoryEventItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBDiagHistoryRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 开始时间，如“2019-09-10 12:13:14”。结束时间与开始时间的间隔最大可为2天。 */
  StartTime: string;
  /** 结束时间，如“2019-09-11 12:13:14”，结束时间与开始时间的间隔最大可为2天。 */
  EndTime: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeDBDiagHistoryResponse {
  /** 事件描述。 */
  Events?: DiagHistoryEventItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBDiagReportContentRequest {
  /** 实例名 */
  InstanceId: string;
  /** 异步任务ID */
  AsyncRequestId: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeDBDiagReportContentResponse {
  /** 报告内容。 */
  Report?: string;
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
  /** 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 计划任务；"MANUAL" - 手动触发。 */
  Sources?: string[];
  /** 报告的健康等级，支持的取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK" - 危险；"HIGH_RISK" - 高危。 */
  HealthLevels?: string;
  /** 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。 */
  TaskStatuses?: string;
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 返回数量，默认20，最大值为100。 */
  Limit?: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeDBDiagReportTasksResponse {
  /** 任务总数目。 */
  TotalCount?: number;
  /** 任务列表。 */
  Tasks?: HealthReportTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBPerfTimeSeriesRequest {
  /** 需要获取性能趋势的实例ID。 */
  InstanceId: string;
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
  /** 指标名称，多个指标之间用逗号分隔。 */
  Metric: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB */
  Product: string;
  /** 需要获取性能趋势的集群ID。 */
  ClusterId?: string;
  /** 性能数据统计粒度。 */
  Period?: number;
  /** 实列节点ID。 */
  InstanceNodeId?: string;
  /** 实列代理ID。 */
  InstanceProxyId?: string;
  /** 代理节点ID。 */
  ProxyId?: string;
}

declare interface DescribeDBPerfTimeSeriesResponse {
  /** 实列性能数据。 */
  Data?: MonitorMetricSeriesData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSpaceStatusRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 时间段天数，截止日期为当日，默认为7天。 */
  RangeDays?: number;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，"mongodb" - 云数据库 MongoDB，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeDBSpaceStatusResponse {
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

declare interface DescribeDiagDBInstancesRequest {
  /** 是否是DBbrain支持的实例，固定传 true。 */
  IsSupported: boolean;
  /** 服务产品类型，支持值包括："mysql" - 云数据库 MySQL，"cynosdb" - 云数据库 TDSQL-C for MySQL，"dbbrain-mysql" - 自建 MySQL，"redis" - 云数据库 Redis，默认为"mysql"。 */
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
  TotalCount?: number;
  /** 全实例巡检状态：0：开启全实例巡检；1：未开启全实例巡检。 */
  DbScanStatus?: number;
  /** 实例相关信息。 */
  Items?: InstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHealthScoreRequest {
  /** 需要获取健康得分的实例ID。 */
  InstanceId: string;
  /** 获取健康得分的时间，时间格式如：2019-09-10 12:13:14。 */
  Time: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，默认为"mysql"。 */
  Product: string;
}

declare interface DescribeHealthScoreResponse {
  /** 健康得分以及异常扣分项。 */
  Data?: HealthScoreInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHealthScoreTimeSeriesRequest {
  /** 开始时间，如“2021-05-27 00:00:00”，支持的最早查询时间为当前时间的前30天。 */
  StartTime: string;
  /** 结束时间，如“2021-05-27 01:00:00”，支持的最早查询时间为当前时间的前30天。 */
  EndTime: string;
  /** 实例ID列表。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括："mysql" - 云数据库 MySQL，"redis" - 云数据库 Redis，"mariadb"-数据库mariadb 默认为"mysql"。 */
  Product: string;
}

declare interface DescribeHealthScoreTimeSeriesResponse {
  /** 健康得分趋势数据 */
  Data?: HealthScoreTimeSeriesData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIndexRecommendAggregationSlowLogsRequest {
  /** 服务产品类型，支持值包括："mongodb" - 云数据库 。 */
  Product: string;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 数据库名称。 */
  Db: string;
  /** 表名。 */
  Collection: string;
  /** 签名。这个值是 [DescribeIndexRecommendInfo](https://cloud.tencent.com/document/product/1130/98911) 接口返回 */
  Signs: string[];
}

declare interface DescribeIndexRecommendAggregationSlowLogsResponse {
  /** 查询实例慢查询聚合结果。 */
  Aggregation?: Aggregation;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIndexRecommendInfoRequest {
  /** 服务产品类型，支持值包括："mongodb" - 云数据库 。 */
  Product: string;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
}

declare interface DescribeIndexRecommendInfoResponse {
  /** 索引推荐的集合数量。 */
  CollectionNum?: number;
  /** 索引推荐的索引数量。 */
  IndexNum?: number;
  /** 索引项。 */
  Items?: MongoDBIndex[];
  /** 优化级别，1-4，优先级从高到低。 */
  Level?: number;
  /** 历史优化数。 */
  Optimized?: number;
  /** 累计优化条数。 */
  OptimizedCount?: number;
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
  ProfileList?: UserProfile[];
  /** 邮件配置总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMetricTopProxiesRequest {
  /** 开始时间，如“2021-05-27 00:00:00”，支持的最早查询时间为当前时间的前30天。 */
  StartTime: string;
  /** 结束时间，如“2021-05-27 01:00:00”，支持的最早查询时间为当前时间的前30天。 */
  EndTime: string;
  /** 实例ID列表。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括："mysql" - 云数据库 MySQL，"redis" - 云数据库 Redis，"mariadb"-数据库mariadb 默认为"mysql"。 */
  Product: string;
  /** 指标 eg: cpu_util, connections */
  Metric: string;
  /** 默认前20条 */
  Limit?: number;
}

declare interface DescribeMetricTopProxiesResponse {
  /** 命令列表 */
  Data?: RedisMetricTopProxiesData[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMySqlProcessListRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 线程的ID，用于筛选线程列表。 */
  ID?: number;
  /** 线程的操作账号名，用于筛选线程列表。 */
  User?: string;
  /** 线程的操作主机地址，用于筛选线程列表。 */
  Host?: string;
  /** 线程的操作数据库，用于筛选线程列表。 */
  DB?: string;
  /** 线程的操作状态，用于筛选线程列表。包含以下值：Sending data，Updating, Opening tables 等 */
  State?: string;
  /** 线程的操作状态，用于筛选线程列表。包含以下值：Sending data，Updating, Opening tables 等 */
  Command?: string;
  /** 线程的操作时长最小值，单位秒，用于筛选操作时长大于该值的线程列表。 */
  Time?: number;
  /** 线程的操作语句，用于筛选线程列表。 */
  Info?: string;
  /** 返回数量，默认20。 */
  Limit?: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
  /** 会话统计的维度信息,可以多个维度。 */
  StatDimensions?: StatDimension[];
}

declare interface DescribeMySqlProcessListResponse {
  /** 实时线程列表。 */
  ProcessList?: MySqlProcess[];
  /** sql会话统计信息。 */
  Statistics?: StatisticInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNoPrimaryKeyTablesRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
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
  /** 按照某字段排序。支持值包括："AllConn"，"ActiveConn"，"Ip"。 */
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
  Tasks?: TaskInfo[];
  /** 任务总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisBigKeyAnalysisTasksRequest {
  /** 服务产品类型，支持值包括 "redis" - 云数据库 Redis。 */
  Product: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 查询数目，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeRedisBigKeyAnalysisTasksResponse {
  /** 任务总数。 */
  TotalCount?: number;
  /** 任务列表。 */
  Tasks?: RedisBigKeyTask[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisCmdPerfTimeSeriesRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，仅仅支持值 "redis" - 云数据库 Redis。 */
  Product: string;
  /** 开始时间，如“2025-03-17T00:00:00+00:00”。0天 < 当前服务器时间 - 开始时间 <= 10天。 */
  StartTime: string;
  /** 结束时间，如“2025-03-17T01:00:00+00:00”，0天 < 结束时间 - 开始时间 <= 10天。 */
  EndTime: string;
  /** 需要分析的redis命令 */
  CommandList: string[];
  /** 监控指标，包括：qps,latency_p99,latency_avg,latency_max，以逗号分隔其中：qps - 每秒查询率 latency_p99 - 99分位延迟 latency_avg - 平均延迟 latency_max - 最大延迟 */
  Metric: string;
  /** Period，监控指标时间粒度，单位秒，若不提供则根据开始时间和结束时间取默认值 */
  Period?: number;
}

declare interface DescribeRedisCmdPerfTimeSeriesResponse {
  /** redis命令延迟趋势 */
  CmdPerfList?: CmdPerfInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisCommandCostStatisticsRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 开始时间，如“2025-03-17T00:00:00+00:00”。0天 < 当前服务器时间 - 开始时间 <= 10天。 */
  StartTime: string;
  /** 结束时间，如“2025-03-17T01:00:00+00:00”，0天 < 结束时间 - 开始时间 <= 10天。 */
  EndTime: string;
  /** 服务产品类型，仅仅支持值 "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface DescribeRedisCommandCostStatisticsResponse {
  /** redis延迟分布区间 */
  CmdCostGroups?: CmdCostGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisCommandOverviewRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 开始时间，如“2025-03-17T00:00:00+00:00”。0天 < 当前服务器时间 - 开始时间 <= 10天。 */
  StartTime: string;
  /** 结束时间，如“2025-03-17T01:00:00+00:00”，0天 < 结束时间 - 开始时间 <= 10天。 */
  EndTime: string;
  /** 服务产品类型，仅仅支持值 "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface DescribeRedisCommandOverviewResponse {
  /** redis访问命令统计 */
  CmdList?: RedisCmdInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisProcessListRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括 "redis" - 云数据库 Redis。 */
  Product: string;
  /** 查询的Proxy节点数量上限，默认值为20，最大值为50。 */
  Limit?: number;
  /** Proxy节点的偏移量，默认值为0。 */
  Offset?: number;
}

declare interface DescribeRedisProcessListResponse {
  /** 该实例的Proxy节点数量，可用于分页查询。 */
  ProxyCount?: number;
  /** 实时会话详情列表。 */
  Processes?: Process[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisSlowLogTopSqlsRequest {
  /** 实例 ID 。 */
  InstanceId: string;
  /** 开始时间，如“2019-09-10 12:13:14”。 */
  StartTime: string;
  /** 截止时间，如“2019-09-11 10:13:14”，截止时间与开始时间的间隔小于7天。 */
  EndTime: string;
  /** 服务产品类型，支持值： "redis" - 云数据库 Redis。 */
  Product: string;
  /** Redis Proxy节点ID。 */
  InstanceProxyId?: string;
  /** 排序键，支持ExecTimes,QueryTime,QueryTimeMax,QueryTimeAvg等排序键，默认为QueryTime。 */
  SortBy?: string;
  /** 排序方式，支持ASC（升序）以及DESC（降序），默认为DESC。 */
  OrderBy?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeRedisSlowLogTopSqlsResponse {
  /** 符合条件的记录总数。 */
  TotalCount?: number;
  /** 慢日志 top sql 列表。 */
  Rows?: SlowLogAgg[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisTopBigKeysRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
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
  /** 异步任务ID。当为空时，选择最近任务的ID。 */
  AsyncRequestId?: number;
  /** 分片节点序号列表。当列表为空时，选择所有分片节点。 */
  ShardIds?: number[];
}

declare interface DescribeRedisTopBigKeysResponse {
  /** top key列表。 */
  TopKeys?: RedisKeySpaceData[];
  /** 采集时间戳（秒）。 */
  Timestamp?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisTopCostCommandsRequest {
  /** 开始时间，如“2021-05-27 00:00:00”，支持的最早查询时间为当前时间的前30天。 */
  StartTime: string;
  /** 结束时间，如“2021-05-27 01:00:00”，支持的最早查询时间为当前时间的前30天。 */
  EndTime: string;
  /** 实例ID列表。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括："mysql" - 云数据库 MySQL，"redis" - 云数据库 Redis，"mariadb"-数据库mariadb 默认为"mysql"。 */
  Product: string;
  /** 默认前20条 */
  Limit?: number;
}

declare interface DescribeRedisTopCostCommandsResponse {
  /** 命令列表 */
  TopCostCmdList?: RedisCostCmd[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedisTopHotKeysRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 开始时间，如“2024-09-22T00:00:00+00:00”。0天 < 当前服务器时间 - 开始时间 <= 10天。 */
  StartTime: string;
  /** 结束时间，如“2024-09-22T01:00:00+00:00”，0天 < 结束时间 - 开始时间 <= 10天。 */
  EndTime: string;
  /** 服务产品类型，仅仅支持值 "redis" - 云数据库 Redis。 */
  Product: string;
  /** Redis 节点数组。 */
  InstanceNodeIds?: string[];
  /** top 数目，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeRedisTopHotKeysResponse {
  /** 热Key分析结果 */
  TopHotKeys?: TopHotKeys[];
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
  /** 查询数目，默认为20，最大值为500。 */
  Limit?: number;
  /** 分片ID数组。 */
  ShardIds?: number[];
}

declare interface DescribeRedisTopKeyPrefixListResponse {
  /** top key前缀列表。 */
  Items?: RedisPreKeySpaceData[];
  /** 采集时间戳（秒）。 */
  Timestamp?: number;
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

declare interface DescribeSlowLogQueryTimeStatsRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 开始时间，如“2019-09-10 12:13:14”，截止时间与开始时间的间隔小于7天。 */
  StartTime: string;
  /** 截止时间，如“2019-09-11 10:13:14”，截止时间与开始时间的间隔小于7天。 */
  EndTime: string;
  /** "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，默认为"mysql"。 */
  Product: string;
  /** Proxy节点ID。 */
  InstanceProxyId?: string;
  /** 实例节点ID。 */
  InstanceNodeId?: string;
  /** 查询类型，目前支持值：mongod，mongos。其中：mongod - MongoDB的数据存储节点mongos - MongoDB的路由节点 */
  Type?: string;
}

declare interface DescribeSlowLogQueryTimeStatsResponse {
  /** 符合条件的记录总数。 */
  TotalCount?: number;
  /** 慢日志 top sql 列表。 */
  Items?: SqlCostDistribution[];
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
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，默认为"mysql"。 */
  Product?: string;
  /** Proxy节点ID。 */
  InstanceProxyId?: string;
  /** 实列节点ID。 */
  InstanceNodeId?: string;
  /** 查询类型，目前支持值：mongod，mongos。 */
  Type?: string;
}

declare interface DescribeSlowLogTimeSeriesStatsResponse {
  /** 柱间单位时间间隔，单位为秒。 */
  Period?: number;
  /** 单位时间间隔内慢日志数量统计。 */
  TimeSeries?: TimeSlice[];
  /** 单位时间间隔内的实例 cpu 利用率监控数据。 */
  SeriesData?: MonitorMetricSeriesData;
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
  /** SQL模板的MD5值 */
  Md5?: string;
}

declare interface DescribeSlowLogUserHostStatsResponse {
  /** 来源地址数目。 */
  TotalCount?: number;
  /** 各来源地址的慢日志占比详情列表。 */
  Items?: SlowLogHost[];
  /** 各来源用户名的慢日志占比详情列表。 */
  UserNameItems?: SlowLogUser[];
  /** 来源用户数目。 */
  UserTotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowLogsRequest {
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product: string;
  /** 实例id。 */
  InstanceId: string;
  /** sql模板的md5值 */
  Md5: string;
  /** 开始时间，如“2019-09-10 12:13:14”。 */
  StartTime: string;
  /** 截止时间，如“2019-09-11 10:13:14”，截止时间与开始时间的间隔小于7天。 */
  EndTime: string;
  /** 偏移量，默认为0。 */
  Offset: number;
  /** 查询数目，默认为20，最大为100。 */
  Limit: number;
  /** 数据库列表 */
  DB?: string[];
  /** 关键字 */
  Key?: string[];
  /** 用户 */
  User?: string[];
  /** IP */
  Ip?: string[];
  /** 耗时区间,耗时区间的左右边界分别对应数组的第0个元素和第一个元素 */
  Time?: number[];
}

declare interface DescribeSlowLogsResponse {
  /** 符合条件的记录总数。 */
  TotalCount?: number;
  /** 慢日志明细 */
  Rows?: SlowLogInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSqlFiltersRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 任务ID列表，用于筛选任务列表。 */
  FilterIds?: number[];
  /** 任务状态列表，用于筛选任务列表，取值包括RUNNING - 运行中, FINISHED - 已完成, TERMINATED - 已终止。 */
  Statuses?: string[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeSqlFiltersResponse {
  /** 限流任务总数目。 */
  TotalCount?: number;
  /** 限流任务列表。 */
  Items?: SQLFilter[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSqlTemplateRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
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
  Schema?: string;
  /** SQL语句。 */
  SqlText?: string;
  /** SQL类型。 */
  SqlType?: string;
  /** SQL模板内容。 */
  SqlTemplate?: string;
  /** SQL模板ID。 */
  SqlId?: number;
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
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 返回的Top库数量，最大值为100，默认为20。 */
  Limit?: number;
  /** 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。其中：DataLength - 数据长度 IndexLength - 索引长度 TotalLength - 总长度 DataFree - 空闲空间 FragRatio - 碎片率 TableRows - 表行数 PhysicalFileSize - 物理文件大小 */
  SortBy?: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeTopSpaceSchemasResponse {
  /** 返回的Top库空间统计信息列表。 */
  TopSpaceSchemas?: SchemaSpaceData[];
  /** 采集库空间数据的时间戳（秒）。 */
  Timestamp?: number;
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
  TopSpaceTableTimeSeries?: TableSpaceTimeSeries[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopSpaceTablesRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 返回的Top表数量，最大值为100，默认为20。 */
  Limit?: number;
  /** 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。其中：DataLength - 数据长度 IndexLength - 索引长度 TotalLength - 总长度 DataFree - 空闲空间 FragRatio - 碎片率 TableRows - 表行数 PhysicalFileSize - 物理文件大小 */
  SortBy?: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface DescribeTopSpaceTablesResponse {
  /** 返回的Top表空间统计信息列表。 */
  TopSpaceTables?: TableSpaceData[];
  /** 采集表空间数据的时间戳（秒）。 */
  Timestamp?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserAutonomyProfileRequest {
  /** 配置类型，为需要配置的功能枚举值，目前包含一下枚举值：AutonomyGlobal（自治功能全局配置）、RedisAutoScaleUp（Redis自治扩容配置）。 */
  ProfileType: string;
  /** 实列ID。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
}

declare interface DescribeUserAutonomyProfileResponse {
  /** 配置类型，为需要配置的功能枚举值，目前包含一下枚举值：AutonomyGlobal（自治功能全局配置）、RedisAutoScaleUp（Redis自治扩容配置）。 */
  ProfileType?: string;
  /** 更新时间。 */
  UpdateTime?: string;
  /** 自治用户配置。 */
  ProfileInfo?: AutonomyUserProfileInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserSqlAdviceRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
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
  Advices?: string;
  /** SQL优化建议备注，可解析为String数组，无需优化时输出为空。 */
  Comments?: string;
  /** SQL语句。 */
  SqlText?: string;
  /** 库名。 */
  Schema?: string;
  /** 相关表的DDL信息，可解析为JSON数组。 */
  Tables?: string;
  /** SQL执行计划，可解析为JSON，无需优化时输出为空。 */
  SqlPlan?: string;
  /** SQL优化后的成本节约详情，可解析为JSON，无需优化时输出为空。 */
  Cost?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillMySqlThreadsRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** kill会话任务的阶段，取值包括："Prepare"-准备阶段，"Commit"-提交阶段。 */
  Stage: string;
  /** 需要kill的sql会话ID列表，通过接口[查询实时线程列表](https://cloud.tencent.com/document/product/1130/57824)此参数用于Prepare阶段。 */
  Threads?: number[];
  /** 执行ID，此参数用于Commit阶段。 */
  SqlExecId?: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
  Product?: string;
  /** 默认是true，会记录下kill的记录；该参数为true, 则在kill操作前校验目标会话是否存在，存在则继续kill，否则取消kill。为了加快kill速度，可设置为false。 */
  RecordHistory?: boolean;
}

declare interface KillMySqlThreadsResponse {
  /** kill完成的sql会话ID列表。 */
  Threads?: number[];
  /** 执行ID， Prepare阶段的任务输出，用于Commit阶段中指定执行kill操作的会话ID。 */
  SqlExecId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmPolicyRequest {
  /** 策略类型，固定值：instance， instance-代表实例类型策略 */
  ApplyType: string;
  /** 策略是否开启，0-代表开启，1-代表关闭 */
  Enable: number;
  /** 实例id列表，可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceIds: InstanceID[];
  /** User-动态关联该用户所有实例Instance-关联实例列表的实例 */
  NewProfileLevel: string;
  /** 新策略名，包含中文英文数字，长度在60个字符以内，不能以“_”开头。 */
  NewProfileName: string;
  /** 旧策略名，包含中文英文数字，长度在60个字符以内，不能以“_”开头。 */
  ProfileName: string;
  /** 策略类型，固定值：alarm_policy */
  ProfileType: string;
  /** 备注 */
  Remark: string;
  /** 规则类型 0-快速，1-自定义 若值为0，则QuickRule不能为空，若值为1，则Rules 不能为空 */
  RuleType: number;
  /** 接受模板 */
  TemplateInfo: TemplateInfo[];
  /** 快速规则 支持包括fatal-致命, critical-严重,warning-告警,information-通知，与Rules互斥 */
  QuickRule?: string;
  /** 自定义规则，与QuickRule互斥。 */
  Rules?: AlarmsRules[];
}

declare interface ModifyAlarmPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAuditServiceRequest {
  /** 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB。 */
  Product: string;
  /** 与Product保持一致。如："dcdb" ,"mariadb"。 */
  NodeRequestType: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 日志保存总时长，只能是7,30,90,180,365,1095,1825。 */
  LogExpireDay: number;
  /** 高频日志保存时长，只能是7,30,90,180,365,1095,1825。 */
  HotLogExpireDay: number;
}

declare interface ModifyAuditServiceResponse {
  /** 审计配置修改结果，0-修改成功,非0-修改失败。 */
  Success?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDiagDBInstanceConfRequest {
  /** 实例配置，包括巡检、概览开关等。 */
  InstanceConfs: InstanceConfs;
  /** 生效实例地域，固定为"All"，代表全地域。 */
  Regions: string;
  /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，"redis" - 云数据库 Redis。 */
  Product: string;
  /** 指定更改巡检状态的实例ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceIds?: string[];
}

declare interface ModifyDiagDBInstanceConfResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySqlFiltersRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** SQL限流任务ID列表。可通过接口[查询实例SQL限流任务列表](https://cloud.tencent.com/document/product/1130/72831)获得。 */
  FilterIds: number[];
  /** 限流任务状态，仅支持传参TERMINATED - 终止。 */
  Status: string;
  /** 通过 [VerifyUserAccount](https://cloud.tencent.com/document/product/1130/72828) 获取有效期为5分钟的会话token，使用后会自动延长token有效期至五分钟后。 */
  SessionToken?: string;
  /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，默认为"mysql"。 */
  Product?: string;
}

declare interface ModifySqlFiltersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserAutonomyProfileRequest {
  /** 配置类型，为需要配置的功能枚举值，目前包含一下枚举值：AutonomyGlobal（自治功能全局配置）、RedisAutoScaleUp（Redis自治扩容配置） */
  ProfileType: string;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，支持值包括： "redis" - 云数据库 Redis。 */
  Product: string;
  /** 自治功能相关配置，标准JSON字符串格式。 */
  NewProfileInfo?: string;
}

declare interface ModifyUserAutonomyProfileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenAuditServiceRequest {
  /** 服务产品类型，支持值包括： "dcdb" - 云数据库 Tdsql， "mariadb" - 云数据库 MariaDB。 */
  Product: string;
  /** 与Product保持一致。如："dcdb" ,"mariadb"。 */
  NodeRequestType: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 日志保存总时长，只能是7,30,90,180,365,1095,1825。 */
  LogExpireDay: number;
  /** 高频日志保存时长，只能是7,30,90,180,365,1095,1825。 */
  HotLogExpireDay: number;
}

declare interface OpenAuditServiceResponse {
  /** taskId 为0表示开通审计成功，否则开通失败 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAgentSwitchRequest {
  /** Agent标识。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  AgentId: string;
  /** 停止或重连Agent，支持值包括："on" - 重连Agent， "off" - 停止Agent。 */
  Switch: string;
  /** 服务产品类型，仅支持 "dbbrain-mysql" - 自建MySQL。 */
  Product: string;
}

declare interface UpdateAgentSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateMonitorSwitchRequest {
  /** 停止或重连Agent实例，支持值包括："on" - 重连实例， "off" - 停止实例。 */
  Switch: string;
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
  InstanceId: string;
  /** 服务产品类型，仅支持 "dbbrain-mysql" - 自建MySQL。 */
  Product: string;
}

declare interface UpdateMonitorSwitchResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface VerifyUserAccountRequest {
  /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
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
  SessionToken?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20191016 {
  type VersionHeader = { headers: { 'X-TC-Version': '2019-10-16' } }

  /** 联系人contact描述。 */
  interface ContactItem {
    /** 联系人id。 */
    Id?: number;
    /** 联系人姓名。 */
    Name?: string;
    /** 联系人绑定的邮箱。 */
    Mail?: string;
  }

  /** 实例诊断历史事件 */
  interface DiagHistoryEventItem {
    /** 诊断类型。 */
    DiagType?: string;
    /** 结束时间。 */
    EndTime?: string;
    /** 开始时间。 */
    StartTime?: string;
    /** 事件 ID 。 */
    EventId?: number;
    /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
    Severity?: number;
    /** 概要。 */
    Outline?: string;
    /** 诊断项。 */
    DiagItem?: string;
    /** 实例 ID 。 */
    InstanceId?: string;
    /** 保留字段 */
    Metric?: string;
    /** 地域 */
    Region?: string;
  }

  /** 异常事件信息。 */
  interface EventInfo {
    /** 事件 ID 。 */
    EventId?: number;
    /** 诊断类型。 */
    DiagType?: string;
    /** 开始时间。 */
    StartTime?: string;
    /** 结束时间。 */
    EndTime?: string;
    /** 概要。 */
    Outline?: string;
    /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
    Severity?: number;
    /** 扣分。 */
    ScoreLost?: number;
    /** 保留字段。 */
    Metric?: string;
    /** 告警数目。 */
    Count?: number;
  }

  /** 描述组信息。 */
  interface GroupItem {
    /** 组id。 */
    Id?: number;
    /** 组名称。 */
    Name?: string;
    /** 组成员数量。 */
    MemberCount?: number;
  }

  /** 健康报告任务详情。 */
  interface HealthReportTask {
    /** 异步任务请求 ID。 */
    AsyncRequestId?: number;
    /** 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 定时生成；"MANUAL" - 手动触发。 */
    Source?: string;
    /** 任务完成进度，单位%。 */
    Progress?: number;
    /** 任务创建时间，格式: "yyyy-MM-dd HH:mm:ss"。 */
    CreateTime?: string;
    /** 任务开始执行时间，格式: "yyyy-MM-dd HH:mm:ss"。 */
    StartTime?: string;
    /** 任务完成执行时间，格式: "yyyy-MM-dd HH:mm:ss"。 */
    EndTime?: string;
    /** 任务所属实例的基础信息。 */
    InstanceInfo?: InstanceBasicInfo;
    /** 健康报告中的健康信息。 */
    HealthStatus?: HealthStatus;
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
    HealthScore?: number;
    /** 健康等级，取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK"- 危险；"HIGH_RISK" - 高危。 */
    HealthLevel?: string;
    /** 总扣分分数。 */
    ScoreLost?: number;
    /** 扣分详情。 */
    ScoreDetails?: ScoreDetail[];
    /** 健康等级版本，默认为V1 */
    HealthLevelVersion?: string;
  }

  /** 实例基础信息。 */
  interface InstanceBasicInfo {
    /** 实例ID。 */
    InstanceId?: string;
    /** 实例名称。 */
    InstanceName?: string;
    /** 实例内网IP。 */
    Vip?: string;
    /** 实例内网Port。 */
    Vport?: number;
    /** 实例产品。 */
    Product?: string;
    /** 实例引擎版本。 */
    EngineVersion?: string;
    /** CPU数量，对于Redis为0。 */
    Cpu?: number;
    /** 实例部署模式，取值包括"CUSTOM", "EXCLUSIVE", "CUSTOMER_AGENT", "CUSTOMER_DIRECT","CLOUD_NATIVE_CLUSTER_EXCLUSIVE", "CLOUD_NATIVE_CLUSTER"。 */
    DeployMode?: string;
    /** 实例内存配置。 */
    InstanceConf?: RedisInstanceConf;
    /** DBbrain是否支持该实例。 */
    IsSupported?: boolean;
    /** 实例内存，单位MB。 */
    Memory?: number;
    /** 实例地域。 */
    Region?: string;
    /** 实例子网统一ID，对于redis为空字符串。 */
    UniqSubnetId?: string;
    /** 实例私有网络统一ID，对于redis为空字符串。 */
    UniqVpcId?: string;
    /** 实例磁盘容量，对于Redis为0。 */
    Volume?: number;
  }

  /** 实例配置。 */
  interface InstanceConfs {
    /** 数据库巡检开关, Yes/No。 */
    DailyInspection?: string;
    /** 实例概览开关，Yes/No。 */
    OverviewDisplay?: string;
    /** redis大key分析的自定义分割符，仅redis使用 */
    KeyDelimiters?: string[];
  }

  /** 查询实例列表，返回实例的相关信息的对象。 */
  interface InstanceInfo {
    /** 实例ID。 */
    InstanceId?: string;
    /** 实例名称。 */
    InstanceName?: string;
    /** 实例所属地域。 */
    Region?: string;
    /** 健康得分。 */
    HealthScore?: number;
    /** 所属产品。 */
    Product?: string;
    /** 异常事件数量。 */
    EventCount?: number;
    /** 实例类型：1:MASTER；2:DR，3：RO，4:SDR。 */
    InstanceType?: number;
    /** 核心数。 */
    Cpu?: number;
    /** 内存，单位MB。 */
    Memory?: number;
    /** 硬盘存储，单位GB。 */
    Volume?: number;
    /** 数据库版本。 */
    EngineVersion?: string;
    /** 内网地址。 */
    Vip?: string;
    /** 内网端口。 */
    Vport?: number;
    /** 接入来源。 */
    Source?: string;
    /** 分组ID。 */
    GroupId?: string;
    /** 分组组名。 */
    GroupName?: string;
    /** 实例状态：0：发货中；1：运行正常；4：销毁中；5：隔离中。 */
    Status?: number;
    /** 子网统一ID。 */
    UniqSubnetId?: string;
    /** cdb类型。 */
    DeployMode?: string;
    /** cdb实例初始化标志：0：未初始化；1：已初始化。 */
    InitFlag?: number;
    /** 任务状态。 */
    TaskStatus?: number;
    /** 私有网络统一ID。 */
    UniqVpcId?: string;
    /** 实例巡检/概览的状态。 */
    InstanceConf?: InstanceConfs;
    /** 资源到期时间。 */
    DeadlineTime?: string;
    /** 是否是DBbrain支持的实例。 */
    IsSupported?: boolean;
    /** 实例安全审计日志开启状态：ON： 安全审计开启；OFF： 未开启安全审计。 */
    SecAuditStatus?: string;
    /** 实例审计日志开启状态，ALL_AUDIT： 开启全审计；RULE_AUDIT： 开启规则审计；UNBOUND： 未开启审计。 */
    AuditPolicyStatus?: string;
    /** 实例审计日志运行状态：normal： 运行中； paused： 欠费暂停。 */
    AuditRunningStatus?: string;
    /** 内网vip。 */
    InternalVip?: string;
    /** 内网port。 */
    InternalVport?: number;
    /** 创建时间。 */
    CreateTime?: string;
    /** 所属集群ID（仅对集群数据库产品该字段非空，如TDSQL-C）。 */
    ClusterId?: string;
    /** 所属集群名称（仅对集群数据库产品该字段非空，如TDSQL-C）。 */
    ClusterName?: string;
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
    /** 地域配置, 如["ap-guangzhou", "ap-shanghai"]。巡检的邮件发送模板，配置需要发送巡检邮件的地域；订阅的邮件发送模板，配置当前订阅实例的所属地域。 */
    Region: string[];
    /** 包含的健康等级，包括值：HEALTH-健康，SUB_HEALTH-亚健康，RISK-风险，HIGH_RISK-高危。 */
    HealthStatus: string[];
    /** 联系人id, 联系人/联系组不能都为空。 */
    ContactPerson?: number[];
    /** 联系组id, 联系人/联系组不能都为空。 */
    ContactGroup?: number[];
  }

  /** 监控数据（浮点型） */
  interface MonitorFloatMetric {
    /** 指标名称。 */
    Metric?: string;
    /** 指标单位。 */
    Unit?: string;
    /** 指标值。 */
    Values?: number[];
  }

  /** 单位时间间隔内的监控指标数据（浮点型） */
  interface MonitorFloatMetricSeriesData {
    /** 监控指标。 */
    Series?: MonitorFloatMetric[];
    /** 监控指标对应的时间戳。 */
    Timestamp?: number[];
  }

  /** 监控数据 */
  interface MonitorMetric {
    /** 指标名称。 */
    Metric?: string;
    /** 指标单位。 */
    Unit?: string;
    /** 指标值。 */
    Values?: number[];
  }

  /** 单位时间间隔内的监控指标数据 */
  interface MonitorMetricSeriesData {
    /** 监控指标。 */
    Series?: MonitorMetric[];
    /** 监控指标对应的时间戳。（精度：秒） */
    Timestamp?: number[];
  }

  /** 关系型数据库线程 */
  interface MySqlProcess {
    /** 线程ID。 */
    ID?: string;
    /** 线程的操作账号名。 */
    User?: string;
    /** 线程的操作主机地址。 */
    Host?: string;
    /** 线程的操作数据库。 */
    DB?: string;
    /** 线程的操作状态。 */
    State?: string;
    /** 线程的执行类型。 */
    Command?: string;
    /** 线程的操作时长，单位秒。 */
    Time?: string;
    /** 线程的操作语句。 */
    Info?: string;
  }

  /** 用户配置的信息 */
  interface ProfileInfo {
    /** 语言类型, 包含“zh”-中文，“en”-英文。 */
    Language: string;
    /** 邮件模板的内容。 */
    MailConfiguration: MailConfiguration;
  }

  /** Redis实例内存配置参数 */
  interface RedisInstanceConf {
    /** 副本数量 */
    ReplicasNum?: string;
    /** 分片数量 */
    ShardNum?: string;
    /** 分片内存大小，单位MB */
    ShardSize?: string;
  }

  /** SchemaItem数组 */
  interface SchemaItem {
    /** 数据库名称 */
    Schema: string;
  }

  /** 库空间统计数据。 */
  interface SchemaSpaceData {
    /** 库名。 */
    TableSchema?: string;
    /** 数据空间（MB）。 */
    DataLength?: number;
    /** 索引空间（MB）。 */
    IndexLength?: number;
    /** 碎片空间（MB）。 */
    DataFree?: number;
    /** 总使用空间（MB）。 */
    TotalLength?: number;
    /** 碎片率（%）。 */
    FragRatio?: number;
    /** 行数。 */
    TableRows?: number;
    /** 库中所有表对应的独立物理文件大小加和（MB）。 */
    PhysicalFileSize?: number;
  }

  /** 库空间时序数据 */
  interface SchemaSpaceTimeSeries {
    /** 库名 */
    TableSchema?: string;
    /** 单位时间间隔内的空间指标数据。 */
    SeriesData?: MonitorMetricSeriesData;
  }

  /** 扣分详情。 */
  interface ScoreDetail {
    /** 扣分项分类，取值包括：可用性、可维护性、性能及可靠性。 */
    IssueType?: string;
    /** 扣分总分。 */
    ScoreLost?: number;
    /** 扣分总分上限。 */
    ScoreLostMax?: number;
    /** 扣分项列表。 */
    Items?: ScoreItem[];
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
    AsyncRequestId?: number;
    /** 任务开始时间。 */
    StartTime?: string;
    /** 任务结束时间。 */
    EndTime?: string;
    /** 任务创建时间。 */
    CreateTime?: string;
    /** 任务状态。 */
    Status?: string;
    /** 任务执行进度。 */
    Progress?: number;
    /** 导出日志开始时间。 */
    LogStartTime?: string;
    /** 导出日志结束时间。 */
    LogEndTime?: string;
    /** 日志文件总大小，单位KB。 */
    TotalSize?: number;
    /** 风险等级列表。0 无风险；1 低风险；2 中风险；3 高风险。 */
    DangerLevels?: number[];
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
    LockTime?: number;
    /** 最大锁等待时间 */
    LockTimeMax?: number;
    /** 最小锁等待时间 */
    LockTimeMin?: number;
    /** 总扫描行数 */
    RowsExamined?: number;
    /** 最大扫描行数 */
    RowsExaminedMax?: number;
    /** 最小扫描行数 */
    RowsExaminedMin?: number;
    /** 总耗时 */
    QueryTime?: number;
    /** 最大执行时间 */
    QueryTimeMax?: number;
    /** 最小执行时间 */
    QueryTimeMin?: number;
    /** 总返回行数 */
    RowsSent?: number;
    /** 最大返回行数 */
    RowsSentMax?: number;
    /** 最小返回行数 */
    RowsSentMin?: number;
    /** 执行次数 */
    ExecTimes?: number;
    /** sql模板 */
    SqlTemplate?: string;
    /** 带参数SQL（随机） */
    SqlText?: string;
    /** 数据库名 */
    Schema?: string;
    /** 总耗时占比 */
    QueryTimeRatio?: number;
    /** sql总锁等待时间占比 */
    LockTimeRatio?: number;
    /** 总扫描行数占比 */
    RowsExaminedRatio?: number;
    /** 总返回行数占比 */
    RowsSentRatio?: number;
    /** 平均执行时间 */
    QueryTimeAvg?: number;
    /** 平均返回行数 */
    RowsSentAvg?: number;
    /** 平均锁等待时间 */
    LockTimeAvg?: number;
    /** 平均扫描行数 */
    RowsExaminedAvg?: number;
    /** SQL模板的MD5值 */
    Md5?: string;
  }

  /** 慢日志来源用户详情。 */
  interface SlowLogUser {
    /** 来源用户名。 */
    UserName?: string;
    /** 该来源用户名的慢日志数目占总数目的比例，单位%。 */
    Ratio?: number;
    /** 该来源用户名的慢日志数目。 */
    Count?: number;
  }

  /** 库表空间统计数据。 */
  interface TableSpaceData {
    /** 表名。 */
    TableName?: string;
    /** 库名。 */
    TableSchema?: string;
    /** 库表的存储引擎。 */
    Engine?: string;
    /** 数据空间（MB）。 */
    DataLength?: number;
    /** 索引空间（MB）。 */
    IndexLength?: number;
    /** 碎片空间（MB）。 */
    DataFree?: number;
    /** 总使用空间（MB）。 */
    TotalLength?: number;
    /** 碎片率（%）。 */
    FragRatio?: number;
    /** 行数。 */
    TableRows?: number;
    /** 表对应的独立物理文件大小（MB）。 */
    PhysicalFileSize?: number;
  }

  /** 库表空间时序数据 */
  interface TableSpaceTimeSeries {
    /** 表名。 */
    TableName?: string;
    /** 库名。 */
    TableSchema?: string;
    /** 库表的存储引擎。 */
    Engine?: string;
    /** 单位时间间隔内的空间指标数据。 */
    SeriesData?: MonitorFloatMetricSeriesData;
  }

  /** 单位时间间隔内的慢日志统计 */
  interface TimeSlice {
    /** 总数 */
    Count?: number;
    /** 统计开始时间 */
    Timestamp?: number;
  }

  /** 用户配置的相关信息，包括邮件配置。 */
  interface UserProfile {
    /** 配置的id。 */
    ProfileId?: string;
    /** 配置类型。 */
    ProfileType?: string;
    /** 配置级别，"User"或"Instance"。 */
    ProfileLevel?: string;
    /** 配置名称。 */
    ProfileName?: string;
    /** 配置详情。 */
    ProfileInfo?: ProfileInfo;
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
    Id?: number;
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
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，"mariadb" - 云数据库 MariaDB，"dcdb" - 云数据库 TDSQL MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface CreateDBDiagReportTaskResponse {
    /** 异步任务的请求 ID，可使用此 ID 查询异步任务的执行结果。 */
    AsyncRequestId?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDBDiagReportUrlRequest {
    /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。示例值：cdb-dctw4edd */
    InstanceId: string;
    /** 健康报告相应的任务ID，可通过[DescribeDBDiagReportTasks](https://cloud.tencent.com/document/product/1130/54873)查询。 */
    AsyncRequestId: number;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，"mariadb" - 云数据库 MariaDB，"dcdb" - 云数据库 TDSQL MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface CreateDBDiagReportUrlResponse {
    /** 健康报告浏览地址。 */
    ReportUrl?: string;
    /** 健康报告浏览地址到期时间戳（秒）。 */
    ExpireTime?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateMailProfileRequest {
    /** 邮件配置内容。 */
    ProfileInfo: ProfileInfo;
    /** 配置级别，支持值包括："User" - 用户级别，"Instance" - 实例级别，其中数据库巡检邮件配置为用户级别，定期生成邮件配置为实例级别。 */
    ProfileLevel: string;
    /** 配置名称，需要保持唯一性，数据库巡检邮件配置名称自拟；定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"scheduler_cdb-test"。 */
    ProfileName: string;
    /** 配置类型，支持值包括："dbScan_mail_configuration" - 数据库巡检邮件配置，"scheduler_mail_configuration" - 定期生成邮件配置。 */
    ProfileType: string;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，"mariadb" - 云数据库 MariaDB，"dcdb" - 云数据库 TDSQL MySQL，默认为"mysql"。 */
    Product: string;
    /** 配置绑定的实例ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。当配置级别为"Instance"时需要传入且只能为一个实例；当配置级别为“User”时，此参数不填。 */
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
    /** 配置名称，需要保持唯一性，定期生成邮件配置命名格式："scheduler_" + {instanceId}，如"scheduler_cdb-test"。 */
    ProfileName: string;
    /** 配置订阅的实例ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
    BindInstanceId: string;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，"mongodb" - 云数据库 MongoDB，"mariadb" - 云数据库 MariaDB，"dcdb" - 云数据库 TDSQL MySQL，默认为"mysql"。 */
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
    AsyncRequestId?: number;
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
    TotalCount?: number;
    /** 联系人的信息。 */
    Contacts?: ContactItem[];
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
    TotalCount?: number;
    /** 组信息。 */
    Groups?: GroupItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDBDiagEventRequest {
    /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
    InstanceId: string;
    /** 事件 ID 。通过“获取实例诊断历史[DescribeDBDiagHistory](https://cloud.tencent.com/document/product/1130/39559) ”获取。 */
    EventId?: number;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，"redis" - 云数据库 Redis，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeDBDiagEventResponse {
    /** 诊断项。 */
    DiagItem?: string;
    /** 诊断类型。支持值包括"高危账号","自增键耗尽","连接性检查","CPU利用率","死锁","全表扫描","高并发/压力请求","预编译语句过多","内存利用率","Metadata lock","磁盘超限","内存超限","只读锁","只读实例剔除","行锁","活跃会话","慢SQL","数据库快照","磁盘空间利用率","执行计划变化","主从切换","Table open cache命中率低","大表","事务未提交","事务导致复制延迟"等。 */
    DiagType?: string;
    /** 事件 ID 。 */
    EventId?: number;
    /** 事件详情。 */
    Explanation?: string;
    /** 概要。 */
    Outline?: string;
    /** 诊断出的问题。 */
    Problem?: string;
    /** 严重程度。严重程度分为5级，按影响程度从高至低分别为：1：致命，2：严重，3：告警，4：提示，5：健康。 */
    Severity?: number;
    /** 开始时间。格式: "yyyy-MM-dd HH:mm:ss" */
    StartTime?: string;
    /** 建议。 */
    Suggestions?: string;
    /** 保留字段。 */
    Metric?: string;
    /** 结束时间。格式: "yyyy-MM-dd HH:mm:ss" */
    EndTime?: string;
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
    /** 第一个任务的开始时间，用于范围查询，时间格式如：2019-09-10T12:13:14+08:00。 */
    StartTime?: string;
    /** 最后一个任务的开始时间，用于范围查询，时间格式如：2019-09-10T12:13:14+08:00。 */
    EndTime?: string;
    /** 实例ID数组，用于筛选指定实例的任务列表，可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
    InstanceIds?: string[];
    /** 任务的触发来源，支持的取值包括："DAILY_INSPECTION" - 实例巡检；"SCHEDULED" - 计划任务；"MANUAL" - 手动触发。 */
    Sources?: string[];
    /** 报告的健康等级，支持的取值包括："HEALTH" - 健康；"SUB_HEALTH" - 亚健康；"RISK" - 危险；"HIGH_RISK" - 高危。 */
    HealthLevels?: string;
    /** 任务的状态，支持的取值包括："created" - 新建；"chosen" - 待执行； "running" - 执行中；"failed" - 失败；"finished" - 已完成。 */
    TaskStatuses?: string;
    /** 偏移量，默认0。 */
    Offset?: number;
    /** 返回数量，默认20。 */
    Limit?: number;
    /** 服务产品类型，支持值："mysql" - 云数据库 MySQL；"cynosdb" - 云数据库 TDSQL-C for MySQL；"redis" - 云数据库 Redis，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeDBDiagReportTasksResponse {
    /** 任务总数目。 */
    TotalCount?: number;
    /** 任务列表。 */
    Tasks?: HealthReportTask[];
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
    TotalCount?: number;
    /** 全实例巡检状态：0：开启全实例巡检；1：未开启全实例巡检。 */
    DbScanStatus?: number;
    /** 实例相关信息。 */
    Items?: InstanceInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeHealthScoreRequest {
    /** 需要获取健康得分的实例ID。 */
    InstanceId: string;
    /** 获取健康得分的时间。 */
    Time: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 TDSQL-C for MySQL，"redis" - 云数据库 Redis，默认为"mysql"。 */
    Product: string;
  }

  interface DescribeHealthScoreResponse {
    /** 健康得分以及异常扣分项。 */
    Data?: HealthScoreInfo;
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
    ProfileList?: UserProfile[];
    /** 邮件模板总数。 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMySqlProcessListRequest {
    /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
    InstanceId: string;
    /** 线程的ID，用于筛选线程列表。 */
    ID?: number;
    /** 线程的操作账号名，用于筛选线程列表。 */
    User?: string;
    /** 线程的操作主机地址，用于筛选线程列表。 */
    Host?: string;
    /** 线程的操作数据库，用于筛选线程列表。 */
    DB?: string;
    /** 线程的操作状态，用于筛选线程列表。包含以下值：Sending data，Updating, Opening tables 等 */
    State?: string;
    /** 线程的执行类型，用于筛选线程列表。包含以下值：Sleep，Query ，Connect ，Binlog Dump等 */
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

  interface DescribeMySqlProcessListResponse {
    /** 实时线程列表。 */
    ProcessList?: MySqlProcess[];
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
    Urls?: string[];
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
    Tasks?: SecLogExportTaskInfo[];
    /** 安全审计日志导出任务总数。 */
    TotalCount?: number;
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
    /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
    InstanceId: string;
    /** 开始时间，如“2019-09-10 12:13:14”。 */
    StartTime: string;
    /** 截止时间，如“2019-09-10 12:13:14”，截止时间与开始时间的间隔最大可为7天。 */
    EndTime: string;
    /** 排序键，目前支持 QueryTime,ExecTimes,RowsSent,LockTime以及RowsExamined 等排序键。其中：QueryTime - 查询耗时 ExecTimes - 执行次数 RowsSent - 返回行数 LockTime - 锁等待时间 RowsExamined - 扫描行数 */
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
    TotalCount?: number;
    /** 各来源地址的慢日志占比详情列表。 */
    Items?: SlowLogHost[];
    /** 各来源用户名的慢日志占比详情列表。 */
    UserNameItems?: SlowLogUser[];
    /** 来源用户数目。 */
    UserTotalCount?: number;
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
    TopSpaceSchemaTimeSeries?: SchemaSpaceTimeSeries[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTopSpaceSchemasRequest {
    /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
    InstanceId: string;
    /** 返回的Top库数量，最大值为100，默认为20。 */
    Limit?: number;
    /** 筛选Top库所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。其中：DataLength - 数据长度 IndexLength - 索引长度 TotalLength - 总长度 DataFree - 空闲空间 FragRatio - 碎片率 TableRows - 表行数 PhysicalFileSize - 物理文件大小 */
    SortBy?: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeTopSpaceSchemasResponse {
    /** 返回的Top库空间统计信息列表。 */
    TopSpaceSchemas?: SchemaSpaceData[];
    /** 采集库空间数据的时间戳（秒）。 */
    Timestamp?: number;
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
    TopSpaceTableTimeSeries?: TableSpaceTimeSeries[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTopSpaceTablesRequest {
    /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
    InstanceId: string;
    /** 返回的Top表数量，最大值为100，默认为20。 */
    Limit?: number;
    /** 筛选Top表所用的排序字段，可选字段包含DataLength、IndexLength、TotalLength、DataFree、FragRatio、TableRows、PhysicalFileSize（仅云数据库 MySQL实例支持），云数据库 MySQL实例默认为 PhysicalFileSize，其他产品实例默认为TotalLength。DataLength - 数据长度 IndexLength - 索引长度 TotalLength - 总长度 DataFree - 空闲空间 FragRatio - 碎片率 TableRows - 表行数 PhysicalFileSize - 物理文件大小 */
    SortBy?: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL，默认为"mysql"。 */
    Product?: string;
  }

  interface DescribeTopSpaceTablesResponse {
    /** 返回的Top表空间统计信息列表。 */
    TopSpaceTables?: TableSpaceData[];
    /** 采集表空间数据的时间戳（秒）。 */
    Timestamp?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeUserSqlAdviceRequest {
    /** 实例 ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
    InstanceId: string;
    /** SQL语句。 */
    SqlText: string;
    /** 库名。 */
    Schema?: string;
  }

  interface DescribeUserSqlAdviceResponse {
    /** SQL优化建议，可解析为JSON数组。 */
    Advices?: string;
    /** SQL优化建议备注，可解析为String数组。 */
    Comments?: string;
    /** SQL语句。 */
    SqlText?: string;
    /** 库名。 */
    Schema?: string;
    /** 相关表的DDL信息，可解析为JSON数组。 */
    Tables?: string;
    /** SQL执行计划，可解析为JSON。 */
    SqlPlan?: string;
    /** SQL优化后的成本节约详情，可解析为JSON。 */
    Cost?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDiagDBInstanceConfRequest {
    /** 巡检开关。 */
    InstanceConfs: InstanceConfs;
    /** 生效实例地域，固定为"All"，代表全地域。 */
    Regions: string;
    /** 服务产品类型，支持值包括： "mysql" - 云数据库 MySQL， "cynosdb" - 云数据库 CynosDB for MySQL。 */
    Product: string;
    /** 指定更改巡检状态的实例ID。可通过 [DescribeDiagDBInstances](https://cloud.tencent.com/document/api/1130/57798) 接口获取。 */
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
  /** 终止自治任务（单次） {@link CancelDBAutonomyActionRequest} {@link CancelDBAutonomyActionResponse} */
  CancelDBAutonomyAction(data: CancelDBAutonomyActionRequest, config?: AxiosRequestConfig): AxiosPromise<CancelDBAutonomyActionResponse>;
  /** 终止自治事件 {@link CancelDBAutonomyEventRequest} {@link CancelDBAutonomyEventResponse} */
  CancelDBAutonomyEvent(data: CancelDBAutonomyEventRequest, config?: AxiosRequestConfig): AxiosPromise<CancelDBAutonomyEventResponse>;
  /** 终止中断会话任务 {@link CancelKillTaskRequest} {@link CancelKillTaskResponse} */
  CancelKillTask(data: CancelKillTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CancelKillTaskResponse>;
  /** 终止大Key任务 {@link CancelRedisBigKeyAnalysisTasksRequest} {@link CancelRedisBigKeyAnalysisTasksResponse} */
  CancelRedisBigKeyAnalysisTasks(data: CancelRedisBigKeyAnalysisTasksRequest, config?: AxiosRequestConfig): AxiosPromise<CancelRedisBigKeyAnalysisTasksResponse>;
  /** 关闭数据审计 {@link CloseAuditServiceRequest} {@link CloseAuditServiceResponse} */
  CloseAuditService(data: CloseAuditServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CloseAuditServiceResponse>;
  /** 创建审计日志文件 {@link CreateAuditLogFileRequest} {@link CreateAuditLogFileResponse} */
  CreateAuditLogFile(data: CreateAuditLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditLogFileResponse>;
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
  /** 创建redis实例即时大key分析任务 {@link CreateRedisBigKeyAnalysisTaskRequest} {@link CreateRedisBigKeyAnalysisTaskResponse} */
  CreateRedisBigKeyAnalysisTask(data: CreateRedisBigKeyAnalysisTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRedisBigKeyAnalysisTaskResponse>;
  /** 创建定期生成的邮件发送配置 {@link CreateSchedulerMailProfileRequest} {@link CreateSchedulerMailProfileResponse} */
  CreateSchedulerMailProfile(data: CreateSchedulerMailProfileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSchedulerMailProfileResponse>;
  /** 创建安全审计日志导出任务 {@link CreateSecurityAuditLogExportTaskRequest} {@link CreateSecurityAuditLogExportTaskResponse} */
  CreateSecurityAuditLogExportTask(data: CreateSecurityAuditLogExportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityAuditLogExportTaskResponse>;
  /** 创建实例SQL限流任务 {@link CreateSqlFilterRequest} {@link CreateSqlFilterResponse} */
  CreateSqlFilter(data: CreateSqlFilterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSqlFilterResponse>;
  /** 开启自治功能 {@link CreateUserAutonomyProfileRequest} {@link CreateUserAutonomyProfileResponse} */
  CreateUserAutonomyProfile(data: CreateUserAutonomyProfileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserAutonomyProfileResponse>;
  /** 删除审计日志文件 {@link DeleteAuditLogFileRequest} {@link DeleteAuditLogFileResponse} */
  DeleteAuditLogFile(data: DeleteAuditLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditLogFileResponse>;
  /** 删除健康报告生成任务 {@link DeleteDBDiagReportTasksRequest} {@link DeleteDBDiagReportTasksResponse} */
  DeleteDBDiagReportTasks(data: DeleteDBDiagReportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDBDiagReportTasksResponse>;
  /** 删除redis实例大key分析任务 {@link DeleteRedisBigKeyAnalysisTasksRequest} {@link DeleteRedisBigKeyAnalysisTasksResponse} */
  DeleteRedisBigKeyAnalysisTasks(data: DeleteRedisBigKeyAnalysisTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRedisBigKeyAnalysisTasksResponse>;
  /** 删除安全审计日志导出任务 {@link DeleteSecurityAuditLogExportTasksRequest} {@link DeleteSecurityAuditLogExportTasksResponse} */
  DeleteSecurityAuditLogExportTasks(data: DeleteSecurityAuditLogExportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityAuditLogExportTasksResponse>;
  /** 删除实例SQL限流任务 {@link DeleteSqlFiltersRequest} {@link DeleteSqlFiltersResponse} */
  DeleteSqlFilters(data: DeleteSqlFiltersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSqlFiltersResponse>;
  /** 通知模板查询 {@link DescribeAlarmTemplateRequest} {@link DescribeAlarmTemplateResponse} */
  DescribeAlarmTemplate(data: DescribeAlarmTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmTemplateResponse>;
  /** 获取邮件发送中联系人信息 {@link DescribeAllUserContactRequest} {@link DescribeAllUserContactResponse} */
  DescribeAllUserContact(data: DescribeAllUserContactRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllUserContactResponse>;
  /** 获取邮件发送中联系组信息 {@link DescribeAllUserGroupRequest} {@link DescribeAllUserGroupResponse} */
  DescribeAllUserGroup(data: DescribeAllUserGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllUserGroupResponse>;
  /** 查询实例列表 {@link DescribeAuditInstanceListRequest} {@link DescribeAuditInstanceListResponse} */
  DescribeAuditInstanceList(data: DescribeAuditInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditInstanceListResponse>;
  /** 查询审计日志文件 {@link DescribeAuditLogFilesRequest} {@link DescribeAuditLogFilesResponse} */
  DescribeAuditLogFiles(data: DescribeAuditLogFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogFilesResponse>;
  /** 查询自治事件任务详情 {@link DescribeDBAutonomyActionRequest} {@link DescribeDBAutonomyActionResponse} */
  DescribeDBAutonomyAction(data: DescribeDBAutonomyActionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBAutonomyActionResponse>;
  /** 查询自治事件任务列表 {@link DescribeDBAutonomyActionsRequest} {@link DescribeDBAutonomyActionsResponse} */
  DescribeDBAutonomyActions(data: DescribeDBAutonomyActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBAutonomyActionsResponse>;
  /** 查询自治事件列表 {@link DescribeDBAutonomyEventsRequest} {@link DescribeDBAutonomyEventsResponse} */
  DescribeDBAutonomyEvents(data: DescribeDBAutonomyEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBAutonomyEventsResponse>;
  /** 获取诊断事件详情 {@link DescribeDBDiagEventRequest} {@link DescribeDBDiagEventResponse} */
  DescribeDBDiagEvent(data: DescribeDBDiagEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBDiagEventResponse>;
  /** 获取诊断事件列表 {@link DescribeDBDiagEventsRequest} {@link DescribeDBDiagEventsResponse} */
  DescribeDBDiagEvents(data: DescribeDBDiagEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBDiagEventsResponse>;
  /** 获取实例诊断历史 {@link DescribeDBDiagHistoryRequest} {@link DescribeDBDiagHistoryResponse} */
  DescribeDBDiagHistory(data: DescribeDBDiagHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBDiagHistoryResponse>;
  /** 查询健康诊断报告内容 {@link DescribeDBDiagReportContentRequest} {@link DescribeDBDiagReportContentResponse} */
  DescribeDBDiagReportContent(data: DescribeDBDiagReportContentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBDiagReportContentResponse>;
  /** 查询健康报告生成任务列表 {@link DescribeDBDiagReportTasksRequest} {@link DescribeDBDiagReportTasksResponse} */
  DescribeDBDiagReportTasks(data?: DescribeDBDiagReportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBDiagReportTasksResponse>;
  /** 获取性能趋势 {@link DescribeDBPerfTimeSeriesRequest} {@link DescribeDBPerfTimeSeriesResponse} */
  DescribeDBPerfTimeSeries(data: DescribeDBPerfTimeSeriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBPerfTimeSeriesResponse>;
  /** 获取指定时间段内的实例空间使用概览 {@link DescribeDBSpaceStatusRequest} {@link DescribeDBSpaceStatusResponse} */
  DescribeDBSpaceStatus(data: DescribeDBSpaceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSpaceStatusResponse>;
  /** 获取实例信息列表 {@link DescribeDiagDBInstancesRequest} {@link DescribeDiagDBInstancesResponse} */
  DescribeDiagDBInstances(data: DescribeDiagDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiagDBInstancesResponse>;
  /** 获取健康得分 {@link DescribeHealthScoreRequest} {@link DescribeHealthScoreResponse} */
  DescribeHealthScore(data: DescribeHealthScoreRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHealthScoreResponse>;
  /** 获取实例健康得分趋势 {@link DescribeHealthScoreTimeSeriesRequest} {@link DescribeHealthScoreTimeSeriesResponse} */
  DescribeHealthScoreTimeSeries(data: DescribeHealthScoreTimeSeriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHealthScoreTimeSeriesResponse>;
  /** 慢查模板概览 {@link DescribeIndexRecommendAggregationSlowLogsRequest} {@link DescribeIndexRecommendAggregationSlowLogsResponse} */
  DescribeIndexRecommendAggregationSlowLogs(data: DescribeIndexRecommendAggregationSlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexRecommendAggregationSlowLogsResponse>;
  /** 查询实例的索引推荐信息 {@link DescribeIndexRecommendInfoRequest} {@link DescribeIndexRecommendInfoResponse} */
  DescribeIndexRecommendInfo(data: DescribeIndexRecommendInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIndexRecommendInfoResponse>;
  /** 获取邮件配置 {@link DescribeMailProfileRequest} {@link DescribeMailProfileResponse} */
  DescribeMailProfile(data: DescribeMailProfileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMailProfileResponse>;
  /** 获取Redis Proxy 指标 {@link DescribeMetricTopProxiesRequest} {@link DescribeMetricTopProxiesResponse} */
  DescribeMetricTopProxies(data: DescribeMetricTopProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMetricTopProxiesResponse>;
  /** 查询实时线程列表 {@link DescribeMySqlProcessListRequest} {@link DescribeMySqlProcessListResponse} */
  DescribeMySqlProcessList(data: DescribeMySqlProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMySqlProcessListResponse>;
  /** 查询实例无主键表 {@link DescribeNoPrimaryKeyTablesRequest} {@link DescribeNoPrimaryKeyTablesResponse} */
  DescribeNoPrimaryKeyTables(data: DescribeNoPrimaryKeyTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNoPrimaryKeyTablesResponse>;
  /** 获取单个proxy实时会话统计详情 {@link DescribeProxyProcessStatisticsRequest} {@link DescribeProxyProcessStatisticsResponse} */
  DescribeProxyProcessStatistics(data: DescribeProxyProcessStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyProcessStatisticsResponse>;
  /** 查询代理节点 kill 会话任务执行状态 {@link DescribeProxySessionKillTasksRequest} {@link DescribeProxySessionKillTasksResponse} */
  DescribeProxySessionKillTasks(data: DescribeProxySessionKillTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxySessionKillTasksResponse>;
  /** 查询redis大key分析任务列表 {@link DescribeRedisBigKeyAnalysisTasksRequest} {@link DescribeRedisBigKeyAnalysisTasksResponse} */
  DescribeRedisBigKeyAnalysisTasks(data: DescribeRedisBigKeyAnalysisTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisBigKeyAnalysisTasksResponse>;
  /** 查询命令延迟趋势 {@link DescribeRedisCmdPerfTimeSeriesRequest} {@link DescribeRedisCmdPerfTimeSeriesResponse} */
  DescribeRedisCmdPerfTimeSeries(data: DescribeRedisCmdPerfTimeSeriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisCmdPerfTimeSeriesResponse>;
  /** 查询命令延迟分布 {@link DescribeRedisCommandCostStatisticsRequest} {@link DescribeRedisCommandCostStatisticsResponse} */
  DescribeRedisCommandCostStatistics(data: DescribeRedisCommandCostStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisCommandCostStatisticsResponse>;
  /** 查询访问命令统计 {@link DescribeRedisCommandOverviewRequest} {@link DescribeRedisCommandOverviewResponse} */
  DescribeRedisCommandOverview(data: DescribeRedisCommandOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisCommandOverviewResponse>;
  /** 获取Redis实例proxy实时会话详情 {@link DescribeRedisProcessListRequest} {@link DescribeRedisProcessListResponse} */
  DescribeRedisProcessList(data: DescribeRedisProcessListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisProcessListResponse>;
  /** 获取redis慢SQL模板列表 {@link DescribeRedisSlowLogTopSqlsRequest} {@link DescribeRedisSlowLogTopSqlsResponse} */
  DescribeRedisSlowLogTopSqls(data: DescribeRedisSlowLogTopSqlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisSlowLogTopSqlsResponse>;
  /** 查询redis实例大key列表 {@link DescribeRedisTopBigKeysRequest} {@link DescribeRedisTopBigKeysResponse} */
  DescribeRedisTopBigKeys(data: DescribeRedisTopBigKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisTopBigKeysResponse>;
  /** 查询访问命令Cost TopN {@link DescribeRedisTopCostCommandsRequest} {@link DescribeRedisTopCostCommandsResponse} */
  DescribeRedisTopCostCommands(data: DescribeRedisTopCostCommandsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisTopCostCommandsResponse>;
  /** 获取redis top热key {@link DescribeRedisTopHotKeysRequest} {@link DescribeRedisTopHotKeysResponse} */
  DescribeRedisTopHotKeys(data: DescribeRedisTopHotKeysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisTopHotKeysResponse>;
  /** 查询redis实例top key前缀列表 {@link DescribeRedisTopKeyPrefixListRequest} {@link DescribeRedisTopKeyPrefixListResponse} */
  DescribeRedisTopKeyPrefixList(data: DescribeRedisTopKeyPrefixListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedisTopKeyPrefixListResponse>;
  /** 查询安全审计日志导出文件下载链接 {@link DescribeSecurityAuditLogDownloadUrlsRequest} {@link DescribeSecurityAuditLogDownloadUrlsResponse} */
  DescribeSecurityAuditLogDownloadUrls(data: DescribeSecurityAuditLogDownloadUrlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityAuditLogDownloadUrlsResponse>;
  /** 查询安全审计日志导出任务列表 {@link DescribeSecurityAuditLogExportTasksRequest} {@link DescribeSecurityAuditLogExportTasksResponse} */
  DescribeSecurityAuditLogExportTasks(data: DescribeSecurityAuditLogExportTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityAuditLogExportTasksResponse>;
  /** 获取慢日志分段耗时统计 {@link DescribeSlowLogQueryTimeStatsRequest} {@link DescribeSlowLogQueryTimeStatsResponse} */
  DescribeSlowLogQueryTimeStats(data: DescribeSlowLogQueryTimeStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogQueryTimeStatsResponse>;
  /** 获取慢日志统计柱状图 {@link DescribeSlowLogTimeSeriesStatsRequest} {@link DescribeSlowLogTimeSeriesStatsResponse} */
  DescribeSlowLogTimeSeriesStats(data: DescribeSlowLogTimeSeriesStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogTimeSeriesStatsResponse>;
  /** 获取慢SQL模板列表 {@link DescribeSlowLogTopSqlsRequest} {@link DescribeSlowLogTopSqlsResponse} */
  DescribeSlowLogTopSqls(data: DescribeSlowLogTopSqlsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogTopSqlsResponse>;
  /** 获取慢日志来源地址统计分布图 {@link DescribeSlowLogUserHostStatsRequest} {@link DescribeSlowLogUserHostStatsResponse} */
  DescribeSlowLogUserHostStats(data: DescribeSlowLogUserHostStatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogUserHostStatsResponse>;
  /** 获取SQL模板在指定时间段内的详细信息 {@link DescribeSlowLogsRequest} {@link DescribeSlowLogsResponse} */
  DescribeSlowLogs(data: DescribeSlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowLogsResponse>;
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
  /** 查询自治功能配置 {@link DescribeUserAutonomyProfileRequest} {@link DescribeUserAutonomyProfileResponse} */
  DescribeUserAutonomyProfile(data: DescribeUserAutonomyProfileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserAutonomyProfileResponse>;
  /** 获取SQL优化建议 {@link DescribeUserSqlAdviceRequest} {@link DescribeUserSqlAdviceResponse} */
  DescribeUserSqlAdvice(data: DescribeUserSqlAdviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserSqlAdviceResponse>;
  /** 中断MySql会话线程 {@link KillMySqlThreadsRequest} {@link KillMySqlThreadsResponse} */
  KillMySqlThreads(data: KillMySqlThreadsRequest, config?: AxiosRequestConfig): AxiosPromise<KillMySqlThreadsResponse>;
  /** 修改告警策略 {@link ModifyAlarmPolicyRequest} {@link ModifyAlarmPolicyResponse} */
  ModifyAlarmPolicy(data: ModifyAlarmPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAlarmPolicyResponse>;
  /** 修改审计配置 {@link ModifyAuditServiceRequest} {@link ModifyAuditServiceResponse} */
  ModifyAuditService(data: ModifyAuditServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAuditServiceResponse>;
  /** 修改实例巡检开关状态 {@link ModifyDiagDBInstanceConfRequest} {@link ModifyDiagDBInstanceConfResponse} */
  ModifyDiagDBInstanceConf(data: ModifyDiagDBInstanceConfRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDiagDBInstanceConfResponse>;
  /** 更改实例限流任务状态 {@link ModifySqlFiltersRequest} {@link ModifySqlFiltersResponse} */
  ModifySqlFilters(data: ModifySqlFiltersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySqlFiltersResponse>;
  /** 修改自治功能（实例级） {@link ModifyUserAutonomyProfileRequest} {@link ModifyUserAutonomyProfileResponse} */
  ModifyUserAutonomyProfile(data: ModifyUserAutonomyProfileRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserAutonomyProfileResponse>;
  /** 开通数据库审计 {@link OpenAuditServiceRequest} {@link OpenAuditServiceResponse} */
  OpenAuditService(data: OpenAuditServiceRequest, config?: AxiosRequestConfig): AxiosPromise<OpenAuditServiceResponse>;
  /** 更新Agent状态 {@link UpdateAgentSwitchRequest} {@link UpdateAgentSwitchResponse} */
  UpdateAgentSwitch(data: UpdateAgentSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAgentSwitchResponse>;
  /** 更新Agent实例状态 {@link UpdateMonitorSwitchRequest} {@link UpdateMonitorSwitchResponse} */
  UpdateMonitorSwitch(data: UpdateMonitorSwitchRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateMonitorSwitchResponse>;
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
  /** 查询实时线程列表 {@link V20191016.DescribeMySqlProcessListRequest} {@link V20191016.DescribeMySqlProcessListResponse} */
  DescribeMySqlProcessList(data: V20191016.DescribeMySqlProcessListRequest, config: AxiosRequestConfig & V20191016.VersionHeader): AxiosPromise<V20191016.DescribeMySqlProcessListResponse>;
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
