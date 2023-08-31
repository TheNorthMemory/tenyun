/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 添加实例到集群的结果 */
declare interface AddInstanceResult {
  /** 添加集群失败的节点列表 */
  FailedInstanceIds: string[] | null;
  /** 添加集群成功的节点列表 */
  SuccInstanceIds: string[] | null;
  /** 添加集群超时的节点列表 */
  TimeoutInstanceIds: string[] | null;
  /** 失败的节点的失败原因 */
  FailedReasons: string[] | null;
}

/** 高级选项设置 */
declare interface AdvanceSettings {
  /** 子任务单机并发数限制，默认值为2 */
  SubTaskConcurrency?: number;
}

/** 部署javaagent的类型、版本信息 */
declare interface AgentProfile {
  /** Agent类型 */
  AgentType?: string;
  /** Agent版本号 */
  AgentVersion?: string;
}

/** API 对象类型描述 */
declare interface ApiDefinitionDescr {
  /** 对象名称 */
  Name: string;
  /** 对象属性列表 */
  Properties: PropertyField[];
}

/** API 明细 */
declare interface ApiDetailInfo {
  /** API ID */
  ApiId: string | null;
  /** 命名空间ID */
  NamespaceId: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 服务ID */
  MicroserviceId: string | null;
  /** 服务名称 */
  MicroserviceName: string | null;
  /** API 请求路径 */
  Path: string | null;
  /** Api 映射路径 */
  PathMapping: string | null;
  /** 请求方法 */
  Method: string | null;
  /** 所属分组ID */
  GroupId: string | null;
  /** 是否禁用 */
  UsableStatus: string | null;
  /** 发布状态 */
  ReleaseStatus: string | null;
  /** 开启限流 */
  RateLimitStatus: string | null;
  /** 是否开启mock */
  MockStatus: string | null;
  /** 创建时间 */
  CreatedTime: string | null;
  /** 更新时间 */
  UpdatedTime: string | null;
  /** 发布时间 */
  ReleasedTime: string | null;
  /** 所属分组名称 */
  GroupName: string | null;
  /** API 超时，单位毫秒 */
  Timeout: number | null;
  /** Api所在服务host */
  Host: string | null;
  /** API类型。 ms ： 微服务API； external :外部服务Api */
  ApiType: string | null;
  /** Api描述信息 */
  Description: string | null;
  /** API路径匹配类型。normal：普通API；wildcard：通配API。 */
  ApiMatchType: string | null;
  /** RPC 额外信息 */
  RpcExt?: string | null;
  /** 部署组id */
  GatewayDeployGroupId?: string | null;
  /** md5 */
  Md5?: string | null;
  /** RPC 类型 */
  RpcType?: string | null;
}

/** API分组信息 */
declare interface ApiGroupInfo {
  /** Api Group Id */
  GroupId: string | null;
  /** Api Group 名称 */
  GroupName: string | null;
  /** 分组上下文 */
  GroupContext: string | null;
  /** 鉴权类型。 secret： 密钥鉴权； none:无鉴权 */
  AuthType: string | null;
  /** 发布状态, drafted: 未发布。 released: 发布 */
  Status: string | null;
  /** 分组创建时间 如:2019-06-20 15:51:28 */
  CreatedTime: string | null;
  /** 分组更新时间 如:2019-06-20 15:51:28 */
  UpdatedTime: string | null;
  /** api分组已绑定的网关部署组 */
  BindedGatewayDeployGroups: GatewayDeployGroup[] | null;
  /** api 个数 */
  ApiCount: number | null;
  /** 访问group的ACL类型 */
  AclMode: string | null;
  /** 描述 */
  Description: string | null;
  /** 分组类型。 ms： 微服务分组； external:外部Api分组 */
  GroupType: string | null;
  /** 网关实例的类型 */
  GatewayInstanceType: string | null;
  /** 网关实例ID */
  GatewayInstanceId: string | null;
  /** 命名空间参数key值 */
  NamespaceNameKey: string | null;
  /** 微服务名参数key值 */
  ServiceNameKey: string | null;
  /** 命名空间参数位置，path，header或query，默认是path */
  NamespaceNameKeyPosition: string | null;
  /** 微服务名参数位置，path，header或query，默认是path */
  ServiceNameKeyPosition: string | null;
}

/** 微服务网关API信息 */
declare interface ApiInfo {
  /** 命名空间Id，若为外部API,为固定值："namespace-external" */
  NamespaceId: string;
  /** 服务Id，若为外部API,为固定值："ms-external" */
  MicroserviceId: string;
  /** API path */
  Path: string;
  /** Api 请求 */
  Method: string;
  /** 请求映射 */
  PathMapping: string;
  /** api所在服务host,限定外部Api填写。格式: `http://127.0.0.1:8080` */
  Host?: string;
  /** api描述信息 */
  Description?: string;
}

/** 微服务网关API限流规则 */
declare interface ApiRateLimitRule {
  /** rule Id */
  RuleId: string | null;
  /** API ID */
  ApiId: string | null;
  /** 限流名称 */
  RuleName: string | null;
  /** 最大限流qps */
  MaxQps: number | null;
  /** 生效/禁用, enabled/disabled */
  UsableStatus: string | null;
  /** 规则内容 */
  RuleContent: string | null;
  /** Tsf Rule ID */
  TsfRuleId: string | null;
  /** 描述 */
  Description: string | null;
  /** 创建时间 */
  CreatedTime: string | null;
  /** 更新时间 */
  UpdatedTime: string | null;
}

/** ApiRequestDescr */
declare interface ApiRequestDescr {
  /** 参数名称 */
  Name: string;
  /** 参数类型 */
  Type: string;
  /** 参数位置 */
  In: string;
  /** 参数描述 */
  Description: string;
  /** 参数是否必须 */
  Required: boolean;
  /** 参数的默认值 */
  DefaultValue: string | null;
}

/** API 响应的参数结构描述 */
declare interface ApiResponseDescr {
  /** 参数描述 */
  Name: string;
  /** 参数类型 */
  Type: string;
  /** 参数描述 */
  Description: string;
}

/** API 日统计数据点 */
declare interface ApiUseStatisticsEntity {
  /** 名称 */
  Name: string;
  /** 次数 */
  Count: string;
  /** 比率 */
  Ratio: string;
}

/** API版本数组 */
declare interface ApiVersionArray {
  /** App ID */
  ApplicationId: string | null;
  /** App 名称 */
  ApplicationName: string | null;
  /** App 包版本 */
  PkgVersion: string | null;
}

/** 应用列表其它字段 */
declare interface ApplicationAttribute {
  /** 总实例个数 */
  InstanceCount: number | null;
  /** 运行实例个数 */
  RunInstanceCount: number | null;
  /** 应用下部署组个数 */
  GroupCount: number | null;
}

/** 分页的应用描述信息字段 */
declare interface ApplicationForPage {
  /** 应用ID */
  ApplicationId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** 应用描述 */
  ApplicationDesc: string | null;
  /** 应用类型 */
  ApplicationType: string | null;
  /** 微服务类型 */
  MicroserviceType: string | null;
  /** 编程语言 */
  ProgLang: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 应用资源类型 */
  ApplicationResourceType: string | null;
  /** 应用runtime类型 */
  ApplicationRuntimeType: string | null;
  /** Apigateway的serviceId */
  ApigatewayServiceId: string | null;
  /** 应用备注名 */
  ApplicationRemarkName: string | null;
  /** 服务配置信息列表 */
  ServiceConfigList: ServiceConfig[] | null;
  /** IgnoreCreateImageRepository */
  IgnoreCreateImageRepository?: boolean | null;
}

/** 业务日志配置关联部署组信息 */
declare interface BusinesLogConfigAssociatedGroup {
  /** 部署组ID */
  GroupId: string | null;
  /** 部署组名称 */
  GroupName: string | null;
  /** 部署组所属应用ID */
  ApplicationId: string | null;
  /** 部署组所属应用名称 */
  ApplicationName: string | null;
  /** 部署组所属应用类型 */
  ApplicationType: string | null;
  /** 部署组所属命名空间ID */
  NamespaceId: string | null;
  /** 部署组所属命名空间名称 */
  NamespaceName: string | null;
  /** 部署组所属集群ID */
  ClusterId: string | null;
  /** 部署组所属集群名称 */
  ClusterName: string | null;
  /** 部署组所属集群类型 */
  ClusterType: string | null;
  /** 部署组关联日志配置时间 */
  AssociatedTime: string | null;
}

/** 业务日志配置 */
declare interface BusinessLogConfig {
  /** 配置项ID */
  ConfigId?: string;
  /** 配置项名称 */
  ConfigName?: string;
  /** 配置项日志路径 */
  ConfigPath?: string | null;
  /** 配置项描述 */
  ConfigDesc?: string | null;
  /** 配置项标签 */
  ConfigTags?: string | null;
  /** 配置项对应的ES管道 */
  ConfigPipeline?: string | null;
  /** 配置项创建时间 */
  ConfigCreateTime?: string | null;
  /** 配置项更新时间 */
  ConfigUpdateTime?: string | null;
  /** 配置项解析规则 */
  ConfigSchema?: BusinessLogConfigSchema | null;
  /** 配置项关联部署组 */
  ConfigAssociatedGroups?: BusinesLogConfigAssociatedGroup[] | null;
}

/** 业务日志配置解析规则 */
declare interface BusinessLogConfigSchema {
  /** 解析规则类型 */
  SchemaType: number;
  /** 解析规则内容 */
  SchemaContent?: string | null;
  /** 解析规则时间格式 */
  SchemaDateFormat?: string | null;
  /** 解析规则对应的多行匹配规则 */
  SchemaMultilinePattern?: string | null;
  /** 解析规则创建时间 */
  SchemaCreateTime?: string | null;
  /** 用户填写的解析规则 */
  SchemaPatternLayout?: string | null;
}

/** 业务日志 */
declare interface BusinessLogV2 {
  /** 实例ID */
  InstanceId: string | null;
  /** 日志内容 */
  Content: string | null;
  /** 日志时间戳 */
  Timestamp: number | null;
  /** 实例IP */
  InstanceIp: string | null;
  /** 日志ID */
  LogId: string | null;
  /** 部署组ID */
  GroupId: string | null;
}

/** 集群 */
declare interface Cluster {
  /** 集群ID */
  ClusterId: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 集群描述 */
  ClusterDesc: string | null;
  /** 集群类型 */
  ClusterType: string | null;
  /** 集群所属私有网络ID */
  VpcId: string | null;
  /** 集群状态 */
  ClusterStatus: string | null;
  /** 集群CIDR */
  ClusterCIDR: string | null;
  /** 集群总CPU，单位: 核 */
  ClusterTotalCpu: number | null;
  /** 集群总内存，单位: G */
  ClusterTotalMem: number | null;
  /** 集群已使用CPU，单位: 核 */
  ClusterUsedCpu: number | null;
  /** 集群已使用内存，单位: G */
  ClusterUsedMem: number | null;
  /** 集群机器实例数量 */
  InstanceCount: number | null;
  /** 集群可用的机器实例数量 */
  RunInstanceCount: number | null;
  /** 集群正常状态的机器实例数量 */
  NormalInstanceCount: number | null;
  /** 删除标记：true：可以删除；false：不可删除 */
  DeleteFlag: boolean | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 集群所属TSF地域ID */
  TsfRegionId: string | null;
  /** 集群所属TSF地域名称 */
  TsfRegionName: string | null;
  /** 集群所属TSF可用区ID */
  TsfZoneId: string | null;
  /** 集群所属TSF可用区名称 */
  TsfZoneName: string | null;
  /** 集群不可删除的原因 */
  DeleteFlagReason: string | null;
  /** 集群最大CPU限制，单位：核 */
  ClusterLimitCpu: number | null;
  /** 集群最大内存限制，单位：G */
  ClusterLimitMem: number | null;
  /** 集群可用的服务实例数量 */
  RunServiceInstanceCount: number | null;
  /** 集群所属子网ID */
  SubnetId: string | null;
  /** 返回给前端的控制信息 */
  OperationInfo: OperationInfo | null;
  /** 集群版本 */
  ClusterVersion: string | null;
}

/** 集群详情 */
declare interface ClusterV2 {
  /** 集群ID */
  ClusterId: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 集群描述 */
  ClusterDesc: string | null;
  /** 集群类型 */
  ClusterType: string | null;
  /** 集群所属私有网络ID */
  VpcId: string | null;
  /** 集群状态 */
  ClusterStatus: string | null;
  /** 集群CIDR */
  ClusterCIDR: string | null;
  /** 集群总CPU，单位: 核 */
  ClusterTotalCpu: number | null;
  /** 集群总内存，单位: G */
  ClusterTotalMem: number | null;
  /** 集群已使用CPU，单位: 核 */
  ClusterUsedCpu: number | null;
  /** 集群已使用内存，单位: G */
  ClusterUsedMem: number | null;
  /** 集群机器实例数量 */
  InstanceCount: number | null;
  /** 集群运行中的机器实例数量 */
  RunInstanceCount: number | null;
  /** 集群正常状态的机器实例数量 */
  NormalInstanceCount: number | null;
  /** 删除标记：true：可以删除；false：不可删除 */
  DeleteFlag: boolean | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 集群所属TSF地域ID */
  TsfRegionId: string | null;
  /** 集群所属TSF地域名称 */
  TsfRegionName: string | null;
  /** 集群所属TSF可用区ID */
  TsfZoneId: string | null;
  /** 集群所属TSF可用区名称 */
  TsfZoneName: string | null;
  /** 集群不可删除的原因 */
  DeleteFlagReason: string | null;
  /** 集群所属私有网络子网ID */
  SubnetId: string | null;
  /** 集群剩余 cpu limit */
  ClusterLimitCpu: string | null;
  /** 集群剩余 memory limit */
  ClusterLimitMem: string | null;
  /** 运行服务实例数 */
  RunServiceInstanceCount: number | null;
  /** 给前端的按钮控制信息 */
  OperationInfo: OperationInfo | null;
  /** 容器集群版本 */
  ClusterVersion: string | null;
  /** 部署组总数 */
  GroupCount: number | null;
  /** 运行中部署组数 */
  RunGroupCount: number | null;
  /** 停止中部署组数 */
  StopGroupCount: number | null;
  /** 异常部署组数 */
  AbnormalGroupCount: number | null;
  /** 集群备注名 */
  ClusterRemarkName: string | null;
  /** api地址 */
  KuberneteApiServer: string | null;
  /** K : kubeconfig, S : service account */
  KuberneteNativeType: string | null;
  /** native secret */
  KuberneteNativeSecret: string | null;
}

/** 配置项 */
declare interface Config {
  /** 配置项ID */
  ConfigId: string | null;
  /** 配置项名称 */
  ConfigName: string | null;
  /** 配置项版本 */
  ConfigVersion: string | null;
  /** 配置项版本描述 */
  ConfigVersionDesc: string | null;
  /** 配置项值 */
  ConfigValue: string | null;
  /** 配置项类型 */
  ConfigType: string | null;
  /** 创建时间 */
  CreationTime: string | null;
  /** 应用ID */
  ApplicationId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** 删除标识，true：可以删除；false：不可删除 */
  DeleteFlag: boolean | null;
  /** 最后更新时间 */
  LastUpdateTime: string | null;
  /** 配置项版本数量 */
  ConfigVersionCount: number | null;
}

/** 配置项发布信息 */
declare interface ConfigRelease {
  /** 配置项发布ID */
  ConfigReleaseId?: string | null;
  /** 配置项ID */
  ConfigId?: string | null;
  /** 配置项名称 */
  ConfigName?: string | null;
  /** 配置项版本 */
  ConfigVersion?: string | null;
  /** 发布时间 */
  ReleaseTime?: string | null;
  /** 部署组ID */
  GroupId?: string | null;
  /** 部署组名称 */
  GroupName?: string | null;
  /** 命名空间ID */
  NamespaceId?: string | null;
  /** 命名空间名称 */
  NamespaceName?: string | null;
  /** 集群ID */
  ClusterId?: string | null;
  /** 集群名称 */
  ClusterName?: string | null;
  /** 发布描述 */
  ReleaseDesc?: string | null;
  /** 应用ID */
  ApplicationId?: string | null;
  /** 配置中心发布情况 */
  ConfigCenters?: TsfConfigCenter[] | null;
}

/** 配置项发布日志 */
declare interface ConfigReleaseLog {
  /** 配置项发布日志ID */
  ConfigReleaseLogId?: string | null;
  /** 配置项ID */
  ConfigId?: string | null;
  /** 配置项名称 */
  ConfigName?: string | null;
  /** 配置项版本 */
  ConfigVersion?: string | null;
  /** 部署组ID */
  GroupId?: string | null;
  /** 部署组名称 */
  GroupName?: string | null;
  /** 命名空间ID */
  NamespaceId?: string | null;
  /** 命名空间名称 */
  NamespaceName?: string | null;
  /** 集群ID */
  ClusterId?: string | null;
  /** 集群名称 */
  ClusterName?: string | null;
  /** 发布时间 */
  ReleaseTime?: string | null;
  /** 发布描述 */
  ReleaseDesc?: string | null;
  /** 发布状态 */
  ReleaseStatus?: string | null;
  /** 上次发布的配置项ID */
  LastConfigId?: string | null;
  /** 上次发布的配置项名称 */
  LastConfigName?: string | null;
  /** 上次发布的配置项版本 */
  LastConfigVersion?: string | null;
  /** 回滚标识 */
  RollbackFlag?: boolean | null;
  /** 发布成功的配置中心 ALL/EXCLUSIVE/SHARE/NONE全部发布成功，独占发布成功，共享发布成功，全部发布失败 */
  ReleasedConfigCenter?: string | null;
}

/** 配置模板对象 */
declare interface ConfigTemplate {
  /** 配置模板Id */
  ConfigTemplateId?: string | null;
  /** 配置模板名称 */
  ConfigTemplateName?: string | null;
  /** 配置模板描述 */
  ConfigTemplateDesc?: string | null;
  /** 配置模板对应的微服务框架 */
  ConfigTemplateType?: string | null;
  /** 配置模板数据 */
  ConfigTemplateValue?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 更新时间 */
  UpdateTime?: string | null;
}

/** 部署组列表（应用下钻界面的） */
declare interface ContainGroup {
  /** 部署组ID */
  GroupId?: string | null;
  /** 分组名称 */
  GroupName?: string | null;
  /** 创建时间 */
  CreateTime?: string | null;
  /** 镜像server */
  Server: string | null;
  /** 镜像名，如/tsf/nginx */
  RepoName: string | null;
  /** 镜像版本名称 */
  TagName: string | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 命名空间ID */
  NamespaceId: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 初始分配的 CPU 核数，对应 K8S request */
  CpuRequest: string | null;
  /** 最大分配的 CPU 核数，对应 K8S limit */
  CpuLimit: string | null;
  /** 初始分配的内存 MiB 数，对应 K8S request */
  MemRequest: string | null;
  /** 最大分配的内存 MiB 数，对应 K8S limit */
  MemLimit: string | null;
  /** 部署组备注 */
  Alias: string | null;
  /** KubeInjectEnable值 */
  KubeInjectEnable: boolean | null;
  /** 更新时间 */
  UpdatedTime?: string | null;
}

/** 部署组列表（应用下钻） */
declare interface ContainGroupResult {
  /** 部署组列表 */
  Content: ContainGroup[] | null;
  /** 总记录数 */
  TotalCount: number;
}

/** 返回容器的事件，比如 k8s deployment 或者 pod 的 events */
declare interface ContainerEvent {
  /** 第一次出现的时间，以 ms 为单位的时间戳 */
  FirstTimestamp: number | null;
  /** 最后一次出现的时间，以 ms 为单位的时间戳 */
  LastTimestamp: number | null;
  /** 级别 */
  Type: string | null;
  /** 资源类型 */
  Kind: string | null;
  /** 资源名称 */
  Name: string | null;
  /** 内容 */
  Reason: string | null;
  /** 详细描述 */
  Message: string | null;
  /** 出现次数 */
  Count: number | null;
}

/** 获取部署组 */
declare interface ContainerGroupDeploy {
  /** 部署组id */
  GroupId: string | null;
  /** 分组名称 */
  GroupName: string | null;
  /** 实例总数 */
  InstanceNum: number | null;
  /** 已启动实例总数 */
  CurrentNum: number | null;
  /** 镜像server */
  Server: string | null;
  /** 镜像名，如/tsf/nginx */
  Reponame: string | null;
  /** 镜像版本名称 */
  TagName: string | null;
  /** 业务容器初始分配的 CPU 核数，对应 K8S request */
  CpuRequest: string | null;
  /** 业务容器最大分配的 CPU 核数，对应 K8S limit */
  CpuLimit: string | null;
  /** 业务容器初始分配的内存 MiB 数，对应 K8S request */
  MemRequest: string | null;
  /** 业务容器最大分配的内存 MiB 数，对应 K8S limit */
  MemLimit: string | null;
  /** 0:公网 1:集群内访问 2：NodePort */
  AccessType: number | null;
  /** 端口映射 */
  ProtocolPorts: ProtocolPort[] | null;
  /** 更新方式：0:快速更新 1:滚动更新 */
  UpdateType: number | null;
  /** 更新间隔,单位秒 */
  UpdateIvl: number | null;
  /** jvm参数 */
  JvmOpts: string | null;
  /** 子网id */
  SubnetId: string | null;
  /** agent容器初始分配的 CPU 核数，对应 K8S request */
  AgentCpuRequest: string | null;
  /** agent容器最大分配的 CPU 核数，对应 K8S limit */
  AgentCpuLimit: string | null;
  /** agent容器初始分配的内存 MiB 数，对应 K8S request */
  AgentMemRequest: string | null;
  /** agent容器最大分配的内存 MiB 数，对应 K8S limit */
  AgentMemLimit: string | null;
  /** istioproxy容器初始分配的 CPU 核数，对应 K8S request */
  IstioCpuRequest: string | null;
  /** istioproxy容器最大分配的 CPU 核数，对应 K8S limit */
  IstioCpuLimit: string | null;
  /** istioproxy容器初始分配的内存 MiB 数，对应 K8S request */
  IstioMemRequest: string | null;
  /** istioproxy容器最大分配的内存 MiB 数，对应 K8S limit */
  IstioMemLimit: string | null;
  /** 部署组的环境变量数组，这里没有展示 tsf 使用的环境变量，只展示了用户设置的环境变量。 */
  Envs: Env[] | null;
  /** 健康检查配置信息，若不指定该参数，则默认不设置健康检查。 */
  HealthCheckSettings: HealthCheckSettings | null;
  /** 是否部署Agent容器 */
  DeployAgent: boolean | null;
  /** 部署组备注 */
  Alias: string | null;
  /** 是否创建 k8s service */
  DisableService: boolean | null;
  /** service 是否为 headless 类型 */
  HeadlessService: boolean | null;
  /** TcrRepoInfo值 */
  TcrRepoInfo: TcrRepoInfo | null;
  /** 数据卷信息，list */
  VolumeInfos: VolumeInfo[] | null;
  /** 数据卷挂载信息，list */
  VolumeMountInfos: VolumeMountInfo[] | null;
  /** KubeInjectEnable值 */
  KubeInjectEnable: boolean | null;
  /** 仓库类型 (person, tcr) */
  RepoType: string | null;
  /** 预热配置设置 */
  WarmupSetting: WarmupSetting | null;
  /** Envoy网关服务配置 */
  GatewayConfig: GatewayConfig | null;
}

/** 容器部署组详情 */
declare interface ContainerGroupDetail {
  /** 部署组ID */
  GroupId: string | null;
  /** 分组名称 */
  GroupName: string | null;
  /** 实例总数 */
  InstanceNum: number | null;
  /** 已启动实例总数 */
  CurrentNum: number | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 镜像server */
  Server: string | null;
  /** 镜像名，如/tsf/nginx */
  Reponame: string | null;
  /** 镜像版本名称 */
  TagName: string | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 命名空间ID */
  NamespaceId: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 应用ID */
  ApplicationId: string | null;
  /** 负载均衡ip */
  LbIp: string | null;
  /** 应用类型 */
  ApplicationType: string | null;
  /** Service ip */
  ClusterIp: string | null;
  /** NodePort端口，只有公网和NodePort访问方式才有值 */
  NodePort: number | null;
  /** 最大分配的 CPU 核数，对应 K8S limit */
  CpuLimit: string | null;
  /** 最大分配的内存 MiB 数，对应 K8S limit */
  MemLimit: string | null;
  /** 0:公网 1:集群内访问 2：NodePort */
  AccessType: number | null;
  /** 更新方式：0:快速更新 1:滚动更新 */
  UpdateType: number | null;
  /** 更新间隔,单位秒 */
  UpdateIvl: number | null;
  /** 端口数组对象 */
  ProtocolPorts: ProtocolPort[] | null;
  /** 环境变量数组对象 */
  Envs: Env[] | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** pod错误信息描述 */
  Message: string | null;
  /** 部署组状态 */
  Status: string | null;
  /** 服务类型 */
  MicroserviceType: string | null;
  /** 初始分配的 CPU 核数，对应 K8S request */
  CpuRequest: string | null;
  /** 初始分配的内存 MiB 数，对应 K8S request */
  MemRequest: string | null;
  /** 子网id */
  SubnetId: string | null;
  /** 部署组资源类型 */
  GroupResourceType: string | null;
  /** 部署组实例个数 */
  InstanceCount: number | null;
  /** 部署组更新时间戳 */
  UpdatedTime: number | null;
  /** kubernetes滚动更新策略的MaxSurge参数 */
  MaxSurge: string | null;
  /** kubernetes滚动更新策略的MaxUnavailable参数 */
  MaxUnavailable: string | null;
  /** 部署组健康检查设置 */
  HealthCheckSettings: HealthCheckSettings | null;
  /** 允许PlainYamlDeploy */
  AllowPlainYamlDeploy?: boolean | null;
  /** 是否不等于ServiceConfig */
  IsNotEqualServiceConfig?: boolean | null;
  /** 仓库名 */
  RepoName?: string | null;
  /** 别名 */
  Alias?: string | null;
}

/** 部署组列表-其它字段 */
declare interface ContainerGroupOther {
  /** 实例总数 */
  InstanceNum: number;
  /** 已启动实例总数 */
  CurrentNum: number;
  /** 负载均衡ip */
  LbIp: string;
  /** Service ip */
  ClusterIp: string;
  /** 服务状态，请参考后面的的状态定义 */
  Status: string;
  /** 服务状态，请参考后面的的状态定义 */
  Message: string;
  /** 环境变量 */
  Envs: Env[];
  /** Service NodePort */
  NodePort: number | null;
  /** 子网ID */
  SubnetId: string | null;
  /** 健康检查相关字段 */
  HealthCheckSettings: HealthCheckSettings | null;
  /** 服务配置信息是否匹配 */
  IsNotEqualServiceConfig: boolean | null;
}

/** cos临时帐号信息 */
declare interface CosCredentials {
  /** 会话Token */
  SessionToken: string | null;
  /** 临时应用ID */
  TmpAppId: string | null;
  /** 临时调用者身份ID */
  TmpSecretId: string | null;
  /** 临时密钥 */
  TmpSecretKey: string | null;
  /** 过期时间 */
  ExpiredTime: number | null;
  /** 所在域 */
  Domain: string | null;
}

/** Cos下载所需信息 */
declare interface CosDownloadInfo {
  /** 桶名称 */
  Bucket: string | null;
  /** 地域 */
  Region: string | null;
  /** 路径 */
  Path: string | null;
  /** 鉴权信息 */
  Credentials: CosCredentials | null;
}

/** cos上传所需信息 */
declare interface CosUploadInfo {
  /** 程序包ID */
  PkgId: string | null;
  /** 桶 */
  Bucket: string | null;
  /** 目标地域 */
  Region: string | null;
  /** 存储路径 */
  Path: string | null;
  /** 鉴权信息 */
  Credentials: CosCredentials;
}

/** 构成监控数据图的曲线坐标点 */
declare interface CurvePoint {
  /** 当前坐标 X轴的值 当前是日期格式:"yyyy-MM-dd HH:mm:ss" */
  Label: string;
  /** 当前坐标 Y轴的值 */
  Value: string;
  /** 该坐标点时间戳 */
  Timestamp: string;
}

/** 需要删除的镜像版本 */
declare interface DeleteImageTag {
  /** 仓库名，如/tsf/nginx */
  RepoName: string;
  /** 版本号:如V1 */
  TagName: string;
}

/** 描述投递配置项绑定的部署组 */
declare interface DeliveryConfigBindGroup {
  /** 配置id */
  ConfigId: string;
  /** 配置名 */
  ConfigName: string;
  /** 采集路径 */
  CollectPath: string[] | null;
  /** 关联部署组信息 */
  Groups: GroupInfo[] | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** KafkaVIp */
  KafkaVIp?: string | null;
  /** KafkaAddress */
  KafkaAddress?: string | null;
  /** KafkaVPort */
  KafkaVPort?: string | null;
  /** Topic */
  Topic?: string | null;
  /** LineRule */
  LineRule?: string | null;
  /** CustomRule */
  CustomRule?: string | null;
  /** EnableGlobalLineRule */
  EnableGlobalLineRule?: boolean | null;
  /** EnableAuth */
  EnableAuth?: boolean | null;
  /** Username */
  Username?: string | null;
  /** Password */
  Password?: string | null;
  /** KafkaInfos */
  KafkaInfos?: DeliveryKafkaInfo[] | null;
}

/** 描述配置项绑定的部署组 */
declare interface DeliveryConfigBindGroups {
  /** 公共条数 */
  TotalCount: number | null;
  /** 内容 */
  Content: DeliveryConfigBindGroup[] | null;
}

/** kafka投递的topic和path的信息 */
declare interface DeliveryKafkaInfo {
  /** 投递kafka的topic */
  Topic?: string | null;
  /** 采集日志的path */
  Path?: string[] | null;
  /** default，默认换行符分行time，按时间分行custom, 选了custom那么CustomRule就要填入具体的自定义值 */
  LineRule?: string | null;
  /** 自定义的分行值 */
  CustomRule?: string | null;
}

/** 环境变量 */
declare interface Env {
  /** 环境变量名称 */
  Name: string;
  /** 环境变量值 */
  Value?: string;
  /** k8s ValueFrom */
  ValueFrom?: ValueFrom | null;
}

/** 容器 env 的 FieldRef */
declare interface FieldRef {
  /** k8s 的 FieldPath */
  FieldPath?: string | null;
}

/** 文件配置项 */
declare interface FileConfig {
  /** 配置项ID */
  ConfigId?: string | null;
  /** 配置项名称 */
  ConfigName?: string | null;
  /** 配置项版本 */
  ConfigVersion?: string | null;
  /** 配置项版本描述 */
  ConfigVersionDesc?: string | null;
  /** 配置项文件名 */
  ConfigFileName?: string | null;
  /** 配置项文件内容 */
  ConfigFileValue?: string | null;
  /** 配置项文件编码 */
  ConfigFileCode?: string | null;
  /** 创建时间 */
  CreationTime?: string | null;
  /** 配置项归属应用ID */
  ApplicationId?: string | null;
  /** 应用名称 */
  ApplicationName?: string | null;
  /** 删除标识 */
  DeleteFlag?: boolean | null;
  /** 配置项版本数量 */
  ConfigVersionCount?: number | null;
  /** 配置项最后更新时间 */
  LastUpdateTime?: string | null;
  /** 发布路径 */
  ConfigFilePath?: string | null;
  /** 后置命令 */
  ConfigPostCmd?: string | null;
  /** 配置项文件长度 */
  ConfigFileValueLength?: number | null;
}

/** 文件配置项发布信息 */
declare interface FileConfigRelease {
  /** 配置项发布ID */
  ConfigReleaseId?: string | null;
  /** 配置项ID */
  ConfigId?: string | null;
  /** 配置项名称 */
  ConfigName?: string | null;
  /** 配置项版本 */
  ConfigVersion?: string | null;
  /** 发布描述 */
  ReleaseDesc?: string | null;
  /** 发布时间 */
  ReleaseTime?: string | null;
  /** 部署组ID */
  GroupId?: string | null;
  /** 部署组名称 */
  GroupName?: string | null;
  /** 命名空间ID */
  NamespaceId?: string | null;
  /** 命名空间名称 */
  NamespaceName?: string | null;
  /** 集群ID */
  ClusterId?: string | null;
  /** 集群名称 */
  ClusterName?: string | null;
}

/** 用于请求参数中的条件过滤字段 */
declare interface Filter {
  /** 过滤条件名 */
  Name: string;
  /** 过滤条件匹配值，几个条件间是或关系 */
  Values: string[];
}

/** 网关分组简单信息 */
declare interface GatewayApiGroupVo {
  /** 分组ID */
  GroupId: string | null;
  /** 分组名称 */
  GroupName: string | null;
  /** 分组下API个数 */
  GroupApiCount: number | null;
  /** 分组API列表 */
  GroupApis: GatewayGroupApiVo[] | null;
  /** 网关实例的类型 */
  GatewayInstanceType: string | null;
  /** 网关实例ID */
  GatewayInstanceId: string | null;
}

/** TSF Envoy网关服务配置 */
declare interface GatewayConfig {
}

/** api分组已绑定的网关部署组 */
declare interface GatewayDeployGroup {
  /** 网关部署组ID */
  DeployGroupId: string | null;
  /** 网关部署组名称 */
  DeployGroupName: string | null;
  /** 应用ID */
  ApplicationId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** 应用分类：V：虚拟机应用，C：容器应用 */
  ApplicationType: string | null;
  /** 部署组应用状态,取值: Running、Waiting、Paused、Updating、RollingBack、Abnormal、Unknown */
  GroupStatus: string | null;
  /** 集群类型，C ：容器，V：虚拟机 */
  ClusterType: string | null;
}

/** 网关API简单信息 */
declare interface GatewayGroupApiVo {
  /** API ID */
  ApiId: string;
  /** API 请求路径 */
  Path: string;
  /** API 微服务名称 */
  MicroserviceName: string;
  /** API 请求方法 */
  Method: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
}

/** 网关部署组ID和网关API分组ID元组 */
declare interface GatewayGroupIds {
  /** 网关部署组ID */
  GatewayDeployGroupId: string;
  /** 分组id */
  GroupId: string;
}

/** 微服务网关插件实例对象 */
declare interface GatewayPlugin {
  /** 网关插件id */
  Id: string | null;
  /** 插件名称 */
  Name: string | null;
  /** 插件类型 */
  Type: string | null;
  /** 插件描述 */
  Description: string | null;
  /** 创建时间 */
  CreatedTime: string | null;
  /** 更新时间 */
  UpdatedTime: string | null;
  /** 发布状态 */
  Status: string | null;
}

/** 微服务网关插件绑定对象 */
declare interface GatewayPluginBoundParam {
  /** 插件id */
  PluginId: string;
  /** 插件绑定到的对象类型:group/api */
  ScopeType: string;
  /** 插件绑定到的对象主键值，例如分组的ID/API的ID */
  ScopeValue: string;
}

/** 网关部署组、分组、API列表数据 */
declare interface GatewayVo {
  /** 网关部署组ID */
  GatewayDeployGroupId: string | null;
  /** 网关部署组名称 */
  GatewayDeployGroupName: string | null;
  /** API 分组个数 */
  GroupNum: number | null;
  /** API 分组列表 */
  Groups: GatewayApiGroupVo[] | null;
}

/** API监控明细数据 */
declare interface GroupApiUseStatistics {
  /** 总调用数 */
  TopStatusCode: ApiUseStatisticsEntity[] | null;
  /** 平均错误率 */
  TopTimeCost: ApiUseStatisticsEntity[] | null;
  /** 分位值对象 */
  Quantile: QuantileEntity | null;
}

/** 分组日使用统计对象 */
declare interface GroupDailyUseStatistics {
  /** 总调用数 */
  TopReqAmount: GroupUseStatisticsEntity[];
  /** 平均错误率 */
  TopFailureRate: GroupUseStatisticsEntity[];
  /** 平均响应耗时 */
  TopAvgTimeCost: GroupUseStatisticsEntity[];
}

/** 日志投递kafka用，描述部署组信息 */
declare interface GroupInfo {
  /** 部署组id */
  GroupId: string;
  /** 部署组名称 */
  GroupName: string;
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId?: string | null;
  /** 集群名称 */
  ClusterName?: string | null;
  /** 命名空间名称 */
  NamespaceName?: string | null;
  /** 绑定时间 */
  AssociateTime?: string | null;
}

/** 部署组实例列表 */
declare interface GroupPod {
  /** 实例名称(对应到kubernetes的pod名称) */
  PodName: string | null;
  /** 实例ID(对应到kubernetes的pod id) */
  PodId: string | null;
  /** 实例状态，请参考后面的实例以及容器的状态定义。启动中（pod 未 ready）：Starting；运行中：Running；异常：Abnormal；停止：Stopped； */
  Status: string | null;
  /** 实例处于当前状态的原因，例如容器下载镜像失败 */
  Reason: string | null;
  /** 主机IP */
  NodeIp: string | null;
  /** 实例IP */
  Ip: string | null;
  /** 实例中容器的重启次数 */
  RestartCount: number | null;
  /** 实例中已就绪容器的个数 */
  ReadyCount: number | null;
  /** 运行时长 */
  Runtime: string | null;
  /** 实例启动时间 */
  CreatedAt: string | null;
  /** 服务实例状态 */
  ServiceInstanceStatus: string | null;
  /** 机器实例可使用状态 */
  InstanceAvailableStatus: string | null;
  /** 机器实例状态 */
  InstanceStatus: string | null;
  /** 节点实例id */
  NodeInstanceId: string | null;
}

/** 部署组实例列表 */
declare interface GroupPodResult {
  /** 总记录数 */
  TotalCount: number | null;
  /** 列表信息 */
  Content: GroupPod[] | null;
}

/** 部署组配置发布相关信息 */
declare interface GroupRelease {
  /** 程序包ID */
  PackageId: string | null;
  /** 程序包名 */
  PackageName: string | null;
  /** 程序包版本 */
  PackageVersion: string | null;
  /** 镜像名 */
  RepoName: string | null;
  /** 镜像版本 */
  TagName: string | null;
  /** 已发布的全局配置列表 */
  PublicConfigReleaseList: ConfigRelease[] | null;
  /** 已发布的应用配置列表 */
  ConfigReleaseList: ConfigRelease[] | null;
  /** 已发布的文件配置列表 */
  FileConfigReleaseList: FileConfigRelease[] | null;
}

/** 单元化API使用详情统计对象列表 */
declare interface GroupUnitApiDailyUseStatistics {
  /** 命名空间ID */
  NamespaceId: string;
  /** 命名空间名称 */
  NamespaceName: string;
  /** 该API在该命名空间下的总调用次数 */
  SumReqAmount: string;
  /** 该API在该命名空间下的平均错误率 */
  AvgFailureRate: string;
  /** 该API在该命名空间下的平均响应时间 */
  AvgTimeCost: string;
  /** 监控数据曲线点位图Map集合 */
  MetricDataPointMap: MetricDataPointMap;
  /** 状态码分布详情 */
  TopStatusCode: ApiUseStatisticsEntity[];
  /** 耗时分布详情 */
  TopTimeCost: ApiUseStatisticsEntity[];
  /** 分位值对象 */
  Quantile: QuantileEntity;
}

/** 查询网关API监控明细数据（单元化网关使用详情） */
declare interface GroupUnitApiUseStatistics {
  /** 总记录数 */
  TotalCount: number;
  /** 查询网关API监控明细对象集合 */
  Content: GroupUnitApiDailyUseStatistics[];
}

/** API分组日使用统计对象数据点 */
declare interface GroupUseStatisticsEntity {
  /** API 路径 */
  ApiPath: string | null;
  /** 服务名 */
  ServiceName: string | null;
  /** 统计值 */
  Value: string | null;
  /** API ID */
  ApiId: string | null;
}

/** 健康检查配置 */
declare interface HealthCheckConfig {
  /** 健康检查路径 */
  Path?: string | null;
}

/** 健康检查配置信息，若不指定该参数，则默认不设置健康检查。 */
declare interface HealthCheckSetting {
  /** 健康检查方法。HTTP：通过 HTTP 接口检查；CMD：通过执行命令检查；TCP：通过建立 TCP 连接检查。 */
  ActionType: string | null;
  /** 容器延时启动健康检查的时间。 */
  InitialDelaySeconds?: number | null;
  /** 每次健康检查响应的最大超时时间。 */
  TimeoutSeconds?: number | null;
  /** 进行健康检查的时间间隔。 */
  PeriodSeconds?: number | null;
  /** 表示后端容器从失败到成功的连续健康检查成功次数。 */
  SuccessThreshold?: number | null;
  /** 表示后端容器从成功到失败的连续健康检查成功次数。 */
  FailureThreshold?: number | null;
  /** HTTP 健康检查方法使用的检查协议。支持HTTP、HTTPS。 */
  Scheme?: string | null;
  /** 健康检查端口，范围 1~65535 。 */
  Port?: number | null;
  /** HTTP 健康检查接口的请求路径。 */
  Path?: string | null;
  /** 执行命令检查方式，执行的命令。 */
  Command?: string[] | null;
  /** TSF_DEFAULT：tsf 默认就绪探针。K8S_NATIVE：k8s 原生探针。不填默认为 k8s 原生探针。 */
  Type?: string | null;
}

/** 健康检查参数 */
declare interface HealthCheckSettings {
  /** 存活健康检查 */
  LivenessProbe?: HealthCheckSetting | null;
  /** 就绪健康检查 */
  ReadinessProbe?: HealthCheckSetting | null;
}

/** 镜像仓库 */
declare interface ImageRepository {
  /** 仓库名,含命名空间,如tsf/nginx */
  Reponame: string | null;
  /** 仓库类型 */
  Repotype: string | null;
  /** 镜像版本数 */
  TagCount: number | null;
  /** 是否公共,1:公有,0:私有 */
  IsPublic: number | null;
  /** 是否被用户收藏。true：是，false：否 */
  IsUserFavor: boolean | null;
  /** 是否是腾讯云官方仓库。 是否是腾讯云官方仓库。true：是，false：否 */
  IsQcloudOfficial: boolean | null;
  /** 被所有用户收藏次数 */
  FavorCount: number | null;
  /** 拉取次数 */
  PullCount: number | null;
  /** 描述内容 */
  Description: string | null;
  /** 创建时间 */
  CreationTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** TcrRepoInfo值 */
  TcrRepoInfo: TcrRepoInfo | null;
  /** TcrBindingId值 */
  TcrBindingId: number | null;
  /** applicationid值 */
  ApplicationId: string | null;
  /** ApplicationName值（废弃） */
  ApplicationName: ScalableRule | null;
  /** ApplicationName值 */
  ApplicationNameReal: string | null;
  /** 是否公共,1:公有,0:私有 */
  Public?: number | null;
}

/** 镜像仓库列表 */
declare interface ImageRepositoryResult {
  /** 总记录数 */
  TotalCount: number | null;
  /** 镜像服务器地址 */
  Server: string | null;
  /** 列表信息 */
  Content: ImageRepository[] | null;
}

/** 列表信息 */
declare interface ImageTag {
  /** 仓库名 */
  RepoName: string;
  /** 版本名称 */
  TagName: string;
  /** 版本ID */
  TagId: string;
  /** 镜像ID */
  ImageId: string;
  /** 大小 */
  Size: string;
  /** 创建时间 */
  CreationTime: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 镜像制作者 */
  Author: string;
  /** CPU架构 */
  Architecture: string;
  /** Docker客户端版本 */
  DockerVersion: string;
  /** 操作系统 */
  Os: string | null;
  /** push时间 */
  PushTime: string;
  /** 单位为字节 */
  SizeByte: number;
  /** TcrRepoInfo值 */
  TcrRepoInfo: TcrRepoInfo | null;
}

/** 镜像版本列表 */
declare interface ImageTagsResult {
  /** 总记录数 */
  TotalCount: number;
  /** 仓库名,含命名空间,如tsf/ngin */
  RepoName: string;
  /** 镜像服务器地址 */
  Server: string;
  /** 列表信息 */
  Content: ImageTag[];
}

/** 监控指标坐标 */
declare interface IndicatorCoord {
  /** 指标横坐标值 */
  CoordX: string | null;
  /** 指标纵坐标值 */
  CoordY: string | null;
  /** 指标标签，用于标识附加信息 */
  CoordTag: string | null;
}

/** 机器实例 */
declare interface Instance {
  /** 机器实例ID */
  InstanceId: string | null;
  /** 机器名称 */
  InstanceName: string | null;
  /** 机器内网地址IP */
  LanIp: string | null;
  /** 机器外网地址IP */
  WanIp: string | null;
  /** 机器描述信息 */
  InstanceDesc: string | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** VM的状态 虚机：虚机的状态 容器：Pod所在虚机的状态 */
  InstanceStatus: string | null;
  /** VM的可使用状态 虚机：虚机是否能够作为资源使用 容器：虚机是否能够作为资源部署POD */
  InstanceAvailableStatus: string | null;
  /** 服务下的服务实例的状态 虚机：应用是否可用 + Agent状态 容器：Pod状态 */
  ServiceInstanceStatus: string | null;
  /** 标识此instance是否已添加在tsf中 */
  CountInTsf: number | null;
  /** 机器所属部署组ID */
  GroupId: string | null;
  /** 机器所属应用ID */
  ApplicationId: string | null;
  /** 机器所属应用名称 */
  ApplicationName: string | null;
  /** 机器实例在CVM的创建时间 */
  InstanceCreatedTime: string | null;
  /** 机器实例在CVM的过期时间 */
  InstanceExpiredTime: string | null;
  /** 机器实例在CVM的计费模式 */
  InstanceChargeType: string | null;
  /** 机器实例总CPU信息 */
  InstanceTotalCpu: number | null;
  /** 机器实例总内存信息 */
  InstanceTotalMem: number | null;
  /** 机器实例使用的CPU信息 */
  InstanceUsedCpu: number | null;
  /** 机器实例使用的内存信息 */
  InstanceUsedMem: number | null;
  /** 机器实例Limit CPU信息 */
  InstanceLimitCpu: number | null;
  /** 机器实例Limit 内存信息 */
  InstanceLimitMem: number | null;
  /** 包版本 */
  InstancePkgVersion: string | null;
  /** 集群类型 */
  ClusterType: string | null;
  /** 机器实例业务状态 */
  RestrictState: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 实例执行状态 */
  OperationState: number | null;
  /** NamespaceId Ns ID */
  NamespaceId: string | null;
  /** InstanceZoneId 可用区ID */
  InstanceZoneId: string | null;
  /** InstanceImportMode 导入模式 */
  InstanceImportMode: string | null;
  /** ApplicationType应用类型 */
  ApplicationType: string | null;
  /** ApplicationResourceType 资源类型 */
  ApplicationResourceType: string | null;
  /** sidecar状态 */
  ServiceSidecarStatus: string | null;
  /** 部署组名 */
  GroupName: string | null;
  /** NS名 */
  NamespaceName: string | null;
  /** 健康检查原因 */
  Reason: string | null;
  /** agent版本 */
  AgentVersion: string | null;
  /** 容器母机实例ID */
  NodeInstanceId: string | null;
}

/** 容器导入实例高级设置 */
declare interface InstanceAdvancedSettings {
  /** 数据盘挂载点, 默认不挂载数据盘. 已格式化的 ext3，ext4，xfs 文件系统的数据盘将直接挂载，其他文件系统或未格式化的数据盘将自动格式化为ext4 并挂载，请注意备份数据! 无数据盘或有多块数据盘的云主机此设置不生效。注意，注意，多盘场景请使用下方的DataDisks数据结构，设置对应的云盘类型、云盘大小、挂载路径、是否格式化等信息。 */
  MountTarget: string;
  /** dockerd --graph 指定值, 默认为 /var/lib/docker */
  DockerGraphPath: string;
}

/** 包含虚拟机所在TSF中的位置信息 */
declare interface InstanceEnrichedInfo {
  /** 机器ID */
  InstanceId: string | null;
  /** 机器名称 */
  InstanceName: string | null;
  /** 机器内网IP */
  LanIp: string | null;
  /** 机器外网IP */
  WanIp: string | null;
  /** 机器所在VPC */
  VpcId: string | null;
  /** 机器运行状态 Pending Running Stopped Rebooting Starting Stopping Abnormal Unknown */
  InstanceStatus: string | null;
  /** 机器可用状态（表示机器上的Agent在线） */
  InstanceAvailableStatus: string | null;
  /** 应用ID */
  ApplicationId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** 应用类型 */
  ApplicationType: string | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 集群类型 */
  ClusterType: string | null;
  /** 命名空间ID */
  NamespaceId: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 机器所在部署组ID */
  GroupId: string | null;
  /** 部署组名称 */
  GroupName: string | null;
}

/** InstanceEnrichedInfo列表结构 */
declare interface InstanceEnrichedInfoPage {
  /** 总数量 */
  TotalCount: number | null;
  /** 列表 */
  Content: InstanceEnrichedInfo[] | null;
}

/** 服务调用监控指标 */
declare interface InvocationIndicator {
  /** 总请求数 */
  InvocationQuantity: number | null;
  /** 请求成功率，百分比 */
  InvocationSuccessRate: number | null;
  /** 请求平均耗时，单位毫秒 */
  InvocationAvgDuration: number | null;
  /** 成功请求数时间分布 */
  InvocationSuccessDistribution: IndicatorCoord[] | null;
  /** 失败请求数时间分布 */
  InvocationFailedDistribution: IndicatorCoord[] | null;
  /** 状态码分布 */
  InvocationStatusDistribution: IndicatorCoord[] | null;
  /** 时延分布 */
  InvocationDurationDistribution: IndicatorCoord[] | null;
  /** 并发请求次数时间分布 */
  InvocationQuantityDistribution: IndicatorCoord[] | null;
}

/** 监控数据散点图 */
declare interface InvocationMetricScatterPlot {
  /** 时间轴截止时间，GMT，精确到毫秒 */
  EndTime: number;
  /** 时间粒度 */
  StartTime: number;
  /** 时间轴开始时间，GMT，精确到毫秒 */
  Period: number;
  /** 多值数据点集合 */
  DataPoints: MultiValueDataPoints[] | null;
}

/** DescribeJvmMonitor查询jvm监控数据接口返回数据封装 */
declare interface JvmMonitorData {
  /** 堆内存监控图,三条线 */
  HeapMemory?: MemoryPicture | null;
  /** 非堆内存监控图,三条线 */
  NonHeapMemory?: MemoryPicture | null;
  /** 伊甸园区监控图,三条线 */
  EdenSpace?: MemoryPicture | null;
  /** 幸存者区监控图,三条线 */
  SurvivorSpace?: MemoryPicture | null;
  /** 老年代监控图,三条线 */
  OldSpace?: MemoryPicture | null;
  /** 元空间监控图,三条线 */
  MetaSpace?: MemoryPicture | null;
  /** 线程监控图,三条线 */
  ThreadPicture?: ThreadPicture | null;
  /** youngGC增量监控图,一条线 */
  YoungGC?: CurvePoint[] | null;
  /** fullGC增量监控图,一条线 */
  FullGC?: CurvePoint[] | null;
  /** cpu使用率,一条线 */
  CpuUsage?: CurvePoint[] | null;
  /** 加载类数,一条线 */
  ClassCount?: CurvePoint[] | null;
}

/** 投递kafka配置项 */
declare interface KafkaDeliveryConfig {
  /** 配置项id */
  ConfigId: string | null;
  /** 配置名称 */
  ConfigName: string | null;
  /** 采集路径 */
  CollectPath: string[] | null;
  /** kafka vip */
  KafkaVIp: string | null;
  /** kafka vport */
  KafkaVPort: string | null;
  /** kafka topic */
  Topic: string | null;
  /** 换行规则 */
  LineRule: string | null;
  /** 是否需要认证 */
  EnableAuth: boolean | null;
  /** 用户名 */
  Username: string | null;
  /** 密码 */
  Password: string | null;
  /** 投递的topic和path */
  KafkaInfos: DeliveryKafkaInfo[] | null;
  /** 是否应用单行规则 */
  EnableGlobalLineRule: boolean | null;
  /** 自定义分行规则 */
  CustomRule: string | null;
  /** KafkaAddress */
  KafkaAddress?: string | null;
}

/** 泳道部署组 */
declare interface LaneGroup {
  /** 部署组ID */
  GroupId: string | null;
  /** 是否入口应用 */
  Entrance: boolean | null;
  /** 泳道部署组ID */
  LaneGroupId?: string | null;
  /** 泳道ID */
  LaneId?: string | null;
  /** 部署组名 */
  GroupName?: string | null;
  /** 应用ID */
  ApplicationId?: string | null;
  /** 应用名 */
  ApplicationName?: string | null;
  /** 命名空间ID */
  NamespaceId?: string | null;
  /** 命名空间名称 */
  NamespaceName?: string | null;
  /** 创建时间 */
  CreateTime?: number | null;
  /** 更新时间 */
  UpdateTime?: number | null;
  /** 集群类型 */
  ClusterType?: string | null;
}

/** 泳道 */
declare interface LaneInfo {
  /** 泳道ID */
  LaneId: string | null;
  /** 泳道名称 */
  LaneName: string | null;
  /** 泳道备注 */
  Remark: string | null;
  /** 创建时间 */
  CreateTime: number | null;
  /** 更新时间 */
  UpdateTime: number | null;
  /** 泳道部署组 */
  LaneGroupList: LaneGroup[] | null;
  /** 是否入口应用 */
  Entrance: boolean | null;
  /** 泳道已经关联部署组的命名空间列表 */
  NamespaceIdList: string[] | null;
}

/** 泳道分页查询 */
declare interface LaneInfos {
  /** 总数 */
  TotalCount: number | null;
  /** 泳道信息列表 */
  Content: LaneInfo[] | null;
}

/** 泳道规则 */
declare interface LaneRule {
  /** 泳道规则ID */
  RuleId: string | null;
  /** 泳道规则名称 */
  RuleName: string | null;
  /** 优先级 */
  Priority: number | null;
  /** 备注 */
  Remark: string | null;
  /** 泳道规则标签列表 */
  RuleTagList: LaneRuleTag[] | null;
  /** 泳道规则标签关系 */
  RuleTagRelationship: string | null;
  /** 泳道ID */
  LaneId: string | null;
  /** 开启状态 */
  Enable: boolean | null;
  /** 创建时间 */
  CreateTime: number | null;
  /** 更新时间 */
  UpdateTime: number | null;
}

/** 泳道规则标签 */
declare interface LaneRuleTag {
  /** 标签ID */
  TagId: string | null;
  /** 标签名 */
  TagName: string | null;
  /** 标签操作符 */
  TagOperator: string | null;
  /** 标签值 */
  TagValue: string | null;
  /** 泳道规则ID */
  LaneRuleId: string | null;
  /** 创建时间 */
  CreateTime: number | null;
  /** 更新时间 */
  UpdateTime: number | null;
}

/** 泳道规则分页查询 */
declare interface LaneRules {
  /** 总数 */
  TotalCount: number;
  /** 泳道规则列表 */
  Content: LaneRule[];
}

/** Jvm监控内存数据封装 */
declare interface MemoryPicture {
  /** 内存最大值 */
  Max: CurvePoint[];
  /** 已用内存大小 */
  Used: CurvePoint[];
  /** 系统分配内存大小 */
  Committed: CurvePoint[];
}

/** 指标 */
declare interface Metric {
  /** 指标名称 */
  Name?: string | null;
  /** 指标计算方式 */
  Function?: string | null;
}

/** 指标监控数据曲线 */
declare interface MetricDataCurve {
  /** 指标名称 */
  MetricName: string | null;
  /** 指标计算方式 */
  MetricFunction: string | null;
  /** 指标数据点集合 */
  MetricDataPoints: MetricDataPoint[] | null;
}

/** 监控统计数据点 */
declare interface MetricDataPoint {
  /** 数据点键 */
  Key: string | null;
  /** 数据点值 */
  Value: string | null;
  /** 数据点标签 */
  Tag: string | null;
}

/** 监控统计数据点Map集合（单元化网关使用） */
declare interface MetricDataPointMap {
  /** 总调用次数监控数据点集合 */
  SumReqAmount: MetricDataPoint[];
  /** 平均错误率监控数据点集合 */
  AvgFailureRate: MetricDataPoint[];
  /** 平均响应时间监控数据点集合 */
  AvgTimeCost: MetricDataPoint[];
}

/** 单值指标 */
declare interface MetricDataSingleValue {
  /** 指标 */
  MetricName: string | null;
  /** 统计方式 */
  MetricFunction: string | null;
  /** 指标值 */
  MetricDataValue: string | null;
  /** 日环比 */
  DailyPercent: number | null;
}

/** 指标维度 */
declare interface MetricDimension {
  /** 指标维度名称 */
  Name?: string | null;
  /** 指标维度取值 */
  Value?: string | null;
}

/** 指标维度多值匹配 */
declare interface MetricDimensionValue {
  /** 维度名 */
  Name: string;
  /** 维度值 */
  Value: string[];
}

/** 微服务 */
declare interface Microservice {
  /** 微服务ID */
  MicroserviceId?: string | null;
  /** 微服务名称 */
  MicroserviceName?: string | null;
  /** 微服务描述 */
  MicroserviceDesc?: string | null;
  /** 创建时间 */
  CreateTime?: number | null;
  /** 更新时间 */
  UpdateTime?: number | null;
  /** 命名空间ID */
  NamespaceId?: string | null;
  /** 微服务的运行实例数目 */
  RunInstanceCount?: number | null;
  /** 微服务的离线实例数目 */
  CriticalInstanceCount?: number | null;
}

/** 监控概览对象 */
declare interface MonitorOverview {
  /** 近24小时调用数量 */
  InvocationCountOfDay: string | null;
  /** 总调用数量 */
  InvocationCount: string | null;
  /** 近24小时调用错误数量 */
  ErrorCountOfDay: string | null;
  /** 总调用错误数量 */
  ErrorCount: string | null;
  /** 近24小时调用成功率 */
  SuccessRatioOfDay: string | null;
  /** 总调用成功率 */
  SuccessRatio: string | null;
}

/** 微服务API数组 */
declare interface MsApiArray {
  /** API 请求路径 */
  Path: string;
  /** 请求方法 */
  Method: string;
  /** 方法描述 */
  Description: string | null;
  /** API状态 0:离线 1:在线 */
  Status: number | null;
}

/** 微服务实例信息 */
declare interface MsInstance {
  /** 机器实例ID信息 */
  InstanceId: string | null;
  /** 机器实例名称信息 */
  InstanceName: string | null;
  /** 服务运行的端口号 */
  Port: string | null;
  /** 机器实例内网IP */
  LanIp: string | null;
  /** 机器实例外网IP */
  WanIp: string | null;
  /** 机器可用状态 */
  InstanceAvailableStatus: string | null;
  /** 服务运行状态 */
  ServiceInstanceStatus: string | null;
  /** 应用ID */
  ApplicationId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 命名空间ID */
  NamespaceId: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 部署组ID */
  GroupId: string | null;
  /** 部署组名称 */
  GroupName: string | null;
  /** 机器TSF可用状态 */
  InstanceStatus: string | null;
  /** 健康检查URL */
  HealthCheckUrl: string | null;
  /** 集群类型 */
  ClusterType: string | null;
  /** 应用程序包版本 */
  ApplicationPackageVersion: string | null;
  /** 应用类型 */
  ApplicationType: string | null;
  /** 服务状态，passing 在线，critical 离线 */
  ServiceStatus: string | null;
  /** 注册时间 */
  RegistrationTime: number | null;
  /** 上次心跳时间 */
  LastHeartbeatTime: number | null;
  /** 实例注册id */
  RegistrationId: string | null;
  /** 屏蔽状态，hidden 为屏蔽，unhidden 为未屏蔽 */
  HiddenStatus: string | null;
}

/** 多值数据 */
declare interface MultiValue {
  /** 数据点 */
  Values?: number[] | null;
}

/** 多值数据点集合 */
declare interface MultiValueDataPoints {
  /** 多值数据点 */
  Points: MultiValue[];
  /** 指标名称 */
  MetricName: string;
  /** 多值数据点key列表，每个值表示当前数据点所在区域的下限 */
  PointKeys: string[];
}

/** 命名空间 */
declare interface Namespace {
  /** 命名空间ID */
  NamespaceId: string | null;
  /** 命名空间编码 */
  NamespaceCode: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 命名空间描述 */
  NamespaceDesc: string | null;
  /** 默认命名空间 */
  IsDefault: string | null;
  /** 命名空间状态 */
  NamespaceStatus: string | null;
  /** 删除标识 */
  DeleteFlag: boolean | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 集群数组，仅携带集群ID，集群名称，集群类型等基础信息。 */
  ClusterList: Cluster[] | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 集群资源类型 */
  NamespaceResourceType: string | null;
  /** 命名空间类型 */
  NamespaceType: string | null;
  /** 是否开启高可用 */
  IsHaEnable: string | null;
  /** KubeInjectEnable值 */
  KubeInjectEnable: boolean | null;
}

/** 提供给前端，控制按钮是否显示 */
declare interface OperationInfo {
  /** 初始化按钮的控制信息 */
  Init: OperationInfoDetail | null;
  /** 添加实例按钮的控制信息 */
  AddInstance: OperationInfoDetail | null;
  /** 销毁机器的控制信息 */
  Destroy: OperationInfoDetail | null;
}

/** 提供给前端控制按钮显示逻辑的字段 */
declare interface OperationInfoDetail {
  /** 不显示的原因 */
  DisabledReason: string | null;
  /** 该按钮是否可点击 */
  Enabled: boolean | null;
  /** 是否显示该按钮 */
  Supported: boolean | null;
}

/** TSF基本资源信息概览 */
declare interface OverviewBasicResourceUsage {
  /** 应用总数 */
  ApplicationCount: number | null;
  /** 命名空间总数 */
  NamespaceCount: number | null;
  /** 部署组个数 */
  GroupCount: number | null;
  /** 程序包存储空间用量，单位字节 */
  PackageSpaceUsed: number | null;
  /** 已注册实例数 */
  ConsulInstanceCount: number | null;
}

/** tsf-privilege模块，分页数据集列表 */
declare interface PagedProgram {
  /** 总条数 */
  TotalCount: number;
  /** 数据集列表 */
  Content: Program[];
}

/** 路径重写 */
declare interface PathRewrite {
  /** 路径重写规则ID */
  PathRewriteId: string;
  /** 网关部署组ID */
  GatewayGroupId: string;
  /** 正则表达式 */
  Regex: string;
  /** 替换的内容 */
  Replacement: string;
  /** 是否屏蔽映射后路径，Y: 是 N: 否 */
  Blocked: string;
  /** 规则顺序，越小优先级越高 */
  Order: number;
}

/** 路径重写创建对象 */
declare interface PathRewriteCreateObject {
  /** 网关部署组ID */
  GatewayGroupId: string;
  /** 正则表达式 */
  Regex: string;
  /** 替换的内容 */
  Replacement: string;
  /** 是否屏蔽映射后路径，Y: 是 N: 否 */
  Blocked: string;
  /** 规则顺序，越小优先级越高 */
  Order: number;
}

/** 路径重写翻页对象 */
declare interface PathRewritePage {
  /** 总记录数 */
  TotalCount: number;
  /** 路径重写规则列表 */
  Content: PathRewrite[];
}

/** 描述程序包关联信息 */
declare interface PkgBind {
  /** 应用id */
  ApplicationId: string | null;
  /** 部署组id */
  GroupId: string | null;
}

/** 包信息 */
declare interface PkgInfo {
  /** 程序包ID */
  PkgId: string | null;
  /** 程序包名 */
  PkgName: string | null;
  /** 程序包类型 */
  PkgType: string | null;
  /** 程序包版本 */
  PkgVersion: string | null;
  /** 程序包描述 */
  PkgDesc: string | null;
  /** 上传时间 */
  UploadTime: string | null;
  /** 程序包MD5 */
  Md5: string | null;
  /** 程序包状态 */
  PkgPubStatus: number | null;
  /** 程序包关联关系 */
  PkgBindInfo: PkgBind[] | null;
}

/** 包列表 */
declare interface PkgList {
  /** 程序包总量 */
  TotalCount: number;
  /** 程序包信息列表 */
  Content: PkgInfo[] | null;
  /** 程序包仓库id */
  RepositoryId: string | null;
  /** 程序包仓库类型 */
  RepositoryType: string | null;
  /** 程序包仓库名称 */
  RepositoryName: string | null;
}

/** 服务端口 */
declare interface Ports {
  /** 服务端口 */
  TargetPort: number;
  /** 端口协议 */
  Protocol: string;
}

/** tsf-privilege模块 Program数据集 */
declare interface Program {
  /** 数据集ID */
  ProgramId?: string | null;
  /** 数据集名称 */
  ProgramName?: string | null;
  /** 数据集描述 */
  ProgramDesc?: string | null;
  /** 删除标识，true: 可以删除; false: 不可删除 */
  DeleteFlag?: boolean | null;
  /** 创建时间 */
  CreationTime?: number | null;
  /** 最后更新时间 */
  LastUpdateTime?: number | null;
  /** 数据项列表，无值时返回空数组 */
  ProgramItemList?: ProgramItem[] | null;
}

/** tsf-privilege模块，数据项 */
declare interface ProgramItem {
  /** 数据项ID */
  ProgramItemId?: string | null;
  /** 资源 */
  Resource?: Resource | null;
  /** 数据值列表 */
  ValueList?: string[] | null;
  /** 全选标识，true: 全选；false: 非全选 */
  IsAll?: boolean | null;
  /** 创建时间 */
  CreationTime?: number | null;
  /** 最后更新时间 */
  LastUpdateTime?: number | null;
  /** 删除标识，true: 可删除；false: 不可删除 */
  DeleteFlag?: boolean | null;
  /** 数据集ID */
  ProgramId?: string | null;
}

/** 属性字段 */
declare interface PropertyField {
  /** 属性名称 */
  Name: string;
  /** 属性类型 */
  Type: string;
  /** 属性描述 */
  Description: string | null;
}

/** 端口对象 */
declare interface ProtocolPort {
  /** TCP UDP */
  Protocol: string;
  /** 服务端口 */
  Port: number;
  /** 容器端口 */
  TargetPort: number;
  /** 主机端口 */
  NodePort?: number | null;
}

/** 分位数据模型 */
declare interface QuantileEntity {
  /** 最大值 */
  MaxValue: string | null;
  /** 最小值 */
  MinValue: string | null;
  /** 五分位值 */
  FifthPositionValue: string | null;
  /** 九分位值 */
  NinthPositionValue: string | null;
}

/** 仓库信息 */
declare interface RepositoryInfo {
  /** 仓库ID */
  RepositoryId: string;
  /** 仓库名称 */
  RepositoryName: string | null;
  /** 仓库类型（默认仓库：default，私有仓库：private） */
  RepositoryType: string | null;
  /** 仓库描述 */
  RepositoryDesc: string | null;
  /** 仓库是否正在被使用 */
  IsUsed: boolean | null;
  /** 仓库创建时间 */
  CreateTime: string | null;
  /** 仓库桶名称 */
  BucketName: string | null;
  /** 仓库桶所在地域 */
  BucketRegion: string | null;
  /** 仓库目录 */
  Directory: string | null;
}

/** 仓库列表 */
declare interface RepositoryList {
  /** 仓库总量 */
  TotalCount: number;
  /** 仓库信息列表 */
  Content: RepositoryInfo[] | null;
}

/** tsf-privilege 模块，资源 */
declare interface Resource {
  /** 资源ID */
  ResourceId?: string | null;
  /** 资源编码 */
  ResourceCode?: string | null;
  /** 资源名称 */
  ResourceName?: string | null;
  /** 资源所属产品编码 */
  ServiceCode?: string | null;
  /** 选取资源使用的Action */
  ResourceAction?: string | null;
  /** 资源数据查询的ID字段名 */
  IdField?: string | null;
  /** 资源数据查询的名称字段名 */
  NameField?: string | null;
  /** 资源数据查询的ID过滤字段名 */
  SelectIdsField?: string | null;
  /** 创建时间 */
  CreationTime?: number | null;
  /** 最后更新时间 */
  LastUpdateTime?: number | null;
  /** 删除标识 */
  DeleteFlag?: boolean | null;
  /** 资源描述 */
  ResourceDesc?: string | null;
  /** 是否可以选择全部 */
  CanSelectAll?: boolean | null;
  /** 资源数据查询的模糊查询字段名 */
  SearchWordField?: string | null;
  /** 排序 */
  Index?: number | null;
}

/** k8s env 的 ResourceFieldRef */
declare interface ResourceFieldRef {
  /** k8s 的 Resource */
  Resource?: string | null;
}

/** 资源任务转态结果 */
declare interface ResourceTaskStatusResult {
  /** 任务的执行状态 */
  TaskStatus: number | null;
}

/** ScalableRule值 */
declare interface ScalableRule {
  /** RuleId值 */
  RuleId?: string | null;
  /** Name值 */
  Name?: string | null;
  /** ExpandVmCountLimit值 */
  ExpandVmCountLimit?: number | null;
  /** ShrinkVmCountLimit值 */
  ShrinkVmCountLimit?: number | null;
  /** GroupCount值 */
  GroupCount?: number | null;
  /** 备注 */
  Desc?: string | null;
  /** 备注 */
  Description?: string | null;
  /** 是否关闭指标伸缩, 默认0, 0:打开指标伸缩 1:关闭指标伸缩 */
  DisableMetricAS?: number | null;
  /** 开启定时伸缩规则, 默认0, 0:关闭定时伸缩 1:开启定时伸缩 */
  EnableCronAS?: number | null;
}

/** tsf 容器集群节点调度策略 */
declare interface SchedulingStrategy {
  /** NONE：不使用调度策略；CROSS_AZ：跨可用区部署 */
  Type: string | null;
}

/** 服务配置 */
declare interface ServiceConfig {
  /** 服务名 */
  Name: string;
  /** 端口信息列表 */
  Ports: Ports[];
  /** 健康检查配置 */
  HealthCheck?: HealthCheckConfig | null;
}

/** 容器网络设置。 */
declare interface ServiceSetting {
  /** 0:公网, 1:集群内访问, 2：NodePort, 3: VPC 内网访问 */
  AccessType: number | null;
  /** 容器端口映射 */
  ProtocolPorts: ProtocolPort[] | null;
  /** 子网ID */
  SubnetId: string | null;
  /** 是否创建 k8s service，默认为 false */
  DisableService?: boolean | null;
  /** service 是否为 headless 类型 */
  HeadlessService?: boolean | null;
  /** 当为 true 且 DisableService 也为 true 时，会删除之前创建的 service，请小心使用 */
  AllowDeleteService?: boolean | null;
  /** 开启SessionAffinity，true为开启，false为不开启，默认为false */
  OpenSessionAffinity?: boolean | null;
  /** SessionAffinity会话时间，默认10800 */
  SessionAffinityTimeoutSeconds?: number | null;
}

/** 服务统计结果 */
declare interface ServiceStatisticsResult {
  /** 请求模版路径:type为接口时返回，服务时不返回 */
  Path?: string | null;
  /** 请求方法:type为接口时返回，服务时不返回 */
  Method?: string | null;
  /** 微服务Id */
  MicroserviceId?: string;
  /** 微服务名称 */
  MicroserviceName?: string;
  /** 请求数 */
  RequestCount?: number;
  /** 请求错误率，不带百分号 */
  ErrorRate?: number;
  /** 平均响应耗时ms */
  AvgTimeConsuming?: number;
  /** 响应耗时曲线 */
  MetricDataCurves?: MetricDataCurve[];
  /** 实例id */
  InstanceId?: string | null;
  /** 实例name */
  InstanceName?: string | null;
  /** 部署组id */
  GroupId?: string | null;
  /** 部署组name */
  GroupName?: string | null;
  /** 部署组类型 */
  ClusterType?: string | null;
  /** 部署组是否存在 */
  GroupExist?: number | null;
  /** 实例是否存在，仅限cvm */
  InstanceExist?: number | null;
  /** 应用id */
  ApplicationId?: string | null;
  /** 微服务类型 */
  MicroserviceType?: string | null;
  /** cpu使用率 */
  CpuPercent?: number | null;
  /** 已用堆大小,单位KB */
  HeapUsed?: number | null;
  /** 数据库 */
  DbName?: string | null;
  /** Script值 */
  Script?: string | null;
  /** 数据库类型 */
  DbType?: string | null;
  /** Apdex值 */
  Apdex?: number | null;
  /** Qps值 */
  Qps?: number | null;
  /** 实例在线数 */
  InstanceOnlineCount?: number | null;
  /** 实例总数 */
  InstanceTotalCount?: number | null;
  /** normal/error */
  Status?: string | null;
  /** normal/warn/error */
  ErrorRateLevel?: string | null;
  /** normal/warn/error */
  AvgTimeConsumingLevel?: string | null;
  /** normal/warn/error */
  ApdexLevel?: string | null;
}

/** 服务统计结果集 */
declare interface ServiceStatisticsResults {
  /** 返回结果 */
  Content: ServiceStatisticsResult[] | null;
  /** 条数 */
  TotalCount: number | null;
}

/** 分片参数 */
declare interface ShardArgument {
  /** 分片参数 KEY，整形, 范围 [1,1000] */
  ShardKey: number;
  /** 分片参数 VALUE */
  ShardValue: string | null;
}

/** 简单应用 */
declare interface SimpleApplication {
  /** 应用ID */
  ApplicationId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** 应用类型 */
  ApplicationType: string | null;
  /** 应用微服务类型 */
  MicroserviceType: string | null;
  /** ApplicationDesc */
  ApplicationDesc: string | null;
  /** ProgLang */
  ProgLang: string | null;
  /** ApplicationResourceType */
  ApplicationResourceType: string | null;
  /** CreateTime */
  CreateTime: string | null;
  /** UpdateTime */
  UpdateTime: string | null;
  /** ApigatewayServiceId */
  ApigatewayServiceId: string | null;
  /** ApplicationRuntimeType */
  ApplicationRuntimeType: string | null;
}

/** 部署组 */
declare interface SimpleGroup {
  /** 部署组ID */
  GroupId: string | null;
  /** 部署组名称 */
  GroupName: string | null;
  /** 应用ID */
  ApplicationId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** 应用类型 */
  ApplicationType: string | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 集群类型 */
  ClusterType: string | null;
  /** 命名空间ID */
  NamespaceId: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 启动参数 */
  StartupParameters: string | null;
  /** 部署组资源类型 */
  GroupResourceType: string | null;
  /** 应用微服务类型 */
  AppMicroServiceType: string | null;
}

/** 日志投递kafka配置描述的缩简版 */
declare interface SimpleKafkaDeliveryConfig {
  /** 配置项id */
  ConfigId: string | null;
  /** 配置项名称 */
  ConfigName: string | null;
}

/** 标准输出日志 */
declare interface StdoutLogV2 {
  /** 实例ID */
  InstanceId: string | null;
  /** 日志内容 */
  Content: string | null;
  /** 日志时间戳 */
  Timestamp: number | null;
  /** 实例IP */
  InstanceIp: string | null;
}

/** 工作流图中的边 */
declare interface TaskFlowEdge {
  /** 节点 ID */
  NodeId: string;
  /** 子节点 ID */
  ChildNodeId: string | null;
  /** 是否核心任务,Y/N */
  CoreNode: string | null;
  /** 边类型 */
  EdgeType: string | null;
  /** 任务节点类型 */
  NodeType: string;
  /** X轴坐标位置 */
  PositionX: string | null;
  /** Y轴坐标位置 */
  PositionY: string | null;
  /** 图 ID */
  GraphId: string | null;
  /** 工作流 ID */
  FlowId: string | null;
  /** 节点名称 */
  NodeName: string | null;
  /** 任务ID */
  TaskId: string | null;
  /** 任务历史ID */
  TaskLogId: string | null;
}

/** 工作流最近批次的状态 */
declare interface TaskFlowLastBatchState {
  /** 批次ID */
  FlowBatchId: string | null;
  /** 批次历史ID */
  FlowBatchLogId: string | null;
  /** 状态,WAITING/SUCCESS/FAILED/RUNNING/TERMINATING */
  State: string | null;
}

/** 任务id */
declare interface TaskId {
  /** 任务ID */
  TaskId: string | null;
}

/** 任务最近一次执行状态 */
declare interface TaskLastExecuteStatus {
  /** 批次ID */
  BatchId: string | null;
  /** 运行状态，RUNNING/SUCCESS/FAIL/HALF/TERMINATED */
  State: string | null;
  /** 批次历史ID */
  BatchLogId: string | null;
}

/** 任务定义 */
declare interface TaskRecord {
  /** 任务名称 */
  TaskName: string;
  /** 任务类型 */
  TaskType: string;
  /** 执行类型 */
  ExecuteType: string;
  /** 任务内容，长度限制65535字节 */
  TaskContent?: string;
  /** 分组ID */
  GroupId?: string;
  /** 超时时间 */
  TimeOut: number;
  /** 重试次数 */
  RetryCount?: number | null;
  /** 重试间隔 */
  RetryInterval?: number | null;
  /** 触发规则 */
  TaskRule: TaskRule;
  /** 是否启用任务,ENABLED/DISABLED */
  TaskState: string;
  /** 任务ID */
  TaskId: string;
  /** 判断任务成功的操作符 */
  SuccessOperator: string | null;
  /** 判断任务成功的阈值 */
  SuccessRatio: number | null;
  /** 分片数量 */
  ShardCount: number | null;
  /** 高级设置 */
  AdvanceSettings: AdvanceSettings | null;
  /** 分片参数 */
  ShardArguments: ShardArgument[] | null;
  /** 所属工作流ID */
  BelongFlowIds: string[] | null;
  /** 任务历史ID */
  TaskLogId: string | null;
  /** 触发类型 */
  TriggerType: string | null;
  /** 任务参数，长度限制10000个字符 */
  TaskArgument: string | null;
}

/** 翻页查询的任务记录返回 */
declare interface TaskRecordPage {
  /** 总数量 */
  TotalCount: number;
  /** 任务记录列表 */
  Content: TaskRecord[];
}

/** 任务规则 */
declare interface TaskRule {
  /** 触发规则类型, Cron/Repeat */
  RuleType: string;
  /** Cron类型规则，cron表达式。 */
  Expression?: string | null;
  /** 时间间隔， 单位毫秒 */
  RepeatInterval?: number | null;
}

/** tcr仓库信息 */
declare interface TcrRepoInfo {
  /** 地域（填数字） */
  Region?: string | null;
  /** 实例id */
  RegistryId?: string | null;
  /** 实例名 */
  RegistryName?: string | null;
  /** 命名空间 */
  Namespace?: string | null;
  /** 仓库名 */
  RepoName?: string | null;
}

/** jvm监控数据线程数据封装 */
declare interface ThreadPicture {
  /** 总线程数 */
  ThreadCount: CurvePoint[];
  /** 活跃线程数 */
  ThreadActive: CurvePoint[];
  /** 守护线程数 */
  DeamonThreadCount: CurvePoint[];
}

/** 配置中心 */
declare interface TsfConfigCenter {
  /** 配置中心类型 */
  ConfigType?: string | null;
  /** 配置中心实例id */
  ConfigCenterInstanceId?: string | null;
  /** 配置中心实例名称 */
  ConfigCenterInstanceName?: string | null;
  /** 实例地域id */
  RegionId?: string | null;
  /** 命名空间id */
  NamespaceId?: string | null;
}

/** ApiDetailInfo 翻页对象 */
declare interface TsfPageApiDetailInfo {
  /** 总记录数 */
  TotalCount: number;
  /** API 信息列表 */
  Content: ApiDetailInfo[];
}

/** ApiGroupInfo翻页结构体 */
declare interface TsfPageApiGroupInfo {
  /** 总记录数 */
  TotalCount: number;
  /** API分组信息 */
  Content: ApiGroupInfo[];
}

/** 应用分页信息 */
declare interface TsfPageApplication {
  /** 应用总数目 */
  TotalCount: number | null;
  /** 应用信息列表 */
  Content: ApplicationForPage[] | null;
}

/** 业务日志配置项列表 */
declare interface TsfPageBusinessLogConfig {
  /** 总条数 */
  TotalCount: number | null;
  /** 业务日志配置项列表 */
  Content: BusinessLogConfig[] | null;
}

/** 业务日志列表 */
declare interface TsfPageBusinessLogV2 {
  /** 总条数 */
  TotalCount: number | null;
  /** 业务日志列表 */
  Content: BusinessLogV2[] | null;
  /** 游标ID */
  ScrollId: string | null;
  /** 查询状态 */
  Status: string | null;
}

/** Tsf分页集群对象 */
declare interface TsfPageCluster {
  /** 总条数 */
  TotalCount: number | null;
  /** 集群列表 */
  Content: Cluster[] | null;
}

/** Tsf分页集群对象 */
declare interface TsfPageClusterV2 {
  /** 集群总数目 */
  TotalCount: number | null;
  /** 集群列表 */
  Content: ClusterV2[] | null;
}

/** TsfPage */
declare interface TsfPageConfig {
  /** TsfPageConfig */
  TotalCount: number;
  /** 配置项列表 */
  Content: Config[];
}

/** TSF配置项发布信息分页对象 */
declare interface TsfPageConfigRelease {
  /** 总条数 */
  TotalCount: number | null;
  /** 配置项发布信息数组 */
  Content: ConfigRelease[] | null;
}

/** TSF配置项发布日志分页对象 */
declare interface TsfPageConfigReleaseLog {
  /** 总条数 */
  TotalCount: number | null;
  /** 配置项发布日志数组 */
  Content: ConfigReleaseLog[] | null;
}

/** 分页的 ContainerEvent */
declare interface TsfPageContainerEvent {
  /** 返回个数 */
  TotalCount: number;
  /** events 数组 */
  Content: ContainerEvent[];
}

/** 维度分页 */
declare interface TsfPageDimension {
  /** 总数 */
  TotalCount: number;
  /** 维度 */
  Content: string[];
}

/** 文件配置项列表 */
declare interface TsfPageFileConfig {
  /** 总数目 */
  TotalCount: number | null;
  /** 文件配置数组 */
  Content: FileConfig[] | null;
}

/** 文件配置项发布信息列表 */
declare interface TsfPageFileConfigRelease {
  /** 数量 */
  TotalCount: number | null;
  /** 列表 */
  Content: FileConfigRelease[] | null;
}

/** GatewayDeployGroup 翻页对象 */
declare interface TsfPageGatewayDeployGroup {
  /** 记录总数 */
  TotalCount: number;
  /** 记录实体列表 */
  Content: GatewayDeployGroup[];
}

/** GatewayPlugin 翻页对象 */
declare interface TsfPageGatewayPlugin {
  /** 记录总数 */
  TotalCount: number | null;
  /** 记录实体列表 */
  Content: GatewayPlugin[] | null;
}

/** TSF机器实例分页对象 */
declare interface TsfPageInstance {
  /** 机器实例总数目 */
  TotalCount: number | null;
  /** 机器实例列表 */
  Content: Instance[] | null;
}

/** 微服务列表信息 */
declare interface TsfPageMicroservice {
  /** 微服务总数目 */
  TotalCount: number | null;
  /** 微服务列表信息 */
  Content: Microservice[] | null;
}

/** 微服务实例的分页内容 */
declare interface TsfPageMsInstance {
  /** 微服务实例总数目 */
  TotalCount: number | null;
  /** 微服务实例列表内容 */
  Content: MsInstance[] | null;
}

/** Tsf命名空间分页对象 */
declare interface TsfPageNamespace {
  /** 命名空间总条数 */
  TotalCount: number | null;
  /** 命名空间列表 */
  Content: Namespace[] | null;
}

/** TSF分页简单应用对象 */
declare interface TsfPageSimpleApplication {
  /** 总条数 */
  TotalCount: number | null;
  /** 简单应用列表 */
  Content: SimpleApplication[] | null;
}

/** TSF简单部署组分页列表 */
declare interface TsfPageSimpleGroup {
  /** 总条数 */
  TotalCount: number | null;
  /** 简单部署组列表 */
  Content: SimpleGroup[] | null;
}

/** 标准输出日志列表 */
declare interface TsfPageStdoutLogV2 {
  /** 总条数 */
  TotalCount: number | null;
  /** 标准输出日志列表 */
  Content: StdoutLogV2[] | null;
  /** 游标ID */
  ScrollId: string | null;
  /** 查询状态 */
  Status: string | null;
}

/** 单元化命名空间翻页对象 */
declare interface TsfPageUnitNamespace {
  /** 记录总数 */
  TotalCount: number;
  /** 记录实体列表 */
  Content: UnitNamespace[];
}

/** 单元化规则翻页对象 */
declare interface TsfPageUnitRule {
  /** 记录总数 */
  TotalCount: number;
  /** 记录实体列表 */
  Content: UnitRule[];
}

/** 单元化规则翻页对象 */
declare interface TsfPageUnitRuleV2 {
  /** 记录总数 */
  TotalCount: number | null;
  /** 记录实体列表 */
  Content: UnitRule[] | null;
}

/** 列表中部署组分页信息 */
declare interface TsfPageVmGroup {
  /** 虚拟机部署组总数目 */
  TotalCount: number | null;
  /** 虚拟机部署组列表信息 */
  Content: VmGroupSimple[] | null;
}

/** 微服务网关单元化命名空间 */
declare interface UnitNamespace {
  /** 命名空间ID */
  NamespaceId: string;
  /** 命名空间Name */
  NamespaceName: string;
  /** 单元化命名空间ID */
  Id?: string | null;
  /** 网关实体ID */
  GatewayInstanceId?: string | null;
  /** 创建时间 */
  CreatedTime?: string | null;
  /** 更新时间 */
  UpdatedTime?: string | null;
}

/** 微服务网关单元化规则 */
declare interface UnitRule {
  /** 规则名称 */
  Name: string;
  /** 规则ID */
  Id?: string | null;
  /** 网关实体ID */
  GatewayInstanceId?: string | null;
  /** 规则描述 */
  Description?: string | null;
  /** 使用状态：enabled/disabled */
  Status?: string | null;
  /** 规则项列表 */
  UnitRuleItemList?: UnitRuleItem[] | null;
  /** CreatedTime */
  CreatedTime?: string | null;
  /** UpdatedTime */
  UpdatedTime?: string | null;
}

/** 微服务网关单元化规则项 */
declare interface UnitRuleItem {
  /** 逻辑关系：AND/OR */
  Relationship: string;
  /** 目的地命名空间ID */
  DestNamespaceId: string;
  /** 目的地命名空间名称 */
  DestNamespaceName: string;
  /** 规则项名称 */
  Name: string;
  /** 规则项ID */
  Id?: string | null;
  /** 单元化规则ID */
  UnitRuleId?: string | null;
  /** 规则顺序，越小优先级越高：默认为0 */
  Priority?: number | null;
  /** 规则描述 */
  Description?: string | null;
  /** 规则标签列表 */
  UnitRuleTagList?: UnitRuleTag[] | null;
  /** 规则项索引 */
  ItemIndex?: number | null;
  /** 创建时间 */
  CreatedTime?: string | null;
  /** 修改时间 */
  UpdatedTime?: string | null;
}

/** 微服务网关单元化规则标签 */
declare interface UnitRuleTag {
  /** 标签类型 : U(用户标签)/S(系统标签) */
  TagType: string;
  /** 标签名 */
  TagField: string;
  /** 操作符:IN/NOT_IN/EQUAL/NOT_EQUAL/REGEX */
  TagOperator: string;
  /** 标签值 */
  TagValue: string;
  /** 单元化规则项ID */
  UnitRuleItemId?: string | null;
  /** 规则ID */
  Id?: string | null;
}

/** k8s env 的 ValueFrom */
declare interface ValueFrom {
  /** k8s env 的 FieldRef */
  FieldRef?: FieldRef | null;
  /** k8s env 的 ResourceFieldRef */
  ResourceFieldRef?: ResourceFieldRef | null;
}

/** 虚拟机部署组信息 */
declare interface VmGroup {
  /** 部署组ID */
  GroupId?: string | null;
  /** 部署组名称 */
  GroupName?: string | null;
  /** 部署组状态 */
  GroupStatus?: string | null;
  /** 程序包ID */
  PackageId?: string | null;
  /** 程序包名称 */
  PackageName?: string | null;
  /** 程序包版本号 */
  PackageVersion?: string | null;
  /** 集群ID */
  ClusterId?: string | null;
  /** 集群名称 */
  ClusterName?: string | null;
  /** 命名空间ID */
  NamespaceId?: string | null;
  /** 命名空间名称 */
  NamespaceName?: string | null;
  /** 应用ID */
  ApplicationId?: string | null;
  /** 应用名称 */
  ApplicationName?: string | null;
  /** 部署组机器数目 */
  InstanceCount?: number | null;
  /** 部署组运行中机器数目 */
  RunInstanceCount?: number | null;
  /** 部署组启动参数信息 */
  StartupParameters?: string | null;
  /** 部署组创建时间 */
  CreateTime?: string | null;
  /** 部署组更新时间 */
  UpdateTime?: string | null;
  /** 部署组停止机器数目 */
  OffInstanceCount?: number | null;
  /** 部署组描述信息 */
  GroupDesc?: string | null;
  /** 微服务类型 */
  MicroserviceType?: string | null;
  /** 应用类型 */
  ApplicationType?: string | null;
  /** 部署组资源类型 */
  GroupResourceType?: string | null;
  /** 部署组更新时间戳 */
  UpdatedTime?: number | null;
  /** 部署应用描述信息 */
  DeployDesc?: string | null;
  /** 滚动发布的更新方式 */
  UpdateType?: number | null;
  /** 发布是否启用beta批次 */
  DeployBetaEnable?: boolean | null;
  /** 滚动发布的批次比例列表 */
  DeployBatch?: number[] | null;
  /** 滚动发布的批次执行方式 */
  DeployExeMode?: string | null;
  /** 滚动发布的每个批次的等待时间 */
  DeployWaitTime?: number | null;
  /** 是否开启了健康检查 */
  EnableHealthCheck?: boolean | null;
  /** 健康检查配置 */
  HealthCheckSettings?: HealthCheckSettings | null;
  /** 程序包类型 */
  PackageType?: string | null;
  /** 启动脚本 base64编码 */
  StartScript?: string | null;
  /** 停止脚本 base64编码 */
  StopScript?: string | null;
  /** 部署组备注 */
  Alias?: string | null;
  /** javaagent信息 */
  AgentProfileList?: AgentProfile[] | null;
  /** 预热属性配置 */
  WarmupSetting?: WarmupSetting | null;
  /** Envoy网关配置 */
  GatewayConfig?: GatewayConfig | null;
  /** 批次是否开启健康检查 */
  EnableBatchHealthCheck?: boolean | null;
}

/** 虚拟机部署组其他字段 */
declare interface VmGroupOther {
  /** 部署组ID */
  GroupId: string | null;
  /** 程序包ID */
  PackageId: string | null;
  /** 程序包名称 */
  PackageName: string | null;
  /** 程序包版本 */
  PackageVersion: string | null;
  /** 部署组实例数 */
  InstanceCount: number | null;
  /** 部署组运行中实例数 */
  RunInstanceCount: number | null;
  /** 部署组中停止实例数 */
  OffInstanceCount: number | null;
  /** 部署组状态 */
  GroupStatus: string | null;
  /** 服务配置信息是否匹配 */
  IsNotEqualServiceConfig: boolean | null;
  /** HealthCheckSettings */
  HealthCheckSettings?: HealthCheckSettings | null;
}

/** 虚拟机部署组列表简要字段 */
declare interface VmGroupSimple {
  /** 部署组ID */
  GroupId: string | null;
  /** 部署组名称 */
  GroupName: string | null;
  /** 应用类型 */
  ApplicationType: string | null;
  /** 部署组描述 */
  GroupDesc: string | null;
  /** 部署组更新时间 */
  UpdateTime: string | null;
  /** 集群ID */
  ClusterId: string | null;
  /** 部署组启动参数 */
  StartupParameters: string | null;
  /** 命名空间ID */
  NamespaceId: string | null;
  /** 部署组创建时间 */
  CreateTime: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 应用ID */
  ApplicationId: string | null;
  /** 应用名称 */
  ApplicationName: string | null;
  /** 命名空间名称 */
  NamespaceName: string | null;
  /** 应用微服务类型 */
  MicroserviceType: string | null;
  /** 部署组资源类型 */
  GroupResourceType: string | null;
  /** 部署组更新时间戳 */
  UpdatedTime: number | null;
  /** 部署应用描述信息 */
  DeployDesc: string | null;
  /** 部署组备注 */
  Alias: string | null;
}

/** 容器卷挂载信息 */
declare interface VolumeInfo {
  /** 数据卷类型 */
  VolumeType: string;
  /** 数据卷名称 */
  VolumeName: string;
  /** 数据卷配置 */
  VolumeConfig?: string;
}

/** 容器卷挂载点信息 */
declare interface VolumeMountInfo {
  /** 挂载数据卷名称 */
  VolumeMountName: string;
  /** 挂载路径 */
  VolumeMountPath: string;
  /** 挂载子路径 */
  VolumeMountSubPath?: string;
  /** 读写，1：读 2：读写 */
  ReadOrWrite?: string;
}

/** 预热配置 */
declare interface WarmupSetting {
  /** 是否开启预热 */
  Enabled?: boolean;
  /** 预热时间 */
  WarmupTime?: number;
  /** 预热曲率，取值 1~5 */
  Curvature?: number;
  /** 是否开启预热保护，在开启保护的情况下，超过 50% 的节点处于预热中，则会中止预热 */
  EnabledProtection?: boolean;
}

declare interface AddClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 云主机ID列表 */
  InstanceIdList: string[];
  /** 操作系统名称 */
  OsName?: string;
  /** 操作系统镜像ID */
  ImageId?: string;
  /** 重装系统密码设置 */
  Password?: string;
  /** 重装系统，关联密钥设置 */
  KeyId?: string;
  /** 安全组设置 */
  SgId?: string;
  /** 云主机导入方式，虚拟机集群必填，容器集群不填写此字段，R：重装TSF系统镜像，M：手动安装agent */
  InstanceImportMode?: string;
  /** 镜像定制类型 */
  OsCustomizeType?: string;
  /** 镜像特征ID列表 */
  FeatureIdList?: string[];
  /** 实例额外需要设置参数信息 */
  InstanceAdvancedSettings?: InstanceAdvancedSettings;
  /** 安全组 ID 列表 */
  SecurityGroupIds?: string[];
}

declare interface AddClusterInstancesResponse {
  /** 添加云主机的返回列表 */
  Result: AddInstanceResult | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 云主机ID列表 */
  InstanceIdList: string[];
  /** 操作系统名称 */
  OsName?: string;
  /** 操作系统镜像ID */
  ImageId?: string;
  /** 重装系统密码设置 */
  Password?: string;
  /** 重装系统，关联密钥设置 */
  KeyId?: string;
  /** 安全组设置 */
  SgId?: string;
  /** 云主机导入方式，虚拟机集群必填，容器集群不填写此字段，R：重装TSF系统镜像，M：手动安装agent */
  InstanceImportMode?: string;
  /** 安全组id */
  SecurityGroupIds?: string;
}

declare interface AddInstancesResponse {
  /** 添加云主机是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApiDetailResponse {
  /** API 请求参数 */
  Request: ApiRequestDescr[];
  /** API 响应参数 */
  Response: ApiResponseDescr[] | null;
  /** API 复杂结构定义 */
  Definitions: ApiDefinitionDescr[];
  /** API 的 content type */
  RequestContentType: string | null;
  /** API 能否调试 */
  CanRun: boolean | null;
  /** API 状态 0:离线 1:在线，默认0 */
  Status: number | null;
  /** API 描述 */
  Description: string | null;
}

declare interface AssociateBusinessLogConfigRequest {
  /** TSF分组ID */
  GroupId: string;
  /** 日志配置项ID列表 */
  ConfigIdList?: string[];
}

declare interface AssociateBusinessLogConfigResponse {
  /** 操作结果 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateConfigWithGroupRequest {
  /** 配置项id */
  ConfigId: string;
  /** 部署组信息 */
  Groups?: GroupInfo[];
  /** 是否选择全部投递，1 表示全部，0或不填表示非全部 */
  SelectAll?: number;
  /** 命名空间id */
  NamespaceId?: string;
  /** 集群id */
  ClusterId?: string;
  /** 模糊搜索关键词 */
  SearchWord?: string;
}

declare interface AssociateConfigWithGroupResponse {
  /** 绑定是否成功 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindApiGroupRequest {
  /** 分组绑定网关列表 */
  GroupGatewayList: GatewayGroupIds[];
}

declare interface BindApiGroupResponse {
  /** 返回结果，成功失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BindPluginRequest {
  /** 分组/API绑定插件列表 */
  PluginInstanceList: GatewayPluginBoundParam[];
}

declare interface BindPluginResponse {
  /** 返回结果，成功失败 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ChangeApiUsableStatusRequest {
  /** API ID */
  ApiId: string;
  /** 切换状态，enabled/disabled */
  UsableStatus: string;
}

declare interface ChangeApiUsableStatusResponse {
  /** API 信息 */
  Result?: ApiDetailInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ContinueRunFailedTaskBatchRequest {
  /** 批次ID。 */
  BatchId: string;
}

declare interface ContinueRunFailedTaskBatchResponse {
  /** 成功或失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAllGatewayApiAsyncRequest {
  /** API分组ID */
  GroupId: string;
  /** 微服务ID */
  MicroserviceId: string;
}

declare interface CreateAllGatewayApiAsyncResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApiGroupRequest {
  /** 分组名称, 不能包含中文 */
  GroupName: string;
  /** 分组上下文 */
  GroupContext: string;
  /** 鉴权类型。secret： 密钥鉴权； none:无鉴权 */
  AuthType?: string;
  /** 备注 */
  Description?: string;
  /** 分组类型,默认ms。 ms： 微服务分组； external:外部Api分组 */
  GroupType?: string;
  /** 网关实体ID */
  GatewayInstanceId?: string;
  /** 命名空间参数key值 */
  NamespaceNameKey?: string;
  /** 微服务名参数key值 */
  ServiceNameKey?: string;
  /** 命名空间参数位置，path，header或query，默认是path */
  NamespaceNameKeyPosition?: string;
  /** 微服务名参数位置，path，header或query，默认是path */
  ServiceNameKeyPosition?: string;
}

declare interface CreateApiGroupResponse {
  /** API分组ID */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApiRateLimitRuleRequest {
  /** Api Id */
  ApiId: string;
  /** qps值 */
  MaxQps: number;
  /** 开启/禁用，enabled/disabled, 不传默认开启 */
  UsableStatus?: string;
}

declare interface CreateApiRateLimitRuleResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApiRateLimitRuleWithDetailRespRequest {
  /** Api Id */
  ApiId: string;
  /** qps值 */
  MaxQps: number;
  /** 开启/禁用，enabled/disabled, 不传默认开启 */
  UsableStatus?: string;
}

declare interface CreateApiRateLimitRuleWithDetailRespResponse {
  /** 创建的规则 ID */
  Result?: ApiRateLimitRule | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateApplicationRequest {
  /** 应用名称 */
  ApplicationName: string;
  /** 应用类型，V：虚拟机应用；C：容器应用；S：serverless应用 */
  ApplicationType: string;
  /** 应用微服务类型，M：service mesh应用；N：普通应用；G：网关应用 */
  MicroserviceType: string;
  /** 应用描述 */
  ApplicationDesc?: string;
  /** 应用日志配置项，废弃参数 */
  ApplicationLogConfig?: string;
  /** 应用资源类型，废弃参数 */
  ApplicationResourceType?: string;
  /** 应用runtime类型 */
  ApplicationRuntimeType?: string;
  /** 需要绑定的数据集ID */
  ProgramId?: string;
  /** 服务配置信息列表 */
  ServiceConfigList?: ServiceConfig[];
  /** 忽略创建镜像仓库 */
  IgnoreCreateImageRepository?: boolean;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateApplicationResponse {
  /** 应用ID */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterRequest {
  /** 集群名称 */
  ClusterName: string;
  /** 集群类型 */
  ClusterType: string;
  /** 私有网络ID */
  VpcId: string;
  /** 分配给集群容器和服务IP的CIDR */
  ClusterCIDR?: string;
  /** 集群备注 */
  ClusterDesc?: string;
  /** 集群所属TSF地域 */
  TsfRegionId?: string;
  /** 集群所属TSF可用区 */
  TsfZoneId?: string;
  /** 私有网络子网ID */
  SubnetId?: string;
  /** 集群版本 */
  ClusterVersion?: string;
  /** 集群中每个Node上最大的Pod数量。取值范围4～256。不为2的幂值时会向上取最接近的2的幂值。 */
  MaxNodePodNum?: number;
  /** 集群最大的service数量。取值范围32～32768，不为2的幂值时会向上取最接近的2的幂值。 */
  MaxClusterServiceNum?: number;
  /** 需要绑定的数据集ID */
  ProgramId?: string;
  /** api地址 */
  KuberneteApiServer?: string;
  /** K : kubeconfig, S : service account */
  KuberneteNativeType?: string;
  /** native secret */
  KuberneteNativeSecret?: string;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateClusterResponse {
  /** 集群ID */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigRequest {
  /** 配置项名称 */
  ConfigName: string;
  /** 配置项版本 */
  ConfigVersion: string;
  /** 配置项值 */
  ConfigValue: string;
  /** 应用ID */
  ApplicationId: string;
  /** 配置项版本描述 */
  ConfigVersionDesc?: string;
  /** 配置项值类型 */
  ConfigType?: string;
  /** Base64编码的配置项 */
  EncodeWithBase64?: boolean;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateConfigResponse {
  /** true：创建成功；false：创建失败 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigTemplateRequest {
  /** 配置模板名称 */
  ConfigTemplateName: string;
  /** 配置模板对应的微服务框架 */
  ConfigTemplateType: string;
  /** 配置模板数据 */
  ConfigTemplateValue: string;
  /** 配置模板描述 */
  ConfigTemplateDesc?: string;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateConfigTemplateResponse {
  /** true：创建成功；false：创建失败 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigTemplateWithDetailRespRequest {
  /** 配置模板名称 */
  ConfigTemplateName: string;
  /** 配置模板对应的微服务框架 */
  ConfigTemplateType: string;
  /** 配置模板数据 */
  ConfigTemplateValue: string;
  /** 配置模板描述 */
  ConfigTemplateDesc?: string;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateConfigTemplateWithDetailRespResponse {
  /** 创建成功，返回 ID */
  Result?: ConfigTemplate | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateConfigWithDetailRespRequest {
  /** 配置项名称 */
  ConfigName: string;
  /** 配置项版本 */
  ConfigVersion: string;
  /** 配置项值 */
  ConfigValue: string;
  /** 应用ID */
  ApplicationId: string;
  /** 配置项版本描述 */
  ConfigVersionDesc?: string;
  /** 配置项值类型 */
  ConfigType?: string;
  /** Base64编码的配置项 */
  EncodeWithBase64?: boolean;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateConfigWithDetailRespResponse {
  /** 配置项 */
  Result?: Config | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateContainGroupRequest {
  /** 分组所属应用ID */
  ApplicationId: string;
  /** 分组所属命名空间ID */
  NamespaceId: string;
  /** 分组名称字段，长度1~60，字母或下划线开头，可包含字母数字下划线 */
  GroupName: string;
  /** 实例数量 */
  InstanceNum: number;
  /** 0:公网 1:集群内访问 2：NodePort */
  AccessType: number;
  /** 数组对象，见下方定义 */
  ProtocolPorts: ProtocolPort[];
  /** 集群ID */
  ClusterId: string;
  /** 最大分配 CPU 核数，对应 K8S limit */
  CpuLimit?: string;
  /** 最大分配内存 MiB 数，对应 K8S limit */
  MemLimit?: string;
  /** 分组备注字段，长度应不大于200字符 */
  GroupComment?: string;
  /** 更新方式：0:快速更新 1:滚动更新 */
  UpdateType?: number;
  /** 滚动更新必填，更新间隔 */
  UpdateIvl?: number;
  /** 初始分配的 CPU 核数，对应 K8S request */
  CpuRequest?: string;
  /** 初始分配的内存 MiB 数，对应 K8S request */
  MemRequest?: string;
  /** 部署组资源类型 */
  GroupResourceType?: string;
  /** 子网ID */
  SubnetId?: string;
  /** agent 容器分配的 CPU 核数，对应 K8S 的 request */
  AgentCpuRequest?: string;
  /** agent 容器最大的 CPU 核数，对应 K8S 的 limit */
  AgentCpuLimit?: string;
  /** agent 容器分配的内存 MiB 数，对应 K8S 的 request */
  AgentMemRequest?: string;
  /** agent 容器最大的内存 MiB 数，对应 K8S 的 limit */
  AgentMemLimit?: string;
  /** istioproxy 容器分配的 CPU 核数，对应 K8S 的 request */
  IstioCpuRequest?: string;
  /** istioproxy 容器最大的 CPU 核数，对应 K8S 的 limit */
  IstioCpuLimit?: string;
  /** istioproxy 容器分配的内存 MiB 数，对应 K8S 的 request */
  IstioMemRequest?: string;
  /** istioproxy 容器最大的内存 MiB 数，对应 K8S 的 limit */
  IstioMemLimit?: string;
}

declare interface CreateContainGroupResponse {
  /** 返回创建成功的部署组ID，返回null表示失败 */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFileConfigRequest {
  /** 配置项名称 */
  ConfigName: string;
  /** 配置项版本 */
  ConfigVersion: string;
  /** 配置项文件名 */
  ConfigFileName: string;
  /** 配置项文件内容（原始内容编码需要 utf-8 格式，如果 ConfigFileCode 为 gbk，后台会进行转换） */
  ConfigFileValue: string;
  /** 配置项关联应用ID */
  ApplicationId: string;
  /** 发布路径 */
  ConfigFilePath: string;
  /** 配置项版本描述 */
  ConfigVersionDesc?: string;
  /** 配置项文件编码，utf-8 或 gbk。注：如果选择 gbk，需要新版本 tsf-consul-template （公有云虚拟机需要使用 1.32 tsf-agent，容器需要从文档中获取最新的 tsf-consul-template-docker.tar.gz）的支持 */
  ConfigFileCode?: string;
  /** 后置命令 */
  ConfigPostCmd?: string;
  /** Base64编码的配置项 */
  EncodeWithBase64?: boolean;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateFileConfigResponse {
  /** true：创建成功；false：创建失败 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFileConfigWithDetailRespRequest {
  /** 配置项名称 */
  ConfigName: string;
  /** 配置项版本 */
  ConfigVersion: string;
  /** 配置项文件名 */
  ConfigFileName: string;
  /** 配置项文件内容（原始内容编码需要 utf-8 格式，如果 ConfigFileCode 为 gbk，后台会进行转换） */
  ConfigFileValue: string;
  /** 配置项关联应用ID */
  ApplicationId: string;
  /** 发布路径 */
  ConfigFilePath: string;
  /** 配置项版本描述 */
  ConfigVersionDesc?: string;
  /** 配置项文件编码，utf-8 或 gbk。注：如果选择 gbk，需要新版本 tsf-consul-template （公有云虚拟机需要使用 1.32 tsf-agent，容器需要从文档中获取最新的 tsf-consul-template-docker.tar.gz）的支持 */
  ConfigFileCode?: string;
  /** 后置命令 */
  ConfigPostCmd?: string;
  /** Base64编码的配置项 */
  EncodeWithBase64?: boolean;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateFileConfigWithDetailRespResponse {
  /** 文件配置项 */
  Result?: FileConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGatewayApiRequest {
  /** API 分组ID */
  GroupId: string;
  /** Api信息 */
  ApiList: ApiInfo[];
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateGatewayApiResponse {
  /** 是否成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateGroupRequest {
  /** 部署组所属的应用ID */
  ApplicationId: string;
  /** 部署组所属命名空间ID */
  NamespaceId: string;
  /** 部署组名称 */
  GroupName: string;
  /** 集群ID */
  ClusterId: string;
  /** 部署组描述 */
  GroupDesc?: string;
  /** 部署组资源类型 */
  GroupResourceType?: string;
  /** 部署组备注 */
  Alias?: string;
}

declare interface CreateGroupResponse {
  /** groupId， null表示创建失败 */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLaneRequest {
  /** 泳道名称 */
  LaneName: string;
  /** 泳道备注 */
  Remark: string;
  /** 泳道部署组信息 */
  LaneGroupList: LaneGroup[];
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateLaneResponse {
  /** 泳道ID */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLaneRuleRequest {
  /** 泳道规则名称 */
  RuleName: string;
  /** 泳道规则备注 */
  Remark: string;
  /** 泳道规则标签列表 */
  RuleTagList: LaneRuleTag[];
  /** 泳道规则标签关系 */
  RuleTagRelationship: string;
  /** 泳道Id */
  LaneId: string;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateLaneRuleResponse {
  /** 泳道规则Id */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMicroserviceRequest {
  /** 命名空间ID */
  NamespaceId: string;
  /** 微服务名称 */
  MicroserviceName: string;
  /** 微服务描述信息 */
  MicroserviceDesc?: string;
}

declare interface CreateMicroserviceResponse {
  /** 新增微服务是否成功。true：操作成功。false：操作失败。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateMicroserviceWithDetailRespRequest {
  /** 命名空间ID */
  NamespaceId: string;
  /** 微服务名称 */
  MicroserviceName: string;
  /** 微服务描述信息 */
  MicroserviceDesc?: string;
}

declare interface CreateMicroserviceWithDetailRespResponse {
  /** id */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNamespaceRequest {
  /** 命名空间名称 */
  NamespaceName: string;
  /** 集群ID */
  ClusterId?: string;
  /** 命名空间描述 */
  NamespaceDesc?: string;
  /** 命名空间资源类型(默认值为DEF) */
  NamespaceResourceType?: string;
  /** 是否是全局命名空间(默认是DEF，表示普通命名空间；GLOBAL表示全局命名空间) */
  NamespaceType?: string;
  /** 命名空间ID */
  NamespaceId?: string;
  /** 是否开启高可用 */
  IsHaEnable?: string;
  /** 需要绑定的数据集ID */
  ProgramId?: string;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateNamespaceResponse {
  /** 成功时为命名空间ID，失败为null */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePathRewritesRequest {
  /** 路径重写列表 */
  PathRewrites: PathRewriteCreateObject;
}

declare interface CreatePathRewritesResponse {
  /** true/false */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePathRewritesWithDetailRespRequest {
  /** 路径重写列表 */
  PathRewrites: PathRewriteCreateObject[];
}

declare interface CreatePathRewritesWithDetailRespResponse {
  /** 返回路径重写规则 ID */
  Result?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePublicConfigRequest {
  /** 配置项名称 */
  ConfigName: string;
  /** 配置项版本 */
  ConfigVersion: string;
  /** 配置项值，总是接收yaml格式的内容 */
  ConfigValue: string;
  /** 配置项版本描述 */
  ConfigVersionDesc?: string;
  /** 配置项类型 */
  ConfigType?: string;
  /** Base64编码的配置项 */
  EncodeWithBase64?: boolean;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreatePublicConfigResponse {
  /** true：创建成功；false：创建失败 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePublicConfigWithDetailRespRequest {
  /** 配置项名称 */
  ConfigName: string;
  /** 配置项版本 */
  ConfigVersion: string;
  /** 配置项值，总是接收yaml格式的内容 */
  ConfigValue: string;
  /** 配置项版本描述 */
  ConfigVersionDesc?: string;
  /** 配置项类型 */
  ConfigType?: string;
  /** Base64编码的配置项 */
  EncodeWithBase64?: boolean;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreatePublicConfigWithDetailRespResponse {
  /** 公共配置项 ID */
  Result?: Config | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRepositoryRequest {
  /** 仓库名称 */
  RepositoryName: string;
  /** 仓库类型（默认仓库：default，私有仓库：private） */
  RepositoryType: string;
  /** 仓库所在桶名称 */
  BucketName: string;
  /** 仓库所在桶地域 */
  BucketRegion: string;
  /** 目录 */
  Directory?: string;
  /** 仓库描述 */
  RepositoryDesc?: string;
}

declare interface CreateRepositoryResponse {
  /** 创建仓库是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskFlowRequest {
  /** 工作流名称 */
  FlowName: string;
  /** 触发方式 */
  TriggerRule: TaskRule;
  /** 工作流任务节点列表 */
  FlowEdges: TaskFlowEdge[];
  /** 工作流执行超时时间 */
  TimeOut: number;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateTaskFlowResponse {
  /** 工作流 ID */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskRequest {
  /** 任务名称，任务长度64字符 */
  TaskName: string;
  /** 任务内容，长度限制65536个字节 */
  TaskContent: string;
  /** 执行类型，unicast/broadcast */
  ExecuteType: string;
  /** 任务类型,java */
  TaskType: string;
  /** 任务超时时间， 时间单位 ms */
  TimeOut: number;
  /** 部署组ID */
  GroupId: string;
  /** 触发规则 */
  TaskRule?: TaskRule;
  /** 重试次数，0 <= RetryCount<= 10 */
  RetryCount?: number;
  /** 重试间隔， 0 <= RetryInterval <= 600000， 时间单位 ms */
  RetryInterval?: number;
  /** 分片数量 */
  ShardCount?: number;
  /** 分片参数 */
  ShardArguments?: ShardArgument[];
  /** 判断任务成功的操作符 */
  SuccessOperator?: string;
  /** 判断任务成功率的阈值，如100 */
  SuccessRatio?: string;
  /** 高级设置 */
  AdvanceSettings?: AdvanceSettings;
  /** 任务参数，长度限制10000个字符 */
  TaskArgument?: string;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface CreateTaskResponse {
  /** 任务ID */
  Result: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUnitNamespacesRequest {
  /** 网关实体ID */
  GatewayInstanceId: string;
  /** 单元化命名空间对象列表 */
  UnitNamespaceList?: UnitNamespace[];
}

declare interface CreateUnitNamespacesResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUnitRuleRequest {
  /** 网关实体ID */
  GatewayInstanceId: string;
  /** 规则名称 */
  Name: string;
  /** 规则描述 */
  Description?: string;
  /** 规则项列表 */
  UnitRuleItemList?: UnitRuleItem[];
}

declare interface CreateUnitRuleResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateUnitRuleWithDetailRespRequest {
  /** 网关实体ID */
  GatewayInstanceId: string;
  /** 规则名称 */
  Name: string;
  /** 规则描述 */
  Description?: string;
  /** 规则项列表 */
  UnitRuleItemList?: UnitRuleItem[];
}

declare interface CreateUnitRuleWithDetailRespResponse {
  /** 单元化规则 ID */
  Result?: UnitRule | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApiGroupRequest {
  /** API 分组ID */
  GroupId: string;
}

declare interface DeleteApiGroupResponse {
  /** 成功失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApiRateLimitRuleRequest {
  /** 限流规则ID */
  RuleId: string;
}

declare interface DeleteApiRateLimitRuleResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteApplicationRequest {
  /** 应用ID */
  ApplicationId: string;
}

declare interface DeleteApplicationResponse {
  /** 删除应用操作是否成功。true：操作成功。false：操作失败。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 是否只解绑，不删除容器集群，默认不传则删除容器集群。 */
  Unbind?: boolean;
}

declare interface DeleteClusterResponse {
  /** 删除集群操作是否成功。true：操作成功。false：操作失败。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConfigRequest {
  /** 配置项ID */
  ConfigId: string;
}

declare interface DeleteConfigResponse {
  /** true：删除成功；false：删除失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteConfigTemplateRequest {
  /** 无 */
  ConfigTemplateId: string;
}

declare interface DeleteConfigTemplateResponse {
  /** true：删除成功；false：删除失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteContainerGroupRequest {
  /** 部署组ID，分组唯一标识 */
  GroupId: string;
}

declare interface DeleteContainerGroupResponse {
  /** 删除操作是否成功：true：成功false：失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFileConfigRequest {
  /** 文件配置项ID */
  ConfigId: string;
}

declare interface DeleteFileConfigResponse {
  /** 删除结果 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGatewayApiRequest {
  /** 分组ID */
  GroupId: string;
  /** Api ID 数组 */
  ApiList: string[];
}

declare interface DeleteGatewayApiResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteGroupRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface DeleteGroupResponse {
  /** 删除部署组操作是否成功。true：操作成功。false：操作失败。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImageTagsRequest {
  /** 镜像版本数组 */
  ImageTags: DeleteImageTag[];
  /** 企业: tcr ；个人: personal或者不填 */
  RepoType?: string;
}

declare interface DeleteImageTagsResponse {
  /** 批量删除操作是否成功。true：成功。false：失败。 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLaneRequest {
  /** 泳道Idl */
  LaneId: string;
}

declare interface DeleteLaneResponse {
  /** true / false */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLaneRuleRequest {
  /** 泳道规则Id */
  RuleId: string;
}

declare interface DeleteLaneRuleResponse {
  /** 操作状态 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMicroserviceRequest {
  /** 微服务ID */
  MicroserviceId: string;
}

declare interface DeleteMicroserviceResponse {
  /** 删除微服务是否成功。true：操作成功。false：操作失败。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNamespaceRequest {
  /** 命名空间ID */
  NamespaceId: string;
  /** 集群ID */
  ClusterId?: string;
}

declare interface DeleteNamespaceResponse {
  /** 删除命名空间是否成功。true：删除成功。false：删除失败。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePathRewritesRequest {
  /** 路径重写规则IDs */
  PathRewriteIds: string[];
}

declare interface DeletePathRewritesResponse {
  /** true/false */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePkgsRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 需要删除的程序包ID列表 */
  PkgIds: string[];
  /** 程序包仓库类型 */
  RepositoryType?: string;
  /** 程序包仓库id */
  RepositoryId?: string;
}

declare interface DeletePkgsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePublicConfigRequest {
  /** 配置项ID */
  ConfigId: string;
}

declare interface DeletePublicConfigResponse {
  /** true：删除成功；false：删除失败 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRepositoryRequest {
  /** 仓库ID */
  RepositoryId: string;
}

declare interface DeleteRepositoryResponse {
  /** 删除仓库是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServerlessGroupRequest {
  /** groupId，分组唯一标识 */
  GroupId: string;
}

declare interface DeleteServerlessGroupResponse {
  /** 结果true：成功；false：失败。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTaskRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DeleteTaskResponse {
  /** 删除成功or失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUnitNamespacesRequest {
  /** 网关实体ID */
  GatewayInstanceId: string;
  /** 单元化命名空间ID数组 */
  UnitNamespaceList: string[];
}

declare interface DeleteUnitNamespacesResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteUnitRuleRequest {
  /** 规则ID */
  Id: string;
}

declare interface DeleteUnitRuleResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployContainerGroupRequest {
  /** 部署组ID，分组唯一标识 */
  GroupId: string;
  /** 镜像版本名称,如v1 */
  TagName: string;
  /** 实例数量 */
  InstanceNum: number;
  /** 镜像server */
  Server?: string;
  /** 旧版镜像名，如/tsf/nginx */
  Reponame?: string;
  /** 业务容器最大的 CPU 核数，对应 K8S 的 limit；不填时默认为 request 的 2 倍 */
  CpuLimit?: string;
  /** 业务容器最大的内存 MiB 数，对应 K8S 的 limit；不填时默认为 request 的 2 倍 */
  MemLimit?: string;
  /** jvm参数 */
  JvmOpts?: string;
  /** 业务容器分配的 CPU 核数，对应 K8S 的 request，默认0.25 */
  CpuRequest?: string;
  /** 业务容器分配的内存 MiB 数，对应 K8S 的 request，默认640 MiB */
  MemRequest?: string;
  /** 是否不立即启动 */
  DoNotStart?: boolean;
  /** （优先使用）新版镜像名，如/tsf/nginx */
  RepoName?: string;
  /** 更新方式：0:快速更新 1:滚动更新 */
  UpdateType?: number;
  /** 滚动更新必填，更新间隔 */
  UpdateIvl?: number;
  /** agent 容器分配的 CPU 核数，对应 K8S 的 request */
  AgentCpuRequest?: string;
  /** agent 容器最大的 CPU 核数，对应 K8S 的 limit */
  AgentCpuLimit?: string;
  /** agent 容器分配的内存 MiB 数，对应 K8S 的 request */
  AgentMemRequest?: string;
  /** agent 容器最大的内存 MiB 数，对应 K8S 的 limit */
  AgentMemLimit?: string;
  /** istioproxy 容器分配的 CPU 核数，对应 K8S 的 request */
  IstioCpuRequest?: string;
  /** istioproxy 容器最大的 CPU 核数，对应 K8S 的 limit */
  IstioCpuLimit?: string;
  /** istioproxy 容器分配的内存 MiB 数，对应 K8S 的 request */
  IstioMemRequest?: string;
  /** istioproxy 容器最大的内存 MiB 数，对应 K8S 的 limit */
  IstioMemLimit?: string;
  /** kubernetes滚动更新策略的MaxSurge参数 */
  MaxSurge?: string;
  /** kubernetes滚动更新策略的MaxUnavailable参数 */
  MaxUnavailable?: string;
  /** 健康检查配置信息，若不指定该参数，则默认不设置健康检查。 */
  HealthCheckSettings?: HealthCheckSettings;
  /** 部署组应用运行的环境变量。若不指定该参数，则默认不设置额外的环境变量。 */
  Envs?: Env[];
  /** 容器部署组的网络设置。 */
  ServiceSetting?: ServiceSetting;
  /** 是否部署 agent 容器。若不指定该参数，则默认不部署 agent 容器。 */
  DeployAgent?: boolean;
  /** 节点调度策略。若不指定改参数，则默认不使用节点调度策略。 */
  SchedulingStrategy?: SchedulingStrategy;
  /** 是否进行增量部署，默认为false，全量更新 */
  IncrementalDeployment?: boolean;
  /** tcr或者不填 */
  RepoType?: string;
  /** 数据卷信息-废弃，请用VolumeInfoList参数 */
  VolumeInfos?: VolumeInfo;
  /** 数据卷挂载点信息-废弃，请用VolumeMountInfoList参数 */
  VolumeMountInfos?: VolumeMountInfo;
  /** 数据卷信息，list */
  VolumeInfoList?: VolumeInfo[];
  /** 数据卷挂载点信息，list */
  VolumeMountInfoList?: VolumeMountInfo[];
  /** 是否清除数据卷信息，默认false */
  VolumeClean?: boolean;
  /** javaagent信息: SERVICE_AGENT/OT_AGENT */
  AgentProfileList?: AgentProfile[];
  /** 预热配置信息 */
  WarmupSetting?: WarmupSetting;
}

declare interface DeployContainerGroupResponse {
  /** 部署容器应用是否成功。true：成功。false：失败。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeployGroupRequest {
  /** 部署组ID */
  GroupId: string;
  /** 程序包ID */
  PkgId: string;
  /** 部署组启动参数 */
  StartupParameters?: string;
  /** 部署应用描述信息 */
  DeployDesc?: string;
  /** 是否允许强制启动 */
  ForceStart?: boolean;
  /** 是否开启健康检查 */
  EnableHealthCheck?: boolean;
  /** 开启健康检查时，配置健康检查 */
  HealthCheckSettings?: HealthCheckSettings;
  /** 部署方式，0表示快速更新，1表示滚动更新 */
  UpdateType?: number;
  /** 是否启用beta批次 */
  DeployBetaEnable?: boolean;
  /** 滚动发布每个批次参与的实例比率 */
  DeployBatch?: number[];
  /** 滚动发布的执行方式 */
  DeployExeMode?: string;
  /** 滚动发布每个批次的时间间隔 */
  DeployWaitTime?: number;
  /** 启动脚本 base64编码 */
  StartScript?: string;
  /** 停止脚本 base64编码 */
  StopScript?: string;
  /** 是否进行增量部署，默认为false，全量更新 */
  IncrementalDeployment?: boolean;
  /** JDK名称: konaJDK或openJDK */
  JdkName?: string;
  /** JDK版本: 8或11 (openJDK只支持8) */
  JdkVersion?: string;
  /** 部署agent的类型、版本 */
  AgentProfileList?: AgentProfile[];
  /** 预热参数配置 */
  WarmupSetting?: WarmupSetting;
  /** 开启分批健康检查 */
  EnableBatchHealthCheck?: boolean;
}

declare interface DeployGroupResponse {
  /** 任务ID */
  Result?: TaskId | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiDetailRequest {
  /** 微服务id */
  MicroserviceId: string;
  /** 请求路径 */
  Path: string;
  /** 请求方法 */
  Method: string;
  /** 包版本 */
  PkgVersion: string;
  /** 应用ID */
  ApplicationId: string;
}

declare interface DescribeApiDetailResponse {
  /** API 详情 */
  Result?: ApiDetailResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiGroupRequest {
  /** API 分组ID */
  GroupId: string;
}

declare interface DescribeApiGroupResponse {
  /** API分组信息 */
  Result: ApiGroupInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiGroupsRequest {
  /** 搜索关键字 */
  SearchWord?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 每页条数，默认为20 */
  Limit?: number;
  /** 分组类型。 ms： 微服务分组； external:外部Api分组 */
  GroupType?: string;
  /** 鉴权类型。 secret： 密钥鉴权； none:无鉴权 */
  AuthType?: string;
  /** 发布状态, drafted: 未发布。 released: 发布 */
  Status?: string;
  /** 排序字段："created_time"或"group_context" */
  OrderBy?: string;
  /** 排序类型：0(ASC)或1(DESC) */
  OrderType?: number;
  /** 网关实体ID */
  GatewayInstanceId?: string;
}

declare interface DescribeApiGroupsResponse {
  /** 翻页结构体 */
  Result: TsfPageApiGroupInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiRateLimitRulesRequest {
  /** Api ID */
  ApiId: string;
}

declare interface DescribeApiRateLimitRulesResponse {
  /** 限流结果 */
  Result?: ApiRateLimitRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiUseDetailRequest {
  /** 网关部署组ID */
  GatewayDeployGroupId: string;
  /** 网关分组Api ID */
  ApiId: string;
  /** 查询的日期,格式：yyyy-MM-dd HH:mm:ss */
  StartTime: string;
  /** 查询的日期,格式：yyyy-MM-dd HH:mm:ss */
  EndTime: string;
}

declare interface DescribeApiUseDetailResponse {
  /** 日使用统计对象 */
  Result?: GroupApiUseStatistics;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApiVersionsRequest {
  /** 微服务ID */
  MicroserviceId: string;
  /** API 请求路径 */
  Path?: string;
  /** 请求方法 */
  Method?: string;
}

declare interface DescribeApiVersionsResponse {
  /** API版本列表 */
  Result?: ApiVersionArray[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationAttributeRequest {
  /** 应用ID */
  ApplicationId: string;
}

declare interface DescribeApplicationAttributeResponse {
  /** 应用列表其它字段返回参数 */
  Result?: ApplicationAttribute;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationBusinessLogConfigRequest {
  /** TSF应用ID */
  ApplicationId: string;
}

declare interface DescribeApplicationBusinessLogConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationRequest {
  /** 应用ID */
  ApplicationId: string;
}

declare interface DescribeApplicationResponse {
  /** 应用信息 */
  Result?: ApplicationForPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeApplicationsRequest {
  /** 搜索字段 */
  SearchWord?: string;
  /** 排序字段 */
  OrderBy?: string;
  /** 排序类型 */
  OrderType?: number;
  /** 偏移量 */
  Offset?: number;
  /** 分页个数 */
  Limit?: number;
  /** 应用类型 */
  ApplicationType?: string;
  /** 应用的微服务类型 */
  MicroserviceType?: string;
  /** 应用资源类型数组 */
  ApplicationResourceTypeList?: string[];
  /** IdList */
  ApplicationIdList?: string[];
}

declare interface DescribeApplicationsResponse {
  /** 应用分页列表信息 */
  Result?: TsfPageApplication | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBasicResourceUsageRequest {
  /** 是否无视权限查询全租户的，默认 true。注：无论 true 还是 false，PackageSpaceUsed 和 ConsulInstanceCount 都是全租户的 */
  All?: boolean;
}

declare interface DescribeBasicResourceUsageResponse {
  /** TSF基本资源信息 */
  Result: OverviewBasicResourceUsage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBusinessLogConfigRequest {
  /** 配置项ID */
  ConfigId: string;
}

declare interface DescribeBusinessLogConfigResponse {
  /** 日志配置项 */
  Result?: BusinessLogConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBusinessLogConfigsRequest {
  /** 偏移量，取值范围大于等于0，默认值为0 */
  Offset?: number;
  /** 单页请求配置数量，取值范围[1, 50]，默认值为10 */
  Limit?: number;
  /** 模糊匹配关键词 */
  SearchWord?: string;
  /** 无 */
  DisableProgramAuthCheck?: boolean;
  /** 无 */
  ConfigIdList?: string[];
}

declare interface DescribeBusinessLogConfigsResponse {
  /** 业务日志配置列表 */
  Result: TsfPageBusinessLogConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 搜索字段 */
  SearchWord?: string;
  /** 排序字段 */
  OrderBy?: string;
  /** 排序类型 */
  OrderType?: number;
  /** 偏移量 */
  Offset?: number;
  /** 分页个数 */
  Limit?: number;
}

declare interface DescribeClusterInstancesResponse {
  /** 集群机器实例分页信息 */
  Result: TsfPageInstance | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClustersRequest {
  /** 搜索词 */
  SearchWord?: string;
  /** 排序字段 */
  OrderBy?: string;
  /** 排序方式 */
  OrderType?: number;
  /** 偏移量 */
  Offset?: number;
  /** 分页个数 */
  Limit?: number;
  /** 集群类型 */
  ClusterType?: string;
  /** idList */
  ClusterIdList?: string[];
}

declare interface DescribeClustersResponse {
  /** Cluster分页信息 */
  Result: TsfPageClusterV2 | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigReleaseLogsRequest {
  /** 部署组ID，不传入时查询全量 */
  GroupId?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 每页条数，默认为20 */
  Limit?: number;
  /** 命名空间ID，不传入时查询全量 */
  NamespaceId?: string;
  /** 集群ID，不传入时查询全量 */
  ClusterId?: string;
  /** 应用ID，不传入时查询全量 */
  ApplicationId?: string;
}

declare interface DescribeConfigReleaseLogsResponse {
  /** 分页的配置项发布历史列表 */
  Result?: TsfPageConfigReleaseLog | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigReleasesRequest {
  /** 配置项名称，不传入时查询全量 */
  ConfigName?: string;
  /** 部署组ID，不传入时查询全量 */
  GroupId?: string;
  /** 命名空间ID，不传入时查询全量 */
  NamespaceId?: string;
  /** 集群ID，不传入时查询全量 */
  ClusterId?: string;
  /** 每页条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 配置ID，不传入时查询全量 */
  ConfigId?: string;
  /** 应用ID，不传入时查询全量 */
  ApplicationId?: string;
}

declare interface DescribeConfigReleasesResponse {
  /** 分页的配置发布信息 */
  Result?: TsfPageConfigRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigRequest {
  /** 配置项ID */
  ConfigId: string;
}

declare interface DescribeConfigResponse {
  /** 配置项 */
  Result?: Config | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigSummaryRequest {
  /** 应用ID，不传入时查询全量 */
  ApplicationId?: string;
  /** 查询关键字，模糊查询：应用名称，配置项名称，不传入时查询全量 */
  SearchWord?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 每页条数，默认为20 */
  Limit?: number;
  /** 按时间排序：creation_time；按名称排序：config_name */
  OrderBy?: string;
  /** 升序传 0，降序传 1 */
  OrderType?: number;
  /** 无 */
  ConfigTagList?: string[];
  /** 无 */
  DisableProgramAuthCheck?: boolean;
  /** 无 */
  ConfigIdList?: string[];
}

declare interface DescribeConfigSummaryResponse {
  /** 配置项分页对象 */
  Result: TsfPageConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigTemplateRequest {
  /** 无 */
  ConfigTemplateId: string;
}

declare interface DescribeConfigTemplateResponse {
  /** Result */
  Result?: ConfigTemplate | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigsRequest {
  /** 应用ID，不传入时查询全量 */
  ApplicationId?: string;
  /** 配置项ID，不传入时查询全量，高优先级 */
  ConfigId?: string;
  /** 偏移量 */
  Offset?: number;
  /** 每页条数 */
  Limit?: number;
  /** 配置项ID列表，不传入时查询全量，低优先级 */
  ConfigIdList?: string[];
  /** 配置项名称，精确查询，不传入时查询全量 */
  ConfigName?: string;
  /** 配置项版本，精确查询，不传入时查询全量 */
  ConfigVersion?: string;
}

declare interface DescribeConfigsResponse {
  /** 分页后的配置项列表 */
  Result: TsfPageConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeContainerEventsRequest {
  /** event 的资源类型, group 或者 instance */
  ResourceType: string;
  /** event 的资源 id */
  ResourceId: string;
  /** 偏移量，取值从0开始 */
  Offset?: number;
  /** 分页个数，默认为20， 取值应为1~50 */
  Limit?: number;
  /** 当类型是 instance 时需要 */
  GroupId?: string;
}

declare interface DescribeContainerEventsResponse {
  /** events 分页列表 */
  Result: TsfPageContainerEvent | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeContainerGroupAttributeRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface DescribeContainerGroupAttributeResponse {
  /** 部署组列表-其它字段 */
  Result?: ContainerGroupOther;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeContainerGroupDeployInfoRequest {
  /** 实例所属 groupId */
  GroupId: string;
}

declare interface DescribeContainerGroupDeployInfoResponse {
  /** 获取部署组 */
  Result: ContainerGroupDeploy | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeContainerGroupDetailRequest {
  /** 分组ID */
  GroupId: string;
}

declare interface DescribeContainerGroupDetailResponse {
  /** 容器部署组详情 */
  Result: ContainerGroupDetail;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeContainerGroupsRequest {
  /** 搜索字段，模糊搜索groupName字段 */
  SearchWord?: string;
  /** 分组所属应用ID。必填 */
  ApplicationId?: string;
  /** 排序字段，默认为 createTime字段，支持id， name， createTime */
  OrderBy?: string;
  /** 排序方式，默认为1：倒序排序，0：正序，1：倒序 */
  OrderType?: number;
  /** 偏移量，取值从0开始 */
  Offset?: number;
  /** 分页个数，默认为20， 取值应为1~50 */
  Limit?: number;
  /** 集群ID */
  ClusterId?: string;
  /** 命名空间 ID */
  NamespaceId?: string;
}

declare interface DescribeContainerGroupsResponse {
  /** 查询的权限数据对象 */
  Result?: ContainGroupResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCreateGatewayApiStatusRequest {
  /** 请求方法 */
  GroupId?: string;
  /** 微服务ID */
  MicroserviceId?: string;
}

declare interface DescribeCreateGatewayApiStatusResponse {
  /** 是否已完成导入任务 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeliveryConfigByGroupIdRequest {
  /** 部署组id */
  GroupId: string;
}

declare interface DescribeDeliveryConfigByGroupIdResponse {
  /** 投递kafak配置项 */
  Result?: SimpleKafkaDeliveryConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeliveryConfigRequest {
  /** 投递配置id */
  ConfigId: string;
}

declare interface DescribeDeliveryConfigResponse {
  /** 投递kafka配置 */
  Result?: KafkaDeliveryConfig;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDeliveryConfigsRequest {
  /** 关键字 */
  SearchWord?: string;
  /** 偏移 */
  Offset?: number;
  /** 搜索条数 */
  Limit?: number;
}

declare interface DescribeDeliveryConfigsResponse {
  /** 投递项关联部署组信息 */
  Result?: DeliveryConfigBindGroups | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDownloadInfoRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 程序包ID */
  PkgId: string;
  /** 程序包仓库ID */
  RepositoryId?: string;
  /** 程序包仓库类型 */
  RepositoryType?: string;
}

declare interface DescribeDownloadInfoResponse {
  /** COS鉴权信息 */
  Result?: CosDownloadInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnabledUnitRuleRequest {
  /** 网关实体ID */
  GatewayInstanceId: string;
}

declare interface DescribeEnabledUnitRuleResponse {
  /** 单元化规则对象 */
  Result?: UnitRule | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileConfigReleasesRequest {
  /** 配置项ID */
  ConfigId?: string;
  /** 配置项名称 */
  ConfigName?: string;
  /** 部署组ID */
  GroupId?: string;
  /** 命名空间ID */
  NamespaceId?: string;
  /** 集群ID */
  ClusterId?: string;
  /** 应用ID */
  ApplicationId?: string;
  /** 偏移量 */
  Offset?: number;
  /** 每页条数 */
  Limit?: number;
}

declare interface DescribeFileConfigReleasesResponse {
  /** 配置项发布信息列表 */
  Result?: TsfPageFileConfigRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFileConfigsRequest {
  /** 配置项ID */
  ConfigId?: string;
  /** 配置项ID列表 */
  ConfigIdList?: string[];
  /** 配置项名称 */
  ConfigName?: string;
  /** 应用ID */
  ApplicationId?: string;
  /** 偏移量 */
  Offset?: number;
  /** 每页条数 */
  Limit?: number;
  /** 配置项版本 */
  ConfigVersion?: string;
}

declare interface DescribeFileConfigsResponse {
  /** 文件配置项列表 */
  Result: TsfPageFileConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowLastBatchStateRequest {
  /** 工作流 ID */
  FlowId: string;
}

declare interface DescribeFlowLastBatchStateResponse {
  /** 工作流批次最新状态 */
  Result?: TaskFlowLastBatchState;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewayAllGroupApisRequest {
  /** 网关部署组ID */
  GatewayDeployGroupId: string;
  /** 搜索关键字，支持分组名称或API Path */
  SearchWord?: string;
}

declare interface DescribeGatewayAllGroupApisResponse {
  /** 网关分组和API列表信息 */
  Result?: GatewayVo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewayApisRequest {
  /** 分组ID */
  GroupId: string;
  /** 翻页偏移量 */
  Offset: number;
  /** 每页的记录数 */
  Limit: number;
  /** 搜索关键字，支持 API path */
  SearchWord?: string;
  /** 部署组ID */
  GatewayDeployGroupId?: string;
}

declare interface DescribeGatewayApisResponse {
  /** 翻页结构 */
  Result: TsfPageApiDetailInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGatewayMonitorOverviewRequest {
  /** 网关部署组ID */
  GatewayDeployGroupId: string;
}

declare interface DescribeGatewayMonitorOverviewResponse {
  /** 监控概览对象 */
  Result?: MonitorOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupAttributeRequest {
  /** 部署组ID字段 */
  GroupId: string;
}

declare interface DescribeGroupAttributeResponse {
  /** 虚拟机部署组信息 */
  Result?: VmGroupOther | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupBindedGatewaysRequest {
  /** API 分组ID */
  GroupId: string;
  /** 翻页查询偏移量 */
  Offset: number;
  /** 翻页查询每页记录数 */
  Limit: number;
  /** 搜索关键字 */
  SearchWord?: string;
}

declare interface DescribeGroupBindedGatewaysResponse {
  /** 翻页结构体 */
  Result: TsfPageGatewayDeployGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupBusinessLogConfigsRequest {
  /** 分组ID */
  GroupId: string;
}

declare interface DescribeGroupBusinessLogConfigsResponse {
  /** 业务日志配置列表 */
  Result?: TsfPageBusinessLogConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupGatewaysRequest {
  /** 网关部署组ID */
  GatewayDeployGroupId: string;
  /** 翻页查询偏移量 */
  Offset: number;
  /** 翻页查询每页记录数 */
  Limit: number;
  /** 搜索关键字 */
  SearchWord?: string;
}

declare interface DescribeGroupGatewaysResponse {
  /** API分组信息 */
  Result?: TsfPageApiGroupInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupInstancesRequest {
  /** 部署组ID */
  GroupId: string;
  /** 搜索字段 */
  SearchWord?: string;
  /** 排序字段 */
  OrderBy?: string;
  /** 排序类型 */
  OrderType?: number;
  /** 偏移量 */
  Offset?: number;
  /** 分页个数 */
  Limit?: number;
}

declare interface DescribeGroupInstancesResponse {
  /** 部署组机器信息 */
  Result?: TsfPageInstance | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupReleaseRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface DescribeGroupReleaseResponse {
  /** 部署组发布的相关信息 */
  Result: GroupRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface DescribeGroupResponse {
  /** 虚拟机部署组详情 */
  Result: VmGroup | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupUseDetailRequest {
  /** 网关部署组ID */
  GatewayDeployGroupId: string;
  /** 网关分组ID */
  GroupId: string;
  /** 查询的日期,格式：yyyy-MM-dd HH:mm:ss */
  StartTime: string;
  /** 查询的日期,格式：yyyy-MM-dd HH:mm:ss */
  EndTime: string;
  /** 指定top的条数,默认为10 */
  Count?: number;
}

declare interface DescribeGroupUseDetailResponse {
  /** 日使用统计对象 */
  Result?: GroupDailyUseStatistics;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupsRequest {
  /** 搜索字段 */
  SearchWord?: string;
  /** 应用ID */
  ApplicationId?: string;
  /** 排序字段 */
  OrderBy?: string;
  /** 排序方式 */
  OrderType?: number;
  /** 偏移量 */
  Offset?: number;
  /** 分页个数 */
  Limit?: number;
  /** 命名空间ID */
  NamespaceId?: string;
  /** 集群ID */
  ClusterId?: string;
  /** 部署组资源类型列表 */
  GroupResourceTypeList?: string[];
  /** 部署组状态过滤字段 */
  Status?: string;
  /** 无 */
  GroupIdList?: string[];
}

declare interface DescribeGroupsResponse {
  /** 虚拟机部署组分页信息 */
  Result: TsfPageVmGroup | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGroupsWithPluginRequest {
  /** 插件ID */
  PluginId: string;
  /** 绑定/未绑定: true / false */
  Bound: boolean;
  /** 翻页偏移量 */
  Offset: number;
  /** 每页记录数量 */
  Limit: number;
  /** 搜索关键字 */
  SearchWord?: string;
  /** 网关实体ID */
  GatewayInstanceId?: string;
}

declare interface DescribeGroupsWithPluginResponse {
  /** API分组信息列表 */
  Result: TsfPageApiGroupInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageRepositoryRequest {
  /** 仓库名，搜索关键字,不带命名空间的 */
  SearchWord?: string;
  /** 偏移量，取值从0开始 */
  Offset?: number;
  /** 分页个数，默认为20， 取值应为1~100 */
  Limit?: number;
  /** 企业: tcr ；个人: personal或者不填 */
  RepoType?: string;
  /** 应用id */
  ApplicationId?: string;
  /** TcrRepoInfo值 */
  TcrRepoInfo?: TcrRepoInfo;
}

declare interface DescribeImageRepositoryResponse {
  /** 查询的权限数据对象 */
  Result: ImageRepositoryResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageTagsRequest {
  /** 应用Id */
  ApplicationId: string;
  /** 偏移量，取值从0开始 */
  Offset?: number;
  /** 分页个数，默认为20， 取值应为1~100 */
  Limit?: number;
  /** 不填和0:查询 1:不查询 */
  QueryImageIdFlag?: number;
  /** 可用于搜索的 tag 名字 */
  SearchWord?: string;
  /** 企业: tcr ；个人: personal或者不填 */
  RepoType?: string;
  /** TcrRepoInfo值 */
  TcrRepoInfo?: TcrRepoInfo;
}

declare interface DescribeImageTagsResponse {
  /** 查询的权限数据对象 */
  Result: ImageTagsResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInovcationIndicatorsRequest {
  /** 维度 */
  Dimension: string;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 命名空间ID */
  NamespaceId?: string;
  /** 微服务ID */
  ServiceId?: string;
  /** 调用方服务名 */
  CallerServiceName?: string;
  /** 被调方服务名 */
  CalleeServiceName?: string;
  /** 调用方接口名 */
  CallerInterfaceName?: string;
  /** 被调方接口名 */
  CalleeInterfaceName?: string;
  /** 应用ID */
  ApplicationId?: string;
  /** 部署组ID */
  GroupId?: string;
  /** 实例ID */
  InstanceId?: string;
}

declare interface DescribeInovcationIndicatorsResponse {
  /** 服务调用监控指标 */
  Result?: InvocationIndicator | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 过滤条件 */
  Filters?: Filter[];
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 分页个数，默认为20，最大100 */
  Limit?: number;
}

declare interface DescribeInstancesResponse {
  /** 机器列表信息 */
  Result?: InstanceEnrichedInfoPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInvocationMetricDataCurveRequest {
  /** 查询开始时间 */
  StartTime?: string;
  /** 查询结束时间 */
  EndTime?: string;
  /** 查询时间粒度，单位秒可选值：60、3600、86400 */
  Period?: number;
  /** 查询指标维度 */
  MetricDimensions?: MetricDimension[];
  /** 查询指标名 */
  Metrics?: Metric[];
  /** 视图视角。可选值：SERVER, CLIENT。默认为SERVER */
  Kind?: string;
  /** 类型。组件监控使用，可选值：SQL 或者 NoSQL */
  Type?: string;
}

declare interface DescribeInvocationMetricDataCurveResponse {
  /** 指标监控数据曲线集合 */
  Result: MetricDataCurve[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInvocationMetricDataDimensionRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 开始index */
  Offset: number;
  /** 分页大小 */
  Limit: number;
  /** 聚合维度 */
  DimensionName: string;
  /** 搜索关键字 */
  SearchWord?: string;
  /** 维度 */
  MetricDimensionValues?: MetricDimensionValue[];
}

declare interface DescribeInvocationMetricDataDimensionResponse {
  /** 维度 */
  Result?: TsfPageDimension;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInvocationMetricDataPointRequest {
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 维度 */
  MetricDimensionValues: MetricDimensionValue[];
  /** 指标 */
  Metrics: Metric[];
  /** 调用视角。可选值：SERVER, CLIENT。默认为SERVER */
  Kind?: string;
}

declare interface DescribeInvocationMetricDataPointResponse {
  /** 单值指标列表 */
  Result: MetricDataSingleValue[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInvocationMetricScatterPlotRequest {
  /** 查询开始时间 */
  StartTime?: string;
  /** 查询结束时间 */
  EndTime?: string;
  /** 查询时间粒度，单位秒。可选值：60、3600、86400。 */
  Period?: number;
  /** 查询指标维度 */
  MetricDimensions?: MetricDimension[];
  /** 查询指标名 */
  Metrics?: Metric[];
  /** 视图视角。可选值：SERVER, CLIENT。默认为SERVER */
  Kind?: string;
}

declare interface DescribeInvocationMetricScatterPlotResponse {
  /** 多值时间抽统计指标 */
  Result: InvocationMetricScatterPlot | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJvmMonitorRequest {
  /** 查询的实例Id */
  InstanceId: string;
  /** 实例所属应用Id */
  ApplicationId: string;
  /** 时间粒度,单位:秒 */
  TimeGranularity: number;
  /** 查询数据起始时间格式(yyyy-MM-dd HH:mm:ss) */
  From: string;
  /** 查询数据结束时间格式(yyyy-MM-dd HH:mm:ss) */
  To: string;
  /** 查询的监控图列表,以返回值属性名作为入参 */
  RequiredPictures: string[];
  /** 扩展字段 */
  Tag?: string;
}

declare interface DescribeJvmMonitorResponse {
  /** Java实例jvm监控数据 */
  Result?: JvmMonitorData | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLaneRulesRequest {
  /** 每页展示的条数 */
  Limit: number;
  /** 翻页偏移量 */
  Offset: number;
  /** 搜索关键词 */
  SearchWord?: string;
  /** 泳道规则ID（用于精确搜索） */
  RuleId?: string;
  /** 无 */
  RuleIdList?: string[];
}

declare interface DescribeLaneRulesResponse {
  /** 泳道规则列表 */
  Result: LaneRules | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLanesRequest {
  /** 每页展示的条数 */
  Limit?: number;
  /** 翻页偏移量 */
  Offset?: number;
  /** 搜索关键字 */
  SearchWord?: string;
  /** 无 */
  LaneIdList?: string[];
  /** 无 */
  DisableProgramAuthCheck?: boolean;
}

declare interface DescribeLanesResponse {
  /** 泳道列表 */
  Result: LaneInfos | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMicroserviceRequest {
  /** 微服务ID */
  MicroserviceId: string;
  /** 偏移量 */
  Offset?: number;
  /** 分页个数 */
  Limit?: number;
  /** 可选，根据部署组ID进行过滤 */
  GroupIds?: string[];
  /** 过滤条件。多个 filter 之间是与关系，单个 filter 多个 value 之间是或关系。filter name 取值有：id（实例id）、name（实例名）、lan-ip（内网ip）、node-ip（所在节点ip） */
  Filters?: Filter[];
}

declare interface DescribeMicroserviceResponse {
  /** 微服务详情实例列表 */
  Result: TsfPageMsInstance | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMicroservicesRequest {
  /** 命名空间ID */
  NamespaceId: string;
  /** 搜索字段 */
  SearchWord?: string;
  /** 排序字段 */
  OrderBy?: string;
  /** 排序类型 */
  OrderType?: number;
  /** 偏移量 */
  Offset?: number;
  /** 分页个数 */
  Limit?: number;
  /** 状态过滤，online、offline、single_online */
  Status?: string[];
  /** IdList */
  MicroserviceIdList?: string[];
  /** 搜索的服务名列表 */
  MicroserviceNameList?: string[];
}

declare interface DescribeMicroservicesResponse {
  /** 微服务分页列表信息 */
  Result: TsfPageMicroservice | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMsApiListRequest {
  /** 微服务ID */
  MicroserviceId: string;
  /** 搜索关键字 */
  SearchWord?: string;
  /** 每页的数量 */
  Limit?: number;
  /** 翻页偏移量 */
  Offset?: number;
}

declare interface DescribeMsApiListResponse {
  /** 相应结果 */
  Result?: TsfApiListResponse;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeOverviewInvocationRequest {
  /** 命名空间ID */
  NamespaceId?: string;
  /** 监控统计类型，可选值：SumReqAmount、AvgFailureRate、AvgTimeCost，分别对应请求量、请求错误率、平均响应耗时 */
  Type?: string;
  /** 监控统计数据粒度，可选值：60、3600、86400，分别对应1分钟、1小时、1天 */
  Period?: number;
  /** 查询开始时间，默认为当天的 00:00:00 */
  StartTime?: string;
  /** 查询结束时间，默认为当前时间 */
  EndTime?: string;
}

declare interface DescribeOverviewInvocationResponse {
  /** 监控统计数据列表 */
  Result: MetricDataPoint[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePathRewriteRequest {
  /** 路径重写规则ID */
  PathRewriteId: string;
}

declare interface DescribePathRewriteResponse {
  /** 路径重写规则对象 */
  Result?: PathRewrite;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePathRewritesRequest {
  /** 网关部署组ID */
  GatewayGroupId: string;
  /** 根据正则表达式或替换的内容模糊查询 */
  SearchWord?: string;
  /** 每页数量 */
  Limit?: number;
  /** 起始偏移量 */
  Offset?: number;
}

declare interface DescribePathRewritesResponse {
  /** 路径重写翻页对象 */
  Result?: PathRewritePage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePkgsRequest {
  /** 应用ID（只传入应用ID，返回该应用下所有软件包信息） */
  ApplicationId: string;
  /** 查询关键字（支持根据包ID，包名，包版本号搜索） */
  SearchWord?: string;
  /** 排序关键字（默认为"UploadTime"：上传时间） */
  OrderBy?: string;
  /** 升序：0/降序：1（默认降序） */
  OrderType?: number;
  /** 查询起始偏移 */
  Offset?: number;
  /** 返回数量限制 */
  Limit?: number;
  /** 程序包仓库类型 */
  RepositoryType?: string;
  /** 程序包仓库id */
  RepositoryId?: string;
  /** 程序包类型数组支持（fatjar jar war tar.gz zip） */
  PackageTypeList?: string[];
}

declare interface DescribePkgsResponse {
  /** 符合查询程序包信息列表 */
  Result: PkgList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePluginInstancesRequest {
  /** 分组或者API的ID */
  ScopeValue: string;
  /** 绑定: true; 未绑定: false */
  Bound: boolean;
  /** 翻页偏移量 */
  Offset: number;
  /** 每页展示的条数 */
  Limit: number;
  /** 插件类型 */
  Type?: string;
  /** 搜索关键字 */
  SearchWord?: string;
}

declare interface DescribePluginInstancesResponse {
  /** 插件信息列表 */
  Result: TsfPageGatewayPlugin;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePodInstancesRequest {
  /** 实例所属groupId */
  GroupId: string;
  /** 偏移量，取值从0开始 */
  Offset?: number;
  /** 分页个数，默认为20， 取值应为1~50 */
  Limit?: number;
  /** 过滤字段 */
  PodNameList?: string[];
}

declare interface DescribePodInstancesResponse {
  /** 查询的权限数据对象 */
  Result: GroupPodResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProgramsRequest {
  /** 模糊查询数据集ID，数据集名称，不传入时查询全量 */
  SearchWord?: string;
  /** 每页数量 */
  Limit?: number;
  /** 起始偏移量 */
  Offset?: number;
}

declare interface DescribeProgramsResponse {
  /** 数据集列表 */
  Result?: PagedProgram;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicConfigReleaseLogsRequest {
  /** 命名空间ID，不传入时查询全量 */
  NamespaceId?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 每页条数，默认为20 */
  Limit?: number;
}

declare interface DescribePublicConfigReleaseLogsResponse {
  /** 分页后的公共配置项发布历史列表 */
  Result?: TsfPageConfigReleaseLog | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicConfigReleasesRequest {
  /** 配置项名称，不传入时查询全量 */
  ConfigName?: string;
  /** 命名空间ID，不传入时查询全量 */
  NamespaceId?: string;
  /** 每页条数 */
  Limit?: number;
  /** 偏移量 */
  Offset?: number;
  /** 配置项ID，不传入时查询全量 */
  ConfigId?: string;
}

declare interface DescribePublicConfigReleasesResponse {
  /** 公共配置发布信息 */
  Result?: TsfPageConfigRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicConfigRequest {
  /** 需要查询的配置项ID */
  ConfigId: string;
}

declare interface DescribePublicConfigResponse {
  /** 全局配置 */
  Result?: Config | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicConfigSummaryRequest {
  /** 查询关键字，模糊查询：配置项名称，不传入时查询全量 */
  SearchWord?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 每页条数，默认为20 */
  Limit?: number;
  /** 按时间排序：creation_time；按名称排序：config_name */
  OrderBy?: string;
  /** 升序传 0，降序传 1 */
  OrderType?: number;
  /** 无 */
  ConfigTagList?: string[];
  /** 无 */
  DisableProgramAuthCheck?: boolean;
  /** 无 */
  ConfigIdList?: string[];
}

declare interface DescribePublicConfigSummaryResponse {
  /** 分页的全局配置统计信息列表 */
  Result: TsfPageConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePublicConfigsRequest {
  /** 配置项ID，不传入时查询全量，高优先级 */
  ConfigId?: string;
  /** 偏移量，默认为0 */
  Offset?: number;
  /** 每页条数，默认为20 */
  Limit?: number;
  /** 配置项ID列表，不传入时查询全量，低优先级 */
  ConfigIdList?: string[];
  /** 配置项名称，精确查询，不传入时查询全量 */
  ConfigName?: string;
  /** 配置项版本，精确查询，不传入时查询全量 */
  ConfigVersion?: string;
}

declare interface DescribePublicConfigsResponse {
  /** 分页后的全局配置项列表 */
  Result: TsfPageConfig | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReleasedConfigRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface DescribeReleasedConfigResponse {
  /** 已发布的配置内容 */
  Result?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRepositoriesRequest {
  /** 查询关键字（按照仓库名称搜索） */
  SearchWord?: string;
  /** 查询起始偏移 */
  Offset?: number;
  /** 返回数量限制 */
  Limit?: number;
  /** 仓库类型（默认仓库：default，私有仓库：private） */
  RepositoryType?: string;
}

declare interface DescribeRepositoriesResponse {
  /** 符合查询仓库信息列表 */
  Result?: RepositoryList;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRepositoryRequest {
  /** 仓库ID */
  RepositoryId: string;
}

declare interface DescribeRepositoryResponse {
  /** 查询的仓库信息 */
  Result?: RepositoryInfo | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceTaskStatusRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DescribeResourceTaskStatusResponse {
  /** 资源任务执行状态结果 */
  Result?: ResourceTaskStatusResult;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSimpleApplicationsRequest {
  /** 应用ID列表 */
  ApplicationIdList?: string[];
  /** 应用类型 */
  ApplicationType?: string;
  /** 每页条数 */
  Limit?: number;
  /** 起始偏移量 */
  Offset?: number;
  /** 微服务类型 */
  MicroserviceType?: string;
  /** 资源类型数组 */
  ApplicationResourceTypeList?: string[];
  /** 通过id和name进行关键词过滤 */
  SearchWord?: string;
  /** 无 */
  DisableProgramAuthCheck?: boolean;
}

declare interface DescribeSimpleApplicationsResponse {
  /** 简单应用分页对象 */
  Result: TsfPageSimpleApplication | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSimpleClustersRequest {
  /** 需要查询的集群ID列表，不填或不传入时查询所有内容 */
  ClusterIdList?: string[];
  /** 需要查询的集群类型，不填或不传入时查询所有内容 */
  ClusterType?: string;
  /** 查询偏移量，默认为0 */
  Offset?: number;
  /** 分页个数，默认为20， 取值应为1~50 */
  Limit?: number;
  /** 对id和name进行关键词过滤 */
  SearchWord?: string;
  /** 无 */
  DisableProgramAuthCheck?: boolean;
}

declare interface DescribeSimpleClustersResponse {
  /** TSF集群分页对象 */
  Result: TsfPageCluster | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSimpleGroupsRequest {
  /** 部署组ID列表，不填写时查询全量 */
  GroupIdList?: string[];
  /** 应用ID，不填写时查询全量 */
  ApplicationId?: string;
  /** 集群ID，不填写时查询全量 */
  ClusterId?: string;
  /** 命名空间ID，不填写时查询全量 */
  NamespaceId?: string;
  /** 每页条数 */
  Limit?: number;
  /** 起始偏移量 */
  Offset?: number;
  /** 部署组ID，不填写时查询全量 */
  GroupId?: string;
  /** 模糊查询，部署组名称，不填写时查询全量 */
  SearchWord?: string;
  /** 部署组类型，精确过滤字段，M：service mesh, P：原生应用， G：网关应用 */
  AppMicroServiceType?: string;
}

declare interface DescribeSimpleGroupsResponse {
  /** 简单部署组列表 */
  Result?: TsfPageSimpleGroup | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSimpleNamespacesRequest {
  /** 命名空间ID列表，不传入时查询全量 */
  NamespaceIdList?: string[];
  /** 集群ID，不传入时查询全量 */
  ClusterId?: string;
  /** 每页条数 */
  Limit?: number;
  /** 起始偏移量 */
  Offset?: number;
  /** 命名空间ID，不传入时查询全量 */
  NamespaceId?: string;
  /** 查询资源类型列表 */
  NamespaceResourceTypeList?: string[];
  /** 通过id和name进行过滤 */
  SearchWord?: string;
  /** 查询的命名空间类型列表 */
  NamespaceTypeList?: string[];
  /** 通过命名空间名精确过滤 */
  NamespaceName?: string;
  /** 通过是否是默认命名空间过滤，不传表示拉取全部命名空间。0：默认，命名空间。1：非默认命名空间 */
  IsDefault?: string;
  /** 无 */
  DisableProgramAuthCheck?: boolean;
}

declare interface DescribeSimpleNamespacesResponse {
  /** 命名空间分页列表 */
  Result: TsfPageNamespace | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeStatisticsRequest {
  /** 类型：Interface、Service、Group、Instance、SQL、NoSQL */
  Type: string;
  /** 步长，单位s：60、3600、86400 */
  TimeStep: number;
  /** 偏移量，取值范围大于等于0，默认值为0 */
  Offset: number;
  /** 单页请求配置数量，取值范围[1, 50]，默认值为10 */
  Limit: number;
  /** 命名空间Id */
  NamespaceId?: string;
  /** 排序字段:AvgTimeConsuming[默认]、RequestCount、ErrorRate。实例监控还支持 CpuPercent */
  OrderBy?: string;
  /** 排序方式：ASC:0、DESC:1 */
  OrderType?: number;
  /** 开始时间：年月日 时分秒2020-05-12 14:43:12 */
  EndTime?: string;
  /** 开始时间：年月日 时分秒2020-05-12 14:43:12 */
  StartTime?: string;
  /** 服务名称 */
  ServiceName?: string;
  /** 搜索关键词 */
  SearchWord?: string;
  /** 维度 */
  MetricDimensionValues?: MetricDimensionValue[];
  /** 聚合关键词 */
  BucketKey?: string;
  /** 数据库 */
  DbName?: string;
  /** 命名空间id数组 */
  NamespaceIdList?: string[];
}

declare interface DescribeStatisticsResponse {
  /** 查询服务统计结果 */
  Result: ServiceStatisticsResults | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskDetailRequest {
  /** 任务ID */
  TaskId: string;
  /** 任务历史ID */
  TaskLogId?: string;
}

declare interface DescribeTaskDetailResponse {
  /** 任务详情 */
  Result: TaskRecord;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskLastStatusRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DescribeTaskLastStatusResponse {
  /** 任务上一次执行状态 */
  Result?: TaskLastExecuteStatus;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskRecordsRequest {
  /** 翻页偏移量。 */
  Offset?: number;
  /** 翻页查询单页数量。 */
  Limit?: number;
  /** 模糊查询关键字，支持任务ID和任务名称。 */
  SearchWord?: string;
  /** 任务启用状态。enabled/disabled */
  TaskState?: string;
  /** 分组ID。 */
  GroupId?: string;
  /** 任务类型。 */
  TaskType?: string;
  /** 任务触发类型，UNICAST、BROADCAST。 */
  ExecuteType?: string;
  /** 无 */
  Ids?: string[];
}

declare interface DescribeTaskRecordsResponse {
  /** 任务记录列表 */
  Result: TaskRecordPage | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnitApiUseDetailRequest {
  /** 网关部署组ID */
  GatewayDeployGroupId: string;
  /** 网关分组Api ID */
  ApiId: string;
  /** 查询的日期,格式：yyyy-MM-dd HH:mm:ss */
  StartTime: string;
  /** 查询的日期,格式：yyyy-MM-dd HH:mm:ss */
  EndTime: string;
  /** 网关实例ID */
  GatewayInstanceId: string;
  /** 网关分组ID */
  GroupId: string;
  /** 翻页查询偏移量 */
  Offset: number;
  /** 翻页查询每页记录数 */
  Limit: number;
  /** 监控统计数据粒度 */
  Period?: number;
}

declare interface DescribeUnitApiUseDetailResponse {
  /** 单元化使用统计对象 */
  Result: GroupUnitApiUseStatistics;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnitNamespacesRequest {
  /** 网关实体ID */
  GatewayInstanceId: string;
  /** 根据命名空间名或ID模糊查询 */
  SearchWord?: string;
  /** 翻页查询偏移量 */
  Offset?: number;
  /** 翻页查询每页记录数 */
  Limit?: number;
}

declare interface DescribeUnitNamespacesResponse {
  /** 单元化命名空间对象列表 */
  Result?: TsfPageUnitNamespace | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnitRuleRequest {
  /** 单元化规则ID */
  Id: string;
}

declare interface DescribeUnitRuleResponse {
  /** 单元化规则对象 */
  Result: UnitRule | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnitRulesRequest {
  /** 网关实体ID */
  GatewayInstanceId: string;
  /** 根据规则名或备注内容模糊查询 */
  SearchWord?: string;
  /** 启用状态, disabled: 未发布， enabled: 发布 */
  Status?: string;
  /** 翻页查询偏移量 */
  Offset?: number;
  /** 翻页查询每页记录数 */
  Limit?: number;
}

declare interface DescribeUnitRulesResponse {
  /** 分页列表信息 */
  Result?: TsfPageUnitRule[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUnitRulesV2Request {
  /** 网关实体ID */
  GatewayInstanceId: string;
  /** 根据规则名或备注内容模糊查询 */
  SearchWord?: string;
  /** 启用状态, disabled: 未发布， enabled: 发布 */
  Status?: string;
  /** 翻页查询偏移量 */
  Offset?: number;
  /** 翻页查询每页记录数 */
  Limit?: number;
}

declare interface DescribeUnitRulesV2Response {
  /** 分页列表信息 */
  Result?: TsfPageUnitRuleV2 | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUploadInfoRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 程序包名 */
  PkgName: string;
  /** 程序包版本 */
  PkgVersion: string;
  /** 程序包类型 */
  PkgType: string;
  /** 程序包介绍 */
  PkgDesc?: string;
  /** 程序包仓库类型 */
  RepositoryType?: string;
  /** 程序包仓库id */
  RepositoryId?: string;
}

declare interface DescribeUploadInfoResponse {
  /** COS上传信息 */
  Result?: CosUploadInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsableUnitNamespacesRequest {
  /** 根据命名空间名或ID模糊查询 */
  SearchWord?: string;
  /** 翻页查询偏移量 */
  Offset?: number;
  /** 翻页查询每页记录数 */
  Limit?: number;
}

declare interface DescribeUsableUnitNamespacesResponse {
  /** 单元化命名空间对象列表 */
  Result?: TsfPageUnitNamespace | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableTaskFlowRequest {
  /** 工作流 ID */
  FlowId: string;
}

declare interface DisableTaskFlowResponse {
  /** true成功，false: 失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableTaskRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface DisableTaskResponse {
  /** 操作成功 or 失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableUnitRouteRequest {
  /** 网关实体ID */
  Id: string;
}

declare interface DisableUnitRouteResponse {
  /** 返回结果，成功失败 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableUnitRuleRequest {
  /** 规则ID */
  Id: string;
}

declare interface DisableUnitRuleResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateBusinessLogConfigRequest {
  /** 业务日志配置项ID列表 */
  ConfigIdList: string[];
  /** TSF分组ID */
  GroupId: string;
}

declare interface DisassociateBusinessLogConfigResponse {
  /** 操作结果 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateKafkaConfigRequest {
  /** 配置项id */
  ConfigId: string;
  /** 部署组id */
  GroupIds?: string[];
}

declare interface DisassociateKafkaConfigResponse {
  /** 解除绑定是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DraftApiGroupRequest {
  /** Api 分组ID */
  GroupId: string;
}

declare interface DraftApiGroupResponse {
  /** true: 成功, false: 失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableTaskFlowRequest {
  /** 工作流 ID */
  FlowId: string;
}

declare interface EnableTaskFlowResponse {
  /** true成功，false: 失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableTaskRequest {
  /** 启用任务 */
  TaskId: string;
}

declare interface EnableTaskResponse {
  /** 操作成功or失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableUnitRouteRequest {
  /** 网关实体ID */
  Id: string;
}

declare interface EnableUnitRouteResponse {
  /** 返回结果，成功失败 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableUnitRuleRequest {
  /** 规则ID */
  Id: string;
}

declare interface EnableUnitRuleResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExecuteTaskFlowRequest {
  /** 工作流 ID */
  FlowId?: string;
}

declare interface ExecuteTaskFlowResponse {
  /** 工作流批次ID */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExecuteTaskRequest {
  /** 任务 ID。 */
  TaskId: string;
}

declare interface ExecuteTaskResponse {
  /** 成功/失败 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExpandGroupRequest {
  /** 部署组ID */
  GroupId: string;
  /** 扩容的机器实例ID列表 */
  InstanceIdList: string[];
}

declare interface ExpandGroupResponse {
  /** 任务ID */
  Result?: TaskId | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyApplicationRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 应用名称 */
  ApplicationName?: string;
  /** 应用备注 */
  ApplicationDesc?: string;
  /** 应用备注名 */
  ApplicationRemarkName?: string;
  /** 服务配置信息列表 */
  ServiceConfigList?: ServiceConfig[];
}

declare interface ModifyApplicationResponse {
  /** true/false */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群描述信息 */
  ClusterDesc?: string;
  /** 备注名 */
  ClusterRemarkName?: string;
}

declare interface ModifyClusterResponse {
  /** 更新集群详情操作是否成功。true： 操作成功。false：操作失败。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyContainerGroupRequest {
  /** 部署组ID */
  GroupId?: string;
  /** 0:公网 1:集群内访问 2：NodePort */
  AccessType?: number;
  /** ProtocolPorts数组 */
  ProtocolPorts?: ProtocolPort[];
  /** 更新方式：0:快速更新 1:滚动更新 */
  UpdateType?: number;
  /** 更新间隔,单位秒 */
  UpdateIvl?: number;
  /** 子网ID */
  SubnetId?: string;
  /** 部署组备注 */
  Alias?: string;
}

declare interface ModifyContainerGroupResponse {
  /** 更新部署组是否成功。true：成功。false：失败。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyContainerReplicasRequest {
  /** 部署组ID，部署组唯一标识 */
  GroupId: string;
  /** 实例数量 */
  InstanceNum: number;
}

declare interface ModifyContainerReplicasResponse {
  /** 结果true：成功；false：失败； */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyGroupRequest {
  /** 部署组ID */
  GroupId: string;
  /** 部署组名称 */
  GroupName?: string;
  /** 部署组描述 */
  GroupDesc?: string;
  /** 部署组备注 */
  Alias?: string;
}

declare interface ModifyGroupResponse {
  /** 更新部署组详情是否成功。true：操作成功。false：操作失败。 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLaneRequest {
  /** 泳道ID */
  LaneId: string;
  /** 泳道名称 */
  LaneName: string;
  /** 备注 */
  Remark: string;
}

declare interface ModifyLaneResponse {
  /** 操作状态 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLaneRuleRequest {
  /** 泳道规则ID */
  RuleId: string;
  /** 泳道规则名称 */
  RuleName: string;
  /** 泳道规则备注 */
  Remark: string;
  /** 泳道规则标签列表 */
  RuleTagList: LaneRuleTag[];
  /** 泳道规则标签关系 */
  RuleTagRelationship: string;
  /** 泳道ID */
  LaneId: string;
  /** 开启状态 */
  Enable: boolean;
}

declare interface ModifyLaneRuleResponse {
  /** 操作状态 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMicroserviceRequest {
  /** 微服务 ID */
  MicroserviceId: string;
  /** 微服务备注信息 */
  MicroserviceDesc: string;
}

declare interface ModifyMicroserviceResponse {
  /** 修改微服务详情是否成功。true：操作成功。false：操作失败。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNamespaceRequest {
  /** 命名空间ID */
  NamespaceId: string;
  /** 命名空间名称 */
  NamespaceName?: string;
  /** 命名空间备注 */
  NamespaceDesc?: string;
  /** 是否开启高可用 */
  IsHaEnable?: string;
}

declare interface ModifyNamespaceResponse {
  /** Result */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPathRewriteRequest {
  /** 路径重写规则ID */
  PathRewriteId: string;
  /** 正则表达式 */
  Regex?: string;
  /** 替换的内容 */
  Replacement?: string;
  /** 是否屏蔽映射后路径，Y: 是 N: 否 */
  Blocked?: string;
  /** 规则顺序，越小优先级越高 */
  Order?: number;
}

declare interface ModifyPathRewriteResponse {
  /** true/false */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTaskRequest {
  /** 任务ID */
  TaskId: string;
  /** 任务名称 */
  TaskName?: string;
  /** 任务类型 */
  TaskType?: string;
  /** 任务内容 */
  TaskContent?: string;
  /** 任务执行类型 */
  ExecuteType?: string;
  /** 触发规则 */
  TaskRule?: TaskRule;
  /** 超时时间，单位 ms */
  TimeOut?: number;
  /** 分组ID */
  GroupId?: string;
  /** 分片数量 */
  ShardCount?: number;
  /** 分片参数 */
  ShardArguments?: ShardArgument[];
  /** 高级设置 */
  AdvanceSettings?: AdvanceSettings;
  /** 判断任务成功的操作符 GT/GTE */
  SuccessOperator?: string;
  /** 判断任务成功率的阈值 */
  SuccessRatio?: number;
  /** 重试次数 */
  RetryCount?: number;
  /** 重试间隔 */
  RetryInterval?: number;
  /** 任务参数，长度限制10000个字符 */
  TaskArgument?: string;
  /** 无 */
  ProgramIdList?: string[];
}

declare interface ModifyTaskResponse {
  /** 更新是否成功 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyUploadInfoRequest {
  /** 应用ID */
  ApplicationId: string;
  /** 调用DescribeUploadInfo接口时返回的软件包ID */
  PkgId: string;
  /** COS返回上传结果（默认为0：成功，其他值表示失败） */
  Result: number;
  /** 程序包MD5 */
  Md5: string;
  /** 程序包大小（单位字节） */
  Size?: number;
  /** 程序包仓库类型 */
  RepositoryType?: string;
  /** 程序包仓库id */
  RepositoryId?: string;
}

declare interface ModifyUploadInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface OperateApplicationTcrBindingRequest {
  /** bind 或 unbind */
  Command?: string;
  /** 应用id */
  ApplicationId?: string;
  /** TcrRepoInfo值 */
  TcrRepoInfo?: TcrRepoInfo;
}

declare interface OperateApplicationTcrBindingResponse {
  /** 是否成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReassociateBusinessLogConfigRequest {
  /** 原关联日志配置ID */
  ConfigId: string;
  /** 新关联日志配置ID */
  NewConfigId: string;
  /** TSF应用ID */
  ApplicationId: string;
  /** TSF部署组ID */
  GroupId: string;
}

declare interface ReassociateBusinessLogConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RedoTaskBatchRequest {
  /** 任务ID */
  TaskId: string;
  /** 批次ID */
  BatchId: string;
}

declare interface RedoTaskBatchResponse {
  /** 批次ID */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RedoTaskExecuteRequest {
  /** 任务批次ID */
  BatchId: string;
  /** 任务执行ID */
  ExecuteId: string;
  /** 任务ID */
  TaskId: string;
}

declare interface RedoTaskExecuteResponse {
  /** 成功失败 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RedoTaskFlowBatchRequest {
  /** 工作流批次 ID */
  FlowBatchId: string;
}

declare interface RedoTaskFlowBatchResponse {
  /** 工作流批次历史 ID */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RedoTaskRequest {
  /** 任务ID */
  TaskId: string;
}

declare interface RedoTaskResponse {
  /** 操作成功or失败 */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseApiGroupRequest {
  /** Api 分组ID */
  GroupId: string;
}

declare interface ReleaseApiGroupResponse {
  /** 成功/失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseConfigRequest {
  /** 配置ID */
  ConfigId: string;
  /** 部署组ID */
  GroupId: string;
  /** 发布描述 */
  ReleaseDesc?: string;
}

declare interface ReleaseConfigResponse {
  /** true：发布成功；false：发布失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseConfigWithDetailRespRequest {
  /** 配置ID */
  ConfigId: string;
  /** 部署组ID */
  GroupId: string;
  /** 发布描述 */
  ReleaseDesc?: string;
}

declare interface ReleaseConfigWithDetailRespResponse {
  /** 配置项发布 ID */
  Result?: ConfigRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseFileConfigRequest {
  /** 配置ID */
  ConfigId: string;
  /** 部署组ID */
  GroupId: string;
  /** 发布描述 */
  ReleaseDesc?: string;
}

declare interface ReleaseFileConfigResponse {
  /** 发布结果 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleasePublicConfigRequest {
  /** 配置ID */
  ConfigId: string;
  /** 命名空间ID */
  NamespaceId: string;
  /** 发布描述 */
  ReleaseDesc?: string;
}

declare interface ReleasePublicConfigResponse {
  /** true：发布成功；false：发布失败 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveInstancesRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 云主机 ID 列表 */
  InstanceIdList: string[];
}

declare interface RemoveInstancesResponse {
  /** 集群移除机器是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevocationConfigRequest {
  /** 配置项发布ID */
  ConfigReleaseId: string;
}

declare interface RevocationConfigResponse {
  /** true：回滚成功；false：回滚失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevocationPublicConfigRequest {
  /** 配置项发布ID */
  ConfigReleaseId: string;
}

declare interface RevocationPublicConfigResponse {
  /** true：撤销成功；false：撤销失败 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RevokeFileConfigRequest {
  /** 配置项发布ID */
  ConfigReleaseId: string;
}

declare interface RevokeFileConfigResponse {
  /** 撤回结果 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackConfigRequest {
  /** 配置项发布历史ID */
  ConfigReleaseLogId: string;
  /** 回滚描述 */
  ReleaseDesc?: string;
}

declare interface RollbackConfigResponse {
  /** true：回滚成功；false：回滚失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchBusinessLogRequest {
  /** 日志配置项ID */
  ConfigId: string;
  /** 机器实例ID，不传表示全部实例 */
  InstanceIds?: string[];
  /** 开始时间 */
  StartTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 请求偏移量，取值范围大于等于0，默认值为0 */
  Offset?: number;
  /** 单页请求配置数量，取值范围[1, 200]，默认值为50 */
  Limit?: number;
  /** 排序规则，默认值"time" */
  OrderBy?: string;
  /** 排序方式，取值"asc"或"desc"，默认值"desc" */
  OrderType?: string;
  /** 检索关键词 */
  SearchWords?: string[];
  /** 部署组ID列表，不传表示全部部署组 */
  GroupIds?: string[];
  /** 检索类型，取值"LUCENE", "REGEXP", "NORMAL" */
  SearchWordType?: string;
  /** 批量请求类型，取值"page"或"scroll" */
  BatchType?: string;
  /** 游标ID */
  ScrollId?: string;
}

declare interface SearchBusinessLogResponse {
  /** 业务日志列表 */
  Result: TsfPageBusinessLogV2 | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SearchStdoutLogRequest {
  /** 机器实例ID */
  InstanceId?: string;
  /** 单页请求配置数量，取值范围[1, 500]，默认值为100 */
  Limit?: number;
  /** 检索关键词 */
  SearchWords?: string[];
  /** 查询起始时间 */
  StartTime?: string;
  /** 部署组ID */
  GroupId?: string;
  /** 查询结束时间 */
  EndTime?: string;
  /** 请求偏移量，取值范围大于等于0，默认值为0 */
  Offset?: number;
  /** 排序规则，默认值"time" */
  OrderBy?: string;
  /** 排序方式，取值"asc"或"desc"，默认值"desc" */
  OrderType?: string;
  /** 检索类型，取值"LUCENE", "REGEXP","NORMAL" */
  SearchWordType?: string;
  /** 批量请求类型，取值"page"或"scroll"，默认值"page" */
  BatchType?: string;
  /** 游标ID */
  ScrollId?: string;
}

declare interface SearchStdoutLogResponse {
  /** 标准输出日志列表 */
  Result: TsfPageStdoutLogV2 | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ShrinkGroupRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface ShrinkGroupResponse {
  /** 任务ID */
  Result?: TaskId | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ShrinkInstancesRequest {
  /** 部署组ID */
  GroupId: string;
  /** 下线机器实例ID列表 */
  InstanceIdList: string[];
}

declare interface ShrinkInstancesResponse {
  /** 任务ID */
  Result?: TaskId;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartContainerGroupRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface StartContainerGroupResponse {
  /** 启动操作是否成功。true：启动成功false：启动失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartGroupRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface StartGroupResponse {
  /** 任务ID */
  Result?: TaskId | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopContainerGroupRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface StopContainerGroupResponse {
  /** 停止操作是否成功。true：停止成功false：停止失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopGroupRequest {
  /** 部署组ID */
  GroupId: string;
}

declare interface StopGroupResponse {
  /** 任务ID */
  Result?: TaskId | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopTaskBatchRequest {
  /** 批次ID */
  BatchId: string;
  /** 参数ID */
  TaskId?: string;
}

declare interface StopTaskBatchResponse {
  /** 操作成功 or 失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopTaskExecuteRequest {
  /** 任务执行ID */
  ExecuteId: string;
  /** 任务批次ID */
  BatchId?: string;
  /** 任务ID */
  TaskId?: string;
}

declare interface StopTaskExecuteResponse {
  /** 操作成功 or 失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateTaskFlowBatchRequest {
  /** 工作流批次 ID */
  FlowBatchId: string;
}

declare interface TerminateTaskFlowBatchResponse {
  /** 是否停止成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TsfApiListResponse {
  /** 数量 */
  TotalCount: number | null;
  /** API 列表 */
  Content: MsApiArray[] | null;
}

declare interface UnbindApiGroupRequest {
  /** 分组网关id列表 */
  GroupGatewayList: GatewayGroupIds[];
}

declare interface UnbindApiGroupResponse {
  /** 返回结果，成功失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateApiGroupRequest {
  /** Api 分组ID */
  GroupId: string;
  /** Api 分组名称 */
  GroupName?: string;
  /** Api 分组描述 */
  Description?: string;
  /** 鉴权类型 */
  AuthType?: string;
  /** 分组上下文 */
  GroupContext?: string;
  /** 命名空间参数key值 */
  NamespaceNameKey?: string;
  /** 微服务名参数key值 */
  ServiceNameKey?: string;
  /** 命名空间参数位置，path，header或query，默认是path */
  NamespaceNameKeyPosition?: string;
  /** 微服务名参数位置，path，header或query，默认是path */
  ServiceNameKeyPosition?: string;
}

declare interface UpdateApiGroupResponse {
  /** 返回结果，true: 成功, false: 失败 */
  Result: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateApiRateLimitRuleRequest {
  /** 限流规则ID */
  RuleId: string;
  /** 开启/禁用，enabled/disabled */
  UsableStatus: string;
  /** qps值，开启限流规则时，必填 */
  MaxQps?: number;
}

declare interface UpdateApiRateLimitRuleResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateApiRateLimitRulesRequest {
  /** API ID 列表 */
  ApiIds: string[];
  /** 开启/禁用，enabled/disabled */
  UsableStatus: string;
  /** QPS值。开启限流规则时，必填 */
  MaxQps?: number;
}

declare interface UpdateApiRateLimitRulesResponse {
  /** 是否成功 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateApiTimeoutsRequest {
  /** API ID 列表 */
  ApiIds: string[];
  /** 开启/禁用，enabled/disabled */
  UsableStatus: string;
  /** 超时时间，单位毫秒，开启API超时时，必填 */
  Timeout?: number;
}

declare interface UpdateApiTimeoutsResponse {
  /** 是否成功 */
  Result: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateConfigTemplateRequest {
  /** 配置模板id */
  ConfigTemplateId: string;
  /** 配置模板名称 */
  ConfigTemplateName: string;
  /** 配置模板对应的微服务框架 */
  ConfigTemplateType: string;
  /** 配置模板数据 */
  ConfigTemplateValue: string;
  /** 配置模板描述 */
  ConfigTemplateDesc?: string;
}

declare interface UpdateConfigTemplateResponse {
  /** 结果true：成功；false：失败； */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateGatewayApiRequest {
  /** API ID */
  ApiId: string;
  /** API 路径 */
  Path?: string;
  /** Api 请求方法 */
  Method?: string;
  /** 请求映射 */
  PathMapping?: string;
  /** api所在服务host */
  Host?: string;
  /** api描述信息 */
  Description?: string;
}

declare interface UpdateGatewayApiResponse {
  /** 返回结果，成功失败 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateHealthCheckSettingsRequest {
  /** 部署组ID */
  GroupId: string;
  /** 是否能使健康检查 */
  EnableHealthCheck?: boolean;
  /** 健康检查配置 */
  HealthCheckSettings?: HealthCheckSettings;
}

declare interface UpdateHealthCheckSettingsResponse {
  /** 更新健康检查配置操作是否成功。true：操作成功。false：操作失败。 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateRepositoryRequest {
  /** 仓库ID */
  RepositoryId: string;
  /** 仓库描述 */
  RepositoryDesc?: string;
}

declare interface UpdateRepositoryResponse {
  /** 更新仓库是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateUnitRuleRequest {
  /** 规则ID */
  Id: string;
  /** 规则名称 */
  Name: string;
  /** 规则描述 */
  Description?: string;
  /** 规则项列表 */
  UnitRuleItemList?: UnitRuleItem[];
}

declare interface UpdateUnitRuleResponse {
  /** 是否成功 */
  Result?: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tsf 微服务平台 TSF} */
declare interface Tsf {
  (): Versions;
  /** 集群添加云主机 {@link AddClusterInstancesRequest} {@link AddClusterInstancesResponse} */
  AddClusterInstances(data: AddClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AddClusterInstancesResponse>;
  /** 集群导入云主机 {@link AddInstancesRequest} {@link AddInstancesResponse} */
  AddInstances(data: AddInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AddInstancesResponse>;
  /** 关联日志配置项到应用 {@link AssociateBusinessLogConfigRequest} {@link AssociateBusinessLogConfigResponse} */
  AssociateBusinessLogConfig(data: AssociateBusinessLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateBusinessLogConfigResponse>;
  /** 关联投递配置到部署组 {@link AssociateConfigWithGroupRequest} {@link AssociateConfigWithGroupResponse} */
  AssociateConfigWithGroup(data: AssociateConfigWithGroupRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateConfigWithGroupResponse>;
  /** 网关与API分组批量绑定 {@link BindApiGroupRequest} {@link BindApiGroupResponse} */
  BindApiGroup(data: BindApiGroupRequest, config?: AxiosRequestConfig): AxiosPromise<BindApiGroupResponse>;
  /** 批量绑定插件 {@link BindPluginRequest} {@link BindPluginResponse} */
  BindPlugin(data: BindPluginRequest, config?: AxiosRequestConfig): AxiosPromise<BindPluginResponse>;
  /** 启用或禁用API {@link ChangeApiUsableStatusRequest} {@link ChangeApiUsableStatusResponse} */
  ChangeApiUsableStatus(data: ChangeApiUsableStatusRequest, config?: AxiosRequestConfig): AxiosPromise<ChangeApiUsableStatusResponse>;
  /** 续跑任务批次 {@link ContinueRunFailedTaskBatchRequest} {@link ContinueRunFailedTaskBatchResponse} */
  ContinueRunFailedTaskBatch(data: ContinueRunFailedTaskBatchRequest, config?: AxiosRequestConfig): AxiosPromise<ContinueRunFailedTaskBatchResponse>;
  /** 一键导入API分组 {@link CreateAllGatewayApiAsyncRequest} {@link CreateAllGatewayApiAsyncResponse} */
  CreateAllGatewayApiAsync(data: CreateAllGatewayApiAsyncRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAllGatewayApiAsyncResponse>;
  /** 创建API分组 {@link CreateApiGroupRequest} {@link CreateApiGroupResponse} */
  CreateApiGroup(data: CreateApiGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApiGroupResponse>;
  /** 创建API限流规则 {@link CreateApiRateLimitRuleRequest} {@link CreateApiRateLimitRuleResponse} */
  CreateApiRateLimitRule(data: CreateApiRateLimitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApiRateLimitRuleResponse>;
  /** 创建API限流规则返回详细信息 {@link CreateApiRateLimitRuleWithDetailRespRequest} {@link CreateApiRateLimitRuleWithDetailRespResponse} */
  CreateApiRateLimitRuleWithDetailResp(data: CreateApiRateLimitRuleWithDetailRespRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApiRateLimitRuleWithDetailRespResponse>;
  /** 创建应用 {@link CreateApplicationRequest} {@link CreateApplicationResponse} */
  CreateApplication(data: CreateApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationResponse>;
  /** 创建集群 {@link CreateClusterRequest} {@link CreateClusterResponse} */
  CreateCluster(data: CreateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterResponse>;
  /** 创建配置项 {@link CreateConfigRequest} {@link CreateConfigResponse} */
  CreateConfig(data: CreateConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigResponse>;
  /** 创建参数模板 {@link CreateConfigTemplateRequest} {@link CreateConfigTemplateResponse} */
  CreateConfigTemplate(data: CreateConfigTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigTemplateResponse>;
  /** 创建参数模板返回详细信息 {@link CreateConfigTemplateWithDetailRespRequest} {@link CreateConfigTemplateWithDetailRespResponse} */
  CreateConfigTemplateWithDetailResp(data: CreateConfigTemplateWithDetailRespRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigTemplateWithDetailRespResponse>;
  /** 创建配置项并返回详细信息 {@link CreateConfigWithDetailRespRequest} {@link CreateConfigWithDetailRespResponse} */
  CreateConfigWithDetailResp(data: CreateConfigWithDetailRespRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigWithDetailRespResponse>;
  /** 创建容器部署组 {@link CreateContainGroupRequest} {@link CreateContainGroupResponse} */
  CreateContainGroup(data: CreateContainGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateContainGroupResponse>;
  /** 创建文件配置项 {@link CreateFileConfigRequest} {@link CreateFileConfigResponse} */
  CreateFileConfig(data: CreateFileConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileConfigResponse>;
  /** 创建文件配置项并返回详细信息 {@link CreateFileConfigWithDetailRespRequest} {@link CreateFileConfigWithDetailRespResponse} */
  CreateFileConfigWithDetailResp(data: CreateFileConfigWithDetailRespRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFileConfigWithDetailRespResponse>;
  /** 批量导入API至api分组 {@link CreateGatewayApiRequest} {@link CreateGatewayApiResponse} */
  CreateGatewayApi(data: CreateGatewayApiRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGatewayApiResponse>;
  /** 创建部署组 {@link CreateGroupRequest} {@link CreateGroupResponse} */
  CreateGroup(data: CreateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateGroupResponse>;
  /** 创建泳道 {@link CreateLaneRequest} {@link CreateLaneResponse} */
  CreateLane(data: CreateLaneRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLaneResponse>;
  /** 创建泳道规则 {@link CreateLaneRuleRequest} {@link CreateLaneRuleResponse} */
  CreateLaneRule(data: CreateLaneRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLaneRuleResponse>;
  /** 新增微服务 {@link CreateMicroserviceRequest} {@link CreateMicroserviceResponse} */
  CreateMicroservice(data: CreateMicroserviceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMicroserviceResponse>;
  /** 新增微服务返回id {@link CreateMicroserviceWithDetailRespRequest} {@link CreateMicroserviceWithDetailRespResponse} */
  CreateMicroserviceWithDetailResp(data: CreateMicroserviceWithDetailRespRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMicroserviceWithDetailRespResponse>;
  /** 创建命名空间 {@link CreateNamespaceRequest} {@link CreateNamespaceResponse} */
  CreateNamespace(data: CreateNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNamespaceResponse>;
  /** 创建路径重写 {@link CreatePathRewritesRequest} {@link CreatePathRewritesResponse} */
  CreatePathRewrites(data: CreatePathRewritesRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePathRewritesResponse>;
  /** 创建路径重写返回详细信息 {@link CreatePathRewritesWithDetailRespRequest} {@link CreatePathRewritesWithDetailRespResponse} */
  CreatePathRewritesWithDetailResp(data: CreatePathRewritesWithDetailRespRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePathRewritesWithDetailRespResponse>;
  /** 创建公共配置项 {@link CreatePublicConfigRequest} {@link CreatePublicConfigResponse} */
  CreatePublicConfig(data: CreatePublicConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePublicConfigResponse>;
  /** 创建公共配置项返回详细信息 {@link CreatePublicConfigWithDetailRespRequest} {@link CreatePublicConfigWithDetailRespResponse} */
  CreatePublicConfigWithDetailResp(data: CreatePublicConfigWithDetailRespRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePublicConfigWithDetailRespResponse>;
  /** 创建仓库 {@link CreateRepositoryRequest} {@link CreateRepositoryResponse} */
  CreateRepository(data: CreateRepositoryRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRepositoryResponse>;
  /** 创建任务 {@link CreateTaskRequest} {@link CreateTaskResponse} */
  CreateTask(data: CreateTaskRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskResponse>;
  /** 创建工作流 {@link CreateTaskFlowRequest} {@link CreateTaskFlowResponse} */
  CreateTaskFlow(data: CreateTaskFlowRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskFlowResponse>;
  /** 批量创建单元化命名空间 {@link CreateUnitNamespacesRequest} {@link CreateUnitNamespacesResponse} */
  CreateUnitNamespaces(data: CreateUnitNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUnitNamespacesResponse>;
  /** 创建单元化规则 {@link CreateUnitRuleRequest} {@link CreateUnitRuleResponse} */
  CreateUnitRule(data: CreateUnitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUnitRuleResponse>;
  /** 创建单元化规则返回详细信息 {@link CreateUnitRuleWithDetailRespRequest} {@link CreateUnitRuleWithDetailRespResponse} */
  CreateUnitRuleWithDetailResp(data: CreateUnitRuleWithDetailRespRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUnitRuleWithDetailRespResponse>;
  /** 删除Api分组 {@link DeleteApiGroupRequest} {@link DeleteApiGroupResponse} */
  DeleteApiGroup(data: DeleteApiGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApiGroupResponse>;
  /** 删除API限流规则 {@link DeleteApiRateLimitRuleRequest} {@link DeleteApiRateLimitRuleResponse} */
  DeleteApiRateLimitRule(data: DeleteApiRateLimitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApiRateLimitRuleResponse>;
  /** 删除应用 {@link DeleteApplicationRequest} {@link DeleteApplicationResponse} */
  DeleteApplication(data: DeleteApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationResponse>;
  /** 删除集群 {@link DeleteClusterRequest} {@link DeleteClusterResponse} */
  DeleteCluster(data: DeleteClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterResponse>;
  /** 删除配置项 {@link DeleteConfigRequest} {@link DeleteConfigResponse} */
  DeleteConfig(data: DeleteConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigResponse>;
  /** 删除模板 {@link DeleteConfigTemplateRequest} {@link DeleteConfigTemplateResponse} */
  DeleteConfigTemplate(data: DeleteConfigTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigTemplateResponse>;
  /** 删除容器部署组 {@link DeleteContainerGroupRequest} {@link DeleteContainerGroupResponse} */
  DeleteContainerGroup(data: DeleteContainerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteContainerGroupResponse>;
  /** 删除文件配置项 {@link DeleteFileConfigRequest} {@link DeleteFileConfigResponse} */
  DeleteFileConfig(data: DeleteFileConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFileConfigResponse>;
  /** 批量删除API {@link DeleteGatewayApiRequest} {@link DeleteGatewayApiResponse} */
  DeleteGatewayApi(data: DeleteGatewayApiRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGatewayApiResponse>;
  /** 删除虚拟机部署组 {@link DeleteGroupRequest} {@link DeleteGroupResponse} */
  DeleteGroup(data: DeleteGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteGroupResponse>;
  /** 批量删除镜像版本 {@link DeleteImageTagsRequest} {@link DeleteImageTagsResponse} */
  DeleteImageTags(data: DeleteImageTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImageTagsResponse>;
  /** 删除泳道 {@link DeleteLaneRequest} {@link DeleteLaneResponse} */
  DeleteLane(data: DeleteLaneRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLaneResponse>;
  /** 删除泳道规则 {@link DeleteLaneRuleRequest} {@link DeleteLaneRuleResponse} */
  DeleteLaneRule(data: DeleteLaneRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLaneRuleResponse>;
  /** 删除微服务 {@link DeleteMicroserviceRequest} {@link DeleteMicroserviceResponse} */
  DeleteMicroservice(data: DeleteMicroserviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMicroserviceResponse>;
  /** 删除命名空间 {@link DeleteNamespaceRequest} {@link DeleteNamespaceResponse} */
  DeleteNamespace(data: DeleteNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNamespaceResponse>;
  /** 删除路径重写 {@link DeletePathRewritesRequest} {@link DeletePathRewritesResponse} */
  DeletePathRewrites(data: DeletePathRewritesRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePathRewritesResponse>;
  /** 批量删除包 {@link DeletePkgsRequest} {@link DeletePkgsResponse} */
  DeletePkgs(data: DeletePkgsRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePkgsResponse>;
  /** 删除公共配置项 {@link DeletePublicConfigRequest} {@link DeletePublicConfigResponse} */
  DeletePublicConfig(data: DeletePublicConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePublicConfigResponse>;
  /** 删除仓库 {@link DeleteRepositoryRequest} {@link DeleteRepositoryResponse} */
  DeleteRepository(data: DeleteRepositoryRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRepositoryResponse>;
  /** 删除部署组 {@link DeleteServerlessGroupRequest} {@link DeleteServerlessGroupResponse} */
  DeleteServerlessGroup(data: DeleteServerlessGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServerlessGroupResponse>;
  /** 删除任务 {@link DeleteTaskRequest} {@link DeleteTaskResponse} */
  DeleteTask(data: DeleteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskResponse>;
  /** 删除单元化命名空间 {@link DeleteUnitNamespacesRequest} {@link DeleteUnitNamespacesResponse} */
  DeleteUnitNamespaces(data: DeleteUnitNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUnitNamespacesResponse>;
  /** 删除单元化规则 {@link DeleteUnitRuleRequest} {@link DeleteUnitRuleResponse} */
  DeleteUnitRule(data: DeleteUnitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteUnitRuleResponse>;
  /** 部署容器应用 {@link DeployContainerGroupRequest} {@link DeployContainerGroupResponse} */
  DeployContainerGroup(data: DeployContainerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeployContainerGroupResponse>;
  /** 部署虚拟机部署组应用 {@link DeployGroupRequest} {@link DeployGroupResponse} */
  DeployGroup(data: DeployGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeployGroupResponse>;
  /** 查询API详情 {@link DescribeApiDetailRequest} {@link DescribeApiDetailResponse} */
  DescribeApiDetail(data: DescribeApiDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiDetailResponse>;
  /** 查询API分组 {@link DescribeApiGroupRequest} {@link DescribeApiGroupResponse} */
  DescribeApiGroup(data: DescribeApiGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiGroupResponse>;
  /** 查询API 分组信息列表 {@link DescribeApiGroupsRequest} {@link DescribeApiGroupsResponse} */
  DescribeApiGroups(data?: DescribeApiGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiGroupsResponse>;
  /** 查询API限流规则 {@link DescribeApiRateLimitRulesRequest} {@link DescribeApiRateLimitRulesResponse} */
  DescribeApiRateLimitRules(data: DescribeApiRateLimitRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiRateLimitRulesResponse>;
  /** 查询网关API监控明细数据 {@link DescribeApiUseDetailRequest} {@link DescribeApiUseDetailResponse} */
  DescribeApiUseDetail(data: DescribeApiUseDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiUseDetailResponse>;
  /** 查询API版本 {@link DescribeApiVersionsRequest} {@link DescribeApiVersionsResponse} */
  DescribeApiVersions(data: DescribeApiVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApiVersionsResponse>;
  /** 获取应用详情 {@link DescribeApplicationRequest} {@link DescribeApplicationResponse} */
  DescribeApplication(data: DescribeApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationResponse>;
  /** 获取应用列表其它字段 {@link DescribeApplicationAttributeRequest} {@link DescribeApplicationAttributeResponse} */
  DescribeApplicationAttribute(data: DescribeApplicationAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationAttributeResponse>;
  /** 查询应用关联日志配置项信息 {@link DescribeApplicationBusinessLogConfigRequest} {@link DescribeApplicationBusinessLogConfigResponse} */
  DescribeApplicationBusinessLogConfig(data: DescribeApplicationBusinessLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationBusinessLogConfigResponse>;
  /** 获取应用列表 {@link DescribeApplicationsRequest} {@link DescribeApplicationsResponse} */
  DescribeApplications(data?: DescribeApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationsResponse>;
  /** TSF基本资源信息概览 {@link DescribeBasicResourceUsageRequest} {@link DescribeBasicResourceUsageResponse} */
  DescribeBasicResourceUsage(data?: DescribeBasicResourceUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBasicResourceUsageResponse>;
  /** 查询业务日志配置项信息 {@link DescribeBusinessLogConfigRequest} {@link DescribeBusinessLogConfigResponse} */
  DescribeBusinessLogConfig(data: DescribeBusinessLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBusinessLogConfigResponse>;
  /** 查询日志配置项列表 {@link DescribeBusinessLogConfigsRequest} {@link DescribeBusinessLogConfigsResponse} */
  DescribeBusinessLogConfigs(data?: DescribeBusinessLogConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBusinessLogConfigsResponse>;
  /** 查询集群实例 {@link DescribeClusterInstancesRequest} {@link DescribeClusterInstancesResponse} */
  DescribeClusterInstances(data: DescribeClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterInstancesResponse>;
  /** 获取集群列表 {@link DescribeClustersRequest} {@link DescribeClustersResponse} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 查询配置 {@link DescribeConfigRequest} {@link DescribeConfigResponse} */
  DescribeConfig(data: DescribeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigResponse>;
  /** 查询配置发布历史 {@link DescribeConfigReleaseLogsRequest} {@link DescribeConfigReleaseLogsResponse} */
  DescribeConfigReleaseLogs(data?: DescribeConfigReleaseLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigReleaseLogsResponse>;
  /** 查询配置发布信息 {@link DescribeConfigReleasesRequest} {@link DescribeConfigReleasesResponse} */
  DescribeConfigReleases(data?: DescribeConfigReleasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigReleasesResponse>;
  /** 查询配置汇总列表 {@link DescribeConfigSummaryRequest} {@link DescribeConfigSummaryResponse} */
  DescribeConfigSummary(data?: DescribeConfigSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigSummaryResponse>;
  /** 导入配置 {@link DescribeConfigTemplateRequest} {@link DescribeConfigTemplateResponse} */
  DescribeConfigTemplate(data: DescribeConfigTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigTemplateResponse>;
  /** 查询配置项列表 {@link DescribeConfigsRequest} {@link DescribeConfigsResponse} */
  DescribeConfigs(data?: DescribeConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigsResponse>;
  /** 获取容器事件列表 {@link DescribeContainerEventsRequest} {@link DescribeContainerEventsResponse} */
  DescribeContainerEvents(data: DescribeContainerEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerEventsResponse>;
  /** 获取部署组其他字段-用于前端并发调用 {@link DescribeContainerGroupAttributeRequest} {@link DescribeContainerGroupAttributeResponse} */
  DescribeContainerGroupAttribute(data: DescribeContainerGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerGroupAttributeResponse>;
  /** 获取部署组详情 {@link DescribeContainerGroupDeployInfoRequest} {@link DescribeContainerGroupDeployInfoResponse} */
  DescribeContainerGroupDeployInfo(data: DescribeContainerGroupDeployInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerGroupDeployInfoResponse>;
  /** 查询容器部署组详情 {@link DescribeContainerGroupDetailRequest} {@link DescribeContainerGroupDetailResponse} */
  DescribeContainerGroupDetail(data: DescribeContainerGroupDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerGroupDetailResponse>;
  /** 容器部署组列表 {@link DescribeContainerGroupsRequest} {@link DescribeContainerGroupsResponse} */
  DescribeContainerGroups(data?: DescribeContainerGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeContainerGroupsResponse>;
  /** 查询一键导入API分组任务的状态 {@link DescribeCreateGatewayApiStatusRequest} {@link DescribeCreateGatewayApiStatusResponse} */
  DescribeCreateGatewayApiStatus(data?: DescribeCreateGatewayApiStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCreateGatewayApiStatusResponse>;
  /** 获取单个投递项配置 {@link DescribeDeliveryConfigRequest} {@link DescribeDeliveryConfigResponse} */
  DescribeDeliveryConfig(data: DescribeDeliveryConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeliveryConfigResponse>;
  /** 用部署组id获取绑定信息 {@link DescribeDeliveryConfigByGroupIdRequest} {@link DescribeDeliveryConfigByGroupIdResponse} */
  DescribeDeliveryConfigByGroupId(data: DescribeDeliveryConfigByGroupIdRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeliveryConfigByGroupIdResponse>;
  /** 获取多个投递项配置 {@link DescribeDeliveryConfigsRequest} {@link DescribeDeliveryConfigsResponse} */
  DescribeDeliveryConfigs(data?: DescribeDeliveryConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDeliveryConfigsResponse>;
  /** 获取下载程序包信息 {@link DescribeDownloadInfoRequest} {@link DescribeDownloadInfoResponse} */
  DescribeDownloadInfo(data: DescribeDownloadInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDownloadInfoResponse>;
  /** 查询生效的单元化规则 {@link DescribeEnabledUnitRuleRequest} {@link DescribeEnabledUnitRuleResponse} */
  DescribeEnabledUnitRule(data: DescribeEnabledUnitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnabledUnitRuleResponse>;
  /** 查询文件配置项发布信息 {@link DescribeFileConfigReleasesRequest} {@link DescribeFileConfigReleasesResponse} */
  DescribeFileConfigReleases(data?: DescribeFileConfigReleasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileConfigReleasesResponse>;
  /** 查询文件配置项列表 {@link DescribeFileConfigsRequest} {@link DescribeFileConfigsResponse} */
  DescribeFileConfigs(data?: DescribeFileConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFileConfigsResponse>;
  /** 查询工作流最近一个批次的执行状态 {@link DescribeFlowLastBatchStateRequest} {@link DescribeFlowLastBatchStateResponse} */
  DescribeFlowLastBatchState(data: DescribeFlowLastBatchStateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowLastBatchStateResponse>;
  /** 查询网关所有分组下Api列表 {@link DescribeGatewayAllGroupApisRequest} {@link DescribeGatewayAllGroupApisResponse} */
  DescribeGatewayAllGroupApis(data: DescribeGatewayAllGroupApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayAllGroupApisResponse>;
  /** 查询API分组下的Api列表信息 {@link DescribeGatewayApisRequest} {@link DescribeGatewayApisResponse} */
  DescribeGatewayApis(data: DescribeGatewayApisRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayApisResponse>;
  /** 查询网关监控概览 {@link DescribeGatewayMonitorOverviewRequest} {@link DescribeGatewayMonitorOverviewResponse} */
  DescribeGatewayMonitorOverview(data: DescribeGatewayMonitorOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayMonitorOverviewResponse>;
  /** 查询虚拟机部署组详情 {@link DescribeGroupRequest} {@link DescribeGroupResponse} */
  DescribeGroup(data: DescribeGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupResponse>;
  /** 获取部署组其他属性 {@link DescribeGroupAttributeRequest} {@link DescribeGroupAttributeResponse} */
  DescribeGroupAttribute(data: DescribeGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupAttributeResponse>;
  /** 查询某个API分组已绑定的网关部署组信息列表 {@link DescribeGroupBindedGatewaysRequest} {@link DescribeGroupBindedGatewaysResponse} */
  DescribeGroupBindedGateways(data: DescribeGroupBindedGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupBindedGatewaysResponse>;
  /** 查询分组管理日志配置列表 {@link DescribeGroupBusinessLogConfigsRequest} {@link DescribeGroupBusinessLogConfigsResponse} */
  DescribeGroupBusinessLogConfigs(data: DescribeGroupBusinessLogConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupBusinessLogConfigsResponse>;
  /** 查询某个网关绑定的API 分组信息列表 {@link DescribeGroupGatewaysRequest} {@link DescribeGroupGatewaysResponse} */
  DescribeGroupGateways(data: DescribeGroupGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupGatewaysResponse>;
  /** 查询虚拟机部署组云主机列表 {@link DescribeGroupInstancesRequest} {@link DescribeGroupInstancesResponse} */
  DescribeGroupInstances(data: DescribeGroupInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupInstancesResponse>;
  /** 查询部署组发布信息 {@link DescribeGroupReleaseRequest} {@link DescribeGroupReleaseResponse} */
  DescribeGroupRelease(data: DescribeGroupReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupReleaseResponse>;
  /** 查询网关分组监控明细数据 {@link DescribeGroupUseDetailRequest} {@link DescribeGroupUseDetailResponse} */
  DescribeGroupUseDetail(data: DescribeGroupUseDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupUseDetailResponse>;
  /** 获取虚拟机部署组列表 {@link DescribeGroupsRequest} {@link DescribeGroupsResponse} */
  DescribeGroups(data?: DescribeGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupsResponse>;
  /** 查询某个插件下绑定或未绑定的API分组 {@link DescribeGroupsWithPluginRequest} {@link DescribeGroupsWithPluginResponse} */
  DescribeGroupsWithPlugin(data: DescribeGroupsWithPluginRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGroupsWithPluginResponse>;
  /** 镜像仓库列表 {@link DescribeImageRepositoryRequest} {@link DescribeImageRepositoryResponse} */
  DescribeImageRepository(data?: DescribeImageRepositoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageRepositoryResponse>;
  /** 镜像版本列表 {@link DescribeImageTagsRequest} {@link DescribeImageTagsResponse} */
  DescribeImageTags(data: DescribeImageTagsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageTagsResponse>;
  /** 查询调用监控指标 {@link DescribeInovcationIndicatorsRequest} {@link DescribeInovcationIndicatorsResponse} */
  DescribeInovcationIndicators(data: DescribeInovcationIndicatorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInovcationIndicatorsResponse>;
  /** 查询机器列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询调用指标数据变化曲线 {@link DescribeInvocationMetricDataCurveRequest} {@link DescribeInvocationMetricDataCurveResponse} */
  DescribeInvocationMetricDataCurve(data?: DescribeInvocationMetricDataCurveRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvocationMetricDataCurveResponse>;
  /** 查询维度 {@link DescribeInvocationMetricDataDimensionRequest} {@link DescribeInvocationMetricDataDimensionResponse} */
  DescribeInvocationMetricDataDimension(data: DescribeInvocationMetricDataDimensionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvocationMetricDataDimensionResponse>;
  /** 查询单值指标维度 {@link DescribeInvocationMetricDataPointRequest} {@link DescribeInvocationMetricDataPointResponse} */
  DescribeInvocationMetricDataPoint(data: DescribeInvocationMetricDataPointRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvocationMetricDataPointResponse>;
  /** 查询调用指标数据散点图 {@link DescribeInvocationMetricScatterPlotRequest} {@link DescribeInvocationMetricScatterPlotResponse} */
  DescribeInvocationMetricScatterPlot(data?: DescribeInvocationMetricScatterPlotRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInvocationMetricScatterPlotResponse>;
  /** 查询java实例jvm监控数据 {@link DescribeJvmMonitorRequest} {@link DescribeJvmMonitorResponse} */
  DescribeJvmMonitor(data: DescribeJvmMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJvmMonitorResponse>;
  /** 查询泳道规则列表 {@link DescribeLaneRulesRequest} {@link DescribeLaneRulesResponse} */
  DescribeLaneRules(data: DescribeLaneRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLaneRulesResponse>;
  /** 查询泳道列表 {@link DescribeLanesRequest} {@link DescribeLanesResponse} */
  DescribeLanes(data?: DescribeLanesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLanesResponse>;
  /** 查询微服务详情 {@link DescribeMicroserviceRequest} {@link DescribeMicroserviceResponse} */
  DescribeMicroservice(data: DescribeMicroserviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMicroserviceResponse>;
  /** 获取微服务列表 {@link DescribeMicroservicesRequest} {@link DescribeMicroservicesResponse} */
  DescribeMicroservices(data: DescribeMicroservicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMicroservicesResponse>;
  /** 查询服务API列表 {@link DescribeMsApiListRequest} {@link DescribeMsApiListResponse} */
  DescribeMsApiList(data: DescribeMsApiListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMsApiListResponse>;
  /** 服务调用监控统计概览 {@link DescribeOverviewInvocationRequest} {@link DescribeOverviewInvocationResponse} */
  DescribeOverviewInvocation(data?: DescribeOverviewInvocationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeOverviewInvocationResponse>;
  /** 查询路径重写 {@link DescribePathRewriteRequest} {@link DescribePathRewriteResponse} */
  DescribePathRewrite(data: DescribePathRewriteRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePathRewriteResponse>;
  /** 查询路径重写列表 {@link DescribePathRewritesRequest} {@link DescribePathRewritesResponse} */
  DescribePathRewrites(data: DescribePathRewritesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePathRewritesResponse>;
  /** 获取某个应用的程序包信息列表 {@link DescribePkgsRequest} {@link DescribePkgsResponse} */
  DescribePkgs(data: DescribePkgsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePkgsResponse>;
  /** 查询网关分组或API绑定（或未绑定）的插件列表 {@link DescribePluginInstancesRequest} {@link DescribePluginInstancesResponse} */
  DescribePluginInstances(data: DescribePluginInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePluginInstancesResponse>;
  /** 获取部署组实例列表 {@link DescribePodInstancesRequest} {@link DescribePodInstancesResponse} */
  DescribePodInstances(data: DescribePodInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePodInstancesResponse>;
  /** 查询数据集列表 {@link DescribeProgramsRequest} {@link DescribeProgramsResponse} */
  DescribePrograms(data?: DescribeProgramsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProgramsResponse>;
  /** 查询公共配置（单条） {@link DescribePublicConfigRequest} {@link DescribePublicConfigResponse} */
  DescribePublicConfig(data: DescribePublicConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicConfigResponse>;
  /** 查询公共配置发布历史 {@link DescribePublicConfigReleaseLogsRequest} {@link DescribePublicConfigReleaseLogsResponse} */
  DescribePublicConfigReleaseLogs(data?: DescribePublicConfigReleaseLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicConfigReleaseLogsResponse>;
  /** 查询公共配置发布信息 {@link DescribePublicConfigReleasesRequest} {@link DescribePublicConfigReleasesResponse} */
  DescribePublicConfigReleases(data?: DescribePublicConfigReleasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicConfigReleasesResponse>;
  /** 查询公共配置汇总列表 {@link DescribePublicConfigSummaryRequest} {@link DescribePublicConfigSummaryResponse} */
  DescribePublicConfigSummary(data?: DescribePublicConfigSummaryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicConfigSummaryResponse>;
  /** 查询公共配置项列表 {@link DescribePublicConfigsRequest} {@link DescribePublicConfigsResponse} */
  DescribePublicConfigs(data?: DescribePublicConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePublicConfigsResponse>;
  /** 查询group发布的配置 {@link DescribeReleasedConfigRequest} {@link DescribeReleasedConfigResponse} */
  DescribeReleasedConfig(data: DescribeReleasedConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReleasedConfigResponse>;
  /** 查询仓库列表 {@link DescribeRepositoriesRequest} {@link DescribeRepositoriesResponse} */
  DescribeRepositories(data?: DescribeRepositoriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepositoriesResponse>;
  /** 查询仓库信息 {@link DescribeRepositoryRequest} {@link DescribeRepositoryResponse} */
  DescribeRepository(data: DescribeRepositoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRepositoryResponse>;
  /** 资源任务的执行状态描述 {@link DescribeResourceTaskStatusRequest} {@link DescribeResourceTaskStatusResponse} */
  DescribeResourceTaskStatus(data: DescribeResourceTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceTaskStatusResponse>;
  /** 查询简单应用列表 {@link DescribeSimpleApplicationsRequest} {@link DescribeSimpleApplicationsResponse} */
  DescribeSimpleApplications(data?: DescribeSimpleApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSimpleApplicationsResponse>;
  /** 查询简单集群列表 {@link DescribeSimpleClustersRequest} {@link DescribeSimpleClustersResponse} */
  DescribeSimpleClusters(data?: DescribeSimpleClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSimpleClustersResponse>;
  /** 查询简单部署组列表 {@link DescribeSimpleGroupsRequest} {@link DescribeSimpleGroupsResponse} */
  DescribeSimpleGroups(data?: DescribeSimpleGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSimpleGroupsResponse>;
  /** 查询简单命名空间列表 {@link DescribeSimpleNamespacesRequest} {@link DescribeSimpleNamespacesResponse} */
  DescribeSimpleNamespaces(data?: DescribeSimpleNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSimpleNamespacesResponse>;
  /** 服务统计 {@link DescribeStatisticsRequest} {@link DescribeStatisticsResponse} */
  DescribeStatistics(data: DescribeStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeStatisticsResponse>;
  /** 查询任务详情 {@link DescribeTaskDetailRequest} {@link DescribeTaskDetailResponse} */
  DescribeTaskDetail(data: DescribeTaskDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskDetailResponse>;
  /** 查看任务最近执行批次状态 {@link DescribeTaskLastStatusRequest} {@link DescribeTaskLastStatusResponse} */
  DescribeTaskLastStatus(data: DescribeTaskLastStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLastStatusResponse>;
  /** 查询任务列表 {@link DescribeTaskRecordsRequest} {@link DescribeTaskRecordsResponse} */
  DescribeTaskRecords(data?: DescribeTaskRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskRecordsResponse>;
  /** 查询单元化网关API监控明细数据 {@link DescribeUnitApiUseDetailRequest} {@link DescribeUnitApiUseDetailResponse} */
  DescribeUnitApiUseDetail(data: DescribeUnitApiUseDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnitApiUseDetailResponse>;
  /** 查询单元化命名空间列表 {@link DescribeUnitNamespacesRequest} {@link DescribeUnitNamespacesResponse} */
  DescribeUnitNamespaces(data: DescribeUnitNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnitNamespacesResponse>;
  /** 查询单元化规则详情 {@link DescribeUnitRuleRequest} {@link DescribeUnitRuleResponse} */
  DescribeUnitRule(data: DescribeUnitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnitRuleResponse>;
  /** 查询单元化规则列表 {@link DescribeUnitRulesRequest} {@link DescribeUnitRulesResponse} */
  DescribeUnitRules(data: DescribeUnitRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUnitRulesResponse>;
  /** 查询单元化规则列表V2 {@link DescribeUnitRulesV2Request} {@link DescribeUnitRulesV2Response} */
  DescribeUnitRulesV2(data: DescribeUnitRulesV2Request, config?: AxiosRequestConfig): AxiosPromise<DescribeUnitRulesV2Response>;
  /** 获取上传程序包信息 {@link DescribeUploadInfoRequest} {@link DescribeUploadInfoResponse} */
  DescribeUploadInfo(data: DescribeUploadInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUploadInfoResponse>;
  /** 查询可用于被导入的命名空间列表 {@link DescribeUsableUnitNamespacesRequest} {@link DescribeUsableUnitNamespacesResponse} */
  DescribeUsableUnitNamespaces(data?: DescribeUsableUnitNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsableUnitNamespacesResponse>;
  /** 停用任务 {@link DisableTaskRequest} {@link DisableTaskResponse} */
  DisableTask(data: DisableTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DisableTaskResponse>;
  /** 停用工作流 {@link DisableTaskFlowRequest} {@link DisableTaskFlowResponse} */
  DisableTaskFlow(data: DisableTaskFlowRequest, config?: AxiosRequestConfig): AxiosPromise<DisableTaskFlowResponse>;
  /** 禁用单元化路由 {@link DisableUnitRouteRequest} {@link DisableUnitRouteResponse} */
  DisableUnitRoute(data: DisableUnitRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DisableUnitRouteResponse>;
  /** 禁用单元化规则 {@link DisableUnitRuleRequest} {@link DisableUnitRuleResponse} */
  DisableUnitRule(data: DisableUnitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DisableUnitRuleResponse>;
  /** 取消关联业务日志配置项和应用 {@link DisassociateBusinessLogConfigRequest} {@link DisassociateBusinessLogConfigResponse} */
  DisassociateBusinessLogConfig(data: DisassociateBusinessLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateBusinessLogConfigResponse>;
  /** 取消关联投递信息和部署组 {@link DisassociateKafkaConfigRequest} {@link DisassociateKafkaConfigResponse} */
  DisassociateKafkaConfig(data: DisassociateKafkaConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateKafkaConfigResponse>;
  /** 下线Api分组 {@link DraftApiGroupRequest} {@link DraftApiGroupResponse} */
  DraftApiGroup(data: DraftApiGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DraftApiGroupResponse>;
  /** 启用任务 {@link EnableTaskRequest} {@link EnableTaskResponse} */
  EnableTask(data: EnableTaskRequest, config?: AxiosRequestConfig): AxiosPromise<EnableTaskResponse>;
  /** 启用工作流 {@link EnableTaskFlowRequest} {@link EnableTaskFlowResponse} */
  EnableTaskFlow(data: EnableTaskFlowRequest, config?: AxiosRequestConfig): AxiosPromise<EnableTaskFlowResponse>;
  /** 启用单元化路由 {@link EnableUnitRouteRequest} {@link EnableUnitRouteResponse} */
  EnableUnitRoute(data: EnableUnitRouteRequest, config?: AxiosRequestConfig): AxiosPromise<EnableUnitRouteResponse>;
  /** 启用单元化规则 {@link EnableUnitRuleRequest} {@link EnableUnitRuleResponse} */
  EnableUnitRule(data: EnableUnitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<EnableUnitRuleResponse>;
  /** 手动执行一次任务。 {@link ExecuteTaskRequest} {@link ExecuteTaskResponse} */
  ExecuteTask(data: ExecuteTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ExecuteTaskResponse>;
  /** 执行一次工作流 {@link ExecuteTaskFlowRequest} {@link ExecuteTaskFlowResponse} */
  ExecuteTaskFlow(data?: ExecuteTaskFlowRequest, config?: AxiosRequestConfig): AxiosPromise<ExecuteTaskFlowResponse>;
  /** 虚拟机部署组添加实例 {@link ExpandGroupRequest} {@link ExpandGroupResponse} */
  ExpandGroup(data: ExpandGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ExpandGroupResponse>;
  /** 修改应用 {@link ModifyApplicationRequest} {@link ModifyApplicationResponse} */
  ModifyApplication(data: ModifyApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationResponse>;
  /** 修改集群信息 {@link ModifyClusterRequest} {@link ModifyClusterResponse} */
  ModifyCluster(data: ModifyClusterRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterResponse>;
  /** 修改容器部署组 {@link ModifyContainerGroupRequest} {@link ModifyContainerGroupResponse} */
  ModifyContainerGroup(data?: ModifyContainerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyContainerGroupResponse>;
  /** 修改容器部署组实例数 {@link ModifyContainerReplicasRequest} {@link ModifyContainerReplicasResponse} */
  ModifyContainerReplicas(data: ModifyContainerReplicasRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyContainerReplicasResponse>;
  /** 更新分组信息 {@link ModifyGroupRequest} {@link ModifyGroupResponse} */
  ModifyGroup(data: ModifyGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGroupResponse>;
  /** 更新泳道信息 {@link ModifyLaneRequest} {@link ModifyLaneResponse} */
  ModifyLane(data: ModifyLaneRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLaneResponse>;
  /** 更新泳道规则 {@link ModifyLaneRuleRequest} {@link ModifyLaneRuleResponse} */
  ModifyLaneRule(data: ModifyLaneRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLaneRuleResponse>;
  /** 修改微服务详情 {@link ModifyMicroserviceRequest} {@link ModifyMicroserviceResponse} */
  ModifyMicroservice(data: ModifyMicroserviceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMicroserviceResponse>;
  /** 修改命名空间 {@link ModifyNamespaceRequest} {@link ModifyNamespaceResponse} */
  ModifyNamespace(data: ModifyNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNamespaceResponse>;
  /** 修改路径重写 {@link ModifyPathRewriteRequest} {@link ModifyPathRewriteResponse} */
  ModifyPathRewrite(data: ModifyPathRewriteRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPathRewriteResponse>;
  /** 修改任务 {@link ModifyTaskRequest} {@link ModifyTaskResponse} */
  ModifyTask(data: ModifyTaskRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskResponse>;
  /** 更新上传程序包信息 {@link ModifyUploadInfoRequest} {@link ModifyUploadInfoResponse} */
  ModifyUploadInfo(data: ModifyUploadInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyUploadInfoResponse>;
  /** 绑定解绑tcr仓库 {@link OperateApplicationTcrBindingRequest} {@link OperateApplicationTcrBindingResponse} */
  OperateApplicationTcrBinding(data?: OperateApplicationTcrBindingRequest, config?: AxiosRequestConfig): AxiosPromise<OperateApplicationTcrBindingResponse>;
  /** 重关联业务日志配置 {@link ReassociateBusinessLogConfigRequest} {@link ReassociateBusinessLogConfigResponse} */
  ReassociateBusinessLogConfig(data: ReassociateBusinessLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ReassociateBusinessLogConfigResponse>;
  /** 重新执行任务 {@link RedoTaskRequest} {@link RedoTaskResponse} */
  RedoTask(data: RedoTaskRequest, config?: AxiosRequestConfig): AxiosPromise<RedoTaskResponse>;
  /** 重新执行任务批次 {@link RedoTaskBatchRequest} {@link RedoTaskBatchResponse} */
  RedoTaskBatch(data: RedoTaskBatchRequest, config?: AxiosRequestConfig): AxiosPromise<RedoTaskBatchResponse>;
  /** 重新执行任务的一次执行 {@link RedoTaskExecuteRequest} {@link RedoTaskExecuteResponse} */
  RedoTaskExecute(data: RedoTaskExecuteRequest, config?: AxiosRequestConfig): AxiosPromise<RedoTaskExecuteResponse>;
  /** 重新执行工作流批次 {@link RedoTaskFlowBatchRequest} {@link RedoTaskFlowBatchResponse} */
  RedoTaskFlowBatch(data: RedoTaskFlowBatchRequest, config?: AxiosRequestConfig): AxiosPromise<RedoTaskFlowBatchResponse>;
  /** 发布Api分组 {@link ReleaseApiGroupRequest} {@link ReleaseApiGroupResponse} */
  ReleaseApiGroup(data: ReleaseApiGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseApiGroupResponse>;
  /** 发布配置 {@link ReleaseConfigRequest} {@link ReleaseConfigResponse} */
  ReleaseConfig(data: ReleaseConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseConfigResponse>;
  /** 发布配置返回详细信息 {@link ReleaseConfigWithDetailRespRequest} {@link ReleaseConfigWithDetailRespResponse} */
  ReleaseConfigWithDetailResp(data: ReleaseConfigWithDetailRespRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseConfigWithDetailRespResponse>;
  /** 发布文件配置 {@link ReleaseFileConfigRequest} {@link ReleaseFileConfigResponse} */
  ReleaseFileConfig(data: ReleaseFileConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseFileConfigResponse>;
  /** 发布公共配置 {@link ReleasePublicConfigRequest} {@link ReleasePublicConfigResponse} */
  ReleasePublicConfig(data: ReleasePublicConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ReleasePublicConfigResponse>;
  /** 移除云主机 {@link RemoveInstancesRequest} {@link RemoveInstancesResponse} */
  RemoveInstances(data: RemoveInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveInstancesResponse>;
  /** 撤回已发布的配置 {@link RevocationConfigRequest} {@link RevocationConfigResponse} */
  RevocationConfig(data: RevocationConfigRequest, config?: AxiosRequestConfig): AxiosPromise<RevocationConfigResponse>;
  /** 撤回已发布的公共配置 {@link RevocationPublicConfigRequest} {@link RevocationPublicConfigResponse} */
  RevocationPublicConfig(data: RevocationPublicConfigRequest, config?: AxiosRequestConfig): AxiosPromise<RevocationPublicConfigResponse>;
  /** 撤回已发布的文件配置 {@link RevokeFileConfigRequest} {@link RevokeFileConfigResponse} */
  RevokeFileConfig(data: RevokeFileConfigRequest, config?: AxiosRequestConfig): AxiosPromise<RevokeFileConfigResponse>;
  /** 回滚配置 {@link RollbackConfigRequest} {@link RollbackConfigResponse} */
  RollbackConfig(data: RollbackConfigRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackConfigResponse>;
  /** 业务日志搜索 {@link SearchBusinessLogRequest} {@link SearchBusinessLogResponse} */
  SearchBusinessLog(data: SearchBusinessLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchBusinessLogResponse>;
  /** 标准输出日志搜索 {@link SearchStdoutLogRequest} {@link SearchStdoutLogResponse} */
  SearchStdoutLog(data?: SearchStdoutLogRequest, config?: AxiosRequestConfig): AxiosPromise<SearchStdoutLogResponse>;
  /** 缩容虚拟机部署组 {@link ShrinkGroupRequest} {@link ShrinkGroupResponse} */
  ShrinkGroup(data: ShrinkGroupRequest, config?: AxiosRequestConfig): AxiosPromise<ShrinkGroupResponse>;
  /** 虚拟机部署组下线实例 {@link ShrinkInstancesRequest} {@link ShrinkInstancesResponse} */
  ShrinkInstances(data: ShrinkInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ShrinkInstancesResponse>;
  /** 启动容器部署组 {@link StartContainerGroupRequest} {@link StartContainerGroupResponse} */
  StartContainerGroup(data: StartContainerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<StartContainerGroupResponse>;
  /** 启动虚拟机部署组 {@link StartGroupRequest} {@link StartGroupResponse} */
  StartGroup(data: StartGroupRequest, config?: AxiosRequestConfig): AxiosPromise<StartGroupResponse>;
  /** 停止容器部署组 {@link StopContainerGroupRequest} {@link StopContainerGroupResponse} */
  StopContainerGroup(data: StopContainerGroupRequest, config?: AxiosRequestConfig): AxiosPromise<StopContainerGroupResponse>;
  /** 停止虚拟机部署组 {@link StopGroupRequest} {@link StopGroupResponse} */
  StopGroup(data: StopGroupRequest, config?: AxiosRequestConfig): AxiosPromise<StopGroupResponse>;
  /** 停止执行中的任务批次 {@link StopTaskBatchRequest} {@link StopTaskBatchResponse} */
  StopTaskBatch(data: StopTaskBatchRequest, config?: AxiosRequestConfig): AxiosPromise<StopTaskBatchResponse>;
  /** 停止正在执行的任务 {@link StopTaskExecuteRequest} {@link StopTaskExecuteResponse} */
  StopTaskExecute(data: StopTaskExecuteRequest, config?: AxiosRequestConfig): AxiosPromise<StopTaskExecuteResponse>;
  /** 停止一个工作流批次 {@link TerminateTaskFlowBatchRequest} {@link TerminateTaskFlowBatchResponse} */
  TerminateTaskFlowBatch(data: TerminateTaskFlowBatchRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateTaskFlowBatchResponse>;
  /** API分组批量与网关解绑 {@link UnbindApiGroupRequest} {@link UnbindApiGroupResponse} */
  UnbindApiGroup(data: UnbindApiGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindApiGroupResponse>;
  /** 更新Api分组 {@link UpdateApiGroupRequest} {@link UpdateApiGroupResponse} */
  UpdateApiGroup(data: UpdateApiGroupRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateApiGroupResponse>;
  /** 更新API限流规则 {@link UpdateApiRateLimitRuleRequest} {@link UpdateApiRateLimitRuleResponse} */
  UpdateApiRateLimitRule(data: UpdateApiRateLimitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateApiRateLimitRuleResponse>;
  /** 批量更新API限流规则 {@link UpdateApiRateLimitRulesRequest} {@link UpdateApiRateLimitRulesResponse} */
  UpdateApiRateLimitRules(data: UpdateApiRateLimitRulesRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateApiRateLimitRulesResponse>;
  /** 更新API超时 {@link UpdateApiTimeoutsRequest} {@link UpdateApiTimeoutsResponse} */
  UpdateApiTimeouts(data: UpdateApiTimeoutsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateApiTimeoutsResponse>;
  /** 更新参数模板 {@link UpdateConfigTemplateRequest} {@link UpdateConfigTemplateResponse} */
  UpdateConfigTemplate(data: UpdateConfigTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateConfigTemplateResponse>;
  /** 更新API {@link UpdateGatewayApiRequest} {@link UpdateGatewayApiResponse} */
  UpdateGatewayApi(data: UpdateGatewayApiRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateGatewayApiResponse>;
  /** 更新健康检查配置 {@link UpdateHealthCheckSettingsRequest} {@link UpdateHealthCheckSettingsResponse} */
  UpdateHealthCheckSettings(data: UpdateHealthCheckSettingsRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateHealthCheckSettingsResponse>;
  /** 更新仓库信息 {@link UpdateRepositoryRequest} {@link UpdateRepositoryResponse} */
  UpdateRepository(data: UpdateRepositoryRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateRepositoryResponse>;
  /** 更新单元化规则 {@link UpdateUnitRuleRequest} {@link UpdateUnitRuleResponse} */
  UpdateUnitRule(data: UpdateUnitRuleRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateUnitRuleResponse>;
}

export declare type Versions = ["2018-03-26"];

export default Tsf;
