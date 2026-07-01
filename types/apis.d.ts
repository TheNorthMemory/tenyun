/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 关联的mcp服务配置 */
declare interface AgentAppMcpServerDTO {
  /** mcp server id */
  ID: string;
  /** 是否需要鉴权 */
  NeedAuth?: boolean | null;
  /** 凭据代填的ID */
  AgentCredentialID?: string | null;
  /** 应用为OAuth2认证时，sse模式请求mcp时的资源标识 */
  SSEResourceIdentifier?: string | null;
  /** 应用为OAuth2认证时，streamable模式请求mcp时的资源标识 */
  StreamableResourceIdentifier?: string | null;
}

/** 应用关联的mcp响应 */
declare interface AgentAppMcpServerVO {
  /** 绑定ID */
  ID?: string;
  /** 需要认证 */
  NeedAuth?: boolean;
  /** 凭据ID */
  AgentCredentialID?: string;
  /** 凭据详情 */
  AgentCredentialVO?: DescribeAgentCredentialResp;
  /** mcp详情 */
  McpServerVO?: DescribeMcpServerResponseVO;
  /** 关联时间 */
  RelateTime?: string;
  /** 应用为OAuth2认证时，sse模式请求mcp时的资源标识 */
  SSEResourceIdentifier?: string | null;
  /** 应用为OAuth2认证时，streamable模式请求mcp时的资源标识 */
  StreamableResourceIdentifier?: string | null;
  /** 应用ID */
  AgentAppID?: string | null;
  /** mcp ID */
  McpServerID?: string | null;
}

/** 应用绑定模型服务入参 */
declare interface AgentAppModelServiceDTO {
  /** 模型服务ID */
  ID?: string;
  /** 是否开启流量控制 */
  InvokeLimitConfigStatus?: boolean;
  /** 流量控制 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** 是否开启token控制 */
  TokenLimitStatus?: boolean;
  /** token控制 */
  TokenLimitConfig?: TokenLimitConfigDTO;
}

/** secretKey的出参 */
declare interface AgentAppSecretKeyVO {
  /** secret id */
  SecretID?: string;
  /** secret key */
  SecretKey?: string;
}

/** Agent应用关联的服务配置 */
declare interface AgentAppServiceDTO {
  /** ID */
  ID?: string;
  /** 是否限流 */
  InvokeLimitConfigStatus?: boolean;
  /** 限流配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** 是否要认证 */
  NeedAuth?: boolean;
  /** 凭据ID */
  AgentCredentialID?: string;
}

/** 应用API详情 */
declare interface AgentAppServiceVO {
  /** ID */
  ID?: string;
  /** 应用ID */
  AgentAppID?: string;
  /** 服务ID */
  ServiceID?: string;
  /** 是否限流 */
  InvokeLimitConfigStatus?: boolean;
  /** 限流配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** 服务详情 */
  ServiceVO?: ServiceVO;
  /** 关联时间 */
  RelateTime?: string;
  /** 是否需要认证 */
  NeedAuth?: boolean;
  /** 凭据ID */
  AgentCredentialID?: string;
  /** 凭据详情 */
  AgentCredentialVO?: DescribeAgentCredentialResp;
}

/** 凭证内容 */
declare interface AgentCredentialContentDTO {
  /** 如果认证类型为sts时，该项必填 */
  STSSystem?: string;
  /** 如果认证类型为sts时，该项必填 */
  STSService?: string;
  /** 如果认证类型为reqKey时，该项必填 */
  Headers?: AgentCredentialContentHeaderDTO[];
}

/** 凭证内容头 */
declare interface AgentCredentialContentHeaderDTO {
  /** 凭据header key */
  Key?: string;
  /** 凭据header value */
  Value?: string;
}

/** BindMcpSecurityRuleDTO，替换之前的McpSecurityRule */
declare interface BindMcpSecurityRuleDTO {
  /** 规则ID */
  ID?: string;
  /** 处置动作 */
  Act?: string;
}

/** BindMcpSecurityRuleVO，重新定义了之前的McpSecurityRulesVO */
declare interface BindMcpSecurityRuleVO {
  /** 规则ID */
  ID?: string;
  /** 规则类型 */
  Type?: string;
  /** 规则名称 */
  Name?: string;
  /** 规则描述 */
  Description?: string;
  /** 风险等级 */
  RiskLevel?: string;
  /** 版本号 */
  VersionNumber?: string;
  /** 当前选择的处置动作 */
  Act?: string;
  /** 支持的处置动作 */
  SupportActs?: string[];
  /** 内容类型 */
  BodyType?: string;
  /** icon类型 */
  IconType?: string;
}

/** 匹配条件 */
declare interface CompoundCondition {
  /** 是否启用 */
  Enable?: boolean | null;
  /** 匹配信息 */
  Rules?: SimpleCondition[] | null;
}

/** 创建Agent应用的返回值，根据创建的AuthType，返回ApiKey或者SecretKey */
declare interface CreateAgentAppResp {
  /** app id */
  ID?: string;
  /** 如果authType为apiKey时，返回该字段 */
  ApiKey?: string;
  /** 如果authType为secretKey时，返回该字段 */
  SecretKey?: string;
  /** 如果authType为secretKey时，返回该字段 */
  SecretID?: string;
}

/** 自定义匹配条件 */
declare interface CustomMatch {
  /** 请求头 匹配条件 */
  HeadersMatch?: CompoundCondition | null;
  /** 请求参数 匹配条件 */
  QueryMatch?: CompoundCondition | null;
}

/** 查询App mcpServer绑定列表响应 */
declare interface DescribeAgentAppMcpServersResp {
  /** 条目总数 */
  Total?: number;
  /** 具体条目 */
  Items?: AgentAppMcpServerVO[];
}

/** 查询app详情响应 */
declare interface DescribeAgentAppResp {
  /** 租户appID */
  AppID?: number;
  /** 租户ID */
  Uin?: string;
  /** 实例ID */
  InstanceID?: string;
  /** 应用ID */
  ID?: string;
  /** 名称 */
  Name?: string;
  /** 描述 */
  Description?: string;
  /** 状态 */
  Status?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  UpdateTime?: string;
  /** 认证类型 */
  AuthType?: string;
  /** apiKeys列表，脱敏 */
  ApiKeys?: string[];
  /** secretKey列表，脱敏 */
  SecretKeys?: AgentAppSecretKeyVO[];
  /** OAuth2 Resource Server ID */
  OAuth2ResourceServerID?: string | null;
  /** 绑定mcpServer数量 */
  McpServersNum?: number;
  /** 绑定的模型服务数量 */
  ModelServicesNum?: number | null;
  /** API认证列表 */
  ConnectorIDs?: string[];
  /** 关联API数量 */
  ServicesNum?: number;
}

/** 应用服务查询 */
declare interface DescribeAgentAppServicesVO {
  /** 总数 */
  Total?: number;
  /** 数据列表 */
  Items?: AgentAppServiceVO[];
}

/** 查询App列表响应 */
declare interface DescribeAgentAppsResp {
  /** 条目总数 */
  Total?: number;
  /** 具体条目 */
  Items?: DescribeAgentAppResp[];
}

/** agentApp查询排序 */
declare interface DescribeAgentAppsSortDTO {
  /** 创建时间 */
  CreateTime?: number;
  /** 修改时间 */
  UpdateTime?: number;
  /** 名称 */
  Name?: number;
  /** 状态 */
  Status?: number;
}

/** 凭据详情响应 */
declare interface DescribeAgentCredentialResp {
  /** 租户应用ID */
  AppID?: number;
  /** 租户ID */
  Uin?: string;
  /** 实例ID */
  InstanceID?: string;
  /** 凭据ID */
  ID?: string;
  /** 凭据名称 */
  Name?: string;
  /** 状态 */
  Status?: string;
  /** 关联应用数 */
  RelateAgentAppNum?: number;
  /** 关联mcp数 */
  RelateMcpServerNum?: number;
  /** 关联模型数 */
  RelateModelNum?: number | null;
  /** 关联服务数 */
  RelateServiceNum?: number | null;
  /** 凭据内容 */
  Content?: AgentCredentialContentDTO;
  /** 创建时间 */
  CreateTime?: string;
  /** 修改时间 */
  LastUpdateTime?: string;
  /** 类型 */
  Type?: string;
}

/** DescribeMcpServerResponseVO */
declare interface DescribeMcpServerResponseVO {
  /** 实例ID */
  InstanceID?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 标签ID数组 */
  LabelIDs?: string[] | null;
  /** 目录ID数组 */
  CategoryIDs?: string[] | null;
  /** 负载方式，robin random consistentHash */
  TargetSelect?: string | null;
  /** 目标服务器 */
  TargetHosts?: TargetHostDTO[] | null;
  /** 后端协议：http https */
  HttpProtocolType?: string | null;
  /** 证书检查 */
  CheckTargetCertsError?: boolean | null;
  /** 目标路径 */
  TargetPath?: string | null;
  /** 流量控制状态 */
  InvokeLimitConfigStatus?: boolean | null;
  /** 流量控制配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO | null;
  /** IP白名单开启状态 */
  IpWhiteStatus?: boolean | null;
  /** IP白名单配置 */
  IpWhiteConfig?: IpConfig | null;
  /** IP黑名单开启状态 */
  IpBlackStatus?: boolean | null;
  /** IP黑名单配置 */
  IpBlackConfig?: IpConfig | null;
  /** mcp server ID */
  ID?: string | null;
  /** 状态 */
  Status?: string | null;
  /** 预览地址 */
  Url?: string | null;
  /** 应用 */
  App?: IDNameVO | null;
  /** 目录 */
  Catalogs?: IDNameVO[] | null;
  /** 标签 */
  Labels?: IDNameVO[] | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 最后修改时间 */
  LastUpdateTime?: string | null;
  /** 用户appID */
  AppID?: number | null;
  /** 用户ID */
  Uin?: string | null;
  /** 自定义host */
  CustomHttpHost?: string | null;
  /** Http 请求host类型 useRequestHost 保持源请求host targetHost 修正为源站host customHost 自定义host */
  HttpHostType?: string | null;
  /** 请求的超时时间 */
  Timeout?: number | null;
  /** mcp server模式 */
  Mode?: string;
  /** mcp version */
  McpVersion?: string;
  /** 封装模式下绑定的服务ID列表 */
  WrapServices?: string[] | null;
  /** 工具数量 */
  ToolNum?: number;
  /** 安全规则集响应 */
  McpSecurityRulesVO?: McpSecurityRulesVO[];
  /** 真实工具级别配置，实时拉取了tool/list做渲染的，如果tool/list不通，就拉不到。 */
  ToolConfigs?: ToolConfigVO[] | null;
  /** 访问URL */
  UrlObj?: McpUrlObj;
  /** 后端mcp服务是否正常 */
  ToolMessage?: string;
  /** 后端mcp服务的工具列表 */
  Tools?: McpTool[];
  /** 封装的API分组ID */
  WrapPaasID?: string;
  /** 关联的agentApp数量 */
  RelateAgentAppNum?: number;
  /** 插件配置 */
  PluginConfigs?: PluginConfigDTO[] | null;
}

/** ServicesVO */
declare interface DescribeMcpServersResponseVO {
  /** 条目 */
  Total?: number | null;
  /** 数组 */
  Items?: DescribeMcpServerResponseVO[] | null;
}

/** 查询模型详情的响应 */
declare interface DescribeModelResponseVO {
  /** 腾讯云AppID */
  AppID?: number;
  /** 腾讯云Uin */
  Uin?: string;
  /** 实例ID */
  InstanceID?: string;
  /** 模型ID */
  ID?: string;
  /** 模型名称 */
  Name?: string;
  /** 凭据ID */
  CredentialID?: string;
  /** 凭据名称 */
  CredentialName?: string;
  /** http协议类型 */
  HttpProtocolType?: string;
  /** https时，是否校验目标证书 */
  CheckTargetCertsError?: boolean;
  /** http协议版本：1.1/2.0 */
  HttpProtocolVersion?: string;
  /** 目标路径 */
  TargetPath?: string;
  /** 目标器列表 */
  TargetHosts?: TargetHostDTO[];
  /** 被模型服务使用的个数 */
  ModelServiceCount?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 最后修改时间 */
  LastUpdateTime?: string;
  /** model ID */
  ModelID?: string;
  /** 描述 */
  Description?: string;
}

/** 查询模型服务详情的响应 */
declare interface DescribeModelServiceResponseVO {
  /** 腾讯云AppID */
  AppID?: number;
  /** 腾讯云Uin */
  Uin?: string;
  /** 实例ID */
  InstanceID?: string;
  /** 模型ID */
  ID?: string;
  /** 模型名称 */
  Name?: string;
  /** 描述 */
  Description?: string;
  /** 访问路径 */
  PubPath?: string;
  /** 路径匹配方式：absolute，prefix，regex */
  PathMatchType?: string;
  /** 目标模型列表 */
  TargetModels?: TargetModelDTO[] | null;
  /** 模板模型的名称列表 */
  ModelNames?: string[] | null;
  /** 是否开启限流 */
  InvokeLimitConfigStatus?: boolean;
  /** 限流配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** 创建时间 */
  CreateTime?: string;
  /** 最后修改时间 */
  LastUpdateTime?: string;
  /** 是否开启token控制 */
  TokenLimitStatus?: boolean;
  /** token控制 */
  TokenLimitConfig?: TokenLimitConfigDTO;
  /** 是否开启tms配置 */
  TmsStatus?: boolean;
  /** tms配置 */
  TmsConfig?: TmsConfigDTO;
  /** 是否开启IP白名单 */
  IpWhiteStatus?: boolean;
  /** IP白名单列表 */
  IpWhiteList?: string[] | null;
  /** 是否开启IP黑名单 */
  IpBlackStatus?: boolean;
  /** IP黑名单列表 */
  IpBlackList?: string[] | null;
  /** 插件配置 */
  PluginConfigs?: PluginConfigDTO[] | null;
  /** 超时配置，单位秒 */
  Timeout?: number;
  /** 状态：normal，disabled */
  Status?: string;
  /** 关联应用数 */
  RelateAgentAppNum?: number;
  /** 请求路径 */
  Url?: string;
  /** 是否开启提示词安全检测 */
  PromptModerateStatus?: boolean | null;
  /** 提示词安全检测配置 */
  PromptModerateConfig?: PromptModerateConfigDTO | null;
  /** 是否开启敏感数据检测 */
  SensitiveDataCheckStatus?: boolean | null;
  /** 敏感数据检测配置 */
  SensitiveDataCheckConfig?: SensitiveDataCheckConfigDTO | null;
  /** 负载方式枚举值：random： 随机consistentHash： 会话保持 */
  TargetSelect?: string | null;
  /** 会话判断方式枚举值：fromClientIP： 从客户端IP判断fromHeader： 从请求header判断autoDetect： 自动探测 */
  FindHostKeyMethod?: string | null;
  /** 会话判断header名称 */
  HostKeyHeaderName?: string | null;
  /** 是否开启备份模型 */
  FallbackStatus?: boolean | null;
  /** 备份模型 */
  FallbackModels?: TargetModelDTO[] | null;
  /** 模型类型 */
  ModelProtocol?: string | null;
  /** 自定义模型协议配置 */
  RawCustomModelProtocolConfig?: string;
}

/** 查询模型列表的响应 */
declare interface DescribeModelServicesResponseVO {
  /** 条目 */
  Total?: number;
  /** 列表 */
  Items?: DescribeModelServiceResponseVO[];
}

/** 查询模型服务列表的排序 */
declare interface DescribeModelServicesSort {
  /** 创建时间 */
  CreateTime?: number;
  /** 最后修改时间 */
  LastUpdateTime?: number;
  /** 模型名称 */
  Name?: number;
  /** 状态 */
  Status?: number;
}

/** 查询模型列表的响应 */
declare interface DescribeModelsResponseVO {
  /** 条目 */
  Total?: number;
  /** 列表 */
  Items?: DescribeModelResponseVO[];
}

/** DescribeModelsSort */
declare interface DescribeModelsSort {
  /** 创建时间 */
  CreateTime?: number;
  /** 最后修改时间 */
  LastUpdateTime?: number;
  /** 模型名称 */
  Name?: number;
}

/** FieldValue结构体 */
declare interface FieldValueDTO {
  /** 属性 */
  Field?: string;
  /** 值 */
  Value?: string;
}

/** HealthCheckConfigDTO */
declare interface HealthCheckConfigDTO {
  /** 健康检查路径 */
  HealthCheckPath?: string | null;
  /** 状态码 */
  ValidHealthCheckStatusCode?: number[] | null;
  /** 请求的超时时间 */
  HealthCheckTimeout?: number | null;
}

/** IDNameVO */
declare interface IDNameVO {
  /** 业务ID */
  ID?: string | null;
  /** 名称 */
  Name?: string | null;
}

/** InvokeLimitConfigDTO */
declare interface InvokeLimitConfigDTO {
  /** Type类型 */
  Type?: string | null;
  /** 令牌桶最大容量 */
  TokenBucketMaxNum?: number | null;
  /** 令牌生成速率 */
  TokenBucketRate?: number | null;
  /** 漏斗容量 */
  FunnelMaxNum?: number | null;
  /** 漏嘴流速 */
  FunnelRate?: number | null;
  /** 滑动窗口最大请求数 */
  SlidingWindowMaxNum?: number | null;
  /** 滑动窗口长度 */
  SlidingWindowSize?: number | null;
  /** 时间窗口最大请求数 */
  TimeWindow?: number | null;
  /** 时间窗口长度 */
  TimeWindowInterval?: number | null;
  /** 请求的超时时间 */
  Timeout?: number | null;
}

/** ip黑白名单配置 */
declare interface IpConfig {
  /** ip数组 */
  Ips?: string[] | null;
  /** 生效类型 */
  EffectType?: string | null;
  /** 生效时间 */
  EffectTimes?: StartEndTime[] | null;
  /** 备注 */
  Comment?: string | null;
}

/** 限流窗口配置 */
declare interface LimitWindowsDTO {
  /** 时间窗口，分钟 */
  Interval?: number | null;
  /** 累计上限，k */
  Limit?: number | null;
}

/** 出入参说明 */
declare interface McpInputOutSchema {
  /** 类型 */
  Type?: string | null;
  /** 属性 */
  Properties?: string | null;
  /** 必填字段 */
  Required?: string[] | null;
  /** 描述 */
  Description?: string | null;
}

/** mcp安全规则 */
declare interface McpSecurityRule {
  /** 规则ID */
  ID?: string;
  /** 状态 */
  Status?: string;
  /** 处置动作 */
  Act?: string;
}

/** 绑定的安全规则列表 */
declare interface McpSecurityRulesVO {
  /** 规则ID */
  ID?: string;
  /** 规则类型 */
  Type?: string;
  /** 规则名称 */
  Name?: string;
  /** 规则描述 */
  Description?: string;
  /** 风险等级 */
  RiskLevel?: string;
  /** 版本号 */
  VersionNumber?: string;
  /** 状态开关 */
  Status?: string;
  /** 当前选择的处置动作 */
  Act?: string;
  /** 支持的处置动作 */
  SupportActs?: string[];
  /** 内容类型 */
  BodyType?: string;
  /** icon类型 */
  IconType?: string;
}

/** mcp工具 */
declare interface McpTool {
  /** 名称 */
  Name?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 入参参数 */
  InputSchema?: McpInputOutSchema | null;
  /** 注释 */
  Annotations?: McpToolAnnotation | null;
  /** 出参参数 */
  OutputSchema?: McpInputOutSchema | null;
}

/** mcp工具注解 */
declare interface McpToolAnnotation {
  /** title for the tool */
  Title?: string | null;
  /** If true, the tool does not modify its environment */
  ReadOnlyHint?: boolean | null;
  /** If true, the tool may perform destructive updates */
  DestructiveHint?: boolean | null;
  /** If true, repeated calls with same args have no additional effect */
  IdempotentHint?: boolean | null;
  /** If true, tool interacts with external entities */
  OpenWorldHint?: boolean | null;
}

/** Mcp的访问URL */
declare interface McpUrlObj {
  /** sse访问URL */
  SSEUrl?: string;
  /** streamable访问URL */
  StreamAbleUrl?: string;
}

/** PluginConfigDTO */
declare interface PluginConfigDTO {
  /** 状态 */
  Status?: boolean | null;
  /** 名称 */
  PluginName?: string | null;
  /** 描述 */
  Description?: string | null;
  /** ID */
  PluginID?: string | null;
  /** 优先级 */
  Level?: number | null;
  /** 表单配置 */
  PluginFormValues?: PluginFormValueDTO[] | null;
}

/** PluginFormValueDTO */
declare interface PluginFormValueDTO {
  /** 字段 */
  Field?: string | null;
  /** 值 */
  Value?: string | null;
}

/** 提示词安全配置 */
declare interface PromptModerateConfigDTO {
  /** 执行动作 */
  Action?: string | null;
  /** 响应拦截内容 */
  InterceptMessage?: string | null;
  /** 检测上下文 */
  ContextScope?: string | null;
}

/** ResultIDVO */
declare interface ResultIDVO {
  /** 对象ID */
  ID?: string | null;
}

/** 结果ID数组 */
declare interface ResultIDsVO {
  /** 结果ID数组 */
  IDs?: string[] | null;
}

/** 敏感数据检测配置 */
declare interface SensitiveDataCheckConfigDTO {
  /** 执行动作 */
  Action?: string | null;
  /** 响应拦截内容 */
  InterceptMessage?: string | null;
  /** 检测项枚举值：birthday： 生日email： 邮箱identity_number： 身份证phone_number： 电话号码secret： 秘钥password： 密码private_key： 私钥 */
  CheckItems?: string[] | null;
  /** 检测上下文 */
  ContextScope?: string | null;
}

/** ServiceDatabaseOrderParam */
declare interface ServiceDatabaseOrderParam {
  /** 字段名称 */
  FieldName?: string | null;
  /** 排序 asc desc */
  Order?: string | null;
}

/** 向导模式请求参数 */
declare interface ServiceDatabaseReqParam {
  /** 表字段名 */
  FieldName?: string | null;
  /** 操作符 */
  Operator?: string | null;
  /** 参数名/常量 */
  Val?: string | null;
  /** 参数类型 */
  ValType?: string | null;
  /** 内部字段 */
  InternalField?: boolean | null;
}

/** 响应参数 */
declare interface ServiceDatabaseRespParam {
  /** 源字段名称 */
  FieldName?: string | null;
  /** 目标字段名称 */
  Name?: string | null;
}

/** ServiceVO */
declare interface ServiceVO {
  /** 实例 */
  InstanceID?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 里约应用ID */
  PaasID?: string | null;
  /** 描述 */
  Description?: string | null;
  /** 标签 */
  LabelIDs?: string[] | null;
  /** 目录 */
  CategoryIDs?: string[] | null;
  /** 鉴权方式 */
  AuthType?: string | null;
  /** 签名 */
  SignType?: string | null;
  /** 登录方式 */
  LoginTypes?: string[] | null;
  /** 负载方式 */
  TargetSelect?: string | null;
  /** 公开路径 */
  PubPath?: string | null;
  /** 请求方法 */
  RequestMethod?: string | null;
  /** 目标服务器 */
  TargetHosts?: TargetHostDTO[] | null;
  /** 是否https */
  HttpProtocolType?: string | null;
  /** 证书检查 */
  CheckTargetCertsError?: boolean | null;
  /** http协议类型 */
  HttpProtocolVersion?: string | null;
  /** 版本号 */
  Versions?: VersionDTO[] | null;
  /** 目标路径 */
  TargetPath?: string | null;
  /** 入参 */
  RequestParamsValidatorStatus?: boolean | null;
  /** 入参 */
  RequestParamsValidatorJsonInfoT?: string | null;
  /** 出参 */
  ResponseParamsValidatorStatus?: boolean | null;
  /** 出参 */
  ResponseParamsValidatorJsonInfoT?: string | null;
  /** 流量控制 */
  InvokeLimitConfigStatus?: boolean | null;
  /** 流量控制 */
  InvokeLimitConfig?: InvokeLimitConfigDTO | null;
  /** 健康检查 */
  HealthCheckStatus?: boolean | null;
  /** 健康检查 */
  HealthCheckConfig?: HealthCheckConfigDTO | null;
  /** 格式转换 */
  SourceTypeStatus?: boolean | null;
  /** 格式转换 */
  SourceTypeConfig?: SourceTypeConfigDTO | null;
  /** 是否开启Token限流 */
  TokenLimitStatus?: boolean | null;
  /** Token限流配置 */
  TokenLimitConfig?: TokenLimitConfigDTO | null;
  /** 是否开启内容安全 */
  TmsStatus?: boolean | null;
  /** 内容安全配置 */
  TmsConfig?: TmsConfigDTO | null;
  /** IP白名单 */
  IpWhiteStatus?: boolean | null;
  /** IP白名单 */
  IpWhiteList?: string[] | null;
  /** IP黑名单 */
  IpBlackStatus?: boolean | null;
  /** IP黑名单 */
  IpBlackList?: string[] | null;
  /** 插件 */
  PluginConfigs?: PluginConfigDTO[] | null;
  /** 服务ID */
  ID?: string | null;
  /** 状态 */
  Status?: string | null;
  /** 预览地址 */
  Url?: string | null;
  /** app */
  App?: IDNameVO | null;
  /** 目录 */
  Catalogs?: IDNameVO[] | null;
  /** 标签 */
  Labels?: IDNameVO[] | null;
  /** 认证方式 */
  Logins?: IDNameVO[] | null;
  /** 授权数 */
  AuthAppNum?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 最后修改时间 */
  LastUpdateTime?: string | null;
  /** 应用ID */
  AppID?: number | null;
  /** 用户ID */
  Uin?: string | null;
  /** 域名 */
  Domain?: string | null;
  /** 是否开启报文记录 */
  OpenMessageLogStatus?: boolean | null;
  /** 订阅页面的当前用户是否订阅了该API */
  CurrPaasIDSubscriptionID?: string | null;
  /** 目标服务类型 Restful Database Mock */
  TargetServiceType?: string | null;
  /** SQL模板 */
  SqlTemplate?: SqlTemplate | null;
  /** 目标Host类型 0 默认 1 vpc */
  TargetHostType?: number | null;
  /** 后端服务类型 0 自定义 原始数据:ip/域名或vpc 1 后端服务 服务组 */
  TargetServiceHostType?: number | null;
  /** 后端服务组ID */
  TargetServerGroupID?: string | null;
  /** 后端服务组 */
  TargetServerGroup?: TargetServerGroupDTO | null;
  /** 自定义host */
  CustomHttpHost?: string | null;
  /** Http 请求host类型 useRequestHost 保持源请求host targetHost 修正为源站host customHost 自定义host */
  HttpHostType?: string | null;
  /** mock响应状态码 */
  MockStatusCode?: number | null;
  /** mock响应body */
  MockBody?: string | null;
  /** mock响应头 */
  MockHeaders?: FieldValueDTO[] | null;
  /** 路径匹配类型: prefix 前缀匹配(不送默认); absolute 绝对匹配; regex正则匹配; */
  PathMatchType?: string | null;
  /** 自定义匹配条件 */
  CustomMatch?: CustomMatch | null;
  /** 请求的超时时间 */
  Timeout?: number | null;
  /** 绑定的mcp server数量 */
  McpServerNum?: number | null;
}

/** 匹配条件请求参数 */
declare interface SimpleCondition {
  /** 字段名 */
  Key?: string | null;
  /** 匹配方式: eq 等于;ne 不等于;regex 正则; */
  Condition?: string | null;
  /** 字段值 或正则表达式 */
  Value?: string | null;
}

/** SourceTypeConfigDTO */
declare interface SourceTypeConfigDTO {
  /** json xml urlencoded amf0 amf3 hessian1 hessian2 */
  ReqSourceType?: string | null;
  /** json xml urlencoded amf0 amf3 hessian1 hessian2 */
  ReqTargetType?: string | null;
  /** json xml urlencoded amf0 amf3 hessian1 hessian2 */
  ResSourceType?: string | null;
  /** json xml urlencoded amf0 amf3 hessian1 hessian2 */
  ResTargetType?: string | null;
}

/** SqlTemplate SQL模板 */
declare interface SqlTemplate {
  /** 配置方式 script 脚本 wizard 向导 */
  DbConfigMode?: string | null;
  /** 数据源ID */
  DataSourceID?: string | null;
  /** Sql代码 */
  Sql?: string | null;
  /** 向导模式配置 */
  WizardConfig?: WizardConfig | null;
}

/** 开始结束时间结构体 */
declare interface StartEndTime {
  /** 开始时间 */
  StartTime?: string | null;
  /** 结束时间 */
  EndTime?: string | null;
}

/** TargetHostDTO */
declare interface TargetHostDTO {
  /** 服务器 */
  Host?: string | null;
  /** 权重 */
  Rank?: number | null;
}

/** 模板模型 */
declare interface TargetModelDTO {
  /** 模型ID */
  ID?: string;
  /** 匹配名称 */
  Name?: string;
  /** 权重 */
  Rank?: number;
}

/** 后端服务组DTO */
declare interface TargetServerGroupDTO {
  /** 后端服务组ID */
  ID?: string | null;
  /** 名称 */
  Name?: string | null;
  /** 目标服务器列表 */
  TargetHosts?: TargetHostDTO[] | null;
  /** 目标Host类型 0 默认 1 vpc */
  TargetHostType?: number | null;
  /** 关联的服务数量 */
  ServiceCount?: number | null;
  /** 创建时间 */
  CreateTime?: string | null;
}

/** 内容安全配置 */
declare interface TmsConfigDTO {
  /** 检测范围,请求/响应 */
  Scope?: string[] | null;
  /** 检测形式 */
  Mode?: string | null;
  /** 执行动作 */
  Action?: string | null;
  /** 合并请求检测event数，联动Mode字段sync */
  MergeCount?: number | null;
  /** 风控策略 */
  BizType?: string | null;
  /** 响应拦截内容 */
  InterceptMessage?: string | null;
  /** 检测上下文 */
  ContextScope?: string | null;
}

/** Token限流配置 */
declare interface TokenLimitConfigDTO {
  /** 限流类型枚举值：minute： 时间窗口day： 自然日month： 自然月 */
  Type?: string | null;
  /** 单次请求上限，k */
  LimitRequestBody?: number | null;
  /** 累次token总量消耗上限 */
  LimitWindows?: LimitWindowsDTO[] | null;
}

/** 工具级别配置 */
declare interface ToolConfigDTO {
  /** 工具名称 */
  ToolName?: string | null;
  /** 是否开启限流配置 */
  InvokeLimitConfigStatus?: boolean;
  /** 限流配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** 绑定安全规则 */
  McpSecurityRules?: BindMcpSecurityRuleDTO[];
}

/** 工具配置响应 */
declare interface ToolConfigVO {
  /** 工具名称 */
  ToolName?: string;
  /** 是否开启限流配置 */
  InvokeLimitConfigStatus?: boolean;
  /** 限流配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** 绑定安全规则（响应） */
  McpSecurityRules?: BindMcpSecurityRuleVO[];
}

/** VersionDTO */
declare interface VersionDTO {
  /** Version版本 */
  Version?: string | null;
  /** 目标路径 */
  TargetPath?: string | null;
}

/** WizardConfig 向导模式配置 */
declare interface WizardConfig {
  /** 表名 */
  DbTable?: string | null;
  /** 是否分页 */
  DbEnablePaging?: boolean | null;
  /** 请求参数 */
  DbReqParams?: ServiceDatabaseReqParam[] | null;
  /** 响应参数 */
  DbRespParams?: ServiceDatabaseRespParam[] | null;
  /** 排序参数 */
  DbOrdParams?: ServiceDatabaseOrderParam[] | null;
  /** 是否开启出参映射 */
  DbEnableMappingResp?: boolean | null;
}

declare interface CreateAgentAppMcpServersRequest {
  /** 实例ID */
  InstanceID: string;
  /** 应用ID */
  ID: string;
  /** 关联的mcp server */
  McpServers: AgentAppMcpServerDTO[];
}

declare interface CreateAgentAppMcpServersResponse {
  /** app id */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentAppModelServicesRequest {
  /** 实例ID */
  InstanceID: string;
  /** 应用ID */
  ID: string;
  /** 关联的model service */
  ModelServices: AgentAppModelServiceDTO[];
}

declare interface CreateAgentAppModelServicesResponse {
  /** app id */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentAppRequest {
  /** 实例ID */
  InstanceID: string;
  /** 名称 */
  Name: string;
  /** 认证类型 */
  AuthType: string;
  /** OAuth2资源服务器ID */
  OAuth2ResourceServerID?: string;
  /** 描述 */
  Description?: string;
  /** API认证列表 */
  ConnectorIDs?: string[];
}

declare interface CreateAgentAppResponse {
  /** app id */
  Data?: CreateAgentAppResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentAppServicesRequest {
  /** 实例ID */
  InstanceID: string;
  /** 应用ID */
  ID: string;
  /** 服务详情 */
  Services: AgentAppServiceDTO[];
}

declare interface CreateAgentAppServicesResponse {
  /** app id */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentCredentialRequest {
}

declare interface CreateAgentCredentialResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMcpServerRequest {
  /** 模式：proxy代理模式； wrap封装模式； */
  Mode: string;
  /** 版本号：2024-11-05 2025-03-26 */
  McpVersion: string;
  /** 实例ID */
  InstanceID: string;
  /** 名称 */
  Name: string;
  /** 描述 */
  Description: string;
  /** 封装服务列表 */
  WrapServices?: string[];
  /** 负载方式，robin random consistentHash */
  TargetSelect?: string;
  /** 目标服务器 */
  TargetHosts?: TargetHostDTO[];
  /** 后端协议：http https */
  HttpProtocolType?: string;
  /** 证书检查 */
  CheckTargetCertsError?: boolean;
  /** 目标路径 */
  TargetPath?: string;
  /** 流量控制开启状态 */
  InvokeLimitConfigStatus?: boolean;
  /** 流量控制配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** IP白名单开启状态 */
  IpWhiteStatus?: boolean;
  /** IP白名单配置 */
  IpWhiteConfig?: IpConfig;
  /** IP黑名单开启状态 */
  IpBlackStatus?: boolean;
  /** IP黑名单配置 */
  IpBlackConfig?: IpConfig;
  /** 自定义host */
  CustomHttpHost?: string;
  /** Http 请求host类型：useRequestHost 保持源请求；host targetHost 修正为源站host； customHost 自定义host */
  HttpHostType?: string;
  /** 请求的超时时间 */
  Timeout?: number;
  /** 安全规则集 */
  McpSecurityRules?: McpSecurityRule[];
  /** 工具集配置（openapi时或许用的是） */
  ToolConfigs?: ToolConfigDTO[];
  /** 封装的API分组ID */
  WrapPaasID?: string;
  /** 插件配置 */
  PluginConfigs?: PluginConfigDTO[];
}

declare interface CreateMcpServerResponse {
  /** mcp server ID */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateModelRequest {
  /** 实例 */
  InstanceID: string;
  /** 模型名称 */
  Name: string;
  /** 协议类型：http/https */
  HttpProtocolType: string;
  /** 目标路径 */
  TargetPath: string;
  /** 目标服务器 */
  TargetHosts: TargetHostDTO[];
  /** 凭据ID */
  CredentialID?: string;
  /** https时，是否检查证书合法 */
  CheckTargetCertsError?: boolean;
  /** http协议版本：1.1/2.0 */
  HttpProtocolVersion?: string;
  /** model ID */
  ModelID?: string;
  /** 描述 */
  Description?: string;
}

declare interface CreateModelResponse {
  /** 结果集 */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateModelServiceRequest {
  /** 实例 */
  InstanceID: string;
  /** 模型服务名称 */
  Name: string;
  /** 描述 */
  Description: string;
  /** 访问路径 */
  PubPath: string;
  /** 模型ID列表 */
  TargetModels: TargetModelDTO[];
  /** 路径匹配类型: prefix 前缀匹配(不送默认); absolute 绝对匹配; regex正则匹配; */
  PathMatchType?: string;
  /** 是否开启限流 */
  InvokeLimitConfigStatus?: boolean;
  /** 限流配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** 是否开启token控制 */
  TokenLimitStatus?: boolean;
  /** token控制 */
  TokenLimitConfig?: TokenLimitConfigDTO;
  /** 是否开启内容安全 */
  TmsStatus?: boolean;
  /** 内容安全配置 */
  TmsConfig?: TmsConfigDTO;
  /** 是否开启IP白名单 */
  IpWhiteStatus?: boolean;
  /** IP白名单 */
  IpWhiteList?: string[];
  /** IP黑名单 */
  IpBlackList?: string[];
  /** 插件配置 */
  PluginConfigs?: PluginConfigDTO[];
  /** 超时配置，秒 */
  Timeout?: number;
  /** 是否开启提示词安全检测 */
  PromptModerateStatus?: boolean;
  /** 提示词安全检测配置 */
  PromptModerateConfig?: PromptModerateConfigDTO;
  /** 是否开启敏感数据检测 */
  SensitiveDataCheckStatus?: boolean;
  /** 敏感数据检测配置 */
  SensitiveDataCheckConfig?: SensitiveDataCheckConfigDTO;
  /** 负载方式枚举值：random： 随机consistentHash： 会话保持 */
  TargetSelect?: string;
  /** 会话判断方式枚举值：fromClientIP： 客户端IPfromHeader： 通过header值autoDetect： 自动探测 */
  FindHostKeyMethod?: string;
  /** 会话判定方式为fromHeader时会话的header名称 */
  HostKeyHeaderName?: string;
  /** 是否启用Fallback模型 */
  FallbackStatus?: boolean;
  /** Fallback模型配置 */
  FallbackModels?: TargetModelDTO[];
  /** 模型协议 */
  ModelProtocol?: string;
  /** 自定义模型协议配置 */
  RawCustomModelProtocolConfig?: string;
}

declare interface CreateModelServiceResponse {
  /** 结果集 */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServiceRequest {
}

declare interface CreateServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAgentAppMcpServersRequest {
  /** 实例ID */
  InstanceID: string;
  /** 应用ID */
  ID: string;
  /** mcp server id数组 */
  McpServerIDs: string[];
}

declare interface DeleteAgentAppMcpServersResponse {
  /** app id */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAgentAppModelServicesRequest {
  /** 实例ID */
  InstanceID: string;
  /** 应用ID */
  ID: string;
  /** 关联的model service id */
  ModelServiceIDs: string[];
}

declare interface DeleteAgentAppModelServicesResponse {
  /** app id */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAgentAppRequest {
  /** 实例ID */
  InstanceID: string;
  /** 应用ID */
  ID: string;
}

declare interface DeleteAgentAppResponse {
  /** app id */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAgentAppServicesRequest {
  /** 实例ID */
  InstanceID: string;
  /** 应用ID */
  ID: string;
  /** 服务IDs */
  ServiceIDs: string[];
}

declare interface DeleteAgentAppServicesResponse {
  /** app id */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAgentCredentialRequest {
}

declare interface DeleteAgentCredentialResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMcpServerRequest {
  /** 实例ID */
  InstanceID: string;
  /** mcp server ID */
  ID: string;
}

declare interface DeleteMcpServerResponse {
  /** mcp server ID */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteModelRequest {
  /** 实例 */
  InstanceID: string;
  /** 模型ID数组 */
  IDs: string[];
}

declare interface DeleteModelResponse {
  /** 结果集 */
  Data?: ResultIDsVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteModelServiceRequest {
  /** 实例 */
  InstanceID: string;
  /** 模型服务ID */
  ID: string;
}

declare interface DeleteModelServiceResponse {
  /** 结果集 */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServiceRequest {
  /** 实例ID */
  InstanceID?: string;
  /** 业务ID */
  ID?: string;
}

declare interface DeleteServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentAppMcpServersRequest {
  /** 分页大小 */
  Limit: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 实例ID */
  InstanceID?: string;
  /** 应用ID */
  AgentAppIDs?: string[];
  /** 关联的mcp */
  McpServerIDs?: string[];
  /** 凭据ID */
  AgentCredentialIDs?: string[];
  /** 关键词 */
  Keyword?: string;
}

declare interface DescribeAgentAppMcpServersResponse {
  /** 列表 */
  Data?: DescribeAgentAppMcpServersResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentAppModelServicesRequest {
}

declare interface DescribeAgentAppModelServicesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentAppRequest {
  /** 实例ID */
  InstanceID: string;
  /** app id */
  ID: string;
}

declare interface DescribeAgentAppResponse {
  /** app详情 */
  Data?: DescribeAgentAppResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentAppServicesRequest {
  /** 实例ID */
  InstanceID: string;
  /** 数据量 */
  Limit: number;
  /** IDs */
  IDs?: string[];
  /** 应用IDs */
  AgentAppIDs?: string[];
  /** 服务IDs */
  ServiceIDs?: string[];
  /** 关键字 */
  Keyword?: string;
  /** 偏移量 */
  Offset?: number;
  /** 是否有凭据 */
  AgentCredentialExist?: boolean;
  /** 凭据ID */
  AgentCredentialIDs?: string[];
}

declare interface DescribeAgentAppServicesResponse {
  /** app id */
  Data?: DescribeAgentAppServicesVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentAppsRequest {
  /** 分页大小 */
  Limit: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 服务ID数组 */
  IDs?: string[];
  /** 实例ID */
  InstanceID?: string;
  /** notID列表 */
  NotIDs?: string[];
  /** 状态：normal正常状态，disabled下线状态 */
  Status?: string;
  /** 关键词 */
  Keyword?: string;
  /** 认证类型：apiKey，secretKey */
  AuthType?: string;
  /** 排序 */
  Sort?: DescribeAgentAppsSortDTO;
  /** 凭据ID */
  AgentCredentialID?: string;
}

declare interface DescribeAgentAppsResponse {
  /** app列表 */
  Data?: DescribeAgentAppsResp;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentCredentialRequest {
}

declare interface DescribeAgentCredentialResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentCredentialsRequest {
}

declare interface DescribeAgentCredentialsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMcpServerRequest {
  /** 实例ID */
  InstanceID: string;
  /** mcp server ID */
  ID: string;
}

declare interface DescribeMcpServerResponse {
  /** mcp server详情 */
  Data?: DescribeMcpServerResponseVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMcpServersRequest {
  /** 分页大小 */
  Limit: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 实例ID */
  InstanceID?: string;
  /** 状态数组：normal正常状态，disabled下线状态 */
  Statuses?: string[];
  /** 关键词 */
  Keyword?: string;
  /** 服务ID数组 */
  IDs?: string[];
  /** 模式：proxy代理模式； wrap封装模式； */
  Modes?: string[];
  /** 绑定的安全规则ID */
  McpSecurityRuleID?: string;
  /** 绑定安全规则的处置动作（填写时McpSecurityRuleID得必填） */
  McpSecurityRuleAct?: string;
  /** 已绑定插件id */
  PluginID?: string;
}

declare interface DescribeMcpServersResponse {
  /** mcp server列表 */
  Data?: DescribeMcpServersResponseVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelRequest {
  /** 实例 */
  InstanceID: string;
  /** 模型ID */
  ID: string;
}

declare interface DescribeModelResponse {
  /** 结果集 */
  Data?: DescribeModelResponseVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelServiceRequest {
  /** 实例 */
  InstanceID: string;
  /** 模型服务ID */
  ID: string;
}

declare interface DescribeModelServiceResponse {
  /** 结果集 */
  Data?: DescribeModelServiceResponseVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelServicesRequest {
  /** 实例 */
  InstanceID: string;
  /** 分页参数 */
  Offset?: number;
  /** 分页限制 */
  Limit?: number;
  /** ID列表 */
  IDs?: string[];
  /** 排除的ID列表 */
  NotIDs?: string[];
  /** 状态：normal，disabled */
  Status?: string;
  /** 关键词 */
  Keyword?: string;
  /** 模型ID */
  ModelID?: string;
  /** 排序 */
  Sort?: DescribeModelServicesSort;
  /** 模型类型，OpenAI或Anthropic */
  ModelProtocol?: string;
}

declare interface DescribeModelServicesResponse {
  /** 结果集 */
  Data?: DescribeModelServicesResponseVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelsRequest {
  /** 实例 */
  InstanceID: string;
  /** 分页参数 */
  Offset?: number;
  /** 分页限制 */
  Limit?: number;
  /** ID列表 */
  IDs?: string[];
  /** 排除的ID列表 */
  NotIDs?: string[];
  /** 凭据ID */
  CredentialID?: string;
  /** 关键词 */
  Keyword?: string;
  /** 排序 */
  Sort?: DescribeModelsSort;
}

declare interface DescribeModelsResponse {
  /** 结果集 */
  Data?: DescribeModelsResponseVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceRequest {
  /** 实例ID */
  InstanceID?: string;
  /** 业务ID */
  ID?: string;
}

declare interface DescribeServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServicesRequest {
}

declare interface DescribeServicesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentAppModelServicesRequest {
  /** 实例ID */
  InstanceID: string;
  /** 应用ID */
  ID: string;
  /** 关联的model service */
  ModelServices: AgentAppModelServiceDTO[];
}

declare interface ModifyAgentAppModelServicesResponse {
  /** app id */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentAppRequest {
  /** 实例ID */
  InstanceID: string;
  /** 应用ID */
  ID: string;
  /** 名称 */
  Name?: string;
  /** OAuth2资源服务器ID */
  OAuth2ResourceServerID?: string;
  /** 描述 */
  Description?: string;
  /** 凭据ID */
  ConnectorIDs?: string[];
}

declare interface ModifyAgentAppResponse {
  /** app id */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentCredentialRequest {
}

declare interface ModifyAgentCredentialResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMcpServerRequest {
  /** mcp server ID */
  ID: string;
  /** 模式：proxy代理模式； wrap封装模式； */
  Mode: string;
  /** 版本号：2024-11-05 2025-03-26 */
  McpVersion: string;
  /** 实例ID */
  InstanceID: string;
  /** 名称 */
  Name: string;
  /** 描述 */
  Description?: string;
  /** 封装服务列表 */
  WrapServices?: string[];
  /** 负载方式，robin random consistentHash */
  TargetSelect?: string;
  /** 目标服务器 */
  TargetHosts?: TargetHostDTO[];
  /** 后端协议：http https */
  HttpProtocolType?: string;
  /** 证书检查 */
  CheckTargetCertsError?: boolean;
  /** 目标路径 */
  TargetPath?: string;
  /** 流量控制开启状态 */
  InvokeLimitConfigStatus?: boolean;
  /** 流量控制配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** IP白名单开启状态 */
  IpWhiteStatus?: boolean;
  /** IP白名单配置 */
  IpWhiteConfig?: IpConfig;
  /** IP黑名单开启状态 */
  IpBlackStatus?: boolean;
  /** IP黑名单配置 */
  IpBlackConfig?: IpConfig;
  /** 目标Host类型 0 默认 1 vpc */
  TargetHostType?: number;
  /** 自定义host */
  CustomHttpHost?: string;
  /** Http 请求host类型：useRequestHost 保持源请求；host targetHost 修正为源站host； customHost 自定义host */
  HttpHostType?: string;
  /** 请求的超时时间 */
  Timeout?: number;
  /** 安全规则集 */
  McpSecurityRules?: McpSecurityRule[];
  /** 工具集配置（openapi可能会用到） */
  ToolConfigs?: ToolConfigDTO[];
  /** 封装的API分组ID */
  WrapPaasID?: string;
  /** 插件配置 */
  PluginConfigs?: PluginConfigDTO[];
}

declare interface ModifyMcpServerResponse {
  /** mcp server ID */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModelRequest {
  /** 实例 */
  InstanceID: string;
  /** 模型ID */
  ID: string;
  /** 模型名称 */
  Name?: string;
  /** 协议类型：http/https */
  HttpProtocolType?: string;
  /** 目标路径 */
  TargetPath?: string;
  /** 目标服务器 */
  TargetHosts?: TargetHostDTO[];
  /** 凭据ID */
  CredentialID?: string;
  /** https时，是否检查证书合法 */
  CheckTargetCertsError?: boolean;
  /** http协议版本：1.1/2.0 */
  HttpProtocolVersion?: string;
  /** model ID */
  ModelID?: string;
  /** 描述 */
  Description?: string;
}

declare interface ModifyModelResponse {
  /** 结果集 */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModelServiceRequest {
  /** 实例 */
  InstanceID: string;
  /** 模型服务ID */
  ID: string;
  /** 模型服务名称 */
  Name?: string;
  /** 描述 */
  Description?: string;
  /** 模板模型列表 */
  TargetModels?: TargetModelDTO[];
  /** 是否开启限流 */
  InvokeLimitConfigStatus?: boolean;
  /** 限流配置 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** 是否开启token控制 */
  TokenLimitStatus?: boolean;
  /** token控制 */
  TokenLimitConfig?: TokenLimitConfigDTO;
  /** 是否开启内容安全 */
  TmsStatus?: boolean;
  /** 内容安全配置 */
  TmsConfig?: TmsConfigDTO;
  /** 是否开启IP白名单 */
  IpWhiteStatus?: boolean;
  /** IP白名单 */
  IpWhiteList?: string[];
  /** 是否开启IP黑名单 */
  IpBlackStatus?: boolean;
  /** IP黑名单 */
  IpBlackList?: string[];
  /** 插件配置 */
  PluginConfigs?: PluginConfigDTO[];
  /** 超时配置，秒 */
  Timeout?: number;
  /** 是否开启提示词安全检测配置 */
  PromptModerateStatus?: boolean;
  /** 提示词安全检测配置 */
  PromptModerateConfig?: PromptModerateConfigDTO;
  /** 是否开启敏感数据检测 */
  SensitiveDataCheckStatus?: boolean;
  /** 敏感数据检测配置 */
  SensitiveDataCheckConfig?: SensitiveDataCheckConfigDTO;
  /** 负载方式枚举值：random： 随机consistentHash： 会话保持 */
  TargetSelect?: string;
  /** 会话判断方式枚举值：fromClientIP： 从客户端IP判断fromHeader： 从请求header判断autoDetect： 自动探测 */
  FindHostKeyMethod?: string;
  /** 会话判断header名称 */
  HostKeyHeaderName?: string;
  /** 是否开启备份模型 */
  FallbackStatus?: boolean;
  /** 备份模型 */
  FallbackModels?: TargetModelDTO[];
  /** 模型类型 */
  ModelProtocol?: string;
  /** 自定义模型协议配置 */
  RawCustomModelProtocolConfig?: string;
}

declare interface ModifyModelServiceResponse {
  /** 结果集 */
  Data?: ResultIDVO;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyServiceRequest {
  /** 实例 */
  InstanceID?: string;
  /** 名称 */
  Name?: string;
  /** 里约应用ID */
  PaasID?: string;
  /** 描述 */
  Description?: string;
  /** 标签 */
  LabelIDs?: string[];
  /** 目录 */
  CategoryIDs?: string[];
  /** 鉴权方式 */
  AuthType?: string;
  /** 签名 */
  SignType?: string;
  /** 登录方式 */
  LoginTypes?: string[];
  /** 负载方式 */
  TargetSelect?: string;
  /** 公开路径 */
  PubPath?: string;
  /** 请求方法 */
  RequestMethod?: string;
  /** 是否https */
  HttpProtocolType?: string;
  /** 证书检查 */
  CheckTargetCertsError?: boolean;
  /** http协议类型 */
  HttpProtocolVersion?: string;
  /** 版本号 */
  Versions?: VersionDTO[];
  /** 目标路径 */
  TargetPath?: string;
  /** 入参 */
  RequestParamsValidatorStatus?: boolean;
  /** 入参 */
  RequestParamsValidatorJsonInfoT?: string;
  /** 出参 */
  ResponseParamsValidatorStatus?: boolean;
  /** 出参 */
  ResponseParamsValidatorJsonInfoT?: string;
  /** 流量控制 */
  InvokeLimitConfigStatus?: boolean;
  /** 流量控制 */
  InvokeLimitConfig?: InvokeLimitConfigDTO;
  /** 健康检查 */
  HealthCheckStatus?: boolean;
  /** 健康检查 */
  HealthCheckConfig?: HealthCheckConfigDTO;
  /** 格式转换 */
  SourceTypeStatus?: boolean;
  /** 格式转换 */
  SourceTypeConfig?: SourceTypeConfigDTO;
  /** IP白名单 */
  IpWhiteStatus?: boolean;
  /** IP白名单 */
  IpWhiteList?: string[];
  /** IP黑名单 */
  IpBlackStatus?: boolean;
  /** IP黑名单 */
  IpBlackList?: string[];
  /** 插件 */
  PluginConfigs?: PluginConfigDTO[];
  /** 服务ID */
  ID?: string;
}

declare interface ModifyServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Apis AI Agent 安全网关} */
declare interface Apis {
  (): Versions;
  /** 创建app {@link CreateAgentAppRequest} {@link CreateAgentAppResponse} */
  CreateAgentApp(data: CreateAgentAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentAppResponse>;
  /** 创建app的mcp server关联 {@link CreateAgentAppMcpServersRequest} {@link CreateAgentAppMcpServersResponse} */
  CreateAgentAppMcpServers(data: CreateAgentAppMcpServersRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentAppMcpServersResponse>;
  /** 创建app的model service关联 {@link CreateAgentAppModelServicesRequest} {@link CreateAgentAppModelServicesResponse} */
  CreateAgentAppModelServices(data: CreateAgentAppModelServicesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentAppModelServicesResponse>;
  /** 应用API关联 {@link CreateAgentAppServicesRequest} {@link CreateAgentAppServicesResponse} */
  CreateAgentAppServices(data: CreateAgentAppServicesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentAppServicesResponse>;
  /** 创建凭据 {@link CreateAgentCredentialRequest} {@link CreateAgentCredentialResponse} */
  CreateAgentCredential(data?: CreateAgentCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentCredentialResponse>;
  /** 创建mcp server {@link CreateMcpServerRequest} {@link CreateMcpServerResponse} */
  CreateMcpServer(data: CreateMcpServerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMcpServerResponse>;
  /** 创建模型 {@link CreateModelRequest} {@link CreateModelResponse} */
  CreateModel(data: CreateModelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateModelResponse>;
  /** 创建模型服务 {@link CreateModelServiceRequest} {@link CreateModelServiceResponse} */
  CreateModelService(data: CreateModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateModelServiceResponse>;
  /** 创建服务 {@link CreateServiceRequest} {@link CreateServiceResponse} */
  CreateService(data?: CreateServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceResponse>;
  /** 删除app {@link DeleteAgentAppRequest} {@link DeleteAgentAppResponse} */
  DeleteAgentApp(data: DeleteAgentAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAgentAppResponse>;
  /** 删除app的mcp server {@link DeleteAgentAppMcpServersRequest} {@link DeleteAgentAppMcpServersResponse} */
  DeleteAgentAppMcpServers(data: DeleteAgentAppMcpServersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAgentAppMcpServersResponse>;
  /** 删除app的model service关联 {@link DeleteAgentAppModelServicesRequest} {@link DeleteAgentAppModelServicesResponse} */
  DeleteAgentAppModelServices(data: DeleteAgentAppModelServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAgentAppModelServicesResponse>;
  /** 应用API关联关系解除 {@link DeleteAgentAppServicesRequest} {@link DeleteAgentAppServicesResponse} */
  DeleteAgentAppServices(data: DeleteAgentAppServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAgentAppServicesResponse>;
  /** 删除凭据 {@link DeleteAgentCredentialRequest} {@link DeleteAgentCredentialResponse} */
  DeleteAgentCredential(data?: DeleteAgentCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAgentCredentialResponse>;
  /** 删除mcp server {@link DeleteMcpServerRequest} {@link DeleteMcpServerResponse} */
  DeleteMcpServer(data: DeleteMcpServerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMcpServerResponse>;
  /** 删除模型 {@link DeleteModelRequest} {@link DeleteModelResponse} */
  DeleteModel(data: DeleteModelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteModelResponse>;
  /** 删除模型服务 {@link DeleteModelServiceRequest} {@link DeleteModelServiceResponse} */
  DeleteModelService(data: DeleteModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteModelServiceResponse>;
  /** 删除服务 {@link DeleteServiceRequest} {@link DeleteServiceResponse} */
  DeleteService(data?: DeleteServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceResponse>;
  /** 查询app详情 {@link DescribeAgentAppRequest} {@link DescribeAgentAppResponse} */
  DescribeAgentApp(data: DescribeAgentAppRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentAppResponse>;
  /** 查询app mcp关联列表 {@link DescribeAgentAppMcpServersRequest} {@link DescribeAgentAppMcpServersResponse} */
  DescribeAgentAppMcpServers(data: DescribeAgentAppMcpServersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentAppMcpServersResponse>;
  /** 查询app model服务关联列表 {@link DescribeAgentAppModelServicesRequest} {@link DescribeAgentAppModelServicesResponse} */
  DescribeAgentAppModelServices(data?: DescribeAgentAppModelServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentAppModelServicesResponse>;
  /** 应用API查询 {@link DescribeAgentAppServicesRequest} {@link DescribeAgentAppServicesResponse} */
  DescribeAgentAppServices(data: DescribeAgentAppServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentAppServicesResponse>;
  /** 查询app列表 {@link DescribeAgentAppsRequest} {@link DescribeAgentAppsResponse} */
  DescribeAgentApps(data: DescribeAgentAppsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentAppsResponse>;
  /** 查询凭据详情 {@link DescribeAgentCredentialRequest} {@link DescribeAgentCredentialResponse} */
  DescribeAgentCredential(data?: DescribeAgentCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentCredentialResponse>;
  /** 查询凭据列表 {@link DescribeAgentCredentialsRequest} {@link DescribeAgentCredentialsResponse} */
  DescribeAgentCredentials(data?: DescribeAgentCredentialsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentCredentialsResponse>;
  /** 查询mcp server详情 {@link DescribeMcpServerRequest} {@link DescribeMcpServerResponse} */
  DescribeMcpServer(data: DescribeMcpServerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMcpServerResponse>;
  /** 查询mcp server列表 {@link DescribeMcpServersRequest} {@link DescribeMcpServersResponse} */
  DescribeMcpServers(data: DescribeMcpServersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMcpServersResponse>;
  /** 查询模型详情 {@link DescribeModelRequest} {@link DescribeModelResponse} */
  DescribeModel(data: DescribeModelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelResponse>;
  /** 查询模型服务详情 {@link DescribeModelServiceRequest} {@link DescribeModelServiceResponse} */
  DescribeModelService(data: DescribeModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelServiceResponse>;
  /** 查询模型服务列表 {@link DescribeModelServicesRequest} {@link DescribeModelServicesResponse} */
  DescribeModelServices(data: DescribeModelServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelServicesResponse>;
  /** 查询模型列表 {@link DescribeModelsRequest} {@link DescribeModelsResponse} */
  DescribeModels(data: DescribeModelsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelsResponse>;
  /** 查询服务详情 {@link DescribeServiceRequest} {@link DescribeServiceResponse} */
  DescribeService(data?: DescribeServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceResponse>;
  /** 查询服务列表 {@link DescribeServicesRequest} {@link DescribeServicesResponse} */
  DescribeServices(data?: DescribeServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServicesResponse>;
  /** 修改app {@link ModifyAgentAppRequest} {@link ModifyAgentAppResponse} */
  ModifyAgentApp(data: ModifyAgentAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentAppResponse>;
  /** 修改app的model service关联 {@link ModifyAgentAppModelServicesRequest} {@link ModifyAgentAppModelServicesResponse} */
  ModifyAgentAppModelServices(data: ModifyAgentAppModelServicesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentAppModelServicesResponse>;
  /** 修改凭据 {@link ModifyAgentCredentialRequest} {@link ModifyAgentCredentialResponse} */
  ModifyAgentCredential(data?: ModifyAgentCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentCredentialResponse>;
  /** 修改mcp server {@link ModifyMcpServerRequest} {@link ModifyMcpServerResponse} */
  ModifyMcpServer(data: ModifyMcpServerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMcpServerResponse>;
  /** 修改模型 {@link ModifyModelRequest} {@link ModifyModelResponse} */
  ModifyModel(data: ModifyModelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModelResponse>;
  /** 编辑模型服务 {@link ModifyModelServiceRequest} {@link ModifyModelServiceResponse} */
  ModifyModelService(data: ModifyModelServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModelServiceResponse>;
  /** 修改服务 {@link ModifyServiceRequest} {@link ModifyServiceResponse} */
  ModifyService(data?: ModifyServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceResponse>;
}

export declare type Versions = ["2024-08-01"];

export default Apis;
