/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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

/** 角色凭证 */
declare interface RoleToken {
  /** 角色名 */
  RoleName?: string;
  /** 用于goosefs client/sdk等 */
  Token?: string | null;
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

/** {@link Goosefs 数据加速器 GooseFS} */
declare interface Goosefs {
  (): Versions;
  /** 创建数据流通任务 {@link CreateDataRepositoryTaskRequest} {@link CreateDataRepositoryTaskResponse} */
  CreateDataRepositoryTask(data: CreateDataRepositoryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataRepositoryTaskResponse>;
  /** 查询GooseFS集群客户端凭证 {@link DescribeClusterClientTokenRequest} {@link DescribeClusterClientTokenResponse} */
  DescribeClusterClientToken(data: DescribeClusterClientTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterClientTokenResponse>;
  /** 查询GooseFS集群角色凭证 {@link DescribeClusterRoleTokenRequest} {@link DescribeClusterRoleTokenResponse} */
  DescribeClusterRoleToken(data: DescribeClusterRoleTokenRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterRoleTokenResponse>;
  /** 查询GooseFS集群角色 {@link DescribeClusterRolesRequest} {@link DescribeClusterRolesResponse} */
  DescribeClusterRoles(data: DescribeClusterRolesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterRolesResponse>;
  /** 获取数据流通任务实时状态 {@link DescribeDataRepositoryTaskStatusRequest} {@link DescribeDataRepositoryTaskStatusResponse} */
  DescribeDataRepositoryTaskStatus(data: DescribeDataRepositoryTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataRepositoryTaskStatusResponse>;
}

export declare type Versions = ["2022-05-19"];

export default Goosefs;
