/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 执行时间。 */
declare interface ExecutionTime {
  /** 提交时间。 */
  SubmitTime?: string | null;
  /** 开始时间。 */
  StartTime?: string | null;
  /** 结束时间。 */
  EndTime?: string | null;
}

/** 描述键值对过滤器，用于条件过滤查询。- 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。- 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
declare interface Filter {
  /** 过滤字段。 */
  Name: string | null;
  /** 过滤字段值。 */
  Values: string[] | null;
}

/** 任务。 */
declare interface Run {
  /** 任务UUID。 */
  RunUuid?: string;
  /** 项目ID。 */
  ProjectId?: string;
  /** 应用ID。 */
  ApplicationId?: string;
  /** 任务批次ID。 */
  RunGroupId?: string;
  /** 环境ID。 */
  EnvironmentId?: string;
  /** 用户定义ID，单例运行为空。 */
  UserDefinedId?: string | null;
  /** 表格ID，单例运行为空。 */
  TableId?: string | null;
  /** 表格行UUID，单例运行为空。 */
  TableRowUuid?: string | null;
  /** 任务状态。 */
  Status?: string;
  /** 任务输入。 */
  Input?: string;
  /** 运行选项。 */
  Option?: RunOption;
  /** 执行时间。 */
  ExecutionTime?: ExecutionTime;
  /** 错误信息。 */
  ErrorMessage?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 任务。 */
declare interface RunGroup {
  /** 任务批次ID。 */
  RunGroupId?: string;
  /** 项目ID。 */
  ProjectId?: string;
  /** 项目名称。 */
  ProjectName?: string;
  /** 应用ID。 */
  ApplicationId?: string;
  /** 应用名称。 */
  ApplicationName?: string;
  /** 应用类型。 */
  ApplicationType?: string;
  /** 环境ID。 */
  EnvironmentId?: string;
  /** 环境名称。 */
  EnvironmentName?: string;
  /** 表格ID，单例运行为空。 */
  TableId?: string | null;
  /** 任务名称。 */
  Name?: string;
  /** 任务描述。 */
  Description?: string;
  /** 任务状态。 */
  Status?: string;
  /** 任务输入。 */
  Input?: string;
  /** 运行选项。 */
  Option?: RunOption;
  /** 任务总数量。 */
  TotalRun?: number;
  /** 各状态任务的数量。 */
  RunStatusCounts?: RunStatusCount[];
  /** 执行时间。 */
  ExecutionTime?: ExecutionTime;
  /** 错误信息。 */
  ErrorMessage?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 任务作业详情。 */
declare interface RunMetadata {
  /** 任务类型。 */
  RunType?: string | null;
  /** 任务ID。 */
  RunId?: string | null;
  /** 父层ID。 */
  ParentId?: string | null;
  /** 作业ID。 */
  JobId?: string | null;
  /** 作业名称。 */
  CallName?: string | null;
  /** Scatter索引。 */
  ScatterIndex?: string | null;
  /** 输入。 */
  Input?: string | null;
  /** 输出。 */
  Output?: string | null;
  /** 状态 */
  Status?: string | null;
  /** 错误信息。 */
  ErrorMessage?: string | null;
  /** 开始时间 */
  StartTime?: string | null;
  /** 提交时间。 */
  SubmitTime?: string | null;
  /** 结束时间。 */
  EndTime?: string | null;
  /** 命令行。 */
  Command?: string | null;
  /** 运行时。 */
  Runtime?: string | null;
  /** 预处理。 */
  Preprocess?: boolean | null;
  /** 后处理。 */
  PostProcess?: boolean | null;
  /** Cache命中 */
  CallCached?: boolean | null;
  /** 标准输出。 */
  Stdout?: string | null;
  /** 错误输出。 */
  Stderr?: string | null;
}

/** 运行应用选项。 */
declare interface RunOption {
  /** 运行失败模式，取值范围：- ContinueWhilePossible- NoNewCalls */
  FailureMode: string;
  /** 是否使用Call-Caching功能。 */
  UseCallCache: boolean;
  /** 是否使用错误挂起功能。 */
  UseErrorOnHold: boolean;
}

/** 任务运行状态。 */
declare interface RunStatusCount {
  /** 状态。 */
  Status?: string;
  /** 数量。 */
  Count?: number;
}

declare interface DescribeRunGroupsRequest {
  /** 项目ID。 */
  ProjectId: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤器，支持过滤字段：- Name：任务批次名称- RunGroupId：任务批次ID- Status：任务批次状态 */
  Filters?: Filter[];
}

declare interface DescribeRunGroupsResponse {
  /** 符合条件的数量。 */
  TotalCount?: number;
  /** 任务批次列表。 */
  RunGroups?: RunGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRunsRequest {
  /** 项目ID。 */
  ProjectId: string;
  /** 返回数量，默认为10，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 过滤器，支持过滤字段：- RunGroupId：任务批次ID- Status：任务状态- RunUuid：任务UUID- UserDefinedId：用户定义ID */
  Filters?: Filter[];
}

declare interface DescribeRunsResponse {
  /** 符合条件的数量。 */
  TotalCount?: number;
  /** 任务列表。 */
  Runs?: Run[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRunCallsRequest {
  /** 任务Uuid。 */
  RunUuid: string;
  /** 项目ID。 */
  ProjectId: string;
  /** 作业路径 */
  Path: string;
}

declare interface GetRunCallsResponse {
  /** 作业详情。 */
  Calls?: RunMetadata[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetRunStatusRequest {
  /** 任务Uuid。 */
  RunUuid: string;
  /** 项目ID。 */
  ProjectId: string;
}

declare interface GetRunStatusResponse {
  /** 作业详情。 */
  Metadata?: RunMetadata;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportTableFileRequest {
  /** 表格关联的项目ID。 */
  ProjectId: string;
  /** 表格名称，支持20个字符内的英文字符、数字和下划线。 */
  Name: string;
  /** 表格文件Cos对象路径。 */
  CosUri: string;
  /** 表格文件中每列的数据类型，支持的类型包括：Int、String、File、Array[File] */
  DataType: string[];
  /** 表格描述。 */
  Description?: string;
}

declare interface ImportTableFileResponse {
  /** 表格ID。 */
  TableId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunApplicationRequest {
  /** 应用ID。 */
  ApplicationId: string;
  /** 项目ID。 */
  ProjectId: string;
  /** 任务批次名称。 */
  Name: string;
  /** 投递环境ID。 */
  EnvironmentId: string;
  /** 任务输入JSON。需要进行base64编码。 */
  InputBase64: string;
  /** 任务缓存清理时间。不填表示不清理。 */
  CacheClearDelay: number;
  /** 运行选项。 */
  Option: RunOption;
  /** 任务批次描述。 */
  Description?: string;
  /** 批量投递表格ID，不填表示单例投递。 */
  TableId?: string;
  /** 批量投递表格行UUID。不填表示表格全部行。 */
  TableRowUuids?: string[];
}

declare interface RunApplicationResponse {
  /** 任务批次ID。 */
  RunGroupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Omics 腾讯健康组学平台} */
declare interface Omics {
  (): Versions;
  /** 查询任务批次列表 {@link DescribeRunGroupsRequest} {@link DescribeRunGroupsResponse} */
  DescribeRunGroups(data: DescribeRunGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRunGroupsResponse>;
  /** 查询任务列表 {@link DescribeRunsRequest} {@link DescribeRunsResponse} */
  DescribeRuns(data: DescribeRunsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRunsResponse>;
  /** 查询作业详情 {@link GetRunCallsRequest} {@link GetRunCallsResponse} */
  GetRunCalls(data: GetRunCallsRequest, config?: AxiosRequestConfig): AxiosPromise<GetRunCallsResponse>;
  /** 查询任务详情 {@link GetRunStatusRequest} {@link GetRunStatusResponse} */
  GetRunStatus(data: GetRunStatusRequest, config?: AxiosRequestConfig): AxiosPromise<GetRunStatusResponse>;
  /** 导入表格文件 {@link ImportTableFileRequest} {@link ImportTableFileResponse} */
  ImportTableFile(data: ImportTableFileRequest, config?: AxiosRequestConfig): AxiosPromise<ImportTableFileResponse>;
  /** 运行应用 {@link RunApplicationRequest} {@link RunApplicationResponse} */
  RunApplication(data: RunApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<RunApplicationResponse>;
}

export declare type Versions = ["2022-11-28"];

export default Omics;
