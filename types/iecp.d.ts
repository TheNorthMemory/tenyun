/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 应用基本配置 */
declare interface ApplicationBasicConfig {
  /** 名称 */
  Name: string;
  /** 命名空间 */
  Namespace: string;
  /** 工作负载类型 */
  WorkflowKind: string;
  /** 标签信息 */
  Labels?: Label[];
  /** Grid唯一Key */
  GridUniqKey?: string;
  /** NodeSelector标签 */
  NodeSelector?: Label[];
  /** 实例数 */
  Replicas?: number;
  /** 可用实例数 */
  AvailableReplicas?: number;
  /** 是否开启service环境变量注入pod */
  EnableServiceLinks?: boolean | null;
}

/** 应用基本信息 */
declare interface ApplicationBasicInfo {
  /** 名称 */
  Name: string;
  /** 管理URL地址 */
  ManageUrl?: string;
  /** 描述信息 */
  Description?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 是否允许可视化修改 */
  AllowVisualModify?: boolean | null;
}

/** 应用部署模式 */
declare interface ApplicationDeployMode {
  /** 1:指定节点部署 2:单元部署 */
  Type: number | null;
  /** 资源ID */
  ResourceID: number;
  /** 资源名 */
  ResourceName: string;
}

/** 应用状态 */
declare interface ApplicationStatusInfo {
  /** 应用ID */
  Id?: number | null;
  /** 应用名称 */
  Name: string | null;
  /** 应用版本 */
  Version: string | null;
  /** 应用状态(1:待部署 2:部署中 3:运行中 4:待更新 5:更新中 6:待删除 7:删除中 8:已删除 */
  Status: string | null;
  /** 开始时间 */
  StartTime: string | null;
  /** 管理地址 */
  ManageUrl: string | null;
  /** 负载类型 */
  WorkloadKind: string | null;
  /** 应用部署模式 */
  DeployMode: ApplicationDeployMode | null;
  /** 期望Pod数 */
  Replicas: number | null;
  /** 运行Pod数 */
  AvailableReplicas: number | null;
}

/** 应用模板列表详情 */
declare interface ApplicationTemplate {
  /** 模板ID */
  Id: number | null;
  /** 模板名称 */
  Name: string | null;
  /** 来源。1 自定义应用模板 ; 2 官方应用模板 */
  Source: number | null;
  /** 应用类型 */
  WorkloadKind: string | null;
  /** 管理地址 */
  ManageUrl: string | null;
  /** 发布时间 */
  DistributeTime: string | null;
}

/** ConfigMap基本信息 */
declare interface ConfigMapBasicInfo {
  /** 名称 */
  Name: string | null;
  /** 命名空间 */
  Namespace: string | null;
  /** 创建时间 */
  CreateTime: string | null;
}

/** 容器配置信息 */
declare interface Container {
  /** 名称 */
  Name: string;
  /** 镜像名 */
  ImageName: string;
  /** 镜像版本 */
  ImageVersion: string;
  /** 镜像拉取策略(Always|Never|IfNotPresent) */
  ImagePullPolicy: string;
  /** 卷挂载配置 */
  VolumeMounts: VolumeMount[] | null;
  /** cpu最低配置 */
  CpuRequest: string;
  /** cpu最高限制 */
  CpuLimit: string;
  /** 内存最低要求 */
  MemoryRequest: string;
  /** 内存最高要求 */
  MemoryLimit: string;
  /** 内存单位 */
  MemoryUnit: string;
  /** gpu最高限制 */
  GpuLimit?: string;
  /** 资源配置 */
  ResourceMapCloud?: KeyValueObj[];
  /** 环境配置 */
  Envs?: Env[];
  /** 工作目录 */
  WorkingDir?: string;
  /** 命令 */
  Commands?: string[];
  /** 参数 */
  Args?: string[];
  /** 安全配置 */
  SecurityContext?: SecurityContext;
  /** 就绪探针配置 */
  ReadinessProbe?: Probe;
}

/** 容器状态 */
declare interface ContainerStatus {
  /** 容器名 */
  Name: string | null;
  /** 容器ID */
  ID: string | null;
  /** 镜像 */
  Image: string | null;
  /** 重启次数 */
  RestartCount: number | null;
  /** 状态 */
  Status: string;
}

/** CronJob配置 */
declare interface CronJob {
  /** 调度配置 */
  Schedule: string;
  /** 运行时间 */
  StartingDeadlineSeconds: number;
  /** job并行策略(Allow|Forbid|Replace) */
  ConcurrencyPolicy: string;
  /** Job配置 */
  Job: Job;
}

/** 从单元批量解绑设备 */
declare interface DeleteEdgeUnitDevicesDevice {
  /** 无 */
  ProductId: string;
  /** 无 */
  DeviceName: string;
}

/** docker配置 */
declare interface DockerConfig {
  /** 镜像仓库地址 */
  RegistryDomain: string | null;
  /** 用户名 */
  UserName: string;
  /** 密码 */
  Password: string;
}

/** Draco 设备预录入信息 */
declare interface DracoNodeInfo {
  /** 设备SN。SN仅支持大写字母、数字，长度限制为1~32个字符 */
  SN: string;
  /** 节点名称。长度限制为1~63个字符，节点名称只支持小写英文、数字、中横线、英文句号 */
  Name: string;
  /** 节点备注 */
  Remark?: string;
}

/** 获取边缘集群列表 */
declare interface EdgeCloudCluster {
  /** IECP侧边缘集群ID */
  EdgeId: number | null;
  /** 边缘集群ID */
  ClusterId: string | null;
  /** 区域 */
  Region: string | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 集群版本 */
  K8SVersion: string | null;
  /** 私有网络ID */
  VpcId: string | null;
  /** 描述 */
  ClusterDesc: string | null;
  /** 集群状态 */
  Status: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** pod cidr */
  PodCIDR: string | null;
  /** service cidr */
  ServiceCIDR: string | null;
  /** 边缘版本类型 */
  EdgeClusterVersion: string | null;
  /** 用户ID */
  UID: string | null;
}

/** 预注册节点的信息 */
declare interface EdgeDracoNodeInfo {
  /** 节点ID */
  Id: number;
  /** 节点名称 */
  Name: string;
  /** 是否已激活 */
  IsUsed: boolean;
  /** 创建时间 */
  CreateTime: string;
  /** 备注信息，如批次 */
  Remark: string;
  /** SN 设备号 */
  SN: string;
}

/** 边缘节点信息 */
declare interface EdgeNodeInfo {
  /** IECP边缘节点ID */
  Id: number;
  /** 节点名称 */
  Name: string;
  /** 节点状态 （1健康｜2异常｜3离线｜4未激活） */
  Status: number;
  /** 创建时间 */
  CreateTime: string;
  /** 节点资源信息 */
  Resource: EdgeNodeResourceInfo | null;
  /** CPU体系结构 */
  CpuArchitecture: string | null;
  /** IP地址 */
  Ip: string | null;
  /** 操作系统 */
  OperatingSystem: string | null;
  /** 节点所属的NodeUnitkey：NodeUnit模版ID，Value：NodeUnit模版名称 */
  NodeUnits: KeyValueObj | null;
}

/** 节点在线安装信息 */
declare interface EdgeNodeInstallerOnline {
  /** 节点安装脚本名称 */
  ScriptName: string | null;
  /** 节点安装脚本下载链接 */
  ScriptDownloadUrl: string | null;
  /** 节点安装命令 */
  Guide: string | null;
}

/** 边缘节点标签 */
declare interface EdgeNodeLabel {
  /** 标签名称 */
  Key: string | null;
  /** 标签值 */
  Value: string | null;
  /** 是否受保护 */
  Protected: boolean;
}

/** 边缘节点Pod容器信息 */
declare interface EdgeNodePodContainerInfo {
  /** Pod名称 */
  Name: string | null;
  /** 容器ID */
  Id: string | null;
  /** 镜像（含版本号） */
  Image: string | null;
  /** CPU Request */
  CpuRequest: string | null;
  /** CPU Limit */
  CpuLimit: string | null;
  /** Memory Request */
  MemoryRequest: string | null;
  /** Memory Limit */
  MemoryLimit: string | null;
  /** 重启次数 */
  RestartCount: number | null;
  /** 容器状态 */
  Status: string | null;
}

/** 边缘节点Pod信息 */
declare interface EdgeNodePodInfo {
  /** Pod名称 */
  Name: string | null;
  /** Pod状态 */
  Status: string | null;
  /** 所在节点IP */
  NodeIp: string | null;
  /** 实例IP */
  Ip: string | null;
  /** CPU Request */
  CpuRequest: string | null;
  /** Memory Request */
  MemoryRequest: string | null;
  /** 命名空间 */
  Namespace: string | null;
  /** 工作负载类型 */
  WorkloadType: string | null;
  /** 工作负载名称 */
  WorkloadName: string | null;
  /** 创建时间 */
  StartTime: string | null;
  /** 重启次数 */
  RestartCount: number | null;
  /** 集群ID */
  ClusterID: string;
}

/** 边缘节点资源信息 */
declare interface EdgeNodeResourceInfo {
  /** 可使用的CPU 单位: m核 */
  AllocatedCPU: string | null;
  /** CPU总量 单位:m核 */
  TotalCPU: string | null;
  /** 已分配的内存 单位G */
  AllocatedMemory: string | null;
  /** 内存总量 单位G */
  TotalMemory: string | null;
  /** 已分配的GPU资源 */
  AllocatedGPU: string | null;
  /** GPU总量 */
  TotalGPU: string | null;
  /** 可使用的CPU 单位: m核 */
  AvailableCPU: string | null;
  /** 可使用的内存 单位: G */
  AvailableMemory: string | null;
  /** 可使用的GPU资源 */
  AvailableGPU: string | null;
}

/** 单元内的统计信息 */
declare interface EdgeUnitStatisticItem {
  /** 总数 */
  Total: number | null;
  /** 在线数 */
  Online: number | null;
  /** 异常数 */
  Abnormal: number | null;
  /** 离线数 */
  Offline: number | null;
  /** 未激活 */
  NotActive: number | null;
}

/** 环境变量 */
declare interface Env {
  /** 名称 */
  Name: string;
  /** 值 */
  Value: string;
  /** 值引用 */
  ValueFrom: EnvValueSelector;
}

/** 环境变量选择 */
declare interface EnvValueSelector {
  /** 健名 */
  Key: string;
  /** 对象名 */
  ObjectName: string;
  /** 对象值 */
  ObjectType: string;
}

/** 事件信息 */
declare interface Event {
  /** 第一次出现时间 */
  FirstTime: string | null;
  /** 最后一次出现时间 */
  LastTime: string | null;
  /** 事件关联对象类型 */
  InvolvedObjectKind: string | null;
  /** 事件关联对象名 */
  InvolvedObjectName: string | null;
  /** 事件类型(Normal|Warning) */
  Type: string;
  /** 原因 */
  Reason: string | null;
  /** 内容 */
  Message: string | null;
  /** 出现次数 */
  Count: number | null;
}

/** 字段排序 */
declare interface FieldSort {
  /** 字段名 */
  Field?: string;
  /** 排序(ASC:升序 DESC:降序 */
  Order?: string;
}

/** ServiceGroup中Grid信息 */
declare interface GridDetail {
  /** Grid名称 */
  Name: string;
  /** GridID */
  Id: number;
}

/** Grid事件信息 */
declare interface GridEventInfo {
  /** 首次出现时间 */
  FirstTime: string;
  /** 最后出现时间 */
  LastTime: string;
  /** 对象类型 */
  InvolvedObjectKind: string;
  /** 对象名称 */
  InvolvedObjectName: string;
  /** 事件类型(Normal,Warning) */
  Type: string;
  /** 事件原因 */
  Reason: string;
  /** 事件内容 */
  Message: string;
  /** 次数 */
  Count: number;
  /** 节点名（Pod事件类型时有值） */
  NodeName: string;
  /** 节点内部IP（Pod事件类型时有值） */
  IP: string | null;
}

/** Grid信息 */
declare interface GridInfo {
  /** DeployGridId */
  Id: number;
  /** 名称 */
  Name: string;
  /** Key */
  GridUniqKey: string;
  /** 描述 */
  Description: string;
  /** 工作负载类型 */
  WorkloadKind: string;
  /** 启动时间 */
  StartTime: string;
  /** 副本数 */
  Replicas: number | null;
  /** 创建人 */
  Publisher: string;
  /** 版本信息 */
  Version: string;
}

/** Grid部署应用信息 */
declare interface GridItemInfo {
  /** 名称 */
  Name: string;
  /** 期望副本数 */
  Replicas: number | null;
  /** 可用副本数 */
  AvailableReplicas: number;
  /** 启动时间 */
  StartTime: string;
  /** 工作负载类型 */
  WorkloadKind: string;
}

/** GridPod信息 */
declare interface GridPodInfo {
  /** Pod名称 */
  Name: string;
  /** 命名空间 */
  NameSpace: string;
  /** 状态(Pending｜Running｜Succeeded｜Failed｜Unknown) */
  Status: string;
  /** 节点名 */
  NodeName: string;
  /** 节点IP */
  NodeIP: string;
  /** Pod的IP */
  PodIP: string;
  /** 启动时间 */
  StartTime: string | null;
  /** 运行时长（秒） */
  RunSec: number | null;
  /** 重启次数 */
  RestartCount: number;
  /** 集群名称ID */
  ClusterID: string | null;
}

/** pod水平伸缩配置 */
declare interface HorizontalPodAutoscaler {
  /** 名称 */
  Name: string;
  /** 命名空间 */
  Namespace: string;
  /** 最小实例数 */
  MinReplicas: number;
  /** 最大实例数 */
  MaxReplicas: number;
  /** 资源目标指标 */
  ResourceMetricTarget: ResourceMetricTarget[];
}

/** Http探测头 */
declare interface HttpHeader {
  /** HTTP头的名称 */
  Name: string | null;
  /** HTTP头的值 */
  Value: string | null;
}

/** HTTP探测配置 */
declare interface HttpProbe {
  /** 请求路径 */
  Path: string | null;
  /** 请求端口 */
  Port: number | null;
  /** 请求地址，默认Pod的IP */
  Host?: string | null;
  /** 请求模式 HTTP|HTTPS，默认HTTP */
  Scheme?: string | null;
  /** HTTP的请求头 */
  Headers?: HttpHeader[] | null;
}

/** 子设备列表信息 */
declare interface IotDevicesInfo {
  /** 设备id */
  Id: number;
  /** 设备名称 */
  Name: string;
  /** 设备状态 */
  Status: number;
  /** 设备打开状态 */
  Disabled: boolean;
  /** 描述 */
  Description: string;
  /** 设备创建时间 */
  CreateTime: string;
  /** 最后在线时间 */
  LastOnlineTime: string;
  /** 设备是否绑定到节点 */
  IsBound: boolean;
  /** 设备版本 */
  Version: string;
  /** 无 */
  Region: string;
  /** 无 */
  UnitID: number;
  /** 无 */
  UnitName: string;
}

/** Job配置 */
declare interface Job {
  /** 并发数 */
  Parallelism: number;
  /** 完成数 */
  Completion: number;
  /** 最大运行时间 */
  ActiveDeadlineSeconds: number;
  /** 失败前重试次数 */
  BackOffLimit: number;
}

/** KeyValue对象 */
declare interface KeyValueObj {
  /** Key值 */
  Key: string;
  /** Value值 */
  Value: string;
}

/** 标签信息 */
declare interface Label {
  /** 健名 */
  Key: string;
  /** 健值 */
  Value: string;
}

/** 组件市场的组件描述 */
declare interface MarketComponentInfo {
  /** 组件ID */
  ID: number;
  /** 组件名称 */
  AppName: string;
  /** 发布者 */
  Author?: string;
  /** 发布时间 */
  ReleaseTime?: string;
  /** 组件简介 */
  Outline?: string;
  /** 指向详细描述的url */
  Detail?: string;
  /** 图标链接 */
  Icon?: string;
  /** 组件版本 */
  Version?: string;
  /** 组件可视化信息 */
  WorkloadVisualConfig?: string;
  /** 无 */
  DetailUrl?: string;
  /** 无 */
  Installed?: boolean;
}

/** 监控数据列 */
declare interface MonitorMetricsColumn {
  /** 数据名称 */
  ColumnName: string;
  /** 数据内容 */
  ColumnData: string[] | null;
  /** 数据所属，查询Workload类型时有值 */
  ColumnBelong: string;
  /** 最大值 */
  MaxValue: number;
  /** 最小值 */
  MinValue: number;
  /** 平均值 */
  AvgValue: number;
  /** 时间戳数组 */
  ColumnTime: number | null;
}

/** 命名空间信息 */
declare interface NamespaceInfo {
  /** 命名空间名 */
  Namespace: string | null;
  /** 状态(Active|Terminating) */
  Status: string | null;
  /** 描述信息 */
  Description: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 是否保护(不允许删除) */
  Protected: boolean | null;
  /** 对应的Yaml配置 */
  Yaml: string | null;
}

/** 命名空间下资源描述 */
declare interface NamespaceResource {
  /** 类型(workload|grid|configmap|secret) */
  Type: string | null;
  /** 总数 */
  Count: number | null;
  /** 名称(最多返回5个） */
  Names: string[] | null;
}

/** NodeGroup信息 */
declare interface NodeGroupInfo {
  /** 描述 */
  Description: string;
  /** 创建时间 */
  CreateTime: string;
  /** NodeGroup名称 */
  NodeGroupName: string;
  /** DeploymentGrid数组 */
  DeploymentGridList: GridDetail[] | null;
  /** StatefulSetGrid数组 */
  StatefulSetGridList: GridDetail[] | null;
  /** 是否平台保护 */
  Protect: boolean | null;
}

/** 指定NodeGroup中查询NodeUnit模版 */
declare interface NodeGroupNodeUnitTemplateInfo {
  /** 模版ID */
  ID: number;
  /** 名称 */
  Name: string;
  /** 命名空间 */
  Namespace: string;
  /** 描述 */
  Description: string;
  /** 包含节点列表 */
  NodeList: NodeSimpleInfo[];
  /** 更新时间 */
  UpdateTime: string;
  /** 创建时间 */
  CreateTime: string;
  /** 是否关联 */
  Relation: boolean;
}

/** 节点基础信息 */
declare interface NodeSimpleInfo {
  /** 节点ID */
  ID: number;
  /** 节点名称 */
  NodeName: string;
}

/** NodeUnit信息 */
declare interface NodeUnitInfo {
  /** NodeUnitId */
  Id: number;
  /** NodeUnit名称 */
  NodeUnitName: string;
  /** 包含节点列表 */
  NodeList: NodeUnitNodeInfo[] | null;
}

/** NodeUnit中边缘节点信息 */
declare interface NodeUnitNodeInfo {
  /** 节点ID */
  Id: number;
  /** 节点状态 NodeStatusHealthy (健康)/NodeStatusAbnormal (异常)/NodeStatusOffline (下线)/NodeStatusNotActivated (未激活 */
  Status: string;
  /** 节点名称 */
  NodeName: string;
  /** 内网节点IP */
  InternalIP: string;
}

/** NodeUnit模版信息 */
declare interface NodeUnitTemplate {
  /** NodeUnit模版ID */
  ID: number;
  /** NodeUnit模版名称 */
  Name: string;
  /** 命名空间 */
  Namespace: string;
  /** 描述 */
  Description: string;
  /** 包含节点列表 */
  NodeList: NodeSimpleInfo[] | null;
  /** NodeGroup列表 */
  NodeGroups: string[] | null;
  /** 更新时间 */
  UpdateTime: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 操作日志 */
declare interface OperationLog {
  /** 操作时间 */
  OperateTime: string | null;
  /** 模块名 */
  Module: string | null;
  /** 操作信息 */
  Description: string;
  /** 用户ID */
  UserId: string;
  /** 状态: 1:成功 2:失败 */
  Status: number;
  /** 操作用户ID */
  OperatorUserID: string | null;
  /** 操作动作 */
  Action: string | null;
}

/** 操作日志状态查询条件 */
declare interface OperationLogsCondition {
  /** 状态列表 */
  Status?: number[] | null;
}

/** Pod状态信息 */
declare interface PodStatus {
  /** 名称 */
  Name: string | null;
  /** 命名空间 */
  NameSpace: string | null;
  /** 状态 */
  Status: string | null;
  /** IP地址 */
  IP: string | null;
  /** 启动时间 */
  StartTime: string | null;
  /** 运行时间 */
  RunSec: number | null;
  /** 重启次数 */
  RestartCount: number | null;
}

/** 端口配置 */
declare interface PortConfig {
  /** 协议类型(tcp|udp) */
  Protocol: string;
  /** 源端口 */
  Port: number;
  /** 目标端口 */
  TargetPort: number;
  /** 节点端口 */
  NodePort: number;
}

/** 探针配置 */
declare interface Probe {
  /** 启动后，延迟探测时间 单位:秒 */
  InitialDelaySeconds?: number | null;
  /** 探测间隔，单位：秒 */
  PeriodSeconds?: number | null;
  /** 探测超时时间 单位：秒 */
  TimeoutSeconds?: number | null;
  /** 失败后检查成功的最小连续成功次数。默认为1.活跃度必须为1。最小值为1 */
  SuccessThreshold?: number | null;
  /** 当Pod成功启动且检查失败时，放弃之前尝试次数。默认为3.最小值为1 */
  FailureThreshold?: number | null;
  /** HTTP探测配置 */
  HttpProbe?: HttpProbe | null;
  /** TCP探测配置 */
  TcpProbe?: TcpProbe | null;
}

/** 资源目标指标 */
declare interface ResourceMetricTarget {
  /** 类型(cpu|memory) */
  Type: string;
  /** 平均值 */
  AverageValue: number;
  /** 单位 */
  Scale: string;
  /** 平均值 */
  AverageUtilization: number;
}

/** 消息路由 */
declare interface RouteInfo {
  /** 无 */
  RouteID: number;
  /** 无 */
  RouteName: string;
  /** 无 */
  SourceProductID: string;
  /** 无 */
  TopicFilter: string;
  /** 无 */
  Mode: string;
  /** 无 */
  TargetOptions: string;
  /** 无 */
  CreateTime: string;
  /** 无 */
  Descript: string;
  /** 无 */
  Healthy: string;
  /** 无 */
  Status: string;
  /** 无 */
  MessageCount: number;
  /** 无 */
  MessageLastTime: string;
  /** 无 */
  SourceProductName: string;
  /** 无 */
  SourceUnitIDList: string[];
  /** 无 */
  SourceUnitNameList: string[];
  /** 无 */
  SourceDeviceNameList: string[];
}

/** Secret信息 */
declare interface SecretItem {
  /** Secret名 */
  Name: string | null;
  /** 命名空间 */
  Namespace: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** Secret类型 */
  SecretType: string | null;
}

/** 安全能力 */
declare interface SecurityCapabilities {
  /** 允许操作列表 */
  Add?: string[] | null;
  /** 禁止操作列表 */
  Drop?: string[] | null;
}

/** 安全上下文 */
declare interface SecurityContext {
  /** 是否开启特权模式 */
  Privilege: boolean;
  /** 目录/Proc挂载方式 */
  ProcMount: string;
  /** 安全配置 */
  Capabilities?: SecurityCapabilities;
}

/** 服务配置 */
declare interface Service {
  /** 名称 */
  Name: string;
  /** 类型 (ClusterIP|NodePort) */
  Type: string;
  /** 端口配置 */
  Ports: PortConfig[];
  /** 标签 */
  Labels: Label[];
  /** 命名空间默认default */
  Namespace?: string;
  /** 服务IP */
  ClusterIP?: string;
}

/** 查询结果排序条件 */
declare interface Sort {
  /** 排序字段 */
  Field?: string;
  /** 排序方式，升序ASC / 降序DESC */
  Order?: string;
}

/** TCP探测配置 */
declare interface TcpProbe {
  /** 连接端口 */
  Port: number | null;
}

/** 卷 */
declare interface Volume {
  /** 来源(emptyDir|hostPath|configMap|secret|nfs) */
  Source: string;
  /** 名称 */
  Name: string;
  /** Host挂载配置 */
  HostPath?: VolumeHostPath | null;
  /** ConfigMap挂载配置 */
  ConfigMap?: VolumeConfigMap | null;
  /** Secret挂载配置 */
  Secret?: VolumeConfigMap | null;
  /** NFS挂载配置 */
  NFS?: VolumeNFS | null;
}

/** ConfigMap挂载卷 */
declare interface VolumeConfigMap {
  /** 名称 */
  Name: string;
  /** Key列表配置 */
  Items: VolumeConfigMapKeyToPath[];
}

/** ConfigMap的key挂载到路径 */
declare interface VolumeConfigMapKeyToPath {
  /** 健名 */
  Key: string;
  /** 对应本地路径 */
  Path: string;
  /** 对应权限模式 */
  Mode: string;
}

/** 数据卷主机路径，取值参考: https://kubernetes.io/docs/concepts/storage/volumes#hostpath */
declare interface VolumeHostPath {
  /** 类型 */
  Type: string;
  /** 路径 */
  Path: string;
}

/** 数据挂载 */
declare interface VolumeMount {
  /** 名称 */
  Name: string;
  /** 挂载路径 */
  MountPath: string;
  /** 子路径 */
  SubPath?: string | null;
  /** 是否只读 */
  ReadOnly?: boolean | null;
}

/** NFS挂载卷 */
declare interface VolumeNFS {
  /** 服务地址 */
  Server: string;
  /** 对应服务器路径 */
  ServerPath: string;
  /** 对应本地路径 */
  Path: string;
}

declare interface ApplyMarketComponentRequest {
  /** 组件ID */
  ID: number;
}

declare interface ApplyMarketComponentResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BuildMessageRouteRequest {
  /** 路由名字 */
  RouteName: string;
  /** 源产品id */
  SourceProductID: string;
  /** 源设备名列表 */
  SourceDeviceNameList: string[];
  /** 第一个字符为 "0"或"1"，"1"表示自定义topic */
  TopicFilter: string;
  /** http或mqtt-broker */
  Mode: string;
  /** 源单元id列表 */
  SourceUnitIDList?: string[];
  /** 描述 */
  Descript?: string;
  /** 无 */
  TargetOptions?: string;
}

declare interface BuildMessageRouteResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateApplicationVisualizationRequest {
  /** 基本信息 */
  BasicInfo: ApplicationBasicInfo;
  /** 基本配置 */
  BasicConfig: ApplicationBasicConfig;
  /** 卷列表 */
  Volumes?: Volume[];
  /** 服务配置 */
  Service?: Service;
  /** Job配置 */
  Job?: Job;
  /** CronJob配置 */
  CronJob?: CronJob;
  /** 重新运行策略 */
  RestartPolicy?: string;
  /** 镜像拉取密钥 */
  ImagePullSecrets?: string[];
  /** HPA配置 */
  HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
  /** 初始化容器列表 */
  InitContainers?: Container[];
  /** 容器列表 */
  Containers?: Container[];
}

declare interface CreateApplicationVisualizationResponse {
  /** 应用ID */
  ApplicationId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateConfigMapRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** ConfigMap名称 */
  ConfigMapName: string;
  /** ConfigMap内容 */
  ConfigMapData: KeyValueObj[];
  /** ConfigMap命名空间,默认：default */
  ConfigMapNamespace?: string;
}

declare interface CreateConfigMapResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEdgeNodeBatchRequest {
  /** 边缘单元ID */
  EdgeUnitId: number;
  /** 节点信息 */
  Nodes: DracoNodeInfo[];
}

declare interface CreateEdgeNodeBatchResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEdgeNodeGroupRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** NodeGroup名称 */
  Name: string;
  /** 命名空间，不填默认为default */
  Namespace?: string;
  /** 描述 */
  Description?: string;
  /** 模版ID数组 */
  NodeUnitTemplateIDs?: number[];
}

declare interface CreateEdgeNodeGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEdgeNodeRequest {
  /** 边缘单元ID */
  EdgeUnitId: number;
  /** 节点名称 */
  Name: string;
}

declare interface CreateEdgeNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEdgeNodeUnitTemplateRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** NodeUnit模板名称 */
  Name: string;
  /** 命名空间，默认default */
  Namespace?: string;
  /** 包含的节点列表 */
  Nodes?: string[];
  /** 描述 */
  Description?: string;
}

declare interface CreateEdgeNodeUnitTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEdgeUnitApplicationVisualizationRequest {
  /** 基本信息 */
  BasicInfo: ApplicationBasicInfo;
  /** 基本配置 */
  BasicConfig: ApplicationBasicConfig;
  /** 单元ID */
  EdgeUnitId: number;
  /** 卷列表 */
  Volumes?: Volume[];
  /** 服务配置 */
  Service?: Service;
  /** 模版ID */
  TemplateID?: number;
  /** Job配置 */
  Job?: Job;
  /** CronJob配置 */
  CronJob?: CronJob;
  /** 重新运行策略 */
  RestartPolicy?: string;
  /** 镜像拉取密钥 */
  ImagePullSecrets?: string[];
  /** HPA配置 */
  HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
  /** 初始化容器列表 */
  InitContainers?: Container[];
  /** 容器列表 */
  Containers?: Container[];
}

declare interface CreateEdgeUnitApplicationVisualizationResponse {
  /** 应用ID */
  ApplicationId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEdgeUnitApplicationYamlRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** base64后的Yaml配置 */
  Yaml: string;
  /** 基本信息 */
  BasicInfo?: ApplicationBasicInfo;
}

declare interface CreateEdgeUnitApplicationYamlResponse {
  /** 应用ID */
  ApplicationId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEdgeUnitCloudRequest {
  /** 集群名称，长度小于32 */
  Name: string;
  /** k8s版本，仅支持1.16.7 和 1.18.2 */
  K8sVersion: string;
  /** 私有网络ID */
  VpcId?: string;
  /** 集群描述 */
  Description?: string;
  /** 集群pod cidr， 默认 10.1.0.0/16 */
  PodCIDR?: string;
  /** 集群service cidr, 默认 10.2.0.0/16 */
  ServiceCIDR?: string;
  /** 是否开启监控。目前内存中权限开启联系产品开通白名单 */
  OpenCloudMonitor?: boolean;
}

declare interface CreateEdgeUnitCloudResponse {
  /** tke集群ID */
  ClusterId: string | null;
  /** IECP集群ID */
  EdgeUnitId: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateEdgeUnitDevicesRequest {
  /** 无 */
  EdgeUnitId: number;
  /** 无 */
  ProductId: string;
  /** 无 */
  DeviceNames: string[];
}

declare interface CreateEdgeUnitDevicesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateIotDeviceRequest {
  /** 设备名称 */
  DeviceName: string;
  /** 设备所属的产品id */
  ProductId: string;
  /** 描述 */
  Description?: string;
  /** 无 */
  UnitID?: number;
}

declare interface CreateIotDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateMessageRouteRequest {
  /** 路由名称 */
  RouteName: string;
  /** 路由备注 */
  Descript?: string;
}

declare interface CreateMessageRouteResponse {
  /** 路由id */
  RouteID: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNamespaceRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** 命名空间 */
  Namespace: string;
  /** 描述信息 */
  Description?: string;
}

declare interface CreateNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSecretRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** secret名 */
  SecretName: string;
  /** 命名空间（默认:default） */
  SecretNamespace?: string;
  /** secret类型(取值范围:DockerConfigJson,Opaque 默认Opaque) */
  SecretType?: string;
  /** DockerConfig的序列化base64编码后的字符串 */
  DockerConfigJson?: string;
  /** Opaque类型的Secret内容 */
  CloudData?: KeyValueObj[];
  /** DockerConfig配置 */
  DockerConfig?: DockerConfig;
}

declare interface CreateSecretResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUpdateNodeUnitRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** NodeUnit所属的NodeGroup名称 */
  NodeGroupName: string;
  /** 命名空间，默认为default */
  Namespace?: string;
  /** NodeUnit名称，通过模版创建可不填 */
  NodeUnitName?: string;
  /** NodeUnit包含的节点列表，通过模版创建可不填 */
  Nodes?: string[];
  /** NodeUnit模版ID列表 */
  NodeUnitTemplateIDs?: number[];
}

declare interface CreateUpdateNodeUnitResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateUserTokenRequest {
  /** token过期时间，有效值是1~300秒 */
  Second?: number;
}

declare interface CreateUserTokenResponse {
  /** 无 */
  Token: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteApplicationsRequest {
  /** 应用模板ID列表 */
  ApplicationIds: number[];
}

declare interface DeleteApplicationsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteConfigMapRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** ConfigMap名 */
  ConfigMapName: string;
  /** ConfigMap命名空间，默认：default */
  ConfigMapNamespace?: string;
}

declare interface DeleteConfigMapResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEdgeNodeGroupRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** NodeGroup名称 */
  Name: string;
  /** 命名空间，默认为default */
  Namespace?: string;
}

declare interface DeleteEdgeNodeGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEdgeNodeUnitTemplatesRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 删除的NodeUnit模板ID列表 */
  NodeUnitTemplateIDs: number[];
}

declare interface DeleteEdgeNodeUnitTemplatesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEdgeNodesRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** IECP边缘节点ID列表 */
  NodeIds: number[];
}

declare interface DeleteEdgeNodesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEdgeUnitApplicationsRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** 应用ID列表 */
  ApplicationIDs: number[];
}

declare interface DeleteEdgeUnitApplicationsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEdgeUnitCloudRequest {
  /** 边缘集群ID */
  EdgeUnitId: number;
}

declare interface DeleteEdgeUnitCloudResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEdgeUnitDeployGridItemRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 负载类型（StatefulSetGrid｜DeploymentGrid） */
  WorkloadKind: string;
  /** Grid部署名称 */
  GridItemName: string;
  /** 命名空间，默认default */
  Namespace?: string;
}

declare interface DeleteEdgeUnitDeployGridItemResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEdgeUnitDevicesRequest {
  /** 无 */
  EdgeUnitId: number;
  /** 无 */
  Devices: DeleteEdgeUnitDevicesDevice[];
}

declare interface DeleteEdgeUnitDevicesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteEdgeUnitPodRequest {
  /** 集群ID */
  ClusterID: string;
  /** Pod名称 */
  PodName: string;
  /** 命名空间 */
  Namespace: string;
}

declare interface DeleteEdgeUnitPodResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteIotDeviceBatchRequest {
  /** 无 */
  DeviceIDList: number[];
}

declare interface DeleteIotDeviceBatchResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteIotDeviceRequest {
  /** 设备id */
  DeviceId: number;
}

declare interface DeleteIotDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteMessageRouteRequest {
  /** 无 */
  RouteID: number;
}

declare interface DeleteMessageRouteResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNamespaceRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** 命名空间 */
  Namespace: string;
}

declare interface DeleteNamespaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNodeUnitRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** NodeUnit所属的NodeGroup名称 */
  NodeGroupName: string;
  /** NodeUnit名称 */
  NodeUnitName: string;
  /** 命名空间，默认为default */
  Namespace?: string;
  /** NodeUnit包含的节点列表 */
  Nodes?: string[];
}

declare interface DeleteNodeUnitResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSecretRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** secret名称 */
  SecretName: string;
  /** secret命名空间（默认:default） */
  SecretNamespace?: string;
}

declare interface DeleteSecretResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeApplicationVisualizationRequest {
  /** 应用模板ID */
  ApplicationId: number;
}

declare interface DescribeApplicationVisualizationResponse {
  /** 基本信息 */
  BasicInfo: ApplicationBasicInfo | null;
  /** 基本配置 */
  BasicConfig: ApplicationBasicConfig | null;
  /** 卷配置 */
  Volumes: Volume[] | null;
  /** 初始化容器配置 */
  InitContainers: Container[] | null;
  /** 容器配置 */
  Containers: Container[] | null;
  /** 服务配置 */
  Service: Service | null;
  /** Job配置 */
  Job: Job | null;
  /** CronJob配置 */
  CronJob: CronJob | null;
  /** 重启策略 */
  RestartPolicy: string | null;
  /** HPA */
  HorizontalPodAutoscaler: HorizontalPodAutoscaler | null;
  /** 镜像拉取Secret */
  ImagePullSecrets: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeApplicationYamlErrorRequest {
  /** Yaml配置 */
  Yaml: string;
}

declare interface DescribeApplicationYamlErrorResponse {
  /** 是否通过 */
  CheckPass: boolean | null;
  /** 错误类型 */
  ErrType: number | null;
  /** 错误信息 */
  ErrInfo: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeApplicationYamlRequest {
  /** 应用模板ID */
  ApplicationId: number;
}

declare interface DescribeApplicationYamlResponse {
  /** base64 后的yaml */
  Yaml: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeApplicationsRequest {
  /** 模糊搜索字符串 */
  NamePattern?: string;
  /** 默认 0 */
  Offset?: number;
  /** 默认 20 */
  Limit?: number;
  /** 仅支持对 DistributeTime 字段排序，ASC/DESC */
  Sort?: FieldSort[];
}

declare interface DescribeApplicationsResponse {
  /** 总条数 */
  TotalCount: number | null;
  /** 详细列表 */
  ApplicationSet: ApplicationTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeConfigMapRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** ConfigMap名称 */
  ConfigMapName: string;
  /** ConfigMap命名空间 */
  ConfigMapNamespace?: string;
}

declare interface DescribeConfigMapResponse {
  /** 名称 */
  Name: string | null;
  /** 命名空间 */
  Namespace: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** yaml配置 */
  Yaml: string | null;
  /** 配置项的json格式(base64编码) */
  Json: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeConfigMapYamlErrorRequest {
  /** yaml文件 */
  Yaml: string;
}

declare interface DescribeConfigMapYamlErrorResponse {
  /** 校验是通过 */
  CheckPass: boolean | null;
  /** 错误类型 */
  ErrType: number | null;
  /** 错误信息 */
  ErrInfo: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeConfigMapsRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** 翻页偏移量 */
  Offset: number;
  /** 每页大小(最大100) */
  Limit: number;
  /** 命名空间 */
  ConfigMapNamespace?: string;
  /** 模糊匹配的名称 */
  NamePattern?: string;
  /** Sort.Fileld填写CreateTime Sort.Order(ASC|DESC) 默认ASC */
  Sort?: FieldSort;
}

declare interface DescribeConfigMapsResponse {
  /** ConfigMap列表 */
  Items: ConfigMapBasicInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDracoEdgeNodeInstallerRequest {
  /** 设备SN */
  SN: string;
}

declare interface DescribeDracoEdgeNodeInstallerResponse {
  /** 在线安装命名 */
  OnlineInstallationCommand: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeAgentNodeInstallerRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** IECP边缘节点ID */
  NodeId: number;
}

declare interface DescribeEdgeAgentNodeInstallerResponse {
  /** 节点在线安装信息 */
  Online: EdgeNodeInstallerOnline | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeDefaultVpcRequest {
}

declare interface DescribeEdgeDefaultVpcResponse {
  /** 私有网络ID */
  VpcId: string | null;
  /** 网络CIDR */
  VpcCidrBlock: string | null;
  /** 子网ID */
  SubnetId: string | null;
  /** 子网CIDR */
  SubnetCidrBlock: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeNodePodContainersRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 节点ID */
  NodeId: number;
  /** Pod名称 */
  PodName: string;
  /** 命名空间 */
  Namespace?: string;
}

declare interface DescribeEdgeNodePodContainersResponse {
  /** Pod容器列表 */
  ContainerSet: EdgeNodePodContainerInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeNodePodsRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 节点ID */
  NodeId: number;
  /** 命名空间 */
  Namespace?: string;
  /** Pod名称过滤串 */
  PodNamePattern?: string;
}

declare interface DescribeEdgeNodePodsResponse {
  /** Pod列表 */
  PodSet: EdgeNodePodInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeNodeRemarkListRequest {
  /** 边缘单元ID */
  EdgeUnitId: number;
}

declare interface DescribeEdgeNodeRemarkListResponse {
  /** 边缘单元内的备注列表 */
  Remarks: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeNodeRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** IECP边缘节点ID */
  NodeId: number;
}

declare interface DescribeEdgeNodeResponse {
  /** 节点ID */
  Id: number | null;
  /** 节点类型 */
  Kind: string | null;
  /** 节点名称 */
  Name: string | null;
  /** 节点状态 （1健康｜2异常｜3离线｜4未激活） */
  Status: number | null;
  /** CPU体系结构 */
  CpuArchitecture: string | null;
  /** AI处理器体系结构 */
  AiChipArchitecture: string | null;
  /** IP地址 */
  Ip: string | null;
  /** 节点标签列表 */
  Labels: EdgeNodeLabel[];
  /** 节点资源信息 */
  Resource: EdgeNodeResourceInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeNodesRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 边缘节点名称模糊搜索串 */
  NamePattern?: string;
  /** 边缘节点名称列表，支持批量查询 ，优先于模糊查询 */
  NameMatchedList?: string[];
  /** 排序信息列表 */
  Sort?: Sort[];
  /** 偏移量 */
  Offset?: number;
  /** 页面大小Limit */
  Limit?: number;
  /** 节点类型 */
  NodeType?: number;
}

declare interface DescribeEdgeNodesResponse {
  /** 边缘节点数量 */
  TotalCount: number;
  /** 节点列表 */
  NodeSet: EdgeNodeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeOperationLogsRequest {
  /** 开始时间 */
  BeginTime: string;
  /** 结束时间 */
  EndTime: string;
  /** 偏移量 */
  Offset: number;
  /** 翻页大小 */
  Limit: number;
  /** 排序字段 */
  Sort?: FieldSort[];
  /** 模块 */
  Module?: string;
  /** 过滤条件 */
  Condition?: OperationLogsCondition;
}

declare interface DescribeEdgeOperationLogsResponse {
  /** 总数 */
  TotalCount: number | null;
  /** 操作日志列表 */
  OperationLogSet: OperationLog[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgePodRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 命名空间 */
  Namespace: string;
  /** Pod名称 */
  Name: string;
}

declare interface DescribeEdgePodResponse {
  /** Pod详情信息 */
  Pod: EdgeNodePodInfo | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeSnNodesRequest {
  /** 边缘单元ID */
  EdgeUnitId: number;
  /** 根据节点名称模糊匹配 */
  NamePattern?: string;
  /** 根据设备SN模糊匹配 */
  SNPattern?: string;
  /** 根据备注批次信息模糊匹配 */
  RemarkPattern?: string;
  /** 默认0 */
  Offset?: number;
  /** 默认20 */
  Limit?: number;
}

declare interface DescribeEdgeSnNodesResponse {
  /** 满足条件的总条数 */
  TotalCount: number | null;
  /** 节点详情 */
  NodeSet: EdgeDracoNodeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitApplicationEventsRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 应用ID */
  ApplicationId: number;
}

declare interface DescribeEdgeUnitApplicationEventsResponse {
  /** 事件列表 */
  EventSet: Event[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitApplicationLogsRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 应用ID */
  ApplicationId: number;
  /** 最大条数 */
  Limit: number;
  /** Pod名 */
  PodName: string;
  /** 容器名 */
  ContainerName?: string;
}

declare interface DescribeEdgeUnitApplicationLogsResponse {
  /** 日志列表 */
  LogSet: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitApplicationPodContainersRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 应用ID */
  ApplicationId: number;
  /** Pod名 */
  PodName: string;
}

declare interface DescribeEdgeUnitApplicationPodContainersResponse {
  /** 容器列表 */
  ContainerSet: ContainerStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitApplicationPodsRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 应用ID */
  ApplicationId: number;
}

declare interface DescribeEdgeUnitApplicationPodsResponse {
  /** Pod列表 */
  PodSet: PodStatus[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitApplicationVisualizationRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 应用ID */
  ApplicationId: number;
}

declare interface DescribeEdgeUnitApplicationVisualizationResponse {
  /** 基本信息 */
  BasicInfo: ApplicationBasicInfo | null;
  /** 基本配置 */
  BasicConfig: ApplicationBasicConfig | null;
  /** 卷配置 */
  Volumes: Volume[] | null;
  /** 初始化容器配置 */
  InitContainers: Container[] | null;
  /** 容器配置 */
  Containers: Container[] | null;
  /** 服务配置 */
  Service: Service | null;
  /** Job配置 */
  Job: Job | null;
  /** CronJob配置 */
  CronJob: CronJob | null;
  /** 重启策略 */
  RestartPolicy: string | null;
  /** HPA */
  HorizontalPodAutoscaler: HorizontalPodAutoscaler | null;
  /** 镜像拉取Secret */
  ImagePullSecrets: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitApplicationYamlErrorRequest {
  /** Yaml配置 */
  Yaml: string;
}

declare interface DescribeEdgeUnitApplicationYamlErrorResponse {
  /** 是否通过 */
  CheckPass: boolean | null;
  /** 错误类型 */
  ErrType: number | null;
  /** 错误信息 */
  ErrInfo: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitApplicationYamlRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 应用ID */
  ApplicationId: number;
}

declare interface DescribeEdgeUnitApplicationYamlResponse {
  /** Yaml配置 */
  Yaml: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitApplicationsRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 翻页偏移 */
  Offset: number;
  /** 翻页大小 */
  Limit: number;
  /** 名称模糊匹配 */
  NamePattern?: string;
  /** 字段排序 (Sort.Filed为:StartTime） */
  Sort?: FieldSort[];
  /** 命名空间过滤 */
  Namespace?: string;
}

declare interface DescribeEdgeUnitApplicationsResponse {
  /** 总数 */
  TotalCount: number | null;
  /** 应用列表 */
  ApplicationSet: ApplicationStatusInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitCloudRequest {
  /** 边缘集群ID */
  EdgeUnitId: number;
}

declare interface DescribeEdgeUnitCloudResponse {
  /** 边缘集群名称 */
  Name: string;
  /** 描述 */
  Description: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 更新时间 */
  UpdateTime: string | null;
  /** 集群最后探活时间 */
  LiveTime: string | null;
  /** 集群状态 */
  MasterStatus: string | null;
  /** 版本号 */
  K8sVersion: string | null;
  /** pod cidr */
  PodCIDR: string | null;
  /** service cidr */
  ServiceCIDR: string | null;
  /** 集群内网访问地址 */
  APIServerAddress: string | null;
  /** 集群外网访问地址 */
  APIServerExposeAddress: string | null;
  /** 用户ID */
  UID: string | null;
  /** 集群ID */
  UnitID: number | null;
  /** 集群标识 */
  Cluster: string | null;
  /** 节点统计 */
  Node: EdgeUnitStatisticItem | null;
  /** 工作负载统计 */
  Workload: EdgeUnitStatisticItem | null;
  /** Grid应用统计 */
  Grid: EdgeUnitStatisticItem | null;
  /** 设备统计 */
  SubDevice: EdgeUnitStatisticItem | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitDeployGridItemRequest {
  /** 边缘单元ID */
  EdgeUnitId: number;
  /** Grid名称 */
  GridName: string;
  /** 负载类型（StatefulSetGrid｜DeploymentGrid） */
  WorkloadKind: string;
  /** 命名空间，默认default */
  Namespace?: string;
  /** 排序，默认ASC */
  Order?: string;
}

declare interface DescribeEdgeUnitDeployGridItemResponse {
  /** 记录总数 */
  TotalCount: number;
  /** Grid部署列表 */
  DeploySet: GridItemInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitDeployGridItemYamlRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 负载类型（StatefulSetGrid｜DeploymentGrid） */
  WorkloadKind: string;
  /** Grid部署项名称 */
  GridItemName: string;
  /** 命名空间，默认default */
  Namespace?: string;
}

declare interface DescribeEdgeUnitDeployGridItemYamlResponse {
  /** yaml，base64编码字符串 */
  Yaml: string;
  /** 对应类型的副本数 */
  Replicas: number[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitDeployGridRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 命名空间，默认为default */
  Namespace?: string;
  /** 模糊匹配 */
  NamePattern?: string;
  /** 分页offset，默认为0 */
  Offset?: number;
  /** 分页limit，默认为20 */
  Limit?: number;
  /** 排序，默认为ASC */
  Order?: string;
}

declare interface DescribeEdgeUnitDeployGridResponse {
  /** 记录总数 */
  TotalCount: number;
  /** Grid列表 */
  GridSet: GridInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitExtraRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
}

declare interface DescribeEdgeUnitExtraResponse {
  /** APIServer类型 */
  APIServerType: string;
  /** 域名URL */
  APIServerURL: string;
  /** 域名URL对应的端口 */
  APIServerURLPort: string;
  /** 域名URL对应的端口 */
  APIServerResolveIP: string;
  /** 对外可访问的IP */
  APIServerExposeAddress: string;
  /** 是否开启监控 */
  IsCreatePrometheus: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitGridEventsRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** Grid名称 */
  GridName: string;
  /** 负载类型（StatefulSetGrid｜DeploymentGrid） */
  WorkloadKind: string;
  /** 命名空间，默认为default */
  Namespace?: string;
  /** NodeUnit名称 */
  NodeUnit?: string;
  /** Pod名称 */
  PodName?: string;
}

declare interface DescribeEdgeUnitGridEventsResponse {
  /** 事件列表 */
  EventSet: GridEventInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitGridPodsRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** Grid名称 */
  GridName: string;
  /** 负载类型（StatefulSetGrid｜DeploymentGrid） */
  WorkloadKind: string;
  /** NodeUnit名 */
  NodeUnit: string;
  /** 命名空间，默认default */
  Namespace?: string;
}

declare interface DescribeEdgeUnitGridPodsResponse {
  /** Pod列表 */
  PodSet: GridPodInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitMonitorStatusRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
}

declare interface DescribeEdgeUnitMonitorStatusResponse {
  /** 监控状态描述："running" 单元监控正常运行"deploying" 单元监控部署中"norsc" 单元需要可用节点以部署监控"abnormal" 单元监控异常"none" 单元监控不可用 */
  MonitorStatus: string;
  /** 监控是否就绪 */
  IsAvailable: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitNodeGroupRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 命名空间，默认为default */
  Namespace?: string;
  /** 分页offset，默认为0 */
  Offset?: number;
  /** 分页limit，默认为20 */
  Limit?: number;
  /** 模糊匹配参数，精确匹配时失效 */
  NameFilter?: string;
  /** 精确匹配参数 */
  NameMatched?: string;
  /** 按时间排序，ASC/DESC，默认为DESC */
  Order?: string;
}

declare interface DescribeEdgeUnitNodeGroupResponse {
  /** 记录总数 */
  Total: number;
  /** NodeGroup数组 */
  NodeGroupInfo: NodeGroupInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitNodeUnitTemplatesRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 命名空间，默认为default */
  Namespace?: string;
  /** 分页查询offset，默认为0 */
  Offset?: number;
  /** 分页查询limit，默认为20 */
  Limit?: number;
  /** 模糊匹配，精确匹配时失效 */
  NameFilter?: string;
  /** 精确匹配 */
  NameMatched?: string;
  /** 按时间排序顺序，默认为DESC */
  Order?: string;
}

declare interface DescribeEdgeUnitNodeUnitTemplatesResponse {
  /** 符合查询条件的记录总数 */
  Total: number;
  /** NodeUnit模板列表 */
  NodeUnitTemplates: NodeUnitTemplate[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeEdgeUnitsCloudRequest {
  /** 偏移量 */
  Offset: number;
  /** limit值 */
  Limit: number;
  /** 集群名称模糊匹配 */
  NamePattern?: string;
  /** 排序，ASC/DESC(默认) */
  Order?: string;
}

declare interface DescribeEdgeUnitsCloudResponse {
  /** 总条数 */
  TotalCount: number | null;
  /** 集群详情 */
  EdgeUnitSet: EdgeCloudCluster[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIotDeviceRequest {
  /** 设备id，传0值表示此参数无效 */
  DeviceId?: number;
  /** 无 */
  ProductID?: string;
  /** 无 */
  DeviceName?: string;
}

declare interface DescribeIotDeviceResponse {
  /** 设备id */
  Id: number;
  /** 设备名称 */
  Name: string;
  /** 版本号 */
  Version: string;
  /** ssl证书 */
  Cert: string;
  /** ssl私钥 */
  PrivateKey: string;
  /** psk认证密钥 */
  Psk: string;
  /** 设备是否打开 */
  Disabled: boolean;
  /** 设备日志 */
  LogSetting: number;
  /** 设备日志级别 */
  LogLevel: number;
  /** mqtt参数 */
  UserName: string;
  /** mqtt参数 */
  Password: string;
  /** mqtt参数 */
  ClientID: string;
  /** 16进制的psk格式 */
  PskHex: string;
  /** 描述 */
  Description: string;
  /** 设备在线状态 */
  Status: number;
  /** 无 */
  Region: string;
  /** 无 */
  UnitID: number;
  /** 无 */
  UnitName: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIotDevicesRequest {
  /** 页偏移 */
  Offset: number;
  /** 每页数量 */
  Limit: number;
  /** 产品id */
  ProductId?: string;
  /** 设备名称模糊查找 */
  NamePattern?: string;
  /** 版本列表 */
  Versions?: string[];
  /** ASC 或 DESC */
  Order?: string;
}

declare interface DescribeIotDevicesResponse {
  /** 符合查找条件的总数量 */
  TotalCount: number;
  /** 设备列表 */
  DeviceSet: IotDevicesInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMessageRouteListRequest {
  /** 无 */
  Limit: number;
  /** 无 */
  Offset: number;
  /** 无 */
  Filter?: string;
  /** 无 */
  StartTime?: string;
  /** 无 */
  EndTime?: string;
  /** 无 */
  Order?: string;
}

declare interface DescribeMessageRouteListResponse {
  /** 无 */
  RouteList: RouteInfo[];
  /** 无 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeMonitorMetricsRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** 查询维度 */
  QueryType: string;
  /** 起始时间Unix秒时间戳 */
  StartTime: number;
  /** 终止时间Unix秒时间戳 */
  EndTime: number;
  /** 步长（分钟） */
  Interval: number;
  /** 节点名称，查询节点监控时必填 */
  NodeName?: string;
  /** 命名空间，不填则默认为default */
  Namespace?: string;
  /** Pod名称，查询Pod监控时必填 */
  PodName?: string;
  /** Workload名称，查询Workload监控时必填 */
  WorkloadName?: string;
}

declare interface DescribeMonitorMetricsResponse {
  /** 查询监控指标结果 */
  Metrics: MonitorMetricsColumn[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNamespaceRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** 命名空间名 */
  Namespace: string;
}

declare interface DescribeNamespaceResourcesRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** 命名空间 */
  Namespace: string;
}

declare interface DescribeNamespaceResourcesResponse {
  /** 资源列表 */
  Resources: NamespaceResource[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNamespaceResponse {
  /** 命名空间名 */
  Namespace: string | null;
  /** 状态 (Active|Terminating) */
  Status: string | null;
  /** 描述信息 */
  Description: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** 是否保护-不允许删除 */
  Protected: boolean | null;
  /** Yaml文件格式 */
  Yaml: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNamespacesRequest {
  /** IECP边缘单元ID */
  EdgeUnitID: number;
  /** 边缘节点名称模糊搜索串 */
  NamePattern?: string;
}

declare interface DescribeNamespacesResponse {
  /** 命名空间信息列表 */
  Items: NamespaceInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNodeUnitRequest {
  /** 边缘单元ID */
  EdgeUnitId: number;
  /** NodeUnit所属的NodeGroup名称 */
  NodeGroupName: string;
  /** 命名空间，默认default */
  Namespace?: string;
  /** 分页查询limit，默认20 */
  Limit?: number;
  /** 分页查询offset，默认0 */
  Offset?: number;
  /** 模糊匹配 */
  NameFilter?: string;
}

declare interface DescribeNodeUnitResponse {
  /** 符合查询条件的记录总数 */
  TotalCount: number;
  /** NodeUnit信息数组 */
  NodeGridInfo: NodeUnitInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNodeUnitTemplateOnNodeGroupRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** NodeGroup名称 */
  NodeGroupName: string;
  /** 命名空间，默认default */
  Namespace?: string;
  /** 名称模糊匹配 */
  NodeUnitNamePattern?: string;
  /** 分页查询offset，默认0 */
  Offset?: number;
  /** 分页查询limit，默认20 */
  Limit?: number;
  /** 排序，默认DESC */
  Order?: string;
}

declare interface DescribeNodeUnitTemplateOnNodeGroupResponse {
  /** 记录总数 */
  Total: number;
  /** NodeUnit模板 */
  NodeUnitTemplates: NodeGroupNodeUnitTemplateInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecretRequest {
  /** 边缘单元ID */
  EdgeUnitID: number;
  /** secret名 */
  SecretName: string;
  /** 命名空间(默认值:default） */
  SecretNamespace?: string;
}

declare interface DescribeSecretResponse {
  /** Secret名 */
  Name: string | null;
  /** 命名空间 */
  Namespace: string | null;
  /** 创建时间 */
  CreateTime: string | null;
  /** secret的yaml格式 */
  Yaml: string | null;
  /** secret的json格式 */
  Json: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecretYamlErrorRequest {
  /** yaml文件 */
  Yaml: string;
}

declare interface DescribeSecretYamlErrorResponse {
  /** 校验是通过 */
  CheckPass: boolean | null;
  /** 错误类型 */
  ErrType: number | null;
  /** 错误信息 */
  ErrInfo: string | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecretsRequest {
  /** 边缘单元ID */
  EdgeUnitID: number;
  /** 页号 */
  Offset: number;
  /** 每页数目 */
  Limit: number;
  /** 命名空间 */
  SecretNamespace?: string;
  /** Secret名(模糊匹配) */
  NamePattern?: string;
  /** Sort.Field:CreateTime Sort.Order:ASC|DESC */
  Sort?: FieldSort;
  /** Secret类型(DockerConfigJson或Opaque) */
  SecretType?: string;
}

declare interface DescribeSecretsResponse {
  /** 总数目 */
  TotalCount: number | null;
  /** Secret列表 */
  Items: SecretItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeYeheResourceLimitRequest {
}

declare interface DescribeYeheResourceLimitResponse {
  /** 用户父账号 */
  Uin: string | null;
  /** 允许创建的节点数 */
  CreateNodeLimit: number | null;
  /** 允许创建的集群数 */
  CreateClusterLimit: number | null;
  /** 是否有监控开启权限 */
  EnablePermMonitor: boolean | null;
  /** 节点是否有admin的所有权限 */
  EnablePermAdminNode: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetMarketComponentListRequest {
  /** 页偏移，从0开始 */
  Offset: number;
  /** 每页条数 */
  Limit: number;
  /** 名称模糊筛选 */
  Filter?: string;
  /** 以名称排序，ASC、DESC */
  Order?: string;
}

declare interface GetMarketComponentListResponse {
  /** 组件列表 */
  ComponentList: MarketComponentInfo[];
  /** 组件总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetMarketComponentRequest {
  /** 组件ID */
  ID: number;
}

declare interface GetMarketComponentResponse {
  /** 组件ID */
  ID: number;
  /** 组件名称 */
  AppName: string;
  /** 发行组织 */
  Author: string;
  /** 发布时间 */
  ReleaseTime: string;
  /** 组件简介 */
  Outline: string;
  /** 详细介绍链接 */
  Detail: string;
  /** 图标连接 */
  Icon: string;
  /** 组件版本 */
  Version: string;
  /** 组件可视化配置 */
  WorkloadVisualConfig: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyApplicationBasicInfoRequest {
  /** 应用模板ID */
  ApplicationId: number;
  /** 应用模板基本信息 */
  BasicInfo: ApplicationBasicInfo;
}

declare interface ModifyApplicationBasicInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyApplicationVisualizationRequest {
  /** 应用ID */
  ApplicationId: number;
  /** 应用配置 */
  BasicConfig: ApplicationBasicConfig;
  /** 卷配置 */
  Volumes?: Volume[];
  /** 初始容器 */
  InitContainers?: Container[];
  /** 容器配置 */
  Containers?: Container[];
  /** 服务配置 */
  Service?: Service;
  /** Job配置 */
  Job?: Job;
  /** CronJob配置 */
  CronJob?: CronJob;
  /** 重启策略 */
  RestartPolicy?: string;
  /** 镜像拉取密钥 */
  ImagePullSecrets?: string[];
  /** HPA配置 */
  HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
  /** 单个初始化容器 */
  InitContainer?: Container;
}

declare interface ModifyApplicationVisualizationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyConfigMapRequest {
  /** 单元ID */
  EdgeUnitID: number;
  /** ConfigMap名称 */
  ConfigMapName: string;
  /** Yaml配置, base64之后的串 */
  Yaml: string;
  /** ConfigMap命名空间 */
  ConfigMapNamespace?: string;
}

declare interface ModifyConfigMapResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEdgeDracoNodeRequest {
  /** 边缘单元ID */
  EdgeUnitId: number;
  /** 边缘节点ID */
  NodeId: number;
  /** 节点信息 */
  NodeInfo?: DracoNodeInfo;
  /** 是否重置draco设备 */
  IsReset?: boolean;
}

declare interface ModifyEdgeDracoNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEdgeNodeLabelsRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** IECP边缘节点ID */
  NodeId: number;
  /** 标签列表 */
  Labels: KeyValueObj[];
}

declare interface ModifyEdgeNodeLabelsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEdgeUnitApplicationBasicInfoRequest {
  /** 应用基本信息 */
  BasicInfo: ApplicationBasicInfo;
  /** 单元ID */
  EdgeUnitId?: number;
  /** 应用ID */
  ApplicationId?: number;
}

declare interface ModifyEdgeUnitApplicationBasicInfoResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEdgeUnitApplicationVisualizationRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 应用ID */
  ApplicationId: number;
  /** 应用配置 */
  BasicConfig: ApplicationBasicConfig;
  /** 卷配置 */
  Volumes?: Volume[];
  /** 初始容器列表 */
  InitContainers?: Container[];
  /** 容器配置 */
  Containers?: Container[];
  /** 服务配置 */
  Service?: Service;
  /** Job配置 */
  Job?: Job;
  /** CronJob配置 */
  CronJob?: CronJob;
  /** 重启策略 */
  RestartPolicy?: string;
  /** 镜像拉取密钥 */
  ImagePullSecrets?: string[];
  /** HPA配置 */
  HorizontalPodAutoscaler?: HorizontalPodAutoscaler;
}

declare interface ModifyEdgeUnitApplicationVisualizationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEdgeUnitApplicationYamlRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 应用ID */
  ApplicationId: number;
  /** Yaml配置 */
  Yaml: string;
}

declare interface ModifyEdgeUnitApplicationYamlResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEdgeUnitCloudApiRequest {
  /** 边缘单元ID */
  EdgeUnitId: number;
  /** 边缘单元名称，64字符内 */
  Name?: string;
  /** 描述，200字符内 */
  Description?: string;
  /** 是否开启监控 */
  OpenCloudMonitor?: boolean;
}

declare interface ModifyEdgeUnitCloudApiResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEdgeUnitDeployGridItemRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** Grid名称 */
  GridItemName: string;
  /** 负载类型（StatefulSetGrid｜DeploymentGrid） */
  WorkloadKind: string;
  /** 副本数 */
  Replicas: number;
  /** 命名空间，默认default */
  Namespace?: string;
}

declare interface ModifyEdgeUnitDeployGridItemResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyEdgeUnitRequest {
  /** 边缘集群ID */
  EdgeUnitId: number;
  /** 边缘集群名称，64字符以内 */
  Name: string;
  /** 集群描述，200字符以内 */
  Description?: string;
}

declare interface ModifyEdgeUnitResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyIotDeviceRequest {
  /** 设备id */
  DeviceId: number;
  /** 描述 */
  Description?: string;
  /** 设备是否开启 */
  Disabled?: boolean;
  /** 日志设置 */
  LogSetting?: number;
  /** 日志级别 */
  LogLevel?: number;
}

declare interface ModifyIotDeviceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNodeUnitTemplateRequest {
  /** IECP边缘单元ID */
  EdgeUnitId: number;
  /** NodeUnit模板ID */
  NodeUnitTemplateID: number;
  /** 包含的节点列表 */
  Nodes?: string[];
}

declare interface ModifyNodeUnitTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecretRequest {
  /** 边缘单元ID */
  EdgeUnitID: number;
  /** Secret名 */
  SecretName: string;
  /** Secret的Yaml格式 */
  Yaml: string;
  /** Secret命名空间（默认:default） */
  SecretNamespace?: string;
}

declare interface ModifySecretResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RedeployEdgeUnitApplicationRequest {
  /** 单元ID */
  EdgeUnitId: number;
  /** 应用ID */
  ApplicationId: number;
}

declare interface RedeployEdgeUnitApplicationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetRouteOnOffRequest {
  /** 无 */
  RouteID: number;
  /** on 或 off */
  Status: string;
}

declare interface SetRouteOnOffResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [物联网边缘计算平台](https://cloud.tencent.com/document/product/1118) */
declare interface Iecp {
  (): Versions;
  /** 使用组件市场中的组件 */
  ApplyMarketComponent(data: ApplyMarketComponentRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyMarketComponentResponse>;
  /** 建立消息路由 */
  BuildMessageRoute(data: BuildMessageRouteRequest, config?: AxiosRequestConfig): AxiosPromise<BuildMessageRouteResponse>;
  /** 创建可视化创建应用模板 */
  CreateApplicationVisualization(data: CreateApplicationVisualizationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateApplicationVisualizationResponse>;
  /** 创建ConfigMap */
  CreateConfigMap(data: CreateConfigMapRequest, config?: AxiosRequestConfig): AxiosPromise<CreateConfigMapResponse>;
  /** 创建边缘节点 */
  CreateEdgeNode(data: CreateEdgeNodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeNodeResponse>;
  /** 批量预注册节点 */
  CreateEdgeNodeBatch(data: CreateEdgeNodeBatchRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeNodeBatchResponse>;
  /** 创建边缘单元NodeGroup */
  CreateEdgeNodeGroup(data: CreateEdgeNodeGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeNodeGroupResponse>;
  /** 创建边缘单元NodeUnit模板 */
  CreateEdgeNodeUnitTemplate(data: CreateEdgeNodeUnitTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeNodeUnitTemplateResponse>;
  /** 可视化创建应用 */
  CreateEdgeUnitApplicationVisualization(data: CreateEdgeUnitApplicationVisualizationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeUnitApplicationVisualizationResponse>;
  /** yaml方式创建应用 */
  CreateEdgeUnitApplicationYaml(data: CreateEdgeUnitApplicationYamlRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeUnitApplicationYamlResponse>;
  /** 创建边缘单元 */
  CreateEdgeUnitCloud(data: CreateEdgeUnitCloudRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeUnitCloudResponse>;
  /** 批量绑定设备到单元 */
  CreateEdgeUnitDevices(data: CreateEdgeUnitDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeUnitDevicesResponse>;
  /** 创建子设备 */
  CreateIotDevice(data: CreateIotDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIotDeviceResponse>;
  /** 创建消息路由 */
  CreateMessageRoute(data: CreateMessageRouteRequest, config?: AxiosRequestConfig): AxiosPromise<CreateMessageRouteResponse>;
  /** 创建命名空间 */
  CreateNamespace(data: CreateNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNamespaceResponse>;
  /** 创建Secret */
  CreateSecret(data: CreateSecretRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecretResponse>;
  /** 创建或更新边缘单元NodeUnit */
  CreateUpdateNodeUnit(data: CreateUpdateNodeUnitRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUpdateNodeUnitResponse>;
  /** 创建token */
  CreateUserToken(data: CreateUserTokenRequest, config?: AxiosRequestConfig): AxiosPromise<CreateUserTokenResponse>;
  /** 删除应用模板 */
  DeleteApplications(data: DeleteApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteApplicationsResponse>;
  /** 删除ConfigMap */
  DeleteConfigMap(data: DeleteConfigMapRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteConfigMapResponse>;
  /** 删除边缘单元NodeGroup */
  DeleteEdgeNodeGroup(data: DeleteEdgeNodeGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeNodeGroupResponse>;
  /** 删除边缘单元NodeUnit模板 */
  DeleteEdgeNodeUnitTemplates(data: DeleteEdgeNodeUnitTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeNodeUnitTemplatesResponse>;
  /** 批量删除边缘节点 */
  DeleteEdgeNodes(data: DeleteEdgeNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeNodesResponse>;
  /** 删除应用列表 */
  DeleteEdgeUnitApplications(data: DeleteEdgeUnitApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeUnitApplicationsResponse>;
  /** 删除边缘单元 */
  DeleteEdgeUnitCloud(data: DeleteEdgeUnitCloudRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeUnitCloudResponse>;
  /** 重新部署边缘单元指定Grid下应用 */
  DeleteEdgeUnitDeployGridItem(data: DeleteEdgeUnitDeployGridItemRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeUnitDeployGridItemResponse>;
  /** 批量解绑单元设备 */
  DeleteEdgeUnitDevices(data: DeleteEdgeUnitDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeUnitDevicesResponse>;
  /** 删除指定pod */
  DeleteEdgeUnitPod(data: DeleteEdgeUnitPodRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeUnitPodResponse>;
  /** 删除设备 */
  DeleteIotDevice(data: DeleteIotDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIotDeviceResponse>;
  /** 批量删除设备 */
  DeleteIotDeviceBatch(data: DeleteIotDeviceBatchRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIotDeviceBatchResponse>;
  /** 删除消息路由 */
  DeleteMessageRoute(data: DeleteMessageRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteMessageRouteResponse>;
  /** 删除命名空间 */
  DeleteNamespace(data: DeleteNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNamespaceResponse>;
  /** 删除边缘单元NodeUnit */
  DeleteNodeUnit(data: DeleteNodeUnitRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNodeUnitResponse>;
  /** 删除Secret */
  DeleteSecret(data: DeleteSecretRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecretResponse>;
  /** 获取应用模板可视化配置信息 */
  DescribeApplicationVisualization(data: DescribeApplicationVisualizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationVisualizationResponse>;
  /** 查询应用模板Yaml */
  DescribeApplicationYaml(data: DescribeApplicationYamlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationYamlResponse>;
  /** 检查应用模板的Yaml配置 */
  DescribeApplicationYamlError(data: DescribeApplicationYamlErrorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationYamlErrorResponse>;
  /** 获取应用模板列表 */
  DescribeApplications(data: DescribeApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeApplicationsResponse>;
  /** 获取ConfigMap详情 */
  DescribeConfigMap(data: DescribeConfigMapRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigMapResponse>;
  /** 校验ConfigMap的Yaml语法 */
  DescribeConfigMapYamlError(data: DescribeConfigMapYamlErrorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigMapYamlErrorResponse>;
  /** 获取ConfigMap列表 */
  DescribeConfigMaps(data: DescribeConfigMapsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigMapsResponse>;
  /** 自动获取Draco设备的安装包 */
  DescribeDracoEdgeNodeInstaller(data: DescribeDracoEdgeNodeInstallerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDracoEdgeNodeInstallerResponse>;
  /** 获取节点安装信息 */
  DescribeEdgeAgentNodeInstaller(data: DescribeEdgeAgentNodeInstallerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeAgentNodeInstallerResponse>;
  /** 获取边缘集群默认VPC信息 */
  DescribeEdgeDefaultVpc(data?: DescribeEdgeDefaultVpcRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeDefaultVpcResponse>;
  /** 获取边缘节点信息 */
  DescribeEdgeNode(data: DescribeEdgeNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeNodeResponse>;
  /** 查询节点Pod内的容器列表 */
  DescribeEdgeNodePodContainers(data: DescribeEdgeNodePodContainersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeNodePodContainersResponse>;
  /** 查询节点Pod列表 */
  DescribeEdgeNodePods(data: DescribeEdgeNodePodsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeNodePodsResponse>;
  /** 获取节点备注信息列表 */
  DescribeEdgeNodeRemarkList(data: DescribeEdgeNodeRemarkListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeNodeRemarkListResponse>;
  /** 查询边缘节点列表 */
  DescribeEdgeNodes(data: DescribeEdgeNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeNodesResponse>;
  /** 查询边缘操作日志 */
  DescribeEdgeOperationLogs(data: DescribeEdgeOperationLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeOperationLogsResponse>;
  /** 查询边缘单元Pod */
  DescribeEdgePod(data: DescribeEdgePodRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgePodResponse>;
  /** 查询预注册节点列表 */
  DescribeEdgeSnNodes(data: DescribeEdgeSnNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeSnNodesResponse>;
  /** 获取应用事件列表 */
  DescribeEdgeUnitApplicationEvents(data: DescribeEdgeUnitApplicationEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitApplicationEventsResponse>;
  /** 获取应用日志 */
  DescribeEdgeUnitApplicationLogs(data: DescribeEdgeUnitApplicationLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitApplicationLogsResponse>;
  /** 获取应用容器状态 */
  DescribeEdgeUnitApplicationPodContainers(data: DescribeEdgeUnitApplicationPodContainersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitApplicationPodContainersResponse>;
  /** 获取应用下Pod状态 */
  DescribeEdgeUnitApplicationPods(data: DescribeEdgeUnitApplicationPodsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitApplicationPodsResponse>;
  /** 获取单元可视化配置信息 */
  DescribeEdgeUnitApplicationVisualization(data: DescribeEdgeUnitApplicationVisualizationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitApplicationVisualizationResponse>;
  /** 获取应用的Yaml配置 */
  DescribeEdgeUnitApplicationYaml(data: DescribeEdgeUnitApplicationYamlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitApplicationYamlResponse>;
  /** 检查单元应用的Yaml配置 */
  DescribeEdgeUnitApplicationYamlError(data: DescribeEdgeUnitApplicationYamlErrorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitApplicationYamlErrorResponse>;
  /** 获取单元下应用列表 */
  DescribeEdgeUnitApplications(data: DescribeEdgeUnitApplicationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitApplicationsResponse>;
  /** 查询边缘集群详情 */
  DescribeEdgeUnitCloud(data: DescribeEdgeUnitCloudRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitCloudResponse>;
  /** 查询边缘单元Grid列表 */
  DescribeEdgeUnitDeployGrid(data: DescribeEdgeUnitDeployGridRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitDeployGridResponse>;
  /** 查询边缘单元指定Grid下的部署应用列表 */
  DescribeEdgeUnitDeployGridItem(data: DescribeEdgeUnitDeployGridItemRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitDeployGridItemResponse>;
  /** 查询指定Grid下应用的Yaml */
  DescribeEdgeUnitDeployGridItemYaml(data: DescribeEdgeUnitDeployGridItemYamlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitDeployGridItemYamlResponse>;
  /** 查询边缘单元额外信息 */
  DescribeEdgeUnitExtra(data: DescribeEdgeUnitExtraRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitExtraResponse>;
  /** 查询边缘单元Grid事件列表 */
  DescribeEdgeUnitGridEvents(data: DescribeEdgeUnitGridEventsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitGridEventsResponse>;
  /** 查询边缘单元Grid的Pod列表 */
  DescribeEdgeUnitGridPods(data: DescribeEdgeUnitGridPodsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitGridPodsResponse>;
  /** 查询边缘集群监控状态 */
  DescribeEdgeUnitMonitorStatus(data: DescribeEdgeUnitMonitorStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitMonitorStatusResponse>;
  /** 查询边缘单元NodeGroup列表 */
  DescribeEdgeUnitNodeGroup(data: DescribeEdgeUnitNodeGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitNodeGroupResponse>;
  /** 查询边缘单元EdgeUnit模板列表 */
  DescribeEdgeUnitNodeUnitTemplates(data: DescribeEdgeUnitNodeUnitTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitNodeUnitTemplatesResponse>;
  /** 查询边缘单元列表 */
  DescribeEdgeUnitsCloud(data: DescribeEdgeUnitsCloudRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeUnitsCloudResponse>;
  /** 获取设备信息 */
  DescribeIotDevice(data: DescribeIotDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIotDeviceResponse>;
  /** 获取设备列表信息 */
  DescribeIotDevices(data: DescribeIotDevicesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIotDevicesResponse>;
  /** 获取消息路由列表 */
  DescribeMessageRouteList(data: DescribeMessageRouteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMessageRouteListResponse>;
  /** 查询边缘单元监控数据 */
  DescribeMonitorMetrics(data: DescribeMonitorMetricsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonitorMetricsResponse>;
  /** 获取命名空间 */
  DescribeNamespace(data: DescribeNamespaceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNamespaceResponse>;
  /** 获取命名空间下的资源信息 */
  DescribeNamespaceResources(data: DescribeNamespaceResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNamespaceResourcesResponse>;
  /** 获取命名空间列表信息 */
  DescribeNamespaces(data: DescribeNamespacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNamespacesResponse>;
  /** 查询边缘单元NodeUnit列表 */
  DescribeNodeUnit(data: DescribeNodeUnitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodeUnitResponse>;
  /** 查询指定NodeGroup下NodeUnit模板列表 */
  DescribeNodeUnitTemplateOnNodeGroup(data: DescribeNodeUnitTemplateOnNodeGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodeUnitTemplateOnNodeGroupResponse>;
  /** 获取Secret详情 */
  DescribeSecret(data: DescribeSecretRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecretResponse>;
  /** 校验Secret的Yaml语法 */
  DescribeSecretYamlError(data: DescribeSecretYamlErrorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecretYamlErrorResponse>;
  /** 获取Secrets列表 */
  DescribeSecrets(data: DescribeSecretsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecretsResponse>;
  /** 查询用户的资源限制 */
  DescribeYeheResourceLimit(data?: DescribeYeheResourceLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeYeheResourceLimitResponse>;
  /** 获取组件市场的组件信息 */
  GetMarketComponent(data: GetMarketComponentRequest, config?: AxiosRequestConfig): AxiosPromise<GetMarketComponentResponse>;
  /** 获取组件市场组件列表 */
  GetMarketComponentList(data: GetMarketComponentListRequest, config?: AxiosRequestConfig): AxiosPromise<GetMarketComponentListResponse>;
  /** 修改应用模板基本信息 */
  ModifyApplicationBasicInfo(data: ModifyApplicationBasicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationBasicInfoResponse>;
  /** 修改应用模板配置 */
  ModifyApplicationVisualization(data: ModifyApplicationVisualizationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyApplicationVisualizationResponse>;
  /** 修改ConfigMap */
  ModifyConfigMap(data: ModifyConfigMapRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyConfigMapResponse>;
  /** 编辑draco设备信息 */
  ModifyEdgeDracoNode(data: ModifyEdgeDracoNodeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeDracoNodeResponse>;
  /** 编辑边缘节点标签 */
  ModifyEdgeNodeLabels(data: ModifyEdgeNodeLabelsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeNodeLabelsResponse>;
  /** 修改边缘集群 */
  ModifyEdgeUnit(data: ModifyEdgeUnitRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeUnitResponse>;
  /** 修改单元应用基本信息 */
  ModifyEdgeUnitApplicationBasicInfo(data: ModifyEdgeUnitApplicationBasicInfoRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeUnitApplicationBasicInfoResponse>;
  /** 可视化修改应用配置 */
  ModifyEdgeUnitApplicationVisualization(data: ModifyEdgeUnitApplicationVisualizationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeUnitApplicationVisualizationResponse>;
  /** Yaml方式修改应用配置 */
  ModifyEdgeUnitApplicationYaml(data: ModifyEdgeUnitApplicationYamlRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeUnitApplicationYamlResponse>;
  /** 更新边缘单元信息 */
  ModifyEdgeUnitCloudApi(data: ModifyEdgeUnitCloudApiRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeUnitCloudApiResponse>;
  /** 修改边缘单元Grid部署应用副本数 */
  ModifyEdgeUnitDeployGridItem(data: ModifyEdgeUnitDeployGridItemRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyEdgeUnitDeployGridItemResponse>;
  /** 修改设备信息 */
  ModifyIotDevice(data: ModifyIotDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIotDeviceResponse>;
  /** 修改边缘单元NodeUnit模板 */
  ModifyNodeUnitTemplate(data: ModifyNodeUnitTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNodeUnitTemplateResponse>;
  /** 修改Secret */
  ModifySecret(data: ModifySecretRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecretResponse>;
  /** 单元应用重部署 */
  RedeployEdgeUnitApplication(data: RedeployEdgeUnitApplicationRequest, config?: AxiosRequestConfig): AxiosPromise<RedeployEdgeUnitApplicationResponse>;
  /** 开关消息路由 */
  SetRouteOnOff(data: SetRouteOnOffRequest, config?: AxiosRequestConfig): AxiosPromise<SetRouteOnOffResponse>;
}

export declare type Versions = ["2021-09-14"];

export default Iecp;
