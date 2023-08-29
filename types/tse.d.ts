/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** Apollo 环境配置参数 */
declare interface ApolloEnvParam {
  /** 环境名称 */
  Name: string;
  /** 环境内引擎的节点规格 ID-1C2G-2C4G兼容原spec-xxxxxx形式的规格ID */
  EngineResourceSpec: string;
  /** 环境内引擎的节点数量 */
  EngineNodeNum: number;
  /** 配置存储空间大小，以GB为单位 */
  StorageCapacity: number;
  /** VPC ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址 */
  VpcId: string;
  /** 子网 ID。在 VPC 的子网内分配一个 IP 作为 ConfigServer 的访问地址 */
  SubnetId: string;
  /** 环境描述 */
  EnvDesc?: string;
}

/** 服务治理引擎绑定的kubernetes信息 */
declare interface BoundK8SInfo {
  /** 绑定的kubernetes集群ID */
  BoundClusterId: string;
  /** 绑定的kubernetes的集群类型，分tke和eks两种 */
  BoundClusterType: string | null;
  /** 服务同步模式，all为全量同步，demand为按需同步 */
  SyncMode?: string | null;
}

/** 灰度规则列表 */
declare interface CloudAPIGatewayCanaryRuleList {
  /** 灰度规则 */
  CanaryRuleList?: CloudNativeAPIGatewayCanaryRule[] | null;
  /** 总数 */
  TotalCount?: number | null;
}

/** 含百分比流量配置的服务 */
declare interface CloudNativeAPIGatewayBalancedService {
  /** 服务 ID，作为入参时，必填 */
  ServiceID?: string | null;
  /** 服务名称，作为入参时，无意义 */
  ServiceName?: string | null;
  /** Upstream 名称，作为入参时，无意义 */
  UpstreamName?: string | null;
  /** 百分比，10 即 10%，范围0-100 */
  Percent?: number | null;
}

/** 灰度规则 */
declare interface CloudNativeAPIGatewayCanaryRule {
  /** 优先级，值范围为 0 到 100；值越大，优先级越高；不同规则间优先级不可重复 */
  Priority: number | null;
  /** 是否启用规则 */
  Enabled: boolean | null;
  /** 参数匹配条件 */
  ConditionList?: CloudNativeAPIGatewayCanaryRuleCondition[] | null;
  /** 服务的流量百分比配置 */
  BalancedServiceList?: CloudNativeAPIGatewayBalancedService[] | null;
  /** 归属服务 ID */
  ServiceId?: string | null;
  /** 归属服务名称 */
  ServiceName?: string | null;
}

/** 灰度规则中的条件配置 */
declare interface CloudNativeAPIGatewayCanaryRuleCondition {
  /** 条件类型，支持 path, method, query, header, cookie, body 和 system。 */
  Type: string | null;
  /** 参数名 */
  Key?: string | null;
  /** 操作符，支持 "le", "eq", "lt", "ne", "ge", "gt", "regex", "exists", "in", "not in", "prefix" ,"exact", "regex" 等 */
  Operator?: string | null;
  /** 目标参数值 */
  Value?: string | null;
  /** 分隔符，当 Operator 为 in 或者 not in 时生效。支持值为英文逗号，英文分号，空格，换行符。 */
  Delimiter?: string | null;
  /** 全局配置 Id */
  GlobalConfigId?: string | null;
  /** 全局配置名称 */
  GlobalConfigName?: string | null;
}

/** 云原生API网关节点信息。 */
declare interface CloudNativeAPIGatewayNode {
  /** 云原生网关节点 id */
  NodeId: string;
  /** 节点 ip */
  NodeIp: string;
  /** Zone id */
  ZoneId?: string | null;
  /** Zone */
  Zone?: string | null;
  /** 分组ID */
  GroupId?: string | null;
  /** 分组名 */
  GroupName?: string | null;
  /** 状态 */
  Status?: string | null;
}

/** 云原生API网关节点配置。 */
declare interface CloudNativeAPIGatewayNodeConfig {
  /** 节点配置, 1c2g|2c4g|4c8g|8c16g。 */
  Specification: string | null;
  /** 节点数量，2-9。 */
  Number: number | null;
}

/** 云原生网关Tse 限流插件配置 */
declare interface CloudNativeAPIGatewayRateLimitDetail {
  /** 插件启用状态 */
  Enabled: boolean;
  /** qps阈值 */
  QpsThresholds: QpsThreshold[];
  /** 限流依据ip service consumer credential path header */
  LimitBy: string;
  /** 响应策略url请求转发text 响应配置default 直接返回 */
  ResponseType: string;
  /** 是否隐藏限流客户端响应头 */
  HideClientHeaders: boolean;
  /** 是否开启请求排队 */
  IsDelay: boolean;
  /** 需要进行流量控制的请求路径 */
  Path?: string | null;
  /** 需要进行流量控制的请求头Key */
  Header?: string | null;
  /** 外部redis配置 */
  ExternalRedis?: ExternalRedis | null;
  /** 计数器策略 local 单机redis 默认redisexternal_redis 外部redis */
  Policy?: string | null;
  /** 响应配置，响应策略为text */
  RateLimitResponse?: RateLimitResponse | null;
  /** 请求转发地址 */
  RateLimitResponseUrl?: string | null;
  /** 排队时间 */
  LineUpTime?: number;
}

/** 网关实例策略 */
declare interface CloudNativeAPIGatewayStrategy {
  /** 策略ID */
  StrategyId: string;
  /** 策略名称 */
  StrategyName: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  ModifyTime: string | null;
  /** 策略描述 */
  Description: string | null;
  /** 弹性伸缩配置 */
  Config: CloudNativeAPIGatewayStrategyAutoScalerConfig | null;
  /** 网关实例ID */
  GatewayId: string | null;
  /** 定时伸缩配置 */
  CronConfig?: CloudNativeAPIGatewayStrategyCronScalerConfig | null;
  /** 最大节点数 */
  MaxReplicas?: number | null;
}

/** 弹性伸缩策略 */
declare interface CloudNativeAPIGatewayStrategyAutoScalerConfig {
  /** 最大副本数 */
  MaxReplicas?: number | null;
  /** 指标列表 */
  Metrics?: CloudNativeAPIGatewayStrategyAutoScalerConfigMetric[] | null;
  /** 是否开启指标伸缩 */
  Enabled?: boolean | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 弹性策略ID */
  StrategyId?: string | null;
  /** 指标配置ID */
  AutoScalerId?: string | null;
}

/** 弹性伸缩配置指标 */
declare interface CloudNativeAPIGatewayStrategyAutoScalerConfigMetric {
  /** 指标类型 */
  Type?: string | null;
  /** 指标资源名称 */
  ResourceName?: string | null;
  /** 指标目标类型 */
  TargetType?: string | null;
  /** 指标目标值 */
  TargetValue?: number | null;
}

/** 定时伸缩策略配置 */
declare interface CloudNativeAPIGatewayStrategyCronScalerConfig {
  /** 是否开启定时伸缩 */
  Enabled?: boolean | null;
  /** 定时伸缩配置参数列表 */
  Params?: CloudNativeAPIGatewayStrategyCronScalerConfigParam[] | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 弹性策略ID */
  StrategyId?: string | null;
}

/** 定时伸缩配置参数 */
declare interface CloudNativeAPIGatewayStrategyCronScalerConfigParam {
  /** 定时伸缩周期 */
  Period?: string | null;
  /** 定时伸缩开始时间 */
  StartAt?: string | null;
  /** 定时伸缩目标节点数 */
  TargetReplicas?: number | null;
  /** 定时伸缩cron表达式 */
  Crontab?: string | null;
}

/** 云原生API网关vpc配置。 */
declare interface CloudNativeAPIGatewayVpcConfig {
  /** 私有网络ID。 */
  VpcId?: string | null;
  /** 子网ID。 */
  SubnetId?: string | null;
}

/** 创建云原生API网关响应结果。 */
declare interface CreateCloudNativeAPIGatewayResult {
  /** 云原生API网关ID。 */
  GatewayId: string;
  /** 云原生网关状态。 */
  Status: string;
  /** 任务ID */
  TaskId?: string | null;
}

/** 创建网关分组信息 */
declare interface CreateCloudNativeAPIGatewayServerGroupResult {
  /** 网关实例id */
  GatewayId?: string;
  /** 分组id */
  GroupId?: string;
  /** 状态 */
  Status?: string | null;
  /** 任务ID */
  TaskId?: string | null;
}

/** 删除云原生API网关响应结果。 */
declare interface DeleteCloudNativeAPIGatewayResult {
  /** 云原生网关ID。 */
  GatewayId: string;
  /** 云原生网关状态。 */
  Status: string;
}

/** 删除网关实例结果 */
declare interface DeleteNativeGatewayServerGroupResult {
  /** 网关实例id */
  GatewayId?: string;
  /** 网关分组id */
  GroupId?: string;
  /** 删除状态 */
  Status?: string;
  /** 任务ID */
  TaskId?: string | null;
}

/** 获取网关节点信息 */
declare interface DescribeCloudNativeAPIGatewayNodesResult {
  /** 获取云原生API网关节点列表响应结果。 */
  TotalCount: number;
  /** 云原生API网关节点列表。 */
  NodeList: CloudNativeAPIGatewayNode[];
}

/** 获取云原生API网关基础信息响应结果。 */
declare interface DescribeCloudNativeAPIGatewayResult {
  /** 云原生API网关ID。 */
  GatewayId?: string;
  /** 云原生API网关状态。 */
  Status?: string;
  /** 云原生API网关名。 */
  Name?: string;
  /** 云原生API网关类型。 */
  Type?: string;
  /** 实例版本：- 2.4.1- 2.5.1 */
  GatewayVersion?: string;
  /** 云原生API网关节点信息。 */
  NodeConfig?: CloudNativeAPIGatewayNodeConfig;
  /** 云原生API网关vpc配置。 */
  VpcConfig?: CloudNativeAPIGatewayVpcConfig;
  /** 云原生API网关描述。 */
  Description?: string;
  /** 云原生API网关创建时间。 */
  CreateTime?: string;
  /** 实例的标签信息 */
  Tags?: InstanceTagInfo[] | null;
  /** 是否开启 cls 日志 */
  EnableCls?: boolean | null;
  /** 付费模式，0表示后付费，1预付费 */
  TradeType?: number | null;
  /** 实例版本，当前支持开发版、标准版、专业版【TRIAL、STANDARD、PROFESSIONAL】 */
  FeatureVersion?: string | null;
  /** 公网出流量带宽，[1,2048]Mbps */
  InternetMaxBandwidthOut?: number | null;
  /** 自动续费标记，0表示默认状态(用户未设置，即初始状态)；1表示自动续费，2表示明确不自动续费(用户设置)，若业务无续费概念或无需自动续费，需要设置为0 */
  AutoRenewFlag?: number | null;
  /** 到期时间，预付费时使用 */
  CurDeadline?: string | null;
  /** 隔离时间，实例隔离时使用 */
  IsolateTime?: string | null;
  /** 是否开启客户端公网。 */
  EnableInternet?: boolean | null;
  /** 实例实际的地域信息 */
  EngineRegion?: string | null;
  /** Ingress class名称 */
  IngressClassName?: string | null;
  /** 公网计费方式。可选取值 BANDWIDTH | TRAFFIC ，表示按带宽和按流量计费。 */
  InternetPayMode?: string | null;
  /** 云原生API网关小版本号 */
  GatewayMinorVersion?: string | null;
  /** 实例监听的端口信息 */
  InstancePort?: InstancePort | null;
  /** 公网CLB默认类型 */
  LoadBalancerType?: string | null;
  /** 公网IP地址列表 */
  PublicIpAddresses?: string[] | null;
}

/** 获取云原生API网关实例协议端口列表响应结果 */
declare interface DescribeGatewayInstancePortResult {
  /** 云原生API网关ID */
  GatewayId?: string | null;
  /** 网关实例协议端口列表 */
  GatewayInstancePortList?: GatewayInstanceSchemeAndPorts[] | null;
}

/** 实例地域信息描述 */
declare interface DescribeInstanceRegionInfo {
  /** 引擎部署地域信息 */
  EngineRegion: string | null;
  /** 引擎在该地域的副本数 */
  Replica: number | null;
  /** 引擎在该地域的规格id */
  SpecId: string | null;
  /** 内网的网络信息 */
  IntranetVpcInfos: VpcInfo[] | null;
  /** 是否开公网 */
  EnableClientInternet: boolean | null;
}

/** 引擎的初始管理帐号 */
declare interface EngineAdmin {
  /** 控制台初始用户名 */
  Name?: string;
  /** 控制台初始密码 */
  Password?: string;
  /** 引擎接口的管理员 Token */
  Token?: string;
}

/** 引擎地域配置详情 */
declare interface EngineRegionInfo {
  /** 引擎节点所在地域 */
  EngineRegion: string | null;
  /** 此地域节点分配数量 */
  Replica: number | null;
  /** 集群网络信息 */
  VpcInfos: VpcInfo[] | null;
}

/** 多环境网络信息 */
declare interface EnvAddressInfo {
  /** 环境名 */
  EnvName: string;
  /** 是否开启config公网 */
  EnableConfigInternet: boolean;
  /** config公网ip */
  ConfigInternetServiceIp: string;
  /** config内网访问地址 */
  ConfigIntranetAddress: string | null;
  /** 是否开启config内网clb */
  EnableConfigIntranet?: boolean | null;
  /** 客户端公网带宽 */
  InternetBandWidth?: number | null;
}

/** 环境具体信息 */
declare interface EnvInfo {
  /** 环境名称 */
  EnvName: string;
  /** 环境对应的网络信息 */
  VpcInfos: VpcInfo[];
  /** 云硬盘容量 */
  StorageCapacity: number;
  /** 运行状态 */
  Status?: string;
  /** Admin service 访问地址 */
  AdminServiceIp?: string;
  /** Config service访问地址 */
  ConfigServiceIp?: string;
  /** 是否开启config-server公网 */
  EnableConfigInternet?: boolean;
  /** config-server公网访问地址 */
  ConfigInternetServiceIp?: string;
  /** 规格ID */
  SpecId?: string;
  /** 环境的节点数 */
  EnvReplica?: number;
  /** 环境运行的节点数 */
  RunningCount?: number;
  /** 环境别名 */
  AliasEnvName?: string;
  /** 环境描述 */
  EnvDesc?: string;
  /** 客户端带宽 */
  ClientBandWidth?: number;
  /** 客户端内网开关 */
  EnableConfigIntranet?: boolean | null;
}

/** 云原生网关限流插件外部redis配置 */
declare interface ExternalRedis {
  /** redis ip */
  RedisHost: string | null;
  /** redis密码 */
  RedisPassword: string | null;
  /** redis端口 */
  RedisPort: number | null;
  /** 超时时间 ms */
  RedisTimeout: number | null;
}

/** 查询过滤通用对象 */
declare interface Filter {
  /** 过滤参数名 */
  Name: string;
  /** 过滤参数值 */
  Values: string[];
}

/** 网关实例协议端口列表 */
declare interface GatewayInstanceSchemeAndPorts {
  /** 端口协议，可选HTTP、HTTPS、TCP和UDP */
  Scheme?: string | null;
  /** 端口列表 */
  PortList?: number[] | null;
}

/** 实例监听端口信息 */
declare interface InstancePort {
  /** 监听的 http 端口范围。 */
  HttpPort?: string | null;
  /** 监听的 https 端口范围。 */
  HttpsPort?: string | null;
}

/** 引擎实例的标签信息 */
declare interface InstanceTagInfo {
  /** 标签键 */
  TagKey?: string;
  /** 标签值 */
  TagValue?: string;
}

/** 公网负载均衡配置 */
declare interface InternetConfig {
  /** 公网地址版本，可选："IPV4" | "IPV6" 。不填默认 IPV4 。 */
  InternetAddressVersion?: string;
  /** 公网付费类型，当前仅可选："BANDWIDTH"。不填默认为 "BANDWIDTH" */
  InternetPayMode?: string;
  /** 公网带宽。 */
  InternetMaxBandwidthOut?: number;
  /** 负载均衡描述 */
  Description?: string;
  /** 负载均衡的规格类型，传 "SLA" 表示性能容量型，不传为共享型。 */
  SlaType?: string;
  /** 负载均衡是否多可用区 */
  MultiZoneFlag?: boolean;
  /** 主可用区 */
  MasterZoneId?: string;
  /** 备可用区 */
  SlaveZoneId?: string;
}

/** 键值对 */
declare interface KVMapping {
  /** key */
  Key?: string | null;
  /** value */
  Value?: string | null;
}

/** 键值对 */
declare interface KVPair {
  /** 键 */
  Key: string;
  /** 值 */
  Value: string;
}

/** 云原生网关路由信息 */
declare interface KongRoutePreview {
  /** 服务ID */
  ID: string | null;
  /** 服务名字 */
  Name?: string | null;
  /** 无 */
  Methods?: string[] | null;
  /** 无 */
  Paths?: string[] | null;
  /** 无 */
  Hosts?: string[] | null;
  /** 无 */
  Protocols?: string[] | null;
  /** 无 */
  PreserveHost?: boolean | null;
  /** 无 */
  HttpsRedirectStatusCode?: number | null;
  /** 无 */
  StripPath?: boolean | null;
  /** 无 */
  CreatedTime?: string | null;
  /** 是否开启了强制HTTPS */
  ForceHttps?: boolean | null;
  /** 服务名 */
  ServiceName?: string | null;
  /** 服务ID */
  ServiceID?: string | null;
  /** 目的端口 */
  DestinationPorts?: number[] | null;
  /** 路由的Headers */
  Headers?: KVMapping[] | null;
}

/** 云原生网关服务详细信息 */
declare interface KongServiceDetail {
  /** 服务ID */
  ID: string | null;
  /** 服务名字 */
  Name?: string | null;
  /** 后端协议 */
  Protocol?: string | null;
  /** 后端路径 */
  Path?: string | null;
  /** 后端延时，单位ms */
  Timeout?: number | null;
  /** 重试次数 */
  Retries?: number | null;
  /** 标签 */
  Tags?: string[] | null;
  /** 后端配置 */
  UpstreamInfo?: KongUpstreamInfo | null;
  /** 后端类型 */
  UpstreamType?: string | null;
  /** 是否可编辑 */
  Editable?: boolean | null;
  /** 创建时间 */
  CreatedTime?: string | null;
}

/** 云原生网关服务预览信息 */
declare interface KongServicePreview {
  /** 服务ID */
  ID: string | null;
  /** 服务名字 */
  Name?: string | null;
  /** 标签 */
  Tags?: string[] | null;
  /** 后端配置 */
  UpstreamInfo?: KongUpstreamInfo | null;
  /** 后端类型 */
  UpstreamType?: string | null;
  /** 创建时间 */
  CreatedTime?: string | null;
  /** 是否可编辑 */
  Editable?: boolean | null;
}

/** kong服务路由列表 */
declare interface KongServiceRouteList {
  /** 无 */
  RouteList?: KongRoutePreview[] | null;
  /** 总数 */
  TotalCount?: number | null;
}

/** kong实例的服务列表 */
declare interface KongServices {
  /** kong实例的服务列表 */
  ServiceList?: KongServicePreview[] | null;
  /** 列表总数 */
  TotalCount?: number | null;
}

/** Kong Upstream中的Target */
declare interface KongTarget {
  /** Host */
  Host: string | null;
  /** 端口 */
  Port: number | null;
  /** 权重 */
  Weight: number | null;
  /** 健康状态 */
  Health?: string | null;
  /** 创建时间 */
  CreatedTime?: string | null;
  /** Target的来源 */
  Source?: string | null;
}

/** 服务的后端配置 */
declare interface KongUpstreamInfo {
  /** IP或域名 */
  Host?: string;
  /** 端口 */
  Port?: number;
  /** 服务来源ID */
  SourceID?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 服务（注册中心或Kubernetes中的服务）名字 */
  ServiceName?: string;
  /** 服务后端类型是IPList时提供 */
  Targets?: KongTarget[];
  /** 服务来源类型 */
  SourceType?: string;
  /** SCF函数类型 */
  ScfType?: string;
  /** SCF函数命名空间 */
  ScfNamespace?: string;
  /** SCF函数名 */
  ScfLambdaName?: string;
  /** SCF函数版本 */
  ScfLambdaQualifier?: string;
  /** 冷启动时间，单位秒 */
  SlowStart?: number;
  /** 负载均衡算法，默认为 round-robin，还支持 least-connections，consisten_hashing */
  Algorithm?: string;
  /** CVM弹性伸缩组ID */
  AutoScalingGroupID?: string;
  /** CVM弹性伸缩组端口 */
  AutoScalingCvmPort?: number;
  /** CVM弹性伸缩组使用的CVM TAT命令状态 */
  AutoScalingTatCmdStatus?: string;
  /** CVM弹性伸缩组生命周期挂钩状态 */
  AutoScalingHookStatus?: string;
  /** 服务来源的名字 */
  SourceName?: string;
  /** 精确的服务来源类型，新建服务来源时候传入的类型 */
  RealSourceType?: string;
}

/** 获取云原生API网关实例列表响应结果。 */
declare interface ListCloudNativeAPIGatewayResult {
  /** 总数。 */
  TotalCount: number;
  /** 云原生API网关实例列表。 */
  GatewayList: DescribeCloudNativeAPIGatewayResult[];
}

/** 列表过滤条件，模糊匹配 */
declare interface ListFilter {
  /** 过滤字段 */
  Key?: string | null;
  /** 过滤值 */
  Value?: string | null;
}

/** Nacos副本信息 */
declare interface NacosReplica {
  /** 名称 */
  Name: string;
  /** 角色 */
  Role: string;
  /** 状态 */
  Status: string;
  /** 子网ID */
  SubnetId: string | null;
  /** 可用区ID */
  Zone: string | null;
  /** 可用区ID */
  ZoneId: string | null;
  /** VPC ID */
  VpcId?: string | null;
}

/** nacos服务端接口列表，用于云监控 */
declare interface NacosServerInterface {
  /** 接口名 */
  Interface: string | null;
}

/** 云原生网关分组信息 */
declare interface NativeGatewayServerGroup {
  /** 云原生网关分组唯一id */
  GroupId?: string;
  /** 分组名 */
  Name?: string;
  /** 描述信息 */
  Description?: string;
  /** 节点规格、节点数信息 */
  NodeConfig?: CloudNativeAPIGatewayNodeConfig;
  /** 网关分组状态。 */
  Status?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 是否是默认分组。0：否。1：是。 */
  IsFirstGroup?: number;
  /** 关联策略信息 */
  BindingStrategy?: CloudNativeAPIGatewayStrategy | null;
  /** 网关实例 id */
  GatewayId?: string | null;
  /** 带宽 */
  InternetMaxBandwidthOut?: number | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 子网id */
  SubnetIds?: string | null;
}

/** 网关分组列表 */
declare interface NativeGatewayServerGroups {
  /** 总数 */
  TotalCount: number;
  /** 分组信息数组。 */
  GatewayGroupList: NativeGatewayServerGroup[];
}

/** 查询Limiter的接入地址 */
declare interface PolarisLimiterAddress {
  /** VPC接入IP列表 */
  IntranetAddress: string | null;
}

/** 云原生网关限流插件Qps阈值 */
declare interface QpsThreshold {
  /** qps阈值控制维度,包含:second、minute、hour、day、month、year */
  Unit: string;
  /** 阈值 */
  Max: number;
}

/** 微服务注册引擎实例 */
declare interface SREInstance {
  /** 实例ID */
  InstanceId: string;
  /** 名称 */
  Name: string;
  /** 版本号 */
  Edition: string;
  /** 状态, 枚举值:creating/create_fail/running/updating/update_fail/restarting/restart_fail/destroying/destroy_fail */
  Status: string;
  /** 规格ID */
  SpecId: string;
  /** 副本数 */
  Replica: number;
  /** 类型 */
  Type: string;
  /** Vpc iD */
  VpcId: string;
  /** 子网ID */
  SubnetIds: string[] | null;
  /** 是否开启持久化存储 */
  EnableStorage: boolean | null;
  /** 数据存储方式 */
  StorageType: string | null;
  /** 云硬盘容量 */
  StorageCapacity: number | null;
  /** 计费方式 */
  Paymode: string | null;
  /** EKS集群的ID */
  EKSClusterID: string | null;
  /** 集群创建时间 */
  CreateTime: string | null;
  /** 环境配置信息列表 */
  EnvInfos: EnvInfo[] | null;
  /** 引擎所在的区域 */
  EngineRegion: string | null;
  /** 注册引擎是否开启公网 */
  EnableInternet: boolean | null;
  /** 私有网络列表信息 */
  VpcInfos: VpcInfo[] | null;
  /** 服务治理相关信息列表 */
  ServiceGovernanceInfos: ServiceGovernanceInfo[] | null;
  /** 实例的标签信息 */
  Tags: KVPair[] | null;
  /** 引擎实例是否开启控制台公网访问地址 */
  EnableConsoleInternet: boolean | null;
  /** 引擎实例是否开启控制台内网访问地址 */
  EnableConsoleIntranet: boolean | null;
  /** 引擎实例是否展示参数配置页面 */
  ConfigInfoVisible: boolean | null;
  /** 引擎实例控制台默认密码 */
  ConsoleDefaultPwd: string | null;
  /** 交易付费类型，0后付费/1预付费 */
  TradeType: number | null;
  /** 自动续费标记：0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费 */
  AutoRenewFlag: number | null;
  /** 预付费到期时间 */
  CurDeadline: string | null;
  /** 隔离开始时间 */
  IsolateTime: string | null;
  /** 实例地域相关的描述信息 */
  RegionInfos: DescribeInstanceRegionInfo[] | null;
  /** 所在EKS环境，分为common和yunti */
  EKSType: string | null;
  /** 引擎的产品版本 */
  FeatureVersion?: string | null;
  /** 引擎实例是否开启客户端内网访问地址 */
  EnableClientIntranet?: boolean | null;
}

/** 服务治理相关的信息 */
declare interface ServiceGovernanceInfo {
  /** 引擎所在的地域 */
  EngineRegion: string;
  /** 服务治理引擎绑定的kubernetes集群信息 */
  BoundK8SInfos?: BoundK8SInfo[];
  /** 服务治理引擎绑定的网络信息 */
  VpcInfos?: VpcInfo[];
  /** 当前实例鉴权是否开启 */
  AuthOpen?: boolean;
  /** 该实例支持的功能，鉴权就是 Auth */
  Features?: string[];
  /** 主账户名默认为 polaris，该值为主账户的默认密码 */
  MainPassword?: string;
  /** 服务治理pushgateway引擎绑定的网络信息 */
  PgwVpcInfos?: VpcInfo[];
  /** 服务治理限流server引擎绑定的网络信息 */
  LimiterVpcInfos?: VpcInfo[];
}

/** 更新云原生API网关响应结果。 */
declare interface UpdateCloudNativeAPIGatewayResult {
  /** 云原生API网关ID。 */
  GatewayId?: string;
  /** 云原生网关状态。 */
  Status?: string;
  /** 任务ID */
  TaskId?: string | null;
}

/** 私有网络信息 */
declare interface VpcInfo {
  /** Vpc Id */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 内网访问地址 */
  IntranetAddress?: string | null;
}

/** Zookeeper副本信息 */
declare interface ZookeeperReplica {
  /** 名称 */
  Name: string;
  /** 角色 */
  Role: string;
  /** 状态 */
  Status: string;
  /** 子网ID */
  SubnetId: string | null;
  /** 可用区ID */
  Zone: string | null;
  /** 可用区ID */
  ZoneId: string | null;
  /** 别名 */
  AliasName: string | null;
  /** VPC ID */
  VpcId?: string | null;
}

/** Zookeeper服务端接口列表，用于云监控 */
declare interface ZookeeperServerInterface {
  /** 接口名 */
  Interface: string | null;
}

declare interface CreateCloudNativeAPIGatewayCanaryRuleRequest {
  /** 网关 ID */
  GatewayId: string;
  /** 服务 ID */
  ServiceId: string;
  /** 灰度规则配置 */
  CanaryRule: CloudNativeAPIGatewayCanaryRule;
}

declare interface CreateCloudNativeAPIGatewayCanaryRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayRequest {
  /** 云原生API网关名字, 最多支持60个字符。 */
  Name: string;
  /** 云原生API网关类型, 目前只支持kong。 */
  Type: string;
  /** 云原生API网关版本。参考值：- 2.4.1- 2.5.1 */
  GatewayVersion: string;
  /** 云原生API网关节点配置。 */
  NodeConfig: CloudNativeAPIGatewayNodeConfig;
  /** 云原生API网关vpc配置。 */
  VpcConfig: CloudNativeAPIGatewayVpcConfig;
  /** 云原生API网关描述信息, 最多支持120个字符。 */
  Description?: string;
  /** 标签列表 */
  Tags?: InstanceTagInfo[];
  /** 是否开启 CLS 日志。默认值：fasle */
  EnableCls?: boolean;
  /** 产品版本。参考值：- TRIAL：开发版- STANDARD：标准版 （默认值）- PROFESSIONAL：专业版 */
  FeatureVersion?: string;
  /** 公网出流量带宽，[1,2048]Mbps */
  InternetMaxBandwidthOut?: number;
  /** 实例实际的地域信息，默认值：ap-guangzhou */
  EngineRegion?: string;
  /** ingress Class名称 */
  IngressClassName?: string;
  /** 付费类型。参考值：0：后付费（默认值）1：预付费（接口暂不支持创建预付费实例） */
  TradeType?: number;
  /** 公网相关配置 */
  InternetConfig?: InternetConfig;
}

declare interface CreateCloudNativeAPIGatewayResponse {
  /** 创建云原生API网关实例响应结果。 */
  Result?: CreateCloudNativeAPIGatewayResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayRouteRateLimitRequest {
  /** 网关ID */
  GatewayId: string;
  /** 路由id，或路由名称。不支持“未命名” */
  Id: string;
  /** 限流配置 */
  LimitDetail: CloudNativeAPIGatewayRateLimitDetail;
}

declare interface CreateCloudNativeAPIGatewayRouteRateLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayRouteRequest {
  /** 网关ID */
  GatewayId: string;
  /** 所属服务的ID */
  ServiceID: string;
  /** 路由的名字，实例级别唯一，可以不提供 */
  RouteName?: string;
  /** 路由的方法，其中方法可选值：- GET- POST- DELETE- PUT- OPTIONS- PATCH- HEAD- ANY- TRACE- COPY- MOVE- PROPFIND- PROPPATCH- MKCOL- LOCK- UNLOCK */
  Methods?: string[];
  /** 路由的域名 */
  Hosts?: string[];
  /** 路由的路径 */
  Paths?: string[];
  /** 路由的协议，可选- https- http */
  Protocols?: string[];
  /** 转发到后端时是否保留Host */
  PreserveHost?: boolean;
  /** https重定向状态码 */
  HttpsRedirectStatusCode?: number;
  /** 转发到后端时是否StripPath */
  StripPath?: boolean;
  /** 是否开启强制HTTPS */
  ForceHttps?: boolean;
  /** 四层匹配的目的端口 */
  DestinationPorts?: number[];
  /** 路由的Headers */
  Headers?: KVMapping[];
}

declare interface CreateCloudNativeAPIGatewayRouteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayServiceRateLimitRequest {
  /** 网关ID */
  GatewayId: string;
  /** 服务名称，或服务ID */
  Name: string;
  /** 限流配置 */
  LimitDetail: CloudNativeAPIGatewayRateLimitDetail;
}

declare interface CreateCloudNativeAPIGatewayServiceRateLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayServiceRequest {
  /** 网关ID */
  GatewayId: string;
  /** 服务名称 */
  Name: string;
  /** 请求协议：- https- http- tcp- udp */
  Protocol: string;
  /** 请求路径 */
  Path: string;
  /** 超时时间，单位ms */
  Timeout: number;
  /** 重试次数 */
  Retries: number;
  /** 服务类型: - Kubernetes - Registry- IPList- HostIP- Scf */
  UpstreamType: string;
  /** 服务配置信息 */
  UpstreamInfo: KongUpstreamInfo;
}

declare interface CreateCloudNativeAPIGatewayServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEngineRequest {
  /** 引擎类型。参考值：- zookeeper- nacos- consul- apollo- eureka- polaris */
  EngineType: string;
  /** 引擎的开源版本。每种引擎支持的开源版本不同，请参考产品文档或者控制台购买页 */
  EngineVersion: string;
  /** 引擎的产品版本。参考值：- STANDARD： 标准版引擎各版本及可选择的规格、节点数说明：apollo - STANDARD版本规格列表：1C2G、2C4G、4C8G、8C16G、16C32G节点数：1，2，3，4，5eureka - STANDARD版本规格列表：1C2G、2C4G、4C8G、8C16G、16C32G节点数：3，4，5polarismesh - STANDARD版本规格列表：NUM50、NUM100、NUM200、NUM500、NUM1000、NUM5000、NUM10000、NUM50000兼容原spec-xxxxxx形式的规格ID */
  EngineProductVersion: string;
  /** 引擎所在地域。参考值说明：中国区 参考值：- ap-guangzhou：广州- ap-beijing：北京- ap-chengdu：成都- ap-chongqing：重庆- ap-nanjing：南京- ap-shanghai：上海- ap-hongkong：香港- ap-taipei：台北亚太区 参考值：- ap-jakarta：雅加达- ap-singapore：新加坡北美区 参考值- na-toronto：多伦多金融专区 参考值- ap-beijing-fsi：北京金融- ap-shanghai-fsi：上海金融- ap-shenzhen-fsi：深圳金融 */
  EngineRegion: string;
  /** 引擎名称。参考值：- eurek-test */
  EngineName: string;
  /** 付费类型。参考值：- 0：后付费- 1：预付费（接口暂不支持创建预付费实例） */
  TradeType: number;
  /** 引擎的节点规格 ID。参见EngineProductVersion字段说明 */
  EngineResourceSpec?: string;
  /** 引擎的节点数量。参见EngineProductVersion字段说明 */
  EngineNodeNum?: number;
  /** VPC ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：- vpc-conz6aix */
  VpcId?: string;
  /** 子网 ID。在 VPC 的子网内分配一个 IP 作为引擎的访问地址。参考值：- subnet-ahde9me9 */
  SubnetId?: string;
  /** Apollo 环境配置参数列表。参数说明：如果创建Apollo类型，此参数为必填的环境信息列表，最多可选4个环境。环境信息参数说明：- Name：环境名。参考值：prod, dev, fat, uat- EngineResourceSpec：环境内引擎的节点规格ID。参见EngineProductVersion参数说明- EngineNodeNum：环境内引擎的节点数量。参见EngineProductVersion参数说明，其中prod环境支持的节点数为2，3，4，5- StorageCapacity：配置存储空间大小，以GB为单位，步长为5.参考值：35- VpcId：VPC ID。参考值：vpc-conz6aix- SubnetId：子网 ID。参考值：subnet-ahde9me9 */
  ApolloEnvParams?: ApolloEnvParam[];
  /** 引擎的标签列表。用户自定义的key/value形式，无参考值 */
  EngineTags?: InstanceTagInfo[];
  /** 引擎的初始帐号信息。可设置参数：- Name：控制台初始用户名- Password：控制台初始密码- Token：引擎接口的管理员 Token */
  EngineAdmin?: EngineAdmin;
  /** 预付费时长，以月为单位 */
  PrepaidPeriod?: number;
  /** 自动续费标记，仅预付费使用。参考值：- 0：不自动续费- 1：自动续费 */
  PrepaidRenewFlag?: number;
  /** 跨地域部署的引擎地域配置详情 */
  EngineRegionInfos?: EngineRegionInfo[];
}

declare interface CreateEngineResponse {
  /** 引擎实例 ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNativeGatewayServerGroupRequest {
  /** 网关实例id。只支持后付费实例 */
  GatewayId: string;
  /** 网关分组名 */
  Name: string;
  /** 节点配置 */
  NodeConfig: CloudNativeAPIGatewayNodeConfig;
  /** 子网id */
  SubnetId: string;
  /** 描述信息 */
  Description?: string;
  /** 公网带宽信息 */
  InternetMaxBandwidthOut?: number;
  /** 公网配置。 */
  InternetConfig?: InternetConfig;
}

declare interface CreateNativeGatewayServerGroupResponse {
  /** 网关分组创建信息 */
  Result?: CreateCloudNativeAPIGatewayServerGroupResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayCanaryRuleRequest {
  /** 网关 ID */
  GatewayId: string;
  /** 服务 ID */
  ServiceId: string;
  /** 优先级 */
  Priority: number;
}

declare interface DeleteCloudNativeAPIGatewayCanaryRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 是否删除实例关联的 CLS 日志主题。 */
  DeleteClsTopic?: boolean;
}

declare interface DeleteCloudNativeAPIGatewayResponse {
  /** 删除云原生API网关实例响应结果。 */
  Result: DeleteCloudNativeAPIGatewayResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayRouteRateLimitRequest {
  /** 网关Id */
  GatewayId: string;
  /** 路由Id，或路由名称。不支持“未命名” */
  Id: string;
}

declare interface DeleteCloudNativeAPIGatewayRouteRateLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayRouteRequest {
  /** 网关ID */
  GatewayId: string;
  /** 路由的ID或名字，不支持名称“未命名” */
  Name: string;
}

declare interface DeleteCloudNativeAPIGatewayRouteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayServiceRateLimitRequest {
  /** 网关Id */
  GatewayId: string;
  /** 服务名称，或服务ID */
  Name: string;
}

declare interface DeleteCloudNativeAPIGatewayServiceRateLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayServiceRequest {
  /** 网关ID */
  GatewayId: string;
  /** 服务名字，服务ID */
  Name: string;
}

declare interface DeleteCloudNativeAPIGatewayServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEngineRequest {
  /** 引擎实例 ID */
  InstanceId: string;
}

declare interface DeleteEngineResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNativeGatewayServerGroupRequest {
  /** 网关实例id。只支持后付费实例 */
  GatewayId: string;
  /** 网关分组id */
  GroupId: string;
}

declare interface DeleteNativeGatewayServerGroupResponse {
  /** 删除信息 */
  Result?: DeleteNativeGatewayServerGroupResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayCanaryRulesRequest {
  /** 网关ID */
  GatewayId: string;
  /** 服务 ID */
  ServiceId: string;
  /** 列表数量 */
  Limit?: number;
  /** 列表offset */
  Offset?: number;
}

declare interface DescribeCloudNativeAPIGatewayCanaryRulesResponse {
  /** 灰度规则列表 */
  Result?: CloudAPIGatewayCanaryRuleList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayNodesRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 实例分组id */
  GroupId?: string;
  /** 翻页获取多少个 */
  Limit?: number;
  /** 翻页从第几个开始获取 */
  Offset?: number;
}

declare interface DescribeCloudNativeAPIGatewayNodesResponse {
  /** 获取云原生网关节点列表结果。 */
  Result: DescribeCloudNativeAPIGatewayNodesResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayPortsRequest {
  /** 云原生API网关实例ID */
  GatewayId: string;
}

declare interface DescribeCloudNativeAPIGatewayPortsResponse {
  /** 云原生API网关实例协议端口列表响应结果 */
  Result?: DescribeGatewayInstancePortResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayRequest {
  /** 云原生API网关实例ID */
  GatewayId: string;
}

declare interface DescribeCloudNativeAPIGatewayResponse {
  /** 获取云原生API网关基础信息响应结果。 */
  Result: DescribeCloudNativeAPIGatewayResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayRouteRateLimitRequest {
  /** 网关Id */
  GatewayId: string;
  /** 路由Id，或路由名称。不支持“未命名” */
  Id: string;
}

declare interface DescribeCloudNativeAPIGatewayRouteRateLimitResponse {
  /** 获取云原生网关限流插件(路由) */
  Result?: CloudNativeAPIGatewayRateLimitDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayRoutesRequest {
  /** 网关ID */
  GatewayId: string;
  /** 翻页单页查询限制数量[0,1000], 默认值0 */
  Limit?: number;
  /** 翻页单页偏移量，默认值0 */
  Offset?: number;
  /** 服务的名字，精确匹配 */
  ServiceName?: string;
  /** 路由的名字，精确匹配 */
  RouteName?: string;
  /** 过滤条件，多个过滤条件之间是与的关系，支持 name, path, host, method, service, protocol */
  Filters?: ListFilter[];
}

declare interface DescribeCloudNativeAPIGatewayRoutesResponse {
  /** 无 */
  Result?: KongServiceRouteList | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayServiceRateLimitRequest {
  /** 网关Id */
  GatewayId: string;
  /** 服务名称，或服务ID。 */
  Name: string;
}

declare interface DescribeCloudNativeAPIGatewayServiceRateLimitResponse {
  /** 获取云原生网关限流插件(服务) */
  Result?: CloudNativeAPIGatewayRateLimitDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayServicesRequest {
  /** 网关ID */
  GatewayId: string;
  /** 列表数量 */
  Limit?: number;
  /** 列表 offset */
  Offset?: number;
  /** 过滤条件，多个过滤条件之间是与的关系，支持 name,upstreamType */
  Filters?: ListFilter[];
}

declare interface DescribeCloudNativeAPIGatewayServicesResponse {
  /** 无 */
  Result?: KongServices | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewaysRequest {
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 请求过滤参数，支持按照实例名称、ID和标签键值（Name、GatewayId、Tag）筛选 */
  Filters?: Filter[];
}

declare interface DescribeCloudNativeAPIGatewaysResponse {
  /** 获取云原生API网关实例列表响应结果。 */
  Result: ListCloudNativeAPIGatewayResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNacosReplicasRequest {
  /** 引擎实例ID */
  InstanceId: string;
  /** 副本列表Limit */
  Limit?: number;
  /** 副本列表Offset */
  Offset?: number;
}

declare interface DescribeNacosReplicasResponse {
  /** 引擎实例副本信息 */
  Replicas: NacosReplica[];
  /** 副本个数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNacosServerInterfacesRequest {
  /** 实例id */
  InstanceId?: string;
  /** 返回的列表个数 */
  Limit?: number;
  /** 返回的列表起始偏移量 */
  Offset?: number;
}

declare interface DescribeNacosServerInterfacesResponse {
  /** 接口总个数 */
  TotalCount: number;
  /** 接口列表 */
  Content: NacosServerInterface[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNativeGatewayServerGroupsRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 翻页从第几个开始获取 */
  Offset?: number;
  /** 翻页获取多少个 */
  Limit?: number;
  /** 过滤参数 */
  Filters?: Filter[];
}

declare interface DescribeNativeGatewayServerGroupsResponse {
  /** 分组列表信息 */
  Result: NativeGatewayServerGroups;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOneCloudNativeAPIGatewayServiceRequest {
  /** 网关ID */
  GatewayId: string;
  /** 服务名字，或服务ID */
  Name: string;
}

declare interface DescribeOneCloudNativeAPIGatewayServiceResponse {
  /** 无 */
  Result?: KongServiceDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSREInstanceAccessAddressRequest {
  /** 注册引擎实例Id */
  InstanceId?: string;
  /** VPC ID */
  VpcId?: string;
  /** 子网ID */
  SubnetId?: string;
  /** 引擎其他组件名称（pushgateway、polaris-limiter） */
  Workload?: string;
  /** 部署地域 */
  EngineRegion?: string;
}

declare interface DescribeSREInstanceAccessAddressResponse {
  /** 内网访问地址 */
  IntranetAddress: string;
  /** 公网访问地址 */
  InternetAddress: string;
  /** apollo多环境公网ip */
  EnvAddressInfos: EnvAddressInfo[];
  /** 控制台公网访问地址 */
  ConsoleInternetAddress: string | null;
  /** 控制台内网访问地址 */
  ConsoleIntranetAddress: string | null;
  /** 客户端公网带宽 */
  InternetBandWidth: number | null;
  /** 控制台公网带宽 */
  ConsoleInternetBandWidth: number | null;
  /** 北极星限流server节点接入IP */
  LimiterAddressInfos: PolarisLimiterAddress[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSREInstancesRequest {
  /** 请求过滤参数 */
  Filters?: Filter[];
  /** 翻页单页查询限制数量[0,1000], 默认值0 */
  Limit?: number;
  /** 翻页单页偏移量，默认值0 */
  Offset?: number;
  /** 查询类型 */
  QueryType?: string;
  /** 调用方来源 */
  QuerySource?: string;
}

declare interface DescribeSREInstancesResponse {
  /** 总数量 */
  TotalCount: number;
  /** 实例记录 */
  Content: SREInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZookeeperReplicasRequest {
  /** 注册引擎实例ID */
  InstanceId: string;
  /** 副本列表Limit */
  Limit?: number;
  /** 副本列表Offset */
  Offset?: number;
}

declare interface DescribeZookeeperReplicasResponse {
  /** 注册引擎实例副本信息 */
  Replicas: ZookeeperReplica[];
  /** 副本个数 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZookeeperServerInterfacesRequest {
  /** 实例id */
  InstanceId?: string;
  /** 返回的列表个数 */
  Limit?: number;
  /** 返回的列表起始偏移量 */
  Offset?: number;
}

declare interface DescribeZookeeperServerInterfacesResponse {
  /** 接口总个数 */
  TotalCount: number;
  /** 接口列表 */
  Content: ZookeeperServerInterface[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayCanaryRuleRequest {
  /** 网关 ID */
  GatewayId: string;
  /** 服务 ID */
  ServiceId: string;
  /** 优先级，同一个服务的灰度规则优先级是唯一的 */
  Priority: number;
  /** 灰度规则配置 */
  CanaryRule: CloudNativeAPIGatewayCanaryRule;
}

declare interface ModifyCloudNativeAPIGatewayCanaryRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 云原生API网关名字, 最多支持60个字符。 */
  Name?: string;
  /** 云原生API网关描述信息, 最多支持120个字符。 */
  Description?: string;
  /** 是否开启 CLS 日志。暂时取值只能是 true，即只能从关闭状态变成开启状态。 */
  EnableCls?: boolean;
  /** 公网计费模式。可选取值 BANDWIDTH | TRAFFIC ，表示按带宽和按流量计费。 */
  InternetPayMode?: string;
}

declare interface ModifyCloudNativeAPIGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayRouteRateLimitRequest {
  /** 网关ID */
  GatewayId: string;
  /** 路由id，或路由名称。不支持“未命名” */
  Id: string;
  /** 限流配置 */
  LimitDetail: CloudNativeAPIGatewayRateLimitDetail;
}

declare interface ModifyCloudNativeAPIGatewayRouteRateLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayRouteRequest {
  /** 网关ID */
  GatewayId: string;
  /** 所属服务的ID */
  ServiceID: string;
  /** 路由的ID，实例级别唯一 */
  RouteID: string;
  /** 路由的名字，实例级别唯一，可以不提供 */
  RouteName?: string;
  /** 路由的方法，其中方法可选值：- GET- POST- DELETE- PUT- OPTIONS- PATCH- HEAD- ANY- TRACE- COPY- MOVE- PROPFIND- PROPPATCH- MKCOL- LOCK- UNLOCK */
  Methods?: string[];
  /** 路由的域名 */
  Hosts?: string[];
  /** 路由的路径 */
  Paths?: string[];
  /** 路由的协议，可选- https- http */
  Protocols?: string[];
  /** 转发到后端时是否保留Host */
  PreserveHost?: boolean;
  /** https重定向状态码 */
  HttpsRedirectStatusCode?: number;
  /** 转发到后端时是否StripPath */
  StripPath?: boolean;
  /** 是否开启强制HTTPS */
  ForceHttps?: boolean;
  /** 四层匹配的目的端口 */
  DestinationPorts?: number[];
  /** 路由的Headers */
  Headers?: KVMapping[];
}

declare interface ModifyCloudNativeAPIGatewayRouteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayServiceRateLimitRequest {
  /** 网关ID */
  GatewayId: string;
  /** 服务名称，或服务ID */
  Name: string;
  /** 限流配置 */
  LimitDetail: CloudNativeAPIGatewayRateLimitDetail;
}

declare interface ModifyCloudNativeAPIGatewayServiceRateLimitResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCloudNativeAPIGatewayServiceRequest {
  /** 网关ID */
  GatewayId: string;
  /** 服务名称 */
  Name: string;
  /** 请求协议： - https - http - tcp - udp */
  Protocol: string;
  /** 请求路径 */
  Path: string;
  /** 超时时间，单位ms */
  Timeout: number;
  /** 重试次数 */
  Retries: number;
  /** 服务类型: - Kubernetes - Registry- IPList- HostIP- Scf */
  UpstreamType: string;
  /** 服务配置 */
  UpstreamInfo: KongUpstreamInfo;
  /** 服务ID */
  ID: string;
}

declare interface ModifyCloudNativeAPIGatewayServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNativeGatewayServerGroupRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 网关分组 id */
  GroupId: string;
  /** 云原生API网关名字, 最多支持60个字符。 */
  Name?: string;
  /** 云原生API网关描述信息, 最多支持120个字符。 */
  Description?: string;
}

declare interface ModifyNativeGatewayServerGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RateLimitResponse {
  /** 自定义响应体 */
  Body?: string | null;
  /** Headers */
  Headers?: KVMapping[] | null;
  /** http状态码 */
  HttpStatus?: number | null;
}

declare interface UpdateCloudNativeAPIGatewaySpecRequest {
  /** 云原生API网关实例ID。只支持后付费实例 */
  GatewayId: string;
  /** 网关分组id */
  GroupId: string;
  /** 网关分组节点规格配置。 */
  NodeConfig: CloudNativeAPIGatewayNodeConfig;
}

declare interface UpdateCloudNativeAPIGatewaySpecResponse {
  /** 更新云原生API网关实例规格的响应结果。 */
  Result?: UpdateCloudNativeAPIGatewayResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateEngineInternetAccessRequest {
  /** 引擎ID */
  InstanceId: string;
  /** 引擎类型 */
  EngineType: string;
  /** 是否开启客户端公网访问，true开 false关 */
  EnableClientInternetAccess?: boolean;
}

declare interface UpdateEngineInternetAccessResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tse 微服务引擎 TSE} */
declare interface Tse {
  (): Versions;
  /** 创建云原生API网关实例 {@link CreateCloudNativeAPIGatewayRequest} {@link CreateCloudNativeAPIGatewayResponse} */
  CreateCloudNativeAPIGateway(data: CreateCloudNativeAPIGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayResponse>;
  /** 创建云原生网关的灰度规则 {@link CreateCloudNativeAPIGatewayCanaryRuleRequest} {@link CreateCloudNativeAPIGatewayCanaryRuleResponse} */
  CreateCloudNativeAPIGatewayCanaryRule(data: CreateCloudNativeAPIGatewayCanaryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayCanaryRuleResponse>;
  /** 创建云原生网关路由 {@link CreateCloudNativeAPIGatewayRouteRequest} {@link CreateCloudNativeAPIGatewayRouteResponse} */
  CreateCloudNativeAPIGatewayRoute(data: CreateCloudNativeAPIGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayRouteResponse>;
  /** 创建云原生网关限流插件(路由) {@link CreateCloudNativeAPIGatewayRouteRateLimitRequest} {@link CreateCloudNativeAPIGatewayRouteRateLimitResponse} */
  CreateCloudNativeAPIGatewayRouteRateLimit(data: CreateCloudNativeAPIGatewayRouteRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayRouteRateLimitResponse>;
  /** 创建云原生网关服务 {@link CreateCloudNativeAPIGatewayServiceRequest} {@link CreateCloudNativeAPIGatewayServiceResponse} */
  CreateCloudNativeAPIGatewayService(data: CreateCloudNativeAPIGatewayServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayServiceResponse>;
  /** 创建云原生网关限流插件(服务) {@link CreateCloudNativeAPIGatewayServiceRateLimitRequest} {@link CreateCloudNativeAPIGatewayServiceRateLimitResponse} */
  CreateCloudNativeAPIGatewayServiceRateLimit(data: CreateCloudNativeAPIGatewayServiceRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayServiceRateLimitResponse>;
  /** 创建引擎实例 {@link CreateEngineRequest} {@link CreateEngineResponse} */
  CreateEngine(data: CreateEngineRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEngineResponse>;
  /** 创建云原生网关引擎分组 {@link CreateNativeGatewayServerGroupRequest} {@link CreateNativeGatewayServerGroupResponse} */
  CreateNativeGatewayServerGroup(data: CreateNativeGatewayServerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNativeGatewayServerGroupResponse>;
  /** 删除云原生API网关实例 {@link DeleteCloudNativeAPIGatewayRequest} {@link DeleteCloudNativeAPIGatewayResponse} */
  DeleteCloudNativeAPIGateway(data: DeleteCloudNativeAPIGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayResponse>;
  /** 删除云原生网关的灰度规则 {@link DeleteCloudNativeAPIGatewayCanaryRuleRequest} {@link DeleteCloudNativeAPIGatewayCanaryRuleResponse} */
  DeleteCloudNativeAPIGatewayCanaryRule(data: DeleteCloudNativeAPIGatewayCanaryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayCanaryRuleResponse>;
  /** 删除云原生网关路由 {@link DeleteCloudNativeAPIGatewayRouteRequest} {@link DeleteCloudNativeAPIGatewayRouteResponse} */
  DeleteCloudNativeAPIGatewayRoute(data: DeleteCloudNativeAPIGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayRouteResponse>;
  /** 删除云原生网关的限流插件(路由) {@link DeleteCloudNativeAPIGatewayRouteRateLimitRequest} {@link DeleteCloudNativeAPIGatewayRouteRateLimitResponse} */
  DeleteCloudNativeAPIGatewayRouteRateLimit(data: DeleteCloudNativeAPIGatewayRouteRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayRouteRateLimitResponse>;
  /** 删除云原生网关服务 {@link DeleteCloudNativeAPIGatewayServiceRequest} {@link DeleteCloudNativeAPIGatewayServiceResponse} */
  DeleteCloudNativeAPIGatewayService(data: DeleteCloudNativeAPIGatewayServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayServiceResponse>;
  /** 删除云原生网关的限流插件(服务) {@link DeleteCloudNativeAPIGatewayServiceRateLimitRequest} {@link DeleteCloudNativeAPIGatewayServiceRateLimitResponse} */
  DeleteCloudNativeAPIGatewayServiceRateLimit(data: DeleteCloudNativeAPIGatewayServiceRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayServiceRateLimitResponse>;
  /** 删除引擎实例 {@link DeleteEngineRequest} {@link DeleteEngineResponse} */
  DeleteEngine(data: DeleteEngineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEngineResponse>;
  /** 删除网关实例分组 {@link DeleteNativeGatewayServerGroupRequest} {@link DeleteNativeGatewayServerGroupResponse} */
  DeleteNativeGatewayServerGroup(data: DeleteNativeGatewayServerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNativeGatewayServerGroupResponse>;
  /** 获取云原生API网关实例信息 {@link DescribeCloudNativeAPIGatewayRequest} {@link DescribeCloudNativeAPIGatewayResponse} */
  DescribeCloudNativeAPIGateway(data: DescribeCloudNativeAPIGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayResponse>;
  /** 查询云原生网关灰度规则列表 {@link DescribeCloudNativeAPIGatewayCanaryRulesRequest} {@link DescribeCloudNativeAPIGatewayCanaryRulesResponse} */
  DescribeCloudNativeAPIGatewayCanaryRules(data: DescribeCloudNativeAPIGatewayCanaryRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayCanaryRulesResponse>;
  /** 获取云原生网关节点列表 {@link DescribeCloudNativeAPIGatewayNodesRequest} {@link DescribeCloudNativeAPIGatewayNodesResponse} */
  DescribeCloudNativeAPIGatewayNodes(data: DescribeCloudNativeAPIGatewayNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayNodesResponse>;
  /** 获取云原生API网关实例端口信息 {@link DescribeCloudNativeAPIGatewayPortsRequest} {@link DescribeCloudNativeAPIGatewayPortsResponse} */
  DescribeCloudNativeAPIGatewayPorts(data: DescribeCloudNativeAPIGatewayPortsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayPortsResponse>;
  /** 查询云原生网关的限流插件(路由) {@link DescribeCloudNativeAPIGatewayRouteRateLimitRequest} {@link DescribeCloudNativeAPIGatewayRouteRateLimitResponse} */
  DescribeCloudNativeAPIGatewayRouteRateLimit(data: DescribeCloudNativeAPIGatewayRouteRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayRouteRateLimitResponse>;
  /** 查询云原生网关路由列表 {@link DescribeCloudNativeAPIGatewayRoutesRequest} {@link DescribeCloudNativeAPIGatewayRoutesResponse} */
  DescribeCloudNativeAPIGatewayRoutes(data: DescribeCloudNativeAPIGatewayRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayRoutesResponse>;
  /** 查询云原生网关的限流插件(服务) {@link DescribeCloudNativeAPIGatewayServiceRateLimitRequest} {@link DescribeCloudNativeAPIGatewayServiceRateLimitResponse} */
  DescribeCloudNativeAPIGatewayServiceRateLimit(data: DescribeCloudNativeAPIGatewayServiceRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayServiceRateLimitResponse>;
  /** 查询云原生网关服务列表 {@link DescribeCloudNativeAPIGatewayServicesRequest} {@link DescribeCloudNativeAPIGatewayServicesResponse} */
  DescribeCloudNativeAPIGatewayServices(data: DescribeCloudNativeAPIGatewayServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayServicesResponse>;
  /** 获取云原生网关实例列表 {@link DescribeCloudNativeAPIGatewaysRequest} {@link DescribeCloudNativeAPIGatewaysResponse} */
  DescribeCloudNativeAPIGateways(data?: DescribeCloudNativeAPIGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewaysResponse>;
  /** 查询Nacos类型引擎实例副本信息 {@link DescribeNacosReplicasRequest} {@link DescribeNacosReplicasResponse} */
  DescribeNacosReplicas(data: DescribeNacosReplicasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNacosReplicasResponse>;
  /** 查询nacos服务接口列表 {@link DescribeNacosServerInterfacesRequest} {@link DescribeNacosServerInterfacesResponse} */
  DescribeNacosServerInterfaces(data?: DescribeNacosServerInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNacosServerInterfacesResponse>;
  /** 查询云原生网关分组信息 {@link DescribeNativeGatewayServerGroupsRequest} {@link DescribeNativeGatewayServerGroupsResponse} */
  DescribeNativeGatewayServerGroups(data: DescribeNativeGatewayServerGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNativeGatewayServerGroupsResponse>;
  /** 获取云原生网关服务详情 {@link DescribeOneCloudNativeAPIGatewayServiceRequest} {@link DescribeOneCloudNativeAPIGatewayServiceResponse} */
  DescribeOneCloudNativeAPIGatewayService(data: DescribeOneCloudNativeAPIGatewayServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOneCloudNativeAPIGatewayServiceResponse>;
  /** 查询引擎实例访问地址 {@link DescribeSREInstanceAccessAddressRequest} {@link DescribeSREInstanceAccessAddressResponse} */
  DescribeSREInstanceAccessAddress(data?: DescribeSREInstanceAccessAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSREInstanceAccessAddressResponse>;
  /** 查询引擎实例列表 {@link DescribeSREInstancesRequest} {@link DescribeSREInstancesResponse} */
  DescribeSREInstances(data?: DescribeSREInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSREInstancesResponse>;
  /** 查询Zookeeper类型注册引擎实例副本信息 {@link DescribeZookeeperReplicasRequest} {@link DescribeZookeeperReplicasResponse} */
  DescribeZookeeperReplicas(data: DescribeZookeeperReplicasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZookeeperReplicasResponse>;
  /** 查询zookeeper服务接口列表 {@link DescribeZookeeperServerInterfacesRequest} {@link DescribeZookeeperServerInterfacesResponse} */
  DescribeZookeeperServerInterfaces(data?: DescribeZookeeperServerInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZookeeperServerInterfacesResponse>;
  /** 修改云原生API网关实例基础信息 {@link ModifyCloudNativeAPIGatewayRequest} {@link ModifyCloudNativeAPIGatewayResponse} */
  ModifyCloudNativeAPIGateway(data: ModifyCloudNativeAPIGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayResponse>;
  /** 修改云原生网关的灰度规则 {@link ModifyCloudNativeAPIGatewayCanaryRuleRequest} {@link ModifyCloudNativeAPIGatewayCanaryRuleResponse} */
  ModifyCloudNativeAPIGatewayCanaryRule(data: ModifyCloudNativeAPIGatewayCanaryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayCanaryRuleResponse>;
  /** 修改云原生网关路由 {@link ModifyCloudNativeAPIGatewayRouteRequest} {@link ModifyCloudNativeAPIGatewayRouteResponse} */
  ModifyCloudNativeAPIGatewayRoute(data: ModifyCloudNativeAPIGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayRouteResponse>;
  /** 修改云原生网关限流插件(路由) {@link ModifyCloudNativeAPIGatewayRouteRateLimitRequest} {@link ModifyCloudNativeAPIGatewayRouteRateLimitResponse} */
  ModifyCloudNativeAPIGatewayRouteRateLimit(data: ModifyCloudNativeAPIGatewayRouteRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayRouteRateLimitResponse>;
  /** 修改云原生网关服务 {@link ModifyCloudNativeAPIGatewayServiceRequest} {@link ModifyCloudNativeAPIGatewayServiceResponse} */
  ModifyCloudNativeAPIGatewayService(data: ModifyCloudNativeAPIGatewayServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayServiceResponse>;
  /** 修改云原生网关限流插件(服务) {@link ModifyCloudNativeAPIGatewayServiceRateLimitRequest} {@link ModifyCloudNativeAPIGatewayServiceRateLimitResponse} */
  ModifyCloudNativeAPIGatewayServiceRateLimit(data: ModifyCloudNativeAPIGatewayServiceRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayServiceRateLimitResponse>;
  /** 修改云原生API网关实例分组基础信息 {@link ModifyNativeGatewayServerGroupRequest} {@link ModifyNativeGatewayServerGroupResponse} */
  ModifyNativeGatewayServerGroup(data: ModifyNativeGatewayServerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNativeGatewayServerGroupResponse>;
  /** 修改云原生API网关实例的节点规格 {@link UpdateCloudNativeAPIGatewaySpecRequest} {@link UpdateCloudNativeAPIGatewaySpecResponse} */
  UpdateCloudNativeAPIGatewaySpec(data: UpdateCloudNativeAPIGatewaySpecRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCloudNativeAPIGatewaySpecResponse>;
  /** 修改引擎公网访问配置 {@link UpdateEngineInternetAccessRequest} {@link UpdateEngineInternetAccessResponse} */
  UpdateEngineInternetAccess(data: UpdateEngineInternetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEngineInternetAccessResponse>;
}

export declare type Versions = ["2020-12-07"];

export default Tse;
