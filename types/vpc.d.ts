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
  /** Remark */
  Remark?: string | null;
}

/** 账户属性对象 */
declare interface AccountAttribute {
  /** 属性名 */
  AttributeName?: string;
  /** 属性值 */
  AttributeValues?: string[];
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
  NetworkInterfaceId?: string;
  /** 绑定的资源内网ip */
  PrivateAddressIp?: string;
  /** 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态 */
  IsArrears?: boolean;
  /** 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态 */
  IsBlocked?: boolean;
  /** eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式 */
  IsEipDirectConnection?: boolean;
  /** EIP 资源类型，包括CalcIP、WanIP、EIP和AnycastEIP、高防EIP。其中：`CalcIP` 表示设备 IP，`WanIP` 表示普通公网 IP，`EIP` 表示弹性公网 IP，`AnycastEIP` 表示加速 EIP，`AntiDDoSEIP`表示高防EIP。 */
  AddressType?: string;
  /** eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放 */
  CascadeRelease?: boolean;
  /** EIP ALG开启的协议类型。 */
  EipAlgType?: AlgType;
  /** 弹性公网IP的运营商信息，当前可能返回值包括"CMCC","CTCC","CUCC","BGP" */
  InternetServiceProvider?: string;
  /** 是否本地带宽EIP */
  LocalBgp?: boolean;
  /** 弹性公网IP的带宽值。注意，传统账户类型账户的弹性公网IP没有带宽属性，值为空。 */
  Bandwidth?: number | null;
  /** 弹性公网IP的网络计费模式。注意，传统账户类型账户的弹性公网IP没有网络计费模式属性，值为空。包括：BANDWIDTH_PREPAID_BY_MONTH表示包月带宽预付费。TRAFFIC_POSTPAID_BY_HOUR表示按小时流量后付费。BANDWIDTH_POSTPAID_BY_HOUR表示按小时带宽后付费。BANDWIDTH_PACKAGE表示共享带宽包。 */
  InternetChargeType?: string | null;
  /** 弹性公网IP关联的标签列表。 */
  TagSet?: Tag[] | null;
  /** 到期时间。 */
  DeadlineDate?: string | null;
  /** EIP绑定的实例类型。 */
  InstanceType?: string | null;
  /** 静态单线IP网络出口 */
  Egress?: string | null;
  /** 高防包ID,当EIP类型为高防EIP时，返回EIP绑定的高防包ID. */
  AntiDDoSPackageId?: string;
  /** 当前EIP是否自动续费，只有按月带宽预付费的EIP才会显示该字段，具体值示例如下:NOTIFY_AND_MANUAL_RENEW:正常续费NOTIFY_AND_AUTO_RENEW:自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW:到期不续费 */
  RenewFlag?: string;
  /** 当前公网IP所关联的带宽包ID，如果该公网IP未使用带宽包计费，则返回为空 */
  BandwidthPackageId?: string | null;
  /** 传统弹性公网IPv6所属vpc唯一ID */
  UnVpcId?: string | null;
  /** CDC唯一ID */
  DedicatedClusterId?: string | null;
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
  AddressTemplateName?: string;
  /** IP地址模板实例唯一ID。 */
  AddressTemplateId?: string;
  /** IP地址信息。 */
  AddressSet?: string[];
  /** 创建时间。 */
  CreatedTime?: string;
  /** 带备注的IP地址信息。 */
  AddressExtraSet?: AddressInfo[];
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
}

/** IP地址模板集合 */
declare interface AddressTemplateGroup {
  /** IP地址模板集合名称。 */
  AddressTemplateGroupName?: string;
  /** IP地址模板集合实例ID，例如：ipmg-dih8xdbq。 */
  AddressTemplateGroupId?: string;
  /** IP地址模板ID。 */
  AddressTemplateIdSet?: string[];
  /** 创建时间。 */
  CreatedTime?: string;
  /** IP地址模板实例。 */
  AddressTemplateSet?: AddressTemplateItem[];
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
}

/** 地址信息 */
declare interface AddressTemplateItem {
  /** IP地址模板ID */
  AddressTemplateId?: string;
  /** IP模板名称 */
  AddressTemplateName?: string;
  /** 废弃字段 */
  From?: string;
  /** 废弃字段 */
  To?: string;
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
  Ftp?: boolean;
  /** Sip协议Alg功能是否开启 */
  Sip?: boolean;
}

/** VPC辅助CIDR信息。 */
declare interface AssistantCidr {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5` */
  VpcId?: string;
  /** 辅助CIDR。形如：`172.16.0.0/16` */
  CidrBlock?: string;
  /** 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。 */
  AssistantType?: number;
  /** 辅助CIDR拆分的子网。 */
  SubnetSet?: Subnet[] | null;
}

/** 时间备份策略详情 */
declare interface BackupPolicy {
  /** 备份周期时间，取值为monday, tuesday, wednesday, thursday, friday, saturday, sunday。 */
  BackupDay: string;
  /** 备份时间点，格式：HH:mm:ss。 */
  BackupTime: string;
}

/** 描述带宽包信息的结构 */
declare interface BandwidthPackage {
  /** 带宽包唯一标识Id */
  BandwidthPackageId?: string;
  /** 带宽包类型，包括'BGP','SINGLEISP','ANYCAST','SINGLEISP_CMCC','SINGLEISP_CTCC','SINGLEISP_CUCC' */
  NetworkType?: string;
  /** 带宽包计费类型，包括:'TOP5_POSTPAID_BY_MONTH':按月后付费TOP5计费 'PERCENT95_POSTPAID_BY_MONTH':按月后付费月95计费'ENHANCED95_POSTPAID_BY_MONTH':按月后付费增强型95计费'FIXED_PREPAID_BY_MONTH':包月预付费计费‘PEAK_BANDWIDTH_POSTPAID_BY_DAY’: 后付费日结按带宽计费 */
  ChargeType?: string;
  /** 带宽包名称 */
  BandwidthPackageName?: string;
  /** 带宽包创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。 */
  CreatedTime?: string;
  /** 带宽包状态，包括'CREATING','CREATED','DELETING','DELETED' */
  Status?: string;
  /** 带宽包资源信息 */
  ResourceSet?: Resource[];
  /** 带宽包限速大小。单位：Mbps，-1表示不限速。 */
  Bandwidth?: number;
  /** 网络出口 */
  Egress?: string | null;
  /** 带宽包到期时间，只有预付费会返回，按量计费返回为null */
  Deadline?: string | null;
}

/** 后付费共享带宽包的当前计费用量 */
declare interface BandwidthPackageBillBandwidth {
  /** 当前计费用量，单位为 Mbps */
  BandwidthUsage: number;
}

/** 批量修改快照策略信息 */
declare interface BatchModifySnapshotPolicy {
  /** 快照策略Id。 */
  SnapshotPolicyId: string;
  /** 快照策略名称。 */
  SnapshotPolicyName?: string;
  /** 备份策略。 */
  BackupPolicies?: BackupPolicy[];
  /** 快照保留时间，支持1～365天。 */
  KeepTime?: number;
}

/** BgpConfig */
declare interface BgpConfig {
  /** BGP隧道网段。 */
  TunnelCidr: string;
  /** 云端BGP地址。必须从BGP隧道网段内分配。 */
  LocalBgpIp: string;
  /** 用户端BGP地址。必须从BGP隧道网段内分配。 */
  RemoteBgpIp: string;
}

/** VPN通道BGP配置 */
declare interface BgpConfigAndAsn {
  /** BGP通道CIDR */
  TunnelCidr?: string | null;
  /** 本端BGP IP */
  LocalBgpIp?: string | null;
  /** 对端BGP IP */
  RemoteBgpIp?: string | null;
  /** 本端BGP ASN号 */
  LocalBgpAsn?: string | null;
  /** 对端BGP ASN号 */
  RemoteBgpAsn?: string | null;
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
  /** 限速类型，`INTER_REGION_LIMIT` 为地域间限速；`OUTER_REGION_LIMIT` 为地域出口限速。 */
  BandwidthLimitType?: string | null;
  /** 标签键值对。 */
  TagSet?: Tag[];
  /** 是否支持云联网路由优先级的功能。`False`：不支持，`True`：支持。 */
  RoutePriorityFlag?: boolean;
  /** 实例关联的路由表个数。 */
  RouteTableCount?: number | null;
  /** 是否开启云联网多路由表特性。`False`：未开启，`True`：开启。 */
  RouteTableFlag?: boolean | null;
  /** `true`：实例已被封禁，流量不通，`false`:解封禁。 */
  IsSecurityLock?: boolean | null;
  /** 是否开启云联网路由传播策略。`False` 未开启，`True` 开启。 */
  RouteBroadcastPolicyFlag?: boolean | null;
  /** 是否开启等价路由功能。`False` 未开启，`True` 开启。 */
  RouteECMPFlag?: boolean | null;
  /** 是否开启路由重叠功能。`False` 未开启，`True` 开启。 */
  RouteOverlapFlag?: boolean | null;
  /** 是否开启QOS。 */
  TrafficMarkingPolicyFlag?: boolean | null;
  /** 是否开启路由表选择策略。 */
  RouteSelectPolicyFlag?: boolean | null;
  /** 是否开启二层云联网通道。 */
  DirectConnectAccelerateChannelFlag?: boolean | null;
  /** 是否支持ipv6路由表 */
  Ipv6Flag?: boolean | null;
  /** 是否支持路由表聚合策略 */
  MrtbAggregatePolicyFlag?: boolean | null;
  /** 是否支持策略值 */
  MrtbPolicyValueFlag?: boolean | null;
}

/** 云联网（CCN）关联实例（Instance）对象 */
declare interface CcnAttachedInstance {
  /** 云联网实例ID。 */
  CcnId?: string;
  /** 关联实例类型：`VPC`：私有网络`DIRECTCONNECT`：专线网关`BMVPC`：黑石私有网络 */
  InstanceType?: string;
  /** 关联实例ID。 */
  InstanceId?: string;
  /** 关联实例名称。 */
  InstanceName?: string;
  /** 关联实例所属大区，例如：ap-guangzhou。 */
  InstanceRegion?: string;
  /** 关联实例所属UIN（根账号）。 */
  InstanceUin?: string;
  /** 关联实例CIDR。 */
  CidrBlock?: string[];
  /** 关联实例状态：`PENDING`：申请中`ACTIVE`：已连接`EXPIRED`：已过期`REJECTED`：已拒绝`DELETED`：已删除`FAILED`：失败的（2小时后将异步强制解关联）`ATTACHING`：关联中`DETACHING`：解关联中`DETACHFAILED`：解关联失败（2小时后将异步强制解关联） */
  State?: string;
  /** 关联时间。 */
  AttachedTime?: string;
  /** 云联网所属UIN（根账号）。 */
  CcnUin?: string;
  /** 关联实例所属的大地域，如: CHINA_MAINLAND */
  InstanceArea?: string;
  /** 备注 */
  Description?: string;
  /** 路由表ID */
  RouteTableId?: string;
  /** 路由表名称 */
  RouteTableName?: string;
}

/** 用于描述云联网地域间限速带宽实例的信息。 */
declare interface CcnBandwidth {
  /** 带宽所属的云联网ID。 */
  CcnId: string;
  /** 实例的创建时间。 */
  CreatedTime: string | null;
  /** 实例的过期时间 */
  ExpiredTime: string | null;
  /** 带宽实例的唯一ID。 */
  RegionFlowControlId: string | null;
  /** 带宽是否自动续费的标记。 */
  RenewFlag: string | null;
  /** 描述带宽的地域和限速上限信息。在地域间限速的情况下才会返回参数，出口限速模式不返回。 */
  CcnRegionBandwidthLimit: CcnRegionBandwidthLimitInfo | null;
  /** 云市场实例ID。 */
  MarketId: string | null;
  /** 实例所属用户主账号ID。 */
  UserAccountID: string | null;
  /** 是否跨境，`true`表示跨境，反之不跨境。 */
  IsCrossBorder: boolean | null;
  /** `true`表示封禁，地域间流量不通，`false`解禁，地域间流量正常 */
  IsSecurityLock: boolean | null;
  /** `POSTPAID`表示后付费，`PREPAID`表示预付费。 */
  InstanceChargeType: string | null;
  /** 实例更新时间 */
  UpdateTime?: string | null;
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
  /** 资源绑定的标签列表 */
  TagSet?: Tag[] | null;
}

/** 云联网路由表信息 */
declare interface CcnBatchRouteTable {
  /** 云联网ID。 */
  CcnId: string;
  /** 云联网路由表名称。 */
  Name: string;
  /** 云联网路由表描述。 */
  Description?: string;
}

/** 云联网限速实例锁对象，该对象特用于运营端使用，用于封禁实例流量。 */
declare interface CcnFlowLock {
  /** 带宽所属的云联网ID。 */
  CcnId: string;
  /** 实例所属用户主账号ID。 */
  UserAccountID: string;
  /** 带宽实例的唯一ID。作为`UnlockCcnBandwidths`接口和`LockCcnBandwidths`接口的入参时，该字段必传。 */
  RegionFlowControlId?: string;
}

/** 云联网（CCN）关联实例（Instance）对象。 */
declare interface CcnInstance {
  /** 关联实例ID。 */
  InstanceId: string;
  /** 关联实例ID所属大区，例如：ap-guangzhou。 */
  InstanceRegion: string;
  /** 关联实例类型，可选值：`VPC`：私有网络`DIRECTCONNECT`：专线网关`BMVPC`：黑石私有网络`VPNGW`：VPNGW类型 */
  InstanceType: string;
  /** 备注 */
  Description?: string;
  /** 实例关联的路由表ID。 */
  RouteTableId?: string | null;
  /** 实例付费方式 */
  OrderType?: string | null;
}

/** 云联网实例对象，该对象特用于运营端使用，不建议给租户的接口中提供该复杂类型。 */
declare interface CcnInstanceInfo {
}

/** ccn实例信息（不带地域属性） */
declare interface CcnInstanceWithoutRegion {
  /** 云联网支持的实例类型：`VPC``DIRECTCONNECT``BMVPC` `EDGE``EDGE_TUNNEL``EDGE_VPNGW``VPNGW` */
  InstanceType: string;
  /** 实例ID。 */
  InstanceId: string;
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

/** 云联网（CCN）地域出带宽上限。 */
declare interface CcnRegionBandwidthLimitInfo {
  /** 源地域，例如：ap-shanghai */
  SourceRegion: string | null;
  /** 目的地域， 例如：ap-shanghai */
  DestinationRegion: string | null;
  /** 出带宽上限，单位：Mbps。 */
  BandwidthLimit: number | null;
}

/** CCN路由策略对象 */
declare interface CcnRoute {
  /** 路由策略ID */
  RouteId?: string;
  /** 目的端 */
  DestinationCidrBlock?: string;
  /** 下一跳类型（关联实例类型），所有类型：VPC、DIRECTCONNECT */
  InstanceType?: string;
  /** 下一跳（关联实例） */
  InstanceId?: string;
  /** 下一跳名称（关联实例名称） */
  InstanceName?: string;
  /** 下一跳所属地域（关联实例所属地域） */
  InstanceRegion?: string;
  /** 更新时间 */
  UpdateTime?: string;
  /** 路由是否启用 */
  Enabled?: boolean;
  /** 关联实例所属UIN（根账号） */
  InstanceUin?: string;
  /** 路由的扩展状态 */
  ExtraState?: string;
  /** 是否动态路由 */
  IsBgp?: boolean;
  /** 路由优先级 */
  RoutePriority?: number;
  /** 下一跳扩展名称（关联实例的扩展名称） */
  InstanceExtraName?: string;
  /** 实例类型 */
  AliasType?: string | null;
  /** 实例id */
  AliasInstanceId?: string | null;
}

/** 云联网路由传播策略之路由条件 */
declare interface CcnRouteBroadcastPolicyRouteCondition {
  /** 条件类型 */
  Name: string;
  /** 条件值列表 */
  Values: string[];
  /** 匹配模式，`1` 精确匹配，`0` 模糊匹配 */
  MatchPattern: number;
}

/** 云联网路由表信息 */
declare interface CcnRouteTable {
  /** 云联网ID。 */
  CcnId?: string;
  /** 云联网路由表ID。 */
  CcnRouteTableId?: string;
  /** 云联网路由表名称。 */
  RouteTableName?: string;
  /** 云联网路由表描述。 */
  RouteTableDescription?: string;
  /** True：是默认路由表 False：非默认路由表。 */
  IsDefaultTable?: boolean;
  /** 创建时间。 */
  CreateTime?: string;
}

/** 云联网路由传播策略 */
declare interface CcnRouteTableBroadcastPolicy {
  /** 路由条件 */
  RouteConditions: CcnRouteBroadcastPolicyRouteCondition[];
  /** 传播条件 */
  BroadcastConditions: CcnRouteBroadcastPolicyRouteCondition[];
  /** 路由行为，`accept` 允许，`drop` 拒绝 */
  Action: string;
  /** 策略描述 */
  Description?: string;
  /** as-path操作 */
  OperateAsPath?: string | null;
  /** as-path操作模式 */
  AsPathOperateMode?: string | null;
  /** community操作 */
  OperateCommunitySet?: string[] | null;
  /** community操作模式 */
  CommunityOperateMode?: string | null;
}

/** 云联网路由传播策略列表 */
declare interface CcnRouteTableBroadcastPolicys {
  /** 策略列表 */
  Policys: CcnRouteTableBroadcastPolicy[];
  /** 版本号 */
  PolicyVersion: number;
  /** 创建时间 */
  CreateTime: string;
}

/** 云联网路由接收策略 */
declare interface CcnRouteTableInputPolicy {
  /** 路由条件。 */
  RouteConditions: CcnRouteBroadcastPolicyRouteCondition[];
  /** 路由行为，`accept` 允许，`drop` 拒绝。 */
  Action: string;
  /** 策略描述。 */
  Description: string;
  /** as-path操作 */
  OperateAsPath?: string;
  /** as-path操作模式 */
  AsPathOperateMode?: string;
}

/** 云联网路由接收策略列表 */
declare interface CcnRouteTableInputPolicys {
  /** 策略列表。 */
  Policys?: CcnRouteTableInputPolicy[] | null;
  /** 版本号。 */
  PolicyVersion?: number | null;
  /** 创建时间。 */
  CreateTime?: string | null;
}

/** 路由表选择策略信息 */
declare interface CcnRouteTableSelectPolicy {
  /** 实例类型：私有网络: `VPC`专线网关: `DIRECTCONNECT`黑石私有网络: `BMVPC`EDGE设备: `EDGE`EDGE隧道: `EDGE_TUNNEL`EDGE网关: `EDGE_VPNGW`VPN网关：`VPNGW` */
  InstanceType: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 源端CIDR。 */
  SourceCidrBlock: string;
  /** 路由表ID。 */
  RouteTableId: string;
  /** 路由表备注。 */
  Description?: string;
}

/** 用于发布云联网的cidr信息 */
declare interface CidrForCcn {
  /** local cidr值。 */
  Cidr?: string | null;
  /** 是否发布到了云联网。 */
  PublishedToVbc?: boolean | null;
}

/** 私有网络和基础网络互通设备 */
declare interface ClassicLinkInstance {
  /** VPC实例ID */
  VpcId?: string | null;
  /** 云服务器实例唯一ID */
  InstanceId?: string | null;
}

/** 冲突资源条目信息。 */
declare interface ConflictItem {
  /** 冲突资源的ID。已废弃 */
  ConfilctId?: string;
  /** 冲突目的资源 */
  DestinationItem?: string;
  /** 冲突资源的ID */
  ConflictId?: string;
}

/** 冲突资源信息。 */
declare interface ConflictSource {
  /** 冲突资源ID */
  ConflictSourceId?: string;
  /** 冲突资源 */
  SourceItem?: string;
  /** 冲突资源条目信息 */
  ConflictItemSet?: ConflictItem[];
}

/** 创建路由添加的指向此通道的路由 */
declare interface CreateVpnConnRoute {
  /** 目的端IDC网段 */
  DestinationCidrBlock: string;
  /** 优先级；可选值0，100。 */
  Priority?: number;
}

/** 合规化审批单 */
declare interface CrossBorderCompliance {
  /** 服务商，可选值：`UNICOM`。 */
  ServiceProvider?: string;
  /** 合规化审批单`ID`。 */
  ComplianceId?: number;
  /** 公司全称。 */
  Company?: string;
  /** 统一社会信用代码。 */
  UniformSocialCreditCode?: string;
  /** 法定代表人。 */
  LegalPerson?: string;
  /** 发证机关。 */
  IssuingAuthority?: string;
  /** 营业执照。 */
  BusinessLicense?: string;
  /** 营业执照住所。 */
  BusinessAddress?: string;
  /** 邮编。 */
  PostCode?: number;
  /** 经办人。 */
  Manager?: string;
  /** 经办人身份证号。 */
  ManagerId?: string;
  /** 经办人身份证。 */
  ManagerIdCard?: string;
  /** 经办人身份证地址。 */
  ManagerAddress?: string;
  /** 经办人联系电话。 */
  ManagerTelephone?: string;
  /** 电子邮箱。 */
  Email?: string;
  /** 服务受理单。 */
  ServiceHandlingForm?: string;
  /** 授权函。 */
  AuthorizationLetter?: string;
  /** 信息安全承诺书。 */
  SafetyCommitment?: string;
  /** 服务开始时间。 */
  ServiceStartDate?: string;
  /** 服务截止时间。 */
  ServiceEndDate?: string;
  /** 状态。待审批：`PENDING`，已通过：`APPROVED`，已拒绝：`DENY`。 */
  State?: string;
  /** 审批单创建时间。 */
  CreatedTime?: string;
  /** 法定代表人身份证号。 */
  LegalPersonId?: string | null;
  /** 法定代表人身份证。 */
  LegalPersonIdCard?: string | null;
}

/** 跨境带宽监控数据 */
declare interface CrossBorderFlowMonitorData {
  /** 入带宽，单位：`bps`。 */
  InBandwidth?: number[];
  /** 出带宽，单位：`bps`。 */
  OutBandwidth?: number[];
  /** 入包，单位：`pps`。 */
  InPkg?: number[];
  /** 出包，单位：`pps`。 */
  OutPkg?: number[];
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
  /** BGP ASN。 */
  BgpAsn?: number;
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
  VpcId?: string;
  /** 子网实例ID。 */
  SubnetId?: string;
  /** 云主机实例ID */
  InstanceId?: string;
  /** 云主机名称。 */
  InstanceName?: string;
  /** 云主机状态。 */
  InstanceState?: string;
  /** 实例的CPU核数，单位：核。 */
  CPU?: number;
  /** 实例内存容量，单位：GB。 */
  Memory?: number;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 实例机型。 */
  InstanceType?: string;
  /** 实例弹性网卡配额（包含主网卡）。 */
  EniLimit?: number;
  /** 实例弹性网卡内网IP配额（包含主网卡）。 */
  EniIpLimit?: number;
  /** 实例已绑定弹性网卡的个数（包含主网卡）。 */
  InstanceEniCount?: number;
}

/** 默认VPC和子网 */
declare interface DefaultVpcSubnet {
  /** 默认VpcId。 */
  VpcId: string;
  /** 默认SubnetId。 */
  SubnetId: string;
  /** 默认Vpc名字。 */
  VpcName?: string;
  /** 默认Subnet名字。 */
  SubnetName?: string;
  /** 默认子网网段。 */
  CidrBlock?: string;
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
  Description?: string;
}

/** 本端目的IP端口转换复杂结构 */
declare interface DestinationIpPortTranslationNatRuleDiff {
  /** 协议 */
  Protocol: string;
  /** 源端口 */
  OriginalPort: number;
  /** 源IP */
  OriginalIp: string;
  /** 目的端口 */
  TranslationPort: number;
  /** 目的IP */
  TranslationIp: string;
  /** 旧协议。 */
  OldProtocol: string;
  /** 旧源端口 */
  OldOriginalPort: number;
  /** 旧源IP */
  OldOriginalIp: string;
  /** 旧目的端口 */
  OldTranslationPort: number;
  /** 旧目的IP */
  OldTranslationIp: string;
  /** 描述 */
  Description?: string;
}

/** 描述 DhcpIp 信息 */
declare interface DhcpIp {
  /** `DhcpIp`的`ID`，是`DhcpIp`的唯一标识。 */
  DhcpIpId?: string;
  /** `DhcpIp`所在私有网络`ID`。 */
  VpcId?: string;
  /** `DhcpIp`所在子网`ID`。 */
  SubnetId?: string;
  /** `DhcpIp`的名称。 */
  DhcpIpName?: string;
  /** IP地址。 */
  PrivateIpAddress?: string;
  /** 绑定`EIP`。 */
  AddressIp?: string;
  /** `DhcpIp`关联弹性网卡`ID`。 */
  NetworkInterfaceId?: string;
  /** 被绑定的实例`ID`。 */
  InstanceId?: string;
  /** 状态：`AVAILABLE`：运行中`UNBIND`：未绑定 */
  State?: string;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
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
  RouteId?: string;
  /** IDC网段。 */
  DestinationCidrBlock?: string;
  /** `BGP`的`AS-Path`属性。 */
  ASPath?: string[];
  /** 备注 */
  Description?: string;
  /** 最后更新时间 */
  UpdateTime?: string;
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
  EndPointId?: string;
  /** VPCID。 */
  VpcId?: string;
  /** 子网ID。 */
  SubnetId?: string;
  /** APPID。 */
  EndPointOwner?: string;
  /** 终端节点名称。 */
  EndPointName?: string;
  /** 终端节点服务的VPCID。 */
  ServiceVpcId?: string;
  /** 终端节点服务的VIP。 */
  ServiceVip?: string;
  /** 终端节点服务的ID。 */
  EndPointServiceId?: string;
  /** 终端节点的VIP。 */
  EndPointVip?: string;
  /** 终端节点状态，ACTIVE：可用，PENDING：待接受，ACCEPTING：接受中，REJECTED：已拒绝，FAILED：失败。 */
  State?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 终端节点绑定的安全组实例ID列表。 */
  GroupSet?: string[];
  /** 终端节点服务名称。 */
  ServiceName?: string | null;
  /** CDC 集群唯一 ID */
  CdcId?: string | null;
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
}

/** 终端节点服务对象。 */
declare interface EndPointService {
  /** 终端节点服务ID */
  EndPointServiceId?: string;
  /** VPCID。 */
  VpcId?: string;
  /** APPID。 */
  ServiceOwner?: string;
  /** 终端节点服务名称。 */
  ServiceName?: string;
  /** 后端服务的VIP。 */
  ServiceVip?: string;
  /** 后端服务的ID，比如lb-xxx。 */
  ServiceInstanceId?: string;
  /** 是否自动接受。 */
  AutoAcceptFlag?: boolean;
  /** 关联的终端节点个数。 */
  EndPointCount?: number | null;
  /** 终端节点对象数组。 */
  EndPointSet?: EndPoint[] | null;
  /** 创建时间。 */
  CreateTime?: string;
  /** 挂载的PAAS服务类型，CLB,CDB,CRS */
  ServiceType?: string;
  /** CDC 集群唯一 ID */
  CdcId?: string | null;
  /** Uin */
  ServiceUin?: string | null;
  /** 服务IP类型 */
  BusinessIpType?: number | null;
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
}

/** 过滤器 */
declare interface Filter {
  /** 属性名称, 若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。 */
  Name: string;
  /** 属性值, 若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。当值类型为布尔类型时，可直接取值为字符串"TRUE"或 "FALSE"。 */
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
  TagSet?: Tag[];
  /** 是否启用，true-启用，false-停用。 */
  Enable?: boolean;
  /** 消费端类型：cls、ckafka。 */
  StorageType?: string | null;
  /** 消费端信息，当消费端类型为ckafka时返回。 */
  FlowLogStorage?: FlowLogStorage | null;
  /** 流日志存储ID对应的地域信息。 */
  CloudLogRegion?: string | null;
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
  PrivateIpAddress?: string;
  /** 入包量。 */
  InPkg?: number;
  /** 出包量。 */
  OutPkg?: number;
  /** 入流量，单位：`Byte`。 */
  InTraffic?: number;
  /** 出流量，单位：`Byte`。 */
  OutTraffic?: number;
  /** 并发连接数。仅标准型nat支持此参数。 */
  ConcurrentConnectionCount?: number;
  /** 新建连接速率。仅标准型nat支持此参数。 */
  NewConnectionRate?: number;
}

/** 网关流控带宽信息 */
declare interface GatewayQos {
  /** VPC实例ID。 */
  VpcId?: string;
  /** 云服务器内网IP。 */
  IpAddress?: string;
  /** 流控带宽值。 */
  Bandwidth?: number;
  /** 创建时间。 */
  CreateTime?: string;
}

/** 描述 HAVIP 信息 */
declare interface HaVip {
  /** `HAVIP`的`ID`，是`HAVIP`的唯一标识。 */
  HaVipId?: string;
  /** `HAVIP`名称。 */
  HaVipName?: string;
  /** 虚拟IP地址。 */
  Vip?: string;
  /** `HAVIP`所在私有网络`ID`。 */
  VpcId?: string;
  /** `HAVIP`所在子网`ID`。 */
  SubnetId?: string;
  /** `HAVIP`关联弹性网卡`ID`。 */
  NetworkInterfaceId?: string;
  /** 被绑定的实例`ID`。 */
  InstanceId?: string;
  /** 绑定`EIP`。 */
  AddressIp?: string;
  /** 状态：`AVAILABLE`：运行中`UNBIND`：未绑定 */
  State?: string;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 使用havip的业务标识。 */
  Business?: string;
  /** `HAVIP`的飘移范围。 */
  HaVipAssociationSet?: HaVipAssociation[] | null;
  /** 是否开启`HAVIP`的飘移范围校验。 */
  CheckAssociate?: boolean | null;
  /** CDC实例ID。 */
  CdcId?: string | null;
  /** HAVIP 刷新时间。该参数只作为出参数。以下场景会触发 FlushTime 被刷新：1）子机发出免费 ARP 触发 HAVIP 漂移；2）手动HAVIP解绑网卡; 没有更新时默认值：0000-00-00 00:00:00 */
  FlushedTime?: string | null;
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
}

/** HaVip绑定的子机/网卡（用于限制HaVip飘移的范围，并不是真正的飘移动作）。 */
declare interface HaVipAssociation {
  /** HaVip实例唯一ID。 */
  HaVipId: string | null;
  /** HaVip绑定的子机或网卡唯一ID。 */
  InstanceId: string | null;
  /** HaVip绑定的类型。取值:CVM, ENI。 */
  InstanceType: string | null;
}

/** VPN通道健康检查配置 */
declare interface HealthCheckConfig {
  /** 探测模式，默认值NQA，不可修改。 */
  ProbeType?: string | null;
  /** 探测间隔，腾讯云两次健康检查间隔时间，范围【1000-5000】，单位ms。 */
  ProbeInterval?: number | null;
  /** 探测次数，连续N次健康检查失败后执行路由切换，范围【3-8】，单位次。 */
  ProbeThreshold?: number | null;
  /** 探测超时时间，范围【10-5000】，单位ms。 */
  ProbeTimeout?: number | null;
}

/** 高优路由表条目修改属性。 */
declare interface HighPriorityModifyItem {
  /** 高优路由条目唯一ID。 */
  HighPriorityRouteId?: string;
  /** 高优路由条目描述。 */
  Description?: string;
}

/** 高优路由表条目信息 */
declare interface HighPriorityRoute {
  /** 高优路由表唯一 ID */
  HighPriorityRouteTableId?: string | null;
  /** 高优路由表条目唯一 ID */
  HighPriorityRouteId?: string | null;
  /** 目标网段 */
  DestinationCidrBlock?: string | null;
  /** 网关类型 */
  GatewayType?: string | null;
  /** 网关唯一ID */
  GatewayId?: string | null;
  /** 高优路由条目描述 */
  Description?: string | null;
  /** ECMP算法，支持的算法有：ECMP_QUINTUPLE_HASH：五元组hash，ECMP_SOURCE_DESTINATION_IP_HASH：源和目的IP hash，ECMP_DESTINATION_IP_HASH：目的IP hash，ECMP_SOURCE_IP_HASH：源IP hash。 */
  SubnetRouteAlgorithm?: string | null;
  /** 出参展示，是否为CDC属性高优路由 */
  IsCdc?: boolean | null;
  /** 出参展示，CDC 唯一ID */
  CdcId?: string | null;
  /** 创建时间。 */
  CreatedTime?: string | null;
}

/** 高优路由表信息 */
declare interface HighPriorityRouteTable {
  /** 高优路由表唯一 ID。 */
  HighPriorityRouteTableId?: string | null;
  /** VPC实例ID。 */
  VpcId?: string | null;
  /** 高优路由表名称。 */
  Name?: string | null;
  /** 高优路由表关联的子网列表。 */
  SubnetSet?: string[] | null;
  /** 高优路由表条目信息 */
  HighPriorityRouteSet?: HighPriorityRoute[] | null;
  /** 创建时间。 */
  CreatedTime?: string | null;
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
  IntegrityAlgorith?: string | null;
  /** IPsec SA lifetime(s)：单位秒，取值范围：180-604800 */
  IPSECSaLifetimeSeconds?: number;
  /** PFS：可选值：'NULL', 'DH-GROUP1', 'DH-GROUP2', 'DH-GROUP5', 'DH-GROUP14', 'DH-GROUP24'，默认为NULL */
  PfsDhGroup?: string;
  /** IPsec SA lifetime(KB)：单位KB，取值范围：2560-604800 */
  IPSECSaLifetimeTraffic?: number;
  /** 认证算法：可选值：'MD5', 'SHA1'，'SHA-256' 默认为 */
  IntegrityAlgorithm?: string;
}

/** 云联网实例绑定路由表信息 */
declare interface InstanceBind {
  /** 云联网ID。 */
  CcnId?: string;
  /** 实例类型：VPC，DIRECTCONNECT，BMVPC，EDGE，EDGE_TUNNEL，EDGE_VPNGW，VPNGW。 */
  InstanceType?: string;
  /** 实例ID。 */
  InstanceId?: string;
  /** 实例绑定路由表的时间。 */
  InstanceBindTime?: string;
  /** 路由表ID。 */
  RouteTableId?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 实例所在地域。 */
  InstanceRegion?: string;
  /** 实例所属的账户uin。 */
  InstanceUin?: string;
  /** 关联实例状态：`PENDING`：申请中`ACTIVE`：已连接`EXPIRED`：已过期`REJECTED`：已拒绝`DELETED`：已删除`FAILED`：失败的（2小时后将异步强制解关联）`ATTACHING`：关联中`DETACHING`：解关联中`DETACHFAILED`：解关联失败（2小时后将异步强制解关联） */
  State?: string;
}

/** 预付费（包年包月）计费对象。 */
declare interface InstanceChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36。 */
  Period: number;
  /** 自动续费标识。取值范围： NOTIFY_AND_AUTO_RENEW：通知过期且自动续费， NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费。默认：NOTIFY_AND_AUTO_RENEW */
  RenewFlag?: string;
}

/** 用于描述实例的统计信息 */
declare interface InstanceStatistic {
  /** 实例的类型 */
  InstanceType?: string;
  /** 实例的个数 */
  InstanceCount?: number;
}

/** IPV6转换规则 */
declare interface Ip6Rule {
  /** IPV6转换规则唯一ID，形如rule6-xxxxxxxx */
  Ip6RuleId?: string;
  /** IPV6转换规则名称 */
  Ip6RuleName?: string;
  /** IPV6地址 */
  Vip6?: string;
  /** IPV6端口号 */
  Vport6?: number;
  /** 协议类型，支持TCP/UDP */
  Protocol?: string;
  /** IPV4地址 */
  Vip?: string;
  /** IPV4端口号 */
  Vport?: number;
  /** 转换规则状态，限于CREATING,RUNNING,DELETING,MODIFYING */
  RuleStatus?: string;
  /** 转换规则创建时间 */
  CreatedTime?: string;
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
  Ip6TranslatorId?: string;
  /** IPV6转换实例名称 */
  Ip6TranslatorName?: string;
  /** IPV6地址 */
  Vip6?: string;
  /** IPV6转换地址所属运营商 */
  IspName?: string;
  /** 转换实例状态，限于CREATING,RUNNING,DELETING,MODIFYING */
  TranslatorStatus?: string;
  /** IPV6转换实例创建时间 */
  CreatedTime?: string;
  /** 绑定的IPV6转换规则数量 */
  Ip6RuleCount?: number;
  /** IPV6转换规则信息 */
  IP6RuleSet?: Ip6Rule[];
}

/** 占用ip的资源信息 */
declare interface IpAddressStates {
  /** VPC实例ID。 */
  VpcId: string;
  /** 子网实例ID。 */
  SubnetId: string;
  /** IP地址。 */
  IpAddress: string;
  /** 资源类型 */
  ResourceType: string;
  /** 资源ID */
  ResourceId: string;
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
  AddressIp?: string | null;
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
  /** 如果 IPv6地址是 ULA 类型，绑定的公网IP地址。 */
  PublicIpAddress?: string | null;
  /** `IPv6`地址的类型: `GUA`, `OTHER`, `ULA` */
  AddressType?: string | null;
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
  UnitPrice?: number | null;
  /** 按量计费后付费计价单元，可取值范围： HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）： GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。 */
  ChargeUnit?: string | null;
  /** 预付费商品的原价，单位：元。 */
  OriginalPrice?: number | null;
  /** 预付费商品的折扣价，单位：元。 */
  DiscountPrice?: number | null;
}

/** 本端目的IP端口转换复杂结构 */
declare interface LocalDestinationIpPortTranslationNatRule {
  /** 协议 */
  Protocol: string;
  /** 源端口 */
  OriginalPort: number;
  /** 源IP */
  OriginalIp: string;
  /** 目的端口 */
  TranslationPort: number;
  /** 目的IP */
  TranslationIp: string;
  /** 描述 */
  Description?: string;
}

/** 本地网关信息 */
declare interface LocalGateway {
  /** CDC实例ID */
  CdcId?: string;
  /** VPC实例ID */
  VpcId?: string;
  /** 本地网关实例ID（计划弃用） */
  UniqLocalGwId?: string;
  /** 本地网关名称 */
  LocalGatewayName?: string;
  /** 本地网关IP地址 */
  LocalGwIp?: string;
  /** 本地网关创建时间 */
  CreateTime?: string;
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
  /** 本地网关实例ID（计划起用） */
  LocalGatewayId?: string;
}

/** 模板对象成员信息 */
declare interface MemberInfo {
  /** 模板对象成员 */
  Member: string;
  /** 模板对象成员描述信息 */
  Description?: string;
}

/** 云联网路由表信息 */
declare interface ModifyRouteTableInfo {
  /** 云联网路由表id。 */
  RouteTableId: string;
  /** 云联网路由表名称。Name和Description 两者必传一个。 */
  Name?: string;
  /** 云联网路由表描述。Name和Description 两者必传一个。 */
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
  NatGatewayId?: string;
  /** NAT网关的名称。 */
  NatGatewayName?: string;
  /** NAT网关创建的时间。 */
  CreatedTime?: string;
  /** NAT网关的状态。 'PENDING'：生产中，'DELETING'：删除中/子实例关闭中，'AVAILABLE'：运行中，'UPDATING'：升级中，‘PENDFAILURE’：创建失败，‘DELETEFAILURE：删除失败，‘DENIED’：子实例关闭中 */
  State?: string;
  /** 网关最大外网出带宽(单位:Mbps)。 */
  InternetMaxBandwidthOut?: number;
  /** 网关并发连接上限。 */
  MaxConcurrentConnection?: number;
  /** 绑定NAT网关的公网IP对象数组。 */
  PublicIpAddressSet?: NatGatewayAddress[];
  /** NAT网关网络状态。“AVAILABLE”:运行中, “UNAVAILABLE”:不可用, “INSUFFICIENT”:欠费停服。 */
  NetworkState?: string;
  /** NAT网关的端口转发规则。 */
  DestinationIpPortTranslationNatRuleSet?: DestinationIpPortTranslationNatRule[];
  /** VPC实例ID。 */
  VpcId?: string;
  /** NAT网关所在的可用区。 */
  Zone?: string;
  /** 绑定的专线网关ID。 */
  DirectConnectGatewayIds?: string[] | null;
  /** 所属子网ID。 */
  SubnetId?: string | null;
  /** 标签键值对。 */
  TagSet?: Tag[];
  /** NAT网关绑定的安全组列表 */
  SecurityGroupSet?: string[] | null;
  /** NAT网关的SNAT转发规则。 */
  SourceIpTranslationNatRuleSet?: SourceIpTranslationNatRule[] | null;
  /** 是否独享型NAT。 */
  IsExclusive?: boolean | null;
  /** 独享型NAT所在的网关集群的带宽(单位:Mbps)，当IsExclusive为false时无此字段。 */
  ExclusiveGatewayBandwidth?: number | null;
  /** NAT网关是否被封禁。“NORMAL”：未被封禁，“RESTRICTED”：已被封禁。 */
  RestrictState?: string | null;
  /** NAT网关类型，1表示传统型NAT网关，2表示标准型NAT网关 */
  NatProductVersion?: number | null;
  /** 是否启用根据目的网段选择SNAT使用的EIP功能 */
  SmartScheduleMode?: boolean | null;
  /** NAT实例归属的专属集群id */
  DedicatedClusterId?: string | null;
}

/** NAT网关绑定的弹性IP */
declare interface NatGatewayAddress {
  /** 弹性公网IP（EIP）的唯一 ID，形如：`eip-11112222`。 */
  AddressId?: string;
  /** 外网IP地址，形如：`123.121.34.33`。 */
  PublicIpAddress?: string;
  /** 资源封堵状态。true表示弹性ip处于封堵状态，false表示弹性ip处于未封堵状态。 */
  IsBlocked?: boolean;
  /** 资源封堵类型。NORMAL表示未封禁，SECURITY表示安全封禁，USER表示用户封禁，OTHER表示其他封禁，多个原因封禁时用&连接，比如：SECURITY&USER&OTHER。 */
  BlockType?: string;
}

/** NAT网关的端口转发规则 */
declare interface NatGatewayDestinationIpPortTranslationNatRule {
  /** 网络协议，可选值：`TCP`、`UDP`。 */
  IpProtocol?: string;
  /** 弹性公网IP。 */
  PublicIpAddress?: string;
  /** 公网端口。 */
  PublicPort?: number;
  /** 内网地址。 */
  PrivateIpAddress?: string;
  /** 内网端口。 */
  PrivatePort?: number;
  /** NAT网关转发规则描述。 */
  Description?: string;
  /** NAT网关的ID。 */
  NatGatewayId?: string | null;
  /** 私有网络VPC的ID。 */
  VpcId?: string | null;
  /** NAT网关转发规则创建时间。 */
  CreatedTime?: string | null;
}

/** NAT地域地区对象 */
declare interface NatRegionInfoWithArea {
}

/** 网络探测对象。 */
declare interface NetDetect {
  /** `VPC`实例`ID`。形如：`vpc-12345678` */
  VpcId?: string;
  /** `VPC`实例名称。 */
  VpcName?: string;
  /** 子网实例ID。形如：subnet-12345678。 */
  SubnetId?: string;
  /** 子网实例名称。 */
  SubnetName?: string;
  /** 网络探测实例ID。形如：netd-12345678。 */
  NetDetectId?: string;
  /** 网络探测名称，最大长度不能超过60个字节。 */
  NetDetectName?: string;
  /** 探测目的IPv4地址数组，最多两个。 */
  DetectDestinationIp?: string[];
  /** 系统自动分配的探测源IPv4数组。长度为2。 */
  DetectSourceIp?: string[];
  /** 下一跳类型，目前我们支持的类型有：VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；NAT：NAT网关；NORMAL_CVM：普通云服务器；CCN：云联网网关；NONEXTHOP：无下一跳； */
  NextHopType?: string;
  /** 下一跳目的网关，取值与“下一跳类型”相关：下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；下一跳类型为NAT，取值Nat网关，形如：nat-12345678；下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；下一跳类型为CCN，取值云联网ID，形如：ccn-12345678；下一跳类型为NONEXTHOP，指定网络探测为无下一跳的网络探测，添加和修改时，不需要指定值，查询时值为空字符串； */
  NextHopDestination?: string;
  /** 下一跳网关名称。 */
  NextHopName?: string | null;
  /** 网络探测描述。 */
  NetDetectDescription?: string | null;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
}

/** 网络探测目的IP的验证结果。 */
declare interface NetDetectIpState {
  /** 探测目的IPv4地址。 */
  DetectDestinationIp?: string;
  /** 探测结果。0：成功；-1：查询不到路由丢包；-2：外出ACL丢包；-3：IN ACL丢包；-4：其他错误； */
  State?: number;
  /** 时延，单位毫秒 */
  Delay?: number;
  /** 丢包率 */
  PacketLossRate?: number;
}

/** 网络探测验证结果。 */
declare interface NetDetectState {
  /** 网络探测实例ID。形如：netd-12345678。 */
  NetDetectId?: string;
  /** 网络探测目的IP验证结果对象数组。 */
  NetDetectIpStateSet?: NetDetectIpState[];
}

/** 网络ACL */
declare interface NetworkAcl {
  /** `VPC`实例`ID`。 */
  VpcId?: string;
  /** 网络ACL实例`ID`。 */
  NetworkAclId?: string;
  /** 网络ACL名称，最大长度为60。 */
  NetworkAclName?: string;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 网络ACL关联的子网数组。 */
  SubnetSet?: Subnet[];
  /** 该参数仅对三元组ACL有效，网络ACl入站规则。 */
  IngressEntries?: NetworkAclEntry[];
  /** 该参数仅对三元组ACL有效，网络ACL出站规则。 */
  EgressEntries?: NetworkAclEntry[];
  /** 网络ACL类型。三元组：'TRIPLE' 五元组：'QUINTUPLE' */
  NetworkAclType?: string;
  /** 标签键值对 */
  TagSet?: Tag[];
}

/** 网络ACL规则。 */
declare interface NetworkAclEntry {
  /** 协议, 取值: TCP,UDP, ICMP, ALL。 */
  Protocol?: string;
  /** 端口(all, 单个port, range)。当Protocol为ALL或ICMP时，不能指定Port。使用-指定端口范围，如：10-20。 */
  Port?: string;
  /** 网段或IP(互斥)。增量创建ACL规则时，CidrBlock和Ipv6CidrBlock至少提供一个。 */
  CidrBlock?: string;
  /** 网段或IPv6(互斥)。 */
  Ipv6CidrBlock?: string;
  /** ACCEPT 或 DROP。 */
  Action?: string;
  /** 规则描述，最大长度100。 */
  Description?: string;
  /** 修改时间。 */
  ModifyTime?: string;
  /** 优先级，从1开始。 */
  Priority?: number;
  /** IPv4网络ACL条目唯一ID。当修改ACL条目时，NetworkAclIpv4EntryId和NetworkAclIpv6EntryID至少提供一个。 */
  NetworkAclIpv4EntryId?: string | null;
  /** IPv6网络ACL条目唯一ID。当修改ACL条目时，NetworkAclIpv4EntryId和NetworkAclIpv6EntryId至少提供一个。 */
  NetworkAclIpv6EntryId?: string | null;
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
  /** 网卡在云主机实例内的序号。 */
  DeviceIndex?: number;
  /** 云主机所有者账户信息。 */
  InstanceAccountId?: string;
  /** 绑定时间。 */
  AttachTime?: string;
  /** 云主机实例ID。 */
  InstanceId?: string;
}

/** 对等连接实例信息。 */
declare interface PeerConnection {
  /** 本端VPC唯一ID。 */
  SourceVpcId?: string;
  /** 对端VPC唯一ID。 */
  PeerVpcId?: string;
  /** 对等连接唯一ID。 */
  PeeringConnectionId?: string;
  /** 对等连接名称。 */
  PeeringConnectionName?: string;
  /** 对等连接状态，PENDING，投放中；ACTIVE，使用中；REJECTED，已拒绝‘DELETED，已删除；FAILED，失败；EXPIRED，已过期；ISOLATED，隔离中。 */
  State?: string;
  /** 是否是新控制器，true: 是NewAfc；false:不是。 */
  IsNgw?: boolean;
  /** 对等连接带宽值。 */
  Bandwidth?: number;
  /** 本端地域。 */
  SourceRegion?: string;
  /** 对端地域。 */
  DestinationRegion?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 本端APPID。 */
  AppId?: number;
  /** 对端APPID。 */
  PeerAppId?: number;
  /** 计费类型，POSTPAID_BY_DAY_MAX：日峰值计费；POSTPAID_BY_MONTH_95：月95计费。 */
  ChargeType?: string;
  /** 本端UIN。 */
  SourceUin?: number;
  /** 对端UIN。 */
  DestinationUin?: number;
  /** 资源标签数据。 */
  TagSet?: Tag[];
  /** 服务分级：PT、AU、AG。 */
  QosLevel?: string | null;
  /** 互通类型，VPC_PEER：VPC间互通；VPC_BM_PEER：VPC与黑石网络互通。 */
  Type?: string | null;
}

/** 安全组策略统计 */
declare interface PolicyStatistics {
  /** 入站IPv4总数 */
  IngressIPv4TotalCount: number | null;
  /** 入站IPv6总数 */
  IngressIPv6TotalCount: number | null;
  /** 出站IPv4总数 */
  EgressIPv4TotalCount: number | null;
  /** 出站IPv6总数 */
  EgressIPv6TotalCount: number | null;
}

/** 价格 */
declare interface Price {
  /** 实例价格。 */
  InstancePrice?: ItemPrice;
  /** 带宽价格。 */
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
  /** IP服务质量等级，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。 */
  QosLevel?: string;
}

/** 私网NAT网关跨域信息 */
declare interface PrivateNatCrossDomainInfo {
  /** 跨域私网NAT关联的云联网ID */
  CcnId?: string | null;
  /** 跨域私网NAT本端Vpc */
  LocalVpcId?: string | null;
  /** 跨域私网NAT对端Vpc */
  PeerVpcId?: string | null;
}

/** 本端目的IP端口转换复杂结构 */
declare interface PrivateNatDestinationIpPortTranslationNatRule {
  /** 协议 */
  Protocol: string;
  /** 原端口 */
  OriginalPort: number;
  /** 原IP */
  OriginalIp: string;
  /** 映射端口 */
  TranslationPort: number;
  /** 映射IP */
  TranslationIp: string;
  /** 描述 */
  Description?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 私网网关对象 */
declare interface PrivateNatGateway {
  /** 私网网关`ID`。 */
  NatGatewayId?: string;
  /** 私网网关名称。 */
  NatGatewayName?: string;
  /** 私网网关关联`VPC`实例`ID`。 */
  VpcId?: string | null;
  /** 私网网关当前状态。 */
  Status?: string;
  /** 私网网关跨域标志。 */
  CrossDomain?: boolean;
  /** 创建时间 */
  CreatedTime?: string;
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
  /** 专线网关唯一`ID` */
  DirectConnectGatewayIds?: string[] | null;
  /** 私网网关类型 */
  NatType?: string | null;
  /** 私网NAT跨域信息 */
  CrossDomainInfo?: PrivateNatCrossDomainInfo | null;
  /** 是否VPC型私网网关 */
  VpcType?: boolean | null;
  /** 跨域私网NAT关联的云联网ID */
  CcnId?: string | null;
}

/** 可创建的私网网关配额数量 */
declare interface PrivateNatGatewayLimit {
  /** 私有网络唯一`ID`。 */
  UniqVpcId: string;
  /** Vpc下总计可创建私网网关数量。 */
  TotalLimit: number;
  /** 可创建私网网关数量。 */
  Available: number;
}

/** 描述网络中心每个产品的配额信息 */
declare interface ProductQuota {
  /** 产品配额ID */
  QuotaId?: string;
  /** 产品配额名称 */
  QuotaName?: string;
  /** 产品当前配额 */
  QuotaCurrent?: number;
  /** 产品配额上限 */
  QuotaLimit?: number;
  /** 产品配额是否有地域属性 */
  QuotaRegion?: boolean;
}

/** 描述配额信息 */
declare interface Quota {
  /** 配额名称，取值范围：- `TOTAL_EIP_QUOTA`：用户当前地域下EIP的配额数；- `DAILY_EIP_APPLY`：用户当前地域下今日申购次数；- `DAILY_PUBLIC_IP_ASSIGN`：用户当前地域下，重新分配公网 IP次数；- `TOTAL_EIP6_QUOTA`：用户当前地域下，传统弹性公网IPv6的配额数；- `BGP_EIPv6_QUOTA`：用户当前地域下，可申请的 BGP 弹性公网IPv6 的配额数；- `SINGLEISP_EIPv6_QUOTA`：用户当前地域下，可申请的静态单线弹性公网IPv6 的配额数； */
  QuotaId?: string;
  /** 当前数量 */
  QuotaCurrent?: number;
  /** 配额数量 */
  QuotaLimit?: number;
  /** 配额所属的网络组 */
  QuotaGroup?: string | null;
}

/** 安全组被引用信息 */
declare interface ReferredSecurityGroup {
  /** 安全组实例ID。 */
  SecurityGroupId?: string;
  /** 引用安全组实例ID（SecurityGroupId）的所有安全组实例ID。 */
  ReferredSecurityGroupIds?: string[];
}

/** 内网保留IP数据 */
declare interface ReserveIpAddressInfo {
  /** 内网保留IP唯一 ID。 */
  ReserveIpId?: string;
  /** VPC唯一 ID。 */
  VpcId?: string;
  /** 子网唯一 ID。 */
  SubnetId?: string;
  /** 内网保留IP地址。 */
  ReserveIpAddress?: string;
  /** 内网保留 IP绑定的资源实例 ID。 */
  ResourceId?: string;
  /** 产品申请的IpType。 */
  IpType?: number;
  /** 绑定状态，UnBind-未绑定， Bind-绑定。 */
  State?: string;
  /** 保留 IP名称。 */
  Name?: string;
  /** 保留 IP描述。 */
  Description?: string;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 标签键值对。 */
  TagSet?: Tag[];
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

/** 资源统计信息 */
declare interface ResourceStatistics {
  /** Vpc实例ID，例如：vpc-f1xjkw1b。 */
  VpcId?: string;
  /** 子网实例ID，例如：subnet-bthucmmy。 */
  SubnetId?: string;
  /** 当前已使用的IP总数。 */
  Ip?: number;
  /** 资源统计信息。 */
  ResourceStatisticsItemSet?: ResourceStatisticsItem[];
}

/** 资源统计项。 */
declare interface ResourceStatisticsItem {
  /** 资源类型。比如，CVM，ENI等。 */
  ResourceType?: string;
  /** 资源名称。 */
  ResourceName?: string;
  /** 资源个数。 */
  ResourceCount?: number;
}

/** 路由策略对象 */
declare interface Route {
  /** 创建IPv4目的网段，取值不能在私有网络网段内，例如：112.20.51.0/24。 */
  DestinationCidrBlock: string;
  /** 下一跳类型，目前我们支持的类型有：CVM：公网网关类型的云服务器；VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；HAVIP：高可用虚拟IP；NAT：公网NAT网关; NORMAL_CVM：普通云服务器；EIP：云服务器的公网IP；LOCAL_GATEWAY：CDC本地网关；INTRANAT：私网NAT网关；USER_CCN；云联网（自定义路由）。 */
  GatewayType: string;
  /** 下一跳地址，这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址。特殊说明：GatewayType为NORMAL_CVM时，GatewayId填写实例的内网IP。GatewayType为EIP时，GatewayId填写0。 */
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
  /** 创建IPv6目的网段，取值不能在私有网络网段内，例如：2402:4e00:1000:810b::/64。 */
  DestinationIpv6CidrBlock?: string | null;
  /** 路由唯一策略ID。 */
  RouteItemId?: string;
  /** 路由策略是否发布到云联网。该字段仅做出参使用，作为入参字段时此参数不生效。 */
  PublishedToVbc?: boolean | null;
  /** 路由策略创建时间 */
  CreatedTime?: string;
  /** CDC 集群唯一 ID。 */
  CdcId?: string | null;
}

/** 路由冲突对象 */
declare interface RouteConflict {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId?: string;
  /** 要检查的与之冲突的目的端 */
  DestinationCidrBlock?: string;
  /** 冲突的路由策略列表 */
  ConflictSet?: Route[];
}

/** 用于修改入路由表ECMP算法。现在支持的算法有：ECMP_QUINTUPLE_HASH：五元组hash，ECMP_SOURCE_DESTINATION_IP_HASH：源和目的IP hash，ECMP_DESTINATION_IP_HASH：目的IP hash，ECMP_SOURCE_IP_HASH：源IP hash。 */
declare interface RouteECMPAlgorithm {
  /** 目标网段 */
  DestinationCidrBlock?: string | null;
  /** 支持的 ECMP算法有：ECMP_QUINTUPLE_HASH：五元组hash，ECMP_SOURCE_DESTINATION_IP_HASH：源和目的IP hash，ECMP_DESTINATION_IP_HASH：目的IP hash，ECMP_SOURCE_IP_HASH：源IP hash。 */
  SubnetRouteAlgorithm?: string | null;
}

/** 路由表选择策略信息 */
declare interface RouteSelectionPolicy {
  /** 云联网ID。 */
  CcnId: string;
  /** 路由表ID。 */
  RouteTableId: string;
  /** 路由表名称。 */
  RouteTableName: string;
  /** 实例类型。如VPC */
  InstanceType: string;
  /** 实例名称。 */
  InstanceName: string;
  /** 源端cidr。 */
  SourceCidrBlock: string;
  /** 路由表描述。 */
  Description: string | null;
  /** 实例ID。 */
  InstanceId: string;
  /** 关联实例所属UIN（根账号）。 */
  InstanceUin: string;
}

/** 路由表对象 */
declare interface RouteTable {
  /** VPC实例ID。 */
  VpcId?: string;
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId?: string;
  /** 路由表名称。 */
  RouteTableName?: string;
  /** 路由表关联关系。 */
  AssociationSet?: RouteTableAssociation[];
  /** IPv4路由策略集合。 */
  RouteSet?: Route[];
  /** 是否默认路由表。 */
  Main?: boolean;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 标签键值对。 */
  TagSet?: Tag[];
  /** local路由是否发布云联网。 */
  LocalCidrForCcn?: CidrForCcn[] | null;
}

/** 路由表关联关系 */
declare interface RouteTableAssociation {
  /** 子网实例ID。 */
  SubnetId?: string | null;
  /** 路由表实例ID。 */
  RouteTableId?: string | null;
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
  SecurityGroupId?: string;
  /** 云服务器实例数。 */
  CVM?: number;
  /** MySQL数据库实例数。 */
  CDB?: number;
  /** 弹性网卡实例数。 */
  ENI?: number;
  /** 被安全组引用数。 */
  SG?: number;
  /** 负载均衡实例数。 */
  CLB?: number;
  /** 全量实例的绑定统计。 */
  InstanceStatistics?: InstanceStatistic[];
  /** 所有资源的总计数（不包含被安全组引用数）。 */
  TotalCount?: number;
}

/** 用户安全组配额限制。 */
declare interface SecurityGroupLimitSet {
  /** 每个项目每个地域可创建安全组数 */
  SecurityGroupLimit?: number;
  /** 安全组下的最大规则数 */
  SecurityGroupPolicyLimit?: number;
  /** 安全组下嵌套安全组规则数 */
  ReferedSecurityGroupLimit?: number;
  /** 单安全组关联实例数 */
  SecurityGroupInstanceLimit?: number;
  /** 实例关联安全组数 */
  InstanceSecurityGroupLimit?: number;
  /** 安全组展开后的规则数限制 */
  SecurityGroupExtendedPolicyLimit?: number;
  /** 被引用的安全组关联CVM、ENI的实例配额 */
  SecurityGroupReferedCvmAndEniLimit?: number;
  /** 被引用的安全组关联数据库、LB等服务实例配额 */
  SecurityGroupReferedSvcLimit?: number;
}

/** 安全组规则对象 */
declare interface SecurityGroupPolicy {
  /** 安全组规则索引号，值会随着安全组规则的变更动态变化。使用PolicyIndex时，请先调用`DescribeSecurityGroupPolicies`获取到规则的PolicyIndex，并且结合返回值中的Version一起使用处理规则。 */
  PolicyIndex?: number | null;
  /** 协议, 取值: TCP,UDP,ICMP,ICMPv6,ALL。 */
  Protocol?: string | null;
  /** 端口(all, 离散port, range)。说明：如果Protocol设置为ALL，则Port也需要设置为all。 */
  Port?: string | null;
  /** 协议端口ID或者协议端口组ID。ServiceTemplate和Protocol+Port互斥。 */
  ServiceTemplate?: ServiceTemplateSpecification | null;
  /** 网段或IP(互斥)，特殊说明：0.0.0.0/n 都会映射为0.0.0.0/0。作为入参时，可使用字符串`MY_PUBLIC_IP`指代发起请求的公网IP地址。 */
  CidrBlock?: string | null;
  /** 网段或IPv6(互斥)。作为入参时，可使用字符串`MY_PUBLIC_IP`指代发起请求的公网IPv6地址。 */
  Ipv6CidrBlock?: string | null;
  /** 安全组实例ID，例如：sg-ohuuioma。 */
  SecurityGroupId?: string | null;
  /** IP地址ID或者IP地址组ID。 */
  AddressTemplate?: AddressTemplateSpecification | null;
  /** ACCEPT 或 DROP。 */
  Action?: string | null;
  /** 安全组规则描述。作为入参时，当未传递该参数或值为空，且参数CidrBlock或Ipv6CidrBlock值为MY_PUBLIC_IP时，该参数的值将会被自动填充为Replaced-From-MY_PUBLIC_IP。 */
  PolicyDescription?: string | null;
  /** 安全组最近修改时间。 */
  ModifyTime?: string | null;
}

/** 安全组规则集合 */
declare interface SecurityGroupPolicySet {
  /** 安全组规则当前版本。用户每次更新安全规则版本会自动加1，防止更新的路由规则已过期，不填不考虑冲突。 */
  Version?: string | null;
  /** 出站规则。 */
  Egress?: SecurityGroupPolicy[] | null;
  /** 入站规则。 */
  Ingress?: SecurityGroupPolicy[] | null;
  /** 安全组策略条目统计。只用于出参。 */
  PolicyStatistics?: PolicyStatistics | null;
}

/** SecurityPolicyDatabase策略 */
declare interface SecurityPolicyDatabase {
  /** 本端网段 */
  LocalCidrBlock: string | null;
  /** 对端网段 */
  RemoteCidrBlock: string[] | null;
}

/** 协议端口模板 */
declare interface ServiceTemplate {
  /** 协议端口实例ID，例如：ppm-f5n1f8da。 */
  ServiceTemplateId?: string;
  /** 模板名称。 */
  ServiceTemplateName?: string;
  /** 协议端口信息。 */
  ServiceSet?: string[];
  /** 创建时间。 */
  CreatedTime?: string;
  /** 带备注的协议端口信息。 */
  ServiceExtraSet?: ServicesInfo[];
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
}

/** 协议端口模板集合 */
declare interface ServiceTemplateGroup {
  /** 协议端口模板集合实例ID，例如：ppmg-2klmrefu。 */
  ServiceTemplateGroupId?: string;
  /** 协议端口模板集合名称。 */
  ServiceTemplateGroupName?: string;
  /** 协议端口模板实例ID。 */
  ServiceTemplateIdSet?: string[];
  /** 创建时间。 */
  CreatedTime?: string;
  /** 协议端口模板实例信息。 */
  ServiceTemplateSet?: ServiceTemplate[];
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
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

/** 快照文件信息 */
declare interface SnapshotFileInfo {
  /** 快照策略Id。 */
  SnapshotPolicyId: string;
  /** 实例Id。 */
  InstanceId: string;
  /** 快照文件Id。 */
  SnapshotFileId: string;
  /** 备份时间。 */
  BackupTime: string;
  /** 操作者Uin。 */
  Operator: string;
}

/** 快照策略关联实例信息 */
declare interface SnapshotInstance {
  /** 实例Id。 */
  InstanceId: string;
  /** 实例类型，目前支持安全组：securitygroup。 */
  InstanceType: string;
  /** 实例所在地域。 */
  InstanceRegion: string;
  /** 快照策略Id。 */
  SnapshotPolicyId?: string;
  /** 实例名称。 */
  InstanceName?: string;
}

/** 快照策略 */
declare interface SnapshotPolicy {
  /** 快照策略名称。 */
  SnapshotPolicyName: string;
  /** 备份策略类型，operate-操作备份，time-定时备份。 */
  BackupType: string;
  /** 保留时间，支持1～365天。 */
  KeepTime: number;
  /** 是否创建新的cos桶，默认为False。 */
  CreateNewCos: boolean | null;
  /** cos桶所在地域。 */
  CosRegion: string;
  /** cos桶。 */
  CosBucket: string;
  /** 快照策略Id。 */
  SnapshotPolicyId?: string;
  /** 时间备份策略。 */
  BackupPolicies?: BackupPolicy[] | null;
  /** 启用状态，True-启用，False-停用，默认为True。 */
  Enable?: boolean;
  /** 创建时间。 */
  CreateTime?: string | null;
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
}

/** NAT的SNAT规则 */
declare interface SourceIpTranslationNatRule {
  /** 资源ID，如果ResourceType为USERDEFINED，可以为空字符串 */
  ResourceId: string;
  /** 资源类型，目前包含SUBNET、NETWORKINTERFACE、USERDEFINED */
  ResourceType: string | null;
  /** 源IP/网段 */
  PrivateIpAddress: string;
  /** 弹性IP地址池 */
  PublicIpAddresses: string[];
  /** 规则描述 */
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
  SslVpnClientConfiguration?: string;
  /** 更证书 */
  SslVpnRootCert?: string;
  /** 客户端密钥 */
  SslVpnKey?: string;
  /** 客户端证书 */
  SslVpnCert?: string;
  /** SSL-VPN-CLIENT 实例ID。 */
  SslVpnClientId?: string;
}

/** SSL-VPN-CLIENT 出参 */
declare interface SslVpnClient {
  /** VPC实例ID。 */
  VpcId?: string;
  /** SSL-VPN-SERVER 实例ID。 */
  SslVpnServerId?: string;
  /** 证书状态。0:创建中1:正常2:已停用3.已过期4.创建出错 */
  CertStatus?: number;
  /** SSL-VPN-CLIENT 实例ID。 */
  SslVpnClientId?: string;
  /** 证书开始时间。 */
  CertBeginTime?: string;
  /** 证书到期时间。 */
  CertEndTime?: string;
  /** CLIENT NAME。 */
  Name?: string;
  /** 创建CLIENT 状态。0 创建中1 创建出错2 更新中3 更新出错4 销毁中5 销毁出错6 已连通7 未知 */
  State?: string;
}

/** SSL-VPN-SERVER 出参 */
declare interface SslVpnSever {
  /** VPC实例ID. */
  VpcId?: string | null;
  /** SSL-VPN-SERVER 实例ID。 */
  SslVpnServerId?: string;
  /** VPN 实例ID。 */
  VpnGatewayId?: string;
  /** SSL-VPN-SERVER name。 */
  SslVpnServerName?: string;
  /** 本端地址段。 */
  LocalAddress?: string[];
  /** 客户端地址段。 */
  RemoteAddress?: string;
  /** 客户端最大连接数。 */
  MaxConnection?: number;
  /** SSL-VPN 网关公网IP。 */
  WanIp?: string;
  /** SSL VPN服务端监听协议 */
  SslVpnProtocol?: string;
  /** SSL VPN服务端监听协议端口 */
  SslVpnPort?: number;
  /** 加密算法。 */
  EncryptAlgorithm?: string;
  /** 认证算法。 */
  IntegrityAlgorithm?: string;
  /** 是否支持压缩。 */
  Compress?: number;
  /** 创建时间。 */
  CreateTime?: string;
  /** SSL-VPN-SERVER 创建状态。0 创建中1 创建出错2 更新中3 更新出错4 销毁中5 销毁出错6 已连通7 未知 */
  State?: number;
  /** 是否开启SSO认证。1：开启 0： 不开启 */
  SsoEnabled?: number;
  /** EIAM应用ID */
  EiamApplicationId?: string;
  /** 是否开启策略控制。0：不开启 1： 开启 */
  AccessPolicyEnabled?: number;
  /** 策略信息 */
  AccessPolicy?: AccessPolicy[];
  /** CAM服务提供商Name */
  SpName?: string | null;
}

/** 子网对象 */
declare interface Subnet {
  /** `VPC`实例`ID`。 */
  VpcId?: string;
  /** 子网实例`ID`，例如：subnet-bthucmmy。 */
  SubnetId?: string;
  /** 子网名称。 */
  SubnetName?: string;
  /** 子网的 `IPv4` `CIDR`。 */
  CidrBlock?: string;
  /** 是否默认子网。 */
  IsDefault?: boolean;
  /** 是否开启广播。 */
  EnableBroadcast?: boolean;
  /** 可用区。 */
  Zone?: string;
  /** 路由表实例ID，例如：rtb-l2h8d7c2。 */
  RouteTableId?: string;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 可用`IPv4`数。 */
  AvailableIpAddressCount?: number;
  /** 子网的 `IPv6` `CIDR`。 */
  Ipv6CidrBlock?: string;
  /** 关联`ACL`ID */
  NetworkAclId?: string;
  /** 是否为 `SNAT` 地址池子网。 */
  IsRemoteVpcSnat?: boolean;
  /** 子网`IPv4`总数。 */
  TotalIpAddressCount?: number;
  /** 标签键值对。 */
  TagSet?: Tag[];
  /** CDC实例ID。 */
  CdcId?: string | null;
  /** 是否是CDC所属子网。0:否 1:是 */
  IsCdcSubnet?: number | null;
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

/** 标签描述信息 */
declare interface Tags {
  /** 标签键 */
  Key?: string | null;
  /** 标签值 */
  Value?: string | null;
}

/** 参数模板配额 */
declare interface TemplateLimit {
  /** 参数模板IP地址成员配额。 */
  AddressTemplateMemberLimit?: number;
  /** 参数模板IP地址组成员配额。 */
  AddressTemplateGroupMemberLimit?: number;
  /** 参数模板I协议端口成员配额。 */
  ServiceTemplateMemberLimit?: number;
  /** 参数模板协议端口组成员配额。 */
  ServiceTemplateGroupMemberLimit?: number;
}

/** 流量描述。 */
declare interface TrafficFlow {
  /** 实际流量，单位为 字节 */
  Value?: number;
  /** 格式化后的流量，单位见参数 FormatUnit */
  FormatValue?: number | null;
  /** 格式化后流量的单位 */
  FormatUnit?: string | null;
}

/** 流量包信息描述类型 */
declare interface TrafficPackage {
  /** 流量包唯一ID */
  TrafficPackageId?: string;
  /** 流量包名称 */
  TrafficPackageName?: string | null;
  /** 流量包总量，单位GB */
  TotalAmount?: number;
  /** 流量包剩余量，单位GB */
  RemainingAmount?: number;
  /** 流量包状态，可能的值有: AVAILABLE-可用状态， EXPIRED-已过期， EXHAUSTED-已用完， REFUNDED-已退还， DELETED-已删除 */
  Status?: string;
  /** 流量包创建时间 */
  CreatedTime?: string;
  /** 流量包截止时间 */
  Deadline?: string;
  /** 已使用的流量，单位GB */
  UsedAmount?: number;
  /** 流量包标签 */
  TagSet?: Tag[] | null;
  /** 区分闲时流量包与全时流量包 */
  DeductType?: string;
}

/** 流量调度规则 */
declare interface TrafficQosPolicySet {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId?: string | null;
  /** qos id。 */
  QosId?: number | null;
  /** 描述。 */
  QosPolicyDescription?: string | null;
  /** 名称。 */
  QosPolicyName?: string | null;
  /** 带宽。 */
  Bandwidth?: number | null;
  /** 流量调度策略ID。 */
  QosPolicyId?: string | null;
}

/** 私网网关转发规则匹配ACL */
declare interface TranslationAclRule {
  /** ACL协议类型，可选值:"ALL","TCP","UDP" */
  Protocol: string;
  /** 源端口。 */
  SourcePort: string;
  /** 源地址。支持`ip`或`cidr`格式"xxx.xxx.xxx.000/xx" */
  SourceCidr: string;
  /** 目的端口。 */
  DestinationPort: string;
  /** 目的地址。 */
  DestinationCidr: string;
  /** ACL规则`ID`。 */
  AclRuleId?: number;
  /** 是否匹配。 */
  Action?: number;
  /** ACL规则描述 */
  Description?: string;
}

/** 私网网关Snat转发规则 */
declare interface TranslationNatRule {
  /** 转换规则目标，可选值"LOCAL","PEER"。 */
  TranslationDirection: string;
  /** 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。 */
  TranslationType: string;
  /** 转换`IP`,当转换规则类型为四层时为`IP`池。 */
  TranslationIp: string;
  /** 转换规则描述。 */
  Description: string | null;
  /** 源`IP`,当转换规则类型为三层时有效。 */
  OriginalIp?: string | null;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 私网网关Snat转发规则修改 */
declare interface TranslationNatRuleDiff {
  /** 转发规则目标，可选值"LOCAL","PEER"。 */
  TranslationDirection: string;
  /** 转发规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。 */
  TranslationType: string;
  /** 转发规则映射`IP`,当转发规则类型为四层时为`IP`池 */
  TranslationIp: string;
  /** 转发规则描述。 */
  Description: string;
  /** 旧转发规则映射`IP`,当转发规则类型为四层时为`IP`池 */
  OldTranslationIp: string;
  /** 新转发规则源`IP`,当转发规则类型为三层时有效 */
  OriginalIp?: string;
  /** 旧转发规则源`IP`,当转发规则类型为三层时有效 */
  OldOriginalIp?: string;
}

/** 私网网关Snat转发规则入参 */
declare interface TranslationNatRuleInput {
  /** 转换规则目标，可选值"LOCAL","PEER"。 */
  TranslationDirection: string;
  /** 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。 */
  TranslationType: string;
  /** 转换`IP`,当转换规则类型为四层时为`IP`池。 */
  TranslationIp: string;
  /** 转换规则描述。 */
  Description: string;
  /** 源`IP`,当转换规则类型为三层时有效。 */
  OriginalIp?: string;
}

/** 共享流量包用量明细 */
declare interface UsedDetail {
  /** 流量包唯一ID */
  TrafficPackageId?: string;
  /** 流量包名称 */
  TrafficPackageName?: string | null;
  /** 流量包总量 */
  TotalAmount?: TrafficFlow;
  /** 本次抵扣 */
  Deduction?: TrafficFlow;
  /** 本次抵扣后剩余量 */
  RemainingAmount?: TrafficFlow;
  /** 抵扣时间 */
  Time?: string;
  /** 资源类型。可能的值: CVM, LB, NAT, HAVIP, EIP */
  ResourceType?: string;
  /** 资源ID */
  ResourceId?: string;
  /** 资源名称 */
  ResourceName?: string;
  /** 流量包到期时间 */
  Deadline?: string;
}

/** 私有网络(VPC)对象。 */
declare interface VpcInfo {
  /** `VPC`名称。 */
  VpcName?: string;
  /** `VPC`实例`ID`，例如：vpc-azd4dt1c。 */
  VpcId?: string;
  /** `VPC`的`IPv4` `CIDR`。 */
  CidrBlock?: string;
  /** 是否默认`VPC`。 */
  IsDefault?: boolean;
  /** 是否开启组播。 */
  EnableMulticast?: boolean;
  /** 创建时间。 */
  CreatedTime?: string;
  /** `DNS`列表。 */
  DnsServerSet?: string[];
  /** `DHCP`域名选项值。 */
  DomainName?: string;
  /** `DHCP`选项集`ID`。 */
  DhcpOptionsId?: string;
  /** 是否开启`DHCP`。 */
  EnableDhcp?: boolean;
  /** `VPC`的`IPv6` `CIDR`。 */
  Ipv6CidrBlock?: string;
  /** 标签键值对 */
  TagSet?: Tag[];
  /** 辅助CIDR */
  AssistantCidrSet?: AssistantCidr[] | null;
}

/** 终端节点服务的服务白名单对象详情。 */
declare interface VpcEndPointServiceUser {
  /** AppId。 */
  Owner?: number;
  /** Uin。 */
  UserUin?: string;
  /** 描述信息。 */
  Description?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 终端节点服务ID。 */
  EndPointServiceId?: string;
}

/** VPC内网IPv6对象。 */
declare interface VpcIpv6Address {
  /** `VPC`内`IPv6`地址。 */
  Ipv6Address?: string;
  /** 所属子网 `IPv6` `CIDR`。 */
  CidrBlock?: string;
  /** `IPv6`类型。 */
  Ipv6AddressType?: string;
  /** `IPv6`申请时间。 */
  CreatedTime?: string;
}

/** 私有网络配额 */
declare interface VpcLimit {
  /** 私有网络配额描述 */
  LimitType?: string;
  /** 私有网络配额值 */
  LimitValue?: number;
}

/** VPC内网IP对象。 */
declare interface VpcPrivateIpAddress {
  /** `VPC`内网`IP`。 */
  PrivateIpAddress?: string;
  /** 所属子网`CIDR`。 */
  CidrBlock?: string;
  /** 内网`IP`类型。 */
  PrivateIpAddressType?: string;
  /** `IP`申请时间。 */
  CreatedTime?: string;
}

/** Vpc任务结果详细信息。 */
declare interface VpcTaskResultDetailInfo {
  /** 资源ID。 */
  ResourceId: string | null;
  /** 状态。 */
  Status: string | null;
}

/** VPN通道对象。 */
declare interface VpnConnection {
  /** 通道实例ID。 */
  VpnConnectionId?: string;
  /** 通道名称。 */
  VpnConnectionName?: string;
  /** VPC实例ID。 */
  VpcId?: string;
  /** VPN网关实例ID。 */
  VpnGatewayId?: string;
  /** 对端网关实例ID。 */
  CustomerGatewayId?: string;
  /** 预共享密钥。 */
  PreShareKey?: string;
  /** 通道传输协议。 */
  VpnProto?: string;
  /** 通道加密协议。 */
  EncryptProto?: string;
  /** 路由类型。 */
  RouteType?: string;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 通道的生产状态，PENDING：生产中，AVAILABLE：运行中，DELETING：删除中。 */
  State?: string;
  /** 通道连接状态，AVAILABLE：已连接。 */
  NetStatus?: string;
  /** SPD。 */
  SecurityPolicyDatabaseSet?: SecurityPolicyDatabase[];
  /** IKE选项。 */
  IKEOptionsSpecification?: IKEOptionsSpecification;
  /** IPSEC选择。 */
  IPSECOptionsSpecification?: IPSECOptionsSpecification;
  /** 是否支持健康状态探测 */
  EnableHealthCheck?: boolean;
  /** 本端探测ip */
  HealthCheckLocalIp?: string;
  /** 对端探测ip */
  HealthCheckRemoteIp?: string;
  /** 通道健康检查状态，AVAILABLE：正常，UNAVAILABLE：不正常。 未配置健康检查不返回该对象 */
  HealthCheckStatus?: string;
  /** DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启） */
  DpdEnable?: number | null;
  /** DPD超时时间。即探测确认对端不存在需要的时间。 */
  DpdTimeout?: string | null;
  /** DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试） */
  DpdAction?: string | null;
  /** 标签键值对数组 */
  TagSet?: Tag[];
  /** 协商类型 */
  NegotiationType?: string | null;
  /** Bgp配置信息 */
  BgpConfig?: BgpConfigAndAsn | null;
  /** Nqa配置信息 */
  HealthCheckConfig?: HealthCheckConfig | null;
}

/** VPN网关对象。 */
declare interface VpnGateway {
  /** 网关实例ID。 */
  VpnGatewayId?: string;
  /** VPC实例ID。 */
  VpcId?: string;
  /** 网关实例名称。 */
  VpnGatewayName?: string;
  /** 网关实例类型：'IPSEC', 'SSL','CCN','SSL_CCN'。 */
  Type?: string;
  /** 网关实例状态， 'PENDING'：生产中，'PENDING_ERROR'：生产失败，'DELETING'：删除中，'DELETING_ERROR'：删除失败，'AVAILABLE'：运行中。 */
  State?: string;
  /** 网关公网IP。 */
  PublicIpAddress?: string;
  /** 网关续费类型：'NOTIFY_AND_MANUAL_RENEW'：手动续费，'NOTIFY_AND_AUTO_RENEW'：自动续费，'NOT_NOTIFY_AND_NOT_RENEW'：到期不续费。 */
  RenewFlag?: string;
  /** 网关付费类型：POSTPAID_BY_HOUR：按量计费，PREPAID：包年包月预付费。 */
  InstanceChargeType?: string;
  /** 网关出带宽。 */
  InternetMaxBandwidthOut?: number;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 预付费网关过期时间。 */
  ExpiredTime?: string;
  /** 公网IP是否被封堵。 */
  IsAddressBlocked?: boolean;
  /** 计费模式变更，PREPAID_TO_POSTPAID：包年包月预付费到期转按小时后付费。 */
  NewPurchasePlan?: string;
  /** 网关计费状态，PROTECTIVELY_ISOLATED：被安全隔离的实例，NORMAL：正常。 */
  RestrictState?: string;
  /** 可用区，如：ap-guangzhou-2。 */
  Zone?: string;
  /** 网关带宽配额信息。 */
  VpnGatewayQuotaSet?: VpnGatewayQuota[];
  /** 网关实例版本信息。 */
  Version?: string;
  /** Type值为CCN时，该值表示云联网实例ID。 */
  NetworkInstanceId?: string;
  /** CDC 实例ID。 */
  CdcId?: string;
  /** SSL-VPN 客户端连接数。 */
  MaxConnection?: number;
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

/** VPN网关目的路由 */
declare interface VpnGatewayRoute {
  /** 目的端IDC网段。 */
  DestinationCidrBlock: string;
  /** 下一跳类型（关联实例类型）可选值："VPNCONN"（VPN通道）， "CCN"（CCN实例）。 */
  InstanceType: string;
  /** 下一跳实例ID。 */
  InstanceId: string;
  /** 优先级，可选值：0，100。 */
  Priority: number;
  /** 启用状态，可选值："ENABLE"（启用），"DISABLE" (禁用)。 */
  Status: string;
  /** 路由条目ID。 */
  RouteId?: string;
  /** 路由类型，可选值："VPC"（VPC路由），"CCN"（云联网传播路由），"Static"（静态路由），"BGP"（BGP路由）。 */
  Type?: string;
  /** 创建时间。 */
  CreateTime?: string;
  /** 更新时间。 */
  UpdateTime?: string;
}

/** 修改VPN状态参数 */
declare interface VpnGatewayRouteModify {
  /** VPN网关路由ID。 */
  RouteId: string;
  /** VPN网关状态, ENABLE 启用, DISABLE禁用。 */
  Status: string;
}

/** VPN网关云联网路由信息 */
declare interface VpngwCcnRoutes {
  /** 路由信息ID。 */
  RouteId: string;
  /** 路由信息是否启用。ENABLE：启用该路由DISABLE：不启用该路由 */
  Status?: string;
  /** 路由CIDR。 */
  DestinationCidrBlock?: string;
}

declare interface AcceptAttachCcnInstancesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 接受关联实例列表。 */
  Instances: CcnInstance[];
}

declare interface AcceptAttachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AcceptVpcPeeringConnectionRequest {
  /** 对等连接唯一ID。 */
  PeeringConnectionId: string;
}

declare interface AcceptVpcPeeringConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddBandwidthPackageResourcesRequest {
  /** 资源唯一ID，当前支持EIP资源和LB资源，形如'eip-xxxx', 'lb-xxxx' */
  ResourceIds: string[];
  /** 带宽包唯一标识ID，形如'bwp-xxxx' */
  BandwidthPackageId?: string;
  /** 带宽包类型，当前支持'BGP'、'HIGH_QUALITY_BGP'、'ANYCAST'、'SINGLEISP_CUCC'、'SINGLEISP_CMCC'、'SINGLEISP_CTCC'等类型。 */
  NetworkType?: string;
  /** 资源类型，包括'Address', 'LoadBalance' */
  ResourceType?: string;
  /** 带宽包协议类型。当前支持'ipv4'和'ipv6'协议类型。 */
  Protocol?: string;
}

declare interface AddBandwidthPackageResourcesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AddTemplateMemberRequest {
  /** 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。 */
  TemplateId: string;
  /** 需要添加的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致。 */
  TemplateMember: MemberInfo[];
}

declare interface AddTemplateMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AllocateAddressesRequest {
  /** EIP数量。默认值：1。 */
  AddressCount?: number;
  /** EIP线路类型。默认值：BGP。已开通静态单线IP白名单的用户，可选值：CMCC：中国移动CTCC：中国电信CUCC：中国联通注意：仅部分地域支持静态单线IP。 */
  InternetServiceProvider?: string;
  /** EIP计费方式。已开通标准账户类型白名单的用户，可选值：BANDWIDTH_PACKAGE：[共享带宽包](https://cloud.tencent.com/document/product/684/15255)付费（需额外开通共享带宽包白名单）BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费BANDWIDTH_PREPAID_BY_MONTH：包月按带宽预付费TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费默认值：TRAFFIC_POSTPAID_BY_HOUR。未开通标准账户类型白名单的用户，EIP计费方式与其绑定的实例的计费方式一致，无需传递此参数。 */
  InternetChargeType?: string;
  /** EIP出带宽上限，单位：Mbps。已开通标准账户类型白名单的用户，可选值范围取决于EIP计费方式：BANDWIDTH_PACKAGE：1 Mbps 至 2000 MbpsBANDWIDTH_POSTPAID_BY_HOUR：1 Mbps 至 100 MbpsBANDWIDTH_PREPAID_BY_MONTH：1 Mbps 至 200 MbpsTRAFFIC_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps默认值：1 Mbps。未开通标准账户类型白名单的用户，EIP出带宽上限取决于与其绑定的实例的公网出带宽上限，无需传递此参数。 */
  InternetMaxBandwidthOut?: number;
  /** 包月按带宽预付费EIP的计费参数。EIP为包月按带宽预付费时，该参数必传，其余场景不需传递 */
  AddressChargePrepaid?: AddressChargePrepaid;
  /** EIP类型。默认值：EIP。已开通Anycast公网加速白名单的用户，可选值：AnycastEIP：加速IP，可参见 [Anycast 公网加速](https://cloud.tencent.com/document/product/644)注意：仅部分地域支持加速IP。已开通精品IP白名单的用户，可选值：HighQualityEIP：精品IP注意：仅部分地域支持精品IP。已开高防IP白名单的用户，可选值：AntiDDoSEIP：高防IP注意：仅部分地域支持高防IP。 */
  AddressType?: string;
  /** Anycast发布域。已开通Anycast公网加速白名单的用户，可选值：ANYCAST_ZONE_GLOBAL：全球发布域（需要额外开通Anycast全球加速白名单）ANYCAST_ZONE_OVERSEAS：境外发布域[已废弃] ANYCAST_ZONE_A：发布域A（已更新为全球发布域）[已废弃] ANYCAST_ZONE_B：发布域B（已更新为全球发布域）默认值：ANYCAST_ZONE_OVERSEAS。 */
  AnycastZone?: string;
  /** 指定IP地址申请EIP，每个账户每个月只有三次配额 */
  VipCluster?: string[];
  /** [已废弃] AnycastEIP不再区分是否负载均衡。原参数说明如下：AnycastEIP是否用于绑定负载均衡。已开通Anycast公网加速白名单的用户，可选值：TRUE：AnycastEIP可绑定对象为负载均衡FALSE：AnycastEIP可绑定对象为云服务器、NAT网关、高可用虚拟IP等默认值：FALSE。 */
  ApplicableForCLB?: boolean;
  /** 需要关联的标签列表。 */
  Tags?: Tag[];
  /** BGP带宽包唯一ID参数。设定该参数且InternetChargeType为BANDWIDTH_PACKAGE，则表示创建的EIP加入该BGP带宽包并采用带宽包计费 */
  BandwidthPackageId?: string;
  /** EIP名称，用于申请EIP时用户自定义该EIP的个性化名称，默认值：未命名 */
  AddressName?: string;
  /** CDC唯一ID */
  DedicatedClusterId?: string;
  /** 是否使用独占资源池，默认值：True- True：表示使用独占资源池- False：表示使用共享资源池说明：如需使用独占资源池，请 提交工单(https://console.cloud.tencent.com/workorder/category) 咨询，具体费用请咨询商务经理。 */
  IsDedicatedAddressPool?: boolean;
  /** 网络出口，当前仅支持精品BGP、静态单线，这2种IP 地址类型的指定出口传入，默认值：center_egress1，其它可选值：center_egress2、center_egress3 */
  Egress?: string;
  /** 高防包ID， 申请高防IP时，该字段必传。 */
  AntiDDoSPackageId?: string;
  /** 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。 */
  ClientToken?: string;
}

declare interface AllocateAddressesResponse {
  /** 申请到的 EIP 的唯一 ID 列表。 */
  AddressSet?: string[];
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AllocateIPv6AddressesRequest {
  /** EIP名称，用于申请EIP时用户自定义该EIP的个性化名称，默认值：未命名。 */
  AddressName?: string;
  /** 弹性公网IPv6类型，可选值：- EIPv6：普通IPv6- HighQualityEIPv6：精品IPv6注意：需联系产品开通精品IPv6白名单，且仅部分地域支持精品IPv6默认值：EIPv6。 */
  AddressType?: string;
  /** 申请的弹性公网IPv6数量，默认值：1。 */
  AddressCount?: number;
  /** 弹性公网IPv6计费方式，可选值：- BANDWIDTH_PACKAGE：[共享带宽包](https://cloud.tencent.com/document/product/684/15255)付费- TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费默认值：TRAFFIC_POSTPAID_BY_HOUR。 */
  InternetChargeType?: string;
  /** 弹性公网IPv6线路类型，默认值：BGP。已开通静态单线IP白名单的用户，可选值：- CMCC：中国移动- CTCC：中国电信- CUCC：中国联通注意：仅部分地域支持静态单线IP。 */
  InternetServiceProvider?: string;
  /** 弹性公网IPv6带宽上限，单位：Mbps。可选值范围取决于EIP计费方式：- BANDWIDTH_PACKAGE：1 Mbps 至 2000 Mbps- TRAFFIC_POSTPAID_BY_HOUR：1 Mbps 至 100 Mbps默认值：1 Mbps。 */
  InternetMaxBandwidthOut?: number;
  /** 带宽包唯一ID参数。设定该参数且InternetChargeType为BANDWIDTH_PACKAGE，则表示创建的EIP加入该BGP带宽包并采用带宽包计费。 */
  BandwidthPackageId?: string;
  /** 需要关联的标签列表。 */
  Tags?: Tag[];
  /** 弹性公网IPv6网络出口，可选值：- CENTER_EGRESS_1：中心出口一- CENTER_EGRESS_2：中心出口二- CENTER_EGRESS_3：中心出口三注意：不同运营商或资源类型对应的网络出口需要联系产品开白默认值：CENTER_EGRESS_1。 */
  Egress?: string;
}

declare interface AllocateIPv6AddressesResponse {
  /** 申请到的弹性公网 IPv6 地址的唯一 ID 列表。 */
  AddressSet?: string[];
  /** 异步任务TaskId，可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AllocateIp6AddressesBandwidthRequest {
  /** 需要开通公网访问能力的IPV6地址 */
  Ip6Addresses: string[];
  /** 带宽，单位Mbps。默认是1Mbps */
  InternetMaxBandwidthOut?: number;
  /** 网络计费模式。IPV6当前支持"TRAFFIC_POSTPAID_BY_HOUR"，"BANDWIDTH_PACKAGE"。默认网络计费模式是"TRAFFIC_POSTPAID_BY_HOUR"。 */
  InternetChargeType?: string;
  /** 带宽包id，上移账号，申请带宽包计费模式的ipv6地址需要传入. */
  BandwidthPackageId?: string;
  /** 需要关联的标签列表。 */
  Tags?: Tag[];
}

declare interface AllocateIp6AddressesBandwidthResponse {
  /** 弹性公网 IPV6 的唯一 ID 列表。 */
  AddressSet?: string[];
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssignIpv6AddressesRequest {
  /** 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。 */
  NetworkInterfaceId: string;
  /** 指定的`IPv6`地址列表，单次最多指定10个。与入参`Ipv6AddressCount`合并计算配额。与Ipv6AddressCount必填一个。 */
  Ipv6Addresses?: Ipv6Address[];
  /** 自动分配`IPv6`地址个数，内网IP地址个数总和不能超过配额数。与入参`Ipv6Addresses`合并计算配额。与Ipv6Addresses必填一个。 */
  Ipv6AddressCount?: number;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface AssignIpv6AddressesResponse {
  /** 分配给弹性网卡的`IPv6`地址列表。 */
  Ipv6AddressSet?: Ipv6Address[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssignIpv6CidrBlockRequest {
  /** `VPC`实例`ID`，形如：`vpc-f49l6u0z`。 */
  VpcId: string;
}

declare interface AssignIpv6CidrBlockResponse {
  /** 分配的 `IPv6` 网段。形如：`3402:4e00:20:1000::/56`。 */
  Ipv6CidrBlock?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssignIpv6SubnetCidrBlockRequest {
  /** 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** 分配 `IPv6` 子网段列表。 */
  Ipv6SubnetCidrBlocks: Ipv6SubnetCidrBlock[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface AssignIpv6SubnetCidrBlockResponse {
  /** 分配 `IPv6` 子网段列表。 */
  Ipv6SubnetCidrBlockSet?: Ipv6SubnetCidrBlock[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssignPrivateIpAddressesRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。 */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  /** 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数，详见弹性网卡使用限制。 */
  SecondaryPrivateIpAddressCount?: number;
  /** IP服务质量等级，和SecondaryPrivateIpAddressCount配合使用，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。 */
  QosLevel?: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface AssignPrivateIpAddressesResponse {
  /** 内网IP详细信息。 */
  PrivateIpAddressSet?: PrivateIpAddressSpecification[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 要绑定的实例所在的地域 */
  InstanceRegion?: string;
}

declare interface AssociateAddressResponse {
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateDhcpIpWithAddressIpRequest {
  /** `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。必须是没有绑定`EIP`的`DhcpIp` */
  DhcpIpId: string;
  /** 弹性公网`IP`。必须是没有绑定`DhcpIp`的`EIP` */
  AddressIp: string;
}

declare interface AssociateDhcpIpWithAddressIpResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateDirectConnectGatewayNatGatewayRequest {
  /** VPC实例ID。形如：vpc-xxx。 */
  VpcId: string;
  /** NAT网关ID。形如：nat-xxx */
  NatGatewayId: string;
  /** 专线网关ID。形如：dcg-xxx */
  DirectConnectGatewayId: string;
}

declare interface AssociateDirectConnectGatewayNatGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateIPv6AddressRequest {
  /** 弹性公网IPv6唯一ID，EIPv6 唯一 ID 形如：eipv6-11112222。 */
  IPv6AddressId: string;
  /** 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过登录控制台查询，也可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。 */
  NetworkInterfaceId?: string;
  /** 要绑定的内网 IPv6。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIPv6Address ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIPv6Address 是指定的 NetworkInterfaceId 上的一个内网 IPv6。指定弹性网卡的内网 IPv6 可通过登录控制台查询，也可通过DescribeNetworkInterfaces接口返回值中的Ipv6AddressSet.Address获取。 */
  PrivateIPv6Address?: string;
}

declare interface AssociateIPv6AddressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateInstancesToCcnRouteTableRequest {
  /** 云联网ID。 */
  CcnId: string;
  /** 路由表ID。 */
  RouteTableId: string;
  /** 实例列表。 */
  Instances: CcnInstanceWithoutRegion[];
}

declare interface AssociateInstancesToCcnRouteTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateNetworkAclSubnetsRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 子网实例ID数组。例如：[subnet-12345678]。 */
  SubnetIds: string[];
}

declare interface AssociateNetworkAclSubnetsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateNetworkInterfaceSecurityGroupsRequest {
  /** 弹性网卡实例ID。形如：eni-pxir56ns。每次请求的实例的上限为100。本接口不支持主网卡绑定安全组。 */
  NetworkInterfaceIds: string[];
  /** 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。 */
  SecurityGroupIds: string[];
}

declare interface AssociateNetworkInterfaceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachClassicLinkVpcRequest {
  /** VPC实例ID */
  VpcId: string;
  /** CVM实例ID */
  InstanceIds: string[];
}

declare interface AttachClassicLinkVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** CVM实例ID。形如：ins-r8hr2upy。 */
  InstanceId: string;
  /** 网卡的挂载类型：0 标准型，1扩展型，默认值0。 */
  AttachType?: number;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface AttachNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachSnapshotInstancesRequest {
  /** 快照策略Id。 */
  SnapshotPolicyId: string;
  /** 关联实例信息。 */
  Instances: SnapshotInstance[];
}

declare interface AttachSnapshotInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AuditCrossBorderComplianceRequest {
  /** 服务商, 可选值：`UNICOM`。 */
  ServiceProvider: string;
  /** 表单唯一`ID`。可通过[DescribeCrossBorderCompliance](https://cloud.tencent.com/document/product/215/47838)接口查询ComplianceId信息 */
  ComplianceId: number;
  /** 通过：`APPROVED `，拒绝：`DENY`。 */
  AuditBehavior: string;
}

declare interface AuditCrossBorderComplianceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckAssistantCidrRequest {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5` */
  VpcId: string;
  /** 待添加的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。入参NewCidrBlocks和OldCidrBlocks至少需要其一。 */
  NewCidrBlocks?: string[];
  /** 待删除的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。入参NewCidrBlocks和OldCidrBlocks至少需要其一。 */
  OldCidrBlocks?: string[];
}

declare interface CheckAssistantCidrResponse {
  /** 冲突资源信息数组。 */
  ConflictSourceSet?: ConflictSource[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckDefaultSubnetRequest {
  /** 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。 */
  Zone?: string;
}

declare interface CheckDefaultSubnetResponse {
  /** 检查结果。true为可以创建默认子网，false为不可以创建默认子网。 */
  Result?: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CheckNetDetectStateRequest {
  /** 探测目的IPv4地址数组，最多两个。 */
  DetectDestinationIp: string[];
  /** 网络探测实例ID。形如：netd-12345678。该参数与（VpcId，SubnetId，NetDetectName），至少要有一个。当NetDetectId存在时，使用NetDetectId。 */
  NetDetectId?: string;
  /** `VPC`实例`ID`。形如：`vpc-12345678`。该参数与（SubnetId，NetDetectName）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。 */
  VpcId?: string;
  /** 子网实例ID。形如：subnet-12345678。该参数与（VpcId，NetDetectName）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。 */
  SubnetId?: string;
  /** 网络探测名称，最大长度不能超过60个字节。该参数与（VpcId，SubnetId）配合使用，与NetDetectId至少要有一个。当NetDetectId存在时，使用NetDetectId。 */
  NetDetectName?: string;
  /** 下一跳类型，目前我们支持的类型有：VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；NAT：NAT网关；NORMAL_CVM：普通云服务器；CCN：云联网网关；NONEXTHOP：无下一跳； */
  NextHopType?: string;
  /** 下一跳目的网关，取值与“下一跳类型”相关：下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；下一跳类型为NAT，取值Nat网关，形如：nat-12345678；下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；下一跳类型为CCN，取值云联网ID，形如：ccn-12345678；下一跳类型为NONEXTHOP，指定网络探测为无下一跳的网络探测； */
  NextHopDestination?: string;
}

declare interface CheckNetDetectStateResponse {
  /** 网络探测验证结果对象数组。 */
  NetDetectIpStateSet?: NetDetectIpState[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ClearRouteTableSelectionPoliciesRequest {
  /** 云联网ID。 */
  CcnId: string;
}

declare interface ClearRouteTableSelectionPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。若指定Tags入参且指定IsCloneTags为true，会合并源安全组的标签和新增的标签。 */
  Tags?: Tag;
}

declare interface CloneSecurityGroupResponse {
  /** 安全组对象。 */
  SecurityGroup?: SecurityGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAddressTemplateGroupRequest {
  /** IP地址模板集合名称。 */
  AddressTemplateGroupName: string;
  /** IP地址模板实例ID，例如：ipm-mdunqeb6。 */
  AddressTemplateIds: string[];
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateAddressTemplateGroupResponse {
  /** IP地址模板集合对象。 */
  AddressTemplateGroup?: AddressTemplateGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateAddressTemplateRequest {
  /** IP地址模板名称。 */
  AddressTemplateName: string;
  /** 地址信息，支持 IP、CIDR、IP 范围。Addresses与AddressesExtra必填其一。 */
  Addresses?: string[];
  /** 地址信息，支持携带备注，支持 IP、CIDR、IP 范围。Addresses与AddressesExtra必填其一。 */
  AddressesExtra?: AddressInfo[];
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateAddressTemplateResponse {
  /** IP地址模板对象。 */
  AddressTemplate?: AddressTemplate;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 新申请的内网IP地址个数，内网IP地址个数总和不能超过配额数。 */
  SecondaryPrivateIpAddressCount?: number;
  /** IP服务质量等级，和SecondaryPrivateIpAddressCount配合使用，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。 */
  QosLevel?: string;
  /** 指定绑定的安全组，例如：['sg-1dd51d']。 */
  SecurityGroupIds?: string[];
  /** 弹性网卡描述，可任意命名，但不得超过60个字符。 */
  NetworkInterfaceDescription?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
  /** 绑定类型：0 标准型 1 扩展型。 */
  AttachType?: number;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface CreateAndAttachNetworkInterfaceResponse {
  /** 弹性网卡实例。 */
  NetworkInterface?: NetworkInterface;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  AssistantCidrSet?: AssistantCidr[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBandwidthPackageRequest {
  /** 带宽包类型, 默认值: BGP, 可选值:BGP: 普通BGP共享带宽包HIGH_QUALITY_BGP: 精品BGP共享带宽包SINGLEISP_CMCC: 中国移动共享带宽包SINGLEISP_CTCC: 中国电信共享带宽包SINGLEISP_CUCC: 中国联通共享带宽包 */
  NetworkType?: string;
  /** 带宽包计费类型, 默认为: ENHANCED95_POSTPAID_BY_MONTH, 可选值:TOP5_POSTPAID_BY_MONTH: 按月后付费TOP5计费PERCENT95_POSTPAID_BY_MONTH: 按月后付费月95计费FIXED_PREPAID_BY_MONTH: 包月预付费计费ENHANCED95_POSTPAID_BY_MONTH: 按月后付费增强型95计费PEAK_BANDWIDTH_POSTPAID_BY_DAY: 后付费日结按带宽计费PRIMARY_TRAFFIC_POSTPAID_BY_HOUR: 后付费按主流量计费 */
  ChargeType?: string;
  /** 带宽包名称。 */
  BandwidthPackageName?: string;
  /** 带宽包数量(传统账户类型只能填1), 标准账户类型取值范围为1~20。 */
  BandwidthPackageCount?: number;
  /** 带宽包限速大小。单位：Mbps，-1表示不限速。不同计费类型的带宽包对应不同的带宽上下限。 */
  InternetMaxBandwidth?: number;
  /** 需要关联的标签列表。 */
  Tags?: Tag[];
  /** 带宽包协议类型。当前支持'ipv4'和'ipv6'协议带宽包，默认值是'ipv4'。 */
  Protocol?: string;
  /** 预付费包月带宽包的购买时长，单位: 月，取值范围: 1~60。 */
  TimeSpan?: number;
  /** 网络出口，默认值：center_egress1 */
  Egress?: string;
}

declare interface CreateBandwidthPackageResponse {
  /** 带宽包唯一ID。 */
  BandwidthPackageId?: string;
  /** 带宽包唯一ID列表(申请数量大于1时有效)。 */
  BandwidthPackageIds?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCcnRequest {
  /** CCN名称，最大长度不能超过60个字节。 */
  CcnName: string;
  /** CCN描述信息，最大长度不能超过100个字节。 */
  CcnDescription?: string;
  /** CCN服务质量，`PT`：白金，`AU`：金，`AG`：银，默认为`AU`。 */
  QosLevel?: string;
  /** 计费模式，`PREPAID`：表示预付费，即包年包月，`POSTPAID`：表示后付费，即按量计费。默认：`POSTPAID`。 */
  InstanceChargeType?: string;
  /** 限速类型，`OUTER_REGION_LIMIT`表示地域出口限速，`INTER_REGION_LIMIT`为地域间限速，默认为`OUTER_REGION_LIMIT`。预付费模式仅支持地域间限速，后付费模式支持地域间限速和地域出口限速。 */
  BandwidthLimitType?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
}

declare interface CreateCcnResponse {
  /** 云联网（CCN）对象。 */
  Ccn?: CCN;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCcnRouteTablesRequest {
  /** 需要创建的路由表列表。 */
  RouteTable: CcnBatchRouteTable[];
}

declare interface CreateCcnRouteTablesResponse {
  /** 路由表信息列表。 */
  CcnRouteTableSet?: CcnRouteTable[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCdcLDCXListRequest {
}

declare interface CreateCdcLDCXListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCdcNetPlanesRequest {
}

declare interface CreateCdcNetPlanesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateCustomerGatewayRequest {
  /** 对端网关名称，可任意命名，但不得超过60个字符。 */
  CustomerGatewayName: string;
  /** 对端网关公网IP。 */
  IpAddress: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** BGP ASN。ASN取值范围为1- 4294967295，其中139341、45090和58835不可用。 */
  BgpAsn?: number;
}

declare interface CreateCustomerGatewayResponse {
  /** 对端网关对象 */
  CustomerGateway?: CustomerGateway;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDefaultSecurityGroupRequest {
  /** 项目ID，默认0。可在qcloud控制台项目管理页面查询到。 */
  ProjectId?: string;
}

declare interface CreateDefaultSecurityGroupResponse {
  /** 安全组对象。 */
  SecurityGroup?: SecurityGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDefaultVpcRequest {
  /** 子网所在的可用区，该参数可通过[DescribeZones](https://cloud.tencent.com/document/product/213/15707)接口获取，例如ap-guangzhou-1，不指定时将随机选择可用区。 */
  Zone?: string;
  /** 是否强制返回默认VPC。 */
  Force?: boolean;
}

declare interface CreateDefaultVpcResponse {
  /** 默认VPC和子网ID。 */
  Vpc?: DefaultVpcSubnet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDhcpIpRequest {
  /** 私有网络`ID`。 */
  VpcId: string;
  /** 子网`ID`。 */
  SubnetId: string;
  /** `DhcpIp`名称。 */
  DhcpIpName: string;
  /** 新申请的内网IP地址个数。总数不能超过64个，为了兼容性，当前参数必填。 */
  SecondaryPrivateIpAddressCount?: number;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateDhcpIpResponse {
  /** 新创建的`DhcpIp`信息。 */
  DhcpIpSet?: DhcpIp[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDirectConnectGatewayCcnRoutesRequest {
  /** 专线网关ID，形如：dcg-prpqlmg1 */
  DirectConnectGatewayId: string;
  /** 需要连通的IDC网段列表 */
  Routes: DirectConnectGatewayCcnRoute[];
}

declare interface CreateDirectConnectGatewayCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFlowLogRequest {
  /** 流日志实例名字。 */
  FlowLogName: string;
  /** 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE|CCN|NAT|DCG。 */
  ResourceType: string;
  /** 资源唯一ID。 */
  ResourceId: string;
  /** 流日志采集类型，ACCEPT|REJECT|ALL。 */
  TrafficType: string;
  /** 私用网络ID或者统一ID，建议使用统一ID，当ResourceType为CCN时不填，其他类型必填。 */
  VpcId?: string;
  /** 流日志实例描述。 */
  FlowLogDescription?: string;
  /** 流日志存储ID。 */
  CloudLogId?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
  /** 消费端类型：cls、ckafka。默认值cls。 */
  StorageType?: string;
  /** 流日志消费端信息，当消费端类型为ckafka时，必填。 */
  FlowLogStorage?: FlowLogStorage;
  /** 流日志存储ID对应的地域，不传递默认为本地域。 */
  CloudLogRegion?: string;
}

declare interface CreateFlowLogResponse {
  /** 创建的流日志信息。 */
  FlowLog?: FlowLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHaVipRequest {
  /** `HAVIP`所在私有网络`ID`。 */
  VpcId: string;
  /** `HAVIP`名称。 */
  HaVipName: string;
  /** `HAVIP`所在子网`ID`。 */
  SubnetId?: string;
  /** 指定虚拟IP地址，必须在`VPC`网段内且未被占用。不指定则自动分配。 */
  Vip?: string;
  /** `HAVIP`所在弹性网卡`ID`。 */
  NetworkInterfaceId?: string;
  /** 是否开启`HAVIP`漂移时子机或网卡范围的校验。默认不开启。 */
  CheckAssociate?: boolean;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
  /** HaVip绑定的子机或网卡。最多支持10个实例。 */
  HaVipAssociationSet?: HaVipAssociation[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface CreateHaVipResponse {
  /** `HAVIP`对象。 */
  HaVip?: HaVip;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHighPriorityRouteTableRequest {
  /** 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** 高优路由表名称，最大长度不能超过60个字节。 */
  Name: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
}

declare interface CreateHighPriorityRouteTableResponse {
  /** 高优路由表信息 */
  HighPriorityRouteTable?: HighPriorityRouteTable;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHighPriorityRoutesRequest {
  /** 高优路由表唯一 ID。 */
  HighPriorityRouteTableId: string;
  /** 高优路由表条目信息。 */
  HighPriorityRoutes: HighPriorityRoute[];
}

declare interface CreateHighPriorityRoutesResponse {
  /** 高优路由表信息。 */
  HighPriorityRouteSet?: HighPriorityRoute[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Ip6TranslatorSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLocalGatewayRequest {
  /** 本地网关名称。 */
  LocalGatewayName: string;
  /** VPC实例ID。 */
  VpcId: string;
  /** CDC实例ID。 */
  CdcId: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateLocalGatewayResponse {
  /** 本地网关信息。 */
  LocalGateway?: LocalGateway;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** NAT网关的端口转换规则。 */
  DestinationIpPortTranslationNatRules: DestinationIpPortTranslationNatRule[];
}

declare interface CreateNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNatGatewayRequest {
  /** NAT网关名称 */
  NatGatewayName: string;
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** NAT网关最大外网出带宽(单位：Mbps)，支持的参数值：20, 50, 100, 200, 500, 1000, 2000, 5000，默认: 100Mbps。 当以下NatProductVersion参数值为2即标准型时，此参数无需填写，默认为5000Mbps。 */
  InternetMaxBandwidthOut?: number;
  /** NAT网关并发连接数上限，支持参数值：1000000、3000000、10000000，默认值为100000。 当以下NatProductVersion参数值为2即标准型时，此参数无需填写，默认为2000000。 */
  MaxConcurrentConnection?: number;
  /** 新建弹性公网IP个数，系统会按您的要求创建对应数量的弹性公网IP，其中AddressCount和PublicAddresses两个参数至少填写一个。 */
  AddressCount?: number;
  /** 绑定NAT网关的已有弹性公网IP数组，其中AddressCount和PublicAddresses两个参数至少填写一个。 示例值：["139.199.232.119"] */
  PublicIpAddresses?: string[];
  /** 可用区，形如：`ap-guangzhou-1`。 */
  Zone?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** NAT网关所属子网，已废弃 */
  SubnetId?: string;
  /** 绑定NAT网关的弹性公网IP带宽值（单位：Mbps）。不填写此参数时：则该参数默认为弹性公网IP的带宽值，部分用户默认为该用户类型的弹性公网IP的带宽上限。 */
  StockPublicIpAddressesBandwidthOut?: number;
  /** 需要申请公网IP带宽大小（单位Mbps），默认为当前用户类型所能使用的最大值。 */
  PublicIpAddressesBandwidthOut?: number;
  /** 公网IP是否强制与NAT网关来自同可用区，true表示需要与NAT网关同可用区；false表示可与NAT网关不是同一个可用区。此参数只有当参数Zone存在时才能生效。 */
  PublicIpFromSameZone?: boolean;
  /** NAT网关类型，1表示传统型NAT网关，2表示标准型NAT网关，默认值是1。 */
  NatProductVersion?: number;
}

declare interface CreateNatGatewayResponse {
  /** NAT网关对象数组。 */
  NatGatewaySet?: NatGateway[];
  /** 符合条件的 NAT网关对象数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNatGatewaySourceIpTranslationNatRuleRequest {
  /** NAT网关的ID，形如："nat-df45454" */
  NatGatewayId: string;
  /** NAT网关的SNAT转换规则 */
  SourceIpTranslationNatRules: SourceIpTranslationNatRule[];
}

declare interface CreateNatGatewaySourceIpTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNetDetectRequest {
  /** `VPC`实例`ID`。形如：`vpc-12345678`。 */
  VpcId: string;
  /** 子网实例ID。形如：subnet-12345678。 */
  SubnetId: string;
  /** 网络探测名称，最大长度不能超过60个字节。 */
  NetDetectName: string;
  /** 探测目的IPv4地址数组。最多两个。 */
  DetectDestinationIp: string[];
  /** 下一跳类型，目前我们支持的类型有：VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；NAT：NAT网关；NORMAL_CVM：普通云服务器；CCN：云联网网关；NONEXTHOP：无下一跳； */
  NextHopType?: string;
  /** 下一跳目的网关，取值与“下一跳类型”相关：下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；下一跳类型为NAT，取值Nat网关，形如：nat-12345678；下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；下一跳类型为CCN，取值云联网ID，形如：ccn-12345678；下一跳类型为NONEXTHOP，指定网络探测为无下一跳的网络探测； */
  NextHopDestination?: string;
  /** 网络探测描述。 */
  NetDetectDescription?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateNetDetectResponse {
  /** 网络探测（NetDetect）对象。 */
  NetDetect?: NetDetect;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNetworkAclEntriesRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络三元组ACL规则集。 */
  NetworkAclEntrySet: NetworkAclEntrySet;
}

declare interface CreateNetworkAclEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNetworkAclQuintupleEntriesRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络五元组ACL规则集。 */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntries;
}

declare interface CreateNetworkAclQuintupleEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateNetworkAclRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** 网络ACL名称，最大长度不能超过60个字节。 */
  NetworkAclName: string;
  /** 网络ACL类型，三元组(TRIPLE)或五元组(QUINTUPLE)。默认值三元组(TRIPLE)。 */
  NetworkAclType?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateNetworkAclResponse {
  /** 网络ACL实例。 */
  NetworkAcl?: NetworkAcl;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 新申请的内网IP地址个数，内网IP地址个数总和不能超过配额数。配额数查询：[DescribeVpcLimits](https://cloud.tencent.com/document/api/215/42942)。 */
  SecondaryPrivateIpAddressCount?: number;
  /** IP服务质量等级，和SecondaryPrivateIpAddressCount配合使用，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。 */
  QosLevel?: string;
  /** 指定绑定的安全组，例如：['sg-1dd51d']。 */
  SecurityGroupIds?: string[];
  /** 指定的内网IP信息，单次最多指定10个。 */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** 网卡trunking模式设置，Enable-开启，Disable--关闭，默认关闭。 */
  TrunkingFlag?: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface CreateNetworkInterfaceResponse {
  /** 弹性网卡实例。 */
  NetworkInterface?: NetworkInterface;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 目的端口转换规则列表。 */
  LocalDestinationIpPortTranslationNatRules: LocalDestinationIpPortTranslationNatRule[];
}

declare interface CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrivateNatGatewayRequest {
  /** 私网网关名称 */
  NatGatewayName: string;
  /** 私有网络实例ID。当创建VPC类型私网NAT网关或者专线网关类型私网NAT网关时，此参数必填。 */
  VpcId?: string;
  /** 跨域参数。仅当取值为True时，才会支持跨域绑定VPC。 */
  CrossDomain?: boolean;
  /** 实例标签 */
  Tags?: Tag[];
  /** VPC类型私网NAT网关。仅当取值为True时，才会创建VPC类型私网NAT网关。 */
  VpcType?: boolean;
  /** 云联网类型私网NAT网关需要绑定的云联网实例ID。 */
  CcnId?: string;
}

declare interface CreatePrivateNatGatewayResponse {
  /** 私网网关对象。 */
  PrivateNatGatewaySet?: PrivateNatGateway[];
  /** 创建实例个数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrivateNatGatewayTranslationAclRuleRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 转换规则目标，可选值"LOCAL"。 */
  TranslationDirection: string;
  /** 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。 */
  TranslationType: string;
  /** 转换`IP`,当转换规则类型为四层时为`IP`池。 */
  TranslationIp: string;
  /** 访问控制列表。 */
  TranslationAclRules: TranslationAclRule[];
  /** 源`IP`,当转换规则类型为三层时有效。 */
  OriginalIp?: string;
}

declare interface CreatePrivateNatGatewayTranslationAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreatePrivateNatGatewayTranslationNatRuleRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 转换规则对象数组。 */
  TranslationNatRules: TranslationNatRuleInput[];
  /** 跨域参数，当VPC为跨域时填写为True。 */
  CrossDomain?: boolean;
}

declare interface CreatePrivateNatGatewayTranslationNatRuleResponse {
  /** 私网网关唯一`ID`。 */
  NatGatewayId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateReserveIpAddressesRequest {
  /** VPC唯一 ID。 */
  VpcId: string;
  /** 指定IP申请的内网保留IP地址。 */
  IpAddresses?: string[];
  /** 不指定IP地址，指定个数自动分配保留内网IP。 */
  IpAddressCount?: number;
  /** 子网唯一 ID。 */
  SubnetId?: string;
  /** 内网保留 IP名称。 */
  Name?: string;
  /** 内网保留 IP描述。 */
  Description?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface CreateReserveIpAddressesResponse {
  /** 内网保留 IP返回信息 */
  ReserveIpAddressSet?: ReserveIpAddressInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 路由表对象。 */
  RouteTableSet?: RouteTable[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupPoliciesRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组规则集合。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
}

declare interface CreateSecurityGroupPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupRequest {
  /** 安全组名称，可任意命名，但不得超过60个字符。 */
  GroupName: string;
  /** 安全组备注，最多100个字符。 */
  GroupDescription: string;
  /** 项目ID，默认0。可在控制台项目管理页面查询到。 */
  ProjectId?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateSecurityGroupResponse {
  /** 安全组对象。 */
  SecurityGroup?: SecurityGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupWithPoliciesRequest {
  /** 安全组名称，可任意命名，但不得超过60个字符。 */
  GroupName: string;
  /** 安全组备注，最多100个字符。 */
  GroupDescription: string;
  /** 项目ID，默认0。可在控制台项目管理页面查询到。 */
  ProjectId?: string;
  /** 安全组规则集合。 */
  SecurityGroupPolicySet?: SecurityGroupPolicySet;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateSecurityGroupWithPoliciesResponse {
  /** 安全组对象。 */
  SecurityGroup?: SecurityGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServiceTemplateGroupRequest {
  /** 协议端口模板集合名称。 */
  ServiceTemplateGroupName: string;
  /** 协议端口模板实例ID，例如：ppm-4dw6agho。 */
  ServiceTemplateIds: string[];
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateServiceTemplateGroupResponse {
  /** 协议端口模板集合对象。 */
  ServiceTemplateGroup?: ServiceTemplateGroup;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateServiceTemplateRequest {
  /** 协议端口模板名称。 */
  ServiceTemplateName: string;
  /** 支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。Services与ServicesExtra必填其一。 */
  Services?: string[];
  /** 支持添加备注，单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。Services与ServicesExtra必填其一。 */
  ServicesExtra?: ServicesInfo[];
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateServiceTemplateResponse {
  /** 协议端口模板对象。 */
  ServiceTemplate?: ServiceTemplate;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSnapshotPoliciesRequest {
  /** 快照策略详情。 */
  SnapshotPolicies: SnapshotPolicy[];
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateSnapshotPoliciesResponse {
  /** 快照策略。 */
  SnapshotPolicies?: SnapshotPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Subnet?: Subnet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSubnetsRequest {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5`。 */
  VpcId: string;
  /** 子网对象列表。 */
  Subnets: SubnetInput[];
  /** 指定绑定的标签列表，注意这里的标签集合为列表中所有子网对象所共享，不能为每个子网对象单独指定标签，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
  /** 需要增加到的CDC实例ID。 */
  CdcId?: string;
}

declare interface CreateSubnetsResponse {
  /** 新创建的子网列表。 */
  SubnetSet?: Subnet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateTrafficPackagesRequest {
  /** 流量包规格。可选值:10: 10GB流量，有效期一个月50: 50GB流量，有效期一个月512: 512GB流量，有效期一个月1024: 1TB流量，有效期一个月5120: 5TB流量，有效期一个月51200: 50TB流量，有效期一个月60: 60GB流量，有效期半年300: 300GB流量，有效期半年600: 600GB流量，有效期半年3072: 3TB流量，有效期半年6144: 6TB流量，有效期半年30720: 30TB流量，有效期半年61440: 60TB流量，有效期半年307200: 300TB流量，有效期半年 */
  TrafficAmount: number;
  /** 流量包数量，可选范围 1~20。 */
  TrafficPackageCount?: number;
}

declare interface CreateTrafficPackagesResponse {
  /** 创建的流量包ID列表。 */
  TrafficPackageSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateVpcEndPointResponse {
  /** 终端节点对象详细信息。 */
  EndPoint?: EndPoint;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
}

declare interface CreateVpcEndPointServiceResponse {
  /** 终端节点服务对象详细信息。 */
  EndPointService?: EndPointService;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVpcPeeringConnectionRequest {
  /** 本端VPC唯一ID。 */
  SourceVpcId: string;
  /** 对等连接名称。 */
  PeeringConnectionName: string;
  /** 对端VPC唯一ID。 */
  DestinationVpcId: string;
  /** 对端用户UIN。 */
  DestinationUin: string;
  /** 对端地域。 */
  DestinationRegion: string;
  /** 带宽上限，单位Mbps。 */
  Bandwidth?: number;
  /** 互通类型，VPC_PEER：VPC间互通；VPC_BM_PEER：VPC与黑石网络互通。 */
  Type?: string;
  /** 计费模式，日峰值POSTPAID_BY_DAY_MAX，月95POSTPAID_BY_MONTH_95。 */
  ChargeType?: string;
  /** 服务分级：PT、AU、AG。 */
  QosLevel?: string;
  /** 标签键值对 */
  Tags?: Tags[];
}

declare interface CreateVpcPeeringConnectionResponse {
  /** 对等连接ID */
  PeeringConnectionId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Vpc?: VpcInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVpnConnectionRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 对端网关ID。例如：cgw-2wqq41m9，可通过[DescribeCustomerGateways](https://cloud.tencent.com/document/product/215/17516)接口查询对端网关。 */
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
  /** 是否支持隧道内健康检查，默认为False。 */
  EnableHealthCheck?: boolean;
  /** 健康检查本端地址，默认值为随机在169.254.128.0/17分配一个IP。 */
  HealthCheckLocalIp?: string;
  /** 健康检查对端地址，默认值为随机在169.254.128.0/17分配一个IP。 */
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
  /** 创建通道路由信息。 */
  Route?: CreateVpnConnRoute;
  /** BGP配置。 */
  BgpConfig?: BgpConfig;
  /** 健康检查NQA配置。 */
  HealthCheckConfig?: HealthCheckConfig;
}

declare interface CreateVpnConnectionResponse {
  /** 通道实例对象。 */
  VpnConnection?: VpnConnection;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVpnGatewayRequest {
  /** VPC实例ID。可通过[DescribeVpcs](https://cloud.tencent.com/document/product/215/15778)接口返回值中的VpcId获取。 */
  VpcId: string;
  /** VPN网关名称，最大长度不能超过60个字节。 */
  VpnGatewayName: string;
  /** 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100, 200, 500, 1000, 3000；单位：Mbps。 */
  InternetMaxBandwidthOut: number;
  /** VPN网关计费模式，PREPAID：表示预付费，即包年包月，POSTPAID_BY_HOUR：表示后付费，即按量计费。默认：POSTPAID_BY_HOUR，如果指定预付费模式，参数InstanceChargePrepaid必填。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 可用区，如：ap-guangzhou-2。 */
  Zone?: string;
  /** VPN网关类型，默认为IPSEC。值“IPSEC”为VPC型IPSEC VPN网关，值“SSL”为VPC型SSL VPN网关，值“CCN”为云联网型IPSEC VPN网关，值“SSL_CCN”为云联网型SSL VPN网关。 */
  Type?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]。 */
  Tags?: Tag[];
  /** CDC实例ID。 */
  CdcId?: string;
  /** SSL VPN连接数设置，可选规格：5, 10, 20, 50, 100, 200, 500, 1000；单位：个。仅 SSL / SSL_CCN 类型需要选这个参数。 */
  MaxConnection?: number;
}

declare interface CreateVpnGatewayResponse {
  /** VPN网关对象 */
  VpnGateway?: VpnGateway;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  Routes?: VpnGatewayRoute[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVpnGatewaySslClientRequest {
  /** SSL-VPN-SERVER 实例ID。 */
  SslVpnServerId: string;
  /** SSL-VPN-CLIENT实例Name。不可和SslVpnClientNames同时使用。 */
  SslVpnClientName?: string;
  /** SSL-VPN-CLIENT实例Name数字。批量创建时使用。不可和SslVpnClientName同时使用。 */
  SslVpnClientNames?: string[];
  /** 指定绑定的标签列表 */
  Tags?: Tag[];
}

declare interface CreateVpnGatewaySslClientResponse {
  /** 异步任务ID。 */
  TaskId?: number;
  /** SSL-VPN client 唯一ID */
  SslVpnClientId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVpnGatewaySslServerRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** SSL-VPN-SERVER 实例名称，长度不超过60个字节。 */
  SslVpnServerName: string;
  /** 客户端地址网段。 */
  RemoteAddress: string;
  /** 云端地址（CIDR）列表。 */
  LocalAddress?: string[];
  /** SSL VPN服务端监听协议。当前仅支持 UDP，默认UDP。 */
  SslVpnProtocol?: string;
  /** SSL VPN服务端监听协议端口，默认1194。 */
  SslVpnPort?: number;
  /** 认证算法。可选 'SHA1', 'MD5', 'NONE'，默认NONE。 */
  IntegrityAlgorithm?: string;
  /** 加密算法。可选 'AES-128-CBC','AES-192-CBC', 'AES-256-CBC', 'NONE'，默认NONE。 */
  EncryptAlgorithm?: string;
  /** 是否支持压缩。当前不支持压缩，默认False。 */
  Compress?: boolean;
  /** 是否开启SSO认证。默认为False。该功能当前需要申请开白使用。 */
  SsoEnabled?: boolean;
  /** 是否开启策略访问控制。默认为False */
  AccessPolicyEnabled?: boolean;
  /** SAML-DATA，开启SSO时传。 */
  SamlData?: string;
  /** 指定绑定的标签列表 */
  Tags?: Tag[];
}

declare interface CreateVpnGatewaySslServerResponse {
  /** 创建SSL-VPN server 异步任务ID。 */
  TaskId?: number;
  /** SSL-VPN-SERVER 唯一ID。 */
  SslVpnServerId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAddressTemplateGroupRequest {
  /** IP地址模板集合实例ID，例如：ipmg-90cex8mq。 */
  AddressTemplateGroupId: string;
}

declare interface DeleteAddressTemplateGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAddressTemplateRequest {
  /** IP地址模板实例ID，例如：ipm-09o5m8kc。 */
  AddressTemplateId: string;
}

declare interface DeleteAddressTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteAssistantCidrRequest {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5`。 */
  VpcId: string;
  /** CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]。 */
  CidrBlocks: string[];
}

declare interface DeleteAssistantCidrResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBandwidthPackageRequest {
  /** 待删除带宽包唯一ID */
  BandwidthPackageId: string;
}

declare interface DeleteBandwidthPackageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCcnRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
}

declare interface DeleteCcnResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCcnRouteTablesRequest {
  /** 需要删除的路由表列表。 */
  RouteTableId: string[];
}

declare interface DeleteCcnRouteTablesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCdcLDCXListRequest {
}

declare interface DeleteCdcLDCXListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCdcNetPlanesRequest {
}

declare interface DeleteCdcNetPlanesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteCustomerGatewayRequest {
  /** 对端网关ID，例如：cgw-2wqq41m9，可通过[DescribeCustomerGateways](https://cloud.tencent.com/document/api/215/17516)接口查询对端网关。 */
  CustomerGatewayId: string;
}

declare interface DeleteCustomerGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDhcpIpRequest {
  /** `DhcpIp`的`ID`，是`DhcpIp`的唯一标识。 */
  DhcpIpId: string;
}

declare interface DeleteDhcpIpResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDirectConnectGatewayCcnRoutesRequest {
  /** 专线网关ID，形如：dcg-prpqlmg1 */
  DirectConnectGatewayId: string;
  /** 路由ID。形如：ccnr-f49l6u0z。 */
  RouteIds: string[];
  /** 地址类型，支持：IPv4、IPv6。默认IPv4。 */
  AddressType?: string;
}

declare interface DeleteDirectConnectGatewayCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDirectConnectGatewayRequest {
  /** 专线网关唯一`ID`，形如：`dcg-9o233uri`。 */
  DirectConnectGatewayId: string;
}

declare interface DeleteDirectConnectGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFlowLogRequest {
  /** 流日志唯一ID。 */
  FlowLogId: string;
  /** 私用网络ID或者统一ID，建议使用统一ID，删除云联网流日志时，可不填，其他流日志类型必填。 */
  VpcId?: string;
}

declare interface DeleteFlowLogResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteHaVipRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。 */
  HaVipId: string;
}

declare interface DeleteHaVipResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteHighPriorityRouteTablesRequest {
  /** 高优路由表表唯一ID 列表。 */
  HighPriorityRouteTableIds?: string[];
}

declare interface DeleteHighPriorityRouteTablesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteHighPriorityRoutesRequest {
  /** 高优路由表唯一 ID。 */
  HighPriorityRouteTableId: string;
  /** 高优路由表条目唯一 ID 列表。 */
  HighPriorityRouteIds: string[];
}

declare interface DeleteHighPriorityRoutesResponse {
  /** 高优路由表条目信息。 */
  HighPriorityRouteSet?: HighPriorityRoute[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteIp6TranslatorsRequest {
  /** 待释放的IPV6转换实例的唯一ID，形如‘ip6-xxxxxxxx’ */
  Ip6TranslatorIds: string[];
}

declare interface DeleteIp6TranslatorsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLocalGatewayRequest {
  /** 本地网关实例ID。 */
  LocalGatewayId: string;
  /** CDC实例ID。 */
  CdcId: string;
  /** VPC实例ID。 */
  VpcId?: string;
}

declare interface DeleteLocalGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** NAT网关的端口转换规则。 */
  DestinationIpPortTranslationNatRules: DestinationIpPortTranslationNatRule[];
}

declare interface DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNatGatewayRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
}

declare interface DeleteNatGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNatGatewaySourceIpTranslationNatRuleRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** NAT网关的SNAT ID列表，形如：`snat-df43254`。 */
  NatGatewaySnatIds: string[];
}

declare interface DeleteNatGatewaySourceIpTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNetDetectRequest {
  /** 网络探测实例`ID`。形如：`netd-12345678`。 */
  NetDetectId: string;
}

declare interface DeleteNetDetectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNetworkAclEntriesRequest {
  /** 三元组网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 三元组网络ACL规则集。 */
  NetworkAclEntrySet?: NetworkAclEntrySet;
}

declare interface DeleteNetworkAclEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNetworkAclQuintupleEntriesRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络五元组ACL规则集。 */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntries;
}

declare interface DeleteNetworkAclQuintupleEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNetworkAclRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
}

declare interface DeleteNetworkAclResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
}

declare interface DeleteNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 目的端口转换规则数组。 */
  LocalDestinationIpPortTranslationNatRules: LocalDestinationIpPortTranslationNatRule[];
}

declare interface DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivateNatGatewayRequest {
  /** 私网网关唯一`ID`，形如"intranat-xxxxxxxx"。 */
  NatGatewayId: string;
}

declare interface DeletePrivateNatGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivateNatGatewayTranslationAclRuleRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 转换规则目标，可选值"LOCAL"。 */
  TranslationDirection: string;
  /** 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。 */
  TranslationType: string;
  /** 转换`IP`,当转换规则类型为四层时为`IP`池 */
  TranslationIp: string;
  /** 访问控制规则对应`ID` */
  AclRuleIds: number[];
  /** 源`IP`,当转换规则类型为三层时有效 */
  OriginalIp?: string;
}

declare interface DeletePrivateNatGatewayTranslationAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeletePrivateNatGatewayTranslationNatRuleRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 转换规则对象数组。 */
  TranslationNatRules: TranslationNatRule[];
  /** 跨域参数，当VPC为跨域时填写为True。 */
  CrossDomain?: boolean;
}

declare interface DeletePrivateNatGatewayTranslationNatRuleResponse {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteReserveIpAddressesRequest {
  /** VPC唯一 ID。 */
  VpcId: string;
  /** 内网保留IP地址列表。 */
  ReserveIpIds: string[];
}

declare interface DeleteReserveIpAddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRouteTableRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
}

declare interface DeleteRouteTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRoutesRequest {
  /** 路由表实例ID。 */
  RouteTableId: string;
  /** 路由策略对象，删除路由策略时，仅需使用Route的RouteId字段。 */
  Routes?: Route[];
}

declare interface DeleteRoutesResponse {
  /** 已删除的路由策略详情。 */
  RouteSet?: Route[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityGroupPoliciesRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组规则集合。一个请求中只能删除单个方向的一条或多条规则。支持指定索引（PolicyIndex） 匹配删除和安全组规则匹配删除两种方式，一个请求中只能使用一种匹配方式。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
}

declare interface DeleteSecurityGroupPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityGroupRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
}

declare interface DeleteSecurityGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServiceTemplateGroupRequest {
  /** 协议端口模板集合实例ID，例如：ppmg-n17uxvve。 */
  ServiceTemplateGroupId: string;
}

declare interface DeleteServiceTemplateGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteServiceTemplateRequest {
  /** 协议端口模板实例ID，例如：ppm-e6dy460g。 */
  ServiceTemplateId: string;
}

declare interface DeleteServiceTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSnapshotPoliciesRequest {
  /** 快照策略Id。 */
  SnapshotPolicyIds: string[];
}

declare interface DeleteSnapshotPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSubnetRequest {
  /** 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。 */
  SubnetId: string;
}

declare interface DeleteSubnetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTemplateMemberRequest {
  /** 参数模板实例ID，支持IP地址、协议端口、IP地址组、协议端口组四种参数模板的实例ID。 */
  TemplateId: string;
  /** 需要添加的参数模板成员信息，支持IP地址、协议端口、IP地址组、协议端口组四种类型，类型需要与TemplateId参数类型一致。 */
  TemplateMember: MemberInfo[];
}

declare interface DeleteTemplateMemberResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteTrafficPackagesRequest {
  /** 待删除的流量包唯一ID数组 */
  TrafficPackageIds: string[];
}

declare interface DeleteTrafficPackagesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpcEndPointRequest {
  /** 终端节点ID。 */
  EndPointId: string;
}

declare interface DeleteVpcEndPointResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpcEndPointServiceRequest {
  /** 终端节点ID。 */
  EndPointServiceId: string;
}

declare interface DeleteVpcEndPointServiceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpcEndPointServiceWhiteListRequest {
  /** 用户UIN数组。 */
  UserUin: string[];
  /** 终端节点服务ID。 */
  EndPointServiceId: string;
}

declare interface DeleteVpcEndPointServiceWhiteListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpcPeeringConnectionRequest {
  /** 对等连接唯一ID。 */
  PeeringConnectionId: string;
}

declare interface DeleteVpcPeeringConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpcRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
}

declare interface DeleteVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpnConnectionRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** VPN通道实例ID。形如：vpnx-f49l6u0z。 */
  VpnConnectionId: string;
}

declare interface DeleteVpnConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpnGatewayRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
}

declare interface DeleteVpnGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpnGatewayRoutesRequest {
  /** VPN网关实例ID */
  VpnGatewayId: string;
  /** 路由ID信息列表，可以通过[DescribeVpnGatewayRoutes](https://cloud.tencent.com/document/api/215/57676)接口查询。 */
  RouteIds: string[];
}

declare interface DeleteVpnGatewayRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpnGatewaySslClientRequest {
  /** SSL-VPN-CLIENT 实例ID。不可和SslVpnClientIds同时使用。 */
  SslVpnClientId?: string;
  /** SSL-VPN-CLIENT 实例ID列表。批量删除时使用。不可和SslVpnClientId同时使用。 */
  SslVpnClientIds?: string[];
}

declare interface DeleteVpnGatewaySslClientResponse {
  /** 异步任务ID。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpnGatewaySslServerRequest {
  /** SSL-VPN-SERVER 实例ID。 */
  SslVpnServerId: string;
}

declare interface DeleteVpnGatewaySslServerResponse {
  /** 异步任务ID。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountAttributesRequest {
}

declare interface DescribeAccountAttributesResponse {
  /** 用户账号属性对象。 */
  AccountAttributeSet?: AccountAttribute[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddressQuotaRequest {
}

declare interface DescribeAddressQuotaResponse {
  /** 账户 EIP 配额信息。 */
  QuotaSet?: Quota[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddressTemplateGroupsRequest {
  /** 过滤条件。address-template-group-name - String - （过滤条件）IP地址模板集合名称。address-template-group-id - String - （过滤条件）IP地址模板实集合例ID，例如：ipmg-mdunqeb6。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
  /** 是否查询IP地址模板成员标识。 */
  NeedMemberInfo?: boolean;
}

declare interface DescribeAddressTemplateGroupsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** IP地址模板。 */
  AddressTemplateGroupSet?: AddressTemplateGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddressTemplatesRequest {
  /** 过滤条件。address-template-name - IP地址模板名称。address-template-id - IP地址模板实例ID，例如：ipm-mdunqeb6。address-ip - IP地址。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
  /** 是否获取IP地址模板成员标识。 */
  NeedMemberInfo?: boolean;
}

declare interface DescribeAddressTemplatesResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** IP地址模板。 */
  AddressTemplateSet?: AddressTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddressesRequest {
  /** 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：`eip-11112222`。参数不支持同时指定`AddressIds`和`Filters.address-id`。 */
  AddressIds?: string[];
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。详细的过滤条件如下： address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。 address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。 address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。 address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。状态包含：'CREATING'，'BINDING'，'BIND'，'UNBINDING'，'UNBIND'，'OFFLINING'，'BIND_ENI'。 instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。 private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。 network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。 is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常） address-type - String - 是否必填：否 - （过滤条件）按照 IP类型 进行过滤。可选值：'WanIP', 'EIP'，'AnycastEIP'，'HighQualityEIP'， 'AntiDDoSEIP'。默认值是'EIP'。 address-isp - String - 是否必填：否 - （过滤条件）按照 运营商类型 进行过滤。可选值：'BGP'，'CMCC'，'CUCC', 'CTCC' dedicated-cluster-id - String - 是否必填：否 - （过滤条件）按照 CDC 的唯一 ID 过滤。CDC 唯一 ID 形如：cluster-11112222。 tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。 tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。 tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API 中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API 中的相关小节。 */
  Limit?: number;
}

declare interface DescribeAddressesResponse {
  /** 符合条件的 EIP 数量。 */
  TotalCount?: number;
  /** EIP 详细信息列表。 */
  AddressSet?: Address[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  AssistantCidrSet?: AssistantCidr[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBandwidthPackageBillUsageRequest {
  /** 后付费共享带宽包的唯一ID */
  BandwidthPackageId: string;
}

declare interface DescribeBandwidthPackageBillUsageResponse {
  /** 当前计费用量 */
  BandwidthPackageBillBandwidthSet: BandwidthPackageBillBandwidth[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBandwidthPackageQuotaRequest {
}

declare interface DescribeBandwidthPackageQuotaResponse {
  /** 带宽包配额详细信息 */
  QuotaSet?: Quota[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 共享带宽包内资源 详细信息列表。 */
  ResourceSet?: Resource[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBandwidthPackagesRequest {
  /** 带宽包唯一ID列表 */
  BandwidthPackageIds?: string[];
  /** 每次请求的`Filters`的上限为10。参数不支持同时指定`BandwidthPackageIds`和`Filters`。详细的过滤条件如下： bandwidth-package-id - String - 是否必填：否 - （过滤条件）按照带宽包的唯一标识ID过滤。 bandwidth-package-name - String - 是否必填：否 - （过滤条件）按照 带宽包名称过滤。不支持模糊过滤。 network-type - String - 是否必填：否 - （过滤条件）按照带宽包的类型过滤。类型包括'HIGH_QUALITY_BGP','BGP','SINGLEISP'和'ANYCAST'。 charge-type - String - 是否必填：否 - （过滤条件）按照带宽包的计费类型过滤。计费类型包括: 'TOP5_POSTPAID_BY_MONTH':按月后付费TOP5计费 'PERCENT95_POSTPAID_BY_MONTH':按月后付费月95计费'ENHANCED95_POSTPAID_BY_MONTH':按月后付费增强型95计费'FIXED_PREPAID_BY_MONTH':包月预付费计费‘PEAK_BANDWIDTH_POSTPAID_BY_DAY’: 后付费日结按带宽计费 resource.resource-type - String - 是否必填：否 - （过滤条件）按照带宽包资源类型过滤。资源类型包括'Address'和'LoadBalance' resource.resource-id - String - 是否必填：否 - （过滤条件）按照带宽包资源Id过滤。资源Id形如'eip-xxxx','lb-xxxx' resource.address-ip - String - 是否必填：否 - （过滤条件）按照带宽包资源Ip过滤。 tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。 tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。 tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。 */
  Filters?: Filter[];
  /** 查询带宽包偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小结。 */
  Offset?: number;
  /** 查询带宽包返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小结。 */
  Limit?: number;
}

declare interface DescribeBandwidthPackagesResponse {
  /** 符合条件的带宽包数量 */
  TotalCount?: number;
  /** 描述带宽包详细信息 */
  BandwidthPackageSet?: BandwidthPackage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcnAttachedInstancesRequest {
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 过滤条件：ccn-id - String -（过滤条件）CCN实例ID。instance-type - String -（过滤条件）关联实例类型。instance-region - String -（过滤条件）关联实例所属地域。instance-id - String -（过滤条件）关联实例ID。 */
  Filters?: Filter[];
  /** 云联网实例ID */
  CcnId?: string;
  /** 排序字段。支持：`CcnId` `InstanceType` `InstanceId` `InstanceName` `InstanceRegion` `AttachedTime` `State`。默认值：`AttachedTime` */
  OrderField?: string;
  /** 排序方法。升序：`ASC`，倒序：`DESC`。默认值：`ASC` */
  OrderDirection?: string;
}

declare interface DescribeCcnAttachedInstancesResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 关联实例列表。 */
  InstanceSet?: CcnAttachedInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcnRegionBandwidthLimitsRequest {
  /** CCN实例ID，形如：ccn-f49l6u0z。 */
  CcnId: string;
}

declare interface DescribeCcnRegionBandwidthLimitsResponse {
  /** 云联网（CCN）各地域出带宽上限 */
  CcnRegionBandwidthLimitSet?: CcnRegionBandwidthLimit[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcnRouteTableBroadcastPolicysRequest {
  /** 云联网ID */
  CcnId: string;
  /** 云联网路由表ID */
  RouteTableId: string;
  /** 路由传播策略版本号 */
  PolicyVersion?: number;
}

declare interface DescribeCcnRouteTableBroadcastPolicysResponse {
  /** 路由表传播策略。 */
  PolicySet: CcnRouteTableBroadcastPolicys[];
  /** 符合条件的对象数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcnRouteTableInputPolicysRequest {
  /** 云联网ID。 */
  CcnId: string;
  /** 云联网路由表ID。 */
  RouteTableId: string;
  /** 路由接收策略版本号。 */
  PolicyVersion?: number;
}

declare interface DescribeCcnRouteTableInputPolicysResponse {
  /** 路由表接收策略。 */
  PolicySet?: CcnRouteTableInputPolicys[];
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcnRouteTablesRequest {
  /** 过滤条件：ccn-id - String -（过滤条件）CCN实例ID。route-table-id - String -（过滤条件）路由表ID。route-table-name - String -（过滤条件）路由表名称。route-table-description- String -（过滤条件）路由表备注。 */
  Filters?: Filter[];
  /** 偏移量。 */
  Offset?: number;
  /** 一次查询最大返回的数量。 */
  Limit?: number;
}

declare interface DescribeCcnRouteTablesResponse {
  /** 路由表信息列表。 */
  CcnRouteTableSet: CcnRouteTable[];
  /** 查询到的路由表数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcnRoutesRequest {
  /** CCN实例ID，形如：`ccn-gree226l`。 */
  CcnId: string;
  /** CCN路由策略唯一ID，形如：`ccnr-f49l6u0z`。 */
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
  TotalCount?: number;
  /** CCN路由策略对象。 */
  RouteSet?: CcnRoute[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcnsRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定CcnIds和Filters。 */
  CcnIds?: string[];
  /** 过滤条件，参数不支持同时指定CcnIds和Filters。ccn-id - String - （过滤条件）CCN唯一ID，形如：`ccn-f49l6u0z`。ccn-name - String - （过滤条件）CCN名称。ccn-description - String - （过滤条件）CCN描述。state - String - （过滤条件）实例状态， 'ISOLATED': 隔离中（欠费停服），'AVAILABLE'：运行中。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例：查询绑定了标签的CCN列表。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 排序字段。支持：`CcnId` `CcnName` `CreateTime` `State` `QosLevel`。默认值: `CreateTime` */
  OrderField?: string;
  /** 排序方法。升序：`ASC`，倒序：`DESC`。默认值：`ASC` */
  OrderDirection?: string;
}

declare interface DescribeCcnsResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** CCN对象。 */
  CcnSet?: CCN[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCdcLDCXListRequest {
}

declare interface DescribeCdcLDCXListResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCdcNetPlanesRequest {
}

declare interface DescribeCdcNetPlanesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCdcUsedIdcVlanRequest {
}

declare interface DescribeCdcUsedIdcVlanResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeClassicLinkInstancesRequest {
  /** 过滤条件。vpc-id - String - （过滤条件）VPC实例ID。vm-ip - String - （过滤条件）基础网络云服务器IP。 */
  Filters?: FilterObject[];
  /** 偏移量，默认值0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeClassicLinkInstancesResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 私有网络和基础网络互通设备。 */
  ClassicLinkInstanceSet?: ClassicLinkInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCrossBorderCcnRegionBandwidthLimitsRequest {
  /** 过滤条件，目前`value`值个数只支持一个，可支持的字段有：`source-region` 源地域，值形如：`["ap-guangzhou"]` `destination-region` 目的地域，值形如：`["ap-shanghai"]` `ccn-ids` 云联网ID数组，值形如：`["ccn-12345678"]` `user-account-id` 用户账号ID，值形如`["12345678"]` */
  Filters?: Filter[];
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 单页返回数据量可选值0到100之间的整数，默认20。 */
  Limit?: number;
}

declare interface DescribeCrossBorderCcnRegionBandwidthLimitsResponse {
  /** 符合条件的对象总数。 */
  TotalCount?: number;
  /** 云联网地域间限速带宽实例的信息。 */
  CcnBandwidthSet?: CcnBandwidth[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** （精确查询）法人身份证号。 */
  LegalPersonId?: string;
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
  CrossBorderComplianceSet?: CrossBorderCompliance[];
  /** 合规化审批单总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCrossBorderFlowMonitorRequest {
  /** 源地域。 */
  SourceRegion: string;
  /** 目的地域。 */
  DestinationRegion: string;
  /** 云联网ID。 */
  CcnId: string;
  /** 云联网所属账号。 */
  CcnUin: string;
  /** 时间粒度。单位为:秒，如60为60s的时间粒度 */
  Period: number;
  /** 开始时间。 */
  StartTime: string;
  /** 结束时间。 */
  EndTime: string;
}

declare interface DescribeCrossBorderFlowMonitorResponse {
  /** 云联网跨境带宽监控数据 */
  CrossBorderFlowMonitorData?: CrossBorderFlowMonitorData[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomerGatewayVendorsRequest {
}

declare interface DescribeCustomerGatewayVendorsResponse {
  /** 对端网关厂商信息对象。 */
  CustomerGatewayVendorSet?: CustomerGatewayVendor[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomerGatewaysRequest {
  /** 对端网关ID，例如：cgw-2wqq41m9。每次请求的实例的上限为100。参数不支持同时指定CustomerGatewayIds和Filters。 */
  CustomerGatewayIds?: string[];
  /** 过滤条件，详见下表：实例过滤条件表。每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定CustomerGatewayIds和Filters。customer-gateway-id - String - （过滤条件）用户网关唯一ID形如：`cgw-mgp33pll`。customer-gateway-name - String - （过滤条件）用户网关名称形如：`test-cgw`。ip-address - String - （过滤条件）公网地址形如：`58.211.1.12`。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeCustomerGatewaysResponse {
  /** 对端网关对象列表。 */
  CustomerGatewaySet?: CustomerGateway[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  DhcpIpSet?: DhcpIp[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDirectConnectGatewayCcnRoutesRequest {
  /** 专线网关ID，形如：`dcg-prpqlmg1`。 */
  DirectConnectGatewayId: string;
  /** 云联网路由学习类型，可选值：`BGP` - 自动学习。`STATIC` - 静态，即用户配置，默认值。 */
  CcnRouteType?: string;
  /** 地址类型，支持：IPv4、IPv6。默认IPv4。 */
  AddressType?: string;
  /** 偏移量。 */
  Offset?: number;
  /** 返回数量。 */
  Limit?: number;
}

declare interface DescribeDirectConnectGatewayCcnRoutesResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 云联网路由（IDC网段）列表。 */
  RouteSet?: DirectConnectGatewayCcnRoute[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowLogRequest {
  /** 私用网络ID或者统一ID，建议使用统一ID。 */
  VpcId: string;
  /** 流日志唯一ID。 */
  FlowLogId: string;
}

declare interface DescribeFlowLogResponse {
  /** 流日志信息。 */
  FlowLog?: FlowLog[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFlowLogsRequest {
  /** 私用网络ID或者统一ID，建议使用统一ID。 */
  VpcId?: string;
  /** 流日志唯一ID。 */
  FlowLogId?: string;
  /** 流日志实例名字。 */
  FlowLogName?: string;
  /** 流日志所属资源类型，VPC|SUBNET|NETWORKINTERFACE。 */
  ResourceType?: string;
  /** 资源唯一ID。 */
  ResourceId?: string;
  /** 流日志采集类型，ACCEPT|REJECT|ALL。 */
  TrafficType?: string;
  /** 流日志存储ID。 */
  CloudLogId?: string;
  /** 流日志存储ID状态。 */
  CloudLogState?: string;
  /** 按某个字段排序,支持字段：flowLogName,createTime，默认按CreatedTime。 */
  OrderField?: string;
  /** 升序（ASC）还是降序（DESC）,默认：DESC。 */
  OrderDirection?: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 每页行数，默认为10。 */
  Limit?: number;
  /** 过滤条件，参数不支持同时指定FlowLogId和Filters。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。 */
  Filters?: Filter;
  /** 流日志存储ID对应的地域信息。 */
  CloudLogRegion?: string;
}

declare interface DescribeFlowLogsResponse {
  /** 流日志实例集合。 */
  FlowLog?: FlowLog[];
  /** 流日志总数目。 */
  TotalNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 排序字段。支持 `InPkg` `OutPkg` `InTraffic` `OutTraffic`，标准型nat额外支持 并发连接数`ConcurrentConnectionCount` 、新建连接速率`NewConnectionRate`。默认值`OutTraffic`。 */
  OrderField?: string;
  /** 排序方法。顺序：`ASC`，倒序：`DESC`。默认值`DESC`。 */
  OrderDirection?: string;
  /** VPC内部IPv4地址，精确匹配 */
  PrivateIpAddress?: string;
}

declare interface DescribeGatewayFlowMonitorDetailResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 网关流量监控明细。 */
  GatewayFlowMonitorDetailSet?: GatewayFlowMonitorDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHaVipsRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。 */
  HaVipIds?: string[];
  /** 过滤条件，参数不支持同时指定`HaVipIds`和`Filters`。havip-id - String - `HAVIP`唯一`ID`，形如：`havip-9o233uri`。havip-name - String - `HAVIP`名称。vpc-id - String - `HAVIP`所在私有网络`ID`。subnet-id - String - `HAVIP`所在子网`ID`。vip - String - `HAVIP`的地址`VIP`。address-ip - String - `HAVIP`绑定的弹性公网`IP`。havip-association.instance-id - String - `HAVIP`绑定的子机或网卡。havip-association.instance-type - String - `HAVIP`绑定的类型，取值:CVM, ENI。check-associate - Bool - 是否开启HaVip飘移时校验绑定的子机或网卡。cdc-id - String - CDC实例ID。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeHaVipsResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** `HAVIP`对象数组。 */
  HaVipSet?: HaVip[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHighPriorityRouteTablesRequest {
  /** 过滤条件，参数不支持同时指定HighPriorityRouteTableIds和Filters。high-priority-route-table-id - String - （过滤条件）高优路由表实例ID。name - String - （过滤条件）高优路由表名称。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。tag-key - String -是否必填：否 - （过滤条件）按照标签键进行过滤。next-hop-type - String - 是否必填：否 - （过滤条件）按下一跳类型进行过滤。使用next-hop-type进行过滤时，必须同时携带route-table-id与vpc-id。目前我们支持的类型有：HAVIP：高可用虚拟IP；NORMAL_CVM：普通云服务器； */
  Filters?: Filter[];
  /** 高优路由表实例ID，例如：hprtb-18mot1fm。 */
  HighPriorityRouteTableIds?: string[];
  /** 偏移量。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
  /** 是否需要获取路由策略信息，默认获取，当控制台不需要拉取路由策略信息时，改为False。 */
  NeedRouterInfo?: boolean;
}

declare interface DescribeHighPriorityRouteTablesResponse {
  /** 高优路由表对象。 */
  HighPriorityRouteTableSet?: HighPriorityRouteTable[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHighPriorityRoutesRequest {
  /** 高优路由表唯一 ID。 */
  HighPriorityRouteTableId: string;
  /** gateway-id - String - （过滤条件）网关ID。description - String - （过滤条件）路由描述。dest-cidr - String - （过滤条件）目的端地址，支持模糊左匹配。subnet-route-algorithm - String - （过滤条件）现在支持的算法有：ECMP_QUINTUPLE_HASH：五元组hash，ECMP_SOURCE_DESTINATION_IP_HASH：源和目的IP hash，ECMP_DESTINATION_IP_HASH：目的IP hash，ECMP_SOURCE_IP_HASH：源IP hash。is-cdc - String - （过滤条件）CDC属性高优路由表。cdc-id - String - （过滤条件）CDC 集群唯一 ID 。 */
  Filters?: Filter[];
  /** 偏移量。 */
  Offset?: number;
  /** 请求对象个数。 */
  Limit?: number;
}

declare interface DescribeHighPriorityRoutesResponse {
  /** 高优路由表条目信息。 */
  HighPriorityRouteSet?: HighPriorityRoute[];
  /** 高优路由表条目个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIPv6AddressesRequest {
  /** 标识 IPv6 的唯一 ID 列。- 传统弹性公网 IPv6 唯一 ID 形如：`eip-11112222`- 弹性公网 IPv6 唯一 ID 形如：`eipv6-11112222`注意：参数不支持同时指定`IPv6AddressIds`和`Filters`。 */
  IPv6AddressIds?: string[];
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。参数不支持同时指定`IPv6AddressIds`和`Filters`。详细的过滤条件如下：- address-id - String - 是否必填：否 - （过滤条件）按照弹性公网IPv6的唯一ID过滤。- public-ipv6-address - String - 是否必填：否 - （过滤条件）按照公网 IPv6 的 IP 地址过滤。- network-interface-id - String - 是否必填：否 - （过滤条件）按照弹性网卡的唯一ID过滤。- instance-id - String - 是否必填：否 - （过滤条件）按照绑定实例的唯一ID过滤。- charge-type - String - 是否必填：否 - （过滤条件）按照计费类型过滤。- private-ipv6-address - String - 是否必填：否 - （过滤条件）按照绑定的内网 IPv6 地址过滤。- egress - String - 是否必填：否 - （过滤条件）按照出口过滤。- address-type - String - 是否必填：否 - （过滤条件）按照IPv6类型 进行过滤。可选值：'EIP6'，'EIPv6'，'WanIPv6'，'HighQualityEIPv6'。默认值是'EIPv6'。- address-isp - String - 是否必填：否 - （过滤条件）按照 运营商类型 进行过滤。可选值：'BGP'，'CMCC'，'CUCC', 'CTCC'。- address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。状态包含：'CREATING'，'BINDING'，'BIND'，'UNBINDING'，'UNBIND'，'OFFLINING'，'BIND_ENI'，'PRIVATE'。- address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。- tag-key - String - 是否必填：否 - （过滤条件）按照标签键进行过滤。- tag-value - String - 是否必填：否 - （过滤条件）按照标签值进行过滤。- tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。tag-key使用具体的标签键进行替换。 */
  Filters?: Filter[];
  /** 是否查询传统型IPv6地址信息。 */
  Traditional?: boolean;
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/11646)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeIPv6AddressesResponse {
  /** 符合条件的 IPv6 数量。 */
  TotalCount?: number;
  /** IPv6 详细信息列表。 */
  AddressSet?: Address[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIp6AddressesRequest {
  /** 标识 IPV6 的唯一 ID 列表。IPV6 唯一 ID 形如：`eip-11112222`。参数不支持同时指定`Ip6AddressIds`和`Filters`。 */
  Ip6AddressIds?: string[];
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。参数不支持同时指定`AddressIds`和`Filters`。详细的过滤条件如下： address-ip - String - 是否必填：否 - （过滤条件）按照 IPV6 的 IP 地址过滤。 network-interface-id - String - 是否必填：否 - （过滤条件）按照弹性网卡的唯一ID过滤。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIp6TranslatorQuotaRequest {
  /** 待查询IPV6转换实例的唯一ID列表，形如ip6-xxxxxxxx */
  Ip6TranslatorIds?: string[];
}

declare interface DescribeIp6TranslatorQuotaResponse {
  /** 账户在指定地域的IPV6转换实例及规则配额信息QUOTAID属性是TOTAL_TRANSLATOR_QUOTA，表示账户在指定地域的IPV6转换实例配额信息；QUOTAID属性是IPV6转换实例唯一ID（形如ip6-xxxxxxxx），表示账户在该转换实例允许创建的转换规则配额 */
  QuotaSet?: Quota[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIp6TranslatorsRequest {
  /** IPV6转换实例唯一ID数组，形如ip6-xxxxxxxx */
  Ip6TranslatorIds?: string[];
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`Ip6TranslatorIds`和`Filters`。详细的过滤条件如下： ip6-translator-id - String - 是否必填：否 - （过滤条件）按照IPV6转换实例的唯一ID过滤,形如ip6-xxxxxxx。 ip6-translator-vip6 - String - 是否必填：否 - （过滤条件）按照IPV6地址过滤。不支持模糊过滤。 ip6-translator-name - String - 是否必填：否 - （过滤条件）按照IPV6转换实例名称过滤。不支持模糊过滤。 ip6-translator-status - String - 是否必填：否 - （过滤条件）按照IPV6转换实例的状态过滤。状态取值范围为"CREATING","RUNNING","DELETING","MODIFYING"。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeIpGeolocationDatabaseUrlRequest {
  /** IP地理位置库协议类型，目前仅支持"ipv4"。 */
  Type: string;
}

declare interface DescribeIpGeolocationDatabaseUrlResponse {
  /** IP地理位置库下载链接地址。 */
  DownLoadUrl?: string;
  /** 链接到期时间。按照`ISO8601`标准表示，并且使用`UTC`时间。 */
  ExpiredAt?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  AddressInfo?: IpGeolocationInfo[];
  /** IP地址信息个数。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 本地网关信息集合。 */
  LocalGatewaySet?: LocalGateway[];
  /** 本地网关总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest {
  /** NAT网关ID。 */
  NatGatewayIds?: string[];
  /** 过滤条件:参数不支持同时指定NatGatewayIds和Filters。每次请求的Filters的上限为10，Filter.Values的上限为5 nat-gateway-id，NAT网关的ID，如`nat-0yi4hekt` vpc-id，私有网络VPC的ID，如`vpc-0yi4hekt` public-ip-address， 弹性IP，如`139.199.232.238`。public-port， 公网端口。private-ip-address， 内网IP，如`10.0.0.1`。private-port， 内网端口。description，规则描述。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse {
  /** NAT网关端口转发规则对象数组。 */
  NatGatewayDestinationIpPortTranslationNatRuleSet?: NatGatewayDestinationIpPortTranslationNatRule[];
  /** 符合条件的NAT网关端口转发规则对象数目。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNatGatewaysRequest {
  /** NAT网关统一 ID，形如：`nat-123xx454`。每次请求的实例上限为100。参数不支持同时指定NatGatewayIds和Filters。 */
  NatGatewayIds?: string[];
  /** 过滤条件，参数不支持同时指定NatGatewayIds和Filters。每次请求的Filters的上限为10，Filter.Values的上限为5。nat-gateway-id - String - （过滤条件）协议端口模板实例ID，形如：`nat-123xx454`。vpc-id - String - （过滤条件）私有网络 唯一ID，形如：`vpc-123xx454`。nat-gateway-name - String - （过滤条件）协议端口模板实例ID，形如：`test_nat`。tag-key - String - （过滤条件）标签键，形如：`test-key`。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNatGatewaysResponse {
  /** NAT网关对象数组。 */
  NatGatewaySet?: NatGateway[];
  /** 符合条件的NAT网关对象个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetDetectStatesRequest {
  /** 网络探测实例`ID`数组。形如：[`netd-12345678`]。 */
  NetDetectIds?: string[];
  /** 过滤条件，参数不支持同时指定NetDetectIds和Filters。net-detect-id - String - （过滤条件）网络探测实例ID，形如：netd-12345678。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNetDetectStatesResponse {
  /** 符合条件的网络探测验证结果对象数组。 */
  NetDetectStateSet?: NetDetectState[];
  /** 符合条件的网络探测验证结果对象数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetDetectsRequest {
  /** 网络探测实例`ID`数组。形如：[`netd-12345678`]。 */
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
  NetDetectSet?: NetDetect[];
  /** 符合条件的网络探测对象数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetworkAccountTypeRequest {
}

declare interface DescribeNetworkAccountTypeResponse {
  /** 用户账号的网络类型，STANDARD为标准用户，LEGACY为传统用户 */
  NetworkAccountType?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetworkAclQuintupleEntriesRequest {
  /** 网络ACL实例ID。形如：acl-12345678。 */
  NetworkAclId: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最小值为1，最大值为100。 */
  Limit?: number;
  /** 过滤条件，参数不支持同时指定`NetworkAclId`和`Filters`。protocol - String - 协议，形如：`TCP`。description - String - 描述。destination-cidr - String - 目的CIDR， 形如：'192.168.0.0/24'。source-cidr- String - 源CIDR， 形如：'192.168.0.0/24'。action - String - 动作，形如ACCEPT或DROP。network-acl-quintuple-entry-id - String - 五元组唯一ID，形如：'acli45-ahnu4rv5'。network-acl-direction - String - 方向，形如：'INGRESS'或'EGRESS'。 */
  Filters?: Filter[];
}

declare interface DescribeNetworkAclQuintupleEntriesResponse {
  /** 网络ACL条目列表（NetworkAclTuple5Entry） */
  NetworkAclQuintupleSet?: NetworkAclQuintupleEntry[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 排序字段。支持：NetworkAclId,NetworkAclName,CreatedTime */
  OrderField?: string;
  /** 排序方法。顺序：ASC，倒序：DESC。 */
  OrderDirection?: string;
}

declare interface DescribeNetworkAclsResponse {
  /** 实例详细信息列表。 */
  NetworkAclSet?: NetworkAcl[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetworkInterfaceLimitRequest {
  /** 要查询的CVM实例ID或弹性网卡ID。 */
  InstanceId: string;
}

declare interface DescribeNetworkInterfaceLimitResponse {
  /** 标准型弹性网卡配额。 */
  EniQuantity?: number;
  /** 每个标准型弹性网卡可以分配的IP配额。 */
  EniPrivateIpAddressQuantity?: number;
  /** 扩展型网卡配额。 */
  ExtendEniQuantity?: number;
  /** 每个扩展型弹性网卡可以分配的IP配额。 */
  ExtendEniPrivateIpAddressQuantity?: number;
  /** 中继网卡配额。 */
  SubEniQuantity?: number;
  /** 每个中继网卡可以分配的IP配额。 */
  SubEniPrivateIpAddressQuantity?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetworkInterfacesRequest {
  /** 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。 */
  NetworkInterfaceIds?: string[];
  /** 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ins-3nqpdn3i。groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。network-interface-name - String - （过滤条件）网卡实例名称。network-interface-description - String - （过滤条件）网卡实例描述。address-ip - String - （过滤条件）内网IPv4地址，单IP后缀模糊匹配，多IP精确匹配。可以与`ip-exact-match`配合做单IP的精确匹配查询。ip-exact-match - Boolean - （过滤条件）内网IPv4精确匹配查询，存在多值情况，只取第一个。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；此过滤参数未提供时，同时过滤主网卡和辅助网卡。eni-type - String -是否必填：否- （过滤条件）按照网卡类型进行过滤。“0”-辅助网卡，“1”-主网卡，“2”：中继网卡。eni-qos - String -是否必填：否- （过滤条件）按照网卡服务质量进行过滤。“AG”-服务质量为云铜，“AU”-服务质量为云银。address-ipv6 - String - 是否必填：否 -（过滤条件）内网IPv6地址过滤，支持多ipv6地址查询，如果和address-ip一起使用取交集。public-address-ip - String - （过滤条件）公网IPv4地址，精确匹配。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeNetworkInterfacesResponse {
  /** 实例详细信息列表。 */
  NetworkInterfaceSet?: NetworkInterface[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesRequest {
  /** 私网网关唯一`ID`，形如"intranat-xxxxxxxx) */
  NatGatewayId: string;
  /** 过滤条件，Name可选值"OriginalIp", "TranslationIp", "OriginalPort","TranslationPort", "Protocol", "Description" */
  Filters?: Filter[];
  /** 偏移量，默认值为0。 */
  Offset?: number;
  /** 返回数目，默认值为20。 */
  Limit?: number;
}

declare interface DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesResponse {
  /** 总规则数目。 */
  TotalCount: number;
  /** 目的端口转换规则数组。 */
  LocalDestinationIpPortTranslationNatRuleSet: PrivateNatDestinationIpPortTranslationNatRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateNatGatewayLimitsRequest {
  /** 查询VPC下可创建的私网网关配额数量，可选值：VpcId - String - 所在VpcId */
  Filters?: Filter[];
  /** 偏移量，默认值为0。 */
  Offset?: number;
  /** 返回数目，默认值为20。 */
  Limit?: number;
}

declare interface DescribePrivateNatGatewayLimitsResponse {
  /** 查询返回结果个数。 */
  TotalCount: number;
  /** 私网网关配额。 */
  PrivateNatGatewayLimitSet: PrivateNatGatewayLimit[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateNatGatewayRegionsRequest {
}

declare interface DescribePrivateNatGatewayRegionsResponse {
  /** 地域对象 */
  RegionSet: NatRegionInfoWithArea[];
  /** 返回可支持地域总数 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateNatGatewayTranslationAclRulesRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 转换规则目标，可选值"LOCAL"。 */
  TranslationDirection: string;
  /** 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。 */
  TranslationType: string;
  /** 转换`IP`,当转换规则类型为四层时为`IP`池。 */
  TranslationIp: string;
  /** 源`IP`,当转换规则类型为三层时有效。 */
  OriginalIp?: string;
  /** 偏移量。默认值为0。 */
  Offset?: number;
  /** 返回数目，默认值为20。 */
  Limit?: number;
  /** ACL规则描述 */
  Description?: string;
}

declare interface DescribePrivateNatGatewayTranslationAclRulesResponse {
  /** 返回个数。 */
  TotalCount?: number;
  /** 访问控制规则列表。 */
  TranslationAclRuleSet?: TranslationAclRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateNatGatewayTranslationNatRulesRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId?: string;
  /** 过滤条件。OriginalIp - String - 转换规则源`IP`。TranslationIp - String - 转换`IP`。VpcId - String - 私网网关所在`VpcId`。Description - String - 转换规则描述 */
  Filters?: Filter[];
  /** 偏移量。默认值为0。 */
  Offset?: number;
  /** 返回数量。默认值为20。 */
  Limit?: number;
}

declare interface DescribePrivateNatGatewayTranslationNatRulesResponse {
  /** 对象数目。 */
  TotalCount: number;
  /** 转换规则详情数组。 */
  TranslationNatRuleSet: TranslationNatRule[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePrivateNatGatewaysRequest {
  /** 私网网关唯一`ID`，形如：`intranat-0g3blj80`。 */
  NatGatewayIds?: string[];
  /** 过滤条件。NatGatewayId - String - 私网网关唯一`ID`，形如：`intranat-0g3blj80`。NatGatewayName - String - 专线网关名称，默认模糊查询。VpcId - String - 私网网关所在`VpcId`。TagKey - Tag数组 - 私网网关标签键值对数组 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20。 */
  Limit?: number;
  /** 排序字段。可选值："NatGatewayId"、"NatGatewayName"、"CreatedTime" */
  OrderField?: string;
  /** 排序方式。可选值："ASC"、"DESC"。 */
  OrderDirection?: string;
}

declare interface DescribePrivateNatGatewaysResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 私网网关对象数组。 */
  PrivateNatGatewaySet?: PrivateNatGateway[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeProductQuotaRequest {
  /** 查询的网络产品名称，可查询的产品有：vpc、ccn、vpn、dc、dfw、clb、eip。 */
  Product: string;
}

declare interface DescribeProductQuotaResponse {
  /** ProductQuota对象数组。 */
  ProductQuotaSet?: ProductQuota[];
  /** 符合条件的产品类型个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReserveIpAddressesRequest {
  /** 内网保留IP唯一ID 列表 */
  ReserveIpIds?: string[];
  /** 过滤条件，参数不支持同时指定ReserveIpIds和Filters。reserve-ip-id - String - （过滤条件）内网保留 IP唯一 ID，形如：rsvip-pvqgv9vi。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。address-ip - String - （过滤条件）内网保留 IP 地址，形如：192.168.0.10。ip-type - String - （过滤条件）业务类型 ipType，0。name - String - （过滤条件）名称。state - String - （过滤条件）状态，可选值：Bind， UnBind。resource-id - String - （过滤条件）绑定的实例资源，形如：eni-059qmnif。tag-key - String -（过滤条件）按照标签键进行过滤。tag:tag-key - String - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。 */
  Filters?: Filter[];
  /** 偏移量。 */
  Offset?: number;
  /** 请求对象个数。 */
  Limit?: number;
}

declare interface DescribeReserveIpAddressesResponse {
  /** 内网保留 IP返回信息。 */
  ReserveIpAddressSet?: ReserveIpAddressInfo[];
  /** 返回内网保留IP的个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRouteConflictsRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** 要检查的与之冲突的目的端列表。 */
  DestinationCidrBlocks: string[];
}

declare interface DescribeRouteConflictsResponse {
  /** 路由策略冲突列表。 */
  RouteConflictSet?: RouteConflict[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRouteTableAssociatedInstancesRequest {
  /** 过滤条件：ccn-id - String -（过滤条件）CCN实例ID。ccn-route-table-id - String -（过滤条件）路由表ID。instance-type - String -（过滤条件）实例类型：私有网络: `VPC`专线网关: `DIRECTCONNECT`黑石私有网络: `BMVPC`EDGE设备: `EDGE`EDGE隧道: `EDGE_TUNNEL`EDGE网关: `EDGE_VPNGW`VPN网关：`VPNGW`instance-id- String -（过滤条件）实例ID。 */
  Filters?: Filter[];
  /** 偏移量。 */
  Offset?: number;
  /** 一次查询最大返回的数量。 */
  Limit?: number;
}

declare interface DescribeRouteTableAssociatedInstancesResponse {
  /** 查询到的绑定路由表的实例数量。 */
  TotalCount?: number;
  /** 绑定信息。 */
  InstanceBindSet?: InstanceBind[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRouteTableSelectionPoliciesRequest {
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 过滤条件：ccn-id - String -（过滤条件）CCN实例ID。instance-type - String -（过滤条件）关联实例类型:私有网络: `VPC`专线网关: `DIRECTCONNECT`黑石私有网络: `BMVPC`EDGE设备: `EDGE`EDGE隧道: `EDGE_TUNNEL`EDGE网关: `EDGE_VPNGW`VPN网关：`VPNGW`ccn-route-table-id - String -（过滤条件）路由表ID。instance-id - String -（过滤条件）关联的实例ID。route-table-name - String -（过滤条件）路由表名称。 */
  Filters?: Filter[];
}

declare interface DescribeRouteTableSelectionPoliciesResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 路由表选择策略信息集合。 */
  RouteSelectionPolicySet?: RouteSelectionPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRouteTablesRequest {
  /** 过滤条件，参数不支持同时指定RouteTableIds和Filters。route-table-id - String - （过滤条件）路由表实例ID。route-table-name - String - （过滤条件）路由表名称。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。association.main - String - （过滤条件）是否主路由表。tag-key - String -是否必填：否 - （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。next-hop-type - String - 是否必填：否 - （过滤条件）按下一跳类型进行过滤。使用next-hop-type进行过滤时，必须同时携带route-table-id与vpc-id。目前我们支持的类型有：LOCAL: 本地路由CVM：公网网关类型的云服务器；VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；HAVIP：高可用虚拟IP；NAT：NAT网关; NORMAL_CVM：普通云服务器；EIP：云服务器的公网IP；CCN：云联网；LOCAL_GATEWAY：本地网关。 */
  Filters?: Filter[];
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableIds?: string[];
  /** 偏移量。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
  /** 是否需要获取路由策略信息，默认获取，当控制台不需要拉取路由策略信息时，改为False。 */
  NeedRouterInfo?: boolean;
}

declare interface DescribeRouteTablesResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 路由表对象。 */
  RouteTableSet?: RouteTable[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRoutesRequest {
  /** vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。gateway-id - String - （过滤条件）网关ID。description - String - （过滤条件）路由描述。route-table-id - String - （过滤条件）路由表实例ID。dest-cidr - String - （过滤条件）目的端地址，支持模糊左匹配。 */
  Filters?: Filter[];
  /** 偏移量。 */
  Offset?: number;
  /** 请求对象个数。 */
  Limit?: number;
}

declare interface DescribeRoutesResponse {
  /** 路由对象。 */
  RouteSet?: Route[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupAssociationStatisticsRequest {
  /** 安全实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupIds: string[];
}

declare interface DescribeSecurityGroupAssociationStatisticsResponse {
  /** 安全组关联实例统计。 */
  SecurityGroupAssociationStatisticsSet?: SecurityGroupAssociationStatistics[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupLimitsRequest {
}

declare interface DescribeSecurityGroupLimitsResponse {
  /** 用户安全组配额限制。 */
  SecurityGroupLimitSet?: SecurityGroupLimitSet;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  SecurityGroupPolicySet?: SecurityGroupPolicySet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupReferencesRequest {
  /** 安全组实例ID数组。格式如：['sg-12345678']。 */
  SecurityGroupIds: string[];
}

declare interface DescribeSecurityGroupReferencesResponse {
  /** 安全组被引用信息。 */
  ReferredSecurityGroupSet?: ReferredSecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupsRequest {
  /** 安全组实例ID，例如：sg-33ocnj9n。每次请求的实例的上限为100。参数不支持同时指定SecurityGroupIds和Filters。 */
  SecurityGroupIds?: string[];
  /** 过滤条件，参数不支持同时指定SecurityGroupIds和Filters。security-group-id - String - （过滤条件）安全组ID。project-id - Integer - （过滤条件）项目ID。security-group-name - String - （过滤条件）安全组名称。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 其中 tag-key 请使用具体的标签键进行替换。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
  /** 排序字段。支持：`CreatedTime` `UpdateTime`。注意：该字段没有默认值。 */
  OrderField?: string;
  /** 排序方法。升序：`ASC`，倒序：`DESC`。默认值：`ASC` */
  OrderDirection?: string;
}

declare interface DescribeSecurityGroupsResponse {
  /** 安全组对象。 */
  SecurityGroupSet?: SecurityGroup[];
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceTemplateGroupsRequest {
  /** 过滤条件。service-template-group-name - String - （过滤条件）协议端口模板集合名称。service-template-group-id - String - （过滤条件）协议端口模板集合实例ID，例如：ppmg-e6dy460g。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
  /** 是否获取协议端口模板成员标识。 */
  NeedMemberInfo?: boolean;
}

declare interface DescribeServiceTemplateGroupsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 协议端口模板集合。 */
  ServiceTemplateGroupSet?: ServiceTemplateGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeServiceTemplatesRequest {
  /** 过滤条件。service-template-name - 协议端口模板名称。service-template-id - 协议端口模板实例ID，例如：ppm-e6dy460g。service-port- 协议端口。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
  /** 是否获取协议端口成员标识。 */
  NeedMemberInfo?: boolean;
}

declare interface DescribeServiceTemplatesResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 协议端口模板对象。 */
  ServiceTemplateSet?: ServiceTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSgSnapshotFileContentRequest {
  /** 快照策略Id。 */
  SnapshotPolicyId: string;
  /** 快照文件Id。 */
  SnapshotFileId: string;
  /** 安全组Id。 */
  SecurityGroupId: string;
}

declare interface DescribeSgSnapshotFileContentResponse {
  /** 实例Id，即安全组Id。 */
  InstanceId: string;
  /** 快照策略Id。 */
  SnapshotPolicyId: string;
  /** 快照文件Id。 */
  SnapshotFileId: string;
  /** 备份时间。 */
  BackupTime: string;
  /** 操作者。 */
  Operator: string;
  /** 原始数据。 */
  OriginalData: SecurityGroupPolicy[];
  /** 备份数据。 */
  BackupData: SecurityGroupPolicy[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotAttachedInstancesRequest {
  /** 快照策略Id。 */
  SnapshotPolicyId: string;
  /** 过滤条件。支持的过滤条件如下：instance-id：实例ID。instance-region：实例所在地域。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大为200。 */
  Limit?: number;
}

declare interface DescribeSnapshotAttachedInstancesResponse {
  /** 实例列表 */
  InstanceSet: SnapshotInstance[];
  /** 符合条件的对象数。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotFilesRequest {
  /** 业务类型，目前支持安全组：securitygroup。 */
  BusinessType: string;
  /** 业务实例Id，和BusinessType对应。 */
  InstanceId: string;
  /** 开始日期，格式%Y-%m-%d %H:%M:%S。 */
  StartDate: string;
  /** 结束日期，格式%Y-%m-%d %H:%M:%S。 */
  EndDate: string;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大为100。 */
  Limit?: number;
}

declare interface DescribeSnapshotFilesResponse {
  /** 快照文件集合。 */
  SnapshotFileSet?: SnapshotFileInfo[];
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotPoliciesRequest {
  /** 快照策略Id。 */
  SnapshotPolicyIds?: string[];
  /** 过滤条件，参数不支持同时指定SnapshotPolicyIds和Filters。snapshot-policy-id - String -（过滤条件）快照策略ID。snapshot-policy-name - String -（过滤条件）快照策略名称。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大为200。 */
  Limit?: number;
}

declare interface DescribeSnapshotPoliciesResponse {
  /** 快照策略。 */
  SnapshotPolicySet?: SnapshotPolicy[];
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSpecificTrafficPackageUsedDetailsRequest {
  /** 共享流量包唯一ID */
  TrafficPackageId: string;
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。详细的过滤条件如下： resource-id - String - 是否必填：否 - （过滤条件）按照抵扣流量资源的唯一 ID 过滤。 resource-type - String - 是否必填：否 - （过滤条件）按照资源类型过滤，资源类型包括 CVM 和 EIP */
  Filters?: Filter[];
  /** 排序条件。该参数仅支持根据抵扣量排序，传值为 deduction */
  OrderField?: string;
  /** 排序类型，仅支持0和1，0-降序，1-升序。不传默认为0 */
  OrderType?: number;
  /** 开始时间。不传默认为当前时间往前推30天 */
  StartTime?: string;
  /** 结束时间。不传默认为当前时间 */
  EndTime?: string;
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 中的相关小节 */
  Offset?: number;
  /** 返回数量，默认为20。关于Limit的更进一步介绍请参考 API 中的相关小节。 */
  Limit?: number;
}

declare interface DescribeSpecificTrafficPackageUsedDetailsResponse {
  /** 符合查询条件的共享流量包用量明细的总数 */
  TotalCount?: number;
  /** 共享流量包用量明细列表 */
  UsedDetailSet?: UsedDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubnetResourceDashboardRequest {
  /** Subnet实例ID，例如：subnet-f1xjkw1b。 */
  SubnetIds: string[];
}

declare interface DescribeSubnetResourceDashboardResponse {
  /** 资源统计结果。 */
  ResourceStatisticsSet?: ResourceStatistics[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubnetsRequest {
  /** 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。 */
  SubnetIds?: string[];
  /** 过滤条件，参数不支持同时指定SubnetIds和Filters。subnet-id - String - （过滤条件）Subnet实例名称。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。cidr-block - String - （过滤条件）子网网段，形如: 192.168.1.0 。is-default - Boolean - （过滤条件）是否是默认子网。is-remote-vpc-snat - Boolean - （过滤条件）是否为VPC SNAT地址池子网。subnet-name - String - （过滤条件）子网名称。zone - String - （过滤条件）可用区。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例2。cdc-id - String - 是否必填：否 - （过滤条件）按照cdc信息进行过滤。过滤出来制定cdc下的子网。is-cdc-subnet - String - 是否必填：否 - （过滤条件）按照是否是cdc子网进行过滤。取值：“0”-非cdc子网，“1”--cdc子网ipv6-cidr-block - String - （过滤条件）IPv6子网网段，形如: 2402:4e00:1717:8700::/64 。isp-type - String - （过滤条件）运营商类型，形如: BGP 。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeSubnetsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 子网对象。 */
  SubnetSet?: Subnet[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTemplateLimitsRequest {
}

declare interface DescribeTemplateLimitsResponse {
  /** 参数模板配额对象。 */
  TemplateLimit?: TemplateLimit;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTenantCcnsRequest {
  /** 过滤条件，目前`value`值个数只支持一个，允许可支持的字段有：`ccn-ids` 云联网ID数组，值形如：`["ccn-12345678"]` `user-account-id` 用户账号ID，值形如：`["12345678"]``is-security-lock` 是否锁定，值形如：`["true"]` */
  Filters?: Filter[];
  /** 偏移量，默认0。 */
  Offset?: number;
  /** 单页返回数据量，可选值0到100之间的整数，默认20。 */
  Limit?: number;
}

declare interface DescribeTenantCcnsResponse {
  /** 云联网（CCN）对象。 */
  CcnSet?: CcnInstanceInfo[] | null;
  /** 符合条件的对象总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TotalCount?: number;
  /** 流量包信息 */
  TrafficPackageSet?: TrafficPackage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTrafficQosPolicyRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 本端地域。 */
  LocalRegion: string;
  /** 远端地域。 */
  RemoteRegion: string;
}

declare interface DescribeTrafficQosPolicyResponse {
  /** 流量调度规则。 */
  TrafficQosPolicySet?: TrafficQosPolicySet[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeUsedIpAddressRequest {
  /** VPC实例ID。 */
  VpcId: string;
  /** 子网实例ID。 */
  SubnetId?: string;
  /** 查询是否占用的ip列表，ip需要在vpc或子网内。最多允许一次查询100个IP。 */
  IpAddresses?: string[];
  /** 过滤条件，不支持同时指定IpAddresses和Filters参数。 支持的过滤条件如下： ip-addresses：IP地址。 resource-id：资源ID。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeUsedIpAddressResponse {
  /** 占用ip地址的资源信息 */
  IpAddressStates?: IpAddressStates[];
  /** 返回占用资源的个数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  EndPointSet?: EndPoint[];
  /** 符合查询条件的终端节点个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcEndPointServiceRequest {
  /** 过滤条件。不支持同时传入参数 EndPointServiceIds and Filters。 service-id - String - （过滤条件）终端节点服务唯一ID。service-name - String - （过滤条件）终端节点实例名称。service-instance-id - String - （过滤条件）后端服务的唯一ID，比如lb-xxx。service-type - String - （过滤条件）后端PAAS服务类型，CLB,CDB,CRS，不填默认查询类型为CLB。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 单页返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 终端节点服务ID。不支持同时传入参数 EndPointServiceIds and Filters。 */
  EndPointServiceIds?: string[];
  /** 不支持同时传入参数 Filters 。 列出授权给当前账号的终端节点服务信息。可以配合EndPointServiceIds参数进行过滤，哪些终端节点服务授权了该账户。 */
  IsListAuthorizedEndPointService?: boolean;
}

declare interface DescribeVpcEndPointServiceResponse {
  /** 终端节点服务对象数组。 */
  EndPointServiceSet?: EndPointService[];
  /** 符合查询条件的个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 白名单对象数组。已废弃 */
  VpcEndpointServiceUserSet?: VpcEndPointServiceUser[];
  /** 白名单对象数组。 */
  VpcEndPointServiceUserSet?: VpcEndPointServiceUser[];
  /** 符合条件的白名单个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcInstancesRequest {
  /** vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。instance-id - String - （过滤条件）云主机实例ID。instance-name - String - （过滤条件）云主机名称。 */
  Filters: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeVpcInstancesResponse {
  /** 云主机实例列表。 */
  InstanceSet?: CvmInstance[];
  /** 满足条件的云主机实例个数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcIpv6AddressesRequest {
  /** `VPC`实例`ID`，形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** `IP`地址列表，批量查询单次请求最多支持`10`个。 */
  Ipv6Addresses?: string[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** VPC下的子网ID。 */
  SubnetId?: string;
}

declare interface DescribeVpcIpv6AddressesResponse {
  /** `IPv6`地址列表。 */
  Ipv6AddressSet?: VpcIpv6Address[];
  /** `IPv6`地址总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcLimitsRequest {
  /** 配额名称。每次最大查询100个配额类型。 */
  LimitTypes: string[];
}

declare interface DescribeVpcLimitsResponse {
  /** 私有网络配额 */
  VpcLimitSet?: VpcLimit[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcPeeringConnectionsRequest {
  /** 对等连接唯一ID数组。 */
  PeeringConnectionIds?: string[];
  /** 过滤条件，参数不支持同时指定PeeringConnectionIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。state String - （过滤条件）对等连接状态，可选值有：PENDING，投放中；ACTIVE，使用中；EXPIRED，已过期；REJECTED，拒绝。peering-connection-name - String - （过滤条件）对等连接名称。 */
  Filters?: Filter[];
  /** 偏移量。 */
  Offset?: number;
  /** 请求对象个数。 */
  Limit?: number;
  /** 排序字段，可选值有：CreatedTime，PeeringConnectionName。 */
  OrderField?: string;
  /** 排序方式：DESC，降序；ASC，升序。 */
  OrderDirection?: string;
}

declare interface DescribeVpcPeeringConnectionsResponse {
  /** 满足条件的对等连接实例个数。 */
  TotalCount?: number;
  /** 对等连接实例列表。 */
  PeerConnectionSet?: PeerConnection[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  VpcPrivateIpAddressSet?: VpcPrivateIpAddress[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcResourceDashboardRequest {
  /** Vpc实例ID，例如：vpc-f1xjkw1b。 */
  VpcIds: string[];
}

declare interface DescribeVpcResourceDashboardResponse {
  /** 资源对象列表。 */
  ResourceDashboardSet?: ResourceDashboard[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcTaskResultRequest {
  /** 异步任务请求返回的RequestId。 */
  TaskId: string;
}

declare interface DescribeVpcTaskResultResponse {
  /** 异步任务执行结果。结果：SUCCESS、FAILED、RUNNING。3者其中之一。其中SUCCESS表示任务执行成功，FAILED表示任务执行失败，RUNNING表示任务执行中。 */
  Status?: string;
  /** 异步任务执行输出。 */
  Output?: string;
  /** 异步任务详细结果。只用于特殊场景，如批量删除弹性网卡时查询成功的网卡列表和失败的列表。 */
  Result?: VpcTaskResultDetailInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcsRequest {
  /** VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。 */
  VpcIds?: string[];
  /** 过滤条件，不支持同时指定VpcIds和Filters参数。支持的过滤条件如下：vpc-name：VPC实例名称，支持模糊查询。is-default ：是否默认VPC。vpc-id ：VPC实例ID，例如：vpc-f49l6u0z。cidr-block：VPC的CIDR。tag-key ：按照标签键进行过滤，非必填参数。tag:tag-key：按照标签键值对进行过滤，非必填参数。 其中 tag-key 请使用具体的标签键进行替换，可参考示例2。 **说明：**若同一个过滤条件（Filter）存在多个Values，则同一Filter下Values间的关系为逻辑或（OR）关系；若存在多个过滤条件（Filter），Filter之间的关系为逻辑与（AND）关系。ipv6-cidr-block - String - （过滤条件）IPv6子网网段，形如: 2402:4e00:1717:8700::/64 。isp-type - String - （过滤条件）运营商类型，形如: BGP 取值范围：'BGP'-默认, 'CMCC'-中国移动, 'CTCC'-中国电信, 'CUCC'-中国联通。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: string;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: string;
}

declare interface DescribeVpcsResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** VPC对象。 */
  VpcSet?: VpcInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewayCcnRoutesRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 偏移量。默认值：0 */
  Offset?: number;
  /** 返回数量。默认值：20 */
  Limit?: number;
}

declare interface DescribeVpnGatewayCcnRoutesResponse {
  /** 云联网路由（IDC网段）列表。 */
  RouteSet?: VpngwCcnRoutes[];
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewayRoutesRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 过滤条件, 条件包括(DestinationCidr, InstanceId,InstanceType)。 */
  Filters?: Filter[];
  /** 偏移量, 默认0。 */
  Offset?: number;
  /** 单页个数, 默认20, 最大值100。 */
  Limit?: number;
}

declare interface DescribeVpnGatewayRoutesResponse {
  /** VPN网关目的路由。 */
  Routes?: VpnGatewayRoute[];
  /** 路由条数。 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewaySslClientsRequest {
  /** 过滤条件，参数不支持同时指定SslVpnClientIds和Filters。vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。ssl-vpn-server-id - String - （过滤条件）SSL-VPN-SERVER实例ID形如：vpns-1j2w6xpx。ssl-vpn-client-id - String - （过滤条件）SSL-VPN-CLIENT实例ID形如：vpnc-3rlxp4nd。ssl-vpn-client-name - String - （过滤条件）SSL-VPN-CLIENT实例名称。 */
  Filters?: Filter[];
  /** 偏移量，默认值0。 */
  Offset?: number;
  /** 请求对象个数，默认值20。 */
  Limit?: number;
  /** SSL-VPN-CLIENT实例ID。形如：	vpns-1jww3xpx。每次请求的实例的上限为100。参数不支持同时指定SslVpnClientIds和Filters。 */
  SslVpnClientIds?: string[];
  /** VPN门户网站使用。默认是False。 */
  IsVpnPortal?: boolean;
}

declare interface DescribeVpnGatewaySslClientsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** SSL-VPN-CLIENT 实例列表。 */
  SslVpnClientSet?: SslVpnClient[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewaySslServersRequest {
  /** 偏移量。 */
  Offset?: number;
  /** 请求对象个数。 */
  Limit?: number;
  /** SSL-VPN-SERVER实例ID。形如：vpns-0p4rj60。每次请求的实例的上限为100。参数不支持同时指定SslVpnServerIds和Filters。 */
  SslVpnServerIds?: string[];
  /** 过滤条件，参数不支持同时指定SslVpnServerIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。vpn-gateway-id - String - （过滤条件）VPN实例ID，形如：vpngw-5aluhh9t。vpn-gateway-name - String - （过滤条件）VPN实例名称。ssl-vpn-server-name - String - （过滤条件）SSL-VPN-SERVER实例名称。ssl-vpn-server-id - String - （过滤条件）SSL-VPN-SERVER实例ID，形如：vpns-xxx。 */
  Filters?: FilterObject[];
  /** vpn门户使用。 默认Flase */
  IsVpnPortal?: boolean;
}

declare interface DescribeVpnGatewaySslServersResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** SSL-VPN-SERVER 实例详细信息列表。 */
  SslVpnSeverSet?: SslVpnSever[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpnGatewaysRequest {
  /** VPN网关实例ID。形如：vpngw-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpnGatewayIds和Filters。 */
  VpnGatewayIds?: string[];
  /** 过滤条件，参数不支持同时指定VpnGatewayIds和Filters。vpc-id - String - （过滤条件）VPC实例ID形如：vpc-f49l6u0z。vpn-gateway-id - String - （过滤条件）VPN实例ID形如：vpngw-5aluhh9t。vpn-gateway-name - String - （过滤条件）VPN实例名称。type - String - （过滤条件）VPN网关类型：'IPSEC', 'SSL', 'CCN', 'SSL_CCN'。public-ip-address- String - （过滤条件）公网IP。renew-flag - String - （过滤条件）网关续费类型，手动续费：'NOTIFY_AND_MANUAL_RENEW'、自动续费：'NOTIFY_AND_AUTO_RENEW'。zone - String - （过滤条件）VPN所在可用区，形如：ap-guangzhou-2。 */
  Filters?: FilterObject[];
  /** 偏移量，默认值为0。 */
  Offset?: number;
  /** 请求对象个数，默认值为20。 */
  Limit?: number;
}

declare interface DescribeVpnGatewaysResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** VPN网关实例详细信息列表。 */
  VpnGatewaySet?: VpnGateway[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachCcnInstancesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 要解关联网络实例列表 */
  Instances: CcnInstance[];
}

declare interface DetachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachClassicLinkVpcRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** CVM实例ID查询。形如：ins-r8hr2upy。 */
  InstanceIds: string[];
}

declare interface DetachClassicLinkVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** CVM实例ID。形如：ins-r8hr2upy。 */
  InstanceId: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
}

declare interface DetachNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachSnapshotInstancesRequest {
  /** 快照策略Id。 */
  SnapshotPolicyId: string;
  /** 实例信息。 */
  Instances: SnapshotInstance[];
}

declare interface DetachSnapshotInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableCcnRoutesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** CCN路由策略唯一ID。形如：ccnr-f49l6u0z。可通过DescribeCcnRoutes获取。 */
  RouteIds: string[];
}

declare interface DisableCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableFlowLogsRequest {
  /** 流日志Id。 */
  FlowLogIds: string[];
}

declare interface DisableFlowLogsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableGatewayFlowMonitorRequest {
  /** 网关实例ID，目前我们支持的网关实例类型有，专线网关实例ID，形如，`dcg-ltjahce6`；Nat网关实例ID，形如，`nat-ltjahce6`；VPN网关实例ID，形如，`vpn-ltjahce6`。 */
  GatewayId: string;
}

declare interface DisableGatewayFlowMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableSnapshotPoliciesRequest {
  /** 快照策略Id。 */
  SnapshotPolicyIds: string[];
}

declare interface DisableSnapshotPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableVpnGatewaySslClientCertRequest {
  /** SSL-VPN-CLIENT 实例ID。不可和SslVpnClientIds同时使用。 */
  SslVpnClientId?: string;
  /** SSL-VPN-CLIENT 实例ID列表。批量禁用时使用。不可和SslVpnClientId同时使用。 */
  SslVpnClientIds?: string[];
}

declare interface DisableVpnGatewaySslClientCertResponse {
  /** 异步任务实例ID。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateDhcpIpWithAddressIpRequest {
  /** `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。必须是已绑定`EIP`的`DhcpIp`。 */
  DhcpIpId: string;
}

declare interface DisassociateDhcpIpWithAddressIpResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateDirectConnectGatewayNatGatewayRequest {
  /** VPC实例ID。形如：vpc-xxx。 */
  VpcId: string;
  /** NAT网关ID。形如：nat-xxx */
  NatGatewayId: string;
  /** 专线网关ID。形如：dcg-xxx */
  DirectConnectGatewayId: string;
}

declare interface DisassociateDirectConnectGatewayNatGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateIPv6AddressRequest {
  /** 弹性公网IPv6唯一ID，EIPv6 唯一 ID 形如：eipv6-11112222。 */
  IPv6AddressId: string;
  /** 解绑时是否保持绑定弹性网卡。 */
  KeepBindWithEni?: boolean;
}

declare interface DisassociateIPv6AddressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateNatGatewayAddressRequest {
  /** NAT网关的ID，形如：`nat-df45454`。 */
  NatGatewayId: string;
  /** 待解绑NAT网关的弹性IP数组。 */
  PublicIpAddresses: string[];
}

declare interface DisassociateNatGatewayAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateNetworkAclSubnetsRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 子网实例ID数组。例如：[subnet-12345678]。 */
  SubnetIds: string[];
}

declare interface DisassociateNetworkAclSubnetsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateNetworkInterfaceSecurityGroupsRequest {
  /** 弹性网卡实例ID。形如：eni-pxir56ns。每次请求的实例的上限为100。 */
  NetworkInterfaceIds: string[];
  /** 安全组实例ID，例如：sg-33ocnj9n，可通过DescribeSecurityGroups获取。每次请求的实例的上限为100。 */
  SecurityGroupIds: string[];
}

declare interface DisassociateNetworkInterfaceSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateVpcEndPointSecurityGroupsRequest {
  /** 安全组ID数组。 */
  SecurityGroupIds: string[];
  /** 终端节点ID。 */
  EndPointId: string;
}

declare interface DisassociateVpcEndPointSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadCustomerGatewayConfigurationRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** VPN通道实例ID。形如：vpnx-f49l6u0z。 */
  VpnConnectionId: string;
  /** 对端网关厂商信息对象，可通过[DescribeCustomerGatewayVendors](https://cloud.tencent.com/document/api/215/17517)获取。 */
  CustomerGatewayVendor: CustomerGatewayVendor;
  /** 通道接入设备物理接口名称。 */
  InterfaceName: string;
}

declare interface DownloadCustomerGatewayConfigurationResponse {
  /** XML格式配置信息。 */
  CustomerGatewayConfiguration?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DownloadVpnGatewaySslClientCertRequest {
  /** SSL-VPN-CLIENT 实例ID。不可以和SslVpnClientIds同时使用。 */
  SslVpnClientId?: string;
  /** SAML Token（SAML令牌）。 */
  SamlToken?: string;
  /** VPN门户网站使用。默认False */
  IsVpnPortal?: boolean;
  /** SSL-VPN-CLIENT 实例ID列表。批量下载时使用。不可以和SslVpnClientId同时使用。 */
  SslVpnClientIds?: string[];
}

declare interface DownloadVpnGatewaySslClientCertResponse {
  /** SSL-VPN 客户端配置。 */
  SslClientConfigsSet?: string;
  /** SSL-VPN 客户端配置。 */
  SslClientConfig?: SslClientConfig[];
  /** 是否鉴权成功 只有传入SamlToken 才生效，1为成功，0为失败。 */
  Authenticated?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableCcnRoutesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** CCN路由策略唯一ID。形如：ccnr-f49l6u0z。可通过DescribeCcnRoutes接口获取。 */
  RouteIds: string[];
}

declare interface EnableCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableFlowLogsRequest {
  /** 流日志Id。 */
  FlowLogIds: string[];
}

declare interface EnableFlowLogsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableGatewayFlowMonitorRequest {
  /** 网关实例ID，目前我们支持的网关实例有，专线网关实例ID，形如，`dcg-ltjahce6`；Nat网关实例ID，形如，`nat-ltjahce6`；VPN网关实例ID，形如，`vpn-ltjahce6`。 */
  GatewayId: string;
}

declare interface EnableGatewayFlowMonitorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略ID。不能和RouteItemIds同时使用，但至少输入一个。单次处理上限100个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。 */
  RouteIds?: number[];
  /** 路由策略唯一ID。不能和RouteIds同时使用，但至少输入一个。单次处理上限100个。该参数取值可通过查询路由列表（[DescribeRouteTables](https://cloud.tencent.com/document/product/215/15763)）获取。 */
  RouteItemIds?: string[];
}

declare interface EnableRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableSnapshotPoliciesRequest {
  /** 快照策略Id。 */
  SnapshotPolicyIds: string[];
}

declare interface EnableSnapshotPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableVpcEndPointConnectRequest {
  /** 终端节点服务ID。 */
  EndPointServiceId: string;
  /** 终端节点ID。 */
  EndPointId: string[];
  /** 是否接受终端节点连接请求。 true：自动接受。 false：不自动接受。 */
  AcceptFlag: boolean;
}

declare interface EnableVpcEndPointConnectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableVpnGatewaySslClientCertRequest {
  /** SSL-VPN-CLIENT 实例ID。不可和SslVpnClientIds同时使用。 */
  SslVpnClientId?: string;
  /** SSL-VPN-CLIENT 实例ID列表。批量启用时使用。不可和SslVpnClientId同时使用。 */
  SslVpnClientIds?: string[];
}

declare interface EnableVpnGatewaySslClientCertResponse {
  /** 异步任务实例ID。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GenerateVpnConnectionDefaultHealthCheckIpRequest {
  /** VPN网关id， 例如：vpngw-1w9tue3d */
  VpnGatewayId: string;
}

declare interface GenerateVpnConnectionDefaultHealthCheckIpResponse {
  /** VPN通道健康检查本端ip */
  HealthCheckLocalIp?: string;
  /** VPN通道健康检查对端ip */
  HealthCheckRemoteIp?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface GetCcnRegionBandwidthLimitsRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 过滤条件。sregion - String - （过滤条件）源地域，形如：ap-guangzhou。dregion - String - （过滤条件）目的地域，形如：ap-shanghai-bm */
  Filters?: Filter[];
  /** 排序条件，目前支持带宽（`BandwidthLimit`）和过期时间（`ExpireTime`），默认按 `ExpireTime` 排序。 */
  SortedBy?: string;
  /** 偏移量。 */
  Offset?: number;
  /** 返回数量。 */
  Limit?: number;
  /** 排序方式，'ASC':升序,'DESC':降序。默认按'ASC'排序。 */
  OrderBy?: string;
}

declare interface GetCcnRegionBandwidthLimitsResponse {
  /** 云联网（CCN）各地域出带宽详情。 */
  CcnBandwidthSet?: CcnBandwidthInfo[] | null;
  /** 符合条件的对象数。 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface HaVipAssociateAddressIpRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。必须是没有绑定`EIP`的`HAVIP`。 */
  HaVipId: string;
  /** 弹性公网`IP`。必须是没有绑定`HAVIP`的`EIP`。 */
  AddressIp: string;
}

declare interface HaVipAssociateAddressIpResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface HaVipDisassociateAddressIpRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。必须是已绑定`EIP`的`HAVIP`。 */
  HaVipId: string;
}

declare interface HaVipDisassociateAddressIpResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceCreateDirectConnectGatewayRequest {
}

declare interface InquirePriceCreateDirectConnectGatewayResponse {
  /** 专线网关标准接入费用 */
  TotalCost?: number | null;
  /** 专线网关真实接入费用 */
  RealTotalCost?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceCreateVpnGatewayRequest {
  /** 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100, 200, 500, 1000, 3000；单位：Mbps。 */
  InternetMaxBandwidthOut: number;
  /** VPN网关计费模式，PREPAID：表示预付费，即包年包月，POSTPAID_BY_HOUR：表示后付费，即按量计费。默认：POSTPAID_BY_HOUR，如果指定预付费模式，参数InstanceChargePrepaid必填。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** SSL VPN连接数设置，可选规格：5, 10, 20, 50, 100, 200, 500, 1000；单位：个。 */
  MaxConnection?: number;
  /** 查询的VPN类型，支持IPSEC、SSL两种类型，为SSL类型时，MaxConnection参数必传。 */
  Type?: string;
}

declare interface InquiryPriceCreateVpnGatewayResponse {
  /** 商品价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 公网带宽设置。可选带宽规格：5, 10, 20, 50, 100, 200, 500, 1000；单位：Mbps。 */
  InternetMaxBandwidthOut: number;
}

declare interface InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse {
  /** 商品价格。仅支持未过期的预付费网关。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LockCcnBandwidthsRequest {
  /** 带宽实例的唯一ID数组。 */
  Instances: CcnFlowLock[];
}

declare interface LockCcnBandwidthsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface LockCcnsRequest {
}

declare interface LockCcnsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAddressAttributeRequest {
  /** 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：`eip-11112222`。 */
  AddressId: string;
  /** 修改后的 EIP 名称。长度上限为128个字符。 */
  AddressName?: string;
  /** 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。 */
  EipDirectConnection?: string;
}

declare interface ModifyAddressAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAddressInternetChargeTypeRequest {
  /** 弹性公网IP的唯一ID，形如eip-xxx */
  AddressId: string;
  /** 弹性公网IP调整目标计费模式，支持 "BANDWIDTH_PREPAID_BY_MONTH"、"TRAFFIC_POSTPAID_BY_HOUR"、"BANDWIDTH_POSTPAID_BY_HOUR" */
  InternetChargeType: string;
  /** 弹性公网IP调整目标带宽值 */
  InternetMaxBandwidthOut: number;
  /** 包月带宽网络计费模式参数。弹性公网IP的调整目标计费模式是"BANDWIDTH_PREPAID_BY_MONTH"时，必传该参数。 */
  AddressChargePrepaid?: AddressChargePrepaid;
}

declare interface ModifyAddressInternetChargeTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAddressesRenewFlagRequest {
  /** EIP唯一标识ID列表，形如'eip-xxxx' */
  AddressIds: string[];
  /** 自动续费标识。取值范围： NOTIFY_AND_AUTO_RENEW：通知过期且自动续费 NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费 DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费 若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 示例值：NOTIFY_AND_AUTO_RENEW */
  RenewFlag: string;
}

declare interface ModifyAddressesRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAssistantCidrRequest {
  /** `VPC`实例`ID`。形如：`vpc-6v2ht8q5`。 */
  VpcId: string;
  /** 待添加的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]，入参NewCidrBlocks和OldCidrBlocks至少需要其一。 */
  NewCidrBlocks?: string[];
  /** 待删除的辅助CIDR。CIDR数组，格式如["10.0.0.0/16", "172.16.0.0/16"]，入参NewCidrBlocks和OldCidrBlocks至少需要其一。 */
  OldCidrBlocks?: string[];
}

declare interface ModifyAssistantCidrResponse {
  /** 辅助CIDR数组。 */
  AssistantCidrSet?: AssistantCidr[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBandwidthPackageBandwidthRequest {
  /** 带宽包限速大小。单位：Mbps。 */
  InternetMaxBandwidth: number;
  /** 共享带宽包ID */
  BandwidthPackageId: string;
}

declare interface ModifyBandwidthPackageBandwidthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCcnAttachedInstancesAttributeRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 关联网络实例列表 */
  Instances: CcnInstance[];
}

declare interface ModifyCcnAttachedInstancesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCcnAttributeRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** CCN名称，最大长度不能超过60个字节，限制：CcnName和CcnDescription必须至少选择一个参数输入，否则报错。 */
  CcnName?: string;
  /** CCN描述信息，最大长度不能超过100个字节，限制：CcnName和CcnDescription必须至少选择一个参数输入，否则报错。 */
  CcnDescription?: string;
  /** 是否开启等价路由功能。`False` 不开启，`True` 开启。 */
  RouteECMPFlag?: boolean;
  /** 是否开启路由重叠功能。`False` 不开启，`True` 开启。 */
  RouteOverlapFlag?: boolean;
}

declare interface ModifyCcnAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCcnRegionBandwidthLimitsTypeRequest {
  /** 云联网实例ID。 */
  CcnId: string;
  /** 云联网限速类型，INTER_REGION_LIMIT：地域间限速，OUTER_REGION_LIMIT：地域出口限速。默认值：OUTER_REGION_LIMIT。 */
  BandwidthLimitType?: string;
}

declare interface ModifyCcnRegionBandwidthLimitsTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCcnRouteTablesRequest {
  /** 需要修改的路由表列表。 */
  RouteTableInfo: ModifyRouteTableInfo[];
}

declare interface ModifyCcnRouteTablesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCdcLDCXAttributeRequest {
}

declare interface ModifyCdcLDCXAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCdcNetPlaneAttributeRequest {
}

declare interface ModifyCdcNetPlaneAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyCustomerGatewayAttributeRequest {
  /** 对端网关ID，例如：cgw-2wqq41m9，可通过[DescribeCustomerGateways](https://cloud.tencent.com/document/api/215/17516)接口查询对端网关。 */
  CustomerGatewayId: string;
  /** 对端网关名称，可任意命名，但不得超过60个字符。 */
  CustomerGatewayName: string;
  /** BGP ASN。只有开启BGP白名单才可以修改此参数。 */
  BgpAsn?: number;
}

declare interface ModifyCustomerGatewayAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDhcpIpAttributeRequest {
  /** `DhcpIp`唯一`ID`，形如：`dhcpip-9o233uri`。 */
  DhcpIpId: string;
  /** `DhcpIp`名称，可任意命名，但不得超过60个字符。 */
  DhcpIpName: string;
}

declare interface ModifyDhcpIpAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFlowLogAttributeRequest {
  /** 流日志唯一ID。 */
  FlowLogId: string;
  /** 私用网络ID或者统一ID，建议使用统一ID，修改云联网流日志属性时可不填，其他流日志类型必填。 */
  VpcId?: string;
  /** 流日志实例名字。 */
  FlowLogName?: string;
  /** 流日志实例描述。 */
  FlowLogDescription?: string;
}

declare interface ModifyFlowLogAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHaVipAttributeRequest {
  /** `HAVIP`唯一`ID`，形如：`havip-9o233uri`。 */
  HaVipId: string;
  /** `HAVIP`名称，可任意命名，但不得超过60个字符。 */
  HaVipName?: string;
}

declare interface ModifyHaVipAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHighPriorityRouteAttributeRequest {
  /** 高优路由表唯一 ID。 */
  HighPriorityRouteTableId: string;
  /** 高优路由表条目修改属性。 */
  HighPriorityModifyItems: HighPriorityModifyItem[];
}

declare interface ModifyHighPriorityRouteAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHighPriorityRouteECMPAlgorithmRequest {
  /** 高优路由表实例唯一ID。 */
  HighPriorityRouteTableId: string;
  /** 高优路由表HASH策略。 */
  RouteECMPAlgorithms: RouteECMPAlgorithm[];
}

declare interface ModifyHighPriorityRouteECMPAlgorithmResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHighPriorityRouteTableAttributeRequest {
  /** 高优路由表表唯一ID */
  HighPriorityRouteTableId: string;
  /** 高优路由表表名称 */
  Name: string;
}

declare interface ModifyHighPriorityRouteTableAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIPv6AddressesAttributesRequest {
  /** 弹性公网IPv6唯一ID列表。 */
  IPv6AddressIds: string[];
  /** 弹性公网IPv6地址名称 */
  IPv6AddressName?: string;
}

declare interface ModifyIPv6AddressesAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIPv6AddressesBandwidthRequest {
  /** 弹性公网IPv6地址唯一ID */
  IPv6AddressIds: string[];
  /** 弹性公网IPv6地址网络带宽 */
  InternetMaxBandwidthOut: number;
}

declare interface ModifyIPv6AddressesBandwidthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIp6TranslatorRequest {
  /** IPV6转换实例唯一ID，形如ip6-xxxxxxxxx */
  Ip6TranslatorId: string;
  /** IPV6转换实例修改名称 */
  Ip6TranslatorName?: string;
}

declare interface ModifyIp6TranslatorResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIpv6AddressesAttributeRequest {
  /** 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。 */
  NetworkInterfaceId: string;
  /** 指定的内网IPv6地址信息。 */
  Ipv6Addresses: Ipv6Address[];
}

declare interface ModifyIpv6AddressesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLocalGatewayRequest {
  /** 本地网关名称。 */
  LocalGatewayName: string;
  /** CDC实例ID。 */
  CdcId: string;
  /** 本地网关实例ID。 */
  LocalGatewayId: string;
  /** VPC实例ID。 */
  VpcId?: string;
}

declare interface ModifyLocalGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNatGatewaySourceIpTranslationNatRuleRequest {
  /** NAT网关的ID，形如：`nat-df453454`。 */
  NatGatewayId: string;
  /** NAT网关的SNAT转换规则。 */
  SourceIpTranslationNatRule: SourceIpTranslationNatRule;
}

declare interface ModifyNatGatewaySourceIpTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetDetectRequest {
  /** 网络探测实例`ID`。形如：`netd-12345678` */
  NetDetectId: string;
  /** 网络探测名称，最大长度不能超过60个字节。 */
  NetDetectName?: string;
  /** 探测目的IPv4地址数组，最多两个。 */
  DetectDestinationIp?: string[];
  /** 下一跳类型，目前我们支持的类型有：VPN：VPN网关；DIRECTCONNECT：专线网关；PEERCONNECTION：对等连接；NAT：NAT网关；NORMAL_CVM：普通云服务器；CCN：云联网网关；NONEXTHOP：无下一跳； */
  NextHopType?: string;
  /** 下一跳目的网关，取值与“下一跳类型”相关：下一跳类型为VPN，取值VPN网关ID，形如：vpngw-12345678；下一跳类型为DIRECTCONNECT，取值专线网关ID，形如：dcg-12345678；下一跳类型为PEERCONNECTION，取值对等连接ID，形如：pcx-12345678；下一跳类型为NAT，取值Nat网关，形如：nat-12345678；下一跳类型为NORMAL_CVM，取值云服务器IPv4地址，形如：10.0.0.12；下一跳类型为CCN，取值云联网ID，形如：ccn-12345678；下一跳类型为NONEXTHOP，指定网络探测为无下一跳的网络探测； */
  NextHopDestination?: string;
  /** 网络探测描述。 */
  NetDetectDescription?: string;
}

declare interface ModifyNetDetectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetworkAclAttributeRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络ACL名称，最大长度不能超过60个字节。 */
  NetworkAclName: string;
}

declare interface ModifyNetworkAclAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetworkAclEntriesRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络ACL规则集。NetworkAclEntrySet和NetworkAclQuintupleSet只能输入一个。 */
  NetworkAclEntrySet?: NetworkAclEntrySet;
  /** 网络ACL五元组规则集。NetworkAclEntrySet和NetworkAclQuintupleSet只能输入一个。 */
  NetworkAclQuintupleSet?: NetworkAclQuintupleEntries;
  /** 三元组的增量更新。该接口的默认语义为全量覆盖。当需要实现增量更新语义时，设置该参数为True。 */
  EnableUpdateAclEntries?: boolean;
}

declare interface ModifyNetworkAclEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetworkAclQuintupleEntriesRequest {
  /** 网络ACL实例ID。例如：acl-12345678。 */
  NetworkAclId: string;
  /** 网络五元组ACL规则集。 */
  NetworkAclQuintupleSet: NetworkAclQuintupleEntries;
}

declare interface ModifyNetworkAclQuintupleEntriesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyNetworkInterfaceQosRequest {
  /** 弹性网卡ID，支持批量修改。 */
  NetworkInterfaceIds: string[];
  /** 服务质量，可选值：PT、AU、AG、DEFAULT，分别代表云金、云银、云铜、默认四个等级。 */
  QosLevel?: string;
  /** DirectSend端口范围最大值。 */
  DirectSendMaxPort?: number;
}

declare interface ModifyNetworkInterfaceQosResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateIpAddressesAttributeRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 指定的内网IP信息。 */
  PrivateIpAddresses: PrivateIpAddressSpecification[];
}

declare interface ModifyPrivateIpAddressesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateNatGatewayAttributeRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 私网网关名称，可任意命名，但不得超过60个字符。 */
  NatGatewayName: string;
}

declare interface ModifyPrivateNatGatewayAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 目的端口转换规则列表。 */
  LocalDestinationIpPortTranslationNatRules: DestinationIpPortTranslationNatRuleDiff[];
}

declare interface ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateNatGatewayTranslationAclRuleRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 转换规则目标，可选值"LOCAL"。 */
  TranslationDirection: string;
  /** 转换规则类型，可选值"NETWORK_LAYER","TRANSPORT_LAYER"。 */
  TranslationType: string;
  /** 转换`IP`,当转换规则类型为四层时为`IP`池 */
  TranslationIp: string;
  /** 访问控制列表，需要附带AclRuleId参数。 */
  TranslationAclRules: TranslationAclRule[];
  /** 源`IP`,当转换规则类型为三层时有效 */
  OriginalIp?: string;
}

declare interface ModifyPrivateNatGatewayTranslationAclRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateNatGatewayTranslationNatRuleRequest {
  /** 私网网关唯一`ID`，形如：`intranat-xxxxxxxx`。 */
  NatGatewayId: string;
  /** 转换规则对象数组。仅支持修改单个转换规则 */
  TranslationNatRules: TranslationNatRuleDiff[];
  /** 跨域参数，当VPC为跨域时填写为True。 */
  CrossDomain?: boolean;
}

declare interface ModifyPrivateNatGatewayTranslationNatRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyReserveIpAddressRequest {
  /** VPC唯一 ID。 */
  VpcId: string;
  /** 内网保留IP唯一ID。 */
  ReserveIpId: string;
  /** 内网保留 IP名称。 */
  Name?: string;
  /** 内网保留 IP描述。 */
  Description?: string;
}

declare interface ModifyReserveIpAddressResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRouteTableAttributeRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** 路由表名称。 */
  RouteTableName: string;
}

declare interface ModifyRouteTableAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRouteTableSelectionPoliciesRequest {
  /** 云联网ID。 */
  CcnId: string;
  /** 选择策略信息集合，表示需要按照当前的策略来修改。 */
  SelectionPolicies: CcnRouteTableSelectPolicy[];
}

declare interface ModifyRouteTableSelectionPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyServiceTemplateAttributeRequest {
  /** 协议端口模板实例ID，例如：ppm-529nwwj8。 */
  ServiceTemplateId: string;
  /** 协议端口模板名称。 */
  ServiceTemplateName?: string;
  /** 支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。协议后面的端口部分长度不能超过128个字符。 */
  Services?: string[];
  /** 支持添加备注的协议端口信息，支持单个端口、多个端口、连续端口及所有端口，协议支持：TCP、UDP、ICMP、GRE 协议。 */
  ServicesExtra?: ServicesInfo[];
}

declare interface ModifyServiceTemplateAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySnapshotPoliciesRequest {
  /** 快照策略修改信息。 */
  SnapshotPoliciesInfo: BatchModifySnapshotPolicy[];
}

declare interface ModifySnapshotPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpcAttributeRequest {
  /** VPC实例ID。形如：vpc-f49l6u0z。 */
  VpcId: string;
  /** 私有网络名称，可任意命名，但不得超过60个字符。 */
  VpcName?: string;
  /** 是否开启组播。true: 开启, false: 关闭。 */
  EnableMulticast?: string;
  /** DNS地址，最多支持4个，第1个默认为主，其余为备。 */
  DnsServers?: string[];
  /** 域名。 */
  DomainName?: string;
  /** 发布cdc 子网到云联网的开关。true: 发布, false: 不发布。 */
  EnableCdcPublish?: boolean;
}

declare interface ModifyVpcAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpcPeeringConnectionRequest {
  /** 对等连接ID。 */
  PeeringConnectionId: string;
  /** 对等连接名称。 */
  PeeringConnectionName?: string;
  /** 带宽上限，单位Mbps。 */
  Bandwidth?: number;
  /** 计费模式，日峰值POSTPAID_BY_DAY_MAX，月95 POSTPAID_BY_MONTH_95。 */
  ChargeType?: string;
}

declare interface ModifyVpcPeeringConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpnConnectionAttributeRequest {
  /** VPN通道实例ID。形如：vpnx-f49l6u0z。 */
  VpnConnectionId: string;
  /** VPN通道名称，可任意命名，但不得超过60个字符。 */
  VpnConnectionName?: string;
  /** 预共享密钥。 */
  PreShareKey?: string;
  /** SPD策略组，例如：{"10.0.0.5/24":["172.123.10.5/16"]}，10.0.0.5/24是vpc内网段，172.123.10.5/16是IDC网段。用户指定VPC内哪些网段可以和您IDC中哪些网段通信。 */
  SecurityPolicyDatabases?: SecurityPolicyDatabase[];
  /** IKE配置（Internet Key Exchange，因特网密钥交换），IKE具有一套自我保护机制，用户配置网络安全协议。 */
  IKEOptionsSpecification?: IKEOptionsSpecification;
  /** IPSec配置，腾讯云提供IPSec安全会话设置。 */
  IPSECOptionsSpecification?: IPSECOptionsSpecification;
  /** 是否启用通道健康检查，默认为False。 */
  EnableHealthCheck?: boolean;
  /** 本端通道探测IP。 */
  HealthCheckLocalIp?: string;
  /** 对端通道探测IP。 */
  HealthCheckRemoteIp?: string;
  /** 协商类型，默认为active（主动协商）。可选值：active（主动协商），passive（被动协商），flowTrigger（流量协商） */
  NegotiationType?: string;
  /** DPD探测开关。默认为0，表示关闭DPD探测。可选值：0（关闭），1（开启） */
  DpdEnable?: number;
  /** DPD超时时间。即探测确认对端不存在需要的时间。dpdEnable为1（开启）时有效。默认30，单位为秒 */
  DpdTimeout?: string;
  /** DPD超时后的动作。默认为clear。dpdEnable为1（开启）时有效。可取值为clear（断开）和restart（重试） */
  DpdAction?: string;
  /** 对端网关ID，4.0及以上网关下的通道支持更新。 */
  CustomerGatewayId?: string;
  /** 健康检查配置 */
  HealthCheckConfig?: HealthCheckConfig;
}

declare interface ModifyVpnConnectionAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpnGatewayAttributeRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** VPN网关名称，最大长度不能超过60个字节。 */
  VpnGatewayName?: string;
  /** VPN网关计费模式，目前只支持预付费（即包年包月）到后付费（即按量计费）的转换。即参数只支持：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** BGP ASN。ASN取值范围为1- 4294967295，默认值64551，其中139341、45090和58835不可用。 */
  BgpAsn?: number;
  /** 服务端最大连接数个数。 */
  MaxConnection?: number;
}

declare interface ModifyVpnGatewayAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpnGatewayCcnRoutesRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 云联网路由（IDC网段）列表。其中RouteId可通过[DescribeVpnGatewayCcnRoutes](https://cloud.tencent.com/document/product/215/43514)接口获取。 */
  Routes: VpngwCcnRoutes[];
}

declare interface ModifyVpnGatewayCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpnGatewayRoutesRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 路由修改参数。 */
  Routes: VpnGatewayRouteModify[];
}

declare interface ModifyVpnGatewayRoutesResponse {
  /** VPN路由信息 */
  Routes?: VpnGatewayRoute[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpnGatewaySslClientCertRequest {
  /** SSL-VPN-CLIENT 实例ID列表。 */
  SslVpnClientIds: string[];
}

declare interface ModifyVpnGatewaySslClientCertResponse {
  /** 异步任务ID。 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpnGatewaySslServerRequest {
  /** SSL-VPN SERVER 实例ID */
  SslVpnServerId: string;
  /** SSL-VPN SERVER NAME */
  SslVpnServerName?: string;
  /** 本端地址 */
  LocalAddress?: string[];
  /** 客户端地址 */
  RemoteAddress?: string;
  /** SSL VPN服务端监听协议。当前仅支持 UDP。默认UDP */
  SslVpnProtocol?: string;
  /** SSL VPN服务端监听协议端口。 */
  SslVpnPort?: number;
  /** 加密算法。可选 'AES-128-CBC', 'AES-192-CBC', 'AES-256-CBC', 'NONE'。默认NONE */
  EncryptAlgorithm?: string;
  /** 认证算法。可选 'SHA1', 'MD5', 'NONE'。默认NONE */
  IntegrityAlgorithm?: string;
  /** 是否支持压缩。当前不支持压缩。默认False。 */
  Compress?: boolean;
  /** 是否开启SSO认证。默认为False。该功能当前需要申请开白使用。 */
  SsoEnabled?: boolean;
  /** SAML-DATA */
  SamlData?: string;
}

declare interface ModifyVpnGatewaySslServerResponse {
  /** 异步任务TASKID */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface NotifyRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略唯一ID。 */
  RouteItemIds: string[];
}

declare interface NotifyRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RejectAttachCcnInstancesRequest {
  /** CCN实例ID。形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 拒绝关联实例列表。 */
  Instances: CcnInstance[];
}

declare interface RejectAttachCcnInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RejectVpcPeeringConnectionRequest {
  /** 对等连接唯一ID。 */
  PeeringConnectionId: string;
}

declare interface RejectVpcPeeringConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseAddressesRequest {
  /** 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：`eip-11112222`。 */
  AddressIds: string[];
}

declare interface ReleaseAddressesResponse {
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseIPv6AddressesRequest {
  /** IPv6地址唯一ID。 */
  IPv6AddressIds: string[];
}

declare interface ReleaseIPv6AddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveIp6RulesRequest {
  /** IPV6转换规则所属的转换实例唯一ID，形如ip6-xxxxxxxx */
  Ip6TranslatorId: string;
  /** 待删除IPV6转换规则，形如rule6-xxxxxxxx */
  Ip6RuleIds: string[];
}

declare interface RemoveIp6RulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewAddressesRequest {
  /** EIP唯一标识ID列表，形如'eip-xxxx' */
  AddressIds: string[];
  /** 续费参数 */
  AddressChargePrepaid: AddressChargePrepaid;
}

declare interface RenewAddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewVpnGatewayRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 预付费计费模式。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
}

declare interface RenewVpnGatewayResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceCcnRouteTableBroadcastPolicysRequest {
  /** 云联网ID */
  CcnId: string;
  /** 云联网路由表ID */
  RouteTableId: string;
  /** 新的路由传播策略 */
  Policys: CcnRouteTableBroadcastPolicy[];
}

declare interface ReplaceCcnRouteTableBroadcastPolicysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceCcnRouteTableInputPolicysRequest {
  /** 云联网ID。 */
  CcnId: string;
  /** 云联网路由表ID。 */
  RouteTableId: string;
  /** 新的路由接收策略。 */
  Policys: CcnRouteTableInputPolicy[];
}

declare interface ReplaceCcnRouteTableInputPolicysResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceDirectConnectGatewayCcnRoutesRequest {
  /** 专线网关ID，形如：dcg-prpqlmg1 */
  DirectConnectGatewayId: string;
  /** 需要连通的IDC网段列表 */
  Routes: DirectConnectGatewayCcnRoute[];
  /** 地址类型，支持：IPv4、IPv6。默认IPv4。 */
  AddressType?: string;
}

declare interface ReplaceDirectConnectGatewayCcnRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceHighPriorityRouteTableAssociationRequest {
  /** 高优路由表唯一 ID。 */
  HighPriorityRouteTableId: string;
  /** 子网唯一 ID */
  SubnetId: string;
}

declare interface ReplaceHighPriorityRouteTableAssociationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceHighPriorityRoutesRequest {
  /** 高优路由表唯一 ID。 */
  HighPriorityRouteTableId: string;
  /** 高优路由表条目信息。 */
  HighPriorityRoutes: HighPriorityRoute[];
}

declare interface ReplaceHighPriorityRoutesResponse {
  /** 新的高优路由表条目列表。 */
  NewHighPriorityRouteSet?: HighPriorityRoute[];
  /** 旧的高优路由表条目列表。 */
  OldHighPriorityRouteSet?: HighPriorityRoute[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceRouteTableAssociationRequest {
  /** 子网实例ID，例如：subnet-3x5lf5q0。可通过DescribeSubnets接口查询。 */
  SubnetId: string;
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
}

declare interface ReplaceRouteTableAssociationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  OldRouteSet?: Route[];
  /** 修改后的路由策略信息。 */
  NewRouteSet?: Route[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceSecurityGroupPoliciesRequest {
  /** 安全组实例ID，例如sg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组规则集合对象。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
  /** 旧的安全组规则集合对象，可选，日志记录用。 */
  OriginalSecurityGroupPolicySet?: SecurityGroupPolicySet;
}

declare interface ReplaceSecurityGroupPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetHighPriorityRoutesRequest {
  /** 高优路由表唯一 ID。 */
  HighPriorityRouteTableId: string;
  /** 高优路由表名称。 */
  Name: string;
  /** 高优路由表条目信息。 */
  HighPriorityRoutes: HighPriorityRoute[];
}

declare interface ResetHighPriorityRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetNatGatewayConnectionRequest {
  /** NAT网关ID。 */
  NatGatewayId: string;
  /** NAT网关并发连接上限，形如：1000000、3000000、10000000。 */
  MaxConcurrentConnection: number;
}

declare interface ResetNatGatewayConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetVpnConnectionRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** VPN通道实例ID。形如：vpnx-f49l6u0z。 */
  VpnConnectionId: string;
}

declare interface ResetVpnConnectionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetVpnGatewayInternetMaxBandwidthRequest {
  /** VPN网关实例ID。 */
  VpnGatewayId: string;
  /** 新规格公网带宽设置。可选带宽规格：5, 10, 20, 50, 100, 200, 500, 1000；单位：Mbps。VPN网关带宽目前仅支持部分带宽范围内升降配，如【5,100】Mbps和【200,1000】Mbps，在各自带宽范围内可提升配额，跨范围提升配额和降配暂不支持。 */
  InternetMaxBandwidthOut: number;
}

declare interface ResetVpnGatewayInternetMaxBandwidthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResumeSnapshotInstanceRequest {
  /** 快照策略Id。 */
  SnapshotPolicyId: string;
  /** 快照文件Id。 */
  SnapshotFileId: string;
  /** 实例Id。 */
  InstanceId: string;
}

declare interface ResumeSnapshotInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReturnNormalAddressesRequest {
  /** 普通公网IP 的 IP 地址,示例：101.35.139.183 */
  AddressIps?: string[];
}

declare interface ReturnNormalAddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetCcnRegionBandwidthLimitsRequest {
  /** CCN实例ID，形如：ccn-f49l6u0z。 */
  CcnId: string;
  /** 云联网（CCN）各地域出带宽上限。 */
  CcnRegionBandwidthLimits: CcnRegionBandwidthLimit[];
  /** 是否恢复云联网地域出口/地域间带宽限速为默认值（1Gbps）。false表示不恢复；true表示恢复。恢复默认值后，限速实例将不在控制台展示。该参数默认为 false，不恢复。 */
  SetDefaultLimitFlag?: boolean;
}

declare interface SetCcnRegionBandwidthLimitsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetVpnGatewaysRenewFlagRequest {
  /** VPNGW字符型ID列表。可通过[DescribeVpnGateways](https://cloud.tencent.com/document/api/215/17514)接口返回值VpnGatewaySet中的VpnGatewayId获取，只能选择包年包月的VPN实例。 */
  VpnGatewayIds: string[];
  /** 自动续费标记 [0, 1, 2]0表示默认状态(初始状态)， 1表示自动续费，2表示明确不自动续费。 */
  AutoRenewFlag: number;
  /** VPNGW类型['IPSEC', 'SSL']， 默认为IPSEC。 */
  Type?: string;
}

declare interface SetVpnGatewaysRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TransformAddressRequest {
  /** 待操作有普通公网 IP 的实例 ID。实例 ID 形如：`ins-11112222`。可通过登录[控制台](https://console.cloud.tencent.com/cvm)查询，也可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/9389) 接口返回值中的`InstanceId`获取。 */
  InstanceId: string;
}

declare interface TransformAddressResponse {
  /** 异步任务TaskId。可以使用[DescribeTaskResult](https://cloud.tencent.com/document/api/215/36271)接口查询任务状态。 */
  TaskId?: number;
  /** 转为弹性公网IP后的唯一ID */
  AddressId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnassignIpv6AddressesRequest {
  /** 弹性网卡实例`ID`，形如：`eni-m6dyj72l`。 */
  NetworkInterfaceId: string;
  /** 指定的`IPv6`地址列表，单次最多指定10个。 */
  Ipv6Addresses: Ipv6Address[];
}

declare interface UnassignIpv6AddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnassignIpv6CidrBlockRequest {
  /** `VPC`实例`ID`，形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** `IPv6`网段。形如：`3402:4e00:20:1000::/56`。 */
  Ipv6CidrBlock?: string;
}

declare interface UnassignIpv6CidrBlockResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnassignIpv6SubnetCidrBlockRequest {
  /** 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** `IPv6` 子网段列表。 */
  Ipv6SubnetCidrBlocks: Ipv6SubnetCidrBlock[];
}

declare interface UnassignIpv6SubnetCidrBlockResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
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
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnlockCcnBandwidthsRequest {
  /** 带宽实例对象数组。 */
  Instances: CcnFlowLock[];
}

declare interface UnlockCcnBandwidthsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnlockCcnsRequest {
}

declare interface UnlockCcnsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface WithdrawNotifyRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略唯一ID。 */
  RouteItemIds: string[];
}

declare interface WithdrawNotifyRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Vpc 私有网络} */
declare interface Vpc {
  (): Versions;
  /** 云联网接受关联实例 {@link AcceptAttachCcnInstancesRequest} {@link AcceptAttachCcnInstancesResponse} */
  AcceptAttachCcnInstances(data: AcceptAttachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AcceptAttachCcnInstancesResponse>;
  /** 接受对等连接 {@link AcceptVpcPeeringConnectionRequest} {@link AcceptVpcPeeringConnectionResponse} */
  AcceptVpcPeeringConnection(data: AcceptVpcPeeringConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<AcceptVpcPeeringConnectionResponse>;
  /** 添加带宽包资源 {@link AddBandwidthPackageResourcesRequest} {@link AddBandwidthPackageResourcesResponse} */
  AddBandwidthPackageResources(data: AddBandwidthPackageResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<AddBandwidthPackageResourcesResponse>;
  /** 添加IPV6转换规则 {@link AddIp6RulesRequest} {@link AddIp6RulesResponse} */
  AddIp6Rules(data: AddIp6RulesRequest, config?: AxiosRequestConfig): AxiosPromise<AddIp6RulesResponse>;
  /** 增加模板对象成员 {@link AddTemplateMemberRequest} {@link AddTemplateMemberResponse} */
  AddTemplateMember(data: AddTemplateMemberRequest, config?: AxiosRequestConfig): AxiosPromise<AddTemplateMemberResponse>;
  /** 更换公网IP {@link AdjustPublicAddressRequest} {@link AdjustPublicAddressResponse} */
  AdjustPublicAddress(data?: AdjustPublicAddressRequest, config?: AxiosRequestConfig): AxiosPromise<AdjustPublicAddressResponse>;
  /** 创建弹性公网IP {@link AllocateAddressesRequest} {@link AllocateAddressesResponse} */
  AllocateAddresses(data?: AllocateAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateAddressesResponse>;
  /** 创建弹性公网IPv6 {@link AllocateIPv6AddressesRequest} {@link AllocateIPv6AddressesResponse} */
  AllocateIPv6Addresses(data?: AllocateIPv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateIPv6AddressesResponse>;
  /** 开通IPv6公网带宽 {@link AllocateIp6AddressesBandwidthRequest} {@link AllocateIp6AddressesBandwidthResponse} */
  AllocateIp6AddressesBandwidth(data: AllocateIp6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateIp6AddressesBandwidthResponse>;
  /** 分配IPv6地址 {@link AssignIpv6AddressesRequest} {@link AssignIpv6AddressesResponse} */
  AssignIpv6Addresses(data: AssignIpv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6AddressesResponse>;
  /** 分配IPv6网段 {@link AssignIpv6CidrBlockRequest} {@link AssignIpv6CidrBlockResponse} */
  AssignIpv6CidrBlock(data: AssignIpv6CidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6CidrBlockResponse>;
  /** 分配IPv6子网段 {@link AssignIpv6SubnetCidrBlockRequest} {@link AssignIpv6SubnetCidrBlockResponse} */
  AssignIpv6SubnetCidrBlock(data: AssignIpv6SubnetCidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6SubnetCidrBlockResponse>;
  /** 弹性网卡申请内网 IP {@link AssignPrivateIpAddressesRequest} {@link AssignPrivateIpAddressesResponse} */
  AssignPrivateIpAddresses(data: AssignPrivateIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AssignPrivateIpAddressesResponse>;
  /** 绑定弹性公网IP {@link AssociateAddressRequest} {@link AssociateAddressResponse} */
  AssociateAddress(data: AssociateAddressRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateAddressResponse>;
  /** DhcpIp绑定EIP {@link AssociateDhcpIpWithAddressIpRequest} {@link AssociateDhcpIpWithAddressIpResponse} */
  AssociateDhcpIpWithAddressIp(data: AssociateDhcpIpWithAddressIpRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateDhcpIpWithAddressIpResponse>;
  /** 专线网关绑定NAT网关 {@link AssociateDirectConnectGatewayNatGatewayRequest} {@link AssociateDirectConnectGatewayNatGatewayResponse} */
  AssociateDirectConnectGatewayNatGateway(data: AssociateDirectConnectGatewayNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateDirectConnectGatewayNatGatewayResponse>;
  /** 绑定弹性公网IPv6 {@link AssociateIPv6AddressRequest} {@link AssociateIPv6AddressResponse} */
  AssociateIPv6Address(data: AssociateIPv6AddressRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateIPv6AddressResponse>;
  /** 关联云联网实例到指定的云联网路由表 {@link AssociateInstancesToCcnRouteTableRequest} {@link AssociateInstancesToCcnRouteTableResponse} */
  AssociateInstancesToCcnRouteTable(data: AssociateInstancesToCcnRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateInstancesToCcnRouteTableResponse>;
  /** NAT网关绑定弹性IP {@link AssociateNatGatewayAddressRequest} {@link AssociateNatGatewayAddressResponse} */
  AssociateNatGatewayAddress(data: AssociateNatGatewayAddressRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateNatGatewayAddressResponse>;
  /** 网络ACL关联子网 {@link AssociateNetworkAclSubnetsRequest} {@link AssociateNetworkAclSubnetsResponse} */
  AssociateNetworkAclSubnets(data: AssociateNetworkAclSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateNetworkAclSubnetsResponse>;
  /** 弹性网卡绑定安全组 {@link AssociateNetworkInterfaceSecurityGroupsRequest} {@link AssociateNetworkInterfaceSecurityGroupsResponse} */
  AssociateNetworkInterfaceSecurityGroups(data: AssociateNetworkInterfaceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateNetworkInterfaceSecurityGroupsResponse>;
  /** 云联网关联实例 {@link AttachCcnInstancesRequest} {@link AttachCcnInstancesResponse} */
  AttachCcnInstances(data: AttachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AttachCcnInstancesResponse>;
  /** 创建基础网络互通 {@link AttachClassicLinkVpcRequest} {@link AttachClassicLinkVpcResponse} */
  AttachClassicLinkVpc(data: AttachClassicLinkVpcRequest, config?: AxiosRequestConfig): AxiosPromise<AttachClassicLinkVpcResponse>;
  /** 弹性网卡绑定云服务器 {@link AttachNetworkInterfaceRequest} {@link AttachNetworkInterfaceResponse} */
  AttachNetworkInterface(data: AttachNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<AttachNetworkInterfaceResponse>;
  /** 快照策略关联实例 {@link AttachSnapshotInstancesRequest} {@link AttachSnapshotInstancesResponse} */
  AttachSnapshotInstances(data: AttachSnapshotInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<AttachSnapshotInstancesResponse>;
  /** 合规化审批 {@link AuditCrossBorderComplianceRequest} {@link AuditCrossBorderComplianceResponse} */
  AuditCrossBorderCompliance(data: AuditCrossBorderComplianceRequest, config?: AxiosRequestConfig): AxiosPromise<AuditCrossBorderComplianceResponse>;
  /** 检查辅助CIDR冲突 {@link CheckAssistantCidrRequest} {@link CheckAssistantCidrResponse} */
  CheckAssistantCidr(data: CheckAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<CheckAssistantCidrResponse>;
  /** 预判是否可建默认子网 {@link CheckDefaultSubnetRequest} {@link CheckDefaultSubnetResponse} */
  CheckDefaultSubnet(data?: CheckDefaultSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<CheckDefaultSubnetResponse>;
  /** 验证网络探测 {@link CheckNetDetectStateRequest} {@link CheckNetDetectStateResponse} */
  CheckNetDetectState(data: CheckNetDetectStateRequest, config?: AxiosRequestConfig): AxiosPromise<CheckNetDetectStateResponse>;
  /** 清空云联网路由表选择策略 {@link ClearRouteTableSelectionPoliciesRequest} {@link ClearRouteTableSelectionPoliciesResponse} */
  ClearRouteTableSelectionPolicies(data: ClearRouteTableSelectionPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ClearRouteTableSelectionPoliciesResponse>;
  /** 克隆安全组 {@link CloneSecurityGroupRequest} {@link CloneSecurityGroupResponse} */
  CloneSecurityGroup(data: CloneSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CloneSecurityGroupResponse>;
  /** 创建IP地址模板 {@link CreateAddressTemplateRequest} {@link CreateAddressTemplateResponse} */
  CreateAddressTemplate(data: CreateAddressTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAddressTemplateResponse>;
  /** 创建IP地址模板集合 {@link CreateAddressTemplateGroupRequest} {@link CreateAddressTemplateGroupResponse} */
  CreateAddressTemplateGroup(data: CreateAddressTemplateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAddressTemplateGroupResponse>;
  /** 创建弹性网卡并绑定云服务器 {@link CreateAndAttachNetworkInterfaceRequest} {@link CreateAndAttachNetworkInterfaceResponse} */
  CreateAndAttachNetworkInterface(data: CreateAndAttachNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAndAttachNetworkInterfaceResponse>;
  /** 创建辅助CIDR {@link CreateAssistantCidrRequest} {@link CreateAssistantCidrResponse} */
  CreateAssistantCidr(data: CreateAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<CreateAssistantCidrResponse>;
  /** 创建共享带宽包 {@link CreateBandwidthPackageRequest} {@link CreateBandwidthPackageResponse} */
  CreateBandwidthPackage(data?: CreateBandwidthPackageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBandwidthPackageResponse>;
  /** 创建CCN {@link CreateCcnRequest} {@link CreateCcnResponse} */
  CreateCcn(data: CreateCcnRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCcnResponse>;
  /** 新建云联网路由表 {@link CreateCcnRouteTablesRequest} {@link CreateCcnRouteTablesResponse} */
  CreateCcnRouteTables(data: CreateCcnRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCcnRouteTablesResponse>;
  /** 创建 IDC 通道 {@link CreateCdcLDCXListRequest} {@link CreateCdcLDCXListResponse} */
  CreateCdcLDCXList(data?: CreateCdcLDCXListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCdcLDCXListResponse>;
  /** 创建虚拟连接 {@link CreateCdcNetPlanesRequest} {@link CreateCdcNetPlanesResponse} */
  CreateCdcNetPlanes(data?: CreateCdcNetPlanesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCdcNetPlanesResponse>;
  /** 创建对端网关 {@link CreateCustomerGatewayRequest} {@link CreateCustomerGatewayResponse} */
  CreateCustomerGateway(data: CreateCustomerGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateCustomerGatewayResponse>;
  /** 创建默认安全组 {@link CreateDefaultSecurityGroupRequest} {@link CreateDefaultSecurityGroupResponse} */
  CreateDefaultSecurityGroup(data?: CreateDefaultSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDefaultSecurityGroupResponse>;
  /** 创建默认VPC和默认子网 {@link CreateDefaultVpcRequest} {@link CreateDefaultVpcResponse} */
  CreateDefaultVpc(data?: CreateDefaultVpcRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDefaultVpcResponse>;
  /** 创建DhcpIp {@link CreateDhcpIpRequest} {@link CreateDhcpIpResponse} */
  CreateDhcpIp(data: CreateDhcpIpRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDhcpIpResponse>;
  /** 创建专线网关 {@link CreateDirectConnectGatewayRequest} {@link CreateDirectConnectGatewayResponse} */
  CreateDirectConnectGateway(data: CreateDirectConnectGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDirectConnectGatewayResponse>;
  /** 创建专线网关云联网路由 {@link CreateDirectConnectGatewayCcnRoutesRequest} {@link CreateDirectConnectGatewayCcnRoutesResponse} */
  CreateDirectConnectGatewayCcnRoutes(data: CreateDirectConnectGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDirectConnectGatewayCcnRoutesResponse>;
  /** 创建流日志 {@link CreateFlowLogRequest} {@link CreateFlowLogResponse} */
  CreateFlowLog(data: CreateFlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFlowLogResponse>;
  /** 创建HAVIP {@link CreateHaVipRequest} {@link CreateHaVipResponse} */
  CreateHaVip(data: CreateHaVipRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHaVipResponse>;
  /** 创建高优路由表 {@link CreateHighPriorityRouteTableRequest} {@link CreateHighPriorityRouteTableResponse} */
  CreateHighPriorityRouteTable(data: CreateHighPriorityRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHighPriorityRouteTableResponse>;
  /** 创建高优路由表条目 {@link CreateHighPriorityRoutesRequest} {@link CreateHighPriorityRoutesResponse} */
  CreateHighPriorityRoutes(data: CreateHighPriorityRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHighPriorityRoutesResponse>;
  /** 创建IPV6转换IPV4实例 {@link CreateIp6TranslatorsRequest} {@link CreateIp6TranslatorsResponse} */
  CreateIp6Translators(data?: CreateIp6TranslatorsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateIp6TranslatorsResponse>;
  /** 创建本地网关 {@link CreateLocalGatewayRequest} {@link CreateLocalGatewayResponse} */
  CreateLocalGateway(data: CreateLocalGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLocalGatewayResponse>;
  /** 创建NAT网关 {@link CreateNatGatewayRequest} {@link CreateNatGatewayResponse} */
  CreateNatGateway(data: CreateNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatGatewayResponse>;
  /** 创建NAT网关端口转发规则 {@link CreateNatGatewayDestinationIpPortTranslationNatRuleRequest} {@link CreateNatGatewayDestinationIpPortTranslationNatRuleResponse} */
  CreateNatGatewayDestinationIpPortTranslationNatRule(data: CreateNatGatewayDestinationIpPortTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatGatewayDestinationIpPortTranslationNatRuleResponse>;
  /** 创建NAT网关SNAT规则 {@link CreateNatGatewaySourceIpTranslationNatRuleRequest} {@link CreateNatGatewaySourceIpTranslationNatRuleResponse} */
  CreateNatGatewaySourceIpTranslationNatRule(data: CreateNatGatewaySourceIpTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNatGatewaySourceIpTranslationNatRuleResponse>;
  /** 创建网络探测 {@link CreateNetDetectRequest} {@link CreateNetDetectResponse} */
  CreateNetDetect(data: CreateNetDetectRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetDetectResponse>;
  /** 创建网络ACL {@link CreateNetworkAclRequest} {@link CreateNetworkAclResponse} */
  CreateNetworkAcl(data: CreateNetworkAclRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkAclResponse>;
  /** 增量添加网络ACL三元组规则接口 {@link CreateNetworkAclEntriesRequest} {@link CreateNetworkAclEntriesResponse} */
  CreateNetworkAclEntries(data: CreateNetworkAclEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkAclEntriesResponse>;
  /** 增量添加网络ACL五元组规则接口 {@link CreateNetworkAclQuintupleEntriesRequest} {@link CreateNetworkAclQuintupleEntriesResponse} */
  CreateNetworkAclQuintupleEntries(data: CreateNetworkAclQuintupleEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkAclQuintupleEntriesResponse>;
  /** 创建弹性网卡 {@link CreateNetworkInterfaceRequest} {@link CreateNetworkInterfaceResponse} */
  CreateNetworkInterface(data: CreateNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkInterfaceResponse>;
  /** 创建私网NAT网关 {@link CreatePrivateNatGatewayRequest} {@link CreatePrivateNatGatewayResponse} */
  CreatePrivateNatGateway(data: CreatePrivateNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrivateNatGatewayResponse>;
  /** 创建私网NAT网关目的端口转换规则 {@link CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest} {@link CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse} */
  CreatePrivateNatGatewayDestinationIpPortTranslationNatRule(data: CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse>;
  /** 创建私网NAT网关源端转换访问控制规则 {@link CreatePrivateNatGatewayTranslationAclRuleRequest} {@link CreatePrivateNatGatewayTranslationAclRuleResponse} */
  CreatePrivateNatGatewayTranslationAclRule(data: CreatePrivateNatGatewayTranslationAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrivateNatGatewayTranslationAclRuleResponse>;
  /** 创建私网NAT网关源端转换规则 {@link CreatePrivateNatGatewayTranslationNatRuleRequest} {@link CreatePrivateNatGatewayTranslationNatRuleResponse} */
  CreatePrivateNatGatewayTranslationNatRule(data: CreatePrivateNatGatewayTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreatePrivateNatGatewayTranslationNatRuleResponse>;
  /** 创建保留内网IP {@link CreateReserveIpAddressesRequest} {@link CreateReserveIpAddressesResponse} */
  CreateReserveIpAddresses(data: CreateReserveIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateReserveIpAddressesResponse>;
  /** 创建路由表 {@link CreateRouteTableRequest} {@link CreateRouteTableResponse} */
  CreateRouteTable(data: CreateRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRouteTableResponse>;
  /** 创建路由策略 {@link CreateRoutesRequest} {@link CreateRoutesResponse} */
  CreateRoutes(data: CreateRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoutesResponse>;
  /** 创建安全组 {@link CreateSecurityGroupRequest} {@link CreateSecurityGroupResponse} */
  CreateSecurityGroup(data: CreateSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupResponse>;
  /** 安全组添加规则 {@link CreateSecurityGroupPoliciesRequest} {@link CreateSecurityGroupPoliciesResponse} */
  CreateSecurityGroupPolicies(data: CreateSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupPoliciesResponse>;
  /** 创建安全组和规则 {@link CreateSecurityGroupWithPoliciesRequest} {@link CreateSecurityGroupWithPoliciesResponse} */
  CreateSecurityGroupWithPolicies(data: CreateSecurityGroupWithPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupWithPoliciesResponse>;
  /** 创建协议端口模板 {@link CreateServiceTemplateRequest} {@link CreateServiceTemplateResponse} */
  CreateServiceTemplate(data: CreateServiceTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceTemplateResponse>;
  /** 创建协议端口模板集合 {@link CreateServiceTemplateGroupRequest} {@link CreateServiceTemplateGroupResponse} */
  CreateServiceTemplateGroup(data: CreateServiceTemplateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateServiceTemplateGroupResponse>;
  /** 创建快照策略 {@link CreateSnapshotPoliciesRequest} {@link CreateSnapshotPoliciesResponse} */
  CreateSnapshotPolicies(data: CreateSnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSnapshotPoliciesResponse>;
  /** 创建子网 {@link CreateSubnetRequest} {@link CreateSubnetResponse} */
  CreateSubnet(data: CreateSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubnetResponse>;
  /** 批量创建子网 {@link CreateSubnetsRequest} {@link CreateSubnetsResponse} */
  CreateSubnets(data: CreateSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubnetsResponse>;
  /** 创建共享流量包 {@link CreateTrafficPackagesRequest} {@link CreateTrafficPackagesResponse} */
  CreateTrafficPackages(data: CreateTrafficPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateTrafficPackagesResponse>;
  /** 创建VPC {@link CreateVpcRequest} {@link CreateVpcResponse} */
  CreateVpc(data: CreateVpcRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcResponse>;
  /** 创建终端节点 {@link CreateVpcEndPointRequest} {@link CreateVpcEndPointResponse} */
  CreateVpcEndPoint(data: CreateVpcEndPointRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcEndPointResponse>;
  /** 创建终端节点服务 {@link CreateVpcEndPointServiceRequest} {@link CreateVpcEndPointServiceResponse} */
  CreateVpcEndPointService(data: CreateVpcEndPointServiceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcEndPointServiceResponse>;
  /** 创建终端服务白名单 {@link CreateVpcEndPointServiceWhiteListRequest} {@link CreateVpcEndPointServiceWhiteListResponse} */
  CreateVpcEndPointServiceWhiteList(data: CreateVpcEndPointServiceWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcEndPointServiceWhiteListResponse>;
  /** 创建私有网络对等连接 {@link CreateVpcPeeringConnectionRequest} {@link CreateVpcPeeringConnectionResponse} */
  CreateVpcPeeringConnection(data: CreateVpcPeeringConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcPeeringConnectionResponse>;
  /** 创建VPN通道 {@link CreateVpnConnectionRequest} {@link CreateVpnConnectionResponse} */
  CreateVpnConnection(data: CreateVpnConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnConnectionResponse>;
  /** 创建VPN网关 {@link CreateVpnGatewayRequest} {@link CreateVpnGatewayResponse} */
  CreateVpnGateway(data: CreateVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnGatewayResponse>;
  /** 创建VPN网关路由 {@link CreateVpnGatewayRoutesRequest} {@link CreateVpnGatewayRoutesResponse} */
  CreateVpnGatewayRoutes(data: CreateVpnGatewayRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnGatewayRoutesResponse>;
  /** 创建SSL-VPN-CLIENT {@link CreateVpnGatewaySslClientRequest} {@link CreateVpnGatewaySslClientResponse} */
  CreateVpnGatewaySslClient(data: CreateVpnGatewaySslClientRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnGatewaySslClientResponse>;
  /** 创建SSL-VPN Server端 {@link CreateVpnGatewaySslServerRequest} {@link CreateVpnGatewaySslServerResponse} */
  CreateVpnGatewaySslServer(data: CreateVpnGatewaySslServerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpnGatewaySslServerResponse>;
  /** 删除IP地址模板 {@link DeleteAddressTemplateRequest} {@link DeleteAddressTemplateResponse} */
  DeleteAddressTemplate(data: DeleteAddressTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAddressTemplateResponse>;
  /** 删除IP地址模板集合 {@link DeleteAddressTemplateGroupRequest} {@link DeleteAddressTemplateGroupResponse} */
  DeleteAddressTemplateGroup(data: DeleteAddressTemplateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAddressTemplateGroupResponse>;
  /** 删除辅助CIDR {@link DeleteAssistantCidrRequest} {@link DeleteAssistantCidrResponse} */
  DeleteAssistantCidr(data: DeleteAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteAssistantCidrResponse>;
  /** 删除共享带宽包 {@link DeleteBandwidthPackageRequest} {@link DeleteBandwidthPackageResponse} */
  DeleteBandwidthPackage(data: DeleteBandwidthPackageRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBandwidthPackageResponse>;
  /** 删除CCN {@link DeleteCcnRequest} {@link DeleteCcnResponse} */
  DeleteCcn(data: DeleteCcnRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCcnResponse>;
  /** 删除云联网路由表 {@link DeleteCcnRouteTablesRequest} {@link DeleteCcnRouteTablesResponse} */
  DeleteCcnRouteTables(data: DeleteCcnRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCcnRouteTablesResponse>;
  /** 删除 IDC通道 {@link DeleteCdcLDCXListRequest} {@link DeleteCdcLDCXListResponse} */
  DeleteCdcLDCXList(data?: DeleteCdcLDCXListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCdcLDCXListResponse>;
  /** 删除虚拟连接 {@link DeleteCdcNetPlanesRequest} {@link DeleteCdcNetPlanesResponse} */
  DeleteCdcNetPlanes(data?: DeleteCdcNetPlanesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCdcNetPlanesResponse>;
  /** 删除对端网关 {@link DeleteCustomerGatewayRequest} {@link DeleteCustomerGatewayResponse} */
  DeleteCustomerGateway(data: DeleteCustomerGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteCustomerGatewayResponse>;
  /** 删除DhcpIp {@link DeleteDhcpIpRequest} {@link DeleteDhcpIpResponse} */
  DeleteDhcpIp(data: DeleteDhcpIpRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDhcpIpResponse>;
  /** 删除专线网关 {@link DeleteDirectConnectGatewayRequest} {@link DeleteDirectConnectGatewayResponse} */
  DeleteDirectConnectGateway(data: DeleteDirectConnectGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDirectConnectGatewayResponse>;
  /** 删除专线网关云联网路由 {@link DeleteDirectConnectGatewayCcnRoutesRequest} {@link DeleteDirectConnectGatewayCcnRoutesResponse} */
  DeleteDirectConnectGatewayCcnRoutes(data: DeleteDirectConnectGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDirectConnectGatewayCcnRoutesResponse>;
  /** 删除流日志 {@link DeleteFlowLogRequest} {@link DeleteFlowLogResponse} */
  DeleteFlowLog(data: DeleteFlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFlowLogResponse>;
  /** 删除HAVIP {@link DeleteHaVipRequest} {@link DeleteHaVipResponse} */
  DeleteHaVip(data: DeleteHaVipRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHaVipResponse>;
  /** 删除高优路由表 {@link DeleteHighPriorityRouteTablesRequest} {@link DeleteHighPriorityRouteTablesResponse} */
  DeleteHighPriorityRouteTables(data?: DeleteHighPriorityRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHighPriorityRouteTablesResponse>;
  /** 删除高优路由表条目 {@link DeleteHighPriorityRoutesRequest} {@link DeleteHighPriorityRoutesResponse} */
  DeleteHighPriorityRoutes(data: DeleteHighPriorityRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHighPriorityRoutesResponse>;
  /** 释放IPV6转换实例 {@link DeleteIp6TranslatorsRequest} {@link DeleteIp6TranslatorsResponse} */
  DeleteIp6Translators(data: DeleteIp6TranslatorsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteIp6TranslatorsResponse>;
  /** 删除本地网关 {@link DeleteLocalGatewayRequest} {@link DeleteLocalGatewayResponse} */
  DeleteLocalGateway(data: DeleteLocalGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLocalGatewayResponse>;
  /** 删除NAT网关 {@link DeleteNatGatewayRequest} {@link DeleteNatGatewayResponse} */
  DeleteNatGateway(data: DeleteNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatGatewayResponse>;
  /** 删除NAT网关端口转发规则 {@link DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest} {@link DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse} */
  DeleteNatGatewayDestinationIpPortTranslationNatRule(data: DeleteNatGatewayDestinationIpPortTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatGatewayDestinationIpPortTranslationNatRuleResponse>;
  /** 删除NAT网关的SNAT转发规则 {@link DeleteNatGatewaySourceIpTranslationNatRuleRequest} {@link DeleteNatGatewaySourceIpTranslationNatRuleResponse} */
  DeleteNatGatewaySourceIpTranslationNatRule(data: DeleteNatGatewaySourceIpTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNatGatewaySourceIpTranslationNatRuleResponse>;
  /** 删除网络探测 {@link DeleteNetDetectRequest} {@link DeleteNetDetectResponse} */
  DeleteNetDetect(data: DeleteNetDetectRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetDetectResponse>;
  /** 删除网络ACL {@link DeleteNetworkAclRequest} {@link DeleteNetworkAclResponse} */
  DeleteNetworkAcl(data: DeleteNetworkAclRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkAclResponse>;
  /** 删除ACL三元组单条规则 {@link DeleteNetworkAclEntriesRequest} {@link DeleteNetworkAclEntriesResponse} */
  DeleteNetworkAclEntries(data: DeleteNetworkAclEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkAclEntriesResponse>;
  /** 删除网络ACL五元组指定的部分条目接口。 {@link DeleteNetworkAclQuintupleEntriesRequest} {@link DeleteNetworkAclQuintupleEntriesResponse} */
  DeleteNetworkAclQuintupleEntries(data: DeleteNetworkAclQuintupleEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkAclQuintupleEntriesResponse>;
  /** 删除弹性网卡 {@link DeleteNetworkInterfaceRequest} {@link DeleteNetworkInterfaceResponse} */
  DeleteNetworkInterface(data: DeleteNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkInterfaceResponse>;
  /** 删除私网NAT网关 {@link DeletePrivateNatGatewayRequest} {@link DeletePrivateNatGatewayResponse} */
  DeletePrivateNatGateway(data: DeletePrivateNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivateNatGatewayResponse>;
  /** 删除私网NAT网关目的端口转换规则 {@link DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest} {@link DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse} */
  DeletePrivateNatGatewayDestinationIpPortTranslationNatRule(data: DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivateNatGatewayDestinationIpPortTranslationNatRuleResponse>;
  /** 删除私网NAT网关源端转换访问控制规则 {@link DeletePrivateNatGatewayTranslationAclRuleRequest} {@link DeletePrivateNatGatewayTranslationAclRuleResponse} */
  DeletePrivateNatGatewayTranslationAclRule(data: DeletePrivateNatGatewayTranslationAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivateNatGatewayTranslationAclRuleResponse>;
  /** 删除私网NAT网关源端转换规则 {@link DeletePrivateNatGatewayTranslationNatRuleRequest} {@link DeletePrivateNatGatewayTranslationNatRuleResponse} */
  DeletePrivateNatGatewayTranslationNatRule(data: DeletePrivateNatGatewayTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeletePrivateNatGatewayTranslationNatRuleResponse>;
  /** 删除内网保留IP {@link DeleteReserveIpAddressesRequest} {@link DeleteReserveIpAddressesResponse} */
  DeleteReserveIpAddresses(data: DeleteReserveIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteReserveIpAddressesResponse>;
  /** 删除路由表 {@link DeleteRouteTableRequest} {@link DeleteRouteTableResponse} */
  DeleteRouteTable(data: DeleteRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRouteTableResponse>;
  /** 删除路由策略 {@link DeleteRoutesRequest} {@link DeleteRoutesResponse} */
  DeleteRoutes(data: DeleteRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoutesResponse>;
  /** 删除安全组 {@link DeleteSecurityGroupRequest} {@link DeleteSecurityGroupResponse} */
  DeleteSecurityGroup(data: DeleteSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupResponse>;
  /** 删除安全组规则 {@link DeleteSecurityGroupPoliciesRequest} {@link DeleteSecurityGroupPoliciesResponse} */
  DeleteSecurityGroupPolicies(data: DeleteSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupPoliciesResponse>;
  /** 删除协议端口模板 {@link DeleteServiceTemplateRequest} {@link DeleteServiceTemplateResponse} */
  DeleteServiceTemplate(data: DeleteServiceTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceTemplateResponse>;
  /** 删除协议端口模板集合 {@link DeleteServiceTemplateGroupRequest} {@link DeleteServiceTemplateGroupResponse} */
  DeleteServiceTemplateGroup(data: DeleteServiceTemplateGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteServiceTemplateGroupResponse>;
  /** 删除快照策略 {@link DeleteSnapshotPoliciesRequest} {@link DeleteSnapshotPoliciesResponse} */
  DeleteSnapshotPolicies(data: DeleteSnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSnapshotPoliciesResponse>;
  /** 删除子网 {@link DeleteSubnetRequest} {@link DeleteSubnetResponse} */
  DeleteSubnet(data: DeleteSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSubnetResponse>;
  /** 删除模板对象成员 {@link DeleteTemplateMemberRequest} {@link DeleteTemplateMemberResponse} */
  DeleteTemplateMember(data: DeleteTemplateMemberRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTemplateMemberResponse>;
  /** 删除共享流量包 {@link DeleteTrafficPackagesRequest} {@link DeleteTrafficPackagesResponse} */
  DeleteTrafficPackages(data: DeleteTrafficPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteTrafficPackagesResponse>;
  /** 删除VPC {@link DeleteVpcRequest} {@link DeleteVpcResponse} */
  DeleteVpc(data: DeleteVpcRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcResponse>;
  /** 删除终端节点 {@link DeleteVpcEndPointRequest} {@link DeleteVpcEndPointResponse} */
  DeleteVpcEndPoint(data: DeleteVpcEndPointRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcEndPointResponse>;
  /** 删除终端节点服务 {@link DeleteVpcEndPointServiceRequest} {@link DeleteVpcEndPointServiceResponse} */
  DeleteVpcEndPointService(data: DeleteVpcEndPointServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcEndPointServiceResponse>;
  /** 删除终端节点服务白名单 {@link DeleteVpcEndPointServiceWhiteListRequest} {@link DeleteVpcEndPointServiceWhiteListResponse} */
  DeleteVpcEndPointServiceWhiteList(data: DeleteVpcEndPointServiceWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcEndPointServiceWhiteListResponse>;
  /** 删除私有网络对等连接 {@link DeleteVpcPeeringConnectionRequest} {@link DeleteVpcPeeringConnectionResponse} */
  DeleteVpcPeeringConnection(data: DeleteVpcPeeringConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcPeeringConnectionResponse>;
  /** 删除VPN通道 {@link DeleteVpnConnectionRequest} {@link DeleteVpnConnectionResponse} */
  DeleteVpnConnection(data: DeleteVpnConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnConnectionResponse>;
  /** 删除VPN网关 {@link DeleteVpnGatewayRequest} {@link DeleteVpnGatewayResponse} */
  DeleteVpnGateway(data: DeleteVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnGatewayResponse>;
  /** 删除VPN网关路由 {@link DeleteVpnGatewayRoutesRequest} {@link DeleteVpnGatewayRoutesResponse} */
  DeleteVpnGatewayRoutes(data: DeleteVpnGatewayRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnGatewayRoutesResponse>;
  /** 删除SSL-VPN-CLIENT {@link DeleteVpnGatewaySslClientRequest} {@link DeleteVpnGatewaySslClientResponse} */
  DeleteVpnGatewaySslClient(data?: DeleteVpnGatewaySslClientRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnGatewaySslClientResponse>;
  /** 删除SSL-VPN-SERVER {@link DeleteVpnGatewaySslServerRequest} {@link DeleteVpnGatewaySslServerResponse} */
  DeleteVpnGatewaySslServer(data: DeleteVpnGatewaySslServerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpnGatewaySslServerResponse>;
  /** 查询账户属性 {@link DescribeAccountAttributesRequest} {@link DescribeAccountAttributesResponse} */
  DescribeAccountAttributes(data?: DescribeAccountAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountAttributesResponse>;
  /** 查询弹性公网IP配额 {@link DescribeAddressQuotaRequest} {@link DescribeAddressQuotaResponse} */
  DescribeAddressQuota(data?: DescribeAddressQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressQuotaResponse>;
  /** 查询IP地址模板集合 {@link DescribeAddressTemplateGroupsRequest} {@link DescribeAddressTemplateGroupsResponse} */
  DescribeAddressTemplateGroups(data?: DescribeAddressTemplateGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressTemplateGroupsResponse>;
  /** 查询IP地址模板 {@link DescribeAddressTemplatesRequest} {@link DescribeAddressTemplatesResponse} */
  DescribeAddressTemplates(data?: DescribeAddressTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressTemplatesResponse>;
  /** 查询弹性公网IP列表 {@link DescribeAddressesRequest} {@link DescribeAddressesResponse} */
  DescribeAddresses(data?: DescribeAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressesResponse>;
  /** 查询辅助CIDR列表 {@link DescribeAssistantCidrRequest} {@link DescribeAssistantCidrResponse} */
  DescribeAssistantCidr(data?: DescribeAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAssistantCidrResponse>;
  /** 查询后付费共享带宽包当前的用量 {@link DescribeBandwidthPackageBillUsageRequest} {@link DescribeBandwidthPackageBillUsageResponse} */
  DescribeBandwidthPackageBillUsage(data: DescribeBandwidthPackageBillUsageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBandwidthPackageBillUsageResponse>;
  /** 查询带宽包配额 {@link DescribeBandwidthPackageQuotaRequest} {@link DescribeBandwidthPackageQuotaResponse} */
  DescribeBandwidthPackageQuota(data?: DescribeBandwidthPackageQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBandwidthPackageQuotaResponse>;
  /** 查询共享带宽包内的资源 {@link DescribeBandwidthPackageResourcesRequest} {@link DescribeBandwidthPackageResourcesResponse} */
  DescribeBandwidthPackageResources(data: DescribeBandwidthPackageResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBandwidthPackageResourcesResponse>;
  /** 查询带宽包资源 {@link DescribeBandwidthPackagesRequest} {@link DescribeBandwidthPackagesResponse} */
  DescribeBandwidthPackages(data?: DescribeBandwidthPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBandwidthPackagesResponse>;
  /** 查询云联网关联实例列表 {@link DescribeCcnAttachedInstancesRequest} {@link DescribeCcnAttachedInstancesResponse} */
  DescribeCcnAttachedInstances(data?: DescribeCcnAttachedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnAttachedInstancesResponse>;
  /** 查询云联网各地域出带宽上限 {@link DescribeCcnRegionBandwidthLimitsRequest} {@link DescribeCcnRegionBandwidthLimitsResponse} */
  DescribeCcnRegionBandwidthLimits(data: DescribeCcnRegionBandwidthLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnRegionBandwidthLimitsResponse>;
  /** 查询云联网路由传播策略 {@link DescribeCcnRouteTableBroadcastPolicysRequest} {@link DescribeCcnRouteTableBroadcastPolicysResponse} */
  DescribeCcnRouteTableBroadcastPolicys(data: DescribeCcnRouteTableBroadcastPolicysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnRouteTableBroadcastPolicysResponse>;
  /** 查询云联网路由接收策略 {@link DescribeCcnRouteTableInputPolicysRequest} {@link DescribeCcnRouteTableInputPolicysResponse} */
  DescribeCcnRouteTableInputPolicys(data: DescribeCcnRouteTableInputPolicysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnRouteTableInputPolicysResponse>;
  /** 查询云联网路由表信息 {@link DescribeCcnRouteTablesRequest} {@link DescribeCcnRouteTablesResponse} */
  DescribeCcnRouteTables(data?: DescribeCcnRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnRouteTablesResponse>;
  /** 查询云联网路由条目 {@link DescribeCcnRoutesRequest} {@link DescribeCcnRoutesResponse} */
  DescribeCcnRoutes(data: DescribeCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnRoutesResponse>;
  /** 查询CCN列表 {@link DescribeCcnsRequest} {@link DescribeCcnsResponse} */
  DescribeCcns(data?: DescribeCcnsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnsResponse>;
  /** 查询 IDC通道信息 {@link DescribeCdcLDCXListRequest} {@link DescribeCdcLDCXListResponse} */
  DescribeCdcLDCXList(data?: DescribeCdcLDCXListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCdcLDCXListResponse>;
  /** 查询虚拟连接 {@link DescribeCdcNetPlanesRequest} {@link DescribeCdcNetPlanesResponse} */
  DescribeCdcNetPlanes(data?: DescribeCdcNetPlanesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCdcNetPlanesResponse>;
  /** 查询IDC使用的 VLAN {@link DescribeCdcUsedIdcVlanRequest} {@link DescribeCdcUsedIdcVlanResponse} */
  DescribeCdcUsedIdcVlan(data?: DescribeCdcUsedIdcVlanRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCdcUsedIdcVlanResponse>;
  /** 查询基础网络互通列表 {@link DescribeClassicLinkInstancesRequest} {@link DescribeClassicLinkInstancesResponse} */
  DescribeClassicLinkInstances(data?: DescribeClassicLinkInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeClassicLinkInstancesResponse>;
  /** 查询云联网跨境限速实例 {@link DescribeCrossBorderCcnRegionBandwidthLimitsRequest} {@link DescribeCrossBorderCcnRegionBandwidthLimitsResponse} */
  DescribeCrossBorderCcnRegionBandwidthLimits(data?: DescribeCrossBorderCcnRegionBandwidthLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderCcnRegionBandwidthLimitsResponse>;
  /** 查询合规化审批单 {@link DescribeCrossBorderComplianceRequest} {@link DescribeCrossBorderComplianceResponse} */
  DescribeCrossBorderCompliance(data?: DescribeCrossBorderComplianceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderComplianceResponse>;
  /** 查询跨境带宽监控数据 {@link DescribeCrossBorderFlowMonitorRequest} {@link DescribeCrossBorderFlowMonitorResponse} */
  DescribeCrossBorderFlowMonitor(data: DescribeCrossBorderFlowMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCrossBorderFlowMonitorResponse>;
  /** 查询可支持的对端网关厂商信息 {@link DescribeCustomerGatewayVendorsRequest} {@link DescribeCustomerGatewayVendorsResponse} */
  DescribeCustomerGatewayVendors(data?: DescribeCustomerGatewayVendorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomerGatewayVendorsResponse>;
  /** 查询对端网关 {@link DescribeCustomerGatewaysRequest} {@link DescribeCustomerGatewaysResponse} */
  DescribeCustomerGateways(data?: DescribeCustomerGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomerGatewaysResponse>;
  /** 查询DhcpIp列表 {@link DescribeDhcpIpsRequest} {@link DescribeDhcpIpsResponse} */
  DescribeDhcpIps(data?: DescribeDhcpIpsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDhcpIpsResponse>;
  /** 查询专线网关云联网路由 {@link DescribeDirectConnectGatewayCcnRoutesRequest} {@link DescribeDirectConnectGatewayCcnRoutesResponse} */
  DescribeDirectConnectGatewayCcnRoutes(data: DescribeDirectConnectGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDirectConnectGatewayCcnRoutesResponse>;
  /** 查询专线网关 {@link DescribeDirectConnectGatewaysRequest} {@link DescribeDirectConnectGatewaysResponse} */
  DescribeDirectConnectGateways(data?: DescribeDirectConnectGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDirectConnectGatewaysResponse>;
  /** 查询流日志实例信息 {@link DescribeFlowLogRequest} {@link DescribeFlowLogResponse} */
  DescribeFlowLog(data: DescribeFlowLogRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowLogResponse>;
  /** 查询流日志集合 {@link DescribeFlowLogsRequest} {@link DescribeFlowLogsResponse} */
  DescribeFlowLogs(data?: DescribeFlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFlowLogsResponse>;
  /** 查询网关流量监控明细 {@link DescribeGatewayFlowMonitorDetailRequest} {@link DescribeGatewayFlowMonitorDetailResponse} */
  DescribeGatewayFlowMonitorDetail(data: DescribeGatewayFlowMonitorDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayFlowMonitorDetailResponse>;
  /** 查询网关来访IP流控带宽 {@link DescribeGatewayFlowQosRequest} {@link DescribeGatewayFlowQosResponse} */
  DescribeGatewayFlowQos(data: DescribeGatewayFlowQosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGatewayFlowQosResponse>;
  /** 查询HAVIP列表 {@link DescribeHaVipsRequest} {@link DescribeHaVipsResponse} */
  DescribeHaVips(data?: DescribeHaVipsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHaVipsResponse>;
  /** 查询高优路由表 {@link DescribeHighPriorityRouteTablesRequest} {@link DescribeHighPriorityRouteTablesResponse} */
  DescribeHighPriorityRouteTables(data?: DescribeHighPriorityRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHighPriorityRouteTablesResponse>;
  /** 查询高优路由表条目 {@link DescribeHighPriorityRoutesRequest} {@link DescribeHighPriorityRoutesResponse} */
  DescribeHighPriorityRoutes(data: DescribeHighPriorityRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHighPriorityRoutesResponse>;
  /** 查询弹性公网IPv6列表 {@link DescribeIPv6AddressesRequest} {@link DescribeIPv6AddressesResponse} */
  DescribeIPv6Addresses(data?: DescribeIPv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIPv6AddressesResponse>;
  /** 查询传统弹性公网IPv6列表 {@link DescribeIp6AddressesRequest} {@link DescribeIp6AddressesResponse} */
  DescribeIp6Addresses(data?: DescribeIp6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIp6AddressesResponse>;
  /** 查询账户在指定地域IPV6转换实例和规则的配额 {@link DescribeIp6TranslatorQuotaRequest} {@link DescribeIp6TranslatorQuotaResponse} */
  DescribeIp6TranslatorQuota(data?: DescribeIp6TranslatorQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIp6TranslatorQuotaResponse>;
  /** 查询IPV6转换实例及其绑定规则信息 {@link DescribeIp6TranslatorsRequest} {@link DescribeIp6TranslatorsResponse} */
  DescribeIp6Translators(data?: DescribeIp6TranslatorsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIp6TranslatorsResponse>;
  /** 获取IP地理位置库下载链接 {@link DescribeIpGeolocationDatabaseUrlRequest} {@link DescribeIpGeolocationDatabaseUrlResponse} */
  DescribeIpGeolocationDatabaseUrl(data: DescribeIpGeolocationDatabaseUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpGeolocationDatabaseUrlResponse>;
  /** 查询IP地理位置信息 {@link DescribeIpGeolocationInfosRequest} {@link DescribeIpGeolocationInfosResponse} */
  DescribeIpGeolocationInfos(data: DescribeIpGeolocationInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeIpGeolocationInfosResponse>;
  /** 查询本地网关 {@link DescribeLocalGatewayRequest} {@link DescribeLocalGatewayResponse} */
  DescribeLocalGateway(data?: DescribeLocalGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLocalGatewayResponse>;
  /** 查询NAT网关端口转发规则 {@link DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest} {@link DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse} */
  DescribeNatGatewayDestinationIpPortTranslationNatRules(data?: DescribeNatGatewayDestinationIpPortTranslationNatRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatGatewayDestinationIpPortTranslationNatRulesResponse>;
  /** 查询专线绑定NAT路由 {@link DescribeNatGatewayDirectConnectGatewayRouteRequest} {@link DescribeNatGatewayDirectConnectGatewayRouteResponse} */
  DescribeNatGatewayDirectConnectGatewayRoute(data: DescribeNatGatewayDirectConnectGatewayRouteRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatGatewayDirectConnectGatewayRouteResponse>;
  /** 查询NAT网关SNAT转发规则 {@link DescribeNatGatewaySourceIpTranslationNatRulesRequest} {@link DescribeNatGatewaySourceIpTranslationNatRulesResponse} */
  DescribeNatGatewaySourceIpTranslationNatRules(data: DescribeNatGatewaySourceIpTranslationNatRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatGatewaySourceIpTranslationNatRulesResponse>;
  /** 查询NAT网关 {@link DescribeNatGatewaysRequest} {@link DescribeNatGatewaysResponse} */
  DescribeNatGateways(data?: DescribeNatGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNatGatewaysResponse>;
  /** 查询网络探测验证结果列表 {@link DescribeNetDetectStatesRequest} {@link DescribeNetDetectStatesResponse} */
  DescribeNetDetectStates(data?: DescribeNetDetectStatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetDetectStatesResponse>;
  /** 查询网络探测列表 {@link DescribeNetDetectsRequest} {@link DescribeNetDetectsResponse} */
  DescribeNetDetects(data?: DescribeNetDetectsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetDetectsResponse>;
  /** 查询用户网络类型 {@link DescribeNetworkAccountTypeRequest} {@link DescribeNetworkAccountTypeResponse} */
  DescribeNetworkAccountType(data?: DescribeNetworkAccountTypeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkAccountTypeResponse>;
  /** 分页查询网络ACL五元组条目列表 {@link DescribeNetworkAclQuintupleEntriesRequest} {@link DescribeNetworkAclQuintupleEntriesResponse} */
  DescribeNetworkAclQuintupleEntries(data: DescribeNetworkAclQuintupleEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkAclQuintupleEntriesResponse>;
  /** 查询网络ACL列表 {@link DescribeNetworkAclsRequest} {@link DescribeNetworkAclsResponse} */
  DescribeNetworkAcls(data?: DescribeNetworkAclsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkAclsResponse>;
  /** 查询弹性网卡配额 {@link DescribeNetworkInterfaceLimitRequest} {@link DescribeNetworkInterfaceLimitResponse} */
  DescribeNetworkInterfaceLimit(data: DescribeNetworkInterfaceLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkInterfaceLimitResponse>;
  /** 查询弹性网卡列表 {@link DescribeNetworkInterfacesRequest} {@link DescribeNetworkInterfacesResponse} */
  DescribeNetworkInterfaces(data?: DescribeNetworkInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkInterfacesResponse>;
  /** 查询私网NAT网关目的端口转换规则 {@link DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesRequest} {@link DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesResponse} */
  DescribePrivateNatGatewayDestinationIpPortTranslationNatRules(data: DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateNatGatewayDestinationIpPortTranslationNatRulesResponse>;
  /** 查询可创建的私网NAT网关配额数量 {@link DescribePrivateNatGatewayLimitsRequest} {@link DescribePrivateNatGatewayLimitsResponse} */
  DescribePrivateNatGatewayLimits(data?: DescribePrivateNatGatewayLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateNatGatewayLimitsResponse>;
  /** 查询私网NAT网关可支持地域 {@link DescribePrivateNatGatewayRegionsRequest} {@link DescribePrivateNatGatewayRegionsResponse} */
  DescribePrivateNatGatewayRegions(data?: DescribePrivateNatGatewayRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateNatGatewayRegionsResponse>;
  /** 查询私网NAT网关源端转换访问控制规则 {@link DescribePrivateNatGatewayTranslationAclRulesRequest} {@link DescribePrivateNatGatewayTranslationAclRulesResponse} */
  DescribePrivateNatGatewayTranslationAclRules(data: DescribePrivateNatGatewayTranslationAclRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateNatGatewayTranslationAclRulesResponse>;
  /** 查询私网NAT网关源端转换规则 {@link DescribePrivateNatGatewayTranslationNatRulesRequest} {@link DescribePrivateNatGatewayTranslationNatRulesResponse} */
  DescribePrivateNatGatewayTranslationNatRules(data?: DescribePrivateNatGatewayTranslationNatRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateNatGatewayTranslationNatRulesResponse>;
  /** 查询私网NAT网关 {@link DescribePrivateNatGatewaysRequest} {@link DescribePrivateNatGatewaysResponse} */
  DescribePrivateNatGateways(data?: DescribePrivateNatGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePrivateNatGatewaysResponse>;
  /** 查询网络产品配额信息 {@link DescribeProductQuotaRequest} {@link DescribeProductQuotaResponse} */
  DescribeProductQuota(data: DescribeProductQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeProductQuotaResponse>;
  /** 查询内网保留IP {@link DescribeReserveIpAddressesRequest} {@link DescribeReserveIpAddressesResponse} */
  DescribeReserveIpAddresses(data?: DescribeReserveIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReserveIpAddressesResponse>;
  /** 查询路由策略冲突列表 {@link DescribeRouteConflictsRequest} {@link DescribeRouteConflictsResponse} */
  DescribeRouteConflicts(data: DescribeRouteConflictsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteConflictsResponse>;
  /** 查询实例绑定路由表信息 {@link DescribeRouteTableAssociatedInstancesRequest} {@link DescribeRouteTableAssociatedInstancesResponse} */
  DescribeRouteTableAssociatedInstances(data?: DescribeRouteTableAssociatedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteTableAssociatedInstancesResponse>;
  /** 查询云联网路由表选择策略信息 {@link DescribeRouteTableSelectionPoliciesRequest} {@link DescribeRouteTableSelectionPoliciesResponse} */
  DescribeRouteTableSelectionPolicies(data?: DescribeRouteTableSelectionPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteTableSelectionPoliciesResponse>;
  /** 查询路由表 {@link DescribeRouteTablesRequest} {@link DescribeRouteTablesResponse} */
  DescribeRouteTables(data?: DescribeRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteTablesResponse>;
  /** 查询路由列表 {@link DescribeRoutesRequest} {@link DescribeRoutesResponse} */
  DescribeRoutes(data?: DescribeRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRoutesResponse>;
  /** 查询安全组关联实例统计 {@link DescribeSecurityGroupAssociationStatisticsRequest} {@link DescribeSecurityGroupAssociationStatisticsResponse} */
  DescribeSecurityGroupAssociationStatistics(data: DescribeSecurityGroupAssociationStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupAssociationStatisticsResponse>;
  /** 查询用户安全组配额 {@link DescribeSecurityGroupLimitsRequest} {@link DescribeSecurityGroupLimitsResponse} */
  DescribeSecurityGroupLimits(data?: DescribeSecurityGroupLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupLimitsResponse>;
  /** 查询安全组规则 {@link DescribeSecurityGroupPoliciesRequest} {@link DescribeSecurityGroupPoliciesResponse} */
  DescribeSecurityGroupPolicies(data: DescribeSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupPoliciesResponse>;
  /** 查询安全组被引用信息 {@link DescribeSecurityGroupReferencesRequest} {@link DescribeSecurityGroupReferencesResponse} */
  DescribeSecurityGroupReferences(data: DescribeSecurityGroupReferencesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupReferencesResponse>;
  /** 查看安全组 {@link DescribeSecurityGroupsRequest} {@link DescribeSecurityGroupsResponse} */
  DescribeSecurityGroups(data?: DescribeSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupsResponse>;
  /** 查询协议端口模板集合 {@link DescribeServiceTemplateGroupsRequest} {@link DescribeServiceTemplateGroupsResponse} */
  DescribeServiceTemplateGroups(data?: DescribeServiceTemplateGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceTemplateGroupsResponse>;
  /** 查询协议端口模板 {@link DescribeServiceTemplatesRequest} {@link DescribeServiceTemplatesResponse} */
  DescribeServiceTemplates(data?: DescribeServiceTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeServiceTemplatesResponse>;
  /** 查询安全组快照文件内容 {@link DescribeSgSnapshotFileContentRequest} {@link DescribeSgSnapshotFileContentResponse} */
  DescribeSgSnapshotFileContent(data: DescribeSgSnapshotFileContentRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSgSnapshotFileContentResponse>;
  /** 查询快照策略关联实例列表 {@link DescribeSnapshotAttachedInstancesRequest} {@link DescribeSnapshotAttachedInstancesResponse} */
  DescribeSnapshotAttachedInstances(data: DescribeSnapshotAttachedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotAttachedInstancesResponse>;
  /** 查询快照文件 {@link DescribeSnapshotFilesRequest} {@link DescribeSnapshotFilesResponse} */
  DescribeSnapshotFiles(data: DescribeSnapshotFilesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotFilesResponse>;
  /** 查询快照策略 {@link DescribeSnapshotPoliciesRequest} {@link DescribeSnapshotPoliciesResponse} */
  DescribeSnapshotPolicies(data?: DescribeSnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotPoliciesResponse>;
  /** 查询指定共享流量包的用量明细 {@link DescribeSpecificTrafficPackageUsedDetailsRequest} {@link DescribeSpecificTrafficPackageUsedDetailsResponse} */
  DescribeSpecificTrafficPackageUsedDetails(data: DescribeSpecificTrafficPackageUsedDetailsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSpecificTrafficPackageUsedDetailsResponse>;
  /** 查看Subnet资源信息 {@link DescribeSubnetResourceDashboardRequest} {@link DescribeSubnetResourceDashboardResponse} */
  DescribeSubnetResourceDashboard(data: DescribeSubnetResourceDashboardRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetResourceDashboardResponse>;
  /** 查询子网列表 {@link DescribeSubnetsRequest} {@link DescribeSubnetsResponse} */
  DescribeSubnets(data?: DescribeSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetsResponse>;
  /** 查询异步任务执行结果 {@link DescribeTaskResultRequest} {@link DescribeTaskResultResponse} */
  DescribeTaskResult(data?: DescribeTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResultResponse>;
  /** 查询参数模板配额列表 {@link DescribeTemplateLimitsRequest} {@link DescribeTemplateLimitsResponse} */
  DescribeTemplateLimits(data?: DescribeTemplateLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTemplateLimitsResponse>;
  /** 查询租户云联网实例 {@link DescribeTenantCcnsRequest} {@link DescribeTenantCcnsResponse} */
  DescribeTenantCcns(data?: DescribeTenantCcnsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTenantCcnsResponse>;
  /** 查询共享流量包 {@link DescribeTrafficPackagesRequest} {@link DescribeTrafficPackagesResponse} */
  DescribeTrafficPackages(data?: DescribeTrafficPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrafficPackagesResponse>;
  /** 查询流量调度规则 {@link DescribeTrafficQosPolicyRequest} {@link DescribeTrafficQosPolicyResponse} */
  DescribeTrafficQosPolicy(data: DescribeTrafficQosPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTrafficQosPolicyResponse>;
  /** 查看子网或者vpc内IP使用情况 {@link DescribeUsedIpAddressRequest} {@link DescribeUsedIpAddressResponse} */
  DescribeUsedIpAddress(data: DescribeUsedIpAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeUsedIpAddressResponse>;
  /** 查询终端节点列表 {@link DescribeVpcEndPointRequest} {@link DescribeVpcEndPointResponse} */
  DescribeVpcEndPoint(data?: DescribeVpcEndPointRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcEndPointResponse>;
  /** 查询终端节点服务列表 {@link DescribeVpcEndPointServiceRequest} {@link DescribeVpcEndPointServiceResponse} */
  DescribeVpcEndPointService(data?: DescribeVpcEndPointServiceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcEndPointServiceResponse>;
  /** 查询终端节点服务的服务白名单列表 {@link DescribeVpcEndPointServiceWhiteListRequest} {@link DescribeVpcEndPointServiceWhiteListResponse} */
  DescribeVpcEndPointServiceWhiteList(data?: DescribeVpcEndPointServiceWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcEndPointServiceWhiteListResponse>;
  /** 查询VPC下的云主机实例列表 {@link DescribeVpcInstancesRequest} {@link DescribeVpcInstancesResponse} */
  DescribeVpcInstances(data: DescribeVpcInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcInstancesResponse>;
  /** 查询VPC内IPv6列表 {@link DescribeVpcIpv6AddressesRequest} {@link DescribeVpcIpv6AddressesResponse} */
  DescribeVpcIpv6Addresses(data: DescribeVpcIpv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcIpv6AddressesResponse>;
  /** 获取私有网络配额 {@link DescribeVpcLimitsRequest} {@link DescribeVpcLimitsResponse} */
  DescribeVpcLimits(data: DescribeVpcLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcLimitsResponse>;
  /** 查询私有网络对等连接 {@link DescribeVpcPeeringConnectionsRequest} {@link DescribeVpcPeeringConnectionsResponse} */
  DescribeVpcPeeringConnections(data?: DescribeVpcPeeringConnectionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcPeeringConnectionsResponse>;
  /** 查询VPC内网IP信息 {@link DescribeVpcPrivateIpAddressesRequest} {@link DescribeVpcPrivateIpAddressesResponse} */
  DescribeVpcPrivateIpAddresses(data: DescribeVpcPrivateIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcPrivateIpAddressesResponse>;
  /** 查看VPC资源信息 {@link DescribeVpcResourceDashboardRequest} {@link DescribeVpcResourceDashboardResponse} */
  DescribeVpcResourceDashboard(data: DescribeVpcResourceDashboardRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcResourceDashboardResponse>;
  /** 查询VPC异步任务执行结果 {@link DescribeVpcTaskResultRequest} {@link DescribeVpcTaskResultResponse} */
  DescribeVpcTaskResult(data: DescribeVpcTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcTaskResultResponse>;
  /** 查询VPC列表 {@link DescribeVpcsRequest} {@link DescribeVpcsResponse} */
  DescribeVpcs(data?: DescribeVpcsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcsResponse>;
  /** 查询VPN通道列表 {@link DescribeVpnConnectionsRequest} {@link DescribeVpnConnectionsResponse} */
  DescribeVpnConnections(data?: DescribeVpnConnectionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnConnectionsResponse>;
  /** 查询VPN网关云联网路由 {@link DescribeVpnGatewayCcnRoutesRequest} {@link DescribeVpnGatewayCcnRoutesResponse} */
  DescribeVpnGatewayCcnRoutes(data: DescribeVpnGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewayCcnRoutesResponse>;
  /** 查询VPN网关路由 {@link DescribeVpnGatewayRoutesRequest} {@link DescribeVpnGatewayRoutesResponse} */
  DescribeVpnGatewayRoutes(data: DescribeVpnGatewayRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewayRoutesResponse>;
  /** 查询SSL-VPN-CLIENT 列表 {@link DescribeVpnGatewaySslClientsRequest} {@link DescribeVpnGatewaySslClientsResponse} */
  DescribeVpnGatewaySslClients(data?: DescribeVpnGatewaySslClientsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewaySslClientsResponse>;
  /** 查询SSL-VPN SERVER 列表 {@link DescribeVpnGatewaySslServersRequest} {@link DescribeVpnGatewaySslServersResponse} */
  DescribeVpnGatewaySslServers(data?: DescribeVpnGatewaySslServersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewaySslServersResponse>;
  /** 查询VPN网关 {@link DescribeVpnGatewaysRequest} {@link DescribeVpnGatewaysResponse} */
  DescribeVpnGateways(data?: DescribeVpnGatewaysRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpnGatewaysResponse>;
  /** 云联网解关联实例 {@link DetachCcnInstancesRequest} {@link DetachCcnInstancesResponse} */
  DetachCcnInstances(data: DetachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DetachCcnInstancesResponse>;
  /** 删除基础网络互通 {@link DetachClassicLinkVpcRequest} {@link DetachClassicLinkVpcResponse} */
  DetachClassicLinkVpc(data: DetachClassicLinkVpcRequest, config?: AxiosRequestConfig): AxiosPromise<DetachClassicLinkVpcResponse>;
  /** 弹性网卡解绑云服务器 {@link DetachNetworkInterfaceRequest} {@link DetachNetworkInterfaceResponse} */
  DetachNetworkInterface(data: DetachNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<DetachNetworkInterfaceResponse>;
  /** 快照策略解关联实例 {@link DetachSnapshotInstancesRequest} {@link DetachSnapshotInstancesResponse} */
  DetachSnapshotInstances(data: DetachSnapshotInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DetachSnapshotInstancesResponse>;
  /** 禁用云联网路由 {@link DisableCcnRoutesRequest} {@link DisableCcnRoutesResponse} */
  DisableCcnRoutes(data: DisableCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DisableCcnRoutesResponse>;
  /** 停止流日志 {@link DisableFlowLogsRequest} {@link DisableFlowLogsResponse} */
  DisableFlowLogs(data: DisableFlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<DisableFlowLogsResponse>;
  /** 关闭网关流量监控 {@link DisableGatewayFlowMonitorRequest} {@link DisableGatewayFlowMonitorResponse} */
  DisableGatewayFlowMonitor(data: DisableGatewayFlowMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<DisableGatewayFlowMonitorResponse>;
  /** 禁用子网路由 {@link DisableRoutesRequest} {@link DisableRoutesResponse} */
  DisableRoutes(data: DisableRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DisableRoutesResponse>;
  /** 停用快照策略 {@link DisableSnapshotPoliciesRequest} {@link DisableSnapshotPoliciesResponse} */
  DisableSnapshotPolicies(data: DisableSnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DisableSnapshotPoliciesResponse>;
  /** 禁用SSL-VPN-CLIENT 证书 {@link DisableVpnGatewaySslClientCertRequest} {@link DisableVpnGatewaySslClientCertResponse} */
  DisableVpnGatewaySslClientCert(data?: DisableVpnGatewaySslClientCertRequest, config?: AxiosRequestConfig): AxiosPromise<DisableVpnGatewaySslClientCertResponse>;
  /** 解绑弹性公网IP {@link DisassociateAddressRequest} {@link DisassociateAddressResponse} */
  DisassociateAddress(data: DisassociateAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateAddressResponse>;
  /** DhcpIp解绑EIP {@link DisassociateDhcpIpWithAddressIpRequest} {@link DisassociateDhcpIpWithAddressIpResponse} */
  DisassociateDhcpIpWithAddressIp(data: DisassociateDhcpIpWithAddressIpRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateDhcpIpWithAddressIpResponse>;
  /** 专线网关解绑NAT网关 {@link DisassociateDirectConnectGatewayNatGatewayRequest} {@link DisassociateDirectConnectGatewayNatGatewayResponse} */
  DisassociateDirectConnectGatewayNatGateway(data: DisassociateDirectConnectGatewayNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateDirectConnectGatewayNatGatewayResponse>;
  /** 解绑弹性公网IPv6 {@link DisassociateIPv6AddressRequest} {@link DisassociateIPv6AddressResponse} */
  DisassociateIPv6Address(data: DisassociateIPv6AddressRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateIPv6AddressResponse>;
  /** NAT网关解绑弹性IP {@link DisassociateNatGatewayAddressRequest} {@link DisassociateNatGatewayAddressResponse} */
  DisassociateNatGatewayAddress(data: DisassociateNatGatewayAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateNatGatewayAddressResponse>;
  /** 网络ACL解关联子网 {@link DisassociateNetworkAclSubnetsRequest} {@link DisassociateNetworkAclSubnetsResponse} */
  DisassociateNetworkAclSubnets(data: DisassociateNetworkAclSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateNetworkAclSubnetsResponse>;
  /** 弹性网卡解绑安全组 {@link DisassociateNetworkInterfaceSecurityGroupsRequest} {@link DisassociateNetworkInterfaceSecurityGroupsResponse} */
  DisassociateNetworkInterfaceSecurityGroups(data: DisassociateNetworkInterfaceSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateNetworkInterfaceSecurityGroupsResponse>;
  /** 终端节点解绑安全组 {@link DisassociateVpcEndPointSecurityGroupsRequest} {@link DisassociateVpcEndPointSecurityGroupsResponse} */
  DisassociateVpcEndPointSecurityGroups(data: DisassociateVpcEndPointSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateVpcEndPointSecurityGroupsResponse>;
  /** 下载VPN通道配置 {@link DownloadCustomerGatewayConfigurationRequest} {@link DownloadCustomerGatewayConfigurationResponse} */
  DownloadCustomerGatewayConfiguration(data: DownloadCustomerGatewayConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadCustomerGatewayConfigurationResponse>;
  /** 下载SSL-VPN-CLIENT 客户端证书 {@link DownloadVpnGatewaySslClientCertRequest} {@link DownloadVpnGatewaySslClientCertResponse} */
  DownloadVpnGatewaySslClientCert(data?: DownloadVpnGatewaySslClientCertRequest, config?: AxiosRequestConfig): AxiosPromise<DownloadVpnGatewaySslClientCertResponse>;
  /** 启用云联网路由 {@link EnableCcnRoutesRequest} {@link EnableCcnRoutesResponse} */
  EnableCcnRoutes(data: EnableCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<EnableCcnRoutesResponse>;
  /** 启动流日志 {@link EnableFlowLogsRequest} {@link EnableFlowLogsResponse} */
  EnableFlowLogs(data: EnableFlowLogsRequest, config?: AxiosRequestConfig): AxiosPromise<EnableFlowLogsResponse>;
  /** 开启网关流量监控 {@link EnableGatewayFlowMonitorRequest} {@link EnableGatewayFlowMonitorResponse} */
  EnableGatewayFlowMonitor(data: EnableGatewayFlowMonitorRequest, config?: AxiosRequestConfig): AxiosPromise<EnableGatewayFlowMonitorResponse>;
  /** 启用子网路由 {@link EnableRoutesRequest} {@link EnableRoutesResponse} */
  EnableRoutes(data: EnableRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<EnableRoutesResponse>;
  /** 启用快照策略 {@link EnableSnapshotPoliciesRequest} {@link EnableSnapshotPoliciesResponse} */
  EnableSnapshotPolicies(data: EnableSnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<EnableSnapshotPoliciesResponse>;
  /** 是否接受终端节点连接请求 {@link EnableVpcEndPointConnectRequest} {@link EnableVpcEndPointConnectResponse} */
  EnableVpcEndPointConnect(data: EnableVpcEndPointConnectRequest, config?: AxiosRequestConfig): AxiosPromise<EnableVpcEndPointConnectResponse>;
  /** 启用SSL-VPN-CLIENT 证书 {@link EnableVpnGatewaySslClientCertRequest} {@link EnableVpnGatewaySslClientCertResponse} */
  EnableVpnGatewaySslClientCert(data?: EnableVpnGatewaySslClientCertRequest, config?: AxiosRequestConfig): AxiosPromise<EnableVpnGatewaySslClientCertResponse>;
  /** 获取一对VPN通道健康检查地址 {@link GenerateVpnConnectionDefaultHealthCheckIpRequest} {@link GenerateVpnConnectionDefaultHealthCheckIpResponse} */
  GenerateVpnConnectionDefaultHealthCheckIp(data: GenerateVpnConnectionDefaultHealthCheckIpRequest, config?: AxiosRequestConfig): AxiosPromise<GenerateVpnConnectionDefaultHealthCheckIpResponse>;
  /** 查询云联网相关地域带宽信息 {@link GetCcnRegionBandwidthLimitsRequest} {@link GetCcnRegionBandwidthLimitsResponse} */
  GetCcnRegionBandwidthLimits(data: GetCcnRegionBandwidthLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<GetCcnRegionBandwidthLimitsResponse>;
  /** HAVIP绑定EIP {@link HaVipAssociateAddressIpRequest} {@link HaVipAssociateAddressIpResponse} */
  HaVipAssociateAddressIp(data: HaVipAssociateAddressIpRequest, config?: AxiosRequestConfig): AxiosPromise<HaVipAssociateAddressIpResponse>;
  /** HAVIP解绑EIP {@link HaVipDisassociateAddressIpRequest} {@link HaVipDisassociateAddressIpResponse} */
  HaVipDisassociateAddressIp(data: HaVipDisassociateAddressIpRequest, config?: AxiosRequestConfig): AxiosPromise<HaVipDisassociateAddressIpResponse>;
  /** 创建专线网关询价 {@link InquirePriceCreateDirectConnectGatewayRequest} {@link InquirePriceCreateDirectConnectGatewayResponse} */
  InquirePriceCreateDirectConnectGateway(data?: InquirePriceCreateDirectConnectGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateDirectConnectGatewayResponse>;
  /** 创建VPN网关询价 {@link InquiryPriceCreateVpnGatewayRequest} {@link InquiryPriceCreateVpnGatewayResponse} */
  InquiryPriceCreateVpnGateway(data: InquiryPriceCreateVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceCreateVpnGatewayResponse>;
  /** 续费VPN网关询价 {@link InquiryPriceRenewVpnGatewayRequest} {@link InquiryPriceRenewVpnGatewayResponse} */
  InquiryPriceRenewVpnGateway(data: InquiryPriceRenewVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewVpnGatewayResponse>;
  /** 调整VPN网关带宽上限询价 {@link InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest} {@link InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse} */
  InquiryPriceResetVpnGatewayInternetMaxBandwidth(data: InquiryPriceResetVpnGatewayInternetMaxBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceResetVpnGatewayInternetMaxBandwidthResponse>;
  /** 安全锁定云联网带宽 {@link LockCcnBandwidthsRequest} {@link LockCcnBandwidthsResponse} */
  LockCcnBandwidths(data: LockCcnBandwidthsRequest, config?: AxiosRequestConfig): AxiosPromise<LockCcnBandwidthsResponse>;
  /** 安全锁定云联网实例 {@link LockCcnsRequest} {@link LockCcnsResponse} */
  LockCcns(data?: LockCcnsRequest, config?: AxiosRequestConfig): AxiosPromise<LockCcnsResponse>;
  /** 弹性网卡迁移 {@link MigrateNetworkInterfaceRequest} {@link MigrateNetworkInterfaceResponse} */
  MigrateNetworkInterface(data: MigrateNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<MigrateNetworkInterfaceResponse>;
  /** 弹性网卡内网IP迁移 {@link MigratePrivateIpAddressRequest} {@link MigratePrivateIpAddressResponse} */
  MigratePrivateIpAddress(data: MigratePrivateIpAddressRequest, config?: AxiosRequestConfig): AxiosPromise<MigratePrivateIpAddressResponse>;
  /** 修改弹性公网IP属性 {@link ModifyAddressAttributeRequest} {@link ModifyAddressAttributeResponse} */
  ModifyAddressAttribute(data: ModifyAddressAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressAttributeResponse>;
  /** 调整弹性公网ip计费模式 {@link ModifyAddressInternetChargeTypeRequest} {@link ModifyAddressInternetChargeTypeResponse} */
  ModifyAddressInternetChargeType(data: ModifyAddressInternetChargeTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressInternetChargeTypeResponse>;
  /** 修改IP地址模板 {@link ModifyAddressTemplateAttributeRequest} {@link ModifyAddressTemplateAttributeResponse} */
  ModifyAddressTemplateAttribute(data: ModifyAddressTemplateAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressTemplateAttributeResponse>;
  /** 修改IP地址模板集合 {@link ModifyAddressTemplateGroupAttributeRequest} {@link ModifyAddressTemplateGroupAttributeResponse} */
  ModifyAddressTemplateGroupAttribute(data: ModifyAddressTemplateGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressTemplateGroupAttributeResponse>;
  /** 调整弹性公网IP带宽 {@link ModifyAddressesBandwidthRequest} {@link ModifyAddressesBandwidthResponse} */
  ModifyAddressesBandwidth(data: ModifyAddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressesBandwidthResponse>;
  /** 调整包月IP续费标识 {@link ModifyAddressesRenewFlagRequest} {@link ModifyAddressesRenewFlagResponse} */
  ModifyAddressesRenewFlag(data: ModifyAddressesRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressesRenewFlagResponse>;
  /** 修改辅助CIDR {@link ModifyAssistantCidrRequest} {@link ModifyAssistantCidrResponse} */
  ModifyAssistantCidr(data: ModifyAssistantCidrRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAssistantCidrResponse>;
  /** 修改带宽包属性 {@link ModifyBandwidthPackageAttributeRequest} {@link ModifyBandwidthPackageAttributeResponse} */
  ModifyBandwidthPackageAttribute(data: ModifyBandwidthPackageAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBandwidthPackageAttributeResponse>;
  /** 调整共享带宽包带宽 {@link ModifyBandwidthPackageBandwidthRequest} {@link ModifyBandwidthPackageBandwidthResponse} */
  ModifyBandwidthPackageBandwidth(data: ModifyBandwidthPackageBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBandwidthPackageBandwidthResponse>;
  /** 修改CCN关联实例属性 {@link ModifyCcnAttachedInstancesAttributeRequest} {@link ModifyCcnAttachedInstancesAttributeResponse} */
  ModifyCcnAttachedInstancesAttribute(data: ModifyCcnAttachedInstancesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCcnAttachedInstancesAttributeResponse>;
  /** 修改CCN属性 {@link ModifyCcnAttributeRequest} {@link ModifyCcnAttributeResponse} */
  ModifyCcnAttribute(data: ModifyCcnAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCcnAttributeResponse>;
  /** 后付费产品修改带宽限速策略 {@link ModifyCcnRegionBandwidthLimitsTypeRequest} {@link ModifyCcnRegionBandwidthLimitsTypeResponse} */
  ModifyCcnRegionBandwidthLimitsType(data: ModifyCcnRegionBandwidthLimitsTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCcnRegionBandwidthLimitsTypeResponse>;
  /** 修改云联网路由表 {@link ModifyCcnRouteTablesRequest} {@link ModifyCcnRouteTablesResponse} */
  ModifyCcnRouteTables(data: ModifyCcnRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCcnRouteTablesResponse>;
  /** 修改 IDC通道信息 {@link ModifyCdcLDCXAttributeRequest} {@link ModifyCdcLDCXAttributeResponse} */
  ModifyCdcLDCXAttribute(data?: ModifyCdcLDCXAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCdcLDCXAttributeResponse>;
  /** 修改虚拟连接 {@link ModifyCdcNetPlaneAttributeRequest} {@link ModifyCdcNetPlaneAttributeResponse} */
  ModifyCdcNetPlaneAttribute(data?: ModifyCdcNetPlaneAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCdcNetPlaneAttributeResponse>;
  /** 修改对端网关 {@link ModifyCustomerGatewayAttributeRequest} {@link ModifyCustomerGatewayAttributeResponse} */
  ModifyCustomerGatewayAttribute(data: ModifyCustomerGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyCustomerGatewayAttributeResponse>;
  /** 修改DhcpIp属性 {@link ModifyDhcpIpAttributeRequest} {@link ModifyDhcpIpAttributeResponse} */
  ModifyDhcpIpAttribute(data: ModifyDhcpIpAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDhcpIpAttributeResponse>;
  /** 修改专线网关属性 {@link ModifyDirectConnectGatewayAttributeRequest} {@link ModifyDirectConnectGatewayAttributeResponse} */
  ModifyDirectConnectGatewayAttribute(data: ModifyDirectConnectGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDirectConnectGatewayAttributeResponse>;
  /** 修改流日志属性 {@link ModifyFlowLogAttributeRequest} {@link ModifyFlowLogAttributeResponse} */
  ModifyFlowLogAttribute(data: ModifyFlowLogAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFlowLogAttributeResponse>;
  /** 调整网关流控带宽 {@link ModifyGatewayFlowQosRequest} {@link ModifyGatewayFlowQosResponse} */
  ModifyGatewayFlowQos(data: ModifyGatewayFlowQosRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyGatewayFlowQosResponse>;
  /** 修改HAVIP属性 {@link ModifyHaVipAttributeRequest} {@link ModifyHaVipAttributeResponse} */
  ModifyHaVipAttribute(data: ModifyHaVipAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHaVipAttributeResponse>;
  /** 修改高优路由表条目属性 {@link ModifyHighPriorityRouteAttributeRequest} {@link ModifyHighPriorityRouteAttributeResponse} */
  ModifyHighPriorityRouteAttribute(data: ModifyHighPriorityRouteAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHighPriorityRouteAttributeResponse>;
  /** 修改高优路由ECMP的HASH算法 {@link ModifyHighPriorityRouteECMPAlgorithmRequest} {@link ModifyHighPriorityRouteECMPAlgorithmResponse} */
  ModifyHighPriorityRouteECMPAlgorithm(data: ModifyHighPriorityRouteECMPAlgorithmRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHighPriorityRouteECMPAlgorithmResponse>;
  /** 修改高优路由表属性 {@link ModifyHighPriorityRouteTableAttributeRequest} {@link ModifyHighPriorityRouteTableAttributeResponse} */
  ModifyHighPriorityRouteTableAttribute(data: ModifyHighPriorityRouteTableAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHighPriorityRouteTableAttributeResponse>;
  /** 修改弹性公网IPv6属性 {@link ModifyIPv6AddressesAttributesRequest} {@link ModifyIPv6AddressesAttributesResponse} */
  ModifyIPv6AddressesAttributes(data: ModifyIPv6AddressesAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIPv6AddressesAttributesResponse>;
  /** 调整弹性公网IPv6带宽 {@link ModifyIPv6AddressesBandwidthRequest} {@link ModifyIPv6AddressesBandwidthResponse} */
  ModifyIPv6AddressesBandwidth(data: ModifyIPv6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIPv6AddressesBandwidthResponse>;
  /** 调整传统弹性公网IPv6带宽 {@link ModifyIp6AddressesBandwidthRequest} {@link ModifyIp6AddressesBandwidthResponse} */
  ModifyIp6AddressesBandwidth(data: ModifyIp6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIp6AddressesBandwidthResponse>;
  /** 修改IPV6转换规则属性 {@link ModifyIp6RuleRequest} {@link ModifyIp6RuleResponse} */
  ModifyIp6Rule(data: ModifyIp6RuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIp6RuleResponse>;
  /** 修改IP6转换实例属性 {@link ModifyIp6TranslatorRequest} {@link ModifyIp6TranslatorResponse} */
  ModifyIp6Translator(data: ModifyIp6TranslatorRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIp6TranslatorResponse>;
  /** 修改弹性网卡IPv6地址属性 {@link ModifyIpv6AddressesAttributeRequest} {@link ModifyIpv6AddressesAttributeResponse} */
  ModifyIpv6AddressesAttribute(data: ModifyIpv6AddressesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIpv6AddressesAttributeResponse>;
  /** 修改本地网关 {@link ModifyLocalGatewayRequest} {@link ModifyLocalGatewayResponse} */
  ModifyLocalGateway(data: ModifyLocalGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLocalGatewayResponse>;
  /** 修改NAT网关的属性 {@link ModifyNatGatewayAttributeRequest} {@link ModifyNatGatewayAttributeResponse} */
  ModifyNatGatewayAttribute(data: ModifyNatGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatGatewayAttributeResponse>;
  /** 修改NAT网关端口转发规则 {@link ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest} {@link ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse} */
  ModifyNatGatewayDestinationIpPortTranslationNatRule(data: ModifyNatGatewayDestinationIpPortTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatGatewayDestinationIpPortTranslationNatRuleResponse>;
  /** 修改NAT网关SNAT转发规则 {@link ModifyNatGatewaySourceIpTranslationNatRuleRequest} {@link ModifyNatGatewaySourceIpTranslationNatRuleResponse} */
  ModifyNatGatewaySourceIpTranslationNatRule(data: ModifyNatGatewaySourceIpTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNatGatewaySourceIpTranslationNatRuleResponse>;
  /** 修改网络探测 {@link ModifyNetDetectRequest} {@link ModifyNetDetectResponse} */
  ModifyNetDetect(data: ModifyNetDetectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetDetectResponse>;
  /** 修改网络ACL属性 {@link ModifyNetworkAclAttributeRequest} {@link ModifyNetworkAclAttributeResponse} */
  ModifyNetworkAclAttribute(data: ModifyNetworkAclAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkAclAttributeResponse>;
  /** 修改网络ACL规则 {@link ModifyNetworkAclEntriesRequest} {@link ModifyNetworkAclEntriesResponse} */
  ModifyNetworkAclEntries(data: ModifyNetworkAclEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkAclEntriesResponse>;
  /** 增量更新网络ACL五元组规则接口 {@link ModifyNetworkAclQuintupleEntriesRequest} {@link ModifyNetworkAclQuintupleEntriesResponse} */
  ModifyNetworkAclQuintupleEntries(data: ModifyNetworkAclQuintupleEntriesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkAclQuintupleEntriesResponse>;
  /** 修改弹性网卡 {@link ModifyNetworkInterfaceAttributeRequest} {@link ModifyNetworkInterfaceAttributeResponse} */
  ModifyNetworkInterfaceAttribute(data: ModifyNetworkInterfaceAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkInterfaceAttributeResponse>;
  /** 修改弹性网卡服务质量 {@link ModifyNetworkInterfaceQosRequest} {@link ModifyNetworkInterfaceQosResponse} */
  ModifyNetworkInterfaceQos(data: ModifyNetworkInterfaceQosRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyNetworkInterfaceQosResponse>;
  /** 修改弹性网卡内网IP信息 {@link ModifyPrivateIpAddressesAttributeRequest} {@link ModifyPrivateIpAddressesAttributeResponse} */
  ModifyPrivateIpAddressesAttribute(data: ModifyPrivateIpAddressesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateIpAddressesAttributeResponse>;
  /** 修改私网NAT网关属性 {@link ModifyPrivateNatGatewayAttributeRequest} {@link ModifyPrivateNatGatewayAttributeResponse} */
  ModifyPrivateNatGatewayAttribute(data: ModifyPrivateNatGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateNatGatewayAttributeResponse>;
  /** 修改私网NAT网关目的端口转换规则 {@link ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleRequest} {@link ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleResponse} */
  ModifyPrivateNatGatewayDestinationIpPortTranslationNatRule(data: ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateNatGatewayDestinationIpPortTranslationNatRuleResponse>;
  /** 修改私网NAT网关源端转换访问控制规则 {@link ModifyPrivateNatGatewayTranslationAclRuleRequest} {@link ModifyPrivateNatGatewayTranslationAclRuleResponse} */
  ModifyPrivateNatGatewayTranslationAclRule(data: ModifyPrivateNatGatewayTranslationAclRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateNatGatewayTranslationAclRuleResponse>;
  /** 修改私网NAT网关源端转换规则 {@link ModifyPrivateNatGatewayTranslationNatRuleRequest} {@link ModifyPrivateNatGatewayTranslationNatRuleResponse} */
  ModifyPrivateNatGatewayTranslationNatRule(data: ModifyPrivateNatGatewayTranslationNatRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateNatGatewayTranslationNatRuleResponse>;
  /** 修改内网保留IP {@link ModifyReserveIpAddressRequest} {@link ModifyReserveIpAddressResponse} */
  ModifyReserveIpAddress(data: ModifyReserveIpAddressRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyReserveIpAddressResponse>;
  /** 修改路由表属性 {@link ModifyRouteTableAttributeRequest} {@link ModifyRouteTableAttributeResponse} */
  ModifyRouteTableAttribute(data: ModifyRouteTableAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRouteTableAttributeResponse>;
  /** 编辑云联网路由表选择策略 {@link ModifyRouteTableSelectionPoliciesRequest} {@link ModifyRouteTableSelectionPoliciesResponse} */
  ModifyRouteTableSelectionPolicies(data: ModifyRouteTableSelectionPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRouteTableSelectionPoliciesResponse>;
  /** 修改安全组属性 {@link ModifySecurityGroupAttributeRequest} {@link ModifySecurityGroupAttributeResponse} */
  ModifySecurityGroupAttribute(data: ModifySecurityGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupAttributeResponse>;
  /** 重置安全组出站和入站规则 {@link ModifySecurityGroupPoliciesRequest} {@link ModifySecurityGroupPoliciesResponse} */
  ModifySecurityGroupPolicies(data: ModifySecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupPoliciesResponse>;
  /** 修改协议端口模板 {@link ModifyServiceTemplateAttributeRequest} {@link ModifyServiceTemplateAttributeResponse} */
  ModifyServiceTemplateAttribute(data: ModifyServiceTemplateAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceTemplateAttributeResponse>;
  /** 修改协议端口模板集合 {@link ModifyServiceTemplateGroupAttributeRequest} {@link ModifyServiceTemplateGroupAttributeResponse} */
  ModifyServiceTemplateGroupAttribute(data: ModifyServiceTemplateGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyServiceTemplateGroupAttributeResponse>;
  /** 修改快照策略 {@link ModifySnapshotPoliciesRequest} {@link ModifySnapshotPoliciesResponse} */
  ModifySnapshotPolicies(data: ModifySnapshotPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySnapshotPoliciesResponse>;
  /** 修改子网属性 {@link ModifySubnetAttributeRequest} {@link ModifySubnetAttributeResponse} */
  ModifySubnetAttribute(data: ModifySubnetAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubnetAttributeResponse>;
  /** 修改模板对象成员 {@link ModifyTemplateMemberRequest} {@link ModifyTemplateMemberResponse} */
  ModifyTemplateMember(data: ModifyTemplateMemberRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTemplateMemberResponse>;
  /** 修改VPC属性 {@link ModifyVpcAttributeRequest} {@link ModifyVpcAttributeResponse} */
  ModifyVpcAttribute(data: ModifyVpcAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcAttributeResponse>;
  /** 修改终端节点属性 {@link ModifyVpcEndPointAttributeRequest} {@link ModifyVpcEndPointAttributeResponse} */
  ModifyVpcEndPointAttribute(data: ModifyVpcEndPointAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcEndPointAttributeResponse>;
  /** 修改终端节点服务属性 {@link ModifyVpcEndPointServiceAttributeRequest} {@link ModifyVpcEndPointServiceAttributeResponse} */
  ModifyVpcEndPointServiceAttribute(data: ModifyVpcEndPointServiceAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcEndPointServiceAttributeResponse>;
  /** 修改终端节点服务白名单属性 {@link ModifyVpcEndPointServiceWhiteListRequest} {@link ModifyVpcEndPointServiceWhiteListResponse} */
  ModifyVpcEndPointServiceWhiteList(data: ModifyVpcEndPointServiceWhiteListRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcEndPointServiceWhiteListResponse>;
  /** 修改私有网络对等连接属性 {@link ModifyVpcPeeringConnectionRequest} {@link ModifyVpcPeeringConnectionResponse} */
  ModifyVpcPeeringConnection(data: ModifyVpcPeeringConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcPeeringConnectionResponse>;
  /** 修改VPN通道 {@link ModifyVpnConnectionAttributeRequest} {@link ModifyVpnConnectionAttributeResponse} */
  ModifyVpnConnectionAttribute(data: ModifyVpnConnectionAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnConnectionAttributeResponse>;
  /** 修改VPN网关属性 {@link ModifyVpnGatewayAttributeRequest} {@link ModifyVpnGatewayAttributeResponse} */
  ModifyVpnGatewayAttribute(data: ModifyVpnGatewayAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnGatewayAttributeResponse>;
  /** 修改VPN网关云联网路由 {@link ModifyVpnGatewayCcnRoutesRequest} {@link ModifyVpnGatewayCcnRoutesResponse} */
  ModifyVpnGatewayCcnRoutes(data: ModifyVpnGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnGatewayCcnRoutesResponse>;
  /** 修改VPN路由状态 {@link ModifyVpnGatewayRoutesRequest} {@link ModifyVpnGatewayRoutesResponse} */
  ModifyVpnGatewayRoutes(data: ModifyVpnGatewayRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnGatewayRoutesResponse>;
  /** 更新SslVpnClient证书 {@link ModifyVpnGatewaySslClientCertRequest} {@link ModifyVpnGatewaySslClientCertResponse} */
  ModifyVpnGatewaySslClientCert(data: ModifyVpnGatewaySslClientCertRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnGatewaySslClientCertResponse>;
  /** 修改SSL-VPN 服务端属性 {@link ModifyVpnGatewaySslServerRequest} {@link ModifyVpnGatewaySslServerResponse} */
  ModifyVpnGatewaySslServer(data: ModifyVpnGatewaySslServerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpnGatewaySslServerResponse>;
  /** 发布路由至云联网 {@link NotifyRoutesRequest} {@link NotifyRoutesResponse} */
  NotifyRoutes(data: NotifyRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<NotifyRoutesResponse>;
  /** 刷新专线直连NAT路由 {@link RefreshDirectConnectGatewayRouteToNatGatewayRequest} {@link RefreshDirectConnectGatewayRouteToNatGatewayResponse} */
  RefreshDirectConnectGatewayRouteToNatGateway(data: RefreshDirectConnectGatewayRouteToNatGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<RefreshDirectConnectGatewayRouteToNatGatewayResponse>;
  /** 云联网拒绝关联实例 {@link RejectAttachCcnInstancesRequest} {@link RejectAttachCcnInstancesResponse} */
  RejectAttachCcnInstances(data: RejectAttachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RejectAttachCcnInstancesResponse>;
  /** 驳回对等连接 {@link RejectVpcPeeringConnectionRequest} {@link RejectVpcPeeringConnectionResponse} */
  RejectVpcPeeringConnection(data: RejectVpcPeeringConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<RejectVpcPeeringConnectionResponse>;
  /** 释放弹性公网IP {@link ReleaseAddressesRequest} {@link ReleaseAddressesResponse} */
  ReleaseAddresses(data: ReleaseAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseAddressesResponse>;
  /** 释放弹性公网IPv6 {@link ReleaseIPv6AddressesRequest} {@link ReleaseIPv6AddressesResponse} */
  ReleaseIPv6Addresses(data: ReleaseIPv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseIPv6AddressesResponse>;
  /** 关闭IPv6公网带宽 {@link ReleaseIp6AddressesBandwidthRequest} {@link ReleaseIp6AddressesBandwidthResponse} */
  ReleaseIp6AddressesBandwidth(data?: ReleaseIp6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseIp6AddressesBandwidthResponse>;
  /** 删除带宽包资源 {@link RemoveBandwidthPackageResourcesRequest} {@link RemoveBandwidthPackageResourcesResponse} */
  RemoveBandwidthPackageResources(data?: RemoveBandwidthPackageResourcesRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveBandwidthPackageResourcesResponse>;
  /** 删除IPV6转换规则 {@link RemoveIp6RulesRequest} {@link RemoveIp6RulesResponse} */
  RemoveIp6Rules(data: RemoveIp6RulesRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveIp6RulesResponse>;
  /** 续费包月带宽弹性公网IP {@link RenewAddressesRequest} {@link RenewAddressesResponse} */
  RenewAddresses(data: RenewAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<RenewAddressesResponse>;
  /** 续费VPN网关 {@link RenewVpnGatewayRequest} {@link RenewVpnGatewayResponse} */
  RenewVpnGateway(data: RenewVpnGatewayRequest, config?: AxiosRequestConfig): AxiosPromise<RenewVpnGatewayResponse>;
  /** 替换云联网路由传播策略 {@link ReplaceCcnRouteTableBroadcastPolicysRequest} {@link ReplaceCcnRouteTableBroadcastPolicysResponse} */
  ReplaceCcnRouteTableBroadcastPolicys(data: ReplaceCcnRouteTableBroadcastPolicysRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceCcnRouteTableBroadcastPolicysResponse>;
  /** 替换云联网路由接收策略 {@link ReplaceCcnRouteTableInputPolicysRequest} {@link ReplaceCcnRouteTableInputPolicysResponse} */
  ReplaceCcnRouteTableInputPolicys(data: ReplaceCcnRouteTableInputPolicysRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceCcnRouteTableInputPolicysResponse>;
  /** 替换专线网关云联网路由 {@link ReplaceDirectConnectGatewayCcnRoutesRequest} {@link ReplaceDirectConnectGatewayCcnRoutesResponse} */
  ReplaceDirectConnectGatewayCcnRoutes(data: ReplaceDirectConnectGatewayCcnRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceDirectConnectGatewayCcnRoutesResponse>;
  /** 替换高优路由表和子网绑定关系 {@link ReplaceHighPriorityRouteTableAssociationRequest} {@link ReplaceHighPriorityRouteTableAssociationResponse} */
  ReplaceHighPriorityRouteTableAssociation(data: ReplaceHighPriorityRouteTableAssociationRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceHighPriorityRouteTableAssociationResponse>;
  /** 替换高优路由表条目信息。 {@link ReplaceHighPriorityRoutesRequest} {@link ReplaceHighPriorityRoutesResponse} */
  ReplaceHighPriorityRoutes(data: ReplaceHighPriorityRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceHighPriorityRoutesResponse>;
  /** 替换路由表绑定关系 {@link ReplaceRouteTableAssociationRequest} {@link ReplaceRouteTableAssociationResponse} */
  ReplaceRouteTableAssociation(data: ReplaceRouteTableAssociationRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceRouteTableAssociationResponse>;
  /** 替换路由策略 {@link ReplaceRoutesRequest} {@link ReplaceRoutesResponse} */
  ReplaceRoutes(data: ReplaceRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceRoutesResponse>;
  /** 批量修改安全组规则 {@link ReplaceSecurityGroupPoliciesRequest} {@link ReplaceSecurityGroupPoliciesResponse} */
  ReplaceSecurityGroupPolicies(data: ReplaceSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceSecurityGroupPoliciesResponse>;
  /** 替换单条安全组规则 {@link ReplaceSecurityGroupPolicyRequest} {@link ReplaceSecurityGroupPolicyResponse} */
  ReplaceSecurityGroupPolicy(data: ReplaceSecurityGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceSecurityGroupPolicyResponse>;
  /** 重新申请关联实例 {@link ResetAttachCcnInstancesRequest} {@link ResetAttachCcnInstancesResponse} */
  ResetAttachCcnInstances(data: ResetAttachCcnInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAttachCcnInstancesResponse>;
  /** 重置高优路由表路由 {@link ResetHighPriorityRoutesRequest} {@link ResetHighPriorityRoutesResponse} */
  ResetHighPriorityRoutes(data: ResetHighPriorityRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetHighPriorityRoutesResponse>;
  /** 调整NAT网关并发连接上限 {@link ResetNatGatewayConnectionRequest} {@link ResetNatGatewayConnectionResponse} */
  ResetNatGatewayConnection(data: ResetNatGatewayConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<ResetNatGatewayConnectionResponse>;
  /** 重置路由表名称和路由策略 {@link ResetRoutesRequest} {@link ResetRoutesResponse} */
  ResetRoutes(data: ResetRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetRoutesResponse>;
  /** 重置VPN通道 {@link ResetVpnConnectionRequest} {@link ResetVpnConnectionResponse} */
  ResetVpnConnection(data: ResetVpnConnectionRequest, config?: AxiosRequestConfig): AxiosPromise<ResetVpnConnectionResponse>;
  /** 调整VPN网关带宽上限 {@link ResetVpnGatewayInternetMaxBandwidthRequest} {@link ResetVpnGatewayInternetMaxBandwidthResponse} */
  ResetVpnGatewayInternetMaxBandwidth(data: ResetVpnGatewayInternetMaxBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ResetVpnGatewayInternetMaxBandwidthResponse>;
  /** 恢复安全组策略 {@link ResumeSnapshotInstanceRequest} {@link ResumeSnapshotInstanceResponse} */
  ResumeSnapshotInstance(data: ResumeSnapshotInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResumeSnapshotInstanceResponse>;
  /** 解绑并释放普通公网IP {@link ReturnNormalAddressesRequest} {@link ReturnNormalAddressesResponse} */
  ReturnNormalAddresses(data?: ReturnNormalAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<ReturnNormalAddressesResponse>;
  /** 设置云联网各地域出带宽上限或地域间上限 {@link SetCcnRegionBandwidthLimitsRequest} {@link SetCcnRegionBandwidthLimitsResponse} */
  SetCcnRegionBandwidthLimits(data: SetCcnRegionBandwidthLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<SetCcnRegionBandwidthLimitsResponse>;
  /** 设置VPNGW续费标记 {@link SetVpnGatewaysRenewFlagRequest} {@link SetVpnGatewaysRenewFlagResponse} */
  SetVpnGatewaysRenewFlag(data: SetVpnGatewaysRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<SetVpnGatewaysRenewFlagResponse>;
  /** 普通IP转弹性IP {@link TransformAddressRequest} {@link TransformAddressResponse} */
  TransformAddress(data: TransformAddressRequest, config?: AxiosRequestConfig): AxiosPromise<TransformAddressResponse>;
  /** 释放IPv6地址 {@link UnassignIpv6AddressesRequest} {@link UnassignIpv6AddressesResponse} */
  UnassignIpv6Addresses(data: UnassignIpv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<UnassignIpv6AddressesResponse>;
  /** 释放IPv6网段 {@link UnassignIpv6CidrBlockRequest} {@link UnassignIpv6CidrBlockResponse} */
  UnassignIpv6CidrBlock(data: UnassignIpv6CidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<UnassignIpv6CidrBlockResponse>;
  /** 释放IPv6子网段 {@link UnassignIpv6SubnetCidrBlockRequest} {@link UnassignIpv6SubnetCidrBlockResponse} */
  UnassignIpv6SubnetCidrBlock(data: UnassignIpv6SubnetCidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<UnassignIpv6SubnetCidrBlockResponse>;
  /** 弹性网卡退还内网 IP {@link UnassignPrivateIpAddressesRequest} {@link UnassignPrivateIpAddressesResponse} */
  UnassignPrivateIpAddresses(data: UnassignPrivateIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<UnassignPrivateIpAddressesResponse>;
  /** 安全解锁云联网带宽 {@link UnlockCcnBandwidthsRequest} {@link UnlockCcnBandwidthsResponse} */
  UnlockCcnBandwidths(data: UnlockCcnBandwidthsRequest, config?: AxiosRequestConfig): AxiosPromise<UnlockCcnBandwidthsResponse>;
  /** 安全解锁云联网实例 {@link UnlockCcnsRequest} {@link UnlockCcnsResponse} */
  UnlockCcns(data?: UnlockCcnsRequest, config?: AxiosRequestConfig): AxiosPromise<UnlockCcnsResponse>;
  /** 从云联网撤销路由 {@link WithdrawNotifyRoutesRequest} {@link WithdrawNotifyRoutesResponse} */
  WithdrawNotifyRoutes(data: WithdrawNotifyRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<WithdrawNotifyRoutesResponse>;
}

export declare type Versions = ["2017-03-12"];

export default Vpc;
