/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 迁移目的信息 */
declare interface DstInfo {
  /** 迁移目的地域 */
  Region?: string;
  /** 迁移目的Ip */
  Ip?: string;
  /** 迁移目的端口 */
  Port?: string;
  /** 迁移目的实例Id */
  InstanceId?: string;
}

/** 列表类型 */
declare interface Project {
  /** 项目ID */
  ProjectId: number;
  /** 项目名称 */
  ProjectName: string;
}

/** 迁移源信息 */
declare interface SrcInfo {
  /** 迁移源地域 */
  Region?: string;
  /** 迁移源Ip */
  Ip?: string;
  /** 迁移源端口 */
  Port?: string;
  /** 迁移源实例Id */
  InstanceId?: string;
}

/** 迁移任务类别 */
declare interface Task {
  /** 任务Id */
  TaskId: string;
  /** 任务名称 */
  TaskName: string;
  /** 迁移类型 */
  MigrationType: string;
  /** 迁移状态 */
  Status: string;
  /** 项目Id */
  ProjectId: number;
  /** 项目名称 */
  ProjectName: string;
  /** 迁移源信息 */
  SrcInfo: SrcInfo;
  /** 迁移时间信息 */
  MigrationTimeLine: TimeObj;
  /** 状态更新时间 */
  Updated: string;
  /** 迁移目的信息 */
  DstInfo: DstInfo;
}

/** 迁移详情列表 */
declare interface TaskStatus {
  /** 迁移状态 */
  Status: string;
  /** 迁移进度 */
  Progress: string;
  /** 迁移日期 */
  UpdateTime: string;
}

/** 时间对象 */
declare interface TimeObj {
  /** 创建时间 */
  CreateTime: string;
  /** 结束时间 */
  EndTime: string;
}

declare interface DeregisterMigrationTaskRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DeregisterMigrationTaskResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMigrationTaskRequest {
  /** 任务ID，例如msp-jitoh33n */
  TaskId: string;
}

declare interface DescribeMigrationTaskResponse {
  /** 迁移详情列表 */
  TaskStatus?: TaskStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListMigrationProjectRequest {
  /** 记录起始数，默认值为0 */
  Offset?: number;
  /** 返回条数，默认值为500 */
  Limit?: number;
}

declare interface ListMigrationProjectResponse {
  /** 项目列表 */
  Projects?: Project[];
  /** 项目总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListMigrationTaskRequest {
  /** 记录起始数，默认值为0 */
  Offset?: number;
  /** 记录条数，默认值为10 */
  Limit?: number;
  /** 项目ID，默认值为空 */
  ProjectId?: number;
}

declare interface ListMigrationTaskResponse {
  /** 记录总条数 */
  TotalCount?: number;
  /** 迁移任务列表 */
  Tasks?: Task[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMigrationTaskBelongToProjectRequest {
  /** 任务ID，例如msp-jitoh33n */
  TaskId: string;
  /** 项目ID，例如10005 */
  ProjectId: number;
}

declare interface ModifyMigrationTaskBelongToProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMigrationTaskStatusRequest {
  /** 任务状态，取值为unstart，migrating，finish，fail之一，分别代表该迁移任务状态为迁移未开始，迁移中，迁移完成，迁移失败 */
  Status: string;
  /** 任务ID，例如msp-jitoh33n */
  TaskId: string;
}

declare interface ModifyMigrationTaskStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RegisterMigrationTaskRequest {
  /** 任务类型，取值database（数据库迁移）、file（文件迁移）、host（主机迁移） */
  TaskType: string;
  /** 任务名称 */
  TaskName: string;
  /** 服务提供商名称 */
  ServiceSupplier: string;
  /** 迁移任务创建时间 */
  CreateTime: string;
  /** 迁移任务更新时间 */
  UpdateTime: string;
  /** 迁移类别，如数据库迁移中mysql:mysql代表从mysql迁移到mysql，文件迁移中oss:cos代表从阿里云oss迁移到腾讯云cos */
  MigrateClass: string;
  /** 迁移任务源信息 */
  SrcInfo?: SrcInfo;
  /** 迁移任务目的信息 */
  DstInfo?: DstInfo;
  /** 源实例接入类型，数据库迁移时填写值为：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例) */
  SrcAccessType?: string;
  /** 源实例数据库类型，数据库迁移时填写，取值为mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb 之一 */
  SrcDatabaseType?: string;
  /** 目标实例接入类型，数据库迁移时填写值为：extranet(外网),cvm(cvm自建实例),dcg(专线接入的实例),vpncloud(云vpn接入的实例),vpnselfbuild(自建vpn接入的实例)，cdb(云上cdb实例) */
  DstAccessType?: string;
  /** 目标实例数据库类型,数据库迁移时填写，取值为mysql,redis,percona,mongodb,postgresql,sqlserver,mariadb 之一 */
  DstDatabaseType?: string;
}

declare interface RegisterMigrationTaskResponse {
  /** 任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Msp 迁移服务平台} */
declare interface Msp {
  (): Versions;
  /** @deprecated 取消注册迁移任务 {@link DeregisterMigrationTaskRequest} {@link DeregisterMigrationTaskResponse} */
  DeregisterMigrationTask(data: DeregisterMigrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeregisterMigrationTaskResponse>;
  /** 获取指定迁移任务详情 {@link DescribeMigrationTaskRequest} {@link DescribeMigrationTaskResponse} */
  DescribeMigrationTask(data: DescribeMigrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMigrationTaskResponse>;
  /** 获取迁移项目名称列表 {@link ListMigrationProjectRequest} {@link ListMigrationProjectResponse} */
  ListMigrationProject(data?: ListMigrationProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ListMigrationProjectResponse>;
  /** 获取迁移任务列表 {@link ListMigrationTaskRequest} {@link ListMigrationTaskResponse} */
  ListMigrationTask(data?: ListMigrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ListMigrationTaskResponse>;
  /** 更改迁移任务所属项目 {@link ModifyMigrationTaskBelongToProjectRequest} {@link ModifyMigrationTaskBelongToProjectResponse} */
  ModifyMigrationTaskBelongToProject(data: ModifyMigrationTaskBelongToProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrationTaskBelongToProjectResponse>;
  /** 更新迁移任务状态 {@link ModifyMigrationTaskStatusRequest} {@link ModifyMigrationTaskStatusResponse} */
  ModifyMigrationTaskStatus(data: ModifyMigrationTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMigrationTaskStatusResponse>;
  /** 注册迁移任务 {@link RegisterMigrationTaskRequest} {@link RegisterMigrationTaskResponse} */
  RegisterMigrationTask(data: RegisterMigrationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RegisterMigrationTaskResponse>;
}

export declare type Versions = ["2018-03-19"];

export default Msp;
