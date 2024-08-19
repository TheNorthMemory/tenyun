/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 集群内节点的规格磁盘规格描述 */
declare interface AttachCBSSpec {
  /** 节点磁盘类型，例如“CLOUD_SSD”\"CLOUD_PREMIUM" */
  DiskType?: string;
  /** 磁盘容量，单位G */
  DiskSize?: number;
  /** 磁盘总数 */
  DiskCount?: number;
  /** 描述 */
  DiskDesc?: string;
}

/** 备份实例详情 */
declare interface BackUpJobDisplay {
  /** 备份实例id */
  JobId?: number;
  /** 备份实例名 */
  Snapshot?: string;
  /** 备份数据量 */
  BackUpSize?: number;
  /** 备份单副本数据量 */
  BackUpSingleSize?: number | null;
  /** 实例创建时间 */
  BackUpTime?: string;
  /** 实例过期时间 */
  ExpireTime?: string;
  /** 实例状态 */
  JobStatus?: string;
  /** 0为默认。1时是对远端的doris进行备份，不周期，一次性 */
  BackupType?: number | null;
  /** 0为默认。1时是立即备份。2时是迁移 */
  BackupTimeType?: number | null;
  /** 远端doris的连接信息 */
  DorisSourceInfo?: DorisSourceInfo | null;
  /** 实例状态对应的数值 */
  JobStatusNum?: number | null;
  /** 备份实例中关于cos的信息 */
  BackupCosInfo?: BackupCosInfo | null;
}

/** 备份实例中关于cos的信息 */
declare interface BackupCosInfo {
  /** 备份文件所在的cos桶 */
  CosBucket?: string | null;
  /** 备份文件所在的完整cos路径 */
  CosPath?: string | null;
  /** 备份文件名称 */
  SnapShotPath?: string | null;
}

/** 备份任务的进度详情 */
declare interface BackupStatus {
  /** 备份任务id */
  JobId?: number;
  /** 快照名称 */
  SnapshotName?: string;
  /** 库名 */
  DbName?: string;
  /** 状态 */
  State?: string;
  /** 备份对象 */
  BackupObjects?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 快照结束时间 */
  SnapshotFinishedTime?: string;
  /** 上传结束时间 */
  UploadFinishedTime?: string;
  /** 结束时间 */
  FinishedTime?: string;
  /** 未完成任务 */
  UnfinishedTasks?: string;
  /** 进度 */
  Progress?: string;
  /** 错误信息 */
  TaskErrMsg?: string;
  /** 状态 */
  Status?: string;
  /** 超时信息 */
  Timeout?: number;
  /** 备份实例id */
  BackupJobId?: number | null;
  /** 实例对应snapshoit的id */
  TaskId?: number | null;
}

/** 备份表信息 */
declare interface BackupTableContent {
  /** 数据库 */
  Database: string | null;
  /** 表 */
  Table: string | null;
  /** 表总字节数 */
  TotalBytes: number | null;
  /** 表单个副本的大小 */
  SingleReplicaBytes?: string | null;
  /** 备份状态 */
  BackupStatus?: number | null;
  /** 备份的错误信息 */
  BackupErrorMsg?: string | null;
  /** 改库表是否绑定降冷策略 */
  IsOpenCoolDown?: boolean | null;
}

/** 资源组绑定的用户信息，需要username和host信息进行授权 */
declare interface BindUser {
  /** 用户名 */
  UserName?: string | null;
  /** 主机信息 */
  Host?: string | null;
}

/** 集群计费相关信息 */
declare interface ChargeProperties {
  /** 计费类型，“PREPAID” 预付费，“POSTPAID_BY_HOUR” 后付费 */
  ChargeType?: string | null;
  /** 是否自动续费，1表示自动续费开启 */
  RenewFlag?: number | null;
  /** 计费时间长度 */
  TimeSpan?: number | null;
  /** 计费时间单位，“m”表示月等 */
  TimeUnit?: string | null;
}

/** 集群的配置文件的修改历史 */
declare interface ClusterConfigsHistory {
  /** 配置文件名称 */
  FileName: string;
  /** 修改后的配置文件内容，base64编码 */
  NewConfValue: string;
  /** 修改前的配置文件内容，base64编码 */
  OldConfValue: string;
  /** 修改原因 */
  Remark: string | null;
  /** 修改时间 */
  ModifyTime: string;
  /** 修改子账号id */
  UserUin: string;
}

/** 用于返回XML格式的配置文件和内容以及其他配置文件有关的信息 */
declare interface ClusterConfigsInfoFromEMR {
  /** 配置文件名称 */
  FileName?: string;
  /** 配置文件对应的相关属性信息 */
  FileConf?: string;
  /** 配置文件对应的其他属性信息 */
  KeyConf?: string;
  /** 配置文件的内容，base64编码 */
  OriParam?: string;
  /** 用于表示当前配置文件是不是有过修改后没有重启，提醒用户需要重启 */
  NeedRestart?: number;
  /** 配置文件路径 */
  FilePath?: string | null;
  /** 配置文件kv值 */
  FileKeyValues?: string | null;
  /** 配置文件kv值 */
  FileKeyValuesNew?: ConfigKeyValue[] | null;
}

/** 返回配置的文件内容（key-value） */
declare interface ConfigKeyValue {
  /** key */
  KeyName?: string | null;
  /** 值 */
  Value?: string | null;
  /** 备注 */
  Message?: string | null;
  /** 1-只读，2-可修改但不可删除，3-可删除 */
  Display?: number | null;
  /** 0不支持 1支持热更新 */
  SupportHotUpdate?: number | null;
}

/** 客户提供cos认证信息。 */
declare interface CosSourceInfo {
  /** cos认证中的Id */
  SecretId?: string | null;
  /** cos认证中的key */
  SecretKey?: string | null;
  /** cos认证中的路径 */
  CosPath?: string | null;
}

/** 集群规格 */
declare interface CreateInstanceSpec {
  /** 规格名字 */
  SpecName: string;
  /** 数量 */
  Count: number;
  /** 云盘大小 */
  DiskSize: number;
}

/** 数据库审计 */
declare interface DataBaseAuditRecord {
  /** 查询用户 */
  OsUser?: string | null;
  /** 查询ID */
  InitialQueryId?: string | null;
  /** SQL语句 */
  Sql?: string | null;
  /** 开始时间 */
  QueryStartTime?: string | null;
  /** 执行耗时 */
  DurationMs?: number | null;
  /** 读取行数 */
  ReadRows?: number | null;
  /** 读取字节数 */
  ResultRows?: number | null;
  /** 结果字节数 */
  ResultBytes?: number | null;
  /** 内存 */
  MemoryUsage?: number | null;
  /** 初始查询IP */
  InitialAddress?: string | null;
  /** 数据库 */
  DbName?: string | null;
  /** sql类型 */
  SqlType?: string | null;
  /** catalog名称 */
  Catalog?: string | null;
}

/** 展示doris监控指标请求入参 */
declare interface DescribeMetricsFileReq {
  /** 集群类型 */
  InstanceType: string;
  /** 指标类型 */
  MetricType?: string;
  /** 是否关注 */
  IfAttention?: number;
}

/** 磁盘规格描述 */
declare interface DiskSpec {
  /** 磁盘类型，例如“CLOUD_SSD", "LOCAL_SSD"等 */
  DiskType: string;
  /** 磁盘类型说明，例如"云SSD", "本地SSD"等 */
  DiskDesc: string;
  /** 磁盘最小规格大小，单位G */
  MinDiskSize: number;
  /** 磁盘最大规格大小，单位G */
  MaxDiskSize: number;
  /** 磁盘数目 */
  DiskCount: number;
}

/** 外部doris集群的连接信息 */
declare interface DorisSourceInfo {
  /** doris集群的fe的ip */
  Host?: string | null;
  /** doris集群的fe的端口号 */
  Port?: number | null;
  /** doris集群的账号 */
  User?: string | null;
  /** doris集群的密码 */
  Password?: string | null;
}

/** 前端规则描述 */
declare interface FrontEndRule {
  /** id序列 */
  ID: number | null;
  /** 规则名称 */
  Name: string | null;
  /** 详细规则 */
  Rule: string | null;
}

/** KV配置 */
declare interface InstanceConfigItem {
  /** key */
  ConfKey: string;
  /** value */
  ConfValue: string;
}

/** Instance表detail字段 */
declare interface InstanceDetail {
  /** 告警策略是否可用 */
  EnableAlarmStrategy?: boolean | null;
}

/** 实例描述信息 */
declare interface InstanceInfo {
  /** 集群实例ID, "cdw-xxxx" 字符串类型 */
  InstanceId?: string | null;
  /** 集群实例名称 */
  InstanceName?: string | null;
  /** 状态,Init 创建中; Serving 运行中； Deleted已销毁；Deleting 销毁中；Modify 集群变更中； */
  Status?: string | null;
  /** 版本 */
  Version?: string | null;
  /** 地域, ap-guangzhou */
  Region?: string | null;
  /** 可用区， ap-guangzhou-3 */
  Zone?: string | null;
  /** 私有网络名称 */
  VpcId?: string | null;
  /** 子网名称 */
  SubnetId?: string | null;
  /** 付费类型，"hour", "prepay" */
  PayMode?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 过期时间 */
  ExpireTime?: string | null;
  /** 数据节点描述信息 */
  MasterSummary?: NodesSummary | null;
  /** zookeeper节点描述信息 */
  CoreSummary?: NodesSummary | null;
  /** 高可用，“true" "false" */
  HA?: string | null;
  /** 高可用类型：0：非高可用1：读高可用2：读写高可用。 */
  HaType?: number | null;
  /** 访问地址，例如 "10.0.0.1:9000" */
  AccessInfo?: string | null;
  /** 记录ID，数值型 */
  Id?: number | null;
  /** regionId, 表示地域 */
  RegionId?: number | null;
  /** 可用区说明，例如 "广州二区" */
  ZoneDesc?: string | null;
  /** 错误流程说明信息 */
  FlowMsg?: string | null;
  /** 状态描述，例如“运行中”等 */
  StatusDesc?: string | null;
  /** 自动续费标记 */
  RenewFlag?: boolean | null;
  /** 标签列表 */
  Tags?: Tag[] | null;
  /** 监控信息 */
  Monitor?: string | null;
  /** 是否开通日志 */
  HasClsTopic?: boolean | null;
  /** 日志主题ID */
  ClsTopicId?: string | null;
  /** 日志集ID */
  ClsLogSetId?: string | null;
  /** 是否支持xml配置管理 */
  EnableXMLConfig?: number | null;
  /** 区域 */
  RegionDesc?: string | null;
  /** 弹性网卡地址 */
  Eip?: string | null;
  /** 冷热分层系数 */
  CosMoveFactor?: number | null;
  /** external/local/yunti */
  Kind?: string | null;
  /** cos桶 */
  CosBucketName?: string | null;
  /** cbs */
  CanAttachCbs?: boolean | null;
  /** 小版本 */
  BuildVersion?: string | null;
  /** 组件信息注：这里返回类型实际为map[string]struct类型，并非显示的string类型，可以参考“示例值”进行数据的解析。 */
  Components?: string | null;
  /** 判断审计日志表是否有catalog字段 */
  IfExistCatalog?: number | null;
  /** 页面特性，用于前端屏蔽一些页面入口 */
  Characteristic?: string[] | null;
  /** 超时时间 单位s */
  RestartTimeout?: string | null;
  /** 内核优雅重启超时时间，如果为-1说明未设置 */
  GraceShutdownWaitSeconds?: string | null;
  /** 表名大小写是否敏感，0：敏感；1：不敏感，以小写进行比较；2：不敏感，表名改为以小写存储 */
  CaseSensitive?: number | null;
  /** 用户是否可以绑定安全组 */
  IsWhiteSGs?: boolean | null;
  /** 已绑定的安全组信息 */
  BindSGs?: string[] | null;
  /** 是否为多可用区 */
  EnableMultiZones?: boolean | null;
  /** 用户可用区和子网信息 */
  UserNetworkInfos?: string | null;
  /** 是否启用冷热分层。0：未开启 1：已开启 */
  EnableCoolDown?: number | null;
  /** 冷热分层使用COS桶 */
  CoolDownBucket?: string | null;
  /** 实例扩展信息 */
  Details?: InstanceDetail | null;
}

/** 实例节点描述信息 */
declare interface InstanceNode {
  /** IP地址 */
  Ip?: string;
  /** 机型，如 S1 */
  Spec?: string;
  /** cpu核数 */
  Core?: number;
  /** 内存大小 */
  Memory?: number;
  /** 磁盘类型 */
  DiskType?: string;
  /** 磁盘大小 */
  DiskSize?: number;
  /** 所属clickhouse cluster名称 */
  Role?: string;
  /** 状态 */
  Status?: string | null;
  /** rip */
  Rip?: string | null;
  /** FE节点角色 */
  FeRole?: string | null;
  /** UUID */
  UUID?: string | null;
}

/** 集群操作描述 */
declare interface InstanceOperation {
  /** 操作名称，例如“create_instance"、“scaleout_instance”等 */
  Name?: string;
  /** 操作结果，“Success"表示成功，”Fail"表示失败 */
  Result?: string;
  /** 操作名称描述，例如“创建”，“修改集群名称”等 */
  Desc?: string;
  /** 操作级别，例如“Critical", "Normal"等 */
  Level?: string;
  /** 操作级别描述，例如“高危”，“一般”等 */
  LevelDesc?: string;
  /** 操作开始时间 */
  StartTime?: string;
  /** 操作结束时间 */
  EndTime?: string;
  /** 操作结果描述，例如“成功”，“失败” */
  ResultDesc?: string;
  /** 操作用户ID */
  OperateUin?: string;
  /** 操作对应的jobid */
  JobId?: number;
  /** 操作明细 */
  OperationDetail?: string;
}

/** 用户是否关注监控指标入参 */
declare interface ModifyMetricFileStruct {
  /** 唯一id */
  Id: number;
  /** 是否关注 */
  IfAttention?: string;
}

/** doris监控指标关注（取消关注）功能入参 */
declare interface ModifyMetricFileStructNew {
  /** 集群类型 */
  InstanceType?: string;
  /** 指标类型 */
  MetricType?: string;
  /** 指标英文名 */
  Name?: string;
  /** 1：关注0：取消关注 */
  IfAttention?: number;
}

/** 网络信息 */
declare interface NetworkInfo {
  /** 可用区 */
  Zone?: string | null;
  /** 子网id */
  SubnetId?: string | null;
  /** 当前子网可用ip数 */
  SubnetIpNum?: number | null;
}

/** NodeInfo */
declare interface NodeInfo {
  /** 用户IP */
  Ip?: string | null;
  /** 节点状态 */
  Status?: number | null;
  /** 节点角色名 */
  NodeName?: string | null;
  /** 组件名 */
  ComponentName?: string | null;
  /** 节点角色 */
  NodeRole?: string | null;
  /** 节点上次重启的时间 */
  LastRestartTime?: string | null;
  /** 节点所在可用区 */
  Zone?: string | null;
}

/** 节点信息列表 */
declare interface NodeInfos {
  /** 节点在doris中明朝n */
  NodeName?: string;
  /** 节点状态 */
  Status?: number;
  /** 节点ip */
  Ip?: string;
  /** 节点角色 */
  NodeRole?: string;
  /** 组件名 */
  ComponentName?: string;
  /** 上一次重启时间 */
  LastRestartTime?: string;
}

/** 节点角色描述信息 */
declare interface NodesSummary {
  /** 机型，如 S1 */
  Spec?: string;
  /** 节点数目 */
  NodeSize?: number;
  /** cpu核数，单位个 */
  Core?: number;
  /** 内存大小，单位G */
  Memory?: number;
  /** 磁盘大小，单位G */
  Disk?: number;
  /** 磁盘类型 */
  DiskType?: string;
  /** 磁盘描述 */
  DiskDesc?: string;
  /** 挂载云盘信息 */
  AttachCBSSpec?: AttachCBSSpec | null;
  /** 子产品名称 */
  SubProductType?: string | null;
  /** 规格核数 */
  SpecCore?: number | null;
  /** 规格内存 */
  SpecMemory?: number | null;
  /** 磁盘大小 */
  DiskCount?: number | null;
  /** 是否加密 */
  Encrypt?: number | null;
  /** 最大磁盘 */
  MaxDiskSize?: number | null;
}

/** 可用区的地域大类描述 */
declare interface RegionAreaInfo {
  /** 大类地域信息，如"south_china", "east_china"等 */
  Name: string;
  /** 对应Name的描述，例如“华南地区”，“华东地区”等 */
  Desc: string;
  /** 具体地域列表1 */
  Regions: RegionInfo[];
}

/** 地域描述信息 */
declare interface RegionInfo {
  /** 地域名称，例如“ap-guangzhou" */
  Name?: string;
  /** 地域描述，例如"广州” */
  Desc?: string;
  /** 地域唯一标记 */
  RegionId?: number;
  /** 地域下所有可用区列表 */
  Zones?: ZoneInfo[] | null;
  /** 该地域下集群数目 */
  Count?: number;
  /** 0代表是国际站 1代表不是 */
  IsInternationalSite?: number | null;
  /** 桶 */
  Bucket?: string | null;
}

/** 集群内节点的规格磁盘规格描述 */
declare interface ResourceNodeDiskSpec {
  /** 节点磁盘类型，例如“CLOUD_SSD”\"CLOUD_PREMIUM" */
  DiskType?: string;
  /** 磁盘容量，单位G */
  DiskSize?: number;
  /** 磁盘总数 */
  DiskCount?: number;
}

/** 集群内节点的规格描述 */
declare interface ResourceNodeSpec {
  /** 节点类型，“DATA"数据节点，”COMMON" zookeeper节点 */
  Type: string;
  /** 节点规格名称，例如 “SCH1","SCH2”等 */
  SpecName: string;
  /** 节点数目 */
  Count: number;
  /** 磁盘规格描述 */
  DiskSpec?: ResourceNodeDiskSpec | null;
  /** 云盘是否加密，0不加密/1加密 默认为0 */
  Encrypt?: number | null;
  /** 额外信息 */
  Extra?: SpecExtra | null;
  /** 挂载云盘信息 */
  AttachCBSSpec?: ResourceNodeDiskSpec | null;
}

/** 资源规格描述信息 */
declare interface ResourceSpec {
  /** 规格名称，例如“SCH1" */
  Name?: string;
  /** cpu核数 */
  Cpu?: number;
  /** 内存大小，单位G */
  Mem?: number;
  /** 分类标记，STANDARD/BIGDATA/HIGHIO分别表示标准型/大数据型/高IO */
  Type?: string;
  /** 系统盘描述信息 */
  SystemDisk?: DiskSpec | null;
  /** 数据盘描述信息 */
  DataDisk?: DiskSpec | null;
  /** 最大节点数目限制 */
  MaxNodeSize?: number | null;
  /** 是否可用，false代表售罄 */
  Available?: boolean | null;
  /** 规格描述信息 */
  ComputeSpecDesc?: string | null;
  /** cvm库存 */
  InstanceQuota?: number | null;
}

/** 恢复任务信息 */
declare interface RestoreStatus {
  /** 恢复任务id */
  JobId?: number;
  /** 恢复任务标签 */
  Label?: string;
  /** 恢复任务时间戳 */
  Timestamp?: string;
  /** 恢复任务所在库 */
  DbName?: string;
  /** 恢复任务状态 */
  State?: string;
  /** 恢复时是否允许导入 */
  AllowLoad?: boolean;
  /** 副本数 */
  ReplicationNum?: string;
  /** 副本数 */
  ReplicaAllocation?: string;
  /** 恢复对象 */
  RestoreObjects?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 元数据准备时间 */
  MetaPreparedTime?: string;
  /** 快照结束时间 */
  SnapshotFinishedTime?: string;
  /** 下载结束时间 */
  DownloadFinishedTime?: string;
  /** 结束时间 */
  FinishedTime?: string;
  /** 未完成任务 */
  UnfinishedTasks?: string;
  /** 进度 */
  Progress?: string;
  /** 错误信息 */
  TaskErrMsg?: string;
  /** 状态 */
  Status?: string;
  /** 作业超时时间 */
  Timeout?: number;
  /** 是否保持源表中的副本数 */
  ReserveReplica?: boolean;
  /** 是否保持源表中的动态分区 */
  ReserveDynamicPartitionEnable?: boolean;
  /** 备份实例id */
  BackupJobId?: number | null;
  /** 实例对应snapshot的id */
  TaskId?: number | null;
}

/** 列表页搜索的标记列表 */
declare interface SearchTags {
  /** 标签的键 */
  TagKey?: string;
  /** 标签的值 */
  TagValue?: string;
  /** 1表示只输入标签的键，没有输入值；0表示输入键时且输入值 */
  AllValue?: number;
}

/** 慢查询记录 */
declare interface SlowQueryRecord {
  /** 查询用户 */
  OsUser?: string;
  /** 查询ID */
  InitialQueryId?: string;
  /** SQL语句 */
  Sql?: string;
  /** 开始时间 */
  QueryStartTime?: string;
  /** 执行耗时 */
  DurationMs?: number;
  /** 读取行数 */
  ReadRows?: number;
  /** 读取字节数 */
  ResultRows?: number;
  /** 结果字节数 */
  ResultBytes?: number;
  /** 内存 */
  MemoryUsage?: number;
  /** 初始查询IP */
  InitialAddress?: string;
  /** 数据库名 */
  DbName?: string | null;
  /** 是否是查询，0：否，1：查询语句 */
  IsQuery?: number | null;
  /** ResultBytes的MB格式 */
  ResultBytesMB?: number | null;
  /** MemoryUsage的MB表示 */
  MemoryUsageMB?: number | null;
  /** DurationMs的秒表示 */
  DurationSec?: number | null;
}

/** 额外参数 */
declare interface SpecExtra {
  /** 要删除的shards */
  DelShards?: string;
  /** 要删除的节点uip */
  DelHosts?: string;
}

/** 标签描述 */
declare interface Tag {
  /** 标签的键 */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
}

/** 更新用户权限结构体 */
declare interface UpdateUserPrivileges {
  /** 是否设置catalog权限 */
  IsSetGlobalCatalog?: boolean;
}

/** 用户绑定资源组信息 */
declare interface UserWorkloadGroup {
  /** test */
  UserName?: string | null;
  /** normal */
  WorkloadGroupName?: string | null;
}

/** 检查doris内核是否支持新语法。 */
declare interface VersionReplicaItem {
  /** 版本描述 */
  ReplicaFlag: number | null;
  /** 错误信息 */
  ErrorMsg: string | null;
}

/** 资源组相关配置 */
declare interface WorkloadGroupConfig {
  /** 资源组名称 */
  WorkloadGroupName?: string | null;
  /** CPU权重 */
  CpuShare?: number | null;
  /** 内存限制，所有资源组的内存限制值之和应该小于等于100 */
  MemoryLimit?: number | null;
  /** 是否允许超配分配 */
  EnableMemoryOverCommit?: boolean | null;
  /** cpu硬限制 */
  CpuHardLimit?: string | null;
}

/** 可用区描述信息 */
declare interface ZoneInfo {
  /** 可用区名称，例如"ap-guangzhou-1" */
  Name?: string;
  /** 可用区描述信息，例如“广州一区” */
  Desc?: string;
  /** 可用区唯一标记 */
  ZoneId?: number;
  /** Encryptid */
  Encrypt?: number | null;
}

declare interface CancelBackupJobRequest {
  /** 集群id */
  InstanceId: string;
  /** 需要取消的备份实例id */
  BackUpJobId?: number;
}

declare interface CancelBackupJobResponse {
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackUpScheduleRequest {
  /** 编辑时需要传 */
  ScheduleId?: number;
  /** 选择的星期 逗号分隔废弃：使用ScheduleInfo */
  WeekDays?: string;
  /** 执行小时废弃：使用ScheduleInfo */
  ExecuteHour?: number;
  /** 备份表列表 */
  BackUpTables?: BackupTableContent[];
  /** 0为默认。1时是对远端的doris进行备份，不周期，一次性 */
  BackupType?: number;
  /** 远端doris集群的连接信息 */
  DorisSourceInfo?: DorisSourceInfo;
  /** 0为默认。1时是一次性备份。2时是远端备份 */
  BackupTimeType?: number;
  /** 0为默认。1时是备份完成后立即恢复 */
  RestoreType?: number;
  /** 0为默认。1时是提供自定义的secret连接cos */
  AuthType?: number;
  /** cos认证的信息 */
  CosSourceInfo?: CosSourceInfo;
}

declare interface CreateBackUpScheduleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceNewRequest {
  /** 可用区 */
  Zone: string;
  /** FE规格 */
  FeSpec: CreateInstanceSpec;
  /** BE规格 */
  BeSpec: CreateInstanceSpec;
  /** 是否高可用 */
  HaFlag: boolean;
  /** 用户VPCID */
  UserVPCId: string;
  /** 用户子网ID */
  UserSubnetId: string;
  /** 产品版本号 */
  ProductVersion: string;
  /** 付费类型 */
  ChargeProperties: ChargeProperties;
  /** 实例名字 */
  InstanceName: string;
  /** 数据库密码 */
  DorisUserPwd: string;
  /** 标签列表 */
  Tags?: Tag[];
  /** 高可用类型：0：非高可用（只有1个FE，FeSpec.CreateInstanceSpec.Count=1），1：读高可用（至少需部署3个FE，FeSpec.CreateInstanceSpec.Count>=3，且为奇数），2：读写高可用（至少需部署5个FE，FeSpec.CreateInstanceSpec.Count>=5，且为奇数）。 */
  HaType?: number;
  /** 表名大小写是否敏感，0：敏感；1：不敏感，以小写进行比较；2：不敏感，表名改为以小写存储 */
  CaseSensitive?: number;
  /** 是否开启多可用区 */
  EnableMultiZones?: boolean;
  /** 开启多可用区后，用户的所有可用区和子网信息 */
  UserMultiZoneInfos?: NetworkInfo;
}

declare interface CreateInstanceNewResponse {
  /** 流程ID */
  FlowId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkloadGroupRequest {
  /** 集群id */
  InstanceId: string;
  /** 资源组配置 */
  WorkloadGroup?: WorkloadGroupConfig;
}

declare interface CreateWorkloadGroupResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBackUpDataRequest {
  /** 集群id */
  InstanceId: string;
  /** 任务id */
  BackUpJobId?: number;
  /** 是否删除所有数据 */
  IsDeleteAll?: boolean;
}

declare interface DeleteBackUpDataResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkloadGroupRequest {
  /** 集群id */
  InstanceId: string;
  /** 需要删除的资源组名称 */
  WorkloadGroupName?: string;
}

declare interface DeleteWorkloadGroupResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAreaRegionRequest {
  /** 是否是国际站 */
  IsInternationalSite?: boolean;
}

declare interface DescribeAreaRegionResponse {
  /** 地域列表 */
  Items?: RegionAreaInfo[];
  /** 前端规则描述 */
  FrontEndRules?: FrontEndRule[] | null;
  /** 返回可用的白名单名称 */
  AvailableWhiteListNames?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackUpJobDetailRequest {
  /** 集群id */
  InstanceId: string;
  /** 任务id */
  BackUpJobId: number;
}

declare interface DescribeBackUpJobDetailResponse {
  /** 备份表详情 */
  TableContents: BackupTableContent[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackUpJobRequest {
  /** 集群id */
  InstanceId: string;
  /** 分页大小 */
  PageSize?: number;
  /** 页号 */
  PageNum?: number;
  /** 开始时间 */
  BeginTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** jobid的string类型 */
  JobIdFiltersStr?: string;
}

declare interface DescribeBackUpJobResponse {
  /** 任务列表 */
  BackUpJobs?: BackUpJobDisplay[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackUpSchedulesRequest {
}

declare interface DescribeBackUpSchedulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackUpTablesRequest {
  /** 集群id */
  InstanceId: string;
  /** 0为默认。1时是对远端的doris进行备份，不周期，一次性。2时为cos恢复，一次性 */
  BackupType?: number;
  /** 远端doris集群的连接信息 */
  DorisSourceInfo?: DorisSourceInfo;
  /** cos信息 */
  CosSourceInfo?: CosSourceInfo;
}

declare interface DescribeBackUpTablesResponse {
  /** 可备份表列表 */
  AvailableTables?: BackupTableContent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackUpTaskDetailRequest {
  /** 集群id */
  InstanceId: string;
  /** 任务id */
  BackUpJobId: number;
}

declare interface DescribeBackUpTaskDetailResponse {
  /** 备份任务进度详情 */
  BackupStatus: BackupStatus[] | null;
  /** 错误信息 */
  ErrorMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterConfigsHistoryRequest {
  /** 集群id名称 */
  InstanceId: string;
  /** 分页参数，第一页为0，第二页为10 */
  Offset: number;
  /** 分页参数，分页步长，默认为10 */
  Limit: number;
  /** 配置修改历史的时间范围开始 */
  StartTime: string;
  /** 配置修改历史的时间范围结束 */
  EndTime: string;
  /** 需要查询的配置文件名称数组，如果为空则查询全部历史记录。目前支持的配置文件名称有：apache_hdfs_broker.conf、be.conf、fe.conf、core-site.xml、hdfs-site.xml、odbcinst.ini */
  ConfigFileNames?: string[];
}

declare interface DescribeClusterConfigsHistoryResponse {
  /** 实例总数 */
  TotalCount?: number;
  /** 配置文件修改历史 */
  ClusterConfHistory?: ClusterConfigsHistory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterConfigsRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 0 公有云查询；1青鹅查询，青鹅查询显示所有需要展示的 */
  ConfigType?: number;
  /** 模糊搜索关键字文件 */
  FileName?: string;
  /** 0集群维度 1节点维度 */
  ClusterConfigType?: number;
  /** eth0的ip地址 */
  IPAddress?: string;
}

declare interface DescribeClusterConfigsResponse {
  /** 返回实例的配置文件相关的信息 */
  ClusterConfList?: ClusterConfigsInfoFromEMR[];
  /** 返回当前内核版本 如果不存在则返回空字符串 */
  BuildVersion?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseAuditDownloadRequest {
  /** 实例ID */
  InstanceId: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 分页 */
  PageSize: number;
  /** 分页 */
  PageNum: number;
  /** 排序参数 */
  OrderType?: string;
  /** 用户 */
  User?: string;
  /** 数据库 */
  DbName?: string;
  /** sql类型 */
  SqlType?: string;
  /** sql语句 */
  Sql?: string;
  /** 用户 多选 */
  Users?: string[];
  /** 数据库 多选 */
  DbNames?: string[];
  /** sql类型 多选 */
  SqlTypes?: string[];
  /** catalog名称 （多选） */
  Catalogs?: string[];
}

declare interface DescribeDatabaseAuditDownloadResponse {
  /** 日志的cos地址 */
  CosUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseAuditRecordsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 分页 */
  PageSize: number;
  /** 分页 */
  PageNum: number;
  /** 排序参数 */
  OrderType?: string;
  /** 用户 */
  User?: string;
  /** 数据库 */
  DbName?: string;
  /** sql类型 */
  SqlType?: string;
  /** sql语句 */
  Sql?: string;
  /** 用户 （多选） */
  Users?: string[];
  /** 数据库 （多选） */
  DbNames?: string[];
  /** sql类型 （多选） */
  SqlTypes?: string[];
  /** catalog名称（多选） */
  Catalogs?: string[];
}

declare interface DescribeDatabaseAuditRecordsResponse {
  /** 总数 */
  TotalCount?: number;
  /** 记录列表 */
  SlowQueryRecords?: DataBaseAuditRecord;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDatabaseAuditResourceRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeDatabaseAuditResourceResponse {
  /** 数据库列表 */
  Databases?: string[];
  /** 用户列表 */
  Users?: string[];
  /** sql类型列表 */
  SqlTypes?: string[];
  /** catalog字段 */
  Catalogs?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDmsSqlHistoryRequest {
  /** 查询节点ip */
  QueryNode?: string[];
  /** 运行状态 */
  QueryStatus?: string[];
  /** 模糊搜索sql */
  QuerySql?: string;
  /** 根据报错原因搜索 */
  QueryErrMsg?: string;
}

declare interface DescribeDmsSqlHistoryResponse {
  /** 集群所有的查询节点 */
  QueryNodeList?: string[];
  /** 集群所有的查询状态 */
  QueryStatusList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDorisMetricFilesRequest {
  /** 接口类型 */
  ApiType: string;
  /** 集群id */
  InstanceId: string;
  /** 展示监控指标入参 */
  DescribeMetricsFileReq?: DescribeMetricsFileReq;
  /** 点关注功能入参 */
  ModifyMetricFileReq?: ModifyMetricFileStruct;
  /** 监控指标关注功能入参 */
  ModifyAttentionMetricFileReq?: ModifyMetricFileStructNew;
}

declare interface DescribeDorisMetricFilesResponse {
  /** ErrorMsg */
  ErrorMsg?: string | null;
  /** 返回数据 */
  ReturnData?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFederationTokenRequest {
}

declare interface DescribeFederationTokenResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFrontEndRequest {
  /** 实例id */
  InstanceId?: string;
  /** 文件类型 */
  ConfigType?: string;
  /** 参数1 */
  Param1?: string;
  /** 参数2 */
  Param2?: string;
  /** 参数3 */
  Param3?: string;
  /** 参数4 */
  Param4?: string;
  /** 参数5 */
  Param5?: string;
}

declare interface DescribeFrontEndResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGoodsDetailRequest {
  /** 操作类型，“CREATE"表示创建、”MODIFY"表示变更配置、“RENEW"表示续费 */
  Case: string;
  /** 可用区，例如"ap-guangzhou-3"表示广州三区等 */
  Zone?: string;
  /** 集群的高可用标记，true表示为高可用集群 */
  HaFlag?: boolean;
  /** 高可用类型： 0：非高可用 1：读高可用 2：读写高可用。 */
  HaType?: number;
  /** 用户集群的私有网络 */
  UserVPCId?: string;
  /** 用户集群的子网 */
  UserSubnetId?: string;
  /** 用户集群的版本，例如“20.7.2.30”等 */
  ProductVersion?: string;
  /** 集群ID，创建时为空，其他情况必须存在 */
  InstanceId?: string;
  /** 集群资源规格描述 */
  Resources?: ResourceNodeSpec[];
  /** 集群规格修改参数 */
  ModifySpec?: ResourceNodeSpec;
  /** 计费信息 */
  ChargeProperties?: ChargeProperties;
  /** 创建集群时需要填写InstanceName */
  InstanceName?: string;
  /** 购买页填写的标签列表 */
  Tags?: Tag[];
  /** CLS日志集ID */
  ClsLogSetId?: string;
  /** 用户子网剩余ip数量 */
  UserSubnetIPNum?: number;
  /** COS桶名称 */
  CosBucketName?: string;
  /** 按量计费转包年包月 */
  HourToPrepaid?: boolean;
  /** base64密码 */
  DorisUserPwd?: string;
  /** 日志的类型，es或者cls_topic */
  LogType?: string;
  /** 表名大小写是否敏感，0：敏感；1：不敏感，表名改为以小写存储；2：不敏感，以小写进行比较 */
  CaseSensitive?: number;
  /** true为滚动重启 false为批量重启 */
  RollingRestart?: boolean;
  /** 是否为多可用区 */
  EnableMultiZones?: boolean;
  /** 用户多可用区的网络信息 */
  UserMultiZoneInfos?: NetworkInfo[];
  /** 扩展字段 */
  Details?: InstanceDetail;
}

declare interface DescribeGoodsDetailResponse {
  /** GoodsDetail对象 */
  GoodsDetail?: string;
  /** GoodsCategoryId 表示操作类型 */
  GoodsCategoryId?: number;
  /** 子商品码 */
  Type?: string;
  /** 付费模式，0后付费，1预付费 */
  PayMode?: number;
  /** 地域ID */
  RegionId?: number;
  /** 可用区ID */
  ZoneId?: number;
  /** 资源标识符 */
  ResourceId?: string;
  /** 商品数目 */
  GoodsNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceNodesInfoRequest {
  /** 集群id */
  InstanceID: string;
}

declare interface DescribeInstanceNodesInfoResponse {
  /** Be节点 */
  BeNodes?: string[] | null;
  /** Fe节点 */
  FeNodes?: string[] | null;
  /** Fe master节点 */
  FeMaster?: string;
  /** Be节点信息 */
  BeNodeInfos?: NodeInfo[] | null;
  /** Fe节点信息 */
  FeNodeInfos?: NodeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceNodesRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 集群角色类型，默认为 "data"数据节点 */
  NodeRole?: string;
  /** 分页参数，第一页为0，第二页为10 */
  Offset?: number;
  /** 分页参数，分页步长，默认为10 */
  Limit?: number;
  /** 展现策略，All时显示所有 */
  DisplayPolicy?: string;
}

declare interface DescribeInstanceNodesResponse {
  /** 总数 */
  TotalCount?: number;
  /** 实例节点总数 */
  InstanceNodesList?: InstanceNode[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceNodesRoleRequest {
  /** 实例id */
  InstanceId: string;
  /** 过滤ip */
  IpFilter?: string;
}

declare interface DescribeInstanceNodesRoleResponse {
  /** 错误码 */
  ErrorMsg?: string;
  /** 节点总数 */
  TotalCount?: number;
  /** 无 */
  NodeInfos?: NodeInfos[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceOperationsRequest {
  /** 集群ID */
  InstanceId: string;
  /** 分页参数，偏移量，从0开始 */
  Offset?: number;
  /** 分页参数，每页数目，默认为10 */
  Limit?: number;
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
}

declare interface DescribeInstanceOperationsResponse {
  /** 操作记录总数 */
  TotalCount: number;
  /** 操作记录具体数据 */
  Operations: InstanceOperation[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceResponse {
  /** 实例描述信息 */
  InstanceInfo?: InstanceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceStateRequest {
  /** 集群实例名称 */
  InstanceId: string;
}

declare interface DescribeInstanceStateResponse {
  /** 集群状态，例如：Serving */
  InstanceState?: string;
  /** 集群操作创建时间 */
  FlowCreateTime?: string | null;
  /** 集群操作名称 */
  FlowName?: string | null;
  /** 集群操作进度 */
  FlowProgress?: number | null;
  /** 集群状态描述，例如：运行中 */
  InstanceStateDesc?: string | null;
  /** 集群流程错误信息，例如：“创建失败，资源不足” */
  FlowMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceUsedSubnetsRequest {
  /** 集群id */
  InstanceId: string;
}

declare interface DescribeInstanceUsedSubnetsResponse {
  /** 集群使用的vpc信息 */
  VpcId?: string | null;
  /** 集群使用的subnet信息 */
  UsedSubnets?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesHealthStateRequest {
  /** 集群Id */
  InstanceID?: string;
  /** "" 或者 某个集群Id */
  Input?: string;
}

declare interface DescribeInstancesHealthStateResponse {
  /** 出参 */
  Data?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 搜索的集群id名称 */
  SearchInstanceId?: string;
  /** 搜索的集群name */
  SearchInstanceName?: string;
  /** 分页参数，第一页为0，第二页为10 */
  Offset?: number;
  /** 分页参数，分页步长，默认为10 */
  Limit?: number;
  /** 搜索标签列表 */
  SearchTags?: SearchTags[];
}

declare interface DescribeInstancesResponse {
  /** 实例总数 */
  TotalCount?: number;
  /** 实例数组 */
  InstancesList?: InstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionZoneRequest {
  /** 服务 */
  Service?: string;
  /** 是否是国际站 */
  IsInternationalSite?: boolean;
}

declare interface DescribeRegionZoneResponse {
  /** 地域列表 */
  Items?: RegionAreaInfo[];
  /** 内核版本列表 */
  Versions?: string[];
  /** 网络规则 */
  VpcRule?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReplicaVersionRequest {
  /** 实例id */
  InstanceId: string;
}

declare interface DescribeReplicaVersionResponse {
  /** 是否支持新语法 */
  ReplicaFlagItem: VersionReplicaItem | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRestoreTaskDetailRequest {
  /** 集群id */
  InstanceId: string;
  /** 任务id */
  BackUpJobId: number;
}

declare interface DescribeRestoreTaskDetailResponse {
  /** 恢复任务进度详情 */
  RestoreStatus: RestoreStatus[] | null;
  /** 错误信息 */
  ErrorMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowQueryRecordsDownloadRequest {
  /** 实例ID */
  InstanceId: string;
  /** 慢查询时间 */
  QueryDurationMs: number;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 排序参数 */
  DurationMs?: string;
  /** 查询sql */
  Sql?: string;
  /** 排序参数 */
  ReadRows?: string;
  /** 排序参数 */
  ResultBytes?: string;
  /** 排序参数 */
  MemoryUsage?: string;
  /** IsQuery条件 */
  IsQuery?: number;
  /** 数据库名称 */
  DbName?: string[];
  /** catalog名称 */
  CatalogName?: string[];
}

declare interface DescribeSlowQueryRecordsDownloadResponse {
  /** cos地址 */
  CosUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSlowQueryRecordsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 慢查询时间 */
  QueryDurationMs: number;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 分页 */
  PageSize: number;
  /** 分页 */
  PageNum: number;
  /** 排序参数 */
  DurationMs?: string;
  /** 数据库名称 */
  DbName?: string[];
  /** 是否是查询，0：否， 1：是 */
  IsQuery?: number;
  /** catalog名称 */
  CatalogName?: string[];
  /** sql名 */
  Sql?: string;
  /** ReadRows排序字段 */
  ReadRows?: string;
  /** ResultBytes排序字段 */
  ResultBytes?: string;
  /** MemoryUsage排序字段 */
  MemoryUsage?: string;
}

declare interface DescribeSlowQueryRecordsResponse {
  /** 总数 */
  TotalCount?: number;
  /** 记录列表 */
  SlowQueryRecords?: SlowQueryRecord[];
  /** 所有数据库名 */
  DBNameList?: string[] | null;
  /** 所有catalog名 */
  CatalogNameList?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpecRequest {
  /** 地域信息，例如"ap-guangzhou-1" */
  Zone: string;
  /** 计费类型，PREPAID 包年包月，POSTPAID_BY_HOUR 按量计费 */
  PayMode?: string;
  /** 多可用区 */
  Zones?: string[];
  /** 机型名称 */
  SpecName?: string;
}

declare interface DescribeSpecResponse {
  /** zookeeper节点规格描述 */
  MasterSpec?: ResourceSpec[];
  /** 数据节点规格描述 */
  CoreSpec?: ResourceSpec[];
  /** 云盘列表 */
  AttachCBSSpec?: DiskSpec[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSqlApisRequest {
  /** 用户链接来自的 IP */
  WhiteHost?: string;
  /** catalog名称 */
  Catalog?: string;
  /** catalog集合 */
  Catalogs?: string[];
}

declare interface DescribeSqlApisResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTableListRequest {
  /** 资源ID，建表所用的TCHouse-D资源ID。 */
  InstanceId: string;
  /** 需要获取表列表的库 */
  DbName: string;
  /** 使用该用户进行操作，该用户需要有对应的权限。如果该TCHouse-D集群使用CAM用户注册内核账户，则不需要填写 */
  UserName?: string;
  /** 用户对应的密码。如果该TCHouse-D集群使用CAM用户注册内核账户，则不需要填写 */
  PassWord?: string;
  /** 查询库所在的数据源，不填则默认为内部数据源（internal）。 */
  CatalogName?: string;
}

declare interface DescribeTableListResponse {
  /** 表名列表 */
  TableNames?: string[] | null;
  /** 错误信息 */
  Message?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUserBindWorkloadGroupRequest {
  /** 集群id */
  InstanceId?: string;
}

declare interface DescribeUserBindWorkloadGroupResponse {
  /** 用户绑定资源组信息 */
  UserBindInfos?: UserWorkloadGroup[];
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkloadGroupRequest {
  /** 集群id */
  InstanceId: string;
}

declare interface DescribeWorkloadGroupResponse {
  /** 资源组信息 */
  WorkloadGroups?: WorkloadGroupConfig[];
  /** 是否开启资源组：开启-open、关闭-close */
  Status?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyInstanceRequest {
  /** 集群ID */
  InstanceId: string;
}

declare interface DestroyInstanceResponse {
  /** 流程ID */
  FlowId?: string;
  /** 集群ID */
  InstanceId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FitClsLogRequest {
  /** 集群ID，例如cdwch-xxxx */
  InstanceId: string;
  /** cls日志集ID */
  ClsLogSetId: string;
  /** 日志的类型，es还是cls_topic */
  LogType?: string;
}

declare interface FitClsLogResponse {
  /** 流程相关信息 */
  FlowId?: number;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceKeyValConfigsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 文件名称 */
  FileName: string;
  /** 新增配置列表 */
  AddItems?: InstanceConfigItem[];
  /** 更新配置列表 */
  UpdateItems?: InstanceConfigItem[];
  /** 删除配置列表 */
  DelItems?: InstanceConfigItem[];
  /** 备注（50字以内） */
  Message?: string;
  /** 热更新列表 */
  HotUpdateItems?: InstanceConfigItem[];
  /** 删除配置列表 */
  DeleteItems?: InstanceConfigItem;
  /** ip地址 */
  IPAddress?: string;
}

declare interface ModifyInstanceKeyValConfigsResponse {
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceRequest {
  /** 实例Id */
  InstanceId: string;
  /** 新修改的实例名称 */
  InstanceName: string;
}

declare interface ModifyInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNodeStatusRequest {
  /** 集群ID，例如cdwch-xxxx */
  InstanceId: string;
  /** 节点信息 */
  NodeInfos: NodeInfos[];
  /** 节点操作 */
  OperationCode: string;
  /** 超时时间（秒） */
  RestartTimeOut?: string;
}

declare interface ModifyNodeStatusResponse {
  /** 流程相关信息 */
  FlowId?: number;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityGroupsRequest {
  /** 集群id */
  InstanceId: string;
  /** 修改前的安全组信息 */
  OldSecurityGroupIds?: string[];
  /** 修改后的安全组信息 */
  ModifySecurityGroupIds?: string[];
}

declare interface ModifySecurityGroupsResponse {
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserBindWorkloadGroupRequest {
  /** 集群id */
  InstanceId: string;
  /** 需要绑定资源组的用户信息，如果一个账户拥有多个主机信息，需要将这些信息都传入 */
  BindUsers?: BindUser[];
  /** 修改前绑定的资源组名称 */
  OldWorkloadGroupName?: string;
  /** 修改后绑定的资源组名称 */
  NewWorkloadGroupName?: string;
}

declare interface ModifyUserBindWorkloadGroupResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserPrivilegesV3Request {
  /** 集群id */
  InstanceId: string;
  /** 用户名 */
  UserName: string;
  /** 用户权限 */
  UserPrivileges: UpdateUserPrivileges;
  /** 用户链接来自的 IP */
  WhiteHost?: string;
}

declare interface ModifyUserPrivilegesV3Response {
  /** 错误信息，为空就是没有错误 */
  ErrorMsg?: string | null;
  /** 集群id */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWorkloadGroupRequest {
  /** 集群id */
  InstanceId: string;
  /** 修改的资源组信息 */
  WorkloadGroup?: WorkloadGroupConfig;
}

declare interface ModifyWorkloadGroupResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWorkloadGroupStatusRequest {
  /** 集群id */
  InstanceId: string;
  /** 是否开启资源组：open-开启、close-关闭 */
  OperationType?: string;
}

declare interface ModifyWorkloadGroupStatusResponse {
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenBackUpRequest {
  /** 集群id */
  InstanceId: string;
  /** 取值：open:打开close:关闭updateBucket:变更桶名 */
  OperationType: string;
  /** 桶名字 */
  CosBucketName: string;
}

declare interface OpenBackUpResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverBackUpJobRequest {
  /** 集群id */
  InstanceId: string;
  /** 任务id */
  BackUpJobId: number;
  /** 恢复出来的新表副本数 */
  ReplicationNum?: number;
  /** 恢复是否保持源表中的配置，1时表示保留源表中的配置 */
  ReserveSourceConfig?: number;
  /** 0默认 1cos恢复 */
  RecoverType?: number;
  /** CosSourceInfo对象 */
  CosSourceInfo?: CosSourceInfo;
  /** 0默认 1定期执行 */
  ScheduleType?: number;
  /** 年-月-日 时:分:秒 */
  NextTime?: string;
  /** 调度名称 */
  ScheduleName?: string;
  /** create update */
  OperationType?: string;
  /** 恢复粒度：All全量、Database按库、Table按表 */
  RecoverScope?: string;
  /** 恢复库：如果是按库备份，则需要该字段，库之间用","分割 */
  RecoverDatabase?: string;
}

declare interface RecoverBackUpJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReduceInstanceRequest {
  /** 集群ID */
  InstanceId: string;
  /** 节点列表 */
  DelHosts: string[];
  /** 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE */
  Type: string;
  /** 缩容后集群高可用类型：0：非高可用，1：读高可用，2：读写高可用。 */
  HaType: number;
}

declare interface ReduceInstanceResponse {
  /** 流程ID */
  FlowId?: string;
  /** 集群ID */
  InstanceId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResizeDiskRequest {
  /** 集群ID */
  InstanceId: string;
  /** 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE */
  Type: string;
  /** 云盘大小 */
  DiskSize: number;
}

declare interface ResizeDiskResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 流程ID */
  FlowId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartClusterForConfigsRequest {
  /** 集群ID，例如cdwch-xxxx */
  InstanceId: string;
  /** 配置文件名称 */
  ConfigName: string;
  /** grace_restart为优雅滚动重启 不填默认立刻重启 */
  OperationType?: string;
}

declare interface RestartClusterForConfigsResponse {
  /** 流程相关信息 */
  FlowId?: number;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartClusterForNodeRequest {
  /** 集群ID，例如cdwch-xxxx */
  InstanceId: string;
  /** 配置文件名称 */
  ConfigName: string;
  /** 每次重启的批次 */
  BatchSize?: number;
  /** 重启节点 */
  NodeList?: string[];
  /** false表示非滚动重启，true表示滚动重启 */
  RollingRestart?: boolean;
}

declare interface RestartClusterForNodeResponse {
  /** 流程相关信息 */
  FlowId?: number;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleOutInstanceRequest {
  /** 集群ID */
  InstanceId: string;
  /** 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE */
  Type: string;
  /** 节点数量 */
  NodeCount: number;
  /** 扩容后集群高可用类型：0：非高可用，1：读高可用，2：读写高可用。 */
  HaType?: number;
}

declare interface ScaleOutInstanceResponse {
  /** 流程ID */
  FlowId?: string;
  /** 集群ID */
  InstanceId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleUpInstanceRequest {
  /** 集群ID */
  InstanceId: string;
  /** 节点规格 */
  SpecName: string;
  /** 角色（MATER/CORE），MASTER 对应 FE，CORE对应BE */
  Type: string;
}

declare interface ScaleUpInstanceResponse {
  /** 流程ID */
  FlowId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cdwdoris 腾讯云数据仓库 TCHouse-D} */
declare interface Cdwdoris {
  (): Versions;
  /** 取消备份实例 {@link CancelBackupJobRequest} {@link CancelBackupJobResponse} */
  CancelBackupJob(data: CancelBackupJobRequest, config?: AxiosRequestConfig): AxiosPromise<CancelBackupJobResponse>;
  /** 创建或者修改备份策略 {@link CreateBackUpScheduleRequest} {@link CreateBackUpScheduleResponse} */
  CreateBackUpSchedule(data?: CreateBackUpScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackUpScheduleResponse>;
  /** 集群创建 {@link CreateInstanceNewRequest} {@link CreateInstanceNewResponse} */
  CreateInstanceNew(data: CreateInstanceNewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceNewResponse>;
  /** 创建资源组 {@link CreateWorkloadGroupRequest} {@link CreateWorkloadGroupResponse} */
  CreateWorkloadGroup(data: CreateWorkloadGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkloadGroupResponse>;
  /** 删除备份数据 {@link DeleteBackUpDataRequest} {@link DeleteBackUpDataResponse} */
  DeleteBackUpData(data: DeleteBackUpDataRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackUpDataResponse>;
  /** 删除资源组 {@link DeleteWorkloadGroupRequest} {@link DeleteWorkloadGroupResponse} */
  DeleteWorkloadGroup(data: DeleteWorkloadGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkloadGroupResponse>;
  /** 获取各地域列表 {@link DescribeAreaRegionRequest} {@link DescribeAreaRegionResponse} */
  DescribeAreaRegion(data?: DescribeAreaRegionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAreaRegionResponse>;
  /** 查询备份实例列表 {@link DescribeBackUpJobRequest} {@link DescribeBackUpJobResponse} */
  DescribeBackUpJob(data: DescribeBackUpJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackUpJobResponse>;
  /** 查询备份任务详情 {@link DescribeBackUpJobDetailRequest} {@link DescribeBackUpJobDetailResponse} */
  DescribeBackUpJobDetail(data: DescribeBackUpJobDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackUpJobDetailResponse>;
  /** 获取备份、迁移任务 {@link DescribeBackUpSchedulesRequest} {@link DescribeBackUpSchedulesResponse} */
  DescribeBackUpSchedules(data?: DescribeBackUpSchedulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackUpSchedulesResponse>;
  /** 获取可备份表信息 {@link DescribeBackUpTablesRequest} {@link DescribeBackUpTablesResponse} */
  DescribeBackUpTables(data: DescribeBackUpTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackUpTablesResponse>;
  /** 查询备份任务进度详情 {@link DescribeBackUpTaskDetailRequest} {@link DescribeBackUpTaskDetailResponse} */
  DescribeBackUpTaskDetail(data: DescribeBackUpTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackUpTaskDetailResponse>;
  /** 获取集群配置文件内容 {@link DescribeClusterConfigsRequest} {@link DescribeClusterConfigsResponse} */
  DescribeClusterConfigs(data: DescribeClusterConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterConfigsResponse>;
  /** 获取集群配置文件修改历史 {@link DescribeClusterConfigsHistoryRequest} {@link DescribeClusterConfigsHistoryResponse} */
  DescribeClusterConfigsHistory(data: DescribeClusterConfigsHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterConfigsHistoryResponse>;
  /** 下载数据库审计日志 {@link DescribeDatabaseAuditDownloadRequest} {@link DescribeDatabaseAuditDownloadResponse} */
  DescribeDatabaseAuditDownload(data: DescribeDatabaseAuditDownloadRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseAuditDownloadResponse>;
  /** 获取数据库审计记录 {@link DescribeDatabaseAuditRecordsRequest} {@link DescribeDatabaseAuditRecordsResponse} */
  DescribeDatabaseAuditRecords(data: DescribeDatabaseAuditRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseAuditRecordsResponse>;
  /** 数据库审计数据库、用户等 {@link DescribeDatabaseAuditResourceRequest} {@link DescribeDatabaseAuditResourceResponse} */
  DescribeDatabaseAuditResource(data: DescribeDatabaseAuditResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseAuditResourceResponse>;
  /** 查询sql工作区历史运行记录 {@link DescribeDmsSqlHistoryRequest} {@link DescribeDmsSqlHistoryResponse} */
  DescribeDmsSqlHistory(data?: DescribeDmsSqlHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDmsSqlHistoryResponse>;
  /** 展示监控指标文件 {@link DescribeDorisMetricFilesRequest} {@link DescribeDorisMetricFilesResponse} */
  DescribeDorisMetricFiles(data: DescribeDorisMetricFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDorisMetricFilesResponse>;
  /** 新获取联合身份临时访问凭证 {@link DescribeFederationTokenRequest} {@link DescribeFederationTokenResponse} */
  DescribeFederationToken(data?: DescribeFederationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFederationTokenResponse>;
  /** 查询前端信息 {@link DescribeFrontEndRequest} {@link DescribeFrontEndResponse} */
  DescribeFrontEnd(data?: DescribeFrontEndRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFrontEndResponse>;
  /** 生成GoodsDetail {@link DescribeGoodsDetailRequest} {@link DescribeGoodsDetailResponse} */
  DescribeGoodsDetail(data: DescribeGoodsDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGoodsDetailResponse>;
  /** 获取集群描述信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取集群节点信息列表 {@link DescribeInstanceNodesRequest} {@link DescribeInstanceNodesResponse} */
  DescribeInstanceNodes(data: DescribeInstanceNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesResponse>;
  /** 获取BE、FE节点角色 {@link DescribeInstanceNodesInfoRequest} {@link DescribeInstanceNodesInfoResponse} */
  DescribeInstanceNodesInfo(data: DescribeInstanceNodesInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesInfoResponse>;
  /** 获取集群节点角色 {@link DescribeInstanceNodesRoleRequest} {@link DescribeInstanceNodesRoleResponse} */
  DescribeInstanceNodesRole(data: DescribeInstanceNodesRoleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesRoleResponse>;
  /** 拉取集群操作列表 {@link DescribeInstanceOperationsRequest} {@link DescribeInstanceOperationsResponse} */
  DescribeInstanceOperations(data: DescribeInstanceOperationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceOperationsResponse>;
  /** 获取集群状态 {@link DescribeInstanceStateRequest} {@link DescribeInstanceStateResponse} */
  DescribeInstanceState(data: DescribeInstanceStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceStateResponse>;
  /** 获取集群已使用子网信息 {@link DescribeInstanceUsedSubnetsRequest} {@link DescribeInstanceUsedSubnetsResponse} */
  DescribeInstanceUsedSubnets(data: DescribeInstanceUsedSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceUsedSubnetsResponse>;
  /** 获取集群列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 集群健康检查 {@link DescribeInstancesHealthStateRequest} {@link DescribeInstancesHealthStateResponse} */
  DescribeInstancesHealthState(data?: DescribeInstancesHealthStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesHealthStateResponse>;
  /** 获取地域及可用区列表 {@link DescribeRegionZoneRequest} {@link DescribeRegionZoneResponse} */
  DescribeRegionZone(data?: DescribeRegionZoneRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionZoneResponse>;
  /** 检查内核版本 {@link DescribeReplicaVersionRequest} {@link DescribeReplicaVersionResponse} */
  DescribeReplicaVersion(data: DescribeReplicaVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReplicaVersionResponse>;
  /** 查询恢复任务进度详情 {@link DescribeRestoreTaskDetailRequest} {@link DescribeRestoreTaskDetailResponse} */
  DescribeRestoreTaskDetail(data: DescribeRestoreTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRestoreTaskDetailResponse>;
  /** 获取慢查询列表 {@link DescribeSlowQueryRecordsRequest} {@link DescribeSlowQueryRecordsResponse} */
  DescribeSlowQueryRecords(data: DescribeSlowQueryRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowQueryRecordsResponse>;
  /** 下载慢查询文件 {@link DescribeSlowQueryRecordsDownloadRequest} {@link DescribeSlowQueryRecordsDownloadResponse} */
  DescribeSlowQueryRecordsDownload(data: DescribeSlowQueryRecordsDownloadRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowQueryRecordsDownloadResponse>;
  /** 获取集群规格 {@link DescribeSpecRequest} {@link DescribeSpecResponse} */
  DescribeSpec(data: DescribeSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpecResponse>;
  /** 通过sql查询集群信息 {@link DescribeSqlApisRequest} {@link DescribeSqlApisResponse} */
  DescribeSqlApis(data?: DescribeSqlApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSqlApisResponse>;
  /** 获取表列表 {@link DescribeTableListRequest} {@link DescribeTableListResponse} */
  DescribeTableList(data: DescribeTableListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTableListResponse>;
  /** 获取用户绑定的资源组信息 {@link DescribeUserBindWorkloadGroupRequest} {@link DescribeUserBindWorkloadGroupResponse} */
  DescribeUserBindWorkloadGroup(data?: DescribeUserBindWorkloadGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserBindWorkloadGroupResponse>;
  /** 获取资源组信息 {@link DescribeWorkloadGroupRequest} {@link DescribeWorkloadGroupResponse} */
  DescribeWorkloadGroup(data: DescribeWorkloadGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkloadGroupResponse>;
  /** 集群销毁 {@link DestroyInstanceRequest} {@link DestroyInstanceResponse} */
  DestroyInstance(data: DestroyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyInstanceResponse>;
  /** 新增日志服务接口 {@link FitClsLogRequest} {@link FitClsLogResponse} */
  FitClsLog(data: FitClsLogRequest, config?: AxiosRequestConfig): AxiosPromise<FitClsLogResponse>;
  /** 修改集群名称 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
  /** KV模式修改配置接口 {@link ModifyInstanceKeyValConfigsRequest} {@link ModifyInstanceKeyValConfigsResponse} */
  ModifyInstanceKeyValConfigs(data: ModifyInstanceKeyValConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceKeyValConfigsResponse>;
  /** 修改节点状态 {@link ModifyNodeStatusRequest} {@link ModifyNodeStatusResponse} */
  ModifyNodeStatus(data: ModifyNodeStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNodeStatusResponse>;
  /** 更改安全组 {@link ModifySecurityGroupsRequest} {@link ModifySecurityGroupsResponse} */
  ModifySecurityGroups(data: ModifySecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupsResponse>;
  /** 修改用户绑定的资源组 {@link ModifyUserBindWorkloadGroupRequest} {@link ModifyUserBindWorkloadGroupResponse} */
  ModifyUserBindWorkloadGroup(data: ModifyUserBindWorkloadGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserBindWorkloadGroupResponse>;
  /** 修改权接口 {@link ModifyUserPrivilegesV3Request} {@link ModifyUserPrivilegesV3Response} */
  ModifyUserPrivilegesV3(data: ModifyUserPrivilegesV3Request, config?: AxiosRequestConfig): AxiosPromise<ModifyUserPrivilegesV3Response>;
  /** 修改资源组信息 {@link ModifyWorkloadGroupRequest} {@link ModifyWorkloadGroupResponse} */
  ModifyWorkloadGroup(data: ModifyWorkloadGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkloadGroupResponse>;
  /** 开启、关闭资源组 {@link ModifyWorkloadGroupStatusRequest} {@link ModifyWorkloadGroupStatusResponse} */
  ModifyWorkloadGroupStatus(data: ModifyWorkloadGroupStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkloadGroupStatusResponse>;
  /** 开启或者关闭策略 {@link OpenBackUpRequest} {@link OpenBackUpResponse} */
  OpenBackUp(data: OpenBackUpRequest, config?: AxiosRequestConfig): AxiosPromise<OpenBackUpResponse>;
  /** 备份恢复 {@link RecoverBackUpJobRequest} {@link RecoverBackUpJobResponse} */
  RecoverBackUpJob(data: RecoverBackUpJobRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverBackUpJobResponse>;
  /** 集群缩容 {@link ReduceInstanceRequest} {@link ReduceInstanceResponse} */
  ReduceInstance(data: ReduceInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ReduceInstanceResponse>;
  /** 云盘扩容 {@link ResizeDiskRequest} {@link ResizeDiskResponse} */
  ResizeDisk(data: ResizeDiskRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeDiskResponse>;
  /** 重启集群让配置文件生效 {@link RestartClusterForConfigsRequest} {@link RestartClusterForConfigsResponse} */
  RestartClusterForConfigs(data: RestartClusterForConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<RestartClusterForConfigsResponse>;
  /** 集群滚动重启 {@link RestartClusterForNodeRequest} {@link RestartClusterForNodeResponse} */
  RestartClusterForNode(data: RestartClusterForNodeRequest, config?: AxiosRequestConfig): AxiosPromise<RestartClusterForNodeResponse>;
  /** 水平扩容 {@link ScaleOutInstanceRequest} {@link ScaleOutInstanceResponse} */
  ScaleOutInstance(data: ScaleOutInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutInstanceResponse>;
  /** 计算资源垂直变配 {@link ScaleUpInstanceRequest} {@link ScaleUpInstanceResponse} */
  ScaleUpInstance(data: ScaleUpInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleUpInstanceResponse>;
}

export declare type Versions = ["2021-12-28"];

export default Cdwdoris;
