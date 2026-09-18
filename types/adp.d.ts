/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 智能通话配置 */
declare interface AICallConfig {
  /** 数智人配置 */
  DigitalHuman: DigitalHumanConfig | null;
  /** 启用数智人 */
  EnableDigitalHuman: boolean;
  /** 启用语音通话 */
  EnableVoiceCall: boolean;
  /** 启用语音互动功能 */
  EnableVoiceInteract: boolean;
  /** 音色配置 */
  Voice: VoiceConfig | null;
}

/** AI一键优化模型配置 */
declare interface AIOptimizeModel {
  /** 模型配置 */
  Model: ModelDetailInfo | null;
}

/** AccessKey鉴权配置 */
declare interface AccessKeyAuthConfig {
  /** Access Key字段配置 */
  ParamList?: AccessKeyParamConfig[];
  /** Access Key透传配置 */
  PassThroughConfig?: AccessKeyPassThroughConfig | null;
  /** Access Key 使用模式枚举值：1： Access Key透传 */
  UsageMode?: number;
}

/** Access Key 字段配置 */
declare interface AccessKeyParamConfig {
  /** Access Key 字段类型，1:AccessKeyId，2:AccessKeySecret，3:SessionToken */
  FieldType?: number;
  /** 是否必填 */
  IsRequired?: boolean;
  /** header/query 字段名 */
  ParamName?: string;
  /** AccessKey密钥默认值，允许为空 */
  ParamValue?: string;
}

/** Access Key 透传配置 */
declare interface AccessKeyPassThroughConfig {
  /** Access Key 字段统一注入位置，0:Header，1:Query */
  KeyLocation?: number;
}

/** 员工信息 */
declare interface AccountInfo {
  /** 员工子账号id */
  AccountUin?: string;
  /** 员工昵称 */
  NickName?: string;
  /** 员工头像 */
  Avatar?: string;
}

/** 计费增值包用量信息 */
declare interface AddOnPackageInfo {
  /** 增值包总量 */
  AddOnTotal?: number;
  /** 增值包用量 */
  AddOnUsage?: number;
  /** 专属并发总数 */
  ExclusiveConcurrency?: number;
  /** 资源包状态枚举值：1： 可使2： 已用完3： 已过期 */
  ResourceStatus?: number;
  /** 专属并发状态枚举值：1： 可使3： 已过期 */
  ConcurrencyStatus?: number;
  /** 专属tpm */
  ExclusiveTpm?: number;
  /** 专属tpm状态枚举值：1： 可使3： 已过期 */
  ExclusiveTpmStatus?: number;
  /** 专属计算单元 */
  ExclusiveComputeUnit?: number;
  /** 专属计算单元状态枚举值：1： 可使3： 已过期4： 已销毁5： 已隔离6： 未生效7： 暂不可用（套餐包过期时） */
  ExclusiveComputeUnitStatus?: number;
}

/** Agent高级设置 */
declare interface AgentAdvancedConfig {
  /** 最大推理轮数 */
  MaxReasoningRound?: number;
}

/** [数据结构定义] Agent协同配置 */
declare interface AgentCollaborationConfig {
  /** 协同方式。枚举值: 1:自由转交：Agent之间可自由传递任务, 2:工作流编排：基于预定义流程的协同, 3:Plan-and-Execute：规划与执行分离的协同模式 */
  AgentCollaborationMode: number;
  /** 工作流Id */
  WorkflowId: string;
  /** 工作流名称 */
  WorkflowName: string;
}

/** Agent 详情 */
declare interface AgentDetail {
  /** Agent ID */
  AgentId?: string;
  /** Agent基本配置 */
  Profile?: AgentProfile;
  /** 系统提示词 */
  Instructions?: string;
  /** 模型信息 */
  Model?: AgentModelConfig;
  /** 工具详情 */
  ToolList?: AgentTool[];
  /** 插件配置 */
  PluginList?: AgentPlugin[];
  /** 技能详情 */
  SkillList?: AgentSkill[];
  /** 高级配置 */
  AdvancedConfig?: AgentAdvancedConfig;
  /** 调用方执行的 Function Tool 列表入参限制：仅在 C 端用户态 Agent 场景可用，B 端配置态 Agent 忽略该字段与 */
  ExternalToolList?: AgentExternalToolConfig[];
}

/** 调用方执行的 Function Tool 配置 */
declare interface AgentExternalToolConfig {
  /** 工具类型入参限制：目前仅支持 "function" */
  Type?: string;
  /** 工具名称 */
  Name?: string;
  /** 工具描述 */
  Description?: string;
  /** 工具入参定义 */
  Parameters?: RequestParam[];
}

/** Agent输入值，支持直接赋值和引用 */
declare interface AgentInput {
  /** 输入来源类型：0 用户输入，3 自定义变量（API参数） */
  InputType?: number;
  /** 用户手写输入 */
  UserInputValue?: AgentUserInputValue | null;
  /** 系统参数 */
  SystemVariable?: AgentSystemVariable | null;
  /** 自定义变量（API参数） */
  CustomVariableId?: string;
  /** 环境变量参数 */
  EnvVariableId?: string;
  /** 应用变量参数 */
  AppVariableId?: string;
}

/** Agent 配置里面的模型定义 */
declare interface AgentModelConfig {
  /** 模型唯一id */
  ModelId?: string;
  /** 模型别名 */
  Alias?: string;
  /** 模型上下文长度字符限制 */
  ContextWordsLimit?: number;
  /** 指令长度字符限制 */
  InstructionsWordsLimit?: number;
  /** 模型参数 */
  ModelParameters?: ModelParams | null;
}

/** Agent 的插件信息 */
declare interface AgentPlugin {
  /** 插件基本配置 */
  Config?: AgentPluginConfig;
  /** 插件名称 */
  Name?: string;
  /** 插件图标url */
  IconUrl?: string;
  /** 插件描述 */
  Description?: string;
  /** 插件产品分类枚举值：0： 普通插件1： 连接器类插件 */
  PluginClass?: number;
  /** 插件状态枚举值：0： 未知1： 可用2： 不可用 */
  Status?: number;
  /** 插件鉴权配置状态枚举值：0： 不需要授权1： 未配置2： 已配置 */
  AuthConfigStatus?: number;
}

/** Agent 的插件基本配置 */
declare interface AgentPluginConfig {
  /** 插件id */
  PluginId?: string;
  /** 插件 Header 参数 */
  HeaderParameterList?: AgentPluginParameter[];
  /** 插件 Query 参数 */
  QueryParameterList?: AgentPluginParameter[];
  /** 是否使用CAM一键授权，仅 auth_type=2时生效 */
  EnableCamRoleAuth?: boolean;
  /** 授权类型枚举值：0： 无鉴权1： API Key2： CAM授权3： OAuth2.0授权 */
  AuthType?: number;
  /** OAuth 授权同意模式；0-开发者授权；1-使用者授权（仅在auth_type=3时生效） */
  OAuthConsent?: number;
  /** 凭证配置 */
  CredentialConfig?: AgentPluginCredentialConfig;
}

/** Agent 插件凭据配置 */
declare interface AgentPluginCredentialConfig {
  /** 插件鉴权值来源枚举值：0： 未指定1： 使用插件默认鉴权值，仅 APIKey/AccessKey 支持2： 引用凭证3： 引用变量 */
  AuthValueSource?: number;
  /** 凭证ID入参限制：AuthValueSource=2时必填 */
  CredentialId?: string;
  /** 参数配置 */
  ParamList?: AgentPluginCredentialParam[];
}

/** Agent 插件凭据参数配置（变量模式） */
declare interface AgentPluginCredentialParam {
  /** 参数位置枚举值：0： Header 鉴权1： Query 鉴权 */
  KeyLocation?: number;
  /** 参数名称 */
  Name?: string;
  /** 参数取值来源 */
  Input?: AgentInput;
}

/** Agent 插件参数配置 */
declare interface AgentPluginParameter {
  /** 参数名称 */
  Name?: string;
  /** 是否必填 */
  IsRequired?: boolean;
  /** 输入的值 */
  Input?: AgentInput;
}

/** Agent 基本配置 */
declare interface AgentProfile {
  /** Agent名称 */
  Name?: string;
  /** 图标URL */
  IconUrl?: string;
  /** Agent 角色：0=主 / 1=子 */
  Role?: number;
  /** Agent 描述 */
  Description?: string;
  /** 应用名称 */
  AppName?: string;
  /** 开发者 */
  Developer?: string;
  /** 主AgentId，只读，不可通过修改接口进行变更 */
  ParentAgentId?: string;
}

/** Agent发布项目详情 */
declare interface AgentRelease {
  /** 名称 */
  ItemName?: string;
  /** 更新时间, unix 秒时间戳 (s) */
  UpdateTime?: string;
  /** 动作描述 */
  ActionDescription?: string;
  /** 变更为 测试 */
  ReleaseMessage?: string;
}

/** Agent 发布预览信息 */
declare interface AgentReleasePreview {
  /** AgentID */
  AgentId?: string;
  /** Agent名称 */
  Name?: string;
  /** 更新时间, unix 秒时间戳 (s) */
  UpdateTime?: string;
  /** 状态, 状态值：1:新增, 2:修改, 3:删除 */
  Action?: number;
  /** 动作描述 */
  ActionDescription?: string;
  /** 发布消息 */
  Message?: string;
  /** 发布详情 */
  ReleaseList?: AgentRelease[];
}

/** Agent 技能详情 */
declare interface AgentSkill {
  /** skillId */
  SkillId?: string;
  /** skill名称 */
  Name?: string;
  /** 技能描述 */
  Description?: string;
  /** skill展示名称 */
  DisplayName?: string;
  /** 技能展示描述 */
  DisplayDescription?: string;
  /** skill图标url */
  IconUrl?: string;
  /** Skill来源 */
  SourceType?: number;
  /** Skill版本 */
  CurrentVersion?: string;
}

/** Agent 技能入参 */
declare interface AgentSkillConfig {
  /** 技能ID */
  SkillId?: string;
}

/** Agent 可编辑配置 */
declare interface AgentSpec {
  /** Agent基本配置 */
  Profile?: AgentProfile;
  /** 系统提示词 */
  Instructions?: string;
  /** 主模型配置 */
  Model?: AgentModelConfig;
  /** 工具信息 */
  ToolList?: AgentToolConfig[];
  /** 插件信息 */
  PluginList?: AgentPluginConfig[];
  /** 技能信息 */
  SkillList?: AgentSkillConfig[];
  /** 高级设置 */
  AdvancedConfig?: AgentAdvancedConfig;
  /** 调用方执行的 Function Tool 列表入参限制：仅在 C 端用户态 Agent 场景可用，B 端配置态 Agent 忽略该字段与 */
  ExternalToolList?: AgentExternalToolConfig[];
}

/** Agent摘要信息 */
declare interface AgentSummary {
  /** AgentId */
  AgentId?: string;
  /** Agent 身份画像 */
  Profile?: AgentProfile;
  /** 高级设置;scope=0 时返回 */
  AdvancedConfig?: AgentAdvancedConfig;
}

/** 系统参数 */
declare interface AgentSystemVariable {
  /** 系统参数名 */
  Name?: string;
  /** 对话历史轮数的配置；如果Input是系统变量中的“对话历史”时才使用； */
  DialogHistoryLimit?: number;
}

/** Agent 工具详情 */
declare interface AgentTool {
  /** 工具配置字段 */
  Config?: AgentToolBasicConfig;
  /** 工具名称 */
  Name?: string;
  /** 工具状态枚举值：1： 可用2： 不可用3： 已失效 */
  Status?: number;
  /** 调用方式枚举值：0： 非流式1： 流式 */
  StreamMode?: number;
  /** 工具访问模式枚举值：0： 未指定1： 只读2： 写/删除 */
  ToolAccessMode?: number;
}

/** Agent的工具基础配置 */
declare interface AgentToolBasicConfig {
  /** 插件id */
  PluginId?: string;
  /** 工具id */
  ToolId?: string;
  /** 描述 */
  Description?: string;
  /** 工具输入参数列表 */
  InputList?: AgentToolInputParameter[] | null;
  /** 工具输出参数列表 */
  OutputList?: AgentToolOutputParameter[] | null;
  /** 工具Header参数列表 */
  HeaderParameterList?: AgentPluginParameter[] | null;
  /** 工具Query参数列表 */
  QueryParameterList?: AgentPluginParameter[] | null;
  /** 工具来源: 0-来自插件，1-来自工作流 */
  ToolSource?: number;
  /** 是否禁用 */
  IsDisabled?: boolean;
}

/** Agent 工具入参 */
declare interface AgentToolConfig {
  /** 工具配置 */
  Config?: AgentToolBasicConfig;
}

/** Agent 工具输入参数定义 */
declare interface AgentToolInputParameter {
  /** 工具名称 */
  Name?: string;
  /** 工具描述 */
  Description?: string;
  /** 工具参数类型枚举值：0： STRING1： INT2： FLOAT3： BOOL4： OBJECT5： ARRAY_STRING6： ARRAY_INT7： ARRAY_FLOAT8： ARRAY_BOOL9： ARRAY_OBJECT20： ARRAY_ARRAY99： NULL */
  Type?: number;
  /** 是否必填 */
  IsRequired?: boolean;
  /** 子参数，仅 OBJECT 或 ARRAY<> 类型时使用 */
  SubParameterList?: AgentToolInputParameter[] | null;
  /** 模式下是否对模型隐藏 */
  IsHidden?: boolean;
  /** OneOf类型的参数 */
  OneOfList?: AgentToolInputParameter[] | null;
  /** AnyOf类型的参数 */
  AnyOfList?: AgentToolInputParameter[] | null;
  /** 参数取值来源 */
  Input?: AgentInput | null;
}

/** Agent 工具输出参数 */
declare interface AgentToolOutputParameter {
  /** 参数名称 */
  Name?: string;
  /** 变量描述 */
  Description?: string;
  /** 参数类型枚举值：0： STRING1： INT2： FLOAT3： BOOL4： OBJECT5： ARRAY_STRING6： ARRAY_INT7： ARRAY_FLOAT8： ARRAY_BOOL9： ARRAY_OBJECT20： ARRAY_ARRAY99： NULL */
  Type?: number;
  /** 子参数，仅 OBJECT 或 ARRAY_OBJECT 类型时使用 */
  SubParameterList?: AgentToolOutputParameter[];
  /** 解析方式 */
  RenderMode?: number;
}

/** 用户输入值 */
declare interface AgentUserInputValue {
  /** 用户输入参数值 */
  ValueList?: string[];
}

/** ApiKey鉴权配置 */
declare interface ApiKeyAuthConfig {
  /** 密钥位置 HEADER/QUERY枚举值:| uint | 描述 || --- | --- || 0 | Header鉴权 || 1 | Query鉴权 | */
  KeyLocation: number;
  /** 密钥参数名 */
  KeyParamName: string;
  /** 密钥参数值 */
  KeyParamValue: string;
}

/** API插件配置 */
declare interface ApiPluginConfig {
  /** 授权配置信息 */
  AuthConfig?: AuthConfig | null;
}

/** ApiToolConfig */
declare interface ApiToolConfig {
  /** 请求体参数 */
  Body?: RequestParam[];
  /** 示例 */
  Example?: ToolExample;
  /** API插件外部调用地址 */
  ExternalApiUrl?: string;
  /** Header */
  Header?: RequestParam[];
  /** 请求方式 */
  Method?: string;
  /** 输出 */
  Outputs?: ResponseParam[];
  /** 查询参数 */
  Query?: RequestParam[];
  /** 枚举项枚举值描述STREAM_MODE_UNARY0非流式STREAM_MODE_STREAMING1流式 */
  StreamMode?: number;
  /** 地址 */
  Url?: string;
}

/** App 应用完整信息 */
declare interface App {
  /** 辅助信息(子状态/审批/申诉/搜索资源/特殊状态等) */
  AuxiliaryInfo: AppAuxiliaryInfo | null;
  /** 配置 */
  Config: AppConfig | null;
  /** 元数据 */
  Metadata: AppMetadata | null;
  /** 应用密钥信息 */
  SecretInfo: AppSecretInfo | null;
  /** 分享链接信息(含访问控制) */
  ShareUrlInfo: AppShareURLInfo | null;
  /** 状态 */
  Status: AppStatusInfo | null;
  /** 应用引用的共享知识库列表 */
  SharedKbList?: AppSharedKbInfo[];
  /** 企业共享配置 */
  CorpShareConfig?: CorpShareConfig | null;
}

/** 应用高级配置 */
declare interface AppAdvancedConf {
  /** 是否开启上下文改写 */
  EnableContextRewrite: boolean;
  /** 是否开启图文检索 */
  EnableImageTextRetrieval: boolean;
  /** 回复灵活度 */
  ReplyFlexibility: number;
  /** 对话端自定义配置(所有模式共用,允许对话中动态修改配置) */
  DialogCustomConfig?: DialogCustomConfig | null;
  /** 意图达成优先级 */
  IntentAchievement?: IntentAchievementInfo[];
}

/** 应用申诉信息(用户不可修改) */
declare interface AppAppeal {
  /** 申诉中的配置项 */
  AppealingStatus: AppealingStatus | null;
}

/** 应用辅助信息 - 包含各类辅助状态和扩展信息(用户不可修改) */
declare interface AppAuxiliaryInfo {
  /** 申诉信息 */
  Appeal: AppAppeal | null;
  /** 搜索资源状态 */
  SearchResourceStatus: SearchResourceStatusInfo | null;
  /** 特殊状态信息 */
  SpecialStatusInfo: SpecialStatusInfo | null;
  /** 子状态信息 */
  SubStatus: AppSubStatusInfo | null;
}

/** 应用配置 - 用户可修改的所有配置 */
declare interface AppConfig {
  /** 体验配置 */
  Experience: AppExperienceConfig | null;
  /** 欢迎语配置 */
  Greeting: AppGreetingConfig | null;
  /** 记忆配置 */
  Memory: AppMemoryConfig | null;
  /** 模式相关配置 */
  Mode: AppModeConfig | null;
  /** 模型配置 */
  Model: AppModelConfig | null;
  /** 联网搜索配置 */
  WebSearch: AppWebSearchConfig | null;
  /** 工作流配置 */
  Workflow: AppWorkflowConfig | null;
}

/** 体验配置 */
declare interface AppExperienceConfig {
  /** 高级配置 */
  Advanced: AppAdvancedConf | null;
  /** 对话体验配置 */
  Conversation: ConversationExperience | null;
  /** 角色配置 */
  Role: RoleConfig | null;
}

/** 欢迎语配置 */
declare interface AppGreetingConfig {
  /** 欢迎语内容 */
  Greeting: string;
  /** 开场问题列表 */
  OpeningQuestionList?: string[];
}

/** 记忆配置 */
declare interface AppMemoryConfig {
  /** 是否开启长记忆 */
  Enabled: boolean;
  /** 长记忆时长 */
  LongMemoryDay: number;
  /** 模型配置 */
  Model: ModelDetailInfo | null;
  /** prompt内容 */
  PromptContent: string;
  /** 提示词模式。枚举值: 1:自定义 */
  PromptMode: number;
}

/** 应用元数据 - 基础标识和描述信息 */
declare interface AppMetadata {
  /** 应用ID */
  AppId: string;
  /** 应用模式。枚举值: 1:标准模式, 2:Agent模式, 3:单工作流模式, 4:ClawAgent模式 */
  AppMode: number;
  /** 应用头像 */
  Avatar: string;
  /** 创建时间 (Unix时间戳,秒级) */
  CreateTime: string;
  /** 应用描述 */
  Description: string;
  /** 应用名称 */
  Name: string;
  /** 空间ID */
  SpaceId: string;
  /** 更新时间 (Unix时间戳,秒级) */
  UpdateTime: string;
}

/** 模式配置 - 包含不同模式的独有配置 */
declare interface AppModeConfig {
  /** 多智能体配置(Agent模式) */
  MultiAgentConfig: MultiAgentConfig | null;
  /** 单工作流配置(单工作流模式) */
  SingleWorkflowConfig: SingleWorkflowConfig | null;
  /** ClawAgent配置(ClawAgent模式) */
  ClawAgentConfig?: ClawAgentConfig | null;
}

/** 模型配置 */
declare interface AppModelConfig {
  /** AI一键优化模型 */
  AiOptimizeModel: AIOptimizeModel | null;
  /** 实时文件解析模型 */
  FileParseModel: FileParseModel | null;
  /** 生成模型配置 */
  GenerateModel: GenerateModel | null;
  /** 多模态问答模型 */
  MultiModalQaModel: MultiModalQAModel | null;
  /** 多模态理解模型 */
  MultiModalUnderstandingModel: MultiModalUnderstandingModel | null;
  /** Prompt改写模型 */
  PromptRewriteModel: PromptRewriteModel | null;
  /** 思考模型配置 */
  ThinkModel: ThinkModel | null;
}

/** 应用操作信息 */
declare interface AppOperation {
  /** 创建人 */
  Creator: string;
  /** 创建人UIN */
  CreatorUin: string;
  /** 创建人账号(私有化场景使用) */
  CreatorUserAccount: string;
  /** 修改时间 (Unix时间戳,秒级) */
  UpdateTime: string;
  /** 最后修改人 */
  Updater: string;
  /** 修改人UIN */
  UpdaterUin: string;
}

/** 应用插件配置信息 */
declare interface AppPluginConfig {
  /** 基于发布应用创建插件的应用ID */
  AppId: string;
}

/** 应用密钥信息 */
declare interface AppSecretInfo {
  /** 应用密钥 */
  AppKey: string;
  /** 创建时间 */
  CreateTime: string;
}

/** AppShareAccessControl */
declare interface AppShareAccessControl {
  /** 枚举项枚举值描述APP_SHARE_ACCESS_TYPE_UNSPECIFIED0APP_SHARE_ACCESS_TYPE_PUBLIC1公开访问(所有用户都可访问)APP_SHARE_ACCESS_TYPE_INTERNAL2内部访问(仅企业用户可访问)APP_SHARE_ACCESS_TYPE_ACCOUNT_WHITELIST3账号白名单(指定UIN/手机/邮箱/IP可访问) */
  AccessType?: number;
  /** 是否开启访问控制枚举值：true： 启用false： 禁用 */
  Enabled?: boolean;
  /** 白名单信息 */
  Whitelist?: AppShareWhitelistItem[];
}

/** 分享链接信息(详情查询返回，用户不可修改部分；access_control 用户可修改部分由 ModifyApp 承载) */
declare interface AppShareURLInfo {
  /** 当前生效的访问控制配置 */
  AccessControl: AppShareAccessControl | null;
  /** 分享URL */
  ShareUrl: string;
}

/** AppShareWhitelistItem */
declare interface AppShareWhitelistItem {
  /** 枚举项枚举值描述APP_SHARE_WHITELIST_TYPE_UNSPECIFIED0APP_SHARE_WHITELIST_TYPE_UIN1UIN账号APP_SHARE_WHITELIST_TYPE_PHONE2手机号码APP_SHARE_WHITELIST_TYPE_EMAIL3邮箱地址APP_SHARE_WHITELIST_TYPE_IP4IP地址APP_SHARE_WHITELIST_TYPE_RTX5RTX账号 */
  Type?: number;
  /** 白名单数组信息参数格式：白名单值 */
  Values?: string[];
}

/** 应用引用的共享知识库简要信息(查询时仅返回ID和名称) */
declare interface AppSharedKbInfo {
  /** 共享知识库ID */
  KbId: string;
  /** 共享知识库名称 */
  KbName: string;
}

/** 应用状态信息 - 运行时状态信息(用户不可修改) */
declare interface AppStatusInfo {
  /** 应用状态枚举值：1： 未上线2： 运行中3： 停用4： 导入中 */
  Status: number;
  /** 状态描述 */
  StatusDescription: string;
}

/** 应用子状态信息 */
declare interface AppSubStatusInfo {
  /** 审批记录ID (当sub_status_list包含PUBLISH_APPROVING时有效) */
  ApprovalId: string;
  /** 应用子状态列表 (可能同时处于多个子状态) */
  SubStatusList?: number[];
}

/** 应用摘要 - 列表查询返回的应用信息 */
declare interface AppSummary {
  /** 应用ID */
  AppId: string;
  /** 应用模式。枚举值: 1:标准模式, 2:Agent模式, 3:单工作流模式, 4:ClawAgent模式 */
  AppMode: number;
  /** 应用头像 */
  Avatar: string;
  /** 应用名称 */
  Name: string;
  /** 操作信息 */
  OperationInfo: AppOperation | null;
  /** 状态信息 */
  Status: AppStatusInfo | null;
  /** 子状态信息 */
  SubStatus: AppSubStatusInfo | null;
  /** 资源操作权限 */
  PermissionIdList?: string[];
}

/** AppToolConfig */
declare interface AppToolConfig {
  /** 输入参数 */
  Inputs?: RequestParam[];
  /** 输出参数 */
  Outputs?: ResponseParam[];
}

/** AppTrigger */
declare interface AppTrigger {
  /** 应用ID */
  AppId?: string;
  /** 执行配置 */
  ExecuteConfig?: ExecuteConfig;
  /** 枚举项枚举值描述APP_TRIGGER_EXECUTE_TYPE_UNSPECIFIED0未指定APP_TRIGGER_EXECUTE_TYPE_PROMPT1指令执行APP_TRIGGER_EXECUTE_TYPE_WORKFLOW2工作流执行 */
  ExecuteType?: number;
  /** 失败次数 */
  FailedCount?: string;
  /** 推送渠道配置 */
  PushConfig?: TimerPushConfig;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 枚举项枚举值描述APP_TRIGGER_STATUS_UNSPECIFIED0未指定APP_TRIGGER_STATUS_ENABLED1启用APP_TRIGGER_STATUS_PAUSED2暂停APP_TRIGGER_STATUS_DELETED3已删除 */
  Status?: number;
  /** 成功次数 */
  SuccessCount?: string;
  /** 触发器配置 */
  TriggerConfig?: TriggerConfig;
  /** 触发器ID */
  TriggerId?: string;
  /** 触发器名称 */
  TriggerName?: string;
  /** 触发器状态 */
  TriggerStatus?: TriggerStatus;
  /** 枚举项枚举值描述APP_TRIGGER_TYPE_UNSPECIFIED0未指定APP_TRIGGER_TYPE_SCHEDULED1定时触发APP_TRIGGER_TYPE_WEBHOOK2Webhook 触发 */
  TriggerType?: number;
  /** 访客ID */
  UserId?: string;
}

/** AppTriggerInstance */
declare interface AppTriggerInstance {
  /** 应用id */
  AppId?: string;
  /** 会话id */
  ConversationId?: string;
  /** 触发器创建时间 */
  CreatedAt?: string;
  /** 结束时间 */
  FinishedAt?: string;
  /** 触发器运行实例id */
  InstanceId?: string;
  /** 请求ID */
  RequestId?: string;
  /** 结果码 */
  ResultCode?: string;
  /** 结果摘要 */
  ResultSummary?: string;
  /** 单次对话id */
  RunId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 枚举项枚举值描述APP_TRIGGER_INSTANCE_SOURCE_UNSPECIFIED0未指定APP_TRIGGER_INSTANCE_SOURCE_APP_TRIGGER1来源于应用触发器 */
  Source?: number;
  /** 触发器开始执行时间 */
  StartedAt?: string;
  /** 枚举项枚举值描述TIMER_RUN_STATUS_UNSPECIFIED0未指定TIMER_RUN_STATUS_PENDING1等待执行TIMER_RUN_STATUS_RUNNING2执行中TIMER_RUN_STATUS_RETRY_WAIT3等待重试TIMER_RUN_STATUS_SUCCESS4成功TIMER_RUN_STATUS_DEAD5失败终态 (重试耗尽 / 不可重试)TIMER_RUN_STATUS_CANCELLED6被任务暂停/删除/修改取消 */
  Status?: number;
  /** TraceId，用于日志记录 */
  TraceId?: string;
  /** 触发器id */
  TriggerId?: string;
  /** 访客ID */
  UserId?: string;
  /** 工作流运行ID */
  WorkflowRunId?: string;
}

/** AppTriggerParamBinding */
declare interface AppTriggerParamBinding {
  /** 参数名字 */
  ParamName?: string;
  /** 参数类型枚举值：0： 字符串1： 整数2： 浮点数4： 对象5： 字符串数组6： 整数数组7： 浮点数数组8： 布尔值数组3： 布尔值9： 对象数组10： 文件11： 文档12： 图片13： 音频14： 视频15： 文件数组16： 文档数组17： 图片数组18： 音频数组19： 视频数组20： 数组嵌套22： 密钥99： 空值100： 未指定类型，用于OneOf和AnyOf场景 */
  ParamType?: number;
  /** 参数值 */
  Value?: AppTriggerParamBindingValue;
}

/** AppTriggerParamBindingConfig */
declare interface AppTriggerParamBindingConfig {
  /** 绑定参数列表 */
  ParamList?: AppTriggerParamBinding[];
}

/** AppTriggerParamBindingValue */
declare interface AppTriggerParamBindingValue {
  /** 参数值 */
  ParamValue?: string;
  /** 应用变量名 */
  VariableName?: string;
}

/** AppTriggerParamSchema */
declare interface AppTriggerParamSchema {
  /** 参数名 */
  ParamName?: string;
  /** 枚举项枚举值描述PARAM_TYPE_STRING0字符串PARAM_TYPE_INT1整数PARAM_TYPE_FLOAT2浮点数PARAM_TYPE_BOOL3布尔值PARAM_TYPE_OBJECT4对象PARAM_TYPE_ARRAY_STRING5字符串数组PARAM_TYPE_ARRAY_INT6整数数组PARAM_TYPE_ARRAY_FLOAT7浮点数数组PARAM_TYPE_ARRAY_BOOL8布尔值数组PARAM_TYPE_ARRAY_OBJECT9对象数组PARAM_TYPE_ARRAY_ARRAY20数组嵌套PARAM_TYPE_NULL99空值PARAM_TYPE_UNSPECIFIED100未指定类型，用于OneOf和AnyOf场景 */
  ParamType?: number;
  /** 是否必选 */
  Required?: boolean;
  /** 子参数列表 */
  SubParamList?: AppTriggerParamSchema[];
}

/** AppTriggerPromptExecuteConfig */
declare interface AppTriggerPromptExecuteConfig {
  /** 触发器执行提示词 */
  ExecutePrompt?: string;
  /** api参数绑定 */
  ParamBindingsApi?: AppTriggerParamBindingConfig;
}

/** AppTriggerRunLog */
declare interface AppTriggerRunLog {
  /** 会话id */
  ConversationId?: string;
  /** 执行时间 */
  DurationMs?: string;
  /** 结束时间参数格式：YYYY-MM-DD hh:mm:ss */
  EndTime?: string;
  /** 枚举项枚举值描述APP_TRIGGER_FIRE_TYPE_UNSPECIFIED0未指定APP_TRIGGER_FIRE_TYPE_SCHEDULED1定时触发APP_TRIGGER_FIRE_TYPE_WEBHOOK2Webhook 触发APP_TRIGGER_FIRE_TYPE_MANUAL_RUN3手动立即执行APP_TRIGGER_FIRE_TYPE_TEST_RUN4测试执行 */
  FireType?: number;
  /** 触发实例id */
  InstanceId?: string;
  /** 枚举项枚举值描述TIMER_RUN_PUSH_STATUS_UNSPECIFIED0未指定TIMER_RUN_PUSH_STATUS_NONE1未配置推送TIMER_RUN_PUSH_STATUS_WAITING2等待推送TIMER_RUN_PUSH_STATUS_SUCCESS3推送成功TIMER_RUN_PUSH_STATUS_FAILED4推送失败 */
  PushStatus?: number;
  /** 结果码 */
  ResultCode?: string;
  /** 结果概要 */
  ResultSummary?: string;
  /** 单次对话id */
  RunId?: string;
  /** 触发时间参数格式：YYYY:MM:DD hh:mm:ss */
  ScheduledFireTime?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 开始执行时间参数格式：YYYY:MM:DD hh:mm:ss */
  StartTime?: string;
  /** 枚举项枚举值描述TIMER_RUN_STATUS_UNSPECIFIED0未指定TIMER_RUN_STATUS_PENDING1等待执行TIMER_RUN_STATUS_RUNNING2执行中TIMER_RUN_STATUS_RETRY_WAIT3等待重试TIMER_RUN_STATUS_SUCCESS4成功TIMER_RUN_STATUS_DEAD5失败终态 (重试耗尽 / 不可重试)TIMER_RUN_STATUS_CANCELLED6被任务暂停/删除/修改取消 */
  Status?: number;
  /** 触发器id */
  TriggerId?: string;
  /** 是否已读 */
  Unread?: boolean;
  /** 访客Id */
  UserId?: string;
  /** 工作流运行id */
  WorkflowRunId?: string;
}

/** AppTriggerScheduleConfig */
declare interface AppTriggerScheduleConfig {
  /** 触发器定时配置 */
  Schedule?: TimerScheduleConfig;
}

/** AppTriggerScheduleStatus */
declare interface AppTriggerScheduleStatus {
  /** 最近一次触发时间参数格式：格式为YYYY-MM-DD hh:mm:ss */
  LastFireTime?: string;
  /** 下一次触发时间参数格式：格式为YYYY-MM-DD hh:mm:ss */
  NextFireTime?: string;
  /** 触发方式 */
  PolicySummary?: string;
}

/** AppTriggerSummary */
declare interface AppTriggerSummary {
  /** 应用ID */
  AppId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_EXECUTE_TYPE_UNSPECIFIED0未指定APP_TRIGGER_EXECUTE_TYPE_PROMPT1指令执行APP_TRIGGER_EXECUTE_TYPE_WORKFLOW2工作流执行 */
  ExecuteType?: number;
  /** 失败次数 */
  FailedCount?: string;
  /** 最近一次会话id */
  LastSessionId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客取值范围：[0, 2] */
  Scope?: number;
  /** 枚举项枚举值描述APP_TRIGGER_STATUS_UNSPECIFIED0未指定APP_TRIGGER_STATUS_ENABLED1启用APP_TRIGGER_STATUS_PAUSED2暂停APP_TRIGGER_STATUS_DELETED3已删除 */
  Status?: number;
  /** 成功次数 */
  SuccessCount?: string;
  /** 触发器id */
  TriggerId?: string;
  /** 触发器名称 */
  TriggerName?: string;
  /** 触发器执行状态 */
  TriggerStatus?: TriggerStatus;
  /** 枚举项枚举值描述APP_TRIGGER_TYPE_UNSPECIFIED0未指定APP_TRIGGER_TYPE_SCHEDULED1定时触发APP_TRIGGER_TYPE_WEBHOOK2Webhook 触发 */
  TriggerType?: number;
  /** 未读日志的数量 */
  UnreadRunLogCount?: string;
  /** 访客ID */
  UserId?: string;
}

/** AppTriggerWebhookConfig */
declare interface AppTriggerWebhookConfig {
  /** 触发器webhook参数配置 */
  ParamSchemaConfig?: AppTriggerWebhookParamSchemaConfig;
  /** webhook的key */
  WebhookKey?: string;
  /** webhook的密钥 */
  WebhookToken?: string;
  /** webhook的地址 */
  WebhookUrl?: string;
}

/** AppTriggerWebhookParamSchemaConfig */
declare interface AppTriggerWebhookParamSchemaConfig {
  /** 触发器API参数列表 */
  SchemaList?: AppTriggerParamSchema[];
}

/** AppTriggerWebhookStatus */
declare interface AppTriggerWebhookStatus {
  /** 推送Webbook地址 */
  WebhookUrl?: string;
}

/** AppTriggerWorkflowExecuteConfig */
declare interface AppTriggerWorkflowExecuteConfig {
  /** 工作流API参数绑定 */
  ParamBindingsApi?: AppTriggerParamBindingConfig;
  /** 工作流参数绑定 */
  ParamBindingsWorkflow?: AppTriggerParamBindingConfig;
  /** 工作流ID */
  WorkflowId?: string;
  /** 工作流名字 */
  WorkflowName?: string;
}

/** 联网搜索配置(国际版使用) */
declare interface AppWebSearchConfig {
  /** API密钥 */
  ApiKey: string;
  /** 是否开启 */
  Enabled: boolean;
  /** 服务提供商 */
  Provider: string;
  /** 返回结果数量 */
  TopN: number;
}

/** 工作流配置 */
declare interface AppWorkflowConfig {
  /** 是否使用PDL */
  EnablePDL: boolean;
}

/** 申诉中的配置 - 记录各配置项是否在申诉中 */
declare interface AppealingStatus {
  /** 头像是否在申诉中 */
  AvatarInAppeal: boolean;
  /** 兜底回复语是否在申诉中 */
  FallbackReplyInAppeal: boolean;
  /** 欢迎语是否在申诉中 */
  GreetingInAppeal: boolean;
  /** 应用名称是否在申诉中 */
  NameInAppeal: boolean;
  /** 角色描述是否在申诉中 */
  RoleInAppeal: boolean;
}

/** 操作日志 */
declare interface AuditLog {
  /** 员工信息 */
  AccountInfo?: AccountInfo;
  /** 应用业务id */
  AppId?: string;
  /** 应用名称操作日志触发时的名称 */
  AppName?: string;
  /** 操作时间参数格式：秒时间戳 */
  OperateTime?: string;
  /** 操作类型 */
  Action?: string;
  /** 操作对象 */
  Biz?: string;
  /** 操作内容 */
  Content?: string;
  /** 操作唯一ID */
  UniqueId?: string;
}

/** 操作日志元数据 */
declare interface AuditLogMetaField {
  /** 操作日志元数据key */
  Key?: string;
  /** 操作日志元数据Name */
  Name?: string;
}

/** 插件授权配置 */
declare interface AuthConfig {
  /** 授权方式。枚举值：0：无鉴权1：API Key 鉴权2：CAM 授权3：OAuth 2.0 授权 */
  AuthType: number;
  /** API Key授权配置 */
  ApiKeyAuthConfig?: ApiKeyAuthConfig | null;
  /** CAM授权配置 */
  CamAuthConfig?: CamAuthConfig | null;
  /** OAuth2.0授权配置 */
  OAuthConfig?: OAuthConfig | null;
  /** AccessKey授权配置 */
  AccessKeyAuthConfig?: AccessKeyAuthConfig;
}

/** BackgroundImage 背景图片配置 */
declare interface BackgroundImage {
  /** 亮度值 */
  Brightness: number;
  /** 横图(pc) */
  LandscapeImageUrl: string;
  /** 原始图 */
  OriginalImageUrl: string;
  /** 长图(手机) */
  PortraitImageUrl: string;
  /** 主题色 */
  ThemeColor: string;
}

/** BasicBilling */
declare interface BasicBilling {
  /** 枚举项枚举值描述UNKNOW0TOKEN1按tokenPAGE_COUNT2按页数TIMES3按次数TIMES_THOUSAND4按千次数SECOND5按时长CHARACTER6按字符数CHARACTER_THOUSAND7按千字符数SHEET8按张NUMBER9按个数 */
  BillingUnit?: number;
  /** 现金价格单位：元 */
  CashPrice?: number;
  /** PU价格单位：pu */
  PuPrice?: number;
}

/** BillingAttribute */
declare interface BillingAttribute {
  /** 属性名称 */
  Name?: string;
  /** 属性值 */
  Value?: string;
}

/** 调用来源 */
declare interface CallSource {
  /** 调用主体 ID，含义由 subject_type 决定（如 app_id、kb_id 等） */
  SubjectId?: string;
  /** 调用主体名称 */
  SubjectName?: string;
  /** 调用主体类型：APP/KB/WIDGET/OPEN_CLAW/KB_RECALL_TEST/WORKBENCH/MODEL_API枚举项枚举值描述METRIC_SOURCE_TYPE_UNSPECIFIED0METRIC_SOURCE_TYPE_APP1应用开发METRIC_SOURCE_TYPE_KB2知识库METRIC_SOURCE_TYPE_WIDGET3WidgetMETRIC_SOURCE_TYPE_OPEN_CLAW4ClawProMETRIC_SOURCE_TYPE_KB_RECALL_TEST5知识库召回测试METRIC_SOURCE_TYPE_WORKBENCH6智能工作台METRIC_SOURCE_TYPE_MODEL_API7模型 API 调用 */
  SubjectType?: number;
}

/** 回调配置 */
declare interface CallbackConfig {
  /** 回调AESKey */
  CallbackAesKey?: string;
  /** 回调Token */
  CallbackToken?: string;
  /** 回调URL */
  CallbackUrl?: string;
}

/** CAM授权信息 */
declare interface CamAuthConfig {
  /** 角色名称 */
  RoleName: string;
  /** 密钥位置 HEADER/QUERY枚举值:| uint | 描述 || --- | --- || 0 | 头鉴权 || 1 | 请求信息鉴权 | */
  KeyLocation?: number;
  /** SecretId字段名称 */
  SecretIdName?: string;
  /** SecretKey字段名称 */
  SecretKeyName?: string;
  /** CAM Access Key 字段配置 */
  ParamList?: AccessKeyParamConfig[];
  /** 是否支持CAM角色授权 */
  SupportRoleAuth?: boolean;
}

/** 分类可修改字段集合（配合 update_mask 使用） */
declare interface CategoryModifyFields {
  /** 分类名 */
  Name?: string;
}

/** 分类路径信息 */
declare interface CategoryPath {
  /** 分类 ID */
  CategoryId?: string;
  /** 从根节点开始的路径分类 ID 列表 */
  CategoryIdPath?: string[];
  /** 从根节点开始的路径分类名称列表 */
  CategoryNamePath?: string[];
}

/** CategoryPermission */
declare interface CategoryPermission {
  /** 当前用户是否可新增子分类 */
  CanAdd?: boolean;
  /** 当前用户是否可删除该分类 */
  CanDelete?: boolean;
  /** 当前用户是否可编辑该分类 */
  CanEdit?: boolean;
}

/** 渠道信息 */
declare interface Channel {
  /** 渠道ID */
  ChannelId?: string;
  /** 渠道状态（仅B端）：1-未发布，2-运行中，3-已下线（与ConnectStatus互斥） */
  ChannelStatus?: number;
  /** 连接状态（仅C端）：1-初始，2-连接成功，3-连接失败（与ChannelStatus互斥） */
  ConnectStatus?: number;
  /** 创建时间（Unix秒） */
  CreateTime?: string;
  /** 渠道规格 */
  Spec?: ChannelSpec | null;
  /** 更新时间（Unix秒） */
  UpdateTime?: string;
  /** 最后更新人 */
  Updater?: string;
}

/** 渠道规格（聚合场景/类型/名称/备注/配置） */
declare interface ChannelSpec {
  /** 渠道名称 */
  ChannelName?: string;
  /** 渠道类型，详见ChannelType枚举枚举值：10000： 微信服务号(Wechat)10002： 企微应用(WeComApp)10004： 微信客服(WechatCustomerService)10009： 企微智能机器人(WeComRobot)10013： 钉钉机器人(DingTalk)10014： 企微智能机器人WebSocket(WeComRobot)10015： 微信ClawBot(WechatClawBot)10011： LINE(Line)10012： Telegram(Telegram)10016： 飞书机器人(Lark) C端场景（Scene=1时）只支持10014和10015 */
  ChannelType?: number;
  /** 备注 */
  Description?: string;
  /** 钉钉机器人配置 */
  DingTalk?: DingTalkChannelConfig | null;
  /** 飞书机器人配置 */
  Lark?: LarkChannelConfig | null;
  /** LINE配置 */
  Line?: LineChannelConfig | null;
  /** 渠道场景：0-B端场景，1-C端场景 */
  Scene?: number;
  /** Telegram配置 */
  Telegram?: TelegramChannelConfig | null;
  /** 归属用户+Agent运行态标识（C端） */
  UserAgent?: UserAgentReference | null;
  /** 微信公众号/小程序配置 */
  Wechat?: WechatChannelConfig | null;
  /** 微信ClawBot配置 */
  WechatClawBot?: WechatClawBotChannelConfig | null;
  /** 微信客服配置 */
  WechatCustomerService?: WechatCustomerServiceChannelConfig | null;
  /** 企微应用配置 */
  WecomApp?: WecomAppChannelConfig | null;
  /** 企微机器人配置 */
  WecomRobot?: WecomRobotChannelConfig | null;
}

/** 通用校验结果 */
declare interface CheckResult {
  /** 是否通过校验 */
  Passed?: boolean;
  /** 失败原因（passed=false 时填充） */
  Reason?: string;
}

/** ClawAgent Agent团队协作配置 */
declare interface ClawAgentAgentTeamConfig {
  /** 是否开启Agent团队协作 */
  Enabled?: boolean;
  /** prompt内容 */
  PromptContent?: string;
}

/** ClawAgent配置 */
declare interface ClawAgentConfig {
  /** Agent团队协作配置 */
  AgentTeamConfig?: ClawAgentAgentTeamConfig | null;
  /** 长期记忆配置 */
  LongMemoryConfig?: ClawAgentLongMemoryConfig | null;
}

/** ClawAgent长期记忆配置 */
declare interface ClawAgentLongMemoryConfig {
  /** 是否开启长期记忆 */
  Enabled?: boolean;
}

/** CodeToolConfig */
declare interface CodeToolConfig {
  /** 代码 */
  Code?: string;
  /** 示例 */
  Example?: ToolExample;
  /** 输入参数 */
  Inputs?: RequestParam[];
  /** 输出参数 */
  Outputs?: ResponseParam[];
}

/** ComplexBilling */
declare interface ComplexBilling {
  /** 复合计费列表 */
  ComplexList?: ComplexBillingItem[];
}

/** ComplexBillingItem */
declare interface ComplexBillingItem {
  /** 复合计费维度信息 */
  BillingAttributeList?: BillingAttribute[];
  /** 枚举项枚举值描述UNKNOW0TOKEN1按tokenPAGE_COUNT2按页数TIMES3按次数TIMES_THOUSAND4按千次数SECOND5按时长CHARACTER6按字符数CHARACTER_THOUSAND7按千字符数SHEET8按张NUMBER9按个数 */
  BillingUnit?: number;
  /** 现金价格单位：元 */
  CashPrice?: number;
  /** pu价格单位：pu */
  PuPrice?: number;
}

/** 并发超限明细 */
declare interface ConcurrencyLimitDetail {
  /** 调用来源（subject_type 决定 subject_id/subject_name 的含义，如 APP 时 subject_id=app_id、subject_name=app_name） */
  CallSource?: CallSource;
  /** 超限发生时间（Unix秒） */
  EventTime?: string;
  /** 模型名称 */
  ModelName?: string;
  /** 请求内容（用户请求的原始查询文本） */
  RequestQuery?: string;
  /** 空间 ID */
  SpaceId?: string;
}

/** 冲突 QA（冲突组中的单条 QA 快照） */
declare interface ConflictQA {
  /** 答案 */
  Answer?: string;
  /** 知识生效作用域：1=停用，2=仅开发域，3=仅发布域，4=全域枚举项枚举值描述KNOWLEDGE_EFFECTIVE_DOMAIN_UNKNOWN0KNOWLEDGE_EFFECTIVE_DOMAIN_NONE1停用KNOWLEDGE_EFFECTIVE_DOMAIN_DEV2仅开发域KNOWLEDGE_EFFECTIVE_DOMAIN_RELEASE3仅发布域KNOWLEDGE_EFFECTIVE_DOMAIN_ALL4全域 */
  EffectiveDomain?: number;
  /** 关联文档名称 */
  FileName?: string;
  /** 关联文档类型 */
  FileType?: string;
  /** QA ID */
  QaId?: string;
  /** 问题 */
  Question?: string;
  /** 来源类型：1=文档生成，2=批量导入，3=手动录入枚举项枚举值描述QA_SOURCE_TYPE_UNKNOWN0QA_SOURCE_TYPE_DOC1文档生成QA_SOURCE_TYPE_BATCH_IMPORT2批量导入QA_SOURCE_TYPE_MANUAL3手动录入 */
  SourceType?: number;
  /** 更新时间（Unix 秒，用于排序判断新旧） */
  UpdateTime?: string;
}

/** 冲突问摘要信息 */
declare interface ConflictQASummary {
  /** 冲突组 ID */
  ConflictGroupId?: string;
}

/** 消耗分类 */
declare interface ConsumptionClassification {
  /** 消耗场景（如推理/训练/评测等） */
  ConsumptionScene?: string;
  /** 消耗目标（如具体模型名/插件名/平台功能名） */
  ConsumptionTarget?: string;
  /** 消耗类型，取值集合由业务方定义（如 model/plugin/platform 等） */
  ConsumptionType?: string;
  /** 套餐包名称 */
  PackageName?: string;
}

/** 资源消耗明细 */
declare interface ConsumptionDetail {
  /** 消耗分类（类型/目标/场景/套餐包） */
  Classification?: ConsumptionClassification;
  /** 消耗发生时间，Unix 秒 */
  EventTime?: string;
  /** 用量来源类型枚举项枚举值描述METRIC_SOURCE_TYPE_UNSPECIFIED0METRIC_SOURCE_TYPE_APP1应用开发METRIC_SOURCE_TYPE_KB2知识库METRIC_SOURCE_TYPE_WIDGET3WidgetMETRIC_SOURCE_TYPE_OPEN_CLAW4ClawProMETRIC_SOURCE_TYPE_KB_RECALL_TEST5知识库召回测试METRIC_SOURCE_TYPE_WORKBENCH6智能工作台METRIC_SOURCE_TYPE_MODEL_API7模型 API 调用 */
  MetricSourceType?: number;
  /** 名称 */
  Name?: string;
  /** 空间名称 */
  SpaceName?: string;
  /** 消耗用量（数值/单位/PU 消耗） */
  Usage?: ConsumptionUsage;
  /** 用户名称 */
  UserName?: string;
}

/** 消耗用量 */
declare interface ConsumptionUsage {
  /** 消耗PU */
  ConsumptionPU?: number;
  /** 用量数值 */
  Usage?: number;
  /** 用量单位，枚举值 DosageUnit枚举项枚举值描述DOSAGE_UNIT_TOKEN0token（默认）DOSAGE_UNIT_PAGE_COUNT1page_count（页数）DOSAGE_UNIT_TIMES2times（次数）DOSAGE_UNIT_SECOND3second（秒）DOSAGE_UNIT_ITEM4item（条）DOSAGE_UNIT_SHEET5sheet（张）DOSAGE_UNIT_CHARACTER6character（字符）DOSAGE_UNIT_GB7GBDOSAGE_UNIT_NUMBER8number（个数）DOSAGE_UNIT_MILL_SECOND9mill_second（毫秒） */
  UsageUnit?: number;
}

/** 内容过滤配置（图片名称正则/最小宽高），缺省时不启用过滤 */
declare interface ContentFilter {
  /** 图片最小高度（像素），小于则过滤；<=0 表示不启用 */
  ImageMinHeight?: number;
  /** 图片最小宽度（像素），小于则过滤；<=0 表示不启用 */
  ImageMinWidth?: number;
  /** 图片名称过滤规则（用分号 ';' 分隔的多条正则，如 'icon;notice;warning;info.*'） */
  ImageNamePatterns?: string;
}

/** Conversation 会话信息 */
declare interface Conversation {
  /** 应用 ID */
  AppId: string;
  /** 会话 ID */
  ConversationId: string;
  /** 创建时间 */
  CreateTime: string;
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** 更新时间 */
  UpdateTime: string;
  /** 会话标题 */
  Title?: string;
  /** 会话使用的用户端 AgentId */
  AgentId?: string;
}

/** AgentTask 智能体任务信息 */
declare interface ConversationAgentTask {
  /** 任务内容 */
  Content: string;
  /** 任务序号 */
  Index: string;
  /** 任务状态，pending:待执行，processing:处理中，success:已完成，failed:处理失败，stop:已取消 */
  Status: string;
}

/** Content 消息内容信息 */
declare interface ConversationContent {
  /** 文本内容 */
  Text: string;
  /** 内容类型, text：文本,image：图片,file：文件,custom_variables：自定义输入参数信息,widget_action：widget动作信息 */
  Type: string;
  /** 自定义参数数据 */
  CustomParamList?: string[];
  /** 自定义参数数据 */
  CustomParams?: string[];
  /** 自定义变量数据 */
  CustomVariablesData?: string | null;
  /** 企业表单 */
  EnterpriseCharts?: string | null;
  /** 选项卡列表 */
  OptionCardList?: string[];
  /** 选项卡列表 */
  OptionCards?: string[];
  /** 选项卡模式 枚举值: 0-OPTION_MODE_SINGLE(单选), 1-OPTION_MODE_MULTI(多选) */
  OptionMode?: number | null;
  /** 引用角标信息列表 */
  QuoteInfoList?: ConversationQuoteInfo[];
  /** 引用角标信息列表 */
  QuoteInfos?: ConversationQuoteInfo[];
  /** 参考来源列表 */
  ReferenceList?: ConversationReference[];
  /** 参考来源列表 */
  References?: ConversationReference[];
  /** 关联记录 ID */
  RelatedRecordId?: string | null;
  /** 智能体任务列表 */
  TaskList?: ConversationAgentTask[];
  /** 智能体任务列表 */
  Tasks?: ConversationAgentTask[];
  /** 工作流输入参数 */
  WorkflowInput?: string | null;
  /** MCP-APP调用信息 */
  McpApp?: ConversationMcpApp | null;
}

/** 对话体验配置 */
declare interface ConversationExperience {
  /** AI通话配置 */
  AiCall: AICallConfig | null;
  /** 背景图片配置 */
  BackgroundImage: BackgroundImage | null;
  /** 兜底回复开关 */
  EnableFallbackReply: boolean;
  /** 是否使用推荐问 */
  EnableRecommended: boolean;
  /** 是否使用联网搜索 */
  EnableWebSearch: boolean;
  /** 兜底回复语 */
  FallbackReply: string;
  /** 输入框配置 */
  InputBoxConfig: InputBoxConfig | null;
  /** 输出方式。枚举值: 1:流式, 2:非流式 */
  Method: number;
  /** 推荐问生成prompt模式。枚举值: 1:仅结合知识库输出推荐问的prompt */
  RecommendPromptMode: number;
}

/** MCP App 内容，供历史会话重建可交互 App */
declare interface ConversationMcpApp {
  /** 能力边界：一次请求只能读该 plugin 的资源 */
  PluginId?: string;
  /** ui:// 资源，前端据此调 ReadMCPResource 拉 HTML */
  ResourceUri?: string;
  /** agent-exec 侧 thread */
  ThreadId?: string;
  /** JSON：完整 CallToolResult 原文，供历史会话重建时重放 */
  ToolResult?: string | null;
}

/** Message 消息信息 */
declare interface ConversationMessage {
  /** 会话 ID */
  ConversationId: string;
  /** 消息图标 */
  Icon: string;
  /** 消息 ID */
  MessageId: string;
  /** 消息名称 */
  Name: string;
  /** 记录 ID */
  RecordId: string;
  /** 消息角色 */
  Role: string;
  /** 消息状态，pending:待执行，processing:处理中，success:已完成，failed:处理失败，stop:已取消 */
  Status: string;
  /** 状态描述 */
  StatusDesc: string;
  /** 消息标题 */
  Title: string;
  /** 消息内容列表 */
  ContentList?: ConversationContent[];
  /** 消息内容列表 */
  Contents?: ConversationContent[];
  /** 类型 */
  Type?: string;
}

/** QuoteInfo 参考来源索引信息 */
declare interface ConversationQuoteInfo {
  /** 参考来源的索引值 */
  Index: number;
  /** 参考来源位置 */
  Position: number;
}

/** 单次对话失败信息 */
declare interface ConversationRecordErrorInfo {
  /** 对话失败错误码 */
  Code?: string;
  /** 对话失败错误信息 */
  Message?: string;
}

/** 单次对话记录统计信息 */
declare interface ConversationRecordSummary {
  /** 回复记录 ID，对应 messages 中回复消息的 record_id */
  RecordId?: string;
  /** 用户提问记录 ID，对应 messages 中用户消息的 record_id */
  RelatedRecordId?: string;
  /** 单次对话耗时信息 */
  TimeUsage?: ConversationRecordTimeUsage | null;
  /** 单次对话 token 消耗信息 */
  TokenUsage?: ConversationRecordTokenUsage | null;
  /** 单次对话失败信息；成功时为空 */
  ErrorInfo?: ConversationRecordErrorInfo | null;
  /** 单次员工助理对话当前状态枚举值：pending： 待处理processing： 处理中success： 成功failed： 失败stop： 停止 */
  Status?: string;
}

/** 单次对话耗时信息 */
declare interface ConversationRecordTimeUsage {
  /** 单次对话总耗时，单位毫秒 */
  Elapsed?: string;
  /** 首 token 耗时，单位毫秒 */
  FirstTokenCost?: string;
  /** 模型推理总耗时，单位毫秒 */
  TotalCost?: string;
}

/** 单次对话 token 消耗信息 */
declare interface ConversationRecordTokenUsage {
  /** 输入 token 总数 */
  InputTokens?: string;
  /** 输出 token 总数 */
  OutputTokens?: string;
  /** 消耗 token 总数 */
  TotalTokens?: string;
  /** 缓存命中 token 总数 */
  CachedTokens?: string;
  /** 推理 token 总数 */
  ReasoningTokens?: string;
}

/** Reference 参考来源信息 */
declare interface ConversationReference {
  /** 参考来源索引 */
  Index: number;
  /** 参考来源名称 */
  Name: string;
  /** 参考来源类型 枚举值: 0-APP_REFERENCE_TYPE_UNSPECIFIED(未指定), 1-APP_REFERENCE_TYPE_QA(问答), 2-APP_REFERENCE_TYPE_SEGMENT(分片), 3-APP_REFERENCE_TYPE_DOC(文档), 4-APP_REFERENCE_TYPE_WEB_SEARCH(Web 搜索), 5-APP_REFERENCE_TYPE_GRAPH_RAG(GraphRAG) */
  Type: number;
}

/** 会话重置信息 */
declare interface ConversationResetInfo {
  /** 最近一次重置的毫秒级时间戳 */
  ResetTime?: string;
  /** 最近一次重置边界；该记录及更早的记录不再作为对话上下文 */
  ResetThroughRecordId?: string;
}

/** Workspace 工作空间信息 */
declare interface ConversationWorkspace {
  /** 工作空间 ID */
  WorkspaceId: string;
  /** 存储类型 */
  StorageType?: string | null;
}

/** CorpShareConfig */
declare interface CorpShareConfig {
  /** 企业共享开关 */
  Enabled?: boolean;
  /** 共享范围类型，1：企业全员，2：指定账户，3：指定空间 */
  ShareScope?: number;
  /** 企业共享应用标签 */
  TagIdList?: string[];
  /** 共享范围信息(用户时StrId为uin,Name为用户名称;空间时StrId为空间ID,Name为空间名称) */
  ShareScopeList?: Identity[];
}

/** CronSchedule */
declare interface CronSchedule {
  /** cron表达式 */
  Expression?: string;
}

/** 数据库检索配置 */
declare interface DBRetrievalConfig {
  /** 是否启用 */
  Enabled?: boolean;
}

/** DailySchedule */
declare interface DailySchedule {
  /** 时间 */
  TimeOfDay?: string;
}

/** 重复文件处理规则 */
declare interface DeDuplicateStrategy {
  /** 校验方式：1=按文档内容判断是否相同枚举项枚举值描述DUPLICATE_FILE_CHECK_TYPE_UNKNOWN0未知DUPLICATE_FILE_CHECK_TYPE_COS_HASH1按文档内容（cos_hash）判断是否相同 */
  CheckType?: number;
  /** 处理方式：1=返回报错，2=跳过并返回重复的文档 ID枚举项枚举值描述DUPLICATE_FILE_HANDLE_TYPE_UNKNOWN0未知DUPLICATE_FILE_HANDLE_TYPE_RETURN_ERR1返回报错DUPLICATE_FILE_HANDLE_TYPE_SKIP2跳过，返回重复的文档 ID */
  HandleType?: number;
}

/** 对话端自定义配置(所有模式共用,允许对话中动态修改配置) */
declare interface DialogCustomConfig {
  /** 是否开启对话端动态修改配置 */
  Enabled?: boolean;
}

/** 数智人配置 */
declare interface DigitalHumanConfig {
  /** 数智人形象资产id */
  AssetKey: string;
  /** 数智人图片 */
  Avatar: string;
  /** 数智人形象名称 */
  Name: string;
  /** 数智人预览地址 */
  PreviewUrl: string;
}

/** 钉钉机器人渠道配置 */
declare interface DingTalkChannelConfig {
  /** 钉钉机器人ClientId（AppKey） */
  AppKey?: string;
  /** 钉钉机器人ClientSecret（AppSecret） */
  AppSecret?: string;
}

/** 文档外部链接信息 */
declare interface DocExternalLink {
  /** 外部链接地址 */
  ExternalUrl?: string;
  /** 是否替换原文展示 */
  ReplaceOriginEnabled?: boolean;
}

/** 文档导入规格（一次性输入的非持久化数据） */
declare interface DocImportSpec {
  /** 文件 ID（通过文件管理服务获取的文件标识，不可为空） */
  FileId: string;
  /** 归属分类 ID */
  CategoryId?: string;
  /** 重复文件处理规则列表 */
  DeDuplicateStrategyList?: DeDuplicateStrategy[];
  /** 知识生效作用域枚举项枚举值描述KNOWLEDGE_EFFECTIVE_DOMAIN_UNKNOWN0KNOWLEDGE_EFFECTIVE_DOMAIN_NONE1停用KNOWLEDGE_EFFECTIVE_DOMAIN_DEV2仅开发域KNOWLEDGE_EFFECTIVE_DOMAIN_RELEASE3仅发布域KNOWLEDGE_EFFECTIVE_DOMAIN_ALL4全域 */
  EffectiveDomain?: number;
  /** 过期策略（有效时间与超过有效时间后的行为） */
  ExpirationPolicy?: ExpirationPolicy | null;
  /** 外部链接 */
  ExternalLink?: DocExternalLink | null;
  /** 适用范围（标签条件） */
  LabelRefList?: LabelRefIdentity[];
  /** 解析配置（分割规则、内容过滤等） */
  ParseConfig?: DocParseConfig | null;
  /** 开关配置 */
  Switch?: DocSwitch | null;
  /** 更新周期 */
  UpdatePeriod?: DocUpdatePeriod | null;
  /** 用户访问配置 */
  UserAccessConfig?: UserAccessConfig | null;
}

/** 文档生命周期信息 */
declare interface DocLifecycle {
  /** 创建时间（Unix 秒） */
  CreateTime?: string;
  /** 过期策略（有效时间与超过有效时间后的行为） */
  ExpirationPolicy?: ExpirationPolicy | null;
  /** 文档状态：1=解析中，2=解析失败，3=导入失败，4=审核中，5=审核失败，6=学习中，7=学习失败，8=导入完成，9=已过期，10=超量失效，11=超量失效恢复中，12=重命名审核失败，13=重命名申诉失败，14=人工申诉中，15=人工申诉失败枚举项枚举值描述DOC_STATUS_UNKNOWN0DOC_STATUS_PARSING1解析中DOC_STATUS_PARSE_FAIL2解析失败DOC_STATUS_IMPORT_FAIL3导入失败DOC_STATUS_AUDITING4审核中DOC_STATUS_AUDIT_FAIL5审核失败DOC_STATUS_LEARNING6学习中DOC_STATUS_LEARN_FAIL7学习失败DOC_STATUS_IMPORTED8导入完成DOC_STATUS_EXPIRED9已过期DOC_STATUS_QUOTA_INVALID10超量失效DOC_STATUS_QUOTA_RECOVERING11超量失效恢复中DOC_STATUS_RENAME_AUDIT_FAIL12重命名审核失败DOC_STATUS_RENAME_APPEAL_FAIL13重命名申诉失败DOC_STATUS_MANUAL_APPEALING14人工申诉中DOC_STATUS_MANUAL_APPEAL_FAIL15人工申诉失败 */
  Status?: number;
  /** 状态描述 */
  StatusDesc?: string;
  /** 状态附加信息 */
  StatusMessage?: string;
  /** 更新时间（Unix 秒） */
  UpdateTime?: string;
}

/** 文档链接 */
declare interface DocLink {
  /** COS 链接地址，可用作预览和下载 */
  CosUrl?: string;
  /** 外部链接 */
  ExternalLink?: DocExternalLink | null;
}

/** 文档元信息 */
declare interface DocMetadata {
  /** 文档字符数 */
  DocCharCount?: string;
  /** 文件名 */
  FileName?: string;
  /** 文件大小（字节） */
  FileSize?: string;
  /** 文件类型/扩展名 */
  FileType?: string;
  /** 元数据引用字段名列表（用于显示文档哪些分类和属性被设置为元数据） */
  RefFieldNameList?: string[];
  /** 来源描述 */
  SourceDesc?: string;
  /** 文档来源类型：1=本地上传，2=网页链接，3=COS 对接，4=外部导入枚举项枚举值描述DOC_SOURCE_TYPE_UNKNOWN0DOC_SOURCE_TYPE_LOCAL1本地上传DOC_SOURCE_TYPE_URL2网页链接DOC_SOURCE_TYPE_COS3COS 对接DOC_SOURCE_TYPE_IMPORT4外部导入 */
  SourceType?: number;
}

/** 文档可修改字段集合（配合 update_mask 使用） */
declare interface DocModifyFields {
  /** 归属分类 ID */
  CategoryId?: string;
  /** 生效作用域枚举项枚举值描述KNOWLEDGE_EFFECTIVE_DOMAIN_UNKNOWN0KNOWLEDGE_EFFECTIVE_DOMAIN_NONE1停用KNOWLEDGE_EFFECTIVE_DOMAIN_DEV2仅开发域KNOWLEDGE_EFFECTIVE_DOMAIN_RELEASE3仅发布域KNOWLEDGE_EFFECTIVE_DOMAIN_ALL4全域 */
  EffectiveDomain?: number;
  /** 过期策略（有效时间与超过有效时间后的行为） */
  ExpirationPolicy?: ExpirationPolicy | null;
  /** 外部链接 */
  ExternalLink?: DocExternalLink | null;
  /** 标签列表 */
  LabelRefList?: LabelRefIdentity[];
  /** 文档名 */
  Name?: string;
  /** 解析配置（分割规则、内容过滤等） */
  ParseConfig?: DocParseConfig | null;
  /** 开关配置 */
  Switch?: DocSwitch | null;
  /** 更新周期 */
  UpdatePeriod?: DocUpdatePeriod | null;
  /** 用户访问配置 */
  UserAccessConfig?: UserAccessConfig | null;
}

/** 文档操作者信息 */
declare interface DocOperator {
  /** 修改人 */
  Modifier?: Operator | null;
  /** 操作权限 */
  Permission?: DocPermission | null;
}

/** 文档解析配置 */
declare interface DocParseConfig {
  /** 内容过滤配置 */
  ContentFilter?: ContentFilter | null;
  /** 分割规则 */
  SplitRule?: string;
}

/** 文档操作权限信息 */
declare interface DocPermission {
  /** 是否可删除 */
  CanDelete?: boolean;
  /** 是否可编辑 */
  CanEdit?: boolean;
  /** 是否可重新生成 */
  CanRestart?: boolean;
  /** 是否可重试 */
  CanRetry?: boolean;
}

/** 文档查询条件 */
declare interface DocQuery {
  /** 查询关键词（名称模糊搜索） */
  Query?: string;
  /** 查询范围（query 作用的字段）：1=文件名，2=标签或标签值；支持多选，缺省时无效 */
  QueryScopeList?: number[];
}

/** 文档检索配置 */
declare interface DocRetrievalConfig {
  /** 置信度阈值 */
  Confidence?: number;
  /** 是否启用 */
  Enabled?: boolean;
  /** 返回前 N 条 */
  TopN?: number;
}

/** 文档摘要信息 */
declare interface DocSummary {
  /** 所属分类路径（包含分类 ID、从根节点开始的分类 ID 路径和分类名称路径） */
  CategoryPath?: CategoryPath | null;
  /** 文档 ID */
  DocId?: string;
  /** 知识生效范围（聚合生效作用域 + 标签条件） */
  KnowledgeScope?: KnowledgeScope | null;
  /** 生命周期信息 */
  Lifecycle?: DocLifecycle | null;
  /** 元信息 */
  Metadata?: DocMetadata | null;
  /** 操作者信息（聚合修改人 + 操作权限） */
  OperatorInfo?: DocOperator | null;
  /** 任务状态信息 */
  TaskStatus?: DocTaskStatus | null;
}

/** 文档开关配置 */
declare interface DocSwitch {
  /** 是否可下载 */
  DownloadEnabled?: boolean;
  /** 是否在参考来源中展示 */
  ReferEnabled?: boolean;
}

/** 文档任务状态信息 */
declare interface DocTaskStatus {
  /** 已完成的历史任务类型列表 */
  CompletedTaskTypeList?: number[];
  /** 正在进行中的任务类型列表 */
  OngoingTaskTypeList?: number[];
}

/** 文档更新周期配置 */
declare interface DocUpdatePeriod {
  /** 是否开启周期性更新 */
  Enabled?: boolean;
  /** 更新周期（小时） */
  PeriodHour?: number;
}

/** DuplexBilling */
declare interface DuplexBilling {
  /** 枚举项枚举值描述UNKNOW0TOKEN1按tokenPAGE_COUNT2按页数TIMES3按次数TIMES_THOUSAND4按千次数SECOND5按时长CHARACTER6按字符数CHARACTER_THOUSAND7按千字符数SHEET8按张NUMBER9按个数 */
  BillingUnit?: number;
  /** 输入现金价格单位：元 */
  InputCashPrice?: number;
  /** 输入pu价格单位：pu */
  InputPuPrice?: number;
  /** 输出现金价格单位：元 */
  OutputCashPrice?: number;
  /** 输出pu价格单位：pu */
  OutputPuPrice?: number;
}

/** ES 配置 */
declare interface ESConfig {
  /** 是否支持修改存储方式 */
  CanModify?: boolean;
  /** ES 密码（加密后） */
  EncryptedPassword?: string;
  /** ES 集群 ID */
  InstanceId?: string;
  /** 存储类型：1=默认存储，2=自定义存储枚举项枚举值描述ES_STORAGE_TYPE_UNKNOWN0ES_STORAGE_TYPE_DEFAULT1默认存储ES_STORAGE_TYPE_CUSTOM2自定义存储 */
  StorageType?: number;
  /** ES 用户名 */
  UserName?: string;
}

/** 有效期 */
declare interface EffectivePeriod {
  /** 有效期结束时间（Unix 秒，0 表示永久有效） */
  EndTime?: string;
  /** 有效期开始时间（Unix 秒） */
  StartTime?: string;
}

/** ExecuteConfig */
declare interface ExecuteConfig {
  /** Prompt配置 */
  PromptConfig?: AppTriggerPromptExecuteConfig;
  /** 工作流配置 */
  WorkflowConfig?: AppTriggerWorkflowExecuteConfig;
}

/** 时效性检索增强配置 */
declare interface ExpirationAwareness {
  /** 是否启用时效性检索，开启后检索结果会结合知识的有效时间进行排序 */
  Enabled?: boolean;
}

/** 过期策略（有效时间与超过有效时间后的行为） */
declare interface ExpirationPolicy {
  /** 有效时间 */
  EffectivePeriod?: EffectivePeriod | null;
  /** 超过有效时间后的行为：1=NOT_RETRIEVABLE 不可被检索，2=RETRIEVABLE 仍可被检索；永久有效时无意义枚举项枚举值描述EXPIRE_BEHAVIOR_UNKNOWN0未指定（服务端按默认处理）EXPIRE_BEHAVIOR_NOT_RETRIEVABLE1不可被检索（到期下架）EXPIRE_BEHAVIOR_RETRIEVABLE2仍可被检索（到期不下架，仅标记时效范围） */
  ExpireBehavior?: number;
}

/** FieldMask */
declare interface FieldMask {
  /** 参数名称参数格式：需要获取的指定字段路径 */
  Paths?: string[];
}

/** 文档解析模型参数 */
declare interface FileParseModel {
  /** 模型别名 */
  Alias: string;
  /** 模型描述 */
  Description: string;
  /** 增强模式 */
  EnhancementMode: string;
  /** 模型唯一ID */
  ModelId: string;
  /** 模型类型 */
  ModelProviderType: string;
  /** 是否启用公式增强 */
  EnableFormulaEnhancement?: boolean | null;
  /** 是否启用 LLM 增强 */
  EnableLLMEnhancement?: boolean | null;
  /** 是否输出 HTML 表格 */
  OutputHtmlTable?: boolean | null;
  /** 支持的文件类型列表 */
  SupportedFileList?: SupportedFileType[];
}

/** 列表通用过滤条件（多个 Filter 之间为 AND 关系，同一 Filter 的多个 value_list 为 OR 关系；BETWEEN 时 value_list 必须恰好 2 个元素表示闭区间 [start, end]） */
declare interface Filter {
  /** 过滤字段名 */
  Name?: string;
  /** 操作符，默认 IN（向后兼容）枚举项枚举值描述FILTER_OPERATOR_IN0属于 value_list（默认值，向后兼容；value_list 不可为空）FILTER_OPERATOR_NOT_IN1不属于 value_list（value_list 不可为空）FILTER_OPERATOR_BETWEEN2之间（闭区间 [start, end]；value_list 必须恰好 2 个元素，允许其一为空表示单边开区间） */
  Operator?: number;
  /** 过滤值数组 */
  ValueList?: string[];
}

/** 最终 rerank 配置 */
declare interface FinalRerankConfig {
  /** 模型名称 */
  ModelName?: string;
}

/** 生成模型配置 */
declare interface GenerateModel {
  /** 生成模型 */
  Model: ModelDetailInfo | null;
}

/** GraphRAG 配置 */
declare interface GraphRAG {
  /** 是否启用 */
  Enabled?: boolean;
}

/** 通用身份信息（支持数字 ID 与字符串 ID 两种形态） */
declare interface Identity {
  /** 描述 */
  Description?: string;
  /** 数字 ID */
  Id?: string;
  /** 名称 */
  Name?: string;
  /** 字符串 ID */
  StrId?: string;
}

/** 输入框配置 */
declare interface InputBoxConfig {
  /** 输入框按钮，1：上传图片、2：上传文档，3：腾讯文档，4：联网搜索 */
  InputBoxButtons?: number[];
}

/** 意图达成信息 */
declare interface IntentAchievementInfo {
  /** 描述 */
  Description: string;
  /** 名称 */
  Name: string;
}

/** IntervalSchedule */
declare interface IntervalSchedule {
  /** 开始时间 */
  StartAt?: string;
  /** 枚举值:| 枚举值 | uint || --- | --- || INTERVAL_UNIT_UNSPECIFIED | 0 || INTERVAL_UNIT_HOUR | 1 || INTERVAL_UNIT_DAY | 2 | */
  Unit?: number;
  /** 值 */
  Value?: number;
}

/** 知识库容量信息 */
declare interface KBCapacity {
  /** 最大字符数 */
  MaxCharSize?: string;
  /** 超量字符数 */
  OverCharSize?: string;
  /** 已用字符数 */
  UsedCharSize?: string;
}

/** 知识库分类信息（含元数据配置） */
declare interface KBCategory {
  /** 是否可新增 */
  CanAdd?: boolean;
  /** 是否可删除 */
  CanDelete?: boolean;
  /** 是否可编辑 */
  CanEdit?: boolean;
  /** 分类 ID */
  CategoryId?: string;
  /** 子分类列表 */
  ChildList?: KBCategory[];
  /** 是否为叶子节点（无子分类） */
  IsLeaf?: boolean;
  /** 分类对象的数量 */
  ItemCount?: number;
  /** 元数据配置（该分类被设置为元数据时的配置信息） */
  MetaValue?: MetaValue | null;
  /** 分类名称 */
  Name?: string;
}

/** 知识库模型配置 */
declare interface KBModelConfig {
  /** Embedding 模型 */
  EmbeddingModel?: string;
  /** QA 抽取模型 */
  QaExtractModel?: string;
  /** Schema 生成模型 */
  SchemaModel?: string;
}

/** 知识库修改扩展字段（用于触发特殊操作） */
declare interface KBModifyExtendFields {
  /** 扩展操作：1=触发恢复超量枚举项枚举值描述KB_EXTENDED_ACTION_UNKNOWN0KB_EXTENDED_ACTION_RESUME_EXCEEDED1触发恢复超量（将知识库从超量状态恢复为正常状态） */
  Action?: number;
}

/** 知识库操作权限信息 */
declare interface KBPermission {
  /** 是否可删除 */
  CanDelete?: boolean;
  /** 是否可编辑 */
  CanEdit?: boolean;
  /** 是否可查看 */
  CanView?: boolean;
}

/** 单个知识库检索配置 */
declare interface KBRetrievalConfig {
  /** 数据库检索配置 */
  DbRetrievalConfig?: DBRetrievalConfig | null;
  /** 文档检索配置 */
  DocRetrievalConfig?: DocRetrievalConfig | null;
  /** 知识库 ID */
  KbId?: string;
  /** 检索可选配置 */
  OptionConfig?: RetrievalOption | null;
  /** QA 检索配置 */
  QaRetrievalConfig?: QARetrievalConfig | null;
  /** rerank 配置 */
  RerankConfig?: RerankConfig | null;
  /** 检索过滤配置 */
  SearchFilterConfig?: SearchFilterConfig | null;
  /** 检索策略：1=混合，2=语义，3=关键词，4=无枚举项枚举值描述SEARCH_STRATEGY_TYPE_UNKNOWN0SEARCH_STRATEGY_TYPE_MIXING1混合检索SEARCH_STRATEGY_TYPE_SEMANTIC2语义检索SEARCH_STRATEGY_TYPE_KEYWORD3关键词检索SEARCH_STRATEGY_TYPE_NONE4无语义/向量检索 */
  StrategyType?: number;
  /** text2sql 模型 */
  TextToSqlModel?: ModelDetailInfo | null;
}

/** 知识库可写属性集合（配合 update_mask 使用） */
declare interface KBSpec {
  /** 描述 */
  Description?: string;
  /** ES 配置 */
  EsConfig?: ESConfig | null;
  /** 模型配置 */
  ModelConfig?: KBModelConfig | null;
  /** 知识库名称 */
  Name?: string;
  /** 所有者 ID */
  OwnerId?: string;
}

/** 知识库摘要信息 */
declare interface KBSummary {
  /** 关联的应用列表，仅共享知识库返回 */
  AppList?: Identity[];
  /** 创建时间（Unix 秒） */
  CreateTime?: string;
  /** 创建人 */
  Creator?: Operator | null;
  /** 描述 */
  Description?: string;
  /** 文档数 */
  DocCount?: number;
  /** 是否超量 */
  IsExceeded?: boolean;
  /** 知识库 ID */
  KbId?: string;
  /** 类型：1=默认知识库，2=共享知识库枚举项枚举值描述KB_TYPE_UNKNOWN0KB_TYPE_DEFAULT1默认知识库KB_TYPE_SHARED2共享知识库 */
  KbType?: number;
  /** 最后操作人，仅共享知识库返回 */
  LatestOperator?: Operator | null;
  /** 知识库名称 */
  Name?: string;
  /** 操作权限 */
  Permission?: KBPermission | null;
  /** 处理中状态列表 */
  ProcessingFlagList?: number[];
  /** 共享子类型：1=普通，2=公众号枚举项枚举值描述SHARED_KB_SUB_TYPE_UNKNOWN0SHARED_KB_SUB_TYPE_NORMAL1普通SHARED_KB_SUB_TYPE_PUBLIC_ACCOUNT2公众号 */
  SharedSubType?: number;
  /** 更新时间（Unix 秒） */
  UpdateTime?: string;
}

/** 通用键值对 */
declare interface KVPair {
  /** 键 */
  Key?: string;
  /** 值 */
  Value?: string;
}

/** 单条检索结果 */
declare interface KnowledgeResult {
  /** 置信度 */
  Confidence?: number;
  /** 命中知识类型：1=问答，2=文档片段，3=数据库，4=图谱枚举项枚举值描述KNOWLEDGE_SOURCE_TYPE_UNKNOWN0KNOWLEDGE_SOURCE_TYPE_QA1问答KNOWLEDGE_SOURCE_TYPE_DOC2文档片段KNOWLEDGE_SOURCE_TYPE_DB3数据库KNOWLEDGE_SOURCE_TYPE_GRAPH4图谱 */
  KnowledgeType?: number;
  /** 召回类型列表 */
  RecallTypeList?: number[];
  /** 结果负载 */
  ResultPayload?: SearchResultPayload | null;
  /** 检索结果类型枚举项枚举值描述SEARCH_RESULT_TYPE_UNKNOWN0SEARCH_RESULT_TYPE_RETRIEVAL1普通检索结果SEARCH_RESULT_TYPE_TEXT_TO_SQL2text2sql 结果SEARCH_RESULT_TYPE_IMAGE_SEARCH_IMAGE3SEARCH_RESULT_TYPE_TEXT_SEARCH_IMAGE4 */
  ResultType?: number;
  /** 相似问额外信息 */
  SimilarQuestionExtra?: SimilarQuestionExtra | null;
  /** 知识片段基础信息 */
  SnippetProfile?: KnowledgeSnippetProfile | null;
  /** 知识来源信息 */
  SourceInfo?: KnowledgeSource | null;
}

/** 知识生效范围 */
declare interface KnowledgeScope {
  /** 生效作用域枚举项枚举值描述KNOWLEDGE_EFFECTIVE_DOMAIN_UNKNOWN0KNOWLEDGE_EFFECTIVE_DOMAIN_NONE1停用KNOWLEDGE_EFFECTIVE_DOMAIN_DEV2仅开发域KNOWLEDGE_EFFECTIVE_DOMAIN_RELEASE3仅发布域KNOWLEDGE_EFFECTIVE_DOMAIN_ALL4全域 */
  EffectiveDomain?: number;
  /** 适用范围（标签条件） */
  LabelRefList?: LabelRef[];
}

/** 知识片段基础信息 */
declare interface KnowledgeSnippetProfile {
  /** 内容 */
  Content?: string;
  /** 关联文档 ID */
  DocId?: string;
  /** 文档名 */
  DocName?: string;
  /** 知识库 ID */
  KbId?: string;
  /** 知识 ID */
  KnowledgeId?: string;
  /** 问题 */
  Question?: string;
  /** 文档标题 */
  Title?: string;
}

/** 知识来源信息 */
declare interface KnowledgeSource {
  /** 是否为大数据 */
  IsBigData?: boolean;
  /** 是否为共享知识库 */
  IsShared?: boolean;
  /** 知识库名 */
  KbName?: string;
}

/** 标签可修改字段集合（配合 update_mask 使用） */
declare interface LabelModifyFields {
  /** 标签名称 */
  Name?: string;
  /** 标准词增量修改列表（增/改/删） */
  TermModifyList?: LabelTermModifyItem[];
}

/** 标签引用（出参用） */
declare interface LabelRef {
  /** 标签 ID */
  LabelId?: string;
  /** 标签名称 */
  LabelName?: string;
  /** 标签标准词 ID 列表 */
  LabelTermIdList?: string[];
  /** 标签标准词列表 */
  LabelTermList?: string[];
}

/** 标签引用身份标识（入参用） */
declare interface LabelRefIdentity {
  /** 标签 ID */
  LabelId?: string;
  /** 标签标准词 ID 列表 */
  LabelTermIdList?: string[];
}

/** 标签引用列表 */
declare interface LabelRefIdentityList {
  /** 标签引用列表 */
  ItemList?: LabelRefIdentity[];
}

/** 标签摘要 */
declare interface LabelSummary {
  /** 标签 ID */
  LabelId?: string;
  /** 元数据配置（该标签被设置为元数据时的配置信息） */
  MetaValue?: MetaValue | null;
  /** 标签名称 */
  Name?: string;
  /** 引用该标签的资源数 */
  RefCount?: number;
  /** 标签值（标准词 + 同义词列表） */
  TermList?: LabelTerm[];
  /** 标签值总数 */
  TermTotalCount?: number;
}

/** 标准词（标签值的一项） */
declare interface LabelTerm {
  /** 同义词列表 */
  SynonymList?: string[];
  /** 标准词 */
  Term?: string;
  /** 标准词 ID（由后台生成，创建时不传） */
  TermId?: string;
}

/** 标准词校验项 */
declare interface LabelTermCheckResult {
  /** 校验结果 */
  CheckResult?: CheckResult | null;
  /** 待校验的标准词 */
  Term?: string;
  /** 已存在时返回对应标准词 ID */
  TermId?: string;
}

/** 标签标准词修改项（增量更新） */
declare interface LabelTermModifyItem {
  /** 操作类型（不可为 0，取值：1=新增，2=修改，3=删除）枚举项枚举值描述MODIFY_ACTION_UNKNOWN0MODIFY_ACTION_CREATE1新增MODIFY_ACTION_UPDATE2修改MODIFY_ACTION_DELETE3删除 */
  ModifyAction: number;
  /** 同义词列表（CREATE 与 UPDATE 时传完整同义词集合，覆盖式更新） */
  SynonymList?: string[];
  /** 标准词（CREATE 与 UPDATE 必填，DELETE 可留空） */
  Term?: string;
  /** 标准词 ID（UPDATE 与 DELETE 必填，CREATE 留空由后台生成） */
  TermId?: string;
}

/** 飞书机器人渠道配置 */
declare interface LarkChannelConfig {
  /** 飞书机器人AppId */
  AppId?: string;
  /** 飞书机器人AppSecret */
  AppSecret?: string;
}

/** LINE渠道配置 */
declare interface LineChannelConfig {
  /** LINE Channel Access Token */
  AccessToken?: string;
  /** LINE回调地址 */
  CallbackUrl?: string;
  /** LINE Channel Secret */
  ChannelSecret?: string;
}

/** MCP插件配置信息 */
declare interface MCPPluginConfig {
  /** MCP插件外部访问地址 */
  ExternalMCPServerUrl?: string;
  /** MCP server地址 */
  MCPServerUrl?: string;
  /** MCP传输类型: SSE/Streamable枚举值:| uint | 描述 || --- | --- || 0 | SSE + HTTP 模式 || 1 | Streamable HTTP 模式 | */
  MCPTransport?: number;
  /** MCP插件的header参数 */
  PluginHeader?: PluginParam[];
  /** MCP插件的query参数 */
  PluginQuery?: PluginParam[];
  /** SSE长连接超时时间，单位秒 */
  SSEReadTimeout?: number;
  /** 请求超时时间，单位秒 */
  Timeout?: number;
  /** 授权信息 */
  AuthConfig?: AuthConfig;
  /** 是否支持交互界面（MCP Apps），插件级标签，默认false */
  SupportsApps?: boolean;
}

/** MCPToolConfig */
declare interface MCPToolConfig {
  /** 输入参数 */
  Inputs?: RequestParam[];
  /** 输出参数 */
  Outputs?: ResponseParam[];
  /** 工具meta信息 */
  Meta?: MCPToolMeta | null;
  /** 是否支持交互界面（MCP Apps），插件级标签 默认值：false */
  SupportsApps?: boolean;
}

/** 对应 MCP 协议工具 _meta，承载 MCP Apps 工具的 UI 元信息（本期仅消费 resourceUri） */
declare interface MCPToolMeta {
  /** 工具的 UI 扩展元信息，对应 MCP 协议的 _meta.ui，声明工具关联的交互式界面资源（ResourceUri）及调用方可见性（Visibility）。仅当工具支持 MCP Apps 或声明了可见性时返回；纯文本工具该字段为空。详见 MCPToolUIMeta 结构定义。 */
  Ui?: MCPToolUIMeta;
}

/** 对应 MCP 协议 _meta.ui，定义 MCP Apps 工具的交互界面元信息（本期仅消费 resourceUri，visibility） */
declare interface MCPToolUIMeta {
  /** 关联的 UI 资源 URI，ui:// scheme，格式为 ui://<插件标识>/<资源名>-<版本>。该字段是 MCP Apps 交互式界面的入口，非空时表示工具支持 Apps（"文本 + 交互式界面"展示），为空则为纯文本工具。由工具同步结果自动识别填充，不支持手工编辑。 */
  ResourceUri?: string;
  /** 工具的调用方可见性声明，取值范围：model（模型可调用）、app（应用界面可调用），可多选，如 ["model","app"]。与 ResourceUri 相互独立（SEP-1865），可单独存在，例如纯后端 app-only 工具为 ["app"]。当 ResourceUri 非空且本字段缺省时，按规范归一化为 ["model","app"]；存量非 Apps 工具保持为空。枚举值：model： 支持modelapp： 支持app */
  Visibility?: string[];
}

/** ManualOnlySchedule */
declare interface ManualOnlySchedule {
  /** 启用 */
  Enabled?: boolean;
}

/** 元数据值 */
declare interface MetaValue {
  /** 元数据值名称（仅展示使用） */
  Name?: string;
  /** 是否引用该类型下的全部值（true 时 ref_value_id 应为 0） */
  RefAll?: boolean;
  /** 元数据引用的业务 ID（属性 ID、分类 ID 等）；ref_all=true 时该字段应为 0 */
  RefValueId?: string;
  /** 元数据使用场景：1=仅检索使用，2=检索和生成都使用枚举项枚举值描述META_SCENE_UNKNOWN0未知META_SCENE_SEARCH_ONLY1仅检索使用META_SCENE_ALL2检索和生成都使用 */
  Scene?: number;
  /** 元数据值类型：1=属性标签，2=文档分类，3=问答分类枚举项枚举值描述META_VALUE_TYPE_UNKNOWN0未知META_VALUE_TYPE_TAG1属性标签META_VALUE_TYPE_DOC_CATEGORY2文档分类META_VALUE_TYPE_QA_CATEGORY3问答分类 */
  ValueType?: number;
}

/** 总览 KPI 卡片指标项 */
declare interface MetricOverview {
  /** 指标键，取值参考 MetricOverview 注释中的 key 白名单 */
  Key?: string;
  /** 环比百分比，无环比时填 0 */
  Mom?: number;
  /** 指标单位，枚举值 DosageUnit；key 与 unit 的对应关系参考 MetricOverview 注释白名单枚举项枚举值描述DOSAGE_UNIT_TOKEN0token（默认）DOSAGE_UNIT_PAGE_COUNT1page_count（页数）DOSAGE_UNIT_TIMES2times（次数）DOSAGE_UNIT_SECOND3second（秒）DOSAGE_UNIT_ITEM4item（条）DOSAGE_UNIT_SHEET5sheet（张）DOSAGE_UNIT_CHARACTER6character（字符）DOSAGE_UNIT_GB7GBDOSAGE_UNIT_NUMBER8number（个数）DOSAGE_UNIT_MILL_SECOND9mill_second（毫秒） */
  Unit?: number;
  /** 指标数值 */
  Value?: number;
}

/** 模型完整信息 */
declare interface Model {
  /** 模型徽章列表 */
  BadgeList?: ModelBadge[];
  /** 模型限制信息 */
  LimitInfo?: ModelLimit | null;
  /** 模型基本信息 */
  ModelBasic?: ModelBasic | null;
  /** 模型超参配置 */
  ParameterList?: ModelParameter[];
  /** 模型属性配置 */
  PropertyList?: ModelProperty[];
  /** 模型提供商信息 */
  ProviderInfo?: ModelProviderBasic | null;
  /** 模型状态信息 */
  StatusInfo?: ModelStatus | null;
  /** 模型标签列表 */
  TagList?: string[];
  /** 模型作者信息 */
  DeveloperInfo?: ModelDeveloperBasic;
}

/** 模型徽章 */
declare interface ModelBadge {
  /** 展示文案 */
  Text?: string;
  /** 样式主题。1-信息（蓝色）, 2-成功（绿色）, 3-警告（橙色）, 4-危险（红色） */
  Theme?: number;
  /** tooltip文案，为空则不展示 */
  Tips?: string;
  /** 徽章类型。1-限时免费, 2-即将下线, 3-新模型, 4-热门 */
  Type?: number;
}

/** 模型基本信息 */
declare interface ModelBasic {
  /** 模型描述 */
  Description?: string;
  /** 模型图标地址 */
  IconUrl?: string;
  /** 模型ID */
  ModelId?: string;
  /** 模型类型。1-LLM模型, 2-Rerank模型, 3-Embedding模型, 4-文档解析模型 */
  ModelType?: number;
  /** 模型名称 */
  Name?: string;
}

/** 模型详细信息 */
declare interface ModelDetailInfo {
  /** 模型别名 */
  Alias?: string;
  /** 历史对话条数限制 */
  HistoryLimit?: number;
  /** 模型唯一 ID */
  ModelId?: string;
  /** 模型参数 */
  ModelParams?: ModelParams | null;
}

/** 模型作者信息 */
declare interface ModelDeveloperBasic {
  /** 作者标识 */
  Name?: string;
  /** 作者显示名称 */
  Alias?: string;
}

/** 模型限制信息 */
declare interface ModelLimit {
  /** 模型上下文长度展示文案（如 "128K"、"1000K"） */
  ContextLengthDescription?: string;
  /** 模型对话框输入长度字符数限制 */
  InputLengthLimit?: number;
  /** 模型提示词长度字符数限制 */
  PromptLengthLimit?: number;
}

/** 模型超参 */
declare interface ModelParameter {
  /** 默认值 */
  DefaultValue?: string;
  /** 可选值列表 */
  EnumValueList?: string[];
  /** 最大值（仅数值类型有效） */
  MaxValue?: number;
  /** 最小值（仅数值类型有效） */
  MinValue?: number;
  /** 超参名称 */
  Name?: string;
  /** 超参类型。1-浮点数, 2-整数, 3-字符串 */
  Type?: number;
}

/** 模型参数 */
declare interface ModelParams {
  /** 是否开启深度思考 */
  DeepThinking?: string;
  /** 频率惩罚 */
  FrequencyPenalty?: number | null;
  /** 最大输出长度 */
  MaxTokens?: number | null;
  /** 存在惩罚 */
  PresencePenalty?: number | null;
  /** 深度思考效果 */
  ReasoningEffort?: string;
  /** 重复惩罚 */
  RepetitionPenalty?: number | null;
  /** 输出格式（text、json_object） */
  ReplyFormat?: string;
  /** seed 随机种子 */
  Seed?: number | null;
  /** 停止序列 */
  StopSequenceList?: string[];
  /** 温度 */
  Temperature?: number | null;
  /** top_p */
  TopP?: number | null;
  /** top_k */
  TopK?: number;
}

/** 模型属性 */
declare interface ModelProperty {
  /** 属性名称 */
  Name?: string;
  /** 属性值 */
  Value?: string;
}

/** 模型提供商基本信息 */
declare interface ModelProviderBasic {
  /** 模型提供商别名 */
  Alias?: string;
  /** 模型提供商名称 */
  Name?: string;
  /** 模型提供商类型。1-自有提供商, 2-自定义模型提供商, 3-第三方模型提供商 */
  ProviderType?: number;
}

/** 模型状态信息 */
declare interface ModelStatus {
  /** 专属并发数 */
  Concurrency?: number;
  /** 是否专属并发 */
  IsExclusive?: boolean;
  /** 资源状态。1-资源可用, 2-资源已用尽 */
  ResourceStatus?: number;
}

/** 模型调用明细 */
declare interface ModelUsageDetail {
  /** 调用类型，来源于计费 scene_billing（与 filter.call_type 对应） */
  CallType?: string;
  /** 是否默认知识库 */
  IsDefaultKB?: boolean;
  /** 模型名称 */
  ModelName?: string;
  /** MODEL 域单次调用的消耗计量列表（权威字段）：按单位+label 分项列出每类计量。unit=TOKEN 时 label 区分 Token 子类别（input/output/avg_cache_*），label 为空表示 total_tokens；unit=PAGE_COUNT 表示模型消耗页数 */
  ResourceConsumptionList?: ResourceConsumption[];
  /** 本次调用消耗 PU 量 */
  ConsumptionPU?: number;
}

/** 模型资源用量聚合明细（MODEL 域专属） */
declare interface ModelUsageSummary {
  /** 调用次数（业务调用维度的顶层计数） */
  CallCount?: number;
  /** 是否默认知识库 */
  IsDefaultKB?: boolean;
  /** 模型名称，标识使用的 AI 模型 */
  ModelName?: string;
  /** MODEL 域消耗计量列表（权威字段）：按单位+label 分项列出每类计量。unit=TOKEN 时 label 区分 Token 子类别（input/output/avg_cache_*），label 为空表示 total_tokens；unit=PAGE_COUNT 表示模型消耗页数 */
  ResourceConsumptionList?: ResourceConsumption[];
  /** 模型消耗 PU 总量（聚合维度内的 PU 消耗之和） */
  ConsumptionPU?: number;
}

/** MsgRecord */
declare interface MsgRecord {
  /** 答案 */
  Answer?: string;
  /** 应用ID */
  AppId?: string;
  /** 分类ID */
  CategoryId?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 意图 */
  Intent?: string;
  /** 意图分类 */
  IntentCategory?: string;
  /** 是否是智能分类 */
  IsSmart?: boolean;
  /** 问题 */
  Question?: string;
  /** 记录ID */
  RecordId?: string;
  /** 表示消息的回复方式，枚举 ReplyMethod：0=未指定, 1=大模型直接回复, 2=保守回复, 3=拒答, 4=敏感回复, 5=问答对优先回复, 6=欢迎语, 7=并发超限, 8=全局干预知识, 9=任务流程过程回复, 10=任务流程答案, 11=搜索引擎, 12=知识润色, 13=图片理解, 14=实时文档, 15=澄清确认, 16=工作流回复, 17=工作流结束, 18=智能体回复, 19=多意图, 20=中断, 21=智能体计划预览, 22=智能体计划结果, 23=智能体结构化输出。 */
  ReplyMethod?: number;
  /** 返回结果 */
  Result?: MsgRecordResult;
  /** 分数 */
  Score?: number;
  /** 会话ID */
  SessionId?: string;
  /** 来源 */
  Source?: MsgRecordSource;
  /** trace_id */
  TraceId?: string;
}

/** MsgRecordCategory */
declare interface MsgRecordCategory {
  /** 分类的业务 ID */
  CategoryId?: string;
  /** 子分类列表，树形嵌套 */
  Children?: MsgRecordCategory[];
  /** 分类名称 */
  Name?: string;
  /** 当前用户对该分类的操作权限 */
  Permission?: CategoryPermission;
  /** 该分类下消息记录的数量 */
  TotalCount?: string;
}

/** MsgRecordResult */
declare interface MsgRecordResult {
  /** 表示该条消息的调用结果：0=CALL_RESULT_UNKNOWN（全部/未知）, 1=CALL_RESULT_SUCCESS（成功）, 2=CALL_RESULT_FAILED（失败）；fail_reason（string）为调用失败时的失败原因描述。 */
  CallResult?: number;
  /** 自定义变量，json字符串 */
  CustomerVariable?: string;
  /** 失败原因 */
  FailReason?: string;
  /** 首token耗时 */
  FirstTokenLatency?: number;
  /** 输入token数 */
  InputToken?: number;
  /** 输出token数 */
  OutputToken?: number;
  /** 总token数 */
  TotalToken?: number;
  /** 总token耗时 */
  TotalTokenLatency?: number;
}

/** MsgRecordSource */
declare interface MsgRecordSource {
  /** 对话消息的接入渠道类型：0=未指定, 1=坐席, 2=体验页面(腾讯云), 3=评测端对话, 4=体验页面(手机号), 5=对话端API接入, 6=评测任务对话, 10=工作流调试, 10000=微信公众号, 10001=微信服务号, 10002=企微应用, 10003=网页组件, 10004=微信客服, 10005=微信小程序, 10006=元器, 10007=应用宝, 10008=元宝, 10009=企微智能机器人, 10010=元器API, 10011=LINE, 10012=Telegram, 10100=电脑管家, 20001=荣耀智能体平台, 20002=小米应用商店；user_id（string）为该渠道下的访客唯一标识。 */
  ChannelType?: number;
  /** 用户ID */
  FromId?: string;
  /** 消息发送者的用户来源类型：1=用户（访客/C端用户）, 2=机器人（AI回复）, 3=坐席（人工客服）；from_id（string）为该来源类型下的用户唯一标识 ID。 */
  FromType?: number;
  /** 用户头像 */
  UserAvatar?: string;
  /** 访客ID */
  UserId?: string;
  /** 访客名称 */
  UserNickname?: string;
}

/** 多智能体配置 */
declare interface MultiAgentConfig {
  /** Agent协同配置 */
  AgentCollaboration: AgentCollaborationConfig | null;
}

/** 多模态问答模型配置 */
declare interface MultiModalQAModel {
  /** 模型配置 */
  Model: ModelDetailInfo | null;
}

/** 多模态理解模型配置 */
declare interface MultiModalUnderstandingModel {
  /** 模型配置 */
  Model: ModelDetailInfo | null;
}

/** OAuth2.0授权信息 */
declare interface OAuthConfig {
  /** OAuth服务方授权页url地址 */
  AuthorizationUrl?: string;
  /** 客户端ID */
  ClientId?: string;
  /** 客户端密钥 */
  ClientSecret?: string;
  /** 请求授权的数据范围 */
  ScopeList?: string[];
  /** 获取access token的url地址 */
  TokenUrl?: string;
}

/** OnceSchedule */
declare interface OnceSchedule {
  /** 触发时间 */
  FireTime?: string;
}

/** 通用操作结果项 */
declare interface OperationResult {
  /** 资源 ID */
  Id?: string;
  /** 失败原因（succeeded=false 时填充） */
  Reason?: string;
  /** 是否成功 */
  Succeeded?: boolean;
}

/** 通用操作人信息 */
declare interface Operator {
  /** 用户 ID */
  UserId?: string;
  /** 用户姓名 */
  UserName?: string;
}

/** 平台资源用量聚合明细（PLATFORM 域专属） */
declare interface PlatformUsageSummary {
  /** PLATFORM 域消耗计量列表（权威字段）：按单位+label 分项列出每类计量，label 取 PlatformBizType 枚举名称字符串；典型如 unit=TIMES + label=PLATFORM_BIZ_TYPE_SECURITY_AUDIT/WEB_SEARCH/OPEN_CLAW/APP_INVOKE，unit=ITEM + label=PLATFORM_BIZ_TYPE_LONG_TERM_MEMORY */
  ResourceConsumptionList?: ResourceConsumption[];
}

/** 插件详情 */
declare interface Plugin {
  /** 插件配置 */
  Config?: PluginConfig | null;
  /** 创建时间，unix时间戳 */
  CreateTime?: string;
  /** 插件运营管理信息 */
  Operation?: PluginOperation | null;
  /** 插件id */
  PluginId?: string;
  /** 插件版本号 */
  PluginVersion?: number;
  /** 插件基础信息 */
  Profile?: PluginProfile | null;
  /** 插件统计信息 */
  Statistics?: PluginStatistics | null;
  /** 插件状态，1:可用，2:不可用 枚举值：1： 可用2： 不可用 */
  Status?: number;
  /** 工具列表 */
  ToolList?: Tool[] | null;
  /** 更新时间，Unix时间戳 */
  UpdateTime?: string;
  /** 用户维度的插件状态信息 */
  UserState?: PluginUserState | null;
}

/** 插件配置 */
declare interface PluginConfig {
  /** API插件配置 */
  ApiPluginConfig?: ApiPluginConfig | null;
  /** 应用插件配置 */
  AppPluginConfig?: AppPluginConfig | null;
  /** mcp插件配置 */
  MCPPluginConfig?: MCPPluginConfig | null;
}

/** PluginOperation */
declare interface PluginOperation {
  /** 是否允许外部调用 */
  AllowExternalAccess?: boolean;
  /** 计费类型。枚举值：0：免费1：公测2：官方收费 */
  BillingType?: number;
  /** 插件分类标识 */
  CategoryKey?: string;
  /** 插件概述 */
  Introduction?: string;
  /** 是否精选 */
  IsRecommended?: boolean;
}

/** MCP插件参数信息 */
declare interface PluginParam {
  /** 参数配置是否隐藏不可见 */
  IsGlobalHidden?: boolean;
  /** 参数是否必填 */
  IsRequired?: boolean;
  /** 参数名称 */
  Name?: string;
  /** 参数值 */
  Value?: string;
}

/** PluginProfile */
declare interface PluginProfile {
  /** 插件作者 */
  Author?: string;
  /** 插件描述 */
  Description?: string;
  /** 插件图标url */
  IconUrl?: string;
  /** 插件名称 */
  Name?: string;
  /** 插件产品分类枚举值：0：普通插件1：连接器类插件 */
  PluginClass?: number;
  /** 插件类型枚举值：0：API接口1：代码2：MCP3：应用 */
  PluginKind?: number;
  /** 插件来源枚举值：0：自定义插件1：官方插件2：第三方插件 */
  PluginSource?: number;
}

/** PluginStatistics */
declare interface PluginStatistics {
  /** 插件调用量 */
  CallCount?: number;
  /** 工具数量 */
  ToolCount?: number;
}

/** 插件概要信息（用于插件列表） */
declare interface PluginSummary {
  /** 插件配置信息 */
  Config?: PluginConfig;
  /** 是否已配置共享 */
  IsShared?: boolean;
  /** 插件运营管理信息 */
  Operation?: PluginOperation;
  /** 插件id */
  PluginId?: string;
  /** 插件基础信息 */
  Profile?: PluginProfile;
  /** 插件所属空间 ID；内置插件为空 */
  SpaceId?: string;
  /** 插件统计信息 */
  Statistics?: PluginStatistics;
  /** 插件状态，1:可用，2:不可用 枚举值：1： 可用2： 不可用 */
  Status?: number;
  /** 工具信息 */
  ToolList?: ToolSummary[];
  /** 用户维度的插件状态信息 */
  UserState?: PluginUserState;
  /** 更新时间，Unix时间戳单位：秒 */
  UpdateTime?: string;
}

/** 插件调用明细 */
declare interface PluginUsageDetail {
  /** 插件名称 */
  PluginName?: string;
  /** PLUGIN 域单次调用的消耗计量列表（权威字段）：按单位+label 分项列出每类计量。unit=TOKEN 时 label 区分 Token 子类别（input/output/avg_*），label 为空表示 total_tokens */
  ResourceConsumptionList?: ResourceConsumption[];
  /** 插件工具名（tool_name） */
  ToolName?: string;
}

/** 插件资源用量聚合明细（PLUGIN 域专属） */
declare interface PluginUsageSummary {
  /** 调用次数（业务调用维度的顶层计数） */
  CallCount?: number;
  /** PLUGIN 域消耗计量列表（权威字段）：按单位+label 分项列出每类计量。unit=TOKEN 时 label 区分 Token 子类别（input/output/avg_*），label 为空表示 total_tokens */
  ResourceConsumptionList?: ResourceConsumption[];
}

/** PluginUserState */
declare interface PluginUserState {
  /** 是否已收藏该插件 */
  IsFavorite?: boolean;
  /** 是否在插件白名单内 */
  IsInWhiteList?: boolean;
  /** 白名单类型，用于表示当前用户是否可直接使用该插件。枚举值：0：非白名单插件，全量开放1：当前用户在白名单内2：当前用户不在白名单内，需提交申请 */
  WhiteListType?: number;
}

/** Prompt改写配置 */
declare interface PromptRewriteModel {
  /** 模型配置 */
  Model: ModelDetailInfo | null;
}

/** QA 创建规格（一次性输入的非持久化数据） */
declare interface QACreateSpec {
  /** 问题 */
  Question: string;
  /** 答案 */
  Answer?: string;
  /** 分类 ID */
  CategoryId?: string;
  /** 关联文档 ID */
  DocId?: string;
  /** 知识生效作用域枚举项枚举值描述KNOWLEDGE_EFFECTIVE_DOMAIN_UNKNOWN0KNOWLEDGE_EFFECTIVE_DOMAIN_NONE1停用KNOWLEDGE_EFFECTIVE_DOMAIN_DEV2仅开发域KNOWLEDGE_EFFECTIVE_DOMAIN_RELEASE3仅发布域KNOWLEDGE_EFFECTIVE_DOMAIN_ALL4全域 */
  EffectiveDomain?: number;
  /** 过期策略（有效时间与超过有效时间后的行为） */
  ExpirationPolicy?: ExpirationPolicy | null;
  /** 适用范围（标签条件） */
  LabelRefList?: LabelRefIdentity[];
  /** 问题描述 */
  QuestionDescription?: string;
  /** 相似问列表 */
  SimilarQuestionList?: string[];
}

/** QA 生命周期信息 */
declare interface QALifecycle {
  /** 创建时间（Unix 秒） */
  CreateTime?: string;
  /** 过期策略（有效时间与超过有效时间后的行为） */
  ExpirationPolicy?: ExpirationPolicy | null;
  /** 状态：1=待校验，2=未采纳，3=导入失败，4=审核中，5=审核失败，6=学习中，7=学习失败，8=导入完成，9=已过期，10=超量失效，11=超量失效恢复中，12=人工申诉中，13=人工申诉失败枚举项枚举值描述QA_STATUS_UNKNOWN0QA_STATUS_PENDING_VERIFY1待校验QA_STATUS_NOT_ACCEPTED2未采纳QA_STATUS_IMPORT_FAIL3导入失败QA_STATUS_AUDITING4审核中QA_STATUS_AUDIT_FAIL5审核失败QA_STATUS_LEARNING6学习中QA_STATUS_LEARN_FAIL7学习失败QA_STATUS_IMPORTED8导入完成QA_STATUS_EXPIRED9已过期QA_STATUS_QUOTA_INVALID10超量失效QA_STATUS_QUOTA_RECOVERING11超量失效恢复中QA_STATUS_MANUAL_APPEALING12人工申诉中QA_STATUS_MANUAL_APPEAL_FAIL13人工申诉失败 */
  Status?: number;
  /** 状态描述 */
  StatusDesc?: string;
  /** 状态附加信息 */
  StatusMessage?: string;
  /** 更新时间（Unix 秒） */
  UpdateTime?: string;
}

/** QA 元信息 */
declare interface QAMetadata {
  /** 答案 */
  Answer?: string;
  /** 问答字符数 */
  QaCharCount?: string;
  /** 问答大小（字节，含相似问） */
  QaSize?: string;
  /** 问题 */
  Question?: string;
  /** 元数据引用字段名列表（用于显示问答哪些分类和属性被设置为元数据） */
  RefFieldNameList?: string[];
}

/** QA 可修改字段集合（配合 update_mask 使用） */
declare interface QAModifyFields {
  /** 答案 */
  Answer?: string;
  /** 分类 ID */
  CategoryId?: string;
  /** 关联文档 ID */
  DocId?: string;
  /** 知识生效作用域枚举项枚举值描述KNOWLEDGE_EFFECTIVE_DOMAIN_UNKNOWN0KNOWLEDGE_EFFECTIVE_DOMAIN_NONE1停用KNOWLEDGE_EFFECTIVE_DOMAIN_DEV2仅开发域KNOWLEDGE_EFFECTIVE_DOMAIN_RELEASE3仅发布域KNOWLEDGE_EFFECTIVE_DOMAIN_ALL4全域 */
  EffectiveDomain?: number;
  /** 过期策略（有效时间与超过有效时间后的行为） */
  ExpirationPolicy?: ExpirationPolicy | null;
  /** 是否采纳（校验通过） */
  IsAccepted?: boolean;
  /** 适用范围（标签条件） */
  LabelRefList?: LabelRefIdentity[];
  /** 问题 */
  Question?: string;
  /** 问题描述 */
  QuestionDescription?: string;
  /** 相似问修改列表 */
  SimilarQuestionList?: SimilarQuestionModifySpec[];
}

/** QA 操作者信息 */
declare interface QAOperator {
  /** 修改人 */
  Modifier?: Operator | null;
  /** 操作权限 */
  Permission?: QAPermission | null;
}

/** QA 操作权限信息 */
declare interface QAPermission {
  /** 是否可校验（采纳/不采纳） */
  CanAccept?: boolean;
  /** 是否可删除 */
  CanDelete?: boolean;
  /** 是否可编辑 */
  CanEdit?: boolean;
}

/** QA 查询条件 */
declare interface QAQuery {
  /** 查询关键词（模糊搜索） */
  Query?: string;
  /** 查询范围（query 作用的字段）：1=问题，2=标签或标签值，3=答案；支持多选，缺省时无效 */
  QueryScopeList?: number[];
}

/** QA 检索配置 */
declare interface QARetrievalConfig {
  /** 置信度阈值 */
  Confidence?: number;
  /** 是否启用 */
  Enabled?: boolean;
  /** 返回前 N 条 */
  TopN?: number;
}

/** QA 分片高亮信息 */
declare interface QASegmentHighlight {
  /** 高亮结束位置 */
  EndPos?: string;
  /** 高亮起始位置 */
  StartPos?: string;
}

/** QA 来源与关联文档信息 */
declare interface QASourceInfo {
  /** 关联文档的生效作用域枚举项枚举值描述KNOWLEDGE_EFFECTIVE_DOMAIN_UNKNOWN0KNOWLEDGE_EFFECTIVE_DOMAIN_NONE1停用KNOWLEDGE_EFFECTIVE_DOMAIN_DEV2仅开发域KNOWLEDGE_EFFECTIVE_DOMAIN_RELEASE3仅发布域KNOWLEDGE_EFFECTIVE_DOMAIN_ALL4全域 */
  DocEffectiveDomain?: number;
  /** 关联文档 ID */
  DocId?: string;
  /** 关联文档名称 */
  FileName?: string;
  /** 关联文档类型 */
  FileType?: string;
  /** 来源描述 */
  SourceDesc?: string;
  /** 来源类型：1=文档生成，2=批量导入，3=手动录入枚举项枚举值描述QA_SOURCE_TYPE_UNKNOWN0QA_SOURCE_TYPE_DOC1文档生成QA_SOURCE_TYPE_BATCH_IMPORT2批量导入QA_SOURCE_TYPE_MANUAL3手动录入 */
  SourceType?: number;
}

/** QA 摘要信息 */
declare interface QASummary {
  /** 所属分类路径（包含分类 ID、从根节点开始的分类 ID 路径和分类名称路径） */
  CategoryPath?: CategoryPath | null;
  /** 知识生效范围 */
  KnowledgeScope?: KnowledgeScope | null;
  /** 生命周期信息 */
  Lifecycle?: QALifecycle | null;
  /** 元信息（问题/答案/大小统计） */
  Metadata?: QAMetadata | null;
  /** 操作者信息 */
  OperatorInfo?: QAOperator | null;
  /** QA ID */
  QaId?: string;
  /** 相似问统计 */
  SimilarQuestion?: SimilarQuestionStat | null;
  /** 来源信息 */
  SourceInfo?: QASourceInfo | null;
}

/** [数据结构定义] 发布记录 */
declare interface ReleaseRecord {
  /** 是否可导出 */
  CanExport: boolean;
  /** 是否可回滚 */
  CanRollback: boolean;
  /** 发布描述 */
  Description: string;
  /** 发布失败数 */
  FailCount: number;
  /** 失败原因 */
  Reason: string;
  /** 发布ID */
  ReleaseId: string;
  /** 发布版本 */
  ReleaseVersion: string;
  /** 发布状态。枚举值: 1:待发布, 2:发布中, 3:发布成功, 4:发布失败, 5:审核中, 6:审核成功, 7:审核失败, 8:发布成功回调处理中, 9:发布暂停, 10:申诉审核中, 11:申诉审核通过, 12:申诉审核不通过 */
  Status: number;
  /** 状态描述 */
  StatusDescription: string;
  /** 发布成功数 */
  SuccessCount: number;
  /** 更新时间 (Unix时间戳,秒级) */
  UpdateTime: string;
  /** 发布人 */
  Updater: string;
}

/** 发布摘要信息 */
declare interface ReleaseSummary {
  /** 创建时间 (Unix时间戳,秒级) */
  CreateTime: string;
  /** 发布描述 */
  Description: string;
  /** 发布ID */
  ReleaseId: string;
  /** 发布状态。枚举值: 1:待发布, 2:发布中, 3:发布成功, 4:发布失败, 5:审核中, 6:审核成功, 7:审核失败, 8:发布成功回调处理中, 9:发布暂停, 10:申诉审核中, 11:申诉审核通过, 12:申诉审核不通过 */
  Status: number;
  /** 状态描述 */
  StatusDescription: string;
  /** 应用分享访问控制 */
  AppShareAccessControl?: AppShareAccessControl | null;
  /** 发布渠道ID列表 */
  ChannelIdList?: string[];
  /** 企业共享配置 */
  CorpShareConfig?: CorpShareConfig | null;
}

/** RequestParam */
declare interface RequestParam {
  /** AnyOf类型的参数 */
  AnyOf?: RequestParam[];
  /** 默认值 */
  DefaultValue?: string;
  /** 参数描述 */
  Description?: string;
  /** 全局隐藏不可见（区别于Agent场景的agent_hidden），true-全局隐藏不可见，false-可见 */
  IsGlobalHidden?: boolean;
  /** 是否必选 */
  IsRequired?: boolean;
  /** 参数名称 */
  Name?: string;
  /** OneOf类型的参数 */
  OneOf?: RequestParam[];
  /** 子参数,ParamType 是OBJECT 或 ARRAY<>类型有用 */
  SubParams?: RequestParam[];
  /** 枚举项枚举值描述PARAM_TYPE_STRING0字符串PARAM_TYPE_INT1整数PARAM_TYPE_FLOAT2浮点数PARAM_TYPE_BOOL3布尔值PARAM_TYPE_OBJECT4对象PARAM_TYPE_ARRAY_STRING5字符串数组PARAM_TYPE_ARRAY_INT6整数数组PARAM_TYPE_ARRAY_FLOAT7浮点数数组PARAM_TYPE_ARRAY_BOOL8布尔值数组PARAM_TYPE_ARRAY_OBJECT9对象数组PARAM_TYPE_ARRAY_ARRAY20数组嵌套PARAM_TYPE_NULL99空值PARAM_TYPE_UNSPECIFIED100未指定类型，用于OneOf和AnyOf场景 */
  Type?: number;
}

/** 重排配置 */
declare interface RerankConfig {
  /** 是否启用 */
  Enabled?: boolean;
  /** 模型名称 */
  ModelName?: string;
}

/** 单项消耗计量 */
declare interface ResourceConsumption {
  /** 功能标签，PLATFORM 场景取 PlatformBizType 枚举名称；MODEL/PLUGIN 场景为空 */
  Label?: string;
  /** 消耗计量单位枚举项枚举值描述DOSAGE_UNIT_TOKEN0token（默认）DOSAGE_UNIT_PAGE_COUNT1page_count（页数）DOSAGE_UNIT_TIMES2times（次数）DOSAGE_UNIT_SECOND3second（秒）DOSAGE_UNIT_ITEM4item（条）DOSAGE_UNIT_SHEET5sheet（张）DOSAGE_UNIT_CHARACTER6character（字符）DOSAGE_UNIT_GB7GBDOSAGE_UNIT_NUMBER8number（个数）DOSAGE_UNIT_MILL_SECOND9mill_second（毫秒） */
  Unit?: number;
  /** 消耗数值 */
  Value?: number;
}

/** 计费套餐包用量信息 */
declare interface ResourcePackageInfo {
  /** 套餐类型枚举值：1： 免费版2： 专业版3： 企业版 */
  PackageType?: number;
  /** 资源包总量 */
  ResourceTotal?: number;
  /** 资源包用量 */
  ResourceUsage?: number;
  /** 知识库容量 */
  KnowledgeCapacity?: number;
  /** 知识库用量 */
  KnowledgeUsage?: number;
  /** 资源包状态枚举值：1： 正常3： 已到期4： 即将到期 */
  ResourceStatus?: number;
}

/** ResponseParam */
declare interface ResponseParam {
  /** 变量描述 */
  Description?: string;
  /** 参数名称 */
  Name?: string;
  /** 枚举项枚举值描述OUTPUT_RENDER_REPLACE0覆盖（全量替换）OUTPUT_RENDER_APPEND1增量追加 */
  RenderMode?: number;
  /** 只对 OBJECT 或 ARRAY_OBJECT 类型有用 */
  SubParams?: ResponseParam[];
  /** 枚举项枚举值描述PARAM_TYPE_STRING0字符串PARAM_TYPE_INT1整数PARAM_TYPE_FLOAT2浮点数PARAM_TYPE_BOOL3布尔值PARAM_TYPE_OBJECT4对象PARAM_TYPE_ARRAY_STRING5字符串数组PARAM_TYPE_ARRAY_INT6整数数组PARAM_TYPE_ARRAY_FLOAT7浮点数数组PARAM_TYPE_ARRAY_BOOL8布尔值数组PARAM_TYPE_ARRAY_OBJECT9对象数组PARAM_TYPE_ARRAY_ARRAY20数组嵌套PARAM_TYPE_NULL99空值PARAM_TYPE_UNSPECIFIED100未指定类型，用于OneOf和AnyOf场景 */
  Type?: number;
}

/** 检索可选配置 */
declare interface RetrievalOption {
  /** 时效性检索增强配置 */
  ExpirationAwareness?: ExpirationAwareness | null;
  /** GraphRAG配置 */
  GraphRag?: GraphRAG | null;
  /** 表格增强配置 */
  TableEnhancement?: TableEnhancement | null;
}

/** 角色配置 */
declare interface RoleConfig {
  /** 角色描述 */
  RoleDescription: string;
}

/** 检索高级配置 */
declare interface SearchAdvancedConfig {
  /** 最终 rerank 配置 */
  FinalRerankConfig?: FinalRerankConfig | null;
  /** 各知识库的检索配置 */
  KbRetrievalList?: KBRetrievalConfig[];
  /** 检索知识类型：1=文档和问答，2=拒答枚举项枚举值描述SEARCH_KNOWLEDGE_TYPE_UNKNOWN0SEARCH_KNOWLEDGE_TYPE_DOC_QA1文档和问答SEARCH_KNOWLEDGE_TYPE_REJECTED_QUESTION2拒答 */
  KnowledgeType?: number;
  /** 最终返回结果数 */
  RecallCount?: number;
}

/** 检索计费信息 */
declare interface SearchBilling {
  /** 计费标签列表 */
  BillingTagList?: KVPair[];
  /** 计费子业务类型 */
  FinanceSubBusinessType?: string;
}

/** 检索请求上下文信息 */
declare interface SearchContext {
  /** 请求来源枚举项枚举值描述CALL_SOURCE_UNSPECIFIED0CALL_SOURCE_RAG1标准模式CALL_SOURCE_WORKFLOW2工作流CALL_SOURCE_PLUGIN3插件CALL_SOURCE_OPENCLAW4openclawCALL_SOURCE_RECALL_TEST5召回测试CALL_SOURCE_RECALL_TEST_DIFF6召回测试在对比的场景，同样需要触发检索接口。区别这种case前端不需要更新最新配置。因为对比1，2，3 可能最后保存的是2 */
  CallSource?: number;
  /** adp域：1=开发域，2=生产域枚举项枚举值描述ADP_DOMAIN_UNSPECIFIED0未指定ADP_DOMAIN_DEV1开发域ADP_DOMAIN_PROD2生产域 */
  Domain?: number;
  /** 访客 ID */
  VisitorId?: string;
}

/** 检索过滤 */
declare interface SearchFilter {
  /** 检索过滤类型枚举项枚举值描述SEARCH_FILTER_TYPE_UNKNOWN0SEARCH_FILTER_TYPE_CUSTOMER_LABEL_VALUE1用户自定义标签值SEARCH_FILTER_TYPE_CUSTOMER_LABEL_VALUE_ID2用户自定义标签值IDSEARCH_FILTER_TYPE_DOC_ID3指定文档 ID 检索SEARCH_FILTER_TYPE_DOC_CATEGORY_ID4指定文档分类 ID 检索SEARCH_FILTER_TYPE_DB_TABLE_ID5指定数据库表 ID 检索SEARCH_FILTER_TYPE_KB_SCHEMA_ID6指定知识库 schema ID */
  FilterType?: number;
  /** 过滤值列表，根据SearchFilterType取值1：传自定义标签值；2：传自定义标签值ID；3：传文档ID；4：传分类ID */
  FilterValueList?: string[];
  /** 用户自定义标签 ID */
  LabelId?: string;
  /** 逻辑运算符：AND 或 OR枚举项枚举值描述LOGIC_OPR_NOOP0LOGIC_OPR_AND1LOGIC_OPR_OR2 */
  LogicOp?: number;
  /** 嵌套检索过滤 */
  SearchFilterList?: SearchFilter[];
}

/** 检索过滤配置 */
declare interface SearchFilterConfig {
  /** 是否仅检索选中标签，true:仅检索带有选中标签的知识，false:同时检索带有选中标签和不带任何标签的知识 */
  OnlyRetrievalSelectedLabel?: boolean;
  /** 检索过滤 */
  SearchFilter?: SearchFilter | null;
}

/** 检索输入 */
declare interface SearchInput {
  /** 图片 URL 列表 */
  ImageUrlList?: string[];
  /** 问题 */
  Question?: string;
  /** 拆解的子问题列表 */
  SubQuestionList?: string[];
}

/** 搜索资源状态信息 */
declare interface SearchResourceStatusInfo {
  /** 搜索资源状态: AVAILABLE(1)=资源可用, EXHAUSTED(2)=资源已用尽。枚举值: 1:资源可用, 2:资源已用尽 */
  ResourceStatus: number;
}

/** 检索结果负载 */
declare interface SearchResultPayload {
  /** 图谱附加信息（JSON 字符串） */
  GraphData?: string;
  /** 命中的图片 URL 列表 */
  ImageUrlList?: string[];
  /** 表格附加信息（JSON 字符串） */
  SheetInfo?: string;
}

/** QA 相似问 */
declare interface SimilarQuestion {
  /** 相似问内容 */
  Content?: string;
  /** 是否 AI 生成 */
  IsAiGenerated?: boolean;
  /** 相似问 ID */
  SimilarQuestionId?: string;
}

/** 相似问额外信息 */
declare interface SimilarQuestionExtra {
  /** 相似问文本内容 */
  Content?: string;
  /** 相似问 ID */
  SimilarQuestionId?: string;
}

/** QA 相似问修改项 */
declare interface SimilarQuestionModifySpec {
  /** 相似问内容（CREATE 与 UPDATE 必填） */
  Content?: string;
  /** 操作类型：1=新增，2=修改，3=删除枚举项枚举值描述MODIFY_ACTION_UNKNOWN0MODIFY_ACTION_CREATE1新增MODIFY_ACTION_UPDATE2修改MODIFY_ACTION_DELETE3删除 */
  ModifyAction?: number;
  /** 相似问 ID（UPDATE 与 DELETE 必填） */
  SimilarQuestionId?: string;
}

/** QA 相似问统计 */
declare interface SimilarQuestionStat {
  /** 相似问数量 */
  SimilarQuestionCount?: number;
  /** 相似问提示（展示一条相似问样例） */
  SimilarQuestionTips?: string;
}

/** 单工作流配置 */
declare interface SingleWorkflowConfig {
  /** 是否开启异步工作流 */
  AsyncWorkflow: boolean;
  /** 状态 发布状态(UNPUBLISHED: 待发布 PUBLISHING: 发布中 PUBLISHED: 已发布 PUBLISHED_FAIL:发布失败；DRAFT：待调试) */
  Status: string;
  /** 工作流描述 */
  WorkflowDescription: string;
  /** 工作流Id */
  WorkflowId: string;
  /** 工作流名称 */
  WorkflowName: string;
  /** 工作流是否启用 */
  Enabled?: boolean;
}

/** SkillAnalysisInfo Skill 安全扫描信息。 */
declare interface SkillAnalysisInfo {
  /** 安全检测状态枚举值:| uint | 描述 || --- | --- || 0 | 待检测 || 1 | 检测中 || 2 | 可用 || 3 | 不可用 || 4 | 检测失败 | */
  AnalysisStatus: number;
  /** 风险描述 */
  RiskDescription: string;
  /** 风险等级枚举值:| uint | 描述 || --- | --- || 0 | 无风险 || 1 | 低风险 || 2 | 中风险 || 3 | 高风险 | */
  RiskLevel: number;
  /** 安全报告跳转url; */
  SecurityReportUrl: string;
}

/** SkillCategory Skill 分类信息。 */
declare interface SkillCategory {
  /** 分类标识 */
  CategoryKey: string;
  /** 分类名称 */
  CategoryName: string;
}

/** SkillClassification Skill 分类与来源信息。 */
declare interface SkillClassification {
  /** Skill 计费类型枚举值:| uint | 描述 || --- | --- || 0 | 免费 || 1 | 付费 | */
  BillingType: number;
  /** Skill 内置来源，仅在 create_type 为 SKILL_CREATE_TYPE_BUILTIN 时生效枚举值:| uint | 描述 || --- | --- || 0 | 占位 || 1 | ADP 专有 || 2 | 腾讯专有 || 3 | SkillHub || 99 | 其他 | */
  BuiltinSource: number;
  /** Skill 分类 */
  CategoryKey: string;
  /** Skill 创建方式枚举值:| uint | 描述 || --- | --- || 0 | 占位 || 1 | 文件上传 || 2 | 由企业级共享流程生成 || 3 | AIGC 生成 || 99 | 内置 Skill | */
  CreateType: number;
  /** Skill 提供方类型枚举值:| uint | 描述 || --- | --- || 0 | 占位 || 1 | 官方 || 2 | 第三方 || 3 | 自定义 || 4 | 自定义企业级共享 | */
  ProviderType: number;
  /** Skill 来源链接 */
  SourceLink: string;
}

/** Skill 企业共享配置。 */
declare interface SkillCorpShareConfig {
  /** 枚举项枚举值描述SHARE_SCOPE_TYPE_UNSPECIFIED0SHARE_SCOPE_TYPE_ALL1SHARE_SCOPE_TYPE_ACCOUNT2SHARE_SCOPE_TYPE_SPACE3枚举值：0： 未指定1： 全企业共享3： 按空间共享 */
  ShareScope?: number;
  /** 共享范围信息，仅支持空间；StrId 为空间ID，Name 为空间名称 */
  ShareScopeList?: Identity[];
}

/** skill详情 */
declare interface SkillDetail {
  /** 调用情况摘要 */
  ReferenceSummaryList?: SkillReferenceSummary[];
  /** Skill 摘要 */
  SkillSummary?: SkillSummary;
  /** 版本列表 */
  VersionList?: SkillVersion[];
}

/** Skill 异常通知。 */
declare interface SkillNotice {
  /** 通知级别枚举值:| uint | 描述 || --- | --- || 0 | 占位 || 1 | 成功，字符串面："success" || 2 | 警告，字符串面："warning" || 3 | 错误，字符串面："error" | */
  Level?: number;
  /** 文案（i18n 后字符串） */
  NoticeContent?: string;
  /** 触发本通知的 Skill 版本ID */
  TriggerVersionId?: string;
  /** 通知类型 枚举值:| uint | 描述 || --- | --- || 0 | 占位 || 1 | 发布失败 || 2 | 共享审批被拒 | */
  Type?: number;
}

/** SkillProfile Skill 基础展示信息。 */
declare interface SkillProfile {
  /** 创建时间（Unix秒） */
  CreateTime: string;
  /** 创建者 */
  Creator: string;
  /** Skill 描述 */
  Description: string;
  /** Skill 展示描述 */
  DisplayDescription: string;
  /** Skill 展示名称 */
  DisplayName: string;
  /** Skill 图标 */
  IconUrl: string;
  /** Skill 名称 */
  Name: string;
  /** 更新时间（Unix秒） */
  UpdateTime: string;
  /** 空间 */
  SpaceId?: string;
}

/** 同一 SkillRefType 下的引用分组（含总数 + 引用详情列表）。 total_count 始终以未过滤的原始总量为准；reference_summary_list 受二次鉴权开关影响。 */
declare interface SkillReferenceGroup {
  /** 该类型下的引用详情列表 */
  ReferenceSummaryList?: SkillReferenceSummary[];
  /** 枚举项枚举值描述SKILL_REF_UNKNOWN0占位SKILL_REF_OPENCLAW1openclawSKILL_REF_AGENT2agentSKILL_REF_CORP_ASSISTANT3企业助手 */
  ReferenceType?: number;
  /** 该类型下的引用总数 */
  TotalCount?: number;
}

/** 引用摘要（用于详情页展示，对应DB t_skill_reference） */
declare interface SkillReferenceSummary {
  /** 关联ID */
  ReferenceId?: string;
  /** 关联名称 */
  ReferenceName?: string;
  /** 关联类型枚举值:| uint | 描述 || --- | --- || 0 | 占位 || 1 | ClawPro || 2 | agent | */
  ReferenceType?: number;
  /** 空间ID */
  SpaceId?: string;
  /** 空间名称 */
  SpaceName?: string;
  /** Reference实例拥有者 */
  Owner?: string;
}

/** SkillShare Skill 企业共享信息。 */
declare interface SkillShare {
  /** 审批ID */
  ApprovalId: string;
  /** 共享后关联的新 skill_id */
  ShareSkillId: string;
  /** 共享版本，如 1.0.0 */
  ShareVersion: string;
  /** 共享版本ID */
  ShareVersionId: string;
  /** 原 skill_id */
  SkillId: string;
  /** 共享状态枚举值:| uint | 描述 || --- | --- || 0 | 未共享 || 1 | 已共享 || 2 | 审批中 | */
  Status: number;
  /** 企业共享范围 */
  CorpShareConfig?: SkillCorpShareConfig;
}

/** SkillSummary 列表中的 Skill 摘要。 */
declare interface SkillSummary {
  /** 分类信息 */
  ClassificationInfo: SkillClassification | null;
  /** 当前版本信息 */
  CurrentVersionInfo: SkillVersion | null;
  /** 当前用户是否收藏 */
  IsFavorite: boolean;
  /** 基础信息 */
  Profile: SkillProfile | null;
  /** Skill ID */
  SkillId: string;
  /** Skill 异常通知列表 */
  NoticeList?: SkillNotice[];
  /** 当前用户对该 Skill 的资源操作权限位列表；内置/共享 Skill 固定为空数组 */
  PermissionIdList?: string[];
  /** 共享信息；可能有两条，一条是已共享的，一条是审核中的 */
  ShareList?: SkillShare[];
  /** Skill状态 枚举值:| uint | 描述 || --- | --- || 0 | 初始化（无任何已发布版本，且最新版本处于 INITIALIZED/UNRELEASED） || 1 | 安全检测中（无任何已发布版本，且最新版本处于 AUDITING） || 2 | 待发布（无任何已发布版本，且最新版本处于 PENDING_RELEASE） || 3 | 已发布（存在任一 RELEASED 版本，吸收态） | */
  SkillStatus?: number;
}

/** SkillVersion Skill 版本信息。 */
declare interface SkillVersion {
  /** 检测信息 */
  AnalysisInfo: SkillAnalysisInfo | null;
  /** 当前生效版本号 */
  Version: string;
  /** 当前生效版本ID */
  VersionId: string;
  /** Skill 版本发布流程状态： - 0 INITIALIZED 初始化（版本初始态） - 1 AUDITING 审核中（f_analysis_status ∈ {PENDING, RUNNING}） - 2 PENDING_RELEASE 待发布（低/中风险，等用户确认上架） - 3 RELEASED 已发布 - 4 UNRELEASED 未发布（HIGH / UNAVAILABLE / FAILED / 用户放弃，含历史"不通过"语义）与 SkillAnalysisStatus 解耦：前者是用户视角发布生命周期，后者是安全检测阶段。 */
  VersionStatus?: number;
  /** Skill包的md5信息 */
  SkillMd5?: string;
  /** 版本包地址 */
  SkillUrl?: string;
  /** 版本创建时间（Unix秒） */
  CreateTime?: string;
  /** skill md文档 */
  SkillMarkdownUrl?: string;
  /** 版本变更说明 */
  UpdateDesc?: string;
  /** 变更用户 */
  Updater?: string;
}

/** 排序条件 */
declare interface Sort {
  /** 排序字段名，如 create_time */
  Name: string;
  /** 排序方向，1 升序，2 降序枚举项枚举值描述SORT_ORDER_INVALID0无效SORT_ORDER_ASC1升序SORT_ORDER_DESC2降序 */
  Direction?: number;
}

/** 空间信息 */
declare interface Space {
  /** 空间id */
  SpaceId?: string;
  /** 空间名称 */
  Name?: string;
  /** 空间描述 */
  Description?: string;
  /** 空间权限 */
  PermissionIdList?: string[];
}

/** 特殊状态信息 */
declare interface SpecialStatusInfo {
  /** 状态 (0-不在特殊状态中, 1-在特殊状态中)。枚举值: 1:在特殊状态中 */
  Status: number;
}

/** 摘要列表查询通用开关配置 */
declare interface SummaryListSwitch {
  /** 是否显示元数据 */
  ShowMetadataEnabled?: boolean;
}

/** 支持的文件类型 */
declare interface SupportedFileType {
  /** 文件类型描述(如"文本文档") */
  Description: string;
  /** 文件类型(如 txt、pdf、jpg, 建议用扩展名) */
  FileExt: string;
  /** 文件大小限制(单位: 字节) */
  MaxSizeBytes: string;
}

/** 系统变量 */
declare interface SystemVariable {
  /** 变量描述 */
  Description: string;
  /** 变量名称 */
  Name: string;
}

/** 表格增强配置 */
declare interface TableEnhancement {
  /** 是否启用 */
  Enabled?: boolean;
}

/** Telegram渠道配置 */
declare interface TelegramChannelConfig {
  /** Telegram Bot Token */
  BotToken?: string;
}

/** 思考模型配置 */
declare interface ThinkModel {
  /** 思考模型 */
  Model: ModelDetailInfo | null;
}

/** 查询时间范围（Unix 秒） */
declare interface TimeRange {
  /** 结束时间，Unix 秒 */
  EndTime: string;
  /** 开始时间，Unix 秒 */
  StartTime: string;
}

/** TimerPushConfig */
declare interface TimerPushConfig {
  /** 枚举值:| uint | 描述 || --- | --- || 0 | || 1 | 不推送 || 2 | 微信公众号 || 3 | 企业微信 AI 机器人 | */
  PushChannel?: number;
  /** 推送会话ID */
  PushTargetId?: string;
  /** 枚举值:| uint | 描述 || --- | --- || 0 | || 1 | 用户 (微信公众号 openid) || 2 | 群聊 (企微机器人 chat_id) | */
  PushTargetType?: number;
  /** 推送webhook的url */
  PushWebhookUrl?: string;
}

/** TimerScheduleConfig */
declare interface TimerScheduleConfig {
  /** cron配置 */
  Cron?: CronSchedule;
  /** 每日触发 */
  Daily?: DailySchedule;
  /** 固定间隔 */
  Interval?: IntervalSchedule;
  /** 仅手动 */
  ManualOnly?: ManualOnlySchedule;
  /** 单次 */
  Once?: OnceSchedule;
  /** 枚举值:| uint | 描述 || --- | --- || 0 | || 1 | 仅手动 || 2 | 每天 || 3 | 每周 || 4 | 按间隔 || 5 | 一次性 || 6 | Cron | */
  ScheduleType?: number;
  /** 时区 */
  Timezone?: string;
  /** 每周固定时间触发 */
  Weekly?: WeeklySchedule;
}

/** Token 使用统计 */
declare interface TokenUsage {
  /** completion token 数 */
  CompletionTokens?: number;
  /** 模型名称 */
  ModelName?: string;
  /** prompt token 数 */
  PromptTokens?: number;
  /** 总 token 数 */
  TotalTokens?: number;
}

/** Tool */
declare interface Tool {
  /** 工具计费信息 */
  Billing?: ToolBilling | null;
  /** 工具调用次数单位：次数 */
  CallCount?: number;
  /** 工具描述信息 */
  Description?: string;
  /** 工具名称 */
  Name?: string;
  /** 插件ID */
  PluginId?: string;
  /** 枚举项枚举值描述TOOL_ACCESS_MODE_UNKNOWN0未指定TOOL_ACCESS_MODE_READ_ONLY1只读TOOL_ACCESS_MODE_WRITE_DELETE2写/删除 */
  ToolAccessMode?: number;
  /** 工具配置信息 */
  ToolConfig?: ToolConfig | null;
  /** 工具ID */
  ToolId?: string;
}

/** ToolBilling */
declare interface ToolBilling {
  /** 基础计费信息 */
  BasicBilling?: BasicBilling;
  /** 枚举项枚举值描述BILLING_TYPE_FREE0免费BILLING_TYPE_LIMITED_FREE1限时免费BILLING_TYPE_OFFICIAL_PAID2官方收费BILLING_TYPE_OFFICIAL_PAID_OLD_FREE3官方收费（新/升级用户收费，存量老用户限时免费） */
  BillingType?: number;
  /** 复合类型计费信息 */
  ComplexBilling?: ComplexBilling;
  /** 双向计费信息 */
  DuplexBilling?: DuplexBilling;
}

/** ToolConfig */
declare interface ToolConfig {
  /** API工具配置信息 */
  ApiToolConfig?: ApiToolConfig;
  /** 应用配置信息 */
  AppToolConfig?: AppToolConfig;
  /** 代码工具配置信息 */
  CodeToolConfig?: CodeToolConfig;
  /** MCP工具配置信息 */
  MCPToolConfig?: MCPToolConfig;
}

/** ToolExample */
declare interface ToolExample {
  /** 请求参数 */
  Request?: string;
  /** 响应参数 */
  Response?: string;
}

/** 工具信息 */
declare interface ToolSummary {
  /** 工具Id */
  ToolId?: string;
}

/** TriggerConfig */
declare interface TriggerConfig {
  /** 定时器配置 */
  ScheduledConfig?: AppTriggerScheduleConfig;
  /** Webhook配置 */
  WebhookConfig?: AppTriggerWebhookConfig;
}

/** TriggerStatus */
declare interface TriggerStatus {
  /** 定时器状态 */
  ScheduledStatus?: AppTriggerScheduleStatus;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 访客id */
  UserId?: string;
  /** Webhook状态 */
  WebhookStatus?: AppTriggerWebhookStatus;
}

/** 资源调用时序明细 */
declare interface UsageDetail {
  /** 调用来源 */
  CallSource?: CallSource;
  /** 计量 ID，用于对账/回溯 */
  DosageId?: string;
  /** 调用时间戳（Unix 秒） */
  EventTime?: string;
  /** MODEL 域专属 */
  Model?: ModelUsageDetail;
  /** PLUGIN 域专属 */
  Plugin?: PluginUsageDetail;
  /** 调用链路追踪 ID */
  TraceId?: string;
  /** 用户 ID */
  UserId?: string;
}

/** 资源用量聚合明细 */
declare interface UsageSummary {
  /** MODEL 域专属 */
  Model?: ModelUsageSummary;
  /** PLATFORM 域专属 */
  Platform?: PlatformUsageSummary;
  /** PLUGIN 域专属 */
  Plugin?: PluginUsageSummary;
  /** 来源 ID；CORP 视图=space_id（企业视图按 space 分组），SPACE 视图=app_id（uint64 字符串），APP 视图=app_id */
  SourceId?: string;
  /** 来源名称；CORP 视图=space_name，SPACE 视图=app_name，APP 视图=app_name */
  SourceName?: string;
  /** 视图类型，决定 SourceId/SourceName 的业务含义枚举项枚举值描述VIEW_TYPE_UNSPECIFIED0未指定（无效值，请求勿传）VIEW_TYPE_CORP1企业视图VIEW_TYPE_SPACE2空间视图VIEW_TYPE_APP3应用视图 */
  ViewType?: number;
}

/** 用户访问配置 */
declare interface UserAccessConfig {
  /** 客户自定义知识 ID */
  CustomerKnowledgeId?: string;
  /** 文档是否公开 */
  IsPublic?: boolean;
}

/** 用户+Agent归属引用 */
declare interface UserAgentReference {
  /** claw agent 运行态标识 */
  AgentId?: string;
  /** 归属用户标识 */
  UserId?: string;
}

/** 变量信息 */
declare interface Variable {
  /** 默认文件名称 */
  DefaultFileName: string;
  /** 默认值 */
  DefaultValue: string;
  /** 变量描述 */
  Description: string;
  /** 变量模块类型枚举值：0： API参数1： 环境参数2： 应用参数3： 系统参数 */
  ModuleType: number;
  /** 变量名称 */
  Name: string;
  /** 变量类型枚举值：0： 字符串1： 整数2： 浮点数3： 布尔值4： 对象5： 字符串数组6： 整数数组7： 浮点数数组8： 布尔值数组9： 对象数组10： 文件11： 文档12： 图片13： 音频14： 视频15： 文件数组16： 文档数组17： 图片数组18： 音频数组19： 视频数组20： 数组的数组21： 密钥 */
  Type: number;
  /** 变量ID */
  VariableId: string;
  /** 是否启用网络策略(仅环境变量生效) */
  EnableEndpoints?: boolean;
  /** 网络策略列表(支持: 精确域名、*.通配子域名、可带协议/端口/路径前缀) */
  EndpointList?: string[];
  /** 是否内置变量 */
  IsBuiltin?: boolean;
  /** 是否可注入到沙箱环境 */
  EnableSandbox?: boolean;
}

/** 视图范围 */
declare interface ViewScope {
  /** 视图类型；枚举值：VIEW_TYPE_CORP(1) 企业视图、VIEW_TYPE_SPACE(2) 空间视图、VIEW_TYPE_APP(3) 应用视图枚举项枚举值描述VIEW_TYPE_UNSPECIFIED0未指定（无效值，请求勿传）VIEW_TYPE_CORP1企业视图VIEW_TYPE_SPACE2空间视图VIEW_TYPE_APP3应用视图 */
  ViewType: number;
  /** 视图范围 ID；VIEW_TYPE_CORP 留空；VIEW_TYPE_SPACE 填 space_id；VIEW_TYPE_APP 填 app_id（uint64 雪花 ID 的十进制字符串） */
  ScopeId?: string;
}

/** VoiceConfig */
declare interface VoiceConfig {
  /** 数智人音色key,需要和公有云音色id对齐 */
  TimbreKey: string;
  /** 音色名称 */
  VoiceName: string;
  /** 公有云音色id */
  VoiceType: number;
}

/** 微信公众号/小程序渠道配置 */
declare interface WechatChannelConfig {
  /** 授权二维码URL（创建后回填） */
  QrcodeUrl?: string;
  /** 公众号/小程序AppId（授权后回填） */
  WechatAppId?: string;
  /** 公众号/小程序RefreshToken（授权后回填） */
  WechatRefreshToken?: string;
}

/** 微信ClawBot渠道配置 */
declare interface WechatClawBotChannelConfig {
  /** ClawBot机器人ID（扫码后回填） */
  BotId?: string;
  /** ClawBot机器人Token（扫码后回填） */
  BotToken?: string;
  /** 二维码状态（wait/confirmed/expired） */
  QrcodeStatus?: string;
  /** 二维码URL（创建后回填） */
  QrcodeUrl?: string;
  /** 微信用户ID（扫码后回填） */
  WechatUserId?: string;
}

/** 微信客服渠道配置 */
declare interface WechatCustomerServiceChannelConfig {
  /** 企业微信应用Secret */
  AgentSecret?: string;
  /** 头像URL */
  Avatar?: string;
  /** 回调配置 */
  Callback?: CallbackConfig;
  /** 客服账号ID */
  CustomerServiceId?: string;
  /** 客服账号名称 */
  Name?: string;
  /** 客服形象二维码URL */
  ShareCodeUrl?: string;
  /** 企业微信企业ID */
  WecomCorpId?: string;
}

/** 企微应用渠道配置 */
declare interface WecomAppChannelConfig {
  /** 回调配置 */
  Callback?: CallbackConfig;
  /** 第三方企业ID */
  ThirdChannelCorpId?: string;
  /** 第三方渠道ID */
  ThirdChannelId?: string;
  /** 企微应用ID */
  WecomAgentId?: string;
  /** 企微应用Secret */
  WecomAgentSecret?: string;
  /** 企业ID */
  WecomCorpId?: string;
}

/** 企微机器人回调接入配置 */
declare interface WecomRobotCallbackAccess {
  /** 回调配置 */
  Callback?: CallbackConfig;
  /** 机器人名称 */
  RobotName?: string;
  /** 企微企业ID */
  WecomCorpId?: string;
  /** 企微机器人ID */
  WecomRobotId?: string;
}

/** 企微机器人渠道配置 */
declare interface WecomRobotChannelConfig {
  /** 回调接入配置 */
  Callback?: WecomRobotCallbackAccess | null;
  /** WebSocket长连接配置 */
  Websocket?: WecomRobotWebsocketAccess | null;
}

/** 企微机器人WebSocket接入配置 */
declare interface WecomRobotWebsocketAccess {
  /** 绑定类型：1-扫码绑定，2-填写表单绑定 */
  BindType?: number;
  /** 企微机器人BotId */
  BotId?: string;
  /** 企微机器人BotSecret */
  BotSecret?: string;
}

/** WeeklySchedule */
declare interface WeeklySchedule {
  /** 定时配置（星期） */
  Times?: WeeklyTime[];
}

/** WeeklyTime */
declare interface WeeklyTime {
  /** 时间 */
  TimeOfDay?: string;
  /** 周几 */
  Weekday?: number;
}

declare interface CheckLabelRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 待校验的标准词列表（数量：1~100） */
  TermList: string[];
  /** 标签 ID（在指定标签下校验标准词唯一性） */
  LabelId?: string;
}

declare interface CheckLabelResponse {
  /** 校验结果列表 */
  CheckList?: LabelTermCheckResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopyAgentFromAppRequest {
  /** 应用Id */
  AppId: string;
  /** 目标应用ID，kind=0时需传入 */
  TargetAppId?: string;
  /** Agent 类型，区分 B 端配置态 Agent 与 C 端用户态 Agent枚举值：0： 配置端Agent 1： 用户态 Agent */
  Kind?: number;
}

declare interface CopyAgentFromAppResponse {
  /** 主 Agent Id */
  ParentAgentId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CopyAppRequest {
  /** app_id */
  AppId: string;
  /** target_space_id */
  TargetSpaceId?: string;
}

declare interface CopyAppResponse {
  /** new_app_id */
  NewAppId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAgentRequest {
  /** 应用Id */
  AppId: string;
  /** Agent 配置 */
  Agent?: AgentSpec;
  /** Agent 类型，区分 B 端配置态 Agent 与 C 端用户态 Agent枚举值：0： 配置端Agent1： 用户态 Agent */
  Kind?: number;
}

declare interface CreateAgentResponse {
  /** Agent Id */
  AgentId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAppRequest {
  /** 空间ID */
  SpaceId: string;
  /** 应用模式。枚举值: 1:标准模式, 2:Agent模式, 3:单工作流模式, 4:ClawAgent模式 */
  AppMode?: number;
  /** 应用头像 */
  Avatar?: string;
  /** 应用描述 */
  Description?: string;
  /** 应用名称 */
  Name?: string;
}

declare interface CreateAppResponse {
  /** app_id */
  AppId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAppTriggerRequest {
  /** 应用ID */
  AppId?: string;
  /** 应用触发器执行配置 */
  ExecuteConfig?: ExecuteConfig;
  /** 枚举项枚举值描述APP_TRIGGER_EXECUTE_TYPE_UNSPECIFIED0未指定APP_TRIGGER_EXECUTE_TYPE_PROMPT1指令执行APP_TRIGGER_EXECUTE_TYPE_WORKFLOW2工作流执行 */
  ExecuteType?: number;
  /** 第三方推送配置 */
  PushConfig?: TimerPushConfig;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 触发器配置 */
  TriggerConfig?: TriggerConfig;
  /** 触发器名字 */
  TriggerName?: string;
  /** 枚举项枚举值描述APP_TRIGGER_TYPE_UNSPECIFIED0未指定APP_TRIGGER_TYPE_SCHEDULED1定时触发APP_TRIGGER_TYPE_WEBHOOK2Webhook 触发 */
  TriggerType?: number;
  /** 访客ID */
  UserId?: string;
}

declare interface CreateAppTriggerResponse {
  /** 应用触发器ID */
  TriggerId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCategoryRequest {
  /** 分类类型（不可为 0，取值：1=文档分类，2=问答分类）枚举项枚举值描述CATEGORY_TYPE_UNKNOWN0CATEGORY_TYPE_DOC1文档分类CATEGORY_TYPE_QA2问答分类 */
  CategoryType: number;
  /** 所属知识库 ID */
  KbId: string;
  /** 分类名（长度：1~64 个字符） */
  Name: string;
  /** 父分类 ID */
  ParentCategoryId?: string;
}

declare interface CreateCategoryResponse {
  /** 创建成功的分类 ID */
  CategoryId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateChannelRequest {
  /** 应用业务ID */
  AppId: string;
  /** 渠道规格（场景/类型/名称/备注/配置，必填） */
  Spec?: ChannelSpec;
}

declare interface CreateChannelResponse {
  /** 渠道ID */
  ChannelId?: string;
  /** 二维码URL（扫码类渠道创建后回填，其他场景为空） */
  QrcodeUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConversationRequest {
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** 应用 ID */
  AppId?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，应用密钥 */
  AppKey?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** Type=CONVERSATION_TYPE_SHARE 时必填，分享码 */
  ShareCode?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，访客ID */
  UserId?: string;
  /** 用户端 AgnetId，当Claw模式开启了“允许在对话中动态修改配置”时可用 */
  AgentId?: string;
}

declare interface CreateConversationResponse {
  /** 会话 ID */
  ConversationId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKBRequest {
  /** 知识库类型（不可为 0，取值：1=默认知识库，2=共享知识库）枚举项枚举值描述KB_TYPE_UNKNOWN0KB_TYPE_DEFAULT1默认知识库KB_TYPE_SHARED2共享知识库 */
  KbType: number;
  /** 工作空间 ID */
  SpaceId: string;
  /** 可写属性 */
  Spec: KBSpec;
  /** 共享子类型：1=普通，2=公众号枚举项枚举值描述SHARED_KB_SUB_TYPE_UNKNOWN0SHARED_KB_SUB_TYPE_NORMAL1普通SHARED_KB_SUB_TYPE_PUBLIC_ACCOUNT2公众号 */
  SharedSubType?: number;
}

declare interface CreateKBResponse {
  /** 创建后的知识库 ID */
  KbId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLabelRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 标签名称（长度不小于 1 个字符） */
  Name: string;
  /** 标签值（标准词 + 同义词列表），其中 term_id 由后台生成、创建时留空 */
  TermList?: LabelTerm[];
}

declare interface CreateLabelResponse {
  /** 标签 ID */
  LabelId?: string;
  /** 标签值（标准词 + 同义词列表，含后台生成的 term_id） */
  TermList?: LabelTerm[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMsgRecordCategoryRequest {
  /** 分类名称 */
  Name: string;
  /** 应用 ID */
  AppId: string;
  /** 父分类业务 ID，0 表示一级分类（未分类） */
  ParentId?: string;
}

declare interface CreateMsgRecordCategoryResponse {
  /** 新建分类的业务 ID */
  CategoryId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePluginRequest {
  /** 插件基础资料 */
  Profile: PluginProfile;
  /** 插件类型配置 */
  Config: PluginConfig;
  /** 当前空间id */
  SpaceId: string;
  /** 插件的工具列表 */
  ToolList?: Tool[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface CreatePluginResponse {
  /** 插件id */
  PluginId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateQAGenerationTaskRequest {
  /** 待生成 QA 的文档 ID 列表（数量：1~20） */
  DocIdList: string[];
  /** 所属知识库 ID */
  KbId: string;
}

declare interface CreateQAGenerationTaskResponse {
  /** 任务 ID 列表 */
  TaskIdList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateQAListRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 批量创建（数量：1~20） */
  QaList: QACreateSpec[];
}

declare interface CreateQAListResponse {
  /** 批量创建结果 */
  ResultList?: OperationResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReleaseRequest {
  /** 应用ID */
  AppId: string;
  /** 应用分享访问控制配置 */
  AppShareAccessControl?: AppShareAccessControl;
  /** 渠道ID列表 */
  ChannelIdList?: string[];
  /** 企业共享配置 */
  CorpShareConfig?: CorpShareConfig;
  /** 发布描述 */
  Description?: string;
  /** 将默认知识库中，仅调试生效的知识批量变更为"调试/发布都生效" */
  IsDevToRelease?: boolean;
  /** 是否同步发布为应用模板 */
  IsPublishAsTemplate?: boolean;
}

declare interface CreateReleaseResponse {
  /** need_approval */
  NeedApproval?: boolean;
  /** release_id */
  ReleaseId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSimilarQuestionRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 问题 */
  Question: string;
  /** 答案 */
  Answer?: string;
}

declare interface CreateSimilarQuestionResponse {
  /** 生成的相似问列表 */
  QuestionList?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSkillRequest {
  /** Skill 创建方式，必填；仅允许枚举值：1： FILE_UPLOAD（文件上传）3： AIGC（AIGC生成） */
  CreateType: number;
  /** skill包文件地址（zip）；FILE_UPLOAD / AIGC 均必填 */
  FileUrl: string;
  /** 空间ID */
  SpaceId: string;
  /** skill展示描述 */
  DisplayDescription?: string;
  /** skill展示名称 */
  DisplayName?: string;
  /** 图标地址 */
  IconUrl?: string;
  /** skill业务唯一标识名（同企业下唯一）；未传时从skill包解析 */
  Name?: string;
  /** 版本号 */
  SkillVersion?: string;
  /** 版本变更说明 */
  UpdateDescription?: string;
}

declare interface CreateSkillResponse {
  /** 创建成功后的skillID */
  SkillId?: string;
  /** 创建成功后的版本ID */
  VersionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSkillShareRequest {
  /** 必填，申请备注（弹窗"申请备注"） */
  ApplyRemark: string;
  /** 必填，原skill_id */
  SkillId: string;
  /** 空间ID，必填 */
  SpaceId: string;
  /** 必填，被共享的版本id（必须高于已共享版本） */
  VersionId: string;
  /** 共享配置 */
  CorpShareConfig?: SkillCorpShareConfig;
}

declare interface CreateSkillShareResponse {
  /** 是否走了审批流（false表示无需审批已直接创建共享任务） */
  NeedApproval?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSpaceRequest {
  /** 工作空间名称,长度最大30个字符 */
  Name?: string;
  /** 空间描述，长度最大150个字符 */
  Description?: string;
}

declare interface CreateSpaceResponse {
  /** 空间id */
  SpaceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVariableRequest {
  /** app_id */
  AppId: string;
  /** 变量信息 */
  Variable?: Variable;
}

declare interface CreateVariableResponse {
  /** variable_id */
  VariableId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWebSocketTokenRequest {
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** 应用 ID */
  AppId?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，应用密钥 */
  AppKey?: string;
  /** 子用户Uin */
  LoginSubAccountUin?: string;
  /** 主用户Uin */
  LoginUin?: string;
  /** Type=CONVERSATION_TYPE_SHARE 时必填，分享码 */
  ShareCode?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，访客ID */
  UserId?: string;
}

declare interface CreateWebSocketTokenResponse {
  /** 应用ID */
  AppId?: string;
  /** WebSocket Token */
  Token?: string;
  /** 用户ID，在后续DescribeUserDialogConfig接口中会使用 */
  UserId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWorkspaceCredentialRequest {
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** 工作空间 ID */
  WorkspaceId: string;
  /** 应用 ID */
  AppId?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，应用密钥 */
  AppKey?: string;
  /** 子用户Uin */
  LoginSubAccountUin?: string;
  /** 主用户Uin */
  LoginUin?: string;
  /** Type=CONVERSATION_TYPE_SHARE 时必填，分享码 */
  ShareCode?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，访客ID */
  UserId?: string;
}

declare interface CreateWorkspaceCredentialResponse {
  /** 存储类型 */
  StorageType?: string | null;
  /** 工作空间 ID */
  WorkspaceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAgentRequest {
  /** 应用Id */
  AppId: string;
  /** 待删除AgentId */
  AgentId: string;
  /** 协作模式；0-Claw模式；1-Multi-Agent模式 */
  CollaborationMode?: number;
}

declare interface DeleteAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAppRequest {
  /** app_id */
  AppId: string;
  /** 删除原因(非必填,审批时展示) */
  Reason?: string;
}

declare interface DeleteAppResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAppTriggerRequest {
  /** 应用ID */
  AppId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 触发器ID */
  TriggerId?: string;
  /** 访客ID */
  UserId?: string;
}

declare interface DeleteAppTriggerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCategoryRequest {
  /** 待删除的分类 ID */
  CategoryId: string;
  /** 分类类型（不可为 0，取值：1=文档分类，2=问答分类）枚举项枚举值描述CATEGORY_TYPE_UNKNOWN0CATEGORY_TYPE_DOC1文档分类CATEGORY_TYPE_QA2问答分类 */
  CategoryType: number;
  /** 所属知识库 ID */
  KbId: string;
}

declare interface DeleteCategoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteChannelRequest {
  /** 应用业务ID */
  AppId: string;
  /** 渠道业务ID */
  ChannelId: string;
  /** 渠道场景：0-B端场景，1-C端场景 */
  Scene?: number;
}

declare interface DeleteChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConversationRequest {
  /** 会话 ID */
  ConversationId: string;
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** Type=CONVERSATION_TYPE_API 时必填，应用密钥 */
  AppKey?: string;
  /** 子用户Uin */
  LoginSubAccountUin?: string;
  /** 主用户Uin */
  LoginUin?: string;
  /** Type=CONVERSATION_TYPE_SHARE 时必填，分享码 */
  ShareCode?: string;
}

declare interface DeleteConversationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDocListRequest {
  /** 待删除的文档 ID 列表（数量：1~20） */
  DocIdList: string[];
  /** 所属知识库 ID */
  KbId: string;
}

declare interface DeleteDocListResponse {
  /** 批量删除结果 */
  ResultList?: OperationResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteKBRequest {
  /** 知识库 ID */
  KbId: string;
  /** 工作空间 ID */
  SpaceId?: string;
}

declare interface DeleteKBResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLabelListRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 待删除标签 ID 列表（数量：1~20） */
  LabelIdList: string[];
}

declare interface DeleteLabelListResponse {
  /** 批量删除结果 */
  ResultList?: OperationResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMsgRecordCategoryRequest {
  /** 应用 ID */
  AppId: string;
  /** 待删除的分类业务 ID */
  CategoryId: string;
}

declare interface DeleteMsgRecordCategoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePluginRequest {
  /** 插件id */
  PluginId: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface DeletePluginResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteQAListRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 待删除的 QA ID 列表（数量：1~20） */
  QaIdList: string[];
}

declare interface DeleteQAListResponse {
  /** 批量删除结果 */
  ResultList?: OperationResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSkillRequest {
  /** Skill ID，必填 */
  SkillId: string;
  /** 空间ID，必填 */
  SpaceId: string;
}

declare interface DeleteSkillResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSkillShareRequest {
  /** 申请备注，必填（弹窗"申请备注"） */
  ApplyRemark: string;
  /** 原 Skill ID，必填（前端无须感知 _shared 后缀） */
  SkillId: string;
  /** 空间ID，必填 */
  SpaceId: string;
  /** 原版本 ID，必填（与 CreateSkillShare 上架时传的同一 version_id） */
  VersionId: string;
}

declare interface DeleteSkillShareResponse {
  /** 是否走审批流（false 表示无需审批已直接执行下架） */
  NeedApproval?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSpaceRequest {
  /** 空间id */
  SpaceId?: string;
}

declare interface DeleteSpaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVariableRequest {
  /** app_id */
  AppId: string;
  /** variable_id */
  VariableId: string;
  /** module_type。枚举值: 1:环境参数, 2:应用参数, 3:系统参数, -1:所有参数 */
  ModuleType?: number;
}

declare interface DeleteVariableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountListRequest {
  /** 页码从0开始 */
  PageNumber?: number;
  /** 分页数量取值范围：[1, 100]单位：个最大100 */
  PageSize?: number;
  /** 参数过滤支持SpaceId,NIckName 过滤查询 */
  FilterList?: Filter[];
}

declare interface DescribeAccountListResponse {
  /** 总数 */
  TotalCount?: string;
  /** 员工列表 */
  AccountList?: AccountInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentDetailRequest {
  /** 应用Id */
  AppId?: string;
  /** AgentId */
  AgentId?: string;
}

declare interface DescribeAgentDetailResponse {
  /** Agent信息 */
  Agent?: AgentDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentReleasePreviewListRequest {
  /** 应用Id */
  AppId: string;
  /** 页码 */
  PageNumber: number;
  /** 每页数量在1到200之间 */
  PageSize: number;
  /** 查询关键字, 用于模糊匹配标题 */
  Query?: string;
  /** 过滤条件入参限制：支持 StartTime、EndTime、ActionList、ReleaseStatusList */
  FilterList?: Filter[];
}

declare interface DescribeAgentReleasePreviewListResponse {
  /** 发布预览列表 */
  ReleaseList?: AgentReleasePreview[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAgentSummaryListRequest {
  /** 查询范围；0-单应用查询；1-跨应用查询 */
  Scope?: number;
  /** 应用Id，Scope=0 时为目标应用ID（必填）；scope=1 时无需填写 */
  AppId?: string;
  /** 过滤条件（name: "SearchWord", "SpaceId", "AgentSource", "AppId"） */
  FilterList?: Filter[];
  /** 每页数目 */
  PageSize?: number;
  /** 页码 */
  PageNumber?: number;
}

declare interface DescribeAgentSummaryListResponse {
  /** 总数 */
  TotalCount?: number;
  /** Agent摘要信息 */
  AgentList?: AgentSummary[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppRequest {
  /** 应用ID */
  AppId: string;
  /** 应用域: ADP_DOMAIN_DEV(1)=开发域, ADP_DOMAIN_PROD(2)=发布域。枚举值: 1:开发域, 2:生产域 */
  Domain?: number;
  /** 字段掩码，指定需要返回的字段(Paths为空则返回所有字段)。Paths枚举值：AppConfig(应用配置), SecretInfo(应用密钥信息), ShareUrlInfo(分享链接信息), SpecialStatusInfo(特殊状态信息), SearchResourceStatus(搜索资源状态), SharedKbList(应用引用的共享知识库列表),CorpShareConfig(企业共享配置) */
  FieldMask?: FieldMask;
  /** 特殊状态类型(当FieldMask包含SpecialStatusInfo时必填)。枚举值: 1:回滚状态, 2:首次导入状态 */
  StatusType?: number;
}

declare interface DescribeAppResponse {
  /** 应用详情 */
  App?: App;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppSummaryListRequest {
  /** 空间ID(必填) */
  SpaceId: string;
  /** 过滤条件(多个Filter之间为AND关系,同一Filter的多个Values为OR关系): - AppStatus: 应用状态,枚举值,精确匹配(APP_STATUS_OFFLINE=1/APP_STATUS_RUNNING=2/APP_STATUS_DISABLED=3) - AppMode: 应用模式,枚举值,精确匹配(APP_MODE_STANDARD=1/APP_MODE_AGENT=2/APP_MODE_SINGLE_WORKFLOW=3/APP_MODE_CLAW_AGENT=4) */
  FilterList?: Filter[];
  /** 页码(从0开始) */
  PageNumber?: number;
  /** 每页数量(最大值:100) */
  PageSize?: number;
  /** 模糊查询 */
  Query?: string;
}

declare interface DescribeAppSummaryListResponse {
  /** 应用摘要列表 */
  AppSummaryList?: AppSummary[];
  /** total_count */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppTriggerInstanceRequest {
  /** 应用ID */
  AppId?: string;
  /** 触发器运行实例ID */
  InstanceId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 访客ID */
  UserId?: string;
}

declare interface DescribeAppTriggerInstanceResponse {
  /** 应用触发器实例 */
  Instance?: AppTriggerInstance;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppTriggerRequest {
  /** 应用ID */
  AppId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 应用触发器ID */
  TriggerId?: string;
  /** 访客ID */
  UserId?: string;
}

declare interface DescribeAppTriggerResponse {
  /** 应用触发器信息 */
  Trigger?: AppTrigger;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppTriggerRunLogListRequest {
  /** 应用ID */
  AppId?: string;
  /** 过滤参数 */
  FilterList?: Filter[];
  /** 页码取值范围：[1, 1000000] */
  PageNumber?: number;
  /** 每页数据量取值范围：[1, 100] */
  PageSize?: number;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 应用触发器ID */
  TriggerId?: string;
  /** 访客ID */
  UserId?: string;
}

declare interface DescribeAppTriggerRunLogListResponse {
  /** 日志列表 */
  RunLogList?: AppTriggerRunLog[];
  /** 日志列表数量 */
  TotalCount?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAppTriggerSummaryListRequest {
  /** 应用ID */
  AppId?: string;
  /** 参数过滤列表 */
  FilterList?: Filter[];
  /** 页码取值范围：[1, 1000000] */
  PageNumber?: number;
  /** 每页大小取值范围：[1, 100] */
  PageSize?: number;
  /** 模糊查询字符串 */
  Query?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 访客ID */
  UserId?: string;
}

declare interface DescribeAppTriggerSummaryListResponse {
  /** 应用触发器数量 */
  TotalCount?: string;
  /** 应用触发器列表 */
  TriggerList?: AppTriggerSummary[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditLogListRequest {
  /** 空间id */
  SpaceId?: string;
  /** 每页数量取值范围：[1, 100] */
  Limit?: number;
  /** es查询起始位置对应接口返回SearchAfter */
  SearchAfter?: string[];
  /** 参数过滤支持 Action,BizObject,Content支持SpaceId,AccountUin,AppId(最多100个)支持startTime,endTime(秒时间戳) */
  FilterList?: Filter[];
}

declare interface DescribeAuditLogListResponse {
  /** 操作日志列表 */
  AuditLogList?: AuditLog[];
  /** es查询起始位置用于入参查询下一页 */
  SearchAfter?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAuditLogMetaRequest {
}

declare interface DescribeAuditLogMetaResponse {
  /** 操作类型列表 */
  Actions?: AuditLogMetaField[];
  /** 操作对象列表 */
  BizObjects?: AuditLogMetaField[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCategoryListRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 过滤条件（多个 Filter 之间为 AND 关系，同一 Filter 的多个 Values 为 OR 关系）：CategoryType-分类类型,枚举值,精确匹配(CATEGORY_TYPE_DOC=1/CATEGORY_TYPE_QA=2); ParentCategoryId-父分类ID,精确匹配 */
  FilterList?: Filter[];
  /** 分页页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，默认 10，最大 100 */
  PageSize?: number;
  /** 关键词搜索 */
  Query?: string;
  /** 开关配置 */
  SummaryListSwitch?: SummaryListSwitch;
}

declare interface DescribeCategoryListResponse {
  /** 分类列表 */
  CategoryList?: KBCategory[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelListRequest {
  /** 应用业务ID */
  AppId: string;
  /** 渠道场景：0-B端场景，1-C端场景 */
  Scene?: number;
  /** 过滤条件（可选，支持ChannelType/ChannelStatus等维度） */
  FilterList?: Filter[];
  /** 页码（从1开始） */
  PageNumber?: number;
  /** 每页数量（最大100） */
  PageSize?: number;
}

declare interface DescribeChannelListResponse {
  /** 渠道列表 */
  ChannelList?: Channel[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChannelRequest {
  /** 应用业务ID */
  AppId: string;
  /** 渠道业务ID */
  ChannelId: string;
  /** 渠道场景：0-B端场景，1-C端场景 */
  Scene?: number;
}

declare interface DescribeChannelResponse {
  /** 渠道信息（含spec） */
  Channel?: Channel;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConcurrencyLimitDetailListRequest {
  /** 查询时间范围（Unix 秒） */
  TimeRange: TimeRange;
  /** 视图范围：企业视图 / 空间视图/ 应用视图 */
  ViewScope: ViewScope;
  /** 扩展过滤。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：concurrency_type（qpm_tpm/dedicated，默认 qpm_tpm）、model_name（必填）、space_id、app_id/resource_id/source_id（应用ID，多选）、metric_source_type（METRIC_SOURCE_TYPE_* 枚举名或整数） */
  FilterList?: Filter[];
  /** 页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，最大 100 */
  PageSize?: number;
}

declare interface DescribeConcurrencyLimitDetailListResponse {
  /** 并发超限明细列表 */
  ConcurrencyLimitDetailList?: ConcurrencyLimitDetail[];
  /** 总记录数，用于前端分页 */
  TotalCount?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConflictQARequest {
  /** 冲突组 ID */
  ConflictGroupId: string;
  /** 所属知识库 ID */
  KbId: string;
}

declare interface DescribeConflictQAResponse {
  /** 一个冲突组的详情列表 */
  ConflictQaList?: ConflictQA[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConflictQASummaryListRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 通用过滤（支持按 status 筛选 PENDING/RESOLVED） */
  FilterList?: Filter[];
  /** 分页页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，默认 10，最大 100 */
  PageSize?: number;
}

declare interface DescribeConflictQASummaryListResponse {
  /** 冲突问列表 */
  ConflictQaList?: ConflictQASummary[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConsumptionDetailListRequest {
  /** 查询时间范围（Unix 秒） */
  TimeRange: TimeRange;
  /** 视图范围：企业视图 / 空间视图 */
  ViewScope: ViewScope;
  /** 扩展过滤。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：metric_source_type（METRIC_SOURCE_TYPE_* 或整数）、source_ids（多选来源ID）、resource_id/source_id（单选来源ID，source_ids 未传时生效）、space_id、user_id */
  FilterList?: Filter[];
  /** 页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，最大 100 */
  PageSize?: number;
}

declare interface DescribeConsumptionDetailListResponse {
  /** 资源消耗明细列表 */
  ConsumptionDetailList?: ConsumptionDetail[];
  /** 总记录数，用于前端分页 */
  TotalCount?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConversationListRequest {
  /** 会话类型，传 CONVERSATION_TYPE_UNSPECIFIED 表示全部 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** 应用 ID */
  AppId?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，应用密钥 */
  AppKey?: string;
  /** 关键词 */
  Keyword?: string;
  /** 限制数目（整型），配合Offset使用 */
  Limit?: number;
  /** 子账户Uin */
  LoginSubAccountUin?: string;
  /** 主账户Uin */
  LoginUin?: string;
  /** 偏移量（整型），配合Limit使用，从0开始 */
  Offset?: number;
  /** Type=CONVERSATION_TYPE_SHARE 时必填，分享码 */
  ShareCode?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，访客ID */
  UserId?: string;
  /** 用户端 AgentId，当需要查询基于用户端 AgentId 创建的会话时使用 */
  AgentId?: string;
}

declare interface DescribeConversationListResponse {
  /** 会话列表 */
  ConversationList?: Conversation[];
  /** 会话列表 */
  Conversations?: Conversation[];
  /** 总数 */
  TotalCount?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConversationMessageListRequest {
  /** 会话 ID */
  ConversationId: string;
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** Type=CONVERSATION_TYPE_API 时必填，应用密钥 */
  AppKey?: string;
  /** 返回记录总数量，默认 10，最大 50。向前或向后查询时，不包含record_id指定记录的消息，查询方向中心向前后查询时，包含record_id指定的记录消息，返回记录数量为前后各limit / 2条，向上取整 */
  Limit?: number;
  /** 子用户Uin */
  LoginSubAccountUin?: string;
  /** 主用户Uin */
  LoginUin?: string;
  /** 查询锚点记录 ID */
  RecordId?: string;
  /** 相对于 record_id 的查询方向 枚举值: 0-RECORD_QUERY_DIRECTION_UNSPECIFIED(未指定，兼容旧逻辑，默认向前查询), 1-RECORD_QUERY_DIRECTION_BACKWARD(从 record_id 向前查询更早的消息), 2-RECORD_QUERY_DIRECTION_FORWARD(从 record_id 向后查询更新的消息), 3-RECORD_QUERY_DIRECTION_BIDIRECTIONAL(以 record_id 为中心，同时向前后查询) */
  RecordQueryDirection?: number;
  /** Type=CONVERSATION_TYPE_SHARE 时必填，分享码 */
  ShareCode?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，访客ID */
  UserId?: string;
}

declare interface DescribeConversationMessageListResponse {
  /** 第一个记录 ID */
  FirstRecordId?: string;
  /** 更新消息方向是否还有更多 */
  HasMoreAfter?: boolean;
  /** 更早消息方向是否还有更多 */
  HasMoreBefore?: boolean;
  /** 最后一个记录 ID */
  LastRecordId?: string;
  /** 消息列表 */
  MessageList?: ConversationMessage[];
  /** 消息列表 */
  Messages?: ConversationMessage[];
  /** 单次对话记录统计列表，与 message_list 通过 record_id / related_record_id 关联 */
  RecordSummaryList?: ConversationRecordSummary[] | null;
  /** 最近一次重置信息 */
  ResetInfo?: ConversationResetInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConversationRequest {
  /** 会话 ID */
  ConversationId: string;
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** Type=CONVERSATION_TYPE_API 时必填，应用密钥 */
  AppKey?: string;
  /** 主用户Uin */
  LoginSubAccountUin?: string;
  /** 子用户Uin */
  LoginUin?: string;
  /** Type=CONVERSATION_TYPE_SHARE 时必填，分享码 */
  ShareCode?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，访客ID */
  UserId?: string;
}

declare interface DescribeConversationResponse {
  /** 应用 ID */
  AppId?: string;
  /** 会话 ID */
  ConversationId?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type?: number;
  /** 更新时间 */
  UpdateTime?: string;
  /** 工作空间 */
  Workspace?: ConversationWorkspace | null;
  /** 会话标题 */
  Title?: string;
  /** 会话使用的用户端 AgentId */
  AgentId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDocRequest {
  /** 文档 ID */
  DocId: string;
  /** 所属知识库 ID */
  KbId: string;
  /** 字段掩码：当前支持的 Path：DocLink.CosUrl，其他未列举的字段默认都返回 */
  ReadMask?: FieldMask;
}

declare interface DescribeDocResponse {
  /** 文档链接（外部链接 + COS 链接） */
  DocLink?: DocLink | null;
  /** 解析配置（分割规则、内容过滤等） */
  ParseConfig?: DocParseConfig | null;
  /** 文档基础信息 */
  Summary?: DocSummary | null;
  /** 开关配置 */
  Switch?: DocSwitch | null;
  /** 更新周期配置 */
  UpdatePeriod?: DocUpdatePeriod | null;
  /** 用户访问配置 */
  UserAccessConfig?: UserAccessConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDocSummaryListRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 过滤条件（多个 Filter 之间为 AND 关系，同一 Filter 的多个 Values 为 OR 关系）：Status-文档状态,枚举值,精确匹配; CategoryId-分类ID,精确匹配; SourceType-文档来源类型,枚举值,精确匹配; EffectiveDomain-生效作用域,精确匹配; CreateTime-创建时间,Unix秒,BETWEEN 传 [起始秒,结束秒]; UpdateTime-更新时间,Unix秒,BETWEEN 传 [起始秒,结束秒] */
  FilterList?: Filter[];
  /** 分页页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，默认 10，最大 100 */
  PageSize?: number;
  /** 查询条件（关键词 + 查询范围） */
  Query?: DocQuery;
  /** 开关配置 */
  SummaryListSwitch?: SummaryListSwitch;
}

declare interface DescribeDocSummaryListResponse {
  /** 文档列表 */
  DocList?: DocSummary[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKBRequest {
  /** 知识库 ID */
  KbId: string;
  /** 工作空间 ID */
  SpaceId?: string;
}

declare interface DescribeKBResponse {
  /** 关联的应用 ID 列表 */
  AppIdList?: string[];
  /** 容量信息 */
  CapacityInfo?: KBCapacity | null;
  /** ES 配置 */
  EsConfig?: ESConfig | null;
  /** 模型配置 */
  ModelConfig?: KBModelConfig | null;
  /** 所有者信息 */
  Owner?: Operator | null;
  /** 知识库摘要信息 */
  Summary?: KBSummary | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKBSummaryListRequest {
  /** 工作空间 ID */
  SpaceId: string;
  /** 通用过滤 */
  FilterList?: Filter[];
  /** 分页页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，默认 10，最大 100 */
  PageSize?: number;
  /** 关键词 */
  Query?: string;
}

declare interface DescribeKBSummaryListResponse {
  /** 知识库列表 */
  KbList?: KBSummary[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLabelRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 标签 ID */
  LabelId: string;
  /** 通用过滤 */
  FilterList?: Filter[];
  /** 滚动加载游标的标准词 ID（首次请求传 0，后续传上一页最后一条的 TermId） */
  LastTermId?: string;
  /** 每次加载数量，默认 10，最大 100 */
  Limit?: number;
  /** 关键词搜索 */
  Query?: string;
}

declare interface DescribeLabelResponse {
  /** 基础信息 */
  Summary?: LabelSummary | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLabelSummaryListRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 通用过滤 */
  FilterList?: Filter[];
  /** 分页页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，默认 10，最大 100 */
  PageSize?: number;
  /** 关键词搜索 */
  Query?: string;
  /** 开关配置 */
  SummaryListSwitch?: SummaryListSwitch;
}

declare interface DescribeLabelSummaryListResponse {
  /** 标签列表 */
  LabelList?: LabelSummary[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLatestReleaseRequest {
  /** app_id */
  AppId: string;
}

declare interface DescribeLatestReleaseResponse {
  /** 是否有发布变更 */
  IsChanged?: boolean;
  /** 发布信息 */
  ReleaseSummary?: ReleaseSummary;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMetricOverviewListRequest {
  /** 看板域，必填，决定返回哪个域的 KPI 数据枚举项枚举值描述RESOURCE_TYPE_UNSPECIFIED0RESOURCE_TYPE_MODEL1模型用量RESOURCE_TYPE_PLUGIN2插件用量RESOURCE_TYPE_PLATFORM3平台功能用量RESOURCE_TYPE_MODEL_CONCURRENCY4模型并发超限RESOURCE_TYPE_KB_CAPACITY5知识库容量RESOURCE_TYPE_USAGE_SUMMARY6用量汇总RESOURCE_TYPE_RESOURCE_CONSUME7资源消耗（计费明细） */
  ResourceType: number;
  /** 查询时间范围（Unix 秒） */
  TimeRange: TimeRange;
  /** 视图范围：企业视图 / 空间视图 */
  ViewScope: ViewScope;
  /** 扩展过滤（resource_type=MODEL）。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：model_name（模型名）、user_id（用户ID）、space_id（空间ID）、resource_id/source_id（来源ID）、metric_source_type（METRIC_SOURCE_TYPE_* 枚举名或整数） */
  FilterList?: Filter[];
}

declare interface DescribeMetricOverviewListResponse {
  /** 所有域 Overview 统一出参：KPI 卡片列表，key 字符串标识指标，客户端按 resource_type 解析；key 白名单参考 platform.common.v2.MetricOverview 注释 */
  MetricList?: MetricOverview[];
  /** 总记录数，等于 MetricList 长度，仅为列表接口一致性预留 */
  TotalCount?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModelListRequest {
  /** 模型场景。0-不区分场景, 1-标准生成, 2-标准思考, 3-Agent思考, 4-多模态理解, 5-多模态问答, 6-改写, 7-长期记忆, 8-自然语言转SQL, 9-AI优化, 10-实时文件解析, 11-文件解析, 12-GraphRAG, 13-OpenClaw, 14-多模态Embedding, 15-Rerank, 16-文本Embedding, 17-Widget, 18-Claw模式, 19-工作流代码生成, 20-工作流大模型节点, 21-工作流节点专用向量化, 22-工作流参数提取, 23-工作流大模型知识问答, 24-工作流标签提取, 25-工作流意图识别, 26-工作流选项卡, 27-工作流逻辑判断, 28-文档生成问答, 29-知识库Schema枚举值：0： 不区分场景1： 标准生成2： 标准思考3： Agent思考4： 多模态理解5： 多模态问答6： 改写7： 长期记忆8： 自然语言转SQL9： AI优化10： 实时文件解析11： 文件解析12： GraphRAG13： OpenClaw14： 多模态Embedding15： Rerank16： 文本Embedding17： Widget18： Claw模式19： 工作流代码生成20： 工作流大模型节点21： 工作流节点专用向量化22： 工作流参数提取23： 工作流大模型知识问答24： 工作流标签提取25： 工作流意图识别26： 工作流选项卡27： 工作流逻辑判断28： 文档生成问答29： 知识库Schema */
  ModelScene: number;
  /** 空间ID */
  SpaceId?: string;
  /** 关键词模糊搜索 */
  Query?: string;
  /** 页码。从0开始 */
  PageNumber?: number;
  /** 每页数量，默认20，最大100 */
  PageSize?: number;
  /** 过滤条件(多个 Filter 之间为 AND, 同一 Filter 多 Values 为 OR)DeveloperName： 模型作者名称ProviderName： 模型提供商名称ProviderType：模型提供商类型 */
  FilterList?: Filter[];
}

declare interface DescribeModelListResponse {
  /** 模型列表 */
  ModelList?: Model[];
  /** 模型总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMsgRecordCategoryListRequest {
  /** 应用 ID */
  AppId: string;
}

declare interface DescribeMsgRecordCategoryListResponse {
  /** 消息记录分类树列表 */
  CategoryList?: MsgRecordCategory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMsgRecordListRequest {
  /** 应用 ID */
  AppId: string;
  /** ChannelType : 0-表示全部 2-体验页面（腾讯云）3-调试页面（腾讯云）4-体验页面（手机号）5-对话端API接入 6-应用评测 7-调试API' 10000-微信服务号 10001-微信订阅号 10002-企微应用 10004-微信客服 10005-微信小程序 10006-腾讯元器 10007-应用宝 10009-企微智能机器人 10014-企微智能机器人 10011-LINE 10012-Telegram 10013-钉钉机器人 10016-飞书机器人 30000-定时任务 30001-触发器 FeedbackType : 反馈类型，-1-表示全部 0-未评价 1-点赞 2-点踩 QueryType : 检索类型（按平台约定取值）, SessionId-sessionID Question-问题 Answer-回复 Intent-意图 User-用户 Query : 对应QueryType输入的过滤条件 CategoryId : 分类ID ReplyMethod : 回复类型 0-全部回复类型 1-拒答问题回复 2-问答直接回复 3-审核失败回复 4-知识润色回复 6-工作流回复 8-图片理解回复 9-搜索引擎回复 10-大模型直接回复 11-兜底回复 StartTime : 开始时间，秒级时间戳 EndTime: 结束时间，秒级时间戳 Cursor : 游标信息，上一页取响应 PrevCursor，下一页取响应 NextCursor Direction : 方向，next 下一页，prev 上一页CallResult : 调用结果：0 全部 / 1 成功 / 2 失败 / 3 用户取消 <FailReason : 失败原因 0-全部 1-审核失败 2-达到QPM上限 3-达到TPM上限 4-达到并发上限 5-系统异常 Intent : 意图 */
  FilterList?: Filter[];
  /** 页码，从 0 开始；不传时按 0 处理 */
  PageNumber?: number;
  /** 每页数量，最大 100；不传或传 0 时按默认分页大小处理 */
  PageSize?: number;
  /** 排序条件，只支持按 CreateTime 排序 */
  Sort?: Sort;
}

declare interface DescribeMsgRecordListResponse {
  /** 是否有更多页 */
  HasMore?: boolean;
  /** 消息记录列表 */
  MsgRecordList?: MsgRecord[];
  /** 下一页游标信息 */
  NextCursor?: string;
  /** 上一页游标信息 */
  PrevCursor?: string;
  /** 符合条件的总记录数，用于前端分页显示 */
  TotalCount?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePluginRequest {
  /** 插件id */
  PluginId: string;
  /** 当前空间id */
  SpaceId: string;
  /** 获取指定字段 */
  FieldMask?: FieldMask;
  /** 插件展示场景。不传或取 0 时不限定场景。枚举值：0：不限定场景1：Agent 模式2：工作流3：智能工作台 */
  Module?: number;
}

declare interface DescribePluginResponse {
  /** 插件详情 */
  Plugin?: Plugin;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePluginSummaryListRequest {
  /** 空间ID，查询空间内的插件列表时使用 */
  SpaceId: string;
  /** 过滤条件列表，支持 PluginKind、CategoryKey、PluginSource、PluginId、PluginClass、BillingType、AuthType、IsShared、IsCreatedByMe */
  FilterList?: Filter[];
  /** 是否只返回已收藏插件。取 true 时，仅返回当前用户已收藏的插件；取 false 或不传时不按收藏状态过滤。 */
  IsFavoriteOnly?: boolean;
  /** 插件展示场景。不传或取 0 时不限定场景。枚举值：0：不限定场景1：Agent 模式2：工作流3：智能工作台 */
  Module?: number;
  /** 页码 从0开始 */
  PageNumber?: number;
  /** 每页大小 */
  PageSize?: number;
  /** 查询内容 模糊匹配：插件名称/插件描述/工具名称/工具描述 */
  Query?: string;
  /** 排序方式。枚举值：0：未指定，默认排序1：按相关性排序2：按更新时间排序3：默认排序4：按热度排序 */
  SortType?: number;
  /** 筛选当前空间/企业共享插件取值范围：[0, 2] */
  PluginSpaceRelation?: number;
}

declare interface DescribePluginSummaryListResponse {
  /** plugin_list */
  PluginList?: PluginSummary[];
  /** total_count */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQARequest {
  /** 所属知识库 ID */
  KbId: string;
  /** QA ID */
  QaId: string;
}

declare interface DescribeQAResponse {
  /** 分片高亮信息 */
  HighlightList?: QASegmentHighlight[];
  /** 分片内容 */
  PageContent?: string;
  /** 问题描述 */
  QuestionDescription?: string;
  /** 相似问列表 */
  SimilarQuestionList?: SimilarQuestion[];
  /** 基础信息 */
  Summary?: QASummary | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQASummaryListRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 过滤条件（多个 Filter 之间为 AND 关系，同一 Filter 的多个 Values 为 OR 关系）：Status-QA状态,枚举值,精确匹配; CategoryId-分类ID,精确匹配; SourceType-QA来源类型,枚举值,精确匹配; EffectiveDomain-生效作用域,精确匹配; DocId-关联文档ID,精确匹配; CreateTime-创建时间,Unix秒,BETWEEN 传 [起始秒,结束秒]; UpdateTime-更新时间,Unix秒,BETWEEN 传 [起始秒,结束秒] */
  FilterList?: Filter[];
  /** 分页页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，默认 10，最大 100 */
  PageSize?: number;
  /** 查询条件（关键词 + 查询范围） */
  Query?: QAQuery;
  /** 开关配置 */
  SummaryListSwitch?: SummaryListSwitch;
}

declare interface DescribeQASummaryListResponse {
  /** 未采纳数量 */
  NotAcceptedCount?: number;
  /** 待校验数量 */
  PendingVerifyCount?: number;
  /** QA 列表 */
  QaList?: QASummary[];
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReleaseListRequest {
  /** 应用ID */
  AppId: string;
  /** 页码(从0开始) */
  PageNumber?: number;
  /** 每页数量(最大值:100) */
  PageSize?: number;
}

declare interface DescribeReleaseListResponse {
  /** release_list */
  ReleaseList?: ReleaseRecord[];
  /** total_count */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReleaseSummaryRequest {
  /** app_id */
  AppId: string;
  /** release_id */
  ReleaseId: string;
}

declare interface DescribeReleaseSummaryResponse {
  /** 发布信息 */
  ReleaseSummary?: ReleaseSummary;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceSummaryRequest {
}

declare interface DescribeResourceSummaryResponse {
  /** 计费套餐包用量信息 */
  ResourcePackage?: ResourcePackageInfo;
  /** 计费增值包用量信息 */
  AddOnPackage?: AddOnPackageInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSkillCategoryListRequest {
}

declare interface DescribeSkillCategoryListResponse {
  /** Skill 分类列表 */
  CategoryList?: SkillCategory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSkillDetailRequest {
  /** skillID */
  SkillId: string;
  /** 空间ID */
  SpaceId: string;
  /** 版本过滤条件(多个Filter之间为AND关系,同一Filter的多个Values为OR关系): - Perspective: 视角枚举,字符串单值,Values 长度必须为 1,多值视为非法;仅作用于详情返回的 version_list 裁剪,不决定接口本身可见性;不传默认 USER (USER=使用者视角,version_list 仅返回已上线版本 / EDITOR=编辑者视角,version_list 返回全部存活版本 / ALL=全量视角,同 EDITOR) */
  VersionFilterList?: Filter[];
}

declare interface DescribeSkillDetailResponse {
  /** skill详情 */
  SkillDetail?: SkillDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSkillReferenceListRequest {
  /** Skill ID，必填 */
  SkillId: string;
  /** 空间ID，必填 */
  SpaceId: string;
}

declare interface DescribeSkillReferenceListResponse {
  /** 按 SkillRefType 分组的引用汇总：某类型 total_count = 0 时不入组（不返回空占位） 本期同时落 OPENCLAW / AGENT / CORP_ASSISTANT 三路 */
  ReferenceList?: SkillReferenceGroup[];
  /** 当前用户是否允许强制删除有引用的Skill */
  AllowForceModify?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSkillSummaryListRequest {
  /** 空间ID，必填 */
  SpaceId: string;
  /** 仅查询当前用户收藏的 Skill */
  FavoriteOnly?: boolean;
  /** 过滤条件(多个Filter之间为AND关系,同一Filter的多个Values为OR关系): - SkillIdList: Skill ID列表,字符串数组,精确匹配 - ProviderType: Skill 提供方类型,枚举值数组,精确匹配 (SKILL_PROVIDER_TYPE_OFFICIAL=1/SKILL_PROVIDER_TYPE_THIRD_PARTY=2/SKILL_PROVIDER_TYPE_CUSTOM=3/SKILL_PROVIDER_TYPE_CUSTOM_SHARED=4) - CategoryKey: 分类标识,字符串数组,精确匹配 - AnalysisStatus: 安全检测状态,枚举值数组,精确匹配 (SKILL_ANALYSIS_PENDING=0/SKILL_ANALYSIS_RUNNING=1/SKILL_ANALYSIS_AVAILABLE=2/SKILL_ANALYSIS_UNAVAILABLE=3/SKILL_ANALYSIS_FAILED=4) - RiskLevel: 风险等级,枚举值数组,精确匹配 (SKILL_RISK_NONE=0/SKILL_RISK_LOW=1/SKILL_RISK_MEDIUM=2/SKILL_RISK_HIGH=3)- SkillStatus: Skill 维度发布状态,枚举值数组,精确匹配,多值之间 OR;仅在 Perspective=EDITOR/ALL 时有实际意义(SKILL_STATUS_INITIALIZED=0/SKILL_STATUS_AUDITING=1/SKILL_STATUS_PENDING_RELEASE=2/SKILL_STATUS_RELEASED=3) - ShareStatus: 共享状态,枚举值数组,精确匹配,仅在ProviderType包含SKILL_PROVIDER_TYPE_CUSTOM/SKILL_PROVIDER_TYPE_CUSTOM_SHARED时生效 (SHARE_STATUS_UNSHARED=0/SHARE_STATUS_SHARED=1/SHARE_STATUS_APPROVING=2) - Perspective: 视角枚举,字符串单值,Values 长度必须为 1,多值视为非法;仅在 ProviderType=SKILL_PROVIDER_TYPE_CUSTOM 时生效;不传默认 USER (USER=使用者视角,仅返回仅有使用权限的 Skill / EDITOR=编辑者视角,仅返回有编辑权限的 Skill / ALL=全量视角,返回有任一权限位的 Skill) - Creator: 创建者过滤,字符串单值,Values 长度必须为 1,多值视为非法;仅在 ProviderType=SKILL_PROVIDER_TYPE_CUSTOM 时生效 当前仅支持占位符 "$self",表示仅返回当前调用者创建的 Skill 后续如需扩展为指定身份,再在此处追加约定 */
  FilterList?: Filter[];
  /** 页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，最大值 100 */
  PageSize?: number;
  /** 名称/展示名称模糊搜索 */
  Query?: string;
}

declare interface DescribeSkillSummaryListResponse {
  /** Skill 摘要列表 */
  SkillSummaryList?: SkillSummary[];
  /** 总数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpaceListRequest {
  /** 支持空间名称模糊搜索 */
  Query?: string;
}

declare interface DescribeSpaceListResponse {
  /** 总数 */
  TotalCount?: string;
  /** 空间列表 */
  SpaceList?: Space[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSystemVariableListRequest {
  /** 应用ID */
  AppId: string;
}

declare interface DescribeSystemVariableListResponse {
  /** system_variable_list */
  SystemVariableList?: SystemVariable[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsageDetailListRequest {
  /** 资源类型，限定为 RESOURCE_TYPE_MODEL / RESOURCE_TYPE_PLUGIN枚举项枚举值描述RESOURCE_TYPE_UNSPECIFIED0RESOURCE_TYPE_MODEL1模型用量RESOURCE_TYPE_PLUGIN2插件用量RESOURCE_TYPE_PLATFORM3平台功能用量RESOURCE_TYPE_MODEL_CONCURRENCY4模型并发超限RESOURCE_TYPE_KB_CAPACITY5知识库容量RESOURCE_TYPE_USAGE_SUMMARY6用量汇总RESOURCE_TYPE_RESOURCE_CONSUME7资源消耗（计费明细） */
  ResourceType: number;
  /** 查询时间范围（Unix 秒） */
  TimeRange: TimeRange;
  /** 视图范围：企业视图 / 空间视图 / 应用视图 */
  ViewScope: ViewScope;
  /** 扩展过滤（resource_type=MODEL）。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：model_name、user_id、space_id、resource_id/source_id、metric_source_type（METRIC_SOURCE_TYPE_* 或整数）、call_type（调用类型） */
  FilterList?: Filter[];
  /** 页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，最大 100 */
  PageSize?: number;
}

declare interface DescribeUsageDetailListResponse {
  /** 总记录数，用于前端分页 */
  TotalCount?: string;
  /** 资源调用时序明细列表 */
  UsageDetailList?: UsageDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsageSummaryListRequest {
  /** 资源类型，限定为 MODEL / PLUGIN / PLATFORM枚举项枚举值描述RESOURCE_TYPE_UNSPECIFIED0RESOURCE_TYPE_MODEL1模型用量RESOURCE_TYPE_PLUGIN2插件用量RESOURCE_TYPE_PLATFORM3平台功能用量RESOURCE_TYPE_MODEL_CONCURRENCY4模型并发超限RESOURCE_TYPE_KB_CAPACITY5知识库容量RESOURCE_TYPE_USAGE_SUMMARY6用量汇总RESOURCE_TYPE_RESOURCE_CONSUME7资源消耗（计费明细） */
  ResourceType: number;
  /** 查询时间范围（Unix 秒） */
  TimeRange: TimeRange;
  /** 视图范围：企业视图 / 空间视图 / 应用视图 */
  ViewScope: ViewScope;
  /** 扩展过滤（resource_type=MODEL）。Filter 组合规则：多项 AND，同项 value_list OR。支持 Name：model_name（模型名）、user_id（用户ID）、space_id（空间ID）、resource_id/source_id（来源ID）、metric_source_type（METRIC_SOURCE_TYPE_* 枚举名或整数） */
  FilterList?: Filter[];
  /** 页码，从 0 开始 */
  PageNumber?: number;
  /** 每页数量，最大 100 */
  PageSize?: number;
}

declare interface DescribeUsageSummaryListResponse {
  /** 总记录数，用于前端分页 */
  TotalCount?: string;
  /** 资源用量聚合明细列表 */
  UsageSummaryList?: UsageSummary[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVariableListRequest {
  /** 应用ID */
  AppId: string;
  /** 过滤条件(支持: VariableIdList-变量ID列表, VariableType-变量类型) */
  FilterList?: Filter[];
  /** 模块类型。枚举值: 1:环境参数, 2:应用参数, 3:系统参数, -1:所有参数 */
  ModuleType?: number;
  /** 是否需要内部变量 */
  NeedInternalVariable?: boolean;
  /** 页码(从0开始) */
  PageNumber?: number;
  /** 每页数量(最大值:100) */
  PageSize?: number;
  /** 查询关键词 */
  Query?: string;
}

declare interface DescribeVariableListResponse {
  /** total_count */
  TotalCount?: number;
  /** variable_list */
  VariableList?: Variable[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVariableRequest {
  /** app_id */
  AppId: string;
  /** variable_id */
  VariableId: string;
  /** module_type。枚举值: 1:环境参数, 2:应用参数, 3:系统参数, -1:所有参数 */
  ModuleType?: number;
}

declare interface DescribeVariableResponse {
  /** 变量信息 */
  Variable?: Variable;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportQARequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 过滤条件（多个 Filter 之间为 AND 关系，同一 Filter 的多个 Values 为 OR 关系）：Status-QA状态,枚举值,精确匹配; CategoryId-分类ID,精确匹配; SourceType-QA来源类型,枚举值,精确匹配; EffectiveDomain-生效作用域,精确匹配; DocId-关联文档ID,精确匹配; CreateTime-创建时间,Unix秒,BETWEEN 传 [起始秒,结束秒]; UpdateTime-更新时间,Unix秒,BETWEEN 传 [起始秒,结束秒]; QaId-QA ID列表,精确匹配,支持多值 */
  FilterList?: Filter[];
  /** 查询条件（关键词 + 查询范围），与 DescribeQASummaryList 保持一致 */
  Query?: QAQuery;
}

declare interface ExportQAResponse {
  /** 导出任务 ID（通过 DescribeAsyncTaskStatus 查询完成状态） */
  ExportTaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FavoritePluginRequest {
  /** 插件id */
  PluginId: string;
  /** 当前空间id */
  SpaceId: string;
}

declare interface FavoritePluginResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface FavoriteSkillRequest {
  /** SkillId */
  SkillId: string;
  /** 空间ID */
  SpaceId: string;
}

declare interface FavoriteSkillResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportDocListRequest {
  /** 待导入文档列表（数量：1~20） */
  DocList: DocImportSpec[];
  /** 知识库 ID */
  KbId: string;
}

declare interface ImportDocListResponse {
  /** 批量导入结果 */
  ResultList?: OperationResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAgentRequest {
  /** 应用Id */
  AppId?: string;
  /** Agent Id */
  AgentId?: string;
  /** 修改后的Agent的信息 */
  Agent?: AgentSpec;
  /** 需要更新的字段路径，如 ["Profile.Name", "Profile.IconUrl", "Instructions", "Model", "ToolList", "PluginList", "SkillList", "AdvancedConfig"] */
  UpdateMask?: FieldMask;
}

declare interface ModifyAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAppRequest {
  /** 应用ID */
  AppId: string;
  /** 应用模式。枚举值: 1:标准模式, 2:Agent模式, 3:单工作流模式, 4:ClawAgent模式 */
  AppMode?: number;
  /** 应用头像 */
  Avatar?: string;
  /** 应用配置 */
  Config?: AppConfig;
  /** 应用描述 */
  Description?: string;
  /** 应用名称 */
  Name?: string;
  /** 引用的共享知识库ID列表(全量覆盖) */
  SharedKbIdList?: string[];
  /** 字段掩码，指定需要更新的字段(Paths为空则不更新任何字段)。Paths枚举值：【顶层】Name, Avatar, Description, AppMode, SharedKbIdList【Greeting】Config.Greeting, Config.Greeting.Greeting, Config.Greeting.OpeningQuestionList【Model】Config.Model, Config.Model.ThinkModel, Config.Model.GenerateModel, Config.Model.AiOptimizeModel, Config.Model.FileParseModel, Config.Model.PromptRewriteModel, Config.Model.MultiModalQaModel, Config.Model.MultiModalUnderstandingModel【WebSearch】Config.WebSearch【Memory】Config.Memory, Config.Memory.Enabled, Config.Memory.LongMemoryDay, Config.Memory.Model, Config.Memory.PromptMode, Config.Memory.PromptContent【Mode】Config.Mode, Config.Mode.MultiAgentConfig, Config.Mode.SingleWorkflowConfig, Config.Mode.ClawAgentConfig【Mode.ClawAgentConfig】Config.Mode.ClawAgentConfig.LongMemoryConfig, Config.Mode.ClawAgentConfig.AgentTeamConfig【Experience】Config.Experience, Config.Experience.Conversation, Config.Experience.Role, Config.Experience.Advanced【Experience.Conversation】Config.Experience.Conversation.AiCall, Config.Experience.Conversation.BackgroundImage, Config.Experience.Conversation.Method, Config.Experience.Conversation.FallbackReply, Config.Experience.Conversation.Recommended, Config.Experience.Conversation.InputBoxConfig, Config.Experience.Conversation.WebSearch【Experience.Conversation.AiCall】Config.Experience.Conversation.AiCall.VoiceInteract, Config.Experience.Conversation.AiCall.VoiceCall, Config.Experience.Conversation.AiCall.DigitalHuman【Experience.Advanced】Config.Experience.Advanced.ContextRewrite, Config.Experience.Advanced.ImageTextRetrieval, Config.Experience.Advanced.IntentAchievement, Config.Experience.Advanced.ReplyFlexibility, Config.Experience.Advanced.DialogCustomConfig */
  UpdateMask?: FieldMask;
}

declare interface ModifyAppResponse {
  /** app_id */
  AppId?: string;
  /** 更新时间 (Unix时间戳,秒级) */
  UpdateTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAppTriggerRequest {
  /** 应用ID */
  AppId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 触发器信息 */
  Trigger?: AppTrigger;
  /** 触发器唯一ID */
  TriggerId?: string;
  /** 修改字段 */
  UpdateMask?: FieldMask;
  /** 访客ID */
  UserId?: string;
}

declare interface ModifyAppTriggerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCategoryRequest {
  /** 待修改的分类 ID（必须大于 0） */
  CategoryId: string;
  /** 分类类型（不可为 0，取值：1=文档分类，2=问答分类）枚举项枚举值描述CATEGORY_TYPE_UNKNOWN0CATEGORY_TYPE_DOC1文档分类CATEGORY_TYPE_QA2问答分类 */
  CategoryType: number;
  /** 修改字段内容（不可为空，与 update_mask 配合使用） */
  Fields: CategoryModifyFields;
  /** 所属知识库 ID */
  KbId: string;
  /** 字段掩码：指定要修改的字段（支持的 Paths：Name） */
  UpdateMask: FieldMask;
}

declare interface ModifyCategoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyChannelRequest {
  /** 应用业务ID */
  AppId: string;
  /** 渠道业务ID */
  ChannelId: string;
  /** 渠道场景：0-B端场景，1-C端场景 */
  Scene?: number;
  /** 待更新的渠道规格 */
  Spec?: ChannelSpec;
  /** 更新字段掩码,B端(Scene=0)：支持：【spec.description" ,"spec.wecom_robot.callback.wecom_robot_id"】C端(Scene=1)：支持：【"spec.description" , "spec.wecom_robot.websocket.bot_id" ,"spec.wecom_robot.websocket.bot_secret"】 */
  UpdateMask?: FieldMask;
}

declare interface ModifyChannelResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConflictQARequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 冲突组 ID（全局忽略时可不传） */
  ConflictGroupId?: string;
  /** 是否全局忽略（忽略当前KB下所有待处理冲突问） */
  IsIgnoreAll?: boolean;
  /** 决策涉及的 QA ID 列表（KEEP 与 DELETE 必填） */
  QaIdList?: string[];
  /** 冲突解决策略：1=保留，2=忽略，3=删除（全局忽略时可不传）枚举项枚举值描述CONFLICT_RESOLUTION_UNKNOWN0CONFLICT_RESOLUTION_KEEP1保留CONFLICT_RESOLUTION_IGNORE2忽略CONFLICT_RESOLUTION_DELETE3删除CONFLICT_RESOLUTION_MERGE4合并CONFLICT_RESOLUTION_REPLACE5替换CONFLICT_RESOLUTION_RENAME6重命名 */
  Resolution?: number;
}

declare interface ModifyConflictQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConversationRequest {
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** 应用 ID */
  AppId?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，应用密钥 */
  AppKey?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** Type=CONVERSATION_TYPE_SHARE 时必填，分享码 */
  ShareCode?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，访客ID */
  UserId?: string;
  /** 会话ID */
  ConversationId?: string;
  /** 会话标题 */
  Title?: string;
}

declare interface ModifyConversationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDocListRequest {
  /** 待修改的文档 ID 列表（数量：1~20） */
  DocIdList: string[];
  /** 所属知识库 ID */
  KbId: string;
  /** 归属分类 ID */
  CategoryId?: string;
  /** 生效作用域枚举项枚举值描述KNOWLEDGE_EFFECTIVE_DOMAIN_UNKNOWN0KNOWLEDGE_EFFECTIVE_DOMAIN_NONE1停用KNOWLEDGE_EFFECTIVE_DOMAIN_DEV2仅开发域KNOWLEDGE_EFFECTIVE_DOMAIN_RELEASE3仅发布域KNOWLEDGE_EFFECTIVE_DOMAIN_ALL4全域 */
  EffectiveDomain?: number;
  /** 过期策略（有效时间与超过有效时间后的行为） */
  ExpirationPolicy?: ExpirationPolicy;
  /** 外部链接 */
  ExternalLink?: DocExternalLink;
  /** 标签列表 */
  LabelRefList?: LabelRefIdentityList;
  /** 开关配置 */
  Switch?: DocSwitch;
}

declare interface ModifyDocListResponse {
  /** 批量修改结果 */
  ResultList?: OperationResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDocRequest {
  /** 文档 ID */
  DocId: string;
  /** 修改字段内容（不可为空，与 update_mask 配合使用） */
  Fields: DocModifyFields;
  /** 所属知识库 ID */
  KbId: string;
  /** 字段掩码：指定要修改的字段（支持的 Paths：Name, CategoryId, EffectiveDomain, LabelRefList, ExternalLink, ExpirationPolicy, UpdatePeriod, Switch, ParseConfig, UserAccessConfig） */
  UpdateMask: FieldMask;
}

declare interface ModifyDocResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyKBRequest {
  /** 知识库 ID */
  KbId: string;
  /** 可写属性（与 update_mask 配合使用） */
  Spec: KBSpec;
  /** 字段掩码：指定要修改的字段（蛇形字段名），未列出的字段忽略 */
  UpdateMask: FieldMask;
  /** 扩展操作（用于承载无法归类到常规字段修改的特殊操作，例如触发超量恢复等；需在 update_mask 中同时传入 'extend_fields' 才会生效，取值参见 KBExtendedAction：1=触发恢复超量） */
  ExtendFields?: KBModifyExtendFields;
}

declare interface ModifyKBResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLabelRequest {
  /** 修改字段内容（不可为空，与 update_mask 配合使用） */
  Fields: LabelModifyFields;
  /** 所属知识库 ID */
  KbId: string;
  /** 待修改的标签 ID */
  LabelId: string;
  /** 字段掩码：指定要修改的字段（支持的 Paths：Name, TermModifyList） */
  UpdateMask: FieldMask;
}

declare interface ModifyLabelResponse {
  /** 修改后的标签值（标准词 + 同义词列表） */
  TermList?: LabelTerm[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMsgRecordCategoryRequest {
  /** 应用 ID */
  AppId: string;
  /** 待修改的分类业务 ID */
  CategoryId: string;
  /** 修改后的分类名称 */
  Name: string;
}

declare interface ModifyMsgRecordCategoryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPluginRequest {
  /** 插件id */
  PluginId: string;
  /** 插件版本号 */
  PluginVersion: number;
  /** 插件基础资料 */
  Profile?: PluginProfile;
  /** 插件类型配置 */
  Config?: PluginConfig;
  /** 指定需要更新的字段，避免全量覆盖 */
  UpdateMask?: FieldMask;
  /** 插件的工具列表，mcp插件不传 */
  ToolList?: Tool[];
  /** 登录用户主账号(集成商模式必填) */
  LoginUin?: string;
  /** 登录用户子账号(集成商模式必填) */
  LoginSubAccountUin?: string;
}

declare interface ModifyPluginResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyQAListRequest {
  /** 所属知识库 ID */
  KbId: string;
  /** 待修改的 QA ID 列表（数量：1~20） */
  QaIdList: string[];
  /** 分类 ID */
  CategoryId?: string;
  /** 生效作用域枚举项枚举值描述KNOWLEDGE_EFFECTIVE_DOMAIN_UNKNOWN0KNOWLEDGE_EFFECTIVE_DOMAIN_NONE1停用KNOWLEDGE_EFFECTIVE_DOMAIN_DEV2仅开发域KNOWLEDGE_EFFECTIVE_DOMAIN_RELEASE3仅发布域KNOWLEDGE_EFFECTIVE_DOMAIN_ALL4全域 */
  EffectiveDomain?: number;
  /** 过期策略（有效时间与超过有效时间后的行为） */
  ExpirationPolicy?: ExpirationPolicy;
  /** 是否采纳（校验通过） */
  IsAccepted?: boolean;
  /** 适用范围（标签条件列表） */
  LabelRefList?: LabelRefIdentityList;
}

declare interface ModifyQAListResponse {
  /** 批量修改结果 */
  ResultList?: OperationResult[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyQARequest {
  /** 修改字段内容（与 update_mask 配合使用） */
  Fields: QAModifyFields;
  /** 所属知识库 ID */
  KbId: string;
  /** QA ID */
  QaId: string;
  /** 字段掩码：指定要修改的字段（支持的 Paths：Question, Answer, CategoryId, DocId, LabelRefList, QuestionDescription, ExpirationPolicy, SimilarQuestionList, EffectiveDomain, IsAccepted） */
  UpdateMask: FieldMask;
}

declare interface ModifyQAResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySkillRequest {
  /** SkillId */
  SkillId: string;
  /** 空间ID */
  SpaceId: string;
  /** skill描述 */
  DisplayDescription?: string;
  /** skill名称 */
  DisplayName?: string;
  /** skill包文件地址（zip）；传入则触发新版本生成，需与SkillVersion、UpdateDescription配套传入 */
  FileUrl?: string;
  /** 图标地址 */
  IconUrl?: string;
  /** skill版本号（与FileUrl配套传入） */
  SkillVersion?: string;
  /** 版本变更说明（与FileUrl配套传入） */
  UpdateDescription?: string;
}

declare interface ModifySkillResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySpaceRequest {
  /** 工作空间名称,长度最大30个字符 */
  Name?: string;
  /** 空间描述，长度最大150个字符 */
  Description?: string;
  /** 空间id */
  SpaceId?: string;
  /** 指定需要更新的字段，支持Name和Description */
  FieldMask?: FieldMask;
}

declare interface ModifySpaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVariableRequest {
  /** app_id */
  AppId: string;
  /** 变量信息 */
  Variable?: Variable;
}

declare interface ModifyVariableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PauseAppTriggerRequest {
  /** 应用ID */
  AppId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 应用触发器ID */
  TriggerId?: string;
  /** 访客ID */
  UserId?: string;
}

declare interface PauseAppTriggerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseSkillRequest {
  /** SkillId */
  SkillId: string;
  /** 空间ID */
  SpaceId: string;
  /** 版本ID */
  VersionId: string;
}

declare interface ReleaseSkillResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetConversationRequest {
  /** 会话 ID */
  ConversationId: string;
  /** 会话类型 枚举值: 0-CONVERSATION_TYPE_UNSPECIFIED(未指定；列表查询时表示全部), 1-CONVERSATION_TYPE_VISITOR(访客端体验), 2-CONVERSATION_TYPE_EVALUATION(评测), 5-CONVERSATION_TYPE_API(API 接入), 10-CONVERSATION_TYPE_WORKFLOW(工作流调试), 20-CONVERSATION_TYPE_SHARE(分享链接) */
  Type: number;
  /** Type=CONVERSATION_TYPE_API 时必填，应用密钥 */
  AppKey?: string;
  /** 子用户Uin */
  LoginSubAccountUin?: string;
  /** 主用户Uin */
  LoginUin?: string;
  /** Type=CONVERSATION_TYPE_SHARE 时必填，分享码 */
  ShareCode?: string;
  /** Type=CONVERSATION_TYPE_API 时必填，访客ID */
  UserId?: string;
}

declare interface ResetConversationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeAppTriggerRequest {
  /** 应用ID */
  AppId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 应用触发器ID */
  TriggerId?: string;
  /** 访客ID */
  UserId?: string;
}

declare interface ResumeAppTriggerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryReleaseRequest {
  /** 应用ID */
  AppId: string;
  /** 发布任务ID */
  ReleaseId: string;
}

declare interface RetryReleaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackReleaseRequest {
  /** app_id */
  AppId: string;
  /** release_id */
  ReleaseId: string;
}

declare interface RollbackReleaseResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunAppTriggerNowRequest {
  /** 应用ID */
  AppId?: string;
  /** 枚举项枚举值描述APP_TRIGGER_SCOPE_UNSPECIFIED0未指定APP_TRIGGER_SCOPE_APP1B 端管理员APP_TRIGGER_SCOPE_USER2C 端访客 */
  Scope?: number;
  /** 应用触发器ID */
  TriggerId?: string;
  /** 访客ID */
  UserId?: string;
}

declare interface RunAppTriggerNowResponse {
  /** 应用触发器实例ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchKnowledgeRequest {
  /** 检索高级配置 */
  AdvancedConfig: SearchAdvancedConfig;
  /** 检索输入 */
  Input: SearchInput;
  /** 检索上下文 */
  Context?: SearchContext;
  /** 计费信息 */
  SearchBilling?: SearchBilling;
}

declare interface SearchKnowledgeResponse {
  /** 检索结果列表 */
  KnowledgeList?: KnowledgeResult[];
  /** 消耗的 token 统计 */
  TokenUsageList?: TokenUsage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnfavoritePluginRequest {
  /** 插件id */
  PluginId: string;
  /** 当前空间id */
  SpaceId: string;
}

declare interface UnfavoritePluginResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnfavoriteSkillRequest {
  /** SkillId */
  SkillId: string;
  /** 空间ID */
  SpaceId: string;
}

declare interface UnfavoriteSkillResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Adp 腾讯云智能体开发平台} */
declare interface Adp {
  (): Versions;
  /** 校验标签 {@link CheckLabelRequest} {@link CheckLabelResponse} */
  CheckLabel(data: CheckLabelRequest, config?: AxiosRequestConfig): AxiosPromise<CheckLabelResponse>;
  /** 复制 Agent {@link CopyAgentFromAppRequest} {@link CopyAgentFromAppResponse} */
  CopyAgentFromApp(data: CopyAgentFromAppRequest, config?: AxiosRequestConfig): AxiosPromise<CopyAgentFromAppResponse>;
  /** 复制应用 {@link CopyAppRequest} {@link CopyAppResponse} */
  CopyApp(data: CopyAppRequest, config?: AxiosRequestConfig): AxiosPromise<CopyAppResponse>;
  /** 创建 Agent {@link CreateAgentRequest} {@link CreateAgentResponse} */
  CreateAgent(data: CreateAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentResponse>;
  /** 创建应用 {@link CreateAppRequest} {@link CreateAppResponse} */
  CreateApp(data: CreateAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAppResponse>;
  /** 创建应用触发器 {@link CreateAppTriggerRequest} {@link CreateAppTriggerResponse} */
  CreateAppTrigger(data?: CreateAppTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAppTriggerResponse>;
  /** 创建分类 {@link CreateCategoryRequest} {@link CreateCategoryResponse} */
  CreateCategory(data: CreateCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCategoryResponse>;
  /** 创建渠道 {@link CreateChannelRequest} {@link CreateChannelResponse} */
  CreateChannel(data: CreateChannelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateChannelResponse>;
  /** 新建会话 {@link CreateConversationRequest} {@link CreateConversationResponse} */
  CreateConversation(data: CreateConversationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConversationResponse>;
  /** 创建知识库 {@link CreateKBRequest} {@link CreateKBResponse} */
  CreateKB(data: CreateKBRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKBResponse>;
  /** 创建标签 {@link CreateLabelRequest} {@link CreateLabelResponse} */
  CreateLabel(data: CreateLabelRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLabelResponse>;
  /** 创建消息记录分类 {@link CreateMsgRecordCategoryRequest} {@link CreateMsgRecordCategoryResponse} */
  CreateMsgRecordCategory(data: CreateMsgRecordCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMsgRecordCategoryResponse>;
  /** 创建插件 {@link CreatePluginRequest} {@link CreatePluginResponse} */
  CreatePlugin(data: CreatePluginRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePluginResponse>;
  /** 创建 QA 生成任务 {@link CreateQAGenerationTaskRequest} {@link CreateQAGenerationTaskResponse} */
  CreateQAGenerationTask(data: CreateQAGenerationTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateQAGenerationTaskResponse>;
  /** 批量创建 QA {@link CreateQAListRequest} {@link CreateQAListResponse} */
  CreateQAList(data: CreateQAListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateQAListResponse>;
  /** 新增发布任务 {@link CreateReleaseRequest} {@link CreateReleaseResponse} */
  CreateRelease(data: CreateReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseResponse>;
  /** 创建相似问生成任务 {@link CreateSimilarQuestionRequest} {@link CreateSimilarQuestionResponse} */
  CreateSimilarQuestion(data: CreateSimilarQuestionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSimilarQuestionResponse>;
  /** 创建skill {@link CreateSkillRequest} {@link CreateSkillResponse} */
  CreateSkill(data: CreateSkillRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSkillResponse>;
  /** 创建Skill企业共享 {@link CreateSkillShareRequest} {@link CreateSkillShareResponse} */
  CreateSkillShare(data: CreateSkillShareRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSkillShareResponse>;
  /** 创建空间 {@link CreateSpaceRequest} {@link CreateSpaceResponse} */
  CreateSpace(data?: CreateSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSpaceResponse>;
  /** 创建参数变量 {@link CreateVariableRequest} {@link CreateVariableResponse} */
  CreateVariable(data: CreateVariableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVariableResponse>;
  /** 创建 WebSocket Token {@link CreateWebSocketTokenRequest} {@link CreateWebSocketTokenResponse} */
  CreateWebSocketToken(data: CreateWebSocketTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWebSocketTokenResponse>;
  /** 创建工作空间凭证 {@link CreateWorkspaceCredentialRequest} {@link CreateWorkspaceCredentialResponse} */
  CreateWorkspaceCredential(data: CreateWorkspaceCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWorkspaceCredentialResponse>;
  /** 删除 Agent {@link DeleteAgentRequest} {@link DeleteAgentResponse} */
  DeleteAgent(data: DeleteAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAgentResponse>;
  /** 删除应用 {@link DeleteAppRequest} {@link DeleteAppResponse} */
  DeleteApp(data: DeleteAppRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAppResponse>;
  /** 删除应用触发器 {@link DeleteAppTriggerRequest} {@link DeleteAppTriggerResponse} */
  DeleteAppTrigger(data?: DeleteAppTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAppTriggerResponse>;
  /** 删除分类 {@link DeleteCategoryRequest} {@link DeleteCategoryResponse} */
  DeleteCategory(data: DeleteCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCategoryResponse>;
  /** 删除渠道 {@link DeleteChannelRequest} {@link DeleteChannelResponse} */
  DeleteChannel(data: DeleteChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteChannelResponse>;
  /** 删除会话 {@link DeleteConversationRequest} {@link DeleteConversationResponse} */
  DeleteConversation(data: DeleteConversationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConversationResponse>;
  /** 批量删除文档 {@link DeleteDocListRequest} {@link DeleteDocListResponse} */
  DeleteDocList(data: DeleteDocListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDocListResponse>;
  /** 删除知识库 {@link DeleteKBRequest} {@link DeleteKBResponse} */
  DeleteKB(data: DeleteKBRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteKBResponse>;
  /** 批量删除标签 {@link DeleteLabelListRequest} {@link DeleteLabelListResponse} */
  DeleteLabelList(data: DeleteLabelListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLabelListResponse>;
  /** 删除消息记录分类 {@link DeleteMsgRecordCategoryRequest} {@link DeleteMsgRecordCategoryResponse} */
  DeleteMsgRecordCategory(data: DeleteMsgRecordCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMsgRecordCategoryResponse>;
  /** 删除插件 {@link DeletePluginRequest} {@link DeletePluginResponse} */
  DeletePlugin(data: DeletePluginRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePluginResponse>;
  /** 批量删除 QA {@link DeleteQAListRequest} {@link DeleteQAListResponse} */
  DeleteQAList(data: DeleteQAListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteQAListResponse>;
  /** 删除Skill {@link DeleteSkillRequest} {@link DeleteSkillResponse} */
  DeleteSkill(data: DeleteSkillRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSkillResponse>;
  /** 删除Skill企业共享 {@link DeleteSkillShareRequest} {@link DeleteSkillShareResponse} */
  DeleteSkillShare(data: DeleteSkillShareRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSkillShareResponse>;
  /** 删除空间 {@link DeleteSpaceRequest} {@link DeleteSpaceResponse} */
  DeleteSpace(data?: DeleteSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSpaceResponse>;
  /** 删除参数变量 {@link DeleteVariableRequest} {@link DeleteVariableResponse} */
  DeleteVariable(data: DeleteVariableRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVariableResponse>;
  /** 查看企业下的员工列表 {@link DescribeAccountListRequest} {@link DescribeAccountListResponse} */
  DescribeAccountList(data?: DescribeAccountListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountListResponse>;
  /** 查询 Agent 详情 {@link DescribeAgentDetailRequest} {@link DescribeAgentDetailResponse} */
  DescribeAgentDetail(data?: DescribeAgentDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentDetailResponse>;
  /** 获取Agent发布预览列表 {@link DescribeAgentReleasePreviewListRequest} {@link DescribeAgentReleasePreviewListResponse} */
  DescribeAgentReleasePreviewList(data: DescribeAgentReleasePreviewListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentReleasePreviewListResponse>;
  /** 查询 Agent 摘要列表 {@link DescribeAgentSummaryListRequest} {@link DescribeAgentSummaryListResponse} */
  DescribeAgentSummaryList(data?: DescribeAgentSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentSummaryListResponse>;
  /** 获取应用信息 {@link DescribeAppRequest} {@link DescribeAppResponse} */
  DescribeApp(data: DescribeAppRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppResponse>;
  /** 获取应用摘要列表 {@link DescribeAppSummaryListRequest} {@link DescribeAppSummaryListResponse} */
  DescribeAppSummaryList(data: DescribeAppSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppSummaryListResponse>;
  /** 查询应用触发器详情 {@link DescribeAppTriggerRequest} {@link DescribeAppTriggerResponse} */
  DescribeAppTrigger(data?: DescribeAppTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppTriggerResponse>;
  /** 查询应用触发器实例 {@link DescribeAppTriggerInstanceRequest} {@link DescribeAppTriggerInstanceResponse} */
  DescribeAppTriggerInstance(data?: DescribeAppTriggerInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppTriggerInstanceResponse>;
  /** 查询应用触发器运行日志列表 {@link DescribeAppTriggerRunLogListRequest} {@link DescribeAppTriggerRunLogListResponse} */
  DescribeAppTriggerRunLogList(data?: DescribeAppTriggerRunLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppTriggerRunLogListResponse>;
  /** 查询应用触发器列表 {@link DescribeAppTriggerSummaryListRequest} {@link DescribeAppTriggerSummaryListResponse} */
  DescribeAppTriggerSummaryList(data?: DescribeAppTriggerSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppTriggerSummaryListResponse>;
  /** 查看操作日志列表 {@link DescribeAuditLogListRequest} {@link DescribeAuditLogListResponse} */
  DescribeAuditLogList(data?: DescribeAuditLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogListResponse>;
  /** 获取审计日志元信息 {@link DescribeAuditLogMetaRequest} {@link DescribeAuditLogMetaResponse} */
  DescribeAuditLogMeta(data?: DescribeAuditLogMetaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogMetaResponse>;
  /** 查询分类列表 {@link DescribeCategoryListRequest} {@link DescribeCategoryListResponse} */
  DescribeCategoryList(data: DescribeCategoryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCategoryListResponse>;
  /** 查询渠道 {@link DescribeChannelRequest} {@link DescribeChannelResponse} */
  DescribeChannel(data: DescribeChannelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelResponse>;
  /** 查询渠道列表 {@link DescribeChannelListRequest} {@link DescribeChannelListResponse} */
  DescribeChannelList(data: DescribeChannelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChannelListResponse>;
  /** 查询并发超限明细 {@link DescribeConcurrencyLimitDetailListRequest} {@link DescribeConcurrencyLimitDetailListResponse} */
  DescribeConcurrencyLimitDetailList(data: DescribeConcurrencyLimitDetailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConcurrencyLimitDetailListResponse>;
  /** 查询冲突问详情 {@link DescribeConflictQARequest} {@link DescribeConflictQAResponse} */
  DescribeConflictQA(data: DescribeConflictQARequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConflictQAResponse>;
  /** 查询冲突问列表 {@link DescribeConflictQASummaryListRequest} {@link DescribeConflictQASummaryListResponse} */
  DescribeConflictQASummaryList(data: DescribeConflictQASummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConflictQASummaryListResponse>;
  /** 查询资源消耗明细 {@link DescribeConsumptionDetailListRequest} {@link DescribeConsumptionDetailListResponse} */
  DescribeConsumptionDetailList(data: DescribeConsumptionDetailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConsumptionDetailListResponse>;
  /** 查看会话信息 {@link DescribeConversationRequest} {@link DescribeConversationResponse} */
  DescribeConversation(data: DescribeConversationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConversationResponse>;
  /** 获取会话列表 {@link DescribeConversationListRequest} {@link DescribeConversationListResponse} */
  DescribeConversationList(data: DescribeConversationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConversationListResponse>;
  /** 获取会话历史消息 {@link DescribeConversationMessageListRequest} {@link DescribeConversationMessageListResponse} */
  DescribeConversationMessageList(data: DescribeConversationMessageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConversationMessageListResponse>;
  /** 查询文档详情 {@link DescribeDocRequest} {@link DescribeDocResponse} */
  DescribeDoc(data: DescribeDocRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocResponse>;
  /** 查询文档摘要列表 {@link DescribeDocSummaryListRequest} {@link DescribeDocSummaryListResponse} */
  DescribeDocSummaryList(data: DescribeDocSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDocSummaryListResponse>;
  /** 查询知识库详情 {@link DescribeKBRequest} {@link DescribeKBResponse} */
  DescribeKB(data: DescribeKBRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKBResponse>;
  /** 查询知识库列表 {@link DescribeKBSummaryListRequest} {@link DescribeKBSummaryListResponse} */
  DescribeKBSummaryList(data: DescribeKBSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKBSummaryListResponse>;
  /** 查询标签详情 {@link DescribeLabelRequest} {@link DescribeLabelResponse} */
  DescribeLabel(data: DescribeLabelRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLabelResponse>;
  /** 查询标签列表 {@link DescribeLabelSummaryListRequest} {@link DescribeLabelSummaryListResponse} */
  DescribeLabelSummaryList(data: DescribeLabelSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLabelSummaryListResponse>;
  /** 拉取最新发布信息 {@link DescribeLatestReleaseRequest} {@link DescribeLatestReleaseResponse} */
  DescribeLatestRelease(data: DescribeLatestReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLatestReleaseResponse>;
  /** 查询看板总览KPI卡片 {@link DescribeMetricOverviewListRequest} {@link DescribeMetricOverviewListResponse} */
  DescribeMetricOverviewList(data: DescribeMetricOverviewListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMetricOverviewListResponse>;
  /** 查询模型列表 {@link DescribeModelListRequest} {@link DescribeModelListResponse} */
  DescribeModelList(data: DescribeModelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelListResponse>;
  /** 查询消息记录分类列表 {@link DescribeMsgRecordCategoryListRequest} {@link DescribeMsgRecordCategoryListResponse} */
  DescribeMsgRecordCategoryList(data: DescribeMsgRecordCategoryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMsgRecordCategoryListResponse>;
  /** 查询消息列表 {@link DescribeMsgRecordListRequest} {@link DescribeMsgRecordListResponse} */
  DescribeMsgRecordList(data: DescribeMsgRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMsgRecordListResponse>;
  /** 获取插件详情 {@link DescribePluginRequest} {@link DescribePluginResponse} */
  DescribePlugin(data: DescribePluginRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginResponse>;
  /** 获取插件概要列表 {@link DescribePluginSummaryListRequest} {@link DescribePluginSummaryListResponse} */
  DescribePluginSummaryList(data: DescribePluginSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginSummaryListResponse>;
  /** 查询 QA 详情 {@link DescribeQARequest} {@link DescribeQAResponse} */
  DescribeQA(data: DescribeQARequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQAResponse>;
  /** 查询 QA 列表 {@link DescribeQASummaryListRequest} {@link DescribeQASummaryListResponse} */
  DescribeQASummaryList(data: DescribeQASummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQASummaryListResponse>;
  /** 发布记录列表 {@link DescribeReleaseListRequest} {@link DescribeReleaseListResponse} */
  DescribeReleaseList(data: DescribeReleaseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseListResponse>;
  /** 查询发布任务 {@link DescribeReleaseSummaryRequest} {@link DescribeReleaseSummaryResponse} */
  DescribeReleaseSummary(data: DescribeReleaseSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseSummaryResponse>;
  /** 获取资源套餐和增值包摘要信息 {@link DescribeResourceSummaryRequest} {@link DescribeResourceSummaryResponse} */
  DescribeResourceSummary(data?: DescribeResourceSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceSummaryResponse>;
  /** 查询skill分类key {@link DescribeSkillCategoryListRequest} {@link DescribeSkillCategoryListResponse} */
  DescribeSkillCategoryList(data?: DescribeSkillCategoryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSkillCategoryListResponse>;
  /** 查询Skill详情 {@link DescribeSkillDetailRequest} {@link DescribeSkillDetailResponse} */
  DescribeSkillDetail(data: DescribeSkillDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSkillDetailResponse>;
  /** 查询Skill引用列表 {@link DescribeSkillReferenceListRequest} {@link DescribeSkillReferenceListResponse} */
  DescribeSkillReferenceList(data: DescribeSkillReferenceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSkillReferenceListResponse>;
  /** 查询skill列表 {@link DescribeSkillSummaryListRequest} {@link DescribeSkillSummaryListResponse} */
  DescribeSkillSummaryList(data: DescribeSkillSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSkillSummaryListResponse>;
  /** 获取空间列表 {@link DescribeSpaceListRequest} {@link DescribeSpaceListResponse} */
  DescribeSpaceList(data?: DescribeSpaceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpaceListResponse>;
  /** 获取系统变量 {@link DescribeSystemVariableListRequest} {@link DescribeSystemVariableListResponse} */
  DescribeSystemVariableList(data: DescribeSystemVariableListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSystemVariableListResponse>;
  /** 查询资源调用时序明细 {@link DescribeUsageDetailListRequest} {@link DescribeUsageDetailListResponse} */
  DescribeUsageDetailList(data: DescribeUsageDetailListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsageDetailListResponse>;
  /** 查询资源用量聚合明细 {@link DescribeUsageSummaryListRequest} {@link DescribeUsageSummaryListResponse} */
  DescribeUsageSummaryList(data: DescribeUsageSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsageSummaryListResponse>;
  /** 获取参数变量 {@link DescribeVariableRequest} {@link DescribeVariableResponse} */
  DescribeVariable(data: DescribeVariableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVariableResponse>;
  /** 获取参数变量列表 {@link DescribeVariableListRequest} {@link DescribeVariableListResponse} */
  DescribeVariableList(data: DescribeVariableListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVariableListResponse>;
  /** 异步导出 QA {@link ExportQARequest} {@link ExportQAResponse} */
  ExportQA(data: ExportQARequest, config?: AxiosRequestConfig): AxiosPromise<ExportQAResponse>;
  /** 收藏插件 {@link FavoritePluginRequest} {@link FavoritePluginResponse} */
  FavoritePlugin(data: FavoritePluginRequest, config?: AxiosRequestConfig): AxiosPromise<FavoritePluginResponse>;
  /** 收藏skill {@link FavoriteSkillRequest} {@link FavoriteSkillResponse} */
  FavoriteSkill(data: FavoriteSkillRequest, config?: AxiosRequestConfig): AxiosPromise<FavoriteSkillResponse>;
  /** 批量导入文档 {@link ImportDocListRequest} {@link ImportDocListResponse} */
  ImportDocList(data: ImportDocListRequest, config?: AxiosRequestConfig): AxiosPromise<ImportDocListResponse>;
  /** 修改Agent配置 {@link ModifyAgentRequest} {@link ModifyAgentResponse} */
  ModifyAgent(data?: ModifyAgentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentResponse>;
  /** 修改应用 {@link ModifyAppRequest} {@link ModifyAppResponse} */
  ModifyApp(data: ModifyAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppResponse>;
  /** 修改应用触发器 {@link ModifyAppTriggerRequest} {@link ModifyAppTriggerResponse} */
  ModifyAppTrigger(data?: ModifyAppTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppTriggerResponse>;
  /** 修改分类 {@link ModifyCategoryRequest} {@link ModifyCategoryResponse} */
  ModifyCategory(data: ModifyCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCategoryResponse>;
  /** 更新渠道 {@link ModifyChannelRequest} {@link ModifyChannelResponse} */
  ModifyChannel(data: ModifyChannelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyChannelResponse>;
  /** 修改冲突问 {@link ModifyConflictQARequest} {@link ModifyConflictQAResponse} */
  ModifyConflictQA(data: ModifyConflictQARequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConflictQAResponse>;
  /** 修改会话信息 {@link ModifyConversationRequest} {@link ModifyConversationResponse} */
  ModifyConversation(data: ModifyConversationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConversationResponse>;
  /** 修改单个文档 {@link ModifyDocRequest} {@link ModifyDocResponse} */
  ModifyDoc(data: ModifyDocRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDocResponse>;
  /** 批量修改文档 {@link ModifyDocListRequest} {@link ModifyDocListResponse} */
  ModifyDocList(data: ModifyDocListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDocListResponse>;
  /** 修改知识库 {@link ModifyKBRequest} {@link ModifyKBResponse} */
  ModifyKB(data: ModifyKBRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyKBResponse>;
  /** 修改标签 {@link ModifyLabelRequest} {@link ModifyLabelResponse} */
  ModifyLabel(data: ModifyLabelRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLabelResponse>;
  /** 修改消息记录分类 {@link ModifyMsgRecordCategoryRequest} {@link ModifyMsgRecordCategoryResponse} */
  ModifyMsgRecordCategory(data: ModifyMsgRecordCategoryRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMsgRecordCategoryResponse>;
  /** 修改插件 {@link ModifyPluginRequest} {@link ModifyPluginResponse} */
  ModifyPlugin(data: ModifyPluginRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPluginResponse>;
  /** 修改单个 QA {@link ModifyQARequest} {@link ModifyQAResponse} */
  ModifyQA(data: ModifyQARequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQAResponse>;
  /** 批量修改 QA {@link ModifyQAListRequest} {@link ModifyQAListResponse} */
  ModifyQAList(data: ModifyQAListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyQAListResponse>;
  /** 修改skill {@link ModifySkillRequest} {@link ModifySkillResponse} */
  ModifySkill(data: ModifySkillRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySkillResponse>;
  /** 编辑空间 {@link ModifySpaceRequest} {@link ModifySpaceResponse} */
  ModifySpace(data?: ModifySpaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySpaceResponse>;
  /** 更新参数变量 {@link ModifyVariableRequest} {@link ModifyVariableResponse} */
  ModifyVariable(data: ModifyVariableRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVariableResponse>;
  /** 暂停应用触发器 {@link PauseAppTriggerRequest} {@link PauseAppTriggerResponse} */
  PauseAppTrigger(data?: PauseAppTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<PauseAppTriggerResponse>;
  /** 上架skill {@link ReleaseSkillRequest} {@link ReleaseSkillResponse} */
  ReleaseSkill(data: ReleaseSkillRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseSkillResponse>;
  /** 重置会话 {@link ResetConversationRequest} {@link ResetConversationResponse} */
  ResetConversation(data: ResetConversationRequest, config?: AxiosRequestConfig): AxiosPromise<ResetConversationResponse>;
  /** 恢复应用触发器 {@link ResumeAppTriggerRequest} {@link ResumeAppTriggerResponse} */
  ResumeAppTrigger(data?: ResumeAppTriggerRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeAppTriggerResponse>;
  /** 重试发布 {@link RetryReleaseRequest} {@link RetryReleaseResponse} */
  RetryRelease(data: RetryReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<RetryReleaseResponse>;
  /** 回滚发布 {@link RollbackReleaseRequest} {@link RollbackReleaseResponse} */
  RollbackRelease(data: RollbackReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackReleaseResponse>;
  /** 立即执行应用触发器 {@link RunAppTriggerNowRequest} {@link RunAppTriggerNowResponse} */
  RunAppTriggerNow(data?: RunAppTriggerNowRequest, config?: AxiosRequestConfig): AxiosPromise<RunAppTriggerNowResponse>;
  /** 知识检索 {@link SearchKnowledgeRequest} {@link SearchKnowledgeResponse} */
  SearchKnowledge(data: SearchKnowledgeRequest, config?: AxiosRequestConfig): AxiosPromise<SearchKnowledgeResponse>;
  /** 取消收藏插件 {@link UnfavoritePluginRequest} {@link UnfavoritePluginResponse} */
  UnfavoritePlugin(data: UnfavoritePluginRequest, config?: AxiosRequestConfig): AxiosPromise<UnfavoritePluginResponse>;
  /** 取消收藏skill {@link UnfavoriteSkillRequest} {@link UnfavoriteSkillResponse} */
  UnfavoriteSkill(data: UnfavoriteSkillRequest, config?: AxiosRequestConfig): AxiosPromise<UnfavoriteSkillResponse>;
}

export declare type Versions = ["2026-05-20"];

export default Adp;
