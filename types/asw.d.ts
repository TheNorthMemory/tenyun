/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 执行的事件历史 */
declare interface ExecutionEvent {
  /** 执行资源名 */
  ExecutionResourceName: string;
  /** 自增序号 */
  EventId: number;
  /** 事件类型 */
  EventCategory: string;
  /** 步骤节点名称 */
  StepName: string;
  /** 该步骤引用的资源名 */
  ResourceName: string;
  /** 该事件发生时间，毫秒 */
  Timestamp: string;
  /** 事件内容 */
  Content: string;
  /** 异常信息 */
  Exception: string | null;
}

/** 模版过滤类型 */
declare interface Filter {
  /** 过滤器名字 */
  Name?: string;
  /** 过滤器值的数组 */
  Values?: string[];
}

/** 状态机 */
declare interface StateMachine {
  /** 状态机资源 */
  FlowServiceResource: string;
  /** 状态机类型。EXPRESS，STANDARD */
  Type: string;
  /** 状态机名称 */
  FlowServiceName: string;
  /** 状态机中文名 */
  FlowServiceChineseName: string;
  /** 创建时间。timestamp */
  CreateDate: string;
  /** 修改时间。timestamp */
  ModifyDate: string;
  /** 状态机状态 */
  Status: string;
  /** 创建者的subAccountUin */
  Creator: string | null;
  /** 修改者的subAccountUin */
  Modifier: string | null;
  /** 状态机id */
  FlowServiceId: string;
  /** 模板id */
  TemplateId: string;
  /** 备注 */
  Description: string;
}

declare interface CreateFlowServiceRequest {
  /** 定义文本（JSON格式） */
  Definition: string;
  /** 状态机所属服务名 */
  FlowServiceName: string;
  /** 是不是新的角色 */
  IsNewRole: boolean;
  /** 状态机类型（EXPRESS，STANDARD） */
  Type: string;
  /** 状态机所属服务中文名 */
  FlowServiceChineseName?: string;
  /** 角色资源名, 比如: qcs::cam::uin/20103392:roleName/SomeRoleForYourStateMachine */
  RoleResource?: string;
  /** 备注 */
  Description?: string;
  /** 是否开启CLS日志投递功能 */
  EnableCLS?: boolean;
  /** 该状态机的默认输入 */
  Input?: string;
}

declare interface CreateFlowServiceResponse {
  /** 状态机所属服务资源 */
  FlowServiceResource: string;
  /** 生成日期 */
  CreateDate: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExecutionHistoryRequest {
  /** 执行资源名 */
  ExecutionResourceName: string;
}

declare interface DescribeExecutionHistoryResponse {
  /** 执行的事件列表 */
  Events: ExecutionEvent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExecutionRequest {
  /** 执行资源名 */
  ExecutionResourceName: string;
}

declare interface DescribeExecutionResponse {
  /** 执行资源名 */
  ExecutionResourceName?: string;
  /** 资源名称 */
  Name?: string;
  /** 执行开始时间，毫秒 */
  StartDate?: string;
  /** 执行结束时间，毫秒 */
  StopDate?: string;
  /** 状态机资源名 */
  StateMachineResourceName?: string;
  /** 执行状态。INIT，RUNNING，SUCCEED，FAILED，TERMINATED */
  Status?: string;
  /** 执行的输入 */
  Input?: string | null;
  /** 执行的输出 */
  Output?: string | null;
  /** 启动执行时，状态机的定义 */
  ExecutionDefinition?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExecutionsRequest {
  /** 状态机资源名 */
  StateMachineResourceName: string;
  /** 页大小，最大100 */
  PageSize: number;
  /** 页序号，从1开始 */
  PageIndex: number;
  /** 按状态过滤条件，INIT，RUNNING，SUCCEED，FAILED，TERMINATED */
  FilterExecutionStatus?: string;
  /** 按执行名过滤条件 */
  FilterExecutionResourceName?: string;
}

declare interface DescribeExecutionsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowServiceDetailRequest {
  /** 状态机所属服务资源名 */
  FlowServiceResource: string;
}

declare interface DescribeFlowServiceDetailResponse {
  /** 状态机所属服务名 */
  FlowServiceName: string;
  /** 状态机状态 */
  Status: string;
  /** 定义文本（JSON格式） */
  Definition: string | null;
  /** 角色资源名 */
  RoleResource: string | null;
  /** 状态机的类型，可以为 （EXPRESS/STANDARD） */
  Type: string;
  /** 生成时间 */
  CreateDate: string;
  /** 备注 */
  Description: string | null;
  /** 状态机所属服务中文名 */
  FlowServiceChineseName: string | null;
  /** 是否开启日志CLS服务 */
  EnableCLS: boolean | null;
  /** CLS日志查看地址 */
  CLSUrl: string | null;
  /** 工作流提示输入 */
  FlowInput: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowServicesRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 过滤条件，详见下表：实例过滤条件表。每次请求的Filter.Values的上限为5。参数名字仅支持FlowServiceName， Status, Type三种情况 */
  Filters?: Filter[];
}

declare interface DescribeFlowServicesResponse {
  /** 用户的状态机列表 */
  FlowServiceSet?: StateMachine[];
  /** 用户的状态机总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFlowServiceRequest {
  /** 状态机资源名 */
  FlowServiceResource: string;
  /** 定义JSON */
  Definition: string;
  /** 状态机所属服务名 */
  FlowServiceName: string;
  /** 状态机所属服务中文名 */
  FlowServiceChineseName: string;
  /** 是否是新角色 */
  IsNewRole: boolean;
  /** 状态机类型 */
  Type: string;
  /** 角色资源名 */
  RoleResource: string;
  /** 状态机备注 */
  Description?: string;
  /** 是否允许日志投递 */
  EnableCLS?: boolean;
}

declare interface ModifyFlowServiceResponse {
  /** 状态机资源名 */
  FlowServiceResource: string;
  /** 更新时间 */
  UpdateDate: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartExecutionRequest {
  /** 状态机资源名 */
  StateMachineResourceName: string;
  /** 输入参数，内容为JsonObject，长度不大于524288字符。 */
  Input?: string;
  /** 本次执行名。如果不填，系统会自动生成。如果填，应保证状态机下唯一 */
  Name?: string;
}

declare interface StartExecutionResponse {
  /** 执行资源名 */
  ExecutionResourceName: string;
  /** 执行开始时间 */
  StartDate: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopExecutionRequest {
  /** 执行名称 */
  ExecutionQrn: string;
}

declare interface StopExecutionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Asw 应用与服务编排工作流} */
declare interface Asw {
  (): Versions;
  /** 创建状态机 {@link CreateFlowServiceRequest} {@link CreateFlowServiceResponse} */
  CreateFlowService(data: CreateFlowServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowServiceResponse>;
  /** 查询执行详细信息 {@link DescribeExecutionRequest} {@link DescribeExecutionResponse} */
  DescribeExecution(data: DescribeExecutionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExecutionResponse>;
  /** 查询执行的事件历史 {@link DescribeExecutionHistoryRequest} {@link DescribeExecutionHistoryResponse} */
  DescribeExecutionHistory(data: DescribeExecutionHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExecutionHistoryResponse>;
  /** 查询状态机执行列表 {@link DescribeExecutionsRequest} {@link DescribeExecutionsResponse} */
  DescribeExecutions(data: DescribeExecutionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExecutionsResponse>;
  /** 查询状态机详情 {@link DescribeFlowServiceDetailRequest} {@link DescribeFlowServiceDetailResponse} */
  DescribeFlowServiceDetail(data: DescribeFlowServiceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowServiceDetailResponse>;
  /** 查询状态机列表 {@link DescribeFlowServicesRequest} {@link DescribeFlowServicesResponse} */
  DescribeFlowServices(data?: DescribeFlowServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowServicesResponse>;
  /** 修改状态机 {@link ModifyFlowServiceRequest} {@link ModifyFlowServiceResponse} */
  ModifyFlowService(data: ModifyFlowServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFlowServiceResponse>;
  /** 启动执行 {@link StartExecutionRequest} {@link StartExecutionResponse} */
  StartExecution(data: StartExecutionRequest, config?: AxiosRequestConfig): AxiosPromise<StartExecutionResponse>;
  /** 停止状态机 {@link StopExecutionRequest} {@link StopExecutionResponse} */
  StopExecution(data: StopExecutionRequest, config?: AxiosRequestConfig): AxiosPromise<StopExecutionResponse>;
}

export declare type Versions = ["2020-07-22"];

export default Asw;
