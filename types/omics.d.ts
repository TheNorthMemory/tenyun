/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用版本。 */
declare interface ApplicationVersion {
  /** 版本类型。 */
  Type?: string;
  /** 版本ID。 */
  ApplicationVersionId?: string;
  /** 发布名称。 */
  Name?: string;
  /** 发布描述。 */
  Description?: string;
  /** 入口文件。 */
  Entrypoint?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 创建者名称。 */
  CreatorName?: string;
  /** 创建者ID。 */
  CreatorId?: string;
  /** Git信息。 */
  GitInfo?: string;
  /** Git信息。 */
  GitSource?: GitInfo;
  /** COS信息。 */
  CosSource?: CosFileInfo;
}

/** 云服务器配置。 */
declare interface CVMOption {
  /** 云服务器可用区。 */
  Zone: string | null;
  /** 云服务器实例规格。 */
  InstanceType: string | null;
}

/** 缓存信息。 */
declare interface CacheInfo {
  /** 缓存清理时间(小时)。 */
  CacheClearDelay?: number;
  /** 缓存清理计划时间。 */
  CacheClearTime?: string;
  /** 缓存是否已被清理。 */
  CacheCleared?: boolean;
}

/** 计算集群配置。 */
declare interface ClusterOption {
  /** 计算集群可用区。 */
  Zone: string;
  /** 计算集群类型，取值范围：- KUBERNETES */
  Type: string;
  /** 计算集群Service CIDR，不能与VPC网段重合。 */
  ServiceCidr?: string;
  /** 资源配额。 */
  ResourceQuota?: ResourceQuota;
  /** 限制范围。 */
  LimitRange?: LimitRange;
}

/** COS 文件信息 */
declare interface CosFileInfo {
  /** 存储桶。 */
  Bucket?: string;
  /** COS文件地址。 */
  Uri?: string;
  /** 地域。 */
  Region?: string;
}

/** 数据库配置。 */
declare interface DatabaseOption {
  /** 数据库可用区。 */
  Zone: string | null;
}

/** 组学平台环境详情。 */
declare interface Environment {
  /** 环境ID。 */
  EnvironmentId?: string;
  /** 环境名称。 */
  Name?: string;
  /** 环境描述信息。 */
  Description?: string;
  /** 环境地域。 */
  Region?: string;
  /** 环境类型，取值范围：- KUBERNETES：Kubernetes容器集群- HPC：HPC高性能计算集群 */
  Type?: string;
  /** 环境状态，取值范围：- INITIALIZING：创建中- INITIALIZATION_ERROR：创建失败- RUNNING：运行中- ERROR：异常- DELETING：正在删除- DELETE_ERROR：删除失败 */
  Status?: string;
  /** 环境是否可用。环境需要可用才能投递计算任务。 */
  Available?: boolean;
  /** 环境是否为默认环境。 */
  IsDefault?: boolean;
  /** 环境是否为托管环境。 */
  IsManaged?: boolean;
  /** 环境信息。 */
  Message?: string;
  /** 云资源ID。 */
  ResourceIds?: ResourceIds;
  /** 上个工作流UUID。 */
  LastWorkflowUuid?: string;
  /** 创建时间。 */
  CreationTime?: string;
}

/** 环境配置。 */
declare interface EnvironmentConfig {
  /** 私有网络配置。 */
  VPCOption: VPCOption;
  /** 计算集群配置。 */
  ClusterOption: ClusterOption;
  /** 数据库配置。 */
  DatabaseOption: DatabaseOption;
  /** 存储配置。 */
  StorageOption: StorageOption;
  /** 云服务器配置。 */
  CVMOption: CVMOption;
  /** 安全组配置。 */
  SecurityGroupOption?: SecurityGroupOption;
}

/** 执行时间。 */
declare interface ExecutionTime {
  /** 提交时间。 */
  SubmitTime?: string;
  /** 开始时间。 */
  StartTime?: string;
  /** 结束时间。 */
  EndTime?: string;
}

/** 描述键值对过滤器，用于条件过滤查询。- 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。- 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 过滤字段。 */
  Name: string;
  /** 过滤字段值。 */
  Values: string[];
}

/** Git信息。 */
declare interface GitInfo {
  /** Git地址。 */
  GitHttpPath: string;
  /** Git用户名。 */
  GitUserName?: string;
  /** Git密码或者Token。 */
  GitTokenOrPassword?: string;
  /** 分支。 */
  Branch?: string;
  /** 标签。 */
  Tag?: string;
}

/** 资源限制范围。 */
declare interface LimitRange {
  /** 最大CPU设置 */
  MaxCPU?: string;
  /** 最大内存设置（单位：Mi，Gi，Ti，M，G，T） */
  MaxMemory?: string;
}

/** Nextflow选项。 */
declare interface NFOption {
  /** Config。 */
  Config?: string;
  /** Profile。 */
  Profile?: string;
  /** Report。 */
  Report?: boolean;
  /** Resume。 */
  Resume?: boolean;
  /** Nextflow引擎版本，取值范围：- 22.10.7- 23.10.1 */
  NFVersion?: string;
  /** 启动路径。可填写指定缓存卷内的绝对路径，nextflow run 命令将在此路径执行。当WorkDir为COS路径时必填；当WorkDir为缓存卷路径时选填，不填默认使用WorkDir作为LaunchDir。 */
  LaunchDir?: string;
}

/** 云资源ID。 */
declare interface ResourceIds {
  /** 私有网络ID。 */
  VPCId?: string;
  /** 子网ID。 */
  SubnetId?: string;
  /** 安全组ID。 */
  SecurityGroupId?: string;
  /** TDSQL-C Mysql版数据库ID。 */
  TDSQLCId?: string;
  /** 文件存储ID。 */
  CFSId?: string;
  /** 文件存储类型：取值范围：- SD：通用标准型- HP：通用性能型- TB：turbo标准型- TP：turbo性能型 */
  CFSStorageType?: string;
  /** 云服务器ID。 */
  CVMId?: string;
  /** 弹性容器集群ID。 */
  EKSId?: string;
}

/** 资源配额。 */
declare interface ResourceQuota {
  /** CPU Limit设置。 */
  CPULimit?: string;
  /** 内存Limit设置（单位：Mi，Gi，Ti，M，G，T） */
  MemoryLimit?: string;
  /** Pods数量设置 */
  Pods?: string;
}

/** 任务。 */
declare interface Run {
  /** 任务UUID。 */
  RunUuid?: string;
  /** 项目ID。 */
  ProjectId?: string;
  /** 应用ID。 */
  ApplicationId?: string;
  /** 任务批次ID。 */
  RunGroupId?: string;
  /** 环境ID。 */
  EnvironmentId?: string;
  /** 用户定义ID，单例运行为空。 */
  UserDefinedId?: string;
  /** 表格ID，单例运行为空。 */
  TableId?: string;
  /** 表格行UUID，单例运行为空。 */
  TableRowUuid?: string;
  /** 任务状态。 */
  Status?: string;
  /** 任务输入。 */
  Input?: string;
  /** 运行选项。 */
  Option?: RunOption;
  /** 执行时间。 */
  ExecutionTime?: ExecutionTime;
  /** 缓存信息。 */
  Cache?: CacheInfo;
  /** 错误信息。 */
  ErrorMessage?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 任务。 */
declare interface RunGroup {
  /** 任务批次ID。 */
  RunGroupId?: string;
  /** 项目ID。 */
  ProjectId?: string;
  /** 项目名称。 */
  ProjectName?: string;
  /** 应用ID。 */
  ApplicationId?: string;
  /** 应用名称。 */
  ApplicationName?: string;
  /** 应用类型。 */
  ApplicationType?: string;
  /** 应用版本。 */
  ApplicationVersion?: ApplicationVersion;
  /** 应用访问类型：- PRIVATE 私有应用- PUBLIC 公共应用 */
  AccessMode?: string;
  /** 环境ID。 */
  EnvironmentId?: string;
  /** 环境名称。 */
  EnvironmentName?: string;
  /** 表格ID，单例运行为空。 */
  TableId?: string;
  /** 任务名称。 */
  Name?: string;
  /** 任务描述。 */
  Description?: string;
  /** 任务状态。 */
  Status?: string;
  /** 任务批次类型 ：- WDL- NEXTFLOW */
  Type?: string;
  /** 工作目录。 */
  WorkDir?: string;
  /** 任务输入。 */
  Input?: string;
  /** 任务输入类型：- JSON: 导入JSON- MANUAL: 手动输入- COS: COS文件 */
  InputType?: string;
  /** 输入COS地址。 */
  InputCosUri?: string;
  /** 输入模版ID。 */
  InputTemplateId?: string;
  /** WDL运行选项。 */
  Option?: RunOption;
  /** Nextflow运行选项。 */
  NFOption?: NFOption;
  /** 使用的缓存卷。 */
  Volumes?: VolumeInfo[];
  /** 任务总数量。 */
  TotalRun?: number;
  /** 各状态任务的数量。 */
  RunStatusCounts?: RunStatusCount[];
  /** 执行时间。 */
  ExecutionTime?: ExecutionTime;
  /** 错误信息。 */
  ErrorMessage?: string;
  /** 运行结果通知方式。 */
  ResultNotify?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
  /** 创建者。 */
  Creator?: string;
  /** 创建者ID。 */
  CreatorId?: string;
}

/** 任务作业详情。 */
declare interface RunMetadata {
  /** 任务类型。 */
  RunType?: string;
  /** 任务ID。 */
  RunId?: string;
  /** 父层ID。 */
  ParentId?: string;
  /** 作业ID。 */
  JobId?: string;
  /** 作业名称。 */
  CallName?: string;
  /** Scatter索引。 */
  ScatterIndex?: string;
  /** 输入。 */
  Input?: string;
  /** 输出。 */
  Output?: string;
  /** 状态 */
  Status?: string;
  /** 错误信息。 */
  ErrorMessage?: string;
  /** 开始时间 */
  StartTime?: string;
  /** 提交时间。 */
  SubmitTime?: string;
  /** 结束时间。 */
  EndTime?: string;
  /** 命令行。 */
  Command?: string;
  /** 运行时。 */
  Runtime?: string;
  /** 预处理。 */
  Preprocess?: boolean;
  /** 后处理。 */
  PostProcess?: boolean;
  /** Cache命中 */
  CallCached?: boolean;
  /** 工作目录。 */
  WorkDir?: string;
  /** 标准输出。 */
  Stdout?: string;
  /** 错误输出。 */
  Stderr?: string;
  /** 其他信息。 */
  Meta?: string;
}

/** 运行应用选项。 */
declare interface RunOption {
  /** 运行失败模式，取值范围：- ContinueWhilePossible- NoNewCalls */
  FailureMode: string;
  /** 是否使用Call-Caching功能。 */
  UseCallCache: boolean;
  /** 是否使用错误挂起功能。 */
  UseErrorOnHold: boolean;
  /** 输出归档COS路径。 */
  FinalWorkflowOutputsDir?: string;
  /** 是否使用相对目录归档输出。 */
  UseRelativeOutputPaths?: boolean;
  /** 是否添加运行信息到输出目录中 */
  AddRunInfoToOutputDir?: boolean;
}

/** 任务运行状态。 */
declare interface RunStatusCount {
  /** 状态。 */
  Status?: string;
  /** 数量。 */
  Count?: number;
}

/** 安全组配置。 */
declare interface SecurityGroupOption {
  /** 安全组ID。 */
  SecurityGroupId: string;
}

/** 文件存储配置。 */
declare interface StorageOption {
  /** 文件存储类型，取值范围：- SD：通用标准型- HP：通用性能型- TB：turbo标准型- TP：turbo性能型 */
  StorageType: string | null;
  /** 文件存储可用区。 */
  Zone: string | null;
  /** 文件系统容量，turbo系列必填，单位为GiB。 - turbo标准型起售40TiB，即40960GiB；扩容步长20TiB，即20480 GiB。- turbo性能型起售20TiB，即20480 GiB；扩容步长10TiB，即10240 GiB。 */
  Capacity?: number | null;
}

/** 表格。 */
declare interface Table {
  /** 表格ID */
  TableId?: string;
  /** 关联项目ID */
  ProjectId?: string;
  /** 表格名称 */
  Name?: string;
  /** 表格描述 */
  Description?: string;
  /** 表格列 */
  Columns?: TableColumn[];
  /** 创建时间 */
  CreateTime?: string;
  /** 创建人 */
  Creator?: string;
  /** 创建人ID */
  CreatorId?: string;
}

/** 表格列。 */
declare interface TableColumn {
  /** 列名称 */
  Header?: string;
  /** 列数据类型 */
  DataType?: string;
}

/** 表格行。 */
declare interface TableRow {
  /** 表格行UUID。 */
  TableRowUuid?: string;
  /** 表格行内容。 */
  Content?: string[];
}

/** 私有网络配置。 */
declare interface VPCOption {
  /** 私有网络ID（VPCId和VPCCIDRBlock必选其一。若使用VPCId，则使用现用私有网络；若使用VPCCIDRBlock，则创建新的私有网络） */
  VPCId?: string;
  /** 子网ID（SubnetId和SubnetZone&SubnetCIDRBlock必选其一。若使用SubnetId，则使用现用子网；若使用SubnetZone&SubnetCIDRBlock，则创建新的子网） */
  SubnetId?: string;
  /** 子网可用区。 */
  SubnetZone?: string;
  /** 私有网络CIDR。 */
  VPCCIDRBlock?: string;
  /** 子网CIDR。 */
  SubnetCIDRBlock?: string;
}

/** 缓存卷。 */
declare interface Volume {
  /** 缓存卷ID。 */
  VolumeId?: string;
  /** 名称。 */
  Name?: string;
  /** 描述。 */
  Description?: string;
  /** 环境ID。 */
  EnvironmentId?: string;
  /** 缓存卷类型，取值范围：* SHARED：多点挂载共享存储 */
  Type?: string;
  /** 缓存卷规格，取值范围：- SD：通用标准型- HP：通用性能型- TB：turbo标准型- TP：turbo性能型 */
  Spec?: string;
  /** 缓存卷大小（GB）。 */
  Capacity?: number;
  /** 缓存卷使用量（Byte）。 */
  Usage?: number;
  /** 缓存卷吞吐上限（MiB/s）。 */
  BandwidthLimit?: number;
  /** 默认挂载路径。 */
  DefaultMountPath?: string;
  /** 是否为默认缓存卷。 */
  IsDefault?: boolean;
  /** 状态。 */
  Status?: string;
}

/** 缓存卷信息。 */
declare interface VolumeInfo {
  /** 缓存卷ID。 */
  VolumeId?: string;
  /** 名称。 */
  Name?: string;
  /** 挂载路径。 */
  MountPath?: string;
}

declare interface CreateEnvironmentRequest {
  /** 环境名称。 */
  Name: string;
  /** 环境配置信息。 */
  Config: EnvironmentConfig;
  /** 环境描述。 */
  Description?: string;
  /** 是否为默认环境。 */
  IsDefault?: boolean;
}

declare interface CreateEnvironmentResponse {
  /** 环境ID。 */
  EnvironmentId?: string;
  /** 工作流UUID。 */
  WorkflowUuid?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVolumeRequest {
  /** 环境ID。 */
  EnvironmentId: string;
  /** 名称。 */
  Name: string;
  /** 缓存卷类型，取值范围：* SHARED：多点挂载共享存储 */
  Type: string;
  /** 缓存卷规格，取值范围：- SD：通用标准型- HP：通用性能型- TB：turbo标准型- TP：turbo性能型 */
  Spec: string;
  /** 描述。 */
  Description?: string;
  /** 缓存卷大小（GB），Turbo系列需要指定。 */
  Capacity?: number;
}

declare interface CreateVolumeResponse {
  /** 缓存卷ID。 */
  VolumeId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEnvironmentRequest {
  /** 环境ID。 */
  EnvironmentId: string;
}

declare interface DeleteEnvironmentResponse {
  /** 工作流UUID。 */
  WorkflowUuid?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVolumeDataRequest {
  /** 缓存卷ID。 */
  VolumeId: string;
  /** 需要删除的路径。 */
  Path: string;
}

declare interface DeleteVolumeDataResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVolumeRequest {
  /** 缓存卷ID。 */
  VolumeId: string;
}

declare interface DeleteVolumeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnvironmentsRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 过滤器，支持过滤字段：- EnvironmentId：环境ID- Name：名称- Status：环境状态 */
  Filters?: Filter[];
}

declare interface DescribeEnvironmentsResponse {
  /** 符合条件的数量。 */
  TotalCount?: number;
  /** 环境详情列表。 */
  Environments?: Environment[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRunGroupsRequest {
  /** 项目ID。（不填使用指定地域下的默认项目） */
  ProjectId?: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤器，支持过滤字段：- Name：任务批次名称- RunGroupId：任务批次ID- Status：任务批次状态- ApplicationId：应用ID- Type：类型（支持WDL，NEXTFLOW） */
  Filters?: Filter[];
}

declare interface DescribeRunGroupsResponse {
  /** 符合条件的数量。 */
  TotalCount?: number;
  /** 任务批次列表。 */
  RunGroups?: RunGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRunsRequest {
  /** 项目ID。（不填使用指定地域下的默认项目） */
  ProjectId?: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤器，支持过滤字段：- RunGroupId：任务批次ID- Status：任务状态- RunUuid：任务UUID- ApplicationId：应用ID- UserDefinedId：用户定义ID（批量运行表格第一列） */
  Filters?: Filter[];
}

declare interface DescribeRunsResponse {
  /** 符合条件的数量。 */
  TotalCount?: number;
  /** 任务列表。 */
  Runs?: Run[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTablesRequest {
  /** 项目ID。 */
  ProjectId: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤器，支持过滤字段：- Name：表格名称- TableId：表格ID */
  Filters?: Filter[];
}

declare interface DescribeTablesResponse {
  /** 结果总数。 */
  TotalCount?: number;
  /** 表格列表。 */
  Tables?: Table[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTablesRowsRequest {
  /** 项目ID。 */
  ProjectId: string;
  /** 表格ID。 */
  TableId: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤器，支持过滤字段：- Tr：表格数据，支持模糊查询- TableRowUuid：表格行UUID */
  Filters?: Filter[];
}

declare interface DescribeTablesRowsResponse {
  /** 结果总数。 */
  TotalCount?: number;
  /** 表格行列表。 */
  Rows?: TableRow[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVolumesRequest {
  /** 环境ID。 */
  EnvironmentId: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤器，支持过滤字段：- Name：名称- IsDefault：是否为默认 */
  Filters?: Filter[];
}

declare interface DescribeVolumesResponse {
  /** 缓存卷。 */
  Volumes?: Volume[];
  /** 符合条件的数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRunCallsRequest {
  /** 任务Uuid。 */
  RunUuid: string;
  /** 作业路径 */
  Path: string;
  /** 项目ID。（不填使用指定地域下的默认项目） */
  ProjectId?: string;
}

declare interface GetRunCallsResponse {
  /** 作业详情。 */
  Calls?: RunMetadata[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRunMetadataFileRequest {
  /** 任务Uuid。 */
  RunUuid: string;
  /** 项目ID。（不填使用指定地域下的默认项目） */
  ProjectId?: string;
  /** 需要获取的文件名。默认支持以下文件：- nextflow.log提交时NFOption中report指定为true时，额外支持以下文件：- execution_report.html- execution_timeline.html- execution_trace.txt- pipeline_dag.html */
  Key?: string;
  /** 需要批量获取的文件名。默认支持以下文件：- nextflow.log提交时NFOption中report指定为true时，额外支持以下文件：- execution_report.html- execution_timeline.html- execution_trace.txt- pipeline_dag.html */
  Keys?: string[];
}

declare interface GetRunMetadataFileResponse {
  /** 文件预签名链接，一分钟内有效。 */
  CosSignedUrl?: string;
  /** 批量文件预签名链接，一分钟内有效。 */
  CosSignedUrls?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRunStatusRequest {
  /** 任务Uuid。 */
  RunUuid: string;
  /** 项目ID。（不填使用指定地域下的默认项目） */
  ProjectId?: string;
}

declare interface GetRunStatusResponse {
  /** 作业详情。 */
  Metadata?: RunMetadata;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportTableFileRequest {
  /** 表格关联的项目ID。 */
  ProjectId: string;
  /** 表格名称。最多支持200个字符。 */
  Name: string;
  /** 表格文件Cos对象路径。 */
  CosUri: string;
  /** 表格文件中每列的数据类型，支持的类型包括：Int、Float、String、File、Boolean、Array[Int]、Array[Float]、Array[String]、Array[File]、Array[Boolean] */
  DataType: string[];
  /** 表格描述。最多支持500个字符。 */
  Description?: string;
}

declare interface ImportTableFileResponse {
  /** 表格ID。 */
  TableId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVolumeRequest {
  /** 缓存卷ID。 */
  VolumeId: string;
  /** 名称。 */
  Name?: string;
  /** 描述。 */
  Description?: string;
}

declare interface ModifyVolumeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryRunsRequest {
  /** 项目ID。（不填使用指定地域下的默认项目） */
  ProjectId?: string;
  /** 需要重试的任务批次ID。 */
  RunGroupId?: string;
  /** 需要重试的任务UUID。 */
  RunUuids?: string[];
  /** WDL运行选项，不填使用被重试的任务批次运行选项。 */
  WDLOption?: RunOption;
  /** Nextflow运行选项，不填使用被重试的任务批次运行选项。 */
  NFOption?: NFOption;
}

declare interface RetryRunsResponse {
  /** 新的任务批次ID。 */
  RunGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunApplicationRequest {
  /** 应用ID。 */
  ApplicationId: string;
  /** 任务批次名称。 */
  Name: string;
  /** 投递环境ID。 */
  EnvironmentId: string;
  /** 项目ID。（不填使用指定地域下的默认项目） */
  ProjectId?: string;
  /** 任务批次描述。 */
  Description?: string;
  /** 任务输入COS地址。（InputBase64和InputCosUri必选其一） */
  InputCosUri?: string;
  /** 任务输入JSON。需要进行base64编码。（InputBase64和InputCosUri必选其一） */
  InputBase64?: string;
  /** 批量投递表格ID，不填表示单例投递。 */
  TableId?: string;
  /** 批量投递表格行UUID。不填表示表格全部行。 */
  TableRowUuids?: string[];
  /** 任务缓存清理时间（小时）。不填或0表示不清理。 */
  CacheClearDelay?: number;
  /** 应用版本ID。不填表示使用当前最新版本。 */
  ApplicationVersionId?: string;
  /** WDL运行选项。 */
  Option?: RunOption;
  /** Nextflow运行选项。 */
  NFOption?: NFOption;
  /** 工作目录，当前仅支持Nextflow。可填写指定缓存卷内的绝对路径或者COS路径，不填使用默认缓存卷内的默认路径。如果使用COS路径，NFOption中LaunchDir需填写指定缓存卷内的绝对路径作为启动路径。 */
  WorkDir?: string;
  /** 访问模式，不填默认私有。取值范围- PRIVATE：私有应用- PUBLIC：公共应用 */
  AccessMode?: string;
  /** 缓存卷ID，不填使用默认缓存卷，暂时仅支持Nextflow。 */
  VolumeIds?: string[];
}

declare interface RunApplicationResponse {
  /** 任务批次ID。 */
  RunGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunWorkflowRequest {
  /** 任务批次名称。 */
  Name: string;
  /** 投递环境ID。 */
  EnvironmentId: string;
  /** 工作流Git仓库信息。 */
  GitSource: GitInfo;
  /** 工作流类型。支持类型：- NEXTFLOW */
  Type: string;
  /** Nextflow选项。 */
  NFOption: NFOption;
  /** 项目ID。（不填使用指定地域下的默认项目） */
  ProjectId?: string;
  /** 任务批次描述。 */
  Description?: string;
  /** 任务输入JSON。需要进行base64编码。（InputBase64和InputCosUri必选其一） */
  InputBase64?: string;
  /** 任务输入COS地址。（InputBase64和InputCosUri必选其一） */
  InputCosUri?: string;
  /** 任务缓存清理时间（小时）。不填或0表示不清理。 */
  CacheClearDelay?: number;
  /** 工作目录，可填写指定缓存卷内的绝对路径，不填使用默认缓存卷内的默认路径，暂时仅支持Nextflow。 */
  WorkDir?: string;
  /** 缓存卷ID，不填使用默认缓存卷，暂时仅支持Nextflow。 */
  VolumeIds?: string[];
}

declare interface RunWorkflowResponse {
  /** 任务批次ID。 */
  RunGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateRunGroupRequest {
  /** 任务批次ID。 */
  RunGroupId: string;
  /** 项目ID。（不填使用指定地域下的默认项目） */
  ProjectId?: string;
}

declare interface TerminateRunGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Omics 腾讯健康组学平台} */
declare interface Omics {
  (): Versions;
  /** 创建环境 {@link CreateEnvironmentRequest} {@link CreateEnvironmentResponse} */
  CreateEnvironment(data: CreateEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEnvironmentResponse>;
  /** 创建缓存卷 {@link CreateVolumeRequest} {@link CreateVolumeResponse} */
  CreateVolume(data: CreateVolumeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVolumeResponse>;
  /** 删除环境 {@link DeleteEnvironmentRequest} {@link DeleteEnvironmentResponse} */
  DeleteEnvironment(data: DeleteEnvironmentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEnvironmentResponse>;
  /** 删除缓存卷 {@link DeleteVolumeRequest} {@link DeleteVolumeResponse} */
  DeleteVolume(data: DeleteVolumeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVolumeResponse>;
  /** 删除缓存卷数据 {@link DeleteVolumeDataRequest} {@link DeleteVolumeDataResponse} */
  DeleteVolumeData(data: DeleteVolumeDataRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVolumeDataResponse>;
  /** 查询环境列表 {@link DescribeEnvironmentsRequest} {@link DescribeEnvironmentsResponse} */
  DescribeEnvironments(data?: DescribeEnvironmentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnvironmentsResponse>;
  /** 查询任务批次列表 {@link DescribeRunGroupsRequest} {@link DescribeRunGroupsResponse} */
  DescribeRunGroups(data?: DescribeRunGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRunGroupsResponse>;
  /** 查询任务列表 {@link DescribeRunsRequest} {@link DescribeRunsResponse} */
  DescribeRuns(data?: DescribeRunsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRunsResponse>;
  /** 查询表格 {@link DescribeTablesRequest} {@link DescribeTablesResponse} */
  DescribeTables(data: DescribeTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablesResponse>;
  /** 查询表格行数据 {@link DescribeTablesRowsRequest} {@link DescribeTablesRowsResponse} */
  DescribeTablesRows(data: DescribeTablesRowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTablesRowsResponse>;
  /** 查询缓存卷列表 {@link DescribeVolumesRequest} {@link DescribeVolumesResponse} */
  DescribeVolumes(data: DescribeVolumesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVolumesResponse>;
  /** 查询作业详情 {@link GetRunCallsRequest} {@link GetRunCallsResponse} */
  GetRunCalls(data: GetRunCallsRequest, config?: AxiosRequestConfig): AxiosPromise<GetRunCallsResponse>;
  /** 获取任务详情文件 {@link GetRunMetadataFileRequest} {@link GetRunMetadataFileResponse} */
  GetRunMetadataFile(data: GetRunMetadataFileRequest, config?: AxiosRequestConfig): AxiosPromise<GetRunMetadataFileResponse>;
  /** 查询任务详情 {@link GetRunStatusRequest} {@link GetRunStatusResponse} */
  GetRunStatus(data: GetRunStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetRunStatusResponse>;
  /** 导入表格文件 {@link ImportTableFileRequest} {@link ImportTableFileResponse} */
  ImportTableFile(data: ImportTableFileRequest, config?: AxiosRequestConfig): AxiosPromise<ImportTableFileResponse>;
  /** 修改缓存卷 {@link ModifyVolumeRequest} {@link ModifyVolumeResponse} */
  ModifyVolume(data: ModifyVolumeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVolumeResponse>;
  /** 重试任务 {@link RetryRunsRequest} {@link RetryRunsResponse} */
  RetryRuns(data?: RetryRunsRequest, config?: AxiosRequestConfig): AxiosPromise<RetryRunsResponse>;
  /** 运行应用 {@link RunApplicationRequest} {@link RunApplicationResponse} */
  RunApplication(data: RunApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<RunApplicationResponse>;
  /** 运行工作流 {@link RunWorkflowRequest} {@link RunWorkflowResponse} */
  RunWorkflow(data: RunWorkflowRequest, config?: AxiosRequestConfig): AxiosPromise<RunWorkflowResponse>;
  /** 终止任务批次 {@link TerminateRunGroupRequest} {@link TerminateRunGroupResponse} */
  TerminateRunGroup(data: TerminateRunGroupRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateRunGroupResponse>;
}

export declare type Versions = ["2022-11-28"];

export default Omics;
