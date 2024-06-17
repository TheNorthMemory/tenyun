/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 腾讯云应用性能管理服务参数 */
declare interface APM {
  /** 是否启用 */
  Enable: boolean;
  /** 地域 */
  Region?: string | null;
  /** APM 实例，如果创建时传入的参数为空，则表示自动创建 APM 实例。 */
  InstanceId?: string | null;
  /** 是否要删除APM实例 */
  NeedDelete?: boolean | null;
}

/** AccessLog 配置 */
declare interface AccessLogConfig {
  /** 是否启用 */
  Enable?: boolean;
  /** 采用的模板，可选值：istio（默认）、trace */
  Template?: string;
  /** 选中的范围 */
  SelectedRange?: SelectedRange;
  /** 腾讯云日志服务相关参数 */
  CLS?: CLS;
  /** 编码格式，可选值：TEXT、JSON */
  Encoding?: string;
  /** 日志格式 */
  Format?: string;
  /** GRPC第三方服务器地址 */
  Address?: string;
  /** 是否启用GRPC第三方服务器 */
  EnableServer?: boolean;
  /** 是否启用标准输出 */
  EnableStdout?: boolean;
}

/** 正在执行的异步操作 */
declare interface ActiveOperation {
  /** 操作Id */
  OperationId: string;
  /** 操作类型，取值范围：- LINK_CLUSTERS: 关联集群- RELINK_CLUSTERS: 重新关联集群- UNLINK_CLUSTERS: 解关联集群- INSTALL_MESH: 安装网格 */
  Type: string;
}

/** 描述某一网格在特定命名空间下的自动注入状态 */
declare interface AutoInjectionNamespaceState {
  /** 命名空间名称 */
  Namespace: string;
  /** 注入状态 */
  State?: string | null;
}

/** 腾讯云日志服务相关参数 */
declare interface CLS {
  /** 是否启用 */
  Enable: boolean;
  /** 日志集 */
  LogSet?: string;
  /** 日志主题 */
  Topic?: string;
  /** 是否删除 */
  NeedDelete?: boolean;
  /** cls 主题创建的地域 */
  Region?: string | null;
}

/** Mesh集群信息 */
declare interface Cluster {
  /** 集群Id */
  ClusterId: string;
  /** 地域 */
  Region: string;
  /** 集群角色，取值范围：- MASTER：控制面所在的主集群- REMOTE：主集群管理的远端集群 */
  Role: string;
  /** 私有网络Id */
  VpcId: string;
  /** 子网Id */
  SubnetId: string;
  /** 名称，只读 */
  DisplayName?: string;
  /** 状态，只读 */
  State?: string;
  /** 关联时间，只读 */
  LinkedTime?: string;
  /** 集群配置 */
  Config?: ClusterConfig;
  /** 详细状态，只读 */
  Status?: ClusterStatus;
  /** 类型，取值范围：- TKE- EKS */
  Type?: string;
  /** 集群关联的 Namespace 列表 */
  HostedNamespaces?: string[];
}

/** 集群配置 */
declare interface ClusterConfig {
  /** 自动注入SideCar的NameSpace */
  AutoInjectionNamespaceList: string[];
  /** Ingress配置列表 */
  IngressGatewayList?: IngressGateway[];
  /** Egress配置列表 */
  EgressGatewayList?: EgressGateway[];
  /** Istiod配置 */
  Istiod?: IstiodConfig | null;
  /** 部署配置 */
  DeployConfig?: DeployConfig;
  /** 自动注入命名空间状态列表 */
  AutoInjectionNamespaceStateList?: AutoInjectionNamespaceState[];
}

/** 集群状态 */
declare interface ClusterStatus {
  /** 关联状态，取值范围：- LINKING: 关联中- LINKED: 已关联- UNLINKING: 解关联中- LINK_FAILED: 关联失败- UNLINK_FAILED: 解关联失败 */
  LinkState: string;
  /** 关联错误详情 */
  LinkErrorDetail: string | null;
}

/** 负载均衡跨域设置 */
declare interface CrossRegionConfig {
}

/** 第三方 Prometheus 配置参数 */
declare interface CustomPromConfig {
  /** Prometheus 访问地址 */
  Url: string | null;
  /** 认证方式 */
  AuthType: string | null;
  /** 是否公网地址，缺省为 false */
  IsPublicAddr?: boolean | null;
  /** 虚拟网络id */
  VpcId?: string | null;
  /** Prometheus 用户名（用于 basic 认证方式） */
  Username?: string | null;
  /** Prometheus 密码（用于 basic 认证方式） */
  Password?: string | null;
}

/** 部署配置 */
declare interface DeployConfig {
  /** 部署类型，取值范围：- SPECIFIC：专有模式- AUTO：普通模式 */
  NodeSelectType?: string;
  /** 指定的节点 */
  Nodes?: string[];
}

/** Egress配置 */
declare interface EgressGateway {
  /** Egress名称 */
  Name: string;
  /** 所在的Namespace */
  Namespace: string;
  /** 工作负载配置 */
  Workload?: WorkloadConfig;
  /** 工作负载的状态 */
  Status?: EgressGatewayStatus;
}

/** egress gateway 的状态 */
declare interface EgressGatewayStatus {
  /** egress gateway的当前版本 */
  CurrentVersion: string;
  /** egress gateway的目标版本 */
  DesiredVersion: string;
  /** egress gateway的状态，取值：running，upgrading，rollbacking */
  State: string;
}

/** 内网独占集群配置 */
declare interface ExtensiveCluster {
  /** Cluster ID */
  ClusterId?: string | null;
  /** 可用区 */
  Zone?: string | null;
}

/** 内网独占集群配置列表 */
declare interface ExtensiveClusters {
  /** 4层集群配置 */
  L4Clusters?: ExtensiveCluster[] | null;
  /** 7层集群配置 */
  L7Clusters?: ExtensiveCluster[] | null;
}

/** 键值对过滤器，用于条件过滤查询。例如过滤ID、名称等 */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** Grafana信息 */
declare interface GrafanaInfo {
  /** 是否开启 */
  Enabled: boolean;
  /** 内网地址 */
  InternalURL: string;
  /** 公网地址 */
  PublicURL: string | null;
  /** 公网失败原因 */
  PublicFailedReason: string | null;
  /** 公网失败详细信息 */
  PublicFailedMessage: string | null;
}

/** HPA 配置 */
declare interface HorizontalPodAutoscalerSpec {
  /** 最小副本数 */
  MinReplicas: number;
  /** 最大副本数 */
  MaxReplicas: number;
  /** 用于计算副本数的指标 */
  Metrics: MetricSpec[];
}

/** IngressGateway 实例信息 */
declare interface IngressGateway {
  /** IngressGateway 实例名字 */
  Name: string;
  /** 命名空间 */
  Namespace: string;
  /** 集群 ID */
  ClusterId: string;
  /** Service 配置 */
  Service: Service;
  /** Workload 配置 */
  Workload: WorkloadConfig;
  /** 负载均衡配置，自动创建 CLB 时返回 */
  LoadBalancer?: LoadBalancer | null;
  /** IngressGateway 状态信息，只读 */
  Status?: IngressGatewayStatus;
  /** 负载均衡实例ID，使用已有 CLB 时返回 */
  LoadBalancerId?: string;
}

/** IngressGateway状态 */
declare interface IngressGatewayStatus {
  /** 负载均衡实例状态 */
  LoadBalancer: LoadBalancerStatus;
  /** ingress gateway 当前的版本 */
  CurrentVersion: string;
  /** ingress gateway 目标的版本 */
  DesiredVersion: string;
  /** ingress gateway的状态，取值running, upgrading, rollbacking */
  State: string;
}

/** 自动注入配置 */
declare interface InjectConfig {
  /** 不需要进行代理的 ip 地址范围 */
  ExcludeIPRanges?: string[] | null;
  /** 是否等待sidecar启动 */
  HoldApplicationUntilProxyStarts?: boolean | null;
  /** 是否允许sidecar等待 */
  HoldProxyUntilApplicationEnds?: boolean | null;
}

/** Istio配置 */
declare interface IstioConfig {
  /** 外部流量策略 */
  OutboundTrafficPolicy: string;
  /** 调用链配置（Deprecated，请使用 MeshConfig.Tracing 进行配置） */
  Tracing?: TracingConfig;
  /** 禁用策略检查功能 */
  DisablePolicyChecks?: boolean | null;
  /** 支持HTTP1.0协议 */
  EnablePilotHTTP?: boolean | null;
  /** 禁用HTTP重试策略 */
  DisableHTTPRetry?: boolean | null;
  /** SmartDNS策略 */
  SmartDNS?: SmartDNSConfig | null;
}

/** Istiod配置 */
declare interface IstiodConfig {
  /** 工作负载配置 */
  Workload?: WorkloadConfig;
}

/** 负载均衡配置 */
declare interface LoadBalancer {
  /** 负载均衡实例的网络类型：OPEN：公网属性， INTERNAL：内网属性。只读。 */
  LoadBalancerType?: string;
  /** 负载均衡实例所在的子网（仅对内网VPC型LB有意义），只读。 */
  SubnetId?: string;
  /** TRAFFIC_POSTPAID_BY_HOUR 按流量按小时后计费 ; BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;只读。 */
  InternetChargeType?: string;
  /** 最大出带宽，单位Mbps，仅对公网属性的LB生效，默认值 10 */
  InternetMaxBandwidthOut?: number;
  /** 可用区 ID */
  ZoneID?: string | null;
  /** 运营商类型 */
  VipIsp?: string | null;
  /** TGW Group 名 */
  TgwGroupName?: string | null;
  /** IP 类型 */
  AddressIPVersion?: string | null;
  /** 标签列表 */
  Tags?: Tag[] | null;
  /** 内网独占集群配置列表 */
  ExtensiveClusters?: ExtensiveClusters | null;
  /** 负载均衡跨地域配置 */
  CrossRegionConfig?: CrossRegionConfig | null;
  /** 设置跨可用区容灾时的主可用区ID */
  MasterZoneID?: string | null;
  /** 设置跨可用区容灾时的备可用区ID */
  SlaveZoneID?: string | null;
}

/** 负载均衡状态信息 */
declare interface LoadBalancerStatus {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 负载均衡实例名字 */
  LoadBalancerName: string;
  /** 负载均衡实例 VIP */
  LoadBalancerVip: string;
  /** 负载均衡实例 Hostname */
  LoadBalancerHostname: string | null;
}

/** Mesh信息 */
declare interface Mesh {
  /** Mesh实例Id */
  MeshId: string;
  /** Mesh名称 */
  DisplayName: string;
  /** Mesh类型，取值范围：- STANDALONE：独立网格- HOSTED：托管网格 */
  Type: string;
  /** 地域 */
  Region: string;
  /** 版本 */
  Version: string;
  /** Mesh状态，取值范围：- PENDING：等待中- CREATING：创建中- RUNNING：运行中- ABNORMAL：异常- UPGRADING：升级中- CANARY_UPGRADED：升级灰度完成- ROLLBACKING：升级回滚- DELETING：删除中- CREATE_FAILED：安装失败- DELETE_FAILED：删除失败- UPGRADE_FAILED：升级失败- ROLLBACK_FAILED：回滚失败 */
  State: string;
  /** 创建时间 */
  CreatedTime: string;
  /** 修改时间 */
  UpdatedTime: string | null;
  /** 集群列表 */
  ClusterList: Cluster[];
  /** Mesh配置 */
  Config: MeshConfig;
  /** Mesh详细状态 */
  Status: MeshStatus;
  /** 标签列表 */
  TagList: Tag[];
}

/** 网格配置项 */
declare interface MeshConfig {
  /** Istio配置 */
  Istio?: IstioConfig;
  /** AccessLog配置 */
  AccessLog?: AccessLogConfig;
  /** Prometheus配置 */
  Prometheus?: PrometheusConfig;
  /** 自动注入配置 */
  Inject?: InjectConfig | null;
  /** 调用跟踪配置 */
  Tracing?: TracingConfig | null;
  /** Sidecar自定义资源 */
  SidecarResources?: ResourceRequirements | null;
}

/** Mesh当前状态 */
declare interface MeshStatus {
  /** 服务数量 */
  ServiceCount: number;
  /** 灰度升级的版本 */
  CanaryVersion: string | null;
  /** 已废弃 */
  Prometheus: PrometheusStatus[] | null;
  /** 状态附带信息 */
  StateMessage: string | null;
  /** 正在执行的异步操作 */
  ActiveOperationList: ActiveOperation[] | null;
  /** 获取TPS信息 */
  TPS: PrometheusStatus | null;
}

/** MetricSpec 描述如何通过指定指标进行自动扩缩容 */
declare interface MetricSpec {
  /** 指标来源类型，支持 Pods/Resource */
  Type: string;
  /** 使用自定义指标扩进行自动扩缩容 */
  Pods?: PodsMetricSource;
  /** 使用资源指标扩进行自动扩缩容 */
  Resource?: ResourceMetricSource;
}

/** PodsMetricSource 定义了如何根据特定指标进行扩缩容 */
declare interface PodsMetricSource {
  /** 指标名 */
  MetricName: string;
  /** 目标值 */
  TargetAverageValue: string;
}

/** Prometheus 配置 */
declare interface PrometheusConfig {
  /** 虚拟网络Id */
  VpcId?: string;
  /** 子网Id */
  SubnetId?: string;
  /** 地域 */
  Region?: string;
  /** 关联已存在实例Id，不填则默认创建 */
  InstanceId?: string;
  /** 第三方 Prometheus */
  CustomProm?: CustomPromConfig | null;
}

/** Prometheus状态信息 */
declare interface PrometheusStatus {
  /** Prometheus Id */
  PrometheusId: string;
  /** 展示名称 */
  DisplayName: string;
  /** 实例Id */
  InstanceId: string;
  /** 虚拟网络Id */
  VpcId: string;
  /** 状态 */
  State: string;
  /** 地区 */
  Region: string;
  /** Grafana信息 */
  Grafana: GrafanaInfo | null;
  /** Prometheus 类型 */
  Type: string | null;
}

/** Resource 定义了资源类型和数量 */
declare interface Resource {
  /** 资源类型 cpu/memory */
  Name?: string;
  /** 资源数量 */
  Quantity?: string;
}

/** ResourceMetricSource 定义了如何根据已知类型的资源指标进行扩缩容 */
declare interface ResourceMetricSource {
  /** 资源名称 cpu/memory */
  Name: string;
  /** 目标平均利用率 */
  TargetAverageUtilization: number;
  /** 目标平均值 */
  TargetAverageValue: string;
}

/** ResourceRequirements 描述了计算资源需求。 */
declare interface ResourceRequirements {
  /** Limits 描述了允许的最大计算资源量。 */
  Limits?: Resource[];
  /** Requests 描述所需的最小计算资源量。 */
  Requests?: Resource[];
}

/** 选中的项目 */
declare interface SelectedItems {
  /** 命名空间 */
  Namespace?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 选中项目名字 */
  ItemName?: string;
  /** ingress gw的名称列表 */
  Gateways?: string[];
}

/** 被选中的范围 */
declare interface SelectedRange {
  /** 选中的项目详细内容 */
  Items?: SelectedItems[];
  /** 是否全选 */
  All?: boolean;
}

/** Service信息 */
declare interface Service {
  /** ClusterIP/NodePort/LoadBalancer */
  Type?: string;
  /** 是否开启LB直通Pod */
  CLBDirectAccess?: boolean;
  /** 服务是否希望将外部流量路由到节点本地或集群范围的端点。 有两个可用选项：Cluster（默认）和 Local。Cluster 隐藏了客户端源 IP，可能导致第二跳到另一个节点；Local 保留客户端源 IP 并避免 LoadBalancer 和 NodePort 类型服务的第二跳。 */
  ExternalTrafficPolicy?: string;
}

/** 智能DNS配置 */
declare interface SmartDNSConfig {
  /** 开启DNS代理 */
  IstioMetaDNSCapture?: boolean | null;
  /** 开启自动地址分配 */
  IstioMetaDNSAutoAllocate?: boolean | null;
}

/** 标签 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
  /** 是否透传给其他关联产品 */
  Passthrough?: boolean;
}

/** 调用链配置 */
declare interface TracingConfig {
  /** 调用链采样率，百分比 */
  Sampling?: number;
  /** 是否启用调用跟踪 */
  Enable?: boolean;
  /** 腾讯云 APM 服务相关参数 */
  APM?: APM;
  /** 启动第三方服务器的地址 */
  Zipkin?: TracingZipkin;
}

/** 调用追踪的Zipkin设置 */
declare interface TracingZipkin {
  /** Zipkin调用地址 */
  Address: string;
}

/** 工作负载配置 */
declare interface WorkloadConfig {
  /** 工作副本数 */
  Replicas?: number;
  /** 资源配置 */
  Resources?: ResourceRequirements;
  /** HPA策略 */
  HorizontalPodAutoscaler?: HorizontalPodAutoscalerSpec;
  /** 部署到指定节点 */
  SelectedNodeList?: string[];
  /** 组件的部署模式，取值说明：IN_GENERAL_NODE：常规节点IN_EKLET：eklet 节点IN_SHARED_NODE_POOL：共享节电池IN_EXCLUSIVE_NODE_POOL：独占节点池 */
  DeployMode?: string;
}

declare interface CreateMeshRequest {
  /** Mesh名称 */
  DisplayName: string;
  /** Mesh版本 */
  MeshVersion: string;
  /** Mesh类型，取值范围：- HOSTED：托管网格 */
  Type: string;
  /** Mesh配置 */
  Config: MeshConfig;
  /** 关联集群 */
  ClusterList?: Cluster[];
  /** 标签列表 */
  TagList?: Tag[];
}

declare interface CreateMeshResponse {
  /** 创建的Mesh的Id */
  MeshId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteMeshRequest {
  /** 需要删除的MeshId */
  MeshId: string;
  /** CLS组件是否被删除 */
  NeedDeleteCLS?: boolean;
  /** TMP组件是否被删除 */
  NeedDeleteTMP?: boolean;
  /** APM组件是否被删除 */
  NeedDeleteAPM?: boolean;
  /** Grafana组件是否被删除 */
  NeedDeleteGrafana?: boolean;
}

declare interface DeleteMeshResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccessLogConfigRequest {
  /** mesh名字 */
  MeshId: string;
}

declare interface DescribeAccessLogConfigResponse {
  /** 访问日志输出路径。默认 /dev/stdout */
  File: string;
  /** 访问日志的格式。 */
  Format: string;
  /** 访问日志输出编码，可取值为 "TEXT" 或 "JSON"，默认 TEXT" */
  Encoding: string;
  /** 选中的范围 */
  SelectedRange: SelectedRange | null;
  /** 采用的模板，可取值为"istio" 或 "trace"，默认为"istio" */
  Template: string;
  /** 腾讯云日志服务相关参数 */
  CLS: CLS;
  /** GRPC第三方服务器地址 */
  Address: string;
  /** 是否启用GRPC第三方服务器 */
  EnableServer: boolean;
  /** 是否启用标准输出 */
  EnableStdout: boolean;
  /** 是否启用访问日志采集 */
  Enable: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMeshListRequest {
  /** 过滤条件 */
  Filters?: Filter[];
  /** 分页限制 */
  Limit?: number;
  /** 分页偏移 */
  Offset?: number;
}

declare interface DescribeMeshListResponse {
  /** 查询到的网格信息 */
  MeshList?: Mesh[] | null;
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMeshRequest {
  /** 需要查询的网格 Id */
  MeshId: string;
}

declare interface DescribeMeshResponse {
  /** Mesh详细信息 */
  Mesh: Mesh;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LinkClusterListRequest {
  /** 网格Id */
  MeshId: string;
  /** 关联集群 */
  ClusterList: Cluster[];
}

declare interface LinkClusterListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LinkPrometheusRequest {
  /** 网格ID */
  MeshID: string;
  /** 配置 */
  Prometheus: PrometheusConfig;
}

declare interface LinkPrometheusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAccessLogConfigRequest {
  /** mesh ID */
  MeshId: string;
  /** 选中的范围 */
  SelectedRange?: SelectedRange;
  /** 采用的模板，可选值：istio（默认）、trace、custom */
  Template?: string;
  /** 是否启用 */
  Enable?: boolean;
  /** 腾讯云日志服务相关参数 */
  CLS?: CLS;
  /** 编码格式，可选值：TEXT、JSON */
  Encoding?: string;
  /** 日志格式 */
  Format?: string;
  /** 是否启用标准输出 */
  EnableStdout?: boolean;
  /** 是否启动GRPC第三方服务器 */
  EnableServer?: boolean;
  /** GRPC第三方服务器地址 */
  Address?: string;
}

declare interface ModifyAccessLogConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyMeshRequest {
  /** 需要修改的网格Id */
  MeshId: string;
  /** 修改的网格名称 */
  DisplayName?: string;
  /** 修改的网格配置 */
  Config?: MeshConfig;
  /** 修改的集群配置 */
  ClusterList?: Cluster[];
}

declare interface ModifyMeshResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTracingConfigRequest {
  /** mesh名字 */
  MeshId: string;
  /** 是否启用调用跟踪 */
  Enable?: boolean;
  /** 腾讯云 APM 服务相关参数 */
  APM?: APM;
  /** 调用跟踪采样值 */
  Sampling?: number;
  /** 调用追踪Zipkin相关配置 */
  Zipkin?: TracingZipkin;
}

declare interface ModifyTracingConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnlinkClusterRequest {
  /** 网格Id */
  MeshId: string;
  /** 取消关联的集群Id */
  ClusterId?: string;
}

declare interface UnlinkClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnlinkPrometheusRequest {
  /** 网格ID */
  MeshID: string;
}

declare interface UnlinkPrometheusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tcm 服务网格} */
declare interface Tcm {
  (): Versions;
  /** 创建网格 {@link CreateMeshRequest} {@link CreateMeshResponse} */
  CreateMesh(data: CreateMeshRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMeshResponse>;
  /** 删除网格 {@link DeleteMeshRequest} {@link DeleteMeshResponse} */
  DeleteMesh(data: DeleteMeshRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMeshResponse>;
  /** 获取AccessLog配置 {@link DescribeAccessLogConfigRequest} {@link DescribeAccessLogConfigResponse} */
  DescribeAccessLogConfig(data: DescribeAccessLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccessLogConfigResponse>;
  /** 查询网格详情 {@link DescribeMeshRequest} {@link DescribeMeshResponse} */
  DescribeMesh(data: DescribeMeshRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMeshResponse>;
  /** 查询网格列表 {@link DescribeMeshListRequest} {@link DescribeMeshListResponse} */
  DescribeMeshList(data?: DescribeMeshListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMeshListResponse>;
  /** 关联集群 {@link LinkClusterListRequest} {@link LinkClusterListResponse} */
  LinkClusterList(data: LinkClusterListRequest, config?: AxiosRequestConfig): AxiosPromise<LinkClusterListResponse>;
  /** 关联Prometheus {@link LinkPrometheusRequest} {@link LinkPrometheusResponse} */
  LinkPrometheus(data: LinkPrometheusRequest, config?: AxiosRequestConfig): AxiosPromise<LinkPrometheusResponse>;
  /** 修改访问日志配置 {@link ModifyAccessLogConfigRequest} {@link ModifyAccessLogConfigResponse} */
  ModifyAccessLogConfig(data: ModifyAccessLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAccessLogConfigResponse>;
  /** 修改网格 {@link ModifyMeshRequest} {@link ModifyMeshResponse} */
  ModifyMesh(data: ModifyMeshRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyMeshResponse>;
  /** 修改 Tracing 配置 {@link ModifyTracingConfigRequest} {@link ModifyTracingConfigResponse} */
  ModifyTracingConfig(data: ModifyTracingConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTracingConfigResponse>;
  /** 解关联集群 {@link UnlinkClusterRequest} {@link UnlinkClusterResponse} */
  UnlinkCluster(data: UnlinkClusterRequest, config?: AxiosRequestConfig): AxiosPromise<UnlinkClusterResponse>;
  /** 解除关联Prometheus {@link UnlinkPrometheusRequest} {@link UnlinkPrometheusResponse} */
  UnlinkPrometheus(data: UnlinkPrometheusRequest, config?: AxiosRequestConfig): AxiosPromise<UnlinkPrometheusResponse>;
}

export declare type Versions = ["2021-04-13"];

export default Tcm;
