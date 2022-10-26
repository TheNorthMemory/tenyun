/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 事件详情 */
declare interface EventInfo {
  /** 事件ID */
  EventId: string;
  /** 版本ID */
  VersionId: string;
  /** 资源栈ID */
  StackId: string;
  /** 事件类型 */
  Type: string;
  /** 版本状态 */
  Status: string;
  /** 状态信息 */
  Message: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 查询过滤条件 */
declare interface Filter {
  /** 条件名字 */
  Name: string;
  /** 匹配的值，可以有多个 */
  Values: string[];
}

/** 资源栈信息 */
declare interface StackInfo {
  /** 资源栈ID */
  StackId: string;
  /** 资源栈名称 */
  StackName: string;
  /** 资源栈描述 */
  Description: string;
  /** 所处地域 */
  Region: string;
  /** 资源栈状态 */
  Status: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 版本信息 */
declare interface VersionInfo {
  /** 版本ID */
  VersionId: string;
  /** 版本名称 */
  VersionName: string;
  /** 版本描述 */
  Description: string;
  /** 资源栈ID */
  StackId: string;
  /** 版本状态 */
  Status: string;
  /** 创建时间 */
  CreateTime: string;
}

declare interface ApplyStackRequest {
  /** 资源栈ID */
  StackId: string;
  /** 待执行apply事件的版本ID */
  VersionId: string;
}

declare interface ApplyStackResponse {
  /** 执行的事件ID */
  EventId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateStackRequest {
  /** 资源栈名称，不得超过60个字符 */
  StackName: string;
  /** 资源栈所在地域 */
  StackRegion: string;
  /** HCL模板URL，⽬前仅限 COS URL, ⽂件为zip压缩格式 */
  TemplateUrl: string;
  /** 资源栈描述，不得超过200个字符 */
  Description?: string;
}

declare interface CreateStackResponse {
  /** 创建得到的资源栈ID */
  StackId?: string;
  /** 资源栈版本ID */
  VersionId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateStackVersionRequest {
  /** 待增加版本的资源栈ID */
  StackId: string;
  /** 模板 URL，⽬前仅限 COS URL, ⽂件为zip压缩格式 */
  TemplateUrl: string;
  /** 版本名称，不得超过60个字符 */
  VersionName?: string;
  /** 版本描述，不得超过200个字符 */
  Description?: string;
}

declare interface CreateStackVersionResponse {
  /** 新创建的版本ID */
  VersionId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteStackRequest {
  /** 待删除的资源栈ID */
  StackId: string;
}

declare interface DeleteStackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteStackVersionRequest {
  /** 待删除的版本ID */
  VersionId: string;
}

declare interface DeleteStackVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStackEventRequest {
  /** 事件ID */
  EventId: string;
}

declare interface DescribeStackEventResponse {
  /** 事件ID */
  EventId?: string;
  /** 版本ID */
  VersionId?: string;
  /** 资源栈ID */
  StackId?: string;
  /** 事件类型 */
  Type?: string;
  /** 事件状态 */
  Status?: string;
  /** 状态信息 */
  EventMessage?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 控制台输出文本 */
  ConsoleLog?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStackEventsRequest {
  /** 按照⼀个或者多个事件ID查询 */
  EventIds?: string[];
  /** **VersionId**按照【**版本ID**】过滤，VersionId形如 `ver-kg8hn58h`类型：string**StackId**按照【**资源栈ID**】过滤，StackId形如 `stk-hz5vn3te`类型：string**Type**按照【**事件类型**】过滤，Type 形如 plan, apply, destroy类型：string**Status**按照【**事件状态**】过滤，Status形如 queueing, running, success, failed类型：string */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节 */
  Limit?: number;
}

declare interface DescribeStackEventsResponse {
  /** 符合条件的事件数量 */
  TotalCount?: number;
  /** 事件详细信息列表 */
  Events?: EventInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStackVersionsRequest {
  /** 按照⼀个或者多个版本ID查询 */
  VersionIds?: string[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节 */
  Limit?: number;
  /** **Name**按照【**版本名称**】进行过滤类型：string**Status**按照【**版本状态**】过滤，形如`VERSION_EDITING`，`PLAN_IN_PROGRESS`等类型：string**StackId**按照版本所属的【**资源栈ID**】进行过滤，形如`stk-xxxxxx`类型：string */
  Filters?: Filter[];
}

declare interface DescribeStackVersionsResponse {
  /** 符合条件的版本数量 */
  TotalCount?: number;
  /** 版本详细信息列表 */
  Versions?: VersionInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeStacksRequest {
  /** 按照⼀个或者多个资源栈ID查询 */
  StackIds?: string[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeStacksResponse {
  /** 符合条件的资源栈数量 */
  TotalCount?: number;
  /** 资源栈详细信息列表 */
  Stacks?: StackInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DestroyStackRequest {
  /** 资源栈ID */
  StackId: string;
  /** 待执行destroy事件的版本ID */
  VersionId: string;
}

declare interface DestroyStackResponse {
  /** 事件ID */
  EventId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PlanStackRequest {
  /** 资源栈ID */
  StackId: string;
  /** 待执行plan事件的版本ID */
  VersionId: string;
}

declare interface PlanStackResponse {
  /** 执行的事件ID */
  EventId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateStackRequest {
  /** 待更新的资源栈ID */
  StackId: string;
  /** 资源栈名称，不得超过60个字符 */
  StackName?: string;
  /** 资源栈描述，不得超过200个字符 */
  Description?: string;
}

declare interface UpdateStackResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateStackVersionRequest {
  /** 待更新的版本ID */
  VersionId: string;
  /** 模板 URL，⽬前仅限 COS URL, ⽂件为zip压缩格式 */
  TemplateUrl: string;
  /** 版本名称，不得超过60个字符 */
  VersionName?: string;
  /** 版本描述，不得超过200个字符 */
  Description?: string;
}

declare interface UpdateStackVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [腾讯云IaC平台](https://cloud.tencent.com/document/product/1213) */
declare interface Tic {
  (): Versions;
  /** 执行Apply事件 */
  ApplyStack(data: ApplyStackRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyStackResponse>;
  /** 创建资源栈 */
  CreateStack(data: CreateStackRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStackResponse>;
  /** 给资源栈新增一个版本 */
  CreateStackVersion(data: CreateStackVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateStackVersionResponse>;
  /** 删除资源栈 */
  DeleteStack(data: DeleteStackRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStackResponse>;
  /** 删除一个版本 */
  DeleteStackVersion(data: DeleteStackVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteStackVersionResponse>;
  /** 获取单个事件详情 */
  DescribeStackEvent(data: DescribeStackEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStackEventResponse>;
  /** 查询事件列表 */
  DescribeStackEvents(data?: DescribeStackEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStackEventsResponse>;
  /** 查询版本列表 */
  DescribeStackVersions(data?: DescribeStackVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStackVersionsResponse>;
  /** 查询资源栈列表 */
  DescribeStacks(data?: DescribeStacksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStacksResponse>;
  /** 执行Destroy事件 */
  DestroyStack(data: DestroyStackRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyStackResponse>;
  /** 执行Plan事件 */
  PlanStack(data: PlanStackRequest, config?: AxiosRequestConfig): AxiosPromise<PlanStackResponse>;
  /** 更新资源栈 */
  UpdateStack(data: UpdateStackRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateStackResponse>;
  /** 更新资源栈版本的内容 */
  UpdateStackVersion(data: UpdateStackVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateStackVersionResponse>;
}

export declare type Versions = ["2020-11-17"];

export default Tic;
