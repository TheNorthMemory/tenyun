/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 预付费类型相关配置 */
declare interface ChargePrepaidConfig {
  /** 预付费购买周期，单位：月 */
  Period: number;
  /** 预付费自动续费设置：NOTIFY_AND_MANUAL_RENEW：表示默认状态(用户未设置，即初始状态)， NOTIFY_AND_AUTO_RENEW：表示自动续费，DISABLE_NOTIFY_AND_MANUAL_RENEW：表示明确不自动续费(用户设置) */
  RenewFlag: string;
}

/** etcd信息 */
declare interface Etcd {
  /** 实例id */
  InstanceId?: string;
  /** 实例名 */
  Name?: string;
  /** 实例描述 */
  Description?: string | null;
  /** 实例所属vpcId */
  VpcId?: string;
  /** etcd版本 */
  Version?: string;
  /** 实例状态 */
  Status?: string;
  /** etcd成员信息 */
  Members?: EtcdMember[] | null;
  /** 对外访问地址 */
  Endpoint?: string | null;
  /** 删除保护，true 删除保护开启；false删除保护关闭 */
  DeletionProtection?: boolean | null;
}

/** etcd高级设置 */
declare interface EtcdAdvancedSettings {
  /** 安全相关设置 */
  SecuritySettings?: EtcdSecuritySettings;
  /** 自动压缩设置 */
  AutoCompactionSettings?: EtcdAutoCompactionSettings;
  /** 监控设置 */
  MonitorSettings?: EtcdMonitorSettings;
  /** 备份相关设置 */
  BackupSettings?: EtcdBackupSettings;
  /** 自定义域名 */
  CustomDomains?: string;
  /** 自定义ip */
  CustomIPs?: string;
}

/** etcd自动压缩设置 */
declare interface EtcdAutoCompactionSettings {
  /** 自动压缩模式 */
  AutoCompactionMode: string | null;
  /** 自动压缩保留时间/revison数 */
  AutoCompactionRetention: string | null;
}

/** etcd备份设置 */
declare interface EtcdBackupSettings {
  /** 备份间隔(s) */
  BackupInterval: number | null;
  /** 最大备份个数 */
  MaxBackupCount: number | null;
  /** 用户名 */
  User?: string | null;
  /** 密码 */
  Password?: string | null;
  /** COS桶名称 */
  CosBucketName?: string | null;
}

/** etcd访问凭证 */
declare interface EtcdCredential {
  /** CA证书 */
  CACert: string | null;
  /** 证书 */
  Cert: string | null;
  /** 私钥 */
  Key: string | null;
}

/** etcd集群成员信息 */
declare interface EtcdMember {
  /** 节点名字 */
  Name: string;
  /** 节点当前版本 */
  Version: string;
  /** 所属可用区 */
  Zone: string;
  /** 节点状态 */
  Status: string;
}

/** etcd监控设置 */
declare interface EtcdMonitorSettings {
  /** Prometheus创建参数 */
  PrometheusCreationParam?: PrometheusCreationParam;
  /** Prometheus Id */
  ExistedPrometheusInstanceId?: string;
}

/** etcd安全相关设置 */
declare interface EtcdSecuritySettings {
  /** 是否启用https */
  Https?: boolean | null;
  /** 启用客户端证书认证 */
  ClientCertAuth?: boolean | null;
}

/** etcd快照 */
declare interface EtcdSnapshot {
  /** 快照名称 */
  Name: string;
  /** 快照大小 */
  Size: number;
}

/** etcd快照策略 */
declare interface EtcdSnapshotPolicy {
  /** 快照策略名称 */
  Name: string;
  /** 备份参数 */
  BackupSettings: EtcdBackupSettings;
}

/** etcd task信息 */
declare interface EtcdTaskInfo {
  /** 任务ID */
  TaskID: string;
  /** 任务类型 */
  TaskType: string;
  /** 资源ID */
  ResourceID: string;
  /** 任务状态 */
  LifeState: string;
  /** 任务创建时间 */
  CreatedAt: string;
  /** 任务更新时间 */
  UpdatedAt: string;
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** 实例配置信息 */
declare interface InstanceConfig {
  /** 核数 */
  Cpu: number;
  /** 内存大小Gi */
  Mem: number;
  /** 集群规模 */
  Size: number;
}

/** Prometheus创建参数 */
declare interface PrometheusCreationParam {
  /** 子网ID */
  SubnetId: string;
  /** 保存时长，只支持天单位12d = 12天 */
  DataRetention: number;
  /** grafana用户名 */
  GrafanaUserName: string;
  /** grafana密码 */
  GrafanaPassword: string;
}

/** RPC方法信息 */
declare interface RPCMethod {
  /** 方法名称 */
  Name: string;
}

/** 地域属性信息 */
declare interface RegionInstance {
  /** 地域名称 */
  RegionName: string | null;
  /** 地域ID */
  RegionId: number | null;
  /** 地域状态 */
  Status: string | null;
  /** 地域特性开关(按照JSON的形式返回所有属性) */
  FeatureGates: string | null;
  /** 地域简称 */
  Alias: string | null;
  /** 地域白名单 */
  Remark: string | null;
}

/** 任务步骤信息 */
declare interface TaskStepInfo {
  /** 步骤名称 */
  Step: string;
  /** 生命周期pending : 步骤未开始running: 步骤执行中success: 步骤成功完成failed: 步骤失败 */
  LifeState: string;
  /** 步骤开始时间 */
  StartAt: string | null;
  /** 步骤结束时间 */
  EndAt: string | null;
  /** 若步骤生命周期为failed,则此字段显示错误信息 */
  FailedMsg: string | null;
}

/** 版本信息 */
declare interface VersionInstance {
  /** 版本名称 */
  Name: string | null;
  /** 版本信息 */
  Version: string | null;
  /** Remark信息 */
  Remark: string | null;
}

declare interface CreateEtcdInstanceRequest {
  /** etcd实例名称 */
  Name: string;
  /** etcd所属vpc */
  VpcId: string;
  /** etcd对外提供访问ip地址所在子网 */
  ServiceSubnetId: string;
  /** etcd部署子网 */
  SubnetIds: string[];
  /** etcd版本 */
  EtcdVersion: string;
  /** etcd节点个数，可选范围: 1, 3, 5, 7, 9 */
  Size: number;
  /** etcd集群描述信息 */
  Description?: string;
  /** 高级设置 */
  AdvancedSettings?: EtcdAdvancedSettings;
  /** 付费类型：PREPAID 预付费POSTPAID_BY_HOUR 后付费按小时付费 */
  ChargeType?: string;
  /** 预付费相关配置 */
  ChargePrepaid?: ChargePrepaidConfig;
  /** 存储大小GB */
  DiskSize?: number;
  /** 删除保护，true 删除保护开启；false删除保护关闭 */
  DeletionProtection?: boolean;
}

declare interface CreateEtcdInstanceResponse {
  /** 创建etcd实例的Id */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEtcdSnapshotPolicyRequest {
  /** etcd实例Id */
  InstanceId: string;
  /** 快照策略名 */
  SnapshotPolicyName: string;
  /** 备份参数设置 */
  BackupSettings?: EtcdBackupSettings;
}

declare interface CreateEtcdSnapshotPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEtcdSnapshotRequest {
  /** etcd实例id */
  InstanceId: string;
  /** etcd快照名称 */
  SnapshotName: string;
  /** 备份用户名 */
  User?: string;
  /** 备份密码 */
  Password?: string;
}

declare interface CreateEtcdSnapshotResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEtcdAvailableVersionsRequest {
}

declare interface DescribeEtcdAvailableVersionsResponse {
  /** 支持的版本列表 */
  Versions: VersionInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEtcdCreatingProgressRequest {
  /** 实例id */
  InstanceId: string;
}

declare interface DescribeEtcdCreatingProgressResponse {
  /** 创建进度 */
  Steps: TaskStepInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEtcdCredentialsRequest {
  /** etcd实例id */
  InstanceId: string;
}

declare interface DescribeEtcdCredentialsResponse {
  /** 访问凭证 */
  Credentials: EtcdCredential[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEtcdInstancesRequest {
  /** 按照一个或者多个实例ID查询。实例ID形如：etcd-xxxxxxxx。参数不支持同时指定InstanceIds和Filters */
  InstanceIds?: string[];
  /** 支持按照vpc-id和instance-id过滤。参数不支持同时指定InstanceIds和Filters */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，最大值为50 */
  Limit?: number;
}

declare interface DescribeEtcdInstancesResponse {
  /** etcd实例详细信息列表 */
  Etcds?: Etcd[] | null;
  /** 符合条件的实例数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEtcdQuotaRequest {
}

declare interface DescribeEtcdQuotaResponse {
  /** 当前配额限制 */
  QuotaLimit: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEtcdRegionsRequest {
}

declare interface DescribeEtcdRegionsResponse {
  /** 支持的地域列表 */
  Regions: RegionInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEtcdSnapshotPoliciesRequest {
  /** etcd实例Id */
  InstanceId: string;
}

declare interface DescribeEtcdSnapshotPoliciesResponse {
  /** 备份策略列表 */
  SnapshotPolicies: EtcdSnapshotPolicy[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEtcdSnapshotsRequest {
  /** etcd实例Id */
  InstanceId: string;
}

declare interface DescribeEtcdSnapshotsResponse {
  /** etcd快照列表 */
  Snapshots: EtcdSnapshot[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEtcdTasksRequest {
  /** 任务ID */
  TaskID?: string;
  /** taskType： 按照任务类型过滤，当前支持enable_internet，disable_internet, restore_remote_snapshotresourceId： 按照资源ID过滤lifeState： 按照任务状态过滤，当前支持process， done */
  Filters?: Filter[];
}

declare interface DescribeEtcdTasksResponse {
  /** 任务列表 */
  Tasks: EtcdTaskInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRPCMethodListRequest {
  /** etcd实例ID */
  InstanceId: string;
  /** etcd集群pod名称 */
  PodName: string;
  /** 偏移量 */
  Offset?: number;
  /** 最大长度 */
  Limit?: number;
}

declare interface DescribeRPCMethodListResponse {
  /** gRPC方法列表 */
  MethodList?: RPCMethod[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableEtcdInstanceDeletionProtectionRequest {
  /** etcd实例ID */
  InstanceId: string;
}

declare interface DisableEtcdInstanceDeletionProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableEtcdInstanceDeletionProtectionRequest {
  /** etcd实例ID */
  InstanceId: string;
}

declare interface EnableEtcdInstanceDeletionProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEtcdAttributeRequest {
  /** 实例id */
  InstanceId: string;
  /** 实例名 */
  Name?: string;
  /** 实例描述 */
  Description?: string;
  /** root账号密码 */
  Password?: string;
  /** 同步auth状态 */
  EnableAuth?: boolean;
  /** 删除集群关联的cos数据 */
  EnableDeleteCos?: boolean;
  /** 子网id，数组 */
  SubnetIds?: string[];
}

declare interface ModifyEtcdAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEtcdConfigurationRequest {
  /** 实例id */
  InstanceId: string;
  /** 自动压缩设置 */
  AutoCompactionSettings?: EtcdAutoCompactionSettings;
  /** 监控设置 */
  MonitorSettings?: EtcdMonitorSettings;
  /** 计费类型PREPAID：预付费POSTPAID_BY_HOUR：后付费 */
  ChargeType?: string;
  /** 实例配置信息 */
  InstanceConfig?: InstanceConfig;
  /** 预付费配置信息 */
  PrepaidConfig?: ChargePrepaidConfig;
}

declare interface ModifyEtcdConfigurationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyEtcdSnapshotPolicyRequest {
  /** etcd实例id */
  InstanceId: string;
  /** 快照策略名称 */
  SnapshotPolicyName: string;
  /** 备份参数设置 */
  BackupSettings: EtcdBackupSettings;
}

declare interface ModifyEtcdSnapshotPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResizeEtcdInstanceRequest {
  /** 实例id */
  InstanceId: string;
  /** etcd节点个数 */
  Size: number;
}

declare interface ResizeEtcdInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeEtcdInstanceRequest {
  /** 实例id */
  InstanceId: string;
  /** etcd版本 */
  EtcdVersion: string;
}

declare interface UpgradeEtcdInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cetcd 云原生xa0etcd} */
declare interface Cetcd {
  (): Versions;
  /** 创建etcd实例 {@link CreateEtcdInstanceRequest} {@link CreateEtcdInstanceResponse} */
  CreateEtcdInstance(data: CreateEtcdInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEtcdInstanceResponse>;
  /** 创建etcd快照 {@link CreateEtcdSnapshotRequest} {@link CreateEtcdSnapshotResponse} */
  CreateEtcdSnapshot(data: CreateEtcdSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEtcdSnapshotResponse>;
  /** 创建etcd快照策略 {@link CreateEtcdSnapshotPolicyRequest} {@link CreateEtcdSnapshotPolicyResponse} */
  CreateEtcdSnapshotPolicy(data: CreateEtcdSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEtcdSnapshotPolicyResponse>;
  /** 查看etcd可用版本 {@link DescribeEtcdAvailableVersionsRequest} {@link DescribeEtcdAvailableVersionsResponse} */
  DescribeEtcdAvailableVersions(data?: DescribeEtcdAvailableVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEtcdAvailableVersionsResponse>;
  /** 查看etcd集群创建进度 {@link DescribeEtcdCreatingProgressRequest} {@link DescribeEtcdCreatingProgressResponse} */
  DescribeEtcdCreatingProgress(data: DescribeEtcdCreatingProgressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEtcdCreatingProgressResponse>;
  /** 查询etcd访问凭证 {@link DescribeEtcdCredentialsRequest} {@link DescribeEtcdCredentialsResponse} */
  DescribeEtcdCredentials(data: DescribeEtcdCredentialsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEtcdCredentialsResponse>;
  /** 查询etcd实例列表 {@link DescribeEtcdInstancesRequest} {@link DescribeEtcdInstancesResponse} */
  DescribeEtcdInstances(data?: DescribeEtcdInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEtcdInstancesResponse>;
  /** 查看etcd集群配额 {@link DescribeEtcdQuotaRequest} {@link DescribeEtcdQuotaResponse} */
  DescribeEtcdQuota(data?: DescribeEtcdQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEtcdQuotaResponse>;
  /** 查看etcd支持地域 {@link DescribeEtcdRegionsRequest} {@link DescribeEtcdRegionsResponse} */
  DescribeEtcdRegions(data?: DescribeEtcdRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEtcdRegionsResponse>;
  /** 查看etcd快照策略 {@link DescribeEtcdSnapshotPoliciesRequest} {@link DescribeEtcdSnapshotPoliciesResponse} */
  DescribeEtcdSnapshotPolicies(data: DescribeEtcdSnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEtcdSnapshotPoliciesResponse>;
  /** 查看etcd快照列表 {@link DescribeEtcdSnapshotsRequest} {@link DescribeEtcdSnapshotsResponse} */
  DescribeEtcdSnapshots(data: DescribeEtcdSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEtcdSnapshotsResponse>;
  /** 查看etcd相关tasks {@link DescribeEtcdTasksRequest} {@link DescribeEtcdTasksResponse} */
  DescribeEtcdTasks(data?: DescribeEtcdTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEtcdTasksResponse>;
  /** 获取gRPC方法列表 {@link DescribeRPCMethodListRequest} {@link DescribeRPCMethodListResponse} */
  DescribeRPCMethodList(data: DescribeRPCMethodListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRPCMethodListResponse>;
  /** 关闭etcd实例删除保护 {@link DisableEtcdInstanceDeletionProtectionRequest} {@link DisableEtcdInstanceDeletionProtectionResponse} */
  DisableEtcdInstanceDeletionProtection(data: DisableEtcdInstanceDeletionProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<DisableEtcdInstanceDeletionProtectionResponse>;
  /** 启用etcd实例删除保护 {@link EnableEtcdInstanceDeletionProtectionRequest} {@link EnableEtcdInstanceDeletionProtectionResponse} */
  EnableEtcdInstanceDeletionProtection(data: EnableEtcdInstanceDeletionProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<EnableEtcdInstanceDeletionProtectionResponse>;
  /** 修改etcd实例属性 {@link ModifyEtcdAttributeRequest} {@link ModifyEtcdAttributeResponse} */
  ModifyEtcdAttribute(data: ModifyEtcdAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEtcdAttributeResponse>;
  /** 修改etcd实例配置 {@link ModifyEtcdConfigurationRequest} {@link ModifyEtcdConfigurationResponse} */
  ModifyEtcdConfiguration(data: ModifyEtcdConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEtcdConfigurationResponse>;
  /** 修改etcd快照策略 {@link ModifyEtcdSnapshotPolicyRequest} {@link ModifyEtcdSnapshotPolicyResponse} */
  ModifyEtcdSnapshotPolicy(data: ModifyEtcdSnapshotPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEtcdSnapshotPolicyResponse>;
  /** 扩容etcd实例 {@link ResizeEtcdInstanceRequest} {@link ResizeEtcdInstanceResponse} */
  ResizeEtcdInstance(data: ResizeEtcdInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeEtcdInstanceResponse>;
  /** 升级etcd实例 {@link UpgradeEtcdInstanceRequest} {@link UpgradeEtcdInstanceResponse} */
  UpgradeEtcdInstance(data: UpgradeEtcdInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeEtcdInstanceResponse>;
}

export declare type Versions = ["2022-03-25"];

export default Cetcd;
