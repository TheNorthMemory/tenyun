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
  /** 节点是否自动续费标记枚举值：1： 自动续费0： 不自动续费 */
  AutoRenew?: number;
  /** 交换机ID（已加密） */
  SwitchId?: string;
  /** 机架ID（已加密） */
  RackId?: string;
  /** 底层物理机IP（已加密） */
  HostIp?: string;
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
  DiskType?: string;
  /** 磁盘大小单位：GiB */
  DiskSize?: number;
  /** 磁盘名称 */
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

/** DB Custom 节点登录相关配置。 */
declare interface LoginSettings {
  /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下： Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) ~ ! @ # $ % ^ &amp; * - + = | { } [ ] : ; &#39; , . ? / ]中的特殊符号。 Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ~ ! @ # $ % ^ &amp; * - + = | { } [ ] : ; &#39; , . ? /]中的特殊符号。 */
  Password?: string;
  /** 密钥ID列表。关联密钥后，就可以通过对应的私钥来访问实例；KeyId可通过接口 DescribeKeyPairs获取，密钥与密码不能同时指定，同时Windows操作系统不支持指定密钥。入参限制：当前仅支持设置单个 ID。 */
  KeyIds?: string[];
  /** 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为true。枚举值：true： 表示保持镜像的登录设置false： 表示不保持镜像的登录设置 */
  KeepImageLogin?: string;
}

/** 标签对象，包含tagKey & tagValue */
declare interface ResourceTag {
  /** 标签键 */
  TagKey: string;
  /** 标签值 */
  TagValue: string;
}

/** DB Custom 节点系统盘信息。 */
declare interface SystemDisk {
  /** 磁盘类型枚举值：CLOUD_HSSD： 增强型云硬盘 */
  DiskType?: string;
  /** 磁盘大小单位：GiB */
  DiskSize?: number;
}

/** 标签键值对。 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

declare interface AddNodesToDBCustomClusterRequest {
  /** 集群ID */
  ClusterId: string;
  /** 需上架的节点 ID 列表 */
  NodeIds: string[];
  /** 节点上架后重设的操作系统镜像ID取值参考：可通过&quot;DescribeDBCustomImages&quot;接口获取支持的镜像。 */
  ImageId: string;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。入参限制：若选择密钥方式，KeyIds 仅支持单个 ID。三种方式必须且仅可以设置其中一种。 */
  LoginSettings: LoginSettings;
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
  /** 集群名称入参限制：最长128个字符，只能为中文，英文，下划线。 */
  ClusterName?: string;
  /** 集群的API Server的网络信息入参限制：必须为此账号下拥有的网络地址，可以与容器网络保持一致。 */
  ApiServerNetwork?: ApiServerNetwork;
  /** 集群描述 */
  ClusterDescription?: string;
  /** 集群标签 */
  Tags?: Tag[];
  /** 客户端Token */
  ClientToken?: string;
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
  /** 镜像ID参数格式：img-xxxxxxx入参限制：必须为当前账号下DB Custom 产品拥有的镜像取值参考：可通过&quot;DescribeDBCustomImages&quot;接口获取支持的镜像。 */
  ImageId: string;
  /** 为节点打通SSH连接的VPC 网络ID。参数格式：vpc-b4zgtest入参限制：必须是当前账号下拥有的VPC 网络ID，且不能跨地域。取值参考：可通过【查询VPC列表】接口获取：https://cloud.tencent.com/document/product/215/15778 */
  VpcId: string;
  /** 为节点打通SSH连接的VPC 子网 ID。 参数格式：subnet-t13dtest入参限制：必须是VPC之下的子网，子网必须与可用区对应。取值参考：可通过【查询子网列表】接口获取：https://cloud.tencent.com/document/product/215/15784 */
  SubnetId: string;
  /** 购买时长(月): 1/2/3/4/5/6/7/8/9/10/11/12/24/36取值范围：[1, 36]单位：月默认值：1 */
  Period: number;
  /** 节点机型枚举值：DB.AT5.32XLARGE512： 高IO型服务器：128核心512GB内存，8*7180GB本地NvME SSDB。DB.AT5.64XLARGE1152： 高IO型服务器：256核心1152GB内存，12*7180GB本地NvME SSDB。DB.AT5.128XLARGE2304： 高IO型服务器：512核心2304GB内存，24*7180GB本地NvME SSDB。DB.AT5.16XLARGE256： 高IO型服务器：64核心256GB内存，4*7180GB本地NvME SSDB。DB.AT5.8XLARGE128： 高IO型服务器：32核心128GB内存，2*7180GB本地NvME SSDB。 */
  NodeType: string;
  /** 购买的节点数量取值范围：[1, 20] */
  NodeCount: number;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。入参限制：若选择密钥方式，KeyIds 仅支持单个 ID。三种方式必须且仅可以设置其中一种。 */
  LoginSettings: LoginSettings;
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
  /** DB Custom 集群状态枚举值：Creating： 创建中Running： 运行中Destroying： 销毁中 */
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
  Period: number;
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
  /** DB Custom 集群上架节点 {@link AddNodesToDBCustomClusterRequest} {@link AddNodesToDBCustomClusterResponse} */
  AddNodesToDBCustomCluster(data: AddNodesToDBCustomClusterRequest, config?: AxiosRequestConfig): AxiosPromise<AddNodesToDBCustomClusterResponse>;
  /** 角色授权检查 {@link CheckRoleAuthorizedRequest} {@link CheckRoleAuthorizedResponse} */
  CheckRoleAuthorized(data: CheckRoleAuthorizedRequest, config?: AxiosRequestConfig): AxiosPromise<CheckRoleAuthorizedResponse>;
  /** 创建 DB Custom 集群 {@link CreateDBCustomClusterRequest} {@link CreateDBCustomClusterResponse} */
  CreateDBCustomCluster(data: CreateDBCustomClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBCustomClusterResponse>;
  /** 创建 DB Custom 节点 {@link CreateDBCustomNodesRequest} {@link CreateDBCustomNodesResponse} */
  CreateDBCustomNodes(data: CreateDBCustomNodesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDBCustomNodesResponse>;
  /** 查询 DB Custom 集群详情 {@link DescribeDBCustomClusterDetailRequest} {@link DescribeDBCustomClusterDetailResponse} */
  DescribeDBCustomClusterDetail(data: DescribeDBCustomClusterDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClusterDetailResponse>;
  /** 查询 DB Custom 集群 Kubeconfig {@link DescribeDBCustomClusterKubeconfigRequest} {@link DescribeDBCustomClusterKubeconfigResponse} */
  DescribeDBCustomClusterKubeconfig(data: DescribeDBCustomClusterKubeconfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClusterKubeconfigResponse>;
  /** 查询 DB Custom 集群的节点列表 {@link DescribeDBCustomClusterNodesRequest} {@link DescribeDBCustomClusterNodesResponse} */
  DescribeDBCustomClusterNodes(data: DescribeDBCustomClusterNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClusterNodesResponse>;
  /** 查询 DB Custom 集群列表 {@link DescribeDBCustomClustersRequest} {@link DescribeDBCustomClustersResponse} */
  DescribeDBCustomClusters(data?: DescribeDBCustomClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomClustersResponse>;
  /** 查询 DB Custom 可用的系统镜像列表 {@link DescribeDBCustomImagesRequest} {@link DescribeDBCustomImagesResponse} */
  DescribeDBCustomImages(data?: DescribeDBCustomImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomImagesResponse>;
  /** 查询 DB Custom 节点列表 {@link DescribeDBCustomNodesRequest} {@link DescribeDBCustomNodesResponse} */
  DescribeDBCustomNodes(data?: DescribeDBCustomNodesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomNodesResponse>;
  /** 查询 DB Custom 任务状态 {@link DescribeDBCustomTaskStatusRequest} {@link DescribeDBCustomTaskStatusResponse} */
  DescribeDBCustomTaskStatus(data: DescribeDBCustomTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDBCustomTaskStatusResponse>;
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
  /** 销毁 DB Custom 集群 {@link DestroyDBCustomClusterRequest} {@link DestroyDBCustomClusterResponse} */
  DestroyDBCustomCluster(data: DestroyDBCustomClusterRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyDBCustomClusterResponse>;
  /** 销毁 DB Custom 节点 {@link DestroyDBCustomNodeRequest} {@link DestroyDBCustomNodeResponse} */
  DestroyDBCustomNode(data: DestroyDBCustomNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DestroyDBCustomNodeResponse>;
  /** 隔离 DB Custom 节点 {@link IsolateDBCustomNodeRequest} {@link IsolateDBCustomNodeResponse} */
  IsolateDBCustomNode(data: IsolateDBCustomNodeRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDBCustomNodeResponse>;
  /** 修改 DB Custom 集群的标签配置 {@link ModifyDBCustomClusterTagsRequest} {@link ModifyDBCustomClusterTagsResponse} */
  ModifyDBCustomClusterTags(data: ModifyDBCustomClusterTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBCustomClusterTagsResponse>;
  /** 修改 DB Custom 节点的标签配置 {@link ModifyDBCustomNodeTagsRequest} {@link ModifyDBCustomNodeTagsResponse} */
  ModifyDBCustomNodeTags(data: ModifyDBCustomNodeTagsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDBCustomNodeTagsResponse>;
  /** 修改独享集群名称 {@link ModifyInstanceNameRequest} {@link ModifyInstanceNameResponse} */
  ModifyInstanceName(data: ModifyInstanceNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceNameResponse>;
  /** DB Custom 集群下架节点 {@link RemoveNodesFromDBCustomClusterRequest} {@link RemoveNodesFromDBCustomClusterResponse} */
  RemoveNodesFromDBCustomCluster(data: RemoveNodesFromDBCustomClusterRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveNodesFromDBCustomClusterResponse>;
  /** DB Custom 节点续费 {@link RenewDBCustomNodeRequest} {@link RenewDBCustomNodeResponse} */
  RenewDBCustomNode(data: RenewDBCustomNodeRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDBCustomNodeResponse>;
}

export declare type Versions = ["2020-10-29"];

export default Dbdc;
