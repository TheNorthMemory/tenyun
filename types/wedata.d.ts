/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 子任务记录 */
declare interface AdhocDetail {
  /** 子任务记录Id */
  Id: number;
  /** 脚本内容 */
  ScriptContent: string;
  /** 任务启动时间 */
  StartTime: string | null;
  /** 任务结束时间 */
  EndTime: string | null;
  /** 当前任务状态 */
  Status: string;
  /** 提交任务id */
  RecordId: number;
}

/** 任务提交记录 */
declare interface AdhocRecord {
  /** 任务提交记录id */
  Id: number | null;
  /** 脚本内容 */
  ScriptContent: string | null;
  /** 任务提交时间 */
  CreateTime: string | null;
  /** 任务状态 */
  Status: string | null;
  /** 实例id */
  InstanceId: string | null;
}

/** Agent采集器状态统计 */
declare interface AgentStatus {
  /** 运行中的数量 */
  Running?: number | null;
  /** 异常的数量 */
  Abnormal?: number | null;
  /** 操作中的数量 */
  InOperation?: number | null;
}

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
  /** 消息ID */
  MessageId?: string | null;
  /** 阈值计算算子，1 : 大于 2 ：小于 */
  Operator?: number | null;
  /** 告警规则ID */
  RegularId?: string | null;
}

/** 告警指标 */
declare interface AlarmIndicatorInfo {
  /** 指标id */
  Id?: string | null;
  /** 告警指标,0表示任务失败，1表示任务运行超时，2表示任务停止，3表示任务暂停 */
  AlarmIndicator?: number | null;
  /** 告警指标描述 */
  AlarmIndicatorDesc?: string | null;
  /** 指标阈值，1表示离线任务第一次运行失败，2表示离线任务所有重试完成后失败 */
  TriggerType?: number | null;
  /** 预计的超时时间，分钟级别 */
  EstimatedTime?: number | null;
  /** 实时任务告警需要的参数 */
  Operator?: number | null;
  /** 告警指标阈值单位：ms(毫秒)、s(秒)、min(分钟) */
  AlarmIndicatorUnit?: string | null;
  /** 告警周期 */
  Duration?: number;
  /** 告警周期单位 */
  DurationUnit?: string;
  /** 周期内最多告警次数 */
  MaxTimes?: number;
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
  /** 企业微信群，0：未设置，1：成功，2：失败 */
  WecomGroup?: number | null;
}

/** 告警规则 */
declare interface AlarmRuleDto {
  /** 告警规则id */
  AlarmRuleId?: string;
  /** 重要;紧急;普通 */
  AlarmLevelType?: string;
}

/** 基线实例 */
declare interface BaselineDto {
  /** 基线id */
  Id?: number;
  /** 基线名称 */
  BaselineName?: string;
  /** 天基线/小时基线 */
  BaselineType?: string;
  /** 基线创建时间 */
  CreateTime?: string;
  /** 保障任务 */
  PromiseTasks?: BaselineTaskDto[] | null;
  /** 告警规则 */
  AlarmRule?: AlarmRuleDto;
  /** 基线状态，待提交, 运行中，停止 */
  BaselineStatus?: string;
  /** 最新基线实例运行状态 */
  LatestBaselineInstanceStatus?: string | null;
  /** 预警余量/单位分钟 */
  WarningMargin?: number;
  /** 承诺时间 */
  PromiseTime?: string;
  /** 责任人uin */
  InChargeUin?: string;
  /** 责任人名称 */
  InChargeName?: string;
  /** 当前用户uin */
  UserUin?: string;
  /** 当前用户名字 */
  UserName?: string | null;
  /** 主账号uin */
  OwnerUin?: string;
  /** 项目id */
  ProjectId?: string;
  /** 租户id */
  AppId?: string;
  /** 更新时间 */
  UpdateTime?: string | null;
}

/** 基线实例 */
declare interface BaselineInstanceVo {
  /** 基线实例id */
  Id?: number | null;
  /** 基线id */
  BaselineId?: number | null;
  /** 基线名称 */
  BaselineName?: string | null;
  /** 基线类型，D: 天基线 / H 小时基线 */
  BaselineType?: string | null;
  /** 基线实例数据时间 */
  BaselineDataTime?: string | null;
  /** 基线实例生成时间 */
  CreateTime?: string | null;
  /** 基线实例预计完成时间 */
  EstimatedEndTime?: string | null;
  /** 基线实例状态，P:暂停/ SF:安全/ WN:预警/ BL:破线 / TF:任务失败 */
  BaselineInstanceStatus?: string | null;
  /** 责任人uin */
  InChargeUin?: string | null;
  /** 责任人名称 */
  InChargeName?: string | null;
  /** 预警余量/单位分钟 */
  WarningMargin?: number | null;
  /** 承诺时间 */
  PromiseTime?: string | null;
  /** 告警级别 N: 普通 / I重要 / E: 紧急 */
  AlarmLevel?: string | null;
  /** 项目id */
  ProjectId?: string | null;
  /** 基线实例ready状态。NEW_GENERATED_INSTANCE:产生实例/RENDER_DAG:渲染DAG/CALCULATE_PATH:计算路径/COMPLETE:完成 */
  IsReady?: string | null;
  /** 该基线由哪个机器处理 */
  ShardKey?: string | null;
  /** 异常任务实例 */
  ExceptionalTaskInstances?: BaselineTaskInstanceDto[] | null;
  /** 关联的所有任务实例 */
  TaskInstances?: BaselineTaskInstanceDto[] | null;
  /** 任务实例DAG整体启动时间 */
  CriticalStartTime?: string | null;
  /** 基线实例上的关键任务实例 */
  CriticalTaskInstances?: BaselineTaskInstanceDto[] | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 基线实例与保障任务实例映射 */
  BaselineTaskInstances?: BaselineTaskInstanceDto[] | null;
  /** 租户id */
  AppId?: string | null;
  /** 主账号uin */
  OwnerUin?: string | null;
  /** 当前用户uin */
  UserUin?: string | null;
}

/** 基线关联任务 */
declare interface BaselineTaskDto {
  /** 变更记录id */
  Id?: number | null;
  /** 基线id */
  BaselineId?: number | null;
  /** 任务id */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务运行平均时间/单位秒 */
  EstimatedCostTime?: number | null;
  /** 上游实例id,多个实例用,分开 */
  UpstreamTaskIds?: StringListNode | null;
  /** 下游实例id,多个实例用,分开 */
  DownstreamTaskIds?: StringListNode | null;
  /** 否是保障任务 */
  IsPromiseTask?: boolean | null;
  /** 当前用户uin */
  UserUin?: string | null;
  /** 主账号uin */
  OwnerUin?: string | null;
  /** 项目id */
  ProjectId?: string | null;
  /** 租户id */
  AppId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流id */
  WorkflowId?: string | null;
  /** 任务周期类型 */
  TaskCycle?: string | null;
  /** 任务负责人名字 */
  TaskInChargeUin?: string | null;
  /** 任务负责人uin */
  TaskInChargeName?: string | null;
  /** 任务准入基准 */
  AccessBenchmark?: string | null;
  /** 任务准入基准诊断信息 */
  AccessBenchmarkDesc?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
}

/** BaselineTaskInfo */
declare interface BaselineTaskInfo {
  /** 项目id */
  ProjectId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 任务id */
  TaskId?: string;
  /** 任务调度周期 */
  TaskCycle?: string;
  /** 工作流名称 */
  WorkflowName?: string;
  /** 工作流id */
  WorkflowId?: string;
  /** 任务责任人名称 */
  TaskInChargeName?: string;
  /** 任务责任人id */
  TaskInChargeUin?: string;
}

/** 基线实例 */
declare interface BaselineTaskInstanceDto {
  /** 任务实例变更记录id */
  Id?: number | null;
  /** 基线实例id */
  BaselineInstanceId?: number | null;
  /** 基线周期, D: 天 / H: 小时 */
  BaselineType?: string | null;
  /** 数据时间/基线实例应该应该生成的时间 */
  BaselineDataTime?: string | null;
  /** 上游实例id,多个实例用,分开.格式为taskId_curRunDate */
  UpstreamInstanceIds?: string | null;
  /** 下游实例id,多个实例用,分开.格式为taskId_curRunDate */
  DownstreamInstanceIds?: string | null;
  /** 是否是保障任务的实例 */
  IsPromiseTask?: boolean | null;
  /** 任务id */
  TaskId?: string | null;
  /** 任务实例的数据时间 */
  CurRunDate?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 是否在关键路径上，1表示在，0表示不在 */
  InCriticalPath?: number | null;
  /** 是否在DAG首层 */
  InFirstLevel?: boolean | null;
  /** 实例预计耗时/单位秒 */
  EstimatedCostTime?: number | null;
  /** 实例实际耗时/单位秒 */
  ActualCostTime?: number | null;
  /** 预计最晚开始时间 */
  LatestStartTime?: string | null;
  /** 实际开始时间 */
  ActualStartTime?: string | null;
  /** 预计完成时间 */
  EstimatedEndTime?: string | null;
  /** 最晚完成时间 */
  LatestEndTime?: string | null;
  /** 实际完成时间 */
  ActualEndTime?: string | null;
  /** 实例运行状态WAITINT_TO_RUN:等待运行 / RUNNING: 正在运行 / COMPLETED: 执行成功 / FAILED: 执行失败 */
  TaskInstanceStatus?: string | null;
  /** 项目id */
  ProjectId?: string | null;
  /** 该基线由哪个机器处理 */
  ShardKey?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 当前用户uin */
  UserUin?: string | null;
  /** 主账号uin */
  OwnerUin?: string | null;
  /** 租户id */
  AppId?: string | null;
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

/** 实例批量操作结果类 */
declare interface BatchOperateResultOpsDto {
  /** 结果 */
  Result?: boolean | null;
  /** 错误id */
  ErrorId?: string | null;
  /** 错误说明 */
  ErrorDesc?: string | null;
}

/** 批量操作的结果返回 */
declare interface BatchOperationOpsDto {
  /** 批量操作成功数 */
  SuccessCount: number | null;
  /** 批量操作失败数 */
  FailedCount: number | null;
  /** 批量操作的总数 */
  TotalCount: number | null;
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

/** 文件夹列表 */
declare interface CollectionFolderOpsDto {
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
declare interface CollectionInstanceOpsDto {
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

/** 任务实例集合 */
declare interface CollectionTaskOpsDto {
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
  Items?: TaskOpsDto[] | null;
}

/** 列血缘聚合信息 */
declare interface ColumnAggregationLineage {
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

/** 血缘字段信息 */
declare interface ColumnLineageInfo {
  /** 血缘id */
  Id: string | null;
  /** 由中心节点出发的路径信息 */
  PrefixPath: string | null;
  /** 数据源ID */
  DatasourceId: string | null;
  /** 表ID */
  TableId: string | null;
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

/** 返回命令id */
declare interface CommonIdOpsDto {
  /** 返回命令id */
  Id?: string | null;
}

/** 质量检查对比结果 */
declare interface CompareResult {
  /** 对比结果项列表 */
  Items: CompareResultItem[] | null;
  /** 检测总行数 */
  TotalRows: number | null;
  /** 检测通过行数 */
  PassRows: number | null;
  /** 检测不通过行数 */
  TriggerRows: number | null;
}

/** 对比结果项 */
declare interface CompareResultItem {
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
declare interface CompareRule {
  /** 比较条件列表 */
  Items?: CompareRuleItem[] | null;
  /** 周期性模板默认周期，单位秒 */
  CycleStep?: number | null;
}

/** 比较条件 */
declare interface CompareRuleItem {
  /** 比较类型 1.固定值 2.波动值 3.数值范围比较 4.枚举范围比较 5.不用比较 */
  CompareType?: number | null;
  /** 比较操作类型 < <= == => > */
  Operator?: string | null;
  /** 质量统计值类型 1.绝对值 2.上升 3. 下降 4._C包含 5. N_C不包含 */
  ValueComputeType?: number | null;
  /** 比较阈值列表 */
  ValueList?: ThresholdValue[] | null;
}

/** 补录计划日期范围 */
declare interface CreateMakeDatetimeInfo {
  /** 开始日期 */
  StartDate?: string | null;
  /** 结束日期 */
  EndDate?: string | null;
  /** 开始时间 */
  StartTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
}

/** 采集器状态统计 */
declare interface CvmAgentStatus {
  /** agent状态 */
  Status: string | null;
  /** 对应状态的agent总数 */
  Count: number | null;
}

/** 日评分信息 */
declare interface DailyScoreInfo {
  /** 统计日期 时间戳 */
  StatisticsDate: number | null;
  /** 评分 */
  Score: number | null;
}

/** 数据监测情况结果 */
declare interface DataCheckStat {
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

/** 数据源对象 */
declare interface DataSourceInfo {
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

/** 数据质量数据来源数据库 */
declare interface DatabaseInfo {
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
  /** 数据源版本信息 */
  Version?: string | null;
}

/** 任务运维数据源类型信息 */
declare interface DatasourceTypeByTaskType {
  /** 类型id */
  TypeId?: number | null;
  /** 可选数据源列表文本 */
  CandidateTexts?: string | null;
  /** 可选数据源列表取值 */
  CandidateValues?: string | null;
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

/** 批量操作任务列表 */
declare interface DescribeBatchOperateTaskDTO {
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
  /** 周期类型 */
  CycleUnit?: string | null;
  /** 调度计划 */
  ScheduleDesc?: string | null;
  /** 数据源ID */
  DatasourceId?: string | null;
  /** 数据源类型 */
  DatasourceType?: string | null;
}

/** 批量操作任务列表分页 */
declare interface DescribeBatchOperateTaskPage {
  /** 总页码数 */
  PageCount: number | null;
  /** 内容 */
  Items: DescribeBatchOperateTaskDTO[] | null;
  /** 总个数 */
  TotalCount?: number | null;
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

/** 维度统计业务视图 */
declare interface DimensionCount {
  /** 维度类型1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
  DimType?: number | null;
  /** 统计值 */
  Count?: number | null;
  /** 维度类型1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
  QualityDim?: number | null;
}

/** 维度评分 */
declare interface DimensionScore {
  /** 维度评分列表 */
  DimensionScoreList: DimensionScoreInfo[] | null;
}

/** 维度评分信息 */
declare interface DimensionScoreInfo {
  /** 维度名称 */
  Name: string | null;
  /** 权重 */
  Weight: number | null;
  /** 设置人id */
  UserId: number | null;
  /** 设置人名 */
  UserName: string | null;
  /** 更新时间 时间戳 */
  UpdateTime: number | null;
  /** 参与评估表数量 */
  JoinTableNumber: number;
  /** 评分 */
  Score: number;
}

/** 数据治理配置项 */
declare interface DlcDataGovernPolicy {
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
declare interface DlcExpiredSnapshotsInfo {
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
declare interface DlcMergeManifestsInfo {
  /** 是否启用合并元数据Manifests文件治理项：enable、none */
  MergeManifestsEnable?: string | null;
  /** 用于运行合并元数据Manifests文件治理项的引擎名称 */
  Engine?: string | null;
  /** 合并元数据Manifests文件治理运行周期，单位为分钟 */
  IntervalMin?: number | null;
}

/** 移除孤立文件治理项 */
declare interface DlcRemoveOrphanFilesInfo {
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
declare interface DlcRewriteDataInfo {
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

/** 试运行记录 */
declare interface DrInstanceOpsDto {
  /** 任务来源 */
  TaskSource?: string | null;
  /** 编排空间jobId */
  JobId?: string | null;
  /** 任务提交记录Id */
  RecordId?: number | null;
  /** 子任务记录id */
  SonRecordId?: number | null;
  /** 任务实例Id */
  InstanceId?: string | null;
  /** 编排空间为任务id, 开发空间为脚本id */
  TaskId?: string | null;
  /** 脚本cos地址 */
  RemotePath?: string | null;
  /** 试运行内容 */
  ScriptContent?: string | null;
  /** 任务提交时间 */
  CreateTime?: string | null;
  /** 任务启动时间 */
  StartTime?: string | null;
  /** 运行时长(秒) */
  Duration?: string | null;
  /** 试运行状态 */
  Status?: string | null;
  /** 编排空间为任务名称，开发空间为脚本名称 */
  TaskName?: string | null;
  /** 试运行提交人 */
  SubmitUserName?: string | null;
  /** 试运行提交人userId */
  SubmitUserId?: string | null;
  /** 任务类型 */
  TaskType?: string | null;
  /** 是否含有结果集 */
  HasResultSet?: boolean | null;
}

/** 试运行记录 */
declare interface DrInstanceOpsDtoPage {
  /** 记录总数 */
  TotalCount?: number | null;
  /** 记录列表 */
  Items?: DrInstanceOpsDto[] | null;
}

/** 事件实例 */
declare interface EventCaseAuditLogOptDto {
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
declare interface EventCaseAuditLogVOCollection {
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
declare interface EventCaseConsumeLogOptDto {
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
declare interface EventCaseConsumeLogOptDtoCollection {
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

/** EventCaseOpsDto */
declare interface EventCaseOpsDto {
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

/** 智能运维事件详情 */
declare interface EventDto {
  /** 事件id */
  Id: number;
  /** 基线、任务实例id */
  InstanceId: string;
  /** 产生事件时间 */
  EventTime: string;
  /** 事件名称 */
  EventName: string;
  /** 事件状态.取值范围:- new:表示新建 - processing:表示处理中 */
  EventStatus: string;
  /** 事件类别/(基线or任务).取值范围:- baseline: 表示基线- task: 表示任务 */
  EventType: string;
  /** 是否告警 */
  IsAlarm: string;
  /** 项目id */
  ProjectId: string;
  /** 所属任务/基线的名称 */
  BelongTo?: string;
  /** 基线、任务id */
  BaselineId?: number;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 租户id */
  AppId?: string | null;
  /** 当前用户uin */
  UserUin?: string | null;
  /** 主账号uin */
  OwnerUin?: string | null;
}

/** 事件监听器 */
declare interface EventListenerOpsDto {
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

/** 事件详情 */
declare interface EventOpsDto {
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

/** 智能运维事件分页查询 */
declare interface EventPage {
  /** 事件详情集合 */
  EventsResponse?: EventDto[] | null;
  /** 总条数 */
  TotalCount?: number;
}

/** 数据导出任务详情 */
declare interface ExportTaskInfo {
  /** 导出任务id */
  ExportTaskId?: number | null;
  /** 导出任务类型(1.全部,2.触发行,3.通过行) */
  TaskType?: number | null;
  /** 任务创建人 id */
  OperatorId?: number | null;
  /** 任务创建人昵称 */
  OperatorName?: string | null;
  /** 任务创建时间 */
  CreateTime?: string | null;
  /** 导出状态(1.已提交 2.导出中 3.导出成功 4.导出失败) */
  Status?: number | null;
  /** 调度任务id */
  SchedulerTaskId?: string | null;
  /** 调度时间 */
  SchedulerCurRunDate?: string | null;
  /** 文件相对路径 */
  FilePath?: string | null;
}

/** 字段变量 */
declare interface FieldConfig {
  /** 字段key */
  FieldKey?: string | null;
  /** 字段值 */
  FieldValue?: string | null;
  /** 字段值类型 */
  FieldDataType?: string | null;
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

/** 文件夹属性 */
declare interface FolderOpsDto {
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
  /** 采集器组ID */
  AgentGroupId: string | null;
  /** agent状态统计 */
  CvmAgentStatusList: CvmAgentStatus[] | null;
  /** agent数量 */
  AgentTotal: number | null;
  /** 生命周期 */
  LifeDays?: number | null;
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

/** 实例检索条件 */
declare interface InstanceCondition {
  /** 执行类型 */
  ExecutionSpace?: string | null;
  /** 任务产品类型 */
  ProductName?: string | null;
}

/** 下载日志详情 */
declare interface InstanceDownloadLogInfo {
  /** 文件名 */
  FileName?: string | null;
  /** 文件URL */
  FileUrl?: string | null;
}

/** 实例请求实体 */
declare interface InstanceInfo {
  /** 任务ID */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
}

/** 离线运维实例列表 */
declare interface InstanceList {
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
  /** 实例状态 */
  State?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 尝试运行次数 */
  TryLimit?: number | null;
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

/** 实例日志简述信息 */
declare interface InstanceLogInfo {
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
}

/** 实例日志信息详情 */
declare interface InstanceLogInfoOpsDto {
  /** 实例运行日志 */
  LogInfo: string | null;
  /** 实例运行提交的yarn日志地址 */
  YarnLogInfo: string[] | null;
  /** 实例运行产生的datax日志 */
  DataLogInfo: string | null;
  /** 第三方任务运行日志 */
  ThirdTaskRunLogInfo: string | null;
  /** 第三方任务日志链接描述 */
  ThirdTaskLogUrlDesc: string | null;
}

/** 实例日志信息 */
declare interface InstanceLogList {
  /** 任务ID */
  TaskId?: string | null;
  /** 数据时间 */
  CurRunDate?: string | null;
  /** 重试次数 */
  Tries?: string | null;
  /** 最后更新事件 */
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

/** 查询实时任务实例当前的节点信息 */
declare interface InstanceNodeInfo {
  /** 读取节点SOURCE 写入节点SINK */
  NodeType: string | null;
  /** 节点id */
  NodeId: string | null;
  /** 节点名称 */
  NodeName: string | null;
}

/** 实例运维详情 */
declare interface InstanceOpsDto {
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
}

/** 任务运行历史分页记录 */
declare interface InstanceOpsInfoPage {
  /** 总记录数 */
  TotalCount?: number | null;
  /** 记录列表 */
  Items?: InstanceOpsDto[] | null;
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

/** 实例检索条件 */
declare interface InstanceSearchCondition {
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
declare interface InstanceStatisticInfo {
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

/** 实例日志信息 */
declare interface IntegrationInstanceLog {
  /** 任务日志信息 */
  LogInfo?: string | null;
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
  /** schema别名 */
  Alias?: string | null;
  /** 字段备注 */
  Comment?: string | null;
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
  /** dataproxy url */
  DataProxyUrl?: string[] | null;
  /** 任务版本是否已提交运维 */
  Submit?: boolean | null;
  /** MYSQL */
  InputDatasourceType?: string | null;
  /** DLC */
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
  /** 资源分层情况： 0：进行中,1：成功 ,2：失败 */
  SwitchResource?: number | null;
  /** 读取阶段：0：全部全量,1：部分全量,2：全部增量 */
  ReadPhase?: number | null;
  /** 版本号 */
  InstanceVersion?: number | null;
}

/** 标签类型 */
declare interface Label {
  /** 类型值。 */
  Value: string;
  /** 类型名称。 */
  Text: string;
}

/** 血缘参数记录 */
declare interface LineageParamRecord {
  /** 字段名 */
  Name: string;
  /** 字段值 */
  Value: string | null;
}

/** 任务依赖边详情 */
declare interface LinkOpsDto {
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

/** 补录计划实例集合 */
declare interface MakePlanInstanceOpsDtoCollection {
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
declare interface MakePlanOpsDto {
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
}

/** 补录计划集合 */
declare interface MakePlanOpsDtoCollection {
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
declare interface MakePlanTaskOpsDto {
  /** 任务基本信息 */
  TaskBaseInfo?: TaskOpsDto | null;
  /** 补录计划该任务实例数 */
  InstanceCount?: number | null;
  /** 补录任务实例完成百分数 */
  CompletePercent?: number | null;
  /** 补录任务实例成功百分数 */
  SuccessPercent?: number | null;
}

/** 补录计划任务集合 */
declare interface MakePlanTaskOpsDtoCollection {
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

/** 操作返回结果 */
declare interface OperationOpsDto {
  /** 操作是否成功 */
  Result?: boolean | null;
  /** 操作结果详情 */
  ResultMsg?: string | null;
  /** 操作失败类型 */
  ErrorId?: string | null;
  /** 操作失败描述 */
  ErrorDesc?: string | null;
}

/** 任务信息 */
declare interface OpsTaskCanvasDto {
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
declare interface OpsTaskCanvasInfoList {
  /** 画布任务信息 */
  TasksList: OpsTaskCanvasDto[];
  /** 画布任务链接信息 */
  LinksList: OpsTaskLinkInfoDto[];
}

/** 任务分页查询 */
declare interface OpsTaskInfoPage {
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
declare interface OpsTaskLinkInfoDto {
  /** 下游任务id */
  TaskTo: string;
  /** 上游任务id */
  TaskFrom: string;
  /** 依赖边类型 1、“real_real”表示任务->任务；2、"virtual_real" 跨工作流任务->任务 */
  LinkType: string;
  /** 依赖边id */
  LinkId: string;
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

/** 键值对 */
declare interface PairDto {
  /** 键名 */
  Key: string | null;
  /** 值 */
  Value: string | null;
}

/** 参数参数 */
declare interface ParamInfo {
  /** 参数名 */
  ParamKey: string;
  /** 参数值 */
  ParamValue: string;
}

/** 分区参数 */
declare interface Partition {
  /** 分区转换策略 */
  Transform?: string;
  /** 分区字段名 */
  Name?: string;
  /** 策略参数 */
  TransformArgs?: string[];
}

/** 数据质量生产调度任务业务实体 */
declare interface ProdSchedulerTask {
  /** 生产调度任务工作流ID */
  WorkflowId: string | null;
  /** 生产调度任务Id */
  TaskId?: string | null;
  /** 生产调度任务名称 */
  TaskName?: string | null;
}

/** dlc建表属性 */
declare interface Property {
  /** key值 */
  Key: string;
  /** value值 */
  Value: string;
}

/** 质量评分 */
declare interface QualityScore {
  /** 综合分数 */
  CompositeScore: number | null;
  /** 评分分布 */
  ScoringDistribution: TableScoreStatisticsInfo[] | null;
  /** 总表数 */
  TotalTableNumber: number | null;
}

/** 质量评分趋势 */
declare interface QualityScoreTrend {
  /** 周期平均分 */
  AverageScore: number | null;
  /** 日评分列表 */
  DailyScoreList: DailyScoreInfo[] | null;
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

/** 实时任务同步速度趋势 */
declare interface RealTimeTaskSpeed {
  /** 同步速度条/s列表 */
  RecordsSpeedList: RecordsSpeed[];
  /** 同步速度字节/s列表 */
  BytesSpeedList: BytesSpeed[];
}

/** 通用记录字段 */
declare interface RecordField {
  /** 字段名称 */
  Name?: string;
  /** 字段值 */
  Value?: string;
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

/** 数据质量规则 */
declare interface Rule {
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
}

/** 规则配置 */
declare interface RuleConfig {
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
declare interface RuleDimCnt {
  /** 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
  Dim: number;
  /** count 数 */
  Cnt: number;
}

/** 规则维度数统计 */
declare interface RuleDimStat {
  /** 总数 */
  TotalCnt: number;
  /** 维度统计数 */
  DimCntList: RuleDimCnt[];
}

/** 规则执行配置 */
declare interface RuleExecConfig {
  /** 计算队列名称 */
  QueueName?: string | null;
  /** 执行资源组 */
  ExecutorGroupId?: string | null;
  /** 运行的执行引擎，不传时会请求该数据源下默认的执行引擎 */
  EngineType?: string | null;
}

/** 概览趋势结果 */
declare interface RuleExecDateStat {
  /** 统计日期 */
  StatDate: string;
  /** 告警数 */
  AlarmCnt: number;
  /** 阻塞数 */
  PipelineCnt: number;
}

/** 规则执行结果导出结果 */
declare interface RuleExecExportResult {
  /** 规则执行id */
  RuleExecId?: number | null;
  /** 导出任务列表 */
  ExportTasks?: ExportTaskInfo[] | null;
}

/** 规则执行日志 */
declare interface RuleExecLog {
  /** 是否完成 */
  Finished?: boolean | null;
  /** 内容 */
  Log: string | null;
}

/** 规则执行结果 */
declare interface RuleExecResult {
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
  TemplateName: string | null;
  /** 质量维度 */
  QualityDim: number | null;
  /** 目标表-库表名称 */
  TargetDBTableName: string | null;
  /** 目标表-字段名称 */
  TargetObjectValue: string | null;
  /** 目标表-字段类型 */
  TargetObjectDataType: string | null;
  /** 自定义模版sql表达式参数 */
  FieldConfig: RuleFieldConfig | null;
  /** 源字段与目标字段关联条件on表达式 */
  RelConditionExpr: string | null;
  /** 执行时间 */
  StartTime?: string | null;
  /** 1/2/3:低/中/高 */
  AlarmLevel?: number | null;
}

/** 规则执行结果详情 */
declare interface RuleExecResultDetail {
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
}

/** 规则执行结果分页 */
declare interface RuleExecResultPage {
  /** 记录数 */
  TotalCount: number | null;
  /** 规则执行结果 */
  Items: RuleExecResult[];
}

/** 规则运行情况结果 */
declare interface RuleExecStat {
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
declare interface RuleFieldConfig {
  /** where变量 */
  WhereConfig?: FieldConfig[] | null;
  /** 库表变量 */
  TableConfig?: TableConfig[] | null;
}

/** 数据质量规则组 */
declare interface RuleGroup {
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
}

/** 规则组执行结果 */
declare interface RuleGroupExecResult {
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
}

/** 规则组执行结果分页 */
declare interface RuleGroupExecResultPage {
  /** 记录数 */
  TotalCount?: number | null;
  /** 规则组执行结果 */
  Items?: RuleGroupExecResult[] | null;
}

/** 质量规则执行策略 */
declare interface RuleGroupExecStrategy {
  /** 规则组Id */
  RuleGroupId: number | null;
  /** 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测 */
  MonitorType: number | null;
  /** 计算队列 */
  ExecQueue: string | null;
  /** 执行资源组ID */
  ExecutorGroupId: string | null;
  /** 执行资源组名称 */
  ExecutorGroupName: string | null;
  /** 关联的生产调度任务列表 */
  Tasks: ProdSchedulerTask[] | null;
  /** 周期开始时间 */
  StartTime: string | null;
  /** 周期结束时间 */
  EndTime: string | null;
  /** 调度周期类型 */
  CycleType: string | null;
  /** 延迟调度时间 */
  DelayTime: number | null;
  /** 间隔 */
  CycleStep: number | null;
  /** 时间指定 */
  TaskAction: string | null;
  /** 运行的执行引擎，不传时会请求该数据源下默认的执行引擎 */
  ExecEngineType?: string | null;
  /** 执行计划 */
  ExecPlan?: string | null;
}

/** 规则组监控业务视图 */
declare interface RuleGroupMonitor {
  /** 规则组id */
  RuleGroupId?: number | null;
  /** 表guid */
  TableId?: string | null;
  /** 数据源id */
  DatasourceId?: number | null;
  /** 数据库guid */
  DatabaseId?: string | null;
  /** 监控类型 1.未配置, 2.关联生产调度, 3.离线周期检测 */
  MonitorType?: number | null;
  /** 监控状态 0.false 1.true */
  MonitorStatus?: number | null;
  /** 规则组创建人id */
  CreateUserId?: number | null;
  /** 规则组创建人昵称 */
  CreateUserName?: string | null;
  /** 规则创建时间 yyyy-MM-dd HH:mm:ss */
  CreateTime?: string | null;
}

/** 规则组监控业务分页视图 */
declare interface RuleGroupMonitorPage {
  /** 记录总数 */
  TotalCount?: number | null;
  /** 记录 */
  Items?: RuleGroupMonitor[] | null;
}

/** 规则组分页 */
declare interface RuleGroupPage {
  /** 记录数 */
  TotalCount: number | null;
  /** 规则组列表 */
  Items: RuleGroup[] | null;
}

/** 规则组调度信息 */
declare interface RuleGroupSchedulerInfo {
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
declare interface RuleGroupSubscribe {
  /** 规则组Id */
  RuleGroupId?: number | null;
  /** 订阅接收人列表 */
  Receivers?: SubscribeReceiver[] | null;
  /** 订阅方式 1.邮件email 2.短信sms */
  SubscribeType?: number[] | null;
  /** 群机器人配置的webhook信息 */
  WebHooks?: SubscribeWebHook[] | null;
}

/** 表绑定规则组信息 */
declare interface RuleGroupTable {
  /** 表信息 */
  TableInfo: RuleGroupTableInnerInfo | null;
  /** 规则组调度信息 */
  RuleGroups: RuleGroupSchedulerInfo[] | null;
  /** 订阅者信息 */
  Subscriptions: RuleGroupSubscribe[] | null;
}

/** 规则组关联表信息 */
declare interface RuleGroupTableInnerInfo {
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

/** 规则操作记录业务 */
declare interface RuleHistory {
  /** 规则ID */
  RuleId?: number | null;
  /** 变更时间 yyyy-MM-dd HH:mm:ss */
  AlterTime?: string | null;
  /** 变更内容 */
  AlterContent?: string | null;
  /** 操作账号UId */
  OperatorUserId?: number | null;
  /** 操作人名称 */
  OperatorName?: string | null;
}

/** 数据质量规则操作历史分页 */
declare interface RuleHistoryPage {
  /** 记录数 */
  TotalCount?: number | null;
  /** 规则操作历史列表 */
  Items?: RuleHistory[] | null;
}

/** 数据质量规则分页 */
declare interface RulePage {
  /** 记录数 */
  TotalCount?: number | null;
  /** 规则列表 */
  Items?: Rule[] | null;
}

/** 规则模版 */
declare interface RuleTemplate {
  /** 规则模版ID */
  RuleTemplateId: number;
  /** 规则模版名称 */
  Name: string;
  /** 规则模版描述 */
  Description: string;
  /** 模版类型（1：系统模版，2：自定义） */
  Type: number;
  /** 规则适用的源数据对象类型（1：常量，2：离线表级，3：离线字段级别） */
  SourceObjectType: number;
  /** 规则适用的源数据对象类型（1：数值，2：字符串） */
  SourceObjectDataType: number;
  /** 规则模版源侧内容，区分引擎，JSON 结构 */
  SourceContent: string | null;
  /** 源数据适用类型 */
  SourceEngineTypes: number[] | null;
  /** 规则所属质量维度（1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性） */
  QualityDim: number | null;
  /** 规则支持的比较方式类型（1：固定值比较，大于、小于，大于等于等 2：波动值比较，绝对值、上升、下降） */
  CompareType: number | null;
  /** 引用次数 */
  CitationCount: number | null;
  /** 创建人id */
  UserId: number | null;
  /** 创建人昵称 */
  UserName: string | null;
  /** 更新时间yyyy-MM-dd HH:mm:ss */
  UpdateTime: string | null;
  /** 是否添加where参数 */
  WhereFlag: boolean | null;
  /** 是否关联多个库表 */
  MultiSourceFlag: boolean | null;
  /** 自定义模板SQL表达式 */
  SqlExpression: string | null;
  /** 模版子维度，0.父维度类型,1.一致性: 枚举范围一致性,2.一致性：数值范围一致性,3.一致性：字段数据相关性 */
  SubQualityDim: number | null;
}

/** 规则模版变更历史记录视图 */
declare interface RuleTemplateHistory {
  /** 模版ID */
  TemplateId?: number;
  /** 版本 */
  Version?: number;
  /** 用户Id */
  UserId?: number;
  /** 用户昵称 */
  UserName?: string;
  /** 变更类型1.新增2.修改3.删除 */
  AlterType?: number;
  /** 变更内容 */
  AlterContent?: string;
}

/** 规则模版分页 */
declare interface RuleTemplateHistoryPage {
  /** 总记录数 */
  TotalCount?: number | null;
  /** 记录列表 */
  Items?: RuleTemplateHistory[] | null;
}

/** RuleTemplatePage 结果 */
declare interface RuleTemplatePage {
  /** 记录数 */
  TotalCount: number;
  /** 模版列表 */
  Items: RuleTemplate[];
}

/** 规则执行结果 */
declare interface RunnerRuleExecResult {
  /** rule id */
  RuleId: number;
  /** rule exec id */
  RuleExecId: number;
  /** exec state */
  State: string;
  /** 结果 */
  Data: string[];
}

/** 指定时间窗口实例耗时排行 */
declare interface RuntimeInstanceCntTop {
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

/** 实例统计信息展示 */
declare interface ScreenInstanceInfo {
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
}

/** 运维大屏任务展示 */
declare interface ScreenTaskInfo {
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
}

/** 开发空间-上传脚本请求 */
declare interface ScriptRequestInfo {
  /** 脚本路径 */
  FilePath?: string | null;
  /** 项目id */
  ProjectId?: string | null;
  /** 脚本版本 */
  Version?: string | null;
  /** 操作类型 */
  Operation?: string | null;
  /** 额外信息 */
  ExtraInfo?: string | null;
  /** 桶名称 */
  BucketName?: string | null;
  /** 所属地区 */
  Region?: string | null;
  /** 文件扩展类型 */
  FileExtensionType?: string | null;
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

/** 血缘列描述 */
declare interface SimpleColumnInfo {
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

/** 数据源对象 */
declare interface SimpleDataSourceInfo {
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
  /** 数据源类别：绑定引擎、绑定数据库 */
  Category: string | null;
  /** 数据源展示名，为了可视化查看 */
  Display: string | null;
  /** 数据源责任人账号ID */
  OwnerAccount: string | null;
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
  /** 是否有编辑权限 */
  Edit: boolean | null;
  /** 是否有授权权限 */
  Author: boolean | null;
  /** 是否有转交权限 */
  Deliver: boolean | null;
  /** 数据源状态 */
  DataSourceStatus: string | null;
  /** 认证项目名称 */
  AuthorityProjectName?: string | null;
  /** 认证用户名称 */
  AuthorityUserName?: string | null;
}

/** 简单Task信息 */
declare interface SimpleTaskInfo {
  /** 任务ID */
  TaskId: string;
  /** 任务名 */
  TaskName: string;
}

/** 上游节点字段信息 */
declare interface SourceFieldInfo {
  /** 字段名称 */
  FieldName?: string;
  /** 字段类型 */
  FieldType?: string;
  /** 字段别名 */
  Alias?: string;
  /** 字段描述 */
  Comment?: string | null;
}

/** 数据质量数据对象 */
declare interface SourceObject {
  /** 源字段详细类型，int、string */
  SourceObjectDataTypeName?: string | null;
  /** 源字段名称 */
  SourceObjectValue?: string | null;
  /** 源字段详细类型，int、string */
  ObjectDataTypeName?: string | null;
  /** 源字段名称 */
  ObjectValue?: string | null;
  /** 对象类型 1.常量 2.离线表级 3.离线字段级 */
  ObjectType?: number | null;
}

/** 速度值对象 */
declare interface SpeedValue {
  /** 带毫秒的时间戳 */
  Time: number | null;
  /** 无 */
  Speed: number | null;
}

/** map */
declare interface StrToStrMap {
  /** k */
  K?: string | null;
  /** v */
  V?: string | null;
}

/** string 数组 */
declare interface StringListNode {
  /** string数组 */
  PreviewRecord: string[] | null;
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

/** 订阅接收人 */
declare interface SubscribeReceiver {
  /** 接收人Uin */
  ReceiverUserId?: number | null;
  /** 接收人名称 */
  ReceiverName?: string | null;
}

/** 群机器人订阅配置 */
declare interface SubscribeWebHook {
  /** 群机器人类型，当前支持飞书 */
  HookType?: string | null;
  /** 群机器人webhook地址，配置方式参考https://cloud.tencent.com/document/product/1254/70736 */
  HookAddress?: string | null;
}

/** 建dlc表所需信息 */
declare interface TableBaseInfo {
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

/** 规则表变量替换 */
declare interface TableConfig {
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

/** 元数据表详细信息 */
declare interface TableInfo {
  /** 表Id */
  TableId: string | null;
  /** 表名称 */
  TableName: string | null;
  /** 表databaseName */
  OriginDatabaseName: string | null;
  /** 表schemaName */
  OriginSchemaName: string | null;
}

/** 表血缘详细信息 */
declare interface TableLineageInfo {
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

/** 表质量详情 */
declare interface TableQualityDetail {
  /** 数据库id */
  DatabaseId: string | null;
  /** 数据库名称 */
  DatabaseName: string | null;
  /** 表id */
  TableId: string | null;
  /** 表名称 */
  TableName: string | null;
  /** 表责任人ID */
  OwnerUserId: number | null;
  /** 表责任人名 */
  OwnerUserName: string | null;
  /** 库得分 */
  DatabaseScore: number | null;
  /** 表得分 */
  TableScore: number | null;
  /** 表环比 */
  LastPeriodRatio: number | null;
}

/** 表质量分分页结果 */
declare interface TableQualityDetailPage {
  /** 总条数 */
  TotalCount: number | null;
  /** 表质量列表 */
  Items: TableQualityDetail[] | null;
}

/** 表评分统计信息 */
declare interface TableScoreStatisticsInfo {
  /** 等级 1、2、3、4、5 */
  Level: number | null;
  /** 占比 */
  Scale: number | null;
  /** 表数量 */
  TableNumber: number | null;
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
  /** 告警方式,多个用逗号隔开（1:邮件，2:短信，3:微信，4:语音，5:代表企业微信，6:http） */
  AlarmWay: string;
  /** 任务类型(201表示实时，202表示离线) */
  TaskType: number;
  /** 主键ID */
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
}

/** 周期单位统计 */
declare interface TaskByCycle {
  /** num */
  Number?: number | null;
  /** 周期单位 */
  CycleUnit?: string | null;
  /** 项目ID */
  ProjectId?: string | null;
}

/** 状态趋势统计 */
declare interface TaskByStatus {
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
  /** UserId */
  UserId?: string | null;
  /** OwnerId */
  OwnerId?: string | null;
  /** TenantId */
  TenantId?: string | null;
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

/** 任务分页查询 */
declare interface TaskInfoPage {
  /** 页号 */
  PageNumber: number;
  /** 页大小 */
  PageSize: number;
  /** 工作流列表信息 */
  Items: TaskCanvasInfo[];
  /** 总页数 */
  TotalPage: number;
  /** 页数 */
  PageCount?: number;
  /** 总条数 */
  TotalCount?: number;
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

/** 任务实例状态统计 */
declare interface TaskInstanceCountDto {
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

/** 任务运维详情 */
declare interface TaskOpsDto {
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

/** TaskTypeCnt */
declare interface TaskTypeCnt {
  /** 统计值 */
  Number?: string | null;
  /** 任务类型 */
  TaskType?: string | null;
  /** 类型名称 */
  TypeName?: string | null;
}

/** 任务类型map */
declare interface TaskTypeMap {
  /** key */
  Key?: number;
  /** value */
  Value?: string;
}

/** 任务类型基本信息 */
declare interface TaskTypeOpsDto {
  /** 任务类型描述 */
  TypeDesc?: string | null;
  /** 任务类型id */
  TypeId?: number | null;
  /** 任务类型归类 */
  TypeSort?: string | null;
}

/** 任务实例基本信息 */
declare interface TaskVersionInstance {
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

/** 数据质量阈值 */
declare interface ThresholdValue {
  /** 阈值类型 1.低阈值 2.高阈值 3.普通阈值 4.枚举值 */
  ValueType?: number | null;
  /** 阈值 */
  Value?: string | null;
}

/** 质量概览表排行结果 */
declare interface TopTableStat {
  /** 告警表列表 */
  AlarmTables: TopTableStatItem[];
  /** 阻塞表列表 */
  PipelineTables: TopTableStatItem[];
}

/** 质量概览表排行元素 */
declare interface TopTableStatItem {
  /** 表Id */
  TableId: string;
  /** 表名 */
  TableName: string | null;
  /** 数 */
  Cnt: number;
}

/** 用户文件信息 */
declare interface UserFileDTO {
  /** 资源ID */
  ResourceId?: string | null;
  /** 文件名 */
  FileName?: string | null;
  /** 文件类型，如 jar zip 等 */
  FileExtensionType?: string | null;
  /** 文件上传类型，资源管理为 resource */
  FileUploadType?: string | null;
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
  LocalTmpPath?: string | null;
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
}

/** 开发空间-获取数据开发脚本信息响应体 */
declare interface UserFileInfo {
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
declare interface WeightInfo {
  /** 权重 */
  Weight: number;
  /** 维度类型 1：准确性，2：唯一性，3：完整性，4：一致性，5：及时性，6：有效性 */
  QualityDim: number;
}

/** 工作流运行信息 */
declare interface WorkFlowExecuteDto {
  /** 开始时间 */
  StartTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
  /** 工作流运行状态 0：等待运行、1：运行中、2：运行完成、3：运行出错 */
  Status?: number | null;
}

/** 分页查询工作流画布运行起止时间 */
declare interface WorkFlowExecuteDtoByPage {
  /** 总数 */
  TotalCount?: number | null;
  /** data */
  Items?: WorkFlowExecuteDto[] | null;
  /** 分页大小 */
  PageSize?: number | null;
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

/** 工作流画布详情 */
declare interface WorkflowCanvasOpsDto {
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
}

/** 工作流 */
declare interface WorkflowExtOpsDto {
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
}

/** 用户生产工作流列表分页 */
declare interface WorkflowExtOpsDtoPage {
  /** 记录总数 */
  TotalCount?: number | null;
  /** 记录列表 */
  Items?: WorkflowExtOpsDto[] | null;
}

/** 工作流调度详情 */
declare interface WorkflowSchedulerOpsDto {
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
declare interface WorkflowTaskCountOpsDto {
  /** 工作流任务数 */
  Count?: number | null;
  /** 任务类型维度统计 */
  TypeCount?: PairDto[] | null;
  /** 任务周期类型维度统计 */
  CycleCount?: PairDto[] | null;
}

declare interface BaselineDetailResponse {
  /** 1 */
  BaselineDto?: BaselineDto | null;
  /** 1 */
  BaselineCreateAlarmRuleRequest?: CreateAlarmRuleRequest | null;
  /** 无 */
  IsNewAlarm?: boolean | null;
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeleteIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 任务类型 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
  /** 是否删除开发态任务。默认不删除开发态，为 0 不删除 , 为 1 删除 */
  DeleteKFFlag?: number;
}

declare interface BatchDeleteIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount?: number | null;
  /** 操作失败的任务数 */
  FailedCount?: number | null;
  /** 任务总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeleteOpsTasksRequest {
  /** 批量删除的任务TaskId */
  TaskIdList: string[];
  /** true : 删除后下游任务可正常运行false：删除后下游任务不可运行 */
  DeleteMode: boolean;
  /** true：通知下游任务责任人false: 不通知下游任务责任人 */
  EnableNotify: boolean;
  /** 项目Id */
  ProjectId: string;
}

declare interface BatchDeleteOpsTasksResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data?: BatchOperationOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeleteTasksDsRequest {
  /** 批量删除的任务TaskId */
  TaskIdList: string[];
  /** true : 删除后下游任务可正常运行false：删除后下游任务不可运行 */
  DeleteMode?: boolean;
  /** true：通知下游任务责任人false: 不通知下游任务责任人 */
  OperateInform?: boolean;
  /** 项目Id */
  ProjectId?: string;
  /** true: 删除任务引用的脚本false: 不删除任务引用的脚本 */
  DeleteScript?: boolean;
}

declare interface BatchDeleteTasksDsResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data?: BatchOperateResult;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchModifyOpsOwnersRequest {
  /** 需要更新责任人的TaskId数组 */
  TaskIdList: string[];
  /** 需要更新的责任人 */
  Owners: string;
  /** 项目Id */
  ProjectId: string;
}

declare interface BatchModifyOpsOwnersResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data?: BatchOperationOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchRunOpsTaskRequest {
  /** 项目id */
  ProjectId: string;
  /** 是否补录中间实例,0不补录;1补录 */
  EnableMakeUp: number;
  /** 任务id列表 */
  Tasks: string[];
}

declare interface BatchRunOpsTaskResponse {
  /** 操作结果 */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchStopOpsTasksRequest {
  /** 批量停止任务的TaskId */
  TaskIdList: string[];
  /** 项目Id */
  ProjectId: string;
}

declare interface BatchStopOpsTasksResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data?: BatchOperationOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchStopWorkflowsByIdsRequest {
  /** 工作流id列表 */
  WorkflowIds: string[];
  /** 项目id */
  ProjectId: string;
}

declare interface BatchStopWorkflowsByIdsResponse {
  /** 操作返回结果 */
  Data?: OperationOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BooleanResponse {
  /** 是否成功 */
  Success?: boolean;
  /** 失败返回提示信息 */
  Message?: string | null;
}

declare interface CheckAlarmRegularNameExistRequest {
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
}

declare interface CheckAlarmRegularNameExistResponse {
  /** 是否重名 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckDuplicateRuleNameRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 规则组Id */
  RuleGroupId?: number;
  /** 规则名称 */
  Name?: string;
  /** 规则Id */
  RuleId?: number;
}

declare interface CheckDuplicateRuleNameResponse {
  /** 规则名称是否重复 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckDuplicateTemplateNameRequest {
  /** 规则模板ID */
  TemplateId?: number;
  /** 模板名称 */
  Name?: string;
  /** 项目Id */
  ProjectId?: string;
}

declare interface CheckDuplicateTemplateNameResponse {
  /** 是否重名 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CommitExportTaskRequest {
  /** 项目id */
  ProjectId?: string;
  /** 规则执行Id */
  RuleExecId?: number;
  /** 导出类型(1.全部,2.触发行,3.通过行) */
  ExportType?: number;
  /** 执行资源组id */
  ExecutorGroupId?: string;
  /** 计算资源队列 */
  QueueName?: string;
}

declare interface CommitExportTaskResponse {
  /** 提交结果 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 额外参数 */
  ExtConfig?: RecordField[];
  /** 提交版本描述 */
  VersionDesc?: string;
  /** 提交版本号 */
  InstanceVersion?: number;
}

declare interface CommitIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CommitRuleGroupExecResultRequest {
  /** preject id */
  ProjectId: string;
  /** rule group exec id */
  RuleGroupExecId: number;
  /** group exec state */
  RuleGroupState: string;
  /** runner rule exec result list */
  RuleExecResults: RunnerRuleExecResult[];
}

declare interface CommitRuleGroupExecResultResponse {
  /** 无 */
  Data: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CommitRuleGroupTaskRequest {
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

declare interface CommitRuleGroupTaskResponse {
  /** 规则组执行id */
  Data?: RuleGroupExecResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CountOpsInstanceStateRequest {
  /** 任务id */
  TaskId: string;
  /** 项目Id */
  ProjectId: string;
}

declare interface CountOpsInstanceStateResponse {
  /** 任务对应实例的状态统计 */
  Data?: TaskInstanceCountDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAlarmRuleRequest {
  /** 项目名称 */
  ProjectId?: string | null;
  /** 创建人名字 */
  CreatorId?: string | null;
  /** 创建人uin */
  Creator?: string | null;
  /** 规则名字 */
  RuleName?: string | null;
  /** 监控类型,1.task、2.workflow、3.project、4.baseline（默认为1.任务） */
  MonitorType?: number | null;
  /** 监控对象 */
  MonitorObjectIds?: string[] | null;
  /** 告警类型，1.失败告警、2.超时告警、3.成功告警、4.基线破线、5.基线预警、6.基线任务失败（默认1.失败告警） */
  AlarmTypes?: string[] | null;
  /** 告警级别，1.普通、2.重要、3.紧急（默认1.普通） */
  AlarmLevel?: number | null;
  /** 告警方式,1.邮件，2.短信，3.微信，4.语音，5.企业微信，6.Http，7.企业微信群；告警方式code列表（默认1.邮件） */
  AlarmWays?: string[] | null;
  /** 告警接收人类型：1.指定人员，2.任务责任人，3.值班表（默认1.指定人员） */
  AlarmRecipientType?: number | null;
  /** 告警接收人 */
  AlarmRecipients?: string[] | null;
  /** 告警接收人ID */
  AlarmRecipientIds?: string[] | null;
  /** 扩展信息, 1.预计运行耗时（默认），2.预计完成时间，3.预计调度时间，4.周期内未完成；取值类型：1.指定指，2.历史均值（默认1.指定指） */
  ExtInfo?: string | null;
}

declare interface CreateBaselineRequest {
  /** 项目id */
  ProjectId: string;
  /** 基线名称 */
  BaselineName: string;
  /** D或者H；分别表示天基线和小时基线 */
  BaselineType: string;
  /** 创建人id */
  CreateUin: string;
  /** 创建人名称 */
  CreateName: string;
  /** 基线负责人id */
  InChargeUin: string;
  /** 基线负责人名称 */
  InChargeName: string;
  /** 保障任务 */
  PromiseTasks: BaselineTaskInfo[];
  /** 保障时间 */
  PromiseTime: string;
  /** 告警余量/分钟 */
  WarningMargin: number;
  /** 1 */
  IsNewAlarm: boolean;
  /** 现有告警规则信息 */
  AlarmRuleDto?: AlarmRuleDto;
  /** 新增告警规则描述 */
  BaselineCreateAlarmRuleRequest?: CreateAlarmRuleRequest;
}

declare interface CreateBaselineResponse {
  /** 是否成功 */
  Data?: BooleanResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHiveTableRequest {
  /** 数据源id */
  DatasourceId: string;
  /** 数据库 */
  Database: string;
  /** base64转码之后的建表语句 */
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
  IsSuccess?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 任务ID */
  TaskId?: string | null;
  /** 结果 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOpsMakePlanRequest {
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
  /** 重新指定的调度资源组ID */
  SchedulerResourceGroup?: string;
  /** 重新指定的集成资源组ID */
  IntegrationResourceGroup?: string;
  /** 重新指定的调度资源组名称 */
  SchedulerResourceGroupName?: string;
  /** 重新指定的集成资源组名称 */
  IntegrationResourceGroupName?: string;
}

declare interface CreateOpsMakePlanResponse {
  /** 结果 */
  Data?: CommonIdOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOrUpdateResourceRequest {
  /** 项目ID，必填项 */
  ProjectId?: string;
  /** 文件名，必填项 */
  Files?: string[];
  /** 必填项，文件所属路径，资源管理根路径为 /datastudio/resource/项目ID/文件夹名 */
  FilePath?: string;
  /** cos存储桶名字 */
  CosBucketName?: string;
  /** cos所属地域 */
  CosRegion?: string;
  /** 是否为新文件，新增为 true，更新为 false */
  NewFile?: boolean;
  /** 必填项，文件大小，与 Files 字段对应 */
  FilesSize?: string[];
}

declare interface CreateOrUpdateResourceResponse {
  /** 响应数据 */
  Data?: UserFileDTO[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateResourcePathRequest {
  /** 文件夹名称，如 aaa */
  Name: string;
  /** 文件夹所属父目录，请注意，根目录为 /datastudio/resource */
  FilePath: string;
  /** 项目ID */
  ProjectId: string;
}

declare interface CreateResourcePathResponse {
  /** 新建成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRuleRequest {
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

declare interface CreateRuleResponse {
  /** 规则 */
  Data?: Rule | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRuleTemplateRequest {
  /** 模版类型 1.系统模版 2.自定义模版 */
  Type?: number;
  /** 模版名称 */
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

declare interface CreateRuleTemplateResponse {
  /** 模板Id */
  Data: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DagInstancesRequest {
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
}

declare interface DagInstancesResponse {
  /** 结果 */
  Data?: CollectionInstanceOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBaselineRequest {
  /** 基线id */
  BaselineId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DeleteBaselineResponse {
  /** 无 */
  Data?: BooleanResponse | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDataSourcesRequest {
  /** id列表 */
  Ids: number[];
}

declare interface DeleteDataSourcesResponse {
  /** 是否删除成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFilePathRequest {
  /** 项目ID */
  ProjectId: string;
  /** 资源ID */
  ResourceIds: string[];
  /** 使用状态 */
  UseStatus: string;
  /** 文件路径 */
  FilePaths?: string[];
}

declare interface DeleteFilePathResponse {
  /** 文件列表 */
  UserFileList?: UserFileInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFileRequest {
  /** 项目id */
  ProjectId: string;
  /** 资源id */
  ResourceId: string;
}

declare interface DeleteFileResponse {
  /** 删除结果 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInLongAgentRequest {
  /** 采集器ID */
  AgentId: string;
  /** WeData项目ID */
  ProjectId: string;
}

declare interface DeleteInLongAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Data?: boolean;
  /** 任务删除成功与否标识0表示删除成功1 表示失败，失败原因见 DeleteErrInfo100 表示running or suspend task can't be deleted失败，失败原因也会写到DeleteErrInfo里面 */
  DeleteFlag?: number | null;
  /** 删除失败原因 */
  DeleteErrInfo?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectParamDsRequest {
  /** 参数名 */
  ParamKey?: string;
  /** 项目id */
  ProjectId?: string;
}

declare interface DeleteProjectParamDsResponse {
  /** 结果 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteResourceFileRequest {
  /** 项目id */
  ProjectId: string;
  /** 资源id */
  ResourceId: string;
}

declare interface DeleteResourceFileResponse {
  /** 资源删除结果 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteResourceFilesRequest {
  /** 项目id */
  ProjectId: string;
  /** 使用状态 */
  UseStatus: boolean;
  /** 资源id列表 */
  ResourceIds?: string[];
  /** 资源路径列表 */
  FilePaths?: string[];
}

declare interface DeleteResourceFilesResponse {
  /** 资源批量删除结果 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRuleRequest {
  /** 质量规则ID */
  RuleId?: number;
  /** 项目ID */
  ProjectId?: string;
}

declare interface DeleteRuleResponse {
  /** 是否删除成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRuleTemplateRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 模版Id列表 */
  Ids?: number[];
}

declare interface DeleteRuleTemplateResponse {
  /** 删除成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTaskAlarmRegularRequest {
  /** 主键ID */
  Id: string;
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId?: string;
  /** 任务类型(201表示实时任务，202表示离线任务) */
  TaskType?: number;
}

declare interface DeleteTaskAlarmRegularResponse {
  /** 删除结果(true表示删除成功，false表示删除失败) */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTaskDsRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 是否删除脚本 */
  DeleteScript?: boolean;
  /** 任务操作是否消息通知下游任务责任人 */
  OperateInform?: boolean;
  /** 任务ID */
  TaskId?: string;
  /** 虚拟任务id */
  VirtualTaskId?: string;
  /** 虚拟任务标记 */
  VirtualFlag?: boolean;
  /** 任务删除方式 */
  DeleteMode?: boolean;
}

declare interface DeleteTaskDsResponse {
  /** 无 */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkflowByIdRequest {
  /** 工作流id */
  WorkflowId: string;
  /** 项目id */
  ProjectId: string;
  /** 删除后下游任务的处理方式，true:下游任务均正常运行 false:下游任务均运行失败 */
  DeleteMode?: boolean;
  /** 删除任务后是否通知下游任务责任人, true:通知 false:不通知 */
  EnableNotify?: boolean;
}

declare interface DeleteWorkflowByIdResponse {
  /** 删除结果 */
  Data?: OperationOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllByFolderNewRequest {
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

declare interface DescribeAllByFolderNewResponse {
  /** 结果集 */
  Data?: CollectionFolderOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllTaskTypeRequest {
  /** 项目ID */
  ProjectId?: string;
}

declare interface DescribeAllTaskTypeResponse {
  /** 任务类型 */
  Data?: TaskTypeOpsDto[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllUsedVersionSonRequest {
  /** 搜索条件 */
  SearchCondition: InstanceSearchCondition;
  /** 页码 */
  PageNumber: number;
  /** 分页大小 */
  PageSize: number;
}

declare interface DescribeAllUsedVersionSonResponse {
  /** 结果 */
  Data?: CollectionTaskOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineAllTaskDagRequest {
  /** 基线id */
  BaselineId: string;
  /** 1 */
  ProjectId: string;
}

declare interface DescribeBaselineAllTaskDagResponse {
  /** 基线 */
  Data?: DescribeBaselineTaskDagResponse | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineByIdRequest {
  /** 无 */
  BaselineId: string;
  /** 1 */
  ProjectId: string;
}

declare interface DescribeBaselineByIdResponse {
  /** 租户id */
  Data?: BaselineDetailResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineInstanceDagRequest {
  /** 基线实例id */
  BaselineInstanceId: number;
  /** 项目id */
  ProjectId: string;
  /** 要展开的上游实例id，格式为 taskIdA_curRunDate1,taskIdB_curRunDate2 */
  UpstreamInstanceIds?: string;
  /** 向上展开层级 */
  Level?: number;
}

declare interface DescribeBaselineInstanceDagResponse {
  /** 基线实例dag */
  Data?: BaselineInstanceVo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineInstanceGanttRequest {
  /** 基线实例id */
  BaselineInstanceId: number;
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeBaselineInstanceGanttResponse {
  /** 基线实例，带有关键任务实例信息 */
  Data?: BaselineInstanceVo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaselineInstancesRequest {
  /** 分页页码 */
  PageNumber: number;
  /** 分页大小 */
  PageSize: number;
  /** 过滤字段 */
  Filters: Filter[];
}

declare interface DescribeBaselineInstancesResponse {
  /** 基线实例数组 */
  BaselineInstances?: BaselineInstanceVo[] | null;
  /** 总数量 */
  TotalCount?: number | null;
}

declare interface DescribeBaselineResponse {
  /** 1 */
  Baselines?: BaselineDto[] | null;
  /** 1 */
  TotalCount?: number | null;
}

declare interface DescribeBaselineTaskDagResponse {
  /** 基线 */
  Baseline?: BaselineDto | null;
  /** 基线任务dag */
  BaselineTaskDag?: BaselineTaskDto[] | null;
}

declare interface DescribeBaselinesRequest {
  /** 无 */
  Filters: Filter[];
  /** 页面下标 */
  PageNumber: number;
  /** 页面大小 */
  PageSize: number;
}

declare interface DescribeBaselinesResponse {
  /** 基线列表 */
  Data?: DescribeBaselineResponse | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBatchOperateTaskRequest {
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
}

declare interface DescribeBatchOperateTaskResponse {
  /** 无 */
  Data?: DescribeBatchOperateTaskPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBelongToRequest {
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeBelongToResponse {
  /** 所属任务/基线 */
  Data?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeColumnLineageRequest {
  /** 查询方向，INPUT,OUTPUT,BOTH枚举值 */
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

declare interface DescribeColumnLineageResponse {
  /** 字段血缘信息 */
  ColumnAggregationLineage: ColumnAggregationLineage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataBasesRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 数据源id */
  DatasourceId?: string;
  /** 数据源类型 */
  DsTypes?: number[];
}

declare interface DescribeDataBasesResponse {
  /** 数据来源数据数据库列表 */
  Data: DatabaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataCheckStatRequest {
  /** Project id */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeDataCheckStatResponse {
  /** 结果 */
  Data: DataCheckStat;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataObjectsRequest {
  /** 数据来源ID */
  DatasourceId?: string;
  /** 数据表ID */
  TableId?: string;
  /** 质量规则组ID */
  RuleGroupId?: number;
  /** 项目ID */
  ProjectId?: string;
}

declare interface DescribeDataObjectsResponse {
  /** 数据对象列表 */
  Data: SourceObject[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 数据源信息列表。 */
  DatasourceSet?: DatasourceBaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseInfoListRequest {
  /** 过滤参数 */
  Filters: Filter[];
  /** 如果是hive这里写rpc，如果是其他类型不传 */
  ConnectionType: string;
}

declare interface DescribeDatabaseInfoListResponse {
  /** 数据库列表 */
  DatabaseInfo?: DatabaseInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatasourceRequest {
  /** 对象唯一ID */
  Id: number;
}

declare interface DescribeDatasourceResponse {
  /** 数据源对象 */
  Data: DataSourceInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDependOpsTaskListRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeDependOpsTaskListResponse {
  /** 任务列表 */
  Data?: TaskOpsDto[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDependOpsTasksRequest {
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

declare interface DescribeDependOpsTasksResponse {
  /** 画布任务和链接信息 */
  Data?: OpsTaskCanvasInfoList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDependTaskListsRequest {
  /** 任务Id列表 */
  TaskIds: string[];
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeDependTaskListsResponse {
  /** 删除结果 */
  Data?: TaskOpsDto[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiagnosticInfoByBaselineIdRequest {
  /** 基线id */
  BaselineId: string;
  /** 1 */
  ProjectId: string;
}

declare interface DescribeDiagnosticInfoByBaselineIdResponse {
  /** 基线任务dag */
  Data?: DescribeDiagnosticInfoResponse | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiagnosticInfoResponse {
  /** 1 */
  BaselineTasks?: BaselineTaskDto[] | null;
}

declare interface DescribeDimensionScoreRequest {
  /** 统计日期 时间戳 */
  StatisticsDate: number;
  /** 项目id */
  ProjectId: string;
  /** 数据来源id */
  DatasourceId?: string;
  /** 过滤参数 */
  Filters?: Filter[];
}

declare interface DescribeDimensionScoreResponse {
  /** 维度评分 */
  Data?: DimensionScore | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDrInstancePageRequest {
  /** 项目id */
  ProjectId: string;
  /** 任务来源 ADHOC || WORKFLOW */
  TaskSource: string;
  /** 索引页码 */
  PageIndex?: number;
  /** 页面大小 */
  PageSize?: number;
  /** 任务名称 */
  TaskName?: string;
  /** 提交开始时间 yyyy-MM-dd HH:mm:ss */
  StartTime?: string;
  /** 提交结束时间 yyyy-MM-dd HH:mm:ss */
  EndTime?: string;
  /** 文件夹id */
  FolderIds?: string[];
  /** 工作流id */
  WorkflowIds?: string[];
  /** 只看我的 */
  JustMe?: boolean;
  /** 任务类型 */
  TaskTypes?: string[];
  /** 试运行提交人userId列表 */
  SubmitUsers?: string[];
  /** 试运行状态 */
  StatusList?: string[];
}

declare interface DescribeDrInstancePageResponse {
  /** 结果集 */
  Data?: DrInstanceOpsDtoPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDrInstanceScriptContentRequest {
  /** 项目id */
  ProjectId: string;
  /** 任务来源 ADHOC || WORKFLOW */
  TaskSource: string;
  /** 试运行记录id */
  RecordId?: number;
  /** 试运行子记录id */
  SonRecordId?: number;
}

declare interface DescribeDrInstanceScriptContentResponse {
  /** 结果集 */
  Data?: DrInstanceOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDrSonInstanceRequest {
  /** 项目id */
  ProjectId: string;
  /** 任务来源 ADHOC || WORKFLOW */
  TaskSource: string;
  /** 试运行记录id */
  RecordId: number;
}

declare interface DescribeDrSonInstanceResponse {
  /** 结果集 */
  Data?: DrInstanceOpsDto[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventCasesRequest {
  /** 项目ID */
  ProjectId: string;
  /** 事件实例目录 */
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
  /** 事件实例状态 */
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
}

declare interface DescribeEventCasesResponse {
  /** 事件实例分页查询结果 */
  Data?: EventCaseAuditLogVOCollection | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventConsumeTasksRequest {
  /** 事件实例ID */
  EventCaseId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数目 */
  PageSize: number;
}

declare interface DescribeEventConsumeTasksResponse {
  /** 事件消费任务记录列表 */
  Data?: EventCaseConsumeLogOptDtoCollection | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventDetailRequest {
  /** 事件id */
  EventId: number;
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeEventDetailResponse {
  /** 事件详情 */
  Data?: EventDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventIsAlarmTypesRequest {
}

declare interface DescribeEventIsAlarmTypesResponse {
  /** 是否告警.取值范围- yes : 表示告警- no : 表示不告警 */
  Data?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventRequest {
  /** 项目ID */
  ProjectId: string;
  /** 事件名称 */
  EventName: string;
}

declare interface DescribeEventResponse {
  /** 事件 */
  Data?: EventOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventTypesRequest {
}

declare interface DescribeEventTypesResponse {
  /** 事件类型 */
  Data?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventsRequest {
  /** 分页页码 */
  PageNumber: number;
  /** 分页大小 */
  PageSize: number;
  /** 过滤字段 */
  Filters?: Filter[];
  /** 排序字段 */
  OrderFields?: OrderField[];
}

declare interface DescribeEventsResponse {
  /** 事件列表 */
  Data?: EventPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExecStrategyRequest {
  /** 规则组Id */
  RuleGroupId?: number;
  /** 项目Id */
  ProjectId?: string;
}

declare interface DescribeExecStrategyResponse {
  /** 规则组执行策略 */
  Data: RuleGroupExecStrategy | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFathersRequest {
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
}

declare interface DescribeFathersResponse {
  /** 结果集 */
  Data?: CollectionInstanceOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFunctionKindsRequest {
}

declare interface DescribeFunctionKindsResponse {
  /** 无 */
  Kinds: FunctionTypeOrKind[] | null;
  /** 无 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFunctionTypesRequest {
}

declare interface DescribeFunctionTypesResponse {
  /** 无 */
  Types: FunctionTypeOrKind[] | null;
  /** 无 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInLongAgentListRequest {
  /** WeData项目ID */
  ProjectId: string;
  /** 采集器ID */
  AgentId?: string;
  /** Agent Name */
  AgentName?: string;
  /** 集群类型，1：TKE Agent，2：BOSS SDK，默认：1，3：CVM，4：自建服务器 【传多个用逗号分割】 */
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
  /** agent类型【多个用逗号分隔】 */
  AgentTypes?: string;
}

declare interface DescribeInLongAgentListResponse {
  /** 采集器信息列表 */
  Items?: InLongAgentDetail[];
  /** 页码 */
  PageIndex?: number;
  /** 每页记录数 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInLongAgentVpcListRequest {
  /** WeData项目ID */
  ProjectId: string;
}

declare interface DescribeInLongAgentVpcListResponse {
  /** VPC列表 */
  VpcList: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInLongTkeClusterListRequest {
  /** WeData项目ID */
  ProjectId: string;
  /** TKE集群地域 */
  TkeRegion: string;
  /** 集群名称。多个名称用逗号连接。 */
  ClusterName?: string;
  /** TKE集群状态 (Running 运行中 Creating 创建中 Idling 闲置中 Abnormal 异常 Failed 失败 Deleting 删除中 Scaling 规模调整中 Upgrading 升级中 Isolated 欠费隔离中 NodeUpgrading 节点升级中 Recovering 唤醒中 Activating 激活中 MasterScaling Master扩缩容中 Waiting 等待注册 ClusterLevelUpgrading 调整规格中 ResourceIsolate 隔离中 ResourceIsolated 已隔离 ResourceReverse 冲正中 Trading 集群开通中 ResourceReversal 集群冲正 ClusterLevelTrading 集群变配交易中)多个状态用逗号连接。 */
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
  Items?: InLongTkeDetail[];
  /** 页码 */
  PageIndex?: number;
  /** 每页记录数 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPage?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceByCycleReportRequest {
  /** 周期类型 */
  Type: string;
  /** 项目ID */
  ProjectId: string;
  /** 开始日期 */
  StartTime?: string;
  /** 结束日期 */
  EndTime?: string;
}

declare interface DescribeInstanceByCycleReportResponse {
  /** 实例周期统计 */
  Data?: TaskByStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceByCycleRequest {
  /** 1 */
  ProjectId?: string;
  /** 1 */
  TenantId?: string;
}

declare interface DescribeInstanceByCycleResponse {
  /** 统计结果 */
  Data?: TaskByCycle[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceListRequest {
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

declare interface DescribeInstanceListResponse {
  /** 结果 */
  Data?: string;
  /** 实例列表 */
  InstanceList?: InstanceList[] | null;
  /** 总条数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceLogDetailRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务id */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
  /** 服务器Ip */
  BrokerIp: string;
  /** 文件Name */
  OriginFileName: string;
}

declare interface DescribeInstanceLogDetailResponse {
  /** 日志结果 */
  Data?: InstanceLogInfoOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceLogFileRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 实例数据时间 */
  CurRunDate: string;
  /** 执行机IP */
  BrokerIp: string;
  /** 日志文件名 */
  OriginFileName: string;
}

declare interface DescribeInstanceLogFileResponse {
  /** 下载文件详情 */
  Data?: InstanceDownloadLogInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Data?: string;
  /** 日志列表 */
  InstanceLogList?: InstanceLogList[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Data?: string;
  /** 返回结果 */
  InstanceLogInfo?: IntegrationInstanceLog | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesInfoWithTaskInfoRequest {
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
}

declare interface DescribeInstancesInfoWithTaskInfoResponse {
  /** 结果集 */
  Data?: InstanceOpsDto[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 项目id */
  ProjectId?: string;
  /** 页数 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeInstancesResponse {
  /** Json 结果 */
  Data: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** 任务类型：201. stream, 202. offline */
  TaskType?: number;
  /** 提交版本号 */
  InstanceVersion?: number;
}

declare interface DescribeIntegrationTaskResponse {
  /** 任务信息 */
  TaskInfo?: IntegrationTaskInfo | null;
  /** 采集器统计信息 */
  AgentStatus?: AgentStatus | null;
  /** 任务版本信息 */
  TaskVersion?: TaskVersionInstance | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TaskInfoSet?: IntegrationTaskInfo[] | null;
  /** 任务总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKafkaTopicInfoRequest {
  /** 数据源id */
  DatasourceId: string;
  /** 数据源类型 */
  Type: string;
}

declare interface DescribeKafkaTopicInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMonitorsByPageRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 分页大小 */
  PageSize?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 排序条件 */
  OrderFields?: OrderField[];
  /** 分页序号 */
  PageNumber?: number;
}

declare interface DescribeMonitorsByPageResponse {
  /** 分页查询结果 */
  Data: RuleGroupMonitorPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOfflineTaskTokenRequest {
}

declare interface DescribeOfflineTaskTokenResponse {
  /** 长连接临时token */
  Token: string;
  /** 长连接临时token。与Token相同含义，优先取Data，Data为空时，取Token。 */
  Data: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOperateOpsTaskDatasourceRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务类型ID */
  TaskType: number;
  /** 数据源来源/去向 */
  ServiceKind?: string;
  /** 数据源类型 */
  ServiceType?: string;
}

declare interface DescribeOperateOpsTaskDatasourceResponse {
  /** 数据源信息 */
  Data?: SimpleDataSourceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOperateOpsTaskDatasourceTypeRequest {
  /** 项目ID */
  ProjectId: string;
  /** 任务类型ID */
  TaskType: number;
  /** 数据源来源/去向 */
  ServiceKind?: string;
}

declare interface DescribeOperateOpsTaskDatasourceTypeResponse {
  /** 数据源信息 */
  Data?: DatasourceTypeByTaskType[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOperateOpsTasksRequest {
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
}

declare interface DescribeOperateOpsTasksResponse {
  /** 任务列表信息 */
  Data?: OpsTaskInfoPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOperateTasksRequest {
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
}

declare interface DescribeOperateTasksResponse {
  /** 任务列表信息 */
  Data?: TaskInfoPage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOpsInstanceLogListRequest {
  /** 任务id */
  TaskId: string;
  /** 数据时间 */
  CurRunDate: string;
}

declare interface DescribeOpsInstanceLogListResponse {
  /** 实例日志列表 */
  Data?: InstanceLogInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOpsMakePlanInstancesRequest {
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
}

declare interface DescribeOpsMakePlanInstancesResponse {
  /** 补录计划实例分页查询结果 */
  Data?: MakePlanInstanceOpsDtoCollection | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOpsMakePlanTasksRequest {
  /** 项目ID */
  ProjectId: string;
  /** 补录计划ID */
  PlanId: string;
  /** 分页页码，默认值1 */
  PageNumber?: number;
  /** 分页大小，默认值10 */
  PageSize?: number;
}

declare interface DescribeOpsMakePlanTasksResponse {
  /** 补录计划任务分页查询结果 */
  Data?: MakePlanTaskOpsDtoCollection | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOpsMakePlansRequest {
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
}

declare interface DescribeOpsMakePlansResponse {
  /** 补录计划分页查询结果 */
  Data?: MakePlanOpsDtoCollection | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOpsWorkflowsRequest {
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
}

declare interface DescribeOpsWorkflowsResponse {
  /** 工作流列表 */
  Data?: WorkflowExtOpsDtoPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProdTasksRequest {
  /** 项目ID */
  ProjectId?: string;
  /** 页面大小 */
  PageSize?: number;
  /** 分页序号 */
  PageNumber?: number;
  /** 过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeProdTasksResponse {
  /** 生产调度任务列表 */
  Data: ProdSchedulerTask[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQualityScoreRequest {
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

declare interface DescribeQualityScoreResponse {
  /** 质量评分 */
  Data?: QualityScore | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQualityScoreTrendRequest {
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

declare interface DescribeQualityScoreTrendResponse {
  /** 质量评分趋势视图 */
  Data?: QualityScoreTrend | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRealTimeTaskMetricOverviewRequest {
  /** 要查看的实时任务的任务Id */
  TaskId: string;
  /** 无 */
  ProjectId: string;
  /** 开始时间 */
  StartTime?: number;
  /** 结束时间 */
  EndTime?: number;
}

declare interface DescribeRealTimeTaskMetricOverviewResponse {
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
  /** 同步速度，包括了RecordsSpeedList和BytesSpeedList */
  Data: RealTimeTaskSpeed;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleDataSourcesRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 数据来源Id */
  DatasourceId?: string;
  /** 数据源类型 */
  DsTypes?: number[];
}

declare interface DescribeRuleDataSourcesResponse {
  /** 数据源列表 */
  Data: DatabaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleDimStatRequest {
  /** Project Id */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeRuleDimStatResponse {
  /** 结果 */
  Data: RuleDimStat;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleExecDetailRequest {
  /** 项目id */
  ProjectId?: string;
  /** 规则执行id */
  RuleExecId?: number;
}

declare interface DescribeRuleExecDetailResponse {
  /** 规则执行结果详情 */
  Data: RuleExecResultDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleExecExportResultRequest {
  /** 项目id */
  ProjectId?: string;
  /** 规则执行id */
  RuleExecId?: number;
}

declare interface DescribeRuleExecExportResultResponse {
  /** 导出结果 */
  Data: RuleExecExportResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleExecHistoryRequest {
  /** 规则Id */
  RuleId?: number;
  /** 项目Id */
  ProjectId?: string;
}

declare interface DescribeRuleExecHistoryResponse {
  /** 规则执行结果列表 */
  Data: RuleExecResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleExecLogRequest {
  /** 规则执行Id */
  RuleExecId: number;
  /** 项目id */
  ProjectId: string;
  /** 规则组执行id */
  RuleGroupExecId: number;
}

declare interface DescribeRuleExecLogResponse {
  /** 规则执行日志 */
  Data: RuleExecLog | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleExecResultsByPageRequest {
  /** 执行规则组ID */
  RuleGroupExecId?: number;
  /** page number */
  PageNumber?: number;
  /** page size */
  PageSize?: number;
}

declare interface DescribeRuleExecResultsByPageResponse {
  /** results */
  Data: RuleExecResultPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleExecResultsRequest {
  /** 规则组执行Id */
  RuleGroupExecId?: number;
  /** 项目Id */
  ProjectId?: string;
}

declare interface DescribeRuleExecResultsResponse {
  /** 规则执行结果列表 */
  Data: RuleExecResultPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleExecStatRequest {
  /** ProjectId 值 */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeRuleExecStatResponse {
  /** 结果 */
  Data: RuleExecStat;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleGroupExecResultsByPageRequest {
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

declare interface DescribeRuleGroupExecResultsByPageResponse {
  /** 规则组执行结果列表 */
  Data: RuleGroupExecResultPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleGroupExecResultsByPageWithoutAuthRequest {
  /** 分页序号 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 过滤条件，指定表ID过滤字段为 TableIds */
  Filters?: Filter[];
  /** 排序字段 */
  OrderFields?: OrderField[];
  /** 项目ID */
  ProjectId?: string;
}

declare interface DescribeRuleGroupExecResultsByPageWithoutAuthResponse {
  /** 规则组执行结果列表 */
  Data: RuleGroupExecResultPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleGroupRequest {
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

declare interface DescribeRuleGroupResponse {
  /** 数据质量规则组详情 */
  Data: RuleGroup | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleGroupSubscriptionRequest {
  /** 规则组ID */
  RuleGroupId?: number;
  /** 项目ID */
  ProjectId?: string;
}

declare interface DescribeRuleGroupSubscriptionResponse {
  /** 规则组订阅信息 */
  Data?: RuleGroupSubscribe | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleGroupTableRequest {
  /** 表ID */
  TableId: string;
}

declare interface DescribeRuleGroupTableResponse {
  /** 数据 */
  Data: RuleGroupTable | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleGroupsByPageRequest {
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

declare interface DescribeRuleGroupsByPageResponse {
  /** 规则组列表 */
  Data: RuleGroupPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleHistoryByPageRequest {
  /** 项目ID */
  ProjectId?: string;
  /** 分页序号 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeRuleHistoryByPageResponse {
  /** 规则组操作历史列表 */
  Data: RuleHistoryPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleRequest {
  /** 质量规则ID */
  RuleId?: number;
  /** 项目ID */
  ProjectId?: string;
}

declare interface DescribeRuleResponse {
  /** 规则详情 */
  Data: Rule | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleTablesByPageRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 分页序号 */
  PageSize?: number;
  /** 分页大小 */
  PageNumber?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 排序条件 */
  OrderFields?: OrderField[];
}

declare interface DescribeRuleTablesByPageResponse {
  /** 表列表 */
  Data: RuleGroupPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleTemplateRequest {
  /** 项目ID */
  ProjectId?: string;
  /** 规则模板Id */
  TemplateId?: number;
}

declare interface DescribeRuleTemplateResponse {
  /** 模板详情 */
  Data: RuleTemplate | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleTemplatesByPageRequest {
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

declare interface DescribeRuleTemplatesByPageResponse {
  /** 结果 */
  Data: RuleTemplatePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleTemplatesRequest {
  /** 模版类型 1.系统模版 2.自定义模版 */
  Type?: number;
  /** 1.常量 2.离线表级 2.离线字段级 */
  SourceObjectType?: number;
  /** 项目Id */
  ProjectId?: string;
  /** 源端对应的引擎类型 */
  SourceEngineTypes?: number[];
}

declare interface DescribeRuleTemplatesResponse {
  /** 规则模版列表 */
  Data: RuleTemplate[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesByPageRequest {
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

declare interface DescribeRulesByPageResponse {
  /** 规则质量列表 */
  Data: RulePage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRulesRequest {
  /** 项目id */
  ProjectId?: string;
  /** 规则组id */
  RuleGroupId?: number;
  /** 该规则运行的执行引擎，不传时会请求该数据源下默认的执行引擎 */
  EngineType?: string;
}

declare interface DescribeRulesResponse {
  /** 规则列表 */
  Data?: Rule[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScheduleInstanceRequest {
  /** 基线id */
  TaskId: string;
  /** 任务实例数据时间 */
  CurRunDate: string;
}

declare interface DescribeScheduleInstanceResponse {
  /** 基线实例中的调度任务实例信息 */
  Data?: InstanceOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScheduleInstancesRequest {
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
}

declare interface DescribeScheduleInstancesResponse {
  /** 实例结果集 */
  Data?: CollectionInstanceOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSchedulerInstanceStatusRequest {
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
}

declare interface DescribeSchedulerInstanceStatusResponse {
  /** 响应数据 */
  Data?: ScreenInstanceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSchedulerRunTimeInstanceCntByStatusRequest {
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
  /** 1 */
  TaskType?: number;
  /** 1 */
  InCharge?: string;
}

declare interface DescribeSchedulerRunTimeInstanceCntByStatusResponse {
  /** 响应数据 */
  Data?: RuntimeInstanceCntTop[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSchedulerTaskCntByStatusRequest {
  /** 1 */
  TaskType?: number;
  /** Y */
  TypeName?: string;
  /** 111 */
  ProjectId?: string;
  /** 1 */
  InCharge?: string;
}

declare interface DescribeSchedulerTaskCntByStatusResponse {
  /** 统计结果 */
  Data?: ScreenTaskInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSchedulerTaskTypeCntRequest {
  /** 项目ID */
  ProjectId: string;
  /** 1 */
  InCharge?: string;
}

declare interface DescribeSchedulerTaskTypeCntResponse {
  /** data */
  Data?: TaskTypeCnt[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSonInstancesRequest {
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
}

declare interface DescribeSonInstancesResponse {
  /** 结果集 */
  Data?: CollectionInstanceOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStatisticInstanceStatusTrendOpsRequest {
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
}

declare interface DescribeStatisticInstanceStatusTrendOpsResponse {
  /** 实例状态统计结果 */
  Data?: InstanceStatisticInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSuccessorOpsTaskInfosRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeSuccessorOpsTaskInfosResponse {
  /** 下游任务列表 */
  Data?: TaskOpsDto[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableLineageRequest {
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

declare interface DescribeTableLineageResponse {
  /** 表血缘信息 */
  TableLineage?: TableLineageInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableQualityDetailsRequest {
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

declare interface DescribeTableQualityDetailsResponse {
  /** 表质量分详情结果 */
  Data?: TableQualityDetailPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableScoreTrendRequest {
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

declare interface DescribeTableScoreTrendResponse {
  /** 表得分趋势 */
  Data?: QualityScoreTrend | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskAlarmRegulationsRequest {
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

declare interface DescribeTaskAlarmRegulationsResponse {
  /** 告警规则信息 */
  TaskAlarmInfos?: TaskAlarmInfo[] | null;
  /** 总记录数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskByCycleReportRequest {
  /** 项目id */
  ProjectId: string;
  /** 任务周期类型 */
  Type?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

declare interface DescribeTaskByCycleReportResponse {
  /** 任务周期增长趋势统计 */
  Data?: TaskByStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskByCycleRequest {
  /** 项目ID */
  ProjectId: string;
  /** 1 */
  InCharge?: string;
}

declare interface DescribeTaskByCycleResponse {
  /** 周期任务统计值 */
  Data?: TaskByCycle[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskByStatusReportRequest {
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
  /** 无 */
  AggregationUnit?: string;
  /** 无 */
  CycleUnit?: string;
  /** 无 */
  Status?: string;
  /** 无 */
  InCharge?: string;
}

declare interface DescribeTaskByStatusReportResponse {
  /** 任务上报趋势指标 */
  Data?: TaskByStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TaskInstanceDetail?: TaskInstanceDetail;
  /** 任务实例详情。与TaskInstanceDetail相同含义，优先取Data，Data为空时，取TaskInstanceDetail */
  Data?: TaskInstanceDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskRunHistoryRequest {
  /** 项目id */
  ProjectId: string;
  /** 检索条件 */
  SearchCondition: InstanceSearchCondition;
  /** 分页大小 */
  PageSize: number;
  /** 分页页码 */
  PageNumber: number;
}

declare interface DescribeTaskRunHistoryResponse {
  /** 分页查询任务运行历史结果 */
  Data?: InstanceOpsInfoPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplateDimCountRequest {
  /** 模版类型 */
  Type?: number;
  /** 项目ID */
  ProjectId?: string;
}

declare interface DescribeTemplateDimCountResponse {
  /** 维度统计结果 */
  Data: DimensionCount[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplateHistoryRequest {
  /** 分页序号 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 项目Id */
  ProjectId?: string;
}

declare interface DescribeTemplateHistoryResponse {
  /** 分页记录 */
  Data: RuleTemplateHistoryPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeThirdTaskRunLogRequest {
  /** 任务ID */
  TaskId: string;
  /** 实例数据时间 */
  CurRunDate: string;
}

declare interface DescribeThirdTaskRunLogResponse {
  /** 获取第三方运行日志 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTopTableStatRequest {
  /** Project Id */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeTopTableStatResponse {
  /** 结果 */
  Data: TopTableStat;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrendStatRequest {
  /** Project id */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeTrendStatResponse {
  /** 结果 */
  Data: RuleExecDateStat[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkflowCanvasInfoRequest {
  /** 工作流id */
  WorkflowId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeWorkflowCanvasInfoResponse {
  /** 工作流调度详情 */
  Data?: WorkflowCanvasOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkflowExecuteByIdRequest {
  /** 项目ID */
  ProjectId: string;
  /** 工作流ID */
  WorkFlowIdList?: string;
  /** 分页大小 */
  PageNumber?: number;
  /** 分页索引 */
  PageSize?: number;
}

declare interface DescribeWorkflowExecuteByIdResponse {
  /** 工作流运行时间信息 */
  Data?: WorkFlowExecuteDtoByPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkflowInfoByIdRequest {
  /** 工作流id */
  WorkflowId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeWorkflowInfoByIdResponse {
  /** 工作流调度详情 */
  Data?: WorkflowSchedulerOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkflowListByProjectIdRequest {
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeWorkflowListByProjectIdResponse {
  /** 根据项目id获取项目下所有工作流列表 */
  Data?: WorkflowCanvasOpsDto[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkflowOpsCanvasInfoRequest {
  /** 工作流id */
  WorkflowId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeWorkflowOpsCanvasInfoResponse {
  /** 删除结果 */
  Data?: WorkflowCanvasOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkflowTaskCountRequest {
  /** 工作流列表 */
  WorkflowId: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeWorkflowTaskCountResponse {
  /** 统计结果 */
  Data?: WorkflowTaskCountOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DiagnosePlusRequest {
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
}

declare interface DiagnosePlusResponse {
  /** 结果 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EditBaselineRequest {
  /** 项目id */
  ProjectId: string;
  /** 基线名称 */
  BaselineName: string;
  /** D或者H；分别表示天基线和小时基线 */
  BaselineType: string;
  /** 基线负责人id */
  InChargeUin: string;
  /** 基线负责人名称 */
  InChargeName: string;
  /** 保障任务 */
  PromiseTasks: BaselineTaskInfo[];
  /** 保障时间 */
  PromiseTime: string;
  /** 告警余量/分钟 */
  WarningMargin: number;
  /** 基线id */
  BaselineId: string;
  /** 更新人id */
  UpdateUin: string;
  /** 更新人名字 */
  UpdateName: string;
  /** 无 */
  IsNewAlarm: boolean;
  /** 现有告警规则信息 */
  AlarmRuleDto?: AlarmRuleDto;
  /** 告警更新请求 */
  BaselineModifyAlarmRuleRequest?: ModifyAlarmRuleRequest;
}

declare interface EditBaselineResponse {
  /** 1 */
  Data?: BooleanResponse | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ForceSucScheduleInstancesRequest {
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
}

declare interface ForceSucScheduleInstancesResponse {
  /** 结果 */
  Data?: BatchOperateResultOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FreezeOpsTasksRequest {
  /** 任务列表 */
  Tasks: SimpleTaskInfo[];
  /** 任务操作是否消息通知下游任务责任人 */
  OperateIsInform: boolean;
}

declare interface FreezeOpsTasksResponse {
  /** 操作结果 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FreezeTasksByMultiWorkflowRequest {
  /** 工作流Id集合 */
  WorkFlowIds: string[];
}

declare interface FreezeTasksByMultiWorkflowResponse {
  /** 操作结果 */
  Data: OperateResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FreezeTasksByWorkflowIdsRequest {
  /** 工作流id列表 */
  WorkflowIds: string[];
  /** 项目id */
  ProjectId: string;
}

declare interface FreezeTasksByWorkflowIdsResponse {
  /** 操作返回结果 */
  Data?: OperationOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
}

declare interface GenHiveTableDDLSqlResponse {
  /** 生成的ddl语句 */
  DDLSql?: string;
  /** 生成的ddl语句。与DDLSql相同含义，优先取Data，如果Data为空，则取DDLSql。 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstanceApiOpsRequest {
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillOpsMakePlanInstancesRequest {
  /** 项目ID */
  ProjectId: string;
  /** 补录计划ID */
  PlanId: string;
}

declare interface KillOpsMakePlanInstancesResponse {
  /** 批量操作结果 */
  Data?: BatchOperateResultOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillScheduleInstancesRequest {
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
}

declare interface KillScheduleInstancesResponse {
  /** 结果 */
  Data?: BatchOperateResultOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MakeUpOpsTasksRequest {
  /** 补录的当前任务的taskId数组 */
  TaskIdList: string[];
  /** 补录开始时间 */
  StartTime: string;
  /** 补录结束时间 */
  EndTime: string;
  /** 项目Id */
  ProjectId: string;
  /** true: 检查父任务实例状态；false: 不检查父任务实例状态 */
  CheckParent?: boolean;
}

declare interface MakeUpOpsTasksResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data?: BatchOperationOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MakeUpTasksByWorkflowRequest {
  /** 工作流id */
  WorkflowId: string;
  /** 项目id */
  ProjectId: string;
  /** 补数据开始时间 格式：2023-03-02 15:00:00 */
  StartTime: string;
  /** 补数据结束时间 格式：2023-03-03 15:00:00 */
  EndTime: string;
}

declare interface MakeUpTasksByWorkflowResponse {
  /** 补数据结果 */
  Data?: BatchOperationOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAlarmRuleRequest {
  /** 告警id */
  AlarmId?: string | null;
  /** 规则名字 */
  RuleName?: string | null;
  /** 监控类型,1.task、2.workflow、3.project、4.baseline（默认为1.任务） */
  MonitorType?: number | null;
  /** 监控对象 */
  MonitorObjectIds?: string[] | null;
  /** 告警类型，1.失败告警、2.超时告警、3.成功告警、4.基线破线、5.基线预警、6.基线任务失败（默认1.失败告警） */
  AlarmTypes?: string[] | null;
  /** 告警级别，1.普通、2.重要、3.紧急（默认1.普通） */
  AlarmLevel?: number | null;
  /** 告警方式,1.邮件，2.短信，3.微信，4.语音，5.企业微信，6.Http，7.企业微信群；告警方式code列表（默认1.邮件） */
  AlarmWays?: string[] | null;
  /** 告警接收人类型：1.指定人员，2.任务责任人，3.值班表（默认1.指定人员） */
  AlarmRecipientType?: number | null;
  /** 告警接收人 */
  AlarmRecipients?: string[] | null;
  /** 告警接收人ID */
  AlarmRecipientIds?: string[] | null;
  /** 扩展信息, 1.预计运行耗时（默认），2.预计完成时间，3.预计调度时间，4.周期内未完成；取值类型：1.指定指，2.历史均值（默认1.指定指） */
  ExtInfo?: string | null;
}

declare interface ModifyBaselineAlarmStatusRequest {
  /** 是否告警. 取值范围:- true: 开启告警;- false: 关闭告警 */
  IsAlarm: string;
  /** 基线实例id */
  Id: number;
  /** 项目id */
  ProjectId: string;
}

declare interface ModifyBaselineAlarmStatusResponse {
  /** 成功或失败 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBaselineTaskAlarmStatusRequest {
  /** 是否告警. 取值范围:- true: 开启告警;- false: 关闭告警 */
  IsAlarm: string;
  /** 基线任务实例id */
  Id: number;
  /** 项目id */
  ProjectId: string;
}

declare interface ModifyBaselineTaskAlarmStatusResponse {
  /** 成功或失败 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDimensionWeightRequest {
  /** 权重信息列表 */
  WeightInfoList: WeightInfo[];
  /** 项目id */
  ProjectId: string;
  /** 是否重刷历史数据 */
  Refresh: boolean;
}

declare interface ModifyDimensionWeightResponse {
  /** 更新权重是否成功 */
  Data: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyExecStrategyRequest {
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
}

declare interface ModifyExecStrategyResponse {
  /** 规则组ID */
  Data?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMonitorStatusRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 规则组ID */
  RuleGroupId?: number;
  /** 监控开关状态 */
  MonitorStatus?: boolean;
}

declare interface ModifyMonitorStatusResponse {
  /** 监控状态修改成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleGroupSubscriptionRequest {
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

declare interface ModifyRuleGroupSubscriptionResponse {
  /** 规则组ID */
  Data?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleRequest {
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
}

declare interface ModifyRuleResponse {
  /** 是否更新成功 */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleTemplateRequest {
  /** 模版ID */
  TemplateId?: number;
  /** 模版类型 1.系统模版 2.自定义模版 */
  Type?: number;
  /** 模版名称 */
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

declare interface ModifyRuleTemplateResponse {
  /** 修改成功 */
  Data: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ProjectBaseInfoOpsRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 项目标识 */
  ProjectIdent?: string;
  /** 项目名称 */
  ProjectName?: string;
  /** 是否admin */
  IsAdmin?: boolean;
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveWorkflowDsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 工作流ID */
  WorkflowId: string;
}

declare interface RemoveWorkflowDsResponse {
  /** 工作流ID */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RerunOpsMakePlanInstancesRequest {
  /** 项目ID */
  ProjectId: string;
  /** 补录计划ID */
  PlanId: string;
  /** 补录实例ID集合，为空则重跑整个补录计划失败实例。实例ID格式为"${TASK_ID}_${INSTANCE_DATA_TIME}"，即“任务ID_任务实例数据时间”。 */
  InstanceIdList?: string[];
}

declare interface RerunOpsMakePlanInstancesResponse {
  /** 操作结果描述 */
  Data?: BatchOperateResultOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RerunScheduleInstancesRequest {
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
}

declare interface RerunScheduleInstancesResponse {
  /** 结果 */
  Data?: BatchOperateResultOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartInLongAgentRequest {
  /** 采集器ID */
  AgentId: string;
  /** WeData项目ID */
  ProjectId: string;
}

declare interface RestartInLongAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** 事件类型(START, STOP, SUSPEND, RESUME, COMMIT, TIMESTAMP) */
  Event?: string;
  /** 额外参数 */
  ExtConfig?: RecordField[];
}

declare interface ResumeIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunTasksByMultiWorkflowRequest {
  /** 项目id */
  ProjectId: string;
  /** 工作流id列表 */
  WorkflowIds: string[];
  /** 是否补录中间实例 0.不补录 1.补录实例 */
  EnableMakeUp: number;
}

declare interface RunTasksByMultiWorkflowResponse {
  /** 操作返回结果 */
  Data?: OperationOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScriptInfoResponse {
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

declare interface SetTaskAlarmNewRequest {
  /** 设置任务超时告警和失败告警信息 */
  AlarmInfoList: AlarmInfo[];
  /** 项目Id */
  ProjectId: string;
}

declare interface SetTaskAlarmNewResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data: BatchOperateResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StageCloudApiRequest {
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

declare interface StartIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** 事件类型(START, STOP, SUSPEND, RESUME, COMMIT, TIMESTAMP) */
  Event?: string;
  /** 额外参数 */
  ExtConfig?: RecordField[];
}

declare interface StartIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopBaselineRequest {
  /** 1 */
  BaselineId: string;
  /** 1 */
  ProjectId: string;
}

declare interface StopBaselineResponse {
  /** 是否操作成功描述 */
  Data?: BooleanResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitBaselineRequest {
  /** 1 */
  BaselineId: string;
  /** 1 */
  ProjectId: string;
}

declare interface SubmitBaselineResponse {
  /** 是否操作成功描述 */
  Data?: BooleanResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitSqlTaskRequest {
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
}

declare interface SubmitSqlTaskResponse {
  /** 任务提交记录 */
  Record: AdhocRecord;
  /** 子任务记录列表 */
  Details: AdhocDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitTaskTestRunRequest {
  /** 无 */
  TaskIds: string;
  /** 无 */
  ProjectId: string;
  /** 无 */
  WorkFlowId?: string;
  /** 无 */
  Name?: string;
  /** 无 */
  Tasks?: StageCloudApiRequest[];
  /** 无 */
  Description?: string;
  /** 无 */
  RunParams?: string;
  /** 无 */
  ScriptContent?: string;
  /** 无 */
  VersionId?: string;
}

declare interface SubmitTaskTestRunResponse {
  /** 无 */
  JobId?: number;
  /** 无 */
  RecordId?: number[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkflowOwnerRequest {
  /** 项目Id */
  ProjectId: string;
  /** 工作流Ids */
  WorkflowIds?: string[];
  /** 责任人，多个以';'号分割 */
  Owner?: string;
  /** 责任人UserId，多个以';'号分割 */
  OwnerId?: string;
}

declare interface UpdateWorkflowOwnerResponse {
  /** 响应数据 */
  Data?: BatchOperationOpsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadContentRequest {
  /** 脚本上传信息 */
  ScriptRequestInfo: ScriptRequestInfo;
}

declare interface UploadContentResponse {
  /** 脚本信息响应 */
  ScriptInfo?: ScriptInfoResponse | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Wedata 数据开发治理平台 WeData} */
declare interface Wedata {
  (): Versions;
  /** 批量创建任务告警规则 {@link BatchCreateIntegrationTaskAlarmsRequest} {@link BatchCreateIntegrationTaskAlarmsResponse} */
  BatchCreateIntegrationTaskAlarms(data: BatchCreateIntegrationTaskAlarmsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateIntegrationTaskAlarmsResponse>;
  /** 批量删除集成任务 {@link BatchDeleteIntegrationTasksRequest} {@link BatchDeleteIntegrationTasksResponse} */
  BatchDeleteIntegrationTasks(data: BatchDeleteIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteIntegrationTasksResponse>;
  /** 智能运维-批量删除任务 {@link BatchDeleteOpsTasksRequest} {@link BatchDeleteOpsTasksResponse} */
  BatchDeleteOpsTasks(data: BatchDeleteOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteOpsTasksResponse>;
  /** 批量删除任务Ds {@link BatchDeleteTasksDsRequest} {@link BatchDeleteTasksDsResponse} */
  BatchDeleteTasksDs(data: BatchDeleteTasksDsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteTasksDsResponse>;
  /** 批量删除任务【Beta版本】 {@link BatchDeleteTasksNewRequest} {@link BatchDeleteTasksNewResponse} */
  BatchDeleteTasksNew(data: BatchDeleteTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteTasksNewResponse>;
  /** 批量置成功集成任务实例 {@link BatchForceSuccessIntegrationTaskInstancesRequest} {@link BatchForceSuccessIntegrationTaskInstancesResponse} */
  BatchForceSuccessIntegrationTaskInstances(data: BatchForceSuccessIntegrationTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchForceSuccessIntegrationTaskInstancesResponse>;
  /** 批量终止集成任务实例 {@link BatchKillIntegrationTaskInstancesRequest} {@link BatchKillIntegrationTaskInstancesResponse} */
  BatchKillIntegrationTaskInstances(data: BatchKillIntegrationTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchKillIntegrationTaskInstancesResponse>;
  /** 批量补数据 {@link BatchMakeUpIntegrationTasksRequest} {@link BatchMakeUpIntegrationTasksResponse} */
  BatchMakeUpIntegrationTasks(data: BatchMakeUpIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchMakeUpIntegrationTasksResponse>;
  /** 智能运维-批量修改任务责任人 {@link BatchModifyOpsOwnersRequest} {@link BatchModifyOpsOwnersResponse} */
  BatchModifyOpsOwners(data: BatchModifyOpsOwnersRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyOpsOwnersResponse>;
  /** 批量修改任务责任人【Beta版本】 {@link BatchModifyOwnersNewRequest} {@link BatchModifyOwnersNewResponse} */
  BatchModifyOwnersNew(data: BatchModifyOwnersNewRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyOwnersNewResponse>;
  /** 批量重跑集成任务实例 {@link BatchRerunIntegrationTaskInstancesRequest} {@link BatchRerunIntegrationTaskInstancesResponse} */
  BatchRerunIntegrationTaskInstances(data: BatchRerunIntegrationTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchRerunIntegrationTaskInstancesResponse>;
  /** 批量继续执行集成任务 {@link BatchResumeIntegrationTasksRequest} {@link BatchResumeIntegrationTasksResponse} */
  BatchResumeIntegrationTasks(data: BatchResumeIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchResumeIntegrationTasksResponse>;
  /** 批量运行任务 {@link BatchRunOpsTaskRequest} {@link BatchRunOpsTaskResponse} */
  BatchRunOpsTask(data: BatchRunOpsTaskRequest, config?: AxiosRequestConfig): AxiosPromise<BatchRunOpsTaskResponse>;
  /** 批量运行集成任务 {@link BatchStartIntegrationTasksRequest} {@link BatchStartIntegrationTasksResponse} */
  BatchStartIntegrationTasks(data: BatchStartIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStartIntegrationTasksResponse>;
  /** 批量停止集成任务 {@link BatchStopIntegrationTasksRequest} {@link BatchStopIntegrationTasksResponse} */
  BatchStopIntegrationTasks(data: BatchStopIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopIntegrationTasksResponse>;
  /** 智能运维-批量停止任务 {@link BatchStopOpsTasksRequest} {@link BatchStopOpsTasksResponse} */
  BatchStopOpsTasks(data: BatchStopOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopOpsTasksResponse>;
  /** 批量停止任务【Beta版本】 {@link BatchStopTasksNewRequest} {@link BatchStopTasksNewResponse} */
  BatchStopTasksNew(data: BatchStopTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopTasksNewResponse>;
  /** 批量停止工作流 {@link BatchStopWorkflowsByIdsRequest} {@link BatchStopWorkflowsByIdsResponse} */
  BatchStopWorkflowsByIds(data: BatchStopWorkflowsByIdsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopWorkflowsByIdsResponse>;
  /** 批量暂停集成任务 {@link BatchSuspendIntegrationTasksRequest} {@link BatchSuspendIntegrationTasksResponse} */
  BatchSuspendIntegrationTasks(data: BatchSuspendIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchSuspendIntegrationTasksResponse>;
  /** 批量更新集成任务 {@link BatchUpdateIntegrationTasksRequest} {@link BatchUpdateIntegrationTasksResponse} */
  BatchUpdateIntegrationTasks(data: BatchUpdateIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchUpdateIntegrationTasksResponse>;
  /** 判断告警规则重名 {@link CheckAlarmRegularNameExistRequest} {@link CheckAlarmRegularNameExistResponse} */
  CheckAlarmRegularNameExist(data: CheckAlarmRegularNameExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAlarmRegularNameExistResponse>;
  /** 检查规则名称是否重复 {@link CheckDuplicateRuleNameRequest} {@link CheckDuplicateRuleNameResponse} */
  CheckDuplicateRuleName(data?: CheckDuplicateRuleNameRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDuplicateRuleNameResponse>;
  /** 检查规则模板名称是否重复 {@link CheckDuplicateTemplateNameRequest} {@link CheckDuplicateTemplateNameResponse} */
  CheckDuplicateTemplateName(data?: CheckDuplicateTemplateNameRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDuplicateTemplateNameResponse>;
  /** 判断集成节点名称是否存在 {@link CheckIntegrationNodeNameExistsRequest} {@link CheckIntegrationNodeNameExistsResponse} */
  CheckIntegrationNodeNameExists(data: CheckIntegrationNodeNameExistsRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIntegrationNodeNameExistsResponse>;
  /** 判断集成任务名称是否存在 {@link CheckIntegrationTaskNameExistsRequest} {@link CheckIntegrationTaskNameExistsResponse} */
  CheckIntegrationTaskNameExists(data: CheckIntegrationTaskNameExistsRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIntegrationTaskNameExistsResponse>;
  /** 离线任务重名校验 {@link CheckTaskNameExistRequest} {@link CheckTaskNameExistResponse} */
  CheckTaskNameExist(data: CheckTaskNameExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckTaskNameExistResponse>;
  /** 提交数据导出任务 {@link CommitExportTaskRequest} {@link CommitExportTaskResponse} */
  CommitExportTask(data?: CommitExportTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CommitExportTaskResponse>;
  /** 提交集成任务 {@link CommitIntegrationTaskRequest} {@link CommitIntegrationTaskResponse} */
  CommitIntegrationTask(data: CommitIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CommitIntegrationTaskResponse>;
  /** 规则检测结果上报 {@link CommitRuleGroupExecResultRequest} {@link CommitRuleGroupExecResultResponse} */
  CommitRuleGroupExecResult(data: CommitRuleGroupExecResultRequest, config?: AxiosRequestConfig): AxiosPromise<CommitRuleGroupExecResultResponse>;
  /** 提交规则组运行任务接口 {@link CommitRuleGroupTaskRequest} {@link CommitRuleGroupTaskResponse} */
  CommitRuleGroupTask(data?: CommitRuleGroupTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CommitRuleGroupTaskResponse>;
  /** 智能运维-统计任务实例状态 {@link CountOpsInstanceStateRequest} {@link CountOpsInstanceStateResponse} */
  CountOpsInstanceState(data: CountOpsInstanceStateRequest, config?: AxiosRequestConfig): AxiosPromise<CountOpsInstanceStateResponse>;
  /** 创建基线 {@link CreateBaselineRequest} {@link CreateBaselineResponse} */
  CreateBaseline(data: CreateBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBaselineResponse>;
  /** 创建用户自定义函数 {@link CreateCustomFunctionRequest} {@link CreateCustomFunctionResponse} */
  CreateCustomFunction(data: CreateCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomFunctionResponse>;
  /** 数据源管理-创建数据源【Beta版本】 {@link CreateDataSourceRequest} {@link CreateDataSourceResponse} */
  CreateDataSource(data: CreateDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataSourceResponse>;
  /** 创建文件夹【Beta版本】 {@link CreateFolderRequest} {@link CreateFolderResponse} */
  CreateFolder(data: CreateFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFolderResponse>;
  /** 建hive表 {@link CreateHiveTableRequest} {@link CreateHiveTableResponse} */
  CreateHiveTable(data: CreateHiveTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHiveTableResponse>;
  /** 创建hive表 {@link CreateHiveTableByDDLRequest} {@link CreateHiveTableByDDLResponse} */
  CreateHiveTableByDDL(data: CreateHiveTableByDDLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHiveTableByDDLResponse>;
  /** 注册采集器 {@link CreateInLongAgentRequest} {@link CreateInLongAgentResponse} */
  CreateInLongAgent(data: CreateInLongAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInLongAgentResponse>;
  /** 创建集成节点 {@link CreateIntegrationNodeRequest} {@link CreateIntegrationNodeResponse} */
  CreateIntegrationNode(data: CreateIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationNodeResponse>;
  /** 创建集成任务 {@link CreateIntegrationTaskRequest} {@link CreateIntegrationTaskResponse} */
  CreateIntegrationTask(data: CreateIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationTaskResponse>;
  /** 创建离线任务 {@link CreateOfflineTaskRequest} {@link CreateOfflineTaskResponse} */
  CreateOfflineTask(data: CreateOfflineTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOfflineTaskResponse>;
  /** 补录任务 {@link CreateOpsMakePlanRequest} {@link CreateOpsMakePlanResponse} */
  CreateOpsMakePlan(data: CreateOpsMakePlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpsMakePlanResponse>;
  /** 资源管理将cos资源绑定到wedata {@link CreateOrUpdateResourceRequest} {@link CreateOrUpdateResourceResponse} */
  CreateOrUpdateResource(data?: CreateOrUpdateResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrUpdateResourceResponse>;
  /** 资源管理创建文件路径 {@link CreateResourcePathRequest} {@link CreateResourcePathResponse} */
  CreateResourcePath(data: CreateResourcePathRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourcePathResponse>;
  /** 创建质量规则接口 {@link CreateRuleRequest} {@link CreateRuleResponse} */
  CreateRule(data?: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 创建规则模版 {@link CreateRuleTemplateRequest} {@link CreateRuleTemplateResponse} */
  CreateRuleTemplate(data?: CreateRuleTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleTemplateResponse>;
  /** 创建任务【Beta版本】 {@link CreateTaskRequest} {@link CreateTaskResponse} */
  CreateTask(data: CreateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskResponse>;
  /** 创建任务告警规则 {@link CreateTaskAlarmRegularRequest} {@link CreateTaskAlarmRegularResponse} */
  CreateTaskAlarmRegular(data: CreateTaskAlarmRegularRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskAlarmRegularResponse>;
  /** 创建工作流【Beta版本】 {@link CreateWorkflowRequest} {@link CreateWorkflowResponse} */
  CreateWorkflow(data: CreateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowResponse>;
  /** 拉取dag实例 {@link DagInstancesRequest} {@link DagInstancesResponse} */
  DagInstances(data?: DagInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DagInstancesResponse>;
  /** DeleteBaseline {@link DeleteBaselineRequest} {@link DeleteBaselineResponse} */
  DeleteBaseline(data: DeleteBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBaselineResponse>;
  /** 删除用户自定义函数 {@link DeleteCustomFunctionRequest} {@link DeleteCustomFunctionResponse} */
  DeleteCustomFunction(data: DeleteCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomFunctionResponse>;
  /** 数据源管理-删除数据源【Beta版本】 {@link DeleteDataSourcesRequest} {@link DeleteDataSourcesResponse} */
  DeleteDataSources(data: DeleteDataSourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDataSourcesResponse>;
  /** 开发空间-删除文件 {@link DeleteFileRequest} {@link DeleteFileResponse} */
  DeleteFile(data: DeleteFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFileResponse>;
  /** 开发空间-批量删除目录和文件 {@link DeleteFilePathRequest} {@link DeleteFilePathResponse} */
  DeleteFilePath(data: DeleteFilePathRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFilePathResponse>;
  /** 删除文件夹【Beta版本】 {@link DeleteFolderRequest} {@link DeleteFolderResponse} */
  DeleteFolder(data: DeleteFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFolderResponse>;
  /** 删除采集器 {@link DeleteInLongAgentRequest} {@link DeleteInLongAgentResponse} */
  DeleteInLongAgent(data: DeleteInLongAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInLongAgentResponse>;
  /** 删除集成节点 {@link DeleteIntegrationNodeRequest} {@link DeleteIntegrationNodeResponse} */
  DeleteIntegrationNode(data: DeleteIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationNodeResponse>;
  /** 删除集成任务 {@link DeleteIntegrationTaskRequest} {@link DeleteIntegrationTaskResponse} */
  DeleteIntegrationTask(data: DeleteIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationTaskResponse>;
  /** 删除任务 {@link DeleteOfflineTaskRequest} {@link DeleteOfflineTaskResponse} */
  DeleteOfflineTask(data: DeleteOfflineTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOfflineTaskResponse>;
  /** 删除项目参数 {@link DeleteProjectParamDsRequest} {@link DeleteProjectParamDsResponse} */
  DeleteProjectParamDs(data?: DeleteProjectParamDsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectParamDsResponse>;
  /** 删除资源 {@link DeleteResourceRequest} {@link DeleteResourceResponse} */
  DeleteResource(data?: DeleteResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceResponse>;
  /** 【资源管理】删除资源 {@link DeleteResourceFileRequest} {@link DeleteResourceFileResponse} */
  DeleteResourceFile(data: DeleteResourceFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceFileResponse>;
  /** 【资源管理】批量删除资源 {@link DeleteResourceFilesRequest} {@link DeleteResourceFilesResponse} */
  DeleteResourceFiles(data: DeleteResourceFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceFilesResponse>;
  /** 删除质量规则接口 {@link DeleteRuleRequest} {@link DeleteRuleResponse} */
  DeleteRule(data?: DeleteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleResponse>;
  /** 删除规则模版 {@link DeleteRuleTemplateRequest} {@link DeleteRuleTemplateResponse} */
  DeleteRuleTemplate(data?: DeleteRuleTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleTemplateResponse>;
  /** 删除任务告警规则 {@link DeleteTaskAlarmRegularRequest} {@link DeleteTaskAlarmRegularResponse} */
  DeleteTaskAlarmRegular(data: DeleteTaskAlarmRegularRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskAlarmRegularResponse>;
  /** 删除任务Ds {@link DeleteTaskDsRequest} {@link DeleteTaskDsResponse} */
  DeleteTaskDs(data?: DeleteTaskDsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskDsResponse>;
  /** 通过工作流Id删除工作流 {@link DeleteWorkflowByIdRequest} {@link DeleteWorkflowByIdResponse} */
  DeleteWorkflowById(data: DeleteWorkflowByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowByIdResponse>;
  /** 删除工作流【Beta版本】 {@link DeleteWorkflowNewRequest} {@link DeleteWorkflowNewResponse} */
  DeleteWorkflowNew(data: DeleteWorkflowNewRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowNewResponse>;
  /** 告警事件列表 {@link DescribeAlarmEventsRequest} {@link DescribeAlarmEventsResponse} */
  DescribeAlarmEvents(data: DescribeAlarmEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmEventsResponse>;
  /** 告警接收人详情 {@link DescribeAlarmReceiverRequest} {@link DescribeAlarmReceiverResponse} */
  DescribeAlarmReceiver(data: DescribeAlarmReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmReceiverResponse>;
  /** 查询父目录下所有子文件夹+工作流 {@link DescribeAllByFolderNewRequest} {@link DescribeAllByFolderNewResponse} */
  DescribeAllByFolderNew(data?: DescribeAllByFolderNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllByFolderNewResponse>;
  /** 获取所有任务类型 {@link DescribeAllTaskTypeRequest} {@link DescribeAllTaskTypeResponse} */
  DescribeAllTaskType(data?: DescribeAllTaskTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllTaskTypeResponse>;
  /** 根据任务Id查找生产态子任务 {@link DescribeAllUsedVersionSonRequest} {@link DescribeAllUsedVersionSonResponse} */
  DescribeAllUsedVersionSon(data: DescribeAllUsedVersionSonRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllUsedVersionSonResponse>;
  /** 查询基线DAG {@link DescribeBaselineAllTaskDagRequest} {@link DescribeBaselineAllTaskDagResponse} */
  DescribeBaselineAllTaskDag(data: DescribeBaselineAllTaskDagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineAllTaskDagResponse>;
  /** 拉取基线列表ById {@link DescribeBaselineByIdRequest} {@link DescribeBaselineByIdResponse} */
  DescribeBaselineById(data: DescribeBaselineByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineByIdResponse>;
  /** 查询基线实例DAG {@link DescribeBaselineInstanceDagRequest} {@link DescribeBaselineInstanceDagResponse} */
  DescribeBaselineInstanceDag(data: DescribeBaselineInstanceDagRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineInstanceDagResponse>;
  /** 查询基线实例甘特图 {@link DescribeBaselineInstanceGanttRequest} {@link DescribeBaselineInstanceGanttResponse} */
  DescribeBaselineInstanceGantt(data: DescribeBaselineInstanceGanttRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineInstanceGanttResponse>;
  /** 查询基线实例列表 {@link DescribeBaselineInstancesRequest} {@link DescribeBaselineInstancesResponse} */
  DescribeBaselineInstances(data: DescribeBaselineInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselineInstancesResponse>;
  /** 拉取基线列表 {@link DescribeBaselinesRequest} {@link DescribeBaselinesResponse} */
  DescribeBaselines(data: DescribeBaselinesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaselinesResponse>;
  /** 批量操作任务列表 {@link DescribeBatchOperateTaskRequest} {@link DescribeBatchOperateTaskResponse} */
  DescribeBatchOperateTask(data: DescribeBatchOperateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchOperateTaskResponse>;
  /** 所属任务-基线列表 {@link DescribeBelongToRequest} {@link DescribeBelongToResponse} */
  DescribeBelongTo(data: DescribeBelongToRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBelongToResponse>;
  /** 获取集群命名空间列表 {@link DescribeClusterNamespaceListRequest} {@link DescribeClusterNamespaceListResponse} */
  DescribeClusterNamespaceList(data: DescribeClusterNamespaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterNamespaceListResponse>;
  /** 列出字段血缘信息 {@link DescribeColumnLineageRequest} {@link DescribeColumnLineageResponse} */
  DescribeColumnLineage(data: DescribeColumnLineageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeColumnLineageResponse>;
  /** 查询数据来源列表 {@link DescribeDataBasesRequest} {@link DescribeDataBasesResponse} */
  DescribeDataBases(data?: DescribeDataBasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataBasesResponse>;
  /** 数据质量数据监测情况接口 {@link DescribeDataCheckStatRequest} {@link DescribeDataCheckStatResponse} */
  DescribeDataCheckStat(data: DescribeDataCheckStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataCheckStatResponse>;
  /** 查询规则组数据对象列表 {@link DescribeDataObjectsRequest} {@link DescribeDataObjectsResponse} */
  DescribeDataObjects(data?: DescribeDataObjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataObjectsResponse>;
  /** 获取数据源信息 {@link DescribeDataSourceInfoListRequest} {@link DescribeDataSourceInfoListResponse} */
  DescribeDataSourceInfoList(data: DescribeDataSourceInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceInfoListResponse>;
  /** 数据源管理-查询数据源分页列表【Beta版本】 {@link DescribeDataSourceListRequest} {@link DescribeDataSourceListResponse} */
  DescribeDataSourceList(data?: DescribeDataSourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceListResponse>;
  /** 查看数据源列表不带额外信息【Beta版本】 {@link DescribeDataSourceWithoutInfoRequest} {@link DescribeDataSourceWithoutInfoResponse} */
  DescribeDataSourceWithoutInfo(data?: DescribeDataSourceWithoutInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceWithoutInfoResponse>;
  /** 获取字段类型列表 {@link DescribeDataTypesRequest} {@link DescribeDataTypesResponse} */
  DescribeDataTypes(data: DescribeDataTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataTypesResponse>;
  /** 获取数据库信息 {@link DescribeDatabaseInfoListRequest} {@link DescribeDatabaseInfoListResponse} */
  DescribeDatabaseInfoList(data: DescribeDatabaseInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseInfoListResponse>;
  /** 数据源管理-数据源详情【Beta版本】 {@link DescribeDatasourceRequest} {@link DescribeDatasourceResponse} */
  DescribeDatasource(data: DescribeDatasourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatasourceResponse>;
  /** 获取下游依赖任务列表 {@link DescribeDependOpsTaskListRequest} {@link DescribeDependOpsTaskListResponse} */
  DescribeDependOpsTaskList(data: DescribeDependOpsTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDependOpsTaskListResponse>;
  /** 根据层级查找上-下游任务节点 {@link DescribeDependOpsTasksRequest} {@link DescribeDependOpsTasksResponse} */
  DescribeDependOpsTasks(data: DescribeDependOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDependOpsTasksResponse>;
  /** 通过taskIds查询task详情列表 {@link DescribeDependTaskListsRequest} {@link DescribeDependTaskListsResponse} */
  DescribeDependTaskLists(data: DescribeDependTaskListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDependTaskListsResponse>;
  /** 任务运维-根据层级查找上-下游任务节点【Beta版本】 {@link DescribeDependTasksNewRequest} {@link DescribeDependTasksNewResponse} */
  DescribeDependTasksNew(data: DescribeDependTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDependTasksNewResponse>;
  /** 查询基线诊断信息 {@link DescribeDiagnosticInfoByBaselineIdRequest} {@link DescribeDiagnosticInfoByBaselineIdResponse} */
  DescribeDiagnosticInfoByBaselineId(data: DescribeDiagnosticInfoByBaselineIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiagnosticInfoByBaselineIdResponse>;
  /** 查询维度评分 {@link DescribeDimensionScoreRequest} {@link DescribeDimensionScoreResponse} */
  DescribeDimensionScore(data: DescribeDimensionScoreRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDimensionScoreResponse>;
  /** 分页查询试运行实例列表 {@link DescribeDrInstancePageRequest} {@link DescribeDrInstancePageResponse} */
  DescribeDrInstancePage(data: DescribeDrInstancePageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDrInstancePageResponse>;
  /** 查询试运行实例执行内容 {@link DescribeDrInstanceScriptContentRequest} {@link DescribeDrInstanceScriptContentResponse} */
  DescribeDrInstanceScriptContent(data: DescribeDrInstanceScriptContentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDrInstanceScriptContentResponse>;
  /** 查询试运行实例子实例列表 {@link DescribeDrSonInstanceRequest} {@link DescribeDrSonInstanceResponse} */
  DescribeDrSonInstance(data: DescribeDrSonInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDrSonInstanceResponse>;
  /** 查询事件详情 {@link DescribeEventRequest} {@link DescribeEventResponse} */
  DescribeEvent(data: DescribeEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventResponse>;
  /** 查找事件实例 {@link DescribeEventCasesRequest} {@link DescribeEventCasesResponse} */
  DescribeEventCases(data: DescribeEventCasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventCasesResponse>;
  /** 事件实例查看消费任务 {@link DescribeEventConsumeTasksRequest} {@link DescribeEventConsumeTasksResponse} */
  DescribeEventConsumeTasks(data: DescribeEventConsumeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventConsumeTasksResponse>;
  /** 智能运维事件详情 {@link DescribeEventDetailRequest} {@link DescribeEventDetailResponse} */
  DescribeEventDetail(data: DescribeEventDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventDetailResponse>;
  /** 事件是否告警过滤条件 {@link DescribeEventIsAlarmTypesRequest} {@link DescribeEventIsAlarmTypesResponse} */
  DescribeEventIsAlarmTypes(data?: DescribeEventIsAlarmTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventIsAlarmTypesResponse>;
  /** 查询事件类型列表 {@link DescribeEventTypesRequest} {@link DescribeEventTypesResponse} */
  DescribeEventTypes(data?: DescribeEventTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventTypesResponse>;
  /** 事件查询列表 {@link DescribeEventsRequest} {@link DescribeEventsResponse} */
  DescribeEvents(data: DescribeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventsResponse>;
  /** 查询规则组执行策略 {@link DescribeExecStrategyRequest} {@link DescribeExecStrategyResponse} */
  DescribeExecStrategy(data?: DescribeExecStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExecStrategyResponse>;
  /** 获取关联父实例 {@link DescribeFathersRequest} {@link DescribeFathersResponse} */
  DescribeFathers(data?: DescribeFathersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFathersResponse>;
  /** 拉取文件夹目录【Beta版本】 {@link DescribeFolderListRequest} {@link DescribeFolderListResponse} */
  DescribeFolderList(data: DescribeFolderListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFolderListResponse>;
  /** 拉取文件夹下的工作流【Beta版本】 {@link DescribeFolderWorkflowListRequest} {@link DescribeFolderWorkflowListResponse} */
  DescribeFolderWorkflowList(data: DescribeFolderWorkflowListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFolderWorkflowListResponse>;
  /** 查询函数分类 {@link DescribeFunctionKindsRequest} {@link DescribeFunctionKindsResponse} */
  DescribeFunctionKinds(data?: DescribeFunctionKindsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionKindsResponse>;
  /** 查询函数类型 {@link DescribeFunctionTypesRequest} {@link DescribeFunctionTypesResponse} */
  DescribeFunctionTypes(data?: DescribeFunctionTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionTypesResponse>;
  /** 获取采集器列表 {@link DescribeInLongAgentListRequest} {@link DescribeInLongAgentListResponse} */
  DescribeInLongAgentList(data: DescribeInLongAgentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInLongAgentListResponse>;
  /** 查询采集器关联的任务列表 {@link DescribeInLongAgentTaskListRequest} {@link DescribeInLongAgentTaskListResponse} */
  DescribeInLongAgentTaskList(data: DescribeInLongAgentTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInLongAgentTaskListResponse>;
  /** 获取采集器所在集群的VPC列表 {@link DescribeInLongAgentVpcListRequest} {@link DescribeInLongAgentVpcListResponse} */
  DescribeInLongAgentVpcList(data: DescribeInLongAgentVpcListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInLongAgentVpcListResponse>;
  /** 获取TKE集群列表 {@link DescribeInLongTkeClusterListRequest} {@link DescribeInLongTkeClusterListResponse} */
  DescribeInLongTkeClusterList(data: DescribeInLongTkeClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInLongTkeClusterListResponse>;
  /** 周期实例统计 {@link DescribeInstanceByCycleRequest} {@link DescribeInstanceByCycleResponse} */
  DescribeInstanceByCycle(data?: DescribeInstanceByCycleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceByCycleResponse>;
  /** 实例状态周期增长趋势 {@link DescribeInstanceByCycleReportRequest} {@link DescribeInstanceByCycleReportResponse} */
  DescribeInstanceByCycleReport(data: DescribeInstanceByCycleReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceByCycleReportResponse>;
  /** 获取日志详情页面 {@link DescribeInstanceLastLogRequest} {@link DescribeInstanceLastLogResponse} */
  DescribeInstanceLastLog(data: DescribeInstanceLastLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLastLogResponse>;
  /** 获取离线运维实例列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** 获取实例运行日志 {@link DescribeInstanceLogRequest} {@link DescribeInstanceLogResponse} */
  DescribeInstanceLog(data: DescribeInstanceLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogResponse>;
  /** 获取具体实例相关日志信息 {@link DescribeInstanceLogDetailRequest} {@link DescribeInstanceLogDetailResponse} */
  DescribeInstanceLogDetail(data: DescribeInstanceLogDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogDetailResponse>;
  /** 下载日志文件 {@link DescribeInstanceLogFileRequest} {@link DescribeInstanceLogFileResponse} */
  DescribeInstanceLogFile(data: DescribeInstanceLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogFileResponse>;
  /** 获取离线任务实例运行日志列表 {@link DescribeInstanceLogListRequest} {@link DescribeInstanceLogListResponse} */
  DescribeInstanceLogList(data: DescribeInstanceLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogListResponse>;
  /** 获取实例日志列表【Beta版本】 {@link DescribeInstanceLogsRequest} {@link DescribeInstanceLogsResponse} */
  DescribeInstanceLogs(data: DescribeInstanceLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogsResponse>;
  /** 数据质量-查询实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 拉取实例列表，join task表一些信息 {@link DescribeInstancesInfoWithTaskInfoRequest} {@link DescribeInstancesInfoWithTaskInfoResponse} */
  DescribeInstancesInfoWithTaskInfo(data?: DescribeInstancesInfoWithTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesInfoWithTaskInfoResponse>;
  /** 查询集成节点 {@link DescribeIntegrationNodeRequest} {@link DescribeIntegrationNodeResponse} */
  DescribeIntegrationNode(data: DescribeIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationNodeResponse>;
  /** 数据集成大屏概览 {@link DescribeIntegrationStatisticsRequest} {@link DescribeIntegrationStatisticsResponse} */
  DescribeIntegrationStatistics(data: DescribeIntegrationStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsResponse>;
  /** 数据集成大屏采集器状态分布统计 {@link DescribeIntegrationStatisticsAgentStatusRequest} {@link DescribeIntegrationStatisticsAgentStatusResponse} */
  DescribeIntegrationStatisticsAgentStatus(data: DescribeIntegrationStatisticsAgentStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsAgentStatusResponse>;
  /** 数据集成大屏实例状态统计趋势 {@link DescribeIntegrationStatisticsInstanceTrendRequest} {@link DescribeIntegrationStatisticsInstanceTrendResponse} */
  DescribeIntegrationStatisticsInstanceTrend(data: DescribeIntegrationStatisticsInstanceTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsInstanceTrendResponse>;
  /** 数据集成大屏同步条数统计趋势 {@link DescribeIntegrationStatisticsRecordsTrendRequest} {@link DescribeIntegrationStatisticsRecordsTrendResponse} */
  DescribeIntegrationStatisticsRecordsTrend(data: DescribeIntegrationStatisticsRecordsTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsRecordsTrendResponse>;
  /** 数据集成大屏任务状态分布统计 {@link DescribeIntegrationStatisticsTaskStatusRequest} {@link DescribeIntegrationStatisticsTaskStatusResponse} */
  DescribeIntegrationStatisticsTaskStatus(data: DescribeIntegrationStatisticsTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsTaskStatusResponse>;
  /** 数据集成大屏任务状态统计趋势 {@link DescribeIntegrationStatisticsTaskStatusTrendRequest} {@link DescribeIntegrationStatisticsTaskStatusTrendResponse} */
  DescribeIntegrationStatisticsTaskStatusTrend(data: DescribeIntegrationStatisticsTaskStatusTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsTaskStatusTrendResponse>;
  /** 查询集成任务详情 {@link DescribeIntegrationTaskRequest} {@link DescribeIntegrationTaskResponse} */
  DescribeIntegrationTask(data: DescribeIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationTaskResponse>;
  /** 查询集成任务列表 {@link DescribeIntegrationTasksRequest} {@link DescribeIntegrationTasksResponse} */
  DescribeIntegrationTasks(data: DescribeIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationTasksResponse>;
  /** 查询集成任务版本节点信息 {@link DescribeIntegrationVersionNodesInfoRequest} {@link DescribeIntegrationVersionNodesInfoResponse} */
  DescribeIntegrationVersionNodesInfo(data: DescribeIntegrationVersionNodesInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationVersionNodesInfoResponse>;
  /** 获取kafka的topic信息 {@link DescribeKafkaTopicInfoRequest} {@link DescribeKafkaTopicInfoResponse} */
  DescribeKafkaTopicInfo(data: DescribeKafkaTopicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKafkaTopicInfoResponse>;
  /** 分页查询质量监控组 {@link DescribeMonitorsByPageRequest} {@link DescribeMonitorsByPageResponse} */
  DescribeMonitorsByPage(data?: DescribeMonitorsByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonitorsByPageResponse>;
  /** 获取离线任务长连接Token {@link DescribeOfflineTaskTokenRequest} {@link DescribeOfflineTaskTokenResponse} */
  DescribeOfflineTaskToken(data?: DescribeOfflineTaskTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfflineTaskTokenResponse>;
  /** 查询生产态任务数据源列表 {@link DescribeOperateOpsTaskDatasourceRequest} {@link DescribeOperateOpsTaskDatasourceResponse} */
  DescribeOperateOpsTaskDatasource(data: DescribeOperateOpsTaskDatasourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOperateOpsTaskDatasourceResponse>;
  /** 查询生产态任务数据源类型列表 {@link DescribeOperateOpsTaskDatasourceTypeRequest} {@link DescribeOperateOpsTaskDatasourceTypeResponse} */
  DescribeOperateOpsTaskDatasourceType(data: DescribeOperateOpsTaskDatasourceTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOperateOpsTaskDatasourceTypeResponse>;
  /** 智能运维-任务运维列表组合条件查询 {@link DescribeOperateOpsTasksRequest} {@link DescribeOperateOpsTasksResponse} */
  DescribeOperateOpsTasks(data: DescribeOperateOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOperateOpsTasksResponse>;
  /** 任务运维列表组合条件查询 {@link DescribeOperateTasksRequest} {@link DescribeOperateTasksResponse} */
  DescribeOperateTasks(data: DescribeOperateTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOperateTasksResponse>;
  /** 获取实例日志列表 {@link DescribeOpsInstanceLogListRequest} {@link DescribeOpsInstanceLogListResponse} */
  DescribeOpsInstanceLogList(data: DescribeOpsInstanceLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsInstanceLogListResponse>;
  /** 查看补录计划任务实例 {@link DescribeOpsMakePlanInstancesRequest} {@link DescribeOpsMakePlanInstancesResponse} */
  DescribeOpsMakePlanInstances(data: DescribeOpsMakePlanInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsMakePlanInstancesResponse>;
  /** 查看补录计划任务 {@link DescribeOpsMakePlanTasksRequest} {@link DescribeOpsMakePlanTasksResponse} */
  DescribeOpsMakePlanTasks(data: DescribeOpsMakePlanTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsMakePlanTasksResponse>;
  /** 查询补录计划 {@link DescribeOpsMakePlansRequest} {@link DescribeOpsMakePlansResponse} */
  DescribeOpsMakePlans(data: DescribeOpsMakePlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsMakePlansResponse>;
  /** 查询用户生产工作流列表 {@link DescribeOpsWorkflowsRequest} {@link DescribeOpsWorkflowsResponse} */
  DescribeOpsWorkflows(data: DescribeOpsWorkflowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsWorkflowsResponse>;
  /** 查询全量函数（层级化）接口 {@link DescribeOrganizationalFunctionsRequest} {@link DescribeOrganizationalFunctionsResponse} */
  DescribeOrganizationalFunctions(data: DescribeOrganizationalFunctionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationalFunctionsResponse>;
  /** 获取生产调度任务列表 {@link DescribeProdTasksRequest} {@link DescribeProdTasksResponse} */
  DescribeProdTasks(data?: DescribeProdTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProdTasksResponse>;
  /** 获取项目信息 {@link DescribeProjectRequest} {@link DescribeProjectResponse} */
  DescribeProject(data?: DescribeProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectResponse>;
  /** 查询质量评分 {@link DescribeQualityScoreRequest} {@link DescribeQualityScoreResponse} */
  DescribeQualityScore(data: DescribeQualityScoreRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQualityScoreResponse>;
  /** 查询质量分趋势 {@link DescribeQualityScoreTrendRequest} {@link DescribeQualityScoreTrendResponse} */
  DescribeQualityScoreTrend(data: DescribeQualityScoreTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQualityScoreTrendResponse>;
  /** 查询实时任务实例节点信息 {@link DescribeRealTimeTaskInstanceNodeInfoRequest} {@link DescribeRealTimeTaskInstanceNodeInfoResponse} */
  DescribeRealTimeTaskInstanceNodeInfo(data: DescribeRealTimeTaskInstanceNodeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealTimeTaskInstanceNodeInfoResponse>;
  /** 实时任务运行指标概览 {@link DescribeRealTimeTaskMetricOverviewRequest} {@link DescribeRealTimeTaskMetricOverviewResponse} */
  DescribeRealTimeTaskMetricOverview(data: DescribeRealTimeTaskMetricOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealTimeTaskMetricOverviewResponse>;
  /** 实时任务同步速度趋势 {@link DescribeRealTimeTaskSpeedRequest} {@link DescribeRealTimeTaskSpeedResponse} */
  DescribeRealTimeTaskSpeed(data: DescribeRealTimeTaskSpeedRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealTimeTaskSpeedResponse>;
  /** 查询任务实例的关联实例列表 {@link DescribeRelatedInstancesRequest} {@link DescribeRelatedInstancesResponse} */
  DescribeRelatedInstances(data: DescribeRelatedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRelatedInstancesResponse>;
  /** 获取资源管理目录树 {@link DescribeResourceManagePathTreesRequest} {@link DescribeResourceManagePathTreesResponse} */
  DescribeResourceManagePathTrees(data?: DescribeResourceManagePathTreesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceManagePathTreesResponse>;
  /** 查询规则详情 {@link DescribeRuleRequest} {@link DescribeRuleResponse} */
  DescribeRule(data?: DescribeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleResponse>;
  /** 查询质量规则数据源 {@link DescribeRuleDataSourcesRequest} {@link DescribeRuleDataSourcesResponse} */
  DescribeRuleDataSources(data?: DescribeRuleDataSourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleDataSourcesResponse>;
  /** 数据质量触发维度分布统计接口 {@link DescribeRuleDimStatRequest} {@link DescribeRuleDimStatResponse} */
  DescribeRuleDimStat(data: DescribeRuleDimStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleDimStatResponse>;
  /** 查询规则执行结果详情 {@link DescribeRuleExecDetailRequest} {@link DescribeRuleExecDetailResponse} */
  DescribeRuleExecDetail(data?: DescribeRuleExecDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecDetailResponse>;
  /** 查询规则执行导出结果 {@link DescribeRuleExecExportResultRequest} {@link DescribeRuleExecExportResultResponse} */
  DescribeRuleExecExportResult(data?: DescribeRuleExecExportResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecExportResultResponse>;
  /** 查询规则执行历史， 最近30条 {@link DescribeRuleExecHistoryRequest} {@link DescribeRuleExecHistoryResponse} */
  DescribeRuleExecHistory(data?: DescribeRuleExecHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecHistoryResponse>;
  /** 规则执行日志查询 {@link DescribeRuleExecLogRequest} {@link DescribeRuleExecLogResponse} */
  DescribeRuleExecLog(data: DescribeRuleExecLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecLogResponse>;
  /** 规则执行结果列表查询 {@link DescribeRuleExecResultsRequest} {@link DescribeRuleExecResultsResponse} */
  DescribeRuleExecResults(data?: DescribeRuleExecResultsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecResultsResponse>;
  /** 分页查询规则执行结果列表 {@link DescribeRuleExecResultsByPageRequest} {@link DescribeRuleExecResultsByPageResponse} */
  DescribeRuleExecResultsByPage(data?: DescribeRuleExecResultsByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecResultsByPageResponse>;
  /** 数据质量规则运行情况接口 {@link DescribeRuleExecStatRequest} {@link DescribeRuleExecStatResponse} */
  DescribeRuleExecStat(data: DescribeRuleExecStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecStatResponse>;
  /** 查询规则组详情接口 {@link DescribeRuleGroupRequest} {@link DescribeRuleGroupResponse} */
  DescribeRuleGroup(data?: DescribeRuleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupResponse>;
  /** 规则组执行结果分页查询接口 {@link DescribeRuleGroupExecResultsByPageRequest} {@link DescribeRuleGroupExecResultsByPageResponse} */
  DescribeRuleGroupExecResultsByPage(data?: DescribeRuleGroupExecResultsByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupExecResultsByPageResponse>;
  /** 规则组执行结果分页查询接口不带鉴权 {@link DescribeRuleGroupExecResultsByPageWithoutAuthRequest} {@link DescribeRuleGroupExecResultsByPageWithoutAuthResponse} */
  DescribeRuleGroupExecResultsByPageWithoutAuth(data?: DescribeRuleGroupExecResultsByPageWithoutAuthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupExecResultsByPageWithoutAuthResponse>;
  /** 查询规则组订阅信息 {@link DescribeRuleGroupSubscriptionRequest} {@link DescribeRuleGroupSubscriptionResponse} */
  DescribeRuleGroupSubscription(data?: DescribeRuleGroupSubscriptionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupSubscriptionResponse>;
  /** 查询表绑定执行规则组信息 {@link DescribeRuleGroupTableRequest} {@link DescribeRuleGroupTableResponse} */
  DescribeRuleGroupTable(data: DescribeRuleGroupTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupTableResponse>;
  /** 分页查询规则组接口 {@link DescribeRuleGroupsByPageRequest} {@link DescribeRuleGroupsByPageResponse} */
  DescribeRuleGroupsByPage(data?: DescribeRuleGroupsByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupsByPageResponse>;
  /** 分页查询规则操作记录接口 {@link DescribeRuleHistoryByPageRequest} {@link DescribeRuleHistoryByPageResponse} */
  DescribeRuleHistoryByPage(data?: DescribeRuleHistoryByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleHistoryByPageResponse>;
  /** 获取表列表 {@link DescribeRuleTablesByPageRequest} {@link DescribeRuleTablesByPageResponse} */
  DescribeRuleTablesByPage(data?: DescribeRuleTablesByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleTablesByPageResponse>;
  /** 查询模板详情 {@link DescribeRuleTemplateRequest} {@link DescribeRuleTemplateResponse} */
  DescribeRuleTemplate(data?: DescribeRuleTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleTemplateResponse>;
  /** 查询规则模版列表 {@link DescribeRuleTemplatesRequest} {@link DescribeRuleTemplatesResponse} */
  DescribeRuleTemplates(data?: DescribeRuleTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleTemplatesResponse>;
  /** 规则模版查询接口 {@link DescribeRuleTemplatesByPageRequest} {@link DescribeRuleTemplatesByPageResponse} */
  DescribeRuleTemplatesByPage(data: DescribeRuleTemplatesByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleTemplatesByPageResponse>;
  /** 查询质量规则列表 {@link DescribeRulesRequest} {@link DescribeRulesResponse} */
  DescribeRules(data?: DescribeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesResponse>;
  /** 分页查询质量规则 {@link DescribeRulesByPageRequest} {@link DescribeRulesByPageResponse} */
  DescribeRulesByPage(data?: DescribeRulesByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesByPageResponse>;
  /** 查询调度任务实例 {@link DescribeScheduleInstanceRequest} {@link DescribeScheduleInstanceResponse} */
  DescribeScheduleInstance(data: DescribeScheduleInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScheduleInstanceResponse>;
  /** aiops-获取实例列表 {@link DescribeScheduleInstancesRequest} {@link DescribeScheduleInstancesResponse} */
  DescribeScheduleInstances(data?: DescribeScheduleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScheduleInstancesResponse>;
  /** 运维大屏-实例状态分布 {@link DescribeSchedulerInstanceStatusRequest} {@link DescribeSchedulerInstanceStatusResponse} */
  DescribeSchedulerInstanceStatus(data: DescribeSchedulerInstanceStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSchedulerInstanceStatusResponse>;
  /** 运维大屏-实例运行时长排行 {@link DescribeSchedulerRunTimeInstanceCntByStatusRequest} {@link DescribeSchedulerRunTimeInstanceCntByStatusResponse} */
  DescribeSchedulerRunTimeInstanceCntByStatus(data: DescribeSchedulerRunTimeInstanceCntByStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSchedulerRunTimeInstanceCntByStatusResponse>;
  /** 任务状态统计 {@link DescribeSchedulerTaskCntByStatusRequest} {@link DescribeSchedulerTaskCntByStatusResponse} */
  DescribeSchedulerTaskCntByStatus(data?: DescribeSchedulerTaskCntByStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSchedulerTaskCntByStatusResponse>;
  /** 运维大屏-任务状态分布 {@link DescribeSchedulerTaskTypeCntRequest} {@link DescribeSchedulerTaskTypeCntResponse} */
  DescribeSchedulerTaskTypeCnt(data: DescribeSchedulerTaskTypeCntRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSchedulerTaskTypeCntResponse>;
  /** 获取关联子实例 {@link DescribeSonInstancesRequest} {@link DescribeSonInstancesResponse} */
  DescribeSonInstances(data?: DescribeSonInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSonInstancesResponse>;
  /** 获取数据标准规则详情 {@link DescribeStandardRuleDetailInfoListRequest} {@link DescribeStandardRuleDetailInfoListResponse} */
  DescribeStandardRuleDetailInfoList(data: DescribeStandardRuleDetailInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStandardRuleDetailInfoListResponse>;
  /** 实例状态趋势 {@link DescribeStatisticInstanceStatusTrendOpsRequest} {@link DescribeStatisticInstanceStatusTrendOpsResponse} */
  DescribeStatisticInstanceStatusTrendOps(data: DescribeStatisticInstanceStatusTrendOpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStatisticInstanceStatusTrendOpsResponse>;
  /** 查询实时任务日志列表 {@link DescribeStreamTaskLogListRequest} {@link DescribeStreamTaskLogListResponse} */
  DescribeStreamTaskLogList(data: DescribeStreamTaskLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamTaskLogListResponse>;
  /** 智能运维-获取下游任务信息 {@link DescribeSuccessorOpsTaskInfosRequest} {@link DescribeSuccessorOpsTaskInfosResponse} */
  DescribeSuccessorOpsTaskInfos(data: DescribeSuccessorOpsTaskInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSuccessorOpsTaskInfosResponse>;
  /** 获取数据表信息 {@link DescribeTableInfoListRequest} {@link DescribeTableInfoListResponse} */
  DescribeTableInfoList(data: DescribeTableInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableInfoListResponse>;
  /** 列出表血缘信息 {@link DescribeTableLineageRequest} {@link DescribeTableLineageResponse} */
  DescribeTableLineage(data: DescribeTableLineageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableLineageResponse>;
  /** 查询表质量详情 {@link DescribeTableQualityDetailsRequest} {@link DescribeTableQualityDetailsResponse} */
  DescribeTableQualityDetails(data: DescribeTableQualityDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableQualityDetailsResponse>;
  /** 获取表schema信息 {@link DescribeTableSchemaInfoRequest} {@link DescribeTableSchemaInfoResponse} */
  DescribeTableSchemaInfo(data: DescribeTableSchemaInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableSchemaInfoResponse>;
  /** 查询表得分趋势 {@link DescribeTableScoreTrendRequest} {@link DescribeTableScoreTrendResponse} */
  DescribeTableScoreTrend(data: DescribeTableScoreTrendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableScoreTrendResponse>;
  /** 查询任务告警规则列表 {@link DescribeTaskAlarmRegulationsRequest} {@link DescribeTaskAlarmRegulationsResponse} */
  DescribeTaskAlarmRegulations(data: DescribeTaskAlarmRegulationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskAlarmRegulationsResponse>;
  /** 周期任务统计 {@link DescribeTaskByCycleRequest} {@link DescribeTaskByCycleResponse} */
  DescribeTaskByCycle(data: DescribeTaskByCycleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskByCycleResponse>;
  /** 任务状态周期增长趋势 {@link DescribeTaskByCycleReportRequest} {@link DescribeTaskByCycleReportResponse} */
  DescribeTaskByCycleReport(data: DescribeTaskByCycleReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskByCycleReportResponse>;
  /** 任务状态趋势 {@link DescribeTaskByStatusReportRequest} {@link DescribeTaskByStatusReportResponse} */
  DescribeTaskByStatusReport(data: DescribeTaskByStatusReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskByStatusReportResponse>;
  /** 查询任务具体详情【Beta版本】 {@link DescribeTaskDetailRequest} {@link DescribeTaskDetailResponse} */
  DescribeTaskDetail(data: DescribeTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskDetailResponse>;
  /** 离线任务实例详情 {@link DescribeTaskInstanceRequest} {@link DescribeTaskInstanceResponse} */
  DescribeTaskInstance(data: DescribeTaskInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInstanceResponse>;
  /** 离线任务实例统计明细 {@link DescribeTaskInstanceReportDetailRequest} {@link DescribeTaskInstanceReportDetailResponse} */
  DescribeTaskInstanceReportDetail(data: DescribeTaskInstanceReportDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInstanceReportDetailResponse>;
  /** 查询任务实例列表 {@link DescribeTaskInstancesRequest} {@link DescribeTaskInstancesResponse} */
  DescribeTaskInstances(data: DescribeTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInstancesResponse>;
  /** 查看任务锁状态信息 {@link DescribeTaskLockStatusRequest} {@link DescribeTaskLockStatusResponse} */
  DescribeTaskLockStatus(data: DescribeTaskLockStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLockStatusResponse>;
  /** 离线任务周期统计总览 {@link DescribeTaskReportRequest} {@link DescribeTaskReportResponse} */
  DescribeTaskReport(data: DescribeTaskReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskReportResponse>;
  /** 离线任务周期统计明细 {@link DescribeTaskReportDetailListRequest} {@link DescribeTaskReportDetailListResponse} */
  DescribeTaskReportDetailList(data: DescribeTaskReportDetailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskReportDetailListResponse>;
  /** 分页查询任务运行历史 {@link DescribeTaskRunHistoryRequest} {@link DescribeTaskRunHistoryResponse} */
  DescribeTaskRunHistory(data: DescribeTaskRunHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskRunHistoryResponse>;
  /** 查询任务脚本【Beta版本】 {@link DescribeTaskScriptRequest} {@link DescribeTaskScriptResponse} */
  DescribeTaskScript(data: DescribeTaskScriptRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskScriptResponse>;
  /** 根据工作流分页查询任务【Beta版本】 {@link DescribeTasksByPageRequest} {@link DescribeTasksByPageResponse} */
  DescribeTasksByPage(data: DescribeTasksByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksByPageResponse>;
  /** 查询规则模版维度分布情况 {@link DescribeTemplateDimCountRequest} {@link DescribeTemplateDimCountResponse} */
  DescribeTemplateDimCount(data?: DescribeTemplateDimCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplateDimCountResponse>;
  /** 查询规则模版操作记录 {@link DescribeTemplateHistoryRequest} {@link DescribeTemplateHistoryResponse} */
  DescribeTemplateHistory(data?: DescribeTemplateHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplateHistoryResponse>;
  /** 获取第三方运行日志 {@link DescribeThirdTaskRunLogRequest} {@link DescribeThirdTaskRunLogResponse} */
  DescribeThirdTaskRunLog(data: DescribeThirdTaskRunLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeThirdTaskRunLogResponse>;
  /** 数据质量表排行接口 {@link DescribeTopTableStatRequest} {@link DescribeTopTableStatResponse} */
  DescribeTopTableStat(data: DescribeTopTableStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopTableStatResponse>;
  /** 数据质量概览页面趋势接口 {@link DescribeTrendStatRequest} {@link DescribeTrendStatResponse} */
  DescribeTrendStat(data: DescribeTrendStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrendStatResponse>;
  /** 查询工作流画布 {@link DescribeWorkflowCanvasInfoRequest} {@link DescribeWorkflowCanvasInfoResponse} */
  DescribeWorkflowCanvasInfo(data: DescribeWorkflowCanvasInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowCanvasInfoResponse>;
  /** 查询工作流画布运行起止时间 {@link DescribeWorkflowExecuteByIdRequest} {@link DescribeWorkflowExecuteByIdResponse} */
  DescribeWorkflowExecuteById(data: DescribeWorkflowExecuteByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowExecuteByIdResponse>;
  /** 通过工作流id，查询工作流详情 {@link DescribeWorkflowInfoByIdRequest} {@link DescribeWorkflowInfoByIdResponse} */
  DescribeWorkflowInfoById(data: DescribeWorkflowInfoByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowInfoByIdResponse>;
  /** 根据项目id 获取项目下所有工作流列表 {@link DescribeWorkflowListByProjectIdRequest} {@link DescribeWorkflowListByProjectIdResponse} */
  DescribeWorkflowListByProjectId(data: DescribeWorkflowListByProjectIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowListByProjectIdResponse>;
  /** 查询运维画布信息，只需要获取边和节点 {@link DescribeWorkflowOpsCanvasInfoRequest} {@link DescribeWorkflowOpsCanvasInfoResponse} */
  DescribeWorkflowOpsCanvasInfo(data: DescribeWorkflowOpsCanvasInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowOpsCanvasInfoResponse>;
  /** 查询工作流任务数 {@link DescribeWorkflowTaskCountRequest} {@link DescribeWorkflowTaskCountResponse} */
  DescribeWorkflowTaskCount(data: DescribeWorkflowTaskCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowTaskCountResponse>;
  /** 实例诊断信息 {@link DiagnosePlusRequest} {@link DiagnosePlusResponse} */
  DiagnosePlus(data?: DiagnosePlusRequest, config?: AxiosRequestConfig): AxiosPromise<DiagnosePlusResponse>;
  /** 调试运行集成任务 {@link DryRunDIOfflineTaskRequest} {@link DryRunDIOfflineTaskResponse} */
  DryRunDIOfflineTask(data: DryRunDIOfflineTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DryRunDIOfflineTaskResponse>;
  /** 编辑基线 {@link EditBaselineRequest} {@link EditBaselineResponse} */
  EditBaseline(data: EditBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<EditBaselineResponse>;
  /** 实例批量置成功【Beta版本】 {@link ForceSucInstancesRequest} {@link ForceSucInstancesResponse} */
  ForceSucInstances(data: ForceSucInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ForceSucInstancesResponse>;
  /** 实例强制成功 {@link ForceSucScheduleInstancesRequest} {@link ForceSucScheduleInstancesResponse} */
  ForceSucScheduleInstances(data?: ForceSucScheduleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ForceSucScheduleInstancesResponse>;
  /** 批量冻结任务 {@link FreezeOpsTasksRequest} {@link FreezeOpsTasksResponse} */
  FreezeOpsTasks(data: FreezeOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeOpsTasksResponse>;
  /** 批量冻结任务【Beta版本】 {@link FreezeTasksRequest} {@link FreezeTasksResponse} */
  FreezeTasks(data: FreezeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeTasksResponse>;
  /** 基于多个工作流进行批量冻结任务操作【Beta版本】 {@link FreezeTasksByMultiWorkflowRequest} {@link FreezeTasksByMultiWorkflowResponse} */
  FreezeTasksByMultiWorkflow(data: FreezeTasksByMultiWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeTasksByMultiWorkflowResponse>;
  /** 暂停工作流下的所有任务 {@link FreezeTasksByWorkflowIdsRequest} {@link FreezeTasksByWorkflowIdsResponse} */
  FreezeTasksByWorkflowIds(data: FreezeTasksByWorkflowIdsRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeTasksByWorkflowIdsResponse>;
  /** 生成建hive表的sql {@link GenHiveTableDDLSqlRequest} {@link GenHiveTableDDLSqlResponse} */
  GenHiveTableDDLSql(data: GenHiveTableDDLSqlRequest, config?: AxiosRequestConfig): AxiosPromise<GenHiveTableDDLSqlResponse>;
  /** 提取数据集成节点字段Schema {@link GetIntegrationNodeColumnSchemaRequest} {@link GetIntegrationNodeColumnSchemaResponse} */
  GetIntegrationNodeColumnSchema(data?: GetIntegrationNodeColumnSchemaRequest, config?: AxiosRequestConfig): AxiosPromise<GetIntegrationNodeColumnSchemaResponse>;
  /** 获取离线任务实例列表(新) {@link GetOfflineDIInstanceListRequest} {@link GetOfflineDIInstanceListResponse} */
  GetOfflineDIInstanceList(data: GetOfflineDIInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetOfflineDIInstanceListResponse>;
  /** 获取离线任务实例 {@link GetOfflineInstanceListRequest} {@link GetOfflineInstanceListResponse} */
  GetOfflineInstanceList(data: GetOfflineInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetOfflineInstanceListResponse>;
  /** 实例批量终止操作【Beta版本】 {@link KillInstancesRequest} {@link KillInstancesResponse} */
  KillInstances(data: KillInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<KillInstancesResponse>;
  /** 按补录计划批量终止实例 {@link KillOpsMakePlanInstancesRequest} {@link KillOpsMakePlanInstancesResponse} */
  KillOpsMakePlanInstances(data: KillOpsMakePlanInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<KillOpsMakePlanInstancesResponse>;
  /** 批量kill实例 {@link KillScheduleInstancesRequest} {@link KillScheduleInstancesResponse} */
  KillScheduleInstances(data?: KillScheduleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<KillScheduleInstancesResponse>;
  /** 锁定集成任务 {@link LockIntegrationTaskRequest} {@link LockIntegrationTaskResponse} */
  LockIntegrationTask(data: LockIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<LockIntegrationTaskResponse>;
  /** 智能运维-批量补录任务 {@link MakeUpOpsTasksRequest} {@link MakeUpOpsTasksResponse} */
  MakeUpOpsTasks(data: MakeUpOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<MakeUpOpsTasksResponse>;
  /** 工作流补数据 {@link MakeUpTasksByWorkflowRequest} {@link MakeUpTasksByWorkflowResponse} */
  MakeUpTasksByWorkflow(data: MakeUpTasksByWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<MakeUpTasksByWorkflowResponse>;
  /** 批量补录任务【Beta版本】 {@link MakeUpTasksNewRequest} {@link MakeUpTasksNewResponse} */
  MakeUpTasksNew(data: MakeUpTasksNewRequest, config?: AxiosRequestConfig): AxiosPromise<MakeUpTasksNewResponse>;
  /** 工作流任务补录【Beta版本】 {@link MakeUpWorkflowNewRequest} {@link MakeUpWorkflowNewResponse} */
  MakeUpWorkflowNew(data: MakeUpWorkflowNewRequest, config?: AxiosRequestConfig): AxiosPromise<MakeUpWorkflowNewResponse>;
  /** 编辑基线告警状态 {@link ModifyBaselineAlarmStatusRequest} {@link ModifyBaselineAlarmStatusResponse} */
  ModifyBaselineAlarmStatus(data: ModifyBaselineAlarmStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselineAlarmStatusResponse>;
  /** 编辑基线实例中任务告警状态 {@link ModifyBaselineTaskAlarmStatusRequest} {@link ModifyBaselineTaskAlarmStatusResponse} */
  ModifyBaselineTaskAlarmStatus(data: ModifyBaselineTaskAlarmStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBaselineTaskAlarmStatusResponse>;
  /** 数据源管理-修改数据源【Beta版本】 {@link ModifyDataSourceRequest} {@link ModifyDataSourceResponse} */
  ModifyDataSource(data: ModifyDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDataSourceResponse>;
  /** 修改维度权重 {@link ModifyDimensionWeightRequest} {@link ModifyDimensionWeightResponse} */
  ModifyDimensionWeight(data: ModifyDimensionWeightRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDimensionWeightResponse>;
  /** 更新规则组执行策略 {@link ModifyExecStrategyRequest} {@link ModifyExecStrategyResponse} */
  ModifyExecStrategy(data?: ModifyExecStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExecStrategyResponse>;
  /** 文件夹更新【Beta版本】 {@link ModifyFolderRequest} {@link ModifyFolderResponse} */
  ModifyFolder(data: ModifyFolderRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFolderResponse>;
  /** 更新集成节点 {@link ModifyIntegrationNodeRequest} {@link ModifyIntegrationNodeResponse} */
  ModifyIntegrationNode(data: ModifyIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIntegrationNodeResponse>;
  /** 更新集成任务 {@link ModifyIntegrationTaskRequest} {@link ModifyIntegrationTaskResponse} */
  ModifyIntegrationTask(data: ModifyIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIntegrationTaskResponse>;
  /** 更新监控状态 {@link ModifyMonitorStatusRequest} {@link ModifyMonitorStatusResponse} */
  ModifyMonitorStatus(data?: ModifyMonitorStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMonitorStatusResponse>;
  /** 更新质量规则接口 {@link ModifyRuleRequest} {@link ModifyRuleResponse} */
  ModifyRule(data?: ModifyRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleResponse>;
  /** 更新规则组订阅信息 {@link ModifyRuleGroupSubscriptionRequest} {@link ModifyRuleGroupSubscriptionResponse} */
  ModifyRuleGroupSubscription(data?: ModifyRuleGroupSubscriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleGroupSubscriptionResponse>;
  /** 编辑规则模版 {@link ModifyRuleTemplateRequest} {@link ModifyRuleTemplateResponse} */
  ModifyRuleTemplate(data?: ModifyRuleTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleTemplateResponse>;
  /** 修改任务告警规则 {@link ModifyTaskAlarmRegularRequest} {@link ModifyTaskAlarmRegularResponse} */
  ModifyTaskAlarmRegular(data: ModifyTaskAlarmRegularRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskAlarmRegularResponse>;
  /** 更新任务【Beta版本】 {@link ModifyTaskInfoRequest} {@link ModifyTaskInfoResponse} */
  ModifyTaskInfo(data: ModifyTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskInfoResponse>;
  /** 添加父任务依赖【Beta版本】 {@link ModifyTaskLinksRequest} {@link ModifyTaskLinksResponse} */
  ModifyTaskLinks(data: ModifyTaskLinksRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskLinksResponse>;
  /** 重命名任务（任务编辑） {@link ModifyTaskNameRequest} {@link ModifyTaskNameResponse} */
  ModifyTaskName(data: ModifyTaskNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskNameResponse>;
  /** 修改任务脚本【Beta版本】 {@link ModifyTaskScriptRequest} {@link ModifyTaskScriptResponse} */
  ModifyTaskScript(data: ModifyTaskScriptRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskScriptResponse>;
  /** 更新工作流【Beta版本】 {@link ModifyWorkflowInfoRequest} {@link ModifyWorkflowInfoResponse} */
  ModifyWorkflowInfo(data: ModifyWorkflowInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkflowInfoResponse>;
  /** 更新工作流调度【Beta版本】 {@link ModifyWorkflowScheduleRequest} {@link ModifyWorkflowScheduleResponse} */
  ModifyWorkflowSchedule(data: ModifyWorkflowScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkflowScheduleResponse>;
  /** 注册事件【Beta版本】 {@link RegisterEventRequest} {@link RegisterEventResponse} */
  RegisterEvent(data: RegisterEventRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterEventResponse>;
  /** 注册事件监听器【Beta版本】 {@link RegisterEventListenerRequest} {@link RegisterEventListenerResponse} */
  RegisterEventListener(data: RegisterEventListenerRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterEventListenerResponse>;
  /** 删除编排空间工作流 {@link RemoveWorkflowDsRequest} {@link RemoveWorkflowDsResponse} */
  RemoveWorkflowDs(data: RemoveWorkflowDsRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveWorkflowDsResponse>;
  /** 实例批量重跑【Beta版本】 {@link RerunInstancesRequest} {@link RerunInstancesResponse} */
  RerunInstances(data: RerunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RerunInstancesResponse>;
  /** 补录计划重跑 {@link RerunOpsMakePlanInstancesRequest} {@link RerunOpsMakePlanInstancesResponse} */
  RerunOpsMakePlanInstances(data: RerunOpsMakePlanInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RerunOpsMakePlanInstancesResponse>;
  /** 实例批量重跑 {@link RerunScheduleInstancesRequest} {@link RerunScheduleInstancesResponse} */
  RerunScheduleInstances(data?: RerunScheduleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RerunScheduleInstancesResponse>;
  /** 重启采集器 {@link RestartInLongAgentRequest} {@link RestartInLongAgentResponse} */
  RestartInLongAgent(data: RestartInLongAgentRequest, config?: AxiosRequestConfig): AxiosPromise<RestartInLongAgentResponse>;
  /** 继续集成任务 {@link ResumeIntegrationTaskRequest} {@link ResumeIntegrationTaskResponse} */
  ResumeIntegrationTask(data: ResumeIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeIntegrationTaskResponse>;
  /** 抢占锁定集成任务 {@link RobAndLockIntegrationTaskRequest} {@link RobAndLockIntegrationTaskResponse} */
  RobAndLockIntegrationTask(data: RobAndLockIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RobAndLockIntegrationTaskResponse>;
  /** 运行任务【Beta版本】 {@link RunTaskRequest} {@link RunTaskResponse} */
  RunTask(data: RunTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RunTaskResponse>;
  /** 批量启动工作流 {@link RunTasksByMultiWorkflowRequest} {@link RunTasksByMultiWorkflowResponse} */
  RunTasksByMultiWorkflow(data: RunTasksByMultiWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<RunTasksByMultiWorkflowResponse>;
  /** 保存用户自定义函数 {@link SaveCustomFunctionRequest} {@link SaveCustomFunctionResponse} */
  SaveCustomFunction(data: SaveCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<SaveCustomFunctionResponse>;
  /** 设置任务告警【Beta版本】 {@link SetTaskAlarmNewRequest} {@link SetTaskAlarmNewResponse} */
  SetTaskAlarmNew(data: SetTaskAlarmNewRequest, config?: AxiosRequestConfig): AxiosPromise<SetTaskAlarmNewResponse>;
  /** 启动集成任务 {@link StartIntegrationTaskRequest} {@link StartIntegrationTaskResponse} */
  StartIntegrationTask(data: StartIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StartIntegrationTaskResponse>;
  /** 停止基线 {@link StopBaselineRequest} {@link StopBaselineResponse} */
  StopBaseline(data: StopBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<StopBaselineResponse>;
  /** 停止集成任务 {@link StopIntegrationTaskRequest} {@link StopIntegrationTaskResponse} */
  StopIntegrationTask(data: StopIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopIntegrationTaskResponse>;
  /** 提交基线 {@link SubmitBaselineRequest} {@link SubmitBaselineResponse} */
  SubmitBaseline(data: SubmitBaselineRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitBaselineResponse>;
  /** 提交自定义函数 {@link SubmitCustomFunctionRequest} {@link SubmitCustomFunctionResponse} */
  SubmitCustomFunction(data: SubmitCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitCustomFunctionResponse>;
  /** 提交SQL任务 {@link SubmitSqlTaskRequest} {@link SubmitSqlTaskResponse} */
  SubmitSqlTask(data: SubmitSqlTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitSqlTaskResponse>;
  /** 提交任务【Beta版本】 {@link SubmitTaskRequest} {@link SubmitTaskResponse} */
  SubmitTask(data: SubmitTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTaskResponse>;
  /** 提交工作流测试运行任务 {@link SubmitTaskTestRunRequest} {@link SubmitTaskTestRunResponse} */
  SubmitTaskTestRun(data: SubmitTaskTestRunRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTaskTestRunResponse>;
  /** 提交工作流【Beta版本】 {@link SubmitWorkflowRequest} {@link SubmitWorkflowResponse} */
  SubmitWorkflow(data: SubmitWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitWorkflowResponse>;
  /** 暂停集成任务 {@link SuspendIntegrationTaskRequest} {@link SuspendIntegrationTaskResponse} */
  SuspendIntegrationTask(data: SuspendIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SuspendIntegrationTaskResponse>;
  /** 管控日志接口 {@link TaskLogRequest} {@link TaskLogResponse} */
  TaskLog(data: TaskLogRequest, config?: AxiosRequestConfig): AxiosPromise<TaskLogResponse>;
  /** 触发事件【Beta版本】 {@link TriggerEventRequest} {@link TriggerEventResponse} */
  TriggerEvent(data: TriggerEventRequest, config?: AxiosRequestConfig): AxiosPromise<TriggerEventResponse>;
  /** 解锁集成任务 {@link UnlockIntegrationTaskRequest} {@link UnlockIntegrationTaskResponse} */
  UnlockIntegrationTask(data: UnlockIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<UnlockIntegrationTaskResponse>;
  /** 更新采集器 {@link UpdateInLongAgentRequest} {@link UpdateInLongAgentResponse} */
  UpdateInLongAgent(data: UpdateInLongAgentRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateInLongAgentResponse>;
  /** 修改工作流责任人 {@link UpdateWorkflowOwnerRequest} {@link UpdateWorkflowOwnerResponse} */
  UpdateWorkflowOwner(data: UpdateWorkflowOwnerRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkflowOwnerResponse>;
  /** 开发空间-保存任务信息 {@link UploadContentRequest} {@link UploadContentResponse} */
  UploadContent(data: UploadContentRequest, config?: AxiosRequestConfig): AxiosPromise<UploadContentResponse>;
}

export declare type Versions = ["2021-08-20"];

export default Wedata;
