/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 计算环境的创建或销毁活动 */
declare interface Activity {
  /** 活动ID */
  ActivityId?: string;
  /** 计算节点ID */
  ComputeNodeId?: string;
  /** 计算节点活动类型，创建或者销毁 */
  ComputeNodeActivityType?: string;
  /** 计算环境ID */
  EnvId?: string;
  /** 起因 */
  Cause?: string;
  /** 活动状态。取值范围：SUBMITTED：已提交PROCESSING：处理中SUCCEED：成功FAILED：失败 */
  ActivityState?: string;
  /** 状态原因 */
  StateReason?: string;
  /** 活动开始时间 */
  StartTime?: string;
  /** 活动结束时间 */
  EndTime?: string;
  /** 云服务器实例ID */
  InstanceId?: string;
}

/** agent运行模式 */
declare interface AgentRunningMode {
  /** 场景类型，支持WINDOWS */
  Scene: string;
  /** 运行Agent的User */
  User: string;
  /** 运行Agent的Session */
  Session: string;
}

/** 计算环境 */
declare interface AnonymousComputeEnv {
  /** 计算环境管理类型 */
  EnvType?: string;
  /** 计算环境具体参数 */
  EnvData?: EnvData;
  /** 数据盘挂载选项 */
  MountDataDisks?: MountDataDisk[];
  /** agent运行模式，适用于Windows系统 */
  AgentRunningMode?: AgentRunningMode;
}

/** 应用程序信息 */
declare interface Application {
  /** 应用程序的交付方式，包括PACKAGE、LOCAL 两种取值，分别指远程存储的软件包、计算环境本地。 */
  DeliveryForm: string;
  /** 松耦合任务执行命令。与Commands不能同时指定，一般使用Command字段提交任务。 */
  Command?: string;
  /** 应用程序软件包的远程存储路径 */
  PackagePath?: string;
  /** 应用使用Docker的相关配置。在使用Docker配置的情况下，DeliveryForm 为 LOCAL 表示直接使用Docker镜像内部的应用软件，通过Docker方式运行；DeliveryForm 为 PACKAGE，表示将远程应用包注入到Docker镜像后，通过Docker方式运行。为避免Docker不同版本的兼容性问题，Docker安装包及相关依赖由Batch统一负责，对于已安装Docker的自定义镜像，请卸载后再使用Docker特性。 */
  Docker?: Docker;
  /** 紧耦合任务执行命令信息。与Command不能同时指定。Command和Commands必须指定一个。 */
  Commands?: CommandLine[];
}

/** 授权认证信息 */
declare interface Authentication {
  /** 授权场景，例如COS */
  Scene: string;
  /** SecretId */
  SecretId: string;
  /** SecretKey */
  SecretKey: string;
}

/** 任务执行信息描述。 */
declare interface CommandLine {
  /** 任务执行命令。 */
  Command: string;
}

/** 计算环境创建信息。 */
declare interface ComputeEnvCreateInfo {
  /** 计算环境 ID */
  EnvId?: string;
  /** 计算环境名称 */
  EnvName?: string;
  /** 计算环境描述 */
  EnvDescription?: string;
  /** 计算环境类型，仅支持“MANAGED”类型 */
  EnvType?: string;
  /** 计算环境参数 */
  EnvData?: EnvData;
  /** 数据盘挂载选项 */
  MountDataDisks?: MountDataDisk[];
  /** 输入映射 */
  InputMappings?: InputMapping[];
  /** 授权信息 */
  Authentications?: Authentication[];
  /** 通知信息 */
  Notifications?: Notification[];
  /** 计算节点期望个数 */
  DesiredComputeNodeCount?: number;
  /** 计算环境标签列表 */
  Tags?: Tag[];
}

/** 计算环境属性数据 */
declare interface ComputeEnvData {
  /** CVM实例类型列表 */
  InstanceTypes: string[];
}

/** 计算环境信息 */
declare interface ComputeEnvView {
  /** 计算环境ID */
  EnvId?: string;
  /** 计算环境名称 */
  EnvName?: string;
  /** 位置信息 */
  Placement?: Placement;
  /** 创建时间 */
  CreateTime?: string;
  /** 计算节点统计指标 */
  ComputeNodeMetrics?: ComputeNodeMetrics;
  /** 计算环境类型 */
  EnvType?: string;
  /** 计算节点期望个数 */
  DesiredComputeNodeCount?: number;
  /** 计算环境资源类型，当前为CVM和CPM（黑石） */
  ResourceType?: string;
  /** 下一步动作 */
  NextAction?: string;
  /** 用户添加到计算环境中的计算节点个数 */
  AttachedComputeNodeCount?: number;
  /** 计算环境绑定的标签列表。 */
  Tags?: Tag[] | null;
}

/** 计算节点 */
declare interface ComputeNode {
  /** 计算节点ID */
  ComputeNodeId?: string;
  /** 计算节点实例ID，对于CVM场景，即为CVM的InstanceId */
  ComputeNodeInstanceId?: string;
  /** 计算节点状态。取值范围：PENDING：表示创建中SUBMITTED：表示已提交创建CREATING：表示创建中CREATED：表示创建完成CREATION_FAILED：表示创建失败。RUNNING：表示运行中。ABNORMAL：表示节点异常。DELETING：表示删除中。 */
  ComputeNodeState?: string;
  /** CPU核数 */
  Cpu?: number;
  /** 内存容量，单位GiB */
  Mem?: number;
  /** 资源创建完成时间 */
  ResourceCreatedTime?: string;
  /** 计算节点运行 TaskInstance 可用容量。0表示计算节点忙碌。 */
  TaskInstanceNumAvailable?: number;
  /** Batch Agent 版本 */
  AgentVersion?: string;
  /** 实例内网IP */
  PrivateIpAddresses?: string[];
  /** 实例公网IP */
  PublicIpAddresses?: string[];
  /** 计算环境资源类型，当前为CVM和CPM（黑石） */
  ResourceType?: string;
  /** 计算环境资源来源。BATCH_CREATED：由批量计算创建的实例资源。USER_ATTACHED：用户添加到计算环境中的实例资源。 */
  ResourceOrigin?: string;
}

/** 计算节点统计指标 */
declare interface ComputeNodeMetrics {
  /** 已经完成提交的计算节点数量 */
  SubmittedCount?: number;
  /** 创建中的计算节点数量 */
  CreatingCount?: number;
  /** 创建失败的计算节点数量 */
  CreationFailedCount?: number;
  /** 完成创建的计算节点数量 */
  CreatedCount?: number;
  /** 运行中的计算节点数量 */
  RunningCount?: number;
  /** 销毁中的计算节点数量 */
  DeletingCount?: number;
  /** 异常的计算节点数量 */
  AbnormalCount?: number;
}

/** 描述了数据盘的信息 */
declare interface DataDisk {
  /** 数据盘大小，单位：GiB。最小调整步长为10GiB，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。 */
  DiskSize: number;
  /** 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：LOCAL_BASIC：本地硬盘 LOCAL_SSD：本地SSD硬盘LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定CLOUD_BASIC：普通云硬盘 CLOUD_PREMIUM：高性能云硬盘CLOUD_SSD：SSD云硬盘 CLOUD_HSSD：增强型SSD云硬盘 CLOUD_TSSD：极速型SSD云硬盘CLOUD_BSSD：通用型SSD云硬盘默认取值：LOCAL_BASIC该参数对`ResizeInstanceDisk`接口无效。 */
  DiskType?: string;
  /** 数据盘ID。该参数目前仅用于`DescribeInstances`等查询类接口的返回参数，不可用于`RunInstances`等写接口的入参。 */
  DiskId?: string;
  /** 数据盘是否随子机销毁。取值范围：true：子机销毁时，销毁数据盘，只支持按小时后付费云盘false：子机销毁时，保留数据盘默认取值：true 该参数目前仅用于 `RunInstances` 接口。 */
  DeleteWithInstance?: boolean;
  /** 数据盘快照ID。选择的数据盘快照大小需小于数据盘大小。 */
  SnapshotId?: string;
  /** 数据盘是否加密。取值范围：true：加密false：不加密默认取值：false该参数目前仅用于 `RunInstances` 接口。 */
  Encrypt?: boolean;
  /** 自定义CMK对应的ID，取值为UUID或者类似kms-abcd1234。用于加密云盘。该参数目前仅用于 `RunInstances` 接口。 */
  KmsKeyId?: string | null;
  /** 云硬盘性能，单位：MiB/s。使用此参数可给云硬盘购买额外的性能。当前仅支持极速型云盘（CLOUD_TSSD）和增强型SSD云硬盘（CLOUD_HSSD） */
  ThroughputPerformance?: number | null;
  /** 所属的独享集群ID。 */
  CdcId?: string | null;
  /** 突发性能 注：内测中。 */
  BurstPerformance?: boolean;
  /** 磁盘名称，长度不超过128 个字符。 */
  DiskName?: string;
}

/** 监控采集的数据。 */
declare interface DataPointView {
  /** 监控数据采集的时间 */
  Timestamps?: number[];
  /** 监控指标数据; 如果涉及到多个实例的监控数据的间隙时间，取值会为null */
  Values?: number[];
}

/** 依赖关系 */
declare interface Dependence {
  /** 依赖关系的起点任务名称 */
  StartTask: string;
  /** 依赖关系的终点任务名称 */
  EndTask: string;
}

/** Docker容器信息 */
declare interface Docker {
  /** Docker Hub填写“[user/repo]:[tag]”，Tencent Registry填写“ccr.ccs.tencentyun.com/[namespace/repo]:[tag]” */
  Image: string;
  /** Docker Hub 用户名或 Tencent Registry 用户名；公共镜像可不填写此参数。 */
  User?: string;
  /** Docker Hub 密码或 Tencent Registry 密码；公共镜像可不填写此参数。 */
  Password?: string;
  /** Docker Hub 可以不填，但确保具有公网访问能力。或者是 Tencent Registry 服务地址“ccr.ccs.tencentyun.com” */
  Server?: string;
  /** 拉取Docker镜像重试次数。默认值：0。 */
  MaxRetryCount?: number;
  /** 拉取Docker镜像失败时延迟时间。单位：秒。 */
  DelayOnRetry?: number;
  /** Docker命令运行参数。 */
  DockerRunOption?: string;
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

/** 计算环境数据 */
declare interface EnvData {
  /** CVM实例类型，不能与InstanceTypes和InstanceTypeOptions同时出现。 */
  InstanceType?: string;
  /** CVM镜像ID */
  ImageId?: string;
  /** 实例系统盘配置信息 */
  SystemDisk?: SystemDisk;
  /** 实例数据盘配置信息 */
  DataDisks?: DataDisk[];
  /** 私有网络相关信息配置，与Zones和VirtualPrivateClouds不能同时指定。 */
  VirtualPrivateCloud?: VirtualPrivateCloud;
  /** 公网带宽相关信息设置 */
  InternetAccessible?: InternetAccessible;
  /** CVM实例显示名称 */
  InstanceName?: string;
  /** 实例登录设置 */
  LoginSettings?: LoginSettings;
  /** 实例所属安全组 */
  SecurityGroupIds?: string[];
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。 */
  EnhancedService?: EnhancedService;
  /** CVM实例计费类型POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 实例的市场相关选项，如竞价实例相关参数 */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  /** CVM实例类型列表，不能与InstanceType和InstanceTypeOptions同时出现。指定该字段后，计算节点按照机型先后顺序依次尝试创建，直到实例创建成功，结束遍历过程。最多支持10个机型。 */
  InstanceTypes?: string[];
  /** CVM实例机型配置。不能与InstanceType和InstanceTypes同时出现。 */
  InstanceTypeOptions?: InstanceTypeOptions;
  /** 可用区列表，支持跨可用区创建CVM实例。与VirtualPrivateCloud和VirtualPrivateClouds不能同时指定。 */
  Zones?: string[];
  /** 私有网络列表，支持跨私有网络创建CVM实例。与VirtualPrivateCloud和Zones不能同时指定。 */
  VirtualPrivateClouds?: VirtualPrivateCloud[];
}

/** 环境变量 */
declare interface EnvVar {
  /** 环境变量名称 */
  Name: string;
  /** 环境变量取值 */
  Value: string;
}

/** 事件配置 */
declare interface EventConfig {
  /** 事件类型，包括：“JOB_RUNNING”：作业运行，适用于"SubmitJob"。“JOB_SUCCEED”：作业成功，适用于"SubmitJob"。“JOB_FAILED”：作业失败，适用于"SubmitJob"。“JOB_FAILED_INTERRUPTED”：作业失败，保留实例，适用于"SubmitJob"。“TASK_RUNNING”：任务运行，适用于"SubmitJob"。“TASK_SUCCEED”：任务成功，适用于"SubmitJob"。“TASK_FAILED”：任务失败，适用于"SubmitJob"。“TASK_FAILED_INTERRUPTED”：任务失败，保留实例，适用于"SubmitJob"。“TASK_INSTANCE_RUNNING”：任务实例运行，适用于"SubmitJob"。“TASK_INSTANCE_SUCCEED”：任务实例成功，适用于"SubmitJob"。“TASK_INSTANCE_FAILED”：任务实例失败，适用于"SubmitJob"。“TASK_INSTANCE_FAILED_INTERRUPTED”：任务实例失败，保留实例，适用于"SubmitJob"。“COMPUTE_ENV_CREATED”：计算环境已创建，适用于"CreateComputeEnv"。“COMPUTE_ENV_DELETED”：计算环境已删除，适用于"CreateComputeEnv"。“COMPUTE_NODE_CREATED”：计算节点已创建，适用于"CreateComputeEnv"和"SubmitJob"。“COMPUTE_NODE_CREATION_FAILED”：计算节点创建失败，适用于"CreateComputeEnv"和"SubmitJob"。“COMPUTE_NODE_RUNNING”：计算节点运行中，适用于"CreateComputeEnv"和"SubmitJob"。“COMPUTE_NODE_ABNORMAL”：计算节点异常，适用于"CreateComputeEnv"和"SubmitJob"。“COMPUTE_NODE_DELETING”：计算节点已删除，适用于"CreateComputeEnv"和"SubmitJob"。 */
  EventName: string;
  /** 自定义键值对 */
  EventVars: EventVar[];
}

/** 自定义键值对 */
declare interface EventVar {
  /** 自定义键 */
  Name: string;
  /** 自定义值 */
  Value: string;
}

/** 扩展数据 */
declare interface Externals {
  /** 释放地址 */
  ReleaseAddress?: boolean;
  /** 不支持的网络类型，取值范围：BASIC：基础网络VPC1.0：私有网络VPC1.0 */
  UnsupportNetworks?: string[];
  /** HDD本地存储属性 */
  StorageBlockAttr?: StorageBlock;
}

/** >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。>> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：```Filters.0.Name=zone&Filters.0.Values.0=ap-guangzhou-1&Filters.1.Name=instance-charge-type&Filters.1.Values.0=PREPAID&Filters.1.Values.1=POSTPAID_BY_HOUR``` */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 输入映射 */
declare interface InputMapping {
  /** 源端路径 */
  SourcePath: string;
  /** 目的端路径 */
  DestinationPath: string;
  /** 挂载配置项参数 */
  MountOptionParameter?: string;
}

/** 描述实例的信息 */
declare interface Instance {
  /** 实例ID，可通过调用接口[DescribeInstances](https://cloud.tencent.com/document/product/213/15728)获取。 */
  InstanceId: string;
  /** 镜像ID，可通过调用接口[DescribeImages](https://cloud.tencent.com/document/product/213/15715)获取。 */
  ImageId?: string;
  /** 实例登录设置。 */
  LoginSettings?: LoginSettings;
}

/** 实例分类列表 */
declare interface InstanceCategoryItem {
  /** 实例类型名 */
  InstanceCategory?: string;
  /** 实例族列表 */
  InstanceFamilySet?: string[];
}

/** 批量计算可用的InstanceTypeConfig信息 */
declare interface InstanceTypeConfig {
  /** 内存容量，单位：`GB`。 */
  Mem?: number;
  /** CPU核数，单位：核。 */
  Cpu?: number;
  /** 实例机型。 */
  InstanceType?: string;
  /** 可用区。 */
  Zone?: string;
  /** 实例机型系列。 */
  InstanceFamily?: string;
}

/** 实例机型配置。 */
declare interface InstanceTypeOptions {
  /** CPU核数。 */
  CPU: number;
  /** 内存值，单位GB。 */
  Memory: number;
  /** 实例机型类别，可选参数：“ALL”、“GENERAL”、“GENERAL_2”、“GENERAL_3”、“COMPUTE”、“COMPUTE_2”和“COMPUTE_3”。默认值“ALL”。 */
  InstanceCategories?: string[];
}

/** 描述实例机型配额信息。 */
declare interface InstanceTypeQuotaItem {
  /** 可用区。 */
  Zone?: string;
  /** 实例机型。 */
  InstanceType?: string;
  /** 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月POSTPAID_BY_HOUR：表示后付费，即按量计费CDHPAID：表示[专用宿主机](https://cloud.tencent.com/document/product/416)付费，即只对`专用宿主机`计费，不对`专用宿主机`上的实例计费。SPOTPAID：表示竞价实例付费。 */
  InstanceChargeType?: string;
  /** 网卡类型，例如：25代表25G网卡 */
  NetworkCard?: number;
  /** 扩展属性。 */
  Externals?: Externals;
  /** 实例的CPU核数，单位：核。 */
  Cpu?: number;
  /** 实例内存容量，单位：`GB`。 */
  Memory?: number;
  /** 实例机型系列。 */
  InstanceFamily?: string;
  /** 机型名称。 */
  TypeName?: string;
  /** 本地磁盘规格列表。当该参数返回为空值时，表示当前情况下无法创建本地盘。 */
  LocalDiskTypeList?: LocalDiskType[];
  /** 实例是否售卖。取值范围： SELL：表示实例可购买SOLD_OUT：表示实例已售罄。 */
  Status?: string;
  /** 实例的售卖价格。 */
  Price?: ItemPrice;
  /** 售罄原因。 */
  SoldOutReason?: string;
  /** 内网带宽，单位Gbps。 */
  InstanceBandwidth?: number;
  /** 网络收发包能力，单位万PPS。 */
  InstancePps?: number;
  /** 本地存储块数量。 */
  StorageBlockAmount?: number;
  /** 处理器型号。 */
  CpuType?: string;
  /** 实例的GPU数量。 */
  Gpu?: number;
  /** 实例的FPGA数量。 */
  Fpga?: number;
  /** 实例备注信息。 */
  Remark?: string;
  /** 实例机型映射的物理GPU卡数，单位：卡。vGPU卡型小于1，直通卡型大于等于1。vGPU是通过分片虚拟化技术，将物理GPU卡重新划分，同一块GPU卡经虚拟化分割后可分配至不同的实例使用。直通卡型会将GPU设备直接挂载给实例使用。 */
  GpuCount?: number;
  /** 实例的CPU主频信息 */
  Frequency?: string;
  /** 描述库存情况。取值范围： EnoughStock：表示对应库存非常充足 NormalStock：表示对应库存供应有保障 UnderStock：表示对应库存即将售罄 WithoutStock：表示对应库存已经售罄 */
  StatusCategory?: string;
}

/** 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等 */
declare interface InternetAccessible {
  /** 网络计费类型。取值范围：BANDWIDTH_PREPAID：预付费按带宽结算TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费BANDWIDTH_PACKAGE：带宽包用户默认取值：非带宽包用户默认与子机付费类型保持一致，比如子机付费类型为预付费，网络计费类型默认为预付费；子机付费类型为后付费，网络计费类型默认为后付费。 */
  InternetChargeType?: string;
  /** 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/12523)。 */
  InternetMaxBandwidthOut?: number;
  /** 是否分配公网IP。取值范围：true：表示分配公网IPfalse：表示不分配公网IP当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。该参数仅在RunInstances接口中作为入参使用。 */
  PublicIpAssigned?: boolean;
  /** 带宽包ID。可通过[ DescribeBandwidthPackages ](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。该参数仅在RunInstances接口中作为入参使用。 */
  BandwidthPackageId?: string;
  /** 线路类型。各种线路类型详情可参考：[EIP 的 IP 地址类型](https://cloud.tencent.com/document/product/1199/41646)。默认值：BGP。- BGP：常规 BGP 线路已开通静态单线IP白名单的用户，可选值： - CMCC：中国移动 - CTCC：中国电信 - CUCC：中国联通注意：仅部分地域支持静态单线IP。示例值：BGP */
  InternetServiceProvider?: string;
  /** 公网 IP 类型。- WanIP：普通公网IP。- HighQualityEIP：精品 IP。仅新加坡和中国香港支持精品IP。- AntiDDoSEIP：高防 IP。仅部分地域支持高防IP，详情可见[弹性公网IP产品概述](https://cloud.tencent.com/document/product/1199/41646)。如需为资源分配公网IPv4地址，请指定公网IPv4地址类型。示例值：WanIP此功能仅部分地区灰度开放，如需使用[请提交工单咨询](https://console.cloud.tencent.com/workorder/category) */
  IPv4AddressType?: string;
  /** 弹性公网 IPv6 类型。- EIPv6：弹性公网 IPv6。- HighQualityEIPv6：精品 IPv6。仅中国香港支持精品IPv6。如需为资源分配IPv6地址，请指定弹性公网IPv6类型。示例值：EIPv6此功能仅部分地区灰度开放，如需使用[请提交工单咨询](https://console.cloud.tencent.com/workorder/category) */
  IPv6AddressType?: string;
  /** 高防包唯一ID，申请高防IP时，该字段必传。示例值：bgp-12345678 */
  AntiDDoSPackageId?: string;
}

/** 描述了单项的价格信息 */
declare interface ItemPrice {
  /** 后续合计费用的原价，后付费模式使用，单位：元。如返回了其他时间区间项，如UnitPriceSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时 */
  UnitPrice?: number;
  /** 后续计价单元，后付费模式使用，可取值范围： HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）：GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。 */
  ChargeUnit?: string;
  /** 预支合计费用的原价，预付费模式使用，单位：元。 */
  OriginalPrice?: number;
  /** 预支合计费用的折扣价，预付费模式使用，单位：元。 */
  DiscountPrice?: number;
  /** 折扣，如20.0代表2折。 */
  Discount?: number;
  /** 后续合计费用的折扣价，后付费模式使用，单位：元如返回了其他时间区间项，如UnitPriceDiscountSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时 */
  UnitPriceDiscount?: number;
  /** 使用时间区间在(96, 360)小时的后续合计费用的原价，后付费模式使用，单位：元。 */
  UnitPriceSecondStep?: number;
  /** 使用时间区间在(96, 360)小时的后续合计费用的折扣价，后付费模式使用，单位：元 */
  UnitPriceDiscountSecondStep?: number;
  /** 使用时间区间在(360, ∞)小时的后续合计费用的原价，后付费模式使用，单位：元。 */
  UnitPriceThirdStep?: number;
  /** 使用时间区间在(360, ∞)小时的后续合计费用的折扣价，后付费模式使用，单位：元 */
  UnitPriceDiscountThirdStep?: number;
  /** 预支三年合计费用的原价，预付费模式使用，单位：元。 */
  OriginalPriceThreeYear?: number;
  /** 预支三年合计费用的折扣价，预付费模式使用，单位：元。 */
  DiscountPriceThreeYear?: number;
  /** 预支三年应用的折扣，如20.0代表2折。 */
  DiscountThreeYear?: number;
  /** 预支五年合计费用的原价，预付费模式使用，单位：元。 */
  OriginalPriceFiveYear?: number;
  /** 预支五年合计费用的折扣价，预付费模式使用，单位：元。 */
  DiscountPriceFiveYear?: number;
  /** 预支五年应用的折扣，如20.0代表2折。 */
  DiscountFiveYear?: number;
  /** 预支一年合计费用的原价，预付费模式使用，单位：元。 */
  OriginalPriceOneYear?: number;
  /** 预支一年合计费用的折扣价，预付费模式使用，单位：元。 */
  DiscountPriceOneYear?: number;
  /** 预支一年应用的折扣，如20.0代表2折。 */
  DiscountOneYear?: number;
}

/** 作业 */
declare interface Job {
  /** 任务信息 */
  Tasks: Task[];
  /** 作业名称; 字符串长度限制60. */
  JobName?: string;
  /** 作业描述；字符串长度限制200. */
  JobDescription?: string;
  /** 作业优先级，任务（Task）和任务实例（TaskInstance）会继承作业优先级；范围0～100，数值越大，优先级越高。 */
  Priority?: number;
  /** 依赖信息 */
  Dependences?: Dependence[];
  /** 通知信息 */
  Notifications?: Notification[];
  /** 对于存在依赖关系的任务中，后序任务执行对于前序任务的依赖条件。取值范围包括 PRE_TASK_SUCCEED，PRE_TASK_AT_LEAST_PARTLY_SUCCEED，PRE_TASK_FINISHED，默认值为PRE_TASK_SUCCEED。 */
  TaskExecutionDependOn?: string;
  /** 表示创建 CVM 失败按照何种策略处理。取值范围包括 FAILED，RUNNABLE。FAILED 表示创建 CVM 失败按照一次执行失败处理，RUNNABLE 表示创建 CVM 失败按照继续等待处理。默认值为FAILED。StateIfCreateCvmFailed对于提交的指定计算环境的作业无效。 */
  StateIfCreateCvmFailed?: string;
  /** 标签列表。通过指定该参数可以支持绑定标签到作业。每个作业最多绑定10个标签。 */
  Tags?: Tag[];
  /** 表示通知信息的通知目标类型。取值范围：CMQ，TDMQ_CMQ。CMQ:表示向腾讯云CMQ发送消息。TDMQ_CMQ：表示向腾讯云TDMQ_CMQ发送消息。默认值为CMQ。注：腾讯云计划于2022年6月前正式下线消息队列 CMQ，建议使用TDMQ_CMQ。参考文档：[CMQ迁移到TDMQ_CMQ](https://cloud.tencent.com/document/product/406/60860) */
  NotificationTarget?: string;
}

/** 作业信息 */
declare interface JobView {
  /** 作业ID；JobId详见[作业列表](https://cloud.tencent.com/document/product/599/15909) */
  JobId?: string;
  /** 作业名称 */
  JobName?: string;
  /** 作业状态:- SUBMITTED：已提交；- PENDING：等待中；- RUNNABLE：可运行；- STARTING：启动中；- RUNNING：运行中；- SUCCEED：成功；- FAILED：失败；- FAILED_INTERRUPTED：失败后保留实例。 */
  JobState?: string;
  /** 作业优先级 */
  Priority?: number;
  /** 位置信息 */
  Placement?: Placement;
  /** 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ */
  CreateTime?: string;
  /** 结束时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ */
  EndTime?: string;
  /** 任务统计指标 */
  TaskMetrics?: TaskMetrics;
  /** 作业绑定的标签列表。 */
  Tags?: Tag[];
}

/** 本地磁盘规格 */
declare interface LocalDiskType {
  /** 本地磁盘类型。 */
  Type?: string;
  /** 本地磁盘属性。 */
  PartitionType?: string;
  /** 本地磁盘最小值。 */
  MinSize?: number;
  /** 本地磁盘最大值。 */
  MaxSize?: number;
  /** 购买时本地盘是否为必选。取值范围：REQUIRED：表示必选OPTIONAL：表示可选。 */
  Required?: string;
}

/** 描述了实例登录相关配置与信息。 */
declare interface LoginSettings {
  /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ' , . ? \/ ]中的特殊符号。 Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & * - + = { } [ ] : ; ' , . ? \/]中的特殊符号。若不指定该参数，则由系统随机生成密码，并通过站内信方式通知到用户。 */
  Password?: string;
  /** 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。当前仅支持购买的时候指定一个密钥。 */
  KeyIds?: string[];
  /** 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：TRUE：表示保持镜像的登录设置FALSE：表示不保持镜像的登录设置默认取值：FALSE。 */
  KeepImageLogin?: string;
}

/** 数据盘挂载选项 */
declare interface MountDataDisk {
  /** 挂载点，Linux系统合法路径，或Windows系统盘符,比如"H:\\" */
  LocalPath: string;
  /** 文件系统类型，Linux系统下支持"EXT3"和"EXT4"两种，默认"EXT3"；Windows系统下仅支持"NTFS" */
  FileSystemType?: string;
}

/** 计算环境 */
declare interface NamedComputeEnv {
  /** 计算环境名称 */
  EnvName: string;
  /** 计算节点期望个数，最大上限2000. */
  DesiredComputeNodeCount: number;
  /** 计算环境描述 */
  EnvDescription?: string;
  /** 计算环境管理类型，枚举如下：MANAGED: 由客户在Batch平台主动创建；THPC_QUEUE: 由THPC平台创建，关联THPC平台的集群队列。 */
  EnvType?: string;
  /** 计算环境具体参数 */
  EnvData?: EnvData;
  /** 数据盘挂载选项 */
  MountDataDisks?: MountDataDisk[];
  /** 授权信息 */
  Authentications?: Authentication[];
  /** 输入映射信息 */
  InputMappings?: InputMapping[];
  /** agent运行模式，适用于Windows系统 */
  AgentRunningMode?: AgentRunningMode;
  /** 通知信息 */
  Notifications?: Notification[];
  /** 非活跃节点处理策略，默认“RECREATE”，即对于实例创建失败或异常退还的计算节点，定期重新创建实例资源。 */
  ActionIfComputeNodeInactive?: string;
  /** 对于实例创建失败或异常退还的计算节点，定期重新创建实例资源的最大重试次数，最大值100，如果不设置的话，系统会设置一个默认值，当前为7 */
  ResourceMaxRetryCount?: number;
  /** 标签列表。通过指定该参数可以支持绑定标签到计算环境。每个计算环境最多绑定10个标签。 */
  Tags?: Tag[];
  /** 表示通知信息的通知目标类型。取值范围：CMQ，TDMQ_CMQ。CMQ:表示向腾讯云CMQ发送消息。TDMQ_CMQ：表示向腾讯云TDMQ_CMQ发送消息。默认值为CMQ。注：腾讯云计划于2022年6月前正式下线消息队列 CMQ，建议使用TDMQ_CMQ。参考文档：[CMQ迁移到TDMQ_CMQ](https://cloud.tencent.com/document/product/406/60860) */
  NotificationTarget?: string;
}

/** 通知信息 */
declare interface Notification {
  /** CMQ主题名字，要求主题名有效且关联订阅 */
  TopicName: string;
  /** 事件配置 */
  EventConfigs: EventConfig[];
}

/** 输出映射 */
declare interface OutputMapping {
  /** 源端路径 */
  SourcePath: string;
  /** 目的端路径 */
  DestinationPath: string;
  /** 输出映射选项 */
  OutputMappingOption?: OutputMappingOption;
}

/** 输出映射配置 */
declare interface OutputMappingConfig {
  /** 存储类型，仅支持COS */
  Scene: string;
  /** 并行worker数量 */
  WorkerNum: number;
  /** worker分块大小，单位MB */
  WorkerPartSize: number;
}

/** 输出映射选项 */
declare interface OutputMappingOption {
  /** 容器场景下,输出选项从实例映射到容器内的实例侧的工作空间。BATCH_WORKSPACE: 工作空间为BATCH在实例内定义的工作空间，BATCH侧保证作业之间的隔离。（默认）GLOBAL_WORKSPACE: 工作空间为实例操作系统空间。 */
  Workspace?: string;
}

/** 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅专用宿主机产品可用），母机IP等 */
declare interface Placement {
  /** 实例所属的可用区名称。该参数可以通过调用 [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 `ProjectId` 字段来获取。默认取值0，表示默认项目。 */
  ProjectId?: number;
  /** 实例所属的专用宿主机ID列表，仅用于入参。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。该参数可以通过调用 [DescribeHosts](https://cloud.tencent.com/document/api/213/16474) 的返回值中的 `HostId` 字段来获取。 */
  HostIds?: string[];
  /** 实例所属的专用宿主机ID，仅用于出参。 */
  HostId?: string;
}

/** 重定向信息 */
declare interface RedirectInfo {
  /** 标准输出重定向路径; */
  StdoutRedirectPath?: string;
  /** 标准错误重定向路径 */
  StderrRedirectPath?: string;
  /** 标准输出重定向文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX} */
  StdoutRedirectFileName?: string;
  /** 标准错误重定向文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX} */
  StderrRedirectFileName?: string;
}

/** 本地重定向信息 */
declare interface RedirectLocalInfo {
  /** 标准输出重定向本地路径 */
  StdoutLocalPath?: string;
  /** 标准错误重定向本地路径 */
  StderrLocalPath?: string;
  /** 标准输出重定向本地文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX} */
  StdoutLocalFileName?: string;
  /** 标准错误重定向本地文件名，支持三个占位符${BATCH_JOB_ID}、${BATCH_TASK_NAME}、${BATCH_TASK_INSTANCE_INDEX} */
  StderrLocalFileName?: string;
}

/** 描述了 “云自动化助手” 服务相关的信息 */
declare interface RunAutomationServiceEnabled {
  /** 是否开启云自动化助手。取值范围：true：表示开启云自动化助手服务false：表示不开启云自动化助手服务默认取值：false。 */
  Enabled?: boolean;
}

/** 描述了 “云监控” 服务相关的信息 */
declare interface RunMonitorServiceEnabled {
  /** 是否开启[云监控](/document/product/248)服务。取值范围：true：表示开启云监控服务false：表示不开启云监控服务默认取值：true。 */
  Enabled?: boolean;
}

/** 描述了 “云安全” 服务相关的信息 */
declare interface RunSecurityServiceEnabled {
  /** 是否开启[云安全](/document/product/296)服务。取值范围：true：表示开启云安全服务false：表示不开启云安全服务默认取值：true。 */
  Enabled?: boolean;
}

/** 竞价相关选项 */
declare interface SpotMarketOptions {
  /** 竞价出价 */
  MaxPrice: string;
  /** 竞价请求类型，当前仅支持类型：one-time */
  SpotInstanceType?: string;
}

/** HDD的本地存储信息 */
declare interface StorageBlock {
  /** HDD本地存储类型，值为：LOCAL_PRO. */
  Type?: string;
  /** HDD本地存储的最小容量。单位：GiB。 */
  MinSize?: number;
  /** HDD本地存储的最大容量。单位：GiB。 */
  MaxSize?: number;
}

/** 描述了操作系统所在块设备即系统盘的信息 */
declare interface SystemDisk {
  /** 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘CLOUD_BASIC：普通云硬盘CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_BSSD：通用型SSD云硬盘CLOUD_HSSD：增强型SSD云硬盘CLOUD_TSSD：极速型SSD云硬盘默认取值：当前有库存的硬盘类型。 */
  DiskType?: string;
  /** 系统盘ID。该参数目前仅用于`DescribeInstances`等查询类接口的返回参数，不可用于`RunInstances`等写接口的入参。 */
  DiskId?: string;
  /** 系统盘大小，单位：GiB。默认值为 50 */
  DiskSize?: number;
  /** 所属的独享集群ID。 */
  CdcId?: string | null;
  /** 磁盘名称，长度不超过128 个字符。 */
  DiskName?: string;
}

/** 标签。 */
declare interface Tag {
  /** 标签键。 */
  Key: string;
  /** 标签值。 */
  Value: string;
}

/** 任务 */
declare interface Task {
  /** 应用程序信息 */
  Application: Application;
  /** 任务名称，在一个作业内部唯一 */
  TaskName?: string;
  /** 任务实例运行个数，默认为1 */
  TaskInstanceNum?: number;
  /** 运行环境信息，ComputeEnv 和 EnvId 必须指定一个（且只有一个）参数。 */
  ComputeEnv?: AnonymousComputeEnv;
  /** 计算环境ID，ComputeEnv 和 EnvId 必须指定一个（且只有一个）参数。 */
  EnvId?: string;
  /** 重定向信息 */
  RedirectInfo?: RedirectInfo;
  /** 重定向本地信息 */
  RedirectLocalInfo?: RedirectLocalInfo;
  /** 输入映射 */
  InputMappings?: InputMapping[];
  /** 输出映射 */
  OutputMappings?: OutputMapping[];
  /** 输出映射配置 */
  OutputMappingConfigs?: OutputMappingConfig[];
  /** 自定义环境变量 */
  EnvVars?: EnvVar[];
  /** 授权信息 */
  Authentications?: Authentication[];
  /** TaskInstance失败后处理方式，取值包括- TERMINATE：销毁计算实例（默认）、- INTERRUPT：中断任务，保留计算实例、- FAST_INTERRUPT： 快速中断任务， 保留计算实例。 */
  FailedAction?: string;
  /** 任务失败后的最大重试次数，默认为0 */
  MaxRetryCount?: number;
  /** 任务启动后的超时时间，单位秒，默认为86400秒 */
  Timeout?: number;
  /** 任务最大并发数限制，默认没有限制。 */
  MaxConcurrentNum?: number;
  /** 任务完成后，重启计算节点。适用于指定计算环境执行任务。 */
  RestartComputeNode?: boolean;
  /** 启动任务过程中，创建计算资源如CVM失败后的最大重试次数，默认为0。最大值100。计算资源创建重试的等待时间间隔策略设置如下：[1, 3]: 等待600 s发起重试；[4, 10]: 等待900 s发起重试；[11, 50]: 等待1800 s发起重试；[51, 100]: 等待3600 s发起重试；[a, b]表示重试次数区间，每次重试的等待时间随着重试次数的增加而递增。例如，计算资源创建重试8次的耗时为：3*600 + 5*900 = 6300 s */
  ResourceMaxRetryCount?: number;
}

/** 任务实例日志详情。 */
declare interface TaskInstanceLog {
  /** 任务实例 */
  TaskInstanceIndex?: number;
  /** 标准输出日志（Base64编码，解码后最大日志长度2048字节） */
  StdoutLog?: string;
  /** 标准错误日志（Base64编码，解码后最大日志长度2048字节） */
  StderrLog?: string;
  /** 标准输出重定向路径 */
  StdoutRedirectPath?: string;
  /** 标准错误重定向路径 */
  StderrRedirectPath?: string;
  /** 标准输出重定向文件名 */
  StdoutRedirectFileName?: string;
  /** 标准错误重定向文件名 */
  StderrRedirectFileName?: string;
}

/** 任务实例统计指标 */
declare interface TaskInstanceMetrics {
  /** Submitted个数 */
  SubmittedCount?: number;
  /** Pending个数 */
  PendingCount?: number;
  /** Runnable个数 */
  RunnableCount?: number;
  /** Starting个数 */
  StartingCount?: number;
  /** Running个数 */
  RunningCount?: number;
  /** Succeed个数 */
  SucceedCount?: number;
  /** FailedInterrupted个数 */
  FailedInterruptedCount?: number;
  /** Failed个数 */
  FailedCount?: number;
}

/** 任务实例视图信息 */
declare interface TaskInstanceView {
  /** 任务实例索引 */
  TaskInstanceIndex?: number;
  /** 任务实例状态: - PENDING：等待中；- RUNNABLE：可运行；- STARTING：启动中；- RUNNING：运行中；- SUCCEED：成功；- FAILED：失败；- FAILED_INTERRUPTED：失败后保留实例。 */
  TaskInstanceState?: string;
  /** 应用程序执行结束的exit code */
  ExitCode?: number;
  /** 任务实例状态原因，任务实例失败时，会记录失败原因 */
  StateReason?: string;
  /** 任务实例运行时所在计算节点（例如CVM）的InstanceId。任务实例未运行或者完结时，本字段为空。任务实例重试时，本字段会随之变化 */
  ComputeNodeInstanceId?: string;
  /** 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreateTime?: string;
  /** 启动时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  LaunchTime?: string;
  /** 开始运行时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  RunningTime?: string;
  /** 结束时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  EndTime?: string;
  /** 重定向信息 */
  RedirectInfo?: RedirectInfo;
  /** 任务实例状态原因详情，任务实例失败时，会记录失败原因 */
  StateDetailedReason?: string;
}

/** 任务统计指标 */
declare interface TaskMetrics {
  /** Submitted个数 */
  SubmittedCount?: number;
  /** Pending个数 */
  PendingCount?: number;
  /** Runnable个数 */
  RunnableCount?: number;
  /** Starting个数 */
  StartingCount?: number;
  /** Running个数 */
  RunningCount?: number;
  /** Succeed个数 */
  SucceedCount?: number;
  /** FailedInterrupted个数 */
  FailedInterruptedCount?: number;
  /** Failed个数 */
  FailedCount?: number;
}

/** 任务模板信息 */
declare interface TaskTemplateView {
  /** 任务模板ID */
  TaskTemplateId?: string;
  /** 任务模板名称 */
  TaskTemplateName?: string;
  /** 任务模板描述 */
  TaskTemplateDescription?: string;
  /** 任务模板信息 */
  TaskTemplateInfo?: Task;
  /** 创建时间 */
  CreateTime?: string;
  /** 任务模板绑定的标签列表。 */
  Tags?: Tag[] | null;
}

/** 任务视图信息 */
declare interface TaskView {
  /** 任务名称 */
  TaskName?: string;
  /** 任务状态:- PENDING：等待中；- RUNNABLE：可运行；- STARTING：启动中；- RUNNING：运行中；- SUCCEED：成功；- FAILED：失败；- FAILED_INTERRUPTED：失败后保留实例。 */
  TaskState?: string;
  /** 开始时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreateTime?: string;
  /** 结束时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  EndTime?: string | null;
}

/** 描述了VPC相关信息，包括子网，IP信息等 */
declare interface VirtualPrivateCloud {
  /** 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcs](https://cloud.tencent.com/document/product/215/15778) ，从接口返回中的`VpcId `字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
  VpcId: string;
  /** 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口 [DescribeSubnets](https://cloud.tencent.com/document/product/215/15784) ，从接口返回中的`SubnetId `字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
  SubnetId: string;
  /** 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：true：表示用作公网网关false：表示不作为公网网关默认取值：false。 */
  AsVpcGateway?: boolean;
  /** 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。 */
  PrivateIpAddresses?: string[];
  /** 为弹性网卡指定随机生成的 IPv6 地址数量。 */
  Ipv6AddressCount?: number;
}

declare interface AttachInstancesRequest {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnvs](https://cloud.tencent.com/document/api/599/15893)获取。 */
  EnvId: string;
  /** 加入计算环境实例列表，每次请求的实例的上限为100。 */
  Instances: Instance[];
}

declare interface AttachInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateComputeEnvRequest {
  /** 计算环境信息 */
  ComputeEnv: NamedComputeEnv;
  /** 位置信息 */
  Placement: Placement;
  /** 用于保证请求幂等性的字符串。该字符串由用户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface CreateComputeEnvResponse {
  /** 计算环境ID */
  EnvId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTaskTemplateRequest {
  /** 任务模板名称，最大长度限制60个字符。 */
  TaskTemplateName: string;
  /** 任务模板内容，参数要求与任务一致 */
  TaskTemplateInfo: Task;
  /** 任务模板描述，最大长度限制200个字符。 */
  TaskTemplateDescription?: string;
  /** 标签列表。通过指定该参数可以支持绑定标签到任务模板。每个任务模板最多绑定10个标签。 */
  Tags?: Tag[];
}

declare interface CreateTaskTemplateResponse {
  /** 任务模板ID */
  TaskTemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteComputeEnvRequest {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnvs](https://cloud.tencent.com/document/api/599/15893)获取，不能对状态处于删除中或者存在计算实例未销毁的环境发起删除动作。 */
  EnvId: string;
}

declare interface DeleteComputeEnvResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteJobRequest {
  /** 作业ID；JobId详见[作业列表](https://cloud.tencent.com/document/product/599/15909) */
  JobId: string;
}

declare interface DeleteJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTaskTemplatesRequest {
  /** 用于删除任务模板信息，最大数量上限100，环境模版ID通过调用接口 [DescribeTaskTemplates](https://cloud.tencent.com/document/api/599/15902)获取。 */
  TaskTemplateIds: string[];
}

declare interface DeleteTaskTemplatesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAvailableCvmInstanceTypesRequest {
  /** 过滤条件。 zone - String - 是否必填：否 -（过滤条件）按照[可用区](https://cloud.tencent.com/document/product/213/15707)过滤。 instance-family String - 是否必填：否 -（过滤条件）按照[机型系列](https://cloud.tencent.com/document/product/213/15748)过滤。实例机型系列形如：S1、I1、M1等。 */
  Filters?: Filter[];
}

declare interface DescribeAvailableCvmInstanceTypesResponse {
  /** 机型配置数组 */
  InstanceTypeConfigSet?: InstanceTypeConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComputeEnvActivitiesRequest {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnvs](https://cloud.tencent.com/document/api/599/15893)获取。 */
  EnvId: string;
  /** 偏移量，默认为0. */
  Offset?: number;
  /** 返回数量，默认值20，最大值100. */
  Limit?: number;
  /** 过滤条件 compute-node-id - String - 是否必填：否 -（过滤条件）按照计算节点ID过滤，节点ID通过调用接口 [DescribeComputeEnv](https://cloud.tencent.com/document/api/599/15892)获取。 */
  Filters?: Filter;
}

declare interface DescribeComputeEnvActivitiesResponse {
  /** 计算环境中的活动列表 */
  ActivitySet?: Activity[];
  /** 活动数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComputeEnvCreateInfoRequest {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnvs](https://cloud.tencent.com/document/api/599/15893)获取。 */
  EnvId: string;
}

declare interface DescribeComputeEnvCreateInfoResponse {
  /** 计算环境 ID */
  EnvId?: string;
  /** 计算环境名称 */
  EnvName?: string;
  /** 计算环境描述 */
  EnvDescription?: string;
  /** 计算环境类型，仅支持“MANAGED”类型 */
  EnvType?: string;
  /** 计算环境参数 */
  EnvData?: EnvData;
  /** 数据盘挂载选项 */
  MountDataDisks?: MountDataDisk[];
  /** 输入映射 */
  InputMappings?: InputMapping[];
  /** 授权信息 */
  Authentications?: Authentication[];
  /** 通知信息 */
  Notifications?: Notification[];
  /** 计算节点期望个数 */
  DesiredComputeNodeCount?: number;
  /** 计算环境绑定的标签列表 */
  Tags?: Tag[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComputeEnvCreateInfosRequest {
  /** 计算环境ID列表，与Filters参数不能同时指定，最大限制100，环境ID通过调用接口 [DescribeComputeEnvs](https://cloud.tencent.com/document/api/599/15893)获取。 */
  EnvIds?: string[];
  /** 过滤条件 zone - String - 是否必填：否 -（过滤条件）按照可用区过滤，可用区通过调用接口 [DescribeZones](https://cloud.tencent.com/document/api/213/15707)获取。 env-id - String - 是否必填：否 -（过滤条件）按照计算环境ID过滤。 env-name - String - 是否必填：否 -（过滤条件）按照计算环境名称过滤。与EnvIds参数不能同时指定。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量，默认值20，最大值100。 */
  Limit?: number;
}

declare interface DescribeComputeEnvCreateInfosResponse {
  /** 计算环境数量 */
  TotalCount?: number;
  /** 计算环境创建信息列表 */
  ComputeEnvCreateInfoSet?: ComputeEnvCreateInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComputeEnvRequest {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnvs](https://cloud.tencent.com/document/api/599/15893)获取。 */
  EnvId: string;
}

declare interface DescribeComputeEnvResponse {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnv](https://cloud.tencent.com/document/api/599/15892)获取。 */
  EnvId?: string;
  /** 计算环境名称 */
  EnvName?: string;
  /** 位置信息 */
  Placement?: Placement;
  /** 计算环境创建时间 */
  CreateTime?: string;
  /** 计算节点列表信息 */
  ComputeNodeSet?: ComputeNode[];
  /** 计算节点统计指标 */
  ComputeNodeMetrics?: ComputeNodeMetrics;
  /** 计算节点期望个数 */
  DesiredComputeNodeCount?: number;
  /** 计算环境管理类型，枚举如下： MANAGED: 由客户在Batch平台主动创建； THPC_QUEUE: 由thpc平台创建，关联thpc平台集群队列。 */
  EnvType?: string;
  /** 计算环境资源类型，当前为CVM和CPM（黑石） */
  ResourceType?: string;
  /** 下一步的动作，枚举如下： DELETING: 删除中 */
  NextAction?: string;
  /** 用户添加到计算环境中的计算节点个数 */
  AttachedComputeNodeCount?: number;
  /** 计算环境绑定的标签列表。 */
  Tags?: Tag[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeComputeEnvsRequest {
  /** 计算环境ID列表，与Filters参数不能同时指定。最大数量上限100。 */
  EnvIds?: string[];
  /** 过滤条件 zone - String - 是否必填：否 -（过滤条件）按照可用区过滤，可用区通过调用接口 [DescribeZones](https://cloud.tencent.com/document/api/213/15707)获取。 env-id - String - 是否必填：否 -（过滤条件）按照计算环境ID过滤。 env-name - String - 是否必填：否 -（过滤条件）按照计算环境名称过滤。 resource-type - String - 是否必填：否 -（过滤条件）按照计算资源类型过滤，取值CVM或者CPM(黑石)。 tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。与EnvIds参数不能同时指定。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量，默认值20，最大值100。 */
  Limit?: number;
}

declare interface DescribeComputeEnvsResponse {
  /** 计算环境列表 */
  ComputeEnvSet?: ComputeEnvView[];
  /** 计算环境数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCvmZoneInstanceConfigInfosRequest {
  /** 过滤条件。 zone - String - 是否必填：否 -（过滤条件）按照[可用区](https://cloud.tencent.com/document/product/213/15707)过滤。 instance-family String - 是否必填：否 -（过滤条件）按照[机型系列](https://cloud.tencent.com/document/product/213/15748)过滤。实例机型系列形如：S1、I1、M1等。 instance-type - String - 是否必填：否 - （过滤条件）按照[机型](https://cloud.tencent.com/document/product/213/15749)过滤。实例机型形如：：S5.12XLARGE128、S5.12XLARGE96等。 instance-charge-type - String - 是否必填：否 -（过滤条件）按照实例计费模式过滤。 ( POSTPAID_BY_HOUR：表示后付费，即按量计费机型 | SPOTPAID：表示竞价付费机型。 ) */
  Filters?: Filter[];
}

declare interface DescribeCvmZoneInstanceConfigInfosResponse {
  /** 可用区机型配置列表。 */
  InstanceTypeQuotaSet?: InstanceTypeQuotaItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceCategoriesRequest {
}

declare interface DescribeInstanceCategoriesResponse {
  /** CVM实例分类列表 */
  InstanceCategorySet?: InstanceCategoryItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobMonitorDataRequest {
  /** 作业ID；JobId详见[作业列表](https://cloud.tencent.com/document/product/599/15909) */
  JobId: string;
  /** 作业的Task名称，详见[作业详情](https://cloud.tencent.com/document/product/599/15904)。 */
  TaskName: string;
  /** 作业任务实例的序号，详见[任务详情](https://cloud.tencent.com/document/product/599/15905) */
  TaskInstanceIndex: number;
  /** 支持查询的指标；当前支持查询的任务指标；- CpuUsage：cpu利用率，单位：%- MemUsage：内存利用率，单位：%- LanOuttraffic：内网出带宽，单位：Bytes/s- LanIntraffic：内网入带宽，单位：Bytes/s */
  MetricName: string;
  /** 查询任务实例的起始时间；如果未传入查询起始时间或传入的时间小于任务实例的创建时间（任务实例创建时间详见[任务详情](https://cloud.tencent.com/document/product/599/15905)），会自动将查询时间调整到任务实例的创建时间。传入时间格式只支持零时区格式。 */
  StartTime?: string;
  /** 查询任务实例的终止时间；如果未传入查询终止时间或传入的时间大于任务实例的终止时间（任务实例终止时间详见[任务详情](https://cloud.tencent.com/document/product/599/15905)），并且任务实例已经结束，会自动将查询终止时间调整到任务实例的终止时间；如果任务实例未结束，会自动将查询终止时间调整到当前时间。传入时间格式只支持零时区格式。 */
  EndTime?: string;
}

declare interface DescribeJobMonitorDataResponse {
  /** 监控数据粒度，单位:秒；时间粒度随着查询的时间范围变化，查询时间范围越小，时间粒度越小。 */
  Period?: number;
  /** 监控采集的数据。时间戳和对应的值一一对应；如果查询的任务重试，采集时间段涉及多个实例的话，某些时间段内的值为null, 表示对应时间点没有实例存在，也不存在对应的监控数据；相邻监控时间段之间的空值数量最多为10。 */
  DataPoints?: DataPointView;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobRequest {
  /** 作业ID；JobId详见[作业列表](https://cloud.tencent.com/document/product/599/15909) */
  JobId: string;
}

declare interface DescribeJobResponse {
  /** 作业ID */
  JobId?: string;
  /** 作业名称 */
  JobName?: string;
  /** 可用区信息 */
  Zone?: string;
  /** 作业优先级 */
  Priority?: number;
  /** 作业状态 */
  JobState?: string;
  /** 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreateTime?: string;
  /** 结束时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  EndTime?: string;
  /** 任务视图信息 */
  TaskSet?: TaskView[];
  /** 任务间依赖信息 */
  DependenceSet?: Dependence[];
  /** 任务统计指标 */
  TaskMetrics?: TaskMetrics;
  /** 任务实例统计指标 */
  TaskInstanceMetrics?: TaskInstanceMetrics;
  /** 作业失败原因 */
  StateReason?: string;
  /** 作业绑定的标签列表。 */
  Tags?: Tag[] | null;
  /** 下一步动作 */
  NextAction?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobSubmitInfoRequest {
  /** 作业ID */
  JobId: string;
}

declare interface DescribeJobSubmitInfoResponse {
  /** 作业ID */
  JobId: string;
  /** 作业名称 */
  JobName: string;
  /** 作业描述 */
  JobDescription: string;
  /** 作业优先级，任务（Task）和任务实例（TaskInstance）会继承作业优先级 */
  Priority: number;
  /** 任务信息 */
  Tasks: Task[];
  /** 依赖信息 */
  Dependences: Dependence[];
  /** 作业绑定的标签列表。 */
  Tags: Tag[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeJobsRequest {
  /** 作业ID列表，与Filters参数不能同时指定。 */
  JobIds?: string[];
  /** 过滤条件 job-id - String - 是否必填：否 -（过滤条件）按照作业ID过滤。 job-name - String - 是否必填：否 -（过滤条件）按照作业名称过滤。 job-state - String - 是否必填：否 -（过滤条件）按照作业状态过滤。 - SUBMITTED：已提交； - PENDING：等待中； - RUNNABLE：可运行； - STARTING：启动中； - RUNNING：运行中； - SUCCEED：成功； - FAILED：失败； - FAILED_INTERRUPTED：失败后保留实例。 zone - String - 是否必填：否 -（过滤条件）按照[可用区](https://cloud.tencent.com/document/product/213/15707)过滤。 tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。 tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。 tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。与JobIds参数不能同时指定。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回job数量限制，最大值: 100，默认值: 20. */
  Limit?: number;
}

declare interface DescribeJobsResponse {
  /** 作业列表 */
  JobSet?: JobView[];
  /** 符合条件的作业数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskLogsRequest {
  /** 作业ID。JobId详见[作业列表](https://cloud.tencent.com/document/product/599/15909)。 */
  JobId: string;
  /** 任务名称 */
  TaskName: string;
  /** 任务实例集合；与Offset不能同时指定。 */
  TaskInstanceIndexes?: number[];
  /** 起始任务实例。与TaskInstanceIndexes参数不能同时指定。 */
  Offset?: number;
  /** 最大任务实例数；默认值为5， 最大值为10。 */
  Limit?: number;
}

declare interface DescribeTaskLogsResponse {
  /** 任务实例总数 */
  TotalCount?: number;
  /** 任务实例日志详情集合 */
  TaskInstanceLogSet?: TaskInstanceLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskRequest {
  /** 作业ID；JobId详见[作业列表](https://cloud.tencent.com/document/product/599/15909) */
  JobId: string;
  /** 任务名称 */
  TaskName: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回数量。默认取值100，最大取值1000。 */
  Limit?: number;
  /** 过滤条件，详情如下：task-instance-state - String - 是否必填： 否 - 按照任务实例状态进行过滤（- SUBMITTED：已提交；- PENDING：等待中；- RUNNABLE：可运行；- STARTING：启动中；- RUNNING：运行中；- SUCCEED：成功；- FAILED：失败；- FAILED_INTERRUPTED：失败后保留实例）。 */
  Filters?: Filter[];
}

declare interface DescribeTaskResponse {
  /** 作业ID */
  JobId?: string;
  /** 任务名称 */
  TaskName?: string;
  /** 任务状态 */
  TaskState?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 结束时间 */
  EndTime?: string;
  /** 任务实例总数 */
  TaskInstanceTotalCount?: number;
  /** 任务实例信息 */
  TaskInstanceSet?: TaskInstanceView[];
  /** 任务实例统计指标 */
  TaskInstanceMetrics?: TaskInstanceMetrics;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskTemplatesRequest {
  /** 任务模板ID列表，与Filters参数不能同时指定。 */
  TaskTemplateIds?: string[];
  /** 过滤条件 task-template-name - String - 是否必填：否 -（过滤条件）按照任务模板名称过滤。 tag-key - String - 是否必填：否 -（过滤条件）按照标签键进行过滤。 tag-value - String - 是否必填：否 -（过滤条件）按照标签值进行过滤。 tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。与TaskTemplateIds参数不能同时指定。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
}

declare interface DescribeTaskTemplatesResponse {
  /** 任务模板列表 */
  TaskTemplateSet: TaskTemplateView[];
  /** 任务模板数量 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachInstancesRequest {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnvs](https://cloud.tencent.com/document/api/599/15893)获取。 */
  EnvId: string;
  /** 实例ID列表，实例ID通过调用接口 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728)获取。 */
  InstanceIds: string[];
}

declare interface DetachInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstanceMarketOptionsRequest {
  /** 竞价相关选项 */
  SpotOptions: SpotMarketOptions;
  /** 市场选项类型，当前只支持取值：spot */
  MarketType?: string;
}

declare interface ModifyComputeEnvRequest {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnvs](https://cloud.tencent.com/document/api/599/15893)获取。 */
  EnvId: string;
  /** 计算节点期望个数，最大上限2000。 */
  DesiredComputeNodeCount?: number;
  /** 计算环境名称 */
  EnvName?: string;
  /** 计算环境描述 */
  EnvDescription?: string;
  /** 计算环境属性数据 */
  EnvData?: ComputeEnvData;
}

declare interface ModifyComputeEnvResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTaskTemplateRequest {
  /** 任务模板ID; 详见[任务模版](https://cloud.tencent.com/document/product/599/15902)。 */
  TaskTemplateId: string;
  /** 任务模板名称；字节长度限制60。 */
  TaskTemplateName?: string;
  /** 任务模板描述；字节长度限制200。 */
  TaskTemplateDescription?: string;
  /** 任务模板信息 */
  TaskTemplateInfo?: Task;
}

declare interface ModifyTaskTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RetryJobsRequest {
  /** 作业ID列表。最大重试作业数100；JobId详见[作业列表](https://cloud.tencent.com/document/product/599/15909)。 */
  JobIds: string[];
}

declare interface RetryJobsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SubmitJobRequest {
  /** 作业所提交的位置信息。通过该参数可以指定作业关联CVM所属可用区等信息。 */
  Placement: Placement;
  /** 作业信息 */
  Job: Job;
  /** 用于保证请求幂等性的字符串。该字符串由用户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface SubmitJobResponse {
  /** 当通过本接口来提交作业时会返回该参数，表示一个作业ID。返回作业ID列表并不代表作业解析/运行成功，可根据 DescribeJob 接口查询其状态。 */
  JobId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateComputeNodeRequest {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnvs](https://cloud.tencent.com/document/api/599/15893)获取。 */
  EnvId: string;
  /** 计算节点ID，节点ID通过调用接口 [DescribeComputeEnv](https://cloud.tencent.com/document/api/599/15892)获取。 */
  ComputeNodeId: string;
}

declare interface TerminateComputeNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateComputeNodesRequest {
  /** 计算环境ID，环境ID通过调用接口 [DescribeComputeEnv](https://cloud.tencent.com/document/api/599/15892)获取。 */
  EnvId: string;
  /** 计算节点ID列表，最大数量上限100，节点ID通过调用接口 [DescribeComputeEnv](https://cloud.tencent.com/document/api/599/15892)获取。 */
  ComputeNodeIds: string[];
}

declare interface TerminateComputeNodesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateJobRequest {
  /** 作业ID；JobId详见[作业列表](https://cloud.tencent.com/document/product/599/15909) */
  JobId: string;
}

declare interface TerminateJobResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateTaskInstanceRequest {
  /** 作业ID；详见[作业列表](https://cloud.tencent.com/document/product/599/15909)。 */
  JobId: string;
  /** 任务名称；详见[作业提交信息](https://cloud.tencent.com/document/product/599/15910) */
  TaskName: string;
  /** 任务实例索引 */
  TaskInstanceIndex: number;
}

declare interface TerminateTaskInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Batch 批量计算} */
declare interface Batch {
  (): Versions;
  /** 添加实例到计算环境 {@link AttachInstancesRequest} {@link AttachInstancesResponse} */
  AttachInstances(data: AttachInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AttachInstancesResponse>;
  /** 创建计算环境 {@link CreateComputeEnvRequest} {@link CreateComputeEnvResponse} */
  CreateComputeEnv(data: CreateComputeEnvRequest, config?: AxiosRequestConfig): AxiosPromise<CreateComputeEnvResponse>;
  /** 创建任务模板 {@link CreateTaskTemplateRequest} {@link CreateTaskTemplateResponse} */
  CreateTaskTemplate(data: CreateTaskTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTaskTemplateResponse>;
  /** 删除计算环境 {@link DeleteComputeEnvRequest} {@link DeleteComputeEnvResponse} */
  DeleteComputeEnv(data: DeleteComputeEnvRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteComputeEnvResponse>;
  /** 删除作业 {@link DeleteJobRequest} {@link DeleteJobResponse} */
  DeleteJob(data: DeleteJobRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteJobResponse>;
  /** 删除任务模板 {@link DeleteTaskTemplatesRequest} {@link DeleteTaskTemplatesResponse} */
  DeleteTaskTemplates(data: DeleteTaskTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTaskTemplatesResponse>;
  /** 获取批量计算可用的CVM机型配置信息 {@link DescribeAvailableCvmInstanceTypesRequest} {@link DescribeAvailableCvmInstanceTypesResponse} */
  DescribeAvailableCvmInstanceTypes(data?: DescribeAvailableCvmInstanceTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAvailableCvmInstanceTypesResponse>;
  /** 获取计算环境详情 {@link DescribeComputeEnvRequest} {@link DescribeComputeEnvResponse} */
  DescribeComputeEnv(data: DescribeComputeEnvRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComputeEnvResponse>;
  /** 查看计算环境活动信息 {@link DescribeComputeEnvActivitiesRequest} {@link DescribeComputeEnvActivitiesResponse} */
  DescribeComputeEnvActivities(data: DescribeComputeEnvActivitiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComputeEnvActivitiesResponse>;
  /** 查看计算环境的创建信息 {@link DescribeComputeEnvCreateInfoRequest} {@link DescribeComputeEnvCreateInfoResponse} */
  DescribeComputeEnvCreateInfo(data: DescribeComputeEnvCreateInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComputeEnvCreateInfoResponse>;
  /** 查看计算环境创建信息列表 {@link DescribeComputeEnvCreateInfosRequest} {@link DescribeComputeEnvCreateInfosResponse} */
  DescribeComputeEnvCreateInfos(data?: DescribeComputeEnvCreateInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComputeEnvCreateInfosResponse>;
  /** 获取计算环境列表 {@link DescribeComputeEnvsRequest} {@link DescribeComputeEnvsResponse} */
  DescribeComputeEnvs(data?: DescribeComputeEnvsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeComputeEnvsResponse>;
  /** 获取批量计算可用区机型配置信息 {@link DescribeCvmZoneInstanceConfigInfosRequest} {@link DescribeCvmZoneInstanceConfigInfosResponse} */
  DescribeCvmZoneInstanceConfigInfos(data?: DescribeCvmZoneInstanceConfigInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCvmZoneInstanceConfigInfosResponse>;
  /** 查询实例分类信息 {@link DescribeInstanceCategoriesRequest} {@link DescribeInstanceCategoriesResponse} */
  DescribeInstanceCategories(data?: DescribeInstanceCategoriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceCategoriesResponse>;
  /** 查看作业详情 {@link DescribeJobRequest} {@link DescribeJobResponse} */
  DescribeJob(data: DescribeJobRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobResponse>;
  /** 查询作业任务实例的资源监控信息 {@link DescribeJobMonitorDataRequest} {@link DescribeJobMonitorDataResponse} */
  DescribeJobMonitorData(data: DescribeJobMonitorDataRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobMonitorDataResponse>;
  /** 获取作业的提交信息 {@link DescribeJobSubmitInfoRequest} {@link DescribeJobSubmitInfoResponse} */
  DescribeJobSubmitInfo(data: DescribeJobSubmitInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobSubmitInfoResponse>;
  /** 查看作业列表 {@link DescribeJobsRequest} {@link DescribeJobsResponse} */
  DescribeJobs(data?: DescribeJobsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeJobsResponse>;
  /** 查询任务详情 {@link DescribeTaskRequest} {@link DescribeTaskResponse} */
  DescribeTask(data: DescribeTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResponse>;
  /** 获取任务日志详情 {@link DescribeTaskLogsRequest} {@link DescribeTaskLogsResponse} */
  DescribeTaskLogs(data: DescribeTaskLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskLogsResponse>;
  /** 获取任务模板 {@link DescribeTaskTemplatesRequest} {@link DescribeTaskTemplatesResponse} */
  DescribeTaskTemplates(data?: DescribeTaskTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskTemplatesResponse>;
  /** 从计算环境移出实例 {@link DetachInstancesRequest} {@link DetachInstancesResponse} */
  DetachInstances(data: DetachInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DetachInstancesResponse>;
  /** 修改计算环境 {@link ModifyComputeEnvRequest} {@link ModifyComputeEnvResponse} */
  ModifyComputeEnv(data: ModifyComputeEnvRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyComputeEnvResponse>;
  /** 修改任务模板 {@link ModifyTaskTemplateRequest} {@link ModifyTaskTemplateResponse} */
  ModifyTaskTemplate(data: ModifyTaskTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTaskTemplateResponse>;
  /** 重试作业 {@link RetryJobsRequest} {@link RetryJobsResponse} */
  RetryJobs(data: RetryJobsRequest, config?: AxiosRequestConfig): AxiosPromise<RetryJobsResponse>;
  /** 提交作业 {@link SubmitJobRequest} {@link SubmitJobResponse} */
  SubmitJob(data: SubmitJobRequest, config?: AxiosRequestConfig): AxiosPromise<SubmitJobResponse>;
  /** 销毁计算节点 {@link TerminateComputeNodeRequest} {@link TerminateComputeNodeResponse} */
  TerminateComputeNode(data: TerminateComputeNodeRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateComputeNodeResponse>;
  /** 批量销毁计算节点 {@link TerminateComputeNodesRequest} {@link TerminateComputeNodesResponse} */
  TerminateComputeNodes(data: TerminateComputeNodesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateComputeNodesResponse>;
  /** 终止作业 {@link TerminateJobRequest} {@link TerminateJobResponse} */
  TerminateJob(data: TerminateJobRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateJobResponse>;
  /** 终止任务实例 {@link TerminateTaskInstanceRequest} {@link TerminateTaskInstanceResponse} */
  TerminateTaskInstance(data: TerminateTaskInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateTaskInstanceResponse>;
}

export declare type Versions = ["2017-03-12"];

export default Batch;
