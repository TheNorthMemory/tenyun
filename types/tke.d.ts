/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** addon的具体描述 */
declare interface Addon {
  /** addon名称 */
  AddonName?: string;
  /** addon的版本 */
  AddonVersion?: string;
  /** addon的参数，是一个json格式的base64转码后的字符串 */
  RawValues?: string | null;
  /** addon的状态 */
  Phase?: string | null;
  /** addon失败的原因 */
  Reason?: string | null;
}

/** app所支持的chart */
declare interface AppChart {
  /** chart名称 */
  Name: string;
  /** chart的标签 */
  Label: string | null;
  /** chart的版本 */
  LatestVersion: string;
}

/** 集群关联的伸缩组最大实例数最小值实例数 */
declare interface AutoScalingGroupRange {
  /** 伸缩组最小实例数 */
  MinSize?: number;
  /** 伸缩组最大实例数 */
  MaxSize?: number;
}

/** 自动变配集群等级 */
declare interface AutoUpgradeClusterLevel {
  /** 是否开启自动变配集群等级 */
  IsAutoUpgrade: boolean;
}

/** 自动扩所容的节点 */
declare interface AutoscalingAdded {
  /** 正在加入中的节点数量 */
  Joining: number;
  /** 初始化中的节点数量 */
  Initializing: number;
  /** 正常的节点数量 */
  Normal: number;
  /** 节点总数 */
  Total: number;
}

/** 仓储仓库信息 */
declare interface BackupStorageLocation {
  /** 备份仓库名称 */
  Name?: string;
  /** 存储仓库所属地域，比如COS广州(ap-guangzhou) */
  StorageRegion?: string;
  /** 存储服务提供方，默认腾讯云 */
  Provider?: string | null;
  /** 对象存储桶名称，如果是COS必须是tke-backup-前缀开头 */
  Bucket?: string | null;
  /** 对象存储桶路径 */
  Path?: string | null;
  /** 存储仓库状态 */
  State?: string | null;
  /** 详细状态信息 */
  Message?: string | null;
  /** 最后一次检查时间 */
  LastValidationTime?: string | null;
}

/** cuDNN的版本信息 */
declare interface CUDNN {
  /** cuDNN的版本 */
  Version: string;
  /** cuDNN的名字 */
  Name: string;
  /** cuDNN的Doc名字 */
  DocName?: string;
  /** cuDNN的Dev名字 */
  DevName?: string;
}

/** cloudrun安全特性能力 */
declare interface Capabilities {
  /** 启用安全能力项列表 */
  Add?: string[] | null;
  /** 禁用安全能力向列表 */
  Drop?: string[] | null;
}

/** EKS Instnace CBS volume */
declare interface CbsVolume {
  /** cbs volume 数据卷名称 */
  Name: string;
  /** 腾讯云cbs盘Id */
  CbsDiskId: string;
}

/** 集群信息结构体 */
declare interface Cluster {
  /** 集群ID */
  ClusterId: string;
  /** 集群名称 */
  ClusterName: string;
  /** 集群描述 */
  ClusterDescription: string;
  /** 集群版本（默认值为1.10.5） */
  ClusterVersion: string;
  /** 集群系统。centos7.2x86_64 或者 ubuntu16.04.1 LTSx86_64，默认取值为ubuntu16.04.1 LTSx86_64 */
  ClusterOs: string;
  /** 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。 */
  ClusterType: string;
  /** 集群网络相关参数 */
  ClusterNetworkSettings: ClusterNetworkSettings;
  /** 集群当前node数量 */
  ClusterNodeNum: number;
  /** 集群所属的项目ID */
  ProjectId: number;
  /** 标签描述列表。 */
  TagSpecification: TagSpecification[] | null;
  /** 集群状态 (Trading 集群开通中,Creating 创建中,Running 运行中,Deleting 删除中,Idling 闲置中,Recovering 唤醒中,Scaling 规模调整中,Upgrading 升级中,WaittingForConnect 等待注册,Trading 集群开通中,Isolated 欠费隔离中,Pause 集群升级暂停,NodeUpgrading 节点升级中,RuntimeUpgrading 节点运行时升级中,MasterScaling Master扩缩容中,ClusterLevelUpgrading 调整规格中,ResourceIsolate 隔离中,ResourceIsolated 已隔离,ResourceReverse 冲正中,Abnormal 异常) */
  ClusterStatus: string;
  /** 集群属性(包括集群不同属性的MAP，属性字段包括NodeNameType (lan-ip模式和hostname 模式，默认无lan-ip模式)) */
  Property: string | null;
  /** 集群当前master数量 */
  ClusterMaterNodeNum: number;
  /** 集群使用镜像id */
  ImageId: string | null;
  /** OsCustomizeType 系统定制类型 */
  OsCustomizeType: string | null;
  /** 集群运行环境docker或container */
  ContainerRuntime: string | null;
  /** 创建时间 */
  CreatedTime: string | null;
  /** 删除保护开关 */
  DeletionProtection: boolean | null;
  /** 集群是否开启第三方节点支持 */
  EnableExternalNode: boolean | null;
  /** 集群等级，针对托管集群生效 */
  ClusterLevel: string | null;
  /** 自动变配集群等级，针对托管集群生效 */
  AutoUpgradeClusterLevel: boolean | null;
  /** 是否开启QGPU共享 */
  QGPUShareEnable: boolean | null;
  /** 运行时版本 */
  RuntimeVersion: string | null;
  /** 集群当前etcd数量 */
  ClusterEtcdNodeNum: number | null;
}

/** 集群高级配置 */
declare interface ClusterAdvancedSettings {
  /** 是否启用IPVS */
  IPVS?: boolean;
  /** 是否启用集群节点自动扩缩容(创建集群流程不支持开启此功能) */
  AsEnabled?: boolean;
  /** 集群使用的runtime类型，包括"docker"和"containerd"两种类型，默认为"docker" */
  ContainerRuntime?: string;
  /** 集群中节点NodeName类型（包括 hostname,lan-ip两种形式，默认为lan-ip。如果开启了hostname模式，创建节点时需要设置HostName参数，并且InstanceName需要和HostName一致） */
  NodeNameType?: string;
  /** 集群自定义参数 */
  ExtraArgs?: ClusterExtraArgs;
  /** 集群网络类型（包括GR(全局路由)和VPC-CNI两种模式，默认为GR。 */
  NetworkType?: string;
  /** 集群VPC-CNI模式是否为非固定IP，默认: FALSE 固定IP。 */
  IsNonStaticIpMode?: boolean;
  /** 是否启用集群删除保护 */
  DeletionProtection?: boolean;
  /** 集群的网络代理模型，目前tke集群支持的网络代理模式有三种：iptables,ipvs,ipvs-bpf，此参数仅在使用ipvs-bpf模式时使用，三种网络模式的参数设置关系如下：iptables模式：IPVS和KubeProxyMode都不设置ipvs模式: 设置IPVS为true, KubeProxyMode不设置ipvs-bpf模式: 设置KubeProxyMode为kube-proxy-bpf使用ipvs-bpf的网络模式需要满足以下条件：1. 集群版本必须为1.14及以上；2. 系统镜像必须是: Tencent Linux 2.4； */
  KubeProxyMode?: string;
  /** 是否开启审计开关 */
  AuditEnabled?: boolean;
  /** 审计日志上传到的logset日志集 */
  AuditLogsetId?: string;
  /** 审计日志上传到的topic */
  AuditLogTopicId?: string;
  /** 区分共享网卡多IP模式和独立网卡模式，共享网卡多 IP 模式填写"tke-route-eni"，独立网卡模式填写"tke-direct-eni"，默认为共享网卡模式 */
  VpcCniType?: string;
  /** 运行时版本 */
  RuntimeVersion?: string;
  /** 是否开节点podCIDR大小的自定义模式 */
  EnableCustomizedPodCIDR?: boolean;
  /** 自定义模式下的基础pod数量 */
  BasePodNumber?: number;
  /** 启用 CiliumMode 的模式，空值表示不启用，“clusterIP” 表示启用 Cilium 支持 ClusterIP */
  CiliumMode?: string;
  /** 集群VPC-CNI模式下是否是双栈集群，默认false，表明非双栈集群。 */
  IsDualStack?: boolean;
  /** 是否开启QGPU共享 */
  QGPUShareEnable?: boolean;
}

/** 集群关联的伸缩组信息 */
declare interface ClusterAsGroup {
  /** 伸缩组ID */
  AutoScalingGroupId: string;
  /** 伸缩组状态(开启 enabled 开启中 enabling 关闭 disabled 关闭中 disabling 更新中 updating 删除中 deleting 开启缩容中 scaleDownEnabling 关闭缩容中 scaleDownDisabling) */
  Status: string;
  /** 节点是否设置成不可调度 */
  IsUnschedulable: boolean | null;
  /** 伸缩组的label列表 */
  Labels: Label[] | null;
  /** 创建时间 */
  CreatedTime: string;
}

/** 集群伸缩组属性 */
declare interface ClusterAsGroupAttribute {
  /** 伸缩组ID */
  AutoScalingGroupId?: string;
  /** 是否开启 */
  AutoScalingGroupEnabled?: boolean;
  /** 伸缩组最大最小实例数 */
  AutoScalingGroupRange?: AutoScalingGroupRange;
}

/** 集群弹性伸缩配置 */
declare interface ClusterAsGroupOption {
  /** 是否开启缩容 */
  IsScaleDownEnabled?: boolean | null;
  /** 多伸缩组情况下扩容选择算法(random 随机选择，most-pods 最多类型的Pod least-waste 最少的资源浪费，默认为random) */
  Expander?: string | null;
  /** 最大并发缩容数 */
  MaxEmptyBulkDelete?: number | null;
  /** 集群扩容后多少分钟开始判断缩容（默认为10分钟） */
  ScaleDownDelay?: number | null;
  /** 节点连续空闲多少分钟后被缩容（默认为 10分钟） */
  ScaleDownUnneededTime?: number | null;
  /** 节点资源使用量低于多少(百分比)时认为空闲(默认: 50(百分比)) */
  ScaleDownUtilizationThreshold?: number | null;
  /** 含有本地存储Pod的节点是否不缩容(默认： FALSE) */
  SkipNodesWithLocalStorage?: boolean | null;
  /** 含有kube-system namespace下非DaemonSet管理的Pod的节点是否不缩容 (默认： FALSE) */
  SkipNodesWithSystemPods?: boolean | null;
  /** 计算资源使用量时是否默认忽略DaemonSet的实例(默认值: False，不忽略) */
  IgnoreDaemonSetsUtilization?: boolean | null;
  /** CA做健康性判断的个数，默认3，即超过OkTotalUnreadyCount个数后，CA会进行健康性判断。 */
  OkTotalUnreadyCount: number | null;
  /** 未就绪节点的最大百分比，此后CA会停止操作 */
  MaxTotalUnreadyPercentage: number | null;
  /** 表示未准备就绪的节点在有资格进行缩减之前应该停留多长时间 */
  ScaleDownUnreadyTime: number | null;
  /** CA删除未在Kubernetes中注册的节点之前等待的时间 */
  UnregisteredNodeRemovalTime: number | null;
}

/** 描述集群的基本配置信息 */
declare interface ClusterBasicSettings {
  /** 集群操作系统，支持设置公共镜像(字段传相应镜像Name)和自定义镜像(字段传相应镜像ID)，详情参考：https://cloud.tencent.com/document/product/457/68289 */
  ClusterOs?: string;
  /** 集群版本,默认值为1.10.5 */
  ClusterVersion?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群描述 */
  ClusterDescription?: string;
  /** 私有网络ID，形如vpc-xxx。创建托管空集群时必传。 */
  VpcId?: string;
  /** 集群内新增资源所属项目ID。 */
  ProjectId?: number;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到集群实例。 */
  TagSpecification?: TagSpecification[];
  /** 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值) */
  OsCustomizeType?: string;
  /** 是否开启节点的默认安全组(默认: 否，Alpha特性) */
  NeedWorkSecurityGroup?: boolean;
  /** 当选择Cilium Overlay网络插件时，TKE会从该子网获取2个IP用来创建内网负载均衡 */
  SubnetId?: string;
  /** 集群等级，针对托管集群生效 */
  ClusterLevel?: string;
  /** 自动变配集群等级，针对托管集群生效 */
  AutoUpgradeClusterLevel?: AutoUpgradeClusterLevel;
}

/** 集群容器网络相关参数 */
declare interface ClusterCIDRSettings {
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
declare interface ClusterCondition {
  /** 集群创建过程类型 */
  Type: string;
  /** 集群创建过程状态 */
  Status: string;
  /** 最后一次探测到该状态的时间 */
  LastProbeTime: string | null;
  /** 最后一次转换到该过程的时间 */
  LastTransitionTime: string | null;
  /** 转换到该过程的简明原因 */
  Reason: string | null;
  /** 转换到该过程的更多信息 */
  Message: string | null;
}

/** 接入k8s 的认证信息 */
declare interface ClusterCredential {
  /** CA 根证书 */
  CACert: string;
  /** 认证用的Token */
  Token?: string;
}

/** 集群master自定义参数 */
declare interface ClusterExtraArgs {
  /** kube-apiserver自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"] */
  KubeAPIServer?: string[] | null;
  /** kube-controller-manager自定义参数 */
  KubeControllerManager?: string[] | null;
  /** kube-scheduler自定义参数 */
  KubeScheduler?: string[] | null;
  /** etcd自定义参数，只支持独立集群 */
  Etcd?: string[] | null;
}

/** 弹性容器集群内网访问LB信息 */
declare interface ClusterInternalLB {
  /** 是否开启内网访问LB */
  Enabled: boolean;
  /** 内网访问LB关联的子网Id */
  SubnetId?: string;
}

/** 托管集群等级属性 */
declare interface ClusterLevelAttribute {
  /** 集群等级 */
  Name: string;
  /** 等级名称 */
  Alias: string;
  /** 节点数量 */
  NodeCount: number;
  /** Pod数量 */
  PodCount: number;
  /** Configmap数量 */
  ConfigMapCount: number;
  /** CRD数量 */
  CRDCount: number;
  /** 是否启用 */
  Enable: boolean;
  /** 其他资源数量 */
  OtherCount: number | null;
}

/** 集群等级变配记录 */
declare interface ClusterLevelChangeRecord {
  /** 记录ID */
  ID: string;
  /** 集群ID */
  ClusterID: string;
  /** 变配状态：trading 发货中,upgrading 变配中,success 变配成功,failed 变配失败。 */
  Status: string;
  /** 状态描述 */
  Message: string;
  /** 变配前规模 */
  OldLevel: string;
  /** 变配后规模 */
  NewLevel: string;
  /** 变配触发类型：manual 手动,auto 自动 */
  TriggerType: string;
  /** 创建时间 */
  CreatedAt?: string;
  /** 开始时间 */
  StartedAt: string;
  /** 结束时间 */
  EndedAt: string;
}

/** 集群网络相关的参数 */
declare interface ClusterNetworkSettings {
  /** 用于分配集群容器和服务 IP 的 CIDR，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突 */
  ClusterCIDR: string;
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
  KubeProxyMode: string | null;
  /** 用于分配service的IP range，不得与 VPC CIDR 冲突，也不得与同 VPC 内其他集群 CIDR 冲突 */
  ServiceCIDR: string | null;
  /** 集群关联的容器子网 */
  Subnets: string[] | null;
  /** 是否忽略 ServiceCIDR 冲突错误, 仅在 VPC-CNI 模式生效，默认不忽略 */
  IgnoreServiceCIDRConflict: boolean | null;
  /** 集群VPC-CNI模式是否为非双栈集群，默认false，非双栈。 */
  IsDualStack: boolean | null;
  /** 用于分配service的IP range，由系统自动分配 */
  Ipv6ServiceCIDR: string | null;
  /** 集群Cilium Mode配置- clusterIP */
  CiliumMode: string | null;
}

/** 弹性容器集群公网访问负载均衡信息 */
declare interface ClusterPublicLB {
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
declare interface ClusterStatus {
  /** 集群Id */
  ClusterId: string;
  /** 集群状态 */
  ClusterState: string;
  /** 集群下机器实例的状态 */
  ClusterInstanceState: string;
  /** 集群是否开启监控 */
  ClusterBMonitor: boolean;
  /** 集群创建中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
  ClusterInitNodeNum: number;
  /** 集群运行中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
  ClusterRunningNodeNum: number;
  /** 集群异常的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
  ClusterFailedNodeNum: number;
  /** 集群已关机的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
  ClusterClosedNodeNum: number | null;
  /** 集群关机中的节点数，-1表示获取节点状态超时，-2表示获取节点状态失败 */
  ClusterClosingNodeNum: number | null;
  /** 集群是否开启删除保护 */
  ClusterDeletionProtection: boolean | null;
  /** 集群是否可审计 */
  ClusterAuditEnabled: boolean | null;
}

/** 集群版本信息 */
declare interface ClusterVersion {
  /** 集群ID */
  ClusterId: string;
  /** 集群主版本号列表，例如1.18.4 */
  Versions: string[];
}

/** 账户UIN与客户端证书CommonName的映射 */
declare interface CommonName {
  /** 子账户UIN */
  SubaccountUin: string;
  /** 子账户客户端证书中的CommonName字段 */
  CN: string;
}

/** EKS Instance Container容器 */
declare interface Container {
  /** 镜像 */
  Image: string;
  /** 容器名 */
  Name: string;
  /** 容器启动命令 */
  Commands?: string[];
  /** 容器启动参数 */
  Args?: string[];
  /** 容器内操作系统的环境变量 */
  EnvironmentVars?: EnvironmentVariable[];
  /** CPU，制改容器最多可使用的核数，该值不可超过容器实例的总核数。单位：核。 */
  Cpu?: number;
  /** 内存，限制该容器最多可使用的内存值，该值不可超过容器实例的总内存值。单位：GiB */
  Memory?: number;
  /** 数据卷挂载信息 */
  VolumeMounts?: VolumeMount[] | null;
  /** 当前状态 */
  CurrentState?: ContainerState | null;
  /** 重启次数 */
  RestartCount?: number | null;
  /** 容器工作目录 */
  WorkingDir?: string | null;
  /** 存活探针 */
  LivenessProbe?: LivenessOrReadinessProbe | null;
  /** 就绪探针 */
  ReadinessProbe?: LivenessOrReadinessProbe | null;
  /** Gpu限制 */
  GpuLimit?: number | null;
  /** 容器的安全上下文 */
  SecurityContext?: SecurityContext | null;
}

/** 容器状态 */
declare interface ContainerState {
  /** 容器运行开始时间 */
  StartTime: string | null;
  /** 容器状态：created, running, exited, unknown */
  State: string;
  /** 容器运行结束时间 */
  FinishTime: string | null;
  /** 容器运行退出码 */
  ExitCode: number | null;
  /** 容器状态 Reason */
  Reason: string | null;
  /** 容器状态信息 */
  Message: string | null;
  /** 容器重启次数 */
  RestartCount: number | null;
}

/** 集群中控制器的状态描述 */
declare interface ControllerStatus {
  /** 控制器的名字 */
  Name: string;
  /** 控制器是否开启 */
  Enabled: boolean;
}

/** 自定义驱动信息 */
declare interface CustomDriver {
  /** 自定义GPU驱动地址链接 */
  Address?: string | null;
}

/** 自定义DNS配置 */
declare interface DNSConfig {
  /** DNS 服务器IP地址列表 */
  Nameservers?: string[] | null;
  /** DNS搜索域列表 */
  Searches?: string[] | null;
  /** 对象选项列表，每个对象由name和value（可选）构成 */
  Options?: DNSConfigOption[] | null;
}

/** DNS配置选项 */
declare interface DNSConfigOption {
  /** 配置项名称 */
  Name: string | null;
  /** 项值 */
  Value: string | null;
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
  /** 挂载目录 */
  MountTarget?: string | null;
  /** 挂载设备名或分区名，当且仅当添加已有节点时需要 */
  DiskPartition: string | null;
}

/** Eks 自定义域名服务器 配置 */
declare interface DnsServerConf {
  /** 域名。空字符串表示所有域名。 */
  Domain: string;
  /** dns 服务器地址列表。地址格式 ip:port */
  DnsServers: string[];
}

/** GPU驱动和CUDA的版本信息 */
declare interface DriverVersion {
  /** GPU驱动或者CUDA的版本 */
  Version: string;
  /** GPU驱动或者CUDA的名字 */
  Name: string;
}

/** ECM增强服务 */
declare interface ECMEnhancedService {
  /** 是否开启云监控服务 */
  SecurityService?: ECMRunMonitorServiceEnabled;
  /** 是否开启云镜服务 */
  MonitorService?: ECMRunSecurityServiceEnabled;
}

/** ECM云监控服务 */
declare interface ECMRunMonitorServiceEnabled {
  /** 是否开启 */
  Enabled?: boolean;
}

/** ECM云镜服务 */
declare interface ECMRunSecurityServiceEnabled {
  /** 是否开启 */
  Enabled?: boolean;
  /** 云镜版本：0 基础版，1 专业版 */
  Version?: number;
}

/** ECM实例可用区及对应的实例创建数目及运营商的组合 */
declare interface ECMZoneInstanceCountISP {
  /** 创建实例的可用区 */
  Zone: string;
  /** 在当前可用区欲创建的实例数目 */
  InstanceCount: number;
  /** 运营商 */
  ISP: string;
}

/** 边缘容器参数描述 */
declare interface EdgeArgsFlag {
  /** 参数名 */
  Name?: string | null;
  /** 参数类型 */
  Type?: string | null;
  /** 参数描述 */
  Usage?: string | null;
  /** 参数默认值 */
  Default?: string | null;
  /** 参数可选范围（目前包含range和in两种，"[]"代表range，如"[1, 5]"表示参数必须>=1且 <=5, "()"代表in， 如"('aa', 'bb')"表示参数只能为字符串'aa'或者'bb'，该参数为空表示不校验） */
  Constraint?: string | null;
}

/** 边缘容器集群可用的自定义参数 */
declare interface EdgeAvailableExtraArgs {
  /** kube-apiserver可用的自定义参数 */
  KubeAPIServer?: EdgeArgsFlag[] | null;
  /** kube-controller-manager可用的自定义参数 */
  KubeControllerManager?: EdgeArgsFlag[] | null;
  /** kube-scheduler可用的自定义参数 */
  KubeScheduler?: EdgeArgsFlag[] | null;
  /** kubelet可用的自定义参数 */
  Kubelet?: EdgeArgsFlag[] | null;
}

/** 边缘计算集群信息 */
declare interface EdgeCluster {
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
  MaxNodePodNum?: number | null;
  /** 集群高级设置 */
  ClusterAdvancedSettings?: EdgeClusterAdvancedSettings | null;
  /** 边缘容器集群级别 */
  Level?: string | null;
  /** 是否支持自动提升集群配置 */
  AutoUpgradeClusterLevel?: boolean | null;
  /** 集群付费模式，支持POSTPAID_BY_HOUR或者PREPAID */
  ChargeType?: string | null;
  /** 边缘集群组件的版本 */
  EdgeVersion?: string | null;
  /** 集群绑定的云标签 */
  TagSpecification?: TagSpecification | null;
}

/** 边缘容器集群高级配置 */
declare interface EdgeClusterAdvancedSettings {
  /** 集群自定义参数 */
  ExtraArgs?: EdgeClusterExtraArgs | null;
  /** 运行时类型，支持"docker"和"containerd"，默认为docker */
  Runtime?: string | null;
  /** 集群kube-proxy转发模式，支持"iptables"和"ipvs"，默认为iptables */
  ProxyMode?: string | null;
}

/** 边缘容器集群master自定义参数 */
declare interface EdgeClusterExtraArgs {
  /** kube-apiserver自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["max-requests-inflight=500","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"] */
  KubeAPIServer?: string[] | null;
  /** kube-controller-manager自定义参数 */
  KubeControllerManager?: string[] | null;
  /** kube-scheduler自定义参数 */
  KubeScheduler?: string[] | null;
}

/** 边缘计算集群内网访问LB信息 */
declare interface EdgeClusterInternalLB {
  /** 是否开启内网访问LB */
  Enabled: boolean | null;
  /** 内网访问LB关联的子网Id */
  SubnetId?: string[] | null;
}

/** 边缘计算集群公网访问负载均衡信息 */
declare interface EdgeClusterPublicLB {
  /** 是否开启公网访问LB */
  Enabled: boolean | null;
  /** 允许访问的公网cidr */
  AllowFromCidrs?: string[] | null;
}

/** 用以帮助用户自动创建EIP的配置 */
declare interface EipAttribute {
  /** 容器实例删除后，EIP是否释放。Never表示不释放，其他任意值（包括空字符串）表示释放。 */
  DeletePolicy: string;
  /** EIP线路类型。默认值：BGP。已开通静态单线IP白名单的用户，可选值：CMCC：中国移动CTCC：中国电信CUCC：中国联通注意：仅部分地域支持静态单线IP。 */
  InternetServiceProvider?: string | null;
  /** EIP出带宽上限，单位：Mbps。 */
  InternetMaxBandwidthOut?: number | null;
}

/** EksContainerInstance实例类型 */
declare interface EksCi {
  /** EKS Cotainer Instance Id */
  EksCiId?: string;
  /** EKS Cotainer Instance Name */
  EksCiName?: string;
  /** 内存大小 */
  Memory?: number;
  /** CPU大小 */
  Cpu?: number;
  /** 安全组ID */
  SecurityGroupIds?: string[];
  /** 容器组的重启策略 */
  RestartPolicy?: string | null;
  /** 返回容器组创建状态：Pending，Running，Succeeded，Failed。其中：Failed （运行失败）指的容器组退出，RestartPolilcy为Never， 有容器exitCode非0；Succeeded（运行成功）指的是容器组退出了，RestartPolicy为Never或onFailure，所有容器exitCode都为0；Failed和Succeeded这两种状态都会停止运行，停止计费。Pending是创建中，Running是 运行中。 */
  Status?: string | null;
  /** 接到请求后的系统创建时间。 */
  CreationTime?: string | null;
  /** 容器全部成功退出后的时间 */
  SucceededTime?: string | null;
  /** 容器列表 */
  Containers?: Container[] | null;
  /** 数据卷信息 */
  EksCiVolume?: EksCiVolume | null;
  /** 容器组运行的安全上下文 */
  SecurityContext?: SecurityContext | null;
  /** 内网ip地址 */
  PrivateIp?: string | null;
  /** 容器实例绑定的Eip地址，注意可能为空 */
  EipAddress?: string | null;
  /** GPU类型。如无使用GPU则不返回 */
  GpuType?: string | null;
  /** CPU类型 */
  CpuType?: string | null;
  /** GPU卡数量 */
  GpuCount?: number | null;
  /** 实例所属VPC的Id */
  VpcId?: string | null;
  /** 实例所属子网Id */
  SubnetId?: string | null;
  /** 初始化容器列表 */
  InitContainers?: Container[] | null;
  /** 为容器实例关联 CAM 角色，value 填写 CAM 角色名称，容器实例可获取该 CAM 角色包含的权限策略，方便 容器实例 内的程序进行如购买资源、读写存储等云资源操作。 */
  CamRoleName?: string | null;
  /** 自动为用户创建的EipId */
  AutoCreatedEipId?: string | null;
  /** 容器状态是否持久化 */
  PersistStatus?: boolean | null;
}

/** EksCi地域信息 */
declare interface EksCiRegionInfo {
  /** 地域别名，形如gz */
  Alias: string;
  /** 地域名，形如ap-guangzhou */
  RegionName: string;
  /** 地域ID */
  RegionId: number;
}

/** EKS Instance Volume, 可选包括CbsVolume和NfsVolume */
declare interface EksCiVolume {
  /** Cbs Volume */
  CbsVolumes?: CbsVolume[] | null;
  /** Nfs Volume */
  NfsVolumes?: NfsVolume[] | null;
}

/** 弹性集群信息 */
declare interface EksCluster {
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
  /** 集群状态(running运行中，initializing 初始化中，failed异常) */
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
declare interface EnhancedService {
  /** 开启云安全服务。若不指定该参数，则默认开启云安全服务。 */
  SecurityService?: RunSecurityServiceEnabled;
  /** 开启云监控服务。若不指定该参数，则默认开启云监控服务。 */
  MonitorService?: RunMonitorServiceEnabled;
  /** 开启云自动化助手服务（TencentCloud Automation Tools，TAT）。若不指定该参数，则公共镜像默认开启云自动化助手服务，其他镜像默认不开启云自动化助手服务。 */
  AutomationService?: RunAutomationServiceEnabled;
}

/** EnvironmentVariable */
declare interface EnvironmentVariable {
  /** key */
  Name?: string;
  /** val */
  Value?: string;
}

/** 服务事件 */
declare interface Event {
  /** pod名称 */
  PodName: string;
  /** 事件原因内容 */
  Reason: string;
  /** 事件类型 */
  Type: string;
  /** 事件出现次数 */
  Count: number;
  /** 事件第一次出现时间 */
  FirstTimestamp: string;
  /** 事件最后一次出现时间 */
  LastTimestamp: string;
  /** 事件内容 */
  Message: string;
}

/** 探针在容器内执行检测命令参数类型 */
declare interface Exec {
  /** 容器内检测的命令 */
  Commands?: string[] | null;
}

/** 已经存在的实例信息 */
declare interface ExistedInstance {
  /** 实例是否支持加入集群(TRUE 可以加入 FALSE 不能加入)。 */
  Usable: boolean | null;
  /** 实例不支持加入的原因。 */
  UnusableReason: string | null;
  /** 实例已经所在的集群ID。 */
  AlreadyInCluster: string | null;
  /** 实例ID形如：ins-xxxxxxxx。 */
  InstanceId: string;
  /** 实例名称。 */
  InstanceName: string | null;
  /** 实例主网卡的内网IP列表。 */
  PrivateIpAddresses: string[] | null;
  /** 实例主网卡的公网IP列表。 */
  PublicIpAddresses: string[] | null;
  /** 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime: string | null;
  /** 实例的CPU核数，单位：核。 */
  CPU: number | null;
  /** 实例内存容量，单位：GB。 */
  Memory: number | null;
  /** 操作系统名称。 */
  OsName: string | null;
  /** 实例机型。 */
  InstanceType: string | null;
  /** 伸缩组ID */
  AutoscalingGroupId: string | null;
  /** 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月 POSTPAID_BY_HOUR：表示后付费，即按量计费 CDHPAID：CDH付费，即只对CDH计费，不对CDH上的实例计费。 */
  InstanceChargeType: string | null;
  /** 实例的IPv6地址。 */
  IPv6Addresses: string[] | null;
}

/** 不同角色的已存在节点配置参数 */
declare interface ExistedInstancesForNode {
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
declare interface ExistedInstancesPara {
  /** 集群ID */
  InstanceIds: string[];
  /** 实例额外需要设置参数信息 */
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
declare interface ExtensionAddon {
  /** 扩展组件名称 */
  AddonName: string;
  /** 扩展组件信息(扩展组件资源对象的json字符串描述) */
  AddonParam: string;
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** GPU相关的参数，包括驱动版本，CUDA版本，cuDNN版本以及是否开启MIG */
declare interface GPUArgs {
  /** 是否启用MIG特性 */
  MIGEnable?: boolean | null;
  /** GPU驱动版本信息 */
  Driver?: DriverVersion;
  /** CUDA版本信息 */
  CUDA?: DriverVersion | null;
  /** cuDNN版本信息 */
  CUDNN?: CUDNN | null;
  /** 自定义GPU驱动信息 */
  CustomDriver?: CustomDriver | null;
}

/** Probe中的HttpGet */
declare interface HttpGet {
  /** HttpGet检测的路径 */
  Path: string | null;
  /** HttpGet检测的端口号 */
  Port: number | null;
  /** HTTP or HTTPS */
  Scheme: string | null;
}

/** IP 地址 */
declare interface IPAddress {
  /** Ip 地址的类型。可为 advertise, public 等 */
  Type: string;
  /** Ip 地址 */
  Ip: string;
  /** 网络端口 */
  Port: number;
}

/** 镜像缓存的信息 */
declare interface ImageCache {
  /** 镜像缓存Id */
  ImageCacheId: string;
  /** 镜像缓存名称 */
  ImageCacheName: string;
  /** 镜像缓存大小。单位：GiB */
  ImageCacheSize: number;
  /** 镜像缓存包含的镜像列表 */
  Images: string[];
  /** 创建时间 */
  CreationTime: string;
  /** 到期时间 */
  ExpireDateTime: string;
  /** 镜像缓存事件信息 */
  Events: ImageCacheEvent[];
  /** 最新一次匹配到镜像缓存的时间 */
  LastMatchedTime: string;
  /** 镜像缓存对应的快照Id */
  SnapshotId: string;
  /** 镜像缓存状态，可能取值：Pending：创建中Ready：创建完成Failed：创建失败Updating：更新中UpdateFailed：更新失败只有状态为Ready时，才能正常使用镜像缓存 */
  Status: string;
}

/** 镜像缓存的事件 */
declare interface ImageCacheEvent {
  /** 镜像缓存Id */
  ImageCacheId: string;
  /** 事件类型, Normal或者Warning */
  Type: string;
  /** 事件原因简述 */
  Reason: string;
  /** 事件原因详述 */
  Message: string;
  /** 事件第一次出现时间 */
  FirstTimestamp: string;
  /** 事件最后一次出现时间 */
  LastTimestamp: string;
}

/** 镜像信息 */
declare interface ImageInstance {
  /** 镜像别名 */
  Alias: string | null;
  /** 操作系统名称 */
  OsName: string | null;
  /** 镜像ID */
  ImageId: string | null;
  /** 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值) */
  OsCustomizeType: string | null;
}

/** 从镜像仓库拉取镜像的凭据 */
declare interface ImageRegistryCredential {
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
declare interface Instance {
  /** 实例ID */
  InstanceId: string;
  /** 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER */
  InstanceRole: string;
  /** 实例异常(或者处于初始化中)的原因 */
  FailedReason: string;
  /** 实例的状态（running 运行中，initializing 初始化中，failed 异常） */
  InstanceState: string;
  /** 实例是否封锁状态 */
  DrainStatus: string | null;
  /** 节点配置 */
  InstanceAdvancedSettings: InstanceAdvancedSettings | null;
  /** 添加时间 */
  CreatedTime: string;
  /** 节点内网IP */
  LanIP: string | null;
  /** 资源池ID */
  NodePoolId: string | null;
  /** 自动伸缩组ID */
  AutoscalingGroupId: string | null;
}

/** 描述了k8s集群相关配置与信息。 */
declare interface InstanceAdvancedSettings {
  /** 该节点属于podCIDR大小自定义模式时，可指定节点上运行的pod数量上限 */
  DesiredPodNumber: number | null;
  /** GPU驱动相关参数 */
  GPUArgs: GPUArgs | null;
  /** base64 编码的用户脚本，在初始化节点之前执行，目前只对添加已有节点生效 */
  PreStartUserScript: string | null;
  /** 节点污点 */
  Taints: Taint[] | null;
  /** 数据盘挂载点, 默认不挂载数据盘. 已格式化的 ext3，ext4，xfs 文件系统的数据盘将直接挂载，其他文件系统或未格式化的数据盘将自动格式化为ext4 (tlinux系统格式化成xfs)并挂载，请注意备份数据! 无数据盘或有多块数据盘的云主机此设置不生效。注意，注意，多盘场景请使用下方的DataDisks数据结构，设置对应的云盘类型、云盘大小、挂载路径、是否格式化等信息。 */
  MountTarget?: string | null;
  /** dockerd --graph 指定值, 默认为 /var/lib/docker */
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
  ExtraArgs?: InstanceExtraArgs | null;
}

/** CVM实例数据盘挂载配置 */
declare interface InstanceDataDiskMountSetting {
  /** CVM实例类型 */
  InstanceType: string;
  /** 数据盘挂载信息 */
  DataDisks: DataDisk[];
  /** CVM实例所属可用区 */
  Zone: string;
}

/** 节点自定义参数 */
declare interface InstanceExtraArgs {
  /** kubelet自定义参数，参数格式为["k1=v1", "k1=v2"]， 例如["root-dir=/var/lib/kubelet","feature-gates=PodShareProcessNamespace=true,DynamicKubeletConfig=true"] */
  Kubelet?: string[] | null;
}

/** 节点升级过程中集群当前状态 */
declare interface InstanceUpgradeClusterStatus {
  /** pod总数 */
  PodTotal: number;
  /** NotReady pod总数 */
  NotReadyPod: number;
}

/** 某个节点升级前检查结果 */
declare interface InstanceUpgradePreCheckResult {
  /** 检查是否通过 */
  CheckPass: boolean;
  /** 检查项数组 */
  Items: InstanceUpgradePreCheckResultItem[];
  /** 本节点独立pod列表 */
  SinglePods: string[];
}

/** 节点升级检查项结果 */
declare interface InstanceUpgradePreCheckResultItem {
  /** 工作负载的命名空间 */
  Namespace: string;
  /** 工作负载类型 */
  WorkLoadKind: string;
  /** 工作负载名称 */
  WorkLoadName: string;
  /** 驱逐节点前工作负载running的pod数目 */
  Before: number;
  /** 驱逐节点后工作负载running的pod数目 */
  After: number;
  /** 工作负载在本节点上的pod列表 */
  Pods: string[];
}

/** 某个节点的升级进度 */
declare interface InstanceUpgradeProgressItem {
  /** 节点instanceID */
  InstanceID: string;
  /** 任务生命周期process 运行中paused 已停止pauing 正在停止done 已完成timeout 已超时aborted 已取消pending 还未开始 */
  LifeState: string;
  /** 升级开始时间 */
  StartAt: string | null;
  /** 升级结束时间 */
  EndAt: string | null;
  /** 升级前检查结果 */
  CheckResult: InstanceUpgradePreCheckResult;
  /** 升级步骤详情 */
  Detail: TaskStepInfo[];
}

/** 集群巡检诊断的默认目录类型 */
declare interface KubeJarvisStateCatalogue {
  /** 目录级别，支持参数：first：一级目录second：二级目录 */
  CatalogueLevel?: string | null;
  /** 目录名 */
  CatalogueName?: string | null;
}

/** 集群巡检诊断结果 */
declare interface KubeJarvisStateDiagnostic {
  /** 诊断开始时间 */
  StartTime?: string | null;
  /** 诊断结束时间 */
  EndTime?: string | null;
  /** 诊断目录 */
  Catalogues?: KubeJarvisStateCatalogue[] | null;
  /** 诊断类型 */
  Type?: string | null;
  /** 诊断名称 */
  Name?: string | null;
  /** 诊断描述 */
  Desc?: string | null;
  /** 诊断结果列表 */
  Results?: KubeJarvisStateResultsItem[] | null;
  /** 诊断结果统计 */
  Statistics?: KubeJarvisStateStatistic[] | null;
}

/** 集群巡检诊断概览 */
declare interface KubeJarvisStateDiagnosticOverview {
  /** 诊断目录 */
  Catalogues?: KubeJarvisStateCatalogue[] | null;
  /** 诊断结果统计 */
  Statistics?: KubeJarvisStateStatistic[] | null;
}

/** 集群巡检检查结果概览 */
declare interface KubeJarvisStateInspectionOverview {
  /** 集群ID */
  ClusterId?: string | null;
  /** 诊断结果统计 */
  Statistics?: KubeJarvisStateStatistic[] | null;
  /** 诊断结果详情 */
  Diagnostics?: KubeJarvisStateDiagnosticOverview[] | null;
}

/** 集群巡检检查结果 */
declare interface KubeJarvisStateInspectionResult {
  /** 集群ID */
  ClusterId?: string | null;
  /** 诊断开始时间 */
  StartTime?: string | null;
  /** 诊断结束时间 */
  EndTime?: string | null;
  /** 诊断结果统计 */
  Statistics?: KubeJarvisStateStatistic[] | null;
  /** 诊断结果详情 */
  Diagnostics?: KubeJarvisStateDiagnostic[] | null;
  /** 查询巡检报告相关报错 */
  Error?: string | null;
}

/** 集群巡检结果历史列表 */
declare interface KubeJarvisStateInspectionResultsItem {
  /** 巡检结果名称 */
  Name?: string | null;
  /** 诊断结果统计 */
  Statistics?: KubeJarvisStateStatistic[] | null;
}

/** 集群巡检诊断对象信息 */
declare interface KubeJarvisStateResultObjInfo {
  /** 对象属性名称 */
  PropertyName?: string | null;
  /** 对象属性值 */
  PropertyValue?: string | null;
}

/** 集群巡检诊断结果详情信息 */
declare interface KubeJarvisStateResultsItem {
  /** 诊断结果级别 */
  Level?: string | null;
  /** 诊断对象名 */
  ObjName?: string | null;
  /** 诊断对象信息 */
  ObjInfo?: KubeJarvisStateResultObjInfo[] | null;
  /** 诊断项标题 */
  Title?: string | null;
  /** 诊断项描述 */
  Desc?: string | null;
  /** 诊断建议 */
  Proposal?: string | null;
  /** 诊断建议文档链接 */
  ProposalDocUrl?: string | null;
  /** 诊断建议文档名称 */
  ProposalDocName?: string | null;
}

/** 集群巡检统计结果 */
declare interface KubeJarvisStateStatistic {
  /** 诊断结果的健康水平 */
  HealthyLevel?: string | null;
  /** 诊断结果的统计 */
  Count?: number | null;
}

/** k8s中标签，一般以数组的方式存在 */
declare interface Label {
  /** map表中的Name */
  Name: string;
  /** map表中的Value */
  Value: string;
}

/** 健康探针 */
declare interface LivenessOrReadinessProbe {
  /** 探针参数 */
  Probe: Probe | null;
  /** HttpGet检测参数 */
  HttpGet?: HttpGet | null;
  /** 容器内检测命令参数 */
  Exec?: Exec | null;
  /** TcpSocket检测的端口参数 */
  TcpSocket?: TcpSocket | null;
}

/** 描述了实例登录相关配置与信息。 */
declare interface LoginSettings {
  /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) \` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。 */
  Password?: string | null;
  /** 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口[DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699)获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。 */
  KeyIds?: string[] | null;
  /** 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：TRUE：表示保持镜像的登录设置FALSE：表示不保持镜像的登录设置默认取值：FALSE。 */
  KeepImageLogin?: string | null;
}

/** 手动加入的节点 */
declare interface ManuallyAdded {
  /** 加入中的节点数量 */
  Joining: number;
  /** 初始化中的节点数量 */
  Initializing: number;
  /** 正常的节点数量 */
  Normal: number;
  /** 节点总数 */
  Total: number;
}

/** EKS Instance Nfs Volume */
declare interface NfsVolume {
  /** nfs volume 数据卷名称 */
  Name: string;
  /** NFS 服务器地址 */
  Server: string;
  /** NFS 数据卷路径 */
  Path: string;
  /** 默认为 False */
  ReadOnly?: boolean;
}

/** 节点统计列表 */
declare interface NodeCountSummary {
  /** 手动管理的节点 */
  ManuallyAdded: ManuallyAdded | null;
  /** 自动管理的节点 */
  AutoscalingAdded: AutoscalingAdded | null;
}

/** 节点池描述 */
declare interface NodePool {
  /** NodePoolId 资源池id */
  NodePoolId: string;
  /** Name 资源池名称 */
  Name: string;
  /** ClusterInstanceId 集群实例id */
  ClusterInstanceId: string;
  /** LifeState 状态，当前节点池生命周期状态包括：creating，normal，updating，deleting，deleted */
  LifeState: string;
  /** LaunchConfigurationId 配置 */
  LaunchConfigurationId: string;
  /** AutoscalingGroupId 分组id */
  AutoscalingGroupId: string;
  /** Labels 标签 */
  Labels: Label[];
  /** Taints 污点标记 */
  Taints: Taint[];
  /** NodeCountSummary 节点列表 */
  NodeCountSummary: NodeCountSummary;
  /** 状态信息 */
  AutoscalingGroupStatus: string | null;
  /** 最大节点数量 */
  MaxNodesNum: number | null;
  /** 最小节点数量 */
  MinNodesNum: number | null;
  /** 期望的节点数量 */
  DesiredNodesNum: number | null;
  /** 节点池osName */
  NodePoolOs: string | null;
  /** 容器的镜像版本，"DOCKER_CUSTOMIZE"(容器定制版),"GENERAL"(普通版本，默认值) */
  OsCustomizeType: string | null;
  /** 镜像id */
  ImageId: string | null;
  /** 集群属于节点podCIDR大小自定义模式时，节点池需要带上pod数量属性 */
  DesiredPodNum: number | null;
  /** 用户自定义脚本 */
  UserScript: string | null;
  /** 资源标签 */
  Tags: Tag[] | null;
  /** 删除保护开关 */
  DeletionProtection: boolean | null;
}

/** 加入存量节点时的节点池选项 */
declare interface NodePoolOption {
  /** 是否加入节点池 */
  AddToNodePool?: boolean;
  /** 节点池id */
  NodePoolId?: string;
  /** 是否继承节点池相关配置 */
  InheritConfigurationFromNodePool?: boolean;
}

/** OIDC认证相关配置 */
declare interface OIDCConfigAuthenticationOptions {
  /** 创建身份提供商 */
  AutoCreateOIDCConfig?: boolean | null;
  /** 创建身份提供商的ClientId */
  AutoCreateClientId?: string[] | null;
  /** 创建PodIdentityWebhook组件 */
  AutoInstallPodIdentityWebhookAddon?: boolean | null;
}

/** 应用市场安装的Pending应用 */
declare interface PendingRelease {
  /** 应用状态详情 */
  Condition: string | null;
  /** 创建时间 */
  CreatedTime: string | null;
  /** 应用ID */
  ID: string | null;
  /** 应用名称 */
  Name: string | null;
  /** 应用命名空间 */
  Namespace: string | null;
  /** 应用状态 */
  Status: string | null;
  /** 更新时间 */
  UpdatedTime: string | null;
}

/** 某机型可支持的最大 VPC-CNI 模式的 Pod 数量 */
declare interface PodLimitsByType {
  /** TKE共享网卡非固定IP模式可支持的Pod数量 */
  TKERouteENINonStaticIP: number | null;
  /** TKE共享网卡固定IP模式可支持的Pod数量 */
  TKERouteENIStaticIP: number | null;
  /** TKE独立网卡模式可支持的Pod数量 */
  TKEDirectENI: number | null;
}

/** 机型信息和其可支持的最大VPC-CNI模式Pod数量信息 */
declare interface PodLimitsInstance {
  /** 机型所在可用区 */
  Zone: string | null;
  /** 机型所属机型族 */
  InstanceFamily: string | null;
  /** 实例机型名称 */
  InstanceType: string | null;
  /** 机型可支持的最大VPC-CNI模式Pod数量信息 */
  PodLimits: PodLimitsByType | null;
}

/** 健康检查探测参数 */
declare interface Probe {
  /** Number of seconds after the container has started before liveness probes are initiated. */
  InitialDelaySeconds?: number | null;
  /** Number of seconds after which the probe times out.Defaults to 1 second. Minimum value is 1. */
  TimeoutSeconds?: number | null;
  /** How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. */
  PeriodSeconds?: number | null;
  /** Minimum consecutive successes for the probe to be considered successful after having failed.Defaults to 1. Must be 1 for liveness. Minimum value is 1. */
  SuccessThreshold?: number | null;
  /** Minimum consecutive failures for the probe to be considered failed after having succeeded.Defaults to 3. Minimum value is 1. */
  FailureThreshold?: number | null;
}

/** 托管Prometheus agent信息 */
declare interface PrometheusAgentInfo {
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId: string;
  /** 备注 */
  Describe?: string;
}

/** 托管prometheus agent概览 */
declare interface PrometheusAgentOverview {
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId: string;
  /** agent状态normal = 正常abnormal = 异常 */
  Status: string;
  /** 集群名称 */
  ClusterName: string;
  /** 额外labels本集群的所有指标都会带上这几个label */
  ExternalLabels: Label[] | null;
  /** 集群所在地域 */
  Region: string | null;
  /** 集群所在VPC ID */
  VpcId: string | null;
  /** 记录关联等操作的失败信息 */
  FailedReason: string | null;
}

/** prometheus告警历史 */
declare interface PrometheusAlertHistoryItem {
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
declare interface PrometheusAlertManagerConfig {
  /** alertmanager url */
  Url: string;
  /** alertmanager部署所在集群类型 */
  ClusterType?: string | null;
  /** alertmanager部署所在集群ID */
  ClusterId?: string | null;
}

/** 托管prometheus告警策略实例 */
declare interface PrometheusAlertPolicyItem {
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
declare interface PrometheusAlertRule {
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
declare interface PrometheusAlertRuleDetail {
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
declare interface PrometheusClusterAgentBasic {
  /** 集群ID */
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
declare interface PrometheusClusterAgentPodConfig {
  /** 是否使用HostNetWork */
  HostNet?: boolean;
  /** 指定pod运行节点 */
  NodeSelector?: Label[];
  /** 容忍污点 */
  Tolerations?: Toleration[];
}

/** prometheus配置 */
declare interface PrometheusConfigItem {
  /** 名称 */
  Name: string;
  /** 配置内容 */
  Config: string;
  /** 用于出参，如果该配置来至模板，则为模板id */
  TemplateId?: string | null;
}

/** 托管prometheus中grafana的信息 */
declare interface PrometheusGrafanaInfo {
  /** 是否启用 */
  Enabled: boolean;
  /** 域名，只有开启外网访问才有效果 */
  Domain: string;
  /** 内网地址，或者外网地址 */
  Address: string;
  /** 是否开启了外网访问close = 未开启外网访问opening = 正在开启外网访问open = 已开启外网访问 */
  Internet: string;
  /** grafana管理员用户名 */
  AdminUser: string;
}

/** 托管prometheus实例概览 */
declare interface PrometheusInstanceOverview {
  /** 实例id */
  InstanceId: string;
  /** 实例名称 */
  Name: string;
  /** 实例vpcId */
  VpcId: string;
  /** 实例子网Id */
  SubnetId: string;
  /** 实例当前的状态prepare_env = 初始化环境install_suit = 安装组件running = 运行中 */
  Status: string;
  /** COS桶存储 */
  COSBucket: string;
  /** grafana默认地址，如果开启外网访问得为域名，否则为内网地址 */
  GrafanaURL: string | null;
  /** 关联集群总数 */
  BoundTotal: number | null;
  /** 运行正常的集群数 */
  BoundNormal: number | null;
}

/** 托管prometheusV2实例概览 */
declare interface PrometheusInstancesOverview {
  /** 实例ID */
  InstanceId: string;
  /** 实例名 */
  InstanceName: string;
  /** VPC ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 运行状态（1:正在创建；2:运行中；3:异常；4:重启中；5:销毁中； 6:已停机； 7: 已删除） */
  InstanceStatus: number;
  /** 计费状态（1:正常；2:过期; 3:销毁; 4:分配中; 5:分配失败） */
  ChargeStatus: number | null;
  /** 是否开启 Grafana（0:不开启，1:开启） */
  EnableGrafana: number;
  /** Grafana 面板 URL */
  GrafanaURL: string | null;
  /** 实例付费类型（1:试用版；2:预付费） */
  InstanceChargeType: number;
  /** 规格名称 */
  SpecName: string | null;
  /** 存储周期 */
  DataRetentionTime: number | null;
  /** 购买的实例过期时间 */
  ExpireTime: string | null;
  /** 自动续费标记(0:不自动续费；1:开启自动续费；2:禁止自动续费；-1:无效) */
  AutoRenewFlag: number | null;
  /** 绑定集群总数 */
  BoundTotal: number;
  /** 绑定集群正常状态总数 */
  BoundNormal: number;
}

/** prometheus一个job的targets */
declare interface PrometheusJobTargets {
  /** 该Job的targets列表 */
  Targets: PrometheusTarget[];
  /** job的名称 */
  JobName: string;
  /** targets总数 */
  Total: number;
  /** 健康的target总数 */
  Up: number;
}

/** amp告警渠道配置 */
declare interface PrometheusNotification {
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
declare interface PrometheusNotificationItem {
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
declare interface PrometheusRecordRuleYamlItem {
  /** 实例名称 */
  Name: string;
  /** 最近更新时间 */
  UpdateTime: string;
  /** Yaml内容 */
  TemplateId: string;
  /** 如果该聚合规则来至模板，则TemplateId为模板id */
  Content: string | null;
  /** 该聚合规则如果来源于用户集群crd资源定义，则ClusterId为所属集群ID */
  ClusterId: string | null;
}

/** prometheus一个抓取目标的信息 */
declare interface PrometheusTarget {
  /** 抓取目标的URL */
  Url: string;
  /** target当前状态,当前支持up = 健康down = 不健康unknown = 未知 */
  State: string;
  /** target的元label */
  Labels: Label[];
  /** 上一次抓取的时间 */
  LastScrape: string;
  /** 上一次抓取的耗时，单位是s */
  ScrapeDuration: number;
  /** 上一次抓取如果错误，该字段存储错误信息 */
  Error: string;
}

/** 模板实例 */
declare interface PrometheusTemp {
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
declare interface PrometheusTempModify {
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
declare interface PrometheusTemplate {
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
declare interface PrometheusTemplateModify {
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
declare interface PrometheusTemplateSyncTarget {
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

/** 地域属性信息 */
declare interface RegionInstance {
  /** 地域名称 */
  RegionName: string | null;
  /** 地域ID */
  RegionId: number | null;
  /** 地域状态 */
  Status: string | null;
  /** 地域特性开关(按照JSON的形式返回所有属性) */
  FeatureGates: string | null;
  /** 地域简称 */
  Alias: string | null;
  /** 地域白名单 */
  Remark: string | null;
}

/** 应用市场部署的应用结构 */
declare interface Release {
  /** 应用名称 */
  Name: string;
  /** 应用命名空间 */
  Namespace: string;
  /** 应用当前版本 */
  Revision: string | null;
  /** 应用状态 */
  Status: string | null;
  /** 制品名称 */
  ChartName: string | null;
  /** 制品版本 */
  ChartVersion: string | null;
  /** 制品应用版本 */
  AppVersion: string | null;
  /** 更新时间 */
  UpdatedTime: string | null;
  /** 应用描述 */
  Description: string | null;
}

/** 应用市场的安装应用详情 */
declare interface ReleaseDetails {
  /** 应用名称 */
  Name: string;
  /** 应用所在命名空间 */
  Namespace: string;
  /** 应用当前版本 */
  Version: number | null;
  /** 应用状态 */
  Status: string | null;
  /** 应用描述 */
  Description: string | null;
  /** 应用提示 */
  Notes: string | null;
  /** 用户自定义参数 */
  Config: string | null;
  /** 应用资源详情 */
  Manifest: string | null;
  /** 应用制品版本 */
  ChartVersion: string | null;
  /** 应用制品名称 */
  ChartName: string | null;
  /** 应用制品描述 */
  ChartDescription: string | null;
  /** 应用制品app版本 */
  AppVersion: string | null;
  /** 应用首次部署时间 */
  FirstDeployedTime: string | null;
  /** 应用最近部署时间 */
  LastDeployedTime: string | null;
  /** 应用参数 */
  ComputedValues: string | null;
}

/** 应用市场中部署的应用版本历史 */
declare interface ReleaseHistory {
  /** 应用名称 */
  Name: string;
  /** 应用命名空间 */
  Namespace: string;
  /** 应用版本 */
  Revision: number | null;
  /** 应用状态 */
  Status: string | null;
  /** 应用制品名称 */
  Chart: string | null;
  /** 应用制品版本 */
  AppVersion: string | null;
  /** 应用更新时间 */
  UpdatedTime: string | null;
  /** 应用描述 */
  Description: string | null;
}

/** 应用市场自定义参数 */
declare interface ReleaseValues {
  /** 自定义参数原始值 */
  RawOriginal: string;
  /** 自定义参数值类型 */
  ValuesType: string;
}

/** 资源删除选项 */
declare interface ResourceDeleteOption {
  /** 资源类型，例如CBS */
  ResourceType: string;
  /** 集群删除时资源的删除模式：terminate（销毁），retain （保留） */
  DeleteMode: string;
}

/** 集群资源使用量 */
declare interface ResourceUsage {
  /** 资源类型 */
  Name: string;
  /** 资源使用量 */
  Usage: number;
  /** 资源使用详情 */
  Details: ResourceUsageDetail[];
}

/** 资源使用明细 */
declare interface ResourceUsageDetail {
  /** 资源名称 */
  Name: string;
  /** 资源使用量 */
  Usage: number;
}

/** 集群路由对象 */
declare interface RouteInfo {
  /** 路由表名称。 */
  RouteTableName: string;
  /** 目的端CIDR。 */
  DestinationCidrBlock: string;
  /** 下一跳地址。 */
  GatewayIp: string;
}

/** 路由表冲突对象 */
declare interface RouteTableConflict {
  /** 路由表类型。 */
  RouteTableType: string;
  /** 路由表CIDR。 */
  RouteTableCidrBlock: string | null;
  /** 路由表名称。 */
  RouteTableName: string | null;
  /** 路由表ID。 */
  RouteTableId: string | null;
}

/** 集群路由表对象 */
declare interface RouteTableInfo {
  /** 路由表名称。 */
  RouteTableName: string;
  /** 路由表CIDR。 */
  RouteTableCidrBlock: string;
  /** VPC实例ID。 */
  VpcId: string;
}

/** 描述了 “云自动化助手” 服务相关的信息 */
declare interface RunAutomationServiceEnabled {
  /** 是否开启云自动化助手。取值范围：TRUE：表示开启云自动化助手服务FALSE：表示不开启云自动化助手服务默认取值：FALSE。 */
  Enabled?: boolean;
}

/** 不同角色的节点配置参数 */
declare interface RunInstancesForNode {
  /** 节点角色，取值:MASTER_ETCD, WORKER。MASTER_ETCD只有在创建 INDEPENDENT_CLUSTER 独立集群时需要指定。MASTER_ETCD节点数量为3～7，建议为奇数。MASTER_ETCD节点最小配置为4C8G。 */
  NodeRole: string;
  /** CVM创建透传参数，json化字符串格式，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口，传入公共参数外的其他参数即可，其中ImageId会替换为TKE集群OS对应的镜像。 */
  RunInstancesPara: string[];
  /** 节点高级设置，该参数会覆盖集群级别设置的InstanceAdvancedSettings，和上边的RunInstancesPara按照顺序一一对应（当前只对节点自定义参数ExtraArgs生效）。 */
  InstanceAdvancedSettingsOverrides?: InstanceAdvancedSettings[];
}

/** 描述了 “云监控” 服务相关的信息 */
declare interface RunMonitorServiceEnabled {
  /** 是否开启[云监控](/document/product/248)服务。取值范围：TRUE：表示开启云监控服务FALSE：表示不开启云监控服务默认取值：TRUE。 */
  Enabled?: boolean;
}

/** 描述了 “云安全” 服务相关的信息 */
declare interface RunSecurityServiceEnabled {
  /** 是否开启[云安全](/document/product/296)服务。取值范围：TRUE：表示开启云安全服务FALSE：表示不开启云安全服务默认取值：TRUE。 */
  Enabled?: boolean;
}

/** master节点缩容参数 */
declare interface ScaleInMaster {
  /** 实例ID */
  InstanceId: string;
  /** 缩容的实例角色：MASTER,ETCD,MASTER_ETCD */
  NodeRole: string;
  /** 实例的保留模式 */
  InstanceDeleteMode: string;
}

/** cloudrun安全特性 */
declare interface SecurityContext {
  /** 安全能力清单 */
  Capabilities?: Capabilities | null;
}

/** ServiceAccount认证相关配置 */
declare interface ServiceAccountAuthenticationOptions {
  /** 使用TKE默认issuer和jwksuri */
  UseTKEDefault?: boolean | null;
  /** service-account-issuer */
  Issuer?: string | null;
  /** service-account-jwks-uri */
  JWKSURI?: string | null;
  /** 如果为true，则会自动创建允许匿名用户访问'/.well-known/openid-configuration'和/openid/v1/jwks的rbac规则 */
  AutoCreateDiscoveryAnonymousAuth?: boolean | null;
}

/** 子网信息 */
declare interface SubnetInfos {
  /** 子网id */
  SubnetId: string;
  /** 子网节点名称 */
  Name: string;
  /** 安全组id */
  SecurityGroups?: string[];
  /** 系统 */
  Os?: string;
  /** 硬件架构 */
  Arch?: string;
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
  /** 标签绑定的资源类型，当前支持类型："cluster" */
  ResourceType?: string | null;
  /** 标签对列表 */
  Tags?: Tag[] | null;
}

/** kubernetes Taint */
declare interface Taint {
  /** Key */
  Key?: string;
  /** Value */
  Value?: string;
  /** Effect */
  Effect?: string;
}

/** 任务步骤信息 */
declare interface TaskStepInfo {
  /** 步骤名称 */
  Step: string;
  /** 生命周期pending : 步骤未开始running: 步骤执行中success: 步骤成功完成failed: 步骤失败 */
  LifeState: string;
  /** 步骤开始时间 */
  StartAt: string | null;
  /** 步骤结束时间 */
  EndAt: string | null;
  /** 若步骤生命周期为failed,则此字段显示错误信息 */
  FailedMsg: string | null;
}

/** 探针使用TcpSocket检测容器 */
declare interface TcpSocket {
  /** TcpSocket检测的端口 */
  Port?: number | null;
}

/** kubernetes Taint */
declare interface Toleration {
  /** 容忍应用到的 taint key */
  Key?: string;
  /** 键与值的关系 */
  Operator?: string;
  /** 要匹配的污点效果 */
  Effect?: string;
}

/** 不可用原因 */
declare interface UnavailableReason {
  /** 实例ID */
  InstanceId: string | null;
  /** 原因 */
  Reason: string | null;
}

/** 可升级节点信息 */
declare interface UpgradeAbleInstancesItem {
  /** 节点Id */
  InstanceId: string;
  /** 节点的当前版本 */
  Version: string;
  /** 当前版本的最新小版本 */
  LatestVersion: string | null;
  /** RuntimeVersion */
  RuntimeVersion?: string;
  /** RuntimeLatestVersion */
  RuntimeLatestVersion?: string;
}

/** 节点升级重装参数 */
declare interface UpgradeNodeResetParam {
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
declare interface VersionInstance {
  /** 版本名称 */
  Name: string | null;
  /** 版本信息 */
  Version: string | null;
  /** Remark */
  Remark: string | null;
}

/** 虚拟节点 */
declare interface VirtualNode {
  /** 虚拟节点名称 */
  Name: string;
  /** 虚拟节点所属子网 */
  SubnetId: string;
  /** 虚拟节点状态 */
  Phase: string;
  /** 创建时间 */
  CreatedTime: string | null;
}

/** 虚拟节点池 */
declare interface VirtualNodePool {
  /** 节点池ID */
  NodePoolId: string;
  /** 子网列表 */
  SubnetIds: string[] | null;
  /** 节点池名称 */
  Name: string;
  /** 节点池生命周期 */
  LifeState: string;
  /** 虚拟节点label */
  Labels: Label[] | null;
  /** 虚拟节点taint */
  Taints: Taint[] | null;
}

/** 虚拟节点 */
declare interface VirtualNodeSpec {
  /** 节点展示名称 */
  DisplayName: string;
  /** 子网ID */
  SubnetId: string;
  /** 腾讯云标签 */
  Tags?: Tag[] | null;
}

/** 数据卷挂载路径信息 */
declare interface VolumeMount {
  /** volume名称 */
  Name: string | null;
  /** 挂载路径 */
  MountPath: string | null;
  /** 是否只读 */
  ReadOnly?: boolean | null;
  /** 子路径 */
  SubPath?: string | null;
  /** 传播挂载方式 */
  MountPropagation?: string | null;
  /** 子路径表达式 */
  SubPathExpr?: string | null;
}

declare interface AcquireClusterAdminRoleRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface AcquireClusterAdminRoleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddClusterCIDRRequest {
  /** 集群ID */
  ClusterId: string;
  /** 增加的ClusterCIDR */
  ClusterCIDRs: string[];
  /** 是否忽略ClusterCIDR与VPC路由表的冲突 */
  IgnoreClusterCIDRConflict?: boolean;
}

declare interface AddClusterCIDRResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddExistedInstancesRequest {
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
  /** 参数InstanceAdvancedSettingsOverride数组用于定制化地配置各台instance，与InstanceIds顺序对应。当传入InstanceAdvancedSettingsOverrides数组时，将覆盖默认参数InstanceAdvancedSettings；当没有传入参数InstanceAdvancedSettingsOverrides时，InstanceAdvancedSettings参数对每台instance生效。参数InstanceAdvancedSettingsOverride数组的长度应与InstanceIds数组一致；当长度大于InstanceIds数组长度时将报错；当长度小于InstanceIds数组时，没有对应配置的instace将使用默认配置。 */
  InstanceAdvancedSettingsOverrides?: InstanceAdvancedSettings[];
  /** 节点镜像 */
  ImageId?: string;
}

declare interface AddExistedInstancesResponse {
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

declare interface AddNodeToNodePoolRequest {
  /** 集群id */
  ClusterId: string;
  /** 节点池id */
  NodePoolId: string;
  /** 节点id */
  InstanceIds: string[];
}

declare interface AddNodeToNodePoolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddVpcCniSubnetsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 为集群容器网络增加的子网列表 */
  SubnetIds: string[];
  /** 集群所属的VPC的ID */
  VpcId: string;
  /** 是否同步添加 vpc 网段到 ip-masq-agent-config 的 NonMasqueradeCIDRs 字段，默认 false 会同步添加 */
  SkipAddingNonMasqueradeCIDRs?: boolean;
}

declare interface AddVpcCniSubnetsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelClusterReleaseRequest {
  /** 应用ID */
  ID: string;
  /** 集群ID */
  ClusterId?: string;
  /** 集群类型 */
  ClusterType?: string;
}

declare interface CancelClusterReleaseResponse {
  /** 应用信息 */
  Release: PendingRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckEdgeClusterCIDRRequest {
  /** 集群的vpc-id */
  VpcId: string;
  /** 集群的pod CIDR */
  PodCIDR: string;
  /** 集群的service CIDR */
  ServiceCIDR: string;
}

declare interface CheckEdgeClusterCIDRResponse {
  /** 返回码，具体如下-1 内部错误0 没冲突1 vpc 和 serviceCIDR 冲突2 vpc 和 podCIDR 冲突3 serviceCIDR 和 podCIDR 冲突 */
  ConflictCode: number;
  /** CIDR冲突描述信息。 */
  ConflictMsg: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckInstancesUpgradeAbleRequest {
  /** 集群ID */
  ClusterId: string;
  /** 节点列表，空为全部节点 */
  InstanceIds?: string[];
  /** 升级类型 */
  UpgradeType?: string;
  /** 分页Offset */
  Offset?: number;
  /** 分页Limit */
  Limit?: number;
  /** 过滤 */
  Filter?: Filter[];
}

declare interface CheckInstancesUpgradeAbleResponse {
  /** 集群master当前小版本 */
  ClusterVersion?: string;
  /** 集群master对应的大版本目前最新小版本 */
  LatestVersion?: string;
  /** 可升级节点列表 */
  UpgradeAbleInstances?: UpgradeAbleInstancesItem[] | null;
  /** 总数 */
  Total?: number | null;
  /** 不可升级原因 */
  UnavailableVersionReason?: UnavailableReason[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBackupStorageLocationRequest {
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

declare interface CreateBackupStorageLocationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterEndpointRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群端口所在的子网ID (仅在开启非外网访问时需要填，必须为集群所在VPC内的子网) */
  SubnetId?: string;
  /** 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE） */
  IsExtranet?: boolean;
  /** 设置域名 */
  Domain?: string;
  /** 使用的安全组，只有外网访问需要传递（开启外网访问时必传） */
  SecurityGroup?: string;
  /** 创建lb参数，只有外网访问需要设置，是一个json格式化后的字符串：{"InternetAccessible":{"InternetChargeType":"TRAFFIC_POSTPAID_BY_HOUR","InternetMaxBandwidthOut":"200"},"VipIsp":"","BandwidthPackageId":""}。各个参数意义：InternetAccessible.InternetChargeType含义：TRAFFIC_POSTPAID_BY_HOUR按流量按小时后计费;BANDWIDTH_POSTPAID_BY_HOUR 按带宽按小时后计费;InternetAccessible.BANDWIDTH_PACKAGE 按带宽包计费。InternetMaxBandwidthOut含义：最大出带宽，单位Mbps，范围支持0到2048，默认值10。VipIsp含义：CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通，如果不指定本参数，则默认使用BGP。可通过 DescribeSingleIsp 接口查询一个地域所支持的Isp。如果指定运营商，则网络计费式只能使用按带宽包计费(BANDWIDTH_PACKAGE)。BandwidthPackageId含义：带宽包ID，指定此参数时，网络计费方式（InternetAccessible.InternetChargeType）只支持按带宽包计费（BANDWIDTH_PACKAGE。 */
  ExtensiveParameters?: string;
}

declare interface CreateClusterEndpointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterEndpointVipRequest {
  /** 集群ID */
  ClusterId: string;
  /** 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有) */
  SecurityPolicies?: string[];
}

declare interface CreateClusterEndpointVipResponse {
  /** 请求任务的FlowId */
  RequestFlowId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterInstancesRequest {
  /** 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段 */
  ClusterId: string;
  /** CVM创建透传参数，json化字符串格式，如需要保证扩展集群节点请求幂等性需要在此参数添加ClientToken字段，详见[CVM创建实例](https://cloud.tencent.com/document/product/213/15730)接口。 */
  RunInstancePara: string;
  /** 实例额外需要设置参数信息 */
  InstanceAdvancedSettings?: InstanceAdvancedSettings;
  /** 校验规则相关选项，可配置跳过某些校验规则。目前支持GlobalRouteCIDRCheck（跳过GlobalRouter的相关校验），VpcCniCIDRCheck（跳过VpcCni相关校验） */
  SkipValidateOptions?: string[];
}

declare interface CreateClusterInstancesResponse {
  /** 节点实例ID */
  InstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterNodePoolRequest {
  /** cluster id */
  ClusterId: string;
  /** AutoScalingGroupPara AS组参数，参考 https://cloud.tencent.com/document/product/377/20440 */
  AutoScalingGroupPara: string;
  /** LaunchConfigurePara 运行参数，参考 https://cloud.tencent.com/document/product/377/20447 */
  LaunchConfigurePara: string;
  /** InstanceAdvancedSettings 示例参数 */
  InstanceAdvancedSettings: InstanceAdvancedSettings;
  /** 是否启用自动伸缩 */
  EnableAutoscale: boolean;
  /** 节点池名称 */
  Name?: string;
  /** Labels标签 */
  Labels?: Label[];
  /** Taints互斥 */
  Taints?: Taint[];
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

declare interface CreateClusterNodePoolResponse {
  /** 节点池id */
  NodePoolId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterReleaseRequest {
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
  /** 制品来源，范围：tke-market 或 other */
  ChartFrom?: string;
  /** 制品版本 */
  ChartVersion?: string;
  /** 制品仓库URL地址 */
  ChartRepoURL?: string;
  /** 制品访问用户名 */
  Username?: string;
  /** 制品访问密码 */
  Password?: string;
  /** 制品命名空间 */
  ChartNamespace?: string;
  /** 集群类型，支持传 tke, eks, tkeedge, exernal(注册集群） */
  ClusterType?: string;
}

declare interface CreateClusterReleaseResponse {
  /** 应用详情 */
  Release?: PendingRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterRequest {
  /** 集群容器网络配置信息 */
  ClusterCIDRSettings: ClusterCIDRSettings;
  /** 集群类型，托管集群：MANAGED_CLUSTER，独立集群：INDEPENDENT_CLUSTER。 */
  ClusterType: string;
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
}

declare interface CreateClusterResponse {
  /** 集群ID */
  ClusterId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterRouteRequest {
  /** 路由表名称。 */
  RouteTableName: string;
  /** 目的端CIDR。 */
  DestinationCidrBlock: string;
  /** 下一跳地址。 */
  GatewayIp: string;
}

declare interface CreateClusterRouteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterRouteTableRequest {
  /** 路由表名称 */
  RouteTableName: string;
  /** 路由表CIDR */
  RouteTableCidrBlock: string;
  /** 路由表绑定的VPC */
  VpcId: string;
  /** 是否忽略CIDR冲突 */
  IgnoreClusterCidrConflict?: number;
}

declare interface CreateClusterRouteTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterVirtualNodePoolRequest {
  /** 集群Id */
  ClusterId: string;
  /** 节点池名称 */
  Name: string;
  /** 子网ID列表 */
  SubnetIds?: string[];
  /** 安全组ID列表 */
  SecurityGroupIds?: string[];
  /** 虚拟节点label */
  Labels?: Label[];
  /** 虚拟节点taint */
  Taints?: Taint[];
  /** 节点列表 */
  VirtualNodes?: VirtualNodeSpec[];
  /** 删除保护开关 */
  DeletionProtection?: boolean;
  /** 节点池操作系统：- linux（默认）- windows */
  OS?: string;
}

declare interface CreateClusterVirtualNodePoolResponse {
  /** 节点池ID */
  NodePoolId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateClusterVirtualNodeRequest {
  /** 集群ID */
  ClusterId: string;
  /** 虚拟节点所属节点池 */
  NodePoolId: string;
  /** 虚拟节点所属子网 */
  SubnetId?: string;
  /** 虚拟节点子网ID列表，和参数SubnetId互斥 */
  SubnetIds?: string[];
  /** 虚拟节点列表 */
  VirtualNodes?: VirtualNodeSpec[];
}

declare interface CreateClusterVirtualNodeResponse {
  /** 虚拟节点名称 */
  NodeName: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateECMInstancesRequest {
  /** 集群id */
  ClusterID: string;
  /** 模块id */
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

declare interface CreateECMInstancesResponse {
  /** ecm id 列表 */
  EcmIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEKSClusterRequest {
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

declare interface CreateEKSClusterResponse {
  /** 弹性集群Id */
  ClusterId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEKSContainerInstancesRequest {
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

declare interface CreateEKSContainerInstancesResponse {
  /** EKS Container Instance Id集合，格式为eksci-xxx，是容器实例的唯一标识。 */
  EksCiIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEdgeCVMInstancesRequest {
  /** 集群id */
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

declare interface CreateEdgeCVMInstancesResponse {
  /** cvm id 列表 */
  CvmIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateEdgeLogConfigRequest {
  /** 集群ID */
  ClusterId: string;
  /** 日志采集配置的json表达 */
  LogConfig: string;
  /** CLS日志集ID */
  LogsetId?: string;
}

declare interface CreateEdgeLogConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateImageCacheRequest {
  /** 用于制作镜像缓存的容器镜像列表 */
  Images: string[];
  /** 实例所属子网Id */
  SubnetId: string;
  /** 实例所属VPC Id */
  VpcId: string;
  /** 镜像缓存名称 */
  ImageCacheName?: string;
  /** 安全组Id */
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
}

declare interface CreateImageCacheResponse {
  /** 镜像缓存Id */
  ImageCacheId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusAlertPolicyRequest {
  /** 实例id */
  InstanceId: string;
  /** 告警配置 */
  AlertRule: PrometheusAlertPolicyItem;
}

declare interface CreatePrometheusAlertPolicyResponse {
  /** 告警id */
  Id: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusAlertRuleRequest {
  /** 实例id */
  InstanceId: string;
  /** 告警配置 */
  AlertRule: PrometheusAlertRuleDetail;
}

declare interface CreatePrometheusAlertRuleResponse {
  /** 告警id */
  Id?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusClusterAgentRequest {
  /** 实例ID */
  InstanceId: string;
  /** agent列表 */
  Agents: PrometheusClusterAgentBasic[];
}

declare interface CreatePrometheusClusterAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusConfigRequest {
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
}

declare interface CreatePrometheusConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusDashboardRequest {
  /** 实例id */
  InstanceId: string;
  /** 面板组名称 */
  DashboardName: string;
  /** 面板列表每一项是一个grafana dashboard的json定义 */
  Contents: string[];
}

declare interface CreatePrometheusDashboardResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusGlobalNotificationRequest {
  /** 实例ID */
  InstanceId: string;
  /** 告警通知渠道 */
  Notification: PrometheusNotificationItem;
}

declare interface CreatePrometheusGlobalNotificationResponse {
  /** 全局告警通知渠道ID */
  Id: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusRecordRuleYamlRequest {
  /** 实例id */
  InstanceId: string;
  /** yaml的内容 */
  Content: string;
}

declare interface CreatePrometheusRecordRuleYamlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusTempRequest {
  /** 模板设置 */
  Template: PrometheusTemp;
}

declare interface CreatePrometheusTempResponse {
  /** 模板Id */
  TemplateId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrometheusTemplateRequest {
  /** 模板设置 */
  Template: PrometheusTemplate;
}

declare interface CreatePrometheusTemplateResponse {
  /** 模板Id */
  TemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTKEEdgeClusterRequest {
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

declare interface CreateTKEEdgeClusterResponse {
  /** 边缘计算集群Id */
  ClusterId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAddonRequest {
  /** 集群ID */
  ClusterId: string;
  /** addon名称 */
  AddonName: string;
}

declare interface DeleteAddonResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBackupStorageLocationRequest {
  /** 备份仓库名称 */
  Name: string;
}

declare interface DeleteBackupStorageLocationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterAsGroupsRequest {
  /** 集群ID，通过[DescribeClusters](https://cloud.tencent.com/document/api/457/31862)接口获取。 */
  ClusterId: string;
  /** 集群伸缩组ID的列表 */
  AutoScalingGroupIds: string[];
  /** 是否保留伸缩组中的节点(默认值： false(不保留)) */
  KeepInstance?: boolean;
}

declare interface DeleteClusterAsGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterEndpointRequest {
  /** 集群ID */
  ClusterId: string;
  /** 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE） */
  IsExtranet?: boolean;
}

declare interface DeleteClusterEndpointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterEndpointVipRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DeleteClusterEndpointVipResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 主机InstanceId列表 */
  InstanceIds: string[];
  /** 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例） */
  InstanceDeleteMode?: string;
  /** 是否强制删除(当节点在初始化时，可以指定参数为TRUE) */
  ForceDelete?: boolean;
}

declare interface DeleteClusterInstancesResponse {
  /** 删除成功的实例ID列表 */
  SuccInstanceIds?: string[] | null;
  /** 删除失败的实例ID列表 */
  FailedInstanceIds?: string[] | null;
  /** 未匹配到的实例ID列表 */
  NotFoundInstanceIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterNodePoolRequest {
  /** 节点池对应的 ClusterId */
  ClusterId: string;
  /** 需要删除的节点池 Id 列表 */
  NodePoolIds: string[];
  /** 删除节点池时是否保留节点池内节点(节点仍然会被移出集群，但对应的实例不会被销毁) */
  KeepInstance: boolean;
}

declare interface DeleteClusterNodePoolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群实例删除时的策略：terminate（销毁实例，仅支持按量计费云主机实例） retain （仅移除，保留实例） */
  InstanceDeleteMode: string;
  /** 集群删除时资源的删除策略，目前支持CBS（默认保留CBS） */
  ResourceDeleteOptions?: ResourceDeleteOption[];
}

declare interface DeleteClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterRouteRequest {
  /** 路由表名称。 */
  RouteTableName: string;
  /** 下一跳地址。 */
  GatewayIp: string;
  /** 目的端CIDR。 */
  DestinationCidrBlock: string;
}

declare interface DeleteClusterRouteResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterRouteTableRequest {
  /** 路由表名称 */
  RouteTableName: string;
}

declare interface DeleteClusterRouteTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterVirtualNodePoolRequest {
  /** 集群ID */
  ClusterId: string;
  /** 虚拟节点池ID列表 */
  NodePoolIds: string[];
  /** 是否强制删除，在虚拟节点上有pod的情况下，如果选择非强制删除，则删除会失败 */
  Force?: boolean;
}

declare interface DeleteClusterVirtualNodePoolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteClusterVirtualNodeRequest {
  /** 集群ID */
  ClusterId: string;
  /** 虚拟节点列表 */
  NodeNames: string[];
  /** 是否强制删除：如果虚拟节点上有运行中Pod，则非强制删除状态下不会进行删除 */
  Force?: boolean;
}

declare interface DeleteClusterVirtualNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteECMInstancesRequest {
  /** 集群ID */
  ClusterID: string;
  /** ecm id集合 */
  EcmIdSet: string[];
}

declare interface DeleteECMInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEKSClusterRequest {
  /** 弹性集群Id */
  ClusterId: string;
}

declare interface DeleteEKSClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEKSContainerInstancesRequest {
  /** 需要删除的EksCi的Id。 最大数量不超过20 */
  EksCiIds: string[];
  /** 是否释放为EksCi自动创建的Eip */
  ReleaseAutoCreatedEip?: boolean;
}

declare interface DeleteEKSContainerInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEdgeCVMInstancesRequest {
  /** 集群ID */
  ClusterID: string;
  /** cvm id集合 */
  CvmIdSet: string[];
}

declare interface DeleteEdgeCVMInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteEdgeClusterInstancesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 待删除实例ID数组 */
  InstanceIds: string[];
}

declare interface DeleteEdgeClusterInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImageCachesRequest {
  /** 镜像缓存Id数组 */
  ImageCacheIds: string[];
}

declare interface DeleteImageCachesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusAlertPolicyRequest {
  /** 实例id */
  InstanceId: string;
  /** 告警策略id列表 */
  AlertIds: string[];
  /** 告警策略名称 */
  Names?: string[];
}

declare interface DeletePrometheusAlertPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusAlertRuleRequest {
  /** 实例id */
  InstanceId: string;
  /** 告警规则id列表 */
  AlertIds: string[];
}

declare interface DeletePrometheusAlertRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusClusterAgentRequest {
  /** agent列表 */
  Agents: PrometheusAgentInfo[];
  /** 实例id */
  InstanceId: string;
}

declare interface DeletePrometheusClusterAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusConfigRequest {
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
}

declare interface DeletePrometheusConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusRecordRuleYamlRequest {
  /** 实例id */
  InstanceId: string;
  /** 聚合规则列表 */
  Names: string[];
}

declare interface DeletePrometheusRecordRuleYamlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusTempRequest {
  /** 模板id */
  TemplateId: string;
}

declare interface DeletePrometheusTempResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusTempSyncRequest {
  /** 模板id */
  TemplateId: string;
  /** 取消同步的对象列表 */
  Targets: PrometheusTemplateSyncTarget[];
}

declare interface DeletePrometheusTempSyncResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusTemplateRequest {
  /** 模板id */
  TemplateId: string;
}

declare interface DeletePrometheusTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrometheusTemplateSyncRequest {
  /** 模板id */
  TemplateId: string;
  /** 取消同步的对象列表 */
  Targets: PrometheusTemplateSyncTarget[];
}

declare interface DeletePrometheusTemplateSyncResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTKEEdgeClusterRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DeleteTKEEdgeClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddonRequest {
  /** 集群ID */
  ClusterId: string;
  /** addon名称（不传时会返回集群下全部的addon） */
  AddonName?: string;
}

declare interface DescribeAddonResponse {
  /** addon列表 */
  Addons?: Addon[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddonValuesRequest {
  /** 集群ID */
  ClusterId: string;
  /** addon名称 */
  AddonName: string;
}

declare interface DescribeAddonValuesResponse {
  /** 参数列表，如果addon已安装，会使用已设置的的参数做渲染，是一个json格式的字符串 */
  Values?: string;
  /** addon支持的参数列表，使用默认值，是一个json格式的字符串 */
  DefaultValues?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAvailableClusterVersionRequest {
  /** 集群 Id */
  ClusterId?: string;
  /** 集群 Id 列表 */
  ClusterIds?: string[];
}

declare interface DescribeAvailableClusterVersionResponse {
  /** 可升级的集群版本号 */
  Versions?: string[] | null;
  /** 集群信息 */
  Clusters?: ClusterVersion[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAvailableTKEEdgeVersionRequest {
  /** 填写ClusterId获取当前集群各个组件版本和最新版本 */
  ClusterId?: string;
}

declare interface DescribeAvailableTKEEdgeVersionResponse {
  /** 版本列表 */
  Versions: string[];
  /** 边缘集群最新版本 */
  EdgeVersionLatest: string | null;
  /** 边缘集群当前版本 */
  EdgeVersionCurrent: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBackupStorageLocationsRequest {
  /** 多个备份仓库名称，如果不填写，默认返回当前地域所有存储仓库名称 */
  Names?: string[];
}

declare interface DescribeBackupStorageLocationsResponse {
  /** 详细备份仓库信息 */
  BackupStorageLocationSet?: BackupStorageLocation[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterAsGroupOptionRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterAsGroupOptionResponse {
  /** 集群弹性伸缩属性 */
  ClusterAsGroupOption?: ClusterAsGroupOption | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterAsGroupsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 伸缩组ID列表，如果为空，表示拉取集群关联的所有伸缩组。 */
  AutoScalingGroupIds?: string[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeClusterAsGroupsResponse {
  /** 集群关联的伸缩组总数 */
  TotalCount: number;
  /** 集群关联的伸缩组列表 */
  ClusterAsGroupSet: ClusterAsGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterAuthenticationOptionsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterAuthenticationOptionsResponse {
  /** ServiceAccount认证配置 */
  ServiceAccounts?: ServiceAccountAuthenticationOptions | null;
  /** 最近一次修改操作结果，返回值可能为：Updating，Success，Failed，TimeOut */
  LatestOperationState?: string | null;
  /** OIDC认证配置 */
  OIDCConfig?: OIDCConfigAuthenticationOptions | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterCommonNamesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 子账户列表，不可超出最大值50 */
  SubaccountUins?: string[];
  /** 角色ID列表，不可超出最大值50 */
  RoleIds?: string[];
}

declare interface DescribeClusterCommonNamesResponse {
  /** 子账户Uin与其客户端证书的CN字段映射 */
  CommonNames: CommonName[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterControllersRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterControllersResponse {
  /** 描述集群中各个控制器的状态 */
  ControllerStatusSet?: ControllerStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterEndpointStatusRequest {
  /** 集群ID */
  ClusterId: string;
  /** 是否为外网访问（TRUE 外网访问 FALSE 内网访问，默认值： FALSE） */
  IsExtranet?: boolean;
}

declare interface DescribeClusterEndpointStatusResponse {
  /** 查询集群访问端口状态（Created 开启成功，Creating 开启中，NotFound 未开启） */
  Status?: string | null;
  /** 开启访问入口失败信息 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterEndpointVipStatusRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterEndpointVipStatusResponse {
  /** 端口操作状态 (Creating 创建中 CreateFailed 创建失败 Created 创建完成 Deleting 删除中 DeletedFailed 删除失败 Deleted 已删除 NotFound 未发现操作 ) */
  Status?: string;
  /** 操作失败的原因 */
  ErrorMsg?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterEndpointsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterEndpointsResponse {
  /** 集群APIServer的CA证书 */
  CertificationAuthority?: string;
  /** 集群APIServer的外网访问地址 */
  ClusterExternalEndpoint?: string;
  /** 集群APIServer的内网访问地址 */
  ClusterIntranetEndpoint?: string;
  /** 集群APIServer的域名 */
  ClusterDomain?: string | null;
  /** 集群APIServer的外网访问ACL列表 */
  ClusterExternalACL?: string[] | null;
  /** 外网域名 */
  ClusterExternalDomain?: string | null;
  /** 内网域名 */
  ClusterIntranetDomain?: string | null;
  /** 外网安全组 */
  SecurityGroup?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterInspectionResultsOverviewRequest {
  /** Array of String	目标集群列表，为空查询用户所有集群 */
  ClusterIds?: string[];
  /** 聚合字段信息，概览结果按照 GroupBy 信息聚合后返回，可选参数：catalogue.first：按一级分类聚合catalogue.second：按二级分类聚合 */
  GroupBy?: string[];
}

declare interface DescribeClusterInspectionResultsOverviewResponse {
  /** 诊断结果统计 */
  Statistics?: KubeJarvisStateStatistic[] | null;
  /** 诊断结果概览 */
  Diagnostics?: KubeJarvisStateDiagnosticOverview[] | null;
  /** 集群诊断结果概览 */
  InspectionOverview?: KubeJarvisStateInspectionOverview[] | null;
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
  /** 需要获取的节点实例Id列表。如果为空，表示拉取集群下所有节点实例。 */
  InstanceIds?: string[];
  /** 节点角色, MASTER, WORKER, ETCD, MASTER_ETCD,ALL, 默认为WORKER。默认为WORKER类型。 */
  InstanceRole?: string;
  /** 过滤条件列表；Name的可选值为nodepool-id、nodepool-instance-type；Name为nodepool-id表示根据节点池id过滤机器，Value的值为具体的节点池id，Name为nodepool-instance-type表示节点加入节点池的方式，Value的值为MANUALLY_ADDED（手动加入节点池）、AUTOSCALING_ADDED（伸缩组扩容方式加入节点池）、ALL（手动加入节点池 和 伸缩组扩容方式加入节点池） */
  Filters?: Filter[];
}

declare interface DescribeClusterInstancesResponse {
  /** 集群中实例总数 */
  TotalCount?: number;
  /** 集群中实例列表 */
  InstanceSet?: Instance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterKubeconfigRequest {
  /** 集群ID */
  ClusterId: string;
  /** 默认false 获取内网，是否获取外网访问的kubeconfig */
  IsExtranet?: boolean;
}

declare interface DescribeClusterKubeconfigResponse {
  /** 子账户kubeconfig文件，可用于直接访问集群kube-apiserver */
  Kubeconfig?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterLevelAttributeRequest {
  /** 集群ID，变配时使用 */
  ClusterID?: string;
}

declare interface DescribeClusterLevelAttributeResponse {
  /** 总数 */
  TotalCount: number;
  /** 集群规模 */
  Items: ClusterLevelAttribute[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterLevelChangeRecordsRequest {
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

declare interface DescribeClusterLevelChangeRecordsResponse {
  /** 总数 */
  TotalCount?: number;
  /** 集群规模 */
  Items?: ClusterLevelChangeRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterNodePoolDetailRequest {
  /** 集群id */
  ClusterId: string;
  /** 节点池id */
  NodePoolId: string;
}

declare interface DescribeClusterNodePoolDetailResponse {
  /** 节点池详情 */
  NodePool?: NodePool;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterNodePoolsRequest {
  /** ClusterId（集群id） */
  ClusterId: string;
  /** · NodePoolsName 按照【节点池名】进行过滤。 类型：String 必选：否· NodePoolsId 按照【节点池id】进行过滤。 类型：String 必选：否· tags 按照【标签键值对】进行过滤。 类型：String 必选：否· tag:tag-key 按照【标签键值对】进行过滤。 类型：String 必选：否 */
  Filters?: Filter[];
}

declare interface DescribeClusterNodePoolsResponse {
  /** NodePools（节点池列表） */
  NodePoolSet: NodePool[] | null;
  /** 资源总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterPendingReleasesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 返回数量限制，默认20，最大100 */
  Limit?: number;
  /** 偏移量，默认0 */
  Offset?: number;
  /** 集群类型 */
  ClusterType?: string;
}

declare interface DescribeClusterPendingReleasesResponse {
  /** 正在安装中应用列表 */
  ReleaseSet: PendingRelease[] | null;
  /** 每页返回数量限制 */
  Limit: number | null;
  /** 页偏移量 */
  Offset: number | null;
  /** 总数量 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterReleaseDetailsRequest {
  /** 集群ID */
  ClusterId: string;
  /** 应用名称 */
  Name: string;
  /** 应用所在命名空间 */
  Namespace: string;
  /** 集群类型 */
  ClusterType?: string;
}

declare interface DescribeClusterReleaseDetailsResponse {
  /** 应用详情 */
  Release?: ReleaseDetails | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterReleaseHistoryRequest {
  /** 集群ID */
  ClusterId: string;
  /** 应用名称 */
  Name: string;
  /** 应用所在命名空间 */
  Namespace: string;
  /** 集群类型 */
  ClusterType?: string;
}

declare interface DescribeClusterReleaseHistoryResponse {
  /** 已安装应用版本历史 */
  ReleaseHistorySet: ReleaseHistory[] | null;
  /** 总数量 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterReleasesRequest {
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

declare interface DescribeClusterReleasesResponse {
  /** 数量限制 */
  Limit?: number | null;
  /** 偏移量 */
  Offset?: number | null;
  /** 已安装应用列表 */
  ReleaseSet?: Release[] | null;
  /** 已安装应用总数量 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterRouteTablesRequest {
}

declare interface DescribeClusterRouteTablesResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 集群路由表对象。 */
  RouteTableSet?: RouteTableInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterRoutesRequest {
  /** 路由表名称。 */
  RouteTableName: string;
  /** 过滤条件,当前只支持按照单个条件GatewayIP进行过滤（可选） */
  Filters?: Filter[];
}

declare interface DescribeClusterRoutesResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 集群路由对象。 */
  RouteSet?: RouteInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterSecurityRequest {
  /** 集群 ID，请填写 查询集群列表 接口中返回的 clusterId 字段 */
  ClusterId: string;
}

declare interface DescribeClusterSecurityResponse {
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
  Kubeconfig?: string | null;
  /** 集群JnsGw的访问地址 */
  JnsGwEndpoint?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterStatusRequest {
  /** 集群ID列表，不传默认拉取所有集群 */
  ClusterIds?: string[];
}

declare interface DescribeClusterStatusResponse {
  /** 集群状态列表 */
  ClusterStatusSet: ClusterStatus[];
  /** 集群个数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterVirtualNodePoolsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeClusterVirtualNodePoolsResponse {
  /** 节点池总数 */
  TotalCount: number | null;
  /** 虚拟节点池列表 */
  NodePoolSet: VirtualNodePool[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClusterVirtualNodeRequest {
  /** 集群ID */
  ClusterId: string;
  /** 节点池ID */
  NodePoolId?: string;
  /** 节点名称 */
  NodeNames?: string[];
}

declare interface DescribeClusterVirtualNodeResponse {
  /** 节点列表 */
  Nodes?: VirtualNode[] | null;
  /** 节点总数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClustersRequest {
  /** 集群ID列表(为空时，表示获取账号下所有集群) */
  ClusterIds?: string[];
  /** 偏移量,默认0 */
  Offset?: number;
  /** 最大输出条数，默认20，最大为100 */
  Limit?: number;
  /** · ClusterName 按照【集群名】进行过滤。 类型：String 必选：否· ClusterType 按照【集群类型】进行过滤。 类型：String 必选：否· ClusterStatus 按照【集群状态】进行过滤。 类型：String 必选：否· Tags 按照【标签键值对】进行过滤。 类型：String 必选：否· vpc-id 按照【VPC】进行过滤。 类型：String 必选：否· tag-key 按照【标签键】进行过滤。 类型：String 必选：否· tag-value 按照【标签值】进行过滤。 类型：String 必选：否· tag:tag-key 按照【标签键值对】进行过滤。 类型：String 必选：否 */
  Filters?: Filter[];
  /** 集群类型，例如：MANAGED_CLUSTER */
  ClusterType?: string;
}

declare interface DescribeClustersResponse {
  /** 集群总个数 */
  TotalCount: number;
  /** 集群信息列表 */
  Clusters: Cluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeECMInstancesRequest {
  /** 集群id */
  ClusterID: string;
  /** 过滤条件仅支持ecm-id过滤 */
  Filters?: Filter[];
}

declare interface DescribeECMInstancesResponse {
  /** 返回的实例相关信息列表的长度 */
  TotalCount?: number;
  /** 返回的实例相关信息列表 */
  InstanceInfoSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEKSClusterCredentialRequest {
  /** 集群Id */
  ClusterId: string;
}

declare interface DescribeEKSClusterCredentialResponse {
  /** 集群的接入地址信息 */
  Addresses: IPAddress[];
  /** 集群的认证信息（token只有请求是主账号才返回，子账户请使用返回的kubeconfig） */
  Credential: ClusterCredential;
  /** 集群的公网访问信息 */
  PublicLB: ClusterPublicLB;
  /** 集群的内网访问信息 */
  InternalLB: ClusterInternalLB;
  /** 标记是否新的内外网功能 */
  ProxyLB: boolean;
  /** 连接用户集群k8s 的Config */
  Kubeconfig: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEKSClustersRequest {
  /** 集群ID列表(为空时，表示获取账号下所有集群) */
  ClusterIds?: string[];
  /** 偏移量,默认0 */
  Offset?: number;
  /** 最大输出条数，默认20 */
  Limit?: number;
  /** 过滤条件,当前只支持按照单个条件ClusterName进行过滤 */
  Filters?: Filter[];
}

declare interface DescribeEKSClustersResponse {
  /** 集群总个数 */
  TotalCount?: number;
  /** 集群信息列表 */
  Clusters?: EksCluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEKSContainerInstanceEventRequest {
  /** 容器实例id */
  EksCiId: string;
  /** 最大事件数量。默认为50，最大取值100。 */
  Limit?: number;
}

declare interface DescribeEKSContainerInstanceEventResponse {
  /** 事件集合 */
  Events: Event[];
  /** 容器实例id */
  EksCiId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEKSContainerInstanceRegionsRequest {
}

declare interface DescribeEKSContainerInstanceRegionsResponse {
  /** EKS Container Instance支持的地域信息 */
  Regions: EksCiRegionInfo[] | null;
  /** 总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEKSContainerInstancesRequest {
  /** 限定此次返回资源的数量。如果不设定，默认返回20，最大不能超过100 */
  Limit?: number;
  /** 偏移量,默认0 */
  Offset?: number;
  /** 过滤条件，可条件：(1)实例名称KeyName: eks-ci-name类型：String(2)实例状态KeyName: status类型：String可选值："Pending", "Running", "Succeeded", "Failed"(3)内网ipKeyName: private-ip类型：String(4)EIP地址KeyName: eip-address类型：String(5)VpcIdKeyName: vpc-id类型：String */
  Filters?: Filter[];
  /** 容器实例 ID 数组 */
  EksCiIds?: string[];
}

declare interface DescribeEKSContainerInstancesResponse {
  /** 容器组总数 */
  TotalCount: number;
  /** 容器组列表 */
  EksCis: EksCi[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeAvailableExtraArgsRequest {
  /** 集群版本 */
  ClusterVersion?: string;
}

declare interface DescribeEdgeAvailableExtraArgsResponse {
  /** 集群版本 */
  ClusterVersion?: string | null;
  /** 可用的自定义参数 */
  AvailableExtraArgs?: EdgeAvailableExtraArgs | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeCVMInstancesRequest {
  /** 集群id */
  ClusterID: string;
  /** 过滤条件仅支持cvm-id过滤 */
  Filters?: Filter[];
}

declare interface DescribeEdgeCVMInstancesResponse {
  /** 返回的实例相关信息列表的长度 */
  TotalCount?: number;
  /** 返回的实例相关信息列表 */
  InstanceInfoSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeClusterExtraArgsRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeEdgeClusterExtraArgsResponse {
  /** 集群自定义参数 */
  ClusterExtraArgs: EdgeClusterExtraArgs | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeClusterInstancesRequest {
  /** 集群id */
  ClusterID: string;
  /** 查询总数 */
  Limit: number;
  /** 偏移量 */
  Offset: number;
  /** 过滤条件，仅支持NodeName过滤 */
  Filters?: Filter[];
}

declare interface DescribeEdgeClusterInstancesResponse {
  /** 该集群总数 */
  TotalCount?: number;
  /** 节点信息集合 */
  InstanceInfoSet?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeClusterUpgradeInfoRequest {
  /** 集群ID */
  ClusterId: string;
  /** 要升级到的TKEEdge版本 */
  EdgeVersion: string;
}

declare interface DescribeEdgeClusterUpgradeInfoResponse {
  /** 可升级的集群组件和 */
  ComponentVersion: string | null;
  /** 边缘集群当前版本 */
  EdgeVersionCurrent: string | null;
  /** 边缘组件镜像仓库地址前缀，包含域名和命名空间 */
  RegistryPrefix: string | null;
  /** 集群升级状态，可能值：running、updating、failed */
  ClusterUpgradeStatus: string | null;
  /** 集群升级中状态或者失败原因 */
  ClusterUpgradeStatusReason: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEdgeLogSwitchesRequest {
  /** 集群ID列表 */
  ClusterIds: string[];
}

declare interface DescribeEdgeLogSwitchesResponse {
  /** 集群日志开关集合 */
  SwitchSet?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEksContainerInstanceLogRequest {
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

declare interface DescribeEksContainerInstanceLogResponse {
  /** 容器名称 */
  ContainerName?: string;
  /** 日志内容 */
  LogContent?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEnableVpcCniProgressRequest {
  /** 开启vpc-cni的集群ID */
  ClusterId: string;
}

declare interface DescribeEnableVpcCniProgressResponse {
  /** 任务进度的描述：Running/Succeed/Failed */
  Status: string;
  /** 当任务进度为Failed时，对任务状态的进一步描述，例如IPAMD组件安装失败 */
  ErrorMessage: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeEncryptionStatusRequest {
}

declare interface DescribeEncryptionStatusResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExistedInstancesRequest {
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

declare interface DescribeExistedInstancesResponse {
  /** 已经存在的实例信息数组。 */
  ExistedInstanceSet: ExistedInstance[] | null;
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeExternalClusterSpecRequest {
  /** 注册集群ID */
  ClusterId: string;
  /** 默认false 获取内网，是否获取外网版注册命令 */
  IsExtranet?: boolean;
  /** 默认false 不刷新有效时间 ，true刷新有效时间 */
  IsRefreshExpirationTime?: boolean;
}

declare interface DescribeExternalClusterSpecResponse {
  /** 导入第三方集群YAML定义 */
  Spec: string;
  /** agent.yaml文件过期时间字符串，时区UTC */
  Expiration: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageCachesRequest {
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

declare interface DescribeImageCachesResponse {
  /** 镜像缓存总数 */
  TotalCount: number;
  /** 镜像缓存信息列表 */
  ImageCaches: ImageCache[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImagesRequest {
}

declare interface DescribeImagesResponse {
  /** 镜像数量 */
  TotalCount?: number | null;
  /** 镜像信息列表 */
  ImageInstanceSet?: ImageInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusAgentInstancesRequest {
  /** 集群id可以是tke, eks, edge的集群id */
  ClusterId: string;
}

declare interface DescribePrometheusAgentInstancesResponse {
  /** 关联该集群的实例列表 */
  Instances?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusAgentsRequest {
  /** 实例id */
  InstanceId: string;
  /** 用于分页 */
  Offset?: number;
  /** 用于分页 */
  Limit?: number;
}

declare interface DescribePrometheusAgentsResponse {
  /** 被关联集群信息 */
  Agents?: PrometheusAgentOverview[];
  /** 被关联集群总量 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusAlertHistoryRequest {
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

declare interface DescribePrometheusAlertHistoryResponse {
  /** 告警历史 */
  Items?: PrometheusAlertHistoryItem[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusAlertPolicyRequest {
  /** 实例id */
  InstanceId: string;
  /** 分页 */
  Offset?: number;
  /** 分页 */
  Limit?: number;
  /** 过滤支持ID，Name */
  Filters?: Filter[];
}

declare interface DescribePrometheusAlertPolicyResponse {
  /** 告警详情 */
  AlertRules: PrometheusAlertPolicyItem[] | null;
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusAlertRuleRequest {
  /** 实例id */
  InstanceId: string;
  /** 分页 */
  Offset?: number;
  /** 分页 */
  Limit?: number;
  /** 过滤支持ID，Name */
  Filters?: Filter[];
}

declare interface DescribePrometheusAlertRuleResponse {
  /** 告警详情 */
  AlertRules?: PrometheusAlertRuleDetail[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusClusterAgentsRequest {
  /** 实例id */
  InstanceId: string;
  /** 用于分页 */
  Offset?: number;
  /** 用于分页 */
  Limit?: number;
}

declare interface DescribePrometheusClusterAgentsResponse {
  /** 被关联集群信息 */
  Agents: PrometheusAgentOverview[];
  /** 被关联集群总量 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusConfigRequest {
  /** 实例id */
  InstanceId: string;
  /** 集群id */
  ClusterId: string;
  /** 集群类型 */
  ClusterType: string;
}

declare interface DescribePrometheusConfigResponse {
  /** 全局配置 */
  Config?: string;
  /** ServiceMonitor配置 */
  ServiceMonitors?: PrometheusConfigItem[];
  /** PodMonitor配置 */
  PodMonitors?: PrometheusConfigItem[];
  /** 原生Job */
  RawJobs?: PrometheusConfigItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusGlobalConfigRequest {
  /** 实例级别抓取配置 */
  InstanceId: string;
  /** 是否禁用统计 */
  DisableStatistics?: boolean;
}

declare interface DescribePrometheusGlobalConfigResponse {
  /** 配置内容 */
  Config: string;
  /** ServiceMonitors列表以及对应targets信息 */
  ServiceMonitors: PrometheusConfigItem[] | null;
  /** PodMonitors列表以及对应targets信息 */
  PodMonitors: PrometheusConfigItem[] | null;
  /** RawJobs列表以及对应targets信息 */
  RawJobs: PrometheusConfigItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusGlobalNotificationRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribePrometheusGlobalNotificationResponse {
  /** 全局告警通知渠道 */
  Notification: PrometheusNotificationItem | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusInstanceInitStatusRequest {
  /** 实例ID */
  InstanceId: string;
}

declare interface DescribePrometheusInstanceInitStatusResponse {
  /** 实例初始化状态，取值：uninitialized 未初始化 initializing 初始化中running 初始化完成，运行中 */
  Status: string | null;
  /** 初始化任务步骤 */
  Steps: TaskStepInfo[] | null;
  /** 实例eks集群ID */
  EksClusterId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusInstanceRequest {
  /** 实例id */
  InstanceId: string;
}

declare interface DescribePrometheusInstanceResponse {
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

declare interface DescribePrometheusInstancesOverviewRequest {
  /** 用于分页 */
  Offset?: number;
  /** 用于分页 */
  Limit?: number;
  /** 过滤实例，目前支持：ID: 通过实例ID来过滤 Name: 通过实例名称来过滤 */
  Filters?: Filter[];
}

declare interface DescribePrometheusInstancesOverviewResponse {
  /** 实例列表 */
  Instances: PrometheusInstancesOverview[];
  /** 实例总数 */
  Total: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusOverviewsRequest {
  /** 用于分页 */
  Offset?: number;
  /** 用于分页 */
  Limit?: number;
  /** 过滤实例，目前支持：ID: 通过实例ID来过滤 Name: 通过实例名称来过滤 */
  Filters?: Filter[];
}

declare interface DescribePrometheusOverviewsResponse {
  /** 实例列表 */
  Instances?: PrometheusInstanceOverview[];
  /** 实例总数 */
  Total?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusRecordRulesRequest {
  /** 实例id */
  InstanceId: string;
  /** 分页 */
  Offset?: number;
  /** 分页 */
  Limit?: number;
  /** 过滤 */
  Filters?: Filter[];
}

declare interface DescribePrometheusRecordRulesResponse {
  /** 聚合规则 */
  Records: PrometheusRecordRuleYamlItem[];
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusTargetsRequest {
  /** 实例id */
  InstanceId: string;
  /** 集群类型 */
  ClusterType: string;
  /** 集群id */
  ClusterId: string;
  /** 过滤条件，当前支持Name=stateValue=up, down, unknown */
  Filters?: Filter[];
}

declare interface DescribePrometheusTargetsResponse {
  /** 所有Job的targets信息 */
  Jobs?: PrometheusJobTargets[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusTempRequest {
  /** 模糊过滤条件，支持Level 按模板级别过滤Name 按名称过滤Describe 按描述过滤ID 按templateId过滤 */
  Filters?: Filter[];
  /** 分页偏移 */
  Offset?: number;
  /** 总数限制 */
  Limit?: number;
}

declare interface DescribePrometheusTempResponse {
  /** 模板列表 */
  Templates: PrometheusTemp[];
  /** 总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusTempSyncRequest {
  /** 模板ID */
  TemplateId: string;
}

declare interface DescribePrometheusTempSyncResponse {
  /** 同步目标详情 */
  Targets: PrometheusTemplateSyncTarget[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusTemplateSyncRequest {
  /** 模板ID */
  TemplateId: string;
}

declare interface DescribePrometheusTemplateSyncResponse {
  /** 同步目标详情 */
  Targets?: PrometheusTemplateSyncTarget[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrometheusTemplatesRequest {
  /** 模糊过滤条件，支持Level 按模板级别过滤Name 按名称过滤Describe 按描述过滤ID 按templateId过滤 */
  Filters?: Filter[];
  /** 分页偏移 */
  Offset?: number;
  /** 总数限制 */
  Limit?: number;
}

declare interface DescribePrometheusTemplatesResponse {
  /** 模板列表 */
  Templates?: PrometheusTemplate[];
  /** 总数 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 地域的数量 */
  TotalCount?: number | null;
  /** 地域列表 */
  RegionInstanceSet?: RegionInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResourceUsageRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeResourceUsageResponse {
  /** CRD使用量 */
  CRDUsage: ResourceUsage;
  /** Pod使用量 */
  PodUsage: number;
  /** ConfigMap使用量 */
  ConfigMapUsage: number;
  /** 其他资源使用量 */
  OtherUsage: ResourceUsage;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRouteTableConflictsRequest {
  /** 路由表CIDR */
  RouteTableCidrBlock: string;
  /** 路由表绑定的VPC */
  VpcId: string;
}

declare interface DescribeRouteTableConflictsResponse {
  /** 路由表是否冲突。 */
  HasConflict: boolean;
  /** 路由表冲突列表。 */
  RouteTableConflictSet: RouteTableConflict[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTKEEdgeClusterCredentialRequest {
  /** 集群Id */
  ClusterId: string;
}

declare interface DescribeTKEEdgeClusterCredentialResponse {
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

declare interface DescribeTKEEdgeClusterStatusRequest {
  /** 边缘计算容器集群Id */
  ClusterId: string;
}

declare interface DescribeTKEEdgeClusterStatusResponse {
  /** 集群当前状态 */
  Phase: string;
  /** 集群过程数组 */
  Conditions: ClusterCondition[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTKEEdgeClustersRequest {
  /** 集群ID列表(为空时，表示获取账号下所有集群) */
  ClusterIds?: string[];
  /** 偏移量,默认0 */
  Offset?: number;
  /** 最大输出条数，默认20 */
  Limit?: number;
  /** 过滤条件,当前只支持按照ClusterName和云标签进行过滤,云标签过滤格式Tags:["key1:value1","key2:value2"] */
  Filters?: Filter[];
}

declare interface DescribeTKEEdgeClustersResponse {
  /** 集群总个数 */
  TotalCount?: number;
  /** 集群信息列表 */
  Clusters?: EdgeCluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTKEEdgeExternalKubeconfigRequest {
  /** 集群id */
  ClusterId: string;
}

declare interface DescribeTKEEdgeExternalKubeconfigResponse {
  /** kubeconfig文件内容 */
  Kubeconfig?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTKEEdgeScriptRequest {
  /** 集群id */
  ClusterId: string;
  /** 网卡名 */
  Interface: string;
  /** 节点名字 */
  NodeName?: string;
  /** json格式的节点配置 */
  Config?: string;
  /** 可以下载某个历史版本的edgectl脚本，默认下载最新版本，edgectl版本信息可以在脚本里查看 */
  ScriptVersion?: string;
}

declare interface DescribeTKEEdgeScriptResponse {
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

declare interface DescribeVersionsRequest {
}

declare interface DescribeVersionsResponse {
  /** 版本数量 */
  TotalCount: number | null;
  /** 版本列表 */
  VersionInstanceSet: VersionInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcCniPodLimitsRequest {
  /** 查询的机型所在可用区，如：ap-guangzhou-3，默认为空，即不按可用区过滤信息 */
  Zone?: string;
  /** 查询的实例机型系列信息，如：S5，默认为空，即不按机型系列过滤信息 */
  InstanceFamily?: string;
  /** 查询的实例机型信息，如：S5.LARGE8，默认为空，即不按机型过滤信息 */
  InstanceType?: string;
}

declare interface DescribeVpcCniPodLimitsResponse {
  /** 机型数据数量 */
  TotalCount: number | null;
  /** 机型信息及其可支持的最大VPC-CNI模式Pod数量信息 */
  PodLimitsInstanceSet: PodLimitsInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableClusterAuditRequest {
  /** 集群ID */
  ClusterId: string;
  /** 取值为true代表关闭集群审计时删除默认创建的日志集和主题，false代表不删除 */
  DeleteLogSetAndTopic?: boolean;
}

declare interface DisableClusterAuditResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableClusterDeletionProtectionRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DisableClusterDeletionProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableEncryptionProtectionRequest {
}

declare interface DisableEncryptionProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableEventPersistenceRequest {
  /** 集群ID */
  ClusterId: string;
  /** 取值为true代表关闭集群审计时删除默认创建的日志集和主题，false代表不删除 */
  DeleteLogSetAndTopic?: boolean;
}

declare interface DisableEventPersistenceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableVpcCniNetworkTypeRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DisableVpcCniNetworkTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DrainClusterVirtualNodeRequest {
  /** 集群ID */
  ClusterId: string;
  /** 节点名 */
  NodeName: string;
}

declare interface DrainClusterVirtualNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableClusterAuditRequest {
  /** 集群ID */
  ClusterId: string;
  /** CLS日志集ID */
  LogsetId?: string;
  /** CLS日志主题ID */
  TopicId?: string;
  /** topic所在region，默认为集群当前region */
  TopicRegion?: string;
}

declare interface EnableClusterAuditResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableClusterDeletionProtectionRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface EnableClusterDeletionProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableEncryptionProtectionRequest {
}

declare interface EnableEncryptionProtectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableEventPersistenceRequest {
  /** 集群ID */
  ClusterId: string;
  /** cls服务的logsetID */
  LogsetId?: string;
  /** cls服务的topicID */
  TopicId?: string;
  /** topic所在地域，默认为集群所在地域 */
  TopicRegion?: string;
}

declare interface EnableEventPersistenceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableVpcCniNetworkTypeRequest {
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

declare interface EnableVpcCniNetworkTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ForwardApplicationRequestV3Request {
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
  /** 集群名称 */
  ClusterName?: string;
  /** 是否编码请求内容 */
  EncodedBody?: string;
}

declare interface ForwardApplicationRequestV3Response {
  /** 请求集群addon后返回的数据 */
  ResponseBody: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ForwardTKEEdgeApplicationRequestV3Request {
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

declare interface ForwardTKEEdgeApplicationRequestV3Response {
  /** 请求集群addon后返回的数据 */
  ResponseBody: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetClusterLevelPriceRequest {
  /** 集群规格，托管集群询价 */
  ClusterLevel: string;
}

declare interface GetClusterLevelPriceResponse {
  /** 询价结果，单位：分，打折后 */
  Cost: number;
  /** 询价结果，单位：分，折扣前 */
  TotalCost: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetMostSuitableImageCacheRequest {
  /** 容器镜像列表 */
  Images: string[];
}

declare interface GetMostSuitableImageCacheResponse {
  /** 是否有匹配的镜像缓存 */
  Found: boolean;
  /** 匹配的镜像缓存 */
  ImageCache: ImageCache | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetTkeAppChartListRequest {
  /** app类型，取值log,scheduler,network,storage,monitor,dns,image,other,invisible */
  Kind?: string;
  /** app支持的操作系统，取值arm32、arm64、amd64 */
  Arch?: string;
  /** 集群类型，取值tke、eks */
  ClusterType?: string;
}

declare interface GetTkeAppChartListResponse {
  /** 所支持的chart列表 */
  AppCharts?: AppChart[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetUpgradeInstanceProgressRequest {
  /** 集群ID */
  ClusterId: string;
  /** 最多获取多少个节点的进度 */
  Limit?: number;
  /** 从第几个节点开始获取进度 */
  Offset?: number;
}

declare interface GetUpgradeInstanceProgressResponse {
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

declare interface InstallAddonRequest {
  /** 集群ID */
  ClusterId: string;
  /** addon名称 */
  AddonName: string;
  /** addon版本（不传默认安装最新版本） */
  AddonVersion?: string;
  /** addon的参数，是一个json格式的base64转码后的字符串（addon参数由DescribeAddonValues获取） */
  RawValues?: string;
}

declare interface InstallAddonResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstallEdgeLogAgentRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface InstallEdgeLogAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstallLogAgentRequest {
  /** TKE集群ID */
  ClusterId: string;
  /** kubelet根目录 */
  KubeletRootDir?: string;
}

declare interface InstallLogAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListClusterInspectionResultsItemsRequest {
  /** 目标集群ID */
  ClusterId: string;
  /** 查询历史结果的开始时间，Unix时间戳 */
  StartTime?: string;
  /** 查询历史结果的结束时间，默认当前距离开始时间3天，Unix时间戳 */
  EndTime?: string;
}

declare interface ListClusterInspectionResultsItemsResponse {
  /** 巡检结果历史列表 */
  InspectionResultsItems?: KubeJarvisStateInspectionResultsItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ListClusterInspectionResultsRequest {
  /** 目标集群列表，为空查询用户所有集群 */
  ClusterIds?: string[];
  /** 隐藏的字段信息，为了减少无效的字段返回，隐藏字段不会在返回值中返回。可选值：results */
  Hide?: string[];
  /** 指定查询结果的报告名称，默认查询最新的每个集群只查询最新的一条 */
  Name?: string;
}

declare interface ListClusterInspectionResultsResponse {
  /** 集群诊断结果列表 */
  InspectionResults?: KubeJarvisStateInspectionResult[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterAsGroupAttributeRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群关联的伸缩组属性 */
  ClusterAsGroupAttribute?: ClusterAsGroupAttribute;
}

declare interface ModifyClusterAsGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterAsGroupOptionAttributeRequest {
  /** 集群ID */
  ClusterId: string;
  /** 集群弹性伸缩属性 */
  ClusterAsGroupOption: ClusterAsGroupOption;
}

declare interface ModifyClusterAsGroupOptionAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterAttributeRequest {
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
}

declare interface ModifyClusterAttributeResponse {
  /** 集群所属项目 */
  ProjectId: number | null;
  /** 集群名称 */
  ClusterName: string | null;
  /** 集群描述 */
  ClusterDesc: string | null;
  /** 集群等级 */
  ClusterLevel: string | null;
  /** 自动变配集群等级 */
  AutoUpgradeClusterLevel: AutoUpgradeClusterLevel | null;
  /** 是否开启QGPU共享 */
  QGPUShareEnable: boolean | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterAuthenticationOptionsRequest {
  /** 集群ID */
  ClusterId: string;
  /** ServiceAccount认证配置 */
  ServiceAccounts?: ServiceAccountAuthenticationOptions;
  /** OIDC认证配置 */
  OIDCConfig?: OIDCConfigAuthenticationOptions;
}

declare interface ModifyClusterAuthenticationOptionsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterEndpointSPRequest {
  /** 集群ID */
  ClusterId: string;
  /** 安全策略放通单个IP或CIDR(例如: "192.168.1.0/24",默认为拒绝所有) */
  SecurityPolicies?: string[];
  /** 修改外网访问安全组 */
  SecurityGroup?: string;
}

declare interface ModifyClusterEndpointSPResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterNodePoolRequest {
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
}

declare interface ModifyClusterNodePoolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyClusterVirtualNodePoolRequest {
  /** 集群ID */
  ClusterId: string;
  /** 节点池ID */
  NodePoolId: string;
  /** 节点池名称 */
  Name?: string;
  /** 虚拟节点label */
  Labels?: Label[];
  /** 虚拟节点taint */
  Taints?: Taint[];
  /** 删除保护开关 */
  DeletionProtection?: boolean;
}

declare interface ModifyClusterVirtualNodePoolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNodePoolDesiredCapacityAboutAsgRequest {
  /** 集群id */
  ClusterId: string;
  /** 节点池id */
  NodePoolId: string;
  /** 节点池所关联的伸缩组的期望实例数 */
  DesiredCapacity: number;
}

declare interface ModifyNodePoolDesiredCapacityAboutAsgResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNodePoolInstanceTypesRequest {
  /** 集群id */
  ClusterId: string;
  /** 节点池id */
  NodePoolId: string;
  /** 机型列表 */
  InstanceTypes: string[];
}

declare interface ModifyNodePoolInstanceTypesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusAgentExternalLabelsRequest {
  /** 实例ID */
  InstanceId: string;
  /** 集群ID */
  ClusterId: string;
  /** 新的external_labels */
  ExternalLabels: Label[];
}

declare interface ModifyPrometheusAgentExternalLabelsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusAlertPolicyRequest {
  /** 实例id */
  InstanceId: string;
  /** 告警配置 */
  AlertRule: PrometheusAlertPolicyItem;
}

declare interface ModifyPrometheusAlertPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusAlertRuleRequest {
  /** 实例id */
  InstanceId: string;
  /** 告警配置 */
  AlertRule: PrometheusAlertRuleDetail;
}

declare interface ModifyPrometheusAlertRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusConfigRequest {
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
}

declare interface ModifyPrometheusConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusGlobalNotificationRequest {
  /** 实例ID */
  InstanceId: string;
  /** 告警通知渠道 */
  Notification: PrometheusNotificationItem;
}

declare interface ModifyPrometheusGlobalNotificationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusRecordRuleYamlRequest {
  /** 实例id */
  InstanceId: string;
  /** 聚合实例名称 */
  Name: string;
  /** 新的内容 */
  Content: string;
}

declare interface ModifyPrometheusRecordRuleYamlResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusTempRequest {
  /** 模板ID */
  TemplateId: string;
  /** 修改内容 */
  Template: PrometheusTempModify;
}

declare interface ModifyPrometheusTempResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrometheusTemplateRequest {
  /** 模板ID */
  TemplateId: string;
  /** 修改内容 */
  Template: PrometheusTemplateModify;
}

declare interface ModifyPrometheusTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveNodeFromNodePoolRequest {
  /** 集群id */
  ClusterId: string;
  /** 节点池id */
  NodePoolId: string;
  /** 节点id列表，一次最多支持100台 */
  InstanceIds: string[];
}

declare interface RemoveNodeFromNodePoolResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartEKSContainerInstancesRequest {
  /** EKS instance ids */
  EksCiIds: string[];
}

declare interface RestartEKSContainerInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RollbackClusterReleaseRequest {
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

declare interface RollbackClusterReleaseResponse {
  /** 应用详情 */
  Release: PendingRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunPrometheusInstanceRequest {
  /** 实例ID */
  InstanceId: string;
  /** 子网ID，默认使用实例所用子网初始化，也可通过该参数传递新的子网ID初始化 */
  SubnetId?: string;
}

declare interface RunPrometheusInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleInClusterMasterRequest {
  /** 集群实例ID */
  ClusterId: string;
  /** master缩容选项 */
  ScaleInMasters: ScaleInMaster[];
}

declare interface ScaleInClusterMasterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ScaleOutClusterMasterRequest {
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

declare interface ScaleOutClusterMasterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetNodePoolNodeProtectionRequest {
  /** 集群id */
  ClusterId: string;
  /** 节点池id */
  NodePoolId: string;
  /** 节点id */
  InstanceIds: string[];
  /** 节点是否需要移出保护 */
  ProtectedFromScaleIn: boolean;
}

declare interface SetNodePoolNodeProtectionResponse {
  /** 成功设置的节点id */
  SucceedInstanceIds: string[] | null;
  /** 没有成功设置的节点id */
  FailedInstanceIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncPrometheusTempRequest {
  /** 实例id */
  TemplateId: string;
  /** 同步目标 */
  Targets: PrometheusTemplateSyncTarget[];
}

declare interface SyncPrometheusTempResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncPrometheusTemplateRequest {
  /** 实例id */
  TemplateId: string;
  /** 同步目标 */
  Targets: PrometheusTemplateSyncTarget[];
}

declare interface SyncPrometheusTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UninstallClusterReleaseRequest {
  /** 集群ID */
  ClusterId: string;
  /** 应用名称 */
  Name: string;
  /** 应用命名空间 */
  Namespace: string;
  /** 集群类型 */
  ClusterType?: string;
}

declare interface UninstallClusterReleaseResponse {
  /** 应用详情 */
  Release: PendingRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UninstallEdgeLogAgentRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface UninstallEdgeLogAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UninstallLogAgentRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface UninstallLogAgentResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateAddonRequest {
  /** 集群ID */
  ClusterId: string;
  /** addon名称 */
  AddonName: string;
  /** addon版本（不传默认不更新） */
  AddonVersion?: string;
  /** addon的参数，是一个json格式的base64转码后的字符串（addon参数由DescribeAddonValues获取） */
  RawValues?: string;
}

declare interface UpdateAddonResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateClusterKubeconfigRequest {
  /** 集群ID */
  ClusterId: string;
  /** 子账户Uin列表，传空默认为调用此接口的SubUin */
  SubAccounts?: string[];
}

declare interface UpdateClusterKubeconfigResponse {
  /** 已更新的子账户Uin列表 */
  UpdatedSubAccounts?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateClusterVersionRequest {
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

declare interface UpdateClusterVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateEKSClusterRequest {
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

declare interface UpdateEKSClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateEKSContainerInstanceRequest {
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

declare interface UpdateEKSContainerInstanceResponse {
  /** 容器实例 ID */
  EksCiId: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateEdgeClusterVersionRequest {
  /** 集群 Id */
  ClusterId: string;
  /** 需要升级到的版本 */
  EdgeVersion: string;
  /** 自定义边缘组件镜像仓库前缀 */
  RegistryPrefix?: string;
  /** 是否跳过预检查阶段 */
  SkipPreCheck?: boolean;
}

declare interface UpdateEdgeClusterVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateImageCacheRequest {
  /** 镜像缓存Id */
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
}

declare interface UpdateImageCacheResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpdateTKEEdgeClusterRequest {
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

declare interface UpdateTKEEdgeClusterResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeClusterInstancesRequest {
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

declare interface UpgradeClusterInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UpgradeClusterReleaseRequest {
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
  /** 制品来源，范围：tke-market 或 other */
  ChartFrom?: string;
  /** 制品版本( 从第三安装时，不传这个参数） */
  ChartVersion?: string;
  /** 制品仓库URL地址 */
  ChartRepoURL?: string;
  /** 制品访问用户名 */
  Username?: string;
  /** 制品访问密码 */
  Password?: string;
  /** 制品命名空间 */
  ChartNamespace?: string;
  /** 集群类型，支持传 tke, eks, tkeedge, exernal(注册集群） */
  ClusterType?: string;
}

declare interface UpgradeClusterReleaseResponse {
  /** 应用详情 */
  Release?: PendingRelease | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Tke 容器服务} */
declare interface Tke {
  (): Versions;
  /** 获取集群RBAC管理员角色 {@link AcquireClusterAdminRoleRequest} {@link AcquireClusterAdminRoleResponse} */
  AcquireClusterAdminRole(data: AcquireClusterAdminRoleRequest, config?: AxiosRequestConfig): AxiosPromise<AcquireClusterAdminRoleResponse>;
  /** 给集群增加ClusterCIDR {@link AddClusterCIDRRequest} {@link AddClusterCIDRResponse} */
  AddClusterCIDR(data: AddClusterCIDRRequest, config?: AxiosRequestConfig): AxiosPromise<AddClusterCIDRResponse>;
  /** 添加已经存在的实例到集群 {@link AddExistedInstancesRequest} {@link AddExistedInstancesResponse} */
  AddExistedInstances(data: AddExistedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AddExistedInstancesResponse>;
  /** 将集群内节点移入节点池 {@link AddNodeToNodePoolRequest} {@link AddNodeToNodePoolResponse} */
  AddNodeToNodePool(data: AddNodeToNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<AddNodeToNodePoolResponse>;
  /** 增加集群子网 {@link AddVpcCniSubnetsRequest} {@link AddVpcCniSubnetsResponse} */
  AddVpcCniSubnets(data: AddVpcCniSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<AddVpcCniSubnetsResponse>;
  /** 集群取消安装应用 {@link CancelClusterReleaseRequest} {@link CancelClusterReleaseResponse} */
  CancelClusterRelease(data: CancelClusterReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<CancelClusterReleaseResponse>;
  /** 检查边缘计算集群的CIDR是否冲突 {@link CheckEdgeClusterCIDRRequest} {@link CheckEdgeClusterCIDRResponse} */
  CheckEdgeClusterCIDR(data: CheckEdgeClusterCIDRRequest, config?: AxiosRequestConfig): AxiosPromise<CheckEdgeClusterCIDRResponse>;
  /** 节点是否可升级 {@link CheckInstancesUpgradeAbleRequest} {@link CheckInstancesUpgradeAbleResponse} */
  CheckInstancesUpgradeAble(data: CheckInstancesUpgradeAbleRequest, config?: AxiosRequestConfig): AxiosPromise<CheckInstancesUpgradeAbleResponse>;
  /** 创建备份仓库 {@link CreateBackupStorageLocationRequest} {@link CreateBackupStorageLocationResponse} */
  CreateBackupStorageLocation(data: CreateBackupStorageLocationRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBackupStorageLocationResponse>;
  /** 创建集群 {@link CreateClusterRequest} {@link CreateClusterResponse} */
  CreateCluster(data: CreateClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterResponse>;
  /** 创建集群访问端口 {@link CreateClusterEndpointRequest} {@link CreateClusterEndpointResponse} */
  CreateClusterEndpoint(data: CreateClusterEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterEndpointResponse>;
  /** 创建托管集群外网访问端口 {@link CreateClusterEndpointVipRequest} {@link CreateClusterEndpointVipResponse} */
  CreateClusterEndpointVip(data: CreateClusterEndpointVipRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterEndpointVipResponse>;
  /** 扩展集群节点 {@link CreateClusterInstancesRequest} {@link CreateClusterInstancesResponse} */
  CreateClusterInstances(data: CreateClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterInstancesResponse>;
  /** 创建节点池 {@link CreateClusterNodePoolRequest} {@link CreateClusterNodePoolResponse} */
  CreateClusterNodePool(data: CreateClusterNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterNodePoolResponse>;
  /** 集群安装应用 {@link CreateClusterReleaseRequest} {@link CreateClusterReleaseResponse} */
  CreateClusterRelease(data: CreateClusterReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterReleaseResponse>;
  /** 创建集群路由 {@link CreateClusterRouteRequest} {@link CreateClusterRouteResponse} */
  CreateClusterRoute(data: CreateClusterRouteRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterRouteResponse>;
  /** 创建集群路由表 {@link CreateClusterRouteTableRequest} {@link CreateClusterRouteTableResponse} */
  CreateClusterRouteTable(data: CreateClusterRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterRouteTableResponse>;
  /** 创建虚拟节点 {@link CreateClusterVirtualNodeRequest} {@link CreateClusterVirtualNodeResponse} */
  CreateClusterVirtualNode(data: CreateClusterVirtualNodeRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterVirtualNodeResponse>;
  /** 创建虚拟节点池 {@link CreateClusterVirtualNodePoolRequest} {@link CreateClusterVirtualNodePoolResponse} */
  CreateClusterVirtualNodePool(data: CreateClusterVirtualNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<CreateClusterVirtualNodePoolResponse>;
  /** 创建边缘计算ECM机器 {@link CreateECMInstancesRequest} {@link CreateECMInstancesResponse} */
  CreateECMInstances(data: CreateECMInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateECMInstancesResponse>;
  /** 创建弹性集群 {@link CreateEKSClusterRequest} {@link CreateEKSClusterResponse} */
  CreateEKSCluster(data: CreateEKSClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEKSClusterResponse>;
  /** 创建容器实例 {@link CreateEKSContainerInstancesRequest} {@link CreateEKSContainerInstancesResponse} */
  CreateEKSContainerInstances(data: CreateEKSContainerInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEKSContainerInstancesResponse>;
  /** 创建边缘容器CVM机器 {@link CreateEdgeCVMInstancesRequest} {@link CreateEdgeCVMInstancesResponse} */
  CreateEdgeCVMInstances(data: CreateEdgeCVMInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeCVMInstancesResponse>;
  /** 创建边缘集群日志采集配置 {@link CreateEdgeLogConfigRequest} {@link CreateEdgeLogConfigResponse} */
  CreateEdgeLogConfig(data: CreateEdgeLogConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreateEdgeLogConfigResponse>;
  /** 创建镜像缓存 {@link CreateImageCacheRequest} {@link CreateImageCacheResponse} */
  CreateImageCache(data: CreateImageCacheRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageCacheResponse>;
  /** 创建告警策略 {@link CreatePrometheusAlertPolicyRequest} {@link CreatePrometheusAlertPolicyResponse} */
  CreatePrometheusAlertPolicy(data: CreatePrometheusAlertPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusAlertPolicyResponse>;
  /** 创建告警规则 {@link CreatePrometheusAlertRuleRequest} {@link CreatePrometheusAlertRuleResponse} */
  CreatePrometheusAlertRule(data: CreatePrometheusAlertRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusAlertRuleResponse>;
  /** 2.0实例关联集群 {@link CreatePrometheusClusterAgentRequest} {@link CreatePrometheusClusterAgentResponse} */
  CreatePrometheusClusterAgent(data: CreatePrometheusClusterAgentRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusClusterAgentResponse>;
  /** 创建prometheus配置 {@link CreatePrometheusConfigRequest} {@link CreatePrometheusConfigResponse} */
  CreatePrometheusConfig(data: CreatePrometheusConfigRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusConfigResponse>;
  /** 创建grafana监控面板 {@link CreatePrometheusDashboardRequest} {@link CreatePrometheusDashboardResponse} */
  CreatePrometheusDashboard(data: CreatePrometheusDashboardRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusDashboardResponse>;
  /** 创建全局告警通知渠道 {@link CreatePrometheusGlobalNotificationRequest} {@link CreatePrometheusGlobalNotificationResponse} */
  CreatePrometheusGlobalNotification(data: CreatePrometheusGlobalNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusGlobalNotificationResponse>;
  /** 以Yaml的方式创建聚合规则 {@link CreatePrometheusRecordRuleYamlRequest} {@link CreatePrometheusRecordRuleYamlResponse} */
  CreatePrometheusRecordRuleYaml(data: CreatePrometheusRecordRuleYamlRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusRecordRuleYamlResponse>;
  /** 新建模板 {@link CreatePrometheusTempRequest} {@link CreatePrometheusTempResponse} */
  CreatePrometheusTemp(data: CreatePrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusTempResponse>;
  /** 创建模板 {@link CreatePrometheusTemplateRequest} {@link CreatePrometheusTemplateResponse} */
  CreatePrometheusTemplate(data: CreatePrometheusTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrometheusTemplateResponse>;
  /** 创建边缘计算集群 {@link CreateTKEEdgeClusterRequest} {@link CreateTKEEdgeClusterResponse} */
  CreateTKEEdgeCluster(data: CreateTKEEdgeClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTKEEdgeClusterResponse>;
  /** 删除addon {@link DeleteAddonRequest} {@link DeleteAddonResponse} */
  DeleteAddon(data: DeleteAddonRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAddonResponse>;
  /** 删除备份仓库 {@link DeleteBackupStorageLocationRequest} {@link DeleteBackupStorageLocationResponse} */
  DeleteBackupStorageLocation(data: DeleteBackupStorageLocationRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBackupStorageLocationResponse>;
  /** 删除集群 {@link DeleteClusterRequest} {@link DeleteClusterResponse} */
  DeleteCluster(data: DeleteClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterResponse>;
  /** 删除集群伸缩组 {@link DeleteClusterAsGroupsRequest} {@link DeleteClusterAsGroupsResponse} */
  DeleteClusterAsGroups(data: DeleteClusterAsGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterAsGroupsResponse>;
  /** 删除集群访问端口 {@link DeleteClusterEndpointRequest} {@link DeleteClusterEndpointResponse} */
  DeleteClusterEndpoint(data: DeleteClusterEndpointRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterEndpointResponse>;
  /** 删除托管集群外网访问端口 {@link DeleteClusterEndpointVipRequest} {@link DeleteClusterEndpointVipResponse} */
  DeleteClusterEndpointVip(data: DeleteClusterEndpointVipRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterEndpointVipResponse>;
  /** 删除集群中的节点 {@link DeleteClusterInstancesRequest} {@link DeleteClusterInstancesResponse} */
  DeleteClusterInstances(data: DeleteClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterInstancesResponse>;
  /** 删除节点池 {@link DeleteClusterNodePoolRequest} {@link DeleteClusterNodePoolResponse} */
  DeleteClusterNodePool(data: DeleteClusterNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterNodePoolResponse>;
  /** 删除集群路由 {@link DeleteClusterRouteRequest} {@link DeleteClusterRouteResponse} */
  DeleteClusterRoute(data: DeleteClusterRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterRouteResponse>;
  /** 删除集群路由表 {@link DeleteClusterRouteTableRequest} {@link DeleteClusterRouteTableResponse} */
  DeleteClusterRouteTable(data: DeleteClusterRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterRouteTableResponse>;
  /** 删除虚拟节点 {@link DeleteClusterVirtualNodeRequest} {@link DeleteClusterVirtualNodeResponse} */
  DeleteClusterVirtualNode(data: DeleteClusterVirtualNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterVirtualNodeResponse>;
  /** 删除虚拟节点池 {@link DeleteClusterVirtualNodePoolRequest} {@link DeleteClusterVirtualNodePoolResponse} */
  DeleteClusterVirtualNodePool(data: DeleteClusterVirtualNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteClusterVirtualNodePoolResponse>;
  /** 删除ECM实例 {@link DeleteECMInstancesRequest} {@link DeleteECMInstancesResponse} */
  DeleteECMInstances(data: DeleteECMInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteECMInstancesResponse>;
  /** 删除弹性集群 {@link DeleteEKSClusterRequest} {@link DeleteEKSClusterResponse} */
  DeleteEKSCluster(data: DeleteEKSClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEKSClusterResponse>;
  /** 删除容器实例 {@link DeleteEKSContainerInstancesRequest} {@link DeleteEKSContainerInstancesResponse} */
  DeleteEKSContainerInstances(data: DeleteEKSContainerInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEKSContainerInstancesResponse>;
  /** 删除边缘容器CVM实例 {@link DeleteEdgeCVMInstancesRequest} {@link DeleteEdgeCVMInstancesResponse} */
  DeleteEdgeCVMInstances(data: DeleteEdgeCVMInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeCVMInstancesResponse>;
  /** 删除边缘计算实例 {@link DeleteEdgeClusterInstancesRequest} {@link DeleteEdgeClusterInstancesResponse} */
  DeleteEdgeClusterInstances(data: DeleteEdgeClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteEdgeClusterInstancesResponse>;
  /** 删除镜像缓存 {@link DeleteImageCachesRequest} {@link DeleteImageCachesResponse} */
  DeleteImageCaches(data: DeleteImageCachesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImageCachesResponse>;
  /** 删除2.0实例告警策略 {@link DeletePrometheusAlertPolicyRequest} {@link DeletePrometheusAlertPolicyResponse} */
  DeletePrometheusAlertPolicy(data: DeletePrometheusAlertPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusAlertPolicyResponse>;
  /** 删除告警规则 {@link DeletePrometheusAlertRuleRequest} {@link DeletePrometheusAlertRuleResponse} */
  DeletePrometheusAlertRule(data: DeletePrometheusAlertRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusAlertRuleResponse>;
  /** 解除TMP实例的集群关联 {@link DeletePrometheusClusterAgentRequest} {@link DeletePrometheusClusterAgentResponse} */
  DeletePrometheusClusterAgent(data: DeletePrometheusClusterAgentRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusClusterAgentResponse>;
  /** 删除Prometheus配置 {@link DeletePrometheusConfigRequest} {@link DeletePrometheusConfigResponse} */
  DeletePrometheusConfig(data: DeletePrometheusConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusConfigResponse>;
  /** 删除聚合实例 {@link DeletePrometheusRecordRuleYamlRequest} {@link DeletePrometheusRecordRuleYamlResponse} */
  DeletePrometheusRecordRuleYaml(data: DeletePrometheusRecordRuleYamlRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusRecordRuleYamlResponse>;
  /** 删除模板实例 {@link DeletePrometheusTempRequest} {@link DeletePrometheusTempResponse} */
  DeletePrometheusTemp(data: DeletePrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusTempResponse>;
  /** 解除模板同步 {@link DeletePrometheusTempSyncRequest} {@link DeletePrometheusTempSyncResponse} */
  DeletePrometheusTempSync(data: DeletePrometheusTempSyncRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusTempSyncResponse>;
  /** 删除模板 {@link DeletePrometheusTemplateRequest} {@link DeletePrometheusTemplateResponse} */
  DeletePrometheusTemplate(data: DeletePrometheusTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusTemplateResponse>;
  /** 取消模板同步 {@link DeletePrometheusTemplateSyncRequest} {@link DeletePrometheusTemplateSyncResponse} */
  DeletePrometheusTemplateSync(data: DeletePrometheusTemplateSyncRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrometheusTemplateSyncResponse>;
  /** 删除边缘计算集群 {@link DeleteTKEEdgeClusterRequest} {@link DeleteTKEEdgeClusterResponse} */
  DeleteTKEEdgeCluster(data: DeleteTKEEdgeClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTKEEdgeClusterResponse>;
  /** 获取addon列表 {@link DescribeAddonRequest} {@link DescribeAddonResponse} */
  DescribeAddon(data: DescribeAddonRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddonResponse>;
  /** 获取addon的参数 {@link DescribeAddonValuesRequest} {@link DescribeAddonValuesResponse} */
  DescribeAddonValues(data: DescribeAddonValuesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddonValuesResponse>;
  /** 获取集群可以升级的所有版本 {@link DescribeAvailableClusterVersionRequest} {@link DescribeAvailableClusterVersionResponse} */
  DescribeAvailableClusterVersion(data?: DescribeAvailableClusterVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailableClusterVersionResponse>;
  /** 边缘计算支持的k8s版本 {@link DescribeAvailableTKEEdgeVersionRequest} {@link DescribeAvailableTKEEdgeVersionResponse} */
  DescribeAvailableTKEEdgeVersion(data?: DescribeAvailableTKEEdgeVersionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailableTKEEdgeVersionResponse>;
  /** 查询备份仓库 {@link DescribeBackupStorageLocationsRequest} {@link DescribeBackupStorageLocationsResponse} */
  DescribeBackupStorageLocations(data?: DescribeBackupStorageLocationsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBackupStorageLocationsResponse>;
  /** 集群弹性伸缩配置 {@link DescribeClusterAsGroupOptionRequest} {@link DescribeClusterAsGroupOptionResponse} */
  DescribeClusterAsGroupOption(data: DescribeClusterAsGroupOptionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterAsGroupOptionResponse>;
  /** 集群关联的伸缩组列表 {@link DescribeClusterAsGroupsRequest} {@link DescribeClusterAsGroupsResponse} */
  DescribeClusterAsGroups(data: DescribeClusterAsGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterAsGroupsResponse>;
  /** 查看集群认证配置 {@link DescribeClusterAuthenticationOptionsRequest} {@link DescribeClusterAuthenticationOptionsResponse} */
  DescribeClusterAuthenticationOptions(data: DescribeClusterAuthenticationOptionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterAuthenticationOptionsResponse>;
  /** 获取集群子账户CommonName映射关系 {@link DescribeClusterCommonNamesRequest} {@link DescribeClusterCommonNamesResponse} */
  DescribeClusterCommonNames(data: DescribeClusterCommonNamesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterCommonNamesResponse>;
  /** 查询Kubernetes控制器状态 {@link DescribeClusterControllersRequest} {@link DescribeClusterControllersResponse} */
  DescribeClusterControllers(data: DescribeClusterControllersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterControllersResponse>;
  /** 查询集群访问端口状态 {@link DescribeClusterEndpointStatusRequest} {@link DescribeClusterEndpointStatusResponse} */
  DescribeClusterEndpointStatus(data: DescribeClusterEndpointStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterEndpointStatusResponse>;
  /** 查询托管集群开启外网端口流程状态 {@link DescribeClusterEndpointVipStatusRequest} {@link DescribeClusterEndpointVipStatusResponse} */
  DescribeClusterEndpointVipStatus(data: DescribeClusterEndpointVipStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterEndpointVipStatusResponse>;
  /** 获取集群访问地址 {@link DescribeClusterEndpointsRequest} {@link DescribeClusterEndpointsResponse} */
  DescribeClusterEndpoints(data: DescribeClusterEndpointsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterEndpointsResponse>;
  /** 查询集群巡检结果概览信息 {@link DescribeClusterInspectionResultsOverviewRequest} {@link DescribeClusterInspectionResultsOverviewResponse} */
  DescribeClusterInspectionResultsOverview(data?: DescribeClusterInspectionResultsOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterInspectionResultsOverviewResponse>;
  /** 查询集群节点信息 {@link DescribeClusterInstancesRequest} {@link DescribeClusterInstancesResponse} */
  DescribeClusterInstances(data: DescribeClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterInstancesResponse>;
  /** 获取集群kubeconfig文件 {@link DescribeClusterKubeconfigRequest} {@link DescribeClusterKubeconfigResponse} */
  DescribeClusterKubeconfig(data: DescribeClusterKubeconfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterKubeconfigResponse>;
  /** 获取集群规模 {@link DescribeClusterLevelAttributeRequest} {@link DescribeClusterLevelAttributeResponse} */
  DescribeClusterLevelAttribute(data?: DescribeClusterLevelAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterLevelAttributeResponse>;
  /** 查询集群变配记录 {@link DescribeClusterLevelChangeRecordsRequest} {@link DescribeClusterLevelChangeRecordsResponse} */
  DescribeClusterLevelChangeRecords(data: DescribeClusterLevelChangeRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterLevelChangeRecordsResponse>;
  /** 查询节点池详情 {@link DescribeClusterNodePoolDetailRequest} {@link DescribeClusterNodePoolDetailResponse} */
  DescribeClusterNodePoolDetail(data: DescribeClusterNodePoolDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterNodePoolDetailResponse>;
  /** 查询节点池列表 {@link DescribeClusterNodePoolsRequest} {@link DescribeClusterNodePoolsResponse} */
  DescribeClusterNodePools(data: DescribeClusterNodePoolsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterNodePoolsResponse>;
  /** 查询集群安装中的应用列表 {@link DescribeClusterPendingReleasesRequest} {@link DescribeClusterPendingReleasesResponse} */
  DescribeClusterPendingReleases(data: DescribeClusterPendingReleasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterPendingReleasesResponse>;
  /** 查询集群已安装应用详情 {@link DescribeClusterReleaseDetailsRequest} {@link DescribeClusterReleaseDetailsResponse} */
  DescribeClusterReleaseDetails(data: DescribeClusterReleaseDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterReleaseDetailsResponse>;
  /** 查询集群已安装应用版本历史 {@link DescribeClusterReleaseHistoryRequest} {@link DescribeClusterReleaseHistoryResponse} */
  DescribeClusterReleaseHistory(data: DescribeClusterReleaseHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterReleaseHistoryResponse>;
  /** 查询集群已安装应用列表 {@link DescribeClusterReleasesRequest} {@link DescribeClusterReleasesResponse} */
  DescribeClusterReleases(data: DescribeClusterReleasesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterReleasesResponse>;
  /** 查询集群路由表 {@link DescribeClusterRouteTablesRequest} {@link DescribeClusterRouteTablesResponse} */
  DescribeClusterRouteTables(data?: DescribeClusterRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterRouteTablesResponse>;
  /** 查询集群路由 {@link DescribeClusterRoutesRequest} {@link DescribeClusterRoutesResponse} */
  DescribeClusterRoutes(data: DescribeClusterRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterRoutesResponse>;
  /** 集群的密钥信息 {@link DescribeClusterSecurityRequest} {@link DescribeClusterSecurityResponse} */
  DescribeClusterSecurity(data: DescribeClusterSecurityRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterSecurityResponse>;
  /** 查看集群状态列表 {@link DescribeClusterStatusRequest} {@link DescribeClusterStatusResponse} */
  DescribeClusterStatus(data?: DescribeClusterStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterStatusResponse>;
  /** 查看虚拟节点列表 {@link DescribeClusterVirtualNodeRequest} {@link DescribeClusterVirtualNodeResponse} */
  DescribeClusterVirtualNode(data: DescribeClusterVirtualNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterVirtualNodeResponse>;
  /** 查看虚拟节点池列表 {@link DescribeClusterVirtualNodePoolsRequest} {@link DescribeClusterVirtualNodePoolsResponse} */
  DescribeClusterVirtualNodePools(data: DescribeClusterVirtualNodePoolsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClusterVirtualNodePoolsResponse>;
  /** 查询集群列表 {@link DescribeClustersRequest} {@link DescribeClustersResponse} */
  DescribeClusters(data?: DescribeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClustersResponse>;
  /** 获取ECM实例相关信息 {@link DescribeECMInstancesRequest} {@link DescribeECMInstancesResponse} */
  DescribeECMInstances(data: DescribeECMInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeECMInstancesResponse>;
  /** 获取弹性容器集群的认证信息 {@link DescribeEKSClusterCredentialRequest} {@link DescribeEKSClusterCredentialResponse} */
  DescribeEKSClusterCredential(data: DescribeEKSClusterCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEKSClusterCredentialResponse>;
  /** 查询弹性集群列表 {@link DescribeEKSClustersRequest} {@link DescribeEKSClustersResponse} */
  DescribeEKSClusters(data?: DescribeEKSClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEKSClustersResponse>;
  /** 查询容器实例的事件 {@link DescribeEKSContainerInstanceEventRequest} {@link DescribeEKSContainerInstanceEventResponse} */
  DescribeEKSContainerInstanceEvent(data: DescribeEKSContainerInstanceEventRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEKSContainerInstanceEventResponse>;
  /** 查询容器实例支持的地域 {@link DescribeEKSContainerInstanceRegionsRequest} {@link DescribeEKSContainerInstanceRegionsResponse} */
  DescribeEKSContainerInstanceRegions(data?: DescribeEKSContainerInstanceRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEKSContainerInstanceRegionsResponse>;
  /** 查询容器实例 {@link DescribeEKSContainerInstancesRequest} {@link DescribeEKSContainerInstancesResponse} */
  DescribeEKSContainerInstances(data?: DescribeEKSContainerInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEKSContainerInstancesResponse>;
  /** 查询边缘容器集群可用的自定义参数 {@link DescribeEdgeAvailableExtraArgsRequest} {@link DescribeEdgeAvailableExtraArgsResponse} */
  DescribeEdgeAvailableExtraArgs(data?: DescribeEdgeAvailableExtraArgsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeAvailableExtraArgsResponse>;
  /** 获取边缘容器CVM实例相关信息 {@link DescribeEdgeCVMInstancesRequest} {@link DescribeEdgeCVMInstancesResponse} */
  DescribeEdgeCVMInstances(data: DescribeEdgeCVMInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeCVMInstancesResponse>;
  /** 查询边缘集群自定义参数 {@link DescribeEdgeClusterExtraArgsRequest} {@link DescribeEdgeClusterExtraArgsResponse} */
  DescribeEdgeClusterExtraArgs(data: DescribeEdgeClusterExtraArgsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeClusterExtraArgsResponse>;
  /** 查询边缘计算集群的节点信息 {@link DescribeEdgeClusterInstancesRequest} {@link DescribeEdgeClusterInstancesResponse} */
  DescribeEdgeClusterInstances(data: DescribeEdgeClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeClusterInstancesResponse>;
  /** 查询边缘集群升级信息 {@link DescribeEdgeClusterUpgradeInfoRequest} {@link DescribeEdgeClusterUpgradeInfoResponse} */
  DescribeEdgeClusterUpgradeInfo(data: DescribeEdgeClusterUpgradeInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeClusterUpgradeInfoResponse>;
  /** 查询边缘集群日志开关列表 {@link DescribeEdgeLogSwitchesRequest} {@link DescribeEdgeLogSwitchesResponse} */
  DescribeEdgeLogSwitches(data: DescribeEdgeLogSwitchesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEdgeLogSwitchesResponse>;
  /** 查询容器实例日志 {@link DescribeEksContainerInstanceLogRequest} {@link DescribeEksContainerInstanceLogResponse} */
  DescribeEksContainerInstanceLog(data: DescribeEksContainerInstanceLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEksContainerInstanceLogResponse>;
  /** 查询开启vpc-cni异步任务的进度 {@link DescribeEnableVpcCniProgressRequest} {@link DescribeEnableVpcCniProgressResponse} */
  DescribeEnableVpcCniProgress(data: DescribeEnableVpcCniProgressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEnableVpcCniProgressResponse>;
  /** 查询信息加密状态 {@link DescribeEncryptionStatusRequest} {@link DescribeEncryptionStatusResponse} */
  DescribeEncryptionStatus(data?: DescribeEncryptionStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeEncryptionStatusResponse>;
  /** 查询已经存在的节点 {@link DescribeExistedInstancesRequest} {@link DescribeExistedInstancesResponse} */
  DescribeExistedInstances(data?: DescribeExistedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExistedInstancesResponse>;
  /** 获取导入第三方集群YAML定义 {@link DescribeExternalClusterSpecRequest} {@link DescribeExternalClusterSpecResponse} */
  DescribeExternalClusterSpec(data: DescribeExternalClusterSpecRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeExternalClusterSpecResponse>;
  /** 查询镜像缓存信息 {@link DescribeImageCachesRequest} {@link DescribeImageCachesResponse} */
  DescribeImageCaches(data?: DescribeImageCachesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageCachesResponse>;
  /** 获取镜像信息 {@link DescribeImagesRequest} {@link DescribeImagesResponse} */
  DescribeImages(data?: DescribeImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImagesResponse>;
  /** 获取关联目标集群的实例列表 {@link DescribePrometheusAgentInstancesRequest} {@link DescribePrometheusAgentInstancesResponse} */
  DescribePrometheusAgentInstances(data: DescribePrometheusAgentInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusAgentInstancesResponse>;
  /** 获取被关联集群列表 {@link DescribePrometheusAgentsRequest} {@link DescribePrometheusAgentsResponse} */
  DescribePrometheusAgents(data: DescribePrometheusAgentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusAgentsResponse>;
  /** 获取告警历史 {@link DescribePrometheusAlertHistoryRequest} {@link DescribePrometheusAlertHistoryResponse} */
  DescribePrometheusAlertHistory(data: DescribePrometheusAlertHistoryRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusAlertHistoryResponse>;
  /** 获取2.0实例告警策略列表 {@link DescribePrometheusAlertPolicyRequest} {@link DescribePrometheusAlertPolicyResponse} */
  DescribePrometheusAlertPolicy(data: DescribePrometheusAlertPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusAlertPolicyResponse>;
  /** 获取告警规则列表 {@link DescribePrometheusAlertRuleRequest} {@link DescribePrometheusAlertRuleResponse} */
  DescribePrometheusAlertRule(data: DescribePrometheusAlertRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusAlertRuleResponse>;
  /** 获取TMP实例关联集群列表 {@link DescribePrometheusClusterAgentsRequest} {@link DescribePrometheusClusterAgentsResponse} */
  DescribePrometheusClusterAgents(data: DescribePrometheusClusterAgentsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusClusterAgentsResponse>;
  /** 拉取Prometheus配置 {@link DescribePrometheusConfigRequest} {@link DescribePrometheusConfigResponse} */
  DescribePrometheusConfig(data: DescribePrometheusConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusConfigResponse>;
  /** 获得实例级别抓取配置 {@link DescribePrometheusGlobalConfigRequest} {@link DescribePrometheusGlobalConfigResponse} */
  DescribePrometheusGlobalConfig(data: DescribePrometheusGlobalConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusGlobalConfigResponse>;
  /** 查询全局告警通知渠道 {@link DescribePrometheusGlobalNotificationRequest} {@link DescribePrometheusGlobalNotificationResponse} */
  DescribePrometheusGlobalNotification(data: DescribePrometheusGlobalNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusGlobalNotificationResponse>;
  /** 获取实例详细信息 {@link DescribePrometheusInstanceRequest} {@link DescribePrometheusInstanceResponse} */
  DescribePrometheusInstance(data: DescribePrometheusInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusInstanceResponse>;
  /** 获取2.0实例初始化任务状态 {@link DescribePrometheusInstanceInitStatusRequest} {@link DescribePrometheusInstanceInitStatusResponse} */
  DescribePrometheusInstanceInitStatus(data: DescribePrometheusInstanceInitStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusInstanceInitStatusResponse>;
  /** 获取2.0实例列表 {@link DescribePrometheusInstancesOverviewRequest} {@link DescribePrometheusInstancesOverviewResponse} */
  DescribePrometheusInstancesOverview(data?: DescribePrometheusInstancesOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusInstancesOverviewResponse>;
  /** 获取实例列表 {@link DescribePrometheusOverviewsRequest} {@link DescribePrometheusOverviewsResponse} */
  DescribePrometheusOverviews(data?: DescribePrometheusOverviewsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusOverviewsResponse>;
  /** 获取聚合规则列表，包含关联集群内的资源 {@link DescribePrometheusRecordRulesRequest} {@link DescribePrometheusRecordRulesResponse} */
  DescribePrometheusRecordRules(data: DescribePrometheusRecordRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusRecordRulesResponse>;
  /** 获取targets信息 {@link DescribePrometheusTargetsRequest} {@link DescribePrometheusTargetsResponse} */
  DescribePrometheusTargets(data: DescribePrometheusTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusTargetsResponse>;
  /** 拉取模板列表 {@link DescribePrometheusTempRequest} {@link DescribePrometheusTempResponse} */
  DescribePrometheusTemp(data?: DescribePrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusTempResponse>;
  /** 获取模板关联实例信息 {@link DescribePrometheusTempSyncRequest} {@link DescribePrometheusTempSyncResponse} */
  DescribePrometheusTempSync(data: DescribePrometheusTempSyncRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusTempSyncResponse>;
  /** 获取模板同步信息 {@link DescribePrometheusTemplateSyncRequest} {@link DescribePrometheusTemplateSyncResponse} */
  DescribePrometheusTemplateSync(data: DescribePrometheusTemplateSyncRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusTemplateSyncResponse>;
  /** 模板列表 {@link DescribePrometheusTemplatesRequest} {@link DescribePrometheusTemplatesResponse} */
  DescribePrometheusTemplates(data?: DescribePrometheusTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrometheusTemplatesResponse>;
  /** 查询地域列表 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 获取集群资源使用量 {@link DescribeResourceUsageRequest} {@link DescribeResourceUsageResponse} */
  DescribeResourceUsage(data: DescribeResourceUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResourceUsageResponse>;
  /** 查询路由表冲突列表 {@link DescribeRouteTableConflictsRequest} {@link DescribeRouteTableConflictsResponse} */
  DescribeRouteTableConflicts(data: DescribeRouteTableConflictsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteTableConflictsResponse>;
  /** 获取边缘计算集群的认证信息 {@link DescribeTKEEdgeClusterCredentialRequest} {@link DescribeTKEEdgeClusterCredentialResponse} */
  DescribeTKEEdgeClusterCredential(data: DescribeTKEEdgeClusterCredentialRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTKEEdgeClusterCredentialResponse>;
  /** 查询边缘计算集群状态 {@link DescribeTKEEdgeClusterStatusRequest} {@link DescribeTKEEdgeClusterStatusResponse} */
  DescribeTKEEdgeClusterStatus(data: DescribeTKEEdgeClusterStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTKEEdgeClusterStatusResponse>;
  /** 查询边缘集群列表 {@link DescribeTKEEdgeClustersRequest} {@link DescribeTKEEdgeClustersResponse} */
  DescribeTKEEdgeClusters(data?: DescribeTKEEdgeClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTKEEdgeClustersResponse>;
  /** 获取边缘计算外部访问的kubeconfig {@link DescribeTKEEdgeExternalKubeconfigRequest} {@link DescribeTKEEdgeExternalKubeconfigResponse} */
  DescribeTKEEdgeExternalKubeconfig(data: DescribeTKEEdgeExternalKubeconfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTKEEdgeExternalKubeconfigResponse>;
  /** 获取边缘脚本链接 {@link DescribeTKEEdgeScriptRequest} {@link DescribeTKEEdgeScriptResponse} */
  DescribeTKEEdgeScript(data: DescribeTKEEdgeScriptRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTKEEdgeScriptResponse>;
  /** 集群版本信息 {@link DescribeVersionsRequest} {@link DescribeVersionsResponse} */
  DescribeVersions(data?: DescribeVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVersionsResponse>;
  /** 查询机型可支持的最大VPC-CNI模式Pod数量 {@link DescribeVpcCniPodLimitsRequest} {@link DescribeVpcCniPodLimitsResponse} */
  DescribeVpcCniPodLimits(data?: DescribeVpcCniPodLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcCniPodLimitsResponse>;
  /** 关闭集群审计 {@link DisableClusterAuditRequest} {@link DisableClusterAuditResponse} */
  DisableClusterAudit(data: DisableClusterAuditRequest, config?: AxiosRequestConfig): AxiosPromise<DisableClusterAuditResponse>;
  /** 关闭集群删除保护 {@link DisableClusterDeletionProtectionRequest} {@link DisableClusterDeletionProtectionResponse} */
  DisableClusterDeletionProtection(data: DisableClusterDeletionProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<DisableClusterDeletionProtectionResponse>;
  /** 关闭加密信息保护 {@link DisableEncryptionProtectionRequest} {@link DisableEncryptionProtectionResponse} */
  DisableEncryptionProtection(data?: DisableEncryptionProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<DisableEncryptionProtectionResponse>;
  /** 关闭事件持久化功能 {@link DisableEventPersistenceRequest} {@link DisableEventPersistenceResponse} */
  DisableEventPersistence(data: DisableEventPersistenceRequest, config?: AxiosRequestConfig): AxiosPromise<DisableEventPersistenceResponse>;
  /** 关闭附加的VPC-CNI网络能力 {@link DisableVpcCniNetworkTypeRequest} {@link DisableVpcCniNetworkTypeResponse} */
  DisableVpcCniNetworkType(data: DisableVpcCniNetworkTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DisableVpcCniNetworkTypeResponse>;
  /** 驱逐虚拟节点 {@link DrainClusterVirtualNodeRequest} {@link DrainClusterVirtualNodeResponse} */
  DrainClusterVirtualNode(data: DrainClusterVirtualNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DrainClusterVirtualNodeResponse>;
  /** 开启集群审计 {@link EnableClusterAuditRequest} {@link EnableClusterAuditResponse} */
  EnableClusterAudit(data: EnableClusterAuditRequest, config?: AxiosRequestConfig): AxiosPromise<EnableClusterAuditResponse>;
  /** 启用集群删除保护 {@link EnableClusterDeletionProtectionRequest} {@link EnableClusterDeletionProtectionResponse} */
  EnableClusterDeletionProtection(data: EnableClusterDeletionProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<EnableClusterDeletionProtectionResponse>;
  /** 开启加密数据保护 {@link EnableEncryptionProtectionRequest} {@link EnableEncryptionProtectionResponse} */
  EnableEncryptionProtection(data?: EnableEncryptionProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<EnableEncryptionProtectionResponse>;
  /** 开启事件持久化功能 {@link EnableEventPersistenceRequest} {@link EnableEventPersistenceResponse} */
  EnableEventPersistence(data: EnableEventPersistenceRequest, config?: AxiosRequestConfig): AxiosPromise<EnableEventPersistenceResponse>;
  /** 开启vpc-cni容器网络能力 {@link EnableVpcCniNetworkTypeRequest} {@link EnableVpcCniNetworkTypeResponse} */
  EnableVpcCniNetworkType(data: EnableVpcCniNetworkTypeRequest, config?: AxiosRequestConfig): AxiosPromise<EnableVpcCniNetworkTypeResponse>;
  /** 操作TKE集群的addon {@link ForwardApplicationRequestV3Request} {@link ForwardApplicationRequestV3Response} */
  ForwardApplicationRequestV3(data: ForwardApplicationRequestV3Request, config?: AxiosRequestConfig): AxiosPromise<ForwardApplicationRequestV3Response>;
  /** 操作TKEEdge集群的addon {@link ForwardTKEEdgeApplicationRequestV3Request} {@link ForwardTKEEdgeApplicationRequestV3Response} */
  ForwardTKEEdgeApplicationRequestV3(data: ForwardTKEEdgeApplicationRequestV3Request, config?: AxiosRequestConfig): AxiosPromise<ForwardTKEEdgeApplicationRequestV3Response>;
  /** 获取集群规模价格 {@link GetClusterLevelPriceRequest} {@link GetClusterLevelPriceResponse} */
  GetClusterLevelPrice(data: GetClusterLevelPriceRequest, config?: AxiosRequestConfig): AxiosPromise<GetClusterLevelPriceResponse>;
  /** 查询匹配的镜像缓存 {@link GetMostSuitableImageCacheRequest} {@link GetMostSuitableImageCacheResponse} */
  GetMostSuitableImageCache(data: GetMostSuitableImageCacheRequest, config?: AxiosRequestConfig): AxiosPromise<GetMostSuitableImageCacheResponse>;
  /** 获取TKE支持的App列表 {@link GetTkeAppChartListRequest} {@link GetTkeAppChartListResponse} */
  GetTkeAppChartList(data?: GetTkeAppChartListRequest, config?: AxiosRequestConfig): AxiosPromise<GetTkeAppChartListResponse>;
  /** 获得节点升级当前的进度 {@link GetUpgradeInstanceProgressRequest} {@link GetUpgradeInstanceProgressResponse} */
  GetUpgradeInstanceProgress(data: GetUpgradeInstanceProgressRequest, config?: AxiosRequestConfig): AxiosPromise<GetUpgradeInstanceProgressResponse>;
  /** 安装addon {@link InstallAddonRequest} {@link InstallAddonResponse} */
  InstallAddon(data: InstallAddonRequest, config?: AxiosRequestConfig): AxiosPromise<InstallAddonResponse>;
  /** 安装边缘日志采集组件 {@link InstallEdgeLogAgentRequest} {@link InstallEdgeLogAgentResponse} */
  InstallEdgeLogAgent(data: InstallEdgeLogAgentRequest, config?: AxiosRequestConfig): AxiosPromise<InstallEdgeLogAgentResponse>;
  /** 安装日志采集组件 {@link InstallLogAgentRequest} {@link InstallLogAgentResponse} */
  InstallLogAgent(data: InstallLogAgentRequest, config?: AxiosRequestConfig): AxiosPromise<InstallLogAgentResponse>;
  /** 查询指定集群的巡检结果信息 {@link ListClusterInspectionResultsRequest} {@link ListClusterInspectionResultsResponse} */
  ListClusterInspectionResults(data?: ListClusterInspectionResultsRequest, config?: AxiosRequestConfig): AxiosPromise<ListClusterInspectionResultsResponse>;
  /** 查询集群巡检结果历史列表 {@link ListClusterInspectionResultsItemsRequest} {@link ListClusterInspectionResultsItemsResponse} */
  ListClusterInspectionResultsItems(data: ListClusterInspectionResultsItemsRequest, config?: AxiosRequestConfig): AxiosPromise<ListClusterInspectionResultsItemsResponse>;
  /** 修改集群伸缩组属性 {@link ModifyClusterAsGroupAttributeRequest} {@link ModifyClusterAsGroupAttributeResponse} */
  ModifyClusterAsGroupAttribute(data: ModifyClusterAsGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterAsGroupAttributeResponse>;
  /** 修改集群弹性伸缩属性 {@link ModifyClusterAsGroupOptionAttributeRequest} {@link ModifyClusterAsGroupOptionAttributeResponse} */
  ModifyClusterAsGroupOptionAttribute(data: ModifyClusterAsGroupOptionAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterAsGroupOptionAttributeResponse>;
  /** 修改集群属性 {@link ModifyClusterAttributeRequest} {@link ModifyClusterAttributeResponse} */
  ModifyClusterAttribute(data: ModifyClusterAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterAttributeResponse>;
  /** 修改集群认证配置 {@link ModifyClusterAuthenticationOptionsRequest} {@link ModifyClusterAuthenticationOptionsResponse} */
  ModifyClusterAuthenticationOptions(data: ModifyClusterAuthenticationOptionsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterAuthenticationOptionsResponse>;
  /** 修改托管集群外网端口的安全策略 {@link ModifyClusterEndpointSPRequest} {@link ModifyClusterEndpointSPResponse} */
  ModifyClusterEndpointSP(data: ModifyClusterEndpointSPRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterEndpointSPResponse>;
  /** 编辑节点池 {@link ModifyClusterNodePoolRequest} {@link ModifyClusterNodePoolResponse} */
  ModifyClusterNodePool(data: ModifyClusterNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterNodePoolResponse>;
  /** 修改虚拟节点池 {@link ModifyClusterVirtualNodePoolRequest} {@link ModifyClusterVirtualNodePoolResponse} */
  ModifyClusterVirtualNodePool(data: ModifyClusterVirtualNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyClusterVirtualNodePoolResponse>;
  /** 修改节点池关联伸缩组的期望实例数 {@link ModifyNodePoolDesiredCapacityAboutAsgRequest} {@link ModifyNodePoolDesiredCapacityAboutAsgResponse} */
  ModifyNodePoolDesiredCapacityAboutAsg(data: ModifyNodePoolDesiredCapacityAboutAsgRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNodePoolDesiredCapacityAboutAsgResponse>;
  /** 修改节点池的机型配置 {@link ModifyNodePoolInstanceTypesRequest} {@link ModifyNodePoolInstanceTypesResponse} */
  ModifyNodePoolInstanceTypes(data: ModifyNodePoolInstanceTypesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNodePoolInstanceTypesResponse>;
  /** 修改被关联集群的external labels {@link ModifyPrometheusAgentExternalLabelsRequest} {@link ModifyPrometheusAgentExternalLabelsResponse} */
  ModifyPrometheusAgentExternalLabels(data: ModifyPrometheusAgentExternalLabelsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusAgentExternalLabelsResponse>;
  /** 修改2.0实例告警策略 {@link ModifyPrometheusAlertPolicyRequest} {@link ModifyPrometheusAlertPolicyResponse} */
  ModifyPrometheusAlertPolicy(data: ModifyPrometheusAlertPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusAlertPolicyResponse>;
  /** 修改告警规则 {@link ModifyPrometheusAlertRuleRequest} {@link ModifyPrometheusAlertRuleResponse} */
  ModifyPrometheusAlertRule(data: ModifyPrometheusAlertRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusAlertRuleResponse>;
  /** 修改prometheus配置 {@link ModifyPrometheusConfigRequest} {@link ModifyPrometheusConfigResponse} */
  ModifyPrometheusConfig(data: ModifyPrometheusConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusConfigResponse>;
  /** 修改全局告警通知渠道 {@link ModifyPrometheusGlobalNotificationRequest} {@link ModifyPrometheusGlobalNotificationResponse} */
  ModifyPrometheusGlobalNotification(data: ModifyPrometheusGlobalNotificationRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusGlobalNotificationResponse>;
  /** 通过yaml的方式修改Prometheus聚合实例 {@link ModifyPrometheusRecordRuleYamlRequest} {@link ModifyPrometheusRecordRuleYamlResponse} */
  ModifyPrometheusRecordRuleYaml(data: ModifyPrometheusRecordRuleYamlRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusRecordRuleYamlResponse>;
  /** 修改模板实例 {@link ModifyPrometheusTempRequest} {@link ModifyPrometheusTempResponse} */
  ModifyPrometheusTemp(data: ModifyPrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusTempResponse>;
  /** 修改模板 {@link ModifyPrometheusTemplateRequest} {@link ModifyPrometheusTemplateResponse} */
  ModifyPrometheusTemplate(data: ModifyPrometheusTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrometheusTemplateResponse>;
  /** 移出节点池节点 {@link RemoveNodeFromNodePoolRequest} {@link RemoveNodeFromNodePoolResponse} */
  RemoveNodeFromNodePool(data: RemoveNodeFromNodePoolRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveNodeFromNodePoolResponse>;
  /** 重启容器实例 {@link RestartEKSContainerInstancesRequest} {@link RestartEKSContainerInstancesResponse} */
  RestartEKSContainerInstances(data: RestartEKSContainerInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RestartEKSContainerInstancesResponse>;
  /** 集群回滚应用版本 {@link RollbackClusterReleaseRequest} {@link RollbackClusterReleaseResponse} */
  RollbackClusterRelease(data: RollbackClusterReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<RollbackClusterReleaseResponse>;
  /** 初始化TMP实例 {@link RunPrometheusInstanceRequest} {@link RunPrometheusInstanceResponse} */
  RunPrometheusInstance(data: RunPrometheusInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<RunPrometheusInstanceResponse>;
  /** 缩容独立集群master节点 {@link ScaleInClusterMasterRequest} {@link ScaleInClusterMasterResponse} */
  ScaleInClusterMaster(data: ScaleInClusterMasterRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleInClusterMasterResponse>;
  /** 扩容独立集群master节点 {@link ScaleOutClusterMasterRequest} {@link ScaleOutClusterMasterResponse} */
  ScaleOutClusterMaster(data: ScaleOutClusterMasterRequest, config?: AxiosRequestConfig): AxiosPromise<ScaleOutClusterMasterResponse>;
  /** 节点池节点设置移出保护 {@link SetNodePoolNodeProtectionRequest} {@link SetNodePoolNodeProtectionResponse} */
  SetNodePoolNodeProtection(data: SetNodePoolNodeProtectionRequest, config?: AxiosRequestConfig): AxiosPromise<SetNodePoolNodeProtectionResponse>;
  /** 同步模板 {@link SyncPrometheusTempRequest} {@link SyncPrometheusTempResponse} */
  SyncPrometheusTemp(data: SyncPrometheusTempRequest, config?: AxiosRequestConfig): AxiosPromise<SyncPrometheusTempResponse>;
  /** 同步模板到实例或者集群 {@link SyncPrometheusTemplateRequest} {@link SyncPrometheusTemplateResponse} */
  SyncPrometheusTemplate(data: SyncPrometheusTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<SyncPrometheusTemplateResponse>;
  /** 集群删除应用 {@link UninstallClusterReleaseRequest} {@link UninstallClusterReleaseResponse} */
  UninstallClusterRelease(data: UninstallClusterReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<UninstallClusterReleaseResponse>;
  /** 卸载边缘日志采集组件 {@link UninstallEdgeLogAgentRequest} {@link UninstallEdgeLogAgentResponse} */
  UninstallEdgeLogAgent(data: UninstallEdgeLogAgentRequest, config?: AxiosRequestConfig): AxiosPromise<UninstallEdgeLogAgentResponse>;
  /** 卸载日志采集组件 {@link UninstallLogAgentRequest} {@link UninstallLogAgentResponse} */
  UninstallLogAgent(data: UninstallLogAgentRequest, config?: AxiosRequestConfig): AxiosPromise<UninstallLogAgentResponse>;
  /** 更新addon {@link UpdateAddonRequest} {@link UpdateAddonResponse} */
  UpdateAddon(data: UpdateAddonRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateAddonResponse>;
  /** 更新集群的kubeconfig信息 {@link UpdateClusterKubeconfigRequest} {@link UpdateClusterKubeconfigResponse} */
  UpdateClusterKubeconfig(data: UpdateClusterKubeconfigRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateClusterKubeconfigResponse>;
  /** 升级集群 {@link UpdateClusterVersionRequest} {@link UpdateClusterVersionResponse} */
  UpdateClusterVersion(data: UpdateClusterVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateClusterVersionResponse>;
  /** 修改弹性集群EKS {@link UpdateEKSClusterRequest} {@link UpdateEKSClusterResponse} */
  UpdateEKSCluster(data: UpdateEKSClusterRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEKSClusterResponse>;
  /** 更新容器实例 {@link UpdateEKSContainerInstanceRequest} {@link UpdateEKSContainerInstanceResponse} */
  UpdateEKSContainerInstance(data: UpdateEKSContainerInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEKSContainerInstanceResponse>;
  /** 升级边缘集群 {@link UpdateEdgeClusterVersionRequest} {@link UpdateEdgeClusterVersionResponse} */
  UpdateEdgeClusterVersion(data: UpdateEdgeClusterVersionRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateEdgeClusterVersionResponse>;
  /** 更新镜像缓存 {@link UpdateImageCacheRequest} {@link UpdateImageCacheResponse} */
  UpdateImageCache(data: UpdateImageCacheRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateImageCacheResponse>;
  /** 修改边缘计算的集群 {@link UpdateTKEEdgeClusterRequest} {@link UpdateTKEEdgeClusterResponse} */
  UpdateTKEEdgeCluster(data: UpdateTKEEdgeClusterRequest, config?: AxiosRequestConfig): AxiosPromise<UpdateTKEEdgeClusterResponse>;
  /** 集群节点升级 {@link UpgradeClusterInstancesRequest} {@link UpgradeClusterInstancesResponse} */
  UpgradeClusterInstances(data: UpgradeClusterInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeClusterInstancesResponse>;
  /** 集群升级应用 {@link UpgradeClusterReleaseRequest} {@link UpgradeClusterReleaseResponse} */
  UpgradeClusterRelease(data: UpgradeClusterReleaseRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeClusterReleaseResponse>;
}

export declare type Versions = ["2018-05-25"];

export default Tke;
