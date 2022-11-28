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
  /** {@link ModifyClusterConfigs 修改集群配置文件接口}({@link ModifyClusterConfigsRequest 请求参数}): {@link ModifyClusterConfigsResponse 返回参数} */
  ModifyClusterConfigs(data: ModifyClusterConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterConfigsResponse>;
  /** {@link ModifyUserNewPrivilege 新增、修改ck账号cluster权限（新版）}({@link ModifyUserNewPrivilegeRequest 请求参数}): {@link ModifyUserNewPrivilegeResponse 返回参数} */
  ModifyUserNewPrivilege(data?: ModifyUserNewPrivilegeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUserNewPrivilegeResponse>;
  /** {@link OpenBackUp 开启或者关闭策略}({@link OpenBackUpRequest 请求参数}): {@link OpenBackUpResponse 返回参数} */
  OpenBackUp(data: OpenBackUpRequest, config?: AxiosRequestConfig): AxiosPromise<OpenBackUpResponse>;
}

export declare type Versions = ["2020-09-15"];

export default Cdwch;
