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

declare interface DeleteSandboxToolRequest {
  /** 沙箱工具ID */
  ToolId: string;
}

declare interface DeleteSandboxToolResponse {
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
  /** 创建新的API密钥 {@link CreateAPIKeyRequest} {@link CreateAPIKeyResponse} */
  CreateAPIKey(data?: CreateAPIKeyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAPIKeyResponse>;
  /** 创建 Deployment {@link CreateDeploymentRequest} {@link CreateDeploymentResponse} */
  CreateDeployment(data: CreateDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDeploymentResponse>;
  /** 创建预热镜像任务 {@link CreatePreCacheImageTaskRequest} {@link CreatePreCacheImageTaskResponse} */
  CreatePreCacheImageTask(data: CreatePreCacheImageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePreCacheImageTaskResponse>;
  /** 创建沙箱工具 {@link CreateSandboxToolRequest} {@link CreateSandboxToolResponse} */
  CreateSandboxTool(data: CreateSandboxToolRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSandboxToolResponse>;
  /** 删除API密钥 {@link DeleteAPIKeyRequest} {@link DeleteAPIKeyResponse} */
  DeleteAPIKey(data: DeleteAPIKeyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAPIKeyResponse>;
  /** 删除 Deployment {@link DeleteDeploymentRequest} {@link DeleteDeploymentResponse} */
  DeleteDeployment(data: DeleteDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDeploymentResponse>;
  /** 删除沙箱工具 {@link DeleteSandboxToolRequest} {@link DeleteSandboxToolResponse} */
  DeleteSandboxTool(data: DeleteSandboxToolRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSandboxToolResponse>;
  /** 获取API密钥列表 {@link DescribeAPIKeyListRequest} {@link DescribeAPIKeyListResponse} */
  DescribeAPIKeyList(data?: DescribeAPIKeyListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAPIKeyListResponse>;
  /** 查询 Deployment {@link DescribeDeploymentRequest} {@link DescribeDeploymentResponse} */
  DescribeDeployment(data: DescribeDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeploymentResponse>;
  /** 查询 Deployment 列表 {@link DescribeDeploymentListRequest} {@link DescribeDeploymentListResponse} */
  DescribeDeploymentList(data?: DescribeDeploymentListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeploymentListResponse>;
  /** 查询镜像预热任务信息 {@link DescribePreCacheImageTaskRequest} {@link DescribePreCacheImageTaskResponse} */
  DescribePreCacheImageTask(data: DescribePreCacheImageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePreCacheImageTaskResponse>;
  /** 查询沙箱实例列表 {@link DescribeSandboxInstanceListRequest} {@link DescribeSandboxInstanceListResponse} */
  DescribeSandboxInstanceList(data?: DescribeSandboxInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSandboxInstanceListResponse>;
  /** 查询沙箱工具列表 {@link DescribeSandboxToolListRequest} {@link DescribeSandboxToolListResponse} */
  DescribeSandboxToolList(data?: DescribeSandboxToolListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSandboxToolListResponse>;
  /** 修改 Deployment {@link ModifyDeploymentRequest} {@link ModifyDeploymentResponse} */
  ModifyDeployment(data: ModifyDeploymentRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDeploymentResponse>;
  /** 暂停沙箱实例 {@link PauseSandboxInstanceRequest} {@link PauseSandboxInstanceResponse} */
  PauseSandboxInstance(data: PauseSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<PauseSandboxInstanceResponse>;
  /** 恢复沙箱实例 {@link ResumeSandboxInstanceRequest} {@link ResumeSandboxInstanceResponse} */
  ResumeSandboxInstance(data: ResumeSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeSandboxInstanceResponse>;
  /** 启动沙箱实例 {@link StartSandboxInstanceRequest} {@link StartSandboxInstanceResponse} */
  StartSandboxInstance(data?: StartSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StartSandboxInstanceResponse>;
  /** 停止沙箱实例 {@link StopSandboxInstanceRequest} {@link StopSandboxInstanceResponse} */
  StopSandboxInstance(data: StopSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<StopSandboxInstanceResponse>;
  /** 更新沙箱实例 {@link UpdateSandboxInstanceRequest} {@link UpdateSandboxInstanceResponse} */
  UpdateSandboxInstance(data: UpdateSandboxInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSandboxInstanceResponse>;
  /** 更新沙箱工具 {@link UpdateSandboxToolRequest} {@link UpdateSandboxToolResponse} */
  UpdateSandboxTool(data: UpdateSandboxToolRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateSandboxToolResponse>;
}

export declare type Versions = ["2025-09-20"];

export default Ags;
