/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 添加控制台用户响应 */
declare interface AddConsoleUsersRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 高级依赖配置 */
declare interface AdvancedDependencyConfig {
  /** 逻辑运算符号OR / AND */
  Operator?: string | null;
  /** 任务运行条件规则列表 */
  Conditions?: TaskRunConditionRule[] | null;
}

/** 高级运行参数（工作流高级运行时用户填入的参数） */
declare interface AdvancedParameter {
  /** 参数名 */
  ParamKey?: string | null;
  /** 参数值 */
  ParamValue?: string | null;
}

/** 告警配置 */
declare interface AlarmBrief {
  /** 告警 ID，创建时无需传入，由服务端生成 */
  AlarmId?: string | null;
  /** 告警的监控对象类型，如工作流、任务等，当前支持 1. WORKFLOW 2. TASK */
  AlarmMonitorType?: string | null;
  /** 告警组，最多 50 个 */
  AlarmGroups?: AlarmGroup[] | null;
  /** 被跳过时免打扰，默认值 false */
  DoNotDisturbWhenSkipped?: boolean | null;
  /** 被手动终止时免打扰，默认值 false */
  DoNotDisturbWhenManuallyTerminated?: boolean | null;
  /** 最后一次重试前免打扰，默认值 false */
  DoNotDisturbUntilTheLastRetry?: boolean | null;
}

/** 告警组 */
declare interface AlarmGroup {
  /** 通知渠道ID，可通过基础平台通知渠道相关接口获取 */
  ChannelId?: string | null;
  /** 通知渠道名称，可以是用户组名称或邮箱地址 */
  ChannelName?: string | null;
  /** 是否启用邮件渠道，默认值：false */
  IsEmailChannel?: boolean | null;
  /** 一组告警条件，有 启动，成功，失败和任务超时告警 */
  AlarmConditions?: string[] | null;
  /** 通知渠道类型。取值：0 未指定，1 Email，2 Webhook，3 Teams，4 Slack */
  ChannelType?: number | null;
}

/** 批量异步操作的逐项结果 */
declare interface AsyncActionRsp {
  /** 多个操作项的结果列表 */
  ActionResults?: RunActionBrief[] | null;
}

/** OneFlow 透传的 Workspace 异步文件操作信息；作业状态由 Workspace 持久化和维护 */
declare interface AsyncOperation {
  /** 是否异步执行；ZIP 解压创建时为 true */
  IsAsync: boolean | null;
  /** Workspace 持久化的异步作业 ID，用于查询作业进度 */
  JobId: string | null;
  /** 调用方生成的提交幂等与链路追踪标识 */
  OperationId: string | null;
  /** 异步作业状态：0-未指定，1-已受理，2-解压中，3-回调处理中，4-成功，5-部分失败，6-失败 */
  Status: number | null;
}

/** 通用错误信息 */
declare interface CommonFailItem {
  /** uin或者groupId */
  Item?: string;
  /** 错误信息 */
  FailReason?: string;
}

/** 控制台用户组信息（对外标准版，与内部 UserGroupRoleInfo 解耦） */
declare interface ConsoleGroupInfo {
  /** 用户组 ID */
  GroupId?: string;
  /** 用户组名称 */
  GroupName?: string;
  /** 角色列表 */
  Roles?: RoleBasicInfo[] | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 用户组下用户数量 */
  UserCount?: number;
  /** 用户组类型。取值为枚举数值的字符串形式："0"=控制台系统类型（包含全部user）、"1"=控制台自定义类型、"2"=工作空间系统类型、"3"=工作空间自定义类型 */
  GroupType?: string;
}

/** 控制台用户组成员信息（对外标准版，与内部 GroupUserInfo 解耦） */
declare interface ConsoleGroupUserInfo {
  /** 用户 UIN */
  UserUin?: string;
  /** 用户名 */
  UserName?: string;
  /** 昵称 */
  Nickname?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 控制台角色信息（对外标准版，与内部 Role 解耦） */
declare interface ConsoleRoleInfo {
  /** 角色基本信息 */
  BasicInfo?: RoleBasicInfo | null;
  /** 角色元信息 */
  MetaData?: RoleMetaData | null;
  /** 角色权限 */
  Permissions?: RolePermission[] | null;
}

/** 控制台用户信息（规范化，与内部 UserDetailInfo 解耦） */
declare interface ConsoleUserInfo {
  /** 用户 UIN */
  UserUin?: string;
  /** 用户名 */
  UserName?: string;
  /** 昵称 */
  Nickname?: string;
  /** 角色列表 */
  Roles?: RoleBasicInfo[] | null;
  /** 用户来源，group：用户组、user:用户 */
  UserSource?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 是否主账号 */
  IsOwner?: boolean;
  /** 0: 普通用户 1: entraId用户 */
  UserTag?: number;
  /** 是否具有 admin 权限的子账号 */
  IsAdmin?: boolean;
}

/** 创建控制台用户组响应 */
declare interface CreateConsoleGroupRsp {
  /** 创建成功的用户组 ID */
  GroupId?: string;
}

/** CreateWorkflowRsp */
declare interface CreateWorkflowRsp {
  /** 工作流ID */
  WorkflowId?: string | null;
}

/** 删除控制台用户组响应 */
declare interface DeleteConsoleGroupsRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 文件删除结果 */
declare interface DeleteFileResult {
  /** 被删除的文件 ID */
  FileId?: string | null;
  /** 删除是否成功 */
  Status?: boolean | null;
}

/** DeleteWorkflowRsp */
declare interface DeleteWorkflowRsp {
  /** 删除状态，true 表示成功 */
  Status?: boolean | null;
}

/** 任务依赖简要信息 */
declare interface DependOnBrief {
  /** 任务ID，可通过 ListWorkflowTasks 获取 */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
}

/** 文件运行配置 */
declare interface FileConfig {
  /** 高级运行参数，变量替换用，map-json String,String */
  Params?: string | null;
  /** 执行资源 ID。来源：ListComputeResources 接口返回的 ResourceId */
  ResourceId?: string | null;
  /** 默认 catalog */
  DefaultCatalog?: string | null;
  /** 默认 schema */
  DefaultSchema?: string | null;
  /** 高级配置，JSON 字符串 */
  AdvanceConfig?: string | null;
  /** 扩展参数，JSON 字符串 */
  ExtraParams?: string | null;
  /** Notebook 交互控件定义，JSON 字符串 */
  Widgets?: string | null;
  /** 各单元格输出配置。仅 Get 出参返回，入参忽略 */
  OutputConf?: FileOutputConf[];
  /** SQL脚本语法标记 */
  SqlSyntax?: string | null;
  /** 平台集群id */
  ClusterId?: string | null;
}

/** 文件详情 */
declare interface FileInfo {
  /** 主账号 AppId */
  AppId?: string | null;
  /** 工作空间 ID */
  WorkspaceId?: string | null;
  /** 文件 ID */
  FileId?: string | null;
  /** 文件名，含后缀 */
  FileName?: string | null;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string | null;
  /** 文件在工作空间中的完整路径，以 / 开头，如 /etl/daily/demo.ipynb */
  Path?: string | null;
  /** 文件运行配置 */
  FileConfig?: FileConfig;
  /** 绑定的 BundleId */
  BundleId?: string | null;
  /** 绑定的 BundleInfo，JSON 字符串 */
  BundleInfo?: string | null;
  /** 文件状态。active=正常，deleted=已删除 */
  Status?: string | null;
  /** 文件负责人用户名 */
  OwnerUserName?: string | null;
  /** 创建人子账号 Uin */
  CreateUserUin?: string | null;
  /** 最近更新人子账号 Uin */
  UpdateUserUin?: string | null;
  /** 创建时间，毫秒级时间戳 */
  CreateTime?: string | null;
  /** 最近更新时间，毫秒级时间戳 */
  UpdateTime?: string | null;
  /** 文件存储信息。仅当请求 IncludeContent=true 时返回内容 */
  Storage?: FileStorage;
  /** 当前调用方对该文件的权限点列表 */
  Permissions?: string | null;
  /** 是否已发布 */
  ReleaseStatus?: boolean | null;
  /** 资源模式。1=分布式，2=单节点 */
  ResourceMode?: number | null;
  /** ZIP 异步创建时透传 Workspace 作业信息；普通同步创建或其他复用该返回结构的接口不设置该字段 */
  AsyncOperation?: AsyncOperation | null;
}

/** Notebook/Python单元格输出配置 */
declare interface FileOutputConf {
  /** 单元格 ID */
  CellId?: string | null;
  /** Dashboard 图表配置，JSON 字符串 */
  DashboardConf?: string | null;
  /** 执行结果文件的预签名下载链接 */
  OutputPath?: string | null;
}

/** 文件存储 */
declare interface FileStorage {
  /** 存储类型 */
  StorageType?: number;
  /** 存储路径 */
  StoragePath?: string;
  /** 文件内容 */
  Content?: string;
}

/** GetWorkflowRsp */
declare interface GetWorkflowRsp {
  /** 工作空间ID */
  WorkspaceId?: string | null;
  /** 工作流基本信息 */
  BaseInfo?: WorkflowBaseInfoDetail | null;
  /** 工作流调度配置 */
  Trigger?: WorkflowTriggerConfiguration[] | null;
  /** 工作流参数列表 */
  ParamList?: ParamInfo[] | null;
  /** 标签列表 */
  LabelList?: LabelBrief[] | null;
  /** 工作流告警配置 */
  Alarm?: AlarmBrief | null;
  /** 监控指标配置 */
  MonitorMetric?: MonitorMetricBrief | null;
  /** 工作流高级设置 */
  AdvanceConfig?: WorkflowAdvanceConfig | null;
  /** 工作流任务列表 */
  TaskList?: WorkflowTask[] | null;
  /** 工作流绑定的 Bundle唯一标识，未绑定时为空 */
  BundleId?: string | null;
  /** Bundle信息 */
  BundleInfo?: string | null;
  /** Git配置ID */
  GitConfigId?: string | null;
  /** Git分支信息 */
  GitBranch?: string | null;
}

/** 查询工作流运行详情响应。 */
declare interface GetWorkflowRunRsp {
  /** 工作流运行信息 */
  WorkflowRun?: WorkflowRun | null;
}

/** GetWorkflowTaskRunRsp */
declare interface GetWorkflowTaskRunRsp {
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务运行ID */
  WorkflowTaskRunId?: string | null;
  /** 运行状态。取值参考工作流任务运行状态枚举，如 Pending / Running / Succeeded / Failed / Killed */
  RunState?: string | null;
  /** 工作空间ID */
  WorkspaceId?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流运行ID */
  WorkflowRunId?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述 */
  TaskTypeName?: string | null;
  /** 任务版本ID */
  TaskVersionId?: string | null;
  /** 触发类型 (参考SchedulerTriggerType枚举) */
  TriggerType?: string | null;
  /** 所属资源组ID */
  ResourceGroupId?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
  /** 运行用户UIN */
  RunUserUin?: string | null;
  /** 运行用户名称 */
  RunUserName?: string | null;
  /** 创建人UIN */
  CreateUserUin?: string | null;
  /** 执行平台执行ID */
  JobId?: string | null;
  /** 创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳 */
  UpdateTime?: string | null;
  /** 依赖任务完成时间，单位：毫秒时间戳 */
  DependenceFinishedTime?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 等待时长（依赖就绪到开始运行的等待耗时），单位：秒 */
  WaitTime?: string | null;
  /** 下发执行平台时间，单位：毫秒时间戳 */
  IssueTime?: string | null;
  /** 时区 */
  TimeZone?: string | null;
  /** 依赖上游任务ID列表。保留字段，暂时返回为[]保留字段，暂时返回为[] */
  DependOnList?: string[] | null;
  /** 运行参数 */
  RunParams?: string | null;
  /** 任务扩展信息，包含脚本路径 */
  TaskTypeExtensions?: string | null;
  /** 任务X坐标 */
  LeftCoordinate?: number | null;
  /** 任务Y坐标 */
  TopCoordinate?: number | null;
  /** 重试次数 */
  RetryTimes?: number | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 重跑次数 */
  RerunTimes?: number | null;
  /** 是否最新一次运行 */
  IsLatestRun?: boolean | null;
  /** 资源组信息列表 */
  ResourceGroupInfoList?: ResourceGroupInfo[] | null;
  /** 错误消息 */
  ErrorMessage?: string | null;
  /** 运行结果 */
  RunResult?: string | null;
  /** 内嵌工作流任务运行详情（仅限 FOR_EACH 任务，其他任务类型不返回该字段） */
  InnerWorkflowTaskRun?: InnerWorkflowTaskRun | null;
  /** 计划调度时间参数格式：毫秒时间戳（UTC） */
  ScheduledTime?: string | null;
}

/** 内嵌工作流任务简要信息（目前只有 FOR_EACH 工作流任务该字段才有值） */
declare interface InnerWorkflowTaskBrief {
  /** 任务ID */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述 */
  TaskTypeName?: string | null;
}

/** 内嵌工作流任务运行详情（仅限 FOR_EACH 任务） */
declare interface InnerWorkflowTaskRun {
  /** 当前页码 */
  PageNumber?: number | null;
  /** 每页大小 */
  PageSize?: number | null;
  /** 总记录数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 迭代运行列表 */
  Items?: InnerWorkflowTaskRunIteration[] | null;
  /** 迭代次数 */
  IterationCount?: number | null;
  /** 失败次数 */
  FailureCount?: number | null;
  /** 成功次数 */
  SuccessCount?: number | null;
  /** 内嵌工作流ID，可通过 ListWorkflows 获取 */
  InnerWorkflowId?: string | null;
  /** 内嵌任务ID，可通过 ListWorkflowTasks 获取 */
  InnerTaskId?: string | null;
  /** 内嵌任务运行状态数量统计（实例业务枚举键值对列表） */
  InnerTaskRunBizEnumInfos?: ScheduleBizEnumBrief[] | null;
}

/** 内嵌工作流单次迭代运行信息 */
declare interface InnerWorkflowTaskRunIteration {
  /** 内嵌工作流运行ID */
  WorkflowRunId?: string | null;
  /** 迭代序号 */
  IterationIndex?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 运行状态（参考工作流运行状态枚举） */
  RunState?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 运行参数 */
  WorkflowParams?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
  /** 内嵌工作流内部的任务运行 */
  InnerTaskRun?: InnerWorkflowTaskRunIterationBrief | null;
}

/** 内嵌工作流迭代中的任务运行简要信息 */
declare interface InnerWorkflowTaskRunIterationBrief {
  /** 任务运行ID */
  WorkflowTaskRunId?: string | null;
  /** 迭代序号 */
  IterationIndex?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 运行状态 */
  RunState?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 运行参数 */
  TaskParams?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
}

/** 内嵌工作流任务运行列表选项（仅限 FOR_EACH 任务使用） */
declare interface InnerWorkflowTaskRunListOption {
  /** 分页页码，从 1 开始。非必填，默认 1 */
  PageNumber?: number | null;
  /** 每页大小。非必填，默认 10，取值范围 [10, 200] */
  PageSize?: number | null;
  /** 迭代运行状态，精确匹配。非必填，多选（多个值之间为 OR 关系）。可填 SUCCESS / FAILED 等，具体参考本接口出参 InnerWorkflowTaskRunIteration.RunState 字段返回值。 */
  RunStates?: string[] | null;
}

/** 标签信息 */
declare interface LabelBrief {
  /** 标签名称 */
  LabelKey?: string | null;
  /** 标签值 */
  LabelValue?: string | null;
  /** 标签名称ID，可通过标签相关接口获取 */
  LabelKeyId?: string | null;
  /** 标签值ID，可通过标签相关接口获取 */
  LabelValueId?: string | null;
}

/** 查询控制台用户组成员列表响应 */
declare interface ListConsoleGroupUsersRsp {
  /** 用户组成员列表 */
  Items?: ConsoleGroupUserInfo[] | null;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 查询控制台用户组列表响应 */
declare interface ListConsoleGroupsRsp {
  /** 用户组列表 */
  Items?: ConsoleGroupInfo[] | null;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 查询控制台角色列表响应 */
declare interface ListConsoleRolesRsp {
  /** 角色列表 */
  Items?: ConsoleRoleInfo[] | null;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** 查询控制台用户列表响应 */
declare interface ListConsoleUsersRsp {
  /** 用户列表 */
  Items?: ConsoleUserInfo[] | null;
  /** 当前页码 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 总记录数 */
  TotalCount?: number;
  /** 总页数 */
  TotalPageNumber?: number;
}

/** ListWorkflowRunsRsp */
declare interface ListWorkflowRunsRsp {
  /** 当前页码 */
  PageNumber?: number | null;
  /** 每页大小 */
  PageSize?: number | null;
  /** 总记录数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 工作流运行列表 */
  Items?: WorkflowRun[] | null;
  /** 工作流运行状态数量统计。统计口径为当前筛选条件下的全量数据，不受 PageNumber / PageSize 影响 */
  BizStateEnumInfos?: ScheduleBizEnumBrief[] | null;
  /** 工作流运行错误码数量统计。统计口径为当前筛选条件下的全量数据，不受 PageNumber / PageSize 影响 */
  BizErrorCodeEnumInfos?: ScheduleBizEnumBrief[] | null;
}

/** 查询工作流任务运行列表响应。 */
declare interface ListWorkflowTaskRunsRsp {
  /** 当前页码 */
  PageNumber?: number | null;
  /** 每页大小 */
  PageSize?: number | null;
  /** 总记录数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 任务运行历史列表 */
  Items?: WorkflowTaskRun[] | null;
}

/** ListWorkflowsRsp */
declare interface ListWorkflowsRsp {
  /** 当前页码 */
  PageNumber?: number | null;
  /** 每页大小 */
  PageSize?: number | null;
  /** 总记录数 */
  TotalCount?: number | null;
  /** 总页数 */
  TotalPageNumber?: number | null;
  /** 工作流列表 */
  Items?: WorkflowBrief[] | null;
}

/** 监控指标配置 */
declare interface MonitorMetricBrief {
  /** 监控指标 ID，创建时无需传入，由服务端生成 */
  MonitorMetricId?: string | null;
  /** 告警的监控对象类型，如工作流、任务等，当前支持 1. WORKFLOW 2. TASK */
  AlarmMonitorType?: string | null;
  /** 监控指标列表 */
  Metrics?: MonitorMetricItem[] | null;
}

/** 单个监控指标 */
declare interface MonitorMetricItem {
  /** 监控指标类型,有三种类型：1. RUN_DURATION（运行时长）2. WAIT_DURATION（等待时长）3. COMPLETION_TIME（完成时间） */
  MetricType?: string | null;
  /** 警告阈值，单位为毫秒级别，对于COMPLETION_TIME:从当日时间点00:00起算 */
  WarningThreshold?: string | null;
  /** 超时阈值，单位为毫秒级别，对于COMPLETION_TIME:从当日时间点00:00起算 */
  TimeoutThreshold?: string | null;
}

/** 排序字段 */
declare interface OrderBy {
  /** 排序方向，Asc（升序）或 Desc（降序），大小写不敏感 */
  Direction?: string;
  /** 排序字段名 */
  Name?: string;
}

/** 参数键值对 */
declare interface ParamInfo {
  /** 参数ID，创建时无需传入，由服务端生成 */
  ParamId?: string | null;
  /** 参数名 */
  ParamKey?: string | null;
  /** 参数值 */
  ParamValue?: string | null;
}

/** 批量移除控制台用户响应 */
declare interface RemoveConsoleUsersRsp {
  /** 请求已完成处理；即使部分失败也为 true，逐个结果以 SuccessUins/FailItems 为准 */
  Status?: boolean;
  /** 删除成功的用户 UIN 列表 */
  SuccessUins?: string[];
  /** 失败项列表（Item 为用户 UIN，FailReason 为失败原因） */
  FailItems?: CommonFailItem[];
}

/** 资源组信息 */
declare interface ResourceGroupInfo {
  /** 资源组ID */
  ResourceGroupId?: string | null;
  /** 资源组名称 */
  ResourceGroupName?: string | null;
  /** 资源组状态参数格式：0 // 未指定 1 // 待创建 2 // 创建中 3 // 运行中 4 // 已停止 5 // 停止中 6 // 启动中 7 // 更新中 8 // 删除中 9 // 已删除 10 // 用户主动启动 / 自动启动（有任务提交且自动启停开启） 11 // 可用: 仅存在于数据计算型 12 // 不可用: 仅存在于数据计算型 13 // 失败 */
  ResourceGroupStatus?: string | null;
}

/** 角色基础信息 */
declare interface RoleBasicInfo {
  /** 角色ID */
  Id?: string;
  /** 角色名称 */
  Name?: string;
  /** 角色描述 */
  Description?: string;
  /** 显示名称 */
  DisplayName?: string;
  /** 角色类型 */
  RoleType?: string;
  /** 角色来源，参考 web_enum_standard.proto -> RoleSource：0=未指定 1=用户直绑 2=用户组继承 3=两者都有 */
  Source?: number;
  /** 继承来源的用户组名称列表，Source=1 时为空 */
  GroupNames?: string[];
}

/** 角色元数据 */
declare interface RoleMetaData {
  /** 创建者 */
  Creator?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新者 */
  Updater?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 角色权限 */
declare interface RolePermission {
  /** 模块ID */
  ModuleId?: string;
  /** 权限点 */
  Permissions?: string;
}

/** 单个操作项的执行结果。 由 RunWorkflow / RerunWorkflowRun / KillWorkflowRun 共用： RunWorkflow—— WorkflowId / WorkflowName 有值，WorkflowRunId 为空 RerunWorkflowRun —— WorkflowId / WorkflowName / WorkflowRunId 均有值 KillWorkflowRun —— WorkflowId / WorkflowName / WorkflowRunId 均有值 */
declare interface RunActionBrief {
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 操作动作ID，用于追踪具体的执行动作 */
  RunActionId?: string | null;
  /** 失败错误信息，操作失败时返回具体的错误描述 */
  ErrorMessage?: string | null;
  /** 操作状态，true 表示成功，false 表示失败 */
  OpStatus?: boolean | null;
  /** 工作流运行ID。重跑 / 终止场景返回被操作的运行ID；运行工作流场景为空 */
  WorkflowRunId?: string | null;
}

/** 枚举项统计（如运行状态、错误码的数量分布） */
declare interface ScheduleBizEnumBrief {
  /** 枚举标签键 */
  LabelKey?: string | null;
  /** 枚举标签值 */
  LabelValue?: string | null;
  /** 枚举项统计数量 */
  Count?: number | null;
}

/** 计划调度时间配置 */
declare interface ScheduledTimeConfig {
  /** 调度时区，IANA 时区 ID */
  ScheduledTimeZone?: string | null;
  /** 调度生效开始时间参数格式：毫秒时间戳（UTC） */
  StartTime?: string | null;
  /** 调度生效结束时间参数格式：毫秒时间戳（UTC） */
  EndTime?: string | null;
  /** 周期类型枚举值：DAY_CYCLE： 天HOUR_CYCLE： 小时MINUTE_CYCLE： 分钟WEEK_CYCLE： 周 */
  CycleType?: string | null;
  /** 周期步长 */
  CycleNum?: number | null;
}

/** 任务重试策略 */
declare interface TaskRetryStrategy {
  /** 最多重试次数，默认3 */
  MaxRetryTimes?: number | null;
  /** 重试之间等待时间，默认5 */
  RetryBetweenWaitTime?: number | null;
  /** 重试之间等待时间单位毫秒：MILLISECOND秒：SECOND分钟（默认）：MINUTE小时：HOUR */
  RetryBetweenWaitTimeUnit?: string | null;
  /** 任务运行失败时重试开关，默认为true */
  TaskRunFailureRetrySwitch?: boolean | null;
  /** 任务运行超时时重试开关，默认为false */
  TaskRunTimeoutRetrySwitch?: boolean | null;
}

/** 任务运行条件规则 */
declare interface TaskRunConditionRule {
  /** 上游任务ID */
  UpstreamTaskId?: string | null;
  /** 上游任务名称 */
  UpstreamTaskName?: string | null;
  /** 任务可运行条件支持的状态值： - SUCCESS: 成功 - FAILED: 失败 - UPSTREAM_FAILED: 上游失败 - EXCLUDED: 排除运行 */
  AllowedStates?: string[] | null;
}

/** 任务调度参数（运行/重跑工作流时的自定义参数） */
declare interface TaskSchedulingParameterBrief {
  /** 参数名 */
  ParamKey?: string | null;
  /** 参数值 */
  ParamValue?: string | null;
}

/** ### `TaskTypePropertyList` 中 `TaskTypeProperty` 针对不同任务类型需要填写不同的 key 和 value；### 1. NOTEBOOK 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || ------------ | ----------------- | ---------------------------------- | ----------------------- || Source | 来源 | 可填2或5,来源 2:GIT, 5:工作空间 | 是 || NotebookPath | Notebook 相对路径 | Source为5时，需从（ListFiles）获取 | Source 为 2、5 时，必填 |### 2. DATA_INTEGRATION 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || --------------------- | -------------------- | --------------------------------------- | -------- || Source | 来源 | 必填:4,表示来源为COS | 是 || TemplatePath | 数据接入任务配置路径 | 需从（ListBatchIngestionTasks）接口获取 | 是 || DataIntegrationTaskId | 数据接入任务ID | 需从（ListBatchIngestionTasks）接口获取 | 是 |### 3. RUN_WORKFLOW 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || ---------- | ---------- | ----------------------------- | -------- || WorkflowId | 选择工作流 | 需从（ListWorkflows）接口获取 | 是 |### 4. SQL 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || --------------- | ----------- | --------------------------------------------- | -------------------- || Source | 来源 | 可填2或5,来源 2:GIT, 5:工作空间 | 是 || SqlPath | SQL脚本路径 | SQL脚本路径 | Source 为 2 时，必填 || CodeFileName | 文件名称 | Source为5时，需从（ListReleasedQueries）接口获取 | 否 || CodeFileId | 文件ID | Source为5时，需从（ListReleasedQueries）接口获取 | Source 为 5 时，必填 || CodeFileVersion | 文件版本 | Source为5时，需从（ListReleasedQueries）接口获取 | 否 |### 5. PYTHON 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || ---------- | -------------- | -------------------------------------- | -------- || Source | 来源 | 可填2或5,来源 2:GIT, 5:工作空间 | 是 || SourcePath | Python脚本路径 | Source为5时，需从（ListFiles）接口获取 | 是 |### 6. DATA_QUALITY（质量监控）任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || -------------- | ---------------- | --------------------------------------------- | -------- || Source | 来源 | 必填:4,表示来源为COS | 是 || TemplatePath | 质量监控配置路径 | 需从（ListDataQualityTaskSummaries）接口获取 | 是 || SourceUniqueId | 质量监控ID | 需从（ListDataQualityTaskSummaries）接口获取 | 是 || ExecutionType | 执行类型 | 必填:SQL | 是 || AfterAspect | 质量任务后置切面 | 需从（ListDataQualityTaskSummaries）接口获取 | 否 || BeforeAspect | 质量任务前置切面 | 需从（ListDataQualityTaskSummaries）接口获取 | 否 |### 7. IF_ELSE 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || ---------- | -------- | --------------- | -------- || Conditions | 条件列表 | IF-ELSE条件配置 | 是 |### 8. FOR_EACH 任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || -------------- | ------------ | ---------------------------------- | -------- || MaxConcurrency | 最大并发数 | 最大并发数，默认为1 | 是 || MaxIterations | 最大迭代次数 | 最大迭代次数，默认1000 | 是 || LoopDataArray | 循环参数 | JSON格式的数组，或 {{}} 包裹的变量 | 是 |### 9. RAY_JOB（Ray作业）任务类型#### 属性配置| 属性键 | 属性名称 | 描述 | 是否必需 || -------------- | -------------------- | ---------------------------------- | -------- || RunMode | 运行方式 | 运行方式，取值：SERVERLESS（按需拉起集群）/ DEDICATED（提交到指定集群）。默认 DEDICATED | 是 || Entrypoint | 入口指令 | 入口指令 | 是 || JobConfig | 任务配置 | 如存储配置 + 计算环境。传值请参考前端页面保存Ray作业任务时调用UpdateWorkflow。Image请调用DLC接口ListImages接口Url字段获取 | RunMode 为 SERVERLESS 时，必填 || ClusterId | Ray 集群 | 需从所选计算资源下已配置的 Ray 集群（引擎）列表中选择，可通过计算资源相关接口获取 | RunMode 为 DEDICATED 时，必填 || Source | 任务来源 | 任务来源，取值：1（本地文件）/ 5（工作空间） | 是 || JobPackage | 任务来源文件地址 | 任务来源路径：Source 为 1 时存本地上传文件的 COS 地址（支持 .zip / .py 文件）；Source 为 5 时存所选工作空间文件/文件夹路径 | 是 || JobPackageName | 任务来源本地文件名 | 任务来源本地文件名 | Source 为 1 时，必填 || CodeFileId | 代码文件ID | Source 为 5 时，需从工作空间文件选择组件获取所选文件/文件夹对应的ID | Source 为 5 时，必填 || WorkspaceEntryType | 工作空间入口类型 | Source 为 5 时，所选工作空间条目的类型：FILE（文件）/ FOLDER（文件夹），由前端选择器随选择目标自动写入 | Source 为 5 时，必填 |### RuntimePropertyList任务运行参数列表，用于配置任务运行时的计算资源，与 TaskTypePropertyList（任务扩展属性）区分：TaskTypePropertyList 承载任务自身的业务配置（如脚本来源、路径等），RuntimePropertyList 承载任务运行时的资源配置（如资源模式、CU规格、Executor数量等）。主要适用于需要配置计算资源的任务类型（如 NOTEBOOK、PYTHON）。具体可填写的属性键以任务类型属性配置为准，可通过 ListWorkflowTaskTypeProperties 接口获取（propertyType 为 RUNTIME 的属性项）。常见运行参数键说明：| 属性键 | 属性名称 | 描述 | 必填性（联动条件满足时） | 默认值 || ---------- | -------------- | ---------------------------------- | -------- | -------- || ResourceMode | 资源模式 | 1：分布式；2：单节点 | 是 | 1 || ConfigType | 配置类型 | DEFAULT：默认配置；CUSTOM：自定义配置 | 是 | DEFAULT || ExecutorAllocation | Executor分配模式 | DYNAMIC：动态分配；FIXED：固定分配 | 是（分布式且自定义配置时） | DYNAMIC || ExecutorMinNum | Executor最小个数 | 正整数 | 是（动态分配时） | 1 || ExecutorMaxNum | Executor最大个数 | 正整数 | 是（动态分配时） | 1 || ExecutorFixedNum | Executor固定个数 | 正整数 | 否（固定分配时） | - || ExecutorCU | Executor资源规格 | small / medium / large / xlarge / 4xlarge | 否（分布式且自定义配置时） | - || DriverCU | Driver资源规格 | small / medium / large / xlarge / 4xlarge | 否（分布式且自定义配置时 或者单节点时） | - || ExecutorGPU | Executor GPU数量 | 0表示不使用GPU | 否（分布式且自定义配置时） | - || DriverGPU | Driver GPU数量 | 0表示不使用GPU | 否（分布式且自定义配置时） | - || Style | 配置样式 | UI / JSON | 是（自定义配置时） | UI |补充说明：1. "必填性"指属性配置中的必填标记，仅当属性联动条件（如 ResourceMode=1 且 ConfigType=CUSTOM）满足时才触发必填校验；2. ConfigType 为 DEFAULT（默认配置）时，需调用 ListComputeResourceOptions 接口获取所选计算资源的默认规格值，并将其填充到运行参数（ExecutorCU、DriverCU、ExecutorMinNum、ExecutorMaxNum 等）后传入；ConfigType 为 CUSTOM（自定义配置）时，运行参数由调用方自行指定； */
declare interface TaskType {
  /** 任务类型：SQL：用于执行SQL查询和数据处理操作；DATA_INTEGRATION：用于离线数据接入操作；NOTEBOOK：用于运行Notebook脚本；RUN_WORKFLOW：用于执行嵌套工作流；PYTHON：用于运行Python脚本；RAY_JOB：用于运行Ray作业；DATA_QUALITY：用于数据质量监控；IF_ELSE：用于条件分支判断；FOR_EACH：用于循环遍历执行； */
  TaskTypeName?: string | null;
  /** Notebook 类型扩展信息 */
  Notebook?: TaskTypeNotebookExt | null;
  /** 任务扩展属性列表，具体填写参考 ListWorkflowTaskTypeProperties 接口 */
  TaskTypePropertyList?: TaskTypeProperty[] | null;
  /** 运行时属性列表 */
  RuntimePropertyList?: TaskTypeProperty[] | null;
}

/** Notebook 类型任务扩展 */
declare interface TaskTypeNotebookExt {
  /** 脚本来源。取值：SCRIPT_SOURCE_LOCAL（本地）/ SCRIPT_SOURCE_GIT（Git 仓库）/SCRIPT_SOURCE_CFS（CFS 文件系统）/ SCRIPT_SOURCE_COS（COS 对象存储）/SCRIPT_SOURCE_WORKSPACE（工作空间） */
  Source?: string | null;
  /** 前端显示使用，对执行平台无意义 */
  DisplayPath?: string | null;
  /** Notebook 相对路径 */
  NotebookPath?: string | null;
  /** Notebook 绝对路径 */
  NotebookAbsolutePath?: string | null;
}

/** 任务类型属性键值对 */
declare interface TaskTypeProperty {
  /** 属性名 */
  PropertyKey?: string | null;
  /** 属性值 */
  PropertyValue?: string | null;
}

/** UnbindWorkflowBundleRsp */
declare interface UnbindWorkflowBundleRsp {
  /** 操作状态，true 表示成功 */
  Status?: boolean | null;
}

/** 修改控制台用户组响应 */
declare interface UpdateConsoleGroupRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** 修改控制台用户响应 */
declare interface UpdateConsoleUsersRsp {
  /** 操作是否成功 */
  Status?: boolean;
}

/** UpdateWorkflowRsp */
declare interface UpdateWorkflowRsp {
  /** 更新状态，true 表示成功 */
  Status?: boolean | null;
}

/** 工作流完整配置 */
declare interface Workflow {
  /** 工作空间ID，可通过 ListWorkspaces 获取 */
  WorkspaceId?: string | null;
  /** 工作流基本信息 */
  BaseInfo?: WorkflowBaseInfo | null;
  /** 工作流调度配置 */
  Trigger?: WorkflowTriggerConfiguration[] | null;
  /** 工作流参数列表 参数名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=><!--'，最长128个字符--> */
  ParamList?: ParamInfo[] | null;
  /** 标签 标签名必填且只能包含数字、大小写字母、空格、.$@#!%^&amp;*()-_+=><!--'，最长128个字符--> */
  LabelList?: LabelBrief[] | null;
  /** 工作流告警配置 */
  Alarm?: AlarmBrief | null;
  /** 监控指标配置 */
  MonitorMetric?: MonitorMetricBrief | null;
  /** 工作流高级设置 */
  AdvanceConfig?: WorkflowAdvanceConfig | null;
  /** 工作流任务列表 */
  TaskList?: WorkflowTask[] | null;
  /** BundleId，可通过 Bundle 相关接口获取 */
  BundleId?: string | null;
  /** Bundle信息 */
  BundleInfo?: string | null;
  /** GIT配置ID，对应GetWorkspaceConfig接口中的ConfigKey */
  GitConfigId?: string | null;
  /** Git分支信息 */
  GitBranch?: string | null;
}

/** 工作流高级设置 */
declare interface WorkflowAdvanceConfig {
  /** 排队模式，ON（默认）, OFF */
  QueuingMode?: string | null;
  /** 默认值为1QueuingMode为ON时，MaxConcurrentNum 设置才生效；只能输入大于0的整数，输入非法值自动转换为1 */
  MaxConcurrentNum?: number | null;
}

/** 工作流基本信息（入参用） */
declare interface WorkflowBaseInfo {
  /** 工作流名称，长度不超过 1024 */
  WorkflowName?: string | null;
  /** 工作流ID，创建时无需传入，由服务端生成 */
  WorkflowId?: string | null;
  /** 工作流运行人UIN */
  RunUserUin?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 工作流负责人用户名 */
  OwnerUserName?: string | null;
  /** 创建人UIN。系统生成字段，入参传值不生效（服务端忽略且不报错）【已废弃】服务端忽略传入值，不报错。 */
  CreateUserUin?: string | null;
}

/** 工作流基本信息（出参用，含系统生成字段与负责人展示信息） */
declare interface WorkflowBaseInfoDetail {
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 创建人UIN */
  CreateUserUin?: string | null;
  /** 工作流运行人UIN */
  RunUserUin?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 工作流负责人用户名 */
  OwnerUserName?: string | null;
  /** 工作流负责人UIN */
  OwnerUserUin?: string | null;
  /** 工作流负责人展示名 */
  OwnerDisplayName?: string | null;
  /** 创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳 */
  UpdateTime?: string | null;
}

/** 工作流列表项 */
declare interface WorkflowBrief {
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 创建人UIN */
  CreateUserUin?: string | null;
  /** 工作流负责人用户名 */
  OwnerUserName?: string | null;
  /** 工作流负责人UIN */
  OwnerUserUin?: string | null;
  /** 工作流负责人展示名 */
  OwnerDisplayName?: string | null;
  /** 创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳 */
  UpdateTime?: string | null;
  /** 标签列表 */
  LabelList?: LabelBrief[] | null;
  /** 工作流调度配置 */
  Trigger?: WorkflowTriggerConfiguration[] | null;
  /** 工作流运行人UIN */
  RunUserUin?: string | null;
  /** 工作流运行人用户名 */
  RunUserName?: string | null;
  /** 工作流任务节点列表 */
  TaskList?: WorkflowTaskNodeBrief[] | null;
  /** 工作流运行情况列表 */
  WorkflowRunList?: WorkflowRunBrief[] | null;
  /** 资源组信息列表 */
  ResourceGroupInfoList?: ResourceGroupInfo[] | null;
  /** 授权权限类型PERMISSION_TYPE_UNSPECIFIED：未指定权限MANAGE : 管理权限：包含所有操作权限RUN : 运行权限：可执行实体VIEW : 查看权限：可查看实体内容 */
  Permission?: string | null;
  /** 工作流绑定的 Bundle 唯一标识，未绑定时为空 */
  BundleId?: string | null;
  /** Bundle信息 */
  BundleInfo?: string | null;
  /** Git配置ID */
  GitConfigId?: string | null;
  /** Git分支信息 */
  GitBranch?: string | null;
}

/** 工作流运行信息 */
declare interface WorkflowRun {
  /** 主账号ID */
  AppId?: string | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流运行ID */
  WorkflowRunId?: string | null;
  /** 工作空间ID */
  WorkspaceId?: string | null;
  /** 触发方式，Scheduler、ManualTrigger、Event (参考SchedulerTriggerType) */
  TriggerType?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** pending 状态开始时间，单位：毫秒时间戳 */
  PendingStartTime?: string | null;
  /** queue 状态开始时间，单位：毫秒时间戳 */
  QueueStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 终态时间，运行进入终态时都有值，单位：毫秒时间戳 */
  EndTime?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 并发排队花费时间，单位：秒 */
  QueueCostTime?: string | null;
  /** 等待资源花费时间，单位：秒 */
  PendingCostTime?: string | null;
  /** 运行状态。CREATE("初始化"), QUEUED("等待中"), PENDING("准备中"), RUNNING("运行中"), SKIPPED("跳过运行"), SUCCESS("成功"), FAILED("失败"), TERMINATING("终止中"), TERMINATED("终止"), CANCELLED("被手动终止")等 */
  RunState?: string | null;
  /** 计算资源（任务的资源组ID集合） */
  ResourceGroupIds?: string[] | null;
  /** 运行用户UIN */
  RunUserUin?: string | null;
  /** 运行用户名称 */
  RunUserName?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
  /** 运行参数 */
  WorkflowParams?: string | null;
  /** 工作流版本ID */
  WorkflowVersionId?: string | null;
  /** 当前工作流是否支持重跑 */
  SupportRerun?: boolean | null;
  /** 工作流运行创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 重跑次数 */
  RerunTimes?: number | null;
  /** 运行的任务范围，任务ID列表 */
  SelectedTaskIds?: string[] | null;
  /** 资源组信息列表 */
  ResourceGroupInfoList?: ResourceGroupInfo[] | null;
  /** 标签列表 */
  LabelList?: LabelBrief[] | null;
  /** 父工作流运行ID 【由嵌套工作流触发独有】 */
  ParentWorkflowRunId?: string | null;
  /** 父工作流任务运行ID 【由嵌套工作流触发独有】 */
  ParentWorkflowTaskRunId?: string | null;
  /** 父工作流任务运行名称 【由嵌套工作流触发独有】 */
  ParentWorkflowTaskRunName?: string | null;
  /** 授权权限类型PERMISSION_TYPE_UNSPECIFIED：未指定权限MANAGE : 管理权限：包含所有操作权限RUN : 运行权限：可执行实体VIEW : 查看权限：可查看实体内容 */
  Permission?: string | null;
  /** 工作流高级运行时用户填入的参数 */
  AdvancedParameters?: AdvancedParameter[] | null;
  /** 计划调度时间参数格式：毫秒时间戳（UTC） */
  ScheduledTime?: string | null;
}

/** 工作流列表项的运行情况 */
declare interface WorkflowRunBrief {
  /** 工作流运行ID */
  WorkflowRunId?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行状态 */
  RunState?: string | null;
  /** 运行错误码 */
  ErrorCodeString?: string | null;
}

/** 工作流任务信息。 注意：本结构同时用于入参（CreateWorkflow / UpdateWorkflow）与出参（GetWorkflow）， 其中 CreateTime / UpdateTime / CreateUserUin 为系统生成字段，仅在出参中有值， 入参传值不生效（服务端忽略且不报错）。 */
declare interface WorkflowTask {
  /** 任务参数 */
  ParamList?: ParamInfo[] | null;
  /** 任务依赖 */
  DependOnList?: DependOnBrief[] | null;
  /** 任务ID，创建时无需传入，由服务端生成 */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务类型 */
  TaskType?: TaskType | null;
  /** 资源组ID，可通过资源组相关接口获取 */
  ResourceGroupId?: string | null;
  /** 任务描述 */
  Description?: string | null;
  /** 任务告警 */
  Alarm?: AlarmBrief | null;
  /** 监控指标 */
  MonitorMetric?: MonitorMetricBrief | null;
  /** 任务重试策略 */
  TaskRetryStrategy?: TaskRetryStrategy | null;
  /** 任依赖运行条件ALL_SUCCESS: 全部成功：所有上游依赖任务均已执行并成功ONE_SUCCESS: 至少一个成功：至少有一个上游依赖任务成功NONE_FAILED: 目前没有失败：没有依赖任务失败，并且至少有一个依赖任务在运行中ALL_DONE: 全部完成：所有上游依赖任务均已执行并完成（无论成功或失败ONE_FAILED: 至少一个失败：至少有一个上游依赖任务失败ALL_FAILED: 全部失败：所有上游依赖任务都失败ALL_DONE_AT_LEAST_ONE_SUCCESS：上游全部完成至少一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个成功，则依赖判断成功，否则就是跳过运行ALL_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ONE_DONE：至少一个完成：上游只要有一个完成了，就进行依赖判断，且依赖判断成功，否则还是等待上游ALL_DONE_NONE_FAILED_AT_LEAST_ONE_SUCCESS：上游全部完成，没有失败，至少有一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，上游没有一个失败且至少有一个成功的情况下，依赖判断成功，否则就是跳过运行NONE_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ALL_DONE_AT_LEAST_ONE_FAILED：上游全部完成至少一个失败: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个失败，则依赖判断成功，否则就是跳过运行ADVANCED:运行条件为高级模式时配置 */
  DependOnRunCondition?: string | null;
  /** 任务X坐标 */
  LeftCoordinate?: number | null;
  /** 任务Y坐标 */
  TopCoordinate?: number | null;
  /** 任务高级运行参数，当DependOnRunCondition为ADVANCED时配置 */
  AdvancedDependencyConfig?: AdvancedDependencyConfig | null;
  /** 内嵌任务（FOR_EACH任务的子任务） */
  InnerTask?: WorkflowTask | null;
  /** 创建时间，单位：毫秒时间戳。出参专用，系统生成，入参传值不生效【已废弃】服务端忽略传入值，不报错。 */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳。出参专用，系统生成，入参传值不生效【已废弃】服务端忽略传入值，不报错。 */
  UpdateTime?: string | null;
  /** 创建人UIN。出参专用，系统生成，入参传值不生效【已废弃】服务端忽略传入值，不报错。 */
  CreateUserUin?: string | null;
}

/** 工作流列表项中的工作流任务节点简要信息 */
declare interface WorkflowTaskNodeBrief {
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述 */
  TaskTypeName?: string | null;
  /** 任务依赖列表 */
  DependOnList?: DependOnBrief[] | null;
  /** 任务资源组ID */
  ResourceGroupId?: string | null;
  /** 任务资源组名称 */
  ResourceGroupName?: string | null;
  /** 任务X坐标 */
  LeftCoordinate?: number | null;
  /** 任务Y坐标 */
  TopCoordinate?: number | null;
  /** 任务重试策略 */
  TaskRetryStrategy?: TaskRetryStrategy | null;
  /** 任依赖运行条件ALL_SUCCESS: 全部成功：所有上游依赖任务均已执行并成功ONE_SUCCESS: 至少一个成功：至少有一个上游依赖任务成功NONE_FAILED: 目前没有失败：没有依赖任务失败，并且至少有一个依赖任务在运行中ALL_DONE: 全部完成：所有上游依赖任务均已执行并完成（无论成功或失败ONE_FAILED: 至少一个失败：至少有一个上游依赖任务失败ALL_FAILED: 全部失败：所有上游依赖任务都失败ALL_DONE_AT_LEAST_ONE_SUCCESS：上游全部完成至少一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个成功，则依赖判断成功，否则就是跳过运行ALL_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ONE_DONE：至少一个完成：上游只要有一个完成了，就进行依赖判断，且依赖判断成功，否则还是等待上游ALL_DONE_NONE_FAILED_AT_LEAST_ONE_SUCCESS：上游全部完成，没有失败，至少有一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，上游没有一个失败且至少有一个成功的情况下，依赖判断成功，否则就是跳过运行NONE_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ALL_DONE_AT_LEAST_ONE_FAILED：上游全部完成至少一个失败: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个失败，则依赖判断成功，否则就是跳过运行ADVANCED:运行条件为高级模式时配置 */
  DependOnRunCondition?: string | null;
  /** 高级依赖配置 */
  AdvancedDependencyConfig?: AdvancedDependencyConfig | null;
  /** 内嵌工作流任务节点 */
  InnerTask?: WorkflowTaskNodeBrief | null;
}

/** 工作流任务运行信息 */
declare interface WorkflowTaskRun {
  /** 任务名称 */
  TaskName?: string | null;
  /** 任务运行ID */
  WorkflowTaskRunId?: string | null;
  /** 运行状态。取值参考工作流任务运行状态枚举，如 Pending / Running / Succeeded / Failed / Killed */
  RunState?: string | null;
  /** 工作空间ID */
  WorkspaceId?: string | null;
  /** 工作流ID */
  WorkflowId?: string | null;
  /** 工作流运行ID */
  WorkflowRunId?: string | null;
  /** 任务ID */
  TaskId?: string | null;
  /** 任务类型名称，请参考数据结构TaskType中TaskTypeName字段描述 */
  TaskTypeName?: string | null;
  /** 任务版本ID */
  TaskVersionId?: string | null;
  /** 触发类型 (参考SchedulerTriggerType枚举) */
  TriggerType?: string | null;
  /** 所属资源组ID */
  ResourceGroupId?: string | null;
  /** 错误码 */
  ErrorCodeString?: string | null;
  /** 运行用户UIN */
  RunUserUin?: string | null;
  /** 运行用户名称 */
  RunUserName?: string | null;
  /** 创建人UIN */
  CreateUserUin?: string | null;
  /** 执行平台执行ID */
  JobId?: string | null;
  /** 创建时间，单位：毫秒时间戳 */
  CreateTime?: string | null;
  /** 更新时间，单位：毫秒时间戳 */
  UpdateTime?: string | null;
  /** 依赖任务完成时间，单位：毫秒时间戳 */
  DependenceFinishedTime?: string | null;
  /** 运行开始时间，单位：毫秒时间戳 */
  RunStartTime?: string | null;
  /** 运行结束时间，单位：毫秒时间戳 */
  RunEndTime?: string | null;
  /** 运行时长，单位：秒 */
  RunCostTime?: string | null;
  /** 等待时长（依赖就绪到开始运行的等待耗时），单位：秒 */
  WaitTime?: string | null;
  /** 下发执行平台时间，单位：毫秒时间戳 */
  IssueTime?: string | null;
  /** 时区 */
  TimeZone?: string | null;
  /** 依赖上游任务ID列表。保留字段，暂时返回为[]保留字段，暂时返回为[] */
  DependOnList?: string[] | null;
  /** 运行参数 */
  RunParams?: string | null;
  /** 任务扩展信息，包含脚本路径 */
  TaskTypeExtensions?: string | null;
  /** 任务X坐标 */
  LeftCoordinate?: number | null;
  /** 任务Y坐标 */
  TopCoordinate?: number | null;
  /** 重试次数，为 0 则表示首次运行 */
  RetryTimes?: number | null;
  /** 工作流名称 */
  WorkflowName?: string | null;
  /** 重跑次数 */
  RerunTimes?: number | null;
  /** 是否最新一次运行 */
  IsLatestRun?: boolean | null;
  /** 资源组信息列表 */
  ResourceGroupInfoList?: ResourceGroupInfo[] | null;
  /** 运行结果 */
  RunResult?: string | null;
  /** 任务依赖运行条件ALL_SUCCESS: 全部成功：所有上游依赖任务均已执行并成功ONE_SUCCESS: 至少一个成功：至少有一个上游依赖任务成功NONE_FAILED: 目前没有失败：没有依赖任务失败，并且至少有一个依赖任务在运行中ALL_DONE: 全部完成：所有上游依赖任务均已执行并完成（无论成功或失败ONE_FAILED: 至少一个失败：至少有一个上游依赖任务失败ALL_FAILED: 全部失败：所有上游依赖任务都失败ALL_DONE_AT_LEAST_ONE_SUCCESS：上游全部完成至少一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个成功，则依赖判断成功，否则就是跳过运行ALL_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ONE_DONE：至少一个完成：上游只要有一个完成了，就进行依赖判断，且依赖判断成功，否则还是等待上游ALL_DONE_NONE_FAILED_AT_LEAST_ONE_SUCCESS：上游全部完成，没有失败，至少有一个成功: 所有上游依赖任务都达到终态时，进行依赖判断，上游没有一个失败且至少有一个成功的情况下，依赖判断成功，否则就是跳过运行NONE_SKIPPED：上游全部完成，没有跳过运行: 所有上游依赖任务都达到终态时，进行依赖判断, 如果上游状态全部都是成功、失败、上游失败状态，则依赖判断成功，否则为跳过运行ALL_DONE_AT_LEAST_ONE_FAILED：上游全部完成至少一个失败: 所有上游依赖任务都达到终态时，进行依赖判断，至少有一个失败，则依赖判断成功，否则就是跳过运行ADVANCED:运行条件为高级模式时配置 */
  DependOnRunCondition?: string | null;
  /** 高级依赖配置 */
  AdvancedDependencyConfig?: AdvancedDependencyConfig | null;
  /** 内嵌工作流任务信息 */
  InnerTask?: InnerWorkflowTaskBrief | null;
  /** 计划调度时间参数格式：毫秒时间戳，UTC */
  ScheduledTime?: string | null;
}

/** 工作流调度高级配置。 */
declare interface WorkflowTriggerAdvancedConfiguration {
  /** 任务重试模式 */
  TaskRetryMode?: string | null;
}

/** 工作流调度配置。 */
declare interface WorkflowTriggerConfiguration {
  /** 调度配置ID，创建时无需传入，由服务端生成 */
  TriggerId?: string | null;
  /** 调度状态 启动：START，暂停：PAUSE */
  SchedulerStatus?: string | null;
  /** 触发方式，定时触发：TIME_TRIGGER持续运行：CONTINUE_RUN注意：TIME_TRIGGER 模式下，SchedulerStatus、SchedulerTimeZone、StartTime、EndTime、ConfigMode、CycleType、CrontabExpression 必填；CONTINUE_RUN 模式下，AdvancedConfig必填； */
  TriggerMode?: string | null;
  /** 调度时区 */
  SchedulerTimeZone?: string | null;
  /** 调度生效时间，单位：毫秒时间戳。必须小于 EndTime */
  StartTime?: string | null;
  /** 调度结束时间，单位：毫秒时间戳。必须大于 StartTime */
  EndTime?: string | null;
  /** 配置方式，常规：COMMON，CRON表达式：CRON_EXPRESSION */
  ConfigMode?: string | null;
  /** 周期类型：支持的类型为 ONEOFF_CYCLE: 一次性 YEAR_CYCLE: 年 MONTH_CYCLE: 月 WEEK_CYCLE: 周 DAY_CYCLE: 天HOUR_CYCLE: 小时 MINUTE_CYCLE: 分钟 CRONTAB_CYCLE: crontab表达式类型 */
  CycleType?: string | null;
  /** cron表达式 */
  CrontabExpression?: string | null;
  /** Json格式，对账使用 */
  ExtraInfo?: string | null;
  /** 高级配置 */
  AdvancedConfig?: WorkflowTriggerAdvancedConfiguration | null;
}

declare interface AddConsoleUsersRequest {
  /** 用户 UIN 列表，单次最多100个 */
  UserUins: string[];
  /** 角色 ID 列表枚举值：2001： 控制台管理员2002： 控制台成员 */
  RoleIds: string[];
}

declare interface AddConsoleUsersResponse {
  /** 返回结果 */
  Data?: AddConsoleUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConsoleGroupRequest {
  /** 用户组名称 */
  GroupName: string;
  /** 用户组别名 */
  GroupNickname?: string;
  /** 用户组描述 */
  Description?: string;
}

declare interface CreateConsoleGroupResponse {
  /** 返回结果 */
  Data?: CreateConsoleGroupRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFileRequest {
  /** 工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId */
  WorkspaceId: string;
  /** 文件名，含后缀，最长 255 字节。不能以 . 或 .. 开头/结尾，不能含空格与控制字符 */
  FileName: string;
  /** 父文件夹路径，以 / 开头、末尾不带 /，根目录传 /。来源：ListFiles 接口返回的 Path */
  ParentFolderPath?: string;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string;
  /** 文件运行配置 */
  FileConfig?: FileConfig;
  /** 绑定的 BundleId。来源：ListBundles 接口返回的 BundleId */
  BundleId?: string;
  /** 绑定的 BundleInfo，JSON 字符串 */
  BundleInfo?: string;
  /** 文件初始内容。不传则按FileType 生成默认内容 */
  Storage?: FileStorage;
  /** 是否将 Storage 中的 ZIP 文件异步解压创建，默认 false。true 时异步作业由 Workspace 负责全生命周期，响应仅通过 AsyncOperation 返回作业信息（FileId 为空）；作业进度查询由基础平台 WS 接口实现，不在本协议中定义。 */
  ExtractArchive?: boolean;
}

declare interface CreateFileResponse {
  /** 返回结果 */
  Data?: FileInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流基本信息。必填，其中 WorkflowName 必填且工作空间内唯一 */
  BaseInfo: WorkflowBaseInfo;
  /** 工作流调度配置 */
  Trigger?: WorkflowTriggerConfiguration[];
  /** 工作流参数列表 */
  ParamList?: ParamInfo[];
  /** 标签列表 */
  LabelList?: LabelBrief[];
  /** 工作流告警配置 */
  Alarm?: AlarmBrief;
  /** 监控指标配置。若告警条件中选择了监控告警，则本字段必填 */
  MonitorMetric?: MonitorMetricBrief;
  /** 工作流高级设置 */
  AdvanceConfig?: WorkflowAdvanceConfig;
  /** 工作流任务列表 */
  TaskList?: WorkflowTask[];
  /** BundleId，可通过 Bundle 相关接口获取 */
  BundleId?: string;
  /** Bundle信息 */
  BundleInfo?: string;
  /** Git配置ID，可通过 Git 配置相关接口获取 */
  GitConfigId?: string;
  /** Git分支信息 */
  GitBranch?: string;
}

declare interface CreateWorkflowResponse {
  /** 创建工作流响应内容 */
  Data?: CreateWorkflowRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConsoleGroupsRequest {
  /** 要删除的用户组 ID 列表 */
  GroupIds: string[];
}

declare interface DeleteConsoleGroupsResponse {
  /** 返回结果 */
  Data?: DeleteConsoleGroupsRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFileRequest {
  /** 工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId */
  WorkspaceId: string;
  /** 文件 ID。来源：CreateFile / ListFiles / GetFile 接口返回的 FileId */
  FileId: string;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string;
}

declare interface DeleteFileResponse {
  /** 返回结果 */
  Data?: DeleteFileResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 待删除的工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
}

declare interface DeleteWorkflowResponse {
  /** 删除工作流响应内容 */
  Data?: DeleteWorkflowRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetFileRequest {
  /** 工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId */
  WorkspaceId: string;
  /** 文件 ID。来源：CreateFile / ListFiles 接口返回的 FileId。与 FilePath 二选一 */
  FileId?: string;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string;
  /** 是否返回文件内容。true 时 Storage.Content 返回 base64 内容，默认 false */
  IncludeContent?: boolean;
  /** 文件版本 ID。来源：ListFileVersions 接口返回的 VersionId。不传则读取最新版本 */
  VersionId?: string;
  /** 文件完整路径，以 / 开头，如 /etl/daily/demo.ipynb。与 FileId 二选一 */
  FilePath?: string;
}

declare interface GetFileResponse {
  /** 返回结果 */
  Data?: FileInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
}

declare interface GetWorkflowResponse {
  /** 获取工作流详细信息响应内容 */
  Data?: GetWorkflowRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWorkflowRunRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流运行ID，可通过 ListWorkflowRuns 获取。必填 */
  WorkflowRunId: string;
}

declare interface GetWorkflowRunResponse {
  /** 查询工作流运行详情响应内容 */
  Data?: GetWorkflowRunRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetWorkflowTaskRunRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 任务运行ID，可通过 ListWorkflowTaskRuns 获取。必填 */
  WorkflowTaskRunId: string;
  /** 内嵌工作流任务运行列表选项（仅限 FOR_EACH 任务使用）。非必填 */
  InnerWorkflowTaskRunListOption?: InnerWorkflowTaskRunListOption;
}

declare interface GetWorkflowTaskRunResponse {
  /** 查询任务运行详情响应内容 */
  Data?: GetWorkflowTaskRunRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillWorkflowRunRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
  /** 待终止的工作流运行ID列表，可通过 ListWorkflowRuns 获取 */
  WorkflowRunIds?: string[];
  /** 是否终止该工作流下所有未进入终态的运行。非必填，默认 false */
  KillAllRuns?: boolean;
  /** 是否只终止处于等待中（Pending）状态的运行。非必填，默认 false */
  OnlyKillPendingRuns?: boolean;
}

declare interface KillWorkflowRunResponse {
  /** 终止工作流的运行响应内容 */
  Data?: AsyncActionRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConsoleGroupUsersRequest {
  /** 用户组 ID */
  GroupId: string;
  /** 用户名称或 UIN 模糊匹配 */
  UserKeyword?: string;
  /** 通过 UIN 批量查询用户信息 */
  UserUins?: string[];
  /** 多字段排序，如 [{Name: 'CreateTime', Direction: 'DESC'}, {Name: 'UserName', Direction: 'ASC'}]，默认按创建时间降序 */
  OrderBys?: OrderBy[];
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小，默认10，最小10，最大200 */
  PageSize?: number;
}

declare interface ListConsoleGroupUsersResponse {
  /** 返回结果 */
  Data?: ListConsoleGroupUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConsoleGroupsRequest {
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小，默认10，最小10，最大200 */
  PageSize?: number;
  /** 通过用户组 ID 批量查询 */
  GroupIds?: string[];
  /** 用户组名称模糊匹配 */
  GroupKeyword?: string;
  /** 多字段排序，如 [{Name: 'CreateTime', Direction: 'Desc'}, {Name: 'UserName', Direction: 'Asc'}]，默认按创建时间降序 */
  OrderBys?: OrderBy[];
}

declare interface ListConsoleGroupsResponse {
  /** 返回结果 */
  Data?: ListConsoleGroupsRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConsoleRolesRequest {
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小，默认10，最小10，最大200 */
  PageSize?: number;
  /** 角色名称或描述模糊匹配 */
  RoleKeyword?: string;
}

declare interface ListConsoleRolesResponse {
  /** 返回结果 */
  Data?: ListConsoleRolesRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListConsoleUsersRequest {
  /** 页码，从1开始，默认1 */
  PageNumber?: number;
  /** 每页大小，默认10，最小10，最大200 */
  PageSize?: number;
  /** 用户名称与 UIN 模糊匹配 */
  UserKeyword?: string;
  /** 用于过滤角色关联的用户枚举值：2001： 控制台管理员2002： 控制台成员 */
  RoleIds?: string[];
  /** 多字段排序，如 [{Name: 'CreateTime', Direction: 'Desc'}, {Name: 'UserName', Direction: 'Asc'}]，默认按创建时间降序 */
  OrderBys?: OrderBy[];
}

declare interface ListConsoleUsersResponse {
  /** 控制台用户列表 */
  Data?: ListConsoleUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkflowRunsRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 分页页码，从 1 开始。非必填，默认 1 */
  PageNumber?: number;
  /** 每页大小。非必填，默认 10，取值范围 [10, 200] */
  PageSize?: number;
  /** 工作流ID，精确匹配。非必填，单值 */
  WorkflowId?: string;
  /** 工作流名称关键字，对 WorkflowName 做模糊匹配。非必填，单值 */
  WorkflowNameKeyword?: string;
  /** 运行创建时间下界，范围匹配（CreateTime >= 本值），单位：毫秒时间戳。非必填，单值，对应出参 WorkflowRun.CreateTime */
  CreateStartTime?: string;
  /** 运行创建时间上界，范围匹配（CreateTime <= 本值），单位：毫秒时间戳。非必填，单值，对应出参 WorkflowRun.CreateTime */
  CreateEndTime?: string;
  /** 运行状态，精确匹配。非必填，多选（多个值之间为 OR 关系）。可填 SUCCESS / FAILED 等，具体参考本接口出参 WorkflowRun.RunState 字段返回值。 */
  RunStates?: string[];
  /** 错误码，精确匹配。非必填，多选（多个值之间为 OR 关系） */
  ErrorCodeStrings?: string[];
  /** 运行人UIN，精确匹配。非必填，多选（多个值之间为 OR 关系） */
  RunUserUins?: string[];
  /** 标签名称ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系） */
  LabelKeyIds?: string[];
  /** 标签值ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系） */
  LabelValueIds?: string[];
  /** 排序条件，多个之间按数组顺序表示优先级。非必填，默认按 CreateTime Desc。可排序字段白名单：CreateTime、EndTime、RunCostTime */
  OrderBys?: OrderBy[];
}

declare interface ListWorkflowRunsResponse {
  /** 工作流运行列表响应内容 */
  Data?: ListWorkflowRunsRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkflowTaskRunsRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 任务ID，可通过 ListWorkflowTasks 获取。非必填，精确匹配。与 WorkflowRunId 至少传一个：仅传 TaskId 时查询该任务的全部运行历史。 */
  TaskId?: string;
  /** 工作流运行ID，可通过 ListWorkflowRuns 获取。非必填，精确匹配。与 TaskId 至少传一个：仅传 WorkflowRunId 时查询该次工作流运行下的全部任务运行。 */
  WorkflowRunId?: string;
  /** 分页页码，从 1 开始。非必填，默认 1 */
  PageNumber?: number;
  /** 每页大小。非必填，默认 10，取值范围 [10, 200] */
  PageSize?: number;
}

declare interface ListWorkflowTaskRunsResponse {
  /** 查询工作流任务历史运行列表响应内容 */
  Data?: ListWorkflowTaskRunsRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListWorkflowsRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 分页页码，从 1 开始。非必填，默认 1 */
  PageNumber?: number;
  /** 每页大小。非必填，默认 10，取值范围 [10, 200] */
  PageSize?: number;
  /** 工作流名称关键字，对 WorkflowName 做模糊匹配。非必填，单值 */
  WorkflowNameKeyword?: string;
  /** 工作流名称，精确匹配。非必填，多选（多个值之间为 OR 关系） */
  WorkflowNames?: string[];
  /** 工作流ID，精确匹配。非必填，多选（多个值之间为 OR 关系） */
  WorkflowIds?: string[];
  /** 工作流运行人UIN，精确匹配。非必填，多选（多个值之间为 OR 关系） */
  RunUserUins?: string[];
  /** 标签名称ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系） */
  LabelKeyIds?: string[];
  /** 标签值ID，精确匹配，可通过标签相关接口获取。非必填，多选（多个值之间为 OR 关系） */
  LabelValueIds?: string[];
  /** 快速筛选类型。非必填，单值对齐老云 API（wedata/2025-10-10）文档示例值：MY_FAVORITE：我收藏的MY_OWNER：我负责的MY_AUTHORITY：我有权限WorkflowId：支持多个工作流ID筛选后端实现现状：当前仅 MY_FAVORITE 生效（设置 favoriteUserUin 过滤当前用户收藏），MY_OWNER / MY_AUTHORITY 暂未在 Service 层实现，传入会被忽略（按全量返回）。 */
  QuickSelectionType?: string;
  /** 排序条件，多个之间按数组顺序表示优先级。非必填。可排序字段白名单：CreateTime */
  OrderBys?: OrderBy[];
}

declare interface ListWorkflowsResponse {
  /** 查询工作流列表响应内容 */
  Data?: ListWorkflowsRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveConsoleUsersRequest {
  /** 必填，待移除的用户 UIN 列表，单次最多10个 */
  UserUins: string[];
}

declare interface RemoveConsoleUsersResponse {
  /** 批量移除控制台用户结果 */
  Data?: RemoveConsoleUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RerunWorkflowRunRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
  /** 工作流运行ID，可通过 ListWorkflowRuns 获取。必填 */
  WorkflowRunId: string;
  /** 运行类型。必填。取值：1 普通运行，2 高级运行 */
  RunType: number;
  /** 运行类型为高级运行时填写的自定义运行参数 */
  AdvancedParams?: TaskSchedulingParameterBrief[];
  /** 本次需要重跑指定的任务ID集合，可通过 ListWorkflowTasks 获取，不传默认重跑该工作流下所有任务 */
  TaskIds?: string[];
  /** 计划调度时间列表配置 */
  ScheduledTimeConfig?: ScheduledTimeConfig;
}

declare interface RerunWorkflowRunResponse {
  /** 重跑工作流响应内容 */
  Data?: AsyncActionRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
  /** 运行类型。必填。取值：1 普通运行，2 高级运行 */
  RunType: number;
  /** 运行类型为高级运行时填写的自定义运行参数 */
  AdvancedParams?: TaskSchedulingParameterBrief[];
  /** 本次需要运行指定的任务ID集合，可通过 ListWorkflowTasks 获取，不传默认运行该工作流下所有任务 */
  TaskIds?: string[];
  /** 幂等令牌。非必填，相同令牌的重复请求只会触发一次运行 */
  IdempotencyToken?: string;
  /** 计划调度时间列表配置 */
  ScheduledTimeConfig?: ScheduledTimeConfig;
}

declare interface RunWorkflowResponse {
  /** 运行工作流响应内容 */
  Data?: AsyncActionRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindWorkflowBundleRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
}

declare interface UnbindWorkflowBundleResponse {
  /** 解绑工作流Bundle信息响应内容 */
  Data?: UnbindWorkflowBundleRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateConsoleGroupRequest {
  /** 用户组 ID */
  GroupId: string;
  /** 修改标识：USER_GROUP_OPER_TYPE_ADD_USER(1)=添加成员、USER_GROUP_OPER_TYPE_DELETE_USER(2)=删除成员、USER_GROUP_OPER_TYPE_BASIC_INFO(3)=基础信息（别名和描述） */
  OperType: number;
  /** 用户组名称 */
  GroupName?: string;
  /** 用户组别名 */
  GroupNickname?: string;
  /** 用户组描述 */
  Description?: string;
  /** 成员 UIN 列表（OperType 为添加/删除成员时使用） */
  UserUins?: string[];
}

declare interface UpdateConsoleGroupResponse {
  /** 返回结果 */
  Data?: UpdateConsoleGroupRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateConsoleUsersRequest {
  /** 用户 UIN 列表，单次最多100个 */
  UserUins: string[];
  /** 角色 ID 列表枚举值：2001： 控制台管理员2002： 控制台成员 */
  RoleIds: string[];
}

declare interface UpdateConsoleUsersResponse {
  /** 返回结果 */
  Data?: UpdateConsoleUsersRsp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateFileRequest {
  /** 工作空间 ID。来源：ListWorkspaces 接口返回的 WorkspaceId */
  WorkspaceId: string;
  /** 文件 ID。来源：CreateFile / ListFiles / GetFile 接口返回的 FileId */
  FileId: string;
  /** 文件运行配置。不传则不更新配置 */
  FileConfig?: FileConfig;
  /** 文件类型。取值：FILE（普通文件/脚本）、NOTEBOOK_FILE（Notebook）、SQL_FILE（SQL文件）。对应 common/domain/entity.proto EntityType */
  FileType?: string;
  /** 绑定的 BundleId。来源：ListBundles 接口返回的 BundleId */
  BundleId?: string;
  /** 绑定的 BundleInfo，JSON 字符串 */
  BundleInfo?: string;
  /** 文件内容。不传则不更新内容 */
  Storage?: FileStorage;
  /** 目标文件名，非空且与当前文件名不同时执行 rename 动作。长度不超过 SCRIPT_NAME_MAX_LENGTH，禁止以 . 或 .. 开头/结尾，禁止空格、双点、控制字符及 Linux 保留名（参考 docs/linux_filename_rules.md）。与 ExtensionType 一起校验后缀合法性 */
  FileName?: string;
  /** 目标父目录路径，非空时执行 move 动作。根目录传 /；与 FileName 可同时出现，语义为「移动+重命名」。与 CreateFile 的 ParentFolderPath 保持一致 */
  ParentFolderPath?: string;
  /** 目标父目录的 FileType。取值：FOLDER、GIT_FOLDER。仅当 ParentFolderPath 非空时使用；缺省时按解析出的父目录实际类型处理 */
  TargetFileType?: string;
  /** 动作类型（必填，未来版本会强制校验）。取值：1 = UPDATE_CONTENT（仅更新 FileConfig / Storage / Bundle*，禁止传 FileName / ParentFolderPath / TargetFileType）；2 = RENAME（仅重命名，必须传 FileName，禁止传 ParentFolderPath / FileConfig / Storage / Bundle*）；3 = MOVE（仅移动，必须传 ParentFolderPath，禁止传 FileName / FileConfig / Storage / Bundle*）。参数互斥校验失败会返回 ParamIllegal 错误 */
  UpdateAction?: number;
}

declare interface UpdateFileResponse {
  /** 返回结果 */
  Data?: FileInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkflowRequest {
  /** 工作空间ID，可通过 ListWorkspaces 获取。必填 */
  WorkspaceId: string;
  /** 待更新的工作流ID，可通过 ListWorkflows 获取。必填 */
  WorkflowId: string;
  /** 需要清空的字段名列表，用于将指定字段重置为空 */
  FieldToRemoveList?: string[];
  /** 更新后的工作流配置，仅传入需要变更的部分即可 */
  NewSetting?: Workflow;
}

declare interface UpdateWorkflowResponse {
  /** 更新工作流响应内容 */
  Data?: UpdateWorkflowRsp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Databuddy 大数据智能体工作台DataBuddy} */
declare interface Databuddy {
  (): Versions;
  /** 添加控制台用户 {@link AddConsoleUsersRequest} {@link AddConsoleUsersResponse} */
  AddConsoleUsers(data: AddConsoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<AddConsoleUsersResponse>;
  /** 创建控制台用户组 {@link CreateConsoleGroupRequest} {@link CreateConsoleGroupResponse} */
  CreateConsoleGroup(data: CreateConsoleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConsoleGroupResponse>;
  /** 创建代码文件 {@link CreateFileRequest} {@link CreateFileResponse} */
  CreateFile(data: CreateFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileResponse>;
  /** 创建工作流 {@link CreateWorkflowRequest} {@link CreateWorkflowResponse} */
  CreateWorkflow(data: CreateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowResponse>;
  /** 删除控制台用户组 {@link DeleteConsoleGroupsRequest} {@link DeleteConsoleGroupsResponse} */
  DeleteConsoleGroups(data: DeleteConsoleGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConsoleGroupsResponse>;
  /** 删除代码文件 {@link DeleteFileRequest} {@link DeleteFileResponse} */
  DeleteFile(data: DeleteFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFileResponse>;
  /** 删除工作流 {@link DeleteWorkflowRequest} {@link DeleteWorkflowResponse} */
  DeleteWorkflow(data: DeleteWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowResponse>;
  /** 获取代码文件详情 {@link GetFileRequest} {@link GetFileResponse} */
  GetFile(data: GetFileRequest, config?: AxiosRequestConfig): AxiosPromise<GetFileResponse>;
  /** 获取工作流详细信息 {@link GetWorkflowRequest} {@link GetWorkflowResponse} */
  GetWorkflow(data: GetWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<GetWorkflowResponse>;
  /** 查询工作流运行详情 {@link GetWorkflowRunRequest} {@link GetWorkflowRunResponse} */
  GetWorkflowRun(data: GetWorkflowRunRequest, config?: AxiosRequestConfig): AxiosPromise<GetWorkflowRunResponse>;
  /** 查询任务运行详情 {@link GetWorkflowTaskRunRequest} {@link GetWorkflowTaskRunResponse} */
  GetWorkflowTaskRun(data: GetWorkflowTaskRunRequest, config?: AxiosRequestConfig): AxiosPromise<GetWorkflowTaskRunResponse>;
  /** 终止工作流的运行 {@link KillWorkflowRunRequest} {@link KillWorkflowRunResponse} */
  KillWorkflowRun(data: KillWorkflowRunRequest, config?: AxiosRequestConfig): AxiosPromise<KillWorkflowRunResponse>;
  /** 查询控制台用户组成员列表 {@link ListConsoleGroupUsersRequest} {@link ListConsoleGroupUsersResponse} */
  ListConsoleGroupUsers(data: ListConsoleGroupUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ListConsoleGroupUsersResponse>;
  /** 查询控制台用户组列表 {@link ListConsoleGroupsRequest} {@link ListConsoleGroupsResponse} */
  ListConsoleGroups(data?: ListConsoleGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ListConsoleGroupsResponse>;
  /** 查询控制台角色列表 {@link ListConsoleRolesRequest} {@link ListConsoleRolesResponse} */
  ListConsoleRoles(data?: ListConsoleRolesRequest, config?: AxiosRequestConfig): AxiosPromise<ListConsoleRolesResponse>;
  /** 查询控制台用户列表 {@link ListConsoleUsersRequest} {@link ListConsoleUsersResponse} */
  ListConsoleUsers(data?: ListConsoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<ListConsoleUsersResponse>;
  /** 工作流运行列表 {@link ListWorkflowRunsRequest} {@link ListWorkflowRunsResponse} */
  ListWorkflowRuns(data: ListWorkflowRunsRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkflowRunsResponse>;
  /** 查询工作流任务历史运行列表 {@link ListWorkflowTaskRunsRequest} {@link ListWorkflowTaskRunsResponse} */
  ListWorkflowTaskRuns(data: ListWorkflowTaskRunsRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkflowTaskRunsResponse>;
  /** 查询工作流列表 {@link ListWorkflowsRequest} {@link ListWorkflowsResponse} */
  ListWorkflows(data: ListWorkflowsRequest, config?: AxiosRequestConfig): AxiosPromise<ListWorkflowsResponse>;
  /** 批量移除控制台用户 {@link RemoveConsoleUsersRequest} {@link RemoveConsoleUsersResponse} */
  RemoveConsoleUsers(data: RemoveConsoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveConsoleUsersResponse>;
  /** 重跑工作流 {@link RerunWorkflowRunRequest} {@link RerunWorkflowRunResponse} */
  RerunWorkflowRun(data: RerunWorkflowRunRequest, config?: AxiosRequestConfig): AxiosPromise<RerunWorkflowRunResponse>;
  /** 运行工作流 {@link RunWorkflowRequest} {@link RunWorkflowResponse} */
  RunWorkflow(data: RunWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<RunWorkflowResponse>;
  /** 解绑工作流Bundle信息 {@link UnbindWorkflowBundleRequest} {@link UnbindWorkflowBundleResponse} */
  UnbindWorkflowBundle(data: UnbindWorkflowBundleRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindWorkflowBundleResponse>;
  /** 修改控制台用户组 {@link UpdateConsoleGroupRequest} {@link UpdateConsoleGroupResponse} */
  UpdateConsoleGroup(data: UpdateConsoleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateConsoleGroupResponse>;
  /** 修改控制台用户角色 {@link UpdateConsoleUsersRequest} {@link UpdateConsoleUsersResponse} */
  UpdateConsoleUsers(data: UpdateConsoleUsersRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateConsoleUsersResponse>;
  /** 更新代码文件 {@link UpdateFileRequest} {@link UpdateFileResponse} */
  UpdateFile(data: UpdateFileRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFileResponse>;
  /** 更新工作流 {@link UpdateWorkflowRequest} {@link UpdateWorkflowResponse} */
  UpdateWorkflow(data: UpdateWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkflowResponse>;
}

export declare type Versions = ["2026-07-15"];

export default Databuddy;
