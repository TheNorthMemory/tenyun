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

/** 员工信息 */
declare interface AccountInfo {
  /** 员工子账号id */
  AccountUin?: string;
  /** 员工昵称 */
  NickName?: string;
  /** 员工头像 */
  Avatar?: string;
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
  /** 应用状态 (OFFLINE:未上线, RUNNING:运行中, DISABLED:停用)。枚举值: 1:未上线, 2:运行中, 3:停用 */
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
  /** 调用方自定义配置(控制C端用户在对话时可动态传入哪些自定义配置) */
  CustomConfig: ClawAgentCustomConfig | null;
  /** Agent团队协作配置 */
  AgentTeamConfig?: ClawAgentAgentTeamConfig | null;
  /** 长期记忆配置 */
  LongMemoryConfig?: ClawAgentLongMemoryConfig | null;
}

/** ClawAgent调用方自定义配置开关集合 */
declare interface ClawAgentCustomConfig {
  /** 是否允许C端用户在对话时动态传入自定义Agent配置 */
  Enabled?: boolean;
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

/** Reference 参考来源信息 */
declare interface ConversationReference {
  /** 参考来源索引 */
  Index: number;
  /** 参考来源名称 */
  Name: string;
  /** 参考来源类型 枚举值: 0-APP_REFERENCE_TYPE_UNSPECIFIED(未指定), 1-APP_REFERENCE_TYPE_QA(问答), 2-APP_REFERENCE_TYPE_SEGMENT(分片), 3-APP_REFERENCE_TYPE_DOC(文档), 4-APP_REFERENCE_TYPE_WEB_SEARCH(Web 搜索), 5-APP_REFERENCE_TYPE_GRAPH_RAG(GraphRAG) */
  Type: number;
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
  /** 枚举项枚举值描述SHARE_SCOPE_TYPE_UNSPECIFIED0SHARE_SCOPE_TYPE_ALL1SHARE_SCOPE_TYPE_ACCOUNT2 */
  ShareScope?: number;
  /** 企业共享应用标签 */
  TagIdList?: string[];
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

/** 字段掩码 */
declare interface FieldMask {
  /** 字段路径列表 */
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

/** 列表通用过滤条件（多个Filter之间为AND关系，同一Filter的多个value_list为OR关系） */
declare interface Filter {
  /** 过滤字段名 */
  Name?: string;
  /** 操作符：0-属于，1-不属于 */
  Operator?: number;
  /** 过滤值数组 */
  ValueList?: string[];
}

/** 生成模型配置 */
declare interface GenerateModel {
  /** 生成模型 */
  Model: ModelDetailInfo | null;
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
}

/** MCPToolConfig */
declare interface MCPToolConfig {
  /** 输入参数 */
  Inputs?: RequestParam[];
  /** 输出参数 */
  Outputs?: ResponseParam[];
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
  /** 插件运营管理信息 */
  Operation?: PluginOperation;
  /** 插件id */
  PluginId?: string;
  /** 插件基础信息 */
  Profile?: PluginProfile;
  /** 插件统计信息 */
  Statistics?: PluginStatistics;
  /** 插件状态，1:可用，2:不可用 枚举值：1： 可用2： 不可用 */
  Status?: number;
  /** 用户维度的插件状态信息 */
  UserState?: PluginUserState;
  /** 插件配置信息 */
  Config?: PluginConfig;
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

/** 角色配置 */
declare interface RoleConfig {
  /** 角色描述 */
  RoleDescription: string;
}

/** 搜索资源状态信息 */
declare interface SearchResourceStatusInfo {
  /** 搜索资源状态: AVAILABLE(1)=资源可用, EXHAUSTED(2)=资源已用尽。枚举值: 1:资源可用, 2:资源已用尽 */
  ResourceStatus: number;
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
  /** Skill 版本发布流程状态： - 0 INITIALIZED 初始化（版本初始态） - 1 AUDITING 审核中（f_analysis_status ∈ {PENDING, RUNNING}） - 2 PENDING_RELEASE 待发布（低/中风险，等用户确认上架） - 3 RELEASED 已发布 - 4 UNRELEASED 未发布（HIGH / UNAVAILABLE / FAILED / 用户放弃，含历史"不通过"语义） 与 SkillAnalysisStatus 解耦：前者是用户视角发布生命周期，后者是安全检测阶段。 */
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

/** 思考模型配置 */
declare interface ThinkModel {
  /** 思考模型 */
  Model: ModelDetailInfo | null;
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

/** 变量信息 */
declare interface Variable {
  /** 默认文件名称 */
  DefaultFileName: string;
  /** 默认值 */
  DefaultValue: string;
  /** 变量描述 */
  Description: string;
  /** 模块类型。枚举值: 1:环境参数, 2:应用参数, 3:系统参数, -1:所有参数 */
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

declare interface DescribePluginRequest {
  /** 插件id */
  PluginId: string;
  /** 当前空间id */
  SpaceId: string;
  /** 获取指定字段 */
  FieldMask?: FieldMask;
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
  /** 过滤条件列表 支持：PluginKind、CategoryKey、PluginSource、PluginId、PluginClass、BillingType */
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
}

declare interface DescribePluginSummaryListResponse {
  /** plugin_list */
  PluginList?: PluginSummary[];
  /** total_count */
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
  /** 字段掩码，指定需要更新的字段(Paths为空则不更新任何字段)。Paths枚举值：【顶层】Name, Avatar, Description, AppMode, SharedKbIdList【Greeting】Config.Greeting, Config.Greeting.Greeting, Config.Greeting.OpeningQuestionList【Model】Config.Model, Config.Model.ThinkModel, Config.Model.GenerateModel, Config.Model.AiOptimizeModel, Config.Model.FileParseModel, Config.Model.PromptRewriteModel, Config.Model.MultiModalQaModel, Config.Model.MultiModalUnderstandingModel【WebSearch】Config.WebSearch【Memory】Config.Memory, Config.Memory.Enabled, Config.Memory.LongMemoryDay, Config.Memory.Model, Config.Memory.PromptMode, Config.Memory.PromptContent【Mode】Config.Mode, Config.Mode.MultiAgentConfig, Config.Mode.SingleWorkflowConfig【Experience】Config.Experience, Config.Experience.Conversation, Config.Experience.Role, Config.Experience.Advanced【Experience.Conversation】Config.Experience.Conversation.AiCall, Config.Experience.Conversation.BackgroundImage, Config.Experience.Conversation.Method, Config.Experience.Conversation.FallbackReply, Config.Experience.Conversation.Recommended, Config.Experience.Conversation.InputBoxConfig, Config.Experience.Conversation.WebSearch【Experience.Conversation.AiCall】Config.Experience.Conversation.AiCall.VoiceInteract, Config.Experience.Conversation.AiCall.VoiceCall, Config.Experience.Conversation.AiCall.DigitalHuman【Experience.Advanced】Config.Experience.Advanced.ContextRewrite, Config.Experience.Advanced.ImageTextRetrieval, Config.Experience.Advanced.IntentAchievement, Config.Experience.Advanced.ReplyFlexibility */
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
  /** 复制 Agent {@link CopyAgentFromAppRequest} {@link CopyAgentFromAppResponse} */
  CopyAgentFromApp(data: CopyAgentFromAppRequest, config?: AxiosRequestConfig): AxiosPromise<CopyAgentFromAppResponse>;
  /** 复制应用 {@link CopyAppRequest} {@link CopyAppResponse} */
  CopyApp(data: CopyAppRequest, config?: AxiosRequestConfig): AxiosPromise<CopyAppResponse>;
  /** 创建 Agent {@link CreateAgentRequest} {@link CreateAgentResponse} */
  CreateAgent(data: CreateAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAgentResponse>;
  /** 创建应用 {@link CreateAppRequest} {@link CreateAppResponse} */
  CreateApp(data: CreateAppRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAppResponse>;
  /** 新建会话 {@link CreateConversationRequest} {@link CreateConversationResponse} */
  CreateConversation(data: CreateConversationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConversationResponse>;
  /** 创建插件 {@link CreatePluginRequest} {@link CreatePluginResponse} */
  CreatePlugin(data: CreatePluginRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePluginResponse>;
  /** 新增发布任务 {@link CreateReleaseRequest} {@link CreateReleaseResponse} */
  CreateRelease(data: CreateReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReleaseResponse>;
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
  /** 删除会话 {@link DeleteConversationRequest} {@link DeleteConversationResponse} */
  DeleteConversation(data: DeleteConversationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConversationResponse>;
  /** 删除插件 {@link DeletePluginRequest} {@link DeletePluginResponse} */
  DeletePlugin(data: DeletePluginRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePluginResponse>;
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
  /** 获取Agent发布列表 {@link DescribeAgentReleasePreviewListRequest} {@link DescribeAgentReleasePreviewListResponse} */
  DescribeAgentReleasePreviewList(data: DescribeAgentReleasePreviewListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentReleasePreviewListResponse>;
  /** 查询 Agent 摘要列表 {@link DescribeAgentSummaryListRequest} {@link DescribeAgentSummaryListResponse} */
  DescribeAgentSummaryList(data?: DescribeAgentSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAgentSummaryListResponse>;
  /** 获取应用信息 {@link DescribeAppRequest} {@link DescribeAppResponse} */
  DescribeApp(data: DescribeAppRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppResponse>;
  /** 获取应用摘要列表 {@link DescribeAppSummaryListRequest} {@link DescribeAppSummaryListResponse} */
  DescribeAppSummaryList(data: DescribeAppSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAppSummaryListResponse>;
  /** 查看操作日志列表 {@link DescribeAuditLogListRequest} {@link DescribeAuditLogListResponse} */
  DescribeAuditLogList(data?: DescribeAuditLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogListResponse>;
  /** 获取审计日志元信息 {@link DescribeAuditLogMetaRequest} {@link DescribeAuditLogMetaResponse} */
  DescribeAuditLogMeta(data?: DescribeAuditLogMetaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAuditLogMetaResponse>;
  /** 查看会话信息 {@link DescribeConversationRequest} {@link DescribeConversationResponse} */
  DescribeConversation(data: DescribeConversationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConversationResponse>;
  /** 获取会话列表 {@link DescribeConversationListRequest} {@link DescribeConversationListResponse} */
  DescribeConversationList(data: DescribeConversationListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConversationListResponse>;
  /** 获取会话历史消息 {@link DescribeConversationMessageListRequest} {@link DescribeConversationMessageListResponse} */
  DescribeConversationMessageList(data: DescribeConversationMessageListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConversationMessageListResponse>;
  /** 拉取最新发布信息 {@link DescribeLatestReleaseRequest} {@link DescribeLatestReleaseResponse} */
  DescribeLatestRelease(data: DescribeLatestReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLatestReleaseResponse>;
  /** 查询模型列表 {@link DescribeModelListRequest} {@link DescribeModelListResponse} */
  DescribeModelList(data: DescribeModelListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModelListResponse>;
  /** 获取插件详情 {@link DescribePluginRequest} {@link DescribePluginResponse} */
  DescribePlugin(data: DescribePluginRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginResponse>;
  /** 获取插件概要列表 {@link DescribePluginSummaryListRequest} {@link DescribePluginSummaryListResponse} */
  DescribePluginSummaryList(data: DescribePluginSummaryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginSummaryListResponse>;
  /** 发布记录列表 {@link DescribeReleaseListRequest} {@link DescribeReleaseListResponse} */
  DescribeReleaseList(data: DescribeReleaseListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseListResponse>;
  /** 查询发布任务 {@link DescribeReleaseSummaryRequest} {@link DescribeReleaseSummaryResponse} */
  DescribeReleaseSummary(data: DescribeReleaseSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleaseSummaryResponse>;
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
  /** 获取参数变量 {@link DescribeVariableRequest} {@link DescribeVariableResponse} */
  DescribeVariable(data: DescribeVariableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVariableResponse>;
  /** 获取参数变量列表 {@link DescribeVariableListRequest} {@link DescribeVariableListResponse} */
  DescribeVariableList(data: DescribeVariableListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVariableListResponse>;
  /** 收藏插件 {@link FavoritePluginRequest} {@link FavoritePluginResponse} */
  FavoritePlugin(data: FavoritePluginRequest, config?: AxiosRequestConfig): AxiosPromise<FavoritePluginResponse>;
  /** 收藏skill {@link FavoriteSkillRequest} {@link FavoriteSkillResponse} */
  FavoriteSkill(data: FavoriteSkillRequest, config?: AxiosRequestConfig): AxiosPromise<FavoriteSkillResponse>;
  /** 修改Agent配置 {@link ModifyAgentRequest} {@link ModifyAgentResponse} */
  ModifyAgent(data?: ModifyAgentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAgentResponse>;
  /** 修改应用 {@link ModifyAppRequest} {@link ModifyAppResponse} */
  ModifyApp(data: ModifyAppRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAppResponse>;
  /** 修改会话信息 {@link ModifyConversationRequest} {@link ModifyConversationResponse} */
  ModifyConversation(data: ModifyConversationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConversationResponse>;
  /** 修改插件 {@link ModifyPluginRequest} {@link ModifyPluginResponse} */
  ModifyPlugin(data: ModifyPluginRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPluginResponse>;
  /** 修改skill {@link ModifySkillRequest} {@link ModifySkillResponse} */
  ModifySkill(data: ModifySkillRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySkillResponse>;
  /** 编辑空间 {@link ModifySpaceRequest} {@link ModifySpaceResponse} */
  ModifySpace(data?: ModifySpaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySpaceResponse>;
  /** 更新参数变量 {@link ModifyVariableRequest} {@link ModifyVariableResponse} */
  ModifyVariable(data: ModifyVariableRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVariableResponse>;
  /** 上架skill {@link ReleaseSkillRequest} {@link ReleaseSkillResponse} */
  ReleaseSkill(data: ReleaseSkillRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseSkillResponse>;
  /** 重置会话 {@link ResetConversationRequest} {@link ResetConversationResponse} */
  ResetConversation(data: ResetConversationRequest, config?: AxiosRequestConfig): AxiosPromise<ResetConversationResponse>;
  /** 重试发布 {@link RetryReleaseRequest} {@link RetryReleaseResponse} */
  RetryRelease(data: RetryReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<RetryReleaseResponse>;
  /** 回滚发布 {@link RollbackReleaseRequest} {@link RollbackReleaseResponse} */
  RollbackRelease(data: RollbackReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackReleaseResponse>;
  /** 取消收藏插件 {@link UnfavoritePluginRequest} {@link UnfavoritePluginResponse} */
  UnfavoritePlugin(data: UnfavoritePluginRequest, config?: AxiosRequestConfig): AxiosPromise<UnfavoritePluginResponse>;
  /** 取消收藏skill {@link UnfavoriteSkillRequest} {@link UnfavoriteSkillResponse} */
  UnfavoriteSkill(data: UnfavoriteSkillRequest, config?: AxiosRequestConfig): AxiosPromise<UnfavoriteSkillResponse>;
}

export declare type Versions = ["2026-05-20"];

export default Adp;
