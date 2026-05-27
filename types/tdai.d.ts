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
  /** 架构：共享版-intranet，企业版-userVpc */
  DeployPlace?: string;
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

/** 智能体值守任务信息 */
declare interface AgentDutyTask {
  /** 任务ID */
  TaskId?: string;
  /** 任务创建时间 */
  CreateTime?: string;
  /** 任务开始运行时间 */
  StartTime?: string;
  /** 任务结束时间 */
  FinishTime?: string;
  /** 任务状态 */
  Status?: string;
  /** 对外展示的Extra信息 */
  ResultExtraKey?: string[];
  /** 业务的额外敏感信息 */
  Extra?: ExtraInfo[];
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
  /** 部署位置,intranet-共享版，userVpc-专享版 */
  DeployPlace?: string;
  /** 关联的告警策略ID。 */
  PolicyIds?: string[];
  /** 无 */
  ClawConfig?: ClawConfigInfo;
  /** 无 */
  InstanceType?: string;
  /** 无 */
  AllowedActions?: string[];
  /** 无 */
  LastActiveTime?: string;
  /** 无 */
  Description?: string;
  /** 发货进度详情 */
  CreatingProgress?: CreatingProgress;
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

/** databaseClaw实例配置信息 */
declare interface ClawConfigInfo {
  /** 无 */
  TemplateId?: number;
  /** 无 */
  DbTypes?: string[];
  /** 无 */
  Deploy?: ClawDeployInfo;
}

/** databaseClaw实例部署详情 */
declare interface ClawDeployInfo {
  /** 无 */
  UserVpcId?: string;
  /** 无 */
  UserSubnetId?: string;
  /** 无 */
  UserVpcRegion?: string;
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

/** 发货步骤描述 */
declare interface CreatingProgress {
  /** 总步骤数 */
  TotalSteps?: number;
  /** 当前步骤 */
  CurrentStep?: number;
  /** 步骤详情 */
  Steps?: CreatingStepInfo[];
}

/** 发货步骤详情 */
declare interface CreatingStepInfo {
  /** 步骤名称 */
  StepName?: string;
  /** 步骤描述 */
  StepDesc?: string;
  /** 步骤状态 */
  Status?: string;
  /** 完成时间 */
  FinishTime?: string;
  /** 错误信息描述 */
  ErrMsg?: string;
}

/** 智能体值守任务额外信息 */
declare interface ExtraInfo {
  /** 出参额外信息的Key */
  Key?: string;
  /** 额外信息描述 */
  Description?: string;
  /** ExtraInfo的值 */
  Value?: string;
  /** 值的数据结构类型 */
  ValueType?: string;
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

/** Memory正式版实例列表元素信息 */
declare interface MemoryPlusInfo {
  /** 实例id */
  SpaceId?: string;
  /** 实例名称 */
  Name?: string;
  /** 描述 */
  Description?: string;
  /** 实例状态 */
  Status?: number;
  /** 地域 */
  Region?: string;
  /** 记忆条数 */
  MemoryUsage?: number;
  /** 当月积分数 */
  CreditUsage?: number;
  /** 资源标签 */
  ResourceTags?: ResourceTag[];
  /** 创建时间 */
  CreatedAt?: string;
  /** 隔离时间 */
  IsolatedAt?: string;
  /** 到期时间 */
  ExpiredAt?: string;
  /** 到期销毁时间 */
  DestroyAt?: string;
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

/** 资源tag */
declare interface ResourceTag {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 风险SQL智能体参数 */
declare interface SqlAgentParameter {
  /** 数据库实例信息列表 */
  InstanceInfos?: InstanceInfos[];
  /** 代码仓库信息 */
  CodeRepo?: CodeRepo;
}

/** 实例状态描述 */
declare interface StatusItem {
  /** 无 */
  Status?: string;
  /** 无 */
  Count?: number;
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

/** vdb数据库文档结构 */
declare interface VDBDocument {
  /** vdb document数据id */
  Id?: string;
  /** vdb document数据标量字段 */
  Fields?: VDBFieldMap[];
}

/** vdb数据库文档中键值结构 */
declare interface VDBFieldMap {
  /** vdb document字段名 */
  Name?: string;
  /** vdb document字段值 */
  Value?: string;
  /** vdb document字段类型 */
  Type?: string;
  /** 字段描述 */
  Description?: string;
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
  /** 无 */
  InstanceType?: string;
  /** 无 */
  TemplateId?: number;
  /** 无 */
  Skills?: string[];
  /** 无 */
  SoulId?: number;
  /** 无 */
  Description?: string;
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
  /** 输入内容 */
  InputContent: string;
  /** 实例ID */
  InstanceId: string;
  /** 对话窗口ID，空值表示新的会话 */
  ChatId?: string;
  /** 是否隐藏 */
  IsHidden?: boolean;
  /** 是否隐藏会话 */
  IsChatHidden?: boolean;
}

declare interface CreateChatCompletionResponse {
  /** 唯一请求 ID，每次请求都会返回。本接口为流式响应接口，当请求成功时，RequestId 会被放在 HTTP 响应的 Header "X-TC-RequestId" 中。 */
  RequestId?: string;
}

declare interface CreateMemoryPlusSpaceRequest {
  /** Memory 实例的自定义名称，用于唯一标识和管理实例。支持 60 个字符内的中英文、数字、中划线（-）及下划线（_）。 */
  Name?: string;
  /** emory 实例的简要描述，包括使用场景、用途或背景信息，便于日常运维识别。长度限制为 0-200 个字符。 */
  Description?: string;
  /** 以键值对（Key-Value）形式为 Memory 实例绑定的标签，用于项目管理、成本分摊、环境隔离等场景。 */
  ResourceTags?: ResourceTag[];
  /** 单次批量创建 Memory 实例的数量。取值范围为 1-50。 */
  GoodsNum?: number;
}

declare interface CreateMemoryPlusSpaceResponse {
  /** 实例 ID 列表。 */
  SpaceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentDutyTaskDetailRequest {
  /** 业务参数列表 */
  Parameters?: Parameter[];
}

declare interface DescribeAgentDutyTaskDetailResponse {
  /** 任务详细信息 */
  AgentDutyTask?: AgentDutyTask;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentDutyTasksRequest {
  /** agent实例ID */
  InstanceId: string;
  /** 会话ID */
  ChatId?: string;
  /** 查询开始位置 */
  Offset?: number;
  /** 列表查询数量 */
  Limit?: number;
  /** 任务启动时间 */
  StartTime?: string;
  /** 任务结束时间 */
  EndTime?: string;
  /** 任务类型 */
  AgentTaskType?: string;
  /** 业务参数 */
  Parameters?: Parameter[];
}

declare interface DescribeAgentDutyTasksResponse {
  /** 查询结果总数量 */
  TotalCount?: number;
  /** 任务详细信息 */
  DutyTasks?: AgentDutyTask[];
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
  /** 实例类型 */
  InstanceType?: string;
}

declare interface DescribeAgentInstancesResponse {
  /** 查询结果总数量 */
  TotalCount?: number;
  /** 智能体实例列表 */
  Items?: AgentInstance[];
  /** 无 */
  StatusCounts?: StatusItem[];
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
  /** 架构，共享版-intranet，企业版-userVpc */
  DeployPlace?: string;
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
  BeginStreamingTokenId?: number;
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

declare interface DescribeMemoryPlusRecordRequest {
  /** 查询的 Memory 实例 ID。 */
  SpaceId: string;
  /** 查询列表的起始位置（偏移量）。用于分页查询，指明从符合条件的第几条数据开始返回。 */
  Offset?: number;
  /** 单次查询返回的记录数量上限（分页大小）。 */
  Limit?: number;
  /** 查询的记忆类型。conversation：L0 原始对话。memory：L1 原子记忆。scene：L2 场景记忆。persona：L3 个性化画像。memory/persona：L1 原子记忆-画像型。memory/episodic：L1 原子记忆-事件型。memory/instruction：L1 原子记忆-指令型。 */
  RecordType?: string;
  /** 指定返回记录中的特定字段。 */
  Output?: string[];
  /** 过滤条件，当前仅支持 RecordType 为 conversation 的 session_id 过滤。 */
  Filters?: VDBFieldMap[];
  /** 查询结果列表的排序规则。ASC：升序。DESC：降序。 */
  OrderDirection?: string;
  /** 查询时间范围的起始时间点。 */
  StartTime?: string;
  /** 查询时间范围的结束时间点。 */
  EndTime?: string;
}

declare interface DescribeMemoryPlusRecordResponse {
  /** 查询结果总数量。 */
  TotalCount?: number;
  /** 查询的记忆数据。 */
  Documents?: VDBDocument[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMemoryPlusSpaceRequest {
  /** 指定查询的 Memory 实例 ID。 */
  SpaceId: string;
}

declare interface DescribeMemoryPlusSpaceResponse {
  /** Memory 实例 ID。 */
  SpaceId?: string;
  /** Memory 实例的自定义名称。 */
  Name?: string;
  /** Memory 实例的简要描述，包括使用场景、用途或背景信息，便于日常运维识别。 */
  Description?: string;
  /** 腾讯云账号的 APPID。 */
  AppId?: number;
  /** Memroy 实例所属地域。 */
  Region?: string;
  /** Memory 实例的标签信息。 */
  ResourceTags?: ResourceTag[];
  /** Memory 实例当前运行状态。1：运行中。2：创建中。3：销毁中。4：已销毁。5：隔离中。6：已隔离。7：恢复中。 */
  Status?: number;
  /** Memory 实例计费模式。-1：免费体验。0：包年包月。1：按量计费。 */
  PayMode?: number;
  /** Memory 版本信息：v1。 */
  Version?: string;
  /** Memory 当前已写入的记忆条数。 */
  MemoryUsage?: number;
  /** Memory 实例记忆条数配额上限。 */
  MemoryLimit?: number;
  /** Memory 实例当前 Credit 的使用数量。 */
  CreditUsage?: number;
  /** Memory 实例 Credit 的最大使用数量。 */
  CreditLimit?: number;
  /** Memory 实例的内网访问地址。 */
  AccessUrl?: string;
  /** Memory 实例的外网访问地址。 */
  WanAccessUrl?: string;
  /** Memory 实例的创建时间。 */
  CreatedAt?: string;
  /** Memory 实例的到期时间。 */
  ExpiredAt?: string;
  /** Memory 实例的隔离时间。 */
  IsolatedAt?: string;
  /** 到期销毁时间 */
  DestroyAt?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMemoryPlusSpacesRequest {
  /** 查询列表的起始位置（偏移量）。用于分页查询，指明从符合条件的第几条数据开始返回。 */
  Offset?: number;
  /** 单次查询返回的记录数量上限（分页大小）。 */
  Limit?: number;
  /** 查询实例名称或者实例id */
  SearchKeys?: string[];
  /** 实例状态枚举值：1： 运行中2： 创建中3： 删除中4： 已删除5： 隔离中6： 已隔离（进入回收站）7： 恢复中（从回收站恢复） */
  Status?: number[];
  /** 资源标签 */
  ResourceTags?: ResourceTag[];
  /** 排序字段 */
  Orderby?: string;
  /** 排序方向枚举值：ASC： 升序DESC： 降序 */
  OrderDirection?: string;
}

declare interface DescribeMemoryPlusSpacesResponse {
  /** 查询结果总数量。 */
  TotalCount?: number;
  /** 实例列表信息 */
  Items?: MemoryPlusInfo[];
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

declare interface DescribeServiceAccessKeyRequest {
  /** 指定 Memroy 实例 ID。 */
  ServiceId: string;
}

declare interface DescribeServiceAccessKeyResponse {
  /** 访问密钥。 */
  AuthKey?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyMemoryPlusSpaceRequest {
  /** 指定需要销毁的 Memory 实例 ID 列表。 */
  SpaceIds: string[];
}

declare interface DestroyMemoryPlusSpaceResponse {
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

declare interface IsolateMemoryPlusSpaceRequest {
  /** 指定需要放入回收站的 Memory 实例 ID 列表。 */
  SpaceIds: string[];
}

declare interface IsolateMemoryPlusSpaceResponse {
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

declare interface ModifyMemoryPlusSpaceRequest {
  /** 指定需要修改的 Memory 实例 ID。 */
  SpaceId: string;
  /** 指定修改后的实例名称。支持 60 个字符内 的中英文、数字、中划线（-）及下划线（_）。 */
  Name?: string;
  /** 指定修改后的实例描述。最多支持 200 个字符。 */
  Description?: string;
}

declare interface ModifyMemoryPlusSpaceResponse {
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

declare interface RecoverMemoryPlusSpaceRequest {
  /** 指定需要恢复的 Memory 实例 ID 列表。 */
  SpaceIds: string[];
}

declare interface RecoverMemoryPlusSpaceResponse {
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

declare interface StartAgentTaskRequest {
  /** 实例ID */
  InstanceId: string;
  /** 配置Token */
  InstanceToken?: string;
}

declare interface StartAgentTaskResponse {
  /** 任务ID */
  TaskId?: string;
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
  CreateChatCompletion(data: CreateChatCompletionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChatCompletionResponse>;
  /** 创建正式版 Memory 实例 {@link CreateMemoryPlusSpaceRequest} {@link CreateMemoryPlusSpaceResponse} */
  CreateMemoryPlusSpace(data?: CreateMemoryPlusSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMemoryPlusSpaceResponse>;
  /** 查询Agent实例值守任务详情 {@link DescribeAgentDutyTaskDetailRequest} {@link DescribeAgentDutyTaskDetailResponse} */
  DescribeAgentDutyTaskDetail(data?: DescribeAgentDutyTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentDutyTaskDetailResponse>;
  /** 查询Agent实例值守任务列表 {@link DescribeAgentDutyTasksRequest} {@link DescribeAgentDutyTasksResponse} */
  DescribeAgentDutyTasks(data: DescribeAgentDutyTasksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentDutyTasksResponse>;
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
  /** 查询正式版 Memory 实例记忆数据 {@link DescribeMemoryPlusRecordRequest} {@link DescribeMemoryPlusRecordResponse} */
  DescribeMemoryPlusRecord(data: DescribeMemoryPlusRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMemoryPlusRecordResponse>;
  /** 查询正式版 Memory 服务详情 {@link DescribeMemoryPlusSpaceRequest} {@link DescribeMemoryPlusSpaceResponse} */
  DescribeMemoryPlusSpace(data: DescribeMemoryPlusSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMemoryPlusSpaceResponse>;
  /** 查询正式版 Memory 实例列表 {@link DescribeMemoryPlusSpacesRequest} {@link DescribeMemoryPlusSpacesResponse} */
  DescribeMemoryPlusSpaces(data?: DescribeMemoryPlusSpacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMemoryPlusSpacesResponse>;
  /** 查询实例报告下载链接 {@link DescribeReportUrlRequest} {@link DescribeReportUrlResponse} */
  DescribeReportUrl(data?: DescribeReportUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReportUrlResponse>;
  /** 查询服务访问密钥 {@link DescribeServiceAccessKeyRequest} {@link DescribeServiceAccessKeyResponse} */
  DescribeServiceAccessKey(data: DescribeServiceAccessKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceAccessKeyResponse>;
  /** 销毁正式版 Memory 实例 {@link DestroyMemoryPlusSpaceRequest} {@link DestroyMemoryPlusSpaceResponse} */
  DestroyMemoryPlusSpace(data: DestroyMemoryPlusSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyMemoryPlusSpaceResponse>;
  /** 隔离Agent实例 {@link IsolateAgentInstanceRequest} {@link IsolateAgentInstanceResponse} */
  IsolateAgentInstance(data: IsolateAgentInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateAgentInstanceResponse>;
  /** 将 Memory 实例放入回收站 {@link IsolateMemoryPlusSpaceRequest} {@link IsolateMemoryPlusSpaceResponse} */
  IsolateMemoryPlusSpace(data: IsolateMemoryPlusSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateMemoryPlusSpaceResponse>;
  /** 配置智能体实例参数 {@link ModifyAgentInstanceParametersRequest} {@link ModifyAgentInstanceParametersResponse} */
  ModifyAgentInstanceParameters(data: ModifyAgentInstanceParametersRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentInstanceParametersResponse>;
  /** 修改会话标题 {@link ModifyChatTitleRequest} {@link ModifyChatTitleResponse} */
  ModifyChatTitle(data: ModifyChatTitleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyChatTitleResponse>;
  /** 修改正式版 Memory 实例 {@link ModifyMemoryPlusSpaceRequest} {@link ModifyMemoryPlusSpaceResponse} */
  ModifyMemoryPlusSpace(data: ModifyMemoryPlusSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMemoryPlusSpaceResponse>;
  /** 暂停Agent实例 {@link PauseAgentWorkRequest} {@link PauseAgentWorkResponse} */
  PauseAgentWork(data: PauseAgentWorkRequest, config?: AxiosRequestConfig): AxiosPromise<PauseAgentWorkResponse>;
  /** 解隔离Agent实例 {@link RecoverAgentInstanceRequest} {@link RecoverAgentInstanceResponse} */
  RecoverAgentInstance(data: RecoverAgentInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverAgentInstanceResponse>;
  /** 从回收站中恢复正式版 Memory 实例 {@link RecoverMemoryPlusSpaceRequest} {@link RecoverMemoryPlusSpaceResponse} */
  RecoverMemoryPlusSpace(data: RecoverMemoryPlusSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<RecoverMemoryPlusSpaceResponse>;
  /** 删除会话 {@link RemoveChatRequest} {@link RemoveChatResponse} */
  RemoveChat(data: RemoveChatRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveChatResponse>;
  /** 启动智能体任务 {@link StartAgentTaskRequest} {@link StartAgentTaskResponse} */
  StartAgentTask(data: StartAgentTaskRequest, config?: AxiosRequestConfig): AxiosPromise<StartAgentTaskResponse>;
  /** 下线Agent实例 {@link TerminateAgentInstanceRequest} {@link TerminateAgentInstanceResponse} */
  TerminateAgentInstance(data: TerminateAgentInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateAgentInstanceResponse>;
}

export declare type Versions = ["2025-07-17"];

export default Tdai;
