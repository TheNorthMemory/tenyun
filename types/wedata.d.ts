/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 告警规则接收人配置 */
declare interface AlarmGroup {
  /** 告警升级人ID列表若告警接收人或上级升级人未在告警间隔时间内确认告警，则会发送告警给下一级升级人。 */
  AlarmEscalationRecipientIds?: string[];
  /** 告警升级间隔 */
  AlarmEscalationInterval?: number;
  /** 告警通知疲劳配置 */
  NotificationFatigue?: NotificationFatigue;
  /** 告警渠道 1.邮件，2.短信，3.微信，4.语音，5.企业微信，6.Http，7.企业微信群 8 飞书群 9 钉钉群 10 Slack群 11 Teams群（默认1.邮件） 7.企业微信群 8 飞书群 9 钉钉群 10 Slack群 11 Teams群 只能选择一个渠道 */
  AlarmWays?: string[];
  /** 企业微信群/飞书群/钉钉群 /Slack群/Teams群的webhook地址列表 */
  WebHooks?: AlarmWayWebHook[];
  /** 告警接收人类型：1.指定人员，2.任务责任人，3.值班表（默认1.指定人员） */
  AlarmRecipientType?: number;
  /** 根据AlarmRecipientType的类型该列表具有不同的业务id 1（指定人员）: 告警接收人id列表 2（任务责任人）：无需配置 3（值班表）：值班表id列表 */
  AlarmRecipientIds?: string[];
}

/** 告警信息 */
declare interface AlarmMessage {
  /** 告警消息Id */
  AlarmMessageId?: number;
  /** 告警时间，同一条告警可能发送多次，只显示最新的告警时间 */
  AlarmTime?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 任务Id */
  TaskId?: string;
  /** 任务的实例数据时间 */
  CurRunDate?: string;
  /** 告警原因 */
  AlarmReason?: string;
  /** 告警级别，1.普通， 2.重要，3.紧急 */
  AlarmLevel?: number;
  /** 告警规则Id */
  AlarmRuleId?: string;
  /** 告警渠道 1.邮件，2.短信，3.微信，4.语音，5.企业微信，6.Http，7.企业微信群， 8.飞书群，9.钉钉群，10.Slack群,11.Teams群（默认1.邮件），7.企业微信群，8.飞书群，9.钉钉群，10.Slack群，11.Teams群 */
  AlarmWays?: string[];
  /** 告警接收人 */
  AlarmRecipients?: string[];
}

/** 告警免打扰时间区间 */
declare interface AlarmQuietInterval {
  /** ISO标准，1表示周一，7表示周日。 */
  DaysOfWeek?: number[];
  /** 开始时间，精度时分秒，格式 HH:mm:ss */
  StartTime?: string;
  /** 结束时间，精度时分秒，格式 HH:mm:ss */
  EndTime?: string;
}

/** 告警规则详情 */
declare interface AlarmRuleData {
  /** 告警规则id */
  AlarmRuleId?: string;
  /** 告警规则名称 */
  AlarmRuleName?: string;
  /** 告警规则描述 */
  Description?: string;
  /** 监控对象类型,任务维度监控： 可按照任务/工作流/项目来配置：1.任务、2.工作流、3.项目（默认为1.任务） 项目维度监控： 项目整体任务波动告警， 7：项目波动监控告警 */
  MonitorObjectType?: number;
  /** 根据MonitorType 的设置传入不同的业务id，如下1（任务）： MonitorObjectIds为任务id列表2（工作流）： MonitorObjectIds 为工作流id列表(工作流id可从接口ListWorkflows获取)3（项目）： MonitorObjectIds为项目id列表 */
  MonitorObjectIds?: string[];
  /** 告警规则监控类型failure：失败告警 ；overtime：超时告警 success：成功告警; backTrackingOrRerunSuccess: 补录重跑成功告警 backTrackingOrRerunFailure：补录重跑失败告警；项目波动告警projectFailureInstanceUpwardFluctuationAlarm： 当天失败实例数向上波动率超过阀值告警；projectSuccessInstanceDownwardFluctuationAlarm：当天成功实例数向下波动率超过阀值告警；离线集成任务对账告警：reconciliationFailure： 离线对账任务失败告警reconciliationOvertime： 离线对账任务运行超时告警reconciliationMismatch： 数据对账任务不一致条数超过阀值告警 */
  AlarmTypes?: string[];
  /** 告警规则是否启用0-- 禁用 1--启用 */
  Status?: number;
  /** 告警规则配置信息 成功告警无需配置；失败告警可以配置首次失败告警或者所有重试失败告警；超时配置需要配置超时类型及超时阀值；项目波动告警需要配置波动率及防抖周期配置 */
  AlarmRuleDetail?: AlarmRuleDetail;
  /** 告警级别 1.普通、2.重要、3.紧急 */
  AlarmLevel?: number;
  /** 告警规则创建人uid */
  OwnerUin?: string;
  /** bundle 客户端绑定的告警规则: 为空是正常的告警规则，不为空则是对应bundle客户端绑定的规则 */
  BundleId?: string | null;
  /** bundleId不为空 则表示绑定的bundle客户端名称 */
  BundleInfo?: string | null;
  /** 告警接收人配置列表 */
  AlarmGroups?: AlarmGroup[];
}

/** 告警规则详细配置 */
declare interface AlarmRuleDetail {
  /** 失败触发时机 1 – 首次失败触发2 --所有重试完成触发 (默认) */
  Trigger?: number | null;
  /** 补录重跑触发时机1 – 首次失败触发2 – 所有重试完成触发 */
  DataBackfillOrRerunTrigger?: number | null;
  /** 周期实例超时配置明细 */
  TimeOutExtInfo?: TimeOutStrategyInfo[] | null;
  /** 重跑补录实例超时配置明细 */
  DataBackfillOrRerunTimeOutExtInfo?: TimeOutStrategyInfo[] | null;
  /** 项目波动告警配置明细 */
  ProjectInstanceStatisticsAlarmInfoList?: ProjectInstanceStatisticsAlarmInfo[] | null;
  /** 离线集成对账告警配置信息 */
  ReconciliationExtInfo?: ReconciliationStrategyInfo[] | null;
  /** 监控对象的白名单配置 */
  MonitorWhiteTasks?: MonitorWhiteTask[];
}

/** 告警渠道 企业微信群/钉钉群/飞书群 等webhook地址配置 */
declare interface AlarmWayWebHook {
  /** 告警渠道值7.企业微信群,8 飞书群 9 钉钉群 10 Slack群 11 Teams群 */
  AlarmWay?: string;
  /** 告警群的webhook地址列表 */
  WebHooks?: string[];
}

/** 单次补录实例详情 */
declare interface BackfillInstance {
  /** 任务名称 */
  TaskName?: string;
  /** 任务Id */
  TaskId?: string;
  /** 实例数据时间 */
  CurRunDate?: string;
  /** 执行状态 */
  State?: string;
  /** 开始时间 */
  StartTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
  /** 执行时长 */
  CostTime?: string | null;
}

/** 补录计划的所有实例 */
declare interface BackfillInstanceCollection {
  /** 分页页码 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 总页数 */
  TotalPageNumber?: number;
  /** 记录总数 */
  TotalCount?: number;
  /** 补录实例列表 */
  Items?: BackfillInstance[];
}

/** 关联绑定的project */
declare interface BindProject {
  /** 项目id */
  ProjectId?: string | null;
  /** 项目名称 */
  ProjectName?: string | null;
  /** 项目展示名称 */
  ProjectDisplayName?: string | null;
}

/** 展示任务id和任务名称信息 */
declare interface BriefTask {
  /** 任务id */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务创建时间 */
  CreateTime?: string | null;
  /** 任务责任人id，一个任务可能有多个责任人 */
  OwnerUinList?: string[] | null;
}

/** BusinessMetadata */
declare interface BusinessMetadata {
  /** 标签名称 */
  TagNames?: string[] | null;
}

/** 目录信息 */
declare interface CatalogInfo {
  /** 目录名称 */
  Name?: string;
}

/** 任务下游依赖详情分页 */
declare interface ChildDependencyConfigPage {
  /** 结果总数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 页码 */
  PageNumber?: number | null;
  /** 分页大小 */
  PageSize?: number | null;
  /** 分页数据 */
  Items?: OpsTaskDepend[] | null;
}

/** 数据探索脚本业务处理实体 */
declare interface CodeFile {
  /** 脚本ID */
  CodeFileId?: string | null;
  /** 脚本名称 */
  CodeFileName?: string | null;
  /** 脚本所有者 uin */
  OwnerUin?: string | null;
  /** 脚本配置 */
  CodeFileConfig?: CodeFileConfig | null;
  /** 脚本内容 */
  CodeFileContent?: string | null;
  /** 最近一次操作人 */
  UpdateUserUin?: string | null;
  /** 项目ID */
  ProjectId?: string | null;
  /** 更新时间 yyyy-MM-dd hh:mm:ss */
  UpdateTime?: string | null;
  /** 创建时间 yyyy-MM-dd hh:mm:ss */
  CreateTime?: string | null;
  /** 权限范围：SHARED, PRIVATE */
  AccessScope?: string | null;
  /** 节点全路径，/aaa/bbb/ccc.ipynb，由各个节点的名称组成 */
  Path?: string | null;
  /** 父文件夹路径 */
  ParentFolderPath?: string | null;
}

/** 数据探索脚本配置 */
declare interface CodeFileConfig {
  /** 高级运行参数,变量替换，map-json String,String */
  Params?: string | null;
  /** notebook kernel session信息 */
  NotebookSessionInfo?: NotebookSessionInfo | null;
}

/** 数据探索脚本文件树节点 */
declare interface CodeFolderNode {
  /** 唯一标识 */
  Id?: string;
  /** 名称 */
  Title?: string;
  /** 类型 folder，script */
  Type?: string;
  /** 是否叶子节点 */
  IsLeaf?: boolean;
  /** 业务参数 */
  Params?: string | null;
  /** 权限范围: SHARED, PRIVATE */
  AccessScope?: string | null;
  /** 节点路径 */
  Path?: string;
  /** 目录/文件责任人uin */
  OwnerUin?: string;
  /** 创建人 */
  CreateUserUin?: string;
  /** 当前用户对节点拥有的权限 */
  NodePermission?: string | null;
  /** 子节点列表 */
  Children?: CodeFolderNode[] | null;
  /** 父文件夹路径 */
  ParentFolderPath?: string | null;
}

/** CodeStudio文件对象操作结果 */
declare interface CodeStudioFileActionResult {
  /** 成功true，失败false */
  Status?: boolean | null;
  /** 文件夹ID */
  CodeFileId?: string | null;
}

/** CodeStudio文件夹对象操作结果 */
declare interface CodeStudioFolderActionResult {
  /** 成功true，失败false */
  Status?: boolean | null;
  /** 文件夹ID */
  FolderId?: string | null;
}

/** CodeStudio文件夹对象操作结果 */
declare interface CodeStudioFolderResult {
  /** 文件夹ID */
  FolderId?: string | null;
}

/** ColumnInfo */
declare interface ColumnInfo {
  /** 字段类型 */
  Type?: string | null;
  /** 字段名称 */
  Name?: string;
  /** 字段长度 */
  Length?: number | null;
  /** 字段描述 */
  Description?: string | null;
  /** 字段的顺序 */
  Position?: number | null;
  /** 是否为分区字段 */
  IsPartition?: boolean | null;
}

/** 创建告警规则响应结果 */
declare interface CreateAlarmRuleData {
  /** 告警规则唯一id */
  AlarmRuleId?: string;
}

/** 创建数据补录计划结果 */
declare interface CreateDataReplenishmentPlan {
  /** 补录计划Id */
  DataBackfillPlanId?: string;
}

/** 创建文件夹结果 */
declare interface CreateFolderResult {
  /** 创建成功的文件夹ID。如果创建失败则报错。 */
  FolderId?: string;
}

/** 创建项目的结果信息 */
declare interface CreateProjectResult {
  /** 项目id */
  ProjectId?: string | null;
}

/** 创建资源文件结果 */
declare interface CreateResourceFileResult {
  /** 资源文件ID */
  ResourceId?: string;
}

/** 创建任务基本属性信息 */
declare interface CreateTaskBaseAttribute {
  /** 任务名称 */
  TaskName: string;
  /** 任务类型ID：* 21:JDBC SQL* 23:TDSQL-PostgreSQL* 26:OfflineSynchronization* 30:Python* 31:PySpark* 32:DLC SQL* 33:Impala* 34:Hive SQL* 35:Shell* 36:Spark SQL* 38:Shell Form Mode* 39:Spark* 40:TCHouse-P* 41:Kettle* 42:Tchouse-X* 43:TCHouse-X SQL* 46:DLC Spark* 47:TiOne* 48:Trino* 50:DLC PySpark* 92:MapReduce* 130:Branch Node* 131:Merged Node* 132:Notebook* 133:SSH* 134:StarRocks* 137:For-each* 138:Setats SQL */
  TaskTypeId: string;
  /** 工作流ID */
  WorkflowId: string;
  /** 任务负责人ID，默认为当前用户 */
  OwnerUin?: string;
  /** 任务描述 */
  TaskDescription?: string;
  /** 任务文件夹路径注意：- 路径上不要填写任务节点类型；例如，在 一个名为 wf01 的工作流，“通用” 分类下，现在想要在这个分类下的 tf_01 文件夹下，新建一个 shell 任务；则 填写 /tf_01 即可；- 如果 tf_01 文件夹不存在，则需要先创建这个文件夹（使用 CreateTaskFolder 接口）才能操作成功； */
  TaskFolderPath?: string;
}

/** 创建任务配置信息 */
declare interface CreateTaskConfiguration {
  /** 资源组ID： 需要通过 DescribeNormalSchedulerExecutorGroups 获取 ExecutorGroupId */
  ResourceGroup?: string;
  /** 代码内容的Base64编码 */
  CodeContent?: string;
  /** 任务扩展属性配置列表 */
  TaskExtConfigurationList?: TaskExtParameter[];
  /** 集群ID */
  DataCluster?: string;
  /** 指定的运行节点 */
  BrokerIp?: string;
  /** 资源池队列名称，需要通过 DescribeProjectClusterQueues 获取 */
  YarnQueue?: string;
  /** 来源数据源ID, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取 */
  SourceServiceId?: string;
  /** 目标数据源ID, 使用 ; 分隔, 需要通过 DescribeDataSourceWithoutInfo 获取 */
  TargetServiceId?: string;
  /** 调度参数 */
  TaskSchedulingParameterList?: TaskSchedulingParameter[];
  /** Bundle使用的ID */
  BundleId?: string;
  /** Bundle信息 */
  BundleInfo?: string;
}

/** 创建任务返回体 */
declare interface CreateTaskResult {
  /** 任务ID */
  TaskId?: string | null;
}

/** 创建任务调度配置信息 */
declare interface CreateTaskSchedulerConfiguration {
  /** 周期类型：默认为 DAY_CYCLE支持的类型为 * ONEOFF_CYCLE: 一次性* YEAR_CYCLE: 年* MONTH_CYCLE: 月* WEEK_CYCLE: 周* DAY_CYCLE: 天* HOUR_CYCLE: 小时* MINUTE_CYCLE: 分钟* CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string;
  /** 时区，默认为 UTC+8 */
  ScheduleTimeZone?: string;
  /** Cron表达式，默认为 0 0 0 * * ? * */
  CrontabExpression?: string;
  /** 生效日期，默认为当前日期的 00:00:00 */
  StartTime?: string;
  /** 结束日期，默认为 2099-12-31 23:59:59 */
  EndTime?: string;
  /** 执行时间 左闭区间，默认 00:00 */
  ExecutionStartTime?: string;
  /** 执行时间 右闭区间，默认 23:59 */
  ExecutionEndTime?: string;
  /** 日历调度 取值为 0 和 1， 1为打开，0为关闭，默认为0 */
  CalendarOpen?: string;
  /** 日历调度 日历 ID */
  CalendarId?: string;
  /** 自依赖, 默认值 serial, 取值为：parallel(并行), serial(串行), orderly(有序) */
  SelfDepend?: string;
  /** 上游依赖数组 */
  UpstreamDependencyConfigList?: DependencyTaskBrief[];
  /** 事件数组 */
  EventListenerList?: EventListener[];
  /** 重跑&补录配置, 默认为 ALL; , ALL 运行成功或失败后皆可重跑或补录, FAILURE 运行成功后不可重跑或补录，运行失败后可重跑或补录, NONE 运行成功或失败后皆不可重跑或补录; */
  AllowRedoType?: string;
  /** 输出参数数组 */
  ParamTaskOutList?: OutTaskParameter[];
  /** 输入参数数组 */
  ParamTaskInList?: InTaskParameter[];
  /** 产出登记 */
  TaskOutputRegistryList?: TaskDataRegistry[];
  /** **实例生成策略*** T_PLUS_0: T+0生成,默认策略* T_PLUS_1: T+1生成 */
  InitStrategy?: string;
  /** 调度类型: 0 正常调度 1 空跑调度，默认为 0 */
  ScheduleRunType?: string;
  /** 任务调度优先级 运行优先级 4高 5中 6低 , 默认:6 */
  RunPriority?: string;
  /** 重试策略 重试等待时间,单位分钟: 默认: 5 */
  RetryWait?: string;
  /** 重试策略 最大尝试次数, 默认: 4 */
  MaxRetryAttempts?: string;
  /** 超时处理策略 运行耗时超时（单位：分钟）默认为 -1 */
  ExecutionTTL?: string;
  /** 超时处理策略 等待总时长耗时超时（单位：分钟）默认为 -1 */
  WaitExecutionTotalTTL?: string;
  /** 调度类型: 0 正常调度 1 空跑调度，默认为 0 */
  ScheduleType?: number;
  /** 任务调度优先级 运行优先级 4高 5中 6低 , 默认:6 */
  RunPriorityType?: number;
  /** 重试策略 重试等待时间,单位分钟: 默认: 5 */
  RetryWaitMinute?: number;
  /** 重试策略 最大尝试次数, 默认: 4 */
  MaxRetryNumber?: number;
  /** 超时处理策略 运行耗时超时（单位：分钟）默认为 -1 */
  ExecutionTTLMinute?: number;
  /** 超时处理策略 等待总时长耗时超时（单位：分钟）默认为 -1 */
  WaitExecutionTotalTTLMinute?: number;
}

/** 创建工作流结果 */
declare interface CreateWorkflowResult {
  /** 创建成功后的工作流id */
  WorkflowId?: string;
}

/** dlc集群信息 */
declare interface DLCClusterInfo {
  /** dlc资源名称（需要添加角色Uin到dlc中，否则可能获取不到资源） */
  ComputeResources: string[] | null;
  /** dlc地域 */
  Region: string | null;
  /** 指定DLC集群的默认数据库 */
  DefaultDatabase: string | null;
  /** 集群配置标记（ 仅对标准模式的项目生效并且标准模式必填），枚举值：- Prod (生产环境)- Dev (开发环境) */
  StandardModeEnvTag?: string;
  /** 访问账号（ 仅对标准模式的项目生效并且标准模式必填），用于提交dlc任务的账号建议使用指定子账号，给子账号设置对应库表的权限；任务负责人模式在负责人离职后容易造成任务失败；主账号模式在多个项目权限不同的情况下不易做权限控制。枚举值：- TASK_RUNNER （任务负责人）- OWNER （主账号模式）- SUB （子账号模式） */
  AccessAccount?: string;
  /** 子账号id（ 仅对标准模式的项目生效），AccessAccount为子账号模式时，需要指定子账号的id信息，其他模式不需要指定 */
  SubAccountUin?: string;
}

/** 补录计划详情 */
declare interface DataBackfill {
  /** 项目Id */
  ProjectId?: string;
  /** 数据补录计划id */
  DataBackfillPlanId?: string;
  /** 数据补录计划名称 */
  DataBackfillPlanName?: string;
  /** 补录任务集合 */
  TaskIds?: string[];
  /** 补录任务的数据配置列表 */
  DataBackfillRangeList?: DataBackfillRange[];
  /** 检查父任务类型，取值范围：- NONE-全部不检查- ALL-检查全部上游父任务- MAKE_SCOPE-只在（当前补录计划）选中任务中检查 */
  CheckParentType?: string | null;
  /** 补录是否忽略事件依赖 */
  SkipEventListening?: boolean | null;
  /** 自定义实例运行并发度, 返回为null或者不返回，则表示任务原有自依赖 */
  RedefineParallelNum?: number | null;
  /** 自定义的工作流自依赖，yes或者no；如果不配置，则使用工作流原有自依赖 */
  RedefineSelfWorkflowDependency?: string | null;
  /** 调度资源组id */
  SchedulerResourceGroupId?: string | null;
  /** 集成资源组id */
  IntegrationResourceGroupId?: string | null;
  /** 补录自定义的生成周期 */
  RedefineCycleType?: string | null;
  /** 自定义参数 */
  RedefineParamList?: KVPair[] | null;
  /** 补录任务的执行开始时间 */
  StartTime?: string | null;
  /** 补录任务的执行结束时间 */
  EndTime?: string | null;
  /** 创建用户id */
  CreateUserUin?: string;
  /** 补录计划实例完成百分数 */
  CompletePercent?: number;
  /** 补录计划实例成功百分数 */
  SuccessPercent?: number;
  /** 补录是实例数据时间顺序，生效必须满足2个条件:1. 必须同周期任务2. 优先按依赖关系执行，无依赖关系影响的情况下按配置执行顺序执行 可选值- NORMAL: 不设置- ORDER: 顺序- REVERSE: 逆序不设置默认为NORMAL */
  DataTimeOrder?: string | null;
}

/** 补录计划日期范围 */
declare interface DataBackfillRange {
  /** 开始日期，格式yyyy-MM-dd 表示从指定日期的00:00:00开始 */
  StartDate?: string | null;
  /** 结束日期，格式yyyy-MM-dd，表示从指定日期的 23:59:59结束 */
  EndDate?: string | null;
  /** 在[StartDate, EndDate]之间每天的开始时间点，格式HH:mm,只针对小时及周期小于小时的任务生效 */
  ExecutionStartTime?: string | null;
  /** 在[StartDate, EndDate]之间每天的结束时间点，格式HH:mm,只针对小时及周期小于小时的任务生效 */
  ExecutionEndTime?: string | null;
}

/** 数据源对象 */
declare interface DataSource {
  /** 归属项目ID */
  ProjectId?: string | null;
  /** 数据源ID */
  Id?: number | null;
  /** 数据源类型:枚举值 */
  Type?: string | null;
  /** 数据源名称 */
  Name?: string | null;
  /** 数据源展示名，为了可视化查看 */
  DisplayName?: string | null;
  /** 数据源描述信息 */
  Description?: string | null;
  /** 归属项目Name */
  ProjectName?: string | null;
  /** 数据源创建人 */
  CreateUser?: string | null;
  /** 时间 */
  CreateTime?: string | null;
  /** 更新人 */
  ModifyUser?: string | null;
  /** 更新时间 */
  ModifyTime?: string | null;
  /** 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同 */
  ProdConProperties?: string | null;
  /** 同params 内容为开发数据源的数据 */
  DevConProperties?: string | null;
  /** 数据源类别：- DB ---自定义源- CLUSTER --- 系统源 */
  Category?: string | null;
}

/** 数据源文件上传 */
declare interface DataSourceFileUpload {
  /** Truststore认证文件，默认文件名truststore.jks */
  TrustStore?: string;
  /** Keystore认证文件，默认文件名keystore.jks */
  KeyStore?: string;
  /** core-site.xml文件 */
  CoreSite?: string;
  /** hdfs-site.xml文件 */
  HdfsSite?: string;
  /** hive-site.xml文件 */
  HiveSite?: string;
  /** hbase-site文件 */
  HBASESite?: string;
  /** keytab文件，默认文件名[数据源名].keytab */
  KeyTab?: string;
  /** krb5.conf文件 */
  KRB5Conf?: string;
  /** 私钥,默认文件名private_key.pem */
  PrivateKey?: string;
  /** 公钥,默认文件名public_key.pem */
  PublicKey?: string;
}

/** 查询数据源分页列表 */
declare interface DataSourceInfo {
  /** 分页页码 */
  PageNumber?: number | null;
  /** 分页大小 */
  PageSize?: number | null;
  /** 数据源列表 */
  Items?: DataSource[] | null;
  /** 总数 */
  TotalCount?: number | null;
  /** 总分页页码 */
  TotalPageNumber?: number | null;
}

/** 数据源操作结果 */
declare interface DataSourceResult {
  /** 操作是否成功 */
  Status?: boolean | null;
  /** 数据源id */
  DataSourceId?: number | null;
}

/** 数据源操作结果 */
declare interface DataSourceStatus {
  /** 数据源操作状态 */
  Status?: boolean | null;
}

/** 数据库信息 */
declare interface DatabaseInfo {
  /** 数据库GUID */
  Guid?: string | null;
  /** 数据库名称 */
  Name?: string | null;
  /** 数据库目录 */
  CatalogName?: string | null;
  /** 数据库描述 */
  Description?: string | null;
  /** 数据库位置 */
  Location?: string | null;
  /** 数据库存储大小 */
  StorageSize?: number | null;
}

/** 数据源关联任务信息 */
declare interface DatasourceRelationTaskInfo {
  /** 项目id */
  ProjectId?: string | null;
  /** 项目名称 */
  ProjectName?: string | null;
  /** 数据源关联任务信息，本期仅支持数据开发任务接口返回数据 */
  TaskInfo?: RelateTask[] | null;
}

/** 删除告警规则响应结果 */
declare interface DeleteAlarmRuleResult {
  /** 是否删除成功 */
  Status?: boolean;
}

/** 删除资源文件夹结果 */
declare interface DeleteFolderResult {
  /** 删除状态,true表示成功，false表示失败 */
  Status?: boolean;
}

/** 删除资源文件结果 */
declare interface DeleteResourceFileResult {
  /** true */
  Status?: boolean;
}

/** 删除数据开发任务结果 */
declare interface DeleteTaskResult {
  /** 删除状态,true表示成功，false表示失败 */
  Status?: boolean | null;
}

/** 删除工作流结果 */
declare interface DeleteWorkflowResult {
  /** 删除工作流是否成功 */
  Status?: boolean;
}

/** 查询任务上游依赖详情分页 */
declare interface DependencyConfigPage {
  /** 满足查询条件的数据总条数。 */
  TotalCount?: number | null;
  /** 满足查询条件的数据总页数。 */
  TotalPageNumber?: number | null;
  /** 当前请求的数据页数。 */
  PageNumber?: number | null;
  /** 当前请求的数据页条数。 */
  PageSize?: number | null;
  /** 分页数据 */
  Items?: TaskDependDto[] | null;
}

/** 依赖配置策略 */
declare interface DependencyStrategyTask {
  /** 等待上游任务实例策略：EXECUTING（执行）；WAITING（等待） */
  PollingNullStrategy?: string | null;
  /** 仅当PollingNullStrategy为EXECUTING时才需要填本字段，List类型：NOT_EXIST（默认，在分钟依赖分钟/小时依赖小时的情况下，父实例不在下游实例调度时间范围内）；PARENT_EXPIRED（父实例失败）；PARENT_TIMEOUT（父实例超时）。以上场景满足任一条件即可通过该父任务实例依赖判断，除以上场景外均需等待父实例。 */
  TaskDependencyExecutingStrategies?: string[] | null;
  /** 仅当TaskDependencyExecutingStrategies中包含PARENT_TIMEOUT时才需要填本字段，下游任务依赖父实例执行超时时间，单位：分钟。 */
  TaskDependencyExecutingTimeoutValue?: number | null;
}

/** 依赖任务信息取值说明表：| 当前任务周期类型 | 上游任务周期类型 | 配置方式 | MainCyclicConfig取值 | 时间维度/实例范围 | SubordinateCyclicConfig取值 | offset取值 || ---------------- | ---------------- | -------- | -------------------- | --------------------------- | --------------------------------- | ---------------------- || HOUR_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || MINUTE_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || DAY_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || DAY_CYCLE | WEEK_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || HOUR_CYCLE | HOUR_CYCLE | 推荐策略 | HOUR | 按小时/最近实例 | CURRENT_HOUR | 无 || HOUR_CYCLE | HOUR_CYCLE | 推荐策略 | HOUR | 按小时/前一周期 | PREVIOUS_HOUR_CYCLE | 无 || HOUR_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | WEEK | 按周/上周 | PREVIOUS_WEEK | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | WEEK | 按周/上周五 | PREVIOUS_FRIDAY | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | WEEK | 按周/上周日 | PREVIOUS_WEEKEND | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 、 | CURRENT_DAY | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/前一天 | PREVIOUS_DAY | 无 || WEEK_CYCLE | ONEOFF_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || HOUR_CYCLE | MINUTE_CYCLE | 推荐策略 | HOUR | 按小时/前一个小时(-60,0] | PREVIOUS_HOUR_LATER_OFFSET_MINUTE | 无 || HOUR_CYCLE | MINUTE_CYCLE | 推荐策略 | HOUR | 按小时/前一个小时 | PREVIOUS_HOUR | 无 || HOUR_CYCLE | MINUTE_CYCLE | 推荐策略 | HOUR | 按小时/当前小时 | CURRENT_HOUR | 无 || YEAR_CYCLE | WEEK_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || WEEK_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || MINUTE_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || WEEK_CYCLE | HOUR_CYCLE | 推荐策略 | WEEK | 按周/上周 | PREVIOUS_WEEK | 无 || WEEK_CYCLE | HOUR_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || MINUTE_CYCLE | HOUR_CYCLE | 推荐策略 | HOUR | 按小时/当前小时 | CURRENT_HOUR | 无 || HOUR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | HOUR_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || MONTH_CYCLE | HOUR_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | ONEOFF_CYCLE | 推荐策略 | MONTH | 按月/当月 | CURRENT_MONTH | 无 || DAY_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || DAY_CYCLE | MONTH_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || MONTH_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || ONEOFF_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || MINUTE_CYCLE | MINUTE_CYCLE | 推荐策略 | MINUTE | 按分钟/当前分钟 | CURRENT_MINUTE | 无 || MINUTE_CYCLE | MINUTE_CYCLE | 推荐策略 | MINUTE | 按分钟/前一周期 | PREVIOUS_MINUTE_CYCLE | 无 || YEAR_CYCLE | MINUTE_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || ONEOFF_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || DAY_CYCLE | MINUTE_CYCLE | 推荐策略 | DAY | 按天/前一天(-24 * 60,0] | PREVIOUS_DAY_LATER_OFFSET_MINUTE | 无 || DAY_CYCLE | MINUTE_CYCLE | 推荐策略 | DAY | 按天/前一天 | PREVIOUS_DAY | 无 || DAY_CYCLE | MINUTE_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || MINUTE_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || WEEK_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || WEEK_CYCLE | WEEK_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || YEAR_CYCLE | YEAR_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || YEAR_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || YEAR_CYCLE | HOUR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || MINUTE_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || ONEOFF_CYCLE | MINUTE_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || HOUR_CYCLE | ONEOFF_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || WEEK_CYCLE | MINUTE_CYCLE | 推荐策略 | WEEK | 按周/上周 | PREVIOUS_WEEK | 无 || WEEK_CYCLE | MINUTE_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || DAY_CYCLE | HOUR_CYCLE | 推荐策略 | DAY | 按天/前一天(-24,0] | PREVIOUS_DAY_LATER_OFFSET_HOUR | 无 || DAY_CYCLE | HOUR_CYCLE | 推荐策略 | DAY | 按天/前一天[-24,0) | PREVIOUS_DAY | 无 || DAY_CYCLE | HOUR_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本年所有月 | ALL_MONTH_OF_YEAR | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/上月末 | PREVIOUS_END_OF_MONTH | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/上月初 | PREVIOUS_BEGIN_OF_MONTH | 无 || ONEOFF_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || DAY_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || ONEOFF_CYCLE | HOUR_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || DAY_CYCLE | ONEOFF_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || MINUTE_CYCLE | ONEOFF_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || WEEK_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || WEEK_CYCLE | MONTH_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || YEAR_CYCLE | ONEOFF_CYCLE | 推荐策略 | YEAR | 按年/当年 | CURRENT_YEAR | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | MONTH | 按月/上月末 | PREVIOUS_END_OF_MONTH | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/前一天 | PREVIOUS_DAY | 无 || YEAR_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/本年所有天 | ALL_DAY_OF_YEAR | 无 || YEAR_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || YEAR_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/前一天 | PREVIOUS_DAY | 无 || HOUR_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || MONTH_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/当月 | CURRENT_MONTH | 无 || MONTH_CYCLE | MONTH_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || MONTH_CYCLE | MINUTE_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || MONTH_CYCLE | MINUTE_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | WEEK_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || MONTH_CYCLE | WEEK_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | WEEK_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || DAY_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || DAY_CYCLE | YEAR_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || ONEOFF_CYCLE | ONEOFF_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || ONEOFF_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || CRONTAB_CYCLE | CRONTAB_CYCLE | 推荐策略 | CRONTAB | 无 | CURRENT | 无 || HOUR_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 | */
declare interface DependencyTaskBrief {
  /** 任务ID */
  TaskId: string | null;
  /** 主依赖配置，取值为：* CRONTAB* DAY* HOUR* LIST_DAY* LIST_HOUR* LIST_MINUTE* MINUTE* MONTH* RANGE_DAY* RANGE_HOUR* RANGE_MINUTE* WEEK* YEAR */
  MainCyclicConfig: string | null;
  /** 次依赖配置，取值为：* ALL_DAY_OF_YEAR* ALL_MONTH_OF_YEAR* CURRENT* CURRENT_DAY* CURRENT_HOUR* CURRENT_MINUTE* CURRENT_MONTH* CURRENT_WEEK* CURRENT_YEAR* PREVIOUS_BEGIN_OF_MONTH* PREVIOUS_DAY* PREVIOUS_DAY_LATER_OFFSET_HOUR* PREVIOUS_DAY_LATER_OFFSET_MINUTE* PREVIOUS_END_OF_MONTH* PREVIOUS_FRIDAY* PREVIOUS_HOUR* PREVIOUS_HOUR_CYCLE* PREVIOUS_HOUR_LATER_OFFSET_MINUTE* PREVIOUS_MINUTE_CYCLE* PREVIOUS_MONTH* PREVIOUS_WEEK* PREVIOUS_WEEKEND* RECENT_DATE */
  SubordinateCyclicConfig?: string | null;
  /** 区间、列表模式下的偏移量 */
  Offset?: string | null;
  /** 依赖执行策略 */
  DependencyStrategy?: DependencyStrategyTask | null;
}

/** 监听事件器 */
declare interface EventListener {
  /** 事件名 */
  EventName: string | null;
  /** 事件周期：SECOND, MIN, HOUR, DAY */
  EventSubType: string | null;
  /** 事件广播类型：SINGLE, BROADCAST */
  EventBroadcastType: string | null;
  /** 扩展信息 */
  PropertiesList?: ParamInfo[] | null;
}

/** ExecutorResourceGroup分页对象 */
declare interface ExecutorResourceGroupData {
  /** 结果list */
  Items?: ExecutorResourceGroupInfo[] | null;
  /** 总条数 */
  TotalCount?: number | null;
  /** 页数 */
  PageNumber?: number | null;
  /** 页大小 */
  PageSize?: number | null;
  /** 总分页页码 */
  TotalPageNumber?: number | null;
}

/** 资源组详情 */
declare interface ExecutorResourceGroupInfo {
  /** 资源组唯一标识 */
  Id?: string;
  /** 资源组名称 */
  Name?: string | null;
  /** 资源组描述 */
  Description?: string | null;
  /** 执行资源组类型，不能为空- Schedule --- 调度资源组- Integration --- 集成资源组- DataService -- 数据服务资源组 */
  ResourceGroupType?: string | null;
  /** 项目集合 */
  AssociateProjects?: BindProject[] | null;
  /** 区域 */
  Region?: string | null;
  /** vpcId */
  VpcId?: string | null;
  /** 子网id */
  SubNet?: string | null;
  /** 是否自动续费 */
  AutoRenewEnabled?: boolean | null;
}

/** 参数传递-引用参数 */
declare interface InTaskParameter {
  /** 参数名 */
  ParamKey: string | null;
  /** 参数描述：格式为 项目标识.任务名称.参数名；例：project_wedata_1.sh_250820_104107.pp_out */
  ParamDesc: string | null;
  /** 父任务ID */
  FromTaskId: string | null;
  /** 父任务参数key */
  FromParamKey: string | null;
}

/** 调度实例详情 */
declare interface InstanceExecution {
  /** 实例唯一标识 */
  InstanceKey?: string | null;
  /** **实例生命周期编号，标识实例的某一次执行**例如：周期实例第一次运行的编号为0，用户后期又重跑了该实例，第二次执行的编号为1 */
  LifeRoundNum?: number | null;
  /** **实例状态**- WAIT_EVENT: 等待事件- WAIT_UPSTREAM: 等待上游- WAIT_RUN: 等待运行- RUNNING: 运行中- SKIP_RUNNING: 跳过运行- FAILED_RETRY: 失败重试- EXPIRED: 失败- COMPLETED: 成功 */
  InstanceState?: string | null;
  /** **实例运行触发类型**- RERUN 表示重跑- ADDITION 表示补录- PERIODIC 表示周期- APERIODIC 表示非周期- RERUN_SKIP_RUN 表示重跑 - 空跑- ADDITION_SKIP_RUN 表示补录 - 空跑- PERIODIC_SKIP_RUN 表示周期 - 空跑- APERIODIC_SKIP_RUN 表示非周期 - 空跑- MANUAL_TRIGGER 表示手动触发- RERUN_MANUAL_TRIGGER 表示手动触发 - 重跑 */
  RunType?: string | null;
  /** 失败重试次数 */
  Tries?: number | null;
  /** **实例执行生命周期列表** */
  ExecutionPhaseList?: InstanceExecutionPhase[] | null;
  /** 耗费时间, 单位ms */
  CostTime?: number | null;
}

/** 实例执行的每个阶段详情 */
declare interface InstanceExecutionPhase {
  /** 该状态开始时间 */
  StartTime?: string | null;
  /** **实例生命周期阶段状态**- WAIT_UPSTREAM 表示 等待事件/上游状态- WAIT_RUN 表示 等待运行状态- RUNNING 表示 运行中状态- COMPLETE 表示 终态-完成- FAILED 表示 终态-失败重试- EXPIRED 表示 终态-失败- SKIP_RUNNING 表示 终态-被上游分支节点跳过的分支- HISTORY 表示 兼容2024-03-30之前的历史实例，之后实例无需关注次枚举类型 */
  DetailState?: string | null;
  /** 该状态结束时间 */
  EndTime?: string | null;
}

/** 实例日志内容 */
declare interface InstanceLog {
  /** 实例唯一标识 */
  InstanceKey?: string | null;
  /** 项目ID */
  ProjectId?: string | null;
  /** **运行代码内容** */
  CodeContent?: string | null;
  /** **日志内容** */
  LogInfo?: string | null;
  /** **分页查询日志时使用，无具体业务含义**第一次查询时值为null 第二次及以后查询时使用上一次查询返回信息中的NextCursor字段值即可 */
  NextCursor?: string | null;
}

/** 集成资源组 */
declare interface IntegrationResource {
  /** 实时集成资源组- i32c(实时数据同步-16C64G) */
  RealTimeDataSync?: ResourceGroupSpecification;
  /** 离线集成资源组- integrated(离线数据同步-8C16G)- i16(离线数据同步-8C32G) */
  OfflineDataSync?: ResourceGroupSpecification;
}

/** 数据探索任务JOB */
declare interface JobDto {
  /** 数据探索任务ID */
  JobId?: string | null;
  /** 数据探索任务名称 */
  JobName?: string | null;
  /** 任务类型 */
  JobType?: string | null;
  /** 脚本ID */
  ScriptId?: string | null;
  /** 子任务列表 */
  JobExecutionList?: JobExecutionDto[] | null;
  /** 脚本内容 */
  ScriptContent?: string | null;
  /** 任务状态 */
  Status?: string | null;
  /** 任务创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
  /** 云主账号UIN */
  OwnerUin?: string | null;
  /** 账号UIN */
  UserUin?: string | null;
  /** 耗时 */
  TimeCost?: number | null;
  /** 是否脚本内容被截断 */
  ScriptContentTruncate?: boolean | null;
}

/** 业务提交JOB的子任务 */
declare interface JobExecutionDto {
  /** 数据探索任务ID */
  JobId: string | null;
  /** 子查询任务ID */
  JobExecutionId: string | null;
  /** 子查询名称 */
  JobExecutionName: string | null;
  /** 子查询sql内容 */
  ScriptContent: string | null;
  /** 子查询状态 */
  Status: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 执行阶段 */
  ExecuteStageInfo?: string | null;
  /** 日志路径 */
  LogFilePath?: string | null;
  /** 下载结果路径 */
  ResultFilePath?: string | null;
  /** 预览结果路径 */
  ResultPreviewFilePath?: string | null;
  /** 任务执行的结果总行数 */
  ResultTotalCount?: number | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
  /** 耗时 */
  TimeCost?: number | null;
  /** 上下文SQL内容 */
  ContextScriptContent?: string[] | null;
  /** 任务执行的结果预览行数 */
  ResultPreviewCount?: number | null;
  /** 任务执行的结果影响行数 */
  ResultEffectCount?: number | null;
  /** 是否正在收集全量结果：默认false，true表示正在收集全量结果，用于前端判断是否需要继续轮询 */
  CollectingTotalResult?: boolean | null;
  /** 是否需要截断脚本内容 */
  ScriptContentTruncate?: boolean | null;
}

/** map */
declare interface KVMap {
  /** k */
  K?: string | null;
  /** v */
  V?: string | null;
}

/** 键值对 */
declare interface KVPair {
  /** 键名 */
  K?: string | null;
  /** 值，请勿传SQL(请求会被视为攻击接口)，如果有需要，请将SQL进行Base64转码并解码。 */
  V?: string | null;
}

/** LineageNodeInfo 血缘关系实体 */
declare interface LineageNodeInfo {
  /** 当前资源 */
  Resource?: LineageResource | null;
  /** 关系 */
  Relation?: LineageRelation | null;
}

/** 血缘Pair对象 */
declare interface LineagePair {
  /** 来源 */
  Source: LineageResouce;
  /** 目标 */
  Target: LineageResouce;
  /** 血缘加工过程 */
  Processes: LineageProcess[];
}

/** LineageProcess 血缘产出过程 */
declare interface LineageProcess {
  /** 原始唯一ID */
  ProcessId: string | null;
  /** 任务类型 //调度任务 SCHEDULE_TASK, //集成任务 INTEGRATION_TASK, //第三方上报 THIRD_REPORT, //数据建模 TABLE_MODEL, //模型创建指标 MODEL_METRIC, //原子指标创建衍生指标 METRIC_METRIC, //数据服务 DATA_SERVICE */
  ProcessType: string | null;
  /** WEDATA, THIRD; */
  Platform: string | null;
  /** 任务子类型 SQL_TASK, //集成实时任务血缘 INTEGRATED_STREAM, //集成离线任务血缘 INTEGRATED_OFFLINE; */
  ProcessSubType?: string | null;
  /** 额外扩展参数 */
  ProcessProperties?: LineageProperty[] | null;
  /** 血缘任务唯一节点ID */
  LineageNodeId?: string;
}

/** LineageProperty额外扩展参数 */
declare interface LineageProperty {
  /** 属性名称 */
  Name?: string | null;
  /** 属性值 */
  Value?: string | null;
}

/** LineageRelation 血缘关系 */
declare interface LineageRelation {
  /** 关联ID */
  RelationId?: string | null;
  /** 源端唯一血缘ID */
  SourceUniqueId?: string | null;
  /** 目标端唯一血缘ID */
  TargetUniqueId?: string | null;
  /** 血缘加工过程 */
  Processes?: LineageProcess[] | null;
}

/** 血缘资源实体 */
declare interface LineageResouce {
  /** 实体原始唯一ID\n备注：当血缘为表的列时候 唯一ID传表ResourceUniqueId::字段名称 */
  ResourceUniqueId: string | null;
  /** 实体类型TABLE|METRIC|MODEL|SERVICE|COLUMN */
  ResourceType: string | null;
  /** 来源：WEDATA|THIRD默认wedata */
  Platform: string | null;
  /** 业务名称：库名.表名｜指标名称｜模型名称|字段名称 */
  ResourceName?: string | null;
  /** 描述：表类型｜指标描述｜模型描述|字段描述 */
  Description?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** resource 额外扩展参数 */
  ResourceProperties?: LineageProperty[] | null;
  /** 血缘节点唯一标识符号 */
  LineageNodeId?: string;
}

/** 血缘资源实体 */
declare interface LineageResource {
  /** 实体原始唯一ID */
  ResourceUniqueId?: string | null;
  /** 业务名称：库名.表名｜指标名称｜模型名称|字段名称 */
  ResourceName?: string | null;
  /** 实体类型TABLE|METRIC|MODEL|SERVICE|COLUMN */
  ResourceType?: string | null;
  /** 血缘节点唯一标识符号 */
  LineageNodeId?: string | null;
  /** 描述：表类型｜指标描述｜模型描述|字段描述 */
  Description?: string | null;
  /** 来源：WEDATA|THIRD默认wedata */
  Platform?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** resource 额外扩展参数 */
  ResourceProperties?: LineageProperty[] | null;
}

/** 告警信息列表 */
declare interface ListAlarmMessages {
  /** 页码 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 总条数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
  /** 告警信息列表 */
  Items?: AlarmMessage[];
}

/** 查询告警规则列表 */
declare interface ListAlarmRulesResult {
  /** 分页的页数，当前页数 */
  PageNumber?: number;
  /** 每页显示的条数 */
  PageSize?: number;
  /** 分页总页数 */
  TotalPageNumber?: number;
  /** 所有的告警规则个数 */
  TotalCount?: number;
  /** 告警规则信息列表 */
  Items?: AlarmRuleData[];
}

/** ListCatalogPage */
declare interface ListCatalogPage {
  /** 目录记录列表 */
  Items?: CatalogInfo[];
  /** 分页总页数 */
  PageCount?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 分页页码 */
  PageNumber?: number;
  /** 记录总数 */
  TotalCount?: number;
}

/** ListDatabasePage */
declare interface ListDatabasePage {
  /** 数据库记录列表 */
  Items?: DatabaseInfo[];
  /** 分页总页数 */
  PageCount?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 分页页码 */
  PageNumber?: number;
  /** 记录总数 */
  TotalCount?: number;
}

/** ListLineagePage */
declare interface ListLineagePage {
  /** 血缘记录列表 */
  Items?: LineageNodeInfo[];
  /** 分页总页数 */
  PageCount?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 分页页码 */
  PageNumber?: number;
  /** 记录总数 */
  TotalCount?: number;
}

/** 任务列表分页 */
declare interface ListOpsTasksPage {
  /** 结果总数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 记录列表 */
  Items?: TaskOpsInfo[] | null;
  /** 页码 */
  PageNumber?: number | null;
  /** 分页大小 */
  PageSize?: number | null;
}

/** ListLineagePage */
declare interface ListProcessLineagePage {
  /** 血缘pair列表 */
  Items?: LineagePair[];
  /** 分页总页数 */
  PageCount?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 分页页码 */
  PageNumber?: number;
  /** 记录总数 */
  TotalCount?: number;
}

/** ListSchemaPage */
declare interface ListSchemaPage {
  /** Schema记录列表 */
  Items?: SchemaInfo[];
  /** 分页总页数 */
  PageCount?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 分页页码 */
  PageNumber?: number;
  /** 记录总数 */
  TotalCount?: number;
}

/** ListTablePage */
declare interface ListTablePage {
  /** Schema记录列表 */
  Items?: TableInfo[];
  /** 分页总页数 */
  PageCount?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 分页页码 */
  PageNumber?: number;
  /** 记录总数 */
  TotalCount?: number;
}

/** 查询任务信息分页 */
declare interface ListTaskInfo {
  /** 任务数组 */
  Items?: TaskBaseAttribute[] | null;
  /** 当前请求的数据页数 */
  PageNumber?: number | null;
  /** 当前请求的数据页条数 */
  PageSize?: number | null;
  /** 满足查询条件的数据总条数 */
  TotalCount?: number | null;
  /** 满足查询条件的数据总页数 */
  TotalPageNumber?: number | null;
}

/** 查询任务版本分页列表 */
declare interface ListTaskVersions {
  /** 记录列表 */
  Items?: TaskVersion[] | null;
  /** 满足查询条件的数据总条数。 */
  TotalCount?: number | null;
  /** 满足查询条件的数据总页数。 */
  TotalPageNumber?: number | null;
  /** 当前页记录数 */
  PageCount?: number | null;
  /** 当前请求的数据页条数。 */
  PageSize?: number | null;
  /** 当前请求的数据页数。 */
  PageNumber?: number | null;
}

/** 查询工作流分页列表 */
declare interface ListWorkflowInfo {
  /** 列表item */
  Items?: WorkflowInfo[] | null;
  /** 满足查询条件的数据总页数 */
  TotalPageNumber?: number | null;
  /** 当前请求的数据页数 */
  PageNumber?: number | null;
  /** 当前请求的数据页条数 */
  PageSize?: number | null;
  /** 满足查询条件的数据总条数 */
  TotalCount?: number | null;
}

/** 监控指标 */
declare interface MetricData {
  /** 指标名称- ConcurrencyUsage --- 并发使用率- CpuCoreUsage --- cpu使用率- CpuLoad --- cpu负载- DevelopQueueTask --- 正在队列中的开发任务数量- DevelopRunningTask --- 正在运行的开发任务数量- DevelopSchedulingTask --- 正在调度的开发任务数量- DiskUsage --- 磁盘使用情况- DiskUsed --- 磁盘已用量- MaximumConcurrency --- 最大并发- MemoryLoad --- 内存负载- MemoryUsage --- 内存使用量 */
  MetricName?: string | null;
  /** 当前值 */
  SnapshotValue?: number | null;
  /** 指标趋势 */
  TrendList?: TrendData[] | null;
}

/** 更新告警规则响应 */
declare interface ModifyAlarmRuleResult {
  /** 是否更新成功 */
  Status?: boolean;
}

/** 告警规则监控白名单配置 */
declare interface MonitorWhiteTask {
  /** 配置白名单的对应的工作流/项目的id */
  MonitorObjectId?: string;
  /** 白名单任务列表 */
  TaskIds?: string[];
}

/** notebook kernel session信息 */
declare interface NotebookSessionInfo {
  /** 会话ID */
  NotebookSessionId?: string;
  /** 会话名称 */
  NotebookSessionName?: string;
}

/** 告警疲劳告警配置 */
declare interface NotificationFatigue {
  /** 告警次数 */
  NotifyCount?: number;
  /** 告警间隔，分钟 */
  NotifyInterval?: number;
  /** 免打扰时间，例如示例值[{DaysOfWeek: [1, 2], StartTime: "00:00:00", EndTime: "09:00:00"}]	每周一、周二的00:00到09:00免打扰 */
  QuietIntervals?: AlarmQuietInterval[] | null;
}

/** OperateResult */
declare interface OperateResult {
  /** 操作结果1 成功 其他失败 */
  Status?: number;
}

/** 异步操作详情 */
declare interface OpsAsyncJobDetail {
  /** 项目id */
  ProjectId?: string;
  /** 操作id */
  AsyncId?: string;
  /** 异步操作类型 */
  AsyncType?: string;
  /** 异步操作状态：初始状态: INIT; 运行中: RUNNING; 成功: SUCCESS; 失败: FAIL; 部分成功: PART_SUCCESS */
  Status?: string;
  /** 错误信息 */
  ErrorDesc?: string | null;
  /** 子操作总数 */
  TotalSubProcessCount?: number | null;
  /** 已完成的子操作个数 */
  FinishedSubProcessCount?: number | null;
  /** 已成功的子操作个数 */
  SuccessSubProcessCount?: number | null;
  /** 操作人id */
  CreateUserUin?: string | null;
  /** 操作创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 依赖任务信息 */
declare interface OpsTaskDepend {
  /** 任务Id */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 工作流id */
  WorkflowId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 项目id */
  ProjectId?: string | null;
  /** 项目名称 */
  ProjectName?: string | null;
  /** 任务状态:- Y: 调度中- F: 已下线- O: 已暂停- T: 下线中- INVALID: 已失效 */
  Status?: string | null;
  /** 任务类型Id：* 21:JDBC SQL* 23:TDSQL-PostgreSQL* 26:OfflineSynchronization* 30:Python* 31:PySpark* 33:Impala* 34:Hive SQL* 35:Shell* 36:Spark SQL* 38:Shell Form Mode* 39:Spark* 40:TCHouse-P* 41:Kettle* 42:Tchouse-X* 43:TCHouse-X SQL* 46:DLC Spark* 47:TiOne* 48:Trino* 50:DLC PySpark* 92:MapReduce* 130:Branch Node* 131:Merged Node* 132:Notebook* 133:SSH* 134:StarRocks* 137:For-each* 138:Setats SQL */
  TaskTypeId?: number | null;
  /** 任务类型描述 - 20 : 通用数据同步 - 25 : ETLTaskType - 26 : ETLTaskType - 30 : python - 31 : pyspark - 34 : hivesql - 35 : shell - 36 : sparksql - 21 : jdbcsql - 32 : dlc - 33 : ImpalaTaskType - 40 : CDWTaskType - 41 : kettle - 42 : TCHouse-X - 43 : TCHouse-X SQL - 46 : dlcsparkTaskType - 47 : TiOneMachineLearningTaskType - 48 : Trino - 50 : DLCPyspark - 23 : TencentDistributedSQL - 39 : spark - 92 : MRTaskType - 38 : ShellScript - 70 : HiveSQLScrip - 130 : 分支 - 131 : 归并 - 132 : Notebook探索 - 133 : SSH节点 - 134 : StarRocks - 137 : For-each - 10000 : 自定义业务通用 */
  TaskTypeDesc?: string | null;
  /** 文件夹名称 */
  FolderName?: string | null;
  /** 文件夹id */
  FolderId?: string | null;
  /** 最近提交时间 */
  FirstSubmitTime?: string | null;
  /** 首次运行时间 */
  FirstRunTime?: string | null;
  /** 调度计划展示描述信息 */
  ScheduleDesc?: string | null;
  /** 任务周期类型* ONEOFF_CYCLE: 一次性* YEAR_CYCLE: 年* MONTH_CYCLE: 月* WEEK_CYCLE: 周* DAY_CYCLE: 天* HOUR_CYCLE: 小时* MINUTE_CYCLE: 分钟* CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string | null;
  /** 负责人 */
  OwnerUin?: string | null;
  /** 执行开始时间, 格式HH:mm, 如00:00 */
  ExecutionStartTime?: string | null;
  /** 执行结束时间, 格式HH:mm, 如23:59 */
  ExecutionEndTime?: string | null;
}

/** 工作流列表分页详情 */
declare interface OpsWorkflow {
  /** 任务数量 */
  TaskCount?: number;
  /** 文件名 */
  FolderName?: string | null;
  /** 工作流文件id */
  FolderId?: string;
  /** 工作流id */
  WorkflowId?: string;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流类型 - cycle周期 - manual手动 */
  WorkflowType?: string;
  /** 工作流描述 */
  WorkflowDesc?: string | null;
  /** 负责人userId,多个‘；’隔开 */
  OwnerUin?: string | null;
  /** 项目id */
  ProjectId?: string;
  /** 项目名称 */
  ProjectName?: string | null;
  /** 工作流状态* ALL_RUNNING : 全部调度中* ALL_FREEZED : 全部已暂停* ALL_STOPPTED : 全部已下线* PART_RUNNING : 部分调度中* ALL_NO_RUNNING : 全部未调度* ALL_INVALID : 全部已失效 */
  Status?: string;
  /** 工作流创建时间 */
  CreateTime?: string | null;
  /** 最近更新时间, 包含开发、生产变更 */
  UpdateTime?: string | null;
  /** 最近更新人，包含开发、生产变更 */
  UpdateUserUin?: string | null;
}

/** 工作流调度详情 */
declare interface OpsWorkflowDetail {
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流描述 */
  WorkflowDesc?: string | null;
  /** 工作流类型： - cycle 周期； - manual手动 */
  WorkflowType?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 创建人 */
  CreateUserUin?: string | null;
  /** 修改时间 */
  UpdateTime?: string | null;
  /** 延时执行时间,unit=minute */
  StartupTime?: number | null;
  /** 配置生效日期 开始日期 */
  StartTime?: string | null;
  /** 配置结束日期 结束日期 */
  EndTime?: string | null;
  /** 任务周期类型* ONEOFF_CYCLE: 一次性* YEAR_CYCLE: 年* MONTH_CYCLE: 月* WEEK_CYCLE: 周* DAY_CYCLE: 天* HOUR_CYCLE: 小时* MINUTE_CYCLE: 分钟* CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string | null;
  /** 文件夹Id */
  FolderId?: string | null;
  /** 任务实例初始化策略 - T_PLUS_1（T+1）：延迟一天初始化 - T_PLUS_0（T+0）：当天初始化 - T_MINUS_1（T-1）：提前一天初始化 */
  InstanceInitStrategy?: string | null;
  /** 调度计划释义 */
  SchedulerDesc?: string | null;
  /** 工作流首次提交时间 */
  FirstSubmitTime?: string | null;
  /** 工作流最近提交时间 */
  LatestSubmitTime?: string | null;
  /** 工作流状态* ALL_RUNNING : 全部调度中* ALL_FREEZED : 全部已暂停* ALL_STOPPTED : 全部已下线* PART_RUNNING : 部分调度中* ALL_NO_RUNNING : 全部未调度* ALL_INVALID : 全部已失效 */
  Status?: string | null;
  /** 负责人, 多个以‘；’隔开 */
  OwnerUin?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
}

/** 查询工作流分页列表 */
declare interface OpsWorkflows {
  /** 记录列表 */
  Items?: OpsWorkflow[] | null;
  /** 结果总数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 分页大小 */
  PageSize?: number | null;
  /** 分页页码 */
  PageNumber?: number | null;
}

/** 参数传递-输出参数 */
declare interface OutTaskParameter {
  /** 参数名 */
  ParamKey: string | null;
  /** 参数定义 */
  ParamValue: string | null;
}

/** 角色列表分页信息 */
declare interface PageRoles {
  /** 角色信息 */
  Items?: SystemRole[] | null;
  /** 页码 */
  PageNumber?: number | null;
  /** 分页大小 */
  PageSize?: number | null;
  /** 总个数 */
  TotalCount?: number | null;
  /** 总页码 */
  TotalPageNumber?: number | null;
}

/** 参数 */
declare interface ParamInfo {
  /** 参数名 */
  ParamKey: string;
  /** 参数值 */
  ParamValue: string;
}

/** 查询任务上游依赖详情分页 */
declare interface ParentDependencyConfigPage {
  /** 结果总数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 页码 */
  PageNumber?: number | null;
  /** 分页大小 */
  PageSize?: number | null;
  /** 分页数据 */
  Items?: OpsTaskDepend[] | null;
}

/** 项目信息 */
declare interface Project {
  /** 项目id */
  ProjectId?: string | null;
  /** 项目标识，英文名 */
  ProjectName?: string | null;
  /** 项目显示名称，可以为中文名 */
  DisplayName?: string | null;
  /** 备注 */
  Description?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 项目创建人id */
  CreatorUin?: string | null;
  /** 项目责任人id */
  ProjectOwnerUin?: string | null;
  /** 项目状态：0：禁用，1：启用，-3:禁用中，2：启用中 */
  Status?: number;
  /** 项目模式，SIMPLE：简单模式 STANDARD：标准模式 */
  ProjectModel?: string | null;
}

/** 查询数据源分页列表 */
declare interface ProjectBrief {
  /** 分页页码 */
  PageNumber?: number | null;
  /** 分页大小 */
  PageSize?: number | null;
  /** 数据源列表 */
  Items?: Project[] | null;
  /** 总数 */
  TotalCount?: number | null;
  /** 总页码 */
  TotalPageNumber?: number | null;
}

/** 告警规则项目波动率告警配置信息 */
declare interface ProjectInstanceStatisticsAlarmInfo {
  /** 告警类型 projectFailureInstanceUpwardFluctuationAlarm: 失败实例向上波动告警projectSuccessInstanceDownwardFluctuationAlarm： 成功实例向下波动告警 */
  AlarmType: string;
  /** 实例成功数向下波动比例告警阀值；实例失败数向上波动比例告警阀值 */
  InstanceThresholdCountPercent?: number;
  /** 累计实例数波动阀值 */
  InstanceThresholdCount?: number;
  /** 稳定性次数阈值(防抖动配置统计周期数) */
  StabilizeThreshold?: number;
  /** 稳定性统计周期(防抖动配置统计周期数) */
  StabilizeStatisticsCycle?: number;
  /** 是否累计计算,false:连续,true:累计 */
  IsCumulant?: boolean;
  /** 当日累计实例数;当天失败实例数向下波动量 */
  InstanceCount?: number;
}

/** 项目返回结果 */
declare interface ProjectResult {
  /** 返回的结果 true/false */
  Status?: boolean;
}

/** 项目的用户对象 */
declare interface ProjectUserRole {
  /** 租户id */
  AppId?: string | null;
  /** 主账号id */
  RootAccountId?: string | null;
  /** 用户id */
  UserUin?: string | null;
  /** 用户名 */
  UserName?: string | null;
  /** 显示名称 */
  DisplayName?: string | null;
  /** 用户角色对象 */
  Roles?: SystemRole[] | null;
  /** 是否创建者 */
  IsCreator?: boolean | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 是否项目负责人 */
  IsProjectOwner?: boolean | null;
  /** 手机号 */
  PhoneNum?: string | null;
  /** 邮箱 */
  Email?: string | null;
}

/** 项目下的用户集合 */
declare interface ProjectUsersBrief {
  /** 用户集合 */
  Items?: ProjectUserRole[] | null;
  /** 分页大小 */
  PageSize?: number | null;
  /** 分页页码 */
  PageNumber?: number | null;
  /** 总数量 */
  TotalCount?: number | null;
  /** 总页码 */
  TotalPageNumber?: number | null;
}

/** 离线集成对账告警规则 */
declare interface ReconciliationStrategyInfo {
  /** 离线告警规则类型reconciliationFailure： 离线对账失败告警reconciliationOvertime： 离线对账任务运行超时告警(需配置超时时间)reconciliationMismatch： 离线对账不一致条数告警(需配置不一致条数阀值) */
  RuleType?: string | null;
  /** 对账不一致条数阀值， RuleType=reconciliationMismatch对账不一致条数类型，需要配置该字段，无默认值 */
  MismatchCount?: number | null;
  /** 对账任务运行超时阀值： 小时， 默认为0 */
  Hour?: number | null;
  /** 对账任务运行超时阀值： 分钟， 默认为1 */
  Min?: number | null;
}

/** 数据源相关任务 */
declare interface RelateTask {
  /** 任务类型- OfflineIntegration --- 离线集成任务- RealtimeIntegration --- 实时集成任务- DataDevelopment --- 数据开发任务- DataQuality --- 数据质量任务- DataService --- 数据服务任务- MetadataCollection --- 元数据采集任务 */
  TaskType?: string;
  /** 任务数量 */
  TaskNum?: number;
  /** 任务详情 */
  TaskList?: BriefTask[] | null;
}

/** 资源文件详情 */
declare interface ResourceFile {
  /** 项目ID */
  ProjectId?: string;
  /** 资源文件ID */
  ResourceId?: string;
  /** 资源文件名称 */
  ResourceName?: string;
  /** 资源文件路径 */
  LocalPath?: string;
  /** 资源对象COS存储路径 */
  RemotePath?: string;
  /** 资源文件类型 */
  FileExtensionType?: string | null;
  /** 资源大小 */
  Size?: string;
  /** 创建用户ID */
  CreatorUserUin?: string;
  /** 创建用户名称 */
  CreatorUserName?: string;
  /** 最后更新用户名称 */
  UpdateUserName?: string | null;
  /** 最后更新用户ID */
  UpdateUserUin?: string | null;
  /** COS 桶 */
  BucketName?: string;
  /** COS 地域 */
  CosRegion?: string;
  /** 资源来源模式 */
  ResourceSourceMode?: string;
  /** 本地工程ID */
  BundleId?: string | null;
  /** 本地工程信息 */
  BundleInfo?: string | null;
}

/** 获取资源文件列表item */
declare interface ResourceFileItem {
  /** 资源文件ID */
  ResourceId?: string;
  /** 资源文件名称 */
  ResourceName?: string;
  /** 资源文件类型 */
  FileExtensionType?: string;
  /** 资源路径 */
  LocalPath?: string;
}

/** 资源文件分页 */
declare interface ResourceFilePage {
  /** 任务集合信息 */
  Items?: ResourceFileItem[];
  /** 总页数 */
  TotalPageNumber?: number;
  /** 总数量 */
  TotalCount?: number;
  /** 当前页 */
  PageNumber?: number | null;
  /** 每页显示数 */
  PageSize?: number | null;
}

/** 资源文件夹详情 */
declare interface ResourceFolder {
  /** 资源文件夹ID */
  FolderId?: string;
  /** 创建人ID */
  CreateUserUin?: string;
  /** 创建人名称 */
  CreateUserName?: string;
  /** 文件夹路径 */
  FolderPath?: string;
  /** 文件夹名称 */
  FolderName?: string;
}

/** 资源文件夹分页 */
declare interface ResourceFolderPage {
  /** 资源文件夹集合信息 */
  Items?: ResourceFolder[];
  /** 总页数 */
  TotalPageNumber?: number;
  /** 总数量 */
  TotalCount?: number;
  /** 当前页 */
  PageNumber?: number | null;
  /** 每页显示数 */
  PageSize?: number | null;
}

/** 资源组监控指标 */
declare interface ResourceGroupMetrics {
  /** 资源组规格相关：cpu个数 */
  CpuNum?: number | null;
  /** 资源组规格相关：磁盘规格 */
  DiskVolume?: number | null;
  /** 资源组规格相关：内存大小，单位:G */
  MemSize?: number | null;
  /** 资源组生命周期, 单位：天 */
  LifeCycle?: number | null;
  /** 资源组规格相关：最高并发 */
  MaximumConcurrency?: number | null;
  /** 资源组状态- 0 --- 初始化中- 1 --- 运行中- 2 --- 运行异常- 3 --- 释放中- 4 --- 已释放- 5 --- 创建中- 6 --- 创建失败- 7 --- 更新中- 8 --- 更新失败- 9 --- 已到期- 10 --- 释放失败- 11 --- 使用中- 12 --- 未使用 */
  Status?: number | null;
  /** 指标详情 */
  MetricSnapshots?: MetricData[];
}

/** 资源组规格 */
declare interface ResourceGroupSpecification {
  /** 资源组规格 */
  Specification: string;
  /** 数量 */
  Number: number;
}

/** 操作资源包数量 */
declare interface ResourceNumber {
  /** 增加/减少枚举- ADD -- 增加- DELETE -- 减少 */
  Type?: string;
  /** 增加/减少资源包的数量 */
  Quantity?: number;
}

/** 资源组操作结果 */
declare interface ResourceResult {
  /** 是否成功 */
  Status?: boolean | null;
  /** 资源组id */
  ResourceGroupId?: string | null;
}

/** 资源组操作状态 */
declare interface ResourceStatus {
  /** 资源组操作状态 */
  Status?: boolean | null;
}

/** 开通的资源组信息 */
declare interface ResourceType {
  /** 资源组类型- Schedule --- 调度资源组- Integration --- 集成资源组- DataService -- 数据服务资源组 */
  ResourceGroupType: string;
  /** 集成资源组，细分实时资源组和离线资源组(集成、调度、数据服务资源组不可以同时购买) */
  Integration?: IntegrationResource;
  /** 调度资源组(集成、调度、数据服务资源组不可以同时购买)- s_test(测试规格)- s_small(基础规格)- s_medium(普及规格)- s_large(专业规格) */
  Schedule?: ResourceGroupSpecification;
  /** 数据服务资源组(集成、调度、数据服务资源组不可以同时购买)- ds_t(测试规格)- ds_s(基础规格)- ds_m(普及规格)- ds_l(专业规格) */
  DataService?: ResourceGroupSpecification;
}

/** SQL探索文件/文件夹操作结果 */
declare interface SQLContentActionResult {
  /** 操作是否成功 */
  Status?: boolean | null;
  /** 文件夹ID */
  FolderId?: string | null;
}

/** SQL脚本文件树节点 */
declare interface SQLFolderNode {
  /** 唯一标识 */
  Id?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 类型 folder，script */
  Type?: string | null;
  /** 父文件夹path，/aaa/bbb/ccc */
  ParentFolderPath?: string | null;
  /** 是否叶子节点 */
  IsLeaf?: boolean | null;
  /** 业务参数 */
  Params?: string | null;
  /** 权限范围: SHARED, PRIVATE */
  AccessScope?: string | null;
  /** 节点路径 */
  Path?: string | null;
  /** 创建人 */
  CreateUserUin?: string | null;
  /** 当前用户对节点拥有的权限 */
  NodePermission?: string | null;
  /** 子节点列表 */
  Children?: SQLFolderNode[] | null;
  /** 文件责任人 */
  OwnerUin?: string | null;
}

/** 数据探索脚本业务处理实体 */
declare interface SQLScript {
  /** 脚本id */
  ScriptId?: string | null;
  /** 脚本名称 */
  ScriptName?: string | null;
  /** 脚本所有者 uin */
  OwnerUin?: string | null;
  /** 父文件夹path，/aaa/bbb/ccc */
  ParentFolderPath?: string | null;
  /** 脚本配置 */
  ScriptConfig?: SQLScriptConfig | null;
  /** 脚本内容 */
  ScriptContent?: string | null;
  /** 最近一次操作人 */
  UpdateUserUin?: string | null;
  /** 项目id */
  ProjectId?: string | null;
  /** 更新时间 yyyy-MM-dd hh:mm:ss */
  UpdateTime?: string | null;
  /** 创建时间 yyyy-MM-dd hh:mm:ss */
  CreateTime?: string | null;
  /** 权限范围：SHARED, PRIVATE */
  AccessScope?: string | null;
  /** 节点全路径，/aaa/bbb/ccc.ipynb，由各个节点的名称组成 */
  Path?: string | null;
}

/** 数据探索脚本配置 */
declare interface SQLScriptConfig {
  /** 数据源Id */
  DatasourceId?: string | null;
  /** 数据源环境 */
  DatasourceEnv?: string | null;
  /** 计算资源 */
  ComputeResource?: string | null;
  /** 执行资源组 */
  ExecutorGroupId?: string | null;
  /** 高级运行参数,变量替换，map-json String,String */
  Params?: string | null;
  /** 高级设置，执行配置参数，map-json String,String. 采用Base64编码 */
  AdvanceConfig?: string | null;
}

/** 停止sql运行结果 */
declare interface SQLStopResult {
  /** 是否成功 */
  Status?: boolean | null;
}

/** Schema信息 */
declare interface SchemaInfo {
  /** Schema GUID */
  Guid?: string | null;
  /** Schema名称 */
  Name?: string | null;
  /** 数据库名称 */
  DatabaseName?: string | null;
}

/** 创建数据探索脚本文件夹返回类 */
declare interface SqlCreateResult {
  /** 文件夹id */
  FolderId?: string | null;
}

/** 批量启动任务返回参数 */
declare interface StartTasks {
  /** 任务启动是否成功 */
  Status?: boolean;
}

/** 提交数据开发任务结果 */
declare interface SubmitTaskResult {
  /** 生成的任务版本ID */
  VersionId?: string | null;
  /** 提交状态 */
  Status?: boolean | null;
}

/** 角色对象 */
declare interface SystemRole {
  /** 角色id */
  RoleId?: string;
  /** 角色名称 */
  RoleName?: string | null;
  /** 角色展示名 */
  RoleDisplayName?: string | null;
  /** 描述 */
  Description?: string | null;
}

/** 数据库信息 */
declare interface TableInfo {
  /** 数据表GUID */
  Guid?: string | null;
  /** 数据表名称 */
  Name?: string | null;
  /** 数据表描述 */
  Description?: string | null;
  /** 数据库名称 */
  DatabaseName?: string | null;
  /** 数据库Schema名称 */
  SchemaName?: string | null;
  /** 表类型 */
  TableType?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 表的技术元数据 */
  TechnicalMetadata?: TechnicalMetadata | null;
  /** 表的业务元数据 */
  BusinessMetadata?: BusinessMetadata | null;
}

/** 任务对象 */
declare interface Task {
  /** 任务基本属性 */
  TaskBaseAttribute: TaskBaseAttribute | null;
  /** 任务配置 */
  TaskConfiguration: TaskConfiguration | null;
  /** 任务调度配置 */
  TaskSchedulerConfiguration: TaskSchedulerConfiguration | null;
}

/** 任务基本属性信息 */
declare interface TaskBaseAttribute {
  /** 任务ID */
  TaskId: string | null;
  /** 任务类型ID：* 21:JDBC SQL* 23:TDSQL-PostgreSQL* 26:OfflineSynchronization* 30:Python* 31:PySpark* 33:Impala* 34:Hive SQL* 35:Shell* 36:Spark SQL* 38:Shell Form Mode* 39:Spark* 40:TCHouse-P* 41:Kettle* 42:Tchouse-X* 43:TCHouse-X SQL* 46:DLC Spark* 47:TiOne* 48:Trino* 50:DLC PySpark* 92:MapReduce* 130:Branch Node* 131:Merged Node* 132:Notebook* 133:SSH* 134:StarRocks* 137:For-each* 138:Setats SQL */
  TaskTypeId: number | null;
  /** 工作流ID */
  WorkflowId: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 最近一次保存版本号 */
  TaskLatestVersionNo?: string | null;
  /** 最近一次提交版本号 */
  TaskLatestSubmitVersionNo?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 任务状态：* N: 新建* Y: 调度中* F: 已下线* O: 已暂停* T: 下线中* INVALID: 已失效 */
  Status?: string | null;
  /** 任务最新提交状态，任务是否已经提交：true/false */
  Submit?: boolean | null;
  /** 任务创建时间，示例：2022-02-12 11:13:41 */
  CreateTime?: string | null;
  /** 最后更新时间，示例：2025-08-13 16:34:06 */
  LastUpdateTime?: string | null;
  /** 最后更新人名称 */
  LastUpdateUserName?: string | null;
  /** 最后运维时间 */
  LastOpsTime?: string | null;
  /** 最后运维人名称 */
  LastOpsUserName?: string | null;
  /** 任务负责人ID */
  OwnerUin?: string | null;
  /** 任务描述 */
  TaskDescription?: string | null;
  /** 最近一次更新用户ID */
  UpdateUserUin?: string | null;
  /** 创建用户ID */
  CreateUserUin?: string | null;
  /** 任务文件夹路径注意：- 路径上不要填写任务节点类型；例如，在 一个名为 wf01 的工作流，“通用” 分类下，现在想要在这个分类下的 tf_01 文件夹下，新建一个 shell 任务；则 填写 /tf_01 即可；- 如果 tf_01 文件夹不存在，则需要先创建这个文件夹（使用 CreateTaskFolder 接口）才能操作成功； */
  TaskFolderPath?: string | null;
}

/** 任务代码 */
declare interface TaskCode {
  /** 代码内容 */
  CodeContent?: string;
  /** 代码文件大小，单位bytes */
  CodeFileSize?: number;
}

/** 任务代码 */
declare interface TaskCodeResult {
  /** 代码内容 */
  CodeInfo?: string | null;
  /** 代码文件大小，单位KB */
  CodeFileSize?: string | null;
}

/** 任务配置信息 */
declare interface TaskConfiguration {
  /** 代码内容的Base64编码 */
  CodeContent?: string | null;
  /** 任务扩展属性配置列表 */
  TaskExtConfigurationList?: TaskExtParameter[] | null;
  /** 集群ID */
  DataCluster?: string | null;
  /** 指定的运行节点 */
  BrokerIp?: string | null;
  /** 资源池队列名称，需要通过 DescribeProjectClusterQueues 获取 */
  YarnQueue?: string | null;
  /** 来源数据源ID, 需要通过 DescribeDataSourceWithoutInfo 获取 */
  SourceServiceId?: string | null;
  /** 来源数据源类型, 需要通过 DescribeDataSourceWithoutInfo 获取 */
  SourceServiceType?: string | null;
  /** 来源数据源名称, 需要通过 DescribeDataSourceWithoutInfo 获取 */
  SourceServiceName?: string | null;
  /** 目标数据源ID, 需要通过 DescribeDataSourceWithoutInfo 获取 */
  TargetServiceId?: string | null;
  /** 目标数据源类型, 需要通过 DescribeDataSourceWithoutInfo 获取 */
  TargetServiceType?: string | null;
  /** 目标数据源名称, 需要通过 DescribeDataSourceWithoutInfo 获取 */
  TargetServiceName?: string | null;
  /** 资源组ID： 需要通过 DescribeNormalSchedulerExecutorGroups 获取 ExecutorGroupId */
  ResourceGroup?: string | null;
  /** 资源组名称： 需要通过 DescribeNormalSchedulerExecutorGroups 获取 ExecutorGroupName */
  ResourceGroupName?: string | null;
  /** 调度参数 */
  TaskSchedulingParameterList?: TaskSchedulingParameter[] | null;
  /** Bundle使用的ID */
  BundleId?: string | null;
  /** Bundle信息 */
  BundleInfo?: string | null;
}

/** 任务数据库登记项 */
declare interface TaskDataRegistry {
  /** 数据源ID */
  DatasourceId: string | null;
  /** 数据库名称 */
  DatabaseName: string | null;
  /** 表名称 */
  TableName: string | null;
  /** 分区名称 */
  PartitionName: string | null;
  /** 输入输出表类型 输入流 UPSTREAM, 输出流 DOWNSTREAM; */
  DataFlowType: string | null;
  /** 表物理唯一ID */
  TablePhysicalId: string | null;
  /** 库唯一标识 */
  DbGuid?: string | null;
  /** 表唯一标识 */
  TableGuid?: string | null;
}

/** 依赖任务信息 */
declare interface TaskDependDto {
  /** 任务Id */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 工作流id */
  WorkflowId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 项目id */
  ProjectId?: string | null;
  /** 任务状态:- Y: 运行- F: 停止- O: 冻结- T: 停止中- INVALID: 已失效 */
  Status?: string | null;
  /** 任务类型id */
  TaskTypeId?: number | null;
  /** 任务类型描述 - 20 : 通用数据同步 - 25 : ETLTaskType - 26 : ETLTaskType - 30 : python - 31 : pyspark - 34 : hivesql - 35 : shell - 36 : sparksql - 21 : jdbcsql - 32 : dlc - 33 : ImpalaTaskType - 40 : CDWTaskType - 41 : kettle - 42 : TCHouse-X - 43 : TCHouse-X SQL - 46 : dlcsparkTaskType - 47 : TiOneMachineLearningTaskType - 48 : Trino - 50 : DLCPyspark - 23 : TencentDistributedSQL - 39 : spark - 92 : MRTaskType - 38 : ShellScript - 70 : HiveSQLScrip - 130 : 分支 - 131 : 归并 - 132 : Notebook探索 - 133 : SSH节点 - 134 : StarRocks - 137 : For-each - 10000 : 自定义业务通用 */
  TaskTypeDesc?: string | null;
  /** 调度计划展示描述信息 */
  ScheduleDesc?: string | null;
  /** 任务开始时间 */
  StartTime?: string | null;
  /** 任务结束时间 */
  EndTime?: string | null;
  /** 延迟时间 */
  DelayTime?: number | null;
  /** 周期类型：默认为 D支持的类型为 * O: 一次性* Y: 年* M: 月* W: 周* D: 天* H: 小时* I: 分钟* C: crontab表达式类型 */
  CycleType?: string | null;
  /** 负责人 */
  OwnerUin?: string | null;
  /** 弹性周期配置 */
  TaskAction?: string | null;
  /** 调度初始化策略 */
  InitStrategy?: string | null;
  /** crontab表达式 */
  CrontabExpression?: string | null;
}

/** 任务扩展信息参数 */
declare interface TaskExtParameter {
  /** 参数名 */
  ParamKey: string | null;
  /** 参数值 */
  ParamValue: string | null;
}

/** 调度任务实例实体 */
declare interface TaskInstance {
  /** 所属项目id */
  ProjectId?: string | null;
  /** **实例唯一标识** */
  InstanceKey?: string | null;
  /** 文件夹ID */
  FolderId?: string | null;
  /** 文件夹名称 */
  FolderName?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 实例数据时间 */
  CurRunDate?: string | null;
  /** **实例状态**- WAIT_EVENT: 等待事件- WAIT_UPSTREAM: 等待上游- WAIT_RUN: 等待运行- RUNNING: 运行中- SKIP_RUNNING: 跳过运行- FAILED_RETRY: 失败重试- EXPIRED: 失败- COMPLETED: 成功 */
  InstanceState?: string | null;
  /** **实例类型**- 0 表示补录类型- 1 表示周期实例- 2 表示非周期实例 */
  InstanceType?: number | null;
  /** 负责人列表 */
  OwnerUinList?: string[] | null;
  /** 累计运行次数 */
  TotalRunNum?: number | null;
  /** 任务类型描述 */
  TaskType?: string;
  /** 任务类型id */
  TaskTypeId?: number | null;
  /** **任务周期类型**支持过滤多个，条件间为 或 的过滤关系* O: ONEOFF_CYCLE* Y: YEAR_CYCLE* M: MONTH_CYCLE* W: WEEK_CYCLE* D: DAY_CYCLE* H: HOUR_CYCLE* I: MINUTE_CYCLE* C: CRONTAB_CYCLE */
  CycleType?: string | null;
  /** 每次运行失败，下发重试次数限制 */
  TryLimit?: number | null;
  /** **失败重试次数**再次使用 手动重跑 或 补录实例等方式触发运行时，会被重置为 0 后重新计数 */
  Tries?: number | null;
  /** 运行开始时间 */
  StartTime?: string | null;
  /** 运行完成时间 */
  EndTime?: string | null;
  /** 耗费时间, 单位ms */
  CostTime?: number | null;
  /** 计划调度时间 */
  SchedulerTime?: string | null;
  /** 实例最近更新时间, 时间格式为 yyyy-MM-dd HH:mm:ss */
  LastUpdateTime?: string | null;
  /** 执行资源组ID */
  ExecutorGroupId?: string | null;
  /** 资源组名称 */
  ExecutorGroupName?: string | null;
}

/** 调度任务实例详情 */
declare interface TaskInstanceDetail {
  /** 所属项目id */
  ProjectId?: string | null;
  /** **实例唯一标识** */
  InstanceKey?: string | null;
  /** 文件夹ID */
  FolderId?: string | null;
  /** 文件夹名称 */
  FolderName?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** taskType对应的id */
  TaskTypeId?: number;
  /** 任务类型 */
  TaskType?: string | null;
  /** **任务周期类型*** ONEOFF_CYCLE: 一次性* YEAR_CYCLE: 年* MONTH_CYCLE: 月* WEEK_CYCLE: 周* DAY_CYCLE: 天* HOUR_CYCLE: 小时* MINUTE_CYCLE: 分钟* CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string | null;
  /** 实例数据时间 */
  CurRunDate?: string | null;
  /** **实例状态**- WAIT_EVENT: 等待事件- WAIT_UPSTREAM: 等待上游- WAIT_RUN: 等待运行- RUNNING: 运行中- SKIP_RUNNING: 跳过运行- FAILED_RETRY: 失败重试- EXPIRED: 失败- COMPLETED: 成功 */
  InstanceState?: string | null;
  /** **实例类型**- 0 表示补录类型- 1 表示周期实例- 2 表示非周期实例 */
  InstanceType?: number | null;
  /** 负责人列表 */
  OwnerUinList?: string[] | null;
  /** 累计运行次数 */
  TotalRunNum?: number | null;
  /** 每次运行失败，下发重试次数限制 */
  TryLimit?: number | null;
  /** **失败重试次数**再次使用 手动重跑 或 补录实例等方式触发运行时，会被重置为 0 后重新计数 */
  Tries?: number | null;
  /** 耗费时间, 单位ms */
  CostTime?: number | null;
  /** 运行开始时间 */
  StartTime?: string | null;
  /** 运行完成时间 */
  EndTime?: string | null;
  /** 计划调度时间 */
  SchedulerTime?: string | null;
  /** 实例最近更新时间, 时间格式为 yyyy-MM-dd HH:mm:ss */
  LastUpdateTime?: string | null;
  /** 执行资源组ID */
  ExecutorGroupId?: string | null;
  /** 资源组名称 */
  ExecutorGroupName?: string | null;
  /** 简要的任务失败信息 */
  JobErrorMsg?: string | null;
}

/** 任务实例执行列表 */
declare interface TaskInstanceExecutions {
  /** 结果总数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
  /** 记录列表 */
  Items?: InstanceExecution[];
  /** 页码 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
}

/** 实例列表分页实体 */
declare interface TaskInstancePage {
  /** **总条数** */
  TotalCount?: number | null;
  /** **总分页数** */
  TotalPageNumber?: number | null;
  /** 页码 */
  PageNumber?: number | null;
  /** 每页条目数 */
  PageSize?: number | null;
  /** 数据列表 */
  Items?: TaskInstance[] | null;
}

/** 任务运维工作流列表详情 */
declare interface TaskOpsInfo {
  /** 任务ID */
  TaskId?: string;
  /** 任务名 */
  TaskName?: string;
  /** 负责人Id */
  OwnerUin?: string | null;
  /** 任务状态:- Y: 调度中- F: 已下线- O: 已暂停- T: 下线中- INVALID: 已失效 */
  Status?: string;
  /** 文件夹id */
  FolderId?: string;
  /** 文件夹名字 */
  FolderName?: string;
  /** 工作流id */
  WorkflowId?: string;
  /** 工作流名称 */
  WorkflowName?: string;
  /** 项目id */
  ProjectId?: string;
  /** 项目名称 */
  ProjectName?: string;
  /** 更新人名称 */
  UpdateUserUin?: string;
  /** 任务类型Id：* 21:JDBC SQL* 23:TDSQL-PostgreSQL* 26:OfflineSynchronization* 30:Python* 31:PySpark* 33:Impala* 34:Hive SQL* 35:Shell* 36:Spark SQL* 38:Shell Form Mode* 39:Spark* 40:TCHouse-P* 41:Kettle* 42:Tchouse-X* 43:TCHouse-X SQL* 46:DLC Spark* 47:TiOne* 48:Trino* 50:DLC PySpark* 92:MapReduce* 130:Branch Node* 131:Merged Node* 132:Notebook* 133:SSH* 134:StarRocks* 137:For-each* 138:Setats SQL */
  TaskTypeId?: number;
  /** 任务类型描述 - 通用数据同步 - ETLTaskType - ETLTaskType - python - pyspark - HiveSQLTaskType - shell - SparkSQLTaskType - JDBCSQLTaskType - DLCTaskType - ImpalaTaskType - CDWTaskType - kettle - DLCSparkTaskType - TiOne机器学习 - TrinoTaskType - DLCPyspark - spark - mr - shell脚本 - hivesql脚本 - 自定义业务通用 */
  TaskTypeDesc?: string | null;
  /** 任务周期类型* ONEOFF_CYCLE: 一次性* YEAR_CYCLE: 年* MONTH_CYCLE: 月* WEEK_CYCLE: 周* DAY_CYCLE: 天* HOUR_CYCLE: 小时* MINUTE_CYCLE: 分钟* CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string | null;
  /** 资源组id */
  ExecutorGroupId?: string | null;
  /** 调度描述 */
  ScheduleDesc?: string | null;
  /** 资源组名称 */
  ExecutorGroupName?: string;
  /** 最新调度提交时间 */
  LastSchedulerCommitTime?: string | null;
  /** 首次执行时间 */
  FirstRunTime?: string | null;
  /** 最近一次提交时间 */
  FirstSubmitTime?: string;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 最近更新时间 */
  LastUpdateTime?: string | null;
}

/** 任务调度配置信息 */
declare interface TaskSchedulerConfiguration {
  /** 周期类型：支持的类型为ONEOFF_CYCLE: 一次性YEAR_CYCLE: 年MONTH_CYCLE: 月WEEK_CYCLE: 周DAY_CYCLE: 天HOUR_CYCLE: 小时MINUTE_CYCLE: 分钟CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string | null;
  /** 时区 */
  ScheduleTimeZone?: string | null;
  /** 0 2 3 1,L,2 * ? */
  CrontabExpression?: string | null;
  /** 生效日期 */
  StartTime?: string | null;
  /** 结束日期 */
  EndTime?: string | null;
  /** 执行时间 左闭区间 */
  ExecutionStartTime?: string | null;
  /** 执行时间 右闭区间 */
  ExecutionEndTime?: string | null;
  /** 日历调度 取值为 0 和 1， 1为打开，0为关闭，默认为0 */
  CalendarOpen?: string | null;
  /** 日历调度 日历 ID */
  CalendarId?: string | null;
  /** 日历调度 日历名称, 需要从 DescribeScheduleCalendarPageList 中获取 */
  CalendarName?: string | null;
  /** 自依赖, 默认值 serial, 取值为：parallel(并行), serial(串行), orderly(有序) */
  SelfDepend?: string | null;
  /** 上游依赖数组 */
  UpstreamDependencyConfigList?: DependencyTaskBrief[] | null;
  /** 下游依赖数组 */
  DownstreamDependencyConfigList?: DependencyTaskBrief[] | null;
  /** 事件数组 */
  EventListenerList?: EventListener[] | null;
  /** 重跑&补录配置, 默认为 ALL; , ALL 运行成功或失败后皆可重跑或补录, FAILURE 运行成功后不可重跑或补录，运行失败后可重跑或补录, NONE 运行成功或失败后皆不可重跑或补录; */
  AllowRedoType?: string | null;
  /** 输出参数数组 */
  ParamTaskOutList?: OutTaskParameter[] | null;
  /** 输入参数数组 */
  ParamTaskInList?: InTaskParameter[] | null;
  /** 产出登记 */
  TaskOutputRegistryList?: TaskDataRegistry[] | null;
  /** **实例生成策略*** T_PLUS_0: T+0生成,默认策略* T_PLUS_1: T+1生成 */
  InitStrategy?: string | null;
  /** 调度类型: 0 正常调度 1 空跑调度，默认为 0 */
  ScheduleRunType?: number | null;
  /** （废弃，建议使用 DownstreamDependencyConfigList）下游依赖数组 */
  DownStreamDependencyConfigList?: DependencyTaskBrief[] | null;
  /** 任务调度优先级 运行优先级 4高 5中 6低 , 默认:6 */
  RunPriority?: number | null;
  /** 重试策略 重试等待时间,单位分钟: 默认: 5 */
  RetryWait?: number | null;
  /** 重试策略 最大尝试次数, 默认: 4 */
  MaxRetryAttempts?: number | null;
  /** 超时处理策略 运行耗时超时（单位：分钟）默认为 -1 */
  ExecutionTTL?: number | null;
  /** 超时处理策略 等待总时长耗时超时（单位：分钟）默认为 -1 */
  WaitExecutionTotalTTL?: string | null;
  /** 调度类型: 0 正常调度 1 空跑调度，默认为 0 */
  ScheduleType?: number | null;
  /** 任务调度优先级 运行优先级 4高 5中 6低 , 默认:6 */
  RunPriorityType?: number | null;
  /** 重试策略 重试等待时间,单位分钟: 默认: 5 */
  RetryWaitMinute?: number | null;
  /** 重试策略 最大尝试次数, 默认: 4 */
  MaxRetryNumber?: number | null;
  /** 超时处理策略 运行耗时超时（单位：分钟）默认为 -1 */
  ExecutionTTLMinute?: number | null;
  /** 超时处理策略 等待总时长耗时超时（单位：分钟）默认为 -1 */
  WaitExecutionTotalTTLMinute?: number | null;
}

/** 任务调度变量参数 */
declare interface TaskSchedulingParameter {
  /** 参数名 */
  ParamKey: string | null;
  /** 参数值 */
  ParamValue: string | null;
}

/** 任务版本列表信息 */
declare interface TaskVersion {
  /** 保存时间 */
  CreateTime?: string | null;
  /** 版本号 */
  VersionNum?: string | null;
  /** 创建人 */
  CreateUserUin?: string | null;
  /** 保存版本id */
  VersionId?: string | null;
  /** 版本描述信息 */
  VersionRemark?: string | null;
  /** 审批状态（只有提交版本有） */
  ApproveStatus?: string | null;
  /** 生产状态（只有提交版本有） */
  Status?: string | null;
  /** 审批人（只有提交版本有） */
  ApproveUserUin?: string | null;
}

/** 任务版本列表信息 */
declare interface TaskVersionDetail {
  /** 保存时间 */
  CreateTime?: string | null;
  /** 版本号 */
  VersionNum?: string | null;
  /** 版本创建人 */
  CreateUserUin?: string | null;
  /** 保存版本Id */
  VersionId?: string | null;
  /** 版本描述信息 */
  VersionRemark?: string | null;
  /** 审批状态（只有提交版本有） */
  ApproveStatus?: string | null;
  /** 生产状态（只有提交版本有） */
  ApproveTime?: string | null;
  /** 版本的任务详情 */
  Task?: Task | null;
  /** 审批人Id */
  ApproveUserUin?: string | null;
}

/** TechnicalMetadata */
declare interface TechnicalMetadata {
  /** 责任人 */
  Owner?: string | null;
  /** 数据表位置 */
  Location?: string | null;
  /** 存储大小 */
  StorageSize?: number | null;
}

/** 告警超时配置规则信息 */
declare interface TimeOutStrategyInfo {
  /** 超时告警超时配置：1.预计运行耗时超时，2.预计完成时间超时，3.预计等待调度耗时超时，4.预计周期内完成但实际未完成 */
  RuleType?: number | null;
  /** 超时值配置类型1--指定值2--平均值 */
  Type?: number | null;
  /** 超时指定值小时， 默认 为0 */
  Hour?: number | null;
  /** 超时指定值分钟， 默认为1 */
  Min?: number | null;
  /** 超时时间对应的时区配置， 如 UTC+7, 默认为UTC+8 */
  ScheduleTimeZone?: string | null;
}

/** 资源组指标趋势 */
declare interface TrendData {
  /** 时间戳 */
  Timestamp?: number;
  /** 指标值 */
  Value?: number;
}

/** 更新文件夹结果 */
declare interface UpdateFolderResult {
  /** 更新状态,true表示更新成功，false表示更新失败 */
  Status?: boolean;
}

/** 更新资源文件结果 */
declare interface UpdateResourceFileResult {
  /** true */
  Status?: boolean;
}

/** 更新任务基本属性信息 */
declare interface UpdateTaskBaseAttribute {
  /** 任务名称 */
  TaskName: string;
  /** 任务负责人ID */
  OwnerUin: string;
  /** 任务描述 */
  TaskDescription: string;
  /** 注意：- 路径上不要填写任务节点类型；例如，在 一个名为 wf01 的工作流，“通用” 分类下，现在想要在这个分类下的 tf_01 文件夹下，新建一个 shell 任务；则 填写 /tf_01 即可；- 如果 tf_01 文件夹不存在，则需要先创建这个文件夹（使用 CreateTaskFolder 接口）才能操作成功； */
  TaskFolderPath?: string;
}

/** 更新任务对象入参 */
declare interface UpdateTaskBrief {
  /** 任务基本属性 */
  TaskBaseAttribute: UpdateTaskBaseAttribute;
  /** 任务配置 */
  TaskConfiguration: TaskConfiguration;
  /** 任务调度配置 */
  TaskSchedulerConfiguration: TaskSchedulerConfiguration;
}

/** 更新任务返回体 */
declare interface UpdateTaskResult {
  /** 处理结果，成功返回 true，不成功返回 false */
  Status?: boolean | null;
}

/** 批量修改任务负责人结果 */
declare interface UpdateTasksOwner {
  /** 修改任务责任人结果 */
  Status?: boolean;
}

/** 更新工作流结果 */
declare interface UpdateWorkflowResult {
  /** 更新工作流结果 */
  Status?: boolean;
}

/** 查询工作流详细信息 */
declare interface WorkflowDetail {
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 责任人ID */
  OwnerUin?: string | null;
  /** 创建人ID */
  CreateUserUin?: string | null;
  /** 工作流类型，cycle和manual */
  WorkflowType?: string | null;
  /** 工作流参数数组 */
  WorkflowParams?: ParamInfo[] | null;
  /** 统一调度参数 */
  WorkflowSchedulerConfiguration?: WorkflowSchedulerConfiguration | null;
  /** 工作流描述 */
  WorkflowDesc?: string | null;
  /** 工作流所属路径 */
  Path?: string | null;
  /** BundleId项 */
  BundleId?: string | null;
  /** BundleInfo项 */
  BundleInfo?: string | null;
}

/** 文件夹信息 */
declare interface WorkflowFolder {
  /** 项目ID */
  ProjectId?: string;
  /** 文件夹ID */
  FolderId?: string;
  /** 文件夹绝对路径 */
  FolderPath?: string;
  /** 创建人ID */
  CreateUserUin?: string | null;
}

/** 资源文件分页 */
declare interface WorkflowFolderPage {
  /** 数据页数，大于等于1 */
  PageNumber?: number | null;
  /** 每页显示的数据条数，最小为10条，最大为200 条 */
  PageSize?: number | null;
  /** 文件夹总数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
  /** 文件夹列表 */
  Items?: WorkflowFolder[];
}

/** 获取工作流的列表信息item */
declare interface WorkflowInfo {
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流类型，cycle及manual */
  WorkflowType?: string | null;
  /** 负责人ID */
  OwnerUin?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 最新修改时间 */
  ModifyTime?: string | null;
  /** 最后更新人ID */
  UpdateUserUin?: string | null;
  /** 工作流描述 */
  WorkflowDesc?: string | null;
  /** 创建人ID */
  CreateUserUin?: string | null;
}

/** 工作流统一调度出参 */
declare interface WorkflowSchedulerConfiguration {
  /** 时区 */
  ScheduleTimeZone?: string | null;
  /** 周期类型：支持的类型为ONEOFF_CYCLE: 一次性YEAR_CYCLE: 年MONTH_CYCLE: 月WEEK_CYCLE: 周DAY_CYCLE: 天HOUR_CYCLE: 小时MINUTE_CYCLE: 分钟CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string | null;
  /** 自依赖, 默认值 serial, 取值为：parallel(并行), serial(串行), orderly(有序) */
  SelfDepend?: string | null;
  /** 生效开始时间 */
  StartTime?: string | null;
  /** 生效结束时间 */
  EndTime?: string | null;
  /** 工作流依赖，yes or no */
  DependencyWorkflow?: string | null;
  /** 执行时间左闭区间，示例：00:00 */
  ExecutionStartTime?: string | null;
  /** 执行时间右闭区间，示例：23:59 */
  ExecutionEndTime?: string | null;
  /** cron表达式 */
  CrontabExpression?: string | null;
  /** 是否开启日历调度 1 开启 0关闭 */
  CalendarOpen?: string | null;
  /** 日历名称 */
  CalendarName?: string | null;
  /** 日历id */
  CalendarId?: string | null;
}

/** 工作流统一调度参数入参依赖任务信息取值说明表：| 当前任务周期类型 | 上游任务周期类型 | 配置方式 | MainCyclicConfig取值 | 时间维度/实例范围 | SubordinateCyclicConfig取值 | offset取值 || ---------------- | ---------------- | -------- | -------------------- | --------------------------- | --------------------------------- | ---------------------- || HOUR_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || MINUTE_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || DAY_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || DAY_CYCLE | WEEK_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || HOUR_CYCLE | HOUR_CYCLE | 推荐策略 | HOUR | 按小时/最近实例 | CURRENT_HOUR | 无 || HOUR_CYCLE | HOUR_CYCLE | 推荐策略 | HOUR | 按小时/前一周期 | PREVIOUS_HOUR_CYCLE | 无 || HOUR_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | WEEK | 按周/上周 | PREVIOUS_WEEK | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | WEEK | 按周/上周五 | PREVIOUS_FRIDAY | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | WEEK | 按周/上周日 | PREVIOUS_WEEKEND | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 、 | CURRENT_DAY | 无 || WEEK_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/前一天 | PREVIOUS_DAY | 无 || WEEK_CYCLE | ONEOFF_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || HOUR_CYCLE | MINUTE_CYCLE | 推荐策略 | HOUR | 按小时/前一个小时(-60,0] | PREVIOUS_HOUR_LATER_OFFSET_MINUTE | 无 || HOUR_CYCLE | MINUTE_CYCLE | 推荐策略 | HOUR | 按小时/前一个小时 | PREVIOUS_HOUR | 无 || HOUR_CYCLE | MINUTE_CYCLE | 推荐策略 | HOUR | 按小时/当前小时 | CURRENT_HOUR | 无 || YEAR_CYCLE | WEEK_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || WEEK_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || MINUTE_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || WEEK_CYCLE | HOUR_CYCLE | 推荐策略 | WEEK | 按周/上周 | PREVIOUS_WEEK | 无 || WEEK_CYCLE | HOUR_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || MINUTE_CYCLE | HOUR_CYCLE | 推荐策略 | HOUR | 按小时/当前小时 | CURRENT_HOUR | 无 || HOUR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | HOUR_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || MONTH_CYCLE | HOUR_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | ONEOFF_CYCLE | 推荐策略 | MONTH | 按月/当月 | CURRENT_MONTH | 无 || DAY_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || DAY_CYCLE | MONTH_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || MONTH_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || ONEOFF_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || MINUTE_CYCLE | MINUTE_CYCLE | 推荐策略 | MINUTE | 按分钟/当前分钟 | CURRENT_MINUTE | 无 || MINUTE_CYCLE | MINUTE_CYCLE | 推荐策略 | MINUTE | 按分钟/前一周期 | PREVIOUS_MINUTE_CYCLE | 无 || YEAR_CYCLE | MINUTE_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || ONEOFF_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || DAY_CYCLE | MINUTE_CYCLE | 推荐策略 | DAY | 按天/前一天(-24 * 60,0] | PREVIOUS_DAY_LATER_OFFSET_MINUTE | 无 || DAY_CYCLE | MINUTE_CYCLE | 推荐策略 | DAY | 按天/前一天 | PREVIOUS_DAY | 无 || DAY_CYCLE | MINUTE_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || MINUTE_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || WEEK_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || WEEK_CYCLE | WEEK_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || YEAR_CYCLE | YEAR_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || YEAR_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || YEAR_CYCLE | HOUR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || MINUTE_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || ONEOFF_CYCLE | MINUTE_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || HOUR_CYCLE | ONEOFF_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || WEEK_CYCLE | MINUTE_CYCLE | 推荐策略 | WEEK | 按周/上周 | PREVIOUS_WEEK | 无 || WEEK_CYCLE | MINUTE_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || DAY_CYCLE | HOUR_CYCLE | 推荐策略 | DAY | 按天/前一天(-24,0] | PREVIOUS_DAY_LATER_OFFSET_HOUR | 无 || DAY_CYCLE | HOUR_CYCLE | 推荐策略 | DAY | 按天/前一天[-24,0) | PREVIOUS_DAY | 无 || DAY_CYCLE | HOUR_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本年所有月 | ALL_MONTH_OF_YEAR | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/上月末 | PREVIOUS_END_OF_MONTH | 无 || YEAR_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/上月初 | PREVIOUS_BEGIN_OF_MONTH | 无 || ONEOFF_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || DAY_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || ONEOFF_CYCLE | HOUR_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || DAY_CYCLE | ONEOFF_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || MINUTE_CYCLE | ONEOFF_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || WEEK_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || WEEK_CYCLE | MONTH_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || YEAR_CYCLE | ONEOFF_CYCLE | 推荐策略 | YEAR | 按年/当年 | CURRENT_YEAR | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | MONTH | 按月/上月末 | PREVIOUS_END_OF_MONTH | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || MONTH_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/前一天 | PREVIOUS_DAY | 无 || YEAR_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/本年所有天 | ALL_DAY_OF_YEAR | 无 || YEAR_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || YEAR_CYCLE | DAY_CYCLE | 推荐策略 | DAY | 按天/前一天 | PREVIOUS_DAY | 无 || HOUR_CYCLE | WEEK_CYCLE | 推荐策略 | WEEK | 按周/本周 | CURRENT_WEEK | 无 || MONTH_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/当月 | CURRENT_MONTH | 无 || MONTH_CYCLE | MONTH_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || MONTH_CYCLE | MINUTE_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || MONTH_CYCLE | MINUTE_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | WEEK_CYCLE | 推荐策略 | MONTH | 按月/上月 | PREVIOUS_MONTH | 无 || MONTH_CYCLE | WEEK_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || MONTH_CYCLE | WEEK_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || DAY_CYCLE | YEAR_CYCLE | 推荐策略 | YEAR | 按年/本年 | CURRENT_YEAR | 无 || DAY_CYCLE | YEAR_CYCLE | 推荐策略 | DAY | 按天/最近一次数据时间的实例 | RECENT_DATE | 无 || ONEOFF_CYCLE | ONEOFF_CYCLE | 推荐策略 | DAY | 按天/当天 | CURRENT_DAY | 无 || ONEOFF_CYCLE | MONTH_CYCLE | 推荐策略 | MONTH | 按月/本月 | CURRENT_MONTH | 无 || CRONTAB_CYCLE | CRONTAB_CYCLE | 推荐策略 | CRONTAB | 无 | CURRENT | 无 || HOUR_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | HOUR_CYCLE | 自定义 | RANGE_HOUR | 区间(小时) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | DAY_CYCLE | 自定义 | RANGE_DAY | 区间(天) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | MINUTE_CYCLE | 自定义 | RANGE_MINUTE | 区间(分钟) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || HOUR_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || MINUTE_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || WEEK_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | HOUR_CYCLE | 自定义 | LIST_HOUR | 列表(小时) | 无 | 逗号分隔的整数，如-1,0 || DAY_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || YEAR_CYCLE | DAY_CYCLE | 自定义 | LIST_DAY | 列表(天) | 无 | 逗号分隔的整数，如-1,0 || MONTH_CYCLE | MINUTE_CYCLE | 自定义 | LIST_MINUTE | 列表(分钟) | 无 | 逗号分隔的整数，如-1,0 | */
declare interface WorkflowSchedulerConfigurationInfo {
  /** 时区 */
  ScheduleTimeZone: string;
  /** 周期类型：支持的类型为ONEOFF_CYCLE: 一次性YEAR_CYCLE: 年MONTH_CYCLE: 月WEEK_CYCLE: 周DAY_CYCLE: 天HOUR_CYCLE: 小时MINUTE_CYCLE: 分钟CRONTAB_CYCLE: crontab表达式类型 */
  CycleType: string;
  /** 自依赖, 默认值 serial, 取值为：parallel(并行), serial(串行), orderly(有序) */
  SelfDepend: string;
  /** 生效开始时间 */
  StartTime: string;
  /** 生效结束时间 */
  EndTime: string;
  /** cron表达式 */
  CrontabExpression: string;
  /** 工作流依赖，yes or no */
  DependencyWorkflow?: string;
  /** 0：不修改 1：将任务的上游依赖配置改为默认值 */
  ModifyCycleValue?: string;
  /** 工作流存在跨工作流依赖且使用cron表达式调度。如果保存统一调度，会断开不支持的依赖关系 */
  ClearLink?: boolean;
  /** ModifyCycleValue为1的时候生效，表示默认修改的上游依赖-时间维度，取值为：* CRONTAB* DAY* HOUR* LIST_DAY* LIST_HOUR* LIST_MINUTE* MINUTE* MONTH* RANGE_DAY* RANGE_HOUR* RANGE_MINUTE* WEEK* YEARhttps://capi.woa.com/object/detail?product=wedata&env=api_dev&version=2025-08-06&name=WorkflowSchedulerConfigurationInfo */
  MainCyclicConfig?: string;
  /** ModifyCycleValue为1的时候生效，表示默认修改的上游依赖-实例范围取值为：* ALL_DAY_OF_YEAR* ALL_MONTH_OF_YEAR* CURRENT* CURRENT_DAY* CURRENT_HOUR* CURRENT_MINUTE* CURRENT_MONTH* CURRENT_WEEK* CURRENT_YEAR* PREVIOUS_BEGIN_OF_MONTH* PREVIOUS_DAY* PREVIOUS_DAY_LATER_OFFSET_HOUR* PREVIOUS_DAY_LATER_OFFSET_MINUTE* PREVIOUS_END_OF_MONTH* PREVIOUS_FRIDAY* PREVIOUS_HOUR* PREVIOUS_HOUR_CYCLE* PREVIOUS_HOUR_LATER_OFFSET_MINUTE* PREVIOUS_MINUTE_CYCLE* PREVIOUS_MONTH* PREVIOUS_WEEK* PREVIOUS_WEEKEND* RECENT_DATEhttps://capi.woa.com/object/detail?product=wedata&env=api_dev&version=2025-08-06&name=WorkflowSchedulerConfigurationInfo */
  SubordinateCyclicConfig?: string;
  /** 执行时间左闭区间，示例：00:00，只有周期类型为MINUTE_CYCLE才需要填入 */
  ExecutionStartTime?: string;
  /** 执行时间右闭区间，示例：23:59，只有周期类型为MINUTE_CYCLE才需要填入 */
  ExecutionEndTime?: string;
  /** 是否开启日历调度 1 开启 0关闭 */
  CalendarOpen?: string;
  /** 日历id */
  CalendarId?: string;
}

declare interface AddCalcEnginesToProjectRequest {
  /** 修改的项目ID */
  ProjectId: string;
  /** DLC集群信息 */
  DLCInfo: DLCClusterInfo[];
}

declare interface AddCalcEnginesToProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateResourceGroupToProjectRequest {
  /** 资源组id */
  ResourceGroupId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface AssociateResourceGroupToProjectResponse {
  /** 输出 */
  Data?: ResourceStatus | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCodeFileRequest {
  /** 项目ID */
  ProjectId: string;
  /** 代码文件名称 */
  CodeFileName: string;
  /** 父文件夹path，例如/aaa/bbb/ccc，路径头需带斜杠，根目录传/ */
  ParentFolderPath: string;
  /** 代码文件配置 */
  CodeFileConfig?: CodeFileConfig;
  /** 代码文件内容 */
  CodeFileContent?: string;
}

declare interface CreateCodeFileResponse {
  /** 结果 */
  Data?: CodeFile;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCodeFolderRequest {
  /** 项目ID */
  ProjectId: string;
  /** 文件夹名称 */
  FolderName: string;
  /** 父文件夹path，例如/aaa/bbb/ccc，路径头需带斜杠，根目录传/ */
  ParentFolderPath: string;
}

declare interface CreateCodeFolderResponse {
  /** 成功true，失败false */
  Data?: CodeStudioFolderResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDataBackfillPlanRequest {
  /** 所属项目Id */
  ProjectId: string;
  /** 补录任务集合 */
  TaskIds: string[];
  /** 补录任务的数据时间配置 */
  DataBackfillRangeList: DataBackfillRange[];
  /** 时区，默认UTC+8 */
  TimeZone?: string;
  /** 数据补录计划名称，不填则由系统随机生成一串字符 */
  DataBackfillPlanName?: string;
  /** 检查父任务类型，取值范围：- NONE-全部不检查- ALL-检查全部上游父任务- MAKE_SCOPE-只在（当前补录计划）选中任务中检查,默认NONE不检查 */
  CheckParentType?: string;
  /** 补录是否忽略事件依赖,默认true */
  SkipEventListening?: boolean;
  /** 自定义的工作流自依赖，yes或者no；如果不配置，则使用工作流原有自依赖 */
  RedefineSelfWorkflowDependency?: string;
  /** 自定义实例运行并发度, 如果不配置，则使用任务原有自依赖 */
  RedefineParallelNum?: number;
  /** 调度资源组id，为空则表示使用任务原有调度执行资源组 */
  SchedulerResourceGroupId?: string;
  /** 集成任务资源组id，为空则表示使用任务原有调度执行资源组 */
  IntegrationResourceGroupId?: string;
  /** 自定义参数，可以重新指定任务的参数，方便补录实例执行新的逻辑 */
  RedefineParamList?: KVPair[];
  /** 补录是实例数据时间顺序，生效必须满足2个条件:1. 必须同周期任务2. 优先按依赖关系执行，无依赖关系影响的情况下按配置执行顺序执行 可选值- NORMAL: 不设置- ORDER: 顺序- REVERSE: 逆序不设置默认为NORMAL */
  DataTimeOrder?: string;
  /** 补录实例重新生成周期，如果设置会重新指定补录任务实例的生成周期，目前只会将天实例转换成每月1号生成的实例* MONTH_CYCLE: 月 */
  RedefineCycleType?: string;
}

declare interface CreateDataBackfillPlanResponse {
  /** 数据补录计划创建结果 */
  Data?: CreateDataReplenishmentPlan;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDataSourceRequest {
  /** 数据源项目ID */
  ProjectId: string;
  /** 数据源名称 */
  Name: string;
  /** 数据源类型:枚举值- MYSQL- TENCENT_MYSQL- POSTGRE- ORACLE- SQLSERVER- FTP- HIVE- HUDI- HDFS- ICEBERG- KAFKA- DTS_KAFKA- HBASE- SPARK- TBASE- DB2- DM- GAUSSDB- GBASE- IMPALA- ES- TENCENT_ES- GREENPLUM- SAP_HANA- SFTP- OCEANBASE- CLICKHOUSE- KUDU- VERTICA- REDIS- COS- DLC- DORIS- CKAFKA- S3_DATAINSIGHT- TDSQL- TDSQL_MYSQL- MONGODB- TENCENT_MONGODB- REST_API- TiDB- StarRocks- Trino- Kyuubi- TCHOUSE_X- TCHOUSE_P- TCHOUSE_C- TCHOUSE_D- INFLUXDB- BIG_QUERY- SSH- BLOB- TDSQL_POSTGRE- GDB- TDENGINE- TDSQLC- FileSystem */
  Type: string;
  /** 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同> deployType: CONNSTR_PUBLICDB(公网实例) CONNSTR_CVMDB(自建实例)INSTANCE(云实例)```mysql: 自建实例{ "deployType": "CONNSTR_CVMDB", "url": "jdbc:mysql://1.1.1.1:1111/database", "username": "root", "password": "root", "region": "ap-shanghai", "vpcId": "vpc-kprq42yo", "type": "MYSQL"}mysql: 云实例{ "instanceid": "cdb-12uxdo5e", "db": "db", "region": "ap-shanghai", "username": "msyql", "password": "mysql", "deployType": "INSTANCE", "type": "TENCENT_MYSQL"}sql_server: { "deployType": "CONNSTR_PUBLICDB", "url": "jdbc:sqlserver://1.1.1.1:223;DatabaseName=database", "username": "user_1", "password": "pass_2", "type": "SQLSERVER"}redis: redisType: -NO_ACCOUT(免账号) -SELF_ACCOUNT(自定义账号){ "deployType": "CONNSTR_PUBLICDB", "username":"" "password": "pass", "ip": "1.1.1.1", "port": "6379", "redisType": "NO_ACCOUT", "type": "REDIS"}oracle: { "deployType": "CONNSTR_CVMDB", "url": "jdbc:oracle:thin:@1.1.1.1:1521:prod", "username": "oracle", "password": "pass", "region": "ap-shanghai", "vpcId": "vpc-kprq42yo", "type": "ORACLE"}mongodb: advanceParams(自定义参数，会拼接至url后){ "advanceParams": [ { "key": "authSource", "value": "auth" } ], "db": "admin", "deployType": "CONNSTR_PUBLICDB", "username": "user", "password": "pass", "type": "MONGODB", "host": "1.1.1.1:9200"}postgresql:{ "deployType": "CONNSTR_PUBLICDB", "url": "jdbc:postgresql://1.1.1.1:1921/database", "username": "user", "password": "pass", "type": "POSTGRE"}kafka: authType: - sasl - jaas - sasl_plaintext - sasl_ssl - GSSAPI ssl: -PLAIN -GSSAPI{ "deployType": "CONNSTR_PUBLICDB", "host": "1.1.1.1:9092", "ssl": "GSSAPI", "authType": "sasl", "type": "KAFKA", "principal": "aaaa", "serviceName": "kafka"}cos:{ "region": "ap-shanghai", "deployType": "INSTANCE", "secretId": "aaaaa", "secretKey": "sssssss", "bucket": "aaa", "type": "COS"}``` */
  ProdConProperties: string;
  /** 开发环境数据源配置信息，若项目为标准模式，则此字段必填 */
  DevConProperties?: string;
  /** 生产环境数据源文件上传 */
  ProdFileUpload?: DataSourceFileUpload;
  /** 开发环境数据源文件上传 */
  DevFileUpload?: DataSourceFileUpload;
  /** 数据源展示名，为了可视化查看 */
  DisplayName?: string;
  /** 数据源描述信息 */
  Description?: string;
}

declare interface CreateDataSourceResponse {
  /** 主键ID */
  Data?: DataSourceResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpsAlarmRuleRequest {
  /** 项目id */
  ProjectId: string;
  /** 告警规则名称 */
  AlarmRuleName: string;
  /** 监控对象业务id列表，根据MonitorType 的设置传入不同的业务id，如下1（任务）： MonitorObjectIds为任务id列表2（工作流）： MonitorObjectIds 为工作流id列表(工作流id可从接口ListWorkflows获取)3（项目）： MonitorObjectIds为项目id列表 */
  MonitorObjectIds: string[];
  /** 告警规则监控类型 failure：失败告警 ；overtime：超时告警 success：成功告警; backTrackingOrRerunSuccess: 补录重跑成功告警 backTrackingOrRerunFailure：补录重跑失败告警； 项目波动告警 projectFailureInstanceUpwardFluctuationAlarm： 当天失败实例数向上波动率超过阀值告警； projectSuccessInstanceDownwardFluctuationAlarm：当天成功实例数向下波动率超过阀值告警； 离线集成任务对账告警： reconciliationFailure： 离线对账任务失败告警 reconciliationOvertime： 离线对账任务运行超时告警 reconciliationMismatch： 数据对账任务不一致条数超过阀值告警 */
  AlarmTypes: string[];
  /** 告警接收人配置信息 */
  AlarmGroups: AlarmGroup[];
  /** 监控对象类型, 任务维度监控： 可按照任务/工作流/项目来配置：1.任务、2.工作流、3.项目（默认为1.任务）项目维度监控： 项目整体任务波动告警， 7：项目波动监控告警 */
  MonitorObjectType?: number;
  /** 告警规则配置信息成功告警无需配置；失败告警可以配置首次失败告警或者所有重试失败告警；超时配置需要配置超时类型及超时阀值；项目波动告警需要配置波动率及防抖周期配置 */
  AlarmRuleDetail?: AlarmRuleDetail;
  /** 告警级别 1.普通、2.重要、3.紧急（默认1.普通） */
  AlarmLevel?: number;
  /** 告警规则描述 */
  Description?: string;
}

declare interface CreateOpsAlarmRuleResponse {
  /** 告警规则唯一id */
  Data?: CreateAlarmRuleData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProjectMemberRequest {
  /** 项目id */
  ProjectId: string;
  /** 用户id */
  UserUins: string[];
  /** 角色id */
  RoleIds: string[];
}

declare interface CreateProjectMemberResponse {
  /** 返回数据 */
  Data?: ProjectResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProjectRequest {
  /** 项目基本信息 */
  Project: ProjectRequest;
  /** DLC绑定集群信息 */
  DLCInfo?: DLCClusterInfo;
  /** 绑定资源组的id列表 */
  ResourceIds?: string[];
}

declare interface CreateProjectResponse {
  /** 创建项目结果 */
  Data?: CreateProjectResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateResourceFileRequest {
  /** 项目ID */
  ProjectId: string;
  /** 资源文件名称, 尽可能和上传文件名保持一致 */
  ResourceName: string;
  /** cos存储桶名称, 可从GetResourceCosPath接口获取 */
  BucketName: string;
  /** BucketName桶对应的cos存储桶区域 */
  CosRegion: string;
  /** 项目中资源文件上传的路径, 取值示例: /wedata/qxxxm/, 根目录,请使用/即可 */
  ParentFolderPath: string;
  /** - 上传文件及手填两种方式只能选择其一，如果两者均提供，取值顺序为文件>手填值- 手填值必须是存在的cos路径, parentFolderPath为父文件夹路径, name为文件名, 手填值取值示例: /datastudio/resource/projectId/parentFolderPath/name */
  ResourceFile: string;
  /** bundle客户端ID */
  BundleId?: string;
  /** bundle客户端信息 */
  BundleInfo?: string;
}

declare interface CreateResourceFileResponse {
  /** 创建资源文件结果 */
  Data?: CreateResourceFileResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateResourceFolderRequest {
  /** 项目ID */
  ProjectId: string;
  /** 父文件夹绝对路径, 取值示例 /wedata/test, 根目录,请使用/即可 */
  ParentFolderPath: string;
  /** 文件夹名称 */
  FolderName: string;
}

declare interface CreateResourceFolderResponse {
  /** 创建文件夹结果，如果创建失败则报错。 */
  Data?: CreateFolderResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateResourceGroupRequest {
  /** 资源组名称。创建通用资源组的名称，必须以字母开头，可包含字母、数字、下划线（_），最多 64 个字符。 */
  Name: string;
  /** 开通的资源组信息 */
  Type: ResourceType;
  /** 是否自动续费 */
  AutoRenewEnabled: boolean;
  /** 购买时长，单位月 */
  PurchasePeriod: number;
  /** vpcId */
  VpcId: string;
  /** 子网 */
  SubNet: string;
  /** 资源购买地域 */
  ResourceRegion: string;
  /** 关联项目空间项目id */
  AssociatedProjectId?: string;
  /** 资源组描述 */
  Description?: string;
}

declare interface CreateResourceGroupResponse {
  /** 是否开启成功 */
  Data?: ResourceResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSQLFolderRequest {
  /** 文件夹名称 */
  FolderName: string;
  /** 项目id */
  ProjectId: string;
  /** 父文件夹path，/aaa/bbb/ccc，路径头需带斜杠，查询根目录传/ */
  ParentFolderPath: string;
  /** 权限范围：SHARED, PRIVATE */
  AccessScope?: string;
}

declare interface CreateSQLFolderResponse {
  /** 成功true，失败false */
  Data?: SqlCreateResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSQLScriptRequest {
  /** 脚本名称 */
  ScriptName: string;
  /** 项目Id */
  ProjectId: string;
  /** 父文件夹path，/aaa/bbb/ccc，根目录为空字符串或/ */
  ParentFolderPath?: string;
  /** 数据探索脚本配置 */
  ScriptConfig?: SQLScriptConfig;
  /** 脚本内容，如有值，则要将内容进行base64编码 */
  ScriptContent?: string;
  /** 权限范围：SHARED, PRIVATE */
  AccessScope?: string;
}

declare interface CreateSQLScriptResponse {
  /** 结果 */
  Data?: SQLScript;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务基本属性 */
  TaskBaseAttribute: CreateTaskBaseAttribute;
  /** 任务配置 */
  TaskConfiguration: CreateTaskConfiguration;
  /** 任务调度配置 */
  TaskSchedulerConfiguration: CreateTaskSchedulerConfiguration;
}

declare interface CreateTaskResponse {
  /** 任务ID */
  Data?: CreateTaskResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkflowFolderRequest {
  /** 项目ID */
  ProjectId: string;
  /** 父文件夹绝对路径，如/abc/de，如果是根目录则传/ */
  ParentFolderPath: string;
  /** 要创建的文件夹名字 */
  FolderName: string;
}

declare interface CreateWorkflowFolderResponse {
  /** 创建文件夹结果，如果创建失败则报错。 */
  Data?: CreateFolderResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkflowRequest {
  /** 项目ID */
  ProjectId: string;
  /** 工作流名称 */
  WorkflowName: string;
  /** 所属文件夹路径 */
  ParentFolderPath: string;
  /** 工作流类型,取值示例：cycle 周期工作流；manual 手动工作流，默认传入cycle */
  WorkflowType?: string;
  /** 工作流描述 */
  WorkflowDesc?: string;
  /** 工作流负责人ID */
  OwnerUin?: string;
  /** 工作流参数 */
  WorkflowParams?: ParamInfo[];
  /** 统一调度信息 */
  WorkflowSchedulerConfiguration?: WorkflowSchedulerConfigurationInfo;
  /** BundleId项 */
  BundleId?: string;
  /** Bundle信息 */
  BundleInfo?: string;
}

declare interface CreateWorkflowResponse {
  /** 返回工作流ID */
  Data?: CreateWorkflowResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCodeFileRequest {
  /** 项目ID */
  ProjectId: string;
  /** 代码文件ID，参数值来自CreateCodeFile接口的返回 */
  CodeFileId: string;
}

declare interface DeleteCodeFileResponse {
  /** 执行结果 */
  Data?: CodeStudioFileActionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCodeFolderRequest {
  /** 项目ID */
  ProjectId: string;
  /** 文件夹ID，参数值来自CreateCodeFolder接口的返回 */
  FolderId: string;
}

declare interface DeleteCodeFolderResponse {
  /** 执行结果 */
  Data?: CodeStudioFolderActionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDataSourceRequest {
  /** 项目id */
  ProjectId: string;
  /** 数据源id */
  Id: number;
}

declare interface DeleteDataSourceResponse {
  /** 是否删除成功 */
  Data?: DataSourceStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLineageRequest {
  /** 需要删除的血缘关系列表 */
  Relations: LineagePair[];
}

declare interface DeleteLineageResponse {
  /** 删除结果 */
  Data?: OperateResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteOpsAlarmRuleRequest {
  /** 项目id */
  ProjectId: string;
  /** 告警规则唯一id，接口CreateAlarmRule返回与AlarmRuleName二选一 */
  AlarmRuleId: string;
}

declare interface DeleteOpsAlarmRuleResponse {
  /** 是否删除成功 */
  Data?: DeleteAlarmRuleResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectMemberRequest {
  /** 项目ID */
  ProjectId: string;
  /** 用户ID列表 */
  UserUins: string[];
}

declare interface DeleteProjectMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteResourceFileRequest {
  /** 项目ID */
  ProjectId: string;
  /** 资源ID, 可通过ListResourceFiles接口获取 */
  ResourceId: string;
}

declare interface DeleteResourceFileResponse {
  /** 资源删除结果 */
  Data?: DeleteResourceFileResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteResourceFolderRequest {
  /** 项目ID */
  ProjectId: string;
  /** 文件夹ID, 可通过ListResourceFolders接口获取 */
  FolderId: string;
}

declare interface DeleteResourceFolderResponse {
  /** true代表删除成功，false代表删除失败 */
  Data?: DeleteFolderResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteResourceGroupRequest {
  /** 资源组id */
  Id: string;
}

declare interface DeleteResourceGroupResponse {
  /** 是否销毁成功 */
  Data?: ResourceStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSQLFolderRequest {
  /** 文件夹Id */
  FolderId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DeleteSQLFolderResponse {
  /** 操作结果 */
  Data?: SQLContentActionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSQLScriptRequest {
  /** 探索脚本Id */
  ScriptId: string;
  /** 项目Id */
  ProjectId: string;
}

declare interface DeleteSQLScriptResponse {
  /** 执行结果 */
  Data?: SQLContentActionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTaskRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务ID和VirtualTaskId选填一个 */
  TaskId: string;
  /** 任务操作是否消息通知下游任务责任人true：通知false：不通知不传默认false */
  OperateInform?: boolean;
  /** 任务删除方式true：不针对下游任务实例进行强制失败false：针对下游任务实例进行强制失败不传默认false */
  DeleteMode?: boolean;
}

declare interface DeleteTaskResponse {
  /** 是否删除成功 */
  Data?: DeleteTaskResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkflowFolderRequest {
  /** 项目ID */
  ProjectId: string;
  /** 文件夹ID，可通过ListWorkflowFolders接口获取 */
  FolderId: string;
}

declare interface DeleteWorkflowFolderResponse {
  /** 删除结果 */
  Data?: DeleteFolderResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkflowRequest {
  /** 项目Id */
  ProjectId: string;
  /** 工作流id */
  WorkflowId: string;
}

declare interface DeleteWorkflowResponse {
  /** 是否删除成功 */
  Data?: DeleteWorkflowResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableProjectRequest {
  /** 项目id */
  ProjectId: string;
}

declare interface DisableProjectResponse {
  /** 无 */
  Data?: ProjectResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DissociateResourceGroupFromProjectRequest {
  /** 资源组id */
  ResourceGroupId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DissociateResourceGroupFromProjectResponse {
  /** 是否绑定成功，失败返回异常 */
  Data?: ResourceStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableProjectRequest {
  /** 项目id */
  ProjectId: string;
}

declare interface EnableProjectResponse {
  /** 无 */
  Data?: ProjectResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetAlarmMessageRequest {
  /** 所属项目Id */
  ProjectId: string;
  /** 告警消息Id */
  AlarmMessageId: string;
  /** 返回日期的时区, 默认UTC+8 */
  TimeZone?: string;
}

declare interface GetAlarmMessageResponse {
  /** 告警信息 */
  Data?: AlarmMessage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCodeFileRequest {
  /** 项目ID */
  ProjectId: string;
  /** 代码文件ID，参数值来自CreateCodeFile接口的返回 */
  CodeFileId: string;
  /** true：返回文件内容+配置，false：不返回文件内容，只返回配置信息；默认为false */
  IncludeContent?: boolean;
}

declare interface GetCodeFileResponse {
  /** 代码文件详情 */
  Data?: CodeFile;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCodeFolderRequest {
  /** 项目id */
  ProjectId: string;
  /** 文件夹id */
  FolderId: string;
}

declare interface GetCodeFolderResponse {
  /** codestudio文件夹 */
  Data?: CodeFolderNode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDataBackfillPlanRequest {
  /** 项目id */
  ProjectId: string;
  /** 补录计划id */
  DataBackfillPlanId: string;
  /** 展示时区，默认UTC+8 */
  TimeZone?: string;
}

declare interface GetDataBackfillPlanResponse {
  /** 补录详情 */
  Data?: DataBackfill;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDataSourceRelatedTasksRequest {
  /** 数据源id */
  Id: number;
}

declare interface GetDataSourceRelatedTasksResponse {
  /** 无 */
  Data?: DatasourceRelationTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetDataSourceRequest {
  /** 项目id */
  ProjectId: string;
  /** 数据源id */
  Id: number;
}

declare interface GetDataSourceResponse {
  /** 数据源列表 */
  Data?: DataSource | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetOpsAlarmRuleRequest {
  /** 项目id */
  ProjectId: string;
  /** 告警规则唯一id */
  AlarmRuleId: string;
}

declare interface GetOpsAlarmRuleResponse {
  /** 告警规则详细信息 */
  Data?: AlarmRuleData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetOpsAsyncJobRequest {
  /** 项目id */
  ProjectId: string;
  /** 异步操作id */
  AsyncId: string;
}

declare interface GetOpsAsyncJobResponse {
  /** 异步操作详情结果 */
  Data?: OpsAsyncJobDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetOpsTaskCodeRequest {
  /** 所属项目id */
  ProjectId: string;
  /** 任务Id */
  TaskId: string;
}

declare interface GetOpsTaskCodeResponse {
  /** 获取任务代码结果 */
  Data?: TaskCode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetOpsTaskRequest {
  /** 任务Id */
  TaskId: string;
  /** 项目Id */
  ProjectId: string;
}

declare interface GetOpsTaskResponse {
  /** 任务详情 */
  Data?: Task;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetOpsWorkflowRequest {
  /** 项目Id */
  ProjectId: string;
  /** 工作流Id，可以从ListOpsWorkflows接口获取 */
  WorkflowId: string;
}

declare interface GetOpsWorkflowResponse {
  /** 工作流调度详情 */
  Data?: OpsWorkflowDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetProjectRequest {
  /** 项目id。一般使用项目Id来查询，与projectName必须存在一个。 */
  ProjectId: string;
}

declare interface GetProjectResponse {
  /** 项目信息 */
  Data?: Project | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetResourceFileRequest {
  /** 项目ID */
  ProjectId: string;
  /** 资源文件ID,可通过ListResourceFiles接口获取 */
  ResourceId: string;
}

declare interface GetResourceFileResponse {
  /** 资源文件详情 */
  Data?: ResourceFile;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetResourceGroupMetricsRequest {
  /** 执行资源组id */
  ResourceGroupId: string;
  /** 使用趋势开始时间(毫秒)，默认最近一小时 */
  StartTime?: number;
  /** 使用趋势结束时间(毫秒)，默认当前 */
  EndTime?: number;
  /** 指标维度- all --- 全部- task --- 任务指标- system --- 系统指标 */
  MetricType?: string;
  /** 指标采集粒度，单位分钟，默认 1分钟 */
  Granularity?: number;
}

declare interface GetResourceGroupMetricsResponse {
  /** 执行组指标信息 */
  Data?: ResourceGroupMetrics | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSQLFolderRequest {
  /** 项目id */
  ProjectId: string;
  /** 文件夹id */
  FolderId: string;
}

declare interface GetSQLFolderResponse {
  /** sql文件夹 */
  Data?: SQLFolderNode;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSQLScriptRequest {
  /** 探索脚本Id */
  ScriptId: string;
  /** 项目Id */
  ProjectId: string;
}

declare interface GetSQLScriptResponse {
  /** 脚本详情 */
  Data?: SQLScript | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTableColumnsRequest {
  /** 数据表GUID */
  TableGuid: string;
}

declare interface GetTableColumnsResponse {
  /** 表字段列表 */
  Data?: ColumnInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTableRequest {
  /** 表GUID */
  TableGuid: string;
}

declare interface GetTableResponse {
  /** 数据表详情 */
  Data?: TableInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskCodeRequest {
  /** 所属项目id */
  ProjectId: string;
  /** 任务Id */
  TaskId: string;
}

declare interface GetTaskCodeResponse {
  /** 获取任务代码结果 */
  Data?: TaskCodeResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskInstanceLogRequest {
  /** **项目ID** */
  ProjectId: string;
  /** **实例唯一标识** */
  InstanceKey: string;
  /** **实例生命周期编号，标识实例的某一次执行**例如：周期实例第一次运行的编号为0，用户后期又重跑了该实例，第二次执行的编号为1; 默认最新一次 */
  LifeRoundNum?: number;
  /** **日志级别** 默认All - Info - Debug - Warn - Error - All */
  LogLevel?: string;
  /** **分页查询日志时使用，无具体业务含义** 第一次查询时值为null 第二次及以后查询时使用上一次查询返回信息中的NextCursor字段值即可 */
  NextCursor?: string;
}

declare interface GetTaskInstanceLogResponse {
  /** 调度实例详情 */
  Data?: InstanceLog | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskInstanceRequest {
  /** 所属项目id */
  ProjectId: string;
  /** 实例唯一标识，可以通过ListInstances获取 */
  InstanceKey: string;
  /** **时区**timeZone, 传入的时间字符串的所在时区，默认UTC+8 */
  TimeZone?: string;
}

declare interface GetTaskInstanceResponse {
  /** 实例详情 */
  Data?: TaskInstanceDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
}

declare interface GetTaskResponse {
  /** 任务详情 */
  Data?: Task;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskVersionRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 提交版本ID，不填默认拿最新提交版本 */
  VersionId?: string;
}

declare interface GetTaskVersionResponse {
  /** 版本详情 */
  Data?: TaskVersionDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWorkflowRequest {
  /** 项目ID */
  ProjectId: string;
  /** 工作流ID 通过ListWorkflows接口获取 */
  WorkflowId: string;
}

declare interface GetWorkflowResponse {
  /** 工作流详细信息 */
  Data?: WorkflowDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GrantMemberProjectRoleRequest {
  /** 项目id */
  ProjectId: string;
  /** 用户id */
  UserUin: string;
  /** 角色id列表，目前支持的项目角色有- 308335260274237440 (项目管理员)- 308335260676890624 (数据工程师)- 308335260844662784 (运维工程师)- 308335260945326080 (普通成员) */
  RoleIds: string[];
}

declare interface GrantMemberProjectRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillTaskInstancesAsyncRequest {
  /** 项目Id */
  ProjectId: string;
  /** 实例id列表,可以从ListInstances中获取 */
  InstanceKeyList: string[];
}

declare interface KillTaskInstancesAsyncResponse {
  /** 批量中止操作的返回的异步id, 可以在接口GetAsyncJob获取具体执行详情 */
  Data?: OpsAsyncResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListAlarmMessagesRequest {
  /** 所属项目id */
  ProjectId: string;
  /** 页码数，用于翻页，最小值为 1。 */
  PageNumber?: number;
  /** 每页显示的条数，最大 100 条 */
  PageSize?: number;
  /** 起始告警时间, 格式为yyyy-MM-dd HH:mm:ss */
  StartTime?: string;
  /** 截止告警时间, 格式yyyy-MM-dd HH:mm:ss */
  EndTime?: string;
  /** 告警级别 */
  AlarmLevel?: number;
  /** 告警接收人Id */
  AlarmRecipientId?: string;
  /** 对于传入和返回的过滤时区, 默认UTC+8 */
  TimeZone?: string;
}

declare interface ListAlarmMessagesResponse {
  /** 告警信息列表 */
  Data?: ListAlarmMessages;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListCatalogRequest {
  /** 页码，从1开始 */
  PageNumber: number;
  /** 分页大小，最大500 */
  PageSize: number;
  /** 父目录ID */
  ParentCatalogId?: string;
}

declare interface ListCatalogResponse {
  /** 分页数据 */
  Data?: ListCatalogPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListCodeFolderContentsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 父文件夹path，例如/aaa/bbb/ccc，路径头需带斜杠，根目录传/ */
  ParentFolderPath?: string;
  /** 文件夹名称/代码文件名称搜索 */
  Keyword?: string;
  /** 只查询文件夹 */
  OnlyFolderNode?: boolean;
  /** 是否只查询用户自己创建的代码文件 */
  OnlyUserSelfScript?: boolean;
}

declare interface ListCodeFolderContentsResponse {
  /** 结果 */
  Data?: CodeFolderNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListColumnLineageRequest {
  /** 表唯一ID */
  TableUniqueId: string;
  /** 血缘方向 INPUT｜OUTPUT */
  Direction: string;
  /** 页码 */
  PageNumber: number;
  /** 分页大小 */
  PageSize: number;
  /** 列名称 */
  ColumnName: string;
  /** 来源：WEDATA|THIRD 默认WEDATA */
  Platform: string;
}

declare interface ListColumnLineageResponse {
  /** 分页数据 */
  Data?: ListLineagePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDataBackfillInstancesRequest {
  /** 所属项目Id */
  ProjectId: string;
  /** 补录计划Id */
  DataBackfillPlanId: string;
  /** 任务Id */
  TaskId: string;
  /** 页码 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
}

declare interface ListDataBackfillInstancesResponse {
  /** 单个补录计划下的所有补录实例 */
  Data?: BackfillInstanceCollection;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDataSourcesRequest {
  /** 项目id */
  ProjectId: string;
  /** 返回数量，默认10 */
  PageSize?: number;
  /** 页码，默认1 */
  PageNumber?: number;
  /** 数据源名称 */
  Name?: string;
  /** 数据源展示名 */
  DisplayName?: string;
  /** 数据源类型:枚举值- MYSQL- TENCENT_MYSQL- POSTGRE- ORACLE- SQLSERVER- FTP- HIVE- HUDI- HDFS- ICEBERG- KAFKA- HBASE- SPARK- VIRTUAL- TBASE- DB2- DM- GAUSSDB- GBASE- IMPALA- ES- TENCENT_ES- GREENPLUM- PHOENIX- SAP_HANA- SFTP- OCEANBASE- CLICKHOUSE- KUDU- VERTICA- REDIS- COS- DLC- DORIS- CKAFKA- S3- TDSQL- TDSQL_MYSQL- MONGODB- TENCENT_MONGODB- REST_API- SuperSQL- PRESTO- TiDB- StarRocks- Trino- Kyuubi- TCHOUSE_X- TCHOUSE_P- TCHOUSE_C- TCHOUSE_D- INFLUXDB- BIG_QUERY- SSH- BLOB */
  Type?: string[];
  /** 创建人 */
  Creator?: string;
}

declare interface ListDataSourcesResponse {
  /** 数据源列表 */
  Data?: DataSourceInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDatabaseRequest {
  /** 页码，从1开始 */
  PageNumber: number;
  /** 分页大小，最大500 */
  PageSize: number;
  /** 目录名称 */
  CatalogName?: string;
  /** 数据源ID */
  DatasourceId?: number;
  /** 数据库名称搜索关键字 */
  Keyword?: string;
}

declare interface ListDatabaseResponse {
  /** 分页数据 */
  Data?: ListDatabasePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDownstreamOpsTasksRequest {
  /** 任务Id */
  TaskId: string;
  /** 项目Id */
  ProjectId: string;
  /** 分页页码 */
  PageNumber?: string;
  /** 分页大小 */
  PageSize?: string;
}

declare interface ListDownstreamOpsTasksResponse {
  /** 下游依赖详情 */
  Data?: ChildDependencyConfigPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDownstreamTaskInstancesRequest {
  /** 项目Id */
  ProjectId: string;
  /** **实例唯一标识** */
  InstanceKey: string;
  /** **时区** timeZone, 默认UTC+8 */
  TimeZone?: string;
  /** **页码，整型**配合pageSize使用且不能小于1， 默认值1 */
  PageNumber?: number;
  /** **每页显示的条数，默认为10，最小值为1、最大值为100 */
  PageSize?: number;
}

declare interface ListDownstreamTaskInstancesResponse {
  /** 直接下游实例列表 */
  Data?: TaskInstancePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListDownstreamTasksRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 分页大小 */
  PageNumber?: number;
  /** 分页页码 */
  PageSize?: number;
}

declare interface ListDownstreamTasksResponse {
  /** 下游依赖详情 */
  Data?: DependencyConfigPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListLineageRequest {
  /** 实体唯一ID */
  ResourceUniqueId: string;
  /** 实体类型 TABLE|METRIC|MODEL|SERVICE|COLUMN */
  ResourceType: string;
  /** 血缘方向 INPUT｜OUTPUT */
  Direction: string;
  /** 页码 */
  PageNumber: number;
  /** 分页大小 */
  PageSize: number;
  /** 来源：WEDATA|THIRD 默认WEDATA */
  Platform: string;
}

declare interface ListLineageResponse {
  /** 分页数据 */
  Data?: ListLineagePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListOpsAlarmRulesRequest {
  /** 项目id */
  ProjectId: string;
  /** 分页的页数，默认为1 */
  PageNumber?: number;
  /** 每页显示的条数，默认为20，最小值为1、最大值为200 */
  PageSize?: number;
  /** 监控对象类型, 任务维度监控： 可按照任务/工作流/项目来配置：1.任务、2.工作流、3.项目（默认为1.任务） 项目维度监控： 项目整体任务波动告警， 7：项目波动监控告警 */
  MonitorObjectType?: number;
  /** 根据任务id查询告警规则 */
  TaskId?: string;
  /** 查询配置对应告警类型的告警规则告警规则监控类型 failure：失败告警 ；overtime：超时告警 success：成功告警; backTrackingOrRerunSuccess: 补录重跑成功告警 backTrackingOrRerunFailure：补录重跑失败告警；项目波动告警projectFailureInstanceUpwardFluctuationAlarm： 当天失败实例数向上波动率超过阀值告警； projectSuccessInstanceDownwardFluctuationAlarm：当天成功实例数向下波动率超过阀值告警；离线集成任务对账告警： reconciliationFailure： 离线对账任务失败告警 reconciliationOvertime： 离线对账任务运行超时告警 reconciliationMismatch： 数据对账任务不一致条数超过阀值告警 */
  AlarmType?: string;
  /** 查询配置了对应告警级别的告警规则告警级别 1.普通、2.重要、3.紧急 */
  AlarmLevel?: number;
  /** 查询配置对应告警接收人的告警规则 */
  AlarmRecipientId?: string;
  /** 根据告警规则id/规则名称查询对应的告警规则 */
  Keyword?: string;
  /** 告警规则创建人过滤 */
  CreateUserUin?: string;
  /** 告警规则创建时间范围起始时间, 格式如2025-08-17 00:00:00 */
  CreateTimeFrom?: string;
  /** 告警规则创建时间范围结束时间，格式如"2025-08-26 23:59:59" */
  CreateTimeTo?: string;
  /** 最后更新时间过滤告警规则， 格式如"2025-08-26 00:00:00" */
  UpdateTimeFrom?: string;
  /** 最后更新时间过滤告警规则 格式如： "2025-08-26 23:59:59" */
  UpdateTimeTo?: string;
}

declare interface ListOpsAlarmRulesResponse {
  /** 告警信息信息响应 */
  Data?: ListAlarmRulesResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListOpsTasksRequest {
  /** 项目Id */
  ProjectId: string;
  /** 分页大小 */
  PageSize?: string;
  /** 分页页码 */
  PageNumber?: string;
  /** 任务类型Id - 20：通用数据同步 - 25：ETLTaskType - 26：ETLTaskType - 30：python - 31：pyspark - 34：HiveSQLTaskType - 35：shell - 36：SparkSQLTaskType - 21：JDBCSQLTaskType - 32：DLCTaskType - 33：ImpalaTaskType - 40：CDWTaskType - 41：kettle - 46：DLCSparkTaskType - 47：TiOne机器学习 - 48：TrinoTaskType - 50：DLCPyspark39：spark - 92：mr - 38：shell脚本 - 70：hivesql脚本 - 1000：自定义业务通用 */
  TaskTypeId?: string;
  /** 工作流Id */
  WorkflowId?: string;
  /** 工作流名称 */
  WorkflowName?: string;
  /** 责任人id */
  OwnerUin?: string;
  /** 文件夹Id */
  FolderId?: string;
  /** 数据源id */
  SourceServiceId?: string;
  /** 目标数据源id */
  TargetServiceId?: string;
  /** 资源组id */
  ExecutorGroupId?: string;
  /** 任务周期类型* ONEOFF_CYCLE: 一次性* YEAR_CYCLE: 年* MONTH_CYCLE: 月* WEEK_CYCLE: 周* DAY_CYCLE: 天* HOUR_CYCLE: 小时* MINUTE_CYCLE: 分钟* CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string;
  /** 任务状态:- Y: 运行- F: 停止- O: 冻结- T: 停止中- INVALID: 已失效 */
  Status?: string;
  /** 时区, 默认默认UTC+8 */
  TimeZone?: string;
}

declare interface ListOpsTasksResponse {
  /** 任务列表 */
  Data?: ListOpsTasksPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListOpsWorkflowsRequest {
  /** 项目Id */
  ProjectId: string;
  /** 分页页码 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 文件Id */
  FolderId?: string;
  /** 工作流状态筛选* ALL_RUNNING : 全部调度中* ALL_FREEZED : 全部已暂停* ALL_STOPPTED : 全部已下线* PART_RUNNING : 部分调度中* ALL_NO_RUNNING : 全部未调度* ALL_INVALID : 全部已失效 */
  Status?: string;
  /** 负责人Id */
  OwnerUin?: string;
  /** 工作流类型筛选, 支持值 Cycle或Manual. 默认只查询 Cycle */
  WorkflowType?: string;
  /** 工作流关键词过滤，支持工作流 Id/name 模糊匹配 */
  KeyWord?: string;
  /** 排序项，可选CreateTime、TaskCount */
  SortItem?: string;
  /** 排序方式，DESC或ASC, 大写 */
  SortType?: string;
  /** 创建人Id */
  CreateUserUin?: string;
  /** 更新时间，格式yyyy-MM-dd HH:mm:ss */
  ModifyTime?: string;
  /** 创建时间，格式yyyy-MM-dd HH:mm:ss */
  CreateTime?: string;
}

declare interface ListOpsWorkflowsResponse {
  /** 工作流列表 */
  Data?: OpsWorkflows;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListProcessLineageRequest {
  /** 任务唯一ID */
  ProcessId: string;
  /** 任务类型 //调度任务 SCHEDULE_TASK, //集成任务 INTEGRATION_TASK, //第三方上报 THIRD_REPORT, //数据建模 TABLE_MODEL, //模型创建指标 MODEL_METRIC, //原子指标创建衍生指标 METRIC_METRIC, //数据服务 DATA_SERVICE */
  ProcessType: string;
  /** 页码 */
  PageNumber: number;
  /** 分页大小 */
  PageSize: number;
  /** 来源：WEDATA|THIRD 默认WEDATA */
  Platform: string;
}

declare interface ListProcessLineageResponse {
  /** 分页数据 */
  Data?: ListProcessLineagePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListProjectMembersRequest {
  /** 项目id */
  ProjectId: string;
  /** 使用成员名过滤，支持模糊查询 */
  UserName?: string;
  /** 使用成员id过滤，支持模糊查询 */
  UserUin?: string;
  /** 分页大小，默认第一页 */
  PageSize?: number;
  /** 分页条数，默认10条 */
  PageNumber?: number;
}

declare interface ListProjectMembersResponse {
  /** 项目列表 */
  Data?: ProjectUsersBrief;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListProjectRolesRequest {
  /** 项目id */
  ProjectId: string;
  /** 角色中文展示名模糊查询，只能传一个值 */
  RoleDisplayName?: string;
  /** 页码 */
  PageNumber?: number;
  /** 分页信息 */
  PageSize?: number;
}

declare interface ListProjectRolesResponse {
  /** 角色列表 */
  Data?: PageRoles;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListProjectsRequest {
  /** 项目id列表 */
  ProjectIds?: string[];
  /** 项目名或项目唯一标识名，支持模糊搜索 */
  ProjectName?: string;
  /** 项目状态，可选值：0（禁用）、1（正常） */
  Status?: number;
  /** 项目模式，可选值：SIMPLE、STANDARD */
  ProjectModel?: string;
  /** 请求的数据页数，用于翻页 */
  PageNumber?: number;
  /** 每页显示的条数，默认为 10 条 */
  PageSize?: number;
}

declare interface ListProjectsResponse {
  /** 项目列表 */
  Data?: ProjectBrief;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListResourceFilesRequest {
  /** 项目ID */
  ProjectId: string;
  /** 数据页数，大于等于1。默认1 */
  PageNumber?: number;
  /** 每页显示的数据条数，最小为10条，最大为200 条。默认10 */
  PageSize?: number;
  /** 资源文件名称(模糊搜索关键词) */
  ResourceName?: string;
  /** 资源文件所属文件夹路径(如/a/b/c，查询c文件夹下的资源文件) */
  ParentFolderPath?: string;
  /** 创建人ID, 可通过DescribeCurrentUserInfo接口获取 */
  CreateUserUin?: string;
  /** 更新时间范围,开始时间, 格式yyyy-MM-dd HH:mm:ss */
  ModifyTimeStart?: string;
  /** 更新时间范围,结束时间, 格式yyyy-MM-dd HH:mm:ss */
  ModifyTimeEnd?: string;
  /** 创建时间范围,开始时间, 格式yyyy-MM-dd HH:mm:ss */
  CreateTimeStart?: string;
  /** 创建时间范围,结束时间, 格式yyyy-MM-dd HH:mm:ss */
  CreateTimeEnd?: string;
}

declare interface ListResourceFilesResponse {
  /** 获取资源文件列表 */
  Data?: ResourceFilePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListResourceFoldersRequest {
  /** 项目ID */
  ProjectId: string;
  /** 资源文件夹绝对路径，取值示例/wedata/test */
  ParentFolderPath: string;
  /** 数据页数，大于等于1。默认1 */
  PageNumber?: number;
  /** 每页显示的数据条数，最小为10条，最大为200 条。默认10 */
  PageSize?: number;
}

declare interface ListResourceFoldersResponse {
  /** 分页的资源文件夹查询结果 */
  Data?: ResourceFolderPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListResourceGroupsRequest {
  /** 执行资源组类型- Schedule --- 调度资源组- Integration --- 集成资源组- DataService -- 数据服务资源组 */
  Type?: string;
  /** 资源组id */
  Id?: string;
  /** 搜索的执行资源组名称 */
  Name?: string;
  /** 项目空间id查询列表 */
  ProjectIds?: string[];
  /** 页数 */
  PageNumber?: number;
  /** 页大小 */
  PageSize?: number;
}

declare interface ListResourceGroupsResponse {
  /** 分页结果 */
  Data?: ExecutorResourceGroupData;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSQLFolderContentsRequest {
  /** 项目Id */
  ProjectId: string;
  /** 父文件夹path，/aaa/bbb/ccc，路径头需带斜杠，查询根目录传/ */
  ParentFolderPath: string;
  /** 文件夹名称/脚本名称搜索 */
  Keyword?: string;
  /** 只查询文件夹 */
  OnlyFolderNode?: boolean;
  /** 是否只查询用户自己创建的脚本 */
  OnlyUserSelfScript?: boolean;
  /** 权限范围：SHARED, PRIVATE */
  AccessScope?: string;
}

declare interface ListSQLFolderContentsResponse {
  /** 结果列表 */
  Data?: SQLFolderNode[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSQLScriptRunsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 脚本id */
  ScriptId: string;
  /** 任务id */
  JobId?: string;
  /** 搜索关键词 */
  SearchWord?: string;
  /** 执行人 */
  ExecuteUserUin?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

declare interface ListSQLScriptRunsResponse {
  /** 数据探索任务 */
  Data?: JobDto[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListSchemaRequest {
  /** 页码，从1开始 */
  PageNumber: number;
  /** 分页大小，最大500 */
  PageSize: number;
  /** 目录名称 */
  CatalogName?: string;
  /** 数据源ID */
  DatasourceId?: number;
  /** 数据库名称 */
  DatabaseName?: string;
  /** 数据库模式搜索关键字 */
  Keyword?: string;
}

declare interface ListSchemaResponse {
  /** 分页数据 */
  Data?: ListSchemaPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTableRequest {
  /** 页码，从1开始 */
  PageNumber: number;
  /** 分页大小，最大500 */
  PageSize: number;
  /** 目录名称 */
  CatalogName?: string;
  /** 数据源ID */
  DatasourceId?: number;
  /** 数据库名称 */
  DatabaseName?: string;
  /** 数据库Schema名称 */
  SchemaName?: string;
  /** 表搜索关键字 */
  Keyword?: string;
}

declare interface ListTableResponse {
  /** 分页数据 */
  Data?: ListTablePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTaskInstanceExecutionsRequest {
  /** 所属项目id */
  ProjectId: string;
  /** 实例唯一标识，可以通过ListInstances获取 */
  InstanceKey: string;
  /** **时区**timeZone, 传入的时间字符串的所在时区，默认UTC+8 */
  TimeZone?: string;
  /** 每页大小，默认10, 最大200 */
  PageSize?: number;
  /** 分页页码，默认1 */
  PageNumber?: number;
}

declare interface ListTaskInstanceExecutionsResponse {
  /** 实例详情 */
  Data?: TaskInstanceExecutions;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTaskInstancesRequest {
  /** **项目ID** */
  ProjectId: string;
  /** **页码，整型**配合pageSize使用且不能小于1， 默认值1 */
  PageNumber?: number;
  /** **每页显示的条数，默认为10，最小值为1、最大值为100 */
  PageSize?: number;
  /** **任务名称 或 任务ID**支持模糊搜索过滤, 多个用 英文逗号, 分割 */
  Keyword?: string;
  /** **时区**timeZone, 传入的时间字符串的所在时区，默认UTC+8 */
  TimeZone?: string;
  /** **实例类型** - 0 表示补录类型 - 1 表示周期实例 - 2 表示非周期实例 */
  InstanceType?: number;
  /** **实例状态** - WAIT_EVENT: 等待事件 - WAIT_UPSTREAM: 等待上游 - WAIT_RUN: 等待运行 - RUNNING: 运行中 - SKIP_RUNNING: 跳过运行 - FAILED_RETRY: 失败重试 - EXPIRED: 失败 - COMPLETED: 成功 */
  InstanceState?: string;
  /** **任务类型Id** */
  TaskTypeId?: number;
  /** **任务周期类型** * ONEOFF_CYCLE: 一次性 * YEAR_CYCLE: 年 * MONTH_CYCLE: 月 * WEEK_CYCLE: 周 * DAY_CYCLE: 天 * HOUR_CYCLE: 小时 * MINUTE_CYCLE: 分钟 * CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string;
  /** **任务负责人id** */
  OwnerUin?: string;
  /** **任务所属文件id** */
  FolderId?: string;
  /** **任务所属工作流id** */
  WorkflowId?: string;
  /** **执行资源组Id** */
  ExecutorGroupId?: string;
  /** **实例计划调度时间过滤条件**过滤起始时间，时间格式为 yyyy-MM-dd HH:mm:ss */
  ScheduleTimeFrom?: string;
  /** **实例计划调度时间过滤条件**过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss */
  ScheduleTimeTo?: string;
  /** **实例执行开始时间过滤条件**过滤起始时间，时间格式为 yyyy-MM-dd HH:mm:ss */
  StartTimeFrom?: string;
  /** **实例执行开始时间过滤条件**过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss */
  StartTimeTo?: string;
  /** **实例最近更新时间过滤条件**过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss */
  LastUpdateTimeFrom?: string;
  /** **实例最近更新时间过滤条件**过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss */
  LastUpdateTimeTo?: string;
  /** **查询结果排序字段**- SCHEDULE_DATE 表示 根据计划调度时间排序- START_TIME 表示 根据实例开始执行时间排序- END_TIME 表示 根据实例结束执行时间排序- COST_TIME 表示 根据实例执行时长排序 */
  SortColumn?: string;
  /** **实例排序方式**- ASC - DESC */
  SortType?: string;
}

declare interface ListTaskInstancesResponse {
  /** 实例结果集 */
  Data?: TaskInstancePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTaskVersionsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 保存版本：SAVE提交版本：SUBMIT默认为SAVE */
  TaskVersionType?: string;
  /** 请求的数据页数。默认值为1，取值大于等于1。 */
  PageNumber?: number;
  /** 每页显示的数据条数。默认值为10 ，最小值为10，最大值为200。 */
  PageSize?: number;
}

declare interface ListTaskVersionsResponse {
  /** 版本列表 */
  Data?: ListTaskVersions | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTasksRequest {
  /** 项目ID */
  ProjectId: string;
  /** 请求的数据页数。默认值为1，取值大于等于1 */
  PageNumber?: number;
  /** 每页显示的数据条数。默认值为10 ，最小值为10，最大值为200 */
  PageSize?: number;
  /** 任务名称 */
  TaskName?: string;
  /** 所属工作流ID */
  WorkflowId?: string;
  /** 责任人ID */
  OwnerUin?: string;
  /** 任务类型 */
  TaskTypeId?: number;
  /** 任务状态* N: 新建 * Y: 调度中 * F: 已下线 * O: 已暂停 * T: 下线中 * INVALID: 已失效 */
  Status?: string;
  /** 提交状态 */
  Submit?: boolean;
  /** BundleId信息 */
  BundleId?: string;
  /** 创建人ID */
  CreateUserUin?: string;
  /** 修改时间区间 yyyy-MM-dd HH:mm:ss，需要在数组填入两个时间 */
  ModifyTime?: string[];
  /** 创建时间区间 yyyy-MM-dd HH:mm:ss，需要在数组填入两个时间 */
  CreateTime?: string[];
}

declare interface ListTasksResponse {
  /** 任务分页信息 */
  Data?: ListTaskInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListTenantRolesRequest {
  /** 角色中文展示名模糊查询，只能传一个值 */
  RoleDisplayName?: string;
}

declare interface ListTenantRolesResponse {
  /** 主账号角色列表 */
  Data?: SystemRole[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListUpstreamOpsTasksRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务Id */
  TaskId: string;
  /** 分页页码 */
  PageNumber?: string;
  /** 分页大小 */
  PageSize?: string;
}

declare interface ListUpstreamOpsTasksResponse {
  /** 上游任务详情 */
  Data?: ParentDependencyConfigPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListUpstreamTaskInstancesRequest {
  /** 项目Id */
  ProjectId: string;
  /** **实例唯一标识** */
  InstanceKey: string;
  /** **时区** timeZone, 默认UTC+8 */
  TimeZone?: string;
  /** **页码，整型**配合pageSize使用且不能小于1， 默认值1 */
  PageNumber?: number;
  /** **每页显示的条数，默认为10，最小值为1、最大值为100 */
  PageSize?: number;
}

declare interface ListUpstreamTaskInstancesResponse {
  /** 上游实例列表 */
  Data?: TaskInstancePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListUpstreamTasksRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务Id */
  TaskId: string;
  /** 请求的数据页数。默认值为1，取值大于等于1。 */
  PageNumber?: number;
  /** 请求的数据页数。默认值为1，取值大于等于1。 */
  PageSize?: number;
}

declare interface ListUpstreamTasksResponse {
  /** 上游任务详情 */
  Data?: DependencyConfigPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkflowFoldersRequest {
  /** 项目ID */
  ProjectId: string;
  /** 父文件夹绝对路径，如/abc/de，如果是根目录则传/ */
  ParentFolderPath: string;
  /** 数据页数，大于等于1。默认1 */
  PageNumber?: number;
  /** 每页显示的数据条数，最小为10条，最大为200 条。默认10 */
  PageSize?: number;
}

declare interface ListWorkflowFoldersResponse {
  /** 分页的文件夹查询结果 */
  Data?: WorkflowFolderPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkflowsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 请求的数据页数。默认值为1，取值大于等于1 */
  PageNumber?: number;
  /** 每页显示的数据条数。默认值为10 ，最小值为10，最大值为200 */
  PageSize?: number;
  /** 搜索关键词 */
  Keyword?: string;
  /** 工作流所属文件夹 */
  ParentFolderPath?: string;
  /** 工作流类型，cycle和manual */
  WorkflowType?: string;
  /** bundleId项 */
  BundleId?: string;
  /** 负责人ID */
  OwnerUin?: string;
  /** 创建人ID */
  CreateUserUin?: string;
  /** 修改时间区间 yyyy-MM-dd HH:mm:ss，需要在数组填入两个时间 */
  ModifyTime?: string[];
  /** 创建时间区间 yyyy-MM-dd HH:mm:ss，需要在数组填入两个时间 */
  CreateTime?: string[];
}

declare interface ListWorkflowsResponse {
  /** 查询工作流分页信息 */
  Data?: ListWorkflowInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpsAsyncResponse {
  /** 异步执行记录Id */
  AsyncId?: string;
}

declare interface PauseOpsTasksAsyncRequest {
  /** 所属项目Id */
  ProjectId: string;
  /** 任务Id列表 */
  TaskIds: string[];
  /** 是否需要终止已生成实例 */
  KillInstance?: boolean;
}

declare interface PauseOpsTasksAsyncResponse {
  /** 异步操作结果 */
  Data?: OpsAsyncResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ProjectRequest {
  /** 项目标识，英文名，以字母开头，可包含字母、数字和下划线，不能超过32个字符 */
  ProjectName: string;
  /** 项目显示名称，可以为中文名，以字母开头，可包含字母、数字和下划线，不能超过32个字符 */
  DisplayName: string;
  /** 项目模式，SIMPLE（默认）：简单模式 STANDARD：标准模式 */
  ProjectModel?: string;
}

declare interface RegisterLineageRequest {
  /** 需要注册的血缘关系列表 */
  Relations: LineagePair[];
}

declare interface RegisterLineageResponse {
  /** 注册结果 */
  Data?: OperateResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveMemberProjectRoleRequest {
  /** 项目id */
  ProjectId: string;
  /** 用户id */
  UserUin: string;
  /** 角色id列表，目前支持的项目角色有- 308335260274237440 (项目管理员)- 308335260676890624 (数据工程师)- 308335260844662784 (运维工程师)- 308335260945326080 (普通成员) */
  RoleIds: string[];
}

declare interface RemoveMemberProjectRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RerunTaskInstancesAsyncRequest {
  /** 项目Id */
  ProjectId: string;
  /** 实例id列表,可以从ListInstances中获取 */
  InstanceKeyList: string[];
  /** 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子，默认1 */
  RerunType?: string;
  /** 是否检查上游任务： ALL（全部）、 MAKE_SCOPE（选中）、NONE （全部不检查），默认NONE */
  CheckParentType?: string;
  /** 下游实例范围 WORKFLOW: 所在工作流 PROJECT: 所在项目 ALL: 所有跨工作流依赖的项目，默认WORKFLOW */
  SonRangeType?: string;
  /** 重跑是否忽略事件监听 */
  SkipEventListening?: boolean;
  /** 自定义实例运行并发度, 如果不配置，则使用任务原有自依赖 */
  RedefineParallelNum?: number;
  /** 自定义的工作流自依赖: yes开启，no关闭，如果不配置，则使用工作流原有自依赖 */
  RedefineSelfWorkflowDependency?: string;
  /** 重跑实例自定义参数 */
  RedefineParamList?: KVMap;
}

declare interface RerunTaskInstancesAsyncResponse {
  /** 批量重跑操作的返回的异步id, 可以在接口GetAsyncJob获取具体执行详情 */
  Data?: OpsAsyncResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunSQLScriptRequest {
  /** 脚本id */
  ScriptId: string;
  /** 项目ID */
  ProjectId: string;
  /** 脚本内容，不传则默认执行已保存的全量脚本内容；若传递则要用Base64编码 */
  ScriptContent?: string;
  /** 高级运行参数，JSON格式base64编码 */
  Params?: string;
}

declare interface RunSQLScriptResponse {
  /** 数据探索任务 */
  Data?: JobDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetSuccessTaskInstancesAsyncRequest {
  /** 项目Id */
  ProjectId: string;
  /** 实例id列表,可以从ListInstances中获取 */
  InstanceKeyList: string[];
}

declare interface SetSuccessTaskInstancesAsyncResponse {
  /** 批量置成功操作的返回的异步id, 可以在接口GetAsyncJob获取具体执行详情 */
  Data?: OpsAsyncResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartOpsTasksRequest {
  /** 所属项目Id */
  ProjectId: string;
  /** 任务Id列表 */
  TaskIds: string[];
  /** 启动时是否补录上次暂停到当前的中间实例，默认false即不补录 */
  EnableDataBackfill?: boolean;
}

declare interface StartOpsTasksResponse {
  /** 异步操作结果 */
  Data?: StartTasks;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopOpsTasksAsyncRequest {
  /** 所属项目Id */
  ProjectId: string;
  /** 任务Id列表 */
  TaskIds: string[];
  /** 是否终止已生成实例，默认false */
  KillInstance?: boolean;
}

declare interface StopOpsTasksAsyncResponse {
  /** AsyncId */
  Data?: OpsAsyncResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopSQLScriptRunRequest {
  /** 查询id */
  JobId: string;
  /** 项目ID */
  ProjectId: string;
}

declare interface StopSQLScriptRunResponse {
  /** 执行结果 */
  Data?: SQLStopResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitTaskRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 版本备注 */
  VersionRemark: string;
}

declare interface SubmitTaskResponse {
  /** 成功或者失败 */
  Data?: SubmitTaskResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCodeFileRequest {
  /** 项目ID */
  ProjectId: string;
  /** 代码文件ID，参数值来自CreateCodeFile接口的返回 */
  CodeFileId: string;
  /** 代码文件配置 */
  CodeFileConfig?: CodeFileConfig;
  /** 代码文件内容 */
  CodeFileContent?: string;
}

declare interface UpdateCodeFileResponse {
  /** 结果 */
  Data?: CodeFile;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCodeFolderRequest {
  /** 项目ID */
  ProjectId: string;
  /** 文件夹ID，参数值来自CreateCodeFolder接口的返回 */
  FolderId: string;
  /** 文件夹名称 */
  FolderName: string;
}

declare interface UpdateCodeFolderResponse {
  /** 执行结果 */
  Data?: CodeStudioFolderActionResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDataSourceRequest {
  /** 数据源id */
  Id: number;
  /** 项目id */
  ProjectId: string;
  /** 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同> deployType: CONNSTR_PUBLICDB(公网实例) CONNSTR_CVMDB(自建实例)INSTANCE(云实例)```mysql: 自建实例{ "deployType": "CONNSTR_CVMDB", "url": "jdbc:mysql://1.1.1.1:1111/database", "username": "root", "password": "root", "region": "ap-shanghai", "vpcId": "vpc-kprq42yo", "type": "MYSQL"}mysql: 云实例{ "instanceid": "cdb-12uxdo5e", "db": "db", "region": "ap-shanghai", "username": "msyql", "password": "mysql", "deployType": "INSTANCE", "type": "TENCENT_MYSQL"}sql_server: { "deployType": "CONNSTR_PUBLICDB", "url": "jdbc:sqlserver://1.1.1.1:223;DatabaseName=database", "username": "user_1", "password": "pass_2", "type": "SQLSERVER"}redis: redisType: -NO_ACCOUT(免账号) -SELF_ACCOUNT(自定义账号){ "deployType": "CONNSTR_PUBLICDB", "username":"" "password": "pass", "ip": "1.1.1.1", "port": "6379", "redisType": "NO_ACCOUT", "type": "REDIS"}oracle: { "deployType": "CONNSTR_CVMDB", "url": "jdbc:oracle:thin:@1.1.1.1:1521:prod", "username": "oracle", "password": "pass", "region": "ap-shanghai", "vpcId": "vpc-kprq42yo", "type": "ORACLE"}mongodb: advanceParams(自定义参数，会拼接至url后){ "advanceParams": [ { "key": "authSource", "value": "auth" } ], "db": "admin", "deployType": "CONNSTR_PUBLICDB", "username": "user", "password": "pass", "type": "MONGODB", "host": "1.1.1.1:9200"}postgresql:{ "deployType": "CONNSTR_PUBLICDB", "url": "jdbc:postgresql://1.1.1.1:1921/database", "username": "user", "password": "pass", "type": "POSTGRE"}kafka: authType: - sasl - jaas - sasl_plaintext - sasl_ssl - GSSAPI ssl: -PLAIN -GSSAPI{ "deployType": "CONNSTR_PUBLICDB", "host": "1.1.1.1:9092", "ssl": "GSSAPI", "authType": "sasl", "type": "KAFKA", "principal": "aaaa", "serviceName": "kafka"}cos:{ "region": "ap-shanghai", "deployType": "INSTANCE", "secretId": "aaaaa", "secretKey": "sssssss", "bucket": "aaa", "type": "COS"}``` */
  ProdConProperties?: string;
  /** 若项目为标准模式，则此字段必填 */
  DevConProperties?: string;
  /** 生产环境数据源文件上传 */
  ProdFileUpload?: DataSourceFileUpload;
  /** 开发环境数据源文件上传 */
  DevFileUpload?: DataSourceFileUpload;
  /** 数据源展示名，为了可视化查看 */
  DisplayName?: string;
  /** 数据源描述信息 */
  Description?: string;
}

declare interface UpdateDataSourceResponse {
  /** 操作是否成功 */
  Data?: DataSourceStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateOpsAlarmRuleRequest {
  /** 项目id */
  ProjectId: string;
  /** 告警规则唯一id，通过接口GetAlarmRule/ListAlarmRule获取 */
  AlarmRuleId: string;
  /** 告警规则新的规则名称 */
  AlarmRuleName?: string;
  /** 监控对象类型, 任务维度监控： 可按照任务/工作流/项目来配置：1.任务、2.工作流、3.项目（默认为1.任务） 项目维度监控： 项目整体任务波动告警， 7：项目波动监控告警 */
  MonitorObjectType?: number;
  /** 根据MonitorType 的设置传入不同的业务id，如下1（任务）： MonitorObjectIds为任务id列表2（工作流）： MonitorObjectIds 为工作流id列表(工作流id可从接口ListWorkflows获取)3（项目）： MonitorObjectIds为项目id列表 */
  MonitorObjectIds?: string[];
  /** 告警规则监控类型 failure：失败告警 ；overtime：超时告警 success：成功告警; backTrackingOrRerunSuccess: 补录重跑成功告警 backTrackingOrRerunFailure：补录重跑失败告警； 项目波动告警 projectFailureInstanceUpwardFluctuationAlarm： 当天失败实例数向上波动率超过阀值告警； projectFailureInstanceUpwardVolatilityAlarm：当天失败实例数向上波动量超过阀值告警 projectSuccessInstanceDownwardFluctuationAlarm：当天成功实例数向下波动率超过阀值告警； projectSuccessInstanceDownwardVolatilityAlarm： 当天成功实例数向下波动量超过阀值告警 projectFailureInstanceCountAlarm: 当天失败实例数超过阀值告警 projectFailureInstanceProportionAlarm： 当天失败实例数占比超过阀值告警 离线集成任务对账告警： reconciliationFailure： 离线对账任务失败告警 reconciliationOvertime： 离线对账任务运行超时告警 reconciliationMismatch： 数据对账任务不一致条数超过阀值告警 */
  AlarmTypes?: string[];
  /** 告警规则配置信息 成功告警无需配置；失败告警可以配置首次失败告警或者所有重试失败告警；超时配置需要配置超时类型及超时阀值；项目波动告警需要配置波动率及防抖周期配置 */
  AlarmRuleDetail?: AlarmRuleDetail;
  /** 告警规则的启用状态0--禁用1--启用 */
  Status?: number;
  /** 告警级别 1.普通、2.重要、3.紧急 */
  AlarmLevel?: number;
  /** 告警接收人配置信息 */
  AlarmGroups?: AlarmGroup[];
  /** 告警描述信息 */
  Description?: string;
}

declare interface UpdateOpsAlarmRuleResponse {
  /** 更新结果是否成功true: 更新成功 false：更新失败/未更新 */
  Data?: ModifyAlarmRuleResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateOpsTasksOwnerRequest {
  /** 所属项目Id */
  ProjectId: string;
  /** 任务Id列表 */
  TaskIds: string[];
  /** 任务负责人Id */
  OwnerUin: string;
}

declare interface UpdateOpsTasksOwnerResponse {
  /** 操作结果 */
  Data?: UpdateTasksOwner;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateProjectRequest {
  /** 目标修改的项目ID */
  ProjectId: string;
  /** 项目显示名称，可以为中文名,需要租户范围内唯一 */
  DisplayName?: string;
  /** 备注 */
  Description?: string;
  /** 项目负责人id */
  ProjectOwnerUin?: string;
}

declare interface UpdateProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateResourceFileRequest {
  /** 项目ID */
  ProjectId: string;
  /** 资源文件ID,可通过ListResourceFiles接口获取 */
  ResourceId: string;
  /** - 上传文件及手填两种方式只能选择其一，如果两者均提供，取值顺序为文件>手填值- 手填值必须是存在的cos路径, parentFolderPath为父文件夹路径, name为文件名, 手填值取值示例: /datastudio/resource/projectId/parentFolderPath/name */
  ResourceFile?: string;
  /** 资源名称, 尽可能和文件名保持一致 */
  ResourceName?: string;
  /** bundle客户端ID */
  BundleId?: string;
  /** bundle客户端名称 */
  BundleInfo?: string;
}

declare interface UpdateResourceFileResponse {
  /** 更新状态 */
  Data?: UpdateResourceFileResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateResourceFolderRequest {
  /** 项目ID */
  ProjectId: string;
  /** 文件夹ID, 可通过ListResourceFolders接口获取 */
  FolderId: string;
  /** 文件夹名称 */
  FolderName: string;
}

declare interface UpdateResourceFolderResponse {
  /** 更新文件夹结果，如果更新失败则报错。 */
  Data?: UpdateFolderResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateResourceGroupRequest {
  /** 资源组id */
  Id: string;
  /** **变更配置(变配、续费、修改资源包数量 不能同时操作), 变配无法修改资源组类型**实时集成资源组 - i32c(实时数据同步-16C64G)离线集成资源组- integrated(离线数据同步-8C16G)- i16(离线数据同步-8C32G)调度资源组- s_test(测试规格)- s_small(基础规格)- s_medium(普及规格)- s_large(专业规格)数据服务资源组- ds_t(测试规格)- ds_s(基础规格)- ds_m(普及规格)- ds_l(专业规格) */
  Type?: string;
  /** 续费时长，单位月(变配、续费、修改资源包数量 不能同时操作) */
  PurchasePeriod?: number;
  /** 增加/减少资源包的数量(变配、续费、修改资源包数量 不能同时操作) */
  Number?: ResourceNumber;
  /** 是否自动续费，续费参数PurchasePeriod不为空时可以生效 */
  AutoRenewEnabled?: boolean;
}

declare interface UpdateResourceGroupResponse {
  /** 是否修改成功 */
  Data?: ResourceStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateSQLFolderRequest {
  /** 文件夹Id */
  FolderId: string;
  /** 文件夹名称 */
  FolderName: string;
  /** 项目id */
  ProjectId: string;
  /** 权限范围：SHARED, PRIVATE */
  AccessScope?: string;
}

declare interface UpdateSQLFolderResponse {
  /** 成功true，失败false */
  Data?: SQLContentActionResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateSQLScriptRequest {
  /** 探索脚本Id */
  ScriptId: string;
  /** 项目Id */
  ProjectId: string;
  /** 数据探索脚本配置 */
  ScriptConfig?: SQLScriptConfig;
  /** 脚本内容, 需要用Base64编码 */
  ScriptContent?: string;
}

declare interface UpdateSQLScriptResponse {
  /** 结果 */
  Data?: SQLScript | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateTaskRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 任务基本属性 */
  Task: UpdateTaskBrief;
}

declare interface UpdateTaskResponse {
  /** 任务ID */
  Data?: UpdateTaskResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkflowFolderRequest {
  /** 项目ID */
  ProjectId: string;
  /** 文件夹ID，可通过ListWorkflowFolders接口获取 */
  FolderId: string;
  /** 更新后的文件夹名称 */
  FolderName: string;
}

declare interface UpdateWorkflowFolderResponse {
  /** 更新文件夹结果，如果更新失败则报错。 */
  Data?: UpdateFolderResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkflowRequest {
  /** 项目ID */
  ProjectId: string;
  /** 工作流ID */
  WorkflowId: string;
  /** 工作流名称 */
  WorkflowName?: string;
  /** 责任人ID */
  OwnerUin?: string;
  /** 备注 */
  WorkflowDesc?: string;
  /** 工作流参数列表 */
  WorkflowParams?: ParamInfo[];
  /** 统一调度参数 */
  WorkflowSchedulerConfiguration?: WorkflowSchedulerConfigurationInfo;
  /** BundleId项 */
  BundleId?: string;
  /** Bundle信息 */
  BundleInfo?: string;
}

declare interface UpdateWorkflowResponse {
  /** true代表成功，false代表失败 */
  Data?: UpdateWorkflowResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20210820 {
  type VersionHeader = { headers: { 'X-TC-Version': '2021-08-20' } }

  /** 子任务记录 */
  interface AdhocDetail {
    /** 子任务记录Id */
    Id?: number;
    /** 脚本内容 */
    ScriptContent?: string;
    /** 任务启动时间 */
    StartTime?: string | null;
    /** 任务结束时间 */
    EndTime?: string | null;
    /** 当前任务状态 */
    Status?: string;
    /** 提交任务id */
    RecordId?: number;
  }

  /** 任务提交记录 */
  interface AdhocRecord {
    /** 任务提交记录id */
    Id?: number | null;
    /** 脚本内容 */
    ScriptContent?: string | null;
    /** 任务提交时间 */
    CreateTime?: string | null;
    /** 任务状态 */
    Status?: string | null;
    /** 实例id */
    InstanceId?: string | null;
  }

  /** Agent采集器状态统计 */
  interface AgentStatus {
    /** 运行中的数量 */
    Running?: number | null;
    /** 异常的数量 */
    Abnormal?: number | null;
    /** 操作中的数量 */
    InOperation?: number | null;
  }

  /** 监听事件 */
  interface AiOpsEventListenerDTO {
    /** 事件名 */
    EventName?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 项目展示名 */
    ProjectDisplayName?: string | null;
    /** 事件周期 */
    EventSubType?: string | null;
    /** 事件项目ID */
    ProjectId?: string | null;
    /** 扩展名 */
    PropertiesList?: ParamInfoDs[] | null;
    /** 事件广播类型 */
    EventBroadcastType?: string | null;
  }

  /** DLC资源配置信息 */
  interface AiopsDLCResourceConfigDto {
    /** Driver资源 */
    DriverSize?: string | null;
    /** Executor资源 */
    ExecutorSize?: string | null;
    /** Executor数量 */
    ExecutorNumbers?: string | null;
    /** 资源配置方式 */
    IsInherit?: string | null;
  }

  /** 数据运维脚本信息 */
  interface AiopsScriptInfo {
    /** 脚本内容 */
    ScriptContent: string | null;
    /** 脚本所在COS的路径 */
    CosPath: string | null;
    /** 脚本所在COS的地域 */
    CosRegion: string | null;
    /** 脚本所在COS的桶名称 */
    CosBucketName: string | null;
  }

  /** 父任务simple信息 */
  interface AiopsSimpleTaskDto {
    /** 任务ID */
    TaskId?: string | null;
    /** 任务名 */
    TaskName?: string | null;
    /** 任务状态 */
    Status?: string | null;
    /** 周期类型 */
    CycleType?: string | null;
    /** 任务创建人 */
    Creator?: string | null;
    /** 工作流id */
    WorkflowId?: string | null;
    /** 工作流名称 */
    WorkflowName?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 项目标识 */
    ProjectIdent?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 配置策略 */
    ConfigType?: string | null;
    /** 时间维度 */
    TimeDimension?: string | null;
    /** 实例范围 */
    InstanceScope?: string | null;
    /** 执行策略 */
    ExectuorPolicy?: string | null;
  }

  /** 告警信息 */
  interface AlarmDsVO {
    /** 告警策略id */
    AlarmId?: string | null;
    /** 任务id */
    TaskId?: string | null;
    /** 告警是否生效 */
    Status?: number | null;
    /** 告警类别，目前支持失败告警，超时告警 */
    AlarmType?: string | null;
    /** 告警方式 ，目前支持email提醒，短信提醒 */
    AlarmWay?: string | null;
    /** 告警创建人 */
    Creator?: string | null;
    /** 告警接收人 */
    AlarmRecipient?: string | null;
    /** 告警接收人ID */
    AlarmRecipientId?: string | null;
    /** 告警修改时间 */
    ModifyTime?: string | null;
    /** 最近失败告警实例数据时间 */
    LastFailTime?: string | null;
    /** 最近超时告警实例数据时间 */
    LastOverTime?: string | null;
    /** 最新告警时间 */
    LastAlarmTime?: string | null;
    /** AlarmExt信息 */
    AlarmExt?: AlarmExtDsVO[] | null;
    /** 告警创建时间 */
    CreateTime?: string | null;
  }

  /** 告警事件详情 */
  interface AlarmEventInfo {
    /** 告警ID */
    AlarmId: string;
    /** 告警时间 */
    AlarmTime: string;
    /** 任务ID */
    TaskId: string;
    /** 规则名称 */
    RegularName: string;
    /** 告警级别,0表示普通，1表示重要，2表示紧急 */
    AlarmLevel: number;
    /** 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http） */
    AlarmWay: number;
    /** 告警接收人Id，多个用逗号隔开 */
    AlarmRecipientId: string;
    /** 项目ID */
    ProjectId: string;
    /** 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停 */
    AlarmIndicator?: number;
    /** 告警指标描述 */
    AlarmIndicatorDesc?: string | null;
    /** 指标阈值，1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败 */
    TriggerType?: number | null;
    /** 预计的超时时间，分钟级别 */
    EstimatedTime?: number | null;
    /** 实例ID */
    InstanceId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 0：部分成功，1：全部成功，2：全部失败 */
    IsSendSuccess?: number | null;
    /** 是否在免打扰时间内，0:否, 1:是 */
    InQuitePeriods?: number | null;
    /** 告警记录id */
    RecordId?: number | null;
    /** 消息ID */
    MessageId?: string | null;
    /** 阈值计算算子，1 : 大于 2 ：小于 */
    Operator?: number | null;
    /** 告警规则ID */
    RegularId?: string | null;
    /** 告警接收人昵称 */
    AlarmRecipientName?: string | null;
    /** 告警任务类型 */
    TaskType?: number | null;
    /** 发送结果 */
    SendResult?: string | null;
    /** 监控对象id */
    MonitorObjectId?: string | null;
    /** 监控对象名称 */
    MonitorObjectName?: string | null;
    /** 指标阈值 */
    Threshold?: number | null;
    /** 告警原因 */
    AlarmReason?: string | null;
    /** 近范围值 */
    IndicatorTimeRangeValue?: number | null;
    /** 近范围单位 */
    IndicatorTimeRangeUnit?: string | null;
    /** 同步类型 */
    SyncType?: number | null;
  }

  /** AlarmExtVO信息 */
  interface AlarmExtDsVO {
    /** 告警策略ID */
    AlarmId?: string | null;
    /** 扩展字段key */
    PropName?: string | null;
    /** 扩展字段value */
    PropValue?: string | null;
    /** 告警创建时间 */
    CreateTime?: string | null;
    /** 修改时间 */
    ModifyTime?: string | null;
  }

  /** 告警分组信息 */
  interface AlarmGroup {
    /** 告警方式,1.邮件，2.短信，3.微信，4.语音，5.企业微信，6.Http，7.企业微信群；告警方式code列表（默认1.邮件） */
    AlarmWays?: string[];
    /** 告警接收人类型：1.指定人员，2.任务责任人，3.值班表（默认1.指定人员） */
    AlarmRecipientType?: number;
    /** 告警接收人 */
    AlarmRecipients?: string[];
    /** 告警接收人ID */
    AlarmRecipientIds?: string[];
    /** 告警升级人 */
    AlarmEscalationRecipients?: string[];
    /** 告警升级人ID */
    AlarmEscalationRecipientIds?: string[];
    /** 告警升级间隔 */
    AlarmEscalationInterval?: number;
    /** 告警通知疲劳度配置。 */
    NotificationFatigue?: NotificationFatigue;
    /** 告警渠道规则 json 格式 */
    AlarmMessageRule?: string;
  }

  /** 告警指标 */
  interface AlarmIndicatorInfo {
    /** 指标id */
    Id?: string | null;
    /** 告警指标,0任务失败,1任务运行超时,2任务停止,3任务暂停, 4读取速度,5写入速度,6读取吞吐 7写入吞吐, 8脏数据字节数,9脏数据条数,10任务异常,11任务检测异常, 12重启次数, 13任务延时, 14近20分内的重启次数 15传输延迟,16业务延迟, 50离线包CPU使用率, 51离线包内存使用率, 52离线包并行度使用率, 53离线包排队中的实例数, 54实时包资源使用率, 55实时包运行中的任务数 */
    AlarmIndicator?: number | null;
    /** 告警指标描述 */
    AlarmIndicatorDesc?: string | null;
    /** 指标阈值，1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败 */
    TriggerType?: number | null;
    /** 预计的超时时间，分钟级别 */
    EstimatedTime?: number | null;
    /** 告警阈值的算子,1 大于,2 小于 */
    Operator?: number | null;
    /** 告警指标阈值单位：ms(毫秒)、s(秒)、min(分钟) */
    AlarmIndicatorUnit?: string | null;
    /** 告警周期 */
    Duration?: number;
    /** 告警周期单位:hour,minute,day */
    DurationUnit?: string;
    /** 周期内最多告警次数 */
    MaxTimes?: number;
    /** 指标阈值 */
    Threshold?: number | null;
    /** 时间范围单位 */
    IndicatorTimeRangeUnit?: string | null;
    /** 时间范围值 */
    IndicatorTimeRangeValue?: number | null;
  }

  /** 任务告警信息 */
  interface AlarmInfo {
    /** 关联任务id */
    TaskIds: string;
    /** 告警类别；failure表示失败告警；overtime表示超时告警 */
    AlarmType: string;
    /** 告警方式；SMS表示短信；Email表示邮件；HTTP 表示接口方式；Wechat表示微信方式 */
    AlarmWay: string;
    /** 告警接收人，多个告警接收人以;分割 */
    AlarmRecipient: string;
    /** 告警接收人id，多个告警接收人id以;分割 */
    AlarmRecipientId: string;
    /** 预计运行的小时，取值范围0-23 */
    Hours: number;
    /** 预计运行分钟，取值范围0-59 */
    Minutes: number;
    /** 告警出发时机；1表示第一次运行失败；2表示所有重试完成后失败； */
    TriggerType: number;
    /** 告警信息id */
    AlarmId?: string;
    /** 告警状态设置；1表示可用；0表示不可用，默认可用 */
    Status?: number;
  }

  /** 告警免打扰时间区间 */
  interface AlarmQuietInterval {
    /** ISO标准，1表示周一，7表示周日。 */
    DaysOfWeek?: number[] | null;
    /** 开始时间，精度时分秒，格式 HH:mm:ss */
    StartTime?: string | null;
    /** 结束时间，精度时分秒，格式 HH:mm:ss */
    EndTime?: string | null;
  }

  /** 告警接收组 */
  interface AlarmReceiverGroup {
    /** 告警接收人类型 */
    AlarmRecipientType?: number | null;
    /** 告警接收人ID，多个用逗号隔开 */
    AlarmRecipientId?: string | null;
    /** 告警接收人名称，多个用逗号隔开 */
    AlarmRecipientName?: string | null;
    /** 告警方式，多个用逗号隔开 */
    AlarmWay?: string | null;
    /** 免打扰时间段 */
    QuietPeriods?: QuietPeriod[] | null;
    /** 告警渠道规则 */
    AlarmMessageRule?: string | null;
  }

  /** 告警接收人详情 */
  interface AlarmReceiverInfo {
    /** 告警ID */
    AlarmId: string;
    /** 告警接收人ID */
    AlarmReceiver: string;
    /** 邮件，0：未设置，1：成功，2：失败 */
    Email: number;
    /** 短信，0：未设置，1：成功，2：失败 */
    Sms: number;
    /** 微信，0：未设置，1：成功，2：失败 */
    Wechat: number;
    /** 电话，0：未设置，1：成功，2：失败 */
    Voice: number;
    /** 企业微信，0：未设置，1：成功，2：失败 */
    Wecom: number;
    /** http，0：未设置，1：成功，2：失败 */
    Http: number;
    /** 企业微信群，0：未设置，1：成功，2：失败 */
    WecomGroup?: number | null;
    /** 飞书群，0：未设置，1：成功，2：失败 */
    LarkGroup?: number | null;
    /** 发送结果 大json格式 */
    AlarmMessageSendResult?: string | null;
  }

  /** 审批列表信息 */
  interface Apply {
    /** 申请人id */
    ApplicantId?: string;
    /** 申请人名称 */
    ApplicantName?: string;
    /** 审批备注 */
    Remark?: string | null;
    /** 审批分类key */
    ApproveClassification?: string;
    /** 审批单id */
    ApproveId?: string;
    /** 审批类型key */
    ApproveType?: string;
    /** 申请原因 */
    Reason?: string | null;
    /** 创建时间 */
    CreateTime?: string;
    /** 审批时间 */
    ApproveTime?: string | null;
    /** 审批分类名称 */
    ApproveClassificationName?: string;
    /** 状态 */
    Status?: string;
    /** 审批类型名称 */
    ApproveTypeName?: string;
    /** 审批异常或者失败信息 */
    ErrorMessage?: string;
    /** 申请名称 */
    ApplyName?: string | null;
    /** 审批人id */
    ApproverId?: string | null;
    /** 审批人名称 */
    ApproverName?: string | null;
    /** 审批所属项目 */
    ApproveProjectName?: string | null;
    /** 审批id */
    ApplyId?: string | null;
    /** 扩展字段 */
    Metadata?: string | null;
    /** 创建时间 */
    CreateTimestamp?: number | null;
    /** 审批时间 */
    ApproveTimestamp?: number | null;
  }

  /** 修改审批单状态 */
  interface ApproveModify {
    /** 审批单id */
    ApproveId: string;
    /** 是否修改成功 */
    Success: boolean;
  }

  /** 审批分类 */
  interface ApproveType {
    /** 申请分类key */
    Type: string;
    /** 类型名称 */
    TypeName: string;
    /** 申请类型key */
    Classification: string;
  }

  /** 资产维度信息结构定义 */
  interface AssetDim {
    /** 文件夹 ID */
    FolderId?: number | null;
    /** 维度编码 */
    DimCode?: string | null;
    /** 维度名称 */
    DimName?: string | null;
    /** 维度描述 */
    Description?: string | null;
    /** 维度负责人UserId */
    OwnerAccount?: number | null;
    /** 维度负责人名称 */
    Owner?: string | null;
    /** 变更人ID */
    ModifyUserId?: number | null;
    /** 维度最近修改人名称 */
    ModifyUser?: string | null;
    /** 修改时间 */
    ModifyTime?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 维度录入方式， 取值：manual-手动录入；dict-关联字典表； */
    DimType?: string | null;
    /** 枚举值数量 */
    ValuePairCount?: number | null;
    /** 关联指标数量 */
    IndicatorPairCount?: number | null;
    /** 关联字段数量 */
    TableColumnCount?: number | null;
    /** 维度 ID */
    DimId?: number | null;
    /** 维度关联表字段 */
    DimTableLink?: DimTableLink | null;
    /** 枚举值列表 */
    ValuePairs?: Pair[] | null;
    /** 维度关联字段 */
    TableColumns?: AssetDimTableColumn[] | null;
    /** 关联指标列表 */
    SourceIndicatorIds?: IndicatorBaseSimpleInfo[] | null;
    /** 权限 */
    DimPermission?: PermissionStatus | null;
    /** 项目id */
    ProjectId?: string;
    /** 项目名称 */
    ProjectName?: string;
  }

  /** 资产维度关联数据表字段结构定义 */
  interface AssetDimTableColumn {
    /** 表字段名称 */
    ColumnName?: string | null;
    /** 表字段中文名称 */
    ColumnNameCn?: string | null;
    /** 表字段类型 */
    ColumnType?: string | null;
    /** 表字段描述 */
    ColumnDescription?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 表GUID */
    TableGuid?: string | null;
    /** 表归属的数据库名称 */
    DatabaseName?: string | null;
    /** 表归属的Schema名称 */
    SchemaName?: string | null;
  }

  /** 操作资源DTO */
  interface AsyncResourceVO {
    /** 处理Id */
    ProcessId?: number | null;
    /** 资源Id */
    ResourceId?: string | null;
    /** 资源名称 */
    ResourceName?: string | null;
    /** 自定义信息 */
    ExtraInfo?: ParamInfo[] | null;
  }

  /** aiops基础信息 */
  interface AttributeItemDTO {
    /** key */
    Key?: string | null;
    /** value */
    Value?: string | null;
    /** 描述 */
    Description?: string | null;
  }

  /** AttributeItemVO参数 */
  interface AttributeItemDsVO {
    /** Key值 */
    Key?: string | null;
    /** Value值 */
    Value?: string | null;
    /** 描述 */
    Description?: string | null;
  }

  /** 任务扩展信息 */
  interface AttributeItemOpsDto {
    /** 属性键 */
    Key?: string | null;
    /** 属性值 */
    Value?: string | null;
    /** 属性描述 */
    Description?: string | null;
  }

  /** 集群基础信息 */
  interface BaseClusterInfo {
    /** 集群id */
    ClusterId?: string | null;
    /** 集群类型，EMR/CDW等 */
    ClusterType?: string | null;
    /** 集群名称 */
    ClusterName?: string | null;
    /** 地域中文 */
    RegionCn?: string | null;
    /** 地域英文 */
    RegionEn?: string | null;
    /** 地区 */
    RegionArea?: string | null;
    /** 集群是否使用 */
    Used?: boolean | null;
    /** 集群状态 */
    Status?: number | null;
    /** 集群状态信息 */
    StatusInfo?: string | null;
    /** 集群存储类型 */
    StorageType?: string | null;
    /** 集群计算类型 */
    ComputeType?: string | null;
    /** 集群资源量 */
    ClusterResource?: string | null;
    /** 集群付费方式 */
    ChargeType?: string | null;
    /** 集群创建时间 */
    CreateTime?: string | null;
    /** 额外配置 */
    ExtraConf?: string | null;
    /** ranger账号名称 */
    RangerUserName?: string | null;
    /** cdw账号（用于展示） */
    CdwUserName?: string | null;
    /** 创建时间 */
    CreateTimestamp?: number | null;
    /** 修改时间 */
    UpdateTimestamp?: number | null;
  }

  /** 项目信息 */
  interface BaseProject {
    /** 项目标识，英文名 */
    ProjectName: string | null;
    /** 项目显示名称，可以为中文名 */
    DisplayName: string | null;
    /** 地域 */
    Region: string | null;
    /** 项目的所在租户ID */
    TenantId?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 备注 */
    Description?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 项目状态：0：禁用，1：启用，-3:禁用中，2：启用中 */
    Status?: number | null;
    /** 项目类型，SIMPLE：简单模式 STANDARD：标准模式 */
    Model?: string | null;
    /** 项目调度模式，task：任务模式 workflow：工作流模式 */
    ScheduleMode?: string;
  }

  /** 基础角色对象 */
  interface BaseRole {
    /** 角色id */
    RoleId?: string;
    /** 角色名称 */
    RoleName?: string | null;
    /** 角色昵称 */
    DisplayName?: string | null;
    /** 描述 */
    Description?: string | null;
    /** 角色类型, 分为System,Tenant,Project,Commercial */
    RoleType?: string | null;
    /** 系统预设 */
    SystemDefault?: boolean | null;
    /** 自定义参数 */
    Parameters?: string | null;
    /** 成员统计 */
    MemberCount?: number | null;
    /** 权限 */
    Privileges?: RolePrivilege[] | null;
    /** 操作者 */
    Operator?: BaseUser | null;
    /** 操作时间 */
    OperateTime?: number | null;
    /** 创建时间 */
    CreateTime?: number | null;
    /** 创建时间 */
    CreateTimeStr?: string | null;
    /** 更新时间 */
    UpdateTimeStr?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 创建人 */
    Creator?: string | null;
  }

  /** 租户基础信息 */
  interface BaseTenant {
    /** 租户id */
    TenantId: string | null;
    /** 租户标识 */
    TenantName: string | null;
    /** 租户显示名称，一般是中文名 */
    DisplayName: string | null;
    /** 备注 */
    Description: string | null;
    /** 租户主账号 */
    OwnerUserId: string | null;
    /** 租户的额外配置参数, json格式字符串 */
    Params: string | null;
  }

  /** 基础用户信息 */
  interface BaseUser {
    /** 有云的UIN，全局唯一 */
    UserId?: string | null;
    /** 用户全局唯一标识 */
    UserName?: string | null;
    /** 用户显示名称 */
    DisplayName?: string | null;
    /** 电话号码 */
    PhoneNum?: string | null;
    /** 邮箱 */
    Email?: string | null;
  }

  /** BatchCreateTaskVersion使用，描述任务信息 */
  interface BatchCreateTaskVersionDTO {
    /** 任务ID */
    TaskId: string | null;
    /** VersionRemark */
    VersionRemark?: string | null;
    /** 文件夹ID */
    FolderId?: string | null;
  }

  /** 批量操作的结果返回 */
  interface BatchOperateResult {
    /** 批量操作成功数 */
    SuccessCount: number;
    /** 批量操作失败数 */
    FailedCount: number;
    /** 批量操作的总数 */
    TotalCount: number;
  }

  /** 实例批量操作结果类 */
  interface BatchOperateResultOpsDto {
    /** 结果 */
    Result?: boolean | null;
    /** 错误id */
    ErrorId?: string | null;
    /** 错误说明 */
    ErrorDesc?: string | null;
    /** 异步操作id */
    AsyncActionId?: string | null;
  }

  /** 批量操作的结果返回 */
  interface BatchOperationOpsDto {
    /** 批量操作成功数 */
    SuccessCount?: number | null;
    /** 批量操作失败数 */
    FailedCount?: number | null;
    /** 批量操作的总数 */
    TotalCount?: number | null;
    /** 异步操作记录的唯一id */
    AsyncActionId?: string | null;
  }

  /** 批量操作结果，带失败原因 */
  interface BatchOpsDTO {
    /** 总数量 */
    TotalCount?: number | null;
    /** 成功数量 */
    SuccessCount?: number | null;
    /** 失败数量 */
    FailCount?: number | null;
    /** 失败原因 */
    FailMessageList?: FailMessage[] | null;
  }

  /** 批量操作结果 */
  interface BatchResult {
    /** 正在运行的任务数 */
    Running: number;
    /** 执行成功的任务数 */
    Success: number;
    /** 执行失败的任务数 */
    Failed: number;
    /** 总任务数 */
    Total: number;
  }

  /** 批量执行结果 */
  interface BatchResultDs {
    /** 成功数 */
    Success?: number | null;
    /** 失败数 */
    Failed?: number | null;
    /** 总计 */
    Total?: number | null;
  }

  /** 操作结果 */
  interface BatchReturn {
    /** 执行结果 */
    Result: boolean;
    /** 执行情况备注 */
    ErrorDesc: string | null;
    /** 执行情况id */
    ErrorId: string | null;
  }

  /** 批量操作出参 */
  interface BatchTaskOperateNew {
    /** 操作Id */
    JobId?: number | null;
  }

  /** 数据地图-数据类目信息 */
  interface BizCatalogsInfo {
    /** 应用id */
    AppId: string | null;
    /** 类目id */
    Id: number | null;
    /** 类目层级 */
    Level: number | null;
    /** 类目名称 */
    Name: string | null;
    /** 上级类目id */
    ParentId: number | null;
    /** 类目顺序 */
    Position: number | null;
    /** 类目名称英文 */
    NameEn?: string | null;
  }

  /** 实时任务同步速度 字节/s */
  interface BytesSpeed {
    /** 节点类型 */
    NodeType: string | null;
    /** 节点名称 */
    NodeName: string | null;
    /** 速度值列表 */
    Values: SpeedValue[] | null;
  }

  /** CandidateDsDTo */
  interface CandidateDsDTo {
    /** 取值 */
    Value?: string | null;
    /** 取值描述 */
    ValueDesc?: string | null;
  }

  /** 模版详情 */
  interface CodeTemplateDetail {
    /** 项目id */
    ProjectId?: string | null;
    /** 模版名称 */
    CodeTemplateName?: string | null;
    /** 任务类型 */
    TaskType?: number | null;
    /** 代码模版描述 */
    CodeTemplateDesc?: string | null;
    /** 文件夹id */
    FolderId?: string | null;
    /** 文件夹名称 */
    FolderName?: string | null;
    /** 责任人名称 */
    InCharge?: string | null;
    /** 责任人id */
    InChargeId?: string | null;
    /** 扩展信息 */
    Ext?: TaskExtDsVO | null;
    /** 模版id */
    CodeTemplateId?: string | null;
    /** 最后更新时间 */
    LastUpdateTime?: string | null;
    /** 更新人名称 */
    UpdateUser?: string | null;
    /** 更新人id */
    UpdateUserId?: string | null;
    /** 执行ip */
    BrokerIp?: string | null;
    /** 资源组id */
    ResourceGroup?: string | null;
    /** 是否提交 */
    Submit?: boolean | null;
    /** 模版脚本是否发生变化 */
    ScriptChange?: boolean | null;
    /** 代码模版脚本，base64编码返回 */
    Content?: string | null;
  }

  /** 文件夹列表 */
  interface CollectionFolderOpsDto {
    /** 总数 */
    TotalCount?: number | null;
    /** 总页面数 */
    TotalPage?: number | null;
    /** 当前页面数量 */
    PageCount?: number | null;
    /** 页码 */
    PageNumber?: number | null;
    /** 每页数量 */
    PageSize?: number | null;
    /** 任务信息 */
    Items?: FolderOpsDto[] | null;
  }

  /** 实例列表结构体 */
  interface CollectionInstanceOpsDto {
    /** 总数 */
    TotalCount?: number | null;
    /** 总页面数 */
    TotalPage?: number | null;
    /** 当前页面数量 */
    PageCount?: number | null;
    /** 页码 */
    PageNumber?: number | null;
    /** 每页数量 */
    PageSize?: number | null;
    /** 实例信息 */
    Items?: InstanceOpsDto[] | null;
  }

  /** 列血缘聚合信息 */
  interface ColumnAggregationLineage {
    /** 表名 */
    TableName: string | null;
    /** 父节点ID */
    ParentId: string | null;
    /** 元数据类型 */
    MetastoreType: string | null;
    /** 字符串类型的父节点集合 */
    ParentSet: string | null;
    /** 字符串类型的子节点集合 */
    ChildSet: string | null;
    /** 列信息集合 */
    ColumnInfoSet: SimpleColumnInfo[] | null;
  }

  /** 表的元数据信息 */
  interface ColumnBasicInfo {
    /** 表的全局唯一ID */
    TableId?: string | null;
    /** 数据源全局唯一ID */
    DatasourceId?: string | null;
    /** 数据源名 */
    DatasourceName?: string | null;
    /** 数据库ID */
    DatabaseId?: string | null;
    /** 数据库名 */
    DatabaseName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 字段名称 */
    ColumnName?: string | null;
    /** 数据类型,string/int等 */
    DataType?: string | null;
    /** 字段类型, varchar(32)/int(10)等 */
    ColumnType?: string | null;
    /** 字段默认值 */
    ColumnDefault?: string | null;
    /** 索引类型, PRI/MUL/PARTITION等,普通字段该值为空串 */
    ColumnKey?: string | null;
    /** 字段顺序标识 */
    ColumnPosition?: number | null;
    /** 字段注释 */
    ColumnComment?: string | null;
    /** 数据类型 */
    StoreType?: string | null;
    /** 所属项目ID */
    ProjectId?: string | null;
    /** 所属项目英文名 */
    ProjectName?: string | null;
    /** 所属项目中文名 */
    ProjectDisplayName?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 精度 */
    Scale?: number | null;
  }

  /** ColumnItem */
  interface ColumnData {
    /** ColumnName1 */
    EventName?: string | null;
    /** ColumnName1 */
    EventProjectName?: string | null;
    /** 1 */
    Type?: string | null;
    /** 1 */
    CurRunDate?: string | null;
    /** 1 */
    TaskId?: string | null;
    /** 1 */
    State?: string | null;
    /** 1 */
    EventType?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
  }

  /** ColumnItem */
  interface ColumnItem {
    /** ColumnName1 */
    ColumnName?: string | null;
    /** ColumnName1 */
    ColumnRef?: string | null;
  }

  /** 列血缘节点 */
  interface ColumnLineage {
    /** 数据源id */
    DatasourceId: string;
    /** database 名称 */
    DatabaseName: string;
    /** 表名称 */
    TableName: string;
    /** 列名称 */
    ColumnName: string;
    /** catalog 名称 */
    CatalogName?: string;
    /** schema 名称 */
    SchemaName?: string;
    /** 扩展参数 */
    ExtParams?: ExtParam[];
    /** 表类型 */
    TableType?: string;
    /** 列类型 */
    ColumnType?: string;
  }

  /** 血缘字段信息 */
  interface ColumnLineageInfo {
    /** 血缘id */
    Id: string | null;
    /** 数据源ID */
    DatasourceId: string | null;
    /** 字段名称 */
    ColumnName?: string | null;
    /** 字段中文名称 */
    ColumnNameCn?: string | null;
    /** 字段类型 */
    ColumnType?: string | null;
    /** 关系参数 */
    RelationParams?: string | null;
    /** 参数 */
    Params?: string | null;
    /** 父id */
    ParentId?: string | null;
    /** 元数据类型 */
    MetastoreType?: string | null;
    /** 元数据类型名称 */
    MetastoreTypeName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 字段全名称 */
    QualifiedName?: string | null;
    /** 下游节点数 */
    DownStreamCount?: number | null;
    /** 上游节点数 */
    UpStreamCount?: number | null;
    /** 描述信息 */
    Description?: string | null;
    /** 由中心节点出发的路径信息 */
    PrefixPath?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    ModifyTime?: string | null;
    /** 任务id列表 */
    Tasks?: string[] | null;
    /** 父节点列表字符串 */
    ParentSet?: string | null;
    /** 子节点列表字符串 */
    ChildSet?: string | null;
    /** 额外参数 */
    ExtParams?: LineageParamRecord[] | null;
    /** 表ID */
    TableId?: string | null;
  }

  /** 列血缘对 */
  interface ColumnLineagePair {
    /** 列血缘来源方 */
    Sources: ColumnLineage[];
    /** 列血缘目标方 */
    Target: ColumnLineage;
  }

  /** 列的元数据 */
  interface ColumnMeta {
    /** 字段英文名称 */
    NameEn?: string | null;
    /** 字段中文名称 */
    NameCn?: string | null;
    /** 字段类型 */
    Type?: string | null;
    /** 字段描述 */
    Description?: string | null;
    /** 字段序号 */
    Position?: number | null;
    /** 是否为分区字段 */
    IsPartition?: boolean | null;
    /** 字段名 */
    Name?: string | null;
    /** HBase列簇属性集合 */
    ColumnFamiliesFieldSet?: Pair[] | null;
    /** 对应码表字典ID */
    DictionaryId?: string | null;
    /** 对应码表字典名称 */
    DictionaryName?: string | null;
    /** 安全等级：名称 */
    LevelName?: string | null;
    /** 安全等级：值范围1-10 */
    LevelRank?: number | null;
    /** influxdb字段类别 */
    InfluxCategory?: string | null;
    /** 字段使用说明 */
    Specification?: string | null;
    /** 目录名称 */
    CategoryName?: string | null;
    /** 源类型 */
    OriginType?: string | null;
    /** 列绑定的指标信息 */
    IndicatorBase?: IndicatorBaseSimpleInfo | null;
    /** 列绑定的维度信息 */
    AssetDim?: AssetDim | null;
  }

  /** 字段值变量 */
  interface ColumnValueConfig {
    /** 字段值key */
    FieldKey?: string | null;
    /** 字段值 */
    FieldValue?: string | null;
    /** 字段值类型 */
    FieldDataType?: string | null;
  }

  /** 提交任务数据结构 */
  interface CommitTaskDataDto {
    /** 任务审批ID */
    TaskApproveId?: string | null;
  }

  /** 内容详情 */
  interface CommonContent {
    /** 详情内容 */
    Content: string | null;
  }

  /** Id包装对象 */
  interface CommonId {
    /** Id值 */
    Id: string | null;
  }

  /** 返回命令id */
  interface CommonIdOpsDto {
    /** 返回补录计划名称_ok */
    Id?: string | null;
    /** 补录计划Id */
    MakeId?: string | null;
  }

  /** 质量检查对比结果 */
  interface CompareResult {
    /** 对比结果项列表 */
    Items: CompareResultItem[] | null;
    /** 检测总行数 */
    TotalRows: number | null;
    /** 检测通过行数 */
    PassRows: number | null;
    /** 检测不通过行数 */
    TriggerRows: number | null;
    /** 比较关系 */
    ComputeExpression?: string | null;
  }

  /** 对比结果项 */
  interface CompareResultItem {
    /** 对比结果， 1为真 2为假 */
    FixResult: number | null;
    /** 质量sql执行结果 */
    ResultValue: string | null;
    /** 阈值列表 */
    Values: ThresholdValue[] | null;
    /** 比较操作类型 */
    Operator: string | null;
    /** 比较类型 */
    CompareType: number | null;
    /** 值比较类型 */
    ValueComputeType: number | null;
  }

  /** 对比规则 */
  interface CompareRule {
    /** 比较条件列表 */
    Items?: CompareRuleItem[] | null;
    /** 周期性模板默认周期，单位秒 */
    CycleStep?: number | null;
    /** o 表示 或，a 表示 且，数字表示items下标 */
    ComputeExpression?: string | null;
  }

  /** 比较条件 */
  interface CompareRuleItem {
    /** 比较类型 1.固定值 2.波动值 3.数值范围比较 4.枚举范围比较 5.不用比较 */
    CompareType?: number | null;
    /** 比较操作类型< <= == => > !=IRLCRO:在区间内(左闭右开)IRLORC:在区间内(左开右闭)IRLCRC:在区间内(左闭右闭)IRLORO:在区间内(左开右开)NRLCRO:不在区间内(左闭右开)NRLORC:不在区间内(左开右闭)NRLCRC:不在区间内(左闭右闭)NRLORO:不在区间内(左开右开) */
    Operator?: string | null;
    /** 质量统计值类型 1.绝对值 2.上升 3. 下降 4._C包含 5. N_C不包含 */
    ValueComputeType?: number | null;
    /** 比较阈值列表 */
    ValueList?: ThresholdValue[] | null;
  }

  /** Content */
  interface Content {
    /** 任务id */
    TaskId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 诊断 */
    Diagnose?: string | null;
    /** 理由 */
    Reason?: string | null;
    /** 操作 */
    Operation?: string | null;
    /** 链接 */
    Url?: string | null;
  }

  /** 是否支持creat 或ddl */
  interface CreateAndDDLSupport {
    /** 是否支持select */
    SupportSelect?: boolean | null;
    /** 是否支持ddl */
    SupportDdl?: boolean | null;
  }

  /** 补录计划日期范围 */
  interface CreateMakeDatetimeInfo {
    /** 开始日期 */
    StartDate?: string | null;
    /** 结束日期 */
    EndDate?: string | null;
    /** 开始时间 */
    StartTime?: string | null;
    /** 结束时间 */
    EndTime?: string | null;
  }

  /** 日评分信息 */
  interface DailyScoreInfo {
    /** 统计日期 时间戳 */
    StatisticsDate: number | null;
    /** 评分 */
    Score: number | null;
  }

  /** 数据监测情况结果 */
  interface DataCheckStat {
    /** 表总数 */
    TableTotal: number;
    /** 字段总数 */
    ColumnTotal: number;
    /** 表配置检测数 */
    TableConfig: number;
    /** 字段配置检测数 */
    ColumnConfig: number;
    /** 表实际检测数 */
    TableExec: number;
    /** 字段实际检测数 */
    ColumnExec: number;
  }

  /** 获取数据服务API的发布态信息列表过滤条件 */
  interface DataServicePublishedApiListFilter {
    /** 请求路径关键词筛选 */
    PathUrl?: string;
    /** Api名称关键词筛选 */
    Keyword?: string;
    /** Api认证方式筛选 0:免认证 1:应用认证 */
    AuthTypes?: number[];
    /** 服务Api状态 1:已上线 3:已下线 */
    ApiStatus?: number[];
    /** API配置方式 0:向导、1、脚本、2、注册Api */
    ConfigTypes?: number[];
  }

  /** 数据服务通用排序参数 */
  interface DataServiceRequestListOrder {
    /** 排序参数名称取值： CreateTime 表示按照创建时间排序 ModifyTime 表示按照更新时间排序 */
    Name?: string;
    /** 排序参数顺序 */
    Direction?: string;
  }

  /** 数据服务入参 */
  interface DataServiceRequestParam {
    /** 参数名称 */
    ParamName: string | null;
    /** 绑定字段 */
    BindField: string | null;
    /** 参数类型 */
    ParamType: string | null;
    /** 参数位置 */
    ParamPosition: string | null;
    /** 操作符 */
    Operator: string | null;
    /** 是否为空 */
    NonEmpty: number | null;
    /** 默认值 */
    DefaultValue?: string | null;
    /** 示例值 */
    ExampleValue?: string | null;
    /** 参数描述 */
    Description?: string | null;
  }

  /** 数据服务入参 */
  interface DataServiceResponseParam {
    /** 参数名称 */
    ParamName: string | null;
    /** 绑定字段 */
    BindField: string | null;
    /** 参数类型 */
    ParamType: string | null;
    /** 示例值 */
    ExampleValue: string | null;
    /** 参数描述 */
    Description: string | null;
  }

  /** 数据源云梯连接状态 */
  interface DataSourceConnectStatus {
    /** id */
    Id?: number;
    /** 项目id */
    ProjectId?: string;
    /** 数据源id */
    DatasourceId?: string;
    /** 连接结果 */
    ConnectResult?: number;
    /** 错误信息 */
    ConnectError?: string;
    /** 时间戳 */
    Timestamp?: number;
  }

  /** 数据源环境信息 */
  interface DataSourceEnvInfo {
    /** 环境 */
    Env?: string | null;
    /** 数据源类型 */
    DataSourceType?: string | null;
    /** 集群id */
    ClusterId?: string | null;
    /** 配置信息 */
    Params?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 数据源id */
    DataSourceId?: string | null;
    /** env环境的数据源id */
    EnvDataSourceId?: string | null;
    /** 配置信息 */
    BizParams?: string | null;
    /** 是否支持tccatalog */
    TcCatalogOpen?: boolean;
  }

  /** 数据源对象 */
  interface DataSourceInfo {
    /** 若数据源列表为绑定数据库，则为db名称 */
    DatabaseName?: string | null;
    /** 数据源描述信息 */
    Description?: string | null;
    /** 数据源ID */
    ID?: number | null;
    /** 数据源引擎的实例ID，如CDB实例ID */
    Instance?: string | null;
    /** 数据源名称，在相同SpaceName下，数据源名称不能为空 */
    Name?: string | null;
    /** 数据源引擎所属区域 */
    Region?: string | null;
    /** 数据源类型:枚举值 */
    Type?: string | null;
    /** 数据源所属的集群id */
    ClusterId?: string | null;
    /** 应用ID AppId */
    AppId?: number | null;
    /** 业务侧数据源的配置信息扩展 */
    BizParams?: string | null;
    /** 数据源类别：绑定引擎、绑定数据库 */
    Category?: string | null;
    /** 数据源展示名，为了可视化查看 */
    Display?: string | null;
    /** 数据源责任人账号ID */
    OwnerAccount?: string | null;
    /** 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同 */
    Params?: string | null;
    /** 数据源数据源的可见性，1为可见、0为不可见。默认为1 */
    Status?: number | null;
    /** 数据源责任人账号名称 */
    OwnerAccountName?: string | null;
    /** 集群名称 */
    ClusterName?: string | null;
    /** 归属项目ID */
    OwnerProjectId?: string | null;
    /** 归属项目Name */
    OwnerProjectName?: string | null;
    /** 归属项目标识 */
    OwnerProjectIdent?: string | null;
    /** 授权项目 */
    AuthorityProjectName?: string | null;
    /** 授权用户 */
    AuthorityUserName?: string | null;
    /** 是否有编辑权限 */
    Edit?: boolean | null;
    /** 是否有授权权限 */
    Author?: boolean | null;
    /** 是否有转交权限 */
    Deliver?: boolean | null;
    /** 数据源状态 */
    DataSourceStatus?: string | null;
    /** 时间 */
    CreateTime?: number | null;
    /** Params json字符串 */
    ParamsString?: string | null;
    /** BizParams json字符串 */
    BizParamsString?: string | null;
    /** 修改时间 */
    ModifiedTime?: number | null;
    /** 数据源页面展示类型，与Type对应 */
    ShowType?: string | null;
    /** 当前数据源生产源Id */
    ProductId?: number | null;
    /** 当前数据源开发源Id */
    DevelopmentId?: number | null;
    /** 同params 内容为开发数据源的数据 */
    DevelopmentParams?: string | null;
    /** 数据源连接状态 */
    ConnectStatus?: DataSourceConnectStatus | null;
    /** 数据源展示类型 */
    DisplayType?: string | null;
    /** 数据源环境 */
    Env?: string | null;
    /** 数据源唯一标识 */
    DatasourceUrn?: string | null;
    /** 是否标准模式 */
    Model?: string | null;
    /** 数据源环境信息 */
    DataSourceEnvInfos?: DataSourceEnvInfo[] | null;
    /** 禁止数据探查 */
    ForbidProbe?: boolean;
    /** 数据源类型 */
    DatasourceType?: string | null;
    /** 是否开通tccatalog,默认没有开启 */
    TcCatalogOpen?: boolean;
  }

  /** 查询数据源分页列表 */
  interface DataSourceInfoPage {
    /** 分页页码 */
    PageNumber: number | null;
    /** 分页大小 */
    PageSize: number | null;
    /** 数据源列表 */
    Rows: DataSourceInfo[] | null;
    /** 总数 */
    TotalCount: number | null;
    /** 总分页页码 */
    TotalPageNumber: number | null;
  }

  /** 数据质量数据来源数据库 */
  interface DatabaseInfo {
    /** 数据源名称 */
    DatasourceName?: string | null;
    /** 数据源Id */
    DatasourceId?: string | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 数据库id */
    DatabaseId?: string | null;
    /** 实例Id */
    InstanceId?: string | null;
    /** 数据源类型 */
    DatasourceType?: number | null;
    /** 数据库原始名称 */
    OriginDatabaseName?: string | null;
    /** schema名称 */
    OriginSchemaName?: string | null;
    /** 0或者未返回.未定义，1.生产 2.开发 */
    DsEnvType?: number | null;
    /** EMR引擎部署方式：CVM/TKE */
    ClusterDeployType?: string | null;
    /** 模式名称 */
    SchemaName?: string | null;
    /** 是否展示目录 */
    ShowEnableCatalog?: boolean | null;
  }

  /** 数据源元数据 */
  interface DatabaseMeta {
    /** 项目Id */
    ProjectId?: string | null;
    /** 技术类型 */
    MetastoreType?: string | null;
    /** 数据源名称 */
    DatasourceName?: string | null;
    /** 数据源Id */
    DatasourceId?: number | null;
    /** 项目英文名 */
    ProjectName?: string | null;
    /** 数据源类别：绑定引擎、绑定数据库,可用值:DB,ENGINE */
    Category?: string | null;
    /** 数据源描述信息 */
    Description?: string | null;
    /** 数据源引擎的实例ID，如CDB实例ID */
    Instance?: string | null;
    /** 数据源引擎所属区域 */
    Region?: string | null;
    /** 数据源数据源的可见性，1为可见、0为不可见。默认为1 */
    Status?: number | null;
    /** db名称 */
    DatabaseName?: string | null;
    /** 项目中文名 */
    ProjectDisplayName?: string | null;
    /** 责任人名称 */
    OwnerAccountName?: string | null;
    /** 数据来源展示名称 */
    DisplayName?: string | null;
    /** 数据库ID */
    DatabaseId?: string | null;
    /** 数据来源类型：hive/mysql/hbase等 */
    Catalog?: string | null;
    /** 存储量大小,单位为 byte */
    StorageSize?: number | null;
    /** 格式化后的存储量大小，带单位，如 12B */
    StorageSizeWithUnit?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 总表数 */
    TableCount?: number | null;
    /** 数据源信息 */
    DatasourceList?: GovDatasourceInfo[] | null;
    /** 采集任务id */
    CollectJobId?: string | null;
    /** 采集任务名称 */
    CollectJobName?: string | null;
    /** 引擎id */
    ClusterId?: string | null;
    /** 引擎名称 */
    ClusterName?: string | null;
    /** 库下表的最新更新时间 */
    ModifiedTimeByTables?: number | null;
    /** 库下表的最新访问时间 */
    LastAccessTimeByTables?: number | null;
    /** 库guid */
    DatabaseGuid?: string | null;
    /** 环境，取值 prod或者 dev */
    Environment?: string | null;
    /** Owner的账户信息：账号信息 */
    OwnerAccount?: number | null;
    /** 操作权限 */
    OperateOption?: OperateOption | null;
  }

  /** 数据库Schema信息 */
  interface DatabaseSchemaIInfo {
    /** schema名称 */
    SchemaName?: string | null;
    /** 数据库名称 */
    OriginDatabaseName?: string | null;
  }

  /** 数据源对象 */
  interface DatasourceBaseInfo {
    /** 若数据源列表为绑定数据库，则为db名称 */
    DatabaseNames?: string[] | null;
    /** 数据源描述信息 */
    Description?: string | null;
    /** 数据源ID */
    ID?: number;
    /** 数据源引擎的实例ID，如CDB实例ID */
    Instance?: string | null;
    /** 数据源名称，在相同SpaceName下，数据源名称不能为空 */
    Name?: string;
    /** 数据源引擎所属区域 */
    Region?: string | null;
    /** 数据源类型:枚举值 */
    Type?: string | null;
    /** 数据源所属的集群id */
    ClusterId?: string | null;
    /** 数据源版本信息 */
    Version?: string | null;
    /** 数据源附带参数信息Params json字符串 */
    ParamsString?: string | null;
    /** 区分数据源类型自定义源还是系统源 */
    Category?: string | null;
  }

  /** 依赖配置 */
  interface DependencyConfig {
    /** 周期运行依赖配置： HOUR,DAY,WEEK,MONTH,YEAR,CRONTAB,MINUTE,RANGE_DAY,RANGE_HOUR,RANGE_MINUTE,LIST_DAY,LIST_HOUR,LIST_MINUTE; */
    DependConfType: string;
    /** 依赖配置从属周期类型，CURRENT_HOUR，PREVIOUS_HOUR，CURRENT_DAY，PREVIOUS_DAY，PREVIOUS_WEEK，PREVIOUS_FRIDAY，PREVIOUS_WEEKEND，CURRENT_MONTH，PREVIOUS_MONTH，PREVIOUS_END_OF_MONTH，PREVIOUS_BEGIN_OF_MONTH，ALL_MONTH_OF_YEAR，ALL_DAY_OF_YEAR，CURRENT_YEAR，CURRENT，CURRENT_MINUTE，PREVIOUS_MINUTE_CYCLE，PREVIOUS_HOUR_CYCLE */
    SubordinateCyclicType: string;
    /** WAITING，等待（默认策略）EXECUTING:执行 */
    DependencyStrategy: string;
    /** 父任务信息 */
    ParentTask?: TaskInnerInfo | null;
    /** 子任务信息 */
    SonTask?: TaskInnerInfo | null;
    /** 偏移量 */
    Offset?: string | null;
  }

  /** 依赖配置 */
  interface DependencyConfigDsDTO {
    /** ParentTask任务 */
    ParentTask: TaskDsDTO | null;
    /** SonTask任务 */
    SonTask: TaskDsDTO | null;
    /** the dependency config */
    MainCyclicConfig: string | null;
    /** SubordinateCyclicConfig配置 */
    SubordinateCyclicConfig: string | null;
    /** DependencyStrategy策略 */
    DependencyStrategy: DependencyStrategyDs | null;
    /** 偏移量 */
    Offset?: string | null;
  }

  /** 超时弱依赖配置 */
  interface DependencyConfigTimeoutDTO {
    /** 超时类型WAIT_TOTAL_TIMEOUT 等待总时长RUNNING_TIMEOUT 运行时长WAIT_TIME_POINT_TIMEOUT 等待超过配置时间 */
    TimeoutType?: string | null;
    /** 超时时间 */
    TimeoutValue?: number | null;
    /** 固定时间点 */
    TimeoutPoint?: string | null;
  }

  /** 依赖配置策略 */
  interface DependencyStrategyDs {
    /** 等待上游任务实例策略：EXECUTING（执行）；WAITING（等待） */
    PollingNullStrategy?: string | null;
    /** 仅当PollingNullStrategy为EXECUTING时才需要填本字段，List类型：NOT_EXIST（默认，在分钟依赖分钟/小时依赖小时的情况下，父实例不在下游实例调度时间范围内）；PARENT_EXPIRED（父实例失败）；PARENT_TIMEOUT（父实例超时）。以上场景满足任一条件即可通过该父任务实例依赖判断，除以上场景外均需等待父实例。 */
    TaskDependencyExecutingStrategies?: string[] | null;
    /** 仅当TaskDependencyExecutingStrategies中包含PARENT_TIMEOUT时才需要填本字段，下游任务依赖父实例执行超时时间，单位：分钟。 */
    TaskDependencyExecutingTimeoutValue?: number | null;
    /** 超时依赖策略 */
    DependencyConfigTimeoutTypeList?: DependencyConfigTimeoutDTO[] | null;
  }

  /** 申请列表 */
  interface DescribeApply {
    /** 申请列表详情 */
    Rows?: Apply[];
    /** 总分页页码 */
    TotalPageNumber?: number;
    /** 总个数 */
    TotalCount?: number;
    /** 分页页码 */
    PageNumber?: number;
    /** 分页大小 */
    PageSize?: number;
  }

  /** 批量操作任务列表 */
  interface DescribeBatchOperateTaskDTO {
    /** 任务ID */
    TaskId?: string | null;
    /** 任务名 */
    TaskName?: string | null;
    /** 工作流Id */
    WorkflowId?: string | null;
    /** 工作流名 */
    WorkflowName?: string | null;
    /** 状态 */
    Status?: string | null;
    /** 任务ID */
    TaskTypeId?: number | null;
    /** 任务类型 */
    TaskTypeDesc?: string | null;
    /** 文件夹名 */
    FolderName?: string | null;
    /** 文件夹ID */
    FolderId?: string | null;
    /** 负责人 */
    InCharge?: string | null;
    /** 是否提交 */
    Submit?: number | null;
    /** 引擎：presto\SparkJob\SparkSql */
    DataEngine?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 创造时间 */
    CreateTime?: string | null;
    /** 周期类型D天周期H小时Ccrontab类型I分钟O一次性Y年R用户驱动W周M月 */
    CycleUnit?: string | null;
    /** 调度计划 */
    ScheduleDesc?: string | null;
    /** 数据源ID */
    DatasourceId?: string | null;
    /** 数据源类型 */
    DatasourceType?: string | null;
    /** 引擎名称 */
    ComputeResource?: string | null;
    /** dlc地域 */
    DlcRegion?: string | null;
    /** 资源组或自定义 */
    IsInherit?: string | null;
  }

  /** 批量操作任务列表分页 */
  interface DescribeBatchOperateTaskPage {
    /** 总页码数 */
    PageCount: number | null;
    /** 内容 */
    Items: DescribeBatchOperateTaskDTO[] | null;
    /** 总个数 */
    TotalCount?: number | null;
  }

  /** 查询数据服务API的发布态信息详情出参 */
  interface DescribeDataServicePublishedApiDetailResp {
    /** 服务Api名称 */
    ApiName?: string;
    /** 服务请求Path */
    PathUrl?: string;
    /** 服务责任人名称 */
    OwnerName?: string;
    /** 服务请求方式 */
    RequestType?: string;
    /** 服务标签名称集合 */
    ApiTagNames?: string | null;
    /** 服务描述 */
    ApiDescription?: string | null;
    /** 服务请求返回示例 */
    RequestExample?: string | null;
    /** 服务请求成功返回示例 */
    RequestSuccess?: string | null;
    /** 服务请求失败返回示例 */
    RequestError?: string | null;
    /** 服务请求参数列表 */
    RequestParam?: DataServiceRequestParam[] | null;
    /** 服务响应参数列表 */
    ResponseParam?: DataServiceResponseParam[] | null;
    /** 最大qps */
    MaxAllowQps?: number;
    /** 最大记录数 */
    MaxAllowPageSize?: number;
    /** 超时时间，单位ms */
    TimeoutPeriod?: number;
    /** ApiId */
    ApiId?: string | null;
    /** 0:免认证 1:应用认证 */
    AuthType?: number;
    /** 请求地址 */
    GatewayApiUrl?: string | null;
    /** 服务Api状态 1:已上线 3:已下线 */
    ApiStatus?: number | null;
  }

  /** 获取数据服务API的发布态信息列表响应内容 */
  interface DescribeDataServicePublishedApiListResp {
    /** 服务id */
    Id?: string;
    /** 服务Api名称 */
    ApiName?: string;
    /** 所属目录名称 */
    ApiFolderName?: string;
    /** 服务Api标签名称集合 */
    ApiTagNames?: string;
    /** 服务负责人 */
    OwnerName?: string;
    /** 服务创建时间 */
    CreateTime?: string;
    /** Api的id */
    ApiId?: string;
    /** 服务Api认证方式 0:免认证 1:应用认证 */
    AuthType?: number;
    /** 服务Api状态 0:创建 1:已上线 2:已删除 3:已下线 */
    ApiStatus?: number;
    /** 配置方式 0:向导、1、脚本、2、注册Api */
    ConfigType?: number | null;
    /** 更新时间 */
    ModifyTime?: string | null;
  }

  /** 文件夹分页信息 */
  interface DescribeFolderWorkflowListData {
    /** 工作流信息列表 */
    Items: Workflow[];
    /** 总条数 */
    TotalCount: number;
    /** 页号 */
    PageNumber: number;
    /** 页大小 */
    PageSize: number;
  }

  /** 待提交任务信息 */
  interface DescribePendingSubmitTaskInfo {
    /** 任务编号 */
    TaskId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 修改类型 */
    ModifyType?: string | null;
    /** 任务状态 */
    TaskStatus?: string | null;
    /** 提交预检查（Y/N） */
    SubmitPreCheck?: string | null;
    /** 提交预检查提交可能会失败的原因 */
    SubmitPreCheckDetailList?: TaskSubmitPreCheckDetailInfo[] | null;
    /** 资源组编号 */
    ExecutorGroupId?: string | null;
    /** 资源组名称 */
    ExecutorGroupName?: string | null;
    /** 任务类型id，取值范围：26 离线集成任务30 Python任务31 PySpark任务34 HiveSQL任务35 Shell任务36 SparkSQL任务21 JdbcSQL任务23 TDSQL-PostgreSQL任务32 DLCSQL任务33 Impala任务41 Kettle任务42 Tchouse-X任务43 TCHouse-X SQL任务46 DLCSpark任务50 DLC-PySpark任务47 TiOne任务48 Trino任务39 Spark任务92 MapReduce任务38 Shell表单模式任务130 BranchNode任务131 MergeNode任务132 Notebook任务133 SSH任务134 StarRocks任务137 For-each任务 */
    TaskTypeId?: number | null;
  }

  /** 查询任务绑定的事件的响应 */
  interface DescribeRelatedTasksByTaskIdResp {
    /** 页码 */
    PageNumber?: number | null;
    /** 单页大小 */
    PageSize?: number | null;
    /** 总条数 */
    TotalCount?: number | null;
    /** 任务直接关联的上下游任务列表 */
    RelatedTaskList?: RelatedTask[] | null;
  }

  /** 分组获取编排空间测试运行记录 */
  interface DescribeTaskInstancesStatusDto {
    /** 根据任务信息获取实例状态信息实例 */
    Instances?: ParamGetTaskInstancesStatusInfoResponseInstance[] | null;
  }

  /** 批量操作任务列表分页 */
  interface DescribeTasksForCodeTemplatePage {
    /** 总页码数 */
    PageCount: number | null;
    /** 内容 */
    Items?: TaskSimpleVo[] | null;
    /** 总个数 */
    TotalCount?: number | null;
  }

  /** DiagnoseRep */
  interface DiagnoseRep {
    /** 诊断信息内容 */
    Content?: Content | null;
    /** 诊断结果相关信息列表 */
    Table?: Table | null;
  }

  /** 维度关联单个表字段 */
  interface DimTableLink {
    /** 维度主键KEY对应的表列 */
    Key: string | null;
    /** 维度值对应的表列 */
    Value: string | null;
    /** 表 GUID */
    TableGuid: string | null;
    /** 表名称 */
    TableName?: string | null;
  }

  /** 维度统计业务视图 */
  interface DimensionCount {
    /** 维度类型1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
    DimType?: number | null;
    /** 统计值 */
    Count?: number | null;
    /** 维度类型1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
    QualityDim?: number | null;
  }

  /** 维度评分 */
  interface DimensionScore {
    /** 维度评分列表 */
    DimensionScoreList: DimensionScoreInfo[] | null;
  }

  /** 维度评分信息 */
  interface DimensionScoreInfo {
    /** 维度名称 */
    Name?: string | null;
    /** 权重 */
    Weight?: number | null;
    /** 设置人id */
    UserId?: number | null;
    /** 设置人名 */
    UserName?: string | null;
    /** 更新时间 时间戳 */
    UpdateTime?: number | null;
    /** 参与评估表数量 */
    JoinTableNumber?: number;
    /** 评分 */
    Score?: number;
    /** 设置人idStr */
    UserIdStr?: string | null;
  }

  /** 数据治理配置项 */
  interface DlcDataGovernPolicy {
    /** 数据排布治理项 */
    RewriteDataPolicy?: DlcRewriteDataInfo | null;
    /** 快照过期治理项 */
    ExpiredSnapshotsPolicy?: DlcExpiredSnapshotsInfo | null;
    /** 移除孤立文件治理项 */
    RemoveOrphanFilesPolicy?: DlcRemoveOrphanFilesInfo | null;
    /** 合并元数据Manifests治理项 */
    MergeManifestsPolicy?: DlcMergeManifestsInfo | null;
    /** 是否集成库规则：default（默认继承）、none（不继承） */
    InheritDataBase?: string | null;
    /** 治理规则类型，Customize: 自定义；Intelligence: 智能治理 */
    RuleType?: string | null;
    /** 治理引擎 */
    GovernEngine?: string | null;
  }

  /** 快照过期治理项 */
  interface DlcExpiredSnapshotsInfo {
    /** 是否启用快照过期治理项：enable、none */
    ExpiredSnapshotsEnable?: string | null;
    /** 用于运行快照过期治理项的引擎名称 */
    Engine?: string | null;
    /** 需要保留的最近快照个数 */
    RetainLast?: number | null;
    /** 过期指定天前的快照 */
    BeforeDays?: number | null;
    /** 清理过期快照的并行数 */
    MaxConcurrentDeletes?: number | null;
    /** 快照过期治理运行周期，单位为分钟 */
    IntervalMin?: number | null;
  }

  /** 合并元数据Manifests治理项 */
  interface DlcMergeManifestsInfo {
    /** 是否启用合并元数据Manifests文件治理项：enable、none */
    MergeManifestsEnable?: string | null;
    /** 用于运行合并元数据Manifests文件治理项的引擎名称 */
    Engine?: string | null;
    /** 合并元数据Manifests文件治理运行周期，单位为分钟 */
    IntervalMin?: number | null;
  }

  /** 移除孤立文件治理项 */
  interface DlcRemoveOrphanFilesInfo {
    /** 是否启用移除孤立文件治理项：enable、none */
    RemoveOrphanFilesEnable?: string | null;
    /** 用于运行移除孤立文件治理项的引擎名称 */
    Engine?: string | null;
    /** 移除指定天前的孤立文件 */
    BeforeDays?: number | null;
    /** 移除孤立文件的并行数 */
    MaxConcurrentDeletes?: number | null;
    /** 移除孤立文件治理运行周期，单位为分钟 */
    IntervalMin?: number | null;
  }

  /** 数据排布治理项 */
  interface DlcRewriteDataInfo {
    /** 是否启用数据重排布治理项：enable（启动）、disable（不启用，默认） */
    RewriteDataEnable?: string | null;
    /** 用于运行数据重排布治理项的引擎名称 */
    Engine?: string | null;
    /** 重排布任务执行的文件个数 */
    MinInputFiles?: number | null;
    /** 数据重排布写后的数据文件大小，单位为字节 */
    TargetFileSizeBytes?: number | null;
    /** 数据重排布治理运行周期，单位为分钟 */
    IntervalMin?: number | null;
  }

  /** 值班信息 */
  interface Duty {
    /** 值班Id */
    DutyScheduleId: number | null;
    /** 值班开始时间 */
    StartTime: string | null;
    /** 值班结束时间 */
    EndTime: string | null;
    /** 值班人员 */
    DutyPersons: DutyPerson[] | null;
  }

  /** 值班人员 */
  interface DutyPerson {
    /** 值班人子账号id */
    UserId: string | null;
    /** 值班人名称 */
    UserName: string | null;
    /** 值班人员主账号用户id */
    OwnerUserId?: string | null;
    /** 值班人tenantId */
    TenantId?: number | null;
    /** 2023-11-02 08:00:00 */
    AddTime?: string | null;
    /** 扩展字段 */
    Params?: string | null;
  }

  /** 值班表列表 */
  interface DutySchedule {
    /** 值班表列表 */
    Rows: DutyScheduleData[] | null;
    /** 总条数 */
    TotalCount: number;
    /** 页号 */
    PageNumber: number;
    /** 页大小 */
    PageSize: number;
    /** 总页数 */
    TotalPageNumber: number;
  }

  /** 值班表列表 */
  interface DutyScheduleData {
    /** 值班表Id */
    Id: number;
    /** 值班表名称 */
    Name: string;
    /** 创建人 */
    Creator: string;
  }

  /** 值班信息表 */
  interface DutyScheduleDetailsInfo {
    /** 值班日期 */
    Day: string;
    /** 值班信息 */
    Duty: Duty[] | null;
  }

  /** 引擎任务信息 */
  interface EngineTaskInfo {
    /** 引擎提交时间 */
    EngineSubmitTime?: string | null;
    /** 引擎执行时间 */
    EngineExeTime?: string | null;
    /** 引擎执行总时间 */
    EngineExeTimeCost?: number | null;
    /** cu消耗 */
    CuConsume?: number | null;
    /** 该值表示任务预设资源，sql任务不需要预设资源，该值为-1 */
    ResourceUsage?: number | null;
    /** 引擎名。在wedata侧若获取不到引擎名，则是wedata侧生成dlc标识，与dlc侧的引擎名存在不一致的情况 */
    EngineName?: string | null;
    /** 引擎执行状态 */
    EngineExeStatus?: string | null;
    /** 任务种类 */
    TaskKind?: string | null;
    /** 任务类型 */
    TaskType?: string | null;
    /** 任务SQL语句 */
    TaskContent?: string | null;
    /** 数据扫描总 bytes */
    InputBytesSum?: number | null;
    /** shuffle read 总 bytes */
    ShuffleReadBytesSum?: number | null;
    /** shuffle read 总行数 */
    ShuffleReadRecordsSum?: number | null;
    /** 输出总行数 */
    OutputRecordsSum?: number | null;
    /** 输出总 bytes */
    OutputBytesSum?: number | null;
    /** 输出文件数 */
    OutputFilesNum?: number | null;
    /** 输出小文件数 */
    OutputSmallFilesNum?: number | null;
    /** 执行等待时间 */
    WaitTime?: number | null;
    /** 查询结果时间 */
    QueryResultTime?: number | null;
    /** 入参 */
    CmdArgs?: string | null;
    /** 使用虚拟核心秒数 */
    VCoreSeconds?: number | null;
    /** 使用的内存秒数 */
    MemorySeconds?: number | null;
    /** EMR用户名 */
    EmrUserName?: string | null;
    /** 任务的查询ID */
    QueryId?: string | null;
    /** 应用程序ID */
    ApplicationId?: string | null;
  }

  /** 事件连续时间实例信息 */
  interface EventBatchCaseDTO {
    /** 事件实例id */
    CaseId?: string;
    /** 事件名 */
    Name?: string;
    /** 事件触发起始时间 */
    StartDimension?: string;
    /** 创建时间 */
    CreationTs?: string;
    /** 消费者id */
    ConsumerId?: string;
    /** 描述信息 */
    Description?: string;
    /** 事件触发结束时间 */
    EndDimension?: string;
    /** 事件周期 */
    EventSubType?: string;
  }

  /** 事件实例 */
  interface EventCaseAuditLogOptDto {
    /** 事件实例ID */
    CaseId?: string | null;
    /** 事件名称 */
    EventName?: string | null;
    /** 事件类型 */
    EventType?: string | null;
    /** 事件分割类型 */
    EventSubType?: string | null;
    /** 事件广播类型 */
    EventBroadcastType?: string | null;
    /** 事件实例存活时间 */
    TTL?: number | null;
    /** 事件实例存活时间单位 */
    TimeUnit?: string | null;
    /** 数据时间 */
    Dimension?: string | null;
    /** 事件实例状态 */
    Status?: string | null;
    /** 事件实例触发时间戳 */
    EventTriggerTimestamp?: string | null;
    /** 事件实例消费时间戳 */
    LogTimestamp?: string | null;
    /** 事件实例描述 */
    Description?: string | null;
  }

  /** 事件实例分页查询结果 */
  interface EventCaseAuditLogVOCollection {
    /** 结果总数 */
    TotalCount?: number | null;
    /** 总页数 */
    TotalPage?: number | null;
    /** 当前页记录数 */
    PageCount?: number | null;
    /** 页码 */
    PageNumber?: number | null;
    /** 分页大小 */
    PageSize?: number | null;
    /** 分页数据 */
    Items?: EventCaseAuditLogOptDto[] | null;
  }

  /** 事件消费记录 */
  interface EventCaseConsumeLogOptDto {
    /** 消费ID */
    ConsumeLogId?: string | null;
    /** 事件案例ID */
    EventCaseId?: string | null;
    /** 消费者ID */
    ConsumerId?: string | null;
    /** 消费时间戳 */
    CreationTimestamp?: string | null;
    /** 任务详情 */
    ConsumerDetail?: TaskOpsDto | null;
  }

  /** 事件消费任务记录列表 */
  interface EventCaseConsumeLogOptDtoCollection {
    /** 结果总数 */
    TotalCount?: number | null;
    /** 结果总页数 */
    TotalPage?: number | null;
    /** 当前页结果数 */
    PageCount?: number | null;
    /** 页码 */
    PageNumber?: number | null;
    /** 每页数目 */
    PageSize?: number | null;
    /** 分页数据 */
    Items?: EventCaseConsumeLogOptDto[] | null;
  }

  /** 事件实例信息 */
  interface EventCaseDTO {
    /** 事件实例id */
    CaseId?: string;
    /** 事件名 */
    Name?: string;
    /** 事件格式 */
    Dimension?: string;
    /** 创建时间 */
    CreationTs?: string;
    /** 消费者id */
    ConsumerId?: string;
    /** 描述信息 */
    Description?: string;
  }

  /** EventCaseOpsDto */
  interface EventCaseOpsDto {
    /** 案例ID */
    CaseId?: string | null;
    /** 案例名称 */
    Name?: string | null;
    /** 时间格式 */
    Dimension?: string | null;
    /** 创建时间 */
    CreationTimestamp?: string | null;
    /** 消费者id */
    ConsumerId?: string | null;
    /** 描述信息 */
    Description?: string | null;
  }

  /** 事件管理- 事件实体 */
  interface EventDsDto {
    /** 事件名称 */
    Name: string | null;
    /** 事件类型GENERAL、TIME_SERIES */
    EventType: string | null;
    /** 存活时间 */
    TimeToLive: number | null;
    /** 存活时间单位 */
    TimeUnit: string | null;
    /** 事件分割类型 SECOND、MIN、HOUR、DAY */
    EventSubType?: string | null;
    /** 事件广播类型SINGLE、BROADCAST */
    EventBroadcastType?: string | null;
    /** 时间格式 */
    DimensionFormat?: string | null;
    /** 创建时间 */
    CreationTs?: string | null;
    /** 事件所属人 */
    Owner?: string | null;
    /** 属性 */
    Properties?: string | null;
    /** 描述信息 */
    Description?: string | null;
    /** 事件监听者信息 */
    Listeners?: EventListenerDTO[] | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 事件消费有效次数 */
    ValidConsumeCount?: number | null;
    /** 事件id */
    EventId?: string | null;
    /** bundleId */
    BundleId?: string | null;
    /** bundle信息 */
    BundleInfo?: string | null;
  }

  /** 事件监听者信息 */
  interface EventListenerDTO {
    /** 关键字，一般为任务id */
    Key: string | null;
    /** REST_API、KAFKA */
    Type: string | null;
    /** 创建时间 */
    CreationTs: string | null;
    /** 配置信息 */
    PropertiesList: ParamInfoDs[] | null;
    /** 事件名称 */
    EventName: string | null;
    /** 监听者任务信息 */
    TaskInfo: EventListenerTaskInfo | null;
    /** 事件所属项目id */
    EventProjectId: string | null;
  }

  /** 事件监听器 */
  interface EventListenerOpsDto {
    /** 事件名称 */
    EventName?: string | null;
    /** 关键字，如果是任务，则是任务ID */
    Key?: string | null;
    /** 触发方式 */
    Type?: string | null;
    /** 事件属性 */
    Properties?: string | null;
    /** 创建时间 */
    CreationTimestamp?: string | null;
  }

  /** 监听者任务信息 */
  interface EventListenerTaskInfo {
    /** 任务id */
    TaskId: string | null;
    /** 任务名称 */
    TaskName: string | null;
    /** 工作流id */
    WorkflowId: string | null;
    /** 工作流名称 */
    WorkflowName: string | null;
    /** 任务类型id */
    TaskTypeId: number | null;
    /** 任务类型名称 */
    TaskType: string | null;
    /** 项目id */
    ProjectId: string | null;
    /** 任务周期类型 */
    CycleType?: string | null;
  }

  /** 事件详情 */
  interface EventOpsDto {
    /** 事件名称 */
    Name?: string | null;
    /** 事件类型 */
    EventType?: string | null;
    /** 事件分割类型 */
    EventSubType?: string | null;
    /** 事件广播类型 */
    EventBroadcastType?: string | null;
    /** 数据时间格式 */
    DimensionFormat?: string | null;
    /** 存活时间 */
    TimeToLive?: number | null;
    /** 存活时间单位 */
    TimeUnit?: string | null;
    /** 创建时间戳 */
    CreationTimestamp?: string | null;
    /** 所属者 */
    Owner?: string | null;
    /** 属性 */
    Properties?: string | null;
    /** 描述 */
    Description?: string | null;
    /** 监听器 */
    Listeners?: EventListenerOpsDto[] | null;
    /** 事件案例 */
    EventCases?: EventCaseOpsDto[] | null;
  }

  /** 事件发布者信息 */
  interface EventPublisherDTO {
    /** 关键字，一般为任务id */
    Key: string | null;
    /** REST_API、KAFKA */
    Type: string | null;
    /** 创建时间 */
    CreationTs: string | null;
    /** 配置信息 */
    PropertiesList: ParamInfoDs[] | null;
    /** 描述信息 */
    Description: string | null;
  }

  /** 资源组详情 */
  interface ExecutorResourceGroupInfo {
    /** 执行组id, 仅更新资源时需要传 */
    ExecutorGroupId?: string | null;
    /** 执行组名称 */
    ExecutorGroupName?: string | null;
    /** 执行组描述 */
    ExecutorGroupDesc?: string | null;
    /** SCHEDULER （标准调度资源组），CUSTOM_SCHEDULER （自定义调度资源），INTEGRATION（集成资源组），DATA_SERVICE（数据服务资源组） */
    ExecutorResourceType?: number | null;
    /** 区域中文 */
    Region?: string | null;
    /** vpcId, 托管服务时需要传递 */
    VpcId?: string | null;
    /** subnetId, 托管服务时需要传递 */
    SubnetId?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 基础资源包，资源组至少包含一个基础资源包 */
    BasicResourcePackage?: ExecutorResourcePackageInfo | null;
    /** 增强资源包 */
    AdvanceResourcePackage?: ExecutorResourcePackageInfo | null;
    /** 是否自动续费 */
    AutoRenewFlag?: number | null;
    /** 区域英文 */
    RegionEn?: string | null;
    /** 区域Id */
    RegionId?: number | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 项目展示名称 */
    ProjectDisplayName?: string | null;
    /** 资源组关联项目数 */
    AssociateProjectNums?: number | null;
    /** 是否锁定，false为未锁定，true为锁定 */
    IsLocked?: boolean | null;
    /** 来源类型，0为系统默认，1为自定义 */
    SourceType?: number | null;
    /** 队列资源包 */
    MQPackageVO?: MQPackageVO | null;
    /** 是否首选 */
    FirstChoice?: boolean | null;
    /** 资源组python版本绑定详情 */
    PythonSubVersions?: string[];
  }

  /** 执行资源包额外信息 */
  interface ExecutorResourcePackageExtInfo {
    /** 集成资源组：InLong集群id */
    InlongGroupId?: string | null;
    /** 集成资源组：oceanus集群id */
    OceanusClusterId?: string | null;
    /** 计费相关：产品资源id列表 */
    ProductResourceIdList?: string[] | null;
    /** 当前资源包对应订单是否发货成功 */
    BillingSuccess?: boolean | null;
    /** apigw服务id */
    ApigwServiceId?: string | null;
    /** apigw服务名称 */
    ApigwServiceName?: string | null;
    /** 数据集成相关：dataProxy配置规格 */
    DataProxySpec?: number | null;
    /** dataProxy数量 */
    DataProxyNum?: number | null;
    /** dataProxy状态，同ExecutorGroupStatus */
    DataProxyStatus?: number | null;
    /** inlongManager地址 */
    InLongManagerUrl?: string | null;
    /** inlong版本 */
    InLongVersion?: string | null;
    /** 私有化资源组相关: 执行及机器ip列表 */
    ExecutorMachineIpList?: string | null;
  }

  /** 执行资源包 */
  interface ExecutorResourcePackageInfo {
    /** 资源包规格相关：资源包个数 */
    ResourcePackageNum: number | null;
    /** 资源包规格相关：cpu个数 */
    CpuNum: number | null;
    /** 资源包id */
    ExecutorResourcePackageId?: string | null;
    /** 资源包规格相关：内存大小，单位:G */
    MemSize?: number | null;
    /** 资源包状态， /** * 初始化中  INIT(0), /** * 运行中  RUNNING(1), /** * 运行异常  RUNNING_FAILED(2), /** * 释放中  DELETEING(3), /** * 已释放  DELETED(4), /** * 创建中  CREATING(5), /** * 创建失败  CREATE_FAILED(6), /** * 更新中  UPDATING(7), /** * 更新失败  UPDATE_FAILED(8), /** * 已到期  EXPIRED(9); */
    Status?: number | null;
    /** 资源包状态描述：保存创建失败，运行异常和更新失败的原因 */
    StatusDescription?: string | null;
    /** 资源包到期时间，时间戳毫秒 */
    ExpireTime?: number | null;
    /** 资源包额外属性 */
    ExtInfo?: ExecutorResourcePackageExtInfo | null;
    /** 绑定的项目id，可为空 */
    ProjectId?: string | null;
    /** 资源组绑定的时间，时间戳毫秒 */
    ProjectBindTime?: number | null;
    /** 资源包使用状态: cpu使用，内存使用及趋势 */
    ResourcePackageUsage?: ExecutorResourcePackageUsageInfo | null;
    /** 计费相关：产品资源id列表 */
    ProductResourceIdList?: number[] | null;
    /** 生命周期 */
    LifeTime?: number | null;
    /** 私有网络Id */
    VpcId?: string | null;
    /** 私有网络名称 */
    VpcName?: string | null;
    /** 子网Id */
    SubnetId?: string | null;
    /** 子网名称 */
    SubnetName?: string | null;
    /** 执行资源相关：资源规格描述 */
    ResourceStandard?: string | null;
    /** 内存总数 */
    TotalMemory?: number;
  }

  /** 执行资源包使用情况 */
  interface ExecutorResourcePackageUsageInfo {
    /** CPU占用百分比 */
    CpuUsagePercent?: number | null;
    /** 内存占用百分比 */
    MemUsagePercent?: number | null;
    /** 资源包状态, /** * 初始化中  INIT(0), /** * 运行中  RUNNING(1), /** * 运行异常  RUNNING_FAILED(2), /** * 释放中  DELETEING(3), /** * 已释放  DELETED(4), /** * 创建中  CREATING(5), /** * 创建失败  CREATE_FAILED(6), /** * 更新中  UPDATING(7), /** * 更新失败  UPDATE_FAILED(8), /** * 已到期  EXPIRED(9); */
    Status?: number | null;
    /** /** * 初始化中  INIT(0), /** * 运行中  RUNNING(1), /** * 运行异常  RUNNING_FAILED(2), /** * 释放中  DELETEING(3), /** * 已释放  DELETED(4), /** * 创建中  CREATING(5), /** * 创建失败  CREATE_FAILED(6), /** * 更新中  UPDATING(7), /** * 更新失败  UPDATE_FAILED(8), /** * 已到期 运行中的任务数 */
    RunningTaskNum?: number | null;
    /** 等待中的任务数 */
    WaitingTaskNum?: number | null;
    /** 资源使用趋势: 开始时间 */
    UsageTrendStartTime?: string | null;
    /** 资源使用趋势: 结束时间 */
    UsageTrendEndTime?: string | null;
    /** 资源使用趋势列表 */
    UsageTrendList?: ExecutorUsageTrendInfo[] | null;
  }

  /** 资源组/资源包使用趋势 */
  interface ExecutorUsageTrendInfo {
    /** 时间戳，单位：毫秒 */
    Timestamp?: number | null;
    /** CPU占用百分比 */
    CpuUsagePercent?: number | null;
    /** 内存占用百分比 */
    MemUsagePercent?: number | null;
    /** 当前并发度使用百分比 */
    ConcurrencyUsage?: number | null;
    /** oceanus CU使用百分比 */
    OceanusCuUsage?: number | null;
  }

  /** 扩展参数 */
  interface ExtParam {
    /** key */
    Key?: string;
    /** 具体值 */
    Value?: string;
  }

  /** 扩展信息参数 */
  interface ExtResourceFlagDto {
    /** 父任务信息获取标识 */
    ParentTask?: boolean | null;
    /** 生产事件获取标识 */
    EventListener?: string | null;
    /** Dlc相关配置获取标识 */
    DlcResourceConfig?: string | null;
    /** 脚本信息获取标识 */
    Script?: string | null;
    /** 离线任务信息获取标识 */
    OfflineSyncTask?: string | null;
  }

  /** key-value 键值对 */
  interface ExtensionInfoVO {
    /** key */
    Key?: string | null;
    /** value */
    Value?: string | null;
    /** 描述 */
    Description?: string | null;
  }

  /** 错误处理结果信息 */
  interface FailMessage {
    /** 数据唯一标识 */
    Key?: string | null;
    /** 失败原因 */
    ErrorMessage?: string | null;
  }

  /** 字段变量 */
  interface FieldConfig {
    /** 字段key */
    FieldKey?: string | null;
    /** 字段值 */
    FieldValue?: string | null;
    /** 字段值类型 */
    FieldDataType?: string | null;
    /** 字段值变量信息 */
    ValueConfig?: ColumnValueConfig | null;
  }

  /** 通用过滤器 */
  interface Filter {
    /** 过滤字段名称 */
    Name?: string;
    /** 过滤值列表 */
    Values?: string[];
  }

  /** 通用过滤器 */
  interface FilterOptional {
    /** 过滤字段名称 */
    Name?: string;
    /** 过滤值列表 */
    Values?: string[];
  }

  /** 文件夹属性 */
  interface FolderDsDto {
    /** 文件夹id */
    Id?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 文件夹名称 */
    Name?: string | null;
    /** 所属项目id */
    ProjectId?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 父文件夹id */
    ParentsFolderId?: string | null;
    /** 工作流总数 */
    Total?: number | null;
    /** 工作流列表 */
    Workflows?: WorkflowCanvasOpsDto[] | null;
    /** 子文件夹总数 */
    TotalFolders?: number | null;
    /** 子文件夹列表 */
    Folders?: FolderDsDto[] | null;
    /** 搜索类型 */
    FindType?: string | null;
  }

  /** 文件夹属性 */
  interface FolderOpsDto {
    /** 文件夹id */
    Id?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 文件夹名称 */
    Name?: string | null;
    /** 所属项目id */
    ProjectId?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 父文件夹id */
    ParentsFolderId?: string | null;
    /** 工作流总数 */
    Total?: number | null;
    /** 工作流列表 */
    Workflows?: WorkflowCanvasOpsDto[] | null;
    /** 子文件夹总数 */
    TotalFolders?: number | null;
    /** 子文件夹列表 */
    FoldersList?: string | null;
    /** 搜索类型 */
    FindType?: string | null;
  }

  /** 函数资源信息 */
  interface FunctionResource {
    /** 资源路径 */
    Path: string | null;
    /** 无 */
    Name: string | null;
    /** 资源唯一标识 */
    Id?: string;
    /** 资源 MD5 值 */
    Md5?: string | null;
    /** 默认是 hdfs */
    Type?: string | null;
  }

  /** 函数类型或函数分类 */
  interface FunctionTypeOrKind {
    /** 名称 */
    Name?: string;
    /** 函数分类英文名 */
    ZhName?: string;
    /** 函数分类中文名 */
    EnName?: string;
  }

  /** 函数提交版本信息 */
  interface FunctionVersion {
    /** 版本号：V0 V1 V2 */
    Tag?: string;
    /** 提交人 ID */
    UserId?: string;
    /** 变更类型：ADD、MODIFY */
    Type?: string;
    /** 备注 */
    Comment?: string;
    /** 提交时间: UTC 秒数 */
    Timestamp?: string;
    /** 提交人名称 */
    UserName?: string | null;
    /** 版本内容：json string 格式 */
    Content?: string | null;
  }

  /** Spark SQL配置参数 */
  interface GeneralTaskParam {
    /** 通用任务参数类型,例：SPARK_SQL */
    Type: string;
    /** 通用任务参数内容,直接作用于任务的参数。不同参数用;分割 */
    Value: string;
  }

  /** 获取任务脚本内容返回体 */
  interface GetPaginationTaskScriptResponseInfo {
    /** 项目编号 */
    ProjectId?: string | null;
    /** 任务编号 */
    TaskId?: string | null;
    /** 页内尺寸 */
    PageSize?: number | null;
    /** 页码 */
    PageNum?: number | null;
    /** 总页数 */
    PageTotal?: number | null;
    /** 分页内容 */
    Base64ScriptContent?: string | null;
  }

  /** 数据源信息 */
  interface GovDatasourceInfo {
    /** 数据源id */
    DatasourceId?: string | null;
    /** 数据源名称 */
    DatasourceName?: string | null;
    /** 数据源集群ID */
    DatasourceClusterId?: string | null;
    /** 数据源urn */
    DatasourceUrn?: string | null;
    /** 数据源环境 */
    DatasourceEnv?: string | null;
  }

  /** 指标列表简单结构 */
  interface IndicatorBaseSimpleInfo {
    /** ID */
    Id?: number;
    /** 名称 */
    Name?: string | null;
    /** 单位 */
    MeasureUnit?: number | null;
    /** 状态 */
    Status?: number | null;
    /** 编码 */
    IndicatorCode?: string | null;
    /** 业务负责人名称 */
    BizOwnerName?: string | null;
    /** 技术服务站名称 */
    TechOwnerName?: string | null;
    /** 业务口径 */
    BizCaliber?: string | null;
    /** 指标类型（1-原子指标 2-衍生指标 3-复合指标） */
    IndicatorType?: number | null;
  }

  /** 实例检索条件 */
  interface InstanceCondition {
    /** 执行类型 */
    ExecutionSpace?: string | null;
    /** 任务产品类型 */
    ProductName?: string | null;
  }

  /** 调度实例详情 */
  interface InstanceDetailVO {
    /** 实例唯一标识 */
    InstanceKey?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** 文件夹ID */
    FolderId?: string | null;
    /** 文件夹名称 */
    FolderName?: string | null;
    /** 工作流ID */
    WorkflowId?: string | null;
    /** 工作流名称 */
    WorkflowName?: string | null;
    /** 负责人列表 */
    InChargeList?: string[] | null;
    /** 任务ID */
    TaskId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** **任务周期类型**支持过滤多个，条件间为 或 的过滤关系* O: ONEOFF_CYCLE* Y: YEAR_CYCLE* M: MONTH_CYCLE* W: WEEK_CYCLE* D: DAY_CYCLE* H: HOUR_CYCLE* I: MINUTE_CYCLE* C: CRONTAB_CYCLE */
    TaskCycleType?: string | null;
    /** 任务类型 */
    TaskType?: TaskTypeOpsDto | null;
    /** 执行资源组ID */
    ExecutorGroupId?: string | null;
    /** 资源组名称 */
    ExecutorGroupName?: string | null;
    /** 实例数据时间 */
    CurRunDate?: string | null;
    /** 下一个实例数据时间 */
    NextCurDate?: string | null;
    /** 每次运行失败，下发重试次数限制 */
    TryLimit?: number | null;
    /** 当前运行已下发运行次数 */
    Tries?: number | null;
    /** 累计运行次数 */
    TotalRunNum?: number | null;
    /** **实例生命周期编号，标识实例的某一次执行**例如：周期实例第一次运行的编号为0，用户后期又重跑了该实例，第二次的执行的编号为1 */
    LifeRoundNum?: number | null;
    /** **实例类型**- 0 表示补录类型- 1 表示周期实例- 2 表示非周期实例 */
    InstanceType?: number | null;
    /** **实例状态**- [0] 表示 等待事件- [12] 表示 等待上游- [6, 7, 9, 10, 18] 表示 等待运行- [1, 19, 22] 表示 运行中- [21] 表示 跳过运行- [3] 表示 失败重试- [8, 4, 5, 13] 表示 失败- [2] 表示 成功 */
    InstanceState?: number | null;
    /** 计划调度时间 */
    SchedulerTime?: string | null;
    /** 运行开始时间 */
    StartTime?: string | null;
    /** 运行完成时间 */
    EndTime?: string | null;
    /** 耗费时间 */
    CostTime?: string | null;
    /** **实例运行触发类型**- RERUN 表示重跑- ADDITION 表示补录- PERIODIC 表示周期- APERIODIC 表示非周期- RERUN_SKIP_RUN 表示重跑 - 空跑- ADDITION_SKIP_RUN 表示补录 - 空跑- PERIODIC_SKIP_RUN 表示周期 - 空跑- APERIODIC_SKIP_RUN 表示非周期 - 空跑- MANUAL_TRIGGER 表示手动触发- RERUN_MANUAL_TRIGGER 表示手动触发 - 重跑 */
    InstanceRunType?: string | null;
    /** **下发执行ID** */
    ExecutionJobId?: string | null;
    /** **实例生命周期列表** */
    InstanceLifeCycleList?: InstanceLifeCycleVO[] | null;
    /** **实例最近一次的执行日志** */
    LatestLog?: InstanceLogVO | null;
  }

  /** 下载日志详情 */
  interface InstanceDownloadLogInfo {
    /** 文件名 */
    FileName?: string | null;
    /** 文件URL */
    FileUrl?: string | null;
  }

  /** 实例生命周期详情 */
  interface InstanceLifeCycleOpsDto {
    /** 任务id */
    TaskId?: string | null;
    /** 任务名 */
    TaskName?: string | null;
    /** 数据时间 */
    CurRunDate?: string | null;
    /** 实例生命次数 */
    LifeRound?: number | null;
    /** 运行类型 重跑/补录/周期/非周期 */
    RunType?: string | null;
    /** 重跑次数 */
    Tries?: number | null;
    /** 实例生命周期 */
    InstanceLifeDetailDtoList?: InstanceLifeDetailDto[] | null;
    /** Runner运行状态 */
    RunnerState?: string | null;
    /** 错误码 */
    ErrorDesc?: string | null;
    /** 错误告警级别 */
    ErrorCodeLevel?: string | null;
    /** 实例日志简略信息 */
    InstanceLogListOpsDto?: InstanceLogInfo | null;
    /** 实例状态 */
    InstanceState?: string | null;
    /** 调度运行方式, 0: 周期调度, 1: 空跑调度 */
    ScheduleRunType?: number | null;
    /** 统一执行平台，下发执行Id */
    ExecutionJobId?: string | null;
    /** 实例运行类型: 0: 普通运行, 1: 空跑运行 */
    InstanceRunType?: number | null;
    /** 实例当前总生命周期数 */
    TotalLifeRound?: number;
    /** 任务类型 */
    TaskType?: TaskTypeOpsDto | null;
    /** 资源组id */
    ResourceGroup?: string | null;
  }

  /** 调度实例详情 */
  interface InstanceLifeCycleVO {
    /** 实例唯一标识 */
    InstanceKey?: string | null;
    /** **实例状态**- [0] 表示 等待事件- [12] 表示 等待上游- [6, 7, 9, 10, 18] 表示 等待运行- [1, 19, 22] 表示 运行中- [21] 表示 跳过运行- [3] 表示 失败重试- [8, 4, 5, 13] 表示 失败- [2] 表示 成功 */
    InstanceState?: number | null;
    /** **实例生命周期编号，标识实例的某一次执行**例如：周期实例第一次运行的编号为0，用户后期又重跑了该实例，第二次执行的编号为1 */
    LifeRoundNum?: number | null;
    /** **实例运行触发类型**- RERUN 表示重跑- ADDITION 表示补录- PERIODIC 表示周期- APERIODIC 表示非周期- RERUN_SKIP_RUN 表示重跑 - 空跑- ADDITION_SKIP_RUN 表示补录 - 空跑- PERIODIC_SKIP_RUN 表示周期 - 空跑- APERIODIC_SKIP_RUN 表示非周期 - 空跑- MANUAL_TRIGGER 表示手动触发- RERUN_MANUAL_TRIGGER 表示手动触发 - 重跑 */
    RunType?: string | null;
    /** 失败重试次数 */
    Tries?: number | null;
    /** **实例生命周期列表** */
    LifeCycleDetailList?: InstanceLifeDetailDto[] | null;
    /** **实例代码文件**该文件内容为当次执行实例运行使用的代码，仅部分任务支持 */
    CodeFileName?: string | null;
    /** **下发执行ID**统一执行平台下发执行到新版执行机标识某次执行的唯一ID，存量老执行机下发执行没有此ID。如果不知道执行机版本是否支持此ID，可以联系腾讯云运维同学 */
    ExecutionJobId?: string | null;
    /** 日志所在执行节点 */
    BrokerIp?: string | null;
    /** 日志文件名 */
    OriginFileName?: string | null;
    /** **实例日志类型**- run: 运行; - kill: 终止 */
    LogType?: string | null;
    /** 耗费时间 */
    CostTime?: string | null;
  }

  /** 实例生命周期detail */
  interface InstanceLifeDetailDto {
    /** **实例状态**- [0] 表示 等待事件- [12] 表示 等待上游- [6, 7, 9, 10, 18] 表示 等待运行- [1, 19, 22] 表示 运行中- [21] 表示 跳过运行- [3] 表示 失败重试- [8, 4, 5, 13] 表示 失败- [2] 表示 成功 */
    State?: string | null;
    /** 该状态开始时间 */
    StartTime?: string | null;
    /** **实例生命周期阶段状态**- WAIT_UPSTREAM 表示 等待事件/上游状态- WAIT_RUN 表示 等待运行状态- RUNNING 表示 运行中状态- COMPLETE 表示 终态-完成- FAILED 表示 终态-失败重试- EXPIRED 表示 终态-失败- SKIP_RUNNING 表示 终态-被上游分支节点跳过的分支- HISTORY 表示 兼容2024-03-30之前的历史实例，之后实例无需关注次枚举类型 */
    DetailState?: string | null;
    /** 该状态结束时间 */
    EndTime?: string | null;
  }

  /** 离线运维实例列表 */
  interface InstanceList {
    /** 耗费时间 */
    CostTime?: string | null;
    /** 数据时间 */
    CurRunDate?: string | null;
    /** 周期类型 */
    CycleType?: string | null;
    /** 是否补录 */
    DoFlag?: number | null;
    /** 责任人 */
    InCharge?: string | null;
    /** 日志 */
    LastLog?: string | null;
    /** 调度计划 */
    SchedulerDesc?: string | null;
    /** 开始启动时间 */
    StartTime?: string | null;
    /** 实例状态 EVENT_LISTENING|DEPENDENCE|BEFORE_ASPECT|ALLOCATED|LAUNCHED|KILL|SNAP_STATE_SAVING|ISSUED|RUNNING|AFTER_ASPECT|PENDING|KILLING|FINAL_STATE_SAVING|FAILED|KILL_FAILED| COMPLETED|EXPIRED|KILL_EXPIRED|DELETED */
    State?: string | null;
    /** 任务ID */
    TaskId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 尝试运行次数 */
    TryLimit?: number | null;
  }

  /** 日志信息 */
  interface InstanceLogByLine {
    /** 返回行数 */
    Count?: number | null;
    /** 内容 */
    Content?: string[] | null;
    /** 文件是否读取完 */
    Over?: boolean | null;
    /** 实例状态 */
    InstanceState?: string | null;
    /** 实例id */
    InstanceId?: string | null;
    /** 任务id */
    TaskId?: string | null;
    /** 执行机类型 0:老执行机loader 1:新执行机woker */
    WorkerType?: number | null;
    /** 日志sql错误信息，包含行列信息 */
    JobLogErrorTip?: JobLogErrorTip | null;
    /** 执行实例的扩展属性 */
    ExecutionExtendedProps?: ExtensionInfoVO[] | null;
    /** 如果queryFileFlag为1，则ext返回当前页数据的结束行信息，下一页把这个extInfo透传过来 */
    ExtInfo?: string | null;
  }

  /** 实例日志简述信息 */
  interface InstanceLogInfo {
    /** 任务id */
    TaskId?: string | null;
    /** 数据时间 */
    CurRunDate?: string | null;
    /** 尝试运行次数 */
    Tries?: string | null;
    /** 日志更新时间 */
    LastUpdate?: string | null;
    /** 日志所在节点 */
    BrokerIp?: string | null;
    /** 文件大小 */
    FileSize?: string | null;
    /** 文件名 含全路径 */
    OriginFileName?: string | null;
    /** 日志创建时间 */
    CreateTime?: string | null;
    /** 实例日志类型, run: 运行; kill: 终止 */
    InstanceLogType?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 运行耗时 */
    CostTime?: string | null;
    /** 实例状态 COMPLETED 完成 FAILED失败重试 EXPIRED失败 RUNNING运行中 */
    InstanceStatus?: string | null;
    /** 实例代码文件，为空表示对应代码文件不存在，可能是因为执行机未升级/对应类型任务无代码。 */
    CodeFileName?: string | null;
    /** 扩展属性 */
    ExtensionInfo?: AttributeItemDTO[] | null;
    /** 统一执行平台，下发执行Id */
    ExecutionJobId?: string | null;
  }

  /** 实例日志信息详情 */
  interface InstanceLogInfoOpsDto {
    /** 实例运行日志 */
    LogInfo?: string | null;
    /** 实例运行提交的yarn日志地址 */
    YarnLogInfo?: string[] | null;
    /** 实例运行产生的datax日志 */
    DataLogInfo?: string | null;
    /** 第三方任务运行日志 */
    ThirdTaskRunLogInfo?: string | null;
    /** 第三方任务日志链接描述 */
    ThirdTaskLogUrlDesc?: string | null;
    /** 日志行数 */
    LineCount?: number | null;
    /** 统一执行平台日志分页查询参数 */
    ExtInfo?: string | null;
    /** 日志分页查询，是否最后一页 */
    IsEnd?: boolean | null;
    /** 文件大小 */
    FileSize?: string | null;
    /** 日志匹配节点信息 */
    MatchedBrokerIp?: string;
    /** 执行平台通用协议 */
    ExecutionExtendedProps?: PairDto[];
  }

  /** 实例日志信息 */
  interface InstanceLogList {
    /** 任务ID */
    TaskId?: string | null;
    /** 数据时间 */
    CurRunDate?: string | null;
    /** 重试次数 */
    Tries?: string | null;
    /** 最后更新时间 */
    LastUpdate?: string | null;
    /** 节点ip */
    BrokerIp?: string | null;
    /** 文件大小 */
    FileSize?: string | null;
    /** 原始文件名 */
    OriginFileName?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 实例日志类型 */
    InstanceLogType?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 耗费时间 */
    CostTime?: string | null;
  }

  /** 实例日志内容 */
  interface InstanceLogVO {
    /** 实例唯一标识 */
    InstanceKey?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** **实例状态**- [0] 表示 等待事件- [12] 表示 等待上游- [6, 7, 9, 10, 18] 表示 等待运行- [1, 19, 22] 表示 运行中- [21] 表示 跳过运行- [3] 表示 失败重试- [8, 4, 5, 13] 表示 失败- [2] 表示 成功 */
    InstanceState?: number | null;
    /** **实例运行触发类型**- RERUN 表示重跑- ADDITION 表示补录- PERIODIC 表示周期- APERIODIC 表示非周期- RERUN_SKIP_RUN 表示重跑 - 空跑- ADDITION_SKIP_RUN 表示补录 - 空跑- PERIODIC_SKIP_RUN 表示周期 - 空跑- APERIODIC_SKIP_RUN 表示非周期 - 空跑- MANUAL_TRIGGER 表示手动触发- RERUN_MANUAL_TRIGGER 表示手动触发 - 重跑 */
    RunType?: string | null;
    /** 开始运行时间 */
    StartTime?: string | null;
    /** 运行完成时间 */
    EndTime?: string | null;
    /** **运行代码内容** */
    CodeInfo?: string | null;
    /** **运行代码文件大小**单位KB */
    CodeFileSize?: string | null;
    /** 日志所在节点信息 */
    BrokerIp?: string | null;
    /** **日志内容** */
    LogInfo?: string | null;
    /** **日志文件大小**单位KB */
    LogFileSize?: string | null;
    /** **本次查询返回的日志行数** */
    LineCount?: number | null;
    /** **分页查询日志时使用，无具体业务含义**第一次查询时值为null 第二次及以后查询时使用上一次查询返回信息中的ExtInfo字段值即可 */
    ExtInfo?: string | null;
    /** 日志分页查询，是否最后一页 */
    IsEnd?: boolean | null;
  }

  /** 查询实时任务实例当前的节点信息 */
  interface InstanceNodeInfo {
    /** 读取节点SOURCE 写入节点SINK */
    NodeType?: string | null;
    /** 节点id */
    NodeId?: string | null;
    /** 节点名称 */
    NodeName?: string | null;
  }

  /** 实例运维详情 */
  interface InstanceOpsDto {
    /** 任务ID */
    TaskId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 工作流ID */
    WorkflowId?: string | null;
    /** 工作流名称 */
    WorkflowName?: string | null;
    /** 负责人 */
    InCharge?: string | null;
    /** 周期类型 */
    CycleType?: string | null;
    /** 数据时间 */
    CurRunDate?: string | null;
    /** 下一个数据时间 */
    NextCurDate?: string | null;
    /** 运行优先级 */
    RunPriority?: number | null;
    /** 尝试运行次数 */
    TryLimit?: number | null;
    /** 当前运行次数 */
    Tries?: number | null;
    /** 重跑总次数 */
    TotalRunNum?: number | null;
    /** 是否补录 */
    DoFlag?: number | null;
    /** 是否是重跑 */
    RedoFlag?: number | null;
    /** 实例状态 */
    State?: string | null;
    /** 运行节点 */
    RuntimeBroker?: string | null;
    /** 失败的原因 */
    ErrorDesc?: string | null;
    /** 任务类型 */
    TaskType?: TaskTypeOpsDto | null;
    /** 依赖判断完成时间 */
    DependenceFulfillTime?: string | null;
    /** 首次依赖判断通过时间 */
    FirstDependenceFulfillTime?: string | null;
    /** 首次启动时间 */
    FirstStartTime?: string | null;
    /** 开始启动时间 */
    StartTime?: string | null;
    /** 运行完成时间 */
    EndTime?: string | null;
    /** 耗费时间 */
    CostTime?: string | null;
    /** 耗费时间(ms) */
    CostMillisecond?: number | null;
    /** 最大运行耗时 */
    MaxCostTime?: number | null;
    /** 最小运行耗时 */
    MinCostTime?: number | null;
    /** 平均运行耗时 */
    AvgCostTime?: number | null;
    /** 最近日志 */
    LastLog?: string | null;
    /** 调度时间 */
    SchedulerDateTime?: string | null;
    /** 上次调度时间 */
    LastSchedulerDateTime?: string | null;
    /** 最后更新事件 */
    LastUpdate?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 分支，依赖关系 and、or */
    DependencyRel?: string | null;
    /** 执行空间 */
    ExecutionSpace?: string | null;
    /** 忽略事件 */
    IgnoreEvent?: boolean | null;
    /** 虚拟任务实例 */
    VirtualFlag?: boolean | null;
    /** 文件夹ID */
    FolderId?: string | null;
    /** 文件夹名称 */
    FolderName?: string | null;
    /** 递归实例信息 */
    SonList?: string | null;
    /** 产品业务名称 */
    ProductName?: string | null;
    /** 资源组 */
    ResourceGroup?: string | null;
    /** 资源组指定执行节点 */
    ResourceInstanceId?: string | null;
    /** 资源队列 */
    YarnQueue?: string | null;
    /** 调度计划 */
    SchedulerDesc?: string | null;
    /** 最近提交时间 */
    FirstSubmitTime?: string | null;
    /** 首次执行时间 */
    FirstRunTime?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** 项目标识 */
    ProjectIdent?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 租户id */
    TenantId?: string | null;
    /** 实例标识 */
    InstanceKey?: string | null;
    /** 资源组id */
    ExecutorGroupId?: string | null;
    /** 资源组名称 */
    ExecutorGroupName?: string | null;
    /** 关联实例信息。 */
    RelatedInstanceList?: InstanceOpsDto[] | null;
    /** 关联实例信息数量，不和RelatedInstanceList强关联。 */
    RelatedInstanceSize?: number | null;
    /** ownerId */
    OwnerId?: string | null;
    /** 用户id */
    UserId?: string | null;
    /** 实例生命周期 */
    InstanceLifeCycleOpsDto?: InstanceLifeCycleOpsDto | null;
    /** 自动重试次数 */
    RetryAttempts?: number | null;
    /** 紧急去除的依赖父实例列表 */
    DeletedFatherList?: string[] | null;
    /** 循环依赖关联的实例 */
    CirculateInstanceList?: InstanceOpsDto[] | null;
    /** 并发策略, 0: 等待并发, 1: kill自身 */
    ConcurrentStrategy?: number | null;
    /** 调度运行方式, 0: 周期调度, 1: 空跑调度 */
    ScheduleRunType?: number | null;
    /** 允许重跑类型，ALL 表示无论实例运行成功还是失败都允许重跑，NONE表示无论成功或者失败都不允许重跑，FAILURE 表示只有运行失败才能重跑 */
    AllowRedoType?: string;
    /** 实例生命周期 */
    InstanceCycleType?: string;
    /** 实例执行计划描述 */
    InstanceSchedulerDesc?: string;
    /** 当前用户对该实例的权限列表 */
    Privileges?: string[];
    /** 任务执行id */
    TaskExecutionId?: string | null;
    /** dlc taskid */
    DlcTaskId?: string | null;
    /** dlc jobid */
    DlcSparkJobId?: string | null;
    /** 扩展属性 */
    Ext?: StrToStrMap | null;
  }

  /** 任务运行历史分页记录 */
  interface InstanceOpsInfoPage {
    /** 总记录数 */
    TotalCount?: number | null;
    /** 记录列表 */
    Items?: InstanceOpsDto[] | null;
  }

  /** 实例列表分页实体 */
  interface InstancePageVO {
    /** **总条数** */
    TotalCount?: number | null;
    /** **总分页数** */
    TotalPage?: number | null;
    /** 页码 */
    PageNumber?: number | null;
    /** 每页条目数 */
    PageSize?: number | null;
    /** 总分页数 */
    PageCount?: number | null;
    /** 数据列表 */
    Items?: InstanceVO[] | null;
  }

  /** 实例检索条件 */
  interface InstanceSearchCondition {
    /** 任务调度周期类型 */
    CycleList?: string[] | null;
    /** 起始时间 */
    DateFrom?: string | null;
    /** 截止时间 */
    DateTo?: string | null;
    /** 实例过滤条件 */
    Instance?: InstanceCondition | null;
    /** 模糊查询关键字 */
    Keyword?: string | null;
    /** 排序方式 */
    Sort?: string | null;
    /** 排序字段 */
    SortCol?: string | null;
    /** 实例状态类型 */
    StateList?: string[] | null;
  }

  /** 运维大屏实例状态统计和实例状态趋势 */
  interface InstanceStatisticInfo {
    /** 实例状态趋势状态统计 */
    CountList?: number[] | null;
    /** 实例状态趋势时间分割 */
    TimeList?: string[] | null;
    /** 实例状态标识：WAITING_RUNNING、KILLING、FAILED、FAILED_TRYING、SUCCEED 分别表示等待执行、正在终止、失败、失败重试、成功，用于实例状态分布和实例状态趋势 */
    InstanceStatus?: string;
    /** 用于实例状态分布计数 */
    InstanceCount?: number;
    /** 当前展示时间 */
    ShowTime?: string | null;
    /** 1 */
    ReportTime?: string | null;
    /** 1 */
    Count?: number | null;
  }

  /** 调度运行实例实体 */
  interface InstanceVO {
    /** **实例唯一标识** */
    InstanceKey?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** 文件夹ID */
    FolderId?: string | null;
    /** 文件夹名称 */
    FolderName?: string | null;
    /** 工作流ID */
    WorkflowId?: string | null;
    /** 工作流名称 */
    WorkflowName?: string | null;
    /** 负责人列表 */
    InChargeList?: string[] | null;
    /** 任务ID */
    TaskId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 任务类型 */
    TaskType?: TaskTypeOpsDto | null;
    /** **任务周期类型**支持过滤多个，条件间为 或 的过滤关系* O: ONEOFF_CYCLE* Y: YEAR_CYCLE* M: MONTH_CYCLE* W: WEEK_CYCLE* D: DAY_CYCLE* H: HOUR_CYCLE* I: MINUTE_CYCLE* C: CRONTAB_CYCLE */
    TaskCycleType?: string | null;
    /** 实例数据时间 */
    CurRunDate?: string | null;
    /** 每次运行失败，下发重试次数限制 */
    TryLimit?: number | null;
    /** **失败重试次数**再次使用 手动重跑 或 补录实例等方式触发运行时，会被重置为 0 后重新计数 */
    Tries?: number | null;
    /** 累计运行次数 */
    TotalRunNum?: number | null;
    /** **实例类型**- 0 表示补录类型- 1 表示周期实例- 2 表示非周期实例 */
    InstanceType?: number | null;
    /** **实例状态**- [0] 表示 等待事件- [12] 表示 等待上游- [6, 7, 9, 10, 18] 表示 等待运行- [1, 19, 22] 表示 运行中- [21] 表示 跳过运行- [3] 表示 失败重试- [8, 4, 5, 13] 表示 失败- [2] 表示 成功 */
    InstanceState?: number | null;
    /** 运行开始时间 */
    StartTime?: string | null;
    /** 运行完成时间 */
    EndTime?: string | null;
    /** 耗费时间 */
    CostTime?: string | null;
    /** 计划调度时间 */
    SchedulerTime?: string | null;
    /** 实例最近更新时间, 时间格式为 yyyy-MM-dd HH:mm:ss */
    LastUpdateTime?: string | null;
    /** 执行资源组ID */
    ExecutorGroupId?: string | null;
    /** 资源组名称 */
    ExecutorGroupName?: string | null;
    /** 简要的任务失败信息 */
    JobErrorMsg?: string | null;
  }

  /** 实例日志信息 */
  interface IntegrationInstanceLog {
    /** 任务日志信息 */
    LogInfo?: string | null;
  }

  /** 集成节点详情 */
  interface IntegrationNodeDetail {
    /** 集成节点名称 */
    Name?: string;
    /** 集成节点类型 */
    NodeType?: string;
    /** 节点数据源类型 */
    DataSourceType?: string;
    /** 节点描述 */
    Description?: string | null;
    /** 数据源id */
    DatasourceId?: string | null;
    /** 节点配置信息 */
    Config?: RecordField[] | null;
    /** 节点扩展配置信息 */
    ExtConfig?: RecordField[] | null;
    /** 节点schema */
    Schema?: IntegrationNodeSchema[] | null;
    /** 节点映射 */
    NodeMapping?: IntegrationNodeMapping | null;
    /** owner uin */
    OwnerUin?: string;
  }

  /** 集成任务节点 */
  interface IntegrationNodeInfo {
    /** 集成节点id */
    Id?: string | null;
    /** 集成节点所属任务id */
    TaskId?: string;
    /** 集成节点名称 */
    Name?: string;
    /** 集成节点类型,INPUT: 输入节点，OUTPUT:输出节点 */
    NodeType?: string;
    /** 节点数据源类型：MYSQL|POSTGRE|ORACLE|SQLSERVER|FTP|HIVE|HDFS|ICEBERG|KAFKA|HBASE|SPARK|VIRTUAL|TBASE|DB2|DM|GAUSSDB|GBASE|IMPALA|ES|S3_DATAINSIGHT|GREENPLUM|PHOENIX|SAP_HANA|SFTP|OCEANBASE|CLICKHOUSE|KUDU|VERTICA|REDIS|COS|DLC|DLCV1|DORIS|CKAFKA|DTS_KAFKA|S3|CDW|LOCAL|TDSQLC|TDSQL|TDSQL_MYSQL|MONGODB|INFORMIX|SYBASE|REST_API|SuperSQL|PRESTO|DR_SUM|TiDB|StarRocks|Trino|Kyuubi|GDB|TCHOUSE_X|TCHOUSE_P|TDSQL_POSTGRE */
    DataSourceType?: string;
    /** 节点描述 */
    Description?: string | null;
    /** 数据源id */
    DatasourceId?: string | null;
    /** 节点配置信息 */
    Config?: RecordField[] | null;
    /** 节点扩展配置信息 */
    ExtConfig?: RecordField[] | null;
    /** 节点schema */
    Schema?: IntegrationNodeSchema[] | null;
    /** 节点映射 */
    NodeMapping?: IntegrationNodeMapping | null;
    /** 归属用户AppId,展示字段 非传入 */
    AppId?: string;
    /** 项目id */
    ProjectId?: string;
    /** 创建人uin,展示字段 非传入 */
    CreatorUin?: string | null;
    /** 操作人uin，展示字段 非传入 */
    OperatorUin?: string | null;
    /** owner uin 展示字段 非传入 */
    OwnerUin?: string;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
  }

  /** 集成节点映射 */
  interface IntegrationNodeMapping {
    /** 源节点id */
    SourceId?: string;
    /** 目标节点id */
    SinkId?: string;
    /** 源节点schema */
    SourceSchema?: IntegrationNodeSchema[] | null;
    /** 节点schema映射 */
    SchemaMappings?: IntegrationNodeSchemaMapping[] | null;
    /** 节点映射扩展信息 */
    ExtConfig?: RecordField[] | null;
  }

  /** 集成节点schema */
  interface IntegrationNodeSchema {
    /** schema id 随机唯一 */
    Id: string;
    /** schema名称 */
    Name: string;
    /** schema类型 */
    Type: string;
    /** schema值 */
    Value?: string | null;
    /** schema拓展属性 */
    Properties?: RecordField[] | null;
    /** schema别名 */
    Alias?: string | null;
    /** 字段备注 */
    Comment?: string | null;
    /** category */
    Category?: string | null;
  }

  /** 集成节点schema映射 */
  interface IntegrationNodeSchemaMapping {
    /** 任务节点的源schema id */
    SourceSchemaId: string;
    /** 任务节点目标schema id */
    SinkSchemaId: string;
  }

  /** 数据集成大屏趋势图统计结果 */
  interface IntegrationStatisticsTrendResult {
    /** 统计属性名称 */
    StatisticName?: string[] | null;
    /** 统计值 */
    StatisticValue?: number[] | null;
    /** 统计项目 */
    StatisticType?: string | null;
  }

  /** 集成标签 */
  interface IntegrationTag {
    /** key值 */
    Key?: string | null;
    /** 标签值 */
    Value?: string | null;
  }

  /** 集成任务 */
  interface IntegrationTaskInfo {
    /** 任务名称 */
    TaskName?: string;
    /** 任务描述 */
    Description?: string | null;
    /** 同步类型1.解决方案(整库迁移),2.单表同步 */
    SyncType?: number;
    /** 201.实时,202.离线 */
    TaskType?: number;
    /** 任务所属工作流id */
    WorkflowId?: string | null;
    /** 任务id */
    TaskId?: string | null;
    /** 任务调度id(oceanus or us等作业id)，非填项 */
    ScheduleTaskId?: string | null;
    /** inlong任务id */
    TaskGroupId?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 创建人uin */
    CreatorUin?: string | null;
    /** 操作人uin */
    OperatorUin?: string | null;
    /** owner uin */
    OwnerUin?: string | null;
    /** 应用id */
    AppId?: string | null;
    /** 0:新建(任务开发态默认状态)|1:未开始|2:操作中|3:运行中|4:暂停|5:任务停止中|6:停止|7:执行失败|20:异常|21:未知| */
    Status?: number | null;
    /** 节点列表 */
    Nodes?: IntegrationNodeInfo[] | null;
    /** 执行资源id */
    ExecutorId?: string | null;
    /** 任务配置信息 */
    Config?: RecordField[] | null;
    /** 任务扩展配置信息 */
    ExtConfig?: RecordField[] | null;
    /** 任务执行context信息 */
    ExecuteContext?: RecordField[] | null;
    /** 节点映射 */
    Mappings?: IntegrationNodeMapping[] | null;
    /** 任务配置模式，0:画布 1:表单 3:脚本 */
    TaskMode?: string | null;
    /** 责任人 */
    Incharge?: string | null;
    /** 离线新增参数 */
    OfflineTaskAddEntity?: OfflineTaskAddParam | null;
    /** group name */
    ExecutorGroupName?: string | null;
    /** inlong manager url */
    InLongManagerUrl?: string | null;
    /** stream id */
    InLongStreamId?: string | null;
    /** version */
    InLongManagerVersion?: string | null;
    /** inlong dataproxy url */
    DataProxyUrl?: string[] | null;
    /** 任务版本是否已提交运维 */
    Submit?: boolean | null;
    /** 数据源类型：MYSQL|POSTGRE|ORACLE|SQLSERVER|FTP|HIVE|HDFS|ICEBERG|KAFKA|HBASE|SPARK|VIRTUAL|TBASE|DB2|DM|GAUSSDB|GBASE|IMPALA|ES|S3_DATAINSIGHT|GREENPLUM|PHOENIX|SAP_HANA|SFTP|OCEANBASE|CLICKHOUSE|KUDU|VERTICA|REDIS|COS|DLC|DLCV1|DORIS|CKAFKA|DTS_KAFKA|S3|CDW|LOCAL|TDSQLC|TDSQL|TDSQL_MYSQL|MONGODB|INFORMIX|SYBASE|REST_API|SuperSQL|PRESTO|DR_SUM|TiDB|StarRocks|Trino|Kyuubi|GDB|TCHOUSE_X|TCHOUSE_P|TDSQL_POSTGRE */
    InputDatasourceType?: string | null;
    /** 数据源类型：MYSQL|POSTGRE|ORACLE|SQLSERVER|FTP|HIVE|HDFS|ICEBERG|KAFKA|HBASE|SPARK|VIRTUAL|TBASE|DB2|DM|GAUSSDB|GBASE|IMPALA|ES|S3_DATAINSIGHT|GREENPLUM|PHOENIX|SAP_HANA|SFTP|OCEANBASE|CLICKHOUSE|KUDU|VERTICA|REDIS|COS|DLC|DLCV1|DORIS|CKAFKA|DTS_KAFKA|S3|CDW|LOCAL|TDSQLC|TDSQL|TDSQL_MYSQL|MONGODB|INFORMIX|SYBASE|REST_API|SuperSQL|PRESTO|DR_SUM|TiDB|StarRocks|Trino|Kyuubi|GDB|TCHOUSE_X|TCHOUSE_P|TDSQL_POSTGRE */
    OutputDatasourceType?: string | null;
    /** 读取条数 */
    NumRecordsIn?: number | null;
    /** 写入条数 */
    NumRecordsOut?: number | null;
    /** 读取延迟 */
    ReaderDelay?: number | null;
    /** 重启次数 */
    NumRestarts?: number | null;
    /** 任务创建时间 */
    CreateTime?: string | null;
    /** 任务更新时间 */
    UpdateTime?: string | null;
    /** 任务最后一次运行时间 */
    LastRunTime?: string | null;
    /** 任务停止时间 */
    StopTime?: string | null;
    /** 作业是否已提交 */
    HasVersion?: boolean | null;
    /** 任务是否被锁定 */
    Locked?: boolean | null;
    /** 任务锁定人 */
    Locker?: string | null;
    /** 耗费资源量 */
    RunningCu?: number | null;
    /** 该任务关联的告警规则 */
    TaskAlarmRegularList?: string[] | null;
    /** 实时任务资源分层情况： 0：进行中,1：成功 ,2：失败 */
    SwitchResource?: number | null;
    /** 实时任务读取阶段：0：全部全量,1：部分全量,2：全部增量 */
    ReadPhase?: number | null;
    /** 实时任务版本号 */
    InstanceVersion?: number | null;
    /** 离线任务导入到编排空间的任务id */
    ArrangeSpaceTaskId?: string | null;
    /** 离线任务状态区分1.未提交2.已提交3.已导出 */
    OfflineTaskStatus?: number | null;
    /** 导入到编排空间配置 */
    TaskImportInfo?: TaskImportInfo | null;
    /** 业务延迟 */
    BusinessLatency?: number | null;
    /** 当前同步位点 */
    CurrentSyncPosition?: number | null;
    /** 标签列表 */
    TagList?: IntegrationTag[] | null;
    /** 错误信息 */
    ErrorMessage?: string | null;
  }

  /** 调度任务日志错误提示信息 */
  interface JobLogErrorTip {
    /** 执行日志错误信息 */
    Content?: string | null;
    /** 对应sql的行下标 */
    LineNum?: number | null;
    /** 对应sql的列下标 */
    ColumnNum?: number | null;
  }

  /** 键值对 */
  interface KVPair {
    /** 键名 */
    K: string | null;
    /** 值，请勿传SQL(请求会被视为攻击接口)，如果有需要，请将SQL进行Base64转码并解码。 */
    V: string | null;
  }

  /** 资产标签 */
  interface LabelTag {
    /** 标签id */
    TagId?: number | null;
    /** 标签名 */
    TagName?: string | null;
    /** 标签描述 */
    TagDesc?: string | null;
    /** 标签值Id */
    TagValueId?: number | null;
    /** 标签值 */
    TagValue?: string | null;
    /** 标签是否已删除 */
    TagIsDeleted?: boolean | null;
    /** 标签值是否已删除 */
    TagValueIsDeleted?: boolean | null;
  }

  /** 标签值选择列表 */
  interface LabelValueSelection {
    /** 标签ID */
    LabelId?: number | null;
    /** 标签值ID */
    LabelValue?: string | null;
  }

  /** 表生命周期相关信息 */
  interface LifecycleInfo {
    /** 生命周期值 */
    Lifecycle?: number | null;
    /** 列名 */
    Columns?: string[] | null;
    /** 日期格式 */
    DateFormat?: string[] | null;
  }

  /** LineageCommonInfoVO */
  interface LineageCommonInfoVO {
    /** 当前节点 */
    CurrentResource?: LineageResouce | null;
    /** 上游节点 */
    ParentSet?: LineageNodeInfoVO[] | null;
    /** 下游节点 */
    ChildSet?: LineageNodeInfoVO[] | null;
    /** 下游数量 */
    DownStreamCount?: number | null;
    /** 上游数量 */
    UpStreamCount?: number | null;
    /** 父/子节点是否展示上下游数量 */
    StreamCountFlag?: boolean | null;
  }

  /** LineageNodeInfoVo */
  interface LineageNodeInfoVO {
    /** 当前资源 */
    CurrentResource?: LineageResouce | null;
    /** 关系 */
    Relation?: LineageRelationVO | null;
    /** 上游数量 */
    DownStreamCount?: number | null;
    /** 下游数量 */
    UpStreamCount?: number | null;
    /** 上游节点 */
    ParentSet?: LineageNodeInfoVO[] | null;
    /** 下游节点 */
    ChildSet?: LineageNodeInfoVO[] | null;
    /** 父/子节点是否展示上下游数量 */
    StreamCountFlag?: boolean | null;
  }

  /** 血缘参数记录 */
  interface LineageParamRecord {
    /** 字段名 */
    Name: string;
    /** 字段值 */
    Value: string | null;
  }

  /** LineageProcessVO */
  interface LineageProcessVO {
    /** 原始唯一ID */
    ProcessId?: string | null;
    /** 任务类型 */
    ProcessType?: string | null;
    /** 任务子类型 */
    ProcessSubType?: string | null;
    /** 名称 */
    ProcessName?: string | null;
    /** 描述 */
    Description?: string | null;
    /** 唯一ID */
    QualifiedId?: string | null;
    /** 来源 */
    Platform?: string | null;
    /** 额外扩展参数 */
    ProcessProperties?: LineageProperty[] | null;
  }

  /** LineageProperty额外扩展参数 */
  interface LineageProperty {
    /** 属性名称 */
    Name?: string | null;
    /** 属性值 */
    Value?: string | null;
  }

  /** LineageRelationVO */
  interface LineageRelationVO {
    /** 关联ID */
    RelationId?: string | null;
    /** 源端唯一血缘ID */
    SourceQualifiedId?: string | null;
    /** 目标端唯一血缘ID */
    TargetQualifiedId?: string | null;
    /** 血缘加工过程 */
    Processes?: LineageProcessVO[] | null;
  }

  /** 血缘实体 */
  interface LineageResouce {
    /** 实体原始唯一ID */
    ResourceOriId?: string | null;
    /** 业务名称：库名.表名｜指标名称｜模型名称|字段名称 */
    ResourceName?: string | null;
    /** 实体类型TABLE|METRIC|MODEL|SERVICE|COLUMN */
    ResourceType?: string | null;
    /** 血缘全局唯一ID */
    QualifiedId?: string | null;
    /** 描述：表类型｜指标描述｜模型描述|字段描述 */
    Description?: string | null;
    /** 来源：WEDATA|THIRD默认wedata */
    Platform?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** resource 额外扩展参数 */
    ResourceProperties?: LineageProperty[] | null;
  }

  /** 血缘任务 */
  interface LineageTask {
    /** 任务id */
    TaskId?: string;
    /** 任务类型 */
    TaskType?: string;
    /** 任务来源 */
    TaskSource?: string;
    /** 任务扩展参数 */
    ExtParams?: ExtParam[];
  }

  /** 任务依赖边详情 */
  interface LinkOpsDto {
    /** 边的id */
    Id: string | null;
    /** 边的key */
    LinkKey: string | null;
    /** 边的源节点 */
    TaskFrom: string | null;
    /** 边的目标节点 */
    TaskTo: string | null;
    /** 责任人 */
    InCharge: string | null;
    /** 父子任务之间的依赖关系 */
    LinkDependencyType: string | null;
    /** 父子任务之间依赖偏移量 */
    Offset: string | null;
    /** 边的类型 */
    LinkType: string | null;
    /** 工作流id */
    WorkflowId: string | null;
  }

  /** 实时任务日志内容 */
  interface LogContent {
    /** 日志时间戳，单位毫秒 */
    Time: number | null;
    /** 日志包id */
    PkgId: string | null;
    /** 日志内容 */
    Log: string;
  }

  /** 日志内容实体 */
  interface LogContentInfo {
    /** 日志内容 */
    Log?: string | null;
    /** 日志组Id */
    PkgId?: string | null;
    /** 日志Id */
    PkgLogId?: string | null;
    /** 时间 */
    Time?: number | null;
    /** 日志所属的容器名 */
    ContainerName?: string | null;
  }

  /** MQPackageVO */
  interface MQPackageVO {
    /** ckafka消息队列 */
    Type?: string | null;
    /** 实例Id/集群Id */
    InstanceId?: string | null;
    /** 实例名称/集群名称 */
    InstanceName?: string | null;
    /** 局域网Id */
    VpcId?: string | null;
    /** 子网Id */
    SubnetId?: string | null;
    /** 资源状态 */
    Status?: number | null;
    /** 资源状态描述：保存创建失败，运行异常和更新失败的原因 */
    StatusDescription?: string | null;
    /** DataProxy规格 */
    DataProxySpec?: string | null;
    /** DataProxy数量 */
    DataProxyNum?: number | null;
    /** DataProxy状态 */
    DataProxyStatus?: number | null;
    /** DataProxy状态描述：保存创建失败，运行异常和更新失败的原因 */
    DataProxyStatusDescription?: string | null;
    /** 计费类型 */
    BillingType?: string | null;
    /** 资源到期时间，时间戳毫秒 */
    ExpireTime?: number | null;
    /** 资源生命周期 */
    LifeTime?: number | null;
  }

  /** 补录计划告警规则 */
  interface MakePlanAlarmRule {
    /** 告警的级别1 -- 普通2 -- 重要3 -- 紧急 */
    AlarmLevel?: number;
    /** 告警的类型，补录计划支持：start：启动告警failure：失败告警success：成功告警overtime：超过配置时间告警 */
    AlarmTypes?: string[];
    /** 告警超时时间 */
    ExtInfo?: string;
    /** 告警接受人 升级人配置信息 */
    AlarmGroup?: AlarmGroup[];
  }

  /** 补录计划实例集合 */
  interface MakePlanInstanceOpsDtoCollection {
    /** 记录总数 */
    TotalCount?: number | null;
    /** 记录总页数 */
    TotalPage?: number | null;
    /** 当前页记录数 */
    PageCount?: number | null;
    /** 页码 */
    PageNumber?: number | null;
    /** 页大小 */
    PageSize?: number | null;
    /** 记录列表 */
    Items?: InstanceOpsDto[] | null;
  }

  /** 补录计划 */
  interface MakePlanOpsDto {
    /** 补录计划ID */
    PlanId?: string | null;
    /** 补录计划名称 */
    MakeName?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** 补录是否检查父任务状态 */
    CheckParent?: boolean | null;
    /** 是否使用任务原有自依赖配置 */
    SameSelfDependType?: boolean | null;
    /** 并行度，在SameSelfDependType为false时生效 */
    ParallelNum?: number | null;
    /** 补录实例生成周期是否修改 */
    SameCycle?: boolean | null;
    /** 调度周期转换方式-原始周期类型 */
    SourceTaskCycle?: string | null;
    /** 调度周期转换方式-目标周期类型 */
    TargetTaskCycle?: string | null;
    /** 调度周期转换方式-目标周期类型指定时间 */
    TargetTaskAction?: number | null;
    /** 补录实例自定义参数 */
    MapParamList?: StrToStrMap[] | null;
    /** 创建人ID */
    CreatorId?: string | null;
    /** 创建人 */
    Creator?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 补录任务ID集合 */
    TaskIdList?: string[] | null;
    /** 补录计划日期范围 */
    MakeDatetimeList?: CreateMakeDatetimeInfo[] | null;
    /** 补录计划说明 */
    Remark?: string | null;
    /** 补录指定的调度资源组（ID） */
    SchedulerResourceGroup?: string | null;
    /** 补录指定的调度资源组名称 */
    SchedulerResourceGroupName?: string | null;
    /** 补录指定的集成资源组（ID） */
    IntegrationResourceGroup?: string | null;
    /** 补录指定的集成资源组名称 */
    IntegrationResourceGroupName?: string | null;
    /** 补录计划任务数量 */
    TaskCount?: number | null;
    /** 补录计划实例完成百分数 */
    CompletePercent?: number | null;
    /** 补录计划实例成功百分数 */
    SuccessPercent?: number | null;
    /** 补录检查父任务类型。取值范围： NONE: 全部不检查 ALL: 检查全部上游父任务 MAKE_SCOPE: 只在（当前补录计划）选中任务中检查 */
    CheckParentType?: string | null;
    /** 是否和原任务保持相同工作流自依赖属性 */
    SameSelfWorkflowDependType?: boolean | null;
    /** 工作流自依赖类型 */
    SelfWorkflowDependency?: string | null;
    /** 补录时间顺序NORMAL： 正常ORDER ： 按照实例时间顺序执行REVERSE： 实例数据时间逆序 */
    MakeDataTimeOrder?: string;
    /** 补录时间范围的时区 */
    ScheduleTimeZone?: string;
    /** 执行应用参数 */
    AppParam?: string;
    /** 补录计划时间范围的类型： DATA_TIME：实例数据时间；SCHEDULE_TIME 计划调度时间 */
    TimeType?: string;
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
    /** 失败百分比 */
    FailurePercent?: number | null;
    /** 补录计划的告警规则 */
    AlarmRule?: MakePlanAlarmRule | null;
    /** 运行类型 */
    RunType?: number | null;
    /** 定时运行时间 */
    RunDateTime?: string | null;
  }

  /** 补录计划集合 */
  interface MakePlanOpsDtoCollection {
    /** 记录总数 */
    TotalCount?: number | null;
    /** 记录总页数 */
    TotalPage?: number | null;
    /** 当前页记录数 */
    PageCount?: number | null;
    /** 页码 */
    PageNumber?: number | null;
    /** 页大小 */
    PageSize?: number | null;
    /** 记录列表 */
    Items?: MakePlanOpsDto[] | null;
  }

  /** 补录计划任务 */
  interface MakePlanTaskOpsDto {
    /** 任务基本信息 */
    TaskBaseInfo?: TaskOpsDto | null;
    /** 补录该任务当前已生成的实例数 */
    InstanceCount?: number | null;
    /** 补录任务实例完成百分数 */
    CompletePercent?: number | null;
    /** 补录任务实例成功百分数 */
    SuccessPercent?: number | null;
    /** 预计生成的总实例个数，由于是异步生成，-1代表实例还未完全生成 */
    InstanceTotalCount?: number | null;
    /** 补录任务实例失败百分数 */
    FailurePercent?: number | null;
  }

  /** 补录计划任务集合 */
  interface MakePlanTaskOpsDtoCollection {
    /** 记录总数 */
    TotalCount?: number | null;
    /** 记录总页数 */
    TotalPage?: number | null;
    /** 当前页记录数 */
    PageCount?: number | null;
    /** 页码 */
    PageNumber?: number | null;
    /** 页大小 */
    PageSize?: number | null;
    /** 记录列表 */
    Items?: MakePlanTaskOpsDto[] | null;
  }

  /** 手动工作流触发运行记录实体 */
  interface ManualTriggerRecordOpsDto {
    /** 运行触发记录ID */
    TriggerId?: string | null;
    /** 用户提交运行时配置的运行名称 */
    TriggerName?: string | null;
    /** 用户提交运行的备注 */
    Remark?: string | null;
    /** 数据时间列表 */
    DatetimeList?: string[] | null;
    /** 任务数 */
    TaskCnt?: number | null;
    /** 实例数 */
    InstanceCnt?: number | null;
    /** 已完成的实例数 */
    FinishedInstanceCnt?: number | null;
    /** 成功的实例数 */
    SuccessInstanceCnt?: number | null;
    /** 记录运行状态 INIT, RUNNING, FINISHED */
    Status?: string | null;
    /** 用户提交运行时的入参，主要用于前端反显和记录原始提交信息 */
    TriggerParams?: string | null;
    /** 用户主账号ID */
    OwnerUin?: string | null;
    /** 用户ID */
    UserUin?: string | null;
    /** 用户展示名 */
    UserName?: string | null;
    /** 租户ID */
    TenantId?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 数据实例时间的时区 */
    ScheduleTimeZone?: string | null;
    /** 时间类型，DATA_TIME：数据时间、SCHEDULE_TIME：计划调度时间, 为空时会被当成DATA_TIME处理 */
    TimeType?: string;
  }

  /** 手动工作流触发运行记录分页查询 */
  interface ManualTriggerRecordOpsDtoPage {
    /** 页号 */
    PageNumber?: number | null;
    /** 页大小 */
    PageSize?: number | null;
    /** 手动工作流触发运行记录 */
    Items?: ManualTriggerRecordOpsDto[] | null;
    /** 总页数 */
    TotalPage?: number | null;
    /** 页数 */
    PageCount?: number | null;
    /** 总条数 */
    TotalCount?: number | null;
  }

  /** 任务告警通知疲劳度配置，包括通知次数、间隔、免打扰时间。 */
  interface NotificationFatigue {
    /** 通知次数 */
    NotifyCount?: number | null;
    /** 通知间隔，单位分钟。 */
    NotifyInterval?: number | null;
    /** 免打扰时间，例如示例值每周一、周二的00:00到09:00免打扰 */
    QuietIntervals?: AlarmQuietInterval[] | null;
  }

  /** 离线实例 */
  interface OfflineInstance {
    /** 创建账号sub uin */
    CreateUin?: string | null;
    /** 操作账号sub uin */
    OperatorUin?: string | null;
    /** 主账号 */
    OwnerUin?: string | null;
    /** 账号 */
    AppId?: string | null;
    /** 项目Id */
    WorkspaceId?: string | null;
    /** 任务Id */
    TaskId?: string;
    /** 数据时间 */
    CurRunDate?: string;
    /** 下发时间 */
    IssueId?: string;
    /** 下发资源组id，非传入项 */
    InlongTaskId?: string | null;
    /** 资源组 */
    ResourceGroup?: string | null;
    /** 任务类型(1 调试运行,2 调度执行) */
    TaskRunType?: number;
    /** 实例状态 EVENT_LISTENING|DEPENDENCE|BEFORE_ASPECT|ALLOCATED|LAUNCHED|KILL|SNAP_STATE_SAVING|ISSUED|RUNNING|AFTER_ASPECT|PENDING|KILLING|FINAL_STATE_SAVING|FAILED|KILL_FAILED| COMPLETED|EXPIRED|KILL_EXPIRED|DELETED */
    State?: string;
    /** 开始时间 */
    StartTime?: string | null;
    /** 结束时间 */
    EndTime?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 最后更新时间 */
    UpdateTime?: string;
    /** 唯一key */
    InstanceKey?: string | null;
  }

  /** 离线任务新增参数 */
  interface OfflineTaskAddParam {
    /** 名称 */
    WorkflowName: string;
    /** 依赖：yes、no */
    DependencyWorkflow: string;
    /** 任务开始数据时间。非空。默认当前时间 */
    StartTime: string;
    /** 任务结束数据时间。非空。默认当前时间 */
    EndTime: string;
    /** 周期类型。一次性任务:6、分钟任务：1、小时任务：2、天任务：3、周任务：4、月任务：5、crontab任务：0 */
    CycleType: number;
    /** 间隔，可选，默认1。非空。默认 1 */
    CycleStep: number;
    /** 延时执行时间，单位分钟 */
    DelayTime: number;
    /** 任务cron表达式，仅cron任务使用，其他时候默认为空 */
    CrontabExpression: string | null;
    /** 重试等待 */
    RetryWait: number;
    /** 是否可以重试 */
    Retriable: number;
    /** 重试限制 */
    TryLimit: number;
    /** 优先级 */
    RunPriority: number;
    /** 产品名称 */
    ProductName: string;
    /** 1 有序串行 一次一个，排队 orderly 2 无序串行 一次一个，不排队 serial 3 并行 一次多个 parallel */
    SelfDepend: number;
    /** 时间指定，如月任务指定1，3号，则填入 1，3。非空。默认 ""月任务：如具体1，3号则写 "1,3"，指定月末不可和具体号数一起输入，仅能为 "L" */
    TaskAction?: string | null;
    /** 调度执行结束时间 */
    ExecutionEndTime?: string | null;
    /** 调度执行开始时间 */
    ExecutionStartTime?: string | null;
    /** 是否自动提交 */
    TaskAutoSubmit?: boolean | null;
    /** 实例生成方式，T_PLUS_0 当天任务当天调度 / T_PLUS_1 当天任务后一天调度 */
    InstanceInitStrategy?: string | null;
  }

  /** 数据资产操作标记 */
  interface OperateOption {
    /** 是否有修改归属项目权限 */
    HasProjectPermission?: boolean | null;
  }

  /** 操作返回结果 */
  interface OperationOpsDto {
    /** 操作是否成功 */
    Result?: boolean | null;
    /** 操作结果详情 */
    ResultMsg?: string | null;
    /** 操作失败类型 */
    ErrorId?: string | null;
    /** 操作失败描述 */
    ErrorDesc?: string | null;
    /** 异步操作记录id */
    AsyncActionId?: string;
  }

  /** 任务信息 */
  interface OpsTaskCanvasDto {
    /** 任务Id */
    TaskId: string | null;
    /** 任务名称 */
    TaskName: string | null;
    /** 工作流id */
    WorkflowId: string | null;
    /** 工作流名称 */
    WorkflowName: string | null;
    /** 项目名称 */
    ProjectName: string | null;
    /** 项目标识 */
    ProjectIdent: string | null;
    /** 任务状态，'Y','F','O','T','INVALID' 分别表示调度中、已停止、已暂停、停止中、已失效 */
    Status: string | null;
    /** 任务类型id */
    TaskTypeId: number | null;
    /** 任务类型描述，其中任务类型id和任务类型描述的对应的关系为20	通用数据同步任务21	JDBC SQL22	Tbase25	数据ETL30	Python31	PySpark34	Hive SQL35	Shell36	Spark SQL37	HDFS到HBase38	SHELL39	Spark45	DATA_QUALITY55	THIVE到MYSQL56	THIVE到PG66	HDFS到PG67	HDFS到Oracle68	HDFS到MYSQL69	FTP到HDFS70	HIVE SQL72	HIVE到HDFS75	HDFS到HIVE81	PYTHONSQL脚本82	SPARKSCALA计算83	虫洞任务84	校验对账文件85	HDFS到THIVE86	TDW到HDFS87	HDFS到TDW88	校验对账文件91	FLINK任务92	MapReduce98	custom topology99	kafkatoHDFS100	kafkatoHbase101	MYSQL导入至HIVE(DX)104	MYSQL到HIVE105	HIVE到MYSQL106	SQL SERVER到HIVE107	HIVE到SQL SERVER108	ORACLE到HIVE109	HIVE到ORACLE111	HIVE到MYSQL(NEW)112	HIVE到PG113	HIVE到PHOENIX118	MYSQL到HDFS119	PG到HDFS120	ORACLE到HDFS121	数据质量10000	自定义业务 */
    TaskTypeDesc: string | null;
    /** 项目id */
    ProjectId: string | null;
    /** 文件夹名称 */
    FolderName: string | null;
    /** 文件夹id */
    FolderId: string | null;
    /** 最近提交时间 */
    FirstSubmitTime: string | null;
    /** 首次运行时间 */
    FirstRunTime: string | null;
    /** 调度计划展示描述信息 */
    ScheduleDesc: string | null;
    /** 负责人 */
    InCharge: string | null;
    /** 调度周期类型 */
    CycleUnit: string | null;
    /** 画布x轴坐标点 */
    LeftCoordinate: number | null;
    /** 画布y轴坐标点 */
    TopCoordinate: number | null;
    /** 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务 */
    VirtualFlag: boolean | null;
    /** 弹性周期配置 */
    TaskAction: string | null;
    /** 延迟时间 */
    DelayTime: number | null;
    /** 执行开始时间 */
    ExecutionStartTime?: string | null;
    /** 执行结束时间 */
    ExecutionEndTime?: string | null;
    /** 层级 */
    Layer?: string | null;
    /** 来源数据源ID */
    SourceServiceId?: string | null;
    /** 来源数据源类型 */
    SourceServiceType?: string | null;
    /** 目标数据源ID */
    TargetServiceId?: string | null;
    /** 目标数据源类型 */
    TargetServiceType?: string | null;
    /** 任务告警类型 */
    AlarmType?: string | null;
    /** 任务创建时间 */
    CreateTime?: string | null;
  }

  /** 画布所需的信息 */
  interface OpsTaskCanvasInfoList {
    /** 画布任务信息 */
    TasksList?: OpsTaskCanvasDto[];
    /** 画布任务链接信息 */
    LinksList?: OpsTaskLinkInfoDto[];
    /** 画布循环依赖任务信息 */
    CirculateTaskList?: OpsTaskCanvasDto[] | null;
  }

  /** 任务分页查询 */
  interface OpsTaskInfoPage {
    /** 页号 */
    PageNumber: number;
    /** 页大小 */
    PageSize: number;
    /** 任务列表信息 */
    Items: TaskOpsDto[];
    /** 总页数 */
    TotalPage: number;
    /** 页数 */
    PageCount?: number;
    /** 总条数 */
    TotalCount?: number;
  }

  /** 任务依赖的边信息 */
  interface OpsTaskLinkInfoDto {
    /** 下游任务id */
    TaskTo?: string;
    /** 上游任务id */
    TaskFrom?: string;
    /** 依赖边类型 1、“real_real”表示任务->任务；2、"virtual_real" 跨工作流任务->任务 */
    LinkType?: string;
    /** 依赖边id */
    LinkId?: string;
    /** 为了区分新增的循环依赖新增的类型。默认是normal，循环依赖则是circulate */
    LinkStyle?: string | null;
  }

  /** 通用排序字段名和排序方向 */
  interface OrderCondition {
    /** name */
    Name: string | null;
    /** 降序DESC; 升序ASC */
    Direction: string | null;
  }

  /** 通用排序字段 */
  interface OrderField {
    /** 排序字段名称 */
    Name: string;
    /** 排序方向：ASC|DESC */
    Direction: string;
  }

  /** 通用排序字段 */
  interface OrderFieldOptional {
    /** 排序字段名称 */
    Name?: string;
    /** 排序方向：ASC|DESC */
    Direction?: string;
  }

  /** 排序 */
  interface OrderFields {
    /** 字段 */
    Name?: string;
    /** 排序 */
    Direction?: string;
  }

  /** 包含层级信息的函数 */
  interface OrganizationalFunction {
    /** 名称 */
    Name?: string;
    /** 展示名称 */
    DisplayName?: string;
    /** 层级路径 */
    LayerPath?: string;
    /** 上级层级路径 */
    ParentLayerPath?: string;
    /** 函数类型 */
    Type?: string | null;
    /** 函数分类：窗口函数、聚合函数、日期函数...... */
    Kind?: string | null;
    /** 函数种类：系统函数、自定义函数 */
    Category?: string | null;
    /** 函数状态 */
    Status?: string | null;
    /** 函数说明 */
    Description?: string | null;
    /** 函数用法 */
    Usage?: string | null;
    /** 函数参数说明 */
    ParamDesc?: string | null;
    /** 函数返回值说明 */
    ReturnDesc?: string | null;
    /** 函数示例 */
    Example?: string | null;
    /** 集群实例引擎 ID */
    ClusterIdentifier?: string | null;
    /** 函数 ID */
    FuncId?: string | null;
    /** 函数类名 */
    ClassName?: string | null;
    /** 函数资源列表 */
    ResourceList?: FunctionVersion[] | null;
    /** 操作人 ID 列表 */
    OperatorUserIds?: number[] | null;
    /** 公有云 Owner ID 列表 */
    OwnerUserIds?: number[] | null;
    /** 数据库名称 */
    DbName?: string | null;
    /** 提交失败错误信息 */
    SubmitErrorMsg?: string | null;
    /** 模式名 */
    SchemaName?: string | null;
    /** 函数命令格式 */
    CommandFormat?: string | null;
    /** 名称 */
    OwnerName?: string | null;
    /** 时间戳 */
    SubmitTimestamp?: string | null;
    /** 函数tag */
    Tag?: string | null;
    /** 操作人 ID 列表 */
    OperatorUserIdsStr?: string[] | null;
    /** 公有云 Owner ID 列表 */
    OwnerUserIdsStr?: string[] | null;
    /** 数据库环境 */
    EnvType?: string | null;
    /** 函数资源文件类型 */
    FunctionResourceFileType?: string | null;
  }

  /** 角色列表分页信息 */
  interface PageRoles {
    /** 角色信息 */
    Rows?: BaseRole[] | null;
    /** 页码 */
    PageNumber?: number | null;
    /** 分页大小 */
    PageSize?: number | null;
    /** 总个数 */
    TotalCount?: number | null;
    /** 总分页页码 */
    TotalPageNumber?: number | null;
  }

  /** 任务模版分页 */
  interface PageTaskTemplateInfo {
    /** 任务集合信息 */
    Items?: CodeTemplateDetail[];
    /** 总页数 */
    PageCount?: number;
    /** 总数量 */
    TotalCount?: number;
    /** 当前页 */
    PageNumber?: number;
    /** 每页显示数 */
    PageSize?: number;
  }

  /** 键值对 */
  interface Pair {
    /** 键名 */
    Key: string;
    /** 值 */
    Value: string;
    /** 唯一标识 */
    Id?: string | null;
  }

  /** 键值对 */
  interface PairDto {
    /** 键名 */
    Key?: string | null;
    /** 值 */
    Value?: string | null;
    /** 描述 */
    Description?: string;
  }

  /** 根据任务信息获取实例状态信息实例 */
  interface ParamGetTaskInstancesStatusInfoResponseInstance {
    /** 实例编号 */
    InstanceId?: string | null;
    /** 状态 */
    Status?: string | null;
    /** 记录编号 */
    RecordId?: string | null;
    /** 任务编号 */
    TaskId?: string | null;
  }

  /** 参数参数 */
  interface ParamInfo {
    /** 参数名 */
    ParamKey: string;
    /** 参数值 */
    ParamValue: string;
  }

  /** 参数参数 */
  interface ParamInfoDs {
    /** 参数名 */
    ParamKey: string;
    /** 参数值 */
    ParamValue: string;
  }

  /** ds参数map结构体 */
  interface ParamMapDsDto {
    /** k */
    Key?: string | null;
    /** v */
    Value?: string | null;
  }

  /** 任务参数Dto */
  interface ParameterTaskDsDto {
    /** 任务id */
    TaskId?: string | null;
    /** 参数名 */
    ParamKey?: string | null;
    /** 参数定义 */
    ParamDefine?: string | null;
    /** 参数值 */
    ParamValue?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 任务参数输入类型, 取值示例- text 文本输入- kv k-v输入 */
    InputType?: string | null;
  }

  /** 查询任务输入参数Dto */
  interface ParameterTaskInDsDto {
    /** 唯一标识 */
    Id: number | null;
    /** 任务id */
    TaskId: string | null;
    /** 参数名 */
    ParamKey: string | null;
    /** 参数描述 */
    ParamDesc: string | null;
    /** 父任务id */
    FromTaskId: string | null;
    /** 父任务参数key */
    FromParamKey: string | null;
    /** 创建时间 */
    CreateTime: string | null;
    /** 升级时间 */
    UpdateTime: string | null;
    /** 父任务名 */
    FromTaskName: string | null;
    /** 父任务项目id */
    FromProjectId: string | null;
    /** 父任务项目名 */
    FromProjectName: string | null;
  }

  /** 任务参数输出dto */
  interface ParameterTaskOutDsDto {
    /** 唯一标识 */
    Id: number | null;
    /** 任务id */
    TaskId: string | null;
    /** 参数名 */
    ParamKey: string | null;
    /** 参数描述 */
    ParamDesc: string | null;
    /** 参数定义 */
    ParamDefine: string | null;
    /** 创建时间 */
    CreateTime: string | null;
    /** 更新时间 */
    UpdateTime: string | null;
    /** 任务名 */
    TaskName: string | null;
    /** 项目id */
    ProjectId: string | null;
    /** 项目名 */
    ProjectName: string | null;
  }

  /** 分区参数 */
  interface Partition {
    /** 分区转换策略 */
    Transform?: string;
    /** 分区字段名 */
    Name?: string;
    /** 策略参数 */
    TransformArgs?: string[];
  }

  /** 数据开发-统一树结构返回属性 */
  interface PathNodeDsVO {
    /** PathNode ID */
    Id?: string | null;
    /** PathNode 名称 */
    Title?: string | null;
    /** PathNode 类型 */
    Type?: string | null;
    /** 父节点唯一标识 */
    ParentId?: string | null;
    /** 是否叶子节点 */
    IsLeaf?: boolean | null;
    /** 子节点列表 */
    Children?: PathNodeDsVO[] | null;
    /** 业务参数 ,base64编译的json串，获取具体参数需要base64反编译 */
    Params?: string | null;
  }

  /** 读写权限状态 */
  interface PermissionStatus {
    /** 写权限 */
    CanWrite?: boolean | null;
    /** 写权限 */
    CanDelete?: boolean | null;
    /** 写权限 */
    CanRead?: boolean | null;
  }

  /** 数据质量生产调度任务业务实体 */
  interface ProdSchedulerTask {
    /** 生产调度任务工作流ID */
    WorkflowId: string | null;
    /** 生产调度任务Id */
    TaskId?: string | null;
    /** 生产调度任务名称 */
    TaskName?: string | null;
    /** 生产调度任务任务类型 */
    CycleType?: number | null;
    /** 生产任务类型 */
    TaskType?: string | null;
    /** 时区 */
    ScheduleTimeZone?: string | null;
    /** 负责人id */
    InChargeIdList?: string[] | null;
    /** 负责人name */
    InChargeNameList?: string[] | null;
  }

  /** 项目信息 */
  interface Project {
    /** 项目的所在租户ID */
    TenantId?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 项目标识，英文名 */
    ProjectName?: string | null;
    /** 项目显示名称，可以为中文名 */
    DisplayName?: string | null;
    /** 地域 */
    Region?: string | null;
    /** 备注 */
    Description?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 创建者 */
    Creator?: BaseUser | null;
    /** 租户信息 */
    Tenant?: BaseTenant | null;
    /** 项目的管理员 */
    AdminUsers?: BaseUser[] | null;
    /** 项目关联的集群信息 */
    Clusters?: BaseClusterInfo[] | null;
    /** 项目的额外配置参数 */
    Params?: string | null;
    /** 项目状态：0：禁用，1：启用，-3:禁用中，2：启用中 */
    Status?: number;
    /** 项目类型，SIMPLE：简单模式 STANDARD：标准模式 */
    Model?: string | null;
    /** 二级菜单 */
    SecondModuleList?: string[] | null;
    /** 项目负责人 */
    Owner?: BaseUser | null;
    /** 项目扩展信息 */
    WorkspaceExt?: WorkspaceExt[] | null;
    /** 创建时间时间戳 */
    CreateTimestamp?: number | null;
  }

  /** 查询数据源分页列表 */
  interface ProjectPage {
    /** 分页页码 */
    PageNumber: number | null;
    /** 分页大小 */
    PageSize: number | null;
    /** 数据源列表 */
    Rows: Project[] | null;
    /** 总数 */
    TotalCount: number | null;
    /** 总分页页码 */
    TotalPageNumber: number | null;
  }

  /** 项目的用户对象 */
  interface ProjectUserRole {
    /** 用户角色对象 */
    Roles?: SystemRole[] | null;
    /** mc */
    UserName?: string | null;
    /** 用户id */
    UserId?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 是否创建者 */
    Creator?: boolean | null;
    /** 显示名称 */
    DisplayName?: string | null;
    /** 是否项目管理员 */
    IsProjectAdmin?: boolean | null;
    /** 手机号 */
    PhoneNum?: string | null;
    /** 邮箱 */
    Email?: string | null;
    /** 主账号id */
    OwnerUin?: string | null;
    /** 租户iD */
    AppId?: string | null;
    /** 是否项目负责人 */
    IsProjectOwner?: boolean | null;
    /** 创建时间 */
    CreateTimestamp?: number | null;
    /** 用户状态 0:历史 1:正常 2:已删除 */
    Status?: number | null;
  }

  /** 项目下的用户集合 */
  interface ProjectUsersPage {
    /** 用户集合 */
    Rows: ProjectUserRole[] | null;
    /** 分页大小 */
    PageSize: number | null;
    /** 分页页码 */
    PageNumber: number | null;
    /** 总数量 */
    TotalCount: number | null;
    /** 总分页页码 */
    TotalPageNumber: number | null;
  }

  /** dlc建表属性 */
  interface Property {
    /** key值 */
    Key: string;
    /** value值 */
    Value: string;
  }

  /** 质量评分 */
  interface QualityScore {
    /** 综合分数 */
    CompositeScore: number | null;
    /** 评分分布 */
    ScoringDistribution: TableScoreStatisticsInfo[] | null;
    /** 总表数 */
    TotalTableNumber: number | null;
  }

  /** 质量评分趋势 */
  interface QualityScoreTrend {
    /** 周期平均分 */
    AverageScore: number | null;
    /** 日评分列表 */
    DailyScoreList: DailyScoreInfo[] | null;
  }

  /** 数据集成 - 告警免打扰时间 */
  interface QuietPeriod {
    /** 代表一周里的哪些天，1代表周一，7代表周日，以此类推 */
    DaysOfWeek?: number[] | null;
    /** 开始时间 */
    StartTime?: string | null;
    /** 结束时间 */
    EndTime?: string | null;
  }

  /** 实时任务实例当前的节点信息 */
  interface RealTimeTaskInstanceNodeInfo {
    /** 任务名 */
    TaskName?: string | null;
    /** 任务id */
    TaskId?: string | null;
    /** 实时任务实例节点信息列表 */
    InstanceNodeInfoList?: InstanceNodeInfo[] | null;
  }

  /** 实时任务同步速度趋势 */
  interface RealTimeTaskSpeed {
    /** 同步速度条/s列表 */
    RecordsSpeedList?: RecordsSpeed[];
    /** 同步速度字节/s列表 */
    BytesSpeedList?: BytesSpeed[];
    /** 日志条数速度 */
    RecordsLogSpeed?: RecordsSpeed[];
    /** 日志大小速度 */
    BytesLogSpeed?: BytesSpeed[];
  }

  /** 通用记录字段，与服务端约定传入合法的键值对 */
  interface RecordField {
    /** 字段名称，拓展字段名称 */
    Name?: string;
    /** 字段值，拓展字段值 */
    Value?: string;
  }

  /** 实时任务同步速度 条/s */
  interface RecordsSpeed {
    /** 节点类型 */
    NodeType: string | null;
    /** 节点名称 */
    NodeName: string | null;
    /** 速度值列表 */
    Values: SpeedValue[] | null;
  }

  /** RegisterDsEventPublisher注册事件发布者参数 */
  interface RegisterDsEventPublisherReq {
    /** 项目id */
    ProjectId?: string;
    /** 任务id */
    Key?: string;
    /** 类型 REST_API、KAFKA */
    Type?: string;
    /** 配置信息 */
    Properties?: ParamInfoDs[];
    /** 描述信息 */
    Description?: string;
  }

  /** 任务直接关联的其他任务 */
  interface RelatedTask {
    /** 查询直接依赖方向，如UP、DOWN */
    DependencyDirection?: string | null;
    /** 任务id */
    TaskId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 任务调度周期 */
    CycleType?: string | null;
    /** 任务状态 */
    Status?: string | null;
    /** 责任人名 */
    OwnerName?: string | null;
    /** 事件项目ID */
    ProjectId?: string | null;
    /** 项目展示名 */
    ProjectDisplayName?: string | null;
    /** 所属工作流id */
    WorkflowId?: string | null;
    /** 所属工作流名 */
    WorkflowName?: string | null;
    /** 任务类型id */
    TaskTypeId?: number | null;
  }

  /** 上报表元数据的字段结构 */
  interface ReportColumnInfo {
    /** 字段名称,字符长度128内 */
    Name: string;
    /** 字段类型,字符长度128内 */
    Type: string;
    /** 字段位置,1开始 */
    Position: number;
    /** 字段描述,字符长度256内 */
    Description?: string;
    /** 创建时间戳,毫秒,为空默认当前时间 */
    CreateTime?: string;
    /** 修改时间戳,毫秒,为空默认当前时间 */
    ModifiedTime?: string;
  }

  /** 上报任务详情 */
  interface ReportTaskDetail {
    /** 引擎任务id */
    EngineTaskId?: string | null;
    /** 引擎执行状态，枚举 */
    EngineExeStatus?: string | null;
    /** 引擎执行开始时间 */
    EngineExeStartTime?: string | null;
    /** 引擎执行结束时间 */
    EngineExeEndTime?: string | null;
    /** 任务类型id */
    TaskTypeId?: number | null;
    /** 业务信息 */
    BusinessInfo?: string | null;
    /** 引擎任务信息 */
    EngineTaskInfo?: EngineTaskInfo | null;
  }

  /** 上报任务信息 */
  interface ReportTaskListInfo {
    /** 任务列表详情 */
    Rows?: TaskInfoVo[] | null;
    /** 页码 */
    PageNum?: number | null;
    /** 每页条数 */
    PageSize?: number | null;
    /** 总记录数 */
    TotalCount?: number | null;
    /** 总页数 */
    TotalPageNumber?: number | null;
  }

  /** 资源管理目录树节点 */
  interface ResourcePathTree {
    /** 资源名字 */
    Name?: string | null;
    /** 是否为叶子节点 */
    IsLeaf?: boolean | null;
    /** 资源ID */
    ResourceId?: string | null;
    /** 本地路径 */
    LocalPath?: string | null;
    /** 远程路径 */
    RemotePath?: string | null;
    /** 文件类型 */
    FileExtensionType?: string | null;
    /** 文件大小 */
    Size?: number | null;
    /** 文件MD5值 */
    Md5Value?: string | null;
    /** 文件拥有者名字 */
    OwnerName?: string | null;
    /** 更新人 */
    UpdateUser?: string | null;
    /** 文件更新人uin */
    UpdateUserId?: string | null;
    /** 创建时间 */
    CreateTime?: number | null;
    /** 更新时间 */
    UpdateTime?: number | null;
    /** Cos存储桶名 */
    CosBucket?: string | null;
    /** Cos地域 */
    CosRegion?: string | null;
    /** 额外信息 */
    ExtraInfo?: string | null;
  }

  /** 资源池信息 */
  interface ResourcePoolInfo {
    /** 资源池id */
    ResourcePools?: string[];
    /** 存储空间大小，单位 MB */
    StorageSize?: number;
    /** 存储文件数大小 */
    StorageFileNum?: number;
    /** 集群id */
    ClusterId?: string;
    /** 存储类型，0 代表HDFS，1 代表OZONE */
    StorageType?: string;
  }

  /** 抢锁状态：是否可以抢锁和当前持锁人 */
  interface RobLockState {
    /** 是否可以抢锁 */
    IsRob?: boolean;
    /** 当前持锁人 */
    Locker?: string;
  }

  /** 角色权限对象 */
  interface RolePrivilege {
    /** id */
    PrivilegeId?: string | null;
    /** 名称 */
    PrivilegeName?: string | null;
    /** 路径 */
    RestPath?: string | null;
    /** 方法 */
    RestMethod?: string | null;
    /** 描述 */
    Description?: string | null;
    /** 模块id */
    ModuleId?: string | null;
    /** 权限类型 N、R、RW、RWD */
    Type?: string | null;
  }

  /** 数据质量规则 */
  interface Rule {
    /** 规则ID */
    RuleId?: number | null;
    /** 规则组ID */
    RuleGroupId?: number | null;
    /** 数据表Id */
    TableId?: string | null;
    /** 规则名称 */
    Name?: string | null;
    /** 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL */
    Type?: number | null;
    /** 规则模板Id */
    RuleTemplateId?: number | null;
    /** 规则模板概述 */
    RuleTemplateContent?: string | null;
    /** 规则所属质量维度 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
    QualityDim?: number | null;
    /** 规则适用的源数据对象类型（1：常量，2：离线表级，3：离线字段级别） */
    SourceObjectType?: number | null;
    /** 规则适用的源数据对象类型（1：数值，2：字符串） */
    SourceObjectDataType?: number | null;
    /** 源字段详细类型，INT、STRING */
    SourceObjectDataTypeName?: string | null;
    /** 源字段名称 */
    SourceObjectValue?: string | null;
    /** 检测范围 1.全表, 2.条件扫描 */
    ConditionType?: number | null;
    /** 条件扫描WHERE条件表达式 */
    ConditionExpression?: string | null;
    /** 自定义SQL */
    CustomSql?: string | null;
    /** 报警触发条件 */
    CompareRule?: CompareRule | null;
    /** 报警触发级别 1.低, 2.中, 3.高 */
    AlarmLevel?: number | null;
    /** 规则描述 */
    Description?: string | null;
    /** 规则配置人 */
    Operator?: string | null;
    /** 目标库Id */
    TargetDatabaseId?: string | null;
    /** 目标库名称 */
    TargetDatabaseName?: string | null;
    /** 目标表Id */
    TargetTableId?: string | null;
    /** 目标表名称 */
    TargetTableName?: string | null;
    /** 目标字段过滤条件表达式 */
    TargetConditionExpr?: string | null;
    /** 源字段与目标字段关联条件on表达式 */
    RelConditionExpr?: string | null;
    /** 自定义模版sql表达式参数 */
    FieldConfig?: RuleFieldConfig | null;
    /** 是否关联多表 */
    MultiSourceFlag?: boolean | null;
    /** 是否where参数 */
    WhereFlag?: boolean | null;
    /** 模版原始SQL */
    TemplateSql?: string | null;
    /** 模版子维度：0.父维度类型,1.一致性: 枚举范围一致性,2.一致性：数值范围一致性,3.一致性：字段数据相关性 */
    SubQualityDim?: number | null;
    /** 规则适用的目标数据对象类型（1：常量，2：离线表级，3：离线字段级别） */
    TargetObjectType?: number | null;
    /** 规则适用的目标数据对象类型（1：数值，2：字符串） */
    TargetObjectDataType?: number | null;
    /** 目标字段详细类型，INT、STRING */
    TargetObjectDataTypeName?: string | null;
    /** 目标字段名称 */
    TargetObjectValue?: string | null;
    /** 源端对应的引擎类型 */
    SourceEngineTypes?: number[] | null;
    /** 表名称 */
    TableName?: string | null;
    /** 表负责人名称 */
    TableOwnerName?: string | null;
    /** 执行策略信息 */
    ExecStrategy?: RuleGroupExecStrategy | null;
    /** 订阅信息 */
    Subscription?: RuleGroupSubscribe | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 数据源 id */
    DatasourceId?: number | null;
    /** 数据库 id */
    DatabaseId?: string | null;
    /** 监控是否开启.0false,1true */
    MonitorStatus?: number | null;
    /** 触发条件 */
    TriggerCondition?: string | null;
    /** 0或者未返回或者null：未定义，1：生产，2：开发 */
    DsEnvType?: number | null;
    /** 数据源类型 */
    DatasourceType?: number | null;
    /** 模式名称 */
    SchemaName?: string | null;
    /** 目标模式名称 */
    TargetSchemaName?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 数据源名称 */
    DatasourceName?: string | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 失败原因 */
    FailMsg?: string | null;
    /** 任务类型 */
    GroupType?: string | null;
    /** 编排任务id */
    AspectTaskId?: string | null;
    /** 目录 */
    CatalogName?: string | null;
    /** 目标目录 */
    TargetCatalogName?: string | null;
  }

  /** 规则配置 */
  interface RuleConfig {
    /** 规则ID */
    RuleId?: number | null;
    /** 规则检测范围类型 1.全表 2.条件扫描 */
    ConditionType?: number | null;
    /** 检测范围表达式 */
    Condition?: string | null;
    /** 目标检测范围表达式 */
    TargetCondition?: string | null;
  }

  /** RuleDimCnt 规则维度统计 */
  interface RuleDimCnt {
    /** 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
    Dim: number;
    /** count 数 */
    Cnt: number;
  }

  /** 规则维度数统计 */
  interface RuleDimStat {
    /** 总数 */
    TotalCnt: number;
    /** 维度统计数 */
    DimCntList: RuleDimCnt[];
  }

  /** 规则执行配置 */
  interface RuleExecConfig {
    /** 计算队列名称 */
    QueueName?: string | null;
    /** 执行资源组 */
    ExecutorGroupId?: string | null;
    /** 运行的执行引擎，不传时会请求该数据源下默认的执行引擎 */
    EngineType?: string | null;
    /** DLC执行引擎资源组 */
    DlcGroupName?: string | null;
    /** 引擎参数 */
    EngineParam?: string | null;
  }

  /** 概览趋势结果 */
  interface RuleExecDateStat {
    /** 统计日期 */
    StatDate: string;
    /** 告警数 */
    AlarmCnt: number;
    /** 阻塞数 */
    PipelineCnt: number;
  }

  /** 规则执行日志 */
  interface RuleExecLog {
    /** 是否完成 */
    Finished?: boolean | null;
    /** 内容 */
    Log: string | null;
  }

  /** 规则执行结果 */
  interface RuleExecResult {
    /** 规则执行ID */
    RuleExecId?: number | null;
    /** 规则组执行ID */
    RuleGroupExecId?: number | null;
    /** 规则组ID */
    RuleGroupId?: number | null;
    /** 规则ID */
    RuleId?: number | null;
    /** 规则名称 */
    RuleName?: string | null;
    /** 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL */
    RuleType?: number | null;
    /** 源字段详细类型，int string */
    SourceObjectDataTypeName?: string | null;
    /** 源字段名称 */
    SourceObjectValue?: string | null;
    /** 条件扫描WHERE条件表达式 */
    ConditionExpression?: string | null;
    /** 检测结果（1:检测通过，2：触发规则，3：检测失败） */
    ExecResultStatus?: number | null;
    /** 触发结果，告警发送成功, 阻断任务成功 */
    TriggerResult?: string | null;
    /** 对比结果 */
    CompareResult?: CompareResult | null;
    /** 模版名称 */
    TemplateName?: string | null;
    /** 质量维度 */
    QualityDim?: number | null;
    /** 目标表-库表名称 */
    TargetDBTableName?: string | null;
    /** 目标表-字段名称 */
    TargetObjectValue?: string | null;
    /** 目标表-字段类型 */
    TargetObjectDataType?: string | null;
    /** 自定义模版sql表达式参数 */
    FieldConfig?: RuleFieldConfig | null;
    /** 源字段与目标字段关联条件on表达式 */
    RelConditionExpr?: string | null;
    /** 执行时间 */
    StartTime?: string | null;
    /** 1/2/3:低/中/高 */
    AlarmLevel?: number | null;
    /** 触发条件 */
    TriggerCondition?: string | null;
    /** 任务名称 */
    RuleGroupName?: string | null;
    /** 数据源ID */
    DatasourceId?: string | null;
    /** 数据源名称 */
    DatasourceName?: string | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 模式名称 */
    SchemaName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 判断是否屏蔽监控 0.屏蔽 1.不屏蔽 */
    RuleGroupExist?: number | null;
    /** 数据源类型 */
    DatasourceType?: number | null;
    /** 数据表id */
    RuleGroupTableId?: number | null;
    /** 监控方式 1.未配置, 2.关联生产调度, 3.离线周期检测 */
    MonitorType?: number | null;
    /** 执行结束时间 */
    FinishTime?: string | null;
    /** 任务类型 */
    GroupType?: string | null;
    /** 编排任务id */
    AspectTaskId?: string | null;
    /** 目录 */
    CatalogName?: string | null;
  }

  /** 规则执行结果详情 */
  interface RuleExecResultDetail {
    /** 数据源id */
    DatasourceId?: number | null;
    /** 数据源名称 */
    DatasourceName?: string | null;
    /** 数据库guid */
    DatabaseId?: string | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 实例ID */
    InstanceId?: string | null;
    /** 表guid */
    TableId?: string | null;
    /** 表名 */
    TableName?: string | null;
    /** 规则执行记录 */
    RuleExecResult?: RuleExecResult | null;
    /** 表负责人userId */
    TableOwnerUserId?: number | null;
    /** 2.HIVE 3.DLC */
    DatasourceType?: number | null;
    /** 集群部署类型，CVM/TKE */
    ClusterDeployType?: string | null;
  }

  /** 规则执行结果分页 */
  interface RuleExecResultPage {
    /** 记录数 */
    TotalCount: number | null;
    /** 规则执行结果 */
    Items: RuleExecResult[];
  }

  /** 规则运行情况结果 */
  interface RuleExecStat {
    /** 规则运行总数 */
    TotalCnt: number;
    /** 环比规则运行总数 */
    LastTotalCnt: number | null;
    /** 规则运行总数占比 */
    TotalCntRatio: number;
    /** 规则运行总数环比变化 */
    LastTotalCntRatio: number | null;
    /** 规则触发数 */
    TriggerCnt: number;
    /** 环比规则触发数 */
    LastTriggerCnt: number | null;
    /** 触发占总数占比 */
    TriggerCntRatio: number;
    /** 环比规则触发数变化 */
    LastTriggerCntRatio: number | null;
    /** 规则报警数 */
    AlarmCnt: number;
    /** 环比规则报警数 */
    LastAlarmCnt: number | null;
    /** 报警占总数占比 */
    AlarmCntRatio: number;
    /** 环比报警数变化 */
    LastAlarmCntRatio: number | null;
    /** 阻塞发生数 */
    PipelineCnt: number;
    /** 环比阻塞发生数 */
    LastPipelineCnt: number | null;
    /** 阻塞占总数占比 */
    PipelineCntRatio: number;
    /** 环比阻塞发生数变化 */
    LastPipelineCntRatio: number | null;
  }

  /** 规则变量替换 */
  interface RuleFieldConfig {
    /** where变量 */
    WhereConfig?: FieldConfig[] | null;
    /** 库表变量 */
    TableConfig?: TableConfig[] | null;
  }

  /** 数据质量规则组 */
  interface RuleGroup {
    /** 规则组Id */
    RuleGroupId?: number | null;
    /** 数据源Id */
    DatasourceId?: string | null;
    /** 数据源名称 */
    DatasourceName?: string | null;
    /** 数据源类型 */
    DatasourceType?: number | null;
    /** 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测 */
    MonitorType?: number | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 关联数据表名称 */
    TableName?: string | null;
    /** 关联数据表Id */
    TableId?: string | null;
    /** 关联数据表负责人 */
    TableOwnerName?: string | null;
    /** 执行策略 */
    ExecStrategy?: RuleGroupExecStrategy | null;
    /** 执行策略 */
    Subscription?: RuleGroupSubscribe | null;
    /** 数据库id */
    DatabaseId?: string | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 模式名称 */
    SchemaName?: string | null;
    /** 是否有权限 */
    Permission?: boolean | null;
    /** 已经配置的规则数量 */
    RuleCount?: number | null;
    /** 监控状态 */
    MonitorStatus?: boolean | null;
    /** 表负责人UserId */
    TableOwnerUserId?: number | null;
    /** 实例ID */
    InstanceId?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 是否已配置执行策略 */
    StrategyConfig?: boolean | null;
    /** 是否已配置执行策略 */
    SubscribeConfig?: boolean | null;
    /** 数据源环境：0或者未返回.未定义，1.生产 2.开发 */
    DsEnvType?: number | null;
    /** EMR集群部署方式：CVM/TKE */
    ClusterDeployType?: string | null;
    /** 任务名称 */
    Name?: string | null;
    /** 执行详情 */
    ExecDetail?: string | null;
    /** 事中关联任务数量 */
    PipelineTaskCount?: number | null;
    /** 有效规则数 */
    EnableRuleCount?: number | null;
    /** 任务描述 */
    Description?: string | null;
    /** 监控创建人 */
    CreateUserName?: string | null;
    /** 任务类型 */
    GroupType?: string | null;
    /** 任务id */
    AspectTaskId?: string | null;
    /** catalog名称 */
    CatalogName?: string | null;
  }

  /** 任务配置 */
  interface RuleGroupConfig {
    /** 分析类型，可选值：INFERENCE-推理表TIME_SERIES-时序表SNAPSHOT-快照表 */
    AnalysisType?: string | null;
    /** 模型检测类型，分析类型为推理表（INFERENCE）时必填，可选值：CLAASSIFICATION-分类REGRESSION-回归 */
    ModelMonitorType?: string | null;
    /** 预测列 */
    PredictColumn?: string | null;
    /** 预测列类型 */
    PredictColumnType?: string | null;
    /** 标签列 */
    LabelColumn?: string | null;
    /** 标签列类型 */
    LabelColumnType?: string | null;
    /** 模型id列 */
    ModelIdColumn?: string | null;
    /** 模型id列类型 */
    ModelIdColumnType?: string | null;
    /** 时间戳列 */
    TimestampColumn?: string | null;
    /** 时间戳列类型 */
    TimestampColumnType?: string | null;
    /** 指标粒度 */
    Granularity?: number | null;
    /** 指标粒度单位 */
    GranularityType?: string | null;
    /** 基准表 */
    BaseTable?: string | null;
    /** 基准库 */
    BaseDb?: string | null;
    /** 对比列 */
    ComparisonColumn?: string | null;
    /** 对比列类型 */
    ComparisonColumnType?: string | null;
    /** 保护组 */
    ProtectionValue?: string | null;
    /** 正类值 */
    PositiveValue?: string | null;
    /** 数值型特征列 */
    FeatureColumn?: string | null;
    /** 分类型特征列 */
    CategoricalFeatureColumn?: string | null;
    /** 目录 */
    BaseCatalog?: string | null;
  }

  /** 规则组执行结果 */
  interface RuleGroupExecResult {
    /** 规则组执行ID */
    RuleGroupExecId?: number | null;
    /** 规则组ID */
    RuleGroupId?: number | null;
    /** 执行触发类型（1：手动触发， 2：调度事中触发，3：周期调度触发） */
    TriggerType?: number | null;
    /** 执行时间 yyyy-MM-dd HH:mm:ss */
    ExecTime?: string | null;
    /** 执行状态（1.已提交 2.检测中 3.正常 4.异常） */
    Status?: number | null;
    /** 异常规则数 */
    AlarmRuleCount?: number | null;
    /** 总规则数 */
    TotalRuleCount?: number | null;
    /** 源表负责人 */
    TableOwnerName?: string | null;
    /** 源表名称 */
    TableName?: string | null;
    /** 表id */
    TableId?: string | null;
    /** 数据库id */
    DatabaseId?: string | null;
    /** 数据源ID */
    DatasourceId?: string | null;
    /** 有无权限 */
    Permission?: boolean | null;
    /** 执行详情，调度计划或者关联生产任务ID */
    ExecDetail?: string | null;
    /** 实际执行引擎 */
    EngineType?: string | null;
    /** 规则执行结果 */
    RuleExecResultVOList?: RuleExecResult[] | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 本地规则表id */
    RuleGroupTableId?: string | null;
    /** 集群部署类型 */
    ClusterDeployType?: string | null;
    /** 实例id */
    InstanceId?: string | null;
    /** 数据库所属环境，0.未定义，1.生产 2.开发 */
    DsEnvType?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 实例状态 */
    InstanceStatus?: string | null;
    /** 实例运行的开始时间 */
    StartTime?: string | null;
    /** 实例运行的结束时间 */
    FinishTime?: string | null;
    /** 监控名称 */
    RuleGroupName?: string | null;
    /** 判断是否屏蔽监控 0.屏蔽 1.不屏蔽 */
    RuleGroupExist?: string | null;
  }

  /** 规则组执行结果分页 */
  interface RuleGroupExecResultPage {
    /** 记录数 */
    TotalCount?: number | null;
    /** 规则组执行结果 */
    Items?: RuleGroupExecResult[] | null;
  }

  /** 质量规则执行策略 */
  interface RuleGroupExecStrategy {
    /** 规则组Id */
    RuleGroupId?: number | null;
    /** 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测 */
    MonitorType?: number | null;
    /** 计算队列 */
    ExecQueue?: string | null;
    /** 执行资源组ID */
    ExecutorGroupId?: string | null;
    /** 执行资源组名称 */
    ExecutorGroupName?: string | null;
    /** 关联的生产调度任务列表 */
    Tasks?: ProdSchedulerTask[] | null;
    /** 周期开始时间 */
    StartTime?: string | null;
    /** 周期结束时间 */
    EndTime?: string | null;
    /** 调度周期类型 */
    CycleType?: string | null;
    /** 延迟调度时间 */
    DelayTime?: number | null;
    /** 间隔 */
    CycleStep?: number | null;
    /** 时间指定 */
    TaskAction?: string | null;
    /** 运行的执行引擎，不传时会请求该数据源下默认的执行引擎 */
    ExecEngineType?: string | null;
    /** 执行计划 */
    ExecPlan?: string | null;
    /** 规则id */
    RuleId?: number | null;
    /** 规则名称 */
    RuleName?: string | null;
    /** 触发类型 */
    TriggerTypes?: string[] | null;
    /** DLC资源组 */
    DlcGroupName?: string | null;
    /** 任务名称 */
    RuleGroupName?: string | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** schema名称 */
    SchemaName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 数据源id */
    DatasourceId?: string | null;
    /** 任务描述 */
    Description?: string | null;
    /** 时区 */
    ScheduleTimeZone?: string | null;
    /** 任务监控参数 */
    GroupConfig?: RuleGroupConfig | null;
    /** 引擎参数 */
    EngineParam?: string | null;
    /** catalog名称 */
    CatalogName?: string | null;
  }

  /** 规则组分页 */
  interface RuleGroupPage {
    /** 记录数 */
    TotalCount: number | null;
    /** 规则组列表 */
    Items: RuleGroup[] | null;
  }

  /** 规则组调度信息 */
  interface RuleGroupSchedulerInfo {
    /** 规则组ID */
    Id: number | null;
    /** 1:未配置 2:关联生产调度 3:离线周期检测 */
    MonitorType: number | null;
    /** 开始时间 */
    StartTime: string | null;
    /** 结束时间 */
    EndTime: string | null;
    /** 循环类型简写 */
    CycleType: string | null;
    /** 循环步长 */
    CycleStep: number | null;
    /** 循环类型 */
    CycleDesc: string | null;
    /** 离线周期检测下指定时间 */
    TaskAction: string | null;
    /** 离线周期检测下延迟时间 */
    DelayTime: number | null;
    /** 离线周期检测下注册到任务调度的任务ID */
    CycleTaskId: string | null;
    /** 关联生产调度下关联的任务ID */
    AssociateTaskIds: string[] | null;
  }

  /** 数据质量规则组订阅信息 */
  interface RuleGroupSubscribe {
    /** 规则组Id */
    RuleGroupId?: number | null;
    /** 订阅接收人列表 */
    Receivers?: SubscribeReceiver[] | null;
    /** 订阅方式 1.邮件email 2.短信sms */
    SubscribeType?: number[] | null;
    /** 群机器人配置的webhook信息 */
    WebHooks?: SubscribeWebHook[] | null;
    /** 规则Id */
    RuleId?: number | null;
    /** 规则名称 */
    RuleName?: string | null;
    /** 发送对象 */
    AlarmMessageRule?: string | null;
  }

  /** 表绑定规则组信息 */
  interface RuleGroupTable {
    /** 表信息 */
    TableInfo: RuleGroupTableInnerInfo | null;
    /** 规则组调度信息 */
    RuleGroups: RuleGroupSchedulerInfo[] | null;
    /** 订阅者信息 */
    Subscriptions: RuleGroupSubscribe[] | null;
  }

  /** 规则组关联表信息 */
  interface RuleGroupTableInnerInfo {
    /** 表ID */
    TableId: string | null;
    /** 表名称 */
    TableName: string | null;
    /** 实例ID */
    InstanceId: string | null;
    /** 数据源ID */
    DatasourceId: string | null;
    /** 数据源名称 */
    DatasourceName: string | null;
    /** 数据源类型 */
    DatasourceType: number | null;
    /** 数据库ID */
    DatabaseId: string | null;
    /** 数据库名称 */
    DatabaseName: string | null;
    /** 项目ID */
    ProjectId: number | null;
    /** 责任人ID */
    UserId: number | null;
  }

  /** 数据质量规则分页 */
  interface RulePage {
    /** 记录数 */
    TotalCount?: number | null;
    /** 规则列表 */
    Items?: Rule[] | null;
  }

  /** 规则模版 */
  interface RuleTemplate {
    /** 规则模版ID */
    RuleTemplateId?: number;
    /** 规则模版名称 */
    Name?: string;
    /** 规则模版描述 */
    Description?: string;
    /** 模版类型（1：系统模版，2：自定义） */
    Type?: number;
    /** 规则适用的源数据对象类型（1：常量，2：离线表级，3：离线字段级别） */
    SourceObjectType?: number;
    /** 规则适用的源数据对象类型（1：数值，2：字符串） */
    SourceObjectDataType?: number;
    /** 规则模版源侧内容，区分引擎，JSON 结构 */
    SourceContent?: string | null;
    /** 源数据适用类型 */
    SourceEngineTypes?: number[] | null;
    /** 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性） */
    QualityDim?: number | null;
    /** 规则支持的比较方式类型（1：固定值比较，大于、小于，大于等于等 2：波动值比较，绝对值、上升、下降） */
    CompareType?: number | null;
    /** 引用次数 */
    CitationCount?: number | null;
    /** 创建人id */
    UserId?: number | null;
    /** 创建人昵称 */
    UserName?: string | null;
    /** 更新时间yyyy-MM-dd HH:mm:ss */
    UpdateTime?: string | null;
    /** 是否添加where参数 */
    WhereFlag?: boolean | null;
    /** 是否关联多个库表 */
    MultiSourceFlag?: boolean | null;
    /** 自定义模板SQL表达式 */
    SqlExpression?: string | null;
    /** 模版子维度，0.父维度类型,1.一致性: 枚举范围一致性,2.一致性：数值范围一致性,3.一致性：字段数据相关性 */
    SubQualityDim?: number | null;
    /** sql表达式解析对象 */
    ResolvedSqlExpression?: SqlExpression | null;
    /** 支持的数据源类型 */
    DatasourceTypes?: number[] | null;
    /** 创建人IdStr */
    UserIdStr?: string | null;
  }

  /** RuleTemplatePage 结果 */
  interface RuleTemplatePage {
    /** 记录数 */
    TotalCount: number;
    /** 模版列表 */
    Items: RuleTemplate[];
  }

  /** 指定时间窗口实例耗时排行 */
  interface RuntimeInstanceCntTop {
    /** 任务ID */
    TaskId?: string | null;
    /** 1 */
    TaskName?: string | null;
    /** 责任人 */
    InCharge?: string | null;
    /** 任务周期类型 */
    CycleUnit?: string | null;
    /** 实例状态 */
    State?: string | null;
    /** 耗时 */
    RunTime?: number | null;
    /** 实例运行时间 */
    CurRunTime?: string | null;
    /** 等待调度耗时 */
    WaitScheduleTime?: number | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
  }

  /** 集成离线任务实例信息 */
  interface SchedulerTaskInstanceInfo {
    /** 任务id */
    TaskId: string;
    /** 实例运行时间 */
    CurRunDate: string;
  }

  /** 元数据字段信息 */
  interface SchemaDetail {
    /** 列 */
    ColumnKey?: string | null;
    /** 描述 */
    Description?: string | null;
    /** 名称 */
    Name?: string | null;
    /** 类型 */
    Type?: string | null;
  }

  /** 实例统计信息展示 */
  interface ScreenInstanceInfo {
    /** 统计标示 0：全部、1：当前天、2：昨天 */
    CountTag?: number | null;
    /** 总数 */
    TotalNum?: number | null;
    /** 运行中 */
    RunningNum?: number | null;
    /** 等待运行 */
    WaitRunningNum?: number | null;
    /** 等待上游 */
    DependencyNum?: number | null;
    /** 等待事件 */
    WaitEventNum?: string | null;
    /** 正在终止 */
    StoppingNum?: number | null;
    /** 成功 */
    SucceedNum?: number | null;
    /** 失败 */
    FailedNum?: number | null;
    /** 跳过运行总数 */
    SkipRunningNum?: number;
  }

  /** 运维大屏任务展示 */
  interface ScreenTaskInfo {
    /** 统计标示 0：全部、1：当前天、2：昨天 */
    CountTag?: number;
    /** 总数 */
    TotalNum?: number | null;
    /** 运行中 */
    RunningNum?: number | null;
    /** 停止中 */
    StoppingNum?: number | null;
    /** 已停止 */
    StoppedNum?: number | null;
    /** 暂停 */
    FrozenNum?: number | null;
    /** 无效任务数 */
    InvalidNum?: number | null;
    /** 年任务 */
    YearNum?: number | null;
    /** 月任务 */
    MonthNum?: number | null;
    /** 周任务 */
    WeekNum?: number | null;
    /** 天任务 */
    DayNum?: number | null;
    /** 小时任务 */
    HourNum?: number | null;
    /** 分钟任务 */
    MinuteNum?: number | null;
    /** 工作流总数 */
    WorkflowNum?: number;
  }

  /** 开发空间-上传脚本请求 */
  interface ScriptRequestInfo {
    /** 脚本路径项目区1470575647377821696项目，f1目录下：/datastudio/project/1470575647377821696/f1/sql1234.sql个人区：/datastudio/personal/sqlTTT.sql */
    FilePath?: string;
    /** 项目id */
    ProjectId?: string;
    /** 脚本版本 */
    Version?: string;
    /** 操作类型 */
    Operation?: string;
    /** 额外信息 */
    ExtraInfo?: string;
    /** 桶名称 */
    BucketName?: string;
    /** 所属地区 */
    Region?: string;
    /** 文件扩展类型 */
    FileExtensionType?: string;
  }

  /** 表字段信息 */
  interface SearchColumnDocVO {
    /** 字段名称 */
    Name?: string | null;
    /** 字段中文名称 */
    ChineseName?: string | null;
    /** 字段类型 */
    Type?: string | null;
    /** 字段类型长度 */
    Length?: number | null;
    /** 字段类型精度 */
    Precision?: number | null;
    /** 字段类型scale */
    Scale?: number | null;
    /** 字段默认值 */
    DefaultValue?: string | null;
    /** 字段描述 */
    Description?: string | null;
    /** 字段的顺序 */
    Position?: number | null;
    /** 是否为分区字段 */
    IsPartition?: boolean | null;
    /** 列上的索引类型 主键: PRI,唯一索引: UNI,一般索引: MUL */
    ColumnKey?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    ModifiedTime?: string | null;
    /** 字段使用说明 */
    Specification?: string | null;
  }

  /** 查询实例条件 */
  interface SearchCondition {
    /** 查询框架，必选 */
    Instance: SearchConditionInstanceNew;
    /** 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选 */
    Keyword?: string;
    /** 排序顺序（asc，desc） */
    Sort?: string;
    /** 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间） */
    SortCol?: string;
  }

  /** 搜索条件 */
  interface SearchConditionInstanceNew {
    /** 执行空间，可选 "DRY_RUN" */
    ExecutionSpace: string;
    /** 业务产品，可选: <DATA_DEV / DATA_QUALITY / DATA_INTEGRATION，默认DATA_DEV。非空。默认 自身项目 */
    ProductName?: string;
    /** 资源组信息，可选 */
    ResourceGroup?: string;
  }

  /** 查询实例条件(新) */
  interface SearchConditionNew {
    /** 查询框架，必选 */
    Instance: SearchConditionInstanceNew;
    /** 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选 */
    Keyword?: string;
    /** 排序顺序（asc，desc） */
    Sort?: string;
    /** 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间） */
    SortCol?: string;
  }

  /** 血缘列描述 */
  interface SimpleColumnInfo {
    /** 列ID */
    Id: string | null;
    /** 限定名 */
    QualifiedName: string | null;
    /** 列名 */
    ColumnName: string | null;
    /** 列中文名 */
    ColumnNameCn: string | null;
    /** 列类型 */
    ColumnType: string | null;
    /** 列描述 */
    Description: string | null;
    /** 前缀路径 */
    PrefixPath: string | null;
    /** 创建时间 */
    CreateTime: string | null;
    /** 修改时间 */
    ModifyTime: string | null;
    /** 数据源ID */
    DatasourceId: string | null;
    /** 下游数量 */
    DownStreamCount: number | null;
    /** 上游数量 */
    UpStreamCount: number | null;
    /** 关系参数 */
    RelationParams: string | null;
    /** 参数 */
    Params: string | null;
    /** 任务集合 */
    Tasks: string[] | null;
  }

  /** 简单Task信息 */
  interface SimpleTaskInfo {
    /** 任务ID */
    TaskId: string;
    /** 任务名 */
    TaskName: string;
  }

  /** 上游节点字段信息 */
  interface SourceFieldInfo {
    /** 字段名称 */
    FieldName?: string;
    /** 字段类型 */
    FieldType?: string;
    /** 字段别名 */
    Alias?: string;
    /** 字段描述 */
    Comment?: string | null;
  }

  /** 速度值对象 */
  interface SpeedValue {
    /** 带毫秒的时间戳 */
    Time?: number | null;
    /** 无 */
    Speed?: number | null;
  }

  /** 数据质量自定义规则时的sql表达式解析对象 */
  interface SqlExpression {
    /** sql表达式表名 */
    TableExpressions?: SqlExpressionTable[] | null;
    /** sql表达式字段名 */
    ParamExpressions?: string[] | null;
    /** 新增模型检测类系统模板sql中占位符集合 */
    SystemTemplateExpressions?: string[] | null;
  }

  /** 数据质量自定义规则时的sql表达式解析表对象 */
  interface SqlExpressionTable {
    /** sql表达式表名 */
    TableExpression?: string | null;
    /** sql表达式字段名 */
    ColumnExpression?: string[] | null;
  }

  /** 批量运行集成任务配置 */
  interface StartTaskInfo {
    /** 批量运行任务类型，比如START，TIMESTAMP，RESTORE，RESUME等 */
    Event?: string | null;
    /** 任务Id列表 */
    TaskIds?: string[] | null;
    /** 批量运行任务配置，目前仅用与实时集成基于时间位点启动。基于时间位点启动，需要设置一个name=timestamp, value=具体时间戳的RecordField的配置 */
    Config?: RecordField[] | null;
    /** 操作类型 */
    Description?: string | null;
  }

  /** map */
  interface StrToStrMap {
    /** k */
    K?: string | null;
    /** v */
    V?: string | null;
  }

  /** 提交工作流实体 */
  interface SubmitWorkflow {
    /** 被提交的任务id集合 */
    TaskIds: string[] | null;
    /** 执行结果 */
    Result: boolean;
    /** 执行情况备注 */
    ErrorDesc: string | null;
    /** 执行情况id */
    ErrorId: string | null;
  }

  /** 订阅接收人 */
  interface SubscribeReceiver {
    /** 接收人Uin */
    ReceiverUserId?: number | null;
    /** 接收人名称 */
    ReceiverName?: string | null;
    /** 接收人Uin */
    ReceiverUserIdStr?: string | null;
  }

  /** 群机器人订阅配置 */
  interface SubscribeWebHook {
    /** 群机器人类型，当前支持飞书 */
    HookType?: string | null;
    /** 群机器人webhook地址，配置方式参考https://cloud.tencent.com/document/product/1254/70736 */
    HookAddress?: string | null;
  }

  /** 下游任务列表 */
  interface SuccessorTaskInfo {
    /** 任务id */
    TaskId?: string;
    /** 所属工作流id */
    WorkflowId?: string;
    /** 任务名 */
    TaskName?: string;
    /** 层级，0表示当前任务 */
    Layer?: number;
    /** 任务状态 */
    Status?: string;
    /** 任务类型，-1表示跨流任务 */
    TaskTypeId?: number;
    /** 责任人 */
    InCharge?: string;
    /** 项目id */
    ProjectId?: string;
    /** 项目名称 */
    ProjectName?: string;
    /** 所属工作流名称 */
    WorkflowName?: string;
    /** 周期单位 */
    CycleUnit?: string | null;
    /** 调度计划 */
    ScheduleDesc?: string | null;
    /** 任务类型描述 */
    TaskTypeDesc?: string | null;
    /** 当前用户对该资源的权限列表CAN_MANAGE 有修改操作权限NO_PERMISSION 无权限 */
    Privileges?: string[];
  }

  /** 角色对象 */
  interface SystemRole {
    /** 角色id */
    RoleId?: string;
    /** 角色名称 */
    Name?: string | null;
    /** 角色昵称 */
    NameCn?: string | null;
    /** 描述 */
    Description?: string | null;
    /** 角色权限 */
    Privileges?: RolePrivilege[] | null;
    /** 方法路径 */
    MethodPaths?: string[] | null;
    /** 角色类型, 分为System,Tenant,Project,Commercial */
    RoleType?: string | null;
    /** 是否系统默认 */
    SystemInit?: boolean | null;
    /** 自定义参数 */
    Params?: string | null;
  }

  /** Table */
  interface Table {
    /** 1 */
    Column?: ColumnItem[] | null;
    /** 1 */
    Data?: ColumnData[] | null;
  }

  /** 建dlc表所需信息 */
  interface TableBaseInfo {
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 数据表所属数据源名字 */
    DatasourceConnectionName?: string | null;
    /** 表备注 */
    TableComment?: string | null;
    /** 类型 */
    Type?: string | null;
    /** 数据格式类型 */
    TableFormat?: string | null;
    /** 用户昵称 */
    UserAlias?: string | null;
    /** 建表用户ID */
    UserSubUin?: string | null;
    /** 数据治理配置项 */
    GovernPolicy?: DlcDataGovernPolicy | null;
    /** 库数据治理是否关闭，关闭：true，开启：false */
    DbGovernPolicyIsDisable?: string | null;
  }

  /** 表的元数据信息 */
  interface TableBasicInfo {
    /** 表的全局唯一ID */
    TableId?: string | null;
    /** 数据源全局唯一ID */
    DatasourceId?: string | null;
    /** 数据源名 */
    DatasourceName?: string | null;
    /** 数据库ID */
    DatabaseId?: string | null;
    /** 数据库名 */
    DatabaseName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 引擎/存储类型 */
    EngineType?: string | null;
    /** 表类型，视图，外部表等 */
    TableType?: string | null;
    /** 项目Id */
    ProjectId?: string | null;
    /** 所属项目英文名 */
    ProjectName?: string | null;
    /** 所属项目英中文名 */
    ProjectDisplayName?: string | null;
    /** 责任人ID */
    TableOwnerId?: string | null;
    /** 责任人名称 */
    TableOwnerName?: string | null;
    /** 存储位置 */
    StorageLocation?: number | null;
    /** 表描述 */
    Description?: string | null;
    /** 是否分区表，0-全量表 1-分区表 */
    IsPartitionTable?: number | null;
    /** 分区字段list */
    PartitionColumns?: string[] | null;
    /** 存储格式 */
    StorageFormat?: string | null;
    /** 存储量，字节数 */
    StorageSize?: number | null;
    /** 存储量，单位 */
    StorageSizeWithUnit?: string | null;
    /** 累计存储【MB】 */
    TotalSizeMb?: number | null;
    /** 副本数量 */
    ReplicaCount?: number | null;
    /** 文件数 */
    FileCount?: number | null;
    /** 分区总数（包含hive，iceberg） */
    PartitionCount?: number | null;
    /** 分区字段数量（包含hive，iceberg） */
    PartitionFieldCount?: number | null;
    /** 生命周期-分区保留天数【分区保留策略时有效】 */
    PartitionExpireDays?: number | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 存储位置 */
    Location?: string | null;
  }

  /** 规则表变量替换 */
  interface TableConfig {
    /** 数据库Id */
    DatabaseId?: string | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 表Id */
    TableId?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 表Key */
    TableKey?: string | null;
    /** 字段变量 */
    FieldConfig?: FieldConfig[] | null;
  }

  /** 过去七天（不算当天）表的热度值 */
  interface TableHeat {
    /** 表ID */
    TableId: string | null;
    /** 统计日期 */
    DayTime: string | null;
    /** 表热度 */
    Heat: number | null;
    /** 表热度最大值 */
    MaxHeat: number | null;
  }

  /** 元数据表详细信息 */
  interface TableInfo {
    /** 表Id */
    TableId?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 表类型，view/table */
    TableType?: string | null;
    /** 表databaseName */
    OriginDatabaseName?: string | null;
    /** 表schemaName */
    OriginSchemaName?: string | null;
  }

  /** 表血缘节点 */
  interface TableLineage {
    /** 数据源id */
    DatasourceId: string;
    /** 库名称 */
    DatabaseName: string;
    /** 表名称 */
    TableName: string;
    /** catalog值 */
    CatalogName?: string;
    /** schema名称 */
    SchemaName?: string;
    /** 扩展参数 */
    ExtParams?: ExtParam[];
    /** table类型 TABLE｜VIEW */
    TableType?: string;
  }

  /** 表血缘详细信息 */
  interface TableLineageBaseInfo {
    /** 元数据类型 */
    MetastoreType: string | null;
    /** 由中心节点到该节点的路径 */
    PrefixPath: string | null;
    /** 空间id */
    ProjectId?: string | null;
    /** 数据源id */
    DatasourceId?: string | null;
    /** 表id */
    TableId?: string | null;
    /** 表血缘参数 */
    Params?: LineageParamRecord[] | null;
    /** 父节点列表 */
    ParentSet?: string | null;
    /** 子节点列表 */
    ChildSet?: string | null;
    /** 额外参数 */
    ExtParams?: RecordField[] | null;
    /** 血缘id */
    Id?: string | null;
    /** 元数据类型名称 */
    MetastoreTypeName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 表全称 */
    QualifiedName?: string | null;
    /** 血缘下游节点数 */
    DownStreamCount?: number | null;
    /** 血缘上游节点数 */
    UpStreamCount?: number | null;
    /** 血缘描述 */
    Description?: string | null;
    /** 血缘创建时间 */
    CreateTime?: string | null;
    /** 血缘更新时间 */
    ModifyTime?: string | null;
    /** 修改血缘的任务id列表 */
    Tasks?: string[] | null;
  }

  /** 表血缘详细信息 */
  interface TableLineageInfo {
    /** 元数据类型 */
    MetastoreType: string | null;
    /** 空间id */
    ProjectId?: string | null;
    /** 数据源id */
    DatasourceId?: string | null;
    /** 表id */
    TableId?: string | null;
    /** 表血缘参数 */
    Params?: LineageParamRecord[] | null;
    /** 父节点列表 */
    ParentSet?: string | null;
    /** 子节点列表 */
    ChildSet?: string | null;
    /** 额外参数 */
    ExtParams?: RecordField[] | null;
    /** 血缘id */
    Id?: string | null;
    /** 元数据类型名称 */
    MetastoreTypeName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 表全称 */
    QualifiedName?: string | null;
    /** 血缘下游节点数 */
    DownStreamCount?: number | null;
    /** 血缘上游节点数 */
    UpStreamCount?: number | null;
    /** 血缘描述 */
    Description?: string | null;
    /** 由中心节点到该节点的路径 */
    PrefixPath?: string | null;
    /** 血缘创建时间 */
    CreateTime?: string | null;
    /** 血缘更新时间 */
    ModifyTime?: string | null;
    /** 修改血缘的任务id列表 */
    Tasks?: string[] | null;
    /** 模块/应用类型 */
    ChannelType?: string | null;
    /** 展示类型 */
    DisplayType?: string | null;
    /** 表类型 */
    EngineType?: string | null;
    /** 表类型 */
    TableType?: string | null;
    /** datasourceName */
    DatasourceName?: string | null;
    /** DatabaseName */
    DatabaseName?: string | null;
    /** DatabaseId */
    DatabaseId?: string | null;
    /** 数据来源 */
    DataFromType?: string | null;
    /** 采集id */
    CollectJobId?: string | null;
  }

  /** 表血缘关系对 */
  interface TableLineagePair {
    /** 血缘数据来源表 */
    Sources: TableLineage[];
    /** 血缘数据目标表 */
    Target: TableLineage;
  }

  /** 表的元数据信息 */
  interface TableMeta {
    /** 表的全局唯一ID */
    TableId?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 责任人 */
    TableOwnerName?: string | null;
    /** 数据源全局唯一ID */
    DatasourceId?: number | null;
    /** 所属集群名称 */
    ClusterName?: string | null;
    /** 数据源名 */
    DatasourceName?: string | null;
    /** 数据库名 */
    DatabaseName?: string | null;
    /** 表路径 */
    TablePath?: string | null;
    /** 表中文名 */
    TableNameCn?: string | null;
    /** 元数据租户ID */
    MetastoreId?: number | null;
    /** 技术类型，可用值:HIVE,MYSQL,KAFKA, HBASE */
    MetastoreType?: string | null;
    /** 表描述 */
    Description?: string | null;
    /** 列分隔符 */
    ColumnSeparator?: string | null;
    /** 存储格式 */
    StorageFormat?: string | null;
    /** 存储量，字节数 */
    StorageSize?: number | null;
    /** 表类型，如hive MANAGED_TABLE;EXTERNAL_TABLE */
    TableType?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 最近数据变更时间 */
    ModifyTime?: string | null;
    /** 最近DDL变更时间 */
    DdlModifyTime?: string | null;
    /** 数据最后访问时间 */
    LastAccessTime?: string | null;
    /** 所属项目英文名 */
    ProjectName?: string | null;
    /** 所属数据目录id（可能多个） */
    BizCatalogIds?: string[] | null;
    /** 所属数据目录（可能多个） */
    BizCatalogNames?: string[] | null;
    /** true已收藏/false表示未收藏状态 */
    HasFavorite?: boolean | null;
    /** 生命周期 */
    LifeCycleTime?: number | null;
    /** 存储量，已转为适合的单位展示 */
    StorageSizeWithUnit?: string | null;
    /** 数据源引擎的实例ID：如EMR集群实例ID/数据源实例ID */
    InstanceId?: string | null;
    /** 数据来源技术类型：HIVE/MYSQL/HBASE/KAFKA等 */
    TechnologyType?: string | null;
    /** 表英文名 */
    TableNameEn?: string | null;
    /** 项目Id */
    ProjectId?: string | null;
    /** Kafka Topic 分区数 */
    Partitions?: string | null;
    /** Kafka Topic 副本数 */
    ReplicationFactor?: string | null;
    /** 所属项目英中文名 */
    ProjectDisplayName?: string | null;
    /** 数据最后修改时间 */
    DataModifyTime?: string | null;
    /** 集群ID */
    ClusterId?: string | null;
    /** 当前用户是否有管理员权限 */
    HasAdminAuthority?: boolean | null;
    /** 数据源展示名称 */
    DatasourceDisplayName?: string | null;
    /** 数据库ID */
    DatabaseId?: string | null;
    /** 租户下对表的收藏总次数 */
    FavoriteCount?: number | null;
    /** 租户下对表的点赞总次数 */
    LikeCount?: number | null;
    /** true已点赞/false表示未点赞状态 */
    HasLike?: boolean | null;
    /** 表的资产评分 */
    TablePropertyScore?: TablePropertyScore | null;
    /** 表的热度值 */
    TableHeat?: TableHeat | null;
    /** 数据源ownerProjectId */
    OwnerProjectId?: string | null;
    /** 表负责人ID */
    TableOwnerId?: string | null;
    /** 系统源-CLUSTER, DB-自定义源 */
    DataSourceCategory?: string | null;
    /** 表字段信息 */
    Columns?: SearchColumnDocVO[] | null;
    /** 表采集类型TABLE, VIEW, MANAGED_TABLE(Hive管理表), EXTERNAL_TABLE(Hive外部表), VIRTUAL_VIEW(虚拟视图), MATERIALIZED_VIEW(物化视图), LATERAL_VIEW, INDEX_TABLE(索引表), END_SELECT(查询结构), INSTANCE(中间临时表类型(数据血缘)), CDW(CDW表类型) */
    MetaCrawlType?: string | null;
    /** 是否视图 */
    IsView?: boolean | null;
    /** 存储位置 */
    Location?: string | null;
    /** 判断是否是分区表1 是 0否 */
    IsPartitionTable?: number | null;
    /** 分区字段 key */
    PartitionColumns?: string[] | null;
    /** 生命周期-分区保留天数【分区保留策略时有效】 */
    PartitionExpireDays?: number | null;
    /** 表附属信息 */
    TableProperties?: TableMetaProperty[] | null;
    /** 环境，取值 prod或者 dev */
    Environment?: string | null;
    /** 数据库模式 */
    Schema?: string | null;
    /** 关联数据眼信息 */
    CollectDatasourceList?: GovDatasourceInfo[] | null;
    /** 采集任务id */
    CollectJobId?: string | null;
    /** 采集任务名称 */
    CollectJobName?: string | null;
    /** 数据源urn */
    Urn?: string | null;
    /** 是否有修改业务权限 */
    HasBizPermission?: boolean | null;
    /** 引擎侧创建人 */
    OwnerByEngine?: string | null;
    /** 用户无映射账户，请先完成账户映射后再来申请。 */
    ErrorTips?: string | null;
    /** 是否支持select or ddl */
    IfSupportCreateAndDDL?: CreateAndDDLSupport | null;
    /** 资产来源 历史默认值都是CRAWLER */
    DataFromType?: string | null;
    /** 引擎侧责任人 */
    EngineOwner?: string | null;
    /** 数据分层UUID */
    DataLayerUuid?: string | null;
    /** 数据分层名称 */
    DataLayerName?: string | null;
    /** 字段数量 */
    ColumnCount?: number | null;
    /** 权限标记 */
    TablePermissionFlag?: boolean | null;
    /** 资产状态 */
    AssetStatus?: number | null;
    /** 资产等级 */
    AssetLevel?: number | null;
    /** 资产code */
    AssetCode?: string | null;
    /** 审批状态 */
    AssetAuditStatus?: string | null;
    /** 发布时间 */
    PublishedTime?: string | null;
    /** 标签列表 */
    TagInfoList?: LabelTag[] | null;
    /** 标签值选择列表 */
    LabelValueSelections?: LabelValueSelection[] | null;
    /** 命名空间 - 对应TC-Catalog */
    Namespace?: string | null;
    /** Catalog来源 */
    MetaFrom?: string | null;
    /** 引擎侧创建者 */
    EngineCreator?: string | null;
  }

  /** 表附加信息 */
  interface TableMetaProperty {
    /** 属性的key */
    Key?: string | null;
    /** 属性的值 */
    Value?: string | null;
  }

  /** 按表名查询的查询条件 */
  interface TableNameFilter {
    /** 数据源类型 */
    MsType?: string;
    /** 数据源id */
    DatasourceId?: number;
    /** 数据库名称 */
    DatabaseName?: string;
    /** schema */
    SchemaName?: string;
    /** 表名 */
    Name?: string;
  }

  /** 表的分区数据 */
  interface TablePartition {
    /** 分区名称 */
    PartitionName?: string;
    /** 分区记录数 */
    RecordCount?: number;
    /** 分区数据存储大小，字节数 */
    StorageSize?: string;
    /** 分区创建时间 */
    CreateTime?: string;
    /** 分区修改时间 */
    ModifiedTime?: string;
    /** 分区数据存储大小，已转为适合的单位 */
    StorageSizeWithUnit?: string;
    /** 文件数 */
    NumFiles?: number | null;
    /** 平均文件大小 */
    AverageFileSizeWithUnit?: string | null;
  }

  /** 按天更新的表的资产评分 */
  interface TablePropertyScore {
    /** 表ID */
    TableId: string;
    /** 统计日期 */
    DayTime: string;
    /** 表完整性评分 */
    Integrity: number;
    /** 表保障性评分 */
    Safety: number;
    /** 表及时性评分 */
    Timeliness: number;
    /** 表稳定性评分 */
    Stability: number;
    /** 表规范性评分 */
    Normative: number;
    /** 资产评分平均分 */
    Average: number;
  }

  /** 表质量详情 */
  interface TableQualityDetail {
    /** 数据库id */
    DatabaseId?: string | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 表id */
    TableId?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 表责任人ID */
    OwnerUserId?: number | null;
    /** 表责任人名 */
    OwnerUserName?: string | null;
    /** 库得分 */
    DatabaseScore?: number | null;
    /** 表得分 */
    TableScore?: number | null;
    /** 表环比 */
    LastPeriodRatio?: number | null;
    /** 0或者未返回或者null：未定义，1：生产，2：开发 */
    DsEnvType?: number | null;
    /** 模式名称 */
    SchemaName?: string | null;
    /** 规则表 */
    RuleGroupTableId?: string | null;
    /** catalog名称 */
    CatalogName?: string | null;
  }

  /** 表质量分分页结果 */
  interface TableQualityDetailPage {
    /** 总条数 */
    TotalCount: number | null;
    /** 表质量列表 */
    Items: TableQualityDetail[] | null;
  }

  /** 表评分统计信息 */
  interface TableScoreStatisticsInfo {
    /** 等级 1、2、3、4、5 */
    Level: number | null;
    /** 占比 */
    Scale: number | null;
    /** 表数量 */
    TableNumber: number | null;
  }

  /** 基于资产的标签统计信息 */
  interface TagVoteSum {
    /** 标签id */
    TagId: number;
    /** 标签名 */
    TagName: string;
    /** 该表该标签投票次数 */
    VoteSum?: number;
    /** 当前用户对这张表是否加了该标签 true 已添加 false 未添加 */
    Status?: boolean;
    /** 标签描述 */
    TagDesc?: string | null;
    /** 标签值Id */
    TagValueId?: number | null;
    /** 标签值 */
    TagValue?: string | null;
    /** 标签是否已删除 */
    TagIsDeleted?: boolean | null;
    /** 标签值是否已删除 */
    TagValueIsDeleted?: boolean | null;
  }

  /** 任务告警信息 */
  interface TaskAlarmInfo {
    /** 任务ID */
    TaskId: string;
    /** 规则名称 */
    RegularName: string;
    /** 规则状态(0表示关闭，1表示打开) */
    RegularStatus: number;
    /** 告警级别(0表示普通，1表示重要，2表示紧急) */
    AlarmLevel: number;
    /** 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http） */
    AlarmWay: string;
    /** 任务类型(201表示实时，202表示离线) */
    TaskType: number;
    /** ID */
    Id?: string | null;
    /** 规则ID */
    RegularId?: string;
    /** 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停，4写入速度，5读取速度，6读取吞吐，7写入吞吐, 8脏数据字节数，9脏数据条数 */
    AlarmIndicator?: number;
    /** 指标阈值(1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败) */
    TriggerType?: number | null;
    /** 预计的超时时间(分钟级别) */
    EstimatedTime?: number | null;
    /** 告警接收人ID，多个用逗号隔开 */
    AlarmRecipientId?: string;
    /** 项目ID */
    ProjectId?: string | null;
    /** 创建人 */
    Creater?: string | null;
    /** 告警接收人昵称，多个用逗号隔开 */
    AlarmRecipientName?: string | null;
    /** 告警指标描述 */
    AlarmIndicatorDesc?: string | null;
    /** 实时任务告警需要的参数，1是大于2是小于 */
    Operator?: number | null;
    /** 节点id，多个逗号分隔 */
    NodeId?: string | null;
    /** 节点名称，多个逗号分隔 */
    NodeName?: string | null;
    /** 指标列表 */
    AlarmIndicatorInfos?: AlarmIndicatorInfo[] | null;
    /** 告警接收人类型，0指定人员；1任务责任人 */
    AlarmRecipientType?: number | null;
    /** 免打扰时间 */
    QuietPeriods?: QuietPeriod[] | null;
    /** 企业微信群Hook地址，多个hook地址使用,隔开 */
    WeComHook?: string | null;
    /** 最近操作时间 */
    UpdateTime?: string | null;
    /** 最近操作人Uin */
    OperatorUin?: string | null;
    /** 关联任务数 */
    TaskCount?: number | null;
    /** 监控对象类型,1:所有任务,2:指定任务,3:指定责任人 */
    MonitorType?: number | null;
    /** 监控对象列表 */
    MonitorObjectIds?: string[] | null;
    /** 最近一次告警的实例ID */
    LatestAlarmInstanceId?: string | null;
    /** 最近一次告警时间 */
    LatestAlarmTime?: string | null;
    /** 告警规则描述 */
    Description?: string | null;
    /** 飞书群Hook地址，多个hook地址使用,隔开 */
    LarkWebHooks?: string | null;
    /** 钉钉群Hook地址，多个hook地址使用,隔开 */
    DingDingWebHooks?: string | null;
    /** 业务类型, 0-非默认, 1-默认 */
    BusinessType?: number | null;
    /** alarm message rule */
    AlarmMessageRule?: string | null;
    /** 0- wedata, 1-inlong */
    ReportTarget?: number | null;
    /** 告警接收组 */
    AlarmReceiverGroups?: AlarmReceiverGroup[] | null;
    /** 告警接收组标记，0代表历史版本，1代表新版本 */
    AlarmReceiverGroupFlag?: number | null;
  }

  /** 周期单位统计 */
  interface TaskByCycle {
    /** num */
    Number?: number | null;
    /** 周期单位 */
    CycleUnit?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
  }

  /** 状态趋势统计 */
  interface TaskByStatus {
    /** 统计值 */
    CountGroup?: string | null;
    /** 日期 */
    ShowTimeGroup?: string | null;
    /** 状态 */
    Status?: string | null;
    /** 周期单位 */
    CycleUnit?: string | null;
    /** 1 */
    ReportTime?: string;
    /** 1 */
    Count?: number;
  }

  /** 分页数据集 */
  interface TaskCollectionParamDTO {
    /** 总数据条数 */
    TotalCount?: number | null;
    /** 总页数 */
    PageCount?: number | null;
    /** 数据 */
    Items?: TaskFormParams[] | null;
  }

  /** 循环依赖响应体 */
  interface TaskCycleLinkDTO {
    /** 依赖关系唯一标识 */
    Id: string | null;
    /** 上游任务ID */
    TaskFrom: string | null;
    /** 上游任务项目ID */
    TaskFromProjectId: string | null;
    /** 上游任务工作流ID */
    TaskFromWorkflowId: string | null;
    /** 下游任务ID */
    TaskTo: string | null;
    /** 下游任务项目ID */
    TaskToProjectId: string | null;
    /** 下游任务工作流ID */
    TaskToWorkflowId: string | null;
    /** 下游任务基本信息 */
    TaskToInfo: TaskDsDTO | null;
    /** 依赖类型 */
    MainCyclicConfig: string | null;
    /** 依赖偏移类型 */
    SubordinateCyclicConfig: string | null;
    /** 依赖策略 */
    DependencyStrategy: string | null;
    /** 自定义依赖偏移量 */
    Offset: string | null;
    /** 更新人用户ID */
    UpdateUserId: string | null;
    /** 创建人用户ID */
    CreateUserId: string | null;
    /** 租户ID */
    AppId: string | null;
    /** 主账号ID */
    OwnerUserId: string | null;
    /** 创建时间 */
    CreateTime: string | null;
    /** 更新时间 */
    UpdateTime: string | null;
  }

  /** 任务数据库登记项 */
  interface TaskDataRegistryDTO {
    /** 任务id */
    TaskId: string | null;
    /** 任务名称 */
    TaskName: string | null;
    /** 项目id */
    ProjectId: string | null;
    /** 数据源id */
    DatasourceId: string | null;
    /** 数据库名称 */
    DatabaseName: string | null;
    /** 表名称 */
    TableName: string | null;
    /** 库唯一标识 */
    DbGuid: string | null;
    /** 表唯一标识 */
    TableGuid: string | null;
    /** 分区名称 */
    PartitionName: string | null;
    /** 登记项id */
    Id: number | null;
    /** 租户id */
    AppId: string | null;
    /** 输入输出表类型 输入流 UPSTREAM, 输出流 DOWNSTREAM; */
    DataFlowType: string | null;
    /** 创建时间 */
    CreateTime: string | null;
    /** 用户id */
    UserUin: string | null;
    /** 主账号id */
    OwnerUin: string | null;
    /** 扩展信息 */
    Ext: string | null;
    /** 表物理唯一id */
    TablePhysicalId: string | null;
  }

  /** 任务信息 */
  interface TaskDsDTO {
    /** 任务ID */
    TaskId?: string | null;
    /** 虚拟任务标记 */
    VirtualTaskId?: string | null;
    /** 虚拟任务标记 */
    VirtualFlag?: boolean | null;
    /** 任务名 */
    TaskName?: string | null;
    /** 工作流id */
    WorkflowId?: string | null;
    /** 真实工作流id */
    RealWorkflowId?: string | null;
    /** 工作流名称 */
    WorkflowName?: string | null;
    /** 文件夹id */
    FolderId?: string | null;
    /** 文件夹名字 */
    FolderName?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    LastUpdate?: string | null;
    /** 任务状态，取值范围：N 新建Y 运行F 停止O 冻结T 停止中INVALID 已失效 */
    Status?: string | null;
    /** 责任人 */
    InCharge?: string | null;
    /** 责任人用户id */
    InChargeId?: string | null;
    /** 生效日期 */
    StartTime?: string | null;
    /** 结束日期 */
    EndTime?: string | null;
    /** 执行时间左闭区间 */
    ExecutionStartTime?: string | null;
    /** 执行时间右闭区间 */
    ExecutionEndTime?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 项目标识 */
    ProjectIdent?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 周期类型 */
    CycleType?: string | null;
    /** 步长 */
    CycleStep?: number | null;
    /** 对于crontab类型调度配置其为用户输入 对于周期类型调度配置其为系统计算 */
    CrontabExpression?: string | null;
    /** 延时调度 */
    DelayTime?: number | null;
    /** 延时执行时间 */
    StartupTime?: number | null;
    /** 重试等待时间,单位分钟 */
    RetryWait?: number | null;
    /** 是否可重试 */
    Retriable?: number | null;
    /** 调度扩展信息 */
    TaskAction?: string | null;
    /** 运行次数限制 */
    TryLimit?: number | null;
    /** 运行优先级 */
    RunPriority?: number | null;
    /** 任务类型 */
    TaskType?: TaskTypeDsVO | null;
    /** 指定的运行节点 */
    BrokerIp?: string | null;
    /** 集群name */
    ClusterId?: string | null;
    /** 最小数据时间 */
    MinDateTime?: string | null;
    /** 最大数据时间 */
    MaxDateTime?: string | null;
    /** 运行耗时超时时间 */
    ExecutionTTL?: number | null;
    /** 是否自身依赖 是1 否2 并行3 */
    SelfDepend?: string | null;
    /** LeftCoordinate坐标 */
    LeftCoordinate?: number | null;
    /** TopCoordinate坐标 */
    TopCoordinate?: number | null;
    /** TaskExt信息 */
    TaskExt?: TaskExtDsVO | null;
    /** taskExt 导入导出json使用 private Map properties; */
    Properties?: string | null;
    /** 任务备注 */
    Notes?: string | null;
    /** 实例生成策略 T+1 表示当前周期生成上一周期数据时间任务实例 默认T+1 T+0 表示当前周期生成当前周期数据时间任务实例 T-1 * 表示当前周期生成下一周期数据时间任务实例 * * service不做默认策略处理, 下沉到数据初始化默认T+1, service涉及到多个更新task的路径 */
    InstanceInitStrategy?: string | null;
    /** 资源池队列名称 */
    YarnQueue?: string | null;
    /** 任务告警信息 */
    Alarms?: AlarmDsVO[] | null;
    /** alarmDTO 导入导出json使用 */
    Alarm?: string | null;
    /** 任务脚本是否发生变化 */
    ScriptChange?: boolean | null;
    /** 任务版本是否已提交 */
    Submit?: boolean | null;
    /** 最新调度计划变更时间 仅生产态 */
    LastSchedulerCommitTime?: string | null;
    /** 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算 */
    NormalizedJobStartTime?: string | null;
    /** 启动暂停的任务时，选择不补录中间实例，通过此字段来标识从哪个时间开始生成实例 */
    RecoverFreezeStartTime?: string | null;
    /** 源数据源 */
    SourceServer?: string | null;
    /** 目标数据源 */
    TargetServer?: string | null;
    /** 父子节点树 */
    Tasks?: TaskDsDTO[] | null;
    /** 创建者 */
    Creater?: string | null;
    /** 分支，依赖关系，and/or, 默认and */
    DependencyRel?: string | null;
    /** 是否支持工作流依赖 yes / no 默认 no */
    DependencyWorkflow?: string | null;
    /** 支持事件监听器配置导入导出 */
    EventListenerConfig?: string | null;
    /** 支持事件触发器配置导入导出 */
    EventPublisherConfig?: string | null;
    /** 依赖配置 */
    DependencyConfigList?: DependencyConfigDsDTO[] | null;
    /** 任务状态，取值范围：N 新建Y 运行F 停止O 冻结T 停止中INVALID 已失效 */
    VirtualTaskStatus?: string | null;
    /** 回收站还原提示语 */
    RecycleTips?: string | null;
    /** 回收站所属用户 */
    RecycleUser?: string | null;
    /** 新增 或 修改 */
    NewOrUpdate?: string | null;
    /** 任务上游依赖信息 用于发布管理导入导出 */
    Params?: ParameterTaskDsDto[] | null;
    /** 任务上游依赖信息 用于发布管理导入导出 */
    TaskLinkInfo?: TaskLinkDsDTO[] | null;
    /** 导入结果 */
    ImportResult?: boolean | null;
    /** 导入失败原因 */
    ImportErrMsg?: string | null;
    /** 任务内容 全部内容 配置内容 资源内容 */
    ContentType?: string | null;
    /** 是否导入提交运行 */
    TaskAutoSubmit?: boolean | null;
    /** 上层产品 数据质量 / 数据开发 / ... */
    ProductName?: string | null;
    /** 创建者帐号 */
    OwnId?: string | null;
    /** 子账号 */
    UserId?: string | null;
    /** 租户id */
    TenantId?: string | null;
    /** 最后修改的人 */
    UpdateUser?: string | null;
    /** 最后修改时间 */
    UpdateTime?: string | null;
    /** 最后修改的人的ID */
    UpdateUserId?: string | null;
    /** 调度计划 */
    SchedulerDesc?: string | null;
    /** 资源组 */
    ResourceGroup?: string | null;
    /** 版本提交说明 */
    VersionDesc?: string | null;
    /** 编排-删除添加的链接 */
    LinkId?: string | null;
    /** 脚本引用关系 */
    UserFileId?: string | null;
    /** 来源数据源ID */
    SourceServiceId?: string | null;
    /** 来源数据源类型 */
    SourceServiceType?: string | null;
    /** 去向数据源ID */
    TargetServiceId?: string | null;
    /** 去向数据源类型 */
    TargetServiceType?: string | null;
    /** 输入参数 */
    ParamInList?: ParameterTaskInDsDto[] | null;
    /** 输出参数 */
    ParamOutList?: ParameterTaskOutDsDto[] | null;
    /** 任务文件夹id */
    TaskFolderId?: string | null;
    /** 最大尝试次数 */
    MaxRetryAttempts?: number | null;
    /** 资源组名称 */
    ResourceGroupName?: string | null;
    /** 数据源 */
    SourceServiceName?: string | null;
    /** 任务产出登记 */
    TaskRegisterOutputTable?: TaskDataRegistryDTO[] | null;
    /** 循环依赖配置 */
    CycleDependencyConfigList?: TaskCycleLinkDTO[] | null;
    /** 特殊警告信息 */
    Warning?: string | null;
    /** 0 正常调度 1 空跑调度 */
    ScheduleRunType?: number | null;
    /** 0 并发度达到上限时，本次排队等待 1 并发度达到上限时，本次不执行，直接kill */
    ConcurrentStrategy?: number | null;
    /** UTC+8;UDC-8 */
    ScheduleTimeZone?: string | null;
    /** 引用的代码模版id */
    TemplateId?: string | null;
    /** 允许重跑类 ALL 无论实例成功或者失败，都允许重跑 FAILURE 只有失败的实例允许重跑，成功的实例不允许重跑 NONE 无论成功或者失败，都不允许重跑 */
    AllowRedoType?: string | null;
    /** BundleIdCI/CD工程生成的bundle唯一标识 */
    BundleId?: string | null;
    /** bundle信息 */
    BundleInfo?: string | null;
  }

  /** 属性配置 */
  interface TaskExtDsVO {
    /** 任务ID */
    TaskId?: string | null;
    /** 任务属性 */
    Properties?: ParamInfoDs[] | null;
    /** 任务试运行扩展业务属性 */
    DryRunExtAttributes?: AttributeItemDsVO[] | null;
    /** 任务试运行动态传参 */
    DryRunParameter?: AttributeItemDsVO[] | null;
  }

  /** 任务扩展信息 */
  interface TaskExtInfo {
    /** 键 */
    Key?: string;
    /** 值 */
    Value?: string;
  }

  /** 任务扩展信息 */
  interface TaskExtOpsDto {
    /** 任务ID */
    TaskId?: string | null;
    /** 任务属性（key-value 形式） */
    Properties?: StrToStrMap | null;
    /** 任务试运行-扩展业务属性 */
    DryRunExtAttributes?: AttributeItemOpsDto[] | null;
    /** 任务试运行动态传参 */
    DryRunParameter?: AttributeItemOpsDto[] | null;
  }

  /** 任务参数 */
  interface TaskFormParams {
    /** 任务ID */
    TaskId?: string | null;
    /** 参数值 */
    MapParamList?: ParamMapDsDto[] | null;
    /** 工作流ID */
    WorkflowId?: string | null;
    /** 工作流名称 */
    WorkflowName?: string | null;
    /** 负责人ID */
    InChargeId?: string | null;
    /** 负责人名称 */
    InCharge?: string | null;
    /** 任务名 */
    TaskName?: string | null;
    /** 任务类型普通任务：dev子任务：dev_container */
    ProductName?: string | null;
    /** 如果最新保存版本和调度版本不一致，显示最新保存版本 */
    LatestSavedVersion?: string | null;
    /** 保存版本ID */
    LatestSavedVersionId?: string | null;
  }

  /** 集成任务导入到编排空间配置 */
  interface TaskImportInfo {
    /** 是否导入编排空间 */
    IsImport?: boolean | null;
    /** 是否新建工作流 */
    IsNewWorkFlow?: boolean | null;
    /** 工作流所属目录id */
    WorkFlowFolderId?: string | null;
    /** 工作流所属目录名称 */
    WorkFlowFolderName?: string | null;
    /** 工作流id */
    WorkFlowId?: string | null;
    /** 工作流名称 */
    WorkFlowName?: string | null;
    /** 重名任务处理策略, 0:跳过,不导入; 1: 重命名 */
    TaskNameExistMode?: number | null;
  }

  /** 任务信息 */
  interface TaskInfoVo {
    /** 租户id */
    AppID?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 任务id */
    TaskId?: string | null;
    /** 任务名 */
    TaskName?: string | null;
    /** 任务类型id */
    TaskTypeId?: number | null;
    /** 主账号id */
    OnwerUid?: string | null;
    /** 负责人 */
    InChargeId?: string | null;
    /** 实例id */
    InstanceId?: string | null;
    /** jobId */
    JobId?: string | null;
    /** 引擎类型，DLC、EMR */
    EngineType?: string | null;
    /** 引擎名称。在wedata侧若获取不到引擎名，则是wedata侧自动生成的标识，与集群侧的引擎名有可能不一致 */
    EngineName?: string | null;
    /** 引擎子类型 */
    EngineSubType?: string | null;
    /** 引擎taskId，集成任务部分会使用资源组的资源运行任务，没有提交到引擎侧，所以没有引擎侧id */
    EngineTaskId?: string | null;
    /** 引擎执行状态，枚举 */
    EngineExeStatus?: string | null;
    /** 引擎执行用户 */
    EngineExeUser?: string | null;
    /** 引擎执行开始时间 */
    EngineExeStartTime?: string | null;
    /** 引擎执行结束时间 */
    EngineExeEndTime?: string | null;
    /** 数据来源,DATA_INTEGRATION、DATA_EXPLORATION、DATA_QUALITY、OM_CENTER等 */
    ProductSource?: string | null;
    /** 集成任务的任务类型，表明是读端还是写端，可选择READ、WRITE */
    IntegrationType?: string | null;
  }

  /** 任务属性 */
  interface TaskInnerInfo {
    /** 任务ID */
    TaskId: string;
    /** 任务名 */
    TaskName?: string;
    /** 工作流id */
    WorkflowId?: string;
    /** 周期类型 0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离 */
    CycleType?: number;
    /** 虚拟任务id */
    VirtualTaskId?: string | null;
    /** 虚拟任务标记 */
    VirtualFlag?: boolean | null;
    /** 真实任务工作流id */
    RealWorkflowId?: string | null;
    /** 步长 */
    CycleStep?: number | null;
    /** 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为 0,3,4。 */
    TaskAction?: string | null;
    /** 分支，依赖关系，and/or, 默认and */
    DependencyRel?: string | null;
    /** 是否支持工作流依赖 yes / no 默认 no */
    DependencyWorkflow?: string | null;
  }

  /** 任务实例状态统计 */
  interface TaskInstanceCountDto {
    /** 成功的实例数 */
    Success: number;
    /** 执行中实例数 */
    Running: number;
    /** 等待中的实例数 */
    Waiting: number;
    /** 等待上游实例数 */
    Depend: number;
    /** 失败实例数 */
    Failed: number;
    /** 永久终止实例数 */
    Stopped: number;
  }

  /** 任务集成信息 */
  interface TaskLineageInfo {
    /** 任务 ID */
    TaskId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 表 URI，格式：dsn.name */
    TableUri?: string | null;
    /** 表方向类型 - 0 - table作为源表 - 1 - table作为目标表 */
    Type?: number | null;
    /** 数据源ID */
    DataSourceId?: number | null;
    /** 数据源类型 */
    DataSourceType?: string | null;
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 模型名称 */
    SchemaName?: string | null;
  }

  /** 任务血缘信息，包括源表和目标表 */
  interface TaskLineageInfoPair {
    /** 表血缘-源表 */
    SourceTable?: TaskLineageInfo | null;
    /** 表血缘-目标表 */
    TargetTable?: TaskLineageInfo | null;
  }

  /** Task Link 信息 */
  interface TaskLinkDsDTO {
    /** TaskTo信息 */
    TaskTo?: string | null;
    /** TaskFrom信息 */
    TaskFrom?: string | null;
    /** LinkType信息 */
    LinkType?: string | null;
    /** key */
    LinkKey?: string | null;
    /** LinkId信息 */
    Id?: string | null;
    /** 责任人 */
    InCharge?: string | null;
    /** 父子任务之间的依赖关系 */
    LinkDependencyType?: string | null;
    /** 父子任务之间依赖偏移量 */
    Offset?: number | null;
    /** 工作流id */
    WorkflowId?: string | null;
    /** 实体任务id */
    RealFromTaskId?: string | null;
    /** 实体任务名 */
    RealFromTaskName?: string | null;
    /** 实体任务所属工作流 */
    RealFromWorkflowId?: string | null;
    /** 实体任务所属工作流名称 */
    RealFromWorkflowName?: string | null;
    /** 实体任务所属项目id */
    RealProjectId?: string | null;
    /** 实体任务所属项目标识 */
    RealProjectIdent?: string | null;
    /** 实体任务所属项目名 */
    RealProjectName?: string | null;
    /** 曲线类型 */
    CurveType?: string | null;
  }

  /** 任务锁的状态 */
  interface TaskLockStatus {
    /** 任务id */
    TaskId: string;
    /** 持锁者 */
    Locker: string;
    /** 当前操作用户是否为持锁者，1表示为持锁者，0表示为不为持锁者 */
    IsLocker: number;
    /** 是否可以抢锁，1表示可以抢锁，0表示不可以抢锁 */
    IsRob: number;
  }

  /** 任务运维详情 */
  interface TaskOpsDto {
    /** 任务ID */
    TaskId: string | null;
    /** 虚拟任务id */
    VirtualTaskId: string | null;
    /** 虚拟任务标记 */
    VirtualFlag: boolean | null;
    /** 任务名 */
    TaskName: string | null;
    /** 工作流id */
    WorkflowId: string | null;
    /** 任务为虚拟任务时，任务所在的真实工作流Id */
    RealWorkflowId: string | null;
    /** 工作流名称 */
    WorkflowName: string | null;
    /** 文件夹id */
    FolderId: string | null;
    /** 文件夹名字 */
    FolderName: string | null;
    /** 创建时间 */
    CreateTime: string | null;
    /** 最近更新时间 */
    LastUpdate: string | null;
    /** 任务状态 */
    Status: string | null;
    /** 责任人 */
    InCharge: string | null;
    /** 责任人用户id */
    InChargeId: string | null;
    /** 调度生效日期 */
    StartTime: string | null;
    /** 调度结束日期 */
    EndTime: string | null;
    /** 执行时间左闭区间 */
    ExecutionStartTime: string | null;
    /** 执行时间右闭区间 */
    ExecutionEndTime: string | null;
    /** 周期类型 */
    CycleType: string | null;
    /** 步长 */
    CycleStep: number | null;
    /** 调度cron表达式 */
    CrontabExpression: string | null;
    /** 延时执行时间，unit=分钟 */
    DelayTime: number | null;
    /** 开始执行时间 */
    StartupTime: number | null;
    /** 重试等待时间, unit=分钟 */
    RetryWait: number | null;
    /** 是否可重试，1 代表可以重试 */
    RetryAble: number | null;
    /** 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4' */
    TaskAction: string | null;
    /** 运行次数限制 */
    TryLimit: number | null;
    /** 运行优先级 */
    RunPriority: number | null;
    /** 任务类型 */
    TaskType: TaskTypeOpsDto | null;
    /** 指定的运行节点 */
    BrokerIp: string | null;
    /** 集群name */
    ClusterId: string | null;
    /** 最小数据时间 */
    MinDateTime: string | null;
    /** 最大数据时间 */
    MaxDateTime: string | null;
    /** 运行耗时超时时间 */
    ExecutionTTL: number | null;
    /** 自依赖类型 */
    SelfDepend: string | null;
    /** 左侧坐标 */
    LeftCoordinate: number | null;
    /** 顶部坐标 */
    TopCoordinate: number | null;
    /** 任务备注 */
    Notes: string | null;
    /** 任务初始化策略 */
    InstanceInitStrategy: string | null;
    /** 计算队列 */
    YarnQueue: string | null;
    /** 最新调度提交时间 */
    LastSchedulerCommitTime: string | null;
    /** 按cron表达式计算的任务开始执行时间 */
    NormalizedJobStartTime: string | null;
    /** 调度计划描述 */
    SchedulerDesc: string | null;
    /** 计算资源组 */
    ResourceGroup: string | null;
    /** 任务创建人 */
    Creator: string | null;
    /** 任务依赖类型 and、or */
    DependencyRel: string | null;
    /** 任务工作流依赖 yes、no */
    DependencyWorkflow: string | null;
    /** 事件监听配置 */
    EventListenerConfig: string | null;
    /** 事件驱动配置 */
    EventPublisherConfig: string | null;
    /** 虚拟任务状态 */
    VirtualTaskStatus: string | null;
    /** 任务依赖边详情 */
    TaskLinkInfo: LinkOpsDto | null;
    /** 任务产品类型 */
    ProductName: string | null;
    /** 项目id */
    ProjectId: string | null;
    /** 项目标识 */
    ProjectIdent: string | null;
    /** 项目名称 */
    ProjectName: string | null;
    /** 主账户userId */
    OwnId: string | null;
    /** 用户userId */
    UserId: string | null;
    /** 租户id */
    TenantId: string | null;
    /** 更新人昵称 */
    UpdateUser: string | null;
    /** 更新时间 */
    UpdateTime: string | null;
    /** 更新人userId */
    UpdateUserId: string | null;
    /** 任务类型id */
    TaskTypeId: number | null;
    /** 任务类型描述 */
    TaskTypeDesc: string | null;
    /** 是否展示工作流 */
    ShowWorkflow: boolean | null;
    /** 首次提交时间 */
    FirstSubmitTime: string | null;
    /** 首次运行时间 */
    FirstRunTime: string | null;
    /** 调度描述 */
    ScheduleDesc: string | null;
    /** 周期 */
    CycleNum: number | null;
    /** 表达式 */
    Crontab: string | null;
    /** 开始日期 */
    StartDate: string | null;
    /** 结束日期 */
    EndDate: string | null;
    /** 周期单位 */
    CycleUnit: string | null;
    /** 初始化策略 */
    InitStrategy: string | null;
    /** 层级 */
    Layer: string | null;
    /** 来源数据源ID */
    SourceServiceId: string | null;
    /** 来源数据源类型 */
    SourceServiceType: string | null;
    /** 目标数据源ID */
    TargetServiceId: string | null;
    /** 目标数据源类型 */
    TargetServiceType: string | null;
    /** 子任务列表 */
    TasksStr: string | null;
    /** 任务版本是否已提交 */
    Submit: boolean | null;
    /** 资源组id */
    ExecutorGroupId?: string | null;
    /** 资源组名称 */
    ExecutorGroupName?: string | null;
    /** 任务扩展信息(目前返沪离线同步的任务详情) */
    TaskExtInfo?: string | null;
    /** 任务绑定的事件信息 */
    EventListenerInfos?: AiOpsEventListenerDTO[] | null;
    /** 脚本信息 */
    ScriptInfo?: AiopsScriptInfo | null;
    /** DLC资源配置 */
    DLCResourceConfig?: AiopsDLCResourceConfigDto | null;
    /** 父任务simple信息 */
    ParentTaskInfos?: AiopsSimpleTaskDto | null;
    /** 资源获取标识 */
    ExtResourceFlag?: ExtResourceFlagDto | null;
    /** 父任务simple信息(新) */
    NewParentTaskInfos?: AiopsSimpleTaskDto[] | null;
    /** 任务自依赖类型：yes： 任务需满足自依赖no：任务无需满足自依赖 */
    SelfWorkFlowDependType?: string | null;
    /** 允许重跑类型，ALL 表示无论实例运行成功还是失败都允许重跑，NONE表示无论成功或者失败都不允许重跑，FAILURE 表示只有运行失败才能重跑 */
    AllowRedoType?: string;
    /** 负责人Id */
    OwnerId?: string | null;
    /** 当前用户对该任务的权限列表， 当前支持CAN_MANAGE : 有权限管理操作 */
    Privileges?: string[];
    /** bundle客户端唯一id */
    BundleId?: string | null;
    /** bundle客户端信息 */
    BundleInfo?: string | null;
    /** 工作流类型 */
    WorkflowType?: string | null;
    /** 任务扩展信息 */
    TaskExtDTO?: TaskExtOpsDto | null;
  }

  /** 任务执行脚本 */
  interface TaskScriptContent {
    /** 脚本内容 base64编码 */
    ScriptContent: string | null;
  }

  /** 任务信息简易版 */
  interface TaskSimpleVo {
    /** 任务id */
    TaskId?: string;
    /** 任务名 */
    TaskName?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 工作流id */
    WorkflowId?: string | null;
    /** 工作流名 */
    WorkflowName?: string | null;
    /** 负责人名 */
    InCharge?: string | null;
    /** 主账号 */
    OwnId?: string | null;
    /** 子账号 */
    UserId?: string | null;
    /** 租户id */
    TenantId?: string | null;
    /** 任务类型 */
    TaskTypeId?: number | null;
  }

  /** 任务提交预校验详细信息 */
  interface TaskSubmitPreCheckDetailInfo {
    /** 任务编号 */
    TaskId?: string | null;
    /** 任务名称 */
    TaskName?: string | null;
    /** 项目编号 */
    ProjectId?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 责任人编号 */
    InChargeId?: string | null;
    /** 责任人名称 */
    InCharge?: string | null;
  }

  /** 任务表粒度指标信息 */
  interface TaskTableMetricInfo {
    /** 数据库名称 */
    DatabaseName?: string | null;
    /** 表名称 */
    TableName?: string | null;
    /** 总记录数 */
    TotalRecordNum?: number | null;
    /** 总字节数 */
    TotalRecordByteNum?: number | null;
    /** 总脏记录数 */
    TotalDirtyRecordNum?: number | null;
    /** Schema名称 */
    SchemaName?: string | null;
    /** topic名称 */
    Topic?: string | null;
    /** Collection名称 */
    Collection?: string | null;
    /** 数据源名称 */
    DataSourceName?: string;
    /** 节点id */
    NodeId?: string;
    /** 逻辑库名 */
    LogicDatabase?: string | null;
    /** 逻辑表名 */
    LogicTable?: string | null;
    /** 逻辑schema名 */
    LogicSchema?: string | null;
    /** 物理表信息 */
    TaskTableMetricInfos?: TaskTableMetricInfo[] | null;
    /** 同步状态，0-未知，1-正常， 2-异常 */
    SyncStatus?: number | null;
    /** Target数据库名称 */
    TargetDatabaseName?: string | null;
    /** Target表名称 */
    TargetTableName?: string | null;
    /** Write总记录数 */
    WriteTotalRecordNum?: number | null;
    /** Write总字节数 */
    WriteTotalRecordByteNum?: string | null;
    /** TargetSchema名称 */
    TargetSchemaName?: string | null;
    /** Targettopic名称 */
    TargetTopic?: string | null;
    /** TargetCollection名称 */
    TargetCollection?: string | null;
    /** 数据源名称 */
    TargetDataSourceName?: string | null;
    /** 节点id */
    TargetNodeId?: string | null;
    /** 读取条数的速度 */
    TotalRecordSpeed?: number | null;
    /** 写入条数的速度 */
    WriteTotalRecordSpeed?: number | null;
    /** 异常原因 */
    ExceptionReason?: string | null;
  }

  /** 任务标签，可用于检索任务的条件 */
  interface TaskTag {
    /** 标签名称 */
    TagName: string;
    /** 标签值列表 */
    TagValues: string[];
  }

  /** TaskTypeCnt */
  interface TaskTypeCnt {
    /** 统计值 */
    Number?: string | null;
    /** 任务类型 */
    TaskType?: string | null;
    /** 类型名称 */
    TypeName?: string | null;
  }

  /** 任务类型 */
  interface TaskTypeDsVO {
    /** 任务类型id */
    TypeId?: number | null;
    /** TypeDesc描述 */
    TypeDesc?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 服务器类型 */
    SourceServerType?: string | null;
    /** 目标服务器类型 */
    TargetServerType?: string | null;
    /** RunJarName名称 */
    RunJarName?: string | null;
    /** Killable参数 */
    KillAble?: number | null;
    /** TypeSort类型 */
    TypeSort?: string | null;
    /** InCharge参数 */
    InCharge?: string | null;
    /** 节点对应任务类型运行上限（暂时不考虑） */
    BrokerParallelism?: number | null;
    /** 每个任务运行上限（暂时不考虑 */
    TaskParallelism?: number | null;
    /** 补录和重跑上限 */
    DoRedoParallelism?: number | null;
    /** 0 为不可创建任务; >0 可创建任务 */
    DowngradePriorityTries?: number | null;
    /** 重试等待时间 */
    RetryWait?: number | null;
    /** 重试次数（在任务属性配置中设置） */
    RetryLimit?: number | null;
    /** DefaultAliveWait参数 */
    DefaultAliveWait?: number | null;
    /** PollingSeconds秒数 */
    PollingSeconds?: number | null;
    /** 参数列表xml */
    ParamList?: string | null;
    /** TaskTypeExts参数 */
    TaskTypeExtension?: TaskTypeExtParamDsVO[] | null;
    /** 对应文件类型 */
    FileType?: string | null;
    /** 是否选择脚本路径 */
    SelectFilePath?: boolean | null;
    /** classpath是否要排除掉common-lib，默认是0不排除 */
    ExcludeCommonLib?: boolean | null;
    /** runner任务完成后需要触发的hook */
    PostHooks?: string | null;
  }

  /** 属性类型扩展 */
  interface TaskTypeExtDsVO {
    /** 类型ID */
    TypeId: number | null;
    /** 属性名 */
    PropName: string | null;
    /** 属性标签(ui展示用) */
    PropLabel: string | null;
    /** 缺省标志 */
    DefaultFlag: number | null;
    /** 可视标志 */
    VisibleFlag: number | null;
    /** 属性描述 */
    PropDesc: string | null;
    /** 排列id */
    RankId: number | null;
    /** 控件类型 */
    InputType: string | null;
    /** 值类型(integer，string) */
    ValueType: string | null;
    /** 缺省值 */
    DefaultValue: string | null;
    /** 候选值列表(，分隔) */
    CandidateValues: string | null;
    /** 是否必填 */
    IsMandatory: number | null;
    /** 最大值 */
    MaxValue: number | null;
    /** 最小值 */
    MinValue: number | null;
    /** 配置等级(1-普通，2-高级，3-管理员) */
    ConfLevel: number | null;
    /** 候选文本列表(，分隔) */
    CandidateTexts: string | null;
    /** 复制时是否需要修改 */
    CopyKey: number | null;
    /** 字段正则表达式校验 */
    Regex: string | null;
    /** 字段正则表达式校验证提示tip */
    Tip: string | null;
    /** 可选值 */
    Candidates?: CandidateDsDTo[] | null;
  }

  /** TaskTypeExts参数 */
  interface TaskTypeExtParamDsVO {
    /** TaskTypeExts的Key */
    TaskTypeExtKey?: string | null;
    /** TaskTypeExts的Value */
    TaskTypeExtValue?: TaskTypeExtDsVO | null;
  }

  /** 任务类型map */
  interface TaskTypeMap {
    /** key */
    Key?: number;
    /** value */
    Value?: string;
  }

  /** 任务类型基本信息 */
  interface TaskTypeOpsDto {
    /** 任务类型描述 */
    TypeDesc?: string | null;
    /** 任务类型id */
    TypeId?: number | null;
    /** 任务类型归类 */
    TypeSort?: string | null;
  }

  /** TaskVersionVO */
  interface TaskVersionDsDTO {
    /** 版本ID */
    VersionId?: string | null;
    /** 任务id */
    TaskId?: string | null;
    /** 版本号 */
    VersionNum?: string | null;
    /** 版本备注 */
    VersionRemark?: string | null;
    /** 版本创建人 */
    Creator?: string | null;
    /** 版本创建时间 */
    CreateTime?: string | null;
    /** 版本更新时间 */
    UpdateTime?: string | null;
    /** 最新调度计划变更时间 生产态存储 */
    LastSchedulerCommitTime?: string | null;
    /** 版本是否正在使用 */
    UsedVersion?: number | null;
    /** 任务信息 */
    TaskInfo?: TaskDsDTO | null;
    /** 任务参数信息 */
    TaskParaInfo?: ParameterTaskDsDto[] | null;
    /** TaskInputParam输入参数 */
    TaskInputParam?: ParameterTaskInDsDto[] | null;
    /** TaskOutputParam输出参数 */
    TaskOutputParam?: ParameterTaskOutDsDto[] | null;
    /** 任务上游依赖信息 */
    TaskLinkInfo?: TaskLinkDsDTO[] | null;
    /** 审批状态 */
    ApproveStatus?: string | null;
    /** 审批人名称 */
    ApproveName?: string | null;
    /** 任务事件绑定 */
    TaskEventPublisher?: EventPublisherDTO[] | null;
    /** 任务产出登记信息 */
    TaskRegisterOutputTable?: TaskDataRegistryDTO[] | null;
    /** 循环依赖信息 */
    TaskCycleLinkInfo?: TaskCycleLinkDTO[] | null;
    /** 事件监听信息 */
    TaskEventListener?: EventListenerDTO[] | null;
    /** 审批时间 */
    ApproveTime?: string | null;
  }

  /** 任务实例基本信息 */
  interface TaskVersionInstance {
    /** 实例版本号 */
    InstanceVersion?: number | null;
    /** 实例描述 */
    VersionDesc?: string | null;
    /** 0, "新增"，1, "修改" */
    ChangeType?: number | null;
    /** 版本提交人UIN */
    SubmitterUin?: string | null;
    /** 提交日期 */
    InstanceDate?: string | null;
    /** 0, "未启用"，1, "启用(生产态)" */
    InstanceStatus?: number | null;
  }

  /** 编排空间试运行记录 */
  interface TestRunningRecord {
    /** 开始时间 */
    StartTime?: string | null;
    /** 结束时间 */
    EndTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 试运行记录id */
    RecordId?: number | null;
    /** 开发侧提交的jobid */
    JobId?: number | null;
    /** 执行平台jobid */
    ExecutionJobId?: string | null;
    /** 试运行记录名称 */
    RecordName?: string | null;
    /** 脚本内容 */
    ScriptContent?: string | null;
    /** 状态 */
    Status?: string | null;
    /** 耗时 */
    TimeCost?: number | null;
    /** 用户uin */
    UserUin?: string | null;
    /** 主账户uin */
    OwnerUin?: string | null;
    /** 子记录信息 */
    SubRecordList?: TestRunningSubRecord[] | null;
    /** 结果或日志地域 */
    Region?: string | null;
    /** 结果或日志桶名 */
    BucketName?: string | null;
    /** 错误信息 */
    ErrorMessage?: string | null;
  }

  /** 试运行子记录 */
  interface TestRunningSubRecord {
    /** 开发时间 */
    StartTime?: string | null;
    /** 结束时间 */
    EndTime?: string | null;
    /** 执行平台执行id */
    ExecutionJobId?: string | null;
    /** 执行平台子执行jobid */
    ExecutionSubJobId?: string | null;
    /** 开发侧提交的jobid */
    JobId?: string | null;
    /** 子记录id */
    DetailId?: number | null;
    /** 试运行记录id */
    RecordId?: number | null;
    /** 脚本内容 */
    ScriptContent?: string | null;
    /** 状态 */
    Status?: string | null;
    /** 耗时 */
    TimeCost?: number | null;
    /** 结果总行数 */
    ResultTotalCount?: number | null;
    /** 预览结果行数 */
    ResultPreviewCount?: number | null;
    /** 结果文件路径 */
    ResultFilePath?: string | null;
    /** 预览结果文件路径 */
    ResultPreviewFilePath?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 序号 */
    Sequence?: string | null;
    /** 日志路径 */
    LogFilePath?: string | null;
    /** 是否包含子结果 */
    HasSubResultSet?: boolean | null;
  }

  /** 数据质量阈值 */
  interface ThresholdValue {
    /** 阈值类型 1.低阈值 2.高阈值 3.普通阈值 4.枚举值 */
    ValueType?: number | null;
    /** 阈值 */
    Value?: string | null;
  }

  /** 质量概览表排行结果 */
  interface TopTableStat {
    /** 告警表列表 */
    AlarmTables: TopTableStatItem[];
    /** 阻塞表列表 */
    PipelineTables: TopTableStatItem[];
  }

  /** 质量概览表排行元素 */
  interface TopTableStatItem {
    /** 表Id */
    TableId: string;
    /** 表名 */
    TableName: string | null;
    /** 数 */
    Cnt: number;
  }

  /** 资源管理-上传资源请求 */
  interface UploadResourceRequestInfo {
    /** 项目id */
    ProjectId: string;
    /** 资源路径 */
    FilePath: string;
    /** 桶名称 */
    BucketName: string;
    /** 所属地区 */
    Region: string;
    /** 是否为新资源 */
    NewFile: boolean;
    /** 资源列表 */
    FileList?: string[];
    /** 资源大小列表 */
    FileSizeList?: string[];
    /** File Md5（适配私有化，公有云可以不传） */
    FileMd5?: string;
    /** 资源在对象存储上的实际路径 */
    RemotePath?: string;
  }

  /** 用户文件信息 */
  interface UserFileDTONew {
    /** 资源ID */
    ResourceId?: string | null;
    /** 文件名 */
    FileName?: string | null;
    /** 文件类型，如 jar zip 等 */
    FileExtensionType?: string | null;
    /** 文件上传类型，资源管理为 resource */
    Type?: string | null;
    /** 文件MD5值 */
    Md5Value?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 文件大小，单位为字节 */
    Size?: number | null;
    /** 本地路径 */
    LocalPath?: string | null;
    /** 本地临时路径 */
    LocalTempPath?: string | null;
    /** 远程路径 */
    RemotePath?: string | null;
    /** 文件拥有者名字 */
    OwnerName?: string | null;
    /** 文件拥有者uin */
    Owner?: string | null;
    /** 文件深度 */
    PathDepth?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** 附加信息 */
    ExtraInfo?: string | null;
    /** 本地临时压缩文件绝对路径 */
    ZipPath?: string | null;
    /** 文件所属存储桶 */
    Bucket?: string | null;
    /** 文件所属存储桶的地域 */
    Region?: string | null;
    /** 删除用户名称 */
    DeleteName?: string | null;
    /** 删除用户id */
    DeleteOwner?: string | null;
    /** 操作者id */
    Operator?: string | null;
    /** 操作者名称 */
    OperatorName?: string | null;
    /** 全路径 */
    FullPath?: string | null;
  }

  /** 开发空间-获取数据开发脚本信息响应体 */
  interface UserFileInfo {
    /** 资源ID */
    ResourceId?: string | null;
    /** 文件名 */
    FileName?: string | null;
    /** 文件类型，如 jar zip 等 */
    FileExtensionType?: string | null;
    /** 文件上传类型，资源管理为 resource */
    Type?: string | null;
    /** 文件MD5值 */
    Md5Value?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 文件大小，单位为字节 */
    Size?: number | null;
    /** 本地路径 */
    LocalPath?: string | null;
    /** 本地临时路径 */
    LocalTempPath?: string | null;
    /** 远程路径 */
    RemotePath?: string | null;
    /** 文件拥有者名字 */
    OwnerName?: string | null;
    /** 文件拥有者uin */
    Owner?: string | null;
    /** 文件深度 */
    PathDepth?: number | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** 附加信息 */
    ExtraInfo?: ParamInfo[] | null;
    /** 本地临时压缩文件绝对路径 */
    ZipPath?: string | null;
    /** 文件所属存储桶 */
    Bucket?: string | null;
    /** 文件所属存储桶的地域 */
    Region?: string | null;
    /** 无 */
    DeleteName?: string | null;
    /** 无 */
    DeleteOwner?: string | null;
    /** 无 */
    Operator?: string | null;
    /** 无 */
    OperatorName?: string | null;
    /** 附加信息 base64编码 */
    EncodeExtraInfo?: string | null;
  }

  /** 权重信息 */
  interface WeightInfo {
    /** 权重 */
    Weight: number;
    /** 维度类型 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
    QualityDim: number;
  }

  /** 工作流运行信息 */
  interface WorkFlowExecuteDto {
    /** 开始时间 */
    StartTime?: string | null;
    /** 结束时间 */
    EndTime?: string | null;
    /** 工作流运行状态 0：等待运行、1：运行中、2：运行完成、3：运行出错 */
    Status?: number | null;
  }

  /** 分页查询工作流画布运行起止时间 */
  interface WorkFlowExecuteDtoByPage {
    /** 总数 */
    TotalCount?: number | null;
    /** data */
    Items?: WorkFlowExecuteDto[] | null;
    /** 分页大小 */
    PageSize?: number | null;
  }

  /** 工作流信息 */
  interface Workflow {
    /** 工作流id */
    WorkflowId: string;
    /** 责任人 */
    Owner: string | null;
    /** 责任人Id */
    OwnerId: string | null;
    /** 项目id */
    ProjectId: string;
    /** 项目标识 */
    ProjectIdent: string;
    /** 项目名称 */
    ProjectName: string;
    /** 备注 */
    WorkflowDesc: string | null;
    /** 工作流名称 */
    WorkflowName: string;
    /** 所属文件夹id */
    FolderId: string;
    /** 工作流所属用户分组id 若有多个,分号隔开: a;b;c */
    UserGroupId: string | null;
    /** 工作流所属用户分组名称 若有多个,分号隔开: a;b;c */
    UserGroupName: string | null;
  }

  /** 工作流画布详情 */
  interface WorkflowCanvasOpsDto {
    /** 工作流id */
    WorkflowId?: string | null;
    /** 工作流详情描述 */
    WorkflowDesc?: string | null;
    /** 工作流名称 */
    WorkflowName?: string | null;
    /** 所属文件夹id */
    FolderId?: string | null;
    /** 所属文件夹ids */
    FolderIds?: string[] | null;
    /** 任务列表 */
    Tasks?: TaskOpsDto[] | null;
    /** 任务依赖边列表 */
    Links?: LinkOpsDto[] | null;
    /** 工作流所属用户分组id,若有多个分号隔开: a;b;c */
    UserGroupId?: string | null;
    /** 工作流所属用户分组名称,若有多个分号隔开: a;b;c */
    UserGroupName?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 项目标识 */
    ProjectIdent?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 责任人 */
    Owner?: string | null;
    /** 责任人UserId */
    OwnerId?: string | null;
    /** 工作流类型，周期cycle，手动manual */
    WorkflowType?: string | null;
  }

  /** 工作流信息 */
  interface WorkflowDsDTO {
    /** 工作流ID */
    WorkflowId?: string | null;
    /** 责任人 */
    Owner?: string | null;
    /** 责任人ID */
    OwnerId?: string | null;
    /** 项目ID */
    ProjectId?: string | null;
    /** 项目标识 */
    ProjectIdent?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 工作流描述 */
    WorkflowDesc?: string | null;
    /** 工作流名称 */
    WorkflowName?: string | null;
    /** 文件夹ID */
    FolderId?: string | null;
    /** SparkSQL参数 */
    SparkParams?: string | null;
    /** 任务列表 */
    Tasks?: TaskDsDTO[] | null;
    /** 任务链接列表 */
    Links?: TaskLinkDsDTO[] | null;
    /** 参数列表 */
    Params?: ParameterTaskDsDto[] | null;
    /** 工作流类型, 取值示例- cycle 周期工作流- manual 手动工作流 */
    WorkflowType?: string | null;
    /** 最近更新人名称 */
    UpdateUser?: string | null;
    /** 最近更新人id */
    UpdateUserId?: string | null;
    /** BundleId CI/CD工程生成的bundle唯一标识 */
    BundleId?: string | null;
    /** BundleId信息 */
    BundleInfo?: string | null;
  }

  /** 工作流 */
  interface WorkflowExtOpsDto {
    /** 任务数量count */
    TaskCount?: number | null;
    /** 文件名 */
    FolderName?: string | null;
    /** 工作流id */
    WorkFlowId?: string | null;
    /** 责任人 */
    Owner?: string | null;
    /** 责任人userId */
    OwnerId?: string | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 项目标识 */
    ProjectIdent?: string | null;
    /** 项目名称 */
    ProjectName?: string | null;
    /** 工作流描述 */
    WorkFlowDesc?: string | null;
    /** 工作流名称 */
    WorkFlowName?: string | null;
    /** 工作流文件id */
    FolderId?: string | null;
    /** 工作流状态 */
    Status?: string | null;
    /** 工作流创建时间 */
    CreateTime?: string | null;
    /** 最近更新时间 */
    ModifyTime?: string | null;
    /** 最近更新人 */
    ModifyUser?: string | null;
    /** 工作流类型，周期cycle，手动manual */
    WorkflowType?: string | null;
    /** bundle客户端绑定唯一id */
    BundleId?: string;
    /** bundle客户端扩展信息，json格式 */
    BundleInfo?: string;
  }

  /** 用户生产工作流列表分页 */
  interface WorkflowExtOpsDtoPage {
    /** 记录总数 */
    TotalCount?: number | null;
    /** 记录列表 */
    Items?: WorkflowExtOpsDto[] | null;
  }

  /** 工作流调度信息 */
  interface WorkflowScheduleDtoDs {
    /** 项目ID */
    ProjectId?: string | null;
    /** 工作流ID */
    WorkflowId?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 创建人 */
    Creater?: string | null;
    /** 修改时间 */
    ModifyTime?: string | null;
    /** 延迟时间 */
    DelayTime?: number | null;
    /** 启动时间 */
    StartupTime?: number | null;
    /** 任务依赖 */
    SelfDepend?: string | null;
    /** 开始时间 */
    StartTime?: string | null;
    /** 结束时间 */
    EndTime?: string | null;
    /** 指定运行时间 */
    TaskAction?: string | null;
    /** 调度周期时间单位 */
    CycleType?: string | null;
    /** 调度周期 */
    CycleStep?: number | null;
    /** Cron表达式 */
    CrontabExpression?: string | null;
    /** 执行时间左闭区间 */
    ExecutionStartTime?: string | null;
    /** 执行时间右闭区间 */
    ExecutionEndTime?: string | null;
    /** 实例初始化策略 */
    InstanceInitStrategy?: string | null;
    /** 工作流依赖 */
    DependencyWorkflow?: string | null;
    /** 调度计划 */
    SchedulerDesc?: string | null;
    /** 工作流首次提交时间 */
    FirstSubmitTime?: string | null;
    /** 工作流最近提交时间 */
    LatestSubmitTime?: string | null;
    /** 日历调度是否开启 */
    CalendarOpen?: string | null;
    /** 日历调度名称 */
    CalendarName?: string | null;
    /** 日历调度id */
    CalendarId?: string | null;
    /** 时区配置 */
    ScheduleTimeZone?: string | null;
  }

  /** 工作流调度详情 */
  interface WorkflowSchedulerOpsDto {
    /** 创建时间 */
    CreateTime?: string | null;
    /** 创建人 */
    Creator?: string | null;
    /** 修改时间 */
    ModifyTime?: string | null;
    /** 延迟时间, unit=minute */
    DelayTime?: number | null;
    /** 启动时间,unit=minute */
    StartupTime?: number | null;
    /** 任务自依赖类型 */
    SelfDepend?: string | null;
    /** 开始时间 */
    StartTime?: string | null;
    /** 结束时间 */
    EndTime?: string | null;
    /** 指定运行时间, 指定时间：如周一：1 */
    TaskAction?: string | null;
    /** 调度周期类型，时间单位 */
    CycleType?: string | null;
    /** 调度周期，间隔步长 unit=minute */
    CycleStep?: number | null;
    /** 调度cron表达式 */
    CrontabExpression?: string | null;
    /** 执行时间左闭区间 */
    ExecutionStartTime?: string | null;
    /** 执行时间右闭区间 */
    ExecutionEndTime?: string | null;
    /** 任务实例初始化策略 */
    InstanceInitStrategy?: string | null;
    /** 工作流ID */
    WorkflowId?: string | null;
    /** 工作流自依赖 */
    DependencyWorkflow?: string | null;
    /** 调度计划释义 */
    SchedulerDesc?: string | null;
    /** 工作流首次提交时间 */
    FirstSubmitTime?: string | null;
    /** 工作流最近提交时间 */
    LatestSubmitTime?: string | null;
  }

  /** 工作流任务统计 */
  interface WorkflowTaskCountOpsDto {
    /** 工作流任务数 */
    Count?: number | null;
    /** 任务类型维度统计 */
    TypeCount?: PairDto[] | null;
    /** 任务周期类型维度统计 */
    CycleCount?: PairDto[] | null;
  }

  /** 项目扩展信息 */
  interface WorkspaceExt {
    /** 2670965482618679296 */
    ProjectId?: string | null;
    /** metrics */
    Key?: string | null;
    /** json */
    Value?: string | null;
  }

  interface AddProjectUserRoleRequest {
    /** 项目id */
    ProjectId: string;
    /** 用户uin */
    UserIds: string[];
    /** 角色id */
    RoleIds: string[];
  }

  interface AddProjectUserRoleResponse {
    /** 返回数据 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchCreateIntegrationTaskAlarmsRequest {
    /** 任务id */
    TaskIds: string[];
    /** 告警配置信息 */
    TaskAlarmInfo: TaskAlarmInfo;
    /** 项目id */
    ProjectId: string;
  }

  interface BatchCreateIntegrationTaskAlarmsResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number | null;
    /** 操作失败的任务数 */
    FailedCount?: number | null;
    /** 任务总数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchCreateTaskVersionAsyncRequest {
    /** 任务信息 */
    Tasks: BatchCreateTaskVersionDTO[];
    /** 项目ID */
    ProjectId: string;
    /** 是否自动运行 */
    AutoRun?: boolean;
    /** 告警方式:email-邮件;sms-短信;wecom-企业微信 */
    AlarmWays?: string;
    /** 告警对象:1-项目管理员，2-任务责任人 */
    AlarmRecipientTypes?: string;
    /** 是否需要校验父任务已经提交到调度 */
    NeedCheckParentSubmitted?: boolean;
    /** 是否需要补录中间实例 */
    EnableMakeUp?: boolean;
  }

  interface BatchCreateTaskVersionAsyncResponse {
    /** 批量操作返回 */
    Data?: BatchTaskOperateNew | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchDeleteIntegrationTasksRequest {
    /** 任务id */
    TaskIds: string[];
    /** 任务类型，201为实时任务，202为离线任务 */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
    /** 是否删除开发态任务。默认不删除开发态，为 0 不删除 , 为 1 删除 */
    DeleteKFFlag?: number;
    /** 操作名称 */
    Name?: string;
    /** 本次批量操作涉及任务，用于审计 */
    TaskNames?: string[];
  }

  interface BatchDeleteIntegrationTasksResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number | null;
    /** 操作失败的任务数 */
    FailedCount?: number | null;
    /** 任务总数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchDeleteOpsTasksRequest {
    /** 批量删除的任务TaskId */
    TaskIdList: string[];
    /** true : 删除后下游任务可正常运行false：删除后下游任务不可运行 */
    DeleteMode: boolean;
    /** true：通知下游任务责任人false: 不通知下游任务责任人 */
    EnableNotify: boolean;
    /** 项目Id */
    ProjectId: string;
  }

  interface BatchDeleteOpsTasksResponse {
    /** 返回批量操作成功个数、失败个数、操作总数 */
    Data?: BatchOperationOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchForceSuccessIntegrationTaskInstancesRequest {
    /** 实例信息 */
    Instances: SchedulerTaskInstanceInfo[];
    /** 项目id */
    ProjectId: string;
  }

  interface BatchForceSuccessIntegrationTaskInstancesResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number;
    /** 操作失败的任务数 */
    FailedCount?: number;
    /** 任务总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchKillIntegrationTaskInstancesRequest {
    /** 实例信息 */
    Instances: SchedulerTaskInstanceInfo[];
    /** 项目id */
    ProjectId: string;
  }

  interface BatchKillIntegrationTaskInstancesResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number;
    /** 操作失败的任务数 */
    FailedCount?: number;
    /** 任务总数 */
    TotalCount?: number;
    /** 实际传的为taskId */
    TaskNames?: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchMakeUpIntegrationTasksRequest {
    /** 任务id */
    TaskIds: string[];
    /** 任务类型，201为实时任务，202为离线任务 */
    TaskType: number;
    /** 补数据开始时间 */
    StartTime: string;
    /** 补数据结束时间 */
    EndTime: string;
    /** 项目id */
    ProjectId: string;
  }

  interface BatchMakeUpIntegrationTasksResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number;
    /** 操作失败的任务数 */
    FailedCount?: number;
    /** 任务总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchModifyOpsOwnersRequest {
    /** 需要更新责任人的TaskId数组 */
    TaskIdList: string[];
    /** 需要更新的责任人userId信息，多个责任人用;连接 */
    Owners: string;
    /** 项目Id */
    ProjectId: string;
  }

  interface BatchModifyOpsOwnersResponse {
    /** 返回批量操作成功个数、失败个数、操作总数 */
    Data?: BatchOperationOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchRerunIntegrationTaskInstancesRequest {
    /** 实例信息 */
    Instances: SchedulerTaskInstanceInfo[];
    /** 项目id */
    ProjectId: string;
  }

  interface BatchRerunIntegrationTaskInstancesResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number;
    /** 操作失败的任务数 */
    FailedCount?: number;
    /** 任务总数 */
    TotalCount?: number;
    /** 实际传的为taskId */
    TaskNames?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchResumeIntegrationTasksRequest {
    /** 任务id */
    TaskIds: string[];
    /** 任务类型, 201为实时任务，202为离线任务 */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
  }

  interface BatchResumeIntegrationTasksResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number;
    /** 操作失败的任务数 */
    FailedCount?: number;
    /** 任务总数 */
    TotalCount?: number;
    /** 本次批量操作涉及任务，用于审计 */
    TaskNames?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchRunOpsTaskRequest {
    /** 项目id */
    ProjectId: string;
    /** 是否补录中间实例,0不补录;1补录 */
    EnableMakeUp: number;
    /** 任务id列表 */
    Tasks: string[];
  }

  interface BatchRunOpsTaskResponse {
    /** 操作结果 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchStartIntegrationTasksRequest {
    /** 任务类型，201为实时任务，202为离线任务 */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
    /** 任务id */
    TaskIds?: string[];
    /** 批量运行集成任务，目前仅实时集成用到了这个参数 */
    StartTaskInfoSet?: StartTaskInfo[];
  }

  interface BatchStartIntegrationTasksResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number;
    /** 操作失败的任务数 */
    FailedCount?: number;
    /** 任务总数 */
    TotalCount?: number;
    /** 本次批量操作成功任务id，用于审计 */
    TaskNames?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchStopIntegrationTasksRequest {
    /** 任务id */
    TaskIds: string[];
    /** 任务类型，201为实时任务，202为离线任务 */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
  }

  interface BatchStopIntegrationTasksResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number;
    /** 操作失败的任务数 */
    FailedCount?: number;
    /** 任务总数 */
    TotalCount?: number;
    /** 本次批量操作涉及成功任务，用于审计 */
    TaskNames?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchStopOpsTasksRequest {
    /** 批量停止任务的TaskId */
    TaskIdList: string[];
    /** 项目Id */
    ProjectId: string;
    /** 是否终止已生成的实例 */
    KillInstance?: boolean;
    /** 是否异步模式 */
    AsyncMode?: boolean;
  }

  interface BatchStopOpsTasksResponse {
    /** 返回批量操作成功个数、失败个数、操作总数 */
    Data?: BatchOperationOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchStopWorkflowsByIdsRequest {
    /** 工作流id列表 */
    WorkflowIds: string[];
    /** 项目id */
    ProjectId: string;
    /** 是否终止已生成的实例 */
    KillInstance?: boolean;
    /** 是否异步模式 */
    AsyncMode?: boolean;
  }

  interface BatchStopWorkflowsByIdsResponse {
    /** 操作返回结果 */
    Data?: OperationOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchSuspendIntegrationTasksRequest {
    /** 任务id */
    TaskIds: string[];
    /** 任务类型，201为实时任务，202为离线任务 */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
    /** 事件类型(START, STOP, SUSPEND, SUSPEND_WITHOUT_SP,RESUME, COMMIT, TIMESTAMP) */
    Event?: string;
    /** 本次批量操作涉及任务，用于审计 */
    TaskNames?: string[];
  }

  interface BatchSuspendIntegrationTasksResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number;
    /** 操作失败的任务数 */
    FailedCount?: number;
    /** 任务总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BatchUpdateIntegrationTasksRequest {
    /** 任务id */
    TaskIds: string[];
    /** 责任人（多个责任人用小写分号隔开；离线任务传入的是账号名，实时任务传入的是账号id） */
    Incharge: string;
    /** 任务类型 */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
    /** 责任人Id（多个责任人用小写分号隔开） */
    InchargeIds?: string;
    /** 本次批量操作涉及任务，用于审计 */
    TaskNames?: string[];
  }

  interface BatchUpdateIntegrationTasksResponse {
    /** 操作成功的任务数 */
    SuccessCount?: number;
    /** 操作失败的任务数 */
    FailedCount?: number;
    /** 任务总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface BindProjectExecutorResourceRequest {
    /** 执行资源组id */
    ExecutorGroupId: string;
    /** 项目id */
    ProjectId?: string;
    /** 需要绑定项目的资源包id集合，为空则绑定整个资源组 */
    ExecutorResourcePackageIds?: string[];
    /** 可选: 需要绑定的多个项目id, 若申明将带上ProjectId一起绑定 */
    ProjectIdList?: string[];
  }

  interface BindProjectExecutorResourceResponse {
    /** 绑定成功为true，其他为异常信息 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CheckAlarmRegularNameExistRequest {
    /** 项目名称 */
    ProjectId: string;
    /** 规则名称 */
    AlarmRegularName: string;
    /** 任务ID */
    TaskId?: string;
    /** 主键ID */
    Id?: string;
    /** 任务类型:201.实时,202.离线 */
    TaskType?: number;
    /** 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组) */
    MonitorType?: number;
  }

  interface CheckAlarmRegularNameExistResponse {
    /** 是否重名 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CheckIntegrationNodeNameExistsRequest {
    /** 任务ID */
    TaskId: string;
    /** 节点名称 */
    Name: string;
    /** 项目ID */
    ProjectId: string;
    /** 节点ID */
    Id?: number;
  }

  interface CheckIntegrationNodeNameExistsResponse {
    /** 返回true代表存在，返回false代表不存在 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CheckIntegrationTaskNameExistsRequest {
    /** 任务名称 */
    TaskName: string;
    /** 项目ID */
    ProjectId: string;
    /** 任务ID */
    TaskId?: string;
    /** 同步类型1.单表同步，2.解决方案 */
    SyncType?: number;
  }

  interface CheckIntegrationTaskNameExistsResponse {
    /** true表示存在，false表示不存在 */
    Data?: boolean;
    /** 任务名重复类型（0:未重复, 1:开发态重复, 2:生产态重复） */
    ExistsType?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CheckTaskNameExistRequest {
    /** 项目id/工作空间id */
    ProjectId: string;
    /** 任务类型（跟调度传参保持一致27） */
    TypeId: number;
    /** 任务名 */
    TaskName: string;
  }

  interface CheckTaskNameExistResponse {
    /** 结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CommitIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
    /** 0.仅提交，1.立即启动，2.停止线上作业，丢弃作业状态数据，重新启动运行，3.暂停线上作业，保留作业状态数据，继续运行，4.保留作业状态数据，继续运行 */
    CommitType?: number;
    /** 实时任务 201 离线任务 202 默认实时任务 */
    TaskType?: number;
    /** 额外参数 */
    ExtConfig?: RecordField[];
    /** 提交版本描述 */
    VersionDesc?: string;
    /** 提交版本号 */
    InstanceVersion?: number;
    /** 前端操作类型描述 */
    EventDesc?: string;
  }

  interface CommitIntegrationTaskResponse {
    /** 操作成功与否标识 */
    Data?: boolean;
    /** 数据结构 */
    DataDto?: CommitTaskDataDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CommitRuleGroupTaskRequest {
    /** 规则组ID */
    RuleGroupId?: number;
    /** 触发类型 1.手动触发 2.调度事中触发 3.周期调度触发 */
    TriggerType?: number;
    /** 规则配置列表 */
    ExecRuleConfig?: RuleConfig[];
    /** 执行配置 */
    ExecConfig?: RuleExecConfig;
    /** 项目ID */
    ProjectId?: string;
    /** 该规则运行的执行引擎，不传时会请求该数据源下默认的执行引擎 */
    EngineType?: string;
  }

  interface CommitRuleGroupTaskResponse {
    /** 规则组执行id */
    Data?: RuleGroupExecResult | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CosTokenResponse {
    /** token id */
    Id?: string | null;
    /** token内容 */
    Token?: string | null;
    /** 密钥id */
    SecretId?: string | null;
    /** 密钥内容 */
    SecretKey?: string | null;
    /** 响应 */
    Response?: string | null;
    /** 用户uin */
    OwnerUin?: string | null;
    /** 过期时间 */
    ExpiredTime?: number | null;
    /** 创建时间 */
    CreateTime?: number | null;
    /** 更新时间 */
    UpdateTime?: number | null;
    /** 操作者uin */
    OperatorUin?: string | null;
  }

  interface CountOpsInstanceStateRequest {
    /** 任务id */
    TaskId: string;
    /** 项目Id */
    ProjectId: string;
  }

  interface CountOpsInstanceStateResponse {
    /** 任务对应实例的状态统计 */
    Data?: TaskInstanceCountDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateBaseProjectRequest {
    /** 项目信息 */
    Project: BaseProject;
  }

  interface CreateBaseProjectResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateCodeTemplateRequest {
    /** 项目Id */
    ProjectId: string;
    /** 模版名 */
    CodeTemplateName: string;
    /** 30Python，32DLC，50 DLC-PySpark */
    TaskType: number;
    /** 模版描述 */
    CodeTemplateDesc?: string;
    /** 文件夹ID */
    FolderId?: string;
    /** Base64转化的脚本内容 */
    Content?: string;
    /** 代码模板类型 */
    ProductName?: string;
  }

  interface CreateCodeTemplateResponse {
    /** 模版id */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateCodeTemplateVersionRequest {
    /** 模版Id */
    CodeTemplateId: string;
    /** 项目Id */
    ProjectId: string;
    /** 模版关联的任务以及调度参数设置 */
    Tasks?: TaskFormParams[];
    /** 代码模本脚本内置参数 */
    OriginalParams?: string[];
    /** 提交描述 */
    VersionRemark?: string;
    /** true表示：针对新建、已下线状态的任务仅生成开发态保存版本，您可在任务中自行提交到生产。针对调度中、已暂停、已失效的任务生成开发态保存版本并提交到生产（即本次代码模板的改动在调度中生效）； false表示：针对所有状态的任务均仅生成开发态保存版本。 */
    NeedSubmitScheduleForTemplate?: boolean;
  }

  interface CreateCodeTemplateVersionResponse {
    /** 批量操作JobId */
    Data?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateCustomFunctionRequest {
    /** 枚举值：HIVE、SPARK、DLC */
    Type: string;
    /** 枚举值：ANALYSIS(函数)、ENCRYPTION(加密函数)、AGGREGATE(聚合函数)、LOGIC(逻辑函数)、DATE_AND_TIME(日期与时间函数)、MATH(数学函数)、CONVERSION(转换函数)、STRING(字符串函数)、IP_AND_DOMAIN(IP和域名函数)、WINDOW(窗口函数)、OTHER(其他函数) */
    Kind: string;
    /** 函数名称 */
    Name: string;
    /** 集群实例引擎 ID */
    ClusterIdentifier: string;
    /** 数据库名称 */
    DbName?: string;
    /** 项目ID */
    ProjectId?: string;
    /** 函数资源文件类型 */
    FunctionResourceFileType?: string;
  }

  interface CreateCustomFunctionResponse {
    /** 函数唯一标识 */
    FunctionId?: string | null;
    /** 无 */
    ErrorMessage?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDataModelRequest {
    /** 云应用的实例id */
    CloudappId: string;
    /** 用户的子账号id */
    UserId: string;
    /** Wedata数据建模购买参数，包年包月类型单位，年：y，月：m，默认m */
    TimeUnit?: string;
    /** Wedata数据建模购买参数，购买时长，默认1 */
    TimeSpan?: number;
    /** Wedata数据建模购买参数，是否自动续费，是：1，否：0，默认0 */
    AutoRenewFlag?: number;
    /** Wedata数据建模购买参数，标准版：DATA_MODEL_STANDARD，企业版：DATA_MODEL_PRO，默认DATA_MODEL_STANDARD */
    DataModelVersion?: string;
  }

  interface CreateDataModelResponse {
    /** “Wedata数据建模”的实例id */
    Data?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDataSourceRequest {
    /** 数据源名称，在相同SpaceName下，数据源名称不能为空 */
    Name: string;
    /** 数据源类别：绑定引擎、绑定数据库 */
    Category: string;
    /** 数据源类型:枚举值 */
    Type: string;
    /** 归属项目ID */
    OwnerProjectId: string;
    /** 归属项目Name */
    OwnerProjectName: string;
    /** 归属项目Name中文 */
    OwnerProjectIdent: string;
    /** 业务侧数据源的配置信息扩展 */
    BizParams?: string;
    /** 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同 */
    Params?: string;
    /** 数据源描述信息 */
    Description?: string;
    /** 数据源展示名，为了可视化查看 */
    Display?: string;
    /** 若数据源列表为绑定数据库，则为db名称 */
    DatabaseName?: string;
    /** 数据源引擎的实例ID，如CDB实例ID */
    Instance?: string;
    /** 数据源数据源的可见性，1为可见、0为不可见。默认为1 */
    Status?: number;
    /** 数据源所属的业务空间名称 */
    ClusterId?: string;
    /** 是否采集 */
    Collect?: string;
    /** cos桶信息 */
    COSBucket?: string;
    /** cos region */
    COSRegion?: string;
    /** 连接测试结果 */
    ConnectResult?: string;
    /** 开发环境数据源配置 */
    DevelopmentParams?: string;
    /** 新建数据源的项目ID */
    ProjectId?: string;
  }

  interface CreateDataSourceResponse {
    /** 主键ID */
    Data?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateDsFolderRequest {
    /** 项目Id */
    ProjectId: string;
    /** 文件夹名称 */
    FolderName: string;
    /** 父文件夹ID */
    ParentsFolderId?: string;
    /** 文件夹来源 template管理，orchestrationSpace 编排空间 */
    FolderForm?: string;
  }

  interface CreateDsFolderResponse {
    /** 文件夹Id，null则创建失败 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateHiveTableByDDLRequest {
    /** 数据源ID */
    DatasourceId: string;
    /** 数据库 */
    Database: string;
    /** 建hive表ddl的base64编码 */
    DDLSql: string;
    /** 表权限 ，默认为0:项目共享;1:仅个人与管理员 */
    Privilege: number;
    /** 项目ID */
    ProjectId: string;
    /** 目标表类型(HIVE或GBASE) */
    Type: string;
    /** 责任人 */
    Incharge?: string;
    /** schema名称 */
    SchemaName?: string;
    /** 是否异步建表 */
    Async?: boolean;
    /** 数据优化使用的资源 */
    DataOptimizationResource?: string;
    /** 是否开启数据优化 */
    SmartOptimizerWritten?: string;
    /** 数据优化表名 */
    TableName?: string;
    /** 数据优化资源组 */
    ResourceGroupName?: string;
  }

  interface CreateHiveTableByDDLResponse {
    /** 返回表名称，无论是否异步都有值 */
    Data?: string;
    /** 异步任务轮询 id，只有异步才有值 */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateHiveTableRequest {
    /** 数据源id */
    DatasourceId: string;
    /** 数据库名称 */
    Database: string;
    /** base64转码之后的建表语句 */
    DDLSql: string;
    /** 表权限 ，默认为0:项目共享;1:仅个人与管理员 */
    Privilege: number;
    /** 项目Id */
    ProjectId: string;
    /** 数据库类型 */
    Type?: string;
    /** 责任人 */
    Incharge?: string;
    /** 数据优化引擎 */
    DataOptimizationResource?: string;
    /** 是否开启数据优化 */
    SmartOptimizerWritten?: string;
    /** 数据优化针对的表 */
    TableName?: string;
    /** 数据优化资源组 */
    ResourceGroupName?: string;
  }

  interface CreateHiveTableResponse {
    /** 建表是否成功 */
    IsSuccess?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateIntegrationNodeRequest {
    /** 集成节点信息 */
    NodeInfo: IntegrationNodeInfo;
    /** 项目id */
    ProjectId: string;
    /** 任务类型，201为实时任务，202为离线任务 */
    TaskType?: number;
  }

  interface CreateIntegrationNodeResponse {
    /** 节点 */
    Id?: string;
    /** 当前任务id */
    TaskId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateIntegrationTaskRequest {
    /** 任务信息 */
    TaskInfo: IntegrationTaskInfo;
    /** 项目id */
    ProjectId: string;
  }

  interface CreateIntegrationTaskResponse {
    /** 任务id */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateOfflineTaskRequest {
    /** 项目ID */
    ProjectId: string;
    /** 间隔，可选，默认1。非空。默认 1 */
    CycleStep: number;
    /** 延时执行时间，单位分钟 */
    DelayTime: number;
    /** 任务结束数据时间。非空。默认当前时间 */
    EndTime: string;
    /** 备注 */
    Notes: string;
    /** 当前日期 */
    StartTime: string;
    /** 任务名称 */
    TaskName: string;
    /** 跟之前调用调度接口保持一致27 */
    TypeId: number;
    /** 时间指定，如月任务指定1，3号，则填入 1，3。非空。默认 "" 月任务：如具体1，3号则写 "1,3"，指定月末不可和具体号数一起输入，仅能为 "L" */
    TaskAction: string;
    /** 区分画布和表单 */
    TaskMode: string;
    /** 导入编排空间配置 */
    TaskImportInfo?: TaskImportInfo;
  }

  interface CreateOfflineTaskResponse {
    /** 任务ID */
    TaskId?: string | null;
    /** 导入到编排空间的任务id */
    ArrangeSpaceTaskId?: string | null;
    /** 结果 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateOpsMakePlanRequest {
    /** 项目id */
    ProjectId: string;
    /** 补录计划名称 */
    MakeName: string;
    /** 补录任务集合 */
    TaskIdList: string[];
    /** 补录计划日期范围 */
    MakeDatetimeList: CreateMakeDatetimeInfo[];
    /** 项目标识 */
    ProjectIdent?: string;
    /** 补录是否检查父任务状态，默认不检查。不推荐使用，后续会废弃，推荐使用 CheckParentType。 */
    CheckParent?: boolean;
    /** 补录检查父任务类型。取值范围： NONE: 全部不检查 ALL: 检查全部上游父任务 MAKE_SCOPE: 只在（当前补录计划）选中任务中检查 */
    CheckParentType?: string;
    /** 项目名称 */
    ProjectName?: string;
    /** 已弃用。任务自依赖类型：parallel（并行），serial（无序串行），orderly（有序串行） */
    SelfDependence?: string;
    /** 并行度 */
    ParallelNum?: number;
    /** 补录实例生成周期是否和原周期相同，默认为true */
    SameCycle?: boolean;
    /** 补录实例目标周期类型 */
    TargetTaskCycle?: string;
    /** 补录实例目标周期类型指定时间 */
    TargetTaskAction?: number;
    /** 补录实例自定义参数 */
    MapParamList?: StrToStrMap[];
    /** 创建人id */
    CreatorId?: string;
    /** 创建人 */
    Creator?: string;
    /** 补录计划说明 */
    Remark?: string;
    /** 是否使用任务原有自依赖配置，默认为true */
    SameSelfDependType?: boolean;
    /** 补录实例原始周期类型 */
    SourceTaskCycle?: string;
    /** 补录指定的调度资源组（ID） 为空则表示使用任务原有调度执行资源组 */
    SchedulerResourceGroup?: string;
    /** 补录指定的集成资源组（ID） 为空则表示使用任务原有集成执行资源组 */
    IntegrationResourceGroup?: string;
    /** 补录指定的调度资源组名称 为空则表示使用任务原有调度执行资源组 */
    SchedulerResourceGroupName?: string;
    /** 补录指定的集成资源组名称 为空则表示使用任务原有集成执行资源组 */
    IntegrationResourceGroupName?: string;
    /** 补录扩展属性 */
    MakeExtList?: StrToStrMap[];
    /** 补录扩展属性 */
    SameSelfWorkflowDependType?: boolean;
    /** 补录扩展属性 */
    SelfWorkflowDependency?: string;
    /** 任务 TASK； 项目： PROJECT */
    MakeType?: string;
    /** 任务状态 */
    StatusList?: string;
    /** 补录是否跳过事件检查 */
    MakeCheckEventType?: string;
  }

  interface CreateOpsMakePlanResponse {
    /** 结果 */
    Data?: CommonIdOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateRuleRequest {
    /** 项目id */
    ProjectId?: string;
    /** 规则组Id */
    RuleGroupId?: number;
    /** 规则名称 */
    Name?: string;
    /** 数据表ID */
    TableId?: string;
    /** 规则模板列表 */
    RuleTemplateId?: number;
    /** 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL */
    Type?: number;
    /** 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
    QualityDim?: number;
    /** 源字段详细类型，int、string */
    SourceObjectDataTypeName?: string;
    /** 源字段名称 */
    SourceObjectValue?: string;
    /** 检测范围 1.全表 2.条件扫描 */
    ConditionType?: number;
    /** 条件扫描WHERE条件表达式 */
    ConditionExpression?: string;
    /** 自定义SQL */
    CustomSql?: string;
    /** 报警触发条件 */
    CompareRule?: CompareRule;
    /** 报警触发级别 1.低, 2.中, 3.高 */
    AlarmLevel?: number;
    /** 规则描述 */
    Description?: string;
    /** 数据源Id */
    DatasourceId?: string;
    /** 数据库Id */
    DatabaseId?: string;
    /** 目标库Id */
    TargetDatabaseId?: string;
    /** 目标表Id */
    TargetTableId?: string;
    /** 目标过滤条件表达式 */
    TargetConditionExpr?: string;
    /** 源字段与目标字段关联条件on表达式 */
    RelConditionExpr?: string;
    /** 自定义模版sql表达式字段替换参数 */
    FieldConfig?: RuleFieldConfig;
    /** 目标字段名称 CITY */
    TargetObjectValue?: string;
    /** 该规则支持的执行引擎列表 */
    SourceEngineTypes?: number[];
  }

  interface CreateRuleResponse {
    /** 规则 */
    Data?: Rule | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateRuleTemplateRequest {
    /** 模板类型 1.系统模板 2.自定义模板 */
    Type?: number;
    /** 模板名称 */
    Name?: string;
    /** 质量检测维度 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性 */
    QualityDim?: number;
    /** 源端数据对象类型 1.常量 2.离线表级 2.离线字段级 */
    SourceObjectType?: number;
    /** 模板描述 */
    Description?: string;
    /** 源端对应的引擎类型 */
    SourceEngineTypes?: number[];
    /** 是否关联其它库表 */
    MultiSourceFlag?: boolean;
    /** SQL 表达式 */
    SqlExpression?: string;
    /** 项目Id */
    ProjectId?: string;
    /** 是否添加where参数 */
    WhereFlag?: boolean;
  }

  interface CreateRuleTemplateResponse {
    /** 模板Id */
    Data?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateTaskAlarmRegularRequest {
    /** 告警配置信息 */
    TaskAlarmInfo: TaskAlarmInfo;
    /** 项目ID */
    ProjectId: string;
  }

  interface CreateTaskAlarmRegularResponse {
    /** 告警ID */
    AlarmId?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateTaskFolderRequest {
    /** 项目Id */
    ProjectId: string;
    /** 文件夹名称 */
    FolderName: string;
    /** 工作流ID */
    WorkflowId: string;
    /** 父文件夹ID */
    ParentFolderId?: string;
    /** 目录分类，该值必传，枚举值如下：ETL：数据集成EMR：EMRTBDS：TBDSDLC：DLCTDSQL：TDSQLTCHOUSE：TCHOUSEGENERAL：通用TI_ONE：TI-ONE机器学习ACROSS_WORKFLOWS：跨工作流 */
    TaskNodeType?: string;
  }

  interface CreateTaskFolderResponse {
    /** 任务文件夹Id，null则创建失败 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateTaskNewRequest {
    /** 项目Id */
    ProjectId: string;
    /** 工作流id */
    WorkflowId: string;
    /** 任务名 */
    TaskName: string;
    /** 26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce */
    TaskType: number;
    /** （必填参数）指定脚本内容，base64编码 */
    Content: string;
    /** 扩展属性 */
    TaskExt?: TaskExtInfo[];
    /** 产品名称 */
    ProductName?: string;
    /** 任务实例初始化策略 */
    InstanceInitStrategy?: string;
    /** 画布坐标横轴 */
    LeftCoordinate?: number;
    /** 画布坐标纵轴 */
    TopCoordinate?: number;
    /** 工作流目录ID */
    TaskFolderId?: string;
    /** 代码模板ID */
    CodeTemplateId?: string;
  }

  interface CreateTaskNewResponse {
    /** 无 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateTaskRequest {
    /** 项目Id */
    ProjectId: string;
    /** 工作流id */
    WorkflowId: string;
    /** 任务名 */
    TaskName: string;
    /** 26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40TCHouse-P，92MapReduce */
    TaskType: number;
    /** 扩展属性 */
    TaskExt?: TaskExtInfo[];
  }

  interface CreateTaskResponse {
    /** 返回任务Id */
    Data?: CommonId | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateTaskVersionDsRequest {
    /** 任务id */
    Task: BatchCreateTaskVersionDTO;
    /** 是否需要校验父任务已经提交到调度 */
    NeedCheckParentSubmitted: boolean;
    /** 是否自动运行 */
    AutoRun: boolean;
    /** 项目ID */
    ProjectId: string;
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string;
    /** 告警方式:email-邮件;sms-短信;wecom-企业微信 */
    AlarmWays?: string;
    /** 告警对象:1-项目管理员，2-任务责任人 */
    AlarmRecipientTypes?: string;
    /** 是否需要校验循环依赖，默认为 true，如果使用了 CheckTaskCycleLink 和 CheckTaskCycleConfiguration 两个接口校验成功可以传 false，后台服务器不再做校验 */
    EnableCheckTaskCycleLink?: boolean;
    /** 是否需要补录中间实例 */
    EnableMakeUp?: boolean;
  }

  interface CreateTaskVersionDsResponse {
    /** 版本 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateWorkflowDsRequest {
    /** 项目ID */
    ProjectId: string;
    /** 工作流名称 */
    WorkflowName: string;
    /** 文件夹ID */
    FolderId: string;
    /** 工作流描述 */
    WorkflowDesc?: string;
    /** 工作流类型,取值示例- cycle 周期工作流- manual 手动工作流 */
    WorkflowType?: string;
  }

  interface CreateWorkflowDsResponse {
    /** 工作流ID */
    Data?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DagInstancesRequest {
    /** 实例列表 */
    Instances?: InstanceOpsDto[];
    /** 检查父任务类型, true: 检查父任务; false: 不检查父任务 */
    CheckFather?: boolean;
    /** 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子 */
    RerunType?: string;
    /** 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖 */
    DependentWay?: string;
    /** 重跑忽略事件监听与否 */
    SkipEventListening?: boolean;
    /** 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目 */
    SonInstanceType?: string;
    /** 查询条件,当前接口需要把要查询的示例信息放在该字段 */
    SearchCondition?: InstanceApiOpsRequest;
    /** 访问类型 */
    OptType?: string;
    /** 操作者名称 */
    OperatorName?: string;
    /** 操作者id */
    OperatorId?: string;
    /** 项目id */
    ProjectId?: string;
    /** 项目标志 */
    ProjectIdent?: string;
    /** 项目名称 */
    ProjectName?: string;
    /** 索引页码 */
    PageIndex?: number;
    /** 页面大小 */
    PageSize?: number;
    /** 数据总数 */
    Count?: number;
    /** 基础请求信息 */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /** 是否计算总数 */
    IsCount?: boolean;
  }

  interface DagInstancesResponse {
    /** 结果 */
    Data?: CollectionInstanceOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteCodeTemplateRequest {
    /** 项目ID */
    ProjectId: string;
    /** 模版ID */
    CodeTemplateId: string;
  }

  interface DeleteCodeTemplateResponse {
    /** 是否成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteCustomFunctionRequest {
    /** 集群实例 ID */
    ClusterIdentifier?: string;
    /** 函数 ID */
    FunctionId?: string;
    /** 项目ID，必须填 */
    ProjectId?: string;
    /** 函数名称 */
    FunctionName?: string;
    /** 函数类型，HIVE，SPARK，DLC，CDW_POSTGRESQL */
    FunctionType?: string;
    /** 数据库名 */
    DatabaseName?: string;
    /** 模式名 */
    SchemaName?: string;
    /** 函数命令格式 */
    CommandFormat?: string;
  }

  interface DeleteCustomFunctionResponse {
    /** 函数 ID */
    FunctionId?: string | null;
    /** 无 */
    ErrorMessage?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteDataModelRequest {
    /** 云应用的实例id */
    CloudappId: string;
    /** 数据建模的实例id */
    DataModelId: string;
    /** 用户的子账号id */
    UserId: string;
  }

  interface DeleteDataModelResponse {
    /** 是否销毁成功 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteDataSourcesRequest {
    /** id列表 */
    Ids: number[];
    /** 项目id */
    ProjectId?: string;
  }

  interface DeleteDataSourcesResponse {
    /** 是否删除成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteDsFolderRequest {
    /** 项目Id */
    ProjectId: string;
    /** 文件夹ID */
    FolderId: string;
  }

  interface DeleteDsFolderResponse {
    /** true代表删除成功，false代表删除失败 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteFilePathRequest {
    /** 项目ID */
    ProjectId: string;
    /** 资源ID */
    ResourceIds: string[];
    /** 使用状态- true- false */
    UseStatus: string;
    /** 文件路径 */
    FilePaths?: string[];
  }

  interface DeleteFilePathResponse {
    /** 文件列表 */
    UserFileList?: UserFileInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteFileRequest {
    /** 项目id */
    ProjectId: string;
    /** 资源id */
    ResourceId: string;
  }

  interface DeleteFileResponse {
    /** 删除结果 */
    Result?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteIntegrationNodeRequest {
    /** 节点id */
    Id: string;
    /** 项目id */
    ProjectId: string;
  }

  interface DeleteIntegrationNodeResponse {
    /** 删除返回是否成功标识 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
  }

  interface DeleteIntegrationTaskResponse {
    /** 任务删除成功与否标识 */
    Data?: boolean;
    /** 任务删除成功与否标识0表示删除成功1 表示失败，失败原因见 DeleteErrInfo100 表示running or suspend task can't be deleted失败，失败原因也会写到DeleteErrInfo里面 */
    DeleteFlag?: number | null;
    /** 删除失败原因 */
    DeleteErrInfo?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteLinkRequest {
    /** 当前项目Id */
    ProjectId: string;
    /** 边的源节点 */
    TaskFrom: string;
    /** 边的目标节点 */
    TaskTo: string;
    /** 当前工作流Id */
    WorkflowId: string;
    /** 边Id */
    Id: string;
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string;
  }

  interface DeleteLinkResponse {
    /** 是否成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteOfflineTaskRequest {
    /** 操作者name */
    OperatorName: string;
    /** 项目/工作空间id */
    ProjectId: string;
    /** 任务id */
    TaskId: string;
    /** 虚拟任务标记(跟之前调度接口保持一致默认false) */
    VirtualFlag: boolean;
  }

  interface DeleteOfflineTaskResponse {
    /** 结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteProjectParamDsRequest {
    /** 参数名 */
    ParamKey: string;
    /** 项目id */
    ProjectId: string;
  }

  interface DeleteProjectParamDsResponse {
    /** 结果 true 删除成功false 删除失败 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteProjectUsersRequest {
    /** 项目ID */
    ProjectId: string;
    /** 用户ID列表 */
    UserIds: string[];
  }

  interface DeleteProjectUsersResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteResourceFileRequest {
    /** 项目id */
    ProjectId: string;
    /** 资源id */
    ResourceId: string;
  }

  interface DeleteResourceFileResponse {
    /** 资源删除结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteResourceFilesRequest {
    /** 项目id */
    ProjectId: string;
    /** 使用状态， 为ture 判断资源的使用状态，如果使用中则不能删除 */
    UseStatus: boolean;
    /** 资源id列表 */
    ResourceIds?: string[];
    /** 需要删除的资源路径列表 即资源管理中的目录结构 */
    FilePaths?: string[];
  }

  interface DeleteResourceFilesResponse {
    /** 资源批量删除结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteResourceRequest {
    /** 项目ID */
    ProjectId: string;
    /** 资源ID */
    ResourceId: string;
  }

  interface DeleteResourceResponse {
    /** 是否成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteRuleRequest {
    /** 质量规则ID */
    RuleId?: number;
    /** 项目ID */
    ProjectId?: string;
  }

  interface DeleteRuleResponse {
    /** 是否删除成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteRuleTemplateRequest {
    /** 项目Id */
    ProjectId?: string;
    /** 模板Id列表 */
    Ids?: number[];
  }

  interface DeleteRuleTemplateResponse {
    /** 删除成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteTaskAlarmRegularRequest {
    /** 主键ID */
    Id: string;
    /** 项目ID */
    ProjectId: string;
    /** 任务ID */
    TaskId?: string;
    /** 任务类型(201表示实时任务，202表示离线任务) */
    TaskType?: number;
  }

  interface DeleteTaskAlarmRegularResponse {
    /** 删除结果(true表示删除成功，false表示删除失败) */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteTaskDsRequest {
    /** 项目Id */
    ProjectId: string;
    /** 是否删除脚本true：删除false：不删除不传默认false */
    DeleteScript?: boolean;
    /** 任务操作是否消息通知下游任务责任人true：通知false：不通知不传默认false */
    OperateInform?: boolean;
    /** 任务ID和VirtualTaskId选填一个 */
    TaskId?: string;
    /** 虚拟任务id和TaskId选填一个 */
    VirtualTaskId?: string;
    /** 虚拟任务标记true：是虚拟任务false：不是虚拟任务不传默认false */
    VirtualFlag?: boolean;
    /** 任务删除方式true：不针对下游任务实例进行强制失败false：针对下游任务实例进行强制失败不传默认false */
    DeleteMode?: boolean;
  }

  interface DeleteTaskDsResponse {
    /** 是否删除成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteTaskLineageRequest {
    /** 任务信息 */
    Task: LineageTask;
    /** wedata内部任务默认SQL */
    ChannelType: string;
  }

  interface DeleteTaskLineageResponse {
    /** 操作结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteWorkflowByIdRequest {
    /** 工作流id */
    WorkflowId: string;
    /** 项目id */
    ProjectId: string;
    /** 删除后下游任务的处理方式，true:下游任务均正常运行 false:下游任务均运行失败 */
    DeleteMode?: boolean;
    /** 删除任务后是否通知下游任务责任人, true:通知 false:不通知 */
    EnableNotify?: boolean;
  }

  interface DeleteWorkflowByIdResponse {
    /** 删除结果 */
    Data?: OperationOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmEventsRequest {
    /** 项目ID */
    ProjectId: string;
    /** 当前页 */
    PageNumber: number;
    /** 每页记录数 */
    PageSize: number;
    /** 过滤条件(key可以是：AlarmLevel,AlarmIndicator,KeyWord) */
    Filters?: Filter[];
    /** 排序字段（AlarmTime） */
    OrderFields?: OrderField[];
    /** 类型(201表示实时，202表示离线) */
    TaskType?: number;
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
    /** 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组) */
    MonitorType?: number;
  }

  interface DescribeAlarmEventsResponse {
    /** 告警事件列表 */
    AlarmEventInfoList?: AlarmEventInfo[] | null;
    /** 总记录数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAlarmReceiverRequest {
    /** 告警ID */
    AlarmId: string;
    /** 当前页 */
    PageNumber: number;
    /** 每页记录数 */
    PageSize: number;
    /** 项目ID */
    ProjectId: string;
    /** 类型 */
    TaskType?: number;
    /** 告警接收人ID(逗号分隔) */
    AlarmRecipient?: string;
    /** 告警接收人姓名(逗号分隔) */
    AlarmRecipientName?: string;
    /** 告警时间 */
    AlarmTime?: string;
    /** 消息ID */
    MessageId?: string;
    /** 告警记录id */
    RecordId?: number;
    /** 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组) */
    MonitorType?: number;
  }

  interface DescribeAlarmReceiverResponse {
    /** 告警接收人列表 */
    AlarmReceiverInfoList?: AlarmReceiverInfo[] | null;
    /** 总记录数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAllByFolderNewRequest {
    /** 文件夹属性 */
    Folder?: FolderOpsDto;
    /** 工作流列表 */
    Workflows?: WorkflowCanvasOpsDto[];
    /** 目标文件id */
    TargetFolderId?: string;
    /** 关键字 */
    KeyWords?: string;
    /** 父文件id */
    ParentsFolderId?: string;
    /** 拉取文件夹列表 */
    IsAddWorkflow?: string;
    /** 任务状态 */
    TaskStates?: string[];
    /** 搜索类型 */
    FindType?: string;
    /** 访问类型 */
    OptType?: string;
    /** 操作者名称 */
    OperatorName?: string;
    /** 操作者id */
    OperatorId?: string;
    /** 项目id */
    ProjectId?: string;
    /** 项目标志 */
    ProjectIdent?: string;
    /** 项目名称 */
    ProjectName?: string;
    /** 索引页码 */
    PageIndex?: number;
    /** 页面大小 */
    PageSize?: number;
    /** 数据总数 */
    Count?: number;
    /** 基础请求信息 */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /** 是否计算总数 */
    IsCount?: boolean;
  }

  interface DescribeAllByFolderNewResponse {
    /** 结果集 */
    Data?: CollectionFolderOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeApproveListRequest {
    /** 审批分类key */
    ApproveClassification: string;
    /** 分页大小 */
    PageSize: number;
    /** 分页数 */
    PageNumber: number;
    /** 自定义条件查询 */
    Filters?: FilterOptional[];
    /** 排序字段 */
    OrderFields?: OrderFieldOptional[];
  }

  interface DescribeApproveListResponse {
    /** 待审批列表详情 */
    Data?: DescribeApply | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeApproveTypeListRequest {
    /** 类型key */
    Classification: string;
  }

  interface DescribeApproveTypeListResponse {
    /** 获取审批分类列表 */
    Data?: ApproveType[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeBaseBizCatalogsRequest {
  }

  interface DescribeBaseBizCatalogsResponse {
    /** 类目列表 */
    Data?: BizCatalogsInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeBatchOperateTaskRequest {
    /** 项目Id */
    ProjectId: string;
    /** 页码 */
    Page: string;
    /** 页号 */
    Size: string;
    /** 状态列表草稿：'NS'，'N','P','R'运行：''Y'停止：'F'冻结：'O'停止中：'T' */
    StatusList?: string[];
    /** 责任人名列表 */
    OwnerNameList?: string[];
    /** 工作流列表 */
    WorkflowIdList?: string[];
    /** 任务名称搜索 */
    TaskNameFilter?: string;
    /** 任务类型列表 */
    TaskTypeList?: string[];
    /** 文件夹列表 */
    FordIdList?: string[];
    /** 任务Id搜索 */
    TaskIdFilter?: string;
    /** 责任人搜索 */
    OwnerNameFilter?: string;
    /** 排序字段：UpdateTimeCreateTime */
    SortItem?: string;
    /** asc:升序desc:降序 */
    SortType?: string;
    /** 引擎类型列表：三种SparkJobSparkSqlpresto */
    DataEngineList?: string[];
    /** 操作人名 */
    UserId?: string;
    /** 1 */
    OwnerId?: string;
    /** 1 */
    TenantId?: string;
    /** 数据源ID列表 */
    DatasourceIdList?: string[];
    /** 数据源类型列表 */
    DatasourceTypeList?: string[];
    /** 调度单位类型列表 */
    CycleUnitList?: string[];
    /** 是否筛选出可提交的任务 */
    CanSubmit?: boolean;
    /** 返回时间字段需要转换的时区 */
    TimeZone?: string;
    /** 任务最后更新时间最小值，ISO8601格式，如2025-07-16T15:00:00+08:00 */
    MinUpdateTime?: string;
    /** 任务最后更新时间最大值，ISO8601格式，如2025-07-17T15:00:00+08:00 */
    MaxUpdateTime?: string;
  }

  interface DescribeBatchOperateTaskResponse {
    /** 无 */
    Data?: DescribeBatchOperateTaskPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeCodeTemplateDetailRequest {
    /** 项目Id */
    ProjectId: string;
    /** 模版Id */
    CodeTemplateId: string;
    /** 是否需要返回脚本内容，默认false。 */
    NeedReturnScriptContent?: boolean;
  }

  interface DescribeCodeTemplateDetailResponse {
    /** 代码详情 */
    Data?: CodeTemplateDetail | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeColumnLineageRequest {
    /** 查询方向枚举值- INPUT- OUTPUT- BOTH */
    Direction: string;
    /** 字段信息 */
    Data: ColumnLineageInfo;
    /** 单次查询入度 */
    InputDepth?: number;
    /** 单次查询出度 */
    OutputDepth?: number;
    /** 额外参数（传递调用方信息） */
    ExtParams?: RecordField[];
    /** 是否过滤临时表 默认值为true */
    IgnoreTemp?: boolean;
  }

  interface DescribeColumnLineageResponse {
    /** 字段血缘信息 */
    ColumnAggregationLineage?: ColumnAggregationLineage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeColumnsMetaRequest {
    /** 表ID */
    TableId: string;
    /** 页码 */
    PageNumber: number;
    /** 每页大小 */
    PageSize: number;
    /** 过滤器 */
    FilterSet?: Filter[];
    /** 排序字段 */
    OrderFieldSet?: OrderField[];
    /** 是否查询分区字段，默认false */
    IsPartitionQuery?: boolean;
    /** 合规组ID */
    ComplianceId?: number;
  }

  interface DescribeColumnsMetaResponse {
    /** 分页返回的 */
    ColumnMetaSet?: ColumnMeta[] | null;
    /** 总记录数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDataCheckStatRequest {
    /** 项目id */
    ProjectId: string;
    /** 开始时间，时间戳到秒 */
    BeginDate: string;
    /** 结束时间，时间戳到秒 */
    EndDate: string;
  }

  interface DescribeDataCheckStatResponse {
    /** 结果 */
    Data?: DataCheckStat;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDataServicePublishedApiDetailRequest {
    /** 服务Id */
    Id: string;
    /** 项目ID */
    ProjectId: string;
  }

  interface DescribeDataServicePublishedApiDetailResponse {
    /** 服务详情 */
    Data?: DescribeDataServicePublishedApiDetailResp;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDataServicePublishedApiListRequest {
    /** 页码 */
    PageNumber: number;
    /** 每页大小 */
    PageSize: number;
    /** 项目ID */
    ProjectId: string;
    /** 查询参数 */
    Filters?: DataServicePublishedApiListFilter;
    /** 排序配置 */
    OrderFields?: DataServiceRequestListOrder[];
  }

  interface DescribeDataServicePublishedApiListResponse {
    /** 总条数 */
    TotalCount?: number;
    /** 服务列表 */
    DataSet?: DescribeDataServicePublishedApiListResp[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDataSourceInfoListRequest {
    /** 项目id */
    ProjectId: string;
    /** 页码 */
    PageNumber?: number;
    /** 页数 */
    PageSize?: number;
    /** 过滤条件（暂不支持） */
    Filters?: Filter;
    /** 排序配置 */
    OrderFields?: OrderField;
    /** 数据源类型，MYSQL,TENCENT_MYSQL,TDSQL_MYSQL,HIVE,KAFKA,POSTGRE,CDW,ORACLE,SQLSERVER,FTP,HDFS,ICEBERG,HBASE,TDSQL,TDSQLC,SPARK,VIRTUAL,TBASE,DB2,DM,TDENGINE,GAUSSDB,GBASE,IMPALA,ES,TENCENT_ES,S3_DATAINSIGHT,GREENPLUM,PHOENIX,SAP_HANA,SFTP,OCEANBASE,CLICKHOUSE,TCHOUSE_C,KUDU,VERTICA,REDIS,COS,S3,DLC,DORIS,CKAFKA,TDMQ_PULSAR,MONGODB,TENCENT_MONGODB,FTP_FILE,HDFS_FILE,DTS_KAFKA,REST_API,FILE,TIDB,SYBASE,TCHOUSE_X,TDSQL_POSTGRE,TCHOUSE_P,TCHOUSE_D,STARROCKS,EMR_STARROCKS,TBDS_STARROCKS,TRINO,KYUUBI,GDB,INFLUXDB,BIG_QUERY,BLOB,FILESYSTEM,SHAREPOINT,KINGBASEES,HUDI等 */
    Type?: string;
    /** 数据源名称过滤 */
    DatasourceName?: string;
  }

  interface DescribeDataSourceInfoListResponse {
    /** 总条数。 */
    TotalCount?: number;
    /** 数据源信息列表。 */
    DatasourceSet?: DatasourceBaseInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDataSourceListRequest {
    /** 页码 */
    PageNumber?: number;
    /** 返回数量 */
    PageSize?: number;
    /** 排序配置 */
    OrderFields?: OrderField[];
    /** 可选过滤条件，Filter可选配置(参考): "Name": { "type": "string", "description": "数据源名称" }, "Type": { "type": "string", "description": "类型" }, "ClusterId": { "type": "string", "description": "集群id" }, "CategoryId": { "type": "string", "description": "分类，项目或空间id" } */
    Filters?: Filter[];
  }

  interface DescribeDataSourceListResponse {
    /** 数据源列表 */
    Data?: DataSourceInfoPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDatabaseInfoListRequest {
    /** 过滤参数 */
    Filters: Filter[];
    /** 连接类型 */
    ConnectionType: string;
  }

  interface DescribeDatabaseInfoListResponse {
    /** 数据库列表 */
    DatabaseInfo?: DatabaseInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDatabaseMetasRequest {
    /** 过滤字段，projectIds/msTypes/createTime/modifiedTime */
    Filters?: Filter[];
    /** 排序字段，如name */
    OrderFields?: OrderField[];
    /** pagesize */
    PageSize?: number;
    /** pageNumber */
    PageNumber?: number;
  }

  interface DescribeDatabaseMetasResponse {
    /** 无 */
    DatabaseMeta?: DatabaseMeta[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDatasourceRequest {
    /** 对象唯一ID */
    Id: number;
    /** production：生产，development开发 */
    Env?: string;
  }

  interface DescribeDatasourceResponse {
    /** 数据源对象 */
    Data?: DataSourceInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDependOpsTasksRequest {
    /** 任务Id */
    TaskId: string;
    /** 上游/下游层级1-6级 */
    Deep: number;
    /** 1: 表示查询上游节点；0:表示查询下游节点；2：表示查询上游和下游节点 */
    Up: number;
    /** 项目id */
    ProjectId: string;
    /** 任务工作流id */
    WorkflowId: string;
  }

  interface DescribeDependOpsTasksResponse {
    /** 画布任务和链接信息 */
    Data?: OpsTaskCanvasInfoList;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDependTaskListsRequest {
    /** 任务Id列表 */
    TaskIds: string[];
    /** 项目id */
    ProjectId: string;
  }

  interface DescribeDependTaskListsResponse {
    /** 删除结果 */
    Data?: TaskOpsDto[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDimensionScoreRequest {
    /** 统计日期 时间戳 */
    StatisticsDate: number;
    /** 项目id */
    ProjectId: string;
    /** 数据来源id */
    DatasourceId?: string;
    /** 过滤参数 */
    Filters?: Filter[];
  }

  interface DescribeDimensionScoreResponse {
    /** 维度评分 */
    Data?: DimensionScore | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDsFolderTreeRequest {
    /** 项目id */
    ProjectId: string;
    /** 是否一级拉取 true 是 false 否 */
    FirstLevelPull?: boolean;
    /** 文件夹ID */
    FolderId?: string;
    /** 工作流ID */
    WorkflowId?: string;
    /** 关键字搜索 */
    Keyword?: string;
    /** 是否包含工作流 true 是 false 否 */
    IncludeWorkflow?: boolean;
    /** 是否包含任务 true 是 false 否 */
    IncludeTask?: boolean;
    /** 是否包含虚拟任务，当 IncludeTask 为 true 的时候，该参数才生效，默认为 true */
    IncludeVirtualTask?: boolean;
    /** 任务目录id */
    TaskFolderId?: string;
    /** classification.分类展示 catalog.目录展示 */
    DisplayType?: string;
    /** 是否包含任务目录 true 是 false 否 */
    IncludeTaskFolder?: boolean;
    /** 是否使用最新模式展示目录树 */
    NewFolderTreeMode?: boolean;
    /** 节点分类ID */
    TaskNodeId?: string;
    /** 工作流类型, 使用场景: 任务复制,选择工作流. 取值范围- cycle 周期工作流- manual 手动工作流 */
    WorkflowType?: string;
    /** 任务类型id列表 */
    TaskTypeIdList?: number[];
    /** 责任人id列表 */
    InChargeIdList?: string[];
    /** 自身责任人 */
    OnlyMe?: boolean;
    /** 是否包含代码模版 */
    IncludeCodeTemplate?: boolean;
    /** 编排空间 或代码模版 orchestrationSpace 编排空间 template模版管理 */
    FolderForm?: string;
  }

  interface DescribeDsFolderTreeResponse {
    /** 统一树结构返回属性列表 */
    Data?: PathNodeDsVO[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDsParentFolderTreeRequest {
    /** 项目id */
    ProjectId: string;
    /** 文件夹ID */
    FolderId?: string;
    /** 工作流ID */
    WorkflowId?: string;
    /** 任务id */
    TaskId?: string;
    /** 任务展示形式, 示例取值- classification:分类展示- catalog:目录展示 */
    DisplayType?: string;
    /** 是否新模式展示目录树 */
    NewFolderTreeMode?: boolean;
  }

  interface DescribeDsParentFolderTreeResponse {
    /** 统一树结构返回属性列表 */
    Data?: PathNodeDsVO[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDsTaskVersionInfoRequest {
    /** 任务ID */
    TaskId: string;
    /** 版本 */
    TaskVersion: string;
    /** 项目id */
    ProjectId?: string;
  }

  interface DescribeDsTaskVersionInfoResponse {
    /** 任务版本详情信息 */
    Data?: TaskVersionDsDTO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDsTaskVersionListRequest {
    /** 任务ID */
    TaskId: string;
    /** 项目ID */
    ProjectId?: string;
    /** 是否仅返回当前编辑版本 */
    IsOnlyCurrentEditingVersion?: boolean;
    /** 是否仅只返回生产使用版本 */
    IsOnlyProductVersion?: boolean;
  }

  interface DescribeDsTaskVersionListResponse {
    /** 版本列表 */
    Data?: TaskVersionDsDTO[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDutyScheduleDetailsRequest {
    /** 值班表id */
    Id: number;
    /** 查询时间 */
    QueryDate: string;
    /** 扩展字段 */
    Filters?: Filter[];
  }

  interface DescribeDutyScheduleDetailsResponse {
    /** 值班日历信息 */
    Data?: DutyScheduleDetailsInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeDutyScheduleListRequest {
    /** 页码，默认1 */
    PageNumber: number;
    /** 页大小，默认10 */
    PageSize: number;
    /** 值班表名称 */
    Name?: string;
  }

  interface DescribeDutyScheduleListResponse {
    /** 无 */
    Data?: DutySchedule;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEventCasesRequest {
    /** 项目ID */
    ProjectId: string;
    /** 事件实例目录,示例取值:- 已过期: expired- 未过期: consuming- 全部: all */
    Category: string;
    /** 页码 */
    PageNumber: number;
    /** 每页数目 */
    PageSize: number;
    /** 事件名称 */
    EventName?: string;
    /** 事件类型 */
    EventType?: string;
    /** 事件分割类型 */
    EventSubType?: string;
    /** 事件广播类型 */
    EventBroadcastType?: string;
    /** 事件实例状态,示例取值:- 已消费: COMSUMED- 已过期: EXPIRED- 待消费: ACTIVE- 消费中: CONSUMING */
    Status?: string;
    /** 事件实例最小创建时间 */
    CreationTimeStart?: string;
    /** 事件实例最大创建时间 */
    CreationTimeEnd?: string;
    /** 事件实例最小触发时间 */
    EventTriggeredTimeStart?: string;
    /** 事件实例最大触发时间 */
    EventTriggeredTimeEnd?: string;
    /** 事件实例最小消费时间 */
    LogTimeStart?: string;
    /** 事件实例最大消费时间 */
    LogTimeEnd?: string;
    /** 事件实例数据时间 */
    Dimension?: string;
    /** 事件实例有效时间 */
    TimeToLive?: string;
    /** 排序字段 */
    SortItem?: string;
    /** 排序顺序 */
    SortType?: string;
    /** 有效次数 */
    ConsumeCount?: string;
  }

  interface DescribeEventCasesResponse {
    /** 事件实例分页查询结果 */
    Data?: EventCaseAuditLogVOCollection | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEventConsumeTasksRequest {
    /** 事件实例ID */
    EventCaseId: string;
    /** 页码 */
    PageNumber: number;
    /** 每页数目 */
    PageSize: number;
    /** 项目ID */
    ProjectId?: string;
  }

  interface DescribeEventConsumeTasksResponse {
    /** 事件消费任务记录列表 */
    Data?: EventCaseConsumeLogOptDtoCollection | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEventRequest {
    /** 项目ID */
    ProjectId: string;
    /** 事件名称 */
    EventName: string;
  }

  interface DescribeEventResponse {
    /** 事件 */
    Data?: EventOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeExecStrategyRequest {
    /** 规则组Id */
    RuleGroupId?: number;
    /** 项目Id */
    ProjectId?: string;
  }

  interface DescribeExecStrategyResponse {
    /** 规则组执行策略 */
    Data?: RuleGroupExecStrategy | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeExecutorGroupMetricRequest {
    /** 执行资源组id */
    ExecutorGroupId: string;
    /** 使用趋势开始时间(毫秒) */
    TrendStartTime?: number;
    /** 使用趋势结束时间(毫秒) */
    TrendEndTime?: number;
    /** 执行资源组类型 */
    ExecutorGroupType?: string;
    /** 执行资源类型 */
    ExecutorResourceType?: string;
    /** 执行机ID */
    LoaderId?: string;
    /** 指标维度 */
    MetricType?: string;
    /** 指标采集粒度 */
    Granularity?: number;
  }

  interface DescribeExecutorGroupMetricResponse {
    /** 执行组指标信息 */
    Data?: ExecutorResourceGroupInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeFieldBasicInfoRequest {
    /** 分页页码 */
    PageNumber?: number;
    /** 分页大小 */
    PageSize?: number;
    /** 过滤字段 */
    Filters?: Filter[];
    /** 排序字段 */
    OrderFields?: OrderField[];
  }

  interface DescribeFieldBasicInfoResponse {
    /** 字段元数据 */
    ColumnBasicInfoList?: ColumnBasicInfo[] | null;
    /** 总条数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeFolderWorkflowListRequest {
    /** 项目Id */
    ProjectId: string;
    /** 父文件夹ID */
    ParentsFolderId: string;
    /** 关键字 */
    KeyWords?: string;
    /** 页码，默认1 */
    PageNumber?: number;
    /** 页大小，默认10 */
    PageSize?: number;
  }

  interface DescribeFolderWorkflowListResponse {
    /** 无 */
    Data?: DescribeFolderWorkflowListData | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeFormVersionParamRequest {
    /** 项目Id */
    ProjectId: string;
    /** 模版Id */
    CodeTemplateId: string;
    /** 脚本中的参数 */
    OriginalParams?: string[];
    /** 页码 */
    Page?: number;
    /** 页号 */
    Size?: number;
    /** 来源 studio(Studio脚本)/codeTemplate(代码模版) */
    Source?: string;
  }

  interface DescribeFormVersionParamResponse {
    /** 结果集 */
    Data?: TaskCollectionParamDTO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeFunctionKindsRequest {
  }

  interface DescribeFunctionKindsResponse {
    /** 无 */
    Kinds?: FunctionTypeOrKind[] | null;
    /** 无 */
    ErrorMessage?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeFunctionTypesRequest {
  }

  interface DescribeFunctionTypesResponse {
    /** 类型 */
    Types?: FunctionTypeOrKind[] | null;
    /** 错误信息 */
    ErrorMessage?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceByCycleRequest {
    /** 1 */
    ProjectId?: string;
    /** 1 */
    TenantId?: string;
  }

  interface DescribeInstanceByCycleResponse {
    /** 统计结果 */
    Data?: TaskByCycle[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceDetailInfoRequest {
    /** 任务ID */
    TaskId: string;
    /** 实例数据时间 */
    CurRunDate: string;
    /** 项目id */
    ProjectId?: string;
    /** 实例的第几次执行 */
    LifeRound?: number;
    /** 生命周期查询起始index */
    LifeRoundStartIndex?: number;
    /** 生命周期查询批次数量 */
    LifeRoundSize?: number;
    /** 生命周期总数，可省略 */
    TotalLifeRound?: string;
    /** 动态加载日志标识 */
    Dynamic?: boolean;
  }

  interface DescribeInstanceDetailInfoResponse {
    /** 生命周期结果 */
    Data?: InstanceLifeCycleOpsDto[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceLastLogRequest {
    /** 任务id */
    TaskId: string;
    /** 数据时间 */
    CurRunDate: string;
  }

  interface DescribeInstanceLastLogResponse {
    /** 日志 */
    Data?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceListRequest {
    /** 项目/工作空间id */
    ProjectId: string;
    /** 页码 */
    PageIndex: number;
    /** 一页展示的条数 */
    PageSize: number;
    /** 周期列表（如天，一次性），可选 */
    CycleList: string[];
    /** 责任人 */
    OwnerList: string[];
    /** 跟之前保持一致 */
    InstanceType: string;
    /** 排序顺序（asc，desc） */
    Sort: string;
    /** 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间） */
    SortCol: string;
    /** 类型列表（如python任务类型：30pyspark任务类型：31hivesql任务类型：34shell任务类型：35sparksql任务类型：36 jdbcsql任务类型：21 dlc任务类型：32），可选 */
    TaskTypeList: number[];
    /** 状态列表（如成功 2，正在执行 1），可选 */
    StateList: number[];
    /** 任务名称 */
    Keyword?: string;
  }

  interface DescribeInstanceListResponse {
    /** 结果 */
    Data?: string;
    /** 实例列表 */
    InstanceList?: InstanceList[] | null;
    /** 总条数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceLogDetailRequest {
    /** 项目ID */
    ProjectId: string;
    /** 任务id */
    TaskId: string;
    /** 数据时间 */
    CurRunDate: string;
    /** 日志级别，Info/Debug/Warn/Error/All */
    LogLevelType?: string;
    /** 文件类型,Log/Code */
    ExecutionFileType?: string;
    /** 统一执行平台执行id, 注意: ExecutionJobId 跟 "BrokerIp+OriginFileName" 必须有一个不为空 */
    ExecutionJobId?: string;
    /** 服务器Ip, 注意: "BrokerIp+OriginFileName"跟ExecutionJobId必须有一个不为空 */
    BrokerIp?: string;
    /** 文件Name, 注意: "BrokerIp+OriginFileName"跟ExecutionJobId必须有一个不为空 */
    OriginFileName?: string;
    /** 起始行 */
    StartCount?: number;
    /** 每次查询行数 */
    LineCount?: number;
    /** 查询日志扩展信息,通过统一执行平台接口分页查询日志时需要带上,第一页时为null */
    ExtInfo?: string;
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string;
    /** 生命周期为基础数据进行日志匹配 */
    InstanceLifeDetailDtoList?: InstanceLifeDetailDto[];
    /** 当前生命周期 */
    CurrentLifeRound?: number;
    /** 生命周期总数 */
    MaxLifeRound?: number;
    /** 当前生命周期重试次数 */
    Tries?: number;
    /** 动态加载日志 */
    Dynamic?: boolean;
  }

  interface DescribeInstanceLogDetailResponse {
    /** 日志结果 */
    Data?: InstanceLogInfoOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceLogFileRequest {
    /** 项目ID */
    ProjectId: string;
    /** 任务ID */
    TaskId: string;
    /** 实例数据时间 */
    CurRunDate?: string;
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string;
    /** 执行机IP */
    BrokerIp?: string;
    /** 日志文件名 */
    OriginFileName?: string;
    /** 执行平台下发执行id */
    ExecutionJobId?: string;
    /** 日志级别，Info/Debug/Warn/Error/All */
    LogLevelType?: string;
    /** 文件类型,Log/Code */
    ExecutionFileType?: string;
    /** 生命周期为基础数据进行日志匹配。Dynamic=true动态获取日志链路中使用 */
    InstanceLifeDetailDtoList?: InstanceLifeDetailDto[];
    /** 当前生命周期数 */
    CurrentLifeRound?: number;
    /** 最大生命周期数 */
    MaxLifeRound?: number;
    /** 当前生命周期重试次数 */
    Tries?: number;
    /** 动态获取日志信息标识 */
    Dynamic?: boolean;
  }

  interface DescribeInstanceLogFileResponse {
    /** 下载文件详情 */
    Data?: InstanceDownloadLogInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceLogListRequest {
    /** 任务id */
    TaskId: string;
    /** 数据时间 */
    CurRunDate: string;
  }

  interface DescribeInstanceLogListResponse {
    /** 日志列表 */
    Data?: string;
    /** 日志列表 */
    InstanceLogList?: InstanceLogList[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeInstanceLogRequest {
    /** 任务id */
    TaskId: string;
    /** 数据时间 */
    CurRunDate: string;
    /** 服务器Ip */
    BrokerIp: string;
    /** 文件Name */
    OriginFileName: string;
  }

  interface DescribeInstanceLogResponse {
    /** 返回结果 */
    Data?: string;
    /** 返回结果 */
    InstanceLogInfo?: IntegrationInstanceLog | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIntegrationNodeRequest {
    /** 节点id */
    Id: string;
    /** 项目id */
    ProjectId: string;
    /** 任务类型，201为实时任务，202为离线任务 */
    TaskType?: number;
  }

  interface DescribeIntegrationNodeResponse {
    /** 节点信息 */
    NodeInfo?: IntegrationNodeInfo | null;
    /** 上游节点是否已经修改。true 已修改，需要提示；false 没有修改 */
    SourceCheckFlag?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIntegrationStatisticsInstanceTrendRequest {
    /** 任务类型（实时：201，离线：202） */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
    /** 查询日期 */
    QueryDate?: string;
    /** 资源组id */
    ExecutorGroupId?: string;
  }

  interface DescribeIntegrationStatisticsInstanceTrendResponse {
    /** 统计结果 */
    TrendsData?: IntegrationStatisticsTrendResult[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIntegrationStatisticsRecordsTrendRequest {
    /** 任务类型（实时：201，离线：202） */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
    /** 查询日期 */
    QueryDate?: string;
  }

  interface DescribeIntegrationStatisticsRecordsTrendResponse {
    /** 统计结果 */
    TrendsData?: IntegrationStatisticsTrendResult[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIntegrationStatisticsRequest {
    /** 任务类型（实时：201，离线：202） */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
    /** 查询日期 */
    QueryDate?: string;
  }

  interface DescribeIntegrationStatisticsResponse {
    /** 总任务数 */
    TotalTask?: number | null;
    /** 生产态任务数 */
    ProdTask?: number | null;
    /** 开发态任务数 */
    DevTask?: number | null;
    /** 总读取条数 */
    TotalReadRecords?: number | null;
    /** 总写入条数 */
    TotalWriteRecords?: number | null;
    /** 总脏数据条数 */
    TotalErrorRecords?: number | null;
    /** 总告警事件数 */
    TotalAlarmEvent?: number | null;
    /** 当天读取增长条数 */
    IncreaseReadRecords?: number | null;
    /** 当天写入增长条数 */
    IncreaseWriteRecords?: number | null;
    /** 当天脏数据增长条数 */
    IncreaseErrorRecords?: number | null;
    /** 当天告警事件增长数 */
    IncreaseAlarmEvent?: number | null;
    /** 告警事件统计 */
    AlarmEvent?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIntegrationStatisticsTaskStatusRequest {
    /** 任务类型（实时：201，离线：202） */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
    /** 查询日期 */
    QueryDate?: string;
    /** 资源组id */
    ExecutorGroupId?: string;
  }

  interface DescribeIntegrationStatisticsTaskStatusResponse {
    /** 统计结果 */
    StatusData?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIntegrationStatisticsTaskStatusTrendRequest {
    /** 任务类型（实时：201，离线：202） */
    TaskType: number;
    /** 项目id */
    ProjectId: string;
    /** 查询日期 */
    QueryDate?: string;
    /** 资源组id */
    ExecutorGroupId?: string;
  }

  interface DescribeIntegrationStatisticsTaskStatusTrendResponse {
    /** 统计结果 */
    TrendsData?: IntegrationStatisticsTrendResult[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
    /** 任务类型，201: 实时集成任务, 202：离线集成任务，不传默认值为201 实时任务类型 */
    TaskType?: number;
    /** 提交版本号 */
    InstanceVersion?: number;
    /** 额外参数 */
    ExtConfig?: RecordField[];
  }

  interface DescribeIntegrationTaskResponse {
    /** 任务信息 */
    TaskInfo?: IntegrationTaskInfo | null;
    /** 采集器统计信息 */
    AgentStatus?: AgentStatus | null;
    /** 任务版本信息 */
    TaskVersion?: TaskVersionInstance | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIntegrationTasksRequest {
    /** 项目id */
    ProjectId: string;
    /** 分页第n页 */
    PageNumber: number;
    /** 分页大小 */
    PageSize: number;
    /** 查询filter;默认查询任务的开发态，如需查询生产态任务需添加{"Values":["true"],"Name":"ProductionState"};如需查询查询任务状态需要查询生产态任务列表 */
    Filters?: Filter[];
    /** 排序字段信息 */
    OrderFields?: OrderField[];
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
    /** 201. 实时同步, 202. 离线同步 默认实时 */
    TaskType?: number;
  }

  interface DescribeIntegrationTasksResponse {
    /** 任务列表 */
    TaskInfoSet?: IntegrationTaskInfo[] | null;
    /** 任务总数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIntegrationVersionNodesInfoRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
    /** 该任务选定版本的存储路径：DescribeDsTaskVersionList 或者 DescribeDsTaskVersionInfo 返回的对应的 TaskInfo.TaskExt.Properties 下 Base64.encode($region | $bucket | $ftp.file.name) 值 */
    TaskVersionPath: string;
    /** 该任务选定版本id：DescribeDsTaskVersionList 或者 DescribeDsTaskVersionInfo 返回的对应的 VersionId 取值 */
    TaskVersion?: string;
  }

  interface DescribeIntegrationVersionNodesInfoResponse {
    /** 任务节点信息 */
    Nodes?: IntegrationNodeInfo[] | null;
    /** 任务映射信息 */
    Mappings?: IntegrationNodeMapping[] | null;
    /** 任务id */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLineageInfoRequest {
    /** 实体原始唯一ID */
    ResourceOriId?: string;
    /** 实体类型 */
    ResourceType?: string;
    /** 血缘唯一ID */
    QualifiedId?: string;
    /** 查询方向 */
    Direction?: string;
    /** 查询入度 */
    InputDepth?: number;
    /** 查询出度 */
    OutputDepth?: number;
    /** 数据来源 */
    Platform?: string;
    /** 血缘类型（分页使用） */
    LineageType?: string;
    /** 页码 */
    PageNumber?: number;
    /** 分页大小 */
    PageSize?: number;
  }

  interface DescribeLineageInfoResponse {
    /** 血缘信息 */
    Data?: LineageCommonInfoVO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeManualTriggerRecordPageRequest {
    /** 项目ID */
    ProjectId: string;
    /** 触发运行名称 */
    TriggerName?: string;
    /** 工作流过滤关键字，工作流名称 or 工作流ID */
    WorkflowKeyword?: string;
    /** 触发运行提交人过滤，多个提交人用英文逗号分割 */
    Creator?: string;
    /** 触发提交创建时间过滤，起始时间 */
    TriggerStartTime?: string;
    /** 触发提交创建时间过滤，结束时间 */
    TriggerEndTime?: string;
    /** 页码，整型 */
    PageNumber?: number;
    /** 每页数目，整型 */
    PageSize?: number;
  }

  interface DescribeManualTriggerRecordPageResponse {
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string | null;
    /** 详情结果 */
    Data?: ManualTriggerRecordOpsDtoPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOfflineTaskTokenRequest {
  }

  interface DescribeOfflineTaskTokenResponse {
    /** 长连接临时token */
    Token?: string;
    /** 长连接临时token。与Token相同含义，优先取Data，Data为空时，取Token。 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOperateOpsTasksRequest {
    /** 项目id */
    ProjectId: string;
    /** 文件夹id，多个文件夹以逗号分隔 */
    FolderIdList?: string;
    /** 工作流id，多个工作流id之间以英文字符逗号分隔 */
    WorkFlowIdList?: string;
    /** 工作流名称，多个工作流名称之间以英文字符逗号分隔 */
    WorkFlowNameList?: string;
    /** 任务名称，多个任务名称之间以英文字符逗号分隔 */
    TaskNameList?: string;
    /** 任务id，多个任务id之间以英文字符逗号分隔 */
    TaskIdList?: string;
    /** 页号 */
    PageNumber?: string;
    /** 分页大小 */
    PageSize?: string;
    /** 排序字段，支持字段为FirstSubmitTime和FirstRunTime，标识最近提交和首次执行事件 */
    SortItem?: string;
    /** 排序类型。两种取值 DESC、ASC */
    SortType?: string;
    /** 责任人，多个责任人之间以英文字符逗号分隔 */
    InChargeList?: string;
    /** 任务类型Id字符串，多个任务类型id之间以英文字符逗号分隔 */
    TaskTypeIdList?: string;
    /** 任务状态字符串，多个任务状态之间以英文字符逗号分隔 */
    StatusList?: string;
    /** 任务周期类型字符串，多个任务周期之间以英文字符逗号分隔 */
    TaskCycleUnitList?: string;
    /** 任务所属产品类型 */
    ProductNameList?: string;
    /** 数据源id或（仅针对离线同步任务）来源数据源id */
    SourceServiceId?: string;
    /** 数据源类型或（仅针对离线同步任务）来源数据源类型 */
    SourceServiceType?: string;
    /** （仅针对离线同步任务）目标数据源id */
    TargetServiceId?: string;
    /** （仅针对离线同步任务）目标数据源类型 */
    TargetServiceType?: string;
    /** 告警类型，多个类型以逗号分隔 */
    AlarmType?: string;
    /** 资源组id,多个资源组id之间以英文字符逗号分隔 */
    ExecutorGroupIdList?: string;
    /** 任务标签 */
    TaskTags?: TaskTag[];
    /** 查询关键字 */
    KeyWord?: string;
    /** 实例生成方式 */
    InitStrategy?: string;
    /** 额外请求的资源类型 */
    RequestResourceTypes?: string[];
    /** 项目ID列表 */
    ProjectIds?: string[];
    /** 黑名单任务ID列表，传了该值在筛选的时候会将列表中的任务ID剔除 */
    BlackTaskIdList?: string[];
    /** 时区 */
    ScheduleTimeZone?: string;
    /** 根据任务优先级筛选 */
    RunPriorityList?: number[];
    /** 是否包含手动工作流 */
    IncludeManualTask?: string;
    /** 是否检查权限 */
    CheckPrivilege?: boolean;
  }

  interface DescribeOperateOpsTasksResponse {
    /** 任务列表信息 */
    Data?: OpsTaskInfoPage;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOpsInstanceLogListRequest {
    /** 任务id */
    TaskId: string;
    /** 数据时间 */
    CurRunDate: string;
  }

  interface DescribeOpsInstanceLogListResponse {
    /** 实例日志列表 */
    Data?: InstanceLogInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOpsMakePlanInstancesRequest {
    /** 项目ID */
    ProjectId: string;
    /** 补录计划ID */
    PlanId: string;
    /** 补录任务ID */
    TaskId: string;
    /** 分页页码，默认值1 */
    PageNumber?: number;
    /** 分页大小，默认值10 */
    PageSize?: number;
    /** 实例状态列表 */
    StateList?: number[];
  }

  interface DescribeOpsMakePlanInstancesResponse {
    /** 补录计划实例分页查询结果 */
    Data?: MakePlanInstanceOpsDtoCollection | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOpsMakePlanTasksRequest {
    /** 项目ID */
    ProjectId: string;
    /** 补录计划ID */
    PlanId: string;
    /** 实例状态过滤条件 */
    StateList?: number[];
    /** 分页页码，默认值1 */
    PageNumber?: number;
    /** 分页大小，默认值10 */
    PageSize?: number;
  }

  interface DescribeOpsMakePlanTasksResponse {
    /** 补录计划任务分页查询结果 */
    Data?: MakePlanTaskOpsDtoCollection | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOpsMakePlansRequest {
    /** 项目ID */
    ProjectId: string;
    /** 分页数，默认值1 */
    PageNumber?: number;
    /** 分页大小，默认值10 */
    PageSize?: number;
    /** 补录计划ID */
    PlanId?: string;
    /** 补录计划名称 */
    PlanName?: string;
    /** 补录任务名称 */
    TaskName?: string;
    /** 补录任务ID */
    TaskId?: string;
    /** 补录计划创建者 */
    Creator?: string;
    /** 补录计划最小创建时间 */
    MinCreateTime?: string;
    /** 补录计划最大创建时间 */
    MaxCreateTime?: string;
    /** 实例状态过滤条件 */
    StateList?: number[];
    /** 模糊查询关键字 */
    Keyword?: string;
  }

  interface DescribeOpsMakePlansResponse {
    /** 补录计划分页查询结果 */
    Data?: MakePlanOpsDtoCollection | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOpsWorkflowsRequest {
    /** 项目id */
    ProjectId: string;
    /** 任务产品类型名称列表，以 ',' 号分割 */
    ProductNameList?: string;
    /** 文件id列表，以 ',' 号分割 */
    FolderIdList?: string;
    /** 工作流id，以 ',' 号分割 */
    WorkFlowIdList?: string;
    /** 工作流名称列表，以 ',' 号分割 */
    WorkFlowNameList?: string;
    /** 任务名称列表，以 ',' 号分割 */
    TaskNameList?: string;
    /** 任务id列表，以 ',' 号分割 */
    TaskIdList?: string;
    /** 状态列表，以 ',' 号分割 */
    StatusList?: string;
    /** 负责人列表，以 ',' 号分割 */
    InChargeList?: string;
    /** 分页页码 */
    PageNumber?: number;
    /** 分页大小 */
    PageSize?: number;
    /** 排序项 */
    SortItem?: string;
    /** 排序方式，DESC或ASC */
    SortType?: string;
    /** 项目ID列表，用于多项目工作流筛选 */
    ProjectIds?: string[];
    /** 工作流类型列表 多个用英文逗号连接 cycle,manual. 默认只查询 cycle */
    WorkflowTypeList?: string[];
    /** 工作流过滤keyword，支持工作流 id/name 模糊匹配， 多个用|分割 */
    KeyWord?: string;
    /** **时区** timeZone, 默认UTC+8 */
    ScheduleTimeZone?: string;
    /** 是否过滤无权限的工作流true: 过滤无权限的仅返回有权限的工作流列表(默认)false： 返回所有的工作流列表 */
    CheckPrivilege?: boolean;
  }

  interface DescribeOpsWorkflowsResponse {
    /** 工作流列表 */
    Data?: WorkflowExtOpsDtoPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOrganizationalFunctionsRequest {
    /** 场景类型：开发、使用 */
    Type: string;
    /** 项目 ID */
    ProjectId: string;
    /** 函数名称 */
    Name?: string;
    /** 展示名称 */
    DisplayName?: string;
    /** 标准模式开发环境：DEV标准模式生产环境：PROD简单模式：ALL */
    EnvType?: string;
    /** 过滤条件 */
    Filters?: Filter[];
    /** 排序条件 */
    OrderFields?: OrderField[];
  }

  interface DescribeOrganizationalFunctionsResponse {
    /** 函数信息 */
    Content?: OrganizationalFunction[] | null;
    /** 操作失败 */
    ErrorMessage?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeParentTaskRequest {
    /** 项目Id */
    ProjectId: string;
    /** 任务Id */
    TaskId: string;
  }

  interface DescribeParentTaskResponse {
    /** 任务详情1 */
    Data?: DependencyConfigDsDTO[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePendingSubmitTaskListRequest {
    /** 项目编号 */
    ProjectId: string;
    /** 工作流编号 */
    WorkflowId?: string;
    /** 任务编号列表 */
    TaskIdList?: string[];
  }

  interface DescribePendingSubmitTaskListResponse {
    /** 待提交任务信息 */
    Data?: DescribePendingSubmitTaskInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeProjectRequest {
    /** 项目id。一般使用项目Id来查询，与projectName必须存在一个。 */
    ProjectId?: string;
    /** 是否展示关联集群信息 */
    DescribeClusters?: boolean;
    /** 是否展示关联执行组的信息，仅部分信息。 */
    DescribeExecutors?: boolean;
    /** 默认不展示项目管理员信息 */
    DescribeAdminUsers?: boolean;
    /** 默认不统计项目人员数量 */
    DescribeMemberCount?: boolean;
    /** 默认不查询创建者的信息 */
    DescribeCreator?: boolean;
    /** 项目名只在租户内唯一，一般用来转化为项目ID。 */
    ProjectName?: string;
  }

  interface DescribeProjectResponse {
    /** 项目信息 */
    Data?: Project;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeProjectUsersRequest {
    /** 项目id */
    ProjectId: string;
    /** 分页号 */
    PageNumber: number;
    /** 分页大小 */
    PageSize: number;
    /** 【过滤参数】自定义条件查询 */
    Filters?: FilterOptional[];
    /** 【排序参数】排序字段 */
    OrderFields?: OrderFieldOptional[];
    /** 是否项目管理员 */
    IsProjectAdmin?: boolean;
  }

  interface DescribeProjectUsersResponse {
    /** 项目列表 */
    Data?: ProjectUsersPage;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeQualityScoreRequest {
    /** 统计日期 */
    StatisticsDate: number;
    /** 项目id */
    ProjectId: string;
    /** 数据来源id */
    DatasourceId?: string;
    /** 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1 */
    ScoreType?: string;
    /** 过滤参数 */
    Filters?: Filter[];
  }

  interface DescribeQualityScoreResponse {
    /** 质量评分 */
    Data?: QualityScore | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeQualityScoreTrendRequest {
    /** 统计开始日期 */
    StatisticsStartDate: number;
    /** 统计结束日期 */
    StatisticsEndDate: number;
    /** 项目id */
    ProjectId: string;
    /** 数据来源id */
    DatasourceId?: string;
    /** 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1 */
    ScoreType?: string;
    /** 过滤参数 */
    Filters?: Filter[];
  }

  interface DescribeQualityScoreTrendResponse {
    /** 质量评分趋势视图 */
    Data?: QualityScoreTrend | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRealTimeTaskInstanceNodeInfoRequest {
    /** 实时任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
  }

  interface DescribeRealTimeTaskInstanceNodeInfoResponse {
    /** 实时任务实例节点相关信息 */
    RealTimeTaskInstanceNodeInfo?: RealTimeTaskInstanceNodeInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRealTimeTaskMetricOverviewRequest {
    /** 要查看的实时任务的任务ID，可在任务列表页面中获得 */
    TaskId: string;
    /** 要查看的项目ID */
    ProjectId: string;
    /** 开始时间 */
    StartTime?: number;
    /** 结束时间 */
    EndTime?: number;
  }

  interface DescribeRealTimeTaskMetricOverviewResponse {
    /** 总读取记录数 */
    TotalRecordNumOfRead?: number;
    /** 总读取字节数 */
    TotalRecordByteNumOfRead?: number;
    /** 总写入记录数 */
    TotalRecordNumOfWrite?: number;
    /** 总写入字节数 单位字节 */
    TotalRecordByteNumOfWrite?: number;
    /** 总的脏记录数据 */
    TotalDirtyRecordNum?: number;
    /** 总的脏字节数 单位字节 */
    TotalDirtyRecordByte?: number;
    /** 运行时长 单位s */
    TotalDuration?: number;
    /** 开始运行时间 */
    BeginRunTime?: string;
    /** 目前运行到的时间 */
    EndRunTime?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRealTimeTaskSpeedRequest {
    /** 任务id */
    TaskId: string;
    /** 带毫秒的时间戳 */
    StartTime: number;
    /** 带毫秒的时间戳 */
    EndTime: number;
    /** 粒度，1或者5 */
    Granularity: number;
    /** 项目id */
    ProjectId: string;
  }

  interface DescribeRealTimeTaskSpeedResponse {
    /** 同步速度条/s列表 */
    RecordsSpeedList?: RecordsSpeed[];
    /** 同步速度字节/s列表 */
    BytesSpeedList?: BytesSpeed[];
    /** 同步速度，包括了RecordsSpeedList和BytesSpeedList */
    Data?: RealTimeTaskSpeed;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRealViewSchemaPageRequest {
    /** 页码 */
    PageNumber: number;
    /** 每页记录数 */
    PageSize: number;
    /** 数据库名称 */
    DatabaseName: string;
    /** 数据源id */
    DatasourceId: string;
    /** 数据type */
    DataSourceType: string;
    /** 项目id */
    ProjectId: string;
    /** 环境信息 */
    Env?: string;
    /** 项目model */
    Model?: string;
    /** dev的数据源Id */
    DevDatasourceId?: string;
    /** 过滤字段 */
    Keyword?: string;
  }

  interface DescribeRealViewSchemaPageResponse {
    /** 数据库schema信息列表 */
    Items?: DatabaseSchemaIInfo[] | null;
    /** 页码 */
    PageNumber?: number;
    /** 每页记录数 */
    PageSize?: number;
    /** 总记录数 */
    TotalCount?: number;
    /** 总页数 */
    TotalPage?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRelatedTasksByTaskIdRequest {
    /** 项目Id */
    ProjectId: string;
    /** 任务Id */
    TaskId: string;
    /** 当前页码，从1开始 */
    PageNumber: number;
    /** 单页大小，最大200 */
    PageSize: number;
    /** 查询直接依赖方向，如UP表示上游、DOWN表示下游 */
    DependencyDirection: string;
    /** 查询开发环境还是生产环境版本，DEV表示开发环境、PROD表示生产环境 */
    Environment: string;
    /** 任务名称，模糊搜索 */
    TaskName?: string;
    /** 任务调度周期,I：分支；H：小时；D：天；W：周；M：月；Y：年；O：一次性。 */
    CycleTypeList?: string[];
    /** 任务状态，N：新建； Y：调度中； O：已暂停；F：已下线；INVALID：已失效 */
    StatusList?: string[];
    /** 任务责任人名 */
    OwnerNameList?: string[];
  }

  interface DescribeRelatedTasksByTaskIdResponse {
    /** 查询到的直接上下游任务列表结果 */
    Data?: DescribeRelatedTasksByTaskIdResp | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeReportTaskDetailRequest {
    /** 引擎任务id */
    EngineTaskId: string;
  }

  interface DescribeReportTaskDetailResponse {
    /** 1 */
    Data?: ReportTaskDetail | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeReportTaskListRequest {
    /** 页码 */
    PageNum?: number;
    /** 每页条数 */
    PageSize?: number;
    /** 项目id */
    ProjectId?: string;
    /** 任务id */
    TaskId?: string;
    /** 实例id */
    InstanceId?: string;
    /** 作业id */
    JobId?: string;
    /** 引擎任务id */
    EngineTaskId?: string;
    /** 数据来源,DATA_INTEGRATION、DATA_EXPLORATION、DATA_QUALITY、OM_CENTER等 */
    ProductSource?: string;
    /** 主账号 */
    OnwerUid?: string;
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
  }

  interface DescribeReportTaskListResponse {
    /** 任务列表信息 */
    Data?: ReportTaskListInfo;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeResourceManagePathTreesRequest {
    /** 项目ID */
    ProjectId?: string;
    /** 名字，供搜索 */
    Name?: string;
    /** 文件类型 */
    FileType?: string;
    /** 文件路径 */
    FilePath?: string;
    /** 文件夹类型personal 个人project 项目resource 资源 */
    DirType?: string;
  }

  interface DescribeResourceManagePathTreesResponse {
    /** 响应数据 */
    Data?: ResourcePathTree[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRoleListRequest {
    /** 返回所有角色。 */
    ShowAllRoles?: boolean;
    /** 需要返回的角色类型(system,tenant,project) */
    IncludeRoleTypes?: string[];
    /** 返回角色绑定人员统计，仅私有化版本支持 */
    DescribeMemberCount?: boolean;
    /** 返回操作者信息，私有化多租户版本 */
    DescribeOperator?: boolean;
    /** 系统角色 */
    DescribeSystemRoleOnly?: boolean;
    /** 自定义角色 */
    DescribeCustomRoleOnly?: boolean;
    /** 查看权限 */
    DescribePrivileges?: boolean;
    /** 筛选角色id */
    RoleIds?: string[];
    /** 项目id */
    ProjectId?: string;
    /** 页码 */
    PageNumber?: number;
    /** 分页信息 */
    PageSize?: number;
    /** 查询字段 */
    Filters?: Filter[];
    /** 排序字段 */
    OrderFields?: OrderFields[];
  }

  interface DescribeRoleListResponse {
    /** 角色列表 */
    Data?: PageRoles;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleDimStatRequest {
    /** 项目id */
    ProjectId: string;
    /** 开始时间，时间戳到秒 */
    BeginDate: string;
    /** 结束时间，时间戳到秒 */
    EndDate: string;
  }

  interface DescribeRuleDimStatResponse {
    /** 结果 */
    Data?: RuleDimStat;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleExecDetailRequest {
    /** 项目id */
    ProjectId?: string;
    /** 规则执行id */
    RuleExecId?: number;
  }

  interface DescribeRuleExecDetailResponse {
    /** 规则执行结果详情 */
    Data?: RuleExecResultDetail | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleExecLogRequest {
    /** 规则执行Id */
    RuleExecId: number;
    /** 项目id */
    ProjectId: string;
    /** 规则组执行id */
    RuleGroupExecId: number;
  }

  interface DescribeRuleExecLogResponse {
    /** 规则执行日志 */
    Data?: RuleExecLog | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleExecResultsRequest {
    /** 规则组执行Id */
    RuleGroupExecId?: number;
    /** 项目Id */
    ProjectId?: string;
    /** 过滤条件 */
    Filters?: Filter[];
    /** 排序字段 */
    OrderFields?: OrderField[];
  }

  interface DescribeRuleExecResultsResponse {
    /** 规则执行结果列表 */
    Data?: RuleExecResultPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleExecStatRequest {
    /** 项目id */
    ProjectId: string;
    /** 开始时间，时间戳到秒 */
    BeginDate: string;
    /** 结束时间，时间戳到秒 */
    EndDate: string;
  }

  interface DescribeRuleExecStatResponse {
    /** 结果 */
    Data?: RuleExecStat;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleGroupExecResultsByPageRequest {
    /** 分页序号 */
    PageNumber?: number;
    /** 分页大小 */
    PageSize?: number;
    /** 过滤条件 */
    Filters?: Filter[];
    /** 排序字段 */
    OrderFields?: OrderField[];
    /** 项目ID */
    ProjectId?: string;
  }

  interface DescribeRuleGroupExecResultsByPageResponse {
    /** 规则组执行结果列表 */
    Data?: RuleGroupExecResultPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleGroupRequest {
    /** 规则组ID */
    RuleGroupId?: number;
    /** 数据来源ID */
    DatasourceId?: string;
    /** 数据表Id */
    TableId?: string;
    /** 项目ID */
    ProjectId?: string;
    /** 数据库ID */
    DatabaseId?: string;
  }

  interface DescribeRuleGroupResponse {
    /** 数据质量规则组详情 */
    Data?: RuleGroup | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleGroupSubscriptionRequest {
    /** 规则组ID */
    RuleGroupId?: number;
    /** 项目ID */
    ProjectId?: string;
  }

  interface DescribeRuleGroupSubscriptionResponse {
    /** 规则组订阅信息 */
    Data?: RuleGroupSubscribe | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleGroupTableRequest {
    /** 表ID */
    TableId: string;
  }

  interface DescribeRuleGroupTableResponse {
    /** 数据 */
    Data?: RuleGroupTable | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleGroupsByPageRequest {
    /** 分页序号 */
    PageNumber?: number;
    /** 分页大小 */
    PageSize?: number;
    /** 过滤条件,每次请求的Filters的上限为10，Filter.Values的上限为5 */
    Filters?: Filter[];
    /** 排序方式 */
    OrderFields?: OrderField[];
    /** 项目Id */
    ProjectId?: string;
  }

  interface DescribeRuleGroupsByPageResponse {
    /** 规则组列表 */
    Data?: RuleGroupPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleRequest {
    /** 质量规则ID */
    RuleId?: number;
    /** 项目ID */
    ProjectId?: string;
  }

  interface DescribeRuleResponse {
    /** 规则详情 */
    Data?: Rule | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleTemplateRequest {
    /** 项目ID */
    ProjectId?: string;
    /** 规则模板Id */
    TemplateId?: number;
  }

  interface DescribeRuleTemplateResponse {
    /** 模板详情 */
    Data?: RuleTemplate | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleTemplatesByPageRequest {
    /** 当前页 */
    PageNumber: number;
    /** 每页记录数 */
    PageSize: number;
    /** 工作空间ID */
    ProjectId: string;
    /** 通用排序字段 */
    OrderFields?: OrderField[];
    /** 通用过滤条件 */
    Filters?: Filter[];
  }

  interface DescribeRuleTemplatesByPageResponse {
    /** 结果 */
    Data?: RuleTemplatePage;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRuleTemplatesRequest {
    /** 模板类型 1.系统模板 2.自定义模板 */
    Type?: number;
    /** 1.常量 2.离线表级 2.离线字段级 */
    SourceObjectType?: number;
    /** 项目Id */
    ProjectId?: string;
    /** 源端对应的引擎类型 */
    SourceEngineTypes?: number[];
  }

  interface DescribeRuleTemplatesResponse {
    /** 规则模板列表 */
    Data?: RuleTemplate[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRulesByPageRequest {
    /** 分页序号 */
    PageNumber?: number;
    /** 分页大小 */
    PageSize?: number;
    /** 过滤条件 */
    Filters?: Filter[];
    /** 排序字段 */
    OrderFields?: OrderField[];
    /** 项目ID */
    ProjectId?: string;
  }

  interface DescribeRulesByPageResponse {
    /** 规则质量列表 */
    Data?: RulePage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRulesRequest {
    /** 项目id */
    ProjectId?: string;
    /** 规则组id */
    RuleGroupId?: number;
    /** 该规则运行的执行引擎，不传时会请求该数据源下默认的执行引擎 */
    EngineType?: string;
  }

  interface DescribeRulesResponse {
    /** 规则列表 */
    Data?: Rule[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeScheduleInstancesRequest {
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string | null;
    /** 【已废弃参数，新用户接入无需关注】实例列表过滤条件 */
    Instances?: InstanceOpsDto[];
    /** 【已废弃参数，新用户接入无需关注】检查父任务类型, true: 检查父任务类型; false: 不检查父任务类型 */
    CheckFather?: boolean;
    /** 【已废弃参数，新用户接入无需关注】重跑类型, 1: 仅重跑当前实例; 2: 重跑当前实例及其子实例; 3: 仅重跑子实例 */
    RerunType?: string;
    /** 【已废弃参数，新用户接入无需关注】实例依赖方式, 1: 任务自依赖; 2: 任务上游依赖; 3: 自依赖及其上游依赖 */
    DependentWay?: string;
    /** 【已废弃参数，新用户接入无需关注】重跑时是否忽略事件监听 */
    SkipEventListening?: boolean;
    /** 【已废弃参数，新用户接入无需关注】下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目 */
    SonInstanceType?: string;
    /** 查询条件 */
    SearchCondition?: InstanceApiOpsRequest;
    /** 【已废弃参数，新用户接入无需关注】访问类型 */
    OptType?: string;
    /** 【已废弃参数，新用户接入无需关注】操作者名称 */
    OperatorName?: string;
    /** 【已废弃参数，新用户接入无需关注】操作者id */
    OperatorId?: string;
    /** 项目ID */
    ProjectId?: string;
    /** 【必要参数】项目ID */
    ProjectIdent?: string;
    /** 【已废弃参数，新用户接入无需关注】项目名称 */
    ProjectName?: string;
    /** 【必要参数】分页查询开始页页码，默认值为 1 */
    PageIndex?: number;
    /** 【必要参数】分页查询每页返回的结果行数，默认值为 10 */
    PageSize?: number;
    /** 【已废弃参数，新用户接入无需关注】数据总数 */
    Count?: number;
    /** 【已废弃参数，新用户接入无需关注】基础请求信息 */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /** 【已废弃参数，新用户接入无需关注】是否计算总数 */
    IsCount?: boolean;
    /** 【已废弃参数，新用户接入无需关注】项目ID列表，用于多项目实例列表筛选，请注意，该字段传入时 ProjectId 字段也必须传，且传入的 ProjectIds 中的项目ID必须是当前用户有权限的项目ID，否则会由于权限校验失败报错 */
    ProjectIds?: string[];
  }

  interface DescribeScheduleInstancesResponse {
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string | null;
    /** 实例结果集 */
    Data?: CollectionInstanceOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSchedulerInstanceStatusRequest {
    /** 项目ID */
    ProjectId: string;
    /** 任务类型ID */
    TaskTypeId?: string;
    /** 执行资源组ID */
    ExecutionGroupId?: string;
    /** 执行资源组名字 */
    ExecutionGroupName?: string;
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
    /** 责任人 */
    InCharge?: string;
    /** 工作流ID */
    WorkflowId?: string;
    /** 任务ID列表 */
    ProjectIds?: string[];
  }

  interface DescribeSchedulerInstanceStatusResponse {
    /** 响应数据 */
    Data?: ScreenInstanceInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSchedulerRunTimeInstanceCntByStatusRequest {
    /** 项目ID */
    ProjectId: string;
    /** 周期类型 */
    CycleUnit?: string;
    /** 时间单元 eg: 12h */
    TimeUnit?: string;
    /** 开始日期：2023-03-02 */
    StartTime?: string;
    /** 结束日前：2023-03-20 */
    EndTime?: string;
    /** 任务类型 */
    TaskType?: number;
    /** 责任人 */
    InCharge?: string;
    /** 工作流ID */
    WorkflowId?: string;
    /** 排序字段 */
    SortItem?: string;
    /** 升序降序 */
    SortType?: string;
    /** 项目ID列表，如果传了 ProjectIds，则 ProjectId 不会生效，用于多项目筛选 */
    ProjectIds?: string[];
  }

  interface DescribeSchedulerRunTimeInstanceCntByStatusResponse {
    /** 响应数据 */
    Data?: RuntimeInstanceCntTop[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSchedulerTaskCntByStatusRequest {
    /** 1 */
    TaskType?: number;
    /** Y */
    TypeName?: string;
    /** 111 */
    ProjectId?: string;
    /** 1 */
    InCharge?: string;
    /** 工作流ID */
    WorkflowId?: string;
    /** 项目ID列表，如果传了 ProjectIds ，ProjectId 不会生效 */
    ProjectIds?: string[];
    /** 资源组ID筛选 */
    ResourceGroupIds?: string[];
  }

  interface DescribeSchedulerTaskCntByStatusResponse {
    /** 统计结果 */
    Data?: ScreenTaskInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSchedulerTaskTypeCntRequest {
    /** 项目ID */
    ProjectId: string;
    /** 责任人 */
    InCharge?: string;
  }

  interface DescribeSchedulerTaskTypeCntResponse {
    /** data */
    Data?: TaskTypeCnt[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeStatisticInstanceStatusTrendOpsRequest {
    /** 项目ID */
    ProjectId: string;
    /** 任务类型Id */
    TaskTypeId?: string;
    /** 时间类型 */
    TimeType?: string;
    /** 任务类型名称 */
    TypeName?: string;
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
    /** 资源组ID */
    ExecutionGroupId?: string;
    /** 资源组名称 */
    ExecutionGroupName?: string;
    /** 1 */
    InCharge?: string;
    /** 1 */
    TaskType?: number;
    /** 1 */
    StateList?: number[];
    /** D代表天，H代表小时 */
    AggregationUnit?: string;
    /** 1 */
    AverageWindowSize?: number;
    /** 工作流ID */
    WorkflowId?: string;
    /** 项目ID列表，用于多项目实例趋势筛选，当指定了 ProjectIds 的时候，ProjectId 将只用来鉴权，不做筛选 */
    ProjectIds?: string[];
    /** 指定时间点，当统计时常为整天的时候使用，必须小于 24 */
    TimePoint?: number;
  }

  interface DescribeStatisticInstanceStatusTrendOpsResponse {
    /** 实例状态统计结果 */
    Data?: InstanceStatisticInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeStreamTaskLogListRequest {
    /** 项目ID */
    ProjectId: string;
    /** 任务ID */
    TaskId: string;
    /** 作业ID */
    JobId: string;
    /** 结束时间 */
    EndTime: number;
    /** 开始时间 */
    StartTime: number;
    /** container名字 */
    Container?: string;
    /** 条数 */
    Limit?: number;
    /** 排序类型 desc asc */
    OrderType?: string;
    /** 作业运行的实例ID */
    RunningOrderId?: number;
    /** 关键字 */
    Keyword?: string;
  }

  interface DescribeStreamTaskLogListResponse {
    /** 是否是全量 */
    ListOver?: boolean | null;
    /** 日志集合 */
    LogContentList?: LogContentInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSuccessorOpsTaskInfosRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
  }

  interface DescribeSuccessorOpsTaskInfosResponse {
    /** 下游任务列表 */
    Data?: TaskOpsDto[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSuccessorTaskInfoListRequest {
    /** 任务id集合 */
    TaskIds?: string[];
    /** 项目id */
    ProjectId?: string;
  }

  interface DescribeSuccessorTaskInfoListResponse {
    /** 出参 */
    Data?: SuccessorTaskInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTableBasicInfoRequest {
    /** 分页页码 */
    PageNumber?: number;
    /** 分页大小 */
    PageSize?: number;
    /** 过滤字段 */
    Filters?: Filter[];
    /** 排序字段 */
    OrderFields?: OrderField[];
  }

  interface DescribeTableBasicInfoResponse {
    /** 表元数据 */
    TableBasicInfoList?: TableBasicInfo[] | null;
    /** 总条数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTableInfoListRequest {
    /** 表名 */
    Filters: Filter[];
    /** 如果是hive这里写rpc，如果是其他类型不传 */
    ConnectionType: string;
    /** 数据库源类型 */
    Catalog: string;
  }

  interface DescribeTableInfoListResponse {
    /** 表信息 */
    TableInfo?: TableInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTableLineageInfoRequest {
    /** 查询方向，INPUT,OUTPUT,BOTH枚举值 */
    Direction: string;
    /** 表信息 */
    Data: TableLineageInfo;
    /** 单次查询入度,默认 1 */
    InputDepth?: number;
    /** 单次查询出度,默认 1 */
    OutputDepth?: number;
    /** 额外参数（传递调用方信息） */
    ExtParams?: LineageParamRecord[];
    /** 是否过滤临时表,默认true */
    IgnoreTemp?: boolean;
    /** 是否递归查询二级节点数目，默认为true */
    RecursiveSecond?: boolean;
  }

  interface DescribeTableLineageInfoResponse {
    /** 表血缘信息 */
    TableLineageBasicInfo?: TableLineageBaseInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTableLineageRequest {
    /** 查询方向枚举值- INPUT- OUTPUT- BOTH */
    Direction: string;
    /** 表信息 */
    Data: TableLineageInfo;
    /** 单次查询入度,默认 1 */
    InputDepth?: number;
    /** 单次查询出度,默认 1 */
    OutputDepth?: number;
    /** 额外参数（传递调用方信息） */
    ExtParams?: LineageParamRecord[];
    /** 是否过滤临时表,默认true */
    IgnoreTemp?: boolean;
    /** 是否递归查询二级节点数目，默认为true */
    RecursiveSecond?: boolean;
  }

  interface DescribeTableLineageResponse {
    /** 表血缘信息 */
    TableLineage?: TableLineageInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTableMetaRequest {
    /** 表唯一id */
    TableId: string;
    /** 按名称查询的条件 */
    TableNameFilter?: TableNameFilter;
    /** 查询条件类型0按id，1按名称，默认为0 */
    TableFilterType?: number;
    /** 查询字段列表 */
    SearchNames?: string[];
  }

  interface DescribeTableMetaResponse {
    /** 表的元数据信息 */
    TableMeta?: TableMeta | null;
    /** 生命周期信息 */
    LifecycleInfo?: LifecycleInfo | null;
    /** 标签 */
    TagVoteSumList?: TagVoteSum | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTableMetasRequest {
    /** 分页页码 */
    PageNumber?: number;
    /** 分页大小 */
    PageSize?: number;
    /** 过滤字段:dbName-数据库名称bizCatalogIds-资产目录IDDataLayerUuid-数仓分层IDownerAccount-负责人IDassetStatus-资产状态：1-已上架 0-未上架assetLevel-资产等级：40-核心30-重要 20-一般 10-临时 msTypes-数据源类型：例如TENCENT_MYSQL-腾讯云MySQL，数据源类型ID可参考[ { "DisplayName": "TCHouse-P", "Id": "TCHOUSE_P" }, { "DisplayName": "Iceberg", "Id": "ICEBERG" }, { "DisplayName": "Hive", "Id": "HIVE" }, { "DisplayName": "HBase", "Id": "HBASE" }, { "DisplayName": "DLC", "Id": "DLC" }, { "DisplayName": "腾讯云MySQL", "Id": "TENCENT_MYSQL" }, { "DisplayName": "TCHouse-D", "Id": "TCHOUSE_D" }, { "DisplayName": "TCHouse-C", "Id": "TCHOUSE_C" }, { "DisplayName": "EMR StarRocks", "Id": "EMR_STARROCKS" }, { "DisplayName": "Doris", "Id": "DORIS" }, { "DisplayName": "MySQL", "Id": "MYSQL" }, { "DisplayName": "Oracle", "Id": "ORACLE" }, { "DisplayName": "PostgreSQL", "Id": "POSTGRE" }, { "DisplayName": "SQL Server", "Id": "SQLSERVER" }, { "DisplayName": "TDSQL PostgreSQL", "Id": "TDSQL_POSTGRE" }, { "DisplayName": "Greenplum", "Id": "GREENPLUM" }, { "DisplayName": "StarRocks", "Id": "STARROCKS" }, { "DisplayName": "ClickHouse", "Id": "CLICKHOUSE" }, { "DisplayName": "INFLUXDB", "Id": "INFLUXDB" }, { "DisplayName": "达梦DM", "Id": "DM" }, { "DisplayName": "OceanBase", "Id": "OCEANBASE" }, { "DisplayName": "TDSQL MySQL", "Id": "TDSQL_MYSQL" }, { "DisplayName": "GaussDB", "Id": "GAUSSDB" }]projectIds-归属项目IDkeyword-关键字，支持表名/表中文名/数据库名 */
    Filters?: Filter[];
    /** 排序字段 */
    OrderFields?: OrderField[];
  }

  interface DescribeTableMetasResponse {
    /** 表元数据 */
    TableMetas?: TableMeta[] | null;
    /** 总条数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTablePartitionsRequest {
    /** 表ID */
    TableId: string;
    /** 分页number */
    PageNumber?: number;
    /** 分页size */
    PageSize?: number;
    /** 过滤器 */
    FilterSet?: Filter[];
    /** 排序字段 */
    OrderFieldSet?: OrderField[];
  }

  interface DescribeTablePartitionsResponse {
    /** 分区详情列表 */
    TablePartitionSet?: TablePartition[] | null;
    /** 总记录数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTableQualityDetailsRequest {
    /** 统计日期 */
    StatisticsDate: number;
    /** 项目id */
    ProjectId: string;
    /** 分页序号 */
    PageNumber: number;
    /** 分页大小 */
    PageSize: number;
    /** 过滤参数TableName、DatabaseId 、DatabaseName、OwnerUserName */
    Filters?: Filter[];
    /** 排序参数 排序方式 DESC 或者 ASC，表得分排序 TableScore */
    OrderFields?: OrderField[];
    /** 数据来源id */
    DatasourceId?: string;
    /** 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1 */
    ScoreType?: string;
  }

  interface DescribeTableQualityDetailsResponse {
    /** 表质量分详情结果 */
    Data?: TableQualityDetailPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTableSchemaInfoRequest {
    /** 表名称 */
    Name: string;
    /** 数据库名称 */
    DatabaseName: string;
    /** 数据源的类型（例如MYSQL、HIVE、KAFKA等） */
    MsType: string;
    /** 数据源id */
    DatasourceId: string;
    /** 连接类型（示例值rpc） */
    ConnectionType?: string;
    /** 元数据Database下的Schema名称 */
    SchemaName?: string;
    /** 项目空间ID */
    ProjectId?: string;
    /** 环境信息 */
    Env?: string;
    /** 空间模式 */
    Model?: string;
    /** 开发态的datasourceId */
    DevDatasourceId?: string;
  }

  interface DescribeTableSchemaInfoResponse {
    /** 查询到的SchemaInfo信息 */
    SchemaInfoList?: SchemaDetail[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTableScoreTrendRequest {
    /** 项目id */
    ProjectId: string;
    /** 开始时间 秒级时间戳 */
    StatisticsStartDate: number;
    /** 结束时间 秒级时间戳 */
    StatisticsEndDate: number;
    /** 表id */
    TableId: string;
    /** 1:按全维度权重计算,2:按已配置维度权重计算,3:不按维度权重计算,默认1 */
    ScoreType?: string;
  }

  interface DescribeTableScoreTrendResponse {
    /** 表得分趋势 */
    Data?: QualityScoreTrend | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskAlarmRegulationsRequest {
    /** 项目ID */
    ProjectId: string;
    /** 当前页 */
    PageNumber: number;
    /** 每页记录数 */
    PageSize: number;
    /** 过滤条件(name有RegularStatus、AlarmLevel、AlarmIndicator、RegularName) */
    Filters?: Filter[];
    /** 排序条件(RegularId) */
    OrderFields?: OrderField[];
    /** 任务ID */
    TaskId?: string;
    /** 任务类型(201代表实时任务，202代表离线任务) */
    TaskType?: number;
  }

  interface DescribeTaskAlarmRegulationsResponse {
    /** 告警规则信息 */
    TaskAlarmInfos?: TaskAlarmInfo[] | null;
    /** 总记录数 */
    TotalCount?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskByCycleRequest {
    /** 项目ID */
    ProjectId: string;
    /** 1 */
    InCharge?: string;
    /** 工作流ID */
    WorkflowId?: string;
    /** 项目ID列表筛选 */
    ProjectIds?: string[];
    /** 资源组ID列表筛选 */
    ResourceGroupIds?: string[];
    /** 任务类型ID筛选 */
    TaskTypeIdList?: string[];
  }

  interface DescribeTaskByCycleResponse {
    /** 周期任务统计值 */
    Data?: TaskByCycle[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskByStatusReportRequest {
    /** 项目ID */
    ProjectId: string;
    /** 时间类型 */
    Type?: string;
    /** 类型 */
    TaskType?: string;
    /** 类型名称 */
    TypeName?: string;
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
    /** 聚合单元，H小时 */
    AggregationUnit?: string;
    /** 周期 */
    CycleUnit?: string;
    /** 状态 */
    Status?: string;
    /** 责任人 */
    InCharge?: string;
    /** 工作流ID */
    WorkflowId?: string;
    /** 项目ID列表，用于多项目实例趋势筛选，当指定了 ProjectIds 的时候，ProjectId 将只用来鉴权，不做筛选 */
    ProjectIds?: string[];
  }

  interface DescribeTaskByStatusReportResponse {
    /** 任务上报趋势指标 */
    Data?: TaskByStatus[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskDetailDsRequest {
    /** 任务Id */
    TaskId: string;
    /** 项目Id */
    ProjectId?: string;
    /** 已废弃，无需填写 */
    TaskAlarmStatus?: number;
  }

  interface DescribeTaskDetailDsResponse {
    /** 任务详情1 */
    Data?: TaskDsDTO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskInstancesStatusRequest {
    /** 任务列表 */
    RecordIdList: string[];
    /** 工作流id */
    WorkflowId: string;
    /** 项目id */
    ProjectId: string;
  }

  interface DescribeTaskInstancesStatusResponse {
    /** 实例列表 */
    Data?: DescribeTaskInstancesStatusDto[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskLineageRequest {
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string;
    /** 任务ID */
    TaskId?: string;
  }

  interface DescribeTaskLineageResponse {
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string | null;
    /** 通过任务ID查询集成任务信息列表 */
    TaskLineageInfos?: TaskLineageInfoPair[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskLockStatusRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
    /** 任务类型：201. stream, 202. offline */
    TaskType: number;
  }

  interface DescribeTaskLockStatusResponse {
    /** 任务锁状态信息 */
    TaskLockStatus?: TaskLockStatus;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskParamDsRequest {
    /** 项目ID */
    ProjectId: string;
    /** 任务id */
    TaskId?: string;
  }

  interface DescribeTaskParamDsResponse {
    /** 结果集 */
    Data?: ParameterTaskDsDto[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskRunHistoryRequest {
    /** 项目id */
    ProjectId: string;
    /** 检索条件 */
    SearchCondition: InstanceSearchCondition;
    /** 分页大小 */
    PageSize: number;
    /** 分页页码 */
    PageNumber: number;
  }

  interface DescribeTaskRunHistoryResponse {
    /** 分页查询任务运行历史结果 */
    Data?: InstanceOpsInfoPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskScriptRequest {
    /** 项目Id */
    ProjectId: string;
    /** 任务ID */
    TaskId: string;
  }

  interface DescribeTaskScriptResponse {
    /** 任务脚本内容，BASE64编码 */
    Data?: TaskScriptContent | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskTableMetricOverviewRequest {
    /** 任务TaskId */
    TaskId: string;
    /** 来源类型，支持枚举： SOURCE、SINK */
    NodeType: string;
    /** 页码 */
    PageNumber: number;
    /** 页大小 */
    PageSize: number;
    /** 项目ID */
    ProjectId: string;
    /** 任务类型：201. stream, 202. offline，当前只支持实时201 */
    TaskType?: number;
    /** 根据SchemaName来模糊搜索 */
    Filters?: Filter[];
    /** 排序 */
    OrderFields?: OrderFields[];
  }

  interface DescribeTaskTableMetricOverviewResponse {
    /** 表粒度指标集合 */
    TaskTableMetricInfos?: TaskTableMetricInfo[];
    /** 总数 */
    TotalCount?: number;
    /** 返回列表类型 */
    MetricType?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTaskTemplatesRequest {
    /** 项目id */
    ProjectId: string;
    /** 页号 */
    PageNumber: number;
    /** 分页大小 */
    PageSize: number;
    /** 排序字段, 仅支持更新时间, 取值示例- UpdateTime */
    OrderFields?: OrderField[];
    /** 过滤条件, 取值列表- TemplateName 模版名称- TaskType 支持任务类型- InCharge 责任人- FolderId 文件夹id- Status 提交状态- UpdateStartTime 更新时间,时间区间查询- UpdateEndTime 更新时间,时间区间查询 */
    Filters?: Filter[];
  }

  interface DescribeTaskTemplatesResponse {
    /** 查询项目下所有任务信息,不包括虚拟任务和离线任务 */
    Data?: PageTaskTemplateInfo;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTasksForCodeTemplateRequest {
    /** 项目Id */
    ProjectId: string;
    /** 页码，最小1 */
    PageNumber: number;
    /** 单页大小，最小10，最大200 */
    PageSize: number;
    /** 模板id */
    TemplateId: string;
    /** 工作流id列表 */
    WorkflowIdList?: string[];
    /** 责任人名列表 */
    OwnerIdList?: string[];
    /** 任务名 */
    TaskName?: string;
    /** 排序提交，目前只支持workflowName */
    OrderCondition?: OrderCondition;
  }

  interface DescribeTasksForCodeTemplateResponse {
    /** 无 */
    Data?: DescribeTasksForCodeTemplatePage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTemplateDimCountRequest {
    /** 模板类型 */
    Type?: number;
    /** 项目ID */
    ProjectId?: string;
  }

  interface DescribeTemplateDimCountResponse {
    /** 维度统计结果 */
    Data?: DimensionCount[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTenantProjectsRequest {
    /** 第几页 */
    PageNumber: number;
    /** 一页几条 */
    PageSize: number;
    /** 是否展示关联执行组的信息。正常应该不是从项目列表里获取 */
    DescribeExecutors?: boolean;
    /** 是否展示项目管理员信息，减少默认返回的请求内容 */
    DescribeAdminUsers?: boolean;
    /** 统计项目人员数量。数据地图需求 */
    DescribeMemberCount?: boolean;
    /** 自定义条件查询 */
    Filters?: Filter[];
    /** 排序字段 */
    OrderFields?: OrderField[];
    /** 默认不提供创建者信息，该参数与CAM交互比较耗时 */
    DescribeCreator?: boolean;
    /** 是否展示关联资源池信息 */
    DescribeResourcePools?: boolean;
  }

  interface DescribeTenantProjectsResponse {
    /** 项目列表 */
    Data?: ProjectPage;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTestRunningRecordRequest {
    /** 项目ID */
    ProjectId: string;
    /** 任务id */
    TaskId: string;
    /** 搜索关键词 */
    SearchWord?: string;
    /** 搜索用户UIN */
    SearchUserUin?: string;
    /** 试运行记录创建时间 */
    CreateTime?: string;
    /** 试运行记录最大创建结束时间 */
    EndTime?: string;
    /** 试运行记录id */
    RecordIdList?: number[];
    /** 分页大小 */
    PageSize?: number;
    /** 分页索引 */
    PageIndex?: number;
    /** 状态列表 LAUNCHED:等待运行 RUNNING:运行中 KILLING:终止中 KILLED:已终止 SUCCESS:成功 FAILED:失败 SKIP_RUNNING 跳过运行 NEVER_RUN:未运行 */
    StatusList?: string[];
    /** 排序条件 排序的key：timeCost,startTime */
    OrderConditionList?: OrderCondition[];
  }

  interface DescribeTestRunningRecordResponse {
    /** 编排空间试运行任务 */
    Data?: TestRunningRecord[] | null;
    /** 总页数 */
    TotalPages?: number | null;
    /** 总条数 */
    TotalItems?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeThirdTaskRunLogRequest {
    /** 任务ID */
    TaskId: string;
    /** 实例数据时间 */
    CurRunDate: string;
  }

  interface DescribeThirdTaskRunLogResponse {
    /** 获取第三方运行日志 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTopTableStatRequest {
    /** 项目id */
    ProjectId: string;
    /** 开始时间，时间戳到秒 */
    BeginDate: string;
    /** 结束时间，时间戳到秒 */
    EndDate: string;
  }

  interface DescribeTopTableStatResponse {
    /** 结果 */
    Data?: TopTableStat;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTrendStatRequest {
    /** 项目id */
    ProjectId: string;
    /** 开始时间，时间戳到秒 */
    BeginDate: string;
    /** 结束时间，时间戳到秒 */
    EndDate: string;
  }

  interface DescribeTrendStatResponse {
    /** 结果 */
    Data?: RuleExecDateStat[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkflowByFordIdsRequest {
    /** 项目Id */
    ProjectId: string;
    /** 文件夹Id */
    FolderIdList: string[];
  }

  interface DescribeWorkflowByFordIdsResponse {
    /** 工作流详情 */
    Data?: WorkflowDsDTO[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkflowCanvasInfoRequest {
    /** 工作流id */
    WorkflowId: string;
    /** 项目id */
    ProjectId: string;
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string;
  }

  interface DescribeWorkflowCanvasInfoResponse {
    /** 工作流调度详情 */
    Data?: WorkflowCanvasOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkflowExecuteByIdRequest {
    /** 项目ID */
    ProjectId: string;
    /** 工作流ID */
    WorkFlowIdList?: string;
    /** 分页大小 */
    PageNumber?: number;
    /** 分页索引 */
    PageSize?: number;
  }

  interface DescribeWorkflowExecuteByIdResponse {
    /** 工作流运行时间信息 */
    Data?: WorkFlowExecuteDtoByPage | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkflowInfoByIdRequest {
    /** 工作流id */
    WorkflowId: string;
    /** 项目id */
    ProjectId: string;
  }

  interface DescribeWorkflowInfoByIdResponse {
    /** 工作流调度详情 */
    Data?: WorkflowSchedulerOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkflowListByProjectIdRequest {
    /** 项目id */
    ProjectId: string;
  }

  interface DescribeWorkflowListByProjectIdResponse {
    /** 根据项目id获取项目下所有工作流列表 */
    Data?: WorkflowCanvasOpsDto[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkflowSchedulerInfoDsRequest {
    /** 项目ID */
    ProjectId: string;
    /** 工作流ID */
    WorkflowId: string;
  }

  interface DescribeWorkflowSchedulerInfoDsResponse {
    /** 数据 */
    Data?: WorkflowScheduleDtoDs | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeWorkflowTaskCountRequest {
    /** 工作流列表 */
    WorkflowId: string;
    /** 项目id */
    ProjectId: string;
  }

  interface DescribeWorkflowTaskCountResponse {
    /** 统计结果 */
    Data?: WorkflowTaskCountOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DiagnoseProRequest {
    /** 查询条件（当前接口TaskId和CurRunDate需要填充在该字段方可诊断） */
    SearchCondition: InstanceApiOpsRequest;
    /** 项目id */
    ProjectId: string;
    /** 实例列表 */
    Instances?: InstanceOpsDto[];
    /** 检查父任务类型, true: 检查父任务; false: 不检查父任务 */
    CheckFather?: boolean;
    /** 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子 */
    RerunType?: string;
    /** 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖 */
    DependentWay?: string;
    /** 重跑忽略事件监听与否 */
    SkipEventListening?: boolean;
    /** 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目 */
    SonInstanceType?: string;
    /** 访问类型 */
    OptType?: string;
    /** 操作者名称 */
    OperatorName?: string;
    /** 操作者id */
    OperatorId?: string;
    /** 项目标志 */
    ProjectIdent?: string;
    /** 项目名称 */
    ProjectName?: string;
    /** 索引页码 */
    PageIndex?: number;
    /** 页面大小 */
    PageSize?: number;
    /** 数据总数 */
    Count?: number;
    /** 基础请求信息 */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /** 是否计算总数 */
    IsCount?: boolean;
  }

  interface DiagnoseProResponse {
    /** 结果 */
    Data?: DiagnoseRep;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DisableProjectRequest {
    /** 项目id */
    ProjectId: string;
    /** 模块名称 */
    ModuleKey?: string;
  }

  interface DisableProjectResponse {
    /** 无 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DownloadLogByLineRequest {
    /** 开始行 */
    StartLine: number;
    /** 读取行 */
    LineCount: number;
    /** 项目id */
    ProjectId: string;
    /** 任务id */
    TaskId?: string;
    /** 实例运行时间 */
    CurRunDate?: string;
    /** 任务详情id，用于读取切分的日志文件 */
    DetailId?: string;
    /** base64编码的文件路径 */
    FilePath?: string;
    /** 任务记录id */
    RecordId?: string;
    /** 子job id */
    SubJobId?: string;
    /** hiveSql:34,sparkSql:36 dlcSql: 32 */
    JobType?: string;
    /** true:解析错误信息。false:不解析错误信息 */
    ParseErrorTip?: boolean;
    /** log 0 code 1 result 2 custo 3 */
    FileType?: number;
    /** 查询文件标志：0: 从执行机获取，1: 从cos获取，获取不到会再从执行机获取 */
    QueryFileFlag?: number;
    /** 透传字段，如果queryFileFlag为1，则ext回作为上一页的分页标识offset */
    ExtInfo?: string;
  }

  interface DownloadLogByLineResponse {
    /** 日志信息 */
    Data?: InstanceLogByLine | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DryRunDIOfflineTaskRequest {
    /** 任务Id */
    TaskId: string;
    /** 项目Id */
    ProjectId: string;
    /** 资源组Id */
    ResourceGroup?: string;
    /** 默认 27 */
    TaskTypeId?: number;
  }

  interface DryRunDIOfflineTaskResponse {
    /** 数据时间 */
    CurrentRunDate?: string;
    /** 项目Id */
    ProjectId?: string;
    /** 任务状态 */
    Status?: string;
    /** 任务Id */
    TaskId?: string;
    /** 任务实例唯一key */
    TaskInstanceKey?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnableProjectRequest {
    /** 项目id */
    ProjectId: string;
    /** 模块名称 */
    ModuleKey?: string;
  }

  interface EnableProjectResponse {
    /** 无 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface FindAllFolderRequest {
    /** 项目ID */
    ProjectId: string;
  }

  interface FindAllFolderResponse {
    /** 文件夹列表 */
    FolderList?: FolderDsDto[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface FreezeOpsTasksRequest {
    /** 任务列表 */
    Tasks: SimpleTaskInfo[];
    /** 任务操作是否消息通知下游任务责任人 */
    OperateIsInform: boolean;
    /** 是否终止已生成的实例 */
    KillInstance?: boolean;
  }

  interface FreezeOpsTasksResponse {
    /** 操作结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface FreezeTasksByWorkflowIdsRequest {
    /** 工作流id列表 */
    WorkflowIds: string[];
    /** 项目id */
    ProjectId: string;
    /** 是否终止已生成的实例 */
    KillInstance?: boolean;
    /** 是否异步模式 */
    AsyncMode?: boolean;
  }

  interface FreezeTasksByWorkflowIdsResponse {
    /** 操作返回结果 */
    Data?: OperationOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GenHiveTableDDLSqlRequest {
    /** 项目id */
    ProjectId: string;
    /** 目标数据库 */
    SinkDatabase: string;
    /** 节点id */
    Id?: string;
    /** 元数据类型(MYSQL、ORACLE) */
    MsType?: string;
    /** 数据源id */
    DatasourceId?: string;
    /** 来源库名 */
    SourceDatabase?: string;
    /** 来源表名 */
    TableName?: string;
    /** 目标表元数据类型(HIVE、GBASE) */
    SinkType?: string;
    /** 源端schema名称 */
    SchemaName?: string;
    /** 上游节点的字段信息 */
    SourceFieldInfoList?: SourceFieldInfo[];
    /** 分区字段 */
    Partitions?: Partition[];
    /** 建表属性 */
    Properties?: Property[];
    /** 建表模式，0:向导模式，1:ddl */
    TableMode?: number;
    /** DLC表版本，v1/v2 */
    TableVersion?: string;
    /** 是否upsert写入 */
    UpsertFlag?: boolean;
    /** 表描述信息 */
    TableComment?: string;
    /** 增加的文件数量阈值, 超过值将触发小文件合并 */
    AddDataFiles?: number;
    /** 增加的Equality delete数量阈值, 超过值将触发小文件合并 */
    AddEqualityDeletes?: number;
    /** 增加的Position delete数量阈值, 超过值将触发小文件合并 */
    AddPositionDeletes?: number;
    /** 增加的delete file数量阈值 */
    AddDeleteFiles?: number;
    /** 下游节点数据源ID */
    TargetDatasourceId?: string;
    /** dlc upsert主键 */
    UpsertKeys?: string[];
    /** dlc表治理信息 */
    TableBaseInfo?: TableBaseInfo;
    /** 目标端schema名称 */
    SinkSchemaName?: string;
    /** 获取源信息的环境 */
    Env?: string;
    /** doris写入模式配置 */
    WriteMode?: string;
    /** 任务类型 201（实时）， 202（离线） */
    TaskType?: number;
    /** 目标端table名称 */
    SinkTableName?: string;
  }

  interface GenHiveTableDDLSqlResponse {
    /** 生成的ddl语句 */
    DDLSql?: string;
    /** 生成的ddl语句。与DDLSql相同含义，优先取Data，如果Data为空，则取DDLSql。 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetBatchDetailErrorLogRequest {
    /** 批量操作ID */
    JobId: number;
    /** 资源对象ID */
    ResourceId: string;
    /** 项目ID */
    ProjectId?: string;
  }

  interface GetBatchDetailErrorLogResponse {
    /** 日志返回 */
    Data?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetCosTokenRequest {
    /** 项目id */
    ProjectId: string;
    /** 请求域名 */
    OriginDomain: string;
    /** 是否需要跨域 */
    CrossFlag: boolean;
    /** 桶名 */
    BucketName?: string;
    /** 远程地址 */
    RemotePath?: string;
    /** 地域 */
    RemoteRegion?: string;
  }

  interface GetCosTokenResponse {
    /** cos地域 */
    Region?: string | null;
    /** Token信息 */
    Token?: CosTokenResponse | null;
    /** 桶名 */
    Bucket?: string | null;
    /** 终止点（针对私有云环境） */
    EndPoint?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetFileInfoRequest {
    /** 项目ID */
    ProjectId: string;
    /** 文件路径项目区1470575647377821696项目，f1目录下： /datastudio/project/1470575647377821696/f1/sql1234.sql 个人区： /datastudio/personal/sqlTTT.sql */
    FilePath: string;
  }

  interface GetFileInfoResponse {
    /** 当前脚本信息 */
    UserFileInfo?: UserFileInfo | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetInstanceLogRequest {
    /** **项目ID** */
    ProjectId: string;
    /** **实例唯一标识** */
    InstanceKey: string;
    /** **实例生命周期编号，标识实例的某一次执行**例如：周期实例第一次运行的编号为0，用户后期又重跑了该实例，第二次执行的编号为1 */
    LifeRoundNum: number;
    /** **时区**timeZone, 默认UTC+8 */
    ScheduleTimeZone?: string;
    /** **日志所在执行机Ip** */
    BrokerIp?: string;
    /** **日志文件**实例详情中 executionJobId 为空时，但 originFileName 不为空时，入参中必须包含 originFileName 与 brokerIp如果 executionJobId 与 originFileName 都为空，则说明实例未下发执行或没有产生日志。例如分支节点 或 归并节点 */
    OriginFileName?: string;
    /** **执行ID**实例详情中 executionJobId 不为空时，入参中需包含executionJobId 。originFileName 与 brokerIp为非必要参数 */
    ExecutionJobId?: string;
    /** **日志级别**默认All- Info- Debug- Warn- Error- All */
    LogLevel?: string;
    /** **获取日志的开始行 行号**默认 1 */
    StartLineNum?: number;
    /** **获取日志的结束行 行号**默认 10000 */
    EndLineCount?: number;
    /** **分页查询日志时使用，无具体业务含义**第一次查询时值为null 第二次及以后查询时使用上一次查询返回信息中的ExtInfo字段值即可 */
    ExtInfo?: string;
  }

  interface GetInstanceLogResponse {
    /** 调度实例详情 */
    Data?: InstanceLogVO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetIntegrationNodeColumnSchemaRequest {
    /** 字段示例（json格式） */
    ColumnContent?: string;
    /** 数据源类型 MYSQL|HIVE|KAFKA|ES|MONGODB|REST_API|SYBASE|TIDB|DORIS|DM| */
    DatasourceType?: string;
  }

  interface GetIntegrationNodeColumnSchemaResponse {
    /** 字段列表 */
    Schemas?: IntegrationNodeSchema[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetJobStatusRequest {
    /** 异步任务id */
    JobId: string;
  }

  interface GetJobStatusResponse {
    /** 异步任务id */
    JobId?: string;
    /** 是否已完成 */
    Completed?: boolean;
    /** 任务状态,Success:成功,Fail:失败,Cancel:取消,Running:运行中 */
    Status?: string;
    /** 创建时间时间戳,单位毫秒 */
    CreateTime?: string;
    /** 错误信息 */
    ErrorMessage?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetOfflineDIInstanceListRequest {
    /** 第几页 */
    PageIndex: number;
    /** 每页几条 */
    PageSize: number;
    /** 项目Id */
    ProjectId: string;
    /** 无 */
    SearchCondition?: SearchConditionNew;
  }

  interface GetOfflineDIInstanceListResponse {
    /** 总条数 */
    Total?: number;
    /** 实例详情 */
    List?: OfflineInstance[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetOfflineInstanceListRequest {
    /** 第几页 */
    PageIndex: string;
    /** 每页几条 */
    PageSize: number;
    /** 项目Id */
    ProjectId: string;
    /** 无 */
    SearchCondition?: SearchCondition;
  }

  interface GetOfflineInstanceListResponse {
    /** 总条数 */
    Total?: number;
    /** 实例详情 */
    List?: OfflineInstance[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetPaginationTaskScriptRequest {
    /** 项目编号 */
    ProjectId: string;
    /** 任务编号 */
    TaskId: string;
    /** 页码（从1开始） */
    PageNum?: number;
  }

  interface GetPaginationTaskScriptResponse {
    /** 返回数据 */
    Data?: GetPaginationTaskScriptResponseInfo[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetTaskInstanceRequest {
    /** **项目ID** */
    ProjectId: string;
    /** **实例唯一标识** */
    InstanceKey: string;
    /** **时区**timeZone, 默认UTC+8 */
    ScheduleTimeZone?: string;
  }

  interface GetTaskInstanceResponse {
    /** 调度实例详情 */
    Data?: InstanceDetailVO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface InstanceApiOpsRequest {
    /** 单个查询条件 */
    Instance?: InstanceOpsDto;
    /** 排序字段，目前包含：重试次数，实例数据时间，运行耗时 */
    SortCol?: string;
    /** 任务id列表 */
    TaskIdList?: string[];
    /** 按照taskName模糊查询 */
    TaskNameList?: string[];
    /** 文件夹列表 */
    FolderList?: string[];
    /** 升序或者降序 */
    Sort?: string;
    /** 实例状态列表 */
    StateList?: number[];
    /** 实例类型列表 */
    TaskTypeList?: number[];
    /** 周期类型 */
    CycleList?: string[];
    /** 责任人 */
    OwnerList?: string[];
    /** 数据时间 */
    DateFrom?: string;
    /** 数据时间 */
    DateTo?: string;
    /** 实例入库时间 */
    CreateTimeFrom?: string;
    /** 实例入库时间 */
    CreateTimeTo?: string;
    /** 开始执行时间 */
    StartFrom?: string;
    /** 开始执行时间 */
    StartTo?: string;
    /** 所属工作流 */
    WorkflowIdList?: string[];
    /** 按照workflowName模糊查询 */
    WorkflowNameList?: string[];
    /** 关键字模糊查询 */
    Keyword?: string;
    /** searchColumns是搜索的字段名列表 */
    SearchColumns?: string[];
    /** 项目id */
    ProjectId?: string;
    /** 限制 */
    Limit?: number;
    /** 任务类型映射关系, 存储任务类型id和任务类型描述信息 */
    TaskTypeMap?: TaskTypeMap[];
    /** 0 补录类型 1 周期实例 2 非周期实例 */
    InstanceType?: string;
    /** 是否dag */
    DagDeal?: boolean;
    /** 1 父实例 2 子实例 */
    DagType?: string;
    /** 1 自依赖 2 任务依赖 3 所有依赖 */
    DagDependent?: string;
    /** dag深度 默认为1，取值 1-6 */
    DagDepth?: number;
    /** 租户id */
    TenantId?: string;
    /** 根据当前数据时间或者是下一个数据时间查询, 默认当前数据时间 */
    DataTimeCycle?: string;
    /** 资源组id,多个资源组id用英文逗号分隔 */
    ExecutorGroupIdList?: string[];
    /** true 只过滤重跑过的实例，false 忽略此过滤条件，结果集过滤条件中不包括是否重跑 */
    OnlyRerun?: boolean;
    /** 时区 */
    ScheduleTimeZone?: string;
    /** 计划调度时间 */
    ScheduleTimeFrom?: string;
    /** 计划调度时间 */
    ScheduleTimeTo?: string;
    /** 任务优先级过滤实例列表 */
    RunPriorityList?: number[];
    /** 实例调度周期筛选 */
    InstanceCycleType?: string[];
  }

  interface JudgeResourceFileRequest {
    /** 项目id */
    ProjectId: string;
    /** 资源路径 */
    FilePath: string;
  }

  interface JudgeResourceFileResponse {
    /** 资源文件完整路径 */
    Data?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface KillOpsMakePlanInstancesRequest {
    /** 项目ID */
    ProjectId: string;
    /** 补录计划ID */
    PlanId: string;
    /** 是否异步模式 */
    AsyncMode?: boolean;
    /** 补录计划名 */
    PlanName?: string;
  }

  interface KillOpsMakePlanInstancesResponse {
    /** 批量操作结果 */
    Data?: BatchOperateResultOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface KillScheduleInstancesRequest {
    /** 实例列表 */
    Instances?: InstanceOpsDto[];
    /** 检查父任务类型, true: 检查父任务; false: 不检查父任务 */
    CheckFather?: boolean;
    /** 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子 */
    RerunType?: string;
    /** 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖 */
    DependentWay?: string;
    /** 重跑忽略事件监听与否 */
    SkipEventListening?: boolean;
    /** 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目 */
    SonInstanceType?: string;
    /** 查询条件 */
    SearchCondition?: InstanceApiOpsRequest;
    /** 访问类型 */
    OptType?: string;
    /** 操作者名称 */
    OperatorName?: string;
    /** 操作者id */
    OperatorId?: string;
    /** 项目id */
    ProjectId?: string;
    /** 项目标志 */
    ProjectIdent?: string;
    /** 项目名称 */
    ProjectName?: string;
    /** 索引页码 */
    PageIndex?: number;
    /** 页面大小 */
    PageSize?: number;
    /** 数据总数 */
    Count?: number;
    /** 基础请求信息 */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /** 是否计算总数 */
    IsCount?: boolean;
    /** 是否异步模式 */
    AsyncMode?: boolean;
  }

  interface KillScheduleInstancesResponse {
    /** 结果 */
    Data?: BatchOperateResultOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ListBatchDetailRequest {
    /** 批量操作历史Id */
    JobId: number;
    /** 项目Id */
    ProjectId?: string;
  }

  interface ListBatchDetailResponse {
    /** 批量操作ID */
    JobId?: number | null;
    /** 运行类型：ASYNC-异步SYNC-同步 */
    RunType?: string | null;
    /** 成功列表 */
    SuccessResource?: AsyncResourceVO[] | null;
    /** 失败列表 */
    FailResource?: AsyncResourceVO[] | null;
    /** job类型BATCH_DELETE --批量删除：1、任务名称：ResourceNameBATCH_CREATE_VERSION --批量提交：1、任务名称：ResourceId 2、资源组：GroupIdBATCH_MODIFY_DATASOURCE --批量修改数据源：1、任务名称：ResourceNameBATCH_MODIFY_INCHARGE --批量修改责任人：1、任务名称：ResourceNameBATCH_MODIFY_PARAMETER --批量修改参数：1、任务名称：ResourceNameBATCH_MODIFY_SCHEDULE --批量修改调度计划：1、任务名称：ResourceNameBATCH_MODIFY_GROUPID --批量修改资源组：1、任务名称：ResourceNameBATCH_MODIFY_CONFIG --批量修改高级配置：1、任务名称：ResourceNameBATCH_MODIFY_SCHEDULE_PARAMETER --批量修改调度参数：1、任务名称：ResourceNameFORM_CREATE_VERSION--模版提交 */
    JobType?: string | null;
    /** CREATING("CREATING", "创建中"),INIT("INIT", "已被创建"),RUNNING("RUNNING", "运行中"),SUCCESS("SUCCESS", "成功"),FAIL("FAIL", "失败"),PART_SUCCESS("PART_SUCCESS", "部分成功"),PART_SUCCESS_WITH_ALARM("PART_SUCCESS_WITH_ALARM", "部分成功有告警"),SUCCESS_WITH_ALARM("SUCCESS_WITH_ALARM", "成功有告警"),UNKNOWN("UNKNOWN", "未知状态"); */
    JobStatus?: string | null;
    /** 资源总数 */
    TotalResource?: number | null;
    /** 批量提交是是否需要审批，其他的批量操作默认为null */
    NeedApprove?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ListInstancesRequest {
    /** **项目ID** */
    ProjectId: string;
    /** **实例计划调度时间过滤条件**过滤起始时间，时间格式为 yyyy-MM-dd HH:mm:ss */
    ScheduleTimeFrom: string;
    /** **实例计划调度时间过滤条件**过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss */
    ScheduleTimeTo: string;
    /** **页码，整型**配合pageSize使用且不能小于1， 默认值1 */
    PageNumber?: number;
    /** **每页数目，整型**配合pageNumber使用且不能大于200, 默认值 10 */
    PageSize?: number;
    /** **查询结果排序字段**- SCHEDULE_DATE 表示 根据计划调度时间排序- START_TIME 表示 根据实例开始执行时间排序- END_TIME 表示 根据实例结束执行时间排序- COST_TIME 表示 根据实例执行时长排序 */
    SortColumn?: string;
    /** **实例排序方式**- ASC - DESC */
    SortType?: string;
    /** **实例类型**- 0 表示补录类型- 1 表示周期实例- 2 表示非周期实例 */
    InstanceType?: number;
    /** **实例执行状态**支持过滤多个，条件间为 或 的过滤关系- [0] 表示 等待事件- [12] 表示 等待上游- [6, 7, 9, 10, 18] 表示 等待运行- [1, 19, 22] 表示 运行中- [21] 表示 跳过运行- [3] 表示 失败重试- [8, 4, 5, 13] 表示 失败- [2] 表示 成功 */
    InstanceStateList?: number[];
    /** **任务类型Id**- 支持过滤多个，条件间为 或 的过滤关系- 可以通过接口 DescribeAllTaskType 获取项目支持的全部任务类型 */
    TaskTypeIdList?: number[];
    /** **任务周期类型**支持过滤多个，条件间为 或 的过滤关系* O: ONEOFF_CYCLE* Y: YEAR_CYCLE* M: MONTH_CYCLE* W: WEEK_CYCLE* D: DAY_CYCLE* H: HOUR_CYCLE* I: MINUTE_CYCLE* C: CRONTAB_CYCLE */
    TaskCycleList?: string[];
    /** **任务名称 或 任务ID**支持模糊搜索过滤, 多个用 英文逗号, 分割 */
    Keyword?: string;
    /** **任务负责人**支持过滤多个，条件间为 或 的过滤关系 */
    InChargeList?: string[];
    /** **任务所属文件件**支持过滤多个，条件间为 或 的过滤关系可以通过接口 FindAllFolder 获取项目下的所有文件夹列表 */
    TaskFolderIdList?: string[];
    /** **任务所属工作流**支持过滤多个，条件间为 或 的过滤关系可以通过接口 DescribeOpsWorkflows 获取项目下的所有工作流列表 */
    WorkflowIdList?: string[];
    /** **执行资源组Id**支持过滤多个，条件间为 或 的过滤关系可以通过接口 DescribeNormalSchedulerExecutorGroups 获取项目下的所有调度资源组列表可以通过接口 DescribeNormalIntegrationExecutorGroups 获取项目下的所有集成资源组列表 */
    ExecutorGroupIdList?: string[];
    /** **实例执行开始时间过滤条件**过滤起始时间，时间格式为 yyyy-MM-dd HH:mm:ss */
    StartTimeFrom?: string;
    /** **实例执行开始时间过滤条件**过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss */
    StartTimeTo?: string;
    /** **时区**timeZone, 默认UTC+8 */
    ScheduleTimeZone?: string;
    /** **实例最近更新时间过滤条件**过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss */
    LastUpdateTimeFrom?: string;
    /** **实例最近更新时间过滤条件**过滤截止时间，时间格式为 yyyy-MM-dd HH:mm:ss */
    LastUpdateTimeTo?: string;
  }

  interface ListInstancesResponse {
    /** 实例结果集 */
    Data?: InstancePageVO;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface LockIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
  }

  interface LockIntegrationTaskResponse {
    /** 操作成功与否标识 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyApproveStatusRequest {
    /** 审批单ids */
    ApproveIds?: string[];
    /** 审批备注 */
    Remark?: string;
    /** 状态 */
    Status?: string;
  }

  interface ModifyApproveStatusResponse {
    /** 修改审批单状态 */
    Data?: ApproveModify[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDataSourceRequest {
    /** 数据源名称，在相同SpaceName下，数据源名称不能为空 */
    Name: string;
    /** 数据源类别：绑定引擎、绑定数据库 */
    Category: string;
    /** 数据源类型:枚举值 */
    Type: string;
    /** 数据源ID */
    ID?: number;
    /** 业务侧数据源的配置信息扩展 */
    BizParams?: string;
    /** 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同 */
    Params?: string;
    /** 数据源描述信息 */
    Description?: string;
    /** 数据源展示名，为了可视化查看 */
    Display?: string;
    /** 若数据源列表为绑定数据库，则为db名称 */
    DatabaseName?: string;
    /** 数据源引擎的实例ID，如CDB实例ID */
    Instance?: string;
    /** 数据源数据源的可见性，1为可见、0为不可见。默认为1 */
    Status?: number;
    /** 数据源所属的业务空间名称 */
    ClusterId?: string;
    /** 是否采集 */
    Collect?: string;
    /** 项目id */
    OwnerProjectId?: string;
    /** 项目名称 */
    OwnerProjectName?: string;
    /** 项目中文名 */
    OwnerProjectIdent?: string;
    /** cos bucket */
    COSBucket?: string;
    /** cos region */
    COSRegion?: string;
    /** 操作项目id */
    ProjectId?: string;
    /** 数据源开发环境配置 */
    DevelopmentParams?: string;
  }

  interface ModifyDataSourceResponse {
    /** 是否成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDimensionWeightRequest {
    /** 权重信息列表 */
    WeightInfoList: WeightInfo[];
    /** 项目id */
    ProjectId: string;
    /** 是否重刷历史数据 */
    Refresh: boolean;
  }

  interface ModifyDimensionWeightResponse {
    /** 更新权重是否成功 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyDsFolderRequest {
    /** 项目Id */
    ProjectId: string;
    /** 文件夹名称 */
    FolderName: string;
    /** 文件夹Id */
    FolderId: string;
    /** 父文件夹ID */
    ParentsFolderId?: string;
  }

  interface ModifyDsFolderResponse {
    /** true代表成功，false代表失败 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyExecStrategyRequest {
    /** 规则组ID */
    RuleGroupId?: number;
    /** 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测 */
    MonitorType?: number;
    /** 计算队列 */
    ExecQueue?: string;
    /** 执行资源组ID */
    ExecutorGroupId?: string;
    /** 执行资源组名称 */
    ExecutorGroupName?: string;
    /** 关联的生产调度任务列表 */
    Tasks?: ProdSchedulerTask[];
    /** 项目ID */
    ProjectId?: string;
    /** 离线周期模式下,生效日期-开始时间 */
    StartTime?: string;
    /** 离线周期模式下,生效日期-结束时间 */
    EndTime?: string;
    /** 离线周期模式下,调度周期 MINUTE_CYCLE:I,HOUR_CYCLE:H,DAY_CYCLE:D,WEEK_CYCLE:W,MONTH_CYCLE:M */
    CycleType?: string;
    /** 离线周期模式下,调度步长 */
    CycleStep?: number;
    /** 离线周期模式下,指定时间 */
    TaskAction?: string;
    /** 延时执行时间，单位分钟，可选: <0-1439 */
    DelayTime?: number;
    /** 数据库Id */
    DatabaseId?: string;
    /** 数据源Id */
    DatasourceId?: string;
    /** 数据表Id */
    TableId?: string;
    /** 运行的执行引擎，不传时会请求该数据源下默认的执行引擎 */
    ExecEngineType?: string;
    /** 触发场景 */
    TriggerTypes?: string[];
  }

  interface ModifyExecStrategyResponse {
    /** 规则组ID */
    Data?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyIntegrationNodeRequest {
    /** 集成节点信息 */
    NodeInfo: IntegrationNodeInfo;
    /** 项目id */
    ProjectId: string;
    /** 任务类型 "201. stream, 202. offline" */
    TaskType?: number;
    /** 区分画布模式和表单 "1. 画布, 2. 表单"模式 */
    TaskMode?: number;
  }

  interface ModifyIntegrationNodeResponse {
    /** 节点id */
    Id?: string;
    /** 任务id */
    TaskId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyIntegrationTaskRequest {
    /** 任务信息 */
    TaskInfo: IntegrationTaskInfo;
    /** 项目id */
    ProjectId: string;
    /** 默认false . 为true时表示走回滚节点逻辑 */
    RollbackFlag?: boolean;
  }

  interface ModifyIntegrationTaskResponse {
    /** 任务id */
    TaskId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyMonitorStatusRequest {
    /** 项目Id */
    ProjectId?: string;
    /** 规则组ID */
    RuleGroupId?: number;
    /** 监控开关状态 */
    MonitorStatus?: boolean;
  }

  interface ModifyMonitorStatusResponse {
    /** 监控状态修改成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyProjectRequest {
    /** 目标修改的项目ID */
    ProjectId: string;
    /** 项目显示名称，可以为中文名,需要租户范围内唯一 */
    DisplayName?: string;
    /** 备注 */
    Description?: string;
    /** true/false则修改，不带该参数不修改。 */
    TaskSubmitApproval?: boolean;
    /** 资源池信息 */
    ResourcePoolInfo?: ResourcePoolInfo;
    /** 项目管理员 */
    ProjectManagers?: string[];
    /** 调度任务严格模式 */
    TaskStrictMode?: boolean;
    /** 以后新增选项可以直接通过前端的json格式写入去实现 */
    ExtraOptions?: string;
    /** 项目类型，SIMPLE：简单模式 STANDARD：标准模式 */
    Model?: string;
    /** 项目负责人 */
    ProjectOwner?: string[];
    /** 更新类型 */
    ModifyType?: string;
  }

  interface ModifyProjectResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyRuleGroupSubscriptionRequest {
    /** 规则组ID */
    RuleGroupId?: number;
    /** 订阅人信息 */
    Receivers?: SubscribeReceiver[];
    /** 订阅类型 */
    SubscribeType?: number[];
    /** 项目ID */
    ProjectId?: string;
    /** 数据库Id */
    DatabaseId?: string;
    /** 数据源Id */
    DatasourceId?: string;
    /** 数据表Id */
    TableId?: string;
    /** 群机器人webhook信息 */
    WebHooks?: SubscribeWebHook[];
  }

  interface ModifyRuleGroupSubscriptionResponse {
    /** 规则组ID */
    Data?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyRuleRequest {
    /** 项目Id */
    ProjectId?: string;
    /** 规则ID */
    RuleId?: number;
    /** 规则组ID */
    RuleGroupId?: number;
    /** 规则名称 */
    Name?: string;
    /** 数据表ID */
    TableId?: string;
    /** 规则模板ID */
    RuleTemplateId?: number;
    /** 规则类型 1.系统模版, 2.自定义模版, 3.自定义SQL */
    Type?: number;
    /** 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性） */
    QualityDim?: number;
    /** 源字段详细类型，int、string */
    SourceObjectDataTypeName?: string;
    /** 源字段名称 */
    SourceObjectValue?: string;
    /** 检测范围 1.全表 2.条件扫描 */
    ConditionType?: number;
    /** 条件扫描WHERE条件表达式 */
    ConditionExpression?: string;
    /** 自定义SQL */
    CustomSql?: string;
    /** 报警触发条件 */
    CompareRule?: CompareRule;
    /** 报警触发级别 1.低, 2.中, 3.高 */
    AlarmLevel?: number;
    /** 规则描述 */
    Description?: string;
    /** 目标库Id */
    TargetDatabaseId?: string;
    /** 目标表Id */
    TargetTableId?: string;
    /** 目标过滤条件表达式 */
    TargetConditionExpr?: string;
    /** 源字段与目标字段关联条件on表达式 */
    RelConditionExpr?: string;
    /** 自定义模版sql表达式字段替换参数 */
    FieldConfig?: RuleFieldConfig;
    /** 目标字段名称 CITY */
    TargetObjectValue?: string;
    /** 该规则适配的执行引擎 */
    SourceEngineTypes?: number[];
    /** 目标库名 */
    TargetDatabaseName?: string;
    /** 目标模式名 */
    TargetSchemaName?: string;
    /** 目标表名 */
    TargetTableName?: string;
    /** 目录 */
    CatalogName?: string;
    /** 目标目录 */
    TargetCatalogName?: string;
  }

  interface ModifyRuleResponse {
    /** 是否更新成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyRuleTemplateRequest {
    /** 模板ID */
    TemplateId?: number;
    /** 模板类型 1.系统模板 2.自定义模板 */
    Type?: number;
    /** 模板名称 */
    Name?: string;
    /** 质量检测维度 1.准确性 2.唯一性 3.完整性 4.一致性 5.及时性 6.有效性 */
    QualityDim?: number;
    /** 源端数据对象类型 1.常量 2.离线表级 2.离线字段级 */
    SourceObjectType?: number;
    /** 描述 */
    Description?: string;
    /** 源端对应的引擎类型 */
    SourceEngineTypes?: number[];
    /** 是否关联其它库表 */
    MultiSourceFlag?: boolean;
    /** SQL 表达式 */
    SqlExpression?: string;
    /** 项目Id */
    ProjectId?: string;
    /** 是否添加where参数 */
    WhereFlag?: boolean;
  }

  interface ModifyRuleTemplateResponse {
    /** 修改成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyTaskAlarmRegularRequest {
    /** 规则ID */
    Id: string;
    /** 规则信息 */
    TaskAlarmInfo: TaskAlarmInfo;
    /** 项目ID */
    ProjectId: string;
  }

  interface ModifyTaskAlarmRegularResponse {
    /** 判断是否修改成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyTaskInfoDsRequest {
    /** 项目Id */
    ProjectId: string;
    /** 任务ID */
    TaskId: string;
    /** 执行时间，单位分钟，天/周/月/年调度才有。比如天调度，每天的02:00点执行一次，delayTime就是120分钟 */
    DelayTime?: number;
    /** 启动时间：该字段已废弃，无需填写 */
    StartupTime?: number;
    /** 自依赖类型 1:有序串行 一次一个 排队 2: 无序串行 一次一个 不排队 3:并行 一次多个；暂不支持其他值 */
    SelfDepend?: number;
    /** 生效开始时间，格式 yyyy-MM-dd HH:mm:ss */
    StartTime?: string;
    /** 生效结束时间，格式 yyyy-MM-dd HH:mm:ss */
    EndTime?: string;
    /** 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为 0,3,4。设置该值时，请把CycleStep字段设置为1（如果原始值不为1）。 */
    TaskAction?: string;
    /** 周期类型 0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离 */
    CycleType?: number;
    /** 小时和分钟任务才有；分钟任务：5、10、15、20、30，表示每隔5【或其他值】分钟执行一次；小时任务：1、2、3、4、5、6、7、8、9、10、11、12，表示每隔1【或其他值】小时执行一次。该值大于1时，请把TaskAction字段设置为空字符串。 */
    CycleStep?: number;
    /** cron表达式 周期类型为crontab调度才需要 */
    CrontabExpression?: string;
    /** 执行时间左闭区间，格式：HH:mm 小时调度才有，例如小时任务, 每日固定区间生效 */
    ExecutionStartTime?: string;
    /** 执行时间右闭区间，格式：HH:mm 小时调度才有，例如小时任务, 每日固定区间生效 */
    ExecutionEndTime?: string;
    /** 任务名，该字段废弃，请勿使用该字段重命名任务 */
    TaskName?: string;
    /** 失败重试间隔,单位分钟，创建任务的时候已经给了默认值 */
    RetryWait?: number;
    /** 失败重试次数，创建任务的时候已经给了默认值 */
    TryLimit?: number;
    /** 是否可重试，0代码不可重试，1代表可以重试；暂不支持其他值 */
    Retriable?: number;
    /** 运行优先级，4高 5中 6低；暂不支持其他值 */
    RunPriority?: number;
    /** 任务的扩展配置 */
    TaskExt?: TaskExtInfo[];
    /** 执行资源组Id，需要去资源管理服务上创建调度资源组，并且绑定cvm机器 */
    ResourceGroup?: string;
    /** 资源池队列名称 */
    YarnQueue?: string;
    /** 资源组下具体执行机，any 表示可以跑在任意一台。 */
    BrokerIp?: string;
    /** 责任人，多个责任人请用分号隔开 */
    InCharge?: string;
    /** 任务备注 */
    Notes?: string;
    /** 任务参数 */
    TaskParamInfos?: ParamInfo[];
    /** 源数据源Id */
    SourceServer?: string;
    /** 目标数据源Id */
    TargetServer?: string;
    /** 是否支持工作流依赖 yes / no 默认 no */
    DependencyWorkflow?: string;
    /** 依赖配置,仅可修改上游任务实例配置方法 */
    DependencyConfigDTOs?: DependencyConfig[];
    /** 运行耗时超时时间分钟数 */
    ExecutionTTL?: number;
    /** 脚本是否改变 */
    ScriptChange?: boolean;
    /** 任务时区，仅支持整数时区配置 */
    ScheduleTimeZone?: string;
    /** 0 正常调度 1 空跑调度；暂不支持其他值 */
    ScheduleRunType?: number;
    /** 0 并发度达到上限时，本次排队等待 1 并发度达到上限时，本次不执行，直接kill；暂不支持其他值 */
    ConcurrentStrategy?: number;
    /** shell任务发布事件 */
    RegisterDsEventPublisherRequest?: RegisterDsEventPublisherReq;
    /** base64编码后脚本内容 */
    Content?: string;
  }

  interface ModifyTaskInfoDsResponse {
    /** 执行结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyTaskInfoRequest {
    /** 项目Id */
    ProjectId: string;
    /** 任务ID */
    TaskId: string;
    /** 执行时间，单位分钟，天/周/月/年调度才有。比如天调度，每天的02:00点执行一次，delayTime就是120分钟 */
    DelayTime?: number;
    /** 启动时间 */
    StartupTime?: number;
    /** 自依赖类型 1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个 */
    SelfDepend?: number;
    /** 生效开始时间，格式 yyyy-MM-dd HH:mm:ss */
    StartTime?: string;
    /** 生效结束时间，格式 yyyy-MM-dd HH:mm:ss */
    EndTime?: string;
    /** 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。 */
    TaskAction?: string;
    /** "周期类型 0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离 */
    CycleType?: number;
    /** 步长，间隔时间，最小1 */
    CycleStep?: number;
    /** cron表达式 周期类型为crontab调度才需要 */
    CrontabExpression?: string;
    /** 执行时间左闭区间，格式：HH:mm 小时调度才有，例如小时任务, 每日固定区间生效 */
    ExecutionStartTime?: string;
    /** 执行时间右闭区间，格式：HH:mm 小时调度才有，例如小时任务, 每日固定区间生效 */
    ExecutionEndTime?: string;
    /** 新的任务名 */
    TaskName?: string;
    /** 失败重试间隔,单位分钟，创建任务的时候已经给了默认值 */
    RetryWait?: number;
    /** 失败重试次数，创建任务的时候已经给了默认值 */
    TryLimit?: number;
    /** 是否可重试，1代表可以重试 */
    Retriable?: number;
    /** 运行优先级，4高 5中 6低 */
    RunPriority?: number;
    /** 任务的扩展配置 */
    TaskExt?: TaskExtInfo[];
    /** 执行资源组id，需要去资源管理服务上创建调度资源组，并且绑定cvm机器 */
    ResourceGroup?: string;
    /** 资源池队列名称 */
    YarnQueue?: string;
    /** 资源组下具体执行机，any 表示可以跑在任意一台。 */
    BrokerIp?: string;
    /** 责任人 */
    InCharge?: string;
    /** 任务备注 */
    Notes?: string;
    /** 任务参数 */
    TaskParamInfos?: ParamInfo[];
    /** 源数据源 */
    SourceServer?: string;
    /** 目标数据源 */
    TargetServer?: string;
    /** 是否支持工作流依赖 yes / no 默认 no */
    DependencyWorkflow?: string;
    /** 依赖配置 */
    DependencyConfigDTOs?: DependencyConfig[];
    /** 执行耗时 */
    ExecutionTTL?: number;
    /** 脚本是否改变 */
    ScriptChange?: boolean;
    /** 责任人id */
    InChargeIds?: string[];
  }

  interface ModifyTaskInfoResponse {
    /** 执行结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyTaskLinksDsRequest {
    /** 项目Id */
    ProjectId: string;
    /** 父任务ID */
    TaskFrom: string;
    /** 子任务ID */
    TaskTo: string;
    /** 子任务工作流 */
    WorkflowId: string;
    /** 父任务工作流 */
    RealFromWorkflowId: string;
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string;
    /** 父子任务之间的依赖关系 正常的依赖父任务全部实例 启用 normal_all(1), normal_first_one(2), 正常的依赖父任务 第一个 normal_last_one(3), 正常的依赖父任务 最后一个 normal_any_one(4), 正常的依赖父任务 任意一个 normal_specific_one(5), 正常的依赖父任务 指定的一个 self(6), 自身依赖，可能用不到 非正常的依赖父任务全部实例 启用（向前依赖 明天) non_normal_all_forward(11), non_normal_first_one_forward(12), 非正常的依赖父任务 第一个 non_normal_last_one_forward(13), 非正常的依赖父任务 最后一个 non_normal_any_one_forward(14), 非正常的依赖父任务 任意一个 non_normal_specific_one_forward(15),非正常的依赖父任务 指定一个 非正常的依赖父任务全部实例 启用（向后依赖 昨天） non_normal_all_backward(21), non_normal_first_one_backward(22), 非正常的依赖父任务 第一个 non_normal_last_one_backward(23), 非正常的依赖父任务 最后一个 non_normal_any_one_backward(24), 非正常的依赖父任务 任意一个 non_normal_specific_one_backward(25) 非正常的依赖父任务 指定一个 */
    LinkDependencyType?: string;
    /** 额外的属性信息 如分支节点、归并节点信息 */
    LinkExt?: string;
  }

  interface ModifyTaskLinksDsResponse {
    /** 成功或失败 */
    Data?: boolean | null;
    /** linkID */
    LinkId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyTaskLinksRequest {
    /** 项目Id */
    ProjectId: string;
    /** 父任务ID */
    TaskFrom: string;
    /** 子任务ID */
    TaskTo: string;
    /** 子任务工作流 */
    WorkflowId: string;
    /** 父任务工作流 */
    RealFromWorkflowId: string;
    /** 父子任务之间的依赖关系 */
    LinkDependencyType?: string;
  }

  interface ModifyTaskLinksResponse {
    /** 成功或者失败 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyTaskNameRequest {
    /** 名称 */
    TaskName: string;
    /** id */
    TaskId: string;
    /** 项目/工作空间id */
    ProjectId: string;
    /** 备注 */
    Notes?: string;
  }

  interface ModifyTaskNameResponse {
    /** 结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyTaskScriptRequest {
    /** 项目Id */
    ProjectId: string;
    /** 任务ID */
    TaskId: string;
    /** 存在脚本的任务必填（shell任务、Hive任务、python任务等），脚本内容 base64编码 */
    ScriptContent?: string;
    /** 集成任务脚本配置 */
    IntegrationNodeDetails?: IntegrationNodeDetail[];
  }

  interface ModifyTaskScriptResponse {
    /** 详情 */
    Data?: CommonContent | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyWorkflowInfoRequest {
    /** 项目Id */
    ProjectId: string;
    /** 工作流id */
    WorkflowId: string;
    /** 责任人 */
    Owner?: string;
    /** 责任人id */
    OwnerId?: string;
    /** 备注 */
    WorkflowDesc?: string;
    /** 工作流名称 */
    WorkflowName?: string;
    /** 所属文件夹id */
    FolderId?: string;
    /** 工作流所属用户分组id 若有多个,分号隔开: a;b;c */
    UserGroupId?: string;
    /** 工作流所属用户分组名称 若有多个,分号隔开: a;b;c */
    UserGroupName?: string;
    /** 工作流参数列表 */
    WorkflowParams?: ParamInfo[];
    /** 用于配置优化参数（线程、内存、CPU核数等），仅作用于Spark SQL节点。多个参数用英文分号分隔。 */
    GeneralTaskParams?: GeneralTaskParam[];
  }

  interface ModifyWorkflowInfoResponse {
    /** true代表成功，false代表失败 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyWorkflowScheduleRequest {
    /** 项目Id */
    ProjectId: string;
    /** 工作流id */
    WorkflowId: string;
    /** 延迟时间，单位分钟 */
    DelayTime: number;
    /** 启动时间 */
    StartupTime: number;
    /** 自依赖类型 1:有序串行 一次一个 排队, 2: 无序串行 一次一个 不排队， 3:并行 一次多个 */
    SelfDepend: number;
    /** "周期类型 0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离 */
    CycleType: number;
    /** 步长，间隔时间，最小1 */
    CycleStep: number;
    /** 生效开始时间，格式 yyyy-MM-dd HH:mm:ss */
    StartTime?: string;
    /** 生效结束时间，格式 yyyy-MM-dd HH:mm:ss */
    EndTime?: string;
    /** 调度配置-弹性周期配置，小时/周/月/年调度才有，小时任务指定每天的0点3点4点跑，则为'0,3,4'。 */
    TaskAction?: string;
    /** cron表达式 周期类型为crontab调度才需要 */
    CrontabExpression?: string;
    /** 执行时间左闭区间，格式：HH:mm 小时调度才有，例如小时任务, 每日固定区间生效 */
    ExecutionStartTime?: string;
    /** 执行时间右闭区间，格式：HH:mm 小时调度才有，例如小时任务, 每日固定区间生效 */
    ExecutionEndTime?: string;
    /** 工作流依赖 ,yes 或者no */
    DependencyWorkflow?: string;
  }

  interface ModifyWorkflowScheduleResponse {
    /** 执行结果 */
    Data?: BatchResult;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface MoveTasksToFolderRequest {
    /** 项目Id */
    ProjectId: string;
    /** 工作流ID */
    WorkflowId: string;
    /** 任务文件夹ID */
    TaskFolderId: string;
    /** 任务ID */
    TaskIds: string[];
    /** 虚拟任务ID */
    VirtualTaskIds: string[];
  }

  interface MoveTasksToFolderResponse {
    /** true代表成功 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ProjectBaseInfoOpsRequest {
    /** 项目Id */
    ProjectId?: string;
    /** 项目标识 */
    ProjectIdent?: string;
    /** 项目名称 */
    ProjectName?: string;
    /** 是否admin */
    IsAdmin?: boolean;
  }

  interface RegisterDsEventListenerRequest {
    /** 项目Id */
    ProjectId: string;
    /** 任务Id */
    Key: string;
    /** 事件类型，默认 REST_API */
    Type: string;
    /** 事件名称 */
    EventName: string;
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string;
    /** 配置信息，比如最长等待时间3天配置：[{"ParamKey":"maxWaitEventTime","ParamValue":"3"},{"ParamKey":"maxWaitEventTimeUnit","ParamValue":"DAYS"}] */
    Properties?: ParamInfoDs[];
    /** 事件所属项目id */
    EventProjectId?: string;
  }

  interface RegisterDsEventListenerResponse {
    /** 事件监听者 */
    Data?: EventListenerDTO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RegisterDsEventRequest {
    /** 项目ID */
    ProjectId: string;
    /** 事件名称 */
    Name: string;
    /** 事件周期类型 1、分钟：MIN 2、小时 ：HOUR 3、天：DAY */
    EventSubType: string;
    /** 事件存活时间，值为大于0的整数 */
    TimeToLive: string;
    /** 事件存活时间单位	1、天：DAYS 2、分钟：MINUTES */
    TimeUnit: string;
    /** 事件所属人，账号昵称 */
    Owner: string;
    /** 事件描述 */
    Description: string;
    /** 事件类型GENERAL、TIME_SERIES */
    EventType?: string;
    /** 事件广播类型SINGLE、BROADCAST */
    EventBroadcastType?: string;
    /** 时间格式 */
    DimensionFormat?: string;
    /** 事件消费有效次数 */
    ValidConsumeCount?: number;
  }

  interface RegisterDsEventResponse {
    /** 事件信息 */
    Data?: EventDsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RegisterEventListenerRequest {
    /** 关键字，如果是任务，则传任务Id */
    Key: string;
    /** 事件名称 */
    EventName: string;
    /** 项目id */
    ProjectId: string;
    /** 事件类型，默认 REST_API */
    Type?: string;
    /** 配置信息，比如最长等待时间1天配置json：{"maxWaitEventTime":1,"maxWaitEventTimeUnit":"DAYS"} */
    Properties?: string;
  }

  interface RegisterEventListenerResponse {
    /** 成功或者失败 */
    Data?: BatchReturn | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RegisterEventRequest {
    /** 项目Id */
    ProjectId: string;
    /** 事件名称，支持英文、数字和下划线，最长20个字符, 不能以数字下划线开头。 */
    Name: string;
    /** 事件分割类型，周期类型: DAY，HOUR，MIN，SECOND */
    EventSubType: string;
    /** 广播：BROADCAST,单播：SINGLE */
    EventBroadcastType: string;
    /** 周期类型为天和小时为HOURS ，周期类型为分钟 ：MINUTES,周期类型为秒：SECONDS */
    TimeUnit: string;
    /** 事件所属人 */
    Owner: string;
    /** 事件类型，不填会使用默认值 TIME_SERIES 填充 */
    EventType?: string;
    /** 对应day： yyyyMMdd，对应HOUR：yyyyMMddHH，对应MIN：yyyyMMddHHmm，对应SECOND：yyyyMMddHHmmss，默认值：yyyyMMdd */
    DimensionFormat?: string;
    /** 存活时间 */
    TimeToLive?: number;
    /** 事件描述 */
    Description?: string;
  }

  interface RegisterEventResponse {
    /** 成功或者失败 */
    Data?: BatchReturn | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RemoveDatabaseRequest {
    /** 数据源id */
    DatasourceId: number;
    /** database名称 */
    DatabaseName: string;
  }

  interface RemoveDatabaseResponse {
    /** 异步删除的任务id,用于查询执行状态 */
    JobId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RemoveSchemaRequest {
    /** 数据源id */
    DatasourceId: number;
    /** database名称 */
    DatabaseName: string;
    /** schema名称 */
    SchemaName: string;
  }

  interface RemoveSchemaResponse {
    /** 异步删除的任务id,用于查询执行状态 */
    JobId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RemoveTableRequest {
    /** 数据源id */
    DatasourceId: number;
    /** database名称 */
    DatabaseName: string;
    /** schema名称 */
    SchemaName: string;
    /** 表名称 */
    TableName: string;
  }

  interface RemoveTableResponse {
    /** 结果 */
    Result?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RemoveWorkflowDsRequest {
    /** 项目ID */
    ProjectId: string;
    /** 工作流ID */
    WorkflowId: string;
    /** 是否删除脚本 */
    DeleteScript?: string;
    /** 删除是否通知下游 */
    OperateIsInform?: string;
    /** 是否终止进行中的任务 */
    DeleteMode?: string;
  }

  interface RemoveWorkflowDsResponse {
    /** 是否删除成功 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RenewWorkflowOwnerDsRequest {
    /** 工作流ID */
    ProjectId: string;
    /** 责任人 */
    Owner: string;
    /** 责任人ID */
    OwnerId: string;
    /** 工作流ID列表 */
    WorkflowIds: string[];
  }

  interface RenewWorkflowOwnerDsResponse {
    /** 执行结果 */
    Data?: BatchResultDs;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RenewWorkflowSchedulerInfoDsRequest {
    /** 项目ID */
    ProjectId: string;
    /** 工作流ID */
    WorkflowId: string;
    /** 延迟时间 */
    DelayTime?: number;
    /** 启动时间 */
    StartupTime?: number;
    /** 任务依赖 */
    SelfDepend?: string;
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
    /** 指定运行时间 */
    TaskAction?: string;
    /** 调度周期时间单位 */
    CycleType?: string;
    /** 调度周期 */
    CycleStep?: number;
    /** 执行时间左闭区间 */
    ExecutionStartTime?: string;
    /** 执行时间右闭区间 */
    ExecutionEndTime?: string;
    /** 任务初始化策略，T_PLUS_1、T_PLUS_0、T_MINUS_1 */
    InstanceInitStrategy?: string;
    /** 工作流依赖，yes or no */
    DependencyWorkflow?: string;
    /** CrontabExpression */
    CrontabExpression?: string;
    /** 0：不修改1：将任务的上游依赖配置改为默认值 */
    ModifyCycleValue?: string;
    /** 是否开启日历调度 1 开启 0关闭 */
    CalendarOpen?: string;
    /** 日历名称 */
    CalendarName?: string;
    /** 日历id */
    CalendarId?: string;
    /** 时区 */
    ScheduleTimeZone?: string;
    /** 是否自动清理不支持的任务链接 */
    ClearLink?: boolean;
    /** ModifyCycleValue为1的时候生效，表示默认修改的上游依赖-时间维度 */
    MainCyclicConfig?: string;
    /** ModifyCycleValue为1的时候生效，表示默认修改的上游依赖-实例范围 */
    SubordinateCyclicConfig?: string;
  }

  interface RenewWorkflowSchedulerInfoDsResponse {
    /** 数据 */
    Data?: BatchResultDs | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ReportDatabaseRequest {
    /** 数据源id */
    DatasourceId: number;
    /** database名称,字符长度128内 */
    DatabaseName: string;
    /** 描述,字符长度3000内 */
    Description?: string;
    /** 创建时间戳,毫秒,为空默认当前时间 */
    CreateTime?: number;
    /** 修改时间戳,毫秒,为空默认当前时间 */
    ModifiedTime?: number;
  }

  interface ReportDatabaseResponse {
    /** 元数据唯一id */
    Guid?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ReportSchemaRequest {
    /** 数据源id */
    DatasourceId: number;
    /** database名称,字符长度128内 */
    DatabaseName: string;
    /** schema名称,字符长度128内 */
    SchemaName: string;
    /** 描述,字符长度3000内 */
    Description?: string;
    /** 创建时间戳,毫秒,为空默认当前时间 */
    CreateTime?: number;
    /** 修改时间戳,毫秒,为空默认当前时间 */
    ModifiedTime?: number;
  }

  interface ReportSchemaResponse {
    /** 元数据唯一id */
    Guid?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ReportTableRequest {
    /** 数据源id */
    DatasourceId: number;
    /** database名称,字符长度128内 */
    DatabaseName: string;
    /** table名称,字符长度128内 */
    TableName: string;
    /** 表类型,VIEW/TABLE */
    Type: string;
    /** schema名称,字符长度128内 */
    SchemaName?: string;
    /** 描述,字符长度1000内 */
    Description?: string;
    /** 创建时间戳,毫秒,为空默认当前时间 */
    CreateTime?: number;
    /** 修改时间戳,毫秒,为空默认当前时间 */
    ModifiedTime?: number;
    /** 字段信息 */
    Columns?: ReportColumnInfo[];
  }

  interface ReportTableResponse {
    /** 元数据唯一id */
    Guid?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ReportTaskLineageRequest {
    /** 上报渠道 */
    ChannelType: string;
    /** 血缘任务 */
    Task: LineageTask;
    /** 项目ID */
    ProjectId?: string;
    /** 表血缘关系 */
    TableLineages?: TableLineagePair[];
    /** 列血缘关系 */
    ColumnLineages?: ColumnLineagePair[];
  }

  interface ReportTaskLineageResponse {
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string | null;
    /** 上报结果 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ResumeIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
    /** 事件类型(START, STOP, SUSPEND, RESUME, COMMIT, TIMESTAMP) */
    Event?: string;
    /** 额外参数 */
    ExtConfig?: RecordField[];
    /** 前端操作类型描述 */
    EventDesc?: string;
  }

  interface ResumeIntegrationTaskResponse {
    /** 操作成功与否标识 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RobAndLockIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
    /** 任务类型：201. stream, 202. offline */
    TaskType: number;
  }

  interface RobAndLockIntegrationTaskResponse {
    /** 抢锁状态 */
    RobLockState?: RobLockState;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RunForceSucScheduleInstancesRequest {
    /** 实例列表 */
    Instances?: InstanceOpsDto[];
    /** 检查父任务类型, true: 检查父任务; false: 不检查父任务 */
    CheckFather?: boolean;
    /** 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子 */
    RerunType?: string;
    /** 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖 */
    DependentWay?: string;
    /** 重跑忽略事件监听与否 */
    SkipEventListening?: boolean;
    /** 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目 */
    SonInstanceType?: string;
    /** 查询条件 */
    SearchCondition?: InstanceApiOpsRequest;
    /** 访问类型 */
    OptType?: string;
    /** 操作者名称 */
    OperatorName?: string;
    /** 操作者id */
    OperatorId?: string;
    /** 项目id */
    ProjectId?: string;
    /** 项目标志 */
    ProjectIdent?: string;
    /** 项目名称 */
    ProjectName?: string;
    /** 索引页码 */
    PageIndex?: number;
    /** 页面大小 */
    PageSize?: number;
    /** 数据总数 */
    Count?: number;
    /** 基础请求信息 */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /** 是否计算总数 */
    IsCount?: boolean;
    /** 是否异步模式 */
    AsyncMode?: boolean;
  }

  interface RunForceSucScheduleInstancesResponse {
    /** 结果 */
    Data?: BatchOperateResultOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RunRerunScheduleInstancesRequest {
    /** 必填，实例列表，每项必填TaskId ，CurRunDate */
    Instances?: InstanceOpsDto[];
    /** 必填，检查父任务类型, true: 检查父任务; false: 不检查父任务 */
    CheckFather?: boolean;
    /** 必填，重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子 */
    RerunType?: string;
    /** 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖 */
    DependentWay?: string;
    /** 必填，重跑忽略事件监听与否 */
    SkipEventListening?: boolean;
    /** 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目 */
    SonInstanceType?: string;
    /** 查询条件 */
    SearchCondition?: InstanceApiOpsRequest;
    /** 访问类型 */
    OptType?: string;
    /** 操作者名称 */
    OperatorName?: string;
    /** 操作者id */
    OperatorId?: string;
    /** 必填，项目id */
    ProjectId?: string;
    /** 项目标志 */
    ProjectIdent?: string;
    /** 项目名称 */
    ProjectName?: string;
    /** 索引页码 */
    PageIndex?: number;
    /** 页面大小 */
    PageSize?: number;
    /** 数据总数 */
    Count?: number;
    /** 基础请求信息 */
    RequestBaseInfo?: ProjectBaseInfoOpsRequest;
    /** 是否计算总数 */
    IsCount?: boolean;
    /** 必填，是否异步模式 */
    AsyncMode?: boolean;
    /** 是否检查上游任务： ALL（全部）、 MAKE_SCOPE（选中）、NONE （全部不检查） */
    CheckParentType?: string;
    /** 任务原有自依赖配置 true（是）、false（否） */
    SameSelfDependType?: boolean;
    /** 实例运行并发度 */
    ParallelNum?: number;
    /** 任务原有自依赖配置 true（是）、false（否） */
    SameSelfWorkflowDependType?: boolean;
    /** 代表重新指定 的 是 或者 否 yes、 no */
    SelfWorkflowDependency?: string;
    /** 运行实例数据时间排序 0---正常 1--正序 2 – 逆序 */
    DataTimeOrder?: number;
    /** 重跑参数 */
    ReDoParams?: string;
    /** 重跑实例自定义参数 */
    MapParamList?: StrToStrMap[];
    /** 引擎应用执行参数 */
    AppParam?: string;
  }

  interface RunRerunScheduleInstancesResponse {
    /** 结果 */
    Data?: BatchOperateResultOpsDto;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RunTasksByMultiWorkflowRequest {
    /** 项目id */
    ProjectId: string;
    /** 工作流id列表 */
    WorkflowIds: string[];
    /** 是否补录中间实例 0.不补录 1.补录实例 */
    EnableMakeUp: number;
  }

  interface RunTasksByMultiWorkflowResponse {
    /** 操作返回结果 */
    Data?: OperationOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SaveCustomFunctionRequest {
    /** 函数唯一标识 */
    FunctionId: string;
    /** 分类：窗口函数、聚合函数、日期函数...... */
    Kind: string;
    /** 集群引擎实例 */
    ClusterIdentifier: string;
    /** 类名 */
    ClassName: string;
    /** 资源列表 */
    ResourceList: FunctionResource[];
    /** 函数说明 */
    Description: string;
    /** 用法 */
    Usage: string;
    /** 参数说明 */
    ParamDesc: string;
    /** 返回值说明 */
    ReturnDesc: string;
    /** 示例 */
    Example: string;
    /** 项目id，不支持修改，dlc侧创建函数保存时用 */
    ProjectId?: string;
    /** 数据库名称，不支持修改，dlc侧创建函数保存时用 */
    DbName?: string;
    /** 函数名称，不支持修改，dlc侧创建函数保存时用 */
    Name?: string;
  }

  interface SaveCustomFunctionResponse {
    /** 函数唯一标识 */
    FunctionId?: string | null;
    /** 无 */
    ErrorMessage?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ScriptInfoResponse {
    /** 资源id */
    ResourceId?: string | null;
    /** 脚本名称 */
    FileName?: string | null;
    /** 文件扩展名类型 */
    FileExtensionType?: string | null;
    /** 文件类型 */
    Type?: string | null;
    /** md5值 */
    Md5Value?: string | null;
    /** 创建时间 */
    CreateTime?: string | null;
    /** 更新时间 */
    UpdateTime?: string | null;
    /** 文件大小 */
    Size?: number | null;
    /** 本地路径 */
    LocalPath?: string | null;
    /** 远程路径 */
    RemotePath?: string | null;
    /** 用户名称 */
    OwnerName?: string | null;
    /** 用户id */
    Owner?: string | null;
    /** 路径深度 */
    PathDepth?: number | null;
    /** 项目id */
    ProjectId?: string | null;
    /** 附加信息 */
    ExtraInfo?: string | null;
    /** 本地临时文件路径 */
    LocalTempPath?: string | null;
    /** 本地压缩文件路径 */
    ZipPath?: string | null;
    /** cos桶名 */
    Bucket?: string | null;
    /** cos地区 */
    Region?: string | null;
  }

  interface SetTaskAlarmNewRequest {
    /** 设置任务超时告警和失败告警信息 */
    AlarmInfoList: AlarmInfo[];
    /** 项目Id */
    ProjectId: string;
  }

  interface SetTaskAlarmNewResponse {
    /** 返回批量操作成功个数、失败个数、操作总数 */
    Data?: BatchOperateResult;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StageCloudApiRequest {
    /** 无 */
    ClusterId?: string | null;
    /** 无 */
    StageId?: string | null;
    /** 无 */
    JobId?: string | null;
    /** 无 */
    StageName?: string | null;
    /** 无 */
    Type?: string | null;
    /** 无 */
    Mode?: string | null;
    /** 无 */
    Version?: string | null;
    /** 无 */
    Queue?: string | null;
    /** 无 */
    Content?: string | null;
    /** 无 */
    Parameters?: Property[] | null;
    /** 无 */
    Description?: string | null;
    /** 无 */
    ProjectId?: string | null;
    /** 无 */
    JobType?: string | null;
    /** 无 */
    WorkFlowId?: string | null;
  }

  interface StartIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
    /** 事件类型(START, STOP, SUSPEND, RESUME, COMMIT, TIMESTAMP) */
    Event?: string;
    /** 额外参数 */
    ExtConfig?: RecordField[];
    /** 操作类型描述 */
    EventDesc?: string;
  }

  interface StartIntegrationTaskResponse {
    /** 操作成功与否标识 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface StopIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
  }

  interface StopIntegrationTaskResponse {
    /** 操作成功与否标识 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SubmitCustomFunctionRequest {
    /** 函数唯一标识 */
    FunctionId: string;
    /** 集群实例 ID */
    ClusterIdentifier: string;
    /** 备注信息 */
    Comment: string;
    /** 项目ID */
    ProjectId?: string;
  }

  interface SubmitCustomFunctionResponse {
    /** 函数唯一标识 */
    FunctionId?: string | null;
    /** 错误提示 */
    ErrorMessage?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SubmitSqlTaskRequest {
    /** 数据库类型 */
    DatabaseType: string;
    /** 数据源Id */
    DatasourceId: number;
    /** 资源组Id */
    GroupId: string;
    /** 脚本文件id */
    ScriptId: string;
    /** 项目id */
    ProjectId: string;
    /** 数据库名称 */
    DatabaseName?: string;
    /** 执行引擎实例ID */
    EngineId?: string;
    /** 脚本内容 */
    ScriptContent?: string;
    /** 资源队列 */
    ResourceQueue?: string;
    /** 数据库类型 */
    DatasourceType?: string;
    /** 计算资源名称 */
    ComputeResource?: string;
    /** 高级运行参数 */
    RunParams?: string;
    /** 高级设置 */
    ConfParams?: string;
    /** 脚本内容是否base64加密 */
    ScriptEncryption?: boolean;
  }

  interface SubmitSqlTaskResponse {
    /** 任务提交记录 */
    Record?: AdhocRecord;
    /** 子任务记录列表 */
    Details?: AdhocDetail[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SubmitTaskRequest {
    /** 项目Id */
    ProjectId: string;
    /** 任务ID */
    TaskId: string;
    /** 版本备注 */
    VersionRemark: string;
    /** 是否启动调度 */
    StartScheduling: boolean;
  }

  interface SubmitTaskResponse {
    /** 成功或者失败 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SubmitTaskTestRunRequest {
    /** taskId列表 */
    TaskIds: string;
    /** 项目Id */
    ProjectId: string;
    /** 工作流id */
    WorkFlowId?: string;
    /** 工作流名称 */
    Name?: string;
    /** 工作流任务列表 */
    Tasks?: StageCloudApiRequest[];
    /** 备注 */
    Description?: string;
    /** 运行参数，map的Json形式 */
    RunParams?: string;
    /** 脚本内容 */
    ScriptContent?: string;
    /** 版本号 */
    VersionId?: string;
    /** 提交任务测试运行类型 */
    SubmitTaskTestRunType?: string;
  }

  interface SubmitTaskTestRunResponse {
    /** 提交运行jobid */
    JobId?: number;
    /** 运行记录id */
    RecordId?: number[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SubmitWorkflowRequest {
    /** 项目Id */
    ProjectId: string;
    /** 工作流id */
    WorkflowId: string;
    /** 提交的版本备注 */
    VersionRemark: string;
    /** 是否启动调度 */
    StartScheduling: boolean;
  }

  interface SubmitWorkflowResponse {
    /** 执行结果 */
    Data?: SubmitWorkflow;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SuspendIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
    /** 事件类型(START, STOP, SUSPEND, SUSPEND_WITHOUT_SP,RESUME, COMMIT, TIMESTAMP) */
    Event?: string;
  }

  interface SuspendIntegrationTaskResponse {
    /** 操作成功与否标识 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TaskLogRequest {
    /** 任务id */
    TaskId: string;
    /** 起始时间戳，单位毫秒 */
    StartTime: number;
    /** 结束时间戳，单位毫秒 */
    EndTime: number;
    /** 项目id */
    ProjectId: string;
    /** 拉取日志数量，默认100 */
    Limit?: number;
    /** 日志排序 desc 倒序 asc 顺序 */
    OrderType?: string;
    /** 实时任务 201 离线任务 202 默认实时任务 */
    TaskType?: number;
  }

  interface TaskLogResponse {
    /** 任务详细日志 */
    LogContentList?: LogContent[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TriggerDsEventRequest {
    /** 项目id */
    ProjectId: string;
    /** 事件实例信息 */
    EventCaseList?: EventCaseDTO[];
    /** 事件实例信息(连续时间) */
    EventBatchCaseList?: EventBatchCaseDTO[];
    /** 触发时区 */
    ScheduleTimeZone?: string;
  }

  interface TriggerDsEventResponse {
    /** 操作结果 */
    Data?: BatchOpsDTO | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TriggerEventRequest {
    /** 项目Id */
    ProjectId: string;
    /** 案例名称 */
    Name: string;
    /** 时间格式：如果选择触发时间：2022年6月21，则设置为20220621 */
    Dimension: string;
    /** 描述信息 */
    Description?: string;
  }

  interface TriggerEventResponse {
    /** 成功或者失败 */
    Data?: BatchReturn | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface TriggerManualTasksRequest {
    /** 项目ID */
    ProjectId: string;
    /** 触发运行名称 */
    TriggerName: string;
    /** 运行范围 ENTIRE_WORKFLOW or SPECIFIED_TASK */
    TriggerScope: string;
    /** 运行数据时间列表 */
    DataTimeList: string[];
    /** 工作流ID */
    WorkflowId: string;
    /** 备注 */
    Remark?: string;
    /** 需要运行的任务列表TriggerScope=ENTIRE_WORKFLOW 时无需传此参数，TriggerScope=SPECIFIED_TASK此参数必传 */
    TaskIds?: string[];
    /** 用户提交运行时指定的调度资源组，未指定时使用任务配置的调度资源组 */
    SchedulerResourceGroup?: string;
    /** 用户提交运行时指定的集成资源组，未指定时使用任务配置的集成资源组 */
    IntegrationResourceGroup?: string;
    /** 执行顺序 ASC、RAND、DESC */
    ExecOrder?: string;
    /** 自定义参数，最高优先级 */
    CustomParams?: KVPair[];
    /** 页面反显使用，无业务含义 */
    ExtraParams?: string;
    /** 实例时间的时区 */
    ScheduleTimeZone?: string;
    /** 时间类型，DATA_TIME：数据时间、SCHEDULE_TIME：计划调度时间, 为空时会被当成DATA_TIME处理 */
    TimeType?: string;
  }

  interface TriggerManualTasksResponse {
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string | null;
    /** 详情结果 */
    Data?: ManualTriggerRecordOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UnboundProjectExecutorResourceRequest {
    /** 执行资源组id */
    ExecutorGroupId: string;
    /** 项目id */
    ProjectId?: string;
    /** 可选: 需要绑定的多个项目id, 若申明将带上ProjectId一起绑定 */
    ProjectIdList?: string[];
    /** 需要绑定项目的资源包id集合，为空则绑定整个资源组 */
    ExecutorResourcePackageIds?: string[];
  }

  interface UnboundProjectExecutorResourceResponse {
    /** 是否绑定成功，失败返回异常 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UnlockIntegrationTaskRequest {
    /** 任务id */
    TaskId: string;
    /** 项目id */
    ProjectId: string;
  }

  interface UnlockIntegrationTaskResponse {
    /** 操作成功与否标识 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateCodeTemplateRequest {
    /** 项目Id */
    ProjectId: string;
    /** 模版id */
    CodeTemplateId: string;
    /** 模版名 */
    CodeTemplateName: string;
    /** 责任人列表 */
    InChargeId: string;
    /** 责任人名称 */
    InCharge: string;
    /** 扩展属性 */
    Ext: TaskExtDsVO;
    /** 执行机ip */
    BrokerIp?: string;
    /** 资源组id */
    ResourceGroup?: string;
    /** 模版描述 */
    CodeTemplateDesc?: string;
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string | null;
    /** 脚本是否发生变化 */
    ScriptChange?: boolean;
    /** 转Base64的代码内容 */
    Content?: string;
  }

  interface UpdateCodeTemplateResponse {
    /** 详情 */
    Data?: boolean | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateDataModelRegistryInfoRequest {
    /** 云应用的实例id */
    CloudappId: string;
    /** 数语的CAM角色 */
    AppCamRole: string;
    /** 数语的公网访问ip */
    Ip?: string;
    /** 数语的公网访问端口 */
    Port?: number;
    /** 数语的CAM角色id */
    AppCamRoleId?: string;
    /** 服务提供方 */
    Provider?: string;
    /** 租户id */
    TenantId?: string;
    /** 主账号id */
    OwnId?: string;
    /** VpcId */
    VpcId?: string;
    /** Vpc地域 */
    VpcRegion?: string;
    /** 数语的内网访问ip */
    Pip?: string;
    /** 数语的内网访问端口 */
    Pport?: number;
    /** 是否开放公网访问数语, 1:是，0:否，默认1开放 */
    IsPublic?: number;
  }

  interface UpdateDataModelRegistryInfoResponse {
    /** 数语向wedata注册成功 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateProjectUserRoleRequest {
    /** 项目id */
    ProjectId: string;
    /** 用户id */
    UserIds: string[];
    /** 角色id */
    RoleIds: string[];
  }

  interface UpdateProjectUserRoleResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateWorkflowInfoRequest {
    /** 项目Id */
    ProjectId: string;
    /** 操作者名称 */
    OperatorName: string;
    /** 工作流id */
    WorkflowId: string;
    /** 责任人 */
    Owner?: string;
    /** 责任人id */
    OwnerId?: string;
    /** 备注 */
    WorkflowDesc?: string;
    /** 工作流名称 */
    WorkflowName?: string;
    /** 所属文件夹id */
    FolderId?: string;
    /** 工作流所属用户分组id 若有多个,分号隔开: a;b;c */
    UserGroupId?: string;
    /** 工作流所属用户分组名称 若有多个,分号隔开: a;b;c */
    UserGroupName?: string;
    /** 工作流参数列表 */
    WorkflowParams?: ParamInfo[];
    /** 用于配置优化参数（线程、内存、CPU核数等），仅作用于Spark SQL节点。多个参数用英文分号分隔。 */
    GeneralTaskParams?: GeneralTaskParam[];
    /** 工作流依赖，yes/no。开启后表示当前任务依赖本工作流上个周期的所有任务。仅支持当前任务所在工作流的任务全部为同周期的情况，如果非同周期则不生效，请在工作流-统一调度上进行配置。 */
    DependencyWorkflow?: string;
  }

  interface UpdateWorkflowInfoResponse {
    /** true代表成功，false代表失败 */
    Data?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateWorkflowOwnerRequest {
    /** 项目Id */
    ProjectId: string;
    /** 工作流Ids */
    WorkflowIds?: string[];
    /** 责任人，多个以';'号分割 */
    Owner?: string;
    /** 责任人UserId，多个以';'号分割 */
    OwnerId?: string;
  }

  interface UpdateWorkflowOwnerResponse {
    /** 响应数据 */
    Data?: BatchOperationOpsDto | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UploadContentRequest {
    /** 脚本上传信息 */
    ScriptRequestInfo: ScriptRequestInfo;
    /** 请求来源，WEB 前端；CLIENT 客户端 */
    RequestFromSource?: string;
    /** 项目id */
    ProjectId?: string;
  }

  interface UploadContentResponse {
    /** 脚本信息响应 */
    ScriptInfo?: ScriptInfoResponse | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UploadResourceRequest {
    /** 资源上传请求信息 */
    UploadResourceRequestInfo?: UploadResourceRequestInfo;
    /** 项目id */
    ProjectId?: string;
  }

  interface UploadResourceResponse {
    /** 资源文件信息列表 */
    Data?: UserFileDTONew[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Wedata 数据开发治理平台 WeData} */
declare interface Wedata {
  (): Versions;
  /** 关联引擎到某个项目 {@link AddCalcEnginesToProjectRequest} {@link AddCalcEnginesToProjectResponse} */
  AddCalcEnginesToProject(data: AddCalcEnginesToProjectRequest, config?: AxiosRequestConfig): AxiosPromise<AddCalcEnginesToProjectResponse>;
  /** 关联资源组到某个项目 {@link AssociateResourceGroupToProjectRequest} {@link AssociateResourceGroupToProjectResponse} */
  AssociateResourceGroupToProject(data: AssociateResourceGroupToProjectRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateResourceGroupToProjectResponse>;
  /** 新建代码文件 {@link CreateCodeFileRequest} {@link CreateCodeFileResponse} */
  CreateCodeFile(data: CreateCodeFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCodeFileResponse>;
  /** 新建代码文件夹 {@link CreateCodeFolderRequest} {@link CreateCodeFolderResponse} */
  CreateCodeFolder(data: CreateCodeFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCodeFolderResponse>;
  /** 创建数据补录计划 {@link CreateDataBackfillPlanRequest} {@link CreateDataBackfillPlanResponse} */
  CreateDataBackfillPlan(data: CreateDataBackfillPlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataBackfillPlanResponse>;
  /** 创建数据源 {@link CreateDataSourceRequest} {@link CreateDataSourceResponse} */
  CreateDataSource(data: CreateDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataSourceResponse>;
  /** 设置告警规则 {@link CreateOpsAlarmRuleRequest} {@link CreateOpsAlarmRuleResponse} */
  CreateOpsAlarmRule(data: CreateOpsAlarmRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpsAlarmRuleResponse>;
  /** 新建项目 {@link CreateProjectRequest} {@link CreateProjectResponse} */
  CreateProject(data: CreateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectResponse>;
  /** 创建项目成员 {@link CreateProjectMemberRequest} {@link CreateProjectMemberResponse} */
  CreateProjectMember(data: CreateProjectMemberRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProjectMemberResponse>;
  /** 创建资源文件 {@link CreateResourceFileRequest} {@link CreateResourceFileResponse} */
  CreateResourceFile(data: CreateResourceFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourceFileResponse>;
  /** 创建资源文件夹 {@link CreateResourceFolderRequest} {@link CreateResourceFolderResponse} */
  CreateResourceFolder(data: CreateResourceFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourceFolderResponse>;
  /** 创建资源组 {@link CreateResourceGroupRequest} {@link CreateResourceGroupResponse} */
  CreateResourceGroup(data: CreateResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourceGroupResponse>;
  /** 新建SQL文件夹 {@link CreateSQLFolderRequest} {@link CreateSQLFolderResponse} */
  CreateSQLFolder(data: CreateSQLFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSQLFolderResponse>;
  /** 新增SQL脚本 {@link CreateSQLScriptRequest} {@link CreateSQLScriptResponse} */
  CreateSQLScript(data: CreateSQLScriptRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSQLScriptResponse>;
  /** 创建任务 {@link CreateTaskRequest} {@link CreateTaskResponse} */
  CreateTask(data: CreateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskResponse>;
  /** 创建工作流 {@link CreateWorkflowRequest} {@link CreateWorkflowResponse} */
  CreateWorkflow(data: CreateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowResponse>;
  /** 创建工作流文件夹 {@link CreateWorkflowFolderRequest} {@link CreateWorkflowFolderResponse} */
  CreateWorkflowFolder(data: CreateWorkflowFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowFolderResponse>;
  /** 删除代码文件 {@link DeleteCodeFileRequest} {@link DeleteCodeFileResponse} */
  DeleteCodeFile(data: DeleteCodeFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCodeFileResponse>;
  /** 删除代码文件夹 {@link DeleteCodeFolderRequest} {@link DeleteCodeFolderResponse} */
  DeleteCodeFolder(data: DeleteCodeFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCodeFolderResponse>;
  /** 删除数据源 {@link DeleteDataSourceRequest} {@link DeleteDataSourceResponse} */
  DeleteDataSource(data: DeleteDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDataSourceResponse>;
  /** 血缘删除 {@link DeleteLineageRequest} {@link DeleteLineageResponse} */
  DeleteLineage(data: DeleteLineageRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLineageResponse>;
  /** 删除告警规则 {@link DeleteOpsAlarmRuleRequest} {@link DeleteOpsAlarmRuleResponse} */
  DeleteOpsAlarmRule(data: DeleteOpsAlarmRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOpsAlarmRuleResponse>;
  /** 移除项目成员 {@link DeleteProjectMemberRequest} {@link DeleteProjectMemberResponse} */
  DeleteProjectMember(data: DeleteProjectMemberRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectMemberResponse>;
  /** 删除资源文件 {@link DeleteResourceFileRequest} {@link DeleteResourceFileResponse} */
  DeleteResourceFile(data: DeleteResourceFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceFileResponse>;
  /** 删除资源文件夹 {@link DeleteResourceFolderRequest} {@link DeleteResourceFolderResponse} */
  DeleteResourceFolder(data: DeleteResourceFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceFolderResponse>;
  /** 销毁资源组 {@link DeleteResourceGroupRequest} {@link DeleteResourceGroupResponse} */
  DeleteResourceGroup(data: DeleteResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceGroupResponse>;
  /** 删除SQL文件夹 {@link DeleteSQLFolderRequest} {@link DeleteSQLFolderResponse} */
  DeleteSQLFolder(data: DeleteSQLFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSQLFolderResponse>;
  /** 删除SQL脚本 {@link DeleteSQLScriptRequest} {@link DeleteSQLScriptResponse} */
  DeleteSQLScript(data: DeleteSQLScriptRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSQLScriptResponse>;
  /** 删除任务 {@link DeleteTaskRequest} {@link DeleteTaskResponse} */
  DeleteTask(data: DeleteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskResponse>;
  /** 删除工作流 {@link DeleteWorkflowRequest} {@link DeleteWorkflowResponse} */
  DeleteWorkflow(data: DeleteWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowResponse>;
  /** 删除工作流文件夹 {@link DeleteWorkflowFolderRequest} {@link DeleteWorkflowFolderResponse} */
  DeleteWorkflowFolder(data: DeleteWorkflowFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowFolderResponse>;
  /** 禁用项目 {@link DisableProjectRequest} {@link DisableProjectResponse} */
  DisableProject(data: DisableProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DisableProjectResponse>;
  /** 解绑项目关联的资源组 {@link DissociateResourceGroupFromProjectRequest} {@link DissociateResourceGroupFromProjectResponse} */
  DissociateResourceGroupFromProject(data: DissociateResourceGroupFromProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DissociateResourceGroupFromProjectResponse>;
  /** 激活项目 {@link EnableProjectRequest} {@link EnableProjectResponse} */
  EnableProject(data: EnableProjectRequest, config?: AxiosRequestConfig): AxiosPromise<EnableProjectResponse>;
  /** 查询告警信息详情 {@link GetAlarmMessageRequest} {@link GetAlarmMessageResponse} */
  GetAlarmMessage(data: GetAlarmMessageRequest, config?: AxiosRequestConfig): AxiosPromise<GetAlarmMessageResponse>;
  /** 查看代码文件详情 {@link GetCodeFileRequest} {@link GetCodeFileResponse} */
  GetCodeFile(data: GetCodeFileRequest, config?: AxiosRequestConfig): AxiosPromise<GetCodeFileResponse>;
  /** 获取codestudio文件夹详情 {@link GetCodeFolderRequest} {@link GetCodeFolderResponse} */
  GetCodeFolder(data: GetCodeFolderRequest, config?: AxiosRequestConfig): AxiosPromise<GetCodeFolderResponse>;
  /** 查看补录计划配置详情 {@link GetDataBackfillPlanRequest} {@link GetDataBackfillPlanResponse} */
  GetDataBackfillPlan(data: GetDataBackfillPlanRequest, config?: AxiosRequestConfig): AxiosPromise<GetDataBackfillPlanResponse>;
  /** 查看数据源详情 {@link GetDataSourceRequest} {@link GetDataSourceResponse} */
  GetDataSource(data: GetDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<GetDataSourceResponse>;
  /** 查看数据源关联任务列表 {@link GetDataSourceRelatedTasksRequest} {@link GetDataSourceRelatedTasksResponse} */
  GetDataSourceRelatedTasks(data: GetDataSourceRelatedTasksRequest, config?: AxiosRequestConfig): AxiosPromise<GetDataSourceRelatedTasksResponse>;
  /** 获取告警规则详细信息 {@link GetOpsAlarmRuleRequest} {@link GetOpsAlarmRuleResponse} */
  GetOpsAlarmRule(data: GetOpsAlarmRuleRequest, config?: AxiosRequestConfig): AxiosPromise<GetOpsAlarmRuleResponse>;
  /** 查询运维中心异步操作详情 {@link GetOpsAsyncJobRequest} {@link GetOpsAsyncJobResponse} */
  GetOpsAsyncJob(data: GetOpsAsyncJobRequest, config?: AxiosRequestConfig): AxiosPromise<GetOpsAsyncJobResponse>;
  /** 获取任务详情 {@link GetOpsTaskRequest} {@link GetOpsTaskResponse} */
  GetOpsTask(data: GetOpsTaskRequest, config?: AxiosRequestConfig): AxiosPromise<GetOpsTaskResponse>;
  /** 获取任务代码 {@link GetOpsTaskCodeRequest} {@link GetOpsTaskCodeResponse} */
  GetOpsTaskCode(data: GetOpsTaskCodeRequest, config?: AxiosRequestConfig): AxiosPromise<GetOpsTaskCodeResponse>;
  /** 获取工作流详情 {@link GetOpsWorkflowRequest} {@link GetOpsWorkflowResponse} */
  GetOpsWorkflow(data: GetOpsWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<GetOpsWorkflowResponse>;
  /** 查看项目详情 {@link GetProjectRequest} {@link GetProjectResponse} */
  GetProject(data: GetProjectRequest, config?: AxiosRequestConfig): AxiosPromise<GetProjectResponse>;
  /** 查看资源文件详情 {@link GetResourceFileRequest} {@link GetResourceFileResponse} */
  GetResourceFile(data: GetResourceFileRequest, config?: AxiosRequestConfig): AxiosPromise<GetResourceFileResponse>;
  /** 查看某个资源组的监控指标 {@link GetResourceGroupMetricsRequest} {@link GetResourceGroupMetricsResponse} */
  GetResourceGroupMetrics(data: GetResourceGroupMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<GetResourceGroupMetricsResponse>;
  /** 获取SQL文件夹详情 {@link GetSQLFolderRequest} {@link GetSQLFolderResponse} */
  GetSQLFolder(data: GetSQLFolderRequest, config?: AxiosRequestConfig): AxiosPromise<GetSQLFolderResponse>;
  /** 查看SQL脚本详情 {@link GetSQLScriptRequest} {@link GetSQLScriptResponse} */
  GetSQLScript(data: GetSQLScriptRequest, config?: AxiosRequestConfig): AxiosPromise<GetSQLScriptResponse>;
  /** 获取表详情 {@link GetTableRequest} {@link GetTableResponse} */
  GetTable(data: GetTableRequest, config?: AxiosRequestConfig): AxiosPromise<GetTableResponse>;
  /** 获取表字段列表 {@link GetTableColumnsRequest} {@link GetTableColumnsResponse} */
  GetTableColumns(data: GetTableColumnsRequest, config?: AxiosRequestConfig): AxiosPromise<GetTableColumnsResponse>;
  /** 获取任务详情信息 {@link GetTaskRequest} {@link GetTaskResponse} */
  GetTask(data: GetTaskRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskResponse>;
  /** 查看任务代码 {@link GetTaskCodeRequest} {@link GetTaskCodeResponse} */
  GetTaskCode(data: GetTaskCodeRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskCodeResponse>;
  /** 获取实例详情 {@link GetTaskInstanceRequest} {@link GetTaskInstanceResponse} */
  GetTaskInstance(data: GetTaskInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskInstanceResponse>;
  /** 查询调度实例日志内容 {@link GetTaskInstanceLogRequest} {@link GetTaskInstanceLogResponse} */
  GetTaskInstanceLog(data: GetTaskInstanceLogRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskInstanceLogResponse>;
  /** 查看任务版本详情 {@link GetTaskVersionRequest} {@link GetTaskVersionResponse} */
  GetTaskVersion(data: GetTaskVersionRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskVersionResponse>;
  /** 获取工作流信息 {@link GetWorkflowRequest} {@link GetWorkflowResponse} */
  GetWorkflow(data: GetWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<GetWorkflowResponse>;
  /** 授予项目成员项目角色 {@link GrantMemberProjectRoleRequest} {@link GrantMemberProjectRoleResponse} */
  GrantMemberProjectRole(data: GrantMemberProjectRoleRequest, config?: AxiosRequestConfig): AxiosPromise<GrantMemberProjectRoleResponse>;
  /** 实例批量终止操作(异步) {@link KillTaskInstancesAsyncRequest} {@link KillTaskInstancesAsyncResponse} */
  KillTaskInstancesAsync(data: KillTaskInstancesAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<KillTaskInstancesAsyncResponse>;
  /** 获取告警信息列表 {@link ListAlarmMessagesRequest} {@link ListAlarmMessagesResponse} */
  ListAlarmMessages(data: ListAlarmMessagesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAlarmMessagesResponse>;
  /** 查询类目树列表 {@link ListCatalogRequest} {@link ListCatalogResponse} */
  ListCatalog(data: ListCatalogRequest, config?: AxiosRequestConfig): AxiosPromise<ListCatalogResponse>;
  /** 获取文件夹内容 {@link ListCodeFolderContentsRequest} {@link ListCodeFolderContentsResponse} */
  ListCodeFolderContents(data: ListCodeFolderContentsRequest, config?: AxiosRequestConfig): AxiosPromise<ListCodeFolderContentsResponse>;
  /** 查询表列血缘列表 {@link ListColumnLineageRequest} {@link ListColumnLineageResponse} */
  ListColumnLineage(data: ListColumnLineageRequest, config?: AxiosRequestConfig): AxiosPromise<ListColumnLineageResponse>;
  /** 获取单次补录的所有实例详情 {@link ListDataBackfillInstancesRequest} {@link ListDataBackfillInstancesResponse} */
  ListDataBackfillInstances(data: ListDataBackfillInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ListDataBackfillInstancesResponse>;
  /** 查看数据源列表 {@link ListDataSourcesRequest} {@link ListDataSourcesResponse} */
  ListDataSources(data: ListDataSourcesRequest, config?: AxiosRequestConfig): AxiosPromise<ListDataSourcesResponse>;
  /** 通过参数查询数据库列表 {@link ListDatabaseRequest} {@link ListDatabaseResponse} */
  ListDatabase(data: ListDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<ListDatabaseResponse>;
  /** 获取任务下游 {@link ListDownstreamOpsTasksRequest} {@link ListDownstreamOpsTasksResponse} */
  ListDownstreamOpsTasks(data: ListDownstreamOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListDownstreamOpsTasksResponse>;
  /** 获取实例直接下游 {@link ListDownstreamTaskInstancesRequest} {@link ListDownstreamTaskInstancesResponse} */
  ListDownstreamTaskInstances(data: ListDownstreamTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ListDownstreamTaskInstancesResponse>;
  /** 查看下游任务列表 {@link ListDownstreamTasksRequest} {@link ListDownstreamTasksResponse} */
  ListDownstreamTasks(data: ListDownstreamTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListDownstreamTasksResponse>;
  /** 查询血缘列表 {@link ListLineageRequest} {@link ListLineageResponse} */
  ListLineage(data: ListLineageRequest, config?: AxiosRequestConfig): AxiosPromise<ListLineageResponse>;
  /** 获取告警规则列表 {@link ListOpsAlarmRulesRequest} {@link ListOpsAlarmRulesResponse} */
  ListOpsAlarmRules(data: ListOpsAlarmRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ListOpsAlarmRulesResponse>;
  /** 获取任务列表 {@link ListOpsTasksRequest} {@link ListOpsTasksResponse} */
  ListOpsTasks(data: ListOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListOpsTasksResponse>;
  /** 获取工作流列表 {@link ListOpsWorkflowsRequest} {@link ListOpsWorkflowsResponse} */
  ListOpsWorkflows(data: ListOpsWorkflowsRequest, config?: AxiosRequestConfig): AxiosPromise<ListOpsWorkflowsResponse>;
  /** 查询任务血缘列表 {@link ListProcessLineageRequest} {@link ListProcessLineageResponse} */
  ListProcessLineage(data: ListProcessLineageRequest, config?: AxiosRequestConfig): AxiosPromise<ListProcessLineageResponse>;
  /** 查看项目成员列表 {@link ListProjectMembersRequest} {@link ListProjectMembersResponse} */
  ListProjectMembers(data: ListProjectMembersRequest, config?: AxiosRequestConfig): AxiosPromise<ListProjectMembersResponse>;
  /** 查看项目级角色详情列表 {@link ListProjectRolesRequest} {@link ListProjectRolesResponse} */
  ListProjectRoles(data: ListProjectRolesRequest, config?: AxiosRequestConfig): AxiosPromise<ListProjectRolesResponse>;
  /** 查看项目详情列表 {@link ListProjectsRequest} {@link ListProjectsResponse} */
  ListProjects(data?: ListProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<ListProjectsResponse>;
  /** 查看资源文件列表 {@link ListResourceFilesRequest} {@link ListResourceFilesResponse} */
  ListResourceFiles(data: ListResourceFilesRequest, config?: AxiosRequestConfig): AxiosPromise<ListResourceFilesResponse>;
  /** 查看资源文件夹列表 {@link ListResourceFoldersRequest} {@link ListResourceFoldersResponse} */
  ListResourceFolders(data: ListResourceFoldersRequest, config?: AxiosRequestConfig): AxiosPromise<ListResourceFoldersResponse>;
  /** 查看资源组列表 {@link ListResourceGroupsRequest} {@link ListResourceGroupsResponse} */
  ListResourceGroups(data?: ListResourceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ListResourceGroupsResponse>;
  /** 获取sql文件夹内容列表 {@link ListSQLFolderContentsRequest} {@link ListSQLFolderContentsResponse} */
  ListSQLFolderContents(data: ListSQLFolderContentsRequest, config?: AxiosRequestConfig): AxiosPromise<ListSQLFolderContentsResponse>;
  /** 查询SQL运行记录 {@link ListSQLScriptRunsRequest} {@link ListSQLScriptRunsResponse} */
  ListSQLScriptRuns(data: ListSQLScriptRunsRequest, config?: AxiosRequestConfig): AxiosPromise<ListSQLScriptRunsResponse>;
  /** 通过参数查询数据库模式列表 {@link ListSchemaRequest} {@link ListSchemaResponse} */
  ListSchema(data: ListSchemaRequest, config?: AxiosRequestConfig): AxiosPromise<ListSchemaResponse>;
  /** 通过参数查询数据表列表 {@link ListTableRequest} {@link ListTableResponse} */
  ListTable(data: ListTableRequest, config?: AxiosRequestConfig): AxiosPromise<ListTableResponse>;
  /** 获取实例执行列表 {@link ListTaskInstanceExecutionsRequest} {@link ListTaskInstanceExecutionsResponse} */
  ListTaskInstanceExecutions(data: ListTaskInstanceExecutionsRequest, config?: AxiosRequestConfig): AxiosPromise<ListTaskInstanceExecutionsResponse>;
  /** 获取调度实例列表 {@link ListTaskInstancesRequest} {@link ListTaskInstancesResponse} */
  ListTaskInstances(data: ListTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ListTaskInstancesResponse>;
  /** 查看任务版本列表 {@link ListTaskVersionsRequest} {@link ListTaskVersionsResponse} */
  ListTaskVersions(data: ListTaskVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<ListTaskVersionsResponse>;
  /** 查询任务列表 {@link ListTasksRequest} {@link ListTasksResponse} */
  ListTasks(data: ListTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListTasksResponse>;
  /** 查看全局级角色详情列表 {@link ListTenantRolesRequest} {@link ListTenantRolesResponse} */
  ListTenantRoles(data?: ListTenantRolesRequest, config?: AxiosRequestConfig): AxiosPromise<ListTenantRolesResponse>;
  /** 获取任务上游 {@link ListUpstreamOpsTasksRequest} {@link ListUpstreamOpsTasksResponse} */
  ListUpstreamOpsTasks(data: ListUpstreamOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListUpstreamOpsTasksResponse>;
  /** 获取实例直接上游 {@link ListUpstreamTaskInstancesRequest} {@link ListUpstreamTaskInstancesResponse} */
  ListUpstreamTaskInstances(data: ListUpstreamTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ListUpstreamTaskInstancesResponse>;
  /** 查看上游任务列表 {@link ListUpstreamTasksRequest} {@link ListUpstreamTasksResponse} */
  ListUpstreamTasks(data: ListUpstreamTasksRequest, config?: AxiosRequestConfig): AxiosPromise<ListUpstreamTasksResponse>;
  /** 查看工作流文件夹列表 {@link ListWorkflowFoldersRequest} {@link ListWorkflowFoldersResponse} */
  ListWorkflowFolders(data: ListWorkflowFoldersRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkflowFoldersResponse>;
  /** 查询工作流列表 {@link ListWorkflowsRequest} {@link ListWorkflowsResponse} */
  ListWorkflows(data: ListWorkflowsRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkflowsResponse>;
  /** 异步批量暂停任务 {@link PauseOpsTasksAsyncRequest} {@link PauseOpsTasksAsyncResponse} */
  PauseOpsTasksAsync(data: PauseOpsTasksAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<PauseOpsTasksAsyncResponse>;
  /** 血缘注册 {@link RegisterLineageRequest} {@link RegisterLineageResponse} */
  RegisterLineage(data: RegisterLineageRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterLineageResponse>;
  /** 撤销项目成员项目角色 {@link RemoveMemberProjectRoleRequest} {@link RemoveMemberProjectRoleResponse} */
  RemoveMemberProjectRole(data: RemoveMemberProjectRoleRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveMemberProjectRoleResponse>;
  /** 实例批量重跑(异步) {@link RerunTaskInstancesAsyncRequest} {@link RerunTaskInstancesAsyncResponse} */
  RerunTaskInstancesAsync(data: RerunTaskInstancesAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<RerunTaskInstancesAsyncResponse>;
  /** 运行SQL脚本 {@link RunSQLScriptRequest} {@link RunSQLScriptResponse} */
  RunSQLScript(data: RunSQLScriptRequest, config?: AxiosRequestConfig): AxiosPromise<RunSQLScriptResponse>;
  /** 实例批量置成功(异步) {@link SetSuccessTaskInstancesAsyncRequest} {@link SetSuccessTaskInstancesAsyncResponse} */
  SetSuccessTaskInstancesAsync(data: SetSuccessTaskInstancesAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<SetSuccessTaskInstancesAsyncResponse>;
  /** 异步批量启动任务 {@link StartOpsTasksRequest} {@link StartOpsTasksResponse} */
  StartOpsTasks(data: StartOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<StartOpsTasksResponse>;
  /** 异步批量下线任务 {@link StopOpsTasksAsyncRequest} {@link StopOpsTasksAsyncResponse} */
  StopOpsTasksAsync(data: StopOpsTasksAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<StopOpsTasksAsyncResponse>;
  /** 停止运行SQL脚本 {@link StopSQLScriptRunRequest} {@link StopSQLScriptRunResponse} */
  StopSQLScriptRun(data: StopSQLScriptRunRequest, config?: AxiosRequestConfig): AxiosPromise<StopSQLScriptRunResponse>;
  /** 提交任务 {@link SubmitTaskRequest} {@link SubmitTaskResponse} */
  SubmitTask(data: SubmitTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTaskResponse>;
  /** 更新代码文件 {@link UpdateCodeFileRequest} {@link UpdateCodeFileResponse} */
  UpdateCodeFile(data: UpdateCodeFileRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCodeFileResponse>;
  /** 更新代码文件夹 {@link UpdateCodeFolderRequest} {@link UpdateCodeFolderResponse} */
  UpdateCodeFolder(data: UpdateCodeFolderRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCodeFolderResponse>;
  /** 更新数据源 {@link UpdateDataSourceRequest} {@link UpdateDataSourceResponse} */
  UpdateDataSource(data: UpdateDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDataSourceResponse>;
  /** 修改告警规则 {@link UpdateOpsAlarmRuleRequest} {@link UpdateOpsAlarmRuleResponse} */
  UpdateOpsAlarmRule(data: UpdateOpsAlarmRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOpsAlarmRuleResponse>;
  /** 修改任务负责人 {@link UpdateOpsTasksOwnerRequest} {@link UpdateOpsTasksOwnerResponse} */
  UpdateOpsTasksOwner(data: UpdateOpsTasksOwnerRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateOpsTasksOwnerResponse>;
  /** 更新项目 {@link UpdateProjectRequest} {@link UpdateProjectResponse} */
  UpdateProject(data: UpdateProjectRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateProjectResponse>;
  /** 更新资源文件 {@link UpdateResourceFileRequest} {@link UpdateResourceFileResponse} */
  UpdateResourceFile(data: UpdateResourceFileRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateResourceFileResponse>;
  /** 更新资源文件夹 {@link UpdateResourceFolderRequest} {@link UpdateResourceFolderResponse} */
  UpdateResourceFolder(data: UpdateResourceFolderRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateResourceFolderResponse>;
  /** 更新资源组 {@link UpdateResourceGroupRequest} {@link UpdateResourceGroupResponse} */
  UpdateResourceGroup(data: UpdateResourceGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateResourceGroupResponse>;
  /** 重命名SQL文件夹 {@link UpdateSQLFolderRequest} {@link UpdateSQLFolderResponse} */
  UpdateSQLFolder(data: UpdateSQLFolderRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSQLFolderResponse>;
  /** 更新SQL脚本和配置 {@link UpdateSQLScriptRequest} {@link UpdateSQLScriptResponse} */
  UpdateSQLScript(data: UpdateSQLScriptRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSQLScriptResponse>;
  /** 更新任务 {@link UpdateTaskRequest} {@link UpdateTaskResponse} */
  UpdateTask(data: UpdateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTaskResponse>;
  /** 更新工作流信息 {@link UpdateWorkflowRequest} {@link UpdateWorkflowResponse} */
  UpdateWorkflow(data: UpdateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkflowResponse>;
  /** 更新工作流文件夹 {@link UpdateWorkflowFolderRequest} {@link UpdateWorkflowFolderResponse} */
  UpdateWorkflowFolder(data: UpdateWorkflowFolderRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkflowFolderResponse>;
  /** 添加项目用户角色 {@link V20210820.AddProjectUserRoleRequest} {@link V20210820.AddProjectUserRoleResponse} */
  AddProjectUserRole(data: V20210820.AddProjectUserRoleRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.AddProjectUserRoleResponse>;
  /** 批量创建任务告警规则 {@link V20210820.BatchCreateIntegrationTaskAlarmsRequest} {@link V20210820.BatchCreateIntegrationTaskAlarmsResponse} */
  BatchCreateIntegrationTaskAlarms(data: V20210820.BatchCreateIntegrationTaskAlarmsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchCreateIntegrationTaskAlarmsResponse>;
  /** 异步批量创建任务版本 {@link V20210820.BatchCreateTaskVersionAsyncRequest} {@link V20210820.BatchCreateTaskVersionAsyncResponse} */
  BatchCreateTaskVersionAsync(data: V20210820.BatchCreateTaskVersionAsyncRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchCreateTaskVersionAsyncResponse>;
  /** 批量删除集成任务 {@link V20210820.BatchDeleteIntegrationTasksRequest} {@link V20210820.BatchDeleteIntegrationTasksResponse} */
  BatchDeleteIntegrationTasks(data: V20210820.BatchDeleteIntegrationTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchDeleteIntegrationTasksResponse>;
  /** 任务运维-批量删除任务 {@link V20210820.BatchDeleteOpsTasksRequest} {@link V20210820.BatchDeleteOpsTasksResponse} */
  BatchDeleteOpsTasks(data: V20210820.BatchDeleteOpsTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchDeleteOpsTasksResponse>;
  /** 批量置成功集成任务实例 {@link V20210820.BatchForceSuccessIntegrationTaskInstancesRequest} {@link V20210820.BatchForceSuccessIntegrationTaskInstancesResponse} */
  BatchForceSuccessIntegrationTaskInstances(data: V20210820.BatchForceSuccessIntegrationTaskInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchForceSuccessIntegrationTaskInstancesResponse>;
  /** 批量终止集成任务实例 {@link V20210820.BatchKillIntegrationTaskInstancesRequest} {@link V20210820.BatchKillIntegrationTaskInstancesResponse} */
  BatchKillIntegrationTaskInstances(data: V20210820.BatchKillIntegrationTaskInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchKillIntegrationTaskInstancesResponse>;
  /** 批量补数据 {@link V20210820.BatchMakeUpIntegrationTasksRequest} {@link V20210820.BatchMakeUpIntegrationTasksResponse} */
  BatchMakeUpIntegrationTasks(data: V20210820.BatchMakeUpIntegrationTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchMakeUpIntegrationTasksResponse>;
  /** 任务运维-批量修改任务责任人 {@link V20210820.BatchModifyOpsOwnersRequest} {@link V20210820.BatchModifyOpsOwnersResponse} */
  BatchModifyOpsOwners(data: V20210820.BatchModifyOpsOwnersRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchModifyOpsOwnersResponse>;
  /** 批量重跑集成任务实例 {@link V20210820.BatchRerunIntegrationTaskInstancesRequest} {@link V20210820.BatchRerunIntegrationTaskInstancesResponse} */
  BatchRerunIntegrationTaskInstances(data: V20210820.BatchRerunIntegrationTaskInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchRerunIntegrationTaskInstancesResponse>;
  /** 批量继续执行集成任务 {@link V20210820.BatchResumeIntegrationTasksRequest} {@link V20210820.BatchResumeIntegrationTasksResponse} */
  BatchResumeIntegrationTasks(data: V20210820.BatchResumeIntegrationTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchResumeIntegrationTasksResponse>;
  /** 任务运维-批量启动任务 {@link V20210820.BatchRunOpsTaskRequest} {@link V20210820.BatchRunOpsTaskResponse} */
  BatchRunOpsTask(data: V20210820.BatchRunOpsTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchRunOpsTaskResponse>;
  /** 批量运行集成任务 {@link V20210820.BatchStartIntegrationTasksRequest} {@link V20210820.BatchStartIntegrationTasksResponse} */
  BatchStartIntegrationTasks(data: V20210820.BatchStartIntegrationTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchStartIntegrationTasksResponse>;
  /** 批量停止集成任务 {@link V20210820.BatchStopIntegrationTasksRequest} {@link V20210820.BatchStopIntegrationTasksResponse} */
  BatchStopIntegrationTasks(data: V20210820.BatchStopIntegrationTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchStopIntegrationTasksResponse>;
  /** 任务运维-批量停止任务 {@link V20210820.BatchStopOpsTasksRequest} {@link V20210820.BatchStopOpsTasksResponse} */
  BatchStopOpsTasks(data: V20210820.BatchStopOpsTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchStopOpsTasksResponse>;
  /** 批量停止工作流 {@link V20210820.BatchStopWorkflowsByIdsRequest} {@link V20210820.BatchStopWorkflowsByIdsResponse} */
  BatchStopWorkflowsByIds(data: V20210820.BatchStopWorkflowsByIdsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchStopWorkflowsByIdsResponse>;
  /** 批量暂停集成任务 {@link V20210820.BatchSuspendIntegrationTasksRequest} {@link V20210820.BatchSuspendIntegrationTasksResponse} */
  BatchSuspendIntegrationTasks(data: V20210820.BatchSuspendIntegrationTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchSuspendIntegrationTasksResponse>;
  /** 批量更新集成任务 {@link V20210820.BatchUpdateIntegrationTasksRequest} {@link V20210820.BatchUpdateIntegrationTasksResponse} */
  BatchUpdateIntegrationTasks(data: V20210820.BatchUpdateIntegrationTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BatchUpdateIntegrationTasksResponse>;
  /** 执行资源组-资源包绑定项目 {@link V20210820.BindProjectExecutorResourceRequest} {@link V20210820.BindProjectExecutorResourceResponse} */
  BindProjectExecutorResource(data: V20210820.BindProjectExecutorResourceRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.BindProjectExecutorResourceResponse>;
  /** 判断告警规则重名 {@link V20210820.CheckAlarmRegularNameExistRequest} {@link V20210820.CheckAlarmRegularNameExistResponse} */
  CheckAlarmRegularNameExist(data: V20210820.CheckAlarmRegularNameExistRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CheckAlarmRegularNameExistResponse>;
  /** 判断集成节点名称是否存在 {@link V20210820.CheckIntegrationNodeNameExistsRequest} {@link V20210820.CheckIntegrationNodeNameExistsResponse} */
  CheckIntegrationNodeNameExists(data: V20210820.CheckIntegrationNodeNameExistsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CheckIntegrationNodeNameExistsResponse>;
  /** 判断集成任务名称是否存在 {@link V20210820.CheckIntegrationTaskNameExistsRequest} {@link V20210820.CheckIntegrationTaskNameExistsResponse} */
  CheckIntegrationTaskNameExists(data: V20210820.CheckIntegrationTaskNameExistsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CheckIntegrationTaskNameExistsResponse>;
  /** 离线任务重名校验 {@link V20210820.CheckTaskNameExistRequest} {@link V20210820.CheckTaskNameExistResponse} */
  CheckTaskNameExist(data: V20210820.CheckTaskNameExistRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CheckTaskNameExistResponse>;
  /** 提交集成任务 {@link V20210820.CommitIntegrationTaskRequest} {@link V20210820.CommitIntegrationTaskResponse} */
  CommitIntegrationTask(data: V20210820.CommitIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CommitIntegrationTaskResponse>;
  /** 提交规则组运行任务接口 {@link V20210820.CommitRuleGroupTaskRequest} {@link V20210820.CommitRuleGroupTaskResponse} */
  CommitRuleGroupTask(data: V20210820.CommitRuleGroupTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CommitRuleGroupTaskResponse>;
  /** 智能运维-统计任务实例状态 {@link V20210820.CountOpsInstanceStateRequest} {@link V20210820.CountOpsInstanceStateResponse} */
  CountOpsInstanceState(data: V20210820.CountOpsInstanceStateRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CountOpsInstanceStateResponse>;
  /** 创建项目本身 {@link V20210820.CreateBaseProjectRequest} {@link V20210820.CreateBaseProjectResponse} */
  CreateBaseProject(data: V20210820.CreateBaseProjectRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateBaseProjectResponse>;
  /** 创建代码模版 {@link V20210820.CreateCodeTemplateRequest} {@link V20210820.CreateCodeTemplateResponse} */
  CreateCodeTemplate(data: V20210820.CreateCodeTemplateRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateCodeTemplateResponse>;
  /** 提交模版版本 {@link V20210820.CreateCodeTemplateVersionRequest} {@link V20210820.CreateCodeTemplateVersionResponse} */
  CreateCodeTemplateVersion(data: V20210820.CreateCodeTemplateVersionRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateCodeTemplateVersionResponse>;
  /** 创建用户自定义函数 {@link V20210820.CreateCustomFunctionRequest} {@link V20210820.CreateCustomFunctionResponse} */
  CreateCustomFunction(data: V20210820.CreateCustomFunctionRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateCustomFunctionResponse>;
  /** （仅公有云）创建数据建模，提供给云应用使用，实现"Wedata数据建模"的下单发货 {@link V20210820.CreateDataModelRequest} {@link V20210820.CreateDataModelResponse} */
  CreateDataModel(data: V20210820.CreateDataModelRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateDataModelResponse>;
  /** 数据源管理-创建数据源 {@link V20210820.CreateDataSourceRequest} {@link V20210820.CreateDataSourceResponse} */
  CreateDataSource(data: V20210820.CreateDataSourceRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateDataSourceResponse>;
  /** 创建文件夹 {@link V20210820.CreateDsFolderRequest} {@link V20210820.CreateDsFolderResponse} */
  CreateDsFolder(data: V20210820.CreateDsFolderRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateDsFolderResponse>;
  /** 建hive表 {@link V20210820.CreateHiveTableRequest} {@link V20210820.CreateHiveTableResponse} */
  CreateHiveTable(data: V20210820.CreateHiveTableRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateHiveTableResponse>;
  /** 创建hive表 {@link V20210820.CreateHiveTableByDDLRequest} {@link V20210820.CreateHiveTableByDDLResponse} */
  CreateHiveTableByDDL(data: V20210820.CreateHiveTableByDDLRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateHiveTableByDDLResponse>;
  /** 创建集成节点 {@link V20210820.CreateIntegrationNodeRequest} {@link V20210820.CreateIntegrationNodeResponse} */
  CreateIntegrationNode(data: V20210820.CreateIntegrationNodeRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateIntegrationNodeResponse>;
  /** 创建集成任务 {@link V20210820.CreateIntegrationTaskRequest} {@link V20210820.CreateIntegrationTaskResponse} */
  CreateIntegrationTask(data: V20210820.CreateIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateIntegrationTaskResponse>;
  /** 创建离线任务 {@link V20210820.CreateOfflineTaskRequest} {@link V20210820.CreateOfflineTaskResponse} */
  CreateOfflineTask(data: V20210820.CreateOfflineTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateOfflineTaskResponse>;
  /** 任务运维-批量补数据（创建补录计划） {@link V20210820.CreateOpsMakePlanRequest} {@link V20210820.CreateOpsMakePlanResponse} */
  CreateOpsMakePlan(data: V20210820.CreateOpsMakePlanRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateOpsMakePlanResponse>;
  /** 创建质量规则接口 {@link V20210820.CreateRuleRequest} {@link V20210820.CreateRuleResponse} */
  CreateRule(data: V20210820.CreateRuleRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateRuleResponse>;
  /** 创建规则模板 {@link V20210820.CreateRuleTemplateRequest} {@link V20210820.CreateRuleTemplateResponse} */
  CreateRuleTemplate(data: V20210820.CreateRuleTemplateRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateRuleTemplateResponse>;
  /** 创建任务（废弃） {@link V20210820.CreateTaskRequest} {@link V20210820.CreateTaskResponse} */
  CreateTask(data: V20210820.CreateTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateTaskResponse>;
  /** 创建任务告警规则 {@link V20210820.CreateTaskAlarmRegularRequest} {@link V20210820.CreateTaskAlarmRegularResponse} */
  CreateTaskAlarmRegular(data: V20210820.CreateTaskAlarmRegularRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateTaskAlarmRegularResponse>;
  /** 创建任务文件夹 {@link V20210820.CreateTaskFolderRequest} {@link V20210820.CreateTaskFolderResponse} */
  CreateTaskFolder(data: V20210820.CreateTaskFolderRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateTaskFolderResponse>;
  /** 聚合创建任务 {@link V20210820.CreateTaskNewRequest} {@link V20210820.CreateTaskNewResponse} */
  CreateTaskNew(data: V20210820.CreateTaskNewRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateTaskNewResponse>;
  /** 提交任务版本 {@link V20210820.CreateTaskVersionDsRequest} {@link V20210820.CreateTaskVersionDsResponse} */
  CreateTaskVersionDs(data: V20210820.CreateTaskVersionDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateTaskVersionDsResponse>;
  /** 创建工作流 {@link V20210820.CreateWorkflowDsRequest} {@link V20210820.CreateWorkflowDsResponse} */
  CreateWorkflowDs(data: V20210820.CreateWorkflowDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.CreateWorkflowDsResponse>;
  /** 拉取dag实例 {@link V20210820.DagInstancesRequest} {@link V20210820.DagInstancesResponse} */
  DagInstances(data: V20210820.DagInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DagInstancesResponse>;
  /** 删除代码模版 {@link V20210820.DeleteCodeTemplateRequest} {@link V20210820.DeleteCodeTemplateResponse} */
  DeleteCodeTemplate(data: V20210820.DeleteCodeTemplateRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteCodeTemplateResponse>;
  /** 删除用户自定义函数 {@link V20210820.DeleteCustomFunctionRequest} {@link V20210820.DeleteCustomFunctionResponse} */
  DeleteCustomFunction(data: V20210820.DeleteCustomFunctionRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteCustomFunctionResponse>;
  /** （仅公有云）销毁数据建模，提供给云应用使用，实现Wedata数据建模的销毁 {@link V20210820.DeleteDataModelRequest} {@link V20210820.DeleteDataModelResponse} */
  DeleteDataModel(data: V20210820.DeleteDataModelRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteDataModelResponse>;
  /** 数据源管理-删除数据源 {@link V20210820.DeleteDataSourcesRequest} {@link V20210820.DeleteDataSourcesResponse} */
  DeleteDataSources(data: V20210820.DeleteDataSourcesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteDataSourcesResponse>;
  /** 删除文件夹 {@link V20210820.DeleteDsFolderRequest} {@link V20210820.DeleteDsFolderResponse} */
  DeleteDsFolder(data: V20210820.DeleteDsFolderRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteDsFolderResponse>;
  /** 开发空间-删除文件 {@link V20210820.DeleteFileRequest} {@link V20210820.DeleteFileResponse} */
  DeleteFile(data: V20210820.DeleteFileRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteFileResponse>;
  /** 开发空间-批量删除目录和文件 {@link V20210820.DeleteFilePathRequest} {@link V20210820.DeleteFilePathResponse} */
  DeleteFilePath(data: V20210820.DeleteFilePathRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteFilePathResponse>;
  /** 删除集成节点 {@link V20210820.DeleteIntegrationNodeRequest} {@link V20210820.DeleteIntegrationNodeResponse} */
  DeleteIntegrationNode(data: V20210820.DeleteIntegrationNodeRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteIntegrationNodeResponse>;
  /** 删除实时集成任务 {@link V20210820.DeleteIntegrationTaskRequest} {@link V20210820.DeleteIntegrationTaskResponse} */
  DeleteIntegrationTask(data: V20210820.DeleteIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteIntegrationTaskResponse>;
  /** 删除任务连接 {@link V20210820.DeleteLinkRequest} {@link V20210820.DeleteLinkResponse} */
  DeleteLink(data: V20210820.DeleteLinkRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteLinkResponse>;
  /** 删除离线任务 {@link V20210820.DeleteOfflineTaskRequest} {@link V20210820.DeleteOfflineTaskResponse} */
  DeleteOfflineTask(data: V20210820.DeleteOfflineTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteOfflineTaskResponse>;
  /** 删除项目参数 {@link V20210820.DeleteProjectParamDsRequest} {@link V20210820.DeleteProjectParamDsResponse} */
  DeleteProjectParamDs(data: V20210820.DeleteProjectParamDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteProjectParamDsResponse>;
  /** 删除项目用户 {@link V20210820.DeleteProjectUsersRequest} {@link V20210820.DeleteProjectUsersResponse} */
  DeleteProjectUsers(data: V20210820.DeleteProjectUsersRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteProjectUsersResponse>;
  /** 删除资源（废弃） {@link V20210820.DeleteResourceRequest} {@link V20210820.DeleteResourceResponse} */
  DeleteResource(data: V20210820.DeleteResourceRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteResourceResponse>;
  /** 【资源管理】删除资源 {@link V20210820.DeleteResourceFileRequest} {@link V20210820.DeleteResourceFileResponse} */
  DeleteResourceFile(data: V20210820.DeleteResourceFileRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteResourceFileResponse>;
  /** 【资源管理】批量删除资源 {@link V20210820.DeleteResourceFilesRequest} {@link V20210820.DeleteResourceFilesResponse} */
  DeleteResourceFiles(data: V20210820.DeleteResourceFilesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteResourceFilesResponse>;
  /** 删除质量规则接口 {@link V20210820.DeleteRuleRequest} {@link V20210820.DeleteRuleResponse} */
  DeleteRule(data: V20210820.DeleteRuleRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteRuleResponse>;
  /** 删除规则模板 {@link V20210820.DeleteRuleTemplateRequest} {@link V20210820.DeleteRuleTemplateResponse} */
  DeleteRuleTemplate(data: V20210820.DeleteRuleTemplateRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteRuleTemplateResponse>;
  /** 删除任务告警规则 {@link V20210820.DeleteTaskAlarmRegularRequest} {@link V20210820.DeleteTaskAlarmRegularResponse} */
  DeleteTaskAlarmRegular(data: V20210820.DeleteTaskAlarmRegularRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteTaskAlarmRegularResponse>;
  /** 删除编排空间任务 {@link V20210820.DeleteTaskDsRequest} {@link V20210820.DeleteTaskDsResponse} */
  DeleteTaskDs(data: V20210820.DeleteTaskDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteTaskDsResponse>;
  /** 删除任务血缘关系 {@link V20210820.DeleteTaskLineageRequest} {@link V20210820.DeleteTaskLineageResponse} */
  DeleteTaskLineage(data: V20210820.DeleteTaskLineageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteTaskLineageResponse>;
  /** 通过工作流Id删除工作流 {@link V20210820.DeleteWorkflowByIdRequest} {@link V20210820.DeleteWorkflowByIdResponse} */
  DeleteWorkflowById(data: V20210820.DeleteWorkflowByIdRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DeleteWorkflowByIdResponse>;
  /** 告警事件列表 {@link V20210820.DescribeAlarmEventsRequest} {@link V20210820.DescribeAlarmEventsResponse} */
  DescribeAlarmEvents(data: V20210820.DescribeAlarmEventsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeAlarmEventsResponse>;
  /** 告警接收人详情 {@link V20210820.DescribeAlarmReceiverRequest} {@link V20210820.DescribeAlarmReceiverResponse} */
  DescribeAlarmReceiver(data: V20210820.DescribeAlarmReceiverRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeAlarmReceiverResponse>;
  /** 查询父目录下所有子文件夹+工作流 {@link V20210820.DescribeAllByFolderNewRequest} {@link V20210820.DescribeAllByFolderNewResponse} */
  DescribeAllByFolderNew(data: V20210820.DescribeAllByFolderNewRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeAllByFolderNewResponse>;
  /** 获取待审批列表 {@link V20210820.DescribeApproveListRequest} {@link V20210820.DescribeApproveListResponse} */
  DescribeApproveList(data: V20210820.DescribeApproveListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeApproveListResponse>;
  /** 获取审批分类列表 {@link V20210820.DescribeApproveTypeListRequest} {@link V20210820.DescribeApproveTypeListResponse} */
  DescribeApproveTypeList(data: V20210820.DescribeApproveTypeListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeApproveTypeListResponse>;
  /** 数据类目基础信息列表 {@link V20210820.DescribeBaseBizCatalogsRequest} {@link V20210820.DescribeBaseBizCatalogsResponse} */
  DescribeBaseBizCatalogs(data: V20210820.DescribeBaseBizCatalogsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeBaseBizCatalogsResponse>;
  /** 批量操作页面获取任务列表 {@link V20210820.DescribeBatchOperateTaskRequest} {@link V20210820.DescribeBatchOperateTaskResponse} */
  DescribeBatchOperateTask(data: V20210820.DescribeBatchOperateTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeBatchOperateTaskResponse>;
  /** 查询代码模版具体详情 {@link V20210820.DescribeCodeTemplateDetailRequest} {@link V20210820.DescribeCodeTemplateDetailResponse} */
  DescribeCodeTemplateDetail(data: V20210820.DescribeCodeTemplateDetailRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeCodeTemplateDetailResponse>;
  /** 列出字段血缘信息 {@link V20210820.DescribeColumnLineageRequest} {@link V20210820.DescribeColumnLineageResponse} */
  DescribeColumnLineage(data: V20210820.DescribeColumnLineageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeColumnLineageResponse>;
  /** 查询表的所有列元数据 {@link V20210820.DescribeColumnsMetaRequest} {@link V20210820.DescribeColumnsMetaResponse} */
  DescribeColumnsMeta(data: V20210820.DescribeColumnsMetaRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeColumnsMetaResponse>;
  /** 数据质量数据监测情况接口 {@link V20210820.DescribeDataCheckStatRequest} {@link V20210820.DescribeDataCheckStatResponse} */
  DescribeDataCheckStat(data: V20210820.DescribeDataCheckStatRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDataCheckStatResponse>;
  /** 查询数据服务API的发布态信息详情 {@link V20210820.DescribeDataServicePublishedApiDetailRequest} {@link V20210820.DescribeDataServicePublishedApiDetailResponse} */
  DescribeDataServicePublishedApiDetail(data: V20210820.DescribeDataServicePublishedApiDetailRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDataServicePublishedApiDetailResponse>;
  /** 获取数据服务API的发布态信息列表 {@link V20210820.DescribeDataServicePublishedApiListRequest} {@link V20210820.DescribeDataServicePublishedApiListResponse} */
  DescribeDataServicePublishedApiList(data: V20210820.DescribeDataServicePublishedApiListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDataServicePublishedApiListResponse>;
  /** 获取数据源信息 {@link V20210820.DescribeDataSourceInfoListRequest} {@link V20210820.DescribeDataSourceInfoListResponse} */
  DescribeDataSourceInfoList(data: V20210820.DescribeDataSourceInfoListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDataSourceInfoListResponse>;
  /** 数据源管理-查询数据源分页列表 {@link V20210820.DescribeDataSourceListRequest} {@link V20210820.DescribeDataSourceListResponse} */
  DescribeDataSourceList(data: V20210820.DescribeDataSourceListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDataSourceListResponse>;
  /** 获取数据库信息 {@link V20210820.DescribeDatabaseInfoListRequest} {@link V20210820.DescribeDatabaseInfoListResponse} */
  DescribeDatabaseInfoList(data: V20210820.DescribeDatabaseInfoListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDatabaseInfoListResponse>;
  /** 查询数据库列表 {@link V20210820.DescribeDatabaseMetasRequest} {@link V20210820.DescribeDatabaseMetasResponse} */
  DescribeDatabaseMetas(data: V20210820.DescribeDatabaseMetasRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDatabaseMetasResponse>;
  /** 数据源管理-数据源详情 {@link V20210820.DescribeDatasourceRequest} {@link V20210820.DescribeDatasourceResponse} */
  DescribeDatasource(data: V20210820.DescribeDatasourceRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDatasourceResponse>;
  /** 根据层级查找上-下游任务节点 {@link V20210820.DescribeDependOpsTasksRequest} {@link V20210820.DescribeDependOpsTasksResponse} */
  DescribeDependOpsTasks(data: V20210820.DescribeDependOpsTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDependOpsTasksResponse>;
  /** 通过taskIds查询task详情列表 {@link V20210820.DescribeDependTaskListsRequest} {@link V20210820.DescribeDependTaskListsResponse} */
  DescribeDependTaskLists(data: V20210820.DescribeDependTaskListsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDependTaskListsResponse>;
  /** 查询维度评分 {@link V20210820.DescribeDimensionScoreRequest} {@link V20210820.DescribeDimensionScoreResponse} */
  DescribeDimensionScore(data: V20210820.DescribeDimensionScoreRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDimensionScoreResponse>;
  /** 编排空间-查询目录树 {@link V20210820.DescribeDsFolderTreeRequest} {@link V20210820.DescribeDsFolderTreeResponse} */
  DescribeDsFolderTree(data: V20210820.DescribeDsFolderTreeRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDsFolderTreeResponse>;
  /** 编排空间-查询父目录树 {@link V20210820.DescribeDsParentFolderTreeRequest} {@link V20210820.DescribeDsParentFolderTreeResponse} */
  DescribeDsParentFolderTree(data: V20210820.DescribeDsParentFolderTreeRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDsParentFolderTreeResponse>;
  /** 查看任务版本详细信息 {@link V20210820.DescribeDsTaskVersionInfoRequest} {@link V20210820.DescribeDsTaskVersionInfoResponse} */
  DescribeDsTaskVersionInfo(data: V20210820.DescribeDsTaskVersionInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDsTaskVersionInfoResponse>;
  /** 拉取任务版本列表 {@link V20210820.DescribeDsTaskVersionListRequest} {@link V20210820.DescribeDsTaskVersionListResponse} */
  DescribeDsTaskVersionList(data: V20210820.DescribeDsTaskVersionListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDsTaskVersionListResponse>;
  /** 获取值班日历 {@link V20210820.DescribeDutyScheduleDetailsRequest} {@link V20210820.DescribeDutyScheduleDetailsResponse} */
  DescribeDutyScheduleDetails(data: V20210820.DescribeDutyScheduleDetailsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDutyScheduleDetailsResponse>;
  /** 获取值班表列表 {@link V20210820.DescribeDutyScheduleListRequest} {@link V20210820.DescribeDutyScheduleListResponse} */
  DescribeDutyScheduleList(data: V20210820.DescribeDutyScheduleListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeDutyScheduleListResponse>;
  /** 实例运维-事件实例-查询事件详情 {@link V20210820.DescribeEventRequest} {@link V20210820.DescribeEventResponse} */
  DescribeEvent(data: V20210820.DescribeEventRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeEventResponse>;
  /** 查找事件实例 {@link V20210820.DescribeEventCasesRequest} {@link V20210820.DescribeEventCasesResponse} */
  DescribeEventCases(data: V20210820.DescribeEventCasesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeEventCasesResponse>;
  /** 事件实例-事件实例查看消费任务 {@link V20210820.DescribeEventConsumeTasksRequest} {@link V20210820.DescribeEventConsumeTasksResponse} */
  DescribeEventConsumeTasks(data: V20210820.DescribeEventConsumeTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeEventConsumeTasksResponse>;
  /** 查询规则组执行策略 {@link V20210820.DescribeExecStrategyRequest} {@link V20210820.DescribeExecStrategyResponse} */
  DescribeExecStrategy(data: V20210820.DescribeExecStrategyRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeExecStrategyResponse>;
  /** 根据id查询执行资源组指标-商业化版本 {@link V20210820.DescribeExecutorGroupMetricRequest} {@link V20210820.DescribeExecutorGroupMetricResponse} */
  DescribeExecutorGroupMetric(data: V20210820.DescribeExecutorGroupMetricRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeExecutorGroupMetricResponse>;
  /** 字段基础信息查询 {@link V20210820.DescribeFieldBasicInfoRequest} {@link V20210820.DescribeFieldBasicInfoResponse} */
  DescribeFieldBasicInfo(data: V20210820.DescribeFieldBasicInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeFieldBasicInfoResponse>;
  /** 拉取文件夹下的工作流 {@link V20210820.DescribeFolderWorkflowListRequest} {@link V20210820.DescribeFolderWorkflowListResponse} */
  DescribeFolderWorkflowList(data: V20210820.DescribeFolderWorkflowListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeFolderWorkflowListResponse>;
  /** 查询模版提交任务参数 {@link V20210820.DescribeFormVersionParamRequest} {@link V20210820.DescribeFormVersionParamResponse} */
  DescribeFormVersionParam(data: V20210820.DescribeFormVersionParamRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeFormVersionParamResponse>;
  /** 查询函数分类 {@link V20210820.DescribeFunctionKindsRequest} {@link V20210820.DescribeFunctionKindsResponse} */
  DescribeFunctionKinds(data: V20210820.DescribeFunctionKindsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeFunctionKindsResponse>;
  /** 查询函数类型 {@link V20210820.DescribeFunctionTypesRequest} {@link V20210820.DescribeFunctionTypesResponse} */
  DescribeFunctionTypes(data: V20210820.DescribeFunctionTypesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeFunctionTypesResponse>;
  /** 周期实例统计 {@link V20210820.DescribeInstanceByCycleRequest} {@link V20210820.DescribeInstanceByCycleResponse} */
  DescribeInstanceByCycle(data: V20210820.DescribeInstanceByCycleRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeInstanceByCycleResponse>;
  /** DescribeInstanceDetailInfo {@link V20210820.DescribeInstanceDetailInfoRequest} {@link V20210820.DescribeInstanceDetailInfoResponse} */
  DescribeInstanceDetailInfo(data: V20210820.DescribeInstanceDetailInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeInstanceDetailInfoResponse>;
  /** 获取日志详情页面 {@link V20210820.DescribeInstanceLastLogRequest} {@link V20210820.DescribeInstanceLastLogResponse} */
  DescribeInstanceLastLog(data: V20210820.DescribeInstanceLastLogRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeInstanceLastLogResponse>;
  /** 获取离线运维实例列表 {@link V20210820.DescribeInstanceListRequest} {@link V20210820.DescribeInstanceListResponse} */
  DescribeInstanceList(data: V20210820.DescribeInstanceListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeInstanceListResponse>;
  /** 获取实例运行日志 {@link V20210820.DescribeInstanceLogRequest} {@link V20210820.DescribeInstanceLogResponse} */
  DescribeInstanceLog(data: V20210820.DescribeInstanceLogRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeInstanceLogResponse>;
  /** 实例运维-获取具体实例相关日志信息内容 {@link V20210820.DescribeInstanceLogDetailRequest} {@link V20210820.DescribeInstanceLogDetailResponse} */
  DescribeInstanceLogDetail(data: V20210820.DescribeInstanceLogDetailRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeInstanceLogDetailResponse>;
  /** 下载日志文件 {@link V20210820.DescribeInstanceLogFileRequest} {@link V20210820.DescribeInstanceLogFileResponse} */
  DescribeInstanceLogFile(data: V20210820.DescribeInstanceLogFileRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeInstanceLogFileResponse>;
  /** 获取离线任务实例运行日志列表 {@link V20210820.DescribeInstanceLogListRequest} {@link V20210820.DescribeInstanceLogListResponse} */
  DescribeInstanceLogList(data: V20210820.DescribeInstanceLogListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeInstanceLogListResponse>;
  /** 查询集成节点 {@link V20210820.DescribeIntegrationNodeRequest} {@link V20210820.DescribeIntegrationNodeResponse} */
  DescribeIntegrationNode(data: V20210820.DescribeIntegrationNodeRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeIntegrationNodeResponse>;
  /** 数据集成大屏概览 {@link V20210820.DescribeIntegrationStatisticsRequest} {@link V20210820.DescribeIntegrationStatisticsResponse} */
  DescribeIntegrationStatistics(data: V20210820.DescribeIntegrationStatisticsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeIntegrationStatisticsResponse>;
  /** 数据集成大屏实例状态统计趋势 {@link V20210820.DescribeIntegrationStatisticsInstanceTrendRequest} {@link V20210820.DescribeIntegrationStatisticsInstanceTrendResponse} */
  DescribeIntegrationStatisticsInstanceTrend(data: V20210820.DescribeIntegrationStatisticsInstanceTrendRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeIntegrationStatisticsInstanceTrendResponse>;
  /** 数据集成大屏同步条数统计趋势 {@link V20210820.DescribeIntegrationStatisticsRecordsTrendRequest} {@link V20210820.DescribeIntegrationStatisticsRecordsTrendResponse} */
  DescribeIntegrationStatisticsRecordsTrend(data: V20210820.DescribeIntegrationStatisticsRecordsTrendRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeIntegrationStatisticsRecordsTrendResponse>;
  /** 数据集成大屏任务状态分布统计 {@link V20210820.DescribeIntegrationStatisticsTaskStatusRequest} {@link V20210820.DescribeIntegrationStatisticsTaskStatusResponse} */
  DescribeIntegrationStatisticsTaskStatus(data: V20210820.DescribeIntegrationStatisticsTaskStatusRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeIntegrationStatisticsTaskStatusResponse>;
  /** 数据集成大屏任务状态统计趋势 {@link V20210820.DescribeIntegrationStatisticsTaskStatusTrendRequest} {@link V20210820.DescribeIntegrationStatisticsTaskStatusTrendResponse} */
  DescribeIntegrationStatisticsTaskStatusTrend(data: V20210820.DescribeIntegrationStatisticsTaskStatusTrendRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeIntegrationStatisticsTaskStatusTrendResponse>;
  /** 查询集成任务详情 {@link V20210820.DescribeIntegrationTaskRequest} {@link V20210820.DescribeIntegrationTaskResponse} */
  DescribeIntegrationTask(data: V20210820.DescribeIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeIntegrationTaskResponse>;
  /** 查询集成任务列表 {@link V20210820.DescribeIntegrationTasksRequest} {@link V20210820.DescribeIntegrationTasksResponse} */
  DescribeIntegrationTasks(data: V20210820.DescribeIntegrationTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeIntegrationTasksResponse>;
  /** 查询集成任务版本节点信息 {@link V20210820.DescribeIntegrationVersionNodesInfoRequest} {@link V20210820.DescribeIntegrationVersionNodesInfoResponse} */
  DescribeIntegrationVersionNodesInfo(data: V20210820.DescribeIntegrationVersionNodesInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeIntegrationVersionNodesInfoResponse>;
  /** 通用血缘查询 {@link V20210820.DescribeLineageInfoRequest} {@link V20210820.DescribeLineageInfoResponse} */
  DescribeLineageInfo(data: V20210820.DescribeLineageInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeLineageInfoResponse>;
  /** 查询手动任务触发记录 {@link V20210820.DescribeManualTriggerRecordPageRequest} {@link V20210820.DescribeManualTriggerRecordPageResponse} */
  DescribeManualTriggerRecordPage(data: V20210820.DescribeManualTriggerRecordPageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeManualTriggerRecordPageResponse>;
  /** 获取离线任务长连接Token {@link V20210820.DescribeOfflineTaskTokenRequest} {@link V20210820.DescribeOfflineTaskTokenResponse} */
  DescribeOfflineTaskToken(data: V20210820.DescribeOfflineTaskTokenRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeOfflineTaskTokenResponse>;
  /** 智能运维-任务运维列表组合条件查询 {@link V20210820.DescribeOperateOpsTasksRequest} {@link V20210820.DescribeOperateOpsTasksResponse} */
  DescribeOperateOpsTasks(data: V20210820.DescribeOperateOpsTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeOperateOpsTasksResponse>;
  /** 实例运维-获取实例日志列表 {@link V20210820.DescribeOpsInstanceLogListRequest} {@link V20210820.DescribeOpsInstanceLogListResponse} */
  DescribeOpsInstanceLogList(data: V20210820.DescribeOpsInstanceLogListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeOpsInstanceLogListResponse>;
  /** 数据补录-查看补录计划任务实例 {@link V20210820.DescribeOpsMakePlanInstancesRequest} {@link V20210820.DescribeOpsMakePlanInstancesResponse} */
  DescribeOpsMakePlanInstances(data: V20210820.DescribeOpsMakePlanInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeOpsMakePlanInstancesResponse>;
  /** 数据补录-查看补录计划任务 {@link V20210820.DescribeOpsMakePlanTasksRequest} {@link V20210820.DescribeOpsMakePlanTasksResponse} */
  DescribeOpsMakePlanTasks(data: V20210820.DescribeOpsMakePlanTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeOpsMakePlanTasksResponse>;
  /** 数据补录-查询补录计划 {@link V20210820.DescribeOpsMakePlansRequest} {@link V20210820.DescribeOpsMakePlansResponse} */
  DescribeOpsMakePlans(data: V20210820.DescribeOpsMakePlansRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeOpsMakePlansResponse>;
  /** 查询用户生产工作流列表 {@link V20210820.DescribeOpsWorkflowsRequest} {@link V20210820.DescribeOpsWorkflowsResponse} */
  DescribeOpsWorkflows(data: V20210820.DescribeOpsWorkflowsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeOpsWorkflowsResponse>;
  /** 查询全量函数（层级化）接口 {@link V20210820.DescribeOrganizationalFunctionsRequest} {@link V20210820.DescribeOrganizationalFunctionsResponse} */
  DescribeOrganizationalFunctions(data: V20210820.DescribeOrganizationalFunctionsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeOrganizationalFunctionsResponse>;
  /** 查询任务父依赖 {@link V20210820.DescribeParentTaskRequest} {@link V20210820.DescribeParentTaskResponse} */
  DescribeParentTask(data: V20210820.DescribeParentTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeParentTaskResponse>;
  /** 获取待提交任务预提交校验信息 {@link V20210820.DescribePendingSubmitTaskListRequest} {@link V20210820.DescribePendingSubmitTaskListResponse} */
  DescribePendingSubmitTaskList(data: V20210820.DescribePendingSubmitTaskListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribePendingSubmitTaskListResponse>;
  /** 获取项目信息 {@link V20210820.DescribeProjectRequest} {@link V20210820.DescribeProjectResponse} */
  DescribeProject(data: V20210820.DescribeProjectRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeProjectResponse>;
  /** 获取项目下的用户列表 {@link V20210820.DescribeProjectUsersRequest} {@link V20210820.DescribeProjectUsersResponse} */
  DescribeProjectUsers(data: V20210820.DescribeProjectUsersRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeProjectUsersResponse>;
  /** 查询质量评分 {@link V20210820.DescribeQualityScoreRequest} {@link V20210820.DescribeQualityScoreResponse} */
  DescribeQualityScore(data: V20210820.DescribeQualityScoreRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeQualityScoreResponse>;
  /** 查询质量分趋势 {@link V20210820.DescribeQualityScoreTrendRequest} {@link V20210820.DescribeQualityScoreTrendResponse} */
  DescribeQualityScoreTrend(data: V20210820.DescribeQualityScoreTrendRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeQualityScoreTrendResponse>;
  /** 查询实时任务实例节点信息 {@link V20210820.DescribeRealTimeTaskInstanceNodeInfoRequest} {@link V20210820.DescribeRealTimeTaskInstanceNodeInfoResponse} */
  DescribeRealTimeTaskInstanceNodeInfo(data: V20210820.DescribeRealTimeTaskInstanceNodeInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRealTimeTaskInstanceNodeInfoResponse>;
  /** 实时任务运行指标概览 {@link V20210820.DescribeRealTimeTaskMetricOverviewRequest} {@link V20210820.DescribeRealTimeTaskMetricOverviewResponse} */
  DescribeRealTimeTaskMetricOverview(data: V20210820.DescribeRealTimeTaskMetricOverviewRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRealTimeTaskMetricOverviewResponse>;
  /** 实时任务同步速度趋势 {@link V20210820.DescribeRealTimeTaskSpeedRequest} {@link V20210820.DescribeRealTimeTaskSpeedResponse} */
  DescribeRealTimeTaskSpeed(data: V20210820.DescribeRealTimeTaskSpeedRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRealTimeTaskSpeedResponse>;
  /** 数据集成分页获取数据库Schema {@link V20210820.DescribeRealViewSchemaPageRequest} {@link V20210820.DescribeRealViewSchemaPageResponse} */
  DescribeRealViewSchemaPage(data: V20210820.DescribeRealViewSchemaPageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRealViewSchemaPageResponse>;
  /** 根据任务ID分页查询上下游直接关联任务 {@link V20210820.DescribeRelatedTasksByTaskIdRequest} {@link V20210820.DescribeRelatedTasksByTaskIdResponse} */
  DescribeRelatedTasksByTaskId(data: V20210820.DescribeRelatedTasksByTaskIdRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRelatedTasksByTaskIdResponse>;
  /** 获取用量大盘任务详情 {@link V20210820.DescribeReportTaskDetailRequest} {@link V20210820.DescribeReportTaskDetailResponse} */
  DescribeReportTaskDetail(data: V20210820.DescribeReportTaskDetailRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeReportTaskDetailResponse>;
  /** 查询用量大盘任务列表 {@link V20210820.DescribeReportTaskListRequest} {@link V20210820.DescribeReportTaskListResponse} */
  DescribeReportTaskList(data: V20210820.DescribeReportTaskListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeReportTaskListResponse>;
  /** 获取资源管理目录树 {@link V20210820.DescribeResourceManagePathTreesRequest} {@link V20210820.DescribeResourceManagePathTreesResponse} */
  DescribeResourceManagePathTrees(data: V20210820.DescribeResourceManagePathTreesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeResourceManagePathTreesResponse>;
  /** 获取角色列表信息 {@link V20210820.DescribeRoleListRequest} {@link V20210820.DescribeRoleListResponse} */
  DescribeRoleList(data: V20210820.DescribeRoleListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRoleListResponse>;
  /** 查询规则详情 {@link V20210820.DescribeRuleRequest} {@link V20210820.DescribeRuleResponse} */
  DescribeRule(data: V20210820.DescribeRuleRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleResponse>;
  /** 数据质量触发维度分布统计接口 {@link V20210820.DescribeRuleDimStatRequest} {@link V20210820.DescribeRuleDimStatResponse} */
  DescribeRuleDimStat(data: V20210820.DescribeRuleDimStatRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleDimStatResponse>;
  /** 查询规则执行结果详情 {@link V20210820.DescribeRuleExecDetailRequest} {@link V20210820.DescribeRuleExecDetailResponse} */
  DescribeRuleExecDetail(data: V20210820.DescribeRuleExecDetailRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleExecDetailResponse>;
  /** 规则执行日志查询 {@link V20210820.DescribeRuleExecLogRequest} {@link V20210820.DescribeRuleExecLogResponse} */
  DescribeRuleExecLog(data: V20210820.DescribeRuleExecLogRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleExecLogResponse>;
  /** 规则执行结果列表查询 {@link V20210820.DescribeRuleExecResultsRequest} {@link V20210820.DescribeRuleExecResultsResponse} */
  DescribeRuleExecResults(data: V20210820.DescribeRuleExecResultsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleExecResultsResponse>;
  /** 数据质量规则运行情况接口 {@link V20210820.DescribeRuleExecStatRequest} {@link V20210820.DescribeRuleExecStatResponse} */
  DescribeRuleExecStat(data: V20210820.DescribeRuleExecStatRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleExecStatResponse>;
  /** 查询规则组详情接口 {@link V20210820.DescribeRuleGroupRequest} {@link V20210820.DescribeRuleGroupResponse} */
  DescribeRuleGroup(data: V20210820.DescribeRuleGroupRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleGroupResponse>;
  /** 规则组执行结果分页查询接口 {@link V20210820.DescribeRuleGroupExecResultsByPageRequest} {@link V20210820.DescribeRuleGroupExecResultsByPageResponse} */
  DescribeRuleGroupExecResultsByPage(data: V20210820.DescribeRuleGroupExecResultsByPageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleGroupExecResultsByPageResponse>;
  /** 查询规则组订阅信息 {@link V20210820.DescribeRuleGroupSubscriptionRequest} {@link V20210820.DescribeRuleGroupSubscriptionResponse} */
  DescribeRuleGroupSubscription(data: V20210820.DescribeRuleGroupSubscriptionRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleGroupSubscriptionResponse>;
  /** 查询表绑定执行规则组信息 {@link V20210820.DescribeRuleGroupTableRequest} {@link V20210820.DescribeRuleGroupTableResponse} */
  DescribeRuleGroupTable(data: V20210820.DescribeRuleGroupTableRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleGroupTableResponse>;
  /** 分页查询规则组接口 {@link V20210820.DescribeRuleGroupsByPageRequest} {@link V20210820.DescribeRuleGroupsByPageResponse} */
  DescribeRuleGroupsByPage(data: V20210820.DescribeRuleGroupsByPageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleGroupsByPageResponse>;
  /** 查询模板详情 {@link V20210820.DescribeRuleTemplateRequest} {@link V20210820.DescribeRuleTemplateResponse} */
  DescribeRuleTemplate(data: V20210820.DescribeRuleTemplateRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleTemplateResponse>;
  /** 查询规则模板列表 {@link V20210820.DescribeRuleTemplatesRequest} {@link V20210820.DescribeRuleTemplatesResponse} */
  DescribeRuleTemplates(data: V20210820.DescribeRuleTemplatesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleTemplatesResponse>;
  /** 规则模板查询接口 {@link V20210820.DescribeRuleTemplatesByPageRequest} {@link V20210820.DescribeRuleTemplatesByPageResponse} */
  DescribeRuleTemplatesByPage(data: V20210820.DescribeRuleTemplatesByPageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRuleTemplatesByPageResponse>;
  /** 查询质量规则列表 {@link V20210820.DescribeRulesRequest} {@link V20210820.DescribeRulesResponse} */
  DescribeRules(data: V20210820.DescribeRulesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRulesResponse>;
  /** 分页查询质量规则 {@link V20210820.DescribeRulesByPageRequest} {@link V20210820.DescribeRulesByPageResponse} */
  DescribeRulesByPage(data: V20210820.DescribeRulesByPageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeRulesByPageResponse>;
  /** 运维中心-获取实例列表 {@link V20210820.DescribeScheduleInstancesRequest} {@link V20210820.DescribeScheduleInstancesResponse} */
  DescribeScheduleInstances(data: V20210820.DescribeScheduleInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeScheduleInstancesResponse>;
  /** 运维大屏-实例状态分布 {@link V20210820.DescribeSchedulerInstanceStatusRequest} {@link V20210820.DescribeSchedulerInstanceStatusResponse} */
  DescribeSchedulerInstanceStatus(data: V20210820.DescribeSchedulerInstanceStatusRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeSchedulerInstanceStatusResponse>;
  /** 运维大屏-实例运行时长排行 {@link V20210820.DescribeSchedulerRunTimeInstanceCntByStatusRequest} {@link V20210820.DescribeSchedulerRunTimeInstanceCntByStatusResponse} */
  DescribeSchedulerRunTimeInstanceCntByStatus(data: V20210820.DescribeSchedulerRunTimeInstanceCntByStatusRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeSchedulerRunTimeInstanceCntByStatusResponse>;
  /** 任务状态统计 {@link V20210820.DescribeSchedulerTaskCntByStatusRequest} {@link V20210820.DescribeSchedulerTaskCntByStatusResponse} */
  DescribeSchedulerTaskCntByStatus(data: V20210820.DescribeSchedulerTaskCntByStatusRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeSchedulerTaskCntByStatusResponse>;
  /** 运维大屏-任务状态分布 {@link V20210820.DescribeSchedulerTaskTypeCntRequest} {@link V20210820.DescribeSchedulerTaskTypeCntResponse} */
  DescribeSchedulerTaskTypeCnt(data: V20210820.DescribeSchedulerTaskTypeCntRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeSchedulerTaskTypeCntResponse>;
  /** 实例状态趋势 {@link V20210820.DescribeStatisticInstanceStatusTrendOpsRequest} {@link V20210820.DescribeStatisticInstanceStatusTrendOpsResponse} */
  DescribeStatisticInstanceStatusTrendOps(data: V20210820.DescribeStatisticInstanceStatusTrendOpsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeStatisticInstanceStatusTrendOpsResponse>;
  /** 查询实时任务日志列表 {@link V20210820.DescribeStreamTaskLogListRequest} {@link V20210820.DescribeStreamTaskLogListResponse} */
  DescribeStreamTaskLogList(data: V20210820.DescribeStreamTaskLogListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeStreamTaskLogListResponse>;
  /** 获取任务全部下游（开发态） {@link V20210820.DescribeSuccessorOpsTaskInfosRequest} {@link V20210820.DescribeSuccessorOpsTaskInfosResponse} */
  DescribeSuccessorOpsTaskInfos(data: V20210820.DescribeSuccessorOpsTaskInfosRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeSuccessorOpsTaskInfosResponse>;
  /** 获取下游任务信息批量 {@link V20210820.DescribeSuccessorTaskInfoListRequest} {@link V20210820.DescribeSuccessorTaskInfoListResponse} */
  DescribeSuccessorTaskInfoList(data: V20210820.DescribeSuccessorTaskInfoListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeSuccessorTaskInfoListResponse>;
  /** 表基础信息查询 {@link V20210820.DescribeTableBasicInfoRequest} {@link V20210820.DescribeTableBasicInfoResponse} */
  DescribeTableBasicInfo(data: V20210820.DescribeTableBasicInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTableBasicInfoResponse>;
  /** 获取数据表信息 {@link V20210820.DescribeTableInfoListRequest} {@link V20210820.DescribeTableInfoListResponse} */
  DescribeTableInfoList(data: V20210820.DescribeTableInfoListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTableInfoListResponse>;
  /** 列出表血缘信息 {@link V20210820.DescribeTableLineageRequest} {@link V20210820.DescribeTableLineageResponse} */
  DescribeTableLineage(data: V20210820.DescribeTableLineageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTableLineageResponse>;
  /** 表血缘信息查询接口 {@link V20210820.DescribeTableLineageInfoRequest} {@link V20210820.DescribeTableLineageInfoResponse} */
  DescribeTableLineageInfo(data: V20210820.DescribeTableLineageInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTableLineageInfoResponse>;
  /** 查询表元数据详情 {@link V20210820.DescribeTableMetaRequest} {@link V20210820.DescribeTableMetaResponse} */
  DescribeTableMeta(data: V20210820.DescribeTableMetaRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTableMetaResponse>;
  /** 获取表元数据list {@link V20210820.DescribeTableMetasRequest} {@link V20210820.DescribeTableMetasResponse} */
  DescribeTableMetas(data: V20210820.DescribeTableMetasRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTableMetasResponse>;
  /** 查询表的分区详情信息 {@link V20210820.DescribeTablePartitionsRequest} {@link V20210820.DescribeTablePartitionsResponse} */
  DescribeTablePartitions(data: V20210820.DescribeTablePartitionsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTablePartitionsResponse>;
  /** 查询表质量详情 {@link V20210820.DescribeTableQualityDetailsRequest} {@link V20210820.DescribeTableQualityDetailsResponse} */
  DescribeTableQualityDetails(data: V20210820.DescribeTableQualityDetailsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTableQualityDetailsResponse>;
  /** 获取表schema信息 {@link V20210820.DescribeTableSchemaInfoRequest} {@link V20210820.DescribeTableSchemaInfoResponse} */
  DescribeTableSchemaInfo(data: V20210820.DescribeTableSchemaInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTableSchemaInfoResponse>;
  /** 查询表得分趋势 {@link V20210820.DescribeTableScoreTrendRequest} {@link V20210820.DescribeTableScoreTrendResponse} */
  DescribeTableScoreTrend(data: V20210820.DescribeTableScoreTrendRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTableScoreTrendResponse>;
  /** 查询任务告警规则列表 {@link V20210820.DescribeTaskAlarmRegulationsRequest} {@link V20210820.DescribeTaskAlarmRegulationsResponse} */
  DescribeTaskAlarmRegulations(data: V20210820.DescribeTaskAlarmRegulationsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskAlarmRegulationsResponse>;
  /** 周期任务统计 {@link V20210820.DescribeTaskByCycleRequest} {@link V20210820.DescribeTaskByCycleResponse} */
  DescribeTaskByCycle(data: V20210820.DescribeTaskByCycleRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskByCycleResponse>;
  /** 任务状态趋势 {@link V20210820.DescribeTaskByStatusReportRequest} {@link V20210820.DescribeTaskByStatusReportResponse} */
  DescribeTaskByStatusReport(data: V20210820.DescribeTaskByStatusReportRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskByStatusReportResponse>;
  /** 查询任务具体详情【新】 {@link V20210820.DescribeTaskDetailDsRequest} {@link V20210820.DescribeTaskDetailDsResponse} */
  DescribeTaskDetailDs(data: V20210820.DescribeTaskDetailDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskDetailDsResponse>;
  /** 分组获取编排空间调试任务实例状态信息 {@link V20210820.DescribeTaskInstancesStatusRequest} {@link V20210820.DescribeTaskInstancesStatusResponse} */
  DescribeTaskInstancesStatus(data: V20210820.DescribeTaskInstancesStatusRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskInstancesStatusResponse>;
  /** 通过任务查询表的血缘关系 {@link V20210820.DescribeTaskLineageRequest} {@link V20210820.DescribeTaskLineageResponse} */
  DescribeTaskLineage(data: V20210820.DescribeTaskLineageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskLineageResponse>;
  /** 查看任务锁状态信息 {@link V20210820.DescribeTaskLockStatusRequest} {@link V20210820.DescribeTaskLockStatusResponse} */
  DescribeTaskLockStatus(data: V20210820.DescribeTaskLockStatusRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskLockStatusResponse>;
  /** 查询任务引用参数 {@link V20210820.DescribeTaskParamDsRequest} {@link V20210820.DescribeTaskParamDsResponse} */
  DescribeTaskParamDs(data: V20210820.DescribeTaskParamDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskParamDsResponse>;
  /** 分页查询任务运行历史 {@link V20210820.DescribeTaskRunHistoryRequest} {@link V20210820.DescribeTaskRunHistoryResponse} */
  DescribeTaskRunHistory(data: V20210820.DescribeTaskRunHistoryRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskRunHistoryResponse>;
  /** 查询任务脚本（废弃） {@link V20210820.DescribeTaskScriptRequest} {@link V20210820.DescribeTaskScriptResponse} */
  DescribeTaskScript(data: V20210820.DescribeTaskScriptRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskScriptResponse>;
  /** 查询实时任务表粒度指标概览 {@link V20210820.DescribeTaskTableMetricOverviewRequest} {@link V20210820.DescribeTaskTableMetricOverviewResponse} */
  DescribeTaskTableMetricOverview(data: V20210820.DescribeTaskTableMetricOverviewRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskTableMetricOverviewResponse>;
  /** 查询项目任务模版列表 {@link V20210820.DescribeTaskTemplatesRequest} {@link V20210820.DescribeTaskTemplatesResponse} */
  DescribeTaskTemplates(data: V20210820.DescribeTaskTemplatesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTaskTemplatesResponse>;
  /** 分页查询引用模板的任务列表 {@link V20210820.DescribeTasksForCodeTemplateRequest} {@link V20210820.DescribeTasksForCodeTemplateResponse} */
  DescribeTasksForCodeTemplate(data: V20210820.DescribeTasksForCodeTemplateRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTasksForCodeTemplateResponse>;
  /** 查询规则模板维度分布情况 {@link V20210820.DescribeTemplateDimCountRequest} {@link V20210820.DescribeTemplateDimCountResponse} */
  DescribeTemplateDimCount(data: V20210820.DescribeTemplateDimCountRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTemplateDimCountResponse>;
  /** 获取租户全局范围的项目列表 {@link V20210820.DescribeTenantProjectsRequest} {@link V20210820.DescribeTenantProjectsResponse} */
  DescribeTenantProjects(data: V20210820.DescribeTenantProjectsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTenantProjectsResponse>;
  /** 获取编排空间试运行记录列表 {@link V20210820.DescribeTestRunningRecordRequest} {@link V20210820.DescribeTestRunningRecordResponse} */
  DescribeTestRunningRecord(data: V20210820.DescribeTestRunningRecordRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTestRunningRecordResponse>;
  /** 实例运维-获取第三方运行日志 {@link V20210820.DescribeThirdTaskRunLogRequest} {@link V20210820.DescribeThirdTaskRunLogResponse} */
  DescribeThirdTaskRunLog(data: V20210820.DescribeThirdTaskRunLogRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeThirdTaskRunLogResponse>;
  /** 数据质量表排行接口 {@link V20210820.DescribeTopTableStatRequest} {@link V20210820.DescribeTopTableStatResponse} */
  DescribeTopTableStat(data: V20210820.DescribeTopTableStatRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTopTableStatResponse>;
  /** 数据质量概览页面趋势接口 {@link V20210820.DescribeTrendStatRequest} {@link V20210820.DescribeTrendStatResponse} */
  DescribeTrendStat(data: V20210820.DescribeTrendStatRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeTrendStatResponse>;
  /** 根据文件夹查询工作流 {@link V20210820.DescribeWorkflowByFordIdsRequest} {@link V20210820.DescribeWorkflowByFordIdsResponse} */
  DescribeWorkflowByFordIds(data: V20210820.DescribeWorkflowByFordIdsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeWorkflowByFordIdsResponse>;
  /** 查询工作流画布 {@link V20210820.DescribeWorkflowCanvasInfoRequest} {@link V20210820.DescribeWorkflowCanvasInfoResponse} */
  DescribeWorkflowCanvasInfo(data: V20210820.DescribeWorkflowCanvasInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeWorkflowCanvasInfoResponse>;
  /** 查询工作流画布运行起止时间 {@link V20210820.DescribeWorkflowExecuteByIdRequest} {@link V20210820.DescribeWorkflowExecuteByIdResponse} */
  DescribeWorkflowExecuteById(data: V20210820.DescribeWorkflowExecuteByIdRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeWorkflowExecuteByIdResponse>;
  /** 通过工作流id，查询工作流详情 {@link V20210820.DescribeWorkflowInfoByIdRequest} {@link V20210820.DescribeWorkflowInfoByIdResponse} */
  DescribeWorkflowInfoById(data: V20210820.DescribeWorkflowInfoByIdRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeWorkflowInfoByIdResponse>;
  /** 根据项目id 获取项目下所有工作流列表 {@link V20210820.DescribeWorkflowListByProjectIdRequest} {@link V20210820.DescribeWorkflowListByProjectIdResponse} */
  DescribeWorkflowListByProjectId(data: V20210820.DescribeWorkflowListByProjectIdRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeWorkflowListByProjectIdResponse>;
  /** 获取工作流调度信息 {@link V20210820.DescribeWorkflowSchedulerInfoDsRequest} {@link V20210820.DescribeWorkflowSchedulerInfoDsResponse} */
  DescribeWorkflowSchedulerInfoDs(data: V20210820.DescribeWorkflowSchedulerInfoDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeWorkflowSchedulerInfoDsResponse>;
  /** 查询工作流任务数 {@link V20210820.DescribeWorkflowTaskCountRequest} {@link V20210820.DescribeWorkflowTaskCountResponse} */
  DescribeWorkflowTaskCount(data: V20210820.DescribeWorkflowTaskCountRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DescribeWorkflowTaskCountResponse>;
  /** 实例诊断信息-新 {@link V20210820.DiagnoseProRequest} {@link V20210820.DiagnoseProResponse} */
  DiagnosePro(data: V20210820.DiagnoseProRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DiagnoseProResponse>;
  /** 禁用项目 {@link V20210820.DisableProjectRequest} {@link V20210820.DisableProjectResponse} */
  DisableProject(data: V20210820.DisableProjectRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DisableProjectResponse>;
  /** 按行下载日志信息 {@link V20210820.DownloadLogByLineRequest} {@link V20210820.DownloadLogByLineResponse} */
  DownloadLogByLine(data: V20210820.DownloadLogByLineRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DownloadLogByLineResponse>;
  /** 调试运行集成任务 {@link V20210820.DryRunDIOfflineTaskRequest} {@link V20210820.DryRunDIOfflineTaskResponse} */
  DryRunDIOfflineTask(data: V20210820.DryRunDIOfflineTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.DryRunDIOfflineTaskResponse>;
  /** 启用项目 {@link V20210820.EnableProjectRequest} {@link V20210820.EnableProjectResponse} */
  EnableProject(data: V20210820.EnableProjectRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.EnableProjectResponse>;
  /** 编排空间批量操作页面查找全部的文件夹 {@link V20210820.FindAllFolderRequest} {@link V20210820.FindAllFolderResponse} */
  FindAllFolder(data: V20210820.FindAllFolderRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.FindAllFolderResponse>;
  /** 任务运维-批量暂停任务 {@link V20210820.FreezeOpsTasksRequest} {@link V20210820.FreezeOpsTasksResponse} */
  FreezeOpsTasks(data: V20210820.FreezeOpsTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.FreezeOpsTasksResponse>;
  /** 暂停工作流下的所有任务 {@link V20210820.FreezeTasksByWorkflowIdsRequest} {@link V20210820.FreezeTasksByWorkflowIdsResponse} */
  FreezeTasksByWorkflowIds(data: V20210820.FreezeTasksByWorkflowIdsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.FreezeTasksByWorkflowIdsResponse>;
  /** 生成建hive表的sql {@link V20210820.GenHiveTableDDLSqlRequest} {@link V20210820.GenHiveTableDDLSqlResponse} */
  GenHiveTableDDLSql(data: V20210820.GenHiveTableDDLSqlRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GenHiveTableDDLSqlResponse>;
  /** 获取批量操作错误日志 {@link V20210820.GetBatchDetailErrorLogRequest} {@link V20210820.GetBatchDetailErrorLogResponse} */
  GetBatchDetailErrorLog(data: V20210820.GetBatchDetailErrorLogRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetBatchDetailErrorLogResponse>;
  /** 开发空间-获取cos token {@link V20210820.GetCosTokenRequest} {@link V20210820.GetCosTokenResponse} */
  GetCosToken(data: V20210820.GetCosTokenRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetCosTokenResponse>;
  /** 开发空间-获取数据开发脚本信息 {@link V20210820.GetFileInfoRequest} {@link V20210820.GetFileInfoResponse} */
  GetFileInfo(data: V20210820.GetFileInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetFileInfoResponse>;
  /** 查询调度实例日志内容 {@link V20210820.GetInstanceLogRequest} {@link V20210820.GetInstanceLogResponse} */
  GetInstanceLog(data: V20210820.GetInstanceLogRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetInstanceLogResponse>;
  /** 提取数据集成节点字段Schema {@link V20210820.GetIntegrationNodeColumnSchemaRequest} {@link V20210820.GetIntegrationNodeColumnSchemaResponse} */
  GetIntegrationNodeColumnSchema(data: V20210820.GetIntegrationNodeColumnSchemaRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetIntegrationNodeColumnSchemaResponse>;
  /** 获取异步任务状态 {@link V20210820.GetJobStatusRequest} {@link V20210820.GetJobStatusResponse} */
  GetJobStatus(data: V20210820.GetJobStatusRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetJobStatusResponse>;
  /** 获取离线任务实例列表(新) {@link V20210820.GetOfflineDIInstanceListRequest} {@link V20210820.GetOfflineDIInstanceListResponse} */
  GetOfflineDIInstanceList(data: V20210820.GetOfflineDIInstanceListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetOfflineDIInstanceListResponse>;
  /** 获取离线任务实例 {@link V20210820.GetOfflineInstanceListRequest} {@link V20210820.GetOfflineInstanceListResponse} */
  GetOfflineInstanceList(data: V20210820.GetOfflineInstanceListRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetOfflineInstanceListResponse>;
  /** 获取带分页的任务脚本 {@link V20210820.GetPaginationTaskScriptRequest} {@link V20210820.GetPaginationTaskScriptResponse} */
  GetPaginationTaskScript(data: V20210820.GetPaginationTaskScriptRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetPaginationTaskScriptResponse>;
  /** 获取调度实例详情 {@link V20210820.GetTaskInstanceRequest} {@link V20210820.GetTaskInstanceResponse} */
  GetTaskInstance(data: V20210820.GetTaskInstanceRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.GetTaskInstanceResponse>;
  /** 【资源管理】判断资源文件是否存在 {@link V20210820.JudgeResourceFileRequest} {@link V20210820.JudgeResourceFileResponse} */
  JudgeResourceFile(data: V20210820.JudgeResourceFileRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.JudgeResourceFileResponse>;
  /** 数据补录-按补录计划批量终止实例 {@link V20210820.KillOpsMakePlanInstancesRequest} {@link V20210820.KillOpsMakePlanInstancesResponse} */
  KillOpsMakePlanInstances(data: V20210820.KillOpsMakePlanInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.KillOpsMakePlanInstancesResponse>;
  /** 实例运维-批量终止l实例 {@link V20210820.KillScheduleInstancesRequest} {@link V20210820.KillScheduleInstancesResponse} */
  KillScheduleInstances(data: V20210820.KillScheduleInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.KillScheduleInstancesResponse>;
  /** 获取操作详情列表 {@link V20210820.ListBatchDetailRequest} {@link V20210820.ListBatchDetailResponse} */
  ListBatchDetail(data: V20210820.ListBatchDetailRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ListBatchDetailResponse>;
  /** 获取调度实例列表 {@link V20210820.ListInstancesRequest} {@link V20210820.ListInstancesResponse} */
  ListInstances(data: V20210820.ListInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ListInstancesResponse>;
  /** 锁定实时集成任务 {@link V20210820.LockIntegrationTaskRequest} {@link V20210820.LockIntegrationTaskResponse} */
  LockIntegrationTask(data: V20210820.LockIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.LockIntegrationTaskResponse>;
  /** 修改审批单状态 {@link V20210820.ModifyApproveStatusRequest} {@link V20210820.ModifyApproveStatusResponse} */
  ModifyApproveStatus(data: V20210820.ModifyApproveStatusRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyApproveStatusResponse>;
  /** 数据源管理-修改数据源 {@link V20210820.ModifyDataSourceRequest} {@link V20210820.ModifyDataSourceResponse} */
  ModifyDataSource(data: V20210820.ModifyDataSourceRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyDataSourceResponse>;
  /** 修改维度权重 {@link V20210820.ModifyDimensionWeightRequest} {@link V20210820.ModifyDimensionWeightResponse} */
  ModifyDimensionWeight(data: V20210820.ModifyDimensionWeightRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyDimensionWeightResponse>;
  /** 文件夹更新 {@link V20210820.ModifyDsFolderRequest} {@link V20210820.ModifyDsFolderResponse} */
  ModifyDsFolder(data: V20210820.ModifyDsFolderRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyDsFolderResponse>;
  /** 更新规则组执行策略 {@link V20210820.ModifyExecStrategyRequest} {@link V20210820.ModifyExecStrategyResponse} */
  ModifyExecStrategy(data: V20210820.ModifyExecStrategyRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyExecStrategyResponse>;
  /** 更新集成节点 {@link V20210820.ModifyIntegrationNodeRequest} {@link V20210820.ModifyIntegrationNodeResponse} */
  ModifyIntegrationNode(data: V20210820.ModifyIntegrationNodeRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyIntegrationNodeResponse>;
  /** 更新集成任务 {@link V20210820.ModifyIntegrationTaskRequest} {@link V20210820.ModifyIntegrationTaskResponse} */
  ModifyIntegrationTask(data: V20210820.ModifyIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyIntegrationTaskResponse>;
  /** 更新监控状态 {@link V20210820.ModifyMonitorStatusRequest} {@link V20210820.ModifyMonitorStatusResponse} */
  ModifyMonitorStatus(data: V20210820.ModifyMonitorStatusRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyMonitorStatusResponse>;
  /** 修改项目基础信息 {@link V20210820.ModifyProjectRequest} {@link V20210820.ModifyProjectResponse} */
  ModifyProject(data: V20210820.ModifyProjectRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyProjectResponse>;
  /** 更新质量规则接口 {@link V20210820.ModifyRuleRequest} {@link V20210820.ModifyRuleResponse} */
  ModifyRule(data: V20210820.ModifyRuleRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyRuleResponse>;
  /** 更新规则组订阅信息 {@link V20210820.ModifyRuleGroupSubscriptionRequest} {@link V20210820.ModifyRuleGroupSubscriptionResponse} */
  ModifyRuleGroupSubscription(data: V20210820.ModifyRuleGroupSubscriptionRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyRuleGroupSubscriptionResponse>;
  /** 编辑规则模板 {@link V20210820.ModifyRuleTemplateRequest} {@link V20210820.ModifyRuleTemplateResponse} */
  ModifyRuleTemplate(data: V20210820.ModifyRuleTemplateRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyRuleTemplateResponse>;
  /** 修改任务告警规则 {@link V20210820.ModifyTaskAlarmRegularRequest} {@link V20210820.ModifyTaskAlarmRegularResponse} */
  ModifyTaskAlarmRegular(data: V20210820.ModifyTaskAlarmRegularRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyTaskAlarmRegularResponse>;
  /** 更新任务（废弃） {@link V20210820.ModifyTaskInfoRequest} {@link V20210820.ModifyTaskInfoResponse} */
  ModifyTaskInfo(data: V20210820.ModifyTaskInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyTaskInfoResponse>;
  /** 更新任务信息 {@link V20210820.ModifyTaskInfoDsRequest} {@link V20210820.ModifyTaskInfoDsResponse} */
  ModifyTaskInfoDs(data: V20210820.ModifyTaskInfoDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyTaskInfoDsResponse>;
  /** 添加父任务依赖（废弃） {@link V20210820.ModifyTaskLinksRequest} {@link V20210820.ModifyTaskLinksResponse} */
  ModifyTaskLinks(data: V20210820.ModifyTaskLinksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyTaskLinksResponse>;
  /** 添加当前任务父任务依赖 {@link V20210820.ModifyTaskLinksDsRequest} {@link V20210820.ModifyTaskLinksDsResponse} */
  ModifyTaskLinksDs(data: V20210820.ModifyTaskLinksDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyTaskLinksDsResponse>;
  /** 重命名任务（任务编辑） {@link V20210820.ModifyTaskNameRequest} {@link V20210820.ModifyTaskNameResponse} */
  ModifyTaskName(data: V20210820.ModifyTaskNameRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyTaskNameResponse>;
  /** 修改任务脚本（废弃） {@link V20210820.ModifyTaskScriptRequest} {@link V20210820.ModifyTaskScriptResponse} */
  ModifyTaskScript(data: V20210820.ModifyTaskScriptRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyTaskScriptResponse>;
  /** 更新工作流信息（废弃） {@link V20210820.ModifyWorkflowInfoRequest} {@link V20210820.ModifyWorkflowInfoResponse} */
  ModifyWorkflowInfo(data: V20210820.ModifyWorkflowInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyWorkflowInfoResponse>;
  /** 更新工作流调度（废弃） {@link V20210820.ModifyWorkflowScheduleRequest} {@link V20210820.ModifyWorkflowScheduleResponse} */
  ModifyWorkflowSchedule(data: V20210820.ModifyWorkflowScheduleRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ModifyWorkflowScheduleResponse>;
  /** 移动任务到工作流文件夹 {@link V20210820.MoveTasksToFolderRequest} {@link V20210820.MoveTasksToFolderResponse} */
  MoveTasksToFolder(data: V20210820.MoveTasksToFolderRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.MoveTasksToFolderResponse>;
  /** 注册事件 {@link V20210820.RegisterDsEventRequest} {@link V20210820.RegisterDsEventResponse} */
  RegisterDsEvent(data: V20210820.RegisterDsEventRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RegisterDsEventResponse>;
  /** 注册事件监听者 {@link V20210820.RegisterDsEventListenerRequest} {@link V20210820.RegisterDsEventListenerResponse} */
  RegisterDsEventListener(data: V20210820.RegisterDsEventListenerRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RegisterDsEventListenerResponse>;
  /** 注册事件（废弃） {@link V20210820.RegisterEventRequest} {@link V20210820.RegisterEventResponse} */
  RegisterEvent(data: V20210820.RegisterEventRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RegisterEventResponse>;
  /** 注册事件监听器（废弃） {@link V20210820.RegisterEventListenerRequest} {@link V20210820.RegisterEventListenerResponse} */
  RegisterEventListener(data: V20210820.RegisterEventListenerRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RegisterEventListenerResponse>;
  /** 移除database元数据 {@link V20210820.RemoveDatabaseRequest} {@link V20210820.RemoveDatabaseResponse} */
  RemoveDatabase(data: V20210820.RemoveDatabaseRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RemoveDatabaseResponse>;
  /** 移除schema元数据 {@link V20210820.RemoveSchemaRequest} {@link V20210820.RemoveSchemaResponse} */
  RemoveSchema(data: V20210820.RemoveSchemaRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RemoveSchemaResponse>;
  /** 移除table元数据 {@link V20210820.RemoveTableRequest} {@link V20210820.RemoveTableResponse} */
  RemoveTable(data: V20210820.RemoveTableRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RemoveTableResponse>;
  /** 删除编排空间工作流 {@link V20210820.RemoveWorkflowDsRequest} {@link V20210820.RemoveWorkflowDsResponse} */
  RemoveWorkflowDs(data: V20210820.RemoveWorkflowDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RemoveWorkflowDsResponse>;
  /** 批量更新工作流下任务责任人 {@link V20210820.RenewWorkflowOwnerDsRequest} {@link V20210820.RenewWorkflowOwnerDsResponse} */
  RenewWorkflowOwnerDs(data: V20210820.RenewWorkflowOwnerDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RenewWorkflowOwnerDsResponse>;
  /** 更新工作流下任务调度信息 {@link V20210820.RenewWorkflowSchedulerInfoDsRequest} {@link V20210820.RenewWorkflowSchedulerInfoDsResponse} */
  RenewWorkflowSchedulerInfoDs(data: V20210820.RenewWorkflowSchedulerInfoDsRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RenewWorkflowSchedulerInfoDsResponse>;
  /** 上报database元数据 {@link V20210820.ReportDatabaseRequest} {@link V20210820.ReportDatabaseResponse} */
  ReportDatabase(data: V20210820.ReportDatabaseRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ReportDatabaseResponse>;
  /** 上报schema元数据 {@link V20210820.ReportSchemaRequest} {@link V20210820.ReportSchemaResponse} */
  ReportSchema(data: V20210820.ReportSchemaRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ReportSchemaResponse>;
  /** 上报table元数据 {@link V20210820.ReportTableRequest} {@link V20210820.ReportTableResponse} */
  ReportTable(data: V20210820.ReportTableRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ReportTableResponse>;
  /** 任务血缘上报接口 {@link V20210820.ReportTaskLineageRequest} {@link V20210820.ReportTaskLineageResponse} */
  ReportTaskLineage(data: V20210820.ReportTaskLineageRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ReportTaskLineageResponse>;
  /** 继续实时集成任务 {@link V20210820.ResumeIntegrationTaskRequest} {@link V20210820.ResumeIntegrationTaskResponse} */
  ResumeIntegrationTask(data: V20210820.ResumeIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.ResumeIntegrationTaskResponse>;
  /** 抢占锁定集成任务 {@link V20210820.RobAndLockIntegrationTaskRequest} {@link V20210820.RobAndLockIntegrationTaskResponse} */
  RobAndLockIntegrationTask(data: V20210820.RobAndLockIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RobAndLockIntegrationTaskResponse>;
  /** 实例运维-实例批量置成功1 {@link V20210820.RunForceSucScheduleInstancesRequest} {@link V20210820.RunForceSucScheduleInstancesResponse} */
  RunForceSucScheduleInstances(data: V20210820.RunForceSucScheduleInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RunForceSucScheduleInstancesResponse>;
  /** 任务运维-实例批量重跑 {@link V20210820.RunRerunScheduleInstancesRequest} {@link V20210820.RunRerunScheduleInstancesResponse} */
  RunRerunScheduleInstances(data: V20210820.RunRerunScheduleInstancesRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RunRerunScheduleInstancesResponse>;
  /** 批量启动工作流 {@link V20210820.RunTasksByMultiWorkflowRequest} {@link V20210820.RunTasksByMultiWorkflowResponse} */
  RunTasksByMultiWorkflow(data: V20210820.RunTasksByMultiWorkflowRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.RunTasksByMultiWorkflowResponse>;
  /** 保存用户自定义函数 {@link V20210820.SaveCustomFunctionRequest} {@link V20210820.SaveCustomFunctionResponse} */
  SaveCustomFunction(data: V20210820.SaveCustomFunctionRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.SaveCustomFunctionResponse>;
  /** 设置任务告警，新建（更新）告警信息 {@link V20210820.SetTaskAlarmNewRequest} {@link V20210820.SetTaskAlarmNewResponse} */
  SetTaskAlarmNew(data: V20210820.SetTaskAlarmNewRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.SetTaskAlarmNewResponse>;
  /** 启动实时集成任务 {@link V20210820.StartIntegrationTaskRequest} {@link V20210820.StartIntegrationTaskResponse} */
  StartIntegrationTask(data: V20210820.StartIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.StartIntegrationTaskResponse>;
  /** 停止实时集成任务 {@link V20210820.StopIntegrationTaskRequest} {@link V20210820.StopIntegrationTaskResponse} */
  StopIntegrationTask(data: V20210820.StopIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.StopIntegrationTaskResponse>;
  /** 提交自定义函数 {@link V20210820.SubmitCustomFunctionRequest} {@link V20210820.SubmitCustomFunctionResponse} */
  SubmitCustomFunction(data: V20210820.SubmitCustomFunctionRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.SubmitCustomFunctionResponse>;
  /** 提交SQL任务 {@link V20210820.SubmitSqlTaskRequest} {@link V20210820.SubmitSqlTaskResponse} */
  SubmitSqlTask(data: V20210820.SubmitSqlTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.SubmitSqlTaskResponse>;
  /** 提交任务（废弃） {@link V20210820.SubmitTaskRequest} {@link V20210820.SubmitTaskResponse} */
  SubmitTask(data: V20210820.SubmitTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.SubmitTaskResponse>;
  /** 提交工作流测试运行任务 {@link V20210820.SubmitTaskTestRunRequest} {@link V20210820.SubmitTaskTestRunResponse} */
  SubmitTaskTestRun(data: V20210820.SubmitTaskTestRunRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.SubmitTaskTestRunResponse>;
  /** 提交工作流（废弃） {@link V20210820.SubmitWorkflowRequest} {@link V20210820.SubmitWorkflowResponse} */
  SubmitWorkflow(data: V20210820.SubmitWorkflowRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.SubmitWorkflowResponse>;
  /** 暂停实时集成任务 {@link V20210820.SuspendIntegrationTaskRequest} {@link V20210820.SuspendIntegrationTaskResponse} */
  SuspendIntegrationTask(data: V20210820.SuspendIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.SuspendIntegrationTaskResponse>;
  /** 查询实时任务日志接口 {@link V20210820.TaskLogRequest} {@link V20210820.TaskLogResponse} */
  TaskLog(data: V20210820.TaskLogRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.TaskLogResponse>;
  /** 触发事件 {@link V20210820.TriggerDsEventRequest} {@link V20210820.TriggerDsEventResponse} */
  TriggerDsEvent(data: V20210820.TriggerDsEventRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.TriggerDsEventResponse>;
  /** 触发事件生成事件实例（废弃） {@link V20210820.TriggerEventRequest} {@link V20210820.TriggerEventResponse} */
  TriggerEvent(data: V20210820.TriggerEventRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.TriggerEventResponse>;
  /** 手动任务触发运行 {@link V20210820.TriggerManualTasksRequest} {@link V20210820.TriggerManualTasksResponse} */
  TriggerManualTasks(data: V20210820.TriggerManualTasksRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.TriggerManualTasksResponse>;
  /** 执行资源组-资源包解除绑定项目 {@link V20210820.UnboundProjectExecutorResourceRequest} {@link V20210820.UnboundProjectExecutorResourceResponse} */
  UnboundProjectExecutorResource(data: V20210820.UnboundProjectExecutorResourceRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.UnboundProjectExecutorResourceResponse>;
  /** 解锁实时集成任务 {@link V20210820.UnlockIntegrationTaskRequest} {@link V20210820.UnlockIntegrationTaskResponse} */
  UnlockIntegrationTask(data: V20210820.UnlockIntegrationTaskRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.UnlockIntegrationTaskResponse>;
  /** 更新代码模版 {@link V20210820.UpdateCodeTemplateRequest} {@link V20210820.UpdateCodeTemplateResponse} */
  UpdateCodeTemplate(data: V20210820.UpdateCodeTemplateRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.UpdateCodeTemplateResponse>;
  /** （仅公有云）数语向Wedata注册，更新相关信息 {@link V20210820.UpdateDataModelRegistryInfoRequest} {@link V20210820.UpdateDataModelRegistryInfoResponse} */
  UpdateDataModelRegistryInfo(data: V20210820.UpdateDataModelRegistryInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.UpdateDataModelRegistryInfoResponse>;
  /** 修改项目用户角色 {@link V20210820.UpdateProjectUserRoleRequest} {@link V20210820.UpdateProjectUserRoleResponse} */
  UpdateProjectUserRole(data: V20210820.UpdateProjectUserRoleRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.UpdateProjectUserRoleResponse>;
  /** 更新工作流信息【整合】 {@link V20210820.UpdateWorkflowInfoRequest} {@link V20210820.UpdateWorkflowInfoResponse} */
  UpdateWorkflowInfo(data: V20210820.UpdateWorkflowInfoRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.UpdateWorkflowInfoResponse>;
  /** 修改工作流责任人（废弃） {@link V20210820.UpdateWorkflowOwnerRequest} {@link V20210820.UpdateWorkflowOwnerResponse} */
  UpdateWorkflowOwner(data: V20210820.UpdateWorkflowOwnerRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.UpdateWorkflowOwnerResponse>;
  /** 开发空间-保存任务信息 {@link V20210820.UploadContentRequest} {@link V20210820.UploadContentResponse} */
  UploadContent(data: V20210820.UploadContentRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.UploadContentResponse>;
  /** 【资源管理】上传资源 {@link V20210820.UploadResourceRequest} {@link V20210820.UploadResourceResponse} */
  UploadResource(data: V20210820.UploadResourceRequest, config: AxiosRequestConfig & V20210820.VersionHeader): AxiosPromise<V20210820.UploadResourceResponse>;
}

export declare type Versions = ["2025-08-06", "2021-08-20"];

export default Wedata;
