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

/** 描述用户创建的集群信息 */
declare interface Cluster {
  /** 集群 ID */
  ClusterId: string;
  /** 集群名称 */
  Name: string;
  /** 地域 */
  Region: string;
  /** 用户 AppID */
  AppId: number;
  /** 主账号 UIN */
  OwnerUin: string;
  /** 创建者 UIN */
  CreatorUin: string;
  /** 集群状态, 1 未初始化,，3 初始化中，2 运行中 */
  Status: number;
  /** 描述 */
  Remark: string;
  /** 集群创建时间 */
  CreateTime: string;
  /** 最后一次操作集群的时间 */
  UpdateTime: string;
  /** CU 数量 */
  CuNum: number;
  /** CU 内存规格 */
  CuMem: number;
  /** 可用区 */
  Zone: string;
  /** 状态描述 */
  StatusDesc: string;
  /** 网络 */
  CCNs: CCN[];
  /** 网络 */
  NetEnvironmentType: number;
  /** 空闲 CU */
  FreeCuNum: number;
  /** 集群绑定的标签 */
  Tags: Tag[] | null;
  /** 集群隔离时间; 没隔离时间，则为 - */
  IsolatedTime: string | null;
  /** 集群过期时间; 没过期概念，则为 - */
  ExpireTime: string | null;
  /** 距离过期还有多少秒; 没过期概念，则为 - */
  SecondsUntilExpiry: string | null;
  /** 自动续费标记，0 表示默认状态 (用户未设置，即初始状态，用户开通了预付费不停服特权会进行自动续费)， 1 表示自动续费，2表示明确不自动续费(用户设置) */
  AutoRenewFlag: number | null;
  /** 集群的默认 COS 存储桶 */
  DefaultCOSBucket: string | null;
  /** 集群的CLS 日志集 LogSet */
  CLSLogSet: string | null;
  /** 集群的CLS 日志主题 TopicId */
  CLSTopicId: string | null;
  /** 集群的CLS 日志集 名字 */
  CLSLogName: string | null;
  /** 集群的CLS 日志主题 名字 */
  CLSTopicName: string | null;
  /** 集群的版本信息 */
  Version: ClusterVersion | null;
  /** 细粒度资源下的空闲CU */
  FreeCu: number | null;
  /** 集群的默认日志采集配置 */
  DefaultLogCollectConf: string | null;
  /** 取值：0-没有设置，1-已设置，2-不允许设置 */
  CustomizedDNSEnabled: number | null;
  /** 空间信息 */
  Correlations: WorkSpaceClusterItem[] | null;
  /** 运行CU */
  RunningCu: number | null;
  /** 0 后付费,1 预付费 */
  PayMode: number | null;
  /** 前端区分 集群是否需要2CU逻辑 因为历史集群 变配不需要, default 1 新集群都需要 */
  IsNeedManageNode: number | null;
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
}

/** 复制作业单条明细结果 */
declare interface CopyJobResult {
}

/** 查询作业列表时的过滤器 */
declare interface Filter {
  /** 要过滤的字段 */
  Name: string;
  /** 字段的过滤值 */
  Values: string[];
}

/** 作业配置详情 */
declare interface JobConfig {
  /** 作业Id */
  JobId: string;
  /** 主类 */
  EntrypointClass: string | null;
  /** 主类入参 */
  ProgramArgs: string | null;
  /** 备注 */
  Remark: string | null;
  /** 作业配置创建时间 */
  CreateTime: string;
  /** 作业配置的版本号 */
  Version: number;
  /** 作业默认并行度 */
  DefaultParallelism: number | null;
  /** 系统参数 */
  Properties: Property[] | null;
  /** 引用资源 */
  ResourceRefDetails: ResourceRefDetail[] | null;
  /** 创建者uin */
  CreatorUin: string | null;
  /** 作业配置上次启动时间 */
  UpdateTime: string | null;
  /** 作业绑定的存储桶 */
  COSBucket: string | null;
  /** 是否启用日志收集，0-未启用，1-已启用，2-历史集群未设置日志集，3-历史集群已开启 */
  LogCollect: number | null;
  /** 作业的最大并行度 */
  MaxParallelism: number | null;
  /** JobManager规格 */
  JobManagerSpec: number | null;
  /** TaskManager规格 */
  TaskManagerSpec: number | null;
  /** CLS日志集ID */
  ClsLogsetId: string | null;
  /** CLS日志主题ID */
  ClsTopicId: string | null;
  /** pyflink作业运行的python版本 */
  PythonVersion: string | null;
  /** Oceanus 平台恢复作业开关 1:开启 -1: 关闭 */
  AutoRecover: number | null;
  /** 日志级别 */
  LogLevel: string | null;
}

/** Job详细信息 */
declare interface JobV1 {
  /** 作业ID */
  JobId: string | null;
  /** 地域 */
  Region: string | null;
  /** 可用区 */
  Zone: string | null;
  /** 用户AppId */
  AppId: number | null;
  /** 用户UIN */
  OwnerUin: string | null;
  /** 创建者UIN */
  CreatorUin: string | null;
  /** 作业名字 */
  Name: string | null;
  /** 作业类型，1：sql作业，2：Jar作业 */
  JobType: number | null;
  /** 作业状态，1：未初始化，2：未发布，3：操作中，4：运行中，5：停止，6：暂停，-1：故障 */
  Status: number | null;
  /** 作业创建时间 */
  CreateTime: string | null;
  /** 作业启动时间 */
  StartTime: string | null;
  /** 作业停止时间 */
  StopTime: string | null;
  /** 作业更新时间 */
  UpdateTime: string | null;
  /** 作业累计运行时间 */
  TotalRunMillis: number | null;
  /** 备注信息 */
  Remark: string | null;
  /** 操作错误提示信息 */
  LastOpResult: string | null;
  /** 集群名字 */
  ClusterName: string | null;
  /** 最新配置版本号 */
  LatestJobConfigVersion: number | null;
  /** 已发布的配置版本 */
  PublishedJobConfigVersion: number | null;
  /** 运行的CU数量 */
  RunningCuNum: number | null;
  /** 作业内存规格 */
  CuMem: number | null;
  /** 作业状态描述 */
  StatusDesc: string | null;
  /** 运行状态时表示单次运行时间 */
  CurrentRunMillis: number | null;
  /** 作业所在的集群ID */
  ClusterId: string | null;
  /** 作业管理WEB UI 入口 */
  WebUIUrl: string | null;
  /** 作业所在集群类型 */
  SchedulerType: number | null;
  /** 作业所在集群状态 */
  ClusterStatus: number | null;
  /** 细粒度下的运行的CU数量 */
  RunningCu: number | null;
  /** 作业运行的 Flink 版本 */
  FlinkVersion: string | null;
  /** 工作空间 SerialId */
  WorkSpaceId: string | null;
  /** 工作空间名称 */
  WorkSpaceName: string | null;
}

/** 系统配置属性 */
declare interface Property {
  /** 系统配置的Key */
  Key: string;
  /** 系统配置的Value */
  Value: string;
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
}

/** 资源详细描述 */
declare interface ResourceItem {
  /** 资源ID */
  ResourceId: string;
  /** 资源名称 */
  Name: string;
  /** 资源类型 */
  ResourceType: number;
  /** 资源位置 */
  ResourceLoc: ResourceLoc;
  /** 资源地域 */
  Region: string;
  /** 应用ID */
  AppId: number;
  /** 主账号Uin */
  OwnerUin: string;
  /** 子账号Uin */
  CreatorUin: string;
  /** 资源创建时间 */
  CreateTime: string;
  /** 资源最后更新时间 */
  UpdateTime: string;
  /** 资源的资源版本ID */
  LatestResourceConfigVersion: number;
  /** 资源备注 */
  Remark: string | null;
  /** 版本个数 */
  VersionCount: number | null;
  /** 关联作业数 */
  RefJobCount: number | null;
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
  JobId: string;
  /** Job配置版本 */
  JobConfigVersion: number;
  /** 资源版本 */
  ResourceVersion: number;
}

/** 作业启动详情 */
declare interface RunJobDescription {
  /** 作业Id */
  JobId: string;
  /** 运行类型，1：启动，2：恢复 */
  RunType: number;
  /** 已废弃。旧版 SQL 类型作业启动参数：指定数据源消费起始时间点 */
  StartMode?: string;
  /** 当前作业的某个版本 */
  JobConfigVersion?: number;
  /** Savepoint路径 */
  SavepointPath?: string;
  /** Savepoint的Id */
  SavepointId?: string;
}

/** 描述Savepoint信息 */
declare interface Savepoint {
  /** 主键 */
  Id: number | null;
  /** 版本号 */
  VersionId: number | null;
  /** 状态 1: Active; 2: Expired; 3: InProgress; 4: Failed; 5: Timeout */
  Status: number | null;
  /** 创建时间 */
  CreateTime: number | null;
  /** 更新时间 */
  UpdateTime: number | null;
  /** 路径 */
  Path: string | null;
  /** 大小 */
  Size: number | null;
  /** 快照类型 1: savepoint；2: checkpoint；3: cancelWithSavepoint */
  RecordType: number | null;
  /** 运行作业实例的顺序 ID */
  JobRuntimeId: number | null;
  /** 描述 */
  Description: string | null;
  /** 固定超时时间 */
  Timeout: number | null;
  /** 快照 serialId */
  SerialId: string | null;
}

/** 停止作业的描述信息 */
declare interface StopJobDescription {
  /** 作业Id */
  JobId: string;
  /** 停止类型，1 停止 2 暂停 */
  StopType: number;
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CopyJobsRequest {
  /** 复制明细列表 */
  JobItems: CopyJobItem[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface CopyJobsResponse {
  /** 成功条数 */
  SuccessCount: number | null;
  /** 失败条数 */
  FailCount: number | null;
  /** 结果列表 */
  CopyJobsResults: CopyJobResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFolderRequest {
  /** 新建文件夹名 */
  FolderName: string;
  /** 新建文件夹的父目录ID */
  ParentId: string;
  /** 文件夹类型，0是任务文件夹，1是依赖文件夹 */
  FolderType?: number;
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface CreateFolderResponse {
  /** 新建文件夹的唯一ID */
  FolderId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface CreateJobConfigResponse {
  /** 作业配置版本号 */
  Version: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateJobRequest {
  /** 作业名称，允许输入长度小于等于50个字符的中文、英文、数字、-（横线）、_（下划线）、.（点），且符号必须半角字符。注意作业名不能和现有作业同名 */
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
}

declare interface CreateJobResponse {
  /** 作业Id */
  JobId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  Version: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ResourceId: string;
  /** 资源版本 */
  Version: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteJobsRequest {
  /** 作业Id列表 */
  JobIds: string[];
  /** 工作空间Id */
  WorkSpaceId?: string;
}

declare interface DeleteJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteResourcesRequest {
  /** 待删除资源ID列表 */
  ResourceIds: string[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DeleteResourcesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalCount: number;
  /** 集群列表 */
  ClusterSet: Cluster[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalCount: number;
  /** 作业配置列表 */
  JobConfigSet: JobConfig[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface DescribeJobSavepointResponse {
  /** 快照列表总数 */
  TotalNumber: number | null;
  /** 快照列表 */
  Savepoint: Savepoint[] | null;
  /** 进行中的快照列表 */
  RunningSavepoint: Savepoint[] | null;
  /** 进行中的快照列表总数 */
  RunningTotalNumber: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface DescribeJobsResponse {
  /** 作业总数 */
  TotalCount: number;
  /** 作业列表 */
  JobSet: JobV1[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ResourceConfigSet: ResourceConfigItem[];
  /** 资源配置数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  TotalCount: number;
  /** 关联作业信息 */
  RefJobInfos: ResourceRefJobInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  ResourceSet: ResourceItem[];
  /** 总数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTreeJobsRequest {
  /** 工作空间 Serialid */
  WorkSpaceId?: string;
}

declare interface DescribeTreeJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTreeResourcesRequest {
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface DescribeTreeResourcesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
}

declare interface ModifyJobResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RunJobsRequest {
  /** 批量启动作业的描述信息 */
  RunJobDescriptions: RunJobDescription[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface RunJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopJobsRequest {
  /** 批量停止作业的描述信息 */
  StopJobDescriptions: StopJobDescription[];
  /** 工作空间 SerialId */
  WorkSpaceId?: string;
}

declare interface StopJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  SavepointTrigger: boolean;
  /** 错误消息 */
  ErrorMsg: string | null;
  /** 快照路径 */
  FinalSavepointPath: string | null;
  /** 快照 ID */
  SavepointId: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [流计算 Oceanus](https://cloud.tencent.com/document/product/849) */
declare interface Oceanus {
  (): Versions;
  /** 检查快照是否可用 */
  CheckSavepoint(data: CheckSavepointRequest, config?: AxiosRequestConfig): AxiosPromise<CheckSavepointResponse>;
  /** 复制作业 */
  CopyJobs(data: CopyJobsRequest, config?: AxiosRequestConfig): AxiosPromise<CopyJobsResponse>;
  /** 创建文件夹 */
  CreateFolder(data: CreateFolderRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFolderResponse>;
  /** 新建作业 */
  CreateJob(data: CreateJobRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJobResponse>;
  /** 创建作业配置 */
  CreateJobConfig(data: CreateJobConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateJobConfigResponse>;
  /** 创建资源接口 */
  CreateResource(data: CreateResourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourceResponse>;
  /** 创建资源配置接口 */
  CreateResourceConfig(data: CreateResourceConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateResourceConfigResponse>;
  /** 删除作业 */
  DeleteJobs(data: DeleteJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteJobsResponse>;
  /** 删除资源版本 */
  DeleteResourceConfigs(data: DeleteResourceConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourceConfigsResponse>;
  /** 删除资源接口 */
  DeleteResources(data: DeleteResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteResourcesResponse>;
  /** 删除作业表配置 */
  DeleteTableConfig(data: DeleteTableConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTableConfigResponse>;
  /** 查询集群 */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 查询作业配置 */
  DescribeJobConfigs(data: DescribeJobConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobConfigsResponse>;
  /** 查找Savepoint列表 */
  DescribeJobSavepoint(data: DescribeJobSavepointRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobSavepointResponse>;
  /** 查询作业 */
  DescribeJobs(data?: DescribeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobsResponse>;
  /** 描述资源配置接口 */
  DescribeResourceConfigs(data?: DescribeResourceConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceConfigsResponse>;
  /** 获取资源关联作业信息 */
  DescribeResourceRelatedJobs(data: DescribeResourceRelatedJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceRelatedJobsResponse>;
  /** 描述资源接口 */
  DescribeResources(data?: DescribeResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesResponse>;
  /** 描述系统资源接口 */
  DescribeSystemResources(data?: DescribeSystemResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSystemResourcesResponse>;
  /** 自定义树状结构 */
  DescribeTreeJobs(data?: DescribeTreeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTreeJobsResponse>;
  /** 查询树状结构资源列表 */
  DescribeTreeResources(data?: DescribeTreeResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTreeResourcesResponse>;
  /** 更新作业 */
  ModifyJob(data: ModifyJobRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyJobResponse>;
  /** 运行作业 */
  RunJobs(data: RunJobsRequest, config?: AxiosRequestConfig): AxiosPromise<RunJobsResponse>;
  /** 停止作业 */
  StopJobs(data: StopJobsRequest, config?: AxiosRequestConfig): AxiosPromise<StopJobsResponse>;
  /** 触发Savepoint */
  TriggerJobSavepoint(data: TriggerJobSavepointRequest, config?: AxiosRequestConfig): AxiosPromise<TriggerJobSavepointResponse>;
}

export declare type Versions = ["2019-04-22"];

export default Oceanus;
