/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 云原生网关限流插件参数限流的精确Qps阈值 */
declare interface AccurateQpsThreshold {
  /** qps阈值控制维度,包含:second、minute、hour、day、month、year */
  Unit: string;
  /** 全局配置ID */
  GlobalConfigId: string;
}

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

/** 指标伸缩行为 */
declare interface AutoScalerBehavior {
  /** 扩容行为配置 */
  ScaleUp?: AutoScalerRules | null;
  /** 缩容行为配置 */
  ScaleDown?: AutoScalerRules | null;
}

/** 扩容策略 */
declare interface AutoScalerPolicy {
  /** 类型，Pods */
  Type?: string | null;
  /** 数量 */
  Value?: number | null;
  /** 扩容周期 */
  PeriodSeconds?: number | null;
}

/** 指标伸缩的规则 */
declare interface AutoScalerRules {
  /** 稳定窗口时间，扩容时默认0，缩容时默认300 */
  StabilizationWindowSeconds?: number | null;
  /** 选择策略依据 */
  SelectPolicy?: string | null;
  /** 扩缩容策略 */
  Policies?: AutoScalerPolicy[] | null;
}

/** 服务治理引擎绑定的kubernetes信息 */
declare interface BoundK8SInfo {
  /** 绑定的kubernetes集群ID */
  BoundClusterId: string;
  /** 绑定的kubernetes的集群类型，分tke和eks两种 */
  BoundClusterType: string | null;
  /** 服务同步模式，all为全量同步，demand为按需同步 */
  SyncMode?: string | null;
  /** 绑定的kubernetes集群所在地域 */
  BindRegion?: string | null;
}

/** CLB多可用区信息 */
declare interface CLBMultiRegion {
  /** 是否启用多可用区 */
  CLBMultiZoneFlag?: boolean | null;
  /** 主可用区信息 */
  CLBMasterZone?: string | null;
  /** 备可用区信息 */
  CLBSlaveZone?: string | null;
}

/** 证书信息 */
declare interface CertificateInfo {
  /** 唯一id */
  Id?: string | null;
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
  /** 灰度规则类别Standard｜Lane */
  RuleType?: string | null;
  /** 全链路灰度策略多个条件之间的匹配方式，与AND，或OR */
  MatchType?: string | null;
  /** 泳道组ID */
  GroupId?: string | null;
  /** 泳道组名称 */
  GroupName?: string | null;
  /** 泳道ID */
  LaneId?: string | null;
  /** 泳道名称 */
  LaneName?: string | null;
  /** 泳道匹配规则：严格STRICT｜宽松PERMISSIVE */
  MatchMode?: string | null;
  /** 泳道标签 */
  LaneTag?: string | null;
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

/** 云原生API网关配置信息。 */
declare interface CloudNativeAPIGatewayConfig {
  /** 控制台类型。 */
  ConsoleType?: string;
  /** HTTP链接地址。 */
  HttpUrl?: string | null;
  /** HTTPS链接地址。 */
  HttpsUrl?: string;
  /** 网络类型, Open|Internal。 */
  NetType?: string;
  /** 管理员用户名。 */
  AdminUser?: string | null;
  /** 管理员密码。 */
  AdminPassword?: string | null;
  /** 网络状态, Open|Closed|Updating */
  Status?: string | null;
  /** 网络访问策略 */
  AccessControl?: NetworkAccessControl | null;
  /** 内网子网 ID */
  SubnetId?: string | null;
  /** 内网VPC ID */
  VpcId?: string | null;
  /** 负载均衡的描述 */
  Description?: string | null;
  /** 负载均衡的规格类型 */
  SlaType?: string | null;
  /** clb规格名称 */
  SlaName?: string | null;
  /** clb vip */
  Vip?: string | null;
  /** 带宽 */
  InternetMaxBandwidthOut?: number | null;
  /** 是否多可用区 */
  MultiZoneFlag?: boolean | null;
  /** 主可用区 */
  MasterZoneId?: string | null;
  /** 备可用区 */
  SlaveZoneId?: string | null;
  /** 主可用区名称 */
  MasterZoneName?: string | null;
  /** 备可用区名称 */
  SlaveZoneName?: string | null;
  /** 网络 id */
  NetworkId?: string | null;
}

/** 云原生API网关节点信息。 */
declare interface CloudNativeAPIGatewayNode {
  /** 云原生网关节点 id */
  NodeId?: string;
  /** 节点 ip */
  NodeIp?: string;
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
  /** 节点权重 */
  Weight?: number | null;
  /** 是否默认权重 */
  IsDefaultWeight?: boolean | null;
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
  Enabled?: boolean;
  /** qps阈值 */
  QpsThresholds?: QpsThreshold[];
  /** 需要进行流量控制的请求路径 */
  Path?: string | null;
  /** 需要进行流量控制的请求头Key */
  Header?: string | null;
  /** 限流依据ip service consumer credential path header */
  LimitBy?: string;
  /** 外部redis配置 */
  ExternalRedis?: ExternalRedis | null;
  /** 计数器策略 local 单机redis 默认redisexternal_redis 外部redis */
  Policy?: string | null;
  /** 响应配置，响应策略为text */
  RateLimitResponse?: RateLimitResponse | null;
  /** 请求转发地址 */
  RateLimitResponseUrl?: string | null;
  /** 响应策略url请求转发text 响应配置default 直接返回 */
  ResponseType?: string;
  /** 是否隐藏限流客户端响应头 */
  HideClientHeaders?: boolean;
  /** 排队时间 */
  LineUpTime?: number;
  /** 是否开启请求排队 */
  IsDelay?: boolean;
  /** 基础限流 */
  BasicLimitQpsThresholds?: QpsThreshold[] | null;
  /** 参数限流的规则 */
  LimitRules?: LimitRule[] | null;
}

/** 网关实例策略 */
declare interface CloudNativeAPIGatewayStrategy {
  /** 策略ID */
  StrategyId?: string;
  /** 策略名称 */
  StrategyName?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  ModifyTime?: string | null;
  /** 策略描述 */
  Description?: string | null;
  /** 弹性伸缩配置 */
  Config?: CloudNativeAPIGatewayStrategyAutoScalerConfig | null;
  /** 网关实例ID */
  GatewayId?: string | null;
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
  /** 指标伸缩行为配置 */
  Behavior?: AutoScalerBehavior | null;
}

/** 弹性伸缩配置指标 */
declare interface CloudNativeAPIGatewayStrategyAutoScalerConfigMetric {
  /** 指标类型- Resource */
  Type?: string;
  /** 指标资源名称- cpu- memory */
  ResourceName?: string | null;
  /** 指标目标类型，目前只支持百分比Utilization */
  TargetType?: string | null;
  /** 指标目标值 */
  TargetValue?: number | null;
}

/** 策略绑定的网关分组信息 */
declare interface CloudNativeAPIGatewayStrategyBindingGroupInfo {
  /** 网关分组ID */
  GroupId: string | null;
  /** 节点配置 */
  NodeConfig: CloudNativeAPIGatewayNodeConfig | null;
  /** 绑定时间 */
  BindTime: string | null;
  /** 网关分组名称 */
  GroupName: string | null;
  /** 绑定状态 */
  Status: string | null;
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
  /** 定时伸缩目标节点数，不超过指标伸缩中定义的最大节点数 */
  TargetReplicas?: number | null;
  /** 定时伸缩cron表达式，无需输入 */
  Crontab?: string | null;
}

/** 云原生API网关vpc配置。 */
declare interface CloudNativeAPIGatewayVpcConfig {
  /** 私有网络ID。 */
  VpcId?: string | null;
  /** 子网ID。 */
  SubnetId?: string | null;
}

/** 配置文件 */
declare interface ConfigFile {
  /** 配置文件id */
  Id?: number | null;
  /** 配置文件名称 */
  Name?: string | null;
  /** 配置文件命名空间 */
  Namespace?: string | null;
  /** 配置文件组 */
  Group?: string | null;
  /** 配置文件内容 */
  Content?: string | null;
  /** 配置文件格式 */
  Format?: string | null;
  /** 配置文件注释 */
  Comment?: string | null;
  /** 配置文件状态 */
  Status?: string | null;
  /** 配置文件标签数组 */
  Tags?: ConfigFileTag[] | null;
  /** 配置文件创建时间 */
  CreateTime?: string | null;
  /** 配置文件创建者 */
  CreateBy?: string | null;
  /** 配置文件修改时间 */
  ModifyTime?: string | null;
  /** 配置文件修改者 */
  ModifyBy?: string | null;
  /** 配置文件发布时间 */
  ReleaseTime?: string | null;
  /** 配置文件发布者 */
  ReleaseBy?: string | null;
}

/** 配置文件组 */
declare interface ConfigFileGroup {
  /** 配置文件组id */
  Id?: number | null;
  /** 配置文件组名称 */
  Name?: string | null;
  /** 命名空间 */
  Namespace?: string | null;
  /** 备注 */
  Comment?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 创建者 */
  CreateBy?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 修改者 */
  ModifyBy?: string | null;
  /** 文件数 */
  FileCount?: number | null;
  /** 关联用户，link_users */
  UserIds?: string[] | null;
  /** 组id，link_groups */
  GroupIds?: string[] | null;
  /** remove_link_users */
  RemoveUserIds?: string[] | null;
  /** remove_link_groups */
  RemoveGroupIds?: string[] | null;
  /** 是否可编辑 */
  Editable?: boolean | null;
  /** 归属者 */
  Owner?: string | null;
  /** 部门 */
  Department?: string | null;
  /** 业务 */
  Business?: string | null;
  /** 配置文件组标签 */
  ConfigFileGroupTags?: ConfigFileGroupTag[] | null;
}

/** 配置文件标签 */
declare interface ConfigFileGroupTag {
  /** key-value 键 */
  Key?: string | null;
  /** key-value 值 */
  Value?: string | null;
}

/** 发布详情 */
declare interface ConfigFilePublishInfo {
  /** 发布名称 */
  ReleaseName?: string;
  /** 命名空间 */
  Namespace?: string;
  /** 发布组 */
  Group?: string;
  /** 文件名 */
  FileName?: string;
  /** 内容 */
  Content?: string;
  /** 描述 */
  Comment?: string;
  /** 格式 */
  Format?: string;
  /** 创建者 */
  CreateBy?: string;
  /** 修改者 */
  ModifyBy?: string;
  /** 标签 */
  Tags?: ConfigFileTag[];
}

/** 配置文件发布 */
declare interface ConfigFileRelease {
  /** 配置文件发布id */
  Id?: number | null;
  /** 配置文件发布名称 */
  Name?: string | null;
  /** 配置文件发布命名空间 */
  Namespace?: string | null;
  /** 配置文件发布组 */
  Group?: string | null;
  /** 配置文件发布文件名称 */
  FileName?: string | null;
  /** 配置文件发布内容 */
  Content?: string | null;
  /** 配置文件发布注释 */
  Comment?: string | null;
  /** 配置文件发布Md5 */
  Md5?: string | null;
  /** 配置文件发布版本 */
  Version?: number | null;
  /** 配置文件发布创建时间 */
  CreateTime?: string | null;
  /** 配置文件发布创建者 */
  CreateBy?: string | null;
  /** 配置文件发布修改时间 */
  ModifyTime?: string | null;
  /** 配置文件发布修改者 */
  ModifyBy?: string | null;
  /** 发布描述 */
  ReleaseDescription?: string | null;
  /** 是否生效 */
  Active?: boolean | null;
  /** 格式 */
  Format?: string | null;
}

/** 配置发布删除 */
declare interface ConfigFileReleaseDeletion {
  /** 命名空间 */
  Namespace?: string | null;
  /** 配置分组 */
  Group?: string | null;
  /** 文件名称 */
  FileName?: string | null;
  /** 发布版本 */
  ReleaseVersion?: string | null;
}

/** 配置文件发布历史 */
declare interface ConfigFileReleaseHistory {
  /** 配置文件发布历史记录id */
  Id?: number | null;
  /** 配置文件发布历史名称 */
  Name?: string | null;
  /** 配置文件发布历史命名空间 */
  Namespace?: string | null;
  /** 配置文件发布历史组 */
  Group?: string | null;
  /** 配置文件发布历史名称 */
  FileName?: string | null;
  /** 配置文件发布历史内容 */
  Content?: string | null;
  /** 配置文件发布历史格式 */
  Format?: string | null;
  /** 配置文件发布历史注释 */
  Comment?: string | null;
  /** 配置文件发布历史Md5 */
  Md5?: string | null;
  /** 配置文件发布历史类型 */
  Type?: string | null;
  /** 配置文件发布历史状态 */
  Status?: string | null;
  /** 配置文件发布历史标签组 */
  Tags?: ConfigFileTag[] | null;
  /** 配置文件发布创建时间 */
  CreateTime?: string | null;
  /** 配置文件发布创建者 */
  CreateBy?: string | null;
  /** 配置文件发布修改时间 */
  ModifyTime?: string | null;
  /** 配置文件发布修改者 */
  ModifyBy?: string | null;
  /** 发布描述 */
  ReleaseDescription?: string | null;
  /** 原因，用于失败时原因展示 */
  ReleaseReason?: string | null;
}

/** 配置文件标签 */
declare interface ConfigFileTag {
  /** key-value 键 */
  Key?: string | null;
  /** key-value 值 */
  Value?: string | null;
}

/** 配置文件模板 */
declare interface ConfigFileTemplate {
  /** 配置文件模板id */
  Id?: number | null;
  /** 配置文件模板名称 */
  Name?: string | null;
  /** 配置文件模板内容 */
  Content?: string | null;
  /** 配置文件模板格式 */
  Format?: string | null;
  /** 配置文件模板注释 */
  Comment?: string | null;
  /** 配置文件模板创建时间 */
  CreateTime?: string | null;
  /** 配置文件模板创建者 */
  CreateBy?: string | null;
  /** 配置文件模板修改时间 */
  ModifyTime?: string | null;
  /** 配置文件模板修改者 */
  ModifyBy?: string | null;
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

/** 创建云原生网关服务结果 */
declare interface CreateGatewayServiceResult {
  /** 网关服务ID */
  ServiceId?: string | null;
}

/** 创建kong客户端公网结果 */
declare interface CreatePublicNetworkResult {
  /** 网关实例ID */
  GatewayId?: string | null;
  /** 分组ID */
  GroupId?: string | null;
  /** 客户端公网网络ID */
  NetworkId?: string | null;
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

/** 获取云原生API网关实例网络配置结果。 */
declare interface DescribeCloudNativeAPIGatewayConfigResult {
  /** 网关实例ID。 */
  GatewayId?: string;
  /** 分组网络配置列表。 */
  ConfigList?: CloudNativeAPIGatewayConfig[];
  /** 分组子网信息 */
  GroupSubnetId?: string | null;
  /** 分组VPC信息 */
  GroupVpcId?: string | null;
  /** 分组ID */
  GroupId?: string | null;
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
  EngineRegion?: string | null;
  /** 引擎在该地域的副本数 */
  Replica?: number | null;
  /** 引擎在该地域的规格id */
  SpecId?: string | null;
  /** 客户端内网的网络信息 */
  IntranetVpcInfos?: VpcInfo[] | null;
  /** 控制台内网的网络信息 */
  ConsoleIntranetVpcInfos?: VpcInfo[] | null;
  /** 是否开公网 */
  EnableClientInternet?: boolean | null;
  /** 限流客户端内网的网络信息 */
  LimiterIntranetVpcInfos?: VpcInfo[] | null;
  /** 是否为主地域，仅在服务治理中心多地域有效 */
  MainRegion?: boolean | null;
  /** 该地域所在的EKS集群 */
  EKSClusterID?: string | null;
}

/** 获取云原生api网关公网地址信息响应结果 */
declare interface DescribePublicAddressConfigResult {
  /** 网关实例id */
  GatewayId?: string | null;
  /** 公网地址信息 */
  ConfigList?: PublicAddressConfig[] | null;
  /** 总个数 */
  TotalCount?: number | null;
}

/** 查询客户端公网信息 */
declare interface DescribePublicNetworkResult {
  /** 网关实例ID */
  GatewayId?: string | null;
  /** 网关分组ID */
  GroupId?: string | null;
  /** 客户端公网信息 */
  PublicNetwork?: CloudNativeAPIGatewayConfig | null;
}

/** 获取WAF保护域名列表 */
declare interface DescribeWafDomainsResult {
  /** WAF防护域名列表 */
  Domains?: string[] | null;
}

/** 获取WAF保护资源状态 */
declare interface DescribeWafProtectionResult {
  /** 全局防护状态 */
  GlobalStatus?: string | null;
  /** 服务防护状态 */
  ServicesStatus?: ServiceWafStatus[] | null;
  /** 路由防护状态 */
  RouteStatus?: RouteWafStatus[] | null;
  /** 对象防护状态 */
  ObjectStatus?: string | null;
}

/** 引擎的初始管理账号，当前仅支持Apollo引擎 */
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
  EngineRegion: string;
  /** 此地域节点分配数量 */
  Replica: number;
  /** 集群网络信息 */
  VpcInfos: VpcInfo[];
  /** Polaris: 是否为主地域Zookeeper: 是否为Leader固定地域 */
  MainRegion?: boolean;
  /** 引擎规格ID */
  SpecId?: string;
}

/** 多环境网络信息 */
declare interface EnvAddressInfo {
  /** 环境名 */
  EnvName?: string;
  /** 是否开启config公网 */
  EnableConfigInternet?: boolean;
  /** config公网ip */
  ConfigInternetServiceIp?: string;
  /** config内网访问地址 */
  ConfigIntranetAddress?: string | null;
  /** 是否开启config内网clb */
  EnableConfigIntranet?: boolean | null;
  /** 客户端公网带宽 */
  InternetBandWidth?: number | null;
  /** 客户端公网CLB多可用区信息 */
  CLBMultiRegion?: CLBMultiRegion | null;
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

/** 服务别名结构信息 */
declare interface GovernanceAlias {
  /** 服务别名 */
  Alias?: string;
  /** 服务别名命名空间 */
  AliasNamespace?: string;
  /** 服务别名指向的服务名 */
  Service?: string;
  /** 服务别名指向的服务命名空间 */
  Namespace?: string;
  /** 服务别名的描述信息 */
  Comment?: string | null;
  /** 服务别名创建时间 */
  CreateTime?: string | null;
  /** 服务别名修改时间 */
  ModifyTime?: string | null;
  /** 服务别名ID */
  Id?: string | null;
  /** 该服务别名是否可以编辑 */
  Editable?: boolean | null;
}

/** 治理中心实例信息。 */
declare interface GovernanceInstance {
  /** 实例id。 */
  Id?: string;
  /** 实例所在服务名。 */
  Service?: string;
  /** 实例所在命名空间名。 */
  Namespace?: string;
  /** 实例ip地址。 */
  Host?: string | null;
  /** 实例端口信息。 */
  Port?: number | null;
  /** 通信协议。 */
  Protocol?: string | null;
  /** 版本信息。 */
  Version?: string | null;
  /** 负载均衡权重。 */
  Weight?: number | null;
  /** 是否开启健康检查。 */
  EnableHealthCheck?: boolean | null;
  /** 实例是否健康。 */
  Healthy?: boolean | null;
  /** 实例是否隔离。 */
  Isolate?: boolean | null;
  /** 实例创建时间。 */
  CreateTime?: string | null;
  /** 实例修改时间。 */
  ModifyTime?: string | null;
  /** 元数据数组。 */
  Metadatas?: Metadata[] | null;
  /** 上报心跳间隔。 */
  Ttl?: number | null;
  /** 版本信息。 */
  InstanceVersion?: string | null;
  /** 状态信息 */
  HealthStatus?: string | null;
  /** 描述 */
  Comment?: string | null;
}

/** 实例信息 */
declare interface GovernanceInstanceInput {
  /** 实例所在服务名。 */
  Service: string;
  /** 实例服务所在命名空间。 */
  Namespace: string;
  /** 实例负载均衡权重信息。不填默认为100。 */
  Weight?: number;
  /** 实例默认健康信息。不填默认为健康。 */
  Healthy?: boolean;
  /** 实例隔离信息。不填默认为非隔离。 */
  Isolate?: boolean;
  /** 实例ip。 */
  Host?: string;
  /** 实例监听端口。 */
  Port?: number;
  /** 实例使用协议。不填默认为空。 */
  Protocol?: string;
  /** 实例版本。不填默认为空。 */
  InstanceVersion?: string;
  /** 是否启用健康检查。不填默认不启用。 */
  EnableHealthCheck?: boolean;
  /** 上报心跳时间间隔。若 EnableHealthCheck 为不启用，则此参数不生效；若 EnableHealthCheck 启用，此参数不填，则默认 ttl 为 5s。 */
  Ttl?: number;
}

/** 实例信息 */
declare interface GovernanceInstanceUpdate {
  /** 实例所在服务名。 */
  Service: string;
  /** 实例服务所在命名空间。 */
  Namespace: string;
  /** 实例负载均衡权重信息。不填默认为100。 */
  Weight?: number;
  /** 实例默认健康信息。不填默认为健康。 */
  Healthy?: boolean;
  /** 实例隔离信息。不填默认为非隔离。 */
  Isolate?: boolean;
  /** 实例ip。 */
  Host?: string;
  /** 实例监听端口。 */
  Port?: number;
  /** 实例使用协议。不填默认为空。 */
  Protocol?: string;
  /** 实例版本。不填默认为空。 */
  InstanceVersion?: string;
  /** 是否启用健康检查。不填默认不启用。 */
  EnableHealthCheck?: boolean;
  /** 上报心跳时间间隔。若 EnableHealthCheck 为不启用，则此参数不生效；若 EnableHealthCheck 启用，此参数不填，则默认 ttl 为 5s。 */
  Ttl?: number;
  /** 治理中心服务实例id。 */
  Id?: string;
  /** 元数据信息。 */
  Metadatas?: Metadata[];
}

/** 服务契约接口定义 */
declare interface GovernanceInterfaceDescription {
  /** 契约接口ID */
  ID?: string | null;
  /** 方法名称 */
  Method?: string | null;
  /** 路径/接口名称 */
  Path?: string | null;
  /** 内容 */
  Content?: string | null;
  /** 创建来源 */
  Source?: string | null;
  /** 信息摘要 */
  Revision?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 接口名称 */
  Name?: string | null;
}

/** 治理中心命名空间 */
declare interface GovernanceNamespace {
  /** 命名空间名称。 */
  Name?: string | null;
  /** 命名空间描述信息。 */
  Comment?: string | null;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 修改时间。 */
  ModifyTime?: string | null;
  /** 命名空间下总服务数据量 */
  TotalServiceCount?: number | null;
  /** 命名空间下总健康实例数量 */
  TotalHealthInstanceCount?: number | null;
  /** 命名空间下总实例数量 */
  TotalInstanceCount?: number | null;
  /** 命名空间ID */
  Id?: string | null;
  /** 是否可以编辑 */
  Editable?: boolean | null;
  /** 可以操作此命名空间的用户ID列表 */
  UserIds?: string[] | null;
  /** 可以操作此命名空间的用户组ID列表 */
  GroupIds?: string[] | null;
  /** 移除可以操作此命名空间的用户ID列表 */
  RemoveUserIds?: string[] | null;
  /** 移除可以操作此命名空间的用户组ID列表 */
  RemoveGroupIds?: string[] | null;
}

/** 治理中心命名空间输入参数 */
declare interface GovernanceNamespaceInput {
  /** 命名空间名。 */
  Name: string;
  /** 描述信息。 */
  Comment?: string;
  /** 新增的可以操作此命名空间的用户ID列表 */
  UserIds?: string[];
  /** 新增的可以操作此命名空间的用户组ID列表 */
  GroupIds?: string[];
  /** 移除可以操作此命名空间的用户ID列表 */
  RemoveUserIds?: string[];
  /** 移除可以操作此命名空间的用户组ID列表 */
  RemoveGroupIds?: string[];
}

/** 治理中心服务信息。 */
declare interface GovernanceService {
  /** 服务名称。 */
  Name?: string;
  /** 命名空间名称。 */
  Namespace?: string;
  /** 元数据信息数组。 */
  Metadatas?: Metadata[] | null;
  /** 描述信息。 */
  Comment?: string | null;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 修改时间。 */
  ModifyTime?: string | null;
  /** 服务所属部门。 */
  Department?: string | null;
  /** 服务所属业务。 */
  Business?: string | null;
  /** 健康服务实例数 */
  HealthyInstanceCount?: number | null;
  /** 服务实例总数 */
  TotalInstanceCount?: number | null;
  /** 服务ID */
  Id?: string | null;
  /** 是否可以编辑 */
  Editable?: boolean | null;
  /** 可以编辑该资源的用户ID */
  UserIds?: string[] | null;
  /** 可以编辑该资源的用户组ID */
  GroupIds?: string[] | null;
  /** 移除可以编辑该资源的用户ID */
  RemoveUserIds?: string[] | null;
  /** 移除可以编辑该资源的用户组ID */
  RemoveGroupIds?: string[] | null;
  /** 该服务对哪些命名空间可见 */
  ExportTo?: string[] | null;
  /** 该服务信息摘要签名 */
  Revision?: string | null;
}

/** 服务契约定义 */
declare interface GovernanceServiceContract {
  /** 契约名称 */
  Name: string | null;
  /** 所属服务命名空间 */
  Namespace: string | null;
  /** 协议 */
  Protocol: string | null;
  /** 契约ID */
  ID?: string | null;
  /** 所属服务名称 */
  Service?: string | null;
  /** 版本 */
  Version?: string | null;
  /** 信息摘要 */
  Revision?: string | null;
  /** 额外内容描述 */
  Content?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 修改时间 */
  ModifyTime?: string | null;
  /** 契约接口列表 */
  Interfaces?: GovernanceInterfaceDescription[] | null;
}

/** 服务契约版本信息 */
declare interface GovernanceServiceContractVersion {
  /** 契约版本 */
  Version?: string | null;
  /** 契约名称 */
  Name?: string | null;
  /** 唯一名称 */
  Key?: string | null;
}

/** 治理中心服务入参 */
declare interface GovernanceServiceInput {
  /** 服务名。 */
  Name: string;
  /** 服务所属命名空间。 */
  Namespace: string;
  /** 服务描述信息。 */
  Comment?: string;
  /** 服务元数据。 */
  Metadatas?: Metadata[];
  /** 服务所属部门。 */
  Department?: string;
  /** 服务所属业务。 */
  Business?: string;
  /** 被添加进来可以操作此命名空间的用户ID列表 */
  UserIds?: string[];
  /** 被添加进来可以操作此命名空间的用户组ID列表 */
  GroupIds?: string[];
  /** 从操作此命名空间的用户组ID列表被移除的ID列表 */
  RemoveUserIds?: string[];
  /** 从可以操作此命名空间的用户组ID列表中被移除的ID列表 */
  RemoveGroupIds?: string[];
  /** 该服务对哪些命名空间可见 */
  ExportTo?: string[];
}

/** 实例监听端口信息 */
declare interface InstancePort {
  /** 监听的 http 端口范围。 */
  HttpPort?: string | null;
  /** 监听的 https 端口范围。 */
  HttpsPort?: string | null;
  /** 监听的 tcp 端口范围。 */
  TcpPort?: string | null;
  /** 监听的 udp 端口范围。 */
  UdpPort?: string | null;
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
  /** 负载均衡的规格类型，支持clb.c2.medium、clb.c3.small、clb.c3.medium、clb.c4.small、clb.c4.medium、clb.c4.large、clb.c4.xlarge，不传为共享型。 */
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

/** Key/Value结构 */
declare interface KeyValue {
  /** 条件的Key */
  Key?: string | null;
  /** 条件的Value */
  Value?: string | null;
}

/** Kong网关主动健康检查配置 */
declare interface KongActiveHealthCheck {
  /** 主动健康检查健康探测间隔，单位：秒，0表示不开启 */
  HealthyInterval?: number | null;
  /** 主动健康检查异常探测间隔，单位：秒，0表示不开启 */
  UnHealthyInterval?: number | null;
  /** 在 GET HTTP 请求中使用的路径，以作为主动运行状况检查的探测器运行。默认： ”/”。 */
  HttpPath?: string | null;
  /** GET HTTP 请求的超时时间，单位：秒。默认 60。 */
  Timeout?: number | null;
}

/** 云原生网关证书 */
declare interface KongCertificate {
  /** 无 */
  Cert?: KongCertificatesPreview | null;
}

/** kong证书列表 */
declare interface KongCertificatesList {
  /** 证书列表总数 */
  Total?: number | null;
  /** 无 */
  CertificatesList?: KongCertificatesPreview[] | null;
  /** 证书列表总页数 */
  Pages?: number | null;
}

/** 云原生网关证书预览信息 */
declare interface KongCertificatesPreview {
  /** 证书名称 */
  Name?: string | null;
  /** Id */
  Id: string | null;
  /** 绑定的域名 */
  BindDomains?: string[] | null;
  /** 证书状态：expired(已过期) active(生效中) */
  Status?: string | null;
  /** 证书pem格式 */
  Crt?: string | null;
  /** 证书私钥 */
  Key?: string | null;
  /** 证书过期时间 */
  ExpireTime?: string | null;
  /** 证书上传时间 */
  CreateTime?: string | null;
  /** 证书签发时间 */
  IssueTime?: string | null;
  /** 证书来源：native(kong自定义证书) ssl(ssl平台证书) */
  CertSource?: string | null;
  /** ssl平台证书Id */
  CertId?: string | null;
}

/** Kong网关被动健康检查配置 */
declare interface KongPassiveHealthCheck {
  /** 后端target协议类型，被动健康检查支持http和tcp，主动健康检查支持http */
  Type?: string | null;
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
  /** 请求路径 */
  Path?: string | null;
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
  /** CVM实例ID */
  CvmInstanceId?: string | null;
  /** CVM实例名称 */
  CvmInstanceName?: string | null;
  /** target标签 */
  Tags?: string[] | null;
}

/** 服务的后端配置 */
declare interface KongUpstreamInfo {
  /** IP或域名 */
  Host?: string | null;
  /** 端口 */
  Port?: number | null;
  /** 服务来源ID */
  SourceID?: string | null;
  /** 命名空间 */
  Namespace?: string | null;
  /** 服务（注册中心或Kubernetes中的服务）名字 */
  ServiceName?: string | null;
  /** 服务后端类型是IPList时提供 */
  Targets?: KongTarget[] | null;
  /** 服务来源类型 */
  SourceType?: string | null;
  /** SCF函数类型 */
  ScfType?: string | null;
  /** SCF函数命名空间 */
  ScfNamespace?: string | null;
  /** SCF函数名 */
  ScfLambdaName?: string | null;
  /** SCF函数版本 */
  ScfLambdaQualifier?: string | null;
  /** 冷启动时间，单位秒 */
  SlowStart?: number | null;
  /** 负载均衡算法，默认为 round-robin，还支持 least-connections，consisten_hashing */
  Algorithm?: string | null;
  /** CVM弹性伸缩组ID */
  AutoScalingGroupID?: string | null;
  /** CVM弹性伸缩组端口 */
  AutoScalingCvmPort?: number | null;
  /** CVM弹性伸缩组使用的CVM TAT命令状态 */
  AutoScalingTatCmdStatus?: string | null;
  /** CVM弹性伸缩组生命周期挂钩状态 */
  AutoScalingHookStatus?: string | null;
  /** 服务来源的名字 */
  SourceName?: string | null;
  /** 精确的服务来源类型，新建服务来源时候传入的类型 */
  RealSourceType?: string | null;
  /** upstream健康状态HEALTHY（健康）, UNHEALTHY（异常）, HEALTHCHECKS_OFF（未开启）和NONE（不支持健康检查） */
  HealthStatus?: string | null;
  /** 云函数是否开启CAM鉴权，不填时默认为开启(true) */
  ScfCamAuthEnable?: boolean | null;
  /** 云函数是否开启Base64编码，默认为false */
  ScfIsBase64Encoded?: boolean | null;
  /** 云函数是否开启响应集成，默认为false */
  ScfIsIntegratedResponse?: boolean | null;
}

/** kong后端upstream列表 */
declare interface KongUpstreamList {
  /** 无 */
  UpstreamList?: KongUpstreamPreview[] | null;
}

/** 云原生网关Upstream信息 */
declare interface KongUpstreamPreview {
  /** 服务ID */
  ID: string | null;
  /** 服务名字 */
  Name?: string | null;
  /** 后端配置 */
  Target?: KongTarget[] | null;
}

/** 参数限流的规则 */
declare interface LimitRule {
  /** 请求匹配条件 */
  Filters?: RuleFilter[] | null;
  /** 参数限流依据组合 */
  LimitBy?: KeyValue[] | null;
  /** 限流阈值 */
  QpsThresholds?: QpsThreshold[] | null;
  /** 精确限流阈值 */
  AccurateQpsThresholds?: AccurateQpsThreshold[] | null;
}

/** 获取云原生API网关实例列表响应结果。 */
declare interface ListCloudNativeAPIGatewayResult {
  /** 总数。 */
  TotalCount: number;
  /** 云原生API网关实例列表。 */
  GatewayList: DescribeCloudNativeAPIGatewayResult[];
}

/** 获取云原生API网关实例策略绑定网关分组列表响应结果。 */
declare interface ListCloudNativeAPIGatewayStrategyBindingGroupInfoResult {
  /** 数量 */
  TotalCount: number;
  /** 云原生API网关实例策略绑定网关分组列表 */
  GroupInfos: CloudNativeAPIGatewayStrategyBindingGroupInfo[];
}

/** 获取云原生API网关实例策略响应结果。 */
declare interface ListCloudNativeAPIGatewayStrategyResult {
  /** 总数。 */
  TotalCount: number;
  /** 云原生API网关实例策略列表。 */
  StrategyList: CloudNativeAPIGatewayStrategy[];
}

/** 列表过滤条件，模糊匹配 */
declare interface ListFilter {
  /** 过滤字段 */
  Key?: string | null;
  /** 过滤值 */
  Value?: string | null;
}

/** 新增Location字段，展示zone/region/campus */
declare interface Location {
  /** 大区 */
  Region?: string | null;
  /** 可用区 */
  Zone?: string | null;
  /** 机房 */
  Campus?: string | null;
}

/** 元数据信息 */
declare interface Metadata {
  /** 元数据键名。 */
  Key: string | null;
  /** 元数据键值。不填则默认为空字符串。 */
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
  /** 分组默认权重 */
  DefaultWeight?: number | null;
}

/** 网关分组列表 */
declare interface NativeGatewayServerGroups {
  /** 总数 */
  TotalCount: number;
  /** 分组信息数组。 */
  GatewayGroupList: NativeGatewayServerGroup[];
}

/** 网络访问策略 */
declare interface NetworkAccessControl {
  /** 访问模式：Whitelist|Blacklist */
  Mode: string;
  /** 白名单列表 */
  CidrWhiteList?: string[];
  /** 黑名单列表 */
  CidrBlackList?: string[];
}

/** 北极星日志主题信息 */
declare interface PolarisCLSTopicInfo {
  /** 日志集ID */
  LogSetId?: string | null;
  /** 日志集名称 */
  LogSetName?: string | null;
  /** 日志主题ID */
  TopicId?: string | null;
  /** 日志主题名称 */
  TopicName?: string | null;
}

/** 查询Limiter的接入地址 */
declare interface PolarisLimiterAddress {
  /** VPC接入IP列表 */
  IntranetAddress: string | null;
}

/** 公网地址信息 */
declare interface PublicAddressConfig {
  /** 公网 ip */
  Vip?: string | null;
  /** 公网最大带宽 */
  InternetMaxBandwidthOut?: number | null;
  /** 公网所属分组 id */
  GroupId?: string | null;
  /** 公网所属分组名 */
  GroupName?: string | null;
  /** 公网负载均衡 id */
  NetworkId?: string | null;
  /** 公网负载均衡描述 */
  Description?: string | null;
}

/** 云原生网关限流插件Qps阈值 */
declare interface QpsThreshold {
  /** qps阈值控制维度,包含:second、minute、hour、day、month、year */
  Unit: string;
  /** 阈值 */
  Max: number;
}

/** 配置发布版本信息 */
declare interface ReleaseVersion {
  /** 名称 */
  Name?: string | null;
  /** 是否生效 */
  Active?: boolean | null;
}

/** 路由 WAF 状态 */
declare interface RouteWafStatus {
  /** 路由的名字 */
  Name?: string | null;
  /** 路由的 ID */
  Id?: string | null;
  /** 路由是否开启 WAF 防护 */
  Status?: string | null;
  /** 方法 */
  Methods?: string[] | null;
  /** 路径 */
  Paths?: string[] | null;
  /** 域名 */
  Hosts?: string[] | null;
  /** 路由对应服务的名字 */
  ServiceName?: string | null;
  /** 路由对应服务的ID */
  ServiceId?: string | null;
}

/** 限流规则的Filter */
declare interface RuleFilter {
  /** 限流条件的Key */
  Key?: string | null;
  /** 限流条件的Values */
  Values?: string[] | null;
  /** 操作符 */
  Operator?: string | null;
  /** header或query对应的name */
  Name?: string | null;
}

/** 微服务注册引擎实例 */
declare interface SREInstance {
  /** 实例ID */
  InstanceId?: string;
  /** 名称 */
  Name?: string;
  /** 版本号 */
  Edition?: string;
  /** 状态, 枚举值:creating/create_fail/running/updating/update_fail/restarting/restart_fail/destroying/destroy_fail */
  Status?: string;
  /** 规格ID */
  SpecId?: string;
  /** 副本数 */
  Replica?: number;
  /** 类型 */
  Type?: string;
  /** Vpc iD */
  VpcId?: string;
  /** 子网ID */
  SubnetIds?: string[] | null;
  /** 是否开启持久化存储 */
  EnableStorage?: boolean | null;
  /** 数据存储方式 */
  StorageType?: string | null;
  /** 云硬盘容量 */
  StorageCapacity?: number | null;
  /** 计费方式 */
  Paymode?: string | null;
  /** EKS集群的ID */
  EKSClusterID?: string | null;
  /** 集群创建时间 */
  CreateTime?: string | null;
  /** 环境配置信息列表 */
  EnvInfos?: EnvInfo[] | null;
  /** 引擎所在的区域 */
  EngineRegion?: string | null;
  /** 注册引擎是否开启公网 */
  EnableInternet?: boolean | null;
  /** 私有网络列表信息 */
  VpcInfos?: VpcInfo[] | null;
  /** 服务治理相关信息列表 */
  ServiceGovernanceInfos?: ServiceGovernanceInfo[] | null;
  /** 实例的标签信息 */
  Tags?: KVPair[] | null;
  /** 引擎实例是否开启控制台公网访问地址 */
  EnableConsoleInternet?: boolean | null;
  /** 引擎实例是否开启控制台内网访问地址 */
  EnableConsoleIntranet?: boolean | null;
  /** 引擎实例是否展示参数配置页面 */
  ConfigInfoVisible?: boolean | null;
  /** 引擎实例控制台默认密码 */
  ConsoleDefaultPwd?: string | null;
  /** 交易付费类型，0后付费/1预付费 */
  TradeType?: number | null;
  /** 自动续费标记：0表示默认状态(用户未设置，即初始状态)， 1表示自动续费，2表示明确不自动续费 */
  AutoRenewFlag?: number | null;
  /** 预付费到期时间 */
  CurDeadline?: string | null;
  /** 隔离开始时间 */
  IsolateTime?: string | null;
  /** 实例地域相关的描述信息 */
  RegionInfos?: DescribeInstanceRegionInfo[] | null;
  /** 所在EKS环境，分为common和yunti */
  EKSType?: string | null;
  /** 引擎的产品版本 */
  FeatureVersion?: string | null;
  /** 引擎实例是否开启客户端内网访问地址 */
  EnableClientIntranet?: boolean | null;
  /** 存储额外配置选项 */
  StorageOption?: StorageOption[] | null;
  /** Zookeeper的额外环境数据信息 */
  ZookeeperRegionInfo?: ZookeeperRegionInfo | null;
  /** 部署架构 */
  DeployMode?: string | null;
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
  /** 引擎关联CLS日志主题信息 */
  CLSTopics?: PolarisCLSTopicInfo[] | null;
}

/** 服务的 WAF 状态 */
declare interface ServiceWafStatus {
  /** 服务的名字 */
  Name?: string | null;
  /** 服务的 ID */
  Id?: string | null;
  /** 服务的类型 */
  Type?: string | null;
  /** 服务是否开启 WAF 防护 */
  Status?: string | null;
}

/** 存储的额外选项 */
declare interface StorageOption {
  /** 存储对象，分为snap和txn两种 */
  Name?: string | null;
  /** 存储类型，分为三类CLOUD_PREMIUM/CLOUD_SSD/CLOUD_SSD_PLUS，分别对应高性能云硬盘、SSD云硬盘、增强型SSD云硬盘 */
  Type?: string | null;
  /** 存储容量，[50, 3200]的范围 */
  Capacity?: number | null;
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

/** 云原生网关健康检查配置 */
declare interface UpstreamHealthCheckConfig {
  /** 开启主动健康检查 */
  EnableActiveHealthCheck?: boolean | null;
  /** 主动健康检查配置 */
  ActiveHealthCheck?: KongActiveHealthCheck | null;
  /** 开启被动健康检查 */
  EnablePassiveHealthCheck?: boolean | null;
  /** 被动健康检查配置 */
  PassiveHealthCheck?: KongPassiveHealthCheck | null;
  /** 连续健康阈值，单位：次 */
  Successes?: number | null;
  /** 连续异常阈值，单位：次 */
  Failures?: number | null;
  /** 超时阈值，单位：次 */
  Timeouts?: number | null;
  /** 健康HTTP状态码 */
  HealthyHttpStatuses?: number[] | null;
  /** 异常HTTP状态码 */
  UnhealthyHttpStatuses?: number[] | null;
  /** 健康检查监控上报的数据屏蔽权重为0的节点 */
  IgnoreZeroWeightNodes?: boolean | null;
  /** 健康检查支持权重为0节点 */
  ZeroWeightHeathCheck?: boolean | null;
}

/** 私有网络信息 */
declare interface VpcInfo {
  /** Vpc Id */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 内网访问地址 */
  IntranetAddress?: string | null;
  /** 负载均衡均衡接入点子网ID */
  LbSubnetId?: string | null;
}

/** Zookeeper的地域额外信息记录 */
declare interface ZookeeperRegionInfo {
  /** 部署架构信息- SingleRegion: 普通单地域- MultiRegion: 普通多地域场景- MasterSlave: 两地域，主备地域场景 */
  DeployMode?: string | null;
  /** 主地域的额外信息 */
  MainRegion?: ZookeeperRegionMyIdInfo | null;
  /** 其他地域的额外信息 */
  OtherRegions?: ZookeeperRegionMyIdInfo[] | null;
}

/** Zookeeper的地域信息的 myid 信息记录 */
declare interface ZookeeperRegionMyIdInfo {
  /** 地域信息 */
  Region?: string | null;
  /** myid 的起始号段 */
  MyIdStart?: number | null;
  /** myid 的结束号段 */
  MyIdEnd?: number | null;
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

declare interface BindAutoScalerResourceStrategyToGroupsRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 策略ID */
  StrategyId: string;
  /** 网关分组ID列表 */
  GroupIds: string[];
}

declare interface BindAutoScalerResourceStrategyToGroupsResponse {
  /** 是否成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CloseWafProtectionRequest {
  /** 网关ID */
  GatewayId: string;
  /** 防护资源的类型。- Global 实例- Service 服务- Route 路由- Object 对象 */
  Type: string;
  /** 当资源类型 Type 是 Service 或 Route 的时候，传入的服务或路由的列表 */
  List?: string[];
}

declare interface CloseWafProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAutoScalerResourceStrategyRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 策略名称 */
  StrategyName: string;
  /** 策略描述 */
  Description?: string;
  /** 指标伸缩配置 */
  Config?: CloudNativeAPIGatewayStrategyAutoScalerConfig;
  /** 定时伸缩配置列表 */
  CronScalerConfig?: CloudNativeAPIGatewayStrategyCronScalerConfig;
  /** 最大节点数 */
  MaxReplicas?: number;
  /** 定时伸缩配置 */
  CronConfig?: CloudNativeAPIGatewayStrategyCronScalerConfig;
}

declare interface CreateAutoScalerResourceStrategyResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 策略Id */
  StrategyId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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

declare interface CreateCloudNativeAPIGatewayCertificateRequest {
  /** 网关ID */
  GatewayId: string;
  /** 绑定的域名 */
  BindDomains: string[];
  /** ssl平台证书 Id */
  CertId: string;
  /** 证书名称 */
  Name?: string;
  /** 证书私钥 */
  Key?: string;
  /** 证书pem格式 */
  Crt?: string;
}

declare interface CreateCloudNativeAPIGatewayCertificateResponse {
  /** 创建证书结果 */
  Result?: CertificateInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCloudNativeAPIGatewayPublicNetworkRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 分组id。 */
  GroupId?: string;
  /** 公网负载均衡配置。 */
  InternetConfig?: InternetConfig;
}

declare interface CreateCloudNativeAPIGatewayPublicNetworkResponse {
  /** 返回结果 */
  Result?: CreatePublicNetworkResult | null;
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
  /** 关联的prometheus ID */
  PromId?: string;
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
  /** 超时时间，单位ms */
  Timeout: number;
  /** 重试次数 */
  Retries: number;
  /** 服务类型: - Kubernetes - Registry- IPList- HostIP- Scf */
  UpstreamType: string;
  /** 服务配置信息 */
  UpstreamInfo: KongUpstreamInfo;
  /** 请求路径 */
  Path?: string;
}

declare interface CreateCloudNativeAPIGatewayServiceResponse {
  /** 网关服务创建结果 */
  Result?: CreateGatewayServiceResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigFileGroupRequest {
  /** tse 实例 id */
  InstanceId: string;
  /** 配置文件组实体 */
  ConfigFileGroup: ConfigFileGroup;
}

declare interface CreateConfigFileGroupResponse {
  /** 是否创建成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigFileRequest {
  /** TSE 实例id */
  InstanceId: string;
  /** 配置文件列表详情 */
  ConfigFile: ConfigFile;
}

declare interface CreateConfigFileResponse {
  /** 是否创建成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEngineRequest {
  /** 引擎类型。参考值：- zookeeper- nacos- consul- apollo- eureka- polaris */
  EngineType: string;
  /** 引擎的开源版本。每种引擎支持的开源版本不同，请参考产品文档或者控制台购买页 */
  EngineVersion: string;
  /** 引擎的产品版本。参考值：- STANDARD： 标准版- PROFESSIONAL: 专业版（Zookeeper）/企业版（PolarisMesh）引擎各版本及可选择的规格、节点数说明：apollo - STANDARD版本规格列表：1C2G、2C4G、4C8G、8C16G、16C32G节点数：1，2，3，4，5eureka - STANDARD版本规格列表：1C2G、2C4G、4C8G、8C16G、16C32G节点数：3，4，5polarismesh - STANDARD版本规格列表：NUM50、NUM100、NUM200、NUM500、NUM1000、NUM5000、NUM10000、NUM50000兼容原spec-xxxxxx形式的规格ID */
  EngineProductVersion: string;
  /** 引擎所在地域。参考值说明：中国区 参考值：- ap-guangzhou：广州- ap-beijing：北京- ap-chengdu：成都- ap-chongqing：重庆- ap-nanjing：南京- ap-shanghai：上海- ap-hongkong：香港- ap-taipei：台北亚太区 参考值：- ap-jakarta：雅加达- ap-singapore：新加坡北美区 参考值- na-siliconvalley：硅谷- na-ashburn: 弗吉尼亚金融专区 参考值- ap-beijing-fsi：北京金融- ap-shanghai-fsi：上海金融- ap-shenzhen-fsi：深圳金融 */
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
  /** 引擎的初始账号信息。可设置参数：- Name：控制台初始用户名- Password：控制台初始密码- Token：引擎接口的管理员 Token */
  EngineAdmin?: EngineAdmin;
  /** 预付费时长，以月为单位 */
  PrepaidPeriod?: number;
  /** 自动续费标记，仅预付费使用。参考值：- 0：不自动续费- 1：自动续费 */
  PrepaidRenewFlag?: number;
  /** 跨地域部署的引擎地域配置详情zk标准版没有跨地域部署，请不要填写zk专业版跨地域部署开启了固定Leader所在地域，需要满足以下条件- 固定Leader所在地域当前仅支持跨两个地域- leader地域的副本数必须是3/2 + 1，5/2+1，7/2+1，也就是 2，3，4 */
  EngineRegionInfos?: EngineRegionInfo[];
  /** zk标准版请填CLOUD_PREMIUM，zk标准版无法选择磁盘类型和磁盘容量，默认为CLOUD_PREMIUMzk专业版可以为：CLOUD_SSD,CLOUD_SSD_PLUS,CLOUD_PREMIUM */
  StorageType?: string;
  /** zk标准版请填50，zk标准版无法选择磁盘类型和磁盘容量，磁盘容量默认为50 */
  StorageCapacity?: number;
  /** zk专业版至多有两个盘，且磁盘的容量在50-3200之间如果只有一个磁盘，storageCapacity与storageOption里面的capacity应该一致 */
  StorageOption?: StorageOption[];
  /** ZK引擎实例，可用区分布约束，STRICT:强约束，PERMISSIVE: 弱约束 */
  AffinityConstraint?: string;
}

declare interface CreateEngineResponse {
  /** 引擎实例 ID */
  InstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGovernanceAliasRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 服务别名 */
  Alias: string;
  /** 服务别名命名空间 */
  AliasNamespace: string;
  /** 服务别名所指向的服务名 */
  Service: string;
  /** 服务别名所指向的命名空间 */
  Namespace: string;
  /** 服务别名描述 */
  Comment?: string;
}

declare interface CreateGovernanceAliasResponse {
  /** 创建是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGovernanceInstancesRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 服务实例信息。 */
  GovernanceInstances: GovernanceInstanceInput[];
}

declare interface CreateGovernanceInstancesResponse {
  /** 创建是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGovernanceNamespacesRequest {
  /** tse 实例id。 */
  InstanceId: string;
  /** 命名空间信息。 */
  GovernanceNamespaces: GovernanceNamespaceInput[];
}

declare interface CreateGovernanceNamespacesResponse {
  /** 操作是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGovernanceServicesRequest {
  /** tse 实例 id。 */
  InstanceId: string;
  /** 服务信息。 */
  GovernanceServices: GovernanceServiceInput[];
}

declare interface CreateGovernanceServicesResponse {
  /** 创建是否成功。 */
  Result?: boolean;
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

declare interface CreateOrUpdateConfigFileAndReleaseRequest {
  /** 实例id */
  InstanceId: string;
  /** 配置文件列表详情 */
  ConfigFilePublishInfo: ConfigFilePublishInfo;
}

declare interface CreateOrUpdateConfigFileAndReleaseResponse {
  /** 操作是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateWafDomainsRequest {
  /** 网关ID */
  GatewayId: string;
  /** WAF 防护域名列表 */
  Domains: string[];
}

declare interface CreateWafDomainsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAutoScalerResourceStrategyRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 策略ID */
  StrategyId: string;
}

declare interface DeleteAutoScalerResourceStrategyResponse {
  /** 是否成功 */
  Result: boolean;
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

declare interface DeleteCloudNativeAPIGatewayCertificateRequest {
  /** 网关ID */
  GatewayId: string;
  /** 证书Id */
  Id: string;
}

declare interface DeleteCloudNativeAPIGatewayCertificateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCloudNativeAPIGatewayPublicNetworkRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 分组id，kong类型时必填 */
  GroupId?: string;
  /** 公网类型- IPV4 （默认值）- IPV6 */
  InternetAddressVersion?: string;
  /** 公网ip，存在多个公网时必填 */
  Vip?: string;
}

declare interface DeleteCloudNativeAPIGatewayPublicNetworkResponse {
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

declare interface DeleteConfigFileGroupRequest {
  /** tse 实例 id。 */
  InstanceId: string;
  /** 命名空间 */
  Namespace: string;
  /** 组 */
  Group: string;
}

declare interface DeleteConfigFileGroupResponse {
  /** 是否删除成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConfigFileReleasesRequest {
  /** 实例id */
  InstanceId: string;
  /** 待删除配置发布详情 */
  ConfigFileReleases: ConfigFileReleaseDeletion[];
}

declare interface DeleteConfigFileReleasesResponse {
  /** 删除配置发布结果 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConfigFilesRequest {
  /** TSE实例id */
  InstanceId: string;
  /** 命名空间 */
  Namespace: string;
  /** 配置分组名称 */
  Group: string;
  /** 配置文件名称 */
  Name: string;
}

declare interface DeleteConfigFilesResponse {
  /** 修改是否成功 */
  Result?: boolean;
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

declare interface DeleteGovernanceAliasesRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 服务别名列表 */
  GovernanceAliases: GovernanceAlias[];
}

declare interface DeleteGovernanceAliasesResponse {
  /** 创建是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGovernanceInstancesByHostRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 要删除的服务实例信息。 */
  GovernanceInstances: GovernanceInstanceUpdate[];
}

declare interface DeleteGovernanceInstancesByHostResponse {
  /** 操作是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGovernanceInstancesRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 要删除的服务实例信息。 */
  GovernanceInstances: GovernanceInstanceUpdate[];
}

declare interface DeleteGovernanceInstancesResponse {
  /** 操作是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGovernanceNamespacesRequest {
  /** tse 实例 id。 */
  InstanceId: string;
  /** 命名空间信息。 */
  GovernanceNamespaces: GovernanceNamespaceInput[];
}

declare interface DeleteGovernanceNamespacesResponse {
  /** 删除是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGovernanceServicesRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 服务信息。 */
  GovernanceServices: GovernanceServiceInput[];
}

declare interface DeleteGovernanceServicesResponse {
  /** 删除服务结果。 */
  Result?: boolean;
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

declare interface DeleteWafDomainsRequest {
  /** 网关ID */
  GatewayId: string;
  /** WAF 防护域名列表 */
  Domains: string[];
}

declare interface DeleteWafDomainsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllConfigFileTemplatesRequest {
  /** TSE实例id */
  InstanceId: string;
}

declare interface DescribeAllConfigFileTemplatesResponse {
  /** 数据总数量 */
  TotalCount?: number;
  /** 配置文件模板列表 */
  ConfigFileTemplates?: ConfigFileTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScalerResourceStrategiesRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 策略ID */
  StrategyId?: string;
}

declare interface DescribeAutoScalerResourceStrategiesResponse {
  /** 获取云原生API网关实例弹性伸缩策略列表响应结果。 */
  Result?: ListCloudNativeAPIGatewayStrategyResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAutoScalerResourceStrategyBindingGroupsRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 策略ID */
  StrategyId: string;
  /** 查询偏移量 */
  Offset?: number;
  /** 查询数量限制 */
  Limit?: number;
}

declare interface DescribeAutoScalerResourceStrategyBindingGroupsResponse {
  /** 云原生API网关实例策略绑定网关分组列表响应结果 */
  Result?: ListCloudNativeAPIGatewayStrategyBindingGroupInfoResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayCanaryRulesRequest {
  /** 网关ID */
  GatewayId: string;
  /** 服务 ID */
  ServiceId: string;
  /** 灰度规则类别 Standard｜Lane */
  RuleType?: string;
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

declare interface DescribeCloudNativeAPIGatewayCertificateDetailsRequest {
  /** 网关ID */
  GatewayId: string;
  /** 证书Id */
  Id: string;
}

declare interface DescribeCloudNativeAPIGatewayCertificateDetailsResponse {
  /** 无 */
  Result?: KongCertificate | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayCertificatesRequest {
  /** 网关ID */
  GatewayId: string;
  /** 列表数量 */
  Limit?: number;
  /** 列表offset */
  Offset?: number;
  /** 过滤条件，多个过滤条件之间是与的关系，支持BindDomain ，Name */
  Filters?: ListFilter[];
}

declare interface DescribeCloudNativeAPIGatewayCertificatesResponse {
  /** 无 */
  Result?: KongCertificatesList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCloudNativeAPIGatewayConfigRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 分组id，不填时为默认分组 */
  GroupId?: string;
}

declare interface DescribeCloudNativeAPIGatewayConfigResponse {
  /** 获取云原生API网关响应结果。 */
  Result?: DescribeCloudNativeAPIGatewayConfigResult;
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

declare interface DescribeCloudNativeAPIGatewayUpstreamRequest {
  /** 网关ID */
  GatewayId: string;
  /** 服务名字 */
  ServiceName: string;
}

declare interface DescribeCloudNativeAPIGatewayUpstreamResponse {
  /** 无 */
  Result?: KongUpstreamList;
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

declare interface DescribeConfigFileGroupsRequest {
  /** tse实例id */
  InstanceId: string;
  /** 根据命名空间过滤 */
  Namespace?: string;
  /** 根据配置文件组名过滤 */
  Group?: string;
  /** 根据配置文件组名过滤 */
  FileName?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeConfigFileGroupsResponse {
  /** 列表总数量 */
  TotalCount?: number;
  /** 配置文件组列表 */
  ConfigFileGroups?: ConfigFileGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigFileReleaseHistoriesRequest {
  /** TSE实例id */
  InstanceId: string;
  /** 命名空间 */
  Namespace?: string;
  /** 组 */
  Group?: string;
  /** 名称 */
  Name?: string;
  /** 发布历史记录id，用于分页优化，一般指定 EndId，就不用指定 Offset，否则分页可能不连续 */
  EndId?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeConfigFileReleaseHistoriesResponse {
  /** 数据总数量 */
  TotalCount?: number;
  /** 配置文件发布历史列表 */
  ConfigFileReleaseHistories?: ConfigFileReleaseHistory[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigFileReleaseRequest {
  /** TSE实例id */
  InstanceId: string;
  /** 命名空间名称 */
  Namespace: string;
  /** 配置分组名称 */
  Group: string;
  /** 配置文件名称 */
  Name: string;
  /** 配置文件发布名称 */
  ReleaseName?: string;
}

declare interface DescribeConfigFileReleaseResponse {
  /** 配置文件发布详情 */
  ConfigFileRelease?: ConfigFileRelease;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigFileReleaseVersionsRequest {
  /** 实例id */
  InstanceId: string;
  /** 命名空间 */
  Namespace?: string;
  /** 配置分组 */
  Group?: string;
  /** 文件名称 */
  FileName?: string;
}

declare interface DescribeConfigFileReleaseVersionsResponse {
  /** 版本信息 */
  ReleaseVersions?: ReleaseVersion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigFileReleasesRequest {
  /** 实例id */
  InstanceId: string;
  /** 条数 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 命名空间 */
  Namespace?: string;
  /** 配置分组 */
  Group?: string;
  /** 文件名称 */
  FileName?: string;
  /** 只保护处于使用状态 */
  OnlyUse?: boolean;
  /** 发布名称 */
  ReleaseName?: string;
  /** 排序字段，mtime/version/name，默认version */
  OrderField?: string;
  /** 排序，asc/desc，默认 desc */
  OrderDesc?: string;
}

declare interface DescribeConfigFileReleasesResponse {
  /** 总条数 */
  TotalCount?: number;
  /** 发布列表 */
  Releases?: ConfigFileRelease[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigFileRequest {
  /** TSE实例id */
  InstanceId: string;
  /** 命名空间 */
  Namespace: string;
  /** 组 */
  Group: string;
  /** 名称 */
  Name: string;
}

declare interface DescribeConfigFileResponse {
  /** 配置文件 */
  ConfigFile?: ConfigFile | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigFilesByGroupRequest {
  /** TSE实例id */
  InstanceId: string;
  /** 命名空间名 */
  Namespace: string;
  /** 组名 */
  Group: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeConfigFilesByGroupResponse {
  /** 记录总数量 */
  TotalCount?: number;
  /** 配置文件列表 */
  ConfigFiles?: ConfigFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigFilesRequest {
  /** 命名空间名称 */
  Namespace: string;
  /** TSE实例id */
  InstanceId?: string;
  /** 组名 */
  Group?: string;
  /** 名称 */
  Name?: string;
  /** 标签列表 */
  Tags?: ConfigFileTag[];
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeConfigFilesResponse {
  /** 分页总数量 */
  TotalCount?: number;
  /** 配置文件列表 */
  ConfigFiles?: ConfigFile[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGovernanceAliasesRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 服务别名所指向的服务名。 */
  Service?: string;
  /** 服务别名所指向的命名空间名。 */
  Namespace?: string;
  /** 服务别名。 */
  Alias?: string;
  /** 服务别名命名空间。 */
  AliasNamespace?: string;
  /** 服务别名描述。 */
  Comment?: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeGovernanceAliasesResponse {
  /** 服务别名总数量。 */
  TotalCount?: number;
  /** 服务别名列表。 */
  Content?: GovernanceAlias[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGovernanceInstancesRequest {
  /** 实例所在的服务名。 */
  Service: string;
  /** 实例所在命名空间名。 */
  Namespace: string;
  /** tse实例id。 */
  InstanceId: string;
  /** 根据实例ip过滤，多个ip使用英文逗号分隔。 */
  Host?: string;
  /** 根据实例版本过滤。 */
  InstanceVersion?: string;
  /** 根据实例协议过滤。 */
  Protocol?: string;
  /** 根据实例健康状态过滤。false：表示不健康，true：表示健康。 */
  HealthStatus?: boolean;
  /** 根据实例隔离状态过滤。false：表示非隔离，true：表示隔离中。 */
  Isolate?: boolean;
  /** 根据元数据信息过滤。目前只支持一组元数据键值，若传了多个键值对，只会以第一个过滤。 */
  Metadatas?: Metadata[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 地域 */
  Location?: Location;
}

declare interface DescribeGovernanceInstancesResponse {
  /** 服务实例总数量。 */
  TotalCount?: number;
  /** 服务里实例列表。 */
  Content?: GovernanceInstance[];
  /** 地域 */
  Location?: Location;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGovernanceNamespacesRequest {
  /** tse实例id */
  InstanceId: string;
  /** 根据命名空间名称过滤。 */
  Name?: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeGovernanceNamespacesResponse {
  /** 列表总数量。 */
  TotalCount?: number;
  /** 治理中心命名空间实例列表。 */
  Content?: GovernanceNamespace[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGovernanceServiceContractVersionsRequest {
  /** 引擎实例ID */
  InstanceId: string;
  /** 命名空间 */
  Namespace: string;
  /** 服务名 */
  Service?: string;
}

declare interface DescribeGovernanceServiceContractVersionsResponse {
  /** 服务契约版本列表 */
  GovernanceServiceContractVersions?: GovernanceServiceContractVersion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGovernanceServiceContractsRequest {
  /** 北极星引擎实例ID */
  InstanceId: string;
  /** 分页偏移量 */
  Offset?: number;
  /** 分页条数 */
  Limit?: number;
  /** 命名空间 */
  Namespace?: string;
  /** 服务名 */
  Service?: string;
  /** 契约名称 */
  Name?: string;
  /** 契约版本 */
  ContractVersion?: string;
  /** 契约协议 */
  Protocol?: string;
  /** 是否只展示基本信息 */
  Brief?: boolean;
}

declare interface DescribeGovernanceServiceContractsResponse {
  /** 总数 */
  TotalCount?: number;
  /** 返回条数 */
  Size?: number;
  /** 契约定义列表 */
  ServiceContracts?: GovernanceServiceContract[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGovernanceServicesRequest {
  /** 按照服务名过滤，精确匹配。 */
  Name?: string;
  /** 按照命名空间过滤，精确匹配。 */
  Namespace?: string;
  /** 使用元数据过滤，目前只支持一组元组数，若传了多条，只会使用第一条元数据过滤。 */
  Metadatas?: Metadata[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** tse 实例 id。 */
  InstanceId?: string;
  /** 服务所属部门。 */
  Department?: string;
  /** 服务所属业务。 */
  Business?: string;
  /** 服务中实例的ip，用来过滤服务。 */
  Host?: string;
  /** 是否只查询存在健康实例的服务 */
  OnlyExistHealthyInstance?: boolean;
}

declare interface DescribeGovernanceServicesResponse {
  /** 服务数总量。 */
  TotalCount?: number;
  /** 服务信息详情。 */
  Content?: GovernanceService[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceTagInfosRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribeInstanceTagInfosResponse {
  /** 实例ID */
  InstanceId?: string;
  /** 实例标签集合 */
  TagInfos?: InstanceTagInfo[];
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
  Replicas?: NacosReplica[];
  /** 副本个数 */
  TotalCount?: number | null;
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
  TotalCount?: number;
  /** 接口列表 */
  Content?: NacosServerInterface[];
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

declare interface DescribePublicAddressConfigRequest {
  /** 网关实例id */
  GatewayId: string;
  /** 查询该分组的公网信息，不传则查询实例所有的公网负载均衡信息 */
  GroupId?: string;
}

declare interface DescribePublicAddressConfigResponse {
  /** 公网地址信息 */
  Result?: DescribePublicAddressConfigResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicNetworkRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 网关分组ID */
  GroupId: string;
  /** 网络ID */
  NetworkId: string;
}

declare interface DescribePublicNetworkResponse {
  /** 获取云原生API网关公网详情响应结果。 */
  Result?: DescribePublicNetworkResult | null;
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
  IntranetAddress?: string;
  /** 公网访问地址 */
  InternetAddress?: string;
  /** apollo多环境公网ip */
  EnvAddressInfos?: EnvAddressInfo[];
  /** 控制台公网访问地址 */
  ConsoleInternetAddress?: string | null;
  /** 控制台内网访问地址 */
  ConsoleIntranetAddress?: string | null;
  /** 客户端公网带宽 */
  InternetBandWidth?: number | null;
  /** 控制台公网带宽 */
  ConsoleInternetBandWidth?: number | null;
  /** 北极星限流server节点接入IP */
  LimiterAddressInfos?: PolarisLimiterAddress[] | null;
  /** InternetAddress 的公网 CLB 多可用区信息 */
  CLBMultiRegion?: CLBMultiRegion | null;
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
  TotalCount?: number;
  /** 实例记录 */
  Content?: SREInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUpstreamHealthCheckConfigRequest {
  /** 网关ID */
  GatewayId: string;
  /** 网关服务名称 */
  Name: string;
}

declare interface DescribeUpstreamHealthCheckConfigResponse {
  /** 健康检查配置 */
  Result?: UpstreamHealthCheckConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWafDomainsRequest {
  /** 网关ID */
  GatewayId: string;
}

declare interface DescribeWafDomainsResponse {
  /** 已被 WAF 防护域名 */
  Result?: DescribeWafDomainsResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeWafProtectionRequest {
  /** 网关ID */
  GatewayId: string;
  /** 防护资源的类型。- Global 实例- Service 服务- Route 路由- Object 对象 */
  Type?: string;
  /** 防护资源类型列表，支持查询多个类型（Global、Service、Route、Object）。为空时，默认查询Global类型。 */
  TypeList?: string[];
}

declare interface DescribeWafProtectionResponse {
  /** 保护状态 */
  Result?: DescribeWafProtectionResult;
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
  Replicas?: ZookeeperReplica[];
  /** 副本个数 */
  TotalCount?: number | null;
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
  TotalCount?: number;
  /** 接口列表 */
  Content?: ZookeeperServerInterface[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAutoScalerResourceStrategyRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 策略ID */
  StrategyId: string;
  /** 策略名称 */
  StrategyName?: string;
  /** 策略描述 */
  Description?: string;
  /** 指标伸缩配置 */
  Config?: CloudNativeAPIGatewayStrategyAutoScalerConfig;
  /** 定时伸缩配置 */
  CronScalerConfig?: CloudNativeAPIGatewayStrategyCronScalerConfig;
  /** 最大节点数 */
  MaxReplicas?: number;
  /** 指标伸缩配置 */
  CronConfig?: CloudNativeAPIGatewayStrategyCronScalerConfig;
}

declare interface ModifyAutoScalerResourceStrategyResponse {
  /** 是否成功 */
  Result?: boolean;
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

declare interface ModifyCloudNativeAPIGatewayCertificateRequest {
  /** 网关ID */
  GatewayId: string;
  /** 证书id */
  Id: string;
  /** 证书名称，即将废弃 */
  Name?: string;
  /** 证书私钥，CertSource为native时必填。 */
  Key?: string;
  /** 证书pem格式，CertSource为native时必填。 */
  Crt?: string;
  /** 绑定的域名，即将废弃 */
  BindDomains?: string[];
  /** ssl平台证书 Id，CertSource为ssl时必填。 */
  CertId?: string;
  /** 证书来源- ssl (ssl平台证书)，默认值- native (kong自定义证书) */
  CertSource?: string;
}

declare interface ModifyCloudNativeAPIGatewayCertificateResponse {
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
  /** 请求路径 */
  Path?: string;
}

declare interface ModifyCloudNativeAPIGatewayServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConfigFileGroupRequest {
  /** tse实例id */
  InstanceId: string;
  /** 配置文件组 */
  ConfigFileGroup: ConfigFileGroup;
}

declare interface ModifyConfigFileGroupResponse {
  /** 修改是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConfigFilesRequest {
  /** ins-df344df5 */
  InstanceId: string;
  /** 配置文件列表 */
  ConfigFile: ConfigFile;
}

declare interface ModifyConfigFilesResponse {
  /** 修改是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyConsoleNetworkRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 网络类型：- Open 公网- Internal 内网（暂不支持） */
  NetworkType: string;
  /** 开启Konga网络，不填时默认为Open- Open，开启- Close，关闭 */
  Operate?: string;
  /** 访问控制策略 */
  AccessControl?: NetworkAccessControl;
}

declare interface ModifyConsoleNetworkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGovernanceAliasRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 服务别名 */
  Alias: string;
  /** 服务别名命名空间 */
  AliasNamespace: string;
  /** 服务别名所指向的服务名 */
  Service: string;
  /** 服务别名所指向的命名空间 */
  Namespace: string;
  /** 服务别名描述 */
  Comment?: string;
}

declare interface ModifyGovernanceAliasResponse {
  /** 创建是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGovernanceInstancesRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 服务实例信息。 */
  GovernanceInstances: GovernanceInstanceUpdate[];
}

declare interface ModifyGovernanceInstancesResponse {
  /** 修改是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGovernanceNamespacesRequest {
  /** tse实例id。 */
  InstanceId: string;
  /** 命名空间信息。 */
  GovernanceNamespaces: GovernanceNamespaceInput[];
}

declare interface ModifyGovernanceNamespacesResponse {
  /** 操作是否成功。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGovernanceServicesRequest {
  /** tse 实例 id。 */
  InstanceId: string;
  /** 服务信息。 */
  GovernanceServices: GovernanceServiceInput[];
}

declare interface ModifyGovernanceServicesResponse {
  /** 是否成功 */
  Result?: boolean;
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

declare interface ModifyNetworkAccessStrategyRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 分组id */
  GroupId: string;
  /** 网络类型： - Open 公网- Internal 内网	（暂不支持） */
  NetworkType: string;
  /** ip地址 */
  Vip: string;
  /** 访问控制策略 */
  AccessControl: NetworkAccessControl;
}

declare interface ModifyNetworkAccessStrategyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetworkBasicInfoRequest {
  /** 云原生API网关实例ID。 */
  GatewayId: string;
  /** 分组id */
  GroupId: string;
  /** 网络类型：- Open 公网ipv4- Open-IPv6 公网ipv6- Internal 内网 */
  NetworkType: string;
  /** ip地址 */
  Vip: string;
  /** 公网出流量带宽[1,2048]Mbps */
  InternetMaxBandwidthOut?: number;
  /** 负载均衡描述 */
  Description?: string;
}

declare interface ModifyNetworkBasicInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUpstreamNodeStatusRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 服务名称 */
  ServiceName: string;
  /** 访问IP地址或域名 */
  Host: string;
  /** 访问端口 */
  Port: number;
  /** HEALTHY或UNHEALTHY */
  Status: string;
}

declare interface ModifyUpstreamNodeStatusResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OpenWafProtectionRequest {
  /** 网关ID */
  GatewayId: string;
  /** 防护资源的类型。- Global 实例- Service 服务- Route 路由- Object 对象（接口暂不支持） */
  Type: string;
  /** 当资源类型 Type 是 Service 或 Route 的时候，传入的服务或路由的列表 */
  List?: string[];
}

declare interface OpenWafProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PublishConfigFilesRequest {
  /** TSE实例id */
  InstanceId: string;
  /** 配置文件发布 */
  ConfigFileReleases: ConfigFileRelease;
}

declare interface PublishConfigFilesResponse {
  /** 配置文件发布是否成功 */
  Result?: boolean;
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

declare interface RestartSREInstanceRequest {
  /** 微服务引擎实例Id */
  InstanceId: string;
  /** 重启的环境类型（PROD，DEV，UAT等） */
  EnvTypes?: string[];
  /** 指定需要重启的实例节点（当前仅支持zk单节点重启） */
  NodeName?: string;
}

declare interface RestartSREInstanceResponse {
  /** 任务ID */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackConfigFileReleasesRequest {
  /** TSE实例id */
  InstanceId: string;
  /** 回滚发布 */
  RollbackConfigFileReleases: ConfigFileRelease[];
}

declare interface RollbackConfigFileReleasesResponse {
  /** 回滚结果 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnbindAutoScalerResourceStrategyFromGroupsRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 策略ID */
  StrategyId: string;
  /** 网关分组ID列表 */
  GroupIds: string[];
}

declare interface UnbindAutoScalerResourceStrategyFromGroupsResponse {
  /** 是否成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateCloudNativeAPIGatewayCertificateInfoRequest {
  /** 网关ID */
  GatewayId: string;
  /** 证书id */
  Id: string;
  /** 绑定的域名列表 */
  BindDomains: string[];
  /** 证书名称 */
  Name?: string;
}

declare interface UpdateCloudNativeAPIGatewayCertificateInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
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

declare interface UpdateUpstreamHealthCheckConfigRequest {
  /** 网关ID */
  GatewayId: string;
  /** 网关服务名称 */
  Name: string;
  /** 健康检查配置 */
  HealthCheckConfig: UpstreamHealthCheckConfig;
}

declare interface UpdateUpstreamHealthCheckConfigResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateUpstreamTargetsRequest {
  /** 网关实例ID */
  GatewayId: string;
  /** 服务名称或ID */
  Name: string;
  /** 实例列表 */
  Targets?: KongTarget[];
}

declare interface UpdateUpstreamTargetsResponse {
  /** 是否更新成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tse 微服务引擎} */
declare interface Tse {
  (): Versions;
  /** 弹性伸缩策略批量绑定网关分组 {@link BindAutoScalerResourceStrategyToGroupsRequest} {@link BindAutoScalerResourceStrategyToGroupsResponse} */
  BindAutoScalerResourceStrategyToGroups(data: BindAutoScalerResourceStrategyToGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<BindAutoScalerResourceStrategyToGroupsResponse>;
  /** 关闭 WAF 防护 {@link CloseWafProtectionRequest} {@link CloseWafProtectionResponse} */
  CloseWafProtection(data: CloseWafProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<CloseWafProtectionResponse>;
  /** 创建弹性伸缩策略 {@link CreateAutoScalerResourceStrategyRequest} {@link CreateAutoScalerResourceStrategyResponse} */
  CreateAutoScalerResourceStrategy(data: CreateAutoScalerResourceStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAutoScalerResourceStrategyResponse>;
  /** 创建云原生API网关实例 {@link CreateCloudNativeAPIGatewayRequest} {@link CreateCloudNativeAPIGatewayResponse} */
  CreateCloudNativeAPIGateway(data: CreateCloudNativeAPIGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayResponse>;
  /** 创建云原生网关的灰度规则 {@link CreateCloudNativeAPIGatewayCanaryRuleRequest} {@link CreateCloudNativeAPIGatewayCanaryRuleResponse} */
  CreateCloudNativeAPIGatewayCanaryRule(data: CreateCloudNativeAPIGatewayCanaryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayCanaryRuleResponse>;
  /** 创建云原生网关证书 {@link CreateCloudNativeAPIGatewayCertificateRequest} {@link CreateCloudNativeAPIGatewayCertificateResponse} */
  CreateCloudNativeAPIGatewayCertificate(data: CreateCloudNativeAPIGatewayCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayCertificateResponse>;
  /** 创建公网网络配置 {@link CreateCloudNativeAPIGatewayPublicNetworkRequest} {@link CreateCloudNativeAPIGatewayPublicNetworkResponse} */
  CreateCloudNativeAPIGatewayPublicNetwork(data: CreateCloudNativeAPIGatewayPublicNetworkRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayPublicNetworkResponse>;
  /** 创建云原生网关路由 {@link CreateCloudNativeAPIGatewayRouteRequest} {@link CreateCloudNativeAPIGatewayRouteResponse} */
  CreateCloudNativeAPIGatewayRoute(data: CreateCloudNativeAPIGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayRouteResponse>;
  /** 创建云原生网关限流插件(路由) {@link CreateCloudNativeAPIGatewayRouteRateLimitRequest} {@link CreateCloudNativeAPIGatewayRouteRateLimitResponse} */
  CreateCloudNativeAPIGatewayRouteRateLimit(data: CreateCloudNativeAPIGatewayRouteRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayRouteRateLimitResponse>;
  /** 创建云原生网关服务 {@link CreateCloudNativeAPIGatewayServiceRequest} {@link CreateCloudNativeAPIGatewayServiceResponse} */
  CreateCloudNativeAPIGatewayService(data: CreateCloudNativeAPIGatewayServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayServiceResponse>;
  /** 创建云原生网关限流插件(服务) {@link CreateCloudNativeAPIGatewayServiceRateLimitRequest} {@link CreateCloudNativeAPIGatewayServiceRateLimitResponse} */
  CreateCloudNativeAPIGatewayServiceRateLimit(data: CreateCloudNativeAPIGatewayServiceRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCloudNativeAPIGatewayServiceRateLimitResponse>;
  /** 创建配置文件 {@link CreateConfigFileRequest} {@link CreateConfigFileResponse} */
  CreateConfigFile(data: CreateConfigFileRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigFileResponse>;
  /** 创建配置文件组 {@link CreateConfigFileGroupRequest} {@link CreateConfigFileGroupResponse} */
  CreateConfigFileGroup(data: CreateConfigFileGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigFileGroupResponse>;
  /** 创建引擎实例 {@link CreateEngineRequest} {@link CreateEngineResponse} */
  CreateEngine(data: CreateEngineRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEngineResponse>;
  /** 创建服务别名 {@link CreateGovernanceAliasRequest} {@link CreateGovernanceAliasResponse} */
  CreateGovernanceAlias(data: CreateGovernanceAliasRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGovernanceAliasResponse>;
  /** 创建服务实例 {@link CreateGovernanceInstancesRequest} {@link CreateGovernanceInstancesResponse} */
  CreateGovernanceInstances(data: CreateGovernanceInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGovernanceInstancesResponse>;
  /** 创建命名空间 {@link CreateGovernanceNamespacesRequest} {@link CreateGovernanceNamespacesResponse} */
  CreateGovernanceNamespaces(data: CreateGovernanceNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGovernanceNamespacesResponse>;
  /** 创建服务 {@link CreateGovernanceServicesRequest} {@link CreateGovernanceServicesResponse} */
  CreateGovernanceServices(data: CreateGovernanceServicesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGovernanceServicesResponse>;
  /** 创建云原生网关引擎分组 {@link CreateNativeGatewayServerGroupRequest} {@link CreateNativeGatewayServerGroupResponse} */
  CreateNativeGatewayServerGroup(data: CreateNativeGatewayServerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNativeGatewayServerGroupResponse>;
  /** 创建或更新配置文件并发布配置 {@link CreateOrUpdateConfigFileAndReleaseRequest} {@link CreateOrUpdateConfigFileAndReleaseResponse} */
  CreateOrUpdateConfigFileAndRelease(data: CreateOrUpdateConfigFileAndReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateOrUpdateConfigFileAndReleaseResponse>;
  /** 新建 WAF 防护域名 {@link CreateWafDomainsRequest} {@link CreateWafDomainsResponse} */
  CreateWafDomains(data: CreateWafDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateWafDomainsResponse>;
  /** 删除弹性伸缩策略 {@link DeleteAutoScalerResourceStrategyRequest} {@link DeleteAutoScalerResourceStrategyResponse} */
  DeleteAutoScalerResourceStrategy(data: DeleteAutoScalerResourceStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAutoScalerResourceStrategyResponse>;
  /** 删除云原生API网关实例 {@link DeleteCloudNativeAPIGatewayRequest} {@link DeleteCloudNativeAPIGatewayResponse} */
  DeleteCloudNativeAPIGateway(data: DeleteCloudNativeAPIGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayResponse>;
  /** 删除云原生网关的灰度规则 {@link DeleteCloudNativeAPIGatewayCanaryRuleRequest} {@link DeleteCloudNativeAPIGatewayCanaryRuleResponse} */
  DeleteCloudNativeAPIGatewayCanaryRule(data: DeleteCloudNativeAPIGatewayCanaryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayCanaryRuleResponse>;
  /** 删除云原生网关证书 {@link DeleteCloudNativeAPIGatewayCertificateRequest} {@link DeleteCloudNativeAPIGatewayCertificateResponse} */
  DeleteCloudNativeAPIGatewayCertificate(data: DeleteCloudNativeAPIGatewayCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayCertificateResponse>;
  /** 删除公网网络配置 {@link DeleteCloudNativeAPIGatewayPublicNetworkRequest} {@link DeleteCloudNativeAPIGatewayPublicNetworkResponse} */
  DeleteCloudNativeAPIGatewayPublicNetwork(data: DeleteCloudNativeAPIGatewayPublicNetworkRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayPublicNetworkResponse>;
  /** 删除云原生网关路由 {@link DeleteCloudNativeAPIGatewayRouteRequest} {@link DeleteCloudNativeAPIGatewayRouteResponse} */
  DeleteCloudNativeAPIGatewayRoute(data: DeleteCloudNativeAPIGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayRouteResponse>;
  /** 删除云原生网关的限流插件(路由) {@link DeleteCloudNativeAPIGatewayRouteRateLimitRequest} {@link DeleteCloudNativeAPIGatewayRouteRateLimitResponse} */
  DeleteCloudNativeAPIGatewayRouteRateLimit(data: DeleteCloudNativeAPIGatewayRouteRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayRouteRateLimitResponse>;
  /** 删除云原生网关服务 {@link DeleteCloudNativeAPIGatewayServiceRequest} {@link DeleteCloudNativeAPIGatewayServiceResponse} */
  DeleteCloudNativeAPIGatewayService(data: DeleteCloudNativeAPIGatewayServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayServiceResponse>;
  /** 删除云原生网关的限流插件(服务) {@link DeleteCloudNativeAPIGatewayServiceRateLimitRequest} {@link DeleteCloudNativeAPIGatewayServiceRateLimitResponse} */
  DeleteCloudNativeAPIGatewayServiceRateLimit(data: DeleteCloudNativeAPIGatewayServiceRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCloudNativeAPIGatewayServiceRateLimitResponse>;
  /** 批量删除配置文件组列表 {@link DeleteConfigFileGroupRequest} {@link DeleteConfigFileGroupResponse} */
  DeleteConfigFileGroup(data: DeleteConfigFileGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigFileGroupResponse>;
  /** 删除配置发布 {@link DeleteConfigFileReleasesRequest} {@link DeleteConfigFileReleasesResponse} */
  DeleteConfigFileReleases(data: DeleteConfigFileReleasesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigFileReleasesResponse>;
  /** 删除配置文件 {@link DeleteConfigFilesRequest} {@link DeleteConfigFilesResponse} */
  DeleteConfigFiles(data: DeleteConfigFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigFilesResponse>;
  /** 删除引擎实例 {@link DeleteEngineRequest} {@link DeleteEngineResponse} */
  DeleteEngine(data: DeleteEngineRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEngineResponse>;
  /** 删除服务别名 {@link DeleteGovernanceAliasesRequest} {@link DeleteGovernanceAliasesResponse} */
  DeleteGovernanceAliases(data: DeleteGovernanceAliasesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGovernanceAliasesResponse>;
  /** 删除服务实例 {@link DeleteGovernanceInstancesRequest} {@link DeleteGovernanceInstancesResponse} */
  DeleteGovernanceInstances(data: DeleteGovernanceInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGovernanceInstancesResponse>;
  /** 根据HOST删除服务实例 {@link DeleteGovernanceInstancesByHostRequest} {@link DeleteGovernanceInstancesByHostResponse} */
  DeleteGovernanceInstancesByHost(data: DeleteGovernanceInstancesByHostRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGovernanceInstancesByHostResponse>;
  /** 删除命名空间 {@link DeleteGovernanceNamespacesRequest} {@link DeleteGovernanceNamespacesResponse} */
  DeleteGovernanceNamespaces(data: DeleteGovernanceNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGovernanceNamespacesResponse>;
  /** 删除服务 {@link DeleteGovernanceServicesRequest} {@link DeleteGovernanceServicesResponse} */
  DeleteGovernanceServices(data: DeleteGovernanceServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGovernanceServicesResponse>;
  /** 删除网关实例分组 {@link DeleteNativeGatewayServerGroupRequest} {@link DeleteNativeGatewayServerGroupResponse} */
  DeleteNativeGatewayServerGroup(data: DeleteNativeGatewayServerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNativeGatewayServerGroupResponse>;
  /** 删除 WAF 防护域名 {@link DeleteWafDomainsRequest} {@link DeleteWafDomainsResponse} */
  DeleteWafDomains(data: DeleteWafDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteWafDomainsResponse>;
  /** 获取全量配置文件模板列表 {@link DescribeAllConfigFileTemplatesRequest} {@link DescribeAllConfigFileTemplatesResponse} */
  DescribeAllConfigFileTemplates(data: DescribeAllConfigFileTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllConfigFileTemplatesResponse>;
  /** 查看弹性伸缩策略列表 {@link DescribeAutoScalerResourceStrategiesRequest} {@link DescribeAutoScalerResourceStrategiesResponse} */
  DescribeAutoScalerResourceStrategies(data: DescribeAutoScalerResourceStrategiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScalerResourceStrategiesResponse>;
  /** 查看弹性伸缩策略绑定的网关分组 {@link DescribeAutoScalerResourceStrategyBindingGroupsRequest} {@link DescribeAutoScalerResourceStrategyBindingGroupsResponse} */
  DescribeAutoScalerResourceStrategyBindingGroups(data: DescribeAutoScalerResourceStrategyBindingGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAutoScalerResourceStrategyBindingGroupsResponse>;
  /** 获取云原生API网关实例信息 {@link DescribeCloudNativeAPIGatewayRequest} {@link DescribeCloudNativeAPIGatewayResponse} */
  DescribeCloudNativeAPIGateway(data: DescribeCloudNativeAPIGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayResponse>;
  /** 查询云原生网关灰度规则列表 {@link DescribeCloudNativeAPIGatewayCanaryRulesRequest} {@link DescribeCloudNativeAPIGatewayCanaryRulesResponse} */
  DescribeCloudNativeAPIGatewayCanaryRules(data: DescribeCloudNativeAPIGatewayCanaryRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayCanaryRulesResponse>;
  /** 查询云原生网关单个证书详情 {@link DescribeCloudNativeAPIGatewayCertificateDetailsRequest} {@link DescribeCloudNativeAPIGatewayCertificateDetailsResponse} */
  DescribeCloudNativeAPIGatewayCertificateDetails(data: DescribeCloudNativeAPIGatewayCertificateDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayCertificateDetailsResponse>;
  /** 查询云原生网关证书列表 {@link DescribeCloudNativeAPIGatewayCertificatesRequest} {@link DescribeCloudNativeAPIGatewayCertificatesResponse} */
  DescribeCloudNativeAPIGatewayCertificates(data: DescribeCloudNativeAPIGatewayCertificatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayCertificatesResponse>;
  /** 获取云原生API网关实例网络配置信息 {@link DescribeCloudNativeAPIGatewayConfigRequest} {@link DescribeCloudNativeAPIGatewayConfigResponse} */
  DescribeCloudNativeAPIGatewayConfig(data: DescribeCloudNativeAPIGatewayConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayConfigResponse>;
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
  /** 获取云原生网关服务详情下的Upstream列表 {@link DescribeCloudNativeAPIGatewayUpstreamRequest} {@link DescribeCloudNativeAPIGatewayUpstreamResponse} */
  DescribeCloudNativeAPIGatewayUpstream(data: DescribeCloudNativeAPIGatewayUpstreamRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewayUpstreamResponse>;
  /** 获取云原生网关实例列表 {@link DescribeCloudNativeAPIGatewaysRequest} {@link DescribeCloudNativeAPIGatewaysResponse} */
  DescribeCloudNativeAPIGateways(data?: DescribeCloudNativeAPIGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCloudNativeAPIGatewaysResponse>;
  /** 查询配置文件 {@link DescribeConfigFileRequest} {@link DescribeConfigFileResponse} */
  DescribeConfigFile(data: DescribeConfigFileRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigFileResponse>;
  /** 查询配置文件组 {@link DescribeConfigFileGroupsRequest} {@link DescribeConfigFileGroupsResponse} */
  DescribeConfigFileGroups(data: DescribeConfigFileGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigFileGroupsResponse>;
  /** 获取配置文件发布 {@link DescribeConfigFileReleaseRequest} {@link DescribeConfigFileReleaseResponse} */
  DescribeConfigFileRelease(data: DescribeConfigFileReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigFileReleaseResponse>;
  /** 获取配置文件发布历史列表 {@link DescribeConfigFileReleaseHistoriesRequest} {@link DescribeConfigFileReleaseHistoriesResponse} */
  DescribeConfigFileReleaseHistories(data: DescribeConfigFileReleaseHistoriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigFileReleaseHistoriesResponse>;
  /** 查询某个配置所有版本信息 {@link DescribeConfigFileReleaseVersionsRequest} {@link DescribeConfigFileReleaseVersionsResponse} */
  DescribeConfigFileReleaseVersions(data: DescribeConfigFileReleaseVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigFileReleaseVersionsResponse>;
  /** 查询配置版本列表 {@link DescribeConfigFileReleasesRequest} {@link DescribeConfigFileReleasesResponse} */
  DescribeConfigFileReleases(data: DescribeConfigFileReleasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigFileReleasesResponse>;
  /** 查询配置文件列表 {@link DescribeConfigFilesRequest} {@link DescribeConfigFilesResponse} */
  DescribeConfigFiles(data: DescribeConfigFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigFilesResponse>;
  /** 根据group查询配置文件列表 {@link DescribeConfigFilesByGroupRequest} {@link DescribeConfigFilesByGroupResponse} */
  DescribeConfigFilesByGroup(data: DescribeConfigFilesByGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigFilesByGroupResponse>;
  /** 查询服务别名列表 {@link DescribeGovernanceAliasesRequest} {@link DescribeGovernanceAliasesResponse} */
  DescribeGovernanceAliases(data: DescribeGovernanceAliasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGovernanceAliasesResponse>;
  /** 查询服务实例 {@link DescribeGovernanceInstancesRequest} {@link DescribeGovernanceInstancesResponse} */
  DescribeGovernanceInstances(data: DescribeGovernanceInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGovernanceInstancesResponse>;
  /** 查询命名空间列表 {@link DescribeGovernanceNamespacesRequest} {@link DescribeGovernanceNamespacesResponse} */
  DescribeGovernanceNamespaces(data: DescribeGovernanceNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGovernanceNamespacesResponse>;
  /** 查询服务下契约版本列表 {@link DescribeGovernanceServiceContractVersionsRequest} {@link DescribeGovernanceServiceContractVersionsResponse} */
  DescribeGovernanceServiceContractVersions(data: DescribeGovernanceServiceContractVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGovernanceServiceContractVersionsResponse>;
  /** 查询服务契约定义列表 {@link DescribeGovernanceServiceContractsRequest} {@link DescribeGovernanceServiceContractsResponse} */
  DescribeGovernanceServiceContracts(data: DescribeGovernanceServiceContractsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGovernanceServiceContractsResponse>;
  /** 查询服务列表 {@link DescribeGovernanceServicesRequest} {@link DescribeGovernanceServicesResponse} */
  DescribeGovernanceServices(data?: DescribeGovernanceServicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGovernanceServicesResponse>;
  /** 查看实例的标签信息 {@link DescribeInstanceTagInfosRequest} {@link DescribeInstanceTagInfosResponse} */
  DescribeInstanceTagInfos(data: DescribeInstanceTagInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceTagInfosResponse>;
  /** 查询Nacos类型引擎实例副本信息 {@link DescribeNacosReplicasRequest} {@link DescribeNacosReplicasResponse} */
  DescribeNacosReplicas(data: DescribeNacosReplicasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNacosReplicasResponse>;
  /** 查询nacos服务接口列表 {@link DescribeNacosServerInterfacesRequest} {@link DescribeNacosServerInterfacesResponse} */
  DescribeNacosServerInterfaces(data?: DescribeNacosServerInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNacosServerInterfacesResponse>;
  /** 查询云原生网关分组信息 {@link DescribeNativeGatewayServerGroupsRequest} {@link DescribeNativeGatewayServerGroupsResponse} */
  DescribeNativeGatewayServerGroups(data: DescribeNativeGatewayServerGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNativeGatewayServerGroupsResponse>;
  /** 获取云原生网关服务详情 {@link DescribeOneCloudNativeAPIGatewayServiceRequest} {@link DescribeOneCloudNativeAPIGatewayServiceResponse} */
  DescribeOneCloudNativeAPIGatewayService(data: DescribeOneCloudNativeAPIGatewayServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOneCloudNativeAPIGatewayServiceResponse>;
  /** 查询公网地址信息 {@link DescribePublicAddressConfigRequest} {@link DescribePublicAddressConfigResponse} */
  DescribePublicAddressConfig(data: DescribePublicAddressConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicAddressConfigResponse>;
  /** 查询云原生API网关实例公网详情 {@link DescribePublicNetworkRequest} {@link DescribePublicNetworkResponse} */
  DescribePublicNetwork(data: DescribePublicNetworkRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicNetworkResponse>;
  /** 查询引擎实例访问地址 {@link DescribeSREInstanceAccessAddressRequest} {@link DescribeSREInstanceAccessAddressResponse} */
  DescribeSREInstanceAccessAddress(data?: DescribeSREInstanceAccessAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSREInstanceAccessAddressResponse>;
  /** 查询引擎实例列表 {@link DescribeSREInstancesRequest} {@link DescribeSREInstancesResponse} */
  DescribeSREInstances(data?: DescribeSREInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSREInstancesResponse>;
  /** 获取网关服务健康检查配置 {@link DescribeUpstreamHealthCheckConfigRequest} {@link DescribeUpstreamHealthCheckConfigResponse} */
  DescribeUpstreamHealthCheckConfig(data: DescribeUpstreamHealthCheckConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUpstreamHealthCheckConfigResponse>;
  /** 获取 WAF 防护域名 {@link DescribeWafDomainsRequest} {@link DescribeWafDomainsResponse} */
  DescribeWafDomains(data: DescribeWafDomainsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafDomainsResponse>;
  /** 获取 WAF 防护状态 {@link DescribeWafProtectionRequest} {@link DescribeWafProtectionResponse} */
  DescribeWafProtection(data: DescribeWafProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeWafProtectionResponse>;
  /** 查询Zookeeper类型注册引擎实例副本信息 {@link DescribeZookeeperReplicasRequest} {@link DescribeZookeeperReplicasResponse} */
  DescribeZookeeperReplicas(data: DescribeZookeeperReplicasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZookeeperReplicasResponse>;
  /** 查询zookeeper服务接口列表 {@link DescribeZookeeperServerInterfacesRequest} {@link DescribeZookeeperServerInterfacesResponse} */
  DescribeZookeeperServerInterfaces(data?: DescribeZookeeperServerInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZookeeperServerInterfacesResponse>;
  /** 更新弹性伸缩策略 {@link ModifyAutoScalerResourceStrategyRequest} {@link ModifyAutoScalerResourceStrategyResponse} */
  ModifyAutoScalerResourceStrategy(data: ModifyAutoScalerResourceStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAutoScalerResourceStrategyResponse>;
  /** 修改云原生API网关实例基础信息 {@link ModifyCloudNativeAPIGatewayRequest} {@link ModifyCloudNativeAPIGatewayResponse} */
  ModifyCloudNativeAPIGateway(data: ModifyCloudNativeAPIGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayResponse>;
  /** 修改云原生网关的灰度规则 {@link ModifyCloudNativeAPIGatewayCanaryRuleRequest} {@link ModifyCloudNativeAPIGatewayCanaryRuleResponse} */
  ModifyCloudNativeAPIGatewayCanaryRule(data: ModifyCloudNativeAPIGatewayCanaryRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayCanaryRuleResponse>;
  /** 更新云原生网关证书 {@link ModifyCloudNativeAPIGatewayCertificateRequest} {@link ModifyCloudNativeAPIGatewayCertificateResponse} */
  ModifyCloudNativeAPIGatewayCertificate(data: ModifyCloudNativeAPIGatewayCertificateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayCertificateResponse>;
  /** 修改云原生网关路由 {@link ModifyCloudNativeAPIGatewayRouteRequest} {@link ModifyCloudNativeAPIGatewayRouteResponse} */
  ModifyCloudNativeAPIGatewayRoute(data: ModifyCloudNativeAPIGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayRouteResponse>;
  /** 修改云原生网关限流插件(路由) {@link ModifyCloudNativeAPIGatewayRouteRateLimitRequest} {@link ModifyCloudNativeAPIGatewayRouteRateLimitResponse} */
  ModifyCloudNativeAPIGatewayRouteRateLimit(data: ModifyCloudNativeAPIGatewayRouteRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayRouteRateLimitResponse>;
  /** 修改云原生网关服务 {@link ModifyCloudNativeAPIGatewayServiceRequest} {@link ModifyCloudNativeAPIGatewayServiceResponse} */
  ModifyCloudNativeAPIGatewayService(data: ModifyCloudNativeAPIGatewayServiceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayServiceResponse>;
  /** 修改云原生网关限流插件(服务) {@link ModifyCloudNativeAPIGatewayServiceRateLimitRequest} {@link ModifyCloudNativeAPIGatewayServiceRateLimitResponse} */
  ModifyCloudNativeAPIGatewayServiceRateLimit(data: ModifyCloudNativeAPIGatewayServiceRateLimitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCloudNativeAPIGatewayServiceRateLimitResponse>;
  /** 批量修改配置文件组 {@link ModifyConfigFileGroupRequest} {@link ModifyConfigFileGroupResponse} */
  ModifyConfigFileGroup(data: ModifyConfigFileGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConfigFileGroupResponse>;
  /** 修改配置文件 {@link ModifyConfigFilesRequest} {@link ModifyConfigFilesResponse} */
  ModifyConfigFiles(data: ModifyConfigFilesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConfigFilesResponse>;
  /** 修改云原生API网关实例Konga网络配置 {@link ModifyConsoleNetworkRequest} {@link ModifyConsoleNetworkResponse} */
  ModifyConsoleNetwork(data: ModifyConsoleNetworkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConsoleNetworkResponse>;
  /** 修改服务别名 {@link ModifyGovernanceAliasRequest} {@link ModifyGovernanceAliasResponse} */
  ModifyGovernanceAlias(data: ModifyGovernanceAliasRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGovernanceAliasResponse>;
  /** 修改服务实例 {@link ModifyGovernanceInstancesRequest} {@link ModifyGovernanceInstancesResponse} */
  ModifyGovernanceInstances(data: ModifyGovernanceInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGovernanceInstancesResponse>;
  /** 修改命名空间 {@link ModifyGovernanceNamespacesRequest} {@link ModifyGovernanceNamespacesResponse} */
  ModifyGovernanceNamespaces(data: ModifyGovernanceNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGovernanceNamespacesResponse>;
  /** 修改服务 {@link ModifyGovernanceServicesRequest} {@link ModifyGovernanceServicesResponse} */
  ModifyGovernanceServices(data: ModifyGovernanceServicesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGovernanceServicesResponse>;
  /** 修改云原生API网关实例分组基础信息 {@link ModifyNativeGatewayServerGroupRequest} {@link ModifyNativeGatewayServerGroupResponse} */
  ModifyNativeGatewayServerGroup(data: ModifyNativeGatewayServerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNativeGatewayServerGroupResponse>;
  /** 修改云原生API网关实例Kong访问策略 {@link ModifyNetworkAccessStrategyRequest} {@link ModifyNetworkAccessStrategyResponse} */
  ModifyNetworkAccessStrategy(data: ModifyNetworkAccessStrategyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkAccessStrategyResponse>;
  /** 修改云原生API网关实例网络基本信息 {@link ModifyNetworkBasicInfoRequest} {@link ModifyNetworkBasicInfoResponse} */
  ModifyNetworkBasicInfo(data: ModifyNetworkBasicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkBasicInfoResponse>;
  /** 修改云原生网关上游实例节点健康状态 {@link ModifyUpstreamNodeStatusRequest} {@link ModifyUpstreamNodeStatusResponse} */
  ModifyUpstreamNodeStatus(data: ModifyUpstreamNodeStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUpstreamNodeStatusResponse>;
  /** 开启 WAF 防护 {@link OpenWafProtectionRequest} {@link OpenWafProtectionResponse} */
  OpenWafProtection(data: OpenWafProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<OpenWafProtectionResponse>;
  /** 发布配置文件 {@link PublishConfigFilesRequest} {@link PublishConfigFilesResponse} */
  PublishConfigFiles(data: PublishConfigFilesRequest, config?: AxiosRequestConfig): AxiosPromise<PublishConfigFilesResponse>;
  /** 重启微服务引擎实例 {@link RestartSREInstanceRequest} {@link RestartSREInstanceResponse} */
  RestartSREInstance(data: RestartSREInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RestartSREInstanceResponse>;
  /** 回滚配置发布 {@link RollbackConfigFileReleasesRequest} {@link RollbackConfigFileReleasesResponse} */
  RollbackConfigFileReleases(data: RollbackConfigFileReleasesRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackConfigFileReleasesResponse>;
  /** 弹性伸缩策略批量解绑网关分组 {@link UnbindAutoScalerResourceStrategyFromGroupsRequest} {@link UnbindAutoScalerResourceStrategyFromGroupsResponse} */
  UnbindAutoScalerResourceStrategyFromGroups(data: UnbindAutoScalerResourceStrategyFromGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindAutoScalerResourceStrategyFromGroupsResponse>;
  /** 修改云原生网关证书信息 {@link UpdateCloudNativeAPIGatewayCertificateInfoRequest} {@link UpdateCloudNativeAPIGatewayCertificateInfoResponse} */
  UpdateCloudNativeAPIGatewayCertificateInfo(data: UpdateCloudNativeAPIGatewayCertificateInfoRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCloudNativeAPIGatewayCertificateInfoResponse>;
  /** 修改云原生API网关实例的节点规格 {@link UpdateCloudNativeAPIGatewaySpecRequest} {@link UpdateCloudNativeAPIGatewaySpecResponse} */
  UpdateCloudNativeAPIGatewaySpec(data: UpdateCloudNativeAPIGatewaySpecRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateCloudNativeAPIGatewaySpecResponse>;
  /** 修改引擎公网访问配置 {@link UpdateEngineInternetAccessRequest} {@link UpdateEngineInternetAccessResponse} */
  UpdateEngineInternetAccess(data: UpdateEngineInternetAccessRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEngineInternetAccessResponse>;
  /** 更新网关服务健康检查配置 {@link UpdateUpstreamHealthCheckConfigRequest} {@link UpdateUpstreamHealthCheckConfigResponse} */
  UpdateUpstreamHealthCheckConfig(data: UpdateUpstreamHealthCheckConfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUpstreamHealthCheckConfigResponse>;
  /** 更新网关上游实例列表 {@link UpdateUpstreamTargetsRequest} {@link UpdateUpstreamTargetsResponse} */
  UpdateUpstreamTargets(data: UpdateUpstreamTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUpstreamTargetsResponse>;
}

export declare type Versions = ["2020-12-07"];

export default Tse;
