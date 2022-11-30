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

declare interface ActionAlterCkUserRequest {
  /** 用户信息 */
  UserInfo: CkUserAlterInfo;
  /** api接口类型 */
  ApiType: string;
}

declare interface ActionAlterCkUserResponse {
  /** 错误信息 */
  ErrMsg: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBackUpScheduleRequest {
  /** 编辑时需要传 */
  ScheduleId?: number;
  /** 选择的星期 逗号分隔 */
  WeekDays?: string;
  /** 执行小时 */
  ExecuteHour?: number;
  /** 备份表列表 */
  BackUpTables?: BackupTableContent[];
}

declare interface CreateBackUpScheduleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCkSqlApisRequest {
  /** 实例id */
  InstanceId: string;
  /** api接口名称 */
  ApiType: string;
  /** 集群名称 */
  Cluster?: string;
  /** 用户名称 */
  UserName?: string;
}

declare interface DescribeCkSqlApisResponse {
  /** 返回的查询数据，大部分情况是list，也可能是bool */
  ReturnData: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceShardsRequest {
  /** 集群实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceShardsResponse {
  /** 实例shard信息 */
  InstanceShardsList: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyUserNewPrivilegeRequest {
}

declare interface ModifyUserNewPrivilegeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
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
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Cdwch 云数据仓库 ClickHouse} */
declare interface Cdwch {
  (): Versions;
  /** {@link ActionAlterCkUser 新增、修改ck用户接口}({@link ActionAlterCkUserRequest 请求参数}): {@link ActionAlterCkUserResponse 返回参数} */
  ActionAlterCkUser(data: ActionAlterCkUserRequest, config?: AxiosRequestConfig): AxiosPromise<ActionAlterCkUserResponse>;
  /** {@link CreateBackUpSchedule 创建或者修改备份策略}({@link CreateBackUpScheduleRequest 请求参数}): {@link CreateBackUpScheduleResponse 返回参数} */
  CreateBackUpSchedule(data?: CreateBackUpScheduleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackUpScheduleResponse>;
  /** {@link DescribeCkSqlApis 通过sql查询ck集群信息}({@link DescribeCkSqlApisRequest 请求参数}): {@link DescribeCkSqlApisResponse 返回参数} */
  DescribeCkSqlApis(data: DescribeCkSqlApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCkSqlApisResponse>;
  /** {@link DescribeInstanceShards 获取实例shard信息列表}({@link DescribeInstanceShardsRequest 请求参数}): {@link DescribeInstanceShardsResponse 返回参数} */
  DescribeInstanceShards(data: DescribeInstanceShardsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceShardsResponse>;
  /** {@link DescribeSpec 获取集群规格}({@link DescribeSpecRequest 请求参数}): {@link DescribeSpecResponse 返回参数} */
  DescribeSpec(data: DescribeSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpecResponse>;
  /** {@link ModifyClusterConfigs 修改集群配置文件接口}({@link ModifyClusterConfigsRequest 请求参数}): {@link ModifyClusterConfigsResponse 返回参数} */
  ModifyClusterConfigs(data: ModifyClusterConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterConfigsResponse>;
  /** {@link ModifyUserNewPrivilege 新增、修改ck账号cluster权限（新版）}({@link ModifyUserNewPrivilegeRequest 请求参数}): {@link ModifyUserNewPrivilegeResponse 返回参数} */
  ModifyUserNewPrivilege(data?: ModifyUserNewPrivilegeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserNewPrivilegeResponse>;
  /** {@link OpenBackUp 开启或者关闭策略}({@link OpenBackUpRequest 请求参数}): {@link OpenBackUpResponse 返回参数} */
  OpenBackUp(data: OpenBackUpRequest, config?: AxiosRequestConfig): AxiosPromise<OpenBackUpResponse>;
}

export declare type Versions = ["2020-09-15"];

export default Cdwch;
