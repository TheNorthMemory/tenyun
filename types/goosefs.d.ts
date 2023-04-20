/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

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
  /** 获取数据流通任务实时状态 {@link DescribeDataRepositoryTaskStatusRequest} {@link DescribeDataRepositoryTaskStatusResponse} */
  DescribeDataRepositoryTaskStatus(data: DescribeDataRepositoryTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDataRepositoryTaskStatusResponse>;
}

export declare type Versions = ["2022-05-19"];

export default Goosefs;
