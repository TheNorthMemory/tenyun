/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 告警事件详情 */
declare interface AlarmEventInfo {
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
  /** 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停 */
  AlarmIndicator: number;
  /** 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http） */
  AlarmWay: number;
  /** 告警接收人Id，多个用逗号隔开 */
  AlarmRecipientId: string;
  /** 项目ID */
  ProjectId: string;
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
  /** 消息ID */
  MessageId?: string | null;
  /** 阈值计算算子，1 : 大于 2 ：小于 */
  Operator?: number | null;
}

/** 任务告警信息 */
declare interface AlarmInfo {
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

/** 告警接收人详情 */
declare interface AlarmReceiverInfo {
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
}

/** 批量操作的结果返回 */
declare interface BatchOperateResult {
  /** 批量操作成功数 */
  SuccessCount: number;
  /** 批量操作失败数 */
  FailedCount: number;
  /** 批量操作的总数 */
  TotalCount: number;
}

/** 批量操作结果 */
declare interface BatchResult {
  /** 正在运行的任务数 */
  Running: number;
  /** 执行成功的任务数 */
  Success: number;
  /** 执行失败的任务数 */
  Failed: number;
  /** 总任务数 */
  Total: number;
}

/** 操作结果 */
declare interface BatchReturn {
  /** 执行结果 */
  Result: boolean;
  /** 执行情况备注 */
  ErrorDesc: string | null;
  /** 执行情况id */
  ErrorId: string | null;
}

/** 实时任务同步速度 字节/s */
declare interface BytesSpeed {
  /** 节点类型 */
  NodeType: string | null;
  /** 节点名称 */
  NodeName: string | null;
  /** 速度值列表 */
  Values: SpeedValue[] | null;
}

/** 画布所需的信息 */
declare interface CanvasInfo {
  /** 画布任务信息 */
  TasksList: TaskCanvasInfo[];
  /** 画布任务链接信息 */
  LinksList: TaskLinkInfo[];
}

/** 内容详情 */
declare interface CommonContent {
  /** 详情内容 */
  Content: string | null;
}

/** Id包装对象 */
declare interface CommonId {
  /** Id值 */
  Id: string | null;
}

/** 数据源对象 */
declare interface DataSourceInfo {
  /** 若数据源列表为绑定数据库，则为db名称 */
  DatabaseName: string | null;
  /** 数据源描述信息 */
  Description: string | null;
  /** 数据源ID */
  ID: number | null;
  /** 数据源引擎的实例ID，如CDB实例ID */
  Instance: string | null;
  /** 数据源名称，在相同SpaceName下，数据源名称不能为空 */
  Name: string | null;
  /** 数据源引擎所属区域 */
  Region: string | null;
  /** 数据源类型:枚举值 */
  Type: string | null;
  /** 数据源所属的集群id */
  ClusterId: string | null;
  /** 应用ID AppId */
  AppId: number | null;
  /** 业务侧数据源的配置信息扩展 */
  BizParams: string | null;
  /** 数据源类别：绑定引擎、绑定数据库 */
  Category: string | null;
  /** 数据源展示名，为了可视化查看 */
  Display: string | null;
  /** 数据源责任人账号ID */
  OwnerAccount: string | null;
  /** 数据源的配置信息，以JSON KV存储，根据每个数据源类型不同，而KV存储信息不同 */
  Params: string | null;
  /** 数据源数据源的可见性，1为可见、0为不可见。默认为1 */
  Status: number | null;
  /** 数据源责任人账号名称 */
  OwnerAccountName: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 归属项目ID */
  OwnerProjectId: string | null;
  /** 归属项目Name */
  OwnerProjectName: string | null;
  /** 归属项目标识 */
  OwnerProjectIdent: string | null;
  /** 授权项目 */
  AuthorityProjectName: string | null;
  /** 授权用户 */
  AuthorityUserName: string | null;
  /** 是否有编辑权限 */
  Edit: boolean | null;
  /** 是否有授权权限 */
  Author: boolean | null;
  /** 是否有转交权限 */
  Deliver: boolean | null;
  /** 数据源状态 */
  DataSourceStatus: string | null;
  /** 时间 */
  CreateTime: number | null;
  /** Params json字符串 */
  ParamsString: string | null;
  /** BizParams json字符串 */
  BizParamsString: string | null;
}

/** 查询数据源分页列表 */
declare interface DataSourceInfoPage {
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

/** 数据源对象 */
declare interface DatasourceBaseInfo {
  /** 若数据源列表为绑定数据库，则为db名称 */
  DatabaseNames: string[] | null;
  /** 数据源描述信息 */
  Description: string | null;
  /** 数据源ID */
  ID: number;
  /** 数据源引擎的实例ID，如CDB实例ID */
  Instance: string | null;
  /** 数据源名称，在相同SpaceName下，数据源名称不能为空 */
  Name: string;
  /** 数据源引擎所属区域 */
  Region: string | null;
  /** 数据源类型:枚举值 */
  Type: string | null;
  /** 数据源所属的集群id */
  ClusterId: string | null;
}

/** 依赖配置 */
declare interface DependencyConfig {
  /** 仅五种周期运行依赖配置： HOUR,DAY,WEEK,MONTH,YEAR,CRONTAB,MINUTE */
  DependConfType: string;
  /** 依赖配置从属周期类型，CURRENT_HOUR，PREVIOUS_HOUR，CURRENT_DAY，PREVIOUS_DAY，PREVIOUS_WEEK，PREVIOUS_FRIDAY，PREVIOUS_WEEKEND，CURRENT_MONTH，PREVIOUS_MONTH，PREVIOUS_END_OF_MONTH * PREVIOUS_BEGIN_OF_MONTH，ALL_MONTH_OF_YEAR，ALL_DAY_OF_YEAR，CURRENT_YEAR，CURRENT，CURRENT_MINUTE，PREVIOUS_MINUTE_CYCLE，PREVIOUS_HOUR_CYCLE */
  SubordinateCyclicType: string;
  /** WAITING，等待（默认策略）EXECUTING:执行 */
  DependencyStrategy: string;
  /** 父任务信息 */
  ParentTask?: TaskInnerInfo | null;
  /** 子任务信息 */
  SonTask?: TaskInnerInfo | null;
}

/** 文件夹分页信息 */
declare interface DescribeFolderListData {
  /** 文件夹信息列表 */
  Items: Folder[];
  /** 总条数 */
  TotalCount: number;
  /** 页号 */
  PageNumber: number;
  /** 页大小 */
  PageSize: number;
}

/** 文件夹分页信息 */
declare interface DescribeFolderWorkflowListData {
  /** 工作流信息列表 */
  Items: Workflow[];
  /** 总条数 */
  TotalCount: number;
  /** 页号 */
  PageNumber: number;
  /** 页大小 */
  PageSize: number;
}

/** 查询任务实例列表 */
declare interface DescribeTaskInstancesData {
  /** 实例列表 */
  Items: TaskInstanceInfo[];
  /** 总条数 */
  TotalCount: number;
  /** 页号 */
  PageNumber: number;
  /** 页大小 */
  PageSize: number;
}

/** 通用过滤器 */
declare interface Filter {
  /** 过滤字段名称 */
  Name?: string;
  /** 过滤值列表 */
  Values?: string[];
}

/** 文件夹信息 */
declare interface Folder {
  /** 文件ID */
  Id: string;
  /** 文件夹名称 */
  Name: string;
  /** 创建时间 */
  CreateTime: string;
  /** 所属项目id */
  ProjectId: string;
  /** 更新时间 */
  UpdateTime: string;
}

/** 函数资源信息 */
declare interface FunctionResource {
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
declare interface FunctionTypeOrKind {
  /** 无 */
  Name: string;
  /** 无 */
  ZhName: string;
  /** 无 */
  EnName: string;
}

/** 函数提交版本信息 */
declare interface FunctionVersion {
  /** 版本号：V0 V1 V2 */
  Tag: string;
  /** 提交人 ID */
  UserId: string;
  /** 变更类型：ADD、MODIFY */
  Type: string;
  /** 备注 */
  Comment: string;
  /** 提交时间: UTC 秒数 */
  Timestamp: string;
  /** 提交人名称 */
  UserName: string | null;
  /** 版本内容：json string 格式 */
  Content: string | null;
}

/** Spark SQL配置参数 */
declare interface GeneralTaskParam {
  /** 通用任务参数类型,例：SPARK_SQL */
  Type: string;
  /** 通用任务参数内容,直接作用于任务的参数。不同参数用;分割 */
  Value: string;
}

/** 采集器详细信息 */
declare interface InLongAgentDetail {
  /** Agent ID */
  AgentId: string;
  /** Agent Name */
  AgentName: string;
  /** Agent状态(running运行中，initializing 操作中，failed心跳异常) */
  Status: string;
  /** Agent状态描述 */
  StatusDesc: string | null;
  /** 集群类型，1：TKE Agent，2：BOSS SDK，默认：1 */
  AgentType: number;
  /** 采集来源 */
  Source: string;
  /** VPC */
  VpcId: string;
  /** 集成资源组Id */
  ExecutorGroupId: string;
  /** 集成资源组名称 */
  ExecutorGroupName: string;
  /** 关联任务数 */
  TaskCount: number;
}

/** 采集器关联的集成任务 */
declare interface InLongAgentTask {
  /** 集成任务ID */
  TaskId: string;
  /** 集成任务名称 */
  TaskName: string;
  /** 集成任务状态 */
  TaskStatus: string;
}

/** TKE集群信息详情 */
declare interface InLongTkeDetail {
  /** 集群Id */
  ClusterId: string;
  /** 集群名称 */
  ClusterName: string;
  /** TKE集群状态 (Running 运行中 Creating 创建中 Idling 闲置中 Abnormal 异常) */
  Status: string;
  /** 是否安装Agent，true: 是，false: 否 */
  HasAgent: boolean;
  /** 采集器ID */
  AgentId: string | null;
  /** VPC ID */
  VpcId: string;
  /** TKE集群区域ID */
  TkeRegion: string;
  /** 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER */
  ClusterType: string;
}

/** 实例请求实体 */
declare interface InstanceInfo {
  /** 任务ID */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
}

/** 实例日志实体 */
declare interface InstanceLog {
  /** 任务ID */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
  /** 尝试运行次数 */
  Tries: string | null;
  /** 日志更新时间 */
  LastUpdate: string | null;
  /** 日志所在节点 */
  BrokerIp: string;
  /** 文件名 含全路径 */
  OriginFileName: string;
  /** 日志创建时间 */
  CreateTime: string;
  /** 实例日志类型, run: 运行; kill: 终止 */
  InstanceLogType: string;
  /** 运行耗时 */
  CostTime: number;
}

/** 查询实时任务实例当前的节点信息 */
declare interface InstanceNodeInfo {
  /** 读取节点SOURCE 写入节点SINK */
  NodeType: string | null;
  /** 节点id */
  NodeId: string | null;
  /** 节点名称 */
  NodeName: string | null;
}

/** 离线任务实例读取节点的运行指标 */
declare interface InstanceReportReadNode {
  /** 节点名称 */
  NodeName: string;
  /** 数据来源 */
  DataSource: string;
  /** 总条数 */
  TotalReadRecords: number;
  /** 总字节数 */
  TotalReadBytes: number;
  /** 速度（条/秒） */
  RecordSpeed: number;
  /** 吞吐（Byte/秒） */
  ByteSpeed: number;
  /** 脏数据条数 */
  TotalErrorRecords: number;
}

/** 离线任务实例运行指标概览 */
declare interface InstanceReportSummary {
  /** 总读取记录数 */
  TotalReadRecords: number;
  /** 总读取字节数 */
  TotalReadBytes: number;
  /** 总写入记录数 */
  TotalWriteRecords: number;
  /** 总写入字节数 */
  TotalWriteBytes: number;
  /** 速率（条/秒） */
  RecordSpeed: number;
  /** 流量（Byte/秒） */
  ByteSpeed: number;
  /** 脏数据记录数 */
  TotalErrorRecords: number;
  /** 脏数据字节数 */
  TotalErrorBytes: number;
  /** 任务运行总时长 */
  TotalRunDuration: number;
  /** 任务开始运行时间 */
  BeginRunTime: string;
  /** 任务结束运行时间 */
  EndRunTime: string;
}

/** 离线任务实例写入节点的运行指标 */
declare interface InstanceReportWriteNode {
  /** 节点名称 */
  NodeName: string;
  /** 数据来源 */
  DataSource: string;
  /** 总条数 */
  TotalWriteRecords: number;
  /** 总字节数 */
  TotalWriteBytes: number;
  /** 速度（条/秒） */
  RecordSpeed: number;
  /** 吞吐（Byte/秒） */
  ByteSpeed: number;
  /** 脏数据条数 */
  TotalErrorRecords: number;
}

/** 集成节点详情 */
declare interface IntegrationNodeDetail {
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

/** 集成节点 */
declare interface IntegrationNodeInfo {
  /** 集成节点id */
  Id?: string | null;
  /** 集成节点所属任务id */
  TaskId?: string;
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
  /** 应用id */
  AppId?: string;
  /** 项目id */
  ProjectId?: string;
  /** 创建人uin */
  CreatorUin?: string | null;
  /** 操作人uin */
  OperatorUin?: string | null;
  /** owner uin */
  OwnerUin?: string;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
}

/** 集成节点映射 */
declare interface IntegrationNodeMapping {
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
declare interface IntegrationNodeSchema {
  /** schema id */
  Id: string;
  /** schema名称 */
  Name: string;
  /** schema类型 */
  Type: string;
  /** schema值 */
  Value?: string | null;
  /** schema拓展属性 */
  Properties?: RecordField[] | null;
}

/** 集成节点schema映射 */
declare interface IntegrationNodeSchemaMapping {
  /** 源schema id */
  SourceSchemaId: string;
  /** 目标schema id */
  SinkSchemaId: string;
}

/** 数据集成大屏趋势图统计结果 */
declare interface IntegrationStatisticsTrendResult {
  /** 统计属性名称 */
  StatisticName: string[] | null;
  /** 统计值 */
  StatisticValue: number[] | null;
  /** 统计项目 */
  StatisticType: string | null;
}

/** 集成任务 */
declare interface IntegrationTaskInfo {
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
  /** 任务调度id(oceanus or us等作业id) */
  ScheduleTaskId?: string | null;
  /** 任务组id */
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
  /** 任务状态1.初始化,2.操作中,3.运行中,4.暂停,5.任务停止中,6.停止,7.执行失败,8.已删除,9.已锁定,10.配置过期,11.提交中,12.提交成功,13.提交失败 */
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
  /** 任务模式：1.画布模式，2.flink jar */
  TaskMode?: string | null;
  /** 责任人 */
  Incharge?: string | null;
  /** 离线新增参数 */
  OfflineTaskAddEntity?: OfflineTaskAddParam | null;
  /** group name */
  ExecutorGroupName?: string | null;
  /** url */
  InLongManagerUrl?: string | null;
  /** stream id */
  InLongStreamId?: string | null;
  /** version */
  InLongManagerVersion?: string | null;
}

/** 标签类型 */
declare interface Label {
  /** 类型值。 */
  Value: string;
  /** 类型名称。 */
  Text: string;
}

/** 实时任务日志内容 */
declare interface LogContent {
  /** 日志时间戳，单位毫秒 */
  Time: number | null;
  /** 日志包id */
  PkgId: string | null;
  /** 日志内容 */
  Log: string;
}

/** 日志内容实体 */
declare interface LogContentInfo {
  /** 日志内容 */
  Log: string | null;
  /** 日志组Id */
  PkgId: string | null;
  /** 日志Id */
  PkgLogId: string | null;
  /** 时间 */
  Time: number | null;
  /** 日志所属的容器名 */
  ContainerName: string | null;
}

/** 命名空间 */
declare interface Namespace {
  /** 名称 */
  Name: string;
  /** 当前状态 */
  Status: string;
  /** 创建时间 */
  CreatedAt: string;
}

/** 离线实例 */
declare interface OfflineInstance {
  /** 创建账号 */
  CreateUin: string | null;
  /** 操作账号 */
  OperatorUin: string | null;
  /** 主账号 */
  OwnerUin: string | null;
  /** 账号 */
  AppId: string | null;
  /** 项目Id */
  WorkspaceId: string | null;
  /** 任务Id */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
  /** 下发时间 */
  IssueId: string;
  /** 资源组id */
  InlongTaskId: string | null;
  /** 资源组 */
  ResourceGroup: string | null;
  /** 实例类型 */
  TaskRunType: number;
  /** 实例状态 */
  State: string;
  /** 开始时间 */
  StartTime: string | null;
  /** 结束时间 */
  EndTime: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 最后更新时间 */
  UpdateTime: string;
  /** 唯一key */
  InstanceKey: string | null;
}

/** 离线任务新增参数 */
declare interface OfflineTaskAddParam {
  /** 名称 */
  WorkflowName: string;
  /** 依赖 */
  DependencyWorkflow: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 周期 */
  CycleType: number;
  /** 周期间隔 */
  CycleStep: number;
  /** 延迟时间 */
  DelayTime: number;
  /** crontab */
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
  /** 周任务：1是周天，2是周1，7是周6 。月任务：如具体1，3号则写 "1,3"，指定月末不可和具体号数一起输入，仅能为 "L" */
  TaskAction?: string | null;
  /** 调度执行结束时间 */
  ExecutionEndTime?: string | null;
  /** 调度执行开始时间 */
  ExecutionStartTime?: string | null;
}

/** 操作结果 */
declare interface OperateResult {
  /** 操作结果；true表示成功；false表示失败 */
  Result: boolean;
  /** 错误编号 */
  ErrorId: string | null;
  /** 操作信息 */
  ErrorDesc: string | null;
}

/** 通用排序字段 */
declare interface OrderField {
  /** 排序字段名称 */
  Name: string;
  /** 排序方向：ASC|DESC */
  Direction: string;
}

/** 包含层级信息的函数 */
declare interface OrganizationalFunction {
  /** 名称 */
  Name: string;
  /** 展示名称 */
  DisplayName: string;
  /** 层级路径 */
  LayerPath: string;
  /** 上级层级路径 */
  ParentLayerPath: string;
  /** 函数类型 */
  Type: string | null;
  /** 函数分类：窗口函数、聚合函数、日期函数...... */
  Kind: string | null;
  /** 函数种类：系统函数、自定义函数 */
  Category: string | null;
  /** 函数状态 */
  Status: string | null;
  /** 函数说明 */
  Description: string | null;
  /** 函数用法 */
  Usage: string | null;
  /** 函数参数说明 */
  ParamDesc: string | null;
  /** 函数返回值说明 */
  ReturnDesc: string | null;
  /** 函数示例 */
  Example: string | null;
  /** 集群实例引擎 ID */
  ClusterIdentifier: string | null;
  /** 函数 ID */
  FuncId: string | null;
  /** 函数类名 */
  ClassName: string | null;
  /** 函数资源列表 */
  ResourceList: FunctionVersion[] | null;
  /** 操作人 ID 列表 */
  OperatorUserIds: number[] | null;
  /** 公有云 Owner ID 列表 */
  OwnerUserIds: number[] | null;
  /** 数据库名称 */
  DbName: string | null;
  /** 提交失败错误信息 */
  SubmitErrorMsg: string | null;
}

/** 参数参数 */
declare interface ParamInfo {
  /** 参数名 */
  ParamKey: string;
  /** 参数值 */
  ParamValue: string;
}

/** 实时任务实例当前的节点信息 */
declare interface RealTimeTaskInstanceNodeInfo {
  /** 任务名 */
  TaskName: string | null;
  /** 任务id */
  TaskId: string | null;
  /** 实时任务实例节点信息列表 */
  InstanceNodeInfoList: InstanceNodeInfo[] | null;
}

/** 通用记录字段 */
declare interface RecordField {
  /** 字段名称 */
  Name: string;
  /** 字段值 */
  Value: string;
}

/** 实时任务同步速度 条/s */
declare interface RecordsSpeed {
  /** 节点类型 */
  NodeType: string | null;
  /** 节点名称 */
  NodeName: string | null;
  /** 速度值列表 */
  Values: SpeedValue[] | null;
}

/** 资源管理目录树节点 */
declare interface ResourcePathTree {
  /** 资源名字 */
  Name: string | null;
  /** 是否为叶子节点 */
  IsLeaf: boolean | null;
  /** 资源ID */
  ResourceId: string | null;
  /** 本地路径 */
  LocalPath: string | null;
  /** 远程路径 */
  RemotePath: string | null;
  /** 文件类型 */
  FileExtensionType: string | null;
  /** 文件大小 */
  Size: number | null;
  /** 文件MD5值 */
  Md5Value: string | null;
  /** 文件拥有者名字 */
  OwnerName: string | null;
  /** 更新人 */
  UpdateUser: string | null;
  /** 文件更新人uin */
  UpdateUserId: string | null;
  /** 创建时间 */
  CreateTime: number | null;
  /** 更新时间 */
  UpdateTime: number | null;
  /** Cos存储桶名 */
  CosBucket: string | null;
  /** Cos地域 */
  CosRegion: string | null;
  /** 额外信息 */
  ExtraInfo: string | null;
}

/** 抢锁状态：是否可以抢锁和当前持锁人 */
declare interface RobLockState {
  /** 是否可以抢锁 */
  IsRob: boolean;
  /** 当前持锁人 */
  Locker: string;
}

/** 集成离线任务实例信息 */
declare interface SchedulerTaskInstanceInfo {
  /** 任务id */
  TaskId: string;
  /** 实例运行时间 */
  CurRunDate: string;
}

/** 元数据字段信息 */
declare interface SchemaDetail {
  /** 列 */
  ColumnKey: string | null;
  /** 描述 */
  Description: string | null;
  /** 名称 */
  Name: string | null;
  /** 类型 */
  Type: string | null;
}

/** 查询实例条件 */
declare interface SearchCondition {
  /** 查询框架，必选 */
  Instance: SearchConditionInstance;
  /** 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选 */
  Keyword?: string;
  /** 排序顺序（asc，desc） */
  Sort?: string;
  /** 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间） */
  SortCol?: string;
}

/** 查询框架 */
declare interface SearchConditionInstance {
  /** 执行空间 "DRY_RUN" */
  ExecutionSpace: number;
  /** 产品名称，可选 */
  ProductName?: number | null;
  /** 资源组 */
  ResourceGroup?: number | null;
}

/** 搜索条件 */
declare interface SearchConditionInstanceNew {
  /** 执行空间 "DRY_RUN" */
  ExecutionSpace: string;
  /** 产品名称，可选 */
  ProductName?: string;
  /** 资源组 */
  ResourceGroup?: string;
}

/** 查询实例条件(新) */
declare interface SearchConditionNew {
  /** 查询框架，必选 */
  Instance: SearchConditionInstanceNew;
  /** 查询关键字（任务Id精确匹配，任务名称模糊匹配），可选 */
  Keyword?: string;
  /** 排序顺序（asc，desc） */
  Sort?: string;
  /** 排序列（costTime 运行耗时，startTime 开始时间，state 实例状态，curRunDate 数据时间） */
  SortCol?: string;
}

/** 简单Task信息 */
declare interface SimpleTaskInfo {
  /** 任务ID */
  TaskId: string;
  /** 任务名 */
  TaskName: string;
}

/** 速度值对象 */
declare interface SpeedValue {
  /** 带毫秒的时间戳 */
  Time: number | null;
  /** 无 */
  Speed: number | null;
}

/** 提交工作流实体 */
declare interface SubmitWorkflow {
  /** 被提交的任务id集合 */
  TaskIds: string[] | null;
  /** 执行结果 */
  Result: boolean;
  /** 执行情况备注 */
  ErrorDesc: string | null;
  /** 执行情况id */
  ErrorId: string | null;
}

/** 元数据表详细信息 */
declare interface TableInfo {
  /** 表Id */
  TableId: string | null;
  /** 表名称 */
  TableName: string | null;
}

/** 任务告警信息 */
declare interface TaskAlarmInfo {
  /** 任务ID */
  TaskId: string;
  /** 规则名称 */
  RegularName: string;
  /** 规则状态(0表示关闭，1表示打开) */
  RegularStatus: number;
  /** 告警级别(0表示普通，1表示重要，2表示紧急) */
  AlarmLevel: number;
  /** 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停，4写入速度，5读取速度，6读取吞吐，7写入吞吐, 8脏数据字节数，9脏数据条数 */
  AlarmIndicator: number;
  /** 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http） */
  AlarmWay: string;
  /** 告警接收人ID，多个用逗号隔开 */
  AlarmRecipientId: string;
  /** 任务类型(201表示实时，202表示离线) */
  TaskType: number;
  /** 告警接收人昵称，多个用逗号隔开 */
  AlarmRecipientName: string | null;
  /** 主键ID */
  Id?: string | null;
  /** 规则ID */
  RegularId?: string;
  /** 指标阈值(1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败) */
  TriggerType?: number | null;
  /** 预计的超时时间(分钟级别) */
  EstimatedTime?: number | null;
  /** 项目ID */
  ProjectId?: string | null;
  /** 创建人 */
  Creater?: string | null;
  /** 告警指标描述 */
  AlarmIndicatorDesc?: string | null;
  /** 实时任务告警需要的参数，1是大于2是小于 */
  Operator?: number | null;
  /** 节点id，多个逗号分隔 */
  NodeId?: string | null;
  /** 节点名称，多个逗号分隔 */
  NodeName?: string | null;
}

/** 任务信息 */
declare interface TaskCanvasInfo {
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
}

/** 任务扩展信息 */
declare interface TaskExtInfo {
  /** 键 */
  Key?: string;
  /** 值 */
  Value?: string;
}

/** 任务信息数据 */
declare interface TaskInfoData {
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
  /** 项目id */
  ProjectId: string | null;
  /** 文件夹名称 */
  FolderName: string | null;
  /** 文件夹id */
  FolderId: string | null;
  /** 负责人 */
  InCharge: string | null;
  /** 跨工作流虚拟任务标识；true标识跨工作流任务；false标识本工作流任务 */
  VirtualFlag: boolean | null;
  /** 延时实例生成时间(延时调度)，转换为分钟 */
  DelayTime: number | null;
  /** crontab表达式 */
  CrontabExpression: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  LastUpdate: string | null;
  /** 生效日期 */
  StartTime: string | null;
  /** 结束日期 */
  EndTime: string | null;
  /** 执行时间左闭区间 */
  ExecutionStartTime: string | null;
  /** 执行时间右闭区间 */
  ExecutionEndTime: string | null;
  /** 周期类型 */
  CycleType: number | null;
  /** 步长 */
  CycleStep: number | null;
  /** 延时执行时间（延时执行) 对应为 开始时间 状态为分钟 */
  StartupTime: number | null;
  /** 重试等待时间,单位分钟 */
  RetryWait: number | null;
  /** 是否可重试 */
  Retriable: number | null;
  /** 调度扩展信息 */
  TaskAction: string | null;
  /** 运行次数限制 */
  TryLimit: number | null;
  /** 运行优先级 */
  RunPriority: number | null;
  /** 任务类型 */
  TaskType: number | null;
  /** 指定的运行节点 */
  BrokerIp: string | null;
  /** 集群 */
  ClusterId: string | null;
  /** 最小数据时间 */
  MinDateTime: string | null;
  /** 最大数据时间 */
  MaxDateTime: string | null;
  /** 是否自身依赖 是1 否2 并行3 */
  SelfDepend: number | null;
  /** 扩展属性 */
  TaskExt: TaskExtInfo[] | null;
  /** 任务备注 */
  Notes: string | null;
  /** 队列 */
  YarnQueue: string | null;
  /** 任务版本是否已提交 */
  Submit: boolean | null;
  /** 最新调度计划变更时间 仅生产态 */
  LastSchedulerCommitTime: string | null;
  /** 仅生产态存储于生产态序列化任务信息, 减少base CPU重复密集计算 */
  NormalizedJobStartTime: string | null;
  /** 源数据源 */
  SourceServer: string | null;
  /** 创建者 */
  Creater: string | null;
  /** 分支，依赖关系，and/or, 默认and */
  DependencyRel: string | null;
  /** 是否支持工作流依赖 yes / no 默认 no */
  DependencyWorkflow: string | null;
  /** 任务参数 */
  Params: ParamInfo[] | null;
  /** 最后修改的人 */
  UpdateUser: string | null;
  /** 最后修改的时间 */
  UpdateTime: string | null;
  /** 最后修改的人Id */
  UpdateUserId: string | null;
  /** 调度计划 */
  SchedulerDesc: string | null;
  /** 资源组信息 */
  ResourceGroup: string | null;
  /** 版本提交说明 */
  VersionDesc: string | null;
  /** 真实工作流Id */
  RealWorkflowId: string | null;
  /** 目标数据源 */
  TargetServer: string | null;
  /** 依赖配置 */
  DependencyConfigs: DependencyConfig[] | null;
  /** 虚拟任务状态1 */
  VirtualTaskStatus: string | null;
  /** 虚拟任务id */
  VirtualTaskId: string | null;
}

/** 任务分页数据查询 */
declare interface TaskInfoDataPage {
  /** 页号 */
  PageNumber: number;
  /** 页大小 */
  PageSize: number;
  /** 任务集合信息 */
  Items: TaskInfoData[];
  /** 总页数1 */
  TotalCount: number;
}

/** 任务属性 */
declare interface TaskInnerInfo {
  /** 任务ID */
  TaskId: string;
  /** 任务名 */
  TaskName: string;
  /** 工作流id */
  WorkflowId: string;
  /** 周期类型 0:crontab类型, 1:分钟，2:小时，3:天，4:周，5:月，6:一次性，7:用户驱动，10:弹性周期 周,11:弹性周期 月,12:年,13:即时触发Instant类型，与正常周期调度任务逻辑隔离 */
  CycleType: number;
  /** 虚拟任务id */
  VirtualTaskId?: string | null;
  /** 虚拟任务标记 */
  VirtualFlag?: boolean | null;
  /** 真实任务工作流id */
  RealWorkflowId?: string | null;
}

/** 离线任务实例详情 */
declare interface TaskInstanceDetail {
  /** 实例id */
  TaskRunId: string;
  /** 任务id */
  TaskId: string;
  /** 实例数据运行时间 */
  CurRunDate: string;
  /** 实例实际运行时间 */
  IssueDate: string;
  /** InLong任务Id */
  InlongTaskId: string;
  /** 执行资源组id */
  ExecutorGroupId: string;
  /** 任务类型(1 调试运行,2 调度执行) */
  TaskRunType: number;
  /** 任务状态(1 正在执行,2 成功,3 失败,4 等待终止,5 正在终止,6 已终止,7 终止失败,9 等待执行) */
  State: number;
  /** 实例开始运行时间，格式：yyyy-MM-dd HH:mm:ss */
  StartTime: string;
  /** 实例结束运行时间，格式：yyyy-MM-dd HH:mm:ss */
  EndTime: string;
  /** Broker IP */
  BrokerIp: string;
  /** 运行实例的EKS Pod名称 */
  PodName: string;
  /** 下一个调度周期的数据运行时间 */
  NextRunDate: string;
  /** 创建者的账号Id */
  CreateUin: number;
  /** 操作者的账号Id */
  OperatorUin: number;
  /** 拥有者的账号Id */
  OwnerUin: number;
  /** App Id */
  AppId: number;
  /** WeData项目id */
  ProjectId: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 任务名称 */
  TaskName: string;
}

/** 任务实例信息 */
declare interface TaskInstanceInfo {
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
  /** 实例状态，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功 */
  State: number | null;
  /** 任务类型id，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce */
  TaskTypeId: number | null;
  /** 任务类型描述 */
  TaskTypeDesc: string | null;
  /** 项目id */
  ProjectId: string | null;
  /** 文件夹名称 */
  FolderName: string | null;
  /** 文件夹id */
  FolderId: string | null;
  /** 调度计划展示描述信息 */
  SchedulerDesc: string | null;
  /** 负责人 */
  InCharge: string | null;
  /** 调度周期类型，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab */
  CycleType: string | null;
  /** 实例开始时间 */
  StartTime: string | null;
  /** 实例结束时间 */
  EndTime: string | null;
  /** 实例类型，0补录实例，1周期实例，2非周期实例 */
  InstanceType: number | null;
  /** 最大重试次数 */
  TryLimit: number | null;
  /** 当前重试次数 */
  Tries: number | null;
  /** 计划调度时间 */
  SchedulerDateTime: string | null;
  /** 运行耗时 */
  CostTime: string | null;
}

/** 任务依赖的边信息 */
declare interface TaskLinkInfo {
  /** 下游任务id */
  TaskTo: string;
  /** 上游任务id */
  TaskFrom: string;
  /** 依赖边类型 1、“real_real”表示任务->任务；2、"virtual_real" 跨工作流任务->任务 */
  LinkType: string;
  /** 依赖边id */
  LinkId: string;
}

/** 任务锁的状态 */
declare interface TaskLockStatus {
  /** 任务id */
  TaskId: string;
  /** 持锁者 */
  Locker: string;
  /** 当前操作用户是否为持锁者，1表示为持锁者，0表示为不为持锁者 */
  IsLocker: number;
  /** 是否可以抢锁，1表示可以抢锁，0表示不可以抢锁 */
  IsRob: number;
}

/** 离线任务统计指标明细 */
declare interface TaskReportDetail {
  /** 任务ID */
  TaskId: string;
  /** 任务实例ID */
  InstanceId: string;
  /** 实例数据运行时间 */
  CurRunDate: string;
  /** 实例实际下发时间 */
  IssueDate: string;
  /** 任务状态码。1 正在执行,2 成功,3 失败,4 等待终止,5 正在终止,6 已终止,7 终止失败,9 等待执行。 */
  TaskState: string;
  /** 总读取条数 */
  TotalReadRecords: number;
  /** 总读取字节数 */
  TotalReadBytes: number;
  /** 总写入条数 */
  TotalWriteRecords: number;
  /** 总写入字节数 */
  TotalWriteBytes: number;
  /** 写入速度（条/秒） */
  RecordSpeed: number;
  /** 吞吐（Byte/秒） */
  ByteSpeed: number;
  /** 脏数据条数 */
  TotalErrorRecords: number;
}

/** 任务执行脚本 */
declare interface TaskScriptContent {
  /** 脚本内容 base64编码 */
  ScriptContent: string | null;
}

/** 用户文件信息 */
declare interface UserFileDTO {
  /** 资源ID */
  ResourceId: string | null;
  /** 文件名 */
  FileName: string | null;
  /** 文件类型，如 jar zip 等 */
  FileExtensionType: string | null;
  /** 文件上传类型，资源管理为 resource */
  FileUploadType: string | null;
  /** 文件MD5值 */
  Md5Value: string | null;
  /** 创建时间，秒级别的时间戳 */
  CreateTime: number | null;
  /** 更新时间，秒级别的时间戳 */
  UpdateTime: number | null;
  /** 文件大小，单位为字节 */
  Size: number | null;
  /** 本地路径 */
  LocalPath: string | null;
  /** 本地临时路径 */
  LocalTmpPath: string | null;
  /** 远程路径 */
  RemotePath: string | null;
  /** 文件拥有者名字 */
  OwnerName: string | null;
  /** 文件拥有者uin */
  Owner: string | null;
  /** 文件深度 */
  PathDepth: string | null;
  /** 项目ID */
  ProjectId: string | null;
  /** 附加信息 */
  ExtraInfo: string | null;
  /** 本地临时压缩文件绝对路径 */
  ZipPath: string | null;
  /** 文件所属存储桶 */
  Bucket: string | null;
  /** 文件所属存储桶的地域 */
  Region: string | null;
}

/** 工作流信息 */
declare interface Workflow {
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

declare interface BatchCreateIntegrationTaskAlarmsRequest {
  /** 任务id */
  TaskIds: string[];
  /** 告警配置信息 */
  TaskAlarmInfo: TaskAlarmInfo;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchCreateIntegrationTaskAlarmsResponse {
  /** 操作成功的任务数 */
  SuccessCount: number | null;
  /** 操作失败的任务数 */
  FailedCount: number | null;
  /** 任务总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchDeleteIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 任务类型 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchDeleteIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount: number | null;
  /** 操作失败的任务数 */
  FailedCount: number | null;
  /** 任务总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchDeleteTasksNewRequest {
  /** 批量删除的任务TaskId */
  TaskIdList: string[];
  /** true : 删除后下游任务可正常运行false：删除后下游任务不可运行 */
  DeleteMode: boolean;
  /** true：通知下游任务责任人false: 不通知下游任务责任人 */
  EnableNotify: boolean;
  /** 项目Id */
  ProjectId: string;
}

declare interface BatchDeleteTasksNewResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data: BatchOperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchForceSuccessIntegrationTaskInstancesRequest {
  /** 实例信息 */
  Instances: SchedulerTaskInstanceInfo[];
  /** 项目id */
  ProjectId: string;
}

declare interface BatchForceSuccessIntegrationTaskInstancesResponse {
  /** 操作成功的任务数 */
  SuccessCount: number;
  /** 操作失败的任务数 */
  FailedCount: number;
  /** 任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchKillIntegrationTaskInstancesRequest {
  /** 实例信息 */
  Instances: SchedulerTaskInstanceInfo[];
  /** 项目id */
  ProjectId: string;
}

declare interface BatchKillIntegrationTaskInstancesResponse {
  /** 操作成功的任务数 */
  SuccessCount: number;
  /** 操作失败的任务数 */
  FailedCount: number;
  /** 任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchMakeUpIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 任务类型 */
  TaskType: number;
  /** 补数据开始时间 */
  StartTime: string;
  /** 补数据结束时间 */
  EndTime: string;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchMakeUpIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount: number;
  /** 操作失败的任务数 */
  FailedCount: number;
  /** 任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchModifyOwnersNewRequest {
  /** 需要更新责任人的TaskId数组 */
  TaskIdList: string[];
  /** 需要更新的责任人 */
  Owners: string;
  /** 项目Id */
  ProjectId: string;
}

declare interface BatchModifyOwnersNewResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data: BatchOperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchRerunIntegrationTaskInstancesRequest {
  /** 实例信息 */
  Instances: SchedulerTaskInstanceInfo[];
  /** 项目id */
  ProjectId: string;
}

declare interface BatchRerunIntegrationTaskInstancesResponse {
  /** 操作成功的任务数 */
  SuccessCount: number;
  /** 操作失败的任务数 */
  FailedCount: number;
  /** 任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchResumeIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 任务类型 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchResumeIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount: number;
  /** 操作失败的任务数 */
  FailedCount: number;
  /** 任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchStartIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 任务类型 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchStartIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount: number;
  /** 操作失败的任务数 */
  FailedCount: number;
  /** 任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchStopIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 任务类型 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchStopIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount: number;
  /** 操作失败的任务数 */
  FailedCount: number;
  /** 任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchStopTasksNewRequest {
  /** 批量停止任务的TaskId */
  TaskIdList: string[];
  /** 项目Id */
  ProjectId: string;
}

declare interface BatchStopTasksNewResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data: BatchOperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchSuspendIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 任务类型 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchSuspendIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount: number;
  /** 操作失败的任务数 */
  FailedCount: number;
  /** 任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BatchUpdateIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 责任人（多个责任人用小写分号隔开；离线任务传入的是账号名，实时任务传入的是账号id） */
  Incharge: string;
  /** 任务类型 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchUpdateIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount: number;
  /** 操作失败的任务数 */
  FailedCount: number;
  /** 任务总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckAlarmRegularNameExistRequest {
  /** 项目名称 */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 规则名称 */
  AlarmRegularName: string;
  /** 主键ID */
  Id?: string;
}

declare interface CheckAlarmRegularNameExistResponse {
  /** 是否重名 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckIntegrationNodeNameExistsRequest {
  /** 任务ID */
  TaskId: string;
  /** 节点名称 */
  Name: string;
  /** 项目ID */
  ProjectId: string;
  /** 节点ID */
  Id?: number;
}

declare interface CheckIntegrationNodeNameExistsResponse {
  /** 返回true代表存在，返回false代表不存在 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckIntegrationTaskNameExistsRequest {
  /** 任务名称 */
  TaskName: string;
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId?: string;
  /** 同步类型1.单表同步，2.解决方案 */
  SyncType?: number;
}

declare interface CheckIntegrationTaskNameExistsResponse {
  /** true表示存在，false表示不存在 */
  Data: boolean;
  /** 任务名重复类型（0:未重复, 1:开发态重复, 2:生产态重复） */
  ExistsType: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckTaskNameExistRequest {
  /** 项目id/工作空间id */
  ProjectId: string;
  /** 任务类型（跟调度传参保持一致27） */
  TypeId: number;
  /** 任务名 */
  TaskName: string;
}

declare interface CheckTaskNameExistResponse {
  /** 结果 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CommitIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** 0.仅提交，1.立即启动，2.停止线上作业，丢弃作业状态数据，重新启动运行，3.暂停线上作业，保留作业状态数据，继续运行，4.保留作业状态数据，继续运行 */
  CommitType?: number;
  /** 实时任务 201 离线任务 202 默认实时任务 */
  TaskType?: number;
}

declare interface CommitIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCustomFunctionRequest {
  /** 类型：HIVE、SPARK */
  Type: string;
  /** 分类：窗口函数、聚合函数、日期函数...... */
  Kind: string;
  /** 函数名称 */
  Name: string;
  /** 集群实例引擎 ID */
  ClusterIdentifier: string;
  /** 数据库名称 */
  DbName?: string;
  /** 项目ID */
  ProjectId?: string;
}

declare interface CreateCustomFunctionResponse {
  /** 函数唯一标识 */
  FunctionId: string | null;
  /** 无 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDataSourceRequest {
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
}

declare interface CreateDataSourceResponse {
  /** 主键ID */
  Data: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFolderRequest {
  /** 项目Id */
  ProjectId: string;
  /** 文件夹名称 */
  FolderName: string;
  /** 父文件夹ID */
  ParentsFolderId?: string;
}

declare interface CreateFolderResponse {
  /** 文件夹Id，null则创建失败 */
  Data: CommonId | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateHiveTableByDDLRequest {
  /** 数据源ID */
  DatasourceId: string;
  /** 数据库 */
  Database: string;
  /** 建hive表ddl */
  DDLSql: string;
  /** 表权限 ，默认为0:项目共享;1:仅个人与管理员 */
  Privilege: number;
  /** 项目ID */
  ProjectId: string;
  /** 目标表类型(HIVE或GBASE) */
  Type: string;
  /** 责任人 */
  Incharge?: string;
}

declare interface CreateHiveTableByDDLResponse {
  /** 表名称 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateHiveTableRequest {
  /** 数据源id */
  DatasourceId: string;
  /** 数据库 */
  Database: string;
  /** 建hive表ddl */
  DDLSql: string;
  /** 表权限 ，默认为0:项目共享;1:仅个人与管理员 */
  Privilege: number;
  /** 项目Id */
  ProjectId: string;
  /** 责任人 */
  Incharge?: string;
}

declare interface CreateHiveTableResponse {
  /** 建表是否成功 */
  IsSuccess: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateInLongAgentRequest {
  /** 采集器类型，1：TKE Agent，2：BOSS SDK，默认：1 */
  AgentType: number;
  /** 采集器名称 */
  AgentName: string;
  /** 集成资源组id */
  ExecutorGroupId: string;
  /** WeData项目ID */
  ProjectId: string;
  /** TKE集群的地域 */
  TkeRegion: string;
  /** 当AgentType为1时，必填。当AgentType为2时，不用填 */
  ClusterId?: string;
}

declare interface CreateInLongAgentResponse {
  /** 采集器ID */
  AgentId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateIntegrationNodeRequest {
  /** 集成节点信息 */
  NodeInfo: IntegrationNodeInfo;
  /** 项目id */
  ProjectId: string;
  /** 任务类型 */
  TaskType?: number;
}

declare interface CreateIntegrationNodeResponse {
  /** 节点 */
  Id: string;
  /** 当前任务id */
  TaskId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateIntegrationTaskRequest {
  /** 任务信息 */
  TaskInfo: IntegrationTaskInfo;
  /** 项目id */
  ProjectId: string;
}

declare interface CreateIntegrationTaskResponse {
  /** 任务id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOfflineTaskRequest {
  /** 项目/工作 */
  ProjectId: string;
  /** 1 */
  CycleStep: number;
  /** 0 */
  DelayTime: number;
  /** 2099-12-31 00:00:00 */
  EndTime: string;
  /** 备注 */
  Notes: string;
  /** 当前日期 */
  StartTime: string;
  /** 任务名称 */
  TaskName: string;
  /** 跟之前调用调度接口保持一致27 */
  TypeId: number;
  /** 默认 "" */
  TaskAction: string;
  /** 区分画布和表单 */
  TaskMode: string;
}

declare interface CreateOfflineTaskResponse {
  /** 结果 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateOrUpdateResourceRequest {
  /** 项目ID */
  ProjectId?: string;
  /** 文件名 */
  Files?: string[];
  /** 文件所属路径，资源管理根路径为 /datastudio/resouce */
  FilePath?: string;
  /** cos存储桶名字 */
  CosBucketName?: string;
  /** cos所属地域 */
  CosRegion?: string;
  /** 是否为新文件，新增为 true，更新为 false */
  NewFile?: boolean;
  /** 文件大小 */
  FilesSize?: string[];
}

declare interface CreateOrUpdateResourceResponse {
  /** 响应数据 */
  Data: UserFileDTO[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTaskAlarmRegularRequest {
  /** 告警配置信息 */
  TaskAlarmInfo: TaskAlarmInfo;
  /** 项目ID */
  ProjectId: string;
}

declare interface CreateTaskAlarmRegularResponse {
  /** 告警ID */
  AlarmId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateTaskRequest {
  /** 项目Id */
  ProjectId: string;
  /** 工作流id */
  WorkflowId: string;
  /** 任务名 */
  TaskName: string;
  /** 26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce */
  TaskType: number;
  /** 扩展属性 */
  TaskExt?: TaskExtInfo[];
}

declare interface CreateTaskResponse {
  /** 返回任务Id */
  Data: CommonId | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateWorkflowRequest {
  /** 项目Id */
  ProjectId: string;
  /** 工作流名称 */
  WorkflowName?: string;
  /** 所属文件夹id */
  FolderId?: string;
}

declare interface CreateWorkflowResponse {
  /** 返回工作流Id */
  Data: CommonId | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCustomFunctionRequest {
  /** 集群实例 ID */
  ClusterIdentifier: string;
  /** 函数 ID */
  FunctionId: string;
  /** 项目ID，必须填 */
  ProjectId?: string;
}

declare interface DeleteCustomFunctionResponse {
  /** 函数 ID */
  FunctionId: string | null;
  /** 无 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDataSourcesRequest {
  /** id列表 */
  Ids: number[];
}

declare interface DeleteDataSourcesResponse {
  /** 是否删除成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteFolderRequest {
  /** 项目Id */
  ProjectId: string;
  /** 文件夹ID */
  FolderId: string;
}

declare interface DeleteFolderResponse {
  /** true代表删除成功，false代表删除失败 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteInLongAgentRequest {
  /** 采集器ID */
  AgentId: string;
  /** WeData项目ID */
  ProjectId: string;
}

declare interface DeleteInLongAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteIntegrationNodeRequest {
  /** 节点id */
  Id: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DeleteIntegrationNodeResponse {
  /** 删除返回是否成功标识 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DeleteIntegrationTaskResponse {
  /** 任务删除成功与否标识 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteOfflineTaskRequest {
  /** 操作者name */
  OperatorName: string;
  /** 项目/工作空间id */
  ProjectId: string;
  /** 任务id */
  TaskId: string;
  /** 虚拟任务标记(跟之前调度接口保持一致默认false) */
  VirtualFlag: boolean;
}

declare interface DeleteOfflineTaskResponse {
  /** 结果 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteResourceRequest {
  /** 项目ID */
  ProjectId?: string;
  /** 资源ID */
  ResourceId?: string;
}

declare interface DeleteResourceResponse {
  /** 是否成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTaskAlarmRegularRequest {
  /** 主键ID */
  Id: string;
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 任务类型(201表示实时任务，202表示离线任务) */
  TaskType: number;
}

declare interface DeleteTaskAlarmRegularResponse {
  /** 删除结果(true表示删除成功，false表示删除失败) */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteWorkflowNewRequest {
  /** 工作流id */
  WorkFlowId: string;
  /** true : 删除后下游任务可正常运行false：删除后下游任务不可运行 */
  DeleteMode: boolean;
  /** true：通知下游任务责任人false: 不通知下游任务责任人 */
  EnableNotify: boolean;
  /** 项目Id */
  ProjectId: string;
}

declare interface DeleteWorkflowNewResponse {
  /** 返回删除结果 */
  Data: OperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAlarmEventsRequest {
  /** 过滤条件(key可以是：AlarmLevel,AlarmIndicator,KeyWord) */
  Filters: Filter[];
  /** 排序字段（AlarmTime） */
  OrderFields: OrderField[];
  /** 类型(201表示实时，202表示离线) */
  TaskType: number;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 项目ID */
  ProjectId: string;
  /** 当前页 */
  PageNumber: number;
  /** 每页记录数 */
  PageSize: number;
}

declare interface DescribeAlarmEventsResponse {
  /** 告警事件列表 */
  AlarmEventInfoList: AlarmEventInfo[] | null;
  /** 总记录数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAlarmReceiverRequest {
  /** 告警ID */
  AlarmId: string;
  /** 当前页 */
  PageNumber: number;
  /** 每页记录数 */
  PageSize: number;
  /** 项目ID */
  ProjectId: string;
  /** 消息ID */
  MessageId: string;
  /** 类型 */
  TaskType?: number;
  /** 告警接收人ID(逗号分隔) */
  AlarmRecipient?: string;
  /** 告警接收人姓名(逗号分隔) */
  AlarmRecipientName?: string;
  /** 告警时间 */
  AlarmTime?: string;
}

declare interface DescribeAlarmReceiverResponse {
  /** 告警接收人列表 */
  AlarmReceiverInfoList: AlarmReceiverInfo[] | null;
  /** 总记录数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClusterNamespaceListRequest {
  /** 集群ID */
  ClusterId: string;
  /** WeData项目ID */
  ProjectId: string;
}

declare interface DescribeClusterNamespaceListResponse {
  /** 命名空间 */
  Namespaces: Namespace[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataSourceInfoListRequest {
  /** 工作空间id */
  ProjectId: string;
  /** 页码 */
  PageNumber?: number;
  /** 页数 */
  PageSize?: number;
  /** 可选过滤条件，Filter可选配置(参考): "Name": { "type": "string", "description": "数据源名称" }, "Type": { "type": "string", "description": "类型" }, "ClusterId": { "type": "string", "description": "集群id" }, "CategoryId": { "type": "string", "description": "分类，项目或空间id" } */
  Filters?: Filter;
  /** 排序配置 */
  OrderFields?: OrderField;
  /** 数据源类型 */
  Type?: string;
  /** 数据源名称过滤用 */
  DatasourceName?: string;
}

declare interface DescribeDataSourceInfoListResponse {
  /** 总条数。 */
  TotalCount: number;
  /** 数据源信息列表。 */
  DatasourceSet: DatasourceBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataSourceListRequest {
  /** 页码 */
  PageNumber?: number;
  /** 返回数量 */
  PageSize?: number;
  /** 排序配置 */
  OrderFields?: OrderField[];
  /** 可选过滤条件，Filter可选配置(参考): "Name": { "type": "string", "description": "数据源名称" }, "Type": { "type": "string", "description": "类型" }, "ClusterId": { "type": "string", "description": "集群id" }, "CategoryId": { "type": "string", "description": "分类，项目或空间id" } */
  Filters?: Filter[];
}

declare interface DescribeDataSourceListResponse {
  /** 数据源列表 */
  Data: DataSourceInfoPage | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataSourceWithoutInfoRequest {
  /** 1 */
  OrderFields?: OrderField[];
  /** 1 */
  Filters?: Filter[];
}

declare interface DescribeDataSourceWithoutInfoResponse {
  /** 1 */
  Data: DataSourceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDataTypesRequest {
  /** 数据源类型，MYSQL|KAFKA等 */
  DatasourceType: string;
  /** 项目ID。 */
  ProjectId: string;
}

declare interface DescribeDataTypesResponse {
  /** 字段类型列表。 */
  TypeInfoSet: Label[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDatabaseInfoListRequest {
  /** 如果是hive这里写rpc，如果是其他类型不传 */
  ConnectionType: string;
}

declare interface DescribeDatabaseInfoListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDatasourceRequest {
  /** 对象唯一ID */
  Id: number;
}

declare interface DescribeDatasourceResponse {
  /** 数据源对象 */
  Data: DataSourceInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDependTasksNewRequest {
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

declare interface DescribeDependTasksNewResponse {
  /** 画布任务和链接信息 */
  Data: CanvasInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFolderListRequest {
  /** 项目Id */
  ProjectId: string;
  /** 文件夹ID */
  ParentsFolderId: string;
  /** 关键字 */
  KeyWords?: string;
  /** 页码，默认1 */
  PageNumber?: number;
  /** 页大小，默认10 */
  PageSize?: number;
}

declare interface DescribeFolderListResponse {
  /** 无 */
  Data: DescribeFolderListData | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFolderWorkflowListRequest {
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

declare interface DescribeFolderWorkflowListResponse {
  /** 无 */
  Data: DescribeFolderWorkflowListData | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFunctionKindsRequest {
}

declare interface DescribeFunctionKindsResponse {
  /** 无 */
  Kinds: FunctionTypeOrKind[] | null;
  /** 无 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFunctionTypesRequest {
}

declare interface DescribeFunctionTypesResponse {
  /** 无 */
  Types: FunctionTypeOrKind[] | null;
  /** 无 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInLongAgentListRequest {
  /** WeData项目ID */
  ProjectId: string;
  /** 采集器ID */
  AgentId?: string;
  /** Agent Name */
  AgentName?: string;
  /** 集群类型，1：TKE Agent，2：BOSS SDK，默认：1 */
  AgentType?: number;
  /** Agent状态(running运行中，initializing 操作中，failed心跳异常) */
  Status?: string;
  /** Vpc Id */
  VpcId?: string;
  /** 分页页码，从1开始，默认：1 */
  PageIndex?: number;
  /** 分页每页记录数，默认10 */
  PageSize?: number;
  /** 名称搜索是否开启模糊匹配，1：开启，0：不开启（精确匹配） */
  Like?: number;
}

declare interface DescribeInLongAgentListResponse {
  /** 采集器信息列表 */
  Items: InLongAgentDetail[];
  /** 页码 */
  PageIndex: number;
  /** 每页记录数 */
  PageSize: number;
  /** 总记录数 */
  TotalCount: number;
  /** 总页数 */
  TotalPage: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInLongAgentTaskListRequest {
  /** 采集器ID */
  AgentId: string;
  /** WeData项目ID */
  ProjectId: string;
}

declare interface DescribeInLongAgentTaskListResponse {
  /** 采集器关联的集成任务列表 */
  Items: InLongAgentTask[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInLongAgentVpcListRequest {
  /** WeData项目ID */
  ProjectId: string;
}

declare interface DescribeInLongAgentVpcListResponse {
  /** VPC列表 */
  VpcList: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInLongTkeClusterListRequest {
  /** WeData项目ID */
  ProjectId: string;
  /** TKE集群地域 */
  TkeRegion: string;
  /** 集群名称。多个名称用逗号连接。 */
  ClusterName?: string;
  /** TKE集群状态 (Running 运行中 Creating 创建中 Initializing 创建中 Idling 闲置中 Abnormal 异常 Failed 异常 Terminating 删除中 Deleting 删除中 Scaling 规模调整中 Upgrading 升级中 Isolated 欠费隔离中 NodeUpgrading 节点升级中 Recovering 唤醒中 Activating 激活中 MasterScaling Master扩缩容中 Waiting 等待注册 ClusterLevelUpgrading 调整规格中 ResourceIsolate 隔离中 ResourceIsolated 已隔离 ResourceReverse 冲正中 Trading 集群开通中 ResourceReversal 集群冲正 ClusterLevelTrading 集群变配交易中)多个状态用逗号连接。 */
  Status?: string;
  /** 是否安装Agent，true: 是，false: 否 */
  HasAgent?: boolean;
  /** 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。多个集群用逗号连接。 */
  ClusterType?: string;
  /** 分页页码，从1开始，默认：1 */
  PageIndex?: number;
  /** 分页每页记录数，默认10 */
  PageSize?: number;
}

declare interface DescribeInLongTkeClusterListResponse {
  /** TKE集群信息 */
  Items: InLongTkeDetail[];
  /** 页码 */
  PageIndex: number;
  /** 每页记录数 */
  PageSize: number;
  /** 总记录数 */
  TotalCount: number;
  /** 总页数 */
  TotalPage: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceLastLogRequest {
  /** 任务id */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
}

declare interface DescribeInstanceLastLogResponse {
  /** 日志 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceListRequest {
  /** 项目/工作空间id */
  ProjectId: string;
  /** 页码 */
  PageIndex: number;
  /** 页大小 */
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
  /** 类型列表（如35 shell任务），可选 */
  TaskTypeList: number[];
  /** 状态列表（如成功 2，正在执行 1），可选 */
  StateList: number[];
  /** 任务名称 */
  Keyword?: string;
}

declare interface DescribeInstanceListResponse {
  /** 结果 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceLogListRequest {
  /** 任务id */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
}

declare interface DescribeInstanceLogListResponse {
  /** 日志列表 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceLogRequest {
  /** 任务id */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
  /** 服务器Ip */
  BrokerIp: string;
  /** 文件Name */
  OriginFileName: string;
}

declare interface DescribeInstanceLogResponse {
  /** 返回结果 */
  Data: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceLogsRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
}

declare interface DescribeInstanceLogsResponse {
  /** 返回日志列表 */
  Data: InstanceLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationNodeRequest {
  /** 节点id */
  Id: string;
  /** 项目id */
  ProjectId: string;
  /** 任务类型 */
  TaskType?: number;
}

declare interface DescribeIntegrationNodeResponse {
  /** 节点信息 */
  NodeInfo: IntegrationNodeInfo | null;
  /** 上游节点是否已经修改。true 已修改，需要提示；false 没有修改 */
  SourceCheckFlag: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationStatisticsAgentStatusRequest {
  /** 任务类型（实时：201，离线：202） */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
  /** 查询日期 */
  QueryDate?: string;
  /** 资源组id */
  ExecutorGroupId?: string;
}

declare interface DescribeIntegrationStatisticsAgentStatusResponse {
  /** 统计结果 */
  StatusData: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationStatisticsInstanceTrendRequest {
  /** 任务类型（实时：201，离线：202） */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
  /** 查询日期 */
  QueryDate?: string;
  /** 资源组id */
  ExecutorGroupId?: string;
}

declare interface DescribeIntegrationStatisticsInstanceTrendResponse {
  /** 统计结果 */
  TrendsData: IntegrationStatisticsTrendResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationStatisticsRecordsTrendRequest {
  /** 任务类型（实时：201，离线：202） */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
  /** 查询日期 */
  QueryDate?: string;
}

declare interface DescribeIntegrationStatisticsRecordsTrendResponse {
  /** 统计结果 */
  TrendsData: IntegrationStatisticsTrendResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationStatisticsRequest {
  /** 任务类型（实时：201，离线：202） */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
  /** 查询日期 */
  QueryDate?: string;
}

declare interface DescribeIntegrationStatisticsResponse {
  /** 总任务数 */
  TotalTask: number | null;
  /** 生产态任务数 */
  ProdTask: number | null;
  /** 开发态任务数 */
  DevTask: number | null;
  /** 总读取条数 */
  TotalReadRecords: number | null;
  /** 总写入条数 */
  TotalWriteRecords: number | null;
  /** 总脏数据条数 */
  TotalErrorRecords: number | null;
  /** 总告警事件数 */
  TotalAlarmEvent: number | null;
  /** 当天读取增长条数 */
  IncreaseReadRecords: number | null;
  /** 当天写入增长条数 */
  IncreaseWriteRecords: number | null;
  /** 当天脏数据增长条数 */
  IncreaseErrorRecords: number | null;
  /** 当天告警事件增长数 */
  IncreaseAlarmEvent: number | null;
  /** 告警事件统计 */
  AlarmEvent: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationStatisticsTaskStatusRequest {
  /** 任务类型（实时：201，离线：202） */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
  /** 查询日期 */
  QueryDate?: string;
  /** 资源组id */
  ExecutorGroupId?: string;
}

declare interface DescribeIntegrationStatisticsTaskStatusResponse {
  /** 统计结果 */
  StatusData: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationStatisticsTaskStatusTrendRequest {
  /** 任务类型（实时：201，离线：202） */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
  /** 查询日期 */
  QueryDate?: string;
  /** 资源组id */
  ExecutorGroupId?: string;
}

declare interface DescribeIntegrationStatisticsTaskStatusTrendResponse {
  /** 统计结果 */
  TrendsData: IntegrationStatisticsTrendResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** 任务类型：201. stream, 202. offline */
  TaskType?: number;
}

declare interface DescribeIntegrationTaskResponse {
  /** 任务信息 */
  TaskInfo: IntegrationTaskInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationTasksRequest {
  /** 项目id */
  ProjectId: string;
  /** 分页第n页 */
  PageNumber: number;
  /** 分页大小 */
  PageSize: number;
  /** 查询filter */
  Filters?: Filter[];
  /** 排序字段信息 */
  OrderFields?: OrderField[];
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 201. stream, 202. offline 默认实时 */
  TaskType?: number;
}

declare interface DescribeIntegrationTasksResponse {
  /** 任务列表 */
  TaskInfoSet: IntegrationTaskInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIntegrationVersionNodesInfoRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** task version path */
  TaskVersionPath: string;
  /** task version */
  TaskVersion?: string;
}

declare interface DescribeIntegrationVersionNodesInfoResponse {
  /** 任务节点信息 */
  Nodes: IntegrationNodeInfo[] | null;
  /** 任务映射信息 */
  Mappings: IntegrationNodeMapping[] | null;
  /** 任务id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeKafkaTopicInfoRequest {
  /** 数据源id */
  DatasourceId: string;
  /** 数据源类型 */
  Type: string;
}

declare interface DescribeKafkaTopicInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOfflineTaskTokenRequest {
}

declare interface DescribeOfflineTaskTokenResponse {
  /** 长连接临时token */
  Token: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeOrganizationalFunctionsRequest {
  /** 场景类型：开发、使用 */
  Type: string;
  /** 项目 ID */
  ProjectId: string;
  /** 函数名称 */
  Name?: string;
  /** 展示名称 */
  DisplayName?: string;
}

declare interface DescribeOrganizationalFunctionsResponse {
  /** 无 */
  Content: OrganizationalFunction[] | null;
  /** 无 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProjectRequest {
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

declare interface DescribeProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRealTimeTaskInstanceNodeInfoRequest {
  /** 实时任务id */
  TaskId: string;
  /** 工程id */
  ProjectId: string;
}

declare interface DescribeRealTimeTaskInstanceNodeInfoResponse {
  /** 实时任务实例节点相关信息 */
  RealTimeTaskInstanceNodeInfo: RealTimeTaskInstanceNodeInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRealTimeTaskMetricOverviewRequest {
  /** 无 */
  TaskId: string;
  /** 无 */
  ProjectId: string;
}

declare interface DescribeRealTimeTaskMetricOverviewResponse {
  /** 总读取记录数 */
  TotalRecordNumOfRead: number;
  /** 总读取字节数 */
  TotalRecordByteNumOfRead: number;
  /** 总写入记录数 */
  TotalRecordNumOfWrite: number;
  /** 总写入字节数 单位字节 */
  TotalRecordByteNumOfWrite: number;
  /** 总的脏记录数据 */
  TotalDirtyRecordNum: number;
  /** 总的脏字节数 单位字节 */
  TotalDirtyRecordByte: number;
  /** 运行时长 单位s */
  TotalDuration: number;
  /** 开始运行时间 */
  BeginRunTime: string;
  /** 目前运行到的时间 */
  EndRunTime: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRealTimeTaskSpeedRequest {
  /** 无 */
  TaskId: string;
  /** 带毫秒的时间戳 */
  StartTime: number;
  /** 带毫秒的时间戳 */
  EndTime: number;
  /** 粒度，1或者5 */
  Granularity: number;
  /** 无 */
  ProjectId: string;
}

declare interface DescribeRealTimeTaskSpeedResponse {
  /** 同步速度条/s列表 */
  RecordsSpeedList: RecordsSpeed[];
  /** 同步速度字节/s列表 */
  BytesSpeedList: BytesSpeed[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRelatedInstancesRequest {
  /** 项目id */
  ProjectId: string;
  /** 数据时间，格式yyyy-MM-dd HH:mm:ss */
  CurRunDate: string;
  /** 任务id */
  TaskId: number;
  /** 距离当前任务的层级距离，-1表示取父节点，1表示子节点 */
  Depth: number;
  /** 页号，默认为1 */
  PageNumber?: number;
  /** 页大小，默认为10，最大不超过200 */
  PageSize?: number;
}

declare interface DescribeRelatedInstancesResponse {
  /** 无 */
  Data: DescribeTaskInstancesData;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeResourceManagePathTreesRequest {
  /** 项目ID */
  ProjectId?: string;
  /** 名字，供搜索 */
  Name?: string;
  /** 文件类型 */
  FileType?: string;
  /** 文件路径 */
  FilePath?: string;
  /** 文件夹类型 */
  DirType?: string;
}

declare interface DescribeResourceManagePathTreesResponse {
  /** 响应数据 */
  Data: ResourcePathTree[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStandardRuleDetailInfoListRequest {
  /** 空间、项目id */
  ProjectId: string;
  /** 标准分类11编码映射 12数据过滤 13字符串转换 14数据元定义 15正则表达 16术语词典 */
  Type: number;
}

declare interface DescribeStandardRuleDetailInfoListResponse {
  /** 返回值 */
  StandardRuleDetailList: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStreamTaskLogListRequest {
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
}

declare interface DescribeStreamTaskLogListResponse {
  /** 是否是全量 */
  ListOver: boolean | null;
  /** 日志集合 */
  LogContentList: LogContentInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTableInfoListRequest {
  /** 表名 */
  Filters: Filter[];
  /** 如果是hive这里写rpc，如果是其他类型不传 */
  ConnectionType: string;
  /** 数据库源类型 */
  Catalog: string;
}

declare interface DescribeTableInfoListResponse {
  /** 表信息 */
  TableInfo: TableInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTableSchemaInfoRequest {
  /** 表名称 */
  Name: string;
  /** 数据库名称 */
  DatabaseName: string;
  /** 表类型 */
  MsType: string;
  /** 数据源id */
  DatasourceId: string;
  /** HIVE传rpc */
  ConnectionType?: string;
  /** 元数据Database下的Schema名称 */
  SchemaName?: string;
}

declare interface DescribeTableSchemaInfoResponse {
  /** 123 */
  SchemaInfoList: SchemaDetail[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskAlarmRegulationsRequest {
  /** 任务ID */
  TaskId: string;
  /** 项目ID */
  ProjectId: string;
  /** 任务类型(201代表实时任务，202代表离线任务) */
  TaskType: number;
  /** 当前页 */
  PageNumber: number;
  /** 每页记录数 */
  PageSize: number;
  /** 过滤条件(name有RegularStatus、AlarmLevel、AlarmIndicator、RegularName) */
  Filters?: Filter[];
  /** 排序条件(RegularId) */
  OrderFields?: OrderField[];
}

declare interface DescribeTaskAlarmRegulationsResponse {
  /** 任务告警规则信息 */
  TaskAlarmInfos: TaskAlarmInfo[] | null;
  /** 总记录数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskDetailRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 任务告警状态 */
  TaskAlarmStatus?: number;
}

declare interface DescribeTaskDetailResponse {
  /** 任务详情1 */
  Data: TaskInfoData | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskInstanceReportDetailRequest {
  /** WeData项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 任务实例数据时间 */
  CurRunDate?: string;
  /** 任务实例运行时间 */
  IssueDate?: string;
}

declare interface DescribeTaskInstanceReportDetailResponse {
  /** 任务实例运行指标概览 */
  Summary: InstanceReportSummary;
  /** 任务实例读取节点运行指标 */
  ReadNode: InstanceReportReadNode;
  /** 任务实例写入节点运行指标 */
  WriteNode: InstanceReportWriteNode;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskInstanceRequest {
  /** WeData项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 任务实例数据时间 */
  CurRunDate?: string;
  /** 任务实例运行时间 */
  IssueDate?: string;
}

declare interface DescribeTaskInstanceResponse {
  /** 任务实例详情 */
  TaskInstanceDetail: TaskInstanceDetail;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskInstancesRequest {
  /** 项目id */
  ProjectId: string;
  /** 页号，默认为1 */
  PageNumber?: number;
  /** 页大小，默认为10，最大不超过200 */
  PageSize?: number;
  /** 工作流id列表 */
  WorkflowIdList?: string[];
  /** 工作流名称列表，支持模糊搜索 */
  WorkflowNameList?: string[];
  /** 起始数据时间，格式yyyy-MM-dd HH:mm:ss */
  DateFrom?: string;
  /** 结束数据时间，格式yyyy-MM-dd HH:mm:ss */
  DateTo?: string;
  /** 任务id列表 */
  TaskIdList?: string[];
  /** 任务名称列表，支持模糊搜索 */
  TaskNameList?: string[];
  /** 责任人名称列表 */
  InChargeList?: string[];
  /** 任务类型码列表，26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40CDW PG，92MapReduce */
  TaskTypeIdList?: number[];
  /** 实例状态列表，0等待事件，1等待上游，2等待运行，3运行中，4正在终止，5失败重试，6失败，7成功 */
  StateList?: string[];
  /** 周期类型列表，I分钟，H小时，D天，W周，M月，Y年，O一次性，C crontab */
  TaskCycleUnitList?: string[];
  /** 实例类型，0补录实例，1周期实例，2非周期实例 */
  InstanceType?: number;
  /** 排序字段信息列表，ScheduleDateTime / CostTime / StartTime / EndTime */
  OrderFields?: OrderField[];
}

declare interface DescribeTaskInstancesResponse {
  /** 无 */
  Data: DescribeTaskInstancesData;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskLockStatusRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** 任务类型：201. stream, 202. offline */
  TaskType: number;
}

declare interface DescribeTaskLockStatusResponse {
  /** 任务锁状态信息 */
  TaskLockStatus: TaskLockStatus;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskReportDetailListRequest {
  /** WeData项目id */
  ProjectId: string;
  /** 任务Id */
  TaskId: string;
  /** 统计周期的开始日期，格式为 yyyy-MM-dd */
  BeginDate: string;
  /** 统计周期的结束日期，格式为 yyyy-MM-dd */
  EndDate: string;
  /** 任务状态，多个状态用逗号连接 */
  StateList?: string;
  /** 排序字段名 */
  SortItem?: string;
  /** 升序或降序，传ASC或DESC */
  SortType?: string;
  /** 页数，从1开始 */
  PageIndex?: number;
  /** 每页的记录条数，默认10条 */
  PageSize?: number;
}

declare interface DescribeTaskReportDetailListResponse {
  /** 页码，从1开始 */
  PageIndex: number;
  /** 每页的记录数 */
  PageSize: number;
  /** 总记录数 */
  TotalCount: number;
  /** 总页数 */
  TotalPage: number;
  /** 任务运行指标 */
  Items: TaskReportDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskReportRequest {
  /** 任务Id */
  TaskId: string;
  /** 统计周期的开始日期，格式为 yyyy-MM-dd */
  BeginDate: string;
  /** 统计周期的结束日期，格式为 yyyy-MM-dd */
  EndDate: string;
  /** WeData项目id */
  ProjectId: string;
}

declare interface DescribeTaskReportResponse {
  /** 总读取条数 */
  TotalReadRecords: number;
  /** 总读取字节数，单位为Byte */
  TotalReadBytes: number;
  /** 总写入条数 */
  TotalWriteRecords: number;
  /** 总写入字节数，单位为Byte */
  TotalWriteBytes: number;
  /** 总脏数据条数 */
  TotalErrorRecords: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskScriptRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
}

declare interface DescribeTaskScriptResponse {
  /** 任务脚本内容 */
  Data: TaskScriptContent | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTasksByPageRequest {
  /** 项目Id */
  ProjectId: string;
  /** 工作流ID */
  WorkflowId: string;
  /** 页码，默认1 */
  PageNumber?: number;
  /** 页大小，默认10 */
  PageSize?: number;
}

declare interface DescribeTasksByPageResponse {
  /** 无1 */
  Data: TaskInfoDataPage | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DryRunDIOfflineTaskRequest {
  /** 任务Id */
  TaskId: string;
  /** 项目Id */
  ProjectId: string;
  /** 资源组Id */
  ResourceGroup?: string;
  /** 默认 27 */
  TaskTypeId?: number;
}

declare interface DryRunDIOfflineTaskResponse {
  /** 数据时间 */
  CurrentRunDate: string;
  /** 项目Id */
  ProjectId: string;
  /** 任务状态 */
  Status: string;
  /** 任务Id */
  TaskId: string;
  /** 任务实例唯一key */
  TaskInstanceKey: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ForceSucInstancesRequest {
  /** 项目Id */
  ProjectId: string;
  /** 实例嵌套集合 */
  Instances: InstanceInfo[];
}

declare interface ForceSucInstancesResponse {
  /** 返回实例批量终止结果 */
  Data: OperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface FreezeTasksByMultiWorkflowRequest {
  /** 工作流Id集合 */
  WorkFlowIds: string[];
}

declare interface FreezeTasksByMultiWorkflowResponse {
  /** 操作结果 */
  Data: OperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface FreezeTasksRequest {
  /** 任务列表 */
  Tasks: SimpleTaskInfo[];
  /** 任务操作是否消息通知下游任务责任人 */
  OperateIsInform: boolean;
}

declare interface FreezeTasksResponse {
  /** 操作结果 */
  Data: OperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GenHiveTableDDLSqlRequest {
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
  /** 来源库 */
  SourceDatabase?: string;
  /** 来源表 */
  TableName?: string;
  /** 目标表元数据类型(HIVE、GBASE) */
  SinkType?: string;
  /** schema名称 */
  SchemaName?: string;
}

declare interface GenHiveTableDDLSqlResponse {
  /** 生成的ddl语句 */
  DDLSql: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetIntegrationNodeColumnSchemaRequest {
  /** 字段示例（json格式） */
  ColumnContent?: string;
  /** 数据源类型 */
  DatasourceType?: string;
}

declare interface GetIntegrationNodeColumnSchemaResponse {
  /** 字段列表 */
  Schemas: IntegrationNodeSchema[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetOfflineDIInstanceListRequest {
  /** 第几页 */
  PageIndex: number;
  /** 每页几条 */
  PageSize: number;
  /** 项目Id */
  ProjectId: string;
  /** 无 */
  SearchCondition?: SearchConditionNew;
}

declare interface GetOfflineDIInstanceListResponse {
  /** 总条数 */
  Total: number;
  /** 实例详情 */
  List: OfflineInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetOfflineInstanceListRequest {
  /** 第几页 */
  PageIndex: string;
  /** 每页几条 */
  PageSize: number;
  /** 项目Id */
  ProjectId: string;
  /** 无 */
  SearchCondition?: SearchCondition;
}

declare interface GetOfflineInstanceListResponse {
  /** 总条数 */
  Total: number;
  /** 实例详情 */
  List: OfflineInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface KillInstancesRequest {
  /** 项目Id */
  ProjectId: string;
  /** 实例嵌套集合 */
  Instances: InstanceInfo[];
}

declare interface KillInstancesResponse {
  /** 返回实例批量终止结果 */
  Data: OperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface LockIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface LockIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MakeUpTasksNewRequest {
  /** 补录的当前任务的taskId数组 */
  TaskIdList: string[];
  /** 补录开始时间 */
  StartTime: string;
  /** 补录结束时间 */
  EndTime: string;
  /** 补录选项标识，1表示当前任务；2表示当前及下游任务；3表示下游任务 */
  MakeUpType: number;
  /** 项目Id */
  ProjectId: string;
  /** true: 检查父任务实例状态；false: 不检查父任务实例状态 */
  CheckParent?: boolean;
}

declare interface MakeUpTasksNewResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data: BatchOperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MakeUpWorkflowNewRequest {
  /** 工作流id */
  WorkFlowId: string;
  /** 补录开始时间 */
  StartTime: string;
  /** 补录结束时间 */
  EndTime: string;
  /** 项目id */
  ProjectId: string;
}

declare interface MakeUpWorkflowNewResponse {
  /** 返回补录成功或失败的任务数 */
  Data: BatchOperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDataSourceRequest {
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
}

declare interface ModifyDataSourceResponse {
  /** 是否成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyFolderRequest {
  /** 项目Id */
  ProjectId: string;
  /** 文件夹名称 */
  FolderName: string;
  /** 文件夹Id */
  FolderId: string;
  /** 父文件夹ID */
  ParentsFolderId?: string;
}

declare interface ModifyFolderResponse {
  /** true代表成功，false代表失败 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyIntegrationNodeRequest {
  /** 集成节点信息 */
  NodeInfo: IntegrationNodeInfo;
  /** 项目id */
  ProjectId: string;
  /** 任务类型 */
  TaskType?: number;
  /** 区分画布模式和表单模式 */
  TaskMode?: number;
}

declare interface ModifyIntegrationNodeResponse {
  /** 节点id */
  Id: string;
  /** 任务id */
  TaskId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyIntegrationTaskRequest {
  /** 任务信息 */
  TaskInfo: IntegrationTaskInfo;
  /** 项目id */
  ProjectId: string;
  /** 默认false . 为true时表示走回滚节点逻辑 */
  RollbackFlag?: boolean;
}

declare interface ModifyIntegrationTaskResponse {
  /** 任务id */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTaskAlarmRegularRequest {
  /** 主键ID */
  Id: string;
  /** 规则信息 */
  TaskAlarmInfo: TaskAlarmInfo;
  /** 项目ID */
  ProjectId: string;
}

declare interface ModifyTaskAlarmRegularResponse {
  /** 判断是否修改成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTaskInfoRequest {
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
}

declare interface ModifyTaskInfoResponse {
  /** 执行结果 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTaskLinksRequest {
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

declare interface ModifyTaskLinksResponse {
  /** 成功或者失败 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTaskNameRequest {
  /** 名称 */
  TaskName: string;
  /** id */
  TaskId: string;
  /** 项目/工作空间id */
  ProjectId: string;
  /** 备注 */
  Notes?: string;
}

declare interface ModifyTaskNameResponse {
  /** 结果 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTaskScriptRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 脚本内容 base64编码 */
  ScriptContent?: string;
  /** 集成任务脚本配置 */
  IntegrationNodeDetails?: IntegrationNodeDetail[];
}

declare interface ModifyTaskScriptResponse {
  /** 详情 */
  Data: CommonContent | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyWorkflowInfoRequest {
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

declare interface ModifyWorkflowInfoResponse {
  /** true代表成功，false代表失败 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyWorkflowScheduleRequest {
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

declare interface ModifyWorkflowScheduleResponse {
  /** 执行结果 */
  Data: BatchResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RegisterEventListenerRequest {
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

declare interface RegisterEventListenerResponse {
  /** 成功或者失败 */
  Data: BatchReturn | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RegisterEventRequest {
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
  /** TBDS 事件所属人 */
  Owner: string;
  /** 事件类型，默认值：TIME_SERIES */
  EventType?: string;
  /** 对应day： yyyyMMdd，对应HOUR：yyyyMMddHH，对应MIN：yyyyMMddHHmm，对应SECOND：yyyyMMddHHmmss */
  DimensionFormat?: string;
  /** 存活时间 */
  TimeToLive?: number;
  /** 事件描述 */
  Description?: string;
}

declare interface RegisterEventResponse {
  /** 成功或者失败 */
  Data: BatchReturn | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RerunInstancesRequest {
  /** 项目Id */
  ProjectId: string;
  /** 实例嵌套集合 */
  Instances: InstanceInfo[];
  /** 检查父任务类型, true: 检查父任务; false: 不检查父任务 */
  CheckFather: boolean;
  /** 重跑类型, 1: 自身; 3: 孩子; 2: 自身以及孩子 */
  RerunType: string;
  /** 实例依赖方式, 1: 自依赖; 2: 任务依赖; 3: 自依赖及父子依赖 */
  DependentWay: string;
  /** 重跑忽略事件监听与否 */
  SkipEventListening: boolean;
  /** 下游实例范围 1: 所在工作流 2: 所在项目 3: 所有跨工作流依赖的项目 */
  SonInstanceType: string;
}

declare interface RerunInstancesResponse {
  /** 返回实例批量终止结果 */
  Data: OperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RestartInLongAgentRequest {
  /** 采集器ID */
  AgentId: string;
  /** WeData项目ID */
  ProjectId: string;
}

declare interface RestartInLongAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResumeIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface ResumeIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RobAndLockIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** 任务类型：201. stream, 202. offline */
  TaskType: number;
}

declare interface RobAndLockIntegrationTaskResponse {
  /** 抢锁状态 */
  RobLockState: RobLockState;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RunTaskRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
}

declare interface RunTaskResponse {
  /** 运行成功或者失败 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SaveCustomFunctionRequest {
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
}

declare interface SaveCustomFunctionResponse {
  /** 函数唯一标识 */
  FunctionId: string | null;
  /** 无 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetTaskAlarmNewRequest {
  /** 设置任务超时告警和失败告警信息 */
  AlarmInfoList: AlarmInfo[];
  /** 项目Id */
  ProjectId: string;
}

declare interface SetTaskAlarmNewResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data: BatchOperateResult;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface StartIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface StopIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitCustomFunctionRequest {
  /** 函数唯一标识 */
  FunctionId: string;
  /** 集群实例 ID */
  ClusterIdentifier: string;
  /** 备注信息 */
  Comment: string;
  /** 项目ID */
  ProjectId?: string;
}

declare interface SubmitCustomFunctionResponse {
  /** 函数唯一标识 */
  FunctionId: string | null;
  /** 无 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitTaskRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 版本备注 */
  VersionRemark: string;
  /** 是否启动调度 */
  StartScheduling: boolean;
}

declare interface SubmitTaskResponse {
  /** 成功或者失败 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SubmitWorkflowRequest {
  /** 项目Id */
  ProjectId: string;
  /** 工作流id */
  WorkflowId: string;
  /** 提交的版本备注 */
  VersionRemark: string;
  /** 是否启动调度 */
  StartScheduling: boolean;
}

declare interface SubmitWorkflowResponse {
  /** 执行结果 */
  Data: SubmitWorkflow;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SuspendIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface SuspendIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TaskLogRequest {
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

declare interface TaskLogResponse {
  /** 详细日志 */
  LogContentList: LogContent[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TriggerEventRequest {
  /** 项目Id */
  ProjectId: string;
  /** 案例名称 */
  Name: string;
  /** 时间格式：如果选择触发时间：2022年6月21，则设置为20220621 */
  Dimension: string;
  /** 描述信息 */
  Description?: string;
}

declare interface TriggerEventResponse {
  /** 成功或者失败 */
  Data: BatchReturn | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnlockIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface UnlockIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateInLongAgentRequest {
  /** 采集器ID */
  AgentId: string;
  /** WeData项目ID */
  ProjectId: string;
  /** 采集器名称 */
  AgentName?: string;
  /** 集成资源组ID */
  ExecutorGroupId?: string;
}

declare interface UpdateInLongAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Wedata 数据开发治理平台 WeData} */
declare interface Wedata {
  (): Versions;
  /** {@link BatchCreateIntegrationTaskAlarms 批量创建任务告警规则}({@link BatchCreateIntegrationTaskAlarmsRequest 请求参数}): {@link BatchCreateIntegrationTaskAlarmsResponse 返回参数} */
  BatchCreateIntegrationTaskAlarms(data: BatchCreateIntegrationTaskAlarmsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateIntegrationTaskAlarmsResponse>;
  /** {@link BatchDeleteIntegrationTasks 批量删除集成任务}({@link BatchDeleteIntegrationTasksRequest 请求参数}): {@link BatchDeleteIntegrationTasksResponse 返回参数} */
  BatchDeleteIntegrationTasks(data: BatchDeleteIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteIntegrationTasksResponse>;
  /** {@link BatchDeleteTasksNew 批量删除任务【Beta版本】}({@link BatchDeleteTasksNewRequest 请求参数}): {@link BatchDeleteTasksNewResponse 返回参数} */
  BatchDeleteTasksNew(data: BatchDeleteTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteTasksNewResponse>;
  /** {@link BatchForceSuccessIntegrationTaskInstances 批量置成功集成任务实例}({@link BatchForceSuccessIntegrationTaskInstancesRequest 请求参数}): {@link BatchForceSuccessIntegrationTaskInstancesResponse 返回参数} */
  BatchForceSuccessIntegrationTaskInstances(data: BatchForceSuccessIntegrationTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchForceSuccessIntegrationTaskInstancesResponse>;
  /** {@link BatchKillIntegrationTaskInstances 批量终止集成任务实例}({@link BatchKillIntegrationTaskInstancesRequest 请求参数}): {@link BatchKillIntegrationTaskInstancesResponse 返回参数} */
  BatchKillIntegrationTaskInstances(data: BatchKillIntegrationTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchKillIntegrationTaskInstancesResponse>;
  /** {@link BatchMakeUpIntegrationTasks 批量补数据}({@link BatchMakeUpIntegrationTasksRequest 请求参数}): {@link BatchMakeUpIntegrationTasksResponse 返回参数} */
  BatchMakeUpIntegrationTasks(data: BatchMakeUpIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchMakeUpIntegrationTasksResponse>;
  /** {@link BatchModifyOwnersNew 批量修改任务责任人【Beta版本】}({@link BatchModifyOwnersNewRequest 请求参数}): {@link BatchModifyOwnersNewResponse 返回参数} */
  BatchModifyOwnersNew(data: BatchModifyOwnersNewRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyOwnersNewResponse>;
  /** {@link BatchRerunIntegrationTaskInstances 批量重跑集成任务实例}({@link BatchRerunIntegrationTaskInstancesRequest 请求参数}): {@link BatchRerunIntegrationTaskInstancesResponse 返回参数} */
  BatchRerunIntegrationTaskInstances(data: BatchRerunIntegrationTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchRerunIntegrationTaskInstancesResponse>;
  /** {@link BatchResumeIntegrationTasks 批量继续执行集成任务}({@link BatchResumeIntegrationTasksRequest 请求参数}): {@link BatchResumeIntegrationTasksResponse 返回参数} */
  BatchResumeIntegrationTasks(data: BatchResumeIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchResumeIntegrationTasksResponse>;
  /** {@link BatchStartIntegrationTasks 批量运行集成任务}({@link BatchStartIntegrationTasksRequest 请求参数}): {@link BatchStartIntegrationTasksResponse 返回参数} */
  BatchStartIntegrationTasks(data: BatchStartIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStartIntegrationTasksResponse>;
  /** {@link BatchStopIntegrationTasks 批量停止集成任务}({@link BatchStopIntegrationTasksRequest 请求参数}): {@link BatchStopIntegrationTasksResponse 返回参数} */
  BatchStopIntegrationTasks(data: BatchStopIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopIntegrationTasksResponse>;
  /** {@link BatchStopTasksNew 批量停止任务【Beta版本】}({@link BatchStopTasksNewRequest 请求参数}): {@link BatchStopTasksNewResponse 返回参数} */
  BatchStopTasksNew(data: BatchStopTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopTasksNewResponse>;
  /** {@link BatchSuspendIntegrationTasks 批量暂停集成任务}({@link BatchSuspendIntegrationTasksRequest 请求参数}): {@link BatchSuspendIntegrationTasksResponse 返回参数} */
  BatchSuspendIntegrationTasks(data: BatchSuspendIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchSuspendIntegrationTasksResponse>;
  /** {@link BatchUpdateIntegrationTasks 批量更新集成任务}({@link BatchUpdateIntegrationTasksRequest 请求参数}): {@link BatchUpdateIntegrationTasksResponse 返回参数} */
  BatchUpdateIntegrationTasks(data: BatchUpdateIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchUpdateIntegrationTasksResponse>;
  /** {@link CheckAlarmRegularNameExist 判断告警规则重名}({@link CheckAlarmRegularNameExistRequest 请求参数}): {@link CheckAlarmRegularNameExistResponse 返回参数} */
  CheckAlarmRegularNameExist(data: CheckAlarmRegularNameExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAlarmRegularNameExistResponse>;
  /** {@link CheckIntegrationNodeNameExists 判断集成节点名称是否存在}({@link CheckIntegrationNodeNameExistsRequest 请求参数}): {@link CheckIntegrationNodeNameExistsResponse 返回参数} */
  CheckIntegrationNodeNameExists(data: CheckIntegrationNodeNameExistsRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIntegrationNodeNameExistsResponse>;
  /** {@link CheckIntegrationTaskNameExists 判断集成任务名称是否存在}({@link CheckIntegrationTaskNameExistsRequest 请求参数}): {@link CheckIntegrationTaskNameExistsResponse 返回参数} */
  CheckIntegrationTaskNameExists(data: CheckIntegrationTaskNameExistsRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIntegrationTaskNameExistsResponse>;
  /** {@link CheckTaskNameExist 离线任务重名校验}({@link CheckTaskNameExistRequest 请求参数}): {@link CheckTaskNameExistResponse 返回参数} */
  CheckTaskNameExist(data: CheckTaskNameExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckTaskNameExistResponse>;
  /** {@link CommitIntegrationTask 提交集成任务}({@link CommitIntegrationTaskRequest 请求参数}): {@link CommitIntegrationTaskResponse 返回参数} */
  CommitIntegrationTask(data: CommitIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CommitIntegrationTaskResponse>;
  /** {@link CreateCustomFunction 创建用户自定义函数}({@link CreateCustomFunctionRequest 请求参数}): {@link CreateCustomFunctionResponse 返回参数} */
  CreateCustomFunction(data: CreateCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomFunctionResponse>;
  /** {@link CreateDataSource 数据源管理-创建数据源【Beta版本】}({@link CreateDataSourceRequest 请求参数}): {@link CreateDataSourceResponse 返回参数} */
  CreateDataSource(data: CreateDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataSourceResponse>;
  /** {@link CreateFolder 创建文件夹【Beta版本】}({@link CreateFolderRequest 请求参数}): {@link CreateFolderResponse 返回参数} */
  CreateFolder(data: CreateFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFolderResponse>;
  /** {@link CreateHiveTable 建hive表}({@link CreateHiveTableRequest 请求参数}): {@link CreateHiveTableResponse 返回参数} */
  CreateHiveTable(data: CreateHiveTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHiveTableResponse>;
  /** {@link CreateHiveTableByDDL 创建hive表}({@link CreateHiveTableByDDLRequest 请求参数}): {@link CreateHiveTableByDDLResponse 返回参数} */
  CreateHiveTableByDDL(data: CreateHiveTableByDDLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHiveTableByDDLResponse>;
  /** {@link CreateInLongAgent 注册采集器}({@link CreateInLongAgentRequest 请求参数}): {@link CreateInLongAgentResponse 返回参数} */
  CreateInLongAgent(data: CreateInLongAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInLongAgentResponse>;
  /** {@link CreateIntegrationNode 创建集成节点}({@link CreateIntegrationNodeRequest 请求参数}): {@link CreateIntegrationNodeResponse 返回参数} */
  CreateIntegrationNode(data: CreateIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationNodeResponse>;
  /** {@link CreateIntegrationTask 创建集成任务}({@link CreateIntegrationTaskRequest 请求参数}): {@link CreateIntegrationTaskResponse 返回参数} */
  CreateIntegrationTask(data: CreateIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationTaskResponse>;
  /** {@link CreateOfflineTask 创建离线任务}({@link CreateOfflineTaskRequest 请求参数}): {@link CreateOfflineTaskResponse 返回参数} */
  CreateOfflineTask(data: CreateOfflineTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOfflineTaskResponse>;
  /** {@link CreateOrUpdateResource 资源管理将cos资源绑定到wedata}({@link CreateOrUpdateResourceRequest 请求参数}): {@link CreateOrUpdateResourceResponse 返回参数} */
  CreateOrUpdateResource(data?: CreateOrUpdateResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrUpdateResourceResponse>;
  /** {@link CreateTask 创建任务【Beta版本】}({@link CreateTaskRequest 请求参数}): {@link CreateTaskResponse 返回参数} */
  CreateTask(data: CreateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskResponse>;
  /** {@link CreateTaskAlarmRegular 创建任务告警规则}({@link CreateTaskAlarmRegularRequest 请求参数}): {@link CreateTaskAlarmRegularResponse 返回参数} */
  CreateTaskAlarmRegular(data: CreateTaskAlarmRegularRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskAlarmRegularResponse>;
  /** {@link CreateWorkflow 创建工作流【Beta版本】}({@link CreateWorkflowRequest 请求参数}): {@link CreateWorkflowResponse 返回参数} */
  CreateWorkflow(data: CreateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowResponse>;
  /** {@link DeleteCustomFunction 删除用户自定义函数}({@link DeleteCustomFunctionRequest 请求参数}): {@link DeleteCustomFunctionResponse 返回参数} */
  DeleteCustomFunction(data: DeleteCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomFunctionResponse>;
  /** {@link DeleteDataSources 数据源管理-删除数据源【Beta版本】}({@link DeleteDataSourcesRequest 请求参数}): {@link DeleteDataSourcesResponse 返回参数} */
  DeleteDataSources(data: DeleteDataSourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDataSourcesResponse>;
  /** {@link DeleteFolder 删除文件夹【Beta版本】}({@link DeleteFolderRequest 请求参数}): {@link DeleteFolderResponse 返回参数} */
  DeleteFolder(data: DeleteFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFolderResponse>;
  /** {@link DeleteInLongAgent 删除采集器}({@link DeleteInLongAgentRequest 请求参数}): {@link DeleteInLongAgentResponse 返回参数} */
  DeleteInLongAgent(data: DeleteInLongAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInLongAgentResponse>;
  /** {@link DeleteIntegrationNode 删除集成节点}({@link DeleteIntegrationNodeRequest 请求参数}): {@link DeleteIntegrationNodeResponse 返回参数} */
  DeleteIntegrationNode(data: DeleteIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationNodeResponse>;
  /** {@link DeleteIntegrationTask 删除集成任务}({@link DeleteIntegrationTaskRequest 请求参数}): {@link DeleteIntegrationTaskResponse 返回参数} */
  DeleteIntegrationTask(data: DeleteIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationTaskResponse>;
  /** {@link DeleteOfflineTask 删除任务}({@link DeleteOfflineTaskRequest 请求参数}): {@link DeleteOfflineTaskResponse 返回参数} */
  DeleteOfflineTask(data: DeleteOfflineTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOfflineTaskResponse>;
  /** {@link DeleteResource 删除资源}({@link DeleteResourceRequest 请求参数}): {@link DeleteResourceResponse 返回参数} */
  DeleteResource(data?: DeleteResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceResponse>;
  /** {@link DeleteTaskAlarmRegular 删除任务告警规则}({@link DeleteTaskAlarmRegularRequest 请求参数}): {@link DeleteTaskAlarmRegularResponse 返回参数} */
  DeleteTaskAlarmRegular(data: DeleteTaskAlarmRegularRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskAlarmRegularResponse>;
  /** {@link DeleteWorkflowNew 删除工作流【Beta版本】}({@link DeleteWorkflowNewRequest 请求参数}): {@link DeleteWorkflowNewResponse 返回参数} */
  DeleteWorkflowNew(data: DeleteWorkflowNewRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowNewResponse>;
  /** {@link DescribeAlarmEvents 告警事件列表}({@link DescribeAlarmEventsRequest 请求参数}): {@link DescribeAlarmEventsResponse 返回参数} */
  DescribeAlarmEvents(data: DescribeAlarmEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmEventsResponse>;
  /** {@link DescribeAlarmReceiver 告警接收人详情}({@link DescribeAlarmReceiverRequest 请求参数}): {@link DescribeAlarmReceiverResponse 返回参数} */
  DescribeAlarmReceiver(data: DescribeAlarmReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmReceiverResponse>;
  /** {@link DescribeClusterNamespaceList 获取集群命名空间列表}({@link DescribeClusterNamespaceListRequest 请求参数}): {@link DescribeClusterNamespaceListResponse 返回参数} */
  DescribeClusterNamespaceList(data: DescribeClusterNamespaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterNamespaceListResponse>;
  /** {@link DescribeDataSourceInfoList 获取数据源信息}({@link DescribeDataSourceInfoListRequest 请求参数}): {@link DescribeDataSourceInfoListResponse 返回参数} */
  DescribeDataSourceInfoList(data: DescribeDataSourceInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceInfoListResponse>;
  /** {@link DescribeDataSourceList 数据源管理-查询数据源分页列表【Beta版本】}({@link DescribeDataSourceListRequest 请求参数}): {@link DescribeDataSourceListResponse 返回参数} */
  DescribeDataSourceList(data?: DescribeDataSourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceListResponse>;
  /** {@link DescribeDataSourceWithoutInfo 查看数据源列表不带额外信息【Beta版本】}({@link DescribeDataSourceWithoutInfoRequest 请求参数}): {@link DescribeDataSourceWithoutInfoResponse 返回参数} */
  DescribeDataSourceWithoutInfo(data?: DescribeDataSourceWithoutInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceWithoutInfoResponse>;
  /** {@link DescribeDataTypes 获取字段类型列表}({@link DescribeDataTypesRequest 请求参数}): {@link DescribeDataTypesResponse 返回参数} */
  DescribeDataTypes(data: DescribeDataTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataTypesResponse>;
  /** {@link DescribeDatabaseInfoList 获取数据库信息}({@link DescribeDatabaseInfoListRequest 请求参数}): {@link DescribeDatabaseInfoListResponse 返回参数} */
  DescribeDatabaseInfoList(data: DescribeDatabaseInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseInfoListResponse>;
  /** {@link DescribeDatasource 数据源管理-数据源详情【Beta版本】}({@link DescribeDatasourceRequest 请求参数}): {@link DescribeDatasourceResponse 返回参数} */
  DescribeDatasource(data: DescribeDatasourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatasourceResponse>;
  /** {@link DescribeDependTasksNew 任务运维-根据层级查找上-下游任务节点【Beta版本】}({@link DescribeDependTasksNewRequest 请求参数}): {@link DescribeDependTasksNewResponse 返回参数} */
  DescribeDependTasksNew(data: DescribeDependTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDependTasksNewResponse>;
  /** {@link DescribeFolderList 拉取文件夹目录【Beta版本】}({@link DescribeFolderListRequest 请求参数}): {@link DescribeFolderListResponse 返回参数} */
  DescribeFolderList(data: DescribeFolderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFolderListResponse>;
  /** {@link DescribeFolderWorkflowList 拉取文件夹下的工作流【Beta版本】}({@link DescribeFolderWorkflowListRequest 请求参数}): {@link DescribeFolderWorkflowListResponse 返回参数} */
  DescribeFolderWorkflowList(data: DescribeFolderWorkflowListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFolderWorkflowListResponse>;
  /** {@link DescribeFunctionKinds 查询函数分类}({@link DescribeFunctionKindsRequest 请求参数}): {@link DescribeFunctionKindsResponse 返回参数} */
  DescribeFunctionKinds(data?: DescribeFunctionKindsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionKindsResponse>;
  /** {@link DescribeFunctionTypes 查询函数类型}({@link DescribeFunctionTypesRequest 请求参数}): {@link DescribeFunctionTypesResponse 返回参数} */
  DescribeFunctionTypes(data?: DescribeFunctionTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionTypesResponse>;
  /** {@link DescribeInLongAgentList 获取采集器列表}({@link DescribeInLongAgentListRequest 请求参数}): {@link DescribeInLongAgentListResponse 返回参数} */
  DescribeInLongAgentList(data: DescribeInLongAgentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInLongAgentListResponse>;
  /** {@link DescribeInLongAgentTaskList 查询采集器关联的任务列表}({@link DescribeInLongAgentTaskListRequest 请求参数}): {@link DescribeInLongAgentTaskListResponse 返回参数} */
  DescribeInLongAgentTaskList(data: DescribeInLongAgentTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInLongAgentTaskListResponse>;
  /** {@link DescribeInLongAgentVpcList 获取采集器所在集群的VPC列表}({@link DescribeInLongAgentVpcListRequest 请求参数}): {@link DescribeInLongAgentVpcListResponse 返回参数} */
  DescribeInLongAgentVpcList(data: DescribeInLongAgentVpcListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInLongAgentVpcListResponse>;
  /** {@link DescribeInLongTkeClusterList 获取TKE集群列表}({@link DescribeInLongTkeClusterListRequest 请求参数}): {@link DescribeInLongTkeClusterListResponse 返回参数} */
  DescribeInLongTkeClusterList(data: DescribeInLongTkeClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInLongTkeClusterListResponse>;
  /** {@link DescribeInstanceLastLog 日志获取详情页面}({@link DescribeInstanceLastLogRequest 请求参数}): {@link DescribeInstanceLastLogResponse 返回参数} */
  DescribeInstanceLastLog(data: DescribeInstanceLastLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLastLogResponse>;
  /** {@link DescribeInstanceList 获取实例列表}({@link DescribeInstanceListRequest 请求参数}): {@link DescribeInstanceListResponse 返回参数} */
  DescribeInstanceList(data: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** {@link DescribeInstanceLog 获取实例运行日志}({@link DescribeInstanceLogRequest 请求参数}): {@link DescribeInstanceLogResponse 返回参数} */
  DescribeInstanceLog(data: DescribeInstanceLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogResponse>;
  /** {@link DescribeInstanceLogList 获取离线任务实例运行日志列表}({@link DescribeInstanceLogListRequest 请求参数}): {@link DescribeInstanceLogListResponse 返回参数} */
  DescribeInstanceLogList(data: DescribeInstanceLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogListResponse>;
  /** {@link DescribeInstanceLogs 获取实例日志列表【Beta版本】}({@link DescribeInstanceLogsRequest 请求参数}): {@link DescribeInstanceLogsResponse 返回参数} */
  DescribeInstanceLogs(data: DescribeInstanceLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogsResponse>;
  /** {@link DescribeIntegrationNode 查询集成节点}({@link DescribeIntegrationNodeRequest 请求参数}): {@link DescribeIntegrationNodeResponse 返回参数} */
  DescribeIntegrationNode(data: DescribeIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationNodeResponse>;
  /** {@link DescribeIntegrationStatistics 数据集成大屏概览}({@link DescribeIntegrationStatisticsRequest 请求参数}): {@link DescribeIntegrationStatisticsResponse 返回参数} */
  DescribeIntegrationStatistics(data: DescribeIntegrationStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsResponse>;
  /** {@link DescribeIntegrationStatisticsAgentStatus 数据集成大屏采集器状态分布统计}({@link DescribeIntegrationStatisticsAgentStatusRequest 请求参数}): {@link DescribeIntegrationStatisticsAgentStatusResponse 返回参数} */
  DescribeIntegrationStatisticsAgentStatus(data: DescribeIntegrationStatisticsAgentStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsAgentStatusResponse>;
  /** {@link DescribeIntegrationStatisticsInstanceTrend 数据集成大屏实例状态统计趋势}({@link DescribeIntegrationStatisticsInstanceTrendRequest 请求参数}): {@link DescribeIntegrationStatisticsInstanceTrendResponse 返回参数} */
  DescribeIntegrationStatisticsInstanceTrend(data: DescribeIntegrationStatisticsInstanceTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsInstanceTrendResponse>;
  /** {@link DescribeIntegrationStatisticsRecordsTrend 数据集成大屏同步条数统计趋势}({@link DescribeIntegrationStatisticsRecordsTrendRequest 请求参数}): {@link DescribeIntegrationStatisticsRecordsTrendResponse 返回参数} */
  DescribeIntegrationStatisticsRecordsTrend(data: DescribeIntegrationStatisticsRecordsTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsRecordsTrendResponse>;
  /** {@link DescribeIntegrationStatisticsTaskStatus 数据集成大屏任务状态分布统计}({@link DescribeIntegrationStatisticsTaskStatusRequest 请求参数}): {@link DescribeIntegrationStatisticsTaskStatusResponse 返回参数} */
  DescribeIntegrationStatisticsTaskStatus(data: DescribeIntegrationStatisticsTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsTaskStatusResponse>;
  /** {@link DescribeIntegrationStatisticsTaskStatusTrend 数据集成大屏任务状态统计趋势}({@link DescribeIntegrationStatisticsTaskStatusTrendRequest 请求参数}): {@link DescribeIntegrationStatisticsTaskStatusTrendResponse 返回参数} */
  DescribeIntegrationStatisticsTaskStatusTrend(data: DescribeIntegrationStatisticsTaskStatusTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsTaskStatusTrendResponse>;
  /** {@link DescribeIntegrationTask 查询集成任务}({@link DescribeIntegrationTaskRequest 请求参数}): {@link DescribeIntegrationTaskResponse 返回参数} */
  DescribeIntegrationTask(data: DescribeIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationTaskResponse>;
  /** {@link DescribeIntegrationTasks 查询集成任务列表}({@link DescribeIntegrationTasksRequest 请求参数}): {@link DescribeIntegrationTasksResponse 返回参数} */
  DescribeIntegrationTasks(data: DescribeIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationTasksResponse>;
  /** {@link DescribeIntegrationVersionNodesInfo 查询集成任务版本节点信息}({@link DescribeIntegrationVersionNodesInfoRequest 请求参数}): {@link DescribeIntegrationVersionNodesInfoResponse 返回参数} */
  DescribeIntegrationVersionNodesInfo(data: DescribeIntegrationVersionNodesInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationVersionNodesInfoResponse>;
  /** {@link DescribeKafkaTopicInfo 获取kafka的topic信息}({@link DescribeKafkaTopicInfoRequest 请求参数}): {@link DescribeKafkaTopicInfoResponse 返回参数} */
  DescribeKafkaTopicInfo(data: DescribeKafkaTopicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKafkaTopicInfoResponse>;
  /** {@link DescribeOfflineTaskToken 获取离线任务长连接Token}({@link DescribeOfflineTaskTokenRequest 请求参数}): {@link DescribeOfflineTaskTokenResponse 返回参数} */
  DescribeOfflineTaskToken(data?: DescribeOfflineTaskTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfflineTaskTokenResponse>;
  /** {@link DescribeOrganizationalFunctions 查询全量函数（层级化）接口}({@link DescribeOrganizationalFunctionsRequest 请求参数}): {@link DescribeOrganizationalFunctionsResponse 返回参数} */
  DescribeOrganizationalFunctions(data: DescribeOrganizationalFunctionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationalFunctionsResponse>;
  /** {@link DescribeProject 获取项目信息}({@link DescribeProjectRequest 请求参数}): {@link DescribeProjectResponse 返回参数} */
  DescribeProject(data?: DescribeProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectResponse>;
  /** {@link DescribeRealTimeTaskInstanceNodeInfo 查询实时任务实例节点信息}({@link DescribeRealTimeTaskInstanceNodeInfoRequest 请求参数}): {@link DescribeRealTimeTaskInstanceNodeInfoResponse 返回参数} */
  DescribeRealTimeTaskInstanceNodeInfo(data: DescribeRealTimeTaskInstanceNodeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealTimeTaskInstanceNodeInfoResponse>;
  /** {@link DescribeRealTimeTaskMetricOverview 实时任务运行指标概览}({@link DescribeRealTimeTaskMetricOverviewRequest 请求参数}): {@link DescribeRealTimeTaskMetricOverviewResponse 返回参数} */
  DescribeRealTimeTaskMetricOverview(data: DescribeRealTimeTaskMetricOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealTimeTaskMetricOverviewResponse>;
  /** {@link DescribeRealTimeTaskSpeed 实时任务同步速度趋势}({@link DescribeRealTimeTaskSpeedRequest 请求参数}): {@link DescribeRealTimeTaskSpeedResponse 返回参数} */
  DescribeRealTimeTaskSpeed(data: DescribeRealTimeTaskSpeedRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealTimeTaskSpeedResponse>;
  /** {@link DescribeRelatedInstances 查询任务实例的关联实例列表}({@link DescribeRelatedInstancesRequest 请求参数}): {@link DescribeRelatedInstancesResponse 返回参数} */
  DescribeRelatedInstances(data: DescribeRelatedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRelatedInstancesResponse>;
  /** {@link DescribeResourceManagePathTrees 获取资源管理目录树}({@link DescribeResourceManagePathTreesRequest 请求参数}): {@link DescribeResourceManagePathTreesResponse 返回参数} */
  DescribeResourceManagePathTrees(data?: DescribeResourceManagePathTreesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceManagePathTreesResponse>;
  /** {@link DescribeStandardRuleDetailInfoList 获取数据标准规则详情}({@link DescribeStandardRuleDetailInfoListRequest 请求参数}): {@link DescribeStandardRuleDetailInfoListResponse 返回参数} */
  DescribeStandardRuleDetailInfoList(data: DescribeStandardRuleDetailInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStandardRuleDetailInfoListResponse>;
  /** {@link DescribeStreamTaskLogList 查询实时任务日志列表}({@link DescribeStreamTaskLogListRequest 请求参数}): {@link DescribeStreamTaskLogListResponse 返回参数} */
  DescribeStreamTaskLogList(data: DescribeStreamTaskLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamTaskLogListResponse>;
  /** {@link DescribeTableInfoList 获取数据表信息}({@link DescribeTableInfoListRequest 请求参数}): {@link DescribeTableInfoListResponse 返回参数} */
  DescribeTableInfoList(data: DescribeTableInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableInfoListResponse>;
  /** {@link DescribeTableSchemaInfo 获取表schema信息}({@link DescribeTableSchemaInfoRequest 请求参数}): {@link DescribeTableSchemaInfoResponse 返回参数} */
  DescribeTableSchemaInfo(data: DescribeTableSchemaInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableSchemaInfoResponse>;
  /** {@link DescribeTaskAlarmRegulations 查询任务告警规则列表}({@link DescribeTaskAlarmRegulationsRequest 请求参数}): {@link DescribeTaskAlarmRegulationsResponse 返回参数} */
  DescribeTaskAlarmRegulations(data: DescribeTaskAlarmRegulationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskAlarmRegulationsResponse>;
  /** {@link DescribeTaskDetail 查询任务具体详情【Beta版本】}({@link DescribeTaskDetailRequest 请求参数}): {@link DescribeTaskDetailResponse 返回参数} */
  DescribeTaskDetail(data: DescribeTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskDetailResponse>;
  /** {@link DescribeTaskInstance 离线任务实例详情}({@link DescribeTaskInstanceRequest 请求参数}): {@link DescribeTaskInstanceResponse 返回参数} */
  DescribeTaskInstance(data: DescribeTaskInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInstanceResponse>;
  /** {@link DescribeTaskInstanceReportDetail 离线任务实例统计明细}({@link DescribeTaskInstanceReportDetailRequest 请求参数}): {@link DescribeTaskInstanceReportDetailResponse 返回参数} */
  DescribeTaskInstanceReportDetail(data: DescribeTaskInstanceReportDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInstanceReportDetailResponse>;
  /** {@link DescribeTaskInstances 查询任务实例列表}({@link DescribeTaskInstancesRequest 请求参数}): {@link DescribeTaskInstancesResponse 返回参数} */
  DescribeTaskInstances(data: DescribeTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInstancesResponse>;
  /** {@link DescribeTaskLockStatus 查看任务锁状态信息}({@link DescribeTaskLockStatusRequest 请求参数}): {@link DescribeTaskLockStatusResponse 返回参数} */
  DescribeTaskLockStatus(data: DescribeTaskLockStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLockStatusResponse>;
  /** {@link DescribeTaskReport 离线任务周期统计总览}({@link DescribeTaskReportRequest 请求参数}): {@link DescribeTaskReportResponse 返回参数} */
  DescribeTaskReport(data: DescribeTaskReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskReportResponse>;
  /** {@link DescribeTaskReportDetailList 离线任务周期统计明细}({@link DescribeTaskReportDetailListRequest 请求参数}): {@link DescribeTaskReportDetailListResponse 返回参数} */
  DescribeTaskReportDetailList(data: DescribeTaskReportDetailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskReportDetailListResponse>;
  /** {@link DescribeTaskScript 查询任务脚本【Beta版本】}({@link DescribeTaskScriptRequest 请求参数}): {@link DescribeTaskScriptResponse 返回参数} */
  DescribeTaskScript(data: DescribeTaskScriptRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskScriptResponse>;
  /** {@link DescribeTasksByPage 根据工作流分页查询任务【Beta版本】}({@link DescribeTasksByPageRequest 请求参数}): {@link DescribeTasksByPageResponse 返回参数} */
  DescribeTasksByPage(data: DescribeTasksByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksByPageResponse>;
  /** {@link DryRunDIOfflineTask 调试运行集成任务}({@link DryRunDIOfflineTaskRequest 请求参数}): {@link DryRunDIOfflineTaskResponse 返回参数} */
  DryRunDIOfflineTask(data: DryRunDIOfflineTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DryRunDIOfflineTaskResponse>;
  /** {@link ForceSucInstances 实例批量置成功【Beta版本】}({@link ForceSucInstancesRequest 请求参数}): {@link ForceSucInstancesResponse 返回参数} */
  ForceSucInstances(data: ForceSucInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ForceSucInstancesResponse>;
  /** {@link FreezeTasks 批量冻结任务【Beta版本】}({@link FreezeTasksRequest 请求参数}): {@link FreezeTasksResponse 返回参数} */
  FreezeTasks(data: FreezeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeTasksResponse>;
  /** {@link FreezeTasksByMultiWorkflow 基于多个工作流进行批量冻结任务操作【Beta版本】}({@link FreezeTasksByMultiWorkflowRequest 请求参数}): {@link FreezeTasksByMultiWorkflowResponse 返回参数} */
  FreezeTasksByMultiWorkflow(data: FreezeTasksByMultiWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeTasksByMultiWorkflowResponse>;
  /** {@link GenHiveTableDDLSql 生成建hive表的sql}({@link GenHiveTableDDLSqlRequest 请求参数}): {@link GenHiveTableDDLSqlResponse 返回参数} */
  GenHiveTableDDLSql(data: GenHiveTableDDLSqlRequest, config?: AxiosRequestConfig): AxiosPromise<GenHiveTableDDLSqlResponse>;
  /** {@link GetIntegrationNodeColumnSchema 提取数据集成节点字段Schema}({@link GetIntegrationNodeColumnSchemaRequest 请求参数}): {@link GetIntegrationNodeColumnSchemaResponse 返回参数} */
  GetIntegrationNodeColumnSchema(data?: GetIntegrationNodeColumnSchemaRequest, config?: AxiosRequestConfig): AxiosPromise<GetIntegrationNodeColumnSchemaResponse>;
  /** {@link GetOfflineDIInstanceList 获取离线任务实例列表(新)}({@link GetOfflineDIInstanceListRequest 请求参数}): {@link GetOfflineDIInstanceListResponse 返回参数} */
  GetOfflineDIInstanceList(data: GetOfflineDIInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetOfflineDIInstanceListResponse>;
  /** {@link GetOfflineInstanceList 获取离线任务实例}({@link GetOfflineInstanceListRequest 请求参数}): {@link GetOfflineInstanceListResponse 返回参数} */
  GetOfflineInstanceList(data: GetOfflineInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetOfflineInstanceListResponse>;
  /** {@link KillInstances 实例批量终止操作【Beta版本】}({@link KillInstancesRequest 请求参数}): {@link KillInstancesResponse 返回参数} */
  KillInstances(data: KillInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<KillInstancesResponse>;
  /** {@link LockIntegrationTask 锁定集成任务}({@link LockIntegrationTaskRequest 请求参数}): {@link LockIntegrationTaskResponse 返回参数} */
  LockIntegrationTask(data: LockIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<LockIntegrationTaskResponse>;
  /** {@link MakeUpTasksNew 批量补录任务【Beta版本】}({@link MakeUpTasksNewRequest 请求参数}): {@link MakeUpTasksNewResponse 返回参数} */
  MakeUpTasksNew(data: MakeUpTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<MakeUpTasksNewResponse>;
  /** {@link MakeUpWorkflowNew 工作流任务补录【Beta版本】}({@link MakeUpWorkflowNewRequest 请求参数}): {@link MakeUpWorkflowNewResponse 返回参数} */
  MakeUpWorkflowNew(data: MakeUpWorkflowNewRequest, config?: AxiosRequestConfig): AxiosPromise<MakeUpWorkflowNewResponse>;
  /** {@link ModifyDataSource 数据源管理-修改数据源【Beta版本】}({@link ModifyDataSourceRequest 请求参数}): {@link ModifyDataSourceResponse 返回参数} */
  ModifyDataSource(data: ModifyDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDataSourceResponse>;
  /** {@link ModifyFolder 文件夹更新【Beta版本】}({@link ModifyFolderRequest 请求参数}): {@link ModifyFolderResponse 返回参数} */
  ModifyFolder(data: ModifyFolderRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFolderResponse>;
  /** {@link ModifyIntegrationNode 更新集成节点}({@link ModifyIntegrationNodeRequest 请求参数}): {@link ModifyIntegrationNodeResponse 返回参数} */
  ModifyIntegrationNode(data: ModifyIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIntegrationNodeResponse>;
  /** {@link ModifyIntegrationTask 更新集成任务}({@link ModifyIntegrationTaskRequest 请求参数}): {@link ModifyIntegrationTaskResponse 返回参数} */
  ModifyIntegrationTask(data: ModifyIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIntegrationTaskResponse>;
  /** {@link ModifyTaskAlarmRegular 修改任务告警规则}({@link ModifyTaskAlarmRegularRequest 请求参数}): {@link ModifyTaskAlarmRegularResponse 返回参数} */
  ModifyTaskAlarmRegular(data: ModifyTaskAlarmRegularRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskAlarmRegularResponse>;
  /** {@link ModifyTaskInfo 更新任务【Beta版本】}({@link ModifyTaskInfoRequest 请求参数}): {@link ModifyTaskInfoResponse 返回参数} */
  ModifyTaskInfo(data: ModifyTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskInfoResponse>;
  /** {@link ModifyTaskLinks 添加父任务依赖【Beta版本】}({@link ModifyTaskLinksRequest 请求参数}): {@link ModifyTaskLinksResponse 返回参数} */
  ModifyTaskLinks(data: ModifyTaskLinksRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskLinksResponse>;
  /** {@link ModifyTaskName 重命名任务（任务编辑）}({@link ModifyTaskNameRequest 请求参数}): {@link ModifyTaskNameResponse 返回参数} */
  ModifyTaskName(data: ModifyTaskNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskNameResponse>;
  /** {@link ModifyTaskScript 修改任务脚本【Beta版本】}({@link ModifyTaskScriptRequest 请求参数}): {@link ModifyTaskScriptResponse 返回参数} */
  ModifyTaskScript(data: ModifyTaskScriptRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskScriptResponse>;
  /** {@link ModifyWorkflowInfo 更新工作流【Beta版本】}({@link ModifyWorkflowInfoRequest 请求参数}): {@link ModifyWorkflowInfoResponse 返回参数} */
  ModifyWorkflowInfo(data: ModifyWorkflowInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkflowInfoResponse>;
  /** {@link ModifyWorkflowSchedule 更新工作流调度【Beta版本】}({@link ModifyWorkflowScheduleRequest 请求参数}): {@link ModifyWorkflowScheduleResponse 返回参数} */
  ModifyWorkflowSchedule(data: ModifyWorkflowScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkflowScheduleResponse>;
  /** {@link RegisterEvent 注册事件【Beta版本】}({@link RegisterEventRequest 请求参数}): {@link RegisterEventResponse 返回参数} */
  RegisterEvent(data: RegisterEventRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterEventResponse>;
  /** {@link RegisterEventListener 注册事件监听器【Beta版本】}({@link RegisterEventListenerRequest 请求参数}): {@link RegisterEventListenerResponse 返回参数} */
  RegisterEventListener(data: RegisterEventListenerRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterEventListenerResponse>;
  /** {@link RerunInstances 实例批量重跑【Beta版本】}({@link RerunInstancesRequest 请求参数}): {@link RerunInstancesResponse 返回参数} */
  RerunInstances(data: RerunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RerunInstancesResponse>;
  /** {@link RestartInLongAgent 重启采集器}({@link RestartInLongAgentRequest 请求参数}): {@link RestartInLongAgentResponse 返回参数} */
  RestartInLongAgent(data: RestartInLongAgentRequest, config?: AxiosRequestConfig): AxiosPromise<RestartInLongAgentResponse>;
  /** {@link ResumeIntegrationTask 继续集成任务}({@link ResumeIntegrationTaskRequest 请求参数}): {@link ResumeIntegrationTaskResponse 返回参数} */
  ResumeIntegrationTask(data: ResumeIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeIntegrationTaskResponse>;
  /** {@link RobAndLockIntegrationTask 抢占锁定集成任务}({@link RobAndLockIntegrationTaskRequest 请求参数}): {@link RobAndLockIntegrationTaskResponse 返回参数} */
  RobAndLockIntegrationTask(data: RobAndLockIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RobAndLockIntegrationTaskResponse>;
  /** {@link RunTask 运行任务【Beta版本】}({@link RunTaskRequest 请求参数}): {@link RunTaskResponse 返回参数} */
  RunTask(data: RunTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RunTaskResponse>;
  /** {@link SaveCustomFunction 保存用户自定义函数}({@link SaveCustomFunctionRequest 请求参数}): {@link SaveCustomFunctionResponse 返回参数} */
  SaveCustomFunction(data: SaveCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<SaveCustomFunctionResponse>;
  /** {@link SetTaskAlarmNew 设置任务告警【Beta版本】}({@link SetTaskAlarmNewRequest 请求参数}): {@link SetTaskAlarmNewResponse 返回参数} */
  SetTaskAlarmNew(data: SetTaskAlarmNewRequest, config?: AxiosRequestConfig): AxiosPromise<SetTaskAlarmNewResponse>;
  /** {@link StartIntegrationTask 启动集成任务}({@link StartIntegrationTaskRequest 请求参数}): {@link StartIntegrationTaskResponse 返回参数} */
  StartIntegrationTask(data: StartIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StartIntegrationTaskResponse>;
  /** {@link StopIntegrationTask 停止集成任务}({@link StopIntegrationTaskRequest 请求参数}): {@link StopIntegrationTaskResponse 返回参数} */
  StopIntegrationTask(data: StopIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopIntegrationTaskResponse>;
  /** {@link SubmitCustomFunction 提交自定义函数}({@link SubmitCustomFunctionRequest 请求参数}): {@link SubmitCustomFunctionResponse 返回参数} */
  SubmitCustomFunction(data: SubmitCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitCustomFunctionResponse>;
  /** {@link SubmitTask 提交任务【Beta版本】}({@link SubmitTaskRequest 请求参数}): {@link SubmitTaskResponse 返回参数} */
  SubmitTask(data: SubmitTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTaskResponse>;
  /** {@link SubmitWorkflow 提交工作流【Beta版本】}({@link SubmitWorkflowRequest 请求参数}): {@link SubmitWorkflowResponse 返回参数} */
  SubmitWorkflow(data: SubmitWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitWorkflowResponse>;
  /** {@link SuspendIntegrationTask 暂停集成任务}({@link SuspendIntegrationTaskRequest 请求参数}): {@link SuspendIntegrationTaskResponse 返回参数} */
  SuspendIntegrationTask(data: SuspendIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SuspendIntegrationTaskResponse>;
  /** {@link TaskLog 管控日志接口}({@link TaskLogRequest 请求参数}): {@link TaskLogResponse 返回参数} */
  TaskLog(data: TaskLogRequest, config?: AxiosRequestConfig): AxiosPromise<TaskLogResponse>;
  /** {@link TriggerEvent 触发事件【Beta版本】}({@link TriggerEventRequest 请求参数}): {@link TriggerEventResponse 返回参数} */
  TriggerEvent(data: TriggerEventRequest, config?: AxiosRequestConfig): AxiosPromise<TriggerEventResponse>;
  /** {@link UnlockIntegrationTask 解锁集成任务}({@link UnlockIntegrationTaskRequest 请求参数}): {@link UnlockIntegrationTaskResponse 返回参数} */
  UnlockIntegrationTask(data: UnlockIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<UnlockIntegrationTaskResponse>;
  /** {@link UpdateInLongAgent 更新采集器}({@link UpdateInLongAgentRequest 请求参数}): {@link UpdateInLongAgentResponse 返回参数} */
  UpdateInLongAgent(data: UpdateInLongAgentRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateInLongAgentResponse>;
}

export declare type Versions = ["2021-08-20"];

export default Wedata;
