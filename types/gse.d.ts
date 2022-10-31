/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 别名对象 */
declare interface Alias {
  /** 别名的唯一标识符 */
  AliasId: string;
  /** 别名的全局唯一资源标识符 */
  AliasArn: string;
  /** 名字，长度不小于1字符不超过1024字符 */
  Name: string;
  /** 别名的可读说明，长度不小于1字符不超过1024字符 */
  Description: string | null;
  /** 别名的路由配置 */
  RoutingStrategy: RoutingStrategy;
  /** 创建时间 */
  CreationTime: string;
  /** 上次修改此数据对象的时间 */
  LastUpdatedTime: string;
  /** 标签列表，最大长度50组 */
  Tags: Tag[] | null;
}

/** 生成包信息 */
declare interface Asset {
  /** 生成包ID */
  AssetId: string;
  /** 生成包名字，最小长度为1，最大长度为64 */
  AssetName: string;
  /** 生成包版本，最小长度为1，最大长度为64 */
  AssetVersion: string;
  /** 生成包可运行的操作系统，暂时只支持CentOS7.16 */
  OperateSystem: string;
  /** 生成包状态，0代表上传中，1代表上传失败，2代表上传成功 */
  Stauts: number;
  /** 生成包大小 */
  Size: string;
  /** 生成包创建时间 */
  CreateTime: string;
  /** 生成包绑定的Fleet个数，最小值为0 */
  BindFleetNum: number;
  /** 生成包的全局唯一资源标识符 */
  AssetArn: string;
  /** 生成包支持的操作系统镜像id */
  ImageId: string;
  /** 生成包支持的操作系统类型 */
  OsType: string;
  /** 生成包资源类型，ASSET 或者 IMAGE；ASSET 代表是原有生成包类型，IMAGE 为扩充使用镜像类型 */
  ResourceType: string;
  /** 镜像资源共享类型，当 ResourceType 为 IMAGE 时该字段有意义，SHARED 表示共享、SHARED_IMAGE 表示未共享；ResourceType 为 ASSET 时这里返回 UNKNOWN_SHARED 用于占位 */
  SharingStatus: string;
  /** 标签列表，最大长度50组 */
  Tags: Tag[] | null;
}

/** 上传Asset的临时证书 */
declare interface AssetCredentials {
  /** 临时证书密钥ID */
  TmpSecretId: string;
  /** 临时证书密钥Key */
  TmpSecretKey: string;
  /** 临时证书Token */
  Token: string;
}

/** 生成包支持操作系统详细信息 */
declare interface AssetSupportSys {
  /** 生成包操作系统的镜像Id */
  ImageId: string;
  /** 生成包操作系统的类型 */
  OsType: string;
  /** 生成包操作系统的位数 */
  OsBit: number;
  /** 生成包操作系统的版本 */
  OsVersion: string;
}

/** 云联网相关信息 */
declare interface CcnInfo {
  /** 云联网所属账号 */
  AccountId: string;
  /** 云联网id */
  CcnId: string;
}

/** 云联网实例信息 */
declare interface CcnInstanceSets {
  /** 云联网账号 Uin */
  AccountId: string | null;
  /** 云联网 Id */
  CcnId: string | null;
  /** 云联网关联时间 */
  CreateTime: string | null;
  /** 云联网实例名称 */
  InstanceName: string | null;
  /** 云联网状态：申请中、已连接、已过期、已拒绝、已删除、失败的、关联中、解关联中、解关联失败 */
  State: string | null;
}

/** 访问实例所需要的凭据 */
declare interface Credentials {
  /** ssh私钥 */
  Secret: string;
  /** 用户名 */
  UserName: string;
}

/** 玩家游戏会话信息 */
declare interface DesiredPlayerSession {
  /** 与玩家会话关联的唯一玩家标识 */
  PlayerId: string;
  /** 开发人员定义的玩家数据 */
  PlayerData: string;
}

/** 磁盘存储信息 */
declare interface DiskInfo {
  /** 磁盘类型，支持：高性能云硬盘（CLOUD_PREMIUM）、SSD云硬盘（CLOUD_SSD） */
  DiskType: string;
  /** 系统盘：可选硬盘容量，50-500GB，数字以1为单位，数据盘：可选硬盘容量：10-32000GB，数字以10为单位；当磁盘类型为SSD云硬盘（CLOUD_SSD）最小大小为 100GB */
  DiskSize: number;
}

/** 事件对象 */
declare interface Event {
  /** 事件代码，支持以下的事件代码- FLEET_CREATED - FLEET_STATE_DOWNLOADING - FLEET_BINARY_DOWNLOAD_FAILED - FLEET_CREATION_EXTRACTING_BUILD- FLEET_CREATION_VALIDATING_RUNTIME_CONFIG- FLEET_STATE_VALIDATING- FLEET_STATE_BUILDING - FLEET_STATE_ACTIVATING- FLEET_STATE_ACTIVE- FLEET_SCALING_EVENT- FLEET_STATE_ERROR- FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND- FLEET_ACTIVATION_FAILED_NO_INSTANCES- FLEET_VPC_PEERING_SUCCEEDED- FLEET_VPC_PEERING_FAILED- FLEET_VPC_PEERING_DELETE- FLEET_INITIALIZATION_FAILED- FLEET_DELETED- FLEET_STATE_DELETING- FLEET_ACTIVATION_FAILED- GAME_SESSION_ACTIVATION_TIMEOUT */
  EventCode: string;
  /** 事件的唯一标识 ID */
  EventId: string;
  /** 事件的发生时间，UTC 时间格式 */
  EventTime: string;
  /** 事件的消息 */
  Message: string | null;
  /** 事件相关的日志存储路径 */
  PreSignedLogUrl: string | null;
  /** 事件对应的资源对象唯一标识 ID，例如服务器舰队 ID */
  ResourceId: string;
}

/** 实例类型限额配置额外信息 */
declare interface ExtraInfos {
  /** 实例类型，例如S5.LARGE8 */
  InstanceType: string | null;
  /** 实例限额数 */
  TotalInstances: number | null;
}

/** 过滤字段内容 */
declare interface Filter {
  /** 过滤属性的 key */
  Key?: string;
  /** 过滤属性的 values 值 */
  Values?: string[];
}

/** 服务部署属性 */
declare interface FleetAttributes {
  /** 生成包 Id */
  AssetId: string;
  /** 创建服务器舰队时间 */
  CreationTime: string;
  /** 描述 */
  Description: string | null;
  /** 服务器舰队资源描述 */
  FleetArn: string | null;
  /** 服务器舰队 Id */
  FleetId: string | null;
  /** 服务器舰队类型，目前只支持ON_DEMAND */
  FleetType: string | null;
  /** 服务器类型，例如S5.LARGE8 */
  InstanceType: string | null;
  /** 服务器舰队名称 */
  Name: string;
  /** 游戏会话保护策略 */
  NewGameServerSessionProtectionPolicy: string | null;
  /** 操作系统类型 */
  OperatingSystem: string | null;
  /** 资源创建限制策略 */
  ResourceCreationLimitPolicy: ResourceCreationLimitPolicy | null;
  /** 状态：新建、下载中、验证中、生成中、激活中、活跃、异常、删除中、结束 */
  Status: string | null;
  /** 服务器舰队停止状态，为空时表示自动扩缩容 */
  StoppedActions: string[] | null;
  /** 服务器舰队终止时间 */
  TerminationTime: string | null;
  /** 时限保护超时时间，默认60分钟，最小值5，最大值1440 */
  GameServerSessionProtectionTimeLimit: number | null;
  /** 计费状态：未开通、已开通、异常、欠费隔离、销毁、解冻 */
  BillingStatus: string | null;
  /** 标签列表，最大长度50组 */
  Tags: Tag[] | null;
  /** 数据盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-32000GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，10-32000GB；容量以10为单位 */
  DataDiskInfo: DiskInfo[] | null;
  /** 系统盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-500GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，50-500GB；容量以1为单位 */
  SystemDiskInfo: DiskInfo | null;
  /** 云联网相关信息 */
  RelatedCcnInfos: RelatedCcnInfo[] | null;
  /** fleet公网出带宽最大值，默认100Mbps，范围1-200Mbps */
  InternetMaxBandwidthOut: number | null;
}

/** 服务部署组容量配置 */
declare interface FleetCapacity {
  /** 服务部署 Id */
  FleetId: string | null;
  /** 服务器类型，如S3.LARGE8,S2.LARGE8,S5.LARGE8等 */
  InstanceType: string | null;
  /** 服务器实例统计数据 */
  InstanceCounts: InstanceCounts | null;
  /** 服务器伸缩容间隔，单位分钟，最小值3，最大值30，默认值10 */
  ScalingInterval: number | null;
}

/** 与服务器舰队关联的资源，如别名和队列 */
declare interface FleetRelatedResource {
  /** 资源类型。- ALIAS：别名- QUEUE：队列 */
  Type: string | null;
  /** 资源ID，目前仅支持别名ID和队列名称 */
  ResourceId: string | null;
  /** 资源所在区域，如ap-shanghai、na-siliconvalley等 */
  ResourceRegion: string | null;
}

/** 舰队统计详情 */
declare interface FleetStatisticDetail {
  /** 舰队ID */
  FleetId: string | null;
  /** 实例ID */
  InstanceId: string | null;
  /** 实例IP */
  InstanceIP: string | null;
  /** 开始时间 */
  BeginTime: string | null;
  /** 结束时间 */
  EndTime: string | null;
  /** 总时长，单位秒 */
  TotalUsedTimeSeconds: string | null;
  /** 总流量，单位MB */
  TotalUsedFlowMegaBytes: number | null;
}

/** 舰队统计流量 */
declare interface FleetStatisticFlows {
  /** 总流量，单位MB */
  TotalUsedFlowMegaBytes: number | null;
  /** 统计开始时间 */
  BeginTime: string | null;
}

/** 舰队统计总时长 */
declare interface FleetStatisticTimes {
  /** 统计开始时间 */
  BeginTime: string | null;
  /** 统计总时长，单位秒 */
  TotalUsedTimeSeconds: string | null;
}

/** 服务部署利用率 */
declare interface FleetUtilization {
  /** 游戏会话数 */
  ActiveGameServerSessionCount: number | null;
  /** 活跃进程数 */
  ActiveServerProcessCount: number | null;
  /** 当前游戏玩家数 */
  CurrentPlayerSessionCount: number | null;
  /** 服务部署 Id */
  FleetId: string | null;
  /** 最大玩家会话数 */
  MaximumPlayerSessionCount: number | null;
}

/** 游戏属性详情 */
declare interface GameProperty {
  /** 属性名称，最大长度不超过32个ASCII字符 */
  Key: string;
  /** 属性值，最大长度不超过96个ASCII字符 */
  Value: string;
}

/** 游戏会话详情 */
declare interface GameServerSession {
  /** 游戏服务器会话创建时间 */
  CreationTime: string;
  /** 创建者ID，最大长度不超过1024个ASCII字符 */
  CreatorId: string | null;
  /** 当前玩家数量，最小值不小于0 */
  CurrentPlayerSessionCount: number;
  /** CVM的DNS标识符 */
  DnsName: string | null;
  /** 舰队ID */
  FleetId: string;
  /** 游戏属性，最大长度不超过16组 */
  GameProperties: GameProperty[] | null;
  /** 游戏服务器会话属性详情，最大长度不超过4096个ASCII字符 */
  GameServerSessionData: string | null;
  /** 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符 */
  GameServerSessionId: string;
  /** CVM IP地址 */
  IpAddress: string;
  /** 对战进程详情，最大长度不超过400000个ASCII字符 */
  MatchmakerData: string | null;
  /** 最大玩家数量，最小值不小于0 */
  MaximumPlayerSessionCount: number;
  /** 游戏服务器会话名称，最大长度不超过1024个ASCII字符 */
  Name: string | null;
  /** 玩家会话创建策略（ACCEPT_ALL,DENY_ALL） */
  PlayerSessionCreationPolicy: string | null;
  /** 端口号，最小值不小于1，最大值不超过60000 */
  Port: number;
  /** 游戏服务器会话状态（ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR） */
  Status: string;
  /** 游戏服务器会话状态附加信息 */
  StatusReason: string | null;
  /** 终止的时间 */
  TerminationTime: string | null;
  /** 实例类型，最大长度不超过128个ASCII字符 */
  InstanceType: string | null;
  /** 当前自定义数 */
  CurrentCustomCount: number | null;
  /** 最大自定义数 */
  MaxCustomCount: number | null;
  /** 权重 */
  Weight: number | null;
  /** 会话可用性状态，是否被屏蔽（Enable,Disable） */
  AvailabilityStatus: string | null;
}

/** 游戏服务器会话详情（GameServerSessionDetail） */
declare interface GameServerSessionDetail {
  /** 游戏服务器会话 */
  GameServerSession: GameServerSession;
  /** 保护策略，可选（NoProtection,FullProtection） */
  ProtectionPolicy: string | null;
}

/** 游戏会话部署对象 */
declare interface GameServerSessionPlacement {
  /** 部署Id */
  PlacementId: string;
  /** 服务部署组名称 */
  GameServerSessionQueueName: string;
  /** 玩家延迟 */
  PlayerLatencies: PlayerLatency[] | null;
  /** 服务部署状态 */
  Status: string;
  /** 分配给正在运行游戏会话的实例的DNS标识符 */
  DnsName: string | null;
  /** 游戏会话Id */
  GameServerSessionId: string | null;
  /** 游戏会话名称 */
  GameServerSessionName: string | null;
  /** 服务部署区域 */
  GameServerSessionRegion: string | null;
  /** 游戏属性 */
  GameProperties: GameProperty[] | null;
  /** 游戏服务器允许同时连接到游戏会话的最大玩家数量，最小值1，最大值为玩家会话最大限额 */
  MaximumPlayerSessionCount: number;
  /** 游戏会话数据 */
  GameServerSessionData: string | null;
  /** 运行游戏会话的实例的IP地址 */
  IpAddress: string | null;
  /** 运行游戏会话的实例的端口号 */
  Port: number | null;
  /** 游戏匹配数据 */
  MatchmakerData: string | null;
  /** 部署的玩家游戏数据 */
  PlacedPlayerSessions: PlacedPlayerSession[] | null;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string | null;
}

/** 服务部署组对象 */
declare interface GameServerSessionQueue {
  /** 服务部署组名字 */
  Name: string;
  /** 服务部署组资源 */
  GameServerSessionQueueArn: string;
  /** 目的fleet（可为别名）列表 */
  Destinations: GameServerSessionQueueDestination[] | null;
  /** 延迟策略集合 */
  PlayerLatencyPolicies: PlayerLatencyPolicy[] | null;
  /** 超时时间 */
  TimeoutInSeconds: number;
  /** 标签列表，最大长度50组 */
  Tags: Tag[] | null;
}

/** 服务部署组目的集合 */
declare interface GameServerSessionQueueDestination {
  /** 服务部署组目的的资源描述 */
  DestinationArn?: string | null;
  /** 服务部署组目的的状态 */
  FleetStatus?: string | null;
}

/** 允许网络访问范围 */
declare interface InboundPermission {
  /** 起始端口号，最小值1025 */
  FromPort?: number;
  /** IP 段范围，合法的 CIDR 地址类型，如所有IPv4来源：0.0.0.0/0 */
  IpRange?: string;
  /** 协议类型：TCP或者UDP */
  Protocol?: string;
  /** 终止端口号，最大值60000 */
  ToPort?: number;
}

/** 用于新增安全组 */
declare interface InboundPermissionAuthorization {
  /** 起始端口号 */
  FromPort?: number;
  /** IP 端范围，CIDR方式划分 */
  IpRange?: string;
  /** 协议类型 */
  Protocol?: string;
  /** 终止端口号 */
  ToPort?: number;
}

/** 需要移除的安全组 */
declare interface InboundPermissionRevocations {
  /** 起始端口号 */
  FromPort?: number;
  /** IP 端范围，CIDR 方式换分 */
  IpRange?: string;
  /** 协议类型：UDP或者TCP */
  Protocol?: string;
  /** 终止端口号 */
  ToPort?: number;
}

/** 实例信息 */
declare interface Instance {
  /** 服务部署ID */
  FleetId: string | null;
  /** 实例ID */
  InstanceId: string | null;
  /** IP地址 */
  IpAddress: string | null;
  /** dns */
  DnsName: string | null;
  /** 操作系统 */
  OperatingSystem: string | null;
  /** 状态 */
  Status: string | null;
  /** 类型 */
  Type: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 实例权重 */
  Weight: number | null;
  /** 实例是否保留, 1-保留，0-不保留,默认 */
  ReserveValue: number | null;
  /** 实例的私有IP地址 */
  PrivateIpAddress: string | null;
}

/** 实例访问凭证信息 */
declare interface InstanceAccess {
  /** 访问实例所需要的凭据 */
  Credentials: Credentials;
  /** 服务部署Id */
  FleetId: string;
  /** 实例ID */
  InstanceId: string;
  /** 实例公网IP */
  IpAddress: string;
  /** 操作系统 */
  OperatingSystem: string;
}

/** 服务器实例统计数据 */
declare interface InstanceCounts {
  /** 活跃的服务器实例数 */
  Active: number | null;
  /** 期望的服务器实例数 */
  Desired: number | null;
  /** 空闲的服务器实例数 */
  Idle: number | null;
  /** 服务器实例数最大限制 */
  MaxiNum: number | null;
  /** 服务器实例数最小限制 */
  MiniNum: number | null;
  /** 已开始创建，但未激活的服务器实例数 */
  Pending: number | null;
  /** 结束中的服务器实例数 */
  Terminating: number | null;
}

/** 实例扩展信息 */
declare interface InstanceExtend {
  /** 实例信息 */
  Instance: Instance | null;
  /** 实例状态 */
  State: string | null;
  /** 健康进程数 */
  HealthyProcessCnt: number | null;
  /** 活跃进程数 */
  ActiveProcessCnt: number | null;
  /** 当前游戏会话总数 */
  GameSessionCnt: number | null;
  /** 最大游戏会话数 */
  MaxGameSessionCnt: number | null;
  /** 当前玩家会话数 */
  PlayerSessionCnt: number | null;
  /** 最大玩家会话数 */
  MaxPlayerSessionCnt: number | null;
}

/** 服务器实例类型信息 */
declare interface InstanceTypeInfo {
  /** 类型名，例如“标准型SA1” */
  TypeName: string;
  /** 类型，例如"SA1.SMALL1" */
  InstanceType: string;
  /** CPU，例如1核就是1 */
  Cpu: number;
  /** 内存，例如2G就是2 */
  Memory: number;
  /** 网络收到包,例如25万PPS就是25 */
  NetworkCard: number;
}

/** 部署的玩家游戏会话 */
declare interface PlacedPlayerSession {
  /** 玩家Id */
  PlayerId: string;
  /** 玩家会话Id */
  PlayerSessionId: string;
}

/** 玩家自定义数据 */
declare interface PlayerDataMap {
  /** 玩家自定义数据键，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  Key: string;
  /** 玩家自定义数据值，最小长度不小于1个ASCII字符，最大长度不超过2048个ASCII字符 */
  Value: string;
}

/** 玩家延迟信息 */
declare interface PlayerLatency {
  /** 玩家Id */
  PlayerId?: string | null;
  /** 延迟对应的区域名称 */
  RegionIdentifier?: string | null;
  /** 毫秒级延迟 */
  LatencyInMilliseconds?: number;
}

/** 延迟策略 */
declare interface PlayerLatencyPolicy {
  /** 任意player允许的最大延迟，单位：毫秒 */
  MaximumIndividualPlayerLatencyMilliseconds: number | null;
  /** 放置新GameServerSession时强制实施策略的时间长度，单位：秒 */
  PolicyDurationSeconds?: number | null;
}

/** 玩家会话详情 */
declare interface PlayerSession {
  /** 玩家会话创建时间 */
  CreationTime: string;
  /** 游戏服务器会话运行的DNS标识 */
  DnsName: string | null;
  /** 舰队ID */
  FleetId: string;
  /** 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符 */
  GameServerSessionId: string;
  /** 游戏服务器会话运行的CVM地址 */
  IpAddress: string;
  /** 玩家自定义数据，最大长度2048个ASCII字符 */
  PlayerData: string | null;
  /** 玩家ID，最大长度1024个ASCII字符 */
  PlayerId: string | null;
  /** 玩家会话ID */
  PlayerSessionId: string;
  /** 端口号，最小值不小于1，最大值不超过60000 */
  Port: number;
  /** 玩家会话的状态（RESERVED = 1,ACTIVE = 2,COMPLETED = 3,TIMEDOUT = 4） */
  Status: string;
  /** 玩家会话终止时间 */
  TerminationTime: string | null;
}

/** 配额资源 */
declare interface QuotaResource {
  /** 资源类型，1生成包、2服务部署、3别名、4游戏服务器队列、5实例 */
  ResourceType: number | null;
  /** 总额度 */
  HardLimit: number | null;
  /** 剩余额度 */
  Remaining: number | null;
  /** 额外信息，可能为空 */
  ExtraInfo: string | null;
}

/** 云联网相关信息描述 */
declare interface RelatedCcnInfo {
  /** 云联网所属账号 */
  AccountId: string;
  /** 云联网 ID */
  CcnId: string;
  /** 关联云联网状态 */
  AttachType: string;
}

/** 资源创建规则 */
declare interface ResourceCreationLimitPolicy {
  /** 创建数量，最小值1，默认2 */
  NewGameServerSessionsPerCreator?: number;
  /** 单位时间，最小值1，默认3，单位分钟 */
  PolicyPeriodInMinutes?: number;
}

/** 路由策略 */
declare interface RoutingStrategy {
  /** 别名的路由策略的类型，有效值常规别名(SIMPLE)、终止别名(TERMINAL) */
  Type: string;
  /** 别名指向的队列的唯一标识符 */
  FleetId?: string | null;
  /** 与终端路由策略一起使用的消息文本，长度不小于1字符不超过1024字符 */
  Message?: string | null;
}

/** 运行配置 */
declare interface RuntimeConfiguration {
  /** 游戏会话进程超时，最小值1，最大值600，单位秒 */
  GameServerSessionActivationTimeoutSeconds?: number;
  /** 最大游戏会话数，最小值1，最大值2147483647 */
  MaxConcurrentGameServerSessionActivations?: number;
  /** 服务进程配置，至少有一个进程配置 */
  ServerProcesses?: ServerProcesse[];
}

/** 动态扩缩容配置 */
declare interface ScalingPolicy {
  /** 服务部署ID */
  FleetId: string | null;
  /** 名称 */
  Name: string | null;
  /** 状态 */
  Status: string | null;
  /** 保留参数 */
  ScalingAdjustment: string | null;
  /** 保留参数 */
  ScalingAdjustmentType: string | null;
  /** 保留参数 */
  ComparisonOperator: string | null;
  /** 保留参数 */
  Threshold: string | null;
  /** 保留参数 */
  EvaluationPeriods: string | null;
  /** 保留参数 */
  MetricName: string | null;
  /** 策略类型 */
  PolicyType: string | null;
  /** 基于规则的配置 */
  TargetConfiguration: TargetConfiguration | null;
}

/** 游戏服务进程 */
declare interface ServerProcesse {
  /** 并发执行数量，所有进程并发执行总数最小值1，最大值50 */
  ConcurrentExecutions?: number;
  /** 启动路径：Linux路径/local/game/ 或WIndows路径C:\game\，最小长度1，最大长度1024 */
  LaunchPath?: string;
  /** 启动参数，最小长度0，最大长度1024 */
  Parameters?: string;
}

/** 标签结构体 */
declare interface Tag {
  /** 标签键，最大长度127字节 */
  Key: string;
  /** 标签值，最大长度255字节 */
  Value: string;
}

/** 基于规则的动态扩缩容配置项 */
declare interface TargetConfiguration {
  /** 预留存率 */
  TargetValue?: number | null;
}

/** 重复周期配置 */
declare interface TimerConfiguration {
  /** 定时器重复周期类型（未定义0，单次1、按天2、按月3、按周4） */
  TimerType?: number | null;
  /** 定时器取值 */
  TimerValue?: TimerValue | null;
  /** 定时器开始时间 */
  BeginTime?: string | null;
  /** 定时器结束时间 */
  EndTime?: string | null;
}

/** 定时器弹性伸缩策略 */
declare interface TimerFleetCapacity {
  /** 扩缩容配置服务器舰队ID */
  FleetId?: string | null;
  /** 期望实例数 */
  DesiredInstances?: number | null;
  /** 最小实例数 */
  MinSize?: number | null;
  /** 最大实例数 */
  MaxSize?: number | null;
  /** 伸缩容间隔，单位：分钟 */
  ScalingInterval?: number | null;
  /** 扩缩容类型（手动1，自动2、未定义0） */
  ScalingType?: number | null;
  /** 基于目标的扩展策略的设置 */
  TargetConfiguration?: TargetConfiguration | null;
}

/** 定时器策略消息 */
declare interface TimerScalingPolicy {
  /** 定时器ID，进行encode，填写时更新 */
  TimerId?: string | null;
  /** 定时器名称 */
  TimerName?: string | null;
  /** 定时器状态(未定义0、未生效1、生效中2、已停止3、已过期4) */
  TimerStatus?: number | null;
  /** 定时器弹性伸缩策略 */
  TimerFleetCapacity?: TimerFleetCapacity | null;
  /** 重复周期配置 */
  TimerConfiguration?: TimerConfiguration | null;
}

/** 定时器取值配置 */
declare interface TimerValue {
  /** 每X天，执行一次(重复周期-按天/单次) */
  Day?: number | null;
  /** 每月从第x天，执行一次(重复周期-按月) */
  FromDay?: number | null;
  /** 每月到第x天，执行一次(重复周期-按月) */
  ToDay?: number | null;
  /** 重复周期-按周，周几（多个值,取值周一(1,2,3,4,5,6,7)周日） */
  WeekDays?: number[] | null;
}

declare interface AttachCcnInstancesRequest {
  /** 服务器舰队 Id */
  FleetId?: string;
  /** 云联网账号 Uin */
  AccountId?: string;
  /** 云联网 Id */
  CcnId?: string;
}

declare interface AttachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CopyFleetRequest {
  /** 服务器舰队 Id */
  FleetId: string;
  /** 复制数量，最小值1，最大值为剩余配额，可以根据[获取用户配额](https://cloud.tencent.com/document/product/1165/48732)接口获取。 */
  CopyNumber: number;
  /** 生成包 Id */
  AssetId?: string;
  /** 描述，最小长度0，最大长度100 */
  Description?: string;
  /** 网络配置 */
  InboundPermissions?: InboundPermission[];
  /** 服务器类型，参数根据[获取服务器实例类型列表](https://cloud.tencent.com/document/product/1165/48732)接口获取。 */
  InstanceType?: string;
  /** 服务器舰队类型，目前只支持ON_DEMAND类型 */
  FleetType?: string;
  /** 服务器舰队名称，最小长度1，最大长度50 */
  Name?: string;
  /** 保护策略：不保护NoProtection、完全保护FullProtection、时限保护TimeLimitProtection */
  NewGameServerSessionProtectionPolicy?: string;
  /** 资源创建限制策略 */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  /** 进程配置 */
  RuntimeConfiguration?: RuntimeConfiguration;
  /** 时限保护超时时间，默认60分钟，最小值5，最大值1440；当NewGameSessionProtectionPolicy为TimeLimitProtection时参数有效 */
  GameServerSessionProtectionTimeLimit?: number;
  /** 是否选择扩缩容：SCALING_SELECTED 或者 SCALING_UNSELECTED；默认是 SCALING_UNSELECTED */
  SelectedScalingType?: string;
  /** 是否选择云联网：CCN_SELECTED_BEFORE_CREATE（创建前关联）， CCN_SELECTED_AFTER_CREATE（创建后关联）或者 CCN_UNSELECTED（不关联）；默认是 CCN_UNSELECTED */
  SelectedCcnType?: string;
  /** 标签列表，最大长度50组 */
  Tags?: Tag[];
  /** 系统盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-500GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，50-500GB；容量以1为单位 */
  SystemDiskInfo?: DiskInfo;
  /** 数据盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-32000GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，10-32000GB；容量以10为单位 */
  DataDiskInfo?: DiskInfo[];
  /** 是否选择复制定时器策略：TIMER_SELECTED 或者 TIMER_UNSELECTED；默认是 TIMER_UNSELECTED */
  SelectedTimerType?: string;
  /** 云联网信息，包含对应的账号信息及所属id */
  CcnInfos?: CcnInfo[];
  /** fleet公网出带宽最大值，默认100Mbps，范围1-200Mbps */
  InternetMaxBandwidthOut?: number;
}

declare interface CopyFleetResponse {
  /** 服务器舰队属性 */
  FleetAttributes: FleetAttributes[] | null;
  /** 服务器舰队数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAliasRequest {
  /** 名字，长度不小于1字符不超过1024字符 */
  Name: string;
  /** 别名的路由配置 */
  RoutingStrategy: RoutingStrategy;
  /** 别名的可读说明，长度不小于1字符不超过1024字符 */
  Description?: string;
  /** 标签列表，最大长度50组 */
  Tags?: Tag[];
}

declare interface CreateAliasResponse {
  /** 别名对象 */
  Alias?: Alias;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAssetRequest {
  /** 生成包的ZIP包名，例如：server.zip */
  BucketKey: string;
  /** 生成包名字，最小长度为1，最大长度为64 */
  AssetName: string;
  /** 生成包版本，最小长度为1，最大长度为64 */
  AssetVersion: string;
  /** 生成包所在地域，详见产品支持的 [地域列表](https://cloud.tencent.com/document/api/1165/42053) */
  AssetRegion: string;
  /** 生成包可运行的操作系统，若传入参数为CentOS7.16则不需要传入ImageId字段，否则，需要传入Imageid字段（该方式是为了兼容之前的版本，后续建议使用ImageId来替代该字段）。这里可通过[DescribeAssetSystems](https://cloud.tencent.com/document/product/1165/49191)接口获取asset支持的操作系统进行传入（使用AssetSupportSys的OsVersion字段） */
  OperateSystem: string;
  /** 生成包支持的操作系统镜像id，若传入OperateSystem字段的值是CentOS7.16，则不需要传入该值；如果不是，则需要通过[DescribeAssetSystems](https://cloud.tencent.com/document/product/1165/49191)接口获取asset支持的操作系统ImageId进行传入 */
  ImageId?: string;
  /** 标签列表，最大长度50组 */
  Tags?: Tag[];
}

declare interface CreateAssetResponse {
  /** 生成包ID */
  AssetId: string;
  /** 生成包的全局唯一资源标识符 */
  AssetArn: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAssetWithImageRequest {
  /** 生成包名字，最小长度为1，最大长度为64 */
  AssetName: string;
  /** 生成包版本，最小长度为1，最大长度为64 */
  AssetVersion: string;
  /** 生成包所在地域，详见产品支持的 [地域列表](https://cloud.tencent.com/document/api/1165/42053) */
  AssetRegion: string;
  /** 生成包支持的操作系统镜像id */
  ImageId: string;
  /** 操作系统镜像包大小，比如：40GB，支持单位 KB、MB、GB */
  ImageSize: string;
  /** 操作系统镜像包名称，最小长度为1，最大长度为64 */
  ImageOs: string;
  /** 操作系统镜像包类型，CentOS 或者 Windows */
  OsType: string;
  /** 操作系统镜像包类型，当前只支持 SHARED_IMAGE */
  ImageType: string;
  /** 操作系统镜像包位数，32 或者 64 */
  OsBit: number;
}

declare interface CreateAssetWithImageResponse {
  /** 生成包ID */
  AssetId?: string;
  /** 生成包的全局唯一资源标识符 */
  AssetArn?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFleetRequest {
  /** 生成包 Id */
  AssetId?: string;
  /** 描述，最小长度0，最大长度100 */
  Description?: string;
  /** 网络配置 */
  InboundPermissions?: InboundPermission[];
  /** 服务器类型，参数根据[获取服务器实例类型列表](https://cloud.tencent.com/document/product/1165/48732)接口获取。 */
  InstanceType?: string;
  /** 服务器舰队类型，目前只支持ON_DEMAND类型 */
  FleetType?: string;
  /** 服务器舰队名称，最小长度1，最大长度50 */
  Name?: string;
  /** 保护策略：不保护NoProtection、完全保护FullProtection、时限保护TimeLimitProtection */
  NewGameServerSessionProtectionPolicy?: string;
  /** VPC 网络 Id，对等连接已不再使用 */
  PeerVpcId?: string;
  /** 资源创建限制策略 */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  /** 进程配置 */
  RuntimeConfiguration?: RuntimeConfiguration;
  /** VPC 子网，对等连接已不再使用 */
  SubNetId?: string;
  /** 时限保护超时时间，默认60分钟，最小值5，最大值1440；当NewGameSessionProtectionPolicy为TimeLimitProtection时参数有效 */
  GameServerSessionProtectionTimeLimit?: number;
  /** 标签列表，最大长度50组 */
  Tags?: Tag[];
  /** 系统盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-500GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，50-500GB；容量以1为单位 */
  SystemDiskInfo?: DiskInfo;
  /** 数据盘，储存类型为 SSD 云硬盘（CLOUD_SSD）时，100-32000GB；储存类型为高性能云硬盘（CLOUD_PREMIUM）时，10-32000GB；容量以10为单位 */
  DataDiskInfo?: DiskInfo[];
  /** 云联网信息，包含对应的账号信息及所属id */
  CcnInfos?: CcnInfo[];
  /** fleet公网出带宽最大值，默认100Mbps，范围1-200Mbps */
  InternetMaxBandwidthOut?: number;
}

declare interface CreateFleetResponse {
  /** 服务器舰队属性 */
  FleetAttributes: FleetAttributes | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateGameServerSessionQueueRequest {
  /** 游戏服务器会话队列名称，长度1~128 */
  Name: string;
  /** 目的服务器舰队（可为别名）列表 */
  Destinations?: GameServerSessionQueueDestination[];
  /** 延迟策略集合 */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];
  /** 超时时间（单位秒，默认值为600秒） */
  TimeoutInSeconds?: number;
  /** 标签列表，最大长度50组 */
  Tags?: Tag[];
}

declare interface CreateGameServerSessionQueueResponse {
  /** 游戏服务器会话队列 */
  GameServerSessionQueue: GameServerSessionQueue;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateGameServerSessionRequest {
  /** 最大玩家数量，最小值不小于0 */
  MaximumPlayerSessionCount: number;
  /** 别名ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID */
  AliasId?: string;
  /** 创建者ID，最大长度不超过1024个ASCII字符 */
  CreatorId?: string;
  /** 舰队ID。每个请求需要指定别名ID 或者舰队 ID，如果两个同时指定时，优先选择舰队 ID */
  FleetId?: string;
  /** 游戏属性，最大长度不超过16组 */
  GameProperties?: GameProperty[];
  /** 游戏服务器会话属性详情，最大长度不超过4096个ASCII字符 */
  GameServerSessionData?: string;
  /** 游戏服务器会话自定义ID，最大长度不超过4096个ASCII字符 */
  GameServerSessionId?: string;
  /** 幂等token，最大长度不超过48个ASCII字符 */
  IdempotencyToken?: string;
  /** 游戏服务器会话名称，最大长度不超过1024个ASCII字符 */
  Name?: string;
}

declare interface CreateGameServerSessionResponse {
  /** 游戏服务器会话 */
  GameServerSession?: GameServerSession | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAliasRequest {
  /** 要删除的别名ID */
  AliasId: string;
}

declare interface DeleteAliasResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAssetRequest {
  /** 生成包ID */
  AssetId: string;
}

declare interface DeleteAssetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteFleetRequest {
  /** 服务器舰队 Id */
  FleetId: string;
}

declare interface DeleteFleetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteGameServerSessionQueueRequest {
  /** 游戏服务器会话队列名字，长度1~128 */
  Name: string;
}

declare interface DeleteGameServerSessionQueueResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteScalingPolicyRequest {
  /** 服务器舰队ID */
  FleetId: string;
  /** 扩缩容策略名称，最小长度为0，最大长度为1024 */
  Name?: string;
}

declare interface DeleteScalingPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTimerScalingPolicyRequest {
  /** 定时器ID, 进行encode */
  TimerId?: string;
  /** 扩缩容配置服务器舰队ID */
  FleetId?: string;
  /** 定时器名称 */
  TimerName?: string;
}

declare interface DeleteTimerScalingPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAliasRequest {
  /** 要检索的队列别名的唯一标识符 */
  AliasId: string;
}

declare interface DescribeAliasResponse {
  /** 别名对象 */
  Alias?: Alias | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetRequest {
  /** 生成包ID */
  AssetId: string;
}

declare interface DescribeAssetResponse {
  /** 生成包信息 */
  Asset?: Asset;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetSystemsRequest {
  /** 生成包支持的操作系统类型 */
  OsType?: string;
  /** 生成包支持的操作系统位数 */
  OsBit?: number;
}

declare interface DescribeAssetSystemsResponse {
  /** 生成包支持的操作系统类型列表 */
  AssetSupportSys?: AssetSupportSys[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssetsRequest {
  /** 生成包支持的可部署 [地域列表](https://cloud.tencent.com/document/api/1165/42053) */
  AssetRegion: string;
  /** 偏移，代表页数，与asset实际数量相关 */
  Offset: number;
  /** 前端界面每页显示的最大条数，不超过100 */
  Limit: number;
  /** 搜索条件，支持包ID或包名字过滤，该字段会逐步废弃，建议使用 Filters 字段 */
  Filter?: string;
  /** 资源过滤字段，可以按照资源名称、资源ID和标签进行过滤- 资源名称过滤 - Key: 固定字符串 "resource:name" - Values: 资源名称数组（生成包当前仅支持单个名称的过滤）- 资源ID过滤 - Key: 固定字符串 "resource:resourceId" - Values: 生成包ID数组（生成包当前仅支持单个生成包ID的过滤）- 标签过滤 - 通过标签键过滤 - Key: 固定字符串 "tag:key" - Values 不传 - 通过标签键值过滤 - Key: 固定字符串 "tag:key-value" - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"] */
  Filters?: Filter[];
}

declare interface DescribeAssetsResponse {
  /** 生成包总数 */
  TotalCount?: number;
  /** 生成包列表 */
  Assets?: Asset[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCcnInstancesRequest {
  /** 服务器舰队 Id */
  FleetId?: string;
}

declare interface DescribeCcnInstancesResponse {
  /** 云联网实例信息 */
  CcnInstanceSets: CcnInstanceSets[] | null;
  /** 云联网实例个数，最小值为0 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFleetAttributesRequest {
  /** 服务器舰队 Ids */
  FleetIds?: string[];
  /** 结果返回最大数量，默认值20，最大值100 */
  Limit?: number;
  /** 返回结果偏移，最小值0 */
  Offset?: number;
}

declare interface DescribeFleetAttributesResponse {
  /** 服务器舰队属性 */
  FleetAttributes: FleetAttributes[] | null;
  /** 服务器舰队总数，最小值0 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFleetCapacityRequest {
  /** 服务器舰队ID列表 */
  FleetIds: string[];
  /** 结果返回最大数量，最大值 100 */
  Limit?: number;
  /** 返回结果偏移，最小值 0 */
  Offset?: number;
}

declare interface DescribeFleetCapacityResponse {
  /** 服务器舰队的容量配置 */
  FleetCapacity: FleetCapacity[] | null;
  /** 结果返回最大数量 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFleetEventsRequest {
  /** 服务器舰队 Id */
  FleetId: string;
  /** 分页时返回服务器舰队事件的数量，默认为20，最大值为100 */
  Limit?: number;
  /** 分页时的数据偏移量，默认为0 */
  Offset?: number;
  /** 事件代码 */
  EventCode?: string;
  /** 发生事件的开始时间 */
  StartTime?: string;
  /** 发生事件的结束时间 */
  EndTime?: string;
}

declare interface DescribeFleetEventsResponse {
  /** 返回的事件列表 */
  Events: Event[];
  /** 返回的事件总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFleetPortSettingsRequest {
  /** 服务器舰队 Id */
  FleetId: string;
}

declare interface DescribeFleetPortSettingsResponse {
  /** 安全组信息 */
  InboundPermissions?: InboundPermission[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFleetRelatedResourcesRequest {
  /** 服务器舰队 Id */
  FleetId: string;
}

declare interface DescribeFleetRelatedResourcesResponse {
  /** 与服务器舰队关联的资源信息 */
  Resources: FleetRelatedResource[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFleetStatisticDetailsRequest {
  /** 服务器舰队ID */
  FleetId?: string;
  /** 查询开始时间，时间格式：YYYY-MM-DD hh:mm:ss */
  BeginTime?: string;
  /** 查询结束时间，时间格式：YYYY-MM-DD hh:mm:ss */
  EndTime?: string;
  /** 结果返回最大数量，最小值0，最大值100 */
  Limit?: number;
  /** 返回结果偏移，最小值0 */
  Offset?: number;
}

declare interface DescribeFleetStatisticDetailsResponse {
  /** 服务部署统计详情列表 */
  DetailList: FleetStatisticDetail[] | null;
  /** 记录总数 */
  TotalCount: number | null;
  /** 统计时间类型 */
  TimeType: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFleetStatisticFlowsRequest {
  /** 服务器舰队ID */
  FleetId?: string;
  /** 查询开始时间，时间格式：YYYY-MM-DD hh:mm:ss */
  BeginTime?: string;
  /** 查询结束时间，时间格式：YYYY-MM-DD hh:mm:ss */
  EndTime?: string;
  /** 结果返回最大数量，最小值0，最大值100 */
  Limit?: number;
  /** 返回结果偏移，最小值0 */
  Offset?: number;
}

declare interface DescribeFleetStatisticFlowsResponse {
  /** 流量统计列表 */
  UsedFlowList: FleetStatisticFlows[] | null;
  /** 时长统计列表 */
  UsedTimeList: FleetStatisticTimes[] | null;
  /** 记录总数 */
  TotalCount: number | null;
  /** 统计时间类型，取值：小时和天 */
  TimeType: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFleetStatisticSummaryRequest {
  /** 服务器舰队ID */
  FleetId?: string;
  /** 查询开始时间，时间格式: YYYY-MM-DD hh:mm:ss */
  BeginTime?: string;
  /** 查询结束时间，时间格式: YYYY-MM-DD hh:mm:ss */
  EndTime?: string;
}

declare interface DescribeFleetStatisticSummaryResponse {
  /** 总时长，单位秒 */
  TotalUsedTimeSeconds: string | null;
  /** 总流量，单位MB */
  TotalUsedFlowMegaBytes: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFleetUtilizationRequest {
  /** 服务器舰队 Ids */
  FleetIds: string[];
}

declare interface DescribeFleetUtilizationResponse {
  /** 服务器舰队利用率 */
  FleetUtilization: FleetUtilization[] | null;
  /** 总数，最小值0 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGameServerSessionDetailsRequest {
  /** 别名ID */
  AliasId?: string;
  /** 舰队ID */
  FleetId?: string;
  /** 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符 */
  GameServerSessionId?: string;
  /** 单次查询记录数上限 */
  Limit?: number;
  /** 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  NextToken?: string;
  /** 游戏服务器会话状态(ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR) */
  StatusFilter?: string;
}

declare interface DescribeGameServerSessionDetailsResponse {
  /** 游戏服务器会话详情列表 */
  GameServerSessionDetails?: GameServerSessionDetail[] | null;
  /** 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  NextToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGameServerSessionPlacementRequest {
  /** 游戏服务器会话放置的唯一标识符 */
  PlacementId: string;
}

declare interface DescribeGameServerSessionPlacementResponse {
  /** 游戏服务器会话放置 */
  GameServerSessionPlacement?: GameServerSessionPlacement;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGameServerSessionQueuesRequest {
  /** 游戏服务器会话队列名称数组，单个名字长度1~128 */
  Names?: string[];
  /** 结果返回最大数量，最小值0，最大值100 */
  Limit?: number;
  /** 返回结果偏移，最小值0 */
  Offset?: number;
  /** 资源过滤字段，可以按照资源名称、资源ID和标签进行过滤- 资源名称过滤 - Key: 固定字符串 "resource:name" - Values: 资源名称数组（游戏服务器会话队列支持多个名称的过滤）- 标签过滤 - 通过标签键过滤 - Key: 固定字符串 "tag:key" - Values 不传 - 通过标签键值过滤 - Key: 固定字符串 "tag:key-value" - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"] */
  Filters?: Filter[];
}

declare interface DescribeGameServerSessionQueuesResponse {
  /** 游戏服务器会话队列数组 */
  GameServerSessionQueues?: GameServerSessionQueue[] | null;
  /** 游戏服务器会话队列总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGameServerSessionsRequest {
  /** 别名ID */
  AliasId?: string;
  /** 舰队ID */
  FleetId?: string;
  /** 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符 */
  GameServerSessionId?: string;
  /** 单次查询记录数上限 */
  Limit?: number;
  /** 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  NextToken?: string;
  /** 游戏服务器会话状态(ACTIVE,ACTIVATING,TERMINATED,TERMINATING,ERROR) */
  StatusFilter?: string;
}

declare interface DescribeGameServerSessionsResponse {
  /** 游戏服务器会话列表 */
  GameServerSessions?: GameServerSession[] | null;
  /** 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  NextToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceLimitRequest {
}

declare interface DescribeInstanceLimitResponse {
  /** 限额 */
  Limit?: number;
  /** 详细信息 */
  ExtraInfos?: ExtraInfos[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstanceTypesRequest {
}

declare interface DescribeInstanceTypesResponse {
  /** 服务器实例类型列表 */
  InstanceTypeList?: InstanceTypeInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstancesExtendRequest {
  /** 服务器舰队ID */
  FleetId: string;
  /** 返回结果偏移，最小值0 */
  Offset: number;
  /** 结果返回最大数量，最小值0，最大值100 */
  Limit: number;
  /** CVM实例公网IP */
  IpAddress?: string;
}

declare interface DescribeInstancesExtendResponse {
  /** 实例信息列表 */
  Instances: InstanceExtend[] | null;
  /** 梳理信息总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 服务器舰队ID */
  FleetId?: string;
  /** CVM实例ID */
  InstanceId?: string;
  /** 结果返回最大数量，最小值0，最大值100 */
  Offset?: number;
  /** 返回结果偏移，最小值0 */
  Limit?: number;
  /** CVM实例公网IP */
  IpAddress?: string;
}

declare interface DescribeInstancesResponse {
  /** 实例信息列表 */
  Instances: Instance[] | null;
  /** 结果返回最大数量 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribePlayerSessionsRequest {
  /** 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符 */
  GameServerSessionId?: string;
  /** 单次查询记录数上限 */
  Limit?: number;
  /** 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  NextToken?: string;
  /** 玩家ID，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  PlayerId?: string;
  /** 玩家会话ID，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  PlayerSessionId?: string;
  /** 玩家会话状态（RESERVED,ACTIVE,COMPLETED,TIMEDOUT） */
  PlayerSessionStatusFilter?: string;
}

declare interface DescribePlayerSessionsResponse {
  /** 玩家会话列表 */
  PlayerSessions?: PlayerSession[] | null;
  /** 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  NextToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRuntimeConfigurationRequest {
  /** 服务器舰队 Id */
  FleetId: string;
}

declare interface DescribeRuntimeConfigurationResponse {
  /** 服务器舰队运行配置信息 */
  RuntimeConfiguration?: RuntimeConfiguration | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeScalingPoliciesRequest {
  /** 服务器舰队ID */
  FleetId?: string;
  /** 状态过滤条件，取值：ACTIVE表示活跃 */
  StatusFilter?: string;
  /** 返回结果偏移，最小值0 */
  Offset?: number;
  /** 结果返回最大数量，最小值0，最大值100 */
  Limit?: number;
}

declare interface DescribeScalingPoliciesResponse {
  /** 动态扩缩容配置策略数组 */
  ScalingPolicies?: ScalingPolicy[] | null;
  /** 动态扩缩容配置策略总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTimerScalingPoliciesRequest {
  /** 扩缩容配置服务器舰队ID */
  FleetId?: string;
  /** 定时器名称 */
  TimerName?: string;
  /** 定时器开始时间 */
  BeginTime?: string;
  /** 定时器结束时间 */
  EndTime?: string;
  /** 分页偏移量 */
  Offset?: number;
  /** 页大小 */
  Limit?: number;
}

declare interface DescribeTimerScalingPoliciesResponse {
  /** 定时器扩缩容策略配置 */
  TimerScalingPolicies: TimerScalingPolicy[] | null;
  /** 定时器总数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserQuotaRequest {
  /** 资源类型 */
  ResourceType?: number;
}

declare interface DescribeUserQuotaResponse {
  /** 配额资源信息 */
  QuotaResource?: QuotaResource | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeUserQuotasRequest {
}

declare interface DescribeUserQuotasResponse {
  /** 配额信息列表 */
  QuotaResource?: QuotaResource[] | null;
  /** 配额信息列表总数，最小值0 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetachCcnInstancesRequest {
  /** 服务器舰队 Id */
  FleetId?: string;
}

declare interface DetachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EndGameServerSessionAndProcessRequest {
  /** 游戏服务器会话ID，如果传入游戏服务器会话ID，结束对应进程以及游戏服务器会话和玩家会话。 */
  GameServerSessionId?: string;
  /** CVM的公网IP地址，需同时传入IpAddress和Port，结束IpAddress和Port对应的进程以及游戏服务器会话（如果存在）和玩家会话（如果存在），单独传入IpAddress不生效。 */
  IpAddress?: string;
  /** 端口号，取值范围1025-60000，需同时传入IpAddress和Port，结束IpAddress和Port对应的进程以及游戏服务器会话（如果存在）和玩家会话（如果存在），单独传入Port不生效。 */
  Port?: number;
}

declare interface EndGameServerSessionAndProcessResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetGameServerInstanceLogUrlRequest {
  /** 游戏舰队ID */
  FleetId: string;
  /** 实例ID */
  InstanceId?: string;
  /** 实例IP */
  ServerIp?: string;
  /** 偏移量 */
  Offset?: number;
  /** 每次条数 */
  Size?: number;
}

declare interface GetGameServerInstanceLogUrlResponse {
  /** 日志下载URL的数组，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  PresignedUrls: string[] | null;
  /** 总条数 */
  Total: number;
  /** 是否还有没拉取完的 */
  HasNext: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetGameServerSessionLogUrlRequest {
  /** 游戏服务器会话ID，最小长度不小于1个ASCII字符，最大长度不超过48个ASCII字符 */
  GameServerSessionId: string;
}

declare interface GetGameServerSessionLogUrlResponse {
  /** 日志下载URL，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  PreSignedUrl?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetInstanceAccessRequest {
  /** 服务器舰队ID */
  FleetId: string;
  /** 实例Id */
  InstanceId: string;
}

declare interface GetInstanceAccessResponse {
  /** 实例登录所需要的凭据 */
  InstanceAccess?: InstanceAccess;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetUploadCredentialsRequest {
  /** 生成包所在地域，详见产品支持的 [地域列表](https://cloud.tencent.com/document/api/1165/42053) */
  AssetRegion: string;
  /** 生成包的ZIP包名，例如：server.zip */
  BucketKey: string;
}

declare interface GetUploadCredentialsResponse {
  /** 上传文件授权信息Auth */
  BucketAuth?: string;
  /** Bucket名字 */
  BucketName?: string;
  /** 生成包所在地域 */
  AssetRegion?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetUploadFederationTokenRequest {
}

declare interface GetUploadFederationTokenResponse {
  /** 临时证书的过期时间，Unix 时间戳，精确到秒 */
  ExpiredTime?: number;
  /** 临时证书 */
  AssetCredentials?: AssetCredentials;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface JoinGameServerSessionBatchRequest {
  /** 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符 */
  GameServerSessionId: string;
  /** 玩家ID列表，最小1组，最大25组 */
  PlayerIds: string[];
  /** 玩家自定义数据 */
  PlayerDataMap?: PlayerDataMap;
}

declare interface JoinGameServerSessionBatchResponse {
  /** 玩家会话列表，最大25组 */
  PlayerSessions?: PlayerSession[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface JoinGameServerSessionRequest {
  /** 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符 */
  GameServerSessionId: string;
  /** 玩家ID，最大长度1024个ASCII字符 */
  PlayerId: string;
  /** 玩家自定义数据，最大长度2048个ASCII字符 */
  PlayerData?: string;
}

declare interface JoinGameServerSessionResponse {
  /** 玩家会话 */
  PlayerSession?: PlayerSession | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListAliasesRequest {
  /** 名字，长度不小于1字符不超过1024字符 */
  Name?: string;
  /** 路由策略类型，有效值常规别名(SIMPLE)、终止别名(TERMINAL) */
  RoutingStrategyType?: string;
  /** 要返回的最大结果数，最小值1 */
  Limit?: number;
  /** 偏移，默认0 */
  Offset?: number;
  /** 排序字段，例如CreationTime */
  OrderBy?: string;
  /** 排序方式，有效值asc|desc */
  OrderWay?: string;
  /** 资源过滤字段，可以按照资源名称和标签进行过滤- 资源名称过滤 - Key: 固定字符串 "resource:name" - Values: 资源名称数组（舰队当前仅支持单个名称的过滤）- 标签过滤 - 通过标签键过滤 - Key: 固定字符串 "tag:key" - Values 不传 - 通过标签键值过滤 - Key: 固定字符串 "tag:key-value" - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"] */
  Filters?: Filter[];
}

declare interface ListAliasesResponse {
  /** 别名对象数组 */
  Aliases?: Alias[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ListFleetsRequest {
  /** 生成包 Id */
  AssetId?: string;
  /** 结果返回最大值，暂未使用 */
  Limit?: number;
  /** 结果返回偏移，暂未使用 */
  Offset?: number;
  /** 资源过滤字段，可以按照资源名称和标签进行过滤- 资源名称过滤 - Key: 固定字符串 "resource:name" - Values: 资源名称数组（当前仅支持单个名称的过滤）- 标签过滤 - 通过标签键过滤 - Key: 固定字符串 "tag:key" - Values 不传 - 通过标签键值过滤 - Key: 固定字符串 "tag:key-value" - Values: 标签键值对数组，例如 ["key1:value1", "key1:value2", "key2:value2"] */
  Filters?: Filter[];
}

declare interface ListFleetsResponse {
  /** 服务器舰队 Id 列表 */
  FleetIds?: string[] | null;
  /** 服务器舰队 Id 总数，最小值0 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PutScalingPolicyRequest {
  /** 扩缩容配置服务器舰队ID */
  FleetId: string;
  /** 扩缩容策略名称，最小长度为1，最大长度为1024 */
  Name?: string;
  /** 扩缩容调整值，ScalingAdjustmentType取值PercentChangeInCapacity时，取值范围-99~99ScalingAdjustmentType取值ChangeInCapacity或ExactCapacity时，最小值要缩容的最多CVM个数，最大值为实际最大的CVM个数限额 */
  ScalingAdjustment?: number;
  /** 扩缩容调整类型，取值（ChangeInCapacity，ExactCapacity，PercentChangeInCapacity） */
  ScalingAdjustmentType?: string;
  /** 扩缩容指标阈值 */
  Threshold?: number;
  /** 扩缩容策略比较符，取值：>,>=,<,<= */
  ComparisonOperator?: string;
  /** 单个策略持续时间长度（分钟） */
  EvaluationPeriods?: number;
  /** 扩缩容参与计算的指标名称，PolicyType取值RuleBased，MetricName取值（AvailableGameServerSessions，AvailableCustomCount，PercentAvailableCustomCount，ActiveInstances，IdleInstances，CurrentPlayerSessions和PercentIdleInstances）；PolicyType取值TargetBased时，MetricName取值PercentAvailableGameSessions */
  MetricName?: string;
  /** 策略类型，取值：TargetBased表示基于目标的策略；RuleBased表示基于规则的策略 */
  PolicyType?: string;
  /** 扩缩容目标值配置，只有TargetBased类型的策略生效 */
  TargetConfiguration?: TargetConfiguration;
}

declare interface PutScalingPolicyResponse {
  /** 规则名称 */
  Name?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface PutTimerScalingPolicyRequest {
  /** 定时器策略消息 */
  TimerScalingPolicy?: TimerScalingPolicy;
}

declare interface PutTimerScalingPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResolveAliasRequest {
  /** 要获取fleetId的别名ID */
  AliasId: string;
}

declare interface ResolveAliasResponse {
  /** 别名指向的fleet的唯一标识符 */
  FleetId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SearchGameServerSessionsRequest {
  /** 别名ID */
  AliasId?: string;
  /** 舰队ID */
  FleetId?: string;
  /** 单次查询记录数上限 */
  Limit?: number;
  /** 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  NextToken?: string;
  /** 搜索条件表达式，支持如下变量gameServerSessionName 游戏会话名称 StringgameServerSessionId 游戏会话ID StringmaximumSessions 最大的玩家会话数 NumbercreationTimeMillis 创建时间，单位：毫秒 NumberplayerSessionCount 当前玩家会话数 NumberhasAvailablePlayerSessions 是否有可用玩家数 String 取值true或falsegameServerSessionProperties 游戏会话属性 String表达式String类型 等于=，不等于<>判断表示Number类型支持 =,<>,>,>=,<,<=例如：FilterExpression取值playerSessionCount>=2 AND hasAvailablePlayerSessions=true"表示查找至少有两个玩家，而且有可用玩家会话的游戏会话。FilterExpression取值gameServerSessionProperties.K1 = 'V1' AND gameServerSessionProperties.K2 = 'V2' OR gameServerSessionProperties.K3 = 'V3'表示查询满足如下游戏服务器会话属性的游戏会话{ "GameProperties":[ { "Key":"K1", "Value":"V1" }, { "Key":"K2", "Value":"V2" }, { "Key":"K3", "Value":"V3" } ]} */
  FilterExpression?: string;
  /** 排序条件关键字支持排序字段gameServerSessionName 游戏会话名称 StringgameServerSessionId 游戏会话ID StringmaximumSessions 最大的玩家会话数 NumbercreationTimeMillis 创建时间，单位：毫秒 NumberplayerSessionCount 当前玩家会话数 Number */
  SortExpression?: string;
}

declare interface SearchGameServerSessionsResponse {
  /** 游戏服务器会话列表 */
  GameServerSessions?: GameServerSession[] | null;
  /** 页偏移，用于查询下一页，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  NextToken?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetServerReservedRequest {
  /** 扩缩容配置服务器舰队ID */
  FleetId: string;
  /** 实例ID */
  InstanceId: string;
  /** 实例是否保留, 1-保留，0-不保留,默认 */
  ReserveValue?: number;
}

declare interface SetServerReservedResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetServerWeightRequest {
  /** 服务器舰队ID */
  FleetId: string;
  /** 实例ID */
  InstanceId: string;
  /** 权重，最小值0，最大值10，默认值5 */
  Weight: number;
}

declare interface SetServerWeightResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartFleetActionsRequest {
  /** 服务器舰队 Id */
  FleetId: string;
  /** 服务器舰队扩展策略，值为["AUTO_SCALING"] */
  Actions?: string[];
}

declare interface StartFleetActionsResponse {
  /** 服务器舰队 Id */
  FleetId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StartGameServerSessionPlacementRequest {
  /** 开始部署游戏服务器会话的唯一标识符，最大值48个ASCII字符，模式：[a-zA-Z0-9-]+ */
  PlacementId: string;
  /** 游戏服务器会话队列名称 */
  GameServerSessionQueueName: string;
  /** 游戏服务器允许同时连接到游戏会话的最大玩家数量，最小值1，最大值为玩家会话最大限额 */
  MaximumPlayerSessionCount: number;
  /** 玩家游戏会话信息 */
  DesiredPlayerSessions?: DesiredPlayerSession[];
  /** 玩家游戏会话属性 */
  GameProperties?: GameProperty[];
  /** 游戏服务器会话数据，最大长度不超过4096个ASCII字符 */
  GameServerSessionData?: string;
  /** 游戏服务器会话名称，最大长度不超过4096个ASCII字符 */
  GameServerSessionName?: string;
  /** 玩家延迟 */
  PlayerLatencies?: PlayerLatency[];
}

declare interface StartGameServerSessionPlacementResponse {
  /** 游戏服务器会话放置 */
  GameServerSessionPlacement?: GameServerSessionPlacement;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopFleetActionsRequest {
  /** 服务器舰队 Id */
  FleetId: string;
  /** 服务器舰队扩展策略，值为["AUTO_SCALING"] */
  Actions?: string[];
}

declare interface StopFleetActionsResponse {
  /** 服务器舰队 Id */
  FleetId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface StopGameServerSessionPlacementRequest {
  /** 游戏服务器会话放置的唯一标识符 */
  PlacementId: string;
}

declare interface StopGameServerSessionPlacementResponse {
  /** 游戏服务器会话放置 */
  GameServerSessionPlacement?: GameServerSessionPlacement;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAliasRequest {
  /** 要更新的别名的唯一标识符 */
  AliasId: string;
  /** 名字，长度不小于1字符不超过1024字符 */
  Name?: string;
  /** 别名的可读说明，长度不小于1字符不超过1024字符 */
  Description?: string;
  /** 别名的路由配置 */
  RoutingStrategy?: RoutingStrategy;
}

declare interface UpdateAliasResponse {
  /** 别名对象 */
  Alias?: Alias | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateAssetRequest {
  /** 生成包ID */
  AssetId: string;
  /** 生成包名字，最小长度为1，最大长度为64 */
  AssetName: string;
  /** 生成包版本，最小长度为1，最大长度为64 */
  AssetVersion: string;
}

declare interface UpdateAssetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateBucketAccelerateOptRequest {
  /** true为开启全球加速，false为关闭 */
  Allowed: boolean;
}

declare interface UpdateBucketAccelerateOptResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateBucketCORSOptRequest {
  /** 允许的访问来源;具体参见 [cos文档](https://cloud.tencent.com/document/product/436/8279) */
  AllowedOrigins: string[];
  /** 允许的 HTTP 操作方法;可以配置多个:PUT、GET、POST、HEAD。[cos文档](https://cloud.tencent.com/document/product/436/8279) */
  AllowedMethods: string[];
  /** 用于指定允许浏览器发送 CORS 请求时携带的自定义 HTTP 请求头部;可以配置*，代表允许所有头部，为了避免遗漏，推荐配置为*。[cos文档](https://cloud.tencent.com/document/product/436/8279) */
  AllowedHeaders?: string[];
  /** 跨域资源共享配置的有效时间，单位为秒。[cos文档](https://cloud.tencent.com/document/product/436/8279) */
  MaxAgeSeconds?: number;
  /** 允许浏览器获取的 CORS 请求响应中的头部，不区分大小写；默认情况下浏览器只能访问简单响应头部：Cache-Control、Content-Type、Expires、Last-Modified，如果需要访问其他响应头部，需要添加 ExposeHeader 配置。[cos文档](https://cloud.tencent.com/document/product/436/8279) */
  ExposeHeaders?: string[];
}

declare interface UpdateBucketCORSOptResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateFleetAttributesRequest {
  /** 服务器舰队 Id */
  FleetId: string;
  /** 服务器舰队描述，最小长度0，最大长度100 */
  Description?: string;
  /** 服务器舰队名称，最小长度1，最大长度50 */
  Name?: string;
  /** 保护策略：不保护NoProtection、完全保护FullProtection、时限保护TimeLimitProtection */
  NewGameSessionProtectionPolicy?: string;
  /** 资源创建限制策略 */
  ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy;
  /** 时限保护超时时间，默认60分钟，最小值5，最大值1440；当NewGameSessionProtectionPolicy为TimeLimitProtection时参数有效 */
  GameServerSessionProtectionTimeLimit?: number;
}

declare interface UpdateFleetAttributesResponse {
  /** 服务器舰队Id */
  FleetId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateFleetCapacityRequest {
  /** 服务器舰队ID */
  FleetId: string;
  /** 期望的服务器实例数 */
  DesiredInstances?: number;
  /** 服务器实例数最小限制，最小值0，最大值不超过最高配额查看各地区最高配额减1 */
  MinSize?: number;
  /** 服务器实例数最大限制，最小值1，最大值不超过最高配额查看各地区最高配额 */
  MaxSize?: number;
  /** 服务器伸缩容间隔，单位分钟，最小值3，最大值30，默认值10 */
  ScalingInterval?: number;
}

declare interface UpdateFleetCapacityResponse {
  /** 服务器舰队ID */
  FleetId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateFleetNameRequest {
  /** 服务器舰队 Id */
  FleetId: string;
  /** 服务器舰队名称，最小长度1，最大长度50 */
  Name: string;
}

declare interface UpdateFleetNameResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateFleetPortSettingsRequest {
  /** 服务器舰队 Id */
  FleetId: string;
  /** 新增安全组 */
  InboundPermissionAuthorizations?: InboundPermissionAuthorization[];
  /** 移除安全组 */
  InboundPermissionRevocations?: InboundPermissionRevocations[];
}

declare interface UpdateFleetPortSettingsResponse {
  /** 服务部署 Id */
  FleetId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateGameServerSessionQueueRequest {
  /** 游戏服务器会话队列名字，长度1~128 */
  Name: string;
  /** 目的服务器舰队（可为别名）列表 */
  Destinations?: GameServerSessionQueueDestination[];
  /** 延迟策略集合 */
  PlayerLatencyPolicies?: PlayerLatencyPolicy[];
  /** 超时时间 */
  TimeoutInSeconds?: number;
}

declare interface UpdateGameServerSessionQueueResponse {
  /** 部署服务组对象 */
  GameServerSessionQueue?: GameServerSessionQueue;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateGameServerSessionRequest {
  /** 游戏服务器会话ID，最小长度1个ASCII字符，最大长度不超过256个ASCII字符 */
  GameServerSessionId: string;
  /** 最大玩家数量，最小值不小于0 */
  MaximumPlayerSessionCount?: number;
  /** 游戏服务器会话名称，最小长度不小于1个ASCII字符，最大长度不超过1024个ASCII字符 */
  Name?: string;
  /** 玩家会话创建策略，包括允许所有玩家加入和禁止所有玩家加入（ACCEPT_ALL,DENY_ALL） */
  PlayerSessionCreationPolicy?: string;
  /** 保护策略，包括不保护、时限保护和完全保护(NoProtection,TimeLimitProtection,FullProtection) */
  ProtectionPolicy?: string;
}

declare interface UpdateGameServerSessionResponse {
  /** 更新后的游戏会话 */
  GameServerSession?: GameServerSession;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpdateRuntimeConfigurationRequest {
  /** 服务器舰队Id */
  FleetId: string;
  /** 服务器舰队配置 */
  RuntimeConfiguration?: RuntimeConfiguration;
}

declare interface UpdateRuntimeConfigurationResponse {
  /** 服务器舰队配置 */
  RuntimeConfiguration?: RuntimeConfiguration | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Gse 游戏服务器伸缩} */
declare interface Gse {
  (): Versions;
  /** {@link AttachCcnInstances 关联云联网实例}({@link AttachCcnInstancesRequest 请求参数}): {@link AttachCcnInstancesResponse 返回参数} */
  AttachCcnInstances(data?: AttachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AttachCcnInstancesResponse>;
  /** {@link CopyFleet 复制服务器舰队}({@link CopyFleetRequest 请求参数}): {@link CopyFleetResponse 返回参数} */
  CopyFleet(data: CopyFleetRequest, config?: AxiosRequestConfig): AxiosPromise<CopyFleetResponse>;
  /** {@link CreateAlias 创建别名}({@link CreateAliasRequest 请求参数}): {@link CreateAliasResponse 返回参数} */
  CreateAlias(data: CreateAliasRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAliasResponse>;
  /** {@link CreateAsset 创建生成包}({@link CreateAssetRequest 请求参数}): {@link CreateAssetResponse 返回参数} */
  CreateAsset(data: CreateAssetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetResponse>;
  /** {@link CreateAssetWithImage 创建生成包镜像信息}({@link CreateAssetWithImageRequest 请求参数}): {@link CreateAssetWithImageResponse 返回参数} */
  CreateAssetWithImage(data: CreateAssetWithImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssetWithImageResponse>;
  /** {@link CreateFleet 创建服务器舰队}({@link CreateFleetRequest 请求参数}): {@link CreateFleetResponse 返回参数} */
  CreateFleet(data?: CreateFleetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFleetResponse>;
  /** {@link CreateGameServerSession 创建游戏服务器会话}({@link CreateGameServerSessionRequest 请求参数}): {@link CreateGameServerSessionResponse 返回参数} */
  CreateGameServerSession(data: CreateGameServerSessionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGameServerSessionResponse>;
  /** {@link CreateGameServerSessionQueue 创建游戏服务器会话队列}({@link CreateGameServerSessionQueueRequest 请求参数}): {@link CreateGameServerSessionQueueResponse 返回参数} */
  CreateGameServerSessionQueue(data: CreateGameServerSessionQueueRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGameServerSessionQueueResponse>;
  /** {@link DeleteAlias 删除别名}({@link DeleteAliasRequest 请求参数}): {@link DeleteAliasResponse 返回参数} */
  DeleteAlias(data: DeleteAliasRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAliasResponse>;
  /** {@link DeleteAsset 删除生成包}({@link DeleteAssetRequest 请求参数}): {@link DeleteAssetResponse 返回参数} */
  DeleteAsset(data: DeleteAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAssetResponse>;
  /** {@link DeleteFleet 删除服务器舰队}({@link DeleteFleetRequest 请求参数}): {@link DeleteFleetResponse 返回参数} */
  DeleteFleet(data: DeleteFleetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFleetResponse>;
  /** {@link DeleteGameServerSessionQueue 删除游戏服务器会话队列}({@link DeleteGameServerSessionQueueRequest 请求参数}): {@link DeleteGameServerSessionQueueResponse 返回参数} */
  DeleteGameServerSessionQueue(data: DeleteGameServerSessionQueueRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGameServerSessionQueueResponse>;
  /** {@link DeleteScalingPolicy 删除扩缩容配置}({@link DeleteScalingPolicyRequest 请求参数}): {@link DeleteScalingPolicyResponse 返回参数} */
  DeleteScalingPolicy(data: DeleteScalingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteScalingPolicyResponse>;
  /** {@link DeleteTimerScalingPolicy 删除定时器}({@link DeleteTimerScalingPolicyRequest 请求参数}): {@link DeleteTimerScalingPolicyResponse 返回参数} */
  DeleteTimerScalingPolicy(data?: DeleteTimerScalingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTimerScalingPolicyResponse>;
  /** {@link DescribeAlias 获取别名详情}({@link DescribeAliasRequest 请求参数}): {@link DescribeAliasResponse 返回参数} */
  DescribeAlias(data: DescribeAliasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAliasResponse>;
  /** {@link DescribeAsset 获取生成包信息}({@link DescribeAssetRequest 请求参数}): {@link DescribeAssetResponse 返回参数} */
  DescribeAsset(data: DescribeAssetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetResponse>;
  /** {@link DescribeAssetSystems 获取生成包支持的操作系统列表}({@link DescribeAssetSystemsRequest 请求参数}): {@link DescribeAssetSystemsResponse 返回参数} */
  DescribeAssetSystems(data?: DescribeAssetSystemsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetSystemsResponse>;
  /** {@link DescribeAssets 拉取生成包列表}({@link DescribeAssetsRequest 请求参数}): {@link DescribeAssetsResponse 返回参数} */
  DescribeAssets(data: DescribeAssetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssetsResponse>;
  /** {@link DescribeCcnInstances 查询云联网实例}({@link DescribeCcnInstancesRequest 请求参数}): {@link DescribeCcnInstancesResponse 返回参数} */
  DescribeCcnInstances(data?: DescribeCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnInstancesResponse>;
  /** {@link DescribeFleetAttributes 获取服务器舰队属性}({@link DescribeFleetAttributesRequest 请求参数}): {@link DescribeFleetAttributesResponse 返回参数} */
  DescribeFleetAttributes(data?: DescribeFleetAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFleetAttributesResponse>;
  /** {@link DescribeFleetCapacity 查询游戏服务器舰队容量配置}({@link DescribeFleetCapacityRequest 请求参数}): {@link DescribeFleetCapacityResponse 返回参数} */
  DescribeFleetCapacity(data: DescribeFleetCapacityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFleetCapacityResponse>;
  /** {@link DescribeFleetEvents 查询服务器舰队的事件列表}({@link DescribeFleetEventsRequest 请求参数}): {@link DescribeFleetEventsResponse 返回参数} */
  DescribeFleetEvents(data: DescribeFleetEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFleetEventsResponse>;
  /** {@link DescribeFleetPortSettings 服务器舰队安全组信息查询}({@link DescribeFleetPortSettingsRequest 请求参数}): {@link DescribeFleetPortSettingsResponse 返回参数} */
  DescribeFleetPortSettings(data: DescribeFleetPortSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFleetPortSettingsResponse>;
  /** {@link DescribeFleetRelatedResources 获取与游戏服务器舰队关联的资源信息}({@link DescribeFleetRelatedResourcesRequest 请求参数}): {@link DescribeFleetRelatedResourcesResponse 返回参数} */
  DescribeFleetRelatedResources(data: DescribeFleetRelatedResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFleetRelatedResourcesResponse>;
  /** {@link DescribeFleetStatisticDetails 查询服务部署统计详情}({@link DescribeFleetStatisticDetailsRequest 请求参数}): {@link DescribeFleetStatisticDetailsResponse 返回参数} */
  DescribeFleetStatisticDetails(data?: DescribeFleetStatisticDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFleetStatisticDetailsResponse>;
  /** {@link DescribeFleetStatisticFlows 查询服务部署统计用量}({@link DescribeFleetStatisticFlowsRequest 请求参数}): {@link DescribeFleetStatisticFlowsResponse 返回参数} */
  DescribeFleetStatisticFlows(data?: DescribeFleetStatisticFlowsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFleetStatisticFlowsResponse>;
  /** {@link DescribeFleetStatisticSummary 查询服务部署统计汇总信息}({@link DescribeFleetStatisticSummaryRequest 请求参数}): {@link DescribeFleetStatisticSummaryResponse 返回参数} */
  DescribeFleetStatisticSummary(data?: DescribeFleetStatisticSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFleetStatisticSummaryResponse>;
  /** {@link DescribeFleetUtilization 查询服务器舰队的利用率信息}({@link DescribeFleetUtilizationRequest 请求参数}): {@link DescribeFleetUtilizationResponse 返回参数} */
  DescribeFleetUtilization(data: DescribeFleetUtilizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFleetUtilizationResponse>;
  /** {@link DescribeGameServerSessionDetails 查询游戏服务器会话详情列表}({@link DescribeGameServerSessionDetailsRequest 请求参数}): {@link DescribeGameServerSessionDetailsResponse 返回参数} */
  DescribeGameServerSessionDetails(data?: DescribeGameServerSessionDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGameServerSessionDetailsResponse>;
  /** {@link DescribeGameServerSessionPlacement 查询游戏服务器会话的放置}({@link DescribeGameServerSessionPlacementRequest 请求参数}): {@link DescribeGameServerSessionPlacementResponse 返回参数} */
  DescribeGameServerSessionPlacement(data: DescribeGameServerSessionPlacementRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGameServerSessionPlacementResponse>;
  /** {@link DescribeGameServerSessionQueues 查询游戏服务器会话队列}({@link DescribeGameServerSessionQueuesRequest 请求参数}): {@link DescribeGameServerSessionQueuesResponse 返回参数} */
  DescribeGameServerSessionQueues(data?: DescribeGameServerSessionQueuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGameServerSessionQueuesResponse>;
  /** {@link DescribeGameServerSessions 查询游戏服务器会话列表}({@link DescribeGameServerSessionsRequest 请求参数}): {@link DescribeGameServerSessionsResponse 返回参数} */
  DescribeGameServerSessions(data?: DescribeGameServerSessionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGameServerSessionsResponse>;
  /** {@link DescribeInstanceLimit 查询用户实例数限额}({@link DescribeInstanceLimitRequest 请求参数}): {@link DescribeInstanceLimitResponse 返回参数} */
  DescribeInstanceLimit(data?: DescribeInstanceLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLimitResponse>;
  /** {@link DescribeInstanceTypes 获取服务器实例类型列表}({@link DescribeInstanceTypesRequest 请求参数}): {@link DescribeInstanceTypesResponse 返回参数} */
  DescribeInstanceTypes(data?: DescribeInstanceTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceTypesResponse>;
  /** {@link DescribeInstances 查询服务器实例列表}({@link DescribeInstancesRequest 请求参数}): {@link DescribeInstancesResponse 返回参数} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** {@link DescribeInstancesExtend 查询实例扩展信息列表}({@link DescribeInstancesExtendRequest 请求参数}): {@link DescribeInstancesExtendResponse 返回参数} */
  DescribeInstancesExtend(data: DescribeInstancesExtendRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesExtendResponse>;
  /** {@link DescribePlayerSessions 查询玩家会话列表}({@link DescribePlayerSessionsRequest 请求参数}): {@link DescribePlayerSessionsResponse 返回参数} */
  DescribePlayerSessions(data?: DescribePlayerSessionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePlayerSessionsResponse>;
  /** {@link DescribeRuntimeConfiguration 获取服务器舰队运行配置}({@link DescribeRuntimeConfigurationRequest 请求参数}): {@link DescribeRuntimeConfigurationResponse 返回参数} */
  DescribeRuntimeConfiguration(data: DescribeRuntimeConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRuntimeConfigurationResponse>;
  /** {@link DescribeScalingPolicies 查询扩缩容配置}({@link DescribeScalingPoliciesRequest 请求参数}): {@link DescribeScalingPoliciesResponse 返回参数} */
  DescribeScalingPolicies(data?: DescribeScalingPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScalingPoliciesResponse>;
  /** {@link DescribeTimerScalingPolicies 查询定时器列表}({@link DescribeTimerScalingPoliciesRequest 请求参数}): {@link DescribeTimerScalingPoliciesResponse 返回参数} */
  DescribeTimerScalingPolicies(data?: DescribeTimerScalingPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTimerScalingPoliciesResponse>;
  /** {@link DescribeUserQuota 获取用户单个模块配额}({@link DescribeUserQuotaRequest 请求参数}): {@link DescribeUserQuotaResponse 返回参数} */
  DescribeUserQuota(data?: DescribeUserQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserQuotaResponse>;
  /** {@link DescribeUserQuotas 获取用户配额}({@link DescribeUserQuotasRequest 请求参数}): {@link DescribeUserQuotasResponse 返回参数} */
  DescribeUserQuotas(data?: DescribeUserQuotasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUserQuotasResponse>;
  /** {@link DetachCcnInstances 解关联云联网实例}({@link DetachCcnInstancesRequest 请求参数}): {@link DetachCcnInstancesResponse 返回参数} */
  DetachCcnInstances(data?: DetachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DetachCcnInstancesResponse>;
  /** {@link EndGameServerSessionAndProcess 终止游戏服务器会话和对应的进程}({@link EndGameServerSessionAndProcessRequest 请求参数}): {@link EndGameServerSessionAndProcessResponse 返回参数} */
  EndGameServerSessionAndProcess(data?: EndGameServerSessionAndProcessRequest, config?: AxiosRequestConfig): AxiosPromise<EndGameServerSessionAndProcessResponse>;
  /** {@link GetGameServerInstanceLogUrl 获取游戏服务器实例的日志URL}({@link GetGameServerInstanceLogUrlRequest 请求参数}): {@link GetGameServerInstanceLogUrlResponse 返回参数} */
  GetGameServerInstanceLogUrl(data: GetGameServerInstanceLogUrlRequest, config?: AxiosRequestConfig): AxiosPromise<GetGameServerInstanceLogUrlResponse>;
  /** {@link GetGameServerSessionLogUrl 获取游戏服务器会话的日志URL}({@link GetGameServerSessionLogUrlRequest 请求参数}): {@link GetGameServerSessionLogUrlResponse 返回参数} */
  GetGameServerSessionLogUrl(data: GetGameServerSessionLogUrlRequest, config?: AxiosRequestConfig): AxiosPromise<GetGameServerSessionLogUrlResponse>;
  /** {@link GetInstanceAccess 获取实例登录所需要的凭据}({@link GetInstanceAccessRequest 请求参数}): {@link GetInstanceAccessResponse 返回参数} */
  GetInstanceAccess(data: GetInstanceAccessRequest, config?: AxiosRequestConfig): AxiosPromise<GetInstanceAccessResponse>;
  /** {@link GetUploadCredentials 获取上传文件授权信息}({@link GetUploadCredentialsRequest 请求参数}): {@link GetUploadCredentialsResponse 返回参数} */
  GetUploadCredentials(data: GetUploadCredentialsRequest, config?: AxiosRequestConfig): AxiosPromise<GetUploadCredentialsResponse>;
  /** {@link GetUploadFederationToken 获取上传的临时密钥}({@link GetUploadFederationTokenRequest 请求参数}): {@link GetUploadFederationTokenResponse 返回参数} */
  GetUploadFederationToken(data?: GetUploadFederationTokenRequest, config?: AxiosRequestConfig): AxiosPromise<GetUploadFederationTokenResponse>;
  /** {@link JoinGameServerSession 加入游戏服务器会话}({@link JoinGameServerSessionRequest 请求参数}): {@link JoinGameServerSessionResponse 返回参数} */
  JoinGameServerSession(data: JoinGameServerSessionRequest, config?: AxiosRequestConfig): AxiosPromise<JoinGameServerSessionResponse>;
  /** {@link JoinGameServerSessionBatch 批量加入游戏服务器会话}({@link JoinGameServerSessionBatchRequest 请求参数}): {@link JoinGameServerSessionBatchResponse 返回参数} */
  JoinGameServerSessionBatch(data: JoinGameServerSessionBatchRequest, config?: AxiosRequestConfig): AxiosPromise<JoinGameServerSessionBatchResponse>;
  /** {@link ListAliases 检索帐户下的所有别名}({@link ListAliasesRequest 请求参数}): {@link ListAliasesResponse 返回参数} */
  ListAliases(data?: ListAliasesRequest, config?: AxiosRequestConfig): AxiosPromise<ListAliasesResponse>;
  /** {@link ListFleets 获取服务器舰队列表}({@link ListFleetsRequest 请求参数}): {@link ListFleetsResponse 返回参数} */
  ListFleets(data?: ListFleetsRequest, config?: AxiosRequestConfig): AxiosPromise<ListFleetsResponse>;
  /** {@link PutScalingPolicy 设置扩缩容策略}({@link PutScalingPolicyRequest 请求参数}): {@link PutScalingPolicyResponse 返回参数} */
  PutScalingPolicy(data: PutScalingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<PutScalingPolicyResponse>;
  /** {@link PutTimerScalingPolicy 创建或更新定时器}({@link PutTimerScalingPolicyRequest 请求参数}): {@link PutTimerScalingPolicyResponse 返回参数} */
  PutTimerScalingPolicy(data?: PutTimerScalingPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<PutTimerScalingPolicyResponse>;
  /** {@link ResolveAlias 获取别名当前指向的fleetId}({@link ResolveAliasRequest 请求参数}): {@link ResolveAliasResponse 返回参数} */
  ResolveAlias(data: ResolveAliasRequest, config?: AxiosRequestConfig): AxiosPromise<ResolveAliasResponse>;
  /** {@link SearchGameServerSessions 搜索游戏服务器会话列表}({@link SearchGameServerSessionsRequest 请求参数}): {@link SearchGameServerSessionsResponse 返回参数} */
  SearchGameServerSessions(data?: SearchGameServerSessionsRequest, config?: AxiosRequestConfig): AxiosPromise<SearchGameServerSessionsResponse>;
  /** {@link SetServerReserved 设置实例保留}({@link SetServerReservedRequest 请求参数}): {@link SetServerReservedResponse 返回参数} */
  SetServerReserved(data: SetServerReservedRequest, config?: AxiosRequestConfig): AxiosPromise<SetServerReservedResponse>;
  /** {@link SetServerWeight 设置服务器权重}({@link SetServerWeightRequest 请求参数}): {@link SetServerWeightResponse 返回参数} */
  SetServerWeight(data: SetServerWeightRequest, config?: AxiosRequestConfig): AxiosPromise<SetServerWeightResponse>;
  /** {@link StartFleetActions 启用服务器舰队自动扩缩容}({@link StartFleetActionsRequest 请求参数}): {@link StartFleetActionsResponse 返回参数} */
  StartFleetActions(data: StartFleetActionsRequest, config?: AxiosRequestConfig): AxiosPromise<StartFleetActionsResponse>;
  /** {@link StartGameServerSessionPlacement 开始放置游戏服务器会话}({@link StartGameServerSessionPlacementRequest 请求参数}): {@link StartGameServerSessionPlacementResponse 返回参数} */
  StartGameServerSessionPlacement(data: StartGameServerSessionPlacementRequest, config?: AxiosRequestConfig): AxiosPromise<StartGameServerSessionPlacementResponse>;
  /** {@link StopFleetActions 停止服务器舰队自动扩缩容}({@link StopFleetActionsRequest 请求参数}): {@link StopFleetActionsResponse 返回参数} */
  StopFleetActions(data: StopFleetActionsRequest, config?: AxiosRequestConfig): AxiosPromise<StopFleetActionsResponse>;
  /** {@link StopGameServerSessionPlacement 停止放置游戏服务器会话}({@link StopGameServerSessionPlacementRequest 请求参数}): {@link StopGameServerSessionPlacementResponse 返回参数} */
  StopGameServerSessionPlacement(data: StopGameServerSessionPlacementRequest, config?: AxiosRequestConfig): AxiosPromise<StopGameServerSessionPlacementResponse>;
  /** {@link UpdateAlias 更新别名的属性}({@link UpdateAliasRequest 请求参数}): {@link UpdateAliasResponse 返回参数} */
  UpdateAlias(data: UpdateAliasRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAliasResponse>;
  /** {@link UpdateAsset 修改生成包信息}({@link UpdateAssetRequest 请求参数}): {@link UpdateAssetResponse 返回参数} */
  UpdateAsset(data: UpdateAssetRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAssetResponse>;
  /** {@link UpdateBucketAccelerateOpt cos设置全球加速}({@link UpdateBucketAccelerateOptRequest 请求参数}): {@link UpdateBucketAccelerateOptResponse 返回参数} */
  UpdateBucketAccelerateOpt(data: UpdateBucketAccelerateOptRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateBucketAccelerateOptResponse>;
  /** {@link UpdateBucketCORSOpt 设置cos跨域访问}({@link UpdateBucketCORSOptRequest 请求参数}): {@link UpdateBucketCORSOptResponse 返回参数} */
  UpdateBucketCORSOpt(data: UpdateBucketCORSOptRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateBucketCORSOptResponse>;
  /** {@link UpdateFleetAttributes 更新服务器舰队属性}({@link UpdateFleetAttributesRequest 请求参数}): {@link UpdateFleetAttributesResponse 返回参数} */
  UpdateFleetAttributes(data: UpdateFleetAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFleetAttributesResponse>;
  /** {@link UpdateFleetCapacity 更新服务器舰队容量配置}({@link UpdateFleetCapacityRequest 请求参数}): {@link UpdateFleetCapacityResponse 返回参数} */
  UpdateFleetCapacity(data: UpdateFleetCapacityRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFleetCapacityResponse>;
  /** {@link UpdateFleetName 更新服务器舰队名称}({@link UpdateFleetNameRequest 请求参数}): {@link UpdateFleetNameResponse 返回参数} */
  UpdateFleetName(data: UpdateFleetNameRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFleetNameResponse>;
  /** {@link UpdateFleetPortSettings 更新服务器舰队安全组}({@link UpdateFleetPortSettingsRequest 请求参数}): {@link UpdateFleetPortSettingsResponse 返回参数} */
  UpdateFleetPortSettings(data: UpdateFleetPortSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateFleetPortSettingsResponse>;
  /** {@link UpdateGameServerSession 更新游戏服务器会话}({@link UpdateGameServerSessionRequest 请求参数}): {@link UpdateGameServerSessionResponse 返回参数} */
  UpdateGameServerSession(data: UpdateGameServerSessionRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGameServerSessionResponse>;
  /** {@link UpdateGameServerSessionQueue 修改游戏服务器会话队列}({@link UpdateGameServerSessionQueueRequest 请求参数}): {@link UpdateGameServerSessionQueueResponse 返回参数} */
  UpdateGameServerSessionQueue(data: UpdateGameServerSessionQueueRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGameServerSessionQueueResponse>;
  /** {@link UpdateRuntimeConfiguration 更新服务器舰队配置}({@link UpdateRuntimeConfigurationRequest 请求参数}): {@link UpdateRuntimeConfigurationResponse 返回参数} */
  UpdateRuntimeConfiguration(data: UpdateRuntimeConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRuntimeConfigurationResponse>;
}

export declare type Versions = ["2019-11-12"];

export default Gse;
