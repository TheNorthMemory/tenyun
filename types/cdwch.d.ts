/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 备份表信息 */
declare interface BackupTableContent {
  /** 数据库 */
  Database: string;
  /** 表 */
  Table: string;
  /** 表总字节数 */
  TotalBytes: number;
  /** 虚拟cluster */
  VCluster?: string;
  /** 表ip */
  Ips?: string;
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
  /** 密码 */
  PassWord: string;
  /** 描述 */
  Describe?: string;
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

/** 实例描述信息 */
declare interface InstanceInfo {
  /** 集群实例ID, "cdw-xxxx" 字符串类型 */
  InstanceId: string | null;
  /** 集群实例名称 */
  InstanceName: string | null;
  /** 状态,Init 创建中; Serving 运行中； Deleted已销毁；Deleting 销毁中；Modify 集群变更中； */
  Status: string | null;
  /** 版本 */
  Version: string | null;
  /** 地域, ap-guangzhou */
  Region: string | null;
  /** 可用区， ap-guangzhou-3 */
  Zone: string | null;
  /** 私有网络名称 */
  VpcId: string | null;
  /** 子网名称 */
  SubnetId: string | null;
  /** 付费类型，"hour", "prepay" */
  PayMode: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 过期时间 */
  ExpireTime: string | null;
  /** 数据节点描述信息 */
  MasterSummary: NodesSummary | null;
  /** zookeeper节点描述信息 */
  CommonSummary: NodesSummary | null;
  /** 高可用，“true" "false" */
  HA: string | null;
  /** 访问地址，例如 "10.0.0.1:9000" */
  AccessInfo: string | null;
  /** 记录ID，数值型 */
  Id: number | null;
  /** regionId, 表示地域 */
  RegionId: number | null;
  /** 可用区说明，例如 "广州二区" */
  ZoneDesc: string | null;
  /** 错误流程说明信息 */
  FlowMsg: string | null;
  /** 状态描述，例如“运行中”等 */
  StatusDesc: string | null;
  /** 自动续费标记 */
  RenewFlag: boolean | null;
  /** 标签列表 */
  Tags: Tag[] | null;
  /** 监控信息 */
  Monitor: string | null;
  /** 是否开通日志 */
  HasClsTopic: boolean | null;
  /** 日志主题ID */
  ClsTopicId: string | null;
  /** 日志集ID */
  ClsLogSetId: string | null;
  /** 是否支持xml配置管理 */
  EnableXMLConfig: number | null;
  /** 区域 */
  RegionDesc: string | null;
  /** 弹性网卡地址 */
  Eip: string | null;
  /** 冷热分层系数 */
  CosMoveFactor: number | null;
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
  ErrMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackUpScheduleRequest {
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
  /** 版本 */
  ProductVersion: string;
  /** 计费方式 */
  ChargeProperties: Charge;
  /** 实例名称 */
  InstanceName: string;
  /** 数据节点 */
  DataSpec: NodeSpec;
  /** 标签列表 */
  Tags?: Tag;
  /** 日志主题ID */
  ClsLogSetId?: string;
  /** COS桶名称 */
  CosBucketName?: string;
  /** 是否是裸盘挂载 */
  MountDiskType?: number;
  /** 是否是ZK高可用 */
  HAZk?: boolean;
  /** ZK节点 */
  CommonSpec?: NodeSpec;
}

declare interface CreateInstanceNewResponse {
  /** 流程ID */
  FlowId: string | null;
  /** 实例ID */
  InstanceId: string | null;
  /** 错误信息 */
  ErrorMsg: string | null;
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
}

declare interface DescribeCkSqlApisResponse {
  /** 返回的查询数据，大部分情况是list，也可能是bool */
  ReturnData: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceResponse {
  /** 实例描述信息 */
  InstanceInfo: InstanceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceShardsRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceShardsResponse {
  /** 实例shard信息 */
  InstanceShardsList: string | null;
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
}

declare interface DescribeSpecResponse {
  /** zookeeper节点规格描述 */
  CommonSpec: ResourceSpec[];
  /** 数据节点规格描述 */
  DataSpec: ResourceSpec[];
  /** 云盘列表 */
  AttachCBSSpec: DiskSpec[] | null;
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
  FlowId: number;
  /** 错误信息 */
  ErrorMsg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUserNewPrivilegeRequest {
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

/** {@link Cdwch 云数据仓库 ClickHouse} */
declare interface Cdwch {
  (): Versions;
  /** 新增、修改ck用户接口 {@link ActionAlterCkUserRequest} {@link ActionAlterCkUserResponse} */
  ActionAlterCkUser(data: ActionAlterCkUserRequest, config?: AxiosRequestConfig): AxiosPromise<ActionAlterCkUserResponse>;
  /** 创建或者修改备份策略 {@link CreateBackUpScheduleRequest} {@link CreateBackUpScheduleResponse} */
  CreateBackUpSchedule(data?: CreateBackUpScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackUpScheduleResponse>;
  /** 创建集群openApi {@link CreateInstanceNewRequest} {@link CreateInstanceNewResponse} */
  CreateInstanceNew(data: CreateInstanceNewRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceNewResponse>;
  /** 查询集群用户相关信息 {@link DescribeCkSqlApisRequest} {@link DescribeCkSqlApisResponse} */
  DescribeCkSqlApis(data: DescribeCkSqlApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCkSqlApisResponse>;
  /** 描述实例信息 {@link DescribeInstanceRequest} {@link DescribeInstanceResponse} */
  DescribeInstance(data: DescribeInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceResponse>;
  /** 获取实例shard信息列表 {@link DescribeInstanceShardsRequest} {@link DescribeInstanceShardsResponse} */
  DescribeInstanceShards(data: DescribeInstanceShardsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceShardsResponse>;
  /** 获取集群规格 {@link DescribeSpecRequest} {@link DescribeSpecResponse} */
  DescribeSpec(data: DescribeSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpecResponse>;
  /** 修改集群配置文件接口 {@link ModifyClusterConfigsRequest} {@link ModifyClusterConfigsResponse} */
  ModifyClusterConfigs(data: ModifyClusterConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterConfigsResponse>;
  /** 新增、修改ck账号cluster权限（新版） {@link ModifyUserNewPrivilegeRequest} {@link ModifyUserNewPrivilegeResponse} */
  ModifyUserNewPrivilege(data?: ModifyUserNewPrivilegeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserNewPrivilegeResponse>;
  /** 开启或者关闭策略 {@link OpenBackUpRequest} {@link OpenBackUpResponse} */
  OpenBackUp(data: OpenBackUpRequest, config?: AxiosRequestConfig): AxiosPromise<OpenBackUpResponse>;
}

export declare type Versions = ["2020-09-15"];

export default Cdwch;
