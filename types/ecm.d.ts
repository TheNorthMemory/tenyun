/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 描述 EIP 信息 */
declare interface Address {
  /** EIP的ID，是EIP的唯一标识。 */
  AddressId: string;
  /** EIP名称。 */
  AddressName: string;
  /** EIP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡) */
  AddressStatus: string;
  /** 外网IP地址 */
  AddressIp: string;
  /** 绑定的资源实例ID。 */
  InstanceId: string | null;
  /** 创建时间。ISO 8601 格式：YYYY-MM-DDTHH:mm:ss.sssZ */
  CreatedTime: string;
  /** 绑定的弹性网卡ID */
  NetworkInterfaceId: string | null;
  /** 绑定的资源内网ip */
  PrivateAddressIp: string | null;
  /** 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态 */
  IsArrears: boolean;
  /** 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态 */
  IsBlocked: boolean;
  /** eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式 */
  IsEipDirectConnection: boolean;
  /** eip资源类型，包括"CalcIP","WanIP","EIP","AnycastEIP"。其中"CalcIP"表示设备ip，“WanIP”表示普通公网ip，“EIP”表示弹性公网ip，“AnycastEip”表示加速EIP */
  AddressType: string;
  /** eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放 */
  CascadeRelease: boolean;
  /** 运营商，CTCC电信，CUCC联通，CMCC移动 */
  InternetServiceProvider: string | null;
  /** 带宽上限 */
  Bandwidth: number | null;
  /** 计费模式 */
  PayMode: string | null;
}

/** ip地址相关信息结构体。 */
declare interface AddressInfo {
  /** 实例的外网ip相关信息。 */
  PublicIPAddressInfo: PublicIPAddressInfo | null;
  /** 实例的内网ip相关信息。 */
  PrivateIPAddressInfo: PrivateIPAddressInfo | null;
  /** 实例的外网ipv6相关信息。 */
  PublicIPv6AddressInfo: PublicIPAddressInfo | null;
}

/** IP地址模板 */
declare interface AddressTemplateSpecification {
  /** IP地址ID，例如：eipm-2uw6ujo6。 */
  AddressId: string;
  /** IP地址组ID，例如：eipmg-2uw6ujo6。 */
  AddressGroupId: string;
}

/** 区域信息 */
declare interface Area {
  /** 区域ID */
  AreaId: string;
  /** 区域名称 */
  AreaName: string;
}

/** VPC辅助CIDR信息。 */
declare interface AssistantCidr {
  /** VPC实例ID。形如：vpc-6v2ht8q5 */
  VpcId: string;
  /** 辅助CIDR。形如：172.16.0.0/16 */
  CidrBlock: string;
  /** 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。 */
  AssistantType: number;
  /** 辅助CIDR拆分的子网。 */
  SubnetSet: Subnet[] | null;
}

/** 负责均衡后端信息 */
declare interface Backend {
  /** 后端服务的唯一 ID */
  InstanceId?: string | null;
  /** 后端服务的监听端口 */
  Port?: number | null;
  /** 后端服务的转发权重，取值范围：[0, 100]，默认为 10。 */
  Weight?: number | null;
  /** 后端服务的内网 IP */
  PrivateIpAddresses?: string[] | null;
  /** 后端服务被绑定的时间 */
  RegisteredTime?: string | null;
  /** 弹性网卡唯一ID */
  EniId?: string | null;
  /** 后端服务的外网 IP */
  PublicIpAddresses: string[] | null;
  /** 后端服务的实例名称 */
  InstanceName: string | null;
}

/** 负责均衡批量目标项 */
declare interface BatchTarget {
  /** 监听器ID */
  ListenerId?: string | null;
  /** 绑定端口 */
  Port?: number | null;
  /** 子机ID */
  InstanceId?: string | null;
  /** 弹性网卡ip */
  EniIp?: string | null;
  /** 子机权重，范围[0, 100]。绑定时如果不存在，则默认为10。 */
  Weight?: number | null;
}

/** 城市信息 */
declare interface City {
  /** 城市ID */
  CityId: string;
  /** 城市名称 */
  CityName: string;
}

/** 国家信息 */
declare interface Country {
  /** 国家ID */
  CountryId: string;
  /** 国家名称 */
  CountryName: string;
}

/** 描述了数据盘的信息 */
declare interface DataDisk {
  /** 数据盘大小。单位GB。 */
  DiskSize: number;
  /** 数据盘类型，取值范围：- LOCAL_BASIC：本地硬盘- CLOUD_PREMIUM：高性能云硬盘默认取值： LOCAL_BASIC。 */
  DiskType?: string;
}

/** 描述了云硬盘的详细信息 */
declare interface Disk {
  /** 云盘是否与挂载的实例一起销毁。true:销毁实例时会同时销毁云盘，只支持按小时后付费云盘。false：销毁实例时不销毁云盘。 */
  DeleteWithInstance: boolean | null;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费。 */
  RenewFlag?: string | null;
  /** 硬盘介质类型。取值范围：CLOUD_BASIC：表示普通云硬盘CLOUD_PREMIUM：表示高性能云硬盘CLOUD_SSD：表示SSD云硬盘CLOUD_HSSD：表示增强型SSD云硬盘CLOUD_TSSD：表示极速型SSD云硬盘。 */
  DiskType?: string;
  /** 云盘状态。取值范围：UNATTACHED：未挂载ATTACHING：挂载中ATTACHED：已挂载DETACHING：解挂中EXPANDING：扩容中ROLLBACKING：回滚中TORECYCLE：待回收DUMPING：拷贝硬盘中。 */
  DiskState?: string;
  /** 云盘拥有的快照总数。 */
  SnapshotCount: number;
  /** 云盘已挂载到子机，且子机与云盘都是包年包月。true：子机设置了自动续费标识，但云盘未设置false：云盘自动续费标识正常。 */
  AutoRenewFlagError?: boolean | null;
  /** 云盘是否处于快照回滚状态。取值范围：false:表示不处于快照回滚状态true:表示处于快照回滚状态。 */
  Rollbacking?: boolean;
  /** 对于非共享型云盘，该参数为空数组。对于共享型云盘，则表示该云盘当前被挂载到的CVM实例InstanceId */
  InstanceIdList: string[];
  /** 云盘是否为加密盘。取值范围：false:表示非加密盘true:表示加密盘。 */
  Encrypt?: boolean;
  /** 云硬盘名称。 */
  DiskName?: string;
  /** 云硬盘因欠费销毁或者到期销毁时， 是否使用快照备份数据的标识。true表示销毁时创建快照进行数据备份。false表示直接销毁，不进行数据备份。 */
  BackupDisk: boolean;
  /** 与云盘绑定的标签，云盘未绑定标签则取值为空。 */
  Tags: Tag[] | null;
  /** 云硬盘挂载的云主机ID。 */
  InstanceId?: string;
  /** 云盘关联的定期快照ID。只有在调用DescribeDisks接口时，入参ReturnBindAutoSnapshotPolicy取值为TRUE才会返回该参数。 */
  AutoSnapshotPolicyIds?: string[] | null;
  /** 云硬盘额外性能值，单位MB/s。 */
  ThroughputPerformance: number | null;
  /** 云盘是否处于类型变更中。取值范围：false:表示云盘不处于类型变更中true:表示云盘已发起类型变更，正处于迁移中。 */
  Migrating: boolean | null;
  /** 云硬盘ID。 */
  DiskId?: string;
  /** 云盘拥有的快照总容量，单位为MB。 */
  SnapshotSize: number;
  /** 云硬盘所在的位置。 */
  Placement?: Placement;
  /** 判断预付费的云盘是否支持主动退还。true:支持主动退还false:不支持主动退还。 */
  IsReturnable?: boolean | null;
  /** 云盘是否挂载到云主机上。取值范围：false:表示未挂载true:表示已挂载。 */
  Attached?: boolean;
  /** 云硬盘大小，单位GB。 */
  DiskSize?: number;
  /** 云盘类型变更的迁移进度，取值0到100。 */
  MigratePercent: number | null;
  /** 云硬盘类型。取值范围：SYSTEM_DISK：系统盘DATA_DISK：数据盘。 */
  DiskUsage?: string;
  /** 付费模式。取值范围：PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：后付费，即按量计费。 */
  DiskChargeType?: string;
  /** 是否为弹性云盘，false表示非弹性云盘，true表示弹性云盘。 */
  Portable?: boolean;
  /** 云盘是否具备创建快照的能力。取值范围：false表示不具备true表示具备。 */
  SnapshotAbility?: boolean;
  /** 在云盘已挂载到实例，且实例与云盘都是包年包月的条件下，此字段才有意义。true:云盘到期时间早于实例。false：云盘到期时间晚于实例。 */
  DeadlineError?: boolean | null;
  /** 云盘快照回滚的进度。 */
  RollbackPercent?: number;
  /** 当前时间距离盘到期的天数（仅对预付费盘有意义）。 */
  DifferDaysOfDeadline: number | null;
  /** 预付费云盘在不支持主动退还的情况下，该参数表明不支持主动退还的具体原因。取值范围：1：云硬盘已经退还2：云硬盘已过期3：云盘不支持退还8：超过可退还数量的限制。 */
  ReturnFailCode?: number | null;
  /** 云盘是否为共享型云盘。 */
  Shareable: boolean;
  /** 云硬盘的创建时间。 */
  CreateTime?: string;
  /** 云硬盘的到期时间。 */
  DeadlineTime: string;
  /** 云盘的挂载类型。取值范围：PF: PF挂载VF: VF挂载 */
  AttachMode: string | null;
}

/** 描述了实例的计费模式 */
declare interface DiskChargePrepaid {
  /** 购买云盘的时长，默认单位为月，取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。 */
  Period: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费。 */
  RenewFlag?: string;
  /** 需要将云盘的到期时间与挂载的子机对齐时，可传入该参数。该参数表示子机当前的到期时间，此时Period如果传入，则表示子机需要续费的时长，云盘会自动按对齐到子机续费后的到期时间续费，示例取值：2018-03-30 20:15:03。 */
  CurInstanceDeadline?: string;
}

/** 磁盘信息 */
declare interface DiskInfo {
  /** 磁盘类型：LOCAL_BASIC */
  DiskType: string;
  /** 磁盘ID */
  DiskId: string;
  /** 磁盘大小（GB） */
  DiskSize: number;
  /** 是否随实例删除。 */
  DeleteWithInstance: boolean;
  /** 快照ID */
  SnapshotId: string | null;
}

/** 描述EIP配额信息 */
declare interface EipQuota {
  /** 配额名称，取值范围：TOTAL_EIP_QUOTA：用户当前地域下EIP的配额数；DAILY_EIP_APPLY：用户当前地域下今日申购次数；DAILY_PUBLIC_IP_ASSIGN：用户当前地域下，重新分配公网 IP次数。 */
  QuotaId: string;
  /** 当前数量 */
  QuotaCurrent: number;
  /** 配额数量 */
  QuotaLimit: number;
}

/** 增强服务 */
declare interface EnhancedService {
  /** 是否开启云镜服务。 */
  SecurityService?: RunSecurityServiceEnabled;
  /** 是否开启云监控服务。 */
  MonitorService?: RunMonitorServiceEnabled;
  /** 是否开通IP直通。若不指定该参数，则Linux镜像默认开通，windows镜像暂不支持IP直通。 */
  EIPDirectService?: RunEIPDirectServiceEnabled;
}

/** 描述键值对过滤器，用于条件过滤查询。 */
declare interface Filter {
  /** 一个或者多个过滤值。 */
  Values: string[];
  /** 过滤键的名称。 */
  Name: string;
}

/** HAVIP对象。 */
declare interface HaVip {
  /** HAVIP的ID，是HAVIP的唯一标识。 */
  HaVipId: string;
  /** HAVIP名称。 */
  HaVipName: string;
  /** 虚拟IP地址。 */
  Vip: string;
  /** HAVIP所在私有网络ID。 */
  VpcId: string;
  /** HAVIP所在子网ID。 */
  SubnetId: string;
  /** HAVIP关联弹性网卡ID。 */
  NetworkInterfaceId: string;
  /** 被绑定的实例ID。 */
  InstanceId: string;
  /** 绑定EIP。 */
  AddressIp: string;
  /** 状态：AVAILABLE：运行中。UNBIND：未绑定。 */
  State: string;
  /** 创建时间。 */
  CreatedTime: string;
  /** 使用havip的业务标识。 */
  Business: string;
}

/** 负载均衡健康检查 */
declare interface HealthCheck {
  /** 是否开启健康检查：1（开启）、0（关闭） */
  HealthSwitch?: number | null;
  /** 健康检查的响应超时时间，可选值：2~60，默认值：2，单位：秒。响应超时时间要小于检查间隔时间。 */
  TimeOut?: number | null;
  /** 健康检查探测间隔时间，默认值：5，可选值：5~300，单位：秒。 */
  IntervalTime?: number | null;
  /** 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2~10，单位：次。 */
  HealthNum?: number | null;
  /** 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发异常，可选值：2~10，单位：次。 */
  UnHealthyNum?: number | null;
  /** 自定义探测相关参数。健康检查端口，默认为后端服务的端口，除非您希望指定特定端口，否则建议留空。 */
  CheckPort?: number | null;
  /** 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查的输入格式，可取值：HEX或TEXT；取值为HEX时，SendContext和RecvContext的字符只能在0123456789ABCDEF中选取且长度必须是偶数位。 */
  ContextType?: string | null;
  /** 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查发送的请求内容，只允许ASCII可见字符，最大长度限制500。 */
  SendContext?: string | null;
  /** 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查返回的结果，只允许ASCII可见字符，最大长度限制500。 */
  RecvContext?: string | null;
  /** 自定义探测相关参数。健康检查使用的协议：TCP | CUSTOM（UDP监听器只支持CUSTOM；如果使用自定义健康检查功能，则必传）。 */
  CheckType?: string | null;
}

/** 运营商信息 */
declare interface ISP {
  /** 运营商ID */
  ISPId: string;
  /** 运营商名称 */
  ISPName: string;
}

/** 运行商统计信息 */
declare interface ISPCounter {
  /** 运营商名称 */
  ProviderName?: string;
  /** 节点数量 */
  ProviderNodeNum?: number;
  /** 实例数量 */
  ProvederInstanceNum?: number;
  /** Zone实例信息结构体数组 */
  ZoneInstanceInfoSet?: ZoneInstanceInfo[];
  /** 实例数量 */
  ProviderInstanceNum?: number | null;
}

/** 多运营商IPv6 Cidr Block */
declare interface ISPIPv6CidrBlock {
  /** IPv6 CIdr Block。 */
  IPv6CidrBlock?: string | null;
  /** 网络运营商类型 取值范围:'CMCC'-中国移动, 'CTCC'-中国电信, 'CUCC'-中国联调 */
  ISPType?: string | null;
}

/** 申请ipv6 cidr block的信息 */
declare interface ISPTypeItem {
  /** IPv6 Cidr所属运营商类型，支持的类型有 'CMCC'-中国移动, 'CTCC'-中国电信, 'CUCC'-中国联调。作为入参数时为必选。 */
  ISPType?: string;
  /** 申请IPv6 Cidr Block的个数。作为入参数时为必选。 */
  Count?: number;
}

/** 镜像信息 */
declare interface Image {
  /** 镜像ID */
  ImageId?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 镜像状态 */
  ImageState?: string;
  /** 镜像类型 */
  ImageType?: string;
  /** 操作系统名称 */
  ImageOsName?: string;
  /** 镜像描述 */
  ImageDescription?: string;
  /** 镜像导入时间 */
  ImageCreateTime?: string;
  /** 操作系统位数 */
  Architecture?: string;
  /** 操作系统类型 */
  OsType?: string;
  /** 操作系统版本 */
  OsVersion?: string;
  /** 操作系统平台 */
  Platform?: string;
  /** 镜像所有者 */
  ImageOwner?: number;
  /** 镜像大小。单位：GB */
  ImageSize?: number;
  /** 镜像来源信息 */
  SrcImage?: SrcImage;
  /** 镜像来源类型 */
  ImageSource?: string;
  /** 中间态和失败时候的任务ID */
  TaskId?: string;
  /** 是否支持CloudInit */
  IsSupportCloudInit?: boolean;
}

/** 镜像限制配置 */
declare interface ImageLimitConfig {
  /** 支持的最大镜像大小，包括可导入的自定义镜像大小，中心云镜像大小，单位为GB。 */
  MaxImageSize: number;
}

/** 支持的操作系统类型，根据windows和Linux分类。 */
declare interface ImageOsList {
  /** 支持的windows操作系统 */
  Windows: string[] | null;
  /** 支持的linux操作系统 */
  Linux: string[] | null;
}

/** 镜像任务 */
declare interface ImageTask {
  /** 镜像导入状态， PENDING, PROCESSING, SUCCESS, FAILED */
  State: string;
  /** 导入失败(FAILED)时， 说明失败原因 */
  Message: string | null;
  /** 镜像名称 */
  ImageName: string;
  /** 创建时间 */
  CreateTime: string;
}

/** 镜像文件信息 */
declare interface ImageUrl {
  /** 镜像文件COS链接，如设置私有读写，需授权腾讯云ECM运营账号访问权限。 */
  ImageFile: string;
}

/** 用于描述实例相关的信息。 */
declare interface Instance {
  /** 实例ID。 */
  InstanceId?: string;
  /** 实例名称，如ens-34241f3s。 */
  InstanceName?: string | null;
  /** 实例状态。取值范围：PENDING：表示创建中LAUNCH_FAILED：表示创建失败RUNNING：表示运行中STOPPED：表示关机STARTING：表示开机中STOPPING：表示关机中REBOOTING：表示重启中SHUTDOWN：表示停止待销毁TERMINATING：表示销毁中。 */
  InstanceState?: string;
  /** 实例当前使用的镜像的信息。 */
  Image?: Image | null;
  /** 实例当前所属的模块简要信息。 */
  SimpleModule?: SimpleModule | null;
  /** 实例所在的位置相关信息。 */
  Position?: Position | null;
  /** 实例的网络相关信息。 */
  Internet?: Internet | null;
  /** 实例的配置相关信息。 */
  InstanceTypeConfig?: InstanceTypeConfig | null;
  /** 实例的创建时间。 */
  CreateTime?: string | null;
  /** 实例的标签信息。 */
  TagSet?: Tag[] | null;
  /** 实例最后一次操作。 */
  LatestOperation?: string | null;
  /** 实例最后一次操作结果。 */
  LatestOperationState?: string | null;
  /** 实例业务状态。取值范围：NORMAL：表示正常状态的实例EXPIRED：表示过期的实例PROTECTIVELY_ISOLATED：表示被安全隔离的实例。 */
  RestrictState?: string | null;
  /** 系统盘大小，单位GB。 */
  SystemDiskSize?: number | null;
  /** 数据盘大小，单位GB。 */
  DataDiskSize?: number | null;
  /** 实例UUID */
  UUID?: string | null;
  /** 付费方式。 0为后付费。 1为预付费。 */
  PayMode?: number | null;
  /** 过期时间。格式为yyyy-mm-dd HH:mm:ss。 */
  ExpireTime?: string | null;
  /** 隔离时间。格式为yyyy-mm-dd HH:mm:ss。 */
  IsolatedTime?: string | null;
  /** 是否自动续费。 0为不自动续费。 1为自动续费。 */
  RenewFlag?: number | null;
  /** 过期状态。 NORMAL 表示机器运行正常。 WILL_EXPIRE 表示即将过期。 EXPIRED 表示已过期。 */
  ExpireState?: string | null;
  /** 系统盘信息 */
  SystemDisk?: DiskInfo | null;
  /** 数据盘信息 */
  DataDisks?: DiskInfo[] | null;
  /** 新实例标志 */
  NewFlag?: number | null;
  /** 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。 */
  SecurityGroupIds?: string[] | null;
  /** VPC属性 */
  VirtualPrivateCloud?: VirtualPrivateCloud | null;
  /** 实例运营商字段。 */
  ISP?: string | null;
  /** 物理位置信息。注意该字段目前为保留字段，均为空值。 */
  PhysicalPosition?: PhysicalPosition | null;
}

/** 机型族配置 */
declare interface InstanceFamilyConfig {
  /** 机型名称 */
  InstanceFamilyName: string;
  /** 机型ID */
  InstanceFamily: string;
}

/** 实例系列类型配置 */
declare interface InstanceFamilyTypeConfig {
  /** 实例机型系列类型Id */
  InstanceFamilyType: string;
  /** 实例机型系列类型名称 */
  InstanceFamilyTypeName: string;
}

/** 实例网卡ip网络信息数组 */
declare interface InstanceNetworkInfo {
  /** 实例内外网ip相关信息。 */
  AddressInfoSet: AddressInfo[] | null;
  /** 网卡ID。 */
  NetworkInterfaceId: string;
  /** 网卡名称。 */
  NetworkInterfaceName: string | null;
  /** 主网卡属性。true为主网卡，false为辅助网卡。 */
  Primary: boolean;
}

/** 机器网络资源限制 */
declare interface InstanceNetworkLimitConfig {
  /** cpu核数 */
  CpuNum: number;
  /** 网卡数量限制 */
  NetworkInterfaceLimit: number;
  /** 每张网卡内网ip数量限制 */
  InnerIpPerNetworkInterface: number;
  /** 每个实例的外网ip限制 */
  PublicIpPerInstance: number;
}

/** 实例可执行操作 */
declare interface InstanceOperator {
  /** 实例id */
  InstanceId: string;
  /** 实例禁止的操作 */
  DeniedActions: OperatorAction[] | null;
}

/** 描述实例的价格相关 */
declare interface InstancePricesPartDetail {
  /** cpu的价格信息 */
  CpuPrice: PriceDetail;
  /** 内存价格信息 */
  MemPrice: PriceDetail;
  /** 磁盘价格信息 */
  DisksPrice: PriceDetail;
}

/** 用于描述实例的统计信息 */
declare interface InstanceStatistic {
  /** 实例的类型 */
  InstanceType: string;
  /** 实例的个数 */
  InstanceCount: number;
}

/** 机型配置 */
declare interface InstanceTypeConfig {
  /** 机型族配置信息 */
  InstanceFamilyConfig?: InstanceFamilyConfig;
  /** 机型 */
  InstanceType?: string;
  /** CPU核数 */
  Vcpu?: number;
  /** 内存大小 */
  Memory?: number;
  /** 主频 */
  Frequency?: string;
  /** 处理器型号 */
  CpuModelName?: string;
  /** 机型族类别配置信息 */
  InstanceFamilyTypeConfig?: InstanceFamilyTypeConfig;
  /** 机型额外信息 是一个json字符串，如果存在则表示特殊机型，格式如下：{"dataDiskSize":3200,"systemDiskSize":60, "systemDiskSizeShow":"系统盘默认60G","dataDiskSizeShow":"本地NVMe SSD 硬盘3200 GB"} */
  ExtInfo?: string | null;
  /** GPU卡数 */
  Vgpu?: number | null;
  /** GPU型号 */
  GpuModelName?: string | null;
}

/** 实例价格信息 */
declare interface InstancesPrice {
  /** 分部描述实例子维度的价格 */
  InstancePricesPartDetail: InstancePricesPartDetail;
  /** 实例总价折扣 */
  Discount: number;
  /** 折扣后价格 */
  DiscountPrice: number;
  /** 折扣前价格，原始总价 */
  OriginalPrice: number;
}

/** 实例的网络相关信息。 */
declare interface Internet {
  /** 实例的内网相关信息列表。顺序为主网卡在前，辅助网卡按绑定先后顺序排列。 */
  PrivateIPAddressSet: PrivateIPAddressInfo[] | null;
  /** 实例的公网相关信息列表。顺序为主网卡在前，辅助网卡按绑定先后顺序排列。 */
  PublicIPAddressSet: PublicIPAddressInfo[] | null;
  /** 实例网络相关信息。 */
  InstanceNetworkInfoSet: InstanceNetworkInfo[] | null;
}

/** IPv6地址信息。 */
declare interface Ipv6Address {
  /** IPv6地址，形如：3402:4e00:20:100:0:8cd9:2a67:71f3 */
  Address: string;
  /** 是否是主IP。 */
  Primary?: boolean;
  /** EIP实例ID，形如：eip-hxlqja90。 */
  AddressId?: string;
  /** 描述信息。 */
  Description?: string;
  /** 公网IP是否被封堵。 */
  IsWanIpBlocked?: boolean;
  /** IPv6地址状态：PENDING：生产中MIGRATING：迁移中DELETING：删除中AVAILABLE：可用的 */
  State?: string;
}

/** IPv6子网段对象。 */
declare interface Ipv6SubnetCidrBlock {
  /** 子网实例`ID`。形如：`subnet-pxir56ns`。 */
  SubnetId?: string | null;
  /** `IPv6`子网段。形如：`3402:4e00:20:1001::/64` */
  Ipv6CidrBlock?: string | null;
}

/** 描述密钥对信息 */
declare interface KeyPair {
  /** 密钥对的ID，是密钥对的唯一标识。 */
  KeyId?: string | null;
  /** 密钥对名称。 */
  KeyName?: string | null;
  /** 密钥对所属的项目ID。 */
  ProjectId?: number | null;
  /** 密钥对描述信息。 */
  Description?: string | null;
  /** 密钥对的纯文本公钥。 */
  PublicKey?: string | null;
  /** 钥对的纯文本私钥。腾讯云不会保管私钥，请用户自行妥善保存。 */
  PrivateKey?: string | null;
  /** 钥关联的实例ID列表。 */
  AssociatedInstanceIds?: string[] | null;
  /** 创建时间。按照ISO8601标准表示，并且使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string | null;
}

/** 负载均衡监听器 */
declare interface Listener {
  /** 负载均衡监听器 ID */
  ListenerId: string | null;
  /** 监听器协议 */
  Protocol: string | null;
  /** 监听器端口 */
  Port: number | null;
  /** 监听器的健康检查信息 */
  HealthCheck: HealthCheck | null;
  /** 请求的调度方式 */
  Scheduler: string | null;
  /** 会话保持时间 */
  SessionExpireTime: number | null;
  /** 监听器的名称 */
  ListenerName: string | null;
  /** 监听器的创建时间 */
  CreateTime: string | null;
  /** 监听器的会话类型 */
  SessionType: string | null;
  /** 端口段结束端口 */
  EndPort: number | null;
}

/** 监听器后端 */
declare interface ListenerBackend {
  /** 监听器 ID */
  ListenerId?: string | null;
  /** 监听器的协议 */
  Protocol?: string | null;
  /** 监听器的端口 */
  Port?: number | null;
  /** 监听器上绑定的后端服务列表 */
  Targets?: Backend[] | null;
}

/** 监听器健康状态 */
declare interface ListenerHealth {
  /** 监听器ID */
  ListenerId: string | null;
  /** 监听器名称 */
  ListenerName: string | null;
  /** 监听器的协议 */
  Protocol: string | null;
  /** 监听器的端口 */
  Port: number | null;
  /** 监听器的转发规则列表 */
  Rules: RuleHealth[] | null;
}

/** 负载均衡实例信息 */
declare interface LoadBalancer {
  /** 区域。 */
  Region: string | null;
  /** 位置信息。 */
  Position: Position | null;
  /** 负载均衡实例 ID。 */
  LoadBalancerId: string | null;
  /** 负载均衡实例的名称。 */
  LoadBalancerName: string | null;
  /** 负载均衡实例的网络类型：OPEN：公网属性 */
  LoadBalancerType: string | null;
  /** 负载均衡实例的 VIP 列表。 */
  LoadBalancerVips: string[] | null;
  /** 负载均衡实例的状态，包括 0：创建中，1：正常运行。 */
  Status: number | null;
  /** 负载均衡实例的创建时间。 */
  CreateTime: string | null;
  /** 负载均衡实例的上次状态转换时间。 */
  StatusTime: string | null;
  /** 私有网络的 ID。 */
  VpcId: string | null;
  /** 负载均衡实例的标签信息。 */
  Tags: TagInfo[] | null;
  /** 负载均衡IP地址所属的ISP。 */
  VipIsp: string | null;
  /** 负载均衡实例的网络属性。 */
  NetworkAttributes: LoadBalancerInternetAccessible | null;
  /** 安全组。 */
  SecureGroups: string[] | null;
  /** 后端机器是否放通来自ELB的流量。 */
  LoadBalancerPassToTarget: boolean | null;
  /** 负载均衡实例的IPv6地址 */
  AddressIPv6: string | null;
}

/** 负载均衡器健康状态 */
declare interface LoadBalancerHealth {
  /** 负载均衡实例ID */
  LoadBalancerId: string | null;
  /** 负载均衡实例名称 */
  LoadBalancerName: string | null;
  /** 监听器列表 */
  Listeners: ListenerHealth[] | null;
}

/** 负载均衡的带宽限制等信息。 */
declare interface LoadBalancerInternetAccessible {
  /** 最大出带宽，单位Mbps。默认值10 */
  InternetMaxBandwidthOut?: number;
}

/** 模块信息 */
declare interface Module {
  /** 模块Id。 */
  ModuleId?: string;
  /** 模块名称。 */
  ModuleName?: string;
  /** 模块状态：NORMAL：正常。DELETING：删除中 DELETEFAILED：删除失败。 */
  ModuleState?: string;
  /** 默认系统盘大小。 */
  DefaultSystemDiskSize?: number;
  /** 默认数据盘大小。 */
  DefaultDataDiskSize?: number;
  /** 默认机型。 */
  InstanceTypeConfig?: InstanceTypeConfig;
  /** 默认镜像。 */
  DefaultImage?: Image;
  /** 创建时间。 */
  CreateTime?: string;
  /** 默认出带宽。 */
  DefaultBandwidth?: number;
  /** 标签集合。 */
  TagSet?: Tag[] | null;
  /** 是否关闭IP直通。 */
  CloseIpDirect?: number;
  /** 默认安全组id列表。 */
  SecurityGroupIds?: string[];
  /** 默认入带宽。 */
  DefaultBandwidthIn?: number;
  /** 自定义脚本数据 */
  UserData?: string;
  /** 系统盘信息。 */
  SystemDisk?: SystemDisk;
  /** 数据盘信息。 */
  DataDisks?: DataDisk[];
  /** 是否禁止外网ip */
  DisableWanIp?: number;
}

/** 节点统计数据 */
declare interface ModuleCounter {
  /** 运营商统计信息列表 */
  ISPCounterSet: ISPCounter[];
  /** 省份数量 */
  ProvinceNum: number;
  /** 城市数量 */
  CityNum: number;
  /** 节点数量 */
  NodeNum: number;
  /** 实例数量 */
  InstanceNum: number;
}

/** 模块列表Item信息 */
declare interface ModuleItem {
  /** 节点实例统计信息 */
  NodeInstanceNum: NodeInstanceNum;
  /** 模块信息 */
  Module: Module;
}

/** 客户对应月份的带宽信息 */
declare interface MonthNetwork {
  /** 节点zone信息 */
  ZoneInfo: ZoneInfo;
  /** 带宽月份 示例"202103" */
  Month: string;
  /** 带宽包id 格式如"bwp-xxxxxxxx" */
  BandwidthPkgId: string;
  /** 运营商简称 取值范围"CUCC;CTCC;CMCC" */
  Isp: string;
  /** 入网带宽包峰值,取值范围0.0-xxx.xxx */
  TrafficMaxIn: number;
  /** 出网带宽包峰值,取值范围0.0-xxx.xxx */
  TrafficMaxOut: number;
  /** 计费带宽,取值范围0.0-xxx.xxx */
  FeeTraffic: number;
  /** 月计费带宽起始时间 格式"yyyy-mm-dd HH:mm:ss" */
  StartTime: string;
  /** 月计费带宽结束时间 格式"yyyy-mm-dd HH:mm:ss" */
  EndTime: string;
  /** 月计费带宽实际有效天数 整形必须大于等于0 */
  EffectiveDays: number;
  /** 指定月份的实际天数 实例 30 */
  MonthDays: number;
  /** 有效天占比 保留小数点后四位0.2134 */
  EffectiveDaysRate: number;
  /** 计费带宽包类型 实例"Address","LoadBalance","AddressIpv6" */
  BandwidthPkgType: string;
}

/** 弹性网卡 */
declare interface NetworkInterface {
  /** 弹性网卡实例ID，例如：eni-f1xjkw1b。 */
  NetworkInterfaceId: string;
  /** 弹性网卡名称。 */
  NetworkInterfaceName: string;
  /** 弹性网卡描述。 */
  NetworkInterfaceDescription: string;
  /** 子网实例ID。 */
  SubnetId: string;
  /** VPC实例ID。 */
  VpcId: string;
  /** 绑定的安全组。 */
  GroupSet: string[] | null;
  /** 是否是主网卡。 */
  Primary: boolean;
  /** MAC地址。 */
  MacAddress: string;
  /** 弹性网卡状态：PENDING：创建中AVAILABLE：可用的ATTACHING：绑定中DETACHING：解绑中DELETING：删除中 */
  State: string;
  /** 内网IP信息。 */
  PrivateIpAddressSet: PrivateIpAddressSpecification[] | null;
  /** 绑定的云服务器对象。 */
  Attachment: NetworkInterfaceAttachment | null;
  /** 可用区。 */
  Zone: string;
  /** 创建时间。 */
  CreatedTime: string;
  /** IPv6地址列表。 */
  Ipv6AddressSet: Ipv6Address[] | null;
  /** 标签键值对。 */
  TagSet: Tag[] | null;
  /** 网卡类型。0 - 弹性网卡；1 - evm弹性网卡。 */
  EniType: number;
  /** EcmRegion ecm区域 */
  EcmRegion: string;
  /** 网卡绑定的子机类型：cvm，eks。 */
  Business: string | null;
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

/** 网络硬盘上下限数据 */
declare interface NetworkStorageRange {
  /** 网络带宽上限 */
  MaxBandwidth?: number;
  /** 数据盘上限 */
  MaxSystemDiskSize?: number;
  /** 网络带宽下限 */
  MinBandwidth?: number;
  /** 数据盘下限 */
  MinSystemDiskSize?: number;
  /** 最大数据盘大小 */
  MaxDataDiskSize?: number;
  /** 最小数据盘大小 */
  MinDataDiskSize?: number;
  /** 建议带宽 */
  SuggestBandwidth?: number;
  /** 建议硬盘大小 */
  SuggestDataDiskSize?: number;
  /** 建议系统盘大小 */
  SuggestSystemDiskSize?: number;
  /** Cpu核数峰值 */
  MaxVcpu?: number;
  /** Cpu核最小值 */
  MinVcpu?: number;
  /** 单次请求最大cpu核数 */
  MaxVcpuPerReq?: number;
  /** 带宽步长 */
  PerBandwidth?: number;
  /** 数据盘步长 */
  PerDataDisk?: number;
  /** 总模块数量 */
  MaxModuleNum?: number;
  /** 是否支持cbs */
  CBSSupported?: boolean;
  /** 磁盘数量限制 */
  DiskNumLimit?: number;
}

/** 节点信息 */
declare interface Node {
  /** zone信息。 */
  ZoneInfo?: ZoneInfo;
  /** 国家信息。 */
  Country?: Country;
  /** 区域信息。 */
  Area?: Area;
  /** 省份信息。 */
  Province?: Province;
  /** 城市信息。 */
  City?: City;
  /** Region信息。 */
  RegionInfo?: RegionInfo;
  /** 运营商列表。 */
  ISPSet?: ISP[];
  /** 运营商数量。 */
  ISPNum?: number;
  /** 节点是否支持LB */
  LBSupported?: boolean;
}

/** 节点实例数量信息 */
declare interface NodeInstanceNum {
  /** 节点数量 */
  NodeNum: number;
  /** 实例数量 */
  InstanceNum: number;
}

/** 操作Action */
declare interface OperatorAction {
  /** 可执行操作 */
  Action: string;
  /** 编码Code */
  Code: string | null;
  /** 具体信息 */
  Message: string | null;
}

/** 操作系统支持的类型。 */
declare interface OsVersion {
  /** 操作系统类型 */
  OsName: string;
  /** 支持的操作系统版本 */
  OsVersions: string[] | null;
  /** 支持的操作系统架构 */
  Architecture: string[] | null;
}

/** 一组相互关联的装箱配额，以实例类型的优先级排序，优先级高的在前 */
declare interface PackingQuotaGroup {
  /** 可用区 */
  Zone: string;
  /** 可用区id */
  ZoneId: number;
  /** ISP id */
  ISPId: string;
  /** 一组相互关联的装箱配额 */
  PackingQuotaInfos: PackingQuotaInfo[];
}

/** 一组相关联的装箱配额信息 */
declare interface PackingQuotaInfo {
  /** 实例类型 */
  InstanceType: string;
  /** 装箱配额 */
  PackingQuota: number;
}

/** 峰值信息 */
declare interface PeakBase {
  /** CPU峰值 */
  PeakCpuNum: number;
  /** 内存峰值 */
  PeakMemoryNum: number;
  /** 硬盘峰值 */
  PeakStorageNum: number;
  /** 记录时间 */
  RecordTime: string;
}

/** PeakFamilyInfo 按机型类别分类的cpu等数据的峰值信息 */
declare interface PeakFamilyInfo {
  /** 机型类别信息。 */
  InstanceFamily: InstanceFamilyTypeConfig;
  /** 基础数据峰值信息。 */
  PeakBaseSet: PeakBase[];
}

/** 峰值网络数据 */
declare interface PeakNetwork {
  /** 记录时间。 */
  RecordTime: string;
  /** 入带宽数据。 */
  PeakInNetwork: string;
  /** 出带宽数据。 */
  PeakOutNetwork: string;
  /** 计费带宽。单位bps */
  ChargeNetwork: string;
}

/** region维度的网络峰值信息 */
declare interface PeakNetworkRegionInfo {
  /** region信息 */
  Region: string;
  /** 网络峰值集合 */
  PeakNetworkSet: PeakNetwork[] | null;
}

/** 物理位置信息 */
declare interface PhysicalPosition {
  /** 机位 */
  PosId?: string | null;
  /** 机架 */
  RackId?: string | null;
  /** 交换机 */
  SwitchId?: string | null;
}

/** 描述了实例的抽象位置，包括其所在的可用区，所属的项目，以及所属的独享集群的ID和名字。 */
declare interface Placement {
  /** 云硬盘所属的[可用区](/document/product/213/15753)。该参数也可以通过调用 [DescribeZones](/document/product/213/15707) 的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 围笼Id。作为入参时，表示对指定的CageId的资源进行操作，可为空。 作为出参时，表示资源所属围笼ID，可为空。 */
  CageId?: string | null;
  /** 实例所属项目ID。该参数可以通过调用 [DescribeProject](/document/api/378/4400) 的返回值中的 projectId 字段来获取。不填为默认项目。 */
  ProjectId?: number;
  /** 独享集群名字。作为入参时，忽略。作为出参时，表示云硬盘所属的独享集群名，可为空。 */
  CdcName?: string | null;
  /** 实例所属的独享集群ID。作为入参时，表示对指定的CdcId独享集群的资源进行操作，可为空。 作为出参时，表示资源所属的独享集群的ID，可为空。 */
  CdcId?: string | null;
}

/** 描述实例的位置相关信息。 */
declare interface Position {
  /** 实例所在的Zone的信息。 */
  ZoneInfo: ZoneInfo;
  /** 实例所在的国家的信息。 */
  Country: Country;
  /** 实例所在的Area的信息。 */
  Area: Area;
  /** 实例所在的省份的信息。 */
  Province: Province;
  /** 实例所在的城市的信息。 */
  City: City;
  /** 实例所在的Region的信息。 */
  RegionInfo: RegionInfo;
  /** 实例是否支持ipv6 */
  Ipv6Supported?: boolean | null;
}

/** 描述cpu,内存等维度的价格 */
declare interface PriceDetail {
  /** 表示折扣，20 表示20%，打2折 */
  Discount: number;
  /** 打折后价格，单位分 */
  DiscountPrice: number;
  /** 折扣前价格，单位分 */
  OriginalPrice: number;
}

/** 实例的内网ip相关信息。 */
declare interface PrivateIPAddressInfo {
  /** 实例的内网ip。 */
  PrivateIPAddress: string | null;
}

/** 内网IP信息 */
declare interface PrivateIpAddressSpecification {
  /** 内网IP地址。 */
  PrivateIpAddress: string;
  /** 是否是主IP。 */
  Primary?: boolean | null;
  /** 公网IP地址。 */
  PublicIpAddress?: string;
  /** EIP实例ID，例如：eip-11112222。 */
  AddressId?: string;
  /** 内网IP描述信息。 */
  Description?: string;
  /** 公网IP是否被封堵。 */
  IsWanIpBlocked?: boolean | null;
  /** IP状态：PENDING：生产中MIGRATING：迁移中DELETING：删除中AVAILABLE：可用的 */
  State?: string;
}

/** 省份信息 */
declare interface Province {
  /** 省份Id */
  ProvinceId: string;
  /** 省份名称 */
  ProvinceName: string;
}

/** 实例的公网ip相关信息。 */
declare interface PublicIPAddressInfo {
  /** 计费模式。 */
  ChargeMode: string;
  /** 实例的公网ip。 */
  PublicIPAddress: string;
  /** 实例的公网ip所属的运营商。 */
  ISP: ISP;
  /** 实例的最大出带宽上限，单位为Mbps。 */
  MaxBandwidthOut: number;
  /** 实例的最大入带宽上限，单位为Mbps。 */
  MaxBandwidthIn: number;
}

/** Region和RegionName */
declare interface RegionInfo {
  /** Region */
  Region: string;
  /** Region名称 */
  RegionName: string;
  /** RegionID */
  RegionId: number;
}

/** 路由策略 */
declare interface Route {
  /** 目的IPv4网段 */
  DestinationCidrBlock?: string;
  /** 下一跳类型NORMAL_CVM：普通云服务器； */
  GatewayType?: string;
  /** 下一跳地址这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址当 GatewayType 为 EIP 时，GatewayId 固定值 '0' */
  GatewayId?: string;
  /** 路由策略唯一ID */
  RouteItemId?: string;
  /** 路由策略描述 */
  RouteDescription?: string;
  /** 是否启用 */
  Enabled?: boolean;
  /** 路由类型，目前我们支持的类型有：USER：用户路由；NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；CCN：云联网路由，系统默认下发，不可编辑与删除。用户只能添加和操作 USER 类型的路由。 */
  RouteType?: string;
  /** 路由策略ID。IPv4路由策略ID是有意义的值，IPv6路由策略是无意义的值0。后续建议完全使用字符串唯一ID `RouteItemId`操作路由策略 */
  RouteId?: number;
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId?: string;
}

/** 路由冲突对象 */
declare interface RouteConflict {
  /** 路由表实例ID */
  RouteTableId?: string;
  /** 要检查的与之冲突的目的端 */
  DestinationCidrBlock: string;
  /** 冲突的路由策略列表 */
  ConflictSet: Route[] | null;
}

/** 路由表 */
declare interface RouteTable {
  /** VPC实例ID */
  VpcId?: string;
  /** 路由表实例ID */
  RouteTableId?: string;
  /** 路由表名称 */
  RouteTableName?: string;
  /** 路由表关联关系 */
  AssociationSet?: RouteTableAssociation[] | null;
  /** IPv4路由策略集合 */
  RouteSet?: Route[] | null;
  /** 是否默认路由表 */
  Main?: boolean;
  /** 创建时间 */
  CreatedTime?: string;
}

/** 路由表关联关系 */
declare interface RouteTableAssociation {
  /** 子网实例ID */
  SubnetId?: string;
  /** 路由表实例ID */
  RouteTableId?: string;
}

/** 转发规则及健康状态列表 */
declare interface RuleHealth {
  /** 本规则上绑定的后端的健康检查状态 */
  Targets: TargetHealth[] | null;
}

/** IP直通相关的信息 */
declare interface RunEIPDirectServiceEnabled {
  /** 是否开通IP直通。取值范围：TRUE：表示开通IP直通FALSE：表示不开通IP直通默认取值：TRUE。windows镜像目前不支持IP直通。 */
  Enabled?: boolean;
}

/** 云监控服务 */
declare interface RunMonitorServiceEnabled {
  /** 是否开启。 */
  Enabled?: boolean;
}

/** 云镜服务； */
declare interface RunSecurityServiceEnabled {
  /** 是否开启。 */
  Enabled?: boolean;
  /** 云镜版本：0 基础版，1 专业版。目前仅支持基础版 */
  Version?: number;
}

/** 安全组对象 */
declare interface SecurityGroup {
  /** 安全组实例ID，例如：esg-ohuuioma。 */
  SecurityGroupId: string;
  /** 安全组名称，可任意命名，但不得超过60个字符。 */
  SecurityGroupName: string;
  /** 安全组备注，最多100个字符。 */
  SecurityGroupDesc: string;
  /** 是否是默认安全组，默认安全组不支持删除。 */
  IsDefault?: boolean;
  /** 安全组创建时间。 */
  CreatedTime?: string;
  /** 标签键值对。 */
  TagSet?: Tag[];
}

/** 安全组关联的资源统计 */
declare interface SecurityGroupAssociationStatistics {
  /** 安全组实例ID。 */
  SecurityGroupId: string;
  /** ECM实例数。 */
  ECM: number;
  /** ECM模块数。 */
  Module: number;
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

/** 用户安全组配额限制 */
declare interface SecurityGroupLimitSet {
  /** 可创建安全组总数 */
  SecurityGroupLimit: number;
  /** 安全组下的最大规则数 */
  SecurityGroupPolicyLimit: number;
  /** 安全组下嵌套安全组规则数 */
  ReferedSecurityGroupLimit: number;
  /** 单安全组关联实例数 */
  SecurityGroupInstanceLimit: number;
  /** 实例关联安全组数 */
  InstanceSecurityGroupLimit: number;
  /** 单安全组关联的模块数 */
  SecurityGroupModuleLimit: number;
  /** 模块关联的安全组数 */
  ModuleSecurityGroupLimit: number;
}

/** 安全组规则对象 */
declare interface SecurityGroupPolicy {
  /** 安全组规则索引号 */
  PolicyIndex?: number;
  /** 协议, 取值: TCP,UDP, ICMP。 */
  Protocol?: string;
  /** 端口(all, 离散port, range)。 */
  Port?: string;
  /** 协议端口ID或者协议端口组ID。ServiceTemplate和Protocol+Port互斥。 */
  ServiceTemplate?: ServiceTemplateSpecification;
  /** 网段或IP(互斥)。 */
  CidrBlock?: string;
  /** 安全组实例ID，例如：esg-ohuuioma。 */
  SecurityGroupId?: string;
  /** IP地址ID或者ID地址组ID。 */
  AddressTemplate?: AddressTemplateSpecification;
  /** ACCEPT 或 DROP。 */
  Action?: string;
  /** 安全组规则描述。 */
  PolicyDescription?: string;
  /** 修改时间，例如 2020-07-22 19：27：23 */
  ModifyTime?: string | null;
  /** 网段或IPv6(互斥)。 */
  Ipv6CidrBlock?: string | null;
}

/** 安全组规则集合 */
declare interface SecurityGroupPolicySet {
  /** 安全组规则当前版本。用户每次更新安全规则版本会自动加1，防止更新的路由规则已过期，不填不考虑冲突。 */
  Version?: string;
  /** 出站规则。其中出站规则和入站规则必须选一个。 */
  Egress?: SecurityGroupPolicy[];
  /** 入站规则。其中出站规则和入站规则必须选一个。 */
  Ingress?: SecurityGroupPolicy[];
}

/** 协议端口模板 */
declare interface ServiceTemplateSpecification {
  /** 协议端口ID，例如：eppm-f5n1f8da。 */
  ServiceId: string;
  /** 协议端口组ID，例如：eppmg-f5n1f8da。 */
  ServiceGroupId: string;
}

/** Module的简要信息 */
declare interface SimpleModule {
  /** 模块ID */
  ModuleId: string;
  /** 模块名称 */
  ModuleName: string;
}

/** 描述了快照的详细信息 */
declare interface Snapshot {
  /** 快照所在的位置。 */
  Placement?: Placement;
  /** 是否为跨地域复制的快照。取值范围：true：表示为跨地域复制的快照。false:本地域的快照。 */
  CopyFromRemote: boolean;
  /** 是否为永久快照。取值范围：true：永久快照false：非永久快照。 */
  IsPermanent?: boolean;
  /** 快照名称，用户自定义的快照别名。调用[ModifySnapshotAttribute](/document/product/362/15650)可修改此字段。 */
  SnapshotName?: string;
  /** 快照创建进度百分比，快照创建成功后此字段恒为100。 */
  Percent?: number;
  /** 快照关联的镜像列表。 */
  Images: Image[];
  /** 快照当前被共享数。 */
  ShareReference: number;
  /** 快照类型，目前该项取值可以为PRIVATE_SNAPSHOT或者SHARED_SNAPSHOT */
  SnapshotType: string;
  /** 创建此快照的云硬盘大小，单位GB。 */
  DiskSize?: number;
  /** 创建此快照的云硬盘ID。 */
  DiskId?: string;
  /** 快照正在跨地域复制的目的地域，默认取值为[]。 */
  CopyingToRegions: string[];
  /** 快照ID。 */
  SnapshotId?: string;
  /** 创建此快照的云硬盘类型。取值范围：SYSTEM_DISK：系统盘DATA_DISK：数据盘。 */
  DiskUsage?: string;
  /** 是否为加密盘创建的快照。取值范围：true：该快照为加密盘创建的false:非加密盘创建的快照。 */
  Encrypt?: boolean;
  /** 快照的创建时间。 */
  CreateTime?: string;
  /** 快照关联的镜像个数。 */
  ImageCount: number;
  /** 快照的状态。取值范围：NORMAL：正常CREATING：创建中ROLLBACKING：回滚中COPYING_FROM_REMOTE：跨地域复制中CHECKING_COPIED：复制校验中TORECYCLE：待回收。 */
  SnapshotState?: string;
  /** 快照的到期时间。 */
  DeadlineTime: string;
  /** 快照开始共享的时间。 */
  TimeStartShare: string | null;
}

/** 镜像来源信息 */
declare interface SrcImage {
  /** 镜像id */
  ImageId: string;
  /** 镜像名称 */
  ImageName: string;
  /** 系统名称 */
  ImageOsName: string;
  /** 镜像描述 */
  ImageDescription: string;
  /** 区域 */
  Region: string;
  /** 区域ID */
  RegionID: number;
  /** 区域名称 */
  RegionName: string;
  /** 来源实例名称 */
  InstanceName: string;
  /** 来源实例ID */
  InstanceId: string;
  /** 来源镜像类型 */
  ImageType: string;
}

/** 子网对象 */
declare interface Subnet {
  /** VPC实例ID。 */
  VpcId?: string;
  /** 子网实例ID，例如：subnet-bthucmmy。 */
  SubnetId?: string;
  /** 子网名称。 */
  SubnetName?: string;
  /** 子网的 IPv4 CIDR。 */
  CidrBlock?: string;
  /** 是否默认子网。 */
  IsDefault?: boolean;
  /** 是否开启广播。 */
  EnableBroadcast?: boolean;
  /** 路由表实例ID，例如：rtb-l2h8d7c2。 */
  RouteTableId?: string;
  /** 创建时间。 */
  CreatedTime?: string;
  /** 可用IP数。 */
  AvailableIpAddressCount?: number;
  /** 子网的 IPv6 CIDR。 */
  Ipv6CidrBlock?: string;
  /** 关联ACLID */
  NetworkAclId?: string;
  /** 是否为 SNAT 地址池子网。 */
  IsRemoteVpcSnat?: boolean;
  /** 标签键值对。 */
  TagSet?: Tag[] | null;
  /** 所在区域 */
  Zone?: string;
  /** 可用区名称 */
  ZoneName?: string | null;
  /** 实例数量 */
  InstanceCount?: number | null;
  /** VPC的 IPv4 CIDR。 */
  VpcCidrBlock?: string | null;
  /** VPC的 IPv6 CIDR。 */
  VpcIpv6CidrBlock?: string | null;
  /** 地域 */
  Region?: string | null;
  /** 运营商类型。'CMCC'-中国移动, 'CTCC'-中国电信, 'CUCC'-中国联调 */
  ISPType?: string | null;
}

/** 用于描述系统盘。 */
declare interface SystemDisk {
  /** 硬盘类型。取值范围：- LOCAL_BASIC：本地硬盘；- CLOUD_PREMIUM：高性能云硬盘；默认取值：CLOUD_BASIC。 */
  DiskType?: string;
  /** 硬盘ID。此参数暂不可用。 */
  DiskId?: string;
  /** 硬盘容量大小。单位GB。 */
  DiskSize?: number;
}

/** 标签信息。 */
declare interface Tag {
  /** 标签健。 */
  Key: string | null;
  /** 标签值。 */
  Value: string | null;
}

/** 标签信息。 */
declare interface TagInfo {
  /** 标签的键。 */
  TagKey?: string;
  /** 标签的值。 */
  TagValue?: string;
}

/** 资源类型的Tag */
declare interface TagSpecification {
  /** 资源类型，目前仅支持"instance"、"module" */
  ResourceType: string;
  /** 标签列表 */
  Tags: Tag[];
}

/** 负责均衡后端目标 */
declare interface Target {
  /** 后端服务的监听端口 */
  Port?: number | null;
  /** 子机ID */
  InstanceId?: string | null;
  /** 后端服务的转发权重，取值范围：[0, 100]，默认为 10。 */
  Weight?: number | null;
  /** 绑定弹性网卡时需要传入此参数，代表弹性网卡的IP，弹性网卡必须先绑定至子机，然后才能绑定到负载均衡实例。注意：参数 InstanceId 和 EniIp 只能传入一个且必须传入一个。 */
  EniIp?: string | null;
}

/** 后端的健康检查状态 */
declare interface TargetHealth {
  /** Target的内网IP */
  IP: string | null;
  /** Target绑定的端口 */
  Port: number | null;
  /** 当前健康状态，true：健康，false：不健康（包括尚未开始探测、探测中、状态异常等几种状态）。只有处于健康状态（且权重大于0），负载均衡才会向其转发流量。 */
  HealthStatus: boolean | null;
  /** Target的实例ID */
  TargetId: string | null;
  /** 当前健康状态的详细信息。如：Alive、Dead、Unknown、Close。Alive状态为健康，Dead状态为异常，Unknown状态包括尚未开始探测、探测中、状态未知，Close为未配置健康检查。 */
  HealthStatusDetail: string | null;
}

/** 目标和权重的描述信息 */
declare interface TargetsWeightRule {
  /** 负载均衡监听器 ID */
  ListenerId?: string | null;
  /** 要修改权重的后端机器列表 */
  Targets?: Target[] | null;
  /** 后端服务新的转发权重，取值范围：0~100。 */
  Weight?: number | null;
}

/** 任务查询 */
declare interface TaskInput {
  /** 操作名，即API名称，比如：CreateImage */
  Operation: string;
  /** 任务id */
  TaskId: string;
}

/** 任务查询出参 */
declare interface TaskOutput {
  /** 任务id */
  TaskId: string;
  /** 状态描述 */
  Message: string;
  /** 状态值，SUCCESS/FAILED/OPERATING */
  Status: string;
  /** 任务提交时间 */
  AddTime: string;
  /** 任务结束时间 */
  EndTime: string;
  /** 操作名 */
  Operation: string;
}

/** 私有网络相关信息配置。 */
declare interface VirtualPrivateCloud {
  /** 私有网络ID，形如vpc-xxx。 */
  VpcId: string;
  /** 私有网络子网ID，形如subnet-xxx。 */
  SubnetId: string;
  /** 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：TRUE：表示用作公网网关FALSE：表示不用作公网网关默认取值：FALSE。 */
  AsVpcGateway?: boolean;
  /** 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。 */
  PrivateIpAddresses?: string[];
  /** 为弹性网卡指定随机生成的 IPv6 地址数量。 */
  Ipv6AddressCount?: number;
  /** runInstances接口创建三网ipv6地址使用 */
  Ipv6SubnetIds?: string[] | null;
}

/** 私有网络(VPC) 对象。 */
declare interface VpcInfo {
  /** VPC名称。 */
  VpcName?: string;
  /** VPC实例ID，例如：vpc-azd4dt1c。 */
  VpcId?: string;
  /** VPC的IPv4 CIDR。 */
  CidrBlock?: string;
  /** 是否默认VPC。 */
  IsDefault?: boolean;
  /** 是否开启组播。 */
  EnableMulticast?: boolean;
  /** 创建时间。 */
  CreatedTime?: string;
  /** DNS列表。 */
  DnsServerSet?: string[] | null;
  /** DHCP域名选项值。 */
  DomainName?: string;
  /** DHCP选项集ID。 */
  DhcpOptionsId?: string;
  /** 是否开启DHCP。 */
  EnableDhcp?: boolean;
  /** VPC的IPv6 CIDR。 */
  Ipv6CidrBlock?: string;
  /** 标签键值对 */
  TagSet?: Tag[] | null;
  /** 辅助CIDR */
  AssistantCidrSet?: AssistantCidr[] | null;
  /** 地域 */
  Region?: string;
  /** 描述 */
  Description?: string;
  /** 地域中文名 */
  RegionName?: string;
  /** 包含子网数量 */
  SubnetCount?: number;
  /** 包含实例数量 */
  InstanceCount?: number;
  /** ipv6运营商 */
  Ipv6ISP?: string | null;
  /** 多运营商IPv6 Cidr Block。 */
  Ipv6CidrBlockSet?: ISPIPv6CidrBlock[] | null;
}

/** Zone信息 */
declare interface ZoneInfo {
  /** ZoneId */
  ZoneId: number;
  /** ZoneName */
  ZoneName: string;
  /** Zone */
  Zone: string;
}

/** 实例可用区及对应的实例创建数目及运营商的组合； */
declare interface ZoneInstanceCountISP {
  /** 创建实例的可用区。 */
  Zone: string;
  /** 在当前可用区创建的实例数目。 */
  InstanceCount: number;
  /** 运营商如下：CTCC：中国电信CUCC：中国联通CMCC：中国移动CMCC;CUCC;CTCC：三网；三网需要开通白名单，请直接联系腾讯云客服。 */
  ISP: string;
  /** 指定私有网络编号，SubnetId与VpcId必须同时指定或不指定 */
  VpcId?: string;
  /** 指定子网编号，SubnetId与VpcId必须同时指定或不指定 */
  SubnetId?: string;
  /** 指定主网卡内网IP。条件：SubnetId与VpcId必须同时指定，并且IP数量与InstanceCount相同，多IP主机副网卡内网IP在相同子网内通过DHCP获取。 */
  PrivateIpAddresses?: string[];
  /** 为弹性网卡指定随机生成的IPv6地址数量，单网情况下是1，单网需要ISP 只能为单网运营商，三网情况3 */
  Ipv6AddressCount?: number;
  /** 指定创建三网ipv6地址，使用的subnet数组，只创建ipv4不创建ipv6和单网ipv6子网依然使用SubnetId字段；该数组必须且仅支持传入三个不同的子网，并且这三个子网各自分配了电信、联通、移动三个运营商的其中一个IPV6 CIDR网段 */
  Ipv6SubnetIds?: string[];
}

/** Zone的实例信息 */
declare interface ZoneInstanceInfo {
  /** Zone名称 */
  ZoneName: string;
  /** 实例数量 */
  InstanceNum: number;
}

declare interface AllocateAddressesRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** EIP数量。默认值：1。 */
  AddressCount?: number;
  /** CMCC：中国移动CTCC：中国电信CUCC：中国联通 */
  InternetServiceProvider?: string;
  /** 1 Mbps 至 5000 Mbps，默认值：1 Mbps。 */
  InternetMaxBandwidthOut?: number;
  /** 需要关联的标签列表。 */
  Tags?: Tag[];
  /** 要绑定的实例 ID。 */
  InstanceId?: string;
  /** 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。 */
  NetworkInterfaceId?: string;
  /** 要绑定的内网 IP。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIpAddress ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIpAddress 是指定的 NetworkInterfaceId 上的一个内网 IP。指定弹性网卡的内网 IP 可通过DescribeNetworkInterfaces接口返回值中的privateIpAddress获取。 */
  PrivateIpAddress?: string;
}

declare interface AllocateAddressesResponse {
  /** 申请到的 EIP 的唯一 ID 列表。 */
  AddressSet: string[] | null;
  /** 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AllocateIpv6AddressesBandwidthRequest {
  /** ECM 地域。 */
  EcmRegion: string;
  /** 需要开通公网访问能力的IPV6地址。 */
  Ipv6Addresses: string[];
  /** 带宽，单位Mbps，默认是1Mbps。 */
  InternetMaxBandwidthOut?: number;
  /** 网络计费模式，当前支持 BANDWIDTH_PACKAGE。 */
  InternetChargeType?: string;
}

declare interface AllocateIpv6AddressesBandwidthResponse {
  /** 弹性公网 IPV6 的唯一 ID 列表。 */
  AddressSet: string[] | null;
  /** 异步任务TaskId。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssignIpv6AddressesRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** 弹性网卡实例ID，形如：eni-1snva0vd。目前只支持主网卡上分配。 */
  NetworkInterfaceId: string;
  /** 指定的IPv6地址列表，单次最多指定10个。与入参Ipv6AddressCount合并计算配额。与Ipv6AddressCount必填一个。 */
  Ipv6Addresses?: Ipv6Address[];
  /** 自动分配IPv6地址个数，内网IP地址个数总和不能超过配数。与入参Ipv6Addresses合并计算配额。与Ipv6Addresses必填一个。 */
  Ipv6AddressCount?: number;
  /** ipv6运营商如下：CTCC：中国电信CUCC：中国联通CMCC：中国移动 */
  ISPType?: string;
  /** 是否跳过校验一个网卡只能分配一个IPv6 CIDR。该字段通常为true（用于兼容存量子机只有一个地址的情形）。 */
  SkipCheckIPv6Address?: boolean;
  /** 是否跳过自动开通公网带宽。通常为true(根据运营系统的用户配置来决定是否自动开通，以支持当前子机购买时的行为）。 */
  SkipAllocateBandwidth?: boolean;
  /** 该字段没有使用（已过期）。 */
  Ipv6ISP?: string;
}

declare interface AssignIpv6AddressesResponse {
  /** 分配给弹性网卡的IPv6地址列表。 */
  Ipv6AddressSet?: Ipv6Address[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssignIpv6CidrBlockRequest {
  /** `VPC`实例`ID`，形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** 网络运营商类型 'CMCC'-中国移动, 'CTCC'-中国电信, 'CUCC'-中国联调 */
  ISPType: string;
  /** ECM地域。 */
  EcmRegion?: string;
}

declare interface AssignIpv6CidrBlockResponse {
  /** 分配的 `IPv6` 网段。形如：`3402:4e00:20:1000::/56`。 */
  Ipv6CidrBlock?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssignIpv6CidrBlocksRequest {
  /** `VPC`实例`ID`，形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** 网络运营商类型 取值范围:'CMCC'-中国移动, 'CTCC'-中国电信, 'CUCC'-中国联调 */
  ISPTypes: ISPTypeItem[];
  /** ECM地域。 */
  EcmRegion?: string;
}

declare interface AssignIpv6CidrBlocksResponse {
  /** IPv6网段和所属运营商。 */
  IPv6CidrBlockSet?: ISPIPv6CidrBlock[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssignIpv6SubnetCidrBlockRequest {
  /** 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** 分配 `IPv6` 子网段列表。 */
  Ipv6SubnetCidrBlocks: Ipv6SubnetCidrBlock[];
  /** ECM地域。 */
  EcmRegion?: string;
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
  /** ECM 地域，形如ap-xian-ecm。 */
  EcmRegion: string;
  /** 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。 */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  /** 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数 */
  SecondaryPrivateIpAddressCount?: number;
}

declare interface AssignPrivateIpAddressesResponse {
  /** 内网IP详细信息。 */
  PrivateIpAddressSet?: PrivateIpAddressSpecification[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateAddressRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。 */
  AddressId: string;
  /** 要绑定的实例 ID。 */
  InstanceId?: string;
  /** 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。 */
  NetworkInterfaceId?: string;
  /** 要绑定的内网 IP。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIpAddress ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIpAddress 是指定的 NetworkInterfaceId 上的一个内网 IP。指定弹性网卡的内网 IP 可通过DescribeNetworkInterfaces接口返回值中的privateIpAddress获取。 */
  PrivateIpAddress?: string;
}

declare interface AssociateAddressResponse {
  /** 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateSecurityGroupsRequest {
  /** 要绑定的安全组ID，类似esg-efil73jd，只支持绑定单个安全组。 */
  SecurityGroupIds: string[];
  /** 被绑定的实例ID，类似ein-lesecurk，支持指定多个实例，每次请求批量实例的上限为100。 */
  InstanceIds: string[];
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachDisksRequest {
  /** 云服务器实例ID。云盘将被挂载到此云服务器上，通过[DescribeInstances](/document/product/213/15728)接口查询。 */
  InstanceId: string;
  /** 将要被挂载的弹性云盘ID。通过[DescribeDisks](/document/product/362/16315)接口查询。单次最多可挂载10块弹性云盘。 */
  DiskIds: string[];
  /** 可选参数，不传该参数则仅执行挂载操作。传入`True`时，会在挂载成功后将云硬盘设置为随云主机销毁模式，仅对按量计费云硬盘有效。 */
  DeleteWithInstance?: boolean;
  /** 可选参数，用于控制云盘挂载时使用的挂载模式，目前仅对黑石裸金属机型有效。取值范围：PFVF */
  AttachMode?: string;
}

declare interface AttachDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 实例ID。形如：ein-r8hr2upy。 */
  InstanceId: string;
  /** ECM 地域，形如ap-xian-ecm。 */
  EcmRegion: string;
}

declare interface AttachNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchDeregisterTargetsRequest {
  /** 负载均衡ID */
  LoadBalancerId: string;
  /** 解绑目标 */
  Targets: BatchTarget[];
}

declare interface BatchDeregisterTargetsResponse {
  /** 解绑失败的监听器ID */
  FailListenerIdSet?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchModifyTargetWeightRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 要批量修改权重的列表 */
  ModifyList: TargetsWeightRule[];
}

declare interface BatchModifyTargetWeightResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface BatchRegisterTargetsRequest {
  /** 负载均衡ID */
  LoadBalancerId: string;
  /** 绑定目标 */
  Targets: BatchTarget[];
}

declare interface BatchRegisterTargetsResponse {
  /** 绑定失败的监听器ID，如为空表示全部绑定成功。 */
  FailListenerIdSet?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDisksRequest {
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目。若不指定项目，将在默认项目下进行创建。 */
  Placement: Placement;
  /** 云硬盘计费类型。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费CDCPAID：独享集群付费各类型价格请参考云硬盘[价格总览](/document/product/362/2413)。 */
  DiskChargeType: string;
  /** 硬盘介质类型。取值范围：CLOUD_BASIC：表示普通云硬盘CLOUD_PREMIUM：表示高性能云硬盘CLOUD_SSD：表示SSD云硬盘CLOUD_HSSD：表示增强型SSD云硬盘CLOUD_TSSD：表示极速型SSD云硬盘。 */
  DiskType: string;
  /** 云盘显示名称。不传则默认为“未命名”。最大长度不能超60个字节。 */
  DiskName?: string;
  /** 云盘绑定的标签。 */
  Tags?: Tag[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数指定包年包月云盘的购买时长、是否设置自动续费等属性。创建预付费云盘该参数必传，创建按小时后付费云盘无需传该参数。 */
  DiskChargePrepaid?: DiskChargePrepaid;
  /** 创建云硬盘数量，不传则默认为1。单次请求最多可创建的云盘数有限制，具体参见[云硬盘使用限制](https://cloud.tencent.com/doc/product/362/5145)。 */
  DiskCount?: number;
  /** 可选参数。使用此参数可给云硬盘购买额外的性能。当前仅支持极速型云盘（CLOUD_TSSD）和增强型SSD云硬盘（CLOUD_HSSD） */
  ThroughputPerformance?: number;
  /** 云硬盘大小，单位为GB。如果传入`SnapshotId`则可不传`DiskSize`，此时新建云盘的大小为快照大小如果传入`SnapshotId`同时传入`DiskSize`，则云盘大小必须大于或等于快照大小云盘大小取值范围参见云硬盘[产品分类](/document/product/362/2353)的说明。 */
  DiskSize?: number;
  /** 可选参数，默认为False。传入True时，云盘将创建为共享型云盘。 */
  Shareable?: boolean;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 传入该参数用于创建加密云盘，取值固定为ENCRYPT。 */
  Encrypt?: string;
  /** 快照ID，如果传入则根据此快照创建云硬盘，快照类型必须为数据盘快照，可通过[DescribeSnapshots](/document/product/362/15647)接口查询快照，见输出参数DiskUsage解释。 */
  SnapshotId?: string;
}

declare interface CreateDisksResponse {
  /** 创建的云硬盘ID列表。 */
  DiskIdSet: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHaVipRequest {
  /** HAVIP所在私有网络ID。 */
  VpcId: string;
  /** HAVIP所在子网ID。 */
  SubnetId: string;
  /** HAVIP名称。 */
  HaVipName: string;
  /** 指定虚拟IP地址，必须在VPC网段内且未被占用。不指定则自动分配。 */
  Vip?: string;
}

declare interface CreateHaVipResponse {
  /** HAVIP对象。 */
  HaVip: HaVip;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateImageRequest {
  /** 镜像名称。 */
  ImageName: string;
  /** 需要制作镜像的实例ID。 */
  InstanceId: string;
  /** 镜像描述。 */
  ImageDescription?: string;
  /** 是否执行强制关机以制作镜像。取值范围：TRUE：表示自动关机后制作镜像FALSE：表示开机状态制作，目前不支持，需要先手动关机默认取值：FALSE。 */
  ForcePoweroff?: string;
}

declare interface CreateImageResponse {
  /** 任务id */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKeyPairRequest {
  /** 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。 */
  KeyName: string;
}

declare interface CreateKeyPairResponse {
  /** 密钥对信息。 */
  KeyPair?: KeyPair;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateListenerRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 要将监听器创建到哪些端口，每个端口对应一个新的监听器 */
  Ports: number[];
  /** 监听器协议： TCP | UDP */
  Protocol: string;
  /** 要创建的监听器名称列表，名称与Ports数组按序一一对应，如不需立即命名，则无需提供此参数 */
  ListenerNames?: string[];
  /** 健康检查相关参数 */
  HealthCheck?: HealthCheck;
  /** 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。 */
  SessionExpireTime?: number;
  /** 监听器转发的方式。可选值：WRR、LEAST_CONN分别表示按权重轮询、最小连接数， 默认为 WRR。 */
  Scheduler?: string;
  /** 会话保持类型。不传或传NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。QUIC_CID只支持UDP协议。 */
  SessionType?: string;
  /** 批量端口段的结束端口，必须和Ports长度一样。 */
  EndPorts?: number[];
}

declare interface CreateListenerResponse {
  /** 创建的监听器的唯一标识数组 */
  ListenerIds: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLoadBalancerRequest {
  /** ECM区域，形如ap-xian-ecm。 */
  EcmRegion: string;
  /** 负载均衡实例的网络类型。目前只支持传入OPEN，表示公网属性。 */
  LoadBalancerType: string;
  /** CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通。 */
  VipIsp: string;
  /** 负载均衡实例的名称，只在创建一个实例的时候才会生效。规则：1-50 个英文、汉字、数字、连接线“-”或下划线“_”。注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。 */
  LoadBalancerName?: string;
  /** 负载均衡后端目标设备所属的网络 ID，如vpc-12345678。 */
  VpcId?: string;
  /** 创建负载均衡的个数，默认值 1。 */
  Number?: number;
  /** 负载均衡的带宽限制等信息。 */
  InternetAccessible?: LoadBalancerInternetAccessible;
  /** 标签。 */
  Tags?: TagInfo[];
  /** 安全组。 */
  SecurityGroups?: string[];
  /** 仅适用于公网负载均衡。IP版本，可取值：IPV4、IPv6FullChain，默认值 IPV4。说明：取值为IPv6FullChain，表示为IPv6版本。 */
  AddressIPVersion?: string;
  /** 在购买IPV6负载均衡实例的情况下，必须指定子网 ID, 此参数必填；IPv4实例不支持该参数。 */
  SubnetId?: string;
}

declare interface CreateLoadBalancerResponse {
  /** 由负载均衡实例ID组成的数组 */
  LoadBalancerIds?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateModuleRequest {
  /** 模块名称，如视频直播模块。限制：模块名称不得以空格开头，长度不得超过60个字符。 */
  ModuleName: string;
  /** 默认带宽，单位：Mbps。范围不得超过带宽上下限，详看[DescribeConfig](https://cloud.tencent.com/document/product/1108/42572)。 */
  DefaultBandWidth: number;
  /** 默认镜像。 */
  DefaultImageId: string;
  /** 机型ID。 */
  InstanceType: string;
  /** 默认系统盘大小，单位：GB，默认大小为50GB。范围不得超过系统盘上下限制，详看[DescribeConfig](https://cloud.tencent.com/document/product/1108/42572)。 */
  DefaultSystemDiskSize: number;
  /** 默认数据盘大小，单位：GB。范围不得超过数据盘范围大小，详看[DescribeConfig](https://cloud.tencent.com/document/product/1108/42572)。 */
  DefaultDataDiskSize: number;
  /** 是否关闭IP直通。取值范围：true：表示关闭IP直通false：表示开通IP直通 */
  CloseIpDirect?: boolean;
  /** 标签列表。 */
  TagSpecification?: TagSpecification[];
  /** 模块默认安全组列表 */
  SecurityGroups?: string[];
  /** 默认入带宽，单位：Mbps。范围不得超过带宽上下限，详看[DescribeConfig](https://cloud.tencent.com/document/product/1108/42572)。 */
  DefaultBandWidthIn?: number;
  /** 是否禁止分配外网IP */
  DisableWanIp?: boolean;
  /** 系统盘信息。 */
  SystemDisk?: SystemDisk;
  /** 数据盘信息。 */
  DataDisks?: DataDisk[];
}

declare interface CreateModuleResponse {
  /** 模块ID，创建模块成功后分配给该模块的ID。 */
  ModuleId?: string;
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
  /** ECM 地域，形如ap-xian-ecm。 */
  EcmRegion: string;
  /** 弹性网卡描述，可任意命名，但不得超过60个字符。 */
  NetworkInterfaceDescription?: string;
  /** 新申请的内网IP地址个数，内网IP地址个数总和不能超过配额数。 */
  SecondaryPrivateIpAddressCount?: number;
  /** 指定绑定的安全组，例如：['sg-1dd51d']。 */
  SecurityGroupIds?: string[];
  /** 指定的内网IP信息，单次最多指定10个。 */
  PrivateIpAddresses?: PrivateIpAddressSpecification[];
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
}

declare interface CreateNetworkInterfaceResponse {
  /** 弹性网卡实例。 */
  NetworkInterface: NetworkInterface;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRouteTableRequest {
  /** 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** 路由表名称，最大长度不能超过60个字节。 */
  RouteTableName: string;
  /** ecm地域 */
  EcmRegion: string;
}

declare interface CreateRouteTableResponse {
  /** 路由表对象 */
  RouteTable: RouteTable;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateRoutesRequest {
  /** 路由表实例ID。 */
  RouteTableId: string;
  /** 要创建的路由策略对象。 */
  Routes: Route[];
}

declare interface CreateRoutesResponse {
  /** 新增的实例个数。 */
  TotalCount: number;
  /** 路由表对象。 */
  RouteTableSet: RouteTable[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateSecurityGroupPoliciesRequest {
  /** 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
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
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
}

declare interface CreateSecurityGroupResponse {
  /** 安全组对象。 */
  SecurityGroup?: SecurityGroup;
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
  /** ECM 地域 */
  EcmRegion: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** IPv6 CIDR */
  IPv6CidrBlock?: string;
}

declare interface CreateSubnetResponse {
  /** 子网对象。 */
  Subnet?: Subnet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateVpcRequest {
  /** vpc名称，最大长度不能超过60个字节。 */
  VpcName: string;
  /** vpc的cidr，只能为10.*.0.0/16，172.[16-31].0.0/16，192.168.0.0/16这三个内网网段内。 */
  CidrBlock: string;
  /** ECM 地域 */
  EcmRegion: string;
  /** 是否开启组播。true: 开启, false: 不开启。暂不支持 */
  EnableMulticast?: string;
  /** DNS地址，最多支持4个，暂不支持 */
  DnsServers?: string[];
  /** 域名，暂不支持 */
  DomainName?: string;
  /** 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}] */
  Tags?: Tag[];
  /** 描述信息 */
  Description?: string;
  /** 网络运营商类型 取值范围:'CMCC'-中国移动, 'CTCC'-中国电信, 'CUCC'-中国联调 */
  ISPTypes?: ISPTypeItem[];
}

declare interface CreateVpcResponse {
  /** Vpc对象。 */
  Vpc?: VpcInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteHaVipRequest {
  /** HAVIP唯一ID，形如：havip-9o233uri。 */
  HaVipId: string;
}

declare interface DeleteHaVipResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImageRequest {
  /** 镜像ID列表。 */
  ImageIDSet: string[];
}

declare interface DeleteImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteListenerRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 要删除的监听器 ID */
  ListenerId: string;
}

declare interface DeleteListenerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoadBalancerListenersRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 指定删除的监听器ID数组，若不填则删除负载均衡的所有监听器 */
  ListenerIds?: string[];
}

declare interface DeleteLoadBalancerListenersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLoadBalancerRequest {
  /** 要删除的负载均衡实例 ID数组，数组大小最大支持20 */
  LoadBalancerIds?: string[];
}

declare interface DeleteLoadBalancerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteModuleRequest {
  /** 模块ID。如：em-qn46snq8 */
  ModuleId: string;
}

declare interface DeleteModuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** ECM 地域，形如ap-xian-ecm。 */
  EcmRegion: string;
}

declare interface DeleteNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRouteTableRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c */
  RouteTableId: string;
}

declare interface DeleteRouteTableResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略对象。 */
  Routes: Route[];
}

declare interface DeleteRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityGroupPoliciesRequest {
  /** 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组规则集合。一个请求中只能删除单个方向的一条或多条规则。支持指定索引（PolicyIndex） 匹配删除和安全组规则匹配删除两种方式，一个请求中只能使用一种匹配方式。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
}

declare interface DeleteSecurityGroupPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSecurityGroupRequest {
  /** 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
}

declare interface DeleteSecurityGroupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSnapshotsRequest {
  /** 要删除的快照ID列表，可通过[DescribeSnapshots](/document/product/362/15647)查询。 */
  SnapshotIds: string[];
  /** 是否强制删除快照关联的镜像 */
  DeleteBindImages?: boolean;
}

declare interface DeleteSnapshotsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSubnetRequest {
  /** 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。 */
  SubnetId: string;
  /** ECM 地域 */
  EcmRegion: string;
}

declare interface DeleteSubnetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteVpcRequest {
  /** VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。 */
  VpcId: string;
  /** ECM 地域 */
  EcmRegion: string;
}

declare interface DeleteVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddressQuotaRequest {
  /** ECM 地域 */
  EcmRegion: string;
}

declare interface DescribeAddressQuotaResponse {
  /** 账户 EIP 配额信息。 */
  QuotaSet?: EipQuota[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAddressesRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：eip-11112222。参数不支持同时指定AddressIds和Filters。 */
  AddressIds?: string[];
  /** 每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定AddressIds和Filters。详细的过滤条件如下：address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。取值范围：详见EIP状态列表。instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常） */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
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

declare interface DescribeBaseOverviewRequest {
}

declare interface DescribeBaseOverviewResponse {
  /** 模块数量，单位：个 */
  ModuleNum?: number;
  /** 节点数量，单位：个 */
  NodeNum?: number;
  /** cpu核数，单位：个 */
  VcpuNum?: number;
  /** 内存大小，单位：G */
  MemoryNum?: number;
  /** 硬盘大小，单位：G */
  StorageNum?: number;
  /** 昨日网络峰值,单位：M */
  NetworkNum?: number;
  /** 实例数量，单位：台 */
  InstanceNum?: number;
  /** 运行中数量，单位：台 */
  RunningNum?: number;
  /** 安全隔离数量，单位：台 */
  IsolationNum?: number;
  /** 过期实例数量，单位：台 */
  ExpiredNum?: number;
  /** 即将过期实例数量，单位：台 */
  WillExpireNum?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeConfigRequest {
}

declare interface DescribeConfigResponse {
  /** 网络带宽硬盘大小的范围信息。 */
  NetworkStorageRange: NetworkStorageRange;
  /** 镜像操作系统白名单。 */
  ImageWhiteSet: string[] | null;
  /** 网络限额信息。 */
  InstanceNetworkLimitConfigs: InstanceNetworkLimitConfig[] | null;
  /** 镜像限额信息。 */
  ImageLimits: ImageLimitConfig | null;
  /** 默认是否IP直通，用于模块创建，虚机购买等具有直通参数场景时的默认参数。 */
  DefaultIPDirect: boolean;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCustomImageTaskRequest {
  /** 支持key,value查询task-id: 异步任务IDimage-id: 镜像IDimage-name: 镜像名称 */
  Filters: Filter[];
}

declare interface DescribeCustomImageTaskResponse {
  /** 导入任务详情 */
  ImageTaskSet?: ImageTask[] | null;
  /** 总数 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDefaultSubnetRequest {
  /** ECM地域 */
  EcmRegion: string;
  /** ECM可用区 */
  Zone: string;
}

declare interface DescribeDefaultSubnetResponse {
  /** 默认子网信息，若无子网，则为空数据。 */
  Subnet?: Subnet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisksRequest {
  /** 过滤条件。参数不支持同时指定`DiskIds`和`Filters`。disk-usage - Array of String - 是否必填：否 -（过滤条件）按云盘类型过滤。 (SYSTEM_DISK：表示系统盘 | DATA_DISK：表示数据盘)disk-charge-type - Array of String - 是否必填：否 -（过滤条件）按照云硬盘计费模式过滤。 (PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费。)portable - Array of String - 是否必填：否 -（过滤条件）按是否为弹性云盘过滤。 (TRUE：表示弹性云盘 | FALSE：表示非弹性云盘。)project-id - Array of Integer - 是否必填：否 -（过滤条件）按云硬盘所属项目ID过滤。disk-id - Array of String - 是否必填：否 -（过滤条件）按照云硬盘ID过滤。云盘ID形如：`disk-11112222`。disk-name - Array of String - 是否必填：否 -（过滤条件）按照云盘名称过滤。disk-type - Array of String - 是否必填：否 -（过滤条件）按照云盘介质类型过滤。(CLOUD_BASIC：表示普通云硬盘 | CLOUD_PREMIUM：表示高性能云硬盘。| CLOUD_SSD：表示SSD云硬盘 | CLOUD_HSSD：表示增强型SSD云硬盘。| CLOUD_TSSD：表示极速型云硬盘。)disk-state - Array of String - 是否必填：否 -（过滤条件）按照云盘状态过滤。(UNATTACHED：未挂载 | ATTACHING：挂载中 | ATTACHED：已挂载 | DETACHING：解挂中 | EXPANDING：扩容中 | ROLLBACKING：回滚中 | TORECYCLE：待回收。)instance-id - Array of String - 是否必填：否 -（过滤条件）按照云盘挂载的云主机实例ID过滤。可根据此参数查询挂载在指定云主机下的云硬盘。zone - Array of String - 是否必填：否 -（过滤条件）按照[可用区](/document/product/213/15753)过滤。instance-ip-address - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载云主机的内网或外网IP过滤。instance-name - Array of String - 是否必填：否 -（过滤条件）按云盘所挂载的实例名称过滤。tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键进行过滤。tag-value - Array of String - 是否必填：否 -（过滤条件）照标签值进行过滤。tag:tag-key - Array of String - 是否必填：否 -（过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。 */
  Limit?: number;
  /** 云盘列表排序的依据字段。取值范围：CREATE_TIME：依据云盘的创建时间排序DEADLINE：依据云盘的到期时间排序默认按云盘创建时间排序。 */
  OrderField?: string;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。 */
  Offset?: number;
  /** 云盘详情中是否需要返回云盘绑定的定期快照策略ID，TRUE表示需要返回，FALSE表示不返回。 */
  ReturnBindAutoSnapshotPolicy?: boolean;
  /** 按照一个或者多个云硬盘ID查询。云硬盘ID形如：`disk-11112222`，此参数的具体格式可参考API[简介](/document/product/362/15633)的ids.N一节）。参数不支持同时指定`DiskIds`和`Filters`。 */
  DiskIds?: string[];
  /** 输出云盘列表的排列顺序。取值范围：ASC：升序排列DESC：降序排列。 */
  Order?: string;
}

declare interface DescribeDisksResponse {
  /** 符合条件的云硬盘数量。 */
  TotalCount: number;
  /** 云硬盘的详细信息列表。 */
  DiskSet: Disk[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHaVipsRequest {
  /** HAVIP数组，HAVIP唯一ID，形如：havip-9o233uri。 */
  HaVipIds?: string[];
  /** 过滤条件，参数不支持同时指定HaVipIds和Filters。havip-id - String - HAVIP唯一ID，形如：havip-9o233uri。havip-name - String - HAVIP名称。vpc-id - String - HAVIP所在私有网络ID。subnet-id - String - HAVIP所在子网ID。 */
  Filters?: Filter[];
  /** 偏移量，默认值是0。 */
  Offset?: number;
  /** 返回数量，默认值是20，最大是100。 */
  Limit?: number;
  /** Ecm 区域，不填代表全部区域。 */
  EcmRegion?: string;
}

declare interface DescribeHaVipsResponse {
  /** 符合条件的对象数。 */
  TotalCount: number;
  /** HAVIP对象数组。 */
  HaVipSet: HaVip[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageRequest {
  /** 过滤条件，每次请求的Filters的上限为10，详细的过滤条件如下：image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：PRIVATE_IMAGE: 私有镜像 (本账户创建的镜像) PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)instance-type -String - 是否必填: 否 - (过滤条件) 按机型过滤支持的镜像image-name - String - 是否必填：否 - (过滤条件) 按镜像的名称模糊匹配，只能提供一个值image-os - String - 是否必填：否 - (过滤条件) 按镜像系统的名称模糊匹配，只能提供一个值 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。 */
  Limit?: number;
}

declare interface DescribeImageResponse {
  /** 镜像总数 */
  TotalCount?: number;
  /** 镜像数组 */
  ImageSet?: Image[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImportImageOsRequest {
}

declare interface DescribeImportImageOsResponse {
  /** 支持的导入镜像的操作系统类型 */
  ImportImageOsListSupported?: ImageOsList;
  /** 支持的导入镜像的操作系统版本 */
  ImportImageOsVersionSet?: OsVersion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceTypeConfigRequest {
}

declare interface DescribeInstanceTypeConfigResponse {
  /** 总数 */
  TotalCount?: number;
  /** 机型配置信息 */
  InstanceTypeConfigSet?: InstanceTypeConfig[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceVncUrlRequest {
  /** 一个操作的实例ID。可通过DescribeInstances API返回值中的InstanceId获取。 */
  InstanceId: string;
}

declare interface DescribeInstanceVncUrlResponse {
  /** 实例的管理终端地址。 */
  InstanceVncUrl?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesDeniedActionsRequest {
  /** 无 */
  InstanceIdSet: string[];
}

declare interface DescribeInstancesDeniedActionsResponse {
  /** 实例对应的禁止操作 */
  InstanceOperatorSet?: InstanceOperator[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 过滤条件。zone String 是否必填：否 （过滤条件）按照可用区英文标识符过滤。zone-name String 是否必填：否 （过滤条件）按照可用区中文名过滤,支持模糊匹配。module-id String 是否必填：否 （过滤条件）按照模块ID过滤。instance-id String 是否必填：否 （过滤条件）按照实例ID过滤。instance-name String 是否必填：否 （过滤条件）按照实例名称过滤,支持模糊匹配。ip-address String 是否必填：否 （过滤条件）按照实例的内网/公网IP过滤。instance-uuid string 是否必填：否 （过滤条件）按照uuid过滤实例列表。instance-state string 是否必填：否 （过滤条件）按照实例状态更新实例列表。internet-service-provider String 是否必填：否 （过滤条件）按照实例公网IP所属的运营商进行过滤。tag-key String 是否必填：否 （过滤条件）按照标签键进行过滤。tag:tag-key String 是否必填：否 （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。instance-family String 是否必填：否 （过滤条件）按照机型family过滤。module-name String 是否必填：否 （过滤条件）按照模块名称过滤,支持模糊匹配。image-id String 是否必填：否 （过滤条件）按照实例的镜像ID过滤。vpc-id String 是否必填：否 （过滤条件）按照实例的vpc id过滤。subnet-id String 是否必填：否 （过滤条件）按照实例的subnet id过滤。若不传Filters参数则表示查询所有相关的实例信息。单次请求的Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20(如果查询结果数目大于等于20)，最大值为100。 */
  Limit?: number;
  /** 指定排序字段。目前支持的可选值如下timestamp 按实例创建时间排序。注意：目前仅支持按创建时间排序，后续可能会有扩展。如果不传，默认按实例创建时间排序 */
  OrderByField?: string;
  /** 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序 */
  OrderDirection?: number;
}

declare interface DescribeInstancesResponse {
  /** 返回的实例相关信息列表的长度。 */
  TotalCount?: number;
  /** 返回的实例相关信息列表。 */
  InstanceSet?: Instance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeListenersRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 要查询的负载均衡监听器 ID数组 */
  ListenerIds?: string[];
  /** 要查询的监听器协议类型，取值 TCP | UDP */
  Protocol?: string;
  /** 要查询的监听器的端口 */
  Port?: number;
}

declare interface DescribeListenersResponse {
  /** 监听器列表 */
  Listeners?: Listener[] | null;
  /** 总的监听器个数 */
  TotalCount?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalanceTaskStatusRequest {
  /** 请求ID，即接口返回的 RequestId 参数 */
  TaskId: string;
}

declare interface DescribeLoadBalanceTaskStatusResponse {
  /** 任务的当前状态。 0：成功，1：失败，2：进行中。 */
  Status?: number | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLoadBalancersRequest {
  /** 区域。如果不传则默认查询所有区域。 */
  EcmRegion?: string;
  /** 负载均衡实例 ID。 */
  LoadBalancerIds?: string[];
  /** 负载均衡实例的名称。 */
  LoadBalancerName?: string;
  /** 负载均衡实例的 VIP 地址，支持多个。 */
  LoadBalancerVips?: string[];
  /** 负载均衡绑定的后端服务的内网 IP。 */
  BackendPrivateIps?: string[];
  /** 数据偏移量，默认为 0。 */
  Offset?: number;
  /** 返回负载均衡实例的数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 负载均衡是否绑定后端服务，0：没有绑定后端服务，1：绑定后端服务，-1：查询全部。 如果不传则默认查询全部。 */
  WithBackend?: number;
  /** 负载均衡实例所属私有网络唯一ID，如 vpc-bhqkbhdx。 */
  VpcId?: string;
  /** 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。详细的过滤条件如下：tag-key - String - 是否必填：否 - （过滤条件）按照标签的键过滤。 */
  Filters?: Filter[];
  /** 安全组。 */
  SecurityGroup?: string;
}

declare interface DescribeLoadBalancersResponse {
  /** 满足过滤条件的负载均衡实例总数。此数值与入参中的Limit无关。 */
  TotalCount?: number | null;
  /** 返回的负载均衡实例数组。 */
  LoadBalancerSet?: LoadBalancer[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModuleDetailRequest {
  /** 模块ID，如em-qn46snq8。 */
  ModuleId: string;
}

declare interface DescribeModuleDetailResponse {
  /** 模块的详细信息，详细见数据结构中的ModuleInfo。 */
  Module?: Module | null;
  /** 模块的统计信息，详细见数据结构中的ModuleCounterInfo。 */
  ModuleCounter?: ModuleCounter | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModuleRequest {
  /** 过滤条件。module-name - string - 是否必填：否 - （过滤条件）按照模块名称过滤。module-id - string - 是否必填：否 - （过滤条件）按照模块ID过滤。image-id String 是否必填：否 （过滤条件）按照镜像ID过滤。instance-family String 是否必填：否 （过滤条件）按照机型family过滤。security-group-id - string 是否必填：否 - （过滤条件）按照模块绑定的安全组id过滤。每次请求的Filters的上限为10，Filter.Values的上限为5。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。 */
  Limit?: number;
  /** 指定排序字段。目前支持的可选值如下instance-num 按实例数量排序。node-num 按节点数量排序。timestamp 按实例创建时间排序。如果不传，默认按实例创建时间排序 */
  OrderByField?: string;
  /** 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序 */
  OrderDirection?: number;
}

declare interface DescribeModuleResponse {
  /** 符合条件的模块数量。 */
  TotalCount?: number | null;
  /** 模块详情信息的列表。 */
  ModuleItemSet?: ModuleItem[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeMonthPeakNetworkRequest {
  /** 月份时间(xxxx-xx) 如2021-03,默认取当前时间的上一个月份 */
  Month: string;
  /** 过滤条件 */
  Filters?: Filter[];
}

declare interface DescribeMonthPeakNetworkResponse {
  /** 无 */
  MonthNetWorkData: MonthNetwork[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNetworkInterfacesRequest {
  /** 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。 */
  NetworkInterfaceIds?: string[];
  /** 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ein-3nqpdn3i。groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。network-interface-name - String - （过滤条件）网卡实例名称。network-interface-description - String - （过滤条件）网卡实例描述。address-ip - String - （过滤条件）内网IPv4地址。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；次过滤参数为提供时，同时过滤主网卡和辅助网卡。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** ECM 地域，形如ap-xian-ecm。 */
  EcmRegion?: string;
}

declare interface DescribeNetworkInterfacesResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 实例详细信息列表。 */
  NetworkInterfaceSet?: NetworkInterface[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeNodeRequest {
  /** 过滤条件，name取值为： InstanceFamily-实例系列 */
  Filters?: Filter[];
}

declare interface DescribeNodeResponse {
  /** 节点详细信息的列表 */
  NodeSet: Node[] | null;
  /** 所有的节点数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePackingQuotaGroupRequest {
  /** 过滤条件，name取值为：Zone-可用区， InstanceType-实例类型，DataDiskSize - 数据盘大小 */
  Filters?: Filter[];
}

declare interface DescribePackingQuotaGroupResponse {
  /** 装箱配额组 */
  PackingQuotaSet?: PackingQuotaGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePeakBaseOverviewRequest {
  /** 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期，不应与当前日期间隔超过90天。 */
  StartTime?: string;
  /** 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天，不应与当前日期间隔超过90天。当开始与结束间隔不超过30天时返回1小时粒度的数据，否则返回3小时粒度的数据。 */
  EndTime?: string;
}

declare interface DescribePeakBaseOverviewResponse {
  /** 基础峰值列表。 */
  PeakFamilyInfoSet?: PeakFamilyInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePeakNetworkOverviewRequest {
  /** 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期，不应与当前日期间隔超过30天。 */
  StartTime?: string;
  /** 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天，不应与当前日期间隔超过30天。当开始与结束间隔不超过1天时会返回1分钟粒度的数据，不超过7天时返回5分钟粒度的数据，否则返回1小时粒度的数据。 */
  EndTime?: string;
  /** 过滤条件。region String 是否必填：否 （过滤条件）按照region过滤，不支持模糊匹配。注意 region 填上需要查询ecm region才能返回数据。area String 是否必填：否 （过滤条件）按照大区过滤，不支持模糊匹配。大区包括：china-central、china-east等等，可以通过DescribeNode获得所有大区；也可使用ALL_REGION表示所有地区。isp String 是否必填：否 （过滤条件）按照运营商过滤大区流量，运营商包括CTCC、CUCC和CMCC。只和area同时使用，且一次只能指定一种运营商。region和area只应填写一个。 */
  Filters?: Filter[];
  /** 统计周期，单位秒。取值60/300。 */
  Period?: number;
}

declare interface DescribePeakNetworkOverviewResponse {
  /** 网络峰值数组。 */
  PeakNetworkRegionSet: PeakNetworkRegionInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribePriceRunInstanceRequest {
  /** 实例的机型信息 */
  InstanceType: string;
  /** 系统盘信息 */
  SystemDisk: SystemDisk;
  /** 实例个数 */
  InstanceCount: number;
  /** 数据盘信息 */
  DataDisk?: DataDisk[];
  /** 实例计费类型。其中：0，按资源维度后付费，计算当日用量峰值，例如CPU，内存，硬盘等，仅适用于非GNR系列机型；1，按小时后付费，单价：xx元/实例/小时，仅适用于GNR机型，如需开通该计费方式请提工单申请；2，按月后付费，单价：xx元/实例/月，仅适用于GNR机型；该字段不填时，非GNR机型会默认选择0；GNR机型默认选择2。 */
  InstanceChargeType?: number;
}

declare interface DescribePriceRunInstanceResponse {
  /** 实例价格信息 */
  InstancePrice?: InstancesPrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionIpv6AddressesRequest {
  /** ECM 地域，为空时返回所有地域的IPv6地址。 */
  EcmRegion: string;
  /** 详细的过滤条件如下：address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的 ID 过滤。address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。network-interface-id - String - 是否必填：否 - （过滤条件）按照弹性网卡的唯一ID过滤。instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 所绑定的实例 ID 过滤。vpc-id - String - 是否必填：否 - （过滤条件）按照 EIP 所在 VPC 的 ID 进行过滤。address-isp - String - 是否必填：否 - （过滤条件）按照 EIP 的运营商进行过滤。address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态信息进行过滤。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。 */
  Limit?: number;
}

declare interface DescribeRegionIpv6AddressesResponse {
  /** 符合条件的 IPV6 数量。 */
  TotalCount?: number;
  /** IPV6 详细信息列表。 */
  AddressSet?: Address[];
  /** 唯一请求 ID，每次请求都会返回。 */
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
  RouteConflictSet: RouteConflict[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRouteTablesRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableIds?: string[];
  /** 过滤条件，参数不支持同时指定RouteTableIds和Filters。route-table-id - String - （过滤条件）路由表实例ID。route-table-name - String - （过滤条件）路由表名称。vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。association.main - String - （过滤条件）是否主路由表。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 限数 */
  Limit?: number;
  /** ECM 地域，传空或不传表示所有区域 */
  EcmRegion?: string;
}

declare interface DescribeRouteTablesResponse {
  /** 符合条件的实例数量 */
  TotalCount: number;
  /** 路由表列表 */
  RouteTableSet: RouteTable[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupAssociationStatisticsRequest {
  /** 安全实例ID，例如esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。 */
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
  /** 安全组实例ID，例如：esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。 */
  SecurityGroupId: string;
}

declare interface DescribeSecurityGroupPoliciesResponse {
  /** 安全组规则集合。 */
  SecurityGroupPolicySet?: SecurityGroupPolicySet;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSecurityGroupsRequest {
  /** 安全组实例ID，例如：esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。每次请求的实例的上限为100。参数不支持同时指定SecurityGroupIds和Filters。 */
  SecurityGroupIds?: string[];
  /** 过滤条件，参数不支持同时指定SecurityGroupIds和Filters。security-group-id - String - （过滤条件）安全组ID。security-group-name - String - （过滤条件）安全组名称。tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeSecurityGroupsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 安全组对象。 */
  SecurityGroupSet?: SecurityGroup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotsRequest {
  /** 要查询快照的ID列表。参数不支持同时指定`SnapshotIds`和`Filters`。 */
  SnapshotIds?: string[];
  /** 过滤条件。参数不支持同时指定`SnapshotIds`和`Filters`。snapshot-id - Array of String - 是否必填：否 -（过滤条件）按照快照的ID过滤。快照ID形如：`snap-11112222`。snapshot-name - Array of String - 是否必填：否 -（过滤条件）按照快照名称过滤。snapshot-state - Array of String - 是否必填：否 -（过滤条件）按照快照状态过滤。 (NORMAL：正常 | CREATING：创建中 | ROLLBACKING：回滚中。)disk-usage - Array of String - 是否必填：否 -（过滤条件）按创建快照的云盘类型过滤。 (SYSTEM_DISK：代表系统盘 | DATA_DISK：代表数据盘。)project-id - Array of String - 是否必填：否 -（过滤条件）按云硬盘所属项目ID过滤。disk-id - Array of String - 是否必填：否 -（过滤条件）按照创建快照的云硬盘ID过滤。zone - Array of String - 是否必填：否 -（过滤条件）按照[可用区](/document/product/213/15753)过滤。encrypt - Array of String - 是否必填：否 -（过滤条件）按是否加密盘快照过滤。 (TRUE：表示加密盘快照 | FALSE：表示非加密盘快照。)snapshot-type- Array of String - 是否必填：否 -（过滤条件）根据snapshot-type指定的快照类型查询对应的快照。(SHARED_SNAPSHOT：表示共享过来的快照 | PRIVATE_SNAPSHOT：表示自己私有快照。) */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](/document/product/362/15633)中的相关小节。 */
  Limit?: number;
  /** 快照列表排序的依据字段。取值范围：CREATE_TIME：依据快照的创建时间排序默认按创建时间排序。 */
  OrderField?: string;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考API[简介](/document/product/362/15633)中的相关小节。 */
  Offset?: number;
  /** 输出云盘列表的排列顺序。取值范围：ASC：升序排列DESC：降序排列。 */
  Order?: string;
}

declare interface DescribeSnapshotsResponse {
  /** 快照的数量。 */
  TotalCount: number;
  /** 快照的详情列表。 */
  SnapshotSet: Snapshot[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSubnetsRequest {
  /** 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。 */
  SubnetIds?: string[];
  /** 过滤条件，参数不支持同时指定SubnetIds和Filters。subnet-id - String - Subnet实例名称。subnet-name - String - 子网名称。只支持单值的模糊查询。cidr-block - String - 子网网段，形如: 192.168.1.0 。只支持单值的模糊查询。vpc-id - String - VPC实例ID，形如：vpc-f49l6u0z。vpc-cidr-block - String - vpc网段，形如: 192.168.1.0 。只支持单值的模糊查询。region - String - ECM地域zone - String - 可用区。tag-key - String -是否必填：否- 按照标签键进行过滤。ipv6-cidr-block- String - 是否必填：否 - 按照IPv6 CIDR进行过滤。isp-type - String - 是否必填：否 - 按照运营商类型( 如CMCC，CUCC， CTCC)进行过滤。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: string;
  /** 返回数量 */
  Limit?: string;
  /** ECM 地域 */
  EcmRegion?: string;
  /** 排序方式：time时间倒序, default按照网络规划排序 */
  Sort?: string;
}

declare interface DescribeSubnetsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 子网对象。 */
  SubnetSet?: Subnet[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetHealthRequest {
  /** 要查询的负载均衡实例 ID列表 */
  LoadBalancerIds: string[];
}

declare interface DescribeTargetHealthResponse {
  /** 负载均衡实例列表 */
  LoadBalancers?: LoadBalancerHealth[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTargetsRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 监听器 ID列表 */
  ListenerIds?: string[];
  /** 监听器协议类型 */
  Protocol?: number;
  /** 监听器端口 */
  Port?: number;
}

declare interface DescribeTargetsResponse {
  /** 监听器后端绑定的机器信息 */
  Listeners?: ListenerBackend[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskResultRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** 异步任务ID。 */
  TaskId: string;
}

declare interface DescribeTaskResultResponse {
  /** 异步任务ID。 */
  TaskId: string;
  /** 执行结果，包括"SUCCESS", "FAILED", "RUNNING" */
  Result: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskStatusRequest {
  /** 任务描述 */
  TaskSet: TaskInput[];
}

declare interface DescribeTaskStatusResponse {
  /** 任务描述 */
  TaskSet: TaskOutput[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeVpcsRequest {
  /** VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。 */
  VpcIds?: string[];
  /** 过滤条件，参数不支持同时指定VpcIds和Filters。vpc-name - String - VPC实例名称，只支持单值的模糊查询。vpc-id - String - VPC实例ID形如：vpc-f49l6u0z。cidr-block - String - vpc的cidr，只支持单值的模糊查询。region - String - vpc的region。tag-key - String -是否必填：否- 按照标签键进行过滤。tag:tag-key - String - 是否必填：否 - 按照标签键值对进行过滤。ipv6-cidr-block - String - 是否必填：否 - 按照IPv6 CIDR block进行过滤。isp-type - String - 是否必填：否 - 按照运营商（如CMCC, CUCC, CTCC）进行过滤。 */
  Filters?: Filter[];
  /** 偏移量 */
  Offset?: number;
  /** 返回数量 */
  Limit?: number;
  /** 地域 */
  EcmRegion?: string;
  /** 排序方式：time时间倒序, default按照网络规划排序 */
  Sort?: string;
}

declare interface DescribeVpcsResponse {
  /** 符合条件的对象数。 */
  TotalCount?: number;
  /** 私有网络对象。 */
  VpcSet?: VpcInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachDisksRequest {
  /** 将要卸载的云硬盘ID， 通过[DescribeDisks](/document/product/362/16315)接口查询，单次请求最多可卸载10块弹性云盘。 */
  DiskIds: string[];
  /** 对于非共享型云盘，会忽略该参数；对于共享型云盘，该参数表示要从哪个CVM实例上卸载云盘。 */
  InstanceId?: string;
}

declare interface DetachDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachNetworkInterfaceRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 实例ID。形如：ein-hcs7jkg4 */
  InstanceId: string;
  /** ECM 地域，形如ap-xian-ecm。 */
  EcmRegion: string;
}

declare interface DetachNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisableRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略ID。 */
  RouteIds: number[];
}

declare interface DisableRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateAddressRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。 */
  AddressId: string;
  /** 表示解绑 EIP 之后是否分配普通公网 IP。取值范围：TRUE：表示解绑 EIP 之后分配普通公网 IP。FALSE：表示解绑 EIP 之后不分配普通公网 IP。默认取值：FALSE。只有满足以下条件时才能指定该参数：只有在解绑主网卡的主内网 IP 上的 EIP 时才能指定该参数。解绑 EIP 后重新分配普通公网 IP 操作一个账号每天最多操作 10 次；详情可通过 DescribeAddressQuota 接口获取。 */
  ReallocateNormalPublicIp?: boolean;
}

declare interface DisassociateAddressResponse {
  /** 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateInstancesKeyPairsRequest {
  /** 可以通过以下方式获取可用的实例ID：通过登录控制台查询实例ID。通过调用接口 DescribeInstances ，取返回信息中的 InstanceId 获取实例ID。 */
  InstanceIds: string[];
  /** 密钥对ID列表，每次请求批量密钥对的上限为100。密钥对ID形如：skey-11112222。可以通过以下方式获取可用的密钥ID：通过登录控制台查询密钥ID。通过调用接口 DescribeKeyPairs ，取返回信息中的 KeyId 获取密钥对ID。 */
  KeyIds: string[];
  /** 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再解绑密钥。取值范围：TRUE：表示在正常关机失败后进行强制关机。FALSE：表示在正常关机失败后不进行强制关机。默认取值：FALSE。 */
  ForceStop?: boolean;
}

declare interface DisassociateInstancesKeyPairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 要解绑的安全组ID，类似esg-efil73jd，只支持解绑单个安全组。 */
  SecurityGroupIds: string[];
  /** 被解绑的实例ID，类似ein-lesecurk，支持指定多个实例 。 */
  InstanceIds: string[];
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnableRoutesRequest {
  /** 路由表唯一ID。 */
  RouteTableId: string;
  /** 路由策略ID。 */
  RouteIds: number[];
}

declare interface EnableRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportCustomImageRequest {
  /** 镜像名称 */
  ImageName: string;
  /** 导入镜像的操作系统架构，x86_64 或 i386 */
  Architecture: string;
  /** 导入镜像的操作系统类型，通过DescribeImportImageOs获取 */
  OsType: string;
  /** 导入镜像的操作系统版本，通过DescribeImportImageOs获取 */
  OsVersion: string;
  /** 镜像描述 */
  ImageDescription?: string;
  /** 镜像启动方式，cloudinit或nbd， 默认cloudinit */
  InitFlag?: string;
  /** 镜像文件描述，多层镜像按顺序传入 */
  ImageUrls?: ImageUrl[];
}

declare interface ImportCustomImageResponse {
  /** 镜像ID */
  ImageId?: string;
  /** 异步任务ID，可根据DescribeCustomImageTask查询任务信息 */
  TaskId?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportImageRequest {
  /** 镜像的Id。 */
  ImageId: string;
  /** 镜像的描述。 */
  ImageDescription: string;
  /** 源地域 */
  SourceRegion: string;
}

declare interface ImportImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MigrateNetworkInterfaceRequest {
  /** ECM 地域，形如ap-xian-ecm。 */
  EcmRegion: string;
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 弹性网卡当前绑定的ECM实例ID。形如：ein-r8hr2upy。 */
  SourceInstanceId: string;
  /** 待迁移的目的ECM实例ID。 */
  DestinationInstanceId: string;
}

declare interface MigrateNetworkInterfaceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface MigratePrivateIpAddressRequest {
  /** ECM 地域，形如ap-xian-ecm。 */
  EcmRegion: string;
  /** 当前内网IP绑定的弹性网卡实例ID，例如：eni-11112222。 */
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
  /** ECM 地域 */
  EcmRegion: string;
  /** 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。 */
  AddressId: string;
  /** 修改后的 EIP 名称。长度上限为20个字符。 */
  AddressName?: string;
  /** 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。 */
  EipDirectConnection?: string;
}

declare interface ModifyAddressAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyAddressesBandwidthRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** EIP唯一标识ID，形如'eip-xxxxxxx' */
  AddressIds: string[];
  /** 调整带宽目标值 */
  InternetMaxBandwidthOut: number;
}

declare interface ModifyAddressesBandwidthResponse {
  /** 异步任务TaskId。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDefaultSubnetRequest {
  /** ECM地域 */
  EcmRegion: string;
  /** ECM可用区 */
  Zone: string;
  /** 私有网络ID */
  VpcId: string;
  /** 子网ID */
  SubnetId: string;
}

declare interface ModifyDefaultSubnetResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHaVipAttributeRequest {
  /** HAVIP唯一ID，形如：havip-9o233uri。 */
  HaVipId: string;
  /** HAVIP名称，可任意命名，但不得超过60个字符。 */
  HaVipName: string;
}

declare interface ModifyHaVipAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyImageAttributeRequest {
  /** 镜像ID，形如img-gvbnzy6f */
  ImageId: string;
  /** 设置新的镜像名称；必须满足下列限制：不得超过20个字符。- 镜像名称不能与已有镜像重复。 */
  ImageName?: string;
  /** 设置新的镜像描述；必须满足下列限制：- 不得超过60个字符。 */
  ImageDescription?: string;
}

declare interface ModifyImageAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesAttributeRequest {
  /** 待修改的实例ID列表。在单次请求的过程中，请求实例数上限为100。 */
  InstanceIdSet: string[];
  /** 修改成功后显示的实例名称，不得超过60个字符，不传则名称显示为空。 */
  InstanceName?: string;
  /** 指定实例的安全组Id列表，子机将重新关联指定列表的安全组，原本关联的安全组会被解绑。限制不超过5个。 */
  SecurityGroups?: string[];
}

declare interface ModifyInstancesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIpv6AddressesAttributeRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** 弹性网卡实例ID，形如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 指定的IPv6地址信息。 */
  Ipv6Addresses: Ipv6Address[];
}

declare interface ModifyIpv6AddressesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyIpv6AddressesBandwidthRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** 修改的目标带宽，单位Mbps */
  InternetMaxBandwidthOut: number;
  /** IPV6地址。Ipv6Addresses和Ipv6AddressId必须且只能传一个 */
  Ipv6Addresses?: Ipv6Address[];
  /** IPV6地址对应的唯一ID，形如eip-xxxxxxxx。Ipv6Addresses和Ipv6AddressId必须且只能传一个 */
  Ipv6AddressIds?: string[];
}

declare interface ModifyIpv6AddressesBandwidthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyListenerRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 负载均衡监听器 ID */
  ListenerId: string;
  /** 新的监听器名称 */
  ListenerName?: string;
  /** 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。 */
  SessionExpireTime?: number;
  /** 健康检查相关参数 */
  HealthCheck?: HealthCheck;
  /** 监听器转发的方式。可选值：WRR、LEAST_CONN分别表示按权重轮询、最小连接数， 默认为 WRR。 */
  Scheduler?: string;
}

declare interface ModifyListenerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLoadBalancerAttributesRequest {
  /** 负载均衡的唯一ID */
  LoadBalancerId: string;
  /** 负载均衡实例名称 */
  LoadBalancerName?: string;
  /** 网络计费及带宽相关参数 */
  InternetChargeInfo?: LoadBalancerInternetAccessible;
  /** Target是否放通来自ELB的流量。开启放通（true）：只验证ELB上的安全组；不开启放通（false）：需同时验证ELB和后端实例上的安全组。 */
  LoadBalancerPassToTarget?: boolean;
}

declare interface ModifyLoadBalancerAttributesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModuleConfigRequest {
  /** 模块ID。 */
  ModuleId: string;
  /** 机型ID。 */
  InstanceType: string;
  /** 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。 */
  DefaultDataDiskSize: number;
  /** 默认系统盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。 */
  DefaultSystemDiskSize?: number;
  /** 系统盘 */
  SystemDisk?: SystemDisk;
  /** 数据盘 */
  DataDisks?: DataDisk[];
}

declare interface ModifyModuleConfigResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModuleDisableWanIpRequest {
  /** 模块ID */
  ModuleId: string;
  /** 是否禁止分配外网ip,true：统一分配外网ip，false：禁止分配外网ip. */
  DisableWanIp: boolean;
}

declare interface ModifyModuleDisableWanIpResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModuleImageRequest {
  /** 默认镜像ID */
  DefaultImageId: string;
  /** 模块ID */
  ModuleId: string;
}

declare interface ModifyModuleImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModuleIpDirectRequest {
  /** 模块ID。 */
  ModuleId: string;
  /** 是否关闭IP直通。取值范围：true：表示关闭IP直通false：表示开通IP直通 */
  CloseIpDirect: boolean;
}

declare interface ModifyModuleIpDirectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModuleNameRequest {
  /** 模块ID。 */
  ModuleId: string;
  /** 模块名称。 */
  ModuleName: string;
}

declare interface ModifyModuleNameResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModuleNetworkRequest {
  /** 模块Id */
  ModuleId: string;
  /** 默认出带宽上限 */
  DefaultBandwidth: number;
  /** 默认入带宽上限 */
  DefaultBandwidthIn?: number;
}

declare interface ModifyModuleNetworkResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyModuleSecurityGroupsRequest {
  /** 安全组列表。不超过5个。 */
  SecurityGroupIdSet: string[];
  /** 模块id。 */
  ModuleId: string;
}

declare interface ModifyModuleSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyPrivateIpAddressesAttributeRequest {
  /** 弹性网卡实例ID，例如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 指定的内网IP信息。 */
  PrivateIpAddresses: PrivateIpAddressSpecification[];
  /** ECM 节点Region信息，形如ap-xian-ecm。 */
  EcmRegion: string;
}

declare interface ModifyPrivateIpAddressesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyRouteTableAttributeRequest {
  /** 路由表实例ID，例如：rtb-azd4dt1c */
  RouteTableId: string;
  /** 路由表名称 */
  RouteTableName: string;
}

declare interface ModifyRouteTableAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySecurityGroupAttributeRequest {
  /** 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
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
  /** 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。 */
  SecurityGroupId: string;
  /** 安全组规则集合。 SecurityGroupPolicySet对象必须同时指定新的出（Egress）入（Ingress）站规则。 SecurityGroupPolicy对象不支持自定义索引（PolicyIndex）。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
  /** 排序安全组标识。值为True时，支持安全组排序；SortPolicys不存在或SortPolicys为False时，为修改安全组规则。 */
  SortPolicys?: boolean;
}

declare interface ModifySecurityGroupPoliciesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySubnetAttributeRequest {
  /** 子网实例ID。形如：subnet-pxir56ns。 */
  SubnetId: string;
  /** ECM 地域 */
  EcmRegion: string;
  /** 子网名称，最大长度不能超过60个字节。 */
  SubnetName?: string;
  /** 子网是否开启广播。 */
  EnableBroadcast?: string;
  /** 子网的标签键值 */
  Tags?: Tag[];
}

declare interface ModifySubnetAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetPortRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 负载均衡监听器 ID */
  ListenerId: string;
  /** 要修改端口的后端服务列表 */
  Targets: Target[];
  /** 后端服务绑定到监听器或转发规则的新端口 */
  NewPort: number;
}

declare interface ModifyTargetPortResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyTargetWeightRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 负载均衡监听器 ID */
  ListenerId: string;
  /** 要修改权重的后端服务列表 */
  Targets: Target[];
  /** 后端服务新的转发权重，取值范围：0~100，默认值10。如果设置了 Targets.Weight 参数，则此参数不生效。 */
  Weight?: number;
}

declare interface ModifyTargetWeightResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyVpcAttributeRequest {
  /** VPC实例ID。形如：vpc-f49l6u0z。 */
  VpcId: string;
  /** ECM 地域 */
  EcmRegion: string;
  /** 私有网络名称，可任意命名，但不得超过60个字符。 */
  VpcName?: string;
  /** 标签 */
  Tags?: Tag[];
  /** 私有网络描述 */
  Description?: string;
  /** DNS地址，最多支持4个，第1个默认为主，其余为备。 */
  DnsServers?: string[];
  /** 域名。 */
  DomainName?: string;
}

declare interface ModifyVpcAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface QueryVpcTaskResultRequest {
  /** 无 */
  TaskId: string;
}

declare interface QueryVpcTaskResultResponse {
  /** 执行结果，包括"SUCCESS", "FAILED", "RUNNING" */
  Status: string;
  /** 异步任务执行输出。 */
  Output: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RebootInstancesRequest {
  /** 待重启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。 */
  InstanceIdSet: string[];
  /** 是否在正常重启失败后选择强制重启实例。取值范围：TRUE：表示在正常重启失败后进行强制重启；FALSE：表示在正常重启失败后不进行强制重启；默认取值：FALSE。 */
  ForceReboot?: boolean;
  /** 关机类型。取值范围：SOFT：表示软关机HARD：表示硬关机SOFT_FIRST：表示优先软关机，失败再执行硬关机默认取值：SOFT。 */
  StopType?: string;
}

declare interface RebootInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseAddressesRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** 标识 EIP 的唯一 ID 列表。 */
  AddressIds: string[];
}

declare interface ReleaseAddressesResponse {
  /** 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseIpv6AddressesBandwidthRequest {
  /** ECM 地域。 */
  EcmRegion: string;
  /** IPV6地址。Ipv6Addresses和Ipv6AddressIds必须且只能传一个。 */
  Ipv6Addresses?: string[];
  /** IPV6地址对应的唯一ID，形如eip-xxxxxxxx。Ipv6Addresses和Ipv6AddressIds必须且只能传一个。 */
  Ipv6AddressIds?: string[];
}

declare interface ReleaseIpv6AddressesBandwidthResponse {
  /** 异步任务TaskId。 */
  TaskId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReleaseIpv6AddressesRequest {
  /** ECM 地域 */
  EcmRegion: string;
  /** 弹性网卡实例ID，形如：eni-m6dyj72l。 */
  NetworkInterfaceId: string;
  /** 指定的IPv6地址列表，单次最多指定10个。 */
  Ipv6Addresses: Ipv6Address[];
}

declare interface ReleaseIpv6AddressesResponse {
  /** 任务ID，可以通过DescribeTaskResult查询任务状态 */
  TaskId: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemovePrivateIpAddressesRequest {
  /** ECM 地域，形如ap-xian-ecm。 */
  EcmRegion: string;
  /** 弹性网卡实例ID，例如：eni-11112222。 */
  NetworkInterfaceId: string;
  /** 指定的内网IP信息，单次最多指定10个。 */
  PrivateIpAddresses: PrivateIpAddressSpecification[];
}

declare interface RemovePrivateIpAddressesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceRouteTableAssociationRequest {
  /** 子网实例ID，例如：subnet-3x5lf5q0。可通过DescribeSubnets接口查询。 */
  SubnetId: string;
  /** 路由表实例ID，例如：rtb-azd4dt1c。 */
  RouteTableId: string;
  /** ECM 地域 */
  EcmRegion: string;
}

declare interface ReplaceRouteTableAssociationResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceRoutesRequest {
  /** 路由表实例ID。 */
  RouteTableId: string;
  /** 路由策略对象。 */
  Routes: Route[];
}

declare interface ReplaceRoutesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceSecurityGroupPolicyRequest {
  /** 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取 */
  SecurityGroupId: string;
  /** 安全组规则集合对象。 */
  SecurityGroupPolicySet: SecurityGroupPolicySet;
}

declare interface ReplaceSecurityGroupPolicyResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstancesMaxBandwidthRequest {
  /** 待重置带宽上限的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。 */
  InstanceIdSet: string[];
  /** 修改后的最大出带宽上限。 */
  MaxBandwidthOut: number;
  /** 修改后的最大入带宽上限。 */
  MaxBandwidthIn?: number;
}

declare interface ResetInstancesMaxBandwidthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstancesPasswordRequest {
  /** 待重置密码的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。 */
  InstanceIdSet: string[];
  /** 新密码，Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。如果实例即包含Linux实例又包含Windows实例，则密码复杂度限制按照Windows实例的限制。 */
  Password: string;
  /** 是否强制关机，默认为false。 */
  ForceStop?: boolean;
  /** 待重置密码的实例的用户名，不得超过64个字符。若未指定用户名，则对于Linux而言，默认重置root用户的密码，对于Windows而言，默认重置administrator的密码。 */
  UserName?: string;
}

declare interface ResetInstancesPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstancesRequest {
  /** 待重装的实例ID列表。 */
  InstanceIdSet: string[];
  /** 重装使用的镜像ID，若未指定，则使用各个实例当前的镜像进行重装。 */
  ImageId?: string;
  /** 密码设置，若未指定，则后续将以站内信的形式通知密码。 */
  Password?: string;
  /** 是否开启腾讯云可观测平台和主机安全服务，未指定时默认开启。 */
  EnhancedService?: EnhancedService;
  /** 是否保留数据盘数据，取值"true"/"false"。默认为"true" */
  KeepData?: string;
  /** 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：TRUE：表示保持镜像的登录设置FALSE：表示不保持镜像的登录设置默认取值：FALSE。 */
  KeepImageLogin?: string;
}

declare interface ResetInstancesResponse {
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

declare interface RunInstancesRequest {
  /** 需要创建实例的可用区及创建数目及运营商的列表。在单次请求的过程中，单个region下的请求创建实例数上限为100 */
  ZoneInstanceCountISPSet: ZoneInstanceCountISP[];
  /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? / ]中的特殊符。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? /]中的特殊符号。 */
  Password?: string;
  /** 公网出带宽上限，单位：Mbps。1.如果未传该参数或者传的值为0，则使用模块下的默认值。2.如果未传该参数或者传的值为0且未指定模块，则使用InternetMaxBandwidthIn的值 */
  InternetMaxBandwidthOut?: number;
  /** 模块ID。如果未传该参数，则必须传ImageId，InstanceType，DataDiskSize，InternetMaxBandwidthOut参数 */
  ModuleId?: string;
  /** 镜像ID。如果未传该参数或者传的值为空，则使用模块下的默认值 */
  ImageId?: string;
  /** 实例显示名称。不指定实例显示名称则默认显示‘未命名’。购买多台实例，如果指定模式串{R:x}，表示生成数字[x, x+n-1]，其中n表示购买实例的数量，例如server\_{R:3}，购买1台时，实例显示名称为server\_3；购买2台时，实例显示名称分别为server\_3，server\_4。支持指定多个模式串{R:x}。购买多台实例，如果不指定模式串，则在实例显示名称添加后缀1、2...n，其中n表示购买实例的数量，例如server_，购买2台时，实例显示名称分别为server\_1，server\_2。如果购买的实例属于不同的地域或运营商，则上述规则在每个地域和运营商内独立计数。最多支持60个字符（包含模式串）。 */
  InstanceName?: string;
  /** 主机名称点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。 */
  HostName?: string;
  /** 用于保证请求幂等性的字符串。目前为保留参数，请勿使用。 */
  ClientToken?: string;
  /** 增强服务。通过该参数可以指定是否开启云安全、腾讯云可观测平台等服务。若不指定该参数，则默认公共镜像开启腾讯云可观测平台、云安全服务 */
  EnhancedService?: EnhancedService;
  /** 标签列表 */
  TagSpecification?: TagSpecification[];
  /** 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB */
  UserData?: string;
  /** 机型。如果未传该参数或者传的值为空，则使用模块下的默认值 */
  InstanceType?: string;
  /** 数据盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值 */
  DataDiskSize?: number;
  /** 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
  SecurityGroupIds?: string[];
  /** 系统盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值 */
  SystemDiskSize?: number;
  /** 公网入带宽上限，单位：Mbps。1.如果未传该参数或者传的值为0，则使用对应模块的默认值。2.如果未传该参数或者传的值为0且未指定模块，则使用InternetMaxBandwidthOut */
  InternetMaxBandwidthIn?: number;
  /** 实例计费类型。其中：0，按资源维度后付费，计算当日用量峰值，例如CPU，内存，硬盘等，仅适用于非GNR系列机型；1，按小时后付费，单价：xx元/实例/小时，仅适用于GNR机型，如需开通该计费方式请提工单申请；2，按月后付费，单价：xx元/实例/月，仅适用于GNR机型；该字段不填时，非GNR机型会默认选择0；GNR机型默认选择2。 */
  InstanceChargeType?: number;
  /** 密钥对。 */
  KeyIds?: string[];
  /** 保持镜像的原始设置。该参数与Password或KeyIds.N不能同时指定。只有使用自定义镜像、共享镜像或外部导入镜像创建实例时才能指定该参数为TRUE。取值范围：TRUE：表示保持镜像的登录设置FALSE：表示不保持镜像的登录设置默认取值：FALSE。 */
  KeepImageLogin?: string;
  /** 系统盘信息。 */
  SystemDisk?: SystemDisk;
  /** 数据盘信息。 */
  DataDisks?: DataDisk[];
}

declare interface RunInstancesResponse {
  /** 创建中的实例ID列表 */
  InstanceIdSet?: string[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetLoadBalancerSecurityGroupsRequest {
  /** 负载均衡实例 ID */
  LoadBalancerId: string;
  /** 安全组ID构成的数组，一个负载均衡实例最多可绑定5个安全组，如果要解绑所有安全组，可不传此参数，或传入空数组 */
  SecurityGroups?: string[];
}

declare interface SetLoadBalancerSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SetSecurityGroupForLoadbalancersRequest {
  /** 负载均衡实例ID数组 */
  LoadBalancerIds: string[];
  /** 安全组ID，如 esg-12345678 */
  SecurityGroup: string;
  /** ADD 绑定安全组；DEL 解绑安全组 */
  OperationType: string;
}

declare interface SetSecurityGroupForLoadbalancersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartInstancesRequest {
  /** 待开启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。 */
  InstanceIdSet: string[];
}

declare interface StartInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopInstancesRequest {
  /** 需要关机的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。 */
  InstanceIdSet: string[];
  /** 是否在正常关闭失败后选择强制关闭实例，默认为false，即否。 */
  ForceStop?: boolean;
  /** 实例的关闭模式。取值范围：SOFT_FIRST：表示在正常关闭失败后进行强制关闭;HARD：直接强制关闭;SOFT：仅软关机；默认为SOFT。 */
  StopType?: string;
}

declare interface StopInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateDisksRequest {
  /** 需退还的云盘ID列表。 */
  DiskIds: string[];
}

declare interface TerminateDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateInstancesRequest {
  /** 待销毁的实例ID列表。 */
  InstanceIdSet: string[];
  /** 是否定时销毁，默认为否。 */
  TerminateDelay?: boolean;
  /** 定时销毁的时间，格式形如："2019-08-05 12:01:30"，若非定时销毁，则此参数被忽略。 */
  TerminateTime?: string;
  /** 是否关联删除已绑定的弹性网卡和弹性IP，默认为true。当为true时，一并删除弹性网卡和弹性IP；当为false时，只销毁主机，保留弹性网卡和弹性IP。 */
  AssociatedResourceDestroy?: boolean;
}

declare interface TerminateInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface UnassignIpv6SubnetCidrBlockRequest {
  /** 子网所在私有网络`ID`。形如：`vpc-f49l6u0z`。 */
  VpcId: string;
  /** `IPv6` 子网段列表。 */
  Ipv6SubnetCidrBlocks: Ipv6SubnetCidrBlock[];
  /** ECM地域。 */
  EcmRegion?: string;
}

declare interface UnassignIpv6SubnetCidrBlockResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Ecm 边缘计算机器} */
declare interface Ecm {
  (): Versions;
  /** 创建弹性公网IP {@link AllocateAddressesRequest} {@link AllocateAddressesResponse} */
  AllocateAddresses(data: AllocateAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateAddressesResponse>;
  /** IPv6地址分配公网带宽 {@link AllocateIpv6AddressesBandwidthRequest} {@link AllocateIpv6AddressesBandwidthResponse} */
  AllocateIpv6AddressesBandwidth(data: AllocateIpv6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateIpv6AddressesBandwidthResponse>;
  /** 分配IPv6地址 {@link AssignIpv6AddressesRequest} {@link AssignIpv6AddressesResponse} */
  AssignIpv6Addresses(data: AssignIpv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6AddressesResponse>;
  /** 分配IPv6网段 {@link AssignIpv6CidrBlockRequest} {@link AssignIpv6CidrBlockResponse} */
  AssignIpv6CidrBlock(data: AssignIpv6CidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6CidrBlockResponse>;
  /** 分配不同类型的IPv6网段 {@link AssignIpv6CidrBlocksRequest} {@link AssignIpv6CidrBlocksResponse} */
  AssignIpv6CidrBlocks(data: AssignIpv6CidrBlocksRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6CidrBlocksResponse>;
  /** 分配IPv6子网段 {@link AssignIpv6SubnetCidrBlockRequest} {@link AssignIpv6SubnetCidrBlockResponse} */
  AssignIpv6SubnetCidrBlock(data: AssignIpv6SubnetCidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<AssignIpv6SubnetCidrBlockResponse>;
  /** 弹性网卡申请内网 IP {@link AssignPrivateIpAddressesRequest} {@link AssignPrivateIpAddressesResponse} */
  AssignPrivateIpAddresses(data: AssignPrivateIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<AssignPrivateIpAddressesResponse>;
  /** 绑定弹性公网IP {@link AssociateAddressRequest} {@link AssociateAddressResponse} */
  AssociateAddress(data: AssociateAddressRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateAddressResponse>;
  /** 绑定安全组 {@link AssociateSecurityGroupsRequest} {@link AssociateSecurityGroupsResponse} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** 挂载云硬盘 {@link AttachDisksRequest} {@link AttachDisksResponse} */
  AttachDisks(data: AttachDisksRequest, config?: AxiosRequestConfig): AxiosPromise<AttachDisksResponse>;
  /** 弹性网卡绑定云主机 {@link AttachNetworkInterfaceRequest} {@link AttachNetworkInterfaceResponse} */
  AttachNetworkInterface(data: AttachNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<AttachNetworkInterfaceResponse>;
  /** 批量解绑后端服务 {@link BatchDeregisterTargetsRequest} {@link BatchDeregisterTargetsResponse} */
  BatchDeregisterTargets(data: BatchDeregisterTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchDeregisterTargetsResponse>;
  /** 批量修改监听器绑定的后端机器的转发权重 {@link BatchModifyTargetWeightRequest} {@link BatchModifyTargetWeightResponse} */
  BatchModifyTargetWeight(data: BatchModifyTargetWeightRequest, config?: AxiosRequestConfig): AxiosPromise<BatchModifyTargetWeightResponse>;
  /** 批量绑定后端目标 {@link BatchRegisterTargetsRequest} {@link BatchRegisterTargetsResponse} */
  BatchRegisterTargets(data: BatchRegisterTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<BatchRegisterTargetsResponse>;
  /** 创建云硬盘 {@link CreateDisksRequest} {@link CreateDisksResponse} */
  CreateDisks(data: CreateDisksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDisksResponse>;
  /** 创建HAVIP {@link CreateHaVipRequest} {@link CreateHaVipResponse} */
  CreateHaVip(data: CreateHaVipRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHaVipResponse>;
  /** 创建镜像 {@link CreateImageRequest} {@link CreateImageResponse} */
  CreateImage(data: CreateImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageResponse>;
  /** 创建密钥对 {@link CreateKeyPairRequest} {@link CreateKeyPairResponse} */
  CreateKeyPair(data: CreateKeyPairRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKeyPairResponse>;
  /** 创建负载均衡监听器 {@link CreateListenerRequest} {@link CreateListenerResponse} */
  CreateListener(data: CreateListenerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateListenerResponse>;
  /** 购买负载均衡实例 {@link CreateLoadBalancerRequest} {@link CreateLoadBalancerResponse} */
  CreateLoadBalancer(data: CreateLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLoadBalancerResponse>;
  /** 创建模块 {@link CreateModuleRequest} {@link CreateModuleResponse} */
  CreateModule(data: CreateModuleRequest, config?: AxiosRequestConfig): AxiosPromise<CreateModuleResponse>;
  /** 创建弹性网卡 {@link CreateNetworkInterfaceRequest} {@link CreateNetworkInterfaceResponse} */
  CreateNetworkInterface(data: CreateNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<CreateNetworkInterfaceResponse>;
  /** 创建路由表 {@link CreateRouteTableRequest} {@link CreateRouteTableResponse} */
  CreateRouteTable(data: CreateRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRouteTableResponse>;
  /** 创建路由策略 {@link CreateRoutesRequest} {@link CreateRoutesResponse} */
  CreateRoutes(data: CreateRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateRoutesResponse>;
  /** 创建安全组 {@link CreateSecurityGroupRequest} {@link CreateSecurityGroupResponse} */
  CreateSecurityGroup(data: CreateSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupResponse>;
  /** 安全组添加规则 {@link CreateSecurityGroupPoliciesRequest} {@link CreateSecurityGroupPoliciesResponse} */
  CreateSecurityGroupPolicies(data: CreateSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSecurityGroupPoliciesResponse>;
  /** 创建子网 {@link CreateSubnetRequest} {@link CreateSubnetResponse} */
  CreateSubnet(data: CreateSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<CreateSubnetResponse>;
  /** 创建VPC {@link CreateVpcRequest} {@link CreateVpcResponse} */
  CreateVpc(data: CreateVpcRequest, config?: AxiosRequestConfig): AxiosPromise<CreateVpcResponse>;
  /** 删除HAVIP {@link DeleteHaVipRequest} {@link DeleteHaVipResponse} */
  DeleteHaVip(data: DeleteHaVipRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHaVipResponse>;
  /** 删除镜像 {@link DeleteImageRequest} {@link DeleteImageResponse} */
  DeleteImage(data: DeleteImageRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImageResponse>;
  /** 删除负载均衡监听器 {@link DeleteListenerRequest} {@link DeleteListenerResponse} */
  DeleteListener(data: DeleteListenerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteListenerResponse>;
  /** 删除负载均衡实例 {@link DeleteLoadBalancerRequest} {@link DeleteLoadBalancerResponse} */
  DeleteLoadBalancer(data?: DeleteLoadBalancerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoadBalancerResponse>;
  /** 删除负载均衡多个监听器 {@link DeleteLoadBalancerListenersRequest} {@link DeleteLoadBalancerListenersResponse} */
  DeleteLoadBalancerListeners(data: DeleteLoadBalancerListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLoadBalancerListenersResponse>;
  /** 删除业务模块 {@link DeleteModuleRequest} {@link DeleteModuleResponse} */
  DeleteModule(data: DeleteModuleRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteModuleResponse>;
  /** 删除弹性网卡 {@link DeleteNetworkInterfaceRequest} {@link DeleteNetworkInterfaceResponse} */
  DeleteNetworkInterface(data: DeleteNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteNetworkInterfaceResponse>;
  /** 删除路由表 {@link DeleteRouteTableRequest} {@link DeleteRouteTableResponse} */
  DeleteRouteTable(data: DeleteRouteTableRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRouteTableResponse>;
  /** 删除路由策略 {@link DeleteRoutesRequest} {@link DeleteRoutesResponse} */
  DeleteRoutes(data: DeleteRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteRoutesResponse>;
  /** 删除安全组 {@link DeleteSecurityGroupRequest} {@link DeleteSecurityGroupResponse} */
  DeleteSecurityGroup(data: DeleteSecurityGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupResponse>;
  /** 删除安全组规则 {@link DeleteSecurityGroupPoliciesRequest} {@link DeleteSecurityGroupPoliciesResponse} */
  DeleteSecurityGroupPolicies(data: DeleteSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSecurityGroupPoliciesResponse>;
  /** 删除快照 {@link DeleteSnapshotsRequest} {@link DeleteSnapshotsResponse} */
  DeleteSnapshots(data: DeleteSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSnapshotsResponse>;
  /** 删除子网 {@link DeleteSubnetRequest} {@link DeleteSubnetResponse} */
  DeleteSubnet(data: DeleteSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSubnetResponse>;
  /** 删除VPC {@link DeleteVpcRequest} {@link DeleteVpcResponse} */
  DeleteVpc(data: DeleteVpcRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteVpcResponse>;
  /** 查询弹性公网IP配额 {@link DescribeAddressQuotaRequest} {@link DescribeAddressQuotaResponse} */
  DescribeAddressQuota(data: DescribeAddressQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressQuotaResponse>;
  /** 查询弹性公网IP列表 {@link DescribeAddressesRequest} {@link DescribeAddressesResponse} */
  DescribeAddresses(data: DescribeAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAddressesResponse>;
  /** 获取概览页统计的基本数据 {@link DescribeBaseOverviewRequest} {@link DescribeBaseOverviewResponse} */
  DescribeBaseOverview(data?: DescribeBaseOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBaseOverviewResponse>;
  /** 获取配置限制信息 {@link DescribeConfigRequest} {@link DescribeConfigResponse} */
  DescribeConfig(data?: DescribeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeConfigResponse>;
  /** 查询导入镜像任务 {@link DescribeCustomImageTaskRequest} {@link DescribeCustomImageTaskResponse} */
  DescribeCustomImageTask(data: DescribeCustomImageTaskRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCustomImageTaskResponse>;
  /** 查询可用区的默认子网 {@link DescribeDefaultSubnetRequest} {@link DescribeDefaultSubnetResponse} */
  DescribeDefaultSubnet(data: DescribeDefaultSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDefaultSubnetResponse>;
  /** 查询云硬盘列表 {@link DescribeDisksRequest} {@link DescribeDisksResponse} */
  DescribeDisks(data?: DescribeDisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisksResponse>;
  /** 查询HAVIP列表 {@link DescribeHaVipsRequest} {@link DescribeHaVipsResponse} */
  DescribeHaVips(data?: DescribeHaVipsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHaVipsResponse>;
  /** 展示镜像列表 {@link DescribeImageRequest} {@link DescribeImageResponse} */
  DescribeImage(data?: DescribeImageRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageResponse>;
  /** 查询外部导入镜像支持的OS列表 {@link DescribeImportImageOsRequest} {@link DescribeImportImageOsResponse} */
  DescribeImportImageOs(data?: DescribeImportImageOsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImportImageOsResponse>;
  /** 获取机型配置列表 {@link DescribeInstanceTypeConfigRequest} {@link DescribeInstanceTypeConfigResponse} */
  DescribeInstanceTypeConfig(data?: DescribeInstanceTypeConfigRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceTypeConfigResponse>;
  /** 查询实例管理终端地址 {@link DescribeInstanceVncUrlRequest} {@link DescribeInstanceVncUrlResponse} */
  DescribeInstanceVncUrl(data: DescribeInstanceVncUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceVncUrlResponse>;
  /** 获取实例相关信息 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 获取禁止的操作列表 {@link DescribeInstancesDeniedActionsRequest} {@link DescribeInstancesDeniedActionsResponse} */
  DescribeInstancesDeniedActions(data: DescribeInstancesDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesDeniedActionsResponse>;
  /** 查询负载均衡的监听器列表 {@link DescribeListenersRequest} {@link DescribeListenersResponse} */
  DescribeListeners(data: DescribeListenersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeListenersResponse>;
  /** 查询负载均衡相关的任务状态 {@link DescribeLoadBalanceTaskStatusRequest} {@link DescribeLoadBalanceTaskStatusResponse} */
  DescribeLoadBalanceTaskStatus(data: DescribeLoadBalanceTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalanceTaskStatusResponse>;
  /** 查询负载均衡实例列表 {@link DescribeLoadBalancersRequest} {@link DescribeLoadBalancersResponse} */
  DescribeLoadBalancers(data?: DescribeLoadBalancersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLoadBalancersResponse>;
  /** 获取模块列表 {@link DescribeModuleRequest} {@link DescribeModuleResponse} */
  DescribeModule(data?: DescribeModuleRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModuleResponse>;
  /** 展示模块详细信息 {@link DescribeModuleDetailRequest} {@link DescribeModuleDetailResponse} */
  DescribeModuleDetail(data: DescribeModuleDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModuleDetailResponse>;
  /** 获取客户节点上的出入月峰和计费带宽 {@link DescribeMonthPeakNetworkRequest} {@link DescribeMonthPeakNetworkResponse} */
  DescribeMonthPeakNetwork(data: DescribeMonthPeakNetworkRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeMonthPeakNetworkResponse>;
  /** 查询弹性网卡列表 {@link DescribeNetworkInterfacesRequest} {@link DescribeNetworkInterfacesResponse} */
  DescribeNetworkInterfaces(data?: DescribeNetworkInterfacesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNetworkInterfacesResponse>;
  /** 获取节点列表 {@link DescribeNodeRequest} {@link DescribeNodeResponse} */
  DescribeNode(data?: DescribeNodeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeNodeResponse>;
  /** 获取装箱配额组 {@link DescribePackingQuotaGroupRequest} {@link DescribePackingQuotaGroupResponse} */
  DescribePackingQuotaGroup(data?: DescribePackingQuotaGroupRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePackingQuotaGroupResponse>;
  /** 基础信息峰值数据 {@link DescribePeakBaseOverviewRequest} {@link DescribePeakBaseOverviewResponse} */
  DescribePeakBaseOverview(data?: DescribePeakBaseOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePeakBaseOverviewResponse>;
  /** 获取网络峰值数据 {@link DescribePeakNetworkOverviewRequest} {@link DescribePeakNetworkOverviewResponse} */
  DescribePeakNetworkOverview(data?: DescribePeakNetworkOverviewRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePeakNetworkOverviewResponse>;
  /** 查询实例价格 {@link DescribePriceRunInstanceRequest} {@link DescribePriceRunInstanceResponse} */
  DescribePriceRunInstance(data: DescribePriceRunInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<DescribePriceRunInstanceResponse>;
  /** 查询地域下IPV6地址信息 {@link DescribeRegionIpv6AddressesRequest} {@link DescribeRegionIpv6AddressesResponse} */
  DescribeRegionIpv6Addresses(data: DescribeRegionIpv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionIpv6AddressesResponse>;
  /** 查询路由策略冲突列表 {@link DescribeRouteConflictsRequest} {@link DescribeRouteConflictsResponse} */
  DescribeRouteConflicts(data: DescribeRouteConflictsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteConflictsResponse>;
  /** 查询路由表对象列表 {@link DescribeRouteTablesRequest} {@link DescribeRouteTablesResponse} */
  DescribeRouteTables(data?: DescribeRouteTablesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRouteTablesResponse>;
  /** 查询安全组关联统计 {@link DescribeSecurityGroupAssociationStatisticsRequest} {@link DescribeSecurityGroupAssociationStatisticsResponse} */
  DescribeSecurityGroupAssociationStatistics(data: DescribeSecurityGroupAssociationStatisticsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupAssociationStatisticsResponse>;
  /** 查询用户安全组配额 {@link DescribeSecurityGroupLimitsRequest} {@link DescribeSecurityGroupLimitsResponse} */
  DescribeSecurityGroupLimits(data?: DescribeSecurityGroupLimitsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupLimitsResponse>;
  /** 查询安全组规则 {@link DescribeSecurityGroupPoliciesRequest} {@link DescribeSecurityGroupPoliciesResponse} */
  DescribeSecurityGroupPolicies(data: DescribeSecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupPoliciesResponse>;
  /** 查看安全组 {@link DescribeSecurityGroupsRequest} {@link DescribeSecurityGroupsResponse} */
  DescribeSecurityGroups(data?: DescribeSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSecurityGroupsResponse>;
  /** 查询快照列表 {@link DescribeSnapshotsRequest} {@link DescribeSnapshotsResponse} */
  DescribeSnapshots(data?: DescribeSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotsResponse>;
  /** 查询子网列表 {@link DescribeSubnetsRequest} {@link DescribeSubnetsResponse} */
  DescribeSubnets(data?: DescribeSubnetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSubnetsResponse>;
  /** 获取负载均衡后端服务的健康检查状态 {@link DescribeTargetHealthRequest} {@link DescribeTargetHealthResponse} */
  DescribeTargetHealth(data: DescribeTargetHealthRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetHealthResponse>;
  /** 查询负载均衡绑定的后端服务列表 {@link DescribeTargetsRequest} {@link DescribeTargetsResponse} */
  DescribeTargets(data: DescribeTargetsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTargetsResponse>;
  /** 查询异步任务执行结果 {@link DescribeTaskResultRequest} {@link DescribeTaskResultResponse} */
  DescribeTaskResult(data: DescribeTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskResultResponse>;
  /** 获取任务状态 {@link DescribeTaskStatusRequest} {@link DescribeTaskStatusResponse} */
  DescribeTaskStatus(data: DescribeTaskStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskStatusResponse>;
  /** 查询VPC列表 {@link DescribeVpcsRequest} {@link DescribeVpcsResponse} */
  DescribeVpcs(data?: DescribeVpcsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeVpcsResponse>;
  /** 卸载云硬盘 {@link DetachDisksRequest} {@link DetachDisksResponse} */
  DetachDisks(data: DetachDisksRequest, config?: AxiosRequestConfig): AxiosPromise<DetachDisksResponse>;
  /** 弹性网卡解绑云主机 {@link DetachNetworkInterfaceRequest} {@link DetachNetworkInterfaceResponse} */
  DetachNetworkInterface(data: DetachNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<DetachNetworkInterfaceResponse>;
  /** 禁用子网路由 {@link DisableRoutesRequest} {@link DisableRoutesResponse} */
  DisableRoutes(data: DisableRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<DisableRoutesResponse>;
  /** 解绑定弹性公网IP {@link DisassociateAddressRequest} {@link DisassociateAddressResponse} */
  DisassociateAddress(data: DisassociateAddressRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateAddressResponse>;
  /** 解绑密钥对 {@link DisassociateInstancesKeyPairsRequest} {@link DisassociateInstancesKeyPairsResponse} */
  DisassociateInstancesKeyPairs(data: DisassociateInstancesKeyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateInstancesKeyPairsResponse>;
  /** 解绑安全组 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** 启用子网路由 {@link EnableRoutesRequest} {@link EnableRoutesResponse} */
  EnableRoutes(data: EnableRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<EnableRoutesResponse>;
  /** 导入自定义镜像 {@link ImportCustomImageRequest} {@link ImportCustomImageResponse} */
  ImportCustomImage(data: ImportCustomImageRequest, config?: AxiosRequestConfig): AxiosPromise<ImportCustomImageResponse>;
  /** 导入镜像 {@link ImportImageRequest} {@link ImportImageResponse} */
  ImportImage(data: ImportImageRequest, config?: AxiosRequestConfig): AxiosPromise<ImportImageResponse>;
  /** 弹性网卡迁移 {@link MigrateNetworkInterfaceRequest} {@link MigrateNetworkInterfaceResponse} */
  MigrateNetworkInterface(data: MigrateNetworkInterfaceRequest, config?: AxiosRequestConfig): AxiosPromise<MigrateNetworkInterfaceResponse>;
  /** 弹性网卡内网IP迁移 {@link MigratePrivateIpAddressRequest} {@link MigratePrivateIpAddressResponse} */
  MigratePrivateIpAddress(data: MigratePrivateIpAddressRequest, config?: AxiosRequestConfig): AxiosPromise<MigratePrivateIpAddressResponse>;
  /** 修改弹性公网IP属性 {@link ModifyAddressAttributeRequest} {@link ModifyAddressAttributeResponse} */
  ModifyAddressAttribute(data: ModifyAddressAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressAttributeResponse>;
  /** 调整弹性公网IP带宽 {@link ModifyAddressesBandwidthRequest} {@link ModifyAddressesBandwidthResponse} */
  ModifyAddressesBandwidth(data: ModifyAddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyAddressesBandwidthResponse>;
  /** 修改默认子网 {@link ModifyDefaultSubnetRequest} {@link ModifyDefaultSubnetResponse} */
  ModifyDefaultSubnet(data: ModifyDefaultSubnetRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDefaultSubnetResponse>;
  /** 修改HAVIP属性 {@link ModifyHaVipAttributeRequest} {@link ModifyHaVipAttributeResponse} */
  ModifyHaVipAttribute(data: ModifyHaVipAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHaVipAttributeResponse>;
  /** 修改镜像属性 {@link ModifyImageAttributeRequest} {@link ModifyImageAttributeResponse} */
  ModifyImageAttribute(data: ModifyImageAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyImageAttributeResponse>;
  /** 修改实例属性 {@link ModifyInstancesAttributeRequest} {@link ModifyInstancesAttributeResponse} */
  ModifyInstancesAttribute(data: ModifyInstancesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesAttributeResponse>;
  /** 修改弹性网卡IPv6地址属性 {@link ModifyIpv6AddressesAttributeRequest} {@link ModifyIpv6AddressesAttributeResponse} */
  ModifyIpv6AddressesAttribute(data: ModifyIpv6AddressesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIpv6AddressesAttributeResponse>;
  /** 修改IPV6访问internet的带宽 {@link ModifyIpv6AddressesBandwidthRequest} {@link ModifyIpv6AddressesBandwidthResponse} */
  ModifyIpv6AddressesBandwidth(data: ModifyIpv6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyIpv6AddressesBandwidthResponse>;
  /** 修改负载均衡监听器属性 {@link ModifyListenerRequest} {@link ModifyListenerResponse} */
  ModifyListener(data: ModifyListenerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyListenerResponse>;
  /** 修改负载均衡实例的属性 {@link ModifyLoadBalancerAttributesRequest} {@link ModifyLoadBalancerAttributesResponse} */
  ModifyLoadBalancerAttributes(data: ModifyLoadBalancerAttributesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLoadBalancerAttributesResponse>;
  /** 修改模块配置 {@link ModifyModuleConfigRequest} {@link ModifyModuleConfigResponse} */
  ModifyModuleConfig(data: ModifyModuleConfigRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModuleConfigResponse>;
  /** 修改模块是否禁止分配外网ip {@link ModifyModuleDisableWanIpRequest} {@link ModifyModuleDisableWanIpResponse} */
  ModifyModuleDisableWanIp(data: ModifyModuleDisableWanIpRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModuleDisableWanIpResponse>;
  /** 修改模块默认镜像 {@link ModifyModuleImageRequest} {@link ModifyModuleImageResponse} */
  ModifyModuleImage(data: ModifyModuleImageRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModuleImageResponse>;
  /** 修改模块IP直通 {@link ModifyModuleIpDirectRequest} {@link ModifyModuleIpDirectResponse} */
  ModifyModuleIpDirect(data: ModifyModuleIpDirectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModuleIpDirectResponse>;
  /** 修改模块名称 {@link ModifyModuleNameRequest} {@link ModifyModuleNameResponse} */
  ModifyModuleName(data: ModifyModuleNameRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModuleNameResponse>;
  /** 修改模块默认带宽上限 {@link ModifyModuleNetworkRequest} {@link ModifyModuleNetworkResponse} */
  ModifyModuleNetwork(data: ModifyModuleNetworkRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModuleNetworkResponse>;
  /** 修改模块默认安全组 {@link ModifyModuleSecurityGroupsRequest} {@link ModifyModuleSecurityGroupsResponse} */
  ModifyModuleSecurityGroups(data: ModifyModuleSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyModuleSecurityGroupsResponse>;
  /** 修改弹性网卡内网IP信息 {@link ModifyPrivateIpAddressesAttributeRequest} {@link ModifyPrivateIpAddressesAttributeResponse} */
  ModifyPrivateIpAddressesAttribute(data: ModifyPrivateIpAddressesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyPrivateIpAddressesAttributeResponse>;
  /** 修改路由表属性 {@link ModifyRouteTableAttributeRequest} {@link ModifyRouteTableAttributeResponse} */
  ModifyRouteTableAttribute(data: ModifyRouteTableAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyRouteTableAttributeResponse>;
  /** 修改安全组属性 {@link ModifySecurityGroupAttributeRequest} {@link ModifySecurityGroupAttributeResponse} */
  ModifySecurityGroupAttribute(data: ModifySecurityGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupAttributeResponse>;
  /** 修改安全组出站和入站规则 {@link ModifySecurityGroupPoliciesRequest} {@link ModifySecurityGroupPoliciesResponse} */
  ModifySecurityGroupPolicies(data: ModifySecurityGroupPoliciesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySecurityGroupPoliciesResponse>;
  /** 修改子网属性 {@link ModifySubnetAttributeRequest} {@link ModifySubnetAttributeResponse} */
  ModifySubnetAttribute(data: ModifySubnetAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySubnetAttributeResponse>;
  /** 修改监听器绑定的后端机器的端口 {@link ModifyTargetPortRequest} {@link ModifyTargetPortResponse} */
  ModifyTargetPort(data: ModifyTargetPortRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetPortResponse>;
  /** 修改监听器绑定的后端机器的转发权重 {@link ModifyTargetWeightRequest} {@link ModifyTargetWeightResponse} */
  ModifyTargetWeight(data: ModifyTargetWeightRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyTargetWeightResponse>;
  /** 修改VPC属性 {@link ModifyVpcAttributeRequest} {@link ModifyVpcAttributeResponse} */
  ModifyVpcAttribute(data: ModifyVpcAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyVpcAttributeResponse>;
  /** 查询Vpc异步任务请求结果 {@link QueryVpcTaskResultRequest} {@link QueryVpcTaskResultResponse} */
  QueryVpcTaskResult(data: QueryVpcTaskResultRequest, config?: AxiosRequestConfig): AxiosPromise<QueryVpcTaskResultResponse>;
  /** 重启实例 {@link RebootInstancesRequest} {@link RebootInstancesResponse} */
  RebootInstances(data: RebootInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RebootInstancesResponse>;
  /** 释放弹性公网IP {@link ReleaseAddressesRequest} {@link ReleaseAddressesResponse} */
  ReleaseAddresses(data: ReleaseAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseAddressesResponse>;
  /** 释放IPv6地址 {@link ReleaseIpv6AddressesRequest} {@link ReleaseIpv6AddressesResponse} */
  ReleaseIpv6Addresses(data: ReleaseIpv6AddressesRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseIpv6AddressesResponse>;
  /** 释放弹性公网IPv6地址带宽 {@link ReleaseIpv6AddressesBandwidthRequest} {@link ReleaseIpv6AddressesBandwidthResponse} */
  ReleaseIpv6AddressesBandwidth(data: ReleaseIpv6AddressesBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ReleaseIpv6AddressesBandwidthResponse>;
  /** 弹性网卡退还内网 IP {@link RemovePrivateIpAddressesRequest} {@link RemovePrivateIpAddressesResponse} */
  RemovePrivateIpAddresses(data: RemovePrivateIpAddressesRequest, config?: AxiosRequestConfig): AxiosPromise<RemovePrivateIpAddressesResponse>;
  /** 替换路由表绑定关系 {@link ReplaceRouteTableAssociationRequest} {@link ReplaceRouteTableAssociationResponse} */
  ReplaceRouteTableAssociation(data: ReplaceRouteTableAssociationRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceRouteTableAssociationResponse>;
  /** 替换路由策略 {@link ReplaceRoutesRequest} {@link ReplaceRoutesResponse} */
  ReplaceRoutes(data: ReplaceRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceRoutesResponse>;
  /** 替换单条安全组路由规则 {@link ReplaceSecurityGroupPolicyRequest} {@link ReplaceSecurityGroupPolicyResponse} */
  ReplaceSecurityGroupPolicy(data: ReplaceSecurityGroupPolicyRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceSecurityGroupPolicyResponse>;
  /** 重装实例 {@link ResetInstancesRequest} {@link ResetInstancesResponse} */
  ResetInstances(data: ResetInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstancesResponse>;
  /** 重置实例的最大带宽上限 {@link ResetInstancesMaxBandwidthRequest} {@link ResetInstancesMaxBandwidthResponse} */
  ResetInstancesMaxBandwidth(data: ResetInstancesMaxBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstancesMaxBandwidthResponse>;
  /** 重置实例密码 {@link ResetInstancesPasswordRequest} {@link ResetInstancesPasswordResponse} */
  ResetInstancesPassword(data: ResetInstancesPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstancesPasswordResponse>;
  /** 重置路由表名称和路由策略 {@link ResetRoutesRequest} {@link ResetRoutesResponse} */
  ResetRoutes(data: ResetRoutesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetRoutesResponse>;
  /** 创建实例 {@link RunInstancesRequest} {@link RunInstancesResponse} */
  RunInstances(data: RunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RunInstancesResponse>;
  /** 设置负载均衡实例的安全组 {@link SetLoadBalancerSecurityGroupsRequest} {@link SetLoadBalancerSecurityGroupsResponse} */
  SetLoadBalancerSecurityGroups(data: SetLoadBalancerSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<SetLoadBalancerSecurityGroupsResponse>;
  /** 绑定或解绑一个安全组到多个负载均衡实例 {@link SetSecurityGroupForLoadbalancersRequest} {@link SetSecurityGroupForLoadbalancersResponse} */
  SetSecurityGroupForLoadbalancers(data: SetSecurityGroupForLoadbalancersRequest, config?: AxiosRequestConfig): AxiosPromise<SetSecurityGroupForLoadbalancersResponse>;
  /** 开启实例 {@link StartInstancesRequest} {@link StartInstancesResponse} */
  StartInstances(data: StartInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StartInstancesResponse>;
  /** 实例关机 {@link StopInstancesRequest} {@link StopInstancesResponse} */
  StopInstances(data: StopInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StopInstancesResponse>;
  /** 退还云硬盘 {@link TerminateDisksRequest} {@link TerminateDisksResponse} */
  TerminateDisks(data: TerminateDisksRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateDisksResponse>;
  /** 销毁实例 {@link TerminateInstancesRequest} {@link TerminateInstancesResponse} */
  TerminateInstances(data: TerminateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateInstancesResponse>;
  /** 释放IPv6子网段 {@link UnassignIpv6SubnetCidrBlockRequest} {@link UnassignIpv6SubnetCidrBlockResponse} */
  UnassignIpv6SubnetCidrBlock(data: UnassignIpv6SubnetCidrBlockRequest, config?: AxiosRequestConfig): AxiosPromise<UnassignIpv6SubnetCidrBlockResponse>;
}

export declare type Versions = ["2019-07-19"];

export default Ecm;
