/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 数据库账户信息 */
declare interface Account {
  /** 数据库账号名 */
  AccountName: string;
  /** 集群ID */
  ClusterId: string;
  /** 数据库账号描述 */
  AccountDescription: string;
  /** 数据库账号创建时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  CreateTime: string;
  /** 数据库账号信息更新时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  UpdateTime: string;
}

/** 可以回档时间范围 */
declare interface AvailableRecoveryTimeRange {
  /** 可回档起始时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  AvailableBeginTime: string;
  /** 可回档结束时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  AvailableEndTime: string;
}

/** 集群备份集信息 */
declare interface Backup {
  /** 备份集ID，集群内唯一 */
  BackupId: number;
  /** 备份集类型，目前只支持 SNAPSHOT：快照 */
  BackupType: string;
  /** 备份集产生的方案，目前只支持 AUTO：自动 */
  BackupMethod: string;
  /** 备份集对应的数据时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  BackupDataTime: string;
  /** 备份集数据大小，单位GiB */
  BackupDataSize: number;
  /** 备份集对应的任务开始时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  BackupTaskStartTime: string;
  /** 备份集对应的任务结束时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  BackupTaskEndTime: string;
  /** 备份集对应的任务状态 SUCCESS：成功 */
  BackupTaskStatus: string;
}

/** 集群信息 */
declare interface Cluster {
  /** 集群ID，集群的唯一标识 */
  ClusterId: string;
  /** 集群名字，不修改时默认和集群ID相同 */
  ClusterName: string;
  /** 地域 */
  Region: string;
  /** 可用区 */
  Zone: string;
  /** TDSQL-C PostgreSQL 合入的社区版本号 */
  DBVersion: string;
  /** 项目ID */
  ProjectId: number;
  /** 集群状态。目前包括 - creating ：创建中 - running : 运行中 - isolating : 隔离中 - isolated : 已隔离 - recovering : 恢复中 - deleting : 删除中 - deleted : 已删除 */
  Status: string;
  /** 集群状态中文含义 */
  StatusDesc: string;
  /** 集群创建时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  CreateTime: string;
  /** 存储当前使用量，单位GiB */
  StorageUsed: number;
  /** 存储最大使用量，单位GiB */
  StorageLimit: number;
  /** 付费模式： - PREPAID : 预付费，即包年包月 - POSTPAID_BY_HOUR : 按小时结算后付费 */
  PayMode: string;
  /** 预付费集群到期时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  PayPeriodEndTime: string;
  /** 预付费集群自动续费标签 - 0 : 到期不自动续费 - 1 : 到期自动续费 */
  AutoRenewFlag: number;
  /** 数据库字符集 */
  DBCharset: string;
  /** 集群内实例的数量 */
  InstanceCount: number;
  /** 集群内访问点信息 */
  EndpointSet: Endpoint[];
  /** TDSQL-C PostgreSQL 合入的社区主要版本号 */
  DBMajorVersion: string;
  /** TDSQL-C PostgreSQL 内核版本号 */
  DBKernelVersion: string;
  /** 存储付费模式 - PREPAID：预付费，即包年包月 - POSTPAID_BY_HOUR：按小时后付费 */
  StoragePayMode: string | null;
}

/** 集群的连接点信息，包含访问数据库的相关网络信息 */
declare interface Endpoint {
  /** 连接点ID，集群内唯一 */
  EndpointId: string;
  /** 连接点所属的集群ID */
  ClusterId: string;
  /** 连接点名字，默认和连接点ID一致 */
  EndpointName: string;
  /** 连接点类型 - RW : 读写 - RO : 只读 */
  EndpointType: string;
  /** 私有网络VPC实例ID */
  VpcId: string;
  /** 私有网络VPC下子网实例ID */
  SubnetId: string;
  /** 私有网络VPC下用于访问数据库的IP */
  PrivateIp: string;
  /** 私有网络VPC下用于访问数据库的端口 */
  PrivatePort: number;
  /** 公共网络用户访问数据库的IP */
  WanIp: string;
  /** 公共网络用户访问数据库的端口 */
  WanPort: number;
  /** 公共网络用户访问数据库的域名 */
  WanDomain: string;
}

/** 过滤条件 */
declare interface Filter {
  /** 过滤条件名 */
  Name: string;
  /** 过滤条件值数组 */
  Values: string[];
  /** true:精确匹配(默认值) false:(模糊匹配) */
  ExactMatch: boolean;
}

/** 集群下的实例信息 */
declare interface Instance {
  /** 实例ID，集群下唯一 */
  InstanceId: string;
  /** 实例名字，默认和实例ID一致 */
  InstanceName: string;
  /** 集群ID */
  ClusterId: string;
  /** 实例所在的访问点ID */
  EndpointId: string;
  /** 地域 */
  Region: string;
  /** 可用区 */
  Zone: string;
  /** 数据库版本 */
  DBVersion: string;
  /** 实例状态 */
  Status: string;
  /** 实例状态中文含义 */
  StatusDesc: string;
  /** 实例创建时间。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  CreateTime: string;
  /** 付费模式：- PREPAID : 预付费- POSTPAID_BY_HOUR : 按小时结算后付费同一集群下付费模式需要保持一致。 */
  PayMode: string;
  /** 实例到期时间。同一集群下到期时间需要保持一致。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  PayPeriodEndTime: string;
  /** CPU核数 */
  CPU: number;
  /** 内存大小，单位GiB */
  Memory: number;
  /** 实例类型 - RW：读写实例 - RO：只读实例 */
  InstanceType: string;
  /** TDSQL-C PostgreSQL 合入的社区主要版本号 */
  DBMajorVersion: string;
  /** TDSQL-C PostgreSQL 内核版本号 */
  DBKernelVersion: string;
}

/** 资源ID信息，包括ClusterID和InstanceID */
declare interface ResourceIdInfo {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID列表 */
  InstanceIdSet: string[];
}

declare interface CloneClusterToPointInTimeRequest {
  /** 可用区 */
  Zone: string;
  /** 数据库版本，目前仅支持 10.17 */
  DBVersion: string;
  /** CPU核数。取值参考文档【购买指南】 */
  CPU: number;
  /** 内存大小，单位GiB。取值参考文档【购买指南】 */
  Memory: number;
  /** 私有网络ID */
  VpcId: string;
  /** 已配置的私有网络中的子网ID */
  SubnetId: string;
  /** 集群付费模式- PREPAID：预付费，即包年包月- POSTPAID_BY_HOUR：按小时后付费 */
  PayMode: string;
  /** 对应的备份数据来源集群ID */
  SourceClusterId: string;
  /** 对应的备份数据时间点。按照RFC3339标准表示，并且使用东八区时区时间。格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  SourceDataPoint: string;
  /** 集群名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."。不输入此参数时默认与ClusterId保持一致。 */
  ClusterName?: string;
  /** 项目Id，默认为0表示默认项目 */
  ProjectId?: number;
  /** 连接数据库时，Endpoint使用的端口。取值范围为[1,65534]，默认值为5432 */
  Port?: number;
  /** 集群下实例数量。取值范围为[1,4]，默认值为1 */
  InstanceCount?: number;
  /** 购买时长，单位：月。取值范围为[1,60]，默认值为1。只有当PayMode为PREPAID时生效。 */
  Period?: number;
  /** 是否自动续费，0-不 1-是。默认为0，只有当PayMode为PREPAID时生效。 */
  AutoRenewFlag?: number;
  /** 存储付费模式 - PREPAID：预付费，即包年包月 - POSTPAID_BY_HOUR：按小时后付费默认为POSTPAID_BY_HOUR，实例付费模式为按小时付费时，存储付费模式不支持包年包月 */
  StoragePayMode?: string;
  /** 存储最大使用量，单位GB。取值参考文档【购买指南】。存储使用预付费模式时必须设置，存储使用按小时后付费时不可设置 */
  Storage?: number;
}

declare interface CloneClusterToPointInTimeResponse {
  /** 订单号 */
  DealNameSet: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** CPU核数。取值参考文档【购买指南】 */
  CPU: number;
  /** 内存大小，单位GiB。取值参考文档【购买指南】 */
  Memory: number;
  /** 实例名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."。不输入此参数时默认与InstanceId一致。 */
  InstanceName?: string;
  /** 新建实例的数量，默认为1。单集群下实例数量目前不能超过4个。 */
  InstanceCount?: number;
}

declare interface CreateClusterInstancesResponse {
  /** 订单号 */
  DealNameSet: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterRequest {
  /** 可用区 */
  Zone: string;
  /** 数据库用户密码，必须满足 8-64个字符，至少包含 大写字母、小写字母、数字和符号~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/中的任意三种 */
  MasterUserPassword: string;
  /** CPU核数。取值参考文档【购买指南】 */
  CPU: number;
  /** 内存大小，单位GiB。取值参考文档【购买指南】 */
  Memory: number;
  /** 私有网络ID */
  VpcId: string;
  /** 已配置的私有网络中的子网ID */
  SubnetId: string;
  /** 实例付费模式 - PREPAID：预付费，即包年包月 - POSTPAID_BY_HOUR：按小时后付费 */
  PayMode: string;
  /** 集群名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"."。不输入此参数时默认与ClusterId保持一致 */
  ClusterName?: string;
  /** TDSQL-C PostgreSQL 合入的社区版本号。支持入参值为：10.17。当输入该参数时，会基于此版本号创建对应的最新DBKernelVersion数据库内核。注：该参数与DBMajorVersion、DBKernelVersion只能传递一个，且需要传递一个。 */
  DBVersion?: string;
  /** 项目Id，默认为0表示默认项目 */
  ProjectId?: number;
  /** 连接数据库时，Endpoint使用的端口。取值范围为[1,65534]，默认值为5432 */
  Port?: number;
  /** 集群下实例数量。取值范围为[1,4]，默认值为1 */
  InstanceCount?: number;
  /** 购买时长，单位：月。取值范围为[1,60]，默认值为1。只有当PayMode为PREPAID时生效。 */
  Period?: number;
  /** 是否自动续费，0-不 1-是。默认值为0，只有当PayMode为PREPAID时生效。 */
  AutoRenewFlag?: number;
  /** TDSQL-C PostgreSQL 合入的社区主要版本号。支持入参值为：10。当输入该参数时，会基于此版本号创建对应的最新DBKernelVersion数据库内核。注：该参数和DBVersion、DBKernelVersion只能传递一个，且需要传递一个。 */
  DBMajorVersion?: string;
  /** TDSQL-C PostgreSQL 内核版本号。支持入参值为：v10.17_r1.4。当输入该参数时，会创建此版本号对应的数据库内核。注：该参数和DBVersion、DBMajorVersion只能传递一个，且需要传递一个。 */
  DBKernelVersion?: string;
  /** 存储付费模式 - PREPAID：预付费，即包年包月 - POSTPAID_BY_HOUR：按小时后付费默认为POSTPAID_BY_HOUR，实例付费模式为按小时付费时，存储付费模式不支持包年包月 */
  StoragePayMode?: string;
  /** 存储最大使用量，单位GB。取值参考文档【购买指南】。存储使用预付费模式时必须设置，存储使用按小时后付费时不可设置 */
  Storage?: number;
}

declare interface CreateClusterResponse {
  /** 订单号 */
  DealNameSet: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID列表 */
  InstanceIdSet: string[];
}

declare interface DeleteClusterInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DeleteClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeAccountsResponse {
  /** 总条数 */
  TotalCount: number;
  /** 账号信息列表 */
  AccountSet: Account[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterBackupsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 页码，取值范围为[1,INF)，默认值为1 */
  PageNumber?: number;
  /** 每页个数，取值范围为默认为[1,100]，默认值为20 */
  PageSize?: number;
}

declare interface DescribeClusterBackupsResponse {
  /** 总条数 */
  TotalCount: number;
  /** 备份列表信息 */
  BackupSet: Backup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterEndpointsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterEndpointsResponse {
  /** 总条数 */
  TotalCount: number;
  /** 接入点列表 */
  EndpointSet: Endpoint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 页码，取值范围为[1,INF)，默认值为1 */
  PageNumber?: number;
  /** 每页个数，取值范围为默认为[1,100]，默认值为20 */
  PageSize?: number;
  /** 目前支持查询条件包括： - InstanceId : 实例ID - InstanceName : 实例名 - EndpointId : 接入点ID - Status : 实例状态 - InstanceType : 实例类型 */
  Filters?: Filter[];
  /** 排序字段，可选字段：- CreateTime : 实例创建时间(默认值)- PayPeriodEndTime : 实例过期时间 */
  OrderBy?: string;
  /** 排序方式，可选字段：- DESC : 降序(默认值)- ASC : 升序 */
  OrderByType?: string;
}

declare interface DescribeClusterInstancesResponse {
  /** 总条数 */
  TotalCount: number;
  /** 实例列表信息 */
  InstanceSet: Instance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterRecoveryTimeRangeRequest {
  /** 集群ID */
  ClusterId: string;
  /** 期望的回档时间点，传入从集群创建时间到当前时间之间的时间点。按照RFC3339标准表示，并且使用东八区时区时间，格式为：YYYY-MM-DDThh:mm:ss+08:00。 */
  DataPoint: string;
}

declare interface DescribeClusterRecoveryTimeRangeResponse {
  /** 可回档时间范围列表 */
  AvailableRecoveryTimeRangeSet: AvailableRecoveryTimeRange[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClustersRequest {
  /** 页码，取值范围为[1,INF)，默认值为1 */
  PageNumber?: number;
  /** 每页条数，取值范围为默认为[1,100]，默认值为20 */
  PageSize?: number;
  /** 目前支持查询条件包括： - ClusterId : 集群ID - ClusterName : 集群名 - ProjectId : 项目ID - Status : 集群状态 - PayMode : 付费模式 */
  Filters?: Filter[];
  /** 排序字段，可选字段： - CreateTime : 集群创建时间(默认值) - PayPeriodEndTime : 集群过期时间 */
  OrderBy?: string;
  /** 排序方式，可选字段： - DESC : 降序(默认值) - ASC : 升序 */
  OrderByType?: string;
}

declare interface DescribeClustersResponse {
  /** 总条数 */
  TotalCount: number;
  /** 集群列表信息 */
  ClusterSet: Cluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourcesByDealNameRequest {
  /** 计费订单id（如果计费还没回调业务发货，可能出现错误码InvalidParameterValue.DealNameNotFound，这种情况需要业务重试DescribeResourcesByDealName接口直到成功） */
  DealName: string;
}

declare interface DescribeResourcesByDealNameResponse {
  /** 资源ID信息列表 */
  ResourceIdInfoSet: ResourceIdInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID列表 */
  InstanceIdSet: string[];
}

declare interface IsolateClusterInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateClusterRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface IsolateClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccountDescriptionRequest {
  /** 集群ID */
  ClusterId: string;
  /** 账号名字 */
  AccountName: string;
  /** 账号描述，0-256个字符 */
  AccountDescription: string;
}

declare interface ModifyAccountDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterEndpointWanStatusRequest {
  /** 集群ID */
  ClusterId: string;
  /** 接入点ID */
  EndpointId: string;
  /** 取值为： - OPEN：开启外网 - CLOSE：关闭外网 */
  WanStatus: string;
}

declare interface ModifyClusterEndpointWanStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterInstancesSpecRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID列表，目前只支持单个实例修改 */
  InstanceIdSet: string[];
  /** 修改后的CPU核数。取值参考文档【购买指南】 */
  CPU: number;
  /** 修改后的内存大小，单位GiB。取值参考文档【购买指南】 */
  Memory: number;
  /** 操作时机 - IMMEDIATE：立即执行 - MAINTAIN_PERIOD：维护窗口期执行 */
  OperationTiming: string;
}

declare interface ModifyClusterInstancesSpecResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterNameRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群名，1-60个字符，可以包含中文、英文、数字和符号"-"、"_"、"." */
  ClusterName: string;
}

declare interface ModifyClusterNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClustersAutoRenewFlagRequest {
  /** 集群ID列表 */
  ClusterIdSet: string[];
  /** 是否自动续费，0-不 1-是。默认为0，只有当集群的PayMode为PREPAID时生效。 */
  AutoRenewFlag: number;
}

declare interface ModifyClustersAutoRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID列表 */
  InstanceIdSet: string[];
  /** 购买时长，单位：月。取值范围为[1,60]，默认值为1。只有当PayMode为PREPAID时生效。 */
  Period?: number;
}

declare interface RecoverClusterInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 购买时长，单位：月。取值范围为[1,60]，默认值为1。只有当PayMode为PREPAID时生效。 */
  Period?: number;
}

declare interface RecoverClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 续费时间，单位：月。取值范围为[1,60]，默认值为1。 */
  Period?: number;
}

declare interface RenewClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetAccountPasswordRequest {
  /** 集群ID */
  ClusterId: string;
  /** 账号名字 */
  AccountName: string;
  /** 数据库用户密码，必须满足 8-64个字符，至少包含 大写字母、小写字母、数字和符号~!@#$%^&*_-+=`|(){}[]:;'<>,.?/中的任意三种 */
  AccountPassword: string;
}

declare interface ResetAccountPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 实例ID列表，目前只支持单个实例重启 */
  InstanceIdSet: string[];
}

declare interface RestartClusterInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TransformClusterPayModeRequest {
  /** 集群ID */
  ClusterId: string;
  /** 当前付费模式，目前只支持：POSTPAID_BY_HOUR(按小时后付费) */
  CurrentPayMode: string;
  /** 目标付费模式，目前只支持：PREPAID(预付费) */
  TargetPayMode: string;
  /** 购买时长，单位：月。取值范围为[1,60]，默认值为1。 */
  Period?: number;
}

declare interface TransformClusterPayModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tdcpg TDSQL-C PostgreSQL 版} */
declare interface Tdcpg {
  (): Versions;
  /** 克隆集群 {@link CloneClusterToPointInTimeRequest} {@link CloneClusterToPointInTimeResponse} */
  CloneClusterToPointInTime(data: CloneClusterToPointInTimeRequest, config?: AxiosRequestConfig): AxiosPromise<CloneClusterToPointInTimeResponse>;
  /** 创建集群 {@link CreateClusterRequest} {@link CreateClusterResponse} */
  CreateCluster(data: CreateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterResponse>;
  /** 创建实例 {@link CreateClusterInstancesRequest} {@link CreateClusterInstancesResponse} */
  CreateClusterInstances(data: CreateClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterInstancesResponse>;
  /** 删除集群 {@link DeleteClusterRequest} {@link DeleteClusterResponse} */
  DeleteCluster(data: DeleteClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterResponse>;
  /** 删除实例 {@link DeleteClusterInstancesRequest} {@link DeleteClusterInstancesResponse} */
  DeleteClusterInstances(data: DeleteClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterInstancesResponse>;
  /** 查询数据库账号信息 {@link DescribeAccountsRequest} {@link DescribeAccountsResponse} */
  DescribeAccounts(data: DescribeAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountsResponse>;
  /** 查询集群的备份集 {@link DescribeClusterBackupsRequest} {@link DescribeClusterBackupsResponse} */
  DescribeClusterBackups(data: DescribeClusterBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterBackupsResponse>;
  /** 查询集群接入点 {@link DescribeClusterEndpointsRequest} {@link DescribeClusterEndpointsResponse} */
  DescribeClusterEndpoints(data: DescribeClusterEndpointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterEndpointsResponse>;
  /** 查询实例 {@link DescribeClusterInstancesRequest} {@link DescribeClusterInstancesResponse} */
  DescribeClusterInstances(data: DescribeClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterInstancesResponse>;
  /** 查询集群可回档时间范围 {@link DescribeClusterRecoveryTimeRangeRequest} {@link DescribeClusterRecoveryTimeRangeResponse} */
  DescribeClusterRecoveryTimeRange(data: DescribeClusterRecoveryTimeRangeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterRecoveryTimeRangeResponse>;
  /** 查询集群 {@link DescribeClustersRequest} {@link DescribeClustersResponse} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 根据订单号获取资源信息 {@link DescribeResourcesByDealNameRequest} {@link DescribeResourcesByDealNameResponse} */
  DescribeResourcesByDealName(data: DescribeResourcesByDealNameRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourcesByDealNameResponse>;
  /** 隔离集群 {@link IsolateClusterRequest} {@link IsolateClusterResponse} */
  IsolateCluster(data: IsolateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateClusterResponse>;
  /** 隔离实例 {@link IsolateClusterInstancesRequest} {@link IsolateClusterInstancesResponse} */
  IsolateClusterInstances(data: IsolateClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateClusterInstancesResponse>;
  /** 修改数据库账号描述 {@link ModifyAccountDescriptionRequest} {@link ModifyAccountDescriptionResponse} */
  ModifyAccountDescription(data: ModifyAccountDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccountDescriptionResponse>;
  /** 修改接入点外网状态 {@link ModifyClusterEndpointWanStatusRequest} {@link ModifyClusterEndpointWanStatusResponse} */
  ModifyClusterEndpointWanStatus(data: ModifyClusterEndpointWanStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterEndpointWanStatusResponse>;
  /** 修改实例规格 {@link ModifyClusterInstancesSpecRequest} {@link ModifyClusterInstancesSpecResponse} */
  ModifyClusterInstancesSpec(data: ModifyClusterInstancesSpecRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterInstancesSpecResponse>;
  /** 修改集群名字 {@link ModifyClusterNameRequest} {@link ModifyClusterNameResponse} */
  ModifyClusterName(data: ModifyClusterNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterNameResponse>;
  /** 修改集群自动续费 {@link ModifyClustersAutoRenewFlagRequest} {@link ModifyClustersAutoRenewFlagResponse} */
  ModifyClustersAutoRenewFlag(data: ModifyClustersAutoRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClustersAutoRenewFlagResponse>;
  /** 恢复集群 {@link RecoverClusterRequest} {@link RecoverClusterResponse} */
  RecoverCluster(data: RecoverClusterRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverClusterResponse>;
  /** 恢复实例 {@link RecoverClusterInstancesRequest} {@link RecoverClusterInstancesResponse} */
  RecoverClusterInstances(data: RecoverClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverClusterInstancesResponse>;
  /** 续费集群 {@link RenewClusterRequest} {@link RenewClusterResponse} */
  RenewCluster(data: RenewClusterRequest, config?: AxiosRequestConfig): AxiosPromise<RenewClusterResponse>;
  /** 重置数据库账号密码 {@link ResetAccountPasswordRequest} {@link ResetAccountPasswordResponse} */
  ResetAccountPassword(data: ResetAccountPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAccountPasswordResponse>;
  /** 重启实例 {@link RestartClusterInstancesRequest} {@link RestartClusterInstancesResponse} */
  RestartClusterInstances(data: RestartClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RestartClusterInstancesResponse>;
  /** 转换集群付费模式 {@link TransformClusterPayModeRequest} {@link TransformClusterPayModeResponse} */
  TransformClusterPayMode(data: TransformClusterPayModeRequest, config?: AxiosRequestConfig): AxiosPromise<TransformClusterPayModeResponse>;
}

export declare type Versions = ["2021-11-18"];

export default Tdcpg;
