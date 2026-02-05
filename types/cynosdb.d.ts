/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 集群支持的功能 */
declare interface Ability {
  /** 是否支持从可用区 */
  IsSupportSlaveZone: string;
  /** 不支持从可用区的原因 */
  NonsupportSlaveZoneReason: string;
  /** 是否支持RO实例 */
  IsSupportRo: string;
  /** 不支持RO实例的原因 */
  NonsupportRoReason: string;
  /** 是否支持手动发起快照备份 */
  IsSupportManualSnapshot: string;
  /** 是否支持透明数据加密 */
  IsSupportTransparentDataEncryption?: string;
  /** 不支持透明数据加密原因 */
  NoSupportTransparentDataEncryptionReason?: string;
  /** 是否支持手动发起逻辑备份 */
  IsSupportManualLogic?: string;
  /** 是否支持开启全局加密 */
  IsSupportGlobalEncryption?: string;
  /** 不支持全局加密的原因 */
  NoSupportGlobalEncryptionReason?: string;
  /** 不支持透明加密原因状态码 */
  NoSupportTransparentDataEncryptionReasonCode?: string;
  /** 不支持全局加密原因状态码 */
  NoSupportGlobalEncryptionReasonCode?: string;
}

/** 数据库账号信息 */
declare interface Account {
  /** 数据库账号名 */
  AccountName?: string;
  /** 数据库账号描述 */
  Description?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 主机 */
  Host?: string;
  /** 用户最大连接数 */
  MaxUserConnections?: number;
}

/** 账号参数 */
declare interface AccountParam {
  /** 参数名称，当前仅支持参数：max_user_connections */
  ParamName: string;
  /** 参数值 */
  ParamValue: string;
}

/** 数据库地址 */
declare interface Addr {
  /** IP地址 */
  IP?: string;
  /** 端口 */
  Port?: number;
}

/** 查询审计实例的过滤条件 */
declare interface AuditInstanceFilters {
  /** 过滤条件值。支持InstanceId-实例ID，InstanceName-实例名称，ProjectId-项目ID，TagKey-标签键，Tag-标签（以竖线分割，例：Tagkey|Tagvalue）。 */
  Name: string;
  /** true表示精确查找，false表示模糊匹配。 */
  ExactMatch: boolean;
  /** 筛选值 */
  Values: string[];
}

/** 审计实例详情 */
declare interface AuditInstanceInfo {
  /** 项目ID */
  ProjectId?: number;
  /** 标签信息 */
  TagList?: Tag[];
}

/** 审计日志详细信息 */
declare interface AuditLog {
  /** 影响行数。 */
  AffectRows?: number;
  /** 错误码。 */
  ErrCode?: number;
  /** SQL类型。 */
  SqlType?: string;
  /** 表名称。 */
  TableName?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 审计策略名称。 */
  PolicyName?: string;
  /** 数据库名称。 */
  DBName?: string;
  /** SQL语句。 */
  Sql?: string;
  /** 客户端地址。 */
  Host?: string;
  /** 用户名。 */
  User?: string;
  /** 执行时间，微秒。 */
  ExecTime?: number;
  /** 时间。 */
  Timestamp?: string;
  /** 返回行数。 */
  SentRows?: number;
  /** 执行线程ID。 */
  ThreadId?: number;
  /** 扫描行数。 */
  CheckRows?: number;
  /** cpu执行时间，微秒。 */
  CpuTime?: number;
  /** IO等待时间，微秒。 */
  IoWaitTime?: number;
  /** 锁等待时间，微秒。 */
  LockWaitTime?: number;
  /** 事务持续等待时间，微秒。 */
  TrxLivingTime?: number;
  /** 开始时间，与timestamp构成一个精确到纳秒的时间。 */
  NsTime?: number;
  /** 日志命中规则模板的基本信息 */
  TemplateInfo?: LogRuleTemplateInfo[];
  /** 事务ID */
  TrxId?: number;
}

/** 审计日志文件 */
declare interface AuditLogFile {
  /** 审计日志文件名称 */
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
  /** 日志下载进度。 */
  ProgressRate?: number;
}

/** 审计日志过滤条件。查询审计日志时，用户过滤返回的审计日志。 */
declare interface AuditLogFilter {
  /** 客户端地址。 */
  Host?: string[];
  /** 用户名。 */
  User?: string[];
  /** 数据库名称。 */
  DBName?: string[];
  /** 表名称。 */
  TableName?: string[];
  /** 审计策略名称。 */
  PolicyName?: string[];
  /** SQL 语句。支持模糊匹配。 */
  Sql?: string;
  /** SQL 类型。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。 */
  SqlType?: string;
  /** 执行时间。单位为：ms。表示筛选执行时间大于该值的审计日志。 */
  ExecTime?: number;
  /** 影响行数。表示筛选影响行数大于该值的审计日志。 */
  AffectRows?: number;
  /** SQL 类型。支持多个类型同时查询。目前支持："SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "DROP", "ALTER", "SET", "REPLACE", "EXECUTE"。 */
  SqlTypes?: string[];
  /** SQL 语句。支持传递多个sql语句。 */
  Sqls?: string[];
  /** 返回行数。 */
  SentRows?: number;
  /** 线程ID。 */
  ThreadId?: string[];
}

/** 规则审计的过滤条件 */
declare interface AuditRuleFilters {
  /** 单条审计规则。 */
  RuleFilters: RuleFilters[];
}

/** 审计规则模板的详情 */
declare interface AuditRuleTemplateInfo {
  /** 规则模板ID。 */
  RuleTemplateId?: string;
  /** 规则模板名称。 */
  RuleTemplateName?: string;
  /** 规则模板的过滤条件 */
  RuleFilters?: RuleFilters[];
  /** 规则模板描述。 */
  Description?: string;
  /** 规则模板创建时间。 */
  CreateAt?: string;
  /** 规则模板修改时间。 */
  UpdateAt?: string;
  /** 告警等级。1-低风险，2-中风险，3-高风险。 */
  AlarmLevel?: number;
  /** 告警策略。0-不告警，1-告警。 */
  AlarmPolicy?: number;
  /** 模板状态。0-无任务 ，1-修改中。 */
  Status?: number;
  /** 规则模板应用在哪些在实例。 */
  AffectedInstances?: string[];
}

/** 高级映射，自动映射规则 */
declare interface AutoMapRule {
  /** 源端实例Id */
  SrcInstanceId: string;
  /** 源端数据库正则 */
  SrcDatabaseRegex: string;
  /** 源端表正则 */
  SrcTableRegex: string;
  /** 目标端数据库正则 */
  DstDatabaseRegex: string;
  /** 目标端表正则 */
  DstTableRegex: string;
}

/** 备份设置 */
declare interface BackupConfigInfo {
  /** 系统自动时间 */
  BackupCustomAutoTime?: boolean;
  /** 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeBeg?: number;
  /** 表示全备结束时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeEnd?: number;
  /** 该参数目前不支持修改，无需填写。备份频率，长度为7的数组，分别对应周日到周六的备份方式，full-全量备份，increment-增量备份 */
  BackupWeekDays?: string[] | null;
  /** 间隔时间 */
  BackupIntervalTime?: number;
  /** 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600247=604800，最大为158112000 */
  ReserveDuration?: number;
  /** 跨地域备份开启yes-开启no-关闭 */
  CrossRegionsEnable?: string;
  /** 跨地域备份地域 */
  CrossRegions?: string[] | null;
  /** 动数据备份触发策略，periodically:自动周期备份,frequent:高频备份 */
  BackupTriggerStrategy?: string;
}

/** 备份文件信息 */
declare interface BackupFileInfo {
  /** 快照文件ID，已废弃，请使用BackupId */
  SnapshotId?: number;
  /** 备份文件名 */
  FileName?: string;
  /** 备份文件大小 */
  FileSize?: number;
  /** 备份开始时间 */
  StartTime?: string;
  /** 备份完成时间 */
  FinishTime?: string;
  /** 备份类型：snapshot，快照备份；logic，逻辑备份 */
  BackupType?: string;
  /** 备份方式：auto，自动备份；manual，手动备份 */
  BackupMethod?: string;
  /** 备份文件状态：success：备份成功；fail：备份失败；creating：备份文件创建中；deleting：备份文件删除中 */
  BackupStatus?: string;
  /** 备份文件时间 */
  SnapshotTime?: string;
  /** 备份ID */
  BackupId?: number;
  /** 快照类型，可选值：full，全量；increment，增量 */
  SnapShotType?: string;
  /** 备份文件备注 */
  BackupName?: string;
}

/** 备份下载集群限制参数 */
declare interface BackupLimitClusterRestriction {
  /** 集群id */
  ClusterId?: string;
  /** 下载限制配置 */
  BackupLimitRestriction?: BackupLimitRestriction;
}

/** 备份下载限制参数 */
declare interface BackupLimitRestriction {
  /** 限制类型 */
  LimitType?: string;
  /** 该参数仅支持 In， 表示 LimitVpc 指定的vpc可以下载。默认为In */
  VpcComparisonSymbol?: string;
  /** In: 指定的ip可以下载； NotIn: 指定的ip不可以下载 */
  IpComparisonSymbol?: string;
  /** 限制下载的vpc设置 */
  LimitVpcs?: BackupLimitVpcItem[] | null;
  /** 限制下载的ip设置 */
  LimitIps?: string[] | null;
}

/** 备份文件限制下载来源VPC设置项 */
declare interface BackupLimitVpcItem {
  /** 限制下载来源的地域。目前仅支持当前地域 */
  Region?: string;
  /** 限制下载的vpc列表 */
  VpcList?: string[];
}

/** 备份文件所在地域及ID */
declare interface BackupRegionAndIds {
  /** 备份地域 */
  BackupRegion?: string;
  /** 备份ID */
  BackupId?: number;
}

/** 计费资源信息 */
declare interface BillingResourceInfo {
  /** 集群ID */
  ClusterId?: string;
  /** 实例ID列表 */
  InstanceIds?: string[];
  /** 订单ID */
  DealName?: string;
}

/** 资源包绑定的实例信息 */
declare interface BindInstanceInfo {
  /** 绑定的集群ID */
  InstanceId?: string;
  /** 绑定的实例所在的地域 */
  InstanceRegion?: string;
  /** 绑定的实例类型 */
  InstanceType?: string;
  /** 绑定集群下的实例ID */
  ExtendIds?: string[];
}

/** binlog配置信息 */
declare interface BinlogConfigInfo {
  /** binlog保留时间 */
  BinlogSaveDays: number;
  /** binlog异地地域备份是否开启 */
  BinlogCrossRegionsEnable: string;
  /** binlog异地地域 */
  BinlogCrossRegions?: string[] | null;
}

/** Binlog描述 */
declare interface BinlogItem {
  /** Binlog文件名称 */
  FileName?: string;
  /** 文件大小，单位：字节 */
  FileSize?: number;
  /** 事务最早时间 */
  StartTime?: string;
  /** 事务最晚时间 */
  FinishTime?: string;
  /** Binlog文件ID */
  BinlogId?: number;
  /** binlog所跨地域 */
  CrossRegions?: string[];
}

/** 任务信息 */
declare interface BizTaskInfo {
  /** 任务id */
  ID?: number;
  /** 用户appid */
  AppId?: number;
  /** 集群id */
  ClusterId?: string;
  /** 地域 */
  Region?: string;
  /** 任务创建时间 */
  CreateTime?: string;
  /** 延迟执行时间 */
  DelayTime?: string;
  /** 任务失败信息 */
  ErrMsg?: string;
  /** 异步任务流id */
  FlowId?: number;
  /** 任务输入信息 */
  Input?: string;
  /** 实例组id */
  InstanceGrpId?: string;
  /** 实例组id */
  InstanceGroupId?: string;
  /** 实例id */
  InstanceId?: string;
  /** 任务操作对象id */
  ObjectId?: string;
  /** 任务操作对象类型 */
  ObjectType?: string;
  /** 操作者uin */
  Operator?: string;
  /** 任务输出信息 */
  Output?: string;
  /** 任务状态 */
  Status?: string;
  /** 任务类型 */
  TaskType?: string;
  /** 触发本任务的父任务ID */
  TriggerTaskId?: number;
  /** 更新时间 */
  UpdateTime?: string;
  /** 任务开始时间 */
  StartTime?: string;
  /** 任务结束时间 */
  EndTime?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 任务进度 */
  Process?: number;
  /** 修改参数任务信息 */
  ModifyParamsData?: ModifyParamsData[] | null;
  /** 创建集群任务信息 */
  CreateClustersData?: CreateClustersData;
  /** 集群回档任务信息 */
  RollbackData?: RollbackData;
  /** 实例变配任务信息 */
  ModifyInstanceData?: ModifyInstanceData;
  /** 手动备份任务信息 */
  ManualBackupData?: ManualBackupData | null;
  /** 修改内核版本任务信息 */
  ModifyDbVersionData?: ModifyDbVersionData;
  /** 集群可用区信息 */
  ClusterSlaveData?: ClusterSlaveData;
  /** 转换集群日志 */
  SwitchClusterLogBin?: SwitchClusterLogBin | null;
  /** 修改实例参数数据 */
  ModifyInstanceParamsData?: BizTaskModifyParamsData | null;
  /** 维护时间 */
  TaskMaintainInfo?: TaskMaintainInfo;
  /** 实例日志投递信息 */
  InstanceCLSDeliveryInfos?: InstanceCLSDeliveryInfo[];
  /** 任务进度信息 */
  TaskProgressInfo?: TaskProgressInfo;
  /** 全球数据库网络任务 */
  GdnTaskInfo?: GdnTaskInfo;
}

/** 实例参数修改任务详情 */
declare interface BizTaskModifyInstanceParam {
  /** 实例ID */
  InstanceId?: string;
  /** 实例参数修改任务详情 */
  ModifyInstanceParamList?: ModifyParamItem[];
}

/** 修改参数任务数据 */
declare interface BizTaskModifyParamsData {
  /** 集群ID */
  ClusterId?: string;
  /** 集群参数修改数据 */
  ClusterParamList?: ModifyParamItem[];
  /** 实例参数修改数据 */
  ModifyInstanceParams?: BizTaskModifyInstanceParam[];
}

/** CLS日志投递配置 */
declare interface CLSInfo {
  /** 日志主题操作：可选create,reuse。create:新增日志主题，使用TopicName创建日志主题。reuse:使用已有日志主题，使用TopicId指定日志主题。不允许使用已有日志主题且新建日志集的组合。 */
  TopicOperation: string;
  /** 日志集操作：可选create,reuse。create:新增日志集，使用GroupName创建日志集。reuse:使用已有日志集，使用GroupId指定日志集。不允许使用已有日志主题且新建日志集的组合。 */
  GroupOperation: string;
  /** 日志投递地域 */
  Region: string;
  /** 日志主题id */
  TopicId?: string;
  /** 日志主题name */
  TopicName?: string;
  /** 日志集id */
  GroupId?: string;
  /** 日志集name */
  GroupName?: string;
}

/** 校验项 */
declare interface CheckItem {
  /** 校验项名称 */
  Item?: string | null;
  /** 该项的校验结果 */
  Result?: string | null;
  /** 校验不通过的详细说明和修改建议 */
  CurrentValue?: string | null;
  /** 校验不通过的详细说明和修改建议 */
  ExpectedValue?: string | null;
}

/** 集群实例信息 */
declare interface ClusterInstanceDetail {
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 引擎类型 */
  InstanceType?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 实例状态描述 */
  InstanceStatusDesc?: string;
  /** cpu核数 */
  InstanceCpu?: number;
  /** 内存 */
  InstanceMemory?: number;
  /** 硬盘 */
  InstanceStorage?: number;
  /** 实例角色 */
  InstanceRole?: string;
  /** 执行开始时间(距离0点的秒数) */
  MaintainStartTime?: number;
  /** 持续的时间(单位：秒) */
  MaintainDuration?: number;
  /** 可以执行的时间，枚举值：["Mon","Tue","Wed","Thu","Fri", "Sat", "Sun"] */
  MaintainWeekDays?: string[];
  /** serverless实例子状态 */
  ServerlessStatus?: string;
  /** 实例任务信息 */
  InstanceTasks?: ObjectTask[];
  /** 实例机器类型1. common，通用型。2. exclusive，独享型。 */
  InstanceDeviceType?: string;
  /** 实例存储类型说明：仅当要查询的资源为 LibraDB 时，此参数才会返回值。 */
  InstanceStorageType?: string;
  /** 数据库类型 */
  DbMode?: string;
  /** 节点列表说明：仅当要查询的资源为 LibraDB 时，此参数才会返回值。 */
  NodeList?: string[];
}

/** 参数修改记录 */
declare interface ClusterParamModifyLog {
  /** 参数名称 */
  ParamName?: string;
  /** 当前值 */
  CurrentValue?: string;
  /** 修改后的值 */
  UpdateValue?: string;
  /** 修改状态 */
  Status?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 集群ID */
  ClusterId?: string;
  /** 实例ID */
  InstanceId?: string;
}

/** 集群只读开关列表 */
declare interface ClusterReadOnlyValue {
  /** 集群ID */
  ClusterId?: string;
  /** 只读开关值 */
  ReadOnlyValue?: string;
}

/** 集群从可用区信息 */
declare interface ClusterSlaveData {
  /** 旧主可用区 */
  OldMasterZone?: string;
  /** 旧从可用区 */
  OldSlaveZone?: string[] | null;
  /** 新主可用区 */
  NewMasterZone?: string;
  /** 新从可用区 */
  NewSlaveZone?: string[] | null;
  /** 新从可用区属性 */
  NewSlaveZoneAttr?: SlaveZoneAttrItem[];
  /** 旧可用区属性 */
  OldSlaveZoneAttr?: SlaveZoneAttrItem[];
}

/** 集群任务ID */
declare interface ClusterTaskId {
  /** 集群ID */
  ClusterId?: string;
  /** 任务ID */
  TaskId?: string;
}

/** 创建集群任务信息 */
declare interface CreateClustersData {
  /** 实例CPU */
  Cpu?: number;
  /** 实例内存 */
  Memory?: number;
  /** 集群存储上限 */
  StorageLimit?: number;
}

/** 跨地域备份各地域备份信息 */
declare interface CrossRegionBackupItem {
  /** 备份的目标地域 */
  CrossRegion?: string;
  /** 目标地域的备份任务ID */
  BackupId?: number;
  /** 目标地域的备份状态 */
  BackupStatus?: string;
}

/** 集群信息 */
declare interface CynosdbCluster {
  /** 集群状态， 可选值如下:creating: 创建中running:运行中isolating:隔离中isolated:已隔离activating:解隔离中offlining:下线中offlined:已下线deleting:删除中deleted:已删除 */
  Status: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 可用区 */
  Zone: string;
  /** 集群名称 */
  ClusterName: string;
  /** 地域 */
  Region: string;
  /** 数据库版本 */
  DbVersion: string;
  /** 集群ID */
  ClusterId: string;
  /** 实例数 */
  InstanceNum: number;
  /** 用户uin */
  Uin: string;
  /** 引擎类型 */
  DbType: string;
  /** 用户appid */
  AppId: number;
  /** 集群状态描述 */
  StatusDesc: string;
  /** 集群创建时间 */
  CreateTime: string;
  /** 付费模式。0-按量计费，1-包年包月 */
  PayMode: number;
  /** 截止时间 */
  PeriodEndTime: string;
  /** 集群读写vip */
  Vip: string;
  /** 集群读写vport */
  Vport: number;
  /** 项目id */
  ProjectID: number;
  /** 私有网络ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** cynos内核版本 */
  CynosVersion?: string;
  /** cynos版本标签 */
  CynosVersionTag?: string;
  /** 存储容量 */
  StorageLimit?: number;
  /** 续费标志 */
  RenewFlag?: number;
  /** 正在处理的任务 */
  ProcessingTask?: string;
  /** 集群的任务数组 */
  Tasks?: ObjectTask[];
  /** 集群绑定的tag数组 */
  ResourceTags?: Tag[];
  /** Db类型(NORMAL, SERVERLESS) */
  DbMode?: string;
  /** 当Db类型为SERVERLESS时，serverless集群状态，可选值:resumepause */
  ServerlessStatus?: string;
  /** 集群预付费存储值大小 */
  Storage?: number;
  /** 集群存储为预付费时的存储ID，用于预付费存储变配 */
  StorageId?: string;
  /** 集群存储付费模式。0-按量计费，1-包年包月 */
  StoragePayMode?: number;
  /** 集群计算规格对应的最小存储值 */
  MinStorageSize?: number;
  /** 集群计算规格对应的最大存储值 */
  MaxStorageSize?: number;
  /** 集群网络信息 */
  NetAddrs?: NetAddr[];
  /** 物理可用区 */
  PhysicalZone?: string;
  /** 主可用区 */
  MasterZone?: string;
  /** 是否有从可用区 */
  HasSlaveZone?: string;
  /** 从可用区 */
  SlaveZones?: string[];
  /** 商业类型 */
  BusinessType?: string;
  /** 是否冻结 */
  IsFreeze?: string;
  /** 订单来源 */
  OrderSource?: string;
  /** 能力 */
  Ability?: Ability;
  /** 实例绑定资源包信息（此处只返回存储资源包，即packageType=DISK） */
  ResourcePackages?: ResourcePackage[];
  /** 全球数据库唯一标识 */
  GdnId?: string;
  /** 集群角色。主集群- primary，从集群 - standby，如果 GdnId为空，该字段无效。 */
  GdnRole?: string;
}

/** 集群详情详细信息 */
declare interface CynosdbClusterDetail {
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 地域 */
  Region?: string;
  /** 可用区 */
  Zone?: string;
  /** 物理可用区 */
  PhysicalZone?: string;
  /** 状态，支持的值如下：- creating：创建中- running：运行中- isolating：隔离中- isolated：已隔离- activating：从回收站重新恢复- offlining：下线中- offlined：已下线- deleting：删除中- deleted：已删除 */
  Status?: string;
  /** 状态描述 */
  StatusDesc?: string;
  /** 当Db类型为SERVERLESS时，serverless集群状态，可选值:resumeresumingpausepausing */
  ServerlessStatus?: string;
  /** 存储Id */
  StorageId?: string;
  /** 存储大小，单位为G */
  Storage?: number;
  /** 最大存储规格，单位为G */
  MaxStorageSize?: number;
  /** 最小存储规格，单位为G */
  MinStorageSize?: number;
  /** 存储付费类型，1为包年包月，0为按量计费 */
  StoragePayMode?: number;
  /** VPC名称 */
  VpcName?: string;
  /** vpc唯一id */
  VpcId?: string;
  /** 子网名称 */
  SubnetName?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 字符集 */
  Charset?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 数据库类型 */
  DbType?: string;
  /** Db类型：NORMALSERVERLESS */
  DbMode?: string;
  /** 数据库版本 */
  DbVersion?: string;
  /** 存储空间上限 */
  StorageLimit?: number;
  /** 使用容量 */
  UsedStorage?: number;
  /** vip地址 */
  Vip?: string;
  /** vport端口 */
  Vport?: number;
  /** 集群只读实例的vip地址和vport端口 */
  RoAddr?: Addr[];
  /** 集群支持的功能 */
  Ability?: Ability;
  /** cynos版本 */
  CynosVersion?: string;
  /** 商业类型 */
  BusinessType?: string;
  /** 是否有从可用区 */
  HasSlaveZone?: string;
  /** 是否冻结 */
  IsFreeze?: string;
  /** 任务列表 */
  Tasks?: ObjectTask[];
  /** 主可用区 */
  MasterZone?: string;
  /** 从可用区列表 */
  SlaveZones?: string[];
  /** 实例信息 */
  InstanceSet?: ClusterInstanceDetail[];
  /** 付费模式 */
  PayMode?: number;
  /** 到期时间 */
  PeriodEndTime?: string;
  /** 项目id */
  ProjectID?: number;
  /** 实例绑定的tag数组信息 */
  ResourceTags?: Tag[];
  /** Proxy状态 */
  ProxyStatus?: string;
  /** binlog开关，可选值：ON, OFF */
  LogBin?: string;
  /** 是否跳过交易 */
  IsSkipTrade?: string;
  /** pitr类型，可选值：normal, redo_pitr */
  PitrType?: string;
  /** 是否打开密码复杂度 */
  IsOpenPasswordComplexity?: string;
  /** 网络类型 */
  NetworkStatus?: string;
  /** 集群绑定的资源包信息 */
  ResourcePackages?: ResourcePackage[];
  /** 自动续费标识，1为自动续费，0为到期不续 */
  RenewFlag?: number;
  /** 节点网络类型 */
  NetworkType?: string;
  /** 备可用区属性 */
  SlaveZoneAttr?: SlaveZoneAttrItem[];
  /** 版本标签 */
  CynosVersionTag?: string;
  /** 全球数据库网络唯一标识 */
  GdnId?: string;
  /** 集群在全球数据网络中的角色。主集群- primary从集群 - standby如为空，该字段无效 */
  GdnRole?: string;
  /** 二级存储使用量，单位：G */
  UsedArchiveStorage?: number;
  /** 归档状态，枚举值normal:正常archiving:归档中resuming:恢复中archived :已归档 */
  ArchiveStatus?: string;
  /** 归档进度，百分比。 */
  ArchiveProgress?: number;
  /** 是否开启透明加密 */
  IsOpenTDE?: boolean;
}

/** 实例错误日志返回类型 */
declare interface CynosdbErrorLogItem {
  /** 日志时间戳 */
  Timestamp?: number;
  /** 日志等级 */
  Level?: string;
  /** 日志内容 */
  Content?: string;
}

/** 实例信息 */
declare interface CynosdbInstance {
  /** 用户Uin */
  Uin?: string;
  /** 用户AppId */
  AppId?: number;
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 地域 */
  Region?: string;
  /** 可用区 */
  Zone?: string;
  /** 实例状态 */
  Status?: string;
  /** 实例状态中文描述 */
  StatusDesc?: string;
  /** 实例形态，是否为serverless实例 */
  DbMode?: string;
  /** 数据库类型 */
  DbType?: string;
  /** 数据库版本 */
  DbVersion?: string;
  /** Cpu，单位：核 */
  Cpu?: number;
  /** 内存，单位：GB */
  Memory?: number;
  /** 存储量，单位：GB */
  Storage?: number;
  /** 实例类型 */
  InstanceType?: string;
  /** 实例当前角色 */
  InstanceRole?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** VPC网络ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 实例内网IP */
  Vip?: string;
  /** 实例内网端口 */
  Vport?: number;
  /** 付费模式 */
  PayMode?: number;
  /** 实例过期时间 */
  PeriodEndTime?: string;
  /** 销毁期限 */
  DestroyDeadlineText?: string;
  /** 隔离时间 */
  IsolateTime?: string;
  /** 网络类型 */
  NetType?: number;
  /** 外网域名 */
  WanDomain?: string;
  /** 外网IP */
  WanIP?: string;
  /** 外网端口 */
  WanPort?: number;
  /** 外网状态 */
  WanStatus?: string;
  /** 实例销毁时间 */
  DestroyTime?: string;
  /** Cynos内核版本 */
  CynosVersion?: string;
  /** 正在处理的任务 */
  ProcessingTask?: string;
  /** 续费标志 */
  RenewFlag?: number;
  /** serverless实例cpu下限 */
  MinCpu?: number;
  /** serverless实例cpu上限 */
  MaxCpu?: number;
  /** serverless实例状态, 可选值：resumepause */
  ServerlessStatus?: string;
  /** 预付费存储Id */
  StorageId?: string;
  /** 存储付费类型 */
  StoragePayMode?: number;
  /** 物理区 */
  PhysicalZone?: string;
  /** 商业类型 */
  BusinessType?: string;
  /** 任务 */
  Tasks?: ObjectTask[];
  /** 是否冻结 */
  IsFreeze?: string;
  /** 资源标签 */
  ResourceTags?: Tag[] | null;
  /** 主可用区 */
  MasterZone?: string;
  /** 备可用区 */
  SlaveZones?: string[] | null;
  /** 实例网络信息 */
  InstanceNetInfo?: InstanceNetInfo[];
  /** 实例绑定资源包信息（此处只返回计算资源包，即packageType=CCU） */
  ResourcePackages?: ResourcePackage[] | null;
  /** 实例索引形态,可选值【mixedRowColumn（行列混存），onlyRowIndex（仅行存）】 */
  InstanceIndexMode?: string;
  /** 当前实例支持的能力 */
  InstanceAbility?: InstanceAbility;
  /** 实例机器类型1. common，通用型。2. exclusive，独享型。 */
  DeviceType?: string;
  /** 实例存储类型 */
  InstanceStorageType?: string;
  /** 未知字段 */
  CynosVersionTag?: string;
  /** libradb 节点信息 */
  NodeList?: string[];
  /** 全球数据库唯一标识 */
  GdnId?: string;
}

/** 实例详情 */
declare interface CynosdbInstanceDetail {
  /** 用户Uin */
  Uin?: string;
  /** 用户AppId */
  AppId?: number;
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 项目ID */
  ProjectId?: number;
  /** 地域 */
  Region?: string;
  /** 可用区 */
  Zone?: string;
  /** 实例状态creating：创建中running：运行中isolating：隔离中isolated：已隔离activating：恢复中offlining：下线中offlined：已下线 */
  Status?: string;
  /** 实例状态中文描述 */
  StatusDesc?: string;
  /** serverless实例状态, 可能值：resumepause */
  ServerlessStatus?: string;
  /** 数据库类型 */
  DbType?: string;
  /** 数据库版本 */
  DbVersion?: string;
  /** Cpu，单位：核 */
  Cpu?: number;
  /** 内存，单位：GB */
  Memory?: number;
  /** 存储量，单位：GB */
  Storage?: number;
  /** 实例类型 */
  InstanceType?: string;
  /** 实例当前角色 */
  InstanceRole?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 付费模式 */
  PayMode?: number;
  /** 实例过期时间 */
  PeriodEndTime?: string;
  /** 网络类型 */
  NetType?: number;
  /** VPC网络ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 实例内网IP */
  Vip?: string;
  /** 实例内网端口 */
  Vport?: number;
  /** 实例外网域名 */
  WanDomain?: string;
  /** 字符集 */
  Charset?: string;
  /** Cynos内核版本 */
  CynosVersion?: string;
  /** 续费标志 */
  RenewFlag?: number;
  /** serverless实例cpu下限 */
  MinCpu?: number;
  /** serverless实例cpu上限 */
  MaxCpu?: number;
  /** Db类型:NORMALSERVERLESS */
  DbMode?: string;
}

/** 实例组信息 */
declare interface CynosdbInstanceGroup {
  /** 用户appId */
  AppId?: number;
  /** 集群ID */
  ClusterId?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 删除时间 */
  DeletedTime?: string;
  /** 实例组ID */
  InstanceGroupId?: string;
  /** 状态 */
  Status?: string;
  /** 实例组（网络）类型。ha-ha组；ro-只读组；proxy-代理；singleRo-只读实例独占 */
  Type?: string;
  /** 更新时间 */
  UpdatedTime?: string;
  /** 内网IP */
  Vip?: string;
  /** 内网端口 */
  Vport?: number;
  /** 外网域名 */
  WanDomain?: string;
  /** 外网ip */
  WanIP?: string;
  /** 外网端口 */
  WanPort?: number;
  /** 外网状态 */
  WanStatus?: string;
  /** 实例组包含实例信息 */
  InstanceSet?: CynosdbInstance[];
  /** VPC的ID */
  UniqVpcId?: string;
  /** 子网ID */
  UniqSubnetId?: string;
  /** 正在回收IP信息 */
  OldAddrInfo?: OldAddrInfo;
  /** 正在进行的任务 */
  ProcessingTasks?: string[];
  /** 任务列表 */
  Tasks?: ObjectTask[];
  /** biz_net_service表id */
  NetServiceId?: number;
}

/** 实例组信息 */
declare interface CynosdbInstanceGrp {
  /** 用户appId */
  AppId?: number;
  /** 集群ID */
  ClusterId?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 删除时间 */
  DeletedTime?: string;
  /** 实例组ID */
  InstanceGrpId?: string;
  /** 状态 */
  Status?: string;
  /** 实例组类型。ha-ha组；ro-只读组 */
  Type?: string;
  /** 更新时间 */
  UpdatedTime?: string;
  /** 内网IP */
  Vip?: string;
  /** 内网端口 */
  Vport?: number;
  /** 外网域名 */
  WanDomain?: string;
  /** 外网ip */
  WanIP?: string;
  /** 外网端口 */
  WanPort?: number;
  /** 外网状态 */
  WanStatus?: string;
  /** 实例组包含实例信息 */
  InstanceSet?: CynosdbInstance[];
  /** VPC的ID */
  UniqVpcId?: string | null;
  /** 子网ID */
  UniqSubnetId?: string | null;
  /** 正在回收IP信息 */
  OldAddrInfo?: OldAddrInfo | null;
  /** 正在进行的任务 */
  ProcessingTasks?: string[];
  /** 任务列表 */
  Tasks?: ObjectTask[];
  /** biz_net_service表id */
  NetServiceId?: number;
}

/** 数据源项 */
declare interface DataSourceItem {
  /** 源端实例ID */
  InstanceId?: string;
  /** 源端集群ID */
  ClusterId?: string;
  /** 源端数据库类型 */
  DBType?: string;
  /** 源端数据库IP */
  IP?: string;
  /** 源端数据库端口 */
  Port?: number;
  /** 源实例地域 */
  Region?: string;
  /** 源端实例可用区 */
  Zone?: string;
  /** 源端主账号uin */
  SrcUin?: string;
  /** 账号类型 */
  AccountMode?: string;
  /** 同步任务状态 */
  ReplicationJobStatus?: string;
}

/** 数据库权限列表 */
declare interface DatabasePrivileges {
  /** 数据库 */
  Db: string;
  /** 权限列表 */
  Privileges: string[];
}

/** 数据库表信息 */
declare interface DatabaseTables {
  /** 数据库名 */
  Database?: string;
  /** 表名称列表 */
  Tables?: string[];
}

/** 数据库详细信息 */
declare interface DbInfo {
  /** 数据库名称 */
  DbName?: string;
  /** 字符集类型 */
  CharacterSet?: string;
  /** 数据库状态 */
  Status?: string;
  /** 排序规则 */
  CollateRule?: string;
  /** 数据库备注 */
  Description?: string;
  /** 用户权限 */
  UserHostPrivileges?: UserHostPrivilege[];
  /** 数据库ID */
  DbId?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 用户appid */
  AppId?: number;
  /** 用户Uin */
  Uin?: string;
  /** 集群Id */
  ClusterId?: string;
}

/** 数据库表 */
declare interface DbTable {
  /** 数据库名称 */
  Db: string;
  /** 数据库表名称 */
  TableName?: string;
}

/** 日志投递信息 */
declare interface DeliverSummary {
  /** 投递类型，store（存储类），mq（消息通道） */
  DeliverType?: string;
  /** 投递子类型：cls，ckafka。 */
  DeliverSubType?: string;
  /** 投递者 */
  DeliverConsumer?: string;
  /** 投递者名称 */
  DeliverConsumerName?: string;
}

/** 错误日志导出格式 */
declare interface ErrorLogItemExport {
  /** 时间 */
  Timestamp?: string;
  /** 日志等级，可选值note, warning，error */
  Level?: string;
  /** 日志内容 */
  Content?: string;
}

/** 交换实例信息 */
declare interface ExchangeInstanceInfo {
  /** 源实例信息 */
  SrcInstanceInfo?: RollbackInstanceInfo;
  /** 目标实例信息 */
  DstInstanceInfo?: RollbackInstanceInfo;
}

/** 交换RO组信息 */
declare interface ExchangeRoGroupInfo {
  /** 源RO组信息 */
  SrcRoGroupInfo?: RollbackRoGroupInfo;
  /** 目标RO组信息 */
  DstRoGroupInfo?: RollbackRoGroupInfo;
}

/** 转发实例信息 */
declare interface ForwardInstanceInfo {
  /** 转发实例id */
  InstanceId?: string | null;
  /** 转发实例地域 */
  Region?: string | null;
}

/** 全球数据库任务信息 */
declare interface GdnTaskInfo {
  /** 全球数据库唯一标识 */
  GdnId?: string;
  /** 全球数据库唯一别名 */
  GdnName?: string;
  /** 主集群ID */
  PrimaryClusterId?: string;
  /** 主集群所在地域 */
  PrimaryClusterRegion?: string;
  /** 从集群所在地域 */
  StandbyClusterRegion?: string;
  /** 从集群ID */
  StandbyClusterId?: string;
  /** 从集群名称 */
  StandbyClusterName?: string;
  /** 是否已强切 */
  ForceSwitchGdn?: string;
  /** 返回码 */
  Code?: number;
  /** 提示信息 */
  Message?: string;
  /** 是否支持强切 */
  IsSupportForce?: string;
}

/** 商品价格 */
declare interface GoodsPrice {
  /** 实例价格 */
  InstancePrice: TradePrice | null;
  /** 存储价格 */
  StoragePrice: TradePrice | null;
  /** 商品规格 */
  GoodsSpec: GoodsSpec | null;
}

/** 商品规格 */
declare interface GoodsSpec {
  /** 商品数量 */
  GoodsNum?: number | null;
  /** CPU核数，PREPAID与POSTPAID实例类型必传 */
  Cpu?: number | null;
  /** 内存大小，单位G，PREPAID与POSTPAID实例类型必传 */
  Memory?: number | null;
  /** Ccu大小，serverless类型必传 */
  Ccu?: number | null;
  /** 存储大小，PREPAID存储类型必传 */
  StorageLimit?: number | null;
  /** 购买时长 */
  TimeSpan?: number | null;
  /** 时长单位 */
  TimeUnit?: string | null;
  /** 实例机器类型1. common，通用型。2. exclusive，独享型。 */
  DeviceType?: string;
}

/** 账号，包含accountName和host */
declare interface InputAccount {
  /** 账号 */
  AccountName: string;
  /** 主机，默认‘%’ */
  Host?: string;
}

/** 实例允许的操作列表 */
declare interface InstanceAbility {
  /** 实例是否支持强制重启，可选值：yes：支持，no：不支持 */
  IsSupportForceRestart?: string;
  /** 不支持强制重启的原因 */
  NonsupportForceRestartReason?: string;
}

/** 审计日志搜索条件 */
declare interface InstanceAuditLogFilter {
  /** 过滤项。目前支持以下搜索条件：包含、不包含、包含（分词维度）、不包含（分词维度）: sql - SQL详情；alarmLevel - 告警等级；ruleTemplateId - 规则模板Id等于、不等于、包含、不包含： host - 客户端地址； user - 用户名； dbName - 数据库名称；等于、不等于： sqlType - SQL类型； errCode - 错误码； threadId - 线程ID；范围搜索（时间类型统一为微秒）： execTime - 执行时间； lockWaitTime - 执行时间； ioWaitTime - IO等待时间； trxLivingTime - 事务持续时间； cpuTime - cpu时间； checkRows - 扫描行数； affectRows - 影响行数； sentRows - 返回行数。 */
  Type: string;
  /** 过滤条件。支持以下条件：WINC-包含（分词维度），WEXC-不包含（分词维度）,INC - 包含,EXC - 不包含,EQS - 等于,NEQ - 不等于,RA - 范围。 */
  Compare: string;
  /** 过滤的值。反向查询时，多个值之前是且的关系，正向查询多个值是或的关系。 */
  Value: string[];
}

/** 实例的审计规则详情。 */
declare interface InstanceAuditRule {
  /** 实例ID。 */
  InstanceId?: string;
  /** 是否是规则审计。true-规则审计，false-全审计。 */
  AuditRule?: boolean;
  /** 审计规则详情。仅当AuditRule=true时有效。 */
  AuditRuleFilters?: AuditRuleFilters[];
  /** 是否是审计策略 */
  OldRule?: boolean;
  /** 实例应用的规则模板详情 */
  RuleTemplates?: RuleTemplateInfo[];
}

/** 实例审计详情信息 */
declare interface InstanceAuditStatus {
  /** 实例ID。 */
  InstanceId?: string;
  /** 审计状态。ON-表示审计已开启，OFF-表示审计关闭。 */
  AuditStatus?: string;
  /** 日志保留时长。 */
  LogExpireDay?: number;
  /** 高频存储时长。 */
  HighLogExpireDay?: number;
  /** 低频存储时长。 */
  LowLogExpireDay?: number;
  /** 日志存储量。 */
  BillingAmount?: number;
  /** 高频存储量。 */
  HighRealStorage?: number;
  /** 低频存储量。 */
  LowRealStorage?: number;
  /** 是否为全审计。true-表示全审计。 */
  AuditAll?: boolean;
  /** 审计开通时间。 */
  CreateAt?: string;
  /** 实例相关信息。 */
  InstanceInfo?: AuditInstanceInfo;
  /** 总存储量。 */
  RealStorage?: number;
  /** 实例所应用的规则模板。 */
  RuleTemplateIds?: string[];
  /** 是否开启日志投递：ON，OFF */
  Deliver?: string;
  /** 日志投递类型 */
  DeliverSummary?: DeliverSummary[];
}

/** 实例日志投递信息 */
declare interface InstanceCLSDeliveryInfo {
  /** 实例id */
  InstanceId?: string;
  /** 实例name */
  InstanceName?: string;
  /** 日志主题id */
  TopicId?: string;
  /** 日志主题name */
  TopicName?: string;
  /** 日志集id */
  GroupId?: string;
  /** 日志集name */
  GroupName?: string;
  /** 日志投递地域 */
  Region?: string;
  /** 投递状态creating,running,offlining,offlined */
  Status?: string;
  /** 日志类型 */
  LogType?: string;
}

/** 实例初始化配置信息 */
declare interface InstanceInitInfo {
  /** 实例cpu */
  Cpu: number;
  /** 实例内存 */
  Memory: number;
  /** 实例类型 rw/ro */
  InstanceType: string;
  /** 实例个数,范围[1,15] */
  InstanceCount: number;
  /** Serverless实例个数最小值，范围[1,15] */
  MinRoCount?: number;
  /** Serverless实例个数最大值，范围[1,15] */
  MaxRoCount?: number;
  /** Serverless实例最小规格 */
  MinRoCpu?: number;
  /** Serverless实例最大规格 */
  MaxRoCpu?: number;
  /** 实例机器类型1. common，通用型。2. exclusive，独享型。 */
  DeviceType?: string;
}

/** 实例权重 */
declare interface InstanceNameWeight {
  /** 实例名称，创建集群中InstanceInitInfo.InstanceName所指定名称 */
  InstanceName?: string;
  /** 权重 */
  Weight?: number;
}

/** 实例网络信息 */
declare interface InstanceNetInfo {
  /** 网络类型 */
  InstanceGroupType?: string;
  /** 实例组ID */
  InstanceGroupId?: string;
  /** 私有网络ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 网络类型, 0-基础网络, 1-vpc网络, 2-黑石网络 */
  NetType?: number;
  /** 私有网络IP */
  Vip?: string;
  /** 私有网络端口 */
  Vport?: number;
  /** 外网域名 */
  WanDomain?: string;
  /** 外网IP */
  WanIP?: string;
  /** 外网端口 */
  WanPort?: number;
  /** 外网开启状态 */
  WanStatus?: string;
}

/** 实例参数信息 */
declare interface InstanceParamItem {
  /** 实例ID */
  InstanceId?: string;
  /** 实例参数列表 */
  ParamsItems?: ParamItemDetail[];
}

/** 实例信息 */
declare interface InstanceSet {
  /** 数据库模式 */
  DbMode?: string;
  /** cpu核数 */
  InstanceCpu?: number;
  /** 实例类型 */
  InstanceDeviceType?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 内存 */
  InstanceMemory?: number;
  /** 实例名称 */
  InstanceName?: string;
  /** 实例角色 */
  InstanceRole?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 状态描述 */
  InstanceStatusDesc?: string;
  /** 硬盘 */
  InstanceStorage?: number;
  /** 硬盘类型 */
  InstanceStorageType?: string;
  /** 引擎类型 */
  InstanceType?: string;
  /** 持续的时间 */
  MaintainDuration?: number;
  /** 执行开始时间(距离0点的秒数) */
  MaintainStartTime?: number;
  /** 可以执行的时间，枚举值：["Mon","Tue","Wed","Thu","Fri", "Sat", "Sun"] */
  MaintainWeekDays?: string[];
  /** 节点列表 */
  NodeList?: string[];
  /** 实例任务 */
  InstanceTasks?: ObjectTask[];
}

/** 实例可售卖规格详细信息，创建实例时Cpu/Memory确定实例规格，存储可选大小为[MinStorageSize,MaxStorageSize] */
declare interface InstanceSpec {
  /** 实例CPU，单位：核 */
  Cpu?: number;
  /** 实例内存，单位：GB */
  Memory?: number;
  /** 实例最大可用存储，单位：GB */
  MaxStorageSize?: number;
  /** 实例最小可用存储，单位：GB */
  MinStorageSize?: number;
  /** 是否有库存 */
  HasStock?: boolean;
  /** 机器类型 */
  MachineType?: string;
  /** 最大IOPS */
  MaxIops?: number;
  /** 最大IO带宽 */
  MaxIoBandWidth?: number;
  /** 地域库存信息 */
  ZoneStockInfos?: ZoneStockInfo[];
  /** 库存数量 */
  StockCount?: number;
  /** 最大cpu */
  MaxCpu?: number;
  /** 最小cpu */
  MinCpu?: number;
}

/** 集成集群配置 */
declare interface IntegrateCreateClusterConfig {
  /** binlog保留天数[7,1830] */
  BinlogSaveDays?: number;
  /** 备份保留天数[7,1830] */
  BackupSaveDays?: number;
  /** 半同步超时时间[1000,4294967295] */
  SemiSyncTimeout?: number;
  /** proxy连接地址配置信息 */
  ProxyEndPointConfigs?: ProxyEndPointConfigInfo[];
}

/** 实例初始化配置信息 */
declare interface IntegrateInstanceInfo {
  /** 实例cpu */
  Cpu: number;
  /** 实例内存 */
  Memory: number;
  /** 实例类型 rw/ro */
  InstanceType: string;
  /** 实例个数,范围[1,15] */
  InstanceCount: number;
  /** 实例机器类型 common-公通用型,exclusive-独享型 */
  DeviceType?: string;
}

/** libra集群信息 */
declare interface LibraClusterSet {
  /** 用户id */
  AppId?: number;
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 数据库版本 */
  DbVersion?: string;
  /** 实例信息 */
  InstanceSet?: LibraInstanceSet[];
  /** 付费模式 */
  PayMode?: number;
  /** 到期时间 */
  PeriodEndTime?: string;
  /** 项目id */
  ProjectID?: number;
  /** 地域 */
  Region?: string;
  /** 自动续费标识，1为自动续费，0为到期不续 */
  RenewFlag?: number;
  /** 状态 */
  Status?: string;
  /** 状态描述 */
  StatusDesc?: string;
  /** 存储大小 */
  Storage?: number;
  /** 使用容量 */
  UsedStorage?: number;
  /** vip地址 */
  Vip?: string;
  /** vport端口 */
  Vport?: number;
}

/** libra集群详情 */
declare interface LibraDBClusterDetail {
  /** 集群id */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 地域 */
  Region?: string;
  /** 状态 */
  Status?: string;
  /** 状态描述 */
  StatusDesc?: string;
  /** 存储大小 */
  Storage?: number;
  /** VPC名称 */
  VpcName?: string;
  /** vpc唯一id */
  VpcId?: string;
  /** 子网名称 */
  SubnetName?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 数据库版本 */
  DbVersion?: string;
  /** 使用容量 */
  UsedStorage?: number;
  /** vip地址 */
  Vip?: string;
  /** vport端口 */
  Vport?: number;
  /** 集群只读实例的vip地址和vport端口 */
  RoAddr?: RoAddr[];
  /** cynos版本 */
  CynosVersion?: string;
  /** 是否冻结 */
  IsFreeze?: string;
  /** 任务列表 */
  Tasks?: ObjectTask[];
  /** 主可用区 */
  MasterZone?: string;
  /** 实例集合 */
  InstanceSet?: InstanceSet[];
  /** 付费模式 */
  PayMode?: number;
  /** 到期时间 */
  PeriodEndTime?: string;
  /** 项目id */
  ProjectID?: number;
  /** 自动续费标识 */
  RenewFlag?: number;
  /** 版本标签 */
  CynosVersionTag?: string;
  /** 不支持添加ro yes-不支持添加ro， no/null/"" 支持添加ro */
  NoSupportAddRo?: string;
  /** 可用区 */
  Zone?: string;
  /** 物理可用区 */
  PhysicalZone?: string;
}

/** 集群列表信息 */
declare interface LibraDBClusterSet {
  /** 用户id */
  AppId?: number;
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** cynos版本 */
  CynosVersion?: string;
  /** 版本标签 */
  CynosVersionTag?: string;
  /** 数据库版本 */
  DbVersion?: string;
  /** 实例数量 */
  InstanceNum?: number;
  /** 是否冻结 */
  IsFreeze?: string;
  /** 网络地址 */
  NetAddrs?: NetAddr[];
  /** 付费模式 */
  PayMode?: number;
  /** 到期时间 */
  PeriodEndTime?: string;
  /** 项目id */
  ProjectID?: number;
  /** 地域 */
  Region?: string;
  /** 自动续费标识，1为自动续费，0为到期不续 */
  RenewFlag?: number;
  /** 状态 */
  Status?: string;
  /** 状态描述 */
  StatusDesc?: string;
  /** 存储大小，单位为G */
  Storage?: number;
  /** 子网ID */
  SubnetId?: string;
  /** 任务列表 */
  Tasks?: ObjectTask[];
  /** 账户id */
  Uin?: string;
  /** vip地址 */
  Vip?: string;
  /** vpc唯一id */
  VpcId?: string;
  /** vport端口 */
  Vport?: number;
  /** 更新时间 */
  UpdateTime?: string;
  /** 主可用区 */
  MasterZone?: string;
  /** 物理可用区 */
  PhysicalZone?: string;
  /** 可用区 */
  Zone?: string;
}

/** libra分析集群源数据库信息 */
declare interface LibraDBClusterSrcInfo {
  /** 源端类型 */
  SrcInstanceType: string;
  /** 网络类型 */
  AccessType?: string;
  /** 源端实例ID */
  SrcInstanceId?: string;
  /** 源端集群ID */
  SrcClusterId?: string;
  /** 地址 */
  IP?: string;
  /** 端口 */
  Port?: string;
  /** 用户名 */
  User?: string;
  /** 密码 */
  Password?: string;
  /** 源端sql_mode */
  SqlMode?: string;
  /** 源端应用id */
  SrcAppId?: number;
  /** 源端账号 */
  SrcUin?: string;
  /** 源端子账号 */
  SrcSubAccountUin?: string;
  /** 账号 */
  AccountMode?: string;
  /** 源端实例地域 */
  Region?: string;
  /** 对源端实例的操作 */
  Operation?: string;
}

/** libra实例初始化信息 */
declare interface LibraDBInstanceInitInfo {
  /** cpu */
  Cpu?: number;
  /** 内存 */
  Memory?: number;
  /** 硬盘 */
  StorageSize?: number;
  /** 存储类型 */
  StorageType?: string;
  /** 实例类型 */
  InstanceType?: string;
  /** 实例版本 */
  LibraDBVersion?: string;
  /** 实例数量 */
  InstanceCount?: number;
  /** vpc id */
  VpcId?: string;
  /** subnet id */
  SubnetId?: string;
  /** 端口 */
  Port?: number;
  /** 购买实例副本数 */
  ReplicasNum?: number;
}

/** LibraDB 节点信息 */
declare interface LibraDBNodeInfo {
  /** LibraDB节点ID */
  NodeId?: string;
  /** 节点状态 */
  Status?: string;
  /** 数据同步中 */
  DataStatus?: string;
  /** CPU核数 */
  Cpu?: number;
  /** 内存大小，单位 G */
  Memory?: number;
  /** 磁盘大小，单位G */
  Storage?: number;
  /** 错误信息 */
  Message?: string;
}

/** LibraDB 版本信息 */
declare interface LibraDBVersion {
  /** 版本号 */
  Version?: string;
  /** 版本tag */
  Tag?: string;
  /** 是否可以使用该版本 */
  HasPermission?: boolean;
}

/** libra实例信息 */
declare interface LibraInstanceSet {
  /** 数据库模式 */
  DbMode?: string;
  /** cpu核数 */
  InstanceCpu?: number;
  /** 实例类型 */
  InstanceDeviceType?: string;
  /** 组id */
  InstanceGroupId?: string;
  /** 实例id */
  InstanceId?: string;
  /** 内存 */
  InstanceMemory?: number;
  /** 实例名称 */
  InstanceName?: string;
  /** 付费模式 */
  InstancePayMode?: number;
  /** 付费结束时间 */
  InstancePeriodEndTime?: string;
  /** 实例角色 */
  InstanceRole?: string;
  /** 实例状态 */
  InstanceStatus?: string;
  /** 实例状态描述 */
  InstanceStatusDesc?: string;
  /** 网络类型 */
  NetType?: string;
  /** 子网id */
  UniqSubnetId?: string;
  /** vpcid */
  UniqVpcId?: string;
  /** 虚拟ip */
  Vip?: string;
  /** 虚拟端口 */
  Vport?: number;
  /** 外网区域 */
  WanDomain?: string;
  /** 外网ip */
  WanIP?: string;
  /** 外网port */
  WanPort?: number;
  /** 外网状态 */
  WanStatus?: string;
  /** 硬盘 */
  InstanceStorage?: number;
  /** 硬盘类型 */
  InstanceStorageType?: string;
}

/** 日志过滤条件 */
declare interface LogFilter {
  /** 过滤项。 */
  Type?: string;
  /** 过滤条件。支持以下条件： WINC-包含（分词维度）， WEXC-不包含（分词维度）, INC - 包含, EXC - 不包含, EQS - 等于, NEQ - 不等于, RA - 范围。 */
  Compare?: string;
  /** 过滤的值。反向查询时，多个值之前是且的关系，正向查询多个值是或的关系 */
  Value?: string[];
}

/** 审计日志命中规则模板的基本信息 */
declare interface LogRuleTemplateInfo {
  /** 模板ID */
  RuleTemplateId?: string;
  /** 规则模板名 */
  RuleTemplateName?: string;
  /** 告警等级。1-低风险，2-中风险，3-高风险。 */
  AlarmLevel?: string;
  /** 规则模板变更状态：0-未变更；1-已变更；2-已删除 */
  RuleTemplateStatus?: number;
}

/** 逻辑备份配置信息 */
declare interface LogicBackupConfigInfo {
  /** 是否开启自动逻辑备份 */
  LogicBackupEnable?: string;
  /** 自动逻辑备份开始时间 */
  LogicBackupTimeBeg?: number;
  /** 自动逻辑备份结束时间 */
  LogicBackupTimeEnd?: number;
  /** 自动逻辑备份保留时间单位：秒 */
  LogicReserveDuration?: number;
  /** 是否开启跨地域逻辑备份可选值：ON/OFF */
  LogicCrossRegionsEnable?: string;
  /** 逻辑备份所跨地域 */
  LogicCrossRegions?: string[] | null;
}

/** 手动备份任务信息 */
declare interface ManualBackupData {
  /** 备份类型。snapshot-快照备份 */
  BackupType?: string;
  /** 备份方式。auto-自动备份，manual-手动 */
  BackupMethod?: string;
  /** 备份时间 */
  SnapshotTime?: string;
  /** 跨地域备份项详细信息 */
  CrossRegionBackupInfos?: CrossRegionBackupItem[] | null;
}

/** 同步库表对象 */
declare interface MigrateDBItem {
  /** 数据库名称 */
  DbName?: string | null;
  /** 数据表迁移模式 */
  MigrateTableMode?: string | null;
  /** 数据表信息 */
  Tables?: MigrateTableItem[] | null;
}

/** 同步数据对象 */
declare interface MigrateObject {
  /** 数据库迁移模式 */
  MigrateDBMode?: string | null;
  /** 数据库信息 */
  Databases?: MigrateDBItem[] | null;
}

/** 同步对象详情 */
declare interface MigrateOpt {
  /** 包含数据库表信息 */
  DatabaseTables?: MigrateObject;
}

/** 同步数据表名称 */
declare interface MigrateTableItem {
  /** 数据表名称 */
  TableName?: string | null;
}

/** 参数是否可修改的详细信息 */
declare interface ModifiableInfo {
  /** 参数是否可被修改, 1:可以 0:不可以 */
  IsModifiable?: number;
}

/** 修改数据库内核版本任务信息 */
declare interface ModifyDbVersionData {
  /** 修改前版本 */
  OldVersion?: string;
  /** 修改后版本 */
  NewVersion?: string;
  /** 升级方式 */
  UpgradeType?: string;
}

/** 实例变配任务信息 */
declare interface ModifyInstanceData {
  /** 变配后CPU */
  Cpu?: number;
  /** 变配后内存 */
  Memory?: number;
  /** 变配后存储上限 */
  StorageLimit?: number;
  /** 变配前CPU */
  OldCpu?: number;
  /** 变配前内存 */
  OldMemory?: number;
  /** 变配前存储上限 */
  OldStorageLimit?: number;
  /** 变配前实例机器类型1. common，通用型。2. exclusive，独享型。 */
  OldDeviceType?: string;
  /** 变配后实例机器类型1. common，通用型。2. exclusive，独享型。 */
  DeviceType?: string;
  /** 升级方式。升级完成后切换或维护时间内切换 */
  UpgradeType?: string;
  /** libra节点数量 */
  LibraNodeCount?: number;
  /** 原libra节点数量 */
  OldLibraNodeCount?: number;
}

/** 修改的实例参数信息 */
declare interface ModifyParamItem {
  /** 参数名 */
  ParamName: string;
  /** 参数当前值 */
  CurrentValue: string;
  /** 参数旧值（只在出参时有用） */
  OldValue?: string;
  /** libra组件类型 */
  Component?: string;
}

/** 修改参数信息 */
declare interface ModifyParamsData {
  /** 参数名 */
  Name?: string;
  /** 修改前参数值 */
  OldValue?: string;
  /** 修改后参数值 */
  CurValue?: string;
}

/** 系统支持的模块 */
declare interface Module {
  /** 是否支持，可选值:yes,no */
  IsDisable: string;
  /** 模块名 */
  ModuleName: string;
}

/** 网络信息 */
declare interface NetAddr {
  /** 内网ip */
  Vip?: string;
  /** 内网端口号 */
  Vport?: number;
  /** 外网域名 */
  WanDomain?: string;
  /** 外网端口号 */
  WanPort?: number;
  /** 网络类型（ro-只读,rw/ha-读写） */
  NetType?: string;
  /** 子网ID */
  UniqSubnetId?: string;
  /** 私有网络ID */
  UniqVpcId?: string;
  /** 描述信息 */
  Description?: string;
  /** 外网IP */
  WanIP?: string;
  /** 外网状态 */
  WanStatus?: string;
  /** 实例组ID */
  InstanceGroupId?: string;
}

/** x08新创建的账号 */
declare interface NewAccount {
  /** 账户名，包含字母数字_,以字母开头，字母或数字结尾，长度1-30 */
  AccountName: string;
  /** 密码，密码长度范围为8到64个字符 */
  AccountPassword: string;
  /** 主机(%或ipv4地址) */
  Host: string;
  /** 描述 */
  Description?: string;
  /** 用户最大连接数，不能大于10240 */
  MaxUserConnections?: number;
}

/** 任务信息 */
declare interface ObjectTask {
  /** 任务自增ID */
  TaskId?: number;
  /** 任务类型 */
  TaskType?: string;
  /** 任务状态 */
  TaskStatus?: string;
  /** 任务ID（集群ID|实例组ID|实例ID） */
  ObjectId?: string;
  /** 任务类型 */
  ObjectType?: string;
}

/** 数据库地址 */
declare interface OldAddrInfo {
  /** IP */
  Vip?: string;
  /** 端口 */
  Vport?: number;
  /** 期望执行回收时间 */
  ReturnTime?: string;
}

/** 资源包 */
declare interface Package {
  /** AppID */
  AppId?: number;
  /** 资源包唯一ID */
  PackageId?: string;
  /** 资源包名称 */
  PackageName?: string;
  /** 资源包类型CCU-计算资源包，DISK-存储资源包 */
  PackageType?: string;
  /** 资源包使用地域china-中国内地通用，overseas-港澳台及海外通用 */
  PackageRegion?: string;
  /** 资源包状态creating-创建中；using-使用中；expired-已过期；normal_finish-使用完；apply_refund-申请退费中；refund-已退费。 */
  Status?: string;
  /** 资源包总量 */
  PackageTotalSpec?: number;
  /** 资源包已使用量 */
  PackageUsedSpec?: number;
  /** 是否还有库存余量 */
  HasQuota?: boolean;
  /** 绑定实例信息 */
  BindInstanceInfos?: BindInstanceInfo[];
  /** 生效时间：2022-07-01 00:00:00 */
  StartTime?: string;
  /** 失效时间：2022-08-01 00:00:00 */
  ExpireTime?: string;
  /** 资源包历史绑定（已解绑）实例信息 */
  HistoryBindResourceInfos?: BindInstanceInfo[];
}

/** 资源包明细说明 */
declare interface PackageDetail {
  /** AppId账户ID */
  AppId?: number;
  /** 资源包唯一ID */
  PackageId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 成功抵扣容量 */
  SuccessDeductSpec?: number;
  /** 截止当前，资源包已使用的容量 */
  PackageTotalUsedSpec?: number;
  /** 抵扣开始时间 */
  StartTime?: string;
  /** 抵扣结束时间 */
  EndTime?: string;
  /** 扩展信息 */
  ExtendInfo?: string;
}

/** 资源包抵扣优先级 */
declare interface PackagePriority {
  /** 需要自定义抵扣优先级的资源包 */
  PackageId?: string;
  /** 自定义的抵扣优先级 */
  DeductionPriority?: number;
}

/** 实例参数详细描述 */
declare interface ParamDetail {
  /** 参数名称 */
  ParamName?: string;
  /** 参数类型：integer，enum，float，string，func */
  ParamType?: string;
  /** true-支持"func"，false-不支持公式 */
  SupportFunc?: boolean;
  /** 默认值 */
  Default?: string;
  /** 参数描述 */
  Description?: string;
  /** 参数当前值 */
  CurrentValue?: string;
  /** 修改参数后，是否需要重启数据库以使参数生效。0-不需要重启，1-需要重启。 */
  NeedReboot?: number;
  /** 参数容许的最大值 */
  Max?: string;
  /** 参数容许的最小值 */
  Min?: string;
  /** 参数的可选枚举值。如果为非枚举值，则为空 */
  EnumValue?: string[];
  /** 1：全局参数，0：非全局参数 */
  IsGlobal?: number;
  /** 匹配类型，multiVal */
  MatchType?: string;
  /** 匹配目标值，当multiVal时，各个key用，分割 */
  MatchValue?: string;
  /** true-为公式，false-非公式 */
  IsFunc?: boolean;
  /** 参数设置为公式时，Func返回设置的公式内容 */
  Func?: string;
  /** 参数是否可修改 */
  ModifiableInfo?: ModifiableInfo;
  /** 支持公式的参数的默认公式样式 */
  FuncPattern?: string;
}

/** 参数信息 */
declare interface ParamInfo {
  /** 当前值 */
  CurrentValue?: string;
  /** 默认值 */
  Default?: string;
  /** 参数为enum/string/bool时，可选值列表 */
  EnumValue?: string[];
  /** 参数类型为float/integer时的最大值 */
  Max?: string;
  /** 参数类型为float/integer时的最小值 */
  Min?: string;
  /** 参数名称 */
  ParamName?: string;
  /** 是否需要重启生效 */
  NeedReboot?: number;
  /** 参数类型：integer/float/string/enum/bool */
  ParamType?: string;
  /** 匹配类型，multiVal, regex在参数类型是string时使用 */
  MatchType?: string;
  /** 匹配目标值，当multiVal时，各个key用;分割 */
  MatchValue?: string;
  /** 参数描述 */
  Description?: string;
  /** 是否为全局参数 */
  IsGlobal?: number;
  /** 参数是否可修改 */
  ModifiableInfo?: ModifiableInfo;
  /** 是否为函数 */
  IsFunc?: boolean;
  /** 函数 */
  Func?: string;
  /** 支持公式的参数的默认公式样式 */
  FuncPattern?: string;
}

/** 修改参数时，传入参数描述 */
declare interface ParamItem {
  /** 参数名称 */
  ParamName: string;
  /** 当前值 */
  CurrentValue: string;
  /** 原有值 */
  OldValue: string;
}

/** 实例参数信息 */
declare interface ParamItemDetail {
  /** 当前值 */
  CurrentValue?: string;
  /** 默认值 */
  Default?: string;
  /** 参数的可选枚举值。如果为非枚举值，则为空 */
  EnumValue?: string[];
  /** 1：全局参数，0：非全局参数 */
  IsGlobal?: number;
  /** 最大值 */
  Max?: string;
  /** 最小值 */
  Min?: string;
  /** 修改参数后，是否需要重启数据库以使参数生效。0-不需要重启，1-需要重启。 */
  NeedReboot?: number;
  /** 参数名称 */
  ParamName?: string;
  /** 参数类型：integer，enum，float，string，func */
  ParamType?: string;
  /** 参数描述 */
  Description?: string;
  /** 类型是否为公式 */
  IsFunc?: boolean;
  /** 参数配置公式 */
  Func?: string;
  /** 支持公式的参数的默认公式样式 */
  FuncPattern?: string;
}

/** 参数变化信息 */
declare interface ParamItemInfo {
  /** 参数名字 */
  ParamName?: string;
  /** 参数新值 */
  NewValue?: string;
  /** 参数旧值 */
  OldValue?: string;
  /** 参数公式 */
  ValueFunction?: string;
}

/** 参数模板信息 */
declare interface ParamTemplateListInfo {
  /** 参数模板ID */
  Id?: number;
  /** 参数模板名称 */
  TemplateName?: string;
  /** 参数模板描述 */
  TemplateDescription?: string;
  /** 引擎版本 */
  EngineVersion?: string;
  /** 数据库类型，可选值：NORMAL，SERVERLESS */
  DbMode?: string;
  /** 参数模板详情 */
  ParamInfoSet?: TemplateParamInfo[] | null;
}

/** 安全组规则 */
declare interface PolicyRule {
  /** 策略，ACCEPT或者DROP */
  Action?: string;
  /** 来源Ip或Ip段，例如192.168.0.0/16 */
  CidrIp?: string;
  /** 端口 */
  PortRange?: string;
  /** 网络协议，支持udp、tcp等 */
  IpProtocol?: string;
  /** 协议端口ID或者协议端口组ID。 */
  ServiceModule?: string;
  /** IP地址ID或者ID地址组ID。 */
  AddressModule?: string;
  /** id */
  Id?: string;
  /** 描述 */
  Desc?: string;
}

/** 访问代理配置 */
declare interface ProxyConfig {
  /** 数据库代理组节点个数。该参数不再建议使用,建议使用ProxyZones */
  ProxyCount?: number;
  /** cpu核数 */
  Cpu?: number;
  /** 内存 */
  Mem?: number;
  /** 连接池类型:SessionConnectionPool(会话级别连接池 ) */
  ConnectionPoolType?: string;
  /** 是否开启连接池,yes-开启，no-不开启 */
  OpenConnectionPool?: string;
  /** 连接池阈值:单位（秒） */
  ConnectionPoolTimeOut?: number;
  /** 描述说明 */
  Description?: string;
  /** 数据库节点信息（该参数与ProxyCount需要任选一个输入） */
  ProxyZones?: ProxyZone[];
}

/** 访问代理配置 */
declare interface ProxyConfigInfo {
  /** 数据库代理组节点个数。该参数不再建议使用,建议使用ProxyZones */
  ProxyCount?: number;
  /** cpu核数 */
  Cpu?: number;
  /** 内存 */
  Mem?: number;
  /** 描述说明 */
  Description?: string;
  /** 数据库节点信息（该参数与ProxyCount需要任选一个输入） */
  ProxyZones?: ProxyZone[];
}

/** 数据库代理连接池信息 */
declare interface ProxyConnectionPoolInfo {
  /** 连接池保持阈值：单位（秒） */
  ConnectionPoolTimeOut: number;
  /** 是否开启了连接池 */
  OpenConnectionPool?: string;
  /** 连接池类型：SessionConnectionPool（会话级别连接池） */
  ConnectionPoolType?: string;
}

/** 集成集群proxy地址配置 */
declare interface ProxyEndPointConfigInfo {
  /** 所属VPC网络ID */
  UniqueVpcId?: string;
  /** 所属子网ID */
  UniqueSubnetId?: string;
  /** 安全组id数组 */
  SecurityGroupIds?: string[];
  /** 权重模式： system-系统分配，custom-自定义 */
  WeightMode?: string;
  /** 是否自动添加只读实例，yes-是，no-不自动添加 */
  AutoAddRo?: string;
  /** 读写属性： READWRITE,READONLY */
  RwType?: string;
  /** 权重信息 */
  InstanceNameWeights?: InstanceNameWeight[];
}

/** proxy组 */
declare interface ProxyGroup {
  /** 数据库代理组ID */
  ProxyGroupId?: string;
  /** 数据库代理组节点个数 */
  ProxyNodeCount?: number;
  /** 数据库代理组状态 */
  Status?: string;
  /** 地域 */
  Region?: string;
  /** 可用区 */
  Zone?: string;
  /** 当前代理版本 */
  CurrentProxyVersion?: string;
  /** 集群ID */
  ClusterId?: string;
  /** 用户AppId */
  AppId?: number;
  /** 读写节点开通数据库代理 */
  OpenRw?: string;
}

/** 数据库代理组详细信息 */
declare interface ProxyGroupInfo {
  /** 数据库代理组 */
  ProxyGroup?: ProxyGroup;
  /** 数据库代理组读写分离信息 */
  ProxyGroupRwInfo?: ProxyGroupRwInfo;
  /** 数据库代理节点信息 */
  ProxyNodes?: ProxyNodeInfo[] | null;
  /** 数据库代理连接池信息 */
  ConnectionPool?: ProxyConnectionPoolInfo;
  /** 数据库代理网络信息 */
  NetAddrInfos?: NetAddr[] | null;
  /** 数据库代理任务集 */
  Tasks?: ObjectTask[];
}

/** 数据库代理组读写分离信息 */
declare interface ProxyGroupRwInfo {
  /** 一致性类型 eventual-最终一致性,global-全局一致性,session-会话一致性 */
  ConsistencyType?: string;
  /** 一致性超时时间 */
  ConsistencyTimeOut?: number;
  /** 权重模式 system-系统分配，custom-自定义 */
  WeightMode?: string;
  /** 是否开启故障转移 */
  FailOver?: string;
  /** 是否自动添加只读实例，yes-是，no-不自动添加 */
  AutoAddRo?: string;
  /** 实例权重数组 */
  InstanceWeights?: ProxyInstanceWeight[];
  /** 是否开通读写节点，yse-是，no-否 */
  OpenRw?: string;
  /** 读写属性，可选值：READWRITE,READONLY */
  RwType?: string;
  /** 事务拆分 */
  TransSplit?: boolean;
  /** 连接模式，可选值：balance，nearby */
  AccessMode?: string;
  /** 是否将libra节点当作普通RO节点 */
  ApNodeAsRoNode?: boolean;
  /** libra节点故障，是否转发给其他节点 */
  ApQueryToOtherNode?: boolean;
}

/** 数据库代理，读写分离实例权重 */
declare interface ProxyInstanceWeight {
  /** 实例Id */
  InstanceId: string;
  /** 实例权重 */
  Weight: number;
}

/** 数据库代理组节点 */
declare interface ProxyNodeInfo {
  /** 数据库代理节点ID */
  ProxyNodeId?: string;
  /** 节点当前连接数, DescribeProxyNodes接口此字段值不返回 */
  ProxyNodeConnections?: number;
  /** 数据库代理节点cpu */
  Cpu?: number;
  /** 数据库代理节点内存 */
  Mem?: number;
  /** 数据库代理节点状态 */
  Status?: string;
  /** 数据库代理组ID */
  ProxyGroupId?: string;
  /** 集群ID */
  ClusterId?: string;
  /** 用户AppID */
  AppId?: number;
  /** 地域 */
  Region?: string;
  /** 可用区 */
  Zone?: string;
  /** 数据库代理节点名字 */
  OssProxyNodeName?: string;
}

/** 数据库代理规格 */
declare interface ProxySpec {
  /** 数据库代理cpu核数 */
  Cpu?: number;
  /** 数据库代理内存 */
  Mem?: number;
}

/** TDSQL-C MySQL支持的proxy版本信息 */
declare interface ProxyVersionInfo {
  /** proxy版本号 */
  ProxyVersion?: string;
  /** 版本描述：GA:稳定版 BETA:尝鲜版，DEPRECATED:过旧， */
  ProxyVersionType?: string;
}

/** proxy节点可用区内个数 */
declare interface ProxyZone {
  /** proxy节点可用区 */
  ProxyNodeZone?: string;
  /** proxy节点数量 */
  ProxyNodeCount?: number;
}

/** 查询过滤器 */
declare interface QueryFilter {
  /** 搜索字符串 */
  Values: string[];
  /** 搜索字段，目前支持："InstanceId", "ProjectId", "InstanceName", "Vip" */
  Names: string[];
  /** 是否精确匹配 */
  ExactMatch?: boolean;
  /** 搜索字段 */
  Name?: string;
  /** 操作符 */
  Operator?: string;
}

/** 查询参数过滤器 */
declare interface QueryParamFilter {
  /** 搜索字段，目前支持：ProxyGroupId */
  Names: string[];
  /** 搜索字符串 */
  Values: string[];
  /** 是否精确匹配 */
  ExactMatch?: boolean;
}

/** 模糊查询过滤器 */
declare interface QuerySimpleFilter {
  /** 字段名称 */
  Names?: string[];
  /** 字段值 */
  Values?: string[];
  /** 模糊匹配，true-是，false否 */
  ExactMatch?: boolean;
}

/** redo日志详情 */
declare interface RedoLogItem {
  /** 文件名 */
  FileName?: string;
  /** 文件大小 */
  FileSize?: number;
  /** 备份时间 */
  BackupTime?: string;
  /** redoLogId */
  RedoLogId?: number;
  /** 跨地域信息 */
  RedoCrossRegions?: BackupRegionAndIds[];
  /** 状态 */
  Status?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 完成时间 */
  FinishTime?: string;
}

/** 该地域实例规格信息 */
declare interface RegionInstanceSpecInfo {
  /** cpu核数 */
  Cpu?: number | null;
  /** 内存大小 */
  Memory?: number | null;
  /** 最小存储大小 */
  MinStorageSize?: number | null;
  /** 最大存储大小 */
  MaxStorageSize?: number | null;
  /** 是否有库存 */
  HasStock?: boolean | null;
  /** 实例类型 */
  InstanceType?: string | null;
  /** 存储类型 */
  StorageType?: string | null;
  /** 最小副本数 */
  MinReplicaNum?: number | null;
  /** 最大副本数 */
  MaxReplicaNum?: number | null;
  /** 可用区库存信息列表 */
  ZoneStockInfos?: ZoneStockInfo4Libra[] | null;
}

/** 分析引擎同步对象 */
declare interface ReplicationObject {
  /** 源端实例类型 */
  SrcInstanceType: string | null;
  /** 源端集群Id */
  SrcClusterId?: string | null;
  /** 源端实例ID */
  SrcInstanceId?: string | null;
  /** 复制任务ID */
  ReplicationJobId?: string | null;
  /** 同步对象详情 */
  MigrateObjects?: MigrateOpt | null;
}

/** 资源包信息 */
declare interface ResourcePackage {
  /** 资源包的唯一ID */
  PackageId?: string;
  /** 资源包类型：CCU：计算资源包DISK：存储资源包 */
  PackageType?: string;
  /** 当前资源包绑定在当前实例下的抵扣优先级 */
  DeductionPriority?: number;
}

/** 只读实例地址 */
declare interface RoAddr {
  /** IP地址 */
  IP?: string;
  /** 端口 */
  Port?: number;
}

/** 回档任务信息 */
declare interface RollbackData {
  /** 实例CPU */
  Cpu?: number;
  /** 实例内存 */
  Memory?: number;
  /** 集群存储上限 */
  StorageLimit?: number;
  /** 原集群id */
  OriginalClusterId?: string;
  /** 原集群名 */
  OriginalClusterName?: string;
  /** 回档方式 */
  RollbackStrategy?: string;
  /** 快照时间 */
  SnapshotTime?: string;
  /** 回档到 Serverless 集群时最小 CPU */
  MinCpu?: number;
  /** 回档到 Serverless 集群时最大 CPU */
  MaxCpu?: number;
  /** 快照ID */
  SnapShotId?: number;
  /** 回档数据库 */
  RollbackDatabases?: RollbackDatabase[] | null;
  /** 回档数据表 */
  RollbackTables?: RollbackTable[] | null;
  /** 备份文件名称 */
  BackupFileName?: string;
  /** 回档进程 */
  RollbackProcess?: RollbackProcessInfo;
}

/** 回滚数据库信息 */
declare interface RollbackDatabase {
  /** 旧数据库名称 */
  OldDatabase: string;
  /** 新数据库名称 */
  NewDatabase: string;
}

/** 回档实例信息 */
declare interface RollbackInstanceInfo {
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** vpc信息 */
  UniqVpcId?: string;
  /** 子网信息 */
  UniqSubnetId?: string;
  /** vip信息 */
  Vip?: string;
  /** vport信息 */
  Vport?: number;
  /** 实例ID */
  InstanceId?: string;
  /** 实例名称 */
  InstanceName?: string;
  /** 状态 */
  Status?: string;
  /** cpu大小 */
  Cpu?: number;
  /** 内存大小 */
  Mem?: number;
  /** 存储大小 */
  StorageLimit?: number;
}

/** 回档进度详情 */
declare interface RollbackProcessInfo {
  /** 是否可以交换vip */
  IsVipSwitchable?: boolean;
  /** vip可交换时间 */
  VipSwitchableTime?: string;
  /** 交换实例列表 */
  ExchangeInstanceInfoList?: ExchangeInstanceInfo[] | null;
  /** 交换RO组列表 */
  ExchangeRoGroupInfoList?: ExchangeRoGroupInfo[] | null;
  /** 当前步骤 */
  CurrentStep?: string;
  /** 当前步骤进度 */
  CurrentStepProgress?: number;
  /** 当前步骤剩余时间 */
  CurrentStepRemainingTime?: string;
}

/** 回档RO组信息 */
declare interface RollbackRoGroupInfo {
  /** 实例组ID */
  InstanceGroupId?: string;
  /** vpc信息 */
  UniqVpcId?: string;
  /** 子网信息 */
  UniqSubnetId?: string;
  /** vip信息 */
  Vip?: string;
  /** vport信息 */
  Vport?: number;
}

/** 回档数据库及表 */
declare interface RollbackTable {
  /** 数据库名称 */
  Database: string;
  /** 数据库表 */
  Tables: RollbackTableInfo[];
}

/** 回档表信息 */
declare interface RollbackTableInfo {
  /** 旧表名称 */
  OldTable: string;
  /** 新表名称 */
  NewTable: string;
}

/** 可回档的时间范围 */
declare interface RollbackTimeRange {
  /** 开始时间 */
  TimeRangeStart?: string;
  /** 结束时间 */
  TimeRangeEnd?: string;
}

/** 审计规则的规则过滤条件 */
declare interface RuleFilters {
  /** 审计规则过滤条件的参数名称。可选值：host – 客户端 IP；user – 数据库账户；dbName – 数据库名称；sqlType-SQL类型；sql-sql语句；affectRows -影响行数；sentRows-返回行数；checkRows-扫描行数；execTime-执行时间。 */
  Type: string;
  /** 审计规则过滤条件的匹配类型。可选值：INC – 包含；EXC – 不包含；EQS – 等于；NEQ – 不等于；REG-正则；GT-大于；LT-小于。 */
  Compare: string;
  /** 审计规则过滤条件的匹配值。 */
  Value: string[];
}

/** 规则模板内容 */
declare interface RuleTemplateInfo {
  /** 规则模板ID。 */
  RuleTemplateId?: string;
  /** 规则模板名称。 */
  RuleTemplateName?: string;
  /** 规则内容。 */
  RuleFilters?: RuleFilters[];
  /** 告警等级。1-低风险，2-中风险，3-高风险。 */
  AlarmLevel?: number;
  /** 告警策略。0-不告警，1-告警。 */
  AlarmPolicy?: number;
  /** 规则描述。 */
  Description?: string;
}

/** 资源包明细说明 */
declare interface SalePackageSpec {
  /** 资源包使用地域 */
  PackageRegion?: string;
  /** 资源包类型CCU-计算资源包DISK-存储资源包 */
  PackageType?: string;
  /** 资源包版本base-基础版本，common-通用版本，enterprise-企业版本 */
  PackageVersion?: string;
  /** 当前版本资源包最小资源数，计算资源单位：个；存储资源：GB */
  MinPackageSpec?: number;
  /** 当前版本资源包最大资源数，计算资源单位：个；存储资源：GB */
  MaxPackageSpec?: number;
  /** 资源包有效期，单位:天 */
  ExpireDay?: number;
}

/** 售卖地域信息 */
declare interface SaleRegion {
  /** 地域英文名 */
  Region: string;
  /** 地域数字ID */
  RegionId: number;
  /** 地域中文名 */
  RegionZh: string;
  /** 可售卖可用区列表 */
  ZoneSet: SaleZone[];
  /** 引擎类型 */
  DbType: string;
  /** 地域模块支持情况 */
  Modules: Module[];
}

/** 售卖可用区信息 */
declare interface SaleZone {
  /** 可用区英文名 */
  Zone?: string;
  /** 可用区数字ID */
  ZoneId?: number;
  /** 可用区中文名 */
  ZoneZh?: string;
  /** 是否支持serverless集群0:不支持1:支持 */
  IsSupportServerless?: number;
  /** 是否支持普通集群0:不支持1:支持 */
  IsSupportNormal?: number;
  /** 物理区 */
  PhysicalZone?: string;
  /** 用户是否有可用区权限 */
  HasPermission?: boolean;
  /** 是否为全链路RDMA可用区 */
  IsWholeRdmaZone?: string;
  /** 当前可用区是否允许新购集群，1:允许，0:不允许 */
  IsSupportCreateCluster?: number;
}

/** 遗留备份列表 */
declare interface SaveBackupClusterInfo {
  /** 遗照备份id */
  BackupId?: number;
  /** 集群id */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 地域 */
  Region?: string;
  /** 可用区 */
  Zone?: string;
  /** 备份时间 */
  BackupTime?: string;
  /** 数据库版本 */
  DbVersion?: string;
  /** Db类型(NORMAL, SERVERLESS) */
  DbMode?: string;
  /** 集群状态 */
  ClusterStatus?: string;
  /** 任务列表 */
  Tasks?: ObjectTask[];
}

/** 安全组详情 */
declare interface SecurityGroup {
  /** 项目ID */
  ProjectId?: number;
  /** 创建时间，时间格式：yyyy-mm-dd hh:mm:ss */
  CreateTime?: string;
  /** 入站规则 */
  Inbound?: PolicyRule[];
  /** 出站规则 */
  Outbound?: PolicyRule[];
  /** 安全组ID */
  SecurityGroupId?: string;
  /** 安全组名称 */
  SecurityGroupName?: string;
  /** 安全组备注 */
  SecurityGroupRemark?: string;
}

/** serverless规格 */
declare interface ServerlessSpec {
  /** cpu最小值 */
  MinCpu?: number;
  /** cpu最大值 */
  MaxCpu?: number;
  /** 最大存储空间 */
  MaxStorageSize?: number;
  /** 是否为默认规格 */
  IsDefault?: number;
  /** 是否有库存 */
  HasStock?: boolean;
  /** 库存数量 */
  StockCount?: number;
  /** 可用区库存信息 */
  ZoneStockInfos?: ServerlessZoneStockInfo[] | null;
}

/** serverless类型的可用区库存信息 */
declare interface ServerlessZoneStockInfo {
  /** 可用区 */
  Zone?: string;
  /** 存储量 */
  StockCount?: number;
  /** 是否包含库存 */
  HasStock?: boolean;
  /** 从可用区库存信息 */
  SlaveZoneStockInfos?: SlaveZoneStockInfo[];
}

/** 可用区属性项 */
declare interface SlaveZoneAttrItem {
  /** 可用区 */
  Zone?: string;
  /** binlog同步方式 */
  BinlogSyncWay?: string;
  /** 半同步超时时间，单位ms */
  SemiSyncTimeout?: number;
}

/** 备可用区库存信息 */
declare interface SlaveZoneStockInfo {
  /** 备可用区 */
  SlaveZone?: string;
  /** 备可用区的库存数量 */
  StockCount?: number;
  /** 备可用区是否有库存 */
  HasStock?: boolean;
}

/** 实例慢查询信息 */
declare interface SlowQueriesItem {
  /** 执行时间戳 */
  Timestamp?: number;
  /** 执行时长，单位秒 */
  QueryTime?: number;
  /** sql语句 */
  SqlText?: string;
  /** 客户端host */
  UserHost?: string;
  /** 用户名 */
  UserName?: string;
  /** 数据库名 */
  Database?: string;
  /** 锁时长，单位秒 */
  LockTime?: number;
  /** 扫描行数 */
  RowsExamined?: number;
  /** 返回行数 */
  RowsSent?: number;
  /** sql模板 */
  SqlTemplate?: string;
  /** sql语句md5 */
  SqlMd5?: string;
  /** 远程读取次数数据库内核版本大于3.1.12 */
  SyncReadCountRemote?: number;
  /** 远程读取的字节数数据库内核版本大于3.1.12 */
  SyncReadBytesRemote?: number;
  /** 远程读取所花费的时间（微秒）数据库内核版本大于3.1.12 */
  SyncReadTimeRemote?: number;
  /** 远程写入次数数据库内核版本大于3.1.12 */
  SyncWriteCountRemote?: number;
  /** 远程写入的字节数。数据库内核版本大于3.1.12 */
  SyncWriteBytesRemote?: number;
  /** 远程写入所花费的时间（微秒）。数据库内核版本大于3.1.12 */
  SyncWriteTimeRemote?: number;
  /** 事务提交延迟（微秒）数据库内核版本大于3.1.12 */
  TrxCommitDelay?: number;
}

/** 快照备份设置 */
declare interface SnapshotBackupConfig {
  /** 系统自动时间 */
  BackupCustomAutoTime?: boolean;
  /** 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeBeg?: number;
  /** 表示全备结束时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeEnd?: number;
  /** 该参数目前不支持修改，无需填写。备份频率，长度为7的数组，分别对应周日到周六的备份方式，full-全量备份，increment-增量备份 */
  BackupWeekDays?: string[];
  /** 间隔时间 */
  BackupIntervalTime?: number;
  /** 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600247=604800，最大为158112000 */
  ReserveDuration?: number;
  /** 自动数据备份触发策略，periodically:自动周期备份,frequent:高频备份 */
  BackupTriggerStrategy?: string;
}

/** 转换集群log bin开关 */
declare interface SwitchClusterLogBin {
  /** 状态 */
  Status?: string;
}

/** 表映射关系 */
declare interface TableMappingObject {
  /** 源端实例Id */
  SrcInstanceId?: string;
  /** 数据库名称 */
  DatabaseName?: string;
  /** 表名 */
  TableName?: string;
  /** 映射数据库名称 */
  MapDatabaseName?: string;
  /** 映射表名 */
  MapTableName?: string;
  /** 同步状态 */
  Status?: string;
  /** 同步进度 */
  Process?: number;
  /** 延迟 */
  Lag?: number;
  /** 消息 */
  Message?: string;
  /** 是否为主表 */
  IsPrimary?: boolean;
  /** 虚拟列填充值 */
  VirtualColValue?: string;
}

/** mysql表权限 */
declare interface TablePrivileges {
  /** 数据库名 */
  Db: string;
  /** 表名 */
  TableName: string;
  /** 权限列表 */
  Privileges: string[];
}

/** 集群绑定的标签信息，包含标签键TagKey和标签值TagValue */
declare interface Tag {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** TaskMaintainInfo */
declare interface TaskMaintainInfo {
  /** 执行开始时间(距离0点的秒数) */
  MaintainStartTime?: number;
  /** 持续的时间(单位：秒) */
  MaintainDuration?: number;
  /** 可以执行的时间，枚举值：["Mon","Tue","Wed","Thu","Fri", "Sat", "Sun"] */
  MaintainWeekDays?: string[];
}

/** 任务进度查询 */
declare interface TaskProgressInfo {
  /** 当前步骤 */
  CurrentStep?: string;
  /** 当前进度 */
  CurrentStepProgress?: number;
  /** 预估时间 */
  CurrentStepRemainingTime?: string;
}

/** 参数模板详情 */
declare interface TemplateParamInfo {
  /** 当前值 */
  CurrentValue?: string;
  /** 默认值 */
  Default?: string;
  /** 参数类型为enum时可选的值类型集合 */
  EnumValue?: string[];
  /** 参数类型为float/integer时的最大值 */
  Max?: string;
  /** 参数类型为float/integer时的最小值 */
  Min?: string;
  /** 参数名称 */
  ParamName?: string;
  /** 是否需要重启 */
  NeedReboot?: number;
  /** 参数描述 */
  Description?: string;
  /** 参数类型，integer/float/string/enum */
  ParamType?: string;
}

/** 计费询价结果 */
declare interface TradePrice {
  /** 预付费模式下资源总价，不包含优惠，单位:分 */
  TotalPrice?: number;
  /** 总的折扣，100表示100%不打折 */
  Discount?: number;
  /** 预付费模式下的优惠后总价, 单位: 分,例如用户享有折扣 =TotalPrice × Discount */
  TotalPriceDiscount?: number;
  /** 后付费模式下的单位资源价格，不包含优惠，单位:分 */
  UnitPrice?: number;
  /** 优惠后后付费模式下的单位资源价格, 单位: 分,例如用户享有折扣=UnitPricet × Discount */
  UnitPriceDiscount?: number;
  /** 计费价格单位 */
  ChargeUnit?: string;
  /** 高精度下不包含优惠价格 */
  UnitPriceHighPrecision?: string;
  /** 高精度下优惠后价格 */
  UnitPriceDiscountHighPrecision?: string;
  /** 货币单位 */
  AmountUnit?: string;
}

/** 添加实例或者变配实例时同步升级proxy. */
declare interface UpgradeProxy {
  /** cpu */
  Cpu: number;
  /** memory */
  Mem: number;
  /** 代理节点信息 */
  ProxyZones: ProxyZone[];
  /** 重新负载均衡 */
  ReloadBalance?: string;
}

/** 用户主机权限 */
declare interface UserHostPrivilege {
  /** 授权用户 */
  DbUserName: string;
  /** 客户端ip */
  DbHost: string;
  /** 用户权限 */
  DbPrivilege: string;
}

/** 可用区库存信息 */
declare interface ZoneStockInfo {
  /** 可用区 */
  Zone?: string;
  /** 是否有库存 */
  HasStock?: boolean;
  /** 库存数量 */
  StockCount?: number;
  /** 备可用区库存信息 */
  SlaveZoneStockInfos?: SlaveZoneStockInfo[];
}

/** Libra所售卖的地域库存信息 */
declare interface ZoneStockInfo4Libra {
  /** 可用区 */
  Zone?: string | null;
  /** 是否有库存 */
  HasStock?: boolean | null;
}

declare interface ActivateInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例 ID 列表，单个实例 ID 格式如：cynosdbmysql-ins-n7ocdslw，与TDSQL-C MySQL数据库控制台页面中显示的实例 ID 相同，可使用 查询实例列表 接口获取，其值为输出参数中字段 InstanceId 的值。 */
  InstanceIdList: string[];
}

declare interface ActivateInstanceResponse {
  /** 任务流id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ActivateLibraDBClusterRequest {
  /** 分析集群 ID */
  ClusterId: string;
}

declare interface ActivateLibraDBClusterResponse {
  /** flow id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ActivateLibraDBInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 只读分析引擎实例 ID 列表 */
  InstanceIdList: string[];
}

declare interface ActivateLibraDBInstanceResponse {
  /** 任务流id */
  FlowId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddClusterSlaveZoneRequest {
  /** 集群ID */
  ClusterId: string;
  /** 从可用区 */
  SlaveZone: string;
  /** binlog同步方式。默认值：async。可选值：sync、semisync、async */
  BinlogSyncWay?: string;
  /** 半同步超时时间，单位ms。为保证业务稳定性，半同步复制存在退化逻辑，当主可用区集群在等待备可用区集群确认事务时若超过该超时时间，复制方式将降为异步复制。最低设置为1000ms，最高支持4294967295ms，默认10000ms。 */
  SemiSyncTimeout?: number;
}

declare interface AddClusterSlaveZoneResponse {
  /** 异步FlowId */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** Cpu核数 */
  Cpu: number;
  /** 内存，单位为GB */
  Memory: number;
  /** 新增只读实例数，取值范围为(0,15] */
  ReadOnlyCount: number;
  /** 实例机器类型，支持值如下：- common：表示通用型- exclusive：表示独享型 */
  DeviceType?: string;
  /** 实例组ID，在已有RO组中新增实例时使用，不传则新增RO组。当前版本不建议传输该值。 */
  InstanceGrpId?: string;
  /** 所属VPC网络ID。 */
  VpcId?: string;
  /** 所属子网ID，如果设置了VpcId，则SubnetId必填。 */
  SubnetId?: string;
  /** 新增RO组时使用的Port，取值范围为[0,65535) */
  Port?: number;
  /** 实例名称，字符串长度范围为[0,64)，取值范围为大小写字母，0-9数字，'_','-','.' */
  InstanceName?: string;
  /** 是否自动选择代金券 1是 0否 默认为0 */
  AutoVoucher?: number;
  /** 数据库类型，取值范围: MYSQL */
  DbType?: string;
  /** 订单来源，字符串长度范围为[0,64) */
  OrderSource?: string;
  /** 交易模式 0-下单并支付 1-下单 */
  DealMode?: number;
  /** 参数模板ID */
  ParamTemplateId?: number;
  /** 参数列表，ParamTemplateId 传入时InstanceParams才有效 */
  InstanceParams?: ModifyParamItem[];
  /** 安全组ID，新建只读实例时可以指定安全组。 */
  SecurityGroupIds?: string[];
  /** proxy同步升级 */
  UpgradeProxy?: UpgradeProxy;
}

declare interface AddInstancesResponse {
  /** 冻结流水，一次开通一个冻结流水。 */
  TranId?: string;
  /** 后付费订单号。 */
  DealNames?: string[];
  /** 发货资源id列表。 */
  ResourceIds?: string[];
  /** 大订单号 */
  BigDealIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateSecurityGroupsRequest {
  /** 实例组 ID 数组，cynosdbmysql-grp-前缀开头或集群 ID。说明：要获取集群的实例组 ID，可通过 [查询集群实例组](https://cloud.tencent.com/document/product/1003/103934) 进行。 */
  InstanceIds: string[];
  /** 要修改的安全组ID列表，一个或者多个安全组Id组成的数组。 */
  SecurityGroupIds: string[];
  /** 可用区 */
  Zone: string;
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindClusterResourcePackagesRequest {
  /** 资源包唯一ID */
  PackageIds: string[];
  /** 集群ID */
  ClusterId: string;
}

declare interface BindClusterResourcePackagesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckCreateLibraDBInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID */
  InstanceId?: string;
}

declare interface CheckCreateLibraDBInstanceResponse {
  /** 整体校验状态 */
  Status?: string | null;
  /** 校验项 */
  CheckItem?: CheckItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseAuditServiceRequest {
  /** 实例ID。 */
  InstanceId: string;
}

declare interface CloseAuditServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseClusterPasswordComplexityRequest {
  /** 集群ID数组 */
  ClusterIds: string[];
}

declare interface CloseClusterPasswordComplexityResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseProxyEndPointRequest {
  /** 集群ID */
  ClusterId: string;
  /** 数据库代理组ID */
  ProxyGroupId: string;
}

declare interface CloseProxyEndPointResponse {
  /** 异步流程ID */
  FlowId?: number;
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseProxyRequest {
  /** 集群ID */
  ClusterId: string;
  /** 数据库代理组ID */
  ProxyGroupId?: string;
  /** 是否只关闭读写分离，取值：是 "true","false" */
  OnlyCloseRW?: boolean;
}

declare interface CloseProxyResponse {
  /** 异步流程ID */
  FlowId?: number;
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseSSLRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID */
  InstanceId?: string;
}

declare interface CloseSSLResponse {
  /** 流程ID */
  FlowId?: number;
  /** 任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseWanRequest {
  /** 实例组id */
  InstanceGrpId?: string;
  /** 实例组id */
  InstanceGroupId?: string;
  /** 实例id */
  InstanceId?: string;
}

declare interface CloseWanResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopyClusterPasswordComplexityRequest {
  /** 复制集群ID数组，例如["cynosdbmysql-bzxxrmtq","cynosdbmysql-qwer"] */
  ClusterIds: string[];
  /** 集群id，例如"cynosdbmysql-bzxxrmtq" */
  SourceClusterId: string;
}

declare interface CopyClusterPasswordComplexityResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAccountsRequest {
  /** 集群id */
  ClusterId: string;
  /** 新账户列表 */
  Accounts: NewAccount[];
}

declare interface CreateAccountsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAuditLogFileRequest {
  /** 实例ID */
  InstanceId: string;
  /** 开始时间，格式为："2017-07-12 10:29:20"。 */
  StartTime: string;
  /** 结束时间，格式为："2017-07-12 10:29:20"。 */
  EndTime: string;
  /** 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。 */
  Order?: string;
  /** 排序字段。支持值包括："timestamp" - 时间戳；"affectRows" - 影响行数；"execTime" - 执行时间。 */
  OrderBy?: string;
  /** 已废弃。 */
  Filter?: AuditLogFilter;
  /** 审计日志过滤条件 */
  LogFilter?: InstanceAuditLogFilter[];
  /** 审计日志列 */
  ColumnFilter?: string[];
}

declare interface CreateAuditLogFileResponse {
  /** 审计日志文件名称。 */
  FileName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAuditRuleTemplateRequest {
  /** 审计规则。 */
  RuleFilters: RuleFilters[];
  /** 规则模板名称。 */
  RuleTemplateName: string;
  /** 规则模板描述。 */
  Description?: string;
  /** 告警等级。1-低风险，2-中风险，3-高风险 */
  AlarmLevel?: number;
  /** 告警策略。0-不告警，1-告警。 */
  AlarmPolicy?: number;
}

declare interface CreateAuditRuleTemplateResponse {
  /** 生成的规则模板ID。 */
  RuleTemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupRequest {
  /** 集群ID */
  ClusterId: string;
  /** 备份类型, 可选值：logic，逻辑备份；snapshot，物理备份 */
  BackupType?: string;
  /** 备份的库, 只在 BackupType 为 logic 时有效 */
  BackupDatabases?: string[];
  /** 备份的表, 只在 BackupType 为 logic 时有效 */
  BackupTables?: DatabaseTables[];
  /** 备注名 */
  BackupName?: string;
}

declare interface CreateBackupResponse {
  /** 异步任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCLSDeliveryRequest {
  /** 实例id */
  InstanceId: string;
  /** 日志投递配置 */
  CLSInfoList: CLSInfo[];
  /** 日志类型 */
  LogType?: string;
  /** 是否维护时间运行 */
  IsInMaintainPeriod?: string;
}

declare interface CreateCLSDeliveryResponse {
  /** 异步任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterDatabaseRequest {
  /** 集群ID */
  ClusterId: string;
  /** 数据库名 */
  DbName: string;
  /** 字符集类型 */
  CharacterSet: string;
  /** 排序规则 */
  CollateRule: string;
  /** 授权用户主机权限 */
  UserHostPrivileges?: UserHostPrivilege[];
  /** 备注 */
  Description?: string;
}

declare interface CreateClusterDatabaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClustersRequest {
  /** 可用区 */
  Zone: string;
  /** 所属VPC网络ID */
  VpcId: string;
  /** 所属子网ID */
  SubnetId: string;
  /** 数据库类型，取值范围: MYSQL */
  DbType: string;
  /** 数据库版本，取值范围: MYSQL可选值：5.7，8.0 */
  DbVersion: string;
  /** 所属项目ID */
  ProjectId?: number;
  /** 当DbMode为NORMAL或不填时必选普通实例Cpu核数 */
  Cpu?: number;
  /** 当DbMode为NORMAL或不填时必选普通实例内存,单位GB */
  Memory?: number;
  /** 实例数量，数量范围为(0,16]，默认值为2（即一个rw实例+一个ro实例），传递的n表示1个rw实例+n-1个ro实例（规格相同），如需要更精确的集群组成搭配，请使用InstanceInitInfos */
  InstanceCount?: number;
  /** 该参数无实际意义，已废弃。存储大小，单位GB。 */
  Storage?: number;
  /** 集群名称，长度小于64个字符，每个字符取值范围：大/小写字母，数字，特殊符号（'-','_','.'） */
  ClusterName?: string;
  /** 账号密码(8-64个字符，包含大小写英文字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种) */
  AdminPassword?: string;
  /** 端口，默认3306，取值范围[0, 65535) */
  Port?: number;
  /** 计费模式，支持值为0和1，默认值为0。取值为0，表示按量计费。取值为1，表示包年包月。 */
  PayMode?: number;
  /** 购买集群数，可选值范围[1,50]，默认为1 */
  Count?: number;
  /** 回档类型：noneRollback：不回档；snapRollback，快照回档；timeRollback，时间点回档 */
  RollbackStrategy?: string;
  /** 快照回档，表示snapshotId；时间点回档，表示queryId，为0，表示需要判断时间点是否有效 */
  RollbackId?: number;
  /** 回档时，传入源集群ID，用于查找源poolId */
  OriginalClusterId?: string;
  /** 时间点回档，指定时间；快照回档，快照时间 */
  ExpectTime?: string;
  /** 该参数无实际意义，已废弃。时间点回档，指定时间允许范围 */
  ExpectTimeThresh?: number;
  /** 普通实例存储上限，单位GB当DbType为MYSQL，且存储计费模式为预付费时，该参数需不大于cpu与memory对应存储规格上限 */
  StorageLimit?: number;
  /** 包年包月购买时长 */
  TimeSpan?: number;
  /** 包年包月购买时长单位，['s','d','m','y'] */
  TimeUnit?: string;
  /** 包年包月购买是否自动续费，默认为0。0标识默认续费方式，1表示自动续费，2表示不自动续费。 */
  AutoRenewFlag?: number;
  /** 是否自动选择代金券 1是 0否 默认为0 */
  AutoVoucher?: number;
  /** 实例数量（该参数已不再使用，只做存量兼容处理） */
  HaCount?: number;
  /** 订单来源 */
  OrderSource?: string;
  /** 集群创建需要绑定的tag数组信息 */
  ResourceTags?: Tag[];
  /** Db类型当DbType为MYSQL时可选(默认NORMAL)：NORMALSERVERLESS */
  DbMode?: string;
  /** 当DbMode为SERVERLESS时必填cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MinCpu?: number;
  /** 当DbMode为SERVERLESS时必填：cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MaxCpu?: number;
  /** 当DbMode为SERVERLESS时，指定集群是否自动暂停，可选范围yesno默认值:yes */
  AutoPause?: string;
  /** 当DbMode为SERVERLESS时，指定集群自动暂停的延迟，单位秒，可选范围[600,691200]默认值:600 */
  AutoPauseDelay?: number;
  /** 集群存储计费模式，按量计费：0，包年包月：1。默认按量计费当DbType为MYSQL时，在集群计算计费模式为后付费（包括DbMode为SERVERLESS）时，存储计费模式仅可为按量计费回档与克隆均不支持包年包月存储 */
  StoragePayMode?: number;
  /** 安全组id数组 */
  SecurityGroupIds?: string[];
  /** 告警策略Id数组 */
  AlarmPolicyIds?: string[];
  /** 参数数组，暂时支持character_set_server （utf8｜latin1｜gbk｜utf8mb4） ，lower_case_table_names，1-大小写不敏感，0-大小写敏感 */
  ClusterParams?: ParamItem[];
  /** 交易模式，0-下单且支付，1-下单 */
  DealMode?: number;
  /** 参数模板ID，可以通过查询参数模板信息DescribeParamTemplates获得参数模板ID */
  ParamTemplateId?: number;
  /** 多可用区地址 */
  SlaveZone?: string;
  /** 实例初始化配置信息，主要用于购买集群时选不同规格实例 */
  InstanceInitInfos?: InstanceInitInfo[];
  /** 全球数据库唯一标识 */
  GdnId?: string;
  /** 数据库代理配置 */
  ProxyConfig?: ProxyConfig;
  /** 是否自动归档 */
  AutoArchive?: string;
  /** 暂停后的归档处理时间 */
  AutoArchiveDelayHours?: number;
  /** 内核小版本号 */
  CynosVersion?: string;
}

declare interface CreateClustersResponse {
  /** 冻结流水ID */
  TranId?: string;
  /** 订单号 */
  DealNames?: string[];
  /** 资源ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取资源ID） */
  ResourceIds?: string[];
  /** 集群ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取集群ID） */
  ClusterIds?: string[];
  /** 大订单号 */
  BigDealIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateIntegrateClusterRequest {
  /** 可用区 */
  Zone: string;
  /** 所属VPC网络ID */
  VpcId: string;
  /** 所属子网ID */
  SubnetId: string;
  /** 数据库版本，取值范围: MYSQL可选值：5.7，8.0 */
  DbVersion: string;
  /** 所属项目ID */
  ProjectId?: number;
  /** 集群名称，长度小于64个字符，每个字符取值范围：大/小写字母，数字，特殊符号（'-','_','.'） */
  ClusterName?: string;
  /** 账号密码(8-64个字符，包含大小写英文字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种) */
  AdminPassword?: string;
  /** 端口，默认3306，取值范围[0, 65535) */
  Port?: number;
  /** 计费模式，按量计费：0，包年包月：1。默认按量计费。 */
  PayMode?: number;
  /** 购买集群数，可选值范围[1,3]，默认为1 */
  Count?: number;
  /** 普通实例存储上限，单位GB当DbType为MYSQL，且存储计费模式为预付费时，该参数需不大于cpu与memory对应存储规格上限 */
  StorageLimit?: number;
  /** 包年包月购买时长 */
  TimeSpan?: number;
  /** 包年包月购买时长单位，['s','d','m','y'] */
  TimeUnit?: string;
  /** 包年包月购买是否自动续费，默认为0。0标识默认续费方式，1表示自动续费，2表示不自动续费。 */
  AutoRenewFlag?: number;
  /** 是否自动选择代金券 1是 0否 默认为0 */
  AutoVoucher?: number;
  /** 集群创建需要绑定的tag数组信息 */
  ResourceTags?: Tag[];
  /** 集群存储计费模式，按量计费：0，包年包月：1。默认按量计费当DbType为MYSQL时，在集群计算计费模式为后付费（包括DbMode为SERVERLESS）时，存储计费模式仅可为按量计费回档与克隆均不支持包年包月存储 */
  StoragePayMode?: number;
  /** 安全组id数组 */
  SecurityGroupIds?: string[];
  /** 告警策略Id数组 */
  AlarmPolicyIds?: string[];
  /** 参数数组，暂时支持character_set_server （utf8｜latin1｜gbk｜utf8mb4） ，lower_case_table_names，1-大小写不敏感，0-大小写敏感 */
  ClusterParams?: ParamItem[];
  /** 交易模式，0-下单且支付，1-下单 */
  DealMode?: number;
  /** 参数模板ID，可以通过查询参数模板信息DescribeParamTemplates获得参数模板ID */
  ParamTemplateId?: number;
  /** 多可用区地址 */
  SlaveZone?: string;
  /** 实例初始化配置信息，主要用于购买集群时选不同规格实例 */
  InstanceInitInfos?: IntegrateInstanceInfo[];
  /** 全球数据库唯一标识 */
  GdnId?: string;
  /** 数据库代理配置 */
  ProxyConfig?: ProxyConfigInfo;
  /** 是否自动归档 */
  AutoArchive?: string;
  /** 暂停后的归档处理时间 */
  AutoArchiveDelayHours?: number;
  /** 加密方法（由加密算法和密钥对版本组成） */
  EncryptMethod?: string;
  /** 集成集群配置信息 */
  IntegrateCreateClusterConfig?: IntegrateCreateClusterConfig;
  /** 存储架构类型。 枚举值：1.0/2.0 默认值：1.0 */
  StorageVersion?: string;
}

declare interface CreateIntegrateClusterResponse {
  /** 冻结流水ID */
  TranId?: string;
  /** 订单号 */
  DealNames?: string[];
  /** 资源ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取资源ID） */
  ResourceIds?: string[];
  /** 集群ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取集群ID） */
  ClusterIds?: string[];
  /** 大订单号 */
  BigDealIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLibraDBClusterAccountsRequest {
  /** 分析集群id */
  ClusterId: string;
  /** 账户信息 */
  Accounts: NewAccount[];
  /** 加密方式 */
  EncryptMethod?: string;
}

declare interface CreateLibraDBClusterAccountsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLibraDBClustersRequest {
  /** 数量 */
  Count: number;
  /** 可用区 */
  Zone: string;
  /** 实例初始化信息 */
  InstanceInitInfos: LibraDBInstanceInitInfo[];
  /** 用户密码 */
  AdminPassword?: string;
  /** 是否自动续费 */
  AutoRenewFlag?: number;
  /** 是否自动选择代金券 */
  AutoVoucher?: number;
  /** 集群名称 */
  ClusterName?: string;
  /** 下单模式 */
  DealMode?: string;
  /** 加密方法 */
  EncryptMethod?: string;
  /** LibraDBVersion 版本，缺省为最新版本 */
  LibraDBVersion?: string;
  /** 订单来源 */
  OrderSource?: string;
  /** 付费模式 */
  PayMode?: number;
  /** 项目id */
  ProjectId?: string;
  /** 安全组 */
  SecurityGroupIds?: string[];
  /** 时长 */
  TimeSpan?: number;
  /** 时间单位 */
  TimeUnit?: string;
  /** 实例创建绑定Tag数组信息 */
  ResourceTags?: Tag[];
  /** 集群所在vpcId */
  VpcId?: string;
  /** 集群所在SubnetId */
  SubnetId?: string;
  /** 端口 */
  Port?: string;
}

declare interface CreateLibraDBClustersResponse {
  /** 预付费总订单号 */
  BigDealIds?: string[];
  /** 集群ID */
  ClusterIds?: string[];
  /** 每个资源对应一个dealName，业务需要根据dealName保证发货接口幂等 */
  DealNames?: string[];
  /** 冻结流水 */
  TranId?: string;
  /** 实例id */
  ResourceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateParamTemplateRequest {
  /** 模板名称 */
  TemplateName: string;
  /** mysql版本号 */
  EngineVersion: string;
  /** 模板描述 */
  TemplateDescription?: string;
  /** 可选参数，需要复制的模板ID */
  TemplateId?: number;
  /** 数据库类型，可选值：NORMAL（默认值），SERVERLESS */
  DbMode?: string;
  /** 参数列表 */
  ParamList?: ParamItem[];
}

declare interface CreateParamTemplateResponse {
  /** 模板ID */
  TemplateId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProxyEndPointRequest {
  /** 集群 ID。 */
  ClusterId: string;
  /** 私有网络 ID，默认与集群私有网络 ID 保持一致。 */
  UniqueVpcId: string;
  /** 私有网络子网 ID，默认与集群子网 ID 保持一致。 */
  UniqueSubnetId: string;
  /** 连接池类型：SessionConnectionPool（会话级别连接池）。 */
  ConnectionPoolType?: string;
  /** 是否开启连接池。yes：表示开启。no：表示不开启。 */
  OpenConnectionPool?: string;
  /** 连接池阈值：单位（秒），可选范围：0 - 300秒。 */
  ConnectionPoolTimeOut?: number;
  /** 绑定的安全组 ID 数组。 */
  SecurityGroupIds?: string[];
  /** 描述说明。 */
  Description?: string;
  /** 想要绑定的 vip 信息，需与 UniqueVpcId 对应。 */
  Vip?: string;
  /** 权重模式：system：系统分配。custom：自定义。 */
  WeightMode?: string;
  /** 是否自动添加只读实例。yes：表示自动添加只读实例。no：表示不自动添加只读实例。 */
  AutoAddRo?: string;
  /** 是否开启故障转移。yes：表示开启，开启后，当数据库代理出现故障时，连接地址将会路由到主实例。no：表示不开启。说明：仅当 RwType 参数值为 READWRITE 时，才支持设置此项。 */
  FailOver?: string;
  /** 一致性类型：eventual：最终一致性。global：全局一致性。session：会话一致性。说明：仅当 RwType 参数值为 READWRITE 时，才支持设置此项。 */
  ConsistencyType?: string;
  /** 读写属性：READWRITE：表示读写分离。当此参数值为 READWRITE 时，才支持设置 FailOver、ConsistencyType 参数。READONLY：表示只读。 */
  RwType?: string;
  /** 一致性超时时间。取值范围：0 ~ 1000000（微秒）。设置为0时，表示若只读实例出现延迟导致一致性策略不满足时，请求将一直等待。 */
  ConsistencyTimeOut?: number;
  /** 是否开启事务拆分。开启后，在一个事务中拆分读和写到不同的实例上去执行。 */
  TransSplit?: boolean;
  /** 接入模式：nearby：就近访问。balance：均衡分配。 */
  AccessMode?: string;
  /** 实例权重。 */
  InstanceWeights?: ProxyInstanceWeight[];
}

declare interface CreateProxyEndPointResponse {
  /** 异步流程 ID。 */
  FlowId?: number;
  /** 异步任务 ID。 */
  TaskId?: number;
  /** 数据库代理组 ID。 */
  ProxyGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateProxyRequest {
  /** 集群ID */
  ClusterId: string;
  /** cpu核数 */
  Cpu: number;
  /** 内存 */
  Mem: number;
  /** 私有网络ID，默认与集群私有网络ID保持一致 */
  UniqueVpcId?: string;
  /** 私有网络子网ID，默认与集群子网ID保持一致 */
  UniqueSubnetId?: string;
  /** 数据库代理组节点个数（该参数不再建议使用，建议使用ProxyZones) */
  ProxyCount?: number;
  /** 连接池类型：SessionConnectionPool(会话级别连接池 ) */
  ConnectionPoolType?: string;
  /** 是否开启连接池,yes-开启，no-不开启 */
  OpenConnectionPool?: string;
  /** 连接池阈值：单位（秒） */
  ConnectionPoolTimeOut?: number;
  /** 安全组ID数组 */
  SecurityGroupIds?: string[];
  /** 描述说明 */
  Description?: string;
  /** 数据库节点信息（该参数与ProxyCount需要任选一个输入） */
  ProxyZones?: ProxyZone[];
}

declare interface CreateProxyResponse {
  /** 异步流程ID */
  FlowId?: number;
  /** 异步任务ID */
  TaskId?: number;
  /** 数据库代理组ID */
  ProxyGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateResourcePackageRequest {
  /** 实例类型，目前固定传cynosdb-serverless */
  InstanceType: string;
  /** 资源包使用地域chineseMainland-中国内地通用，overseas-港澳台及海外通用 */
  PackageRegion: string;
  /** 资源包类型：CCU-计算资源包，DISK-存储资源包 */
  PackageType: string;
  /** 资源包版本base-基础版本，common-通用版本，enterprise-企业版本 */
  PackageVersion: string;
  /** 资源包大小，计算资源单位：个；存储资源：GB */
  PackageSpec: number;
  /** 资源包有效期，单位:天 */
  ExpireDay: number;
  /** 购买资源包个数 */
  PackageCount: number;
  /** 资源包名称 */
  PackageName?: string;
}

declare interface CreateResourcePackageResponse {
  /** 付费总订单号 */
  BigDealIds?: string[];
  /** 每个物品对应一个dealName，业务需要根据dealName保证发货接口幂等 */
  DealNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAccountsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 账号数组，包含account和host */
  Accounts?: InputAccount[];
}

declare interface DeleteAccountsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuditLogFileRequest {
  /** 实例ID */
  InstanceId: string;
  /** 审计日志文件名称。 */
  FileName: string;
}

declare interface DeleteAuditLogFileResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAuditRuleTemplatesRequest {
  /** 审计规则模板ID。 */
  RuleTemplateIds: string[];
}

declare interface DeleteAuditRuleTemplatesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBackupRequest {
  /** 集群ID */
  ClusterId: string;
  /** 备份文件ID，旧版本使用的字段，不推荐使用 */
  SnapshotIdList?: number[];
  /** 备份文件ID，推荐使用 */
  BackupIds?: number[];
}

declare interface DeleteBackupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCLSDeliveryRequest {
  /** 实例id */
  InstanceId: string;
  /** 日志主题id */
  CLSTopicIds: string[];
  /** 日志类型 */
  LogType?: string;
  /** 是否维护时间运行 */
  IsInMaintainPeriod?: string;
}

declare interface DeleteCLSDeliveryResponse {
  /** 异步任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterDatabaseRequest {
  /** 集群ID */
  ClusterId: string;
  /** 数据库名 */
  DbNames: string[];
}

declare interface DeleteClusterDatabaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterSaveBackupRequest {
  /** 集群ID */
  ClusterId: string;
  /** 保留备份文件ID，推荐使用 */
  SaveBackupId?: number;
}

declare interface DeleteClusterSaveBackupResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLibraDBClusterAccountsRequest {
  /** 分析集群id */
  ClusterId: string;
  /** 账号 */
  Accounts: InputAccount[];
}

declare interface DeleteLibraDBClusterAccountsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLibraDBClusterRequest {
  /** 分析集群 ID */
  ClusterId: string;
}

declare interface DeleteLibraDBClusterResponse {
  /** flow id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteParamTemplateRequest {
  /** 参数模板ID */
  TemplateId: number;
}

declare interface DeleteParamTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountAllGrantPrivilegesRequest {
  /** 集群id */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
}

declare interface DescribeAccountAllGrantPrivilegesResponse {
  /** 权限语句 */
  PrivilegeStatements?: string[];
  /** 全局权限 */
  GlobalPrivileges?: string[];
  /** 数据库权限 */
  DatabasePrivileges?: DatabasePrivileges[];
  /** 数据库表权限 */
  TablePrivileges?: TablePrivileges[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountPrivilegesRequest {
  /** 集群id */
  ClusterId: string;
  /** 账户名 */
  AccountName: string;
  /** 主机 */
  Host: string;
  /** 数据库名，为*时，忽略Type/TableName, 表示修改用户全局权限； */
  Db: string;
  /** 指定数据库下的对象类型，可选"table"，"*" */
  Type: string;
  /** 当Type="table"时，用来指定表名 */
  TableName?: string;
}

declare interface DescribeAccountPrivilegesResponse {
  /** 权限列表，示例值为：["","select","update","delete","create","drop","references","index","alter","show_db","create_tmp_table","lock_tables","execute","create_view","show_view","create_routine","alter_routine","event","trigger"] */
  Privileges?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 需要过滤的账户列表 */
  AccountNames?: string[];
  /** 数据库类型，取值范围: MYSQL 该参数已废用 */
  DbType?: string;
  /** 需要过滤的账户列表 */
  Hosts?: string[];
  /** 限制量 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 模糊匹配关键字(同时匹配AccountName和AccountHost，返回并集结果，支持正则) */
  AccountRegular?: string;
}

declare interface DescribeAccountsResponse {
  /** 数据库账号列表 */
  AccountSet?: Account[];
  /** 账号总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditInstanceListRequest {
  /** 实例审计开启的状态。1-已开启审计；0-未开启审计。 */
  AuditSwitch?: number;
  /** 查询实例列表的过滤条件。 */
  Filters?: AuditInstanceFilters[];
  /** 实例的审计规则模式。1-规则审计；0-全审计。 */
  AuditMode?: number;
  /** 单次请求返回的数量。默认值为30，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认值为 0。 */
  Offset?: number;
}

declare interface DescribeAuditInstanceListResponse {
  /** 符合查询条件的实例总数。 */
  TotalCount?: number;
  /** 审计实例详细信息列表。 */
  Items?: InstanceAuditStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditLogFilesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 分页大小参数。默认值为 20，最小值为 1，最大值为 100。 */
  Limit?: number;
  /** 分页偏移量。 */
  Offset?: number;
  /** 审计日志文件名。 */
  FileName?: string;
}

declare interface DescribeAuditLogFilesResponse {
  /** 符合条件的审计日志文件个数。 */
  TotalCount?: number;
  /** 审计日志文件详情。 */
  Items?: AuditLogFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditLogsRequest {
  /** 实例 ID。 */
  InstanceId: string;
  /** 开始时间，格式为："2017-07-12 10:29:20"。 */
  StartTime: string;
  /** 结束时间，格式为："2017-07-12 10:29:20"。 */
  EndTime: string;
  /** 排序方式。支持值包括："ASC" - 升序，"DESC" - 降序。 */
  Order?: string;
  /** 排序字段。支持值包括："timestamp" - 时间戳；"affectRows" - 影响行数；"execTime" - 执行时间。 */
  OrderBy?: string;
  /** 已废弃。 */
  Filter?: AuditLogFilter;
  /** 分页参数，单次返回的数据条数。默认值为100，最大值为100。 */
  Limit?: number;
  /** 分页偏移量。说明：Limit 和 Offset 的取值之和需小于等于65536。 */
  Offset?: number;
  /** 过滤条件。多个值之前是且的关系。 */
  LogFilter?: InstanceAuditLogFilter[];
}

declare interface DescribeAuditLogsResponse {
  /** 符合条件的审计日志条数。 */
  TotalCount?: number;
  /** 审计日志详情。 */
  Items?: AuditLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditRuleTemplatesRequest {
  /** 规则模板ID。 */
  RuleTemplateIds?: string[];
  /** 规则模板名称 */
  RuleTemplateNames?: string[];
  /** 单次请求返回的数量。默认值20。 */
  Limit?: number;
  /** 偏移量，默认值为 0。 */
  Offset?: number;
  /** 告警等级。1-低风险，2-中风险，3-高风险。 */
  AlarmLevel?: number;
  /** 告警策略。0-不告警，1-告警。 */
  AlarmPolicy?: number;
}

declare interface DescribeAuditRuleTemplatesResponse {
  /** 符合查询条件的实例总数。 */
  TotalCount?: number;
  /** 规则模板详细信息列表。 */
  Items?: AuditRuleTemplateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditRuleWithInstanceIdsRequest {
  /** 实例ID。目前仅支持单个实例的查询。 */
  InstanceIds: string[];
}

declare interface DescribeAuditRuleWithInstanceIdsResponse {
  /** 无 */
  TotalCount?: number;
  /** 实例审计规则信息。 */
  Items?: InstanceAuditRule[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupConfigRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeBackupConfigResponse {
  /** 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeBeg?: number;
  /** 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeEnd?: number;
  /** 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800 */
  ReserveDuration?: number;
  /** 备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份 */
  BackupFreq?: string[];
  /** 备份方式，logic-逻辑备份，snapshot-快照备份 */
  BackupType?: string;
  /** 跨地域逻辑备份配置修改时间 */
  LogicCrossRegionsConfigUpdateTime?: string;
  /** 自动逻辑备份配置 */
  LogicBackupConfig?: LogicBackupConfigInfo;
  /** 二级快照备份配置信息 */
  SnapshotSecondaryBackupConfig?: BackupConfigInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupDownloadRestrictionRequest {
  /** 集群ID */
  ClusterIds: string[];
}

declare interface DescribeBackupDownloadRestrictionResponse {
  /** 集群备份下载限制 */
  BackupLimitClusterRestrictions?: BackupLimitClusterRestriction[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupDownloadUrlRequest {
  /** 集群ID */
  ClusterId: string;
  /** 备份ID */
  BackupId: number;
  /** 备份下载来源限制条件 */
  DownloadRestriction?: BackupLimitRestriction;
}

declare interface DescribeBackupDownloadUrlResponse {
  /** 备份下载地址 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupDownloadUserRestrictionRequest {
  /** 分页大小 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 是否只查询用户级别下载限制，true-是，false-否 */
  OnlyUserRestriction?: boolean;
}

declare interface DescribeBackupDownloadUserRestrictionResponse {
  /** 集群备份下载限制信息 */
  BackupLimitClusterRestrictions?: BackupLimitClusterRestriction[] | null;
  /** 总条数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupListRequest {
  /** 集群ID */
  ClusterId: string;
  /** 返回数量，取值范围(0,100] */
  Limit?: number;
  /** 记录偏移量，取值范围[0,INF) */
  Offset?: number;
  /** 数据库类型，取值范围: MYSQL */
  DbType?: string;
  /** 备份ID */
  BackupIds?: number[];
  /** 备份类型，可选值：snapshot，快照备份； logic，逻辑备份 */
  BackupType?: string;
  /** 备份方式，可选值：auto，自动备份；manual，手动备份 */
  BackupMethod?: string;
  /** 快照类型，可选值：full，全量；increment，增量 */
  SnapShotType?: string;
  /** 备份开始时间 */
  StartTime?: string;
  /** 备份结束时间 */
  EndTime?: string;
  /** 备份文件名，模糊查询 */
  FileNames?: string[];
  /** 备份备注名，模糊查询 */
  BackupNames?: string[];
  /** 快照备份Id列表 */
  SnapshotIdList?: number[];
  /** 备份地域 */
  BackupRegion?: string;
  /** 是否跨地域备份 */
  IsCrossRegionsBackup?: string;
}

declare interface DescribeBackupListResponse {
  /** 总共备份文件个数 */
  TotalCount?: number;
  /** 备份文件列表 */
  BackupList?: BackupFileInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBinlogConfigRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeBinlogConfigResponse {
  /** Binlog跨地域配置更新时间 */
  BinlogCrossRegionsConfigUpdateTime?: string;
  /** Binlog配置信息 */
  BinlogConfig?: BinlogConfigInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBinlogDownloadUrlRequest {
  /** 集群ID */
  ClusterId: string;
  /** Binlog文件ID */
  BinlogId: number;
  /** 备份下载来源限制条件 */
  DownloadRestriction?: BackupLimitRestriction;
}

declare interface DescribeBinlogDownloadUrlResponse {
  /** 下载地址 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBinlogSaveDaysRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeBinlogSaveDaysResponse {
  /** Binlog保留天数 */
  BinlogSaveDays: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBinlogsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 偏移量 */
  Offset?: number;
  /** 限制条数，默认值为20 */
  Limit?: number;
}

declare interface DescribeBinlogsResponse {
  /** 记录总条数 */
  TotalCount?: number;
  /** Binlog列表 */
  Binlogs?: BinlogItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChangedParamsAfterUpgradeRequest {
  /** 集群ID */
  InstanceId: string;
  /** 变配后的CPU */
  DstCpu: number;
  /** 变配后的MEM，单位G */
  DstMem: number;
}

declare interface DescribeChangedParamsAfterUpgradeResponse {
  /** 参数个数 */
  TotalCount?: number;
  /** 实例参数列表 */
  Items?: ParamItemInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterDatabaseTablesRequest {
  /** 集群id */
  ClusterId: string;
  /** 数据库名 */
  Db: string;
  /** 偏移 */
  Offset?: number;
  /** 个数 */
  Limit?: number;
  /** 数据表类型。"view"表示只返回 view，"base_table" 表示只返回基本表，"all" 表示返回 view 和表。默认为 all。 */
  TableType?: string;
}

declare interface DescribeClusterDatabaseTablesResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 分页限制数量 */
  Limit?: number;
  /** 数据库表列表 */
  Tables?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterDatabasesRequest {
  /** 集群id */
  ClusterId: string;
  /** 分页偏移 */
  Offset?: number;
  /** 分页限制数量 */
  Limit?: number;
}

declare interface DescribeClusterDatabasesResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 分页偏移 */
  Offset?: number;
  /** 数据库列表 */
  Databases?: string[];
  /** 分页限制数 */
  Limit?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterDetailDatabasesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 偏移量，默认0 */
  Offset?: number;
  /** 返回数量，默认20,最大100 */
  Limit?: number;
  /** 数据库名称 */
  DbName?: string;
}

declare interface DescribeClusterDetailDatabasesResponse {
  /** 数据库信息 */
  DbInfos?: DbInfo[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterDetailRequest {
  /** 集群Id */
  ClusterId: string;
}

declare interface DescribeClusterDetailResponse {
  /** 集群详细信息 */
  Detail?: CynosdbClusterDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterInstanceGroupsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterInstanceGroupsResponse {
  /** 实例组个数 */
  TotalCount?: number;
  /** 实例组列表 */
  InstanceGroupInfoList?: CynosdbInstanceGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterInstanceGrpsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterInstanceGrpsResponse {
  /** 实例组个数 */
  TotalCount?: number;
  /** 实例组列表 */
  InstanceGrpInfoList?: CynosdbInstanceGrp[];
  /** 实例组列表 */
  InstanceGroupInfoList?: CynosdbInstanceGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterParamLogsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID列表，用来记录具体操作哪些实例 */
  InstanceIds?: string[];
  /** 排序字段，定义在回返结果的基于哪个字段进行排序 */
  OrderBy?: string;
  /** 定义具体的排序规则，限定为desc,asc,DESC,ASC其中之一 */
  OrderByType?: string;
  /** 返回数量，默认为 20，取值范围为(0,100] */
  Limit?: number;
  /** 记录偏移量，默认值为0，取值范围为[0,INF) */
  Offset?: number;
}

declare interface DescribeClusterParamLogsResponse {
  /** 记录总数 */
  TotalCount?: number;
  /** 参数修改记录 */
  ClusterParamLogs?: ClusterParamModifyLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterParamsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 参数名字 */
  ParamName?: string;
  /** 是否为全局参数 */
  IsGlobal?: string;
}

declare interface DescribeClusterParamsResponse {
  /** 参数个数 */
  TotalCount?: number;
  /** 实例参数列表 */
  Items?: ParamInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterPasswordComplexityRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterPasswordComplexityResponse {
  /** 数据字典参数 */
  ValidatePasswordDictionary?: ParamInfo;
  /** 密码长度 */
  ValidatePasswordLength?: ParamInfo;
  /** 大小写敏感字符个数 */
  ValidatePasswordMixedCaseCount?: ParamInfo;
  /** 数字个数 */
  ValidatePasswordNumberCount?: ParamInfo;
  /** 密码等级 */
  ValidatePasswordPolicy?: ParamInfo;
  /** 特殊字符个数 */
  ValidatePasswordSpecialCharCount?: ParamInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterReadOnlyRequest {
  /** 集群ID列表 */
  ClusterIds: string[];
}

declare interface DescribeClusterReadOnlyResponse {
  /** 集群只读开关列表 */
  ClusterReadOnlyValues?: ClusterReadOnlyValue[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterTransparentEncryptInfoRequest {
  /** 集群id */
  ClusterId: string;
}

declare interface DescribeClusterTransparentEncryptInfoResponse {
  /** 加密秘钥id */
  KeyId?: string;
  /** 加密秘钥地域 */
  KeyRegion?: string;
  /** 秘钥类型 */
  KeyType?: string;
  /** 是否已经开启全局加密 */
  IsOpenGlobalEncryption?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClustersRequest {
  /** 引擎类型：目前支持“MYSQL”， “POSTGRESQL” */
  DbType?: string;
  /** 返回数量，默认为 20，最大值为 100 */
  Limit?: number;
  /** 记录偏移量，默认值为0 */
  Offset?: number;
  /** 排序字段，取值范围： CREATETIME：创建时间 PERIODENDTIME：过期时间 */
  OrderBy?: string;
  /** 排序类型，取值范围： ASC：升序排序 DESC：降序排序 */
  OrderByType?: string;
  /** 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Filters?: QueryFilter[];
}

declare interface DescribeClustersResponse {
  /** 集群数 */
  TotalCount?: number;
  /** 集群列表 */
  ClusterSet?: CynosdbCluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBSecurityGroupsRequest {
  /** 实例ID（InstanceId与InstanceGroupId必须任选一个传入） */
  InstanceId?: string;
  /** 实例组 ID，可通过 [DescribeClusterInstanceGroups](https://cloud.tencent.com/document/product/1003/103934) 接口查询。 */
  InstanceGroupId?: string;
}

declare interface DescribeDBSecurityGroupsResponse {
  /** 安全组信息 */
  Groups?: SecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowRequest {
  /** 任务流ID */
  FlowId: number;
}

declare interface DescribeFlowResponse {
  /** 任务流状态。0-成功，1-失败，2-处理中 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceCLSLogDeliveryRequest {
  /** 实例id */
  InstanceId: string;
  /** 日志类型 */
  LogType?: string;
}

declare interface DescribeInstanceCLSLogDeliveryResponse {
  /** 总数量 */
  TotalCount?: number;
  /** 实例投递信息 */
  InstanceCLSDeliveryInfos?: InstanceCLSDeliveryInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceDetailRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceDetailResponse {
  /** 实例详情 */
  Detail?: CynosdbInstanceDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceErrorLogsRequest {
  /** 实例Id */
  InstanceId: string;
  /** 日志条数限制 */
  Limit?: number;
  /** 日志条数偏移量 */
  Offset?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 排序字段，有Timestamp枚举值 */
  OrderBy?: string;
  /** 排序类型，有ASC,DESC枚举值 */
  OrderByType?: string;
  /** 日志等级，有error、warning、note三种，支持多个等级同时搜索 */
  LogLevels?: string[];
  /** 关键字，支持模糊搜索 */
  KeyWords?: string[];
}

declare interface DescribeInstanceErrorLogsResponse {
  /** 日志条数 */
  TotalCount?: number;
  /** 错误日志列表 */
  ErrorLogs?: CynosdbErrorLogItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceParamsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID，支持批量查询 */
  InstanceIds: string[];
  /** 参数名搜索条件，支持模糊匹配 */
  ParamKeyword?: string;
  /** 是否为全局参数 */
  IsGlobal?: string;
}

declare interface DescribeInstanceParamsResponse {
  /** 实例参数列表 */
  Items?: InstanceParamItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceSlowQueriesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 事务开始最早时间 */
  StartTime?: string;
  /** 事务开始最晚时间 */
  EndTime?: string;
  /** 限制条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 用户名 */
  Username?: string;
  /** 客户端host */
  Host?: string;
  /** 数据库名 */
  Database?: string;
  /** 排序字段，可选值：QueryTime,LockTime,RowsExamined,RowsSent */
  OrderBy?: string;
  /** 排序类型，可选值：asc,desc */
  OrderByType?: string;
  /** sql语句 */
  SqlText?: string;
}

declare interface DescribeInstanceSlowQueriesResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 慢查询记录 */
  SlowQueries?: SlowQueriesItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceSpecsRequest {
  /** 数据库类型，取值范围: MYSQL */
  DbType: string;
  /** 是否需要返回可用区信息 */
  IncludeZoneStocks?: boolean;
  /** 实例机器类型 */
  DeviceType?: string;
}

declare interface DescribeInstanceSpecsResponse {
  /** 规格信息 */
  InstanceSpecSet?: InstanceSpec[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 返回数量，默认为 20，取值范围为(0,100] */
  Limit?: number;
  /** 记录偏移量，默认值为0 */
  Offset?: number;
  /** 排序字段，取值范围： CREATETIME：创建时间 PERIODENDTIME：过期时间 */
  OrderBy?: string;
  /** 排序类型，取值范围： ASC：升序排序 DESC：降序排序 */
  OrderByType?: string;
  /** 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Filters?: QueryFilter[];
  /** 引擎类型：目前支持“MYSQL” */
  DbType?: string;
  /** 实例状态, 可选值:creating 创建中running 运行中isolating 隔离中isolated 已隔离activating 恢复中offlining 下线中offlined 已下线 */
  Status?: string;
  /** 实例id列表 */
  InstanceIds?: string[];
  /** 集群类型，取值范围 CYNOSDB：事务集群 LIBRADB：分析集群 ALL：全部 ，缺省为 ALL */
  ClusterType?: string;
}

declare interface DescribeInstancesResponse {
  /** 实例个数 */
  TotalCount?: number;
  /** 实例列表 */
  InstanceSet?: CynosdbInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesWithinSameClusterRequest {
  /** vpcId */
  UniqVpcId: string;
  /** vip */
  Vip: string;
}

declare interface DescribeInstancesWithinSameClusterResponse {
  /** 实例个数 */
  TotalCount?: number;
  /** 实例ID列表 */
  InstanceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIntegrateTaskRequest {
  /** 大订单id，大订单id和子订单id必须二选一 */
  BigDealId?: string;
  /** 订单列表 */
  DealNames?: string[];
}

declare interface DescribeIntegrateTaskResponse {
  /** 当前步骤 */
  CurrentStep?: string;
  /** 当前进度 */
  CurrentProgress?: string;
  /** 任务状态 */
  TaskStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIsolatedInstancesRequest {
  /** 返回数量，默认为 20，最大值为 100 */
  Limit?: number;
  /** 记录偏移量，默认值为0 */
  Offset?: number;
  /** 排序字段，取值范围： CREATETIME：创建时间 PERIODENDTIME：过期时间 */
  OrderBy?: string;
  /** 排序类型，取值范围： ASC：升序排序 DESC：降序排序 */
  OrderByType?: string;
  /** 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Filters?: QueryFilter[];
  /** 引擎类型：目前支持“MYSQL”， “POSTGRESQL” */
  DbType?: string;
}

declare interface DescribeIsolatedInstancesResponse {
  /** 实例个数 */
  TotalCount?: number;
  /** 实例列表 */
  InstanceSet?: CynosdbInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBClusterAccountAllPrivilegesRequest {
  /** 分析集群id */
  ClusterId: string;
  /** 账号 */
  Account: InputAccount;
}

declare interface DescribeLibraDBClusterAccountAllPrivilegesResponse {
  /** 权限语句 */
  PrivilegeStatements?: string[] | null;
  /** 全局权限 */
  GlobalPrivileges?: string[] | null;
  /** 数据库权限 */
  DatabasePrivileges?: DatabasePrivileges[] | null;
  /** 表权限 */
  TablePrivileges?: TablePrivileges[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBClusterAccountPrivilegesRequest {
  /** 集群id */
  ClusterId: string;
  /** 账号名 */
  AccountName: string;
  /** 主机名 */
  Host: string;
  /** 数据库名 */
  Db: string;
  /** 类型 */
  Type: string;
  /** 表名 */
  TableName?: string;
}

declare interface DescribeLibraDBClusterAccountPrivilegesResponse {
  /** 权限列表 */
  Privileges?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBClusterAccountsRequest {
  /** 分析集群id */
  ClusterId: string;
  /** 账号名 */
  AccountNames?: string[];
  /** 模糊匹配关键字 */
  AccountRegular?: string;
  /** 主机名 */
  Hosts?: string[];
  /** 限制 */
  Limit?: number;
  /** 偏移 */
  Offset?: number;
}

declare interface DescribeLibraDBClusterAccountsResponse {
  /** 账号信息 */
  AccountSet?: Account[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBClusterAutoMapRuleRequest {
  /** 分析集群ID */
  ClusterId: string;
  /** 分析实例ID */
  InstanceId: string;
}

declare interface DescribeLibraDBClusterAutoMapRuleResponse {
  /** 高级映射规则 */
  AutoMapRules?: AutoMapRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBClusterDetailRequest {
  /** 分析集群 ID */
  ClusterId: string;
  /** 是否获取更多服务器信息，可选值yes no */
  GetServerInfo?: string;
}

declare interface DescribeLibraDBClusterDetailResponse {
  /** 集群信息 */
  Detail?: LibraDBClusterDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBClusterTableMappingRequest {
  /** 分析集群ID */
  ClusterId: string;
  /** 分析引擎实例ID */
  InstanceId: string;
  /** 节点ID */
  NodeId?: string;
  /** 偏移量 */
  Offset?: number;
  /** 页面记录限制 */
  Limit?: number;
  /** 源端schema列表 */
  SrcSchemas?: string[];
  /** 源端表列表 */
  SrcTableName?: string[];
  /** 状态列表 */
  StatusList?: string[];
  /** 映射数据库名称 */
  MapSchemas?: string[];
  /** 映射表名 */
  MapTableName?: string[];
  /** 是否查询映射数据库名称不为空的记录 */
  MapSchemaNotEmpty?: boolean;
  /** 是否查询映射表名不为空的记录 */
  MapTableNameNotEmpty?: boolean;
}

declare interface DescribeLibraDBClusterTableMappingResponse {
  /** 总记录数 */
  TotalCnt?: number;
  /** 数据库映射信息 */
  TableMappings?: TableMappingObject[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBClustersRequest {
  /** 限制 */
  Limit?: number;
  /** 偏置 */
  Offset?: number;
  /** 排序字段 */
  OrderBy?: string;
  /** 排序方法 */
  OrderByType?: string;
  /** 过滤条件 */
  Filters?: QueryFilter[];
}

declare interface DescribeLibraDBClustersResponse {
  /** 集群信息 */
  ClusterSet?: LibraDBClusterSet[];
  /** 集群数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBDataSourceRequest {
  /** 分析集群ID */
  ClusterId: string;
  /** 只读分析引擎实例ID */
  InstanceId: string;
}

declare interface DescribeLibraDBDataSourceResponse {
  /** 源端信息列表 */
  DataSourceList?: DataSourceItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBForwardConfigRequest {
  /** 只读分析引擎实例id */
  InstanceId: string;
}

declare interface DescribeLibraDBForwardConfigResponse {
  /** 是否开启转发 */
  ForwardMode?: string;
  /** 转发列表 */
  ForwardList?: ForwardInstanceInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBInstanceDetailRequest {
  /** 集群ID */
  ClusterId: string;
  /** 只读分析引擎实例 ID */
  InstanceId: string;
}

declare interface DescribeLibraDBInstanceDetailResponse {
  /** 主账号 */
  Uin?: string | null;
  /** 账号唯一ID */
  AppId?: number | null;
  /** 集群ID */
  ClusterId?: string | null;
  /** 集群名称 */
  ClusterName?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 实例名称 */
  InstanceName?: string | null;
  /** 项目ID */
  ProjectId?: number | null;
  /** 地域 */
  Region?: string | null;
  /** 可用区 */
  Zone?: string | null;
  /** 实例状态 */
  Status?: string | null;
  /** 状态描述 */
  StatusDesc?: string | null;
  /** Libra分析引擎版本 */
  LibraDBVersion?: string | null;
  /** cpu核数 */
  Cpu?: number | null;
  /** 内存大小 */
  Memory?: number | null;
  /** 存储大小 */
  Storage?: number | null;
  /** 存储类型 */
  StorageType?: string | null;
  /** 实例类型 */
  InstanceType?: string | null;
  /** 实例角色 */
  InstanceRole?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 售卖方式 */
  PayMode?: number | null;
  /** 售卖开始时间 */
  PeriodStartTime?: string | null;
  /** 售卖结束时间 */
  PeriodEndTime?: string | null;
  /** 续费标识 */
  RenewFlag?: number | null;
  /** 网络类型 */
  NetType?: number | null;
  /** 私有网络ID */
  VpcId?: string | null;
  /** 子网ID */
  SubnetId?: string | null;
  /** 虚拟IP */
  Vip?: string | null;
  /** 端口 */
  Vport?: number | null;
  /** 实例网络信息 */
  InstanceNetInfo?: InstanceNetInfo | null;
  /** 实例标签信息 */
  ResourceTags?: Tag[] | null;
  /** 实例节点信息 */
  NodeInfo?: LibraDBNodeInfo[];
  /** 实例节点个数 */
  NodeCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBInstanceSpecsRequest {
}

declare interface DescribeLibraDBInstanceSpecsResponse {
  /** 该地域实例规格信息列表 */
  InstanceSpecSet?: RegionInstanceSpecInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBSlowLogsRequest {
  /** 只读分析引擎实例 ID */
  InstanceId?: string;
  /** 开始时间,1753171200。 */
  StartTime?: number;
  /** 结束时间,1753171200。 */
  EndTime?: number;
  /** 日志单页条数限制:0-200。 */
  Limit?: string;
  /** 日志分页，大于0。 */
  Offset?: string;
  /** 日志排序方式，DESC-降序，ASC-升序。 */
  Order?: string;
  /** 日志排序条件。 */
  OrderBy?: string;
  /** 过滤条件。 */
  LogFilter?: LogFilter[];
}

declare interface DescribeLibraDBSlowLogsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLibraDBVersionRequest {
}

declare interface DescribeLibraDBVersionResponse {
  /** 版本列表 */
  VersionList?: LibraDBVersion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMaintainPeriodRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeMaintainPeriodResponse {
  /** 维护week days */
  MaintainWeekDays?: string[];
  /** 维护开始时间，单位秒 */
  MaintainStartTime?: number;
  /** 维护时长，单位秒 */
  MaintainDuration?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeParamTemplateDetailRequest {
  /** 参数模板ID */
  TemplateId: number;
}

declare interface DescribeParamTemplateDetailResponse {
  /** 参数模板ID */
  TemplateId?: number;
  /** 参数模板名称 */
  TemplateName?: string;
  /** 参数模板描述 */
  TemplateDescription?: string;
  /** 引擎版本 */
  EngineVersion?: string;
  /** 参数总条数 */
  TotalCount?: number;
  /** 参数列表 */
  Items?: ParamDetail[];
  /** 数据库类型，可选值：NORMAL，SERVERLESS */
  DbMode?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeParamTemplatesRequest {
  /** 数据库引擎版本号 */
  EngineVersions?: string[];
  /** 模板名称 */
  TemplateNames?: string[];
  /** 模板ID */
  TemplateIds?: number[];
  /** 数据库类型，可选值：NORMAL，SERVERLESS */
  DbModes?: string[];
  /** 查询偏移量 */
  Offset?: number;
  /** 查询限制条数 */
  Limit?: number;
  /** 查询的模板对应的产品类型 */
  Products?: string[];
  /** 模板类型 */
  TemplateTypes?: string[];
  /** 版本类型 */
  EngineTypes?: string[];
  /** 返回结果的排序字段 */
  OrderBy?: string;
  /** 排序方式（asc、desc） */
  OrderDirection?: string;
}

declare interface DescribeParamTemplatesResponse {
  /** 参数模板数量 */
  TotalCount?: number;
  /** 参数模板信息 */
  Items?: ParamTemplateListInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProjectSecurityGroupsRequest {
  /** 项目ID */
  ProjectId?: number;
  /** 限制量 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 搜索关键字 */
  SearchKey?: string;
}

declare interface DescribeProjectSecurityGroupsResponse {
  /** 安全组详情 */
  Groups?: SecurityGroup[];
  /** 总数量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxiesRequest {
  /** 集群 ID（该参数必传，例如 cynosdbmysql-2u2mh111）。 */
  ClusterId?: string;
  /** 返回数量，默认为 20，最大值为 100 */
  Limit?: number;
  /** 记录偏移量，默认值为0 */
  Offset?: number;
  /** 排序字段，取值范围： CREATETIME：创建时间 PERIODENDTIME：过期时间 */
  OrderBy?: string;
  /** 排序类型，取值范围： ASC：升序排序 DESC：降序排序 */
  OrderByType?: string;
  /** 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Filters?: QueryParamFilter[];
}

declare interface DescribeProxiesResponse {
  /** 数据库代理组数 */
  TotalCount?: number;
  /** 数据库代理组列表 */
  ProxyGroupInfos?: ProxyGroupInfo[];
  /** 数据库代理节点 */
  ProxyNodeInfos?: ProxyNodeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxyNodesRequest {
  /** 返回数量，默认为 20，最大值为 100 */
  Limit?: number;
  /** 记录偏移量，默认值为0 */
  Offset?: number;
  /** 排序字段，取值范围： CREATETIME：创建时间 PERIODENDTIME：过期时间 */
  OrderBy?: string;
  /** 排序类型，取值范围： ASC：升序排序 DESC：降序排序 */
  OrderByType?: string;
  /** 搜索条件，若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。目前支持的搜索字段：Status、ProxyNodeId、ClusterId、OssProxyNodeName。 */
  Filters?: QueryFilter[];
}

declare interface DescribeProxyNodesResponse {
  /** 数据库代理节点总数 */
  TotalCount?: number;
  /** 数据库代理节点列表 */
  ProxyNodeInfos?: ProxyNodeInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProxySpecsRequest {
  /** 集群id */
  ClusterId?: string;
}

declare interface DescribeProxySpecsResponse {
  /** 数据库代理规格列表 */
  ProxySpecs?: ProxySpec[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRedoLogsRequest {
  /** 集群id */
  ClusterId: string;
  /** 每页条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** redolog文件名 */
  FileNames?: string[];
}

declare interface DescribeRedoLogsResponse {
  /** 总条数 */
  TotalCount?: number;
  /** redo日志信息 */
  RedoLogs?: RedoLogItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourcePackageDetailRequest {
  /** 资源包唯一ID */
  PackageId: string;
  /** 集群ID */
  ClusterIds?: string[];
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 偏移量 */
  Offset?: string;
  /** 限制 */
  Limit?: string;
  /** 实例D */
  InstanceIds?: string[];
}

declare interface DescribeResourcePackageDetailResponse {
  /** 资源包抵扣总数 */
  Total?: number;
  /** 资源包明细说明 */
  Detail?: PackageDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourcePackageListRequest {
  /** 资源包唯一ID */
  PackageId?: string[];
  /** 资源包名称 */
  PackageName?: string[];
  /** 资源包类型CCU-计算资源包，DISK-存储资源包 */
  PackageType?: string[];
  /** 资源包使用地域china-中国内地通用，overseas-港澳台及海外通用 */
  PackageRegion?: string[];
  /** 资源包状态creating-创建中；using-使用中；expired-已过期；normal_finish-使用完；apply_refund-申请退费中；refund-已退费。 */
  Status?: string[];
  /** 排序条件，支持排序条件:startTime-生效时间，expireTime-过期时间，packageUsedSpec-使用容量，packageTotalSpec-总存储量。按照数组顺序排列； */
  OrderBy?: string[];
  /** 排序方式，DESC-降序，ASC-升序 */
  OrderDirection?: string;
  /** 偏移量 */
  Offset?: number;
  /** 限制 */
  Limit?: number;
}

declare interface DescribeResourcePackageListResponse {
  /** 资源包总数 */
  Total?: number;
  /** 资源包明细 */
  Detail?: Package[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourcePackageSaleSpecRequest {
  /** 实例类型 */
  InstanceType: string;
  /** 资源包使用地域china-中国内地通用，overseas-港澳台及海外通用 */
  PackageRegion: string;
  /** 资源包类型CCU-计算资源包DISK-存储资源包 */
  PackageType: string;
  /** 偏移量 */
  Offset?: number;
  /** 限制 */
  Limit?: number;
}

declare interface DescribeResourcePackageSaleSpecResponse {
  /** 可售卖资源包规格总数 */
  Total?: number;
  /** 资源包明细说明 */
  Detail?: SalePackageSpec[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourcesByDealNameRequest {
  /** 计费订单ID（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）。DealName与DealNames至少应输入一项，两者都传时以DealName为准。 */
  DealName?: string;
  /** 计费订单ID列表，可以一次查询若干条订单ID对应资源信息（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功）。DealName与DealNames至少应输入一项，两者都传时以DealName为准。 */
  DealNames?: string[];
}

declare interface DescribeResourcesByDealNameResponse {
  /** 计费资源id信息数组 */
  BillingResourceInfos?: BillingResourceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRollbackTimeRangeRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeRollbackTimeRangeResponse {
  /** 有效回归时间范围开始时间点（已废弃） */
  TimeRangeStart?: string;
  /** 有效回归时间范围结束时间点（已废弃） */
  TimeRangeEnd?: string;
  /** 可回档时间范围 */
  RollbackTimeRanges?: RollbackTimeRange[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSSLStatusRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID */
  InstanceId?: string;
}

declare interface DescribeSSLStatusResponse {
  /** yes-开启，no-关闭 */
  IsOpenSSL?: string;
  /** 证书下载地址 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSaveBackupClustersRequest {
  /** 每页条数 */
  Limit: number;
  /** 偏移量 */
  Offset?: number;
  /** 检索条件 */
  Filters?: QuerySimpleFilter[];
}

declare interface DescribeSaveBackupClustersResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 遗留备份信息 */
  SaveBackupClusterInfos?: SaveBackupClusterInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServerlessInstanceSpecsRequest {
  /** 可用区 */
  Zone?: string;
}

declare interface DescribeServerlessInstanceSpecsResponse {
  /** Serverless实例可选规格 */
  Specs?: ServerlessSpec[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServerlessStrategyRequest {
  /** serverless集群id */
  ClusterId: string;
}

declare interface DescribeServerlessStrategyResponse {
  /** cpu负载为 0 时持续多久（秒）发起自动暂停 */
  AutoPauseDelay?: number;
  /** cpu负载超过当前规格核数时，持续多久（秒）发起自动扩容 */
  AutoScaleUpDelay?: number;
  /** cpu 负载低于低一级规格核数时，持续多久（秒）发起自动缩容 */
  AutoScaleDownDelay?: number;
  /** 是否自动暂停，可能值：yesno */
  AutoPause?: string;
  /** 集群是否允许向上扩容，可选范围yesno */
  AutoScaleUp?: string;
  /** 集群是否允许向下缩容，可选范围yesno */
  AutoScaleDown?: string;
  /** 是否开启归档，可选范围yesno默认值:yes */
  AutoArchive?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlaveZonesRequest {
  /** 可用区 */
  Zone: string;
  /** 云架集群ID */
  OssClusterId?: number;
}

declare interface DescribeSlaveZonesResponse {
  /** 从可用区 */
  SlaveZones?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSupportProxyVersionRequest {
  /** 集群ID */
  ClusterId: string;
  /** 数据库代理组ID */
  ProxyGroupId?: string;
}

declare interface DescribeSupportProxyVersionResponse {
  /** 支持的数据库代理版本集合 */
  SupportProxyVersions?: string[];
  /** 当前proxy版本号 */
  CurrentProxyVersion?: string;
  /** 代理版本详情 */
  SupportProxyVersionDetail?: ProxyVersionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTasksRequest {
  /** 任务开始时间起始值 */
  StartTimeBegin?: string;
  /** 任务开始时间结束值 */
  StartTimeEnd?: string;
  /** 过滤条件，支持的搜索字段："ClusterId"、"ClusterName"、"InstanceId"、"InstanceName"、"Status"、"TaskId"、"TaskType" */
  Filters?: QueryFilter[];
  /** 查询列表长度 */
  Limit?: number;
  /** 查询列表偏移量 */
  Offset?: number;
}

declare interface DescribeTasksResponse {
  /** 任务列表总条数 */
  TotalCount?: number;
  /** 任务列表 */
  TaskList?: BizTaskInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
  /** 是否包含虚拟区 */
  IncludeVirtualZones?: boolean;
  /** 是否展示地域下所有可用区，并显示用户每个可用区权限 */
  ShowPermission?: boolean;
}

declare interface DescribeZonesResponse {
  /** 地域信息 */
  RegionSet?: SaleRegion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 实例组 ID 数组，cynosdbmysql-grp-前缀开头或集群 ID。说明：要获取集群的实例组 ID，可通过 [查询集群实例组](https://cloud.tencent.com/document/product/1003/103934) 进行。 */
  InstanceIds: string[];
  /** 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。 */
  SecurityGroupIds: string[];
  /** 可用区。说明：请正确输入集群所在的主可用区，若输入非集群所在的主可用区可能显示调用成功，但实际执行会失败。 */
  Zone: string;
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadLibraDBClusterListRequest {
  /** 限制数 */
  Limit?: number;
  /** 偏移值 */
  Offset?: number;
  /** 排序字段 */
  OrderBy?: string;
  /** 排序方式，desc,asc,DESC,ASC */
  OrderByType?: string;
  /** 过滤条件 */
  Filters?: QueryFilter[];
}

declare interface DownloadLibraDBClusterListResponse {
  /** 分析集群信息 */
  ClusterSet?: LibraClusterSet[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportInstanceErrorLogsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 日志最早时间 */
  StartTime?: string;
  /** 日志最晚时间 */
  EndTime?: string;
  /** 限制条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 日志等级 */
  LogLevels?: string[];
  /** 关键字 */
  KeyWords?: string[];
  /** 文件类型，可选值：csv, original */
  FileType?: string;
  /** 可选值Timestamp */
  OrderBy?: string;
  /** 排序类型，ASC 或 DESC。 */
  OrderByType?: string;
}

declare interface ExportInstanceErrorLogsResponse {
  /** 错误日志导出内容 */
  ErrorLogItems?: ErrorLogItemExport[];
  /** 错误日志字符串 */
  FileContent?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportInstanceSlowQueriesRequest {
  /** 实例ID */
  InstanceId: string;
  /** 事务开始最早时间 */
  StartTime?: string;
  /** 事务开始最晚时间 */
  EndTime?: string;
  /** 限制条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 用户名 */
  Username?: string;
  /** 客户端host */
  Host?: string;
  /** 数据库名 */
  Database?: string;
  /** 文件类型，可选值：csv, original */
  FileType?: string;
  /** 排序字段，可选值： QueryTime,LockTime,RowsExamined,RowsSent */
  OrderBy?: string;
  /** 排序类型，可选值：asc,desc */
  OrderByType?: string;
}

declare interface ExportInstanceSlowQueriesResponse {
  /** 慢查询导出内容 */
  FileContent?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportResourcePackageDeductDetailsRequest {
  /** 需要导出的资源包ID */
  PackageId: string;
  /** 使用资源包容量的cynos集群ID */
  ClusterIds?: string[];
  /** 排序字段，目前支持：createTime（资源包被抵扣时间），successDeductSpec（资源包抵扣量） */
  OrderBy?: string;
  /** 排序类型，支持ASC、DESC、asc、desc */
  OrderByType?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 单次最大导出数据行数，目前最大支持2000行 */
  Limit?: string;
  /** 偏移量页数 */
  Offset?: string;
  /** 导出数据格式，目前仅支持csv格式，留作扩展 */
  FileType?: string;
}

declare interface ExportResourcePackageDeductDetailsResponse {
  /** 文件详情 */
  FileContent?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GrantAccountPrivilegesRequest {
  /** 集群id */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
  /** 数据库表权限码数组 */
  DbTablePrivileges: string[];
  /** 数据库表信息 */
  DbTables: DbTable[];
}

declare interface GrantAccountPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceCreateRequest {
  /** 可用区,每个地域提供最佳实践 */
  Zone: string;
  /** 购买计算节点个数 */
  GoodsNum: number;
  /** 实例购买类型，可选值为：PREPAID, POSTPAID, SERVERLESS */
  InstancePayMode: string;
  /** 存储购买类型，可选值为：PREPAID, POSTPAID */
  StoragePayMode: string;
  /** 实例设备类型，支持值如下：- common：表示通用型- exclusive：表示独享型 */
  DeviceType?: string;
  /** CPU核数，PREPAID与POSTPAID实例类型必传 */
  Cpu?: number;
  /** 内存大小，单位G，PREPAID与POSTPAID实例类型必传 */
  Memory?: number;
  /** Ccu大小，serverless类型必传 */
  Ccu?: number;
  /** 存储大小，PREPAID存储类型必传 */
  StorageLimit?: number;
  /** 购买时长，PREPAID购买类型必传 */
  TimeSpan?: number;
  /** 时长单位，可选值为：m,d。PREPAID购买类型必传 */
  TimeUnit?: string;
}

declare interface InquirePriceCreateResponse {
  /** 实例价格 */
  InstancePrice?: TradePrice;
  /** 存储价格 */
  StoragePrice?: TradePrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceModifyRequest {
  /** 集群ID */
  ClusterId: string;
  /** CPU核数 */
  Cpu?: number;
  /** 内存大小 */
  Memory?: number;
  /** 存储大小，存储资源变配：ClusterId,StorageLimit */
  StorageLimit?: number;
  /** 实例ID，计算资源变配必传: ClusterId,InstanceId,Cpu,Memory */
  InstanceId?: string;
  /** 实例设备类型 */
  DeviceType?: string;
  /** serverless实例ccu大小 */
  Ccu?: number;
}

declare interface InquirePriceModifyResponse {
  /** 实例价格 */
  InstancePrice?: TradePrice;
  /** 存储价格 */
  StoragePrice?: TradePrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceMultiSpecRequest {
  /** 可用区,每个地域提供最佳实践 */
  Zone: string;
  /** 实例购买类型，可选值为：PREPAID, POSTPAID, SERVERLESS */
  InstancePayMode: string;
  /** 存储购买类型，可选值为：PREPAID, POSTPAID */
  StoragePayMode: string;
  /** 商品规格 */
  GoodsSpecs: GoodsSpec[];
}

declare interface InquirePriceMultiSpecResponse {
  /** 商品价格 */
  GoodsPrice?: GoodsPrice[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceRenewRequest {
  /** 集群ID */
  ClusterId: string;
  /** 购买时长,与TimeUnit组合才能生效 */
  TimeSpan: number;
  /** 购买时长单位, 与TimeSpan组合生效，可选:日:d,月:m */
  TimeUnit: string;
}

declare interface InquirePriceRenewResponse {
  /** 集群ID */
  ClusterId?: string;
  /** 实例ID列表 */
  InstanceIds?: string[];
  /** 对应的询价结果数组 */
  Prices?: TradePrice[];
  /** 续费计算节点的总价格 */
  InstanceRealTotalPrice?: number;
  /** 续费存储节点的总价格 */
  StorageRealTotalPrice?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 该参数已废用 */
  DbType?: string;
  /** 实例退还原因类型 */
  IsolateReasonTypes?: number[];
  /** 实例退还原因补充 */
  IsolateReason?: string;
  /** 保留备份,true-保留（会产生费用） */
  SaveBackup?: boolean;
}

declare interface IsolateClusterResponse {
  /** 任务流ID(后付费或者serverless资源返回，如果需要同步任务状态，请使用DescribeFlow接口) */
  FlowId?: number;
  /** 退款订单号(预付费资源返回，如果需要同步订单状态，请使用计费产品的DescribeDealsByCond同步订单状态) */
  DealNames?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID数组，例如["cynosdbbmysql-ins-asd","cynosdbmysql-ins-zxc"] */
  InstanceIdList: string[];
  /** 该参数已废弃 */
  DbType?: string;
  /** 实例退还原因类型 */
  IsolateReasonTypes?: number[];
  /** 实例退还原因补充 */
  IsolateReason?: string;
  /** 保留备份 */
  SaveBackup?: boolean;
}

declare interface IsolateInstanceResponse {
  /** 任务流id */
  FlowId?: number;
  /** 隔离实例的订单id（预付费实例） */
  DealNames?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateLibraDBClusterRequest {
  /** 分析集群 ID */
  ClusterId: string;
  /** 隔离原因类型 */
  IsolateReasonTypes?: number[];
  /** 隔离原因 */
  IsolateReason?: string;
}

declare interface IsolateLibraDBClusterResponse {
  /** flow id */
  FlowId?: number;
  /** 返回订单号 */
  DealNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateLibraDBInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 只读分析引擎实例 ID 列表 */
  InstanceIdList: string[];
  /** 是否是强制隔离 */
  ForceIsolate?: boolean;
  /** 隔离原因类型 */
  IsolateReasonTypes?: number[];
  /** 隔离原因 */
  IsolateReason?: string;
}

declare interface IsolateLibraDBInstanceResponse {
  /** 任务流id */
  FlowId?: number | null;
  /** 订单号列表 */
  DealNames?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountDescriptionRequest {
  /** 数据库账号名 */
  AccountName: string;
  /** 数据库账号描述信息 */
  Description: string;
  /** 集群ID */
  ClusterId: string;
  /** 主机，默认为"%" */
  Host?: string;
}

declare interface ModifyAccountDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountHostRequest {
  /** 集群id */
  ClusterId: string;
  /** 新主机 */
  NewHost: string;
  /** 账号信息 */
  Account: InputAccount;
}

declare interface ModifyAccountHostResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountParamsRequest {
  /** 集群id，不超过32个字符 */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
  /** 数据库表权限数组,当前仅支持参数：max_user_connections，max_user_connections不能大于10240 */
  AccountParams: AccountParam[];
}

declare interface ModifyAccountParamsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountPrivilegesRequest {
  /** 集群id */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
  /** 全局权限数组 */
  GlobalPrivileges?: string[];
  /** 数据库权限数组 */
  DatabasePrivileges?: DatabasePrivileges[];
  /** 表权限数组 */
  TablePrivileges?: TablePrivileges[];
}

declare interface ModifyAccountPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAuditRuleTemplatesRequest {
  /** 审计规则模板ID。 */
  RuleTemplateIds: string[];
  /** 修改后的审计规则。 */
  RuleFilters?: RuleFilters[];
  /** 修改后的规则模板名称。 */
  RuleTemplateName?: string;
  /** 修改后的规则模板描述。 */
  Description?: string;
  /** 告警等级。1-低风险，2-中风险，3-高风险。 */
  AlarmLevel?: number;
  /** 告警策略。0-不告警，1-告警。 */
  AlarmPolicy?: number;
}

declare interface ModifyAuditRuleTemplatesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAuditServiceRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 日志保留时长。 */
  LogExpireDay?: number;
  /** 高频日志保留时长。 */
  HighLogExpireDay?: number;
  /** 修改实例审计规则为全审计。 */
  AuditAll?: boolean;
  /** 规则审计。 */
  AuditRuleFilters?: AuditRuleFilters[];
  /** 规则模板ID。 */
  RuleTemplateIds?: string[];
}

declare interface ModifyAuditServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupConfigRequest {
  /** 集群ID */
  ClusterId: string;
  /** 表示全备开始时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeBeg?: number;
  /** 表示全备结束时间，[0-24*3600]， 如0:00, 1:00, 2:00 分别为 0，3600， 7200 */
  BackupTimeEnd?: number;
  /** 表示保留备份时长, 单位秒，超过该时间将被清理, 七天表示为3600*24*7=604800，最大为158112000 */
  ReserveDuration?: number;
  /** 该参数目前不支持修改，无需填写。备份频率，长度为7的数组，分别对应周一到周日的备份方式，full-全量备份，increment-增量备份 */
  BackupFreq?: string[];
  /** 该参数目前不支持修改，无需填写。 */
  BackupType?: string;
  /** 逻辑备份配置 */
  LogicBackupConfig?: LogicBackupConfigInfo;
  /** 是否删除自动逻辑备份 */
  DeleteAutoLogicBackup?: boolean;
  /** 二级快照备份参数 */
  SnapshotSecondaryBackupConfig?: SnapshotBackupConfig;
}

declare interface ModifyBackupConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupDownloadRestrictionRequest {
  /** 集群ID */
  ClusterIds: string[];
  /** 下载限制类型，NoLimit-不限制,LimitOnlyIntranet-限制内网 ,Customize-自定义 */
  LimitType: string;
  /** 该参数仅支持 In， 表示 LimitVpc 指定的vpc可以下载。默认为In */
  VpcComparisonSymbol?: string;
  /** In: 指定的ip可以下载； NotIn: 指定的ip不可以下载 */
  IpComparisonSymbol?: string;
  /** 限制下载的vpc设置 */
  LimitVpcs?: BackupLimitVpcItem[];
  /** 限制下载的ip设置 */
  LimitIps?: string[];
}

declare interface ModifyBackupDownloadRestrictionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupDownloadUserRestrictionRequest {
  /** 下载限制类型，NoLimit-不限制,LimitOnlyIntranet-限制内网 ,Customize-自定义 */
  LimitType: string;
  /** 该参数仅支持 In， 表示 LimitVpc 指定的vpc可以下载。默认为In */
  VpcComparisonSymbol?: string;
  /** In: 指定的ip可以下载； NotIn: 指定的ip不可以下载 */
  IpComparisonSymbol?: string;
  /** 限制下载的vpc设置 */
  LimitVpcs?: BackupLimitVpcItem[];
  /** 限制下载的ip设置 */
  LimitIps?: string[];
}

declare interface ModifyBackupDownloadUserRestrictionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBackupNameRequest {
  /** 集群ID */
  ClusterId: string;
  /** 备份文件ID */
  BackupId: number;
  /** 备注名，长度不能超过60个字符 */
  BackupName: string;
}

declare interface ModifyBackupNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBinlogConfigRequest {
  /** 集群ID */
  ClusterId: string;
  /** Binlog配置信息 */
  BinlogConfig: BinlogConfigInfo;
}

declare interface ModifyBinlogConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBinlogSaveDaysRequest {
  /** 集群ID */
  ClusterId: string;
  /** Binlog保留天数 */
  BinlogSaveDays: number;
}

declare interface ModifyBinlogSaveDaysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterDatabaseRequest {
  /** 集群ID */
  ClusterId: string;
  /** 数据库名 */
  DbName: string;
  /** 新授权用户主机权限 */
  NewUserHostPrivileges?: UserHostPrivilege[];
  /** 备注 */
  Description?: string;
  /** 历史授权用户主机权限 */
  OldUserHostPrivileges?: UserHostPrivilege[];
}

declare interface ModifyClusterDatabaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterGlobalEncryptionRequest {
  /** 集群id */
  ClusterId: string;
  /** 开启或关闭全局加密 */
  IsOpenGlobalEncryption?: boolean;
}

declare interface ModifyClusterGlobalEncryptionResponse {
  /** 异步任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterNameRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群名 */
  ClusterName: string;
}

declare interface ModifyClusterNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterParamRequest {
  /** 集群ID */
  ClusterId: string;
  /** 要修改的参数列表。每一个元素是ParamName、CurrentValue和OldValue的组合。ParamName是参数名称，CurrentValue是当前值，OldValue是之前值且不做校验 */
  ParamList: ParamItem[];
  /** 维护期间执行-yes,立即执行-no */
  IsInMaintainPeriod?: string;
}

declare interface ModifyClusterParamResponse {
  /** 异步请求Id，用于查询结果 */
  AsyncRequestId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterPasswordComplexityRequest {
  /** 集群id */
  ClusterId: string;
  /** 密码长度 */
  ValidatePasswordLength: number;
  /** 大小写字符个数 */
  ValidatePasswordMixedCaseCount: number;
  /** 特殊字符个数 */
  ValidatePasswordSpecialCharCount: number;
  /** 数字个数 */
  ValidatePasswordNumberCount: number;
  /** 密码强度（"MEDIUM", "STRONG"） */
  ValidatePasswordPolicy: string;
  /** 数据字典 */
  ValidatePasswordDictionary?: string[];
}

declare interface ModifyClusterPasswordComplexityResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterReadOnlyRequest {
  /** 集群ID列表 */
  ClusterIds: string[];
  /** 集群只读开关，可选值：ON，OFF */
  ReadOnlyOperation: string;
  /** yes：在运维时间窗内修改，no：立即执行（默认值） */
  IsInMaintainPeriod?: string;
}

declare interface ModifyClusterReadOnlyResponse {
  /** 集群任务ID列表 */
  ClusterTaskIds?: ClusterTaskId[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterSlaveZoneRequest {
  /** 集群Id */
  ClusterId: string;
  /** 旧从可用区 */
  OldSlaveZone: string;
  /** 新从可用区 */
  NewSlaveZone: string;
  /** binlog同步方式。默认值：async。可选值：sync、semisync、async */
  BinlogSyncWay?: string;
  /** 半同步超时时间，单位ms。为保证业务稳定性，半同步复制存在退化逻辑，当主可用区集群在等待备可用区集群确认事务时若超过该超时时间，复制方式将降为异步复制。最低设置为1000ms，最高支持4294967295ms，默认10000ms。 */
  SemiSyncTimeout?: number;
}

declare interface ModifyClusterSlaveZoneResponse {
  /** 异步FlowId */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterStorageRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群新存储大小（单位G） */
  NewStorageLimit: number;
  /** 集群原存储大小（单位G） */
  OldStorageLimit: number;
  /** 交易模式 0-下单并支付 1-下单 */
  DealMode?: number;
}

declare interface ModifyClusterStorageResponse {
  /** 冻结流水ID */
  TranId?: string;
  /** 大订单号 */
  BigDealIds?: string[];
  /** 订单号 */
  DealNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBInstanceSecurityGroupsRequest {
  /** 网络组id(cynosdbmysql-grp-前缀开头)或集群id */
  InstanceId: string;
  /** 要修改的安全组ID列表，一个或者多个安全组ID组成的数组。注意：该入参会全量替换存量已有集合，非增量更新。修改需传入预期的全量集合。 */
  SecurityGroupIds: string[];
  /** 可用区 */
  Zone: string;
}

declare interface ModifyDBInstanceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceNameRequest {
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  InstanceName: string;
}

declare interface ModifyInstanceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceParamRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID */
  InstanceIds?: string[];
  /** 集群参数列表，例如 [{ "CurrentValue":"2", "ParamName":"auto_increment_increment"}] */
  ClusterParamList?: ModifyParamItem[];
  /** 实例参数列表，例如[{ "CurrentValue":"2", "ParamName":"innodb_stats_transient_sample_pages"}] */
  InstanceParamList?: ModifyParamItem[];
  /** yes：在运维时间窗内修改，no：立即执行（默认值） */
  IsInMaintainPeriod?: string;
}

declare interface ModifyInstanceParamResponse {
  /** 任务ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceUpgradeLimitDaysRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID */
  InstanceId: string;
  /** 升级限制时间 */
  UpgradeLimitDays: number;
}

declare interface ModifyInstanceUpgradeLimitDaysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLibraDBClusterAccountDescriptionRequest {
  /** 分析集群id */
  ClusterId: string;
  /** 账号名 */
  AccountName: string;
  /** 描述 */
  Description: string;
  /** 主机名 */
  Host?: string;
}

declare interface ModifyLibraDBClusterAccountDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLibraDBClusterAccountHostRequest {
  /** 分析集群id */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
  /** 主机名 */
  NewHost: string;
}

declare interface ModifyLibraDBClusterAccountHostResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLibraDBClusterAccountPrivilegeRequest {
  /** 集群id */
  ClusterId: string;
  /** 账号 */
  Account: InputAccount;
  /** 全局权限 */
  GlobalPrivileges?: string[];
  /** 数据库权限 */
  DatabasePrivileges?: DatabasePrivileges[];
  /** 表权限 */
  TablePrivileges?: TablePrivileges[];
}

declare interface ModifyLibraDBClusterAccountPrivilegeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLibraDBClusterDataSourceRequest {
  /** 分析集群ID */
  ClusterId: string;
  /** 只读分析引擎实例ID */
  InstanceId: string;
  /** 源端信息 */
  SrcInfo?: LibraDBClusterSrcInfo[];
}

declare interface ModifyLibraDBClusterDataSourceResponse {
  /** 异步任务ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLibraDBClusterNameRequest {
  /** 分析集群 ID */
  ClusterId: string;
  /** 集群名称 */
  ClusterName: string;
}

declare interface ModifyLibraDBClusterNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLibraDBClusterProjectRequest {
  /** 分析集群 ID 列表 */
  ClusterIdSet?: string[];
  /** 项目 ID */
  ProjectId?: number;
}

declare interface ModifyLibraDBClusterProjectResponse {
  /** 集群列表 */
  AffectedClusterIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLibraDBClusterReplicationObjectRequest {
  /** 分析集群ID */
  ClusterId: string;
  /** 只读分析引擎实例 ID */
  InstanceId: string;
  /** 映射模式 */
  ForceDefaultMapRule?: string;
  /** 同步对象 */
  Objects?: ReplicationObject[];
  /** 自动映射规则 */
  AutoMapRules?: AutoMapRule[];
  /** 是否按照最新映射规则刷新存量映射关系 */
  RefreshMapping?: boolean;
}

declare interface ModifyLibraDBClusterReplicationObjectResponse {
  /** 异步任务ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLibraDBForwardConfigRequest {
  /** 只读分析引擎实例Id */
  InstanceId: string;
  /** 转发模式 */
  ForwardMode?: string;
  /** 转发实例列表 */
  ForwardList?: ForwardInstanceInfo[];
}

declare interface ModifyLibraDBForwardConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMaintainPeriodConfigRequest {
  /** 实例ID */
  InstanceId: string;
  /** 维护开始时间，单位为秒，如3:00为10800 */
  MaintainStartTime: number;
  /** 维护持续时间，单位为秒，如1小时为3600 */
  MaintainDuration: number;
  /** 每周维护日期，日期取值范围[Mon, Tue, Wed, Thu, Fri, Sat, Sun] */
  MaintainWeekDays: string[];
}

declare interface ModifyMaintainPeriodConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyParamTemplateRequest {
  /** 模板ID */
  TemplateId: number;
  /** 模板名 */
  TemplateName?: string;
  /** 模板描述 */
  TemplateDescription?: string;
  /** 参数列表 */
  ParamList?: ModifyParamItem[];
}

declare interface ModifyParamTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProxyDescRequest {
  /** 集群ID */
  ClusterId: string;
  /** 数据库代理组ID */
  ProxyGroupId: string;
  /** 数据库代理描述 */
  Description: string;
}

declare interface ModifyProxyDescResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyProxyRwSplitRequest {
  /** 集群ID，例如cynosdbmysql-asd123 */
  ClusterId: string;
  /** 数据库代理组ID，例如cynosdbmysql-proxy-qwe123 */
  ProxyGroupId: string;
  /** 一致性类型；“eventual"-最终一致性, "session"-会话一致性, "global"-全局一致性 */
  ConsistencyType?: string;
  /** 一致性超时时间。取值范围：0~1000000（微秒）,设置0则表示若只读实例出现延迟, 导致一致性策略不满足, 请求将一直等待。 */
  ConsistencyTimeOut?: string;
  /** 读写权重分配模式；系统自动分配："system"， 自定义："custom" */
  WeightMode?: string;
  /** 实例只读权重。 */
  InstanceWeights?: ProxyInstanceWeight[];
  /** 是否开启故障转移，代理出现故障后，连接地址将路由到主实例，取值："yes" , "no" */
  FailOver?: string;
  /** 是否自动添加只读实例，取值："yes" , "no" */
  AutoAddRo?: string;
  /** 是否打开读写分离。该参数已废弃，请通过RwType设置读写属性。 */
  OpenRw?: string;
  /** 读写类型：READWRITE,READONLY */
  RwType?: string;
  /** 事务拆分。在一个事务中拆分读和写到不同的实例上去执行。 */
  TransSplit?: boolean;
  /** 连接模式：nearby,balance */
  AccessMode?: string;
  /** 是否打开连接池：yes,no */
  OpenConnectionPool?: string;
  /** 连接池类型：SessionConnectionPool */
  ConnectionPoolType?: string;
  /** 连接池时间。可选范围:0~300（秒） */
  ConnectionPoolTimeOut?: number;
  /** 是否将libra节点当作普通RO节点 */
  ApNodeAsRoNode?: boolean;
  /** libra节点故障，是否转发给其他节点 */
  ApQueryToOtherNode?: boolean;
}

declare interface ModifyProxyRwSplitResponse {
  /** 异步FlowId */
  FlowId?: number;
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourcePackageClustersRequest {
  /** 资源包唯一ID */
  PackageId: string;
  /** 需要建立绑定关系的集群ID */
  BindClusterIds?: string[];
  /** 需要解除绑定关系的集群ID */
  UnbindClusterIds?: string[];
}

declare interface ModifyResourcePackageClustersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourcePackageNameRequest {
  /** 资源包唯一ID */
  PackageId: string;
  /** 自定义的资源包名称，最长支持120个字符 */
  PackageName: string;
}

declare interface ModifyResourcePackageNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyResourcePackagesDeductionPriorityRequest {
  /** 需要修改优先级的资源包类型，CCU：计算资源包，DISK：存储资源包 */
  PackageType: string;
  /** 修改后的抵扣优先级对于哪个cynos资源生效 */
  ClusterId: string;
  /** 资源包抵扣优先级 */
  DeductionPriorities: PackagePriority[];
}

declare interface ModifyResourcePackagesDeductionPriorityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyServerlessStrategyRequest {
  /** serverless集群id */
  ClusterId: string;
  /** 集群是否自动暂停，可选范围yesno */
  AutoPause?: string;
  /** 集群自动暂停的延迟，单位秒，可选范围[600,691200]，默认600 */
  AutoPauseDelay?: number;
  /** 该参数暂时无效 */
  AutoScaleUpDelay?: number;
  /** 该参数暂时无效 */
  AutoScaleDownDelay?: number;
  /** cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MinCpu?: number;
  /** cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MaxCpu?: number;
  /** 只读实例cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MinRoCpu?: number;
  /** 只读cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MaxRoCpu?: number;
  /** 只读节点最小个数 */
  MinRoCount?: number;
  /** 只读节点最大个数 */
  MaxRoCount?: number;
  /** 是否开启归档，可选范围yesno默认值:yes */
  AutoArchive?: string;
  /** 升级类型。 默认值：upgradeImmediate。 可选值： upgradeImmediate：立即完成修改 upgradeInMaintain：在维护时间窗口内完成修改 */
  UpgradeType?: string;
}

declare interface ModifyServerlessStrategyResponse {
  /** 异步流程id */
  FlowId?: number;
  /** 任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySnapBackupCrossRegionConfigRequest {
  /** 集群ID */
  ClusterId: string;
  /** 是否开启跨地域快照备份ON/OFF */
  CrossRegionsEnable?: string;
  /** 快照备份所跨地域 */
  CrossRegions?: string[];
}

declare interface ModifySnapBackupCrossRegionConfigResponse {
  /** 任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVipVportRequest {
  /** 集群id */
  ClusterId: string;
  /** 实例组id */
  InstanceGrpId?: string;
  /** 实例组id */
  InstanceGroupId?: string;
  /** 需要修改的目的ip */
  Vip?: string;
  /** 需要修改的目的端口 */
  Vport?: number;
  /** 数据库类型，取值范围: MYSQL */
  DbType?: string;
  /** 旧ip回收前的保留时间，单位小时，0表示立即回收 */
  OldIpReserveHours?: number;
}

declare interface ModifyVipVportResponse {
  /** 异步任务id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OfflineClusterRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface OfflineClusterResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OfflineInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID数组 */
  InstanceIdList: string[];
}

declare interface OfflineInstanceResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OfflineLibraDBClusterRequest {
  /** 分析集群 ID */
  ClusterId: string;
}

declare interface OfflineLibraDBClusterResponse {
  /** flow id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OfflineLibraDBInstanceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 只读分析引擎实例 ID 列表 */
  InstanceIdList: string[];
}

declare interface OfflineLibraDBInstanceResponse {
  /** 任务流id */
  FlowId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenAuditServiceRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 日志保留时长。 */
  LogExpireDay: number;
  /** 高频日志保留时长。 */
  HighLogExpireDay?: number;
  /** 审计规则(废弃)。 */
  AuditRuleFilters?: AuditRuleFilters[];
  /** 规则模板ID。同AuditRuleFilters都不填是全审计。 */
  RuleTemplateIds?: string[];
  /** 审计类型。true-全审计；默认false-规则审计。 */
  AuditAll?: boolean;
}

declare interface OpenAuditServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenClusterPasswordComplexityRequest {
  /** 集群id */
  ClusterId: string;
  /** 密码长度 */
  ValidatePasswordLength: number;
  /** 大小写字符个数 */
  ValidatePasswordMixedCaseCount: number;
  /** 特殊字符个数 */
  ValidatePasswordSpecialCharCount: number;
  /** 数字个数 */
  ValidatePasswordNumberCount: number;
  /** 密码强度（"MEDIUM", "STRONG"） */
  ValidatePasswordPolicy: string;
  /** 数据字典 */
  ValidatePasswordDictionary?: string[];
}

declare interface OpenClusterPasswordComplexityResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenClusterReadOnlyInstanceGroupAccessRequest {
  /** 集群ID */
  ClusterId: string;
  /** 端口 */
  Port: string;
  /** 安全组ID */
  SecurityGroupIds?: string[];
}

declare interface OpenClusterReadOnlyInstanceGroupAccessResponse {
  /** 开启流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenClusterTransparentEncryptRequest {
  /** 集群id */
  ClusterId: string;
  /** 秘钥类型(cloud,custom) */
  KeyType: string;
  /** 秘钥Id */
  KeyId?: string;
  /** 秘钥地域 */
  KeyRegion?: string;
  /** 是否开启全局加密 */
  IsOpenGlobalEncryption?: boolean;
}

declare interface OpenClusterTransparentEncryptResponse {
  /** 异步任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenReadOnlyInstanceExclusiveAccessRequest {
  /** 请使用 [集群信息描述](https://cloud.tencent.com/document/api/1003/48086) 获取 clusterId。 */
  ClusterId: string;
  /** 请使用 [集群信息描述](https://cloud.tencent.com/document/api/1003/48086) 获取 instanceId。 */
  InstanceId: string;
  /** 指定的 vpc ID，请使用 [查询私有网络列表](https://cloud.tencent.com/document/api/215/15778) 获取 vpc ID。 */
  VpcId: string;
  /** 指定的子网 ID，如果设置了 vpc ID，则 SubnetId 必填，请使用 [查询子网列表](https://cloud.tencent.com/document/api/215/15784) 获取 SubnetId。 */
  SubnetId: string;
  /** 用户自定义的端口。 */
  Port: number;
  /** 安全组 ID，请使用 [查看安全组](https://cloud.tencent.com/document/api/215/15808) 获取 SecurityGroupId。 */
  SecurityGroupIds?: string[];
}

declare interface OpenReadOnlyInstanceExclusiveAccessResponse {
  /** 开通流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenSSLRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID */
  InstanceId?: string;
}

declare interface OpenSSLResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenWanRequest {
  /** 实例组id */
  InstanceGrpId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例组id */
  InstanceGroupId?: string;
}

declare interface OpenWanResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PauseServerlessRequest {
  /** 集群ID */
  ClusterId: string;
  /** 是否强制暂停，忽略当前的用户链接 0:不强制 1:强制， 默认为1 */
  ForcePause?: number;
}

declare interface PauseServerlessResponse {
  /** 异步流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RefundResourcePackageRequest {
  /** 资源包唯一ID */
  PackageId: string;
}

declare interface RefundResourcePackageResponse {
  /** 每个物品对应一个dealName，业务需要根据dealName保证发货接口幂等 */
  DealNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReloadBalanceProxyNodeRequest {
  /** 集群ID */
  ClusterId: string;
  /** 数据库代理组ID */
  ProxyGroupId: string;
}

declare interface ReloadBalanceProxyNodeResponse {
  /** 异步流程ID */
  FlowId?: number;
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveClusterSlaveZoneRequest {
  /** 集群ID */
  ClusterId: string;
  /** 从可用区 */
  SlaveZone: string;
}

declare interface RemoveClusterSlaveZoneResponse {
  /** 异步FlowId */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewClustersRequest {
  /** 集群ID */
  ClusterId: string;
  /** 续费时长 */
  TimeSpan: number;
  /** 时间单位 y,m,d,h,i,s */
  TimeUnit: string;
  /** 交易模式 0-下单并支付 1-下单 */
  DealMode?: number;
}

declare interface RenewClustersResponse {
  /** 预付费总订单号 */
  BigDealIds?: string[];
  /** 退款订单号 */
  DealNames?: string[];
  /** 冻结流水，一次开通一个冻结流水 */
  TranId?: string;
  /** 每个订单号对应的发货资源id列表 */
  ResourceIds?: string[];
  /** 集群id列表 */
  ClusterIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewLibraDBClustersRequest {
  /** 时间间隔 */
  TimeSpan: number;
  /** 时间单位 */
  TimeUnit: string;
  /** 分析集群 ID */
  ClusterId: string;
  /** 订单模式 */
  DealMode?: number;
}

declare interface RenewLibraDBClustersResponse {
  /** 预付费总订单号 */
  BigDealIds?: string[];
  /** 冻结流水 */
  TranId?: string;
  /** 订单名称 */
  DealNames?: string[];
  /** 资源id */
  ResourceIds?: string[];
  /** 集群id */
  ClusterIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplayInstanceAuditLogRequest {
  /** 源集群id */
  SourceClusterId: string;
  /** 源实例id */
  SourceInstanceId: string;
  /** 目标集群id目标集群必须为原始集群三天内克隆出的集群。 */
  TargetClusterId: string;
  /** 目标实例id */
  TargetInstanceId: string;
  /** 用户名.需要host为%的用户名 */
  TargetUserName: string;
  /** 密码 */
  TargetPassword: string;
  /** 开始时间。时间格式为：yyyy-DD-mm hh:mm:ss */
  StartTime: string;
  /** 结束时间。时间格式为：yyyy-DD-mm hh:mm:ss */
  EndTime: string;
}

declare interface ReplayInstanceAuditLogResponse {
  /** 任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetAccountPasswordRequest {
  /** 数据库账号名 */
  AccountName: string;
  /** 数据库账号新密码 */
  AccountPassword: string;
  /** 集群ID */
  ClusterId: string;
  /** 主机，不填默认为"%" */
  Host?: string;
}

declare interface ResetAccountPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetLibraDBClusterAccountPasswordRequest {
  /** 分析集群 ID */
  ClusterId: string;
  /** 密码 */
  AccountPassword: string;
  /** 账号 */
  AccountName: string;
  /** 加密方式 */
  EncryptMethod?: string;
  /** 主机 */
  Host?: string;
}

declare interface ResetLibraDBClusterAccountPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartInstanceRequest {
  /** 实例id */
  InstanceId: string;
}

declare interface RestartInstanceResponse {
  /** 异步任务id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartLibraDBInstanceRequest {
  /** 只读分析引擎实例 ID */
  InstanceId: string;
}

declare interface RestartLibraDBInstanceResponse {
  /** 异步任务id */
  FlowId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeServerlessRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface ResumeServerlessResponse {
  /** 异步流程ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevokeAccountPrivilegesRequest {
  /** 集群id */
  ClusterId: string;
  /** 账号信息 */
  Account: InputAccount;
  /** 数据库表权限数组 */
  DbTablePrivileges: string[];
  /** 数据库表信息 */
  DbTables: DbTable[];
}

declare interface RevokeAccountPrivilegesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollBackClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 回档策略 timeRollback-按时间点回档 snapRollback-按备份文件回档 */
  RollbackStrategy: string;
  /** 备份文件ID。回档策略为按备份文件回档时必填。 */
  RollbackId: number;
  /** 期望回档时间。回档策略为timeRollback按时间点回档时必填。 */
  ExpectTime?: string;
  /** 期望阈值（已废弃） */
  ExpectTimeThresh?: number;
  /** 回档数据库列表 */
  RollbackDatabases?: RollbackDatabase[];
  /** 回档数据库表列表 */
  RollbackTables?: RollbackTable[];
  /** 按时间点回档模式，full: 普通; db: 快速; table: 极速 （默认是普通） */
  RollbackMode?: string;
}

declare interface RollBackClusterResponse {
  /** 任务流ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackToNewClusterRequest {
  /** 可用区 */
  Zone: string;
  /** 回档时，传入源集群ID，用于查找源poolId */
  OriginalClusterId: string;
  /** 所属VPC网络ID */
  UniqVpcId?: string;
  /** 所属子网ID */
  UniqSubnetId?: string;
  /** 集群名称，长度小于64个字符，每个字符取值范围：大/小写字母，数字，特殊符号（'-','_','.'） */
  ClusterName?: string;
  /** 快照回档，表示snapshotId；时间点回档，表示queryId，为0，表示需要判断时间点是否有效 */
  RollbackId?: number;
  /** 时间点回档，指定时间；快照回档，快照时间 */
  ExpectTime?: string;
  /** 是否自动选择代金券 1是 0否 默认为0 */
  AutoVoucher?: number;
  /** 集群创建需要绑定的tag数组信息 */
  ResourceTags?: Tag[];
  /** Db类型当DbType为MYSQL时可选(默认NORMAL)：NORMALSERVERLESS */
  DbMode?: string;
  /** 当DbMode为SEVERLESS时必填cpu最小值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MinCpu?: number;
  /** 当DbMode为SEVERLESS时必填：cpu最大值，可选范围参考DescribeServerlessInstanceSpecs接口返回 */
  MaxCpu?: number;
  /** 当DbMode为SEVERLESS时，指定集群是否自动暂停，可选范围yesno默认值:yes */
  AutoPause?: string;
  /** 当DbMode为SEVERLESS时，指定集群自动暂停的延迟，单位秒，可选范围[600,691200]默认值:600 */
  AutoPauseDelay?: number;
  /** 安全组id数组 */
  SecurityGroupIds?: string[];
  /** 告警策略Id数组 */
  AlarmPolicyIds?: string[];
  /** 参数数组，暂时支持character_set_server （utf8｜latin1｜gbk｜utf8mb4） ，lower_case_table_names，1-大小写不敏感，0-大小写敏感 */
  ClusterParams?: ParamItem[];
  /** 参数模板ID，可以通过查询参数模板信息DescribeParamTemplates获得参数模板ID */
  ParamTemplateId?: number;
  /** 实例初始化配置信息，主要用于购买集群时选不同规格实例 */
  InstanceInitInfos?: InstanceInitInfo[];
  /** 0-下单并支付 1-下单 */
  DealMode?: number;
  /** 计算节点付费模式：0-按量计费，1-预付费 */
  PayMode?: number;
  /** 时间 */
  TimeSpan?: number;
  /** 单位 */
  TimeUnit?: string;
  /** 回档库信息 */
  RollbackDatabases?: RollbackDatabase[];
  /** 回档表信息 */
  RollbackTables?: RollbackTable[];
  /** 原ro实例信息 */
  OriginalROInstanceList?: string[];
  /** 项目id */
  ProjectId?: number;
  /** 是否开启归档，可选范围yesno默认值:yes */
  AutoArchive?: string;
  /** 是否从保存备份中恢复 */
  FromSaveBackup?: boolean;
}

declare interface RollbackToNewClusterResponse {
  /** 冻结流水ID */
  TranId?: string;
  /** 订单号 */
  DealNames?: string[];
  /** 资源ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取资源ID） */
  ResourceIds?: string[];
  /** 集群ID列表（该字段已不再维护，请使用dealNames字段查询接口DescribeResourcesByDealName获取集群ID） */
  ClusterIds?: string[];
  /** 大订单号 */
  BigDealIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchClusterDatabasesRequest {
  /** 集群id */
  ClusterId: string;
  /** 数据库名 */
  Database?: string;
  /** 是否精确搜索。0: 模糊搜索 1:精确搜索 默认为0 */
  MatchType?: number;
}

declare interface SearchClusterDatabasesResponse {
  /** 数据库列表 */
  Databases?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchClusterTablesRequest {
  /** 集群id */
  ClusterId: string;
  /** 数据库名 */
  Database?: string;
  /** 数据表名 */
  Table?: string;
  /** 数据表类型：view：只返回 view，base_table： 只返回基本表，all：返回 view 和表 */
  TableType?: string;
}

declare interface SearchClusterTablesResponse {
  /** 数据表列表 */
  Tables?: DatabaseTables[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetLibraDBClusterRenewFlagRequest {
  /** 分析集群 ID 列表 */
  ResourceIds?: string[];
  /** 续费标记 0:正常续费 1:自动续费 2:到期不续 */
  AutoRenewFlag?: number;
}

declare interface SetLibraDBClusterRenewFlagResponse {
  /** 数量 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetRenewFlagRequest {
  /** 需操作的集群ID */
  ResourceIds: string[];
  /** 自动续费标志位，续费标记 0:正常续费 1:自动续费 2:到期不续 */
  AutoRenewFlag: number;
}

declare interface SetRenewFlagResponse {
  /** 操作成功实例数 */
  Count?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartCLSDeliveryRequest {
  /** 实例id */
  InstanceId: string;
  /** 开通的日志主题id */
  CLSTopicIds: string[];
  /** 日志类型 */
  LogType?: string;
  /** 是否维护时间运行 */
  IsInMaintainPeriod?: string;
}

declare interface StartCLSDeliveryResponse {
  /** 异步任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopCLSDeliveryRequest {
  /** 实例id */
  InstanceId: string;
  /** 日志主题id */
  CLSTopicIds: string[];
  /** 日志类型 */
  LogType?: string;
  /** 是否维护时间运行 */
  IsInMaintainPeriod?: string;
}

declare interface StopCLSDeliveryResponse {
  /** 异步任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchClusterVpcRequest {
  /** 集群ID */
  ClusterId: string;
  /** 字符串vpc id */
  UniqVpcId: string;
  /** 字符串子网id */
  UniqSubnetId: string;
  /** 旧地址回收时间 */
  OldIpReserveHours: number;
}

declare interface SwitchClusterVpcResponse {
  /** 异步任务id。 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchClusterZoneRequest {
  /** 集群Id */
  ClusterId: string;
  /** 当前可用区 */
  OldZone: string;
  /** 要切换到的可用区 */
  NewZone: string;
  /** 维护期间执行-yes,立即执行-no */
  IsInMaintainPeriod?: string;
}

declare interface SwitchClusterZoneResponse {
  /** 异步FlowId */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SwitchProxyVpcRequest {
  /** 集群ID */
  ClusterId: string;
  /** 字符串vpc id */
  UniqVpcId: string;
  /** 字符串子网id */
  UniqSubnetId: string;
  /** 旧地址回收时间 */
  OldIpReserveHours: number;
  /** 数据库代理组Id（该参数为必填项，可以通过DescribeProxies接口获得） */
  ProxyGroupId: string;
}

declare interface SwitchProxyVpcResponse {
  /** 异步任务id。 */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindClusterResourcePackagesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 资源包唯一ID,如果不传，解绑该实例绑定的所有资源包 */
  PackageIds?: string[];
}

declare interface UnbindClusterResourcePackagesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeClusterVersionRequest {
  /** 集群id */
  ClusterId: string;
  /** 内核版本 */
  CynosVersion: string;
  /** 升级时间类型，可选：upgradeImmediate,upgradeInMaintain */
  UpgradeType: string;
}

declare interface UpgradeClusterVersionResponse {
  /** 异步任务id */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 数据库CPU */
  Cpu: number;
  /** 数据库内存，单位GB */
  Memory: number;
  /** 升级类型：upgradeImmediate，upgradeInMaintain */
  UpgradeType: string;
  /** 实例机器类型 */
  DeviceType?: string;
  /** 该参数已废弃 */
  StorageLimit?: number;
  /** 是否自动选择代金券 1是 0否 默认为0 */
  AutoVoucher?: number;
  /** 该参数已废弃 */
  DbType?: string;
  /** 交易模式 0-下单并支付 1-下单 */
  DealMode?: number;
  /** NormalUpgrade：普通变配，FastUpgrade：极速变配，若变配过程判断会造成闪断，变配流程会终止。 */
  UpgradeMode?: string;
  /** proxy同步升级 */
  UpgradeProxy?: UpgradeProxy;
}

declare interface UpgradeInstanceResponse {
  /** 冻结流水ID */
  TranId?: string;
  /** 大订单号 */
  BigDealIds?: string[];
  /** 订单号 */
  DealNames?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeProxyRequest {
  /** 集群ID */
  ClusterId: string;
  /** cpu核数 */
  Cpu: number;
  /** 内存 */
  Mem: number;
  /** 数据库代理组节点个数 */
  ProxyCount?: number;
  /** 数据库代理组ID（已废弃） */
  ProxyGroupId?: string;
  /** 重新负载均衡：auto（自动），manual（手动） */
  ReloadBalance?: string;
  /** 升级时间 ：no（升级完成时）yes（实例维护时间） */
  IsInMaintainPeriod?: string;
  /** 数据库代理节点信息 */
  ProxyZones?: ProxyZone[];
  /** 是否滚动升级 */
  IsRollUpgrade?: string;
  /** 滚动升级等待时间，单位：秒 */
  RollUpgradeWaitingTime?: number;
}

declare interface UpgradeProxyResponse {
  /** 异步流程ID */
  FlowId?: number;
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeProxyVersionRequest {
  /** 集群ID */
  ClusterId: string;
  /** 数据库代理当前版本 */
  SrcProxyVersion: string;
  /** 数据库代理升级版本 */
  DstProxyVersion: string;
  /** 数据库代理组ID */
  ProxyGroupId?: string;
  /** 升级时间 ：no（升级完成时）yes（实例维护时间） */
  IsInMaintainPeriod?: string;
}

declare interface UpgradeProxyVersionResponse {
  /** 异步流程ID */
  FlowId?: number;
  /** 异步任务id */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cynosdb TDSQL-C MySQL 版} */
declare interface Cynosdb {
  (): Versions;
  /** 恢复实例访问 {@link ActivateInstanceRequest} {@link ActivateInstanceResponse} */
  ActivateInstance(data: ActivateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateInstanceResponse>;
  /** 解除分析集群隔离 {@link ActivateLibraDBClusterRequest} {@link ActivateLibraDBClusterResponse} */
  ActivateLibraDBCluster(data: ActivateLibraDBClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateLibraDBClusterResponse>;
  /** 解除只读分析引擎隔离 {@link ActivateLibraDBInstanceRequest} {@link ActivateLibraDBInstanceResponse} */
  ActivateLibraDBInstance(data: ActivateLibraDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ActivateLibraDBInstanceResponse>;
  /** 开启多可用区部署 {@link AddClusterSlaveZoneRequest} {@link AddClusterSlaveZoneResponse} */
  AddClusterSlaveZone(data: AddClusterSlaveZoneRequest, config?: AxiosRequestConfig): AxiosPromise<AddClusterSlaveZoneResponse>;
  /** 集群添加实例 {@link AddInstancesRequest} {@link AddInstancesResponse} */
  AddInstances(data: AddInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AddInstancesResponse>;
  /** 安全组批量绑定云资源 {@link AssociateSecurityGroupsRequest} {@link AssociateSecurityGroupsResponse} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** 为集群绑定资源包 {@link BindClusterResourcePackagesRequest} {@link BindClusterResourcePackagesResponse} */
  BindClusterResourcePackages(data: BindClusterResourcePackagesRequest, config?: AxiosRequestConfig): AxiosPromise<BindClusterResourcePackagesResponse>;
  /** 校验集群是否可以添加只读分析引擎 {@link CheckCreateLibraDBInstanceRequest} {@link CheckCreateLibraDBInstanceResponse} */
  CheckCreateLibraDBInstance(data: CheckCreateLibraDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CheckCreateLibraDBInstanceResponse>;
  /** 实例关闭审计服务 {@link CloseAuditServiceRequest} {@link CloseAuditServiceResponse} */
  CloseAuditService(data: CloseAuditServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CloseAuditServiceResponse>;
  /** 关闭集群密码复杂度 {@link CloseClusterPasswordComplexityRequest} {@link CloseClusterPasswordComplexityResponse} */
  CloseClusterPasswordComplexity(data: CloseClusterPasswordComplexityRequest, config?: AxiosRequestConfig): AxiosPromise<CloseClusterPasswordComplexityResponse>;
  /** 关闭数据库代理 {@link CloseProxyRequest} {@link CloseProxyResponse} */
  CloseProxy(data: CloseProxyRequest, config?: AxiosRequestConfig): AxiosPromise<CloseProxyResponse>;
  /** 关闭数据库代理连接地址 {@link CloseProxyEndPointRequest} {@link CloseProxyEndPointResponse} */
  CloseProxyEndPoint(data: CloseProxyEndPointRequest, config?: AxiosRequestConfig): AxiosPromise<CloseProxyEndPointResponse>;
  /** 关闭SSL加密 {@link CloseSSLRequest} {@link CloseSSLResponse} */
  CloseSSL(data: CloseSSLRequest, config?: AxiosRequestConfig): AxiosPromise<CloseSSLResponse>;
  /** 关闭外网 {@link CloseWanRequest} {@link CloseWanResponse} */
  CloseWan(data?: CloseWanRequest, config?: AxiosRequestConfig): AxiosPromise<CloseWanResponse>;
  /** 复制集群密码复杂度 {@link CopyClusterPasswordComplexityRequest} {@link CopyClusterPasswordComplexityResponse} */
  CopyClusterPasswordComplexity(data: CopyClusterPasswordComplexityRequest, config?: AxiosRequestConfig): AxiosPromise<CopyClusterPasswordComplexityResponse>;
  /** 创建用户账号 {@link CreateAccountsRequest} {@link CreateAccountsResponse} */
  CreateAccounts(data: CreateAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAccountsResponse>;
  /** 创建审计日志文件 {@link CreateAuditLogFileRequest} {@link CreateAuditLogFileResponse} */
  CreateAuditLogFile(data: CreateAuditLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditLogFileResponse>;
  /** 创建审计规则模板 {@link CreateAuditRuleTemplateRequest} {@link CreateAuditRuleTemplateResponse} */
  CreateAuditRuleTemplate(data: CreateAuditRuleTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAuditRuleTemplateResponse>;
  /** 创建手动备份 {@link CreateBackupRequest} {@link CreateBackupResponse} */
  CreateBackup(data: CreateBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupResponse>;
  /** 创建日志投递 {@link CreateCLSDeliveryRequest} {@link CreateCLSDeliveryResponse} */
  CreateCLSDelivery(data: CreateCLSDeliveryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCLSDeliveryResponse>;
  /** 创建数据库 {@link CreateClusterDatabaseRequest} {@link CreateClusterDatabaseResponse} */
  CreateClusterDatabase(data: CreateClusterDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterDatabaseResponse>;
  /** 购买新集群 {@link CreateClustersRequest} {@link CreateClustersResponse} */
  CreateClusters(data: CreateClustersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClustersResponse>;
  /** 购买集成集群 {@link CreateIntegrateClusterRequest} {@link CreateIntegrateClusterResponse} */
  CreateIntegrateCluster(data: CreateIntegrateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIntegrateClusterResponse>;
  /** 创建分析集群账号 {@link CreateLibraDBClusterAccountsRequest} {@link CreateLibraDBClusterAccountsResponse} */
  CreateLibraDBClusterAccounts(data: CreateLibraDBClusterAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLibraDBClusterAccountsResponse>;
  /** 创建分析集群 {@link CreateLibraDBClustersRequest} {@link CreateLibraDBClustersResponse} */
  CreateLibraDBClusters(data: CreateLibraDBClustersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLibraDBClustersResponse>;
  /** 创建参数模板 {@link CreateParamTemplateRequest} {@link CreateParamTemplateResponse} */
  CreateParamTemplate(data: CreateParamTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateParamTemplateResponse>;
  /** 创建数据库代理 {@link CreateProxyRequest} {@link CreateProxyResponse} */
  CreateProxy(data: CreateProxyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProxyResponse>;
  /** 创建数据库代理连接点 {@link CreateProxyEndPointRequest} {@link CreateProxyEndPointResponse} */
  CreateProxyEndPoint(data: CreateProxyEndPointRequest, config?: AxiosRequestConfig): AxiosPromise<CreateProxyEndPointResponse>;
  /** 新购资源包 {@link CreateResourcePackageRequest} {@link CreateResourcePackageResponse} */
  CreateResourcePackage(data: CreateResourcePackageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourcePackageResponse>;
  /** 删除用户账号 {@link DeleteAccountsRequest} {@link DeleteAccountsResponse} */
  DeleteAccounts(data: DeleteAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAccountsResponse>;
  /** 删除审计日志文件 {@link DeleteAuditLogFileRequest} {@link DeleteAuditLogFileResponse} */
  DeleteAuditLogFile(data: DeleteAuditLogFileRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditLogFileResponse>;
  /** 删除审计规则模板 {@link DeleteAuditRuleTemplatesRequest} {@link DeleteAuditRuleTemplatesResponse} */
  DeleteAuditRuleTemplates(data: DeleteAuditRuleTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAuditRuleTemplatesResponse>;
  /** 删除手动备份 {@link DeleteBackupRequest} {@link DeleteBackupResponse} */
  DeleteBackup(data: DeleteBackupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackupResponse>;
  /** 删除日志投递 {@link DeleteCLSDeliveryRequest} {@link DeleteCLSDeliveryResponse} */
  DeleteCLSDelivery(data: DeleteCLSDeliveryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCLSDeliveryResponse>;
  /** 删除数据库 {@link DeleteClusterDatabaseRequest} {@link DeleteClusterDatabaseResponse} */
  DeleteClusterDatabase(data: DeleteClusterDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterDatabaseResponse>;
  /** 删除保留备份 {@link DeleteClusterSaveBackupRequest} {@link DeleteClusterSaveBackupResponse} */
  DeleteClusterSaveBackup(data: DeleteClusterSaveBackupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterSaveBackupResponse>;
  /** 删除 TDSQL-C 分析集群 {@link DeleteLibraDBClusterRequest} {@link DeleteLibraDBClusterResponse} */
  DeleteLibraDBCluster(data: DeleteLibraDBClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLibraDBClusterResponse>;
  /** 删除分析集群账号 {@link DeleteLibraDBClusterAccountsRequest} {@link DeleteLibraDBClusterAccountsResponse} */
  DeleteLibraDBClusterAccounts(data: DeleteLibraDBClusterAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLibraDBClusterAccountsResponse>;
  /** 删除参数模板 {@link DeleteParamTemplateRequest} {@link DeleteParamTemplateResponse} */
  DeleteParamTemplate(data: DeleteParamTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteParamTemplateResponse>;
  /** 查询账号所有可授予权限 {@link DescribeAccountAllGrantPrivilegesRequest} {@link DescribeAccountAllGrantPrivilegesResponse} */
  DescribeAccountAllGrantPrivileges(data: DescribeAccountAllGrantPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountAllGrantPrivilegesResponse>;
  /** 查询账号已有权限 {@link DescribeAccountPrivilegesRequest} {@link DescribeAccountPrivilegesResponse} */
  DescribeAccountPrivileges(data: DescribeAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountPrivilegesResponse>;
  /** 查询数据库账号列表 {@link DescribeAccountsRequest} {@link DescribeAccountsResponse} */
  DescribeAccounts(data: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** 获取审计实例列表 {@link DescribeAuditInstanceListRequest} {@link DescribeAuditInstanceListResponse} */
  DescribeAuditInstanceList(data?: DescribeAuditInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditInstanceListResponse>;
  /** 查询审计日志文件 {@link DescribeAuditLogFilesRequest} {@link DescribeAuditLogFilesResponse} */
  DescribeAuditLogFiles(data: DescribeAuditLogFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogFilesResponse>;
  /** 查询数据库审计日志 {@link DescribeAuditLogsRequest} {@link DescribeAuditLogsResponse} */
  DescribeAuditLogs(data: DescribeAuditLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogsResponse>;
  /** 查询审计规则模板 {@link DescribeAuditRuleTemplatesRequest} {@link DescribeAuditRuleTemplatesResponse} */
  DescribeAuditRuleTemplates(data?: DescribeAuditRuleTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditRuleTemplatesResponse>;
  /** 获取实例的审计规则 {@link DescribeAuditRuleWithInstanceIdsRequest} {@link DescribeAuditRuleWithInstanceIdsResponse} */
  DescribeAuditRuleWithInstanceIds(data: DescribeAuditRuleWithInstanceIdsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditRuleWithInstanceIdsResponse>;
  /** 查询备份配置信息 {@link DescribeBackupConfigRequest} {@link DescribeBackupConfigResponse} */
  DescribeBackupConfig(data: DescribeBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupConfigResponse>;
  /** 查询备份下载限制 {@link DescribeBackupDownloadRestrictionRequest} {@link DescribeBackupDownloadRestrictionResponse} */
  DescribeBackupDownloadRestriction(data: DescribeBackupDownloadRestrictionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDownloadRestrictionResponse>;
  /** 查询备份下载地址 {@link DescribeBackupDownloadUrlRequest} {@link DescribeBackupDownloadUrlResponse} */
  DescribeBackupDownloadUrl(data: DescribeBackupDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDownloadUrlResponse>;
  /** 查询用户级别备份下载限制 {@link DescribeBackupDownloadUserRestrictionRequest} {@link DescribeBackupDownloadUserRestrictionResponse} */
  DescribeBackupDownloadUserRestriction(data?: DescribeBackupDownloadUserRestrictionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupDownloadUserRestrictionResponse>;
  /** 查询备份文件列表 {@link DescribeBackupListRequest} {@link DescribeBackupListResponse} */
  DescribeBackupList(data: DescribeBackupListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupListResponse>;
  /** 查询binlog配置 {@link DescribeBinlogConfigRequest} {@link DescribeBinlogConfigResponse} */
  DescribeBinlogConfig(data: DescribeBinlogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBinlogConfigResponse>;
  /** 查询 Binlog下载地址 {@link DescribeBinlogDownloadUrlRequest} {@link DescribeBinlogDownloadUrlResponse} */
  DescribeBinlogDownloadUrl(data: DescribeBinlogDownloadUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBinlogDownloadUrlResponse>;
  /** 查询Binlog保留天数 {@link DescribeBinlogSaveDaysRequest} {@link DescribeBinlogSaveDaysResponse} */
  DescribeBinlogSaveDays(data: DescribeBinlogSaveDaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBinlogSaveDaysResponse>;
  /** 查询 Binlog 列表 {@link DescribeBinlogsRequest} {@link DescribeBinlogsResponse} */
  DescribeBinlogs(data: DescribeBinlogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBinlogsResponse>;
  /** 升降配运行参数对比 {@link DescribeChangedParamsAfterUpgradeRequest} {@link DescribeChangedParamsAfterUpgradeResponse} */
  DescribeChangedParamsAfterUpgrade(data: DescribeChangedParamsAfterUpgradeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChangedParamsAfterUpgradeResponse>;
  /** 获取table列表 {@link DescribeClusterDatabaseTablesRequest} {@link DescribeClusterDatabaseTablesResponse} */
  DescribeClusterDatabaseTables(data: DescribeClusterDatabaseTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDatabaseTablesResponse>;
  /** 获取集群数据库列表 {@link DescribeClusterDatabasesRequest} {@link DescribeClusterDatabasesResponse} */
  DescribeClusterDatabases(data: DescribeClusterDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDatabasesResponse>;
  /** 集群信息描述 {@link DescribeClusterDetailRequest} {@link DescribeClusterDetailResponse} */
  DescribeClusterDetail(data: DescribeClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDetailResponse>;
  /** 查询数据库列表 {@link DescribeClusterDetailDatabasesRequest} {@link DescribeClusterDetailDatabasesResponse} */
  DescribeClusterDetailDatabases(data: DescribeClusterDetailDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterDetailDatabasesResponse>;
  /** 查询集群实例组 {@link DescribeClusterInstanceGroupsRequest} {@link DescribeClusterInstanceGroupsResponse} */
  DescribeClusterInstanceGroups(data: DescribeClusterInstanceGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterInstanceGroupsResponse>;
  /** 查询实例组（废弃） {@link DescribeClusterInstanceGrpsRequest} {@link DescribeClusterInstanceGrpsResponse} */
  DescribeClusterInstanceGrps(data: DescribeClusterInstanceGrpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterInstanceGrpsResponse>;
  /** 查询参数修改记录 {@link DescribeClusterParamLogsRequest} {@link DescribeClusterParamLogsResponse} */
  DescribeClusterParamLogs(data: DescribeClusterParamLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterParamLogsResponse>;
  /** 查询集群参数 {@link DescribeClusterParamsRequest} {@link DescribeClusterParamsResponse} */
  DescribeClusterParams(data: DescribeClusterParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterParamsResponse>;
  /** 查看集群密码复杂度详情 {@link DescribeClusterPasswordComplexityRequest} {@link DescribeClusterPasswordComplexityResponse} */
  DescribeClusterPasswordComplexity(data: DescribeClusterPasswordComplexityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPasswordComplexityResponse>;
  /** 查询集群只读开关 {@link DescribeClusterReadOnlyRequest} {@link DescribeClusterReadOnlyResponse} */
  DescribeClusterReadOnly(data: DescribeClusterReadOnlyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterReadOnlyResponse>;
  /** 查询集群透明加密信息 {@link DescribeClusterTransparentEncryptInfoRequest} {@link DescribeClusterTransparentEncryptInfoResponse} */
  DescribeClusterTransparentEncryptInfo(data: DescribeClusterTransparentEncryptInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterTransparentEncryptInfoResponse>;
  /** 查询集群列表 {@link DescribeClustersRequest} {@link DescribeClustersResponse} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 查询实例安全组信息 {@link DescribeDBSecurityGroupsRequest} {@link DescribeDBSecurityGroupsResponse} */
  DescribeDBSecurityGroups(data?: DescribeDBSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBSecurityGroupsResponse>;
  /** 查询任务流信息 {@link DescribeFlowRequest} {@link DescribeFlowResponse} */
  DescribeFlow(data: DescribeFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowResponse>;
  /** 查询实例日志投递信息 {@link DescribeInstanceCLSLogDeliveryRequest} {@link DescribeInstanceCLSLogDeliveryResponse} */
  DescribeInstanceCLSLogDelivery(data: DescribeInstanceCLSLogDeliveryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceCLSLogDeliveryResponse>;
  /** 查询实例详情 {@link DescribeInstanceDetailRequest} {@link DescribeInstanceDetailResponse} */
  DescribeInstanceDetail(data: DescribeInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceDetailResponse>;
  /** 查询错误日志列表 {@link DescribeInstanceErrorLogsRequest} {@link DescribeInstanceErrorLogsResponse} */
  DescribeInstanceErrorLogs(data: DescribeInstanceErrorLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceErrorLogsResponse>;
  /** 查询实例参数列表 {@link DescribeInstanceParamsRequest} {@link DescribeInstanceParamsResponse} */
  DescribeInstanceParams(data: DescribeInstanceParamsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceParamsResponse>;
  /** 查询实例慢日志详情 {@link DescribeInstanceSlowQueriesRequest} {@link DescribeInstanceSlowQueriesResponse} */
  DescribeInstanceSlowQueries(data: DescribeInstanceSlowQueriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceSlowQueriesResponse>;
  /** 查询购买页可购买的实例规格 {@link DescribeInstanceSpecsRequest} {@link DescribeInstanceSpecsResponse} */
  DescribeInstanceSpecs(data: DescribeInstanceSpecsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceSpecsResponse>;
  /** 查询实例的列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询同一集群下实例列表 {@link DescribeInstancesWithinSameClusterRequest} {@link DescribeInstancesWithinSameClusterResponse} */
  DescribeInstancesWithinSameCluster(data: DescribeInstancesWithinSameClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesWithinSameClusterResponse>;
  /** 查询集成集群创建任务 {@link DescribeIntegrateTaskRequest} {@link DescribeIntegrateTaskResponse} */
  DescribeIntegrateTask(data?: DescribeIntegrateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIntegrateTaskResponse>;
  /** 查询回收站实例列表 {@link DescribeIsolatedInstancesRequest} {@link DescribeIsolatedInstancesResponse} */
  DescribeIsolatedInstances(data?: DescribeIsolatedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIsolatedInstancesResponse>;
  /** 查询分析集群账号全部权限 {@link DescribeLibraDBClusterAccountAllPrivilegesRequest} {@link DescribeLibraDBClusterAccountAllPrivilegesResponse} */
  DescribeLibraDBClusterAccountAllPrivileges(data: DescribeLibraDBClusterAccountAllPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBClusterAccountAllPrivilegesResponse>;
  /** 查询分析集群账号权限 {@link DescribeLibraDBClusterAccountPrivilegesRequest} {@link DescribeLibraDBClusterAccountPrivilegesResponse} */
  DescribeLibraDBClusterAccountPrivileges(data: DescribeLibraDBClusterAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBClusterAccountPrivilegesResponse>;
  /** 查询分析集群账号 {@link DescribeLibraDBClusterAccountsRequest} {@link DescribeLibraDBClusterAccountsResponse} */
  DescribeLibraDBClusterAccounts(data: DescribeLibraDBClusterAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBClusterAccountsResponse>;
  /** 查询分析集群高级映射规则 {@link DescribeLibraDBClusterAutoMapRuleRequest} {@link DescribeLibraDBClusterAutoMapRuleResponse} */
  DescribeLibraDBClusterAutoMapRule(data: DescribeLibraDBClusterAutoMapRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBClusterAutoMapRuleResponse>;
  /** 查询分析集群详情 {@link DescribeLibraDBClusterDetailRequest} {@link DescribeLibraDBClusterDetailResponse} */
  DescribeLibraDBClusterDetail(data: DescribeLibraDBClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBClusterDetailResponse>;
  /** 查询分析集群库表映射 {@link DescribeLibraDBClusterTableMappingRequest} {@link DescribeLibraDBClusterTableMappingResponse} */
  DescribeLibraDBClusterTableMapping(data: DescribeLibraDBClusterTableMappingRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBClusterTableMappingResponse>;
  /** 查询分析集群列表 {@link DescribeLibraDBClustersRequest} {@link DescribeLibraDBClustersResponse} */
  DescribeLibraDBClusters(data?: DescribeLibraDBClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBClustersResponse>;
  /** 查询分析引擎数据源信息 {@link DescribeLibraDBDataSourceRequest} {@link DescribeLibraDBDataSourceResponse} */
  DescribeLibraDBDataSource(data: DescribeLibraDBDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBDataSourceResponse>;
  /** 查询只读分析引擎转发参数 {@link DescribeLibraDBForwardConfigRequest} {@link DescribeLibraDBForwardConfigResponse} */
  DescribeLibraDBForwardConfig(data: DescribeLibraDBForwardConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBForwardConfigResponse>;
  /** 查询只读分析引擎实例详情 {@link DescribeLibraDBInstanceDetailRequest} {@link DescribeLibraDBInstanceDetailResponse} */
  DescribeLibraDBInstanceDetail(data: DescribeLibraDBInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBInstanceDetailResponse>;
  /** 查询只读分析引擎规格列表 {@link DescribeLibraDBInstanceSpecsRequest} {@link DescribeLibraDBInstanceSpecsResponse} */
  DescribeLibraDBInstanceSpecs(data?: DescribeLibraDBInstanceSpecsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBInstanceSpecsResponse>;
  /** 查询分析引擎慢日志 {@link DescribeLibraDBSlowLogsRequest} {@link DescribeLibraDBSlowLogsResponse} */
  DescribeLibraDBSlowLogs(data?: DescribeLibraDBSlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBSlowLogsResponse>;
  /** 查询分析引擎内核版本 {@link DescribeLibraDBVersionRequest} {@link DescribeLibraDBVersionResponse} */
  DescribeLibraDBVersion(data?: DescribeLibraDBVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLibraDBVersionResponse>;
  /** 查询实例维护时间窗 {@link DescribeMaintainPeriodRequest} {@link DescribeMaintainPeriodResponse} */
  DescribeMaintainPeriod(data: DescribeMaintainPeriodRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMaintainPeriodResponse>;
  /** 查询参数模板详情 {@link DescribeParamTemplateDetailRequest} {@link DescribeParamTemplateDetailResponse} */
  DescribeParamTemplateDetail(data: DescribeParamTemplateDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParamTemplateDetailResponse>;
  /** 查询参数模板信息 {@link DescribeParamTemplatesRequest} {@link DescribeParamTemplatesResponse} */
  DescribeParamTemplates(data?: DescribeParamTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeParamTemplatesResponse>;
  /** 查询项目安全组信息 {@link DescribeProjectSecurityGroupsRequest} {@link DescribeProjectSecurityGroupsResponse} */
  DescribeProjectSecurityGroups(data?: DescribeProjectSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProjectSecurityGroupsResponse>;
  /** 查询数据库代理列表 {@link DescribeProxiesRequest} {@link DescribeProxiesResponse} */
  DescribeProxies(data?: DescribeProxiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxiesResponse>;
  /** 查询代理节点列表 {@link DescribeProxyNodesRequest} {@link DescribeProxyNodesResponse} */
  DescribeProxyNodes(data?: DescribeProxyNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxyNodesResponse>;
  /** 查询数据库代理规格 {@link DescribeProxySpecsRequest} {@link DescribeProxySpecsResponse} */
  DescribeProxySpecs(data?: DescribeProxySpecsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProxySpecsResponse>;
  /** redo日志列表 {@link DescribeRedoLogsRequest} {@link DescribeRedoLogsResponse} */
  DescribeRedoLogs(data: DescribeRedoLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRedoLogsResponse>;
  /** 查询资源包使用详情 {@link DescribeResourcePackageDetailRequest} {@link DescribeResourcePackageDetailResponse} */
  DescribeResourcePackageDetail(data: DescribeResourcePackageDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcePackageDetailResponse>;
  /** 查询资源包列表 {@link DescribeResourcePackageListRequest} {@link DescribeResourcePackageListResponse} */
  DescribeResourcePackageList(data?: DescribeResourcePackageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcePackageListResponse>;
  /** 查询资源包规格 {@link DescribeResourcePackageSaleSpecRequest} {@link DescribeResourcePackageSaleSpecResponse} */
  DescribeResourcePackageSaleSpec(data: DescribeResourcePackageSaleSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcePackageSaleSpecResponse>;
  /** 查询订单关联实例 {@link DescribeResourcesByDealNameRequest} {@link DescribeResourcesByDealNameResponse} */
  DescribeResourcesByDealName(data?: DescribeResourcesByDealNameRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesByDealNameResponse>;
  /** 查询回档时间范围 {@link DescribeRollbackTimeRangeRequest} {@link DescribeRollbackTimeRangeResponse} */
  DescribeRollbackTimeRange(data: DescribeRollbackTimeRangeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRollbackTimeRangeResponse>;
  /** 查询实例SSL状态 {@link DescribeSSLStatusRequest} {@link DescribeSSLStatusResponse} */
  DescribeSSLStatus(data: DescribeSSLStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSSLStatusResponse>;
  /** 遗留备份列表 {@link DescribeSaveBackupClustersRequest} {@link DescribeSaveBackupClustersResponse} */
  DescribeSaveBackupClusters(data: DescribeSaveBackupClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSaveBackupClustersResponse>;
  /** 查询Serverless实例可选规格 {@link DescribeServerlessInstanceSpecsRequest} {@link DescribeServerlessInstanceSpecsResponse} */
  DescribeServerlessInstanceSpecs(data?: DescribeServerlessInstanceSpecsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerlessInstanceSpecsResponse>;
  /** 查询serverless策略 {@link DescribeServerlessStrategyRequest} {@link DescribeServerlessStrategyResponse} */
  DescribeServerlessStrategy(data: DescribeServerlessStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServerlessStrategyResponse>;
  /** 查询从可用区 {@link DescribeSlaveZonesRequest} {@link DescribeSlaveZonesResponse} */
  DescribeSlaveZones(data: DescribeSlaveZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlaveZonesResponse>;
  /** 查询支持的数据库代理版本 {@link DescribeSupportProxyVersionRequest} {@link DescribeSupportProxyVersionResponse} */
  DescribeSupportProxyVersion(data: DescribeSupportProxyVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSupportProxyVersionResponse>;
  /** 查询任务列表 {@link DescribeTasksRequest} {@link DescribeTasksResponse} */
  DescribeTasks(data?: DescribeTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTasksResponse>;
  /** 查询可售卖地域可用区信息 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data?: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 安全组批量解绑云资源 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** 下载分析集群列表 {@link DownloadLibraDBClusterListRequest} {@link DownloadLibraDBClusterListResponse} */
  DownloadLibraDBClusterList(data?: DownloadLibraDBClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadLibraDBClusterListResponse>;
  /** 导出实例错误日志 {@link ExportInstanceErrorLogsRequest} {@link ExportInstanceErrorLogsResponse} */
  ExportInstanceErrorLogs(data: ExportInstanceErrorLogsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportInstanceErrorLogsResponse>;
  /** 导出实例慢日志 {@link ExportInstanceSlowQueriesRequest} {@link ExportInstanceSlowQueriesResponse} */
  ExportInstanceSlowQueries(data: ExportInstanceSlowQueriesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportInstanceSlowQueriesResponse>;
  /** 资源包使用明细导出 {@link ExportResourcePackageDeductDetailsRequest} {@link ExportResourcePackageDeductDetailsResponse} */
  ExportResourcePackageDeductDetails(data: ExportResourcePackageDeductDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<ExportResourcePackageDeductDetailsResponse>;
  /** 批量授权账号权限 {@link GrantAccountPrivilegesRequest} {@link GrantAccountPrivilegesResponse} */
  GrantAccountPrivileges(data: GrantAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<GrantAccountPrivilegesResponse>;
  /** 新购集群询价 {@link InquirePriceCreateRequest} {@link InquirePriceCreateResponse} */
  InquirePriceCreate(data: InquirePriceCreateRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateResponse>;
  /** 变配预付费集群询价 {@link InquirePriceModifyRequest} {@link InquirePriceModifyResponse} */
  InquirePriceModify(data: InquirePriceModifyRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceModifyResponse>;
  /** 查询多规格价格 {@link InquirePriceMultiSpecRequest} {@link InquirePriceMultiSpecResponse} */
  InquirePriceMultiSpec(data: InquirePriceMultiSpecRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceMultiSpecResponse>;
  /** 续费集群询价 {@link InquirePriceRenewRequest} {@link InquirePriceRenewResponse} */
  InquirePriceRenew(data: InquirePriceRenewRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceRenewResponse>;
  /** 隔离集群 {@link IsolateClusterRequest} {@link IsolateClusterResponse} */
  IsolateCluster(data: IsolateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateClusterResponse>;
  /** 隔离实例 {@link IsolateInstanceRequest} {@link IsolateInstanceResponse} */
  IsolateInstance(data: IsolateInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateInstanceResponse>;
  /** 隔离分析集群 {@link IsolateLibraDBClusterRequest} {@link IsolateLibraDBClusterResponse} */
  IsolateLibraDBCluster(data: IsolateLibraDBClusterRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateLibraDBClusterResponse>;
  /** 隔离只读分析引擎 {@link IsolateLibraDBInstanceRequest} {@link IsolateLibraDBInstanceResponse} */
  IsolateLibraDBInstance(data: IsolateLibraDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateLibraDBInstanceResponse>;
  /** 修改数据库账号描述信息 {@link ModifyAccountDescriptionRequest} {@link ModifyAccountDescriptionResponse} */
  ModifyAccountDescription(data: ModifyAccountDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountDescriptionResponse>;
  /** 修改账号主机 {@link ModifyAccountHostRequest} {@link ModifyAccountHostResponse} */
  ModifyAccountHost(data: ModifyAccountHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountHostResponse>;
  /** 修改账号配置 {@link ModifyAccountParamsRequest} {@link ModifyAccountParamsResponse} */
  ModifyAccountParams(data: ModifyAccountParamsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountParamsResponse>;
  /** 修改账号库表权限 {@link ModifyAccountPrivilegesRequest} {@link ModifyAccountPrivilegesResponse} */
  ModifyAccountPrivileges(data: ModifyAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountPrivilegesResponse>;
  /** 修改审计规则模板 {@link ModifyAuditRuleTemplatesRequest} {@link ModifyAuditRuleTemplatesResponse} */
  ModifyAuditRuleTemplates(data: ModifyAuditRuleTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAuditRuleTemplatesResponse>;
  /** 实例修改审计服务 {@link ModifyAuditServiceRequest} {@link ModifyAuditServiceResponse} */
  ModifyAuditService(data: ModifyAuditServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAuditServiceResponse>;
  /** 修改备份配置 {@link ModifyBackupConfigRequest} {@link ModifyBackupConfigResponse} */
  ModifyBackupConfig(data: ModifyBackupConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupConfigResponse>;
  /** 修改集群备份下载限制 {@link ModifyBackupDownloadRestrictionRequest} {@link ModifyBackupDownloadRestrictionResponse} */
  ModifyBackupDownloadRestriction(data: ModifyBackupDownloadRestrictionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupDownloadRestrictionResponse>;
  /** 修改用户备份下载限制 {@link ModifyBackupDownloadUserRestrictionRequest} {@link ModifyBackupDownloadUserRestrictionResponse} */
  ModifyBackupDownloadUserRestriction(data: ModifyBackupDownloadUserRestrictionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupDownloadUserRestrictionResponse>;
  /** 修改备份文件备注名 {@link ModifyBackupNameRequest} {@link ModifyBackupNameResponse} */
  ModifyBackupName(data: ModifyBackupNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBackupNameResponse>;
  /** 修改Binlog配置 {@link ModifyBinlogConfigRequest} {@link ModifyBinlogConfigResponse} */
  ModifyBinlogConfig(data: ModifyBinlogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBinlogConfigResponse>;
  /** 修改Binlog保留天数 {@link ModifyBinlogSaveDaysRequest} {@link ModifyBinlogSaveDaysResponse} */
  ModifyBinlogSaveDays(data: ModifyBinlogSaveDaysRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBinlogSaveDaysResponse>;
  /** 修改数据库 {@link ModifyClusterDatabaseRequest} {@link ModifyClusterDatabaseResponse} */
  ModifyClusterDatabase(data: ModifyClusterDatabaseRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterDatabaseResponse>;
  /** 开关全局加密 {@link ModifyClusterGlobalEncryptionRequest} {@link ModifyClusterGlobalEncryptionResponse} */
  ModifyClusterGlobalEncryption(data: ModifyClusterGlobalEncryptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterGlobalEncryptionResponse>;
  /** 修改集群名称 {@link ModifyClusterNameRequest} {@link ModifyClusterNameResponse} */
  ModifyClusterName(data: ModifyClusterNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterNameResponse>;
  /** 修改集群参数 {@link ModifyClusterParamRequest} {@link ModifyClusterParamResponse} */
  ModifyClusterParam(data: ModifyClusterParamRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterParamResponse>;
  /** 修改集群密码复杂度 {@link ModifyClusterPasswordComplexityRequest} {@link ModifyClusterPasswordComplexityResponse} */
  ModifyClusterPasswordComplexity(data: ModifyClusterPasswordComplexityRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterPasswordComplexityResponse>;
  /** 修改集群只读开关 {@link ModifyClusterReadOnlyRequest} {@link ModifyClusterReadOnlyResponse} */
  ModifyClusterReadOnly(data: ModifyClusterReadOnlyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterReadOnlyResponse>;
  /** 变更备可用区 {@link ModifyClusterSlaveZoneRequest} {@link ModifyClusterSlaveZoneResponse} */
  ModifyClusterSlaveZone(data: ModifyClusterSlaveZoneRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterSlaveZoneResponse>;
  /** 调整包年包月存储容量 {@link ModifyClusterStorageRequest} {@link ModifyClusterStorageResponse} */
  ModifyClusterStorage(data: ModifyClusterStorageRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterStorageResponse>;
  /** 修改实例绑定安全组 {@link ModifyDBInstanceSecurityGroupsRequest} {@link ModifyDBInstanceSecurityGroupsResponse} */
  ModifyDBInstanceSecurityGroups(data: ModifyDBInstanceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBInstanceSecurityGroupsResponse>;
  /** 修改实例名称 {@link ModifyInstanceNameRequest} {@link ModifyInstanceNameResponse} */
  ModifyInstanceName(data: ModifyInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNameResponse>;
  /** 修改实例参数 {@link ModifyInstanceParamRequest} {@link ModifyInstanceParamResponse} */
  ModifyInstanceParam(data: ModifyInstanceParamRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceParamResponse>;
  /** 修改实例小版本升级限制时间 {@link ModifyInstanceUpgradeLimitDaysRequest} {@link ModifyInstanceUpgradeLimitDaysResponse} */
  ModifyInstanceUpgradeLimitDays(data: ModifyInstanceUpgradeLimitDaysRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceUpgradeLimitDaysResponse>;
  /** 修改分析集群账号描述 {@link ModifyLibraDBClusterAccountDescriptionRequest} {@link ModifyLibraDBClusterAccountDescriptionResponse} */
  ModifyLibraDBClusterAccountDescription(data: ModifyLibraDBClusterAccountDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraDBClusterAccountDescriptionResponse>;
  /** 修改分析集群账号支持的登录主机 {@link ModifyLibraDBClusterAccountHostRequest} {@link ModifyLibraDBClusterAccountHostResponse} */
  ModifyLibraDBClusterAccountHost(data: ModifyLibraDBClusterAccountHostRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraDBClusterAccountHostResponse>;
  /** 修改分析集群账号权限 {@link ModifyLibraDBClusterAccountPrivilegeRequest} {@link ModifyLibraDBClusterAccountPrivilegeResponse} */
  ModifyLibraDBClusterAccountPrivilege(data: ModifyLibraDBClusterAccountPrivilegeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraDBClusterAccountPrivilegeResponse>;
  /** 修改分析集群数据源 {@link ModifyLibraDBClusterDataSourceRequest} {@link ModifyLibraDBClusterDataSourceResponse} */
  ModifyLibraDBClusterDataSource(data: ModifyLibraDBClusterDataSourceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraDBClusterDataSourceResponse>;
  /** 修改分析集群名称 {@link ModifyLibraDBClusterNameRequest} {@link ModifyLibraDBClusterNameResponse} */
  ModifyLibraDBClusterName(data: ModifyLibraDBClusterNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraDBClusterNameResponse>;
  /** 修改分析集群的项目 ID {@link ModifyLibraDBClusterProjectRequest} {@link ModifyLibraDBClusterProjectResponse} */
  ModifyLibraDBClusterProject(data?: ModifyLibraDBClusterProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraDBClusterProjectResponse>;
  /** 修改分析集群的同步对象 {@link ModifyLibraDBClusterReplicationObjectRequest} {@link ModifyLibraDBClusterReplicationObjectResponse} */
  ModifyLibraDBClusterReplicationObject(data: ModifyLibraDBClusterReplicationObjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraDBClusterReplicationObjectResponse>;
  /** 修改只读分析引擎自动转发参数 {@link ModifyLibraDBForwardConfigRequest} {@link ModifyLibraDBForwardConfigResponse} */
  ModifyLibraDBForwardConfig(data: ModifyLibraDBForwardConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLibraDBForwardConfigResponse>;
  /** 修改维护时间配置 {@link ModifyMaintainPeriodConfigRequest} {@link ModifyMaintainPeriodConfigResponse} */
  ModifyMaintainPeriodConfig(data: ModifyMaintainPeriodConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMaintainPeriodConfigResponse>;
  /** 修改参数模板 {@link ModifyParamTemplateRequest} {@link ModifyParamTemplateResponse} */
  ModifyParamTemplate(data: ModifyParamTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyParamTemplateResponse>;
  /** 修改数据库代理描述 {@link ModifyProxyDescRequest} {@link ModifyProxyDescResponse} */
  ModifyProxyDesc(data: ModifyProxyDescRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProxyDescResponse>;
  /** 配置数据库代理读写分离 {@link ModifyProxyRwSplitRequest} {@link ModifyProxyRwSplitResponse} */
  ModifyProxyRwSplit(data: ModifyProxyRwSplitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyProxyRwSplitResponse>;
  /** 修改集群与资源包之间的绑定关系 {@link ModifyResourcePackageClustersRequest} {@link ModifyResourcePackageClustersResponse} */
  ModifyResourcePackageClusters(data: ModifyResourcePackageClustersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourcePackageClustersResponse>;
  /** 修改资源包名称 {@link ModifyResourcePackageNameRequest} {@link ModifyResourcePackageNameResponse} */
  ModifyResourcePackageName(data: ModifyResourcePackageNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourcePackageNameResponse>;
  /** 修改已绑定资源包抵扣优先级 {@link ModifyResourcePackagesDeductionPriorityRequest} {@link ModifyResourcePackagesDeductionPriorityResponse} */
  ModifyResourcePackagesDeductionPriority(data: ModifyResourcePackagesDeductionPriorityRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyResourcePackagesDeductionPriorityResponse>;
  /** 修改serverless策略 {@link ModifyServerlessStrategyRequest} {@link ModifyServerlessStrategyResponse} */
  ModifyServerlessStrategy(data: ModifyServerlessStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServerlessStrategyResponse>;
  /** 修改快照备份跨地域配置 {@link ModifySnapBackupCrossRegionConfigRequest} {@link ModifySnapBackupCrossRegionConfigResponse} */
  ModifySnapBackupCrossRegionConfig(data: ModifySnapBackupCrossRegionConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySnapBackupCrossRegionConfigResponse>;
  /** 修改实例组ip，端口 {@link ModifyVipVportRequest} {@link ModifyVipVportResponse} */
  ModifyVipVport(data: ModifyVipVportRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVipVportResponse>;
  /** 销毁集群 {@link OfflineClusterRequest} {@link OfflineClusterResponse} */
  OfflineCluster(data: OfflineClusterRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineClusterResponse>;
  /** 销毁实例 {@link OfflineInstanceRequest} {@link OfflineInstanceResponse} */
  OfflineInstance(data: OfflineInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineInstanceResponse>;
  /** 下线分析集群 {@link OfflineLibraDBClusterRequest} {@link OfflineLibraDBClusterResponse} */
  OfflineLibraDBCluster(data: OfflineLibraDBClusterRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineLibraDBClusterResponse>;
  /** 下线只读分析引擎 {@link OfflineLibraDBInstanceRequest} {@link OfflineLibraDBInstanceResponse} */
  OfflineLibraDBInstance(data: OfflineLibraDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<OfflineLibraDBInstanceResponse>;
  /** 实例开通审计服务 {@link OpenAuditServiceRequest} {@link OpenAuditServiceResponse} */
  OpenAuditService(data: OpenAuditServiceRequest, config?: AxiosRequestConfig): AxiosPromise<OpenAuditServiceResponse>;
  /** 开启自定义密码复杂度功能 {@link OpenClusterPasswordComplexityRequest} {@link OpenClusterPasswordComplexityResponse} */
  OpenClusterPasswordComplexity(data: OpenClusterPasswordComplexityRequest, config?: AxiosRequestConfig): AxiosPromise<OpenClusterPasswordComplexityResponse>;
  /** 开启只读实例组接入 {@link OpenClusterReadOnlyInstanceGroupAccessRequest} {@link OpenClusterReadOnlyInstanceGroupAccessResponse} */
  OpenClusterReadOnlyInstanceGroupAccess(data: OpenClusterReadOnlyInstanceGroupAccessRequest, config?: AxiosRequestConfig): AxiosPromise<OpenClusterReadOnlyInstanceGroupAccessResponse>;
  /** 开通集群透明加密 {@link OpenClusterTransparentEncryptRequest} {@link OpenClusterTransparentEncryptResponse} */
  OpenClusterTransparentEncrypt(data: OpenClusterTransparentEncryptRequest, config?: AxiosRequestConfig): AxiosPromise<OpenClusterTransparentEncryptResponse>;
  /** 开通只读实例独有访问接入组 {@link OpenReadOnlyInstanceExclusiveAccessRequest} {@link OpenReadOnlyInstanceExclusiveAccessResponse} */
  OpenReadOnlyInstanceExclusiveAccess(data: OpenReadOnlyInstanceExclusiveAccessRequest, config?: AxiosRequestConfig): AxiosPromise<OpenReadOnlyInstanceExclusiveAccessResponse>;
  /** 开启SSL加密 {@link OpenSSLRequest} {@link OpenSSLResponse} */
  OpenSSL(data: OpenSSLRequest, config?: AxiosRequestConfig): AxiosPromise<OpenSSLResponse>;
  /** 开通外网 {@link OpenWanRequest} {@link OpenWanResponse} */
  OpenWan(data?: OpenWanRequest, config?: AxiosRequestConfig): AxiosPromise<OpenWanResponse>;
  /** 暂停serverless集群 {@link PauseServerlessRequest} {@link PauseServerlessResponse} */
  PauseServerless(data: PauseServerlessRequest, config?: AxiosRequestConfig): AxiosPromise<PauseServerlessResponse>;
  /** 退款资源包 {@link RefundResourcePackageRequest} {@link RefundResourcePackageResponse} */
  RefundResourcePackage(data: RefundResourcePackageRequest, config?: AxiosRequestConfig): AxiosPromise<RefundResourcePackageResponse>;
  /** 负载均衡数据库代理 {@link ReloadBalanceProxyNodeRequest} {@link ReloadBalanceProxyNodeResponse} */
  ReloadBalanceProxyNode(data: ReloadBalanceProxyNodeRequest, config?: AxiosRequestConfig): AxiosPromise<ReloadBalanceProxyNodeResponse>;
  /** 关闭多可用区部署 {@link RemoveClusterSlaveZoneRequest} {@link RemoveClusterSlaveZoneResponse} */
  RemoveClusterSlaveZone(data: RemoveClusterSlaveZoneRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveClusterSlaveZoneResponse>;
  /** 续费集群 {@link RenewClustersRequest} {@link RenewClustersResponse} */
  RenewClusters(data: RenewClustersRequest, config?: AxiosRequestConfig): AxiosPromise<RenewClustersResponse>;
  /** 续费分析集群 {@link RenewLibraDBClustersRequest} {@link RenewLibraDBClustersResponse} */
  RenewLibraDBClusters(data: RenewLibraDBClustersRequest, config?: AxiosRequestConfig): AxiosPromise<RenewLibraDBClustersResponse>;
  /** 回放实例审计日志 {@link ReplayInstanceAuditLogRequest} {@link ReplayInstanceAuditLogResponse} */
  ReplayInstanceAuditLog(data: ReplayInstanceAuditLogRequest, config?: AxiosRequestConfig): AxiosPromise<ReplayInstanceAuditLogResponse>;
  /** 修改数据库账号密码 {@link ResetAccountPasswordRequest} {@link ResetAccountPasswordResponse} */
  ResetAccountPassword(data: ResetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAccountPasswordResponse>;
  /** 修改分析集群账号密码 {@link ResetLibraDBClusterAccountPasswordRequest} {@link ResetLibraDBClusterAccountPasswordResponse} */
  ResetLibraDBClusterAccountPassword(data: ResetLibraDBClusterAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetLibraDBClusterAccountPasswordResponse>;
  /** 重启实例 {@link RestartInstanceRequest} {@link RestartInstanceResponse} */
  RestartInstance(data: RestartInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestartInstanceResponse>;
  /** 重启只读分析引擎 {@link RestartLibraDBInstanceRequest} {@link RestartLibraDBInstanceResponse} */
  RestartLibraDBInstance(data: RestartLibraDBInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestartLibraDBInstanceResponse>;
  /** 恢复serverless集群 {@link ResumeServerlessRequest} {@link ResumeServerlessResponse} */
  ResumeServerless(data: ResumeServerlessRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeServerlessResponse>;
  /** 批量回收账号权限 {@link RevokeAccountPrivilegesRequest} {@link RevokeAccountPrivilegesResponse} */
  RevokeAccountPrivileges(data: RevokeAccountPrivilegesRequest, config?: AxiosRequestConfig): AxiosPromise<RevokeAccountPrivilegesResponse>;
  /** 集群回档 {@link RollBackClusterRequest} {@link RollBackClusterResponse} */
  RollBackCluster(data: RollBackClusterRequest, config?: AxiosRequestConfig): AxiosPromise<RollBackClusterResponse>;
  /** 回档到新集群 {@link RollbackToNewClusterRequest} {@link RollbackToNewClusterResponse} */
  RollbackToNewCluster(data: RollbackToNewClusterRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackToNewClusterResponse>;
  /** 搜索集群数据库列表 {@link SearchClusterDatabasesRequest} {@link SearchClusterDatabasesResponse} */
  SearchClusterDatabases(data: SearchClusterDatabasesRequest, config?: AxiosRequestConfig): AxiosPromise<SearchClusterDatabasesResponse>;
  /** 搜索集群数据表列表 {@link SearchClusterTablesRequest} {@link SearchClusterTablesResponse} */
  SearchClusterTables(data: SearchClusterTablesRequest, config?: AxiosRequestConfig): AxiosPromise<SearchClusterTablesResponse>;
  /** 设置分析集群续费模式 {@link SetLibraDBClusterRenewFlagRequest} {@link SetLibraDBClusterRenewFlagResponse} */
  SetLibraDBClusterRenewFlag(data?: SetLibraDBClusterRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<SetLibraDBClusterRenewFlagResponse>;
  /** 设置自动续费 {@link SetRenewFlagRequest} {@link SetRenewFlagResponse} */
  SetRenewFlag(data: SetRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<SetRenewFlagResponse>;
  /** 开启日志投递 {@link StartCLSDeliveryRequest} {@link StartCLSDeliveryResponse} */
  StartCLSDelivery(data: StartCLSDeliveryRequest, config?: AxiosRequestConfig): AxiosPromise<StartCLSDeliveryResponse>;
  /** 停止日志投递 {@link StopCLSDeliveryRequest} {@link StopCLSDeliveryResponse} */
  StopCLSDelivery(data: StopCLSDeliveryRequest, config?: AxiosRequestConfig): AxiosPromise<StopCLSDeliveryResponse>;
  /** 更换集群vpc {@link SwitchClusterVpcRequest} {@link SwitchClusterVpcResponse} */
  SwitchClusterVpc(data: SwitchClusterVpcRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchClusterVpcResponse>;
  /** 主备可用区切换 {@link SwitchClusterZoneRequest} {@link SwitchClusterZoneResponse} */
  SwitchClusterZone(data: SwitchClusterZoneRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchClusterZoneResponse>;
  /** 更换数据库代理vpc {@link SwitchProxyVpcRequest} {@link SwitchProxyVpcResponse} */
  SwitchProxyVpc(data: SwitchProxyVpcRequest, config?: AxiosRequestConfig): AxiosPromise<SwitchProxyVpcResponse>;
  /** cynos解绑资源包 {@link UnbindClusterResourcePackagesRequest} {@link UnbindClusterResourcePackagesResponse} */
  UnbindClusterResourcePackages(data: UnbindClusterResourcePackagesRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindClusterResourcePackagesResponse>;
  /** 更新内核小版本 {@link UpgradeClusterVersionRequest} {@link UpgradeClusterVersionResponse} */
  UpgradeClusterVersion(data: UpgradeClusterVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeClusterVersionResponse>;
  /** 实例变配 {@link UpgradeInstanceRequest} {@link UpgradeInstanceResponse} */
  UpgradeInstance(data: UpgradeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeInstanceResponse>;
  /** 升级数据库代理配置 {@link UpgradeProxyRequest} {@link UpgradeProxyResponse} */
  UpgradeProxy(data: UpgradeProxyRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeProxyResponse>;
  /** 升级数据库代理版本 {@link UpgradeProxyVersionRequest} {@link UpgradeProxyVersionResponse} */
  UpgradeProxyVersion(data: UpgradeProxyVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeProxyVersionResponse>;
}

export declare type Versions = ["2019-01-07"];

export default Cynosdb;
