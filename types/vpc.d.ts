/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 策略信息 */
declare interface AccessPolicy {
  /** 目的CIDR */
  TargetCidr: string;
  /** 策略ID */
  VpnGatewayIdSslAccessPolicyId: string;
  /** 是否对所有用户都生效。1 生效 0不生效 */
  ForAllClient: number;
  /** 用户组ID */
  UserGroupIds: string[];
  /** 更新时间 */
  UpdateTime: string;
}

/** 账户属性对象 */
declare interface AccountAttribute {
  /** 属性名 */
  AttributeName: string;
  /** 属性值 */
  AttributeValues: string[];
}

/** 描述 EIP 信息 */
declare interface Address {
  /** `EIP`的`ID`，是`EIP`的唯一标识。 */
  AddressId?: string;
  /** `EIP`名称。 */
  AddressName?: string;
  /** `EIP`状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡) */
  AddressStatus?: string;
  /** 外网IP地址 */
  AddressIp?: string;
  /** 绑定的资源实例`ID`。可能是一个`CVM`，`NAT`。 */
  InstanceId?: string;
  /** 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。 */
  CreatedTime?: string;
  /** 绑定的弹性网卡ID */
  NetworkInterfaceId: string;
  /** 绑定的资源内网ip */
  PrivateAddressIp: string;
  /** 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态 */
  IsArrears: boolean;
  /** 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态 */
  IsBlocked: boolean;
  /** eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式 */
  IsEipDirectConnection: boolean;
  /** EIP 资源类型，包括CalcIP、WanIP、EIP和AnycastEIP、高防EIP。其中：`CalcIP` 表示设备 IP，`WanIP` 表示普通公网 IP，`EIP` 表示弹性公网 IP，`AnycastEip` 表示加速 EIP，`AntiDDoSEIP`表示高防EIP。 */
  AddressType: string;
  /** eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放 */
  CascadeRelease: boolean;
  /** EIP ALG开启的协议类型。 */
  EipAlgType: AlgType;
  /** 弹性公网IP的运营商信息，当前可能返回值包括"CMCC","CTCC","CUCC","BGP" */
  InternetServiceProvider: string;
  /** 是否本地带宽EIP */
  LocalBgp: boolean;
  /** 弹性公网IP的带宽值。注意，传统账户类型账户的弹性公网IP没有带宽属性，值为空。 */
  Bandwidth: number | null;
  /** 弹性公网IP的网络计费模式。注意，传统账户类型账户的弹性公网IP没有网络计费模式属性，值为空。包括：BANDWIDTH_PREPAID_BY_MONTH表示包月带宽预付费。TRAFFIC_POSTPAID_BY_HOUR表示按小时流量后付费。BANDWIDTH_POSTPAID_BY_HOUR表示按小时带宽后付费。BANDWIDTH_PACKAGE表示共享带宽包。 */
  InternetChargeType: string | null;
  /** 弹性公网IP关联的标签列表。 */
  TagSet: Tag[] | null;
}

/** 用于描述弹性公网IP的费用对象 */
declare interface AddressChargePrepaid {
  /** 购买实例的时长，单位是月。可支持时长：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36 */
  Period: number;
  /** 自动续费标志。0表示手动续费，1表示自动续费，2表示到期不续费。默认缺省为0即手动续费 */
  AutoRenewFlag?: number;
}

/** IP地址模板信息 */
declare interface AddressInfo {
  /** ip地址。 */
  Address: string;
  /** 备注。 */
  Description?: string | null;
}

/** IP地址模板 */
declare interface AddressTemplate {
  /** IP地址模板名称。 */
  AddressTemplateName: string;
  /** IP地址模板实例唯一ID。 */
  AddressTemplateId: string;
  /** IP地址信息。 */
  AddressSet: string[];
  /** 创建时间。 */
  CreatedTime?: string;
  /** 带备注的IP地址信息。 */
  AddressExtraSet: AddressInfo[];
}

/** IP地址模板集合 */
declare interface AddressTemplateGroup {
  /** IP地址模板集合名称。 */
  AddressTemplateGroupName: string;
  /** IP地址模板集合实例ID，例如：ipmg-dih8xdbq。 */
  AddressTemplateGroupId: string;
  /** IP地址模板ID。 */
  AddressTemplateIdSet: string[];
  /** 创建时间。 */
  CreatedTime?: string;
  /** IP地址模板实例。 */
  AddressTemplateSet: AddressTemplateItem[];
}

/** 地址信息 */
declare interface AddressTemplateItem {
  /** 起始地址。 */
  From: string;
  /** 结束地址。 */
  To: string;
}

/** IP地址模板 */
declare interface AddressTemplateSpecification {
  /** IP地址ID，例如：ipm-2uw6ujo6。 */
  AddressId: string;
  /** IP地址组ID，例如：ipmg-2uw6ujo6。 */
  AddressGroupId: string;
}

/** ALG协议类型 */
declare interface AlgType {
  /** Ftp协议Alg功能是否开启 */
  Ftp: boolean;
  /** Sip协议Alg功能是否开启 */
  Sip: boolean;
}

/** VPC辅助CIDR信息。 */
declare interface AssistantCidr {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5` */
  VpcId: string;
  /** 辅助CIDR。形如：`172.16.0.0/16` */
  CidrBlock: string;
  /** 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。 */
  AssistantType: number;
  /** 辅助CIDR拆分的子网。 */
  SubnetSet: Subnet[] | null;
}

/** 描述带宽包信息的结构 */
declare interface BandwidthPackage {
  /** 带宽包唯一标识Id */
  BandwidthPackageId: string;
  /** 带宽包类型，包括'BGP','SINGLEISP','ANYCAST' */
  NetworkType: string;
  /** 带宽包计费类型，包括'TOP5_POSTPAID_BY_MONTH'和'PERCENT95_POSTPAID_BY_MONTH' */
  ChargeType: string;
  /** 带宽包名称 */
  BandwidthPackageName: string;
  /** 带宽包创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。 */
  CreatedTime: string;
  /** 带宽包状态，包括'CREATING','CREATED','DELETING','DELETED' */
  Status: string;
  /** 带宽包资源信息 */
  ResourceSet: Resource[];
  /** 带宽包限速大小。单位：Mbps，-1表示不限速。 */
  Bandwidth: number;
}

/** 后付费共享带宽包的当前计费用量 */
declare interface BandwidthPackageBillBandwidth {
  /** 当前计费用量，单位为 Mbps */
  BandwidthUsage: number;
}

/** 云联网（CCN）对象 */
declare interface CCN {
  /** 云联网唯一ID */
  CcnId?: string;
  /** 云联网名称 */
  CcnName?: string;
  /** 云联网描述信息 */
  CcnDescription?: string;
  /** 关联实例数量 */
  InstanceCount?: number;
  /** 创建时间 */
  CreateTime?: string;
  /** 实例状态， 'ISOLATED': 隔离中（欠费停服），'AVAILABLE'：运行中。 */
  State?: string;
  /** 实例服务质量，’PT’：白金，'AU'：金，'AG'：银。 */
  QosLevel?: string;
  /** 付费类型，PREPAID为预付费，POSTPAID为后付费。 */
  InstanceChargeType?: string | null;
  /** 限速类型，INTER_REGION_LIMIT为地域间限速；OUTER_REGION_LIMIT为地域出口限速。 */
  BandwidthLimitType?: string | null;
  /** 标签键值对。 */
  TagSet?: Tag[];
  /** 是否支持云联网路由优先级的功能。False：不支持，True：支持。 */
  RoutePriorityFlag?: boolean;
  /** 实例关联的路由表个数。 */
  RouteTableCount?: number | null;
  /** 是否开启云联网多路由表特性。False：未开启，True：开启。 */
  RouteTableFlag?: boolean | null;
  /** 是否开启云联网路由传播策略。`False` 未开启，`True` 开启。 */
  RouteBroadcastPolicyFlag?: boolean | null;
}

/** 云联网（CCN）关联实例（Instance）对象 */
declare interface CcnAttachedInstance {
  /** 云联网实例ID。 */
  CcnId: string;
  /** 关联实例类型：`VPC`：私有网络`DIRECTCONNECT`：专线网关`BMVPC`：黑石私有网络 */
  InstanceType: string;
  /** 关联实例ID。 */
  InstanceId: string;
  /** 关联实例名称。 */
  InstanceName: string;
  /** 关联实例所属大区，例如：ap-guangzhou。 */
  InstanceRegion: string;
  /** 关联实例所属UIN（根账号）。 */
  InstanceUin: string;
  /** 关联实例CIDR。 */
  CidrBlock: string[];
  /** 关联实例状态：`PENDING`：申请中`ACTIVE`：已连接`EXPIRED`：已过期`REJECTED`：已拒绝`DELETED`：已删除`FAILED`：失败的（2小时后将异步强制解关联）`ATTACHING`：关联中`DETACHING`：解关联中`DETACHFAILED`：解关联失败（2小时后将异步强制解关联） */
  State: string;
  /** 关联时间。 */
  AttachedTime: string;
  /** 云联网所属UIN（根账号）。 */
  CcnUin: string;
  /** 关联实例所属的大地域，如: CHINA_MAINLAND */
  InstanceArea: string;
  /** 备注 */
  Description: string;
  /** 路由表ID */
  RouteTableId: string | null;
  /** 路由表名称 */
  RouteTableName: string | null;
}

/** 用于描述云联网地域间限速带宽实例的信息。 */
declare interface CcnBandwidthInfo {
  /** 带宽所属的云联网ID。 */
  CcnId: string | null;
  /** 实例的创建时间。 */
  CreatedTime: string | null;
  /** 实例的过期时间 */
  ExpiredTime: string | null;
  /** 带宽实例的唯一ID。 */
  RegionFlowControlId: string | null;
  /** 带宽是否自动续费的标记。 */
  RenewFlag: string | null;
  /** 描述带宽的地域和限速上限信息。在地域间限速的情况下才会返回参数，出口限速模式不返回。 */
  CcnRegionBandwidthLimit: CcnRegionBandwidthLimit | null;
  /** 云市场实例ID。 */
  MarketId: string | null;
}

/** 云联网（CCN）关联实例（Instance）对象。 */
declare interface CcnInstance {
  /** 关联实例ID。 */
  InstanceId: string;
  /** 关联实例ID所属大区，例如：ap-guangzhou。 */
  InstanceRegion: string;
  /** 关联实例类型，可选值：`VPC`：私有网络`DIRECTCONNECT`：专线网关`BMVPC`：黑石私有网络`VPNGW`：VPNGW类型 */
  InstanceType?: string;
  /** 备注 */
  Description?: string;
  /** 实例关联的路由表ID。 */
  RouteTableId?: string | null;
}

/** 云联网（CCN）地域出带宽上限 */
declare interface CcnRegionBandwidthLimit {
  /** 地域，例如：ap-guangzhou */
  Region: string;
  /** 出带宽上限，单位：Mbps */
  BandwidthLimit: number;
  /** 是否黑石地域，默认`false`。 */
  IsBm?: boolean;
  /** 目的地域，例如：ap-shanghai */
  DstRegion?: string | null;
  /** 目的地域是否为黑石地域，默认`false`。 */
  DstIsBm?: boolean;
}

/** CCN路由策略对象 */
declare interface CcnRoute {
  /** 路由策略ID */
  RouteId?: string;
  /** 目的端 */
  DestinationCidrBlock: string;
  /** 下一跳类型（关联实例类型），所有类型：VPC、DIRECTCONNECT */
  InstanceType: string;
  /** 下一跳（关联实例） */
  InstanceId: string;
  /** 下一跳名称（关联实例名称） */
  InstanceName: string;
  /** 下一跳所属地域（关联实例所属地域） */
  InstanceRegion: string;
  /** 更新时间 */
  UpdateTime: string;
  /** 路由是否启用 */
  Enabled: boolean;
  /** 关联实例所属UIN（根账号） */
  InstanceUin: string;
  /** 路由的扩展状态 */
  ExtraState: string;
  /** 是否动态路由 */
  IsBgp: boolean;
  /** 路由优先级 */
  RoutePriority: number;
  /** 下一跳扩展名称（关联实例的扩展名称） */
  InstanceExtraName: string;
}

/** 用于发布云联网的cidr信息 */
declare interface CidrForCcn {
  /** local cidr值。 */
  Cidr: string | null;
  /** 是否发布到了云联网。 */
  PublishedToVbc: boolean | null;
}

/** 私有网络和基础网络互通设备 */
declare interface ClassicLinkInstance {
  /** VPC实例ID */
  VpcId: string;
  /** 云服务器实例唯一ID */
  InstanceId: string;
}

/** 冲突资源条目信息。 */
declare interface ConflictItem {
  /** 冲突资源的ID */
  ConfilctId: string;
  /** 冲突目的资源 */
  DestinationItem: string;
}

/** 冲突资源信息。 */
declare interface ConflictSource {
  /** 冲突资源ID */
  ConflictSourceId: string;
  /** 冲突资源 */
  SourceItem: string;
  /** 冲突资源条目信息 */
  ConflictItemSet: ConflictItem[];
}

/** 合规化审批单 */
declare interface CrossBorderCompliance {
  /** 服务商，可选值：`UNICOM`。 */
  ServiceProvider: string;
  /** 合规化审批单`ID`。 */
  ComplianceId: number;
  /** 公司全称。 */
  Company: string;
  /** 统一社会信用代码。 */
  UniformSocialCreditCode: string;
  /** 法定代表人。 */
  LegalPerson: string;
  /** 发证机关。 */
  IssuingAuthority: string;
  /** 营业执照。 */
  BusinessLicense: string;
  /** 营业执照住所。 */
  BusinessAddress: string;
  /** 邮编。 */
  PostCode: number;
  /** 经办人。 */
  Manager: string;
  /** 经办人身份证号。 */
  ManagerId: string;
  /** 经办人身份证。 */
  ManagerIdCard: string;
  /** 经办人身份证地址。 */
  ManagerAddress: string;
  /** 经办人联系电话。 */
  ManagerTelephone: string;
  /** 电子邮箱。 */
  Email: string;
  /** 服务受理单。 */
  ServiceHandlingForm: string;
  /** 授权函。 */
  AuthorizationLetter: string;
  /** 信息安全承诺书。 */
  SafetyCommitment: string;
  /** 服务开始时间。 */
  ServiceStartDate: string;
  /** 服务截止时间。 */
  ServiceEndDate: string;
  /** 状态。待审批：`PENDING`，已通过：`APPROVED`，已拒绝：`DENY`。 */
  State: string;
  /** 审批单创建时间。 */
  CreatedTime: string;
}

/** 跨境带宽监控数据 */
declare interface CrossBorderFlowMonitorData {
  /** 入带宽 */
  InBandwidth: number[];
  /** 出带宽 */
  OutBandwidth: number[];
  /** 入包 */
  InPkg: number[];
  /** 出包 */
  OutPkg: number[];
}

/** 对端网关 */
declare interface CustomerGateway {
  /** 用户网关唯一ID */
  CustomerGatewayId: string;
  /** 网关名称 */
  CustomerGatewayName: string;
  /** 公网地址 */
  IpAddress: string;
  /** 创建时间 */
  CreatedTime: string;
}

/** 对端网关厂商信息对象。 */
declare interface CustomerGatewayVendor {
  /** 平台。 */
  Platform: string;
  /** 软件版本。 */
  SoftwareVersion: string;
  /** 供应商名称。 */
  VendorName: string;
}

/** 云主机实例信息。 */
declare interface CvmInstance {
  /** VPC实例ID。 */
  VpcId: string;
  /** 子网实例ID。 */
  SubnetId: string;
  /** 云主机实例ID */
  InstanceId: string;
  /** 云主机名称。 */
  InstanceName: string;
  /** 云主机状态。 */
  InstanceState: string;
  /** 实例的CPU核数，单位：核。 */
  CPU: number;
  /** 实例内存容量，单位：GB。 */
  Memory: number;
  /** 创建时间。 */
  CreatedTime: string;
  /** 实例机型。 */
  InstanceType: string;
  /** 实例弹性网卡配额（包含主网卡）。 */
  EniLimit: number;
  /** 实例弹性网卡内网IP配额（包含主网卡）。 */
  EniIpLimit: number;
  /** 实例已绑定弹性网卡的个数（包含主网卡）。 */
  InstanceEniCount: number;
}

/** 默认VPC和子网 */
declare interface DefaultVpcSubnet {
  /** 默认VpcId */
  VpcId: string;
  /** 默认SubnetId */
  SubnetId: string;
}

/** NAT网关的端口转发规则 */
declare interface DestinationIpPortTranslationNatRule {
  /** 网络协议，可选值：`TCP`、`UDP`。 */
  IpProtocol: string;
  /** 弹性IP。 */
  PublicIpAddress: string;
  /** 公网端口。 */
  PublicPort: number;
  /** 内网地址。 */
  PrivateIpAddress: string;
  /** 内网端口。 */
  PrivatePort: number;
  /** NAT网关转发规则描述。 */
  Description: string;
}

/** 描述 DhcpIp 信息 */
declare interface DhcpIp {
  /** `DhcpIp`的`ID`，是`DhcpIp`的唯一标识。 */
  DhcpIpId: string;
  /** `DhcpIp`所在私有网络`ID`。 */
  VpcId: string;
  /** `DhcpIp`所在子网`ID`。 */
  SubnetId: string;
  /** `DhcpIp`的名称。 */
  DhcpIpName: string;
  /** IP地址。 */
  PrivateIpAddress: string;
  /** 绑定`EIP`。 */
  AddressIp: string;
  /** `DhcpIp`关联弹性网卡`ID`。 */
  NetworkInterfaceId: string;
  /** 被绑定的实例`ID`。 */
  InstanceId: string;
  /** 状态：`AVAILABLE`：运行中`UNBIND`：未绑定 */
  State: string;
  /** 创建时间。 */
  CreatedTime: string;
}

/** 专线网关对象。 */
declare interface DirectConnectGateway {
  /** 专线网关`ID`。 */
  DirectConnectGatewayId: string;
  /** 专线网关名称。 */
  DirectConnectGatewayName: string;
  /** 专线网关关联`VPC`实例`ID`。 */
  VpcId: string;
  /** 关联网络类型：`VPC` - 私有网络`CCN` - 云联网 */
  NetworkType: string;
  /** 关联网络实例`ID`：`NetworkType`为`VPC`时，这里为私有网络实例`ID``NetworkType`为`CCN`时，这里为云联网实例`ID` */
  NetworkInstanceId: string;
  /** 网关类型：NORMAL - 标准型，注：云联网只支持标准型NAT - NAT型NAT类型支持网络地址转换配置，类型确定后不能修改；一个私有网络可以创建一个NAT类型的专线网关和一个非NAT类型的专线网关 */
  GatewayType: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 专线网关IP。 */
  DirectConnectGatewayIp: string;
  /** 专线网关关联`CCN`实例`ID`。 */
  CcnId: string;
  /** 云联网路由学习类型：`BGP` - 自动学习。`STATIC` - 静态，即用户配置。 */
  CcnRouteType: string;
  /** 是否启用BGP。 */
  EnableBGP: boolean;
  /** 开启和关闭BGP的community属性。 */
  EnableBGPCommunity: boolean;
  /** 绑定的NAT网关ID。 */
  NatGatewayId: string | null;
  /** 专线网关是否支持VXLAN架构 */
  VXLANSupport: boolean[] | null;
  /** 云联网路由发布模式：`standard`（标准模式）、`exquisite`（精细模式）。 */
  ModeType: string | null;
  /** 是否为localZone专线网关。 */
  LocalZone: boolean | null;
  /** 专线网关所在可用区 */
  Zone: string | null;
  /** 网关流控明细启用状态：0：关闭1：开启 */
  EnableFlowDetails: number | null;
  /** 开启、关闭网关流控明细时间 */
  FlowDetailsUpdateTime: string | null;
  /** 是否支持开启网关流控明细0：不支持1：支持 */
  NewAfc: number | null;
  /** 专线网关接入网络类型：`VXLAN` - VXLAN类型。`MPLS` - MPLS类型。`Hybrid` - Hybrid类型。 */
  AccessNetworkType: string | null;
  /** 跨可用区容灾专线网关的可用区列表 */
  HaZoneList: string[] | null;
}

/** 专线网关云联网路由（IDC网段）对象 */
declare interface DirectConnectGatewayCcnRoute {
  /** 路由ID。 */
  RouteId: string;
  /** IDC网段。 */
  DestinationCidrBlock: string;
  /** `BGP`的`AS-Path`属性。 */
  ASPath: string[];
  /** 备注 */
  Description: string;
  /** 最后更新时间 */
  UpdateTime: string;
}

/** IDC子网信息 */
declare interface DirectConnectSubnet {
  /** 专线网关ID */
  DirectConnectGatewayId: string;
  /** IDC子网网段 */
  CidrBlock: string;
}

/** 终端节点详情。 */
declare interface EndPoint {
  /** 终端节点ID。 */
  EndPointId: string;
  /** VPCID。 */
  VpcId: string;
  /** 子网ID。 */
  SubnetId: string;
  /** APPID。 */
  EndPointOwner: string;
  /** 终端节点名称。 */
  EndPointName: string;
  /** 终端节点服务的VPCID。 */
  ServiceVpcId: string;
  /** 终端节点服务的VIP。 */
  ServiceVip: string;
  /** 终端节点服务的ID。 */
  EndPointServiceId: string;
  /** 终端节点的VIP。 */
  EndPointVip: string;
  /** 终端节点状态，ACTIVE：可用，PENDING：待接受，ACCEPTING：接受中，REJECTED：已拒绝，FAILED：失败。 */
  State: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 终端节点绑定的安全组实例ID列表。 */
  GroupSet: string[];
  /** 终端节点服务名称。 */
  ServiceName: string | null;
}

/** 终端节点服务对象。 */
declare interface EndPointService {
  /** 终端节点服务ID */
  EndPointServiceId: string;
  /** VPCID。 */
  VpcId: string;
  /** APPID。 */
  ServiceOwner: string;
  /** 终端节点服务名称。 */
  ServiceName: string;
  /** 后端服务的VIP。 */
  ServiceVip: string;
  /** 后端服务的ID，比如lb-xxx。 */
  ServiceInstanceId: string;
  /** 是否自动接受。 */
  AutoAcceptFlag: boolean;
  /** 关联的终端节点个数。 */
  EndPointCount: number | null;
  /** 终端节点对象数组。 */
  EndPointSet: EndPoint[] | null;
  /** 创建时间。 */
  CreateTime: string;
  /** 挂载的PAAS服务类型，CLB,CDB,CRS */
  ServiceType: string;
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** 过滤器键值对 */
declare interface FilterObject {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。 */
  Values: string[];
}

/** 流日志 */
declare interface FlowLog {
  /** 私用网络ID或者统一ID，建议使用统一ID。 */
  VpcId?: string;
  /** 流日志唯一ID。 */
  FlowLogId?: string;
  /** 流日志实例名字。 */
  FlowLogName?: string;
  /** 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE|CCN|NAT|DCG。 */
  ResourceType?: string;
  /** 资源唯一ID。 */
  ResourceId?: string;
  /** 流日志采集类型，ACCEPT|REJECT|ALL。 */
  TrafficType?: string;
  /** 流日志存储ID。 */
  CloudLogId?: string;
  /** 流日志存储ID状态。 */
  CloudLogState?: string;
  /** 流日志描述信息。 */
  FlowLogDescription?: string;
  /** 流日志创建时间。 */
  CreatedTime?: string;
  /** 标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  TagSet: Tag[];
  /** 是否启用，true-启用，false-停用。 */
  Enable: boolean;
  /** 消费端类型：cls、ckafka。 */
  StorageType: string | null;
  /** 消费端信息，当消费端类型为ckafka时返回 */
  FlowLogStorage: FlowLogStorage | null;
  /** 流日志存储ID对应的地域信息 */
  CloudLogRegion: string | null;
}

/** 流日志存储信息 */
declare interface FlowLogStorage {
  /** 存储实例Id，当流日志存储类型为ckafka时，必填。 */
  StorageId: string;
  /** 主题Id，当流日志存储类型为ckafka时，必填。 */
  StorageTopic?: string | null;
}

/** 网关流量监控明细 */
declare interface GatewayFlowMonitorDetail {
  /** 来源`IP`。 */
  PrivateIpAddress: string;
  /** 入包量。 */
  InPkg: number;
  /** 出包量。 */
  OutPkg: number;
  /** 入流量，单位：`Byte`。 */
  InTraffic: number;
  /** 出流量，单位：`Byte`。 */
  OutTraffic: number;
}

/** 网关流控带宽信息 */
declare interface GatewayQos {
  /** VPC实例ID。 */
  VpcId: string;
  /** 云服务器内网IP。 */
  IpAddress: string;
  /** 流控带宽值。 */
  Bandwidth: number;
  /** 创建时间。 */
  CreateTime: string;
}

/** 描述 HAVIP 信息 */
declare interface HaVip {
  /** `HAVIP`的`ID`，是`HAVIP`的唯一标识。 */
  HaVipId: string;
  /** `HAVIP`名称。 */
  HaVipName: string;
  /** 虚拟IP地址。 */
  Vip: string;
  /** `HAVIP`所在私有网络`ID`。 */
  VpcId: string;
  /** `HAVIP`所在子网`ID`。 */
  SubnetId: string;
  /** `HAVIP`关联弹性网卡`ID`。 */
  NetworkInterfaceId: string;
  /** 被绑定的实例`ID`。 */
  InstanceId: string;
  /** 绑定`EIP`。 */
  AddressIp: string;
  /** 状态：`AVAILABLE`：运行中`UNBIND`：未绑定 */
  State: string;
  /** 创建时间。 */
  CreatedTime: string;
  /** 使用havip的业务标识。 */
  Business: string;
}

/** IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议 */
declare interface IKEOptionsSpecification {
  /** 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBS-192', 'AES-CBC-256', 'DES-CBC'，'SM4', 默认为3DES-CBC */
  PropoEncryAlgorithm?: string;
  /** 认证算法：可选值：'MD5', 'SHA1'，'SHA-256' 默认为MD5 */
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
  /** 加密算法，可选值：'3DES-CBC', 'AES-CBC-128', 'AES-CBC-192', 'AES-CBC-256', 'DES-CBC', 'SM4', 'NULL'， 默认为AES-CBC-128 */
  EncryptAlgorithm?: string;
  /** 认证算法：可选值：'MD5', 'SHA1'，'SHA-256' 默认为 */
  IntegrityAlgorith?: string;
  /** IPsec SA lifetime(s)：单位秒，取值范围：180-604800 */
  IPSECSaLifetimeSeconds?: number;
  /** PFS：可选值：'NULL', 'DH-GROUP1', 'DH-GROUP2', 'DH-GROUP5', 'DH-GROUP14', 'DH-GROUP24'，默认为NULL */
  PfsDhGroup?: string;
  /** IPsec SA lifetime(KB)：单位KB，取值范围：2560-604800 */
  IPSECSaLifetimeTraffic?: number;
}

/** 预付费（包年包月）计费对象。 */
declare interface InstanceChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36。 */
  Period: number;
  /** 自动续费标识。取值范围： NOTIFY_AND_AUTO_RENEW：通知过期且自动续费， NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费。默认：NOTIFY_AND_MANUAL_RENEW */
  RenewFlag?: string;
}

/** 用于描述实例的统计信息 */
declare interface InstanceStatistic {
  /** 实例的类型 */
  InstanceType: string;
  /** 实例的个数 */
  InstanceCount: number;
}

/** IPV6转换规则 */
declare interface Ip6Rule {
  /** IPV6转换规则唯一ID，形如rule6-xxxxxxxx */
  Ip6RuleId: string;
  /** IPV6转换规则名称 */
  Ip6RuleName: string;
  /** IPV6地址 */
  Vip6: string;
  /** IPV6端口号 */
  Vport6: number;
  /** 协议类型，支持TCP/UDP */
  Protocol: string;
  /** IPV4地址 */
  Vip: string;
  /** IPV4端口号 */
  Vport: number;
  /** 转换规则状态，限于CREATING,RUNNING,DELETING,MODIFYING */
  RuleStatus: string;
  /** 转换规则创建时间 */
  CreatedTime: string;
}

/** IPV6转换规则 */
declare interface Ip6RuleInfo {
  /** IPV6端口号，可在0~65535范围取值 */
  Vport6: number;
  /** 协议类型，支持TCP/UDP */
  Protocol: string;
  /** IPV4地址 */
  Vip: string;
  /** IPV4端口号，可在0~65535范围取值 */
  Vport: number;
}

/** IPV6转换实例信息 */
declare interface Ip6Translator {
  /** IPV6转换实例唯一ID，形如ip6-xxxxxxxx */
  Ip6TranslatorId: string;
  /** IPV6转换实例名称 */
  Ip6TranslatorName: string;
  /** IPV6地址 */
  Vip6: string;
  /** IPV6转换地址所属运营商 */
  IspName: string;
  /** 转换实例状态，限于CREATING,RUNNING,DELETING,MODIFYING */
  TranslatorStatus: string;
  /** IPV6转换实例创建时间 */
  CreatedTime: string;
  /** 绑定的IPV6转换规则数量 */
  Ip6RuleCount: number;
  /** IPV6转换规则信息 */
  IP6RuleSet: Ip6Rule[];
}

/** IP在线查询的字段信息 */
declare interface IpField {
  /** 国家字段信息 */
  Country?: boolean;
  /** 省、州、郡一级行政区域字段信息 */
  Province?: boolean;
  /** 市一级行政区域字段信息 */
  City?: boolean;
  /** 市内区域字段信息 */
  Region?: boolean;
  /** 接入运营商字段信息 */
  Isp?: boolean;
  /** 骨干运营商字段信息 */
  AsName?: boolean;
  /** 骨干As号 */
  AsId?: boolean;
  /** 注释字段 */
  Comment?: boolean;
}

/** IP地理位置信息 */
declare interface IpGeolocationInfo {
  /** 国家信息 */
  Country?: string | null;
  /** 省、州、郡一级行政区域信息 */
  Province?: string | null;
  /** 市一级行政区域信息 */
  City?: string | null;
  /** 市内区域信息 */
  Region?: string | null;
  /** 接入运营商信息 */
  Isp?: string | null;
  /** 骨干运营商名称 */
  AsName?: string | null;
  /** 骨干运营商AS号 */
  AsId?: string | null;
  /** 注释信息。目前的填充值为移动接入用户的APN值，如无APN属性则为空 */
  Comment?: string | null;
  /** IP地址 */
  AddressIp: string | null;
}

/** `IPv6`地址信息。 */
declare interface Ipv6Address {
  /** `IPv6`地址，形如：`3402:4e00:20:100:0:8cd9:2a67:71f3` */
  Address: string;
  /** 是否是主`IP`。 */
  Primary?: boolean;
  /** `EIP`实例`ID`，形如：`eip-hxlqja90`。 */
  AddressId?: string;
  /** 描述信息。 */
  Description?: string;
  /** 公网IP是否被封堵。 */
  IsWanIpBlocked?: boolean;
  /** `IPv6`地址状态：`PENDING`：生产中`MIGRATING`：迁移中`DELETING`：删除中`AVAILABLE`：可用的 */
  State?: string;
}

/** IPv6子网段对象。 */
declare interface Ipv6SubnetCidrBlock {
  /** 子网实例`ID`。形如：`subnet-pxir56ns`。 */
  SubnetId: string;
  /** `IPv6`子网段。形如：`3402:4e00:20:1001::/64` */
  Ipv6CidrBlock?: string;
}

/** 单项计费价格信息 */
declare interface ItemPrice {
  /** 按量计费后付费单价，单位：元。 */
  UnitPrice?: number;
  /** 按量计费后付费计价单元，可取值范围： HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）： GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。 */
  ChargeUnit?: string;
  /** 预付费商品的原价，单位：元。 */
  OriginalPrice?: number;
  /** 预付费商品的折扣价，单位：元。 */
  DiscountPrice?: number;
}

/** 本地网关信息 */
declare interface LocalGateway {
  /** CDC实例ID */
  CdcId: string;
  /** VPC实例ID */
  VpcId: string;
  /** 本地网关实例ID */
  UniqLocalGwId: string;
  /** 本地网关名称 */
  LocalGatewayName: string;
  /** 本地网关IP地址 */
  LocalGwIp: string;
  /** 本地网关创建时间 */
  CreateTime: string;
}

/** 模板对象成员信息 */
declare interface MemberInfo {
  /** 模板对象成员 */
  Member: string;
  /** 模板对象成员描述信息 */
  Description?: string;
}

/** 查询nat路由的返回路由对象 */
declare interface NatDirectConnectGatewayRoute {
  /** 子网的 `IPv4` `CIDR` */
  DestinationCidrBlock: string;
  /** 下一跳网关的类型，目前此接口支持的类型有：DIRECTCONNECT：专线网关 */
  GatewayType: string;
  /** 下一跳网关ID */
  GatewayId: string;
  /** 路由的创建时间 */
  CreateTime: string;
  /** 路由的更新时间 */
  UpdateTime: string;
}

/** NAT网关对象。 */
declare interface NatGateway {
  /** NAT网关的ID。 */
  NatGatewayId: string;
  /** NAT网关的名称。 */
  NatGatewayName: string;
  /** NAT网关创建的时间。 */
  CreatedTime: string;
  /** NAT网关的状态。 'PENDING'：生产中，'DELETING'：删除中，'AVAILABLE'：运行中，'UPDATING'：升级中，‘FAILED’：失败。 */
  State: string;
  /** 网关最大外网出带宽(单位:Mbps)。 */
  InternetMaxBandwidthOut: number;
  /** 网关并发连接上限。 */
  MaxConcurrentConnection: number;
  /** 绑定NAT网关的公网IP对象数组。 */
  PublicIpAddressSet: NatGatewayAddress[];
  /** NAT网关网络状态。“AVAILABLE”:运行中, “UNAVAILABLE”:不可用, “INSUFFICIENT”:欠费停服。 */
  NetworkState: string;
  /** NAT网关的端口转发规则。 */
  DestinationIpPortTranslationNatRuleSet: DestinationIpPortTranslationNatRule[];
  /** VPC实例ID。 */
  VpcId: string;
  /** NAT网关所在的可用区。 */
  Zone: string;
  /** 绑定的专线网关ID。 */
  DirectConnectGatewayIds: string[] | null;
  /** 所属子网ID。 */
  SubnetId: string | null;
  /** 标签键值对。 */
  TagSet: Tag[];
  /** NAT网关绑定的安全组列表 */
  SecurityGroupSet: string[] | null;
  /** NAT网关的SNAT转发规则。 */
  SourceIpTranslationNatRuleSet: SourceIpTranslationNatRule[] | null;
  /** 是否独享型NAT。 */
  IsExclusive: boolean | null;
  /** 独享型NAT所在的网关集群的带宽(单位:Mbps)，当IsExclusive为false时无此字段。 */
  ExclusiveGatewayBandwidth: number | null;
  /** NAT网关是否被封禁。“NORMAL”：未被封禁，“RESTRICTED”：已被封禁。 */
  RestrictState: string | null;
}

/** NAT网关绑定的弹性IP */
declare interface NatGatewayAddress {
  /** 弹性公网IP（EIP）的唯一 ID，形如：`eip-11112222`。 */
  AddressId?: string;
  /** 外网IP地址，形如：`123.121.34.33`。 */
  PublicIpAddress?: string;
  /** 资源封堵状态。true表示弹性ip处于封堵状态，false表示弹性ip处于未封堵状态。 */
  IsBlocked?: boolean;
}

/** NAT网关的端口转发规则 */
declare interface NatGatewayDestinationIpPortTranslationNatRule {
  /** 网络协议，可选值：`TCP`、`UDP`。 */
  IpProtocol?: string;
  /** 弹性IP。 */
  PublicIpAddress: string;
  /** 公网端口。 */
  PublicPort: number;
  /** 内网地址。 */
  PrivateIpAddress: string;
  /** 内网端口。 */
  PrivatePort: number;
  /** NAT网关转发规则描述。 */
  Description?: string;
  /** NAT网关的ID。 */
  NatGatewayId: string | null;
  /** 私有网络VPC的ID。 */
  VpcId: string | null;
  /** NAT网关转发规则创建时间。 */
  CreatedTime: string | null;
}

/** 网络探测对象。 */
declare interface NetDetect {
  /** `VPC`实例`ID`。形如：`vpc-12345678` */
  VpcId: string;
  /** `VPC`实例名称。 */
  VpcName: string;
  /** 子网实例ID。形如：subnet-12345678。 */
  SubnetId: string;
  /** 子网实例名称。 */
  SubnetName: string;
  /** 网络探测实例ID。形如：netd-12345678。 */
  NetDetectId: string;
  /** 网络探测名称，最大长度不能超过60个字节。 */
  NetDetectName: string;
  /** 探测目的IPv4地址数组，最多两个。 */
  DetectDestinationIp: string[];
  /** 系统自动分配的探测源IPv4数组。长度为2。 */
  DetectSourceIp: string[];
  /** 下一跳类型，目前我们支持的类型有：VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；NAT：NAT网关；NORMAL_CVM：普通云服务器；CCN：云联网网关； */
  NextHopType: string;
  /** 下一跳目的网关，取值与“下一跳类型”相关：下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；下一跳类型为NAT，取值Nat网关，形如：nat-12345678；下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；下一跳类型为CCN，取值云联网网关，形如：ccn-12345678； */
  NextHopDestination: string;
  /** 下一跳网关名称。 */
  NextHopName: string | null;
  /** 网络探测描述。 */
  NetDetectDescription: string | null;
  /** 创建时间。 */
  CreateTime: string | null;
}

/** 网络探测目的IP的验证结果。 */
declare interface NetDetectIpState {
  /** 探测目的IPv4地址。 */
  DetectDestinationIp: string;
  /** 探测结果。0：成功；-1：查询不到路由丢包；-2：外出ACL丢包；-3：IN ACL丢包；-4：其他错误； */
  State: number;
  /** 时延，单位毫秒 */
  Delay: number;
  /** 丢包率 */
  PacketLossRate: number;
}

/** 网络探测验证结果。 */
declare interface NetDetectState {
  /** 网络探测实例ID。形如：netd-12345678。 */
  NetDetectId: string;
  /** 网络探测目的IP验证结果对象数组。 */
  NetDetectIpStateSet: NetDetectIpState[];
}

/** 网络ACL */
declare interface NetworkAcl {
  /** `VPC`实例`ID`。 */
  VpcId: string;
  /** 网络ACL实例`ID`。 */
  NetworkAclId: string;
  /** 网络ACL名称，最大长度为60。 */
  NetworkAclName: string;
  /** 创建时间。 */
  CreatedTime: string;
  /** 网络ACL关联的子网数组。 */
  SubnetSet: Subnet[];
  /** 网络ACl入站规则。 */
  IngressEntries: NetworkAclEntry[];
  /** 网络ACL出站规则。 */
  EgressEntries: NetworkAclEntry[];
  /** 网络ACL类型。三元组：'TRIPLE' 五元组：'QUINTUPLE' */
  NetworkAclType: string;
  /** 标签键值对 */
  TagSet: Tag[];
}

/** 网络ACL规则。 */
declare interface NetworkAclEntry {
  /** 修改时间。 */
  ModifyTime: string;
  /** 协议, 取值: TCP,UDP, ICMP, ALL。 */
  Protocol?: string;
  /** 端口(all, 单个port, range)。当Protocol为ALL或ICMP时，不能指定Port。 */
  Port?: string;
  /** 网段或IP(互斥)。 */
  CidrBlock?: string;
  /** 网段或IPv6(互斥)。 */
  Ipv6CidrBlock?: string;
  /** ACCEPT 或 DROP。 */
  Action?: string;
  /** 规则描述，最大长度100。 */
  Description?: string;
}

/** 网络ACL规则集合 */
declare interface NetworkAclEntrySet {
  /** 入站规则。 */
  Ingress?: NetworkAclEntry[];
  /** 出站规则。 */
  Egress?: NetworkAclEntry[];
}

/** 网络ACL五元组 */
declare interface NetworkAclQuintupleEntries {
  /** 网络ACL五元组入站规则。 */
  Ingress?: NetworkAclQuintupleEntry[];
  /** 网络ACL五元组出站规则 */
  Egress?: NetworkAclQuintupleEntry[];
}

/** 网络ACL五元组Entry */
declare interface NetworkAclQuintupleEntry {
  /** 协议, 取值: TCP,UDP, ICMP, ALL。 */
  Protocol?: string;
  /** 描述。 */
  Description?: string;
  /** 源端口(all, 单个port, range)。当Protocol为ALL或ICMP时，不能指定Port。 */
  SourcePort?: string;
  /** 源CIDR。 */
  SourceCidr?: string;
  /** 目的端口(all, 单个port, range)。当Protocol为ALL或ICMP时，不能指定Port。 */
  DestinationPort?: string;
  /** 目的CIDR。 */
  DestinationCidr?: string;
  /** 动作，ACCEPT 或 DROP。 */
  Action?: string;
  /** 网络ACL条目唯一ID。 */
  NetworkAclQuintupleEntryId?: string;
  /** 优先级，从1开始。 */
  Priority?: number;
  /** 创建时间，用于DescribeNetworkAclQuintupleEntries的出参。 */
  CreateTime?: string;
  /** 方向，INGRESS或EGRESS，用于DescribeNetworkAclQuintupleEntries的出参。 */
  NetworkAclDirection?: string;
}

/** 弹性网卡 */
declare interface NetworkInterface {
  /** 弹性网卡实例ID，例如：eni-f1xjkw1b。 */
  NetworkInterfaceId?: string;
  /** 弹性网卡名称。 */
  NetworkInterfaceName?: string;
  /** 弹性网卡描述。 */
  NetworkInterfaceDescription?: string;
  /** 子网实例ID。 */
  SubnetId?: string;
  /** VPC实例ID。 */
  VpcId?: string;
  /** 绑定的安全组。 */
  GroupSet?: string[];
  /** 是否是主网卡。 */
  Primary?: boolean;
  /** MAC地址。 */
  MacAddress?: string;
  /** 弹性网卡状态：`PENDING`：创建中`AVAILABLE`：可用的`ATTACHING`：绑定中`DETACHING`：解绑中`DELETING`：删除中 */
  State?: string;
  /** 内网IP信息。 */
  PrivateIpAddressSet?: PrivateIpAddressSpecification[];
  /** 绑定的云服务器对象。 */
  Attachment?: NetworkInterfaceAttachment | null;
  /** 可用区。 */
  Zone?: string;
  /** 创建时间。 */
  CreatedTime?: string;
  /** `IPv6`地址列表。 */
  Ipv6AddressSet?: Ipv6Address[];
  /** 标签键值对。 */
  TagSet?: Tag[];
  /** 网卡类型。0 - 弹性网卡；1 - evm弹性网卡。 */
  EniType?: number;
  /** 网卡绑定的子机类型：cvm，eks。 */
  Business?: string | null;
  /** 网卡所关联的CDC实例ID。 */
  CdcId?: string | null;
  /** 弹性网卡类型：0:标准型/1:扩展型。默认值为0。 */
  AttachType?: number | null;
  /** 用于保留网卡主IP的资源ID用于保留网卡主IP的资源ID。用于删除网卡时作为入参数。 */
  ResourceId?: string | null;
  /** 服务质量级别：`DEFAULT`：默认`PT`：云金`AU`：云银`AG`：云铜 */
  QosLevel?: string | null;
}

/** 弹性网卡绑定关系 */
declare interface NetworkInterfaceAttachment {
  /** 云主机实例ID。 */
  InstanceId: string;
  /** 网卡在云主机实例内的序号。 */
  DeviceIndex: number;
  /** 云主机所有者账户信息。 */
  InstanceAccountId: string;
  /** 绑定时间。 */
  AttachTime: string;
}

/** 价格 */
declare interface Price {
  /** 实例价格。 */
  InstancePrice?: ItemPrice;
  /** 网络价格。 */
  BandwidthPrice?: ItemPrice;
}

/** 内网IP信息 */
declare interface PrivateIpAddressSpecification {
  /** 内网IP地址。 */
  PrivateIpAddress: string;
  /** 是否是主IP。 */
  Primary?: boolean;
  /** 公网IP地址。 */
  PublicIpAddress?: string;
  /** EIP实例ID，例如：eip-11112222。 */
  AddressId?: string;
  /** 内网IP描述信息。 */
  Description?: string;
  /** 公网IP是否被封堵。 */
  IsWanIpBlocked?: boolean;
  /** IP状态：PENDING：生产中MIGRATING：迁移中DELETING：删除中AVAILABLE：可用的 */
  State?: string;
}

/** 描述网络中心每个产品的配额信息 */
declare interface ProductQuota {
  /** 产品配额ID */
  QuotaId: string;
  /** 产品配额名称 */
  QuotaName: string;
  /** 产品当前配额 */
  QuotaCurrent: number;
  /** 产品配额上限 */
  QuotaLimit: number;
  /** 产品配额是否有地域属性 */
  QuotaRegion: boolean;
}

/** 描述配额信息 */
declare interface Quota {
  /** 配额名称，取值范围：`TOTAL_EIP_QUOTA`：用户当前地域下EIP的配额数；`DAILY_EIP_APPLY`：用户当前地域下今日申购次数；`DAILY_PUBLIC_IP_ASSIGN`：用户当前地域下，重新分配公网 IP次数。 */
  QuotaId?: string;
  /** 当前数量 */
  QuotaCurrent?: number;
  /** 配额数量 */
  QuotaLimit?: number;
}

/** 安全组被引用信息 */
declare interface ReferredSecurityGroup {
  /** 安全组实例ID。 */
  SecurityGroupId: string;
  /** 引用安全组实例ID（SecurityGroupId）的所有安全组实例ID。 */
  ReferredSecurityGroupIds: string[];
}

/** 描述带宽包资源信息的结构 */
declare interface Resource {
  /** 带宽包资源类型，包括'Address'和'LoadBalance' */
  ResourceType: string;
  /** 带宽包资源Id，形如'eip-xxxx', 'lb-xxxx' */
  ResourceId: string;
  /** 带宽包资源Ip */
  AddressIp: string;
}

/** VPC资源看板（各资源个数） */
declare interface ResourceDashboard {
  /** Vpc实例ID，例如：vpc-bq4bzxpj。 */
  VpcId: string;
  /** 子网实例ID，例如：subnet-bthucmmy。 */
  SubnetId: string;
  /** 基础网络互通。 */
  Classiclink: number;
  /** 专线网关。 */
  Dcg: number;
  /** 对等连接。 */
  Pcx: number;
  /** 统计当前除云服务器 IP、弹性网卡IP和网络探测IP以外的所有已使用的IP总数。云服务器 IP、弹性网卡IP和网络探测IP单独计数。 */
  Ip: number;
  /** NAT网关。 */
  Nat: number;
  /** VPN网关。 */
  Vpngw: number;
  /** 流日志。 */
  FlowLog: number;
  /** 网络探测。 */
  NetworkDetect: number;
  /** 网络ACL。 */
  NetworkACL: number;
  /** 云主机。 */
  CVM: number;
  /** 负载均衡。 */
  LB: number;
  /** 关系型数据库。 */
  CDB: number;
  /** 云数据库 TencentDB for Memcached。 */
  Cmem: number;
  /** 时序数据库。 */
  CTSDB: number;
  /** 数据库 TencentDB for MariaDB（TDSQL）。 */
  MariaDB: number;
  /** 数据库 TencentDB for SQL Server。 */
  SQLServer: number;
  /** 云数据库 TencentDB for PostgreSQL。 */
  Postgres: number;
  /** 网络附加存储。 */
  NAS: number;
  /** Snova云数据仓库。 */
  Greenplumn: number;
  /** 消息队列 CKAFKA。 */
  Ckafka: number;
  /** Grocery。 */
  Grocery: number;
  /** 数据加密服务。 */
  HSM: number;
  /** 游戏存储 Tcaplus。 */
  Tcaplus: number;
  /** Cnas。 */
  Cnas: number;
  /** HTAP 数据库 TiDB。 */
  TiDB: number;
  /** EMR 集群。 */
  Emr: number;
  /** SEAL。 */
  SEAL: number;
  /** 文件存储 CFS。 */
  CFS: number;
  /** Oracle。 */
  Oracle: number;
  /** ElasticSearch服务。 */
  ElasticSearch: number;
  /** 区块链服务。 */
  TBaaS: number;
  /** Itop。 */
  Itop: number;
  /** 云数据库审计。 */
  DBAudit: number;
  /** 企业级云数据库 CynosDB for Postgres。 */
  CynosDBPostgres: number;
  /** 数据库 TencentDB for Redis。 */
  Redis: number;
  /** 数据库 TencentDB for MongoDB。 */
  MongoDB: number;
  /** 分布式数据库 TencentDB for TDSQL。 */
  DCDB: number;
  /** 企业级云数据库 CynosDB for MySQL。 */
  CynosDBMySQL: number;
  /** 子网。 */
  Subnet: number;
  /** 路由表。 */
  RouteTable: number;
}

/** 路由策略对象 */
declare interface Route {
  /** 目的网段，取值不能在私有网络网段内，例如：112.20.51.0/24。 */
  DestinationCidrBlock: string;
  /** 下一跳类型，目前我们支持的类型有：CVM：公网网关类型的云服务器；VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；HAVIP：高可用虚拟IP；NAT：NAT网关; NORMAL_CVM：普通云服务器；EIP：云服务器的公网IP；LOCAL_GATEWAY：本地网关。 */
  GatewayType: string;
  /** 下一跳地址，这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址。 */
  GatewayId: string;
  /** 路由策略ID。IPv4路由策略ID是有意义的值，IPv6路由策略是无意义的值0。后续建议完全使用字符串唯一ID `RouteItemId`操作路由策略。该字段在删除时必填，其他字段无需填写。 */
  RouteId?: number;
  /** 路由策略描述。 */
  RouteDescription?: string;
  /** 是否启用 */
  Enabled?: boolean;
  /** 路由类型，目前我们支持的类型有：USER：用户路由；NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；CCN：云联网路由，系统默认下发，不可编辑与删除。用户只能添加和操作 USER 类型的路由。 */
  RouteType?: string;
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId?: string;
  /** 目的IPv6网段，取值不能在私有网络网段内，例如：2402:4e00:1000:810b::/64。 */
  DestinationIpv6CidrBlock?: string;
  /** 路由唯一策略ID。 */
  RouteItemId?: string;
  /** 路由策略是否发布到云联网。 */
  PublishedToVbc?: boolean | null;
  /** 路由策略创建时间 */
  CreatedTime?: string;
}

/** 路由冲突对象 */
declare interface RouteConflict {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** 要检查的与之冲突的目的端 */
  DestinationCidrBlock: string;
  /** 冲突的路由策略列表 */
  ConflictSet: Route[];
}

/** 路由表对象 */
declare interface RouteTable {
  /** VPC实例ID。 */
  VpcId: string;
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** 路由表名称。 */
  RouteTableName: string;
  /** 路由表关联关系。 */
  AssociationSet: RouteTableAssociation[];
  /** IPv4路由策略集合。 */
  RouteSet: Route[];
  /** 是否默认路由表。 */
  Main: boolean;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 标签键值对。 */
  TagSet: Tag[];
  /** local路由是否发布云联网。 */
  LocalCidrForCcn: CidrForCcn[] | null;
}

/** 路由表关联关系 */
declare interface RouteTableAssociation {
  /** 子网实例ID。 */
  SubnetId: string;
  /** 路由表实例ID。 */
  RouteTableId: string;
}

/** 安全组对象 */
declare interface SecurityGroup {
  /** 安全组实例ID，例如：sg-ohuuioma。 */
  SecurityGroupId: string;
  /** 安全组名称，可任意命名，但不得超过60个字符。 */
  SecurityGroupName: string;
  /** 安全组备注，最多100个字符。 */
  SecurityGroupDesc: string;
  /** 项目id，默认0。可在qcloud控制台项目管理页面查询到。 */
  ProjectId?: string;
  /** 是否是默认安全组，默认安全组不支持删除。 */
  IsDefault?: boolean;
  /** 安全组创建时间。 */
  CreatedTime?: string;
  /** 标签键值对。 */
  TagSet?: Tag[];
  /** 安全组更新时间。 */
  UpdateTime?: string | null;
}

/** 安全组关联的实例统计 */
declare interface SecurityGroupAssociationStatistics {
  /** 安全组实例ID。 */
  SecurityGroupId: string;
  /** 云服务器实例数。 */
  CVM: number;
  /** MySQL数据库实例数。 */
  CDB: number;
  /** 弹性网卡实例数。 */
  ENI: number;
  /** 被安全组引用数。 */
  SG: number;
  /** 负载均衡实例数。 */
  CLB: number;
  /** 全量实例的绑定统计。 */
  InstanceStatistics: InstanceStatistic[];
  /** 所有资源的总计数（不包含被安全组引用数）。 */
  TotalCount: number;
}

/** 用户安全组配额限制。 */
declare interface SecurityGroupLimitSet {
  /** 每个项目每个地域可创建安全组数 */
  SecurityGroupLimit: number;
  /** 安全组下的最大规则数 */
  SecurityGroupPolicyLimit: number;
  /** 安全组下嵌套安全组规则数 */
  ReferedSecurityGroupLimit: number;
  /** 单安全组关联实例数 */
  SecurityGroupInstanceLimit: number;
  /** 实例关联安全组数 */
  InstanceSecurityGroupLimit: number;
}

/** 安全组规则对象 */
declare interface SecurityGroupPolicy {
  /** 安全组规则索引号，值会随着安全组规则的变更动态变化。使用PolicyIndex时，请先调用`DescribeSecurityGroupPolicies`获取到规则的PolicyIndex，并且结合返回值中的Version一起使用处理规则。 */
  PolicyIndex?: number;
  /** 协议, 取值: TCP,UDP,ICMP,ICMPv6,ALL。 */
  Protocol?: string;
  /** 端口(all, 离散port, range)。说明：如果Protocol设置为ALL，则Port也需要设置为all。 */
  Port?: string;
  /** 协议端口ID或者协议端口组ID。ServiceTemplate和Protocol+Port互斥。 */
  ServiceTemplate?: ServiceTemplateSpecification;
  /** 网段或IP(互斥)。 */
  CidrBlock?: string;
  /** 网段或IPv6(互斥)。 */
  Ipv6CidrBlock?: string;
  /** 安全组实例ID，例如：sg-ohuuioma。 */
  SecurityGroupId?: string;
  /** IP地址ID或者ID地址组ID。 */
  AddressTemplate?: AddressTemplateSpecification;
  /** ACCEPT 或 DROP。 */
  Action?: string;
  /** 安全组规则描述。 */
  PolicyDescription?: string;
  /** 安全组最近修改时间。 */
  ModifyTime?: string;
}

/** 安全组规则集合 */
declare interface SecurityGroupPolicySet {
  /** 安全组规则当前版本。用户每次更新安全规则版本会自动加1，防止更新的路由规则已过期，不填不考虑冲突。 */
  Version?: string;
  /** 出站规则。 */
  Egress?: SecurityGroupPolicy[];
  /** 入站规则。 */
  Ingress?: SecurityGroupPolicy[];
}

/** SecurityPolicyDatabase策略 */
declare interface SecurityPolicyDatabase {
  /** 本端网段 */
  LocalCidrBlock: string;
  /** 对端网段 */
  RemoteCidrBlock: string[];
}

/** 协议端口模板 */
declare interface ServiceTemplate {
  /** 协议端口实例ID，例如：ppm-f5n1f8da。 */
  ServiceTemplateId: string;
  /** 模板名称。 */
  ServiceTemplateName: string;
  /** 协议端口信息。 */
  ServiceSet: string[];
  /** 创建时间。 */
  CreatedTime?: string;
  /** 带备注的协议端口信息。 */
  ServiceExtraSet: ServicesInfo[];
}

/** 协议端口模板集合 */
declare interface ServiceTemplateGroup {
  /** 协议端口模板集合实例ID，例如：ppmg-2klmrefu。 */
  ServiceTemplateGroupId: string;
  /** 协议端口模板集合名称。 */
  ServiceTemplateGroupName: string;
  /** 协议端口模板实例ID。 */
  ServiceTemplateIdSet: string[];
  /** 创建时间。 */
  CreatedTime?: string;
  /** 协议端口模板实例信息。 */
  ServiceTemplateSet: ServiceTemplate[];
}

/** 协议端口模板 */
declare interface ServiceTemplateSpecification {
  /** 协议端口ID，例如：ppm-f5n1f8da。 */
  ServiceId: string;
  /** 协议端口组ID，例如：ppmg-f5n1f8da。 */
  ServiceGroupId: string;
}

/** 协议端口模板信息 */
declare interface ServicesInfo {
  /** 协议端口。 */
  Service: string;
  /** 备注。 */
  Description?: string | null;
}

/** NAT的SNAT规则 */
declare interface SourceIpTranslationNatRule {
  /** 资源ID */
  ResourceId: string;
  /** 资源类型，目前包含SUBNET、NETWORKINTERFACE */
  ResourceType: string | null;
  /** 源IP/网段 */
  PrivateIpAddress: string;
  /** 弹性IP地址池 */
  PublicIpAddresses: string[];
  /** 描述 */
  Description: string;
  /** Snat规则ID */
  NatGatewaySnatId?: string;
  /** NAT网关的ID。 */
  NatGatewayId?: string | null;
  /** 私有网络VPC的ID。 */
  VpcId?: string | null;
  /** NAT网关SNAT规则创建时间。 */
  CreatedTime?: string | null;
}

/** DownloadVpnGatewaySslClientCert 使用 */
declare interface SslClientConfig {
  /** 客户端配置 */
  SslVpnClientConfiguration: string;
  /** 更证书 */
  SslVpnRootCert: string;
  /** 客户端密钥 */
  SslVpnKey: string;
  /** 客户端证书 */
  SslVpnCert: string;
}

/** SSL-VPN-CLIENT 出参 */
declare interface SslVpnClient {
  /** VPC实例ID */
  VpcId: string;
  /** SSL-VPN-SERVER 实例ID */
  SslVpnServerId: string;
  /** 证书状态. 0:创建中1:正常2:已停用3.已过期4.创建出错 */
  CertStatus: number;
  /** SSL-VPN-CLIENT 实例ID */
  SslVpnClientId: string;
  /** 证书开始时间 */
  CertBeginTime: string;
  /** 证书到期时间 */
  CertEndTime: string;
  /** CLIENT NAME */
  Name: string;
  /** 创建CLIENT 状态。0 创建中1 创建出错2 更新中3 更新出错4 销毁中5 销毁出粗6 已连通7 未知 */
  State: string;
}

/** SSL-VPN-SERVER 信息 SET */
declare interface SslVpnSever {
  /** VPC实例ID. */
  VpcId: string | null;
  /** SSL-VPN-SERVER 实例ID。 */
  SslVpnServerId: string;
  /** VPN 实例ID。 */
  VpnGatewayId: string;
  /** SSL-VPN-SERVER name。 */
  SslVpnServerName: string;
  /** 本端地址段。 */
  LocalAddress: string[];
  /** 客户端地址段。 */
  RemoteAddress: string;
  /** 客户端最大连接数。 */
  MaxConnection: number;
  /** SSL-VPN 网关公网IP。 */
  WanIp: string;
  /** SSL VPN服务端监听协议 */
  SslVpnProtocol: string;
  /** SSL VPN服务端监听协议端口 */
  SslVpnPort: number;
  /** 加密算法。 */
  EncryptAlgorithm: string;
  /** 认证算法。 */
  IntegrityAlgorithm: string;
  /** 是否支持压缩。 */
  Compress: number;
  /** 创建时间。 */
  CreateTime: string;
  /** SSL-VPN-SERVER 创建状态。0 创建中1 创建出错2 更新中3 更新出错4 销毁中5 销毁出粗6 已连通7 未知 */
  State: number;
  /** 是否开启SSO认证。1：开启 0： 不开启 */
  SsoEnabled: number;
  /** EIAM应用ID */
  EiamApplicationId: string;
  /** 是否开启策略控制。0：不开启 1： 开启 */
  AccessPolicyEnabled: number;
  /** 策略信息 */
  AccessPolicy: AccessPolicy[];
}

/** 子网对象 */
declare interface Subnet {
  /** `VPC`实例`ID`。 */
  VpcId: string;
  /** 子网实例`ID`，例如：subnet-bthucmmy。 */
  SubnetId: string;
  /** 子网名称。 */
  SubnetName: string;
  /** 子网的 `IPv4` `CIDR`。 */
  CidrBlock: string;
  /** 是否默认子网。 */
  IsDefault: boolean;
  /** 是否开启广播。 */
  EnableBroadcast: boolean;
  /** 可用区。 */
  Zone: string;
  /** 路由表实例ID，例如：rtb-l2h8d7c2。 */
  RouteTableId: string;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 可用`IPv4`数。 */
  AvailableIpAddressCount: number;
  /** 子网的 `IPv6` `CIDR`。 */
  Ipv6CidrBlock: string;
  /** 关联`ACL`ID */
  NetworkAclId: string;
  /** 是否为 `SNAT` 地址池子网。 */
  IsRemoteVpcSnat: boolean;
  /** 子网`IPv4`总数。 */
  TotalIpAddressCount: number;
  /** 标签键值对。 */
  TagSet: Tag[];
  /** CDC实例ID。 */
  CdcId: string | null;
  /** 是否是CDC所属子网。0:否 1:是 */
  IsCdcSubnet: number | null;
}

/** 子网对象 */
declare interface SubnetInput {
  /** 子网的`CIDR`。 */
  CidrBlock: string;
  /** 子网名称。 */
  SubnetName: string;
  /** 可用区。形如：`ap-guangzhou-2`。 */
  Zone: string;
  /** 指定关联路由表，形如：`rtb-3ryrwzuu`。 */
  RouteTableId?: string;
}

/** 标签键值对 */
declare interface Tag {
  /** 标签键 */
  Key: string | null;
  /** 标签值 */
  Value?: string | null;
}

/** 参数模板配额 */
declare interface TemplateLimit {
  /** 参数模板IP地址成员配额。 */
  AddressTemplateMemberLimit: number;
  /** 参数模板IP地址组成员配额。 */
  AddressTemplateGroupMemberLimit: number;
  /** 参数模板I协议端口成员配额。 */
  ServiceTemplateMemberLimit: number;
  /** 参数模板协议端口组成员配额。 */
  ServiceTemplateGroupMemberLimit: number;
}

/** 流量包信息描述类型 */
declare interface TrafficPackage {
  /** 流量包唯一ID */
  TrafficPackageId: string;
  /** 流量包名称 */
  TrafficPackageName: string | null;
  /** 流量包总量，单位GB */
  TotalAmount: number;
  /** 流量包剩余量，单位GB */
  RemainingAmount: number;
  /** 流量包状态，可能的值有: AVAILABLE-可用状态， EXPIRED-已过期， EXHAUSTED-已用完， REFUNDED-已退还， DELETED-已删除 */
  Status: string;
  /** 流量包创建时间 */
  CreatedTime: string;
  /** 流量包截止时间 */
  Deadline: string;
  /** 已使用的流量，单位GB */
  UsedAmount: number;
  /** 流量包标签 */
  TagSet: Tag[] | null;
  /** 区分闲时流量包与全时流量包 */
  DeductType: string;
}

/** 私有网络(VPC)对象。 */
declare interface VpcInfo {
  /** `VPC`名称。 */
  VpcName: string;
  /** `VPC`实例`ID`，例如：vpc-azd4dt1c。 */
  VpcId: string;
  /** `VPC`的`IPv4` `CIDR`。 */
  CidrBlock: string;
  /** 是否默认`VPC`。 */
  IsDefault?: boolean;
  /** 是否开启组播。 */
  EnableMulticast: boolean;
  /** 创建时间。 */
  CreatedTime?: string;
  /** `DNS`列表。 */
  DnsServerSet: string[];
  /** `DHCP`域名选项值。 */
  DomainName: string;
  /** `DHCP`选项集`ID`。 */
  DhcpOptionsId: string;
  /** 是否开启`DHCP`。 */
  EnableDhcp: boolean;
  /** `VPC`的`IPv6` `CIDR`。 */
  Ipv6CidrBlock: string;
  /** 标签键值对 */
  TagSet: Tag[];
  /** 辅助CIDR */
  AssistantCidrSet: AssistantCidr[] | null;
}

/** 终端节点服务的服务白名单对象详情。 */
declare interface VpcEndPointServiceUser {
  /** AppId。 */
  Owner: number;
  /** Uin。 */
  UserUin: string;
  /** 描述信息。 */
  Description: string;
  /** 创建时间。 */
  CreateTime: string;
  /** 终端节点服务ID。 */
  EndPointServiceId: string;
}

/** VPC内网IPv6对象。 */
declare interface VpcIpv6Address {
  /** `VPC`内`IPv6`地址。 */
  Ipv6Address: string;
  /** 所属子网 `IPv6` `CIDR`。 */
  CidrBlock: string;
  /** `IPv6`类型。 */
  Ipv6AddressType: string;
  /** `IPv6`申请时间。 */
  CreatedTime: string;
}

/** 私有网络配额 */
declare interface VpcLimit {
  /** 私有网络配额描述 */
  LimitType: string;
  /** 私有网络配额值 */
  LimitValue: number;
}

/** VPC内网IP对象。 */
declare interface VpcPrivateIpAddress {
  /** `VPC`内网`IP`。 */
  PrivateIpAddress: string;
  /** 所属子网`CIDR`。 */
  CidrBlock: string;
  /** 内网`IP`类型。 */
  PrivateIpAddressType: string;
  /** `IP`申请时间。 */
  CreatedTime: string;
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
  /** 通道加密协议。 */
  EncryptProto: string;
  /** 路由类型。 */
  RouteType: string;
  /** 创建时间。 */
  CreatedTime: string;
  /** 通道的生产状态，PENDING：生产中，AVAILABLE：运行中，DELETING：删除中。 */
  State: string;
  /** 通道连接状态，AVAILABLE：已连接。 */
  NetStatus: string;
  /** SPD。 */
  SecurityPolicyDatabaseSet: SecurityPolicyDatabase[];
  /** IKE选项。 */
  IKEOptionsSpecification: IKEOptionsSpecification;
  /** IPSEC选择。 */
  IPSECOptionsSpecification: IPSECOptionsSpecification;
  /** 是否支持健康状态探测 */
  EnableHealthCheck: boolean;
  /** 本端探测ip */
  HealthCheckLocalIp: string;
  /** 对端探测ip */
  HealthCheckRemoteIp: string;
  /** 通道健康检查状态，AVAILABLE：正常，UNAVAILABLE：不正常。 未配置健康检查不返回该对象 */
  HealthCheckStatus: string;
  /** DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启） */
  DpdEnable: number | null;
  /** DPD超时时间。即探测确认对端不存在需要的时间。 */
  DpdTimeout: string | null;
  /** DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试） */
  DpdAction: string | null;
  /** 标签键值对数组 */
  TagSet: Tag[];
  /** 协商类型 */
  NegotiationType: string | null;
}

/** VPN网关对象。 */
declare interface VpnGateway {
  /** 网关实例ID。 */
  VpnGatewayId: string;
  /** VPC实例ID。 */
  VpcId: string;
  /** 网关实例名称。 */
  VpnGatewayName: string;
  /** 网关实例类型：'IPSEC', 'SSL','CCN'。 */
  Type: string;
  /** 网关实例状态， 'PENDING'：生产中，'DELETING'：删除中，'AVAILABLE'：运行中。 */
  State: string;
  /** 网关公网IP。 */
  PublicIpAddress: string;
  /** 网关续费类型：'NOTIFY_AND_MANUAL_RENEW'：手动续费，'NOTIFY_AND_AUTO_RENEW'：自动续费，'NOT_NOTIFY_AND_NOT_RENEW'：到期不续费。 */
  RenewFlag: string;
  /** 网关付费类型：POSTPAID_BY_HOUR：按小时后付费，PREPAID：包年包月预付费， */
  InstanceChargeType: string;
  /** 网关出带宽。 */
  InternetMaxBandwidthOut: number;
  /** 创建时间。 */
  CreatedTime: string;
  /** 预付费网关过期时间。 */
  ExpiredTime: string;
  /** 公网IP是否被封堵。 */
  IsAddressBlocked: boolean;
  /** 计费模式变更，PREPAID_TO_POSTPAID：包年包月预付费到期转按小时后付费。 */
  NewPurchasePlan: string;
  /** 网关计费装，PROTECTIVELY_ISOLATED：被安全隔离的实例，NORMAL：正常。 */
  RestrictState: string;
  /** 可用区，如：ap-guangzhou-2 */
  Zone: string;
  /** 网关带宽配额信息 */
  VpnGatewayQuotaSet: VpnGatewayQuota[];
  /** 网关实例版本信息 */
  Version: string;
  /** Type值为CCN时，该值表示云联网实例ID */
  NetworkInstanceId: string;
  /** CDC 实例ID */
  CdcId: string;
  /** SSL-VPN 客户端连接数。 */
  MaxConnection: number;
}

/** VPN网关配额对象 */
declare interface VpnGatewayQuota {
  /** 带宽配额 */
  Bandwidth: number;
  /** 配额中文名称 */
  Cname: string;
  /** 配额英文名称 */
  Name: string;
}

/** Vpn网关目的路由 */
declare interface VpnGatewayRoute {
  /** 目的端IDC网段 */
  DestinationCidrBlock: string;
  /** 下一跳类型（关联实例类型）可选值:"VPNCONN"(VPN通道), "CCN"(CCN实例) */
  InstanceType: string;
  /** 下一跳实例ID */
  InstanceId: string;
  /** 优先级, 可选值: 0, 100 */
  Priority: number;
  /** 启用状态, 可选值: "ENABLE"(启用), "DISABLE"(禁用) */
  Status: string;
  /** 路由条目ID */
  RouteId?: string;
  /** 路由类型, 可选值: "VPC"(VPC路由), "CCN"(云联网传播路由), "Static"(静态路由), "BGP"(BGP路由) */
  Type?: string;
  /** 创建时间 */
  CreateTime?: string;
  /** 更新时间 */
  UpdateTime?: string;
}

/** 修改VPN状态参数 */
declare interface VpnGatewayRouteModify {
  /** Vpn网关路由ID */
  RouteId: string;
  /** Vpn网关状态, ENABEL 启用, DISABLE禁用 */
  Status: string;
}

/** VPN网关云联网路由信息 */
declare interface VpngwCcnRoutes {
  /** 路由信息ID */
  RouteId: string;
  /** 路由信息是否启用ENABLE：启用该路由DISABLE：不启用该路由 */
  Status?: string;
}

declare interface AcceptAttachCcnInstancesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 接受关联实例列表。 */
  Instances: CcnInstance[];
}

declare interface AcceptAttachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddBandwidthPackageResourcesRequest {
  /** 资源唯一ID，当前支持EIP资源和LB资源，形如'eip-xxxx', 'lb-xxxx' */
  ResourceIds: string[];
  /** 带宽包唯一标识ID，形如'bwp-xxxx' */
  BandwidthPackageId?: string;
  /** 带宽包类型，当前支持'BGP'类型，表示内部资源是BGP IP。 */
  NetworkType?: string;
  /** 资源类型，包括'Address', 'LoadBalance' */
  ResourceType?: string;
  /** 带宽包协议类型。当前支持'ipv4'和'ipv6'协议类型。 */
  Protocol?: string;
}

declare interface AddBandwidthPackageResourcesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddIp6RulesRequest {
  /** IPV6转换实例唯一ID，形如ip6-xxxxxxxx */
  Ip6TranslatorId: string;
  /** IPV6转换规则信息 */
  Ip6RuleInfos: Ip6RuleInfo[];
  /** IPV6转换规则名称 */
  Ip6RuleName?: string;
}

declare interface AddIp6RulesResponse {
  /** IPV6转换规则唯一ID数组，形如rule6-xxxxxxxx */
  Ip6RuleSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AddTemplateMemberRequest {
  /** 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。 */
  TemplateId: string;
  /** 需要添加的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致。 */
  TemplateMember: MemberInfo[];
}

declare interface AddTemplateMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AdjustPublicAddressRequest {
  /** 标识CVM实例的唯一 ID。CVM 唯一 ID 形如：`ins-11112222`。 */
  InstanceId?: string;
  /** 标识EIP实例的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。 */
  AddressId?: string;
}

declare interface AdjustPublicAddressResponse {
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AllocateAddressesRequest {
  /** EIP数量。默认值：1。 */
  AddressCount?: number;
  /** EIP线路类型。默认值：BGP。已开通静态单线IP白名单的用户，可选值：CMCC：中国移动CTCC：中国电信CUCC：中国联通注意：仅部分地域支持静态单线IP。 */
  InternetServiceProvider?: string;
  /** EIP计费方式。已开通标准账户类型白名单的用户，可选值：BANDWIDTH_PACKAGE：[共享带宽包](https://cloud.tencent.com/document/product/684/15255)付费（需额外开通共享带宽包白名单）BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费BANDWIDTH_PREPAID_BY_MONTH：包月按带宽预付费TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费默认值：TRAFFIC_POSTPAID_BY_HOUR。未开通标准账户类型白名单的用户，EIP计费方式与其绑定的实例的计费方式一致，无需传递此参数。 */
  InternetChargeType?: string;
  /** EIP出带宽上限，单位：Mbps。已开通标准账户类型白名单的用户，可选值范围取决于EIP计费方式：BANDWIDTH_PACKAGE：1 Mbps 至 1000 MbpsBANDWIDTH_POSTPAID_BY_HOUR：1 Mbps 至 100 MbpsBANDWIDTH_PREPAID_BY_MONTH：1 Mbps 至 200 MbpsTRAFFIC_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps默认值：1 Mbps。未开通标准账户类型白名单的用户，EIP出带宽上限取决于与其绑定的实例的公网出带宽上限，无需传递此参数。 */
  InternetMaxBandwidthOut?: number;
  /** 包月按带宽预付费EIP的计费参数。EIP为包月按带宽预付费时，该参数必传，其余场景不需传递 */
  AddressChargePrepaid?: AddressChargePrepaid;
  /** EIP类型。默认值：EIP。已开通Anycast公网加速白名单的用户，可选值：AnycastEIP：加速IP，可参见 [Anycast 公网加速](https://cloud.tencent.com/document/product/644)注意：仅部分地域支持加速IP。已开通精品IP白名单的用户，可选值：HighQualityEIP：精品IP注意：仅部分地域支持精品IP。 */
  AddressType?: string;
  /** Anycast发布域。已开通Anycast公网加速白名单的用户，可选值：ANYCAST_ZONE_GLOBAL：全球发布域（需要额外开通Anycast全球加速白名单）ANYCAST_ZONE_OVERSEAS：境外发布域[已废弃] ANYCAST_ZONE_A：发布域A（已更新为全球发布域）[已废弃] ANYCAST_ZONE_B：发布域B（已更新为全球发布域）默认值：ANYCAST_ZONE_OVERSEAS。 */
  AnycastZone?: string;
  /** [已废弃] AnycastEIP不再区分是否负载均衡。原参数说明如下：AnycastEIP是否用于绑定负载均衡。已开通Anycast公网加速白名单的用户，可选值：TRUE：AnycastEIP可绑定对象为负载均衡FALSE：AnycastEIP可绑定对象为云服务器、NAT网关、高可用虚拟IP等默认值：FALSE。 */
  ApplicableForCLB?: boolean;
  /** 需要关联的标签列表。 */
  Tags?: Tag[];
  /** BGP带宽包唯一ID参数。设定该参数且InternetChargeType为BANDWIDTH_PACKAGE，则表示创建的EIP加入该BGP带宽包并采用带宽包计费 */
  BandwidthPackageId?: string;
  /** EIP名称，用于申请EIP时用户自定义该EIP的个性化名称，默认值：未命名 */
  AddressName?: string;
  /** 网络出口，默认是：center_egress1 */
  Egress?: string;
}

declare interface AllocateAddressesResponse {
  /** 申请到的 EIP 的唯一 ID 列表。 */
  AddressSet: string[];
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AllocateIp6AddressesBandwidthRequest {
  /** 需要开通公网访问能力的IPV6地址 */
  Ip6Addresses: string[];
  /** 带宽，单位Mbps。默认是1Mbps */
  InternetMaxBandwidthOut?: number;
  /** 网络计费模式。IPV6当前对标准账户类型支持"TRAFFIC_POSTPAID_BY_HOUR"，对传统账户类型支持"BANDWIDTH_PACKAGE"。默认网络计费模式是"TRAFFIC_POSTPAID_BY_HOUR"。 */
  InternetChargeType?: string;
  /** 带宽包id，上移账号，申请带宽包计费模式的ipv6地址需要传入. */
  BandwidthPackageId?: string;
}

declare interface AllocateIp6AddressesBandwidthResponse {
  /** 弹性公网 IPV6 的唯一 ID 列表。 */
  AddressSet?: string[];
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssignIpv6AddressesRequest {
  /** 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。 */
  NetworkInterfaceId: string;
  /** 指定的`IPv6`地址列表，单次最多指定10个。与入参`Ipv6AddressCount`合并计算配额。与Ipv6AddressCount必填一个。 */
  Ipv6Addresses?: Ipv6Address[];
  /** 自动分配`IPv6`地址个数，内网IP地址个数总和不能超过配数。与入参`Ipv6Addresses`合并计算配额。与Ipv6Addresses必填一个。 */
  Ipv6AddressCount?: number;
}

declare interface AssignIpv6AddressesResponse {
  /** 分配给弹性网卡的`IPv6`地址列表。 */
  Ipv6AddressSet: Ipv6Address[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssignIpv6CidrBlockRequest {
  /** `VPC`实例`ID`，形如：`vpc-f49l6u0z`。 */
  VpcId: string;
}

declare interface AssignIpv6CidrBlockResponse {
  /** 分配的 `IPv6` 网段。形如：`3402:4e00:20:1000::/56` */
  Ipv6CidrBlock?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssignIpv6SubnetCidrBlockRequest {
  /** 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** 分配 `IPv6` 子网段列表。 */
  Ipv6SubnetCidrBlocks: Ipv6SubnetCidrBlock[];
}

declare interface AssignIpv6SubnetCidrBlockResponse {
  /** 分配 `IPv6` 子网段列表。 */
  Ipv6SubnetCidrBlockSet?: Ipv6SubnetCidrBlock[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssignPrivateIpAddressesRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。 */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  /** 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数，详见弹性网卡使用限制。 */
  SecondaryPrivateIpAddressCount?: number;
}

declare interface AssignPrivateIpAddressesResponse {
  /** 内网IP详细信息。 */
  PrivateIpAddressSet: PrivateIpAddressSpecification[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateAddressRequest {
  /** 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。 */
  AddressId: string;
  /** 要绑定的实例 ID。实例 ID 形如：`ins-11112222`、`lb-11112222`。可通过登录[控制台](https://console.cloud.tencent.com/cvm)查询，也可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。 */
  InstanceId?: string;
  /** 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：`eni-11112222`。`NetworkInterfaceId` 与 `InstanceId` 不可同时指定。弹性网卡 ID 可通过登录[控制台](https://console.cloud.tencent.com/vpc/eni)查询，也可通过[DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/15817)接口返回值中的`networkInterfaceId`获取。 */
  NetworkInterfaceId?: string;
  /** 要绑定的内网 IP。如果指定了 `NetworkInterfaceId` 则也必须指定 `PrivateIpAddress` ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 `PrivateIpAddress` 是指定的 `NetworkInterfaceId` 上的一个内网 IP。指定弹性网卡的内网 IP 可通过登录[控制台](https://console.cloud.tencent.com/vpc/eni)查询，也可通过[DescribeNetworkInterfaces](https://cloud.tencent.com/document/api/215/15817)接口返回值中的`privateIpAddress`获取。 */
  PrivateIpAddress?: string;
  /** 指定绑定时是否设置直通。弹性公网 IP 直通请参见 [EIP 直通](https://cloud.tencent.com/document/product/1199/41709)。取值：True、False，默认值为 False。当绑定 CVM 实例、EKS 弹性集群时，可设定此参数为 True。此参数目前处于内测中，如需使用，请提交 [工单申请](https://console.cloud.tencent.com/workorder/category?level1_id=6&level2_id=163&source=0&data_title=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1%20CLB&level3_id=1071&queue=96&scene_code=34639&step=2)。 */
  EipDirectConnection?: boolean;
}

declare interface AssociateAddressResponse {
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateDhcpIpWithAddressIpRequest {
  /** `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。必须是没有绑定`EIP`的`DhcpIp` */
  DhcpIpId: string;
  /** 弹性公网`IP`。必须是没有绑定`DhcpIp`的`EIP` */
  AddressIp: string;
}

declare interface AssociateDhcpIpWithAddressIpResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateDirectConnectGatewayNatGatewayRequest {
  /** 专线网关ID。 */
  VpcId: string;
  /** NAT网关ID。 */
  NatGatewayId: string;
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  DirectConnectGatewayId: string;
}

declare interface AssociateDirectConnectGatewayNatGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateNatGatewayAddressRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** 需要申请的弹性IP个数，系统会按您的要求生产N个弹性IP, 其中AddressCount和PublicAddresses至少传递一个。 */
  AddressCount?: number;
  /** 绑定NAT网关的弹性IP数组，其中AddressCount和PublicAddresses至少传递一个。 */
  PublicIpAddresses?: string[];
  /** 弹性IP可用区，自动分配弹性IP时传递。 */
  Zone?: string;
  /** 绑定NAT网关的弹性IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。 */
  StockPublicIpAddressesBandwidthOut?: number;
  /** 需要申请公网IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。 */
  PublicIpAddressesBandwidthOut?: number;
  /** 公网IP是否强制与NAT网关来自同可用区，true表示需要与NAT网关同可用区；false表示可与NAT网关不是同一个可用区。此参数只有当参数Zone存在时才能生效。 */
  PublicIpFromSameZone?: boolean;
}

declare interface AssociateNatGatewayAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateNetworkAclSubnetsRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 子网实例ID数组。例如：[subnet-12345678] */
  SubnetIds: string[];
}

declare interface AssociateNetworkAclSubnetsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AssociateNetworkInterfaceSecurityGroupsRequest {
  /** 弹性网卡实例ID。形如：eni-pxir56ns。每次请求的实例的上限为100。 */
  NetworkInterfaceIds: string[];
  /** 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。 */
  SecurityGroupIds: string[];
}

declare interface AssociateNetworkInterfaceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AttachCcnInstancesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 关联网络实例列表 */
  Instances: CcnInstance[];
  /** CCN所属UIN（根账号），默认当前账号所属UIN */
  CcnUin?: string;
}

declare interface AttachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AttachClassicLinkVpcRequest {
  /** VPC实例ID */
  VpcId: string;
  /** CVM实例ID */
  InstanceIds: string[];
}

declare interface AttachClassicLinkVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AttachNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** CVM实例ID。形如：ins-r8hr2upy。 */
  InstanceId: string;
  /** 网卡的挂载类型：0 标准型，1扩展型，默认值0。 */
  AttachType?: number;
}

declare interface AttachNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface AuditCrossBorderComplianceRequest {
  /** 服务商, 可选值：`UNICOM`。 */
  ServiceProvider: string;
  /** 表单唯一`ID`。 */
  ComplianceId: number;
  /** 通过：`APPROVED `，拒绝：`DENY`。 */
  AuditBehavior: string;
}

declare interface AuditCrossBorderComplianceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckAssistantCidrRequest {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5` */
  VpcId: string;
  /** 待添加的负载CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。入参NewCidrBlocks和OldCidrBlocks至少需要其一。 */
  NewCidrBlocks?: string[];
  /** 待删除的负载CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。入参NewCidrBlocks和OldCidrBlocks至少需要其一。 */
  OldCidrBlocks?: string[];
}

declare interface CheckAssistantCidrResponse {
  /** 冲突资源信息数组。 */
  ConflictSourceSet: ConflictSource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckDefaultSubnetRequest {
  /** 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。 */
  Zone?: string;
}

declare interface CheckDefaultSubnetResponse {
  /** 检查结果。true为可以创建默认子网，false为不可以创建默认子网。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CheckNetDetectStateRequest {
  /** 探测目的IPv4地址数组，最多两个。 */
  DetectDestinationIp: string[];
  /** 下一跳类型，目前我们支持的类型有：VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；NAT：NAT网关；NORMAL_CVM：普通云服务器； */
  NextHopType: string;
  /** 下一跳目的网关，取值与“下一跳类型”相关：下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；下一跳类型为NAT，取值Nat网关，形如：nat-12345678；下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12； */
  NextHopDestination: string;
  /** 网络探测实例ID。形如：netd-12345678。该参数与（VpcId，SubnetId，NetDetectName），至少要有一个。当NetDetectId存在时，使用NetDetectId。 */
  NetDetectId?: string;
  /** `VPC`实例`ID`。形如：`vpc-12345678`。该参数与（SubnetId，NetDetectName）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。 */
  VpcId?: string;
  /** 子网实例ID。形如：subnet-12345678。该参数与（VpcId，NetDetectName）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。 */
  SubnetId?: string;
  /** 网络探测名称，最大长度不能超过60个字节。该参数与（VpcId，SubnetId）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。 */
  NetDetectName?: string;
}

declare interface CheckNetDetectStateResponse {
  /** 网络探测验证结果对象数组。 */
  NetDetectIpStateSet: NetDetectIpState[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CloneSecurityGroupRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组名称，可任意命名，但不得超过60个字符。未提供参数时，克隆后的安全组名称和SecurityGroupId对应的安全组名称相同。 */
  GroupName?: string;
  /** 安全组备注，最多100个字符。未提供参数时，克隆后的安全组备注和SecurityGroupId对应的安全组备注相同。 */
  GroupDescription?: string;
  /** 项目ID，默认0。可在qcloud控制台项目管理页面查询到。 */
  ProjectId?: string;
  /** 源Region,跨地域克隆安全组时，需要传入源安全组所属地域信息，例如：克隆广州的安全组到上海，则这里需要传入广州安全的地域信息：ap-guangzhou。 */
  RemoteRegion?: string;
}

declare interface CloneSecurityGroupResponse {
  /** 安全组对象。 */
  SecurityGroup?: SecurityGroup | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAddressTemplateGroupRequest {
  /** IP地址模板集合名称。 */
  AddressTemplateGroupName: string;
  /** IP地址模板实例ID，例如：ipm-mdunqeb6。 */
  AddressTemplateIds: string[];
}

declare interface CreateAddressTemplateGroupResponse {
  /** IP地址模板集合对象。 */
  AddressTemplateGroup: AddressTemplateGroup;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAddressTemplateRequest {
  /** IP地址模板名称。 */
  AddressTemplateName: string;
  /** 地址信息，支持 IP、CIDR、IP 范围。Addresses与AddressesExtra必填其一。 */
  Addresses?: string[];
  /** 地址信息，支持携带备注，支持 IP、CIDR、IP 范围。Addresses与AddressesExtra必填其一。 */
  AddressesExtra?: AddressInfo[];
}

declare interface CreateAddressTemplateResponse {
  /** IP地址模板对象。 */
  AddressTemplate: AddressTemplate;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAndAttachNetworkInterfaceRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** 弹性网卡名称，最大长度不能超过60个字节。 */
  NetworkInterfaceName: string;
  /** 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。 */
  SubnetId: string;
  /** 云服务器实例ID。 */
  InstanceId: string;
  /** 指定的内网IP信息，单次最多指定10个。 */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  /** 新申请的内网IP地址个数，内网IP地址个数总和不能超过配数。 */
  SecondaryPrivateIpAddressCount?: number;
  /** 指定绑定的安全组，例如：['sg-1dd51d']。 */
  SecurityGroupIds?: string[];
  /** 弹性网卡描述，可任意命名，但不得超过60个字符。 */
  NetworkInterfaceDescription?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** 绑定类型：0 标准型 1 扩展型。 */
  AttachType?: number;
}

declare interface CreateAndAttachNetworkInterfaceResponse {
  /** 弹性网卡实例。 */
  NetworkInterface: NetworkInterface;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateAssistantCidrRequest {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5` */
  VpcId: string;
  /** CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"] */
  CidrBlocks: string[];
}

declare interface CreateAssistantCidrResponse {
  /** 辅助CIDR数组。 */
  AssistantCidrSet: AssistantCidr[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateBandwidthPackageRequest {
  /** 带宽包类型, 默认值: BGP, 可选值:BGP: 普通BGP共享带宽包HIGH_QUALITY_BGP: 精品BGP共享带宽包 */
  NetworkType?: string;
  /** 带宽包计费类型, 默认为: TOP5_POSTPAID_BY_MONTH, 可选值:TOP5_POSTPAID_BY_MONTH: 按月后付费TOP5计费PERCENT95_POSTPAID_BY_MONTH: 按月后付费月95计费FIXED_PREPAID_BY_MONTH: 包月预付费计费 */
  ChargeType?: string;
  /** 带宽包名称。 */
  BandwidthPackageName?: string;
  /** 带宽包数量(传统账户类型只能填1), 标准账户类型取值范围为1~20。 */
  BandwidthPackageCount?: number;
  /** 带宽包限速大小。单位：Mbps，-1表示不限速。该功能当前内测中，暂不对外开放。 */
  InternetMaxBandwidth?: number;
  /** 需要关联的标签列表。 */
  Tags?: Tag[];
  /** 带宽包协议类型。当前支持'ipv4'和'ipv6'协议带宽包，默认值是'ipv4'。 */
  Protocol?: string;
}

declare interface CreateBandwidthPackageResponse {
  /** 带宽包唯一ID。 */
  BandwidthPackageId: string;
  /** 带宽包唯一ID列表(申请数量大于1时有效)。 */
  BandwidthPackageIds: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCcnRequest {
  /** CCN名称，最大长度不能超过60个字节。 */
  CcnName: string;
  /** CCN描述信息，最大长度不能超过100个字节。 */
  CcnDescription?: string;
  /** CCN服务质量，'PT'：白金，'AU'：金，'AG'：银，默认为‘AU’。 */
  QosLevel?: string;
  /** 计费模式，PREPAID：表示预付费，即包年包月，POSTPAID：表示后付费，即按量计费。默认：POSTPAID。 */
  InstanceChargeType?: string;
  /** 限速类型，OUTER_REGION_LIMIT表示地域出口限速，INTER_REGION_LIMIT为地域间限速，默认为OUTER_REGION_LIMIT。预付费模式仅支持地域间限速，后付费模式支持地域间限速和地域出口限速。 */
  BandwidthLimitType?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
}

declare interface CreateCcnResponse {
  /** 云联网（CCN）对象。 */
  Ccn: CCN;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateCustomerGatewayRequest {
  /** 对端网关名称，可任意命名，但不得超过60个字符。 */
  CustomerGatewayName: string;
  /** 对端网关公网IP。 */
  IpAddress: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
}

declare interface CreateCustomerGatewayResponse {
  /** 对端网关对象 */
  CustomerGateway: CustomerGateway;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDefaultSecurityGroupRequest {
  /** 项目ID，默认0。可在qcloud控制台项目管理页面查询到。 */
  ProjectId?: string;
}

declare interface CreateDefaultSecurityGroupResponse {
  /** 安全组对象。 */
  SecurityGroup?: SecurityGroup;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDefaultVpcRequest {
  /** 子网所在的可用区，该参数可通过[DescribeZones](https://cloud.tencent.com/document/product/213/15707)接口获取，例如ap-guangzhou-1，不指定时将随机选择可用区。 */
  Zone?: string;
  /** 是否强制返回默认VPC。 */
  Force?: boolean;
}

declare interface CreateDefaultVpcResponse {
  /** 默认VPC和子网ID */
  Vpc?: DefaultVpcSubnet;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDhcpIpRequest {
  /** 私有网络`ID`。 */
  VpcId: string;
  /** 子网`ID`。 */
  SubnetId: string;
  /** `DhcpIp`名称。 */
  DhcpIpName: string;
  /** 新申请的内网IP地址个数。总数不能超过64个。 */
  SecondaryPrivateIpAddressCount?: number;
}

declare interface CreateDhcpIpResponse {
  /** 新创建的`DhcpIp`信息 */
  DhcpIpSet: DhcpIp[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDirectConnectGatewayCcnRoutesRequest {
  /** 专线网关ID，形如：dcg-prpqlmg1 */
  DirectConnectGatewayId: string;
  /** 需要连通的IDC网段列表 */
  Routes: DirectConnectGatewayCcnRoute[];
}

declare interface CreateDirectConnectGatewayCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateDirectConnectGatewayRequest {
  /** 专线网关名称 */
  DirectConnectGatewayName: string;
  /** 关联网络类型，可选值：VPC - 私有网络CCN - 云联网 */
  NetworkType: string;
  /** NetworkType 为 VPC 时，这里传值为私有网络实例IDNetworkType 为 CCN 时，这里传值为云联网实例ID */
  NetworkInstanceId: string;
  /** 网关类型，可选值：NORMAL - （默认）标准型，注：云联网只支持标准型NAT - NAT型NAT类型支持网络地址转换配置，类型确定后不能修改；一个私有网络可以创建一个NAT类型的专线网关和一个非NAT类型的专线网关 */
  GatewayType?: string;
  /** 云联网路由发布模式，可选值：`standard`（标准模式）、`exquisite`（精细模式）。只有云联网类型专线网关才支持`ModeType`。 */
  ModeType?: string;
  /** 专线网关可用区 */
  Zone?: string;
  /** 专线网关高可用区容灾组ID */
  HaZoneGroupId?: string;
}

declare interface CreateDirectConnectGatewayResponse {
  /** 专线网关对象。 */
  DirectConnectGateway: DirectConnectGateway;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateFlowLogRequest {
  /** 流日志实例名字 */
  FlowLogName: string;
  /** 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE|CCN|NAT|DCG */
  ResourceType: string;
  /** 资源唯一ID */
  ResourceId: string;
  /** 流日志采集类型，ACCEPT|REJECT|ALL */
  TrafficType: string;
  /** 私用网络ID或者统一ID，建议使用统一ID，当ResourceType为CCN时不填，其他类型必填。 */
  VpcId?: string;
  /** 流日志实例描述 */
  FlowLogDescription?: string;
  /** 流日志存储ID */
  CloudLogId?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** 消费端类型：cls、ckafka */
  StorageType?: string;
  /** 流日志消费端信息，当消费端类型为ckafka时，必填。 */
  FlowLogStorage?: FlowLogStorage;
  /** 流日志存储ID对应的地域，不传递默认为本地域。 */
  CloudLogRegion?: string;
}

declare interface CreateFlowLogResponse {
  /** 创建的流日志信息 */
  FlowLog: FlowLog[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateHaVipRequest {
  /** `HAVIP`所在私有网络`ID`。 */
  VpcId: string;
  /** `HAVIP`所在子网`ID`。 */
  SubnetId: string;
  /** `HAVIP`名称。 */
  HaVipName: string;
  /** 指定虚拟IP地址，必须在`VPC`网段内且未被占用。不指定则自动分配。 */
  Vip?: string;
}

declare interface CreateHaVipResponse {
  /** `HAVIP`对象。 */
  HaVip: HaVip;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateIp6TranslatorsRequest {
  /** 转换实例名称 */
  Ip6TranslatorName?: string;
  /** 创建转换实例数量，默认是1个 */
  Ip6TranslatorCount?: number;
  /** 转换实例运营商属性，可取"CMCC","CTCC","CUCC","BGP" */
  Ip6InternetServiceProvider?: string;
}

declare interface CreateIp6TranslatorsResponse {
  /** 转换实例的唯一ID数组，形如"ip6-xxxxxxxx" */
  Ip6TranslatorSet: string[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateLocalGatewayRequest {
  /** 本地网关名称 */
  LocalGatewayName: string;
  /** VPC实例ID */
  VpcId: string;
  /** CDC实例ID */
  CdcId: string;
}

declare interface CreateLocalGatewayResponse {
  /** 本地网关信息 */
  LocalGateway: LocalGateway;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** NAT网关的端口转换规则。 */
  DestinationIpPortTranslationNatRules: DestinationIpPortTranslationNatRule[];
}

declare interface CreateNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNatGatewayRequest {
  /** NAT网关名称 */
  NatGatewayName: string;
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** NAT网关最大外网出带宽(单位:Mbps)，支持的参数值：`20, 50, 100, 200, 500, 1000, 2000, 5000`，默认: `100Mbps`。 */
  InternetMaxBandwidthOut?: number;
  /** NAT网关并发连接上限，支持参数值：`1000000、3000000、10000000`，默认值为`100000`。 */
  MaxConcurrentConnection?: number;
  /** 需要申请的弹性IP个数，系统会按您的要求生产N个弹性IP，其中AddressCount和PublicAddresses至少传递一个。 */
  AddressCount?: number;
  /** 绑定NAT网关的弹性IP数组，其中AddressCount和PublicAddresses至少传递一个。 */
  PublicIpAddresses?: string[];
  /** 可用区，形如：`ap-guangzhou-1`。 */
  Zone?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** NAT网关所属子网 */
  SubnetId?: string;
  /** 绑定NAT网关的弹性IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。 */
  StockPublicIpAddressesBandwidthOut?: number;
  /** 需要申请公网IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。 */
  PublicIpAddressesBandwidthOut?: number;
  /** 公网IP是否强制与NAT网关来自同可用区，true表示需要与NAT网关同可用区；false表示可与NAT网关不是同一个可用区。此参数只有当参数Zone存在时才能生效。 */
  PublicIpFromSameZone?: boolean;
}

declare interface CreateNatGatewayResponse {
  /** NAT网关对象数组。 */
  NatGatewaySet: NatGateway[];
  /** 符合条件的 NAT网关对象数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNatGatewaySourceIpTranslationNatRuleRequest {
  /** NAT网关的ID，形如："nat-df45454" */
  NatGatewayId: string;
  /** NAT网关的SNAT转换规则 */
  SourceIpTranslationNatRules: SourceIpTranslationNatRule[];
}

declare interface CreateNatGatewaySourceIpTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNetDetectRequest {
  /** `VPC`实例`ID`。形如：`vpc-12345678` */
  VpcId: string;
  /** 子网实例ID。形如：subnet-12345678。 */
  SubnetId: string;
  /** 网络探测名称，最大长度不能超过60个字节。 */
  NetDetectName: string;
  /** 探测目的IPv4地址数组。最多两个。 */
  DetectDestinationIp: string[];
  /** 下一跳类型，目前我们支持的类型有：VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；NAT：NAT网关；NORMAL_CVM：普通云服务器；CCN：云联网网关； */
  NextHopType?: string;
  /** 下一跳目的网关，取值与“下一跳类型”相关：下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；下一跳类型为NAT，取值Nat网关，形如：nat-12345678；下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；下一跳类型为CCN，取值云联网ID，形如：ccn-12345678； */
  NextHopDestination?: string;
  /** 网络探测描述。 */
  NetDetectDescription?: string;
}

declare interface CreateNetDetectResponse {
  /** 网络探测（NetDetect）对象。 */
  NetDetect: NetDetect;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNetworkAclQuintupleEntriesRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络五元组ACL规则集。 */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntries;
}

declare interface CreateNetworkAclQuintupleEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNetworkAclRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** 网络ACL名称，最大长度不能超过60个字节。 */
  NetworkAclName: string;
  /** 网络ACL类型，三元组(TRIPLE)或五元组(QUINTUPLE) */
  NetworkAclType?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateNetworkAclResponse {
  /** 网络ACL实例。 */
  NetworkAcl: NetworkAcl;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateNetworkInterfaceRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** 弹性网卡名称，最大长度不能超过60个字节。 */
  NetworkInterfaceName: string;
  /** 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。 */
  SubnetId: string;
  /** 弹性网卡描述，可任意命名，但不得超过60个字符。 */
  NetworkInterfaceDescription?: string;
  /** 新申请的内网IP地址个数，内网IP地址个数总和不能超过配数。 */
  SecondaryPrivateIpAddressCount?: number;
  /** 指定绑定的安全组，例如：['sg-1dd51d']。 */
  SecurityGroupIds?: string[];
  /** 指定的内网IP信息，单次最多指定10个。 */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** 网卡trunking模式设置，Enable-开启，Disable--关闭，默认关闭。 */
  TrunkingFlag?: string;
}

declare interface CreateNetworkInterfaceResponse {
  /** 弹性网卡实例。 */
  NetworkInterface: NetworkInterface;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRouteTableRequest {
  /** 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** 路由表名称，最大长度不能超过60个字节。 */
  RouteTableName: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
}

declare interface CreateRouteTableResponse {
  /** 路由表对象。 */
  RouteTable?: RouteTable;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateRoutesRequest {
  /** 路由表实例ID。 */
  RouteTableId: string;
  /** 路由策略对象。 */
  Routes: Route[];
}

declare interface CreateRoutesResponse {
  /** 新增的实例个数。 */
  TotalCount: number;
  /** 路由表对象。 */
  RouteTableSet: RouteTable[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupPoliciesRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组规则集合。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
}

declare interface CreateSecurityGroupPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupRequest {
  /** 安全组名称，可任意命名，但不得超过60个字符。 */
  GroupName: string;
  /** 安全组备注，最多100个字符。 */
  GroupDescription: string;
  /** 项目ID，默认0。可在qcloud控制台项目管理页面查询到。 */
  ProjectId?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
}

declare interface CreateSecurityGroupResponse {
  /** 安全组对象。 */
  SecurityGroup: SecurityGroup;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupWithPoliciesRequest {
  /** 安全组名称，可任意命名，但不得超过60个字符。 */
  GroupName: string;
  /** 安全组备注，最多100个字符。 */
  GroupDescription: string;
  /** 项目ID，默认0。可在qcloud控制台项目管理页面查询到。 */
  ProjectId?: string;
  /** 安全组规则集合。 */
  SecurityGroupPolicySet?: SecurityGroupPolicySet;
}

declare interface CreateSecurityGroupWithPoliciesResponse {
  /** 安全组对象。 */
  SecurityGroup?: SecurityGroup;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateServiceTemplateGroupRequest {
  /** 协议端口模板集合名称 */
  ServiceTemplateGroupName: string;
  /** 协议端口模板实例ID，例如：ppm-4dw6agho。 */
  ServiceTemplateIds: string[];
}

declare interface CreateServiceTemplateGroupResponse {
  /** 协议端口模板集合对象。 */
  ServiceTemplateGroup?: ServiceTemplateGroup;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateServiceTemplateRequest {
  /** 协议端口模板名称 */
  ServiceTemplateName: string;
  /** 支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。Services与ServicesExtra必填其一。 */
  Services?: string[];
  /** 支持添加备注，单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。Services与ServicesExtra必填其一。 */
  ServicesExtra?: ServicesInfo[];
}

declare interface CreateServiceTemplateResponse {
  /** 协议端口模板对象。 */
  ServiceTemplate: ServiceTemplate;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSubnetRequest {
  /** 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** 子网名称，最大长度不能超过60个字节。 */
  SubnetName: string;
  /** 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠。 */
  CidrBlock: string;
  /** 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。 */
  Zone: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** CDC实例ID。 */
  CdcId?: string;
}

declare interface CreateSubnetResponse {
  /** 子网对象。 */
  Subnet: Subnet;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateSubnetsRequest {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5` */
  VpcId: string;
  /** 子网对象列表。 */
  Subnets: SubnetInput[];
  /** 指定绑定的标签列表，注意这里的标签集合为列表中所有子网对象所共享，不能为每个子网对象单独指定标签，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** 需要增加到的CDC实例ID。 */
  CdcId?: string;
}

declare interface CreateSubnetsResponse {
  /** 新创建的子网列表。 */
  SubnetSet: Subnet[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpcEndPointRequest {
  /** VPC实例ID。 */
  VpcId: string;
  /** 子网实例ID。 */
  SubnetId: string;
  /** 终端节点名称。 */
  EndPointName: string;
  /** 终端节点服务ID。 */
  EndPointServiceId: string;
  /** 终端节点VIP，可以指定IP申请。 */
  EndPointVip?: string;
  /** 安全组ID。 */
  SecurityGroupId?: string;
}

declare interface CreateVpcEndPointResponse {
  /** 终端节点对象详细信息。 */
  EndPoint: EndPoint;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpcEndPointServiceRequest {
  /** VPC实例ID。 */
  VpcId: string;
  /** 终端节点服务名称。 */
  EndPointServiceName: string;
  /** 是否自动接受。 */
  AutoAcceptFlag: boolean;
  /** 后端服务ID，比如lb-xxx。 */
  ServiceInstanceId: string;
  /** ~~是否是PassService类型。该字段已废弃，请不要使用该字段。~~ */
  IsPassService?: boolean;
  /** 挂载的PAAS服务类型，CLB,CDB,CRS，不填默认挂载为CLB。 */
  ServiceType?: string;
}

declare interface CreateVpcEndPointServiceResponse {
  /** 终端节点服务对象详细信息。 */
  EndPointService: EndPointService;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpcEndPointServiceWhiteListRequest {
  /** UIN。 */
  UserUin: string;
  /** 终端节点服务ID。 */
  EndPointServiceId: string;
  /** 白名单描述。 */
  Description?: string;
}

declare interface CreateVpcEndPointServiceWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpcRequest {
  /** vpc名称，最大长度不能超过60个字节。 */
  VpcName: string;
  /** vpc的cidr，仅能在10.0.0.0/12，172.16.0.0/12，192.168.0.0/16这三个内网网段内。 */
  CidrBlock: string;
  /** 是否开启组播。true: 开启, false: 不开启。 */
  EnableMulticast?: string;
  /** DNS地址，最多支持4个。 */
  DnsServers?: string[];
  /** DHCP使用的域名。 */
  DomainName?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateVpcResponse {
  /** Vpc对象。 */
  Vpc: VpcInfo;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpnConnectionRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 对端网关ID，例如：cgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。 */
  CustomerGatewayId: string;
  /** 通道名称，可任意命名，但不得超过60个字符。 */
  VpnConnectionName: string;
  /** 预共享密钥。 */
  PreShareKey: string;
  /** VPC实例ID。可通过[DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)接口返回值中的VpcId获取。CCN VPN 形的通道 可以不传VPCID */
  VpcId?: string;
  /** SPD策略组，例如：{"10.0.0.5/24":["172.123.10.5/16"]}，10.0.0.5/24是vpc内网段172.123.10.5/16是IDC网段。用户指定VPC内哪些网段可以和您IDC中哪些网段通信。 */
  SecurityPolicyDatabases?: SecurityPolicyDatabase[];
  /** IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议 */
  IKEOptionsSpecification?: IKEOptionsSpecification;
  /** IPSec配置，腾讯云提供IPSec安全会话设置 */
  IPSECOptionsSpecification?: IPSECOptionsSpecification;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** 是否支持隧道内健康检查 */
  EnableHealthCheck?: boolean;
  /** 健康检查本端地址 */
  HealthCheckLocalIp?: string;
  /** 健康检查对端地址 */
  HealthCheckRemoteIp?: string;
  /** 通道类型, 例如:["STATIC", "StaticRoute", "Policy"] */
  RouteType?: string;
  /** 协商类型，默认为active（主动协商）。可选值：active（主动协商），passive（被动协商），flowTrigger（流量协商） */
  NegotiationType?: string;
  /** DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启） */
  DpdEnable?: number;
  /** DPD超时时间。即探测确认对端不存在需要的时间。dpdEnable为1（开启）时有效。默认30，单位为秒 */
  DpdTimeout?: string;
  /** DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试） */
  DpdAction?: string;
}

declare interface CreateVpnConnectionResponse {
  /** 通道实例对象。 */
  VpnConnection: VpnConnection;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpnGatewayRequest {
  /** VPC实例ID。可通过[DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)接口返回值中的VpcId获取。 */
  VpcId: string;
  /** VPN网关名称，最大长度不能超过60个字节。 */
  VpnGatewayName: string;
  /** 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100；单位：Mbps */
  InternetMaxBandwidthOut: number;
  /** VPN网关计费模式，PREPAID：表示预付费，即包年包月，POSTPAID_BY_HOUR：表示后付费，即按量计费。默认：POSTPAID_BY_HOUR，如果指定预付费模式，参数InstanceChargePrepaid必填。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 可用区，如：ap-guangzhou-2。 */
  Zone?: string;
  /** VPN网关类型。值“CCN”云联网类型VPN网关，值SSL为SSL-VPN */
  Type?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** CDC实例ID */
  CdcId?: string;
  /** SSL-VPN 最大CLIENT 连接数。可选 [5, 10, 20, 50, 100]。仅SSL-VPN 需要选这个参数。 */
  MaxConnection?: number;
}

declare interface CreateVpnGatewayResponse {
  /** VPN网关对象 */
  VpnGateway: VpnGateway;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpnGatewayRoutesRequest {
  /** VPN网关的ID */
  VpnGatewayId: string;
  /** VPN网关目的路由列表 */
  Routes: VpnGatewayRoute[];
}

declare interface CreateVpnGatewayRoutesResponse {
  /** VPN网关目的路由 */
  Routes: VpnGatewayRoute[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpnGatewaySslClientRequest {
  /** SSL-VPN-SERVER 实例ID。 */
  SslVpnServerId: string;
  /** name */
  SslVpnClientName: string;
}

declare interface CreateVpnGatewaySslClientResponse {
  /** 异步任务ID。 */
  TaskId: number;
  /** SSL-VPN client 唯一ID */
  SslVpnClientId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface CreateVpnGatewaySslServerRequest {
  /** VPN实例ID */
  VpnGatewayId: string;
  /** SSL_VPN_SERVER 实例名 */
  SslVpnServerName: string;
  /** 本端地址网段 */
  LocalAddress: string[];
  /** 客户端地址网段 */
  RemoteAddress: string;
  /** SSL VPN服务端监听协议。当前仅支持 UDP。默认UDP */
  SslVpnProtocol?: string;
  /** SSL VPN服务端监听协议端口。默认1194。 */
  SslVpnPort?: number;
  /** 认证算法。可选 'SHA1', 'MD5', 'NONE'。默认NONE */
  IntegrityAlgorithm?: string;
  /** 加密算法。可选 'AES-128-CBC', 'AES-192-CBC', 'AES-256-CBC', 'NONE'。默认NONE */
  EncryptAlgorithm?: string;
  /** 是否支持压缩。当前仅支持不支持压缩。默认False */
  Compress?: boolean;
  /** 是否开启SSO认证 */
  SsoEnabled?: boolean;
  /** 是否开启策略访问控制 */
  AccessPolicyEnabled?: boolean;
  /** SAML-DATA */
  SamlData?: string;
}

declare interface CreateVpnGatewaySslServerResponse {
  /** 创建SSL-VPN server 异步任务ID */
  TaskId: number;
  /** SSL-VPN server 唯一ID */
  SslVpnServerId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAddressTemplateGroupRequest {
  /** IP地址模板集合实例ID，例如：ipmg-90cex8mq。 */
  AddressTemplateGroupId: string;
}

declare interface DeleteAddressTemplateGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAddressTemplateRequest {
  /** IP地址模板实例ID，例如：ipm-09o5m8kc。 */
  AddressTemplateId: string;
}

declare interface DeleteAddressTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteAssistantCidrRequest {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5` */
  VpcId: string;
  /** CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"] */
  CidrBlocks: string[];
}

declare interface DeleteAssistantCidrResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteBandwidthPackageRequest {
  /** 待删除带宽包唯一ID */
  BandwidthPackageId: string;
}

declare interface DeleteBandwidthPackageResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCcnRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
}

declare interface DeleteCcnResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteCustomerGatewayRequest {
  /** 对端网关ID，例如：cgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。 */
  CustomerGatewayId: string;
}

declare interface DeleteCustomerGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDhcpIpRequest {
  /** `DhcpIp`的`ID`，是`DhcpIp`的唯一标识。 */
  DhcpIpId: string;
}

declare interface DeleteDhcpIpResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDirectConnectGatewayCcnRoutesRequest {
  /** 专线网关ID，形如：dcg-prpqlmg1 */
  DirectConnectGatewayId: string;
  /** 路由ID。形如：ccnr-f49l6u0z。 */
  RouteIds: string[];
}

declare interface DeleteDirectConnectGatewayCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteDirectConnectGatewayRequest {
  /** 专线网关唯一`ID`，形如：`dcg-9o233uri`。 */
  DirectConnectGatewayId: string;
}

declare interface DeleteDirectConnectGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteFlowLogRequest {
  /** 流日志唯一ID */
  FlowLogId: string;
  /** 私用网络ID或者统一ID，建议使用统一ID，删除云联网流日志时，可不填，其他流日志类型必填。 */
  VpcId?: string;
}

declare interface DeleteFlowLogResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteHaVipRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。 */
  HaVipId: string;
}

declare interface DeleteHaVipResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteIp6TranslatorsRequest {
  /** 待释放的IPV6转换实例的唯一ID，形如‘ip6-xxxxxxxx’ */
  Ip6TranslatorIds: string[];
}

declare interface DeleteIp6TranslatorsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteLocalGatewayRequest {
  /** 本地网关实例ID */
  LocalGatewayId: string;
  /** CDC实例ID */
  CdcId: string;
  /** VPC实例ID */
  VpcId?: string;
}

declare interface DeleteLocalGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** NAT网关的端口转换规则。 */
  DestinationIpPortTranslationNatRules: DestinationIpPortTranslationNatRule[];
}

declare interface DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNatGatewayRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
}

declare interface DeleteNatGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNatGatewaySourceIpTranslationNatRuleRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** NAT网关的SNAT ID列表，形如：`snat-df43254`。 */
  NatGatewaySnatIds: string[];
}

declare interface DeleteNatGatewaySourceIpTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNetDetectRequest {
  /** 网络探测实例`ID`。形如：`netd-12345678` */
  NetDetectId: string;
}

declare interface DeleteNetDetectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNetworkAclQuintupleEntriesRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络五元组ACL规则集。 */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntries;
}

declare interface DeleteNetworkAclQuintupleEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNetworkAclRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
}

declare interface DeleteNetworkAclResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
}

declare interface DeleteNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRouteTableRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
}

declare interface DeleteRouteTableResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteRoutesRequest {
  /** 路由表实例ID。 */
  RouteTableId: string;
  /** 路由策略对象，删除路由策略时，仅需使用Route的RouteId字段。 */
  Routes: Route[];
}

declare interface DeleteRoutesResponse {
  /** 已删除的路由策略详情。 */
  RouteSet?: Route[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSecurityGroupPoliciesRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组规则集合。一个请求中只能删除单个方向的一条或多条规则。支持指定索引（PolicyIndex） 匹配删除和安全组规则匹配删除两种方式，一个请求中只能使用一种匹配方式。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
}

declare interface DeleteSecurityGroupPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSecurityGroupRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
}

declare interface DeleteSecurityGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteServiceTemplateGroupRequest {
  /** 协议端口模板集合实例ID，例如：ppmg-n17uxvve。 */
  ServiceTemplateGroupId: string;
}

declare interface DeleteServiceTemplateGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteServiceTemplateRequest {
  /** 协议端口模板实例ID，例如：ppm-e6dy460g。 */
  ServiceTemplateId: string;
}

declare interface DeleteServiceTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteSubnetRequest {
  /** 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。 */
  SubnetId: string;
}

declare interface DeleteSubnetResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteTemplateMemberRequest {
  /** 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。 */
  TemplateId: string;
  /** 需要添加的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致。 */
  TemplateMember: MemberInfo[];
}

declare interface DeleteTemplateMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpcEndPointRequest {
  /** 终端节点ID。 */
  EndPointId: string;
}

declare interface DeleteVpcEndPointResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpcEndPointServiceRequest {
  /** 终端节点ID。 */
  EndPointServiceId: string;
}

declare interface DeleteVpcEndPointServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpcEndPointServiceWhiteListRequest {
  /** 用户UIN数组。 */
  UserUin: string[];
  /** 终端节点服务ID。 */
  EndPointServiceId: string;
}

declare interface DeleteVpcEndPointServiceWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpcRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
}

declare interface DeleteVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpnConnectionRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** VPN通道实例ID。形如：vpnx-f49l6u0z。 */
  VpnConnectionId: string;
}

declare interface DeleteVpnConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpnGatewayRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
}

declare interface DeleteVpnGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpnGatewayRoutesRequest {
  /** VPN网关实例ID */
  VpnGatewayId: string;
  /** 路由ID信息列表 */
  RouteIds: string[];
}

declare interface DeleteVpnGatewayRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpnGatewaySslClientRequest {
  /** SSL-VPN-CLIENT 实例ID。 */
  SslVpnClientId: string;
}

declare interface DeleteVpnGatewaySslClientResponse {
  /** 异步任务ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DeleteVpnGatewaySslServerRequest {
  /** SSL-VPN-SERVER 实例ID。 */
  SslVpnServerId: string;
}

declare interface DeleteVpnGatewaySslServerResponse {
  /** 异步任务ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAccountAttributesRequest {
}

declare interface DescribeAccountAttributesResponse {
  /** 用户账号属性对象 */
  AccountAttributeSet?: AccountAttribute[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAddressQuotaRequest {
}

declare interface DescribeAddressQuotaResponse {
  /** 账户 EIP 配额信息。 */
  QuotaSet?: Quota[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAddressTemplateGroupsRequest {
  /** 过滤条件。address-template-group-name - String - （过滤条件）IP地址模板集合名称。address-template-group-id - String - （过滤条件）IP地址模板实集合例ID，例如：ipmg-mdunqeb6。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeAddressTemplateGroupsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** IP地址模板。 */
  AddressTemplateGroupSet?: AddressTemplateGroup[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAddressTemplatesRequest {
  /** 过滤条件。address-template-name - IP地址模板名称。address-template-id - IP地址模板实例ID，例如：ipm-mdunqeb6。address-ip - IP地址。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeAddressTemplatesResponse {
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** IP地址模板。 */
  AddressTemplateSet: AddressTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAddressesRequest {
  /** 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：`eip-11112222`。参数不支持同时指定`AddressIds`和`Filters.address-id`。 */
  AddressIds?: string[];
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。详细的过滤条件如下： address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。 address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。 address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。 address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。状态包含：'CREATING'，'BINDING'，'BIND'，'UNBINDING'，'UNBIND'，'OFFLINING'，'BIND_ENI'。 instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。 private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。 network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。 is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常） address-type - String - 是否必填：否 - （过滤条件）按照 IP类型 进行过滤。可选值：'WanIP', 'EIP'，'AnycastEIP'，'HighQualityEIP'。默认值是'EIP'。 address-isp - String - 是否必填：否 - （过滤条件）按照 运营商类型 进行过滤。可选值：'BGP'，'CMCC'，'CUCC', 'CTCC' dedicated-cluster-id - String - 是否必填：否 - （过滤条件）按照 CDC 的唯一 ID 过滤。CDC 唯一 ID 形如：cluster-11112222。 tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。 tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。 tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API 中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API 中的相关小节。 */
  Limit?: number;
}

declare interface DescribeAddressesResponse {
  /** 符合条件的 EIP 数量。 */
  TotalCount: number;
  /** EIP 详细信息列表。 */
  AddressSet: Address[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeAssistantCidrRequest {
  /** `VPC`实例`ID`数组。形如：[`vpc-6v2ht8q5`] */
  VpcIds?: string[];
  /** 过滤条件，参数不支持同时指定VpcIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeAssistantCidrResponse {
  /** 符合条件的辅助CIDR数组。 */
  AssistantCidrSet: AssistantCidr[] | null;
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBandwidthPackageBillUsageRequest {
  /** 后付费共享带宽包的唯一ID */
  BandwidthPackageId: string;
}

declare interface DescribeBandwidthPackageBillUsageResponse {
  /** 当前计费用量 */
  BandwidthPackageBillBandwidthSet: BandwidthPackageBillBandwidth[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBandwidthPackageQuotaRequest {
}

declare interface DescribeBandwidthPackageQuotaResponse {
  /** 带宽包配额详细信息 */
  QuotaSet: Quota[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBandwidthPackageResourcesRequest {
  /** 标识 共享带宽包 的唯一 ID 列表。共享带宽包 唯一 ID 形如：`bwp-11112222`。 */
  BandwidthPackageId: string;
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AddressIds`和`Filters`。详细的过滤条件如下： resource-id - String - 是否必填：否 - （过滤条件）按照 共享带宽包内资源 的唯一 ID 过滤。共享带宽包内资源 唯一 ID 形如：eip-11112222。 resource-type - String - 是否必填：否 - （过滤条件）按照 共享带宽包内资源 类型过滤，目前仅支持 弹性IP 和 负载均衡 两种类型，可选值为 Address 和 LoadBalance。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeBandwidthPackageResourcesResponse {
  /** 符合条件的 共享带宽包内资源 数量。 */
  TotalCount: number;
  /** 共享带宽包内资源 详细信息列表。 */
  ResourceSet: Resource[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeBandwidthPackagesRequest {
  /** 带宽包唯一ID列表 */
  BandwidthPackageIds?: string[];
  /** 每次请求的`Filters`的上限为10。参数不支持同时指定`BandwidthPackageIds`和`Filters`。详细的过滤条件如下： bandwidth-package_id - String - 是否必填：否 - （过滤条件）按照带宽包的唯一标识ID过滤。 bandwidth-package-name - String - 是否必填：否 - （过滤条件）按照 带宽包名称过滤。不支持模糊过滤。 network-type - String - 是否必填：否 - （过滤条件）按照带宽包的类型过滤。类型包括'HIGH_QUALITY_BGP','BGP','SINGLEISP'和'ANYCAST'。 charge-type - String - 是否必填：否 - （过滤条件）按照带宽包的计费类型过滤。计费类型包括'TOP5_POSTPAID_BY_MONTH'和'PERCENT95_POSTPAID_BY_MONTH'。 resource.resource-type - String - 是否必填：否 - （过滤条件）按照带宽包资源类型过滤。资源类型包括'Address'和'LoadBalance' resource.resource-id - String - 是否必填：否 - （过滤条件）按照带宽包资源Id过滤。资源Id形如'eip-xxxx','lb-xxxx' resource.address-ip - String - 是否必填：否 - （过滤条件）按照带宽包资源Ip过滤。 tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。 tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。 tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。 */
  Filters?: Filter[];
  /** 查询带宽包偏移量 */
  Offset?: number;
  /** 查询带宽包数量限制 */
  Limit?: number;
}

declare interface DescribeBandwidthPackagesResponse {
  /** 符合条件的带宽包数量 */
  TotalCount: number;
  /** 描述带宽包详细信息 */
  BandwidthPackageSet: BandwidthPackage[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCcnAttachedInstancesRequest {
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 过滤条件：ccn-id - String -（过滤条件）CCN实例ID。instance-type - String -（过滤条件）关联实例类型。instance-region - String -（过滤条件）关联实例所属地域。instance-id - String -（过滤条件）关联实例实例ID。 */
  Filters?: Filter[];
  /** 云联网实例ID */
  CcnId?: string;
  /** 排序字段。支持：`CcnId` `InstanceType` `InstanceId` `InstanceName` `InstanceRegion` `AttachedTime` `State`。 */
  OrderField?: string;
  /** 排序方法。升序：`ASC`，倒序：`DESC`。 */
  OrderDirection?: string;
}

declare interface DescribeCcnAttachedInstancesResponse {
  /** 符合条件的对象数。 */
  TotalCount: number;
  /** 关联实例列表。 */
  InstanceSet: CcnAttachedInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCcnRegionBandwidthLimitsRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
}

declare interface DescribeCcnRegionBandwidthLimitsResponse {
  /** 云联网（CCN）各地域出带宽上限 */
  CcnRegionBandwidthLimitSet?: CcnRegionBandwidthLimit[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCcnRoutesRequest {
  /** CCN实例ID，形如：ccn-gree226l。 */
  CcnId: string;
  /** CCN路由策略唯一ID。形如：ccnr-f49l6u0z。 */
  RouteIds?: string[];
  /** 过滤条件，参数不支持同时指定RouteIds和Filters。route-id - String -（过滤条件）路由策略ID。cidr-block - String -（过滤条件）目的端。instance-type - String -（过滤条件）下一跳类型。instance-region - String -（过滤条件）下一跳所属地域。instance-id - String -（过滤条件）下一跳实例ID。route-table-id - String -（过滤条件）路由表ID列表，形如ccntr-1234edfr，可以根据路由表ID 过滤。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
}

declare interface DescribeCcnRoutesResponse {
  /** 符合条件的对象数。 */
  TotalCount: number;
  /** CCN路由策略对象。 */
  RouteSet: CcnRoute[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCcnsRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定CcnIds和Filters。 */
  CcnIds?: string[];
  /** 过滤条件，参数不支持同时指定CcnIds和Filters。ccn-id - String - （过滤条件）CCN唯一ID，形如：vpc-f49l6u0z。ccn-name - String - （过滤条件）CCN名称。ccn-description - String - （过滤条件）CCN描述。state - String - （过滤条件）实例状态， 'ISOLATED': 隔离中（欠费停服），'AVAILABLE'：运行中。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例：查询绑定了标签的CCN列表。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 排序字段。支持：`CcnId` `CcnName` `CreateTime` `State` `QosLevel` */
  OrderField?: string;
  /** 排序方法。升序：`ASC`，倒序：`DESC`。 */
  OrderDirection?: string;
}

declare interface DescribeCcnsResponse {
  /** 符合条件的对象数。 */
  TotalCount: number;
  /** CCN对象。 */
  CcnSet: CCN[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeClassicLinkInstancesRequest {
  /** 过滤条件。vpc-id - String - （过滤条件）VPC实例ID。vm-ip - String - （过滤条件）基础网络云服务器IP。 */
  Filters?: FilterObject[];
  /** 偏移量 */
  Offset?: string;
  /** 返回数量 */
  Limit?: string;
}

declare interface DescribeClassicLinkInstancesResponse {
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 私有网络和基础网络互通设备。 */
  ClassicLinkInstanceSet: ClassicLinkInstance[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCrossBorderCcnRegionBandwidthLimitsRequest {
}

declare interface DescribeCrossBorderCcnRegionBandwidthLimitsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCrossBorderComplianceRequest {
  /** （精确匹配）服务商，可选值：`UNICOM`。 */
  ServiceProvider?: string;
  /** （精确匹配）合规化审批单`ID`。 */
  ComplianceId?: number;
  /** （模糊查询）公司名称。 */
  Company?: string;
  /** （精确匹配）统一社会信用代码。 */
  UniformSocialCreditCode?: string;
  /** （模糊查询）法定代表人。 */
  LegalPerson?: string;
  /** （模糊查询）发证机关。 */
  IssuingAuthority?: string;
  /** （模糊查询）营业执照住所。 */
  BusinessAddress?: string;
  /** （精确匹配）邮编。 */
  PostCode?: number;
  /** （模糊查询）经办人。 */
  Manager?: string;
  /** （精确查询）经办人身份证号。 */
  ManagerId?: string;
  /** （模糊查询）经办人身份证地址。 */
  ManagerAddress?: string;
  /** （精确匹配）经办人联系电话。 */
  ManagerTelephone?: string;
  /** （精确匹配）电子邮箱。 */
  Email?: string;
  /** （精确匹配）服务开始日期，如：`2020-07-28`。 */
  ServiceStartDate?: string;
  /** （精确匹配）服务结束日期，如：`2021-07-28`。 */
  ServiceEndDate?: string;
  /** （精确匹配）状态。待审批：`PENDING`，通过：`APPROVED `，拒绝：`DENY`。 */
  State?: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
}

declare interface DescribeCrossBorderComplianceResponse {
  /** 合规化审批单列表。 */
  CrossBorderComplianceSet: CrossBorderCompliance[];
  /** 合规化审批单总数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCrossBorderFlowMonitorRequest {
  /** 源地域 */
  SourceRegion: string;
  /** 目的地域 */
  DestinationRegion: string;
  /** 云联网Id */
  CcnId: string;
  /** 云联网所属账号 */
  CcnUin: string;
  /** 时间粒度 */
  Period: number;
  /** 开始时间 */
  StartTime: string;
  /** 结束时间 */
  EndTime: string;
}

declare interface DescribeCrossBorderFlowMonitorResponse {
  /** 云联网跨境带宽监控数据 */
  CrossBorderFlowMonitorData: CrossBorderFlowMonitorData[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomerGatewayVendorsRequest {
}

declare interface DescribeCustomerGatewayVendorsResponse {
  /** 对端网关厂商信息对象。 */
  CustomerGatewayVendorSet?: CustomerGatewayVendor[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeCustomerGatewaysRequest {
  /** 对端网关ID，例如：cgw-2wqq41m9。每次请求的实例的上限为100。参数不支持同时指定CustomerGatewayIds和Filters。 */
  CustomerGatewayIds?: string[];
  /** 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定CustomerGatewayIds和Filters。customer-gateway-id - String - （过滤条件）用户网关唯一ID形如：`cgw-mgp33pll`。customer-gateway-name - String - （过滤条件）用户网关名称形如：`test-cgw`。ip-address - String - （过滤条件）公网地址形如：`58.211.1.12`。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeCustomerGatewaysResponse {
  /** 对端网关对象列表 */
  CustomerGatewaySet?: CustomerGateway[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDhcpIpsRequest {
  /** DhcpIp实例ID。形如：dhcpip-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定DhcpIpIds和Filters。 */
  DhcpIpIds?: string[];
  /** 过滤条件，参数不支持同时指定DhcpIpIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。dhcpip-id - String - （过滤条件）DhcpIp实例ID，形如：dhcpip-pxir56ns。dhcpip-name - String - （过滤条件）DhcpIp实例名称。address-ip - String - （过滤条件）DhcpIp实例的IP，根据IP精确查找。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeDhcpIpsResponse {
  /** 实例详细信息列表。 */
  DhcpIpSet: DhcpIp[];
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDirectConnectGatewayCcnRoutesRequest {
  /** 专线网关ID，形如：`dcg-prpqlmg1`。 */
  DirectConnectGatewayId: string;
  /** 云联网路由学习类型，可选值：`BGP` - 自动学习。`STATIC` - 静态，即用户配置，默认值。 */
  CcnRouteType?: string;
  /** 偏移量。 */
  Offset?: number;
  /** 返回数量。 */
  Limit?: number;
}

declare interface DescribeDirectConnectGatewayCcnRoutesResponse {
  /** 符合条件的对象数。 */
  TotalCount: number;
  /** 云联网路由（IDC网段）列表。 */
  RouteSet: DirectConnectGatewayCcnRoute[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeDirectConnectGatewaysRequest {
  /** 专线网关唯一`ID`，形如：`dcg-9o233uri`。 */
  DirectConnectGatewayIds?: string[];
  /** 过滤条件，参数不支持同时指定`DirectConnectGatewayIds`和`Filters`。direct-connect-gateway-id - String - 专线网关唯一`ID`，形如：`dcg-9o233uri`。direct-connect-gateway-name - String - 专线网关名称，默认模糊查询。direct-connect-gateway-ip - String - 专线网关`IP`。gateway-type - String - 网关类型，可选值：`NORMAL`（普通型）、`NAT`（NAT型）。network-type- String - 网络类型，可选值：`VPC`（私有网络类型）、`CCN`（云联网类型）。ccn-id - String - 专线网关所在云联网`ID`。vpc-id - String - 专线网关所在私有网络`ID`。 */
  Filters?: Filter[];
  /** 偏移量。 */
  Offset?: number;
  /** 返回数量。 */
  Limit?: number;
}

declare interface DescribeDirectConnectGatewaysResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 专线网关对象数组。 */
  DirectConnectGatewaySet?: DirectConnectGateway[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFlowLogRequest {
  /** 私用网络ID或者统一ID，建议使用统一ID */
  VpcId: string;
  /** 流日志唯一ID */
  FlowLogId: string;
}

declare interface DescribeFlowLogResponse {
  /** 流日志信息 */
  FlowLog?: FlowLog[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeFlowLogsRequest {
  /** 私用网络ID或者统一ID，建议使用统一ID */
  VpcId?: string;
  /** 流日志唯一ID */
  FlowLogId?: string;
  /** 流日志实例名字 */
  FlowLogName?: string;
  /** 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE */
  ResourceType?: string;
  /** 资源唯一ID */
  ResourceId?: string;
  /** 流日志采集类型，ACCEPT|REJECT|ALL */
  TrafficType?: string;
  /** 流日志存储ID */
  CloudLogId?: string;
  /** 流日志存储ID状态 */
  CloudLogState?: string;
  /** 按某个字段排序,支持字段：flowLogName,createTime，默认按createTime */
  OrderField?: string;
  /** 升序（asc）还是降序（desc）,默认：desc */
  OrderDirection?: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 每页行数，默认为10 */
  Limit?: number;
  /** 过滤条件，参数不支持同时指定FlowLogIds和Filters。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。 */
  Filters?: Filter;
  /** 流日志存储ID对应的地域信息 */
  CloudLogRegion?: string;
}

declare interface DescribeFlowLogsResponse {
  /** 流日志实例集合 */
  FlowLog: FlowLog[];
  /** 流日志总数目 */
  TotalNum: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGatewayFlowMonitorDetailRequest {
  /** 时间点。表示要查询这分钟内的明细。如：`2019-02-28 18:15:20`，将查询 `18:15` 这一分钟内的明细。 */
  TimePoint: string;
  /** VPN网关实例ID，形如：`vpn-ltjahce6`。 */
  VpnId?: string;
  /** 专线网关实例ID，形如：`dcg-ltjahce6`。 */
  DirectConnectGatewayId?: string;
  /** 对等连接实例ID，形如：`pcx-ltjahce6`。 */
  PeeringConnectionId?: string;
  /** NAT网关实例ID，形如：`nat-ltjahce6`。 */
  NatId?: string;
  /** 偏移量。 */
  Offset?: number;
  /** 返回数量。 */
  Limit?: number;
  /** 排序字段。支持 `InPkg` `OutPkg` `InTraffic` `OutTraffic`。 */
  OrderField?: string;
  /** 排序方法。顺序：`ASC`，倒序：`DESC`。 */
  OrderDirection?: string;
}

declare interface DescribeGatewayFlowMonitorDetailResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 网关流量监控明细。 */
  GatewayFlowMonitorDetailSet?: GatewayFlowMonitorDetail[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeGatewayFlowQosRequest {
  /** 网关实例ID，目前我们支持的网关实例类型有，专线网关实例ID，形如，`dcg-ltjahce6`；Nat网关实例ID，形如，`nat-ltjahce6`；VPN网关实例ID，形如，`vpn-ltjahce6`。 */
  GatewayId: string;
  /** 限流的云服务器内网IP。 */
  IpAddresses?: string[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeGatewayFlowQosResponse {
  /** 实例详细信息列表。 */
  GatewayQosSet: GatewayQos[];
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeHaVipsRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。 */
  HaVipIds?: string[];
  /** 过滤条件，参数不支持同时指定`HaVipIds`和`Filters`。havip-id - String - `HAVIP`唯一`ID`，形如：`havip-9o233uri`。havip-name - String - `HAVIP`名称。vpc-id - String - `HAVIP`所在私有网络`ID`。subnet-id - String - `HAVIP`所在子网`ID`。vip - String - `HAVIP`的地址`VIP`。address-ip - String - `HAVIP`绑定的弹性公网`IP`。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
}

declare interface DescribeHaVipsResponse {
  /** 符合条件的对象数。 */
  TotalCount: number;
  /** `HAVIP`对象数组。 */
  HaVipSet: HaVip[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIp6AddressesRequest {
  /** 标识 IPV6 的唯一 ID 列表。IPV6 唯一 ID 形如：`eip-11112222`。参数不支持同时指定`Ip6AddressIds`和`Filters`。 */
  Ip6AddressIds?: string[];
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`AddressIds`和`Filters`。详细的过滤条件如下： address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。 network-interface-id - String - 是否必填：否 - （过滤条件）按照弹性网卡的唯一ID过滤。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeIp6AddressesResponse {
  /** 符合条件的 IPV6 数量。 */
  TotalCount?: number;
  /** IPV6 详细信息列表。 */
  AddressSet?: Address[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIp6TranslatorQuotaRequest {
  /** 待查询IPV6转换实例的唯一ID列表，形如ip6-xxxxxxxx */
  Ip6TranslatorIds?: string[];
}

declare interface DescribeIp6TranslatorQuotaResponse {
  /** 账户在指定地域的IPV6转换实例及规则配额信息QUOTAID属性是TOTAL_TRANSLATOR_QUOTA，表示账户在指定地域的IPV6转换实例配额信息；QUOTAID属性是IPV6转换实例唯一ID（形如ip6-xxxxxxxx），表示账户在该转换实例允许创建的转换规则配额 */
  QuotaSet?: Quota[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIp6TranslatorsRequest {
  /** IPV6转换实例唯一ID数组，形如ip6-xxxxxxxx */
  Ip6TranslatorIds?: string[];
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`Ip6TranslatorIds`和`Filters`。详细的过滤条件如下： ip6-translator-id - String - 是否必填：否 - （过滤条件）按照IPV6转换实例的唯一ID过滤,形如ip6-xxxxxxx。 ip6-translator-vip6 - String - 是否必填：否 - （过滤条件）按照IPV6地址过滤。不支持模糊过滤。 ip6-translator-name - String - 是否必填：否 - （过滤条件）按照IPV6转换实例名称过滤。不支持模糊过滤。 ip6-translator-status - String - 是否必填：否 - （过滤条件）按照IPV6转换实例的状态过滤。状态取值范围为"CREATING","RUNNING","DELETING","MODIFYING" */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeIp6TranslatorsResponse {
  /** 符合过滤条件的IPV6转换实例数量。 */
  TotalCount?: number;
  /** 符合过滤条件的IPV6转换实例详细信息 */
  Ip6TranslatorSet?: Ip6Translator[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIpGeolocationDatabaseUrlRequest {
  /** IP地理位置库协议类型，目前仅支持"ipv4"。 */
  Type: string;
}

declare interface DescribeIpGeolocationDatabaseUrlResponse {
  /** IP地理位置库下载链接地址。 */
  DownLoadUrl: string;
  /** 链接到期时间。按照`ISO8601`标准表示，并且使用`UTC`时间。 */
  ExpiredAt: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeIpGeolocationInfosRequest {
  /** 需查询的IP地址列表，目前仅支持IPv4地址。查询的IP地址数量上限为100个。 */
  AddressIps: string[];
  /** 需查询的IP地址的字段信息。 */
  Fields?: IpField;
}

declare interface DescribeIpGeolocationInfosResponse {
  /** IP地址信息列表。 */
  AddressInfo: IpGeolocationInfo[];
  /** IP地址信息个数。 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeLocalGatewayRequest {
  /** 查询条件：vpc-id：按照VPCID过滤，local-gateway-name：按照本地网关名称过滤，名称支持模糊搜索，local-gateway-id：按照本地网关实例ID过滤，cdc-id：按照cdc实例ID过滤查询。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeLocalGatewayResponse {
  /** 本地网关信息集合 */
  LocalGatewaySet: LocalGateway[];
  /** 本地网关总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest {
  /** NAT网关ID。 */
  NatGatewayIds?: string[];
  /** 过滤条件:参数不支持同时指定NatGatewayIds和Filters。 nat-gateway-id，NAT网关的ID，如`nat-0yi4hekt` vpc-id，私有网络VPC的ID，如`vpc-0yi4hekt` public-ip-address， 弹性IP，如`139.199.232.238`。public-port， 公网端口。private-ip-address， 内网IP，如`10.0.0.1`。private-port， 内网端口。description，规则描述。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse {
  /** NAT网关端口转发规则对象数组。 */
  NatGatewayDestinationIpPortTranslationNatRuleSet: NatGatewayDestinationIpPortTranslationNatRule[];
  /** 符合条件的NAT网关端口转发规则对象数目。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatGatewayDirectConnectGatewayRouteRequest {
  /** nat的唯一标识 */
  NatGatewayId: string;
  /** vpc的唯一标识 */
  VpcId: string;
  /** 0到200之间 */
  Limit?: number;
  /** 大于0 */
  Offset?: number;
}

declare interface DescribeNatGatewayDirectConnectGatewayRouteResponse {
  /** 路由数据 */
  NatDirectConnectGatewayRouteSet: NatDirectConnectGatewayRoute[];
  /** 路由总数 */
  Total: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatGatewaySourceIpTranslationNatRulesRequest {
  /** NAT网关统一 ID，形如：`nat-123xx454`。 */
  NatGatewayId: string;
  /** 过滤条件: resource-id，Subnet的ID或者Cvm ID，如`subnet-0yi4hekt` public-ip-address，弹性IP，如`139.199.232.238`description，规则描述。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNatGatewaySourceIpTranslationNatRulesResponse {
  /** NAT网关SNAT规则对象数组。 */
  SourceIpTranslationNatRuleSet: SourceIpTranslationNatRule[] | null;
  /** 符合条件的NAT网关端口转发规则对象数目。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNatGatewaysRequest {
  /** NAT网关统一 ID，形如：`nat-123xx454`。 */
  NatGatewayIds?: string[];
  /** 过滤条件，参数不支持同时指定NatGatewayIds和Filters。nat-gateway-id - String - （过滤条件）协议端口模板实例ID，形如：`nat-123xx454`。vpc-id - String - （过滤条件）私有网络 唯一ID，形如：`vpc-123xx454`。nat-gateway-name - String - （过滤条件）协议端口模板实例ID，形如：`test_nat`。tag-key - String - （过滤条件）标签键，形如：`test-key`。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNatGatewaysResponse {
  /** NAT网关对象数组。 */
  NatGatewaySet: NatGateway[];
  /** 符合条件的NAT网关对象个数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetDetectStatesRequest {
  /** 网络探测实例`ID`数组。形如：[`netd-12345678`] */
  NetDetectIds?: string[];
  /** 过滤条件，参数不支持同时指定NetDetectIds和Filters。net-detect-id - String - （过滤条件）网络探测实例ID，形如：netd-12345678 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNetDetectStatesResponse {
  /** 符合条件的网络探测验证结果对象数组。 */
  NetDetectStateSet: NetDetectState[] | null;
  /** 符合条件的网络探测验证结果对象数量。 */
  TotalCount: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetDetectsRequest {
  /** 网络探测实例`ID`数组。形如：[`netd-12345678`] */
  NetDetectIds?: string[];
  /** 过滤条件，参数不支持同时指定NetDetectIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-12345678net-detect-id - String - （过滤条件）网络探测实例ID，形如：netd-12345678subnet-id - String - （过滤条件）子网实例ID，形如：subnet-12345678net-detect-name - String - （过滤条件）网络探测名称 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNetDetectsResponse {
  /** 符合条件的网络探测对象数组。 */
  NetDetectSet?: NetDetect[] | null;
  /** 符合条件的网络探测对象数量。 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkAclQuintupleEntriesRequest {
  /** 网络ACL实例ID。形如：acl-12345678。 */
  NetworkAclId: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最小值为1，最大值为100。 */
  Limit?: number;
  /** 过滤条件，参数不支持同时指定`HaVipIds`和`Filters`。protocol - String - 协议，形如：`TCP`。description - String - 描述。destination-cidr - String - 目的CIDR， 形如：'192.168.0.0/24'。source-cidr- String - 源CIDR， 形如：'192.168.0.0/24'。action - String - 动作，形如ACCEPT或DROP。network-acl-quintuple-entry-id - String - 五元组唯一ID，形如：'acli45-ahnu4rv5'。network-acl-direction - String - 方向，形如：'INGRESS'或'EGRESS'。 */
  Filters?: Filter[];
}

declare interface DescribeNetworkAclQuintupleEntriesResponse {
  /** 网络ACL条目列表（NetworkAclTuple5Entry） */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntry[];
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkAclsRequest {
  /** 过滤条件，参数不支持同时指定NetworkAclIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-12345678。network-acl-id - String - （过滤条件）网络ACL实例ID，形如：acl-12345678。network-acl-name - String - （过滤条件）网络ACL实例名称。 */
  Filters?: Filter[];
  /** 网络ACL实例ID数组。形如：[acl-12345678]。每次请求的实例的上限为100。参数不支持同时指定NetworkAclIds和Filters。 */
  NetworkAclIds?: string[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最小值为1，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNetworkAclsResponse {
  /** 实例详细信息列表。 */
  NetworkAclSet: NetworkAcl[];
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkInterfaceLimitRequest {
  /** 要查询的CVM实例ID或弹性网卡ID */
  InstanceId: string;
}

declare interface DescribeNetworkInterfaceLimitResponse {
  /** 标准型弹性网卡配额 */
  EniQuantity: number;
  /** 每个标准型弹性网卡可以分配的IP配额 */
  EniPrivateIpAddressQuantity: number;
  /** 扩展型网卡配额 */
  ExtendEniQuantity: number | null;
  /** 每个扩展型弹性网卡可以分配的IP配额 */
  ExtendEniPrivateIpAddressQuantity: number | null;
  /** 中继网卡配额 */
  SubEniQuantity: number | null;
  /** 每个中继网卡可以分配的IP配额 */
  SubEniPrivateIpAddressQuantity: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeNetworkInterfacesRequest {
  /** 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。 */
  NetworkInterfaceIds?: string[];
  /** 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ins-3nqpdn3i。groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。network-interface-name - String - （过滤条件）网卡实例名称。network-interface-description - String - （过滤条件）网卡实例描述。address-ip - String - （过滤条件）内网IPv4地址，单IP后缀模糊匹配，多IP精确匹配。可以与`ip-exact-match`配合做单IP的精确匹配查询。ip-exact-match - Boolean - （过滤条件）内网IPv4精确匹配查询，存在多值情况，只取第一个。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；此过滤参数未提供时，同时过滤主网卡和辅助网卡。eni-type - String -是否必填：否- （过滤条件）按照网卡类型进行过滤。“0”-辅助网卡，“1”-主网卡，“2”：中继网卡eni-qos - String -是否必填：否- （过滤条件）按照网卡服务质量进行过滤。“AG”-服务质量云铜，“AU”-服务质量为银address-ipv6 - String - 是否必填：否 -（过滤条件）内网IPv6地址过滤，支持多ipv6地址查询，如果和address-ip一起使用取交集。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNetworkInterfacesResponse {
  /** 实例详细信息列表。 */
  NetworkInterfaceSet: NetworkInterface[];
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeProductQuotaRequest {
  /** 查询的网络产品名称，可查询的产品有：vpc、ccn、vpn、dc、dfw、clb、eip。 */
  Product: string;
}

declare interface DescribeProductQuotaResponse {
  /** ProductQuota对象数组 */
  ProductQuotaSet: ProductQuota[];
  /** 符合条件的产品类型个数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRouteConflictsRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** 要检查的与之冲突的目的端列表 */
  DestinationCidrBlocks: string[];
}

declare interface DescribeRouteConflictsResponse {
  /** 路由策略冲突列表 */
  RouteConflictSet?: RouteConflict[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeRouteTablesRequest {
  /** 过滤条件，参数不支持同时指定RouteTableIds和Filters。route-table-id - String - （过滤条件）路由表实例ID。route-table-name - String - （过滤条件）路由表名称。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。association.main - String - （过滤条件）是否主路由表。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。 */
  Filters?: Filter[];
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableIds?: string[];
  /** 偏移量。 */
  Offset?: string;
  /** 请求对象个数。 */
  Limit?: string;
}

declare interface DescribeRouteTablesResponse {
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 路由表对象。 */
  RouteTableSet: RouteTable[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupAssociationStatisticsRequest {
  /** 安全实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupIds: string[];
}

declare interface DescribeSecurityGroupAssociationStatisticsResponse {
  /** 安全组关联实例统计。 */
  SecurityGroupAssociationStatisticsSet?: SecurityGroupAssociationStatistics[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupLimitsRequest {
}

declare interface DescribeSecurityGroupLimitsResponse {
  /** 用户安全组配额限制。 */
  SecurityGroupLimitSet?: SecurityGroupLimitSet;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupPoliciesRequest {
  /** 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 过滤条件。security-group-id - String - 规则中的安全组ID。ip - String - IP，支持IPV4和IPV6模糊匹配。address-module - String - IP地址模板或IP地址组模板ID。service-module - String - 协议端口模板或协议端口组模板ID。protocol-type - String - 安全组策略支持的协议，可选值：`TCP`, `UDP`, `ICMP`, `ICMPV6`, `GRE`, `ALL`。port - String - 是否必填：否 -协议端口，支持模糊匹配，值为`ALL`时，查询所有的端口。poly - String - 协议策略，可选值：`ALL`，所有策略；`ACCEPT`，允许；`DROP`，拒绝。direction - String - 协议规则，可选值：`ALL`，所有策略；`INBOUND`，入站规则；`OUTBOUND`，出站规则。description - String - 协议描述，该过滤条件支持模糊匹配。 */
  Filters?: Filter[];
}

declare interface DescribeSecurityGroupPoliciesResponse {
  /** 安全组规则集合。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupReferencesRequest {
  /** 安全组实例ID数组。格式如：['sg-12345678'] */
  SecurityGroupIds: string[];
}

declare interface DescribeSecurityGroupReferencesResponse {
  /** 安全组被引用信息。 */
  ReferredSecurityGroupSet?: ReferredSecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupsRequest {
  /** 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。参数不支持同时指定SecurityGroupIds和Filters。 */
  SecurityGroupIds?: string[];
  /** 过滤条件，参数不支持同时指定SecurityGroupIds和Filters。security-group-id - String - （过滤条件）安全组ID。project-id - Integer - （过滤条件）项目ID。security-group-name - String - （过滤条件）安全组名称。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例3。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeSecurityGroupsResponse {
  /** 安全组对象。 */
  SecurityGroupSet: SecurityGroup[] | null;
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeServiceTemplateGroupsRequest {
  /** 过滤条件。service-template-group-name - String - （过滤条件）协议端口模板集合名称。service-template-group-id - String - （过滤条件）协议端口模板集合实例ID，例如：ppmg-e6dy460g。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeServiceTemplateGroupsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 协议端口模板集合。 */
  ServiceTemplateGroupSet?: ServiceTemplateGroup[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeServiceTemplatesRequest {
  /** 过滤条件。service-template-name - 协议端口模板名称。service-template-id - 协议端口模板实例ID，例如：ppm-e6dy460g。service-port- 协议端口。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeServiceTemplatesResponse {
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 协议端口模板对象。 */
  ServiceTemplateSet: ServiceTemplate[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeSubnetsRequest {
  /** 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。 */
  SubnetIds?: string[];
  /** 过滤条件，参数不支持同时指定SubnetIds和Filters。subnet-id - String - （过滤条件）Subnet实例名称。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。cidr-block - String - （过滤条件）子网网段，形如: 192.168.1.0 。is-default - Boolean - （过滤条件）是否是默认子网。is-remote-vpc-snat - Boolean - （过滤条件）是否为VPC SNAT地址池子网。subnet-name - String - （过滤条件）子网名称。zone - String - （过滤条件）可用区。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。cdc-id - String - 是否必填：否 - （过滤条件）按照cdc信息进行过滤。过滤出来制定cdc下的子网。is-cdc-subnet - String - 是否必填：否 - （过滤条件）按照是否是cdc子网进行过滤。取值：“0”-非cdc子网，“1”--cdc子网 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeSubnetsResponse {
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 子网对象。 */
  SubnetSet: Subnet[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTaskResultRequest {
  /** 异步任务ID。TaskId和DealName必填一个参数 */
  TaskId?: number;
  /** 计费订单号。TaskId和DealName必填一个参数 */
  DealName?: string;
}

declare interface DescribeTaskResultResponse {
  /** 任务ID */
  TaskId?: number;
  /** 执行结果，包括"SUCCESS", "FAILED", "RUNNING" */
  Result?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTemplateLimitsRequest {
}

declare interface DescribeTemplateLimitsResponse {
  /** 参数模板配额对象。 */
  TemplateLimit?: TemplateLimit;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTenantCcnsRequest {
}

declare interface DescribeTenantCcnsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeTrafficPackagesRequest {
  /** 共享流量包ID，支持批量 */
  TrafficPackageIds?: string[];
  /** 每次请求的`Filters`的上限为10。参数不支持同时指定`TrafficPackageIds`和`Filters`。详细的过滤条件如下： traffic-package_id - String - 是否必填：否 - （过滤条件）按照共享流量包的唯一标识ID过滤。 traffic-package-name - String - 是否必填：否 - （过滤条件）按照共享流量包名称过滤。不支持模糊过滤。 status - String - 是否必填：否 - （过滤条件）按照共享流量包状态过滤。可选状态：[AVAILABLE|EXPIRED|EXHAUSTED] */
  Filters?: Filter[];
  /** 分页参数 */
  Offset?: number;
  /** 分页参数 */
  Limit?: number;
}

declare interface DescribeTrafficPackagesResponse {
  /** 按照条件查询出来的流量包数量 */
  TotalCount: number;
  /** 流量包信息 */
  TrafficPackageSet: TrafficPackage[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcEndPointRequest {
  /** 过滤条件。 end-point-service-id- String - （过滤条件）终端节点服务ID。end-point-name - String - （过滤条件）终端节点实例名称。 end-point-id- String - （过滤条件）终端节点实例ID。 vpc-id- String - （过滤条件）VPC实例ID。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 单页返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 终端节点ID列表。 */
  EndPointId?: string[];
}

declare interface DescribeVpcEndPointResponse {
  /** 终端节点对象。 */
  EndPointSet: EndPoint[];
  /** 符合查询条件的终端节点个数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcEndPointServiceRequest {
  /** 过滤条件。 service-id- String - （过滤条件）终端节点服务唯一ID。service-name - String - （过滤条件）终端节点实例名称。service-instance-id - String - （过滤条件）后端服务的唯一ID，比如lb-xxx。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 单页返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 终端节点服务ID。 */
  EndPointServiceIds?: string[];
}

declare interface DescribeVpcEndPointServiceResponse {
  /** 终端节点服务对象数组。 */
  EndPointServiceSet: EndPointService[];
  /** 符合查询条件的个数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcEndPointServiceWhiteListRequest {
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 单页返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 过滤条件。 user-uin String - （过滤条件）用户UIN。 end-point-service-id String - （过滤条件）终端节点服务ID。 */
  Filters?: Filter[];
}

declare interface DescribeVpcEndPointServiceWhiteListResponse {
  /** 白名单对象数组。 */
  VpcEndpointServiceUserSet: VpcEndPointServiceUser[];
  /** 符合条件的白名单个数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcInstancesRequest {
  /** 过滤条件，参数不支持同时指定RouteTableIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。instance-id - String - （过滤条件）云主机实例ID。instance-name - String - （过滤条件）云主机名称。 */
  Filters: Filter[];
  /** 偏移量。 */
  Offset?: number;
  /** 请求对象个数。 */
  Limit?: number;
}

declare interface DescribeVpcInstancesResponse {
  /** 云主机实例列表。 */
  InstanceSet?: CvmInstance[];
  /** 满足条件的云主机实例个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcIpv6AddressesRequest {
  /** `VPC`实例`ID`，形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** `IP`地址列表，批量查询单次请求最多支持`10`个。 */
  Ipv6Addresses?: string[];
  /** 偏移量。 */
  Offset?: number;
  /** 返回数量。 */
  Limit?: number;
}

declare interface DescribeVpcIpv6AddressesResponse {
  /** `IPv6`地址列表。 */
  Ipv6AddressSet?: VpcIpv6Address[];
  /** `IPv6`地址总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcLimitsRequest {
  /** 配额名称。每次最大查询100个配额类型。 */
  LimitTypes: string[];
}

declare interface DescribeVpcLimitsResponse {
  /** 私有网络配额 */
  VpcLimitSet?: VpcLimit[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcPrivateIpAddressesRequest {
  /** `VPC`实例`ID`，形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** 内网`IP`地址列表，批量查询单次请求最多支持`10`个。 */
  PrivateIpAddresses: string[];
}

declare interface DescribeVpcPrivateIpAddressesResponse {
  /** 内网`IP`地址信息列表。 */
  VpcPrivateIpAddressSet: VpcPrivateIpAddress[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcResourceDashboardRequest {
  /** Vpc实例ID，例如：vpc-f1xjkw1b。 */
  VpcIds: string[];
}

declare interface DescribeVpcResourceDashboardResponse {
  /** 资源对象列表。 */
  ResourceDashboardSet?: ResourceDashboard[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcTaskResultRequest {
  /** 异步任务请求返回的RequestId。 */
  TaskId: string;
}

declare interface DescribeVpcTaskResultResponse {
  /** 异步任务执行结果。结果：SUCCESS、FAILED、RUNNING。3者其中之一。其中SUCCESS表示任务执行成功，FAILED表示任务执行失败，RUNNING表示任务执行中。 */
  Status: string;
  /** 异步任务执行输出。 */
  Output: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpcsRequest {
  /** VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。 */
  VpcIds?: string[];
  /** 过滤条件，不支持同时指定VpcIds和Filters参数。支持的过滤条件如下：vpc-name：VPC实例名称，支持模糊查询。is-default ：是否默认VPC。vpc-id ：VPC实例ID，例如：vpc-f49l6u0z。cidr-block：VPC的CIDR。tag-key ：按照标签键进行过滤，非必填参数。tag:tag-key：按照标签键值对进行过滤，非必填参数。 其中 tag-key 请使用具体的标签键进行替换，可参考示例2。 **说明：**若同一个过滤条件（Filter）存在多个Values，则同一Filter下Values间的关系为逻辑或（OR）关系；若存在多个过滤条件（Filter），Filter之间的关系为逻辑与（AND）关系。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeVpcsResponse {
  /** 符合条件的对象数。 */
  TotalCount: number;
  /** VPC对象。 */
  VpcSet: VpcInfo[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpnConnectionsRequest {
  /** VPN通道实例ID。形如：vpnx-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnConnectionIds和Filters。 */
  VpnConnectionIds?: string[];
  /** 过滤条件。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定VpnConnectionIds和Filters。vpc-id - String - VPC实例ID，形如：`vpc-0a36uwkr`。vpn-gateway-id - String - VPN网关实例ID，形如：`vpngw-p4lmqawn`。customer-gateway-id - String - 对端网关实例ID，形如：`cgw-l4rblw63`。vpn-connection-name - String - 通道名称，形如：`test-vpn`。vpn-connection-id - String - 通道实例ID，形如：`vpnx-5p7vkch8"`。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeVpnConnectionsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** VPN通道实例。 */
  VpnConnectionSet?: VpnConnection[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewayCcnRoutesRequest {
  /** VPN网关实例ID */
  VpnGatewayId: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
}

declare interface DescribeVpnGatewayCcnRoutesResponse {
  /** 云联网路由（IDC网段）列表。 */
  RouteSet?: VpngwCcnRoutes[];
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewayRoutesRequest {
  /** VPN网关的ID */
  VpnGatewayId: string;
  /** 过滤条件, 条件包括(DestinationCidr, InstanceId,InstanceType) */
  Filters?: Filter[];
  /** 偏移量, 默认0 */
  Offset?: number;
  /** 单页个数, 默认20, 最大值100 */
  Limit?: number;
}

declare interface DescribeVpnGatewayRoutesResponse {
  /** VPN网关目的路由 */
  Routes: VpnGatewayRoute[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewaySslClientsRequest {
  /** 过滤条件，参数不支持同时指定SslVpnClientIds和Filters。vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。ssl-vpn-server-id - String - （过滤条件）SSL-VPN-SERVER实例ID形如：vpngwSslServer-123456。ssl-vpn-client-id - String - （过滤条件）SSL-VPN-CLIENT实例ID形如：vpngwSslClient-123456。ssl-vpn-client-name - String - （过滤条件）SSL-VPN-CLIENT实例名称。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 请求对象个数 */
  Limit?: number;
  /** SSL-VPN-CLIENT实例ID。形如：vpngwSslClient-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定SslVpnClientIds和Filters。 */
  SslVpnClientIds?: string[];
  /** VPN门户网站使用。默认是False。 */
  IsVpnPortal?: boolean;
}

declare interface DescribeVpnGatewaySslClientsResponse {
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** 符合条件的实例个数。 */
  SslVpnClientSet: SslVpnClient[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewaySslServersRequest {
  /** 偏移量 */
  Offset?: number;
  /** 请求对象个数 */
  Limit?: number;
  /** SSL-VPN-SERVER实例ID。形如：vpngwSslServer-12345678。每次请求的实例的上限为100。参数不支持同时指定SslVpnServerIds和Filters。 */
  SslVpnServerIds?: string[];
  /** 过滤条件，参数不支持同时指定SslVpnServerIds和Filters。vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。vpn-gateway-name - String - （过滤条件）VPN实例名称。ssl-vpn-server-name - String - （过滤条件）SSL-VPN-SERVER实例名称。ssl-vpn-server-id - String - （过滤条件）SSL-VPN-SERVER实例ID形如：vpngwSslServer-123456。 */
  Filters?: FilterObject[];
  /** vpn门户使用。 默认Flase */
  IsVpnPortal?: boolean;
}

declare interface DescribeVpnGatewaySslServersResponse {
  /** 符合条件的实例数量。 */
  TotalCount: number;
  /** SSL-VPN-SERVER 实例详细信息列表。 */
  SslVpnSeverSet: SslVpnSever[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewaysRequest {
  /** VPN网关实例ID。形如：vpngw-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnGatewayIds和Filters。 */
  VpnGatewayIds?: string[];
  /** 过滤条件，参数不支持同时指定VpnGatewayIds和Filters。vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。vpn-gateway-name - String - （过滤条件）VPN实例名称。type - String - （过滤条件）VPN网关类型：'IPSEC', 'SSL'。public-ip-address- String - （过滤条件）公网IP。renew-flag - String - （过滤条件）网关续费类型，手动续费：'NOTIFY_AND_MANUAL_RENEW'、自动续费：'NOTIFY_AND_AUTO_RENEW'。zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。 */
  Filters?: FilterObject[];
  /** 偏移量 */
  Offset?: number;
  /** 请求对象个数 */
  Limit?: number;
}

declare interface DescribeVpnGatewaysResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** VPN网关实例详细信息列表。 */
  VpnGatewaySet?: VpnGateway[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetachCcnInstancesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 要解关联网络实例列表 */
  Instances: CcnInstance[];
}

declare interface DetachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetachClassicLinkVpcRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** CVM实例ID查询。形如：ins-r8hr2upy。 */
  InstanceIds: string[];
}

declare interface DetachClassicLinkVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DetachNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** CVM实例ID。形如：ins-r8hr2upy。 */
  InstanceId: string;
}

declare interface DetachNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableCcnRoutesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** CCN路由策略唯一ID。形如：ccnr-f49l6u0z。 */
  RouteIds: string[];
}

declare interface DisableCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableFlowLogsRequest {
  /** 流日志Id。 */
  FlowLogIds: string[];
}

declare interface DisableFlowLogsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableGatewayFlowMonitorRequest {
  /** 网关实例ID，目前我们支持的网关实例类型有，专线网关实例ID，形如，`dcg-ltjahce6`；Nat网关实例ID，形如，`nat-ltjahce6`；VPN网关实例ID，形如，`vpn-ltjahce6`。 */
  GatewayId: string;
}

declare interface DisableGatewayFlowMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略ID。不能和RouteItemIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。 */
  RouteIds?: number[];
  /** 路由策略唯一ID。不能和RouteIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。 */
  RouteItemIds?: string[];
}

declare interface DisableRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisableVpnGatewaySslClientCertRequest {
  /** SSL-VPN-CLIENT 实例ID。 */
  SslVpnClientId: string;
}

declare interface DisableVpnGatewaySslClientCertResponse {
  /** 异步任务实例ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateAddressRequest {
  /** 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。 */
  AddressId: string;
  /** 表示解绑 EIP 之后是否分配普通公网 IP。取值范围：TRUE：表示解绑 EIP 之后分配普通公网 IP。FALSE：表示解绑 EIP 之后不分配普通公网 IP。默认取值：FALSE。只有满足以下条件时才能指定该参数： 只有在解绑主网卡的主内网 IP 上的 EIP 时才能指定该参数。解绑 EIP 后重新分配普通公网 IP 操作一个账号每天最多操作 10 次；详情可通过 [DescribeAddressQuota](https://cloud.tencent.com/document/api/213/1378) 接口获取。 */
  ReallocateNormalPublicIp?: boolean;
}

declare interface DisassociateAddressResponse {
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateDhcpIpWithAddressIpRequest {
  /** `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。必须是已绑定`EIP`的`DhcpIp`。 */
  DhcpIpId: string;
}

declare interface DisassociateDhcpIpWithAddressIpResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateDirectConnectGatewayNatGatewayRequest {
  /** 专线网关ID。 */
  VpcId: string;
  /** NAT网关ID。 */
  NatGatewayId: string;
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  DirectConnectGatewayId: string;
}

declare interface DisassociateDirectConnectGatewayNatGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateNatGatewayAddressRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** 待解绑NAT网关的弹性IP数组。 */
  PublicIpAddresses: string[];
}

declare interface DisassociateNatGatewayAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateNetworkAclSubnetsRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 子网实例ID数组。例如：[subnet-12345678] */
  SubnetIds: string[];
}

declare interface DisassociateNetworkAclSubnetsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateNetworkInterfaceSecurityGroupsRequest {
  /** 弹性网卡实例ID。形如：eni-pxir56ns。每次请求的实例的上限为100。 */
  NetworkInterfaceIds: string[];
  /** 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。 */
  SecurityGroupIds: string[];
}

declare interface DisassociateNetworkInterfaceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DisassociateVpcEndPointSecurityGroupsRequest {
  /** 安全组ID数组。 */
  SecurityGroupIds: string[];
  /** 终端节点ID。 */
  EndPointId: string;
}

declare interface DisassociateVpcEndPointSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DownloadCustomerGatewayConfigurationRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** VPN通道实例ID。形如：vpnx-f49l6u0z。 */
  VpnConnectionId: string;
  /** 对端网关厂商信息对象，可通过DescribeCustomerGatewayVendors获取。 */
  CustomerGatewayVendor: CustomerGatewayVendor;
  /** 通道接入设备物理接口名称。 */
  InterfaceName: string;
}

declare interface DownloadCustomerGatewayConfigurationResponse {
  /** XML格式配置信息。 */
  CustomerGatewayConfiguration?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface DownloadVpnGatewaySslClientCertRequest {
  /** SSL-VPN-CLIENT 实例ID。 */
  SslVpnClientId: string;
  /** SAML-TOKEN */
  SamlToken?: string;
  /** VPN门户网站使用。默认Flase */
  IsVpnPortal?: boolean;
}

declare interface DownloadVpnGatewaySslClientCertResponse {
  /** 无 */
  SslClientConfigsSet: string;
  /** SSL-VPN client配置 */
  SslClientConfig: SslClientConfig[];
  /** 是否鉴权成功 只有传入SamlToken 才生效 */
  Authenticated: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableCcnRoutesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** CCN路由策略唯一ID。形如：ccnr-f49l6u0z。 */
  RouteIds: string[];
}

declare interface EnableCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableFlowLogsRequest {
  /** 流日志Id。 */
  FlowLogIds: string[];
}

declare interface EnableFlowLogsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableGatewayFlowMonitorRequest {
  /** 网关实例ID，目前我们支持的网关实例有，专线网关实例ID，形如，`dcg-ltjahce6`；Nat网关实例ID，形如，`nat-ltjahce6`；VPN网关实例ID，形如，`vpn-ltjahce6`。 */
  GatewayId: string;
}

declare interface EnableGatewayFlowMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略ID。不能和RouteItemIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。 */
  RouteIds?: number[];
  /** 路由策略唯一ID。不能和RouteIds同时使用，但至少输入一个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。 */
  RouteItemIds?: string[];
}

declare interface EnableRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableVpcEndPointConnectRequest {
  /** 终端节点服务ID。 */
  EndPointServiceId: string;
  /** 终端节点ID。 */
  EndPointId: string[];
  /** 是否接受终端节点连接请求。 */
  AcceptFlag: boolean;
}

declare interface EnableVpcEndPointConnectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface EnableVpnGatewaySslClientCertRequest {
  /** SSL-VPN-CLIENT 实例ID。 */
  SslVpnClientId: string;
}

declare interface EnableVpnGatewaySslClientCertResponse {
  /** 异步任务实例ID。 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface GetCcnRegionBandwidthLimitsRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 过滤条件。sregion - String - （过滤条件）源地域，形如：ap-guangzhou。dregion - String - （过滤条件）目的地域，形如：ap-shanghai-bm */
  Filters?: Filter[];
  /** 排序条件，目前支持带宽（BandwidthLimit）和过期时间（ExpireTime） */
  SortedBy?: string;
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 排序方式，'ASC':升序,'DESC':降序。 */
  OrderBy?: string;
}

declare interface GetCcnRegionBandwidthLimitsResponse {
  /** 云联网（CCN）各地域出带宽带宽详情。 */
  CcnBandwidthSet?: CcnBandwidthInfo[] | null;
  /** 符合条件的对象数。 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface HaVipAssociateAddressIpRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。必须是没有绑定`EIP`的`HAVIP` */
  HaVipId: string;
  /** 弹性公网`IP`。必须是没有绑定`HAVIP`的`EIP` */
  AddressIp: string;
}

declare interface HaVipAssociateAddressIpResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface HaVipDisassociateAddressIpRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。必须是已绑定`EIP`的`HAVIP`。 */
  HaVipId: string;
}

declare interface HaVipDisassociateAddressIpResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquirePriceCreateDirectConnectGatewayRequest {
}

declare interface InquirePriceCreateDirectConnectGatewayResponse {
  /** 专线网关标准接入费用 */
  TotalCost?: number | null;
  /** 专线网关真实接入费用 */
  RealTotalCost?: number | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquiryPriceCreateVpnGatewayRequest {
  /** 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100；单位：Mbps。 */
  InternetMaxBandwidthOut: number;
  /** VPN网关计费模式，PREPAID：表示预付费，即包年包月，POSTPAID_BY_HOUR：表示后付费，即按量计费。默认：POSTPAID_BY_HOUR，如果指定预付费模式，参数InstanceChargePrepaid必填。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** SSL VPN连接数设置，可选规格：5, 10, 20, 50, 100；单位：个。 */
  MaxConnection?: number;
  /** 查询的VPN类型，支持IPSEC和SSL两种类型，为SSL类型时，MaxConnection参数必传。 */
  Type?: string;
}

declare interface InquiryPriceCreateVpnGatewayResponse {
  /** 商品价格。 */
  Price: Price;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewVpnGatewayRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
}

declare interface InquiryPriceRenewVpnGatewayResponse {
  /** 商品价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100；单位：Mbps。 */
  InternetMaxBandwidthOut: number;
}

declare interface InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse {
  /** 商品价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface LockCcnBandwidthsRequest {
}

declare interface LockCcnBandwidthsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface LockCcnsRequest {
}

declare interface LockCcnsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MigrateNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 弹性网卡当前绑定的CVM实例ID。形如：ins-r8hr2upy。 */
  SourceInstanceId: string;
  /** 待迁移的目的CVM实例ID。 */
  DestinationInstanceId: string;
  /** 网卡绑定类型：0 标准型 1 扩展型。 */
  AttachType?: number;
}

declare interface MigrateNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface MigratePrivateIpAddressRequest {
  /** 当内网IP绑定的弹性网卡实例ID，例如：eni-m6dyj72l。 */
  SourceNetworkInterfaceId: string;
  /** 待迁移的目的弹性网卡实例ID。 */
  DestinationNetworkInterfaceId: string;
  /** 迁移的内网IP地址，例如：10.0.0.6。 */
  PrivateIpAddress: string;
}

declare interface MigratePrivateIpAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAddressAttributeRequest {
  /** 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。 */
  AddressId: string;
  /** 修改后的 EIP 名称。长度上限为20个字符。 */
  AddressName?: string;
  /** 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。 */
  EipDirectConnection?: string;
}

declare interface ModifyAddressAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAddressInternetChargeTypeRequest {
  /** 弹性公网IP的唯一ID，形如eip-xxx */
  AddressId: string;
  /** 弹性公网IP调整目标计费模式，只支持"BANDWIDTH_PREPAID_BY_MONTH"和"TRAFFIC_POSTPAID_BY_HOUR" */
  InternetChargeType: string;
  /** 弹性公网IP调整目标带宽值 */
  InternetMaxBandwidthOut: number;
  /** 包月带宽网络计费模式参数。弹性公网IP的调整目标计费模式是"BANDWIDTH_PREPAID_BY_MONTH"时，必传该参数。 */
  AddressChargePrepaid?: AddressChargePrepaid;
}

declare interface ModifyAddressInternetChargeTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAddressTemplateAttributeRequest {
  /** IP地址模板实例ID，例如：ipm-mdunqeb6。 */
  AddressTemplateId: string;
  /** IP地址模板名称。 */
  AddressTemplateName?: string;
  /** 地址信息，支持 IP、CIDR、IP 范围。 */
  Addresses?: string[];
  /** 支持添加备注的地址信息，支持 IP、CIDR、IP 范围。 */
  AddressesExtra?: AddressInfo[];
}

declare interface ModifyAddressTemplateAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAddressTemplateGroupAttributeRequest {
  /** IP地址模板集合实例ID，例如：ipmg-2uw6ujo6。 */
  AddressTemplateGroupId: string;
  /** IP地址模板集合名称。 */
  AddressTemplateGroupName?: string;
  /** IP地址模板实例ID， 例如：ipm-mdunqeb6。 */
  AddressTemplateIds?: string[];
}

declare interface ModifyAddressTemplateGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAddressesBandwidthRequest {
  /** EIP唯一标识ID列表，形如'eip-xxxx' */
  AddressIds: string[];
  /** 调整带宽目标值 */
  InternetMaxBandwidthOut: number;
  /** 包月带宽起始时间(已废弃，输入无效) */
  StartTime?: string;
  /** 包月带宽结束时间(已废弃，输入无效) */
  EndTime?: string;
}

declare interface ModifyAddressesBandwidthResponse {
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyAssistantCidrRequest {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5` */
  VpcId: string;
  /** 待添加的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]，入参NewCidrBlocks和OldCidrBlocks至少需要其一。 */
  NewCidrBlocks?: string[];
  /** 待删除的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]，入参NewCidrBlocks和OldCidrBlocks至少需要其一。 */
  OldCidrBlocks?: string[];
}

declare interface ModifyAssistantCidrResponse {
  /** 辅助CIDR数组。 */
  AssistantCidrSet: AssistantCidr[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyBandwidthPackageAttributeRequest {
  /** 带宽包唯一标识ID */
  BandwidthPackageId: string;
  /** 带宽包名称 */
  BandwidthPackageName: string;
  /** 带宽包计费模式，示例 ：'TOP5_POSTPAID_BY_MONTH'（后付费-TOP5计费） */
  ChargeType?: string;
}

declare interface ModifyBandwidthPackageAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCcnAttachedInstancesAttributeRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 关联网络实例列表 */
  Instances: CcnInstance[];
}

declare interface ModifyCcnAttachedInstancesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCcnAttributeRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** CCN名称，最大长度不能超过60个字节，限制：CcnName和CcnDescription必须至少选择一个参数输入，否则报错。 */
  CcnName?: string;
  /** CCN描述信息，最大长度不能超过100个字节，限制：CcnName和CcnDescription必须至少选择一个参数输入，否则报错。 */
  CcnDescription?: string;
}

declare interface ModifyCcnAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCcnRegionBandwidthLimitsTypeRequest {
  /** 云联网实例ID。 */
  CcnId: string;
  /** 云联网限速类型，INTER_REGION_LIMIT：地域间限速，OUTER_REGION_LIMIT：地域出口限速。 */
  BandwidthLimitType?: string;
}

declare interface ModifyCcnRegionBandwidthLimitsTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyCustomerGatewayAttributeRequest {
  /** 对端网关ID，例如：cgw-2wqq41m9，可通过DescribeCustomerGateways接口查询对端网关。 */
  CustomerGatewayId: string;
  /** 对端网关名称，可任意命名，但不得超过60个字符。 */
  CustomerGatewayName: string;
}

declare interface ModifyCustomerGatewayAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDhcpIpAttributeRequest {
  /** `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。 */
  DhcpIpId: string;
  /** `DhcpIp`名称，可任意命名，但不得超过60个字符。 */
  DhcpIpName: string;
}

declare interface ModifyDhcpIpAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyDirectConnectGatewayAttributeRequest {
  /** 专线网关唯一`ID`，形如：`dcg-9o233uri`。 */
  DirectConnectGatewayId: string;
  /** 专线网关名称，可任意命名，但不得超过60个字符。 */
  DirectConnectGatewayName?: string;
  /** 云联网路由学习类型，可选值：`BGP`（自动学习）、`STATIC`（静态，即用户配置）。只有云联网类型专线网关且开启了BGP功能才支持修改`CcnRouteType`。 */
  CcnRouteType?: string;
  /** 云联网路由发布模式，可选值：`standard`（标准模式）、`exquisite`（精细模式）。只有云联网类型专线网关才支持修改`ModeType`。 */
  ModeType?: string;
}

declare interface ModifyDirectConnectGatewayAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyFlowLogAttributeRequest {
  /** 流日志唯一ID */
  FlowLogId: string;
  /** 私用网络ID或者统一ID，建议使用统一ID，修改云联网流日志属性时可不填，其他流日志类型必填。 */
  VpcId?: string;
  /** 流日志实例名字 */
  FlowLogName?: string;
  /** 流日志实例描述 */
  FlowLogDescription?: string;
}

declare interface ModifyFlowLogAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyGatewayFlowQosRequest {
  /** 网关实例ID，目前我们支持的网关实例类型有，专线网关实例ID，形如，`dcg-ltjahce6`；Nat网关实例ID，形如，`nat-ltjahce6`；VPN网关实例ID，形如，`vpn-ltjahce6`。 */
  GatewayId: string;
  /** 流控带宽值。取值大于0，表示限流到指定的Mbps；取值等于0，表示完全限流；取值为-1，不限流。 */
  Bandwidth: number;
  /** 限流的云服务器内网IP。 */
  IpAddresses: string[];
}

declare interface ModifyGatewayFlowQosResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyHaVipAttributeRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。 */
  HaVipId: string;
  /** `HAVIP`名称，可任意命名，但不得超过60个字符。 */
  HaVipName: string;
}

declare interface ModifyHaVipAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyIp6AddressesBandwidthRequest {
  /** 修改的目标带宽，单位Mbps */
  InternetMaxBandwidthOut: number;
  /** IPV6地址。Ip6Addresses和Ip6AddressId必须且只能传一个 */
  Ip6Addresses?: string[];
  /** IPV6地址对应的唯一ID，形如eip-xxxxxxxx。Ip6Addresses和Ip6AddressId必须且只能传一个 */
  Ip6AddressIds?: string[];
}

declare interface ModifyIp6AddressesBandwidthResponse {
  /** 任务ID */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyIp6RuleRequest {
  /** IPV6转换实例唯一ID，形如ip6-xxxxxxxx */
  Ip6TranslatorId: string;
  /** IPV6转换规则唯一ID，形如rule6-xxxxxxxx */
  Ip6RuleId: string;
  /** IPV6转换规则修改后的名称 */
  Ip6RuleName?: string;
  /** IPV6转换规则修改后的IPV4地址 */
  Vip?: string;
  /** IPV6转换规则修改后的IPV4端口号 */
  Vport?: number;
}

declare interface ModifyIp6RuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyIp6TranslatorRequest {
  /** IPV6转换实例唯一ID，形如ip6-xxxxxxxxx */
  Ip6TranslatorId: string;
  /** IPV6转换实例修改名称 */
  Ip6TranslatorName?: string;
}

declare interface ModifyIp6TranslatorResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyIpv6AddressesAttributeRequest {
  /** 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。 */
  NetworkInterfaceId: string;
  /** 指定的内网IPv6`地址信息。 */
  Ipv6Addresses: Ipv6Address[];
}

declare interface ModifyIpv6AddressesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyLocalGatewayRequest {
  /** 本地网关名称 */
  LocalGatewayName: string;
  /** CDC实例ID */
  CdcId: string;
  /** 本地网关实例ID */
  LocalGatewayId: string;
  /** VPC实例ID */
  VpcId?: string;
}

declare interface ModifyLocalGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNatGatewayAttributeRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** NAT网关的名称，形如：`test_nat`。 */
  NatGatewayName?: string;
  /** NAT网关最大外网出带宽(单位:Mbps)。 */
  InternetMaxBandwidthOut?: number;
  /** 是否修改NAT网关绑定的安全组。 */
  ModifySecurityGroup?: boolean;
  /** NAT网关绑定的安全组列表，最终状态，空列表表示删除所有安全组，形如: `['sg-1n232323', 'sg-o4242424']` */
  SecurityGroupIds?: string[];
}

declare interface ModifyNatGatewayAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** 源NAT网关的端口转换规则。 */
  SourceNatRule: DestinationIpPortTranslationNatRule;
  /** 目的NAT网关的端口转换规则。 */
  DestinationNatRule: DestinationIpPortTranslationNatRule;
}

declare interface ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNatGatewaySourceIpTranslationNatRuleRequest {
  /** NAT网关的ID，形如：`nat-df453454`。 */
  NatGatewayId: string;
  /** NAT网关的SNAT转换规则。 */
  SourceIpTranslationNatRule: SourceIpTranslationNatRule;
}

declare interface ModifyNatGatewaySourceIpTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNetDetectRequest {
  /** 网络探测实例`ID`。形如：`netd-12345678` */
  NetDetectId: string;
  /** 网络探测名称，最大长度不能超过60个字节。 */
  NetDetectName?: string;
  /** 探测目的IPv4地址数组，最多两个。 */
  DetectDestinationIp?: string[];
  /** 下一跳类型，目前我们支持的类型有：VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；NAT：NAT网关；NORMAL_CVM：普通云服务器；CCN：云联网网关； */
  NextHopType?: string;
  /** 下一跳目的网关，取值与“下一跳类型”相关：下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；下一跳类型为NAT，取值Nat网关，形如：nat-12345678；下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；下一跳类型为CCN，取值云联网ID，形如：ccn-44csczop； */
  NextHopDestination?: string;
  /** 网络探测描述。 */
  NetDetectDescription?: string;
}

declare interface ModifyNetDetectResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNetworkAclAttributeRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络ACL名称，最大长度不能超过60个字节。 */
  NetworkAclName: string;
}

declare interface ModifyNetworkAclAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNetworkAclEntriesRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络ACL规则集。NetworkAclEntrySet和NetworkAclQuintupleSet只能输入一个。 */
  NetworkAclEntrySet?: NetworkAclEntrySet;
  /** 网络ACL五元组规则集。NetworkAclEntrySet和NetworkAclQuintupleSet只能输入一个。 */
  NetworkAclQuintupleSet?: NetworkAclQuintupleEntries;
}

declare interface ModifyNetworkAclEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNetworkAclQuintupleEntriesRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络五元组ACL规则集。 */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntries;
}

declare interface ModifyNetworkAclQuintupleEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNetworkInterfaceAttributeRequest {
  /** 弹性网卡实例ID，例如：eni-pxir56ns。 */
  NetworkInterfaceId: string;
  /** 弹性网卡名称，最大长度不能超过60个字节。 */
  NetworkInterfaceName?: string;
  /** 弹性网卡描述，可任意命名，但不得超过60个字符。 */
  NetworkInterfaceDescription?: string;
  /** 指定绑定的安全组，例如:['sg-1dd51d']。 */
  SecurityGroupIds?: string[];
  /** 网卡trunking模式设置，Enable-开启，Disable--关闭，默认关闭。 */
  TrunkingFlag?: string;
}

declare interface ModifyNetworkInterfaceAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyNetworkInterfaceQosRequest {
  /** 弹性网卡ID，支持批量修改。 */
  NetworkInterfaceIds: string[];
  /** 服务质量，可选值：PT、AU、AG、DEFAULT，分别代表白金、金、银、默认四个等级。 */
  QosLevel: string;
  /** DirectSend端口范围最大值。 */
  DirectSendMaxPort?: number;
}

declare interface ModifyNetworkInterfaceQosResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyPrivateIpAddressesAttributeRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 指定的内网IP信息。 */
  PrivateIpAddresses: PrivateIpAddressSpecification[];
}

declare interface ModifyPrivateIpAddressesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyRouteTableAttributeRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** 路由表名称。 */
  RouteTableName: string;
}

declare interface ModifyRouteTableAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecurityGroupAttributeRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组名称，可任意命名，但不得超过60个字符。 */
  GroupName?: string;
  /** 安全组备注，最多100个字符。 */
  GroupDescription?: string;
}

declare interface ModifySecurityGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySecurityGroupPoliciesRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组规则集合。 SecurityGroupPolicySet对象必须同时指定新的出（Egress）入（Ingress）站规则。 SecurityGroupPolicy对象不支持自定义索引（PolicyIndex）。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
  /** 排序安全组标识，默认值为False。当SortPolicys为False时，不改变安全组规则排序；当SortPolicys为True时，系统将严格按照SecurityGroupPolicySet参数传入的安全组规则及顺序进行重置，考虑到人为输入参数可能存在遗漏风险，建议通过控制台对安全组规则进行排序。 */
  SortPolicys?: boolean;
}

declare interface ModifySecurityGroupPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyServiceTemplateAttributeRequest {
  /** 协议端口模板实例ID，例如：ppm-529nwwj8。 */
  ServiceTemplateId: string;
  /** 协议端口模板名称。 */
  ServiceTemplateName?: string;
  /** 支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。 */
  Services?: string[];
  /** 支持添加备注的协议端口信息，支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。 */
  ServicesExtra?: ServicesInfo[];
}

declare interface ModifyServiceTemplateAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyServiceTemplateGroupAttributeRequest {
  /** 协议端口模板集合实例ID，例如：ppmg-ei8hfd9a。 */
  ServiceTemplateGroupId: string;
  /** 协议端口模板集合名称。 */
  ServiceTemplateGroupName?: string;
  /** 协议端口模板实例ID，例如：ppm-4dw6agho。 */
  ServiceTemplateIds?: string[];
}

declare interface ModifyServiceTemplateGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifySubnetAttributeRequest {
  /** 子网实例ID。形如：subnet-pxir56ns。 */
  SubnetId: string;
  /** 子网名称，最大长度不能超过60个字节。 */
  SubnetName?: string;
  /** 子网是否开启广播。 */
  EnableBroadcast?: string;
}

declare interface ModifySubnetAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyTemplateMemberRequest {
  /** 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。 */
  TemplateId: string;
  /** 需要修改的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致，修改顺序与TemplateMember参数顺序一一对应，入参长度需要与TemplateMember参数保持一致。 */
  OriginalTemplateMember: MemberInfo[];
  /** 新的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致，修改顺序与OriginalTemplateMember参数顺序一一对应，入参长度需要与OriginalTemplateMember参数保持一致。 */
  TemplateMember: MemberInfo[];
}

declare interface ModifyTemplateMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpcAttributeRequest {
  /** VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。 */
  VpcId: string;
  /** 私有网络名称，可任意命名，但不得超过60个字符。 */
  VpcName?: string;
  /** 是否开启组播。true: 开启, false: 关闭。 */
  EnableMulticast?: string;
  /** DNS地址，最多支持4个，第1个默认为主，其余为备 */
  DnsServers?: string[];
  /** 域名 */
  DomainName?: string;
}

declare interface ModifyVpcAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpcEndPointAttributeRequest {
  /** 终端节点ID。 */
  EndPointId: string;
  /** 终端节点名称。 */
  EndPointName?: string;
  /** 安全组ID列表。 */
  SecurityGroupIds?: string[];
}

declare interface ModifyVpcEndPointAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpcEndPointServiceAttributeRequest {
  /** 终端节点服务ID。 */
  EndPointServiceId: string;
  /** VPCID。 */
  VpcId: string;
  /** 终端节点服务名称。 */
  EndPointServiceName?: string;
  /** 是否自动接受终端节点的连接请求。true：自动接受false：不自动接受 */
  AutoAcceptFlag?: boolean;
  /** 后端服务的ID，比如lb-xxx。 */
  ServiceInstanceId?: string;
}

declare interface ModifyVpcEndPointServiceAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpcEndPointServiceWhiteListRequest {
  /** 用户UIN。 */
  UserUin: string;
  /** 终端节点服务ID。 */
  EndPointServiceId: string;
  /** 白名单描述信息。 */
  Description?: string;
}

declare interface ModifyVpcEndPointServiceWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpnConnectionAttributeRequest {
  /** VPN通道实例ID。形如：vpnx-f49l6u0z。 */
  VpnConnectionId: string;
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
  /** 是否启用通道健康检查 */
  EnableHealthCheck?: boolean;
  /** 本端通道探测ip */
  HealthCheckLocalIp?: string;
  /** 对端通道探测ip */
  HealthCheckRemoteIp?: string;
  /** 协商类型，默认为active（主动协商）。可选值：active（主动协商），passive（被动协商），flowTrigger（流量协商） */
  NegotiationType?: string;
  /** DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启） */
  DpdEnable?: number;
  /** DPD超时时间。即探测确认对端不存在需要的时间。dpdEnable为1（开启）时有效。默认30，单位为秒 */
  DpdTimeout?: string;
  /** DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试） */
  DpdAction?: string;
}

declare interface ModifyVpnConnectionAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpnGatewayAttributeRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** VPN网关名称，最大长度不能超过60个字节。 */
  VpnGatewayName?: string;
  /** VPN网关计费模式，目前只支持预付费（即包年包月）到后付费（即按量计费）的转换。即参数只支持：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
}

declare interface ModifyVpnGatewayAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpnGatewayCcnRoutesRequest {
  /** VPN网关实例ID */
  VpnGatewayId: string;
  /** 云联网路由（IDC网段）列表 */
  Routes: VpngwCcnRoutes[];
}

declare interface ModifyVpnGatewayCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ModifyVpnGatewayRoutesRequest {
  /** Vpn网关id */
  VpnGatewayId: string;
  /** 路由修改参数 */
  Routes: VpnGatewayRouteModify[];
}

declare interface ModifyVpnGatewayRoutesResponse {
  /** VPN路由信息 */
  Routes: VpnGatewayRoute[] | null;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface NotifyRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略唯一ID。 */
  RouteItemIds: string[];
}

declare interface NotifyRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RefreshDirectConnectGatewayRouteToNatGatewayRequest {
  /** vpc的ID */
  VpcId: string;
  /** NAT网关ID */
  NatGatewayId: string;
  /** 是否是预刷新；True:是， False:否 */
  DryRun: boolean;
}

declare interface RefreshDirectConnectGatewayRouteToNatGatewayResponse {
  /** IDC子网信息 */
  DirectConnectSubnetSet: DirectConnectSubnet[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RejectAttachCcnInstancesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 拒绝关联实例列表。 */
  Instances: CcnInstance[];
}

declare interface RejectAttachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReleaseAddressesRequest {
  /** 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：`eip-11112222`。 */
  AddressIds: string[];
}

declare interface ReleaseAddressesResponse {
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReleaseIp6AddressesBandwidthRequest {
  /** IPV6地址。Ip6Addresses和Ip6AddressIds必须且只能传一个 */
  Ip6Addresses?: string[];
  /** IPV6地址对应的唯一ID，形如eip-xxxxxxxx。Ip6Addresses和Ip6AddressIds必须且只能传一个。 */
  Ip6AddressIds?: string[];
}

declare interface ReleaseIp6AddressesBandwidthResponse {
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RemoveBandwidthPackageResourcesRequest {
  /** 带宽包唯一标识ID，形如'bwp-xxxx' */
  BandwidthPackageId?: string;
  /** 资源类型，包括‘Address’, ‘LoadBalance’ */
  ResourceType?: string;
  /** 资源ID，可支持资源形如'eip-xxxx', 'lb-xxxx' */
  ResourceIds?: string[];
}

declare interface RemoveBandwidthPackageResourcesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RemoveIp6RulesRequest {
  /** IPV6转换规则所属的转换实例唯一ID，形如ip6-xxxxxxxx */
  Ip6TranslatorId: string;
  /** 待删除IPV6转换规则，形如rule6-xxxxxxxx */
  Ip6RuleIds: string[];
}

declare interface RemoveIp6RulesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RenewAddressesRequest {
  /** EIP唯一标识ID列表，形如'eip-xxxx' */
  AddressIds: string[];
  /** 续费参数 */
  AddressChargePrepaid: AddressChargePrepaid;
}

declare interface RenewAddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface RenewVpnGatewayRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 预付费计费模式。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
}

declare interface RenewVpnGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReplaceDirectConnectGatewayCcnRoutesRequest {
  /** 专线网关ID，形如：dcg-prpqlmg1 */
  DirectConnectGatewayId: string;
  /** 需要连通的IDC网段列表 */
  Routes: DirectConnectGatewayCcnRoute[];
}

declare interface ReplaceDirectConnectGatewayCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReplaceRouteTableAssociationRequest {
  /** 子网实例ID，例如：subnet-3x5lf5q0。可通过DescribeSubnets接口查询。 */
  SubnetId: string;
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
}

declare interface ReplaceRouteTableAssociationResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReplaceRoutesRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** 路由策略对象。需要指定路由策略ID（RouteId）。 */
  Routes: Route[];
}

declare interface ReplaceRoutesResponse {
  /** 原路由策略信息。 */
  OldRouteSet: Route[];
  /** 修改后的路由策略信息。 */
  NewRouteSet: Route[];
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReplaceSecurityGroupPolicyRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组规则集合对象。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
  /** 旧的安全组规则集合对象，可选，日志记录用。 */
  OriginalSecurityGroupPolicySet?: SecurityGroupPolicySet;
}

declare interface ReplaceSecurityGroupPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetAttachCcnInstancesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** CCN所属UIN（根账号）。 */
  CcnUin: string;
  /** 重新申请关联网络实例列表。 */
  Instances: CcnInstance[];
}

declare interface ResetAttachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetNatGatewayConnectionRequest {
  /** NAT网关ID。 */
  NatGatewayId: string;
  /** NAT网关并发连接上限，形如：1000000、3000000、10000000。 */
  MaxConcurrentConnection: number;
}

declare interface ResetNatGatewayConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetRoutesRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** 路由表名称，最大长度不能超过60个字节。 */
  RouteTableName: string;
  /** 路由策略。 */
  Routes: Route[];
}

declare interface ResetRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetVpnConnectionRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** VPN通道实例ID。形如：vpnx-f49l6u0z。 */
  VpnConnectionId: string;
}

declare interface ResetVpnConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ResetVpnGatewayInternetMaxBandwidthRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100；单位：Mbps。 */
  InternetMaxBandwidthOut: number;
}

declare interface ResetVpnGatewayInternetMaxBandwidthResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface ReturnNormalAddressesRequest {
  /** 1 */
  AddressIps?: string[];
}

declare interface ReturnNormalAddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetCcnRegionBandwidthLimitsRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 云联网（CCN）各地域出带宽上限。 */
  CcnRegionBandwidthLimits: CcnRegionBandwidthLimit[];
  /** 是否恢复云联网地域出口/地域间带宽限速为默认值（1Gbps）。false表示不恢复；true表示恢复。恢复默认值后，限速实例将不在控制台展示。该参数默认为 false，不恢复。 */
  SetDefaultLimitFlag?: boolean;
}

declare interface SetCcnRegionBandwidthLimitsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface SetVpnGatewaysRenewFlagRequest {
  /** VPNGW字符型ID列表 */
  VpnGatewayIds: string[];
  /** 自动续费标记[0, 1, 2]0表示默认状态(初始状态)， 1表示自动续费，2表示明确不自动续费 */
  AutoRenewFlag: number;
  /** VPNGW类型['IPSEC', 'SSL'] */
  Type?: string;
}

declare interface SetVpnGatewaysRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface TransformAddressRequest {
  /** 待操作有普通公网 IP 的实例 ID。实例 ID 形如：`ins-11112222`。可通过登录[控制台](https://console.cloud.tencent.com/cvm)查询，也可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/9389) 接口返回值中的`InstanceId`获取。 */
  InstanceId: string;
}

declare interface TransformAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnassignIpv6AddressesRequest {
  /** 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。 */
  NetworkInterfaceId: string;
  /** 指定的`IPv6`地址列表，单次最多指定10个。 */
  Ipv6Addresses: Ipv6Address[];
}

declare interface UnassignIpv6AddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnassignIpv6CidrBlockRequest {
  /** `VPC`实例`ID`，形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** `IPv6`网段。形如：`3402:4e00:20:1000::/56` */
  Ipv6CidrBlock?: string;
}

declare interface UnassignIpv6CidrBlockResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnassignIpv6SubnetCidrBlockRequest {
  /** 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** `IPv6` 子网段列表。 */
  Ipv6SubnetCidrBlocks: Ipv6SubnetCidrBlock[];
}

declare interface UnassignIpv6SubnetCidrBlockResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnassignPrivateIpAddressesRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 指定的内网IP信息，单次最多指定10个。 */
  PrivateIpAddresses: PrivateIpAddressSpecification[];
  /** 网卡绑定的子机实例ID，该参数仅用于指定网卡退还IP并解绑子机的场景，如果不涉及解绑子机，请勿填写。 */
  InstanceId?: string;
}

declare interface UnassignPrivateIpAddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnlockCcnBandwidthsRequest {
}

declare interface UnlockCcnBandwidthsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface UnlockCcnsRequest {
}

declare interface UnlockCcnsResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

declare interface WithdrawNotifyRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略唯一ID。 */
  RouteItemIds: string[];
}

declare interface WithdrawNotifyRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。 */
  RequestId?: string;
}

/** {@link Vpc 私有网络} */
declare interface Vpc {
  (): Versions;
  /** {@link AcceptAttachCcnInstances 云联网接受关联实例}({@link AcceptAttachCcnInstancesRequest 请求参数}): {@link AcceptAttachCcnInstancesResponse 返回参数} */
  AcceptAttachCcnInstances(data: AcceptAttachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AcceptAttachCcnInstancesResponse>;
  /** {@link AddBandwidthPackageResources 添加带宽包资源}({@link AddBandwidthPackageResourcesRequest 请求参数}): {@link AddBandwidthPackageResourcesResponse 返回参数} */
  AddBandwidthPackageResources(data: AddBandwidthPackageResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<AddBandwidthPackageResourcesResponse>;
  /** {@link AddIp6Rules 添加IPV6转换规则}({@link AddIp6RulesRequest 请求参数}): {@link AddIp6RulesResponse 返回参数} */
  AddIp6Rules(data: AddIp6RulesRequest, config?: AxiosRequestConfig): AxiosPromise<AddIp6RulesResponse>;
  /** {@link AddTemplateMember 增加模板对象成员}({@link AddTemplateMemberRequest 请求参数}): {@link AddTemplateMemberResponse 返回参数} */
  AddTemplateMember(data: AddTemplateMemberRequest, config?: AxiosRequestConfig): AxiosPromise<AddTemplateMemberResponse>;
  /** {@link AdjustPublicAddress 更换公网IP}({@link AdjustPublicAddressRequest 请求参数}): {@link AdjustPublicAddressResponse 返回参数} */
  AdjustPublicAddress(data?: AdjustPublicAddressRequest, config?: AxiosRequestConfig): AxiosPromise<AdjustPublicAddressResponse>;
  /** {@link AllocateAddresses 创建弹性公网IP}({@link AllocateAddressesRequest 请求参数}): {@link AllocateAddressesResponse 返回参数} */
  AllocateAddresses(data?: AllocateAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateAddressesResponse>;
  /** {@link AllocateIp6AddressesBandwidth IPv6地址分配公网带宽}({@link AllocateIp6AddressesBandwidthRequest 请求参数}): {@link AllocateIp6AddressesBandwidthResponse 返回参数} */
  AllocateIp6AddressesBandwidth(data: AllocateIp6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateIp6AddressesBandwidthResponse>;
  /** {@link AssignIpv6Addresses 分配IPv6地址}({@link AssignIpv6AddressesRequest 请求参数}): {@link AssignIpv6AddressesResponse 返回参数} */
  AssignIpv6Addresses(data: AssignIpv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6AddressesResponse>;
  /** {@link AssignIpv6CidrBlock 分配IPv6网段}({@link AssignIpv6CidrBlockRequest 请求参数}): {@link AssignIpv6CidrBlockResponse 返回参数} */
  AssignIpv6CidrBlock(data: AssignIpv6CidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6CidrBlockResponse>;
  /** {@link AssignIpv6SubnetCidrBlock 分配IPv6子网段}({@link AssignIpv6SubnetCidrBlockRequest 请求参数}): {@link AssignIpv6SubnetCidrBlockResponse 返回参数} */
  AssignIpv6SubnetCidrBlock(data: AssignIpv6SubnetCidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6SubnetCidrBlockResponse>;
  /** {@link AssignPrivateIpAddresses 弹性网卡申请内网 IP}({@link AssignPrivateIpAddressesRequest 请求参数}): {@link AssignPrivateIpAddressesResponse 返回参数} */
  AssignPrivateIpAddresses(data: AssignPrivateIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AssignPrivateIpAddressesResponse>;
  /** {@link AssociateAddress 绑定弹性公网IP}({@link AssociateAddressRequest 请求参数}): {@link AssociateAddressResponse 返回参数} */
  AssociateAddress(data: AssociateAddressRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateAddressResponse>;
  /** {@link AssociateDhcpIpWithAddressIp DhcpIp绑定EIP}({@link AssociateDhcpIpWithAddressIpRequest 请求参数}): {@link AssociateDhcpIpWithAddressIpResponse 返回参数} */
  AssociateDhcpIpWithAddressIp(data: AssociateDhcpIpWithAddressIpRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateDhcpIpWithAddressIpResponse>;
  /** {@link AssociateDirectConnectGatewayNatGateway 专线网关绑定NAT网关}({@link AssociateDirectConnectGatewayNatGatewayRequest 请求参数}): {@link AssociateDirectConnectGatewayNatGatewayResponse 返回参数} */
  AssociateDirectConnectGatewayNatGateway(data: AssociateDirectConnectGatewayNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateDirectConnectGatewayNatGatewayResponse>;
  /** {@link AssociateNatGatewayAddress NAT网关绑定弹性IP}({@link AssociateNatGatewayAddressRequest 请求参数}): {@link AssociateNatGatewayAddressResponse 返回参数} */
  AssociateNatGatewayAddress(data: AssociateNatGatewayAddressRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateNatGatewayAddressResponse>;
  /** {@link AssociateNetworkAclSubnets 网络ACL关联子网}({@link AssociateNetworkAclSubnetsRequest 请求参数}): {@link AssociateNetworkAclSubnetsResponse 返回参数} */
  AssociateNetworkAclSubnets(data: AssociateNetworkAclSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateNetworkAclSubnetsResponse>;
  /** {@link AssociateNetworkInterfaceSecurityGroups 弹性网卡绑定安全组}({@link AssociateNetworkInterfaceSecurityGroupsRequest 请求参数}): {@link AssociateNetworkInterfaceSecurityGroupsResponse 返回参数} */
  AssociateNetworkInterfaceSecurityGroups(data: AssociateNetworkInterfaceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateNetworkInterfaceSecurityGroupsResponse>;
  /** {@link AttachCcnInstances 云联网关联实例}({@link AttachCcnInstancesRequest 请求参数}): {@link AttachCcnInstancesResponse 返回参数} */
  AttachCcnInstances(data: AttachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AttachCcnInstancesResponse>;
  /** {@link AttachClassicLinkVpc 创建基础网络互通}({@link AttachClassicLinkVpcRequest 请求参数}): {@link AttachClassicLinkVpcResponse 返回参数} */
  AttachClassicLinkVpc(data: AttachClassicLinkVpcRequest, config?: AxiosRequestConfig): AxiosPromise<AttachClassicLinkVpcResponse>;
  /** {@link AttachNetworkInterface 弹性网卡绑定云服务器}({@link AttachNetworkInterfaceRequest 请求参数}): {@link AttachNetworkInterfaceResponse 返回参数} */
  AttachNetworkInterface(data: AttachNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<AttachNetworkInterfaceResponse>;
  /** {@link AuditCrossBorderCompliance 合规化审批}({@link AuditCrossBorderComplianceRequest 请求参数}): {@link AuditCrossBorderComplianceResponse 返回参数} */
  AuditCrossBorderCompliance(data: AuditCrossBorderComplianceRequest, config?: AxiosRequestConfig): AxiosPromise<AuditCrossBorderComplianceResponse>;
  /** {@link CheckAssistantCidr 检查辅助CIDR冲突}({@link CheckAssistantCidrRequest 请求参数}): {@link CheckAssistantCidrResponse 返回参数} */
  CheckAssistantCidr(data: CheckAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAssistantCidrResponse>;
  /** {@link CheckDefaultSubnet 预判是否可建默认子网}({@link CheckDefaultSubnetRequest 请求参数}): {@link CheckDefaultSubnetResponse 返回参数} */
  CheckDefaultSubnet(data?: CheckDefaultSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDefaultSubnetResponse>;
  /** {@link CheckNetDetectState 验证网络探测}({@link CheckNetDetectStateRequest 请求参数}): {@link CheckNetDetectStateResponse 返回参数} */
  CheckNetDetectState(data: CheckNetDetectStateRequest, config?: AxiosRequestConfig): AxiosPromise<CheckNetDetectStateResponse>;
  /** {@link CloneSecurityGroup 克隆安全组}({@link CloneSecurityGroupRequest 请求参数}): {@link CloneSecurityGroupResponse 返回参数} */
  CloneSecurityGroup(data: CloneSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CloneSecurityGroupResponse>;
  /** {@link CreateAddressTemplate 创建IP地址模板}({@link CreateAddressTemplateRequest 请求参数}): {@link CreateAddressTemplateResponse 返回参数} */
  CreateAddressTemplate(data: CreateAddressTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAddressTemplateResponse>;
  /** {@link CreateAddressTemplateGroup 创建IP地址模板集合}({@link CreateAddressTemplateGroupRequest 请求参数}): {@link CreateAddressTemplateGroupResponse 返回参数} */
  CreateAddressTemplateGroup(data: CreateAddressTemplateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAddressTemplateGroupResponse>;
  /** {@link CreateAndAttachNetworkInterface 创建弹性网卡并绑定云服务器}({@link CreateAndAttachNetworkInterfaceRequest 请求参数}): {@link CreateAndAttachNetworkInterfaceResponse 返回参数} */
  CreateAndAttachNetworkInterface(data: CreateAndAttachNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndAttachNetworkInterfaceResponse>;
  /** {@link CreateAssistantCidr 创建辅助CIDR}({@link CreateAssistantCidrRequest 请求参数}): {@link CreateAssistantCidrResponse 返回参数} */
  CreateAssistantCidr(data: CreateAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssistantCidrResponse>;
  /** {@link CreateBandwidthPackage 创建共享带宽包}({@link CreateBandwidthPackageRequest 请求参数}): {@link CreateBandwidthPackageResponse 返回参数} */
  CreateBandwidthPackage(data?: CreateBandwidthPackageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBandwidthPackageResponse>;
  /** {@link CreateCcn 创建CCN}({@link CreateCcnRequest 请求参数}): {@link CreateCcnResponse 返回参数} */
  CreateCcn(data: CreateCcnRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCcnResponse>;
  /** {@link CreateCustomerGateway 创建对端网关}({@link CreateCustomerGatewayRequest 请求参数}): {@link CreateCustomerGatewayResponse 返回参数} */
  CreateCustomerGateway(data: CreateCustomerGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomerGatewayResponse>;
  /** {@link CreateDefaultSecurityGroup 创建默认安全组}({@link CreateDefaultSecurityGroupRequest 请求参数}): {@link CreateDefaultSecurityGroupResponse 返回参数} */
  CreateDefaultSecurityGroup(data?: CreateDefaultSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDefaultSecurityGroupResponse>;
  /** {@link CreateDefaultVpc 创建默认VPC和默认子网}({@link CreateDefaultVpcRequest 请求参数}): {@link CreateDefaultVpcResponse 返回参数} */
  CreateDefaultVpc(data?: CreateDefaultVpcRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDefaultVpcResponse>;
  /** {@link CreateDhcpIp 创建DhcpIp}({@link CreateDhcpIpRequest 请求参数}): {@link CreateDhcpIpResponse 返回参数} */
  CreateDhcpIp(data: CreateDhcpIpRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDhcpIpResponse>;
  /** {@link CreateDirectConnectGateway 创建专线网关}({@link CreateDirectConnectGatewayRequest 请求参数}): {@link CreateDirectConnectGatewayResponse 返回参数} */
  CreateDirectConnectGateway(data: CreateDirectConnectGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDirectConnectGatewayResponse>;
  /** {@link CreateDirectConnectGatewayCcnRoutes 创建专线网关云联网路由}({@link CreateDirectConnectGatewayCcnRoutesRequest 请求参数}): {@link CreateDirectConnectGatewayCcnRoutesResponse 返回参数} */
  CreateDirectConnectGatewayCcnRoutes(data: CreateDirectConnectGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDirectConnectGatewayCcnRoutesResponse>;
  /** {@link CreateFlowLog 创建流日志}({@link CreateFlowLogRequest 请求参数}): {@link CreateFlowLogResponse 返回参数} */
  CreateFlowLog(data: CreateFlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowLogResponse>;
  /** {@link CreateHaVip 创建HAVIP}({@link CreateHaVipRequest 请求参数}): {@link CreateHaVipResponse 返回参数} */
  CreateHaVip(data: CreateHaVipRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHaVipResponse>;
  /** {@link CreateIp6Translators 创建IPV6转换IPV4实例}({@link CreateIp6TranslatorsRequest 请求参数}): {@link CreateIp6TranslatorsResponse 返回参数} */
  CreateIp6Translators(data?: CreateIp6TranslatorsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIp6TranslatorsResponse>;
  /** {@link CreateLocalGateway 创建本地网关}({@link CreateLocalGatewayRequest 请求参数}): {@link CreateLocalGatewayResponse 返回参数} */
  CreateLocalGateway(data: CreateLocalGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLocalGatewayResponse>;
  /** {@link CreateNatGateway 创建NAT网关}({@link CreateNatGatewayRequest 请求参数}): {@link CreateNatGatewayResponse 返回参数} */
  CreateNatGateway(data: CreateNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatGatewayResponse>;
  /** {@link CreateNatGatewayDestinationIpPortTranslationNatRule 创建NAT网关端口转发规则}({@link CreateNatGatewayDestinationIpPortTranslationNatRuleRequest 请求参数}): {@link CreateNatGatewayDestinationIpPortTranslationNatRuleResponse 返回参数} */
  CreateNatGatewayDestinationIpPortTranslationNatRule(data: CreateNatGatewayDestinationIpPortTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatGatewayDestinationIpPortTranslationNatRuleResponse>;
  /** {@link CreateNatGatewaySourceIpTranslationNatRule 创建NAT网关SNAT规则}({@link CreateNatGatewaySourceIpTranslationNatRuleRequest 请求参数}): {@link CreateNatGatewaySourceIpTranslationNatRuleResponse 返回参数} */
  CreateNatGatewaySourceIpTranslationNatRule(data: CreateNatGatewaySourceIpTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatGatewaySourceIpTranslationNatRuleResponse>;
  /** {@link CreateNetDetect 创建网络探测}({@link CreateNetDetectRequest 请求参数}): {@link CreateNetDetectResponse 返回参数} */
  CreateNetDetect(data: CreateNetDetectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetDetectResponse>;
  /** {@link CreateNetworkAcl 创建网络ACL}({@link CreateNetworkAclRequest 请求参数}): {@link CreateNetworkAclResponse 返回参数} */
  CreateNetworkAcl(data: CreateNetworkAclRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkAclResponse>;
  /** {@link CreateNetworkAclQuintupleEntries 增量添加网络ACL五元组规则接口}({@link CreateNetworkAclQuintupleEntriesRequest 请求参数}): {@link CreateNetworkAclQuintupleEntriesResponse 返回参数} */
  CreateNetworkAclQuintupleEntries(data: CreateNetworkAclQuintupleEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkAclQuintupleEntriesResponse>;
  /** {@link CreateNetworkInterface 创建弹性网卡}({@link CreateNetworkInterfaceRequest 请求参数}): {@link CreateNetworkInterfaceResponse 返回参数} */
  CreateNetworkInterface(data: CreateNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkInterfaceResponse>;
  /** {@link CreateRouteTable 创建路由表}({@link CreateRouteTableRequest 请求参数}): {@link CreateRouteTableResponse 返回参数} */
  CreateRouteTable(data: CreateRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRouteTableResponse>;
  /** {@link CreateRoutes 创建路由策略}({@link CreateRoutesRequest 请求参数}): {@link CreateRoutesResponse 返回参数} */
  CreateRoutes(data: CreateRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoutesResponse>;
  /** {@link CreateSecurityGroup 创建安全组}({@link CreateSecurityGroupRequest 请求参数}): {@link CreateSecurityGroupResponse 返回参数} */
  CreateSecurityGroup(data: CreateSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupResponse>;
  /** {@link CreateSecurityGroupPolicies 安全组添加规则}({@link CreateSecurityGroupPoliciesRequest 请求参数}): {@link CreateSecurityGroupPoliciesResponse 返回参数} */
  CreateSecurityGroupPolicies(data: CreateSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupPoliciesResponse>;
  /** {@link CreateSecurityGroupWithPolicies 创建安全组和规则}({@link CreateSecurityGroupWithPoliciesRequest 请求参数}): {@link CreateSecurityGroupWithPoliciesResponse 返回参数} */
  CreateSecurityGroupWithPolicies(data: CreateSecurityGroupWithPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupWithPoliciesResponse>;
  /** {@link CreateServiceTemplate 创建协议端口模板}({@link CreateServiceTemplateRequest 请求参数}): {@link CreateServiceTemplateResponse 返回参数} */
  CreateServiceTemplate(data: CreateServiceTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceTemplateResponse>;
  /** {@link CreateServiceTemplateGroup 创建协议端口模板集合}({@link CreateServiceTemplateGroupRequest 请求参数}): {@link CreateServiceTemplateGroupResponse 返回参数} */
  CreateServiceTemplateGroup(data: CreateServiceTemplateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceTemplateGroupResponse>;
  /** {@link CreateSubnet 创建子网}({@link CreateSubnetRequest 请求参数}): {@link CreateSubnetResponse 返回参数} */
  CreateSubnet(data: CreateSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubnetResponse>;
  /** {@link CreateSubnets 批量创建子网}({@link CreateSubnetsRequest 请求参数}): {@link CreateSubnetsResponse 返回参数} */
  CreateSubnets(data: CreateSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubnetsResponse>;
  /** {@link CreateVpc 创建VPC}({@link CreateVpcRequest 请求参数}): {@link CreateVpcResponse 返回参数} */
  CreateVpc(data: CreateVpcRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcResponse>;
  /** {@link CreateVpcEndPoint 创建终端节点}({@link CreateVpcEndPointRequest 请求参数}): {@link CreateVpcEndPointResponse 返回参数} */
  CreateVpcEndPoint(data: CreateVpcEndPointRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcEndPointResponse>;
  /** {@link CreateVpcEndPointService 创建终端节点服务}({@link CreateVpcEndPointServiceRequest 请求参数}): {@link CreateVpcEndPointServiceResponse 返回参数} */
  CreateVpcEndPointService(data: CreateVpcEndPointServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcEndPointServiceResponse>;
  /** {@link CreateVpcEndPointServiceWhiteList 创建终端服务白名单}({@link CreateVpcEndPointServiceWhiteListRequest 请求参数}): {@link CreateVpcEndPointServiceWhiteListResponse 返回参数} */
  CreateVpcEndPointServiceWhiteList(data: CreateVpcEndPointServiceWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcEndPointServiceWhiteListResponse>;
  /** {@link CreateVpnConnection 创建VPN通道}({@link CreateVpnConnectionRequest 请求参数}): {@link CreateVpnConnectionResponse 返回参数} */
  CreateVpnConnection(data: CreateVpnConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnConnectionResponse>;
  /** {@link CreateVpnGateway 创建VPN网关}({@link CreateVpnGatewayRequest 请求参数}): {@link CreateVpnGatewayResponse 返回参数} */
  CreateVpnGateway(data: CreateVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnGatewayResponse>;
  /** {@link CreateVpnGatewayRoutes 创建VPN网关路由}({@link CreateVpnGatewayRoutesRequest 请求参数}): {@link CreateVpnGatewayRoutesResponse 返回参数} */
  CreateVpnGatewayRoutes(data: CreateVpnGatewayRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnGatewayRoutesResponse>;
  /** {@link CreateVpnGatewaySslClient 创建SSL-VPN-CLIENT}({@link CreateVpnGatewaySslClientRequest 请求参数}): {@link CreateVpnGatewaySslClientResponse 返回参数} */
  CreateVpnGatewaySslClient(data: CreateVpnGatewaySslClientRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnGatewaySslClientResponse>;
  /** {@link CreateVpnGatewaySslServer 创建SSL-VPN Server端}({@link CreateVpnGatewaySslServerRequest 请求参数}): {@link CreateVpnGatewaySslServerResponse 返回参数} */
  CreateVpnGatewaySslServer(data: CreateVpnGatewaySslServerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnGatewaySslServerResponse>;
  /** {@link DeleteAddressTemplate 删除IP地址模板}({@link DeleteAddressTemplateRequest 请求参数}): {@link DeleteAddressTemplateResponse 返回参数} */
  DeleteAddressTemplate(data: DeleteAddressTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAddressTemplateResponse>;
  /** {@link DeleteAddressTemplateGroup 删除IP地址模板集合}({@link DeleteAddressTemplateGroupRequest 请求参数}): {@link DeleteAddressTemplateGroupResponse 返回参数} */
  DeleteAddressTemplateGroup(data: DeleteAddressTemplateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAddressTemplateGroupResponse>;
  /** {@link DeleteAssistantCidr 删除辅助CIDR}({@link DeleteAssistantCidrRequest 请求参数}): {@link DeleteAssistantCidrResponse 返回参数} */
  DeleteAssistantCidr(data: DeleteAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAssistantCidrResponse>;
  /** {@link DeleteBandwidthPackage 删除共享带宽包}({@link DeleteBandwidthPackageRequest 请求参数}): {@link DeleteBandwidthPackageResponse 返回参数} */
  DeleteBandwidthPackage(data: DeleteBandwidthPackageRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBandwidthPackageResponse>;
  /** {@link DeleteCcn 删除CCN}({@link DeleteCcnRequest 请求参数}): {@link DeleteCcnResponse 返回参数} */
  DeleteCcn(data: DeleteCcnRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCcnResponse>;
  /** {@link DeleteCustomerGateway 删除对端网关}({@link DeleteCustomerGatewayRequest 请求参数}): {@link DeleteCustomerGatewayResponse 返回参数} */
  DeleteCustomerGateway(data: DeleteCustomerGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomerGatewayResponse>;
  /** {@link DeleteDhcpIp 删除DhcpIp}({@link DeleteDhcpIpRequest 请求参数}): {@link DeleteDhcpIpResponse 返回参数} */
  DeleteDhcpIp(data: DeleteDhcpIpRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDhcpIpResponse>;
  /** {@link DeleteDirectConnectGateway 删除专线网关}({@link DeleteDirectConnectGatewayRequest 请求参数}): {@link DeleteDirectConnectGatewayResponse 返回参数} */
  DeleteDirectConnectGateway(data: DeleteDirectConnectGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDirectConnectGatewayResponse>;
  /** {@link DeleteDirectConnectGatewayCcnRoutes 删除专线网关云联网路由}({@link DeleteDirectConnectGatewayCcnRoutesRequest 请求参数}): {@link DeleteDirectConnectGatewayCcnRoutesResponse 返回参数} */
  DeleteDirectConnectGatewayCcnRoutes(data: DeleteDirectConnectGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDirectConnectGatewayCcnRoutesResponse>;
  /** {@link DeleteFlowLog 删除流日志}({@link DeleteFlowLogRequest 请求参数}): {@link DeleteFlowLogResponse 返回参数} */
  DeleteFlowLog(data: DeleteFlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFlowLogResponse>;
  /** {@link DeleteHaVip 删除HAVIP}({@link DeleteHaVipRequest 请求参数}): {@link DeleteHaVipResponse 返回参数} */
  DeleteHaVip(data: DeleteHaVipRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHaVipResponse>;
  /** {@link DeleteIp6Translators 释放IPV6转换实例}({@link DeleteIp6TranslatorsRequest 请求参数}): {@link DeleteIp6TranslatorsResponse 返回参数} */
  DeleteIp6Translators(data: DeleteIp6TranslatorsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIp6TranslatorsResponse>;
  /** {@link DeleteLocalGateway 删除本地网关}({@link DeleteLocalGatewayRequest 请求参数}): {@link DeleteLocalGatewayResponse 返回参数} */
  DeleteLocalGateway(data: DeleteLocalGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLocalGatewayResponse>;
  /** {@link DeleteNatGateway 删除NAT网关}({@link DeleteNatGatewayRequest 请求参数}): {@link DeleteNatGatewayResponse 返回参数} */
  DeleteNatGateway(data: DeleteNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatGatewayResponse>;
  /** {@link DeleteNatGatewayDestinationIpPortTranslationNatRule 删除NAT网关端口转发规则}({@link DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest 请求参数}): {@link DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse 返回参数} */
  DeleteNatGatewayDestinationIpPortTranslationNatRule(data: DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse>;
  /** {@link DeleteNatGatewaySourceIpTranslationNatRule 删除NAT网关的SNAT转发规则}({@link DeleteNatGatewaySourceIpTranslationNatRuleRequest 请求参数}): {@link DeleteNatGatewaySourceIpTranslationNatRuleResponse 返回参数} */
  DeleteNatGatewaySourceIpTranslationNatRule(data: DeleteNatGatewaySourceIpTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatGatewaySourceIpTranslationNatRuleResponse>;
  /** {@link DeleteNetDetect 删除网络探测}({@link DeleteNetDetectRequest 请求参数}): {@link DeleteNetDetectResponse 返回参数} */
  DeleteNetDetect(data: DeleteNetDetectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetDetectResponse>;
  /** {@link DeleteNetworkAcl 删除网络ACL}({@link DeleteNetworkAclRequest 请求参数}): {@link DeleteNetworkAclResponse 返回参数} */
  DeleteNetworkAcl(data: DeleteNetworkAclRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkAclResponse>;
  /** {@link DeleteNetworkAclQuintupleEntries 删除网络ACL五元组指定的部分条目接口。}({@link DeleteNetworkAclQuintupleEntriesRequest 请求参数}): {@link DeleteNetworkAclQuintupleEntriesResponse 返回参数} */
  DeleteNetworkAclQuintupleEntries(data: DeleteNetworkAclQuintupleEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkAclQuintupleEntriesResponse>;
  /** {@link DeleteNetworkInterface 删除弹性网卡}({@link DeleteNetworkInterfaceRequest 请求参数}): {@link DeleteNetworkInterfaceResponse 返回参数} */
  DeleteNetworkInterface(data: DeleteNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkInterfaceResponse>;
  /** {@link DeleteRouteTable 删除路由表}({@link DeleteRouteTableRequest 请求参数}): {@link DeleteRouteTableResponse 返回参数} */
  DeleteRouteTable(data: DeleteRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRouteTableResponse>;
  /** {@link DeleteRoutes 删除路由策略}({@link DeleteRoutesRequest 请求参数}): {@link DeleteRoutesResponse 返回参数} */
  DeleteRoutes(data: DeleteRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoutesResponse>;
  /** {@link DeleteSecurityGroup 删除安全组}({@link DeleteSecurityGroupRequest 请求参数}): {@link DeleteSecurityGroupResponse 返回参数} */
  DeleteSecurityGroup(data: DeleteSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupResponse>;
  /** {@link DeleteSecurityGroupPolicies 删除安全组规则}({@link DeleteSecurityGroupPoliciesRequest 请求参数}): {@link DeleteSecurityGroupPoliciesResponse 返回参数} */
  DeleteSecurityGroupPolicies(data: DeleteSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupPoliciesResponse>;
  /** {@link DeleteServiceTemplate 删除协议端口模板}({@link DeleteServiceTemplateRequest 请求参数}): {@link DeleteServiceTemplateResponse 返回参数} */
  DeleteServiceTemplate(data: DeleteServiceTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceTemplateResponse>;
  /** {@link DeleteServiceTemplateGroup 删除协议端口模板集合}({@link DeleteServiceTemplateGroupRequest 请求参数}): {@link DeleteServiceTemplateGroupResponse 返回参数} */
  DeleteServiceTemplateGroup(data: DeleteServiceTemplateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceTemplateGroupResponse>;
  /** {@link DeleteSubnet 删除子网}({@link DeleteSubnetRequest 请求参数}): {@link DeleteSubnetResponse 返回参数} */
  DeleteSubnet(data: DeleteSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSubnetResponse>;
  /** {@link DeleteTemplateMember 删除模板对象成员}({@link DeleteTemplateMemberRequest 请求参数}): {@link DeleteTemplateMemberResponse 返回参数} */
  DeleteTemplateMember(data: DeleteTemplateMemberRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTemplateMemberResponse>;
  /** {@link DeleteVpc 删除VPC}({@link DeleteVpcRequest 请求参数}): {@link DeleteVpcResponse 返回参数} */
  DeleteVpc(data: DeleteVpcRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcResponse>;
  /** {@link DeleteVpcEndPoint 删除终端节点}({@link DeleteVpcEndPointRequest 请求参数}): {@link DeleteVpcEndPointResponse 返回参数} */
  DeleteVpcEndPoint(data: DeleteVpcEndPointRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcEndPointResponse>;
  /** {@link DeleteVpcEndPointService 删除终端节点服务}({@link DeleteVpcEndPointServiceRequest 请求参数}): {@link DeleteVpcEndPointServiceResponse 返回参数} */
  DeleteVpcEndPointService(data: DeleteVpcEndPointServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcEndPointServiceResponse>;
  /** {@link DeleteVpcEndPointServiceWhiteList 删除终端节点服务白名单}({@link DeleteVpcEndPointServiceWhiteListRequest 请求参数}): {@link DeleteVpcEndPointServiceWhiteListResponse 返回参数} */
  DeleteVpcEndPointServiceWhiteList(data: DeleteVpcEndPointServiceWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcEndPointServiceWhiteListResponse>;
  /** {@link DeleteVpnConnection 删除VPN通道}({@link DeleteVpnConnectionRequest 请求参数}): {@link DeleteVpnConnectionResponse 返回参数} */
  DeleteVpnConnection(data: DeleteVpnConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnConnectionResponse>;
  /** {@link DeleteVpnGateway 删除VPN网关}({@link DeleteVpnGatewayRequest 请求参数}): {@link DeleteVpnGatewayResponse 返回参数} */
  DeleteVpnGateway(data: DeleteVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnGatewayResponse>;
  /** {@link DeleteVpnGatewayRoutes 删除VPN网关路由}({@link DeleteVpnGatewayRoutesRequest 请求参数}): {@link DeleteVpnGatewayRoutesResponse 返回参数} */
  DeleteVpnGatewayRoutes(data: DeleteVpnGatewayRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnGatewayRoutesResponse>;
  /** {@link DeleteVpnGatewaySslClient 删除SSL-VPN-CLIENT}({@link DeleteVpnGatewaySslClientRequest 请求参数}): {@link DeleteVpnGatewaySslClientResponse 返回参数} */
  DeleteVpnGatewaySslClient(data: DeleteVpnGatewaySslClientRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnGatewaySslClientResponse>;
  /** {@link DeleteVpnGatewaySslServer 删除SSL-VPN-SERVER}({@link DeleteVpnGatewaySslServerRequest 请求参数}): {@link DeleteVpnGatewaySslServerResponse 返回参数} */
  DeleteVpnGatewaySslServer(data: DeleteVpnGatewaySslServerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnGatewaySslServerResponse>;
  /** {@link DescribeAccountAttributes 查询账户属性}({@link DescribeAccountAttributesRequest 请求参数}): {@link DescribeAccountAttributesResponse 返回参数} */
  DescribeAccountAttributes(data?: DescribeAccountAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountAttributesResponse>;
  /** {@link DescribeAddressQuota 查询弹性公网IP配额}({@link DescribeAddressQuotaRequest 请求参数}): {@link DescribeAddressQuotaResponse 返回参数} */
  DescribeAddressQuota(data?: DescribeAddressQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressQuotaResponse>;
  /** {@link DescribeAddressTemplateGroups 查询IP地址模板集合}({@link DescribeAddressTemplateGroupsRequest 请求参数}): {@link DescribeAddressTemplateGroupsResponse 返回参数} */
  DescribeAddressTemplateGroups(data?: DescribeAddressTemplateGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressTemplateGroupsResponse>;
  /** {@link DescribeAddressTemplates 查询IP地址模板}({@link DescribeAddressTemplatesRequest 请求参数}): {@link DescribeAddressTemplatesResponse 返回参数} */
  DescribeAddressTemplates(data?: DescribeAddressTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressTemplatesResponse>;
  /** {@link DescribeAddresses 查询弹性公网IP列表}({@link DescribeAddressesRequest 请求参数}): {@link DescribeAddressesResponse 返回参数} */
  DescribeAddresses(data?: DescribeAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressesResponse>;
  /** {@link DescribeAssistantCidr 查询辅助CIDR列表}({@link DescribeAssistantCidrRequest 请求参数}): {@link DescribeAssistantCidrResponse 返回参数} */
  DescribeAssistantCidr(data?: DescribeAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssistantCidrResponse>;
  /** {@link DescribeBandwidthPackageBillUsage 查询后付费共享带宽包当前的用量}({@link DescribeBandwidthPackageBillUsageRequest 请求参数}): {@link DescribeBandwidthPackageBillUsageResponse 返回参数} */
  DescribeBandwidthPackageBillUsage(data: DescribeBandwidthPackageBillUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBandwidthPackageBillUsageResponse>;
  /** {@link DescribeBandwidthPackageQuota 查询带宽包配额}({@link DescribeBandwidthPackageQuotaRequest 请求参数}): {@link DescribeBandwidthPackageQuotaResponse 返回参数} */
  DescribeBandwidthPackageQuota(data?: DescribeBandwidthPackageQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBandwidthPackageQuotaResponse>;
  /** {@link DescribeBandwidthPackageResources 查询共享带宽包内的资源}({@link DescribeBandwidthPackageResourcesRequest 请求参数}): {@link DescribeBandwidthPackageResourcesResponse 返回参数} */
  DescribeBandwidthPackageResources(data: DescribeBandwidthPackageResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBandwidthPackageResourcesResponse>;
  /** {@link DescribeBandwidthPackages 查询带宽包资源}({@link DescribeBandwidthPackagesRequest 请求参数}): {@link DescribeBandwidthPackagesResponse 返回参数} */
  DescribeBandwidthPackages(data?: DescribeBandwidthPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBandwidthPackagesResponse>;
  /** {@link DescribeCcnAttachedInstances 查询云联网关联实例列表}({@link DescribeCcnAttachedInstancesRequest 请求参数}): {@link DescribeCcnAttachedInstancesResponse 返回参数} */
  DescribeCcnAttachedInstances(data?: DescribeCcnAttachedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnAttachedInstancesResponse>;
  /** {@link DescribeCcnRegionBandwidthLimits 查询云联网各地域出带宽上限}({@link DescribeCcnRegionBandwidthLimitsRequest 请求参数}): {@link DescribeCcnRegionBandwidthLimitsResponse 返回参数} */
  DescribeCcnRegionBandwidthLimits(data: DescribeCcnRegionBandwidthLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnRegionBandwidthLimitsResponse>;
  /** {@link DescribeCcnRoutes 查询云联网路由策略}({@link DescribeCcnRoutesRequest 请求参数}): {@link DescribeCcnRoutesResponse 返回参数} */
  DescribeCcnRoutes(data: DescribeCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnRoutesResponse>;
  /** {@link DescribeCcns 查询CCN列表}({@link DescribeCcnsRequest 请求参数}): {@link DescribeCcnsResponse 返回参数} */
  DescribeCcns(data?: DescribeCcnsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnsResponse>;
  /** {@link DescribeClassicLinkInstances 查询基础网络互通列表}({@link DescribeClassicLinkInstancesRequest 请求参数}): {@link DescribeClassicLinkInstancesResponse 返回参数} */
  DescribeClassicLinkInstances(data?: DescribeClassicLinkInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClassicLinkInstancesResponse>;
  /** {@link DescribeCrossBorderCcnRegionBandwidthLimits 查询云联网跨境限速实例}({@link DescribeCrossBorderCcnRegionBandwidthLimitsRequest 请求参数}): {@link DescribeCrossBorderCcnRegionBandwidthLimitsResponse 返回参数} */
  DescribeCrossBorderCcnRegionBandwidthLimits(data?: DescribeCrossBorderCcnRegionBandwidthLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderCcnRegionBandwidthLimitsResponse>;
  /** {@link DescribeCrossBorderCompliance 查询合规化审批单}({@link DescribeCrossBorderComplianceRequest 请求参数}): {@link DescribeCrossBorderComplianceResponse 返回参数} */
  DescribeCrossBorderCompliance(data?: DescribeCrossBorderComplianceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderComplianceResponse>;
  /** {@link DescribeCrossBorderFlowMonitor 查询跨境带宽监控数据}({@link DescribeCrossBorderFlowMonitorRequest 请求参数}): {@link DescribeCrossBorderFlowMonitorResponse 返回参数} */
  DescribeCrossBorderFlowMonitor(data: DescribeCrossBorderFlowMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderFlowMonitorResponse>;
  /** {@link DescribeCustomerGatewayVendors 查询可支持的对端网关厂商信息}({@link DescribeCustomerGatewayVendorsRequest 请求参数}): {@link DescribeCustomerGatewayVendorsResponse 返回参数} */
  DescribeCustomerGatewayVendors(data?: DescribeCustomerGatewayVendorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomerGatewayVendorsResponse>;
  /** {@link DescribeCustomerGateways 查询对端网关}({@link DescribeCustomerGatewaysRequest 请求参数}): {@link DescribeCustomerGatewaysResponse 返回参数} */
  DescribeCustomerGateways(data?: DescribeCustomerGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomerGatewaysResponse>;
  /** {@link DescribeDhcpIps 查询DhcpIp列表}({@link DescribeDhcpIpsRequest 请求参数}): {@link DescribeDhcpIpsResponse 返回参数} */
  DescribeDhcpIps(data?: DescribeDhcpIpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDhcpIpsResponse>;
  /** {@link DescribeDirectConnectGatewayCcnRoutes 查询专线网关云联网路由}({@link DescribeDirectConnectGatewayCcnRoutesRequest 请求参数}): {@link DescribeDirectConnectGatewayCcnRoutesResponse 返回参数} */
  DescribeDirectConnectGatewayCcnRoutes(data: DescribeDirectConnectGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDirectConnectGatewayCcnRoutesResponse>;
  /** {@link DescribeDirectConnectGateways 查询专线网关}({@link DescribeDirectConnectGatewaysRequest 请求参数}): {@link DescribeDirectConnectGatewaysResponse 返回参数} */
  DescribeDirectConnectGateways(data?: DescribeDirectConnectGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDirectConnectGatewaysResponse>;
  /** {@link DescribeFlowLog 查询流日志实例信息}({@link DescribeFlowLogRequest 请求参数}): {@link DescribeFlowLogResponse 返回参数} */
  DescribeFlowLog(data: DescribeFlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowLogResponse>;
  /** {@link DescribeFlowLogs 查询流日志集合}({@link DescribeFlowLogsRequest 请求参数}): {@link DescribeFlowLogsResponse 返回参数} */
  DescribeFlowLogs(data?: DescribeFlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowLogsResponse>;
  /** {@link DescribeGatewayFlowMonitorDetail 查询网关流量监控明细}({@link DescribeGatewayFlowMonitorDetailRequest 请求参数}): {@link DescribeGatewayFlowMonitorDetailResponse 返回参数} */
  DescribeGatewayFlowMonitorDetail(data: DescribeGatewayFlowMonitorDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayFlowMonitorDetailResponse>;
  /** {@link DescribeGatewayFlowQos 查询网关来访IP流控带宽}({@link DescribeGatewayFlowQosRequest 请求参数}): {@link DescribeGatewayFlowQosResponse 返回参数} */
  DescribeGatewayFlowQos(data: DescribeGatewayFlowQosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayFlowQosResponse>;
  /** {@link DescribeHaVips 查询HAVIP列表}({@link DescribeHaVipsRequest 请求参数}): {@link DescribeHaVipsResponse 返回参数} */
  DescribeHaVips(data?: DescribeHaVipsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHaVipsResponse>;
  /** {@link DescribeIp6Addresses 查询IPV6地址信息}({@link DescribeIp6AddressesRequest 请求参数}): {@link DescribeIp6AddressesResponse 返回参数} */
  DescribeIp6Addresses(data?: DescribeIp6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIp6AddressesResponse>;
  /** {@link DescribeIp6TranslatorQuota 查询账户在指定地域IPV6转换实例和规则的配额}({@link DescribeIp6TranslatorQuotaRequest 请求参数}): {@link DescribeIp6TranslatorQuotaResponse 返回参数} */
  DescribeIp6TranslatorQuota(data?: DescribeIp6TranslatorQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIp6TranslatorQuotaResponse>;
  /** {@link DescribeIp6Translators 查询IPV6转换实例及其绑定规则信息}({@link DescribeIp6TranslatorsRequest 请求参数}): {@link DescribeIp6TranslatorsResponse 返回参数} */
  DescribeIp6Translators(data?: DescribeIp6TranslatorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIp6TranslatorsResponse>;
  /** {@link DescribeIpGeolocationDatabaseUrl 获取IP地理位置库下载链接}({@link DescribeIpGeolocationDatabaseUrlRequest 请求参数}): {@link DescribeIpGeolocationDatabaseUrlResponse 返回参数} */
  DescribeIpGeolocationDatabaseUrl(data: DescribeIpGeolocationDatabaseUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpGeolocationDatabaseUrlResponse>;
  /** {@link DescribeIpGeolocationInfos 查询IP地理位置信息}({@link DescribeIpGeolocationInfosRequest 请求参数}): {@link DescribeIpGeolocationInfosResponse 返回参数} */
  DescribeIpGeolocationInfos(data: DescribeIpGeolocationInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpGeolocationInfosResponse>;
  /** {@link DescribeLocalGateway 查询本地网关}({@link DescribeLocalGatewayRequest 请求参数}): {@link DescribeLocalGatewayResponse 返回参数} */
  DescribeLocalGateway(data?: DescribeLocalGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLocalGatewayResponse>;
  /** {@link DescribeNatGatewayDestinationIpPortTranslationNatRules 查询NAT网关端口转发规则}({@link DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest 请求参数}): {@link DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse 返回参数} */
  DescribeNatGatewayDestinationIpPortTranslationNatRules(data?: DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse>;
  /** {@link DescribeNatGatewayDirectConnectGatewayRoute 查询专线绑定NAT路由}({@link DescribeNatGatewayDirectConnectGatewayRouteRequest 请求参数}): {@link DescribeNatGatewayDirectConnectGatewayRouteResponse 返回参数} */
  DescribeNatGatewayDirectConnectGatewayRoute(data: DescribeNatGatewayDirectConnectGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatGatewayDirectConnectGatewayRouteResponse>;
  /** {@link DescribeNatGatewaySourceIpTranslationNatRules 查询NAT网关SNAT转发规则}({@link DescribeNatGatewaySourceIpTranslationNatRulesRequest 请求参数}): {@link DescribeNatGatewaySourceIpTranslationNatRulesResponse 返回参数} */
  DescribeNatGatewaySourceIpTranslationNatRules(data: DescribeNatGatewaySourceIpTranslationNatRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatGatewaySourceIpTranslationNatRulesResponse>;
  /** {@link DescribeNatGateways 查询NAT网关}({@link DescribeNatGatewaysRequest 请求参数}): {@link DescribeNatGatewaysResponse 返回参数} */
  DescribeNatGateways(data?: DescribeNatGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatGatewaysResponse>;
  /** {@link DescribeNetDetectStates 查询网络探测验证结果列表}({@link DescribeNetDetectStatesRequest 请求参数}): {@link DescribeNetDetectStatesResponse 返回参数} */
  DescribeNetDetectStates(data?: DescribeNetDetectStatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetDetectStatesResponse>;
  /** {@link DescribeNetDetects 查询网络探测列表}({@link DescribeNetDetectsRequest 请求参数}): {@link DescribeNetDetectsResponse 返回参数} */
  DescribeNetDetects(data?: DescribeNetDetectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetDetectsResponse>;
  /** {@link DescribeNetworkAclQuintupleEntries 分页查询网络ACL五元组条目列表}({@link DescribeNetworkAclQuintupleEntriesRequest 请求参数}): {@link DescribeNetworkAclQuintupleEntriesResponse 返回参数} */
  DescribeNetworkAclQuintupleEntries(data: DescribeNetworkAclQuintupleEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkAclQuintupleEntriesResponse>;
  /** {@link DescribeNetworkAcls 查询网络ACL列表}({@link DescribeNetworkAclsRequest 请求参数}): {@link DescribeNetworkAclsResponse 返回参数} */
  DescribeNetworkAcls(data?: DescribeNetworkAclsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkAclsResponse>;
  /** {@link DescribeNetworkInterfaceLimit 查询弹性网卡配额}({@link DescribeNetworkInterfaceLimitRequest 请求参数}): {@link DescribeNetworkInterfaceLimitResponse 返回参数} */
  DescribeNetworkInterfaceLimit(data: DescribeNetworkInterfaceLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkInterfaceLimitResponse>;
  /** {@link DescribeNetworkInterfaces 查询弹性网卡列表}({@link DescribeNetworkInterfacesRequest 请求参数}): {@link DescribeNetworkInterfacesResponse 返回参数} */
  DescribeNetworkInterfaces(data?: DescribeNetworkInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkInterfacesResponse>;
  /** {@link DescribeProductQuota 查询网络产品配额信息}({@link DescribeProductQuotaRequest 请求参数}): {@link DescribeProductQuotaResponse 返回参数} */
  DescribeProductQuota(data: DescribeProductQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductQuotaResponse>;
  /** {@link DescribeRouteConflicts 查询路由策略冲突列表}({@link DescribeRouteConflictsRequest 请求参数}): {@link DescribeRouteConflictsResponse 返回参数} */
  DescribeRouteConflicts(data: DescribeRouteConflictsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteConflictsResponse>;
  /** {@link DescribeRouteTables 查询路由列表}({@link DescribeRouteTablesRequest 请求参数}): {@link DescribeRouteTablesResponse 返回参数} */
  DescribeRouteTables(data?: DescribeRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteTablesResponse>;
  /** {@link DescribeSecurityGroupAssociationStatistics 查询安全组关联实例统计}({@link DescribeSecurityGroupAssociationStatisticsRequest 请求参数}): {@link DescribeSecurityGroupAssociationStatisticsResponse 返回参数} */
  DescribeSecurityGroupAssociationStatistics(data: DescribeSecurityGroupAssociationStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupAssociationStatisticsResponse>;
  /** {@link DescribeSecurityGroupLimits 查询用户安全组配额}({@link DescribeSecurityGroupLimitsRequest 请求参数}): {@link DescribeSecurityGroupLimitsResponse 返回参数} */
  DescribeSecurityGroupLimits(data?: DescribeSecurityGroupLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupLimitsResponse>;
  /** {@link DescribeSecurityGroupPolicies 查询安全组规则}({@link DescribeSecurityGroupPoliciesRequest 请求参数}): {@link DescribeSecurityGroupPoliciesResponse 返回参数} */
  DescribeSecurityGroupPolicies(data: DescribeSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupPoliciesResponse>;
  /** {@link DescribeSecurityGroupReferences 查询安全组被引用信息}({@link DescribeSecurityGroupReferencesRequest 请求参数}): {@link DescribeSecurityGroupReferencesResponse 返回参数} */
  DescribeSecurityGroupReferences(data: DescribeSecurityGroupReferencesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupReferencesResponse>;
  /** {@link DescribeSecurityGroups 查看安全组}({@link DescribeSecurityGroupsRequest 请求参数}): {@link DescribeSecurityGroupsResponse 返回参数} */
  DescribeSecurityGroups(data?: DescribeSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupsResponse>;
  /** {@link DescribeServiceTemplateGroups 查询协议端口模板集合}({@link DescribeServiceTemplateGroupsRequest 请求参数}): {@link DescribeServiceTemplateGroupsResponse 返回参数} */
  DescribeServiceTemplateGroups(data?: DescribeServiceTemplateGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceTemplateGroupsResponse>;
  /** {@link DescribeServiceTemplates 查询协议端口模板}({@link DescribeServiceTemplatesRequest 请求参数}): {@link DescribeServiceTemplatesResponse 返回参数} */
  DescribeServiceTemplates(data?: DescribeServiceTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceTemplatesResponse>;
  /** {@link DescribeSubnets 查询子网列表}({@link DescribeSubnetsRequest 请求参数}): {@link DescribeSubnetsResponse 返回参数} */
  DescribeSubnets(data?: DescribeSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetsResponse>;
  /** {@link DescribeTaskResult 查询异步任务执行结果}({@link DescribeTaskResultRequest 请求参数}): {@link DescribeTaskResultResponse 返回参数} */
  DescribeTaskResult(data?: DescribeTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResultResponse>;
  /** {@link DescribeTemplateLimits 查询参数模板配额列表}({@link DescribeTemplateLimitsRequest 请求参数}): {@link DescribeTemplateLimitsResponse 返回参数} */
  DescribeTemplateLimits(data?: DescribeTemplateLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplateLimitsResponse>;
  /** {@link DescribeTenantCcns 查询租户云联网实例}({@link DescribeTenantCcnsRequest 请求参数}): {@link DescribeTenantCcnsResponse 返回参数} */
  DescribeTenantCcns(data?: DescribeTenantCcnsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTenantCcnsResponse>;
  /** {@link DescribeTrafficPackages 查询共享流量包}({@link DescribeTrafficPackagesRequest 请求参数}): {@link DescribeTrafficPackagesResponse 返回参数} */
  DescribeTrafficPackages(data?: DescribeTrafficPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrafficPackagesResponse>;
  /** {@link DescribeVpcEndPoint 查询终端节点列表}({@link DescribeVpcEndPointRequest 请求参数}): {@link DescribeVpcEndPointResponse 返回参数} */
  DescribeVpcEndPoint(data?: DescribeVpcEndPointRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcEndPointResponse>;
  /** {@link DescribeVpcEndPointService 查询终端节点服务列表}({@link DescribeVpcEndPointServiceRequest 请求参数}): {@link DescribeVpcEndPointServiceResponse 返回参数} */
  DescribeVpcEndPointService(data?: DescribeVpcEndPointServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcEndPointServiceResponse>;
  /** {@link DescribeVpcEndPointServiceWhiteList 查询终端节点服务的服务白名单列表}({@link DescribeVpcEndPointServiceWhiteListRequest 请求参数}): {@link DescribeVpcEndPointServiceWhiteListResponse 返回参数} */
  DescribeVpcEndPointServiceWhiteList(data?: DescribeVpcEndPointServiceWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcEndPointServiceWhiteListResponse>;
  /** {@link DescribeVpcInstances 查询VPC下的云主机实例列表}({@link DescribeVpcInstancesRequest 请求参数}): {@link DescribeVpcInstancesResponse 返回参数} */
  DescribeVpcInstances(data: DescribeVpcInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcInstancesResponse>;
  /** {@link DescribeVpcIpv6Addresses 查询VPC内IPv6列表}({@link DescribeVpcIpv6AddressesRequest 请求参数}): {@link DescribeVpcIpv6AddressesResponse 返回参数} */
  DescribeVpcIpv6Addresses(data: DescribeVpcIpv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcIpv6AddressesResponse>;
  /** {@link DescribeVpcLimits 获取私有网络配额}({@link DescribeVpcLimitsRequest 请求参数}): {@link DescribeVpcLimitsResponse 返回参数} */
  DescribeVpcLimits(data: DescribeVpcLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcLimitsResponse>;
  /** {@link DescribeVpcPrivateIpAddresses 查询VPC内网IP信息}({@link DescribeVpcPrivateIpAddressesRequest 请求参数}): {@link DescribeVpcPrivateIpAddressesResponse 返回参数} */
  DescribeVpcPrivateIpAddresses(data: DescribeVpcPrivateIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcPrivateIpAddressesResponse>;
  /** {@link DescribeVpcResourceDashboard 查看VPC资源信息}({@link DescribeVpcResourceDashboardRequest 请求参数}): {@link DescribeVpcResourceDashboardResponse 返回参数} */
  DescribeVpcResourceDashboard(data: DescribeVpcResourceDashboardRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcResourceDashboardResponse>;
  /** {@link DescribeVpcTaskResult 查询VPC异步任务执行结果}({@link DescribeVpcTaskResultRequest 请求参数}): {@link DescribeVpcTaskResultResponse 返回参数} */
  DescribeVpcTaskResult(data: DescribeVpcTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcTaskResultResponse>;
  /** {@link DescribeVpcs 查询VPC列表}({@link DescribeVpcsRequest 请求参数}): {@link DescribeVpcsResponse 返回参数} */
  DescribeVpcs(data?: DescribeVpcsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcsResponse>;
  /** {@link DescribeVpnConnections 查询VPN通道列表}({@link DescribeVpnConnectionsRequest 请求参数}): {@link DescribeVpnConnectionsResponse 返回参数} */
  DescribeVpnConnections(data?: DescribeVpnConnectionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnConnectionsResponse>;
  /** {@link DescribeVpnGatewayCcnRoutes 查询VPN网关云联网路由}({@link DescribeVpnGatewayCcnRoutesRequest 请求参数}): {@link DescribeVpnGatewayCcnRoutesResponse 返回参数} */
  DescribeVpnGatewayCcnRoutes(data: DescribeVpnGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewayCcnRoutesResponse>;
  /** {@link DescribeVpnGatewayRoutes 查询VPN网关路由}({@link DescribeVpnGatewayRoutesRequest 请求参数}): {@link DescribeVpnGatewayRoutesResponse 返回参数} */
  DescribeVpnGatewayRoutes(data: DescribeVpnGatewayRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewayRoutesResponse>;
  /** {@link DescribeVpnGatewaySslClients 查询SSL-VPN-CLIENT 列表}({@link DescribeVpnGatewaySslClientsRequest 请求参数}): {@link DescribeVpnGatewaySslClientsResponse 返回参数} */
  DescribeVpnGatewaySslClients(data?: DescribeVpnGatewaySslClientsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewaySslClientsResponse>;
  /** {@link DescribeVpnGatewaySslServers 查询SSL-VPN SERVER 列表}({@link DescribeVpnGatewaySslServersRequest 请求参数}): {@link DescribeVpnGatewaySslServersResponse 返回参数} */
  DescribeVpnGatewaySslServers(data?: DescribeVpnGatewaySslServersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewaySslServersResponse>;
  /** {@link DescribeVpnGateways 查询VPN网关}({@link DescribeVpnGatewaysRequest 请求参数}): {@link DescribeVpnGatewaysResponse 返回参数} */
  DescribeVpnGateways(data?: DescribeVpnGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewaysResponse>;
  /** {@link DetachCcnInstances 云联网解关联实例}({@link DetachCcnInstancesRequest 请求参数}): {@link DetachCcnInstancesResponse 返回参数} */
  DetachCcnInstances(data: DetachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DetachCcnInstancesResponse>;
  /** {@link DetachClassicLinkVpc 删除基础网络互通}({@link DetachClassicLinkVpcRequest 请求参数}): {@link DetachClassicLinkVpcResponse 返回参数} */
  DetachClassicLinkVpc(data: DetachClassicLinkVpcRequest, config?: AxiosRequestConfig): AxiosPromise<DetachClassicLinkVpcResponse>;
  /** {@link DetachNetworkInterface 弹性网卡解绑云服务器}({@link DetachNetworkInterfaceRequest 请求参数}): {@link DetachNetworkInterfaceResponse 返回参数} */
  DetachNetworkInterface(data: DetachNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<DetachNetworkInterfaceResponse>;
  /** {@link DisableCcnRoutes 禁用云联网路由}({@link DisableCcnRoutesRequest 请求参数}): {@link DisableCcnRoutesResponse 返回参数} */
  DisableCcnRoutes(data: DisableCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DisableCcnRoutesResponse>;
  /** {@link DisableFlowLogs 停止流日志}({@link DisableFlowLogsRequest 请求参数}): {@link DisableFlowLogsResponse 返回参数} */
  DisableFlowLogs(data: DisableFlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DisableFlowLogsResponse>;
  /** {@link DisableGatewayFlowMonitor 关闭网关流量监控}({@link DisableGatewayFlowMonitorRequest 请求参数}): {@link DisableGatewayFlowMonitorResponse 返回参数} */
  DisableGatewayFlowMonitor(data: DisableGatewayFlowMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DisableGatewayFlowMonitorResponse>;
  /** {@link DisableRoutes 禁用子网路由}({@link DisableRoutesRequest 请求参数}): {@link DisableRoutesResponse 返回参数} */
  DisableRoutes(data: DisableRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DisableRoutesResponse>;
  /** {@link DisableVpnGatewaySslClientCert 禁用SSL-VPN-CLIENT 证书}({@link DisableVpnGatewaySslClientCertRequest 请求参数}): {@link DisableVpnGatewaySslClientCertResponse 返回参数} */
  DisableVpnGatewaySslClientCert(data: DisableVpnGatewaySslClientCertRequest, config?: AxiosRequestConfig): AxiosPromise<DisableVpnGatewaySslClientCertResponse>;
  /** {@link DisassociateAddress 解绑定弹性公网IP}({@link DisassociateAddressRequest 请求参数}): {@link DisassociateAddressResponse 返回参数} */
  DisassociateAddress(data: DisassociateAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateAddressResponse>;
  /** {@link DisassociateDhcpIpWithAddressIp DhcpIp解绑EIP}({@link DisassociateDhcpIpWithAddressIpRequest 请求参数}): {@link DisassociateDhcpIpWithAddressIpResponse 返回参数} */
  DisassociateDhcpIpWithAddressIp(data: DisassociateDhcpIpWithAddressIpRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateDhcpIpWithAddressIpResponse>;
  /** {@link DisassociateDirectConnectGatewayNatGateway 专线网关解绑NAT网关}({@link DisassociateDirectConnectGatewayNatGatewayRequest 请求参数}): {@link DisassociateDirectConnectGatewayNatGatewayResponse 返回参数} */
  DisassociateDirectConnectGatewayNatGateway(data: DisassociateDirectConnectGatewayNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateDirectConnectGatewayNatGatewayResponse>;
  /** {@link DisassociateNatGatewayAddress NAT网关解绑弹性IP}({@link DisassociateNatGatewayAddressRequest 请求参数}): {@link DisassociateNatGatewayAddressResponse 返回参数} */
  DisassociateNatGatewayAddress(data: DisassociateNatGatewayAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateNatGatewayAddressResponse>;
  /** {@link DisassociateNetworkAclSubnets 网络ACL解关联子网}({@link DisassociateNetworkAclSubnetsRequest 请求参数}): {@link DisassociateNetworkAclSubnetsResponse 返回参数} */
  DisassociateNetworkAclSubnets(data: DisassociateNetworkAclSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateNetworkAclSubnetsResponse>;
  /** {@link DisassociateNetworkInterfaceSecurityGroups 弹性网卡解绑安全组}({@link DisassociateNetworkInterfaceSecurityGroupsRequest 请求参数}): {@link DisassociateNetworkInterfaceSecurityGroupsResponse 返回参数} */
  DisassociateNetworkInterfaceSecurityGroups(data: DisassociateNetworkInterfaceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateNetworkInterfaceSecurityGroupsResponse>;
  /** {@link DisassociateVpcEndPointSecurityGroups 终端节点解绑安全组}({@link DisassociateVpcEndPointSecurityGroupsRequest 请求参数}): {@link DisassociateVpcEndPointSecurityGroupsResponse 返回参数} */
  DisassociateVpcEndPointSecurityGroups(data: DisassociateVpcEndPointSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateVpcEndPointSecurityGroupsResponse>;
  /** {@link DownloadCustomerGatewayConfiguration 下载VPN通道配置}({@link DownloadCustomerGatewayConfigurationRequest 请求参数}): {@link DownloadCustomerGatewayConfigurationResponse 返回参数} */
  DownloadCustomerGatewayConfiguration(data: DownloadCustomerGatewayConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadCustomerGatewayConfigurationResponse>;
  /** {@link DownloadVpnGatewaySslClientCert 下载SSL-VPN-CLIENT 客户端证书}({@link DownloadVpnGatewaySslClientCertRequest 请求参数}): {@link DownloadVpnGatewaySslClientCertResponse 返回参数} */
  DownloadVpnGatewaySslClientCert(data: DownloadVpnGatewaySslClientCertRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadVpnGatewaySslClientCertResponse>;
  /** {@link EnableCcnRoutes 启用云联网路由}({@link EnableCcnRoutesRequest 请求参数}): {@link EnableCcnRoutesResponse 返回参数} */
  EnableCcnRoutes(data: EnableCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<EnableCcnRoutesResponse>;
  /** {@link EnableFlowLogs 启动流日志}({@link EnableFlowLogsRequest 请求参数}): {@link EnableFlowLogsResponse 返回参数} */
  EnableFlowLogs(data: EnableFlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<EnableFlowLogsResponse>;
  /** {@link EnableGatewayFlowMonitor 开启网关流量监控}({@link EnableGatewayFlowMonitorRequest 请求参数}): {@link EnableGatewayFlowMonitorResponse 返回参数} */
  EnableGatewayFlowMonitor(data: EnableGatewayFlowMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<EnableGatewayFlowMonitorResponse>;
  /** {@link EnableRoutes 启用子网路由}({@link EnableRoutesRequest 请求参数}): {@link EnableRoutesResponse 返回参数} */
  EnableRoutes(data: EnableRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<EnableRoutesResponse>;
  /** {@link EnableVpcEndPointConnect 是否接受终端节点连接请求}({@link EnableVpcEndPointConnectRequest 请求参数}): {@link EnableVpcEndPointConnectResponse 返回参数} */
  EnableVpcEndPointConnect(data: EnableVpcEndPointConnectRequest, config?: AxiosRequestConfig): AxiosPromise<EnableVpcEndPointConnectResponse>;
  /** {@link EnableVpnGatewaySslClientCert 启用SSL-VPN-CLIENT 证书}({@link EnableVpnGatewaySslClientCertRequest 请求参数}): {@link EnableVpnGatewaySslClientCertResponse 返回参数} */
  EnableVpnGatewaySslClientCert(data: EnableVpnGatewaySslClientCertRequest, config?: AxiosRequestConfig): AxiosPromise<EnableVpnGatewaySslClientCertResponse>;
  /** {@link GetCcnRegionBandwidthLimits 查询云联网相关地域带宽信息}({@link GetCcnRegionBandwidthLimitsRequest 请求参数}): {@link GetCcnRegionBandwidthLimitsResponse 返回参数} */
  GetCcnRegionBandwidthLimits(data: GetCcnRegionBandwidthLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<GetCcnRegionBandwidthLimitsResponse>;
  /** {@link HaVipAssociateAddressIp HAVIP绑定EIP}({@link HaVipAssociateAddressIpRequest 请求参数}): {@link HaVipAssociateAddressIpResponse 返回参数} */
  HaVipAssociateAddressIp(data: HaVipAssociateAddressIpRequest, config?: AxiosRequestConfig): AxiosPromise<HaVipAssociateAddressIpResponse>;
  /** {@link HaVipDisassociateAddressIp HAVIP解绑EIP}({@link HaVipDisassociateAddressIpRequest 请求参数}): {@link HaVipDisassociateAddressIpResponse 返回参数} */
  HaVipDisassociateAddressIp(data: HaVipDisassociateAddressIpRequest, config?: AxiosRequestConfig): AxiosPromise<HaVipDisassociateAddressIpResponse>;
  /** {@link InquirePriceCreateDirectConnectGateway 创建专线网关询价}({@link InquirePriceCreateDirectConnectGatewayRequest 请求参数}): {@link InquirePriceCreateDirectConnectGatewayResponse 返回参数} */
  InquirePriceCreateDirectConnectGateway(data?: InquirePriceCreateDirectConnectGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateDirectConnectGatewayResponse>;
  /** {@link InquiryPriceCreateVpnGateway 创建VPN网关询价}({@link InquiryPriceCreateVpnGatewayRequest 请求参数}): {@link InquiryPriceCreateVpnGatewayResponse 返回参数} */
  InquiryPriceCreateVpnGateway(data: InquiryPriceCreateVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceCreateVpnGatewayResponse>;
  /** {@link InquiryPriceRenewVpnGateway 续费VPN网关询价}({@link InquiryPriceRenewVpnGatewayRequest 请求参数}): {@link InquiryPriceRenewVpnGatewayResponse 返回参数} */
  InquiryPriceRenewVpnGateway(data: InquiryPriceRenewVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewVpnGatewayResponse>;
  /** {@link InquiryPriceResetVpnGatewayInternetMaxBandwidth 调整VPN网关带宽上限询价}({@link InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest 请求参数}): {@link InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse 返回参数} */
  InquiryPriceResetVpnGatewayInternetMaxBandwidth(data: InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse>;
  /** {@link LockCcnBandwidths 安全锁定云联网带宽}({@link LockCcnBandwidthsRequest 请求参数}): {@link LockCcnBandwidthsResponse 返回参数} */
  LockCcnBandwidths(data?: LockCcnBandwidthsRequest, config?: AxiosRequestConfig): AxiosPromise<LockCcnBandwidthsResponse>;
  /** {@link LockCcns 安全锁定云联网实例}({@link LockCcnsRequest 请求参数}): {@link LockCcnsResponse 返回参数} */
  LockCcns(data?: LockCcnsRequest, config?: AxiosRequestConfig): AxiosPromise<LockCcnsResponse>;
  /** {@link MigrateNetworkInterface 弹性网卡迁移}({@link MigrateNetworkInterfaceRequest 请求参数}): {@link MigrateNetworkInterfaceResponse 返回参数} */
  MigrateNetworkInterface(data: MigrateNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<MigrateNetworkInterfaceResponse>;
  /** {@link MigratePrivateIpAddress 弹性网卡内网IP迁移}({@link MigratePrivateIpAddressRequest 请求参数}): {@link MigratePrivateIpAddressResponse 返回参数} */
  MigratePrivateIpAddress(data: MigratePrivateIpAddressRequest, config?: AxiosRequestConfig): AxiosPromise<MigratePrivateIpAddressResponse>;
  /** {@link ModifyAddressAttribute 修改弹性公网IP属性}({@link ModifyAddressAttributeRequest 请求参数}): {@link ModifyAddressAttributeResponse 返回参数} */
  ModifyAddressAttribute(data: ModifyAddressAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressAttributeResponse>;
  /** {@link ModifyAddressInternetChargeType 调整弹性公网ip计费模式}({@link ModifyAddressInternetChargeTypeRequest 请求参数}): {@link ModifyAddressInternetChargeTypeResponse 返回参数} */
  ModifyAddressInternetChargeType(data: ModifyAddressInternetChargeTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressInternetChargeTypeResponse>;
  /** {@link ModifyAddressTemplateAttribute 修改IP地址模板}({@link ModifyAddressTemplateAttributeRequest 请求参数}): {@link ModifyAddressTemplateAttributeResponse 返回参数} */
  ModifyAddressTemplateAttribute(data: ModifyAddressTemplateAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressTemplateAttributeResponse>;
  /** {@link ModifyAddressTemplateGroupAttribute 修改IP地址模板集合}({@link ModifyAddressTemplateGroupAttributeRequest 请求参数}): {@link ModifyAddressTemplateGroupAttributeResponse 返回参数} */
  ModifyAddressTemplateGroupAttribute(data: ModifyAddressTemplateGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressTemplateGroupAttributeResponse>;
  /** {@link ModifyAddressesBandwidth 调整弹性公网IP带宽}({@link ModifyAddressesBandwidthRequest 请求参数}): {@link ModifyAddressesBandwidthResponse 返回参数} */
  ModifyAddressesBandwidth(data: ModifyAddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressesBandwidthResponse>;
  /** {@link ModifyAssistantCidr 修改辅助CIDR}({@link ModifyAssistantCidrRequest 请求参数}): {@link ModifyAssistantCidrResponse 返回参数} */
  ModifyAssistantCidr(data: ModifyAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssistantCidrResponse>;
  /** {@link ModifyBandwidthPackageAttribute 修改带宽包属性}({@link ModifyBandwidthPackageAttributeRequest 请求参数}): {@link ModifyBandwidthPackageAttributeResponse 返回参数} */
  ModifyBandwidthPackageAttribute(data: ModifyBandwidthPackageAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBandwidthPackageAttributeResponse>;
  /** {@link ModifyCcnAttachedInstancesAttribute 修改CCN关联实例属性}({@link ModifyCcnAttachedInstancesAttributeRequest 请求参数}): {@link ModifyCcnAttachedInstancesAttributeResponse 返回参数} */
  ModifyCcnAttachedInstancesAttribute(data: ModifyCcnAttachedInstancesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCcnAttachedInstancesAttributeResponse>;
  /** {@link ModifyCcnAttribute 修改CCN属性}({@link ModifyCcnAttributeRequest 请求参数}): {@link ModifyCcnAttributeResponse 返回参数} */
  ModifyCcnAttribute(data: ModifyCcnAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCcnAttributeResponse>;
  /** {@link ModifyCcnRegionBandwidthLimitsType 后付费产品修改带宽限速策略}({@link ModifyCcnRegionBandwidthLimitsTypeRequest 请求参数}): {@link ModifyCcnRegionBandwidthLimitsTypeResponse 返回参数} */
  ModifyCcnRegionBandwidthLimitsType(data: ModifyCcnRegionBandwidthLimitsTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCcnRegionBandwidthLimitsTypeResponse>;
  /** {@link ModifyCustomerGatewayAttribute 修改对端网关}({@link ModifyCustomerGatewayAttributeRequest 请求参数}): {@link ModifyCustomerGatewayAttributeResponse 返回参数} */
  ModifyCustomerGatewayAttribute(data: ModifyCustomerGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomerGatewayAttributeResponse>;
  /** {@link ModifyDhcpIpAttribute 修改DhcpIp属性}({@link ModifyDhcpIpAttributeRequest 请求参数}): {@link ModifyDhcpIpAttributeResponse 返回参数} */
  ModifyDhcpIpAttribute(data: ModifyDhcpIpAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDhcpIpAttributeResponse>;
  /** {@link ModifyDirectConnectGatewayAttribute 修改专线网关属性}({@link ModifyDirectConnectGatewayAttributeRequest 请求参数}): {@link ModifyDirectConnectGatewayAttributeResponse 返回参数} */
  ModifyDirectConnectGatewayAttribute(data: ModifyDirectConnectGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDirectConnectGatewayAttributeResponse>;
  /** {@link ModifyFlowLogAttribute 修改流日志属性}({@link ModifyFlowLogAttributeRequest 请求参数}): {@link ModifyFlowLogAttributeResponse 返回参数} */
  ModifyFlowLogAttribute(data: ModifyFlowLogAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFlowLogAttributeResponse>;
  /** {@link ModifyGatewayFlowQos 调整网关流控带宽}({@link ModifyGatewayFlowQosRequest 请求参数}): {@link ModifyGatewayFlowQosResponse 返回参数} */
  ModifyGatewayFlowQos(data: ModifyGatewayFlowQosRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGatewayFlowQosResponse>;
  /** {@link ModifyHaVipAttribute 修改HAVIP属性}({@link ModifyHaVipAttributeRequest 请求参数}): {@link ModifyHaVipAttributeResponse 返回参数} */
  ModifyHaVipAttribute(data: ModifyHaVipAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHaVipAttributeResponse>;
  /** {@link ModifyIp6AddressesBandwidth 修改IPV6访问internet的带宽}({@link ModifyIp6AddressesBandwidthRequest 请求参数}): {@link ModifyIp6AddressesBandwidthResponse 返回参数} */
  ModifyIp6AddressesBandwidth(data: ModifyIp6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIp6AddressesBandwidthResponse>;
  /** {@link ModifyIp6Rule 修改IPV6转换规则属性}({@link ModifyIp6RuleRequest 请求参数}): {@link ModifyIp6RuleResponse 返回参数} */
  ModifyIp6Rule(data: ModifyIp6RuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIp6RuleResponse>;
  /** {@link ModifyIp6Translator 修改IP6转换实例属性}({@link ModifyIp6TranslatorRequest 请求参数}): {@link ModifyIp6TranslatorResponse 返回参数} */
  ModifyIp6Translator(data: ModifyIp6TranslatorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIp6TranslatorResponse>;
  /** {@link ModifyIpv6AddressesAttribute 修改弹性网卡IPv6地址属性}({@link ModifyIpv6AddressesAttributeRequest 请求参数}): {@link ModifyIpv6AddressesAttributeResponse 返回参数} */
  ModifyIpv6AddressesAttribute(data: ModifyIpv6AddressesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIpv6AddressesAttributeResponse>;
  /** {@link ModifyLocalGateway 修改本地网关}({@link ModifyLocalGatewayRequest 请求参数}): {@link ModifyLocalGatewayResponse 返回参数} */
  ModifyLocalGateway(data: ModifyLocalGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLocalGatewayResponse>;
  /** {@link ModifyNatGatewayAttribute 修改NAT网关的属性}({@link ModifyNatGatewayAttributeRequest 请求参数}): {@link ModifyNatGatewayAttributeResponse 返回参数} */
  ModifyNatGatewayAttribute(data: ModifyNatGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatGatewayAttributeResponse>;
  /** {@link ModifyNatGatewayDestinationIpPortTranslationNatRule 修改NAT网关端口转发规则}({@link ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest 请求参数}): {@link ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse 返回参数} */
  ModifyNatGatewayDestinationIpPortTranslationNatRule(data: ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse>;
  /** {@link ModifyNatGatewaySourceIpTranslationNatRule 修改NAT网关SNAT转发规则}({@link ModifyNatGatewaySourceIpTranslationNatRuleRequest 请求参数}): {@link ModifyNatGatewaySourceIpTranslationNatRuleResponse 返回参数} */
  ModifyNatGatewaySourceIpTranslationNatRule(data: ModifyNatGatewaySourceIpTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatGatewaySourceIpTranslationNatRuleResponse>;
  /** {@link ModifyNetDetect 修改网络探测}({@link ModifyNetDetectRequest 请求参数}): {@link ModifyNetDetectResponse 返回参数} */
  ModifyNetDetect(data: ModifyNetDetectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetDetectResponse>;
  /** {@link ModifyNetworkAclAttribute 修改网络ACL属性}({@link ModifyNetworkAclAttributeRequest 请求参数}): {@link ModifyNetworkAclAttributeResponse 返回参数} */
  ModifyNetworkAclAttribute(data: ModifyNetworkAclAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkAclAttributeResponse>;
  /** {@link ModifyNetworkAclEntries 修改网络ACL规则}({@link ModifyNetworkAclEntriesRequest 请求参数}): {@link ModifyNetworkAclEntriesResponse 返回参数} */
  ModifyNetworkAclEntries(data: ModifyNetworkAclEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkAclEntriesResponse>;
  /** {@link ModifyNetworkAclQuintupleEntries 增量更新网络ACL五元组规则接口}({@link ModifyNetworkAclQuintupleEntriesRequest 请求参数}): {@link ModifyNetworkAclQuintupleEntriesResponse 返回参数} */
  ModifyNetworkAclQuintupleEntries(data: ModifyNetworkAclQuintupleEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkAclQuintupleEntriesResponse>;
  /** {@link ModifyNetworkInterfaceAttribute 修改弹性网卡}({@link ModifyNetworkInterfaceAttributeRequest 请求参数}): {@link ModifyNetworkInterfaceAttributeResponse 返回参数} */
  ModifyNetworkInterfaceAttribute(data: ModifyNetworkInterfaceAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkInterfaceAttributeResponse>;
  /** {@link ModifyNetworkInterfaceQos 修改弹性网卡服务质量}({@link ModifyNetworkInterfaceQosRequest 请求参数}): {@link ModifyNetworkInterfaceQosResponse 返回参数} */
  ModifyNetworkInterfaceQos(data: ModifyNetworkInterfaceQosRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkInterfaceQosResponse>;
  /** {@link ModifyPrivateIpAddressesAttribute 修改弹性网卡内网IP信息}({@link ModifyPrivateIpAddressesAttributeRequest 请求参数}): {@link ModifyPrivateIpAddressesAttributeResponse 返回参数} */
  ModifyPrivateIpAddressesAttribute(data: ModifyPrivateIpAddressesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateIpAddressesAttributeResponse>;
  /** {@link ModifyRouteTableAttribute 修改路由表属性}({@link ModifyRouteTableAttributeRequest 请求参数}): {@link ModifyRouteTableAttributeResponse 返回参数} */
  ModifyRouteTableAttribute(data: ModifyRouteTableAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRouteTableAttributeResponse>;
  /** {@link ModifySecurityGroupAttribute 修改安全组属性}({@link ModifySecurityGroupAttributeRequest 请求参数}): {@link ModifySecurityGroupAttributeResponse 返回参数} */
  ModifySecurityGroupAttribute(data: ModifySecurityGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupAttributeResponse>;
  /** {@link ModifySecurityGroupPolicies 修改安全组出站和入站规则}({@link ModifySecurityGroupPoliciesRequest 请求参数}): {@link ModifySecurityGroupPoliciesResponse 返回参数} */
  ModifySecurityGroupPolicies(data: ModifySecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupPoliciesResponse>;
  /** {@link ModifyServiceTemplateAttribute 修改协议端口模板}({@link ModifyServiceTemplateAttributeRequest 请求参数}): {@link ModifyServiceTemplateAttributeResponse 返回参数} */
  ModifyServiceTemplateAttribute(data: ModifyServiceTemplateAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceTemplateAttributeResponse>;
  /** {@link ModifyServiceTemplateGroupAttribute 修改协议端口模板集合}({@link ModifyServiceTemplateGroupAttributeRequest 请求参数}): {@link ModifyServiceTemplateGroupAttributeResponse 返回参数} */
  ModifyServiceTemplateGroupAttribute(data: ModifyServiceTemplateGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceTemplateGroupAttributeResponse>;
  /** {@link ModifySubnetAttribute 修改子网属性}({@link ModifySubnetAttributeRequest 请求参数}): {@link ModifySubnetAttributeResponse 返回参数} */
  ModifySubnetAttribute(data: ModifySubnetAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubnetAttributeResponse>;
  /** {@link ModifyTemplateMember 修改模板对象成员}({@link ModifyTemplateMemberRequest 请求参数}): {@link ModifyTemplateMemberResponse 返回参数} */
  ModifyTemplateMember(data: ModifyTemplateMemberRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTemplateMemberResponse>;
  /** {@link ModifyVpcAttribute 修改VPC属性}({@link ModifyVpcAttributeRequest 请求参数}): {@link ModifyVpcAttributeResponse 返回参数} */
  ModifyVpcAttribute(data: ModifyVpcAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcAttributeResponse>;
  /** {@link ModifyVpcEndPointAttribute 修改终端节点属性}({@link ModifyVpcEndPointAttributeRequest 请求参数}): {@link ModifyVpcEndPointAttributeResponse 返回参数} */
  ModifyVpcEndPointAttribute(data: ModifyVpcEndPointAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcEndPointAttributeResponse>;
  /** {@link ModifyVpcEndPointServiceAttribute 修改终端节点服务属性}({@link ModifyVpcEndPointServiceAttributeRequest 请求参数}): {@link ModifyVpcEndPointServiceAttributeResponse 返回参数} */
  ModifyVpcEndPointServiceAttribute(data: ModifyVpcEndPointServiceAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcEndPointServiceAttributeResponse>;
  /** {@link ModifyVpcEndPointServiceWhiteList 修改终端节点服务白名单属性}({@link ModifyVpcEndPointServiceWhiteListRequest 请求参数}): {@link ModifyVpcEndPointServiceWhiteListResponse 返回参数} */
  ModifyVpcEndPointServiceWhiteList(data: ModifyVpcEndPointServiceWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcEndPointServiceWhiteListResponse>;
  /** {@link ModifyVpnConnectionAttribute 修改VPN通道}({@link ModifyVpnConnectionAttributeRequest 请求参数}): {@link ModifyVpnConnectionAttributeResponse 返回参数} */
  ModifyVpnConnectionAttribute(data: ModifyVpnConnectionAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnConnectionAttributeResponse>;
  /** {@link ModifyVpnGatewayAttribute 修改VPN网关属性}({@link ModifyVpnGatewayAttributeRequest 请求参数}): {@link ModifyVpnGatewayAttributeResponse 返回参数} */
  ModifyVpnGatewayAttribute(data: ModifyVpnGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnGatewayAttributeResponse>;
  /** {@link ModifyVpnGatewayCcnRoutes 修改VPN网关云联网路由}({@link ModifyVpnGatewayCcnRoutesRequest 请求参数}): {@link ModifyVpnGatewayCcnRoutesResponse 返回参数} */
  ModifyVpnGatewayCcnRoutes(data: ModifyVpnGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnGatewayCcnRoutesResponse>;
  /** {@link ModifyVpnGatewayRoutes 修改VPN路由状态}({@link ModifyVpnGatewayRoutesRequest 请求参数}): {@link ModifyVpnGatewayRoutesResponse 返回参数} */
  ModifyVpnGatewayRoutes(data: ModifyVpnGatewayRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnGatewayRoutesResponse>;
  /** {@link NotifyRoutes 发布路由至云联网}({@link NotifyRoutesRequest 请求参数}): {@link NotifyRoutesResponse 返回参数} */
  NotifyRoutes(data: NotifyRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<NotifyRoutesResponse>;
  /** {@link RefreshDirectConnectGatewayRouteToNatGateway 刷新专线直连NAT路由}({@link RefreshDirectConnectGatewayRouteToNatGatewayRequest 请求参数}): {@link RefreshDirectConnectGatewayRouteToNatGatewayResponse 返回参数} */
  RefreshDirectConnectGatewayRouteToNatGateway(data: RefreshDirectConnectGatewayRouteToNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<RefreshDirectConnectGatewayRouteToNatGatewayResponse>;
  /** {@link RejectAttachCcnInstances 云联网拒绝关联实例}({@link RejectAttachCcnInstancesRequest 请求参数}): {@link RejectAttachCcnInstancesResponse 返回参数} */
  RejectAttachCcnInstances(data: RejectAttachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RejectAttachCcnInstancesResponse>;
  /** {@link ReleaseAddresses 释放弹性公网IP}({@link ReleaseAddressesRequest 请求参数}): {@link ReleaseAddressesResponse 返回参数} */
  ReleaseAddresses(data: ReleaseAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseAddressesResponse>;
  /** {@link ReleaseIp6AddressesBandwidth 释放弹性公网IPv6地址带宽}({@link ReleaseIp6AddressesBandwidthRequest 请求参数}): {@link ReleaseIp6AddressesBandwidthResponse 返回参数} */
  ReleaseIp6AddressesBandwidth(data?: ReleaseIp6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseIp6AddressesBandwidthResponse>;
  /** {@link RemoveBandwidthPackageResources 删除带宽包资源}({@link RemoveBandwidthPackageResourcesRequest 请求参数}): {@link RemoveBandwidthPackageResourcesResponse 返回参数} */
  RemoveBandwidthPackageResources(data?: RemoveBandwidthPackageResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveBandwidthPackageResourcesResponse>;
  /** {@link RemoveIp6Rules 删除IPV6转换规则}({@link RemoveIp6RulesRequest 请求参数}): {@link RemoveIp6RulesResponse 返回参数} */
  RemoveIp6Rules(data: RemoveIp6RulesRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveIp6RulesResponse>;
  /** {@link RenewAddresses 续费包月带宽弹性公网IP}({@link RenewAddressesRequest 请求参数}): {@link RenewAddressesResponse 返回参数} */
  RenewAddresses(data: RenewAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<RenewAddressesResponse>;
  /** {@link RenewVpnGateway 续费VPN网关}({@link RenewVpnGatewayRequest 请求参数}): {@link RenewVpnGatewayResponse 返回参数} */
  RenewVpnGateway(data: RenewVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<RenewVpnGatewayResponse>;
  /** {@link ReplaceDirectConnectGatewayCcnRoutes 替换专线网关云联网路由}({@link ReplaceDirectConnectGatewayCcnRoutesRequest 请求参数}): {@link ReplaceDirectConnectGatewayCcnRoutesResponse 返回参数} */
  ReplaceDirectConnectGatewayCcnRoutes(data: ReplaceDirectConnectGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceDirectConnectGatewayCcnRoutesResponse>;
  /** {@link ReplaceRouteTableAssociation 替换路由表绑定关系}({@link ReplaceRouteTableAssociationRequest 请求参数}): {@link ReplaceRouteTableAssociationResponse 返回参数} */
  ReplaceRouteTableAssociation(data: ReplaceRouteTableAssociationRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceRouteTableAssociationResponse>;
  /** {@link ReplaceRoutes 替换路由策略}({@link ReplaceRoutesRequest 请求参数}): {@link ReplaceRoutesResponse 返回参数} */
  ReplaceRoutes(data: ReplaceRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceRoutesResponse>;
  /** {@link ReplaceSecurityGroupPolicy 替换单条安全组规则}({@link ReplaceSecurityGroupPolicyRequest 请求参数}): {@link ReplaceSecurityGroupPolicyResponse 返回参数} */
  ReplaceSecurityGroupPolicy(data: ReplaceSecurityGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceSecurityGroupPolicyResponse>;
  /** {@link ResetAttachCcnInstances 重新申请关联实例}({@link ResetAttachCcnInstancesRequest 请求参数}): {@link ResetAttachCcnInstancesResponse 返回参数} */
  ResetAttachCcnInstances(data: ResetAttachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAttachCcnInstancesResponse>;
  /** {@link ResetNatGatewayConnection 调整NAT网关并发连接上限}({@link ResetNatGatewayConnectionRequest 请求参数}): {@link ResetNatGatewayConnectionResponse 返回参数} */
  ResetNatGatewayConnection(data: ResetNatGatewayConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<ResetNatGatewayConnectionResponse>;
  /** {@link ResetRoutes 重置路由表名称和路由策略}({@link ResetRoutesRequest 请求参数}): {@link ResetRoutesResponse 返回参数} */
  ResetRoutes(data: ResetRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetRoutesResponse>;
  /** {@link ResetVpnConnection 重置VPN通道}({@link ResetVpnConnectionRequest 请求参数}): {@link ResetVpnConnectionResponse 返回参数} */
  ResetVpnConnection(data: ResetVpnConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<ResetVpnConnectionResponse>;
  /** {@link ResetVpnGatewayInternetMaxBandwidth 调整VPN网关带宽上限}({@link ResetVpnGatewayInternetMaxBandwidthRequest 请求参数}): {@link ResetVpnGatewayInternetMaxBandwidthResponse 返回参数} */
  ResetVpnGatewayInternetMaxBandwidth(data: ResetVpnGatewayInternetMaxBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ResetVpnGatewayInternetMaxBandwidthResponse>;
  /** {@link ReturnNormalAddresses 解绑并释放普通公网IP}({@link ReturnNormalAddressesRequest 请求参数}): {@link ReturnNormalAddressesResponse 返回参数} */
  ReturnNormalAddresses(data?: ReturnNormalAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<ReturnNormalAddressesResponse>;
  /** {@link SetCcnRegionBandwidthLimits 设置云联网各地域出带宽上限或地域间上限}({@link SetCcnRegionBandwidthLimitsRequest 请求参数}): {@link SetCcnRegionBandwidthLimitsResponse 返回参数} */
  SetCcnRegionBandwidthLimits(data: SetCcnRegionBandwidthLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<SetCcnRegionBandwidthLimitsResponse>;
  /** {@link SetVpnGatewaysRenewFlag 设置VPNGW续费标记}({@link SetVpnGatewaysRenewFlagRequest 请求参数}): {@link SetVpnGatewaysRenewFlagResponse 返回参数} */
  SetVpnGatewaysRenewFlag(data: SetVpnGatewaysRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<SetVpnGatewaysRenewFlagResponse>;
  /** {@link TransformAddress 普通IP转弹性IP}({@link TransformAddressRequest 请求参数}): {@link TransformAddressResponse 返回参数} */
  TransformAddress(data: TransformAddressRequest, config?: AxiosRequestConfig): AxiosPromise<TransformAddressResponse>;
  /** {@link UnassignIpv6Addresses 释放IPv6地址}({@link UnassignIpv6AddressesRequest 请求参数}): {@link UnassignIpv6AddressesResponse 返回参数} */
  UnassignIpv6Addresses(data: UnassignIpv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<UnassignIpv6AddressesResponse>;
  /** {@link UnassignIpv6CidrBlock 释放IPv6网段}({@link UnassignIpv6CidrBlockRequest 请求参数}): {@link UnassignIpv6CidrBlockResponse 返回参数} */
  UnassignIpv6CidrBlock(data: UnassignIpv6CidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<UnassignIpv6CidrBlockResponse>;
  /** {@link UnassignIpv6SubnetCidrBlock 释放IPv6子网段}({@link UnassignIpv6SubnetCidrBlockRequest 请求参数}): {@link UnassignIpv6SubnetCidrBlockResponse 返回参数} */
  UnassignIpv6SubnetCidrBlock(data: UnassignIpv6SubnetCidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<UnassignIpv6SubnetCidrBlockResponse>;
  /** {@link UnassignPrivateIpAddresses 弹性网卡退还内网 IP}({@link UnassignPrivateIpAddressesRequest 请求参数}): {@link UnassignPrivateIpAddressesResponse 返回参数} */
  UnassignPrivateIpAddresses(data: UnassignPrivateIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<UnassignPrivateIpAddressesResponse>;
  /** {@link UnlockCcnBandwidths 安全解锁云联网带宽}({@link UnlockCcnBandwidthsRequest 请求参数}): {@link UnlockCcnBandwidthsResponse 返回参数} */
  UnlockCcnBandwidths(data?: UnlockCcnBandwidthsRequest, config?: AxiosRequestConfig): AxiosPromise<UnlockCcnBandwidthsResponse>;
  /** {@link UnlockCcns 安全解锁云联网实例}({@link UnlockCcnsRequest 请求参数}): {@link UnlockCcnsResponse 返回参数} */
  UnlockCcns(data?: UnlockCcnsRequest, config?: AxiosRequestConfig): AxiosPromise<UnlockCcnsResponse>;
  /** {@link WithdrawNotifyRoutes 从云联网撤销路由}({@link WithdrawNotifyRoutesRequest 请求参数}): {@link WithdrawNotifyRoutesResponse 返回参数} */
  WithdrawNotifyRoutes(data: WithdrawNotifyRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<WithdrawNotifyRoutesResponse>;
}

export declare type Versions = ["2017-03-12"];

export default Vpc;
