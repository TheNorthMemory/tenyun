/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** Agent 的 A2A 对外互通配置与注册态 */
declare interface A2AConfig {
  /** Agent 级唯一 A2A 开关 */
  A2AEnabled?: boolean | null;
  /** 对外 A2A handle（已注册时；仅 DescribeAgent / ModifyAgentA2AConfig 填充） */
  A2APublicRef?: string | null;
  /** 对外 A2A card 发现地址（已注册时） */
  A2AEndpoint?: string | null;
  /** 注册状态：DRAFT / REGISTERED / DISABLED / NONE / UNKNOWN */
  A2AStatus?: string | null;
}

/** A2A skill 录入项（注册外部 Agent 时传入） */
declare interface A2ASkillInput {
  /** A2A skill ID */
  A2ASkillId?: string | null;
  /** skill 名称 */
  Name?: string | null;
  /** skill 描述 */
  Description?: string | null;
  /** 标签 */
  Tags?: string[] | null;
  /** 示例 */
  Examples?: string[] | null;
}

/** A2A skill 列表项（出参用，来自 A2A card 解析结果） */
declare interface A2ASkillItem {
  /** A2A skill ID（加 A2A 前缀与内部 SkillId 概念区分） */
  A2ASkillId?: string | null;
  /** skill 名称 */
  Name?: string | null;
  /** skill 描述 */
  Description?: string | null;
}

/** Agent 列表项（原 AgentSummary；Agent 级纯字段，不再内嵌版本信息） */
declare interface AgentItem {
  /** Agent 业务 ID（全局唯一，数字字符串形态） */
  AgentId?: string | null;
  /** Agent 名称 */
  AgentName?: string | null;
  /** Agent 描述；未填写时缺省 */
  Description?: string | null;
  /** 头像 URL；未设置时缺省 */
  AvatarUrl?: string | null;
  /** 创建时间，RFC3339 UTC 格式（如 2026-06-01T09:00:00Z） */
  CreatedTime?: string | null;
  /** 更新时间，RFC3339 UTC 格式（如 2026-09-10T15:20:00Z） */
  ModifiedTime?: string | null;
  /** Agent 级 A2A 开关。false 恒输出（未开启不等于字段缺失）；A2AEndpoint / A2AStatus 由本接口在 A2A 开启时直接下发 */
  A2AEnabled?: boolean | null;
  /** 历史会话总数（t_managed_agent_sessions 未软删计数，含全部状态）。注意与 DescribeAgent.ActiveSessionCount（活跃会话数）口径不同 */
  SessionCount?: number | null;
  /** 最新版本的模型标识，取 latest_version_id 指向版本的 model；Agent 尚无版本时缺省 */
  Model?: string | null;
  /** 最新版本 ID（latest_version_id 转字符串，19 位雪花数字形态）；Agent 尚无版本时缺省 */
  LatestVersionId?: string | null;
  /** 最新版本名（可能为 default / test-N / prod-N 任意类型）；Agent 尚无版本时缺省 */
  LatestVersionName?: string | null;
  /** 对外 A2A card 发现地址（Agent Card JSON 地址），仅 A2AEnabled=true 的行下发；未注册 / registry 读失败时缺省 */
  A2AEndpoint?: string | null;
  /** A2A 注册态：DRAFT / REGISTERED / DISABLED / NONE / UNKNOWN，仅 A2AEnabled=true 的行下发，与 DescribeAgent.A2AConfig.A2AStatus 同枚举；用于「开关已开但地址尚未生成」的空态文案 */
  A2AStatus?: string | null;
  /** 公网链接访问开关。false 恒输出（未开启不等于字段缺失） */
  PublicApiEnabled?: boolean | null;
  /** 公网访问地址，仅 PublicApiEnabled=true 的行下发。固定拼法 https://{AgentId}-{region}.{endpoint_suffix}，与 DescribeAgentPublicAccess.Url 同规则；endpoint_suffix 未配置时为空 */
  PublicApiUrl?: string | null;
  /** 创建人 UIN（建号时落库的 sub_account_uin；主账号自建时为主账号 uin）。注意语义为「实际操作建号的账号」 */
  CreatorUin?: string | null;
  /** 绑定的 OneID 企业账号 ID（数字字符串形态，如 1438693592234206274）；空=未绑定（缺省）。与 DescribeAgent.AgentInfo.AccountId 同源同语义；创建时可选传入，之后不可变 */
  AccountId?: string | null;
}

/** Agent 版本列表项（原 AgentVersionSummary / AgentVersionBrief 合并，字段取并集） */
declare interface AgentVersionItem {
  /** 版本 ID（雪花算法生成的数字字符串，唯一标识） */
  VersionId?: string | null;
  /** 版本名称，形如 default / test-N / prod-N（N 为同类型版本的自增序号） */
  VersionName?: string | null;
  /** 版本类型（服务端按 VersionName 派生）：DEFAULT（默认版本，可编辑）/ TEST（测试版本，可编辑）/ PROD（生产版本，内容冻结） */
  VersionType?: string | null;
  /** 版本绑定的模型标识；未设置时缺省 */
  Model?: string | null;
  /** 版本运行时使用的沙箱模板业务 ID；空字符串表示使用默认沙箱 */
  SandboxTemplateId?: string | null;
  /** 版本状态：DRAFT（草稿）/ ENABLED（已启用）/ DISABLED（已停用） */
  Status?: string | null;
  /** 该版本累计承接的会话总数（历史累计值，只增不减） */
  SessionCount?: number | null;
  /** 创建时间，RFC3339 UTC 格式（如 2026-08-01T10:00:00Z） */
  CreatedTime?: string | null;
  /** 更新时间，RFC3339 UTC 格式（如 2026-08-10T15:30:00Z） */
  ModifiedTime?: string | null;
}

/** 内置模型信息 */
declare interface BuiltinModel {
  /** 模型唯一标识 */
  ModelId?: string;
  /** 模型名称 */
  Name?: string | null;
  /** 供应商，如 TENCENT、OPENAI、ANTHROPIC、DEEPSEEK 等 */
  Vendor?: string | null;
  /** 最大输出 Token 数 */
  MaxOutputTokens?: number | null;
  /** 最大输入 Token 数 */
  MaxInputTokens?: number | null;
  /** 是否支持函数调用（Tool Call） */
  SupportsToolCall?: boolean | null;
  /** 是否支持视觉（图片输入） */
  SupportsImages?: boolean | null;
  /** 模型中文描述 */
  DescriptionZh?: string | null;
  /** 模型英文描述 */
  DescriptionEn?: string | null;
  /** 模型标签列表 */
  Tags?: string[] | null;
  /** 支持的客户端列表 */
  Clients?: string[] | null;
  /** 服务接入地址 */
  ServiceEndpoint?: string | null;
  /** 状态：ENABLED（已启用）/ DISABLED（已停用） */
  Status?: string | null;
  /** 本企业内绑定该模型的 Agent 数（过滤软删除 Agent/版本与调试 Agent） */
  AgentCount?: number | null;
}

/** 聊天接入点。EndpointType 现在就引入枚举：当前仅返回一个 PUBLIC 元素，将来新增私网端点与 VPC 属性为纯增量。 */
declare interface ChatEndpoint {
  /** 接入点类型：PUBLIC（公网）/ PRIVATE（私网，预留） */
  EndpointType?: string | null;
  /** 接入点地址 */
  Url?: string | null;
}

/** 连接器详情（主表 + 最新版本展开）。 */
declare interface ConnectorInfo {
  /** 连接器 ID */
  ConnectorId?: string;
  /** 连接器短标识（终身不变，跨版本稳定） */
  ConnectorSlug?: string;
  /** 版本级连接器密钥 */
  ConnectorKey?: string;
  /** 连接器名称 */
  Name?: string;
  /** 连接器描述 */
  Description?: string;
  /** 头像 URL */
  AvatarUrl?: string;
  /** 连接器来源：ENTERPRISE_AGENT / ASSISTANT */
  Source?: string;
  /** 归属企业 ID */
  EnterpriseId?: string;
  /** 连接器类型：MCP_SERVER / A2A / API_SERVICE */
  Type?: string;
  /** 上游服务地址 */
  ServiceUrl?: string;
  /** 授权方式列表：NONE / ONEID / OAUTH2_IDP */
  AuthModes?: string[];
  /** 最新版本号 */
  LatestVersionNo?: number;
  /** 连接器状态：ACTIVE / DISABLED */
  Status?: string;
  /** 创建人 ID */
  CreatorId?: string;
  /** 创建时间（ISO8601，UTC） */
  CreatedTime?: string;
  /** 最后修改时间（ISO8601，UTC） */
  ModifiedTime?: string;
}

/** 连接器引用入参 */
declare interface ConnectorRefInput {
  /** connector 主表 ID（雪花 ID 数字串） */
  ConnectorId?: string;
}

/** 全局专家计数 */
declare interface ExpertCounts {
  /** 内置专家数 */
  Builtin?: number | null;
  /** 自建专家数 */
  Custom?: number | null;
  /** 总数 */
  Total?: number | null;
}

/** 专家列表/详情项 */
declare interface ExpertItem {
  /** 专家来源：builtin、custom */
  Source?: string;
  /** 展示名 */
  DisplayName?: string;
  /** 描述 */
  Description?: string;
  /** 图标 URL */
  Icon?: string;
  /** 是否启用 */
  Enabled?: boolean;
  /** 下载 URL */
  DownloadUrl?: string;
  /** 更新时间 */
  ModifiedTime?: string;
  /** 启停状态：enabled、disabled */
  Status?: string;
  /** 专家标识 */
  ExpertId?: string | null;
  /** 当前生效版本号 */
  ExpertVersion?: string | null;
}

/** 外部 Agent 列表/详情项 */
declare interface ExternalAgentInfo {
  /** 外部 A2A agent ID */
  A2AAgentId?: string | null;
  /** 外部 Agent 名称 */
  Name?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 外部 A2A Server URL */
  Endpoint?: string | null;
  /** 绑定记录 ID（已绑定时返回） */
  BindingId?: string | null;
  /** 是否已绑定到当前 Agent */
  Bound?: boolean | null;
  /** 头像地址（取自 provider card 的 iconUrl） */
  IconUrl?: string | null;
  /** 外部 agent card 声明的版本号 */
  A2AVersion?: string | null;
  /** A2A card skills 集合 */
  A2ASkillSet?: A2ASkillItem[] | null;
}

/** 云 API 通用过滤结构。多个 Filter 之间为 AND 关系；同一 Filter 内多个 Values 为 OR 关系。 */
declare interface Filter {
  /** 过滤属性名 */
  Name?: string | null;
  /** 过滤值列表（同一 Filter 内多个值为 OR 关系） */
  Values?: string[] | null;
  /** 是否精确匹配，默认 false（模糊匹配） */
  ExactMatch?: boolean | null;
}

/** 消息事件 */
declare interface MessageEvent {
  /** 序号 */
  Sequence?: number | null;
  /** 类型 USER/TOOL/ASSISTANT */
  EventType?: string | null;
  /** 发生时间 ISO8601 */
  OccurredAt?: string | null;
  /** 消息内容 */
  Message?: MessageEventMessage | null;
  /** 工具调用 */
  ToolCall?: MessageEventToolCall | null;
}

/** 消息内容 */
declare interface MessageEventMessage {
  /** 文本内容 */
  Content?: string | null;
  /** Token用量 */
  TokenUsage?: TokenUsage | null;
}

/** 工具调用 */
declare interface MessageEventToolCall {
  /** 调用ID */
  ToolCallId?: string | null;
  /** 工具名 */
  ToolName?: string | null;
  /** 状态 PENDING/IN_PROGRESS/SUCCEEDED/FAILED */
  Status?: string | null;
  /** 工具调用Input（已递归脱敏，JSON 字符串） */
  Input?: string | null;
  /** 工具调用Output（已递归脱敏，JSON 字符串） */
  Output?: string | null;
  /** 结束时间 */
  EndedAt?: string | null;
  /** 耗时毫秒 */
  DurationMs?: number | null;
  /** 调用开始时间（RFC3339 格式） */
  StartedAt?: string | null;
}

/** 路由项 */
declare interface RoutingItem {
  /** 版本 ID */
  VersionId?: string | null;
  /** 权重，(0, 1] 之间的浮点百分比 */
  Weight?: number | null;
}

/** 会话列表项 */
declare interface SessionItem {
  /** 会话 ID */
  SessionId?: string | null;
  /** 会话名称（AI 生成标题或用户改名；缺失时为空） */
  SessionName?: string | null;
  /** Agent 业务 ID */
  AgentId?: string | null;
  /** Agent 名称 */
  AgentName?: string | null;
  /** 会话使用的版本名称（与 VersionId 区分：此为版本名，非 ID；原 AgentVersion） */
  VersionName?: string | null;
  /** 会话使用的 Agent 版本 ID */
  VersionId?: string | null;
  /** 会话状态 */
  Status?: string | null;
  /** 创建者 Uin */
  Creator?: string | null;
  /** 会话来源 */
  Source?: string | null;
  /** 创建时间（RFC3339） */
  CreatedTime?: string | null;
  /** 更新时间（RFC3339） */
  ModifiedTime?: string | null;
}

/** 全局技能计数 */
declare interface SkillCounts {
  /** 内置技能数 */
  Builtin?: number | null;
  /** 自建技能数 */
  Custom?: number | null;
  /** 总数 */
  Total?: number | null;
}

/** Skill 列表项（按列表页展示裁剪：名称/版本/描述/状态/操作五列 + 编排所需的 Source 与 DownloadUrl） */
declare interface SkillItem {
  /** 技能来源：BUILTIN（内置）/ CUSTOM（自建）/ AUTHORIZED（企业授权） */
  Source?: string;
  /** slug（仅 custom 返回） */
  Name?: string;
  /** 展示名 */
  DisplayName?: string;
  /** 描述 */
  Description?: string;
  /** 图标 URL */
  Icon?: string;
  /** 是否启用 */
  Enabled?: boolean;
  /** 下载 URL */
  DownloadUrl?: string;
  /** 技能标识 */
  SkillId?: string;
  /** 当前生效版本号 */
  SkillVersion?: string | null;
  /** 创建时间，RFC3339 UTC 格式（如 2026-08-11T09:23:10Z） */
  CreateTime?: string;
  /** 更新时间，RFC3339 UTC 格式（如 2026-09-15T06:51:26Z） */
  UpdateTime?: string;
}

/** Token用量 */
declare interface TokenUsage {
  /** 输入Token */
  InputTokens?: number | null;
  /** 输出Token */
  OutputTokens?: number | null;
  /** 总Token */
  TotalTokens?: number | null;
  /** 统计口径 */
  Scope?: string | null;
}

declare interface BindExternalAgentRequest {
  /** TMA managed agent 业务 ID（CloudAgentID） */
  AgentId: string;
  /** 已注册的外部 A2A agent ID */
  A2AAgentId: string;
  /** 版本 ID */
  VersionId?: string;
}

declare interface BindExternalAgentResponse {
  /** 操作结果状态（大写枚举）：BOUND=已绑定 / UNBOUND=已解绑 */
  Status?: string | null;
  /** 绑定记录 ID（自增 ID 字符串） */
  BindingId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentRequest {
  /** Agent 名称 */
  AgentName: string;
  /** Agent 描述 */
  Description?: string;
  /** 头像 URL */
  AvatarUrl?: string;
  /** 模型标识 */
  Model?: string;
  /** Manifest v2.0 原文（JSON 字符串），作为 default 版本初始内容。ConnectorSet 非空时 Manifest 不可为空，否则返回 InvalidParameter */
  Manifest?: string;
  /** 该 Agent 最终绑定的连接器集合（全量覆盖语义）：缺省 = 不绑定连接器；非空 = 物化为 manifest v2 mcp_servers 网关条目。ConnectorSet 非空时 Manifest 不可为空，否则返回 InvalidParameter */
  ConnectorSet?: ConnectorRefInput[];
  /** 绑定的 OneID 企业账号 ID。非空时必须是当前主账号已在企业授权表（t_managed_agent_enterprise_authorization）中授权的租户，否则返回 UnauthorizedOperation.AccountNotAuthorized。绑定后不可修改。TrimSpace 后长度 1~64 字符 */
  AccountId?: string;
}

declare interface CreateAgentResponse {
  /** Agent 业务 ID */
  AgentId?: string;
  /** Agent 名称 */
  AgentName?: string;
  /** Agent 描述 */
  Description?: string;
  /** 头像 URL */
  AvatarUrl?: string;
  /** 是否调试 Agent */
  IsDebug?: boolean;
  /** 创建时间（RFC3339） */
  CreatedTime?: string;
  /** 更新时间（RFC3339） */
  ModifiedTime?: string;
  /** 流量路由配置（VersionId 恒为字符串，防 JS 精度丢失） */
  RoutingSet?: RoutingItem[];
  /** A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构） */
  A2AConfig?: A2AConfig;
  /** 绑定的 OneID 企业账号 ID。允许为空：未绑定的存量与新建 Agent 该字段缺省，绑定后回显绑定值 */
  AccountId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentSessionRequest {
  /** Agent 业务 ID */
  AgentId: string;
  /** 指定版本 ID（可选）。非空且合法时固定使用该版本，跳过 routing_config 权重挑选；指定版本需归属同一 Agent 且未被废弃 */
  VersionId?: string;
}

declare interface CreateAgentSessionResponse {
  /** 会话 ID */
  SessionId?: string;
  /** 可用的聊天接入点列表（当前仅含一个 PUBLIC 公网接入点；空数组 = 无可用接入点） */
  EndpointSet?: ChatEndpoint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentVersionFromSourceRequest {
  /** Agent 业务 ID */
  AgentId: string;
  /** 源版本 ID，同 Agent 下未 DISABLED 的任意版本 */
  SourceVersionId: string;
  /** 可选，覆盖源版本的 Model */
  Model?: string;
  /** 可选，覆盖源版本的 Description */
  Description?: string;
  /** 可选，完整 v2.0 manifest JSON 字符串；传入则整体覆盖源版本 manifest */
  Manifest?: string;
  /** 沙箱模板 ID。可选，patch 语义：null 沿用源版本绑定的模板；空串解绑（恢复系统默认模板）；非空时模板须属于当前企业且可用（未删除、状态正常）。 */
  SandboxTemplateId?: string;
}

declare interface CreateAgentVersionFromSourceResponse {
  /** 版本 ID */
  VersionId?: string;
  /** Agent 业务 ID */
  AgentId?: string;
  /** 版本名称 */
  VersionName?: string;
  /** 版本类型：DEFAULT / TEST / PROD */
  VersionType?: string;
  /** 版本变更说明 */
  Description?: string;
  /** 模型标识 */
  Model?: string;
  /** Manifest v2.0 精简 manifest 原文（JSON 字符串） */
  Manifest?: string;
  /** 版本状态：DRAFT / ENABLED / DISABLED */
  Status?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间 */
  ModifiedTime?: string;
  /** 绑定的沙箱模板 ID；未绑定时为空，创建会话沙箱使用系统默认模板。 */
  SandboxTemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentVersionRequest {
  /** Agent 业务 ID */
  AgentId: string;
  /** Manifest v2.0 精简 manifest 原文（JSON 对象序列化后的字符串） */
  Manifest: string;
  /** 模型标识 */
  Model?: string;
  /** 版本变更说明 */
  Description?: string;
  /** 沙箱模板 ID。可选；传入时模板须属于当前企业且可用（未删除、状态正常），绑定到新建的 test/prod 版本。 */
  SandboxTemplateId?: string;
}

declare interface CreateAgentVersionResponse {
  /** 版本 ID */
  VersionId?: string;
  /** Agent 业务 ID */
  AgentId?: string;
  /** 版本名称 */
  VersionName?: string;
  /** 版本类型：DEFAULT / TEST / PROD */
  VersionType?: string;
  /** 版本变更说明 */
  Description?: string;
  /** 模型标识 */
  Model?: string;
  /** Manifest v2.0 精简 manifest 原文（JSON 字符串） */
  Manifest?: string;
  /** 版本状态：DRAFT / ENABLED / DISABLED */
  Status?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间 */
  ModifiedTime?: string;
  /** 绑定的沙箱模板 ID；未绑定时为空，创建会话沙箱使用系统默认模板。 */
  SandboxTemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAgentRequest {
  /** Agent 业务 ID */
  AgentId: string;
}

declare interface DeleteAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentListRequest {
  /** 偏移量，从 0 开始 */
  Offset?: number;
  /** 返回数量，缺省为 20，最大 100 */
  Limit?: number;
  /** 过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系 */
  Filters?: Filter[];
  /** 排序字段 */
  SortBy?: string;
  /** 排序方向：ASC / DESC */
  SortDirection?: string;
}

declare interface DescribeAgentListResponse {
  /** 符合条件的 Agent 总数 */
  TotalCount?: number;
  /** Agent 列表（分页后）；元素含 A2A / 公网 API 访问开关与地址、创建人 UIN、绑定的企业账号 ID */
  AgentSet?: AgentItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentRequest {
  /** Agent 业务 ID */
  AgentId: string;
}

declare interface DescribeAgentResponse {
  /** Agent 业务 ID */
  AgentId?: string;
  /** Agent 名称 */
  AgentName?: string;
  /** Agent 描述 */
  Description?: string;
  /** 头像 URL */
  AvatarUrl?: string;
  /** 是否调试 Agent */
  IsDebug?: boolean;
  /** 创建时间（RFC3339） */
  CreatedTime?: string;
  /** 更新时间（RFC3339） */
  ModifiedTime?: string;
  /** 当前活跃 session 数（ACTIVE/CREATING/MIGRATING，未软删）；仅 DescribeAgent 读路径填充，写路径回显不下发 */
  ActiveSessionCount?: number;
  /** 流量路由配置（VersionId 恒为字符串，防 JS 精度丢失） */
  RoutingSet?: RoutingItem[];
  /** A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构） */
  A2AConfig?: A2AConfig;
  /** 绑定的 OneID 企业账号 ID。允许为空：未绑定的存量与新建 Agent 该字段缺省，绑定后回显绑定值 */
  AccountId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentSessionListRequest {
  /** 偏移量，从 0 开始 */
  Offset?: number;
  /** 返回数量，缺省为 20，最大 100 */
  Limit?: number;
  /** 排序字段 */
  SortBy?: string;
  /** 排序方向：ASC / DESC */
  SortDirection?: string;
  /** 过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系 */
  Filters?: Filter[];
}

declare interface DescribeAgentSessionListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 会话列表 */
  SessionSet?: SessionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentSessionRequest {
  /** 会话 ID */
  SessionId: string;
}

declare interface DescribeAgentSessionResponse {
  /** 会话 ID */
  SessionId?: string;
  /** 会话名称（AgentOS 侧生成的 AI 标题 / 用户改名）；缺失时为空，调用方可兜底展示 SessionId 后缀 */
  SessionName?: string;
  /** Agent 业务 ID */
  AgentId?: string;
  /** Agent 名称 */
  AgentName?: string;
  /** 版本 ID */
  VersionId?: string;
  /** 会话使用的版本名称（与 VersionId 区分：此为版本名，非 ID） */
  VersionName?: string;
  /** 版本状态：DRAFT / ENABLED / DISABLED */
  Status?: string;
  /** 创建者 Uin */
  Creator?: string;
  /** 连接器来源：ENTERPRISE_AGENT / ASSISTANT */
  Source?: string;
  /** 可用的聊天接入点列表（详情独有） */
  EndpointSet?: ChatEndpoint[];
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间（RFC3339） */
  ModifiedTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentVersionListRequest {
  /** Agent 业务 ID */
  AgentId: string;
  /** 偏移量，从 0 开始 */
  Offset?: number;
  /** 返回数量，缺省为 20，最大 100 */
  Limit?: number;
  /** 过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系 */
  Filters?: Filter[];
}

declare interface DescribeAgentVersionListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 版本列表（原 VersionSet；集合名带实体前缀以区分 Skill 版本接口的同名字段） */
  AgentVersionSet?: AgentVersionItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentVersionRequest {
  /** Agent 业务 ID */
  AgentId: string;
  /** 版本 ID */
  VersionId: string;
}

declare interface DescribeAgentVersionResponse {
  /** 版本 ID */
  VersionId?: string;
  /** Agent 业务 ID */
  AgentId?: string;
  /** 版本名称 */
  VersionName?: string;
  /** 版本类型：DEFAULT / TEST / PROD */
  VersionType?: string;
  /** 版本变更说明 */
  Description?: string;
  /** 模型标识 */
  Model?: string;
  /** Manifest v2.0 精简 manifest 原文（JSON 字符串） */
  Manifest?: string;
  /** 版本状态：DRAFT / ENABLED / DISABLED */
  Status?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间 */
  ModifiedTime?: string;
  /** 绑定的沙箱模板 ID；未绑定时为空，创建会话沙箱使用系统默认模板。 */
  SandboxTemplateId?: string;
  /** 该版本累计承接的会话总数（历史累计值，只增不减） */
  SessionCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBuiltinModelListRequest {
  /** 偏移量，从 0 开始 */
  Offset?: number;
  /** 返回数量，缺省为 20，最大 100 */
  Limit?: number;
  /** 过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系 */
  Filters?: Filter[];
  /** OneID 企业账号 ID，可选。传入时拉取该账号对应企业的模型（要求当前主账号 UIN 已授权该账号），不传时使用服务配置的企业 ID */
  AccountId?: string;
}

declare interface DescribeBuiltinModelListResponse {
  /** 总数 */
  TotalCount?: number;
  /** 内置模型列表（分页后） */
  BuiltinModelSet?: BuiltinModel[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConnectorListRequest {
  /** 过滤条件数组，多个 Filter 之间为 AND 关系。支持 Name：Name（名称模糊匹配）/ Status（ACTIVE / DISABLED）/ Source（ENTERPRISE_AGENT / ASSISTANT） */
  Filters?: Filter[];
  /** 已废弃：服务端不再读取，请使用 Offset/Limit。字段保留仅为过渡兼容，后续下线 */
  PageNumber?: number;
  /** 已废弃：服务端不再读取，请使用 Offset/Limit。字段保留仅为过渡兼容，后续下线 */
  PageSize?: number;
  /** 偏移量，0 基准，缺省 0（标准 CAPI 分页参数） */
  Offset?: number;
  /** 每页数量，取值 1-100，缺省 20（标准 CAPI 分页参数） */
  Limit?: number;
}

declare interface DescribeConnectorListResponse {
  /** 符合条件的连接器总数 */
  TotalCount?: number;
  /** 连接器列表（分页后）；连接器挂调用方主账号 UIN 下，不挂 OneID 企业 */
  ConnectorSet?: ConnectorInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExpertListRequest {
  /** 专家来源，必填：BUILTIN（内置）/ CUSTOM（自建） */
  Source: string;
  /** 标准过滤条件：ExpertId（精确，多值 OR，携带即按 ID 批量查询，忽略分页）/ Keyword（模糊） */
  Filters?: Filter[];
  /** 偏移量，从 0 开始，默认 0（按 ID 批量查询时忽略） */
  Offset?: number;
  /** 每页数量，默认 20，最大 200（按 ID 批量查询时忽略） */
  Limit?: number;
}

declare interface DescribeExpertListResponse {
  /** 符合条件的专家总数（按 ID 批量时为实际命中数） */
  TotalCount?: number;
  /** 专家列表 */
  ExpertSet?: ExpertItem[];
  /** 全局计数 */
  Counts?: ExpertCounts | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExternalAgentListRequest {
  /** Agent 业务 ID（必填：绑定状态的归属主体） */
  AgentId: string;
  /** 标准过滤条件，支持的 Name：Bound（BOUND=仅已绑定 / UNBOUND=仅未绑定 / ALL=全部，缺省 ALL） */
  Filters?: Filter[];
  /** 偏移量，从 0 开始，默认 0 */
  Offset?: number;
  /** 每页数量，默认 20，最大 200 */
  Limit?: number;
  /** 外部 Agent 列表查询关键字 */
  DescribeExternalAgentList?: string;
  /** 版本 ID */
  VersionId?: string;
}

declare interface DescribeExternalAgentListResponse {
  /** 符合条件的外部 Agent 总数 */
  TotalCount?: number;
  /** 外部 Agent 集合（可见卡片全集 ∪ URL 直连型存量 binding 的合并视图） */
  ExternalAgentSet?: ExternalAgentInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExternalAgentRequest {
  /** TMA managed agent 业务 ID（CloudAgentID） */
  AgentId: string;
  /** 已绑定的外部 A2A agent ID */
  A2AAgentId: string;
}

declare interface DescribeExternalAgentResponse {
  /** 外部 A2A agent ID */
  A2AAgentId?: string | null;
  /** 外部 Agent 名称 */
  Name?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 外部 A2A Server URL */
  Endpoint?: string | null;
  /** 绑定记录 ID（已绑定时返回） */
  BindingId?: string | null;
  /** 是否已绑定到当前 Agent */
  Bound?: boolean | null;
  /** 头像地址（取自 provider card 的 iconUrl；为空时前端回落首字母头像） */
  IconUrl?: string;
  /** 外部 agent card 声明的版本号 */
  A2AVersion?: string;
  /** A2A card skills 集合 */
  A2ASkillSet?: A2ASkillItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMessageEventListRequest {
  /** Session ID */
  SessionId: string;
  /** Agent ID */
  AgentId: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回数量，默认 100，最大 100 */
  Limit?: number;
  /** 过滤条件数组，多个 Filter 之间为 AND 关系，同一 Filter 内多个 Values 为 OR 关系 */
  Filters?: Filter[];
}

declare interface DescribeMessageEventListResponse {
  /** 消息事件列表 */
  MessageEventSet?: MessageEvent[];
  /** 符合过滤条件的事件总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSkillListRequest {
  /** 技能来源，必填：BUILTIN（内置）/ CUSTOM（自建）/ AUTHORIZED（企业授权）。数据通路判别，非筛选条件 */
  Source: string;
  /** 标准过滤条件：SkillId（精确，多值 OR ≤100，携带即按 ID 批量查询）/ Keyword（模糊）/ PublishStatus（DRAFT/PUBLISHED/ALL）/ Status（ENABLED/DISABLED/ALL） */
  Filters?: Filter[];
  /** 偏移量，默认 0（按 ID 批量查询时忽略） */
  Offset?: number;
  /** 每页数量，默认 20，最大 200（按 ID 批量查询时忽略） */
  Limit?: number;
  /** 授权方企业账号标识；仅 Source=AUTHORIZED 时生效。不传则由后端用 Uin 推导全部已授权范围；未携带 SkillId 的分页查询必传 */
  AccountId?: string;
  /** 仅 Source=AUTHORIZED 时生效。Agent 绑定了 OneID 租户时，授权集合强制收窄到绑定租户；显式传入的 AccountId 必须等于绑定值，否则请求被拒绝。绑定 Agent 的分页查询可不传 AccountId（服务端按绑定值收窄到单一授权方） */
  AgentId?: string;
}

declare interface DescribeSkillListResponse {
  /** 符合条件的技能总数（按 ID 批量时为实际命中数） */
  TotalCount?: number;
  /** 技能列表（仅列表展示所需字段，完整信息走 DescribeSkill） */
  SkillSet?: SkillItem[];
  /** 全局计数（不受 keyword 影响） */
  Counts?: SkillCounts | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MigrateAgentSessionRequest {
  /** 待迁移的会话 ID（必填） */
  SessionId: string;
  /** 目标 Agent 业务 ID（必填），必须与 Session 原 Agent 相同 */
  AgentId: string;
  /** 目标版本 ID（必填，字符串形式）。需归属同一 Agent 且未被废弃 */
  TargetVersionId: string;
}

declare interface MigrateAgentSessionResponse {
  /** 会话 ID（回显原值，保持不变） */
  SessionId?: string;
  /** 迁移后的会话状态 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentA2AConfigRequest {
  /** Agent 业务 ID */
  AgentId: string;
  /** Agent 级唯一 A2A 开关 */
  A2AEnabled?: boolean;
  /** A2A 技能集合（原 A2ASkills） */
  A2ASkillSet?: A2ASkillInput[];
}

declare interface ModifyAgentA2AConfigResponse {
  /** Agent 业务 ID */
  AgentId?: string;
  /** Agent 名称 */
  AgentName?: string;
  /** Agent 描述 */
  Description?: string;
  /** 头像 URL */
  AvatarUrl?: string;
  /** 是否调试 Agent */
  IsDebug?: boolean;
  /** 创建时间（RFC3339） */
  CreatedTime?: string;
  /** 更新时间（RFC3339） */
  ModifiedTime?: string;
  /** 流量路由配置（VersionId 恒为字符串，防 JS 精度丢失） */
  RoutingSet?: RoutingItem[];
  /** A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构） */
  A2AConfig?: A2AConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentRequest {
  /** Agent 业务 ID */
  AgentId: string;
  /** Agent 名称（可选，仅传递需要更新的字段） */
  AgentName?: string;
  /** Agent 描述（可选） */
  Description?: string;
  /** 头像 URL（可选） */
  AvatarUrl?: string;
}

declare interface ModifyAgentResponse {
  /** Agent 业务 ID */
  AgentId?: string;
  /** Agent 名称 */
  AgentName?: string;
  /** Agent 描述 */
  Description?: string;
  /** 头像 URL */
  AvatarUrl?: string;
  /** 是否调试 Agent */
  IsDebug?: boolean;
  /** 创建时间（RFC3339） */
  CreatedTime?: string;
  /** 更新时间（RFC3339） */
  ModifiedTime?: string;
  /** 流量路由配置（VersionId 恒为字符串，防 JS 精度丢失） */
  RoutingSet?: RoutingItem[];
  /** A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构） */
  A2AConfig?: A2AConfig;
  /** 绑定的 OneID 企业账号 ID。允许为空：未绑定的存量与新建 Agent 该字段缺省，绑定后回显绑定值 */
  AccountId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentRoutingRequest {
  /** Agent 业务 ID */
  AgentId: string;
  /** 路由配置，覆盖式写入（与出参 AgentInfo.RoutingSet 命名对齐） */
  RoutingSet: RoutingItem[];
}

declare interface ModifyAgentRoutingResponse {
  /** Agent 业务 ID */
  AgentId?: string;
  /** Agent 名称 */
  AgentName?: string;
  /** Agent 描述 */
  Description?: string;
  /** 头像 URL */
  AvatarUrl?: string;
  /** 是否调试 Agent */
  IsDebug?: boolean;
  /** 创建时间（RFC3339） */
  CreatedTime?: string;
  /** 更新时间（RFC3339） */
  ModifiedTime?: string;
  /** 流量路由配置（VersionId 恒为字符串，防 JS 精度丢失） */
  RoutingSet?: RoutingItem[];
  /** A2A 对外互通配置与注册态（只读回显；原四个平铺字段收进结构） */
  A2AConfig?: A2AConfig;
  /** 绑定的 OneID 企业账号 ID。允许为空：未绑定的存量与新建 Agent 该字段缺省，绑定后回显绑定值 */
  AccountId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentVersionRequest {
  /** Agent 业务 ID */
  AgentId: string;
  /** 版本 ID（仅 default 或 test 版本可原地更新，prod 拒绝） */
  VersionId: string;
  /** Manifest v2.0 原文（可选；Manifest / Model / Description / SandboxTemplateId / ConnectorSet 五个可选字段至少提供一个） */
  Manifest?: string;
  /** 模型标识（可选） */
  Model?: string;
  /** 版本变更说明（可选） */
  Description?: string;
  /** 沙箱模板 ID。可选，patch 语义：null 不修改；空串解绑（恢复系统默认模板）；非空时模板须属于当前企业且可用（未删除、状态正常）。 */
  SandboxTemplateId?: string;
  /** 该版本最终绑定的连接器集合（全量覆盖语义）：缺省 = 本次不改动连接器绑定；空数组 = 解绑全部连接器；非空 = 物化为 manifest v2 mcp_servers 网关条目，manifest 中不在本集合内的连接器条目会被移除（解绑在服务端闭环，无需调用方改写 Manifest） */
  ConnectorSet?: ConnectorRefInput[];
}

declare interface ModifyAgentVersionResponse {
  /** 版本 ID */
  VersionId?: string;
  /** Agent 业务 ID */
  AgentId?: string;
  /** 版本名称 */
  VersionName?: string;
  /** 版本类型：DEFAULT / TEST / PROD */
  VersionType?: string;
  /** 版本变更说明 */
  Description?: string;
  /** 模型标识 */
  Model?: string;
  /** Manifest v2.0 精简 manifest 原文（JSON 字符串） */
  Manifest?: string;
  /** 版本状态：DRAFT / ENABLED / DISABLED */
  Status?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 更新时间 */
  ModifiedTime?: string;
  /** 绑定的沙箱模板 ID；未绑定时为空，创建会话沙箱使用系统默认模板。 */
  SandboxTemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindExternalAgentRequest {
  /** TMA managed agent 业务 ID */
  AgentId: string;
  /** 已绑定的外部 A2A agent ID */
  A2AAgentId?: string;
  /** 绑定记录 ID（自增 ID 字符串） */
  BindingId?: string;
  /** 版本 ID */
  VersionId?: string;
}

declare interface UnbindExternalAgentResponse {
  /** 操作结果状态（大写枚举）：BOUND=已绑定 / UNBOUND=已解绑 */
  Status?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Workbuddyenterprise WorkBuddy Enterprise} */
declare interface Workbuddyenterprise {
  (): Versions;
  /** 把外部 agent 绑定到某 managed agent {@link BindExternalAgentRequest} {@link BindExternalAgentResponse} */
  BindExternalAgent(data: BindExternalAgentRequest, config?: AxiosRequestConfig): AxiosPromise<BindExternalAgentResponse>;
  /** 创建 Agent {@link CreateAgentRequest} {@link CreateAgentResponse} */
  CreateAgent(data: CreateAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentResponse>;
  /** 创建 Agent 会话 {@link CreateAgentSessionRequest} {@link CreateAgentSessionResponse} */
  CreateAgentSession(data: CreateAgentSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentSessionResponse>;
  /** 创建 Agent 版本 {@link CreateAgentVersionRequest} {@link CreateAgentVersionResponse} */
  CreateAgentVersion(data: CreateAgentVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentVersionResponse>;
  /** 基于源版本创建 Agent 版本 {@link CreateAgentVersionFromSourceRequest} {@link CreateAgentVersionFromSourceResponse} */
  CreateAgentVersionFromSource(data: CreateAgentVersionFromSourceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentVersionFromSourceResponse>;
  /** 删除 Agent {@link DeleteAgentRequest} {@link DeleteAgentResponse} */
  DeleteAgent(data: DeleteAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAgentResponse>;
  /** 查询 Agent 详情 {@link DescribeAgentRequest} {@link DescribeAgentResponse} */
  DescribeAgent(data: DescribeAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentResponse>;
  /** 查询 Agent 列表 {@link DescribeAgentListRequest} {@link DescribeAgentListResponse} */
  DescribeAgentList(data?: DescribeAgentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentListResponse>;
  /** 查询 Agent 会话详情 {@link DescribeAgentSessionRequest} {@link DescribeAgentSessionResponse} */
  DescribeAgentSession(data: DescribeAgentSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentSessionResponse>;
  /** 查询 Agent 会话列表 {@link DescribeAgentSessionListRequest} {@link DescribeAgentSessionListResponse} */
  DescribeAgentSessionList(data?: DescribeAgentSessionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentSessionListResponse>;
  /** 查询 Agent 版本详情 {@link DescribeAgentVersionRequest} {@link DescribeAgentVersionResponse} */
  DescribeAgentVersion(data: DescribeAgentVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentVersionResponse>;
  /** 查询 Agent 版本列表 {@link DescribeAgentVersionListRequest} {@link DescribeAgentVersionListResponse} */
  DescribeAgentVersionList(data: DescribeAgentVersionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentVersionListResponse>;
  /** 查询内置模型列表 {@link DescribeBuiltinModelListRequest} {@link DescribeBuiltinModelListResponse} */
  DescribeBuiltinModelList(data?: DescribeBuiltinModelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBuiltinModelListResponse>;
  /** 查询连接器列表 {@link DescribeConnectorListRequest} {@link DescribeConnectorListResponse} */
  DescribeConnectorList(data?: DescribeConnectorListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConnectorListResponse>;
  /** 查询专家列表 {@link DescribeExpertListRequest} {@link DescribeExpertListResponse} */
  DescribeExpertList(data: DescribeExpertListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExpertListResponse>;
  /** 查询某 managed agent 绑定的单个外部 agent 详情 {@link DescribeExternalAgentRequest} {@link DescribeExternalAgentResponse} */
  DescribeExternalAgent(data: DescribeExternalAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExternalAgentResponse>;
  /** 列某 managed agent 绑定的外部 agent 列表 {@link DescribeExternalAgentListRequest} {@link DescribeExternalAgentListResponse} */
  DescribeExternalAgentList(data: DescribeExternalAgentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExternalAgentListResponse>;
  /** 查询消息事件列表 {@link DescribeMessageEventListRequest} {@link DescribeMessageEventListResponse} */
  DescribeMessageEventList(data: DescribeMessageEventListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageEventListResponse>;
  /** 查询技能列表 {@link DescribeSkillListRequest} {@link DescribeSkillListResponse} */
  DescribeSkillList(data: DescribeSkillListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSkillListResponse>;
  /** 迁移 Agent 会话 {@link MigrateAgentSessionRequest} {@link MigrateAgentSessionResponse} */
  MigrateAgentSession(data: MigrateAgentSessionRequest, config?: AxiosRequestConfig): AxiosPromise<MigrateAgentSessionResponse>;
  /** 修改 Agent {@link ModifyAgentRequest} {@link ModifyAgentResponse} */
  ModifyAgent(data: ModifyAgentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentResponse>;
  /** 修改 Agent A2A 配置 {@link ModifyAgentA2AConfigRequest} {@link ModifyAgentA2AConfigResponse} */
  ModifyAgentA2AConfig(data: ModifyAgentA2AConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentA2AConfigResponse>;
  /** 修改 Agent 路由 {@link ModifyAgentRoutingRequest} {@link ModifyAgentRoutingResponse} */
  ModifyAgentRouting(data: ModifyAgentRoutingRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentRoutingResponse>;
  /** 修改 Agent 版本 {@link ModifyAgentVersionRequest} {@link ModifyAgentVersionResponse} */
  ModifyAgentVersion(data: ModifyAgentVersionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentVersionResponse>;
  /** 解除外部 agent 与 managed agent 的绑定 {@link UnbindExternalAgentRequest} {@link UnbindExternalAgentResponse} */
  UnbindExternalAgent(data: UnbindExternalAgentRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindExternalAgentResponse>;
}

export declare type Versions = ["2026-07-09"];

export default Workbuddyenterprise;
