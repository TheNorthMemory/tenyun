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

/** 备份任务详情 */
declare interface BackUpJobDisplay {
  /** 备份任务id */
  JobId: number;
  /** 备份任务名 */
  Snapshot: string;
  /** 任务类型(元数据),(数据) */
  BackUpType: string;
  /** 备份数据量 */
  BackUpSize: number;
  /** 任务创建时间 */
  BackUpTime: string;
  /** 任务过期时间 */
  ExpireTime: string;
  /** 任务状态 */
  JobStatus: string;
}

/** 备份表信息 */
declare interface BackupTableContent {
  /** 数据库 */
  Database: string | null;
  /** 表 */
  Table: string | null;
  /** 表总字节数 */
  TotalBytes: number | null;
  /** 虚拟cluster */
  VCluster?: string | null;
  /** 表ip */
  Ips?: string | null;
  /** zk路径 */
  ZooPath?: string | null;
  /** cvm的ip地址 */
  Rip?: string | null;
}

/** 集群计费相关信息 */
declare interface Charge {
  /** 计费类型，“PREPAID” 预付费，“POSTPAID_BY_HOUR” 后付费 */
  ChargeType: string;
  /** PREPAID需要传递，是否自动续费，1表示自动续费开启 */
  RenewFlag?: number;
  /** 预付费需要传递，计费时间长度，多少个月 */
  TimeSpan?: number;
}

/** 新增或是修改ck用户 */
declare interface CkUserAlterInfo {
  /** 集群实例id */
  InstanceId: string;
  /** 用户名 */
  UserName: string;
  /** base64加密后的密码 */
  PassWord: string;
  /** 描述 */
  Describe?: string;
}

/** 用于返回XML格式的配置文件和内容以及其他配置文件有关的信息 */
declare interface ClusterConfigsInfoFromEMR {
  /** 配置文件名称 */
  FileName: string;
  /** 配置文件对应的相关属性信息 */
  FileConf: string;
  /** 配置文件对应的其他属性信息 */
  KeyConf: string;
  /** 配置文件的内容，base64编码 */
  OriParam: string;
  /** 用于表示当前配置文件是不是有过修改后没有重启，提醒用户需要重启 */
  NeedRestart: number;
  /** 保存配置文件的路径 */
  FilePath: string | null;
}

/** clickhouse vcluster信息 */
declare interface ClusterInfo {
  /** vcluster名字 */
  ClusterName: string | null;
  /** 当前cluster的IP列表 */
  NodeIps: string[] | null;
}

/** 配置文件修改信息 */
declare interface ConfigSubmitContext {
  /** 配置文件名称 */
  FileName: string;
  /** 配置文件旧内容，base64编码 */
  OldConfValue: string;
  /** 配置文件新内容，base64编码 */
  NewConfValue: string;
  /** 保存配置文件的路径 */
  FilePath?: string;
}

/** 数据库权限信息 */
declare interface DatabasePrivilegeInfo {
  /** 数据库名称 */
  DatabaseName: string;
  /** //库表权限，SELECT、INSERT_ALL、ALTER、TRUNCATE、DROP_TABLE、CREATE_TABLE、DROP_DATABASE */
  DatabasePrivileges?: string[] | null;
  /** // 库下面的表权限 */
  TablePrivilegeList?: TablePrivilegeInfo[] | null;
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

/** 集群分组信息描述 */
declare interface GroupInfo {
  /** 分组名称 */
  GroupName: string;
  /** 分片变量名称 */
  ShardName: string;
  /** 副本变量名称 */
  ReplicaName: string;
}

/** 集群配置信息 */
declare interface InstanceConfigInfo {
  /** 配置项名称 */
  ConfKey: string;
  /** 配置项内容 */
  ConfValue: string;
  /** 默认值 */
  DefaultValue?: string;
  /** 是否需要重启 */
  NeedRestart?: boolean;
  /** 是否可编辑 */
  Editable?: boolean;
  /** 配置项解释 */
  ConfDesc?: string;
  /** 文件名称 */
  FileName?: string;
  /** 规则名称类型 */
  ModifyRuleType?: string;
  /** 规则名称内容 */
  ModifyRuleValue?: string;
  /** 修改人的uin */
  Uin?: string;
  /** 修改时间 */
  ModifyTime?: string;
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
  CommonSummary?: NodesSummary | null;
  /** 高可用，“true" "false" */
  HA?: string | null;
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
  /** 是否弹性ck */
  IsElastic?: boolean | null;
  /** 集群详细状态 */
  InstanceStateInfo?: InstanceStateInfo | null;
  /** ZK高可用 */
  HAZk?: boolean | null;
  /** 挂载盘,默认0:没有类型；1:裸盘;2:lvm */
  MountDiskType?: number | null;
  /** 无 */
  CHProxyVip?: string | null;
  /** cos buket的名字 */
  CosBucketName?: string | null;
  /** 是否可以挂载云盘 */
  CanAttachCbs?: boolean | null;
  /** 是否可以挂载云盘阵列 */
  CanAttachCbsLvm?: boolean | null;
  /** 是否可以挂载cos */
  CanAttachCos?: boolean | null;
  /** 服务信息 */
  Components?: ServiceInfo[] | null;
  /** 可升级的内核版本 */
  UpgradeVersions?: string | null;
  /** ex-index */
  EsIndexId?: string | null;
  /** username */
  EsIndexUsername?: string | null;
  /** password */
  EsIndexPassword?: string | null;
  /** true */
  HasEsIndex?: boolean | null;
  /** true */
  IsSecondaryZone?: boolean | null;
  /** desc */
  SecondaryZoneInfo?: string | null;
  /** 是否clickhouse-keeper */
  ClickHouseKeeper?: boolean | null;
  /** 实例扩展信息 */
  Details?: InstanceDetail | null;
  /** 安全组白名单 */
  IsWhiteSGs?: boolean | null;
  /** 绑定的安全组 */
  BindSGs?: string[] | null;
  /** 是否开启公网clb */
  HasPublicCloudClb?: boolean;
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
  Cluster?: string;
  /** 节点所属的分组信息 */
  NodeGroups?: GroupInfo[];
  /** VPC IP */
  Rip?: string | null;
  /** ture的时候表示该节点上部署了chproxy进程 */
  IsCHProxy?: boolean | null;
  /** 节点状态 */
  Status?: string | null;
  /** 节点uuid */
  UUID?: string | null;
  /** 区 */
  Zone?: string | null;
  /** 区描述 */
  ZoneDesc?: string | null;
  /** 真实资源id */
  RealResourceId?: string;
}

/** 集群状态抽象后的结构体 */
declare interface InstanceStateInfo {
  /** 集群状态，例如：Serving */
  InstanceState?: string | null;
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
  /** 当前步骤的名称，例如：”购买资源中“ */
  ProcessName?: string | null;
  /** 请求id */
  RequestId?: string | null;
  /** 流程的二级名称 */
  ProcessSubName?: string | null;
}

/** kv配置，多层级item */
declare interface MapConfigItem {
  /** key */
  ConfKey: string;
  /** 列表 */
  Items: InstanceConfigInfo[];
}

/** 创建集群时的规格 */
declare interface NodeSpec {
  /** 规格名称 */
  SpecName: string;
  /** 数量 */
  Count: number;
  /** 云盘大小 */
  DiskSize: number;
}

/** 节点角色描述信息 */
declare interface NodesSummary {
  /** 机型，如 S1 */
  Spec: string;
  /** 节点数目 */
  NodeSize: number;
  /** cpu核数，单位个 */
  Core: number;
  /** 内存大小，单位G */
  Memory: number;
  /** 磁盘大小，单位G */
  Disk: number;
  /** 磁盘类型 */
  DiskType: string;
  /** 磁盘描述 */
  DiskDesc: string;
  /** 挂载云盘信息 */
  AttachCBSSpec: AttachCBSSpec | null;
  /** 子产品类型 */
  SubProductType?: string | null;
  /** 规格对应的核数 */
  SpecCore?: number | null;
  /** 规格对应的内存大小 */
  SpecMemory?: number | null;
  /** 磁盘的数量 */
  DiskCount?: number | null;
  /** 磁盘的最大大小 */
  MaxDiskSize?: number | null;
  /** 是否为加密云盘 */
  Encrypt?: number | null;
}

/** 资源规格描述信息 */
declare interface ResourceSpec {
  /** 规格名称，例如“SCH1" */
  Name: string;
  /** cpu核数 */
  Cpu: number;
  /** 内存大小，单位G */
  Mem: number;
  /** 分类标记，STANDARD/BIGDATA/HIGHIO分别表示标准型/大数据型/高IO */
  Type: string;
  /** 系统盘描述信息 */
  SystemDisk: DiskSpec;
  /** 数据盘描述信息 */
  DataDisk: DiskSpec;
  /** 最大节点数目限制 */
  MaxNodeSize: number;
  /** 是否可用，false代表售罄 */
  Available: boolean | null;
  /** 规格描述信息 */
  ComputeSpecDesc: string | null;
  /** 规格名 */
  DisplayName: string | null;
  /** 库存数 */
  InstanceQuota: number | null;
}

/** 策略详情 */
declare interface ScheduleStrategy {
  /** 备份桶名称 */
  CosBucketName?: string | null;
  /** 备份保留天数 */
  RetainDays?: number;
  /** 备份的天 */
  WeekDays?: string;
  /** 备份小时 */
  ExecuteHour?: number;
  /** 策略id */
  ScheduleId?: number;
  /** 下次备份时间 */
  NextBackupTime?: string | null;
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

/** 服务详细信息描述。 */
declare interface ServiceInfo {
  /** 服务名称 */
  Name?: string | null;
  /** 服务的版本 */
  Version?: string | null;
}

/** 表权限 */
declare interface TablePrivilegeInfo {
  /** 表名称 */
  TableName: string;
  /** 表权限列表 SELECT、INSERT_ALL、ALTER、TRUNCATE、DROP_TABLE 查询、插入、设置、清空表、删除表 */
  TablePrivileges: string[];
}

/** 标签描述 */
declare interface Tag {
  /** 标签的键 */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
}

declare interface ActionAlterCkUserRequest {
  /** 用户信息 */
  UserInfo: CkUserAlterInfo;
  /** api接口类型，AddSystemUser新增用户，UpdateSystemUser，修改用户 */
  ApiType: string;
}

declare interface ActionAlterCkUserResponse {
  /** 错误信息 */
  ErrMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackUpScheduleRequest {
  /** 集群id */
  InstanceId: string;
  /** 策略类型 meta(元数据) data (表数据) */
  ScheduleType: string;
  /** 操作类型 create(创建) update(编辑修改) */
  OperationType: string;
  /** 保留天数 例如7 */
  RetainDays?: number;
  /** 编辑时需要传 */
  ScheduleId?: number;
  /** 选择的星期 逗号分隔，例如 2 代表周二 */
  WeekDays?: string;
  /** 执行小时 */
  ExecuteHour?: number;
  /** 备份表列表 */
  BackUpTables?: BackupTableContent[];
}

declare interface CreateBackUpScheduleResponse {
  /** 错误描述 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceNewRequest {
  /** 可用区 */
  Zone: string;
  /** 是否高可用 */
  HaFlag: boolean;
  /** 私有网络 */
  UserVPCId: string;
  /** 子网 */
  UserSubnetId: string;
  /** 系统版本 */
  ProductVersion: string;
  /** 计费方式 */
  ChargeProperties: Charge;
  /** 实例名称 */
  InstanceName: string;
  /** 数据节点SpecName从DescribeSpec接口中返回的DataSpec.Name获取 */
  DataSpec: NodeSpec;
  /** 标签列表（废弃） */
  Tags?: Tag;
  /** 日志主题ID */
  ClsLogSetId?: string;
  /** COS桶名称 */
  CosBucketName?: string;
  /** 是否是裸盘挂载，默认值 0 为 未挂载，1 为挂载。 */
  MountDiskType?: number;
  /** 是否是ZK高可用 */
  HAZk?: boolean;
  /** ZK节点SpecName从DescribeSpec接口中返回的CommonSpec.Name（ZK节点）获取 */
  CommonSpec?: NodeSpec;
  /** 标签列表 */
  TagItems?: Tag[];
}

declare interface CreateInstanceNewResponse {
  /** 流程ID */
  FlowId?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 错误信息 */
  ErrorMsg?: string | null;
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
}

declare interface DescribeBackUpJobResponse {
  /** 任务列表 */
  BackUpJobs: BackUpJobDisplay[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackUpScheduleRequest {
  /** 集群id */
  InstanceId: string;
}

declare interface DescribeBackUpScheduleResponse {
  /** 备份是否开启 */
  BackUpOpened?: boolean;
  /** 元数据备份策略 */
  MetaStrategy?: ScheduleStrategy | null;
  /** 表数据备份策略 */
  DataStrategy?: ScheduleStrategy | null;
  /** 备份表列表 */
  BackUpContents?: BackupTableContent[] | null;
  /** 备份的状态 */
  BackUpStatus?: number;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackUpTablesRequest {
  /** 集群id */
  InstanceId: string;
}

declare interface DescribeBackUpTablesResponse {
  /** 可备份表列表 */
  AvailableTables: BackupTableContent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCkSqlApisRequest {
  /** 实例id */
  InstanceId: string;
  /** api接口名称,GetClusters:获取集群cluster列表GetSystemUsers:获取系统用户列表CheckNodeCluster: 检查节点是否隶属一个clusterGetClusterDatabases: 获取一个cluster下的数据库列表GetClusterTables: 获取一个cluster下的数据库表列表GetPrivilegeUsers: 获取授权的用户列表GET_USER_CLUSTER_PRIVILEGES:获取用户cluster下的权限 GetUserClusterNewPrivileges:获取用户cluster下的权限 (新版）RevokeClusterUser:解绑cluster用户DeleteSystemUser:删除系统用户 —— 必须所有cluster先解绑GetUserOptionMessages:获取用户配置备注信息GET_USER_CONFIGS:获取用户配置列表 QUOTA、PROFILE、POLICY */
  ApiType: string;
  /** 集群名称，GET_SYSTEM_USERS，GET_PRIVILEGE_USERS，GET_CLUSTER_DATABASES，GET_CLUSTER_TABLES 必填 */
  Cluster?: string;
  /** 用户名称，api与user相关的必填 */
  UserName?: string;
  /** 账户的类型 */
  UserType?: string;
}

declare interface DescribeCkSqlApisResponse {
  /** 返回的查询数据，大部分情况是list，也可能是bool */
  ReturnData?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterConfigsRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeClusterConfigsResponse {
  /** 返回实例的配置文件相关的信息 */
  ClusterConfList?: ClusterConfigsInfoFromEMR[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceClustersRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceClustersResponse {
  /** cluster列表 */
  Clusters?: ClusterInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceKeyValConfigsRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 搜索的配置项名称 */
  SearchConfigName?: string;
}

declare interface DescribeInstanceKeyValConfigsResponse {
  /** 参数列表 */
  ConfigItems?: InstanceConfigInfo[];
  /** 未配置的参数列表 */
  UnConfigItems?: InstanceConfigInfo[] | null;
  /** 配置的多层级参数列表 */
  MapConfigItems?: MapConfigItem[] | null;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceNodesRequest {
  /** 集群实例ID */
  InstanceId: string;
  /** 集群角色类型，“DATA” 为数据节点、“COMMON” 为 ZooKeeper 节点，默认为 "DATA" 数据节点。 */
  NodeRole?: string;
  /** 分页参数，第一页为0，第二页为10 */
  Offset?: number;
  /** 分页参数，分页步长，默认为10 */
  Limit?: number;
  /** 展现策略，All时显示所有 */
  DisplayPolicy?: string;
  /** 当true的时候返回所有节点，即Limit无限大 */
  ForceAll?: boolean;
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
  /** 是否是open api查询 */
  IsOpenApi?: boolean;
}

declare interface DescribeInstanceResponse {
  /** 实例描述信息 */
  InstanceInfo?: InstanceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceShardsRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceShardsResponse {
  /** 实例shard信息 */
  InstanceShardsList?: string | null;
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

declare interface DescribeInstancesNewRequest {
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
  /** 信息详细与否 */
  IsSimple?: boolean;
}

declare interface DescribeInstancesNewResponse {
  /** 实例总数 */
  TotalCount?: number;
  /** 实例数组 */
  InstancesList?: InstanceInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpecRequest {
  /** 地域信息，例如"ap-guangzhou-1" */
  Zone: string;
  /** 计费类型，PREPAID 包年包月，POSTPAID_BY_HOUR 按量计费 */
  PayMode?: string;
  /** 是否弹性ck */
  IsElastic?: boolean;
  /** 是否是购买页面需要的spec */
  CaseType?: number;
}

declare interface DescribeSpecResponse {
  /** zookeeper节点规格描述 */
  CommonSpec?: ResourceSpec[];
  /** 数据节点规格描述 */
  DataSpec?: ResourceSpec[];
  /** 云盘列表 */
  AttachCBSSpec?: DiskSpec[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyInstanceRequest {
  /** 集群id */
  InstanceId: string;
}

declare interface DestroyInstanceResponse {
  /** 作业id */
  FlowID?: string | null;
  /** 集群id */
  InstanceID?: string;
  /** 错误信息 */
  ErrorMsg?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterConfigsRequest {
  /** 集群ID，例如cdwch-xxxx */
  InstanceId: string;
  /** 配置文件修改信息 */
  ModifyConfContext: ConfigSubmitContext[];
  /** 修改原因 */
  Remark?: string;
}

declare interface ModifyClusterConfigsResponse {
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
  /** 新增配置列表 */
  AddItems?: InstanceConfigItem[];
  /** 更新配置列表 */
  UpdateItems?: InstanceConfigItem[];
  /** 删除配置列表 */
  DeleteItems?: InstanceConfigItem;
  /** 删除配置列表 */
  DelItems?: InstanceConfigItem[];
  /** 备注 */
  Remark?: string;
}

declare interface ModifyInstanceKeyValConfigsResponse {
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** ID */
  FlowId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserNewPrivilegeRequest {
  /** 实例id */
  InstanceId: string;
  /** cluster名称 */
  Cluster: string;
  /** 用户名 */
  UserName: string;
  /** 是否所有数据库表 */
  AllDatabase: boolean;
  /** 全局权限 */
  GlobalPrivileges?: string[];
  /** 数据库表权限 */
  DatabasePrivilegeList?: DatabasePrivilegeInfo[];
}

declare interface ModifyUserNewPrivilegeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenBackUpRequest {
  /** 集群id */
  InstanceId: string;
  /** OPEN 或者CLOSE */
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
}

declare interface RecoverBackUpJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResizeDiskRequest {
  /** 实例唯一ID */
  InstanceId: string;
  /** 节点类型，DATA：clickhouse节点，COMMON：为zookeeper节点 */
  Type: string;
  /** 磁盘扩容后容量，不能小于原有用量。clickhouse最小200，且为100的整数倍。 zk最小100，且为10的整数倍； */
  DiskSize: number;
}

declare interface ResizeDiskResponse {
  /** 流程ID */
  FlowId?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleCNOutUpInstanceRequest {
  /** 实例唯一ID */
  InstanceId: string;
  /** warehouse名称 */
  VirtualCluster: string;
  /** 子网id */
  UserSubnetID: string;
  /** 新的warehouse的个数 */
  NewCount: number;
  /** 集群的规格2X-Small、X-Small、Small */
  NewSpecName: string;
}

declare interface ScaleCNOutUpInstanceResponse {
  /** 流程ID */
  FlowId?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleOutInstanceRequest {
  /** 实例唯一ID */
  InstanceId: string;
  /** 节点类型，DATA：clickhouse节点，COMMON：为zookeeper节点 */
  Type: string;
  /** 调整clickhouse节点数量 */
  NodeCount: number;
  /** v_cluster分组，	新增扩容节点将加入到已选择的v_cluster分组中，提交同步VIP生效. */
  ScaleOutCluster?: string;
  /** 子网剩余ip数量，用于判断当前实例子网剩余ip数是否能扩容。需要根据实际填写 */
  UserSubnetIPNum?: number;
  /** 同步元数据节点IP （uip），扩容的时候必填 */
  ScaleOutNodeIp?: string;
  /** 缩容节点shard的节点IP （uip），其中ha集群需要主副节点ip都传入以逗号分隔，缩容的时候必填 */
  ReduceShardInfo?: string[];
}

declare interface ScaleOutInstanceResponse {
  /** 流程ID */
  FlowId?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleUpInstanceRequest {
  /** 实例唯一ID */
  InstanceId: string;
  /** 节点类型，DATA：clickhouse节点，COMMON：为zookeeper节点 */
  Type: string;
  /** clickhouse节点规格。 */
  SpecName: string;
  /** 是否滚动重启，false为不滚动重启，true为滚动重启 */
  ScaleUpEnableRolling: boolean;
}

declare interface ScaleUpInstanceResponse {
  /** 流程ID */
  FlowId?: string | null;
  /** 实例ID */
  InstanceId?: string | null;
  /** 错误信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cdwch 腾讯云数据仓库TCHouse-C} */
declare interface Cdwch {
  (): Versions;
  /** 新增、修改集群用户接口 {@link ActionAlterCkUserRequest} {@link ActionAlterCkUserResponse} */
  ActionAlterCkUser(data: ActionAlterCkUserRequest, config?: AxiosRequestConfig): AxiosPromise<ActionAlterCkUserResponse>;
  /** 创建或者修改备份策略 {@link CreateBackUpScheduleRequest} {@link CreateBackUpScheduleResponse} */
  CreateBackUpSchedule(data: CreateBackUpScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackUpScheduleResponse>;
  /** 创建集群openApi {@link CreateInstanceNewRequest} {@link CreateInstanceNewResponse} */
  CreateInstanceNew(data: CreateInstanceNewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceNewResponse>;
  /** 删除备份数据 {@link DeleteBackUpDataRequest} {@link DeleteBackUpDataResponse} */
  DeleteBackUpData(data: DeleteBackUpDataRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackUpDataResponse>;
  /** 查询备份任务列表 {@link DescribeBackUpJobRequest} {@link DescribeBackUpJobResponse} */
  DescribeBackUpJob(data: DescribeBackUpJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackUpJobResponse>;
  /** 查询备份任务详情 {@link DescribeBackUpJobDetailRequest} {@link DescribeBackUpJobDetailResponse} */
  DescribeBackUpJobDetail(data: DescribeBackUpJobDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackUpJobDetailResponse>;
  /** 查询备份策略信息 {@link DescribeBackUpScheduleRequest} {@link DescribeBackUpScheduleResponse} */
  DescribeBackUpSchedule(data: DescribeBackUpScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackUpScheduleResponse>;
  /** 获取可备份表信息 {@link DescribeBackUpTablesRequest} {@link DescribeBackUpTablesResponse} */
  DescribeBackUpTables(data: DescribeBackUpTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackUpTablesResponse>;
  /** 查询集群用户相关信息 {@link DescribeCkSqlApisRequest} {@link DescribeCkSqlApisResponse} */
  DescribeCkSqlApis(data: DescribeCkSqlApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCkSqlApisResponse>;
  /** 获取集群配置文件内容 {@link DescribeClusterConfigsRequest} {@link DescribeClusterConfigsResponse} */
  DescribeClusterConfigs(data: DescribeClusterConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterConfigsResponse>;
  /** 描述实例信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** vcluster列表 {@link DescribeInstanceClustersRequest} {@link DescribeInstanceClustersResponse} */
  DescribeInstanceClusters(data: DescribeInstanceClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceClustersResponse>;
  /** 在集群详情页面获取所有参数列表 {@link DescribeInstanceKeyValConfigsRequest} {@link DescribeInstanceKeyValConfigsResponse} */
  DescribeInstanceKeyValConfigs(data: DescribeInstanceKeyValConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceKeyValConfigsResponse>;
  /** 获取实例节点信息列表 {@link DescribeInstanceNodesRequest} {@link DescribeInstanceNodesResponse} */
  DescribeInstanceNodes(data: DescribeInstanceNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesResponse>;
  /** 获取实例shard信息列表 {@link DescribeInstanceShardsRequest} {@link DescribeInstanceShardsResponse} */
  DescribeInstanceShards(data: DescribeInstanceShardsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceShardsResponse>;
  /** 获取集群实例状态 {@link DescribeInstanceStateRequest} {@link DescribeInstanceStateResponse} */
  DescribeInstanceState(data: DescribeInstanceStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceStateResponse>;
  /** 获取实例简单信息列表 {@link DescribeInstancesNewRequest} {@link DescribeInstancesNewResponse} */
  DescribeInstancesNew(data?: DescribeInstancesNewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesNewResponse>;
  /** 获取集群规格 {@link DescribeSpecRequest} {@link DescribeSpecResponse} */
  DescribeSpec(data: DescribeSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpecResponse>;
  /** 销毁集群api {@link DestroyInstanceRequest} {@link DestroyInstanceResponse} */
  DestroyInstance(data: DestroyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyInstanceResponse>;
  /** 修改集群配置文件接口 {@link ModifyClusterConfigsRequest} {@link ModifyClusterConfigsResponse} */
  ModifyClusterConfigs(data: ModifyClusterConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterConfigsResponse>;
  /** KV模式修改配置接口 {@link ModifyInstanceKeyValConfigsRequest} {@link ModifyInstanceKeyValConfigsResponse} */
  ModifyInstanceKeyValConfigs(data: ModifyInstanceKeyValConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceKeyValConfigsResponse>;
  /** 新增、修改集群账号cluster权限（新版） {@link ModifyUserNewPrivilegeRequest} {@link ModifyUserNewPrivilegeResponse} */
  ModifyUserNewPrivilege(data: ModifyUserNewPrivilegeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserNewPrivilegeResponse>;
  /** 开启或者关闭策略 {@link OpenBackUpRequest} {@link OpenBackUpResponse} */
  OpenBackUp(data: OpenBackUpRequest, config?: AxiosRequestConfig): AxiosPromise<OpenBackUpResponse>;
  /** 备份恢复 {@link RecoverBackUpJobRequest} {@link RecoverBackUpJobResponse} */
  RecoverBackUpJob(data: RecoverBackUpJobRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverBackUpJobResponse>;
  /** 扩容磁盘容量 {@link ResizeDiskRequest} {@link ResizeDiskResponse} */
  ResizeDisk(data: ResizeDiskRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeDiskResponse>;
  /** 通过接口弹性伸缩云原生集群(openapi) {@link ScaleCNOutUpInstanceRequest} {@link ScaleCNOutUpInstanceResponse} */
  ScaleCNOutUpInstance(data: ScaleCNOutUpInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleCNOutUpInstanceResponse>;
  /** 水平调整实例节点 {@link ScaleOutInstanceRequest} {@link ScaleOutInstanceResponse} */
  ScaleOutInstance(data: ScaleOutInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutInstanceResponse>;
  /** 垂直扩缩容节点规格 {@link ScaleUpInstanceRequest} {@link ScaleUpInstanceResponse} */
  ScaleUpInstance(data: ScaleUpInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleUpInstanceResponse>;
}

export declare type Versions = ["2020-09-15"];

export default Cdwch;
