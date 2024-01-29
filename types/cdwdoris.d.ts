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

/** NodeInfo */
declare interface NodeInfo {
  /** 用户IP */
  Ip?: string | null;
  /** 节点状态 */
  Status?: number | null;
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

/** 标签描述 */
declare interface Tag {
  /** 标签的键 */
  TagKey: string;
  /** 标签的值 */
  TagValue: string;
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
  /** 获取集群配置文件内容 {@link DescribeClusterConfigsRequest} {@link DescribeClusterConfigsResponse} */
  DescribeClusterConfigs(data: DescribeClusterConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterConfigsResponse>;
  /** 下载数据库审计日志 {@link DescribeDatabaseAuditDownloadRequest} {@link DescribeDatabaseAuditDownloadResponse} */
  DescribeDatabaseAuditDownload(data: DescribeDatabaseAuditDownloadRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseAuditDownloadResponse>;
  /** 获取数据库审计记录 {@link DescribeDatabaseAuditRecordsRequest} {@link DescribeDatabaseAuditRecordsResponse} */
  DescribeDatabaseAuditRecords(data: DescribeDatabaseAuditRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDatabaseAuditRecordsResponse>;
  /** 获取集群描述信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取集群节点信息列表 {@link DescribeInstanceNodesRequest} {@link DescribeInstanceNodesResponse} */
  DescribeInstanceNodes(data: DescribeInstanceNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesResponse>;
  /** 获取BE、FE节点角色 {@link DescribeInstanceNodesInfoRequest} {@link DescribeInstanceNodesInfoResponse} */
  DescribeInstanceNodesInfo(data: DescribeInstanceNodesInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceNodesInfoResponse>;
  /** 获取集群状态 {@link DescribeInstanceStateRequest} {@link DescribeInstanceStateResponse} */
  DescribeInstanceState(data: DescribeInstanceStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceStateResponse>;
  /** 获取集群列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 获取慢查询列表 {@link DescribeSlowQueryRecordsRequest} {@link DescribeSlowQueryRecordsResponse} */
  DescribeSlowQueryRecords(data: DescribeSlowQueryRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowQueryRecordsResponse>;
  /** 下载慢查询文件 {@link DescribeSlowQueryRecordsDownloadRequest} {@link DescribeSlowQueryRecordsDownloadResponse} */
  DescribeSlowQueryRecordsDownload(data: DescribeSlowQueryRecordsDownloadRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSlowQueryRecordsDownloadResponse>;
  /** 集群销毁 {@link DestroyInstanceRequest} {@link DestroyInstanceResponse} */
  DestroyInstance(data: DestroyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyInstanceResponse>;
  /** 修改集群名称 {@link ModifyInstanceRequest} {@link ModifyInstanceResponse} */
  ModifyInstance(data: ModifyInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceResponse>;
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
