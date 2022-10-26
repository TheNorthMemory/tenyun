/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 对端网关 */
declare interface CustomerGateway {
  /** 用户网关唯一ID */
  CustomerGatewayId: string;
  /** 网关名称 */
  CustomerGatewayName: string;
  /** 公网地址 */
  IpAddress: string;
  /** 创建时间 */
  CreateTime: string;
  /** VPN通道引用个数 */
  VpnConnNum: number | null;
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议 */
declare interface IKEOptionsSpecification {
  /** 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC'，默认为3DES-CBC */
  PropoEncryAlgorithm?: string;
  /** 认证算法：可选值：'MD5', 'SHA1'，默认为MD5 */
  PropoAuthenAlgorithm?: string;
  /** 协商模式：可选值：'AGGRESSIVE', 'MAIN'，默认为MAIN */
  ExchangeMode?: string;
  /** 本端标识类型：可选值：'ADDRESS', 'FQDN'，默认为ADDRESS */
  LocalIdentity?: string;
  /** 对端标识类型：可选值：'ADDRESS', 'FQDN'，默认为ADDRESS */
  RemoteIdentity?: string;
  /** 本端标识，当LocalIdentity选为ADDRESS时，LocalAddress必填。localAddress默认为vpn网关公网IP */
  LocalAddress?: string;
  /** 对端标识，当RemoteIdentity选为ADDRESS时，RemoteAddress必填 */
  RemoteAddress?: string;
  /** 本端标识，当LocalIdentity选为FQDN时，LocalFqdnName必填 */
  LocalFqdnName?: string;
  /** 对端标识，当remoteIdentity选为FQDN时，RemoteFqdnName必填 */
  RemoteFqdnName?: string;
  /** DH group，指定IKE交换密钥时使用的DH组，可选值：'GROUP1', 'GROUP2', 'GROUP5', 'GROUP14', 'GROUP24'， */
  DhGroupName?: string;
  /** IKE SA Lifetime，单位：秒，设置IKE SA的生存周期，取值范围：60-604800 */
  IKESaLifetimeSeconds?: number;
  /** IKE版本 */
  IKEVersion?: string;
}

/** IPSec配置，腾讯云提供IPSec安全会话设置 */
declare interface IPSECOptionsSpecification {
  /** PFS：可选值：'NULL', 'DH-GROUP1', 'DH-GROUP2', 'DH-GROUP5', 'DH-GROUP14', 'DH-GROUP24'，默认为NULL */
  PfsDhGroup: string;
  /** IPsec SA lifetime(KB)：单位KB，取值范围：2560-604800 */
  IPSECSaLifetimeTraffic: number;
  /** 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC', 'NULL'， 默认为AES-CBC-128 */
  EncryptAlgorithm?: string;
  /** 认证算法：可选值：'MD5', 'SHA1'，默认为 */
  IntegrityAlgorith?: string;
  /** IPsec SA lifetime(s)：单位秒，取值范围：180-604800 */
  IPSECSaLifetimeSeconds?: number;
  /** 安全协议，默认为ESP */
  SecurityProto?: string;
  /** 报文封装模式:默认为Tunnel */
  EncapMode?: string;
}

/** NAT IP信息 */
declare interface IpInfo {
  /** 子网ID */
  SubnetId: string;
  /** IP列表 */
  Ips: string[];
}

/** NAT详情 */
declare interface NatGatewayInfo {
  /** NAT网关ID */
  NatId: string;
  /** 网关名称 */
  NatName: string;
  /** 私有网络ID */
  VpcId: string;
  /** 私有网络名称 */
  VpcName: string;
  /** 网关创建状态，其中0表示创建中，1表示运行中，2表示创建失败 */
  ProductionStatus: number;
  /** EIP列表 */
  Eips: string[];
  /** 并发连接数规格，取值为1000000, 3000000, 10000000 */
  MaxConcurrent: number;
  /** 可用区 */
  Zone: string;
  /** 独占标识，其中0表示共享，1表示独占，默认值为0 */
  Exclusive: number;
  /** 转发模式，其中0表示IP方式，1表示网段方式 */
  ForwardMode: number;
  /** 私有网络网段 */
  VpcCidrBlock: string;
  /** 网关类型，取值为 small，middle，big，分别对应小型、中型、大型 */
  Type: string;
  /** 创建时间 */
  CreateTime: string;
  /** 网关启用状态，1为禁用，0为启用。 */
  State: number;
  /** 私有网络整型ID */
  IntVpcId: number;
  /** NAT资源ID */
  NatResourceId: number;
}

/** NAT子网信息 */
declare interface NatSubnetInfo {
  /** 子网名称 */
  Name: string;
  /** 子网ID */
  SubnetId: string;
  /** NAT子网类型，其中0表示绑定部分IP的NAT子网，1表示绑定全部IP的NAT子网，2表示绑定网关方式的NAT子网 */
  SubnetNatType: number;
  /** 子网网段 */
  CidrBlock: string;
}

/** 路由条目 */
declare interface RoutePolicy {
  /** 目的网段 */
  DestinationCidrBlock?: string;
  /** 下一跳类型，目前我们支持的类型有：LOCAL：物理机默认路由；VPN：VPN网关；PEERCONNECTION：对等连接；CPM：物理机自定义路由；CCN：云联网；TGW：公网默认路由；SSLVPN : SSH SSL VPN网关。 */
  GatewayType?: string;
  /** 下一跳地址，这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址。 */
  GatewayId?: string;
  /** 路由策略描述。 */
  RouteDescription?: string;
  /** 路由策略ID */
  RoutePolicyId?: string;
  /** 路由类型，目前我们支持的类型有：USER：用户自定义路由；NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；CCN：云联网路由，系统默认下发，不可编辑与删除。用户只能添加和编辑USER 类型的路由。 */
  RoutePolicyType?: string;
  /** 是否启用 */
  Enabled?: boolean;
}

/** 路由表对象 */
declare interface RouteTable {
  /** VPC实例ID。 */
  VpcId: string;
  /** VPC的名称 */
  VpcName: string;
  /** VPC的CIDR */
  VpcCidrBlock: string;
  /** 可用区 */
  Zone: string;
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** 路由表名称。 */
  RouteTableName: string;
  /** 创建时间。 */
  CreateTime: string;
}

/** SecurityPolicyDatabase策略 */
declare interface SecurityPolicyDatabase {
  /** 本端网段 */
  LocalCidrBlock: string;
  /** 对端网段 */
  RemoteCidrBlock: string[];
}

/** 创建子网时的子网类型 */
declare interface SubnetCreateInputInfo {
  /** 子网名称，可任意命名，但不得超过60个字符 */
  SubnetName: string;
  /** 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠 */
  CidrBlock: string;
  /** 是否开启子网分布式网关，默认传1，传0为关闭子网分布式网关。关闭分布式网关子网用于云服务器化子网，此子网中只能有一台物理机，同时此物理机及其上子机只能在此子网中 */
  DistributedFlag?: number;
  /** 是否开启dhcp relay ，关闭为0，开启为1。默认为0 */
  DhcpEnable?: number;
  /** DHCP SERVER 的IP地址数组。IP地址为相同VPC的子网内分配的IP */
  DhcpServerIp?: string[];
  /** 预留的IP个数。从该子网的最大可分配IP倒序分配N个IP 用于DHCP 动态分配使用的地址段 */
  IpReserve?: number;
  /** 子网绑定的vlanId。VlanId取值范围为2000-2999。创建物理机子网，VlanId默认为5; 创建docker子网或者虚拟子网，VlanId默认会分配2000--2999未使用的数值。 */
  VlanId?: number;
  /** 黑石子网的可用区 */
  Zone?: string;
  /** 是否25G子网，1为是，0为否。 */
  IsSmartNic?: number;
}

/** 黑石子网的信息 */
declare interface SubnetInfo {
  /** 私有网络的唯一ID。 */
  VpcId: string;
  /** VPC的名称。 */
  VpcName: string;
  /** VPC的CIDR。 */
  VpcCidrBlock: string;
  /** 私有网络的唯一ID */
  SubnetId: string;
  /** 子网名称。 */
  SubnetName: string;
  /** 子网CIDR。 */
  CidrBlock: string;
  /** 子网类型。0: 黑石物理机子网; 6: ccs子网; 7 Docker子网; 8: 虚拟机子网 */
  Type: number;
  /** 子网可用区ID。 */
  ZoneId: number;
  /** 子网物理机的个数 */
  CpmNum: number;
  /** 子网的VlanId。 */
  VlanId: number;
  /** 是否开启分布式网关 ，关闭为0，开启为1。 */
  DistributedFlag: number;
  /** 是否开启dhcp relay ，关闭为0，开启为1。默认为0。 */
  DhcpEnable: number;
  /** DHCP SERVER 的IP地址数组。IP地址为相同VPC的子网内分配的IP。 */
  DhcpServerIp: string[];
  /** 预留的IP个数。从该子网的最大可分配IP倒序分配N个IP 用于DHCP 动态分配使用的地址段。 */
  IpReserve: number;
  /** 子网中可用的IP个数 */
  AvailableIpNum: number;
  /** 子网中总共的IP个数 */
  TotalIpNum: number;
  /** 子网创建时间 */
  SubnetCreateTime: string;
  /** 25G子网标识 */
  IsSmartNic: number;
  /** 子网可用区。 */
  Zone: string | null;
  /** VPC所在可用区ID */
  VpcZoneId: number;
  /** VPC所在可用区 */
  VpcZone: string;
  /** 是否开启广播，关闭为0，开启为1。 */
  BroadcastFlag: number;
}

/** VPC信息 */
declare interface VpcInfo {
  /** 私有网络的唯一ID。 */
  VpcId: string;
  /** VPC的名称。 */
  VpcName: string;
  /** VPC的CIDR。 */
  CidrBlock: string;
  /** 可用区 */
  Zone: string;
  /** VPC状态 */
  State: string;
  /** 创建时间 */
  CreateTime: string;
  /** 整型私有网络ID。 */
  IntVpcId: number;
}

/** 对等连接对象 */
declare interface VpcPeerConnection {
  /** 本端VPC唯一ID */
  VpcId: string;
  /** 对端VPC唯一ID */
  PeerVpcId: string;
  /** 本端APPID */
  AppId: string;
  /** 对端APPID */
  PeerAppId: string;
  /** 对等连接唯一ID */
  VpcPeerConnectionId: string;
  /** 对等连接名称 */
  VpcPeerConnectionName: string;
  /** 对等连接状态。pending:申请中,available:运行中,expired:已过期,rejected:已拒绝,deleted:已删除 */
  State: string;
  /** 本端VPC所属可用区 */
  VpcZone: string | null;
  /** 对端VPC所属可用区 */
  PeerVpcZone: string | null;
  /** 本端Uin */
  Uin: number;
  /** 对端Uin */
  PeerUin: number;
  /** 对等连接类型 */
  PeerType: number;
  /** 对等连接带宽 */
  Bandwidth: number;
  /** 本端VPC地域 */
  Region: string;
  /** 对端VPC地域 */
  PeerRegion: string;
  /** 是否允许删除 */
  DeleteFlag: number | null;
  /** 创建时间 */
  CreateTime: string;
}

/** VPC限额信息 */
declare interface VpcQuota {
  /** 配额类型ID */
  TypeId: number;
  /** 配额 */
  Quota: number;
}

/** VPC占用资源 */
declare interface VpcResource {
  /** 私有网络ID */
  VpcId: string;
  /** 私有网络名称 */
  VpcName: string;
  /** 私有网络的CIDR */
  CidrBlock: string;
  /** 子网个数 */
  SubnetNum: number;
  /** NAT个数 */
  NatNum: number;
  /** VPC状态 */
  State: string;
  /** 是否开启监控 */
  MonitorFlag: boolean;
  /** 物理机个数 */
  CpmNum: number;
  /** 可用IP个数 */
  LeaveIpNum: number;
  /** 负载均衡个数 */
  LbNum: number;
  /** 流量镜像网关个数 */
  TrafficMirrorNum: number;
  /** 弹性IP个数 */
  EipNum: number;
  /** 专线网关个数 */
  PlgwNum: number;
  /** 专线通道个数 */
  PlvpNum: number;
  /** ssl vpn网关个数 */
  SslVpnGwNum: number;
  /** 对等链接个数 */
  VpcPeerNum: number;
  /** ipsec vpn网关个数 */
  IpsecVpnGwNum: number;
  /** 可用区 */
  Zone: string;
  /** 创建时间 */
  CreateTime: string;
  /** 是否老专区VPC */
  IsOld: boolean;
  /** 云联网服务个数 */
  CcnServiceNum: number | null;
  /** VPC允许创建的对等连接个数 */
  VpcPeerLimitToAllRegion: number | null;
  /** VPC允许创建的同地域的对等连接的个数 */
  VpcPeerLimitToSameRegion: number | null;
  /** 整型私有网络ID */
  IntVpcId: number;
}

/** 创建VPC下默认子网 */
declare interface VpcSubnetCreateInfo {
  /** 子网名称 */
  SubnetName: string;
  /** 子网的CIDR */
  CidrBlock: string;
  /** 子网的可用区 */
  Zone?: string;
}

/** VPC视图子网信息 */
declare interface VpcSubnetViewInfo {
  /** 子网ID */
  SubnetId: string;
  /** 子网名称 */
  SubnetName: string;
  /** 子网CIDR */
  CidrBlock: string;
  /** 子网下设备个数 */
  CpmNum: number;
  /** 内网负载均衡个数 */
  LbNum: number;
  /** 子网所在可用区 */
  Zone: string;
}

/** VPC视图信息 */
declare interface VpcViewInfo {
  /** 私有网络ID */
  VpcId: string;
  /** 私有网络名称 */
  VpcName: string;
  /** 私有网络CIDR */
  CidrBlock: string;
  /** 私有网络所在可用区 */
  Zone: string;
  /** 外网负载均衡个数 */
  LbNum: number;
  /** 弹性公网IP个数 */
  EipNum: number;
  /** NAT网关个数 */
  NatNum: number;
  /** 子网列表 */
  SubnetSet: VpcSubnetViewInfo[];
}

/** VPN通道对象。 */
declare interface VpnConnection {
  /** 通道实例ID。 */
  VpnConnectionId: string;
  /** 通道名称。 */
  VpnConnectionName: string;
  /** VPC实例ID。 */
  VpcId: string;
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 对端网关实例ID。 */
  CustomerGatewayId: string;
  /** 预共享密钥。 */
  PreShareKey: string;
  /** 通道传输协议。 */
  VpnProto: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 通道的生产状态 */
  State: string;
  /** 通道连接状态 */
  NetStatus: string;
  /** SPD。 */
  SecurityPolicyDatabaseSet: SecurityPolicyDatabase[];
  /** IKE选项。 */
  IKEOptionsSpecification: IKEOptionsSpecification;
  /** IPSEC选项。 */
  IPSECOptionsSpecification: IPSECOptionsSpecification;
  /** 可用区 */
  Zone: string;
  /** VPC网段 */
  VpcCidrBlock: string;
  /** VPC名称 */
  VpcName: string;
  /** VPN网关名称 */
  VpnGatewayName: string;
  /** 对端网关名称 */
  CustomerGatewayName: string;
  /** IPSEC VPN通道路由策略目的端地址 */
  DestinationCidr: string[] | null;
  /** IPSEC VPN通道路由策略源端地址 */
  SourceCidr: string[] | null;
}

/** VPN网关对象。 */
declare interface VpnGateway {
  /** 网关实例ID。 */
  VpnGatewayId: string;
  /** VPC实例ID。 */
  VpcId: string;
  /** 网关实例名称。 */
  VpnGatewayName: string;
  /** VPC网段 */
  VpcCidrBlock: string;
  /** VPC名称 */
  VpcName: string;
  /** 网关出带宽。 */
  InternetMaxBandwidthOut: number;
  /** 网关实例状态 */
  State: string;
  /** 网关公网IP。 */
  PublicIpAddress: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 可用区，如：ap-guangzhou */
  Zone: string;
  /** VPN网关的通道数 */
  VpnConnNum: number;
}

declare interface AcceptVpcPeerConnectionRequest {
  /** 黑石对等连接实例ID */
  VpcPeerConnectionId: string;
}

declare interface AcceptVpcPeerConnectionResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AsyncRegisterIpsRequest {
  /** 私有网络的唯一ID。 */
  VpcId: string;
  /** 子网唯一ID。 */
  SubnetId: string;
  /** 需要注册的IP列表。 */
  Ips: string[];
}

declare interface AsyncRegisterIpsResponse {
  /** 任务ID。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BindEipsToNatGatewayRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 已分配的EIP列表；AssignedEips和AutoAllocEipNum至少输入一个 */
  AssignedEips?: string[];
  /** 新建EIP数目，系统将会按您的要求生产该数目个数EIP；AssignedEips和AutoAllocEipNum至少输入一个 */
  AutoAllocEipNum?: number;
}

declare interface BindEipsToNatGatewayResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BindIpsToNatGatewayRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 部分IP信息，子网下只有该部分IP将加入NAT，仅当网关转发模式为IP方式有效 */
  IpInfoSet: IpInfo[];
}

declare interface BindIpsToNatGatewayResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface BindSubnetsToNatGatewayRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 子网ID列表，子网下全部IP将加入NAT，不区分网关转发方式 */
  SubnetIds: string[];
}

declare interface BindSubnetsToNatGatewayResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCustomerGatewayRequest {
  /** 对端网关名称，可任意命名，但不得超过60个字符。 */
  CustomerGatewayName: string;
  /** 对端网关公网IP。 */
  IpAddress: string;
  /** 可用区ID */
  Zone: string;
}

declare interface CreateCustomerGatewayResponse {
  /** 对端网关对象 */
  CustomerGateway?: CustomerGateway;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDockerSubnetWithVlanRequest {
  /** 系统分配的私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 子网信息 */
  SubnetSet: SubnetCreateInputInfo[];
}

declare interface CreateDockerSubnetWithVlanResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateHostedInterfaceRequest {
  /** 托管机器唯一ID 数组 */
  InstanceIds: string[];
  /** 私有网络ID或者私有网络统一ID，建议使用统一ID */
  VpcId: string;
  /** 子网ID或者子网统一ID，建议使用统一ID */
  SubnetId: string;
}

declare interface CreateHostedInterfaceResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 黑石托管机器ID */
  ResourceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateInterfacesRequest {
  /** 物理机实例ID列表 */
  InstanceIds: string[];
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
}

declare interface CreateInterfacesResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNatGatewayRequest {
  /** 转发模式，其中0表示IP方式，1表示网段方式；通过cidr方式可支持更多的IP接入到NAT网关 */
  ForwardMode: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** NAT名称 */
  NatName: string;
  /** 并发连接数规格；取值为1000000、3000000、10000000，分别对应小型、中型、大型NAT网关 */
  MaxConcurrent: number;
  /** 子网ID列表，子网下全部IP将加入NAT，不区分网关转发方式 */
  SubnetIds?: string[];
  /** 部分IP信息，子网下只有该部分IP将加入NAT，仅当网关转发模式为IP方式有效；IpInfoSet和SubnetIds中的子网ID不能同时存在 */
  IpInfoSet?: IpInfo[];
  /** 已分配的EIP列表, AssignedEips和AutoAllocEipNum至少输入一个 */
  AssignedEips?: string[];
  /** 新建EIP数目，系统将会按您的要求生产该数目个数EIP, AssignedEips和AutoAllocEipNum至少输入一个 */
  AutoAllocEipNum?: number;
  /** 独占标识，取值为0和1，默认值为0；0和1分别表示创建共享型NAT网关和独占NAT型网关；由于同一个VPC网络内，指向NAT集群的默认路由只有一条，因此VPC内只能创建一种类型NAT网关；创建独占型NAT网关时，需联系对应架构师进行独占NAT集群搭建，否则无法创建独占型NAT网关。 */
  Exclusive?: number;
}

declare interface CreateNatGatewayResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRoutePoliciesRequest {
  /** 路由表ID */
  RouteTableId: string;
  /** 新增的路由 */
  RoutePolicySet: RoutePolicy[];
}

declare interface CreateRoutePoliciesResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSubnetRequest {
  /** 系统分配的私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 子网信息 */
  SubnetSet: SubnetCreateInputInfo[];
}

declare interface CreateSubnetResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVirtualSubnetWithVlanRequest {
  /** 系统分配的私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 子网信息 */
  SubnetSet: SubnetCreateInputInfo[];
}

declare interface CreateVirtualSubnetWithVlanResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpcPeerConnectionRequest {
  /** 本端VPC唯一ID */
  VpcId: string;
  /** 对端VPC唯一ID */
  PeerVpcId: string;
  /** 对端地域，取值范围为gz,sh,bj,hk,cd,de,sh_bm,gz_bm,bj_bm,cq_bm等 */
  PeerRegion: string;
  /** 对等连接名称 */
  VpcPeerConnectionName: string;
  /** 对端账户OwnerUin（默认值为本端账户） */
  PeerUin?: string;
  /** 跨地域必传，带宽上限值 */
  Bandwidth?: number;
}

declare interface CreateVpcPeerConnectionResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpcRequest {
  /** 私有网络的名称 */
  VpcName: string;
  /** 私有网络的CIDR */
  CidrBlock: string;
  /** 私有网络的可用区 */
  Zone: string;
  /** 子网信息 */
  SubnetSet?: VpcSubnetCreateInfo[];
  /** 是否启用内网监控 */
  EnableMonitoring?: boolean;
}

declare interface CreateVpcResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCustomerGatewayRequest {
  /** 对端网关ID，例如：bmcgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。 */
  CustomerGatewayId: string;
}

declare interface DeleteCustomerGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteHostedInterfaceRequest {
  /** 托管机器唯一ID 数组 */
  InstanceIds: string[];
  /** 私有网络ID或者私有网络统一ID，建议使用统一ID */
  VpcId: string;
  /** 子网ID或者子网统一ID，建议使用统一ID */
  SubnetId: string;
}

declare interface DeleteHostedInterfaceResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 黑石托管机器ID */
  ResourceIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteHostedInterfacesRequest {
  /** 物理机ID */
  InstanceId: string;
  /** 物理机ID */
  SubnetIds: string[];
}

declare interface DeleteHostedInterfacesResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteInterfacesRequest {
  /** 物理机ID */
  InstanceId: string;
  /** 子网的唯一ID列表 */
  SubnetIds: string[];
}

declare interface DeleteInterfacesResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNatGatewayRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
}

declare interface DeleteNatGatewayResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRoutePolicyRequest {
  /** 路由表ID */
  RouteTableId: string;
  /** 路由表策略ID */
  RoutePolicyId: string;
}

declare interface DeleteRoutePolicyResponse {
  /** 异步任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSubnetRequest {
  /** 私有网络ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。 */
  SubnetId: string;
}

declare interface DeleteSubnetResponse {
  /** 异步任务ID。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVirtualIpRequest {
  /** 私有网络唯一ID。 */
  VpcId: string;
  /** 退还的IP列表。 */
  Ips: string[];
}

declare interface DeleteVirtualIpResponse {
  /** 异步任务ID。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpcPeerConnectionRequest {
  /** 黑石对等连接实例ID */
  VpcPeerConnectionId: string;
}

declare interface DeleteVpcPeerConnectionResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpcRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
}

declare interface DeleteVpcResponse {
  /** 异步任务ID。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpnConnectionRequest {
  /** VPN通道实例ID。形如：bmvpnx-f49l6u0z。 */
  VpnConnectionId: string;
}

declare interface DeleteVpnConnectionResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpnGatewayRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
}

declare interface DeleteVpnGatewayResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeregisterIpsRequest {
  /** 私有网络ID */
  VpcId: string;
  /** 注销指定IP的列表 */
  IpSet: string[];
  /** 私有网络子网ID */
  SubnetId?: string;
}

declare interface DeregisterIpsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomerGatewaysRequest {
  /** 对端网关ID，例如：bmcgw-2wqq41m9。每次请求的实例的上限为100。参数不支持同时指定CustomerGatewayIds和Filters。 */
  CustomerGatewayIds?: string[];
  /** 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定CustomerGatewayIds和Filters。customergateway-name - String - （过滤条件）对端网关名称。ip-address - String - （过滤条件)对端网关地址。customergateway-id - String - （过滤条件）对端网关唯一ID。zone - String - （过滤条件）对端所在可用区，形如：ap-guangzhou-2。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 排序字段, 支持"CreateTime"排序 */
  OrderField?: string;
  /** 排序方向, “asc”、“desc” */
  OrderDirection?: string;
}

declare interface DescribeCustomerGatewaysResponse {
  /** 对端网关对象列表 */
  CustomerGatewaySet?: CustomerGateway[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatGatewaysRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId?: string;
  /** NAT名称 */
  NatName?: string;
  /** 搜索字段 */
  SearchKey?: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId?: string;
  /** 起始值 */
  Offset?: number;
  /** 偏移值，默认值为 20 */
  Limit?: number;
  /** NAT所在可用区，形如：ap-guangzhou-2。 */
  Zone?: string;
  /** 排序字段, 支持"CreateTime"排序 */
  OrderField?: string;
  /** 排序方向, “asc”、“desc” */
  OrderDirection?: string;
}

declare interface DescribeNatGatewaysResponse {
  /** NAT网关信息列表 */
  NatGatewayInfoSet?: NatGatewayInfo[];
  /** 总数目 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatSubnetsRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
}

declare interface DescribeNatSubnetsResponse {
  /** NAT子网信息 */
  NatSubnetInfoSet?: NatSubnetInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRoutePoliciesRequest {
  /** 路由表实例ID，例如：rtb-afg8md3c。 */
  RouteTableId: string;
  /** 路由策略实例ID，例如：rti-azd4dt1c。 */
  RoutePolicyIds?: string[];
  /** 过滤条件，参数不支持同时指定RoutePolicyIds和Filters。route-table-id - String - （过滤条件）路由表实例ID。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。route-policy-id - String - （过滤条件）路由策略ID。route-policy-description-like - String -（过滤条件）路由项备注。route-policy-type - String - （过滤条件）路由项策略类型。destination-cidr-like - String - （过滤条件）路由项目的地址。gateway-id-like - String - （过滤条件）路由项下一跳网关。gateway-type - String - （过滤条件）路由项下一条网关类型。enable - Bool - （过滤条件）路由策略是否启用。 */
  Filters?: Filter[];
  /** 初始行的偏移量，默认为0。 */
  Offset?: number;
  /** 每页行数，默认为20。 */
  Limit?: number;
}

declare interface DescribeRoutePoliciesResponse {
  /** 路由策略数 */
  TotalCount: number;
  /** 路由策略列表 */
  RoutePolicySet: RoutePolicy[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRouteTablesRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableIds?: string[];
  /** 过滤条件，参数不支持同时指定RouteTableIds和Filters。route-table-id - String - （过滤条件）路由表实例ID。route-table-name - String - （过滤条件）路由表名称。route-table-id-like - String - （模糊过滤条件）路由表实例ID。route-table-name-like - String - （模糊过滤条件）路由表名称。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。zone - String - （过滤条件）可用区。 */
  Filters?: Filter[];
  /** 初始行的偏移量，默认为0。 */
  Offset?: number;
  /** 每页行数，默认为20。 */
  Limit?: number;
  /** 排序字段, 支持按“RouteTableId”，“VpcId”, "RouteTableName", "CreateTime" */
  OrderField?: string;
  /** 排序方向, “asc”、“desc” */
  OrderDirection?: string;
}

declare interface DescribeRouteTablesResponse {
  /** 路由表个数 */
  TotalCount?: number;
  /** 路由表列表 */
  RouteTableSet?: RouteTable[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubnetAvailableIpsRequest {
  /** 私有网络子网ID */
  SubnetId: string;
  /** CIDR前缀，例如10.0.1 */
  Cidr?: string;
}

declare interface DescribeSubnetAvailableIpsResponse {
  /** 可用IP的范围列表 */
  IpSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubnetByDeviceRequest {
  /** 物理机ID */
  InstanceId: string;
  /** 子网类型。0: 物理机子网; 7: DOCKER子网 8: 虚拟子网 */
  Types?: number[];
  /** 查询的起始位置。 */
  Offset?: number;
  /** 查询的个数。 */
  Limit?: number;
}

declare interface DescribeSubnetByDeviceResponse {
  /** 子网个数 */
  TotalCount?: number;
  /** 子网列表 */
  Data?: SubnetInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubnetByHostedDeviceRequest {
  /** 托管机器ID, 如chm-xasdfx2j */
  InstanceId: string;
  /** 子网类型。0: 物理机子网; 7: DOCKER子网 8: 虚拟子网 */
  Types?: number[];
  /** 查询的起始位置。 */
  Offset?: number;
  /** 查询的个数。 */
  Limit?: number;
}

declare interface DescribeSubnetByHostedDeviceResponse {
  /** 子网个数 */
  TotalCount?: number;
  /** 子网列表 */
  Data?: SubnetInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubnetsRequest {
  /** 子网实例ID查询。形如：subnet-pxir56ns。参数不支持同时指定SubnetIds和Filters。 */
  SubnetIds?: string[];
  /** 过滤条件，参数不支持同时指定SubnetIds和Filters。subnet-id - String - （过滤条件）Subnet实例名称。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。cidr-block - String - （过滤条件）vpc的cidr。subnet-name - String - （过滤条件）子网名称。zone - String - （过滤条件）可用区。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 排序字段, 支持按“CreateTime”，“VlanId” */
  OrderField?: string;
  /** 排序方向, “asc”、“desc” */
  OrderDirection?: string;
}

declare interface DescribeSubnetsResponse {
  /** 子网列表信息 */
  SubnetSet?: SubnetInfo[];
  /** 返回的子网总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskStatusRequest {
  /** 任务ID */
  TaskId: number;
}

declare interface DescribeTaskStatusResponse {
  /** 任务状态，其中0表示任务执行成功，1表示任务执行失败，2表示任务正在执行中 */
  Status?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcPeerConnectionsRequest {
  /** 对等连接实例ID */
  VpcPeerConnectionIds?: string[];
  /** 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpcPeerConnectionIds和Filters。过滤条件，参数不支持同时指定VpcPeerConnectionIds和Filters。peer-name - String - （过滤条件）对等连接名称。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 私有网络ID */
  VpcId?: string;
}

declare interface DescribeVpcPeerConnectionsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 对等连接实例。 */
  VpcPeerConnectionSet?: VpcPeerConnection[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcQuotaRequest {
  /** 类型 */
  TypeIds: number[];
}

declare interface DescribeVpcQuotaResponse {
  /** 配额信息 */
  VpcQuotaSet?: VpcQuota[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcResourceRequest {
  /** 私有网络实例ID */
  VpcIds?: string[];
  /** 过滤条件，参数不支持同时指定SubnetIds和Filters。vpc-id - String - （过滤条件）私有网络实例ID，形如：vpc-f49l6u0z。vpc-name - String - （过滤条件）私有网络名称。zone - String - （过滤条件）可用区。state - String - （过滤条件）VPC状态。available: 运营中; pending: 创建中; failed: 创建失败; deleting: 删除中 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 排序字段 */
  OrderField?: string;
  /** 排序方向, “asc”、“desc” */
  OrderDirection?: string;
}

declare interface DescribeVpcResourceResponse {
  /** VPC数据 */
  VpcResourceSet?: VpcResource[];
  /** VPC个数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcViewRequest {
  /** 私有网络唯一ID */
  VpcId: string;
}

declare interface DescribeVpcViewResponse {
  /** VPC视图信息 */
  VpcView?: VpcViewInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcsRequest {
  /** VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。 */
  VpcIds?: string[];
  /** 过滤条件，参数不支持同时指定VpcIds和Filters。vpc-name - String - （过滤条件）VPC实例名称。vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。cidr-block - String - （过滤条件）vpc的cidr。state - String - （过滤条件）VPC状态。(pending | available).zone - String - （过滤条件）VPC的可用区。 */
  Filters?: Filter[];
  /** 初始行的偏移量，默认为0。 */
  Offset?: number;
  /** 每页行数，默认为20。 */
  Limit?: number;
}

declare interface DescribeVpcsResponse {
  /** VPC列表 */
  VpcSet?: VpcInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpnConnectionsRequest {
  /** VPN通道实例ID。形如：bmvpnx-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnConnectionIds和Filters。 */
  VpnConnectionIds?: string[];
  /** 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpnConnectionIds和Filters。vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。state - String - （过滤条件 VPN状态：creating，available，createfailed，changing，changefailed，deleting，deletefailed。zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** VPN网关实例ID */
  VpnGatewayId?: string;
  /** VPN通道名称 */
  VpnConnectionName?: string;
  /** 排序字段, 支持"CreateTime"排序 */
  OrderField?: string;
  /** 排序方向, “asc”、“desc” */
  OrderDirection?: string;
}

declare interface DescribeVpnConnectionsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** VPN通道实例。 */
  VpnConnectionSet?: VpnConnection[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewaysRequest {
  /** VPN网关实例ID。形如：bmvpngw-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnGatewayIds和Filters。 */
  VpnGatewayIds?: string[];
  /** 过滤条件，参数不支持同时指定VpnGatewayIds和Filters。vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。state - String - （过滤条件 VPN状态：creating，available，createfailed，changing，changefailed，deleting，deletefailed。zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。vpngw-name - String - （过滤条件）vpn网关名称。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 请求对象个数 */
  Limit?: number;
  /** 排序字段, 支持"CreateTime"排序 */
  OrderField?: string;
  /** 排序方向, “asc”、“desc” */
  OrderDirection?: string;
}

declare interface DescribeVpnGatewaysResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** VPN网关实例详细信息列表。 */
  VpnGatewaySet?: VpnGateway[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DownloadCustomerGatewayConfigurationRequest {
  /** VPN通道实例ID。形如：bmvpnx-f49l6u0z。 */
  VpnConnectionId: string;
  /** 厂商,取值 h3c，cisco */
  VendorName: string;
}

declare interface DownloadCustomerGatewayConfigurationResponse {
  /** 配置信息。 */
  CustomerGatewayConfiguration?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCustomerGatewayAttributeRequest {
  /** 对端网关ID，例如：bmcgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。 */
  CustomerGatewayId: string;
  /** 对端网关名称，可任意命名，但不得超过60个字符。 */
  CustomerGatewayName: string;
}

declare interface ModifyCustomerGatewayAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRoutePolicyRequest {
  /** 路由表ID */
  RouteTableId: string;
  /** 修改的路由 */
  RoutePolicy: RoutePolicy;
}

declare interface ModifyRoutePolicyResponse {
  /** 异步任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRouteTableRequest {
  /** 路由表ID */
  RouteTableId: string;
  /** 路由表名称 */
  RouteTableName?: string;
}

declare interface ModifyRouteTableResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubnetAttributeRequest {
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 子网名称 */
  SubnetName: string;
}

declare interface ModifySubnetAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubnetDHCPRelayRequest {
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
  /** 是否开启DHCP Relay */
  EnableDHCP: boolean;
  /** DHCP服务器IP */
  ServerIps?: string[];
  /** 预留IP个数 */
  ReservedIpCount?: number;
}

declare interface ModifySubnetDHCPRelayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpcAttributeRequest {
  /** 私有网络ID */
  VpcId: string;
  /** 私有网络名称 */
  VpcName?: string;
  /** 是否开启内网监控，0为关闭，1为开启 */
  EnableMonitor?: boolean;
}

declare interface ModifyVpcAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpcPeerConnectionRequest {
  /** 黑石对等连接唯一ID */
  VpcPeerConnectionId: string;
  /** 对等连接带宽 */
  Bandwidth?: number;
  /** 对等连接名称 */
  VpcPeerConnectionName?: string;
}

declare interface ModifyVpcPeerConnectionResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpnConnectionAttributeRequest {
  /** VPN通道实例ID。形如：bmvpnx-f49l6u0z。 */
  VpnConnectionId: string;
  /** VPC实例ID */
  VpcId: string;
  /** VPN通道名称，可任意命名，但不得超过60个字符。 */
  VpnConnectionName?: string;
  /** 预共享密钥。 */
  PreShareKey?: string;
  /** SPD策略组，例如：{"10.0.0.5/24":["172.123.10.5/16"]}，10.0.0.5/24是vpc内网段172.123.10.5/16是IDC网段。用户指定VPC内哪些网段可以和您IDC中哪些网段通信。 */
  SecurityPolicyDatabases?: SecurityPolicyDatabase[];
  /** IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议。 */
  IKEOptionsSpecification?: IKEOptionsSpecification;
  /** IPSec配置，腾讯云提供IPSec安全会话设置。 */
  IPSECOptionsSpecification?: IPSECOptionsSpecification;
}

declare interface ModifyVpnConnectionAttributeResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpnGatewayAttributeRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** VPN网关名称，最大长度不能超过60个字节。 */
  VpnGatewayName: string;
}

declare interface ModifyVpnGatewayAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RejectVpcPeerConnectionRequest {
  /** 黑石对等连接实例ID */
  VpcPeerConnectionId: string;
}

declare interface RejectVpcPeerConnectionResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetVpnConnectionRequest {
  /** VPC唯一ID */
  VpcId: string;
  /** VPN通道实例ID。形如：bmvpnx-f49l6u0z。 */
  VpnConnectionId: string;
}

declare interface ResetVpnConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnbindEipsFromNatGatewayRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 已分配的EIP列表 */
  AssignedEips: string[];
}

declare interface UnbindEipsFromNatGatewayResponse {
  /** 任务ID */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnbindIpsFromNatGatewayRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 部分IP信息；子网须以部分IP将加入NAT网关 */
  IpInfoSet: IpInfo[];
}

declare interface UnbindIpsFromNatGatewayResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnbindSubnetsFromNatGatewayRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 子网ID列表，子网不区分加入NAT网关的转发方式 */
  SubnetIds: string[];
}

declare interface UnbindSubnetsFromNatGatewayResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UpgradeNatGatewayRequest {
  /** NAT网关ID，例如：nat-kdm476mp */
  NatId: string;
  /** 私有网络ID，例如：vpc-kd7d06of */
  VpcId: string;
  /** 并发连接数规格；取值为1000000、3000000、10000000，分别对应小型、中型、大型NAT网关 */
  MaxConcurrent: number;
}

declare interface UpgradeNatGatewayResponse {
  /** 任务ID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** [黑石私有网络](https://cloud.tencent.com/document/product/1024) */
declare interface Bmvpc {
  (): Versions;
  /** 接受黑石对等连接 */
  AcceptVpcPeerConnection(data: AcceptVpcPeerConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<AcceptVpcPeerConnectionResponse>;
  /** 批量注册虚拟IP */
  AsyncRegisterIps(data: AsyncRegisterIpsRequest, config?: AxiosRequestConfig): AxiosPromise<AsyncRegisterIpsResponse>;
  /** NAT网关绑定EIP */
  BindEipsToNatGateway(data: BindEipsToNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<BindEipsToNatGatewayResponse>;
  /** NAT网关绑定IP */
  BindIpsToNatGateway(data: BindIpsToNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<BindIpsToNatGatewayResponse>;
  /** NAT网关绑定子网 */
  BindSubnetsToNatGateway(data: BindSubnetsToNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<BindSubnetsToNatGatewayResponse>;
  /** 创建对端网关 */
  CreateCustomerGateway(data: CreateCustomerGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomerGatewayResponse>;
  /** 创建黑石Docker子网 */
  CreateDockerSubnetWithVlan(data: CreateDockerSubnetWithVlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDockerSubnetWithVlanResponse>;
  /** 黑石托管机器加入子网 */
  CreateHostedInterface(data: CreateHostedInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHostedInterfaceResponse>;
  /** 物理机加入子网 */
  CreateInterfaces(data: CreateInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInterfacesResponse>;
  /** 创建NAT网关 */
  CreateNatGateway(data: CreateNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatGatewayResponse>;
  /** 创建黑石路由表的路由规则 */
  CreateRoutePolicies(data: CreateRoutePoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoutePoliciesResponse>;
  /** 创建黑石私有网络的子网 */
  CreateSubnet(data: CreateSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubnetResponse>;
  /** 创建黑石虚拟子网 */
  CreateVirtualSubnetWithVlan(data: CreateVirtualSubnetWithVlanRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVirtualSubnetWithVlanResponse>;
  /** 创建黑石私有网络 */
  CreateVpc(data: CreateVpcRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcResponse>;
  /** 创建对等连接 */
  CreateVpcPeerConnection(data: CreateVpcPeerConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcPeerConnectionResponse>;
  /** 删除对端网关 */
  DeleteCustomerGateway(data: DeleteCustomerGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomerGatewayResponse>;
  /** 黑石托管机器移除子网 */
  DeleteHostedInterface(data: DeleteHostedInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHostedInterfaceResponse>;
  /** 托管机器移除子网(批量接口) */
  DeleteHostedInterfaces(data: DeleteHostedInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHostedInterfacesResponse>;
  /** 物理机移除子网(批量接口) */
  DeleteInterfaces(data: DeleteInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInterfacesResponse>;
  /** 删除NAT网关 */
  DeleteNatGateway(data: DeleteNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatGatewayResponse>;
  /** 删除黑石路由表路由规则 */
  DeleteRoutePolicy(data: DeleteRoutePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoutePolicyResponse>;
  /** 删除子网 */
  DeleteSubnet(data: DeleteSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSubnetResponse>;
  /** 退还虚拟IP */
  DeleteVirtualIp(data: DeleteVirtualIpRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVirtualIpResponse>;
  /** 删除私有网络 */
  DeleteVpc(data: DeleteVpcRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcResponse>;
  /** 删除黑石对等连接 */
  DeleteVpcPeerConnection(data: DeleteVpcPeerConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcPeerConnectionResponse>;
  /** 删除VPN通道 */
  DeleteVpnConnection(data: DeleteVpnConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnConnectionResponse>;
  /** 删除VPN网关 */
  DeleteVpnGateway(data: DeleteVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnGatewayResponse>;
  /** 注销私有网络IP */
  DeregisterIps(data: DeregisterIpsRequest, config?: AxiosRequestConfig): AxiosPromise<DeregisterIpsResponse>;
  /** 查询对端网关 */
  DescribeCustomerGateways(data?: DescribeCustomerGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomerGatewaysResponse>;
  /** 获取NAT网关列表 */
  DescribeNatGateways(data?: DescribeNatGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatGatewaysResponse>;
  /** 获取NAT关联的子网信息 */
  DescribeNatSubnets(data: DescribeNatSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatSubnetsResponse>;
  /** 查询黑石路由表条目 */
  DescribeRoutePolicies(data: DescribeRoutePoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoutePoliciesResponse>;
  /** 查询路由表 */
  DescribeRouteTables(data?: DescribeRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteTablesResponse>;
  /** 获取子网内可用IP列表 */
  DescribeSubnetAvailableIps(data: DescribeSubnetAvailableIpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetAvailableIpsResponse>;
  /** 查询物理机加入的子网列表 */
  DescribeSubnetByDevice(data: DescribeSubnetByDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetByDeviceResponse>;
  /** 查询托管机器加入的子网列表 */
  DescribeSubnetByHostedDevice(data: DescribeSubnetByHostedDeviceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetByHostedDeviceResponse>;
  /** 查询子网列表 */
  DescribeSubnets(data?: DescribeSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetsResponse>;
  /** 获取任务状态 */
  DescribeTaskStatus(data: DescribeTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStatusResponse>;
  /** 获取对等连接列表 */
  DescribeVpcPeerConnections(data?: DescribeVpcPeerConnectionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcPeerConnectionsResponse>;
  /** 获取黑石私有网络的配额 */
  DescribeVpcQuota(data: DescribeVpcQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcQuotaResponse>;
  /** 查询黑石私有网络关联资源 */
  DescribeVpcResource(data?: DescribeVpcResourceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcResourceResponse>;
  /** 查询黑石VPC视图 */
  DescribeVpcView(data: DescribeVpcViewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcViewResponse>;
  /** 查询VPC列表 */
  DescribeVpcs(data?: DescribeVpcsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcsResponse>;
  /** 查询VPN通道列表 */
  DescribeVpnConnections(data?: DescribeVpnConnectionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnConnectionsResponse>;
  /** 查询VPN网关 */
  DescribeVpnGateways(data?: DescribeVpnGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewaysResponse>;
  /** 下载VPN通道配置 */
  DownloadCustomerGatewayConfiguration(data: DownloadCustomerGatewayConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadCustomerGatewayConfigurationResponse>;
  /** 修改对端网关 */
  ModifyCustomerGatewayAttribute(data: ModifyCustomerGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomerGatewayAttributeResponse>;
  /** 修改自定义路由 */
  ModifyRoutePolicy(data: ModifyRoutePolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRoutePolicyResponse>;
  /** 修改路由表 */
  ModifyRouteTable(data: ModifyRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRouteTableResponse>;
  /** 修改子网属性 */
  ModifySubnetAttribute(data: ModifySubnetAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubnetAttributeResponse>;
  /** 修改子网DHCP Relay属性 */
  ModifySubnetDHCPRelay(data: ModifySubnetDHCPRelayRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubnetDHCPRelayResponse>;
  /** 修改黑石VPC属性 */
  ModifyVpcAttribute(data: ModifyVpcAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcAttributeResponse>;
  /** 修改黑石对等连接 */
  ModifyVpcPeerConnection(data: ModifyVpcPeerConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcPeerConnectionResponse>;
  /** 修改VPN通道 */
  ModifyVpnConnectionAttribute(data: ModifyVpnConnectionAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnConnectionAttributeResponse>;
  /** 修改VPN网关属性 */
  ModifyVpnGatewayAttribute(data: ModifyVpnGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnGatewayAttributeResponse>;
  /** 拒绝黑石对等连接申请 */
  RejectVpcPeerConnection(data: RejectVpcPeerConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<RejectVpcPeerConnectionResponse>;
  /** 重置VPN通道 */
  ResetVpnConnection(data: ResetVpnConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<ResetVpnConnectionResponse>;
  /** NAT网关解绑EIP */
  UnbindEipsFromNatGateway(data: UnbindEipsFromNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindEipsFromNatGatewayResponse>;
  /** NAT网关解绑IP */
  UnbindIpsFromNatGateway(data: UnbindIpsFromNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindIpsFromNatGatewayResponse>;
  /** NAT网关解绑子网 */
  UnbindSubnetsFromNatGateway(data: UnbindSubnetsFromNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<UnbindSubnetsFromNatGatewayResponse>;
  /** 升级NAT网关 */
  UpgradeNatGateway(data: UpgradeNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<UpgradeNatGatewayResponse>;
}

export declare type Versions = ["2018-06-25"];

export default Bmvpc;
