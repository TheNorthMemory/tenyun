/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 付费信息详情 */
declare interface ChargeAttribute {
  /** 到期时间 */
  CurDeadline?: string;
  /** 付费方式 */
  PayMode?: string;
  /** 自动付费标识：0:默认未设置 1:自动续费 2 不自动续费 */
  AutoRenewFlag?: number;
  /** 资源ID */
  ResourceId?: string;
}

/** 客户侧集群管理节点信息 */
declare interface ClientClusterManagerNodeInfo {
  /** 客户端节点IP */
  NodeIp?: string;
  /** 节点Instance Id */
  NodeInstanceId?: string;
  /** 初始密码 */
  InitialPassword?: string;
}

/** 客户端节点属性 */
declare interface ClientNodeAttribute {
  /** 客户端节点IP */
  ClientNodeIp?: string;
  /** 客户端节点服务状态, Active(运行中), Adding(添加中), Destroying(销毁中), Down(已停止) */
  Status?: string;
  /** 客户端节点类型，extend(扩展节点)，manager(管理节点) */
  ClientType?: string;
  /** 节点所属vpcid */
  VpcId?: string;
  /** 节点所属子网id */
  SubnetId?: string;
  /** cvmId */
  InstanceId?: string;
  /** 自定义挂载点 */
  MountPoint?: string;
}

/** 查询Client Token */
declare interface ClientToken {
  /** 节点 IP */
  NodeIp?: string | null;
  /** 挂载点 */
  LocalDirectory?: string | null;
  /** 可以访问的 GooseFS 目录 */
  GooseFSDirectory?: string | null;
  /** token */
  Token?: string | null;
}

/** ClusterRole */
declare interface ClusterRole {
  /** 集群ID */
  ClusterId?: string;
  /** 角色名 */
  RoleName?: string;
  /** 描述 */
  Description?: string;
  /** 目录列表 */
  DirectoryList?: string[];
}

/** 文件系统属性 */
declare interface FSAttribute {
  /** 文件系统类型, 可填goosefs和goosefsx */
  Type?: string;
  /** 文件系统ID */
  FileSystemId?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** GooseFSx文件系统属性 */
  GooseFSxAttribute?: GooseFSxAttribute;
  /** 文件系统状态 ACTIVE(运行中), CREATING(创建中), DESTROYING(销毁中), FAIL(创建失败),EXPANDING(扩容中),PROBING(容灾中) */
  Status?: string;
  /** 文件系统名 */
  Name?: string;
  /** 文件系统备注描述 */
  Description?: string;
  /** vpc ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 子网所在的可用区 */
  Zone?: string;
  /** Tag数组 */
  Tag?: Tag[];
  /** 更新属性时间 */
  ModifyTime?: string;
  /** 文件系统付费信息 */
  ChargeAttribute?: ChargeAttribute;
}

/** Fileset信息 */
declare interface FilesetInfo {
  /** Fileset id */
  FsetId?: string;
  /** Fileset名称 */
  FsetName?: string;
  /** Fileset目录 */
  FsetDir?: string;
  /** Fileset容量配额限定值 */
  QuotaSizeLimit?: string;
  /** 已使用容量配额 */
  QuotaSizeUsed?: string;
  /** 容量配额使用占比 */
  QuotaSizeUsedPercent?: string;
  /** Fileset文件数配额限定值 */
  QuotaFilesLimit?: string;
  /** 已使用文件数配额 */
  QuotaFilesUsed?: string;
  /** 文件数配额使用占比 */
  QuotaFilesUsedPercent?: string;
  /** Fileset审计 */
  AuditState?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** Fileset状态：creating 配置中 active 已生效 modify 修改中 */
  Status?: string;
}

/** GooseFSx文件系统的属性 */
declare interface GooseFSxAttribute {
  /** GooseFSx的型号 */
  Model?: string;
  /** 容量单位是GB, 例如4608(4.5TB) */
  Capacity?: number;
  /** 要关联映射的bucket列表 */
  MappedBucketList?: MappedBucket[];
  /** 客户侧管理节点信息 */
  ClientManagerNodeList?: ClientClusterManagerNodeInfo[];
}

/** GooseFSx创建时候的属性 */
declare interface GooseFSxBuildElement {
  /** GooseFSx的型号 */
  Model: string;
  /** 容量单位是GB, 例如4608(4.5TB) */
  Capacity: number;
  /** 要关联映射的bucket列表 */
  MappedBucketList: MappedBucket[];
}

/** 添加删除客户端节点列表 */
declare interface LinuxNodeAttribute {
  /** cvmId */
  InstanceId?: string;
  /** 节点所属vpcid */
  VpcId?: string;
  /** 节点所属子网id */
  SubnetId?: string;
  /** linux客户端节点地址 */
  LinuxClientNodeIp?: string;
  /** 自定义挂载点 */
  MountPoint?: string;
}

/** 关联的对象Bucket, 并将其映射到文件系统某个路径上 */
declare interface MappedBucket {
  /** 对象存储Bucket名 */
  BucketName: string;
  /** 映射到的文件系统路径, 默认为/ */
  FileSystemPath: string;
  /** 数据流动的自动策略, 包含加载与沉降。策略可以是多种的组合按需加载(OnDemandImport)自动加载元数据(AutoImportMeta)自动加载数据(AutoImportData)周期加载(PeriodImport)周期沉降(PeriodExport)立即沉降(ImmediateExport) */
  DataRepositoryTaskAutoStrategy?: string[];
  /** 绑定bucket的数据流动策略ID */
  RuleId?: string;
  /** 规则备注与描述 */
  RuleDescription?: string;
  /** 桶关联状态 0：关联中 1：关联完成 */
  Status?: number;
  /** 是否使用全球加速域名 */
  AccelerateFlag?: boolean;
  /** 桶所在的园区 */
  BucketRegion?: string;
  /** 自定义Endpoint */
  Endpoint?: string;
}

/** 角色凭证 */
declare interface RoleToken {
  /** 角色名 */
  RoleName?: string;
  /** 用于goosefs client/sdk等 */
  Token?: string;
}

/** vpc子网信息 */
declare interface SubnetInfo {
  /** vpc id */
  VpcId: string;
  /** 子网ID */
  SubnetId?: string;
}

/** 文件系统关联的标签 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

declare interface AddCrossVpcSubnetSupportForClientNodeRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 子网信息 */
  SubnetInfo: SubnetInfo;
}

declare interface AddCrossVpcSubnetSupportForClientNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachFileSystemBucketRequest {
  /** 无 */
  FileSystemId: string;
  /** 关联新Bucket */
  Bucket: MappedBucket;
}

declare interface AttachFileSystemBucketResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchAddClientNodesRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 添加客户端节点列表 */
  ClientNodes: LinuxNodeAttribute[];
  /** 是否单集群默认是false */
  SingleClusterFlag?: boolean;
}

declare interface BatchAddClientNodesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeleteClientNodesRequest {
  /** 文件系统id */
  FileSystemId: string;
  /** 删除的客户端节点列表 */
  ClientNodes: LinuxNodeAttribute[];
  /** 是否单集群，默认是false */
  SingleClusterFlag?: boolean;
}

declare interface BatchDeleteClientNodesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDataRepositoryTaskRequest {
  /** 数据流通任务类型, FS_TO_COS(文件系统到COS Bucket),或者COS_TO_FS(COS Bucket到文件系统) */
  TaskType: string;
  /** COS存储桶名 */
  Bucket: string;
  /** 文件系统ID */
  FileSystemId: string;
  /** 对于FS_TO_COS, TaskPath是Bucket映射目录的相对路径, 对于COS_TO_FS是COS上的路径。如果置为空, 则表示全部数据 */
  TaskPath: string;
  /** 任务名称 */
  TaskName: string;
  /** 数据流通方式 MSP_AFM 手动加载 RAW_AFM 按需加载 */
  RepositoryType?: string;
  /** 文件列表下载地址，以http开头 */
  TextLocation?: string;
}

declare interface CreateDataRepositoryTaskResponse {
  /** 任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFileSystemRequest {
  /** 文件系统类型, 可填goosefs和goosefsx */
  Type: string;
  /** 文件系统名 */
  Name: string;
  /** 文件系统备注描述 */
  Description: string;
  /** vpc网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 子网所在的可用区 */
  Zone: string;
  /** 文件系统关联的tag */
  Tag?: Tag[];
  /** GooseFSx构建时要传递的参数 */
  GooseFSxBuildElements?: GooseFSxBuildElement;
  /** 客户端集群所属的安全组 */
  SecurityGroupId?: string;
  /** 集群ssh通信端口，默认是22 */
  ClusterPort?: number;
}

declare interface CreateFileSystemResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFilesetRequest {
  /** 文件系统id */
  FileSystemId: string;
  /** Fileset名称 */
  FsetName: string;
  /** Fileset目录 */
  FsetDir: string;
  /** Fileset容量配额（需带单位G） */
  QuotaSizeLimit?: string;
  /** Fileset文件数配额 */
  QuotaFilesLimit?: string;
  /** Fileset文件删除操作审计 */
  AuditState?: string;
}

declare interface CreateFilesetResponse {
  /** Fileset id */
  FsetId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCrossVpcSubnetSupportForClientNodeRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 子网信息 */
  SubnetInfo: SubnetInfo;
}

declare interface DeleteCrossVpcSubnetSupportForClientNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFileSystemRequest {
  /** 文件系统ID */
  FileSystemId: string;
}

declare interface DeleteFileSystemResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFilesetRequest {
  /** 文件系统id */
  FileSystemId: string;
  /** Fileset id */
  FsetId: string;
}

declare interface DeleteFilesetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClientNodesRequest {
  /** 文件系统Id */
  FileSystemId: string;
}

declare interface DescribeClientNodesResponse {
  /** 客户端节点数组 */
  ClientNodes: ClientNodeAttribute[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterClientTokenRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterClientTokenResponse {
  /** 客户端凭证 */
  ClientTokens?: ClientToken[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterRoleTokenRequest {
  /** 集群ID */
  ClusterId: string;
  /** 角色名 */
  RoleName: string;
}

declare interface DescribeClusterRoleTokenResponse {
  /** 角色凭证 */
  RoleTokens?: RoleToken[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterRolesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 角色名 */
  RoleName?: string;
}

declare interface DescribeClusterRolesResponse {
  /** 集群角色 */
  ClusterRoles?: ClusterRole[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDataRepositoryTaskStatusRequest {
  /** task id */
  TaskId: string;
  /** file system id */
  FileSystemId: string;
}

declare interface DescribeDataRepositoryTaskStatusResponse {
  /** 任务id */
  TaskId?: string;
  /** 任务状态 0(初始化中), 1(运行中), 2(已完成), 3(任务失败) */
  Status?: number;
  /** 已完成的文件数量 */
  FinishedFileNumber?: number;
  /** 已完成的数据量 */
  FinishedCapacity?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileSystemBucketsRequest {
  /** 文件系统ID */
  FileSystemId: string;
}

declare interface DescribeFileSystemBucketsResponse {
  /** bucket列表 */
  BucketList?: MappedBucket[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileSystemsRequest {
  /** 偏移量 */
  Offset: number;
  /** 每页的数量 */
  Limit: number;
}

declare interface DescribeFileSystemsResponse {
  /** 文件系统列表 */
  FSAttributeList?: FSAttribute[];
  /** 总共的文件系统数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFilesetGeneralConfigRequest {
  /** 文件系统id */
  FileSystemId: string;
}

declare interface DescribeFilesetGeneralConfigResponse {
  /** 配额对root用户生效 */
  EnforceQuotaOnRoot?: string;
  /** 配置状态 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFilesetsRequest {
  /** 文件系统id */
  FileSystemId: string;
  /** FsetId列表 */
  FilesetIds?: string[];
  /** FsetDir列表 */
  FilesetDirs?: string[];
}

declare interface DescribeFilesetsResponse {
  /** Fileset列表 */
  FilesetList?: FilesetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachFileSystemBucketRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 要解绑的Bucket名 */
  BucketName: string;
}

declare interface DetachFileSystemBucketResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExpandCapacityRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 新增扩容的系统容量 */
  ExpandedCapacity: number;
  /** 容量修改类型：add/sub */
  ModifyType?: string;
}

declare interface ExpandCapacityResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDataRepositoryBandwidthRequest {
  /** 文件系统ID */
  FileSystemId: string;
  /** 带宽, 单位MB/S */
  Bandwidth: number;
}

declare interface ModifyDataRepositoryBandwidthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryCrossVpcSubnetSupportForClientNodeRequest {
  /** 文件系统ID */
  FileSystemId: string;
}

declare interface QueryCrossVpcSubnetSupportForClientNodeResponse {
  /** 支持的子网信息集合 */
  SubnetInfoCollection?: SubnetInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryDataRepositoryBandwidthRequest {
  /** 文件系统ID */
  FileSystemId: string;
}

declare interface QueryDataRepositoryBandwidthResponse {
  /** 数据流动带宽, 单位MB/s */
  Bandwidth?: number;
  /** 带宽状态。1:待扩容;2:运行中;3:扩容中 */
  BandwidthStatus?: number;
  /** 能设置的最小带宽, 单位MB/s */
  MinBandwidth?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateFilesetGeneralConfigRequest {
  /** 文件系统id */
  FileSystemId: string;
  /** 配额对root用户生效 */
  EnforceQuotaOnRoot?: string;
}

declare interface UpdateFilesetGeneralConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateFilesetRequest {
  /** 文件系统id */
  FileSystemId: string;
  /** Fileset id */
  FsetId: string;
  /** 容量配额限定值 */
  QuotaSizeLimit?: string;
  /** 文件数配额限定值 */
  QuotaFilesLimit?: string;
  /** Fileset文件删除操作审计 */
  AuditState?: string;
}

declare interface UpdateFilesetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Goosefs 数据加速器 GooseFS} */
declare interface Goosefs {
  (): Versions;
  /** 为客户端节点添加跨vpc或子网访问能力 {@link AddCrossVpcSubnetSupportForClientNodeRequest} {@link AddCrossVpcSubnetSupportForClientNodeResponse} */
  AddCrossVpcSubnetSupportForClientNode(data: AddCrossVpcSubnetSupportForClientNodeRequest, config?: AxiosRequestConfig): AxiosPromise<AddCrossVpcSubnetSupportForClientNodeResponse>;
  /** 为文件系统关联Bucket {@link AttachFileSystemBucketRequest} {@link AttachFileSystemBucketResponse} */
  AttachFileSystemBucket(data: AttachFileSystemBucketRequest, config?: AxiosRequestConfig): AxiosPromise<AttachFileSystemBucketResponse>;
  /** 批量添加客户端节点 {@link BatchAddClientNodesRequest} {@link BatchAddClientNodesResponse} */
  BatchAddClientNodes(data: BatchAddClientNodesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchAddClientNodesResponse>;
  /** 批量删除客户端节点 {@link BatchDeleteClientNodesRequest} {@link BatchDeleteClientNodesResponse} */
  BatchDeleteClientNodes(data: BatchDeleteClientNodesRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeleteClientNodesResponse>;
  /** 创建数据流动任务 {@link CreateDataRepositoryTaskRequest} {@link CreateDataRepositoryTaskResponse} */
  CreateDataRepositoryTask(data: CreateDataRepositoryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataRepositoryTaskResponse>;
  /** 创建文件系统 {@link CreateFileSystemRequest} {@link CreateFileSystemResponse} */
  CreateFileSystem(data: CreateFileSystemRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileSystemResponse>;
  /** 创建Fileset {@link CreateFilesetRequest} {@link CreateFilesetResponse} */
  CreateFileset(data: CreateFilesetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFilesetResponse>;
  /** 为客户端节点删除跨vpc子网访问能力 {@link DeleteCrossVpcSubnetSupportForClientNodeRequest} {@link DeleteCrossVpcSubnetSupportForClientNodeResponse} */
  DeleteCrossVpcSubnetSupportForClientNode(data: DeleteCrossVpcSubnetSupportForClientNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCrossVpcSubnetSupportForClientNodeResponse>;
  /** 删除文件系统 {@link DeleteFileSystemRequest} {@link DeleteFileSystemResponse} */
  DeleteFileSystem(data: DeleteFileSystemRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFileSystemResponse>;
  /** 删除Fileset {@link DeleteFilesetRequest} {@link DeleteFilesetResponse} */
  DeleteFileset(data: DeleteFilesetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFilesetResponse>;
  /** 列出集群中所有的客户端节点 {@link DescribeClientNodesRequest} {@link DescribeClientNodesResponse} */
  DescribeClientNodes(data: DescribeClientNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClientNodesResponse>;
  /** 查询GooseFS集群客户端凭证 {@link DescribeClusterClientTokenRequest} {@link DescribeClusterClientTokenResponse} */
  DescribeClusterClientToken(data: DescribeClusterClientTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterClientTokenResponse>;
  /** 查询GooseFS集群角色凭证 {@link DescribeClusterRoleTokenRequest} {@link DescribeClusterRoleTokenResponse} */
  DescribeClusterRoleToken(data: DescribeClusterRoleTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterRoleTokenResponse>;
  /** 查询GooseFS集群角色 {@link DescribeClusterRolesRequest} {@link DescribeClusterRolesResponse} */
  DescribeClusterRoles(data: DescribeClusterRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterRolesResponse>;
  /** 获取数据流动任务实时状态 {@link DescribeDataRepositoryTaskStatusRequest} {@link DescribeDataRepositoryTaskStatusResponse} */
  DescribeDataRepositoryTaskStatus(data: DescribeDataRepositoryTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataRepositoryTaskStatusResponse>;
  /** 罗列文件系统关联的Bucket映射 {@link DescribeFileSystemBucketsRequest} {@link DescribeFileSystemBucketsResponse} */
  DescribeFileSystemBuckets(data: DescribeFileSystemBucketsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileSystemBucketsResponse>;
  /** 列出文件系统 {@link DescribeFileSystemsRequest} {@link DescribeFileSystemsResponse} */
  DescribeFileSystems(data: DescribeFileSystemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileSystemsResponse>;
  /** 查询Fileset通用配置 {@link DescribeFilesetGeneralConfigRequest} {@link DescribeFilesetGeneralConfigResponse} */
  DescribeFilesetGeneralConfig(data: DescribeFilesetGeneralConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFilesetGeneralConfigResponse>;
  /** 查询Fileset列表 {@link DescribeFilesetsRequest} {@link DescribeFilesetsResponse} */
  DescribeFilesets(data: DescribeFilesetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFilesetsResponse>;
  /** 解绑文件系统与Bucket的映射 {@link DetachFileSystemBucketRequest} {@link DetachFileSystemBucketResponse} */
  DetachFileSystemBucket(data: DetachFileSystemBucketRequest, config?: AxiosRequestConfig): AxiosPromise<DetachFileSystemBucketResponse>;
  /** 扩展文件系统容量 {@link ExpandCapacityRequest} {@link ExpandCapacityResponse} */
  ExpandCapacity(data: ExpandCapacityRequest, config?: AxiosRequestConfig): AxiosPromise<ExpandCapacityResponse>;
  /** 修改数据流动带宽 {@link ModifyDataRepositoryBandwidthRequest} {@link ModifyDataRepositoryBandwidthResponse} */
  ModifyDataRepositoryBandwidth(data: ModifyDataRepositoryBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDataRepositoryBandwidthResponse>;
  /** 查询客户端节点跨vpc子网访问能力 {@link QueryCrossVpcSubnetSupportForClientNodeRequest} {@link QueryCrossVpcSubnetSupportForClientNodeResponse} */
  QueryCrossVpcSubnetSupportForClientNode(data: QueryCrossVpcSubnetSupportForClientNodeRequest, config?: AxiosRequestConfig): AxiosPromise<QueryCrossVpcSubnetSupportForClientNodeResponse>;
  /** 查询数据流动带宽 {@link QueryDataRepositoryBandwidthRequest} {@link QueryDataRepositoryBandwidthResponse} */
  QueryDataRepositoryBandwidth(data: QueryDataRepositoryBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<QueryDataRepositoryBandwidthResponse>;
  /** 修改Fileset {@link UpdateFilesetRequest} {@link UpdateFilesetResponse} */
  UpdateFileset(data: UpdateFilesetRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFilesetResponse>;
  /** 修改Fileset通用配置 {@link UpdateFilesetGeneralConfigRequest} {@link UpdateFilesetGeneralConfigResponse} */
  UpdateFilesetGeneralConfig(data: UpdateFilesetGeneralConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFilesetGeneralConfigResponse>;
}

export declare type Versions = ["2022-05-19"];

export default Goosefs;
