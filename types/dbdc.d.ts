/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 连通 DB Custom 集群 API Server 的网络配置。 */
declare interface ApiServerNetwork {
  /** API Server的访问私有网络ID */
  VpcId: string;
  /** API Server的访问私有网络子网ID */
  SubnetId: string;
}

/** 联通 DB Custom 集群中容器的网络配置。 */
declare interface ContainerNetwork {
  /** 容器网络的虚拟网络ID */
  VpcId: string;
  /** 容器网络的虚拟网络子网列表 */
  SubnetIds: string[];
}

/** DB Custom 集群信息。 */
declare interface DBCustomCluster {
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群支持的地域 */
  Region?: string;
  /** 集群规模默认值：L500 */
  ClusterLevel?: string;
  /** DB Custom 集群状态枚举值：Creating： 创建中Running： 运行中Destroying： 销毁中 */
  ClusterStatus?: string;
  /** 集群版本号 */
  ClusterVersion?: string;
  /** 集群中的节点数量单位：台 */
  ClusterNodeNum?: number;
  /** 集群描述 */
  ClusterDescription?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 集群的标签信息 */
  Tags?: Tag[] | null;
}

/** DB Custom 集群节点信息。 */
declare interface DBCustomClusterNode {
  /** 节点ID */
  NodeId?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 节点内网IP地址 */
  LanIP?: string;
  /** 节点SSH 访问的Endpoint。格式为IP:Port. */
  SSHEndpoint?: string;
  /** 节点在集群中的实例状态 */
  Status?: string;
  /** 节点所属的地域 */
  Zone?: string;
  /** 节点类型枚举值：DB.AT5.32XLARGE512： 高IO型服务器：128核心512GB内存，8*7180GB本地NvME SSDB。DB.AT5.64XLARGE1152： 高IO型服务器：256核心1152GB内存，12*7180GB本地NvME SSDB。DB.AT5.128XLARGE2304： 高IO型服务器：512核心2304GB内存，24*7180GB本地NvME SSDB。DB.AT5.16XLARGE256： 高IO型服务器：64核心256GB内存，4*7180GB本地NvME SSDB。DB.AT5.8XLARGE128： 高IO型服务器：32核心128GB内存，2*7180GB本地NvME SSDB。 */
  NodeType?: string;
  /** 网络模式枚举值：privatelink： 四层网络联通，放通SSH 通路cross_tenant_eni： 三层网络联通，双网卡模式 */
  NetworkMode?: string | null;
  /** 当选择网络模式为三层网络联通模式时，此处的IP地址则为用户可访问的地址。 */
  EniIP?: string | null;
}

/** DB Custom 集群内节点配置信息。 */
declare interface DBCustomClusterNodeConfig {
  /** 节点ID */
  NodeId?: string;
  /** 节点的标签信息 */
  Labels?: Label[] | null;
  /** 节点的污点信息 */
  Taints?: Taint[] | null;
}

/** DB Custom 集群内节点资源信息。 */
declare interface DBCustomClusterNodeResource {
  /** 节点ID */
  NodeId?: string;
  /** 节点物理资源总容量 */
  Capacity?: MetaResource | null;
  /** 节点可分配容量= Capacity - 系统预留 */
  Allocatable?: MetaResource | null;
  /** 节点上所有非终态 Pod 的 requests 申请量之和（含系统 Pod） */
  Requests?: MetaResource | null;
  /** 节点上所有非终态 Pod 的 limits 上限之和（含系统 Pod） */
  Limits?: MetaResource | null;
  /** 节点可再调度余量 = max(0, Allocatable - Requests) */
  Available?: MetaResource | null;
}

/** DB Custom 可选的镜像信息。 */
declare interface DBCustomImage {
  /** 镜像ID */
  ImageId?: string;
  /** 操作系统名称 */
  OsName?: string;
  /** 镜像类型枚举值：PUBLIC_IMAGE： 公共镜像 (腾讯云官方镜像)PRIVATE_IMAGE： 私有镜像 (客户专属镜像) */
  ImageType?: string;
  /** 操作系统架构枚举值：x86_64： X86 64位架构arm64： ARM 64位机构 */
  Architecture?: string;
  /** 操作系统类型枚举值：windows： windowslinux： linux */
  OsType?: string;
}

/** DB Custom 节点信息。 */
declare interface DBCustomNode {
  /** 节点ID */
  NodeId?: string;
  /** 节点名称 */
  NodeName?: string;
  /** 访问此节点的SSH Endpoint，格式为IP:Port */
  SSHEndpoint?: string;
  /** 节点的内网通信IP地址 */
  LanIP?: string;
  /** 节点所属的集群ID */
  ClusterId?: string;
  /** 节点所属的可用区 */
  Zone?: string;
  /** 节点类型枚举值：DB.AT5.32XLARGE512： 高IO型服务器：128核心512GB内存，8*7180GB本地NvME SSDB。DB.AT5.64XLARGE1152： 高IO型服务器：256核心1152GB内存，12*7180GB本地NvME SSDB。DB.AT5.128XLARGE2304： 高IO型服务器：512核心2304GB内存，24*7180GB本地NvME SSDB。DB.AT5.16XLARGE256： 高IO型服务器：64核心256GB内存，4*7180GB本地NvME SSDB。DB.AT5.8XLARGE128： 高IO型服务器：32核心128GB内存，2*7180GB本地NvME SSDB。 */
  NodeType?: string;
  /** 节点CPU大小单位：核 */
  CPU?: number;
  /** 节点内存单位：GiB */
  Memory?: number;
  /** 系统盘信息 */
  SystemDisk?: SystemDisk | null;
  /** 数据盘信息 */
  DataDisks?: DataDisk[] | null;
  /** 节点的操作系统名称 */
  OsName?: string;
  /** 节点的操作系统镜像ID */
  ImageId?: string;
  /** 节点SSH Endpoint 所属的VPC ID */
  VpcId?: string;
  /** 节点SSH Endpoint 所属的VPC 子网ID */
  SubnetId?: string;
  /** 节点状态枚举值：Creating： 创建中Running： 运行中Isolating： 隔离中Isolated： 已隔离Activating： 解除隔离中Destroying： 销毁中 */
  Status?: string;
  /** 付费类型枚举值：PREPAID： 包年包月 */
  ChargeType?: string;
  /** 节点到期时间 */
  ExpireTime?: string;
  /** 节点创建时间 */
  CreatedTime?: string;
  /** 节点隔离时间 */
  IsolatedTime?: string;
  /** 节点标签信息 */
  Tags?: Tag[] | null;
  /** 节点是否自动续费标记枚举值：1： 自动续费2： 不自动续费 */
  AutoRenew?: number;
  /** 交换机ID（已加密） */
  SwitchId?: string;
  /** 机架ID（已加密） */
  RackId?: string;
  /** 底层物理机IP（已加密） */
  HostIp?: string;
  /** 网络模式枚举值：privatelink： 四层 SSH 服务联通模式cross_tenant_eni： 三层双网卡访问方式 */
  NetworkMode?: string;
  /** 当选择NetworkModeCrossTenantENI模式时，节点的访问IP地址 */
  EniIP?: string;
}

/** DB Custom 节点机型信息。 */
declare interface DBCustomNodeTypeInfo {
  /** 可用区标识，如 ap-guangzhou-6 */
  Zone?: string;
  /** 机型标识枚举值：DB.SA5.2XLARGE32： DB.SA5机型DB.AT5.8XLARGE128： DB.AT5机型 */
  NodeType?: string;
  /** 机型系列，如 DB.AT5、DB.SA5 */
  NodeFamily?: string;
  /** CPU 核数单位：核 */
  CPU?: number;
  /** 内存大小单位：GiB */
  Memory?: number;
  /** 机型售卖状态枚举值：SELL： 正常售卖SOLD_OUT： 售罄 */
  Status?: string;
  /** 该机型允许的系统盘类型列表（如 CLOUD_BSSD、CLOUD_HSSD）； */
  SystemDiskTypes?: string[];
  /** 该机型允许的数据盘类型列表（如 CLOUD_BSSD、CLOUD_HSSD）； */
  DataDiskTypes?: string[];
}

/** DB实例详情 */
declare interface DBInstanceDetail {
  /** DB实例Id */
  InstanceId?: string;
  /** DB实例名称 */
  InstanceName?: string;
  /** DB实例状态,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化 */
  Status?: number;
  /** DB实例状态描述,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化 */
  StatusDesc?: string;
  /** DB实例版本 */
  DbVersion?: string;
  /** Vip信息 */
  Vip?: string;
  /** Vip使用的端口号 */
  Vport?: number;
  /** 字符串型的私有网络ID */
  UniqueVpcId?: string;
  /** 字符串型的私有网络子网ID */
  UniqueSubnetId?: string;
  /** 是否为分布式版本,0:否,1:是 */
  Shard?: number;
  /** DB实例节点数 */
  NodeNum?: number;
  /** CPU规格(单位:核数) */
  Cpu?: number;
  /** 内存规格(单位:GB) */
  Memory?: number;
  /** 磁盘规格(单位:GB) */
  Disk?: number;
  /** 分布式类型的实例的分片数 */
  ShardNum?: number;
  /** 地域 */
  Region?: string;
  /** 可用区 */
  Zone?: string;
  /** Db所在主机列表, 格式: m1,s1|m2,s2 */
  DbHosts?: string;
  /** 主机角色, 1:主, 2:从, 3:主+从 */
  HostRole?: number;
  /** DB引擎，MySQL,Percona,MariaDB */
  DbEngine?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 可用区列表 */
  Zones?: string[];
}

/** DB Custom 节点数据盘信息。 */
declare interface DataDisk {
  /** 磁盘类型枚举值：CLOUD_HSSD： 增强型云硬盘LOCAL_NVME： 本地硬盘 */
  DiskType: string;
  /** 磁盘大小单位：GiB */
  DiskSize: number;
  /** 磁盘名称DataDisk 作为输入参数时，DiskName 无效。 */
  DiskName?: string;
}

/** 独享集群详情 */
declare interface DescribeInstanceDetail {
  /** 独享集群实例Id */
  InstanceId?: string;
  /** 独享集群实例名称 */
  InstanceName?: string;
  /** 地域 */
  Region?: string;
  /** 产品ID, 0:CDB, 1:TDSQL */
  ProductId?: number;
  /** 集群类型, 0:公有云, 1:金融围笼, 2:CDC集群 */
  Type?: number;
  /** 主机类型, 0:物理机, 1:CVM机型, 2:CDC机型 */
  HostType?: number;
  /** 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费 */
  AutoRenewFlag?: number;
  /** 集群状态 */
  Status?: number;
  /** 集群状态描述 */
  StatusDesc?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 到期时间 */
  PeriodEndTime?: string;
  /** 主机数 */
  HostNum?: number;
  /** DB实例数 */
  DbNum?: number;
  /** 分配策略, 0:紧凑, 1:均匀 */
  AssignStrategy?: number;
  /** 总主机CPU(单位:核数) */
  CpuSpec?: number;
  /** 总已分配CPU(单位:核数) */
  CpuAssigned?: number;
  /** 总可分配CPU(单位:核数) */
  CpuAssignable?: number;
  /** 总主机内存(单位:GB) */
  MemorySpec?: number;
  /** 总已分配内存(单位:GB) */
  MemoryAssigned?: number;
  /** 总可分配内存(单位:GB) */
  MemoryAssignable?: number;
  /** 总机器磁盘(单位:GB) */
  DiskSpec?: number;
  /** 总已分配磁盘(单位:GB) */
  DiskAssigned?: number;
  /** 总可分配磁盘(单位:GB) */
  DiskAssignable?: number;
  /** 可用区 */
  Zone?: string;
  /** 金融围笼ID */
  FenceId?: string;
  /** 所属集群ID(默认集群为空) */
  ClusterId?: string;
  /** 实例标签 */
  ResourceTags?: ResourceTag[];
  /** CPU类型：Intel/AMD,Hygon */
  CpuType?: string;
  /** 可用区列表 */
  Zones?: string[];
}

/** 设备信息 */
declare interface DeviceInfo {
  /** 设备ID */
  DeviceId?: number;
  /** 设备No */
  DeviceNo?: string;
  /** 设备类型 */
  DevClass?: string;
  /** 设备总内存，单位GB */
  MaxMemory?: number;
  /** 设备总磁盘，单位GB */
  MaxDisk?: number;
  /** 设备剩余内存，单位GB */
  RestMemory?: number;
  /** 设备剩余磁盘，单位GB */
  RestDisk?: number;
  /** 设备机器个数 */
  RawDeviceNum?: number;
  /** 数据库实例个数 */
  InstanceNum?: number;
}

/** 描述键值对过滤器，用于条件过滤查询。 */
declare interface Filter {
  /** 筛选条件 */
  Name: string;
  /** 过滤字段对应的参数值 */
  Values: string[];
}

/** 主机详情 */
declare interface HostDetail {
  /** 主机Id */
  HostId?: string;
  /** 主机名称 */
  HostName?: string;
  /** 可用区 */
  Zone?: string;
  /** 主机状态 */
  Status?: number;
  /** 分配DB实例状态,0:可分配,1:不可分配 */
  AssignStatus?: number;
  /** 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘 */
  HostType?: number;
  /** DB实例数 */
  DbNum?: number;
  /** 主机CPU(单位:核数) */
  CpuSpec?: number;
  /** 已分配CPU(单位:核数) */
  CpuAssigned?: number;
  /** 可分配CPU(单位:核数) */
  CpuAssignable?: number;
  /** 主机内存(单位:GB) */
  MemorySpec?: number;
  /** 已分配内存(单位:GB) */
  MemoryAssigned?: number;
  /** 可分配内存(单位:GB) */
  MemoryAssignable?: number;
  /** 主机磁盘(单位:GB) */
  DiskSpec?: number;
  /** 已分配磁盘(单位:GB) */
  DiskAssigned?: number;
  /** 可分配磁盘(GB) */
  DiskAssignable?: number;
  /** CPU分配比 */
  CpuRatio?: number;
  /** 内存分配比 */
  MemoryRatio?: number;
  /** 磁盘分配比 */
  DiskRatio?: number;
  /** 机型名称 */
  MachineName?: string;
  /** 机型类别 */
  MachineType?: string;
  /** 计费标签 */
  PidTag?: string;
  /** 计费ID */
  Pid?: number;
  /** 独享集群实例Id */
  InstanceId?: string;
  /** 可用区列表 */
  Zones?: string[];
}

/** 集群容量信息。 */
declare interface InstanceDetail {
  /** 集群状态，0：运行中，1：不在运行 */
  Status?: number;
  /** 读写集群剩余内存容量，单位GB */
  ReadWriteTotalLeaveMemory?: number;
  /** 读写集群剩余磁盘容量，单位GB */
  ReadWriteTotalLeaveDisk?: number;
  /** 读写集群总内存容量，单位GB */
  ReadWriteTotalMemory?: number;
  /** 读写集群总磁盘容量，单位GB */
  ReadWriteTotalDisk?: number;
  /** 只读集群剩余内存容量，单位GB */
  ReadOnlyTotalLeaveMemory?: number;
  /** 只读集群剩余磁盘容量，单位GB */
  ReadOnlyTotalLeaveDisk?: number;
  /** 只读集群总内存容量，单位GB */
  ReadOnlyTotalMemory?: number;
  /** 只读集群总磁盘容量，单位GB */
  ReadOnlyTotalDisk?: number;
  /** 集群设备详情 */
  InstanceDeviceInfos?: InstanceDeviceInfo[];
}

/** 集群设备组信息。 */
declare interface InstanceDeviceInfo {
  /** 集群ID */
  InstanceId?: string;
  /** 读写设备组 */
  ReadWriteDevice?: DeviceInfo[];
  /** 只读设备组 */
  ReadOnlyDevice?: DeviceInfo[];
  /** 空闲设备组 */
  FreeDevice?: DeviceInfo[];
}

/** 集群扩展信息。 */
declare interface InstanceExpand {
  /** 集群ID */
  InstanceId?: string;
  /** 集群名称 */
  InstanceName?: string;
  /** 用户ID */
  AppId?: number;
  /** 地域 */
  Region?: string;
  /** 可用区 */
  Zone?: string;
  /** 集群类型： 0：一主一备，1：一主两备 */
  InstanceType?: number;
  /** 集群状态: 0 集群创建中, 1 集群有效, 2 集群扩容中, 3 集群删除中, 4 集群缩容中 -1 集群已隔离 -2 集群已删除 */
  InstanceStatus?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 实例自动续费标识： 0正常续费 1自动续费 2到期不续费 */
  AutoRenewFlag?: number;
  /** 机型 */
  Machine?: string;
  /** 过期时间 */
  PeriodEndTime?: string;
  /** 集群信息 */
  InstanceDetail?: InstanceDetail;
  /** 计费侧的产品ID */
  Pid?: number;
}

/** 标签信息。 */
declare interface Label {
  /** 在集群内的节点Label键 */
  Key?: string;
  /** 在集群内的节点Label键值 */
  Value?: string;
}

/** DB Custom 节点登录相关配置。 */
declare interface LoginSettings {
  /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下： Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) ~ ! @ # $ % ^ &amp; * - + = | { } [ ] : ; ' , . ? / ]中的特殊符号。 Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ~ ! @ # $ % ^ &amp; * - + = | { } [ ] : ; ' , . ? /]中的特殊符号。 */
  Password?: string;
  /** 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口 DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。入参限制：当前仅支持设置单个 ID。 */
  KeyIds?: string[];
  /** 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为true。枚举值：true： 表示保持镜像的登录设置false： 表示不保持镜像的登录设置 */
  KeepImageLogin?: string;
}

/** 资源信息。 */
declare interface MetaResource {
  /** CPU核心单位：核 */
  Cpu?: number;
  /** 内存单位：GiB */
  Memory?: number;
  /** POD数量单位：个 */
  Pods?: number;
}

/** 安全组规则 */
declare interface PolicyRule {
  /** 规则动作，枚举值：ACCEPT： 允许DROP： 拒绝 */
  Action?: string;
  /** 来源/目标 IP 或 CIDR，如 0.0.0.0/0 */
  CidrIp?: string;
  /** 端口范围，如 80、8080-8090、ALL */
  PortRange?: string;
  /** 协议类型，如 tcp、udp、icmp、ALL */
  IpProtocol?: string;
  /** 协议端口模板 ID */
  ServiceModule?: string;
  /** IP 地址模板 ID */
  AddressModule?: string;
  /** 安全组 ID */
  Id?: string;
  /** 规则备注描述 */
  Desc?: string;
}

/** 地域信息。 */
declare interface RegionInfo {
  /** 地域 */
  Region?: string;
  /** 售卖状态枚举值：SELL： 正常售卖SOLD_OUT： 售罄 */
  RegionState?: string;
}

/** 标签对象，包含tagKey & tagValue */
declare interface ResourceTag {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** 安全组详情 */
declare interface SecurityGroup {
  /** 安全组ID */
  SecurityGroupId?: string;
  /** 所属项目 ID */
  ProjectId?: number;
  /** 安全组创建时间 */
  CreateTime?: string;
  /** 安全组入方向规则列表 */
  Inbound?: PolicyRule[];
  /** 安全组出方向规则列表 */
  Outbound?: PolicyRule[];
  /** 安全组名称 */
  SecurityGroupName?: string;
  /** 安全组备注说明 */
  SecurityGroupRemark?: string;
}

/** DB Custom 节点系统盘信息。 */
declare interface SystemDisk {
  /** 磁盘类型枚举值：CLOUD_HSSD： 增强型云硬盘 */
  DiskType: string;
  /** 磁盘大小单位：GiB */
  DiskSize: number;
}

/** 标签键值对。 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** 集群节点 taint 信息。 */
declare interface Taint {
  /** Taint 的键，格式对齐 K8s 原生约束（prefix DNS 子域 ≤ 253 字符，name ≤ 63 字符），不可使用系统保留前缀 */
  Key: string;
  /** 污点效果枚举值：NoSchedule： 不允许新 Pod 调度到该节点（已运行 Pod 不受影响）PreferNoSchedule： 尽量不调度，无法满足时仍可调度NoExecute： 不允许调度，且会驱逐已在节点上运行的不容忍该 Taint 的 Pod */
  Effect?: string;
  /** Taint 的值，≤ 63 字符，可为空 */
  Value?: string;
}

/** 可用区信息。 */
declare interface ZoneInfo {
  /** 支持的可用区 */
  Zone?: string;
  /** 可用区状态枚举值：SELL： 正常售卖SOLD_OUT： 售罄 */
  ZoneState?: string;
}

declare interface AddNodesToDBCustomClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 需上架的节点 ID 列表 */
  NodeIds: string[];
  /** 节点上架后重设的操作系统镜像ID取值参考：可通过"DescribeDBCustomImages"接口获取支持的镜像。 */
  ImageId: string;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。入参限制：若选择密钥方式，KeyIds 仅支持单个 ID。三种方式必须且仅可以设置其中一种。 */
  LoginSettings: LoginSettings;
  /** 节点上架成功后初始化新增的自定义 Label入参限制：单次 ≤ 20 对 */
  Labels?: Label[];
  /** 节点上架成功后初始化下发的Taint入参限制：单次 ≤ 5 对 */
  Taints?: Taint[];
  /** 主机hostname ，仅 HostNameType=1 时必填，其余情况忽略；不支持大写字母入参限制：- 点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。不允许使用下划线(_)。Windows 节点：主机名名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。其他类型（Linux 等）节点：主机名字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。上架多台节点时：指定模式串 {R:x}：表示生成数字序列 [x, x+n-1]，其中 n为购买节点的数量。例如：输入 server_{R:3}，购买1台时，节点主机名为 server_3；购买2台时，主机名分别为 server_3、server_4。指定模式串 {R:x,F:y}：y表示固定位数（可选），取值范围为 [0,8]，默认值 0表示不固定位数（等效于 {R:x}）。不足位时自动补零，例如：输入server_{R:3,F:3}，购买2台时，节点主机名为 server_003、server_004。若数字位数超过 y（如 {R:99,F:2}），以实际位数为准，例如：app_{R:99,F:2}，购买2台时，节点主机名为 app_99、app_100。指定模式串 {IP}：自动替换为节点的内网IP地址。例如：输入 node-{IP}，节点主机名为 node-10.0.12.8；支持与序号模式串混合使用，例如：输入 web-{IP}-{R:1}，购买2台时，节点主机名分别为 web-10.0.12.8-1、web-10.0.12.9-2。模式串需严格遵循 {R:x,F:y}、{R:x} 或 {IP} 格式，无效格式（如 {}）视为普通文本。支持多个模式串。未指定模式串：节点主机名添加后缀 1、2...n，其中n表示购买节点的数量，例如 server_购买2台时生成 server_1、server_2。 */
  HostName?: string;
  /** HostName 来源类型枚举值：0： 复用节点创建时设置的 hostname，为空则报错1： 重新指定 HostName，需同时传 HostName 字段（支持模式串 {R:x}、{R:x,F:y}、{IP}）2： 系统自动分配，用 NodeId 作为 HostName */
  HostNameType?: number;
  /** 试运行开关，true 时只执行参数校验，不发起上架流程默认值：false */
  DryRun?: boolean;
}

declare interface AddNodesToDBCustomClusterResponse {
  /** 上架节点的任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckRoleAuthorizedRequest {
  /** 待检测的角色名字 */
  RoleName: string;
}

declare interface CheckRoleAuthorizedResponse {
  /** 角色权限状态枚举值：AUTHORIZED： 已经创建授权NEED_GRANT： 未授权ERROR： 报错 */
  Status?: string;
  /** 出错的错误信息 */
  Message?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBCustomClusterRequest {
  /** 容器网络，在此集群的所有 POD 与此网络连通 */
  ContainerNetwork: ContainerNetwork;
  /** 集群名称入参限制：最长128个字符。 */
  ClusterName?: string;
  /** 集群的API Server的网络信息入参限制：必须为此账号下拥有的网络地址，可以与容器网络保持一致。 */
  ApiServerNetwork?: ApiServerNetwork;
  /** 集群描述 */
  ClusterDescription?: string;
  /** 集群标签 */
  Tags?: Tag[];
  /** 客户端Token */
  ClientToken?: string;
  /** 试运行开关，true 时只执行参数校验，不发起创建流程，默认 false */
  DryRun?: boolean;
}

declare interface CreateDBCustomClusterResponse {
  /** 本次创建的集群ID */
  ClusterId?: string;
  /** 本次创建集群的任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDBCustomNodesRequest {
  /** 产品支持的可用区枚举值：ap-shanghai-5： 上海五区ap-shanghai-8： 上海八区ap-nanjing-3： 南京三区 */
  Zone: string;
  /** 镜像ID参数格式：img-xxxxxxx入参限制：必须为当前账号下DB Custom 产品拥有的镜像取值参考：可通过"DescribeDBCustomImages"接口获取支持的镜像。 */
  ImageId: string;
  /** 为节点打通SSH连接的VPC 网络ID。参数格式：vpc-b4zgtest入参限制：必须是当前账号下拥有的VPC 网络ID，且不能跨地域。取值参考：可通过【查询VPC列表】接口获取：https://cloud.tencent.com/document/product/215/15778 */
  VpcId: string;
  /** 为节点打通SSH连接的VPC 子网 ID。 参数格式：subnet-t13dtest入参限制：必须是VPC之下的子网，子网必须与可用区对应。取值参考：可通过【查询子网列表】接口获取：https://cloud.tencent.com/document/product/215/15784 */
  SubnetId: string;
  /** 节点机型枚举值：DB.AT5.32XLARGE512： 高IO型服务器：128核心512GB内存，8*7180GB本地NvME SSDB。DB.AT5.64XLARGE1152： 高IO型服务器：256核心1152GB内存，12*7180GB本地NvME SSDB。DB.AT5.128XLARGE2304： 高IO型服务器：512核心2304GB内存，24*7180GB本地NvME SSDB。DB.AT5.16XLARGE256： 高IO型服务器：64核心256GB内存，4*7180GB本地NvME SSDB。DB.AT5.8XLARGE128： 高IO型服务器：32核心128GB内存，2*7180GB本地NvME SSDB。 */
  NodeType: string;
  /** 购买的节点数量取值范围：[1, 20] */
  NodeCount: number;
  /** 节点登录设置。通过该参数可以设置节点的登录方式密码、密钥或保持镜像的原始登录设置。入参限制：若选择密钥方式，KeyIds 仅支持单个 ID。三种方式必须且仅可以设置其中一种。 */
  LoginSettings: LoginSettings;
  /** 购买时长(月): 1/2/3/4/5/6/7/8/9/10/11/12/24/36取值范围：[1, 36]单位：月默认值：1 */
  Period?: number;
  /** 自动续费配置枚举值：1： 自动续费2： 不自动续费默认值：不自动续费 */
  AutoRenew?: number;
  /** 节点名称入参限制：最多128个字符 */
  NodeName?: string;
  /** 是否使用代金券自动抵扣枚举值：1： 使用0： 不使用默认值：0 */
  AutoVoucher?: number;
  /** 代金券ID入参限制：必须为当前账号下拥有的未抵扣的代金券ID。 */
  VoucherIds?: string[];
  /** 标签 */
  Tags?: Tag[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 计费模式枚举值：PREPAID： 包年包月POSTPAID： 按量付费默认值：默认为包年包月(PREPAID) */
  ChargeType?: string;
  /** 访问主机的网络模式枚举值：privatelink： 四层网络联通，放通SSH 通路cross_tenant_eni： 三层网络联通，双网卡模式默认值：默认值为：privatelink */
  NetworkMode?: string;
  /** 系统盘配置入参限制：仅云盘版机型支持，如DB.SA5机型。本地盘机型DB.AT5机型不支持设置 */
  SystemDisk?: SystemDisk;
  /** 数据库盘配置入参限制：仅云盘版机型支持，如DB.SA5机型。本地盘机型DB.AT5机型不支持设置 */
  DataDisks?: DataDisk[];
  /** 主机的hostname。参数格式：字符串或者指定模式串入参限制：- 点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。不允许使用下划线(_)。Windows 节点：主机名名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。其他类型（Linux 等）节点：主机名字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。购买多台节点时：指定模式串 {R:x}：表示生成数字序列 [x, x+n-1]，其中 n为购买节点的数量。例如：输入 server_{R:3}，购买1台时，节点主机名为 server_3；购买2台时，主机名分别为 server_3、server_4。指定模式串 {R:x,F:y}：y表示固定位数（可选），取值范围为 [0,8]，默认值 0表示不固定位数（等效于 {R:x}）。不足位时自动补零，例如：输入server_{R:3,F:3}，购买2台时，节点主机名为 server_003、server_004。若数字位数超过 y（如 {R:99,F:2}），以实际位数为准，例如：app_{R:99,F:2}，购买2台时，节点主机名为 app_99、app_100。指定模式串 {IP}：自动替换为节点的内网IP地址。例如：输入 node-{IP}，节点主机名为 node-10.0.12.8；支持与序号模式串混合使用，例如：输入 web-{IP}-{R:1}，购买2台时，节点主机名分别为 web-10.0.12.8-1、web-10.0.12.9-2。模式串需严格遵循 {R:x,F:y}、{R:x} 或 {IP} 格式，无效格式（如 {}）视为普通文本。支持多个模式串。未指定模式串：节点主机名添加后缀 1、2...n，其中n表示购买节点的数量，例如 server_购买2台时生成 server_1、server_2。 */
  HostName?: string;
  /** 试运行开关。枚举值：true： 为 true 时接口只执行参数校验与资源申请检查（库存、配额、网络等），完成后立即返回空响应，不会真正下单，也不会创建节点记录。用于调用方在真正下单前做一次可行性预检。false： 不预检查默认值：false */
  DryRun?: boolean;
  /** 设置节点安全组参数格式：设置需要与节点绑定的多个安全组ID，以数组形式配置。 */
  SecurityGroupIds?: string[];
}

declare interface CreateDBCustomNodesResponse {
  /** 节点ID列表 */
  NodeIds?: string[];
  /** 创建节点的任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomClusterDetailRequest {
  /** DB Custom 集群ID入参限制：必须为此账号拥有的DB Custom集群 */
  ClusterId: string;
}

declare interface DescribeDBCustomClusterDetailResponse {
  /** 集群ID */
  ClusterId?: string;
  /** 集群名称 */
  ClusterName?: string;
  /** 集群描述 */
  ClusterDescription?: string;
  /** 集群所属地域枚举值：ap-shanghai： 上海地域ap-nanjing： 南京地域 */
  Region?: string;
  /** DB Custom 集群状态枚举值：Creating： 创建中Running： 运行中Destroying： 销毁中Initializing： 初始化中 */
  ClusterStatus?: string;
  /** 集群版本枚举值：1.34.1： 集群版本1.34.1默认值：1.34.1 */
  ClusterVersion?: string;
  /** 集群下的节点数量 */
  ClusterNodeNum?: number;
  /** 集群规模 */
  ClusterLevel?: string;
  /** 创建时间 */
  CreatedTime?: string;
  /** 集群标签信息 */
  Tags?: Tag[] | null;
  /** 集群的API Server的网络信息 */
  ApiServerNetwork?: ApiServerNetwork | null;
  /** 容器网络，在此集群中的所有Pod将与此网络连通 */
  ContainerNetwork?: ContainerNetwork | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomClusterKubeconfigRequest {
  /** 集群ID入参限制：必须为当前节点拥有的DB Custom 集群 */
  ClusterId: string;
}

declare interface DescribeDBCustomClusterKubeconfigResponse {
  /** 集群APIServer信息 */
  Kubeconfig?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomClusterNodeConfigRequest {
  /** 集群ID */
  ClusterId: string;
  /** 按照一个或者多个 NodeId 查询。入参限制：每次请求的数量上限为100 */
  NodeIds: string[];
}

declare interface DescribeDBCustomClusterNodeConfigResponse {
  /** 当前账号下拥有的DB Custom 节点列表信息 */
  NodeSet?: DBCustomClusterNodeConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomClusterNodeResourcesRequest {
  /** 集群ID */
  ClusterId: string;
  /** 按照一个或者多个 NodeId 查询。入参限制：每次请求的数量上限为50 */
  NodeIds: string[];
}

declare interface DescribeDBCustomClusterNodeResourcesResponse {
  /** 当前账号下拥有的DB Custom 节点列表信息 */
  NodeSet?: DBCustomClusterNodeResource[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomClusterNodesRequest {
  /** DB Custom 集群ID */
  ClusterId: string;
  /** 查询筛选条件。支持的条件有：node-name：DB Custom 节点名称。 */
  Filters?: Filter[];
  /** 分页偏移量 */
  Offset?: number;
  /** 返回数量取值范围：[1, 100]默认值：20 */
  Limit?: number;
}

declare interface DescribeDBCustomClusterNodesResponse {
  /** 集群下总的节点数量 */
  TotalCount?: number;
  /** 分页后节点列表信息 */
  NodeSet?: DBCustomClusterNode[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomClusterResourcesRequest {
  /** 集群ID */
  ClusterId: string;
}

declare interface DescribeDBCustomClusterResourcesResponse {
  /** 参与汇总的工作节点总数（不含控制面节点）单位：台 */
  NodeCount?: number;
  /** 集群所有节点的资源物理总容量之和 */
  Capacity?: MetaResource;
  /** 集群所有节点的可分配容量之和（= Capacity - 系统预留） */
  Allocatable?: MetaResource;
  /** 集群所有非终态 Pod 的 requests 申请量之和（含系统 Pod） */
  Requests?: MetaResource;
  /** 集群所有非终态 Pod 的 limits 上限之和（含系统 Pod，Pods 字段无语义，固定为 0） */
  Limits?: MetaResource;
  /** 集群可再调度余量（所有节点 max(0, Allocatable - Requests) 累加求和） */
  Available?: MetaResource;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomClustersRequest {
  /** 按照一个或者多个 ClusterId 查询。入参限制：每次请求的数量上限为100 */
  ClusterIds?: string[];
  /** 查询筛选条件。支持的筛选条件包括：cluster-name：DB Custom 集群名称，精确匹配。cluster-status：DB Custom 集群状态（Creating，Running，Destroying）。 */
  Filters?: Filter[];
  /** 根据标签的 Key 和 Value 筛选 DB Custom 集群 */
  Tags?: Tag[];
  /** 集群列表分页偏移量 */
  Offset?: number;
  /** 返回数量取值范围：[1, 100]默认值：20 */
  Limit?: number;
}

declare interface DescribeDBCustomClustersResponse {
  /** 总集群数量 */
  TotalCount?: number;
  /** 集群列表信息 */
  ClusterSet?: DBCustomCluster[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomImagesRequest {
  /** 支持镜像过滤的选项取值参考：image-id,按镜像 ID 过滤 os-type,按操作系统类型过滤(linux / windows)image-type，按镜像类型过滤（PUBLIC_IMAGE（公共镜像）/ PRIVATE_IMAGE（私有镜像））architecture，按架构过滤（x86_64 / arm64） */
  Filters?: Filter[];
  /** 偏移量默认值：0 */
  Offset?: number;
  /** 返回数量取值范围：[1, 100]默认值：20 */
  Limit?: number;
}

declare interface DescribeDBCustomImagesResponse {
  /** 总镜像数量 */
  TotalCount?: number;
  /** 支持的镜像列表信息 */
  ImageSet?: DBCustomImage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomNodeSecurityGroupsRequest {
  /** 节点id */
  NodeId: string;
}

declare interface DescribeDBCustomNodeSecurityGroupsResponse {
  /** 与节点绑定的安全组id，数组格式，根据内部安全组ID的顺序来确认优先级。 */
  Groups?: SecurityGroup[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomNodeTypesRequest {
  /** 支持通过地域，可用区，机型系列，机型标识进行过滤入参限制：region、zone、node-family、node-type */
  Filters?: Filter[];
}

declare interface DescribeDBCustomNodeTypesResponse {
  /** 节点机型详细信息 */
  NodeTypeSet?: DBCustomNodeTypeInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomNodesRequest {
  /** 按照一个或者多个 NodeId 查询。入参限制：每次请求的数量上限为100 */
  NodeIds?: string[];
  /** 查询筛选条件。支持的筛选条件包括：cluster-id：按 DB Custom 集群进行过滤。node-name：按 DB Custom 节点名称进行过滤，精确匹配。status：按 DB Custom 节点状态进行过滤。（可选值：Creating，Running，Isolating，Isolated，Activating（解除隔离中），Destroying）zone：按 DB Custom 节点所在可用区进行过滤。 */
  Filters?: Filter[];
  /** 根据标签的 Key 和 Value 筛选 DB Custom 节点 */
  Tags?: Tag[];
  /** 分页偏移量 */
  Offset?: number;
  /** 返回数量取值范围：[1, 100]默认值：20 */
  Limit?: number;
}

declare interface DescribeDBCustomNodesResponse {
  /** 当前账号下拥有的DB Custom 节点总数 */
  TotalCount?: number;
  /** 当前账号下拥有的DB Custom 节点列表信息 */
  NodeSet?: DBCustomNode[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomRegionsRequest {
}

declare interface DescribeDBCustomRegionsResponse {
  /** 支持售卖的地域列表信息 */
  RegionSet?: RegionInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomTaskStatusRequest {
  /** DB Custom 任务ID */
  TaskId: number;
}

declare interface DescribeDBCustomTaskStatusResponse {
  /** 任务 ID枚举值：Running： 运行中Succeeded： 成功Failed： 失败 */
  Status?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBCustomZonesRequest {
}

declare interface DescribeDBCustomZonesResponse {
  /** 查询支持售卖的地域对应的可用区，State字段值如为SELL则代表正常售卖。 */
  ZoneSet?: ZoneInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDBInstancesRequest {
  /** 独享集群实例Id */
  InstanceId: string;
  /** 独享集群主机Id */
  HostId?: string;
  /** 分页返回数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 实例类型,0:mariadb, 1:tdsql */
  ShardType?: number[];
}

declare interface DescribeDBInstancesResponse {
  /** 独享集群内的DB实例列表 */
  Instances?: DBInstanceDetail[];
  /** 独享集群内的DB实例总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostListRequest {
  /** 独享集群实例Id */
  InstanceId: string;
  /** 分页返回数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 分配状态过滤，0-可分配，1-禁止分配 */
  AssignStatus?: number[];
}

declare interface DescribeHostListResponse {
  /** 主机总数 */
  TotalCount: number;
  /** 主机详情 */
  Hosts: HostDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceDetailRequest {
  /** 独享集群实例Id */
  InstanceId: string;
}

declare interface DescribeInstanceDetailResponse {
  /** 独享集群实例Id */
  InstanceId?: string;
  /** 独享集群实例名称 */
  InstanceName?: string;
  /** 地域 */
  Region?: string;
  /** 产品ID, 0:CDB, 1:TDSQL */
  ProductId?: number;
  /** 集群类型, 0:公有云, 1:金融围笼 */
  Type?: number;
  /** 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘 */
  HostType?: number;
  /** 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费 */
  AutoRenewFlag?: number;
  /** 集群状态 */
  Status?: number;
  /** 集群状态描述 */
  StatusDesc?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 到期时间 */
  PeriodEndTime?: string;
  /** 主机数 */
  HostNum?: number;
  /** Db实例数 */
  DbNum?: number;
  /** 分配策略, 0:紧凑, 1:均匀 */
  AssignStrategy?: number;
  /** 总主机CPU(单位:核) */
  CpuSpec?: number;
  /** 总已分配CPU(单位:核) */
  CpuAssigned?: number;
  /** 总可分配CPU(单位:核) */
  CpuAssignable?: number;
  /** 总主机内存(单位:GB) */
  MemorySpec?: number;
  /** 总已分配内存(单位:GB) */
  MemoryAssigned?: number;
  /** 总可分配内存(单位:GB) */
  MemoryAssignable?: number;
  /** 总机器磁盘(单位:GB) */
  DiskSpec?: number;
  /** 总已分配磁盘(单位:GB) */
  DiskAssigned?: number;
  /** 总可分配磁盘(单位:GB) */
  DiskAssignable?: number;
  /** 可用区 */
  Zone?: string;
  /** 金融围笼ID */
  FenceId?: string;
  /** 所属集群ID(默认集群为空) */
  ClusterId?: string;
  /** 独享集群的标签信息 */
  ResourceTags?: ResourceTag[];
  /** CPU类型，Intel/AMD,Hygon */
  CpuType?: string;
  /** 可用区列表 */
  Zones?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceListRequest {
  /** 分页返回数量 */
  Limit?: number;
  /** 分页偏移量 */
  Offset?: number;
  /** 排序字段，createTime,instancename两者之一 */
  OrderBy?: string;
  /** 排序规则，desc,asc两者之一 */
  SortBy?: string;
  /** 按产品过滤，0:CDB, 1:TDSQL */
  ProductId?: number[];
  /** 按实例ID过滤 */
  InstanceId?: string[];
  /** 按实例名称过滤 */
  InstanceName?: string[];
  /** 按金融围笼ID过滤 */
  FenceId?: string[];
  /** 按实例状态过滤, -1:已隔离, 0:创建中, 1:运行中, 2:扩容中, 3:删除中 */
  Status?: number[];
  /** 按所属集群ID过滤 */
  ClusterId?: string[];
}

declare interface DescribeInstanceListResponse {
  /** 独享集群列表 */
  Instances?: DescribeInstanceDetail[];
  /** 独享集群实例总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 集群类型: 0 一主一备, 1 一主两备...N-1 一主N备 */
  InstanceTypes?: number[];
  /** 产品ID: 0 MYSQL，1 TDSQL */
  ProductIds?: number[];
  /** 集群uuid: 如 dbdc-q810131s */
  InstanceIds?: string[];
  /** 是否按金融围笼标志搜索 */
  FenceFlag?: boolean;
  /** 按实例名字模糊匹配 */
  InstanceName?: string;
  /** 每页数目, 整型 */
  PageSize?: number;
  /** 页码, 整型 */
  PageNumber?: number;
  /** 排序字段，枚举：createtime,groupname */
  OrderBy?: string;
  /** 排序方式: asc升序, desc降序 */
  OrderByType?: string;
  /** 集群状态: -2 已删除, -1 已隔离, 0 创建中, 1 运行中, 2 扩容中, 3 删除中 */
  InstanceStatus?: number;
}

declare interface DescribeInstancesResponse {
  /** 集群数量 */
  TotalCount?: number;
  /** 集群扩展信息 */
  Instances?: InstanceExpand[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyDBCustomClusterRequest {
  /** 待销毁的集群ID入参限制：待销毁的集群必须无任何节点在此集群中。 */
  ClusterId: string;
}

declare interface DestroyDBCustomClusterResponse {
  /** 销毁集群的任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DestroyDBCustomNodeRequest {
  /** DB Custom 节点ID */
  NodeId: string;
}

declare interface DestroyDBCustomNodeResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateDBCustomNodeRequest {
  /** DB Custom 节点ID */
  NodeId: string;
}

declare interface IsolateDBCustomNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBCustomClusterNodeConfigRequest {
  /** 目标集群 ID */
  ClusterId: string;
  /** 要修改的节点 ID 列表入参限制：数量范围 1~50 个 */
  NodeIds: string[];
  /** 新增或覆盖的集群 Label入参限制：- 单次 ≤ 20 对；合并后节点总量不超过 20Key 格式对齐 K8s 原生（两段式，prefix DNS 子域 ≤ 253 字符，name ≤ 63 字符）Value ≤ 63 字符，可为空不可操作系统保留前缀 */
  UpsertLabels?: Label[];
  /** 要删除的 Label key 列表，按 key 精确匹配，key 不存在时幂等放行。入参限制：- Key 格式对齐 K8s 原生（两段式，prefix DNS 子域 ≤ 253 字符，name ≤ 63 字符）Value ≤ 63 字符，可为空不可操作系统保留前缀 */
  DeleteLabelKeys?: string[];
  /** 新增或覆盖的 Taint。入参限制：- 单次 ≤ 5 对；合并后节点总量不超过 5。唯一性键为 (Key, Effect)，匹配到已有 (Key, Effect) 时覆盖 Value，否则新增Effect 合法值：NoSchedule / PreferNoSchedule / NoExecute同一 Key 允许多个不同 Effect 的 Taint 并存 */
  UpsertTaints?: Taint[];
  /** 要删除的 Taint 过滤器列表入参限制：- 唯一性键为 (Key, Effect)，匹配到已有 (Key, Effect) 时覆盖 Value，否则新增Effect 合法值：NoSchedule / PreferNoSchedule / NoExecute同一 Key 允许多个不同 Effect 的 Taint 并存 */
  DeleteTaints?: Taint[];
}

declare interface ModifyDBCustomClusterNodeConfigResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBCustomClusterTagsRequest {
  /** DB Custom 集群ID参数格式：dbcc-xxxxxxxx */
  ClusterId: string;
  /** 为 DB Custom 集群绑定的标签信息入参限制：参考标签平台的限制策略 */
  AddTags?: Tag[];
  /** 为 DB Custom 集群删除的标签Key */
  DeleteTagKeys?: string[];
}

declare interface ModifyDBCustomClusterTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBCustomNodeAttributesRequest {
  /** 节点ID参数格式：dbcn-hq98qjym */
  NodeId: string;
  /** 主机 HostName入参限制：参数设置规则参见：创建 DB Custom 节点接口的 HostName 参数说明。注意：节点在没有加入到集群之前才支持修改主机 HostName。 */
  HostName?: string;
  /** 节点名称入参限制：参数设置规则参见：创建 DB Custom 节点接口的 NodeName 参数说明。 */
  NodeName?: string;
  /** 修改实例 HostName 是否自动重启实例，不传默认自动重启。枚举值：true： 修改主机 HostName，并自动重启主机false： 修改主机 HostName，不自动重启主机，需要手动重启使新主机 HostName 生效默认值：true */
  AutoReboot?: boolean;
}

declare interface ModifyDBCustomNodeAttributesResponse {
  /** 上架节点的任务ID */
  TaskId?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBCustomNodeSecurityGroupsRequest {
  /** 节点id */
  NodeId: string;
  /** 安全组id，数组格式，根据内部安全组ID的顺序来确认优先级。 */
  SecurityGroupIds: string[];
}

declare interface ModifyDBCustomNodeSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDBCustomNodeTagsRequest {
  /** DB Custom 节点ID参数格式：dbcn-0zan5xxk */
  NodeId: string;
  /** 为节点绑定的标签信息入参限制：参考标签侧的限制 */
  AddTags?: Tag[];
  /** 需要删除的标签Key */
  DeleteTagKeys?: string[];
}

declare interface ModifyDBCustomNodeTagsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceNameRequest {
  /** 独享集群实例Id */
  InstanceId: string;
  /** 独享集群实例名称 */
  InstanceName?: string;
}

declare interface ModifyInstanceNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveNodesFromDBCustomClusterRequest {
  /** DB Custom 集群ID */
  ClusterId: string;
  /** 要下架的 DB Custom 节点ID列表 */
  NodeIds: string[];
  /** 节点的登录参数 */
  LoginSettings?: LoginSettings;
}

declare interface RemoveNodesFromDBCustomClusterResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewDBCustomNodeRequest {
  /** 节点ID */
  NodeId: string;
  /** 续费周期取值范围：[1, 36]单位：月默认值：1 */
  Period?: number;
  /** 是否开启自动续费枚举值：0： 不自动续费1： 自动续费默认值：1 */
  AutoRenew?: number;
  /** 是否自动使用代金券 */
  AutoVoucher?: number;
  /** 代金券ID */
  VoucherIds?: string[];
}

declare interface RenewDBCustomNodeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Dbdc 云数据库独享集群} */
declare interface Dbdc {
  (): Versions;
  /** 添加节点到集群 {@link AddNodesToDBCustomClusterRequest} {@link AddNodesToDBCustomClusterResponse} */
  AddNodesToDBCustomCluster(data: AddNodesToDBCustomClusterRequest, config?: AxiosRequestConfig): AxiosPromise<AddNodesToDBCustomClusterResponse>;
  /** 角色授权检查 {@link CheckRoleAuthorizedRequest} {@link CheckRoleAuthorizedResponse} */
  CheckRoleAuthorized(data: CheckRoleAuthorizedRequest, config?: AxiosRequestConfig): AxiosPromise<CheckRoleAuthorizedResponse>;
  /** 创建集群 {@link CreateDBCustomClusterRequest} {@link CreateDBCustomClusterResponse} */
  CreateDBCustomCluster(data: CreateDBCustomClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBCustomClusterResponse>;
  /** 创建节点 {@link CreateDBCustomNodesRequest} {@link CreateDBCustomNodesResponse} */
  CreateDBCustomNodes(data: CreateDBCustomNodesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBCustomNodesResponse>;
  /** 查询集群详情 {@link DescribeDBCustomClusterDetailRequest} {@link DescribeDBCustomClusterDetailResponse} */
  DescribeDBCustomClusterDetail(data: DescribeDBCustomClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClusterDetailResponse>;
  /** 查询集群 Kubeconfig {@link DescribeDBCustomClusterKubeconfigRequest} {@link DescribeDBCustomClusterKubeconfigResponse} */
  DescribeDBCustomClusterKubeconfig(data: DescribeDBCustomClusterKubeconfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClusterKubeconfigResponse>;
  /** 查询集群内节点的配置信息 {@link DescribeDBCustomClusterNodeConfigRequest} {@link DescribeDBCustomClusterNodeConfigResponse} */
  DescribeDBCustomClusterNodeConfig(data: DescribeDBCustomClusterNodeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClusterNodeConfigResponse>;
  /** 查询集群内节点的资源信息 {@link DescribeDBCustomClusterNodeResourcesRequest} {@link DescribeDBCustomClusterNodeResourcesResponse} */
  DescribeDBCustomClusterNodeResources(data: DescribeDBCustomClusterNodeResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClusterNodeResourcesResponse>;
  /** 查询集群的节点列表 {@link DescribeDBCustomClusterNodesRequest} {@link DescribeDBCustomClusterNodesResponse} */
  DescribeDBCustomClusterNodes(data: DescribeDBCustomClusterNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClusterNodesResponse>;
  /** 查询集群资源信息 {@link DescribeDBCustomClusterResourcesRequest} {@link DescribeDBCustomClusterResourcesResponse} */
  DescribeDBCustomClusterResources(data: DescribeDBCustomClusterResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClusterResourcesResponse>;
  /** 查询集群列表 {@link DescribeDBCustomClustersRequest} {@link DescribeDBCustomClustersResponse} */
  DescribeDBCustomClusters(data?: DescribeDBCustomClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClustersResponse>;
  /** 查询可用的系统镜像列表 {@link DescribeDBCustomImagesRequest} {@link DescribeDBCustomImagesResponse} */
  DescribeDBCustomImages(data?: DescribeDBCustomImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomImagesResponse>;
  /** 查询节点安全组信息 {@link DescribeDBCustomNodeSecurityGroupsRequest} {@link DescribeDBCustomNodeSecurityGroupsResponse} */
  DescribeDBCustomNodeSecurityGroups(data: DescribeDBCustomNodeSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomNodeSecurityGroupsResponse>;
  /** 查询节点支持的机型列表 {@link DescribeDBCustomNodeTypesRequest} {@link DescribeDBCustomNodeTypesResponse} */
  DescribeDBCustomNodeTypes(data?: DescribeDBCustomNodeTypesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomNodeTypesResponse>;
  /** 查询节点列表 {@link DescribeDBCustomNodesRequest} {@link DescribeDBCustomNodesResponse} */
  DescribeDBCustomNodes(data?: DescribeDBCustomNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomNodesResponse>;
  /** 查询地域列表 {@link DescribeDBCustomRegionsRequest} {@link DescribeDBCustomRegionsResponse} */
  DescribeDBCustomRegions(data?: DescribeDBCustomRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomRegionsResponse>;
  /** 查询任务状态 {@link DescribeDBCustomTaskStatusRequest} {@link DescribeDBCustomTaskStatusResponse} */
  DescribeDBCustomTaskStatus(data: DescribeDBCustomTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomTaskStatusResponse>;
  /** 查询指定地域的可用区列表 {@link DescribeDBCustomZonesRequest} {@link DescribeDBCustomZonesResponse} */
  DescribeDBCustomZones(data?: DescribeDBCustomZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomZonesResponse>;
  /** 查询独享集群内的DB实例列表 {@link DescribeDBInstancesRequest} {@link DescribeDBInstancesResponse} */
  DescribeDBInstances(data: DescribeDBInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBInstancesResponse>;
  /** 查询主机列表 {@link DescribeHostListRequest} {@link DescribeHostListResponse} */
  DescribeHostList(data: DescribeHostListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostListResponse>;
  /** 查询独享集群详情 {@link DescribeInstanceDetailRequest} {@link DescribeInstanceDetailResponse} */
  DescribeInstanceDetail(data: DescribeInstanceDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceDetailResponse>;
  /** 查询独享集群实例列表 {@link DescribeInstanceListRequest} {@link DescribeInstanceListResponse} */
  DescribeInstanceList(data?: DescribeInstanceListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceListResponse>;
  /** 查询独享集群列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 销毁集群 {@link DestroyDBCustomClusterRequest} {@link DestroyDBCustomClusterResponse} */
  DestroyDBCustomCluster(data: DestroyDBCustomClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyDBCustomClusterResponse>;
  /** 销毁节点 {@link DestroyDBCustomNodeRequest} {@link DestroyDBCustomNodeResponse} */
  DestroyDBCustomNode(data: DestroyDBCustomNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyDBCustomNodeResponse>;
  /** 隔离节点 {@link IsolateDBCustomNodeRequest} {@link IsolateDBCustomNodeResponse} */
  IsolateDBCustomNode(data: IsolateDBCustomNodeRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDBCustomNodeResponse>;
  /** 修改集群中节点的配置 {@link ModifyDBCustomClusterNodeConfigRequest} {@link ModifyDBCustomClusterNodeConfigResponse} */
  ModifyDBCustomClusterNodeConfig(data: ModifyDBCustomClusterNodeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBCustomClusterNodeConfigResponse>;
  /** 修改集群绑定的标签 {@link ModifyDBCustomClusterTagsRequest} {@link ModifyDBCustomClusterTagsResponse} */
  ModifyDBCustomClusterTags(data: ModifyDBCustomClusterTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBCustomClusterTagsResponse>;
  /** 修改节点属性 {@link ModifyDBCustomNodeAttributesRequest} {@link ModifyDBCustomNodeAttributesResponse} */
  ModifyDBCustomNodeAttributes(data: ModifyDBCustomNodeAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBCustomNodeAttributesResponse>;
  /** 修改节点安全组 {@link ModifyDBCustomNodeSecurityGroupsRequest} {@link ModifyDBCustomNodeSecurityGroupsResponse} */
  ModifyDBCustomNodeSecurityGroups(data: ModifyDBCustomNodeSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBCustomNodeSecurityGroupsResponse>;
  /** 修改节点绑定的标签 {@link ModifyDBCustomNodeTagsRequest} {@link ModifyDBCustomNodeTagsResponse} */
  ModifyDBCustomNodeTags(data: ModifyDBCustomNodeTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBCustomNodeTagsResponse>;
  /** 修改独享集群名称 {@link ModifyInstanceNameRequest} {@link ModifyInstanceNameResponse} */
  ModifyInstanceName(data: ModifyInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNameResponse>;
  /** 移出集群中的节点 {@link RemoveNodesFromDBCustomClusterRequest} {@link RemoveNodesFromDBCustomClusterResponse} */
  RemoveNodesFromDBCustomCluster(data: RemoveNodesFromDBCustomClusterRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveNodesFromDBCustomClusterResponse>;
  /** 续费或解隔离节点 {@link RenewDBCustomNodeRequest} {@link RenewDBCustomNodeResponse} */
  RenewDBCustomNode(data: RenewDBCustomNodeRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDBCustomNodeResponse>;
}

export declare type Versions = ["2020-10-29"];

export default Dbdc;
