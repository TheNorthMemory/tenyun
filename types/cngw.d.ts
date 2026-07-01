/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** AI 网关 ACL 授权主体（Consumer / ConsumerGroup 共用结构），用于响应中回显 Id + Name，减少前端多次查询调用 */
declare interface AIGWACLSubject {
  /** 鉴权主体ID */
  Id?: string;
  /** 鉴权主体名称 */
  Name?: string;
}

/** AI 网关中消费者组简要信息 */
declare interface AIGWConsumerGroupBrief {
  /** 消费者组名称 */
  Name?: string;
  /** 消费者组Id */
  ConsumerGroupId?: string;
}

/** 跨服务降级配置 */
declare interface AIGWCrossServiceFallbackConfig {
  /** 触发条件枚举值：ServiceUnavailable： 服务不可用ConnectionTimeout： 连接超时RateLimited： 限流 */
  TriggerConditions: string[];
  /** fallback 服务链 */
  FallbackServiceChain: AIGWFallbackServiceItem[];
  /** 额度降级触发配置 */
  QuotaFallbackTrigger?: AIGWLLMQuotaFallbackTrigger;
}

/** AI 网关自定义脱敏规则（A 层 / B 层共用结构体，MaskFormat 含义随所属层不同） */
declare interface AIGWCustomDesensitizeRule {
  /** 自定义脱敏规则名称 */
  Name: string;
  /** 自定义脱敏规则匹配正则 */
  Pattern: string;
  /** 自定义脱敏规则掩码 */
  MaskFormat: string;
  /** 自定义脱敏规则开关 */
  Enabled: boolean;
}

/** 降级服务元素 */
declare interface AIGWFallbackServiceItem {
  /** 模型服务 Id */
  ModelServiceId: string;
  /** 模型服务名 */
  ModelServiceName?: string;
}

/** AI 网关 A 层转发脱敏配置（请求转发到 LLM 供应商前对 messages 替换为占位符） */
declare interface AIGWForwardDesensitizeConfig {
  /** 转发脱敏开关 */
  Enabled: boolean;
  /** 预定义规则类型枚举值：Phone： 电话号码IdCard： 身份证号BankCard： 银行卡号Email： 电子邮箱地址IP： IP地址Name： 姓名 */
  PredefinedRuleTypes?: string[];
  /** 自定义脱敏规则 */
  CustomRules?: AIGWCustomDesensitizeRule[];
  /** 掩码 */
  PlaceholderFormat?: string;
  /** 脱敏异常处理枚举值：Reject： 拒绝请求Skip： 跳过 */
  OnFailure?: string;
}

/** 用于定义kong插件自定义健康检查的配置 */
declare interface AIGWHealthCheckSetting {
  /** 健康检查类型枚举值：MCP： 标准mcpHTTP： http */
  HealthCheckType: string;
  /** 检查间隔 */
  HealthCheckIntervalSecond: number;
  /** 检查超时时间 */
  HealthCheckTimeout: number;
  /** 检查失败阈值 */
  HealthCheckFailThreshold: number;
  /** 检查恢复阈值 */
  HealthCheckRecoverThreshold: number;
  /** 检查路径 */
  HealthCheckPath?: string;
  /** 检查方法 */
  HealthCheckMethod?: string;
}

/** AI 网关意图路由配置 */
declare interface AIGWIntentRoute {
  /** 意图识别模型id */
  IntentModelServiceId: string;
  /** 置信度 */
  ConfidenceThreshold: number;
  /** 默认服务id */
  DefaultModelServiceId: string;
  /** 规则 */
  Rules?: AIGWIntentRouteRule[];
}

/** AI 网关意图路由规则 */
declare interface AIGWIntentRouteRule {
  /** 意图编码枚举值：Coder： 代码编写Math： 数学计算Translation： 翻译Flash： 快速问答Complex： 复杂推理 */
  IntentCode?: string;
  /** 模型服务id */
  ModelServiceId?: string;
}

/** 路由匹配规则 */
declare interface AIGWKVMatch {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
  /** 操作类型 */
  Operator: string;
}

/** 云原生网关模型API 配额降级触发条件信息 */
declare interface AIGWLLMQuotaFallbackTrigger {
  /** 配额感知阈值百分比（RPM 与 TPM 共用）取值范围：[0, 99] */
  ThresholdPercent?: number;
  /** 检查维度策略枚举值：AnyInsufficient： RPM 或 TPM 任一不足即触发AllInsufficient： RPM 和 TPM 同时不足才触发 */
  CheckDimension?: string;
}

/** 云原生网关模型LLM配额限制信息 */
declare interface AIGWLLMQuotaLimit {
  /** 该模型服务每分钟请求数上限，0 表示该维度不限 */
  RPMLimit?: number;
  /** 该模型服务每分钟 Token 数上限，0 表示该维度不限 */
  TPMLimit?: number;
}

/** 单个消费者 Token 用量查询结果 */
declare interface AIGWLLMTokenUsageItem {
  /** 消费者Id */
  ConsumerId?: string;
  /** 消费者名称 */
  ConsumerName?: string;
  /** 消费者组信息列表 */
  ConsumerGroups?: AIGWConsumerGroupBrief[];
  /** 模型服务Id */
  ModelServiceId?: string;
  /** 模型服务名称 */
  ModelServiceName?: string;
  /** 输入Token数（包含缓存命中Token数） */
  InputTokens?: number;
  /** 命中缓存输入Token数 */
  CacheReadInputTokens?: number;
  /** 输出Token数 */
  OutputTokens?: number;
  /** 消耗总Token数 */
  TotalTokens?: number;
  /** 请求总数 */
  RequestCount?: number;
  /** 花费成本 */
  Cost?: string;
  /** 成本货币单位枚举值：CNY： 人民币当前仅支持CNY */
  Currency?: string;
}

/** Token用量统计结果 */
declare interface AIGWLLMTokenUsageListResult {
  /** Token用量明细返回结果列表 */
  DataList?: AIGWLLMTokenUsageItem[];
  /** 结果总数 */
  TotalCount?: number;
}

/** AI 网关token消耗统计汇总响应结果 */
declare interface AIGWLLMTokenUsageStatisticsResult {
  /** 查询时间范围内请求总数 */
  TotalRequestCount?: number;
  /** 查询时间范围内总输入Token数（包含命中缓存的Token数） */
  TotalInputTokens?: number;
  /** 查询时间范围内总输出Token数 */
  TotalOutputTokens?: number;
  /** 查询时间范围内总命中缓存输入Token数 */
  TotalCachedReadInputTokens?: number;
  /** 查询时间范围内总成本 */
  TotalCost?: string;
  /** 成本货币单位 */
  Currency?: string;
  /** 查询时间范围内成本最高的消费者 */
  TopConsumers?: AIGWTopConsumersItem[];
}

/** 延迟优先路由配置 */
declare interface AIGWLatencyPriorityConfig {
  /** 路由规则列表 */
  Rules: AIGWLatencyPriorityRouteRule[];
  /** 延迟指标枚举值：LLMLatency： LLM 延迟NetworkLatency： 网络延迟 */
  LatencyMetric: string;
  /** 路由策略枚举值：FastMode： 快速模式BalanceMode： 均衡模式 */
  RouteMode?: string;
}

/** AI 网关延迟优先路由模型服务 */
declare interface AIGWLatencyPriorityRouteRule {
  /** 模型服务id */
  ModelServiceId: string;
}

/** AI 网关日志输出配置 */
declare interface AIGWLogConfig {
  /** 是否开启请求 payload 记录日志 */
  EnableRequestLogPayloads?: boolean;
  /** 是否开启响应 payload 记录日志 */
  EnableResponseLogPayloads?: boolean;
  /** 日志记录的请求body的最大字节数取值范围：[512, 1048576]EnableRequestLogPayloads 为true时必填 */
  RequestLogPayloadMaxSize?: number;
  /** 日志记录的响应body的最大字节数取值范围：[512, 1048576]EnableResponseLogPayloads 为true时必填 */
  ResponseLogPayloadMaxSize?: number;
}

/** AI 网关 B 层日志脱敏配置（写入 LLM Log 前对 payload 掩码） */
declare interface AIGWLogDesensitizeConfig {
  /** 日志脱敏开关 */
  Enabled: boolean;
  /** 预定义规则类型枚举值：Phone： 电话号码IdCard： 身份证号BankCard： 银行卡号Email： 邮箱地址IP： IP地址Name： 姓名 */
  PredefinedRuleTypes?: string[];
  /** 自定义脱敏规则 */
  CustomRules?: AIGWCustomDesensitizeRule[];
  /** 日志脱敏范围枚举值：Request： 请求Response： 响应 */
  Scope?: string[];
}

/** MCP Server详情 */
declare interface AIGWMCPServer {
  /** MCP Server ID */
  ServerId: string;
  /** MCP Server名称 */
  Name: string;
  /** MCP Server类型，取值：MCP/Rest2MCP */
  ServerType: string;
  /** 协议类型，取值: StreamableHttp */
  Transport: string;
  /** 服务类型：Registry HostIP */
  UpstreamType: string;
  /** 展示名字 */
  DisplayName?: string;
  /** MCP提供给客户端的Endpoint */
  MCPEndpoint?: string;
  /** 注册中心来源信息 */
  UpstreamInfo?: AIGWMCPUpstreamInfoDetail | null;
  /** 会话配置 */
  SessionConfig?: AIGWMCPSessionConfig | null;
  /** 超时时间，单位ms */
  Timeout?: number;
  /** 失败重试次数 */
  RetryCount?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 描述 */
  Description?: string;
  /** 运行状态枚举值：Online： 在线Offline： 离线Error： 错误 */
  Status?: string;
  /** 是否启用健康检查 */
  EnableHealthCheck?: boolean;
  /** 健康检查配置 */
  HealthCheck?: AIGWHealthCheckSetting | null;
  /** Tool分组内工具数量限制 */
  ToolCountLimit?: number;
  /** Tool分组内工具命名冲突策略枚举值：AutoPrefix： 自动前缀Reject： 拒绝 */
  ConflictStrategy?: string;
  /** MCP 市场发布状态枚举值：None： 未发布Published： 已发布 */
  MarketStatus?: string;
}

/** AI 网关 MCP Server ACL 配置详情 */
declare interface AIGWMCPServerACLResult {
  /** 黑白名单鉴权类型枚举值：None： 不鉴权Allow： 白名单Deny： 黑名单 */
  ACLType?: string;
  /** 关联的消费者ID列表 */
  ACLConsumers?: AIGWACLSubject[];
  /** 关联的消费者组ID列表 */
  ACLConsumerGroups?: AIGWACLSubject[];
  /** 认证类型枚举值：None： 无认证ApiKey： API Key认证 */
  AuthType?: string;
}

/** AI 网关 MCP Server 认证配置详情 */
declare interface AIGWMCPServerAuthResult {
  /** MCP服务认证类型枚举值：None： 无认证ApiKey： API Key认证 */
  AuthType?: string;
}

/** MCP Server 列表 */
declare interface AIGWMCPServerList {
  /** 总数 */
  TotalCount: number;
  /** mcp server 数据列表 */
  DataList?: AIGWMCPServer[] | null;
}

/** 云原生网关MCP会话配置 */
declare interface AIGWMCPSessionConfig {
  /** 会话存储类型枚举值：memory： 内存redis： redis */
  SessionStorage?: string;
  /** Redis配置 */
  RedisConfig?: AIGWRedisConfig;
}

/** AI 网关 Tool ACL 单条记录（DescribeMCPToolACLList 数组元素） */
declare interface AIGWMCPToolACLItem {
  /** MCP工具ID */
  ToolId?: string;
  /** MCP工具名称 */
  ToolName?: string;
  /** MCP工具鉴权类型枚举值：None： 继承server鉴权类型Allow： 白名单Deny： 黑名单 */
  ACLType?: string;
  /** 关联的消费者ID列表 */
  ACLConsumers?: AIGWACLSubject[];
  /** 关联的消费者组ID列表 */
  ACLConsumerGroups?: AIGWACLSubject[];
}

/** AI 网关 mcp server 下所有 tool 的 ACL 状态 */
declare interface AIGWMCPToolACLListResult {
  /** 黑白名单鉴权类型枚举值：None： 不鉴权Allow： 白名单Deny： 黑名单 */
  ACLType?: string;
  /** 数据列表 */
  DataList?: AIGWMCPToolACLItem[];
  /** 计数 */
  TotalCount?: number;
}

/** 云原生网关MCP后端信息,用于创建、修改请求 */
declare interface AIGWMCPUpstreamInfo {
  /** 注册中心来源ID */
  SourceId?: string;
  /** 命名空间 */
  Namespace?: string;
  /** MCP服务 id */
  MCPServerId?: string;
  /** 协议，UpstreamType是Registry 时必传httphttps */
  Protocol?: string;
  /** 域名或ip */
  Host?: string;
  /** 端口 */
  Port?: number;
  /** 服务 id */
  ServiceId?: string;
  /** 服务分组 */
  ServiceGroup?: string;
  /** mcp endpoint */
  MCPEndpoint?: string;
  /** message端点路径，SSE协议时配置 */
  MessageEndpoint?: string;
}

/** 云原生网关MCP后端信息，用于展示 */
declare interface AIGWMCPUpstreamInfoDetail {
  /** 注册中心来源ID */
  SourceId?: string;
  /** 注册中心来源名称, 入参不传，用于返回 */
  SourceName?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 服务 id */
  MCPServerId?: string;
  /** 协议，UpstreamType是Registry 时必传httphttps */
  Protocol?: string;
  /** 域名或ip */
  Host?: string;
  /** 端口 */
  Port?: number;
  /** 服务 id */
  ServiceId?: string;
  /** 服务名字 */
  ServiceName?: string;
  /** 服务分组 */
  ServiceGroup?: string;
  /** mcp endpoint */
  MCPEndpoint?: string;
  /** SSE message路径 */
  MessageEndpoint?: string;
}

/** 精确缓存 redis 配置 */
declare interface AIGWRedisConfig {
  /** Host */
  Host: string;
  /** 端口 */
  Port: number;
  /** 用户名 */
  Username?: string;
  /** 密码 */
  Password?: string;
}

/** AI网关标签过滤 */
declare interface AIGWTagFilter {
  /** 匹配策略枚举值：AND： 并OR： 或 */
  MatchStrategy?: string;
  /** 标签 */
  Tags?: string[];
}

/** 最高Token用量消费者 */
declare interface AIGWTopConsumersItem {
  /** 消费者Id */
  ConsumerId?: string;
  /** 消费者名称 */
  ConsumerName?: string;
  /** 该消费者花费的Token数 */
  TotalTokens?: number;
}

/** 消费者结构 */
declare interface CNAPIGwConsumer {
  /** 消费者 ID。 */
  ConsumerId: string;
  /** 名字 */
  Name: string;
  /** 创建时间 */
  CreateTime: string;
  /** 更新时间 yyyy-MM-dd hh:mm:ss */
  ModifyTime: string;
  /** 描述 */
  Description?: string | null;
  /** 消费者分组 */
  ConsumerGroups?: CNAPIGwConsumerGroup[] | null;
}

/** 消费者组结构 */
declare interface CNAPIGwConsumerGroup {
  /** 分组id */
  ConsumerGroupId: string;
  /** 名字 */
  Name: string;
  /** 状态Disable/Enable */
  Status: string;
  /** 描述 */
  Description: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 yyyy-MM-dd hh:mm:ss */
  ModifyTime?: string;
  /** 绑定的消费者数量 */
  BindCount?: number | null;
}

/** 创建资源通用结果 */
declare interface CNAPIGwCreateCommonResult {
  /** 是否成功 */
  Success?: boolean;
  /** 对应的id 值 */
  ID?: string;
}

/** MCP Tool 信息 */
declare interface CNAPIGwMCPTool {
  /** 名字 */
  Name: string;
  /** 展示名字 */
  DisplayName: string;
  /** 方法枚举值：GET： GETPOST： POSTPUT： PUTDELETE： DELETEPATCH： PATCH */
  Method: string;
  /** 描述 */
  Description: string;
  /** 工具 id */
  ToolId?: string;
  /** 报文格式 */
  ContentType?: string;
  /** 服务 id */
  ServiceId?: string | null;
  /** 路径 */
  Path?: string;
  /** 参数 */
  InputParams?: CNAPIGwMCPToolParam[];
  /** 创建时间参数格式：yyyy-MM-dd hh:mm:ss */
  CreateTime?: string;
  /** 更新时间参数格式：yyyy-MM-dd hh:mm:ss */
  UpdateTime?: string;
  /** tool状态枚举值：Enable： 启用Disable： 禁用 */
  Status?: string;
  /** 当前版本号 */
  CurrentVersion?: string;
}

/** MCP Tool 列表 */
declare interface CNAPIGwMCPToolList {
  /** MCPTool 列表 */
  DataList?: CNAPIGwMCPTool[];
  /** 总数 */
  TotalCount?: number;
}

/** MCP tool 参数 */
declare interface CNAPIGwMCPToolParam {
  /** 名字 */
  Name: string;
  /** 参数类型枚举值：string： 字符串number： 数字boolean： 布尔array： 数组object： 对象 */
  Type: string;
  /** 必填 */
  Required: boolean;
  /** 位置枚举值：query： querypath： queryheader： headerbody： body */
  Position: string;
  /** 描述 */
  Description?: string;
  /** 默认值 */
  Default?: string;
  /** 数组子项 */
  Items?: CNAPIGwMCPToolParam;
  /** 对象属性 */
  Properties?: CNAPIGwMCPToolParam[];
  /** 转发到后端的名称不填则使用原始名称 */
  BackendName?: string;
}

/** 密钥信息 */
declare interface CNAPIGwSecretKey {
  /** 密钥id */
  SecretKeyId?: string;
  /** 密钥名字 */
  Name?: string;
  /** 密钥协议类型。 */
  SecretType?: string;
  /** 状态。枚举值：Enable： 启用Disable： 禁用 */
  Status?: string;
  /** 密钥生成方式。枚举值：System： 系统自动生成Custom： 用户自定义KMS： 使用 KMS 密钥 */
  GenerateType?: string;
  /** 密钥明文 */
  SecretValue?: string;
  /** KMS凭证名字 */
  KmsKeyName?: string | null;
  /** KMS凭证版本 */
  KmsKeyVersion?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 是否可以绑定 */
  CanBind?: boolean | null;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** 绑定数 */
  BindCount?: number;
  /** 密钥归属资源类型。枚举值：Consumer： 消费者ModelService： 模型服务 */
  ResourceType?: string;
}

/** LLM 模型 API */
declare interface CloudNativeAPIGatewayLLMModelAPI {
  /** 模型 API ID。 */
  Id?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  ModifyTime?: string;
  /** AI 网关 LLM 模型 API 的唯一标识名称，格式规则：2-50 字符，支持英文、数字、下划线。 */
  Name?: string;
  /** 选择业务场景,xa0 选项：Chat（聊天）。 */
  SceneType?: string;
  /** 业务场景对应的请求协议，选项：OpenAI（目前只支持 OpenAI）。 */
  RequestProtocol?: string;
  /** 路由列表 */
  RouteList?: DefaultKongRoute[];
  /** 为API设置统一的前缀，格式：以/开头，支持字母、数字、短横线。 */
  BasePath?: string;
  /** 路径简化，启用时：客户端请求路径 → 移除Base Path → 后端接收简洁路径禁用时：客户端请求路径 → 完整传递给后端。 */
  StripPath?: boolean;
  /** 模型 API 的相关描述。 */
  Description?: string;
  /** 模型服务Id */
  ModelServiceId?: string;
  /** 模型服务名称 */
  ModelServiceName?: string;
  /** 模型服务路由策略（是指如何路由到模型服务） */
  ModelServiceRoute?: CloudNativeAPIGatewayLLMModelServiceRoute;
  /** 无 */
  MatchHeaders?: AIGWKVMatch[];
  /** 是否开启跨服务fallback */
  EnableCrossServiceFallback?: boolean;
  /** 跨服务fallback配置详情 */
  CrossServiceFallbackConfig?: AIGWCrossServiceFallbackConfig;
  /** 是否展示模型API */
  DescribeCloudNativeAPIGatewayLLMModelAPI?: boolean;
  /** 标签 */
  TagFilter?: AIGWTagFilter;
  /** 日志显示相关开关 */
  LogConfig?: AIGWLogConfig;
  /** 日志脱敏规则 */
  LogDesensitizeConfig?: AIGWLogDesensitizeConfig;
  /** 转发脱敏规则 */
  ForwardDesensitizeConfig?: AIGWForwardDesensitizeConfig;
}

/** LLM-单模型内降级规则 */
declare interface CloudNativeAPIGatewayLLMModelFallbackRule {
  /** 备选模型，主模型不可用时将依次按顺序尝试。 */
  FallbackModels?: string[];
}

/** LLM-模型参数检查信息 */
declare interface CloudNativeAPIGatewayLLMModelParamCheckInfo {
  /** 允许的模型列表。 */
  AllowModelList?: string[];
  /** 模型参数校验失败时的处理策略，选项：Return404（返回404）、FallBackToDefaultModel（使用默认模型降级）。 */
  ModelValidationFailureStrategy?: string;
}

/** LLM 模型服务 */
declare interface CloudNativeAPIGatewayLLMModelService {
  /** 模型服务 ID。 */
  Id?: string;
  /** 模型服务名称。 */
  Name?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 修改时间。 */
  ModifyTime?: string;
  /** 服务类型，目前只支持xa0LLMService。 */
  ServiceType?: string;
  /** 选择模型提供商, 选项：OpenAI、Anthropic、Azure OpenAI、自定义HTTP。 */
  ModelProvider?: string;
  /** API协议标准，根据供应商动态变化：OpenAI→OpenAI/v1，Anthropic→Anthropic/v1等 */
  ModelProtocol?: string;
  /** 自定义的模型请求 URL。 */
  UpstreamURL?: string;
  /** 模型选择方式，选项：Specify（指定模型）、PassThrough（透传请求模型）。 */
  ModelSelector?: string;
  /** 默认模型，模型选择方式为 Specify 时必填。 */
  DefaultModel?: string;
  /** 开启模型降级，模型选择方式为 Specify 时必填。 */
  EnableModelFallback?: boolean;
  /** 可以配置备用模型规则，EnableSpecifyModelFallbackxa0为 true 时必填。 */
  ModelFallbackRule?: CloudNativeAPIGatewayLLMModelFallbackRule;
  /** 开启模型参数校验，是否校验客户端传递的 model 参数,xa0模型选择方式为 PassThrough 时必填。 */
  EnableModelParamCheck?: boolean;
  /** 模型检验信息，EnableModelParamCheckxa0为 true 时必填。 */
  ModelParamCheckRule?: CloudNativeAPIGatewayLLMModelParamCheckInfo;
  /** 描述。 */
  Description?: string;
  /** 连接超时时间取值范围：[1, 3600000]单位：毫秒默认值：10000 */
  ConnectTimeout?: number;
  /** 写入超时时间取值范围：[1, 3600000]单位：毫秒默认值：60000 */
  WriteTimeout?: number;
  /** 读取超时时间取值范围：[1, 3600000]单位：毫秒 */
  ReadTimeout?: number;
  /** 重试次数取值范围：[0, 5]单位：次默认值：0 */
  Retries?: number;
  /** 路径拼接模式枚举值：FixedPath： 固定路径AutoConcat： 自动拼接 */
  UpstreamUrlMode?: string;
  /** sni */
  SNI?: string;
  /** 配额限制 */
  QuotaLimit?: AIGWLLMQuotaLimit;
  /** 标签 */
  Tags?: string;
  /** 绑定的模型服务秘钥 */
  SecretKeyIds?: string[];
}

/** 模型服务路由配置 */
declare interface CloudNativeAPIGatewayLLMModelServiceRoute {
  /** 生效的路由算法类型：权重路由，模型名称路由、参数路由等Weighted/ModelName/Query (预留多个，暂时只能填写一个) */
  SelectedTypes: string[];
  /** 权重路由配置，最多10个 */
  WeightedConfig?: CloudNativeAPIGatewayLLMModelServiceRouteWeightedStrategy[];
  /** 模型名称路由配置，最多10个 */
  ModelNameConfig?: CloudNativeAPIGatewayLLMModelServiceRouteModelNameStrategy[];
  /** 意图识别 */
  IntentRouteConfig?: AIGWIntentRoute;
  /** 延迟路由 */
  LatencyPriorityConfig?: AIGWLatencyPriorityConfig;
}

/** 模型服务模型名称路由策略 */
declare interface CloudNativeAPIGatewayLLMModelServiceRouteModelNameStrategy {
  /** 模型服务id */
  ModelServiceId: string;
  /** 匹配模型服务 */
  MatchModelName: string;
  /** 重写模型 */
  RewriteModelName?: string;
}

/** 权重路由配置 */
declare interface CloudNativeAPIGatewayLLMModelServiceRouteWeightedStrategy {
  /** 模型服务id */
  ModelServiceId: string;
  /** 权重值 */
  Weight: number;
}

/** 默认kong路由，目前只在 LLM 模型 API相 关接口使用 */
declare interface DefaultKongRoute {
  /** 服务名字 */
  Name: string;
  /** 服务ID */
  ID?: string;
  /** HTTP Method */
  Methods?: string[];
  /** Http Path */
  Paths?: string[];
}

/** 查询过滤通用对象 */
declare interface Filter {
  /** 过滤参数名 */
  Name: string;
  /** 过滤参数值 */
  Values: string[];
}

/** LLM 模型 API 列表 */
declare interface ListCloudNativeAPIGatewayLLMModelAPI {
  /** 总数 */
  TotalCount?: number;
  /** AI 网关模型 API 列表。 */
  DataList?: CloudNativeAPIGatewayLLMModelAPI[];
}

/** LLM 模型服务列表 */
declare interface ListCloudNativeAPIGatewayLLMModelService {
  /** 模型服务数量。 */
  TotalCount?: number;
  /** 模型服务列表。 */
  DataList?: CloudNativeAPIGatewayLLMModelService[];
}

declare interface AddCloudNativeAPIGatewayConsumerGroupAuthRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 授权资源类型。枚举值：ModelAPI：模型 APIMCPServer：MCP Server */
  ResourceType: string;
  /** 对应资源的 ID。ResourceType=ModelAPI 时是模型 API IDResourceType=MCPServer 时是 MCP Server ID */
  ResourceId: string;
  /** 消费者组 ID 列表（每个 ID 以 cg- 开头），长度 1-10。 */
  ConsumerGroupIds: string[];
}

declare interface AddCloudNativeAPIGatewayConsumerGroupAuthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddCloudNativeAPIGatewayConsumerInGroupRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者组 ID（以 cg- 开头）。 */
  ConsumerGroupId: string;
  /** 消费者 ID 列表，长度 1-10。 */
  ConsumerIds: string[];
}

declare interface AddCloudNativeAPIGatewayConsumerInGroupResponse {
  /** 是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindCloudNativeAPIGatewaySecretKeyRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 资源类型 */
  ResourceType: string;
  /** 资源ID，当前最多支持一个 */
  ResourceIds: string[];
  /** 密钥id */
  SecretKeyId: string;
}

declare interface BindCloudNativeAPIGatewaySecretKeyResponse {
  /** 结果 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayConsumerGroupRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者组名称，最长 60 字符。同一网关下唯一。 */
  Name: string;
  /** 启用状态。枚举值：Enable：启用Disable：禁用 */
  Status: string;
  /** 消费者组描述。最长 200 字符。 */
  Description?: string;
}

declare interface CreateCloudNativeAPIGatewayConsumerGroupResponse {
  /** 创建结果。包含成功标识与新建资源 ID。 */
  Result?: CNAPIGwCreateCommonResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayConsumerRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者名称，最长 60 字符。同一网关下唯一。 */
  Name: string;
  /** 消费者描述。最长 200 字符。 */
  Description?: string;
}

declare interface CreateCloudNativeAPIGatewayConsumerResponse {
  /** 创建结果。包含成功标识与新建资源 ID。 */
  Result?: CNAPIGwCreateCommonResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayLLMModelAPIRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 模型 API 名称，最长 60 字符。同一网关下唯一。 */
  Name: string;
  /** 业务场景。枚举值：Chat：聊天Image：图像（需要网关版本 ≥ 3.9.3） */
  SceneType: string;
  /** 请求协议（小写）。当前仅支持：openai */
  RequestProtocol: string;
  /** 关联的模型服务 ID 列表，长度 1-10。注：字段名建议改为 ModelServiceIds，当前保留用于兼容。 */
  ListModelServiceId: string[];
  /** 路由列表，至少 1 条。每条包含 Methods/Paths/Hosts 等 Kong 路由属性。 */
  RouteList: DefaultKongRoute[];
  /** 统一前缀路径（可选）。例如 /v1/openai。 */
  BasePath?: string;
  /** 模型 API 描述。最长 200 字符。 */
  Description?: string;
  /** 多模型服务路由策略。ListModelServiceId 多于 1 项时必填。 */
  ModelServiceRoute?: CloudNativeAPIGatewayLLMModelServiceRoute;
  /** Header 路由匹配规则。当前仅支持 Operator=exact。 */
  MatchHeaders?: AIGWKVMatch[];
  /** 是否启用跨服务 Fallback。开启后需提供 CrossServiceFallbackConfig。 */
  EnableCrossServiceFallback?: boolean;
  /** 跨服务 Fallback 配置。EnableCrossServiceFallback=true 时必填。 */
  CrossServiceFallbackConfig?: AIGWCrossServiceFallbackConfig;
  /** 标签过滤策略。需要网关版本 ≥ 3.9.4。 */
  TagFilter?: AIGWTagFilter;
  /** 日志输出配置（请求/响应 payload 落 LLM Log）。需要网关版本 ≥ 3.9.4。 */
  LogConfig?: AIGWLogConfig;
}

declare interface CreateCloudNativeAPIGatewayLLMModelAPIResponse {
  /** 是否成功。 */
  Result?: boolean;
  /** 模型 API ID，全局唯一标识。 */
  ModelAPIId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayLLMModelServiceRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 服务名称，最长60个字符，支持中英文大小写、数字及分隔符（“-”、“_”)，不能以数字和分隔符开头，不能以分隔符结尾。 */
  Name: string;
  /** 服务类型。目前仅支持 LLMService。枚举值：LLMService： 大语言模型服务 */
  ServiceType: string;
  /** 选择模型提供商, 选项：OpenAI、Anthropic、Azure OpenAI等。 */
  ModelProvider: string;
  /** API协议标准，根据供应商动态变化：OpenAI→OpenAI/v1，Anthropic→Anthropic/v1等 */
  ModelProtocol: string;
  /** 模型选择方式，选项：Specify（指定模型）、PassThrough（透传请求模型）。 */
  ModelSelector: string;
  /** LLM 厂商颁发的认证信息 token 。 */
  SecretKeyIds?: string[];
  /** 默认模型，模型选择方式为 Specify 时必填。 */
  DefaultModel?: string;
  /** 开启模型降级，模型选择方式为 Specify 时必填。 */
  EnableModelFallback?: boolean;
  /** 可以配置备用模型规则，EnableSpecifyModelFallbackxa0为 true 时必填。 */
  ModelFallbackRule?: CloudNativeAPIGatewayLLMModelFallbackRule;
  /** 开启模型参数校验，是否校验客户端传递的 model 参数,xa0模型选择方式为 PassThrough 时必填 */
  EnableModelParamCheck?: boolean;
  /** 模型检验信息，EnableModelParamCheckxa0为 true 时必填。 */
  ModelParamCheckRule?: CloudNativeAPIGatewayLLMModelParamCheckInfo;
  /** 描述。 */
  Description?: string;
  /** 服务提供商自定义 url */
  UpstreamURL?: string;
  /** 连接超时时间取值范围：[1, 3600000]单位：毫秒默认值：10000 */
  ConnectTimeout?: number;
  /** 写入超时时间取值范围：[1, 3600000]单位：毫秒默认值：60000 */
  WriteTimeout?: number;
  /** 读取超时时间取值范围：[1, 3600000]单位：毫秒默认值：60000 */
  ReadTimeout?: number;
  /** 重试次数取值范围：[0, 5]单位：次默认值：0 */
  Retries?: number;
  /** 路径拼接模式枚举值：FixedPath： 固定地址AutoConcat： 自动拼接 */
  UpstreamUrlMode?: string;
  /** sni */
  SNI?: string;
  /** 模型服务级别的配额上限（RPM/TPM）。需要网关版本 ≥ 3.9.4。 */
  QuotaLimit?: AIGWLLMQuotaLimit;
  /** 标签 */
  Tags?: string[];
}

declare interface CreateCloudNativeAPIGatewayLLMModelServiceResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 模型服务 ID，全局唯一标识。 */
  ModelServiceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayMCPServerRequest {
  /** 实例 ID */
  GatewayId: string;
  /** 名字 */
  Name: string;
  /** 展示名字 */
  DisplayName: string;
  /** MCP服务类型MCPRest2MCP */
  ServerType: string;
  /** 传输协议：StreamableHttp或SSE枚举值：StreamableHttp： Streamable HTTPSSE： Server-Sent Events */
  Transport: string;
  /** 后端类型枚举值：MCPRegistry： mcp 注册中心- RegistryRegistry： 普通注册中心HostIP： 域名或ipVirtualMCPServer： 虚拟MCPServer */
  UpstreamType: string;
  /** 注册中心来源信息 */
  UpstreamInfo?: AIGWMCPUpstreamInfo;
  /** 会话配置 */
  SessionConfig?: AIGWMCPSessionConfig;
  /** 超时时间，单位ms，最大60000 */
  Timeout?: number;
  /** 重试次数，最大3次 */
  RetryCount?: number;
  /** 描述 */
  Description?: string;
  /** 是否启用健康检查 */
  EnableHealthCheck?: boolean;
  /** 健康检查配置 */
  HealthCheck?: AIGWHealthCheckSetting;
}

declare interface CreateCloudNativeAPIGatewayMCPServerResponse {
  /** 创建结果 */
  Result?: CNAPIGwCreateCommonResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayMCPToolRequest {
  /** 内容类型 */
  ContentType: string;
  /** 展示名字 */
  DisplayName?: string;
  /** 服务 id */
  ServiceId?: string;
}

declare interface CreateCloudNativeAPIGatewayMCPToolResponse {
  /** 创建结果 */
  Result?: CNAPIGwCreateCommonResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewaySecretKeyRequest {
  /** 实例 ID */
  GatewayId: string;
  /** 密钥协议类型。枚举值：ApiKeyBasicHmacOAuth2JWT */
  SecretType: string;
  /** 密钥名称，2-60 字符。 */
  Name: string;
  /** 密钥生成方式。枚举值：System：系统自动生成Custom：用户自定义（需传 SecretValue）KMS：使用 KMS 密钥（需传 KmsKeyName 与 KmsKeyVersion） */
  GenerateType: string;
  /** 密钥归属资源类型。枚举值：Consumer：消费者ModelService：模型服务 */
  ResourceType: string;
  /** KMS 密钥名称。GenerateType=KMS 时必填。 */
  KmsKeyName?: string;
  /** KMS 密钥版本。GenerateType=KMS 时必填。 */
  KmsKeyVersion?: string;
  /** 密钥值，长度 8-256。GenerateType=Custom 时必填。 */
  SecretValue?: string;
  /** 密钥描述。最长 200 字符。 */
  Description?: string;
}

declare interface CreateCloudNativeAPIGatewaySecretKeyResponse {
  /** 创建结果。包含成功标识与新建资源 ID。 */
  Result?: CNAPIGwCreateCommonResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayConsumerGroupRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者组ID */
  ConsumerGroupId: string;
}

declare interface DeleteCloudNativeAPIGatewayConsumerGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayConsumerRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者ID */
  ConsumerId: string;
}

declare interface DeleteCloudNativeAPIGatewayConsumerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayLLMModelAPIRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 模型 API ID，全局唯一标识。 */
  ModelAPIId: string;
}

declare interface DeleteCloudNativeAPIGatewayLLMModelAPIResponse {
  /** 是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayLLMModelServiceRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 模型服务 ID，全局唯一标识。 */
  ModelServiceId: string;
}

declare interface DeleteCloudNativeAPIGatewayLLMModelServiceResponse {
  /** 是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayMCPServerRequest {
  /** 云原生API网关实例ID */
  GatewayId: string;
  /** MCP服务ID */
  ServerId: string;
}

declare interface DeleteCloudNativeAPIGatewayMCPServerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayMCPToolRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 工具id */
  ToolId: string;
  /** MCP 服务 id */
  ServerId: string;
}

declare interface DeleteCloudNativeAPIGatewayMCPToolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewaySecretKeyRequest {
  /** 网关ID */
  GatewayId: string;
  /** 密钥id */
  SecretKeyId: string;
}

declare interface DeleteCloudNativeAPIGatewaySecretKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayConsumerGroupRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者组ID */
  ConsumerGroupId: string;
}

declare interface DescribeCloudNativeAPIGatewayConsumerGroupResponse {
  /** 消费者组详情。 */
  Result?: CNAPIGwConsumerGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayConsumerRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者ID */
  ConsumerId: string;
}

declare interface DescribeCloudNativeAPIGatewayConsumerResponse {
  /** 消费者详情 */
  Result?: CNAPIGwConsumer;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayLLMModelAPIRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 模型 API ID，全局唯一标识。 */
  ModelAPIId: string;
}

declare interface DescribeCloudNativeAPIGatewayLLMModelAPIResponse {
  /** 模型 API 信息。 */
  Result?: CloudNativeAPIGatewayLLMModelAPI;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayLLMModelAPIsRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 每页条数，范围 [1, 1000]，默认 10。 */
  Limit?: number;
  /** 起始位置，从 0 开始。 */
  Offset?: number;
  /** 过滤条件。当前未启用具体字段。 */
  Filters?: Filter[];
  /** 模糊匹配模型 API 名称。 */
  Keyword?: string;
  /** 消费者组 ID（以 cg- 开头），与 UseToBind 搭配使用。 */
  ConsumerGroupId?: string;
  /** 是否用于绑定场景。true 时仅返回可被绑定到指定消费者组的模型 API。 */
  UseToBind?: boolean;
}

declare interface DescribeCloudNativeAPIGatewayLLMModelAPIsResponse {
  /** 模型 API 列表。 */
  Result?: ListCloudNativeAPIGatewayLLMModelAPI;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayLLMModelServiceRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 模型服务 ID，全局唯一标识。 */
  ModelServiceId: string;
}

declare interface DescribeCloudNativeAPIGatewayLLMModelServiceResponse {
  /** 模型服务。 */
  Result?: CloudNativeAPIGatewayLLMModelService;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayLLMModelServicesRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 返回数量，默认为 10，最大值为 1000。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤条件，多个过滤条件之间是“与”的关系，支持 Name */
  Filters?: Filter[];
  /** 通过模型 API 筛选模型服务 */
  ModelAPIId?: string;
  /** 通过密匙查询绑定的模型服务 */
  SecretKeyId?: string;
  /** 搜索关键词，模糊匹配 name 和 description */
  Keyword?: string;
}

declare interface DescribeCloudNativeAPIGatewayLLMModelServicesResponse {
  /** 模型服务列表。 */
  Result?: ListCloudNativeAPIGatewayLLMModelService;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayLLMTokenUsageListRequest {
  /** 网关实例Id */
  GatewayId: string;
  /** 查询起始时间戳单位：秒 */
  StartTime: number;
  /** 查询结束时间戳单位：秒 */
  EndTime: number;
  /** 查询过滤条件，Name取值为ConsumerId或ConsumerGroupId */
  Filters?: Filter[];
  /** 分页条件，每页条数 */
  Limit?: number;
  /** 分页条件，分页偏移量 */
  Offset?: number;
}

declare interface DescribeCloudNativeAPIGatewayLLMTokenUsageListResponse {
  /** 查询Token用量明细结果 */
  Result?: AIGWLLMTokenUsageListResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsRequest {
  /** 网关实例Id */
  GatewayId: string;
  /** 查询开始时间戳单位：秒 */
  StartTime: number;
  /** 查询结束时间戳单位：秒 */
  EndTime: number;
  /** 查询过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse {
  /** 请求结果 */
  Result?: AIGWLLMTokenUsageStatisticsResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPServerACLRequest {
  /** 网关实例 ID */
  GatewayId: string;
  /** MCP服务ID */
  ServerId: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPServerACLResponse {
  /** MCP 服务 ACL 列表结果 */
  Result?: AIGWMCPServerACLResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPServerAuthRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** MCP服务ID */
  ServerId: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPServerAuthResponse {
  /** MCP服务认证查询结果 */
  Result?: AIGWMCPServerAuthResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPServerListRequest {
  /** 实例 ID */
  GatewayId: string;
  /** 分页大小 */
  Limit: number;
  /** 分页偏移 */
  Offset: number;
}

declare interface DescribeCloudNativeAPIGatewayMCPServerListResponse {
  /** MCP Server 列表结果 */
  Result?: AIGWMCPServerList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPServerRequest {
  /** 云原生API网关实例ID */
  GatewayId: string;
  /** MCP服务ID */
  ServerId: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPServerResponse {
  /** mcp server详情 */
  Result?: AIGWMCPServer;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPToolACLListRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** MCP 服务ID */
  ServerId: string;
  /** 分页大小 */
  Limit: number;
  /** 分页偏移 */
  Offset: number;
  /** 搜索关键词 */
  Keyword?: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPToolACLListResponse {
  /** MCP 服务 Tool ACL 列表结果 */
  Result?: AIGWMCPToolACLListResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPToolListRequest {
  /** 实例 id */
  GatewayId: string;
  /** MCP服务 id */
  ServerId: string;
  /** 条数取值范围：[1, 100] */
  Limit: number;
  /** 开始位置取值范围：[1, 100000] */
  Offset: number;
}

declare interface DescribeCloudNativeAPIGatewayMCPToolListResponse {
  /** tool 列表 */
  Result?: CNAPIGwMCPToolList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPToolRequest {
  /** 网关实例 id */
  GatewayId: string;
  /** MCP Server id */
  ServerId: string;
  /** 工具 id */
  ToolId: string;
}

declare interface DescribeCloudNativeAPIGatewayMCPToolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewaySecretKeyRequest {
  /** 实例 ID */
  GatewayId: string;
  /** 密钥id */
  SecretKeyId: string;
}

declare interface DescribeCloudNativeAPIGatewaySecretKeyResponse {
  /** 密钥详情。 */
  Result?: CNAPIGwSecretKey;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewaySecretKeyValueRequest {
  /** 实例 ID */
  GatewayId: string;
  /** 密钥id */
  SecretKeyId: string;
}

declare interface DescribeCloudNativeAPIGatewaySecretKeyValueResponse {
  /** 密钥值 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayConsumerGroupRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者组 ID（以 cg- 开头）。 */
  ConsumerGroupId: string;
  /** 消费者组名称，最长 60 字符。 */
  Name: string;
  /** 启用状态。枚举值：Enable：启用Disable：禁用 */
  Status: string;
  /** 消费者组描述。最长 200 字符。 */
  Description?: string;
}

declare interface ModifyCloudNativeAPIGatewayConsumerGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayConsumerRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者 ID。 */
  ConsumerId: string;
  /** 消费者名称，最长 60 字符。 */
  Name: string;
  /** 消费者描述。最长 200 字符。 */
  Description?: string;
}

declare interface ModifyCloudNativeAPIGatewayConsumerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayLLMModelAPIRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 模型 API ID，全局唯一标识。 */
  ModelAPIId: string;
  /** 模型 API 名称，最长 60 字符。 */
  Name?: string;
  /** 统一前缀路径（可选）。例如 /v1/openai。 */
  BasePath?: string;
  /** 模型 API 描述。最长 200 字符。 */
  Description?: string;
  /** 关联的模型服务 ID 列表，长度 1-10。 */
  ListModelServiceId?: string[];
  /** 多模型服务路由策略。ListModelServiceId 多于 1 项时必填。 */
  ModelServiceRoute?: CloudNativeAPIGatewayLLMModelServiceRoute;
  /** Header 路由匹配规则。当前仅支持 Operator=exact。 */
  MatchHeaders?: AIGWKVMatch[];
  /** 是否启用跨服务 Fallback。 */
  EnableCrossServiceFallback?: boolean;
  /** 跨服务 Fallback 配置。EnableCrossServiceFallback=true 时必填。 */
  CrossServiceFallbackConfig?: AIGWCrossServiceFallbackConfig;
  /** 标签过滤策略。需要网关版本 ≥ 3.9.4。 */
  TagFilter?: AIGWTagFilter;
  /** 日志输出配置。需要网关版本 ≥ 3.9.4。 */
  LogConfig?: AIGWLogConfig;
}

declare interface ModifyCloudNativeAPIGatewayLLMModelAPIResponse {
  /** 是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayLLMModelServiceRequest {
  /** 网关 id。 */
  GatewayId: string;
  /** 模型服务 ID，全局唯一标识。 */
  ModelServiceId: string;
  /** 修改服务名称，长度2-50字符，支持中英文、数字、下划线。 */
  Name?: string;
  /** 修改默认模型，模型选择方式为 Specify 时必填。 */
  DefaultModel?: string;
  /** 修改模型选择方式，选项：Specify（指定模型）、PassThrough（透传请求模型）。 */
  ModelSelector?: string;
  /** 修改开启模型降级，模型选择方式为 Specify 时必填。 */
  EnableModelFallback?: boolean;
  /** 修改可以配置备用模型规则，EnableSpecifyModelFallback 为 true 时必填。 */
  ModelFallbackRule?: CloudNativeAPIGatewayLLMModelFallbackRule;
  /** 修改开启模型参数校验，是否校验客户端传递的 model 参数, 模型选择方式为 PassThrough 时必填 */
  EnableModelParamCheck?: boolean;
  /** 修改模型检验信息，EnableModelParamCheck 为 true 时必填。 */
  ModelParamCheckRule?: CloudNativeAPIGatewayLLMModelParamCheckInfo;
  /** 修改描述。 */
  Description?: string;
  /** 修改模型服务地址 */
  UpstreamURL?: string;
  /** 连接超时时间取值范围：[1, 3600000]单位：毫秒默认值：10000 */
  ConnectTimeout?: number;
  /** 写入超时时间取值范围：[1, 3600000]单位：毫秒默认值：60000 */
  WriteTimeout?: number;
  /** 读取超时时间取值范围：[1, 3600000]单位：毫秒默认值：60000 */
  ReadTimeout?: number;
  /** 重试次数取值范围：[0, 5]单位：次默认值：0 */
  Retries?: number;
  /** 路径拼接模式枚举值：FixedPath： 固定路径AutoConcat： 自动拼接 */
  UpstreamUrlMode?: string;
  /** SNI */
  SNI?: string;
  /** 模型服务级别的配额上限（RPM/TPM）。需要网关版本 ≥ 3.9.4。 */
  QuotaLimit?: AIGWLLMQuotaLimit;
  /** 标签 */
  Tags?: string[];
}

declare interface ModifyCloudNativeAPIGatewayLLMModelServiceResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPServerACLRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** MCP服务ID */
  ServerId: string;
  /** ACL类型枚举值：None： 不开启Allow： 白名单Deny： 黑名单默认值：None */
  ACLType: string;
  /** 需要关联的消费者ID列表 */
  ACLConsumerIds?: string[];
  /** 需要关联的消费者组ID列表 */
  ACLConsumerGroupIds?: string[];
}

declare interface ModifyCloudNativeAPIGatewayMCPServerACLResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPServerAuthRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** MCP服务ID */
  ServerId: string;
  /** 认证类型枚举值：None： 无认证ApiKey： API Key认证 */
  AuthType: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPServerAuthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPServerRequest {
  /** 实例 ID */
  GatewayId: string;
  /** 展示名字 */
  DisplayName: string;
  /** 服务 id */
  ServerId: string;
  /** 后端类型枚举值：HostIP： 域名 ipMCPRegistry： MCP 注册中心VirtualMCPServer： 虚拟MCP 服务 */
  UpstreamType: string;
  /** 超时时间，单位ms，最大60000 */
  Timeout?: number;
  /** 重试次数，最大3次 */
  RetryCount?: number;
  /** 注册中心来源信息 */
  UpstreamInfo?: AIGWMCPUpstreamInfo;
  /** 会话配置 */
  SessionConfig?: AIGWMCPSessionConfig;
  /** 描述 */
  Description?: string;
  /** 是否启用健康检查 */
  EnableHealthCheck?: boolean;
  /** 健康检查配置 */
  HealthCheck?: AIGWHealthCheckSetting;
}

declare interface ModifyCloudNativeAPIGatewayMCPServerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPServerStatusRequest {
  /** 实例 ID */
  GatewayId: string;
  /** mcp server id */
  ServerId: string;
  /** mcp server状态枚举值：Online： 上线Offline： 下线 */
  Status: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPServerStatusResponse {
  /** 创建结果 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPToolACLRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** MCP服务ID */
  ServerId: string;
  /** MCP工具ID */
  ToolId: string;
  /** 鉴权类型枚举值：None： 继承server鉴权类型Allow： 白名单Deny： 黑名单 */
  ACLType: string;
  /** 需要关联的消费者ID列表 */
  ACLConsumerIds?: string[];
  /** 需要关联的消费者组ID列表 */
  ACLConsumerGroupIds?: string[];
}

declare interface ModifyCloudNativeAPIGatewayMCPToolACLResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPToolRequest {
  /** 网关实例 id */
  GatewayId: string;
  /** MCPserverId */
  ServerId: string;
  /** 工具 id */
  ToolId: string;
  /** 工具名字 */
  Name: string;
  /** 路径 */
  Path: string;
  /** 报文格式 */
  ContentType: string;
  /** 请求方法枚举值：GET： GETPUT： PUTPOST： POSTDELETE： DELETEPATCH： PATCH */
  Method: string;
  /** 展示 */
  DisplayName?: string;
  /** 输入参数 */
  InputParams?: CNAPIGwMCPToolParam[];
  /** 描述 */
  Description?: string;
  /** tool版本 */
  ToolVersion?: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPToolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPToolStatusRequest {
  /** 实例 ID */
  GatewayId: string;
  /** mcp server id */
  ServerId: string;
  /** mcp tool 状态枚举值：Enable： 启用Disable： 禁用 */
  Status: string;
  /** mcp tool id */
  ToolId: string;
}

declare interface ModifyCloudNativeAPIGatewayMCPToolStatusResponse {
  /** 创建结果 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewaySecretKeyRequest {
  /** 实例 ID */
  GatewayId: string;
  /** 密钥名字 */
  Name: string;
  /** 密钥id */
  SecretKeyId: string;
  /** 描述,200字以内 */
  Description?: string;
}

declare interface ModifyCloudNativeAPIGatewaySecretKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveCloudNativeAPIGatewayConsumerGroupAuthRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 授权资源类型。枚举值：ModelAPI：模型 APIMCPServer：MCP Server */
  ResourceType: string;
  /** 对应资源的 ID。ResourceType=ModelAPI 时是模型 API IDResourceType=MCPServer 时是 MCP Server ID */
  ResourceId: string;
  /** 消费者组 ID 列表（每个 ID 以 cg- 开头），长度 1-10。 */
  ConsumerGroupIds: string[];
}

declare interface RemoveCloudNativeAPIGatewayConsumerGroupAuthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveCloudNativeAPIGatewayConsumerInGroupRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 消费者组 ID（以 cg- 开头）。 */
  ConsumerGroupId: string;
  /** 消费者 ID 列表，长度 1-10。 */
  ConsumerIds: string[];
}

declare interface RemoveCloudNativeAPIGatewayConsumerInGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindCloudNativeAPIGatewaySecretKeyRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 资源类型 */
  ResourceType: string;
  /** 资源ID，当前最多支持一个 */
  ResourceIds: string[];
  /** 密钥id */
  SecretKeyId: string;
}

declare interface UnbindCloudNativeAPIGatewaySecretKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cngw 云原生智能网关} */
declare interface Cngw {
  (): Versions;
  /** 添加AI网关消费者组授权 {@link AddCloudNativeAPIGatewayConsumerGroupAuthRequest} {@link AddCloudNativeAPIGatewayConsumerGroupAuthResponse} */
  AddCloudNativeAPIGatewayConsumerGroupAuth(data: AddCloudNativeAPIGatewayConsumerGroupAuthRequest, config?: AxiosRequestConfig): AxiosPromise<AddCloudNativeAPIGatewayConsumerGroupAuthResponse>;
  /** AI网关添加消费者到消费者组 {@link AddCloudNativeAPIGatewayConsumerInGroupRequest} {@link AddCloudNativeAPIGatewayConsumerInGroupResponse} */
  AddCloudNativeAPIGatewayConsumerInGroup(data: AddCloudNativeAPIGatewayConsumerInGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AddCloudNativeAPIGatewayConsumerInGroupResponse>;
  /** 绑定AI网关密钥 {@link BindCloudNativeAPIGatewaySecretKeyRequest} {@link BindCloudNativeAPIGatewaySecretKeyResponse} */
  BindCloudNativeAPIGatewaySecretKey(data: BindCloudNativeAPIGatewaySecretKeyRequest, config?: AxiosRequestConfig): AxiosPromise<BindCloudNativeAPIGatewaySecretKeyResponse>;
  /** 创建AI网关消费者 {@link CreateCloudNativeAPIGatewayConsumerRequest} {@link CreateCloudNativeAPIGatewayConsumerResponse} */
  CreateCloudNativeAPIGatewayConsumer(data: CreateCloudNativeAPIGatewayConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayConsumerResponse>;
  /** 创建AI网关消费者分组 {@link CreateCloudNativeAPIGatewayConsumerGroupRequest} {@link CreateCloudNativeAPIGatewayConsumerGroupResponse} */
  CreateCloudNativeAPIGatewayConsumerGroup(data: CreateCloudNativeAPIGatewayConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayConsumerGroupResponse>;
  /** 创建 AI 网关模型 API {@link CreateCloudNativeAPIGatewayLLMModelAPIRequest} {@link CreateCloudNativeAPIGatewayLLMModelAPIResponse} */
  CreateCloudNativeAPIGatewayLLMModelAPI(data: CreateCloudNativeAPIGatewayLLMModelAPIRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayLLMModelAPIResponse>;
  /** 创建 LLM 模型服务 {@link CreateCloudNativeAPIGatewayLLMModelServiceRequest} {@link CreateCloudNativeAPIGatewayLLMModelServiceResponse} */
  CreateCloudNativeAPIGatewayLLMModelService(data: CreateCloudNativeAPIGatewayLLMModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayLLMModelServiceResponse>;
  /** AI网关新建MCP服务 {@link CreateCloudNativeAPIGatewayMCPServerRequest} {@link CreateCloudNativeAPIGatewayMCPServerResponse} */
  CreateCloudNativeAPIGatewayMCPServer(data: CreateCloudNativeAPIGatewayMCPServerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayMCPServerResponse>;
  /** AI网关新建MCP Tool {@link CreateCloudNativeAPIGatewayMCPToolRequest} {@link CreateCloudNativeAPIGatewayMCPToolResponse} */
  CreateCloudNativeAPIGatewayMCPTool(data: CreateCloudNativeAPIGatewayMCPToolRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayMCPToolResponse>;
  /** 创建AI网关密钥 {@link CreateCloudNativeAPIGatewaySecretKeyRequest} {@link CreateCloudNativeAPIGatewaySecretKeyResponse} */
  CreateCloudNativeAPIGatewaySecretKey(data: CreateCloudNativeAPIGatewaySecretKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewaySecretKeyResponse>;
  /** 删除AI网关消费者 {@link DeleteCloudNativeAPIGatewayConsumerRequest} {@link DeleteCloudNativeAPIGatewayConsumerResponse} */
  DeleteCloudNativeAPIGatewayConsumer(data: DeleteCloudNativeAPIGatewayConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayConsumerResponse>;
  /** 删除AI网关消费者组 {@link DeleteCloudNativeAPIGatewayConsumerGroupRequest} {@link DeleteCloudNativeAPIGatewayConsumerGroupResponse} */
  DeleteCloudNativeAPIGatewayConsumerGroup(data: DeleteCloudNativeAPIGatewayConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayConsumerGroupResponse>;
  /** 删除 LLM 模型 API {@link DeleteCloudNativeAPIGatewayLLMModelAPIRequest} {@link DeleteCloudNativeAPIGatewayLLMModelAPIResponse} */
  DeleteCloudNativeAPIGatewayLLMModelAPI(data: DeleteCloudNativeAPIGatewayLLMModelAPIRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayLLMModelAPIResponse>;
  /** 删除 LLM 模型服务 {@link DeleteCloudNativeAPIGatewayLLMModelServiceRequest} {@link DeleteCloudNativeAPIGatewayLLMModelServiceResponse} */
  DeleteCloudNativeAPIGatewayLLMModelService(data: DeleteCloudNativeAPIGatewayLLMModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayLLMModelServiceResponse>;
  /** AI网关删除MCP服务 {@link DeleteCloudNativeAPIGatewayMCPServerRequest} {@link DeleteCloudNativeAPIGatewayMCPServerResponse} */
  DeleteCloudNativeAPIGatewayMCPServer(data: DeleteCloudNativeAPIGatewayMCPServerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayMCPServerResponse>;
  /** 删除AI网关MCP Tool {@link DeleteCloudNativeAPIGatewayMCPToolRequest} {@link DeleteCloudNativeAPIGatewayMCPToolResponse} */
  DeleteCloudNativeAPIGatewayMCPTool(data: DeleteCloudNativeAPIGatewayMCPToolRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayMCPToolResponse>;
  /** 删除AI网关密钥 {@link DeleteCloudNativeAPIGatewaySecretKeyRequest} {@link DeleteCloudNativeAPIGatewaySecretKeyResponse} */
  DeleteCloudNativeAPIGatewaySecretKey(data: DeleteCloudNativeAPIGatewaySecretKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewaySecretKeyResponse>;
  /** 查询AI网关消费者详情 {@link DescribeCloudNativeAPIGatewayConsumerRequest} {@link DescribeCloudNativeAPIGatewayConsumerResponse} */
  DescribeCloudNativeAPIGatewayConsumer(data: DescribeCloudNativeAPIGatewayConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayConsumerResponse>;
  /** 查询AI网关消费者分组 {@link DescribeCloudNativeAPIGatewayConsumerGroupRequest} {@link DescribeCloudNativeAPIGatewayConsumerGroupResponse} */
  DescribeCloudNativeAPIGatewayConsumerGroup(data: DescribeCloudNativeAPIGatewayConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayConsumerGroupResponse>;
  /** 查询单个LLM 模型 API {@link DescribeCloudNativeAPIGatewayLLMModelAPIRequest} {@link DescribeCloudNativeAPIGatewayLLMModelAPIResponse} */
  DescribeCloudNativeAPIGatewayLLMModelAPI(data: DescribeCloudNativeAPIGatewayLLMModelAPIRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayLLMModelAPIResponse>;
  /** 查询 LLM 模型 API 列表 {@link DescribeCloudNativeAPIGatewayLLMModelAPIsRequest} {@link DescribeCloudNativeAPIGatewayLLMModelAPIsResponse} */
  DescribeCloudNativeAPIGatewayLLMModelAPIs(data: DescribeCloudNativeAPIGatewayLLMModelAPIsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayLLMModelAPIsResponse>;
  /** 查询单个 LLM 模型服务列表 {@link DescribeCloudNativeAPIGatewayLLMModelServiceRequest} {@link DescribeCloudNativeAPIGatewayLLMModelServiceResponse} */
  DescribeCloudNativeAPIGatewayLLMModelService(data: DescribeCloudNativeAPIGatewayLLMModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayLLMModelServiceResponse>;
  /** 查询 LLM 模型服务列表 {@link DescribeCloudNativeAPIGatewayLLMModelServicesRequest} {@link DescribeCloudNativeAPIGatewayLLMModelServicesResponse} */
  DescribeCloudNativeAPIGatewayLLMModelServices(data: DescribeCloudNativeAPIGatewayLLMModelServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayLLMModelServicesResponse>;
  /** 查询AI网关Token用量详情 {@link DescribeCloudNativeAPIGatewayLLMTokenUsageListRequest} {@link DescribeCloudNativeAPIGatewayLLMTokenUsageListResponse} */
  DescribeCloudNativeAPIGatewayLLMTokenUsageList(data: DescribeCloudNativeAPIGatewayLLMTokenUsageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayLLMTokenUsageListResponse>;
  /** 查询AI网关Token用量消耗统计汇总结果 {@link DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsRequest} {@link DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse} */
  DescribeCloudNativeAPIGatewayLLMTokenUsageStatistics(data: DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayLLMTokenUsageStatisticsResponse>;
  /** AI网关查询MCP服务 {@link DescribeCloudNativeAPIGatewayMCPServerRequest} {@link DescribeCloudNativeAPIGatewayMCPServerResponse} */
  DescribeCloudNativeAPIGatewayMCPServer(data: DescribeCloudNativeAPIGatewayMCPServerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayMCPServerResponse>;
  /** 查看 MCP Server ACL {@link DescribeCloudNativeAPIGatewayMCPServerACLRequest} {@link DescribeCloudNativeAPIGatewayMCPServerACLResponse} */
  DescribeCloudNativeAPIGatewayMCPServerACL(data: DescribeCloudNativeAPIGatewayMCPServerACLRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayMCPServerACLResponse>;
  /** 查看 MCP Server 认证 {@link DescribeCloudNativeAPIGatewayMCPServerAuthRequest} {@link DescribeCloudNativeAPIGatewayMCPServerAuthResponse} */
  DescribeCloudNativeAPIGatewayMCPServerAuth(data: DescribeCloudNativeAPIGatewayMCPServerAuthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayMCPServerAuthResponse>;
  /** AI网关查询MCP服务列表 {@link DescribeCloudNativeAPIGatewayMCPServerListRequest} {@link DescribeCloudNativeAPIGatewayMCPServerListResponse} */
  DescribeCloudNativeAPIGatewayMCPServerList(data: DescribeCloudNativeAPIGatewayMCPServerListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayMCPServerListResponse>;
  /** 查看AI网关MCP Tool {@link DescribeCloudNativeAPIGatewayMCPToolRequest} {@link DescribeCloudNativeAPIGatewayMCPToolResponse} */
  DescribeCloudNativeAPIGatewayMCPTool(data: DescribeCloudNativeAPIGatewayMCPToolRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayMCPToolResponse>;
  /** 查看 MCP Server Tool ACL 列表 {@link DescribeCloudNativeAPIGatewayMCPToolACLListRequest} {@link DescribeCloudNativeAPIGatewayMCPToolACLListResponse} */
  DescribeCloudNativeAPIGatewayMCPToolACLList(data: DescribeCloudNativeAPIGatewayMCPToolACLListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayMCPToolACLListResponse>;
  /** 查询AI网关MCP Tool 列表 {@link DescribeCloudNativeAPIGatewayMCPToolListRequest} {@link DescribeCloudNativeAPIGatewayMCPToolListResponse} */
  DescribeCloudNativeAPIGatewayMCPToolList(data: DescribeCloudNativeAPIGatewayMCPToolListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayMCPToolListResponse>;
  /** 查询AI网关密钥详情 {@link DescribeCloudNativeAPIGatewaySecretKeyRequest} {@link DescribeCloudNativeAPIGatewaySecretKeyResponse} */
  DescribeCloudNativeAPIGatewaySecretKey(data: DescribeCloudNativeAPIGatewaySecretKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewaySecretKeyResponse>;
  /** 查询AI网关密钥值 {@link DescribeCloudNativeAPIGatewaySecretKeyValueRequest} {@link DescribeCloudNativeAPIGatewaySecretKeyValueResponse} */
  DescribeCloudNativeAPIGatewaySecretKeyValue(data: DescribeCloudNativeAPIGatewaySecretKeyValueRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewaySecretKeyValueResponse>;
  /** 修改AI网关消费者 {@link ModifyCloudNativeAPIGatewayConsumerRequest} {@link ModifyCloudNativeAPIGatewayConsumerResponse} */
  ModifyCloudNativeAPIGatewayConsumer(data: ModifyCloudNativeAPIGatewayConsumerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayConsumerResponse>;
  /** 修改AI网关消费者组 {@link ModifyCloudNativeAPIGatewayConsumerGroupRequest} {@link ModifyCloudNativeAPIGatewayConsumerGroupResponse} */
  ModifyCloudNativeAPIGatewayConsumerGroup(data: ModifyCloudNativeAPIGatewayConsumerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayConsumerGroupResponse>;
  /** 修改 LLM 模型 API {@link ModifyCloudNativeAPIGatewayLLMModelAPIRequest} {@link ModifyCloudNativeAPIGatewayLLMModelAPIResponse} */
  ModifyCloudNativeAPIGatewayLLMModelAPI(data: ModifyCloudNativeAPIGatewayLLMModelAPIRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayLLMModelAPIResponse>;
  /** 修改 LLM 模型服务 {@link ModifyCloudNativeAPIGatewayLLMModelServiceRequest} {@link ModifyCloudNativeAPIGatewayLLMModelServiceResponse} */
  ModifyCloudNativeAPIGatewayLLMModelService(data: ModifyCloudNativeAPIGatewayLLMModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayLLMModelServiceResponse>;
  /** AI网关修改MCP服务 {@link ModifyCloudNativeAPIGatewayMCPServerRequest} {@link ModifyCloudNativeAPIGatewayMCPServerResponse} */
  ModifyCloudNativeAPIGatewayMCPServer(data: ModifyCloudNativeAPIGatewayMCPServerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayMCPServerResponse>;
  /** 修改 MCP Server ACL {@link ModifyCloudNativeAPIGatewayMCPServerACLRequest} {@link ModifyCloudNativeAPIGatewayMCPServerACLResponse} */
  ModifyCloudNativeAPIGatewayMCPServerACL(data: ModifyCloudNativeAPIGatewayMCPServerACLRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayMCPServerACLResponse>;
  /** 修改 MCP Server 认证 {@link ModifyCloudNativeAPIGatewayMCPServerAuthRequest} {@link ModifyCloudNativeAPIGatewayMCPServerAuthResponse} */
  ModifyCloudNativeAPIGatewayMCPServerAuth(data: ModifyCloudNativeAPIGatewayMCPServerAuthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayMCPServerAuthResponse>;
  /** AI网关修改MCP上下线状态 {@link ModifyCloudNativeAPIGatewayMCPServerStatusRequest} {@link ModifyCloudNativeAPIGatewayMCPServerStatusResponse} */
  ModifyCloudNativeAPIGatewayMCPServerStatus(data: ModifyCloudNativeAPIGatewayMCPServerStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayMCPServerStatusResponse>;
  /** 修改AI网关MCP Tool {@link ModifyCloudNativeAPIGatewayMCPToolRequest} {@link ModifyCloudNativeAPIGatewayMCPToolResponse} */
  ModifyCloudNativeAPIGatewayMCPTool(data: ModifyCloudNativeAPIGatewayMCPToolRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayMCPToolResponse>;
  /** 修改 MCP Server Tool ACL {@link ModifyCloudNativeAPIGatewayMCPToolACLRequest} {@link ModifyCloudNativeAPIGatewayMCPToolACLResponse} */
  ModifyCloudNativeAPIGatewayMCPToolACL(data: ModifyCloudNativeAPIGatewayMCPToolACLRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayMCPToolACLResponse>;
  /** AI网关修改MCP Tool上下线状态 {@link ModifyCloudNativeAPIGatewayMCPToolStatusRequest} {@link ModifyCloudNativeAPIGatewayMCPToolStatusResponse} */
  ModifyCloudNativeAPIGatewayMCPToolStatus(data: ModifyCloudNativeAPIGatewayMCPToolStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayMCPToolStatusResponse>;
  /** 修改AI网关密钥 {@link ModifyCloudNativeAPIGatewaySecretKeyRequest} {@link ModifyCloudNativeAPIGatewaySecretKeyResponse} */
  ModifyCloudNativeAPIGatewaySecretKey(data: ModifyCloudNativeAPIGatewaySecretKeyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewaySecretKeyResponse>;
  /** 移除AI网关消费者组授权 {@link RemoveCloudNativeAPIGatewayConsumerGroupAuthRequest} {@link RemoveCloudNativeAPIGatewayConsumerGroupAuthResponse} */
  RemoveCloudNativeAPIGatewayConsumerGroupAuth(data: RemoveCloudNativeAPIGatewayConsumerGroupAuthRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveCloudNativeAPIGatewayConsumerGroupAuthResponse>;
  /** AI网关消费者组中移除消费者 {@link RemoveCloudNativeAPIGatewayConsumerInGroupRequest} {@link RemoveCloudNativeAPIGatewayConsumerInGroupResponse} */
  RemoveCloudNativeAPIGatewayConsumerInGroup(data: RemoveCloudNativeAPIGatewayConsumerInGroupRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveCloudNativeAPIGatewayConsumerInGroupResponse>;
  /** 解绑AI网关密钥 {@link UnbindCloudNativeAPIGatewaySecretKeyRequest} {@link UnbindCloudNativeAPIGatewaySecretKeyResponse} */
  UnbindCloudNativeAPIGatewaySecretKey(data: UnbindCloudNativeAPIGatewaySecretKeyRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindCloudNativeAPIGatewaySecretKeyResponse>;
}

export declare type Versions = ["2023-04-18"];

export default Cngw;
