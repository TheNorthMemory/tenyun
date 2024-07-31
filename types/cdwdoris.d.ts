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

declare interface DescribeFederationTokenRequest {
}

declare interface DescribeFederationTokenResponse {
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
  /** 集群创建 {@link CreateInstanceNewRequest} {@link CreateInstanceNewResponse} */
  CreateInstanceNew(data: CreateInstanceNewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceNewResponse>;
  /** 创建资源组 {@link CreateWorkloadGroupRequest} {@link CreateWorkloadGroupResponse} */
  CreateWorkloadGroup(data: CreateWorkloadGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkloadGroupResponse>;
  /** 删除资源组 {@link DeleteWorkloadGroupRequest} {@link DeleteWorkloadGroupResponse} */
  DeleteWorkloadGroup(data: DeleteWorkloadGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkloadGroupResponse>;
  /** 获取集群配置文件内容 {@link DescribeClusterConfigsRequest} {@link DescribeClusterConfigsResponse} */
  DescribeClusterConfigs(data: DescribeClusterConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterConfigsResponse>;
  /** 下载数据库审计日志 {@link DescribeDatabaseAuditDownloadRequest} {@link DescribeDatabaseAuditDownloadResponse} */
  DescribeDatabaseAuditDownload(data: DescribeDatabaseAuditDownloadRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseAuditDownloadResponse>;
  /** 获取数据库审计记录 {@link DescribeDatabaseAuditRecordsRequest} {@link DescribeDatabaseAuditRecordsResponse} */
  DescribeDatabaseAuditRecords(data: DescribeDatabaseAuditRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseAuditRecordsResponse>;
  /** 新获取联合身份临时访问凭证 {@link DescribeFederationTokenRequest} {@link DescribeFederationTokenResponse} */
  DescribeFederationToken(data?: DescribeFederationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFederationTokenResponse>;
  /** 生成GoodsDetail {@link DescribeGoodsDetailRequest} {@link DescribeGoodsDetailResponse} */
  DescribeGoodsDetail(data: DescribeGoodsDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGoodsDetailResponse>;
  /** 获取集群描述信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取集群节点信息列表 {@link DescribeInstanceNodesRequest} {@link DescribeInstanceNodesResponse} */
  DescribeInstanceNodes(data: DescribeInstanceNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesResponse>;
  /** 获取BE、FE节点角色 {@link DescribeInstanceNodesInfoRequest} {@link DescribeInstanceNodesInfoResponse} */
  DescribeInstanceNodesInfo(data: DescribeInstanceNodesInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesInfoResponse>;
  /** 获取集群状态 {@link DescribeInstanceStateRequest} {@link DescribeInstanceStateResponse} */
  DescribeInstanceState(data: DescribeInstanceStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceStateResponse>;
  /** 获取集群已使用子网信息 {@link DescribeInstanceUsedSubnetsRequest} {@link DescribeInstanceUsedSubnetsResponse} */
  DescribeInstanceUsedSubnets(data: DescribeInstanceUsedSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceUsedSubnetsResponse>;
  /** 获取集群列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
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
  /** 通过sql查询集群信息 {@link DescribeSqlApisRequest} {@link DescribeSqlApisResponse} */
  DescribeSqlApis(data?: DescribeSqlApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSqlApisResponse>;
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
  /** 集群缩容 {@link ReduceInstanceRequest} {@link ReduceInstanceResponse} */
  ReduceInstance(data: ReduceInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ReduceInstanceResponse>;
  /** 云盘扩容 {@link ResizeDiskRequest} {@link ResizeDiskResponse} */
  ResizeDisk(data: ResizeDiskRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeDiskResponse>;
  /** 集群滚动重启 {@link RestartClusterForNodeRequest} {@link RestartClusterForNodeResponse} */
  RestartClusterForNode(data: RestartClusterForNodeRequest, config?: AxiosRequestConfig): AxiosPromise<RestartClusterForNodeResponse>;
  /** 水平扩容 {@link ScaleOutInstanceRequest} {@link ScaleOutInstanceResponse} */
  ScaleOutInstance(data: ScaleOutInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutInstanceResponse>;
  /** 计算资源垂直变配 {@link ScaleUpInstanceRequest} {@link ScaleUpInstanceResponse} */
  ScaleUpInstance(data: ScaleUpInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleUpInstanceResponse>;
}

export declare type Versions = ["2021-12-28"];

export default Cdwdoris;
