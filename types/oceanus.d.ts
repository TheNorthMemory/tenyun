/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 云联网描述信息 */
declare interface CCN {
  /** 私有网络 ID */
  VpcId: string;
  /** 子网 ID */
  SubnetId: string;
  /** 云联网 ID，如 ccn-rahigzjd */
  CcnId: string;
}

/** {"Clazz": "c1", // java类全路径"Level": "WARN" // 日志级别 TRACE，DEBUG、INFO、WARN、ERROR} */
declare interface ClazzLevel {
  /** java类全路径 */
  Clazz: string | null;
  /** 日志级别 TRACE，DEBUG、INFO、WARN、ERROR */
  Level: string | null;
}

/** 描述用户创建的集群信息 */
declare interface Cluster {
  /** 集群 ID */
  ClusterId?: string;
  /** 集群名称 */
  Name?: string;
  /** 地域 */
  Region?: string;
  /** 用户 AppID */
  AppId?: number;
  /** 主账号 UIN */
  OwnerUin?: string;
  /** 创建者 UIN */
  CreatorUin?: string;
  /** 集群状态, 1 未初始化,，3 初始化中，2 运行中 */
  Status?: number;
  /** 描述 */
  Remark?: string;
  /** 集群创建时间 */
  CreateTime?: string;
  /** 最后一次操作集群的时间 */
  UpdateTime?: string;
  /** CU 数量 */
  CuNum?: number;
  /** CU 内存规格 */
  CuMem?: number;
  /** 可用区 */
  Zone?: string;
  /** 状态描述 */
  StatusDesc?: string;
  /** 网络 */
  CCNs?: CCN[];
  /** 网络 */
  NetEnvironmentType?: number;
  /** 空闲 CU */
  FreeCuNum?: number;
  /** 集群绑定的标签 */
  Tags?: Tag[] | null;
  /** 集群隔离时间; 没隔离时间，则为 - */
  IsolatedTime?: string | null;
  /** 集群过期时间; 没过期概念，则为 - */
  ExpireTime?: string | null;
  /** 距离过期还有多少秒; 没过期概念，则为 - */
  SecondsUntilExpiry?: string | null;
  /** 自动续费标记，0 表示默认状态 (用户未设置，即初始状态，用户开通了预付费不停服特权会进行自动续费)， 1 表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag?: number | null;
  /** 集群的默认 COS 存储桶 */
  DefaultCOSBucket?: string | null;
  /** 集群的CLS 日志集 LogSet */
  CLSLogSet?: string | null;
  /** 集群的CLS 日志主题 TopicId */
  CLSTopicId?: string | null;
  /** 集群的CLS 日志集 名字 */
  CLSLogName?: string | null;
  /** 集群的CLS 日志主题 名字 */
  CLSTopicName?: string | null;
  /** 集群的版本信息 */
  Version?: ClusterVersion | null;
  /** 细粒度资源下的空闲CU */
  FreeCu?: number | null;
  /** 集群的默认日志采集配置 */
  DefaultLogCollectConf?: string | null;
  /** 取值：0-没有设置，1-已设置，2-不允许设置 */
  CustomizedDNSEnabled?: number | null;
  /** 空间信息 */
  Correlations?: WorkSpaceClusterItem[] | null;
  /** 运行CU */
  RunningCu?: number | null;
  /** 0 后付费,1 预付费 */
  PayMode?: number | null;
  /** 前端区分 集群是否需要2CU逻辑 因为历史集群 变配不需要, default 1 新集群都需要 */
  IsNeedManageNode?: number | null;
  /** session集群信息 */
  ClusterSessions?: ClusterSession[] | null;
  /** V3版本 = 2 */
  ArchGeneration?: number | null;
  /** 0:TKE, 1:EKS */
  ClusterType?: number | null;
  /** 订单信息 */
  Orders?: Order[] | null;
  /** Gateway信息 */
  SqlGateways?: SqlGatewayItem[] | null;
  /** 0 公网访问 // 1 内网访问 */
  WebUIType?: number | null;
  /** 2 独享集群 */
  Type?: number | null;
  /** 子eks集群 */
  SubEks?: SubEks | null;
  /** 上级集群 */
  AgentSerialId?: string | null;
  /** 资源类型 */
  ResourceType?: number | null;
}

/** 工作空间集群组信息 */
declare interface ClusterGroupSetItem {
  /** clusterGroup 的 SerialId */
  ClusterId?: string;
  /** 集群名称 */
  Name?: string;
  /** 地域 */
  Region?: string;
  /** 区 */
  Zone?: string;
  /** 账号 APPID */
  AppId?: number;
  /** 主账号 UIN */
  OwnerUin?: string;
  /** 创建账号 UIN */
  CreatorUin?: string;
  /** CU 数量 */
  CuNum?: number;
  /** CU 内存规格 */
  CuMem?: number;
  /** 集群状态, 1 未初始化,，3 初始化中，2 运行中 */
  Status?: number;
  /** 状态描述 */
  StatusDesc?: string;
  /** 集群创建时间 */
  CreateTime?: string;
  /** 最后一次操作集群的时间 */
  UpdateTime?: string;
  /** 描述 */
  Remark?: string;
  /** 网络 */
  NetEnvironmentType?: number;
  /** 空闲 CU */
  FreeCuNum?: number;
  /** 细粒度资源下的空闲CU */
  FreeCu?: number;
  /** 运行中CU */
  RunningCu?: number;
  /** 付费模式 */
  PayMode?: number;
  /** 弹性 */
  SubEks?: SubEks | null;
}

/** session集群信息 */
declare interface ClusterSession {
  /** 集群SerialId */
  ClusterGroupSerialId?: string;
  /** 创建者appId */
  AppId?: number;
  /** 创建者主账号 */
  OwnerUin?: string;
  /** 创建者账号 */
  CreatorUin?: string;
  /** 区域 */
  Region?: string;
  /** zone */
  Zone?: string;
  /** Session集群状态 */
  Status?: number;
  /** Session集群消耗的cu数量 */
  CuNum?: number;
  /** Session集群的Flink版本 */
  FlinkVersion?: string;
  /** session集群FlinkUi地址 */
  WebUIUrl?: string;
  /** session集群高级参数 */
  Properties?: Property[] | null;
  /** JobManager的规格 */
  JobManagerCuSpec?: number;
  /** TaskManager的规格 */
  TaskManagerCuSpec?: number;
  /** TaskManager启动的数量 */
  TaskManagerNum?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 集群的版本相关信息 */
declare interface ClusterVersion {
  /** 集群的Flink版本 */
  Flink: string | null;
  /** 集群支持的Flink版本 */
  SupportedFlink: string[] | null;
}

/** 复制作业单条明细 */
declare interface CopyJobItem {
  /** 需要复制的作业serial id */
  SourceId: string;
  /** 目标集群的cluster serial id */
  TargetClusterId: string;
  /** 需要复制的作业名称 */
  SourceName?: string;
  /** 新作业的名称 */
  TargetName?: string;
  /** 新作业的目录id */
  TargetFolderId?: string;
  /** 源作业类型 */
  JobType?: number;
}

/** 复制作业单条明细结果 */
declare interface CopyJobResult {
  /** 原作业id */
  JobId: string | null;
  /** 原作业名称 */
  JobName: string | null;
  /** 新作业名称 */
  TargetJobName: string | null;
  /** 新作业id */
  TargetJobId: string | null;
  /** 失败时候的信息 */
  Message: string | null;
  /** 0 成功 -1 失败 */
  Result: number | null;
  /** 目标集群名称 */
  ClusterName: string | null;
  /** 目标集群id */
  ClusterId: string | null;
  /** 作业类型 */
  JobType: number | null;
}

/** 自定义树结构遍历子节点 */
declare interface DescribeTreeJobsRsp {
  /** 父节点ID */
  ParentId?: string | null;
  /** 当前文件夹ID */
  Id?: string | null;
  /** 当前文件夹名 */
  Name?: string | null;
  /** 当前文件夹下的作业集合 */
  JobSet?: TreeJobSets[] | null;
  /** 迭代子目录 */
  Children?: DescribeTreeJobsRsp[] | null;
  /** 请求ID */
  RequestId?: string | null;
}

/** 树状结构资源列表对象 */
declare interface DescribeTreeResourcesRsp {
  /** 父节点ID */
  ParentId?: string;
  /** 文件夹ID */
  Id?: string;
  /** 文件夹名称 */
  Name?: string;
  /** 文件夹下资源数字 */
  Items?: TreeResourceItem[] | null;
  /** 子节点 */
  Children?: DescribeTreeResourcesRsp[] | null;
  /** 资源总数 */
  TotalCount?: number | null;
}

/** 作业配置 -- 专家模式的详细配置 */
declare interface ExpertModeConfiguration {
  /** Job graph */
  JobGraph?: JobGraph | null;
  /** Node configuration */
  NodeConfig?: NodeConfig[] | null;
  /** Slot sharing groups */
  SlotSharingGroups?: SlotSharingGroup[] | null;
}

/** 查询作业列表时的过滤器 */
declare interface Filter {
  /** 要过滤的字段 */
  Name: string;
  /** 字段的过滤值 */
  Values: string[];
}

/** Gateway引用资源信息 */
declare interface GatewayRefItem {
  /** 空间唯一标识 */
  WorkspaceId: string | null;
  /** 资源唯一标识 */
  ResourceId: string | null;
  /** 版本号 */
  Version: number | null;
  /** 引用类型，0:用户资源 */
  Type: number | null;
}

/** 作业配置详情 */
declare interface JobConfig {
  /** 作业Id */
  JobId?: string;
  /** 主类 */
  EntrypointClass?: string | null;
  /** 主类入参 */
  ProgramArgs?: string | null;
  /** 备注 */
  Remark?: string | null;
  /** 作业配置创建时间 */
  CreateTime?: string;
  /** 作业配置的版本号 */
  Version?: number;
  /** 作业默认并行度 */
  DefaultParallelism?: number | null;
  /** 系统参数 */
  Properties?: Property[] | null;
  /** 引用资源 */
  ResourceRefDetails?: ResourceRefDetail[] | null;
  /** 创建者uin */
  CreatorUin?: string | null;
  /** 作业配置上次启动时间 */
  UpdateTime?: string | null;
  /** 作业绑定的存储桶 */
  COSBucket?: string | null;
  /** 是否启用日志收集，0-未启用，1-已启用，2-历史集群未设置日志集，3-历史集群已开启 */
  LogCollect?: number | null;
  /** 作业的最大并行度 */
  MaxParallelism?: number | null;
  /** JobManager规格 */
  JobManagerSpec?: number | null;
  /** TaskManager规格 */
  TaskManagerSpec?: number | null;
  /** CLS日志集ID */
  ClsLogsetId?: string | null;
  /** CLS日志主题ID */
  ClsTopicId?: string | null;
  /** pyflink作业运行的python版本 */
  PythonVersion?: string | null;
  /** Oceanus 平台恢复作业开关 1:开启 -1: 关闭 */
  AutoRecover?: number | null;
  /** 日志级别 */
  LogLevel?: string | null;
  /** 类日志级别 */
  ClazzLevels?: ClazzLevel[] | null;
  /** 是否开启专家模式 */
  ExpertModeOn?: boolean | null;
  /** 专家模式的配置 */
  ExpertModeConfiguration?: ExpertModeConfiguration | null;
  /** trace链路 */
  TraceModeOn?: boolean | null;
  /** trace链路配置 */
  TraceModeConfiguration?: TraceModeConfiguration | null;
  /** checkpoint保留个数 */
  CheckpointRetainedNum?: number | null;
  /** 算子拓扑图 */
  JobGraph?: JobGraph | null;
  /** es索引 */
  EsServerlessIndex?: string | null;
  /** es空间 */
  EsServerlessSpace?: string | null;
  /** es索引中文 */
  IndexName?: string | null;
  /** es空间中文 */
  WorkspaceName?: string | null;
}

/** 描述作业发生的一个事件 */
declare interface JobEvent {
  /** 内部定义的事件类型 */
  Type: string;
  /** 事件类型的说明文字 */
  Description: string;
  /** 事件发生的 Unix 时间戳（秒） */
  Timestamp: number;
  /** 事件发生时的运行 ID */
  RunningOrderId: number | null;
  /** 事件的一些可选说明 */
  Message: string | null;
  /** 异常事件的排查手册链接 */
  SolutionLink: string | null;
}

/** 事件信息 */
declare interface JobEventInfo {
  /** 异常事件总数 */
  ErrorEventTotal?: number | null;
}

/** 作业运行图 */
declare interface JobGraph {
  /** 运行图的点集合 */
  Nodes?: JobGraphNode[] | null;
  /** 运行图的边集合 */
  Edges?: JobGraphEdge[] | null;
}

/** Flink Job 运行图的边信息 */
declare interface JobGraphEdge {
  /** 边的起始节点ID */
  Source: number | null;
  /** 边的目标节点ID */
  Target: number | null;
}

/** Flink Job 运行图的点信息 */
declare interface JobGraphNode {
  /** 节点ID */
  Id: number | null;
  /** 节点描述 */
  Description: string | null;
  /** 节点名称 */
  Name: string | null;
  /** 节点并行度 */
  Parallelism: number | null;
}

/** 搜索启动日志时返回的作业实例 */
declare interface JobInstanceForSubmissionLog {
  /** 实例的Id, 按照启动的时间顺序，从1开始 */
  RunningOrderId: number;
  /** 作业实例的启动时间 */
  JobInstanceStartTime: string;
  /** 作业实例启动的时间（毫秒） */
  StartingMillis: number;
}

/** Job详细信息 */
declare interface JobV1 {
  /** 作业ID */
  JobId?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 可用区 */
  Zone?: string | null;
  /** 用户AppId */
  AppId?: number | null;
  /** 用户UIN */
  OwnerUin?: string | null;
  /** 创建者UIN */
  CreatorUin?: string | null;
  /** 作业名字 */
  Name?: string | null;
  /** 作业类型，1：sql作业，2：Jar作业 */
  JobType?: number | null;
  /** 作业状态，1：未初始化，2：未发布，3：操作中，4：运行中，5：停止，6：暂停，-1：故障 */
  Status?: number | null;
  /** 作业创建时间 */
  CreateTime?: string | null;
  /** 作业启动时间 */
  StartTime?: string | null;
  /** 作业停止时间 */
  StopTime?: string | null;
  /** 作业更新时间 */
  UpdateTime?: string | null;
  /** 作业累计运行时间 */
  TotalRunMillis?: number | null;
  /** 备注信息 */
  Remark?: string | null;
  /** 操作错误提示信息 */
  LastOpResult?: string | null;
  /** 集群名字 */
  ClusterName?: string | null;
  /** 最新配置版本号 */
  LatestJobConfigVersion?: number | null;
  /** 已发布的配置版本 */
  PublishedJobConfigVersion?: number | null;
  /** 运行的CU数量 */
  RunningCuNum?: number | null;
  /** 作业内存规格 */
  CuMem?: number | null;
  /** 作业状态描述 */
  StatusDesc?: string | null;
  /** 运行状态时表示单次运行时间 */
  CurrentRunMillis?: number | null;
  /** 作业所在的集群ID */
  ClusterId?: string | null;
  /** 作业管理WEB UI 入口 */
  WebUIUrl?: string | null;
  /** 作业所在集群类型 */
  SchedulerType?: number | null;
  /** 作业所在集群状态 */
  ClusterStatus?: number | null;
  /** 细粒度下的运行的CU数量 */
  RunningCu?: number | null;
  /** 作业运行的 Flink 版本 */
  FlinkVersion?: string | null;
  /** 工作空间 SerialId */
  WorkSpaceId?: string | null;
  /** 工作空间名称 */
  WorkSpaceName?: string | null;
  /** 作业标签 */
  Tags?: Tag[] | null;
  /** 作业异常事件信息 */
  EventInfo?: JobEventInfo | null;
  /** 描述信息 */
  Description?: string | null;
}

/** 日志查询的每行日志信息 */
declare interface LogContent {
  /** 日志内容 */
  Log: string | null;
  /** 毫秒级时间戳 */
  Time: number | null;
  /** 日志组Id */
  PkgId: string | null;
  /** 日志Id，在日志组范围里唯一 */
  PkgLogId: number;
  /** 日志所属的容器名 */
  ContainerName: string | null;
}

/** SqlGateway返回LogicalType类型 */
declare interface LogicalType {
  /** 类型 */
  Type?: string | null;
  /** 是否允许为空 */
  NullAble?: boolean | null;
  /** 长度 */
  Length?: number | null;
}

/** 专家模式 计算节点的配置信息 */
declare interface NodeConfig {
  /** Node ID */
  Id: number | null;
  /** Node parallelism */
  Parallelism?: number | null;
  /** Slot sharing group */
  SlotSharingGroup?: string | null;
  /** Configuration properties */
  Configuration?: Property[] | null;
  /** 节点的状态ttl配置, 多个用 ; 分割 */
  StateTTL?: string | null;
}

/** 集群购买、扩缩容、续费订单信息 */
declare interface Order {
  /** 创建、续费、扩缩容 1 2 3 */
  Type?: number | null;
  /** 自动续费 1 */
  AutoRenewFlag?: number | null;
  /** 操作人的UIN */
  OperateUin?: string | null;
  /** 最终集群的CU数量 */
  ComputeCu?: number | null;
  /** 订单的时间 */
  OrderTime?: string | null;
}

/** 系统配置属性 */
declare interface Property {
  /** 系统配置的Key */
  Key: string;
  /** 系统配置的Value */
  Value: string;
}

/** 依赖作业分状态计数信息 */
declare interface RefJobStatusCountItem {
  /** 作业状态 */
  JobStatus?: number | null;
  /** 作业数量 */
  Count?: number | null;
}

/** 描述资源配置的返回参数 */
declare interface ResourceConfigItem {
  /** 资源ID */
  ResourceId: string;
  /** 资源类型 */
  ResourceType: number;
  /** 资源所属地域 */
  Region: string;
  /** 资源所属AppId */
  AppId: number;
  /** 主账号Uin */
  OwnerUin: string;
  /** 子账号Uin */
  CreatorUin: string;
  /** 资源位置描述 */
  ResourceLoc: ResourceLoc;
  /** 资源创建时间 */
  CreateTime: string;
  /** 资源版本 */
  Version: number;
  /** 资源描述 */
  Remark: string;
  /** 资源状态：0: 资源同步中，1:资源已就绪 */
  Status: number | null;
  /** 关联作业个数 */
  RefJobCount: number | null;
  /** 分状态统计关联作业数 */
  RefJobStatusCountSet?: RefJobStatusCountItem[] | null;
}

/** 资源详细描述 */
declare interface ResourceItem {
  /** 资源ID */
  ResourceId?: string;
  /** 资源名称 */
  Name?: string;
  /** 资源类型 */
  ResourceType?: number;
  /** 资源位置 */
  ResourceLoc?: ResourceLoc;
  /** 资源地域 */
  Region?: string;
  /** 应用ID */
  AppId?: number;
  /** 主账号Uin */
  OwnerUin?: string;
  /** 子账号Uin */
  CreatorUin?: string;
  /** 资源创建时间 */
  CreateTime?: string;
  /** 资源最后更新时间 */
  UpdateTime?: string;
  /** 资源的资源版本ID */
  LatestResourceConfigVersion?: number;
  /** 资源备注 */
  Remark?: string | null;
  /** 版本个数 */
  VersionCount?: number | null;
  /** 关联作业数 */
  RefJobCount?: number | null;
  /** 作业运行状态 */
  IsJobRun?: number | null;
  /** 文件名 */
  FileName?: string | null;
  /** 工作空间ID */
  WorkSpaceId?: number | null;
  /** 分状态统计关联作业数 */
  RefJobStatusCountSet?: RefJobStatusCountItem[] | null;
}

/** 资源位置描述 */
declare interface ResourceLoc {
  /** 资源位置的存储类型，目前只支持1:COS */
  StorageType: number;
  /** 描述资源位置的json */
  Param: ResourceLocParam;
}

/** 资源参数描述 */
declare interface ResourceLocParam {
  /** 资源bucket */
  Bucket: string;
  /** 资源路径 */
  Path: string;
  /** 资源所在地域，如果不填，则使用Resource的Region */
  Region?: string | null;
}

/** 资源引用参数 */
declare interface ResourceRef {
  /** 资源ID */
  ResourceId: string;
  /** 资源版本ID，-1表示使用最新版本 */
  Version: number;
  /** 引用资源类型，例如主资源设置为1，代表main class所在的jar包 */
  Type: number;
}

/** JobConfig引用资源信息 */
declare interface ResourceRefDetail {
  /** 资源id */
  ResourceId: string;
  /** 资源版本，-1表示使用最新版本 */
  Version: number;
  /** 资源名称 */
  Name: string;
  /** 1: 主资源 */
  Type: number;
  /** 1: 系统内置资源 */
  SystemProvide: number;
}

/** 资源被Job 引用信息 */
declare interface ResourceRefJobInfo {
  /** Job id */
  JobId?: string;
  /** Job配置版本 */
  JobConfigVersion?: number;
  /** 资源版本 */
  ResourceVersion?: number;
}

/** Sql Gateway返回Column类型 */
declare interface ResultColumn {
  /** 名称 */
  Name?: string | null;
  /** 本地类型描述 */
  LogicalType?: LogicalType | null;
  /** 备注 */
  Comment?: string | null;
}

/** Sql Gateway返回数据 */
declare interface ResultData {
  /** 操作类型 */
  Kind?: string | null;
  /** 结果 */
  Fields?: string[] | null;
}

/** 角色授权信息 */
declare interface RoleAuth {
  /** 用户 AppID */
  AppId?: number;
  /** 工作空间 SerialId */
  WorkSpaceSerialId?: string;
  /** 主账号 UIN */
  OwnerUin?: string;
  /** 创建者 UIN */
  CreatorUin?: string;
  /** 绑定授权的 UIN */
  AuthSubAccountUin?: string;
  /** 对应 role表的id */
  Permission?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 最后一次操作时间 */
  UpdateTime?: string;
  /** 2 启用 1 停用 */
  Status?: number;
  /** id */
  Id?: number | null;
  /** 工作空间id */
  WorkSpaceId?: number | null;
  /** 权限名称 */
  RoleName?: string | null;
}

/** 作业启动详情 */
declare interface RunJobDescription {
  /** 作业Id */
  JobId: string;
  /** 运行类型，1：启动，2：恢复 */
  RunType: number;
  /** 兼容旧版 SQL 类型作业启动参数：指定数据源消费起始时间点（建议传值）保证参数为 LATEST、EARLIEST、T+Timestamp （例:T1557394288000） */
  StartMode?: string;
  /** 当前作业的某个版本（不传默认为非草稿的作业版本） */
  JobConfigVersion?: number;
  /** Savepoint路径 */
  SavepointPath?: string;
  /** Savepoint的Id */
  SavepointId?: string;
  /** 使用历史版本系统依赖 */
  UseOldSystemConnector?: boolean;
  /** 自定义时间戳 */
  CustomTimestamp?: number;
}

/** 描述Savepoint信息 */
declare interface Savepoint {
  /** 主键 */
  Id?: number | null;
  /** 版本号 */
  VersionId?: number | null;
  /** 状态 1: Active; 2: Expired; 3: InProgress; 4: Failed; 5: Timeout */
  Status?: number | null;
  /** 创建时间 */
  CreateTime?: number | null;
  /** 更新时间 */
  UpdateTime?: number | null;
  /** 路径 */
  Path?: string | null;
  /** 大小 */
  Size?: number | null;
  /** 快照类型 1: savepoint；2: checkpoint；3: cancelWithSavepoint */
  RecordType?: number | null;
  /** 运行作业实例的顺序 ID */
  JobRuntimeId?: number | null;
  /** 描述 */
  Description?: string | null;
  /** 固定超时时间 */
  Timeout?: number | null;
  /** 快照 serialId */
  SerialId?: string | null;
  /** 耗时 */
  TimeConsuming?: number | null;
  /** 快照路径状态 1：可用；2：不可用； */
  PathStatus?: number | null;
}

/** SlotSharingGroup 描述 */
declare interface SlotSharingGroup {
  /** SlotSharingGroup的名字 */
  Name: string | null;
  /** SlotSharingGroup的规格 */
  Spec: SlotSharingGroupSpec | null;
  /** SlotSharingGroup的描述 */
  Description?: string | null;
}

/** SlotSharingGroup的规格描述 */
declare interface SlotSharingGroupSpec {
  /** 适用的cpu */
  CPU: number | null;
  /** 默认为b, 支持单位有 b, kb, mb, gb */
  HeapMemory: string | null;
  /** 默认为b, 支持单位有 b, kb, mb, gb */
  OffHeapMemory?: string | null;
  /** 默认为b, 支持单位有 b, kb, mb, gb */
  ManagedMemory?: string | null;
}

/** SqlGateway配置信息 */
declare interface SqlGatewayItem {
  /** 唯一标识 */
  SerialId?: string | null;
  /** Flink内核版本 */
  FlinkVersion?: string | null;
  /** 状态，1.停止 2. 开启中 3. 开启 4. 开启失败 5. 停止中 */
  Status?: number | null;
  /** 创建人 */
  CreatorUin?: string | null;
  /** 引用资源 */
  ResourceRefs?: GatewayRefItem[] | null;
  /** Cu规格 */
  CuSpec?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
  /** 配置参数 */
  Properties?: Property[] | null;
}

/** Sql Gateway 返回Result结构类型 */
declare interface StatementResult {
  /** 返回结果列 */
  Columns?: ResultColumn[] | null;
  /** 格式 */
  RowFormat?: string | null;
  /** 结果值 */
  Data?: ResultData[] | null;
}

/** 停止作业的描述信息 */
declare interface StopJobDescription {
  /** 作业Id */
  JobId: string;
  /** 停止类型，1 停止 2 暂停 */
  StopType: number;
}

/** 混合计费 */
declare interface SubEks {
  /** 集群id */
  SerialId?: string | null;
  /** cu数 */
  CuNum?: number | null;
  /** 状态 */
  Status?: number | null;
  /** 状态描述 */
  StatusDesc?: string | null;
  /** 运行cu */
  RunningCu?: number | null;
}

/** 子目录信息 */
declare interface SubFolderInfo {
  /** folder id */
  FolderId?: string;
  /** folder name */
  FolderName?: string;
}

/** 系统资源返回值 */
declare interface SystemResourceItem {
  /** 资源ID */
  ResourceId: string;
  /** 资源名称 */
  Name: string;
  /** 资源类型。1 表示 JAR 包，目前只支持该值。 */
  ResourceType: number;
  /** 资源备注 */
  Remark: string;
  /** 资源所属地域 */
  Region: string;
  /** 资源的最新版本 */
  LatestResourceConfigVersion: number;
}

/** 标签 */
declare interface Tag {
  /** 标签键 */
  TagKey?: string | null;
  /** 标签值 */
  TagValue?: string | null;
}

/** { "Rate": "0.01", ///如1%转换为0.01 "Operator": "1:OUT,2:IN_AND_OUT,3:IN" ///如1%转换为0.01 }Operator算子ID顺序配置，可以对每个算子配置IN、OUT、IN_AND_OUT三个值，分别表示采集输入数据、采集输出数据、同时采集输入和输出数据，配置示例: */
declare interface TraceModeConfiguration {
  /** 如1%转换为0.01 */
  Rate?: string | null;
  /** 按照算子ID顺序配置，可以对每个算子配置IN、OUT、IN_AND_OUT三个值，分别表示采集输入数据、采集输出数据、同时采集输入和输出数据 */
  Operator?: string | null;
}

/** 自定义树结构出参作业列表 */
declare interface TreeJobSets {
  /** 作业Id */
  JobId?: string | null;
  /** 作业名 */
  Name?: string | null;
  /** 作业类型 */
  JobType?: number | null;
  /** 作业占用资源 */
  RunningCu?: number | null;
  /** 作业状态 启动或者停止或者暂停 */
  Status?: number | null;
}

/** 树状结构资源对象 */
declare interface TreeResourceItem {
  /** 资源ID */
  ResourceId: string;
  /** 资源名称 */
  Name: string | null;
  /** 资源类型 */
  ResourceType: number;
  /** 备注 */
  Remark: string | null;
  /** 文件名 */
  FileName: string | null;
  /** 目录ID */
  FolderId: string | null;
  /** 分状态统计关联作业数 */
  RefJobStatusCountSet?: RefJobStatusCountItem[] | null;
}

/** 空间和集群绑定关系 */
declare interface WorkSpaceClusterItem {
  /** 集群 ID */
  ClusterGroupId: number;
  /** 集群 SerialId */
  ClusterGroupSerialId: string;
  /** 集群名称 */
  ClusterName: string;
  /** 工作空间 SerialId */
  WorkSpaceId: string;
  /** 工作空间名称 */
  WorkSpaceName: string;
  /** 绑定状态 2 绑定 1 解除绑定 */
  Status: number;
  /** 项目ID */
  ProjectId: number;
  /** 项目ID string类型 */
  ProjectIdStr: string | null;
}

/** 工作空间详情 */
declare interface WorkSpaceSetItem {
  /** 工作空间 SerialId */
  SerialId: string;
  /** 用户 APPID */
  AppId: number;
  /** 主账号 UIN */
  OwnerUin: string;
  /** 创建者 UIN */
  CreatorUin: string;
  /** 工作空间名称 */
  WorkSpaceName: string;
  /** 区域 */
  Region: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 1 未初始化 2 可用 -1 已删除 */
  Status: number;
  /** 工作空间描述 */
  Description: string;
  /** 工作空间包含集群信息 */
  ClusterGroupSetItem: ClusterGroupSetItem[];
  /** 工作空间角色的信息 */
  RoleAuth: RoleAuth[];
  /** 工作空间成员数量 */
  RoleAuthCount: number;
  /** 工作空间 SerialId */
  WorkSpaceId: string;
  /** 1 */
  JobsCount: number | null;
}

declare interface CheckSavepointRequest {
  /** 作业 id */
  JobId: string;
  /** 快照资源 id */
  SerialId: string;
  /** 快照类型 1: savepoint；2: checkpoint；3: cancelWithSavepoint */
  RecordType: number;
  /** 快照路径，目前只支持 cos 路径 */
  SavepointPath: string;
  /** 工作空间 id */
  WorkSpaceId: string;
}

declare interface CheckSavepointResponse {
  /** 资源 id */
  SerialId: string;
  /** 1=可用，2=不可用 */
  SavepointStatus: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopyJobsRequest {
  /** 复制明细列表 */
  JobItems: CopyJobItem[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
  /** 目标工作空间 SerialId */
  TargetWorkspaceId?: string;
}

declare interface CopyJobsResponse {
  /** 成功条数 */
  SuccessCount?: number | null;
  /** 失败条数 */
  FailCount?: number | null;
  /** 结果列表 */
  CopyJobsResults?: CopyJobResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFolderRequest {
  /** 新建文件夹名 */
  FolderName: string;
  /** 新建文件夹的父目录ID（根目录为"root"） */
  ParentId: string;
  /** 文件夹类型，0是任务文件夹，1是依赖文件夹 */
  FolderType?: number;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface CreateFolderResponse {
  /** 新建文件夹的唯一ID */
  FolderId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateJobConfigRequest {
  /** 作业Id */
  JobId: string;
  /** 主类 */
  EntrypointClass?: string;
  /** 主类入参 */
  ProgramArgs?: string;
  /** 备注 */
  Remark?: string;
  /** 资源引用数组 */
  ResourceRefs?: ResourceRef[];
  /** 作业默认并行度 */
  DefaultParallelism?: number;
  /** 系统参数 */
  Properties?: Property[];
  /** 1: 作业配置达到上限之后，自动删除可删除的最早版本 */
  AutoDelete?: number;
  /** 作业使用的 COS 存储桶名 */
  COSBucket?: string;
  /** 是否采集作业日志 */
  LogCollect?: boolean;
  /** JobManager规格 */
  JobManagerSpec?: number;
  /** TaskManager规格 */
  TaskManagerSpec?: number;
  /** CLS日志集ID */
  ClsLogsetId?: string;
  /** CLS日志主题ID */
  ClsTopicId?: string;
  /** 日志采集类型 2：CLS；3：COS */
  LogCollectType?: number;
  /** pyflink作业运行时使用的python版本 */
  PythonVersion?: string;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
  /** 日志级别 */
  LogLevel?: string;
  /** Oceanus 平台恢复作业开关 1:开启 -1: 关闭 */
  AutoRecover?: number;
  /** 类日志级别 */
  ClazzLevels?: ClazzLevel[];
  /** 是否打开专家模式 */
  ExpertModeOn?: boolean;
  /** 专家模式的配置 */
  ExpertModeConfiguration?: ExpertModeConfiguration;
  /** trace链路 */
  TraceModeOn?: boolean;
  /** trace链路配置 */
  TraceModeConfiguration?: TraceModeConfiguration;
  /** checkpoint保留个数 */
  CheckpointRetainedNum?: number;
  /** 算子拓扑图 */
  JobGraph?: JobGraph;
  /** es索引名称 */
  EsServerlessIndex?: string;
  /** es索引空间 */
  EsServerlessSpace?: string;
}

declare interface CreateJobConfigResponse {
  /** 作业配置版本号 */
  Version?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateJobRequest {
  /** 作业名称，允许输入长度小于50个字符的中文、英文、数字、-（横线）、_（下划线）、.（点），且符号必须半角字符。注意作业名不能和现有作业同名 */
  Name: string;
  /** 作业的类型，1 表示 SQL 作业，2 表示 JAR 作业 */
  JobType: number;
  /** 集群的类型，1 表示共享集群，2 表示独享集群 */
  ClusterType: number;
  /** 当 ClusterType=2 时，必选，用来指定该作业提交的独享集群 ID */
  ClusterId?: string;
  /** 设置每 CU 的内存规格，单位为 GB，支持 2、4、8、16（需申请开通白名单后使用）。默认为 4，即 1 CU 对应 4 GB 的运行内存 */
  CuMem?: number;
  /** 作业的备注信息，可以随意设置 */
  Remark?: string;
  /** 作业名所属文件夹ID，根目录为"root" */
  FolderId?: string;
  /** 作业运行的Flink版本 */
  FlinkVersion?: string;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
  /** 作业标签 */
  Tags?: Tag[];
  /** 作业描述 */
  Description?: string;
}

declare interface CreateJobResponse {
  /** 作业Id */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateResourceConfigRequest {
  /** 资源ID */
  ResourceId: string;
  /** 位置信息 */
  ResourceLoc: ResourceLoc;
  /** 资源描述信息 */
  Remark?: string;
  /** 1： 资源版本达到上限，自动删除最早可删除的版本 */
  AutoDelete?: number;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface CreateResourceConfigResponse {
  /** 资源版本ID */
  Version?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateResourceRequest {
  /** 资源位置 */
  ResourceLoc: ResourceLoc;
  /** 资源类型。目前只支持 JAR，取值为 1 */
  ResourceType: number;
  /** 资源描述 */
  Remark?: string;
  /** 资源名称 */
  Name?: string;
  /** 资源版本描述 */
  ResourceConfigRemark?: string;
  /** 目录ID */
  FolderId?: string;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface CreateResourceResponse {
  /** 资源ID */
  ResourceId?: string;
  /** 资源版本 */
  Version?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkSpaceRequest {
  /** 工作空间名称 */
  WorkSpaceName: string;
  /** 项目空间备注 */
  Description?: string;
}

declare interface CreateWorkSpaceResponse {
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFoldersRequest {
  /** 需删除的文件夹唯一ID */
  FolderIds: string[];
  /** 文件夹类型，0是任务文件夹，1是依赖文件夹 */
  FolderType?: number;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DeleteFoldersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteJobConfigsRequest {
  /** 作业ID */
  JobId: string;
  /** 作业配置版本数组 */
  JobConfigVersions: number[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DeleteJobConfigsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteJobsRequest {
  /** 作业Id列表 */
  JobIds: string[];
  /** 工作空间Id */
  WorkSpaceId?: string;
}

declare interface DeleteJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteResourceConfigsRequest {
  /** 资源ID */
  ResourceId: string;
  /** 资源版本数组 */
  ResourceConfigVersions: number[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DeleteResourceConfigsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteResourcesRequest {
  /** 待删除资源ID列表 */
  ResourceIds: string[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DeleteResourcesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTableConfigRequest {
  /** 作业ID */
  JobId: string;
  /** 调试作业ID */
  DebugId: number;
  /** 表名 */
  TableName: string;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DeleteTableConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteWorkSpaceRequest {
  /** 工作空间 SerialId */
  WorkSpaceId: string;
}

declare interface DeleteWorkSpaceResponse {
  /** 是否删除 */
  Delete: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClustersRequest {
  /** 按照一个或者多个集群 ID 查询，每次请求的集群上限为 100 */
  ClusterIds?: string[];
  /** 偏移量，默认 0 */
  Offset?: number;
  /** 请求的集群数量，默认 20，最大值 100 */
  Limit?: number;
  /** 集群信息结果排序规则，1 按时间降序，2 按照时间升序，3 按照状态排序 */
  OrderType?: number;
  /** 过滤规则 */
  Filters?: Filter[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DescribeClustersResponse {
  /** 集群总数 */
  TotalCount?: number;
  /** 集群列表 */
  ClusterSet?: Cluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFolderRequest {
  /** folder id */
  FolderId: string;
  /** workspace id */
  WorkSpaceId: string;
  /** 1:资源文件夹其他:作业文件夹 */
  FolderType: number;
}

declare interface DescribeFolderResponse {
  /** folder id */
  FolderId?: string;
  /** folder name */
  FolderName?: string;
  /** 父文件夹id */
  ParentId?: string;
  /** 文件夹类型 */
  FolderType?: number;
  /** workspace id */
  WorkSpaceId?: string;
  /** 子文件夹信息 */
  SubFolderInfo?: SubFolderInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobConfigsRequest {
  /** 作业Id */
  JobId: string;
  /** 作业配置版本 */
  JobConfigVersions?: number[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 分页大小，默认20，最大100 */
  Limit?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** true 表示只展示草稿 */
  OnlyDraft?: boolean;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DescribeJobConfigsResponse {
  /** 总的配置版本数量 */
  TotalCount?: number;
  /** 作业配置列表 */
  JobConfigSet?: JobConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobEventsRequest {
  /** 作业的 ID */
  JobId: string;
  /** 筛选条件：起始 Unix 时间戳（秒） */
  StartTimestamp: number;
  /** 筛选条件：结束 Unix 时间戳（秒） */
  EndTimestamp: number;
  /** 事件类型。如果不传则返回所有类型的数据 */
  Types?: string[];
  /** 运行实例 ID 数组 */
  RunningOrderIds?: number[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DescribeJobEventsResponse {
  /** 该作业指定范围内的事件列表 */
  Events: JobEvent[] | null;
  /** 该作业指定范围内运行实例 ID 数组，仅当入参没有传入 RunningOrderIds 参数时才会返回。倒序输出 */
  RunningOrderIds: number[] | null;
  /** 事件的总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobSavepointRequest {
  /** 作业 SerialId */
  JobId: string;
  /** 分页参数，单页总数 */
  Limit: number;
  /** 分页参数，偏移量 */
  Offset: number;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
  /** 2 是checkpoint1 是触发savepoint3 停止触发的savepoint */
  RecordTypes?: number[];
}

declare interface DescribeJobSavepointResponse {
  /** 快照列表总数 */
  TotalNumber?: number | null;
  /** 快照列表 */
  Savepoint?: Savepoint[] | null;
  /** 进行中的快照列表 */
  RunningSavepoint?: Savepoint[] | null;
  /** 进行中的快照列表总数 */
  RunningTotalNumber?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobSubmissionLogRequest {
  /** 作业ID，例如：cql-6v1jkxrn */
  JobId: string;
  /** 起始时间，unix时间戳，毫秒级，例如：1611754219108 */
  StartTime: number;
  /** 结束时间，unix时间戳，毫秒级，例如：1611754219108 */
  EndTime: number;
  /** 作业运行的实例ID, 例如：1,2,3。默认为0，表示未选中任何实例，搜索该时间段内最近的一个实例的日志 */
  RunningOrderId?: number;
  /** 日志搜索的关键词，默认为空 */
  Keyword?: string;
  /** 日志搜索的游标，可透传上次返回的值，默认为空 */
  Cursor?: string;
  /** 时间戳排序规则，asc - 升序，desc - 降序。默认为升序 */
  OrderType?: string;
  /** 搜索的日志条数上限值，最大为100 */
  Limit?: number;
}

declare interface DescribeJobSubmissionLogResponse {
  /** 日志搜索的游标，需要搜索更多时透传这个值 */
  Cursor?: string;
  /** 是否返回了所有的日志记录 */
  ListOver?: boolean;
  /** 作业启动的requestId */
  JobRequestId?: string | null;
  /** 该时间段内符合关键字的所有的作业实例列表 */
  JobInstanceList?: JobInstanceForSubmissionLog[] | null;
  /** 废弃，请使用LogContentList */
  LogList?: string[] | null;
  /** 日志列表 */
  LogContentList?: LogContent[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobsRequest {
  /** 按照一个或者多个作业ID查询。作业ID形如：cql-11112222，每次请求的作业上限为100。参数不支持同时指定JobIds和Filters。 */
  JobIds?: string[];
  /** 过滤条件，支持的 Filter.Name 为：作业名 Name、作业状态 Status、所属集群 ClusterId、作业id JobId、集群名称 ClusterName。 每次请求的 Filters 个数的上限为 5，Filter.Values 的个数上限为 5。参数不支持同时指定 JobIds 和 Filters。 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 分页大小，默认为20，最大值为100 */
  Limit?: number;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
  /** 查询额外的作业信息,例如 JobEventInfo */
  ExtraResult?: string[];
}

declare interface DescribeJobsResponse {
  /** 作业总数 */
  TotalCount?: number;
  /** 作业列表 */
  JobSet?: JobV1[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceConfigsRequest {
  /** 资源ID */
  ResourceId?: string;
  /** 偏移量，仅当设置 Limit 时该参数有效 */
  Offset?: number;
  /** 返回值大小，不填则返回全量数据 */
  Limit?: number;
  /** 资源配置Versions集合 */
  ResourceConfigVersions?: number[];
  /** 作业配置版本 */
  JobConfigVersion?: number;
  /** 作业ID */
  JobId?: string;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DescribeResourceConfigsResponse {
  /** 资源配置描述数组 */
  ResourceConfigSet?: ResourceConfigItem[];
  /** 资源配置数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceRelatedJobsRequest {
  /** 资源ID */
  ResourceId: string;
  /** 默认0; 1： 按照作业版本创建时间降序 */
  DESCByJobConfigCreateTime?: number;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 分页大小，默认为20，最大值为100 */
  Limit?: number;
  /** 资源版本号 */
  ResourceConfigVersion?: number;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DescribeResourceRelatedJobsResponse {
  /** 总数 */
  TotalCount?: number;
  /** 关联作业信息 */
  RefJobInfos?: ResourceRefJobInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourcesRequest {
  /** 需要查询的资源ID数组，数量不超过100个。如果填写了该参数则忽略Filters参数。 */
  ResourceIds?: string[];
  /** 偏移量，仅当设置 Limit 参数时有效 */
  Offset?: number;
  /** 条数限制。如果不填，默认返回 20 条 */
  Limit?: number;
  /** ResourceName按照资源名字过滤，支持模糊过滤。传入的过滤名字不超过5个类型: String必选: 否 */
  Filters?: Filter[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DescribeResourcesResponse {
  /** 资源详细信息集合 */
  ResourceSet?: ResourceItem[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSystemResourcesRequest {
  /** 需要查询的资源ID数组 */
  ResourceIds?: string[];
  /** 偏移量，仅当设置 Limit 参数时有效 */
  Offset?: number;
  /** 条数限制，默认返回 20 条 */
  Limit?: number;
  /** 查询资源配置列表， 如果不填写，返回该 ResourceIds.N 下所有作业配置列表 */
  Filters?: Filter[];
  /** 集群ID */
  ClusterId?: string;
  /** 查询对应Flink版本的内置connector */
  FlinkVersion?: string;
}

declare interface DescribeSystemResourcesResponse {
  /** 资源详细信息集合 */
  ResourceSet: SystemResourceItem[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTreeJobsRequest {
  /** 筛选条件字段 */
  Filters?: Filter[];
  /** 工作空间 Serialid */
  WorkSpaceId?: string;
}

declare interface DescribeTreeJobsResponse {
  /** 父节点ID */
  ParentId?: string | null;
  /** 当前文件夹ID */
  Id?: string | null;
  /** 当前文件夹名 */
  Name?: string | null;
  /** 当前文件夹下的作业列表 */
  JobSet?: TreeJobSets[] | null;
  /** 迭代子目录 */
  Children?: DescribeTreeJobsRsp[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTreeResourcesRequest {
  /** 筛选条件字段 */
  Filters?: Filter[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
  /** 分页游标 */
  Offset?: number;
  /** 单页显示数 */
  Limit?: number;
}

declare interface DescribeTreeResourcesResponse {
  /** 父节点ID */
  ParentId?: string | null;
  /** 文件夹ID */
  Id?: string | null;
  /** 文件夹名 */
  Name?: string | null;
  /** 文件列表 */
  Items?: TreeResourceItem[] | null;
  /** 子目录列表 */
  Children?: DescribeTreeResourcesRsp[] | null;
  /** 资源总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWorkSpacesRequest {
  /** 偏移量，默认 0 */
  Offset?: number;
  /** 1 按照创建时间降序排序(默认) 2.按照创建时间升序排序，3. 按照状态降序排序 4. 按照状态升序排序 默认为0 */
  OrderType?: number;
  /** 请求的集群数量，默认 20 */
  Limit?: number;
  /** 过滤规则 */
  Filters?: Filter[];
}

declare interface DescribeWorkSpacesResponse {
  /** 空间详情列表 */
  WorkSpaceSetItem?: WorkSpaceSetItem[] | null;
  /** 空间总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FetchSqlGatewayStatementResultRequest {
  /** 集群ID */
  ClusterId: string;
  /** Sql Gateway会话ID */
  SessionId?: string;
  /** sql的查询id */
  OperationHandleId?: string;
  /** 下一条结果的获取url，首次获取执行结果时可以为空，当获取下一批查询结果时需要传递 */
  ResultUri?: string;
}

declare interface FetchSqlGatewayStatementResultResponse {
  /** 错误信息 */
  ErrorMessage?: string[] | null;
  /** 返回类型 */
  ResultType?: string | null;
  /** 是否DQL结果 */
  IsQueryResult?: boolean | null;
  /** 结果类型 */
  ResultKind?: string | null;
  /** 结果 */
  Results?: StatementResult | null;
  /** 下一次请求的uri */
  NextResultUri?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetMetaTableRequest {
  /** 目录名 */
  Catalog: string;
  /** 库名 */
  Database: string;
  /** 表名 */
  Table: string;
  /** 空间唯一标识 */
  WorkSpaceId: string;
}

declare interface GetMetaTableResponse {
  /** 元数据表唯一标识 */
  SerialId?: string;
  /** 目录名 */
  Catalog?: string;
  /** 库名 */
  Database?: string;
  /** 表名 */
  Table?: string;
  /** 建表语句,使用 Base64 编码。例如Q1JFQVRFIFRBQkxFIGRhdGFnZW5fc291cmNlX3RhYmxlICggCiAgICBpZCBJTlQsIAogICAgbmFtZSBTVFJJTkcgCikgV0lUSCAoCidjb25uZWN0b3InPSdkYXRhZ2VuJywKJ3Jvd3MtcGVyLXNlY29uZCcgPSAnMScKKTs= */
  DDL?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFolderRequest {
  /** 文件夹ID（必填） */
  SourceFolderId?: string;
  /** 如需拖拽文件夹，需传入目标文件夹ID */
  TargetFolderId?: string;
  /** 如需修改文件夹名，需传入FolderName字段 */
  FolderName?: string;
  /** 文件夹类型，0是任务文件夹，1是依赖文件夹 */
  FolderType?: number;
  /** 批量移动的作业serial id 列表 */
  SourceJobIds?: string[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface ModifyFolderResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyJobRequest {
  /** 作业Id */
  JobId: string;
  /** 作业名称，支持长度小于50的中文/英文/数字/”-”/”_”/”.”，不能重名 */
  Name?: string;
  /** 描述 */
  Remark?: string;
  /** 拖拽文件需传入此参数 */
  TargetFolderId?: string;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
  /** 作业描述 */
  Description?: string;
}

declare interface ModifyJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyWorkSpaceRequest {
  /** 工作空间 SerialId */
  WorkSpaceId: string;
  /** 待修改的工作空间名称 */
  WorkSpaceName?: string;
  /** 待修改的工作空间备注 */
  Description?: string;
}

declare interface ModifyWorkSpaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunJobsRequest {
  /** 批量启动作业的描述信息 */
  RunJobDescriptions: RunJobDescription[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface RunJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunSqlGatewayStatementRequest {
  /** 集群ID */
  ClusterId: string;
  /** 需要执行的sql，该sql会被Sql Gateway执行，当前支持的是paimon修改需求，因此主要是DDL语句 */
  Sql: string;
  /** Sql Gateway会话ID，可不填，如果不填则会自动创建一个会话ID，每个会话ID都有一个存活时间，测试环境为10分钟，线上默认是30分钟 */
  SessionId?: string;
}

declare interface RunSqlGatewayStatementResponse {
  /** 错误信息 */
  ErrorMessage?: string[] | null;
  /** 会话id，若入参未传，则返回自动创建的会话id，若入参已经传递，则返回值与原传入值一致 */
  SessionId?: string;
  /** 返回执行id，可以根据该执行id和会话id获取执行结果 */
  OperationHandleId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopJobsRequest {
  /** 批量停止作业的描述信息 */
  StopJobDescriptions: StopJobDescription[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface StopJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TriggerJobSavepointRequest {
  /** 作业 SerialId */
  JobId: string;
  /** 描述 */
  Description?: string;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface TriggerJobSavepointResponse {
  /** 是否成功 */
  SavepointTrigger?: boolean;
  /** 错误消息 */
  ErrorMsg?: string | null;
  /** 快照路径 */
  FinalSavepointPath?: string | null;
  /** 快照 ID */
  SavepointId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Oceanus 流计算 Oceanus} */
declare interface Oceanus {
  (): Versions;
  /** 检查快照是否可用 {@link CheckSavepointRequest} {@link CheckSavepointResponse} */
  CheckSavepoint(data: CheckSavepointRequest, config?: AxiosRequestConfig): AxiosPromise<CheckSavepointResponse>;
  /** 复制作业 {@link CopyJobsRequest} {@link CopyJobsResponse} */
  CopyJobs(data: CopyJobsRequest, config?: AxiosRequestConfig): AxiosPromise<CopyJobsResponse>;
  /** 创建文件夹 {@link CreateFolderRequest} {@link CreateFolderResponse} */
  CreateFolder(data: CreateFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFolderResponse>;
  /** 新建作业 {@link CreateJobRequest} {@link CreateJobResponse} */
  CreateJob(data: CreateJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJobResponse>;
  /** 创建作业配置 {@link CreateJobConfigRequest} {@link CreateJobConfigResponse} */
  CreateJobConfig(data: CreateJobConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJobConfigResponse>;
  /** 创建资源接口 {@link CreateResourceRequest} {@link CreateResourceResponse} */
  CreateResource(data: CreateResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourceResponse>;
  /** 创建资源配置接口 {@link CreateResourceConfigRequest} {@link CreateResourceConfigResponse} */
  CreateResourceConfig(data: CreateResourceConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourceConfigResponse>;
  /** 创建工作空间 {@link CreateWorkSpaceRequest} {@link CreateWorkSpaceResponse} */
  CreateWorkSpace(data: CreateWorkSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkSpaceResponse>;
  /** 删除文件夹 {@link DeleteFoldersRequest} {@link DeleteFoldersResponse} */
  DeleteFolders(data: DeleteFoldersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFoldersResponse>;
  /** 删除作业配置 {@link DeleteJobConfigsRequest} {@link DeleteJobConfigsResponse} */
  DeleteJobConfigs(data: DeleteJobConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteJobConfigsResponse>;
  /** 删除作业 {@link DeleteJobsRequest} {@link DeleteJobsResponse} */
  DeleteJobs(data: DeleteJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteJobsResponse>;
  /** 删除资源版本 {@link DeleteResourceConfigsRequest} {@link DeleteResourceConfigsResponse} */
  DeleteResourceConfigs(data: DeleteResourceConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceConfigsResponse>;
  /** 删除资源接口 {@link DeleteResourcesRequest} {@link DeleteResourcesResponse} */
  DeleteResources(data: DeleteResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourcesResponse>;
  /** 删除作业表配置 {@link DeleteTableConfigRequest} {@link DeleteTableConfigResponse} */
  DeleteTableConfig(data: DeleteTableConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTableConfigResponse>;
  /** 删除工作空间 {@link DeleteWorkSpaceRequest} {@link DeleteWorkSpaceResponse} */
  DeleteWorkSpace(data: DeleteWorkSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWorkSpaceResponse>;
  /** 查询集群 {@link DescribeClustersRequest} {@link DescribeClustersResponse} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 查询文件夹 {@link DescribeFolderRequest} {@link DescribeFolderResponse} */
  DescribeFolder(data: DescribeFolderRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFolderResponse>;
  /** 查询作业配置 {@link DescribeJobConfigsRequest} {@link DescribeJobConfigsResponse} */
  DescribeJobConfigs(data: DescribeJobConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobConfigsResponse>;
  /** 获取指定作业的事件 {@link DescribeJobEventsRequest} {@link DescribeJobEventsResponse} */
  DescribeJobEvents(data: DescribeJobEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobEventsResponse>;
  /** 查找Savepoint列表 {@link DescribeJobSavepointRequest} {@link DescribeJobSavepointResponse} */
  DescribeJobSavepoint(data: DescribeJobSavepointRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobSavepointResponse>;
  /** 查询作业实例启动日志 {@link DescribeJobSubmissionLogRequest} {@link DescribeJobSubmissionLogResponse} */
  DescribeJobSubmissionLog(data: DescribeJobSubmissionLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobSubmissionLogResponse>;
  /** 查询作业 {@link DescribeJobsRequest} {@link DescribeJobsResponse} */
  DescribeJobs(data?: DescribeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobsResponse>;
  /** 描述资源配置接口 {@link DescribeResourceConfigsRequest} {@link DescribeResourceConfigsResponse} */
  DescribeResourceConfigs(data?: DescribeResourceConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceConfigsResponse>;
  /** 获取资源关联作业信息 {@link DescribeResourceRelatedJobsRequest} {@link DescribeResourceRelatedJobsResponse} */
  DescribeResourceRelatedJobs(data: DescribeResourceRelatedJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceRelatedJobsResponse>;
  /** 描述资源接口 {@link DescribeResourcesRequest} {@link DescribeResourcesResponse} */
  DescribeResources(data?: DescribeResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesResponse>;
  /** 描述系统资源接口 {@link DescribeSystemResourcesRequest} {@link DescribeSystemResourcesResponse} */
  DescribeSystemResources(data?: DescribeSystemResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSystemResourcesResponse>;
  /** 自定义树状结构 {@link DescribeTreeJobsRequest} {@link DescribeTreeJobsResponse} */
  DescribeTreeJobs(data?: DescribeTreeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTreeJobsResponse>;
  /** 查询树状结构资源列表 {@link DescribeTreeResourcesRequest} {@link DescribeTreeResourcesResponse} */
  DescribeTreeResources(data?: DescribeTreeResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTreeResourcesResponse>;
  /** 授权工作空间列表 {@link DescribeWorkSpacesRequest} {@link DescribeWorkSpacesResponse} */
  DescribeWorkSpaces(data?: DescribeWorkSpacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWorkSpacesResponse>;
  /** 查询Statement执行结果 {@link FetchSqlGatewayStatementResultRequest} {@link FetchSqlGatewayStatementResultResponse} */
  FetchSqlGatewayStatementResult(data: FetchSqlGatewayStatementResultRequest, config?: AxiosRequestConfig): AxiosPromise<FetchSqlGatewayStatementResultResponse>;
  /** 查询元数据表 {@link GetMetaTableRequest} {@link GetMetaTableResponse} */
  GetMetaTable(data: GetMetaTableRequest, config?: AxiosRequestConfig): AxiosPromise<GetMetaTableResponse>;
  /** 拖拽文件夹 {@link ModifyFolderRequest} {@link ModifyFolderResponse} */
  ModifyFolder(data?: ModifyFolderRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFolderResponse>;
  /** 更新作业 {@link ModifyJobRequest} {@link ModifyJobResponse} */
  ModifyJob(data: ModifyJobRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyJobResponse>;
  /** 修改工作空间 {@link ModifyWorkSpaceRequest} {@link ModifyWorkSpaceResponse} */
  ModifyWorkSpace(data: ModifyWorkSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyWorkSpaceResponse>;
  /** 运行作业 {@link RunJobsRequest} {@link RunJobsResponse} */
  RunJobs(data: RunJobsRequest, config?: AxiosRequestConfig): AxiosPromise<RunJobsResponse>;
  /** 执行Statement {@link RunSqlGatewayStatementRequest} {@link RunSqlGatewayStatementResponse} */
  RunSqlGatewayStatement(data: RunSqlGatewayStatementRequest, config?: AxiosRequestConfig): AxiosPromise<RunSqlGatewayStatementResponse>;
  /** 停止作业 {@link StopJobsRequest} {@link StopJobsResponse} */
  StopJobs(data: StopJobsRequest, config?: AxiosRequestConfig): AxiosPromise<StopJobsResponse>;
  /** 触发Savepoint {@link TriggerJobSavepointRequest} {@link TriggerJobSavepointResponse} */
  TriggerJobSavepoint(data: TriggerJobSavepointRequest, config?: AxiosRequestConfig): AxiosPromise<TriggerJobSavepointResponse>;
}

export declare type Versions = ["2019-04-22"];

export default Oceanus;
