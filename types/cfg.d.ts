/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 动作动态参数返回格式 */
declare interface ActionFieldConfigDetail {
  /** 组件类型可选项如下：input 文本框textarea 多行文本框number 数值输入框select 选择器cascader 级联选择器radio 单选time 时间选择 */
  Type?: string;
  /** 组件label */
  Lable?: string;
  /** 组件唯一标识， 传回后端时的key */
  Field?: string;
  /** 默认值 */
  DefaultValue?: string;
  /** 支持配置项如下,可根据需要选择配置项，不需要配置是设置空{}：{ placeholder: string (占位符) tooltip: string (提示信息) reg: RegExp (对输入内容格式进行正则校验的规则) max: number (对于输入框，限制最大输入字符数，对于数值输入框，设置上限) min: number (对于数值输入框，设置下限) step: number (设置数值输入框的步长，默认为1) format: string (时间选择的格式，如YYYY-MM-DD表示年月日, YYYY-MM-DD HH:mm:ss 表示时分秒) separator: string[] (多行输入框的分隔符，不传或者为空时表示不分隔，直接返回用户输入的文本字符串) multiple: boolean (是否多选,对选择器和级联选择器有效) options: 选择器的选项【支持以下两种形式】直接给定选项数组 { value: string; label: string }[]通过调接口获取选项 { api: string(接口地址), params: string[] (接口参数,对应于参数配置的field，前端根据field对应的所有组件的输入值作为参数查询数据， 为空时在组件加载时直接请求数据) }} */
  Config?: string;
  /** 是否必填 (0 -- 否 1-- 是) */
  Required?: number;
  /** compute配置依赖的其他field满足的条件时通过校验（如：三个表单项中必须至少有一个填写了）[fieldName,{ config: 此项保留，等待后面具体场景细化 }] */
  Validate?: string;
  /** 是否可见 */
  Visible?: string;
}

/** 动作栏位配置结果 */
declare interface ActionFieldConfigResult {
  /** 动作ID */
  ActionId: number;
  /** 动作名称 */
  ActionName: string;
  /** 动作对应的栏位配置详情 */
  ConfigDetail: ActionFieldConfigDetail[];
}

/** 动作库筛选栏位 */
declare interface ActionFilter {
  /** 关键字 */
  Keyword: string;
  /** 搜索内容值 */
  Values: string[];
}

/** 动作库数据列表 */
declare interface ActionLibraryListResult {
  /** 动作名称 */
  ActionName?: string;
  /** 动作描述 */
  Desc?: string;
  /** 动作类型。范围：["平台","自定义"] */
  ActionType?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 创建人 */
  Creator?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 动作风险描述 */
  RiskDesc?: string;
  /** 动作ID */
  ActionId?: number;
  /** 动作属性（ 1：故障 2：恢复） */
  AttributeId?: number;
  /** 关联的动作ID */
  RelationActionId?: number;
  /** 操作命令 */
  ActionCommand?: string;
  /** 动作类型（0 -- tat 1 -- 云API） */
  ActionCommandType?: number;
  /** 自定义动作的参数，json string */
  ActionContent?: string;
  /** 二级分类 */
  ResourceType?: string;
  /** 动作描述 */
  ActionDetail?: string;
  /** 是否允许当前账号使用 */
  IsAllowed?: boolean;
  /** 最佳实践案例的链接地址 */
  ActionBestCase?: string;
  /** 对象类型 */
  ObjectType?: string;
  /** 监控指标ID列表 */
  MetricIdList?: number[];
  /** 是否是新动作 */
  IsNewAction?: boolean;
  /** 对象类型ID */
  ObjectTypeId?: number;
}

/** 应用性能监控产品中应用信息 */
declare interface ApmServiceInfo {
  /** 业务ID */
  InstanceId: string;
  /** 应用名称 */
  ServiceNameList: string[];
  /** 地域ID */
  RegionId?: number;
}

/** 查询-保护策略 */
declare interface DescribePolicy {
  /** 保护策略ID列表 */
  TaskPolicyIdList: string[];
  /** 保护策略状态 */
  TaskPolicyStatus: string;
  /** 策略规则 */
  TaskPolicyRule: string;
  /** 护栏策略生效处理策略 1:顺序执行，2:暂停 */
  TaskPolicyDealType: number;
}

/** 对象类型 */
declare interface ObjectType {
  /** 对象类型ID */
  ObjectTypeId?: number;
  /** 对象类型名称 */
  ObjectTypeTitle?: string;
  /** 对象类型第一级 */
  ObjectTypeLevelOne?: string;
  /** 对象类型参数 */
  ObjectTypeParams?: ObjectTypeConfig;
  /** tke接口json解析规则，null不需要解析 */
  ObjectTypeJsonParse?: ObjectTypeJsonParse;
  /** 是否包含新动作 */
  ObjectHasNewAction?: boolean;
  /** 对应在平台架构图中的资源类型名称 */
  ObjectPlatformName?: string;
  /** 1：平台支持的对象 2：应用支持的部分对象 */
  ObjectSupportType?: number;
  /** 1.接入层 2.逻辑层 3. 数据层 */
  ArchLayer?: number;
  /** 是否支持演练生图 */
  IsArchSvg?: boolean;
}

/** 对象类型配置 */
declare interface ObjectTypeConfig {
  /** 主键 */
  Key: string;
  /** 对象类型配置字段列表 */
  Fields: ObjectTypeConfigFields[];
}

/** 对象类型字段类型 */
declare interface ObjectTypeConfigFields {
  /** instanceId */
  Key: string;
  /** 实例id */
  Header: string;
  /** 字段值是否需要转译，当不需要转译时，此字段返回null */
  Transfer?: string;
  /** tke的pod字段信息解析 */
  JsonParse?: string;
  /** 字段类型 0:str 1:list */
  Type?: number;
}

/** 标准pod对象类型下拉数据的解析 */
declare interface ObjectTypeJsonParse {
  /** 命名空间 */
  NameSpace?: string;
  /** 工作负载名称 */
  WorkloadName?: string;
  /** 节点IP */
  LanIP?: string;
  /** 节点ID */
  InstanceId?: string;
}

/** 护栏策略触发日志 */
declare interface PolicyTriggerLog {
  /** 演练ID */
  TaskId?: number;
  /** 名称 */
  Name?: string;
  /** 类型，0--触发，1--恢复 */
  TriggerType?: number;
  /** 内容 */
  Content?: string;
  /** 触发时间 */
  CreatTime?: string;
}

/** 资源下线 */
declare interface ResourceOffline {
  /** 资源ID */
  ResourceId?: number;
  /** 资源下线时间 */
  ResourceDeleteTime?: string;
  /** 资源下线提示 */
  ResourceDeleteMessage?: string;
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
  TaskTag: string;
  /** 任务状态，1001--未开始 1002--进行中（执行）1003--进行中（暂停）1004--执行结束 */
  TaskStatus: number;
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
  TaskMonitors: TaskMonitor[];
  /** 保护策略 */
  TaskPolicy: DescribePolicy | null;
  /** 标签列表 */
  Tags?: TagWithDescribe[];
  /** 关联的演练计划ID */
  TaskPlanId?: number | null;
  /** 关联的演练计划名称 */
  TaskPlanTitle?: string | null;
  /** 关联的应用ID */
  ApplicationId?: string | null;
  /** 关联的应用名称 */
  ApplicationName?: string;
  /** 关联的告警指标 */
  AlarmPolicy?: string[];
  /** 关联的APM服务 */
  ApmServiceList?: ApmServiceInfo[];
  /** 关联的隐患验证项ID */
  VerifyId?: number | null;
  /** 护栏处理方式，1--顺序回滚，2--演练暂停 */
  PolicyDealType?: number;
  /** 计划开始时间 */
  TaskPlanStartTime?: string | null;
  /** 计划结束时间 */
  TaskPlanEndTime?: string | null;
  /** 人员组织 */
  TaskOrg?: TaskOrg[] | null;
  /** 问题和改进 */
  TaskIssue?: string | null;
  /** region信息 */
  TaskRegionName?: string;
  /** 架构ID */
  TaskArchId?: string;
  /** 演练场景 */
  TaskScenario?: TaskTarget[];
  /** 演练目的 */
  TaskPurpose?: TaskTarget[];
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
  /** 护栏处理方式，1--顺序回滚，2--演练暂停 */
  PolicyDealType?: number;
}

/** 任务分组 */
declare interface TaskGroup {
  /** 任务动作ID */
  TaskGroupId: number;
  /** 分组标题 */
  TaskGroupTitle: string;
  /** 分组描述 */
  TaskGroupDescription: string;
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
  /** 不参演的实例列表 */
  TaskGroupDiscardInstanceList?: string[];
  /** 参演实例列表 */
  TaskGroupSelectedInstanceList?: string[];
  /** 机器选取规则 */
  TaskGroupInstancesExecuteRule?: TaskGroupInstancesExecuteRules[];
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
  TaskGroupActionGeneralConfiguration: string;
  /** 分组动作自定义配置 */
  TaskGroupActionCustomConfiguration: string;
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
  TaskGroupActionRandomId: number;
  /** RecoverId */
  TaskGroupActionRecoverId: number;
  /** ExecuteId */
  TaskGroupActionExecuteId: number;
  /** 调用api类型，0:tat, 1:云api */
  ActionApiType?: number;
  /** 1:故障，2:恢复 */
  ActionAttribute?: number;
  /** 动作类型：平台、自定义 */
  ActionType?: string;
  /** 是否可重试 */
  IsExecuteRedo?: boolean;
  /** 动作风险级别 */
  ActionRisk?: string;
  /** 动作运行时间 */
  TaskGroupActionExecuteTime?: number;
  /** 动作开始执行时间 */
  TaskGroupActionStartTime?: string;
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
  /** 动作组所关联的实例对象CVM ins-xxxMySQL cdb-xxxCLB lb-xxxRedis crs-xxxNAT网关 nat-xxx专线-独享专用通道 dcx-xxx标准集群普通节点 {"ClusterId":"cls-xxx","InstanceId":"ins-xxx","LanIP":"1.1.1.1"}标准集群Pod {"ClusterId":"cls-xxx","PodName":"podname","NodeName":"1.1.1.1","NameSpace":"ns","Workload":"workload"}TDSQL-MySQL(InnoDB) tdsqlshard-xxxTDSQL-C cynosdbmysql-xxxVPC子网 subnet-xxxxCKafka ckafka-xxxMariaDB tdsql-xxxxPostgreSQL postgres-xxx云原生网关 gateway-xxx标准集群超级节点 {"ClusterId":"cls-xxx","InstanceId":"eklet-xxx","LanIP":"1.1.1.1,"NodePoolId":"np-xxx"}Serverless集群超级节点 {"ClusterId":"cls-xxxx","InstanceId":"eklet-xxxx","LanIP":"1.1.1.1"}Elasticsearch集群 es-xxxxRabbitMQ amqp-xxxx */
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

/** 演练动作组简易配置 */
declare interface TaskGroupForAction {
  /** 动作ID */
  TaskActionId?: number;
  /** {"ActionTimeout":1800} */
  TaskActionGeneralConfiguration?: string;
  /** {"ip": "0.0.0.0"} */
  TaskActionCustomConfiguration?: string;
}

/** 任务分组动作实例 */
declare interface TaskGroupInstance {
  /** 实例ID */
  TaskGroupInstanceId: number;
  /** 实例ID */
  TaskGroupInstanceObjectId: string;
  /** 实例动作执行状态 */
  TaskGroupInstanceStatus: number;
  /** 实例创建时间 */
  TaskGroupInstanceCreateTime: string;
  /** 实例更新时间 */
  TaskGroupInstanceUpdateTime: string;
  /** 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止，4--跳过 */
  TaskGroupInstanceStatusType: number;
  /** 执行开始时间 */
  TaskGroupInstanceStartTime: string;
  /** 执行结束时间 */
  TaskGroupInstanceEndTime: string;
  /** 实例动作执行日志 */
  TaskGroupInstanceExecuteLog?: string | null;
  /** 实例是否可重试 */
  TaskGroupInstanceIsRedo?: boolean;
  /** 动作实例执行时间 */
  TaskGroupInstanceExecuteTime?: number;
}

/** 机器选取规则 */
declare interface TaskGroupInstancesExecuteRules {
  /** 实例选取模式 */
  TaskGroupInstancesExecuteMode?: number;
  /** 按比例选取模式下选取比例 */
  TaskGroupInstancesExecutePercent?: number;
  /** 按数量选取模式下选取数量 */
  TaskGroupInstancesExecuteNum?: number;
}

/** 任务列表信息 */
declare interface TaskListItem {
  /** 任务ID */
  TaskId?: number;
  /** 任务标题 */
  TaskTitle?: string;
  /** 任务描述 */
  TaskDescription?: string;
  /** 任务标签 */
  TaskTag?: string;
  /** 任务状态(1001 -- 未开始 1002 -- 进行中 1003 -- 暂停中 1004 -- 任务结束) */
  TaskStatus?: number;
  /** 任务创建时间 */
  TaskCreateTime?: string;
  /** 任务更新时间 */
  TaskUpdateTime?: string;
  /** 0--未开始，1--进行中，2--已完成 */
  TaskPreCheckStatus?: number;
  /** 环境检查是否通过 */
  TaskPreCheckSuccess?: boolean;
  /** 演练是否符合预期 1-符合预期 2-不符合预期 */
  TaskExpect?: number;
  /** 关联应用ID */
  ApplicationId?: string;
  /** 关联应用名称 */
  ApplicationName?: string;
  /** 验证项ID */
  VerifyId?: number;
  /** 状态类型: 0 -- 无状态，1 -- 成功，2-- 失败，3--终止 */
  TaskStatusType?: number;
  /** 架构ID */
  ArchId?: string;
  /** 架构名称 */
  ArchName?: string;
}

/** 监控指标 */
declare interface TaskMonitor {
  /** 演练监控指标ID */
  TaskMonitorId: number;
  /** 监控指标ID */
  MetricId: number;
  /** 监控指标对象类型ID */
  TaskMonitorObjectTypeId: number;
  /** 指标名称 */
  MetricName: string;
  /** 实例ID列表 */
  InstancesIds: string[];
  /** 中文指标 */
  MetricChineseName: string;
  /** 单位 */
  Unit: string;
}

/** 演练人员组织 */
declare interface TaskOrg {
  /** 演练角色 */
  TaskRole?: string;
  /** 负责人 */
  TaskOperator?: string;
}

/** 演练报告状态信息 */
declare interface TaskReportInfo {
  /** 0--未开始，1--正在导出，2--导出成功，3--导出失败 */
  Stage?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 有效期截止时间 */
  ExpirationTime?: string;
  /** 是否有效 */
  Expired?: boolean;
  /** 演练报告cos文件地址 */
  CosUrl?: string;
  /** 演练报告导出日志 */
  Log?: string | null;
  /** 0--未开始，1--正在归档，2--归档成功，3--归档失败 */
  ArchiveStage?: number;
  /** 归档时间 */
  ArchiveTime?: string;
  /** 归档ID */
  ArchiveUuid?: string;
}

/** 演练目标 */
declare interface TaskTarget {
  /** 目标标签ID */
  TargetId?: number;
  /** 目标描述 */
  TargetDesc?: string;
  /** 1:演练场景2:演练目标 */
  Type?: number;
  /** 1:平台 2:用户个人 */
  Source?: number;
  /** 目标标签是否已被删除 */
  TargetStatus?: number;
}

/** 经验库 */
declare interface Template {
  /** 经验库ID */
  TemplateId?: number;
  /** 经验库标题 */
  TemplateTitle?: string;
  /** 经验库描述 */
  TemplateDescription?: string;
  /** 自定义标签 */
  TemplateTag?: string;
  /** 使用状态。1 ---- 使用中，2 --- 停用 */
  TemplateIsUsed?: number;
  /** 经验库创建时间 */
  TemplateCreateTime?: string;
  /** 经验库更新时间 */
  TemplateUpdateTime?: string;
  /** 经验库模式。1:手工执行，2:自动执行 */
  TemplateMode?: number;
  /** 自动暂停时长。单位分钟 */
  TemplatePauseDuration?: number;
  /** 演练创建者Uin */
  TemplateOwnerUin?: string;
  /** 地域ID */
  TemplateRegionId?: number;
  /** 动作组 */
  TemplateGroups?: TemplateGroup[];
  /** 监控指标 */
  TemplateMonitors?: TemplateMonitor[];
  /** 护栏监控 */
  TemplatePolicy?: TemplatePolicy | null;
  /** 标签列表 */
  Tags?: TagWithDescribe[];
  /** 经验来源 0-自建 1-专家推荐 */
  TemplateSource?: number;
  /** apm应用信息 */
  ApmServiceList?: ApmServiceInfo[];
  /** 告警指标 */
  AlarmPolicy?: string[];
  /** 护栏处理方式，1--顺序回滚，2--演练暂停 */
  PolicyDealType?: number;
  /** 演练场景 */
  TemplateScenario?: TaskTarget[];
  /** 演练目的 */
  TemplatePurpose?: TaskTarget[];
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
  Description: string;
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
  GeneralConfiguration: string;
  /** 分组动作自定义配置 */
  CustomConfiguration: string;
  /** 动作分组创建时间 */
  CreateTime: string;
  /** 动作分组更新时间 */
  UpdateTime: string;
  /** 动作名称 */
  ActionTitle: string;
  /** 自身随机id */
  RandomId: number;
  /** 恢复动作id */
  RecoverId: number;
  /** 执行动作id */
  ExecuteId: number;
  /** 调用api类型，0:tat, 1:云api */
  ActionApiType?: number;
  /** 1:故障，2:恢复 */
  ActionAttribute?: number;
  /** 动作类型：平台和自定义 */
  ActionType?: string;
  /** 动作风险等级，1:低风险 2:中风险 3:高风险 */
  ActionRisk?: string;
  /** 故障表现 */
  FailurePerformance?: string;
}

/** 经验库列表信息 */
declare interface TemplateListItem {
  /** 经验库ID */
  TemplateId?: number;
  /** 经验库标题 */
  TemplateTitle?: string;
  /** 经验库描述 */
  TemplateDescription?: string;
  /** 经验库标签 */
  TemplateTag?: string;
  /** 经验库状态。1 -- 使用中，2 -- 停用 */
  TemplateIsUsed?: number;
  /** 经验库创建时间 */
  TemplateCreateTime?: string;
  /** 经验库更新时间 */
  TemplateUpdateTime?: string;
  /** 经验库关联的任务数量 */
  TemplateUsedNum?: number;
  /** 经验库来源 0-自建经验 1-专家推荐 */
  TemplateSource?: number;
}

/** 监控指标 */
declare interface TemplateMonitor {
  /** pk */
  MonitorId?: number;
  /** 监控指标ID */
  MetricId?: number;
  /** 监控指标对象类型ID */
  ObjectTypeId?: number;
  /** 指标名称 */
  MetricName?: string;
  /** 中文指标 */
  MetricChineseName?: string;
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

declare interface CreateTaskFromActionRequest {
  /** 动作ID，可从动作列表接口DescribeActionLibraryList获取 */
  TaskActionId: number;
  /** 参与演练的实例ID */
  TaskInstances: string[];
  /** 演练名称，不填则默认取动作名称 */
  TaskTitle?: string;
  /** 演练描述，不填则默认取动作描述 */
  TaskDescription?: string;
  /** 动作通用参数，需要json序列化传入，可以从动作详情接口DescribeActionFieldConfigList获取，不填默认使用动作默认参数 */
  TaskActionGeneralConfiguration?: string;
  /** 动作自定义参数，需要json序列化传入，可以从动作详情接口DescribeActionFieldConfigList获取，不填默认使用动作默认参数，注意：必填参数，是没有默认值的 ，务必保证传入有效值 */
  TaskActionCustomConfiguration?: string;
  /** 演练自动暂停时间，单位分钟, 不填则默认为60 */
  TaskPauseDuration?: number;
}

declare interface CreateTaskFromActionResponse {
  /** 创建成功的演练ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskFromMultiActionRequest {
  /** 参与演练的实例IDCVM ins-xxxMySQL cdb-xxxCLB lb-xxxRedis crs-xxxNAT网关 nat-xxxRedis crs-xxx专线-独享专用通道 dcx-xxx标准集群普通节点 {"ClusterId":"cls-xxx","InstanceId":"ins-xxx","LanIP":"1.1.1.1"}标准集群Pod {"ClusterId":"cls-xxx","PodName":"podname","NodeName":"1.1.1.1","NameSpace":"ns","Workload":"workload"}TDSQL-MySQL(InnoDB) tdsqlshard-xxxTDSQL-C cynosdbmysql-xxxVPC子网 subnet-xxxxCKafka ckafka-xxxMariaDB tdsql-xxxxPostgreSQL postgres-xxx云原生网关 gateway-xxx标准集群超级节点 {"ClusterId":"cls-xxx","InstanceId":"eklet-xxx","LanIP":"1.1.1.1,"NodePoolId":"np-xxx"}Serverless集群超级节点 {"ClusterId":"cls-xxxx","InstanceId":"eklet-xxxx","LanIP":"1.1.1.1"}Elasticsearch集群 es-xxxxRabbitMQ amqp-xxxx */
  TaskInstances: string[];
  /** 演练名称，不填则默认取动作名称 */
  TaskTitle?: string;
  /** 演练描述，不填则默认取动作描述 */
  TaskDescription?: string;
  /** 演练自动暂停时间，单位分钟, 不填则默认为60 */
  TaskPauseDuration?: number;
  /** 演练动作组配置 */
  TaskAction?: TaskGroupForAction[];
}

declare interface CreateTaskFromMultiActionResponse {
  /** 创建成功的演练ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskFromTemplateRequest {
  /** 从经验库中查询到的经验模板ID */
  TemplateId: number;
  /** 演练的配置参数 */
  TaskConfig: TaskConfig;
}

declare interface CreateTaskFromTemplateResponse {
  /** 创建成功的演练ID */
  TaskId?: number;
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

declare interface DescribeActionFieldConfigListRequest {
  /** 动作ID列表 */
  ActionIds: number[];
  /** 对象类型ID */
  ObjectTypeId: number;
}

declare interface DescribeActionFieldConfigListResponse {
  /** 通用栏位配置列表 */
  Common?: ActionFieldConfigResult[];
  /** 动作栏位配置列表 */
  Results?: ActionFieldConfigResult[];
  /** 资源下线信息 */
  ResourceOffline?: ResourceOffline[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeActionLibraryListRequest {
  /** 0-100 */
  Limit: number;
  /** 默认值0 */
  Offset: number;
  /** 对象类型ID */
  ObjectType: number;
  /** Keyword取值{"动作名称": "a_title", "描述": "a_desc", "动作类型": "a_type", "创建时间": "a_create_time", "二级分类": "a_resource_type"} */
  Filters?: ActionFilter[];
  /** 动作分类，1表示故障动作，2表示恢复动作 */
  Attribute?: number[];
  /** 筛选项 -动作ID */
  ActionIds?: number[];
}

declare interface DescribeActionLibraryListResponse {
  /** 查询结果列表 */
  Results?: ActionLibraryListResult[];
  /** 符合记录条数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeObjectTypeListRequest {
  /** 所支持的对象0：全平台产品1：平台接入的对象2：应用所支持的部分对象 */
  SupportType?: number;
}

declare interface DescribeObjectTypeListResponse {
  /** 对象类型列表 */
  ObjectTypeList?: ObjectType[];
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
  LogMessage?: string[];
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
  /** 任务状态(1001 -- 未开始 1002 -- 进行中 1003 -- 暂停中 1004 -- 任务结束) */
  TaskStatus?: number;
  /** 开始时间，固定格式%Y-%m-%d %H:%M:%S */
  TaskStartTime?: string;
  /** 结束时间，固定格式%Y-%m-%d %H:%M:%S */
  TaskEndTime?: string;
  /** 更新时间，固定格式%Y-%m-%d %H:%M:%S */
  TaskUpdateTime?: string;
  /** 标签对 */
  Tags?: TagWithDescribe[];
  /** 筛选条件 */
  Filters?: ActionFilter[];
  /** 演练ID */
  TaskId?: number[];
  /** 关联应用ID筛选 */
  ApplicationId?: string[];
  /** 关联应用筛选 */
  ApplicationName?: string[];
  /** 任务状态筛选--支持多选 任务状态(1001 -- 未开始 1002 -- 进行中 1003 -- 暂停中 1004 -- 任务结束) */
  TaskStatusList?: number[];
  /** 架构ID */
  ArchId?: string;
  /** 架构名称 */
  ArchName?: string;
}

declare interface DescribeTaskListResponse {
  /** 无 */
  TaskList?: TaskListItem[];
  /** 列表数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskPolicyTriggerLogRequest {
  /** 演练ID */
  TaskId: number;
  /** 页码 */
  Page: number;
  /** 页数量 */
  PageSize: number;
}

declare interface DescribeTaskPolicyTriggerLogResponse {
  /** 触发日志 */
  TriggerLogs?: PolicyTriggerLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeTaskResponse {
  /** 任务信息 */
  Task?: Task;
  /** 任务对应的演练报告信息，null表示未导出报告 */
  ReportInfo?: TaskReportInfo | null;
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
  /** 经验来源 0-自建 1-专家推荐 */
  TemplateSource?: number;
  /** 经验ID */
  TemplateIdList?: number[];
  /** 过滤参数 */
  Filters?: ActionFilter[];
}

declare interface DescribeTemplateListResponse {
  /** 经验库列表 */
  TemplateList?: TemplateListItem[];
  /** 列表数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplateRequest {
  /** 经验库ID */
  TemplateId: number;
}

declare interface DescribeTemplateResponse {
  /** 经验库详情 */
  Template?: Template;
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
  /** 问题以及改进 */
  Issue?: string;
  /** 演练记录 */
  Record?: string;
}

declare interface ModifyTaskRunStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TriggerPolicyRequest {
  /** 混沌演练ID */
  TaskId: number;
  /** 名称 */
  Name: string;
  /** 触发内容 */
  Content: string;
  /** 触发类型，0--触发；1--恢复 */
  TriggerType: number;
}

declare interface TriggerPolicyResponse {
  /** 演练ID */
  TaskId?: number;
  /** 是否触发成功 */
  Success?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cfg 混沌演练平台} */
declare interface Cfg {
  (): Versions;
  /** 从动作创建演练 {@link CreateTaskFromActionRequest} {@link CreateTaskFromActionResponse} */
  CreateTaskFromAction(data: CreateTaskFromActionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskFromActionResponse>;
  /** 快速创建多个动作的演练 {@link CreateTaskFromMultiActionRequest} {@link CreateTaskFromMultiActionResponse} */
  CreateTaskFromMultiAction(data: CreateTaskFromMultiActionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskFromMultiActionResponse>;
  /** 从经验库创建演练 {@link CreateTaskFromTemplateRequest} {@link CreateTaskFromTemplateResponse} */
  CreateTaskFromTemplate(data: CreateTaskFromTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskFromTemplateResponse>;
  /** 删除任务 {@link DeleteTaskRequest} {@link DeleteTaskResponse} */
  DeleteTask(data: DeleteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskResponse>;
  /** 获取动作栏位配置参数列表 {@link DescribeActionFieldConfigListRequest} {@link DescribeActionFieldConfigListResponse} */
  DescribeActionFieldConfigList(data: DescribeActionFieldConfigListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActionFieldConfigListResponse>;
  /** 获取动作库列表 {@link DescribeActionLibraryListRequest} {@link DescribeActionLibraryListResponse} */
  DescribeActionLibraryList(data: DescribeActionLibraryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeActionLibraryListResponse>;
  /** 查询对象类型列表 {@link DescribeObjectTypeListRequest} {@link DescribeObjectTypeListResponse} */
  DescribeObjectTypeList(data?: DescribeObjectTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeObjectTypeListResponse>;
  /** 查询任务 {@link DescribeTaskRequest} {@link DescribeTaskResponse} */
  DescribeTask(data: DescribeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResponse>;
  /** 获取演练过程日志 {@link DescribeTaskExecuteLogsRequest} {@link DescribeTaskExecuteLogsResponse} */
  DescribeTaskExecuteLogs(data: DescribeTaskExecuteLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskExecuteLogsResponse>;
  /** 查询任务列表 {@link DescribeTaskListRequest} {@link DescribeTaskListResponse} */
  DescribeTaskList(data: DescribeTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskListResponse>;
  /** 获取护栏触发日志 {@link DescribeTaskPolicyTriggerLogRequest} {@link DescribeTaskPolicyTriggerLogResponse} */
  DescribeTaskPolicyTriggerLog(data: DescribeTaskPolicyTriggerLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskPolicyTriggerLogResponse>;
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
  /** 触发护栏策略 {@link TriggerPolicyRequest} {@link TriggerPolicyResponse} */
  TriggerPolicy(data: TriggerPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<TriggerPolicyResponse>;
}

export declare type Versions = ["2021-08-20"];

export default Cfg;
