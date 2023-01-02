/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 查询-保护策略 */
declare interface DescribePolicy {
  /** 保护策略ID列表 */
  TaskPolicyIdList: string[];
  /** 保护策略状态 */
  TaskPolicyStatus: string;
  /** 策略规则 */
  TaskPolicyRule: string;
  /** 护栏策略生效处理策略 1:顺序执行，2:暂停 */
  TaskPolicyDealType: number | null;
}

/** 用于传入创建、编辑标签 */
declare interface TagWithCreate {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 展示标签列表 */
declare interface TagWithDescribe {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 任务 */
declare interface Task {
  /** 任务ID */
  TaskId: number;
  /** 任务标题 */
  TaskTitle: string;
  /** 任务描述 */
  TaskDescription: string;
  /** 自定义标签 */
  TaskTag: string | null;
  /** 任务状态，1001--未开始 1002--进行中（执行）1003--进行中（暂停）1004--执行结束 */
  TaskStatus: number | null;
  /** 任务结束状态，表明任务以何种状态结束: 0 -- 尚未结束，1 -- 成功，2-- 失败，3--终止 */
  TaskStatusType: number;
  /** 保护策略 */
  TaskProtectStrategy: string | null;
  /** 任务创建时间 */
  TaskCreateTime: string;
  /** 任务更新时间 */
  TaskUpdateTime: string;
  /** 任务动作组 */
  TaskGroups: TaskGroup[];
  /** 开始时间 */
  TaskStartTime: string | null;
  /** 结束时间 */
  TaskEndTime: string | null;
  /** 是否符合预期。1：符合预期，2：不符合预期 */
  TaskExpect: number | null;
  /** 演习记录 */
  TaskSummary: string | null;
  /** 任务模式。1:手工执行，2:自动执行 */
  TaskMode: number;
  /** 自动暂停时长。单位分钟 */
  TaskPauseDuration: number;
  /** 演练创建者Uin */
  TaskOwnerUin: string;
  /** 地域ID */
  TaskRegionId: number;
  /** 监控指标列表 */
  TaskMonitors: TaskMonitor[] | null;
  /** 保护策略 */
  TaskPolicy: DescribePolicy | null;
  /** 标签列表 */
  Tags?: TagWithDescribe[] | null;
}

/** 从经验模板创建演练时需要配置的任务参数 */
declare interface TaskConfig {
  /** 动作组配置，需要保证配置个数和经验中的动作组个数一致 */
  TaskGroupsConfig: TaskGroupConfig[];
  /** 更改后的演练名称，不填则默认取经验名称 */
  TaskTitle?: string;
  /** 更改后的演练描述，不填则默认取经验描述 */
  TaskDescription?: string;
  /** 演练执行模式：1----手工执行/ 2 ---自动执行，不填则默认取经验执行模式 */
  TaskMode?: number;
  /** 演练自动暂停时间，单位分钟, 不填则默认取经验自动暂停时间 */
  TaskPauseDuration?: number;
  /** 演练标签信息，不填则默认取经验标签 */
  Tags?: TagWithCreate[];
}

/** 任务分组 */
declare interface TaskGroup {
  /** 任务动作ID */
  TaskGroupId: number;
  /** 分组标题 */
  TaskGroupTitle: string;
  /** 分组描述 */
  TaskGroupDescription: string | null;
  /** 任务分组顺序 */
  TaskGroupOrder: number;
  /** 对象类型ID */
  ObjectTypeId: number;
  /** 任务分组创建时间 */
  TaskGroupCreateTime: string;
  /** 任务分组更新时间 */
  TaskGroupUpdateTime: string;
  /** 动作分组动作列表 */
  TaskGroupActions: TaskGroupAction[];
  /** 实例列表 */
  TaskGroupInstanceList: string[];
  /** 执行模式。1 --- 顺序执行，2 --- 阶段执行 */
  TaskGroupMode: number;
}

/** 任务分组动作 */
declare interface TaskGroupAction {
  /** 任务分组动作ID */
  TaskGroupActionId: number;
  /** 任务分组动作实例列表 */
  TaskGroupInstances: TaskGroupInstance[];
  /** 动作ID */
  ActionId: number;
  /** 分组动作顺序 */
  TaskGroupActionOrder: number;
  /** 分组动作通用配置 */
  TaskGroupActionGeneralConfiguration: string | null;
  /** 分组动作自定义配置 */
  TaskGroupActionCustomConfiguration: string | null;
  /** 分组动作状态 */
  TaskGroupActionStatus: number;
  /** 动作分组创建时间 */
  TaskGroupActionCreateTime: string;
  /** 动作分组更新时间 */
  TaskGroupActionUpdateTime: string;
  /** 动作名称 */
  ActionTitle: string;
  /** 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止，4--跳过 */
  TaskGroupActionStatusType: number;
  /** RandomId */
  TaskGroupActionRandomId: number | null;
  /** RecoverId */
  TaskGroupActionRecoverId: number | null;
  /** ExecuteId */
  TaskGroupActionExecuteId: number | null;
  /** 调用api类型，0:tat, 1:云api */
  ActionApiType?: number | null;
  /** 1:故障，2:恢复 */
  ActionAttribute?: number | null;
  /** 动作类型：平台、自定义 */
  ActionType?: string | null;
  /** 是否可重试 */
  IsExecuteRedo?: boolean | null;
  /** 动作风险级别 */
  ActionRisk?: string | null;
  /** 动作运行时间 */
  TaskGroupActionExecuteTime?: number | null;
}

/** 动作组中的动作参数 */
declare interface TaskGroupActionConfig {
  /** 该动作在动作组中的顺序，从1开始，不填或填错将匹配不到经验中要修改参数的动作 */
  TaskGroupActionOrder?: number;
  /** 动作通用参数，需要json序列化传入，可以从查询经验详情接口获取，不填默认使用经验中动作参数 */
  TaskGroupActionGeneralConfiguration?: string;
  /** 动作自定义参数，需要json序列化传入，可以从查询经验详情接口获取，不填默认使用经验中动作参数 */
  TaskGroupActionCustomConfiguration?: string;
}

/** 动作组的配置项 */
declare interface TaskGroupConfig {
  /** 动作组所关联的实例对象 */
  TaskGroupInstances: string[];
  /** 动作组标题，不填默认取经验中的动作组名称 */
  TaskGroupTitle?: string;
  /** 动作组描述，不填默认取经验中的动作组描述 */
  TaskGroupDescription?: string;
  /** 动作执行模式。1 --- 顺序执行，2 --- 阶段执行, 不填默认取经验中的动作组执行模式 */
  TaskGroupMode?: number;
  /** 动作组中的动作参数，不填默认使用经验中的动作参数，配置时可以只指定想要修改参数的动作 */
  TaskGroupActionsConfig?: TaskGroupActionConfig[];
}

/** 任务分组动作实例 */
declare interface TaskGroupInstance {
  /** 实例ID */
  TaskGroupInstanceId: number;
  /** 实例ID */
  TaskGroupInstanceObjectId: string | null;
  /** 实例动作执行状态 */
  TaskGroupInstanceStatus: number;
  /** 实例动作执行日志 */
  TaskGroupInstanceExecuteLog: string | null;
  /** 实例创建时间 */
  TaskGroupInstanceCreateTime: string;
  /** 实例更新时间 */
  TaskGroupInstanceUpdateTime: string;
  /** 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止，4--跳过 */
  TaskGroupInstanceStatusType: number;
  /** 执行开始时间 */
  TaskGroupInstanceStartTime: string | null;
  /** 执行结束时间 */
  TaskGroupInstanceEndTime: string | null;
  /** 实例是否可重试 */
  TaskGroupInstanceIsRedo?: boolean | null;
  /** 动作实例执行时间 */
  TaskGroupInstanceExecuteTime?: number | null;
}

/** 任务列表信息 */
declare interface TaskListItem {
  /** 任务ID */
  TaskId: number;
  /** 任务标题 */
  TaskTitle: string;
  /** 任务描述 */
  TaskDescription: string;
  /** 任务标签 */
  TaskTag: string | null;
  /** 任务状态(1001 -- 未开始 1002 -- 进行中 1003 -- 暂停中 1004 -- 任务结束) */
  TaskStatus: number;
  /** 任务创建时间 */
  TaskCreateTime: string;
  /** 任务更新时间 */
  TaskUpdateTime: string;
  /** 0--未开始，1--进行中，2--已完成 */
  TaskPreCheckStatus: number | null;
  /** 环境检查是否通过 */
  TaskPreCheckSuccess: boolean | null;
}

/** 监控指标 */
declare interface TaskMonitor {
  /** 监控指标ID */
  TaskMonitorId: number;
  /** 监控指标对象类型ID */
  TaskMonitorObjectTypeId: number;
  /** 指标名称 */
  MetricName: string;
  /** 实例ID列表 */
  InstancesIds: string[];
  /** 中文指标 */
  MetricChineseName: string | null;
  /** 单位 */
  Unit: string | null;
}

/** 演练报告状态信息 */
declare interface TaskReportInfo {
  /** 0--未开始，1--正在导出，2--导出成功，3--导出失败 */
  Stage: number;
  /** 创建时间 */
  CreateTime: string;
  /** 有效期截止时间 */
  ExpirationTime: string;
  /** 是否有效 */
  Expired: boolean;
  /** 演练报告cos文件地址 */
  CosUrl: string | null;
  /** 演练报告导出日志 */
  Log: string | null;
}

/** 经验库 */
declare interface Template {
  /** 经验库ID */
  TemplateId: number;
  /** 经验库标题 */
  TemplateTitle: string;
  /** 经验库描述 */
  TemplateDescription: string;
  /** 自定义标签 */
  TemplateTag: string | null;
  /** 使用状态。1 ---- 使用中，2 --- 停用 */
  TemplateIsUsed: number;
  /** 经验库创建时间 */
  TemplateCreateTime: string;
  /** 经验库更新时间 */
  TemplateUpdateTime: string;
  /** 经验库模式。1:手工执行，2:自动执行 */
  TemplateMode: number;
  /** 自动暂停时长。单位分钟 */
  TemplatePauseDuration: number;
  /** 演练创建者Uin */
  TemplateOwnerUin: string;
  /** 地域ID */
  TemplateRegionId: number;
  /** 动作组 */
  TemplateGroups: TemplateGroup[];
  /** 监控指标 */
  TemplateMonitors: TemplateMonitor[];
  /** 护栏监控 */
  TemplatePolicy: TemplatePolicy | null;
  /** 标签列表 */
  Tags: TagWithDescribe[] | null;
}

/** 任务分组 */
declare interface TemplateGroup {
  /** 经验库动作ID */
  TemplateGroupId: number;
  /** 经验库动作分组动作列表 */
  TemplateGroupActions: TemplateGroupAction[];
  /** 分组标题 */
  Title: string;
  /** 分组描述 */
  Description: string | null;
  /** 分组顺序 */
  Order: number;
  /** 执行模式。1 --- 顺序执行，2 --- 阶段执行 */
  Mode: number;
  /** 对象类型ID */
  ObjectTypeId: number;
  /** 分组创建时间 */
  CreateTime: string;
  /** 分组更新时间 */
  UpdateTime: string;
}

/** 任务分组动作 */
declare interface TemplateGroupAction {
  /** 经验库分组动作ID */
  TemplateGroupActionId: number;
  /** 动作ID */
  ActionId: number;
  /** 分组动作顺序 */
  Order: number;
  /** 分组动作通用配置 */
  GeneralConfiguration: string | null;
  /** 分组动作自定义配置 */
  CustomConfiguration: string | null;
  /** 动作分组创建时间 */
  CreateTime: string;
  /** 动作分组更新时间 */
  UpdateTime: string;
  /** 动作名称 */
  ActionTitle: string;
  /** 自身随机id */
  RandomId: number | null;
  /** 恢复动作id */
  RecoverId: number | null;
  /** 执行动作id */
  ExecuteId: number | null;
  /** 调用api类型，0:tat, 1:云api */
  ActionApiType?: number | null;
  /** 1:故障，2:恢复 */
  ActionAttribute?: number | null;
  /** 动作类型：平台和自定义 */
  ActionType?: string | null;
}

/** 经验库列表信息 */
declare interface TemplateListItem {
  /** 经验库ID */
  TemplateId: number;
  /** 经验库标题 */
  TemplateTitle: string;
  /** 经验库描述 */
  TemplateDescription: string;
  /** 经验库标签 */
  TemplateTag: string | null;
  /** 经验库状态。1 -- 使用中，2 -- 停用 */
  TemplateIsUsed: number;
  /** 经验库创建时间 */
  TemplateCreateTime: string;
  /** 经验库更新时间 */
  TemplateUpdateTime: string;
  /** 经验库关联的任务数量 */
  TemplateUsedNum: number;
}

/** 监控指标 */
declare interface TemplateMonitor {
  /** 监控指标ID */
  MonitorId: number;
  /** 监控指标对象类型ID */
  ObjectTypeId: number;
  /** 指标名称 */
  MetricName: string;
  /** 中文指标 */
  MetricChineseName: string | null;
}

/** 保护策略 */
declare interface TemplatePolicy {
  /** 保护策略ID列表 */
  TemplatePolicyIdList: string[];
  /** 策略规则 */
  TemplatePolicyRule: string;
  /** 护栏策略生效处理策略 1:顺序执行，2:暂停 */
  TemplatePolicyDealType: number;
}

declare interface CreateTaskFromTemplateRequest {
  /** 从经验库中查询到的经验模版ID */
  TemplateId: number;
  /** 演练的配置参数 */
  TaskConfig: TaskConfig;
}

declare interface CreateTaskFromTemplateResponse {
  /** 创建成功的演练ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTaskRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DeleteTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskExecuteLogsRequest {
  /** 任务ID */
  TaskId: number;
  /** 返回的内容行数 */
  Limit: number;
  /** 日志起始的行数。 */
  Offset: number;
}

declare interface DescribeTaskExecuteLogsResponse {
  /** 日志数据 */
  LogMessage: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskListRequest {
  /** 分页Limit */
  Limit: number;
  /** 分页Offset */
  Offset: number;
  /** 演练名称 */
  TaskTitle?: string;
  /** 标签键 */
  TaskTag?: string[];
  /** 状态 */
  TaskStatus?: number;
  /** 开始时间，固定格式%Y-%m-%d %H:%M:%S */
  TaskStartTime?: string;
  /** 结束时间，固定格式%Y-%m-%d %H:%M:%S */
  TaskEndTime?: string;
  /** 标签对 */
  Tags?: TagWithDescribe[];
}

declare interface DescribeTaskListResponse {
  /** 无 */
  TaskList: TaskListItem[];
  /** 列表数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeTaskResponse {
  /** 任务信息 */
  Task: Task;
  /** 任务对应的演练报告信息，null表示未导出报告 */
  ReportInfo: TaskReportInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplateListRequest {
  /** 分页Limit, 最大值100 */
  Limit: number;
  /** 分页Offset */
  Offset: number;
  /** 演练名称 */
  Title?: string;
  /** 标签键 */
  Tag?: string[];
  /** 状态，1---使用中， 2---停用 */
  IsUsed?: number;
  /** 标签对 */
  Tags?: TagWithDescribe[];
}

declare interface DescribeTemplateListResponse {
  /** 经验库列表 */
  TemplateList: TemplateListItem[];
  /** 列表数量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplateRequest {
  /** 经验库ID */
  TemplateId: number;
}

declare interface DescribeTemplateResponse {
  /** 经验库详情 */
  Template: Template;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExecuteTaskInstanceRequest {
  /** 任务ID */
  TaskId: number;
  /** 任务动作ID */
  TaskActionId: number;
  /** 任务动作实例ID */
  TaskInstanceIds: number[];
  /** 是否操作整个任务 */
  IsOperateAll: boolean;
  /** 操作类型：（1--启动 2--执行 3--跳过 5--重试） */
  ActionType: number;
  /** 动作组ID */
  TaskGroupId: number;
}

declare interface ExecuteTaskInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExecuteTaskRequest {
  /** 需要执行的任务ID */
  TaskId: number;
}

declare interface ExecuteTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTaskRunStatusRequest {
  /** 任务ID */
  TaskId: number;
  /** 任务状态, 1001--未开始 1002--进行中（执行）1003--进行中（暂停）1004--执行结束 */
  Status: number;
  /** 执行结果是否符合预期（当前扭转状态为执行结束时，需要必传此字段） */
  IsExpect?: boolean;
  /** 演习结论（当演习状态转变为执行结束时，需要填写此字段） */
  Summary?: string;
}

declare interface ModifyTaskRunStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cfg 混沌演练平台} */
declare interface Cfg {
  (): Versions;
  /** 从经验库创建演练 {@link CreateTaskFromTemplateRequest} {@link CreateTaskFromTemplateResponse} */
  CreateTaskFromTemplate(data: CreateTaskFromTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskFromTemplateResponse>;
  /** 删除任务 {@link DeleteTaskRequest} {@link DeleteTaskResponse} */
  DeleteTask(data: DeleteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskResponse>;
  /** 查询任务 {@link DescribeTaskRequest} {@link DescribeTaskResponse} */
  DescribeTask(data: DescribeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResponse>;
  /** 获取演练过程日志 {@link DescribeTaskExecuteLogsRequest} {@link DescribeTaskExecuteLogsResponse} */
  DescribeTaskExecuteLogs(data: DescribeTaskExecuteLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskExecuteLogsResponse>;
  /** 查询任务列表 {@link DescribeTaskListRequest} {@link DescribeTaskListResponse} */
  DescribeTaskList(data: DescribeTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskListResponse>;
  /** 查询经验库 {@link DescribeTemplateRequest} {@link DescribeTemplateResponse} */
  DescribeTemplate(data: DescribeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplateResponse>;
  /** 查询经验库列表 {@link DescribeTemplateListRequest} {@link DescribeTemplateListResponse} */
  DescribeTemplateList(data: DescribeTemplateListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplateListResponse>;
  /** 执行任务 {@link ExecuteTaskRequest} {@link ExecuteTaskResponse} */
  ExecuteTask(data: ExecuteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ExecuteTaskResponse>;
  /** 执行任务动作实例 {@link ExecuteTaskInstanceRequest} {@link ExecuteTaskInstanceResponse} */
  ExecuteTaskInstance(data: ExecuteTaskInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ExecuteTaskInstanceResponse>;
  /** 修改任务运行状态 {@link ModifyTaskRunStatusRequest} {@link ModifyTaskRunStatusResponse} */
  ModifyTaskRunStatus(data: ModifyTaskRunStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskRunStatusResponse>;
}

export declare type Versions = ["2021-08-20"];

export default Cfg;
