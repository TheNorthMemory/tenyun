/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** API密钥简略信息 */
declare interface APIKeyInfo {
  /** API密钥名称 */
  Name?: string;
  /** API密钥ID */
  KeyId?: string;
  /** 密钥状态。可以为API_KEY_STATUS_ACTIVE，或API_KEY_STATUS_INACTIVE */
  Status?: string;
  /** 隐藏部分字符的API密钥，方便用户辨认 */
  MaskedKey?: string;
  /** API密钥创建时间 */
  CreatedAt?: string;
}

/** 主账号配额总览 */
declare interface AccountQuotaOverview {
  /** 主账号各资源维度的配额上限 */
  Quota?: QuotaResourceInfo;
  /** 主账号各资源维度的当前用量 */
  Usage?: QuotaResourceInfo;
}

/** Deployment 对 Sandbox Instance 的亲和配置。 */
declare interface AffinityConfiguration {
  /** Affinity 模式。枚举值：BEST_EFFORT：优先复用原 Instance，不可用时允许改选。STRICT：只复用原 Instance，不可用时失败且不改选。EXCLUSIVE：一个 Affinity ID 独占一个 Instance，不能迁移。缺失或空字符串表示关闭 Affinity。 */
  Mode?: string;
  /** 请求和响应使用的 Affinity Header 名称。必须符合 HTTP field-name token 语法，长度为 1..128 个 ASCII 字节，且不能使用平台保留 Header。 */
  HeaderName?: string;
}

/** 用于记录 Agent Bucket 的 Storage Source */
declare interface AgentBucketStorageSource {
  /** 用于传入 AgentBucket 的 LibraryID */
  LibraryId?: string;
  /** 用于传入 AgentBucket 的 spaceId */
  SpaceId?: string;
  /** 用于传入 AgentBucket 的 AccessDomain */
  AccessDomain?: string;
}

/** 沙箱工具日志推送CLS相关配置 */
declare interface CLSConfig {
  /** 沙箱工具日志推送所使用的CLS日志主题ID */
  TopicId?: string;
}

/** 文件存储配置 */
declare interface CfsStorageSource {
  /** CFS资源ID */
  FileSystemId?: string;
  /** CFS挂载路径 */
  Path?: string;
}

/** Agent Record 内容来源。Type 判别 MANUAL 与 URL_IMPORT。 */
declare interface CloudAgentSourceInput {
  /** 来源类型。MANUAL：直接提交 Agent Descriptors JSON 文本；URL_IMPORT：从远端 Agent Card / AGUI 端点导入。 */
  Type: string | null;
  /** Type=MANUAL 时必填；值为通用 JSON object 文本；A2A 标准校验或 AGUI/CUSTOM 规则由后端执行。（JSON 字符串形式） */
  Descriptors?: string | null;
  /** A2A：Agent Card URL；AGUI：Runtime Endpoint URL。Type=URL_IMPORT 时必填，HTTPS。 */
  EndpointURL?: string | null;
}

/** 审计日志条目。记录 Registry / Record / Version 维度的动作。 */
declare interface CloudAuditLog {
  /** 审计日志 ID。 */
  AuditLogId: string | null;
  /** 所属 Registry ID。 */
  RegistryId: string | null;
  /** 动作发起者（主账号 UIN 或子账号 UIN）。 */
  Actor: string | null;
  /** Action 名称，等同 X-TC-Action。 */
  Action: string | null;
  /** 动作脱敏摘要对象；使用云 API 字段命名，字段随 Action 而变；不包含凭据、预签名 URL 或完整 Descriptor。（JSON 字符串形式） */
  Details: string | null;
  /** 动作发生时间。 */
  CreateTime: string | null;
  /** 关联 Record ID；仅 Record / Version 相关动作。 */
  RecordId?: string | null;
  /** 关联 Version ID；仅 Version 相关动作。 */
  VersionId?: string | null;
}

/** 通用过滤条件。Name 为字段名，Values 为字段候选值；字段间 AND、Values 内 OR。 */
declare interface CloudFilter {
  /** 过滤字段名。DescribeRegistryList 支持 name / search（模糊搜索）与 archived / status（true / false / all）；DescribeRegistryRecordList 支持 name / search（模糊）、descriptor-type、lifecycle-status（精确）。 */
  Name: string | null;
  /** 过滤字段候选值列表；至少 1 项。 */
  Values: string[] | null;
}

/** MCP Record 内容来源。Type 判别 MANUAL 与 URL_IMPORT。 */
declare interface CloudMCPSourceInput {
  /** 来源类型。MANUAL：直接提交 MCP Descriptors JSON 文本；URL_IMPORT：从远端 MCP server.json URL 导入。 */
  Type: string | null;
  /** Type=MANUAL 时必填；值为完整 MCP server.json 对象的 JSON 文本；完整 MCP 2025-12-11 标准校验由后端执行。（JSON 字符串形式） */
  Descriptors?: string | null;
  /** 远端 MCP server.json URL；HTTPS。Type=URL_IMPORT 时必填。Version 从远端 initialize.serverInfo.version 观测获得，无需请求参数。 */
  EndpointURL?: string | null;
}

/** Registry Record 对象。Record 只保存元数据；协议描述符与内容状态请通过 Version 相关接口获取。 */
declare interface CloudRecord {
  /** Record ID；格式 rec- + 8 位小写字母/数字。 */
  RecordId: string | null;
  /** 所属 Registry ID。 */
  RegistryId: string | null;
  /** Record 名称；同一 Registry 内可重复。 */
  Name: string | null;
  /** 描述。 */
  Description: string | null;
  /** 协议描述符类型；创建后不可变。 */
  DescriptorType: string | null;
  /** 生命周期状态。ACTIVE：可用；DELETED：软删除墓碑，不再参与常规查询、下发或版本配额。 */
  LifecycleStatus: string | null;
  /** 所属租户 AppId。 */
  AppId: number | null;
  /** 创建者主账号 UIN。 */
  CreatorUin: string | null;
  /** 创建者子账号 UIN；主账号直接创建时为空。 */
  CreatorSubAccountUin: string | null;
  /** 创建时间，ISO 8601 UTC。 */
  CreateTime: string | null;
  /** 最近一次更新时间。 */
  UpdateTime: string | null;
  /** Record 下未删除 Version 数量。 */
  VersionCount?: number | null;
  /** Record 下所有 Label Name（含未绑定 Label），包括系统 Label（stable / latest）和自定义 Label。仅名称，不含 VersionId、更新时间或操作者。 */
  LabelSet?: string[] | null;
}

/** Record Label 变更操作项。Operation=SET 时可携带 VersionId；DELETE 时禁止 VersionId。 */
declare interface CloudRecordLabelMutation {
  /** 操作类型。SET：创建或移动 Label；DELETE：删除自定义 Label（stable/latest 保留 Label 禁止删除）。 */
  Operation: string | null;
  /** Label 名称，长度 1..63，格式 ^[a-z][a-z0-9._-]{0,62}$，按小写规范化。stable、latest 为系统保留 Label。 */
  Name: string | null;
  /** 目标 Version ID。SET 时可选：省略表示未绑定（自定义 Label 允许，stable 禁止）；DELETE 时禁止携带。 */
  VersionId?: string | null;
  /** 变更原因，最大 1024 字符，可选。 */
  Reason?: string | null;
}

/** Record 的一个不可变 Version 快照；记录了描述符、来源配置与审批状态。 */
declare interface CloudRecordVersion {
  /** Version ID；格式 rv- + 8 位小写字母/数字。 */
  VersionId?: string | null;
  /** 所属 Record ID。 */
  RecordId?: string | null;
  /** Version 递增序号（1 起）。 */
  Revision?: number | null;
  /** Version 状态。 */
  Status?: string | null;
  /** 审批模式；创建时锁定，后续变更 Registry 审批模式不影响本 Version。 */
  ApprovalMode?: string | null;
  /** 所属租户 AppId。 */
  AppId?: number | null;
  /** 创建者主账号 UIN。 */
  CreatorUin?: string | null;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 最近一次更新时间。 */
  UpdateTime?: string | null;
  /** Version 别名（可选）。 */
  VersionName?: string | null;
  /** 协议描述符对象。（JSON 字符串形式） */
  Descriptors?: string | null;
  /** 内容来源。 */
  SourceType?: string | null;
  /** 规范化来源配置对象。（JSON 字符串形式） */
  SourceConfig?: string | null;
  /** 内容状态。 */
  ContentStatus?: string | null;
  /** READY 内容 SHA-256。 */
  ContentSHA256?: string | null;
  /** READY 内容字节数。 */
  ContentSizeBytes?: number | null;
  /** 配置内容规范化后的 SHA-256（用于幂等去重）。 */
  ConfigSHA256?: string | null;
  /** 创建者子账号 UIN。 */
  CreatorSubAccountUin?: string | null;
  /** Version 历次审批动作。 */
  ApprovalActions?: CloudVersionApprovalAction[] | null;
  /** TAR 内容成功校验、完成物化并进入 READY 的时间；MANUAL / URL_IMPORT 或尚未 READY 的 TAR_PACKAGE 均为空。 */
  ContentReadyTime?: string | null;
  /** 本次 Version 的变更原因，最大 4096 字符；不可修改。Revision 1 或未填写时返回空字符串。 */
  ChangeLog?: string | null;
  /** 当前绑定该 Version 的 Label Name 列表（例如 stable / latest 或自定义 Label 名称）。未绑定 Label 不在此返回。 */
  LabelSet?: string[] | null;
}

/** Registry 对象。包含注册中心的基本信息与 Record 计数。 */
declare interface CloudRegistry {
  /** Registry ID；格式 reg- + 8 位小写字母/数字。 */
  RegistryId: string | null;
  /** Registry 同一 AppId + Region 唯一名称。 */
  Name: string | null;
  /** 描述。 */
  Description: string | null;
  /** 审批模式；AUTO 自动通过，MANUAL 需人工审批；创建时确定，不可修改。 */
  ApprovalMode: string | null;
  /** Registry 所在腾讯云地域，如 ap-guangzhou。 */
  Region: string | null;
  /** Registry 状态。ACTIVE / ARCHIVED。 */
  Status: string | null;
  /** 创建时间，ISO 8601 UTC，如 2026-08-11T10:00:00Z。 */
  CreateTime: string | null;
  /** 最近一次更新时间，ISO 8601 UTC。 */
  UpdateTime: string | null;
  /** Registry 下 Record 总数。 */
  RecordCount: number | null;
  /** 权威读取的腾讯云自定义标签，按 Key、Value 稳定排序；无标签时固定返回空数组，不返回 null。 */
  Tags: CloudTag[];
  /** Stable Label 已绑定的 Record 数量。Approved Version 数量和可对外消费的 Record 数量已不再等价。 */
  PublishedRecordCount?: number | null;
  /** 所属租户 AppId。 */
  AppId?: number | null;
  /** 创建者主账号 UIN。 */
  CreatorUin?: string | null;
  /** 创建者子账号 UIN；主账号直接创建时为空字符串。 */
  CreatorSubAccountUin?: string | null;
}

/** AGENT_SKILLS 内容来源。Type 判别 MANUAL 与 TAR_PACKAGE 两种模式。 */
declare interface CloudSkillSourceInput {
  /** 来源类型。MANUAL：直接提交 SKILL.md 文本；TAR_PACKAGE：由服务端签发 COS PUT 预签名 URL，客户端上传后由服务端异步校验。 */
  Type: string | null;
  /** SKILL.md 原文；Type=MANUAL 时必填非空；Type=TAR_PACKAGE 时不得提供。 */
  SkillMd?: string | null;
}

/** 腾讯云自定义标签。 */
declare interface CloudTag {
  /** 自定义标签键；不可使用 qcs:、project 或项目预留前缀，且不可包含首尾空格。 */
  Key: string | null;
  /** 自定义标签值，不可包含首尾空格。 */
  Value: string | null;
}

/** Version 一次审批动作条目。 */
declare interface CloudVersionApprovalAction {
  /** 动作 ID。 */
  ActionId?: string | null;
  /** 动作类型。 */
  ActionType?: string | null;
  /** 动作发起者类型。USER 用户；SYSTEM 系统自动通过。 */
  ActorType?: string | null;
  /** 发起者主账号 UIN。 */
  ActorUin?: string | null;
  /** 发起者子账号 UIN。 */
  ActorSubAccountUin?: string | null;
  /** 动作留言。 */
  Comment?: string | null;
  /** 发生时间。 */
  CreateTime?: string | null;
  /** 对应云 API 请求的 RequestId。 */
  RequestId?: string | null;
}

/** 桌面电脑环境类沙箱配置 */
declare interface ComputerConfiguration {
  /** waa沙箱工具配置 */
  WAAConfiguration?: WAAConfiguration;
  /** 配置内置 OSWorld */
  OSWorldConfiguration?: OSWorldConfiguration;
}

/** 沙箱实例对象存储挂载配置 */
declare interface CosStorageSource {
  /** 对象存储访问域名 */
  Endpoint?: string;
  /** 对象存储桶名称 */
  BucketName?: string;
  /** 对象存储桶路径，必须为以/起始的绝对路径 */
  BucketPath?: string;
}

/** 沙箱自定义配置 */
declare interface CustomConfiguration {
  /** 镜像地址 */
  Image?: string;
  /** 镜像仓库类型：enterprise、personal、custom枚举值：enterprise： tcr 企业容器镜像服务personal： ccr 个人容器镜像服务 */
  ImageRegistryType?: string;
  /** 启动命令 */
  Command?: string[];
  /** 启动参数 */
  Args?: string[];
  /** 环境变量 */
  Env?: EnvVar[];
  /** 端口配置 */
  Ports?: PortConfiguration[];
  /** 资源配置 */
  Resources?: ResourceConfiguration;
  /** 探针配置 */
  Probe?: ProbeConfiguration;
  /** 沙箱 DNS 配置 */
  DNSConfig?: DNSConfig;
}

/** 沙箱自定义配置详细信息 */
declare interface CustomConfigurationDetail {
  /** 镜像地址 */
  Image?: string;
  /** 镜像仓库类型：enterprise、personal、custom。枚举值：enterprise： TCR 企业容器镜像服务personal： CCR 个人容器镜像服务 */
  ImageRegistryType?: string;
  /** 镜像 Digest */
  ImageDigest?: string;
  /** 启动命令 */
  Command?: string[];
  /** 启动参数 */
  Args?: string[];
  /** 环境变量 */
  Env?: EnvVar[];
  /** 端口配置 */
  Ports?: PortConfiguration[];
  /** 资源配置 */
  Resources?: ResourceConfiguration;
  /** 探针配置 */
  Probe?: ProbeConfiguration;
  /** 沙箱 DNS 配置 */
  DNSConfig?: DNSConfig;
}

/** 沙箱自定义 dns 配置 */
declare interface DNSConfig {
  /** DNS 服务器地址参数格式：需要有效 IP 地址默认值：10.0.0.1 */
  Servers: string[];
  /** 搜索域(对应 resolv.conf 的 search 指令) */
  Searches?: string[];
  /** 配置项(对应 resolv.conf 选项) */
  Options?: string[];
}

/** Deployment 稳定访问入口定义 */
declare interface Deployment {
  /** Deployment 稳定 ID，格式为 dpl- 加 8 位小写 base36 字符。 */
  DeploymentId?: string;
  /** 唯一且创建后不可修改的名称，必须符合 DNS-1123 命名规范。 */
  DeploymentName?: string;
  /** 用于关联 Sandbox Tool 的标识，格式为 sdt- 加 8 位小写 base36 字符。 */
  ToolId?: string;
  /** 完整的活跃容量配置。 */
  ScalingConfiguration?: ScalingConfiguration;
  /** 完整的空闲生命周期配置。 */
  LifecycleConfiguration?: LifecycleConfiguration;
  /** 可选 Affinity 配置；未启用时省略。 */
  AffinityConfiguration?: AffinityConfiguration;
  /** Deployment 控制面状态。枚举值：ACTIVE：入口可用。DELETING：入口已关闭并正在异步删除。DELETE_FAILED：最近一次异步删除失败，可再次调用 DeleteDeployment。 */
  Status?: string;
  /** DELETE_FAILED 状态下 1..1024 个 UTF-8 字节的安全失败摘要，格式为 {Code}[.{SubCode}]: {Message}；其他状态省略。 */
  StatusReason?: string;
  /** 创建时间，UTC、秒精度 RFC3339 格式。 */
  CreatedTime?: string;
  /** 最近一次成功公共配置写入或 Deployment 状态迁移时间，UTC、秒精度 RFC3339 格式。 */
  UpdatedTime?: string;
  /** 标签 */
  Tags?: Tag[];
}

/** 环境变量 */
declare interface EnvVar {
  /** 环境变量名 */
  Name?: string;
  /** 环境变量值 */
  Value?: string;
}

/** Agent 状态切换事件信息 */
declare interface EventActionsInfo {
  /** 状态增量，JSON 字符串，最大长度 8192 字符。 */
  StateDelta?: string | null;
}

/** 事件内容信息 */
declare interface EventContentInfo {
  /** 角色，最大长度 64 字符。 */
  Role?: string | null;
  /** 内容片段列表。 */
  Parts?: EventPartInfo[] | null;
}

/** 事件信息 */
declare interface EventInfo {
  /** 事件 ID。为空时由服务生成。 */
  EventId?: string | null;
  /** 调用 ID，最大长度 128 字符。 */
  InvocationId?: string | null;
  /** 事件作者，最大长度 128 字符。 */
  Author?: string | null;
  /** 事件内容。 */
  Content?: EventContentInfo | null;
  /** 事件动作信息。StateDelta 为 JSON 对象字符串 */
  Actions?: EventActionsInfo | null;
  /** 事件元数据。 */
  Metadata?: string | null;
  /** 事件扩展信息 JSON 对象字符串，最大长度 8192 字符。 */
  Extensions?: string | null;
  /** 错误码，最大长度 128 字符。 */
  ErrorCode?: string | null;
  /** 错误信息，最大长度 2048 字符。 */
  ErrorMessage?: string | null;
  /** 事件时间。 */
  Timestamp?: string;
}

/** 多模态内容片段信息 */
declare interface EventPartInfo {
  /** 文本内容，最大长度 8192 字符。 */
  Text?: string | null;
  /** 是否为思考内容。 */
  Thought?: boolean | null;
  /** 工具调用信息，JSON 字符串，最大长度 8192 字符。 */
  FunctionCall?: string | null;
  /** 工具返回信息，JSON 字符串，最大长度 8192 字符。 */
  FunctionResponse?: string | null;
  /** 内联数据。 */
  InlineData?: InlineDataInfo | null;
}

/** 过滤列表规则 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name?: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values?: string[];
}

/** HTTP GET 探测动作配置 */
declare interface HttpGetAction {
  /** 路径 */
  Path?: string;
  /** 端口 */
  Port?: number;
  /** 协议 */
  Scheme?: string;
}

/** 镜像卷挂载源配置 */
declare interface ImageStorageSource {
  /** 镜像地址 */
  Reference?: string;
  /** 镜像仓库类型：enterprise、personal。 */
  ImageRegistryType?: string;
  /** 镜像内部的路径 */
  SubPath?: string;
  /** 镜像 Digest，请求时无需传入 */
  Digest?: string;
}

/** 文件内容数据信息 */
declare interface InlineDataInfo {
  /** 媒体类型，最大长度 128 字符。 */
  MimeType?: string | null;
  /** Base64 编码数据，最大长度 8192 字符。 */
  Data?: string | null;
}

/** Deployment 管理的 Sandbox Instance 的空闲生命周期配置 */
declare interface LifecycleConfiguration {
  /** Sandbox Instance 没有活跃 Deployment 请求或连接后进入 IdleAction 的秒数，必须大于等于 30。 */
  IdleTimeoutSeconds?: number;
  /** 空闲处理动作。枚举值：STOP：停止并释放 Sandbox Instance。PAUSE：暂停并保留 Sandbox Instance 状态。 */
  IdleAction?: string;
}

/** 沙箱工具日志采集相关配置 */
declare interface LogConfiguration {
  /** 日志推送CLS的配置。 */
  CLSConfig?: CLSConfig;
  /** 日志源配置 */
  LogSources?: LogSources;
}

/** 日志源配置 */
declare interface LogSources {
  /** 需要采集的日志文件路径，必须是 /logs/ 目录下的文件，不支持子目录，最大支持 10 个文件。 */
  Files?: string[] | null;
}

/** metadata 项 */
declare interface MetadataVar {
  /** 元数据名 */
  Name?: string;
  /** 元数据值 */
  Value?: string;
}

/** 沙箱实例存储挂载配置可选项，用于覆盖沙箱工具的存储配置的部分选项，并提供子路径挂载配置。 */
declare interface MountOption {
  /** 指定沙箱工具中的存储配置名称 */
  Name?: string;
  /** 沙箱实例本地挂载路径（可选），默认继承工具中的存储配置 */
  MountPath?: string;
  /** 沙箱实例存储挂载子路径（可选） */
  SubPath?: string;
  /** 沙箱实例存储挂载读写权限（可选），默认继承工具存储配置 */
  ReadOnly?: boolean;
}

/** 沙箱网络配置 */
declare interface NetworkConfiguration {
  /** 网络模式（当前支持 PUBLIC, VPC, SANDBOX） */
  NetworkMode: string;
  /** VPC网络相关配置 */
  VpcConfig?: VPCConfig;
}

/** OSWorld 内置版本配置 */
declare interface OSWorldConfiguration {
  /** 指定内置 OSWorld 版本枚举值：osworld1： osworld v1osworld2： osworld v2默认值：osworld1 */
  Version?: string;
}

/** 端口配置 */
declare interface PortConfiguration {
  /** 端口名 */
  Name?: string;
  /** 端口 */
  Port?: number;
  /** 协议 */
  Protocol?: string;
}

/** 健康检查探针配置 */
declare interface ProbeConfiguration {
  /** HTTP GET 探测配置 */
  HttpGet?: HttpGetAction;
  /** 健康检查就绪超时 */
  ReadyTimeoutMs?: number;
  /** 健康检查单次探测超时 */
  ProbeTimeoutMs?: number;
  /** 健康检查间隔 */
  ProbePeriodMs?: number;
  /** 健康检查成功阈值 */
  SuccessThreshold?: number;
  /** 健康检查失败阈值 */
  FailureThreshold?: number;
}

/** 配额组资源信息 */
declare interface QuotaGroupOverview {
  /** 配额组关联的标签键值 */
  Tag?: Tag;
  /** 配额组名称 */
  Name?: string;
  /** 配额组各资源维度的配额上限 */
  Quota?: QuotaResourceInfo;
  /** 配额组各资源维度的当前用量 */
  Usage?: QuotaResourceInfo;
  /** 创建时间参数格式：RFC3339 格式 */
  CreateTime?: string;
  /** 最后更新时间参数格式：RFC3339 格式 */
  UpdateTime?: string;
}

/** 主账号资源信息 */
declare interface QuotaResourceInfo {
  /** 沙箱工具配额或当前用量单位：个 */
  SandboxTools?: number;
  /** 沙箱实例配额或当前用量单位：个 */
  SandboxInstances?: number;
  /** 暂停实例配额或当前用量单位：个 */
  PausedInstances?: number;
  /** 暂停实例配额或当前用量。目前只在主账号中返回单位：核 */
  CPUCores?: number;
  /** 内存配额或当前用量单位：GiB */
  MemoryGiB?: number;
}

/** 资源配置 */
declare interface ResourceConfiguration {
  /** cpu 资源量 */
  CPU?: string;
  /** 内存资源量 */
  Memory?: string;
  /** 自定义磁盘大小枚举值：1Gi： 1Gi5Gi： 5Gi10Gi： 10Gi20Gi： 20Gi */
  Storage?: string | null;
}

/** 沙箱实例结构体 */
declare interface SandboxInstance {
  /** 沙箱实例唯一标识符 */
  InstanceId: string;
  /** 所属沙箱工具 ID */
  ToolId: string;
  /** 所属沙箱工具名称 */
  ToolName: string;
  /** 实例状态：STARTING（启动中）、RUNNING（运行中）、STOPPING（停止中）、STOPPED（已停止）、STOP_FAILED（停止失败）、FAILED（失败状态） */
  Status: string;
  /** 是否常驻实例 */
  Persistent?: boolean;
  /** 超时时间（秒），null 表示无超时设置 */
  TimeoutSeconds?: number;
  /** 过期时间（ISO 8601 格式），null 表示无过期时间 */
  ExpiresAt?: string;
  /** 停止原因：manual（手动）、timeout（超时）、error（错误）、system（系统），仅在状态为 STOPPED、STOP_FAILED 或 FAILED 时有值。当 provider 停止失败时，状态为 STOP_FAILED，原因为 error */
  StopReason?: string;
  /** 创建时间（ISO 8601 格式） */
  CreateTime?: string;
  /** 更新时间（ISO 8601 格式） */
  UpdateTime?: string;
  /** 存储挂载选项 */
  MountOptions?: MountOption[];
  /** 沙箱实例自定义配置 */
  CustomConfiguration?: CustomConfigurationDetail;
  /** 桌面电脑环境类沙箱配置 */
  ComputerConfiguration?: ComputerConfiguration;
  /** 网络模式枚举值：PUBLIC： 公网访问SANDBOX： 无网络INTERNAL_SERVICE： 腾讯云内部公共服务可以覆盖工具级别的网络配置。但如果一个工具本身就不支持 VPC 网络，那么即便在实例设置里选了 VPC 模式，也是无效的 */
  NetworkMode?: string;
  /** 沙箱实例元数据 */
  Metadata?: MetadataVar[];
  /** 沙箱访问认证模式枚举值：DEFAULT： 默认，即 TOKEN 认证TOKEN： Token认证，即所有端口访问都需携带TOKENNONE： 免认证，即所有端口访问无需携带TOKENPUBLIC： 公开模式，即ENVD管理端口（49983）访问需携带TOKEN，其他端口无需携带TOKEN默认值：DEFAULT */
  AuthMode?: string;
}

/** 沙箱工具结构体 */
declare interface SandboxTool {
  /** 沙箱工具唯一标识符 */
  ToolId: string;
  /** 沙箱工具名称，长度 1-50 字符，支持中英文、数字、下划线。同一 AppId 下沙箱工具名称必须唯一 */
  ToolName?: string;
  /** 沙箱工具类型，取值：browser（浏览器工具）、code-interpreter（代码解释器工具）、computer（计算机控制工具）、mobile（移动设备工具） */
  ToolType?: string;
  /** 沙箱工具状态，取值：CREATING（创建中）、ACTIVE（可用）、DELETING（删除中）、FAILED（失败） */
  Status?: string;
  /** 沙箱工具描述信息，最大长度 200 字符 */
  Description?: string;
  /** 是否常驻沙箱 */
  Persistent?: boolean;
  /** 默认超时时间，支持格式：5m、300s、1h 等，不指定则使用系统默认值（5 分钟）。最大 24 小时 */
  DefaultTimeoutSeconds?: number;
  /** 网络配置 */
  NetworkConfiguration?: NetworkConfiguration;
  /** 标签规格，包含资源标签绑定关系。用于为沙箱工具绑定标签，支持多种资源类型的标签绑定 */
  Tags?: Tag[];
  /** 沙箱工具创建时间，格式：ISO8601 */
  CreateTime?: string;
  /** 沙箱工具更新时间，格式：ISO8601 */
  UpdateTime?: string;
  /** 沙箱工具绑定角色ARN */
  RoleArn?: string;
  /** 沙箱工具中实例存储挂载配置 */
  StorageMounts?: StorageMount[];
  /** 沙箱工具自定义配置 */
  CustomConfiguration?: CustomConfigurationDetail;
  /** 沙箱工具日志推送相关配置 */
  LogConfiguration?: LogConfiguration;
  /** 桌面电脑环境类沙箱配置 */
  ComputerConfiguration?: ComputerConfiguration;
  /** 用于说明沙箱工具处于该状态的原因 */
  StatusReason?: string;
}

/** Deployment 活跃容量配置 */
declare interface ScalingConfiguration {
  /** 活跃 Sandbox Instance 下限，必须大于等于 0。 */
  MinInstanceCount?: number;
  /** 活跃 Sandbox Instance 上限，必须大于等于 1，并且不小于 MinInstanceCount。 */
  MaxInstanceCount?: number;
  /** 每个活跃 Sandbox Instance 同时持有的 Deployment 请求或连接 Lease 上限，必须大于等于 1。 */
  MaxInstanceRequestConcurrency?: number;
}

/** 会话信息 */
declare interface SessionInfo {
  /** 会话 ID。 */
  SessionId?: string;
  /** 会话所属空间 ID。 */
  SpaceId?: string;
  /** Session 快照状态 */
  State?: SessionState;
  /** 会话元数据，以键值对数组形式表示。每个元素包含 Metadata 名称和对应值，最多支持 64 项。 */
  Metadata?: MetadataVar[];
  /** Agent ID。 */
  AgentId?: string;
  /** 用户 ID。 */
  UserId?: string;
  /** 会话标题。 */
  Title?: string;
  /** 事件数量。 */
  EventCount?: number;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 描述会话空间的完整信息。会话空间是用户状态、会话和事件的上级资源及隔离边界，同一个会话只能属于一个会话空间。 */
declare interface SessionSpaceInfo {
  /** 会话空间唯一标识，由服务端生成，最大长度为 128 个字符。调用方不应自行构造或解析。 */
  SpaceId?: string;
  /** 会话空间名称，用于标识会话空间的业务用途，最大长度为 128 个字符。 */
  Name?: string;
  /** 会话空间描述，用于说明业务用途和使用范围，最大长度为 512 个字符。为空时该字段可能不返回 */
  Description?: string;
  /** 会话空间当前状态。枚举值：Active： 正常可用Deleting： 正在删除 */
  Status?: string;
  /** 是否为系统默认会话空间。true 表示默认会话空间，false 表示普通会话空间。默认会话空间不允许删除。 */
  Default?: boolean;
  /** 会话空间创建时间，采用 ISO 8601/RFC 3339 格式。 */
  CreateTime?: string;
  /** 会话空间最后更新时间，采用 ISO 8601/RFC 3339 格式。 */
  UpdateTime?: string;
}

/** Session 快照状态 */
declare interface SessionState {
  /** 自定义状态 JSON 对象字符串 */
  CustomState?: string;
}

/** 沙箱工具中实例存储挂载配置 */
declare interface StorageMount {
  /** 存储挂载配置名称 */
  Name?: string;
  /** 存储配置 */
  StorageSource?: StorageSource | null;
  /** 沙箱实例本地挂载路径 */
  MountPath?: string;
  /** 存储挂载读写权限配置，默认为false */
  ReadOnly?: boolean;
}

/** 挂载存储配置 */
declare interface StorageSource {
  /** 对象存储桶配置 */
  Cos?: CosStorageSource;
  /** 镜像卷配置 */
  Image?: ImageStorageSource;
  /** 文件存储配置 */
  Cfs?: CfsStorageSource;
  /** AgentBucket 存储配置 */
  AgentBucket?: AgentBucketStorageSource;
}

/** 标签 */
declare interface Tag {
  /** 标签键 */
  Key?: string;
  /** 标签值 */
  Value?: string;
}

/** 沙箱工具VPC相关配置 */
declare interface VPCConfig {
  /** VPC子网ID列表 */
  SubnetIds?: string[];
  /** 安全组ID列表 */
  SecurityGroupIds?: string[];
}

/** waa自定义配置项 */
declare interface WAAConfiguration {
  /** 自定义waa镜像ID */
  ImageId?: string;
}

declare interface AcquireDeploymentTokenRequest {
  /** 目标 ACTIVE Deployment 的稳定 ID。 */
  DeploymentId: string;
}

declare interface AcquireDeploymentTokenResponse {
  /** 只用于目标 Deployment 数据面入口的短期 bearer Token，格式为 dpt_ 加非空、无 padding 的 Base64URL opaque 后缀。 */
  Token?: string;
  /** Token 的绝对过期时间，UTC、秒精度 RFC3339 格式。 */
  ExpiresAt?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AcquireSandboxInstanceTokenRequest {
  /** 沙箱实例ID，生成的访问Token将仅可用于访问此沙箱实例 */
  InstanceId: string;
}

declare interface AcquireSandboxInstanceTokenResponse {
  /** 访问Token */
  Token?: string;
  /** 过期时间 */
  ExpiresAt?: string;
  /** 除管控面envd端口(49983)以外端口的访问Token */
  TrafficToken?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AppendEventRequest {
  /** 会话所属空间 ID。 */
  SpaceId: string;
  /** 用户 ID。可通过调用方业务系统接口获取。 */
  UserId: string;
  /** 会话 ID。可通过 CreateSession 或 DescribeSessions 接口获取。 */
  SessionId: string;
  /** 事件内容。 */
  Event: EventInfo;
  /** Agent ID。可选。 */
  AgentId?: string;
}

declare interface AppendEventResponse {
  /** 事件信息。 */
  Event?: EventInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApproveRegistryRecordRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** Version ID。 */
  VersionId: string;
  /** 动作留言；非空。 */
  Comment: string;
}

declare interface ApproveRegistryRecordResponse {
  /** 更新后的 Version。 */
  Version?: CloudRecordVersion;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelRegistryRecordRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** Version ID。 */
  VersionId: string;
  /** 动作留言；非空。 */
  Comment: string;
}

declare interface CancelRegistryRecordResponse {
  /** 更新后的 Version。 */
  Version?: CloudRecordVersion;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAPIKeyRequest {
  /** API密钥名称，方便用户记忆 */
  Name?: string;
}

declare interface CreateAPIKeyResponse {
  /** 用户传入的API密钥名称，方便用户记忆 */
  Name?: string;
  /** 生成的API密钥，仅返回此一次，后续无法获取 */
  APIKey?: string;
  /** API密钥ID */
  KeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDeploymentRequest {
  /** 唯一的 Deployment 名称，必须符合 DNS-1123 命名规范，创建后不可修改。 */
  DeploymentName: string;
  /** 用于关联 Sandbox Tool 的标识，格式为 sdt- 加 8 位小写 base36 字符。 */
  ToolId?: string;
  /** 伸缩配置；省略的成员由服务端补全默认值。 */
  ScalingConfiguration?: ScalingConfiguration;
  /** 空闲生命周期配置；省略的成员由服务端补全默认值。 */
  LifecycleConfiguration?: LifecycleConfiguration;
  /** Affinity 配置；省略或空 Mode 表示不启用。 */
  AffinityConfiguration?: AffinityConfiguration;
  /** 标签 */
  Tags?: Tag[];
}

declare interface CreateDeploymentResponse {
  /** 已创建并完成默认值物化的 Deployment。 */
  Deployment?: Deployment;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePreCacheImageTaskRequest {
  /** 镜像地址 */
  Image: string;
  /** 镜像仓库类型：enterprise、personal、custom枚举值：enterprise： tcr 企业容器镜像服务personal： ccr 个人容器镜像服务 */
  ImageRegistryType: string;
}

declare interface CreatePreCacheImageTaskResponse {
  /** 镜像地址 */
  Image?: string;
  /** 镜像 Digest */
  ImageDigest?: string;
  /** 镜像仓库类型：enterprise、personal。 */
  ImageRegistryType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRegistryRecordRequest {
  /** 所属 Registry ID。 */
  RegistryId: string;
  /** Record 名称，长度 1..255，同一租户、Registry 内按规范化 Name 唯一（大小写不敏感）；软删除后允许复用。 */
  Name: string;
  /** 协议描述符类型。MCP / A2A / AGUI / CUSTOM / AGENT_SKILLS。Record 创建后不可修改。 */
  DescriptorType: string;
  /** Record 描述，最大 4096 字符，可选，默认空。 */
  Description?: string;
  /** Revision 1 的展示名称，可选。 */
  VersionName?: string;
  /** DescriptorType=MCP 时必填，其他类型禁止。 */
  MCPSource?: CloudMCPSourceInput;
  /** DescriptorType=A2A 或 AGUI 时必填，其他类型禁止。 */
  AgentSource?: CloudAgentSourceInput;
  /** DescriptorType=AGENT_SKILLS 时必填，其他类型禁止。 */
  SkillSource?: CloudSkillSourceInput;
  /** DescriptorType=CUSTOM 时必填，其他类型禁止。内容必须是 JSON object 字符串；服务端解析后写入 CloudRecordVersion.Descriptors，Version 的 SourceType 固定为 MANUAL、SourceConfig 固定为空对象。 */
  CustomDescriptors?: string;
}

declare interface CreateRegistryRecordResponse {
  /** 新 Record ID。 */
  RecordId?: string | null;
  /** 新建的 Record 详情。 */
  Record?: CloudRecord;
  /** 本次创建的 Revision 1 Version 详情。 */
  Version?: CloudRecordVersion;
  /** SkillSource.Type=TAR_PACKAGE 时返回：TAR 包上传预签名 URL。 */
  UploadURL?: string | null;
  /** SkillSource.Type=TAR_PACKAGE 时返回：UploadURL 过期时间，ISO 8601 UTC。 */
  ExpireTime?: string | null;
  /** SkillSource.Type=TAR_PACKAGE 时返回：Version 内容当前状态（UPLOADING 等）。 */
  ContentStatus?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRegistryRequest {
  /** 同一 AppId + Region 唯一、长度 1–255 */
  Name: string;
  /** 描述文本；最长 4096。 */
  Description?: string;
  /** 审批模式；创建时确定，创建后不可修改；省略时默认为 AUTO，枚举值区分大小写。 */
  ApprovalMode?: string;
  /** 创建时绑定的腾讯云自定义标签；Key 不可重复；最多 10 个。 */
  Tags?: CloudTag[];
}

declare interface CreateRegistryResponse {
  /** 创建成功的 Registry ID。 */
  RegistryId?: string;
  /** Registry 详细信息。 */
  Registry?: CloudRegistry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSandboxToolRequest {
  /** 沙箱工具名称，长度 1-50 字符，支持英文、数字、下划线和连接线。同一 AppId 下沙箱工具名称必须唯一 */
  ToolName: string;
  /** 沙箱工具类型，目前支持：browser、code-interpreter、custom等枚举值：browser： browsercode-interpreter： code-interpretermobile： mobileosworld： osworldcustom： customswebench： swebenchaio： aioandroid-world： android-worldwaa： waa */
  ToolType: string;
  /** 网络配置 */
  NetworkConfiguration: NetworkConfiguration;
  /** 沙箱工具描述，最大长度 200 字符 */
  Description?: string;
  /** 默认超时时间，支持格式：5m、300s、1h 等，不指定则使用系统默认值（5 分钟）。最大 24 小时 */
  DefaultTimeout?: string;
  /** 标签规格，为沙箱工具绑定标签，支持多种资源类型的标签绑定 */
  Tags?: Tag[];
  /** 幂等性 Token，长度不超过 64 字符 */
  ClientToken?: string;
  /** 角色ARN */
  RoleArn?: string;
  /** 沙箱工具存储配置 */
  StorageMounts?: StorageMount[];
  /** 沙箱工具自定义配置 */
  CustomConfiguration?: CustomConfiguration;
  /** 桌面电脑环境类沙箱配置 */
  ComputerConfiguration?: ComputerConfiguration;
  /** 沙箱工具日志推送相关配置 */
  LogConfiguration?: LogConfiguration;
  /** 常驻沙箱标识 */
  Persistent?: boolean;
}

declare interface CreateSandboxToolResponse {
  /** 创建的沙箱工具 ID */
  ToolId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSessionRequest {
  /** 会话所属空间 ID。 */
  SpaceId: string;
  /** 用户 ID。可通过调用方业务系统接口获取。 */
  UserId: string;
  /** Agent ID。可选。 */
  AgentId?: string;
  /** 会话 ID。可通过 CreateSession 或 DescribeSessions 接口获取。 */
  SessionId?: string;
  /** 会话标题，最大长度 256 字符。 */
  Title?: string;
  /** 初始会话状态。 */
  State?: SessionState;
  /** 创建会话时设置的初始元数据，以键值对数组形式表示。每个元素包含 Metadata 名称和对应值。入参限制：本参数可选，最多支持 64 项。Name 不能为空或重复，最大长度为 253 字节；Value 最大长度为 1024 字节，允许为空字符串。Metadata 序列化后的总大小不能超过 64 KiB。 */
  Metadata?: MetadataVar[];
}

declare interface CreateSessionResponse {
  /** 会话信息。 */
  Session?: SessionInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSessionSpaceRequest {
  /** 会话空间名称，用于标识会话空间的业务用途。入参限制：必填；去除首尾空白后不能为空；最大长度为 128 个字符。建议名称包含业务和环境信息，便于识别和管理。 */
  Name: string;
  /** 会话空间描述，用于补充说明会话空间的业务用途。入参限制：选填；最大长度为 512 个字符。未传入时创建为空描述。 */
  Description?: string;
  /** 创建 SessionSpace 时为资源绑定标签。 */
  Tags?: Tag[];
}

declare interface CreateSessionSpaceResponse {
  /** 创建成功后的会话空间完整信息。接口成功时一定返回；接口失败时返回 Error，不会返回该字段。 */
  SessionSpace?: SessionSpaceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAPIKeyRequest {
  /** 需要删除的API密钥ID */
  KeyId: string;
}

declare interface DeleteAPIKeyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDeploymentRequest {
  /** 待删除的 Deployment ID。 */
  DeploymentId: string;
}

declare interface DeleteDeploymentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRegistryRecordRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** 可选。传入时只删除 Record 下指定 Version（软删除）；省略时删除整个 Record。显式传入空字符串或 null 返回 InvalidParameter.VersionId，不得回退为删除整个 Record。 */
  VersionId?: string;
  /** 删除原因，最大 1024 字符。删除单个 Version 时必填；删除整个 Record 时可选。 */
  Reason?: string;
}

declare interface DeleteRegistryRecordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRegistryRequest {
  /** Registry ID。 */
  RegistryId: string;
}

declare interface DeleteRegistryResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSandboxToolRequest {
  /** 沙箱工具ID */
  ToolId: string;
}

declare interface DeleteSandboxToolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSessionRequest {
  /** 会话所属空间 ID。 */
  SpaceId: string;
  /** 用户 ID。可通过调用方业务系统接口获取。 */
  UserId: string;
  /** 会话 ID。可通过 CreateSession 或 DescribeSessions 接口获取。 */
  SessionId: string;
  /** Agent ID。可选。 */
  AgentId?: string;
}

declare interface DeleteSessionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSessionSpaceRequest {
  /** 需要删除的会话空间唯一标识。 */
  SpaceId: string;
}

declare interface DeleteSessionSpaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAPIKeyListRequest {
}

declare interface DescribeAPIKeyListResponse {
  /** API密钥简略信息列表。 */
  APIKeySet?: APIKeyInfo[];
  /** 列表中API密钥数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeploymentListRequest {
  /** 分页偏移量，默认 0，必须大于等于 0。 */
  Offset?: number;
  /** 分页返回数量，默认 20，范围 1..200。 */
  Limit?: number;
  /** 查询过滤条件。Filter.Name 枚举值：deployment-id：按 DeploymentId 精确匹配deployment-name：按 DeploymentName 精确匹配deployment-name-like：按 DeploymentName 进行普通文本包含匹配，%、_ 等字符没有通配语义tool-id：按 ToolId 精确匹配status：按 Deployment 状态精确匹配，支持 ACTIVE、DELETING、DELETE_FAILED所有匹配均区分大小写。不同 Filter 之间为 AND，同一 Filter 的 Values 之间为 OR。 */
  Filters?: Filter[];
}

declare interface DescribeDeploymentListResponse {
  /** 当前页完整 Deployment；无匹配时为空数组。 */
  DeploymentSet?: Deployment[];
  /** 应用 Filters 后、分页前的结果总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeploymentRequest {
  /** 待查询的 Deployment ID。 */
  DeploymentId: string;
}

declare interface DescribeDeploymentResponse {
  /** 完整 Deployment。 */
  Deployment?: Deployment;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEventsRequest {
  /** 会话所属空间 ID。 */
  SpaceId: string;
  /** 用户 ID。可通过调用方业务系统接口获取。 */
  UserId: string;
  /** 会话 ID。可通过 CreateSession 或 DescribeSessions 接口获取。 */
  SessionId: string;
  /** Agent ID。可选。 */
  AgentId?: string;
  /** 事件作者。取值示例：user、assistant、tool。 */
  Author?: string;
  /** 起始时间，仅返回该时间之后的事件，使用 RFC3339 格式，最大长度 64 字符。 */
  AfterTimestamp?: string;
  /** 分页偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 50，最大值为 200。 */
  Limit?: number;
}

declare interface DescribeEventsResponse {
  /** 事件列表。 */
  Events?: EventInfo[];
  /** 符合条件的事件总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePreCacheImageTaskRequest {
  /** 镜像地址 */
  Image: string;
  /** 镜像 Digest */
  ImageDigest: string;
  /** 镜像仓库类型：enterprise、personal、custom 。枚举值：enterprise： tcr 企业容器镜像服务personal： ccr 个人容器镜像服务 */
  ImageRegistryType: string;
}

declare interface DescribePreCacheImageTaskResponse {
  /** 镜像地址 */
  Image?: string;
  /** 镜像 Digest */
  ImageDigest?: string;
  /** 镜像仓库类型：enterprise、personal。 */
  ImageRegistryType?: string;
  /** 镜像预热状态 */
  Status?: string;
  /** 镜像预热状态描述 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeQuotaOverviewRequest {
  /** 分页偏移量，从 0 开始，默认值为 0，必须大于等于 0。单位：偏移量 */
  Offset?: number;
  /** 每页返回的配额组数量单位：个 */
  Limit?: number;
  /** 配额组过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeQuotaOverviewResponse {
  /** 主账号配额上限及全账号当前用量 */
  AccountQuotaOverview?: AccountQuotaOverview;
  /** 当前分页下的配额组配额与用量列表。没有数据时返回空数组。 */
  QuotaGroupSet?: QuotaGroupOverview[];
  /** 满足过滤条件的配额组总数，不受当前分页大小影响。单位：个 */
  TotalCount?: number;
  /** 本次查询完成时间，格式为 RFC3339 */
  DataTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegistryAuditLogListRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId?: string;
  /** Version ID；仅过滤 Version 维度动作，可选。 */
  VersionId?: string;
  /** Action 精确过滤（如 record.version.create），可选。 */
  ActionFilter?: string;
  /** 发起者过滤（主账号 UIN 或子账号 UIN），可选。 */
  Actor?: string;
  /** 起始时间；ISO 8601，可选。 */
  StartTime?: string;
  /** 结束时间；ISO 8601，可选。 */
  EndTime?: string;
  /** 分页起始偏移，默认 0。 */
  Offset?: number;
  /** 分页条数，默认 20，最大 100。 */
  Limit?: number;
}

declare interface DescribeRegistryAuditLogListResponse {
  /** Record 维度的审计日志。 */
  AuditLogSet?: CloudAuditLog[];
  /** 符合条件的总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegistryListRequest {
  /** 分页起始偏移，默认 0。 */
  Offset?: number;
  /** 分页条数，默认 20，最大 100。 */
  Limit?: number;
  /** 过滤条件。Name 支持：name/search（模糊）、archived/status（true/false/all）、tag-key 和 tag:<key>；最多 6 个标签过滤组，每个标签过滤组最多 10 个 Values，同 Key 多值为 OR，不同 Key 为 AND。 */
  Filters?: CloudFilter[];
}

declare interface DescribeRegistryListResponse {
  /** Registry 对象数组。 */
  RegistrySet?: CloudRegistry[];
  /** 符合条件的总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegistryRecordListRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** 分页起始偏移，默认 0。 */
  Offset?: number;
  /** 分页条数，默认 20，最大 100。 */
  Limit?: number;
  /** 过滤条件。支持 Filter.Name：name/search（按 Record Name 模糊搜索）；其他名称返回 InvalidParameter.Filters.Name。 */
  Filters?: CloudFilter[];
}

declare interface DescribeRegistryRecordListResponse {
  /** Record 对象数组。 */
  RecordSet?: CloudRecord[];
  /** 符合条件的总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegistryRecordRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** Version ID，与 Label 互斥。指定时返回该 Version；均省略时等价于 Label=stable。 */
  VersionId?: string;
  /** Label 名称，与 VersionId 互斥。指定时返回 Label 当前指向的 Version；均省略时等价于 stable。 */
  Label?: string;
}

declare interface DescribeRegistryRecordResponse {
  /** Record 元数据和全部 Label。 */
  Record?: CloudRecord;
  /** 根据 VersionId / Label 解析得到的完整 Version。 */
  Version?: CloudRecordVersion | null;
  /** 解析方式：DEFAULT_STABLE / LABEL / VERSION_ID。 */
  ResolvedBy?: string | null;
  /** 通过 Label 解析（ResolvedBy=LABEL 或 DEFAULT_STABLE）时返回该 Label 名称，例如 stable。 */
  ResolvedLabel?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegistryRecordVersionListRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** 分页起始偏移，默认 0。 */
  Offset?: number;
  /** 分页条数，默认 20，最大 100。 */
  Limit?: number;
  /** 过滤条件。支持：status（按 Version 状态：PREPARING/PENDING_APPROVAL/APPROVED/REJECTED/CANCELED，多值 OR）、source_type（按内容来源：MANUAL/URL_IMPORT/TAR_PACKAGE，多值 OR）。 */
  Filters?: CloudFilter[];
}

declare interface DescribeRegistryRecordVersionListResponse {
  /** Version 对象数组。 */
  VersionSet?: CloudRecordVersion[];
  /** 符合条件的总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegistryRequest {
  /** Registry ID。 */
  RegistryId: string;
}

declare interface DescribeRegistryResponse {
  /** Registry 详情。 */
  Registry?: CloudRegistry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSandboxInstanceListRequest {
  /** 沙箱实例ID列表，指定要查询的实例。如果为空则查询所有实例。最大支持100个ID */
  InstanceIds?: string[];
  /** 沙箱工具ID，指定时查询该沙箱模板下的实例，为空则查询所有沙箱模板的实例 */
  ToolId?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
  /** 过滤条件 */
  Filters?: Filter[];
  /** 每次调用返回的最大结果数。如果查询返回的时候有NextToken返回，您可以使用NextToken值获取更多页结果， 当NextToke返回空或者返回的结果数量小于MaxResults时，表示没有更多数据了。允许的最大页面大小为 100。 */
  MaxResults?: number;
  /** 如果NextToken返回非空字符串 ，表示还有更多可用结果。 NextToken是每个页面唯一的分页令牌。使用返回的令牌再次调用以检索下一页。需要保持所有其他参数不变。每个分页令牌在 24 小时后过期。 */
  NextToken?: string;
  /** 是否返回符合当前查询条件的沙箱实例总数，仅在使用 MaxResults/NextToken 分页时生效。设置为 true 时，首次请求（NextToken 为空）计算并返回精确的 TotalCount；后续使用 NextToken 翻页时返回首次请求计算的 TotalCount，分页期间该值保持不变。重新发起不带 NextToken 的请求时将重新计算。使用 NextToken 翻页时，本参数及其他查询参数必须与首次请求保持一致。默认值为 false，此时 TotalCount 返回 0。 */
  NeedTotalCount?: boolean;
}

declare interface DescribeSandboxInstanceListResponse {
  /** 沙箱实例列表 */
  InstanceSet?: SandboxInstance[];
  /** 符合条件的实例总数 */
  TotalCount?: number;
  /** 如果NextToken返回非空字符串 ，表示还有更多可用结果。 NextToken是每个页面唯一的分页令牌。使用返回的令牌再次调用以检索下一页。需要保持所有其他参数不变。每个分页令牌在 24 小时后过期。 */
  NextToken?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSandboxToolListRequest {
  /** 沙箱工具ID列表，指定要查询的工具。如果为空则查询所有工具。最大支持100个ID */
  ToolIds?: string[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100 */
  Limit?: number;
  /** 过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeSandboxToolListResponse {
  /** 沙箱工具列表 */
  SandboxToolSet?: SandboxTool[];
  /** 符合条件的沙箱工具总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSessionRequest {
  /** 会话所属空间 ID。 */
  SpaceId: string;
  /** 用户 ID。可通过调用方业务系统接口获取。 */
  UserId: string;
  /** 会话 ID。可通过 CreateSession 或 DescribeSessions 接口获取。 */
  SessionId: string;
  /** Agent ID。可选。 */
  AgentId?: string;
  /** 返回最近事件数量，默认为 0，最大值为 200。 */
  NumRecentEvents?: number;
  /** 事件起始时间，RFC3339 格式，最大长度 64 字符。 */
  AfterTimestamp?: string;
}

declare interface DescribeSessionResponse {
  /** 会话信息。 */
  Session?: SessionInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSessionSpaceRequest {
  /** 需要查询的会话空间唯一标识。入参限制：必填，不能为空。可通过 CreateSessionSpace 或 DescribeSessionSpaces 获取，不应自行构造。 */
  SpaceId: string;
}

declare interface DescribeSessionSpaceResponse {
  /** 查询到的会话空间信息。 */
  SessionSpace?: SessionSpaceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSessionSpacesRequest {
  /** 分页查询的起始偏移量。 */
  Offset?: number;
  /** 单次分页查询返回的会话空间数量。 */
  Limit?: number;
  /** 会话空间筛选条件列表，支持按空间 ID 精确匹配、名称精确或模糊匹配、描述模糊匹配。同一 Filter 内多个 Values 之间为 OR，不同 Filter 之间为 AND。不传或传空数组时不增加筛选限制。入参限制：Filter.Name 支持 space-id、name、name-like、description-like，不可重复。name 与 name-like 不可同时提供。Values 不可为空数组，筛选值不可为空或纯空白。匹配区分大小写，包含匹配中的 %、_ 按普通字符处理，不具有通配含义。例如 Name 为 name-like，Values 为 ["客服","测试"]，表示查询名称包含“客服”或“测试”的会话空间。 */
  Filters?: Filter[];
}

declare interface DescribeSessionSpacesResponse {
  /** 会话空间列表。 */
  SessionSpaces?: SessionSpaceInfo[];
  /** 满足查询条件的会话空间总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSessionsRequest {
  /** 查询的会话空间 ID。 */
  SpaceId: string;
  /** Agent ID 列表，最多支持 100 个。 */
  AgentIds?: string[];
  /** 用户 ID 列表，最多支持 100 个。 */
  UserIds?: string[];
  /** 分页偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 会话 ID 列表，最多支持 100 个。 */
  SessionIds?: string[];
  /** 会话筛选条件列表，支持 Metadata 精确匹配、标题精确匹配和标题模糊匹配。同一 Filter 内多个 Values 之间为 OR，不同 Filter 之间为 AND。不传或传空数组时不增加筛选限制。入参限制：最多传入 10 个 Filter，每个 Filter 最多支持 100 个 Values。Filter.Name 不可重复，支持 metadata:MetadataKey、title、title-like；title 与 title-like 不可同时提供。标题筛选值不可为空或纯空白。匹配区分大小写，标题包含匹配中的 %、_ 按普通字符处理，不具有通配含义。例如 Name 为 title-like，Values 为 ["客服","测试"]，表示查询标题包含“客服”或“测试”的会话。Name 为 metadata:env，Values 为 ["dev","test"]，表示按 Metadata env 的值精确筛选。标题条件与 Metadata、SessionIds、UserIds 筛选条件可组合使用，条件之间为 AND。筛选在分页前执行，TotalCount 为符合条件的会话总数。 */
  Filters?: Filter[];
}

declare interface DescribeSessionsResponse {
  /** 符合条件的会话总数。 */
  TotalCount?: number;
  /** 会话列表。 */
  Sessions?: SessionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSkillPackageDownloadURLRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID；必须 AGENT_SKILLS 且 ContentStatus=READY。 */
  RecordId: string;
  /** 可选。指定要下载的 Version；与 Label 互斥；均省略时使用 Stable。 */
  VersionId?: string;
  /** 可选。指定要下载的 Label 目标；与 VersionId 互斥；均省略时使用 Stable。 */
  Label?: string;
}

declare interface GetSkillPackageDownloadURLResponse {
  /** COS GET 预签名 URL；带 response-content-disposition；默认 TTL 5 分钟；bearer 凭证禁止持久化。 */
  DownloadURL?: string;
  /** URL 过期时间。 */
  ExpireTime?: string;
  /** 服务端记录的 SHA-256；下载后应本地自检。 */
  SHA256?: string;
  /** 解析出的 Version ID（Stable Version）。 */
  ResolvedVersionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetSkillPackageUploadURLRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** Version ID；格式 rv- + 8 位小写字母/数字。 */
  VersionId: string;
}

declare interface GetSkillPackageUploadURLResponse {
  /** Version 详情（Revision 不变）。 */
  Version?: CloudRecordVersion;
  /** 新的 COS PUT 预签名 URL。 */
  UploadURL?: string;
  /** 重试后的内容状态。 */
  ContentStatus?: string;
  /** UploadURL 过期时间。 */
  ExpireTime?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDeploymentRequest {
  /** 待修改的 Deployment ID。 */
  DeploymentId: string;
  /** 完整替换伸缩配置；提供时必须包含全部三个成员。 */
  ScalingConfiguration?: ScalingConfiguration;
  /** 完整替换生命周期配置；提供时必须包含全部两个成员。 */
  LifecycleConfiguration?: LifecycleConfiguration;
  /** 标签 */
  Tags?: Tag[];
}

declare interface ModifyDeploymentResponse {
  /** 修改后的完整 Deployment。 */
  Deployment?: Deployment;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySessionRequest {
  /** 会话所属的 SessionSpace ID。 */
  SpaceId: string;
  /** 会话所属的用户 ID。 */
  UserId: string;
  /** 待修改的会话 ID。 */
  SessionId: string;
  /** 修改后的会话标题。入参限制：本参数可选，最大长度为 255 个字符。不传表示保持原会话标题不变，传空字符串表示清空会话标题。Title 与 Metadata 至少传入一项。 */
  Title?: string;
  /** 修改后的完整会话元数据，以键值对数组形式表示。入参限制：本参数可选，最多支持 64 项。Name 不能为空或重复，最大长度为 253 字节；Value 最大长度为 1024 字节，允许为空字符串。Metadata 序列化后的总大小不能超过 64 KiB。不传表示保持原 Metadata 不变；传空数组表示清空全部 Metadata；传非空数组表示使用传入内容全量覆盖原 Metadata。Metadata 与 Title 至少传入一项。 */
  Metadata?: MetadataVar[];
}

declare interface ModifySessionResponse {
  /** 修改后的完整会话信息。 */
  Session?: SessionInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySessionSpaceRequest {
  /** 需要修改的会话空间唯一标识。 */
  SpaceId: string;
  /** 修改后的会话空间名称。 */
  Name: string;
  /** 修改后的会话空间描述。 */
  Description?: string;
}

declare interface ModifySessionSpaceResponse {
  /** 修改后的会话空间信息。 */
  SessionSpace?: SessionSpaceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PauseSandboxInstanceRequest {
  /** 沙箱实例ID */
  InstanceId: string;
  /** 可选。带内存暂停，恢复后保留进程和内存状态。true=带内存；false=仅磁盘；不传=系统默认（当前默认 true，带内存）。 */
  Memory?: boolean;
}

declare interface PauseSandboxInstanceResponse {
  /** 目标沙箱实例当前的状态枚举值：PAUSING： 正在暂停中PAUSED： 已暂停PAUSE_FAILED： 暂停失败 */
  InstanceStatus?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PreviewRegistryRecordRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** 可选。指定要预览的目标 Version；与 Label 互斥；均省略时使用 Stable。 */
  VersionId?: string;
  /** 可选。指定要预览的目标 Label；与 VersionId 互斥；均省略时使用 Stable。 */
  Label?: string;
}

declare interface PreviewRegistryRecordResponse {
  /** 只读元数据预览结果对象（JSON 字符串形式）。字段：StatusCode（远端 HTTP 状态码，必返）、Body（远端响应体截断字符串，必返）、HasUpdate（Boolean，必返；远端内容按 Sync 相同的规范化规则处理后是否与请求 Version 配置不同；Error 非空时固定返回 false，此时不表示远端没有变化）、Error（调用错误信息，可选）。 */
  PreviewResult?: string;
  /** 实际预览的 Version ID（由 VersionId / Label 解析得到）。 */
  ResolvedVersionId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RejectRegistryRecordRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** Version ID。 */
  VersionId: string;
  /** 动作留言；非空。 */
  Comment: string;
}

declare interface RejectRegistryRecordResponse {
  /** 更新后的 Version。 */
  Version?: CloudRecordVersion;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeSandboxInstanceRequest {
  /** 沙箱实例ID */
  InstanceId: string;
  /** 超时时间，超过这个时间就自动回收实例。支持格式：5m、300s、1h 等，默认 5m。最小 30s，最大 24h */
  Timeout?: string;
}

declare interface ResumeSandboxInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartSandboxInstanceRequest {
  /** 沙箱工具 ID，与 ToolName 至少有一个要填 */
  ToolId?: string;
  /** 沙箱工具名称，与 ToolId 至少有一个要填 */
  ToolName?: string;
  /** 超时时间，超过这个时间就自动回收实例。支持格式：5m、300s、1h 等，默认 5m。最小 30s，最大 24h */
  Timeout?: string;
  /** 幂等性 Token，长度不超过 64 字符 */
  ClientToken?: string;
  /** 沙箱实例存储挂载配置 */
  MountOptions?: MountOption[];
  /** 沙箱实例自定义配置 */
  CustomConfiguration?: CustomConfiguration;
  /** 沙箱访问认证模式枚举值：DEFAULT： 默认，即TOKEN认证TOKEN： Token认证，即所有端口访问都需携带TokenNONE： 免认证，即所有端口访问无需携带TokenPUBLIC： 公开模式，即ENVD管理端口（49983）访问需携带Token，其他端口无需携带Token默认值：DEFAULT */
  AuthMode?: string;
  /** 沙箱元数据 */
  Metadata?: MetadataVar[];
}

declare interface StartSandboxInstanceResponse {
  /** 创建的沙箱实例完整信息 */
  Instance?: SandboxInstance;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopSandboxInstanceRequest {
  /** 沙箱实例ID */
  InstanceId: string;
}

declare interface StopSandboxInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncRegistryRecordRequest {
  /** 父 Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** 可选。指定要同步的目标 Version；与 Label 互斥；均省略时使用 Stable。 */
  VersionId?: string;
  /** 可选。指定要同步的目标 Label；与 VersionId 互斥；均省略时使用 Stable。Label 在请求开始时只解析一次。 */
  Label?: string;
  /** 可选，最大 4096 字符。若同步创建新 Version，将写入新 Version 的 ChangeLog；省略时保存为空。 */
  ChangeLog?: string;
}

declare interface SyncRegistryRecordResponse {
  /** 同步结果：UNCHANGED（远端无变化）/ VERSION_CREATED（远端有变化，已生成新 Version）/ FAILED（同步失败）。 */
  SyncStatus?: string | null;
  /** 作为同步来源解析出的 Version ID（可能由 Label 解析而来）；不为空。 */
  ResolvedVersionId?: string | null;
  /** SyncStatus=VERSION_CREATED 时返回：本次新建的 Version。 */
  CreatedVersion?: CloudRecordVersion;
  /** SyncStatus=VERSION_CREATED 时返回：同步后的最新 Record。 */
  Record?: CloudRecord;
  /** 最后一次同步时间，ISO 8601 UTC。 */
  LastSyncTime?: string | null;
  /** 失败错误码；SyncStatus=FAILED 时返回。 */
  ErrorCode?: string | null;
  /** 失败错误信息；SyncStatus=FAILED 时返回。 */
  ErrorMessage?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRegistryRecordRequest {
  /** Registry ID。 */
  RegistryId: string;
  /** Record ID。 */
  RecordId: string;
  /** Record 描述，可选。Record 更新模式下允许，允许空字符串清空；Version 创建模式禁止。 */
  Description?: string;
  /** 新 Version 的展示名，可选。仅 Version 创建模式允许。 */
  VersionName?: string;
  /** 新 Version 的变更原因，最大 4096 字符，可选。仅 Version 创建模式允许。 */
  ChangeLog?: string;
  /** Version 创建模式：现有 Record 的 DescriptorType=MCP 时可提交。 */
  MCPSource?: CloudMCPSourceInput;
  /** Version 创建模式：现有 Record 的 DescriptorType=A2A 或 AGUI 时可提交。 */
  AgentSource?: CloudAgentSourceInput;
  /** Version 创建模式：现有 Record 的 DescriptorType=AGENT_SKILLS 时可提交。 */
  SkillSource?: CloudSkillSourceInput;
  /** Version 创建模式：现有 Record 的 DescriptorType=CUSTOM 时可提交，必须是 JSON object 字符串。 */
  CustomDescriptors?: string;
  /** Record 更新模式：Label 变更列表，最多 32 条，同一次请求中 Label Name 不可重复。 */
  LabelMutations?: CloudRecordLabelMutation[];
}

declare interface UpdateRegistryRecordResponse {
  /** 更新后的 Record。 */
  Record?: CloudRecord;
  /** Version 创建模式返回：本次创建的新 Version。 */
  Version?: CloudRecordVersion;
  /** Version 创建模式且 SkillSource.Type=TAR_PACKAGE 时返回。 */
  UploadURL?: string | null;
  /** Version 创建模式且 SkillSource.Type=TAR_PACKAGE 时返回。 */
  ExpireTime?: string | null;
  /** Version 创建模式且 SkillSource.Type=TAR_PACKAGE 时返回。 */
  ContentStatus?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRegistryRequest {
  /** Registry ID。 */
  RegistryId: string;
  /** 新的描述；必填；最长 4096。 */
  Description: string;
}

declare interface UpdateRegistryResponse {
  /** 更新后的 Registry 详情。 */
  Registry?: CloudRegistry;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateSandboxInstanceRequest {
  /** 沙箱实例ID */
  InstanceId: string;
  /** 新的超时时间（从设置时开始重新计算超时），支持格式：5m、300s、1h等。最小30s，最大24h。如果不指定则保持原有超时设置 */
  Timeout?: string;
  /** 沙箱实例元数据 */
  Metadata?: MetadataVar[];
}

declare interface UpdateSandboxInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateSandboxToolRequest {
  /** 沙箱工具ID */
  ToolId: string;
  /** 沙箱工具描述，最大长度200字符 */
  Description?: string;
  /** 网络配置 */
  NetworkConfiguration?: NetworkConfiguration;
  /** 标签 */
  Tags?: Tag[];
  /** 沙箱工具自定义配置 */
  CustomConfiguration?: CustomConfiguration;
  /** 桌面电脑环境类沙箱配置 */
  ComputerConfiguration?: ComputerConfiguration;
}

declare interface UpdateSandboxToolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ags Agent 沙箱服务} */
declare interface Ags {
  (): Versions;
  /** 获取 Deployment Token {@link AcquireDeploymentTokenRequest} {@link AcquireDeploymentTokenResponse} */
  AcquireDeploymentToken(data: AcquireDeploymentTokenRequest, config?: AxiosRequestConfig): AxiosPromise<AcquireDeploymentTokenResponse>;
  /** 获取沙箱实例的访问Token {@link AcquireSandboxInstanceTokenRequest} {@link AcquireSandboxInstanceTokenResponse} */
  AcquireSandboxInstanceToken(data: AcquireSandboxInstanceTokenRequest, config?: AxiosRequestConfig): AxiosPromise<AcquireSandboxInstanceTokenResponse>;
  /** 追加事件 {@link AppendEventRequest} {@link AppendEventResponse} */
  AppendEvent(data: AppendEventRequest, config?: AxiosRequestConfig): AxiosPromise<AppendEventResponse>;
  /** 审批通过 Record 版本 {@link ApproveRegistryRecordRequest} {@link ApproveRegistryRecordResponse} */
  ApproveRegistryRecord(data: ApproveRegistryRecordRequest, config?: AxiosRequestConfig): AxiosPromise<ApproveRegistryRecordResponse>;
  /** 取消 Record 版本 {@link CancelRegistryRecordRequest} {@link CancelRegistryRecordResponse} */
  CancelRegistryRecord(data: CancelRegistryRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CancelRegistryRecordResponse>;
  /** 创建新的API密钥 {@link CreateAPIKeyRequest} {@link CreateAPIKeyResponse} */
  CreateAPIKey(data?: CreateAPIKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAPIKeyResponse>;
  /** 创建 Deployment {@link CreateDeploymentRequest} {@link CreateDeploymentResponse} */
  CreateDeployment(data: CreateDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeploymentResponse>;
  /** 创建预热镜像任务 {@link CreatePreCacheImageTaskRequest} {@link CreatePreCacheImageTaskResponse} */
  CreatePreCacheImageTask(data: CreatePreCacheImageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePreCacheImageTaskResponse>;
  /** 创建 Registry {@link CreateRegistryRequest} {@link CreateRegistryResponse} */
  CreateRegistry(data: CreateRegistryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRegistryResponse>;
  /** 创建 Record {@link CreateRegistryRecordRequest} {@link CreateRegistryRecordResponse} */
  CreateRegistryRecord(data: CreateRegistryRecordRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRegistryRecordResponse>;
  /** 创建沙箱工具 {@link CreateSandboxToolRequest} {@link CreateSandboxToolResponse} */
  CreateSandboxTool(data: CreateSandboxToolRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSandboxToolResponse>;
  /** 创建会话 {@link CreateSessionRequest} {@link CreateSessionResponse} */
  CreateSession(data: CreateSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSessionResponse>;
  /** 创建会话空间 {@link CreateSessionSpaceRequest} {@link CreateSessionSpaceResponse} */
  CreateSessionSpace(data: CreateSessionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSessionSpaceResponse>;
  /** 删除API密钥 {@link DeleteAPIKeyRequest} {@link DeleteAPIKeyResponse} */
  DeleteAPIKey(data: DeleteAPIKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAPIKeyResponse>;
  /** 删除 Deployment {@link DeleteDeploymentRequest} {@link DeleteDeploymentResponse} */
  DeleteDeployment(data: DeleteDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeploymentResponse>;
  /** 删除 Registry {@link DeleteRegistryRequest} {@link DeleteRegistryResponse} */
  DeleteRegistry(data: DeleteRegistryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRegistryResponse>;
  /** 删除 Record {@link DeleteRegistryRecordRequest} {@link DeleteRegistryRecordResponse} */
  DeleteRegistryRecord(data: DeleteRegistryRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRegistryRecordResponse>;
  /** 删除沙箱工具 {@link DeleteSandboxToolRequest} {@link DeleteSandboxToolResponse} */
  DeleteSandboxTool(data: DeleteSandboxToolRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSandboxToolResponse>;
  /** 删除会话 {@link DeleteSessionRequest} {@link DeleteSessionResponse} */
  DeleteSession(data: DeleteSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSessionResponse>;
  /** 删除会话空间 {@link DeleteSessionSpaceRequest} {@link DeleteSessionSpaceResponse} */
  DeleteSessionSpace(data: DeleteSessionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSessionSpaceResponse>;
  /** 获取API密钥列表 {@link DescribeAPIKeyListRequest} {@link DescribeAPIKeyListResponse} */
  DescribeAPIKeyList(data?: DescribeAPIKeyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAPIKeyListResponse>;
  /** 查询 Deployment {@link DescribeDeploymentRequest} {@link DescribeDeploymentResponse} */
  DescribeDeployment(data: DescribeDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeploymentResponse>;
  /** 查询 Deployment 列表 {@link DescribeDeploymentListRequest} {@link DescribeDeploymentListResponse} */
  DescribeDeploymentList(data?: DescribeDeploymentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeploymentListResponse>;
  /** 查询事件列表 {@link DescribeEventsRequest} {@link DescribeEventsResponse} */
  DescribeEvents(data: DescribeEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEventsResponse>;
  /** 查询镜像预热任务信息 {@link DescribePreCacheImageTaskRequest} {@link DescribePreCacheImageTaskResponse} */
  DescribePreCacheImageTask(data: DescribePreCacheImageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePreCacheImageTaskResponse>;
  /** 查询账号配额总览 {@link DescribeQuotaOverviewRequest} {@link DescribeQuotaOverviewResponse} */
  DescribeQuotaOverview(data?: DescribeQuotaOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeQuotaOverviewResponse>;
  /** 查询 Registry 详情 {@link DescribeRegistryRequest} {@link DescribeRegistryResponse} */
  DescribeRegistry(data: DescribeRegistryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegistryResponse>;
  /** 查询审计日志 {@link DescribeRegistryAuditLogListRequest} {@link DescribeRegistryAuditLogListResponse} */
  DescribeRegistryAuditLogList(data: DescribeRegistryAuditLogListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegistryAuditLogListResponse>;
  /** 查询 Registry 列表 {@link DescribeRegistryListRequest} {@link DescribeRegistryListResponse} */
  DescribeRegistryList(data?: DescribeRegistryListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegistryListResponse>;
  /** 查询 Record 详情 {@link DescribeRegistryRecordRequest} {@link DescribeRegistryRecordResponse} */
  DescribeRegistryRecord(data: DescribeRegistryRecordRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegistryRecordResponse>;
  /** 查询 Record 列表 {@link DescribeRegistryRecordListRequest} {@link DescribeRegistryRecordListResponse} */
  DescribeRegistryRecordList(data: DescribeRegistryRecordListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegistryRecordListResponse>;
  /** 查询 Record 版本列表 {@link DescribeRegistryRecordVersionListRequest} {@link DescribeRegistryRecordVersionListResponse} */
  DescribeRegistryRecordVersionList(data: DescribeRegistryRecordVersionListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegistryRecordVersionListResponse>;
  /** 查询沙箱实例列表 {@link DescribeSandboxInstanceListRequest} {@link DescribeSandboxInstanceListResponse} */
  DescribeSandboxInstanceList(data?: DescribeSandboxInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSandboxInstanceListResponse>;
  /** 查询沙箱工具列表 {@link DescribeSandboxToolListRequest} {@link DescribeSandboxToolListResponse} */
  DescribeSandboxToolList(data?: DescribeSandboxToolListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSandboxToolListResponse>;
  /** 查询会话 {@link DescribeSessionRequest} {@link DescribeSessionResponse} */
  DescribeSession(data: DescribeSessionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSessionResponse>;
  /** 查询会话空间详情 {@link DescribeSessionSpaceRequest} {@link DescribeSessionSpaceResponse} */
  DescribeSessionSpace(data: DescribeSessionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSessionSpaceResponse>;
  /** 查询会话空间列表 {@link DescribeSessionSpacesRequest} {@link DescribeSessionSpacesResponse} */
  DescribeSessionSpaces(data?: DescribeSessionSpacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSessionSpacesResponse>;
  /** 会话列表 {@link DescribeSessionsRequest} {@link DescribeSessionsResponse} */
  DescribeSessions(data: DescribeSessionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSessionsResponse>;
  /** 生成 Skill 包下载 URL {@link GetSkillPackageDownloadURLRequest} {@link GetSkillPackageDownloadURLResponse} */
  GetSkillPackageDownloadURL(data: GetSkillPackageDownloadURLRequest, config?: AxiosRequestConfig): AxiosPromise<GetSkillPackageDownloadURLResponse>;
  /** 生成 Skill 包上传 URL {@link GetSkillPackageUploadURLRequest} {@link GetSkillPackageUploadURLResponse} */
  GetSkillPackageUploadURL(data: GetSkillPackageUploadURLRequest, config?: AxiosRequestConfig): AxiosPromise<GetSkillPackageUploadURLResponse>;
  /** 修改 Deployment {@link ModifyDeploymentRequest} {@link ModifyDeploymentResponse} */
  ModifyDeployment(data: ModifyDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeploymentResponse>;
  /** 修改会话 {@link ModifySessionRequest} {@link ModifySessionResponse} */
  ModifySession(data: ModifySessionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySessionResponse>;
  /** 修改会话空间 {@link ModifySessionSpaceRequest} {@link ModifySessionSpaceResponse} */
  ModifySessionSpace(data: ModifySessionSpaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySessionSpaceResponse>;
  /** 暂停沙箱实例 {@link PauseSandboxInstanceRequest} {@link PauseSandboxInstanceResponse} */
  PauseSandboxInstance(data: PauseSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<PauseSandboxInstanceResponse>;
  /** 测试调用 Record 端点 {@link PreviewRegistryRecordRequest} {@link PreviewRegistryRecordResponse} */
  PreviewRegistryRecord(data: PreviewRegistryRecordRequest, config?: AxiosRequestConfig): AxiosPromise<PreviewRegistryRecordResponse>;
  /** 驳回 Record 版本 {@link RejectRegistryRecordRequest} {@link RejectRegistryRecordResponse} */
  RejectRegistryRecord(data: RejectRegistryRecordRequest, config?: AxiosRequestConfig): AxiosPromise<RejectRegistryRecordResponse>;
  /** 恢复沙箱实例 {@link ResumeSandboxInstanceRequest} {@link ResumeSandboxInstanceResponse} */
  ResumeSandboxInstance(data: ResumeSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeSandboxInstanceResponse>;
  /** 启动沙箱实例 {@link StartSandboxInstanceRequest} {@link StartSandboxInstanceResponse} */
  StartSandboxInstance(data?: StartSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StartSandboxInstanceResponse>;
  /** 停止沙箱实例 {@link StopSandboxInstanceRequest} {@link StopSandboxInstanceResponse} */
  StopSandboxInstance(data: StopSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StopSandboxInstanceResponse>;
  /** 同步 Record 描述符 {@link SyncRegistryRecordRequest} {@link SyncRegistryRecordResponse} */
  SyncRegistryRecord(data: SyncRegistryRecordRequest, config?: AxiosRequestConfig): AxiosPromise<SyncRegistryRecordResponse>;
  /** 更新 Registry {@link UpdateRegistryRequest} {@link UpdateRegistryResponse} */
  UpdateRegistry(data: UpdateRegistryRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRegistryResponse>;
  /** 更新 Record 可变元数据 {@link UpdateRegistryRecordRequest} {@link UpdateRegistryRecordResponse} */
  UpdateRegistryRecord(data: UpdateRegistryRecordRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRegistryRecordResponse>;
  /** 更新沙箱实例 {@link UpdateSandboxInstanceRequest} {@link UpdateSandboxInstanceResponse} */
  UpdateSandboxInstance(data: UpdateSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSandboxInstanceResponse>;
  /** 更新沙箱工具 {@link UpdateSandboxToolRequest} {@link UpdateSandboxToolResponse} */
  UpdateSandboxTool(data: UpdateSandboxToolRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSandboxToolResponse>;
}

export declare type Versions = ["2025-09-20"];

export default Ags;
