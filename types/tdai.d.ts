/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 智能体 */
declare interface Agent {
  /** 智能体Id */
  AgentId?: string;
  /** 智能体名称 */
  AgentName?: string;
  /** 智能体类型 */
  AgentInternalName?: string;
  /** 智能体状态 */
  AgentStatus?: string;
  /** 默认版本 */
  DefaultVersion?: string;
  /** 智能体模式 */
  AgentType?: string;
  /** 描述 */
  Description?: string;
  /** 创建者 */
  Creator?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新者 */
  Updater?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 智能体实例 */
declare interface AgentInstance {
  /** 智能体实例ID */
  InstanceId?: string;
  /** 智能体实例名称 */
  InstanceName?: string;
  /** 智能体ID */
  AgentId?: string;
  /** 智能体名称 */
  AgentName?: string;
  /** 智能体类型 */
  AgentInternalName?: string;
  /** 智能体服务模式 */
  AgentType?: string;
  /** 智能体版本 */
  AgentVersion?: string;
  /** 智能体实例状态 */
  Status?: string;
  /** 智能体实例参数列表 */
  Parameters?: Parameter[];
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
  /** 资源绑定Tag列表 */
  Tags?: TagItem[];
}

/** 会话信息 */
declare interface ChatBrief {
  /** 主账号Id */
  AppId?: number;
  /** 主账号uin */
  Uin?: string;
  /** 子账号uin */
  OwnerUin?: string;
  /** 智能体实例ID */
  InstanceId?: string;
  /** 会话ID */
  ChatId?: string;
  /** 创建时间 */
  CreateTime?: number;
  /** 会话标题 */
  Title?: string;
  /** 会话状态 */
  Status?: string;
  /** 最后一条流式ID */
  LastStreamingId?: string;
  /** 最后一条流式TokenID */
  LastStreamingTokenId?: number;
}

/** 会话详情 */
declare interface ChatDetail {
  /** 角色 */
  Role?: string;
  /** 用户消息 */
  UserMessage?: string;
  /** 助手消息 */
  AssistantMessage?: CreateChatCompletionRes[] | null;
}

/** 仓库信息 */
declare interface CodeRepo {
  /** 代码仓库地址 */
  RepoUrl: string;
  /** 分支名 */
  Branch: string;
  /** Commit信息 */
  GitCommitPipelines?: string[];
  /** 数据库ORM类型 */
  GitORMType?: string;
  /** 代码编写语言 */
  GitCodeLanguage?: string;
}

/** 对话接口出参 */
declare interface CreateChatCompletionRes {
  /** 枚举值，返回的数据类型 */
  Object?: string;
  /** 消息时间戳 */
  Created?: number;
  /** 输出模型 */
  Model?: string;
  /** 用户标识 */
  AppId?: number;
  /** 主账户标识 */
  OwnerUin?: string;
  /** 当前账户标识 */
  Uin?: string;
  /** Request ID */
  RequestId?: string;
  /** 当前会话ID */
  ChatId?: string;
  /** 当前流ID */
  StreamingId?: string;
  /** 当前任务ID */
  TaskId?: string;
  /** 消息的数据详情 */
  Choices?: UploadChoice[];
}

/** 实例信息 */
declare interface InstanceInfos {
  /** 数据库地域 */
  Region: string;
  /** 数据库实例id */
  InstanceId: string;
  /** 数据库名称 */
  DatabaseName?: string;
  /** 表名称 */
  TableName?: string;
}

/** 智能体实例的参数值 */
declare interface Parameter {
  /** 参数键 */
  Key: string | null;
  /** 参数值 */
  Value: string | null;
  /** 枚举值，可取值包括：string(字符串), int(整型), float(浮点型), bool(布尔型), struct(结构体), array(数组), */
  ValueType: string | null;
}

/** 风险SQL智能体参数 */
declare interface SqlAgentParameter {
  /** 数据库实例信息列表 */
  InstanceInfos?: InstanceInfos[];
  /** 代码仓库信息 */
  CodeRepo?: CodeRepo;
}

/** 通过标签对资源进行过滤 */
declare interface TagFilter {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string[];
}

/** 资源标签 */
declare interface TagItem {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 流式输出消息数据体 */
declare interface UploadChoice {
  /** 消息索引 */
  Index?: number;
  /** 当前消息步骤 */
  StepNo?: number;
  /** 当前步骤 */
  CurrentStep?: string;
  /** 增量信息 */
  Delta?: UploadDelta;
  /** 结束原因 */
  FinishReason?: string;
  /** 错误信息，FinishReason为error时有效 */
  ErrorMessage?: string;
}

/** 流式接口当前消息数据详细内容 */
declare interface UploadDelta {
  /** 步骤摘要 */
  StepBrief?: string;
  /** 步骤详情 */
  Content?: string;
}

declare interface ContinueAgentWorkRequest {
  /** 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选 */
  InstanceId: string;
  /** Agent任务类型 */
  AgentTaskType?: string;
}

declare interface ContinueAgentWorkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentInstanceRequest {
  /** 智能体ID */
  AgentId?: string;
  /** 智能体版本 */
  AgentVersion?: string;
  /** 实例名 */
  InstanceName?: string;
  /** 智能体实例的参数列表 */
  Parameters?: Parameter[];
  /** 资源的标签信息 */
  Tags?: TagItem[];
}

declare interface CreateAgentInstanceResponse {
  /** 智能体实例ID */
  InstanceId?: string;
  /** 智能体实例名称 */
  InstanceName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChatCompletionRequest {
  /** 是否隐藏 */
  IsHidden?: boolean;
  /** 是否隐藏会话 */
  IsChatHidden?: boolean;
}

declare interface CreateChatCompletionResponse {
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface DescribeAgentDutyTaskDetailRequest {
  /** 业务参数列表 */
  Parameters?: Parameter[];
}

declare interface DescribeAgentDutyTaskDetailResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentDutyTasksRequest {
  /** 查询开始位置 */
  Offset?: number;
  /** 列表查询数量 */
  Limit?: number;
}

declare interface DescribeAgentDutyTasksResponse {
  /** 查询结果总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentInstanceRequest {
  /** 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选 */
  InstanceId?: string;
}

declare interface DescribeAgentInstanceResponse {
  /** 智能体实例详情 */
  AgentInstance?: AgentInstance;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentInstancesRequest {
  /** 查询开始位置 */
  Offset?: number;
  /** 列表查询数量 */
  Limit?: number;
  /** 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选 */
  InstanceId?: string;
  /** 实例名，为空时查询所有，如果填写则会根据InstanceName筛选 */
  InstanceName?: string;
  /** 智能体ID，为空时查询所有，如果填写则会根据AgentId筛选 */
  AgentId?: string;
  /** 智能体名称，为空时查询所有，如果填写则会根据AgentName筛选 */
  AgentName?: string;
  /** 智能体类型，为空时查询所有，如果填写则会根据AgentName筛选 */
  AgentInternalName?: string;
  /** 智能体实例状态，为空时查询所有，如果填写则会根据Status筛选 */
  Status?: string;
  /** 标签过滤信息 */
  TagFilter?: TagFilter[];
}

declare interface DescribeAgentInstancesResponse {
  /** 查询结果总数量 */
  TotalCount?: number;
  /** 智能体实例列表 */
  Items?: AgentInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentsRequest {
  /** 查询开始位置 */
  Offset?: number;
  /** 列表查询数量 */
  Limit?: number;
  /** 智能体ID，为空时查询所有，如果填写则会根据AgentId筛选 */
  AgentId?: string;
  /** 智能体名称，为空时查询所有，如果填写则会根据AgentName筛选 */
  AgentName?: string;
  /** 智能体类型，为空时查询所有，如果填写则会根据AgentName筛选 */
  AgentInternalName?: string;
  /** 智能体状态，为空时查询所有，如果填写则会根据AgentStatus筛选 */
  AgentStatus?: string;
}

declare interface DescribeAgentsResponse {
  /** 查询结果总数量 */
  TotalCount?: number;
  /** 智能体列表 */
  Items?: Agent[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChatDetailRequest {
  /** 智能体ID */
  InstanceId: string;
  /** 会话Id */
  ChatId?: string;
  /** 流ID */
  StreamingId?: string;
  /** 开始拉取的流式TokenID。0表示从该流最早的TokenID开始获取 */
  BeginStreamingTokenId?: string;
  /** 单次获取的token数量，默认2000 */
  TokenLimit?: number;
}

declare interface DescribeChatDetailResponse {
  /** 主账号ID */
  AppId?: number;
  /** 主账号Uin */
  Uin?: string;
  /** 子账号Uin */
  OwnerUin?: string;
  /** 智能体实例ID */
  InstanceId?: string;
  /** 会话ID */
  ChatId?: string;
  /** 最后一条流式TokenID */
  LastStreamingTokenId?: number;
  /** Streaming数量 */
  StreamingCount?: number;
  /** 对话流列表 */
  Streamings?: ChatDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChatsRequest {
  /** 智能体ID */
  InstanceId: string;
  /** 查询开始位置 */
  Offset?: number;
  /** 列表查询数量 */
  Limit?: number;
}

declare interface DescribeChatsResponse {
  /** 查询结果总数量 */
  TotalCount?: number;
  /** 对话流列表 */
  Chats?: ChatBrief[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReportUrlRequest {
}

declare interface DescribeReportUrlResponse {
  /** 下载地址 */
  DownloadUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateAgentInstanceRequest {
  /** 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选 */
  InstanceId: string;
}

declare interface IsolateAgentInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentInstanceParametersRequest {
  /** 实例ID */
  InstanceId: string;
  /** 任务类型, 可选，默认default */
  TaskType?: string;
  /** 更新的参数列表 */
  Parameters?: Parameter;
  /** 风险SQL智能体参数列表 */
  SqlAgentParameter?: SqlAgentParameter;
}

declare interface ModifyAgentInstanceParametersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyChatTitleRequest {
  /** 智能体ID */
  InstanceId: string;
  /** 会话Id */
  ChatId?: string;
  /** 标题 */
  Title?: string;
}

declare interface ModifyChatTitleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PauseAgentWorkRequest {
  /** 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选 */
  InstanceId: string;
  /** Agent任务类型 */
  AgentTaskType?: string;
}

declare interface PauseAgentWorkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RecoverAgentInstanceRequest {
  /** 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选 */
  InstanceId: string;
}

declare interface RecoverAgentInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveChatRequest {
  /** 智能体ID */
  InstanceId: string;
  /** 会话Id */
  ChatId?: string;
}

declare interface RemoveChatResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateAgentInstanceRequest {
  /** 实例ID，为空时查询所有，如果填写则会根据InstanceId筛选 */
  InstanceId: string;
}

declare interface TerminateAgentInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tdai 腾讯云数据库 AI 服务} */
declare interface Tdai {
  (): Versions;
  /** 重启Agent实例的值守任务工作 {@link ContinueAgentWorkRequest} {@link ContinueAgentWorkResponse} */
  ContinueAgentWork(data: ContinueAgentWorkRequest, config?: AxiosRequestConfig): AxiosPromise<ContinueAgentWorkResponse>;
  /** 创建Agent实例 {@link CreateAgentInstanceRequest} {@link CreateAgentInstanceResponse} */
  CreateAgentInstance(data?: CreateAgentInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentInstanceResponse>;
  /** 创建一个聊天会话 {@link CreateChatCompletionRequest} {@link CreateChatCompletionResponse} */
  CreateChatCompletion(data?: CreateChatCompletionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChatCompletionResponse>;
  /** 查询Agent实例值守任务详情 {@link DescribeAgentDutyTaskDetailRequest} {@link DescribeAgentDutyTaskDetailResponse} */
  DescribeAgentDutyTaskDetail(data?: DescribeAgentDutyTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentDutyTaskDetailResponse>;
  /** 查询Agent实例值守任务列表 {@link DescribeAgentDutyTasksRequest} {@link DescribeAgentDutyTasksResponse} */
  DescribeAgentDutyTasks(data?: DescribeAgentDutyTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentDutyTasksResponse>;
  /** 查询指定Agent实例的详细信息 {@link DescribeAgentInstanceRequest} {@link DescribeAgentInstanceResponse} */
  DescribeAgentInstance(data?: DescribeAgentInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentInstanceResponse>;
  /** 查询Agent实例列表 {@link DescribeAgentInstancesRequest} {@link DescribeAgentInstancesResponse} */
  DescribeAgentInstances(data?: DescribeAgentInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentInstancesResponse>;
  /** 查询智能体列表 {@link DescribeAgentsRequest} {@link DescribeAgentsResponse} */
  DescribeAgents(data?: DescribeAgentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentsResponse>;
  /** 获取会话详情 {@link DescribeChatDetailRequest} {@link DescribeChatDetailResponse} */
  DescribeChatDetail(data: DescribeChatDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChatDetailResponse>;
  /** 获取会话列表 {@link DescribeChatsRequest} {@link DescribeChatsResponse} */
  DescribeChats(data: DescribeChatsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChatsResponse>;
  /** 查询实例报告下载链接 {@link DescribeReportUrlRequest} {@link DescribeReportUrlResponse} */
  DescribeReportUrl(data?: DescribeReportUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportUrlResponse>;
  /** 隔离Agent实例 {@link IsolateAgentInstanceRequest} {@link IsolateAgentInstanceResponse} */
  IsolateAgentInstance(data: IsolateAgentInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateAgentInstanceResponse>;
  /** 配置智能体实例参数 {@link ModifyAgentInstanceParametersRequest} {@link ModifyAgentInstanceParametersResponse} */
  ModifyAgentInstanceParameters(data: ModifyAgentInstanceParametersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentInstanceParametersResponse>;
  /** 修改会话标题 {@link ModifyChatTitleRequest} {@link ModifyChatTitleResponse} */
  ModifyChatTitle(data: ModifyChatTitleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyChatTitleResponse>;
  /** 暂停Agent实例 {@link PauseAgentWorkRequest} {@link PauseAgentWorkResponse} */
  PauseAgentWork(data: PauseAgentWorkRequest, config?: AxiosRequestConfig): AxiosPromise<PauseAgentWorkResponse>;
  /** 解隔离Agent实例 {@link RecoverAgentInstanceRequest} {@link RecoverAgentInstanceResponse} */
  RecoverAgentInstance(data: RecoverAgentInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverAgentInstanceResponse>;
  /** 删除会话 {@link RemoveChatRequest} {@link RemoveChatResponse} */
  RemoveChat(data: RemoveChatRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveChatResponse>;
  /** 下线Agent实例 {@link TerminateAgentInstanceRequest} {@link TerminateAgentInstanceResponse} */
  TerminateAgentInstance(data: TerminateAgentInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateAgentInstanceResponse>;
}

export declare type Versions = ["2025-07-17"];

export default Tdai;
