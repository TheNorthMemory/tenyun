/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

declare interface CreateDataRepositoryTaskRequest {
  /** 数据流通任务类型, FS_TO_COS(文件系统到COS Bucket),或者Bucket到文件系统(COS_TO_FS) */
  TaskType: string;
  /** bucket名 */
  Bucket: string;
  /** 文件系统ID */
  FileSystemId: string;
  /** 对于FS_TO_COS, TaskPath是Bucket映射目录的相对路径, 对于COS_TO_FS是COS上的路径。如果置位空, 则表示全部数据 */
  TaskPath: string;
  /** 任务名称 */
  TaskName: string;
}

declare interface CreateDataRepositoryTaskResponse {
  /** 任务ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Goosefs 数据加速器 GooseFS} */
declare interface Goosefs {
  (): Versions;
  /** 创建数据流通任务 {@link CreateDataRepositoryTaskRequest} {@link CreateDataRepositoryTaskResponse} */
  CreateDataRepositoryTask(data: CreateDataRepositoryTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDataRepositoryTaskResponse>;
}

export declare type Versions = ["2022-05-19"];

export default Goosefs;
