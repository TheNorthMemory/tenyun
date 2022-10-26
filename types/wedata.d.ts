/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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

/** 通用记录字段 */
declare interface RecordField {
  /** 字段名称 */
  Name: string;
  /** 字段值 */
  Value: string;
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

/** 简单Task信息 */
declare interface SimpleTaskInfo {
  /** 任务ID */
  TaskId: string;
  /** 任务名 */
  TaskName: string;
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

declare interface SubmitCustomFunctionRequest {
  /** 函数唯一标识 */
  FunctionId: string;
  /** 集群实例 ID */
  ClusterIdentifier: string;
  /** 备注信息 */
  Comment: string;
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

/** [数据开发治理平台 WeData](https://cloud.tencent.com/document/product/1267) */
declare interface Wedata {
  (): Versions;
  /** 批量删除任务【Beta版本】 */
  BatchDeleteTasksNew(data: BatchDeleteTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteTasksNewResponse>;
  /** 批量修改任务责任人【Beta版本】 */
  BatchModifyOwnersNew(data: BatchModifyOwnersNewRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyOwnersNewResponse>;
  /** 批量停止任务【Beta版本】 */
  BatchStopTasksNew(data: BatchStopTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopTasksNewResponse>;
  /** 创建用户自定义函数 */
  CreateCustomFunction(data: CreateCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomFunctionResponse>;
  /** 数据源管理-创建数据源【Beta版本】 */
  CreateDataSource(data: CreateDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataSourceResponse>;
  /** 创建文件夹【Beta版本】 */
  CreateFolder(data: CreateFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFolderResponse>;
  /** 资源管理将cos资源绑定到wedata */
  CreateOrUpdateResource(data?: CreateOrUpdateResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrUpdateResourceResponse>;
  /** 创建任务【Beta版本】 */
  CreateTask(data: CreateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskResponse>;
  /** 创建工作流【Beta版本】 */
  CreateWorkflow(data: CreateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowResponse>;
  /** 删除用户自定义函数 */
  DeleteCustomFunction(data: DeleteCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomFunctionResponse>;
  /** 数据源管理-删除数据源【Beta版本】 */
  DeleteDataSources(data: DeleteDataSourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDataSourcesResponse>;
  /** 删除文件夹【Beta版本】 */
  DeleteFolder(data: DeleteFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFolderResponse>;
  /** 删除资源 */
  DeleteResource(data?: DeleteResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceResponse>;
  /** 删除工作流【Beta版本】 */
  DeleteWorkflowNew(data: DeleteWorkflowNewRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowNewResponse>;
  /** 数据源管理-查询数据源分页列表【Beta版本】 */
  DescribeDataSourceList(data?: DescribeDataSourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceListResponse>;
  /** 查看数据源列表不带额外信息【Beta版本】 */
  DescribeDataSourceWithoutInfo(data?: DescribeDataSourceWithoutInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceWithoutInfoResponse>;
  /** 数据源管理-数据源详情【Beta版本】 */
  DescribeDatasource(data: DescribeDatasourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatasourceResponse>;
  /** 任务运维-根据层级查找上-下游任务节点【Beta版本】 */
  DescribeDependTasksNew(data: DescribeDependTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDependTasksNewResponse>;
  /** 拉取文件夹目录【Beta版本】 */
  DescribeFolderList(data: DescribeFolderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFolderListResponse>;
  /** 拉取文件夹下的工作流【Beta版本】 */
  DescribeFolderWorkflowList(data: DescribeFolderWorkflowListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFolderWorkflowListResponse>;
  /** 查询函数分类 */
  DescribeFunctionKinds(data?: DescribeFunctionKindsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionKindsResponse>;
  /** 查询函数类型 */
  DescribeFunctionTypes(data?: DescribeFunctionTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionTypesResponse>;
  /** 获取实例日志列表【Beta版本】 */
  DescribeInstanceLogs(data: DescribeInstanceLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogsResponse>;
  /** 查询全量函数（层级化）接口 */
  DescribeOrganizationalFunctions(data: DescribeOrganizationalFunctionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationalFunctionsResponse>;
  /** 获取项目信息 */
  DescribeProject(data?: DescribeProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectResponse>;
  /** 查询任务实例的关联实例列表 */
  DescribeRelatedInstances(data: DescribeRelatedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRelatedInstancesResponse>;
  /** 获取资源管理目录树 */
  DescribeResourceManagePathTrees(data?: DescribeResourceManagePathTreesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceManagePathTreesResponse>;
  /** 查询任务具体详情【Beta版本】 */
  DescribeTaskDetail(data: DescribeTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskDetailResponse>;
  /** 查询任务实例列表 */
  DescribeTaskInstances(data: DescribeTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInstancesResponse>;
  /** 查询任务脚本【Beta版本】 */
  DescribeTaskScript(data: DescribeTaskScriptRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskScriptResponse>;
  /** 根据工作流分页查询任务【Beta版本】 */
  DescribeTasksByPage(data: DescribeTasksByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksByPageResponse>;
  /** 实例批量置成功【Beta版本】 */
  ForceSucInstances(data: ForceSucInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ForceSucInstancesResponse>;
  /** 批量冻结任务【Beta版本】 */
  FreezeTasks(data: FreezeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeTasksResponse>;
  /** 基于多个工作流进行批量冻结任务操作【Beta版本】 */
  FreezeTasksByMultiWorkflow(data: FreezeTasksByMultiWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeTasksByMultiWorkflowResponse>;
  /** 实例批量终止操作【Beta版本】 */
  KillInstances(data: KillInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<KillInstancesResponse>;
  /** 批量补录任务【Beta版本】 */
  MakeUpTasksNew(data: MakeUpTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<MakeUpTasksNewResponse>;
  /** 工作流任务补录【Beta版本】 */
  MakeUpWorkflowNew(data: MakeUpWorkflowNewRequest, config?: AxiosRequestConfig): AxiosPromise<MakeUpWorkflowNewResponse>;
  /** 数据源管理-修改数据源【Beta版本】 */
  ModifyDataSource(data: ModifyDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDataSourceResponse>;
  /** 文件夹更新【Beta版本】 */
  ModifyFolder(data: ModifyFolderRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFolderResponse>;
  /** 更新任务【Beta版本】 */
  ModifyTaskInfo(data: ModifyTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskInfoResponse>;
  /** 添加父任务依赖【Beta版本】 */
  ModifyTaskLinks(data: ModifyTaskLinksRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskLinksResponse>;
  /** 修改任务脚本【Beta版本】 */
  ModifyTaskScript(data: ModifyTaskScriptRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskScriptResponse>;
  /** 更新工作流【Beta版本】 */
  ModifyWorkflowInfo(data: ModifyWorkflowInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkflowInfoResponse>;
  /** 更新工作流调度【Beta版本】 */
  ModifyWorkflowSchedule(data: ModifyWorkflowScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkflowScheduleResponse>;
  /** 注册事件【Beta版本】 */
  RegisterEvent(data: RegisterEventRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterEventResponse>;
  /** 注册事件监听器【Beta版本】 */
  RegisterEventListener(data: RegisterEventListenerRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterEventListenerResponse>;
  /** 实例批量重跑【Beta版本】 */
  RerunInstances(data: RerunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RerunInstancesResponse>;
  /** 运行任务【Beta版本】 */
  RunTask(data: RunTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RunTaskResponse>;
  /** 保存用户自定义函数 */
  SaveCustomFunction(data: SaveCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<SaveCustomFunctionResponse>;
  /** 设置任务告警【Beta版本】 */
  SetTaskAlarmNew(data: SetTaskAlarmNewRequest, config?: AxiosRequestConfig): AxiosPromise<SetTaskAlarmNewResponse>;
  /** 提交自定义函数 */
  SubmitCustomFunction(data: SubmitCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitCustomFunctionResponse>;
  /** 提交任务【Beta版本】 */
  SubmitTask(data: SubmitTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTaskResponse>;
  /** 提交工作流【Beta版本】 */
  SubmitWorkflow(data: SubmitWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitWorkflowResponse>;
  /** 触发事件【Beta版本】 */
  TriggerEvent(data: TriggerEventRequest, config?: AxiosRequestConfig): AxiosPromise<TriggerEventResponse>;
}

export declare type Versions = ["2021-08-20"];

export default Wedata;
