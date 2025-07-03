/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 子任务记录 */
declare interface AdhocDetail {
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
declare interface AdhocRecord {
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
declare interface AgentStatus {
  /** 运行中的数量 */
  Running?: number | null;
  /** 异常的数量 */
  Abnormal?: number | null;
  /** 操作中的数量 */
  InOperation?: number | null;
}

/** 监听事件 */
declare interface AiOpsEventListenerDTO {
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
declare interface AiopsDLCResourceConfigDto {
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
declare interface AiopsScriptInfo {
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
declare interface AiopsSimpleTaskDto {
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
declare interface AlarmDsVO {
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
declare interface AlarmExtDsVO {
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

/** 告警指标 */
declare interface AlarmIndicatorInfo {
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
  /** 飞书群，0：未设置，1：成功，2：失败 */
  LarkGroup?: number | null;
  /** 发送结果 大json格式 */
  AlarmMessageSendResult?: string | null;
}

/** 审批列表信息 */
declare interface Apply {
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
  Metadata?: string;
}

/** 修改审批单状态 */
declare interface ApproveModify {
  /** 审批单id */
  ApproveId: string;
  /** 是否修改成功 */
  Success: boolean;
}

/** 审批分类 */
declare interface ApproveType {
  /** 申请分类key */
  Type: string;
  /** 类型名称 */
  TypeName: string;
  /** 申请类型key */
  Classification: string;
}

/** 操作资源DTO */
declare interface AsyncResourceVO {
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
declare interface AttributeItemDTO {
  /** key */
  Key?: string | null;
  /** value */
  Value?: string | null;
  /** 描述 */
  Description?: string | null;
}

/** AttributeItemVO参数 */
declare interface AttributeItemDsVO {
  /** Key值 */
  Key?: string | null;
  /** Value值 */
  Value?: string | null;
  /** 描述 */
  Description?: string | null;
}

/** 集群基础信息 */
declare interface BaseClusterInfo {
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
}

/** 基础角色对象 */
declare interface BaseRole {
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
declare interface BaseTenant {
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
declare interface BaseUser {
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
declare interface BatchCreateTaskVersionDTO {
  /** 任务ID */
  TaskId: string | null;
  /** VersionRemark */
  VersionRemark?: string | null;
  /** 文件夹ID */
  FolderId?: string | null;
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
  /** 异步操作id */
  AsyncActionId?: string | null;
}

/** 批量操作的结果返回 */
declare interface BatchOperationOpsDto {
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
declare interface BatchOpsDTO {
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

/** 批量执行结果 */
declare interface BatchResultDs {
  /** 成功数 */
  Success?: number | null;
  /** 失败数 */
  Failed?: number | null;
  /** 总计 */
  Total?: number | null;
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

/** 批量操作出参 */
declare interface BatchTaskOperateNew {
  /** 操作Id */
  JobId?: number | null;
}

/** 数据地图-数据类目信息 */
declare interface BizCatalogsInfo {
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

/** CandidateDsDTo */
declare interface CandidateDsDTo {
  /** 取值 */
  Value?: string | null;
  /** 取值描述 */
  ValueDesc?: string | null;
}

/** 模版详情 */
declare interface CodeTemplateDetail {
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

/** 表的元数据信息 */
declare interface ColumnBasicInfo {
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
declare interface ColumnData {
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
declare interface ColumnItem {
  /** ColumnName1 */
  ColumnName?: string | null;
  /** ColumnName1 */
  ColumnRef?: string | null;
}

/** 列血缘节点 */
declare interface ColumnLineage {
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
declare interface ColumnLineageInfo {
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
declare interface ColumnLineagePair {
  /** 列血缘来源方 */
  Sources: ColumnLineage[];
  /** 列血缘目标方 */
  Target: ColumnLineage;
}

/** 列的元数据 */
declare interface ColumnMeta {
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
  /** 返回补录计划名称_ok */
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
  /** o 表示 或，a 表示 且，数字表示items下标 */
  ComputeExpression?: string | null;
}

/** 比较条件 */
declare interface CompareRuleItem {
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
declare interface Content {
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
declare interface CreateAndDDLSupport {
  /** 是否支持select */
  SupportSelect?: boolean | null;
  /** 是否支持ddl */
  SupportDdl?: boolean | null;
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

/** 获取数据服务API的发布态信息列表过滤条件 */
declare interface DataServicePublishedApiListFilter {
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
declare interface DataServiceRequestListOrder {
  /** 排序参数名称取值： CreateTime 表示按照创建时间排序 ModifyTime 表示按照更新时间排序 */
  Name?: string;
  /** 排序参数顺序 */
  Direction?: string;
}

/** 数据服务入参 */
declare interface DataServiceRequestParam {
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
declare interface DataServiceResponseParam {
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
declare interface DataSourceConnectStatus {
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
declare interface DataSourceEnvInfo {
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
  /** 0或者未返回.未定义，1.生产 2.开发 */
  DsEnvType?: number | null;
  /** EMR引擎部署方式：CVM/TKE */
  ClusterDeployType?: string | null;
  /** 模式名称 */
  SchemaName?: string | null;
}

/** 数据源元数据 */
declare interface DatabaseMeta {
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
}

/** 数据库Schema信息 */
declare interface DatabaseSchemaIInfo {
  /** schema名称 */
  SchemaName?: string | null;
  /** 数据库名称 */
  OriginDatabaseName?: string | null;
}

/** 数据源对象 */
declare interface DatasourceBaseInfo {
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
declare interface DependencyConfig {
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
declare interface DependencyConfigDsDTO {
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

/** 依赖配置策略 */
declare interface DependencyStrategyDs {
  /** 等待（默认策略）或 执行 */
  PollingNullStrategy?: string | null;
}

/** 申请列表 */
declare interface DescribeApply {
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

/** 查询数据服务API的发布态信息详情出参 */
declare interface DescribeDataServicePublishedApiDetailResp {
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
declare interface DescribeDataServicePublishedApiListResp {
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

/** 待提交任务信息 */
declare interface DescribePendingSubmitTaskInfo {
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
}

/** 查询任务绑定的事件的响应 */
declare interface DescribeRelatedTasksByTaskIdResp {
  /** 页码 */
  PageNumber?: number | null;
  /** 单页大小 */
  PageSize?: number | null;
  /** 总条数 */
  TotalCount?: number | null;
  /** 任务直接关联的上下游任务列表 */
  RelatedTaskList?: RelatedTask[] | null;
}

/** 批量操作任务列表分页 */
declare interface DescribeTasksForCodeTemplatePage {
  /** 总页码数 */
  PageCount: number | null;
  /** 内容 */
  Items?: TaskSimpleVo[] | null;
  /** 总个数 */
  TotalCount?: number | null;
}

/** DiagnoseRep */
declare interface DiagnoseRep {
  /** 诊断信息内容 */
  Content?: Content | null;
  /** 诊断结果相关信息列表 */
  Table?: Table | null;
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

/** 值班信息 */
declare interface Duty {
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
declare interface DutyPerson {
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
declare interface DutySchedule {
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
declare interface DutyScheduleData {
  /** 值班表Id */
  Id: number;
  /** 值班表名称 */
  Name: string;
  /** 创建人 */
  Creator: string;
}

/** 值班信息表 */
declare interface DutyScheduleDetailsInfo {
  /** 值班日期 */
  Day: string;
  /** 值班信息 */
  Duty: Duty[] | null;
}

/** 引擎任务信息 */
declare interface EngineTaskInfo {
  /** 引擎提交时间 */
  EngineSubmitTime?: string | null;
  /** 引擎执行时间 */
  EngineExeTime?: string | null;
  /** 引擎执行总时间 */
  EngineExeTimes?: number | null;
  /** cu消耗 */
  CuConsume?: number | null;
  /** 资源消耗 */
  ResourceUsage?: number | null;
  /** 引擎名 */
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
}

/** 事件连续时间实例信息 */
declare interface EventBatchCaseDTO {
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

/** 事件实例信息 */
declare interface EventCaseDTO {
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

/** 事件管理- 事件实体 */
declare interface EventDsDto {
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
}

/** 事件监听者信息 */
declare interface EventListenerDTO {
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

/** 监听者任务信息 */
declare interface EventListenerTaskInfo {
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

/** 事件发布者信息 */
declare interface EventPublisherDTO {
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
declare interface ExecutorResourceGroupInfo {
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
declare interface ExecutorResourcePackageExtInfo {
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
declare interface ExecutorResourcePackageInfo {
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
declare interface ExecutorResourcePackageUsageInfo {
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
declare interface ExecutorUsageTrendInfo {
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
declare interface ExtParam {
  /** key */
  Key?: string;
  /** 具体值 */
  Value?: string;
}

/** 扩展信息参数 */
declare interface ExtResourceFlagDto {
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
declare interface ExtensionInfoVO {
  /** key */
  Key?: string | null;
  /** value */
  Value?: string | null;
  /** 描述 */
  Description?: string | null;
}

/** 错误处理结果信息 */
declare interface FailMessage {
  /** 数据唯一标识 */
  Key?: string | null;
  /** 失败原因 */
  ErrorMessage?: string | null;
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

/** 通用过滤器 */
declare interface FilterOptional {
  /** 过滤字段名称 */
  Name?: string;
  /** 过滤值列表 */
  Values?: string[];
}

/** 文件夹属性 */
declare interface FolderDsDto {
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
  /** 名称 */
  Name?: string;
  /** 函数分类英文名 */
  ZhName?: string;
  /** 函数分类中文名 */
  EnName?: string;
}

/** 函数提交版本信息 */
declare interface FunctionVersion {
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
declare interface GeneralTaskParam {
  /** 通用任务参数类型,例：SPARK_SQL */
  Type: string;
  /** 通用任务参数内容,直接作用于任务的参数。不同参数用;分割 */
  Value: string;
}

/** 获取任务脚本内容返回体 */
declare interface GetPaginationTaskScriptResponseInfo {
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
declare interface GovDatasourceInfo {
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

/** 实例检索条件 */
declare interface InstanceCondition {
  /** 执行类型 */
  ExecutionSpace?: string | null;
  /** 任务产品类型 */
  ProductName?: string | null;
}

/** 调度实例详情 */
declare interface InstanceDetailVO {
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
declare interface InstanceDownloadLogInfo {
  /** 文件名 */
  FileName?: string | null;
  /** 文件URL */
  FileUrl?: string | null;
}

/** 实例生命周期详情 */
declare interface InstanceLifeCycleOpsDto {
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
}

/** 调度实例详情 */
declare interface InstanceLifeCycleVO {
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
declare interface InstanceLifeDetailDto {
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
declare interface InstanceLogByLine {
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
  /** 实例代码文件，为空表示对应代码文件不存在，可能是因为执行机未升级/对应类型任务无代码。 */
  CodeFileName?: string | null;
  /** 扩展属性 */
  ExtensionInfo?: AttributeItemDTO[] | null;
  /** 统一执行平台，下发执行Id */
  ExecutionJobId?: string | null;
}

/** 实例日志信息详情 */
declare interface InstanceLogInfoOpsDto {
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
declare interface InstanceLogList {
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
declare interface InstanceLogVO {
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
declare interface InstanceNodeInfo {
  /** 读取节点SOURCE 写入节点SINK */
  NodeType?: string | null;
  /** 节点id */
  NodeId?: string | null;
  /** 节点名称 */
  NodeName?: string | null;
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
}

/** 任务运行历史分页记录 */
declare interface InstanceOpsInfoPage {
  /** 总记录数 */
  TotalCount?: number | null;
  /** 记录列表 */
  Items?: InstanceOpsDto[] | null;
}

/** 实例列表分页实体 */
declare interface InstancePageVO {
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

/** 调度运行实例实体 */
declare interface InstanceVO {
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
  /** 执行资源组ID */
  ExecutorGroupId?: string | null;
  /** 资源组名称 */
  ExecutorGroupName?: string | null;
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

/** 集成任务节点 */
declare interface IntegrationNodeInfo {
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
declare interface IntegrationNodeSchemaMapping {
  /** 任务节点的源schema id */
  SourceSchemaId: string;
  /** 任务节点目标schema id */
  SinkSchemaId: string;
}

/** 数据集成大屏趋势图统计结果 */
declare interface IntegrationStatisticsTrendResult {
  /** 统计属性名称 */
  StatisticName?: string[] | null;
  /** 统计值 */
  StatisticValue?: number[] | null;
  /** 统计项目 */
  StatisticType?: string | null;
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
}

/** 调度任务日志错误提示信息 */
declare interface JobLogErrorTip {
  /** 执行日志错误信息 */
  Content?: string | null;
  /** 对应sql的行下标 */
  LineNum?: number | null;
  /** 对应sql的列下标 */
  ColumnNum?: number | null;
}

/** 键值对 */
declare interface KVPair {
  /** 键名 */
  K: string | null;
  /** 值 */
  V: string | null;
}

/** 表生命周期相关信息 */
declare interface LifecycleInfo {
  /** 生命周期值 */
  Lifecycle?: number | null;
  /** 列名 */
  Columns?: string[] | null;
  /** 日期格式 */
  DateFormat?: string[] | null;
}

/** 血缘参数记录 */
declare interface LineageParamRecord {
  /** 字段名 */
  Name: string;
  /** 字段值 */
  Value: string | null;
}

/** 血缘任务 */
declare interface LineageTask {
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
declare interface MQPackageVO {
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
  /** 补录该任务当前已生成的实例数 */
  InstanceCount?: number | null;
  /** 补录任务实例完成百分数 */
  CompletePercent?: number | null;
  /** 补录任务实例成功百分数 */
  SuccessPercent?: number | null;
  /** 预计生成的总实例个数，由于是异步生成，-1代表实例还未完完全生成 */
  InstanceTotalCount?: number | null;
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

/** 手动工作流触发运行记录实体 */
declare interface ManualTriggerRecordOpsDto {
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
declare interface ManualTriggerRecordOpsDtoPage {
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

/** 离线实例 */
declare interface OfflineInstance {
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
declare interface OfflineTaskAddParam {
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
  /** 异步操作记录id */
  AsyncActionId?: string;
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
  TasksList?: OpsTaskCanvasDto[];
  /** 画布任务链接信息 */
  LinksList?: OpsTaskLinkInfoDto[];
  /** 画布循环依赖任务信息 */
  CirculateTaskList?: OpsTaskCanvasDto[] | null;
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
declare interface OrderCondition {
  /** name */
  Name: string | null;
  /** 降序DESC; 升序ASC */
  Direction: string | null;
}

/** 通用排序字段 */
declare interface OrderField {
  /** 排序字段名称 */
  Name: string;
  /** 排序方向：ASC|DESC */
  Direction: string;
}

/** 通用排序字段 */
declare interface OrderFieldOptional {
  /** 排序字段名称 */
  Name?: string;
  /** 排序方向：ASC|DESC */
  Direction?: string;
}

/** 排序 */
declare interface OrderFields {
  /** 字段 */
  Name?: string;
  /** 排序 */
  Direction?: string;
}

/** 包含层级信息的函数 */
declare interface OrganizationalFunction {
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
declare interface PageRoles {
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
declare interface PageTaskTemplateInfo {
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
declare interface Pair {
  /** 键名 */
  Key: string;
  /** 值 */
  Value: string;
  /** 唯一标识 */
  Id?: string | null;
}

/** 键值对 */
declare interface PairDto {
  /** 键名 */
  Key?: string | null;
  /** 值 */
  Value?: string | null;
  /** 描述 */
  Description?: string;
}

/** 参数参数 */
declare interface ParamInfo {
  /** 参数名 */
  ParamKey: string;
  /** 参数值 */
  ParamValue: string;
}

/** 参数参数 */
declare interface ParamInfoDs {
  /** 参数名 */
  ParamKey: string;
  /** 参数值 */
  ParamValue: string;
}

/** ds参数map结构体 */
declare interface ParamMapDsDto {
  /** k */
  Key?: string | null;
  /** v */
  Value?: string | null;
}

/** 任务参数Dto */
declare interface ParameterTaskDsDto {
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
declare interface ParameterTaskInDsDto {
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
declare interface ParameterTaskOutDsDto {
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
declare interface Partition {
  /** 分区转换策略 */
  Transform?: string;
  /** 分区字段名 */
  Name?: string;
  /** 策略参数 */
  TransformArgs?: string[];
}

/** 数据开发-统一树结构返回属性 */
declare interface PathNodeDsVO {
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

/** 数据质量生产调度任务业务实体 */
declare interface ProdSchedulerTask {
  /** 生产调度任务工作流ID */
  WorkflowId: string | null;
  /** 生产调度任务Id */
  TaskId?: string | null;
  /** 生产调度任务名称 */
  TaskName?: string | null;
  /** 生产调度任务任务类型 */
  CycleType?: number | null;
  /** 生产任务类型 */
  TaskType?: string;
}

/** 项目信息 */
declare interface Project {
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
}

/** 查询数据源分页列表 */
declare interface ProjectPage {
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
declare interface ProjectUserRole {
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
}

/** 项目下的用户集合 */
declare interface ProjectUsersPage {
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

/** 数据集成 - 告警免打扰时间 */
declare interface QuietPeriod {
  /** 代表一周里的哪些天，1代表周一，7代表周日，以此类推 */
  DaysOfWeek?: number[] | null;
  /** 开始时间 */
  StartTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
}

/** 实时任务实例当前的节点信息 */
declare interface RealTimeTaskInstanceNodeInfo {
  /** 任务名 */
  TaskName?: string | null;
  /** 任务id */
  TaskId?: string | null;
  /** 实时任务实例节点信息列表 */
  InstanceNodeInfoList?: InstanceNodeInfo[] | null;
}

/** 实时任务同步速度趋势 */
declare interface RealTimeTaskSpeed {
  /** 同步速度条/s列表 */
  RecordsSpeedList: RecordsSpeed[];
  /** 同步速度字节/s列表 */
  BytesSpeedList: BytesSpeed[];
}

/** 通用记录字段，与服务端约定传入合法的键值对 */
declare interface RecordField {
  /** 字段名称，拓展字段名称 */
  Name?: string;
  /** 字段值，拓展字段值 */
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

/** RegisterDsEventPublisher注册事件发布者参数 */
declare interface RegisterDsEventPublisherReq {
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
declare interface RelatedTask {
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

/** 上报任务详情 */
declare interface ReportTaskDetail {
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
declare interface ReportTaskListInfo {
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
declare interface ResourcePathTree {
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

/** 抢锁状态：是否可以抢锁和当前持锁人 */
declare interface RobLockState {
  /** 是否可以抢锁 */
  IsRob?: boolean;
  /** 当前持锁人 */
  Locker?: string;
}

/** 角色权限对象 */
declare interface RolePrivilege {
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
  /** DLC执行引擎资源组 */
  DlcGroupName?: string | null;
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
  /** 集群部署类型，CVM/TKE */
  ClusterDeployType?: string | null;
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
  CreateUserName?: string;
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
declare interface RuleGroupExecResultPage {
  /** 记录数 */
  TotalCount?: number | null;
  /** 规则组执行结果 */
  Items?: RuleGroupExecResult[] | null;
}

/** 质量规则执行策略 */
declare interface RuleGroupExecStrategy {
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
  RuleGroupName?: string;
  /** 数据库名称 */
  DatabaseName?: string;
  /** schema名称 */
  SchemaName?: string;
  /** 表名称 */
  TableName?: string;
  /** 数据源id */
  DatasourceId?: string;
  /** 任务描述 */
  Description?: string;
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
  /** 规则Id */
  RuleId?: number | null;
  /** 规则名称 */
  RuleName?: string | null;
  /** 发送对象 */
  AlarmMessageRule?: string | null;
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
declare interface RuleTemplatePage {
  /** 记录数 */
  TotalCount: number;
  /** 模版列表 */
  Items: RuleTemplate[];
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
  /** 等待调度耗时 */
  WaitScheduleTime?: number | null;
  /** 项目ID */
  ProjectId?: string | null;
  /** 项目名称 */
  ProjectName?: string | null;
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
  ColumnKey?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 类型 */
  Type?: string | null;
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
  /** 跳过运行总数 */
  SkipRunningNum?: number;
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
declare interface ScriptRequestInfo {
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
declare interface SearchColumnDocVO {
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
}

/** 查询实例条件 */
declare interface SearchCondition {
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
declare interface SearchConditionInstanceNew {
  /** 执行空间，可选 "DRY_RUN" */
  ExecutionSpace: string;
  /** 业务产品，可选: <DATA_DEV / DATA_QUALITY / DATA_INTEGRATION，默认DATA_DEV。非空。默认 自身项目 */
  ProductName?: string;
  /** 资源组信息，可选 */
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

/** 速度值对象 */
declare interface SpeedValue {
  /** 带毫秒的时间戳 */
  Time?: number | null;
  /** 无 */
  Speed?: number | null;
}

/** 数据质量自定义规则时的sql表达式解析对象 */
declare interface SqlExpression {
  /** sql表达式表名 */
  TableExpressions?: SqlExpressionTable[] | null;
  /** sql表达式字段名 */
  ParamExpressions?: string[] | null;
}

/** 数据质量自定义规则时的sql表达式解析表对象 */
declare interface SqlExpressionTable {
  /** sql表达式表名 */
  TableExpression?: string | null;
  /** sql表达式字段名 */
  ColumnExpression?: string[] | null;
}

/** 批量运行集成任务配置 */
declare interface StartTaskInfo {
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
declare interface StrToStrMap {
  /** k */
  K?: string | null;
  /** v */
  V?: string | null;
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
  /** 接收人Uin */
  ReceiverUserIdStr?: string | null;
}

/** 群机器人订阅配置 */
declare interface SubscribeWebHook {
  /** 群机器人类型，当前支持飞书 */
  HookType?: string | null;
  /** 群机器人webhook地址，配置方式参考https://cloud.tencent.com/document/product/1254/70736 */
  HookAddress?: string | null;
}

/** 角色对象 */
declare interface SystemRole {
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
declare interface Table {
  /** 1 */
  Column?: ColumnItem[] | null;
  /** 1 */
  Data?: ColumnData[] | null;
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

/** 表的元数据信息 */
declare interface TableBasicInfo {
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

/** 过去七天（不算当天）表的热度值 */
declare interface TableHeat {
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
declare interface TableInfo {
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
declare interface TableLineage {
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
declare interface TableLineageBaseInfo {
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
declare interface TableLineageInfo {
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
declare interface TableLineagePair {
  /** 血缘数据来源表 */
  Sources: TableLineage[];
  /** 血缘数据目标表 */
  Target: TableLineage;
}

/** 表的元数据信息 */
declare interface TableMeta {
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
}

/** 表附加信息 */
declare interface TableMetaProperty {
  /** 属性的key */
  Key?: string | null;
  /** 属性的值 */
  Value?: string | null;
}

/** 按表名查询的查询条件 */
declare interface TableNameFilter {
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
declare interface TablePartition {
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
declare interface TablePropertyScore {
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
declare interface TableQualityDetail {
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

/** 基于表的标签统计信息 */
declare interface TagVoteSum {
  /** 标签id */
  TagId: number;
  /** 该表该标签投票次数 */
  VoteSum: number;
  /** 当前用户对这张表是否加了该标签 true 已添加 false 未添加 */
  Status: boolean;
  /** 标签名 */
  TagName: string;
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

/** 分页数据集 */
declare interface TaskCollectionParamDTO {
  /** 总数据条数 */
  TotalCount?: number | null;
  /** 总页数 */
  PageCount?: number | null;
  /** 数据 */
  Items?: TaskFormParams[] | null;
}

/** 循环依赖响应体 */
declare interface TaskCycleLinkDTO {
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
declare interface TaskDataRegistryDTO {
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
declare interface TaskDsDTO {
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
  /** 任务状态 */
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
  /** 虚拟任务状态 */
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
}

/** 属性配置 */
declare interface TaskExtDsVO {
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
declare interface TaskExtInfo {
  /** 键 */
  Key?: string;
  /** 值 */
  Value?: string;
}

/** 任务参数 */
declare interface TaskFormParams {
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
declare interface TaskImportInfo {
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
declare interface TaskInfoVo {
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
  /** 引擎名称 */
  EngineName?: string | null;
  /** 引擎子类型 */
  EngineSubType?: string | null;
  /** 引擎taskId */
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
}

/** 任务属性 */
declare interface TaskInnerInfo {
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

/** 任务集成信息 */
declare interface TaskLineageInfo {
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
declare interface TaskLineageInfoPair {
  /** 表血缘-源表 */
  SourceTable?: TaskLineageInfo | null;
  /** 表血缘-目标表 */
  TargetTable?: TaskLineageInfo | null;
}

/** Task Link 信息 */
declare interface TaskLinkDsDTO {
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
}

/** 任务执行脚本 */
declare interface TaskScriptContent {
  /** 脚本内容 base64编码 */
  ScriptContent: string | null;
}

/** 任务信息简易版 */
declare interface TaskSimpleVo {
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
declare interface TaskSubmitPreCheckDetailInfo {
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
declare interface TaskTableMetricInfo {
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
declare interface TaskTag {
  /** 标签名称 */
  TagName: string;
  /** 标签值列表 */
  TagValues: string[];
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

/** 任务类型 */
declare interface TaskTypeDsVO {
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
declare interface TaskTypeExtDsVO {
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
declare interface TaskTypeExtParamDsVO {
  /** TaskTypeExts的Key */
  TaskTypeExtKey?: string | null;
  /** TaskTypeExts的Value */
  TaskTypeExtValue?: TaskTypeExtDsVO | null;
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

/** TaskVersionVO */
declare interface TaskVersionDsDTO {
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

/** 资管管理-上传资源请求 */
declare interface UploadResourceRequestInfo {
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
}

/** 用户文件信息 */
declare interface UserFileDTONew {
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
  /** 工作流类型，周期cycle，手动manual */
  WorkflowType?: string | null;
}

/** 工作流信息 */
declare interface WorkflowDsDTO {
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
  /** 工作流类型，周期cycle，手动manual */
  WorkflowType?: string | null;
}

/** 用户生产工作流列表分页 */
declare interface WorkflowExtOpsDtoPage {
  /** 记录总数 */
  TotalCount?: number | null;
  /** 记录列表 */
  Items?: WorkflowExtOpsDto[] | null;
}

/** 工作流调度信息 */
declare interface WorkflowScheduleDtoDs {
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

declare interface AddProjectUserRoleRequest {
  /** 项目id */
  ProjectId: string;
  /** 用户uin */
  UserIds: string[];
  /** 角色id */
  RoleIds: string[];
}

declare interface AddProjectUserRoleResponse {
  /** 返回数据 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  SuccessCount?: number | null;
  /** 操作失败的任务数 */
  FailedCount?: number | null;
  /** 任务总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchCreateTaskVersionAsyncRequest {
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
}

declare interface BatchCreateTaskVersionAsyncResponse {
  /** 批量操作返回 */
  Data?: BatchTaskOperateNew | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeleteIntegrationTasksRequest {
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

declare interface BatchForceSuccessIntegrationTaskInstancesRequest {
  /** 实例信息 */
  Instances: SchedulerTaskInstanceInfo[];
  /** 项目id */
  ProjectId: string;
}

declare interface BatchForceSuccessIntegrationTaskInstancesResponse {
  /** 操作成功的任务数 */
  SuccessCount?: number;
  /** 操作失败的任务数 */
  FailedCount?: number;
  /** 任务总数 */
  TotalCount?: number;
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

declare interface BatchMakeUpIntegrationTasksRequest {
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

declare interface BatchMakeUpIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount?: number;
  /** 操作失败的任务数 */
  FailedCount?: number;
  /** 任务总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchModifyOpsOwnersRequest {
  /** 需要更新责任人的TaskId数组 */
  TaskIdList: string[];
  /** 需要更新的责任人userId信息，多个责任人用;连接 */
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

declare interface BatchRerunIntegrationTaskInstancesRequest {
  /** 实例信息 */
  Instances: SchedulerTaskInstanceInfo[];
  /** 项目id */
  ProjectId: string;
}

declare interface BatchRerunIntegrationTaskInstancesResponse {
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

declare interface BatchResumeIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 任务类型, 201为实时任务，202为离线任务 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchResumeIntegrationTasksResponse {
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
  /** 任务类型，201为实时任务，202为离线任务 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
  /** 任务id */
  TaskIds?: string[];
  /** 批量运行集成任务，目前仅实时集成用到了这个参数 */
  StartTaskInfoSet?: StartTaskInfo[];
}

declare interface BatchStartIntegrationTasksResponse {
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

declare interface BatchStopIntegrationTasksRequest {
  /** 任务id */
  TaskIds: string[];
  /** 任务类型，201为实时任务，202为离线任务 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
}

declare interface BatchStopIntegrationTasksResponse {
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

declare interface BatchStopOpsTasksRequest {
  /** 批量停止任务的TaskId */
  TaskIdList: string[];
  /** 项目Id */
  ProjectId: string;
  /** 是否终止已生成的实例 */
  KillInstance?: boolean;
  /** 是否异步模式 */
  AsyncMode?: boolean;
}

declare interface BatchStopOpsTasksResponse {
  /** 返回批量操作成功个数、失败个数、操作总数 */
  Data?: BatchOperationOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchStopWorkflowsByIdsRequest {
  /** 工作流id列表 */
  WorkflowIds: string[];
  /** 项目id */
  ProjectId: string;
  /** 是否终止已生成的实例 */
  KillInstance?: boolean;
  /** 是否异步模式 */
  AsyncMode?: boolean;
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
  /** 任务类型，201为实时任务，202为离线任务 */
  TaskType: number;
  /** 项目id */
  ProjectId: string;
  /** 事件类型(START, STOP, SUSPEND, SUSPEND_WITHOUT_SP,RESUME, COMMIT, TIMESTAMP) */
  Event?: string;
  /** 本次批量操作涉及任务，用于审计 */
  TaskNames?: string[];
}

declare interface BatchSuspendIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount?: number;
  /** 操作失败的任务数 */
  FailedCount?: number;
  /** 任务总数 */
  TotalCount?: number;
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
  /** 责任人Id（多个责任人用小写分号隔开） */
  InchargeIds?: string;
  /** 本次批量操作涉及任务，用于审计 */
  TaskNames?: string[];
}

declare interface BatchUpdateIntegrationTasksResponse {
  /** 操作成功的任务数 */
  SuccessCount?: number;
  /** 操作失败的任务数 */
  FailedCount?: number;
  /** 任务总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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
  /** 监控对象类型(1:所有任务,2:指定任务,3:指定责任人,4:指定资源组) */
  MonitorType?: number;
}

declare interface CheckAlarmRegularNameExistResponse {
  /** 是否重名 */
  Data?: boolean;
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
  Data?: boolean;
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
  Data?: boolean;
  /** 任务名重复类型（0:未重复, 1:开发态重复, 2:生产态重复） */
  ExistsType?: number;
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
  Data?: boolean;
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
  /** 前端操作类型描述 */
  EventDesc?: string;
}

declare interface CommitIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data?: boolean;
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

declare interface CosTokenResponse {
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

declare interface CreateCodeTemplateRequest {
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
  /** 指定脚本内容 */
  Content?: string;
}

declare interface CreateCodeTemplateResponse {
  /** 模版id */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCodeTemplateVersionRequest {
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

declare interface CreateCodeTemplateVersionResponse {
  /** 批量操作JobId */
  Data?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCustomFunctionRequest {
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

declare interface CreateCustomFunctionResponse {
  /** 函数唯一标识 */
  FunctionId?: string | null;
  /** 无 */
  ErrorMessage?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDataModelRequest {
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

declare interface CreateDataModelResponse {
  /** “Wedata数据建模”的实例id */
  Data?: string;
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
  /** 连接测试结果 */
  ConnectResult?: string;
  /** 开发环境数据源配置 */
  DevelopmentParams?: string;
  /** 新建数据源的项目ID */
  ProjectId?: string;
}

declare interface CreateDataSourceResponse {
  /** 主键ID */
  Data?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDsFolderRequest {
  /** 项目Id */
  ProjectId: string;
  /** 文件夹名称 */
  FolderName: string;
  /** 父文件夹ID */
  ParentsFolderId?: string;
  /** 文件夹来源 template管理，orchestrationSpace 编排空间 */
  FolderForm?: string;
}

declare interface CreateDsFolderResponse {
  /** 文件夹Id，null则创建失败 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHiveTableByDDLRequest {
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

declare interface CreateHiveTableByDDLResponse {
  /** 返回表名称，无论是否异步都有值 */
  Data?: string;
  /** 异步任务轮询 id，只有异步才有值 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHiveTableRequest {
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

declare interface CreateHiveTableResponse {
  /** 建表是否成功 */
  IsSuccess?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIntegrationNodeRequest {
  /** 集成节点信息 */
  NodeInfo: IntegrationNodeInfo;
  /** 项目id */
  ProjectId: string;
  /** 任务类型，201为实时任务，202为离线任务 */
  TaskType?: number;
}

declare interface CreateIntegrationNodeResponse {
  /** 节点 */
  Id?: string;
  /** 当前任务id */
  TaskId?: string | null;
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
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateOfflineTaskRequest {
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

declare interface CreateOfflineTaskResponse {
  /** 任务ID */
  TaskId?: string | null;
  /** 导入到编排空间的任务id */
  ArrangeSpaceTaskId?: string | null;
  /** 结果 */
  Data?: string | null;
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

declare interface CreateOpsMakePlanResponse {
  /** 结果 */
  Data?: CommonIdOpsDto;
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

declare interface CreateRuleTemplateResponse {
  /** 模板Id */
  Data?: number | null;
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
  AlarmId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskFolderRequest {
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

declare interface CreateTaskFolderResponse {
  /** 任务文件夹Id，null则创建失败 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskNewRequest {
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
  /** （必填参数）指定脚本内容，base64编码 */
  Content?: string;
  /** 代码模板ID */
  CodeTemplateId?: string;
}

declare interface CreateTaskNewResponse {
  /** 无 */
  Data?: string | null;
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
  /** 26离线同步，30Python，31PySpark，32DLC，33Impala，34Hive SQL，35Shell，36Spark SQL，39Spark，40TCHouse-P，92MapReduce */
  TaskType: number;
  /** 扩展属性 */
  TaskExt?: TaskExtInfo[];
}

declare interface CreateTaskResponse {
  /** 返回任务Id */
  Data?: CommonId | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskVersionDsRequest {
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
}

declare interface CreateTaskVersionDsResponse {
  /** 版本 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkflowDsRequest {
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

declare interface CreateWorkflowDsResponse {
  /** 工作流ID */
  Data?: string;
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

declare interface DagInstancesResponse {
  /** 结果 */
  Data?: CollectionInstanceOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCodeTemplateRequest {
  /** 项目ID */
  ProjectId: string;
  /** 模版ID */
  CodeTemplateId: string;
}

declare interface DeleteCodeTemplateResponse {
  /** 是否成功 */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomFunctionRequest {
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

declare interface DeleteCustomFunctionResponse {
  /** 函数 ID */
  FunctionId?: string | null;
  /** 无 */
  ErrorMessage?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDataModelRequest {
  /** 云应用的实例id */
  CloudappId: string;
  /** 数据建模的实例id */
  DataModelId: string;
  /** 用户的子账号id */
  UserId: string;
}

declare interface DeleteDataModelResponse {
  /** 是否销毁成功 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDataSourcesRequest {
  /** id列表 */
  Ids: number[];
  /** 项目id */
  ProjectId?: string;
}

declare interface DeleteDataSourcesResponse {
  /** 是否删除成功 */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDsFolderRequest {
  /** 项目Id */
  ProjectId: string;
  /** 文件夹ID */
  FolderId: string;
}

declare interface DeleteDsFolderResponse {
  /** true代表删除成功，false代表删除失败 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFilePathRequest {
  /** 项目ID */
  ProjectId: string;
  /** 资源ID */
  ResourceIds: string[];
  /** 使用状态- true- false */
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

declare interface DeleteIntegrationNodeRequest {
  /** 节点id */
  Id: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DeleteIntegrationNodeResponse {
  /** 删除返回是否成功标识 */
  Data?: boolean;
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

declare interface DeleteLinkRequest {
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

declare interface DeleteLinkResponse {
  /** 是否成功 */
  Data?: boolean | null;
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
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectParamDsRequest {
  /** 参数名 */
  ParamKey: string;
  /** 项目id */
  ProjectId: string;
}

declare interface DeleteProjectParamDsResponse {
  /** 结果 true 删除成功false 删除失败 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteProjectUsersRequest {
  /** 项目ID */
  ProjectId: string;
  /** 用户ID列表 */
  UserIds: string[];
}

declare interface DeleteProjectUsersResponse {
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
  /** 使用状态， 为ture 判断资源的使用状态，如果使用中则不能删除 */
  UseStatus: boolean;
  /** 资源id列表 */
  ResourceIds?: string[];
  /** 需要删除的资源路径列表 即资源管理中的目录结构 */
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
  ProjectId: string;
  /** 资源ID */
  ResourceId: string;
}

declare interface DeleteResourceResponse {
  /** 是否成功 */
  Data?: boolean | null;
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
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRuleTemplateRequest {
  /** 项目Id */
  ProjectId?: string;
  /** 模板Id列表 */
  Ids?: number[];
}

declare interface DeleteRuleTemplateResponse {
  /** 删除成功 */
  Data?: boolean | null;
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

declare interface DeleteTaskDsResponse {
  /** 是否删除成功 */
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

declare interface DescribeAlarmEventsRequest {
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

declare interface DescribeAlarmEventsResponse {
  /** 告警事件列表 */
  AlarmEventInfoList?: AlarmEventInfo[] | null;
  /** 总记录数 */
  TotalCount?: number;
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

declare interface DescribeAlarmReceiverResponse {
  /** 告警接收人列表 */
  AlarmReceiverInfoList?: AlarmReceiverInfo[] | null;
  /** 总记录数 */
  TotalCount?: number;
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

declare interface DescribeApproveListRequest {
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

declare interface DescribeApproveListResponse {
  /** 待审批列表详情 */
  Data?: DescribeApply | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApproveTypeListRequest {
  /** 类型key */
  Classification: string;
}

declare interface DescribeApproveTypeListResponse {
  /** 获取审批分类列表 */
  Data?: ApproveType[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBaseBizCatalogsRequest {
}

declare interface DescribeBaseBizCatalogsResponse {
  /** 类目列表 */
  Data: BizCatalogsInfo[] | null;
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

declare interface DescribeCodeTemplateDetailRequest {
  /** 项目Id */
  ProjectId: string;
  /** 模版Id */
  CodeTemplateId: string;
  /** 是否需要返回脚本内容，默认false。 */
  NeedReturnScriptContent?: boolean;
}

declare interface DescribeCodeTemplateDetailResponse {
  /** 代码详情 */
  Data?: CodeTemplateDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeColumnLineageRequest {
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

declare interface DescribeColumnLineageResponse {
  /** 字段血缘信息 */
  ColumnAggregationLineage?: ColumnAggregationLineage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeColumnsMetaRequest {
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

declare interface DescribeColumnsMetaResponse {
  /** 分页返回的 */
  ColumnMetaSet?: ColumnMeta[] | null;
  /** 总记录数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataCheckStatRequest {
  /** 项目id */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeDataCheckStatResponse {
  /** 结果 */
  Data?: DataCheckStat;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataServicePublishedApiDetailRequest {
  /** 服务Id */
  Id: string;
  /** 项目ID */
  ProjectId: string;
}

declare interface DescribeDataServicePublishedApiDetailResponse {
  /** 服务详情 */
  Data?: DescribeDataServicePublishedApiDetailResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataServicePublishedApiListRequest {
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

declare interface DescribeDataServicePublishedApiListResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 服务列表 */
  DataSet?: DescribeDataServicePublishedApiListResp[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataSourceInfoListRequest {
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
  /** 数据源类型，必选（如MYSQL、DLC等） */
  Type?: string;
  /** 数据源名称过滤 */
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
  Data?: DataSourceInfoPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseInfoListRequest {
  /** 过滤参数 */
  Filters: Filter[];
  /** 连接类型 */
  ConnectionType: string;
}

declare interface DescribeDatabaseInfoListResponse {
  /** 数据库列表 */
  DatabaseInfo?: DatabaseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseMetasRequest {
  /** 过滤字段，projectIds/msTypes/createTime/modifiedTime */
  Filters?: Filter[];
  /** 排序字段，如name */
  OrderFields?: OrderField[];
  /** pagesize */
  PageSize?: number;
  /** pageNumber */
  PageNumber?: number;
}

declare interface DescribeDatabaseMetasResponse {
  /** 无 */
  DatabaseMeta?: DatabaseMeta[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatasourceRequest {
  /** 对象唯一ID */
  Id: number;
  /** production：生产，development开发 */
  Env?: string;
}

declare interface DescribeDatasourceResponse {
  /** 数据源对象 */
  Data?: DataSourceInfo | null;
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

declare interface DescribeDsFolderTreeRequest {
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

declare interface DescribeDsFolderTreeResponse {
  /** 统一树结构返回属性列表 */
  Data?: PathNodeDsVO[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDsParentFolderTreeRequest {
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

declare interface DescribeDsParentFolderTreeResponse {
  /** 统一树结构返回属性列表 */
  Data?: PathNodeDsVO[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDsTaskVersionInfoRequest {
  /** 任务ID */
  TaskId: string;
  /** 版本 */
  TaskVersion: string;
  /** 项目id */
  ProjectId?: string;
}

declare interface DescribeDsTaskVersionInfoResponse {
  /** 任务版本详情信息 */
  Data?: TaskVersionDsDTO | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDsTaskVersionListRequest {
  /** 任务ID */
  TaskId: string;
  /** 项目ID */
  ProjectId?: string;
  /** 是否仅返回当前编辑版本 */
  IsOnlyCurrentEditingVersion?: boolean;
}

declare interface DescribeDsTaskVersionListResponse {
  /** 版本列表 */
  Data?: TaskVersionDsDTO[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDutyScheduleDetailsRequest {
  /** 值班表id */
  Id: number;
  /** 查询时间 */
  QueryDate: string;
  /** 扩展字段 */
  Filters?: Filter[];
}

declare interface DescribeDutyScheduleDetailsResponse {
  /** 值班日历信息 */
  Data?: DutyScheduleDetailsInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDutyScheduleListRequest {
  /** 页码，默认1 */
  PageNumber: number;
  /** 页大小，默认10 */
  PageSize: number;
  /** 值班表名称 */
  Name?: string;
}

declare interface DescribeDutyScheduleListResponse {
  /** 无 */
  Data: DutySchedule;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventCasesRequest {
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
  /** 项目ID */
  ProjectId?: string;
}

declare interface DescribeEventConsumeTasksResponse {
  /** 事件消费任务记录列表 */
  Data?: EventCaseConsumeLogOptDtoCollection | null;
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

declare interface DescribeExecStrategyRequest {
  /** 规则组Id */
  RuleGroupId?: number;
  /** 项目Id */
  ProjectId?: string;
}

declare interface DescribeExecStrategyResponse {
  /** 规则组执行策略 */
  Data?: RuleGroupExecStrategy | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExecutorGroupMetricRequest {
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

declare interface DescribeExecutorGroupMetricResponse {
  /** 执行组指标信息 */
  Data: ExecutorResourceGroupInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFieldBasicInfoRequest {
  /** 分页页码 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 过滤字段 */
  Filters?: Filter[];
  /** 排序字段 */
  OrderFields?: OrderField[];
}

declare interface DescribeFieldBasicInfoResponse {
  /** 字段元数据 */
  ColumnBasicInfoList?: ColumnBasicInfo[] | null;
  /** 总条数 */
  TotalCount?: number | null;
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
  Data?: DescribeFolderWorkflowListData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFormVersionParamRequest {
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
}

declare interface DescribeFormVersionParamResponse {
  /** 结果集 */
  Data?: TaskCollectionParamDTO | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFunctionKindsRequest {
}

declare interface DescribeFunctionKindsResponse {
  /** 无 */
  Kinds?: FunctionTypeOrKind[] | null;
  /** 无 */
  ErrorMessage?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFunctionTypesRequest {
}

declare interface DescribeFunctionTypesResponse {
  /** 类型 */
  Types?: FunctionTypeOrKind[] | null;
  /** 错误信息 */
  ErrorMessage?: string | null;
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

declare interface DescribeInstanceDetailInfoRequest {
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

declare interface DescribeInstanceDetailInfoResponse {
  /** 生命周期结果 */
  Data?: InstanceLifeCycleOpsDto[];
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

declare interface DescribeIntegrationNodeRequest {
  /** 节点id */
  Id: string;
  /** 项目id */
  ProjectId: string;
  /** 任务类型，201为实时任务，202为离线任务 */
  TaskType?: number;
}

declare interface DescribeIntegrationNodeResponse {
  /** 节点信息 */
  NodeInfo?: IntegrationNodeInfo | null;
  /** 上游节点是否已经修改。true 已修改，需要提示；false 没有修改 */
  SourceCheckFlag?: boolean | null;
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
  TrendsData?: IntegrationStatisticsTrendResult[] | null;
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
  TrendsData?: IntegrationStatisticsTrendResult[] | null;
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
  StatusData?: string | null;
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
  TrendsData?: IntegrationStatisticsTrendResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** 任务类型，201: 实时集成任务, 202：离线集成任务，不传默认值为201 实时任务类型 */
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
  /** 该任务选定版本的存储路径：DescribeDsTaskVersionList 或者 DescribeDsTaskVersionInfo 返回的对应的 TaskInfo.TaskExt.Properties 下 Base64.encode($region | $bucket | $ftp.file.name) 值 */
  TaskVersionPath: string;
  /** 该任务选定版本id：DescribeDsTaskVersionList 或者 DescribeDsTaskVersionInfo 返回的对应的 VersionId 取值 */
  TaskVersion?: string;
}

declare interface DescribeIntegrationVersionNodesInfoResponse {
  /** 任务节点信息 */
  Nodes?: IntegrationNodeInfo[] | null;
  /** 任务映射信息 */
  Mappings?: IntegrationNodeMapping[] | null;
  /** 任务id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeManualTriggerRecordPageRequest {
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

declare interface DescribeManualTriggerRecordPageResponse {
  /** 请求来源，WEB 前端；CLIENT 客户端 */
  RequestFromSource?: string | null;
  /** 详情结果 */
  Data?: ManualTriggerRecordOpsDtoPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOfflineTaskTokenRequest {
}

declare interface DescribeOfflineTaskTokenResponse {
  /** 长连接临时token */
  Token?: string;
  /** 长连接临时token。与Token相同含义，优先取Data，Data为空时，取Token。 */
  Data?: string | null;
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
}

declare interface DescribeOperateOpsTasksResponse {
  /** 任务列表信息 */
  Data?: OpsTaskInfoPage;
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
  /** 实例状态列表 */
  StateList?: number[];
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
  /** 实例状态过滤条件 */
  StateList?: number[];
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
  /** 实例状态过滤条件 */
  StateList?: number[];
  /** 模糊查询关键字 */
  Keyword?: string;
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
  /** 项目ID列表，用于多项目工作流筛选 */
  ProjectIds?: string[];
  /** 工作流类型列表 多个用英文逗号连接 cycle,manual. 默认只查询 cycle */
  WorkflowTypeList?: string[];
  /** 工作流过滤keyword，支持工作流 id/name 模糊匹配， 多个用|分割 */
  KeyWord?: string;
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
  /** 标准模式开发环境：DEV标准模式生产环境：PROD简单模式：ALL */
  EnvType?: string;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 排序条件 */
  OrderFields?: OrderField[];
}

declare interface DescribeOrganizationalFunctionsResponse {
  /** 函数信息 */
  Content?: OrganizationalFunction[] | null;
  /** 操作失败 */
  ErrorMessage?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeParentTaskRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务Id */
  TaskId: string;
}

declare interface DescribeParentTaskResponse {
  /** 任务详情1 */
  Data?: DependencyConfigDsDTO[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePendingSubmitTaskListRequest {
  /** 项目编号 */
  ProjectId: string;
  /** 工作流编号 */
  WorkflowId?: string;
  /** 任务编号列表 */
  TaskIdList?: string[];
}

declare interface DescribePendingSubmitTaskListResponse {
  /** 待提交任务信息 */
  Data?: DescribePendingSubmitTaskInfo[];
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
  /** 项目信息 */
  Data?: Project;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectUsersRequest {
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

declare interface DescribeProjectUsersResponse {
  /** 项目列表 */
  Data?: ProjectUsersPage;
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
  /** 项目id */
  ProjectId: string;
}

declare interface DescribeRealTimeTaskInstanceNodeInfoResponse {
  /** 实时任务实例节点相关信息 */
  RealTimeTaskInstanceNodeInfo?: RealTimeTaskInstanceNodeInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRealTimeTaskMetricOverviewRequest {
  /** 要查看的实时任务的任务ID，可在任务列表页面中获得 */
  TaskId: string;
  /** 要查看的项目ID */
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

declare interface DescribeRealTimeTaskSpeedResponse {
  /** 同步速度条/s列表 */
  RecordsSpeedList?: RecordsSpeed[];
  /** 同步速度字节/s列表 */
  BytesSpeedList?: BytesSpeed[];
  /** 同步速度，包括了RecordsSpeedList和BytesSpeedList */
  Data?: RealTimeTaskSpeed;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRealViewSchemaPageRequest {
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

declare interface DescribeRealViewSchemaPageResponse {
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

declare interface DescribeRelatedTasksByTaskIdRequest {
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

declare interface DescribeRelatedTasksByTaskIdResponse {
  /** 查询到的直接上下游任务列表结果 */
  Data?: DescribeRelatedTasksByTaskIdResp | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReportTaskDetailRequest {
  /** 租户id */
  TenantId: string;
  /** 引擎任务id */
  EngineTaskId: string;
}

declare interface DescribeReportTaskDetailResponse {
  /** 1 */
  Data?: ReportTaskDetail | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReportTaskListRequest {
  /** 页码 */
  PageNum?: number;
  /** 每页条数 */
  PageSize?: number;
  /** 租户id */
  TenantId?: string;
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

declare interface DescribeReportTaskListResponse {
  /** 任务列表信息 */
  Data?: ReportTaskListInfo;
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
  /** 文件夹类型personal 个人project 项目resource 资源 */
  DirType?: string;
}

declare interface DescribeResourceManagePathTreesResponse {
  /** 响应数据 */
  Data?: ResourcePathTree[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoleListRequest {
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

declare interface DescribeRoleListResponse {
  /** 角色列表 */
  Data?: PageRoles;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleDimStatRequest {
  /** 项目id */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeRuleDimStatResponse {
  /** 结果 */
  Data?: RuleDimStat;
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
  Data?: RuleExecResultDetail | null;
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
  Data?: RuleExecLog | null;
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
  Data?: RuleExecResultPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleExecStatRequest {
  /** 项目id */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeRuleExecStatResponse {
  /** 结果 */
  Data?: RuleExecStat;
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
  Data?: RuleGroupExecResultPage | null;
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
  Data?: RuleGroup | null;
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
  Data?: RuleGroupTable | null;
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
  Data?: RuleGroupPage | null;
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
  Data?: Rule | null;
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
  Data?: RuleTemplate | null;
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
  Data?: RuleTemplatePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRuleTemplatesRequest {
  /** 模板类型 1.系统模板 2.自定义模板 */
  Type?: number;
  /** 1.常量 2.离线表级 2.离线字段级 */
  SourceObjectType?: number;
  /** 项目Id */
  ProjectId?: string;
  /** 源端对应的引擎类型 */
  SourceEngineTypes?: number[];
}

declare interface DescribeRuleTemplatesResponse {
  /** 规则模板列表 */
  Data?: RuleTemplate[] | null;
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
  Data?: RulePage | null;
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

declare interface DescribeScheduleInstancesRequest {
  /** 请求来源，WEB 前端；CLIENT 客户端 */
  RequestFromSource?: string;
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
  /** 项目ID列表，用于多项目实例列表筛选，请注意，该字段传入时 ProjectId 字段也必须传，且传入的 ProjectIds 中的项目ID必须是当前用户有权限的项目ID，否则会由于权限校验失败报错 */
  ProjectIds?: string[];
}

declare interface DescribeScheduleInstancesResponse {
  /** 请求来源，WEB 前端；CLIENT 客户端 */
  RequestFromSource?: string | null;
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
  /** 工作流ID */
  WorkflowId?: string;
  /** 任务ID列表 */
  ProjectIds?: string[];
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
  /** 工作流ID */
  WorkflowId?: string;
  /** 项目ID列表，如果传了 ProjectIds ，ProjectId 不会生效 */
  ProjectIds?: string[];
  /** 资源组ID筛选 */
  ResourceGroupIds?: string[];
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
  /** 责任人 */
  InCharge?: string;
}

declare interface DescribeSchedulerTaskTypeCntResponse {
  /** data */
  Data?: TaskTypeCnt[] | null;
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
  /** 工作流ID */
  WorkflowId?: string;
  /** 项目ID列表，用于多项目实例趋势筛选，当指定了 ProjectIds 的时候，ProjectId 将只用来鉴权，不做筛选 */
  ProjectIds?: string[];
  /** 指定时间点，当统计时常为整天的时候使用，必须小于 24 */
  TimePoint?: number;
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
  /** 关键字 */
  Keyword?: string;
}

declare interface DescribeStreamTaskLogListResponse {
  /** 是否是全量 */
  ListOver?: boolean | null;
  /** 日志集合 */
  LogContentList?: LogContentInfo[] | null;
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

declare interface DescribeTableBasicInfoRequest {
  /** 分页页码 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 过滤字段 */
  Filters?: Filter[];
  /** 排序字段 */
  OrderFields?: OrderField[];
}

declare interface DescribeTableBasicInfoResponse {
  /** 表元数据 */
  TableBasicInfoList?: TableBasicInfo[] | null;
  /** 总条数 */
  TotalCount?: number | null;
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
  TableInfo?: TableInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableLineageInfoRequest {
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

declare interface DescribeTableLineageInfoResponse {
  /** 表血缘信息 */
  TableLineageBasicInfo?: TableLineageBaseInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableLineageRequest {
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

declare interface DescribeTableLineageResponse {
  /** 表血缘信息 */
  TableLineage?: TableLineageInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableMetaRequest {
  /** 表唯一id */
  TableId: string;
  /** 按名称查询的条件 */
  TableNameFilter?: TableNameFilter;
  /** 查询条件类型0按id，1按名称，默认为0 */
  TableFilterType?: number;
  /** 查询字段列表 */
  SearchNames?: string[];
}

declare interface DescribeTableMetaResponse {
  /** 表的元数据信息 */
  TableMeta?: TableMeta | null;
  /** 生命周期信息 */
  LifecycleInfo?: LifecycleInfo | null;
  /** 标签 */
  TagVoteSumList?: TagVoteSum | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableMetasRequest {
  /** 分页页码 */
  PageNumber?: number;
  /** 分页大小 */
  PageSize?: number;
  /** 过滤字段:dbName-数据库名称bizCatalogIds-资产目录IDDataLayerUuid-数仓分层IDownerAccount-负责人IDassetStatus-资产状态：1-已上架 0-未上架assetLevel-资产等级：40-核心30-重要 20-一般 10-临时 msTypes-数据源类型：例如TENCENT_MYSQL-腾讯云MySQL，数据源类型ID可参考[ { "DisplayName": "TCHouse-P", "Id": "TCHOUSE_P" }, { "DisplayName": "Iceberg", "Id": "ICEBERG" }, { "DisplayName": "Hive", "Id": "HIVE" }, { "DisplayName": "HBase", "Id": "HBASE" }, { "DisplayName": "DLC", "Id": "DLC" }, { "DisplayName": "腾讯云MySQL", "Id": "TENCENT_MYSQL" }, { "DisplayName": "TCHouse-D", "Id": "TCHOUSE_D" }, { "DisplayName": "TCHouse-C", "Id": "TCHOUSE_C" }, { "DisplayName": "EMR StarRocks", "Id": "EMR_STARROCKS" }, { "DisplayName": "Doris", "Id": "DORIS" }, { "DisplayName": "MySQL", "Id": "MYSQL" }, { "DisplayName": "Oracle", "Id": "ORACLE" }, { "DisplayName": "PostgreSQL", "Id": "POSTGRE" }, { "DisplayName": "SQL Server", "Id": "SQLSERVER" }, { "DisplayName": "TDSQL PostgreSQL", "Id": "TDSQL_POSTGRE" }, { "DisplayName": "Greenplum", "Id": "GREENPLUM" }, { "DisplayName": "StarRocks", "Id": "STARROCKS" }, { "DisplayName": "ClickHouse", "Id": "CLICKHOUSE" }, { "DisplayName": "INFLUXDB", "Id": "INFLUXDB" }, { "DisplayName": "达梦DM", "Id": "DM" }, { "DisplayName": "OceanBase", "Id": "OCEANBASE" }, { "DisplayName": "TDSQL MySQL", "Id": "TDSQL_MYSQL" }, { "DisplayName": "GaussDB", "Id": "GAUSSDB" }]projectIds-归属项目IDkeyword-关键字，支持表名/表中文名/数据库名 */
  Filters?: Filter[];
  /** 排序字段 */
  OrderFields?: OrderField[];
}

declare interface DescribeTableMetasResponse {
  /** 表元数据 */
  TableMetas?: TableMeta[] | null;
  /** 总条数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTablePartitionsRequest {
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

declare interface DescribeTablePartitionsResponse {
  /** 分区详情列表 */
  TablePartitionSet: TablePartition[] | null;
  /** 总记录数 */
  TotalCount: number;
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

declare interface DescribeTableSchemaInfoResponse {
  /** 查询到的SchemaInfo信息 */
  SchemaInfoList?: SchemaDetail[] | null;
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
  /** 工作流ID */
  WorkflowId?: string;
  /** 项目ID列表筛选 */
  ProjectIds?: string[];
  /** 资源组ID列表筛选 */
  ResourceGroupIds?: string[];
  /** 任务类型ID筛选 */
  TaskTypeIdList?: string[];
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

declare interface DescribeTaskByStatusReportResponse {
  /** 任务上报趋势指标 */
  Data?: TaskByStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskDetailDsRequest {
  /** 任务Id */
  TaskId: string;
  /** 项目Id */
  ProjectId?: string;
  /** 已废弃，无需填写 */
  TaskAlarmStatus?: number;
}

declare interface DescribeTaskDetailDsResponse {
  /** 任务详情1 */
  Data?: TaskDsDTO | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskLineageRequest {
  /** 请求来源，WEB 前端；CLIENT 客户端 */
  RequestFromSource?: string;
  /** 任务ID */
  TaskId?: string;
}

declare interface DescribeTaskLineageResponse {
  /** 请求来源，WEB 前端；CLIENT 客户端 */
  RequestFromSource?: string | null;
  /** 通过任务ID查询集成任务信息列表 */
  TaskLineageInfos?: TaskLineageInfoPair[];
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
  TaskLockStatus?: TaskLockStatus;
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
  /** 任务脚本内容，BASE64编码 */
  Data?: TaskScriptContent | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskTableMetricOverviewRequest {
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

declare interface DescribeTaskTableMetricOverviewResponse {
  /** 表粒度指标集合 */
  TaskTableMetricInfos?: TaskTableMetricInfo[];
  /** 总数 */
  TotalCount?: number;
  /** 返回列表类型 */
  MetricType?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskTemplatesRequest {
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

declare interface DescribeTaskTemplatesResponse {
  /** 查询项目下所有任务信息,不包括虚拟任务和离线任务 */
  Data?: PageTaskTemplateInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksForCodeTemplateRequest {
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

declare interface DescribeTasksForCodeTemplateResponse {
  /** 无 */
  Data?: DescribeTasksForCodeTemplatePage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplateDimCountRequest {
  /** 模板类型 */
  Type?: number;
  /** 项目ID */
  ProjectId?: string;
}

declare interface DescribeTemplateDimCountResponse {
  /** 维度统计结果 */
  Data?: DimensionCount[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTenantProjectsRequest {
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

declare interface DescribeTenantProjectsResponse {
  /** 项目列表 */
  Data?: ProjectPage;
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
  /** 项目id */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeTopTableStatResponse {
  /** 结果 */
  Data?: TopTableStat;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrendStatRequest {
  /** 项目id */
  ProjectId: string;
  /** 开始时间，时间戳到秒 */
  BeginDate: string;
  /** 结束时间，时间戳到秒 */
  EndDate: string;
}

declare interface DescribeTrendStatResponse {
  /** 结果 */
  Data?: RuleExecDateStat[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkflowByFordIdsRequest {
  /** 项目Id */
  ProjectId: string;
  /** 文件夹Id */
  FolderIdList: string[];
}

declare interface DescribeWorkflowByFordIdsResponse {
  /** 工作流详情 */
  Data?: WorkflowDsDTO[] | null;
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

declare interface DescribeWorkflowSchedulerInfoDsRequest {
  /** 项目ID */
  ProjectId: string;
  /** 工作流ID */
  WorkflowId: string;
}

declare interface DescribeWorkflowSchedulerInfoDsResponse {
  /** 数据 */
  Data?: WorkflowScheduleDtoDs | null;
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

declare interface DiagnoseProRequest {
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

declare interface DiagnoseProResponse {
  /** 结果 */
  Data?: DiagnoseRep;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadLogByLineRequest {
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

declare interface DownloadLogByLineResponse {
  /** 日志信息 */
  Data?: InstanceLogByLine | null;
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

declare interface FindAllFolderRequest {
  /** 项目ID */
  ProjectId: string;
}

declare interface FindAllFolderResponse {
  /** 文件夹列表 */
  FolderList?: FolderDsDto[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FreezeOpsTasksRequest {
  /** 任务列表 */
  Tasks: SimpleTaskInfo[];
  /** 任务操作是否消息通知下游任务责任人 */
  OperateIsInform: boolean;
  /** 是否终止已生成的实例 */
  KillInstance?: boolean;
}

declare interface FreezeOpsTasksResponse {
  /** 操作结果 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FreezeTasksByWorkflowIdsRequest {
  /** 工作流id列表 */
  WorkflowIds: string[];
  /** 项目id */
  ProjectId: string;
  /** 是否终止已生成的实例 */
  KillInstance?: boolean;
  /** 是否异步模式 */
  AsyncMode?: boolean;
}

declare interface FreezeTasksByWorkflowIdsResponse {
  /** 操作返回结果 */
  Data?: OperationOpsDto | null;
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

declare interface GenHiveTableDDLSqlResponse {
  /** 生成的ddl语句 */
  DDLSql?: string;
  /** 生成的ddl语句。与DDLSql相同含义，优先取Data，如果Data为空，则取DDLSql。 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetBatchDetailErrorLogRequest {
  /** 批量操作ID */
  JobId: number;
  /** 资源对象ID */
  ResourceId: string;
  /** 项目ID */
  ProjectId?: string;
}

declare interface GetBatchDetailErrorLogResponse {
  /** 日志返回 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCosTokenRequest {
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

declare interface GetCosTokenResponse {
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

declare interface GetFileInfoRequest {
  /** 项目ID */
  ProjectId: string;
  /** 文件路径项目区1470575647377821696项目，f1目录下： /datastudio/project/1470575647377821696/f1/sql1234.sql 个人区： /datastudio/personal/sqlTTT.sql */
  FilePath: string;
}

declare interface GetFileInfoResponse {
  /** 当前脚本信息 */
  UserFileInfo?: UserFileInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetInstanceLogRequest {
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

declare interface GetInstanceLogResponse {
  /** 调度实例详情 */
  Data?: InstanceLogVO | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetIntegrationNodeColumnSchemaRequest {
  /** 字段示例（json格式） */
  ColumnContent?: string;
  /** 数据源类型 MYSQL|HIVE|KAFKA|ES|MONGODB|REST_API|SYBASE|TIDB|DORIS|DM| */
  DatasourceType?: string;
}

declare interface GetIntegrationNodeColumnSchemaResponse {
  /** 字段列表 */
  Schemas?: IntegrationNodeSchema[] | null;
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
  Total?: number;
  /** 实例详情 */
  List?: OfflineInstance[];
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
  Total?: number;
  /** 实例详情 */
  List?: OfflineInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetPaginationTaskScriptRequest {
  /** 项目编号 */
  ProjectId: string;
  /** 任务编号 */
  TaskId: string;
  /** 页码（从1开始） */
  PageNum?: number;
}

declare interface GetPaginationTaskScriptResponse {
  /** 返回数据 */
  Data?: GetPaginationTaskScriptResponseInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTaskInstanceRequest {
  /** **项目ID** */
  ProjectId: string;
  /** **实例唯一标识** */
  InstanceKey: string;
  /** **时区**timeZone, 默认UTC+8 */
  ScheduleTimeZone?: string;
}

declare interface GetTaskInstanceResponse {
  /** 调度实例详情 */
  Data?: InstanceDetailVO | null;
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
}

declare interface JudgeResourceFileRequest {
  /** 项目id */
  ProjectId: string;
  /** 资源路径 */
  FilePath: string;
}

declare interface JudgeResourceFileResponse {
  /** 资源文件完整路径 */
  Data?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface KillOpsMakePlanInstancesRequest {
  /** 项目ID */
  ProjectId: string;
  /** 补录计划ID */
  PlanId: string;
  /** 是否异步模式 */
  AsyncMode?: boolean;
  /** 补录计划名 */
  PlanName?: string;
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
  /** 是否异步模式 */
  AsyncMode?: boolean;
}

declare interface KillScheduleInstancesResponse {
  /** 结果 */
  Data?: BatchOperateResultOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListBatchDetailRequest {
  /** 批量操作历史Id */
  JobId: number;
  /** 项目Id */
  ProjectId?: string;
}

declare interface ListBatchDetailResponse {
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

declare interface ListInstancesRequest {
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
}

declare interface ListInstancesResponse {
  /** 实例结果集 */
  Data?: InstancePageVO;
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
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApproveStatusRequest {
  /** 审批单ids */
  ApproveIds?: string[];
  /** 审批备注 */
  Remark?: string;
  /** 状态 */
  Status?: string;
}

declare interface ModifyApproveStatusResponse {
  /** 修改审批单状态 */
  Data?: ApproveModify[];
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
  /** 操作项目id */
  ProjectId?: string;
  /** 数据源开发环境配置 */
  DevelopmentParams?: string;
}

declare interface ModifyDataSourceResponse {
  /** 是否成功 */
  Data?: boolean | null;
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
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDsFolderRequest {
  /** 项目Id */
  ProjectId: string;
  /** 文件夹名称 */
  FolderName: string;
  /** 文件夹Id */
  FolderId: string;
  /** 父文件夹ID */
  ParentsFolderId?: string;
}

declare interface ModifyDsFolderResponse {
  /** true代表成功，false代表失败 */
  Data?: boolean;
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
  /** 触发场景 */
  TriggerTypes?: string[];
}

declare interface ModifyExecStrategyResponse {
  /** 规则组ID */
  Data?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIntegrationNodeRequest {
  /** 集成节点信息 */
  NodeInfo: IntegrationNodeInfo;
  /** 项目id */
  ProjectId: string;
  /** 任务类型 "201. stream, 202. offline" */
  TaskType?: number;
  /** 区分画布模式和表单 "1. 画布, 2. 表单"模式 */
  TaskMode?: number;
}

declare interface ModifyIntegrationNodeResponse {
  /** 节点id */
  Id?: string;
  /** 任务id */
  TaskId?: string | null;
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
  TaskId?: string;
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
  Data?: boolean | null;
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
}

declare interface ModifyRuleResponse {
  /** 是否更新成功 */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRuleTemplateRequest {
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

declare interface ModifyRuleTemplateResponse {
  /** 修改成功 */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTaskAlarmRegularRequest {
  /** 规则ID */
  Id: string;
  /** 规则信息 */
  TaskAlarmInfo: TaskAlarmInfo;
  /** 项目ID */
  ProjectId: string;
}

declare interface ModifyTaskAlarmRegularResponse {
  /** 判断是否修改成功 */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTaskInfoDsRequest {
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

declare interface ModifyTaskInfoDsResponse {
  /** 执行结果 */
  Data?: boolean;
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
  /** 执行耗时 */
  ExecutionTTL?: number;
  /** 脚本是否改变 */
  ScriptChange?: boolean;
  /** 责任人id */
  InChargeIds?: string[];
}

declare interface ModifyTaskInfoResponse {
  /** 执行结果 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTaskLinksDsRequest {
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

declare interface ModifyTaskLinksDsResponse {
  /** 成功或失败 */
  Data?: boolean | null;
  /** linkID */
  LinkId?: string | null;
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
  Data?: boolean | null;
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
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTaskScriptRequest {
  /** 项目Id */
  ProjectId: string;
  /** 任务ID */
  TaskId: string;
  /** 必填，脚本内容 base64编码 */
  ScriptContent?: string;
  /** 集成任务脚本配置 */
  IntegrationNodeDetails?: IntegrationNodeDetail[];
}

declare interface ModifyTaskScriptResponse {
  /** 详情 */
  Data?: CommonContent | null;
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
  Data?: boolean;
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
  Data?: BatchResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MoveTasksToFolderRequest {
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

declare interface MoveTasksToFolderResponse {
  /** true代表成功 */
  Data?: boolean | null;
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

declare interface RegisterDsEventListenerRequest {
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

declare interface RegisterDsEventListenerResponse {
  /** 事件监听者 */
  Data?: EventListenerDTO | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterDsEventRequest {
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
}

declare interface RegisterDsEventResponse {
  /** 事件信息 */
  Data?: EventDsDto | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Data?: BatchReturn | null;
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
  /** 事件所属人 */
  Owner: string;
  /** 必填，事件类型，默认值：TIME_SERIES */
  EventType?: string;
  /** 必填，对应day： yyyyMMdd，对应HOUR：yyyyMMddHH，对应MIN：yyyyMMddHHmm，对应SECOND：yyyyMMddHHmmss，默认值：yyyyMMdd */
  DimensionFormat?: string;
  /** 存活时间 */
  TimeToLive?: number;
  /** 事件描述 */
  Description?: string;
}

declare interface RegisterEventResponse {
  /** 成功或者失败 */
  Data?: BatchReturn | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveWorkflowDsRequest {
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

declare interface RemoveWorkflowDsResponse {
  /** 是否删除成功 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewWorkflowOwnerDsRequest {
  /** 工作流ID */
  ProjectId: string;
  /** 责任人 */
  Owner: string;
  /** 责任人ID */
  OwnerId: string;
  /** 工作流ID列表 */
  WorkflowIds: string[];
}

declare interface RenewWorkflowOwnerDsResponse {
  /** 执行结果 */
  Data?: BatchResultDs;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewWorkflowSchedulerInfoDsRequest {
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
}

declare interface RenewWorkflowSchedulerInfoDsResponse {
  /** 数据 */
  Data?: BatchResultDs | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReportTaskLineageRequest {
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

declare interface ReportTaskLineageResponse {
  /** 请求来源，WEB 前端；CLIENT 客户端 */
  RequestFromSource?: string | null;
  /** 上报结果 */
  Data?: boolean;
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
  /** 前端操作类型描述 */
  EventDesc?: string;
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
  RobLockState?: RobLockState;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunForceSucScheduleInstancesRequest {
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

declare interface RunForceSucScheduleInstancesResponse {
  /** 结果 */
  Data?: BatchOperateResultOpsDto;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunRerunScheduleInstancesRequest {
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
}

declare interface RunRerunScheduleInstancesResponse {
  /** 结果 */
  Data?: BatchOperateResultOpsDto;
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
  /** 项目id，不支持修改，dlc侧创建函数保存时用 */
  ProjectId?: string;
  /** 数据库名称，不支持修改，dlc侧创建函数保存时用 */
  DbName?: string;
  /** 函数名称，不支持修改，dlc侧创建函数保存时用 */
  Name?: string;
}

declare interface SaveCustomFunctionResponse {
  /** 函数唯一标识 */
  FunctionId?: string | null;
  /** 无 */
  ErrorMessage?: string | null;
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
  Data?: BatchOperateResult;
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
  /** 操作类型描述 */
  EventDesc?: string;
}

declare interface StartIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data?: boolean;
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
  Data?: boolean;
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
  FunctionId?: string | null;
  /** 错误提示 */
  ErrorMessage?: string | null;
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
  /** 脚本内容是否base64加密 */
  ScriptEncryption?: boolean;
}

declare interface SubmitSqlTaskResponse {
  /** 任务提交记录 */
  Record?: AdhocRecord;
  /** 子任务记录列表 */
  Details?: AdhocDetail[];
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
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitTaskTestRunRequest {
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
}

declare interface SubmitTaskTestRunResponse {
  /** 提交运行jobid */
  JobId?: number;
  /** 运行记录id */
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
  Data?: SubmitWorkflow;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SuspendIntegrationTaskRequest {
  /** 任务id */
  TaskId: string;
  /** 项目id */
  ProjectId: string;
  /** 事件类型(START, STOP, SUSPEND, SUSPEND_WITHOUT_SP,RESUME, COMMIT, TIMESTAMP) */
  Event?: string;
}

declare interface SuspendIntegrationTaskResponse {
  /** 操作成功与否标识 */
  Data?: boolean;
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
  /** 任务详细日志 */
  LogContentList?: LogContent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TriggerDsEventRequest {
  /** 项目id */
  ProjectId: string;
  /** 事件实例信息 */
  EventCaseList?: EventCaseDTO[];
  /** 事件实例信息(连续时间) */
  EventBatchCaseList?: EventBatchCaseDTO[];
  /** 触发时区 */
  ScheduleTimeZone?: string;
}

declare interface TriggerDsEventResponse {
  /** 操作结果 */
  Data?: BatchOpsDTO | null;
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
  Data?: BatchReturn | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TriggerManualTasksRequest {
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

declare interface TriggerManualTasksResponse {
  /** 请求来源，WEB 前端；CLIENT 客户端 */
  RequestFromSource?: string | null;
  /** 详情结果 */
  Data?: ManualTriggerRecordOpsDto | null;
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
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCodeTemplateRequest {
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
  RequestFromSource?: string;
  /** 脚本是否发生变化 */
  ScriptChange?: boolean;
  /** 转Base64的代码内容 */
  Content?: string;
}

declare interface UpdateCodeTemplateResponse {
  /** 详情 */
  Data?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateDataModelRegistryInfoRequest {
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

declare interface UpdateDataModelRegistryInfoResponse {
  /** 数语向wedata注册成功 */
  Data?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateProjectUserRoleRequest {
  /** 项目id */
  ProjectId: string;
  /** 用户id */
  UserIds: string[];
  /** 角色id */
  RoleIds: string[];
}

declare interface UpdateProjectUserRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateWorkflowInfoRequest {
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
}

declare interface UpdateWorkflowInfoResponse {
  /** true代表成功，false代表失败 */
  Data?: boolean;
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
  /** 请求来源，WEB 前端；CLIENT 客户端 */
  RequestFromSource?: string;
  /** 项目id */
  ProjectId?: string;
}

declare interface UploadContentResponse {
  /** 脚本信息响应 */
  ScriptInfo?: ScriptInfoResponse | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UploadResourceRequest {
  /** 资源上传请求信息 */
  UploadResourceRequestInfo?: UploadResourceRequestInfo;
  /** 项目id */
  ProjectId?: string;
}

declare interface UploadResourceResponse {
  /** 资源文件信息列表 */
  Data?: UserFileDTONew[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Wedata 数据开发治理平台 WeData} */
declare interface Wedata {
  (): Versions;
  /** 添加项目用户角色 {@link AddProjectUserRoleRequest} {@link AddProjectUserRoleResponse} */
  AddProjectUserRole(data: AddProjectUserRoleRequest, config?: AxiosRequestConfig): AxiosPromise<AddProjectUserRoleResponse>;
  /** 批量创建任务告警规则 {@link BatchCreateIntegrationTaskAlarmsRequest} {@link BatchCreateIntegrationTaskAlarmsResponse} */
  BatchCreateIntegrationTaskAlarms(data: BatchCreateIntegrationTaskAlarmsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateIntegrationTaskAlarmsResponse>;
  /** 异步批量创建任务版本 {@link BatchCreateTaskVersionAsyncRequest} {@link BatchCreateTaskVersionAsyncResponse} */
  BatchCreateTaskVersionAsync(data: BatchCreateTaskVersionAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<BatchCreateTaskVersionAsyncResponse>;
  /** 批量删除集成任务 {@link BatchDeleteIntegrationTasksRequest} {@link BatchDeleteIntegrationTasksResponse} */
  BatchDeleteIntegrationTasks(data: BatchDeleteIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteIntegrationTasksResponse>;
  /** 任务运维-批量删除任务 {@link BatchDeleteOpsTasksRequest} {@link BatchDeleteOpsTasksResponse} */
  BatchDeleteOpsTasks(data: BatchDeleteOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteOpsTasksResponse>;
  /** 批量置成功集成任务实例 {@link BatchForceSuccessIntegrationTaskInstancesRequest} {@link BatchForceSuccessIntegrationTaskInstancesResponse} */
  BatchForceSuccessIntegrationTaskInstances(data: BatchForceSuccessIntegrationTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchForceSuccessIntegrationTaskInstancesResponse>;
  /** 批量终止集成任务实例 {@link BatchKillIntegrationTaskInstancesRequest} {@link BatchKillIntegrationTaskInstancesResponse} */
  BatchKillIntegrationTaskInstances(data: BatchKillIntegrationTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchKillIntegrationTaskInstancesResponse>;
  /** 批量补数据 {@link BatchMakeUpIntegrationTasksRequest} {@link BatchMakeUpIntegrationTasksResponse} */
  BatchMakeUpIntegrationTasks(data: BatchMakeUpIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchMakeUpIntegrationTasksResponse>;
  /** 任务运维-批量修改任务责任人 {@link BatchModifyOpsOwnersRequest} {@link BatchModifyOpsOwnersResponse} */
  BatchModifyOpsOwners(data: BatchModifyOpsOwnersRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyOpsOwnersResponse>;
  /** 批量重跑集成任务实例 {@link BatchRerunIntegrationTaskInstancesRequest} {@link BatchRerunIntegrationTaskInstancesResponse} */
  BatchRerunIntegrationTaskInstances(data: BatchRerunIntegrationTaskInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchRerunIntegrationTaskInstancesResponse>;
  /** 批量继续执行集成任务 {@link BatchResumeIntegrationTasksRequest} {@link BatchResumeIntegrationTasksResponse} */
  BatchResumeIntegrationTasks(data: BatchResumeIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchResumeIntegrationTasksResponse>;
  /** 任务运维-批量启动任务 {@link BatchRunOpsTaskRequest} {@link BatchRunOpsTaskResponse} */
  BatchRunOpsTask(data: BatchRunOpsTaskRequest, config?: AxiosRequestConfig): AxiosPromise<BatchRunOpsTaskResponse>;
  /** 批量运行集成任务 {@link BatchStartIntegrationTasksRequest} {@link BatchStartIntegrationTasksResponse} */
  BatchStartIntegrationTasks(data: BatchStartIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStartIntegrationTasksResponse>;
  /** 批量停止集成任务 {@link BatchStopIntegrationTasksRequest} {@link BatchStopIntegrationTasksResponse} */
  BatchStopIntegrationTasks(data: BatchStopIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopIntegrationTasksResponse>;
  /** 任务运维-批量停止任务 {@link BatchStopOpsTasksRequest} {@link BatchStopOpsTasksResponse} */
  BatchStopOpsTasks(data: BatchStopOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopOpsTasksResponse>;
  /** 批量停止工作流 {@link BatchStopWorkflowsByIdsRequest} {@link BatchStopWorkflowsByIdsResponse} */
  BatchStopWorkflowsByIds(data: BatchStopWorkflowsByIdsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchStopWorkflowsByIdsResponse>;
  /** 批量暂停集成任务 {@link BatchSuspendIntegrationTasksRequest} {@link BatchSuspendIntegrationTasksResponse} */
  BatchSuspendIntegrationTasks(data: BatchSuspendIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchSuspendIntegrationTasksResponse>;
  /** 批量更新集成任务 {@link BatchUpdateIntegrationTasksRequest} {@link BatchUpdateIntegrationTasksResponse} */
  BatchUpdateIntegrationTasks(data: BatchUpdateIntegrationTasksRequest, config?: AxiosRequestConfig): AxiosPromise<BatchUpdateIntegrationTasksResponse>;
  /** 判断告警规则重名 {@link CheckAlarmRegularNameExistRequest} {@link CheckAlarmRegularNameExistResponse} */
  CheckAlarmRegularNameExist(data: CheckAlarmRegularNameExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAlarmRegularNameExistResponse>;
  /** 判断集成节点名称是否存在 {@link CheckIntegrationNodeNameExistsRequest} {@link CheckIntegrationNodeNameExistsResponse} */
  CheckIntegrationNodeNameExists(data: CheckIntegrationNodeNameExistsRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIntegrationNodeNameExistsResponse>;
  /** 判断集成任务名称是否存在 {@link CheckIntegrationTaskNameExistsRequest} {@link CheckIntegrationTaskNameExistsResponse} */
  CheckIntegrationTaskNameExists(data: CheckIntegrationTaskNameExistsRequest, config?: AxiosRequestConfig): AxiosPromise<CheckIntegrationTaskNameExistsResponse>;
  /** 离线任务重名校验 {@link CheckTaskNameExistRequest} {@link CheckTaskNameExistResponse} */
  CheckTaskNameExist(data: CheckTaskNameExistRequest, config?: AxiosRequestConfig): AxiosPromise<CheckTaskNameExistResponse>;
  /** 提交集成任务 {@link CommitIntegrationTaskRequest} {@link CommitIntegrationTaskResponse} */
  CommitIntegrationTask(data: CommitIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CommitIntegrationTaskResponse>;
  /** 提交规则组运行任务接口 {@link CommitRuleGroupTaskRequest} {@link CommitRuleGroupTaskResponse} */
  CommitRuleGroupTask(data?: CommitRuleGroupTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CommitRuleGroupTaskResponse>;
  /** 智能运维-统计任务实例状态 {@link CountOpsInstanceStateRequest} {@link CountOpsInstanceStateResponse} */
  CountOpsInstanceState(data: CountOpsInstanceStateRequest, config?: AxiosRequestConfig): AxiosPromise<CountOpsInstanceStateResponse>;
  /** 创建代码模版 {@link CreateCodeTemplateRequest} {@link CreateCodeTemplateResponse} */
  CreateCodeTemplate(data: CreateCodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCodeTemplateResponse>;
  /** 提交模版版本 {@link CreateCodeTemplateVersionRequest} {@link CreateCodeTemplateVersionResponse} */
  CreateCodeTemplateVersion(data: CreateCodeTemplateVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCodeTemplateVersionResponse>;
  /** 创建用户自定义函数 {@link CreateCustomFunctionRequest} {@link CreateCustomFunctionResponse} */
  CreateCustomFunction(data: CreateCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomFunctionResponse>;
  /** （仅公有云）创建数据建模，提供给云应用使用，实现"Wedata数据建模"的下单发货 {@link CreateDataModelRequest} {@link CreateDataModelResponse} */
  CreateDataModel(data: CreateDataModelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataModelResponse>;
  /** 数据源管理-创建数据源 {@link CreateDataSourceRequest} {@link CreateDataSourceResponse} */
  CreateDataSource(data: CreateDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataSourceResponse>;
  /** 创建文件夹 {@link CreateDsFolderRequest} {@link CreateDsFolderResponse} */
  CreateDsFolder(data: CreateDsFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDsFolderResponse>;
  /** 建hive表 {@link CreateHiveTableRequest} {@link CreateHiveTableResponse} */
  CreateHiveTable(data: CreateHiveTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHiveTableResponse>;
  /** 创建hive表 {@link CreateHiveTableByDDLRequest} {@link CreateHiveTableByDDLResponse} */
  CreateHiveTableByDDL(data: CreateHiveTableByDDLRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHiveTableByDDLResponse>;
  /** 创建集成节点 {@link CreateIntegrationNodeRequest} {@link CreateIntegrationNodeResponse} */
  CreateIntegrationNode(data: CreateIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationNodeResponse>;
  /** 创建集成任务 {@link CreateIntegrationTaskRequest} {@link CreateIntegrationTaskResponse} */
  CreateIntegrationTask(data: CreateIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrationTaskResponse>;
  /** 创建离线任务 {@link CreateOfflineTaskRequest} {@link CreateOfflineTaskResponse} */
  CreateOfflineTask(data: CreateOfflineTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOfflineTaskResponse>;
  /** 任务运维-批量补数据（创建补录计划） {@link CreateOpsMakePlanRequest} {@link CreateOpsMakePlanResponse} */
  CreateOpsMakePlan(data: CreateOpsMakePlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOpsMakePlanResponse>;
  /** 创建质量规则接口 {@link CreateRuleRequest} {@link CreateRuleResponse} */
  CreateRule(data?: CreateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleResponse>;
  /** 创建规则模板 {@link CreateRuleTemplateRequest} {@link CreateRuleTemplateResponse} */
  CreateRuleTemplate(data?: CreateRuleTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRuleTemplateResponse>;
  /** 创建任务（废弃） {@link CreateTaskRequest} {@link CreateTaskResponse} */
  CreateTask(data: CreateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskResponse>;
  /** 创建任务告警规则 {@link CreateTaskAlarmRegularRequest} {@link CreateTaskAlarmRegularResponse} */
  CreateTaskAlarmRegular(data: CreateTaskAlarmRegularRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskAlarmRegularResponse>;
  /** 创建任务文件夹 {@link CreateTaskFolderRequest} {@link CreateTaskFolderResponse} */
  CreateTaskFolder(data: CreateTaskFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskFolderResponse>;
  /** 聚合创建任务 {@link CreateTaskNewRequest} {@link CreateTaskNewResponse} */
  CreateTaskNew(data: CreateTaskNewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskNewResponse>;
  /** 提交任务版本 {@link CreateTaskVersionDsRequest} {@link CreateTaskVersionDsResponse} */
  CreateTaskVersionDs(data: CreateTaskVersionDsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskVersionDsResponse>;
  /** 创建工作流 {@link CreateWorkflowDsRequest} {@link CreateWorkflowDsResponse} */
  CreateWorkflowDs(data: CreateWorkflowDsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkflowDsResponse>;
  /** 拉取dag实例 {@link DagInstancesRequest} {@link DagInstancesResponse} */
  DagInstances(data?: DagInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DagInstancesResponse>;
  /** 删除代码模版 {@link DeleteCodeTemplateRequest} {@link DeleteCodeTemplateResponse} */
  DeleteCodeTemplate(data: DeleteCodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCodeTemplateResponse>;
  /** 删除用户自定义函数 {@link DeleteCustomFunctionRequest} {@link DeleteCustomFunctionResponse} */
  DeleteCustomFunction(data?: DeleteCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomFunctionResponse>;
  /** （仅公有云）销毁数据建模，提供给云应用使用，实现Wedata数据建模的销毁 {@link DeleteDataModelRequest} {@link DeleteDataModelResponse} */
  DeleteDataModel(data: DeleteDataModelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDataModelResponse>;
  /** 数据源管理-删除数据源 {@link DeleteDataSourcesRequest} {@link DeleteDataSourcesResponse} */
  DeleteDataSources(data: DeleteDataSourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDataSourcesResponse>;
  /** 删除文件夹 {@link DeleteDsFolderRequest} {@link DeleteDsFolderResponse} */
  DeleteDsFolder(data: DeleteDsFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDsFolderResponse>;
  /** 开发空间-删除文件 {@link DeleteFileRequest} {@link DeleteFileResponse} */
  DeleteFile(data: DeleteFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFileResponse>;
  /** 开发空间-批量删除目录和文件 {@link DeleteFilePathRequest} {@link DeleteFilePathResponse} */
  DeleteFilePath(data: DeleteFilePathRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFilePathResponse>;
  /** 删除集成节点 {@link DeleteIntegrationNodeRequest} {@link DeleteIntegrationNodeResponse} */
  DeleteIntegrationNode(data: DeleteIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationNodeResponse>;
  /** 删除实时集成任务 {@link DeleteIntegrationTaskRequest} {@link DeleteIntegrationTaskResponse} */
  DeleteIntegrationTask(data: DeleteIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIntegrationTaskResponse>;
  /** 删除任务连接 {@link DeleteLinkRequest} {@link DeleteLinkResponse} */
  DeleteLink(data: DeleteLinkRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLinkResponse>;
  /** 删除离线任务 {@link DeleteOfflineTaskRequest} {@link DeleteOfflineTaskResponse} */
  DeleteOfflineTask(data: DeleteOfflineTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteOfflineTaskResponse>;
  /** 删除项目参数 {@link DeleteProjectParamDsRequest} {@link DeleteProjectParamDsResponse} */
  DeleteProjectParamDs(data: DeleteProjectParamDsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectParamDsResponse>;
  /** 删除项目用户 {@link DeleteProjectUsersRequest} {@link DeleteProjectUsersResponse} */
  DeleteProjectUsers(data: DeleteProjectUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteProjectUsersResponse>;
  /** 删除资源（废弃） {@link DeleteResourceRequest} {@link DeleteResourceResponse} */
  DeleteResource(data: DeleteResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceResponse>;
  /** 【资源管理】删除资源 {@link DeleteResourceFileRequest} {@link DeleteResourceFileResponse} */
  DeleteResourceFile(data: DeleteResourceFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceFileResponse>;
  /** 【资源管理】批量删除资源 {@link DeleteResourceFilesRequest} {@link DeleteResourceFilesResponse} */
  DeleteResourceFiles(data: DeleteResourceFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceFilesResponse>;
  /** 删除质量规则接口 {@link DeleteRuleRequest} {@link DeleteRuleResponse} */
  DeleteRule(data?: DeleteRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleResponse>;
  /** 删除规则模板 {@link DeleteRuleTemplateRequest} {@link DeleteRuleTemplateResponse} */
  DeleteRuleTemplate(data?: DeleteRuleTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRuleTemplateResponse>;
  /** 删除任务告警规则 {@link DeleteTaskAlarmRegularRequest} {@link DeleteTaskAlarmRegularResponse} */
  DeleteTaskAlarmRegular(data: DeleteTaskAlarmRegularRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskAlarmRegularResponse>;
  /** 删除编排空间任务 {@link DeleteTaskDsRequest} {@link DeleteTaskDsResponse} */
  DeleteTaskDs(data: DeleteTaskDsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskDsResponse>;
  /** 通过工作流Id删除工作流 {@link DeleteWorkflowByIdRequest} {@link DeleteWorkflowByIdResponse} */
  DeleteWorkflowById(data: DeleteWorkflowByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkflowByIdResponse>;
  /** 告警事件列表 {@link DescribeAlarmEventsRequest} {@link DescribeAlarmEventsResponse} */
  DescribeAlarmEvents(data: DescribeAlarmEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmEventsResponse>;
  /** 告警接收人详情 {@link DescribeAlarmReceiverRequest} {@link DescribeAlarmReceiverResponse} */
  DescribeAlarmReceiver(data: DescribeAlarmReceiverRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAlarmReceiverResponse>;
  /** 查询父目录下所有子文件夹+工作流 {@link DescribeAllByFolderNewRequest} {@link DescribeAllByFolderNewResponse} */
  DescribeAllByFolderNew(data?: DescribeAllByFolderNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllByFolderNewResponse>;
  /** 获取待审批列表 {@link DescribeApproveListRequest} {@link DescribeApproveListResponse} */
  DescribeApproveList(data: DescribeApproveListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApproveListResponse>;
  /** 获取审批分类列表 {@link DescribeApproveTypeListRequest} {@link DescribeApproveTypeListResponse} */
  DescribeApproveTypeList(data: DescribeApproveTypeListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApproveTypeListResponse>;
  /** 数据类目基础信息列表 {@link DescribeBaseBizCatalogsRequest} {@link DescribeBaseBizCatalogsResponse} */
  DescribeBaseBizCatalogs(data?: DescribeBaseBizCatalogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaseBizCatalogsResponse>;
  /** 批量操作页面获取任务列表 {@link DescribeBatchOperateTaskRequest} {@link DescribeBatchOperateTaskResponse} */
  DescribeBatchOperateTask(data: DescribeBatchOperateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBatchOperateTaskResponse>;
  /** 查询代码模版具体详情 {@link DescribeCodeTemplateDetailRequest} {@link DescribeCodeTemplateDetailResponse} */
  DescribeCodeTemplateDetail(data: DescribeCodeTemplateDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCodeTemplateDetailResponse>;
  /** 列出字段血缘信息 {@link DescribeColumnLineageRequest} {@link DescribeColumnLineageResponse} */
  DescribeColumnLineage(data: DescribeColumnLineageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeColumnLineageResponse>;
  /** 查询表的所有列元数据 {@link DescribeColumnsMetaRequest} {@link DescribeColumnsMetaResponse} */
  DescribeColumnsMeta(data: DescribeColumnsMetaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeColumnsMetaResponse>;
  /** 数据质量数据监测情况接口 {@link DescribeDataCheckStatRequest} {@link DescribeDataCheckStatResponse} */
  DescribeDataCheckStat(data: DescribeDataCheckStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataCheckStatResponse>;
  /** 查询数据服务API的发布态信息详情 {@link DescribeDataServicePublishedApiDetailRequest} {@link DescribeDataServicePublishedApiDetailResponse} */
  DescribeDataServicePublishedApiDetail(data: DescribeDataServicePublishedApiDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataServicePublishedApiDetailResponse>;
  /** 获取数据服务API的发布态信息列表 {@link DescribeDataServicePublishedApiListRequest} {@link DescribeDataServicePublishedApiListResponse} */
  DescribeDataServicePublishedApiList(data: DescribeDataServicePublishedApiListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataServicePublishedApiListResponse>;
  /** 获取数据源信息 {@link DescribeDataSourceInfoListRequest} {@link DescribeDataSourceInfoListResponse} */
  DescribeDataSourceInfoList(data: DescribeDataSourceInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceInfoListResponse>;
  /** 数据源管理-查询数据源分页列表 {@link DescribeDataSourceListRequest} {@link DescribeDataSourceListResponse} */
  DescribeDataSourceList(data?: DescribeDataSourceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataSourceListResponse>;
  /** 获取数据库信息 {@link DescribeDatabaseInfoListRequest} {@link DescribeDatabaseInfoListResponse} */
  DescribeDatabaseInfoList(data: DescribeDatabaseInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseInfoListResponse>;
  /** 查询数据库列表 {@link DescribeDatabaseMetasRequest} {@link DescribeDatabaseMetasResponse} */
  DescribeDatabaseMetas(data?: DescribeDatabaseMetasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseMetasResponse>;
  /** 数据源管理-数据源详情 {@link DescribeDatasourceRequest} {@link DescribeDatasourceResponse} */
  DescribeDatasource(data: DescribeDatasourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatasourceResponse>;
  /** 根据层级查找上-下游任务节点 {@link DescribeDependOpsTasksRequest} {@link DescribeDependOpsTasksResponse} */
  DescribeDependOpsTasks(data: DescribeDependOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDependOpsTasksResponse>;
  /** 通过taskIds查询task详情列表 {@link DescribeDependTaskListsRequest} {@link DescribeDependTaskListsResponse} */
  DescribeDependTaskLists(data: DescribeDependTaskListsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDependTaskListsResponse>;
  /** 查询维度评分 {@link DescribeDimensionScoreRequest} {@link DescribeDimensionScoreResponse} */
  DescribeDimensionScore(data: DescribeDimensionScoreRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDimensionScoreResponse>;
  /** @deprecated 分页查询试运行实例列表 {@link DescribeDrInstancePageRequest} {@link DescribeDrInstancePageResponse} */
  DescribeDrInstancePage(data: DescribeDrInstancePageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDrInstancePageResponse>;
  /** 编排空间-查询目录树 {@link DescribeDsFolderTreeRequest} {@link DescribeDsFolderTreeResponse} */
  DescribeDsFolderTree(data: DescribeDsFolderTreeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDsFolderTreeResponse>;
  /** 编排空间-查询父目录树 {@link DescribeDsParentFolderTreeRequest} {@link DescribeDsParentFolderTreeResponse} */
  DescribeDsParentFolderTree(data: DescribeDsParentFolderTreeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDsParentFolderTreeResponse>;
  /** 查看任务版本详细信息 {@link DescribeDsTaskVersionInfoRequest} {@link DescribeDsTaskVersionInfoResponse} */
  DescribeDsTaskVersionInfo(data: DescribeDsTaskVersionInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDsTaskVersionInfoResponse>;
  /** 拉取任务版本列表 {@link DescribeDsTaskVersionListRequest} {@link DescribeDsTaskVersionListResponse} */
  DescribeDsTaskVersionList(data: DescribeDsTaskVersionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDsTaskVersionListResponse>;
  /** 获取值班日历 {@link DescribeDutyScheduleDetailsRequest} {@link DescribeDutyScheduleDetailsResponse} */
  DescribeDutyScheduleDetails(data: DescribeDutyScheduleDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDutyScheduleDetailsResponse>;
  /** 获取值班表列表 {@link DescribeDutyScheduleListRequest} {@link DescribeDutyScheduleListResponse} */
  DescribeDutyScheduleList(data: DescribeDutyScheduleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDutyScheduleListResponse>;
  /** 实例运维-事件实例-查询事件详情 {@link DescribeEventRequest} {@link DescribeEventResponse} */
  DescribeEvent(data: DescribeEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventResponse>;
  /** 查找事件实例 {@link DescribeEventCasesRequest} {@link DescribeEventCasesResponse} */
  DescribeEventCases(data: DescribeEventCasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventCasesResponse>;
  /** 事件实例-事件实例查看消费任务 {@link DescribeEventConsumeTasksRequest} {@link DescribeEventConsumeTasksResponse} */
  DescribeEventConsumeTasks(data: DescribeEventConsumeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventConsumeTasksResponse>;
  /** 查询规则组执行策略 {@link DescribeExecStrategyRequest} {@link DescribeExecStrategyResponse} */
  DescribeExecStrategy(data?: DescribeExecStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExecStrategyResponse>;
  /** 根据id查询执行资源组指标-商业化版本 {@link DescribeExecutorGroupMetricRequest} {@link DescribeExecutorGroupMetricResponse} */
  DescribeExecutorGroupMetric(data: DescribeExecutorGroupMetricRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExecutorGroupMetricResponse>;
  /** 字段基础信息查询 {@link DescribeFieldBasicInfoRequest} {@link DescribeFieldBasicInfoResponse} */
  DescribeFieldBasicInfo(data?: DescribeFieldBasicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFieldBasicInfoResponse>;
  /** 拉取文件夹下的工作流 {@link DescribeFolderWorkflowListRequest} {@link DescribeFolderWorkflowListResponse} */
  DescribeFolderWorkflowList(data: DescribeFolderWorkflowListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFolderWorkflowListResponse>;
  /** 查询模版提交任务参数 {@link DescribeFormVersionParamRequest} {@link DescribeFormVersionParamResponse} */
  DescribeFormVersionParam(data: DescribeFormVersionParamRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFormVersionParamResponse>;
  /** 查询函数分类 {@link DescribeFunctionKindsRequest} {@link DescribeFunctionKindsResponse} */
  DescribeFunctionKinds(data?: DescribeFunctionKindsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionKindsResponse>;
  /** 查询函数类型 {@link DescribeFunctionTypesRequest} {@link DescribeFunctionTypesResponse} */
  DescribeFunctionTypes(data?: DescribeFunctionTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFunctionTypesResponse>;
  /** 周期实例统计 {@link DescribeInstanceByCycleRequest} {@link DescribeInstanceByCycleResponse} */
  DescribeInstanceByCycle(data?: DescribeInstanceByCycleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceByCycleResponse>;
  /** DescribeInstanceDetailInfo {@link DescribeInstanceDetailInfoRequest} {@link DescribeInstanceDetailInfoResponse} */
  DescribeInstanceDetailInfo(data: DescribeInstanceDetailInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceDetailInfoResponse>;
  /** 获取日志详情页面 {@link DescribeInstanceLastLogRequest} {@link DescribeInstanceLastLogResponse} */
  DescribeInstanceLastLog(data: DescribeInstanceLastLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLastLogResponse>;
  /** 获取离线运维实例列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** 获取实例运行日志 {@link DescribeInstanceLogRequest} {@link DescribeInstanceLogResponse} */
  DescribeInstanceLog(data: DescribeInstanceLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogResponse>;
  /** 实例运维-获取具体实例相关日志信息内容 {@link DescribeInstanceLogDetailRequest} {@link DescribeInstanceLogDetailResponse} */
  DescribeInstanceLogDetail(data: DescribeInstanceLogDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogDetailResponse>;
  /** 下载日志文件 {@link DescribeInstanceLogFileRequest} {@link DescribeInstanceLogFileResponse} */
  DescribeInstanceLogFile(data: DescribeInstanceLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogFileResponse>;
  /** 获取离线任务实例运行日志列表 {@link DescribeInstanceLogListRequest} {@link DescribeInstanceLogListResponse} */
  DescribeInstanceLogList(data: DescribeInstanceLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLogListResponse>;
  /** 查询集成节点 {@link DescribeIntegrationNodeRequest} {@link DescribeIntegrationNodeResponse} */
  DescribeIntegrationNode(data: DescribeIntegrationNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationNodeResponse>;
  /** 数据集成大屏概览 {@link DescribeIntegrationStatisticsRequest} {@link DescribeIntegrationStatisticsResponse} */
  DescribeIntegrationStatistics(data: DescribeIntegrationStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrationStatisticsResponse>;
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
  /** 查询手动任务触发记录 {@link DescribeManualTriggerRecordPageRequest} {@link DescribeManualTriggerRecordPageResponse} */
  DescribeManualTriggerRecordPage(data: DescribeManualTriggerRecordPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeManualTriggerRecordPageResponse>;
  /** 获取离线任务长连接Token {@link DescribeOfflineTaskTokenRequest} {@link DescribeOfflineTaskTokenResponse} */
  DescribeOfflineTaskToken(data?: DescribeOfflineTaskTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOfflineTaskTokenResponse>;
  /** 智能运维-任务运维列表组合条件查询 {@link DescribeOperateOpsTasksRequest} {@link DescribeOperateOpsTasksResponse} */
  DescribeOperateOpsTasks(data: DescribeOperateOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOperateOpsTasksResponse>;
  /** 实例运维-获取实例日志列表 {@link DescribeOpsInstanceLogListRequest} {@link DescribeOpsInstanceLogListResponse} */
  DescribeOpsInstanceLogList(data: DescribeOpsInstanceLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsInstanceLogListResponse>;
  /** 数据补录-查看补录计划任务实例 {@link DescribeOpsMakePlanInstancesRequest} {@link DescribeOpsMakePlanInstancesResponse} */
  DescribeOpsMakePlanInstances(data: DescribeOpsMakePlanInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsMakePlanInstancesResponse>;
  /** 数据补录-查看补录计划任务 {@link DescribeOpsMakePlanTasksRequest} {@link DescribeOpsMakePlanTasksResponse} */
  DescribeOpsMakePlanTasks(data: DescribeOpsMakePlanTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsMakePlanTasksResponse>;
  /** 数据补录-查询补录计划 {@link DescribeOpsMakePlansRequest} {@link DescribeOpsMakePlansResponse} */
  DescribeOpsMakePlans(data: DescribeOpsMakePlansRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsMakePlansResponse>;
  /** 查询用户生产工作流列表 {@link DescribeOpsWorkflowsRequest} {@link DescribeOpsWorkflowsResponse} */
  DescribeOpsWorkflows(data: DescribeOpsWorkflowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOpsWorkflowsResponse>;
  /** 查询全量函数（层级化）接口 {@link DescribeOrganizationalFunctionsRequest} {@link DescribeOrganizationalFunctionsResponse} */
  DescribeOrganizationalFunctions(data: DescribeOrganizationalFunctionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOrganizationalFunctionsResponse>;
  /** 查询任务父依赖 {@link DescribeParentTaskRequest} {@link DescribeParentTaskResponse} */
  DescribeParentTask(data: DescribeParentTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParentTaskResponse>;
  /** 获取待提交任务预提交校验信息 {@link DescribePendingSubmitTaskListRequest} {@link DescribePendingSubmitTaskListResponse} */
  DescribePendingSubmitTaskList(data: DescribePendingSubmitTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePendingSubmitTaskListResponse>;
  /** 获取项目信息 {@link DescribeProjectRequest} {@link DescribeProjectResponse} */
  DescribeProject(data?: DescribeProjectRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectResponse>;
  /** 获取项目下的用户列表 {@link DescribeProjectUsersRequest} {@link DescribeProjectUsersResponse} */
  DescribeProjectUsers(data: DescribeProjectUsersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectUsersResponse>;
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
  /** 数据集成分页获取数据库Schema {@link DescribeRealViewSchemaPageRequest} {@link DescribeRealViewSchemaPageResponse} */
  DescribeRealViewSchemaPage(data: DescribeRealViewSchemaPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRealViewSchemaPageResponse>;
  /** 根据任务ID分页查询上下游直接关联任务 {@link DescribeRelatedTasksByTaskIdRequest} {@link DescribeRelatedTasksByTaskIdResponse} */
  DescribeRelatedTasksByTaskId(data: DescribeRelatedTasksByTaskIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRelatedTasksByTaskIdResponse>;
  /** 获取用量大盘任务详情 {@link DescribeReportTaskDetailRequest} {@link DescribeReportTaskDetailResponse} */
  DescribeReportTaskDetail(data: DescribeReportTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportTaskDetailResponse>;
  /** 查询用量大盘任务列表 {@link DescribeReportTaskListRequest} {@link DescribeReportTaskListResponse} */
  DescribeReportTaskList(data?: DescribeReportTaskListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportTaskListResponse>;
  /** 获取资源管理目录树 {@link DescribeResourceManagePathTreesRequest} {@link DescribeResourceManagePathTreesResponse} */
  DescribeResourceManagePathTrees(data?: DescribeResourceManagePathTreesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceManagePathTreesResponse>;
  /** 获取角色列表信息 {@link DescribeRoleListRequest} {@link DescribeRoleListResponse} */
  DescribeRoleList(data?: DescribeRoleListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoleListResponse>;
  /** 查询规则详情 {@link DescribeRuleRequest} {@link DescribeRuleResponse} */
  DescribeRule(data?: DescribeRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleResponse>;
  /** 数据质量触发维度分布统计接口 {@link DescribeRuleDimStatRequest} {@link DescribeRuleDimStatResponse} */
  DescribeRuleDimStat(data: DescribeRuleDimStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleDimStatResponse>;
  /** 查询规则执行结果详情 {@link DescribeRuleExecDetailRequest} {@link DescribeRuleExecDetailResponse} */
  DescribeRuleExecDetail(data?: DescribeRuleExecDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecDetailResponse>;
  /** 规则执行日志查询 {@link DescribeRuleExecLogRequest} {@link DescribeRuleExecLogResponse} */
  DescribeRuleExecLog(data: DescribeRuleExecLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecLogResponse>;
  /** 规则执行结果列表查询 {@link DescribeRuleExecResultsRequest} {@link DescribeRuleExecResultsResponse} */
  DescribeRuleExecResults(data?: DescribeRuleExecResultsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecResultsResponse>;
  /** 数据质量规则运行情况接口 {@link DescribeRuleExecStatRequest} {@link DescribeRuleExecStatResponse} */
  DescribeRuleExecStat(data: DescribeRuleExecStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleExecStatResponse>;
  /** 查询规则组详情接口 {@link DescribeRuleGroupRequest} {@link DescribeRuleGroupResponse} */
  DescribeRuleGroup(data?: DescribeRuleGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupResponse>;
  /** 规则组执行结果分页查询接口 {@link DescribeRuleGroupExecResultsByPageRequest} {@link DescribeRuleGroupExecResultsByPageResponse} */
  DescribeRuleGroupExecResultsByPage(data?: DescribeRuleGroupExecResultsByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupExecResultsByPageResponse>;
  /** 查询规则组订阅信息 {@link DescribeRuleGroupSubscriptionRequest} {@link DescribeRuleGroupSubscriptionResponse} */
  DescribeRuleGroupSubscription(data?: DescribeRuleGroupSubscriptionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupSubscriptionResponse>;
  /** 查询表绑定执行规则组信息 {@link DescribeRuleGroupTableRequest} {@link DescribeRuleGroupTableResponse} */
  DescribeRuleGroupTable(data: DescribeRuleGroupTableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupTableResponse>;
  /** 分页查询规则组接口 {@link DescribeRuleGroupsByPageRequest} {@link DescribeRuleGroupsByPageResponse} */
  DescribeRuleGroupsByPage(data?: DescribeRuleGroupsByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleGroupsByPageResponse>;
  /** 查询模板详情 {@link DescribeRuleTemplateRequest} {@link DescribeRuleTemplateResponse} */
  DescribeRuleTemplate(data?: DescribeRuleTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleTemplateResponse>;
  /** 查询规则模板列表 {@link DescribeRuleTemplatesRequest} {@link DescribeRuleTemplatesResponse} */
  DescribeRuleTemplates(data?: DescribeRuleTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleTemplatesResponse>;
  /** 规则模板查询接口 {@link DescribeRuleTemplatesByPageRequest} {@link DescribeRuleTemplatesByPageResponse} */
  DescribeRuleTemplatesByPage(data: DescribeRuleTemplatesByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuleTemplatesByPageResponse>;
  /** 查询质量规则列表 {@link DescribeRulesRequest} {@link DescribeRulesResponse} */
  DescribeRules(data?: DescribeRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesResponse>;
  /** 分页查询质量规则 {@link DescribeRulesByPageRequest} {@link DescribeRulesByPageResponse} */
  DescribeRulesByPage(data?: DescribeRulesByPageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRulesByPageResponse>;
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
  /** 实例状态趋势 {@link DescribeStatisticInstanceStatusTrendOpsRequest} {@link DescribeStatisticInstanceStatusTrendOpsResponse} */
  DescribeStatisticInstanceStatusTrendOps(data: DescribeStatisticInstanceStatusTrendOpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStatisticInstanceStatusTrendOpsResponse>;
  /** 查询实时任务日志列表 {@link DescribeStreamTaskLogListRequest} {@link DescribeStreamTaskLogListResponse} */
  DescribeStreamTaskLogList(data: DescribeStreamTaskLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStreamTaskLogListResponse>;
  /** 获取任务全部下游（开发态） {@link DescribeSuccessorOpsTaskInfosRequest} {@link DescribeSuccessorOpsTaskInfosResponse} */
  DescribeSuccessorOpsTaskInfos(data: DescribeSuccessorOpsTaskInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSuccessorOpsTaskInfosResponse>;
  /** 表基础信息查询 {@link DescribeTableBasicInfoRequest} {@link DescribeTableBasicInfoResponse} */
  DescribeTableBasicInfo(data?: DescribeTableBasicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableBasicInfoResponse>;
  /** 获取数据表信息 {@link DescribeTableInfoListRequest} {@link DescribeTableInfoListResponse} */
  DescribeTableInfoList(data: DescribeTableInfoListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableInfoListResponse>;
  /** 列出表血缘信息 {@link DescribeTableLineageRequest} {@link DescribeTableLineageResponse} */
  DescribeTableLineage(data: DescribeTableLineageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableLineageResponse>;
  /** 表血缘信息查询接口 {@link DescribeTableLineageInfoRequest} {@link DescribeTableLineageInfoResponse} */
  DescribeTableLineageInfo(data: DescribeTableLineageInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableLineageInfoResponse>;
  /** 查询表元数据详情 {@link DescribeTableMetaRequest} {@link DescribeTableMetaResponse} */
  DescribeTableMeta(data: DescribeTableMetaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableMetaResponse>;
  /** 获取表元数据list {@link DescribeTableMetasRequest} {@link DescribeTableMetasResponse} */
  DescribeTableMetas(data?: DescribeTableMetasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableMetasResponse>;
  /** 查询表的分区详情信息 {@link DescribeTablePartitionsRequest} {@link DescribeTablePartitionsResponse} */
  DescribeTablePartitions(data: DescribeTablePartitionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablePartitionsResponse>;
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
  /** @deprecated 任务状态周期增长趋势 {@link DescribeTaskByCycleReportRequest} {@link DescribeTaskByCycleReportResponse} */
  DescribeTaskByCycleReport(data: DescribeTaskByCycleReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskByCycleReportResponse>;
  /** 任务状态趋势 {@link DescribeTaskByStatusReportRequest} {@link DescribeTaskByStatusReportResponse} */
  DescribeTaskByStatusReport(data: DescribeTaskByStatusReportRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskByStatusReportResponse>;
  /** 查询任务具体详情【新】 {@link DescribeTaskDetailDsRequest} {@link DescribeTaskDetailDsResponse} */
  DescribeTaskDetailDs(data: DescribeTaskDetailDsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskDetailDsResponse>;
  /** 通过任务查询表的血缘关系 {@link DescribeTaskLineageRequest} {@link DescribeTaskLineageResponse} */
  DescribeTaskLineage(data?: DescribeTaskLineageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLineageResponse>;
  /** 查看任务锁状态信息 {@link DescribeTaskLockStatusRequest} {@link DescribeTaskLockStatusResponse} */
  DescribeTaskLockStatus(data: DescribeTaskLockStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLockStatusResponse>;
  /** 分页查询任务运行历史 {@link DescribeTaskRunHistoryRequest} {@link DescribeTaskRunHistoryResponse} */
  DescribeTaskRunHistory(data: DescribeTaskRunHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskRunHistoryResponse>;
  /** 查询任务脚本（废弃） {@link DescribeTaskScriptRequest} {@link DescribeTaskScriptResponse} */
  DescribeTaskScript(data: DescribeTaskScriptRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskScriptResponse>;
  /** 查询实时任务表粒度指标概览 {@link DescribeTaskTableMetricOverviewRequest} {@link DescribeTaskTableMetricOverviewResponse} */
  DescribeTaskTableMetricOverview(data: DescribeTaskTableMetricOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskTableMetricOverviewResponse>;
  /** 查询项目任务模版列表 {@link DescribeTaskTemplatesRequest} {@link DescribeTaskTemplatesResponse} */
  DescribeTaskTemplates(data: DescribeTaskTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskTemplatesResponse>;
  /** 分页查询引用模板的任务列表 {@link DescribeTasksForCodeTemplateRequest} {@link DescribeTasksForCodeTemplateResponse} */
  DescribeTasksForCodeTemplate(data: DescribeTasksForCodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksForCodeTemplateResponse>;
  /** 查询规则模板维度分布情况 {@link DescribeTemplateDimCountRequest} {@link DescribeTemplateDimCountResponse} */
  DescribeTemplateDimCount(data?: DescribeTemplateDimCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplateDimCountResponse>;
  /** 获取租户全局范围的项目列表 {@link DescribeTenantProjectsRequest} {@link DescribeTenantProjectsResponse} */
  DescribeTenantProjects(data: DescribeTenantProjectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTenantProjectsResponse>;
  /** 实例运维-获取第三方运行日志 {@link DescribeThirdTaskRunLogRequest} {@link DescribeThirdTaskRunLogResponse} */
  DescribeThirdTaskRunLog(data: DescribeThirdTaskRunLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeThirdTaskRunLogResponse>;
  /** 数据质量表排行接口 {@link DescribeTopTableStatRequest} {@link DescribeTopTableStatResponse} */
  DescribeTopTableStat(data: DescribeTopTableStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTopTableStatResponse>;
  /** 数据质量概览页面趋势接口 {@link DescribeTrendStatRequest} {@link DescribeTrendStatResponse} */
  DescribeTrendStat(data: DescribeTrendStatRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrendStatResponse>;
  /** 根据文件夹查询工作流 {@link DescribeWorkflowByFordIdsRequest} {@link DescribeWorkflowByFordIdsResponse} */
  DescribeWorkflowByFordIds(data: DescribeWorkflowByFordIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowByFordIdsResponse>;
  /** 查询工作流画布 {@link DescribeWorkflowCanvasInfoRequest} {@link DescribeWorkflowCanvasInfoResponse} */
  DescribeWorkflowCanvasInfo(data: DescribeWorkflowCanvasInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowCanvasInfoResponse>;
  /** 查询工作流画布运行起止时间 {@link DescribeWorkflowExecuteByIdRequest} {@link DescribeWorkflowExecuteByIdResponse} */
  DescribeWorkflowExecuteById(data: DescribeWorkflowExecuteByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowExecuteByIdResponse>;
  /** 通过工作流id，查询工作流详情 {@link DescribeWorkflowInfoByIdRequest} {@link DescribeWorkflowInfoByIdResponse} */
  DescribeWorkflowInfoById(data: DescribeWorkflowInfoByIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowInfoByIdResponse>;
  /** 根据项目id 获取项目下所有工作流列表 {@link DescribeWorkflowListByProjectIdRequest} {@link DescribeWorkflowListByProjectIdResponse} */
  DescribeWorkflowListByProjectId(data: DescribeWorkflowListByProjectIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowListByProjectIdResponse>;
  /** 获取工作流调度信息 {@link DescribeWorkflowSchedulerInfoDsRequest} {@link DescribeWorkflowSchedulerInfoDsResponse} */
  DescribeWorkflowSchedulerInfoDs(data: DescribeWorkflowSchedulerInfoDsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowSchedulerInfoDsResponse>;
  /** 查询工作流任务数 {@link DescribeWorkflowTaskCountRequest} {@link DescribeWorkflowTaskCountResponse} */
  DescribeWorkflowTaskCount(data: DescribeWorkflowTaskCountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkflowTaskCountResponse>;
  /** 实例诊断信息-新 {@link DiagnoseProRequest} {@link DiagnoseProResponse} */
  DiagnosePro(data: DiagnoseProRequest, config?: AxiosRequestConfig): AxiosPromise<DiagnoseProResponse>;
  /** 按行下载日志信息 {@link DownloadLogByLineRequest} {@link DownloadLogByLineResponse} */
  DownloadLogByLine(data: DownloadLogByLineRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadLogByLineResponse>;
  /** 调试运行集成任务 {@link DryRunDIOfflineTaskRequest} {@link DryRunDIOfflineTaskResponse} */
  DryRunDIOfflineTask(data: DryRunDIOfflineTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DryRunDIOfflineTaskResponse>;
  /** 编排空间批量操作页面查找全部的文件夹 {@link FindAllFolderRequest} {@link FindAllFolderResponse} */
  FindAllFolder(data: FindAllFolderRequest, config?: AxiosRequestConfig): AxiosPromise<FindAllFolderResponse>;
  /** 任务运维-批量暂停任务 {@link FreezeOpsTasksRequest} {@link FreezeOpsTasksResponse} */
  FreezeOpsTasks(data: FreezeOpsTasksRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeOpsTasksResponse>;
  /** 暂停工作流下的所有任务 {@link FreezeTasksByWorkflowIdsRequest} {@link FreezeTasksByWorkflowIdsResponse} */
  FreezeTasksByWorkflowIds(data: FreezeTasksByWorkflowIdsRequest, config?: AxiosRequestConfig): AxiosPromise<FreezeTasksByWorkflowIdsResponse>;
  /** 生成建hive表的sql {@link GenHiveTableDDLSqlRequest} {@link GenHiveTableDDLSqlResponse} */
  GenHiveTableDDLSql(data: GenHiveTableDDLSqlRequest, config?: AxiosRequestConfig): AxiosPromise<GenHiveTableDDLSqlResponse>;
  /** 获取批量操作错误日志 {@link GetBatchDetailErrorLogRequest} {@link GetBatchDetailErrorLogResponse} */
  GetBatchDetailErrorLog(data: GetBatchDetailErrorLogRequest, config?: AxiosRequestConfig): AxiosPromise<GetBatchDetailErrorLogResponse>;
  /** 开发空间-获取cos token {@link GetCosTokenRequest} {@link GetCosTokenResponse} */
  GetCosToken(data: GetCosTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetCosTokenResponse>;
  /** 开发空间-获取数据开发脚本信息 {@link GetFileInfoRequest} {@link GetFileInfoResponse} */
  GetFileInfo(data: GetFileInfoRequest, config?: AxiosRequestConfig): AxiosPromise<GetFileInfoResponse>;
  /** 查询调度实例日志内容 {@link GetInstanceLogRequest} {@link GetInstanceLogResponse} */
  GetInstanceLog(data: GetInstanceLogRequest, config?: AxiosRequestConfig): AxiosPromise<GetInstanceLogResponse>;
  /** 提取数据集成节点字段Schema {@link GetIntegrationNodeColumnSchemaRequest} {@link GetIntegrationNodeColumnSchemaResponse} */
  GetIntegrationNodeColumnSchema(data?: GetIntegrationNodeColumnSchemaRequest, config?: AxiosRequestConfig): AxiosPromise<GetIntegrationNodeColumnSchemaResponse>;
  /** 获取离线任务实例列表(新) {@link GetOfflineDIInstanceListRequest} {@link GetOfflineDIInstanceListResponse} */
  GetOfflineDIInstanceList(data: GetOfflineDIInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetOfflineDIInstanceListResponse>;
  /** 获取离线任务实例 {@link GetOfflineInstanceListRequest} {@link GetOfflineInstanceListResponse} */
  GetOfflineInstanceList(data: GetOfflineInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<GetOfflineInstanceListResponse>;
  /** 获取带分页的任务脚本 {@link GetPaginationTaskScriptRequest} {@link GetPaginationTaskScriptResponse} */
  GetPaginationTaskScript(data: GetPaginationTaskScriptRequest, config?: AxiosRequestConfig): AxiosPromise<GetPaginationTaskScriptResponse>;
  /** 获取调度实例详情 {@link GetTaskInstanceRequest} {@link GetTaskInstanceResponse} */
  GetTaskInstance(data: GetTaskInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<GetTaskInstanceResponse>;
  /** 【资源管理】判断资源文件是否存在 {@link JudgeResourceFileRequest} {@link JudgeResourceFileResponse} */
  JudgeResourceFile(data: JudgeResourceFileRequest, config?: AxiosRequestConfig): AxiosPromise<JudgeResourceFileResponse>;
  /** 数据补录-按补录计划批量终止实例 {@link KillOpsMakePlanInstancesRequest} {@link KillOpsMakePlanInstancesResponse} */
  KillOpsMakePlanInstances(data: KillOpsMakePlanInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<KillOpsMakePlanInstancesResponse>;
  /** 实例运维-批量终止l实例 {@link KillScheduleInstancesRequest} {@link KillScheduleInstancesResponse} */
  KillScheduleInstances(data?: KillScheduleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<KillScheduleInstancesResponse>;
  /** 获取操作详情列表 {@link ListBatchDetailRequest} {@link ListBatchDetailResponse} */
  ListBatchDetail(data: ListBatchDetailRequest, config?: AxiosRequestConfig): AxiosPromise<ListBatchDetailResponse>;
  /** 获取调度实例列表 {@link ListInstancesRequest} {@link ListInstancesResponse} */
  ListInstances(data: ListInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ListInstancesResponse>;
  /** 锁定实时集成任务 {@link LockIntegrationTaskRequest} {@link LockIntegrationTaskResponse} */
  LockIntegrationTask(data: LockIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<LockIntegrationTaskResponse>;
  /** 修改审批单状态 {@link ModifyApproveStatusRequest} {@link ModifyApproveStatusResponse} */
  ModifyApproveStatus(data?: ModifyApproveStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApproveStatusResponse>;
  /** 数据源管理-修改数据源 {@link ModifyDataSourceRequest} {@link ModifyDataSourceResponse} */
  ModifyDataSource(data: ModifyDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDataSourceResponse>;
  /** 修改维度权重 {@link ModifyDimensionWeightRequest} {@link ModifyDimensionWeightResponse} */
  ModifyDimensionWeight(data: ModifyDimensionWeightRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDimensionWeightResponse>;
  /** 文件夹更新 {@link ModifyDsFolderRequest} {@link ModifyDsFolderResponse} */
  ModifyDsFolder(data: ModifyDsFolderRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDsFolderResponse>;
  /** 更新规则组执行策略 {@link ModifyExecStrategyRequest} {@link ModifyExecStrategyResponse} */
  ModifyExecStrategy(data?: ModifyExecStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyExecStrategyResponse>;
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
  /** 编辑规则模板 {@link ModifyRuleTemplateRequest} {@link ModifyRuleTemplateResponse} */
  ModifyRuleTemplate(data?: ModifyRuleTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRuleTemplateResponse>;
  /** 修改任务告警规则 {@link ModifyTaskAlarmRegularRequest} {@link ModifyTaskAlarmRegularResponse} */
  ModifyTaskAlarmRegular(data: ModifyTaskAlarmRegularRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskAlarmRegularResponse>;
  /** 更新任务（废弃） {@link ModifyTaskInfoRequest} {@link ModifyTaskInfoResponse} */
  ModifyTaskInfo(data: ModifyTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskInfoResponse>;
  /** 更新任务信息 {@link ModifyTaskInfoDsRequest} {@link ModifyTaskInfoDsResponse} */
  ModifyTaskInfoDs(data: ModifyTaskInfoDsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskInfoDsResponse>;
  /** 添加父任务依赖（废弃） {@link ModifyTaskLinksRequest} {@link ModifyTaskLinksResponse} */
  ModifyTaskLinks(data: ModifyTaskLinksRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskLinksResponse>;
  /** 添加当前任务父任务依赖 {@link ModifyTaskLinksDsRequest} {@link ModifyTaskLinksDsResponse} */
  ModifyTaskLinksDs(data: ModifyTaskLinksDsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskLinksDsResponse>;
  /** 重命名任务（任务编辑） {@link ModifyTaskNameRequest} {@link ModifyTaskNameResponse} */
  ModifyTaskName(data: ModifyTaskNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskNameResponse>;
  /** 修改任务脚本（废弃） {@link ModifyTaskScriptRequest} {@link ModifyTaskScriptResponse} */
  ModifyTaskScript(data: ModifyTaskScriptRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskScriptResponse>;
  /** 更新工作流信息（废弃） {@link ModifyWorkflowInfoRequest} {@link ModifyWorkflowInfoResponse} */
  ModifyWorkflowInfo(data: ModifyWorkflowInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkflowInfoResponse>;
  /** 更新工作流调度（废弃） {@link ModifyWorkflowScheduleRequest} {@link ModifyWorkflowScheduleResponse} */
  ModifyWorkflowSchedule(data: ModifyWorkflowScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkflowScheduleResponse>;
  /** 移动任务到工作流文件夹 {@link MoveTasksToFolderRequest} {@link MoveTasksToFolderResponse} */
  MoveTasksToFolder(data: MoveTasksToFolderRequest, config?: AxiosRequestConfig): AxiosPromise<MoveTasksToFolderResponse>;
  /** 注册事件 {@link RegisterDsEventRequest} {@link RegisterDsEventResponse} */
  RegisterDsEvent(data: RegisterDsEventRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterDsEventResponse>;
  /** 注册事件监听者 {@link RegisterDsEventListenerRequest} {@link RegisterDsEventListenerResponse} */
  RegisterDsEventListener(data: RegisterDsEventListenerRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterDsEventListenerResponse>;
  /** 注册事件（废弃） {@link RegisterEventRequest} {@link RegisterEventResponse} */
  RegisterEvent(data: RegisterEventRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterEventResponse>;
  /** 注册事件监听器（废弃） {@link RegisterEventListenerRequest} {@link RegisterEventListenerResponse} */
  RegisterEventListener(data: RegisterEventListenerRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterEventListenerResponse>;
  /** 删除编排空间工作流 {@link RemoveWorkflowDsRequest} {@link RemoveWorkflowDsResponse} */
  RemoveWorkflowDs(data: RemoveWorkflowDsRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveWorkflowDsResponse>;
  /** 批量更新工作流下任务责任人 {@link RenewWorkflowOwnerDsRequest} {@link RenewWorkflowOwnerDsResponse} */
  RenewWorkflowOwnerDs(data: RenewWorkflowOwnerDsRequest, config?: AxiosRequestConfig): AxiosPromise<RenewWorkflowOwnerDsResponse>;
  /** 更新工作流下任务调度信息 {@link RenewWorkflowSchedulerInfoDsRequest} {@link RenewWorkflowSchedulerInfoDsResponse} */
  RenewWorkflowSchedulerInfoDs(data: RenewWorkflowSchedulerInfoDsRequest, config?: AxiosRequestConfig): AxiosPromise<RenewWorkflowSchedulerInfoDsResponse>;
  /** 任务血缘上报接口 {@link ReportTaskLineageRequest} {@link ReportTaskLineageResponse} */
  ReportTaskLineage(data: ReportTaskLineageRequest, config?: AxiosRequestConfig): AxiosPromise<ReportTaskLineageResponse>;
  /** 继续实时集成任务 {@link ResumeIntegrationTaskRequest} {@link ResumeIntegrationTaskResponse} */
  ResumeIntegrationTask(data: ResumeIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeIntegrationTaskResponse>;
  /** 抢占锁定集成任务 {@link RobAndLockIntegrationTaskRequest} {@link RobAndLockIntegrationTaskResponse} */
  RobAndLockIntegrationTask(data: RobAndLockIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RobAndLockIntegrationTaskResponse>;
  /** 实例运维-实例批量置成功1 {@link RunForceSucScheduleInstancesRequest} {@link RunForceSucScheduleInstancesResponse} */
  RunForceSucScheduleInstances(data?: RunForceSucScheduleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RunForceSucScheduleInstancesResponse>;
  /** 任务运维-实例批量重跑 {@link RunRerunScheduleInstancesRequest} {@link RunRerunScheduleInstancesResponse} */
  RunRerunScheduleInstances(data?: RunRerunScheduleInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RunRerunScheduleInstancesResponse>;
  /** 批量启动工作流 {@link RunTasksByMultiWorkflowRequest} {@link RunTasksByMultiWorkflowResponse} */
  RunTasksByMultiWorkflow(data: RunTasksByMultiWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<RunTasksByMultiWorkflowResponse>;
  /** 保存用户自定义函数 {@link SaveCustomFunctionRequest} {@link SaveCustomFunctionResponse} */
  SaveCustomFunction(data: SaveCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<SaveCustomFunctionResponse>;
  /** 设置任务告警，新建（更新）告警信息 {@link SetTaskAlarmNewRequest} {@link SetTaskAlarmNewResponse} */
  SetTaskAlarmNew(data: SetTaskAlarmNewRequest, config?: AxiosRequestConfig): AxiosPromise<SetTaskAlarmNewResponse>;
  /** 启动实时集成任务 {@link StartIntegrationTaskRequest} {@link StartIntegrationTaskResponse} */
  StartIntegrationTask(data: StartIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StartIntegrationTaskResponse>;
  /** 停止实时集成任务 {@link StopIntegrationTaskRequest} {@link StopIntegrationTaskResponse} */
  StopIntegrationTask(data: StopIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StopIntegrationTaskResponse>;
  /** 提交自定义函数 {@link SubmitCustomFunctionRequest} {@link SubmitCustomFunctionResponse} */
  SubmitCustomFunction(data: SubmitCustomFunctionRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitCustomFunctionResponse>;
  /** 提交SQL任务 {@link SubmitSqlTaskRequest} {@link SubmitSqlTaskResponse} */
  SubmitSqlTask(data: SubmitSqlTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitSqlTaskResponse>;
  /** 提交任务（废弃） {@link SubmitTaskRequest} {@link SubmitTaskResponse} */
  SubmitTask(data: SubmitTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTaskResponse>;
  /** 提交工作流测试运行任务 {@link SubmitTaskTestRunRequest} {@link SubmitTaskTestRunResponse} */
  SubmitTaskTestRun(data: SubmitTaskTestRunRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitTaskTestRunResponse>;
  /** 提交工作流（废弃） {@link SubmitWorkflowRequest} {@link SubmitWorkflowResponse} */
  SubmitWorkflow(data: SubmitWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitWorkflowResponse>;
  /** 暂停实时集成任务 {@link SuspendIntegrationTaskRequest} {@link SuspendIntegrationTaskResponse} */
  SuspendIntegrationTask(data: SuspendIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<SuspendIntegrationTaskResponse>;
  /** 查询实时任务日志接口 {@link TaskLogRequest} {@link TaskLogResponse} */
  TaskLog(data: TaskLogRequest, config?: AxiosRequestConfig): AxiosPromise<TaskLogResponse>;
  /** 触发事件 {@link TriggerDsEventRequest} {@link TriggerDsEventResponse} */
  TriggerDsEvent(data: TriggerDsEventRequest, config?: AxiosRequestConfig): AxiosPromise<TriggerDsEventResponse>;
  /** 触发事件生成事件实例（废弃） {@link TriggerEventRequest} {@link TriggerEventResponse} */
  TriggerEvent(data: TriggerEventRequest, config?: AxiosRequestConfig): AxiosPromise<TriggerEventResponse>;
  /** 手动任务触发运行 {@link TriggerManualTasksRequest} {@link TriggerManualTasksResponse} */
  TriggerManualTasks(data: TriggerManualTasksRequest, config?: AxiosRequestConfig): AxiosPromise<TriggerManualTasksResponse>;
  /** 解锁实时集成任务 {@link UnlockIntegrationTaskRequest} {@link UnlockIntegrationTaskResponse} */
  UnlockIntegrationTask(data: UnlockIntegrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<UnlockIntegrationTaskResponse>;
  /** 更新代码模版 {@link UpdateCodeTemplateRequest} {@link UpdateCodeTemplateResponse} */
  UpdateCodeTemplate(data: UpdateCodeTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCodeTemplateResponse>;
  /** （仅公有云）数语向Wedata注册，更新相关信息 {@link UpdateDataModelRegistryInfoRequest} {@link UpdateDataModelRegistryInfoResponse} */
  UpdateDataModelRegistryInfo(data: UpdateDataModelRegistryInfoRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateDataModelRegistryInfoResponse>;
  /** 修改项目用户角色 {@link UpdateProjectUserRoleRequest} {@link UpdateProjectUserRoleResponse} */
  UpdateProjectUserRole(data: UpdateProjectUserRoleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateProjectUserRoleResponse>;
  /** 更新工作流信息【整合】 {@link UpdateWorkflowInfoRequest} {@link UpdateWorkflowInfoResponse} */
  UpdateWorkflowInfo(data: UpdateWorkflowInfoRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkflowInfoResponse>;
  /** 修改工作流责任人（废弃） {@link UpdateWorkflowOwnerRequest} {@link UpdateWorkflowOwnerResponse} */
  UpdateWorkflowOwner(data: UpdateWorkflowOwnerRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateWorkflowOwnerResponse>;
  /** 开发空间-保存任务信息 {@link UploadContentRequest} {@link UploadContentResponse} */
  UploadContent(data: UploadContentRequest, config?: AxiosRequestConfig): AxiosPromise<UploadContentResponse>;
  /** 【资源管理】上传资源 {@link UploadResourceRequest} {@link UploadResourceResponse} */
  UploadResource(data?: UploadResourceRequest, config?: AxiosRequestConfig): AxiosPromise<UploadResourceResponse>;
}

export declare type Versions = ["2021-08-20"];

export default Wedata;
