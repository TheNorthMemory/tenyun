/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** k8s中标注，一般以数组的方式存在 */
declare interface Annotation {
  /** map表中的Name */
  Name: string;
  /** map表中的Value */
  Value: string;
}

/** 托管节点池运维窗口设置 */
declare interface AutoUpgradeOptions {
  /** 自动升级开始时间 */
  AutoUpgradeStartTime?: string | null;
  /** 自动升级持续时间 */
  Duration?: string | null;
  /** 运维日期 */
  WeeklyPeriod?: string[] | null;
}

/** 自动扩缩容的节点 */
declare interface AutoscalingAdded {
  /** 正在加入中的节点数量 */
  Joining?: number;
  /** 初始化中的节点数量 */
  Initializing?: number;
  /** 正常的节点数量 */
  Normal?: number;
  /** 节点总数 */
  Total?: number;
}

/** 原生节点池创建参数 */
declare interface CreateNativeNodePoolParam {
  /** 节点池伸缩配置 */
  Scaling: MachineSetScaling;
  /** 子网列表 */
  SubnetIds: string[];
  /** 节点计费类型。PREPAID：包年包月；POSTPAID_BY_HOUR：按量计费（默认）； */
  InstanceChargeType: string;
  /** 系统盘配置 */
  SystemDisk: Disk;
  /** 机型列表 */
  InstanceTypes: string[];
  /** 安全组列表 */
  SecurityGroupIds?: string[];
  /** 自动升级配置 */
  UpgradeSettings?: MachineUpgradeSettings;
  /** 是否开启自愈能力 */
  AutoRepair?: boolean;
  /** 包年包月机型计费配置 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 节点池 Management 参数设置 */
  Management?: ManagementConfig;
  /** 故障自愈规则名称 */
  HealthCheckPolicyName?: string;
  /** 原生节点池hostName模式串 */
  HostNamePattern?: string;
  /** kubelet 自定义参数 */
  KubeletArgs?: string[];
  /** 预定义脚本 */
  Lifecycle?: LifecycleConfig;
  /** 运行时根目录 */
  RuntimeRootDir?: string;
  /** 是否开启弹性伸缩 */
  EnableAutoscaling?: boolean;
  /** 期望节点数 */
  Replicas?: number;
  /** 公网带宽设置 */
  InternetAccessible?: InternetAccessible;
  /** 原生节点池数据盘列表 */
  DataDisks?: DataDisk[];
  /** qgpu开关 */
  QGPUEnable?: boolean;
  /** 节点池ssh公钥id数组 */
  KeyIds?: string[];
  /** 节点池类型 */
  MachineType?: string;
  /** 原生节点池安装节点自动化助手开关 */
  AutomationService?: boolean;
}

/** 描述了k8s节点数据盘相关配置与信息。 */
declare interface DataDisk {
  /** 云盘类型 */
  DiskType: string | null;
  /** 文件系统(ext3/ext4/xfs) */
  FileSystem: string | null;
  /** 云盘大小(G） */
  DiskSize: number | null;
  /** 是否自动化格式盘并挂载 */
  AutoFormatAndMount: boolean | null;
  /** 挂载设备名或分区名 */
  DiskPartition: string | null;
  /** 挂载目录 */
  MountTarget?: string | null;
  /** 传入该参数用于创建加密云盘，取值固定为ENCRYPT */
  Encrypt?: string | null;
  /** 购买加密盘时自定义密钥，当传入该参数时, Encrypt入参不为空 */
  KmsKeyId?: string | null;
  /** 快照ID，如果传入则根据此快照创建云硬盘，快照类型必须为数据盘快照 */
  SnapshotId?: string | null;
  /** 云硬盘性能，单位：MB/s。使用此参数可给云硬盘购买额外的性能 */
  ThroughputPerformance?: number | null;
}

/** 节点系统盘和数据盘配置 */
declare interface Disk {
  /** 云盘类型 */
  DiskType: string;
  /** 云盘大小(G） */
  DiskSize: number;
  /** 是否自动化格式盘并挂载 */
  AutoFormatAndMount?: boolean;
  /** 文件系统 */
  FileSystem?: string;
  /** 挂载目录 */
  MountTarget?: string;
  /** 云盘ID */
  DiskId?: string | null;
}

/** 第三方节点 */
declare interface ExternalNodeInfo {
  /** 第三方节点名称 */
  Name?: string;
  /** CPU核数，单位：核 */
  CPU?: number | null;
  /** 节点内存容量，单位：`GB` */
  Memory?: number | null;
  /** 第三方节点kubelet版本信息 */
  K8SVersion?: string | null;
}

/** 第三方节点池信息 */
declare interface ExternalNodePoolInfo {
  /** 第三方节点Runtime配置 */
  RuntimeConfig?: RuntimeConfig;
  /** 节点数 */
  NodesNum?: number;
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** 机型名称与GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本，是否开启MIG以及是否开启Fabric等相关配置信息 */
declare interface GPUConfig {
  /** 机型名称 */
  InstanceType: string | null;
  /** GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本，是否开启MIG以及是否开启Fabric等 */
  GPUParams: GPUParams | null;
}

/** GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本，是否开启MIG以及是否开启Fabric */
declare interface GPUParams {
  /** GPU驱动版本 */
  Driver?: string | null;
  /** CUDA版本 */
  CUDA?: string | null;
  /** CUDNN版本 */
  CUDNN?: string | null;
  /** 是否启用MIG特性 */
  MIGEnable?: boolean | null;
  /** 是否启用Fabric特性 */
  Fabric?: boolean | null;
  /** 自定义驱动下载地址 */
  CustomGPUDriver?: string | null;
}

/** 健康检测规则 */
declare interface HealthCheckPolicy {
  /** 健康检测策略名称 */
  Name: string;
  /** 健康检测策略规则列表 */
  Rules: HealthCheckPolicyRule[];
}

/** 健康检测策略和节点池的绑定关系 */
declare interface HealthCheckPolicyBinding {
  /** 健康检测策略名称 */
  Name?: string;
  /** 规则创建时间 */
  CreatedAt?: string;
  /** 关联节点池数组 */
  NodePools?: string[];
}

/** 健康检测规则 */
declare interface HealthCheckPolicyRule {
  /** 健康检测规则 */
  Name: string;
  /** 是否检测此项目 */
  Enabled: boolean;
  /** 是否启用修复 */
  AutoRepairEnabled: boolean;
}

/** 健康检测模板 */
declare interface HealthCheckTemplate {
  /** 健康检测项 */
  Rules: HealthCheckTemplateRule[];
}

/** 健康检测模板规则 */
declare interface HealthCheckTemplateRule {
  /** 健康检测项目名称 */
  Name: string;
  /** 健康检测规则描述 */
  Description: string;
  /** 修复动作 */
  RepairAction: string;
  /** 修复影响 */
  RepairEffect: string;
  /** 是否建议开启检测 */
  ShouldEnable: boolean;
  /** 是否建议修复 */
  ShouldRepair: boolean;
  /** 问题严重程度 */
  Severity: string;
}

/** 集群的实例信息 */
declare interface Instance {
  /** 实例ID */
  InstanceId?: string;
  /** 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER */
  InstanceRole?: string;
  /** 实例异常(或者处于初始化中)的原因 */
  FailedReason?: string | null;
  /** 实例的状态- initializing创建中- running 运行中- failed 异常 */
  InstanceState?: string;
  /** 是否不可调度 */
  Unschedulable?: boolean | null;
  /** 添加时间 */
  CreatedTime?: string;
  /** 节点内网IP */
  LanIP?: string | null;
  /** 资源池ID */
  NodePoolId?: string | null;
  /** 原生节点参数 */
  Native?: NativeNodeInfo | null;
  /** 普通节点参数 */
  Regular?: RegularNodeInfo | null;
  /** 超级节点参数 */
  Super?: SuperNodeInfo | null;
  /** 第三方节点参数 */
  External?: ExternalNodeInfo | null;
  /** 节点类型 */
  NodeType?: string | null;
}

/** 描述了k8s集群相关配置与信息。 */
declare interface InstanceAdvancedSettings {
  /** 该节点属于podCIDR大小自定义模式时，可指定节点上运行的pod数量上限 */
  DesiredPodNumber: number | null;
  /** base64 编码的用户脚本，在初始化节点之前执行，目前只对添加已有节点生效 */
  PreStartUserScript: string | null;
  /** 运行时描述 */
  RuntimeConfig?: RuntimeConfig | null;
  /** base64 编码的用户脚本, 此脚本会在 k8s 组件运行后执行, 需要用户保证脚本的可重入及重试逻辑, 脚本及其生成的日志文件可在节点的 /data/ccs_userscript/ 路径查看, 如果要求节点需要在进行初始化完成后才可加入调度, 可配合 unschedulable 参数使用, 在 userScript 最后初始化完成后, 添加 kubectl uncordon nodename --kubeconfig=/root/.kube/config 命令使节点加入调度 */
  UserScript?: string | null;
  /** 节点相关的自定义参数信息 */
  ExtraArgs?: InstanceExtraArgs | null;
}

/** 包年包月配置 */
declare interface InstanceChargePrepaid {
  /** 后付费计费周期，单位（月）：1，2，3，4，5，6，7， 8，9，10，11，12，24，36，48，60 */
  Period?: number;
  /** 预付费续费方式：- NOTIFY_AND_AUTO_RENEW：通知用户过期，且自动续费 - NOTIFY_AND_MANUAL_RENEW：通知用户过期，但不自动续费(默认)- DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知用户过期，也不自动续费 */
  RenewFlag?: string;
}

/** 节点自定义参数 */
declare interface InstanceExtraArgs {
  /** kubelet自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"] */
  Kubelet?: string[] | null;
}

/** 数值结构 */
declare interface IntOrString {
  /** 数值类型，0是int, 1是字符串 */
  Type: number | null;
  /** 整数 */
  IntVal?: number | null;
  /** 字符串 */
  StrVal?: string | null;
}

/** 公网带宽 */
declare interface InternetAccessible {
  /** 带宽 */
  MaxBandwidthOut: number;
  /** 网络计费方式 */
  ChargeType: string;
  /** 带宽包 ID */
  BandwidthPackageId?: string;
}

/** k8s中标签，一般以数组的方式存在 */
declare interface Label {
  /** map表中的Name */
  Name: string;
  /** map表中的Value */
  Value: string;
}

/** 节点池自定义脚本 */
declare interface LifecycleConfig {
  /** 节点初始化前自定义脚本 */
  PreInit?: string | null;
  /** 节点初始化后自定义脚本 */
  PostInit?: string | null;
}

/** 节点池弹性伸缩配置 */
declare interface MachineSetScaling {
  /** 节点池最小副本数 */
  MinReplicas?: number;
  /** 节点池最大副本数 */
  MaxReplicas?: number;
  /** 节点池扩容策略。ZoneEquality：多可用区打散；ZonePriority：首选可用区优先； */
  CreatePolicy?: string | null;
}

/** 托管节点池自动升级配置 */
declare interface MachineUpgradeSettings {
  /** 是否开启自动升级 */
  AutoUpgrade?: boolean;
  /** 运维窗口 */
  UpgradeOptions?: AutoUpgradeOptions;
  /** 升级项 */
  Components?: string[] | null;
  /** 升级时，最大不可升级的节点数 */
  MaxUnavailable?: IntOrString;
}

/** 托管节点池Management配置 */
declare interface ManagementConfig {
  /** dns 配置 */
  Nameservers?: string[] | null;
  /** hosts 配置 */
  Hosts?: string[] | null;
  /** 内核参数配置 */
  KernelArgs?: string[] | null;
}

/** 手动加入的节点 */
declare interface ManuallyAdded {
  /** 加入中的节点数量 */
  Joining?: number;
  /** 初始化中的节点数量 */
  Initializing?: number;
  /** 正常的节点数量 */
  Normal?: number;
  /** 节点总数 */
  Total?: number;
}

/** 节点信息 */
declare interface NativeNodeInfo {
  /** 节点名称 */
  MachineName?: string;
  /** Machine 状态 */
  MachineState?: string;
  /** Machine 所在可用区 */
  Zone?: string;
  /** 节点计费类型。PREPAID：包年包月；POSTPAID_BY_HOUR：按量计费（默认）； */
  InstanceChargeType?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** Machine 登录状态 */
  LoginStatus?: string | null;
  /** 是否开启缩容保护 */
  IsProtectedFromScaleIn?: boolean | null;
  /** Machine 名字 */
  DisplayName?: string | null;
  /** CPU核数，单位：核 */
  CPU?: number;
  /** GPU核数，单位：核 */
  GPU?: number | null;
  /** 自动续费标识 */
  RenewFlag?: string;
  /** 节点计费模式 */
  PayMode?: string;
  /** 节点内存容量，单位：`GB` */
  Memory?: number;
  /** 节点系统盘配置信息 */
  SystemDisk?: Disk;
  /** 公网带宽相关信息设置 */
  InternetAccessible?: InternetAccessible;
  /** 机型所属机型族 */
  InstanceFamily?: string;
  /** 节点内网 IP */
  LanIp?: string;
  /** 机型 */
  InstanceType?: string;
  /** 包年包月节点计费过期时间 */
  ExpiredTime?: string | null;
  /** 节点外网 IP */
  WanIp?: string | null;
  /** 节点密钥 ID 列表 */
  KeyIds?: string[] | null;
  /** 节点GPU相关配置 */
  GPUParams?: GPUParams | null;
  /** 数据盘列表 */
  DataDisks?: DataDisk[] | null;
  /** 安全组列表 */
  SecurityGroupIDs?: string[] | null;
  /** VPC 唯一 ID */
  VpcId?: string;
  /** 子网唯一 ID */
  SubnetId?: string;
  /** OS的名称 */
  OsImage?: string | null;
  /** **原生节点的 Machine 类型**- Native 表示 CXM 类型的原生节点- NativeCVM 表示 CVM 类型的原生节点 */
  MachineType?: string;
  /** **原生节点对应的实例 ID**- ins-q47ofw6 表示这个实例是一个 CVM 的实例- eks-f8mvyaep 表示这个实例是一个 CXM 的实例 */
  InstanceId?: string | null;
}

/** 原生节点池信息 */
declare interface NativeNodePoolInfo {
  /** 伸缩配置 */
  Scaling?: MachineSetScaling;
  /** 子网列表 */
  SubnetIds?: string[];
  /** 安全组列表 */
  SecurityGroupIds?: string[] | null;
  /** 自动升级配置 */
  UpgradeSettings?: MachineUpgradeSettings;
  /** 是否开启自愈能力 */
  AutoRepair?: boolean | null;
  /** 节点计费类型 */
  InstanceChargeType?: string;
  /** 包年包月机型计费配置 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 系统盘配置 */
  SystemDisk?: Disk;
  /** 密钥 ID 列表 */
  KeyIds?: string[] | null;
  /** Machine 系统配置 */
  Management?: ManagementConfig;
  /** 故障自愈规则名称 */
  HealthCheckPolicyName?: string | null;
  /** 原生节点池hostName模式串 */
  HostNamePattern?: string | null;
  /** kubelet 自定义参数 */
  KubeletArgs?: string[] | null;
  /** 预定义脚本 */
  Lifecycle?: LifecycleConfig;
  /** 运行时根目录 */
  RuntimeRootDir?: string;
  /** 是否开启弹性伸缩 */
  EnableAutoscaling?: boolean;
  /** 机型列表 */
  InstanceTypes?: string[];
  /** 期望节点数 */
  Replicas?: number;
  /** 就绪 Machine 个数 */
  ReadyReplicas?: number;
  /** 公网带宽设置 */
  InternetAccessible?: InternetAccessible;
  /** 原生节点池数据盘 */
  DataDisks?: DataDisk[] | null;
  /** 原生节点机型 Native, NativeCVM */
  MachineType?: string;
}

/** 节点统计列表 */
declare interface NodeCountSummary {
  /** 手动管理的节点 */
  ManuallyAdded?: ManuallyAdded | null;
  /** 自动管理的节点 */
  AutoscalingAdded?: AutoscalingAdded | null;
}

/** 节点池信息 */
declare interface NodePool {
  /** 集群 ID */
  ClusterId?: string;
  /** 节点池 ID */
  NodePoolId?: string;
  /** 节点标签 */
  Tags?: TagSpecification[] | null;
  /** 节点污点 */
  Taints?: Taint[] | null;
  /** 是否开启删除保护 */
  DeletionProtection?: boolean | null;
  /** 节点是否不可调度 */
  Unschedulable?: boolean | null;
  /** 节点池类型 */
  Type?: string;
  /** 节点 Labels */
  Labels?: Label[] | null;
  /** 节点池状态 */
  LifeState?: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 节点池名称 */
  Name?: string;
  /** 原生节点池参数 */
  Native?: NativeNodePoolInfo | null;
  /** 节点 Annotation 列表 */
  Annotations?: Annotation[] | null;
  /** 超级节点池参数，在Type等于Super该字段才有值 */
  Super?: SuperNodePoolInfo | null;
  /** 普通节点池参数，在Type等于Regular该字段才有值 */
  Regular?: RegularNodePoolInfo | null;
  /** 第三方节点池参数，在Type等于External该字段才有值 */
  External?: ExternalNodePoolInfo | null;
}

/** 普通节点信息 */
declare interface RegularNodeInfo {
  /** 节点配置 */
  InstanceAdvancedSettings?: InstanceAdvancedSettings | null;
  /** 自动伸缩组ID */
  AutoscalingGroupId?: string | null;
}

/** 普通节点池信息 */
declare interface RegularNodePoolInfo {
  /** LaunchConfigurationId 配置 */
  LaunchConfigurationId?: string;
  /** AutoscalingGroupId 分组id */
  AutoscalingGroupId?: string;
  /** NodeCountSummary 节点列表 */
  NodeCountSummary?: NodeCountSummary;
  /** 状态信息 */
  AutoscalingGroupStatus?: string | null;
  /** 最大节点数量 */
  MaxNodesNum?: number | null;
  /** 最小节点数量 */
  MinNodesNum?: number | null;
  /** 期望的节点数量 */
  DesiredNodesNum?: number | null;
  /** 节点池osName */
  NodePoolOs?: string | null;
  /** 节点配置 */
  InstanceAdvancedSettings?: InstanceAdvancedSettings | null;
}

/** 运行时配置 */
declare interface RuntimeConfig {
  /** 运行时类型 */
  RuntimeType?: string | null;
  /** 运行时版本 */
  RuntimeVersion?: string | null;
  /** 运行时根目录 */
  RuntimeRootDir?: string | null;
}

/** 排序信息 */
declare interface SortBy {
  /** 排序指标 */
  FieldName?: string;
  /** 排序方式 */
  OrderType?: string;
}

/** 超级节点信息 */
declare interface SuperNodeInfo {
  /** 实例名称 */
  Name?: string | null;
  /** 自动续费标识 */
  AutoRenewFlag?: number | null;
  /** 资源类型 */
  ResourceType?: string | null;
  /** 节点的 CPU 规格，单位：核。 */
  CPU?: number | null;
  /** 节点上 Pod 的 CPU总和，单位：核。 */
  UsedCPU?: number | null;
  /** 节点的内存规格，单位：Gi。 */
  Memory?: number | null;
  /** 节点上 Pod 的内存总和，单位：Gi。 */
  UsedMemory?: number | null;
  /** 可用区 */
  Zone?: string | null;
  /** VPC 唯一 ID */
  VpcId?: string | null;
  /** 子网唯一 ID */
  SubnetId?: string | null;
  /** 生效时间 */
  ActiveAt?: string | null;
  /** 过期时间 */
  ExpireAt?: string | null;
  /** 可调度的单 Pod 最大 CPU 规格 */
  MaxCPUScheduledPod?: number | null;
  /** 实例属性 */
  InstanceAttribute?: string | null;
}

/** 虚拟节点池信息 */
declare interface SuperNodePoolInfo {
  /** 子网列表 */
  SubnetIds?: string[] | null;
  /** 安全组列表 */
  SecurityGroupIds?: string[] | null;
}

/** 标签绑定的资源类型，当前支持类型："cluster" */
declare interface Tag {
  /** 标签键 */
  Key?: string;
  /** 标签值 */
  Value?: string;
}

/** 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云主机实例。 */
declare interface TagSpecification {
  /** 标签绑定的资源类型，当前支持类型：1.cluster：集群相关接口，TagSpecification 的 ResourceType 传参为 cluster2.machine：节点池相关接口，如：CreateNodePool, DescribeNodePools 等，TagSpecification 的 ResourceType 传参为 machine */
  ResourceType?: string | null;
  /** 标签对列表 */
  Tags?: Tag[] | null;
}

/** kubernetes Taint */
declare interface Taint {
  /** Taint的Key */
  Key?: string;
  /** Taint的Value */
  Value?: string;
  /** Taint的Effect */
  Effect?: string;
}

/** 修改原生节点池参数 */
declare interface UpdateNativeNodePoolParam {
  /** 伸缩配置 */
  Scaling?: MachineSetScaling;
  /** 子网列表 */
  SubnetIds?: string[];
  /** 安全组列表 */
  SecurityGroupIds?: string[];
  /** 自动升级配置 */
  UpgradeSettings?: MachineUpgradeSettings;
  /** 是否开启自愈能力 */
  AutoRepair?: boolean;
  /** 节点计费类型变更当前仅支持按量计费转包年包月：- PREPAID */
  InstanceChargeType?: string;
  /** 包年包月机型计费配置 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 系统盘配置 */
  SystemDisk?: Disk;
  /** Machine 系统配置 */
  Management?: ManagementConfig;
  /** 故障自愈规则名称 */
  HealthCheckPolicyName?: string;
  /** 原生节点池hostName模式串 */
  HostNamePattern?: string;
  /** kubelet 自定义参数 */
  KubeletArgs?: string[];
  /** 预定义脚本 */
  Lifecycle?: LifecycleConfig;
  /** 运行时根目录 */
  RuntimeRootDir?: string;
  /** 是否开启弹性伸缩 */
  EnableAutoscaling?: boolean;
  /** 机型列表 */
  InstanceTypes?: string[];
  /** 期望节点数 */
  Replicas?: number;
  /** 是否更新存量节点 */
  UpdateExistedNode?: boolean;
  /** 数据盘列表 */
  DataDisks?: DataDisk[];
  /** ssh公钥id数组 */
  KeyIds?: string[];
  /** 节点池 GPU 配置 */
  GPUConfigs?: GPUConfig[];
}

declare interface CreateHealthCheckPolicyRequest {
  /** 集群ID */
  ClusterId: string;
  /** 健康检测策略 */
  HealthCheckPolicy: HealthCheckPolicy;
}

declare interface CreateHealthCheckPolicyResponse {
  /** 健康检测策略名称 */
  HealthCheckPolicyName?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNodePoolRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 节点池名称 */
  Name: string;
  /** 节点池类型 */
  Type: string;
  /** 节点 Labels */
  Labels?: Label[];
  /** 节点污点 */
  Taints?: Taint[];
  /** 节点标签 */
  Tags?: TagSpecification[];
  /** 是否开启删除保护 */
  DeletionProtection?: boolean;
  /** 节点是否默认不可调度 */
  Unschedulable?: boolean;
  /** 原生节点池创建参数（Type字段设置为Native时需填写） */
  Native?: CreateNativeNodePoolParam;
  /** 节点 Annotation 列表 */
  Annotations?: Annotation[];
}

declare interface CreateNodePoolResponse {
  /** 节点池 ID */
  NodePoolId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterMachinesRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 节点名列表 */
  MachineNames: string[];
  /** 删除节点时是否缩容节点池，true为缩容 */
  EnableScaleDown?: boolean;
  /** 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例）retain（仅移除，保留实例） */
  InstanceDeleteMode?: string;
}

declare interface DeleteClusterMachinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteHealthCheckPolicyRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 健康检测策略名称 */
  HealthCheckPolicyName: string;
}

declare interface DeleteHealthCheckPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNodePoolRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 节点池 ID */
  NodePoolId: string;
}

declare interface DeleteNodePoolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 过滤条件列表:InstanceIds(实例ID),InstanceType(实例类型：Regular，Native，Super，External),VagueIpAddress(模糊匹配IP),Labels(k8s节点label),NodePoolNames(节点池名称),VagueInstanceName(模糊匹配节点名),InstanceStates(节点状态),Unschedulable(是否封锁),NodePoolIds(节点池ID) */
  Filters?: Filter[];
  /** 排序信息 */
  SortBy?: SortBy;
}

declare interface DescribeClusterInstancesResponse {
  /** 集群中实例总数 */
  TotalCount?: number;
  /** 集群中实例列表 */
  InstanceSet?: Instance[];
  /** 错误信息集合 */
  Errors?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHealthCheckPoliciesRequest {
  /** 集群 ID */
  ClusterId: string;
  /** · HealthCheckPolicyName 按照【健康检测策略名称】进行过滤。 类型：String 必选：否 */
  Filters?: Filter[];
  /** 最大输出条数，默认20，最大为100 */
  Limit?: number;
  /** 偏移量，默认0 */
  Offset?: number;
}

declare interface DescribeHealthCheckPoliciesResponse {
  /** 健康检测策略数组 */
  HealthCheckPolicies?: HealthCheckPolicy[] | null;
  /** 数组总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHealthCheckPolicyBindingsRequest {
  /** 集群 ID */
  ClusterId: string;
  /** · HealthCheckPolicyName 按照【健康检测规则名称】进行过滤。 类型：String 必选：否 */
  Filter?: Filter[];
  /** 最大输出条数，默认20，最大为100 */
  Limit?: number;
  /** 偏移量，默认0 */
  Offset?: number;
}

declare interface DescribeHealthCheckPolicyBindingsResponse {
  /** 健康检测规则数组 */
  HealthCheckPolicyBindings?: HealthCheckPolicyBinding[] | null;
  /** 健康检测规则数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHealthCheckTemplateRequest {
}

declare interface DescribeHealthCheckTemplateResponse {
  /** 健康检测策略模板 */
  HealthCheckTemplate?: HealthCheckTemplate;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNodePoolsRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 查询过滤条件：· NodePoolsName 按照【节点池名】进行过滤。 类型：String 必选：否· NodePoolsId 按照【节点池id】进行过滤。 类型：String 必选：否· tags 按照【标签键值对】进行过滤。 类型：String 必选：否· tag:tag-key 按照【标签键值对】进行过滤。 类型：String 必选：否 */
  Filters?: Filter[];
  /** 偏移量，默认0 */
  Offset?: number;
  /** 最大输出条数，默认20，最大为100 */
  Limit?: number;
}

declare interface DescribeNodePoolsResponse {
  /** 节点池列表 */
  NodePools?: NodePool[];
  /** 资源总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHealthCheckPolicyRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 健康检测策略 */
  HealthCheckPolicy: HealthCheckPolicy;
}

declare interface ModifyHealthCheckPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNodePoolRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 节点池 ID */
  NodePoolId: string;
  /** 节点池名称 */
  Name?: string;
  /** 节点 Labels */
  Labels?: Label[];
  /** 节点污点 */
  Taints?: Taint[];
  /** 节点标签 */
  Tags?: TagSpecification[];
  /** 是否开启删除保护 */
  DeletionProtection?: boolean;
  /** 节点是否不可调度 */
  Unschedulable?: boolean;
  /** 原生节点池更新参数 */
  Native?: UpdateNativeNodePoolParam;
  /** 节点 Annotation 列表 */
  Annotations?: Annotation[];
}

declare interface ModifyNodePoolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RebootMachinesRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 节点名字列表，一次请求，传入节点数量上限为100个 */
  MachineNames: string[];
  /** 实例的关闭模式。取值范围：soft_first：表示在正常关闭失败后进行强制关闭hard：直接强制关闭soft：仅软关机默认取值：soft。 */
  StopType?: string;
}

declare interface RebootMachinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetMachineLoginRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 节点名称 */
  MachineName: string;
  /** 密钥 ID 列表 */
  KeyIds?: string[];
}

declare interface SetMachineLoginResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartMachinesRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 节点名字列表，一次请求，传入节点数量上限为100个 */
  MachineNames: string[];
}

declare interface StartMachinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopMachinesRequest {
  /** 集群 ID */
  ClusterId: string;
  /** 节点名字列表，一次请求，传入节点数量上限为100个 */
  MachineNames: string[];
  /** 实例的关闭模式。取值范围：soft_first：表示在正常关闭失败后进行强制关闭hard：直接强制关闭soft：仅软关机 */
  StopType?: string;
}

declare interface StopMachinesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare namespace V20180525 {
  type VersionHeader = { headers: { 'X-TC-Version': '2018-05-25' } }

  /** addon的具体描述 */
  interface Addon {
    /** addon名称 */
    AddonName?: string;
    /** addon的版本 */
    AddonVersion?: string;
    /** addon的参数，是一个json格式的base64转码后的字符串 */
    RawValues?: string;
    /** addon的状态：- Installing：安装中- Upgrading：升级中- Terminating：删除中- Succeeded：安装/升级成功- InstallFailed：安装失败- UpgradFailed：升级失败 */
    Phase?: string;
    /** addon失败的原因 */
    Reason?: string;
    /** addon的创建时间 */
    CreateTime?: string;
  }

  /** 注释 */
  interface AnnotationValue {
    /** 注释键 */
    Name: string;
    /** 注释值 */
    Value: string;
  }

  /** app所支持的chart */
  interface AppChart {
    /** chart名称 */
    Name?: string;
    /** chart的标签 */
    Label?: string;
    /** chart的版本 */
    LatestVersion?: string;
  }

  /** 集群关联的伸缩组最大实例数最小值实例数 */
  interface AutoScalingGroupRange {
    /** 伸缩组最小实例数 */
    MinSize?: number;
    /** 伸缩组最大实例数 */
    MaxSize?: number;
  }

  /** 自动变配集群等级 */
  interface AutoUpgradeClusterLevel {
    /** 是否开启自动变配集群等级 */
    IsAutoUpgrade: boolean;
  }

  /** 自动扩缩容的节点 */
  interface AutoscalingAdded {
    /** 正在加入中的节点数量 */
    Joining?: number;
    /** 初始化中的节点数量 */
    Initializing?: number;
    /** 正常的节点数量 */
    Normal?: number;
    /** 节点总数 */
    Total?: number;
  }

  /** 仓储仓库信息 */
  interface BackupStorageLocation {
    /** 备份仓库名称 */
    Name?: string;
    /** 存储仓库所属地域，比如COS广州(ap-guangzhou) */
    StorageRegion?: string;
    /** 存储服务提供方，默认腾讯云 */
    Provider?: string;
    /** 对象存储桶名称，如果是COS必须是tke-backup-前缀开头 */
    Bucket?: string;
    /** 对象存储桶路径 */
    Path?: string;
    /** 存储仓库状态- Available: 可用- Unavailable: 不可用 */
    State?: string;
    /** 详细状态信息 */
    Message?: string;
    /** 最后一次检查时间 */
    LastValidationTime?: string;
  }

  /** cuDNN的版本信息 */
  interface CUDNN {
    /** cuDNN的名字 */
    Name: string;
    /** cuDNN的版本 */
    Version: string;
    /** cuDNN的Dev名字 */
    DevName?: string;
    /** cuDNN的Doc名字 */
    DocName?: string;
  }

  /** cloudrun安全特性能力 */
  interface Capabilities {
    /** 启用安全能力项列表 */
    Add?: string[] | null;
    /** 禁用安全能力向列表 */
    Drop?: string[] | null;
  }

  /** EKS Instance CBS volume */
  interface CbsVolume {
    /** 腾讯云cbs盘Id */
    CbsDiskId: string;
    /** cbs volume 数据卷名称 */
    Name: string;
  }

  /** 集群信息结构体 */
  interface Cluster {
    /** 集群ID */
    ClusterId?: string;
    /** 集群名称 */
    ClusterName?: string;
    /** 集群描述 */
    ClusterDescription?: string;
    /** 集群版本（默认值为1.10.5） */
    ClusterVersion?: string;
    /** 集群系统。centos7.2x86_64 或者 ubuntu16.04.1 LTSx86_64，默认取值为ubuntu16.04.1 LTSx86_64 */
    ClusterOs?: string;
    /** 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。 */
    ClusterType?: string;
    /** 集群网络相关参数 */
    ClusterNetworkSettings?: ClusterNetworkSettings;
    /** 集群当前node数量 */
    ClusterNodeNum?: number;
    /** 集群所属的项目ID */
    ProjectId?: number;
    /** 标签描述列表。 */
    TagSpecification?: TagSpecification[] | null;
    /** 集群状态 (Trading 集群开通中,Creating 创建中,Running 运行中,Deleting 删除中,Idling 闲置中,Recovering 唤醒中,Scaling 规模调整中,Upgrading 升级中,WaittingForConnect 等待注册,Trading 集群开通中,Isolated 欠费隔离中,Pause 集群升级暂停,NodeUpgrading 节点升级中,RuntimeUpgrading 节点运行时升级中,MasterScaling Master扩缩容中,ClusterLevelUpgrading 调整规格中,ResourceIsolate 隔离中,ResourceIsolated 已隔离,ResourceReverse 冲正中,Abnormal 异常) */
    ClusterStatus?: string;
    /** 集群属性(包括集群不同属性的MAP，属性字段包括NodeNameType (lan-ip模式和hostname 模式，默认无lan-ip模式)) */
    Property?: string;
    /** 集群当前master数量 */
    ClusterMaterNodeNum?: number;
    /** 集群使用镜像id */
    ImageId?: string;
    /** OsCustomizeType 系统定制类型 */
    OsCustomizeType?: string;
    /** 集群运行环境docker或container */
    ContainerRuntime?: string;
    /** 创建时间 */
    CreatedTime?: string;
    /** 删除保护开关 */
    DeletionProtection?: boolean;
    /** 集群是否开启第三方节点支持 */
    EnableExternalNode?: boolean;
    /** 集群等级，针对托管集群生效 */
    ClusterLevel?: string;
    /** 自动变配集群等级，针对托管集群生效 */
    AutoUpgradeClusterLevel?: boolean;
    /** 是否开启QGPU共享 */
    QGPUShareEnable?: boolean;
    /** 运行时版本 */
    RuntimeVersion?: string;
    /** 集群当前etcd数量 */
    ClusterEtcdNodeNum?: number;
    /** 本地专用集群Id */
    CdcId?: string;
  }

  /** 集群高级配置 */
  interface ClusterAdvancedSettings {
    /** 是否启用集群节点自动扩缩容(创建集群流程不支持开启此功能) */
    AsEnabled?: boolean;
    /** 是否开启审计开关 */
    AuditEnabled?: boolean;
    /** 审计日志上传到的topic */
    AuditLogTopicId?: string;
    /** 审计日志上传到的logset日志集 */
    AuditLogsetId?: string;
    /** 自定义模式下的基础pod数量 */
    BasePodNumber?: number;
    /** 启用 CiliumMode 的模式，空值表示不启用，“clusterIP” 表示启用 Cilium 支持 ClusterIP */
    CiliumMode?: string;
    /** 集群使用的runtime类型，包括"docker"和"containerd"两种类型，默认为"docker" */
    ContainerRuntime?: string;
    /** 是否启用 DataPlaneV2（cilium替代kube-proxy） */
    DataPlaneV2?: boolean;
    /** 是否启用集群删除保护 */
    DeletionProtection?: boolean;
    /** 是否开节点podCIDR大小的自定义模式 */
    EnableCustomizedPodCIDR?: boolean;
    /** 元数据拆分存储Etcd配置 */
    EtcdOverrideConfigs?: EtcdOverrideConfig[];
    /** 集群自定义参数 */
    ExtraArgs?: ClusterExtraArgs;
    /** 是否启用IPVS */
    IPVS?: boolean;
    /** 集群VPC-CNI模式下是否是双栈集群，默认false，表明非双栈集群。 */
    IsDualStack?: boolean;
    /** 集群VPC-CNI模式是否为非固定IP，默认: FALSE 固定IP。 */
    IsNonStaticIpMode?: boolean;
    /** 集群的网络代理模型，目前tke集群支持的网络代理模式有三种：iptables,ipvs,ipvs-bpf，此参数仅在使用ipvs-bpf模式时使用，三种网络模式的参数设置关系如下：iptables模式：IPVS和KubeProxyMode都不设置ipvs模式: 设置IPVS为true, KubeProxyMode不设置ipvs-bpf模式: 设置KubeProxyMode为kube-proxy-bpf使用ipvs-bpf的网络模式需要满足以下条件：1. 集群版本必须为1.14及以上；2. 系统镜像必须是: Tencent Linux 2.4； */
    KubeProxyMode?: string;
    /** 集群网络类型，默认为GR。- GR: 全局路由- VPC-CNI: VPC-CNI模式- CiliumOverlay: CiliumOverlay模式 */
    NetworkType?: string;
    /** 集群中节点NodeName类型（包括 hostname,lan-ip两种形式，默认为lan-ip。如果开启了hostname模式，创建节点时需要设置HostName参数，并且InstanceName需要和HostName一致） */
    NodeNameType?: string;
    /** 是否开启QGPU共享 */
    QGPUShareEnable?: boolean;
    /** 运行时版本 */
    RuntimeVersion?: string;
    /** 区分共享网卡多IP模式和独立网卡模式，共享网卡多 IP 模式填写"tke-route-eni"，独立网卡模式填写"tke-direct-eni"，默认为共享网卡模式 */
    VpcCniType?: string;
  }

  /** 集群关联的伸缩组信息 */
  interface ClusterAsGroup {
    /** 伸缩组ID */
    AutoScalingGroupId?: string;
    /** 伸缩组状态(开启 enabled 开启中 enabling 关闭 disabled 关闭中 disabling 更新中 updating 删除中 deleting 开启缩容中 scaleDownEnabling 关闭缩容中 scaleDownDisabling) */
    Status?: string;
    /** 节点是否设置成不可调度 */
    IsUnschedulable?: boolean;
    /** 伸缩组的label列表 */
    Labels?: Label[];
    /** 创建时间 */
    CreatedTime?: string;
  }

  /** 集群伸缩组属性 */
  interface ClusterAsGroupAttribute {
    /** 伸缩组ID */
    AutoScalingGroupId?: string;
    /** 是否开启 */
    AutoScalingGroupEnabled?: boolean;
    /** 伸缩组最大最小实例数 */
    AutoScalingGroupRange?: AutoScalingGroupRange;
  }

  /** 集群弹性伸缩配置 */
  interface ClusterAsGroupOption {
    /** 是否开启缩容 */
    IsScaleDownEnabled?: boolean | null;
    /** 多伸缩组情况下扩容选择算法(random 随机选择，most-pods 最多类型的Pod least-waste 最少的资源浪费，默认为random) */
    Expander?: string;
    /** 最大并发缩容数 */
    MaxEmptyBulkDelete?: number | null;
    /** 集群扩容后多少分钟开始判断缩容（默认为10分钟） */
    ScaleDownDelay?: number | null;
    /** 节点连续空闲多少分钟后被缩容（默认为 10分钟） */
    ScaleDownUnneededTime?: number | null;
    /** 节点资源使用量低于多少(百分比)时认为空闲(默认: 50(百分比)) */
    ScaleDownUtilizationThreshold?: number | null;
    /** 含有本地存储Pod的节点是否不缩容(默认： true) */
    SkipNodesWithLocalStorage?: boolean | null;
    /** 含有kube-system namespace下非DaemonSet管理的Pod的节点是否不缩容 (默认： true) */
    SkipNodesWithSystemPods?: boolean | null;
    /** 计算资源使用量时是否默认忽略DaemonSet的实例(默认值: False，不忽略) */
    IgnoreDaemonSetsUtilization?: boolean | null;
    /** CA做健康性判断的个数，默认3，即超过OkTotalUnreadyCount个数后，CA会进行健康性判断。 */
    OkTotalUnreadyCount?: number | null;
    /** 未就绪节点的最大百分比，此后CA会停止操作 */
    MaxTotalUnreadyPercentage?: number | null;
    /** 表示未准备就绪的节点在有资格进行缩减之前应该停留多长时间 */
    ScaleDownUnreadyTime?: number | null;
    /** CA删除未在Kubernetes中注册的节点之前等待的时间 */
    UnregisteredNodeRemovalTime?: number | null;
  }

  /** 描述集群的基本配置信息 */
  interface ClusterBasicSettings {
    /** 集群操作系统，支持设置公共镜像(字段传相应镜像Name)和自定义镜像(字段传相应镜像ID)，详情参考：https://cloud.tencent.com/document/product/457/68289 */
    ClusterOs?: string;
    /** 集群版本,默认值为1.10.5 */
    ClusterVersion?: string;
    /** 集群名称 */
    ClusterName?: string;
    /** 集群描述 */
    ClusterDescription?: string;
    /** 私有网络ID，形如vpc-e55paxnt。创建托管空集群时必传。 */
    VpcId?: string;
    /** 集群内新增资源所属项目ID。 */
    ProjectId?: number;
    /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到集群实例。 */
    TagSpecification?: TagSpecification[];
    /** 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值) */
    OsCustomizeType?: string;
    /** 是否开启节点的默认安全组(默认: 否，Alpha特性) */
    NeedWorkSecurityGroup?: boolean;
    /** 控制面子网信息，仅在以下场景使用时要求必填。- 容器网络插件为CiliumOverlay时，TKE会从该子网获取2个IP用来创建内网负载均衡。- 创建支持CDC的托管集群，且网络插件为VPC-CNI时，要求预留至少12个IP。 */
    SubnetId?: string;
    /** 集群等级，针对托管集群生效 */
    ClusterLevel?: string;
    /** 自动变配集群等级，针对托管集群生效 */
    AutoUpgradeClusterLevel?: AutoUpgradeClusterLevel;
  }

  /** 集群容器网络相关参数 */
  interface ClusterCIDRSettings {
    /** 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。 */
    ClusterCIDR?: string;
    /** 是否忽略 ClusterCIDR 冲突错误, 默认不忽略 */
    IgnoreClusterCIDRConflict?: boolean;
    /** 集群中每个Node上最大的Pod数量。取值范围16～256。不为2的幂值时会向上取最接近的2的幂值。 */
    MaxNodePodNum?: number;
    /** 集群最大的service数量。取值范围32～32768，不为2的幂值时会向上取最接近的2的幂值。默认值256 */
    MaxClusterServiceNum?: number;
    /** 用于分配集群服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。 */
    ServiceCIDR?: string;
    /** VPC-CNI网络模式下，弹性网卡的子网Id。 */
    EniSubnetIds?: string[];
    /** VPC-CNI网络模式下，弹性网卡IP的回收时间，取值范围[300,15768000) */
    ClaimExpiredSeconds?: number;
    /** 是否忽略 ServiceCIDR 冲突错误, 仅在 VPC-CNI 模式生效，默认不忽略 */
    IgnoreServiceCIDRConflict?: boolean;
  }

  /** 集群创建过程 */
  interface ClusterCondition {
    /** 集群创建过程类型 */
    Type?: string;
    /** 集群创建过程状态 */
    Status?: string;
    /** 最后一次探测到该状态的时间 */
    LastProbeTime?: string;
    /** 最后一次转换到该过程的时间 */
    LastTransitionTime?: string;
    /** 转换到该过程的简明原因 */
    Reason?: string;
    /** 转换到该过程的更多信息 */
    Message?: string;
  }

  /** 接入k8s 的认证信息 */
  interface ClusterCredential {
    /** CA 根证书 */
    CACert: string;
    /** 认证用的Token */
    Token?: string;
  }

  /** 集群master自定义参数 */
  interface ClusterExtraArgs {
    /** etcd自定义参数，只支持独立集群 */
    Etcd?: string[] | null;
    /** kube-apiserver自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"] */
    KubeAPIServer?: string[] | null;
    /** kube-controller-manager自定义参数 */
    KubeControllerManager?: string[] | null;
    /** kube-scheduler自定义参数 */
    KubeScheduler?: string[] | null;
  }

  /** 弹性容器集群内网访问LB信息 */
  interface ClusterInternalLB {
    /** 是否开启内网访问LB */
    Enabled: boolean;
    /** 内网访问LB关联的子网Id */
    SubnetId?: string | null;
  }

  /** 托管集群等级属性 */
  interface ClusterLevelAttribute {
    /** 集群等级 */
    Name?: string;
    /** 等级名称 */
    Alias?: string;
    /** 节点数量 */
    NodeCount?: number;
    /** Pod数量 */
    PodCount?: number;
    /** Configmap数量 */
    ConfigMapCount?: number;
    /** ReplicaSets数量 */
    RSCount?: number;
    /** CRD数量 */
    CRDCount?: number;
    /** 是否启用 */
    Enable?: boolean;
    /** 其他资源数量 */
    OtherCount?: number;
  }

  /** 集群等级变配记录 */
  interface ClusterLevelChangeRecord {
    /** 记录ID */
    ID?: string;
    /** 集群ID */
    ClusterID?: string;
    /** 变配状态：trading 发货中,upgrading 变配中,success 变配成功,failed 变配失败。 */
    Status?: string;
    /** 状态描述 */
    Message?: string;
    /** 变配前规模 */
    OldLevel?: string;
    /** 变配后规模 */
    NewLevel?: string;
    /** 变配触发类型：manual 手动,auto 自动 */
    TriggerType?: string;
    /** 创建时间 */
    CreatedAt?: string;
    /** 开始时间 */
    StartedAt?: string;
    /** 结束时间 */
    EndedAt?: string;
  }

  /** 集群网络相关的参数 */
  interface ClusterNetworkSettings {
    /** 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突 */
    ClusterCIDR?: string;
    /** 是否忽略 ClusterCIDR 冲突错误, 默认不忽略 */
    IgnoreClusterCIDRConflict?: boolean;
    /** 集群中每个Node上最大的Pod数量(默认为256) */
    MaxNodePodNum?: number;
    /** 集群最大的service数量(默认为256) */
    MaxClusterServiceNum?: number;
    /** 是否启用IPVS(默认不开启) */
    Ipvs?: boolean;
    /** 集群的VPCID（如果创建空集群，为必传值，否则自动设置为和集群的节点保持一致） */
    VpcId?: string;
    /** 网络插件是否启用CNI(默认开启) */
    Cni?: boolean;
    /** service的网络模式，当前参数只适用于ipvs+bpf模式 */
    KubeProxyMode?: string;
    /** 用于分配service的IP range，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突 */
    ServiceCIDR?: string;
    /** 集群关联的容器子网 */
    Subnets?: string[] | null;
    /** 是否忽略 ServiceCIDR 冲突错误, 仅在 VPC-CNI 模式生效，默认不忽略 */
    IgnoreServiceCIDRConflict?: boolean;
    /** 集群VPC-CNI模式是否为非双栈集群，默认false，非双栈。 */
    IsDualStack?: boolean;
    /** 用于分配service的IP range，由系统自动分配 */
    Ipv6ServiceCIDR?: string;
    /** 集群Cilium Mode配置- clusterIP */
    CiliumMode?: string;
    /** 控制面子网信息，仅在以下场景返回。- 容器网络插件为CiliumOverlay。- 支持CDC的托管集群，且网络插件为VPC-CNI。 */
    SubnetId?: string;
    /** 是否启用了 DataPlaneV2（cilium替代kube-proxy） */
    DataPlaneV2?: boolean;
  }

  /** 集群属性 */
  interface ClusterProperty {
    /** 节点hostname命名模式 */
    NodeNameType?: string;
  }

  /** 弹性容器集群公网访问负载均衡信息 */
  interface ClusterPublicLB {
    /** 是否开启公网访问LB */
    Enabled: boolean;
    /** 允许访问的来源CIDR列表 */
    AllowFromCidrs?: string[];
    /** 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有) */
    SecurityPolicies?: string[];
    /** 外网访问相关的扩展参数，格式为json */
    ExtraParam?: string;
    /** 新内外网功能，需要传递安全组 */
    SecurityGroup?: string;
  }

  /** 集群状态信息 */
  interface ClusterStatus {
    /** 集群Id */
    ClusterId?: string;
    /** 集群状态 */
    ClusterState?: string;
    /** 集群下机器实例的状态 */
    ClusterInstanceState?: string;
    /** 集群是否开启监控 */
    ClusterBMonitor?: boolean;
    /** 集群创建中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
    ClusterInitNodeNum?: number;
    /** 集群运行中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
    ClusterRunningNodeNum?: number;
    /** 集群异常的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
    ClusterFailedNodeNum?: number;
    /** 集群已关机的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
    ClusterClosedNodeNum?: number;
    /** 集群关机中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
    ClusterClosingNodeNum?: number;
    /** 集群是否开启删除保护 */
    ClusterDeletionProtection?: boolean;
    /** 集群是否可审计 */
    ClusterAuditEnabled?: boolean;
  }

  /** 集群版本信息 */
  interface ClusterVersion {
    /** 集群ID */
    ClusterId?: string;
    /** 集群主版本号列表，例如1.18.4 */
    Versions?: string[];
  }

  /** 账户UIN与客户端证书CommonName的映射 */
  interface CommonName {
    /** 子账户UIN */
    SubaccountUin?: string;
    /** 子账户客户端证书中的CommonName字段 */
    CN?: string;
  }

  /** EKS Instance Container容器 */
  interface Container {
    /** 镜像 */
    Image: string;
    /** 容器名 */
    Name: string;
    /** 容器启动参数 */
    Args?: string[];
    /** 容器启动命令 */
    Commands?: string[];
    /** CPU，制改容器最多可使用的核数，该值不可超过容器实例的总核数。单位：核。 */
    Cpu?: number;
    /** 当前状态 */
    CurrentState?: ContainerState;
    /** 容器内操作系统的环境变量 */
    EnvironmentVars?: EnvironmentVariable[];
    /** Gpu限制 */
    GpuLimit?: number | null;
    /** 存活探针 */
    LivenessProbe?: LivenessOrReadinessProbe | null;
    /** 内存，限制该容器最多可使用的内存值，该值不可超过容器实例的总内存值。单位：GiB */
    Memory?: number;
    /** 就绪探针 */
    ReadinessProbe?: LivenessOrReadinessProbe | null;
    /** 重启次数 */
    RestartCount?: number | null;
    /** 容器的安全上下文 */
    SecurityContext?: SecurityContext | null;
    /** 数据卷挂载信息 */
    VolumeMounts?: VolumeMount[] | null;
    /** 容器工作目录 */
    WorkingDir?: string;
  }

  /** 容器状态 */
  interface ContainerState {
    /** 容器运行退出码 */
    ExitCode?: number | null;
    /** 容器运行结束时间 */
    FinishTime?: string | null;
    /** 容器状态信息 */
    Message?: string | null;
    /** 容器状态 Reason */
    Reason?: string | null;
    /** 容器重启次数 */
    RestartCount?: number | null;
    /** 容器运行开始时间 */
    StartTime?: string | null;
    /** 容器状态：created, running, exited, unknown */
    State?: string;
  }

  /** 集群中控制器的状态描述 */
  interface ControllerStatus {
    /** 控制器的名字 */
    Name: string;
    /** 控制器是否开启 */
    Enabled: boolean;
  }

  /** 自定义驱动信息 */
  interface CustomDriver {
    /** 自定义GPU驱动地址链接 */
    Address?: string;
  }

  /** 自定义DNS配置 */
  interface DNSConfig {
    /** DNS 服务器IP地址列表 */
    Nameservers?: string[];
    /** 对象选项列表，每个对象由name和value（可选）构成 */
    Options?: DNSConfigOption[];
    /** DNS搜索域列表 */
    Searches?: string[];
  }

  /** DNS配置选项 */
  interface DNSConfigOption {
    /** 配置项名称 */
    Name: string | null;
    /** 项值 */
    Value: string | null;
  }

  /** 描述了k8s节点数据盘相关配置与信息。 */
  interface DataDisk {
    /** 云盘类型 */
    DiskType: string;
    /** 文件系统(ext3/ext4/xfs) */
    FileSystem: string;
    /** 云盘大小(G） */
    DiskSize: number;
    /** 是否自动化格式盘并挂载 */
    AutoFormatAndMount: boolean;
    /** 挂载目录 */
    MountTarget: string;
    /** 挂载设备名或分区名，当且仅当添加已有节点时需要 */
    DiskPartition: string;
  }

  /** Eks 自定义域名服务器 配置 */
  interface DnsServerConf {
    /** 域名。空字符串表示所有域名。 */
    Domain: string;
    /** dns 服务器地址列表。地址格式 ip:port */
    DnsServers: string[];
  }

  /** GPU驱动和CUDA的版本信息 */
  interface DriverVersion {
    /** GPU驱动或者CUDA的名字 */
    Name: string;
    /** GPU驱动或者CUDA的版本 */
    Version: string;
  }

  /** ECM增强服务 */
  interface ECMEnhancedService {
    /** 是否开启云监控服务 */
    SecurityService?: ECMRunMonitorServiceEnabled;
    /** 是否开启云镜服务 */
    MonitorService?: ECMRunSecurityServiceEnabled;
  }

  /** ECM云监控服务 */
  interface ECMRunMonitorServiceEnabled {
    /** 是否开启 */
    Enabled?: boolean;
  }

  /** ECM云镜服务 */
  interface ECMRunSecurityServiceEnabled {
    /** 是否开启 */
    Enabled?: boolean;
    /** 云镜版本：0 基础版，1 专业版 */
    Version?: number;
  }

  /** ECM实例可用区及对应的实例创建数目及运营商的组合 */
  interface ECMZoneInstanceCountISP {
    /** 创建实例的可用区 */
    Zone: string;
    /** 在当前可用区欲创建的实例数目 */
    InstanceCount: number;
    /** 运营商 */
    ISP: string;
  }

  /** 边缘容器参数描述 */
  interface EdgeArgsFlag {
    /** 参数名 */
    Name?: string;
    /** 参数类型 */
    Type?: string;
    /** 参数描述 */
    Usage?: string;
    /** 参数默认值 */
    Default?: string;
    /** 参数可选范围（目前包含range和in两种，"[]"代表range，如"[1, 5]"表示参数必须>=1且 <=5, "()"代表in， 如"('aa', 'bb')"表示参数只能为字符串'aa'或者'bb'，该参数为空表示不校验） */
    Constraint?: string;
  }

  /** 边缘容器集群可用的自定义参数 */
  interface EdgeAvailableExtraArgs {
    /** kube-apiserver可用的自定义参数 */
    KubeAPIServer?: EdgeArgsFlag[];
    /** kube-controller-manager可用的自定义参数 */
    KubeControllerManager?: EdgeArgsFlag[];
    /** kube-scheduler可用的自定义参数 */
    KubeScheduler?: EdgeArgsFlag[];
    /** kubelet可用的自定义参数 */
    Kubelet?: EdgeArgsFlag[];
  }

  /** 边缘计算集群信息 */
  interface EdgeCluster {
    /** 集群Id */
    ClusterId: string;
    /** 集群名称 */
    ClusterName: string;
    /** Vpc Id */
    VpcId: string;
    /** 集群pod cidr */
    PodCIDR: string;
    /** 集群 service cidr */
    ServiceCIDR: string;
    /** k8s 版本号 */
    K8SVersion: string;
    /** 集群状态 */
    Status?: string;
    /** 集群描述信息 */
    ClusterDesc?: string;
    /** 集群创建时间 */
    CreatedTime?: string;
    /** 边缘集群版本 */
    EdgeClusterVersion?: string;
    /** 节点最大Pod数 */
    MaxNodePodNum?: number;
    /** 集群高级设置 */
    ClusterAdvancedSettings?: EdgeClusterAdvancedSettings;
    /** 边缘容器集群级别 */
    Level?: string;
    /** 是否支持自动提升集群配置 */
    AutoUpgradeClusterLevel?: boolean;
    /** 集群付费模式，支持POSTPAID_BY_HOUR或者PREPAID */
    ChargeType?: string;
    /** 边缘集群组件的版本 */
    EdgeVersion?: string;
    /** 集群绑定的云标签 */
    TagSpecification?: TagSpecification | null;
  }

  /** 边缘容器集群高级配置 */
  interface EdgeClusterAdvancedSettings {
    /** 集群自定义参数 */
    ExtraArgs?: EdgeClusterExtraArgs | null;
    /** 运行时类型，支持"docker"和"containerd"，默认为docker */
    Runtime?: string;
    /** 集群kube-proxy转发模式，支持"iptables"和"ipvs"，默认为iptables */
    ProxyMode?: string;
  }

  /** 边缘容器集群master自定义参数 */
  interface EdgeClusterExtraArgs {
    /** kube-apiserver自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"] */
    KubeAPIServer?: string[];
    /** kube-controller-manager自定义参数 */
    KubeControllerManager?: string[];
    /** kube-scheduler自定义参数 */
    KubeScheduler?: string[];
  }

  /** 边缘计算集群内网访问LB信息 */
  interface EdgeClusterInternalLB {
    /** 是否开启内网访问LB */
    Enabled: boolean;
    /** 内网访问LB关联的子网Id */
    SubnetId?: string[];
  }

  /** 边缘计算集群公网访问负载均衡信息 */
  interface EdgeClusterPublicLB {
    /** 是否开启公网访问LB */
    Enabled: boolean;
    /** 允许访问的公网cidr */
    AllowFromCidrs?: string[];
  }

  /** 用以帮助用户自动创建EIP的配置 */
  interface EipAttribute {
    /** 容器实例删除后，EIP是否释放。Never表示不释放，其他任意值（包括空字符串）表示释放。 */
    DeletePolicy: string;
    /** EIP线路类型。默认值：BGP。已开通静态单线IP白名单的用户，可选值：CMCC：中国移动CTCC：中国电信CUCC：中国联通注意：仅部分地域支持静态单线IP。 */
    InternetServiceProvider?: string | null;
    /** EIP出带宽上限，单位：Mbps。 */
    InternetMaxBandwidthOut?: number | null;
  }

  /** EksContainerInstance实例类型 */
  interface EksCi {
    /** 自动为用户创建的EipId */
    AutoCreatedEipId?: string;
    /** 为容器实例关联 CAM 角色，value 填写 CAM 角色名称，容器实例可获取该 CAM 角色包含的权限策略，方便 容器实例 内的程序进行如购买资源、读写存储等云资源操作。 */
    CamRoleName?: string;
    /** 容器列表 */
    Containers?: Container[];
    /** CPU大小 */
    Cpu?: number;
    /** CPU类型 */
    CpuType?: string;
    /** 接到请求后的系统创建时间。 */
    CreationTime?: string;
    /** 容器实例绑定的Eip地址，注意可能为空 */
    EipAddress?: string | null;
    /** EKS Container Instance Id */
    EksCiId?: string;
    /** EKS Container Instance Name */
    EksCiName?: string;
    /** 数据卷信息 */
    EksCiVolume?: EksCiVolume;
    /** GPU卡数量 */
    GpuCount?: number;
    /** GPU类型。如无使用GPU则不返回 */
    GpuType?: string;
    /** 初始化容器列表 */
    InitContainers?: Container[] | null;
    /** 内存大小 */
    Memory?: number;
    /** 容器状态是否持久化 */
    PersistStatus?: boolean | null;
    /** 内网ip地址 */
    PrivateIp?: string;
    /** 容器组的重启策略 */
    RestartPolicy?: string;
    /** 容器组运行的安全上下文 */
    SecurityContext?: SecurityContext | null;
    /** 安全组ID */
    SecurityGroupIds?: string[];
    /** 返回容器组创建状态：Pending，Running，Succeeded，Failed。其中：Failed （运行失败）指的容器组退出，RestartPolilcy为Never， 有容器exitCode非0；Succeeded（运行成功）指的是容器组退出了，RestartPolicy为Never或onFailure，所有容器exitCode都为0；Failed和Succeeded这两种状态都会停止运行，停止计费。Pending是创建中，Running是 运行中。 */
    Status?: string;
    /** 实例所属子网Id */
    SubnetId?: string;
    /** 容器全部成功退出后的时间 */
    SucceededTime?: string;
    /** 实例所属VPC的Id */
    VpcId?: string;
  }

  /** EksCi地域信息 */
  interface EksCiRegionInfo {
    /** 地域别名，形如gz */
    Alias?: string;
    /** 地域名，形如ap-guangzhou */
    RegionName?: string;
    /** 地域ID */
    RegionId?: number;
  }

  /** EKS Instance Volume, 可选包括CbsVolume和NfsVolume */
  interface EksCiVolume {
    /** Cbs Volume */
    CbsVolumes?: CbsVolume[] | null;
    /** Nfs Volume */
    NfsVolumes?: NfsVolume[] | null;
  }

  /** 弹性集群信息 */
  interface EksCluster {
    /** 集群Id */
    ClusterId: string;
    /** 集群名称 */
    ClusterName: string;
    /** Vpc Id */
    VpcId: string;
    /** 子网列表 */
    SubnetIds: string[];
    /** k8s 版本号 */
    K8SVersion: string;
    /** 集群状态(running 运行中，initializing 初始化中，Failed 异常，Idling 空闲中，Activating 激活中，Terminating 删除中) */
    Status?: string;
    /** 集群描述信息 */
    ClusterDesc?: string;
    /** 集群创建时间 */
    CreatedTime?: string;
    /** Service 子网Id */
    ServiceSubnetId?: string;
    /** 集群的自定义dns 服务器信息 */
    DnsServers?: DnsServerConf[];
    /** 将来删除集群时是否要删除cbs。默认为 FALSE */
    NeedDeleteCbs?: boolean;
    /** 是否在用户集群内开启Dns。默认为TRUE */
    EnableVpcCoreDNS?: boolean;
    /** 标签描述列表。 */
    TagSpecification?: TagSpecification[] | null;
  }

  /** 描述了实例的增强服务启用情况与其设置，如云安全，云监控等实例 Agent */
  interface EnhancedService {
    /** 开启云安全服务。若不指定该参数，则默认开启云安全服务。 */
    SecurityService?: RunSecurityServiceEnabled;
    /** 开启云监控服务。若不指定该参数，则默认开启云监控服务。 */
    MonitorService?: RunMonitorServiceEnabled;
    /** 开启云自动化助手服务（TencentCloud Automation Tools，TAT）。若不指定该参数，则公共镜像默认开启云自动化助手服务，其他镜像默认不开启云自动化助手服务。 */
    AutomationService?: RunAutomationServiceEnabled;
  }

  /** EnvironmentVariable */
  interface EnvironmentVariable {
    /** key */
    Name?: string;
    /** val */
    Value?: string;
  }

  /** 元数据拆分存储Etcd配置 */
  interface EtcdOverrideConfig {
    /** k8s资源，支持核心资源，控制类资源，配置及敏感资源 */
    Resources: string[];
  }

  /** 服务事件 */
  interface Event {
    /** pod名称 */
    PodName?: string;
    /** 事件原因内容 */
    Reason?: string;
    /** 事件类型 */
    Type?: string;
    /** 事件出现次数 */
    Count?: number;
    /** 事件第一次出现时间 */
    FirstTimestamp?: string;
    /** 事件最后一次出现时间 */
    LastTimestamp?: string;
    /** 事件内容 */
    Message?: string;
  }

  /** 探针在容器内执行检测命令参数类型 */
  interface Exec {
    /** 容器内检测的命令 */
    Commands?: string[] | null;
  }

  /** 已经存在的实例信息 */
  interface ExistedInstance {
    /** 实例是否支持加入集群(TRUE 可以加入 FALSE 不能加入)。 */
    Usable?: boolean;
    /** 实例不支持加入的原因。 */
    UnusableReason?: string;
    /** 实例已经所在的集群ID。 */
    AlreadyInCluster?: string;
    /** 实例ID形如：ins-e55paxnt。 */
    InstanceId?: string;
    /** 实例名称。 */
    InstanceName?: string;
    /** 实例主网卡的内网IP列表。 */
    PrivateIpAddresses?: string[] | null;
    /** 实例主网卡的公网IP列表。 */
    PublicIpAddresses?: string[] | null;
    /** 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
    CreatedTime?: string;
    /** 实例的CPU核数，单位：核。 */
    CPU?: number;
    /** 实例内存容量，单位：GB。 */
    Memory?: number;
    /** 操作系统名称。 */
    OsName?: string;
    /** 实例机型。 */
    InstanceType?: string;
    /** 伸缩组ID */
    AutoscalingGroupId?: string;
    /** 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。 */
    InstanceChargeType?: string;
    /** 实例的IPv6地址。 */
    IPv6Addresses?: string[] | null;
  }

  /** 不同角色的已存在节点配置参数 */
  interface ExistedInstancesForNode {
    /** 节点角色，取值:MASTER_ETCD, WORKER。MASTER_ETCD只有在创建 INDEPENDENT_CLUSTER 独立集群时需要指定。MASTER_ETCD节点数量为3～7，建议为奇数。MASTER_ETCD最小配置为4C8G。 */
    NodeRole: string;
    /** 已存在实例的重装参数 */
    ExistedInstancesPara: ExistedInstancesPara;
    /** 节点高级设置，会覆盖集群级别设置的InstanceAdvancedSettings（当前只对节点自定义参数ExtraArgs生效） */
    InstanceAdvancedSettingsOverride?: InstanceAdvancedSettings;
    /** 自定义模式集群，可指定每个节点的pod数量 */
    DesiredPodNumbers?: number[];
  }

  /** 已存在实例的重装参数 */
  interface ExistedInstancesPara {
    /** 集群ID */
    InstanceIds: string[];
    /** 实例额外需要设置参数信息（目前后端暂不支持此字段，我们将在未来的版本中实现） */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。 */
    EnhancedService?: EnhancedService;
    /** 节点登录信息（目前仅支持使用Password或者单个KeyIds） */
    LoginSettings?: LoginSettings;
    /** 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
    SecurityGroupIds?: string[];
    /** 重装系统时，可以指定修改实例的HostName(集群为HostName模式时，此参数必传，规则名称除不支持大写字符外与[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口HostName一致) */
    HostName?: string;
  }

  /** 创建集群时，选择安装的扩展组件的信息 */
  interface ExtensionAddon {
    /** 扩展组件名称 */
    AddonName: string;
    /** 扩展组件信息(扩展组件资源对象的json字符串描述) */
    AddonParam: string;
  }

  /** 修改标签失败的资源 */
  interface FailedResource {
    /** 资源六段式 */
    Resource?: string;
    /** 执行失败的原因 */
    Error?: string;
  }

  /** 过滤器 */
  interface Filter {
    /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
    Name: string;
    /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
    Values: string[];
  }

  /** GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本以及是否开启MIG */
  interface GPUArgs {
    /** CUDA版本信息 */
    CUDA?: DriverVersion;
    /** cuDNN版本信息 */
    CUDNN?: CUDNN;
    /** 自定义GPU驱动信息 */
    CustomDriver?: CustomDriver;
    /** GPU驱动版本信息 */
    Driver?: DriverVersion;
    /** 是否启用MIG特性 */
    MIGEnable?: boolean;
  }

  /** Probe中的HttpGet */
  interface HttpGet {
    /** HttpGet检测的路径 */
    Path: string | null;
    /** HttpGet检测的端口号 */
    Port: number | null;
    /** HTTP or HTTPS */
    Scheme: string | null;
  }

  /** IP 地址 */
  interface IPAddress {
    /** Ip 地址的类型。可为 advertise, public 等 */
    Type: string;
    /** Ip 地址 */
    Ip: string;
    /** 网络端口 */
    Port: number;
  }

  /** 镜像缓存的信息 */
  interface ImageCache {
    /** 镜像缓存Id */
    ImageCacheId?: string;
    /** 镜像缓存名称 */
    ImageCacheName?: string;
    /** 镜像缓存大小。单位：GiB */
    ImageCacheSize?: number;
    /** 镜像缓存包含的镜像列表 */
    Images?: string[];
    /** 创建时间 */
    CreationTime?: string;
    /** 到期时间 */
    ExpireDateTime?: string;
    /** 镜像缓存事件信息 */
    Events?: ImageCacheEvent[];
    /** 最新一次匹配到镜像缓存的时间 */
    LastMatchedTime?: string;
    /** 镜像缓存对应的快照Id */
    SnapshotId?: string;
    /** 镜像缓存状态，可能取值：Pending：创建中Ready：创建完成Failed：创建失败Updating：更新中UpdateFailed：更新失败只有状态为Ready时，才能正常使用镜像缓存 */
    Status?: string;
    /** 镜像缓存保留时间天数，过期将会自动清理，默认为0，永不过期。 */
    RetentionDays?: number;
    /** 镜像拉取凭证 */
    ImageRegistryCredentials?: ImageRegistryCredential[];
    /** 腾讯云标签 */
    Tags?: Tag[];
  }

  /** 镜像缓存的事件 */
  interface ImageCacheEvent {
    /** 镜像缓存Id */
    ImageCacheId?: string;
    /** 事件类型, Normal或者Warning */
    Type?: string;
    /** 事件原因简述 */
    Reason?: string;
    /** 事件原因详述 */
    Message?: string;
    /** 事件第一次出现时间 */
    FirstTimestamp?: string;
    /** 事件最后一次出现时间 */
    LastTimestamp?: string;
  }

  /** 镜像信息 */
  interface ImageInstance {
    /** 镜像别名 */
    Alias?: string;
    /** 操作系统名称 */
    OsName?: string;
    /** 镜像ID */
    ImageId?: string;
    /** 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值) */
    OsCustomizeType?: string;
  }

  /** 从镜像仓库拉取镜像的凭据 */
  interface ImageRegistryCredential {
    /** 镜像仓库地址 */
    Server?: string;
    /** 用户名 */
    Username?: string;
    /** 密码 */
    Password?: string;
    /** ImageRegistryCredential的名字 */
    Name?: string;
  }

  /** 集群的实例信息 */
  interface Instance {
    /** 实例ID */
    InstanceId?: string;
    /** 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER */
    InstanceRole?: string;
    /** 实例异常(或者处于初始化中)的原因 */
    FailedReason?: string;
    /** 实例的状态（running 运行中，initializing 初始化中，failed 异常） */
    InstanceState?: string;
    /** 实例是否封锁状态 */
    DrainStatus?: string;
    /** 节点配置 */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /** 添加时间 */
    CreatedTime?: string;
    /** 节点内网IP */
    LanIP?: string | null;
    /** 资源池ID */
    NodePoolId?: string;
    /** 自动伸缩组ID */
    AutoscalingGroupId?: string;
  }

  /** 描述了k8s集群相关配置与信息。 */
  interface InstanceAdvancedSettings {
    /** 该节点属于podCIDR大小自定义模式时，可指定节点上运行的pod数量上限 */
    DesiredPodNumber: number | null;
    /** GPU驱动相关参数,相关的GPU参数获取:https://cloud.tencent.com/document/api/213/15715 */
    GPUArgs: GPUArgs | null;
    /** base64 编码的用户脚本，在初始化节点之前执行，目前只对添加已有节点生效 */
    PreStartUserScript: string | null;
    /** 节点污点 */
    Taints: Taint[] | null;
    /** 数据盘挂载点, 默认不挂载数据盘. 已格式化的 ext3，ext4，xfs 文件系统的数据盘将直接挂载，其他文件系统或未格式化的数据盘将自动格式化为ext4 (tlinux系统格式化成xfs)并挂载，请注意备份数据! 无数据盘或有多块数据盘的云主机此设置不生效。注意：多盘场景请使用下方的DataDisks数据结构，设置对应的云盘类型、云盘大小、挂载路径、是否格式化等信息。 */
    MountTarget?: string | null;
    /** dockerd --graph 指定值。若未指定此参数，将使用内置默认路径 /var/lib/docker 作为存储根目录。 */
    DockerGraphPath?: string | null;
    /** base64 编码的用户脚本, 此脚本会在 k8s 组件运行后执行, 需要用户保证脚本的可重入及重试逻辑, 脚本及其生成的日志文件可在节点的 /data/ccs_userscript/ 路径查看, 如果要求节点需要在进行初始化完成后才可加入调度, 可配合 unschedulable 参数使用, 在 userScript 最后初始化完成后, 添加 kubectl uncordon nodename --kubeconfig=/root/.kube/config 命令使节点加入调度 */
    UserScript?: string | null;
    /** 设置加入的节点是否参与调度，默认值为0，表示参与调度；非0表示不参与调度, 待节点初始化完成之后, 可执行kubectl uncordon nodename使node加入调度. */
    Unschedulable?: number;
    /** 节点Label数组 */
    Labels?: Label[] | null;
    /** 多盘数据盘挂载信息：新建节点时请确保购买CVM的参数传递了购买多个数据盘的信息，如CreateClusterInstances API的RunInstancesPara下的DataDisks也需要设置购买多个数据盘, 具体可以参考CreateClusterInstances接口的添加集群节点(多块数据盘)样例；添加已有节点时，请确保填写的分区信息在节点上真实存在 */
    DataDisks?: DataDisk[] | null;
    /** 节点相关的自定义参数信息 */
    ExtraArgs?: InstanceExtraArgs;
  }

  /** 包年包月配置 */
  interface InstanceChargePrepaid {
    /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。 */
    Period: number;
    /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
    RenewFlag?: string;
  }

  /** CVM实例数据盘挂载配置 */
  interface InstanceDataDiskMountSetting {
    /** CVM实例类型 */
    InstanceType: string;
    /** 数据盘挂载信息 */
    DataDisks: DataDisk[];
    /** CVM实例所属可用区 */
    Zone: string;
  }

  /** 节点自定义参数 */
  interface InstanceExtraArgs {
    /** kubelet自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"] */
    Kubelet?: string[] | null;
  }

  /** 节点升级过程中集群当前状态 */
  interface InstanceUpgradeClusterStatus {
    /** pod总数 */
    PodTotal?: number;
    /** NotReady pod总数 */
    NotReadyPod?: number;
  }

  /** 某个节点升级前检查结果 */
  interface InstanceUpgradePreCheckResult {
    /** 检查是否通过 */
    CheckPass?: boolean;
    /** 检查项数组 */
    Items?: InstanceUpgradePreCheckResultItem[];
    /** 本节点独立pod列表 */
    SinglePods?: string[];
  }

  /** 节点升级检查项结果 */
  interface InstanceUpgradePreCheckResultItem {
    /** 工作负载的命名空间 */
    Namespace?: string;
    /** 工作负载类型 */
    WorkLoadKind?: string;
    /** 工作负载名称 */
    WorkLoadName?: string;
    /** 驱逐节点前工作负载running的pod数目 */
    Before?: number;
    /** 驱逐节点后工作负载running的pod数目 */
    After?: number;
    /** 工作负载在本节点上的pod列表 */
    Pods?: string[];
  }

  /** 某个节点的升级进度 */
  interface InstanceUpgradeProgressItem {
    /** 节点instanceID */
    InstanceID?: string;
    /** 任务生命周期process 运行中paused 已停止pauing 正在停止done 已完成timeout 已超时aborted 已取消pending 还未开始 */
    LifeState?: string;
    /** 升级开始时间 */
    StartAt?: string;
    /** 升级结束时间 */
    EndAt?: string;
    /** 升级前检查结果 */
    CheckResult?: InstanceUpgradePreCheckResult;
    /** 升级步骤详情 */
    Detail?: TaskStepInfo[];
  }

  /** kms加密参数 */
  interface KMSConfiguration {
    /** kms id，可以在密钥管理控制台获取 */
    KeyId?: string;
    /** kms 地域 */
    KmsRegion?: string;
  }

  /** 集群巡检诊断的默认目录类型 */
  interface KubeJarvisStateCatalogue {
    /** 目录级别，支持参数：first：一级目录second：二级目录 */
    CatalogueLevel?: string;
    /** 目录名 */
    CatalogueName?: string;
  }

  /** 集群巡检诊断结果 */
  interface KubeJarvisStateDiagnostic {
    /** 诊断开始时间 */
    StartTime?: string;
    /** 诊断结束时间 */
    EndTime?: string;
    /** 诊断目录 */
    Catalogues?: KubeJarvisStateCatalogue[];
    /** 诊断类型 */
    Type?: string;
    /** 诊断名称 */
    Name?: string;
    /** 诊断描述 */
    Desc?: string;
    /** 诊断结果列表 */
    Results?: KubeJarvisStateResultsItem[];
    /** 诊断结果统计 */
    Statistics?: KubeJarvisStateStatistic[];
  }

  /** 集群巡检诊断概览 */
  interface KubeJarvisStateDiagnosticOverview {
    /** 诊断目录 */
    Catalogues?: KubeJarvisStateCatalogue[];
    /** 诊断结果统计 */
    Statistics?: KubeJarvisStateStatistic[];
  }

  /** 集群巡检检查结果概览 */
  interface KubeJarvisStateInspectionOverview {
    /** 集群ID */
    ClusterId?: string;
    /** 诊断结果统计 */
    Statistics?: KubeJarvisStateStatistic[];
    /** 诊断结果详情 */
    Diagnostics?: KubeJarvisStateDiagnosticOverview[];
  }

  /** 集群巡检检查结果 */
  interface KubeJarvisStateInspectionResult {
    /** 集群ID */
    ClusterId?: string;
    /** 诊断开始时间 */
    StartTime?: string;
    /** 诊断结束时间 */
    EndTime?: string;
    /** 诊断结果统计 */
    Statistics?: KubeJarvisStateStatistic[];
    /** 诊断结果详情 */
    Diagnostics?: KubeJarvisStateDiagnostic[];
    /** 查询巡检报告相关报错 */
    Error?: string;
  }

  /** 集群巡检结果历史列表 */
  interface KubeJarvisStateInspectionResultsItem {
    /** 巡检结果名称 */
    Name?: string;
    /** 诊断结果统计 */
    Statistics?: KubeJarvisStateStatistic[];
  }

  /** 集群巡检诊断对象信息 */
  interface KubeJarvisStateResultObjInfo {
    /** 对象属性名称 */
    PropertyName?: string;
    /** 对象属性值 */
    PropertyValue?: string;
  }

  /** 集群巡检诊断结果详情信息 */
  interface KubeJarvisStateResultsItem {
    /** 诊断结果级别 */
    Level?: string;
    /** 诊断对象名 */
    ObjName?: string;
    /** 诊断对象信息 */
    ObjInfo?: KubeJarvisStateResultObjInfo[] | null;
    /** 诊断项标题 */
    Title?: string;
    /** 诊断项描述 */
    Desc?: string;
    /** 诊断建议 */
    Proposal?: string | null;
    /** 诊断建议文档链接 */
    ProposalDocUrl?: string;
    /** 诊断建议文档名称 */
    ProposalDocName?: string;
  }

  /** 集群巡检统计结果 */
  interface KubeJarvisStateStatistic {
    /** 诊断结果的健康水平 */
    HealthyLevel?: string;
    /** 诊断结果的统计 */
    Count?: number;
  }

  /** k8s中标签，一般以数组的方式存在 */
  interface Label {
    /** map表中的Name */
    Name: string;
    /** map表中的Value */
    Value: string;
  }

  /** 健康探针 */
  interface LivenessOrReadinessProbe {
    /** 探针参数 */
    Probe: Probe;
    /** 容器内检测命令参数 */
    Exec?: Exec | null;
    /** HttpGet检测参数 */
    HttpGet?: HttpGet;
    /** TcpSocket检测的端口参数 */
    TcpSocket?: TcpSocket | null;
  }

  /** 描述了实例登录相关配置与信息。 */
  interface LoginSettings {
    /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。 */
    Password?: string;
    /** 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。 */
    KeyIds?: string[] | null;
    /** 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为true。取值范围：true：表示保持镜像的登录设置false：表示不保持镜像的登录设置默认取值：false。 */
    KeepImageLogin?: string;
  }

  /** 手动加入的节点 */
  interface ManuallyAdded {
    /** 加入中的节点数量 */
    Joining?: number;
    /** 初始化中的节点数量 */
    Initializing?: number;
    /** 正常的节点数量 */
    Normal?: number;
    /** 节点总数 */
    Total?: number;
  }

  /** EKS Instance Nfs Volume */
  interface NfsVolume {
    /** nfs volume 数据卷名称 */
    Name: string;
    /** NFS 数据卷路径 */
    Path: string;
    /** NFS 服务器地址 */
    Server: string;
    /** 默认为 False */
    ReadOnly?: boolean;
  }

  /** 节点统计列表 */
  interface NodeCountSummary {
    /** 手动管理的节点 */
    ManuallyAdded?: ManuallyAdded;
    /** 自动管理的节点 */
    AutoscalingAdded?: AutoscalingAdded;
  }

  /** 节点池描述 */
  interface NodePool {
    /** NodePoolId 资源池id */
    NodePoolId?: string;
    /** Name 资源池名称 */
    Name?: string;
    /** ClusterInstanceId 集群实例id */
    ClusterInstanceId?: string;
    /** LifeState 状态，当前节点池生命周期状态包括：creating，normal，updating，deleting，deleted */
    LifeState?: string;
    /** LaunchConfigurationId 配置 */
    LaunchConfigurationId?: string;
    /** AutoscalingGroupId 分组id */
    AutoscalingGroupId?: string;
    /** Labels 标签 */
    Labels?: Label[];
    /** Taints 污点标记 */
    Taints?: Taint[];
    /** 节点 Annotation 列表 */
    Annotations?: AnnotationValue[];
    /** NodeCountSummary 节点列表 */
    NodeCountSummary?: NodeCountSummary;
    /** 状态信息 */
    AutoscalingGroupStatus?: string;
    /** 最大节点数量 */
    MaxNodesNum?: number;
    /** 最小节点数量 */
    MinNodesNum?: number;
    /** 期望的节点数量 */
    DesiredNodesNum?: number;
    /** 运行时描述 */
    RuntimeConfig?: RuntimeConfig | null;
    /** 节点池osName */
    NodePoolOs?: string;
    /** 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值) */
    OsCustomizeType?: string;
    /** 镜像id */
    ImageId?: string;
    /** 集群属于节点podCIDR大小自定义模式时，节点池需要带上pod数量属性 */
    DesiredPodNum?: number;
    /** 用户自定义脚本 */
    UserScript?: string;
    /** 资源标签 */
    Tags?: Tag[] | null;
    /** 删除保护开关 */
    DeletionProtection?: boolean;
    /** 节点配置 */
    ExtraArgs?: InstanceExtraArgs | null;
    /** GPU驱动相关参数 */
    GPUArgs?: GPUArgs | null;
    /** dockerd --graph 指定值, 默认为 /var/lib/docker */
    DockerGraphPath?: string;
    /** 多盘数据盘挂载信息：新建节点时请确保购买CVM的参数传递了购买多个数据盘的信息，如CreateClusterInstances API的RunInstancesPara下的DataDisks也需要设置购买多个数据盘, 具体可以参考CreateClusterInstances接口的添加集群节点(多块数据盘)样例；添加已有节点时，请确保填写的分区信息在节点上真实存在 */
    DataDisks?: DataDisk[] | null;
    /** 是否不可调度 */
    Unschedulable?: number;
    /** 用户自定义脚本,在UserScript前执行 */
    PreStartUserScript?: string;
  }

  /** 加入存量节点时的节点池选项 */
  interface NodePoolOption {
    /** 是否加入节点池 */
    AddToNodePool?: boolean;
    /** 节点池id */
    NodePoolId?: string;
    /** 是否继承节点池相关配置 */
    InheritConfigurationFromNodePool?: boolean;
  }

  /** NodePool的运行时配置 */
  interface NodePoolRuntime {
    /** 节点池ID */
    NodePoolId?: string;
    /** 运行时类型 */
    RuntimeType?: string;
    /** 运行时版本 */
    RuntimeVersion?: string;
    /** 节点池名称 */
    NodePoolName?: string;
  }

  /** OIDC认证相关配置 */
  interface OIDCConfigAuthenticationOptions {
    /** 创建身份提供商 */
    AutoCreateOIDCConfig?: boolean | null;
    /** 创建身份提供商的ClientId */
    AutoCreateClientId?: string[] | null;
    /** 创建PodIdentityWebhook组件 */
    AutoInstallPodIdentityWebhookAddon?: boolean | null;
  }

  /** 操作系统描述 */
  interface OSImage {
    /** os聚合名称 */
    SeriesName?: string;
    /** os别名 */
    Alias?: string;
    /** os名称 */
    OsName?: string;
    /** 操作系统类型(分为定制和非定制，取值分别为:DOCKER_CUSTOMIZE、GENERAL) */
    OsCustomizeType?: string;
    /** os是否下线(online表示在线,offline表示下线) */
    Status?: string;
    /** 镜像id */
    ImageId?: string;
  }

  /** 策略实例信息 */
  interface OpenConstraintInfo {
    /** 策略实例关联事件数 */
    EventNums?: number;
    /** 策略实例名称 */
    Name?: string;
    /** 实例yaml详情base64编码 */
    YamlDetail?: string;
  }

  /** opa策略信息 */
  interface OpenPolicyInfo {
    /** 策略分类：cluster集群策略、node节点策略、namespace命名空间策略、configuration配置相关策略、compute计算资源策略、storage存储资源策略、network网络资源策略 */
    PolicyCategory?: string;
    /** 策略中文名称 */
    PolicyName?: string;
    /** 策略描述 */
    PolicyDesc?: string;
    /** 策略运行模式：dryrun空跑不生效，deny拦截生效 */
    EnforcementAction?: string;
    /** 关联的事件数量(最近7d) */
    EventNums?: number;
    /** 策略英文名称 */
    Name?: string;
    /** 策略模板类型，支持的类型如下：优选策略：blocknamespacedeletion：存在pod的命名空间不允许删除blockcrddeletion：存在cr的crd不允许删除blockmountablevolumetype：禁止挂载指定的volume类型disallowalwayspullimage：禁止镜像拉取策略使用Alwaystkeallowedrepos：容器镜像来源限制blockunknowndaemonset：禁止未知的DaemonSet部署blockpvdeletion：PV处于绑定状态则不允许删除corednsprotect：CoreDNS组件删除保护blockschedulablenodedelete：非封锁状态的Node不允许删除resourcesdeletionprotection：资源删除保护tkeenirequest：弹性网卡资源配置限制blockworkloadcrossversionupgrade：工作负载镜像版本升级策略管控blockserviceaccountgranthighprivilegepermission：ServiceAccount权限管控blockclusteripserviceexist：不允许Service为ClusterIP类型blockinternetaccess：禁止公网访问assign：禁止访问Metadata Serverblockhostnetworkpod：禁止创建HostNetwork类型Pod可选策略：blockvolumemountpath：禁止容器挂载指定的目录k8sallowedrepos：容器镜像必须以指定字符串列表中的字符串开头k8sblockendpointeditdefaultrole：禁止默认ClusterRole修改Endpointsk8sblockloadbalancer：不允许Service为LoadBalancer类型k8sblocknodeport：不允许Service为NodePort类型k8sblockwildcardingress：禁止ingress配置空白或通配符类型的hostnamek8scontainerlimits：限制容器必须设置CPU和内存Limitk8scontainerratios：限制CPU和内存的Request与Limit的最大比率k8scontainerrequests：限制CPU和内存的Request必须设置且小于配置的最大值k8srequiredresources：必须配置内存的Limit，CPU和内存的Requestk8sdisallowanonymous：不允许将白名单以外的ClusterRole和Role关联到system:anonymous User和system:unauthenticated Groupk8sdisallowedtags：约束容器镜像tagk8sexternalips：限制服务externalIP仅为允许的IP地址列表k8simagedigests：容器镜像必须包含digestnoupdateserviceaccount：拒绝白名单外的资源更新ServiceAccountk8sreplicalimits：要求具有spec.replicas字段的对象（Deployments、ReplicaSets等）在定义的范围内k8srequiredannotations：要求资源包含指定的annotations，其值与提供的正则表达式匹配k8srequiredlabels：要求资源包含指定的标签，其值与提供的正则表达式匹配k8srequiredprobes：要求Pod具有Readiness或Liveness Probek8spspautomountserviceaccounttokenpod：约束容器不能设置automountServiceAccountToken为truek8spspallowprivilegeescalationcontainer：约束PodSecurityPolicy中的allowPrivilegeEscalation字段为falsek8spspapparmor：约束AppArmor字段列表k8spspcapabilities：限制PodSecurityPolicy中的allowedCapabilities和requiredDropCapabilities字段k8spspflexvolumes：约束PodSecurityPolicy中的allowedFlexVolumes字段类型k8spspforbiddensysctls：约束PodSecurityPolicy中的sysctls字段不能使用的namek8spspfsgroup：控制PodSecurityPolicy中的fsGroup字段在限制范围内k8spsphostfilesystem：约束PodSecurityPolicy中的hostPath字段的参数k8spsphostnamespace：限制PodSecurityPolicy中的hostPID和hostIPC字段k8spsphostnetworkingports：约束PodSecurityPolicy中的hostNetwork和hostPorts字段k8spspprivilegedcontainer：禁止PodSecurityPolicy中的privileged字段为truek8spspprocmount：约束PodSecurityPolicy中的allowedProcMountTypes字段k8spspreadonlyrootfilesystem：约束PodSecurityPolicy中的readOnlyRootFilesystem字段k8spspseccomp：约束PodSecurityPolicy上的seccomp.security.alpha.kubernetes.io/allowedProfileNames注解k8spspselinuxv2：约束Pod定义SELinux配置的允许列表k8spspallowedusers：约束PodSecurityPolicy中的runAsUser、runAsGroup、supplementalGroups和fsGroup字段k8spspvolumetypes：约束PodSecurityPolicy中的volumes字段类型 */
    Kind?: string;
    /** 策略开关状态：open打开，close关闭 */
    EnabledStatus?: string;
    /** 策略的实例的yaml示例base64编码 */
    ConstraintYamlExample?: string;
    /** 策略关联的实例列表 */
    OpenConstraintInfoList?: OpenConstraintInfo[] | null;
  }

  /** opa策略开关 */
  interface OpenPolicySwitch {
    /** 策略运行模式：dryrun空跑不生效，deny拦截生效 */
    EnforcementAction: string;
    /** 策略英文名称 */
    Name: string;
    /** 策略模板类型，可选值：优选策略：blocknamespacedeletion：存在pod的命名空间不允许删除blockcrddeletion：存在cr的crd不允许删除blockmountablevolumetype：禁止挂载指定的volume类型disallowalwayspullimage：禁止镜像拉取策略使用Alwaystkeallowedrepos：容器镜像来源限制blockunknowndaemonset：禁止未知的DaemonSet部署blockpvdeletion：PV处于绑定状态则不允许删除corednsprotect：CoreDNS组件删除保护blockschedulablenodedelete：非封锁状态的Node不允许删除resourcesdeletionprotection：资源删除保护tkeenirequest：弹性网卡资源配置限制blockworkloadcrossversionupgrade：工作负载镜像版本升级策略管控blockserviceaccountgranthighprivilegepermission：ServiceAccount权限管控blockclusteripserviceexist：不允许Service为ClusterIP类型blockinternetaccess：禁止公网访问assign：禁止访问Metadata Serverblockhostnetworkpod：禁止创建HostNetwork类型Pod可选策略：blockvolumemountpath：禁止容器挂载指定的目录k8sallowedrepos：容器镜像必须以指定字符串列表中的字符串开头k8sblockendpointeditdefaultrole：禁止默认ClusterRole修改Endpointsk8sblockloadbalancer：不允许Service为LoadBalancer类型k8sblocknodeport：不允许Service为NodePort类型k8sblockwildcardingress：禁止ingress配置空白或通配符类型的hostnamek8scontainerlimits：限制容器必须设置CPU和内存Limitk8scontainerratios：限制CPU和内存的Request与Limit的最大比率k8scontainerrequests：限制CPU和内存的Request必须设置且小于配置的最大值k8srequiredresources：必须配置内存的Limit，CPU和内存的Requestk8sdisallowanonymous：不允许将白名单以外的ClusterRole和Role关联到system:anonymous User和system:unauthenticated Groupk8sdisallowedtags：约束容器镜像tagk8sexternalips：限制服务externalIP仅为允许的IP地址列表k8simagedigests：容器镜像必须包含digestnoupdateserviceaccount：拒绝白名单外的资源更新ServiceAccountk8sreplicalimits：要求具有spec.replicas字段的对象（Deployments、ReplicaSets等）在定义的范围内k8srequiredannotations：要求资源包含指定的annotations，其值与提供的正则表达式匹配k8srequiredlabels：要求资源包含指定的标签，其值与提供的正则表达式匹配k8srequiredprobes：要求Pod具有Readiness或Liveness Probek8spspautomountserviceaccounttokenpod：约束容器不能设置automountServiceAccountToken为truek8spspallowprivilegeescalationcontainer：约束PodSecurityPolicy中的allowPrivilegeEscalation字段为falsek8spspapparmor：约束AppArmor字段列表k8spspcapabilities：限制PodSecurityPolicy中的allowedCapabilities和requiredDropCapabilities字段k8spspflexvolumes：约束PodSecurityPolicy中的allowedFlexVolumes字段类型k8spspforbiddensysctls：约束PodSecurityPolicy中的sysctls字段不能使用的namek8spspfsgroup：控制PodSecurityPolicy中的fsGroup字段在限制范围内k8spsphostfilesystem：约束PodSecurityPolicy中的hostPath字段的参数k8spsphostnamespace：限制PodSecurityPolicy中的hostPID和hostIPC字段k8spsphostnetworkingports：约束PodSecurityPolicy中的hostNetwork和hostPorts字段k8spspprivilegedcontainer：禁止PodSecurityPolicy中的privileged字段为truek8spspprocmount：约束PodSecurityPolicy中的allowedProcMountTypes字段k8spspreadonlyrootfilesystem：约束PodSecurityPolicy中的readOnlyRootFilesystem字段k8spspseccomp：约束PodSecurityPolicy上的seccomp.security.alpha.kubernetes.io/allowedProfileNames注解k8spspselinuxv2：约束Pod定义SELinux配置的允许列表k8spspallowedusers：约束PodSecurityPolicy中的runAsUser、runAsGroup、supplementalGroups和fsGroup字段k8spspvolumetypes：约束PodSecurityPolicy中的volumes字段类型 */
    Kind: string;
    /** 策略开关状态：open打开，close关闭 */
    EnabledStatus?: string;
    /** 策略关联的实例列表 */
    OpenConstraintInfoList?: OpenConstraintInfo[];
  }

  /** 可选运行时 */
  interface OptionalRuntimes {
    /** 运行时类型 */
    RuntimeType?: string;
    /** 运行时版本列表 */
    RuntimeVersions?: string[];
    /** 该类型的默认运行时版本 */
    DefaultVersion?: string;
  }

  /** 应用市场安装的Pending应用 */
  interface PendingRelease {
    /** 应用状态详情 */
    Condition?: string;
    /** 创建时间 */
    CreatedTime?: string;
    /** 应用ID */
    ID?: string;
    /** 应用名称 */
    Name?: string;
    /** 应用命名空间 */
    Namespace?: string;
    /** 应用状态(参考helm的发布状态： unknown, deployed, uninstalled, superseded, failed, uninstalling, pending-install, pending-upgrade 或 pending-rollback) */
    Status?: string;
    /** 更新时间 */
    UpdatedTime?: string;
  }

  /** Pod计费信息 */
  interface PodChargeInfo {
    /** Pod计费开始时间 */
    StartTime?: string;
    /** Pod的Uid */
    Uid?: string;
    /** Pod的CPU */
    Cpu?: number;
    /** Pod的内存 */
    Memory?: number;
    /** Pod类型：intel、amd、v100、t4、a10\*gnv4、a10\*gnv4v等。 */
    Type?: string;
    /** Pod是GPU时，表示GPU卡数 */
    Gpu?: string;
    /** 计费类型PREPAID：Pod调度到包月超级节点POSTPAID_BY_HOUR：按量计费RESERVED_INSTANCE：上个周期被预留券抵扣SPOT：竞价实例TPOD：特惠实例 */
    ChargeType?: string;
    /** 命名空间 */
    Namespace?: string;
    /** Pod名称 */
    Name?: string;
  }

  /** 可被预留券抵扣的 Pod 某种规格的抵扣率 */
  interface PodDeductionRate {
    /** Pod的 CPU */
    Cpu?: number;
    /** Pod 的内存，单位：GiB */
    Memory?: number;
    /** Pod 的类型， intel，amd，windows-common，windows-amd，sa4，sa5，s7，s8，t4，v100，l20，l40，a10\*gnv4，a10\*gnv4v，a10\*pnv4 */
    Type?: string;
    /** Pod 的 GPU 卡数，Pod 类型为 GPU 时有效。 */
    GpuNum?: string;
    /** 这种规格的 Pod总数 */
    TotalNum?: number;
    /** 这种规格的 Pod被预留券抵扣的数量 */
    DeductionNum?: number;
  }

  /** 某机型可支持的最大 VPC-CNI 模式的 Pod 数量 */
  interface PodLimitsByType {
    /** TKE共享网卡非固定IP模式可支持的Pod数量 */
    TKERouteENINonStaticIP?: number;
    /** TKE共享网卡固定IP模式可支持的Pod数量 */
    TKERouteENIStaticIP?: number;
    /** TKE独立网卡模式可支持的Pod数量 */
    TKEDirectENI?: number;
    /** TKE中继网卡模式可支持的Pod数量 */
    TKESubENI?: number;
  }

  /** 机型信息和其可支持的最大VPC-CNI模式Pod数量信息 */
  interface PodLimitsInstance {
    /** 机型所在可用区 */
    Zone?: string;
    /** 机型所属机型族 */
    InstanceFamily?: string;
    /** 实例机型名称 */
    InstanceType?: string;
    /** 机型可支持的最大VPC-CNI模式Pod数量信息 */
    PodLimits?: PodLimitsByType;
  }

  /** Pod所在的节点信息 */
  interface PodNodeInfo {
    /** 集群 ID */
    ClusterId?: string;
    /** 节点 ID */
    NodeName?: string;
    /** 可用区 */
    Zone?: string;
    /** 命名空间 */
    Namespace?: string;
    /** Pod 名称 */
    Name?: string;
  }

  /** 健康检查探测参数 */
  interface Probe {
    /** Minimum consecutive failures for the probe to be considered failed after having succeeded.Defaults to 3. Minimum value is 1. */
    FailureThreshold?: number | null;
    /** Number of seconds after the container has started before liveness probes are initiated. */
    InitialDelaySeconds?: number | null;
    /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
    PeriodSeconds?: number | null;
    /** Minimum consecutive successes for the probe to be considered successful after having failed.Defaults to 1. Must be 1 for liveness. Minimum value is 1. */
    SuccessThreshold?: number | null;
    /** Number of seconds after which the probe times out.Defaults to 1 second. Minimum value is 1. */
    TimeoutSeconds?: number | null;
  }

  /** 托管Prometheus agent信息 */
  interface PrometheusAgentInfo {
    /** 集群类型 */
    ClusterType: string;
    /** 集群id */
    ClusterId: string;
    /** 备注 */
    Describe?: string;
    /** 集群所在地域 */
    Region?: string;
  }

  /** 托管prometheus agent概览 */
  interface PrometheusAgentOverview {
    /** 集群类型 */
    ClusterType?: string;
    /** 集群id */
    ClusterId?: string;
    /** agent状态normal = 正常abnormal = 异常 */
    Status?: string;
    /** 集群名称 */
    ClusterName?: string;
    /** 额外labels本集群的所有指标都会带上这几个label */
    ExternalLabels?: Label[] | null;
    /** 集群所在地域 */
    Region?: string | null;
    /** 集群所在VPC ID */
    VpcId?: string | null;
    /** 记录关联等操作的失败信息 */
    FailedReason?: string | null;
  }

  /** prometheus告警历史 */
  interface PrometheusAlertHistoryItem {
    /** 告警名称 */
    RuleName: string;
    /** 告警开始时间 */
    StartTime: string;
    /** 告警内容 */
    Content: string;
    /** 告警状态 */
    State?: string | null;
    /** 触发的规则名称 */
    RuleItem?: string | null;
    /** 告警渠道的id */
    TopicId?: string | null;
    /** 告警渠道的名称 */
    TopicName?: string | null;
  }

  /** 告警渠道使用自建alertmanager的配置 */
  interface PrometheusAlertManagerConfig {
    /** alertmanager url */
    Url: string;
    /** alertmanager部署所在集群类型 */
    ClusterType?: string | null;
    /** alertmanager部署所在集群ID */
    ClusterId?: string | null;
  }

  /** 托管prometheus告警策略实例 */
  interface PrometheusAlertPolicyItem {
    /** 策略名称 */
    Name: string;
    /** 规则列表 */
    Rules: PrometheusAlertRule[];
    /** 告警策略 id */
    Id?: string | null;
    /** 如果该告警来自模板下发，则TemplateId为模板id */
    TemplateId?: string | null;
    /** 告警渠道，模板中使用可能返回null */
    Notification?: PrometheusNotificationItem | null;
    /** 最后修改时间 */
    UpdatedAt?: string | null;
    /** 如果告警策略来源于用户集群CRD资源定义，则ClusterId为所属集群ID */
    ClusterId?: string | null;
  }

  /** Prometheus告警规则 */
  interface PrometheusAlertRule {
    /** 规则名称 */
    Name: string;
    /** prometheus语句 */
    Rule: string;
    /** 额外标签 */
    Labels: Label[];
    /** 告警发送模板 */
    Template: string;
    /** 持续时间 */
    For: string;
    /** 该条规则的描述信息 */
    Describe?: string | null;
    /** 参考prometheus rule中的annotations */
    Annotations?: Label[] | null;
    /** 告警规则状态 */
    RuleState?: number | null;
  }

  /** 托管prometheus告警配置实例 */
  interface PrometheusAlertRuleDetail {
    /** 规则名称 */
    Name: string;
    /** 规则列表 */
    Rules: PrometheusAlertRule[];
    /** 最后修改时间 */
    UpdatedAt?: string;
    /** 告警渠道 */
    Notification?: PrometheusNotification;
    /** 告警 id */
    Id?: string;
    /** 如果该告警来至模板下发，则TemplateId为模板id */
    TemplateId?: string | null;
    /** 计算周期 */
    Interval?: string | null;
  }

  /** 与云监控融合托管prometheus实例，关联集群基础信息 */
  interface PrometheusClusterAgentBasic {
    /** 地域 */
    Region: string;
    /** 集群类型 */
    ClusterType: string;
    /** 集群ID */
    ClusterId: string;
    /** 是否开启公网CLB */
    EnableExternal: boolean;
    /** 集群内部署组件的pod配置 */
    InClusterPodConfig?: PrometheusClusterAgentPodConfig;
    /** 该集群采集的所有指标都会带上这些labels */
    ExternalLabels?: Label[];
    /** 是否安装默认采集配置 */
    NotInstallBasicScrape?: boolean;
    /** 是否采集指标，true代表drop所有指标，false代表采集默认指标 */
    NotScrape?: boolean;
  }

  /** 关联集群时在集群内部署组件的pod额外配置 */
  interface PrometheusClusterAgentPodConfig {
    /** 是否使用HostNetWork */
    HostNet?: boolean;
    /** 指定pod运行节点 */
    NodeSelector?: Label[];
    /** 容忍污点 */
    Tolerations?: Toleration[];
  }

  /** prometheus配置 */
  interface PrometheusConfigItem {
    /** 名称 */
    Name: string;
    /** 配置内容 */
    Config: string;
    /** 用于出参，如果该配置来至模板，则为模板id */
    TemplateId?: string | null;
  }

  /** 托管prometheus中grafana的信息 */
  interface PrometheusGrafanaInfo {
    /** 是否启用 */
    Enabled?: boolean;
    /** 域名，只有开启外网访问才有效果 */
    Domain?: string;
    /** 内网地址，或者外网地址 */
    Address?: string;
    /** 是否开启了外网访问close = 未开启外网访问opening = 正在开启外网访问open = 已开启外网访问 */
    Internet?: string;
    /** grafana管理员用户名 */
    AdminUser?: string;
  }

  /** 托管prometheus实例概览 */
  interface PrometheusInstanceOverview {
    /** 实例id */
    InstanceId?: string;
    /** 实例名称 */
    Name?: string;
    /** 实例vpcId */
    VpcId?: string;
    /** 实例子网Id */
    SubnetId?: string;
    /** 实例当前的状态prepare_env = 初始化环境install_suit = 安装组件running = 运行中 */
    Status?: string;
    /** COS桶存储 */
    COSBucket?: string;
    /** grafana默认地址，如果开启外网访问得为域名，否则为内网地址 */
    GrafanaURL?: string | null;
    /** 关联集群总数 */
    BoundTotal?: number | null;
    /** 运行正常的集群数 */
    BoundNormal?: number | null;
  }

  /** 托管prometheusV2实例概览 */
  interface PrometheusInstancesOverview {
    /** 实例ID */
    InstanceId?: string;
    /** 实例名 */
    InstanceName?: string;
    /** VPC ID */
    VpcId?: string;
    /** 子网ID */
    SubnetId?: string;
    /** 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:销毁中； 6:已停机； 7: 已删除） */
    InstanceStatus?: number;
    /** 计费状态（1:正常；2:过期; 3:销毁; 4:分配中; 5:分配失败） */
    ChargeStatus?: number | null;
    /** 是否开启 Grafana（0:不开启，1:开启） */
    EnableGrafana?: number;
    /** Grafana 面板 URL */
    GrafanaURL?: string | null;
    /** 实例付费类型（1:试用版；2:预付费） */
    InstanceChargeType?: number;
    /** 规格名称 */
    SpecName?: string | null;
    /** 存储周期 */
    DataRetentionTime?: number | null;
    /** 购买的实例过期时间 */
    ExpireTime?: string | null;
    /** 自动续费标记(0:不自动续费；1:开启自动续费；2:禁止自动续费；-1:无效) */
    AutoRenewFlag?: number | null;
    /** 绑定集群总数 */
    BoundTotal?: number;
    /** 绑定集群正常状态总数 */
    BoundNormal?: number;
  }

  /** prometheus一个job的targets */
  interface PrometheusJobTargets {
    /** 该Job的targets列表 */
    Targets?: PrometheusTarget[];
    /** job的名称 */
    JobName?: string;
    /** targets总数 */
    Total?: number;
    /** 健康的target总数 */
    Up?: number;
  }

  /** amp告警渠道配置 */
  interface PrometheusNotification {
    /** 是否启用 */
    Enabled: boolean;
    /** 收敛时间 */
    RepeatInterval: string;
    /** 生效起始时间 */
    TimeRangeStart: string;
    /** 生效结束时间 */
    TimeRangeEnd: string;
    /** 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。分别代表：短信、邮件、电话、微信 */
    NotifyWay?: string[] | null;
    /** 告警接收组（用户组） */
    ReceiverGroups?: number[] | null;
    /** 电话告警顺序。注：NotifyWay选择CALL，采用该参数。 */
    PhoneNotifyOrder?: number[] | null;
    /** 电话告警次数。注：NotifyWay选择CALL，采用该参数。 */
    PhoneCircleTimes?: number | null;
    /** 电话告警轮内间隔。单位：秒注：NotifyWay选择CALL，采用该参数。 */
    PhoneInnerInterval?: number | null;
    /** 电话告警轮外间隔。单位：秒注：NotifyWay选择CALL，采用该参数。 */
    PhoneCircleInterval?: number | null;
    /** 电话告警触达通知注：NotifyWay选择CALL，采用该参数。 */
    PhoneArriveNotice?: boolean | null;
    /** 通道类型，默认为amp，支持以下ampwebhook */
    Type?: string | null;
    /** 如果Type为webhook, 则该字段为必填项 */
    WebHook?: string | null;
  }

  /** 告警通知渠道配置 */
  interface PrometheusNotificationItem {
    /** 是否启用 */
    Enabled: boolean;
    /** 通道类型，默认为amp，支持以下ampwebhookalertmanager */
    Type: string;
    /** 如果Type为webhook, 则该字段为必填项 */
    WebHook?: string | null;
    /** 如果Type为alertmanager, 则该字段为必填项 */
    AlertManager?: PrometheusAlertManagerConfig | null;
    /** 收敛时间 */
    RepeatInterval?: string;
    /** 生效起始时间 */
    TimeRangeStart?: string;
    /** 生效结束时间 */
    TimeRangeEnd?: string;
    /** 告警通知方式。目前有SMS、EMAIL、CALL、WECHAT方式。 */
    NotifyWay?: string[] | null;
    /** 告警接收组（用户组） */
    ReceiverGroups?: string[] | null;
    /** 电话告警顺序。注：NotifyWay选择CALL，采用该参数。 */
    PhoneNotifyOrder?: number[] | null;
    /** 电话告警次数。注：NotifyWay选择CALL，采用该参数。 */
    PhoneCircleTimes?: number | null;
    /** 电话告警轮内间隔。单位：秒注：NotifyWay选择CALL，采用该参数。 */
    PhoneInnerInterval?: number | null;
    /** 电话告警轮外间隔。单位：秒注：NotifyWay选择CALL，采用该参数。 */
    PhoneCircleInterval?: number | null;
    /** 电话告警触达通知注：NotifyWay选择CALL，采用该参数。 */
    PhoneArriveNotice?: boolean | null;
  }

  /** prometheus聚合规则实例详情，包含所属集群ID */
  interface PrometheusRecordRuleYamlItem {
    /** 实例名称 */
    Name?: string;
    /** 最近更新时间 */
    UpdateTime?: string;
    /** Yaml内容 */
    TemplateId?: string;
    /** 如果该聚合规则来至模板，则TemplateId为模板id */
    Content?: string | null;
    /** 该聚合规则如果来源于用户集群crd资源定义，则ClusterId为所属集群ID */
    ClusterId?: string | null;
  }

  /** prometheus一个抓取目标的信息 */
  interface PrometheusTarget {
    /** 抓取目标的URL */
    Url?: string;
    /** target当前状态,当前支持up = 健康down = 不健康unknown = 未知 */
    State?: string;
    /** target的元label */
    Labels?: Label[];
    /** 上一次抓取的时间 */
    LastScrape?: string;
    /** 上一次抓取的耗时，单位是s */
    ScrapeDuration?: number;
    /** 上一次抓取如果错误，该字段存储错误信息 */
    Error?: string;
  }

  /** 模板实例 */
  interface PrometheusTemp {
    /** 模板名称 */
    Name: string;
    /** 模板维度，支持以下类型instance 实例级别cluster 集群级别 */
    Level: string;
    /** 模板描述 */
    Describe?: string | null;
    /** 当Level为instance时有效，模板中的聚合规则列表 */
    RecordRules?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的ServiceMonitor规则列表 */
    ServiceMonitors?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的PodMonitors规则列表 */
    PodMonitors?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的RawJobs规则列表 */
    RawJobs?: PrometheusConfigItem[] | null;
    /** 模板的ID, 用于出参 */
    TemplateId?: string | null;
    /** 最近更新时间，用于出参 */
    UpdateTime?: string | null;
    /** 当前版本，用于出参 */
    Version?: string | null;
    /** 是否系统提供的默认模板，用于出参 */
    IsDefault?: boolean | null;
    /** 当Level为instance时有效，模板中的告警配置列表 */
    AlertDetailRules?: PrometheusAlertPolicyItem[] | null;
    /** 关联实例数目 */
    TargetsTotal?: number | null;
  }

  /** 云原生Prometheus模板可修改项 */
  interface PrometheusTempModify {
    /** 修改名称 */
    Name?: string;
    /** 修改描述 */
    Describe?: string | null;
    /** 当Level为cluster时有效，模板中的ServiceMonitor规则列表 */
    ServiceMonitors?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的PodMonitors规则列表 */
    PodMonitors?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的RawJobs规则列表 */
    RawJobs?: PrometheusConfigItem[] | null;
    /** 当Level为instance时有效，模板中的聚合规则列表 */
    RecordRules?: PrometheusConfigItem[] | null;
    /** 修改内容，只有当模板类型是Alert时生效 */
    AlertDetailRules?: PrometheusAlertPolicyItem[] | null;
  }

  /** 模板实例 */
  interface PrometheusTemplate {
    /** 模板名称 */
    Name: string;
    /** 模板维度，支持以下类型instance 实例级别cluster 集群级别 */
    Level: string;
    /** 模板描述 */
    Describe?: string | null;
    /** 当Level为instance时有效，模板中的告警配置列表 */
    AlertRules?: PrometheusAlertRule[] | null;
    /** 当Level为instance时有效，模板中的聚合规则列表 */
    RecordRules?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的ServiceMonitor规则列表 */
    ServiceMonitors?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的PodMonitors规则列表 */
    PodMonitors?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的RawJobs规则列表 */
    RawJobs?: PrometheusConfigItem[] | null;
    /** 模板的ID, 用于出参 */
    TemplateId?: string | null;
    /** 最近更新时间，用于出参 */
    UpdateTime?: string | null;
    /** 当前版本，用于出参 */
    Version?: string | null;
    /** 是否系统提供的默认模板，用于出参 */
    IsDefault?: boolean | null;
    /** 当Level为instance时有效，模板中的告警配置列表 */
    AlertDetailRules?: PrometheusAlertRuleDetail[] | null;
  }

  /** 云原生Prometheus模板可修改项 */
  interface PrometheusTemplateModify {
    /** 修改名称 */
    Name?: string;
    /** 修改描述 */
    Describe?: string | null;
    /** 修改内容，只有当模板类型是Alert时生效 */
    AlertRules?: PrometheusAlertRule[] | null;
    /** 当Level为instance时有效，模板中的聚合规则列表 */
    RecordRules?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的ServiceMonitor规则列表 */
    ServiceMonitors?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的PodMonitors规则列表 */
    PodMonitors?: PrometheusConfigItem[] | null;
    /** 当Level为cluster时有效，模板中的RawJobs规则列表 */
    RawJobs?: PrometheusConfigItem[] | null;
    /** 修改内容，只有当模板类型是Alert时生效 */
    AlertDetailRules?: PrometheusAlertRuleDetail[] | null;
  }

  /** 云原生Prometheus模板同步目标 */
  interface PrometheusTemplateSyncTarget {
    /** 目标所在地域 */
    Region: string;
    /** 目标实例 */
    InstanceId: string;
    /** 集群id，只有当采集模板的Level为cluster的时候需要 */
    ClusterId?: string | null;
    /** 最后一次同步时间， 用于出参 */
    SyncTime?: string | null;
    /** 当前使用的模板版本，用于出参 */
    Version?: string | null;
    /** 集群类型，只有当采集模板的Level为cluster的时候需要 */
    ClusterType?: string | null;
    /** 用于出参，实例名称 */
    InstanceName?: string | null;
    /** 用于出参，集群名称 */
    ClusterName?: string | null;
  }

  /** 预留券抵扣详情 */
  interface RIUtilizationDetail {
    /** 预留券ID */
    ReservedInstanceId?: string;
    /** Pod唯一ID */
    EksId?: string;
    /** 集群ID */
    ClusterId?: string;
    /** Pod的名称 */
    Name?: string;
    /** Pod的命名空间 */
    Namespace?: string;
    /** 工作负载类型，如 deployment、statefulset和pod等。 */
    Kind?: string;
    /** 工作负载名称 */
    KindName?: string;
    /** Pod的uid */
    Uid?: string;
    /** 用量开始时间 */
    StartTime?: string;
    /** 用量结束时间 */
    EndTime?: string;
    /** 抵扣资源所属产品 */
    Product?: string;
  }

  /** 地域属性信息 */
  interface RegionInstance {
    /** 地域名称 */
    RegionName?: string;
    /** 地域ID */
    RegionId?: number;
    /** 地域状态\n- alluser: 所有用户可见 */
    Status?: string;
    /** 地域特性开关(按照JSON的形式返回所有属性) */
    FeatureGates?: string;
    /** 地域简称 */
    Alias?: string;
    /** 地域白名单 */
    Remark?: string;
  }

  /** 应用市场部署的应用结构 */
  interface Release {
    /** 应用名称 */
    Name?: string;
    /** 应用命名空间 */
    Namespace?: string;
    /** 应用当前版本 */
    Revision?: string;
    /** 应用状态 */
    Status?: string;
    /** 制品名称 */
    ChartName?: string;
    /** 制品版本 */
    ChartVersion?: string;
    /** 制品应用版本 */
    AppVersion?: string;
    /** 更新时间 */
    UpdatedTime?: string;
    /** 应用描述 */
    Description?: string;
  }

  /** 应用市场的安装应用详情 */
  interface ReleaseDetails {
    /** 应用名称 */
    Name?: string;
    /** 应用所在命名空间 */
    Namespace?: string;
    /** 应用当前版本 */
    Version?: number;
    /** 应用状态 */
    Status?: string;
    /** 应用描述 */
    Description?: string;
    /** 应用提示 */
    Notes?: string;
    /** 用户自定义参数 */
    Config?: string;
    /** 应用资源详情 */
    Manifest?: string;
    /** 应用制品版本 */
    ChartVersion?: string;
    /** 应用制品名称 */
    ChartName?: string;
    /** 应用制品描述 */
    ChartDescription?: string;
    /** 应用制品app版本 */
    AppVersion?: string;
    /** 应用首次部署时间 */
    FirstDeployedTime?: string;
    /** 应用最近部署时间 */
    LastDeployedTime?: string;
    /** 应用参数 */
    ComputedValues?: string;
    /** chart 的来源， tke-market, others */
    ChartFrom?: string;
    /** 第三方chart 的安装地址 */
    ChartURL?: string;
    /** 通过chart 创建的资源 */
    Resources?: string;
  }

  /** 应用市场中部署的应用版本历史 */
  interface ReleaseHistory {
    /** 应用名称 */
    Name?: string;
    /** 应用命名空间 */
    Namespace?: string;
    /** 应用版本 */
    Revision?: number;
    /** 应用状态 */
    Status?: string;
    /** 应用制品名称 */
    Chart?: string;
    /** 应用制品版本 */
    AppVersion?: string;
    /** 应用更新时间 */
    UpdatedTime?: string;
    /** 应用描述 */
    Description?: string;
  }

  /** 应用市场自定义参数 */
  interface ReleaseValues {
    /** 自定义参数原始值 */
    RawOriginal: string;
    /** 自定义参数值类型 */
    ValuesType: string;
  }

  /** 预留实例 */
  interface ReservedInstance {
    /** 预留实例ID */
    ReservedInstanceId?: string;
    /** 预留实例名称 */
    ReservedInstanceName?: string;
    /** 预留券状态 */
    Status?: string;
    /** 有效期，单位：月 */
    TimeSpan?: number;
    /** 抵扣资源类型 */
    ResourceType?: string;
    /** 资源核数 */
    Cpu?: number;
    /** 资源内存，单位：Gi */
    Memory?: number;
    /** 预留券的范围，默认值region。 */
    Scope?: string;
    /** 创建时间 */
    CreatedAt?: string;
    /** 生效时间 */
    ActiveAt?: string;
    /** 过期时间 */
    ExpireAt?: string;
    /** GPU卡数 */
    GpuCount?: string;
    /** 自动续费标记 */
    AutoRenewFlag?: number;
    /** 集群 ID */
    ClusterId?: string;
    /** 节点名称 */
    NodeName?: string;
    /** 上个周期预留券的抵扣状态，Deduct：已抵扣、NotDeduct：未抵扣 */
    DeductStatus?: string;
  }

  /** 预留券抵扣范围的描述信息，当抵扣范围为 Region 时，表示地域抵扣，其他参数不需要传；当抵扣范围为 Zone 时，表示可用区抵扣，Zone 参数必传；当抵扣范围为 Node 时，表示节点抵扣，参数 Zone、ClusterId和NodeName均必传。 */
  interface ReservedInstanceScope {
    /** 抵扣范围，取值：Region、Zone 和 Node */
    Scope: string;
    /** 可用区 */
    Zone?: string;
    /** 集群 ID */
    ClusterId?: string;
    /** 节点 ID */
    NodeName?: string;
  }

  /** 预留券规格 */
  interface ReservedInstanceSpec {
    /** 资源类型：common、amd、v100、t4、a10\*gnv4、a10\*gnv4v、a10\*pnv4、windows-common、windows-amd，common表示通用类型。 */
    Type: string;
    /** 核数 */
    Cpu: number;
    /** 内存，单位：GiB */
    Memory: number;
    /** GPU卡数，当Type为GPU类型时设置。 */
    Gpu?: number;
  }

  /** 预留券的使用率信息 */
  interface ReservedInstanceUtilizationRate {
    /** 使用率 */
    Rate?: number;
    /** 预留券数量 */
    Num?: number;
    /** 核数 */
    CPU?: number;
    /** 内存，单位：GiB */
    Memory?: number;
    /** 预留券类型, common：CPU通用，amd：AMD专用，windows-common: Windows容器 CPU通用，windows-amd：Windows容器 AMD专用，sa4，sa5，s7，s8，t4，v100，l20，l40，a10\*gnv4，a10\*gnv4v，a10\*pnv4 */
    Type?: string;
    /** GPU 卡数 */
    GpuNum?: string;
    /** 可用区 */
    Zone?: string;
    /** 集群 ID */
    ClusterId?: string;
    /** 节点 ID */
    NodeName?: string;
    /** Pod 数量 */
    PodNum?: number;
  }

  /** 资源删除选项 */
  interface ResourceDeleteOption {
    /** 资源类型，例如CBS、CLB、CVM */
    ResourceType: string;
    /** 集群删除时CBS资源的删除模式：terminate（销毁），retain （保留）。其他资源默认为销毁。 */
    DeleteMode: string;
    /** 是否跳过开启删除保护的资源，默认false，设置为true时不清理开启了删除保护的资源，clb有终端节点的情况也属于开了删除保护。 */
    SkipDeletionProtection?: boolean;
  }

  /** 集群资源使用量 */
  interface ResourceUsage {
    /** 资源类型 */
    Name?: string;
    /** 资源使用量 */
    Usage?: number;
    /** 资源使用详情 */
    Details?: ResourceUsageDetail[];
  }

  /** 资源使用明细 */
  interface ResourceUsageDetail {
    /** 资源名称 */
    Name?: string;
    /** 资源使用量 */
    Usage?: number;
  }

  /** 集群路由对象 */
  interface RouteInfo {
    /** 路由表名称。 */
    RouteTableName?: string;
    /** 目的端CIDR。 */
    DestinationCidrBlock?: string;
    /** 下一跳地址。 */
    GatewayIp?: string;
  }

  /** 路由表冲突对象 */
  interface RouteTableConflict {
    /** 路由表类型。枚举值：CcsCluster、Vpc、VpcRouteTable、CcsClusterRouteTable */
    RouteTableType?: string;
    /** 路由表CIDR。 */
    RouteTableCidrBlock?: string;
    /** 路由表名称。 */
    RouteTableName?: string;
    /** 路由表ID。 */
    RouteTableId?: string;
  }

  /** 集群路由表对象 */
  interface RouteTableInfo {
    /** 路由表名称。 */
    RouteTableName?: string;
    /** 路由表CIDR。 */
    RouteTableCidrBlock?: string;
    /** VPC实例ID。 */
    VpcId?: string;
  }

  /** 描述了 “云自动化助手” 服务相关的信息 */
  interface RunAutomationServiceEnabled {
    /** 是否开启云自动化助手。取值范围：true：表示开启云自动化助手服务false：表示不开启云自动化助手服务默认取值：false。 */
    Enabled?: boolean;
  }

  /** 不同角色的节点配置参数 */
  interface RunInstancesForNode {
    /** 节点角色，取值:MASTER_ETCD, WORKER。MASTER_ETCD只有在创建 INDEPENDENT_CLUSTER 独立集群时需要指定。MASTER_ETCD节点数量为3～7，建议为奇数。MASTER_ETCD节点最小配置为4C8G。 */
    NodeRole: string;
    /** CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口，传入公共参数外的其他参数即可，其中ImageId会替换为TKE集群OS对应的镜像。 */
    RunInstancesPara: string[];
    /** 节点高级设置，该参数会覆盖集群级别设置的InstanceAdvancedSettings，和上边的RunInstancesPara按照顺序一一对应（当前只对节点自定义参数ExtraArgs生效）。 */
    InstanceAdvancedSettingsOverrides?: InstanceAdvancedSettings[];
  }

  /** 描述了 “云监控” 服务相关的信息 */
  interface RunMonitorServiceEnabled {
    /** 是否开启[云监控](/document/product/248)服务。取值范围：true：表示开启云监控服务false：表示不开启云监控服务默认取值：true。 */
    Enabled?: boolean;
  }

  /** 描述了 “云安全” 服务相关的信息 */
  interface RunSecurityServiceEnabled {
    /** 是否开启[云安全](/document/product/296)服务。取值范围：true：表示开启云安全服务false：表示不开启云安全服务默认取值：true。 */
    Enabled?: boolean;
  }

  /** 运行时配置 */
  interface RuntimeConfig {
    /** 运行时类型 */
    RuntimeType?: string;
    /** 运行时版本 */
    RuntimeVersion?: string;
  }

  /** master节点缩容参数 */
  interface ScaleInMaster {
    /** 实例ID */
    InstanceId: string;
    /** 缩容的实例角色：MASTER,ETCD,MASTER_ETCD */
    NodeRole: string;
    /** 实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例） */
    InstanceDeleteMode: string;
  }

  /** cloudrun安全特性 */
  interface SecurityContext {
    /** 安全能力清单 */
    Capabilities?: Capabilities | null;
  }

  /** ServiceAccount认证相关配置 */
  interface ServiceAccountAuthenticationOptions {
    /** 使用TKE默认issuer和jwksuri */
    UseTKEDefault?: boolean | null;
    /** service-account-issuer */
    Issuer?: string | null;
    /** service-account-jwks-uri */
    JWKSURI?: string | null;
    /** 如果为true，则会自动创建允许匿名用户访问'/.well-known/openid-configuration'和/openid/v1/jwks的rbac规则 */
    AutoCreateDiscoveryAnonymousAuth?: boolean | null;
  }

  /** 执行步骤信息 */
  interface Step {
    /** 名称 */
    Name?: string;
    /** 开始时间 */
    StartAt?: string;
    /** 结束时间 */
    EndAt?: string;
    /** 当前状态 */
    Status?: string;
    /** 执行信息 */
    Message?: string;
  }

  /** 子网信息 */
  interface SubnetInfos {
    /** 子网id */
    SubnetId: string;
    /** 子网节点名称 */
    Name: string;
    /** 安全组id */
    SecurityGroups?: string[];
    /** 系统，默认linux */
    Os?: string;
    /** 硬件架构，默认amd64 */
    Arch?: string;
  }

  /** 超级节点上的资源统计 */
  interface SuperNodeResource {
    /** 节点名称，此字段在出参中有效。 */
    NodeName?: string;
    /** 节点上的资源总数，QuotaType为 exact 时，表示创建指定规格的精确配额数量。 */
    Num?: number;
    /** 节点上的总核数，QuotaType为 exact 时表示指定规格的核数。 */
    Cpu?: number;
    /** 节点上的总内存数，QuotaType为 exact 时表示指定规格的内存，单位：Gi */
    Memory?: number;
    /** 节点上的总 GPU 卡数，QuotaType为 exact 时表示指定规格的GPU卡数。 */
    Gpu?: number;
    /** 节点资源的配额类型，exact表示精确配额，fuzzy 表示模糊配额。 */
    QuotaType?: string;
    /** 配额的计费类型，PREPAID表示包月，POSTPAID_BY_HOUR表示按量。 */
    ChargeType?: string;
    /** QuotaType为 exact 时，此字段有效，表示精确配额的资源类型。 */
    ResourceType?: string;
    /** 置放群组 ID，QuotaType为 exact 时有效，表示购买的精确配额需满足置放群组。可通过 [DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/product/213/17810) 接口返回值中的DisasterRecoverGroupId获取。 */
    DisasterRecoverGroupId?: string;
  }

  /** 集群日志开关集合 */
  interface Switch {
    /** 审计开关的详细信息 */
    Audit?: SwitchInfo;
    /** 集群ID */
    ClusterId?: string;
    /** 事件开关的详细信息 */
    Event?: SwitchInfo;
    /** 普通日志的详细信息 */
    Log?: SwitchInfo;
    /** master 日志详细信息 */
    MasterLog?: SwitchInfo;
  }

  /** 日志开关详细信息 */
  interface SwitchInfo {
    /** 开启标识符 true代表开启 */
    Enable?: boolean;
    /** 获取日志状态失败时，返回错误信息 */
    ErrorMsg?: string;
    /** CLS日志集ID */
    LogsetId?: string;
    /** 日志主题状态，opened表示已开启，opening开启中，closed表示已关闭，closing 表示关闭中 */
    Status?: string;
    /** CLS日志主题ID */
    TopicId?: string;
    /** CLS日志主题所属region */
    TopicRegion?: string;
    /** 是否可升级 */
    UpgradeAble?: boolean;
    /** 当前log-agent版本 */
    Version?: string;
  }

  /** 标签绑定的资源类型，当前支持类型："cluster" */
  interface Tag {
    /** 标签键 */
    Key?: string;
    /** 标签值 */
    Value?: string;
  }

  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云主机实例。 */
  interface TagSpecification {
    /** 标签绑定的资源类型，当前支持类型："cluster" */
    ResourceType?: string;
    /** 标签对列表 */
    Tags?: Tag[] | null;
  }

  /** kubernetes Taint */
  interface Taint {
    /** Key */
    Key?: string;
    /** Value */
    Value?: string;
    /** Effect */
    Effect?: string;
  }

  /** 任务步骤信息 */
  interface TaskStepInfo {
    /** 步骤名称 */
    Step?: string;
    /** 生命周期pending : 步骤未开始running: 步骤执行中success: 步骤成功完成failed: 步骤失败 */
    LifeState?: string;
    /** 步骤开始时间 */
    StartAt?: string;
    /** 步骤结束时间 */
    EndAt?: string;
    /** 若步骤生命周期为failed,则此字段显示错误信息 */
    FailedMsg?: string;
  }

  /** 探针使用TcpSocket检测容器 */
  interface TcpSocket {
    /** TcpSocket检测的端口 */
    Port?: number;
  }

  /** kubernetes Taint */
  interface Toleration {
    /** 容忍应用到的 taint key */
    Key?: string;
    /** 键与值的关系 */
    Operator?: string;
    /** 要匹配的污点效果 */
    Effect?: string;
  }

  /** 不可用原因 */
  interface UnavailableReason {
    /** 实例ID */
    InstanceId?: string;
    /** 原因 */
    Reason?: string;
  }

  /** 可升级节点信息 */
  interface UpgradeAbleInstancesItem {
    /** 节点Id */
    InstanceId?: string;
    /** 节点的当前版本 */
    Version?: string;
    /** 当前版本的最新小版本 */
    LatestVersion?: string;
    /** RuntimeVersion */
    RuntimeVersion?: string;
    /** RuntimeLatestVersion */
    RuntimeLatestVersion?: string;
  }

  /** 节点升级重装参数 */
  interface UpgradeNodeResetParam {
    /** 实例额外需要设置参数信息 */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。 */
    EnhancedService?: EnhancedService;
    /** 节点登录信息（目前仅支持使用Password或者单个KeyIds） */
    LoginSettings?: LoginSettings;
    /** 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。（目前仅支持设置单个sgId） */
    SecurityGroupIds?: string[];
  }

  /** 版本信息 */
  interface VersionInstance {
    /** 版本名称 */
    Name?: string;
    /** 版本信息 */
    Version?: string;
    /** 备注 */
    Remark?: string;
  }

  /** 虚拟节点 */
  interface VirtualNode {
    /** 虚拟节点名称 */
    Name?: string;
    /** 虚拟节点所属子网 */
    SubnetId?: string;
    /** 虚拟节点状态 */
    Phase?: string;
    /** 创建时间 */
    CreatedTime?: string;
  }

  /** 虚拟节点池 */
  interface VirtualNodePool {
    /** 节点池ID */
    NodePoolId?: string;
    /** 子网列表 */
    SubnetIds?: string[] | null;
    /** 节点池名称 */
    Name?: string;
    /** 节点池生命周期- creating：创建中- normal：正常- updating：更新中 */
    LifeState?: string;
    /** 虚拟节点label */
    Labels?: Label[] | null;
    /** 虚拟节点taint */
    Taints?: Taint[] | null;
  }

  /** 超级节点 */
  interface VirtualNodeSpec {
    /** 节点展示名称，建议不超过20个字符 */
    DisplayName: string;
    /** 子网ID */
    SubnetId: string;
    /** 腾讯云标签 */
    Tags?: Tag[];
  }

  /** 数据卷挂载路径信息 */
  interface VolumeMount {
    /** 挂载路径 */
    MountPath: string | null;
    /** volume名称 */
    Name: string | null;
    /** 传播挂载方式 */
    MountPropagation?: string | null;
    /** 是否只读 */
    ReadOnly?: boolean | null;
    /** 子路径 */
    SubPath?: string | null;
    /** 子路径表达式 */
    SubPathExpr?: string | null;
  }

  interface AcquireClusterAdminRoleRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface AcquireClusterAdminRoleResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface AddClusterCIDRRequest {
    /** 集群ID */
    ClusterId: string;
    /** 增加的ClusterCIDR */
    ClusterCIDRs: string[];
    /** 是否忽略ClusterCIDR与VPC路由表的冲突 */
    IgnoreClusterCIDRConflict?: boolean;
  }

  interface AddClusterCIDRResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface AddExistedInstancesRequest {
    /** 集群ID */
    ClusterId: string;
    /** 实例列表，不支持竞价实例 */
    InstanceIds: string[];
    /** 实例额外需要设置参数信息(默认值) */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。 */
    EnhancedService?: EnhancedService;
    /** 节点登录信息（目前仅支持使用Password或者单个KeyIds） */
    LoginSettings?: LoginSettings;
    /** 重装系统时，可以指定修改实例的HostName(集群为HostName模式时，此参数必传，规则名称除不支持大写字符外与[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口HostName一致) */
    HostName?: string;
    /** 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。（目前仅支持设置单个sgId） */
    SecurityGroupIds?: string[];
    /** 节点池选项 */
    NodePool?: NodePoolOption;
    /** 校验规则相关选项，可配置跳过某些校验规则。目前支持GlobalRouteCIDRCheck（跳过GlobalRouter的相关校验），VpcCniCIDRCheck（跳过VpcCni相关校验） */
    SkipValidateOptions?: string[];
    /** 参数InstanceAdvancedSettingsOverride数组用于定制化地配置各台instance，与InstanceIds顺序对应。当传入InstanceAdvancedSettingsOverrides数组时，将覆盖默认参数InstanceAdvancedSettings；当没有传入参数InstanceAdvancedSettingsOverrides时，InstanceAdvancedSettings参数对每台instance生效。参数InstanceAdvancedSettingsOverride数组的长度应与InstanceIds数组一致；当长度大于InstanceIds数组长度时将报错；当长度小于InstanceIds数组时，没有对应配置的instance将使用默认配置。 */
    InstanceAdvancedSettingsOverrides?: InstanceAdvancedSettings[];
    /** 节点镜像 */
    ImageId?: string;
  }

  interface AddExistedInstancesResponse {
    /** 失败的节点ID */
    FailedInstanceIds?: string[] | null;
    /** 成功的节点ID */
    SuccInstanceIds?: string[] | null;
    /** 超时未返回出来节点的ID(可能失败，也可能成功) */
    TimeoutInstanceIds?: string[] | null;
    /** 失败的节点的失败原因 */
    FailedReasons?: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface AddNodeToNodePoolRequest {
    /** 集群id */
    ClusterId: string;
    /** 节点池id */
    NodePoolId: string;
    /** 节点id */
    InstanceIds: string[];
  }

  interface AddNodeToNodePoolResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface AddVpcCniSubnetsRequest {
    /** 集群 ID，请[登录控制台](https://console.cloud.tencent.com/tke2/cluster)在集群列表复制ID */
    ClusterId: string;
    /** 为集群容器网络增加的子网列表 */
    SubnetIds: string[];
    /** 集群所属的VPC的ID */
    VpcId: string;
    /** 是否同步添加 vpc 网段到 ip-masq-agent-config 的 NonMasqueradeCIDRs 字段，默认 false 会同步添加 */
    SkipAddingNonMasqueradeCIDRs?: boolean;
  }

  interface AddVpcCniSubnetsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CancelClusterReleaseRequest {
    /** 应用ID */
    ID: string;
    /** 集群ID */
    ClusterId?: string;
    /** 集群类型 */
    ClusterType?: string;
  }

  interface CancelClusterReleaseResponse {
    /** 应用信息 */
    Release?: PendingRelease;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CheckEdgeClusterCIDRRequest {
    /** 集群的vpc-id */
    VpcId: string;
    /** 集群的pod CIDR */
    PodCIDR: string;
    /** 集群的service CIDR */
    ServiceCIDR: string;
  }

  interface CheckEdgeClusterCIDRResponse {
    /** 返回码，具体如下-1 内部错误0 没冲突1 vpc 和 serviceCIDR 冲突2 vpc 和 podCIDR 冲突3 serviceCIDR 和 podCIDR 冲突 */
    ConflictCode?: number;
    /** CIDR冲突描述信息。 */
    ConflictMsg?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CheckInstancesUpgradeAbleRequest {
    /** 集群ID */
    ClusterId: string;
    /** 节点列表，空为全部节点 */
    InstanceIds?: string[];
    /** 升级类型，枚举值：reset(重装升级，支持大版本和小版本)，hot(原地滚动小版本升级)，major(原地滚动大版本升级) */
    UpgradeType?: string;
    /** 分页Offset */
    Offset?: number;
    /** 分页Limit */
    Limit?: number;
    /** 过滤 */
    Filter?: Filter[];
  }

  interface CheckInstancesUpgradeAbleResponse {
    /** 集群master当前小版本 */
    ClusterVersion?: string;
    /** 集群master对应的大版本目前最新小版本 */
    LatestVersion?: string;
    /** 可升级节点列表 */
    UpgradeAbleInstances?: UpgradeAbleInstancesItem[];
    /** 总数 */
    Total?: number;
    /** 不可升级原因 */
    UnavailableVersionReason?: UnavailableReason[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateBackupStorageLocationRequest {
    /** 存储仓库所属地域，比如COS广州(ap-guangzhou) */
    StorageRegion: string;
    /** 对象存储桶名称，如果是COS必须是tke-backup前缀开头 */
    Bucket: string;
    /** 备份仓库名称 */
    Name: string;
    /** 存储服务提供方，默认腾讯云 */
    Provider?: string;
    /** 对象存储桶路径 */
    Path?: string;
  }

  interface CreateBackupStorageLocationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateCLSLogConfigRequest {
    /** 日志采集配置的json表达 */
    LogConfig: string;
    /** 集群ID */
    ClusterId: string;
    /** CLS日志集ID */
    LogsetId?: string;
    /** 当前集群类型支持tke（标准集群）、eks（serverless集群） */
    ClusterType?: string;
  }

  interface CreateCLSLogConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterEndpointRequest {
    /** 集群ID */
    ClusterId: string;
    /** 集群端口所在的子网ID (仅在开启非外网访问时需要填，必须为集群所在VPC内的子网) */
    SubnetId?: string;
    /** 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE） */
    IsExtranet?: boolean;
    /** 设置域名 */
    Domain?: string;
    /** 使用的安全组，只有外网访问需要传递（开启外网访问且不使用已有clb时必传） */
    SecurityGroup?: string;
    /** 创建lb参数，只有外网访问需要设置，是一个json格式化后的字符串：{"InternetAccessible":{"InternetChargeType":"TRAFFIC_POSTPAID_BY_HOUR","InternetMaxBandwidthOut":200},"VipIsp":"","BandwidthPackageId":""}。各个参数意义：InternetAccessible.InternetChargeType含义：TRAFFIC_POSTPAID_BY_HOUR按流量按小时后计费;BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;InternetAccessible.BANDWIDTH_PACKAGE 按带宽包计费。InternetMaxBandwidthOut含义：最大出带宽，单位Mbps，范围支持0到2048，默认值10。VipIsp含义：CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通，如果不指定本参数，则默认使用BGP。可通过 DescribeSingleIsp 接口查询一个地域所支持的Isp。如果指定运营商，则网络计费式只能使用按带宽包计费BANDWIDTH_PACKAGE。BandwidthPackageId含义：带宽包ID，指定此参数时，网络计费方式InternetAccessible.InternetChargeType只支持按带宽包计费BANDWIDTH_PACKAGE。 */
    ExtensiveParameters?: string;
    /** 使用已有clb开启内网或外网访问 */
    ExistedLoadBalancerId?: string;
  }

  interface CreateClusterEndpointResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterEndpointVipRequest {
    /** 集群ID */
    ClusterId: string;
    /** 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有) */
    SecurityPolicies?: string[];
  }

  interface CreateClusterEndpointVipResponse {
    /** 请求任务的FlowId */
    RequestFlowId?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterInstancesRequest {
    /** 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段 */
    ClusterId: string;
    /** CVM创建透传参数，json化字符串格式，如需要保证扩展集群节点请求幂等性需要在此参数添加ClientToken字段，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。 */
    RunInstancePara: string;
    /** 实例额外需要设置参数信息 */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /** 校验规则相关选项，可配置跳过某些校验规则。目前支持GlobalRouteCIDRCheck（跳过GlobalRouter的相关校验），VpcCniCIDRCheck（跳过VpcCni相关校验） */
    SkipValidateOptions?: string[];
  }

  interface CreateClusterInstancesResponse {
    /** 节点实例ID */
    InstanceIdSet?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterNodePoolRequest {
    /** cluster id */
    ClusterId: string;
    /** AutoScalingGroupPara AS组参数，参考 https://cloud.tencent.com/document/product/377/20440 */
    AutoScalingGroupPara: string;
    /** LaunchConfigurePara 运行参数，参考 https://cloud.tencent.com/document/product/377/20447 */
    LaunchConfigurePara: string;
    /** InstanceAdvancedSettings */
    InstanceAdvancedSettings: InstanceAdvancedSettings;
    /** 是否启用自动伸缩 */
    EnableAutoscale: boolean;
    /** 节点池名称 */
    Name?: string;
    /** Labels标签 */
    Labels?: Label[];
    /** Taints互斥 */
    Taints?: Taint[];
    /** 节点Annotation 列表 */
    Annotations?: AnnotationValue[];
    /** 节点池纬度运行时类型及版本 */
    ContainerRuntime?: string;
    /** 运行时版本 */
    RuntimeVersion?: string;
    /** 节点池os，当为自定义镜像时，传镜像id；否则为公共镜像的osName */
    NodePoolOs?: string;
    /** 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值) */
    OsCustomizeType?: string;
    /** 资源标签 */
    Tags?: Tag[];
    /** 删除保护开关 */
    DeletionProtection?: boolean;
  }

  interface CreateClusterNodePoolResponse {
    /** 节点池id */
    NodePoolId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterReleaseRequest {
    /** 集群ID */
    ClusterId: string;
    /** 应用名称 */
    Name: string;
    /** 应用命名空间 */
    Namespace: string;
    /** 制品名称或从第三方repo 安装chart时，制品压缩包下载地址, 不支持重定向类型chart 地址，结尾为*.tgz */
    Chart: string;
    /** 自定义参数 */
    Values?: ReleaseValues;
    /** 制品来源，范围：tke-market 或 other默认值：tke-market。 */
    ChartFrom?: string;
    /** 制品版本 */
    ChartVersion?: string;
    /** 制品仓库URL地址 */
    ChartRepoURL?: string;
    /** 制品访问用户名 */
    Username?: string;
    /** 制品访问密码 */
    Password?: string;
    /** 制品命名空间，ChartFrom为tke-market时ChartNamespace不为空，值为DescribeProducts接口反馈的Namespace */
    ChartNamespace?: string;
    /** 集群类型，支持传 tke, eks, tkeedge, external(注册集群） */
    ClusterType?: string;
  }

  interface CreateClusterReleaseResponse {
    /** 应用详情 */
    Release?: PendingRelease;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterRequest {
    /** 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。 */
    ClusterType: string;
    /** 集群容器网络配置信息 */
    ClusterCIDRSettings: ClusterCIDRSettings;
    /** CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。总机型(包括地域)数量不超过10个，相同机型(地域)购买多台机器可以通过设置参数中RunInstances中InstanceCount来实现。 */
    RunInstancesForNode?: RunInstancesForNode[];
    /** 集群的基本配置信息 */
    ClusterBasicSettings?: ClusterBasicSettings;
    /** 集群高级配置信息 */
    ClusterAdvancedSettings?: ClusterAdvancedSettings;
    /** 节点高级配置信息 */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /** 已存在实例的配置信息。所有实例必须在同一个VPC中，最大数量不超过100，不支持添加竞价实例。 */
    ExistedInstancesForNode?: ExistedInstancesForNode[];
    /** CVM类型和其对应的数据盘挂载配置信息 */
    InstanceDataDiskMountSettings?: InstanceDataDiskMountSetting[];
    /** 需要安装的扩展组件信息 */
    ExtensionAddons?: ExtensionAddon[];
    /** 本地专用集群Id */
    CdcId?: string;
    /** 屏蔽安装指定Addon组件，填写相应的AddonName */
    DisableAddons?: string[];
  }

  interface CreateClusterResponse {
    /** 集群ID */
    ClusterId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterRouteRequest {
    /** 路由表名称。 */
    RouteTableName: string;
    /** 目的节点的 PodCIDR */
    DestinationCidrBlock: string;
    /** 下一跳地址，即目的节点的内网 IP 地址 */
    GatewayIp: string;
  }

  interface CreateClusterRouteResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterRouteTableRequest {
    /** 路由表名称，一般为集群ID */
    RouteTableName: string;
    /** 路由表CIDR */
    RouteTableCidrBlock: string;
    /** 路由表绑定的VPC */
    VpcId: string;
    /** 是否忽略CIDR与 vpc 路由表的冲突， 0 表示不忽略，1表示忽略。默认不忽略 */
    IgnoreClusterCidrConflict?: number;
  }

  interface CreateClusterRouteTableResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterVirtualNodePoolRequest {
    /** 集群ID，通过DescribeClusters接口获取 */
    ClusterId: string;
    /** 节点池名称 */
    Name: string;
    /** 子网ID列表 */
    SubnetIds?: string[];
    /** 安全组ID列表，必选参数 */
    SecurityGroupIds?: string[];
    /** 虚拟节点label */
    Labels?: Label[];
    /** 虚拟节点taint */
    Taints?: Taint[];
    /** 节点列表 */
    VirtualNodes?: VirtualNodeSpec[];
    /** 删除保护开关，默认关闭 */
    DeletionProtection?: boolean;
    /** 节点池操作系统：- linux（默认）- windows */
    OS?: string;
  }

  interface CreateClusterVirtualNodePoolResponse {
    /** 节点池ID */
    NodePoolId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateClusterVirtualNodeRequest {
    /** 集群ID，通过DescribeClusters接口获取 */
    ClusterId: string;
    /** 虚拟节点所属节点池，通过DescribeNodePools接口获取 */
    NodePoolId: string;
    /** 虚拟节点所属子网，SubnetId、SubnetIds、VirtualNodes必选一个。 */
    SubnetId?: string;
    /** 虚拟节点子网ID列表，SubnetId、SubnetIds、VirtualNodes必选一个。 */
    SubnetIds?: string[];
    /** 虚拟节点列表，SubnetId、SubnetIds、VirtualNodes必选一个。 */
    VirtualNodes?: VirtualNodeSpec[];
  }

  interface CreateClusterVirtualNodeResponse {
    /** 虚拟节点名称 */
    NodeName?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateECMInstancesRequest {
    /** 集群id，边缘集群需要先开启公网访问才能添加ecm节点 */
    ClusterID: string;
    /** 边缘模块id */
    ModuleId: string;
    /** 需要创建实例的可用区及创建数目及运营商的列表 */
    ZoneInstanceCountISPSet: ECMZoneInstanceCountISP[];
    /** 密码 */
    Password?: string;
    /** 公网带宽 */
    InternetMaxBandwidthOut?: number;
    /** 镜像id */
    ImageId?: string;
    /** 实例名称 */
    InstanceName?: string;
    /** 主机名称 */
    HostName?: string;
    /** 增强服务，包括云镜和云监控 */
    EnhancedService?: ECMEnhancedService;
    /** 用户自定义脚本 */
    UserData?: string;
    /** 实例扩展信息 */
    External?: string;
    /** 实例所属安全组 */
    SecurityGroupIds?: string[];
  }

  interface CreateECMInstancesResponse {
    /** ecm id 列表 */
    EcmIdSet?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateEKSClusterRequest {
    /** k8s版本号。可为1.18.4 1.20.6。 */
    K8SVersion: string;
    /** vpc 的Id */
    VpcId: string;
    /** 集群名称 */
    ClusterName: string;
    /** 子网Id 列表 */
    SubnetIds: string[];
    /** 集群描述信息 */
    ClusterDesc?: string;
    /** Service CIDR 或 Serivce 所在子网Id */
    ServiceSubnetId?: string;
    /** 集群自定义的Dns服务器信息 */
    DnsServers?: DnsServerConf[];
    /** 扩展参数。须是map[string]string 的json 格式。 */
    ExtraParam?: string;
    /** 是否在用户集群内开启Dns。默认为true */
    EnableVpcCoreDNS?: boolean;
    /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到集群实例。 */
    TagSpecification?: TagSpecification[];
    /** 子网信息列表 */
    SubnetInfos?: SubnetInfos[];
  }

  interface CreateEKSClusterResponse {
    /** 弹性集群Id */
    ClusterId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateEKSContainerInstancesRequest {
    /** 容器组 */
    Containers: Container[];
    /** EKS Container Instance容器实例名称 */
    EksCiName: string;
    /** 指定新创建实例所属于的安全组Id */
    SecurityGroupIds: string[];
    /** 实例所属子网Id */
    SubnetId: string;
    /** 实例所属VPC的Id */
    VpcId: string;
    /** 内存，单位：GiB。可参考[资源规格](https://cloud.tencent.com/document/product/457/39808)文档 */
    Memory: number;
    /** CPU，单位：核。可参考[资源规格](https://cloud.tencent.com/document/product/457/39808)文档 */
    Cpu: number;
    /** 实例重启策略： Always(总是重启)、Never(从不重启)、OnFailure(失败时重启)，默认：Always。 */
    RestartPolicy?: string;
    /** 镜像仓库凭证数组 */
    ImageRegistryCredentials?: ImageRegistryCredential[];
    /** 数据卷，包含NfsVolume数组和CbsVolume数组 */
    EksCiVolume?: EksCiVolume;
    /** 实例副本数，默认为1 */
    Replicas?: number;
    /** Init 容器 */
    InitContainers?: Container[];
    /** 自定义DNS配置 */
    DnsConfig?: DNSConfig;
    /** 用来绑定容器实例的已有EIP的列表。如传值，需要保证数值和Replicas相等。另外此参数和AutoCreateEipAttribute互斥。 */
    ExistedEipIds?: string[];
    /** 自动创建EIP的可选参数。若传此参数，则会自动创建EIP。另外此参数和ExistedEipIds互斥 */
    AutoCreateEipAttribute?: EipAttribute;
    /** 是否为容器实例自动创建EIP，默认为false。若传true，则此参数和ExistedEipIds互斥 */
    AutoCreateEip?: boolean;
    /** Pod 所需的 CPU 资源型号，如果不填写则默认不强制指定 CPU 类型。目前支持型号如下：intelamd- 支持优先级顺序写法，如 “amd,intel” 表示优先创建 amd 资源 Pod，如果所选地域可用区 amd 资源不足，则会创建 intel 资源 Pod。 */
    CpuType?: string;
    /** 容器实例所需的 GPU 资源型号，目前支持型号如下：1/4\*V1001/2\*V100V1001/4\*T41/2\*T4T4 */
    GpuType?: string;
    /** Pod 所需的 GPU 数量，如填写，请确保为支持的规格。默认单位为卡，无需再次注明。 */
    GpuCount?: number;
    /** 为容器实例关联 CAM 角色，value 填写 CAM 角色名称，容器实例可获取该 CAM 角色包含的权限策略，方便 容器实例 内的程序进行如购买资源、读写存储等云资源操作。 */
    CamRoleName?: string;
  }

  interface CreateEKSContainerInstancesResponse {
    /** EKS Container Instance Id集合，格式为eksci-xxx，是容器实例的唯一标识。 */
    EksCiIds?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateEdgeCVMInstancesRequest {
    /** 集群id，边缘集群需要先开启公网访问才能添加cvm节点 */
    ClusterID: string;
    /** CVM创建透传参数，json化字符串格式，如需要保证扩展集群节点请求幂等性需要在此参数添加ClientToken字段，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。 */
    RunInstancePara: string;
    /** CVM所属Region */
    CvmRegion: string;
    /** CVM数量 */
    CvmCount: number;
    /** 实例扩展信息 */
    External?: string;
    /** 用户自定义脚本 */
    UserScript?: string;
    /** 是否开启弹性网卡功能 */
    EnableEni?: boolean;
  }

  interface CreateEdgeCVMInstancesResponse {
    /** cvm id 列表 */
    CvmIdSet?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateEdgeLogConfigRequest {
    /** 集群ID */
    ClusterId: string;
    /** 日志采集配置的json表达 */
    LogConfig: string;
    /** CLS日志集ID */
    LogsetId?: string;
  }

  interface CreateEdgeLogConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateEksLogConfigRequest {
    /** 集群ID */
    ClusterId: string;
    /** 日志采集配置的json表达 */
    LogConfig: string;
    /** 日志集ID */
    LogsetId?: string;
  }

  interface CreateEksLogConfigResponse {
    /** 日志采集topicid */
    TopicId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateImageCacheRequest {
    /** 用于制作镜像缓存的容器镜像列表 */
    Images: string[];
    /** 实例所属子网 ID */
    SubnetId: string;
    /** 实例所属 VPC ID */
    VpcId: string;
    /** 镜像缓存名称 */
    ImageCacheName?: string;
    /** 安全组 ID */
    SecurityGroupIds?: string[];
    /** 镜像仓库凭证数组 */
    ImageRegistryCredentials?: ImageRegistryCredential[];
    /** 用来绑定容器实例的已有EIP */
    ExistedEipId?: string;
    /** 是否为容器实例自动创建EIP，默认为false。若传true，则此参数和ExistedEipIds互斥 */
    AutoCreateEip?: boolean;
    /** 自动创建EIP的可选参数。若传此参数，则会自动创建EIP。另外此参数和ExistedEipIds互斥 */
    AutoCreateEipAttribute?: EipAttribute;
    /** 镜像缓存的大小。默认为20 GiB。取值范围参考[云硬盘类型](https://cloud.tencent.com/document/product/362/2353)中的高性能云盘类型的大小限制。 */
    ImageCacheSize?: number;
    /** 镜像缓存保留时间天数，过期将会自动清理，默认为0，永不过期。 */
    RetentionDays?: number;
    /** 指定拉取镜像仓库的镜像时不校验证书。如["harbor.example.com"]。 */
    RegistrySkipVerifyList?: string[];
    /** 指定拉取镜像仓库的镜像时使用 HTTP 协议。如["harbor.example.com"]。 */
    RegistryHttpEndPointList?: string[];
    /** 自定义制作镜像缓存过程中容器实例的宿主机上的 DNS。如："nameserver 4.4.4.4\nnameserver 8.8.8.8" */
    ResolveConfig?: string;
    /** 腾讯云标签 */
    Tags?: Tag[];
  }

  interface CreateImageCacheResponse {
    /** 镜像缓存Id */
    ImageCacheId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusAlertPolicyRequest {
    /** 实例id */
    InstanceId: string;
    /** 告警配置 */
    AlertRule: PrometheusAlertPolicyItem;
  }

  interface CreatePrometheusAlertPolicyResponse {
    /** 告警id */
    Id?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusAlertRuleRequest {
    /** 实例id */
    InstanceId: string;
    /** 告警配置 */
    AlertRule: PrometheusAlertRuleDetail;
  }

  interface CreatePrometheusAlertRuleResponse {
    /** 告警id */
    Id?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusClusterAgentRequest {
    /** 实例ID */
    InstanceId: string;
    /** agent列表 */
    Agents: PrometheusClusterAgentBasic[];
  }

  interface CreatePrometheusClusterAgentResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusConfigRequest {
    /** 实例id */
    InstanceId: string;
    /** 集群类型 */
    ClusterType: string;
    /** 集群id */
    ClusterId: string;
    /** ServiceMonitors配置 */
    ServiceMonitors?: PrometheusConfigItem[];
    /** PodMonitors配置 */
    PodMonitors?: PrometheusConfigItem[];
    /** prometheus原生Job配置 */
    RawJobs?: PrometheusConfigItem[];
    /** Probe 配置 */
    Probes?: PrometheusConfigItem[];
  }

  interface CreatePrometheusConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusDashboardRequest {
    /** 实例id */
    InstanceId: string;
    /** 面板组名称 */
    DashboardName: string;
    /** 面板列表每一项是一个grafana dashboard的json定义 */
    Contents: string[];
  }

  interface CreatePrometheusDashboardResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusGlobalNotificationRequest {
    /** 实例ID */
    InstanceId: string;
    /** 告警通知渠道 */
    Notification: PrometheusNotificationItem;
  }

  interface CreatePrometheusGlobalNotificationResponse {
    /** 全局告警通知渠道ID */
    Id?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusRecordRuleYamlRequest {
    /** 实例id */
    InstanceId: string;
    /** yaml的内容 */
    Content: string;
  }

  interface CreatePrometheusRecordRuleYamlResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusTempRequest {
    /** 模板设置 */
    Template: PrometheusTemp;
  }

  interface CreatePrometheusTempResponse {
    /** 模板Id */
    TemplateId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreatePrometheusTemplateRequest {
    /** 模板设置 */
    Template: PrometheusTemplate;
  }

  interface CreatePrometheusTemplateResponse {
    /** 模板Id */
    TemplateId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateReservedInstancesRequest {
    /** 预留券实例规格。 */
    ReservedInstanceSpec: ReservedInstanceSpec;
    /** 购买实例数量，一次最大购买数量为300。 */
    InstanceCount: number;
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。 */
    InstanceChargePrepaid: InstanceChargePrepaid;
    /** 预留券名称，名称不得超过60个字符。 */
    InstanceName?: string;
    /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
    ClientToken?: string;
    /** 是否只预检此次请求。true：只预检，不会创建实例。默认值为：false。 */
    DryRun?: boolean;
  }

  interface CreateReservedInstancesResponse {
    /** 预留券实例 ID。 */
    ReservedInstanceIds?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface CreateTKEEdgeClusterRequest {
    /** k8s版本号 */
    K8SVersion: string;
    /** vpc 的Id */
    VpcId: string;
    /** 集群名称 */
    ClusterName: string;
    /** 集群pod cidr */
    PodCIDR: string;
    /** 集群service cidr */
    ServiceCIDR: string;
    /** 集群描述信息 */
    ClusterDesc?: string;
    /** 集群高级设置 */
    ClusterAdvancedSettings?: EdgeClusterAdvancedSettings;
    /** 节点上最大Pod数量 */
    MaxNodePodNum?: number;
    /** 边缘计算集群公网访问LB信息 */
    PublicLB?: EdgeClusterPublicLB;
    /** 集群的级别 */
    ClusterLevel?: string;
    /** 集群是否支持自动升配 */
    AutoUpgradeClusterLevel?: boolean;
    /** 集群计费方式 */
    ChargeType?: string;
    /** 边缘集群版本，此版本区别于k8s版本，是整个集群各组件版本集合 */
    EdgeVersion?: string;
    /** 边缘组件镜像仓库前缀 */
    RegistryPrefix?: string;
    /** 集群绑定的云标签 */
    TagSpecification?: TagSpecification;
  }

  interface CreateTKEEdgeClusterResponse {
    /** 边缘计算集群Id */
    ClusterId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteAddonRequest {
    /** 集群ID，请从容器服务控制台集群列表中获取（https://console.cloud.tencent.com/tke2/cluster）。 */
    ClusterId: string;
    /** addon名称，请从容器服务控制台进入集群详情页后，在组件管理页面中获取。 */
    AddonName: string;
  }

  interface DeleteAddonResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteBackupStorageLocationRequest {
    /** 备份仓库名称 */
    Name: string;
  }

  interface DeleteBackupStorageLocationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterAsGroupsRequest {
    /** 集群ID，通过[DescribeClusters](https://cloud.tencent.com/document/api/457/31862)接口获取。 */
    ClusterId: string;
    /** 集群伸缩组ID的列表 */
    AutoScalingGroupIds: string[];
    /** 是否保留伸缩组中的节点(默认值： false(不保留)) */
    KeepInstance?: boolean;
  }

  interface DeleteClusterAsGroupsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterEndpointRequest {
    /** 集群ID */
    ClusterId: string;
    /** 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE） */
    IsExtranet?: boolean;
  }

  interface DeleteClusterEndpointResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterEndpointVipRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DeleteClusterEndpointVipResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterInstancesRequest {
    /** 集群ID */
    ClusterId: string;
    /** 主机InstanceId列表 */
    InstanceIds: string[];
    /** 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例） */
    InstanceDeleteMode: string;
    /** 是否强制删除(当节点在初始化时，可以指定参数为TRUE) */
    ForceDelete?: boolean;
  }

  interface DeleteClusterInstancesResponse {
    /** 删除成功的实例ID列表 */
    SuccInstanceIds?: string[] | null;
    /** 删除失败的实例ID列表 */
    FailedInstanceIds?: string[] | null;
    /** 未匹配到的实例ID列表 */
    NotFoundInstanceIds?: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterNodePoolRequest {
    /** 节点池对应的 ClusterId */
    ClusterId: string;
    /** 需要删除的节点池 Id 列表 */
    NodePoolIds: string[];
    /** 删除节点池时是否保留节点池内节点(节点仍然会被移出集群，但对应的实例不会被销毁) */
    KeepInstance: boolean;
  }

  interface DeleteClusterNodePoolResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterRequest {
    /** 集群ID */
    ClusterId: string;
    /** 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例） */
    InstanceDeleteMode: string;
    /** 集群删除时资源的删除策略，目前支持CBS（默认保留CBS） */
    ResourceDeleteOptions?: ResourceDeleteOption[];
  }

  interface DeleteClusterResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterRouteRequest {
    /** 路由表名称。 */
    RouteTableName: string;
    /** 下一跳地址。 */
    GatewayIp: string;
    /** 目的端CIDR。 */
    DestinationCidrBlock: string;
  }

  interface DeleteClusterRouteResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterRouteTableRequest {
    /** 路由表名称 */
    RouteTableName: string;
  }

  interface DeleteClusterRouteTableResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterVirtualNodePoolRequest {
    /** 集群ID，通过DescribeClusters接口获取 */
    ClusterId: string;
    /** 节点池ID，通过DescribeNodePools接口获取 */
    NodePoolIds: string[];
    /** 是否强制删除，在超级节点上有pod的情况下，如果选择非强制删除，则删除会失败 */
    Force?: boolean;
  }

  interface DeleteClusterVirtualNodePoolResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteClusterVirtualNodeRequest {
    /** 集群ID，通过DescribeClusters接口获取 */
    ClusterId: string;
    /** 虚拟节点ID列表 */
    NodeNames: string[];
    /** 是否强制删除：如果虚拟节点上有运行中Pod，则非强制删除状态下不会进行删除 */
    Force?: boolean;
  }

  interface DeleteClusterVirtualNodeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteECMInstancesRequest {
    /** 集群ID */
    ClusterID: string;
    /** ecm id集合 */
    EcmIdSet: string[];
  }

  interface DeleteECMInstancesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteEKSClusterRequest {
    /** 弹性集群Id */
    ClusterId: string;
  }

  interface DeleteEKSClusterResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteEKSContainerInstancesRequest {
    /** 需要删除的EksCi的Id。 最大数量不超过20 */
    EksCiIds: string[];
    /** 是否释放为EksCi自动创建的Eip */
    ReleaseAutoCreatedEip?: boolean;
  }

  interface DeleteEKSContainerInstancesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteEdgeCVMInstancesRequest {
    /** 集群ID */
    ClusterID: string;
    /** cvm id集合 */
    CvmIdSet: string[];
  }

  interface DeleteEdgeCVMInstancesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteEdgeClusterInstancesRequest {
    /** 集群ID */
    ClusterId: string;
    /** 待删除实例ID数组 */
    InstanceIds: string[];
  }

  interface DeleteEdgeClusterInstancesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteImageCachesRequest {
    /** 镜像缓存ID数组 */
    ImageCacheIds: string[];
  }

  interface DeleteImageCachesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteLogConfigsRequest {
    /** 集群ID */
    ClusterId: string;
    /** 待删除采集规则名称，多个采集规则使用","分隔 */
    LogConfigNames: string;
    /** 集群集群类型, tke/eks 默认为 tke 集群 */
    ClusterType?: string;
  }

  interface DeleteLogConfigsResponse {
    /** 删除采集规则遇到错误时返回错误原因 */
    Message?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusAlertPolicyRequest {
    /** 实例id */
    InstanceId: string;
    /** 告警策略id列表 */
    AlertIds: string[];
    /** 告警策略名称 */
    Names?: string[];
  }

  interface DeletePrometheusAlertPolicyResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusAlertRuleRequest {
    /** 实例id */
    InstanceId: string;
    /** 告警规则id列表 */
    AlertIds: string[];
  }

  interface DeletePrometheusAlertRuleResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusClusterAgentRequest {
    /** agent列表 */
    Agents: PrometheusAgentInfo[];
    /** 实例id */
    InstanceId: string;
    /** 在7天可回收期间，强制解除绑定 */
    Force?: boolean;
  }

  interface DeletePrometheusClusterAgentResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusConfigRequest {
    /** 实例id */
    InstanceId: string;
    /** 集群类型 */
    ClusterType: string;
    /** 集群id */
    ClusterId: string;
    /** 要删除的ServiceMonitor名字列表 */
    ServiceMonitors?: string[];
    /** 要删除的PodMonitor名字列表 */
    PodMonitors?: string[];
    /** 要删除的RawJobs名字列表 */
    RawJobs?: string[];
    /** 要删除的Probe名字列表 */
    Probes?: string[];
  }

  interface DeletePrometheusConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusRecordRuleYamlRequest {
    /** 实例id */
    InstanceId: string;
    /** 聚合规则列表 */
    Names: string[];
  }

  interface DeletePrometheusRecordRuleYamlResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusTempRequest {
    /** 模板id */
    TemplateId: string;
  }

  interface DeletePrometheusTempResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusTempSyncRequest {
    /** 模板id */
    TemplateId: string;
    /** 取消同步的对象列表 */
    Targets: PrometheusTemplateSyncTarget[];
  }

  interface DeletePrometheusTempSyncResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusTemplateRequest {
    /** 模板id */
    TemplateId: string;
  }

  interface DeletePrometheusTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeletePrometheusTemplateSyncRequest {
    /** 模板id */
    TemplateId: string;
    /** 取消同步的对象列表 */
    Targets: PrometheusTemplateSyncTarget[];
  }

  interface DeletePrometheusTemplateSyncResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteReservedInstancesRequest {
    /** 预留券实例ID。可通过 [DescribeReservedInstances](https://cloud.tencent.com/document/product/457/99162) 接口返回值中的ReservedInstanceId获取。 */
    ReservedInstanceIds: string[];
  }

  interface DeleteReservedInstancesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DeleteTKEEdgeClusterRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DeleteTKEEdgeClusterResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAddonRequest {
    /** 集群ID，请从容器服务控制台集群列表中获取（https://console.cloud.tencent.com/tke2/cluster）。 */
    ClusterId: string;
    /** addon名称（不传时会返回集群下全部的addon） */
    AddonName?: string;
  }

  interface DescribeAddonResponse {
    /** addon列表 */
    Addons?: Addon[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAddonValuesRequest {
    /** 集群ID，请从容器服务控制台集群列表中获取（https://console.cloud.tencent.com/tke2/cluster）。 */
    ClusterId: string;
    /** addon名称，请从容器服务控制台进入集群详情页后，在组件管理页面中获取。 */
    AddonName: string;
  }

  interface DescribeAddonValuesResponse {
    /** 参数列表，如果addon已安装，会使用已设置的参数和chart里的默认参数做渲染，是一个json格式的字符串，未安装addon时返回为空值。 */
    Values?: string;
    /** addon支持的参数列表，值为chart的默认值，是一个json格式的字符串。 */
    DefaultValues?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAvailableClusterVersionRequest {
    /** 集群 Id。若只查询某个集群可升级的版本，需填写此项。 */
    ClusterId?: string;
    /** 集群 Id 列表。若查询多个集群可升级的版本，需填写此项。 */
    ClusterIds?: string[];
  }

  interface DescribeAvailableClusterVersionResponse {
    /** 可升级的集群版本号 */
    Versions?: string[] | null;
    /** 集群信息 */
    Clusters?: ClusterVersion[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeAvailableTKEEdgeVersionRequest {
    /** 填写ClusterId获取当前集群各个组件版本和最新版本 */
    ClusterId?: string;
  }

  interface DescribeAvailableTKEEdgeVersionResponse {
    /** 版本列表 */
    Versions?: string[];
    /** 边缘集群最新版本 */
    EdgeVersionLatest?: string;
    /** 边缘集群当前版本 */
    EdgeVersionCurrent?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeBackupStorageLocationsRequest {
    /** 多个备份仓库名称，如果不填写，默认返回当前地域所有存储仓库名称 */
    Names?: string[];
  }

  interface DescribeBackupStorageLocationsResponse {
    /** 详细备份仓库信息 */
    BackupStorageLocationSet?: BackupStorageLocation[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeBatchModifyTagsStatusRequest {
    /** 集群id */
    ClusterId: string;
  }

  interface DescribeBatchModifyTagsStatusResponse {
    /** 失败资源列表 */
    FailedResources?: FailedResource[];
    /** 任务状态：- running 运行中- failed 失败- done 成功 */
    Status?: string;
    /** 是否同步集群内子资源标签 */
    SyncSubresource?: boolean;
    /** 集群标签 */
    Tags?: Tag[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterAsGroupOptionRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DescribeClusterAsGroupOptionResponse {
    /** 集群弹性伸缩属性 */
    ClusterAsGroupOption?: ClusterAsGroupOption;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterAsGroupsRequest {
    /** 集群ID */
    ClusterId: string;
    /** 伸缩组ID列表，如果为空，表示拉取集群关联的所有伸缩组。 */
    AutoScalingGroupIds?: string[];
    /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Limit?: number;
  }

  interface DescribeClusterAsGroupsResponse {
    /** 集群关联的伸缩组总数 */
    TotalCount?: number;
    /** 集群关联的伸缩组列表 */
    ClusterAsGroupSet?: ClusterAsGroup[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterAuthenticationOptionsRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DescribeClusterAuthenticationOptionsResponse {
    /** ServiceAccount认证配置 */
    ServiceAccounts?: ServiceAccountAuthenticationOptions;
    /** 最近一次修改操作结果，返回值可能为：Updating，Success，Failed，TimeOut */
    LatestOperationState?: string;
    /** OIDC认证配置 */
    OIDCConfig?: OIDCConfigAuthenticationOptions;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterCommonNamesRequest {
    /** 集群ID */
    ClusterId: string;
    /** 子账户列表，不可超出最大值50 */
    SubaccountUins?: string[];
    /** 角色ID列表，不可超出最大值50 */
    RoleIds?: string[];
  }

  interface DescribeClusterCommonNamesResponse {
    /** 子账户Uin与其客户端证书的CN字段映射 */
    CommonNames?: CommonName[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterControllersRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DescribeClusterControllersResponse {
    /** 描述集群中各个控制器的状态 */
    ControllerStatusSet?: ControllerStatus[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterEndpointStatusRequest {
    /** 集群ID */
    ClusterId: string;
    /** 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE） */
    IsExtranet?: boolean;
  }

  interface DescribeClusterEndpointStatusResponse {
    /** 查询集群访问端口状态（Created 开启成功，Creating 开启中，NotFound 未开启） */
    Status?: string;
    /** 开启访问入口失败信息 */
    ErrorMsg?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterEndpointVipStatusRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DescribeClusterEndpointVipStatusResponse {
    /** 端口操作状态 (Creating 创建中 CreateFailed 创建失败 Created 创建完成 Deleting 删除中 DeletedFailed 删除失败 Deleted 已删除 NotFound 未发现操作 ) */
    Status?: string;
    /** 操作失败的原因 */
    ErrorMsg?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterEndpointsRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DescribeClusterEndpointsResponse {
    /** 集群APIServer的CA证书 */
    CertificationAuthority?: string;
    /** 集群APIServer的外网访问地址 */
    ClusterExternalEndpoint?: string;
    /** 集群APIServer的内网访问地址 */
    ClusterIntranetEndpoint?: string;
    /** 集群APIServer的域名 */
    ClusterDomain?: string;
    /** 集群APIServer的外网访问ACL列表 */
    ClusterExternalACL?: string[] | null;
    /** 外网域名 */
    ClusterExternalDomain?: string;
    /** 内网域名 */
    ClusterIntranetDomain?: string;
    /** 外网安全组 */
    SecurityGroup?: string;
    /** 内网访问所属子网 */
    ClusterIntranetSubnetId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterExtraArgsRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DescribeClusterExtraArgsResponse {
    /** 集群自定义参数 */
    ClusterExtraArgs?: ClusterExtraArgs;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterInspectionResultsOverviewRequest {
    /** Array of String	目标集群列表，为空查询用户所有集群 */
    ClusterIds?: string[];
    /** 聚合字段信息，概览结果按照 GroupBy 信息聚合后返回，可选参数：catalogue.first：按一级分类聚合catalogue.second：按二级分类聚合 */
    GroupBy?: string[];
  }

  interface DescribeClusterInspectionResultsOverviewResponse {
    /** 诊断结果统计 */
    Statistics?: KubeJarvisStateStatistic[] | null;
    /** 诊断结果概览 */
    Diagnostics?: KubeJarvisStateDiagnosticOverview[] | null;
    /** 集群诊断结果概览 */
    InspectionOverview?: KubeJarvisStateInspectionOverview[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterInstancesRequest {
    /** 集群ID */
    ClusterId: string;
    /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Limit?: number;
    /** 需要获取的节点实例Id列表。如果为空，表示拉取集群下所有节点实例。 */
    InstanceIds?: string[];
    /** 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER。默认为WORKER类型。 */
    InstanceRole?: string;
    /** 过滤条件列表；Name的可选值为nodepool-id、nodepool-instance-type；Name为nodepool-id表示根据节点池id过滤机器，Value的值为具体的节点池id，Name为nodepool-instance-type表示节点加入节点池的方式，Value的值为MANUALLY_ADDED（手动加入节点池）、AUTOSCALING_ADDED（伸缩组扩容方式加入节点池）、ALL（手动加入节点池 和 伸缩组扩容方式加入节点池） */
    Filters?: Filter[];
  }

  interface DescribeClusterInstancesResponse {
    /** 集群中实例总数 */
    TotalCount?: number;
    /** 集群中实例列表 */
    InstanceSet?: Instance[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterKubeconfigRequest {
    /** 集群ID */
    ClusterId: string;
    /** 默认false 获取内网，是否获取外网访问的kubeconfig */
    IsExtranet?: boolean;
  }

  interface DescribeClusterKubeconfigResponse {
    /** 子账户kubeconfig文件，可用于直接访问集群kube-apiserver（入参IsExtranet为false，返回内网访问的kubeconfig，没开内网的情况下server会是一个默认域名；入参IsExtranet为true，返回外网的kubeconfig，没开外网的情况下server会是一个默认域名。默认域名默认不可达，需要自行处理） */
    Kubeconfig?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterLevelAttributeRequest {
    /** 集群ID，变配时使用 */
    ClusterID?: string;
  }

  interface DescribeClusterLevelAttributeResponse {
    /** 总数 */
    TotalCount?: number;
    /** 集群规模 */
    Items?: ClusterLevelAttribute[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterLevelChangeRecordsRequest {
    /** 集群ID */
    ClusterID: string;
    /** 开始时间 */
    StartAt?: string;
    /** 结束时间 */
    EndAt?: string;
    /** 偏移量,默认0 */
    Offset?: number;
    /** 最大输出条数，默认20 */
    Limit?: number;
  }

  interface DescribeClusterLevelChangeRecordsResponse {
    /** 总数 */
    TotalCount?: number;
    /** 集群规模 */
    Items?: ClusterLevelChangeRecord[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterNodePoolDetailRequest {
    /** 集群id */
    ClusterId: string;
    /** 节点池id */
    NodePoolId: string;
  }

  interface DescribeClusterNodePoolDetailResponse {
    /** 节点池详情 */
    NodePool?: NodePool;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterNodePoolsRequest {
    /** ClusterId（集群id） */
    ClusterId: string;
    /** · "Name":"NodePoolsName","Values": ["test"] 按照【节点池名】进行过滤。 类型：String 必选：否· "Name":"NodePoolsId","Values": ["np-d2mb2zb"] 按照【节点池id】进行过滤。 类型：String 必选：否· "Name":"Tags","Values": ["product:tke"] 按照【标签键值对】进行过滤。 类型：String 必选：否 */
    Filters?: Filter[];
  }

  interface DescribeClusterNodePoolsResponse {
    /** NodePools（节点池列表） */
    NodePoolSet?: NodePool[];
    /** 资源总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterPendingReleasesRequest {
    /** 集群ID */
    ClusterId: string;
    /** 返回数量限制，默认20，最大100 */
    Limit?: number;
    /** 偏移量，默认0 */
    Offset?: number;
    /** 集群类型 */
    ClusterType?: string;
  }

  interface DescribeClusterPendingReleasesResponse {
    /** 正在安装中应用列表 */
    ReleaseSet?: PendingRelease[];
    /** 每页返回数量限制 */
    Limit?: number;
    /** 页偏移量 */
    Offset?: number;
    /** 总数量 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterReleaseDetailsRequest {
    /** 集群ID */
    ClusterId: string;
    /** 应用名称 */
    Name: string;
    /** 应用所在命名空间 */
    Namespace: string;
    /** 集群类型 */
    ClusterType?: string;
  }

  interface DescribeClusterReleaseDetailsResponse {
    /** 应用详情 */
    Release?: ReleaseDetails;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterReleaseHistoryRequest {
    /** 集群ID */
    ClusterId: string;
    /** 应用名称 */
    Name: string;
    /** 应用所在命名空间 */
    Namespace: string;
    /** 集群类型 */
    ClusterType?: string;
  }

  interface DescribeClusterReleaseHistoryResponse {
    /** 已安装应用版本历史 */
    ReleaseHistorySet?: ReleaseHistory[];
    /** 总数量 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterReleasesRequest {
    /** 集群id */
    ClusterId: string;
    /** 每页数量限制 */
    Limit?: number;
    /** 页偏移量 */
    Offset?: number;
    /** 集群类型, 目前支持传入 tke, eks, tkeedge, external */
    ClusterType?: string;
    /** helm Release 安装的namespace */
    Namespace?: string;
    /** helm Release 的名字 */
    ReleaseName?: string;
    /** helm Chart 的名字 */
    ChartName?: string;
  }

  interface DescribeClusterReleasesResponse {
    /** 数量限制 */
    Limit?: number;
    /** 偏移量 */
    Offset?: number;
    /** 已安装应用列表 */
    ReleaseSet?: Release[];
    /** 已安装应用总数量 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterRouteTablesRequest {
  }

  interface DescribeClusterRouteTablesResponse {
    /** 符合条件的实例数量。 */
    TotalCount?: number;
    /** 集群路由表对象。 */
    RouteTableSet?: RouteTableInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterRoutesRequest {
    /** 路由表名称。与集群 ID 一致，可以到[集群控制台](https://console.cloud.tencent.com/tke2)进行复制。 */
    RouteTableName: string;
    /** 过滤条件,当前只支持按照单个条件GatewayIP进行过滤（可选） */
    Filters?: Filter[];
  }

  interface DescribeClusterRoutesResponse {
    /** 符合条件的实例数量。 */
    TotalCount?: number;
    /** 集群路由对象。 */
    RouteSet?: RouteInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterSecurityRequest {
    /** 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段 */
    ClusterId: string;
  }

  interface DescribeClusterSecurityResponse {
    /** 集群的账号名称 */
    UserName?: string;
    /** 集群的访问密码 */
    Password?: string;
    /** 集群访问CA证书 */
    CertificationAuthority?: string;
    /** 集群访问的地址 */
    ClusterExternalEndpoint?: string;
    /** 集群访问的域名 */
    Domain?: string;
    /** 集群Endpoint地址 */
    PgwEndpoint?: string;
    /** 集群访问策略组 */
    SecurityPolicy?: string[] | null;
    /** 集群Kubeconfig文件 */
    Kubeconfig?: string;
    /** 集群JnsGw的访问地址 */
    JnsGwEndpoint?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterStatusRequest {
    /** 集群ID列表，不传默认拉取所有集群 */
    ClusterIds?: string[];
  }

  interface DescribeClusterStatusResponse {
    /** 集群状态列表 */
    ClusterStatusSet?: ClusterStatus[];
    /** 集群个数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterVirtualNodePoolsRequest {
    /** 集群ID，通过DescribeClusters接口获取 */
    ClusterId: string;
  }

  interface DescribeClusterVirtualNodePoolsResponse {
    /** 节点池总数 */
    TotalCount?: number;
    /** 虚拟节点池列表 */
    NodePoolSet?: VirtualNodePool[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClusterVirtualNodeRequest {
    /** 集群ID，通过DescribeClusters接口获取 */
    ClusterId: string;
    /** 节点池ID，通过DescribeNodePools接口获取 */
    NodePoolId?: string;
    /** 节点名称，可搜索DescribeClusterVirtualNode接口节点 */
    NodeNames?: string[];
  }

  interface DescribeClusterVirtualNodeResponse {
    /** 节点列表 */
    Nodes?: VirtualNode[];
    /** 节点总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeClustersRequest {
    /** 集群ID列表(为空时，表示获取账号下所有集群) */
    ClusterIds?: string[];
    /** 偏移量,默认0 */
    Offset?: number;
    /** 最大输出条数，默认20，最大为100 */
    Limit?: number;
    /** · "Name":"ClusterName","Values": ["test"] 按照【集群名】进行过滤。 类型：String 必选：否 · "Name":"ClusterType","Values": ["MANAGED_CLUSTER"] 按照【集群类型】进行过滤。 类型：String 必选：否 · "Name":"ClusterStatus","Values": ["Running"] 按照【集群状态】进行过滤。 类型：String 必选：否 · "Name":"vpc-id","Values": ["vpc-2wds9k9p"] 按照【VPC】进行过滤。 类型：String 必选：否 · "Name":"tag-key","Values": ["testKey"] 按照【标签键】进行过滤。 类型：String 必选：否 · "Name":"tag-value","Values": ["testValue"] 按照【标签值】进行过滤。 类型：String 必选：否 · "Name":"Tags","Values": ["product:tke"] 按照【标签键值对】进行过滤。 类型：String 必选：否 */
    Filters?: Filter[];
    /** 集群类型，例如：MANAGED_CLUSTER */
    ClusterType?: string;
  }

  interface DescribeClustersResponse {
    /** 集群总个数 */
    TotalCount?: number;
    /** 集群信息列表 */
    Clusters?: Cluster[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeECMInstancesRequest {
    /** 集群id */
    ClusterID: string;
    /** 过滤条件仅支持ecm-id过滤 */
    Filters?: Filter[];
  }

  interface DescribeECMInstancesResponse {
    /** 返回的实例相关信息列表的长度 */
    TotalCount?: number;
    /** 返回的实例相关信息列表 */
    InstanceInfoSet?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEKSClusterCredentialRequest {
    /** 集群Id */
    ClusterId: string;
  }

  interface DescribeEKSClusterCredentialResponse {
    /** 集群的接入地址信息 */
    Addresses?: IPAddress[];
    /** 集群的认证信息（token只有请求是主账号才返回，子账户请使用返回的kubeconfig） */
    Credential?: ClusterCredential;
    /** 集群的公网访问信息 */
    PublicLB?: ClusterPublicLB;
    /** 集群的内网访问信息 */
    InternalLB?: ClusterInternalLB;
    /** 标记是否新的内外网功能 */
    ProxyLB?: boolean;
    /** 连接用户集群k8s 的Config */
    Kubeconfig?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEKSClustersRequest {
    /** 集群ID列表(为空时，表示获取账号下所有集群) */
    ClusterIds?: string[];
    /** 偏移量,默认0 */
    Offset?: number;
    /** 最大输出条数，默认20 */
    Limit?: number;
    /** 过滤条件,当前只支持按照单个条件ClusterName进行过滤 */
    Filters?: Filter[];
  }

  interface DescribeEKSClustersResponse {
    /** 集群总个数 */
    TotalCount?: number;
    /** 集群信息列表 */
    Clusters?: EksCluster[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEKSContainerInstanceEventRequest {
    /** 容器实例id */
    EksCiId: string;
    /** 最大事件数量。默认为50，最大取值100。 */
    Limit?: number;
  }

  interface DescribeEKSContainerInstanceEventResponse {
    /** 事件集合 */
    Events?: Event[];
    /** 容器实例id */
    EksCiId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEKSContainerInstanceRegionsRequest {
  }

  interface DescribeEKSContainerInstanceRegionsResponse {
    /** EKS Container Instance支持的地域信息 */
    Regions?: EksCiRegionInfo[];
    /** 总数 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEKSContainerInstancesRequest {
    /** 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100 */
    Limit?: number;
    /** 偏移量,默认0 */
    Offset?: number;
    /** 过滤条件，可条件：(1)实例名称KeyName: eks-ci-name类型：String(2)实例状态KeyName: status类型：String可选值："Pending", "Running", "Succeeded", "Failed"(3)内网ipKeyName: private-ip类型：String(4)EIP地址KeyName: eip-address类型：String(5)VpcIdKeyName: vpc-id类型：String */
    Filters?: Filter[];
    /** 容器实例 ID 数组 */
    EksCiIds?: string[];
  }

  interface DescribeEKSContainerInstancesResponse {
    /** 容器组总数 */
    TotalCount?: number;
    /** 容器组列表 */
    EksCis?: EksCi[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEdgeAvailableExtraArgsRequest {
    /** 集群版本 */
    ClusterVersion?: string;
  }

  interface DescribeEdgeAvailableExtraArgsResponse {
    /** 集群版本 */
    ClusterVersion?: string;
    /** 可用的自定义参数 */
    AvailableExtraArgs?: EdgeAvailableExtraArgs | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEdgeCVMInstancesRequest {
    /** 集群id */
    ClusterID: string;
    /** 过滤条件仅支持cvm-id过滤 */
    Filters?: Filter[];
  }

  interface DescribeEdgeCVMInstancesResponse {
    /** 返回的实例相关信息列表的长度 */
    TotalCount?: number;
    /** 返回的实例相关信息列表 */
    InstanceInfoSet?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEdgeClusterExtraArgsRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DescribeEdgeClusterExtraArgsResponse {
    /** 集群自定义参数 */
    ClusterExtraArgs?: EdgeClusterExtraArgs;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEdgeClusterInstancesRequest {
    /** 集群id */
    ClusterID: string;
    /** 查询总数 */
    Limit: number;
    /** 偏移量 */
    Offset: number;
    /** 过滤条件，仅支持NodeName过滤 */
    Filters?: Filter[];
  }

  interface DescribeEdgeClusterInstancesResponse {
    /** 该集群总数 */
    TotalCount?: number;
    /** 节点信息集合 */
    InstanceInfoSet?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEdgeClusterUpgradeInfoRequest {
    /** 集群ID */
    ClusterId: string;
    /** 要升级到的TKEEdge版本 */
    EdgeVersion: string;
  }

  interface DescribeEdgeClusterUpgradeInfoResponse {
    /** 可升级的集群组件及其版本 */
    ComponentVersion?: string;
    /** 边缘集群当前版本 */
    EdgeVersionCurrent?: string;
    /** 边缘组件镜像仓库地址前缀，包含域名和命名空间 */
    RegistryPrefix?: string;
    /** 集群升级状态，可能值：running、updating、failed */
    ClusterUpgradeStatus?: string;
    /** 集群升级中状态或者失败原因 */
    ClusterUpgradeStatusReason?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEdgeLogSwitchesRequest {
    /** 集群ID列表 */
    ClusterIds: string[];
  }

  interface DescribeEdgeLogSwitchesResponse {
    /** 集群日志开关集合 */
    SwitchSet?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEksContainerInstanceLogRequest {
    /** Eks Container Instance Id，即容器实例Id */
    EksCiId: string;
    /** 容器名称，单容器的实例可选填。如果为多容器实例，请指定容器名称。 */
    ContainerName?: string;
    /** 返回最新日志行数，默认500，最大2000。日志内容最大返回 1M 数据。 */
    Tail?: number;
    /** UTC时间，RFC3339标准 */
    StartTime?: string;
    /** 是否是查上一个容器（如果容器退出重启了） */
    Previous?: boolean;
    /** 查询最近多少秒内的日志 */
    SinceSeconds?: number;
    /** 日志总大小限制 */
    LimitBytes?: number;
  }

  interface DescribeEksContainerInstanceLogResponse {
    /** 容器名称 */
    ContainerName?: string;
    /** 日志内容 */
    LogContent?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEnableVpcCniProgressRequest {
    /** 开启vpc-cni的集群ID */
    ClusterId: string;
  }

  interface DescribeEnableVpcCniProgressResponse {
    /** 任务进度的描述：Running/Succeed/Failed */
    Status?: string;
    /** 当任务进度为Failed时，对任务状态的进一步描述，例如IPAMD组件安装失败 */
    ErrorMessage?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeEncryptionStatusRequest {
    /** 集群id */
    ClusterId: string;
  }

  interface DescribeEncryptionStatusResponse {
    /** 加密状态- Opening: 开启中- Opened: 已开启- Closing: 关闭中- Closed: 已关闭 */
    Status?: string;
    /** 加密错误信息 */
    ErrorMsg?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeExistedInstancesRequest {
    /** 集群 ID，请填写查询集群列表 接口中返回的 ClusterId 字段（仅通过ClusterId获取需要过滤条件中的VPCID。节点状态比较时会使用该地域下所有集群中的节点进行比较。参数不支持同时指定InstanceIds和ClusterId。 */
    ClusterId?: string;
    /** 按照一个或者多个实例ID查询。实例ID形如：ins-xxxxxxxx。（此参数的具体格式可参考API简介的id.N一节）。每次请求的实例的上限为100。参数不支持同时指定InstanceIds和Filters。 */
    InstanceIds?: string[];
    /** 过滤条件,字段和详见[CVM查询实例](https://cloud.tencent.com/document/api/213/15728)如果设置了ClusterId，会附加集群的VPCID作为查询字段，在此情况下如果在Filter中指定了"vpc-id"作为过滤字段，指定的VPCID必须与集群的VPCID相同。 */
    Filters?: Filter[];
    /** 实例IP进行过滤(同时支持内网IP和外网IP) */
    VagueIpAddress?: string;
    /** 实例名称进行过滤 */
    VagueInstanceName?: string;
    /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
    Limit?: number;
    /** 根据多个实例IP进行过滤 */
    IpAddresses?: string[];
  }

  interface DescribeExistedInstancesResponse {
    /** 已经存在的实例信息数组。 */
    ExistedInstanceSet?: ExistedInstance[];
    /** 符合条件的实例数量。 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeExternalNodeSupportConfigRequest {
    /** 集群Id */
    ClusterId: string;
  }

  interface DescribeExternalNodeSupportConfigResponse {
    /** 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突。且网段范围必须在内网网段内，例如:10.1.0.0/14, 192.168.0.1/18,172.16.0.0/16。 */
    ClusterCIDR?: string;
    /** 集群网络插件类型，支持：CiliumBGP、CiliumVXLan */
    NetworkType?: string;
    /** 子网ID */
    SubnetId?: string;
    /** 是否开启第三方节点专线连接支持 */
    Enabled?: boolean;
    /** 节点所属交换机的BGP AS 号 */
    AS?: string;
    /** 节点所属交换机的交换机 IP */
    SwitchIP?: string;
    /** 开启第三方节点池状态 */
    Status?: string;
    /** 如果开启失败原因 */
    FailedReason?: string;
    /** 内网访问地址 */
    Master?: string;
    /** 镜像仓库代理地址 */
    Proxy?: string;
    /** 用于记录开启第三方节点的过程进行到哪一步了 */
    Progress?: Step[] | null;
    /** 是否开启第三方节点公网连接支持 */
    EnabledPublicConnect?: boolean;
    /** 注册节点公网版公网连接地址 */
    PublicConnectUrl?: string;
    /** 注册节点公网版自定义域名 */
    PublicCustomDomain?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeIPAMDRequest {
    /** 集群 ID，请[登录控制台](https://console.cloud.tencent.com/tke2/cluster)在集群列表复制ID */
    ClusterId: string;
  }

  interface DescribeIPAMDResponse {
    /** 是否安装了eniipamd组件 */
    EnableIPAMD?: boolean;
    /** 是否开启自定义podcidr，默认为false，已安装eniipamd组件才意义 */
    EnableCustomizedPodCidr?: boolean;
    /** 是否不开启vpccni模式，默认为false，已安装eniipamd组件才意义 */
    DisableVpcCniMode?: boolean;
    /** 组件状态，已安装eniipamd组件才会有值 */
    Phase?: string;
    /** 错误信息，已安装eniipamd组件且状态为非running才会有错误信息 */
    Reason?: string;
    /** 子网信息，已安装eniipamd组件才会有值 */
    SubnetIds?: string[] | null;
    /** 固定ip回收时间，已安装eniipamd组件才会有值 */
    ClaimExpiredDuration?: string;
    /** 是否开启了中继网卡模式 */
    EnableTrunkingENI?: boolean;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeImageCachesRequest {
    /** 镜像缓存Id数组 */
    ImageCacheIds?: string[];
    /** 镜像缓存名称数组 */
    ImageCacheNames?: string[];
    /** 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过50 */
    Limit?: number;
    /** 偏移量,默认0 */
    Offset?: number;
    /** 过滤条件，可选条件：(1)实例名称KeyName: image-cache-name类型：String */
    Filters?: Filter[];
  }

  interface DescribeImageCachesResponse {
    /** 镜像缓存总数 */
    TotalCount?: number;
    /** 镜像缓存信息列表 */
    ImageCaches?: ImageCache[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeImagesRequest {
  }

  interface DescribeImagesResponse {
    /** 镜像数量 */
    TotalCount?: number;
    /** 镜像信息列表 */
    ImageInstanceSet?: ImageInstance[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLogConfigsRequest {
    /** 集群ID */
    ClusterId: string;
    /** 当前集群类型支持tke、eks。默认为tke */
    ClusterType?: string;
    /** 按照采集规则名称查找，多个采集规则使用 "," 分隔。 */
    LogConfigNames?: string;
    /** 偏移量,默认0 */
    Offset?: number;
    /** 最大输出条数，默认20，最大为100 */
    Limit?: number;
  }

  interface DescribeLogConfigsResponse {
    /** 分页查找时返回采集规则总数 */
    Total?: number;
    /** 指定采集规则名称查找，部分失败时返回失败采集规则名称及最后一个失败原因 */
    Message?: string;
    /** 采集规则查询结果 */
    LogConfigs?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeLogSwitchesRequest {
    /** 集群ID列表 */
    ClusterIds: string[];
    /** 集群类型，tke 或eks */
    ClusterType?: string;
  }

  interface DescribeLogSwitchesResponse {
    /** 集群日志开关集合 */
    SwitchSet?: Switch[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeMasterComponentRequest {
    /** 集群ID */
    ClusterId: string;
    /** master组件名称，支持kube-apiserver、kube-scheduler、kube-controller-manager */
    Component: string;
  }

  interface DescribeMasterComponentResponse {
    /** master组件名称 */
    Component?: string;
    /** master组件状态，三种状态：running、updating、shutdown */
    Status?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOSImagesRequest {
  }

  interface DescribeOSImagesResponse {
    /** 镜像信息列表 */
    OSImageSeriesSet?: OSImage[];
    /** 镜像数量 */
    TotalCount?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeOpenPolicyListRequest {
    /** 集群ID，请从容器服务集群列表获取（https://console.cloud.tencent.com/tke2/cluster） */
    ClusterId: string;
    /** 策略分类 基线：baseline 优选：priority 可选：optional */
    Category?: string;
  }

  interface DescribeOpenPolicyListResponse {
    /** 策略信息列表 */
    OpenPolicyInfoList?: OpenPolicyInfo[];
    /** 集群内是否安装了gatekeeper addon */
    GatekeeperStatus?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePodChargeInfoRequest {
    /** 集群 ID。TKE 集群可通过 [DescribeClusters](https://cloud.tencent.com/document/api/457/31862) 接口返回值中的ClusterId获取。 */
    ClusterId: string;
    /** 命名空间 */
    Namespace?: string;
    /** Pod名称 */
    Name?: string;
    /** Pod的Uid，可以通过Uids 来批量查询，也可以通过 Namespace 和 Name 来查询某个 Pod 的计费信息。Uids 不传时，Namespace 和 Name 必须同时传。 */
    Uids?: string[];
  }

  interface DescribePodChargeInfoResponse {
    /** Pod计费信息 */
    ChargeInfoSet?: PodChargeInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePodDeductionRateRequest {
    /** 可用区 */
    Zone?: string;
    /** 集群 ID */
    ClusterId?: string;
    /** 节点 ID */
    NodeName?: string;
  }

  interface DescribePodDeductionRateResponse {
    /** 各个规格的 可被预留券抵扣的Pod 抵扣率 */
    PodDeductionRateSet?: PodDeductionRate[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePodsBySpecRequest {
    /** 核数 */
    Cpu: number;
    /** 内存，单位：GiB */
    Memory: number;
    /** 卡数，有0.25、0.5、1、2、4和8 */
    GpuNum?: string;
    /** 可用区 */
    Zone?: string;
    /** 集群 ID */
    ClusterId?: string;
    /** 节点 ID */
    NodeName?: string;
    /** 偏移量，默认0。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。 */
    Limit?: number;
    /** pod-type按照**【Pod 类型**】进行过滤。资源类型：intel、amd、v100、t4、a10\*gnv4、a10\*gnv4v等。类型：String必选：否pod-deduct按照**【上个周期抵扣的Pod**】进行过滤。Values可不设置。必选：否pod-not-deduct按照**【上个周期未抵扣的Pod**】进行过滤。Values可不设置。必选：否 */
    Filters?: Filter[];
  }

  interface DescribePodsBySpecResponse {
    /** Pod 总数 */
    TotalCount?: number;
    /** Pod 节点信息 */
    PodSet?: PodNodeInfo[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePostNodeResourcesRequest {
    /** 集群 ID */
    ClusterId: string;
    /** 节点名称 */
    NodeName?: string;
  }

  interface DescribePostNodeResourcesResponse {
    /** Pod详情 */
    PodSet?: SuperNodeResource[];
    /** 预留券详情 */
    ReservedInstanceSet?: SuperNodeResource[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusAgentInstancesRequest {
    /** 集群id可以是tke, eks, edge的集群id */
    ClusterId: string;
  }

  interface DescribePrometheusAgentInstancesResponse {
    /** 关联该集群的实例列表 */
    Instances?: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusAgentsRequest {
    /** 实例id */
    InstanceId: string;
    /** 用于分页 */
    Offset?: number;
    /** 用于分页 */
    Limit?: number;
  }

  interface DescribePrometheusAgentsResponse {
    /** 被关联集群信息 */
    Agents?: PrometheusAgentOverview[];
    /** 被关联集群总量 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusAlertHistoryRequest {
    /** 实例id */
    InstanceId: string;
    /** 告警名称 */
    RuleName?: string;
    /** 开始时间 */
    StartTime?: string;
    /** 结束时间 */
    EndTime?: string;
    /** label集合 */
    Labels?: string;
    /** 分片 */
    Offset?: number;
    /** 分片 */
    Limit?: number;
  }

  interface DescribePrometheusAlertHistoryResponse {
    /** 告警历史 */
    Items?: PrometheusAlertHistoryItem[];
    /** 总数 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusAlertPolicyRequest {
    /** 实例id */
    InstanceId: string;
    /** 分页 */
    Offset?: number;
    /** 分页 */
    Limit?: number;
    /** 过滤支持ID，Name */
    Filters?: Filter[];
  }

  interface DescribePrometheusAlertPolicyResponse {
    /** 告警详情 */
    AlertRules?: PrometheusAlertPolicyItem[] | null;
    /** 总数 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusAlertRuleRequest {
    /** 实例id */
    InstanceId: string;
    /** 分页 */
    Offset?: number;
    /** 分页 */
    Limit?: number;
    /** 过滤支持ID，Name */
    Filters?: Filter[];
  }

  interface DescribePrometheusAlertRuleResponse {
    /** 告警详情 */
    AlertRules?: PrometheusAlertRuleDetail[];
    /** 总数 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusClusterAgentsRequest {
    /** 实例id */
    InstanceId: string;
    /** 用于分页 */
    Offset?: number;
    /** 用于分页 */
    Limit?: number;
  }

  interface DescribePrometheusClusterAgentsResponse {
    /** 被关联集群信息 */
    Agents?: PrometheusAgentOverview[];
    /** 被关联集群总量 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusConfigRequest {
    /** 实例id */
    InstanceId: string;
    /** 集群id */
    ClusterId: string;
    /** 集群类型 */
    ClusterType: string;
  }

  interface DescribePrometheusConfigResponse {
    /** 全局配置 */
    Config?: string;
    /** ServiceMonitor配置 */
    ServiceMonitors?: PrometheusConfigItem[];
    /** PodMonitor配置 */
    PodMonitors?: PrometheusConfigItem[];
    /** 原生Job */
    RawJobs?: PrometheusConfigItem[];
    /** Probe配置 */
    Probes?: PrometheusConfigItem[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusGlobalConfigRequest {
    /** 实例级别抓取配置 */
    InstanceId: string;
    /** 是否禁用统计 */
    DisableStatistics?: boolean;
  }

  interface DescribePrometheusGlobalConfigResponse {
    /** 配置内容 */
    Config?: string;
    /** ServiceMonitors列表以及对应targets信息 */
    ServiceMonitors?: PrometheusConfigItem[] | null;
    /** PodMonitors列表以及对应targets信息 */
    PodMonitors?: PrometheusConfigItem[] | null;
    /** RawJobs列表以及对应targets信息 */
    RawJobs?: PrometheusConfigItem[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusGlobalNotificationRequest {
    /** 实例ID */
    InstanceId: string;
  }

  interface DescribePrometheusGlobalNotificationResponse {
    /** 全局告警通知渠道 */
    Notification?: PrometheusNotificationItem | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusInstanceInitStatusRequest {
    /** 实例ID */
    InstanceId: string;
  }

  interface DescribePrometheusInstanceInitStatusResponse {
    /** 实例初始化状态，取值：uninitialized 未初始化 initializing 初始化中running 初始化完成，运行中 */
    Status?: string | null;
    /** 初始化任务步骤 */
    Steps?: TaskStepInfo[] | null;
    /** 实例eks集群ID */
    EksClusterId?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusInstanceRequest {
    /** 实例id */
    InstanceId: string;
  }

  interface DescribePrometheusInstanceResponse {
    /** 实例id */
    InstanceId?: string;
    /** 实例名称 */
    Name?: string;
    /** 私有网络id */
    VpcId?: string;
    /** 子网id */
    SubnetId?: string;
    /** cos桶名称 */
    COSBucket?: string;
    /** 数据查询地址 */
    QueryAddress?: string;
    /** 实例中grafana相关的信息 */
    Grafana?: PrometheusGrafanaInfo | null;
    /** 用户自定义alertmanager */
    AlertManagerUrl?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusInstancesOverviewRequest {
    /** 用于分页 */
    Offset?: number;
    /** 用于分页 */
    Limit?: number;
    /** 过滤实例，目前支持：ID: 通过实例ID来过滤 Name: 通过实例名称来过滤 */
    Filters?: Filter[];
  }

  interface DescribePrometheusInstancesOverviewResponse {
    /** 实例列表 */
    Instances?: PrometheusInstancesOverview[];
    /** 实例总数 */
    Total?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusOverviewsRequest {
    /** 用于分页 */
    Offset?: number;
    /** 用于分页 */
    Limit?: number;
    /** 过滤实例，目前支持：ID: 通过实例ID来过滤 Name: 通过实例名称来过滤 */
    Filters?: Filter[];
  }

  interface DescribePrometheusOverviewsResponse {
    /** 实例列表 */
    Instances?: PrometheusInstanceOverview[];
    /** 实例总数 */
    Total?: number | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusRecordRulesRequest {
    /** 实例id */
    InstanceId: string;
    /** 分页 */
    Offset?: number;
    /** 分页 */
    Limit?: number;
    /** 过滤 */
    Filters?: Filter[];
  }

  interface DescribePrometheusRecordRulesResponse {
    /** 聚合规则 */
    Records?: PrometheusRecordRuleYamlItem[];
    /** 总数 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusTargetsRequest {
    /** 实例id */
    InstanceId: string;
    /** 集群类型 */
    ClusterType: string;
    /** 集群id */
    ClusterId: string;
    /** 过滤条件，当前支持Name=stateValue=up, down, unknown */
    Filters?: Filter[];
  }

  interface DescribePrometheusTargetsResponse {
    /** 所有Job的targets信息 */
    Jobs?: PrometheusJobTargets[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusTempRequest {
    /** 模糊过滤条件，支持Level 按模板级别过滤Name 按名称过滤Describe 按描述过滤ID 按templateId过滤 */
    Filters?: Filter[];
    /** 分页偏移 */
    Offset?: number;
    /** 总数限制 */
    Limit?: number;
  }

  interface DescribePrometheusTempResponse {
    /** 模板列表 */
    Templates?: PrometheusTemp[];
    /** 总数 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusTempSyncRequest {
    /** 模板ID */
    TemplateId: string;
  }

  interface DescribePrometheusTempSyncResponse {
    /** 同步目标详情 */
    Targets?: PrometheusTemplateSyncTarget[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusTemplateSyncRequest {
    /** 模板ID */
    TemplateId: string;
  }

  interface DescribePrometheusTemplateSyncResponse {
    /** 同步目标详情 */
    Targets?: PrometheusTemplateSyncTarget[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribePrometheusTemplatesRequest {
    /** 模糊过滤条件，支持Level 按模板级别过滤Name 按名称过滤Describe 按描述过滤ID 按templateId过滤 */
    Filters?: Filter[];
    /** 分页偏移 */
    Offset?: number;
    /** 总数限制 */
    Limit?: number;
  }

  interface DescribePrometheusTemplatesResponse {
    /** 模板列表 */
    Templates?: PrometheusTemplate[];
    /** 总数 */
    Total?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRIUtilizationDetailRequest {
    /** 偏移量，默认0。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。 */
    Limit?: number;
    /** reserved-instance-id按照**【预留实例ID**】进行过滤。预留实例ID形如：eksri-xxxxxxxx。类型：String必选：否begin-time按照**【抵扣开始时间**】进行过滤。形如：2023-06-28 15:27:40。类型：String必选：否end-time按照**【抵扣结束时间**】进行过滤。形如：2023-06-28 15:27:40。类型：String必选：否 */
    Filters?: Filter[];
  }

  interface DescribeRIUtilizationDetailResponse {
    /** 总数。 */
    TotalCount?: number;
    /** 详情。 */
    RIUtilizationDetailSet?: RIUtilizationDetail[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRegionsRequest {
  }

  interface DescribeRegionsResponse {
    /** 地域的数量 */
    TotalCount?: number;
    /** 地域列表 */
    RegionInstanceSet?: RegionInstance[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeReservedInstanceUtilizationRateRequest {
    /** 可用区 */
    Zone?: string;
    /** 集群 ID */
    ClusterId?: string;
    /** 节点 ID */
    NodeName?: string;
  }

  interface DescribeReservedInstanceUtilizationRateResponse {
    /** 预留券使用率 */
    UtilizationRateSet?: ReservedInstanceUtilizationRate[];
    /** 按量计费的 Pod 总数 */
    PodNum?: number;
    /** Pod 被预留券抵扣的抵扣率 */
    PodRate?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeReservedInstancesRequest {
    /** 偏移量，默认0。 */
    Offset?: number;
    /** 返回数量，默认为20，最大值为100。 */
    Limit?: number;
    /** status按照**【状态**】进行过滤。状态：Creating：创建中、Active：生效中、Expired：已过期、Refunded：已退还。类型：String必选：否resource-type按照**【资源类型**】进行过滤。资源类型：common、amd、v100、t4、a10\*gnv4、a10\*gnv4v等，common表示通用类型。类型：String必选：否cpu按照**【核数**】进行过滤。类型：String必选：否memory按照**【内存**】进行过滤。类型：String必选：否gpu按照**【GPU卡数**】进行过滤，取值有0.25、0.5、1、2、4等。类型：String必选：否cluster-id按照**【集群ID**】进行过滤。类型：String必选：否node-name按照**【节点名称**】进行过滤。类型：String必选：否scope按照**【可用区**】进行过滤。比如：ap-guangzhou-2，为空字符串表示地域抵扣范围。如果只过滤可用区抵扣范围，需要同时将cluster-id、node-name设置为空字符串。类型：String必选：否reserved-instance-id按照**【预留实例ID**】进行过滤。预留实例ID形如：eksri-xxxxxxxx。类型：String必选：否reserved-instance-name按照**【预留实例名称**】进行过滤。类型：String必选：否reserved-instance-deduct按照**【上个周期抵扣的预留券**】进行过滤。Values可不设置。必选：否reserved-instance-not-deduct按照**【上个周期未抵扣的预留券**】进行过滤。Values可不设置。必选：否 */
    Filters?: Filter[];
    /** 排序字段。支持CreatedAt、ActiveAt、ExpireAt。默认值CreatedAt。 */
    OrderField?: string;
    /** 排序方法。顺序：ASC，倒序：DESC。默认值DESC。 */
    OrderDirection?: string;
  }

  interface DescribeReservedInstancesResponse {
    /** 总数。 */
    TotalCount?: number;
    /** 预留实例列表。 */
    ReservedInstanceSet?: ReservedInstance[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeResourceUsageRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DescribeResourceUsageResponse {
    /** CRD使用量 */
    CRDUsage?: ResourceUsage;
    /** Pod使用量 */
    PodUsage?: number;
    /** ReplicaSet使用量 */
    RSUsage?: number;
    /** ConfigMap使用量 */
    ConfigMapUsage?: number;
    /** 其他资源使用量 */
    OtherUsage?: ResourceUsage;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeRouteTableConflictsRequest {
    /** 路由表CIDR */
    RouteTableCidrBlock: string;
    /** 路由表绑定的VPC，请到 [VPC 控制台](https://console.cloud.tencent.com/vpc/vpc)复制 VPC ID */
    VpcId: string;
  }

  interface DescribeRouteTableConflictsResponse {
    /** 路由表是否冲突。 */
    HasConflict?: boolean;
    /** 路由表冲突列表。 */
    RouteTableConflictSet?: RouteTableConflict[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeSupportedRuntimeRequest {
    /** K8S版本 */
    K8sVersion: string;
  }

  interface DescribeSupportedRuntimeResponse {
    /** 可选运行时列表 */
    OptionalRuntimes?: OptionalRuntimes[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTKEEdgeClusterCredentialRequest {
    /** 集群Id */
    ClusterId: string;
  }

  interface DescribeTKEEdgeClusterCredentialResponse {
    /** 集群的接入地址信息 */
    Addresses?: IPAddress[] | null;
    /** 集群的认证信息 */
    Credential?: ClusterCredential;
    /** 集群的公网访问信息 */
    PublicLB?: EdgeClusterPublicLB;
    /** 集群的内网访问信息 */
    InternalLB?: EdgeClusterInternalLB;
    /** 集群的CoreDns部署信息 */
    CoreDns?: string;
    /** 集群的健康检查多地域部署信息 */
    HealthRegion?: string;
    /** 集群的健康检查部署信息 */
    Health?: string;
    /** 是否部署GridDaemon以支持headless service */
    GridDaemon?: string;
    /** 公网访问kins集群 */
    UnitCluster?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTKEEdgeClusterStatusRequest {
    /** 边缘计算容器集群Id */
    ClusterId: string;
  }

  interface DescribeTKEEdgeClusterStatusResponse {
    /** 集群当前状态 */
    Phase?: string;
    /** 集群过程数组 */
    Conditions?: ClusterCondition[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTKEEdgeClustersRequest {
    /** 集群ID列表(为空时，表示获取账号下所有集群) */
    ClusterIds?: string[];
    /** 偏移量,默认0 */
    Offset?: number;
    /** 最大输出条数，默认20 */
    Limit?: number;
    /** 过滤条件,当前只支持按照ClusterName和云标签进行过滤,云标签过滤格式Tags:["key1:value1","key2:value2"] */
    Filters?: Filter[];
  }

  interface DescribeTKEEdgeClustersResponse {
    /** 集群总个数 */
    TotalCount?: number;
    /** 集群信息列表 */
    Clusters?: EdgeCluster[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTKEEdgeExternalKubeconfigRequest {
    /** 集群id */
    ClusterId: string;
  }

  interface DescribeTKEEdgeExternalKubeconfigResponse {
    /** kubeconfig文件内容 */
    Kubeconfig?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeTKEEdgeScriptRequest {
    /** 集群id */
    ClusterId: string;
    /** 网卡名,指定边缘节点上kubelet向apiserver注册使用的网卡 */
    Interface: string;
    /** 节点名字 */
    NodeName?: string;
    /** json格式的节点配置 */
    Config?: string;
    /** 可以下载某个历史版本的edgectl脚本，默认下载最新版本，edgectl版本信息可以在脚本里查看 */
    ScriptVersion?: string;
  }

  interface DescribeTKEEdgeScriptResponse {
    /** 下载链接 */
    Link?: string;
    /** 下载需要的token */
    Token?: string;
    /** 下载命令 */
    Command?: string;
    /** edgectl脚本版本，默认拉取最新版本 */
    ScriptVersion?: string | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeVersionsRequest {
  }

  interface DescribeVersionsResponse {
    /** 版本数量 */
    TotalCount?: number;
    /** 版本列表 */
    VersionInstanceSet?: VersionInstance[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DescribeVpcCniPodLimitsRequest {
    /** 查询的机型所在可用区，如：ap-guangzhou-3，默认为空，即不按可用区过滤信息 */
    Zone?: string;
    /** 查询的实例机型系列信息，如：S5，默认为空，即不按机型系列过滤信息 */
    InstanceFamily?: string;
    /** 查询的实例机型信息，如：S5.LARGE8，默认为空，即不按机型过滤信息 */
    InstanceType?: string;
  }

  interface DescribeVpcCniPodLimitsResponse {
    /** 机型数据数量 */
    TotalCount?: number;
    /** 机型信息及其可支持的最大VPC-CNI模式Pod数量信息 */
    PodLimitsInstanceSet?: PodLimitsInstance[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DisableClusterAuditRequest {
    /** 集群ID */
    ClusterId: string;
    /** 取值为true代表关闭集群审计时删除默认创建的日志集和主题，false代表不删除 */
    DeleteLogSetAndTopic?: boolean;
  }

  interface DisableClusterAuditResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DisableClusterDeletionProtectionRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DisableClusterDeletionProtectionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DisableEncryptionProtectionRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DisableEncryptionProtectionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DisableEventPersistenceRequest {
    /** 集群ID */
    ClusterId: string;
    /** 取值为true代表关闭集群审计时删除默认创建的日志集和主题，false代表不删除 */
    DeleteLogSetAndTopic?: boolean;
  }

  interface DisableEventPersistenceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DisableVpcCniNetworkTypeRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface DisableVpcCniNetworkTypeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface DrainClusterVirtualNodeRequest {
    /** 集群ID，通过DescribeClusters接口获取 */
    ClusterId: string;
    /** 节点ID */
    NodeName: string;
  }

  interface DrainClusterVirtualNodeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnableClusterAuditRequest {
    /** 集群ID */
    ClusterId: string;
    /** CLS日志集ID，可以通过cls接口或者控制台获取 */
    LogsetId?: string;
    /** CLS日志主题ID，可以通过cls接口或者控制台获取 */
    TopicId?: string;
    /** topic所在region，默认为集群当前region */
    TopicRegion?: string;
  }

  interface EnableClusterAuditResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnableClusterDeletionProtectionRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface EnableClusterDeletionProtectionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnableEncryptionProtectionRequest {
    /** 集群ID */
    ClusterId: string;
    /** kms加密配置 */
    KMSConfiguration: KMSConfiguration;
  }

  interface EnableEncryptionProtectionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnableEventPersistenceRequest {
    /** 集群ID */
    ClusterId: string;
    /** cls服务的logsetID，通过cls接口或者控制台获取 */
    LogsetId?: string;
    /** cls服务的topicID，通过cls接口或者控制台获取 */
    TopicId?: string;
    /** topic所在地域，默认为集群所在地域 */
    TopicRegion?: string;
  }

  interface EnableEventPersistenceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface EnableVpcCniNetworkTypeRequest {
    /** 集群ID */
    ClusterId: string;
    /** 开启vpc-cni的模式，tke-route-eni开启的是策略路由模式，tke-direct-eni开启的是独立网卡模式 */
    VpcCniType: string;
    /** 是否开启固定IP模式 */
    EnableStaticIp: boolean;
    /** 使用的容器子网 */
    Subnets: string[];
    /** 在固定IP模式下，Pod销毁后退还IP的时间，传参必须大于300；不传默认IP永不销毁。 */
    ExpiredSeconds?: number;
    /** 是否同步添加 vpc 网段到 ip-masq-agent-config 的 NonMasqueradeCIDRs 字段，默认 false 会同步添加 */
    SkipAddingNonMasqueradeCIDRs?: boolean;
  }

  interface EnableVpcCniNetworkTypeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ForwardTKEEdgeApplicationRequestV3Request {
    /** 请求集群addon的访问 */
    Method: string;
    /** 请求集群addon的路径 */
    Path: string;
    /** 请求集群addon后允许接收的数据格式 */
    Accept?: string;
    /** 请求集群addon的数据格式 */
    ContentType?: string;
    /** 请求集群addon的数据 */
    RequestBody?: string;
    /** 集群名称，例如cls-1234abcd */
    ClusterName?: string;
    /** 是否编码请求内容 */
    EncodedBody?: string;
  }

  interface ForwardTKEEdgeApplicationRequestV3Response {
    /** 请求集群addon后返回的数据 */
    ResponseBody?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetClusterLevelPriceRequest {
    /** 集群规格，托管集群询价 */
    ClusterLevel: string;
  }

  interface GetClusterLevelPriceResponse {
    /** 询价结果，单位：分，打折后 */
    Cost?: number;
    /** 询价结果，单位：分，折扣前 */
    TotalCost?: number;
    /** 总的折扣，100表示100%不打折 */
    Policy?: number;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetMostSuitableImageCacheRequest {
    /** 容器镜像列表 */
    Images: string[];
  }

  interface GetMostSuitableImageCacheResponse {
    /** 是否有匹配的镜像缓存 */
    Found?: boolean;
    /** 匹配的镜像缓存 */
    ImageCache?: ImageCache | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetTkeAppChartListRequest {
    /** app类型，取值log,scheduler,network,storage,monitor,dns,image,other,invisible */
    Kind?: string;
    /** app支持的操作系统，取值arm32、arm64、amd64 */
    Arch?: string;
    /** 集群类型，取值tke、eks */
    ClusterType?: string;
  }

  interface GetTkeAppChartListResponse {
    /** 所支持的chart列表 */
    AppCharts?: AppChart[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface GetUpgradeInstanceProgressRequest {
    /** 集群ID */
    ClusterId: string;
    /** 最多获取多少个节点的进度 */
    Limit?: number;
    /** 从第几个节点开始获取进度 */
    Offset?: number;
  }

  interface GetUpgradeInstanceProgressResponse {
    /** 升级节点总数 */
    Total?: number;
    /** 已升级节点总数 */
    Done?: number;
    /** 升级任务生命周期process 运行中paused 已停止pauing 正在停止done 已完成timeout 已超时aborted 已取消 */
    LifeState?: string;
    /** 各节点升级进度详情 */
    Instances?: InstanceUpgradeProgressItem[];
    /** 集群当前状态 */
    ClusterStatus?: InstanceUpgradeClusterStatus;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface InstallAddonRequest {
    /** 集群ID（仅支持标准tke集群），请从容器服务控制台集群列表中获取（https://console.cloud.tencent.com/tke2/cluster）。 */
    ClusterId: string;
    /** addon名称，请从容器服务控制台进入集群详情页后，在组件管理页面中获取。 */
    AddonName: string;
    /** addon版本（不传默认安装最新版本） */
    AddonVersion?: string;
    /** addon的参数，是一个json格式的base64转码后的字符串（addon参数由DescribeAddonValues获取） */
    RawValues?: string;
    /** 是否仅做安装检查，设置为true时仅做检查，不会安装组件。默认值为 false。 */
    DryRun?: boolean;
  }

  interface InstallAddonResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface InstallEdgeLogAgentRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface InstallEdgeLogAgentResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface InstallLogAgentRequest {
    /** TKE集群ID */
    ClusterId: string;
    /** kubelet根目录 */
    KubeletRootDir?: string;
    /** 集群类型 tke/eks，默认tke */
    ClusterType?: string;
  }

  interface InstallLogAgentResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ListClusterInspectionResultsItemsRequest {
    /** 目标集群ID */
    ClusterId: string;
    /** 查询历史结果的开始时间，Unix时间戳 */
    StartTime?: string;
    /** 查询历史结果的结束时间，默认当前距离开始时间3天，Unix时间戳 */
    EndTime?: string;
  }

  interface ListClusterInspectionResultsItemsResponse {
    /** 巡检结果历史列表 */
    InspectionResultsItems?: KubeJarvisStateInspectionResultsItem[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ListClusterInspectionResultsRequest {
    /** 目标集群列表，为空查询用户所有集群 */
    ClusterIds?: string[];
    /** 隐藏的字段信息，为了减少无效的字段返回，隐藏字段不会在返回值中返回。可选值：results */
    Hide?: string[];
    /** 指定查询结果的报告名称，默认查询最新的每个集群只查询最新的一条 */
    Name?: string;
  }

  interface ListClusterInspectionResultsResponse {
    /** 集群诊断结果列表 */
    InspectionResults?: KubeJarvisStateInspectionResult[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterAsGroupAttributeRequest {
    /** 集群ID */
    ClusterId: string;
    /** 集群关联的伸缩组属性 */
    ClusterAsGroupAttribute?: ClusterAsGroupAttribute;
  }

  interface ModifyClusterAsGroupAttributeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterAsGroupOptionAttributeRequest {
    /** 集群ID */
    ClusterId: string;
    /** 集群弹性伸缩属性 */
    ClusterAsGroupOption: ClusterAsGroupOption;
  }

  interface ModifyClusterAsGroupOptionAttributeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterAttributeRequest {
    /** 集群ID */
    ClusterId: string;
    /** 集群所属项目 */
    ProjectId?: number;
    /** 集群名称 */
    ClusterName?: string;
    /** 集群描述 */
    ClusterDesc?: string;
    /** 集群等级 */
    ClusterLevel?: string;
    /** 自动变配集群等级 */
    AutoUpgradeClusterLevel?: AutoUpgradeClusterLevel;
    /** 是否开启QGPU共享 */
    QGPUShareEnable?: boolean;
    /** 集群属性 */
    ClusterProperty?: ClusterProperty;
  }

  interface ModifyClusterAttributeResponse {
    /** 集群所属项目 */
    ProjectId?: number;
    /** 集群名称 */
    ClusterName?: string;
    /** 集群描述 */
    ClusterDesc?: string;
    /** 集群等级 */
    ClusterLevel?: string;
    /** 自动变配集群等级 */
    AutoUpgradeClusterLevel?: AutoUpgradeClusterLevel;
    /** 是否开启QGPU共享 */
    QGPUShareEnable?: boolean;
    /** 集群属性 */
    ClusterProperty?: ClusterProperty;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterAuthenticationOptionsRequest {
    /** 集群ID */
    ClusterId: string;
    /** ServiceAccount认证配置 */
    ServiceAccounts?: ServiceAccountAuthenticationOptions;
    /** OIDC认证配置 */
    OIDCConfig?: OIDCConfigAuthenticationOptions;
  }

  interface ModifyClusterAuthenticationOptionsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterEndpointSPRequest {
    /** 集群ID */
    ClusterId: string;
    /** 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有) */
    SecurityPolicies?: string[];
    /** 修改外网访问安全组 */
    SecurityGroup?: string;
  }

  interface ModifyClusterEndpointSPResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterImageRequest {
    /** 集群ID */
    ClusterId: string;
    /** 指定有效的镜像ID，格式形如img-e55paxnt。可通过登录控制台查询，也可调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715)，取返回信息中的ImageId字段。 */
    ImageId: string;
  }

  interface ModifyClusterImageResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterNodePoolRequest {
    /** 集群ID */
    ClusterId: string;
    /** 节点池ID */
    NodePoolId: string;
    /** 名称 */
    Name?: string;
    /** 最大节点数 */
    MaxNodesNum?: number;
    /** 最小节点数 */
    MinNodesNum?: number;
    /** 标签 */
    Labels?: Label[];
    /** 污点 */
    Taints?: Taint[];
    /** 节点 Annotation 列表 */
    Annotations?: AnnotationValue[];
    /** 是否开启伸缩 */
    EnableAutoscale?: boolean;
    /** 操作系统名称 */
    OsName?: string;
    /** 镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值) */
    OsCustomizeType?: string;
    /** GPU驱动版本，CUDA版本，cuDNN版本以及是否启用MIG特性 */
    GPUArgs?: GPUArgs;
    /** base64编码后的自定义脚本 */
    UserScript?: string;
    /** 更新label和taint时忽略存量节点 */
    IgnoreExistedNode?: boolean;
    /** 节点自定义参数 */
    ExtraArgs?: InstanceExtraArgs;
    /** 资源标签 */
    Tags?: Tag[];
    /** 设置加入的节点是否参与调度，默认值为0，表示参与调度；非0表示不参与调度, 待节点初始化完成之后, 可执行kubectl uncordon nodename使node加入调度. */
    Unschedulable?: number;
    /** 删除保护开关 */
    DeletionProtection?: boolean;
    /** dockerd --graph 指定值, 默认为 /var/lib/docker */
    DockerGraphPath?: string;
    /** base64编码后的自定义脚本 */
    PreStartUserScript?: string;
  }

  interface ModifyClusterNodePoolResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterRuntimeConfigRequest {
    /** 集群ID，必填 */
    ClusterId: string;
    /** 当需要修改运行时版本是根据另外的K8S版本获取时，需填写。例如升级校验有冲突后修改场景 */
    DstK8SVersion?: string;
    /** 需要修改集群运行时时填写 */
    ClusterRuntimeConfig?: RuntimeConfig;
    /** 需要修改节点池运行时时，填需要修改的部分 */
    NodePoolRuntimeConfig?: NodePoolRuntime[];
  }

  interface ModifyClusterRuntimeConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterTagsRequest {
    /** 集群ID */
    ClusterId: string;
    /** 集群标签 */
    Tags?: Tag[];
    /** 是否同步集群内子资源标签 */
    SyncSubresource?: boolean;
  }

  interface ModifyClusterTagsResponse {
    /** 集群标签 */
    Tags?: Tag[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyClusterVirtualNodePoolRequest {
    /** 集群ID，通过DescribeClusters接口获取 */
    ClusterId: string;
    /** 节点池ID，通过DescribeNodePools接口获取 */
    NodePoolId: string;
    /** 节点池名称，必须修改至少一个参数 */
    Name?: string;
    /** 安全组ID列表，必须修改至少一个参数 */
    SecurityGroupIds?: string[];
    /** 虚拟节点label，必须修改至少一个参数 */
    Labels?: Label[];
    /** 虚拟节点taint，必须修改至少一个参数 */
    Taints?: Taint[];
    /** 删除保护开关，必须修改至少一个参数 */
    DeletionProtection?: boolean;
  }

  interface ModifyClusterVirtualNodePoolResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyMasterComponentRequest {
    /** 集群ID */
    ClusterId: string;
    /** master组件名称，支持kube-apiserver、kube-scheduler、kube-controller-manager */
    Component: string;
    /** 停机或恢复，值只能为：shutdown或restore */
    Operation: string;
    /** 为true时，不真正执行停机或恢复操作 */
    DryRun?: boolean;
  }

  interface ModifyMasterComponentResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyNodePoolDesiredCapacityAboutAsgRequest {
    /** 集群id */
    ClusterId: string;
    /** 节点池id */
    NodePoolId: string;
    /** 节点池所关联的伸缩组的期望实例数 */
    DesiredCapacity: number;
  }

  interface ModifyNodePoolDesiredCapacityAboutAsgResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyNodePoolInstanceTypesRequest {
    /** 集群id */
    ClusterId: string;
    /** 节点池id */
    NodePoolId: string;
    /** 机型列表，主实例机型不支持修改 */
    InstanceTypes: string[];
  }

  interface ModifyNodePoolInstanceTypesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyOpenPolicyListRequest {
    /** 集群ID，请从容器服务集群控制台获取（https://console.cloud.tencent.com/tke2/cluster）。 */
    ClusterId: string;
    /** 修改的策略列表，目前仅支持修改EnforcementAction字段 */
    OpenPolicyInfoList?: OpenPolicySwitch[];
    /** 策略分类 基线：baseline 优选：priority 可选：optional */
    Category?: string;
  }

  interface ModifyOpenPolicyListResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusAgentExternalLabelsRequest {
    /** 实例ID */
    InstanceId: string;
    /** 集群ID */
    ClusterId: string;
    /** 新的external_labels */
    ExternalLabels: Label[];
  }

  interface ModifyPrometheusAgentExternalLabelsResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusAlertPolicyRequest {
    /** 实例id */
    InstanceId: string;
    /** 告警配置 */
    AlertRule: PrometheusAlertPolicyItem;
  }

  interface ModifyPrometheusAlertPolicyResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusAlertRuleRequest {
    /** 实例id */
    InstanceId: string;
    /** 告警配置 */
    AlertRule: PrometheusAlertRuleDetail;
  }

  interface ModifyPrometheusAlertRuleResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusConfigRequest {
    /** 实例id */
    InstanceId: string;
    /** 集群类型 */
    ClusterType: string;
    /** 集群id */
    ClusterId: string;
    /** ServiceMonitors配置 */
    ServiceMonitors?: PrometheusConfigItem[];
    /** PodMonitors配置 */
    PodMonitors?: PrometheusConfigItem[];
    /** prometheus原生Job配置 */
    RawJobs?: PrometheusConfigItem[];
    /** Probes 配置 */
    Probes?: PrometheusConfigItem[];
  }

  interface ModifyPrometheusConfigResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusGlobalNotificationRequest {
    /** 实例ID */
    InstanceId: string;
    /** 告警通知渠道 */
    Notification: PrometheusNotificationItem;
  }

  interface ModifyPrometheusGlobalNotificationResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusRecordRuleYamlRequest {
    /** 实例id */
    InstanceId: string;
    /** 聚合实例名称 */
    Name: string;
    /** 新的内容 */
    Content: string;
  }

  interface ModifyPrometheusRecordRuleYamlResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusTempRequest {
    /** 模板ID */
    TemplateId: string;
    /** 修改内容 */
    Template: PrometheusTempModify;
  }

  interface ModifyPrometheusTempResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyPrometheusTemplateRequest {
    /** 模板ID */
    TemplateId: string;
    /** 修改内容 */
    Template: PrometheusTemplateModify;
  }

  interface ModifyPrometheusTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ModifyReservedInstanceScopeRequest {
    /** 预留券实例ID。可通过 [DescribeReservedInstances](https://cloud.tencent.com/document/product/457/99162) 接口返回值中的ReservedInstanceId获取。 */
    ReservedInstanceIds: string[];
    /** 预留券抵扣范围信息 */
    ReservedInstanceScope: ReservedInstanceScope;
  }

  interface ModifyReservedInstanceScopeResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RemoveNodeFromNodePoolRequest {
    /** 集群id */
    ClusterId: string;
    /** 节点池id */
    NodePoolId: string;
    /** 节点id列表，一次最多支持100台 */
    InstanceIds: string[];
  }

  interface RemoveNodeFromNodePoolResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RenewReservedInstancesRequest {
    /** 预留券实例ID。可通过 [DescribeReservedInstances](https://cloud.tencent.com/document/product/457/99162) 接口返回值中的ReservedInstanceId获取，每次请求实例的上限为100。 */
    ReservedInstanceIds: string[];
    /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。 */
    InstanceChargePrepaid: InstanceChargePrepaid;
    /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
    ClientToken?: string;
  }

  interface RenewReservedInstancesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RestartEKSContainerInstancesRequest {
    /** EKS instance ids */
    EksCiIds: string[];
  }

  interface RestartEKSContainerInstancesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RollbackClusterReleaseRequest {
    /** 集群ID */
    ClusterId: string;
    /** 应用名称 */
    Name: string;
    /** 应用命名空间 */
    Namespace: string;
    /** 回滚版本号 */
    Revision: number;
    /** 集群类型 */
    ClusterType?: string;
  }

  interface RollbackClusterReleaseResponse {
    /** 应用详情 */
    Release?: PendingRelease;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface RunPrometheusInstanceRequest {
    /** 实例ID */
    InstanceId: string;
    /** 子网ID，默认使用实例所用子网初始化，也可通过该参数传递新的子网ID初始化 */
    SubnetId?: string;
  }

  interface RunPrometheusInstanceResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ScaleInClusterMasterRequest {
    /** 集群实例ID */
    ClusterId: string;
    /** master缩容选项 */
    ScaleInMasters: ScaleInMaster[];
  }

  interface ScaleInClusterMasterResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface ScaleOutClusterMasterRequest {
    /** 集群实例ID */
    ClusterId: string;
    /** 新建节点参数 */
    RunInstancesForNode?: RunInstancesForNode[];
    /** 添加已有节点相关参数 */
    ExistedInstancesForNode?: ExistedInstancesForNode[];
    /** 实例高级设置 */
    InstanceAdvancedSettings?: InstanceAdvancedSettings;
    /** 集群master组件自定义参数 */
    ExtraArgs?: ClusterExtraArgs;
  }

  interface ScaleOutClusterMasterResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SetNodePoolNodeProtectionRequest {
    /** 集群id */
    ClusterId: string;
    /** 节点池id */
    NodePoolId: string;
    /** 节点id */
    InstanceIds: string[];
    /** 节点是否需要移出保护 */
    ProtectedFromScaleIn: boolean;
  }

  interface SetNodePoolNodeProtectionResponse {
    /** 成功设置的节点id */
    SucceedInstanceIds?: string[];
    /** 没有成功设置的节点id */
    FailedInstanceIds?: string[] | null;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SyncPrometheusTempRequest {
    /** 实例id */
    TemplateId: string;
    /** 同步目标 */
    Targets: PrometheusTemplateSyncTarget[];
  }

  interface SyncPrometheusTempResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface SyncPrometheusTemplateRequest {
    /** 实例id */
    TemplateId: string;
    /** 同步目标 */
    Targets: PrometheusTemplateSyncTarget[];
  }

  interface SyncPrometheusTemplateResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UninstallClusterReleaseRequest {
    /** 集群ID */
    ClusterId: string;
    /** 应用名称 */
    Name: string;
    /** 应用命名空间 */
    Namespace: string;
    /** 集群类型 */
    ClusterType?: string;
  }

  interface UninstallClusterReleaseResponse {
    /** 应用详情 */
    Release?: PendingRelease;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UninstallEdgeLogAgentRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface UninstallEdgeLogAgentResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UninstallLogAgentRequest {
    /** 集群ID */
    ClusterId: string;
  }

  interface UninstallLogAgentResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateAddonRequest {
    /** 集群ID，请从容器服务控制台集群列表中获取（https://console.cloud.tencent.com/tke2/cluster）。 */
    ClusterId: string;
    /** addon名称，请从容器服务控制台进入集群详情页后，在组件管理页面中获取。 */
    AddonName: string;
    /** addon版本（不传默认不更新，不传AddonVersion时RawValues必传） */
    AddonVersion?: string;
    /** addon的参数，是一个json格式的base64转码后的字符串（addon参数由DescribeAddonValues获取，不传RawValues时AddonVersion必传）。 */
    RawValues?: string;
    /** addon参数的更新策略，支持replace和merge两种策略，默认值为merge，兼容旧版本API。replace：使用新RawValues全量替换addon原RawValues，merge：根据新RawValues新增或更新addon原RawValues中对应参数。 */
    UpdateStrategy?: string;
    /** 是否仅做更新检查，设置为true时仅做检查，不会更新组件。默认值为 false。 */
    DryRun?: boolean;
  }

  interface UpdateAddonResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateClusterKubeconfigRequest {
    /** 集群ID */
    ClusterId: string;
    /** 子账户Uin列表，传空默认为调用此接口的SubUin */
    SubAccounts?: string[];
  }

  interface UpdateClusterKubeconfigResponse {
    /** 已更新的子账户Uin列表 */
    UpdatedSubAccounts?: string[];
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateClusterVersionRequest {
    /** 集群 Id */
    ClusterId: string;
    /** 需要升级到的版本 */
    DstVersion: string;
    /** 集群自定义参数 */
    ExtraArgs?: ClusterExtraArgs;
    /** 可容忍的最大不可用pod数目 */
    MaxNotReadyPercent?: number;
    /** 是否跳过预检查阶段 */
    SkipPreCheck?: boolean;
  }

  interface UpdateClusterVersionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateEKSClusterRequest {
    /** 弹性集群Id */
    ClusterId: string;
    /** 弹性集群名称 */
    ClusterName?: string;
    /** 弹性集群描述信息 */
    ClusterDesc?: string;
    /** 子网Id 列表 */
    SubnetIds?: string[];
    /** 弹性容器集群公网访问LB信息 */
    PublicLB?: ClusterPublicLB;
    /** 弹性容器集群内网访问LB信息 */
    InternalLB?: ClusterInternalLB;
    /** Service 子网Id */
    ServiceSubnetId?: string;
    /** 集群自定义的dns 服务器信息 */
    DnsServers?: DnsServerConf[];
    /** 是否清空自定义dns 服务器设置。为1 表示 是。其他表示 否。 */
    ClearDnsServer?: string;
    /** 将来删除集群时是否要删除cbs。默认为 FALSE */
    NeedDeleteCbs?: boolean;
    /** 标记是否是新的内外网。默认为false */
    ProxyLB?: boolean;
    /** 扩展参数。须是map[string]string 的json 格式。 */
    ExtraParam?: string;
  }

  interface UpdateEKSClusterResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateEKSContainerInstanceRequest {
    /** 容器实例 ID */
    EksCiId: string;
    /** 实例重启策略： Always(总是重启)、Never(从不重启)、OnFailure(失败时重启) */
    RestartPolicy?: string;
    /** 数据卷，包含NfsVolume数组和CbsVolume数组 */
    EksCiVolume?: EksCiVolume;
    /** 容器组 */
    Containers?: Container[];
    /** Init 容器组 */
    InitContainers?: Container[];
    /** 容器实例名称 */
    Name?: string;
    /** 镜像仓库凭证数组 */
    ImageRegistryCredentials?: ImageRegistryCredential[];
  }

  interface UpdateEKSContainerInstanceResponse {
    /** 容器实例 ID */
    EksCiId?: string;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateEdgeClusterVersionRequest {
    /** 集群 Id */
    ClusterId: string;
    /** 需要升级到的版本 */
    EdgeVersion: string;
    /** 自定义边缘组件镜像仓库前缀 */
    RegistryPrefix?: string;
    /** 是否跳过预检查阶段 */
    SkipPreCheck?: boolean;
  }

  interface UpdateEdgeClusterVersionResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateImageCacheRequest {
    /** 镜像缓存ID */
    ImageCacheId: string;
    /** 镜像缓存名称 */
    ImageCacheName?: string;
    /** 镜像仓库凭证数组 */
    ImageRegistryCredentials?: ImageRegistryCredential[];
    /** 用于制作镜像缓存的容器镜像列表 */
    Images?: string[];
    /** 镜像缓存的大小。默认为20 GiB。取值范围参考[云硬盘类型](https://cloud.tencent.com/document/product/362/2353)中的高性能云盘类型的大小限制。 */
    ImageCacheSize?: number;
    /** 镜像缓存保留时间天数，过期将会自动清理，默认为0，永不过期。 */
    RetentionDays?: number;
    /** 安全组Id */
    SecurityGroupIds?: string[];
    /** 腾讯云标签 */
    Tags?: Tag[];
  }

  interface UpdateImageCacheResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpdateTKEEdgeClusterRequest {
    /** 边缘计算集群ID */
    ClusterId: string;
    /** 边缘计算集群名称 */
    ClusterName?: string;
    /** 边缘计算集群描述信息 */
    ClusterDesc?: string;
    /** 边缘计算集群的pod cidr */
    PodCIDR?: string;
    /** 边缘计算集群的service cidr */
    ServiceCIDR?: string;
    /** 边缘计算集群公网访问LB信息 */
    PublicLB?: EdgeClusterPublicLB;
    /** 边缘计算集群内网访问LB信息 */
    InternalLB?: EdgeClusterInternalLB;
    /** 边缘计算集群的CoreDns部署信息 */
    CoreDns?: string;
    /** 边缘计算集群的健康检查多地域部署信息 */
    HealthRegion?: string;
    /** 边缘计算集群的健康检查部署信息 */
    Health?: string;
    /** 边缘计算集群的GridDaemon部署信息 */
    GridDaemon?: string;
    /** 边缘集群开启自动升配 */
    AutoUpgradeClusterLevel?: boolean;
    /** 边缘集群的集群规模 */
    ClusterLevel?: string;
  }

  interface UpdateTKEEdgeClusterResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpgradeClusterInstancesRequest {
    /** 集群ID */
    ClusterId: string;
    /** create 表示开始一次升级任务pause 表示停止任务resume表示继续任务abort表示终止任务 */
    Operation: string;
    /** 升级类型，只有Operation是create需要设置reset 大版本重装升级hot 小版本热升级major 大版本原地升级 */
    UpgradeType?: string;
    /** 需要升级的节点列表 */
    InstanceIds?: string[];
    /** 当节点重新加入集群时候所使用的参数，参考添加已有节点接口 */
    ResetParam?: UpgradeNodeResetParam;
    /** 是否忽略节点升级前检查 */
    SkipPreCheck?: boolean;
    /** 最大可容忍的不可用Pod比例 */
    MaxNotReadyPercent?: number;
    /** 是否升级节点运行时，默认false不升级 */
    UpgradeRunTime?: boolean;
  }

  interface UpgradeClusterInstancesResponse {
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }

  interface UpgradeClusterReleaseRequest {
    /** 集群ID */
    ClusterId: string;
    /** 自定义的应用名称 */
    Name: string;
    /** 应用命名空间 */
    Namespace: string;
    /** 制品名称或从第三方repo 安装chart时，制品压缩包下载地址, 不支持重定向类型chart 地址，结尾为*.tgz */
    Chart: string;
    /** 自定义参数，覆盖chart 中values.yaml 中的参数 */
    Values?: ReleaseValues;
    /** 制品来源，范围：tke-market 或 other 默认值：tke-market，示例值：tke-market */
    ChartFrom?: string;
    /** 制品版本( 从第三方安装时，不传这个参数） */
    ChartVersion?: string;
    /** 制品仓库URL地址 */
    ChartRepoURL?: string;
    /** 制品访问用户名 */
    Username?: string;
    /** 制品访问密码 */
    Password?: string;
    /** 制品命名空间，ChartFrom为tke-market时ChartNamespace不为空，值为DescribeProducts接口反馈的Namespace */
    ChartNamespace?: string;
    /** 集群类型，支持传 tke, eks, tkeedge, external(注册集群） */
    ClusterType?: string;
  }

  interface UpgradeClusterReleaseResponse {
    /** 应用详情 */
    Release?: PendingRelease;
    /** 唯一请求 ID，每次请求都会返回。 */
    RequestId?: string;
  }
}

/** {@link Tke 容器服务} */
declare interface Tke {
  (): Versions;
  /** 创建健康检测策略 {@link CreateHealthCheckPolicyRequest} {@link CreateHealthCheckPolicyResponse} */
  CreateHealthCheckPolicy(data: CreateHealthCheckPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHealthCheckPolicyResponse>;
  /** 创建 TKE 节点池 {@link CreateNodePoolRequest} {@link CreateNodePoolResponse} */
  CreateNodePool(data: CreateNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNodePoolResponse>;
  /** 删除原生节点池节点 {@link DeleteClusterMachinesRequest} {@link DeleteClusterMachinesResponse} */
  DeleteClusterMachines(data: DeleteClusterMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterMachinesResponse>;
  /** 删除健康检测策略 {@link DeleteHealthCheckPolicyRequest} {@link DeleteHealthCheckPolicyResponse} */
  DeleteHealthCheckPolicy(data: DeleteHealthCheckPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHealthCheckPolicyResponse>;
  /** 删除 TKE 节点池 {@link DeleteNodePoolRequest} {@link DeleteNodePoolResponse} */
  DeleteNodePool(data: DeleteNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNodePoolResponse>;
  /** 查询集群节点信息 {@link DescribeClusterInstancesRequest} {@link DescribeClusterInstancesResponse} */
  DescribeClusterInstances(data: DescribeClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterInstancesResponse>;
  /** 查询健康检测策略 {@link DescribeHealthCheckPoliciesRequest} {@link DescribeHealthCheckPoliciesResponse} */
  DescribeHealthCheckPolicies(data: DescribeHealthCheckPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHealthCheckPoliciesResponse>;
  /** 查询健康检测策略绑定关系 {@link DescribeHealthCheckPolicyBindingsRequest} {@link DescribeHealthCheckPolicyBindingsResponse} */
  DescribeHealthCheckPolicyBindings(data: DescribeHealthCheckPolicyBindingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHealthCheckPolicyBindingsResponse>;
  /** 查询健康检测策略模板 {@link DescribeHealthCheckTemplateRequest} {@link DescribeHealthCheckTemplateResponse} */
  DescribeHealthCheckTemplate(data?: DescribeHealthCheckTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHealthCheckTemplateResponse>;
  /** 查询 TKE 节点池列表 {@link DescribeNodePoolsRequest} {@link DescribeNodePoolsResponse} */
  DescribeNodePools(data: DescribeNodePoolsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodePoolsResponse>;
  /** 修改健康检测策略 {@link ModifyHealthCheckPolicyRequest} {@link ModifyHealthCheckPolicyResponse} */
  ModifyHealthCheckPolicy(data: ModifyHealthCheckPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHealthCheckPolicyResponse>;
  /** 更新 TKE 节点池 {@link ModifyNodePoolRequest} {@link ModifyNodePoolResponse} */
  ModifyNodePool(data: ModifyNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNodePoolResponse>;
  /** 重启原生节点实例 {@link RebootMachinesRequest} {@link RebootMachinesResponse} */
  RebootMachines(data: RebootMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<RebootMachinesResponse>;
  /** 设置是否开启节点登录 {@link SetMachineLoginRequest} {@link SetMachineLoginResponse} */
  SetMachineLogin(data: SetMachineLoginRequest, config?: AxiosRequestConfig): AxiosPromise<SetMachineLoginResponse>;
  /** 启动原生节点实例 {@link StartMachinesRequest} {@link StartMachinesResponse} */
  StartMachines(data: StartMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<StartMachinesResponse>;
  /** 关闭原生节点实例 {@link StopMachinesRequest} {@link StopMachinesResponse} */
  StopMachines(data: StopMachinesRequest, config?: AxiosRequestConfig): AxiosPromise<StopMachinesResponse>;
  /** 获取集群RBAC管理员角色 {@link V20180525.AcquireClusterAdminRoleRequest} {@link V20180525.AcquireClusterAdminRoleResponse} */
  AcquireClusterAdminRole(data: V20180525.AcquireClusterAdminRoleRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.AcquireClusterAdminRoleResponse>;
  /** 给集群增加ClusterCIDR {@link V20180525.AddClusterCIDRRequest} {@link V20180525.AddClusterCIDRResponse} */
  AddClusterCIDR(data: V20180525.AddClusterCIDRRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.AddClusterCIDRResponse>;
  /** 添加已经存在的实例到集群 {@link V20180525.AddExistedInstancesRequest} {@link V20180525.AddExistedInstancesResponse} */
  AddExistedInstances(data: V20180525.AddExistedInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.AddExistedInstancesResponse>;
  /** 将集群内节点移入节点池 {@link V20180525.AddNodeToNodePoolRequest} {@link V20180525.AddNodeToNodePoolResponse} */
  AddNodeToNodePool(data: V20180525.AddNodeToNodePoolRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.AddNodeToNodePoolResponse>;
  /** 增加集群子网 {@link V20180525.AddVpcCniSubnetsRequest} {@link V20180525.AddVpcCniSubnetsResponse} */
  AddVpcCniSubnets(data: V20180525.AddVpcCniSubnetsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.AddVpcCniSubnetsResponse>;
  /** 集群取消安装应用 {@link V20180525.CancelClusterReleaseRequest} {@link V20180525.CancelClusterReleaseResponse} */
  CancelClusterRelease(data: V20180525.CancelClusterReleaseRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CancelClusterReleaseResponse>;
  /** 检查边缘计算集群的CIDR是否冲突 {@link V20180525.CheckEdgeClusterCIDRRequest} {@link V20180525.CheckEdgeClusterCIDRResponse} */
  CheckEdgeClusterCIDR(data: V20180525.CheckEdgeClusterCIDRRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CheckEdgeClusterCIDRResponse>;
  /** 节点是否可升级 {@link V20180525.CheckInstancesUpgradeAbleRequest} {@link V20180525.CheckInstancesUpgradeAbleResponse} */
  CheckInstancesUpgradeAble(data: V20180525.CheckInstancesUpgradeAbleRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CheckInstancesUpgradeAbleResponse>;
  /** 创建备份仓库 {@link V20180525.CreateBackupStorageLocationRequest} {@link V20180525.CreateBackupStorageLocationResponse} */
  CreateBackupStorageLocation(data: V20180525.CreateBackupStorageLocationRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateBackupStorageLocationResponse>;
  /** 创建日志采集配置 {@link V20180525.CreateCLSLogConfigRequest} {@link V20180525.CreateCLSLogConfigResponse} */
  CreateCLSLogConfig(data: V20180525.CreateCLSLogConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateCLSLogConfigResponse>;
  /** 创建集群 {@link V20180525.CreateClusterRequest} {@link V20180525.CreateClusterResponse} */
  CreateCluster(data: V20180525.CreateClusterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterResponse>;
  /** 创建集群访问端口 {@link V20180525.CreateClusterEndpointRequest} {@link V20180525.CreateClusterEndpointResponse} */
  CreateClusterEndpoint(data: V20180525.CreateClusterEndpointRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterEndpointResponse>;
  /** 创建托管集群外网访问端口（不再维护，准备下线） {@link V20180525.CreateClusterEndpointVipRequest} {@link V20180525.CreateClusterEndpointVipResponse} */
  CreateClusterEndpointVip(data: V20180525.CreateClusterEndpointVipRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterEndpointVipResponse>;
  /** 扩展集群节点 {@link V20180525.CreateClusterInstancesRequest} {@link V20180525.CreateClusterInstancesResponse} */
  CreateClusterInstances(data: V20180525.CreateClusterInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterInstancesResponse>;
  /** 创建节点池 {@link V20180525.CreateClusterNodePoolRequest} {@link V20180525.CreateClusterNodePoolResponse} */
  CreateClusterNodePool(data: V20180525.CreateClusterNodePoolRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterNodePoolResponse>;
  /** 集群安装应用 {@link V20180525.CreateClusterReleaseRequest} {@link V20180525.CreateClusterReleaseResponse} */
  CreateClusterRelease(data: V20180525.CreateClusterReleaseRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterReleaseResponse>;
  /** 创建集群路由 {@link V20180525.CreateClusterRouteRequest} {@link V20180525.CreateClusterRouteResponse} */
  CreateClusterRoute(data: V20180525.CreateClusterRouteRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterRouteResponse>;
  /** 创建集群路由表 {@link V20180525.CreateClusterRouteTableRequest} {@link V20180525.CreateClusterRouteTableResponse} */
  CreateClusterRouteTable(data: V20180525.CreateClusterRouteTableRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterRouteTableResponse>;
  /** 创建按量计费超级节点 {@link V20180525.CreateClusterVirtualNodeRequest} {@link V20180525.CreateClusterVirtualNodeResponse} */
  CreateClusterVirtualNode(data: V20180525.CreateClusterVirtualNodeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterVirtualNodeResponse>;
  /** 创建超级节点池 {@link V20180525.CreateClusterVirtualNodePoolRequest} {@link V20180525.CreateClusterVirtualNodePoolResponse} */
  CreateClusterVirtualNodePool(data: V20180525.CreateClusterVirtualNodePoolRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateClusterVirtualNodePoolResponse>;
  /** 创建边缘计算ECM机器 {@link V20180525.CreateECMInstancesRequest} {@link V20180525.CreateECMInstancesResponse} */
  CreateECMInstances(data: V20180525.CreateECMInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateECMInstancesResponse>;
  /** 创建弹性集群 {@link V20180525.CreateEKSClusterRequest} {@link V20180525.CreateEKSClusterResponse} */
  CreateEKSCluster(data: V20180525.CreateEKSClusterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateEKSClusterResponse>;
  /** 创建容器实例 {@link V20180525.CreateEKSContainerInstancesRequest} {@link V20180525.CreateEKSContainerInstancesResponse} */
  CreateEKSContainerInstances(data: V20180525.CreateEKSContainerInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateEKSContainerInstancesResponse>;
  /** 创建边缘容器CVM机器 {@link V20180525.CreateEdgeCVMInstancesRequest} {@link V20180525.CreateEdgeCVMInstancesResponse} */
  CreateEdgeCVMInstances(data: V20180525.CreateEdgeCVMInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateEdgeCVMInstancesResponse>;
  /** 创建边缘集群日志采集配置 {@link V20180525.CreateEdgeLogConfigRequest} {@link V20180525.CreateEdgeLogConfigResponse} */
  CreateEdgeLogConfig(data: V20180525.CreateEdgeLogConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateEdgeLogConfigResponse>;
  /** 弹性集群创建日志采集配置 {@link V20180525.CreateEksLogConfigRequest} {@link V20180525.CreateEksLogConfigResponse} */
  CreateEksLogConfig(data: V20180525.CreateEksLogConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateEksLogConfigResponse>;
  /** 创建镜像缓存 {@link V20180525.CreateImageCacheRequest} {@link V20180525.CreateImageCacheResponse} */
  CreateImageCache(data: V20180525.CreateImageCacheRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateImageCacheResponse>;
  /** 创建告警策略 {@link V20180525.CreatePrometheusAlertPolicyRequest} {@link V20180525.CreatePrometheusAlertPolicyResponse} */
  CreatePrometheusAlertPolicy(data: V20180525.CreatePrometheusAlertPolicyRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreatePrometheusAlertPolicyResponse>;
  /** 创建告警规则 {@link V20180525.CreatePrometheusAlertRuleRequest} {@link V20180525.CreatePrometheusAlertRuleResponse} */
  CreatePrometheusAlertRule(data: V20180525.CreatePrometheusAlertRuleRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreatePrometheusAlertRuleResponse>;
  /** 2.0实例关联集群 {@link V20180525.CreatePrometheusClusterAgentRequest} {@link V20180525.CreatePrometheusClusterAgentResponse} */
  CreatePrometheusClusterAgent(data: V20180525.CreatePrometheusClusterAgentRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreatePrometheusClusterAgentResponse>;
  /** 创建集群采集配置 {@link V20180525.CreatePrometheusConfigRequest} {@link V20180525.CreatePrometheusConfigResponse} */
  CreatePrometheusConfig(data: V20180525.CreatePrometheusConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreatePrometheusConfigResponse>;
  /** 创建grafana监控面板 {@link V20180525.CreatePrometheusDashboardRequest} {@link V20180525.CreatePrometheusDashboardResponse} */
  CreatePrometheusDashboard(data: V20180525.CreatePrometheusDashboardRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreatePrometheusDashboardResponse>;
  /** 创建全局告警通知渠道 {@link V20180525.CreatePrometheusGlobalNotificationRequest} {@link V20180525.CreatePrometheusGlobalNotificationResponse} */
  CreatePrometheusGlobalNotification(data: V20180525.CreatePrometheusGlobalNotificationRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreatePrometheusGlobalNotificationResponse>;
  /** 创建聚合规则yaml方式 {@link V20180525.CreatePrometheusRecordRuleYamlRequest} {@link V20180525.CreatePrometheusRecordRuleYamlResponse} */
  CreatePrometheusRecordRuleYaml(data: V20180525.CreatePrometheusRecordRuleYamlRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreatePrometheusRecordRuleYamlResponse>;
  /** 新建模板 {@link V20180525.CreatePrometheusTempRequest} {@link V20180525.CreatePrometheusTempResponse} */
  CreatePrometheusTemp(data: V20180525.CreatePrometheusTempRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreatePrometheusTempResponse>;
  /** 创建模板 {@link V20180525.CreatePrometheusTemplateRequest} {@link V20180525.CreatePrometheusTemplateResponse} */
  CreatePrometheusTemplate(data: V20180525.CreatePrometheusTemplateRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreatePrometheusTemplateResponse>;
  /** 购买预留券实例 {@link V20180525.CreateReservedInstancesRequest} {@link V20180525.CreateReservedInstancesResponse} */
  CreateReservedInstances(data: V20180525.CreateReservedInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateReservedInstancesResponse>;
  /** 创建边缘计算集群 {@link V20180525.CreateTKEEdgeClusterRequest} {@link V20180525.CreateTKEEdgeClusterResponse} */
  CreateTKEEdgeCluster(data: V20180525.CreateTKEEdgeClusterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.CreateTKEEdgeClusterResponse>;
  /** 删除addon {@link V20180525.DeleteAddonRequest} {@link V20180525.DeleteAddonResponse} */
  DeleteAddon(data: V20180525.DeleteAddonRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteAddonResponse>;
  /** 删除备份仓库 {@link V20180525.DeleteBackupStorageLocationRequest} {@link V20180525.DeleteBackupStorageLocationResponse} */
  DeleteBackupStorageLocation(data: V20180525.DeleteBackupStorageLocationRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteBackupStorageLocationResponse>;
  /** 删除集群 {@link V20180525.DeleteClusterRequest} {@link V20180525.DeleteClusterResponse} */
  DeleteCluster(data: V20180525.DeleteClusterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterResponse>;
  /** 删除集群伸缩组 {@link V20180525.DeleteClusterAsGroupsRequest} {@link V20180525.DeleteClusterAsGroupsResponse} */
  DeleteClusterAsGroups(data: V20180525.DeleteClusterAsGroupsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterAsGroupsResponse>;
  /** 删除集群访问端口 {@link V20180525.DeleteClusterEndpointRequest} {@link V20180525.DeleteClusterEndpointResponse} */
  DeleteClusterEndpoint(data: V20180525.DeleteClusterEndpointRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterEndpointResponse>;
  /** 删除托管集群外网访问端口 {@link V20180525.DeleteClusterEndpointVipRequest} {@link V20180525.DeleteClusterEndpointVipResponse} */
  DeleteClusterEndpointVip(data: V20180525.DeleteClusterEndpointVipRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterEndpointVipResponse>;
  /** 删除集群中的节点 {@link V20180525.DeleteClusterInstancesRequest} {@link V20180525.DeleteClusterInstancesResponse} */
  DeleteClusterInstances(data: V20180525.DeleteClusterInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterInstancesResponse>;
  /** 删除节点池 {@link V20180525.DeleteClusterNodePoolRequest} {@link V20180525.DeleteClusterNodePoolResponse} */
  DeleteClusterNodePool(data: V20180525.DeleteClusterNodePoolRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterNodePoolResponse>;
  /** 删除集群路由 {@link V20180525.DeleteClusterRouteRequest} {@link V20180525.DeleteClusterRouteResponse} */
  DeleteClusterRoute(data: V20180525.DeleteClusterRouteRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterRouteResponse>;
  /** 删除集群路由表 {@link V20180525.DeleteClusterRouteTableRequest} {@link V20180525.DeleteClusterRouteTableResponse} */
  DeleteClusterRouteTable(data: V20180525.DeleteClusterRouteTableRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterRouteTableResponse>;
  /** 删除超级节点 {@link V20180525.DeleteClusterVirtualNodeRequest} {@link V20180525.DeleteClusterVirtualNodeResponse} */
  DeleteClusterVirtualNode(data: V20180525.DeleteClusterVirtualNodeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterVirtualNodeResponse>;
  /** 删除超级节点池 {@link V20180525.DeleteClusterVirtualNodePoolRequest} {@link V20180525.DeleteClusterVirtualNodePoolResponse} */
  DeleteClusterVirtualNodePool(data: V20180525.DeleteClusterVirtualNodePoolRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteClusterVirtualNodePoolResponse>;
  /** 删除ECM实例 {@link V20180525.DeleteECMInstancesRequest} {@link V20180525.DeleteECMInstancesResponse} */
  DeleteECMInstances(data: V20180525.DeleteECMInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteECMInstancesResponse>;
  /** 删除弹性集群 {@link V20180525.DeleteEKSClusterRequest} {@link V20180525.DeleteEKSClusterResponse} */
  DeleteEKSCluster(data: V20180525.DeleteEKSClusterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteEKSClusterResponse>;
  /** 删除容器实例 {@link V20180525.DeleteEKSContainerInstancesRequest} {@link V20180525.DeleteEKSContainerInstancesResponse} */
  DeleteEKSContainerInstances(data: V20180525.DeleteEKSContainerInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteEKSContainerInstancesResponse>;
  /** 删除边缘容器CVM实例 {@link V20180525.DeleteEdgeCVMInstancesRequest} {@link V20180525.DeleteEdgeCVMInstancesResponse} */
  DeleteEdgeCVMInstances(data: V20180525.DeleteEdgeCVMInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteEdgeCVMInstancesResponse>;
  /** 删除边缘计算实例 {@link V20180525.DeleteEdgeClusterInstancesRequest} {@link V20180525.DeleteEdgeClusterInstancesResponse} */
  DeleteEdgeClusterInstances(data: V20180525.DeleteEdgeClusterInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteEdgeClusterInstancesResponse>;
  /** 删除镜像缓存 {@link V20180525.DeleteImageCachesRequest} {@link V20180525.DeleteImageCachesResponse} */
  DeleteImageCaches(data: V20180525.DeleteImageCachesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteImageCachesResponse>;
  /** 删除日志采集规则 {@link V20180525.DeleteLogConfigsRequest} {@link V20180525.DeleteLogConfigsResponse} */
  DeleteLogConfigs(data: V20180525.DeleteLogConfigsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteLogConfigsResponse>;
  /** 删除2.0实例告警策略 {@link V20180525.DeletePrometheusAlertPolicyRequest} {@link V20180525.DeletePrometheusAlertPolicyResponse} */
  DeletePrometheusAlertPolicy(data: V20180525.DeletePrometheusAlertPolicyRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeletePrometheusAlertPolicyResponse>;
  /** 删除告警规则 {@link V20180525.DeletePrometheusAlertRuleRequest} {@link V20180525.DeletePrometheusAlertRuleResponse} */
  DeletePrometheusAlertRule(data: V20180525.DeletePrometheusAlertRuleRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeletePrometheusAlertRuleResponse>;
  /** 解除TMP实例的集群关联 {@link V20180525.DeletePrometheusClusterAgentRequest} {@link V20180525.DeletePrometheusClusterAgentResponse} */
  DeletePrometheusClusterAgent(data: V20180525.DeletePrometheusClusterAgentRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeletePrometheusClusterAgentResponse>;
  /** 删除集群采集配置 {@link V20180525.DeletePrometheusConfigRequest} {@link V20180525.DeletePrometheusConfigResponse} */
  DeletePrometheusConfig(data: V20180525.DeletePrometheusConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeletePrometheusConfigResponse>;
  /** 删除聚合规则 {@link V20180525.DeletePrometheusRecordRuleYamlRequest} {@link V20180525.DeletePrometheusRecordRuleYamlResponse} */
  DeletePrometheusRecordRuleYaml(data: V20180525.DeletePrometheusRecordRuleYamlRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeletePrometheusRecordRuleYamlResponse>;
  /** 删除模板实例 {@link V20180525.DeletePrometheusTempRequest} {@link V20180525.DeletePrometheusTempResponse} */
  DeletePrometheusTemp(data: V20180525.DeletePrometheusTempRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeletePrometheusTempResponse>;
  /** 解除模板同步 {@link V20180525.DeletePrometheusTempSyncRequest} {@link V20180525.DeletePrometheusTempSyncResponse} */
  DeletePrometheusTempSync(data: V20180525.DeletePrometheusTempSyncRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeletePrometheusTempSyncResponse>;
  /** 删除模板 {@link V20180525.DeletePrometheusTemplateRequest} {@link V20180525.DeletePrometheusTemplateResponse} */
  DeletePrometheusTemplate(data: V20180525.DeletePrometheusTemplateRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeletePrometheusTemplateResponse>;
  /** 取消模板同步 {@link V20180525.DeletePrometheusTemplateSyncRequest} {@link V20180525.DeletePrometheusTemplateSyncResponse} */
  DeletePrometheusTemplateSync(data: V20180525.DeletePrometheusTemplateSyncRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeletePrometheusTemplateSyncResponse>;
  /** 退还预留券实例 {@link V20180525.DeleteReservedInstancesRequest} {@link V20180525.DeleteReservedInstancesResponse} */
  DeleteReservedInstances(data: V20180525.DeleteReservedInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteReservedInstancesResponse>;
  /** 删除边缘计算集群 {@link V20180525.DeleteTKEEdgeClusterRequest} {@link V20180525.DeleteTKEEdgeClusterResponse} */
  DeleteTKEEdgeCluster(data: V20180525.DeleteTKEEdgeClusterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DeleteTKEEdgeClusterResponse>;
  /** 获取addon列表 {@link V20180525.DescribeAddonRequest} {@link V20180525.DescribeAddonResponse} */
  DescribeAddon(data: V20180525.DescribeAddonRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeAddonResponse>;
  /** 获取addon的参数 {@link V20180525.DescribeAddonValuesRequest} {@link V20180525.DescribeAddonValuesResponse} */
  DescribeAddonValues(data: V20180525.DescribeAddonValuesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeAddonValuesResponse>;
  /** 获取集群可以升级的所有版本 {@link V20180525.DescribeAvailableClusterVersionRequest} {@link V20180525.DescribeAvailableClusterVersionResponse} */
  DescribeAvailableClusterVersion(data: V20180525.DescribeAvailableClusterVersionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeAvailableClusterVersionResponse>;
  /** 边缘计算支持的k8s版本 {@link V20180525.DescribeAvailableTKEEdgeVersionRequest} {@link V20180525.DescribeAvailableTKEEdgeVersionResponse} */
  DescribeAvailableTKEEdgeVersion(data: V20180525.DescribeAvailableTKEEdgeVersionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeAvailableTKEEdgeVersionResponse>;
  /** 查询备份仓库 {@link V20180525.DescribeBackupStorageLocationsRequest} {@link V20180525.DescribeBackupStorageLocationsResponse} */
  DescribeBackupStorageLocations(data: V20180525.DescribeBackupStorageLocationsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeBackupStorageLocationsResponse>;
  /** 查询批量修改标签状态 {@link V20180525.DescribeBatchModifyTagsStatusRequest} {@link V20180525.DescribeBatchModifyTagsStatusResponse} */
  DescribeBatchModifyTagsStatus(data: V20180525.DescribeBatchModifyTagsStatusRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeBatchModifyTagsStatusResponse>;
  /** 集群弹性伸缩配置 {@link V20180525.DescribeClusterAsGroupOptionRequest} {@link V20180525.DescribeClusterAsGroupOptionResponse} */
  DescribeClusterAsGroupOption(data: V20180525.DescribeClusterAsGroupOptionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterAsGroupOptionResponse>;
  /** 集群关联的伸缩组列表 {@link V20180525.DescribeClusterAsGroupsRequest} {@link V20180525.DescribeClusterAsGroupsResponse} */
  DescribeClusterAsGroups(data: V20180525.DescribeClusterAsGroupsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterAsGroupsResponse>;
  /** 查看集群认证配置 {@link V20180525.DescribeClusterAuthenticationOptionsRequest} {@link V20180525.DescribeClusterAuthenticationOptionsResponse} */
  DescribeClusterAuthenticationOptions(data: V20180525.DescribeClusterAuthenticationOptionsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterAuthenticationOptionsResponse>;
  /** 获取集群子账户CommonName映射关系 {@link V20180525.DescribeClusterCommonNamesRequest} {@link V20180525.DescribeClusterCommonNamesResponse} */
  DescribeClusterCommonNames(data: V20180525.DescribeClusterCommonNamesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterCommonNamesResponse>;
  /** 查询Kubernetes控制器状态 {@link V20180525.DescribeClusterControllersRequest} {@link V20180525.DescribeClusterControllersResponse} */
  DescribeClusterControllers(data: V20180525.DescribeClusterControllersRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterControllersResponse>;
  /** 查询集群访问端口状态 {@link V20180525.DescribeClusterEndpointStatusRequest} {@link V20180525.DescribeClusterEndpointStatusResponse} */
  DescribeClusterEndpointStatus(data: V20180525.DescribeClusterEndpointStatusRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterEndpointStatusResponse>;
  /** 查询托管集群开启外网端口流程状态 {@link V20180525.DescribeClusterEndpointVipStatusRequest} {@link V20180525.DescribeClusterEndpointVipStatusResponse} */
  DescribeClusterEndpointVipStatus(data: V20180525.DescribeClusterEndpointVipStatusRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterEndpointVipStatusResponse>;
  /** 获取集群访问地址 {@link V20180525.DescribeClusterEndpointsRequest} {@link V20180525.DescribeClusterEndpointsResponse} */
  DescribeClusterEndpoints(data: V20180525.DescribeClusterEndpointsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterEndpointsResponse>;
  /** 查询集群自定义参数 {@link V20180525.DescribeClusterExtraArgsRequest} {@link V20180525.DescribeClusterExtraArgsResponse} */
  DescribeClusterExtraArgs(data: V20180525.DescribeClusterExtraArgsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterExtraArgsResponse>;
  /** 查询集群巡检结果概览信息 {@link V20180525.DescribeClusterInspectionResultsOverviewRequest} {@link V20180525.DescribeClusterInspectionResultsOverviewResponse} */
  DescribeClusterInspectionResultsOverview(data: V20180525.DescribeClusterInspectionResultsOverviewRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterInspectionResultsOverviewResponse>;
  /** 查询集群节点信息 {@link V20180525.DescribeClusterInstancesRequest} {@link V20180525.DescribeClusterInstancesResponse} */
  DescribeClusterInstances(data: V20180525.DescribeClusterInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterInstancesResponse>;
  /** 获取集群kubeconfig文件 {@link V20180525.DescribeClusterKubeconfigRequest} {@link V20180525.DescribeClusterKubeconfigResponse} */
  DescribeClusterKubeconfig(data: V20180525.DescribeClusterKubeconfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterKubeconfigResponse>;
  /** 获取集群规模 {@link V20180525.DescribeClusterLevelAttributeRequest} {@link V20180525.DescribeClusterLevelAttributeResponse} */
  DescribeClusterLevelAttribute(data: V20180525.DescribeClusterLevelAttributeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterLevelAttributeResponse>;
  /** 查询集群变配记录 {@link V20180525.DescribeClusterLevelChangeRecordsRequest} {@link V20180525.DescribeClusterLevelChangeRecordsResponse} */
  DescribeClusterLevelChangeRecords(data: V20180525.DescribeClusterLevelChangeRecordsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterLevelChangeRecordsResponse>;
  /** 查询节点池详情 {@link V20180525.DescribeClusterNodePoolDetailRequest} {@link V20180525.DescribeClusterNodePoolDetailResponse} */
  DescribeClusterNodePoolDetail(data: V20180525.DescribeClusterNodePoolDetailRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterNodePoolDetailResponse>;
  /** 查询节点池列表 {@link V20180525.DescribeClusterNodePoolsRequest} {@link V20180525.DescribeClusterNodePoolsResponse} */
  DescribeClusterNodePools(data: V20180525.DescribeClusterNodePoolsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterNodePoolsResponse>;
  /** 查询集群安装中的应用列表 {@link V20180525.DescribeClusterPendingReleasesRequest} {@link V20180525.DescribeClusterPendingReleasesResponse} */
  DescribeClusterPendingReleases(data: V20180525.DescribeClusterPendingReleasesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterPendingReleasesResponse>;
  /** 查询集群已安装应用详情 {@link V20180525.DescribeClusterReleaseDetailsRequest} {@link V20180525.DescribeClusterReleaseDetailsResponse} */
  DescribeClusterReleaseDetails(data: V20180525.DescribeClusterReleaseDetailsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterReleaseDetailsResponse>;
  /** 查询集群已安装应用版本历史 {@link V20180525.DescribeClusterReleaseHistoryRequest} {@link V20180525.DescribeClusterReleaseHistoryResponse} */
  DescribeClusterReleaseHistory(data: V20180525.DescribeClusterReleaseHistoryRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterReleaseHistoryResponse>;
  /** 查询集群已安装应用列表 {@link V20180525.DescribeClusterReleasesRequest} {@link V20180525.DescribeClusterReleasesResponse} */
  DescribeClusterReleases(data: V20180525.DescribeClusterReleasesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterReleasesResponse>;
  /** 查询集群路由表 {@link V20180525.DescribeClusterRouteTablesRequest} {@link V20180525.DescribeClusterRouteTablesResponse} */
  DescribeClusterRouteTables(data: V20180525.DescribeClusterRouteTablesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterRouteTablesResponse>;
  /** 查询集群路由 {@link V20180525.DescribeClusterRoutesRequest} {@link V20180525.DescribeClusterRoutesResponse} */
  DescribeClusterRoutes(data: V20180525.DescribeClusterRoutesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterRoutesResponse>;
  /** 集群的密钥信息 {@link V20180525.DescribeClusterSecurityRequest} {@link V20180525.DescribeClusterSecurityResponse} */
  DescribeClusterSecurity(data: V20180525.DescribeClusterSecurityRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterSecurityResponse>;
  /** 查看集群状态列表 {@link V20180525.DescribeClusterStatusRequest} {@link V20180525.DescribeClusterStatusResponse} */
  DescribeClusterStatus(data: V20180525.DescribeClusterStatusRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterStatusResponse>;
  /** 查看超级节点列表 {@link V20180525.DescribeClusterVirtualNodeRequest} {@link V20180525.DescribeClusterVirtualNodeResponse} */
  DescribeClusterVirtualNode(data: V20180525.DescribeClusterVirtualNodeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterVirtualNodeResponse>;
  /** 查看超级节点池列表 {@link V20180525.DescribeClusterVirtualNodePoolsRequest} {@link V20180525.DescribeClusterVirtualNodePoolsResponse} */
  DescribeClusterVirtualNodePools(data: V20180525.DescribeClusterVirtualNodePoolsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClusterVirtualNodePoolsResponse>;
  /** 查询TKE集群列表 {@link V20180525.DescribeClustersRequest} {@link V20180525.DescribeClustersResponse} */
  DescribeClusters(data: V20180525.DescribeClustersRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeClustersResponse>;
  /** 获取ECM实例相关信息 {@link V20180525.DescribeECMInstancesRequest} {@link V20180525.DescribeECMInstancesResponse} */
  DescribeECMInstances(data: V20180525.DescribeECMInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeECMInstancesResponse>;
  /** 获取弹性容器集群的认证信息 {@link V20180525.DescribeEKSClusterCredentialRequest} {@link V20180525.DescribeEKSClusterCredentialResponse} */
  DescribeEKSClusterCredential(data: V20180525.DescribeEKSClusterCredentialRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEKSClusterCredentialResponse>;
  /** 查询弹性集群列表 {@link V20180525.DescribeEKSClustersRequest} {@link V20180525.DescribeEKSClustersResponse} */
  DescribeEKSClusters(data: V20180525.DescribeEKSClustersRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEKSClustersResponse>;
  /** 查询容器实例的事件 {@link V20180525.DescribeEKSContainerInstanceEventRequest} {@link V20180525.DescribeEKSContainerInstanceEventResponse} */
  DescribeEKSContainerInstanceEvent(data: V20180525.DescribeEKSContainerInstanceEventRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEKSContainerInstanceEventResponse>;
  /** 查询容器实例支持的地域 {@link V20180525.DescribeEKSContainerInstanceRegionsRequest} {@link V20180525.DescribeEKSContainerInstanceRegionsResponse} */
  DescribeEKSContainerInstanceRegions(data: V20180525.DescribeEKSContainerInstanceRegionsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEKSContainerInstanceRegionsResponse>;
  /** 查询容器实例 {@link V20180525.DescribeEKSContainerInstancesRequest} {@link V20180525.DescribeEKSContainerInstancesResponse} */
  DescribeEKSContainerInstances(data: V20180525.DescribeEKSContainerInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEKSContainerInstancesResponse>;
  /** 查询边缘容器集群可用的自定义参数 {@link V20180525.DescribeEdgeAvailableExtraArgsRequest} {@link V20180525.DescribeEdgeAvailableExtraArgsResponse} */
  DescribeEdgeAvailableExtraArgs(data: V20180525.DescribeEdgeAvailableExtraArgsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEdgeAvailableExtraArgsResponse>;
  /** 获取边缘容器CVM实例相关信息 {@link V20180525.DescribeEdgeCVMInstancesRequest} {@link V20180525.DescribeEdgeCVMInstancesResponse} */
  DescribeEdgeCVMInstances(data: V20180525.DescribeEdgeCVMInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEdgeCVMInstancesResponse>;
  /** 查询边缘集群自定义参数 {@link V20180525.DescribeEdgeClusterExtraArgsRequest} {@link V20180525.DescribeEdgeClusterExtraArgsResponse} */
  DescribeEdgeClusterExtraArgs(data: V20180525.DescribeEdgeClusterExtraArgsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEdgeClusterExtraArgsResponse>;
  /** 查询边缘计算集群的节点信息 {@link V20180525.DescribeEdgeClusterInstancesRequest} {@link V20180525.DescribeEdgeClusterInstancesResponse} */
  DescribeEdgeClusterInstances(data: V20180525.DescribeEdgeClusterInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEdgeClusterInstancesResponse>;
  /** 查询边缘集群升级信息 {@link V20180525.DescribeEdgeClusterUpgradeInfoRequest} {@link V20180525.DescribeEdgeClusterUpgradeInfoResponse} */
  DescribeEdgeClusterUpgradeInfo(data: V20180525.DescribeEdgeClusterUpgradeInfoRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEdgeClusterUpgradeInfoResponse>;
  /** 查询边缘集群日志开关列表 {@link V20180525.DescribeEdgeLogSwitchesRequest} {@link V20180525.DescribeEdgeLogSwitchesResponse} */
  DescribeEdgeLogSwitches(data: V20180525.DescribeEdgeLogSwitchesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEdgeLogSwitchesResponse>;
  /** 查询容器实例日志 {@link V20180525.DescribeEksContainerInstanceLogRequest} {@link V20180525.DescribeEksContainerInstanceLogResponse} */
  DescribeEksContainerInstanceLog(data: V20180525.DescribeEksContainerInstanceLogRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEksContainerInstanceLogResponse>;
  /** 查询开启vpc-cni异步任务的进度 {@link V20180525.DescribeEnableVpcCniProgressRequest} {@link V20180525.DescribeEnableVpcCniProgressResponse} */
  DescribeEnableVpcCniProgress(data: V20180525.DescribeEnableVpcCniProgressRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEnableVpcCniProgressResponse>;
  /** 查询信息加密状态 {@link V20180525.DescribeEncryptionStatusRequest} {@link V20180525.DescribeEncryptionStatusResponse} */
  DescribeEncryptionStatus(data: V20180525.DescribeEncryptionStatusRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeEncryptionStatusResponse>;
  /** 查询已经存在的节点 {@link V20180525.DescribeExistedInstancesRequest} {@link V20180525.DescribeExistedInstancesResponse} */
  DescribeExistedInstances(data: V20180525.DescribeExistedInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeExistedInstancesResponse>;
  /** 查看开启第三方节点池配置信息 {@link V20180525.DescribeExternalNodeSupportConfigRequest} {@link V20180525.DescribeExternalNodeSupportConfigResponse} */
  DescribeExternalNodeSupportConfig(data: V20180525.DescribeExternalNodeSupportConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeExternalNodeSupportConfigResponse>;
  /** 获取eniipamd组件信息 {@link V20180525.DescribeIPAMDRequest} {@link V20180525.DescribeIPAMDResponse} */
  DescribeIPAMD(data: V20180525.DescribeIPAMDRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeIPAMDResponse>;
  /** 查询镜像缓存信息 {@link V20180525.DescribeImageCachesRequest} {@link V20180525.DescribeImageCachesResponse} */
  DescribeImageCaches(data: V20180525.DescribeImageCachesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeImageCachesResponse>;
  /** 获取镜像信息 {@link V20180525.DescribeImagesRequest} {@link V20180525.DescribeImagesResponse} */
  DescribeImages(data: V20180525.DescribeImagesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeImagesResponse>;
  /** 查询日志采集规则 {@link V20180525.DescribeLogConfigsRequest} {@link V20180525.DescribeLogConfigsResponse} */
  DescribeLogConfigs(data: V20180525.DescribeLogConfigsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeLogConfigsResponse>;
  /** 查询集群日志开关列表 {@link V20180525.DescribeLogSwitchesRequest} {@link V20180525.DescribeLogSwitchesResponse} */
  DescribeLogSwitches(data: V20180525.DescribeLogSwitchesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeLogSwitchesResponse>;
  /** 查询托管集群的master组件状态 {@link V20180525.DescribeMasterComponentRequest} {@link V20180525.DescribeMasterComponentResponse} */
  DescribeMasterComponent(data: V20180525.DescribeMasterComponentRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeMasterComponentResponse>;
  /** 获取OS聚合信息 {@link V20180525.DescribeOSImagesRequest} {@link V20180525.DescribeOSImagesResponse} */
  DescribeOSImages(data: V20180525.DescribeOSImagesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeOSImagesResponse>;
  /** 查询opa策略列表 {@link V20180525.DescribeOpenPolicyListRequest} {@link V20180525.DescribeOpenPolicyListResponse} */
  DescribeOpenPolicyList(data: V20180525.DescribeOpenPolicyListRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeOpenPolicyListResponse>;
  /** 查询超级节点上正在运行中Pod的计费信息 {@link V20180525.DescribePodChargeInfoRequest} {@link V20180525.DescribePodChargeInfoResponse} */
  DescribePodChargeInfo(data: V20180525.DescribePodChargeInfoRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePodChargeInfoResponse>;
  /** 查询Pod 抵扣率 {@link V20180525.DescribePodDeductionRateRequest} {@link V20180525.DescribePodDeductionRateResponse} */
  DescribePodDeductionRate(data: V20180525.DescribePodDeductionRateRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePodDeductionRateResponse>;
  /** 根据规格查询 Pod 信息 {@link V20180525.DescribePodsBySpecRequest} {@link V20180525.DescribePodsBySpecResponse} */
  DescribePodsBySpec(data: V20180525.DescribePodsBySpecRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePodsBySpecResponse>;
  /** 查询按量计费超级节点上的资源详情 {@link V20180525.DescribePostNodeResourcesRequest} {@link V20180525.DescribePostNodeResourcesResponse} */
  DescribePostNodeResources(data: V20180525.DescribePostNodeResourcesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePostNodeResourcesResponse>;
  /** 获取关联目标集群的实例列表 {@link V20180525.DescribePrometheusAgentInstancesRequest} {@link V20180525.DescribePrometheusAgentInstancesResponse} */
  DescribePrometheusAgentInstances(data: V20180525.DescribePrometheusAgentInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusAgentInstancesResponse>;
  /** 获取被关联集群列表 {@link V20180525.DescribePrometheusAgentsRequest} {@link V20180525.DescribePrometheusAgentsResponse} */
  DescribePrometheusAgents(data: V20180525.DescribePrometheusAgentsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusAgentsResponse>;
  /** 获取告警历史 {@link V20180525.DescribePrometheusAlertHistoryRequest} {@link V20180525.DescribePrometheusAlertHistoryResponse} */
  DescribePrometheusAlertHistory(data: V20180525.DescribePrometheusAlertHistoryRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusAlertHistoryResponse>;
  /** 获取2.0实例告警策略列表 {@link V20180525.DescribePrometheusAlertPolicyRequest} {@link V20180525.DescribePrometheusAlertPolicyResponse} */
  DescribePrometheusAlertPolicy(data: V20180525.DescribePrometheusAlertPolicyRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusAlertPolicyResponse>;
  /** 获取告警规则列表 {@link V20180525.DescribePrometheusAlertRuleRequest} {@link V20180525.DescribePrometheusAlertRuleResponse} */
  DescribePrometheusAlertRule(data: V20180525.DescribePrometheusAlertRuleRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusAlertRuleResponse>;
  /** 获取TMP实例关联集群列表 {@link V20180525.DescribePrometheusClusterAgentsRequest} {@link V20180525.DescribePrometheusClusterAgentsResponse} */
  DescribePrometheusClusterAgents(data: V20180525.DescribePrometheusClusterAgentsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusClusterAgentsResponse>;
  /** 获取集群采集配置 {@link V20180525.DescribePrometheusConfigRequest} {@link V20180525.DescribePrometheusConfigResponse} */
  DescribePrometheusConfig(data: V20180525.DescribePrometheusConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusConfigResponse>;
  /** 获得实例级别抓取配置 {@link V20180525.DescribePrometheusGlobalConfigRequest} {@link V20180525.DescribePrometheusGlobalConfigResponse} */
  DescribePrometheusGlobalConfig(data: V20180525.DescribePrometheusGlobalConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusGlobalConfigResponse>;
  /** 查询全局告警通知渠道 {@link V20180525.DescribePrometheusGlobalNotificationRequest} {@link V20180525.DescribePrometheusGlobalNotificationResponse} */
  DescribePrometheusGlobalNotification(data: V20180525.DescribePrometheusGlobalNotificationRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusGlobalNotificationResponse>;
  /** 获取实例详细信息 {@link V20180525.DescribePrometheusInstanceRequest} {@link V20180525.DescribePrometheusInstanceResponse} */
  DescribePrometheusInstance(data: V20180525.DescribePrometheusInstanceRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusInstanceResponse>;
  /** 获取2.0实例初始化任务状态 {@link V20180525.DescribePrometheusInstanceInitStatusRequest} {@link V20180525.DescribePrometheusInstanceInitStatusResponse} */
  DescribePrometheusInstanceInitStatus(data: V20180525.DescribePrometheusInstanceInitStatusRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusInstanceInitStatusResponse>;
  /** 获取2.0实例列表 {@link V20180525.DescribePrometheusInstancesOverviewRequest} {@link V20180525.DescribePrometheusInstancesOverviewResponse} */
  DescribePrometheusInstancesOverview(data: V20180525.DescribePrometheusInstancesOverviewRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusInstancesOverviewResponse>;
  /** 获取实例列表 {@link V20180525.DescribePrometheusOverviewsRequest} {@link V20180525.DescribePrometheusOverviewsResponse} */
  DescribePrometheusOverviews(data: V20180525.DescribePrometheusOverviewsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusOverviewsResponse>;
  /** 获取聚合规则列表，包含关联集群内的资源 {@link V20180525.DescribePrometheusRecordRulesRequest} {@link V20180525.DescribePrometheusRecordRulesResponse} */
  DescribePrometheusRecordRules(data: V20180525.DescribePrometheusRecordRulesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusRecordRulesResponse>;
  /** 获取targets信息 {@link V20180525.DescribePrometheusTargetsRequest} {@link V20180525.DescribePrometheusTargetsResponse} */
  DescribePrometheusTargets(data: V20180525.DescribePrometheusTargetsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusTargetsResponse>;
  /** 拉取模板列表 {@link V20180525.DescribePrometheusTempRequest} {@link V20180525.DescribePrometheusTempResponse} */
  DescribePrometheusTemp(data: V20180525.DescribePrometheusTempRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusTempResponse>;
  /** 获取模板关联实例信息 {@link V20180525.DescribePrometheusTempSyncRequest} {@link V20180525.DescribePrometheusTempSyncResponse} */
  DescribePrometheusTempSync(data: V20180525.DescribePrometheusTempSyncRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusTempSyncResponse>;
  /** 获取模板同步信息 {@link V20180525.DescribePrometheusTemplateSyncRequest} {@link V20180525.DescribePrometheusTemplateSyncResponse} */
  DescribePrometheusTemplateSync(data: V20180525.DescribePrometheusTemplateSyncRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusTemplateSyncResponse>;
  /** 模板列表 {@link V20180525.DescribePrometheusTemplatesRequest} {@link V20180525.DescribePrometheusTemplatesResponse} */
  DescribePrometheusTemplates(data: V20180525.DescribePrometheusTemplatesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribePrometheusTemplatesResponse>;
  /** 预留实例用量查询 {@link V20180525.DescribeRIUtilizationDetailRequest} {@link V20180525.DescribeRIUtilizationDetailResponse} */
  DescribeRIUtilizationDetail(data: V20180525.DescribeRIUtilizationDetailRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeRIUtilizationDetailResponse>;
  /** 查询地域列表 {@link V20180525.DescribeRegionsRequest} {@link V20180525.DescribeRegionsResponse} */
  DescribeRegions(data: V20180525.DescribeRegionsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeRegionsResponse>;
  /** 查询预留券使用率 {@link V20180525.DescribeReservedInstanceUtilizationRateRequest} {@link V20180525.DescribeReservedInstanceUtilizationRateResponse} */
  DescribeReservedInstanceUtilizationRate(data: V20180525.DescribeReservedInstanceUtilizationRateRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeReservedInstanceUtilizationRateResponse>;
  /** 查询预留实例列表 {@link V20180525.DescribeReservedInstancesRequest} {@link V20180525.DescribeReservedInstancesResponse} */
  DescribeReservedInstances(data: V20180525.DescribeReservedInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeReservedInstancesResponse>;
  /** 获取集群资源使用量 {@link V20180525.DescribeResourceUsageRequest} {@link V20180525.DescribeResourceUsageResponse} */
  DescribeResourceUsage(data: V20180525.DescribeResourceUsageRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeResourceUsageResponse>;
  /** 查询路由表冲突列表 {@link V20180525.DescribeRouteTableConflictsRequest} {@link V20180525.DescribeRouteTableConflictsResponse} */
  DescribeRouteTableConflicts(data: V20180525.DescribeRouteTableConflictsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeRouteTableConflictsResponse>;
  /** 基于K8S版本获取可选运行时版本 {@link V20180525.DescribeSupportedRuntimeRequest} {@link V20180525.DescribeSupportedRuntimeResponse} */
  DescribeSupportedRuntime(data: V20180525.DescribeSupportedRuntimeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeSupportedRuntimeResponse>;
  /** 获取边缘计算集群的认证信息 {@link V20180525.DescribeTKEEdgeClusterCredentialRequest} {@link V20180525.DescribeTKEEdgeClusterCredentialResponse} */
  DescribeTKEEdgeClusterCredential(data: V20180525.DescribeTKEEdgeClusterCredentialRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeTKEEdgeClusterCredentialResponse>;
  /** 查询边缘计算集群状态 {@link V20180525.DescribeTKEEdgeClusterStatusRequest} {@link V20180525.DescribeTKEEdgeClusterStatusResponse} */
  DescribeTKEEdgeClusterStatus(data: V20180525.DescribeTKEEdgeClusterStatusRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeTKEEdgeClusterStatusResponse>;
  /** 查询边缘集群列表 {@link V20180525.DescribeTKEEdgeClustersRequest} {@link V20180525.DescribeTKEEdgeClustersResponse} */
  DescribeTKEEdgeClusters(data: V20180525.DescribeTKEEdgeClustersRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeTKEEdgeClustersResponse>;
  /** 获取边缘计算外部访问的kubeconfig {@link V20180525.DescribeTKEEdgeExternalKubeconfigRequest} {@link V20180525.DescribeTKEEdgeExternalKubeconfigResponse} */
  DescribeTKEEdgeExternalKubeconfig(data: V20180525.DescribeTKEEdgeExternalKubeconfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeTKEEdgeExternalKubeconfigResponse>;
  /** 获取边缘脚本链接 {@link V20180525.DescribeTKEEdgeScriptRequest} {@link V20180525.DescribeTKEEdgeScriptResponse} */
  DescribeTKEEdgeScript(data: V20180525.DescribeTKEEdgeScriptRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeTKEEdgeScriptResponse>;
  /** 集群版本信息 {@link V20180525.DescribeVersionsRequest} {@link V20180525.DescribeVersionsResponse} */
  DescribeVersions(data: V20180525.DescribeVersionsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeVersionsResponse>;
  /** 查询机型可支持的最大VPC-CNI模式Pod数量 {@link V20180525.DescribeVpcCniPodLimitsRequest} {@link V20180525.DescribeVpcCniPodLimitsResponse} */
  DescribeVpcCniPodLimits(data: V20180525.DescribeVpcCniPodLimitsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DescribeVpcCniPodLimitsResponse>;
  /** 关闭集群审计 {@link V20180525.DisableClusterAuditRequest} {@link V20180525.DisableClusterAuditResponse} */
  DisableClusterAudit(data: V20180525.DisableClusterAuditRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DisableClusterAuditResponse>;
  /** 关闭集群删除保护 {@link V20180525.DisableClusterDeletionProtectionRequest} {@link V20180525.DisableClusterDeletionProtectionResponse} */
  DisableClusterDeletionProtection(data: V20180525.DisableClusterDeletionProtectionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DisableClusterDeletionProtectionResponse>;
  /** 关闭加密信息保护 {@link V20180525.DisableEncryptionProtectionRequest} {@link V20180525.DisableEncryptionProtectionResponse} */
  DisableEncryptionProtection(data: V20180525.DisableEncryptionProtectionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DisableEncryptionProtectionResponse>;
  /** 关闭事件持久化功能 {@link V20180525.DisableEventPersistenceRequest} {@link V20180525.DisableEventPersistenceResponse} */
  DisableEventPersistence(data: V20180525.DisableEventPersistenceRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DisableEventPersistenceResponse>;
  /** 关闭附加的VPC-CNI网络能力 {@link V20180525.DisableVpcCniNetworkTypeRequest} {@link V20180525.DisableVpcCniNetworkTypeResponse} */
  DisableVpcCniNetworkType(data: V20180525.DisableVpcCniNetworkTypeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DisableVpcCniNetworkTypeResponse>;
  /** 驱逐超级节点 {@link V20180525.DrainClusterVirtualNodeRequest} {@link V20180525.DrainClusterVirtualNodeResponse} */
  DrainClusterVirtualNode(data: V20180525.DrainClusterVirtualNodeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.DrainClusterVirtualNodeResponse>;
  /** 开启集群审计 {@link V20180525.EnableClusterAuditRequest} {@link V20180525.EnableClusterAuditResponse} */
  EnableClusterAudit(data: V20180525.EnableClusterAuditRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.EnableClusterAuditResponse>;
  /** 启用集群删除保护 {@link V20180525.EnableClusterDeletionProtectionRequest} {@link V20180525.EnableClusterDeletionProtectionResponse} */
  EnableClusterDeletionProtection(data: V20180525.EnableClusterDeletionProtectionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.EnableClusterDeletionProtectionResponse>;
  /** 开启加密数据保护 {@link V20180525.EnableEncryptionProtectionRequest} {@link V20180525.EnableEncryptionProtectionResponse} */
  EnableEncryptionProtection(data: V20180525.EnableEncryptionProtectionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.EnableEncryptionProtectionResponse>;
  /** 开启事件持久化功能 {@link V20180525.EnableEventPersistenceRequest} {@link V20180525.EnableEventPersistenceResponse} */
  EnableEventPersistence(data: V20180525.EnableEventPersistenceRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.EnableEventPersistenceResponse>;
  /** 开启vpc-cni容器网络能力 {@link V20180525.EnableVpcCniNetworkTypeRequest} {@link V20180525.EnableVpcCniNetworkTypeResponse} */
  EnableVpcCniNetworkType(data: V20180525.EnableVpcCniNetworkTypeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.EnableVpcCniNetworkTypeResponse>;
  /** 操作TKEEdge集群的addon {@link V20180525.ForwardTKEEdgeApplicationRequestV3Request} {@link V20180525.ForwardTKEEdgeApplicationRequestV3Response} */
  ForwardTKEEdgeApplicationRequestV3(data: V20180525.ForwardTKEEdgeApplicationRequestV3Request, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ForwardTKEEdgeApplicationRequestV3Response>;
  /** 获取集群规模价格 {@link V20180525.GetClusterLevelPriceRequest} {@link V20180525.GetClusterLevelPriceResponse} */
  GetClusterLevelPrice(data: V20180525.GetClusterLevelPriceRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.GetClusterLevelPriceResponse>;
  /** 查询匹配的镜像缓存 {@link V20180525.GetMostSuitableImageCacheRequest} {@link V20180525.GetMostSuitableImageCacheResponse} */
  GetMostSuitableImageCache(data: V20180525.GetMostSuitableImageCacheRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.GetMostSuitableImageCacheResponse>;
  /** 获取TKE支持的App列表 {@link V20180525.GetTkeAppChartListRequest} {@link V20180525.GetTkeAppChartListResponse} */
  GetTkeAppChartList(data: V20180525.GetTkeAppChartListRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.GetTkeAppChartListResponse>;
  /** 获得节点升级当前的进度 {@link V20180525.GetUpgradeInstanceProgressRequest} {@link V20180525.GetUpgradeInstanceProgressResponse} */
  GetUpgradeInstanceProgress(data: V20180525.GetUpgradeInstanceProgressRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.GetUpgradeInstanceProgressResponse>;
  /** 安装addon {@link V20180525.InstallAddonRequest} {@link V20180525.InstallAddonResponse} */
  InstallAddon(data: V20180525.InstallAddonRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.InstallAddonResponse>;
  /** 安装边缘日志采集组件 {@link V20180525.InstallEdgeLogAgentRequest} {@link V20180525.InstallEdgeLogAgentResponse} */
  InstallEdgeLogAgent(data: V20180525.InstallEdgeLogAgentRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.InstallEdgeLogAgentResponse>;
  /** 安装日志采集组件 {@link V20180525.InstallLogAgentRequest} {@link V20180525.InstallLogAgentResponse} */
  InstallLogAgent(data: V20180525.InstallLogAgentRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.InstallLogAgentResponse>;
  /** 查询指定集群的巡检结果信息 {@link V20180525.ListClusterInspectionResultsRequest} {@link V20180525.ListClusterInspectionResultsResponse} */
  ListClusterInspectionResults(data: V20180525.ListClusterInspectionResultsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ListClusterInspectionResultsResponse>;
  /** 查询集群巡检结果历史列表 {@link V20180525.ListClusterInspectionResultsItemsRequest} {@link V20180525.ListClusterInspectionResultsItemsResponse} */
  ListClusterInspectionResultsItems(data: V20180525.ListClusterInspectionResultsItemsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ListClusterInspectionResultsItemsResponse>;
  /** 修改集群伸缩组属性 {@link V20180525.ModifyClusterAsGroupAttributeRequest} {@link V20180525.ModifyClusterAsGroupAttributeResponse} */
  ModifyClusterAsGroupAttribute(data: V20180525.ModifyClusterAsGroupAttributeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterAsGroupAttributeResponse>;
  /** 修改集群弹性伸缩属性 {@link V20180525.ModifyClusterAsGroupOptionAttributeRequest} {@link V20180525.ModifyClusterAsGroupOptionAttributeResponse} */
  ModifyClusterAsGroupOptionAttribute(data: V20180525.ModifyClusterAsGroupOptionAttributeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterAsGroupOptionAttributeResponse>;
  /** 修改集群属性 {@link V20180525.ModifyClusterAttributeRequest} {@link V20180525.ModifyClusterAttributeResponse} */
  ModifyClusterAttribute(data: V20180525.ModifyClusterAttributeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterAttributeResponse>;
  /** 修改集群认证配置 {@link V20180525.ModifyClusterAuthenticationOptionsRequest} {@link V20180525.ModifyClusterAuthenticationOptionsResponse} */
  ModifyClusterAuthenticationOptions(data: V20180525.ModifyClusterAuthenticationOptionsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterAuthenticationOptionsResponse>;
  /** 修改托管集群外网端口的安全策略 {@link V20180525.ModifyClusterEndpointSPRequest} {@link V20180525.ModifyClusterEndpointSPResponse} */
  ModifyClusterEndpointSP(data: V20180525.ModifyClusterEndpointSPRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterEndpointSPResponse>;
  /** 修改集群镜像 {@link V20180525.ModifyClusterImageRequest} {@link V20180525.ModifyClusterImageResponse} */
  ModifyClusterImage(data: V20180525.ModifyClusterImageRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterImageResponse>;
  /** 编辑节点池 {@link V20180525.ModifyClusterNodePoolRequest} {@link V20180525.ModifyClusterNodePoolResponse} */
  ModifyClusterNodePool(data: V20180525.ModifyClusterNodePoolRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterNodePoolResponse>;
  /** 修改集群运行时配置 {@link V20180525.ModifyClusterRuntimeConfigRequest} {@link V20180525.ModifyClusterRuntimeConfigResponse} */
  ModifyClusterRuntimeConfig(data: V20180525.ModifyClusterRuntimeConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterRuntimeConfigResponse>;
  /** 修改集群标签 {@link V20180525.ModifyClusterTagsRequest} {@link V20180525.ModifyClusterTagsResponse} */
  ModifyClusterTags(data: V20180525.ModifyClusterTagsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterTagsResponse>;
  /** 修改超级节点池 {@link V20180525.ModifyClusterVirtualNodePoolRequest} {@link V20180525.ModifyClusterVirtualNodePoolResponse} */
  ModifyClusterVirtualNodePool(data: V20180525.ModifyClusterVirtualNodePoolRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyClusterVirtualNodePoolResponse>;
  /** 修改托管集群master组件 {@link V20180525.ModifyMasterComponentRequest} {@link V20180525.ModifyMasterComponentResponse} */
  ModifyMasterComponent(data: V20180525.ModifyMasterComponentRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyMasterComponentResponse>;
  /** 修改节点池关联伸缩组的期望实例数 {@link V20180525.ModifyNodePoolDesiredCapacityAboutAsgRequest} {@link V20180525.ModifyNodePoolDesiredCapacityAboutAsgResponse} */
  ModifyNodePoolDesiredCapacityAboutAsg(data: V20180525.ModifyNodePoolDesiredCapacityAboutAsgRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyNodePoolDesiredCapacityAboutAsgResponse>;
  /** 修改节点池的机型配置 {@link V20180525.ModifyNodePoolInstanceTypesRequest} {@link V20180525.ModifyNodePoolInstanceTypesResponse} */
  ModifyNodePoolInstanceTypes(data: V20180525.ModifyNodePoolInstanceTypesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyNodePoolInstanceTypesResponse>;
  /** 批量修改opa策略 {@link V20180525.ModifyOpenPolicyListRequest} {@link V20180525.ModifyOpenPolicyListResponse} */
  ModifyOpenPolicyList(data: V20180525.ModifyOpenPolicyListRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyOpenPolicyListResponse>;
  /** 修改被关联集群的external labels {@link V20180525.ModifyPrometheusAgentExternalLabelsRequest} {@link V20180525.ModifyPrometheusAgentExternalLabelsResponse} */
  ModifyPrometheusAgentExternalLabels(data: V20180525.ModifyPrometheusAgentExternalLabelsRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyPrometheusAgentExternalLabelsResponse>;
  /** 修改2.0实例告警策略 {@link V20180525.ModifyPrometheusAlertPolicyRequest} {@link V20180525.ModifyPrometheusAlertPolicyResponse} */
  ModifyPrometheusAlertPolicy(data: V20180525.ModifyPrometheusAlertPolicyRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyPrometheusAlertPolicyResponse>;
  /** 修改告警规则 {@link V20180525.ModifyPrometheusAlertRuleRequest} {@link V20180525.ModifyPrometheusAlertRuleResponse} */
  ModifyPrometheusAlertRule(data: V20180525.ModifyPrometheusAlertRuleRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyPrometheusAlertRuleResponse>;
  /** 修改集群采集配置 {@link V20180525.ModifyPrometheusConfigRequest} {@link V20180525.ModifyPrometheusConfigResponse} */
  ModifyPrometheusConfig(data: V20180525.ModifyPrometheusConfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyPrometheusConfigResponse>;
  /** 修改全局告警通知渠道 {@link V20180525.ModifyPrometheusGlobalNotificationRequest} {@link V20180525.ModifyPrometheusGlobalNotificationResponse} */
  ModifyPrometheusGlobalNotification(data: V20180525.ModifyPrometheusGlobalNotificationRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyPrometheusGlobalNotificationResponse>;
  /** 修改聚合规则yaml方式 {@link V20180525.ModifyPrometheusRecordRuleYamlRequest} {@link V20180525.ModifyPrometheusRecordRuleYamlResponse} */
  ModifyPrometheusRecordRuleYaml(data: V20180525.ModifyPrometheusRecordRuleYamlRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyPrometheusRecordRuleYamlResponse>;
  /** 修改模板实例 {@link V20180525.ModifyPrometheusTempRequest} {@link V20180525.ModifyPrometheusTempResponse} */
  ModifyPrometheusTemp(data: V20180525.ModifyPrometheusTempRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyPrometheusTempResponse>;
  /** 修改模板 {@link V20180525.ModifyPrometheusTemplateRequest} {@link V20180525.ModifyPrometheusTemplateResponse} */
  ModifyPrometheusTemplate(data: V20180525.ModifyPrometheusTemplateRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyPrometheusTemplateResponse>;
  /** 修改预留券的抵扣范围 {@link V20180525.ModifyReservedInstanceScopeRequest} {@link V20180525.ModifyReservedInstanceScopeResponse} */
  ModifyReservedInstanceScope(data: V20180525.ModifyReservedInstanceScopeRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ModifyReservedInstanceScopeResponse>;
  /** 移出节点池节点 {@link V20180525.RemoveNodeFromNodePoolRequest} {@link V20180525.RemoveNodeFromNodePoolResponse} */
  RemoveNodeFromNodePool(data: V20180525.RemoveNodeFromNodePoolRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.RemoveNodeFromNodePoolResponse>;
  /** 续费预留券实例 {@link V20180525.RenewReservedInstancesRequest} {@link V20180525.RenewReservedInstancesResponse} */
  RenewReservedInstances(data: V20180525.RenewReservedInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.RenewReservedInstancesResponse>;
  /** 重启容器实例 {@link V20180525.RestartEKSContainerInstancesRequest} {@link V20180525.RestartEKSContainerInstancesResponse} */
  RestartEKSContainerInstances(data: V20180525.RestartEKSContainerInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.RestartEKSContainerInstancesResponse>;
  /** 集群回滚应用版本 {@link V20180525.RollbackClusterReleaseRequest} {@link V20180525.RollbackClusterReleaseResponse} */
  RollbackClusterRelease(data: V20180525.RollbackClusterReleaseRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.RollbackClusterReleaseResponse>;
  /** 初始化TMP实例 {@link V20180525.RunPrometheusInstanceRequest} {@link V20180525.RunPrometheusInstanceResponse} */
  RunPrometheusInstance(data: V20180525.RunPrometheusInstanceRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.RunPrometheusInstanceResponse>;
  /** 缩容独立集群master节点 {@link V20180525.ScaleInClusterMasterRequest} {@link V20180525.ScaleInClusterMasterResponse} */
  ScaleInClusterMaster(data: V20180525.ScaleInClusterMasterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ScaleInClusterMasterResponse>;
  /** 扩容独立集群master节点 {@link V20180525.ScaleOutClusterMasterRequest} {@link V20180525.ScaleOutClusterMasterResponse} */
  ScaleOutClusterMaster(data: V20180525.ScaleOutClusterMasterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.ScaleOutClusterMasterResponse>;
  /** 节点池节点设置移出保护 {@link V20180525.SetNodePoolNodeProtectionRequest} {@link V20180525.SetNodePoolNodeProtectionResponse} */
  SetNodePoolNodeProtection(data: V20180525.SetNodePoolNodeProtectionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.SetNodePoolNodeProtectionResponse>;
  /** 同步模板 {@link V20180525.SyncPrometheusTempRequest} {@link V20180525.SyncPrometheusTempResponse} */
  SyncPrometheusTemp(data: V20180525.SyncPrometheusTempRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.SyncPrometheusTempResponse>;
  /** 同步模板到实例或者集群 {@link V20180525.SyncPrometheusTemplateRequest} {@link V20180525.SyncPrometheusTemplateResponse} */
  SyncPrometheusTemplate(data: V20180525.SyncPrometheusTemplateRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.SyncPrometheusTemplateResponse>;
  /** 集群删除应用 {@link V20180525.UninstallClusterReleaseRequest} {@link V20180525.UninstallClusterReleaseResponse} */
  UninstallClusterRelease(data: V20180525.UninstallClusterReleaseRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UninstallClusterReleaseResponse>;
  /** 卸载边缘日志采集组件 {@link V20180525.UninstallEdgeLogAgentRequest} {@link V20180525.UninstallEdgeLogAgentResponse} */
  UninstallEdgeLogAgent(data: V20180525.UninstallEdgeLogAgentRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UninstallEdgeLogAgentResponse>;
  /** 卸载日志采集组件 {@link V20180525.UninstallLogAgentRequest} {@link V20180525.UninstallLogAgentResponse} */
  UninstallLogAgent(data: V20180525.UninstallLogAgentRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UninstallLogAgentResponse>;
  /** 更新addon {@link V20180525.UpdateAddonRequest} {@link V20180525.UpdateAddonResponse} */
  UpdateAddon(data: V20180525.UpdateAddonRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpdateAddonResponse>;
  /** 更新集群的kubeconfig信息 {@link V20180525.UpdateClusterKubeconfigRequest} {@link V20180525.UpdateClusterKubeconfigResponse} */
  UpdateClusterKubeconfig(data: V20180525.UpdateClusterKubeconfigRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpdateClusterKubeconfigResponse>;
  /** 升级集群 {@link V20180525.UpdateClusterVersionRequest} {@link V20180525.UpdateClusterVersionResponse} */
  UpdateClusterVersion(data: V20180525.UpdateClusterVersionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpdateClusterVersionResponse>;
  /** 修改弹性集群EKS {@link V20180525.UpdateEKSClusterRequest} {@link V20180525.UpdateEKSClusterResponse} */
  UpdateEKSCluster(data: V20180525.UpdateEKSClusterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpdateEKSClusterResponse>;
  /** 更新容器实例 {@link V20180525.UpdateEKSContainerInstanceRequest} {@link V20180525.UpdateEKSContainerInstanceResponse} */
  UpdateEKSContainerInstance(data: V20180525.UpdateEKSContainerInstanceRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpdateEKSContainerInstanceResponse>;
  /** 升级边缘集群 {@link V20180525.UpdateEdgeClusterVersionRequest} {@link V20180525.UpdateEdgeClusterVersionResponse} */
  UpdateEdgeClusterVersion(data: V20180525.UpdateEdgeClusterVersionRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpdateEdgeClusterVersionResponse>;
  /** 更新镜像缓存 {@link V20180525.UpdateImageCacheRequest} {@link V20180525.UpdateImageCacheResponse} */
  UpdateImageCache(data: V20180525.UpdateImageCacheRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpdateImageCacheResponse>;
  /** 修改边缘计算的集群 {@link V20180525.UpdateTKEEdgeClusterRequest} {@link V20180525.UpdateTKEEdgeClusterResponse} */
  UpdateTKEEdgeCluster(data: V20180525.UpdateTKEEdgeClusterRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpdateTKEEdgeClusterResponse>;
  /** 集群节点的升级 {@link V20180525.UpgradeClusterInstancesRequest} {@link V20180525.UpgradeClusterInstancesResponse} */
  UpgradeClusterInstances(data: V20180525.UpgradeClusterInstancesRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpgradeClusterInstancesResponse>;
  /** 集群升级应用 {@link V20180525.UpgradeClusterReleaseRequest} {@link V20180525.UpgradeClusterReleaseResponse} */
  UpgradeClusterRelease(data: V20180525.UpgradeClusterReleaseRequest, config: AxiosRequestConfig & V20180525.VersionHeader): AxiosPromise<V20180525.UpgradeClusterReleaseResponse>;
}

export declare type Versions = ["2022-05-01", "2018-05-25"];

export default Tke;
