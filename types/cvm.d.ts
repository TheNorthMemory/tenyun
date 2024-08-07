/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 配额详情 */
declare interface AccountQuota {
  /** 后付费配额列表 */
  PostPaidQuotaSet: PostPaidQuota[];
  /** 预付费配额列表 */
  PrePaidQuotaSet: PrePaidQuota[];
  /** spot配额列表 */
  SpotPaidQuotaSet: SpotPaidQuota[];
  /** 镜像配额列表 */
  ImageQuotaSet: ImageQuota[];
  /** 置放群组配额列表 */
  DisasterRecoverGroupQuotaSet: DisasterRecoverGroupQuota[];
}

/** 配额详情概览 */
declare interface AccountQuotaOverview {
  /** 地域 */
  Region: string;
  /** 配额数据 */
  AccountQuota: AccountQuota;
}

/** 定时任务 */
declare interface ActionTimer {
  /** 定时器动作，目前仅支持销毁一个值：TerminateInstances。 */
  TimerAction?: string | null;
  /** 执行时间，按照ISO8601标准表示，并且使用UTC时间。格式为 YYYY-MM-DDThh:mm:ssZ。例如 2018-05-29T11:26:40Z，执行时间必须大于当前时间5分钟。 */
  ActionTime?: string | null;
  /** 扩展数据 */
  Externals?: Externals | null;
}

/** 描述预付费模式，即包年包月相关参数。包括购买时长和自动续费逻辑等。 */
declare interface ChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36。 */
  Period: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_AUTO_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag?: string;
}

/** chc部署网络minos引导配置。 */
declare interface ChcDeployExtraConfig {
}

/** CHC物理服务器信息 */
declare interface ChcHost {
  /** CHC物理服务器ID。 */
  ChcId: string;
  /** 实例名称。 */
  InstanceName: string;
  /** 服务器序列号。 */
  SerialNumber: string;
  /** CHC的状态INIT: 设备已录入。还未配置带外和部署网络READY: 已配置带外和部署网络PREPARED: 可分配云主机ONLINE: 已分配云主机OPERATING: 设备操作中，如正在配置带外网络等。CLEAR_NETWORK_FAILED: 清理带外和部署网络失败 */
  InstanceState: string;
  /** 设备类型。 */
  DeviceType?: string | null;
  /** 所属可用区 */
  Placement: Placement;
  /** 带外网络。 */
  BmcVirtualPrivateCloud?: VirtualPrivateCloud | null;
  /** 带外网络Ip。 */
  BmcIp?: string | null;
  /** 带外网络安全组Id。 */
  BmcSecurityGroupIds?: string[] | null;
  /** 部署网络。 */
  DeployVirtualPrivateCloud?: VirtualPrivateCloud | null;
  /** 部署网络Ip。 */
  DeployIp?: string | null;
  /** 部署网络安全组Id。 */
  DeploySecurityGroupIds?: string[] | null;
  /** 关联的云主机Id。 */
  CvmInstanceId?: string | null;
  /** 服务器导入的时间。 */
  CreatedTime: string;
  /** 机型的硬件描述，分别为CPU核数，内存容量和磁盘容量 */
  HardwareDescription?: string | null;
  /** CHC物理服务器的CPU核数 */
  CPU: number | null;
  /** CHC物理服务器的内存大小，单位为GB */
  Memory: number | null;
  /** CHC物理服务器的磁盘信息 */
  Disk: string | null;
  /** 带外网络下分配的MAC地址 */
  BmcMAC: string | null;
  /** 部署网络下分配的MAC地址 */
  DeployMAC: string | null;
  /** 设备托管类型。HOSTING: 托管TENANT: 租赁 */
  TenantType?: string | null;
  /** chc dhcp选项，用于minios调试 */
  DeployExtraConfig?: ChcDeployExtraConfig | null;
}

/** CHC物理服务器实例禁止操作的返回结构体 */
declare interface ChcHostDeniedActions {
  /** CHC物理服务器的实例id */
  ChcId: string;
  /** CHC物理服务器的状态 */
  State: string;
  /** 当前CHC物理服务器禁止做的操作 */
  DenyActions: string[];
}

/** 描述了实例CPU拓扑结构的相关信息。 */
declare interface CpuTopology {
  /** 决定启用的CPU物理核心数。 */
  CoreCount?: number;
  /** 每核心线程数。该参数决定是否开启或关闭超线程。1 表示关闭超线程 2 表示开启超线程 不设置时，实例使用默认的超线程策略。开关超线程请参考文档：[开启与关闭超线程](https://cloud.tencent.com/document/product/213/103798)。 */
  ThreadPerCore?: number;
}

/** 描述了数据盘的信息 */
declare interface DataDisk {
  /** 数据盘大小，单位：GB。最小调整步长为10G，不同数据盘类型取值范围不同，具体限制详见：[存储概述](https://cloud.tencent.com/document/product/213/4952)。默认值为0，表示不购买数据盘。更多限制详见产品文档。 */
  DiskSize: number;
  /** 数据盘类型。数据盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围： LOCAL_BASIC：本地硬盘 LOCAL_SSD：本地SSD硬盘 LOCAL_NVME：本地NVME硬盘，与InstanceType强相关，不支持指定 LOCAL_PRO：本地HDD硬盘，与InstanceType强相关，不支持指定 CLOUD_BASIC：普通云硬盘 CLOUD_PREMIUM：高性能云硬盘 CLOUD_SSD：SSD云硬盘 CLOUD_HSSD：增强型SSD云硬盘 CLOUD_TSSD：极速型SSD云硬盘 CLOUD_BSSD：通用型SSD云硬盘默认取值：LOCAL_BASIC。该参数对`ResizeInstanceDisk`接口无效。 */
  DiskType?: string;
  /** 数据盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID，暂时不支持该参数。该参数目前仅用于`DescribeInstances`等查询类接口的返回参数，不可用于`RunInstances`等写接口的入参。 */
  DiskId?: string;
  /** 数据盘是否随子机销毁。取值范围：TRUE：子机销毁时，销毁数据盘，只支持按小时后付费云盘 FALSE：子机销毁时，保留数据盘 默认取值：TRUE 该参数目前仅用于 `RunInstances` 接口。 */
  DeleteWithInstance?: boolean | null;
  /** 数据盘快照ID。选择的数据盘快照大小需小于数据盘大小。 */
  SnapshotId?: string | null;
  /** 数据盘是加密。取值范围：true：加密 false：不加密 默认取值：false 该参数目前仅用于 `RunInstances` 接口。 */
  Encrypt?: boolean | null;
  /** 自定义CMK对应的ID，取值为UUID或者类似kms-abcd1234。用于加密云盘。该参数目前仅用于 `RunInstances` 接口。 */
  KmsKeyId?: string | null;
  /** 云硬盘性能，单位：MB/s */
  ThroughputPerformance?: number | null;
  /** 所属的独享集群ID。 */
  CdcId?: string | null;
  /** 突发性能 注：内测中。 */
  BurstPerformance?: boolean | null;
}

/** 容灾组信息 */
declare interface DisasterRecoverGroup {
  /** 分散置放群组id。 */
  DisasterRecoverGroupId?: string;
  /** 分散置放群组名称，长度1-60个字符。 */
  Name?: string;
  /** 分散置放群组类型，取值范围：HOST：物理机SW：交换机RACK：机架 */
  Type?: string;
  /** 分散置放群组内最大容纳云服务器数量。 */
  CvmQuotaTotal?: number;
  /** 分散置放群组内云服务器当前数量。 */
  CurrentNum?: number;
  /** 分散置放群组内，云服务器id列表。 */
  InstanceIds?: string[] | null;
  /** 分散置放群组创建时间。 */
  CreateTime?: string | null;
}

/** 置放群组配置数据 */
declare interface DisasterRecoverGroupQuota {
  /** 可创建置放群组数量的上限。 */
  GroupQuota: number;
  /** 当前用户已经创建的置放群组数量。 */
  CurrentNum: number;
  /** 物理机类型容灾组内实例的配额数。 */
  CvmInHostGroupQuota: number;
  /** 交换机类型容灾组内实例的配额数。 */
  CvmInSwitchGroupQuota: number;
  /** 机架类型容灾组内实例的配额数。 */
  CvmInRackGroupQuota: number;
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

/** 扩展数据 */
declare interface Externals {
  /** 释放地址 */
  ReleaseAddress?: boolean | null;
  /** 不支持的网络类型，取值范围：BASIC：基础网络VPC1.0：私有网络VPC1.0 */
  UnsupportNetworks?: string[] | null;
  /** HDD本地存储属性 */
  StorageBlockAttr?: StorageBlock | null;
}

/** >描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。>> 以[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口的`Filter`为例。若我们需要查询可用区（`zone`）为广州一区 ***并且*** 实例计费模式（`instance-charge-type`）为包年包月 ***或者*** 按量计费的实例时，可如下实现：```Filters.0.Name=zone&Filters.0.Values.0=ap-guangzhou-1&Filters.1.Name=instance-charge-type&Filters.1.Values.0=PREPAID&Filters.1.Values.1=POSTPAID_BY_HOUR``` */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 实例GPU信息 */
declare interface GPUInfo {
  /** 实例GPU个数。值小于1代表VGPU类型，大于1代表GPU直通类型。 */
  GPUCount: number | null;
  /** 实例GPU地址。 */
  GPUId: string[] | null;
  /** 实例GPU类型。 */
  GPUType: string | null;
}

/** 专用宿主机实例详细信息 */
declare interface HostItem {
  /** 专用宿主机实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement?: Placement;
  /** 专用宿主机实例ID */
  HostId?: string;
  /** 专用宿主机实例类型 */
  HostType?: string;
  /** 专用宿主机实例名称 */
  HostName?: string;
  /** 专用宿主机实例付费模式 */
  HostChargeType?: string;
  /** 专用宿主机实例自动续费标记 */
  RenewFlag?: string;
  /** 专用宿主机实例创建时间 */
  CreatedTime?: string;
  /** 专用宿主机实例过期时间 */
  ExpiredTime?: string;
  /** 专用宿主机实例上已创建云子机的实例id列表 */
  InstanceIds?: string[];
  /** 专用宿主机实例状态 */
  HostState?: string;
  /** 专用宿主机实例IP */
  HostIp?: string;
  /** 专用宿主机实例资源信息 */
  HostResource?: HostResource;
  /** 专用宿主机所属的围笼ID。该字段仅对金融专区围笼内的专用宿主机有效。 */
  CageId?: string | null;
  /** 专用宿主机关联的标签列表。 */
  Tags?: Tag[] | null;
}

/** cdh相关价格信息 */
declare interface HostPriceInfo {
  /** 描述了cdh实例相关的价格信息 */
  HostPrice: ItemPrice;
}

/** 专用宿主机实例的资源信息 */
declare interface HostResource {
  /** 专用宿主机实例总CPU核数 */
  CpuTotal?: number;
  /** 专用宿主机实例可用CPU核数 */
  CpuAvailable?: number;
  /** 专用宿主机实例总内存大小（单位为:GiB） */
  MemTotal?: number;
  /** 专用宿主机实例可用内存大小（单位为:GiB） */
  MemAvailable?: number;
  /** 专用宿主机实例总磁盘大小（单位为:GiB） */
  DiskTotal?: number;
  /** 专用宿主机实例可用磁盘大小（单位为:GiB） */
  DiskAvailable?: number;
  /** 专用宿主机实例磁盘类型 */
  DiskType?: string;
  /** 专用宿主机实例总GPU卡数 */
  GpuTotal?: number;
  /** 专用宿主机实例可用GPU卡数 */
  GpuAvailable?: number;
  /** CDH owner */
  ExclusiveOwner?: string | null;
}

/** 高性能计算集群 */
declare interface HpcClusterInfo {
  /** 高性能计算集群ID */
  HpcClusterId?: string;
  /** 高性能计算集群名 */
  Name?: string | null;
  /** 高性能计算集群备注 */
  Remark?: string | null;
  /** 集群下设备容量 */
  CvmQuotaTotal?: number;
  /** 集群所在可用区 */
  Zone?: string;
  /** 集群当前已有设备量 */
  CurrentNum?: number;
  /** 集群创建时间 */
  CreateTime?: string | null;
  /** 集群内实例ID列表 */
  InstanceIds?: string[] | null;
  /** 高性能计算集群类型。 */
  HpcClusterType?: string | null;
  /** 高性能计算集群对应的业务场景标识，当前只支持CDC。 */
  HpcClusterBusinessId?: string | null;
}

/** 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。 */
declare interface Image {
  /** 镜像ID */
  ImageId?: string;
  /** 镜像操作系统 */
  OsName?: string;
  /** 镜像类型 */
  ImageType?: string;
  /** 镜像创建时间 */
  CreatedTime?: string;
  /** 镜像名称 */
  ImageName?: string;
  /** 镜像描述 */
  ImageDescription?: string;
  /** 镜像大小 */
  ImageSize?: number;
  /** 镜像架构 */
  Architecture?: string;
  /** 镜像状态:CREATING-创建中NORMAL-正常CREATEFAILED-创建失败USING-使用中SYNCING-同步中IMPORTING-导入中IMPORTFAILED-导入失败 */
  ImageState?: string;
  /** 镜像来源平台，包括如TencentOS、 CentOS、 Windows、 Ubuntu、 Debian、Fedora等。 */
  Platform?: string;
  /** 镜像创建者 */
  ImageCreator?: string;
  /** 镜像来源 */
  ImageSource?: string;
  /** 同步百分比 */
  SyncPercent?: number | null;
  /** 镜像是否支持cloud-init */
  IsSupportCloudinit?: boolean | null;
  /** 镜像关联的快照信息 */
  SnapshotSet?: Snapshot[] | null;
  /** 镜像关联的标签列表。 */
  Tags?: Tag[] | null;
  /** 镜像许可类型 */
  LicenseType?: string;
}

/** 支持的操作系统类型，根据Windows和Linux分类。 */
declare interface ImageOsList {
  /** 支持的Windows操作系统。 */
  Windows: string[] | null;
  /** 支持的Linux操作系统 */
  Linux: string[] | null;
}

/** 镜像配额 */
declare interface ImageQuota {
  /** 已使用配额 */
  UsedQuota: number;
  /** 总配额 */
  TotalQuota: number;
}

/** 描述实例的信息 */
declare interface Instance {
  /** 实例所在的位置。 */
  Placement?: Placement;
  /** 实例`ID`。 */
  InstanceId?: string;
  /** 实例机型。 */
  InstanceType?: string;
  /** 实例的CPU核数，单位：核。 */
  CPU?: number;
  /** 实例内存容量，单位：`GB`。 */
  Memory?: number;
  /** 实例业务状态。取值范围：NORMAL：表示正常状态的实例EXPIRED：表示过期的实例PROTECTIVELY_ISOLATED：表示被安全隔离的实例。 */
  RestrictState?: string;
  /** 实例名称。 */
  InstanceName?: string;
  /** 实例计费模式。取值范围：`PREPAID`：表示预付费，即包年包月`POSTPAID_BY_HOUR`：表示后付费，即按量计费`CDHPAID`：`专用宿主机`付费，即只对`专用宿主机`计费，不对`专用宿主机`上的实例计费。`SPOTPAID`：表示竞价实例付费。 */
  InstanceChargeType?: string;
  /** 实例系统盘信息。 */
  SystemDisk?: SystemDisk;
  /** 实例数据盘信息。 */
  DataDisks?: DataDisk[];
  /** 实例主网卡的内网`IP`列表。 */
  PrivateIpAddresses?: string[];
  /** 实例主网卡的公网`IP`列表。 */
  PublicIpAddresses?: string[] | null;
  /** 实例带宽信息。 */
  InternetAccessible?: InternetAccessible;
  /** 实例所属虚拟私有网络信息。 */
  VirtualPrivateCloud?: VirtualPrivateCloud;
  /** 生产实例所使用的镜像`ID`。 */
  ImageId?: string;
  /** 自动续费标识。取值范围：`NOTIFY_AND_MANUAL_RENEW`：表示通知即将过期，但不自动续费`NOTIFY_AND_AUTO_RENEW`：表示通知即将过期，而且自动续费`DISABLE_NOTIFY_AND_MANUAL_RENEW`：表示不通知即将过期，也不自动续费。注意：后付费模式本项为null */
  RenewFlag?: string;
  /** 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。 */
  CreatedTime?: string;
  /** 到期时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。注意：后付费模式本项为null */
  ExpiredTime?: string;
  /** 操作系统名称。 */
  OsName: string;
  /** 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。 */
  SecurityGroupIds: string[];
  /** 实例登录设置。目前只返回实例所关联的密钥。 */
  LoginSettings: LoginSettings;
  /** 实例状态。取值范围：PENDING：表示创建中LAUNCH_FAILED：表示创建失败RUNNING：表示运行中STOPPED：表示关机STARTING：表示开机中STOPPING：表示关机中REBOOTING：表示重启中SHUTDOWN：表示停止待销毁TERMINATING：表示销毁中。 */
  InstanceState: string;
  /** 实例关联的标签列表。 */
  Tags: Tag[];
  /** 实例的关机计费模式。取值范围：KEEP_CHARGING：关机继续收费STOP_CHARGING：关机停止收费NOT_APPLICABLE：实例处于非关机状态或者不适用关机停止计费的条件 */
  StopChargingMode: string;
  /** 实例全局唯一ID */
  Uuid: string;
  /** 实例的最新操作。例：StopInstances、ResetInstance。 */
  LatestOperation: string | null;
  /** 实例的最新操作状态。取值范围：SUCCESS：表示操作成功OPERATING：表示操作执行中FAILED：表示操作失败 */
  LatestOperationState: string | null;
  /** 实例最新操作的唯一请求 ID。 */
  LatestOperationRequestId: string | null;
  /** 分散置放群组ID。 */
  DisasterRecoverGroupId: string | null;
  /** 实例的IPv6地址。 */
  IPv6Addresses: string[] | null;
  /** CAM角色名。 */
  CamRoleName: string | null;
  /** 高性能计算集群`ID`。 */
  HpcClusterId: string | null;
  /** 高性能计算集群`IP`列表。 */
  RdmaIpAddresses: string[] | null;
  /** 实例所在的专用集群`ID`。 */
  DedicatedClusterId: string | null;
  /** 实例隔离类型。取值范围：ARREAR：表示欠费隔离EXPIRE：表示到期隔离MANMADE：表示主动退还隔离NOTISOLATED：表示未隔离 */
  IsolatedSource: string | null;
  /** GPU信息。如果是gpu类型子机，该值会返回GPU信息，如果是其他类型子机则不返回。 */
  GPUInfo?: GPUInfo | null;
  /** 实例的操作系统许可类型，默认为TencentCloud */
  LicenseType?: string;
  /** 实例销毁保护标志，表示是否允许通过api接口删除实例。取值范围：TRUE：表示开启实例保护，不允许通过api接口删除实例FALSE：表示关闭实例保护，允许通过api接口删除实例默认取值：FALSE。 */
  DisableApiTermination?: boolean;
  /** 默认登录用户。 */
  DefaultLoginUser?: string;
  /** 默认登录端口。 */
  DefaultLoginPort?: number;
  /** 实例的最新操作错误信息。 */
  LatestOperationErrorMsg?: string | null;
}

/** 描述了实例的计费模式 */
declare interface InstanceChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。 */
  Period: number | null;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag?: string | null;
}

/** 描述实例的机型族配置信息形如：{'InstanceFamilyName': '标准型S1', 'InstanceFamily': 'S1'}、{'InstanceFamilyName': '网络优化型N1', 'InstanceFamily': 'N1'}、{'InstanceFamilyName': '高IO型I1', 'InstanceFamily': 'I1'}等。 */
declare interface InstanceFamilyConfig {
  /** 机型族名称的中文全称。 */
  InstanceFamilyName: string;
  /** 机型族名称的英文简称。 */
  InstanceFamily: string;
}

/** 描述退款详情。 */
declare interface InstanceRefund {
  /** 实例Id。 */
  InstanceId?: string | null;
  /** 退款数额。 */
  Refunds?: number | null;
  /** 退款详情。 */
  PriceDetail?: string | null;
}

/** 描述实例的状态。状态类型详见[实例状态表](/document/api/213/15753) */
declare interface InstanceStatus {
  /** 实例`ID`。 */
  InstanceId?: string;
  /** 实例状态。取值范围：PENDING：表示创建中LAUNCH_FAILED：表示创建失败RUNNING：表示运行中STOPPED：表示关机STARTING：表示开机中STOPPING：表示关机中REBOOTING：表示重启中SHUTDOWN：表示停止待销毁TERMINATING：表示销毁中ENTER_RESCUE_MODE：表示进入救援模式RESCUE_MODE：表示在救援模式中EXIT_RESCUE_MODE：表示退出救援模式ENTER_SERVICE_LIVE_MIGRATE：表示进入在线服务迁移SERVICE_LIVE_MIGRATE：表示在线服务迁移中EXIT_SERVICE_LIVE_MIGRATE：表示退出在线服务迁移。 */
  InstanceState?: string;
}

/** 描述实例机型配置信息 */
declare interface InstanceTypeConfig {
  /** 可用区。 */
  Zone?: string;
  /** 实例机型。 */
  InstanceType?: string;
  /** 实例机型系列。 */
  InstanceFamily?: string;
  /** GPU核数，单位：核。 */
  GPU?: number;
  /** CPU核数，单位：核。 */
  CPU?: number;
  /** 内存容量，单位：`GB`。 */
  Memory?: number;
  /** FPGA核数，单位：核。 */
  FPGA?: number;
  /** 实例机型映射的物理GPU卡数，单位：卡。vGPU卡型小于1，直通卡型大于等于1。vGPU是通过分片虚拟化技术，将物理GPU卡重新划分，同一块GPU卡经虚拟化分割后可分配至不同的实例使用。直通卡型会将GPU设备直接挂载给实例使用。 */
  GpuCount?: number;
}

/** 描述实例机型配置信息及状态信息 */
declare interface InstanceTypeConfigStatus {
  /** 状态描述 */
  Status: string;
  /** 状态描述信息 */
  Message: string | null;
  /** 配置信息 */
  InstanceTypeConfig: InstanceTypeConfig;
}

/** 描述实例机型配额信息。 */
declare interface InstanceTypeQuotaItem {
  /** 可用区。 */
  Zone?: string;
  /** 实例机型。 */
  InstanceType?: string;
  /** 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月POSTPAID_BY_HOUR：表示后付费，即按量计费CDHPAID：表示[专用宿主机](https://cloud.tencent.com/document/product/416)付费，即只对`专用宿主机`计费，不对`专用宿主机`上的实例计费。`SPOTPAID`：表示竞价实例付费。 */
  InstanceChargeType?: string;
  /** 网卡类型，例如：25代表25G网卡 */
  NetworkCard?: number;
  /** 扩展属性。 */
  Externals?: Externals | null;
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
  SoldOutReason?: string | null;
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
  StatusCategory?: string | null;
}

/** 描述了实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等 */
declare interface InternetAccessible {
  /** 网络计费类型。取值范围：BANDWIDTH_PREPAID：预付费按带宽结算TRAFFIC_POSTPAID_BY_HOUR：流量按小时后付费BANDWIDTH_POSTPAID_BY_HOUR：带宽按小时后付费BANDWIDTH_PACKAGE：带宽包用户默认取值：非带宽包用户默认与子机付费类型保持一致，比如子机付费类型为预付费，网络计费类型默认为预付费；子机付费类型为后付费，网络计费类型默认为后付费。 */
  InternetChargeType?: string;
  /** 公网出带宽上限，单位：Mbps。默认值：0Mbps。不同机型带宽上限范围不一致，具体限制详见[购买网络带宽](https://cloud.tencent.com/document/product/213/12523)。 */
  InternetMaxBandwidthOut?: number;
  /** 是否分配公网IP。取值范围：true：表示分配公网IPfalse：表示不分配公网IP当公网带宽大于0Mbps时，可自由选择开通与否，默认开通公网IP；当公网带宽为0，则不允许分配公网IP。该参数仅在RunInstances接口中作为入参使用。 */
  PublicIpAssigned?: boolean;
  /** 带宽包ID。可通过[`DescribeBandwidthPackages`](https://cloud.tencent.com/document/api/215/19209)接口返回值中的`BandwidthPackageId`获取。该参数仅在RunInstances接口中作为入参使用。 */
  BandwidthPackageId?: string;
}

/** 描述了按带宽计费的相关信息 */
declare interface InternetBandwidthConfig {
  /** 开始时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。 */
  StartTime?: string;
  /** 结束时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。 */
  EndTime?: string;
  /** 实例带宽信息。 */
  InternetAccessible?: InternetAccessible;
}

/** 描述了网络计费 */
declare interface InternetChargeTypeConfig {
  /** 网络计费模式。 */
  InternetChargeType?: string;
  /** 网络计费模式描述信息。 */
  Description?: string;
}

/** 描述了单项的价格信息 */
declare interface ItemPrice {
  /** 后续合计费用的原价，后付费模式使用，单位：元。如返回了其他时间区间项，如UnitPriceSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时 */
  UnitPrice?: number | null;
  /** 后续计价单元，后付费模式使用，可取值范围： HOUR：表示计价单元是按每小时来计算。当前涉及该计价单元的场景有：实例按小时后付费（POSTPAID_BY_HOUR）、带宽按小时后付费（BANDWIDTH_POSTPAID_BY_HOUR）：GB：表示计价单元是按每GB来计算。当前涉及该计价单元的场景有：流量按小时后付费（TRAFFIC_POSTPAID_BY_HOUR）。 */
  ChargeUnit?: string | null;
  /** 预支合计费用的原价，预付费模式使用，单位：元。 */
  OriginalPrice?: number | null;
  /** 预支合计费用的折扣价，预付费模式使用，单位：元。 */
  DiscountPrice?: number | null;
  /** 折扣，如20.0代表2折。 */
  Discount?: number | null;
  /** 后续合计费用的折扣价，后付费模式使用，单位：元如返回了其他时间区间项，如UnitPriceDiscountSecondStep，则本项代表时间区间在(0, 96)小时；若未返回其他时间区间项，则本项代表全时段，即(0, ∞)小时 */
  UnitPriceDiscount?: number | null;
  /** 使用时间区间在(96, 360)小时的后续合计费用的原价，后付费模式使用，单位：元。 */
  UnitPriceSecondStep?: number | null;
  /** 使用时间区间在(96, 360)小时的后续合计费用的折扣价，后付费模式使用，单位：元 */
  UnitPriceDiscountSecondStep?: number | null;
  /** 使用时间区间在(360, ∞)小时的后续合计费用的原价，后付费模式使用，单位：元。 */
  UnitPriceThirdStep?: number | null;
  /** 使用时间区间在(360, ∞)小时的后续合计费用的折扣价，后付费模式使用，单位：元 */
  UnitPriceDiscountThirdStep?: number | null;
  /** 预支三年合计费用的原价，预付费模式使用，单位：元。 */
  OriginalPriceThreeYear?: number | null;
  /** 预支三年合计费用的折扣价，预付费模式使用，单位：元。 */
  DiscountPriceThreeYear?: number | null;
  /** 预支三年应用的折扣，如20.0代表2折。 */
  DiscountThreeYear?: number | null;
  /** 预支五年合计费用的原价，预付费模式使用，单位：元。 */
  OriginalPriceFiveYear?: number | null;
  /** 预支五年合计费用的折扣价，预付费模式使用，单位：元。 */
  DiscountPriceFiveYear?: number | null;
  /** 预支五年应用的折扣，如20.0代表2折。 */
  DiscountFiveYear?: number | null;
  /** 预支一年合计费用的原价，预付费模式使用，单位：元。 */
  OriginalPriceOneYear?: number | null;
  /** 预支一年合计费用的折扣价，预付费模式使用，单位：元。 */
  DiscountPriceOneYear?: number | null;
  /** 预支一年应用的折扣，如20.0代表2折。 */
  DiscountOneYear?: number | null;
}

/** 描述密钥对信息 */
declare interface KeyPair {
  /** 密钥对的`ID`，是密钥对的唯一标识。 */
  KeyId?: string;
  /** 密钥对名称。 */
  KeyName?: string;
  /** 密钥对所属的项目`ID`。 */
  ProjectId?: number;
  /** 密钥对描述信息。 */
  Description?: string;
  /** 密钥对的纯文本公钥。 */
  PublicKey?: string;
  /** 密钥对的纯文本私钥。腾讯云不会保管私钥，请用户自行妥善保存。 */
  PrivateKey?: string;
  /** 密钥关联的实例`ID`列表。 */
  AssociatedInstanceIds?: string[];
  /** 创建时间。按照`ISO8601`标准表示，并且使用`UTC`时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。 */
  CreatedTime?: string;
  /** 密钥关联的标签列表。 */
  Tags?: Tag[] | null;
}

/** 实例启动模板，通过该参数可使用实例模板中的预设参数创建实例。 */
declare interface LaunchTemplate {
  /** 实例启动模板ID，通过该参数可使用实例模板中的预设参数创建实例。 */
  LaunchTemplateId?: string;
  /** 实例启动模板版本号，若给定，新实例启动模板将基于给定的版本号创建 */
  LaunchTemplateVersion?: number;
}

/** 实例启动模板简要信息。 */
declare interface LaunchTemplateInfo {
  /** 实例启动模版本号。 */
  LatestVersionNumber: number | null;
  /** 实例启动模板ID。 */
  LaunchTemplateId: string | null;
  /** 实例启动模板名。 */
  LaunchTemplateName: string | null;
  /** 实例启动模板默认版本号。 */
  DefaultVersionNumber: number | null;
  /** 实例启动模板包含的版本总数量。 */
  LaunchTemplateVersionCount: number | null;
  /** 创建该模板的用户UIN。 */
  CreatedBy: string | null;
  /** 创建该模板的时间。 */
  CreationTime: string | null;
}

/** 实例启动模板版本信息 */
declare interface LaunchTemplateVersionData {
  /** 实例所在的位置。 */
  Placement?: Placement | null;
  /** 实例机型。 */
  InstanceType?: string | null;
  /** 实例名称。 */
  InstanceName?: string | null;
  /** 实例计费模式。取值范围：`PREPAID`：表示预付费，即包年包月`POSTPAID_BY_HOUR`：表示后付费，即按量计费`CDHPAID`：`专用宿主机`付费，即只对`专用宿主机`计费，不对`专用宿主机`上的实例计费。`SPOTPAID`：表示竞价实例付费。 */
  InstanceChargeType?: string | null;
  /** 实例系统盘信息。 */
  SystemDisk?: SystemDisk | null;
  /** 实例数据盘信息。只包含随实例购买的数据盘。 */
  DataDisks?: DataDisk[] | null;
  /** 实例带宽信息。 */
  InternetAccessible?: InternetAccessible | null;
  /** 实例所属虚拟私有网络信息。 */
  VirtualPrivateCloud?: VirtualPrivateCloud | null;
  /** 生产实例所使用的镜像`ID`。 */
  ImageId?: string | null;
  /** 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。 */
  SecurityGroupIds?: string[] | null;
  /** 实例登录设置。目前只返回实例所关联的密钥。 */
  LoginSettings?: LoginSettings | null;
  /** CAM角色名。 */
  CamRoleName?: string | null;
  /** 高性能计算集群`ID`。 */
  HpcClusterId?: string | null;
  /** 购买实例数量。 */
  InstanceCount?: number | null;
  /** 增强服务。 */
  EnhancedService?: EnhancedService | null;
  /** 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB。 */
  UserData?: string | null;
  /** 置放群组ID，仅支持指定一个。 */
  DisasterRecoverGroupIds?: string[] | null;
  /** 定时任务。通过该参数可以为实例指定定时任务，目前仅支持定时销毁。 */
  ActionTimer?: ActionTimer | null;
  /** 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。 */
  InstanceMarketOptions?: InstanceMarketOptionsRequest | null;
  /** 云服务器的主机名。 */
  HostName?: string | null;
  /** 用于保证请求幂等性的字符串。 */
  ClientToken?: string | null;
  /** 预付费模式，即包年包月相关参数设置。 */
  InstanceChargePrepaid?: InstanceChargePrepaid | null;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的云服务器、云硬盘实例。 */
  TagSpecification?: TagSpecification[] | null;
  /** 实例销毁保护标志，表示是否允许通过api接口删除实例。取值范围：TRUE：表示开启实例保护，不允许通过api接口删除实例FALSE：表示关闭实例保护，允许通过api接口删除实例默认取值：FALSE。 */
  DisableApiTermination?: boolean | null;
}

/** 实例启动模板版本集合 */
declare interface LaunchTemplateVersionInfo {
  /** 实例启动模板版本号。 */
  LaunchTemplateVersion: number | null;
  /** 实例启动模板版本数据详情。 */
  LaunchTemplateVersionData: LaunchTemplateVersionData;
  /** 实例启动模板版本创建时间。 */
  CreationTime: string;
  /** 实例启动模板ID。 */
  LaunchTemplateId: string;
  /** 是否为默认启动模板版本。 */
  IsDefaultVersion: boolean;
  /** 实例启动模板版本描述信息。 */
  LaunchTemplateVersionDescription: string | null;
  /** 创建者。 */
  CreatedBy: string;
}

/** 本地磁盘规格 */
declare interface LocalDiskType {
  /** 本地磁盘类型。 */
  Type: string;
  /** 本地磁盘属性。 */
  PartitionType: string;
  /** 本地磁盘最小值。 */
  MinSize: number;
  /** 本地磁盘最大值。 */
  MaxSize: number;
  /** 购买时本地盘是否为必选。取值范围：REQUIRED：表示必选OPTIONAL：表示可选。 */
  Required: string;
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

/** 描述了单台实例操作次数限制 */
declare interface OperationCountLimit {
  /** 实例操作。取值范围：`INSTANCE_DEGRADE`：降配操作`INTERNET_CHARGE_TYPE_CHANGE`：修改网络带宽计费模式 */
  Operation: string;
  /** 实例ID。 */
  InstanceId: string;
  /** 当前已使用次数，如果返回值为-1表示该操作无次数限制。 */
  CurrentCount: number;
  /** 操作次数最高额度，如果返回值为-1表示该操作无次数限制，如果返回值为0表示不支持调整配置。 */
  LimitCount: number;
}

/** 操作系统支持的类型。 */
declare interface OsVersion {
  /** 操作系统类型 */
  OsName: string;
  /** 支持的操作系统版本 */
  OsVersions: string[];
  /** 支持的操作系统架构 */
  Architecture: string[];
}

/** 描述了实例的抽象位置，包括其所在的可用区，所属的项目，宿主机（仅专用宿主机产品可用），母机IP等 */
declare interface Placement {
  /** 实例所属的可用区ID。该参数可以通过调用 [DescribeZones](https://cloud.tencent.com/document/product/213/15707) 的返回值中的Zone字段来获取。 */
  Zone: string;
  /** 实例所属项目ID。该参数可以通过调用 [DescribeProject](https://cloud.tencent.com/document/api/651/78725) 的返回值中的 projectId 字段来获取。不填为默认项目。 */
  ProjectId?: number;
  /** 实例所属的专用宿主机ID列表，仅用于入参。如果您有购买专用宿主机并且指定了该参数，则您购买的实例就会随机的部署在这些专用宿主机上。 */
  HostIds?: string[];
  /** 实例所属的专用宿主机ID，仅用于出参。 */
  HostId?: string;
}

/** 后付费实例配额 */
declare interface PostPaidQuota {
  /** 累计已使用配额 */
  UsedQuota: number;
  /** 剩余配额 */
  RemainingQuota: number;
  /** 总配额 */
  TotalQuota: number;
  /** 可用区 */
  Zone: string;
}

/** 预付费实例配额 */
declare interface PrePaidQuota {
  /** 当月已使用配额 */
  UsedQuota: number;
  /** 单次购买最大数量 */
  OnceQuota: number;
  /** 剩余配额 */
  RemainingQuota: number;
  /** 总配额 */
  TotalQuota: number;
  /** 可用区 */
  Zone: string;
}

/** 价格 */
declare interface Price {
  /** 描述了实例价格。 */
  InstancePrice?: ItemPrice;
  /** 描述了网络价格。 */
  BandwidthPrice?: ItemPrice;
}

/** 地域信息 */
declare interface RegionInfo {
  /** 地域名称，例如，ap-guangzhou */
  Region: string;
  /** 地域描述，例如，华南地区(广州) */
  RegionName: string;
  /** 地域是否可用状态 */
  RegionState: string;
}

/** 描述维修任务的相关信息 */
declare interface RepairTaskInfo {
  /** 维修任务ID */
  TaskId: string;
  /** 实例ID */
  InstanceId: string;
  /** 实例名称 */
  Alias: string | null;
  /** 任务类型ID，与任务类型中文名的对应关系如下：- `101`：实例运行隐患- `102`：实例运行异常- `103`：实例硬盘异常- `104`：实例网络连接异常- `105`：实例运行预警- `106`：实例硬盘预警- `107`：实例维护升级各任务类型的具体含义，可参考 [维修任务分类](https://cloud.tencent.com/document/product/213/67789)。 */
  TaskTypeId: number;
  /** 任务类型中文名 */
  TaskTypeName?: string;
  /** 任务状态ID，与任务状态中文名的对应关系如下：- `1`：待授权- `2`：处理中- `3`：已结束- `4`：已预约- `5`：已取消- `6`：已避免各任务状态的具体含义，可参考 [任务状态](https://cloud.tencent.com/document/product/213/67789)。 */
  TaskStatus: number;
  /** 设备状态ID，与设备状态中文名的对应关系如下：- `1`：故障中- `2`：处理中- `3`：正常- `4`：已预约- `5`：已取消- `6`：已避免 */
  DeviceStatus?: number;
  /** 操作状态ID，与操作状态中文名的对应关系如下：- `1`：未授权- `2`：已授权- `3`：已处理- `4`：已预约- `5`：已取消- `6`：已避免 */
  OperateStatus?: number;
  /** 任务创建时间 */
  CreateTime: string;
  /** 任务授权时间 */
  AuthTime: string | null;
  /** 任务结束时间 */
  EndTime: string | null;
  /** 任务详情 */
  TaskDetail: string | null;
  /** 可用区 */
  Zone: string | null;
  /** 地域 */
  Region: string | null;
  /** 所在私有网络ID */
  VpcId?: string | null;
  /** 所在私有网络名称 */
  VpcName?: string | null;
  /** 所在子网ID */
  SubnetId?: string | null;
  /** 所在子网名称 */
  SubnetName?: string | null;
  /** 实例公网IP */
  WanIp?: string | null;
  /** 实例内网IP */
  LanIp?: string | null;
  /** 产品类型，支持取值：- `CVM`：云服务器- `CDH`：专用宿主机- `CPM2.0`：裸金属云服务器 */
  Product?: string | null;
  /** 任务子类型 */
  TaskSubType?: string | null;
  /** 任务授权类型 */
  AuthType?: number;
  /** 授权渠道，支持取值：- `Waiting_auth`：待授权- `Customer_auth`：客户操作授权- `System_mandatory_auth`：系统默认授权- `Pre_policy_auth`：预置策略授权 */
  AuthSource?: string;
}

/** 预留实例静态配置信息。预留实例当前只针对国际站白名单用户开放。 */
declare interface ReservedInstanceConfigInfoItem {
  /** 实例规格。 */
  Type: string;
  /** 实例规格名称。 */
  TypeName: string;
  /** 优先级。 */
  Order: number;
  /** 实例族信息列表。 */
  InstanceFamilies: ReservedInstanceFamilyItem[];
}

/** 预留实例相关实例族信息。预留实例当前只针对国际站白名单用户开放。 */
declare interface ReservedInstanceFamilyItem {
  /** 实例族。 */
  InstanceFamily: string;
  /** 优先级。 */
  Order: number;
  /** 实例类型信息列表。 */
  InstanceTypes: ReservedInstanceTypeItem[];
}

/** 预留实例相关价格信息。预留实例当前只针对国际站白名单用户开放。 */
declare interface ReservedInstancePrice {
  /** 预支合计费用的原价，单位：元。 */
  OriginalFixedPrice: number;
  /** 预支合计费用的折扣价，单位：元。 */
  DiscountFixedPrice: number;
  /** 后续合计费用的原价，单位：元/小时 */
  OriginalUsagePrice: number;
  /** 后续合计费用的折扣价，单位：元/小时 */
  DiscountUsagePrice: number;
}

/** 基于付费类型的预留实例相关价格信息。预留实例当前只针对国际站白名单用户开放。 */
declare interface ReservedInstancePriceItem {
  /** 付费类型，如："All Upfront","Partial Upfront","No Upfront" */
  OfferingType?: string;
  /** 预支合计费用，单位：元。 */
  FixedPrice?: number;
  /** 后续合计费用，单位：元/小时 */
  UsagePrice?: number;
  /** 预留实例配置ID */
  ReservedInstancesOfferingId?: string;
  /** 预留实例计费可购买的可用区。 */
  Zone?: string;
  /** 预留实例计费【有效期】即预留实例计费购买时长。形如：31536000。计量单位：秒 */
  Duration?: number;
  /** 预留实例计费的平台描述（即操作系统）。形如：Linux。返回项： Linux 。 */
  ProductDescription?: string;
}

/** 预留实例类型信息。预留实例当前只针对国际站白名单用户开放。 */
declare interface ReservedInstanceTypeItem {
  /** 实例类型。 */
  InstanceType: string;
  /** CPU核数。 */
  Cpu: number;
  /** 内存大小。 */
  Memory: number;
  /** GPU数量。 */
  Gpu: number;
  /** FPGA数量。 */
  Fpga: number;
  /** 本地存储块数量。 */
  StorageBlock: number;
  /** 网卡数。 */
  NetworkCard: number;
  /** 最大带宽。 */
  MaxBandwidth: number;
  /** 主频。 */
  Frequency: string;
  /** CPU型号名称。 */
  CpuModelName: string;
  /** 包转发率。 */
  Pps: number;
  /** 外部信息。 */
  Externals: Externals;
  /** 备注信息。 */
  Remark: string;
  /** 预留实例配置价格信息。 */
  Prices: ReservedInstancePriceItem[];
}

/** 描述用户已购买预留实例计费信息 */
declare interface ReservedInstances {
  /** （此字段已废弃，建议使用字段：ReservedInstanceId）已购买的预留实例计费ID。形如：ri-rtbh4han。 */
  ReservedInstancesId: string;
  /** 预留实例计费的规格。形如：S3.MEDIUM4。返回项：预留实例计费规格列表 */
  InstanceType: string;
  /** 预留实例计费可购买的可用区。形如：ap-guangzhou-1。返回项：可用区列表 */
  Zone: string;
  /** 预留实例计费开始时间。形如：1949-10-01 00:00:00 */
  StartTime: string;
  /** 预留实例计费到期时间。形如：1949-10-01 00:00:00 */
  EndTime: string;
  /** 预留实例计费【有效期】即预留实例计费购买时长。形如：31536000。计量单位：秒。 */
  Duration: number;
  /** 已购买的预留实例计费个数。形如：10。 */
  InstanceCount: number;
  /** 描述预留实例计费的平台描述（即操作系统）。形如：linux。返回项： linux 。 */
  ProductDescription: string;
  /** 预留实例计费购买的状态。形如：active返回项： active (以创建) | pending (等待被创建) | retired (过期)。 */
  State: string;
  /** 可购买的预留实例计费类型的结算货币，使用ISO 4217标准货币代码。形如：USD。返回项：USD（美元）。 */
  CurrencyCode: string;
  /** 预留实例计费的付款类型。形如：All Upfront。返回项： All Upfront (预付全部费用)。 */
  OfferingType: string;
  /** 预留实例计费的类型。形如：S3。返回项：预留实例计费类型列表 */
  InstanceFamily: string;
  /** 已购买的预留实例计费ID。形如：ri-rtbh4han。 */
  ReservedInstanceId: string;
  /** 预留实例显示名称。形如：riname-01 */
  ReservedInstanceName: string;
}

/** 描述可购买预留实例计费信息 */
declare interface ReservedInstancesOffering {
  /** 预留实例计费可购买的可用区。形如：ap-guangzhou-1。返回项：可用区列表 */
  Zone: string;
  /** 可购买的预留实例计费类型的结算货币，使用ISO 4217标准货币代码。返回项：USD（美元）。 */
  CurrencyCode: string;
  /** 预留实例计费【有效期】即预留实例计费购买时长。形如：31536000。计量单位：秒 */
  Duration: number;
  /** 预留实例计费的购买价格。形如：4000.0。计量单位：与 currencyCode 一致，目前支持 USD（美元） */
  FixedPrice: number;
  /** 预留实例计费的实例类型。形如：S3.MEDIUM4。返回项：预留实例计费类型列表 */
  InstanceType: string;
  /** 预留实例计费的付款类型。形如：All Upfront。返回项： All Upfront (预付全部费用)。 */
  OfferingType: string;
  /** 可购买的预留实例计费配置ID。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。 */
  ReservedInstancesOfferingId: string;
  /** 预留实例计费的平台描述（即操作系统）。形如：linux。返回项： linux 。 */
  ProductDescription: string;
  /** 扣除预付费之后的使用价格 (按小时计费)。形如：0.0。目前，因为只支持 All Upfront 付款类型，所以默认为 0元/小时。计量单位：元/小时，货币单位与 currencyCode 一致，目前支持 USD（美元） */
  UsagePrice: number;
}

/** 描述了 “云自动化助手” 服务相关的信息 */
declare interface RunAutomationServiceEnabled {
  /** 是否开启云自动化助手。取值范围：true：表示开启云自动化助手服务false：表示不开启云自动化助手服务默认取值：false。 */
  Enabled?: boolean;
}

/** 描述了 “云监控” 服务相关的信息 */
declare interface RunMonitorServiceEnabled {
  /** 是否开启[云监控](/document/product/248)服务。取值范围：true：表示开启云监控服务false：表示不开启云监控服务默认取值：true。 */
  Enabled?: boolean | null;
}

/** 描述了 “云安全” 服务相关的信息 */
declare interface RunSecurityServiceEnabled {
  /** 是否开启[云安全](/document/product/296)服务。取值范围：true：表示开启云安全服务false：表示不开启云安全服务默认取值：true。 */
  Enabled?: boolean;
}

/** 镜像分享信息结构 */
declare interface SharePermission {
  /** 镜像分享时间 */
  CreatedTime: string;
  /** 镜像分享的账户ID */
  AccountId: string;
}

/** 描述镜像关联的快照信息 */
declare interface Snapshot {
  /** 快照Id。 */
  SnapshotId: string;
  /** 创建此快照的云硬盘类型。取值范围：SYSTEM_DISK：系统盘DATA_DISK：数据盘。 */
  DiskUsage: string;
  /** 创建此快照的云硬盘大小，单位GB。 */
  DiskSize: number;
}

/** 竞价相关选项 */
declare interface SpotMarketOptions {
  /** 竞价出价 */
  MaxPrice: string | null;
  /** 竞价请求类型，当前仅支持类型：one-time */
  SpotInstanceType?: string | null;
}

/** 竞价实例配额 */
declare interface SpotPaidQuota {
  /** 已使用配额，单位：vCPU核心数 */
  UsedQuota: number;
  /** 剩余配额，单位：vCPU核心数 */
  RemainingQuota: number;
  /** 总配额，单位：vCPU核心数 */
  TotalQuota: number;
  /** 可用区 */
  Zone: string;
}

/** HDD的本地存储信息 */
declare interface StorageBlock {
  /** HDD本地存储类型，值为：LOCAL_PRO. */
  Type?: string | null;
  /** HDD本地存储的最小容量 */
  MinSize?: number | null;
  /** HDD本地存储的最大容量 */
  MaxSize?: number | null;
}

/** 同步镜像信息 */
declare interface SyncImage {
  /** 镜像ID */
  ImageId: string;
  /** 地域 */
  Region: string;
}

/** 描述了操作系统所在块设备即系统盘的信息 */
declare interface SystemDisk {
  /** 系统盘类型。系统盘类型限制详见[存储概述](https://cloud.tencent.com/document/product/213/4952)。取值范围：LOCAL_BASIC：本地硬盘LOCAL_SSD：本地SSD硬盘CLOUD_BASIC：普通云硬盘CLOUD_SSD：SSD云硬盘CLOUD_PREMIUM：高性能云硬盘CLOUD_BSSD：通用性SSD云硬盘CLOUD_HSSD：增强型SSD云硬盘CLOUD_TSSD：极速型SSD云硬盘默认取值：当前有库存的硬盘类型。 */
  DiskType?: string;
  /** 系统盘ID。LOCAL_BASIC 和 LOCAL_SSD 类型没有ID。暂时不支持该参数。该参数目前仅用于`DescribeInstances`等查询类接口的返回参数，不可用于`RunInstances`等写接口的入参。 */
  DiskId?: string;
  /** 系统盘大小，单位：GB。默认值为 50 */
  DiskSize?: number;
  /** 所属的独享集群ID。 */
  CdcId?: string | null;
}

/** 标签键值对，可以通过调用 [DescribeTags](https://cloud.tencent.com/document/api/651/35316) 返回值中的 Tags 字段来获取。 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** 创建资源实例时同时绑定的标签对说明 */
declare interface TagSpecification {
  /** 标签绑定的资源类型，云服务器为“instance”，专用宿主机为“host”，镜像为“image”，密钥为“keypair” */
  ResourceType: string | null;
  /** 标签对列表 */
  Tags: Tag[] | null;
}

/** 描述了VPC相关信息，包括子网，IP信息等 */
declare interface VirtualPrivateCloud {
  /** 私有网络ID，形如`vpc-xxx`。有效的VpcId可通过登录[控制台](https://console.cloud.tencent.com/vpc/vpc?rid=1)查询；也可以调用接口 [DescribeVpcEx](/document/api/215/1372) ，从接口返回中的`unVpcId`字段获取。若在创建子机时VpcId与SubnetId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
  VpcId: string;
  /** 私有网络子网ID，形如`subnet-xxx`。有效的私有网络子网ID可通过登录[控制台](https://console.cloud.tencent.com/vpc/subnet?rid=1)查询；也可以调用接口 [DescribeSubnets](/document/api/215/15784) ，从接口返回中的`unSubnetId`字段获取。若在创建子机时SubnetId与VpcId同时传入`DEFAULT`，则强制使用默认vpc网络。 */
  SubnetId: string;
  /** 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：true：表示用作公网网关false：表示不作为公网网关默认取值：false。 */
  AsVpcGateway?: boolean;
  /** 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。当前仅批量创建多台实例时支持传入相同子网的多个 IP。 */
  PrivateIpAddresses?: string[];
  /** 为弹性网卡指定随机生成的 IPv6 地址数量。 */
  Ipv6AddressCount?: number;
}

/** 可用区信息 */
declare interface ZoneInfo {
  /** 可用区名称，例如，ap-guangzhou-3全网可用区名称如下： ap-chongqing-1 ap-seoul-1 ap-seoul-2 ap-chengdu-1 ap-chengdu-2 ap-hongkong-1（售罄） ap-hongkong-2 ap-hongkong-3 ap-shenzhen-fsi-1 ap-shenzhen-fsi-2 ap-shenzhen-fsi-3（售罄） ap-guangzhou-1（售罄） ap-guangzhou-2（售罄） ap-guangzhou-3 ap-guangzhou-4 ap-guangzhou-6 ap-guangzhou-7 ap-tokyo-1 ap-tokyo-2 ap-singapore-1 ap-singapore-2 ap-singapore-3 ap-singapore-4 ap-shanghai-fsi-1 ap-shanghai-fsi-2 ap-shanghai-fsi-3 ap-bangkok-1 ap-bangkok-2 ap-shanghai-1（售罄） ap-shanghai-2 ap-shanghai-3 ap-shanghai-4 ap-shanghai-5 ap-shanghai-8 ap-mumbai-1 ap-mumbai-2 eu-moscow-1 ap-beijing-1（售罄） ap-beijing-2 ap-beijing-3 ap-beijing-4 ap-beijing-5 ap-beijing-6 ap-beijing-7 na-siliconvalley-1 na-siliconvalley-2 eu-frankfurt-1 eu-frankfurt-2 na-toronto-1 na-ashburn-1 na-ashburn-2 ap-nanjing-1 ap-nanjing-2 ap-nanjing-3 sa-saopaulo-1 ap-jakarta-1 ap-jakarta-2 */
  Zone?: string;
  /** 可用区描述，例如，广州三区 */
  ZoneName?: string;
  /** 可用区ID */
  ZoneId?: string;
  /** 可用区状态，包含AVAILABLE和UNAVAILABLE。AVAILABLE代表可用，UNAVAILABLE代表不可用。 */
  ZoneState?: string;
}

declare interface AllocateHostsRequest {
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 */
  Placement: Placement;
  /** 用于保证请求幂等性的字符串。 */
  ClientToken?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  HostChargePrepaid?: ChargePrepaid;
  /** 实例计费类型。目前仅支持：PREPAID（预付费，即包年包月模式），默认为：'PREPAID'。 */
  HostChargeType?: string;
  /** CDH实例机型，默认为：'HS1'。 */
  HostType?: string;
  /** 购买CDH实例数量，默认为：1。 */
  HostCount?: number;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例。 */
  TagSpecification?: TagSpecification[];
}

declare interface AllocateHostsResponse {
  /** 新创建云子机的实例ID列表。 */
  HostIdSet: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateInstancesKeyPairsRequest {
  /** 一个或多个待操作的实例ID，每次请求批量实例的上限为100。可以通过以下方式获取可用的实例ID：通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询实例ID。通过调用接口 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) ，取返回信息中的`InstanceId`获取实例ID。 */
  InstanceIds: string[];
  /** 一个或多个待操作的密钥对ID，每次请求批量密钥对的上限为100。密钥对ID形如：`skey-3glfot13`。可以通过以下方式获取可用的密钥ID：通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的`KeyId`获取密钥对ID。 */
  KeyIds: string[];
  /** 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再绑定密钥。取值范围：true：表示在正常关机失败后进行强制关机。false：表示在正常关机失败后不进行强制关机。默认取值：false。 */
  ForceStop?: boolean;
}

declare interface AssociateInstancesKeyPairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateSecurityGroupsRequest {
  /** 要绑定的`安全组ID`，类似sg-efil73jd，只支持绑定单个安全组。 */
  SecurityGroupIds: string[];
  /** 被绑定的`实例ID`，类似ins-lesecurk，支持指定多个实例，每次请求批量实例的上限为100。 */
  InstanceIds: string[];
}

declare interface AssociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ConfigureChcAssistVpcRequest {
  /** CHC物理服务器的实例Id。 */
  ChcIds: string[];
  /** 带外网络信息。 */
  BmcVirtualPrivateCloud: VirtualPrivateCloud;
  /** 带外网络的安全组列表 */
  BmcSecurityGroupIds?: string[];
  /** 部署网络信息。 */
  DeployVirtualPrivateCloud?: VirtualPrivateCloud;
  /** 部署网络的安全组列表 */
  DeploySecurityGroupIds?: string[];
}

declare interface ConfigureChcAssistVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ConfigureChcDeployVpcRequest {
  /** CHC物理服务器的实例Id。 */
  ChcIds: string[];
  /** 部署网络信息。 */
  DeployVirtualPrivateCloud: VirtualPrivateCloud;
  /** 部署网络的安全组列表。 */
  DeploySecurityGroupIds?: string[];
}

declare interface ConfigureChcDeployVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDisasterRecoverGroupRequest {
  /** 分散置放群组名称，长度1-60个字符，支持中、英文。 */
  Name: string;
  /** 分散置放群组类型，取值范围：HOST：物理机SW：交换机RACK：机架 */
  Type: string;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性。 */
  ClientToken?: string;
}

declare interface CreateDisasterRecoverGroupResponse {
  /** 分散置放群组ID列表。 */
  DisasterRecoverGroupId: string;
  /** 分散置放群组类型，取值范围：HOST：物理机SW：交换机RACK：机架 */
  Type: string;
  /** 分散置放群组名称，长度1-60个字符，支持中、英文。 */
  Name: string;
  /** 置放群组内可容纳的云服务器数量。 */
  CvmQuotaTotal: number;
  /** 置放群组内已有的云服务器数量。 */
  CurrentNum: number;
  /** 置放群组创建时间。 */
  CreateTime: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateHpcClusterRequest {
  /** 可用区。 */
  Zone: string;
  /** 高性能计算集群名称。 */
  Name: string;
  /** 高性能计算集群备注。 */
  Remark?: string;
  /** 高性能计算集群类型。 */
  HpcClusterType?: string;
  /** 高性能计算集群对应的业务场景标识，当前只支持CDC。 */
  HpcClusterBusinessId?: string;
}

declare interface CreateHpcClusterResponse {
  /** 高性能计算集群信息。 */
  HpcClusterSet?: HpcClusterInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateImageRequest {
  /** 镜像名称 */
  ImageName: string;
  /** 需要制作镜像的实例ID。基于实例创建镜像时，为必填参数。 */
  InstanceId?: string;
  /** 镜像描述 */
  ImageDescription?: string;
  /** 是否执行强制关机以制作镜像。取值范围：true：表示关机之后制作镜像false：表示开机状态制作镜像默认取值：false。开机状态制作镜像，可能导致部分数据未备份，影响数据安全。 */
  ForcePoweroff?: string;
  /** 创建Windows镜像时是否启用Sysprep。取值范围：true或false，传true表示启用Sysprep，传false表示不启用，默认取值为false。关于Sysprep的详情请参考[链接](https://cloud.tencent.com/document/product/213/43498)。 */
  Sysprep?: string;
  /** 基于实例创建整机镜像时，指定包含在镜像里的数据盘ID */
  DataDiskIds?: string[];
  /** 基于快照创建镜像，指定快照ID，必须包含一个系统盘快照。不可与InstanceId同时传入。 */
  SnapshotIds?: string[];
  /** 检测本次请求的是否成功，但不会对操作的资源产生任何影响。默认取值为false。 */
  DryRun?: boolean;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到自定义镜像。 */
  TagSpecification?: TagSpecification[];
}

declare interface CreateImageResponse {
  /** 镜像ID */
  ImageId?: string | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKeyPairRequest {
  /** 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。 */
  KeyName: string;
  /** 密钥对创建后所属的项目ID。可以通过以下方式获取项目ID：通过项目列表查询项目ID。通过调用接口 [DescribeProjects](https://cloud.tencent.com/document/api/651/78725)，取返回信息中的`projectId `获取项目ID。 */
  ProjectId: number;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到密钥对。 */
  TagSpecification?: TagSpecification[];
}

declare interface CreateKeyPairResponse {
  /** 密钥对信息。 */
  KeyPair?: KeyPair;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLaunchTemplateRequest {
  /** 实例启动模板名称。长度为2~128个英文或中文字符。 */
  LaunchTemplateName: string;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目，所属宿主机（在专用宿主机上创建子机时指定）等属性。 */
  Placement: Placement;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：公共镜像自定义镜像共享镜像服务市场镜像可通过以下方式获取可用的镜像ID：`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，传入InstanceType获取当前机型支持的镜像列表，取返回信息中的`ImageId`字段。 */
  ImageId: string;
  /** 实例启动模板版本描述。长度为2~256个英文或中文字符。 */
  LaunchTemplateVersionDescription?: string;
  /** 实例机型。不同实例机型指定了不同的资源规格。对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则系统将根据当前地域的资源售卖情况动态指定默认机型。对于付费模式为CDHPAID的实例创建，该参数以"CDH_"为前缀，根据CPU和内存配置生成，具体形式为：CDH_XCXG，例如对于创建CPU为1核，内存为1G大小的专用宿主机的实例，该参数应该为CDH_1C1G。 */
  InstanceType?: string;
  /** 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
  DataDisks?: DataDisk[];
  /** 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若不指定该参数，则默认使用基础网络。若在此参数中指定了私有网络IP，即表示每个实例的主网卡IP；同时，InstanceCount参数必须与私有网络IP的个数一致且不能大于20。 */
  VirtualPrivateCloud?: VirtualPrivateCloud;
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 购买实例数量。包年包月实例取值范围：[1，300]，按量计费实例取值范围：[1，100]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。 */
  InstanceCount?: number;
  /** 实例显示名称。不指定实例显示名称则默认显示‘未命名’。购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。最多支持60个字符（包含模式串）。 */
  InstanceName?: string;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。 */
  LoginSettings?: LoginSettings;
  /** 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
  SecurityGroupIds?: string[];
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务；自定义镜像与镜像市场镜像默认不开启云监控，云安全服务，而使用镜像里保留的服务。 */
  EnhancedService?: EnhancedService;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 云服务器的主机名。点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。 */
  HostName?: string;
  /** 定时任务。通过该参数可以为实例指定定时任务，目前仅支持定时销毁。 */
  ActionTimer?: ActionTimer;
  /** 置放群组id，仅支持指定一个。 */
  DisasterRecoverGroupIds?: string[];
  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云服务器实例。 */
  TagSpecification?: TagSpecification[];
  /** 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。 */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  /** 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB。关于获取此参数的详细介绍，请参阅[Windows](https://cloud.tencent.com/document/product/213/17526)和[Linux](https://cloud.tencent.com/document/product/213/17525)启动时运行命令。 */
  UserData?: string;
  /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.false（默认）：发送正常请求，通过检查后直接创建实例。 */
  DryRun?: boolean;
  /** CAM角色名称。可通过[`DescribeRoleList`](https://cloud.tencent.com/document/product/598/13887)接口返回值中的`roleName`获取。 */
  CamRoleName?: string;
  /** 高性能计算集群ID。若创建的实例为高性能计算实例，需指定实例放置的集群，否则不可指定。 */
  HpcClusterId?: string;
  /** 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费CDHPAID：独享子机（基于专用宿主机创建，宿主机部分的资源不收费）SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 实例销毁保护标志，表示是否允许通过api接口删除实例。取值范围：TRUE：表示开启实例保护，不允许通过api接口删除实例FALSE：表示关闭实例保护，允许通过api接口删除实例默认取值：FALSE。 */
  DisableApiTermination?: boolean;
}

declare interface CreateLaunchTemplateResponse {
  /** 当通过本接口来创建实例启动模板时会返回该参数，表示创建成功的实例启动模板`ID`。 */
  LaunchTemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateLaunchTemplateVersionRequest {
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目，所属宿主机（在专用宿主机上创建子机时指定）等属性。 */
  Placement: Placement;
  /** 启动模板ID，新版本将基于该实例启动模板ID创建。 */
  LaunchTemplateId: string;
  /** 若给定，新实例启动模板将基于给定的版本号创建。若未指定则使用默认版本。 */
  LaunchTemplateVersion?: number;
  /** 实例启动模板版本描述。长度为2~256个英文或中文字符。 */
  LaunchTemplateVersionDescription?: string;
  /** 实例机型。不同实例机型指定了不同的资源规格。对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则系统将根据当前地域的资源售卖情况动态指定默认机型。对于付费模式为CDHPAID的实例创建，该参数以"CDH_"为前缀，根据CPU和内存配置生成，具体形式为：CDH_XCXG，例如对于创建CPU为1核，内存为1G大小的专用宿主机的实例，该参数应该为CDH_1C1G。 */
  InstanceType?: string;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：公共镜像自定义镜像共享镜像服务市场镜像可通过以下方式获取可用的镜像ID：`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，传入InstanceType获取当前机型支持的镜像列表，取返回信息中的`ImageId`字段。 */
  ImageId?: string;
  /** 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
  DataDisks?: DataDisk[];
  /** 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若不指定该参数，则默认使用基础网络。若在此参数中指定了私有网络IP，即表示每个实例的主网卡IP；同时，InstanceCount参数必须与私有网络IP的个数一致且不能大于20。 */
  VirtualPrivateCloud?: VirtualPrivateCloud;
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 购买实例数量。包年包月实例取值范围：[1，300]，按量计费实例取值范围：[1，100]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。 */
  InstanceCount?: number;
  /** 实例显示名称。不指定实例显示名称则默认显示‘未命名’。购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。最多支持60个字符（包含模式串）。 */
  InstanceName?: string;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。 */
  LoginSettings?: LoginSettings;
  /** 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
  SecurityGroupIds?: string[];
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务；自定义镜像与镜像市场镜像默认不开启云监控，云安全服务，而使用镜像里保留的服务。 */
  EnhancedService?: EnhancedService;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 云服务器的主机名。点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。 */
  HostName?: string;
  /** 定时任务。通过该参数可以为实例指定定时任务，目前仅支持定时销毁。 */
  ActionTimer?: ActionTimer;
  /** 置放群组id，仅支持指定一个。 */
  DisasterRecoverGroupIds?: string[];
  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云服务器实例。 */
  TagSpecification?: TagSpecification[];
  /** 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费则该参数必传。 */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  /** 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB。关于获取此参数的详细介绍，请参阅[Windows](https://cloud.tencent.com/document/product/213/17526)和[Linux](https://cloud.tencent.com/document/product/213/17525)启动时运行命令。 */
  UserData?: string;
  /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.false（默认）：发送正常请求，通过检查后直接创建实例。 */
  DryRun?: boolean;
  /** CAM角色名称。可通过[`DescribeRoleList`](https://cloud.tencent.com/document/product/598/13887)接口返回值中的`roleName`获取。 */
  CamRoleName?: string;
  /** 高性能计算集群ID。若创建的实例为高性能计算实例，需指定实例放置的集群，否则不可指定。 */
  HpcClusterId?: string;
  /** 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费CDHPAID：独享子机（基于专用宿主机创建，宿主机部分的资源不收费）SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 实例销毁保护标志，表示是否允许通过api接口删除实例。取值范围：TRUE：表示开启实例保护，不允许通过api接口删除实例FALSE：表示关闭实例保护，允许通过api接口删除实例默认取值：FALSE。 */
  DisableApiTermination?: boolean;
}

declare interface CreateLaunchTemplateVersionResponse {
  /** 新创建的实例启动模板版本号。 */
  LaunchTemplateVersionNumber?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDisasterRecoverGroupsRequest {
  /** 分散置放群组ID列表，可通过[DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810)接口获取。每次请求允许操作的分散置放群组数量上限是100。 */
  DisasterRecoverGroupIds: string[];
}

declare interface DeleteDisasterRecoverGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteHpcClustersRequest {
  /** 高性能计算集群ID列表。 */
  HpcClusterIds: string[];
}

declare interface DeleteHpcClustersResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteImagesRequest {
  /** 准备删除的镜像Id列表 */
  ImageIds: string[];
  /** 是否删除镜像关联的快照 */
  DeleteBindedSnap?: boolean;
  /** 检测是否支持删除镜像 */
  DryRun?: boolean;
}

declare interface DeleteImagesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteInstancesActionTimerRequest {
  /** 定时任务ID列表，可以通过DescribeInstancesActionTimer接口查询。只能删除未执行的定时任务。 */
  ActionTimerIds: string[];
}

declare interface DeleteInstancesActionTimerResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteKeyPairsRequest {
  /** 一个或多个待操作的密钥对ID。每次请求批量密钥对的上限为100。可以通过以下方式获取可用的密钥ID：通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的 `KeyId` 获取密钥对ID。 */
  KeyIds: string[];
}

declare interface DeleteKeyPairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLaunchTemplateRequest {
  /** 启动模板ID。 */
  LaunchTemplateId: string;
}

declare interface DeleteLaunchTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteLaunchTemplateVersionsRequest {
  /** 启动模板ID。 */
  LaunchTemplateId: string;
  /** 实例启动模板版本列表。 */
  LaunchTemplateVersions: number[];
}

declare interface DeleteLaunchTemplateVersionsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAccountQuotaRequest {
  /** zone按照【可用区】进行过滤。可用区形如：ap-guangzhou-1。类型：String必选：否可选项：可用区列表quota-type按照【配额类型】进行过滤。配额类型形如：PostPaidQuotaSet。类型：String必选：否可选项：PostPaidQuotaSet,DisasterRecoverGroupQuotaSet,PrePaidQuotaSet,SpotPaidQuotaSet */
  Filters?: Filter[];
}

declare interface DescribeAccountQuotaResponse {
  /** 用户appid */
  AppId?: number;
  /** 配额数据 */
  AccountQuotaOverview?: AccountQuotaOverview;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChcDeniedActionsRequest {
  /** CHC物理服务器实例id */
  ChcIds: string[];
}

declare interface DescribeChcDeniedActionsResponse {
  /** CHC实例禁止操作信息 */
  ChcHostDeniedActionSet: ChcHostDeniedActions[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeChcHostsRequest {
  /** CHC物理服务器实例ID。每次请求的实例的上限为100。参数不支持同时指定`ChcIds`和`Filters`。 */
  ChcIds?: string[];
  /** zone按照【可用区】进行过滤。可用区形如：ap-guangzhou-1。类型：String必选：否可选项：可用区列表instance-name按照【实例名称】进行过滤。类型：String必选：否instance-state按照【实例状态】进行过滤。状态类型详见[实例状态表](https://cloud.tencent.com/document/api/213/15753)类型：String必选：否device-type按照【设备类型】进行过滤。类型：String必选：否vpc-id按照【私有网络唯一ID】进行过滤。类型：String必选：否subnet-id按照【私有子网唯一ID】进行过滤。类型：String必选：否 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeChcHostsResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 返回的实例列表 */
  ChcHostSet?: ChcHost[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisasterRecoverGroupQuotaRequest {
}

declare interface DescribeDisasterRecoverGroupQuotaResponse {
  /** 可创建置放群组数量的上限。 */
  GroupQuota?: number;
  /** 当前用户已经创建的置放群组数量。 */
  CurrentNum?: number;
  /** 物理机类型容灾组内实例的配额数。 */
  CvmInHostGroupQuota?: number;
  /** 交换机类型容灾组内实例的配额数。 */
  CvmInSwGroupQuota?: number;
  /** 机架类型容灾组内实例的配额数。 */
  CvmInRackGroupQuota?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisasterRecoverGroupsRequest {
  /** 分散置放群组ID列表。每次请求允许操作的分散置放群组数量上限是100。 */
  DisasterRecoverGroupIds?: string[];
  /** 分散置放群组名称，支持模糊匹配。 */
  Name?: string;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeDisasterRecoverGroupsResponse {
  /** 分散置放群组信息列表。 */
  DisasterRecoverGroupSet?: DisasterRecoverGroup[];
  /** 用户置放群组总量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHostsRequest {
  /** zone按照【可用区】进行过滤。可用区形如：ap-guangzhou-1。类型：String必选：否可选项：可用区列表project-id按照【项目ID】进行过滤，可通过调用[DescribeProject](https://cloud.tencent.com/document/api/378/4400)查询已创建的项目列表或登录[控制台](https://console.cloud.tencent.com/cvm/index)进行查看；也可以调用[AddProject](https://cloud.tencent.com/document/api/378/4398)创建新的项目。项目ID形如：1002189。类型：Integer必选：否host-id按照【[CDH](https://cloud.tencent.com/document/product/416) ID】进行过滤。[CDH](https://cloud.tencent.com/document/product/416) ID形如：host-xxxxxxxx。类型：String必选：否host-name按照【CDH实例名称】进行过滤。类型：String必选：否host-state按照【CDH实例状态】进行过滤。（PENDING：创建中 | LAUNCH_FAILURE：创建失败 | RUNNING：运行中 | EXPIRED：已过期）类型：String必选：否每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
}

declare interface DescribeHostsResponse {
  /** 符合查询条件的cdh实例总数 */
  TotalCount: number;
  /** cdh实例详细信息列表 */
  HostSet: HostItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeHpcClustersRequest {
  /** 高性能计算集群ID数组。 */
  HpcClusterIds?: string[];
  /** 高性能计算集群名称。 */
  Name?: string;
  /** 可用区。 */
  Zone?: string;
  /** 偏移量, 默认值0。 */
  Offset?: number;
  /** 本次请求量, 默认值20。 */
  Limit?: number;
  /** 高性能计算集群类型。 */
  HpcClusterType?: string;
  /** 高性能计算集群对应的业务场景标识，当前只支持CDC。 */
  HpcClusterBusinessId?: string;
}

declare interface DescribeHpcClustersResponse {
  /** 高性能计算集群信息。 */
  HpcClusterSet?: HpcClusterInfo[];
  /** 高性能计算集群总数。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageQuotaRequest {
}

declare interface DescribeImageQuotaResponse {
  /** 账户的镜像配额 */
  ImageNumQuota?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImageSharePermissionRequest {
  /** 需要共享的镜像Id */
  ImageId: string;
}

declare interface DescribeImageSharePermissionResponse {
  /** 镜像共享信息 */
  SharePermissionSet: SharePermission[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImagesRequest {
  /** 镜像ID列表 。镜像ID如：`img-gvbnzy6f`。array型参数的格式可以参考[API简介](https://cloud.tencent.com/document/api/213/15688)。镜像ID可以通过如下方式获取：通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。 */
  ImageIds?: string[];
  /** 过滤条件，每次请求的`Filters`的上限为10，`Filters.Values`的上限为5。参数不可以同时指定`ImageIds`和`Filters`。详细的过滤条件如下：image-id按照【镜像ID】进行过滤。类型：String必选：否image-type按照【镜像类型】进行过滤。类型：String必选：否可选项：PRIVATE_IMAGE: 私有镜像 (本账户创建的镜像)PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)SHARED_IMAGE: 共享镜像(其他账户共享给本账户的镜像)image-name按照【镜像名称】进行过滤。类型：String必选：否platform按照【镜像平台】进行过滤，如CentOS。类型：String必选：否tag-key按照【标签键】进行过滤。类型：String必选：否tag-value按照【标签值】进行过滤。类型：String必选：否tag:tag-key按照【标签键值对】进行过滤。tag-key使用具体的标签键进行替换。类型：String必选：否 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于Offset详见[API简介](/document/api/213/568)。 */
  Offset?: number;
  /** 数量限制，默认为20，最大值为100。关于Limit详见[API简介](/document/api/213/568)。 */
  Limit?: number;
  /** 实例类型，如 `S1.SMALL1` */
  InstanceType?: string;
}

declare interface DescribeImagesResponse {
  /** 一个关于镜像详细信息的结构体，主要包括镜像的主要状态与属性。 */
  ImageSet: Image[];
  /** 符合要求的镜像数量。 */
  TotalCount: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeImportImageOsRequest {
}

declare interface DescribeImportImageOsResponse {
  /** 支持的导入镜像的操作系统类型。 */
  ImportImageOsListSupported?: ImageOsList;
  /** 支持的导入镜像的操作系统版本。 */
  ImportImageOsVersionSet?: OsVersion[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceFamilyConfigsRequest {
}

declare interface DescribeInstanceFamilyConfigsResponse {
  /** 实例机型组配置的列表信息 */
  InstanceFamilyConfigSet?: InstanceFamilyConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceInternetBandwidthConfigsRequest {
  /** 待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。 */
  InstanceId: string;
}

declare interface DescribeInstanceInternetBandwidthConfigsResponse {
  /** 带宽配置信息列表。 */
  InternetBandwidthConfigSet?: InternetBandwidthConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceTypeConfigsRequest {
  /** zone按照【可用区】进行过滤。可用区形如：ap-guangzhou-1。类型：String必选：否可选项：可用区列表instance-family按照【实例机型系列】进行过滤。实例机型系列形如：S1、I1、M1等。具体取值参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。类型：String必选：否instance-type按照【实例类型】进行过滤。实例类型形如：S5.12XLARGE128、S5.12XLARGE96等。具体取值参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。类型：String必选：否每次请求的`Filters`的上限为10，`Filter.Values`的上限为1。 */
  Filters?: Filter[];
}

declare interface DescribeInstanceTypeConfigsResponse {
  /** 实例机型配置列表。 */
  InstanceTypeConfigSet?: InstanceTypeConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceVncUrlRequest {
  /** 一个操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。 */
  InstanceId: string;
}

declare interface DescribeInstanceVncUrlResponse {
  /** 实例的管理终端地址。 */
  InstanceVncUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesActionTimerRequest {
  /** 定时任务ID列表。 */
  ActionTimerIds?: string[];
  /** 按照一个或者多个实例ID查询。 */
  InstanceIds?: string[];
  /** 定时任务执行时间，格式如：2018-05-01 19:00:00，必须大于当前时间5分钟。 */
  TimerAction?: string;
  /** 执行时间的结束范围，用于条件筛选，格式如2018-05-01 19:00:00。 */
  EndActionTime?: string;
  /** 执行时间的开始范围，用于条件筛选，格式如2018-05-01 19:00:00。 */
  StartActionTime?: string;
  /** 定时任务状态列表。UNDO：未执行DOING：正在执行DONE：执行完成。 */
  StatusList?: string[];
}

declare interface DescribeInstancesActionTimerResponse {
  /** 定时任务信息列表。 */
  ActionTimers: ActionTimer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesModificationRequest {
  /** 一个或多个待查询的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。每次请求批量实例的上限为20。 */
  InstanceIds: string[];
  /** status按照【配置规格状态】进行过滤。配置规格状态形如：SELL、UNAVAILABLE。类型：String必选：否每次请求的`Filters`的上限为10，`Filter.Values`的上限为2。 */
  Filters?: Filter[];
}

declare interface DescribeInstancesModificationResponse {
  /** 实例调整的机型配置的数量。 */
  TotalCount?: number;
  /** 实例支持调整的机型配置列表。 */
  InstanceTypeConfigStatusSet?: InstanceTypeConfigStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesOperationLimitRequest {
  /** 按照一个或者多个实例ID查询，可通过[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)API返回值中的InstanceId获取。实例ID形如：ins-xxxxxxxx。（此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的ids.N一节）。每次请求的实例的上限为100。 */
  InstanceIds: string[];
  /** 实例操作。 INSTANCE_DEGRADE：实例降配操作 */
  Operation: string;
}

declare interface DescribeInstancesOperationLimitResponse {
  /** 该参数表示调整配置操作（降配）限制次数查询。 */
  InstanceOperationLimitSet?: OperationCountLimit[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 按照一个或者多个实例ID查询。实例ID例如：`ins-xxxxxxxx`。（此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的`ids.N`一节）。每次请求的实例的上限为100。参数不支持同时指定`InstanceIds`和`Filters`。 */
  InstanceIds?: string[];
  /** zone 按照【可用区】进行过滤。可用区例如：ap-guangzhou-1。类型：String必选：否可选项：可用区列表 project-id 按照【项目ID】进行过滤，可通过调用[DescribeProjects](https://cloud.tencent.com/document/api/651/78725)查询已创建的项目列表或登录[控制台](https://console.cloud.tencent.com/cvm/index)进行查看；也可以调用[AddProject](https://cloud.tencent.com/document/api/651/81952)创建新的项目。项目ID例如：1002189。类型：Integer必选：否 host-id 按照【[CDH](https://cloud.tencent.com/document/product/416) ID】进行过滤。[CDH](https://cloud.tencent.com/document/product/416) ID例如：host-xxxxxxxx。类型：String必选：否 dedicated-cluster-id 按照【[CDC](https://cloud.tencent.com/document/product/1346) ID】进行过滤。[CDC](https://cloud.tencent.com/document/product/1346) ID例如：cluster-xxxxxxx。类型：String必选：否 vpc-id 按照【VPC ID】进行过滤。VPC ID例如：vpc-xxxxxxxx。类型：String必选：否 subnet-id 按照【子网ID】进行过滤。子网ID例如：subnet-xxxxxxxx。类型：String必选：否 instance-id 按照【实例ID】进行过滤。实例ID例如：ins-xxxxxxxx。类型：String必选：否 uuid 按照【实例UUID】进行过滤。实例UUID例如：xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx。类型：String必选：否 security-group-id 按照【安全组ID】进行过滤。安全组ID例如: sg-8jlk3f3r。类型：String必选：否 instance-name 按照【实例名称】进行过滤。类型：String必选：否 instance-charge-type 按照【实例计费模式】进行过滤。(PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费 | CDHPAID：表示[CDH](https://cloud.tencent.com/document/product/416)付费，即只对[CDH](https://cloud.tencent.com/document/product/416)计费，不对[CDH](https://cloud.tencent.com/document/product/416)上的实例计费。)类型：String必选：否 instance-state 按照【实例状态】进行过滤。状态类型详见[实例状态表](https://cloud.tencent.com/document/api/213/15753)类型：String必选：否 private-ip-address 按照【实例主网卡的内网IP】进行过滤。类型：String必选：否 public-ip-address 按照【实例主网卡的公网IP】进行过滤，包含实例创建时自动分配的IP和实例创建后手动绑定的弹性IP。类型：String必选：否 ipv6-address 按照【实例的IPv6地址】进行过滤。类型：String必选：否 tag-key 按照【标签键】进行过滤。类型：String必选：否 tag-value 按照【标签值】进行过滤。类型：String必选：否 tag:tag-key 按照【标签键值对】进行过滤。tag-key使用具体的标签键进行替换。使用请参考示例2。类型：String必选：否creation-start-time 按照【实例创建起始时间】进行过滤。例如：2023-06-01 00:00:00。类型：String必选：否creation-end-time 按照【实例创建截止时间】进行过滤。例如：2023-06-01 00:00:00。类型：String必选：否 每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`InstanceIds`和`Filters`。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeInstancesResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 实例详细信息列表。 */
  InstanceSet?: Instance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesStatusRequest {
  /** 按照一个或者多个实例ID查询。实例ID形如：`ins-11112222`。此参数的具体格式可参考API[简介](https://cloud.tencent.com/document/api/213/15688)的`ids.N`一节）。每次请求的实例的上限为100。 */
  InstanceIds?: string[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeInstancesStatusResponse {
  /** 符合条件的实例状态数量。 */
  TotalCount?: number;
  /** [实例状态](https://cloud.tencent.com/document/api/213/15753) 列表。 */
  InstanceStatusSet?: InstanceStatus[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInternetChargeTypeConfigsRequest {
}

declare interface DescribeInternetChargeTypeConfigsResponse {
  /** 网络计费类型配置。 */
  InternetChargeTypeConfigSet?: InternetChargeTypeConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKeyPairsRequest {
  /** 密钥对ID，密钥对ID形如：`skey-11112222`（此接口支持同时传入多个ID进行过滤。此参数的具体格式可参考 API [简介](https://cloud.tencent.com/document/api/213/15688)的 `id.N` 一节）。参数不支持同时指定 `KeyIds` 和 `Filters`。密钥对ID可以通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询。 */
  KeyIds?: string[];
  /** 过滤条件。 project-id - Integer - 是否必填：否 -（过滤条件）按照项目ID过滤。可以通过[项目列表](https://console.cloud.tencent.com/project)查询项目ID，或者调用接口 [DescribeProject](https://cloud.tencent.com/document/api/378/4400)，取返回信息中的projectId获取项目ID。 key-name - String - 是否必填：否 -（过滤条件）按照密钥对名称过滤。 tag-key - String - 是否必填：否 -（过滤条件）按照标签键过滤。 tag-value - String - 是否必填：否 -（过滤条件）按照标签值过滤。 tag:tag-key - String - 是否必填：否 -（过滤条件）按照标签键值对过滤。tag-key使用具体的标签键进行替换。参数不支持同时指定 `KeyIds` 和 `Filters`。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于 `Offset` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于 `Limit` 的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeKeyPairsResponse {
  /** 符合条件的密钥对数量。 */
  TotalCount?: number;
  /** 密钥对详细信息列表。 */
  KeyPairSet?: KeyPair[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLaunchTemplateVersionsRequest {
  /** 启动模板ID。 */
  LaunchTemplateId: string;
  /** 实例启动模板列表。 */
  LaunchTemplateVersions?: number[];
  /** 通过范围指定版本时的最小版本号，默认为0。 */
  MinVersion?: number;
  /** 过范围指定版本时的最大版本号，默认为30。 */
  MaxVersion?: number;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 是否查询默认版本。该参数不可与LaunchTemplateVersions同时指定。 */
  DefaultVersion?: boolean;
}

declare interface DescribeLaunchTemplateVersionsResponse {
  /** 实例启动模板总数。 */
  TotalCount: number;
  /** 实例启动模板版本集合。 */
  LaunchTemplateVersionSet: LaunchTemplateVersionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeLaunchTemplatesRequest {
  /** 启动模板ID，一个或者多个启动模板ID。若未指定，则显示用户所有模板。 */
  LaunchTemplateIds?: string[];
  /** 按照【LaunchTemplateName】进行过滤。类型：String必选：否每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。参数不支持同时指定`LaunchTemplateIds`和`Filters`。 */
  Filters?: Filter[];
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeLaunchTemplatesResponse {
  /** 符合条件的实例模板数量。 */
  TotalCount?: number | null;
  /** 实例详细信息列表。 */
  LaunchTemplateSet?: LaunchTemplateInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 地域数量。 */
  TotalCount: number;
  /** 地域列表信息。 */
  RegionSet: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReservedInstancesConfigInfosRequest {
  /** zone按照预留实例计费可购买的可用区进行过滤。形如：ap-guangzhou-1。类型：String必选：否可选项：各地域可用区列表product-description按照预留实例计费的平台描述（即操作系统）进行过滤。形如：linux。类型：String必选：否可选项：linuxduration按照预留实例计费有效期，即预留实例计费购买时长进行过滤。形如：31536000。类型：Integer计量单位：秒必选：否可选项：31536000 (1年) */
  Filters?: Filter[];
}

declare interface DescribeReservedInstancesConfigInfosResponse {
  /** 预留实例静态配置信息列表。 */
  ReservedInstanceConfigInfos?: ReservedInstanceConfigInfoItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReservedInstancesOfferingsRequest {
  /** 试运行, 默认为 false。 */
  DryRun?: boolean;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** 以最大有效期作为过滤参数。计量单位: 秒默认为 94608000。 */
  MaxDuration?: number;
  /** 以最小有效期作为过滤参数。计量单位: 秒默认为 2592000。 */
  MinDuration?: number;
  /** zone按照预留实例计费可购买的【可用区】进行过滤。形如：ap-guangzhou-1。类型：String必选：否可选项：可用区列表duration按照预留实例计费【有效期】即预留实例计费购买时长进行过滤。形如：31536000。类型：Integer计量单位：秒必选：否可选项：31536000 (1年) | 94608000（3年）instance-type按照【预留实例计费类型】进行过滤。形如：S3.MEDIUM4。类型：String必选：否可选项：预留实例计费类型列表offering-type按照【付款类型】进行过滤。形如：All Upfront (预付全部费用)。类型：String必选：否可选项：All Upfront (预付全部费用)product-description按照预留实例计费的【平台描述】（即操作系统）进行过滤。形如：linux。类型：String必选：否可选项：linuxreserved-instances-offering-id按照【预留实例计费配置ID】进行过滤。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。类型：String必选：否每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。 */
  Filters?: Filter[];
}

declare interface DescribeReservedInstancesOfferingsResponse {
  /** 符合条件的预留实例计费数量。 */
  TotalCount?: number;
  /** 符合条件的预留实例计费列表。 */
  ReservedInstancesOfferingsSet?: ReservedInstancesOffering[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeReservedInstancesRequest {
  /** 试运行。默认为 false。 */
  DryRun?: boolean;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit?: number;
  /** zone按照预留实例计费可购买的【可用区】进行过滤。形如：ap-guangzhou-1。类型：String必选：否可选项：可用区列表duration按照预留实例计费【有效期】即预留实例计费购买时长进行过滤。形如：31536000。类型：Integer计量单位：秒必选：否可选项：31536000 (1年) | 94608000（3年）instance-type按照【预留实例规格】进行过滤。形如：S3.MEDIUM4。类型：String必选：否可选项：预留实例规格列表instance-family按照【预留实例类型】进行过滤。形如：S3。类型：String必选：否可选项：预留实例类型列表offering-typeoffering-type按照【付款类型】进行过滤。形如：All Upfront (全预付)。类型：String必选：否可选项：All Upfront (全预付) | Partial Upfront (部分预付) | No Upfront (零预付)product-description按照预留实例计费的【平台描述】（即操作系统）进行过滤。形如：linux。类型：String必选：否可选项：linuxreserved-instances-id按照已购买【预留实例计费ID】进行过滤。形如：650c138f-ae7e-4750-952a-96841d6e9fc1。类型：String必选：否state按照已购买【预留实例计费状态】进行过滤。形如：active。类型：String必选：否可选项：active (已创建) | pending (等待被创建) | retired (过期)每次请求的`Filters`的上限为10，`Filter.Values`的上限为5。 */
  Filters?: Filter[];
}

declare interface DescribeReservedInstancesResponse {
  /** 符合条件的预留实例计费数量。 */
  TotalCount?: number;
  /** 符合条件的预留实例计费列表。 */
  ReservedInstancesSet?: ReservedInstances[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeTaskInfoRequest {
  /** 返回数量，默认为20，最大值为100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Limit: number;
  /** 偏移量，默认为0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/api/213/15688)中的相关小节。 */
  Offset: number;
  /** 按照指定的产品类型查询，支持取值：- `CVM`：云服务器- `CDH`：专用宿主机- `CPM2.0`：裸金属云服务器未传入或为空时，默认查询全部产品类型。 */
  Product?: string;
  /** 按照一个或多个任务状态ID进行过滤。`TaskStatus`（任务状态ID）与任务状态中文名的对应关系如下：- `1`：待授权- `2`：处理中- `3`：已结束- `4`：已预约- `5`：已取消- `6`：已避免各任务状态的具体含义，可参考 [任务状态](https://cloud.tencent.com/document/product/213/67789)。 */
  TaskStatus?: number[];
  /** 按照一个或多个任务类型ID进行过滤。`TaskTypeId`（任务类型ID）与任务类型中文名的对应关系如下：- `101`：实例运行隐患- `102`：实例运行异常- `103`：实例硬盘异常- `104`：实例网络连接异常- `105`：实例运行预警- `106`：实例硬盘预警- `107`：实例维护升级各任务类型的具体含义，可参考 [维修任务分类](https://cloud.tencent.com/document/product/213/67789)。 */
  TaskTypeIds?: number[];
  /** 按照一个或者多个任务ID查询。任务ID形如：`rep-xxxxxxxx`。 */
  TaskIds?: string[];
  /** 按照一个或者多个实例ID查询。实例ID形如：`ins-xxxxxxxx`。 */
  InstanceIds?: string[];
  /** 按照一个或者多个实例名称查询。 */
  Aliases?: string[];
  /** 时间查询区间的起始位置，会根据任务创建时间`CreateTime`进行过滤。未传入时默认为当天`00:00:00`。 */
  StartDate?: string;
  /** 时间查询区间的终止位置，会根据任务创建时间`CreateTime`进行过滤。未传入时默认为当前时刻。 */
  EndDate?: string;
  /** 指定返回维修任务列表的排序字段，目前支持：- `CreateTime`：任务创建时间- `AuthTime`：任务授权时间- `EndTime`：任务结束时间未传入时或为空时，默认按`CreateTime`字段进行排序。 */
  OrderField?: string;
  /** 排序方式，目前支持：- `0`：升序（默认）- `1`：降序未传入或为空时，默认按升序排序。 */
  Order?: number;
}

declare interface DescribeTaskInfoResponse {
  /** 查询返回的维修任务总数量。 */
  TotalCount?: number;
  /** 查询返回的维修任务列表。 */
  RepairTaskInfoSet?: RepairTaskInfo[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZoneInstanceConfigInfosRequest {
  /** zone按照【可用区】进行过滤。可用区形如：ap-guangzhou-1。类型：String必选：否可选项：可用区列表instance-family按照【实例机型系列】进行过滤。实例机型系列形如：S1、I1、M1等。具体取值参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。类型：String必选：否instance-type按照【实例机型】进行过滤。不同实例机型指定了不同的资源规格，具体取值可通过调用接口 [DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/product/213/15749) 来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认查询筛选条件下所有机型。类型：String必选：否instance-charge-type按照【实例计费模式】进行过滤。(PREPAID：表示预付费，即包年包月 | POSTPAID_BY_HOUR：表示后付费，即按量计费 )类型：String必选：否sort-keys按关键字进行排序,格式为排序字段加排序方式，中间用冒号分隔。 例如： 按cpu数逆序排序 "cpu:desc", 按mem大小顺序排序 "mem:asc"类型：String必选：否每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。 */
  Filters?: Filter[];
}

declare interface DescribeZoneInstanceConfigInfosResponse {
  /** 可用区机型配置列表。 */
  InstanceTypeQuotaSet?: InstanceTypeQuotaItem[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
}

declare interface DescribeZonesResponse {
  /** 可用区数量。 */
  TotalCount?: number;
  /** 可用区列表信息。 */
  ZoneSet?: ZoneInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateInstancesKeyPairsRequest {
  /** 一个或多个待操作的实例ID，每次请求批量实例的上限为100。可以通过以下方式获取可用的实例ID：通过登录[控制台](https://console.cloud.tencent.com/cvm/index)查询实例ID。通过调用接口 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) ，取返回信息中的 `InstanceId` 获取实例ID。 */
  InstanceIds: string[];
  /** 密钥对ID列表，每次请求批量密钥对的上限为100。密钥对ID形如：`skey-11112222`。可以通过以下方式获取可用的密钥ID：通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥ID。通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/15699) ，取返回信息中的 `KeyId` 获取密钥对ID。 */
  KeyIds: string[];
  /** 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再解绑密钥。取值范围：true：表示在正常关机失败后进行强制关机。false：表示在正常关机失败后不进行强制关机。默认取值：false。 */
  ForceStop?: boolean;
}

declare interface DisassociateInstancesKeyPairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateSecurityGroupsRequest {
  /** 要解绑的`安全组ID`，类似sg-efil73jd，只支持解绑单个安全组。 */
  SecurityGroupIds: string[];
  /** 被解绑的`实例ID`，类似ins-lesecurk，支持指定多个实例，每次请求批量实例的上限为100。 */
  InstanceIds: string[];
}

declare interface DisassociateSecurityGroupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface EnterRescueModeRequest {
  /** 需要进入救援模式的实例id */
  InstanceId: string;
  /** 救援模式下系统密码 */
  Password: string;
  /** 救援模式下系统用户名 */
  Username?: string;
  /** 是否强制关机 */
  ForceStop?: boolean;
}

declare interface EnterRescueModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExitRescueModeRequest {
  /** 退出救援模式的实例id */
  InstanceId: string;
}

declare interface ExitRescueModeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ExportImagesRequest {
  /** COS存储桶名称 */
  BucketName: string;
  /** 镜像ID列表 */
  ImageIds?: string[];
  /** 镜像文件导出格式。取值范围：RAW，QCOW2，VHD，VMDK。默认为RAW */
  ExportFormat?: string;
  /** 导出文件的名称前缀列表 */
  FileNamePrefixList?: string[];
  /** 是否只导出系统盘 */
  OnlyExportRootDisk?: boolean;
  /** 检测镜像是否支持导出 */
  DryRun?: boolean;
  /** 角色名称。默认为CVM_QcsRole，发起请求前请确认是否存在该角色，以及是否已正确配置COS写入权限。 */
  RoleName?: string;
}

declare interface ExportImagesResponse {
  /** 导出镜像任务ID */
  TaskId?: number;
  /** 导出镜像的COS文件名列表 */
  CosPaths?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportImageRequest {
  /** 导入镜像的操作系统架构，`x86_64` 或 `i386` */
  Architecture: string;
  /** 导入镜像的操作系统类型，通过`DescribeImportImageOs`获取 */
  OsType: string;
  /** 导入镜像的操作系统版本，通过`DescribeImportImageOs`获取 */
  OsVersion: string;
  /** 导入镜像存放的cos地址 */
  ImageUrl: string;
  /** 镜像名称 */
  ImageName: string;
  /** 镜像描述 */
  ImageDescription?: string;
  /** 只检查参数，不执行任务 */
  DryRun?: boolean;
  /** 是否强制导入，参考[强制导入镜像](https://cloud.tencent.com/document/product/213/12849) */
  Force?: boolean;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到自定义镜像。 */
  TagSpecification?: TagSpecification[];
  /** 导入镜像后，激活操作系统采用的许可证类型。可选项：TencentCloud: 腾讯云官方许可BYOL: 自带许可（Bring Your Own License） */
  LicenseType?: string;
  /** 启动模式 */
  BootMode?: string;
}

declare interface ImportImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportInstancesActionTimerRequest {
  /** 实例id列表，可以通过DescribeInstances接口查询到。 */
  InstanceIds: string[];
  /** 定时器任务信息，目前仅支持定时销毁。 */
  ActionTimer: ActionTimer;
}

declare interface ImportInstancesActionTimerResponse {
  /** 定时器id列表 */
  ActionTimerIds: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportKeyPairRequest {
  /** 密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。 */
  KeyName: string;
  /** 密钥对创建后所属的[项目](https://cloud.tencent.com/document/product/378/10861)ID。可以通过以下方式获取项目ID：通过[项目列表](https://console.cloud.tencent.com/project)查询项目ID。通过调用接口 [DescribeProject](https://cloud.tencent.com/document/api/378/4400)，取返回信息中的 `projectId ` 获取项目ID。如果是默认项目，直接填0就可以。 */
  ProjectId: number;
  /** 密钥对的公钥内容，`OpenSSH RSA` 格式。 */
  PublicKey: string;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到密钥对。 */
  TagSpecification?: TagSpecification[];
}

declare interface ImportKeyPairResponse {
  /** 密钥对ID。 */
  KeyId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePricePurchaseReservedInstancesOfferingRequest {
  /** 购买预留实例计费数量 */
  InstanceCount: number;
  /** 预留实例计费配置ID */
  ReservedInstancesOfferingId: string;
  /** 试运行 */
  DryRun?: boolean;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性 */
  ClientToken?: string;
  /** 预留实例显示名称。不指定实例显示名称则默认显示‘未命名’。最多支持60个字符（包含模式串）。 */
  ReservedInstanceName?: string;
}

declare interface InquirePricePurchaseReservedInstancesOfferingResponse {
  /** 该参数表示对应配置预留实例的价格。 */
  Price?: ReservedInstancePrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceModifyInstancesChargeTypeRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
  /** 修改后的实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月。POSTPAID_BY_HOUR：后付费，即按量付费。 */
  InstanceChargeType: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定修改后实例的付费模式为预付费则该参数必传。</dx-alert> */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 是否同时切换弹性数据云盘计费模式。取值范围：true：表示切换弹性数据云盘计费模式false：表示不切换弹性数据云盘计费模式默认取值：false。 */
  ModifyPortableDataDisk?: boolean;
}

declare interface InquiryPriceModifyInstancesChargeTypeResponse {
  /** 该参数表示对应配置实例转换计费模式的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewHostsRequest {
  /** 一个或多个待操作的`CDH`实例`ID`。可通过[`DescribeHosts`](https://cloud.tencent.com/document/api/213/16474)接口返回值中的`HostId`获取。每次请求批量实例的上限为100。 */
  HostIds: string[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。 */
  HostChargePrepaid: ChargePrepaid;
  /** 试运行，测试使用，不执行具体逻辑。取值范围：TRUE：跳过执行逻辑FALSE：执行逻辑默认取值：FALSE。 */
  DryRun?: boolean;
}

declare interface InquiryPriceRenewHostsResponse {
  /** CDH实例续费价格信息 */
  Price?: HostPriceInfo;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRenewInstancesRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
  /** 试运行，测试使用，不执行具体逻辑。取值范围：true：跳过执行逻辑false：执行逻辑默认取值：false。 */
  DryRun?: boolean;
  /** 是否续费弹性数据盘。取值范围：true：表示续费包年包月实例同时续费其挂载的弹性数据盘false：表示续费包年包月实例同时不再续费其挂载的弹性数据盘默认取值：true。 */
  RenewPortableDataDisk?: boolean;
}

declare interface InquiryPriceRenewInstancesResponse {
  /** 该参数表示对应配置实例的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceResetInstanceRequest {
  /** 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。 */
  InstanceId: string;
  /** 指定有效的[镜像](/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：公共镜像自定义镜像共享镜像服务市场镜像可通过以下方式获取可用的镜像ID：`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。 */
  ImageId?: string;
  /** 实例系统盘配置信息。系统盘为云盘的实例可以通过该参数指定重装后的系统盘大小来实现对系统盘的扩容操作，若不指定则默认系统盘大小保持不变。系统盘大小只支持扩容不支持缩容；重装只支持修改系统盘的大小，不能修改系统盘的类型。 */
  SystemDisk?: SystemDisk;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。 */
  LoginSettings?: LoginSettings;
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。 */
  EnhancedService?: EnhancedService;
}

declare interface InquiryPriceResetInstanceResponse {
  /** 该参数表示重装成对应配置实例的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceResetInstancesInternetMaxBandwidthRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。当调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽时，只支持一个实例。 */
  InstanceIds: string[];
  /** 公网出带宽配置。不同机型带宽上限范围不一致，具体限制详见带宽限制对账表。暂时只支持`InternetMaxBandwidthOut`参数。 */
  InternetAccessible: InternetAccessible;
  /** 带宽生效的起始时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。起始时间不能早于当前时间。如果起始时间是今天则新设置的带宽立即生效。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。 */
  StartTime?: string;
  /** 带宽生效的终止时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。新设置的带宽的有效期包含终止时间此日期。终止时间不能晚于包年包月实例的到期时间。实例的到期时间可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`ExpiredTime`获取。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。 */
  EndTime?: string;
}

declare interface InquiryPriceResetInstancesInternetMaxBandwidthResponse {
  /** 该参数表示带宽调整为对应大小之后的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceResetInstancesTypeRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。本接口每次请求批量实例的上限为1。 */
  InstanceIds: string[];
  /** 实例机型。不同实例机型指定了不同的资源规格，具体取值可参见附表[实例资源规格](https://cloud.tencent.com/document/product/213/11518)对照表，也可以调用查询[实例资源规格列表](https://cloud.tencent.com/document/product/213/15749)接口获得最新的规格表。 */
  InstanceType: string;
}

declare interface InquiryPriceResetInstancesTypeResponse {
  /** 该参数表示调整成对应机型实例的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceResizeInstanceDisksRequest {
  /** 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。 */
  InstanceId: string;
  /** 待扩容的数据盘配置信息。只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性）。数据盘容量单位：GB。最小扩容步长：10G。关于数据盘类型的选择请参考硬盘产品简介。可选数据盘类型受到实例类型`InstanceType`限制。另外允许扩容的最大容量也因数据盘类型的不同而有所差异。您必须指定参数DataDisks与SystemDisk的其中一个，但不能同时指定。</dx-alert> */
  DataDisks?: DataDisk[];
  /** 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：true：表示在正常关机失败后进行强制关机false：表示在正常关机失败后不进行强制关机默认取值：false。强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。 */
  ForceStop?: boolean;
}

declare interface InquiryPriceResizeInstanceDisksResponse {
  /** 该参数表示磁盘扩容成对应配置的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceRunInstancesRequest {
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目等属性。 注：如果您不指定LaunchTemplate参数，则Placement为必选参数。若同时传递Placement和LaunchTemplate，则默认覆盖LaunchTemplate中对应的Placement的值。 */
  Placement: Placement;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：公共镜像自定义镜像共享镜像服务市场镜像可通过以下方式获取可用的镜像ID：`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。 注：如果您不指定LaunchTemplate参数，则ImageId为必选参数。若同时传递ImageId和LaunchTemplate，则默认覆盖LaunchTemplate中对应的ImageId的值。 */
  ImageId: string;
  /** 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费SPOTPAID：竞价付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则默认机型为S1.SMALL1。 */
  InstanceType?: string;
  /** 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
  DataDisks?: DataDisk[];
  /** 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若不指定该参数，则默认使用基础网络。若在此参数中指定了私有网络IP，那么InstanceCount参数只能为1。 */
  VirtualPrivateCloud?: VirtualPrivateCloud;
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 购买实例数量。取值范围：[1，100]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。 */
  InstanceCount?: number;
  /** 实例显示名称。不指定实例显示名称则默认显示‘未命名’。购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。最多支持60个字符（包含模式串）。 */
  InstanceName?: string;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。 */
  LoginSettings?: LoginSettings;
  /** 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则默认不绑定安全组。 */
  SecurityGroupIds?: string[];
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认开启云监控、云安全服务。 */
  EnhancedService?: EnhancedService;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 云服务器的主机名。点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。Windows 实例：主机名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。其他类型（Linux 等）实例：主机名字符长度为[2, 30]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。 */
  HostName?: string;
  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的资源实例，当前仅支持绑定标签到云服务器实例。 */
  TagSpecification?: TagSpecification[];
  /** 实例的市场相关选项，如竞价实例相关参数 */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  /** 高性能计算集群ID。 */
  HpcClusterId?: string;
  /** 实例启动模板。 */
  LaunchTemplate?: LaunchTemplate;
}

declare interface InquiryPriceRunInstancesResponse {
  /** 该参数表示对应配置实例的价格。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquiryPriceTerminateInstancesRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
}

declare interface InquiryPriceTerminateInstancesResponse {
  /** 退款详情。 */
  InstanceRefundsSet?: InstanceRefund[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InstanceMarketOptionsRequest {
  /** 竞价相关选项 */
  SpotOptions: SpotMarketOptions | null;
  /** 市场选项类型，当前只支持取值：spot */
  MarketType?: string | null;
}

declare interface ModifyChcAttributeRequest {
  /** CHC物理服务器ID。 */
  ChcIds: string[];
  /** CHC物理服务器名称 */
  InstanceName?: string;
  /** 服务器类型 */
  DeviceType?: string;
  /** 合法字符为字母,数字, 横线和下划线 */
  BmcUser?: string;
  /** 密码8-16位字符, 允许数字，字母， 和特殊字符()`~!@#$%^&*-+=_|{}[]:;'<>,.?/ */
  Password?: string;
  /** bmc网络的安全组列表 */
  BmcSecurityGroupIds?: string[];
}

declare interface ModifyChcAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDisasterRecoverGroupAttributeRequest {
  /** 分散置放群组ID，可使用[DescribeDisasterRecoverGroups](https://cloud.tencent.com/document/api/213/17810)接口获取。 */
  DisasterRecoverGroupId: string;
  /** 分散置放群组名称，长度1-60个字符，支持中、英文。 */
  Name: string;
}

declare interface ModifyDisasterRecoverGroupAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHostsAttributeRequest {
  /** 一个或多个待操作的CDH实例ID。 */
  HostIds: string[];
  /** CDH实例显示名称。可任意命名，但不得超过60个字符。 */
  HostName?: string;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag?: string;
  /** 项目ID。项目可以使用[AddProject](https://cloud.tencent.com/doc/api/403/4398)接口创建。可通过[`DescribeProject`](https://cloud.tencent.com/document/product/378/4400) API返回值中的`projectId`获取。后续使用[DescribeHosts](https://cloud.tencent.com/document/api/213/16474)接口查询实例时，项目ID可用于过滤结果。 */
  ProjectId?: number;
}

declare interface ModifyHostsAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyHpcClusterAttributeRequest {
  /** 高性能计算集群ID。 */
  HpcClusterId: string;
  /** 高性能计算集群新名称。 */
  Name?: string;
  /** 高性能计算集群新备注。 */
  Remark?: string;
}

declare interface ModifyHpcClusterAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyImageAttributeRequest {
  /** 镜像ID，形如`img-gvbnzy6f`。镜像ID可以通过如下方式获取：通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。 */
  ImageId: string;
  /** 设置新的镜像名称；必须满足下列限制 不得超过60个字符。 镜像名称不能与已有镜像重复。 */
  ImageName?: string;
  /** 设置新的镜像描述；必须满足下列限制： 不得超过 256 个字符。 */
  ImageDescription?: string;
}

declare interface ModifyImageAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyImageSharePermissionRequest {
  /** 镜像ID，形如`img-gvbnzy6f`。镜像Id可以通过如下方式获取：通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。 镜像ID必须指定为状态为`NORMAL`的镜像。镜像状态请参考[镜像数据表](https://cloud.tencent.com/document/product/213/15753)。 */
  ImageId: string;
  /** 接收共享镜像的主账号ID列表，array型参数的格式可以参考[API简介](/document/api/213/568)。账号ID不同于QQ号，查询用户主账号ID请查看[账号信息](https://console.cloud.tencent.com/developer)中的账号ID栏。 */
  AccountIds: string[];
  /** 操作，包括 `SHARE`，`CANCEL`。其中`SHARE`代表共享操作，`CANCEL`代表取消共享操作。 */
  Permission: string;
}

declare interface ModifyImageSharePermissionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstanceDiskTypeRequest {
  /** 待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/9388) 接口返回值中的`InstanceId`获取。 */
  InstanceId: string;
  /** 实例数据盘配置信息，只需要指定要转换的目标云硬盘的介质类型，指定DiskType的值，当前只支持一个数据盘转化。只支持CDHPAID类型实例指定CdcId参数。 */
  DataDisks?: DataDisk[];
  /** 实例系统盘配置信息，只需要指定要转换的目标云硬盘的介质类型，指定DiskType的值。只支持CDHPAID类型实例指定CdcId参数。 */
  SystemDisk?: SystemDisk;
}

declare interface ModifyInstanceDiskTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesAttributeRequest {
  /** 一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。 */
  InstanceIds: string[];
  /** 修改后实例名称。可任意命名，但不得超过60个字符。必须指定InstanceName与SecurityGroups的其中一个，但不能同时设置</dx-alert> */
  InstanceName?: string;
  /** 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16 KB。关于获取此参数的详细介绍，请参阅 [Windows](https://cloud.tencent.com/document/product/213/17526) 和 [Linux](https://cloud.tencent.com/document/product/213/17525) 启动时运行命令。 */
  UserData?: string;
  /** 指定实例的修改后的安全组Id列表，子机将重新关联指定列表的安全组，原本关联的安全组会被解绑。必须指定SecurityGroups与InstanceName的其中一个，但不能同时设置</dx-alert> */
  SecurityGroups?: string[];
  /** 给实例绑定用户角色，传空值为解绑操作 */
  CamRoleName?: string;
  /** 修改后实例的主机名。点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。Windows 实例：主机名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。其他类型（Linux 等）实例：主机名字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。注意点：修改主机名后实例会立即重启，重启后新的主机名生效。 */
  HostName?: string;
  /** 实例销毁保护标志，表示是否允许通过api接口删除实例。取值范围：true：表示开启实例保护，不允许通过api接口删除实例false：表示关闭实例保护，允许通过api接口删除实例默认取值：false。 */
  DisableApiTermination?: boolean;
  /** 角色类别，与CamRoleName搭配使用，该值可从CAM DescribeRoleList, GetRole接口返回RoleType字段获取，当前只接受user、system和service_linked三种类别。举例：一般CamRoleName中包含“LinkedRoleIn”（如TKE_QCSLinkedRoleInPrometheusService）时，DescribeRoleList和GetRole返回的RoleType为service_linked，则本参数也需要传递service_linked。该参数默认值为user，若CameRoleName为非service_linked类型，本参数可不传递。 */
  CamRoleType?: string;
  /** 修改实例主机名是否自动重启实例，不传默认自动重启。- true: 修改主机名，并自动重启实例；- false: 修改主机名，不自动重启实例，需要手动重启使新主机名生效。注意点：本参数仅对修改主机名生效。 */
  AutoReboot?: boolean;
}

declare interface ModifyInstancesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesChargeTypeRequest {
  /** 一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为30。 */
  InstanceIds: string[];
  /** 修改后实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月。POSTPAID_BY_HOUR：后付费，即按量付费。 */
  InstanceChargeType: string;
  /** 修改后预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。</dx-alert> */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 是否同时切换弹性数据云盘计费模式。取值范围：true：表示切换弹性数据云盘计费模式false：表示不切换弹性数据云盘计费模式默认取值：false。 */
  ModifyPortableDataDisk?: boolean;
}

declare interface ModifyInstancesChargeTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesProjectRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。 */
  InstanceIds: string[];
  /** 项目ID。项目可以使用[AddProject](https://cloud.tencent.com/document/product/651/81952)接口创建。可通过[`DescribeProject`](https://cloud.tencent.com/document/product/378/4400) API返回值中的`projectId`获取。后续使用[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口查询实例时，项目ID可用于过滤结果。 */
  ProjectId: number;
}

declare interface ModifyInstancesProjectResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesRenewFlagRequest {
  /** 一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。 */
  InstanceIds: string[];
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag: string;
}

declare interface ModifyInstancesRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesVpcAttributeRequest {
  /** 待操作的实例ID数组。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。 */
  InstanceIds: string[];
  /** 私有网络相关信息配置，通过该参数指定私有网络的ID，子网ID，私有网络ip等信息。当指定私有网络ID和子网ID（子网必须在实例所在的可用区）与指定实例所在私有网络不一致时，会将实例迁移至指定的私有网络的子网下。可通过`PrivateIpAddresses`指定私有网络子网IP，若需指定则所有已指定的实例均需要指定子网IP，此时`InstanceIds`与`PrivateIpAddresses`一一对应。不指定`PrivateIpAddresses`时随机分配私有网络子网IP。 */
  VirtualPrivateCloud: VirtualPrivateCloud;
  /** 是否对运行中的实例选择强制关机。默认为TRUE。 */
  ForceStop?: boolean;
  /** 是否保留主机名。默认为FALSE。 */
  ReserveHostName?: boolean;
}

declare interface ModifyInstancesVpcAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyKeyPairAttributeRequest {
  /** 密钥对ID，密钥对ID形如：`skey-xxxxxxxx`。可以通过以下方式获取可用的密钥 ID：通过登录[控制台](https://console.cloud.tencent.com/cvm/sshkey)查询密钥 ID。通过调用接口 [DescribeKeyPairs](https://cloud.tencent.com/document/api/213/9403) ，取返回信息中的 `KeyId` 获取密钥对 ID。 */
  KeyId: string;
  /** 修改后的密钥对名称，可由数字，字母和下划线组成，长度不超过25个字符。 */
  KeyName?: string;
  /** 修改后的密钥对描述信息。可任意命名，但不得超过60个字符。 */
  Description?: string;
}

declare interface ModifyKeyPairAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyLaunchTemplateDefaultVersionRequest {
  /** 启动模板ID。 */
  LaunchTemplateId: string;
  /** 待设置的默认版本号。 */
  DefaultVersion: number;
}

declare interface ModifyLaunchTemplateDefaultVersionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ProgramFpgaImageRequest {
  /** 实例的ID信息。 */
  InstanceId: string;
  /** FPGA镜像文件的COS URL地址。 */
  FPGAUrl: string;
  /** 实例上FPGA卡的DBDF号，不填默认烧录FPGA镜像到实例所拥有的所有FPGA卡。 */
  DBDFs?: string[];
  /** 试运行，不会执行实际的烧录动作，默认为False。 */
  DryRun?: boolean;
}

declare interface ProgramFpgaImageResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface PurchaseReservedInstancesOfferingRequest {
  /** 购买预留实例计费数量 */
  InstanceCount: number;
  /** 预留实例计费配置ID */
  ReservedInstancesOfferingId: string;
  /** 试运行 */
  DryRun?: boolean;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。更多详细信息请参阅：如何保证幂等性 */
  ClientToken?: string;
  /** 预留实例显示名称。不指定实例显示名称则默认显示‘未命名’。最多支持60个字符（包含模式串）。 */
  ReservedInstanceName?: string;
}

declare interface PurchaseReservedInstancesOfferingResponse {
  /** 已购买预留实例计费ID */
  ReservedInstanceId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RebootInstancesRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
  /** 本参数已弃用，推荐使用StopType，不可以与参数StopType同时使用。表示是否在正常重启失败后选择强制重启实例。取值范围：true：表示在正常重启失败后进行强制重启false：表示在正常重启失败后不进行强制重启默认取值：false。 */
  ForceReboot?: boolean;
  /** 关机类型。取值范围：SOFT：表示软关机HARD：表示硬关机SOFT_FIRST：表示优先软关机，失败再执行硬关机默认取值：SOFT。 */
  StopType?: string;
}

declare interface RebootInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveChcAssistVpcRequest {
  /** CHC物理服务器Id。 */
  ChcIds: string[];
}

declare interface RemoveChcAssistVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveChcDeployVpcRequest {
  /** CHC物理服务器Id。 */
  ChcIds: string[];
}

declare interface RemoveChcDeployVpcResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewHostsRequest {
  /** 一个或多个待操作的CDH实例ID。每次请求的CDH实例的上限为100。 */
  HostIds: string[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  HostChargePrepaid: ChargePrepaid;
}

declare interface RenewHostsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewInstancesRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的续费时长、是否设置自动续费等属性。包年包月实例该参数为必传参数。</dx-alert> */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 是否续费弹性数据盘。取值范围：true：表示续费包年包月实例同时续费其挂载的弹性数据盘false：表示续费包年包月实例同时不再续费其挂载的弹性数据盘默认取值：true。 */
  RenewPortableDataDisk?: boolean;
}

declare interface RenewInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RepairTaskControlRequest {
  /** 待授权任务实例对应的产品类型，支持取值：- `CVM`：云服务器- `CDH`：专用宿主机- `CPM2.0`：裸金属云服务器 */
  Product: string;
  /** 指定待操作的实例ID列表，仅允许对列表中的实例ID相关的维修任务发起授权。 */
  InstanceIds: string[];
  /** 维修任务ID。 */
  TaskId: string;
  /** 操作类型，当前只支持传入`AuthorizeRepair`。 */
  Operate: string;
  /** 预约授权时间，形如`2023-01-01 12:00:00`。预约时间需晚于当前时间至少5分钟，且在48小时之内。 */
  OrderAuthTime?: string;
  /** 附加的授权处理策略。 */
  TaskSubMethod?: string;
}

declare interface RepairTaskControlResponse {
  /** 已完成授权的维修任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstanceRequest {
  /** 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。 */
  InstanceId: string;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：公共镜像自定义镜像共享镜像服务市场镜像可通过以下方式获取可用的镜像ID：`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，取返回信息中的`ImageId`字段。默认取值：默认使用当前镜像。 */
  ImageId?: string;
  /** 实例系统盘配置信息。系统盘为云盘的实例可以通过该参数指定重装后的系统盘大小来实现对系统盘的扩容操作。系统盘大小只支持扩容不支持缩容；重装只支持修改系统盘的大小，不能修改系统盘的类型。 */
  SystemDisk?: SystemDisk;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。 */
  LoginSettings?: LoginSettings;
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务；自定义镜像与镜像市场镜像默认不开启云监控，云安全服务，而使用镜像里保留的服务。 */
  EnhancedService?: EnhancedService;
  /** 重装系统时，可以指定修改实例的主机名。点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。Windows 实例：主机名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。其他类型（Linux 等）实例：主机名字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。 */
  HostName?: string;
  /** 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB。关于获取此参数的详细介绍，请参阅[Windows](https://cloud.tencent.com/document/product/213/17526)和[Linux](https://cloud.tencent.com/document/product/213/17525)启动时运行命令。 */
  UserData?: string;
}

declare interface ResetInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstancesInternetMaxBandwidthRequest {
  /** 一个或多个待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/9388)接口返回值中的 `InstanceId` 获取。 每次请求批量实例的上限为100。当调整 `BANDWIDTH_PREPAID` 和 `BANDWIDTH_POSTPAID_BY_HOUR` 计费方式的带宽时，只支持一个实例。 */
  InstanceIds: string[];
  /** 公网出带宽配置。不同机型带宽上限范围不一致，具体限制详见带宽限制对账表。暂时只支持 `InternetMaxBandwidthOut` 参数。 */
  InternetAccessible: InternetAccessible;
  /** 带宽生效的起始时间。格式：`YYYY-MM-DD`，例如：`2016-10-30`。起始时间不能早于当前时间。如果起始时间是今天则新设置的带宽立即生效。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。 */
  StartTime?: string;
  /** 带宽生效的终止时间。格式： `YYYY-MM-DD` ，例如：`2016-10-30` 。新设置的带宽的有效期包含终止时间此日期。终止时间不能晚于包年包月实例的到期时间。实例的到期时间可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/9388)接口返回值中的`ExpiredTime`获取。该参数只对包年包月带宽有效，其他模式带宽不支持该参数，否则接口会以相应错误码返回。 */
  EndTime?: string;
}

declare interface ResetInstancesInternetMaxBandwidthResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstancesPasswordRequest {
  /** 一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/213/15728) API返回值中的`InstanceId`获取。每次请求允许操作的实例数量上限是100。 */
  InstanceIds: string[];
  /** 重置后的实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：Linux 实例密码必须8-30位，推荐使用12位以上密码，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：小写字母：[a-z]大写字母：[A-Z]数字：0-9特殊字符： ()\`\~!@#$%^&\*-+=\_|{}[]:;'<>,.?/Windows 实例密码必须12\~30位，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符小写字母：[a-z]大写字母：[A-Z]数字： 0-9特殊字符：()\`\~!@#$%^&\*-+=\_|{}[]:;' <>,.?/如果实例即包含 `Linux` 实例又包含 `Windows` 实例，则密码复杂度限制按照 `Windows` 实例的限制。 */
  Password: string;
  /** 待重置密码的实例操作系统的用户名。不得超过64个字符。 */
  UserName?: string;
  /** 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：true：表示在正常关机失败后进行强制关机false：表示在正常关机失败后不进行强制关机默认取值：false。强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。 */
  ForceStop?: boolean;
}

declare interface ResetInstancesPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstancesTypeRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。本接口目前仅支持每次操作1个实例。 */
  InstanceIds: string[];
  /** 调整后的实例机型。不同实例机型指定了不同的资源规格，具体取值可通过调用接口[`DescribeInstanceTypeConfigs`](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例类型](https://cloud.tencent.com/document/product/213/11518)描述。 */
  InstanceType: string;
  /** 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机。取值范围：true：表示在正常关机失败后进行强制关机false：表示在正常关机失败后不进行强制关机默认取值：false。强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。 */
  ForceStop?: boolean;
}

declare interface ResetInstancesTypeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResizeInstanceDisksRequest {
  /** 待操作的实例ID。可通过[`DescribeInstances`](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。 */
  InstanceId: string;
  /** 待扩容的数据盘配置信息。只支持扩容非弹性数据盘（[`DescribeDisks`](https://cloud.tencent.com/document/api/362/16315)接口返回值中的`Portable`为`false`表示非弹性）。数据盘容量单位：GB。最小扩容步长：10G。关于数据盘类型的选择请参考[硬盘产品简介](https://cloud.tencent.com/document/product/362/2353)。可选数据盘类型受到实例类型`InstanceType`限制。另外允许扩容的最大容量也因数据盘类型的不同而有所差异。您必须指定参数DataDisks与SystemDisk的其中一个，但不能同时指定。</dx-alert> */
  DataDisks?: DataDisk[];
  /** 是否对运行中的实例选择强制关机。建议对运行中的实例先手动关机，然后再重置用户密码。取值范围：true：表示在正常关机失败后进行强制关机false：表示在正常关机失败后不进行强制关机默认取值：false。强制关机的效果等同于关闭物理计算机的电源开关。强制关机可能会导致数据丢失或文件系统损坏，请仅在服务器不能正常关机时使用。 */
  ForceStop?: boolean;
  /** 待扩容的系统盘配置信息。只支持扩容云盘。您必须指定参数DataDisks与SystemDisk的其中一个，但不能同时指定。</dx-alert> */
  SystemDisk?: SystemDisk;
  /** 扩容云盘的方式是否为在线扩容。 */
  ResizeOnline?: boolean;
}

declare interface ResizeInstanceDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunInstancesRequest {
  /** 实例[计费类型](https://cloud.tencent.com/document/product/213/2180)。PREPAID：预付费，即包年包月POSTPAID_BY_HOUR：按小时后付费CDHPAID：独享子机（基于专用宿主机创建，宿主机部分的资源不收费）SPOTPAID：竞价付费CDCPAID：专用集群付费默认值：POSTPAID_BY_HOUR。 */
  InstanceChargeType?: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid?: InstanceChargePrepaid;
  /** 实例所在的位置。通过该参数可以指定实例所属可用区，所属项目，所属宿主机（在专用宿主机上创建子机时指定）等属性。 注：如果您不指定LaunchTemplate参数，则Placement为必选参数。若同时传递Placement和LaunchTemplate，则默认覆盖LaunchTemplate中对应的Placement的值。 */
  Placement?: Placement;
  /** 实例机型。不同实例机型指定了不同的资源规格。对于付费模式为PREPAID或POSTPAID\_BY\_HOUR的实例创建，具体取值可通过调用接口[DescribeInstanceTypeConfigs](https://cloud.tencent.com/document/api/213/15749)来获得最新的规格表或参见[实例规格](https://cloud.tencent.com/document/product/213/11518)描述。若不指定该参数，则系统将根据当前地域的资源售卖情况动态指定默认机型。对于付费模式为CDHPAID的实例创建，该参数以"CDH_"为前缀，根据CPU和内存配置生成，具体形式为：CDH_XCXG，例如对于创建CPU为1核，内存为1G大小的专用宿主机的实例，该参数应该为CDH_1C1G。 */
  InstanceType?: string;
  /** 指定有效的[镜像](https://cloud.tencent.com/document/product/213/4940)ID，格式形如`img-xxx`。镜像类型分为四种：公共镜像自定义镜像共享镜像服务市场镜像可通过以下方式获取可用的镜像ID：`公共镜像`、`自定义镜像`、`共享镜像`的镜像ID可通过登录[控制台](https://console.cloud.tencent.com/cvm/image?rid=1&imageType=PUBLIC_IMAGE)查询；`服务镜像市场`的镜像ID可通过[云市场](https://market.cloud.tencent.com/list)查询。通过调用接口 [DescribeImages](https://cloud.tencent.com/document/api/213/15715) ，传入InstanceType获取当前机型支持的镜像列表，取返回信息中的`ImageId`字段。 注：如果您不指定LaunchTemplate参数，则ImageId为必选参数。若同时传递ImageId和LaunchTemplate，则默认覆盖LaunchTemplate中对应的ImageId的值。 */
  ImageId?: string;
  /** 实例系统盘配置信息。若不指定该参数，则按照系统默认值进行分配。 */
  SystemDisk?: SystemDisk;
  /** 实例数据盘配置信息。若不指定该参数，则默认不购买数据盘。支持购买的时候指定21块数据盘，其中最多包含1块LOCAL_BASIC数据盘或者LOCAL_SSD数据盘，最多包含20块CLOUD_BASIC数据盘、CLOUD_PREMIUM数据盘或者CLOUD_SSD数据盘。 */
  DataDisks?: DataDisk[];
  /** 私有网络相关信息配置。通过该参数可以指定私有网络的ID，子网ID等信息。若在此参数中指定了私有网络IP，即表示每个实例的主网卡IP；同时，InstanceCount参数必须与私有网络IP的个数一致且不能大于20。 */
  VirtualPrivateCloud?: VirtualPrivateCloud;
  /** 公网带宽相关信息设置。若不指定该参数，则默认公网带宽为0Mbps。 */
  InternetAccessible?: InternetAccessible;
  /** 购买实例数量。包年包月实例取值范围：[1，500]，按量计费实例取值范围：[1，500]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量，具体配额相关限制详见[CVM实例购买限制](https://cloud.tencent.com/document/product/213/2664)。 */
  InstanceCount?: number;
  /** 实例显示名称。不指定实例显示名称则默认显示‘未命名’。购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server_{R:3}`，购买1台时，实例显示名称为`server_3`；购买2台时，实例显示名称分别为`server_3`，`server_4`。支持指定多个模式串`{R:x}`。购买多台实例，如果不指定模式串，则在实例显示名称添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server_`，购买2台时，实例显示名称分别为`server_1`，`server_2`。最多支持60个字符（包含模式串）。 */
  InstanceName?: string;
  /** 实例登录设置。通过该参数可以设置实例的登录方式密码、密钥或保持镜像的原始登录设置。默认情况下会随机生成密码，并以站内信方式知会到用户。 */
  LoginSettings?: LoginSettings;
  /** 实例所属安全组。该参数可以通过调用 [DescribeSecurityGroups](https://cloud.tencent.com/document/api/215/15808) 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。 */
  SecurityGroupIds?: string[];
  /** 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务；自定义镜像与镜像市场镜像默认不开启云监控，云安全服务，而使用镜像里保留的服务。 */
  EnhancedService?: EnhancedService;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 实例主机名。点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。Windows 实例：主机名名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。其他类型（Linux 等）实例：主机名字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。购买多台实例，如果指定模式串`{R:x}`，表示生成数字`[x, x+n-1]`，其中`n`表示购买实例的数量，例如`server{R:3}`，购买1台时，实例主机名为`server3`；购买2台时，实例主机名分别为`server3`，`server4`。支持指定多个模式串`{R:x}`。购买多台实例，如果不指定模式串，则在实例主机名添加后缀`1、2...n`，其中`n`表示购买实例的数量，例如`server`，购买2台时，实例主机名分别为`server1`，`server2`。 */
  HostName?: string;
  /** 定时任务。通过该参数可以为实例指定定时任务，目前仅支持定时销毁。 */
  ActionTimer?: ActionTimer;
  /** 置放群组id，仅支持指定一个。 */
  DisasterRecoverGroupIds?: string[];
  /** 标签描述列表。通过指定该参数可以同时绑定标签到相应的云服务器、云硬盘实例。 */
  TagSpecification?: TagSpecification[];
  /** 实例的市场相关选项，如竞价实例相关参数，若指定实例的付费模式为竞价付费但没有传递该参数时，默认按当前固定折扣价格出价。 */
  InstanceMarketOptions?: InstanceMarketOptionsRequest;
  /** 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB。关于获取此参数的详细介绍，请参阅[Windows](https://cloud.tencent.com/document/product/213/17526)和[Linux](https://cloud.tencent.com/document/product/213/17525)启动时运行命令。 */
  UserData?: string;
  /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和云服务器库存。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.false（默认）：发送正常请求，通过检查后直接创建实例 */
  DryRun?: boolean;
  /** 描述了实例CPU拓扑结构的相关信息。若不指定该参数，则按系统资源情况决定。 */
  CpuTopology?: CpuTopology;
  /** CAM角色名称。可通过[`DescribeRoleList`](https://cloud.tencent.com/document/product/598/13887)接口返回值中的`roleName`获取。 */
  CamRoleName?: string;
  /** 高性能计算集群ID。若创建的实例为高性能计算实例，需指定实例放置的集群，否则不可指定。 */
  HpcClusterId?: string;
  /** 实例启动模板。 */
  LaunchTemplate?: LaunchTemplate;
  /** 指定专用集群创建。 */
  DedicatedClusterId?: string;
  /** 指定CHC物理服务器来创建CHC云主机。 */
  ChcIds?: string[];
  /** 实例销毁保护标志，表示是否允许通过api接口删除实例。取值范围：true：表示开启实例保护，不允许通过api接口删除实例false：表示关闭实例保护，允许通过api接口删除实例默认取值：false。 */
  DisableApiTermination?: boolean;
}

declare interface RunInstancesResponse {
  /** 当通过本接口来创建实例时会返回该参数，表示一个或多个实例`ID`。返回实例`ID`列表并不代表实例创建成功，可根据 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口查询返回的InstancesSet中对应实例的`ID`的状态来判断创建是否完成；如果实例状态由“PENDING(创建中)”变为“RUNNING(运行中)”，则为创建成功。 */
  InstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartInstancesRequest {
  /** 一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/213/15728)接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
}

declare interface StartInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopInstancesRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
  /** 本参数已弃用，推荐使用StopType，不可以与参数StopType同时使用。表示是否在正常关闭失败后选择强制关闭实例。取值范围：true：表示在正常关闭失败后进行强制关闭false：表示在正常关闭失败后不进行强制关闭默认取值：false。 */
  ForceStop?: boolean;
  /** 实例的关闭模式。取值范围：SOFT_FIRST：表示在正常关闭失败后进行强制关闭HARD：直接强制关闭SOFT：仅软关机默认取值：SOFT。 */
  StopType?: string;
  /** 按量计费实例关机收费模式。取值范围：KEEP_CHARGING：关机继续收费STOP_CHARGING：关机停止收费默认取值：KEEP_CHARGING。该参数只针对部分按量计费云硬盘实例生效，详情参考[按量计费实例关机不收费说明](https://cloud.tencent.com/document/product/213/19918) */
  StoppedMode?: string;
}

declare interface StopInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface SyncImagesRequest {
  /** 镜像ID列表 ，镜像ID可以通过如下方式获取：通过[DescribeImages](https://cloud.tencent.com/document/api/213/15715)接口返回的`ImageId`获取。通过[镜像控制台](https://console.cloud.tencent.com/cvm/image)获取。镜像ID必须满足限制：镜像ID对应的镜像状态必须为`NORMAL`。镜像状态请参考[镜像数据表](https://cloud.tencent.com/document/product/213/15753)。 */
  ImageIds: string[];
  /** 目的同步地域列表，必须满足如下限制：必须是一个合法的Region。如果是自定义镜像，则目标同步地域不能为源地域。如果是共享镜像，则目的同步地域仅支持源地域，表示将共享镜像复制为源地域的自定义镜像。暂不支持部分地域同步，请参考[复制镜像](https://cloud.tencent.com/document/product/213/4943)。具体地域参数请参考[Region](https://cloud.tencent.com/document/product/213/6091)。 */
  DestinationRegions: string[];
  /** 检测是否支持发起同步镜像。默认值: false */
  DryRun?: boolean;
  /** 目标镜像名称。默认使用源镜像名称。 */
  ImageName?: string;
  /** 是否需要返回目的地域的镜像ID。默认值: false */
  ImageSetRequired?: boolean;
}

declare interface SyncImagesResponse {
  /** 目的地域的镜像ID信息。 */
  ImageSet?: SyncImage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateInstancesRequest {
  /** 一个或多个待操作的实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/213/15728) 接口返回值中的`InstanceId`获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
  /** 释放实例挂载的包年包月数据盘。true表示销毁实例同时释放包年包月数据盘，false表示只销毁实例。默认值：false */
  ReleasePrepaidDataDisks?: boolean;
}

declare interface TerminateInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Cvm 云服务器} */
declare interface Cvm {
  (): Versions;
  /** 创建CDH实例 {@link AllocateHostsRequest} {@link AllocateHostsResponse} */
  AllocateHosts(data: AllocateHostsRequest, config?: AxiosRequestConfig): AxiosPromise<AllocateHostsResponse>;
  /** 绑定密钥对 {@link AssociateInstancesKeyPairsRequest} {@link AssociateInstancesKeyPairsResponse} */
  AssociateInstancesKeyPairs(data: AssociateInstancesKeyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateInstancesKeyPairsResponse>;
  /** 绑定安全组 {@link AssociateSecurityGroupsRequest} {@link AssociateSecurityGroupsResponse} */
  AssociateSecurityGroups(data: AssociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateSecurityGroupsResponse>;
  /** 配置CHC物理服务器的带外和部署网络 {@link ConfigureChcAssistVpcRequest} {@link ConfigureChcAssistVpcResponse} */
  ConfigureChcAssistVpc(data: ConfigureChcAssistVpcRequest, config?: AxiosRequestConfig): AxiosPromise<ConfigureChcAssistVpcResponse>;
  /** 配置CHC物理服务器部署网络 {@link ConfigureChcDeployVpcRequest} {@link ConfigureChcDeployVpcResponse} */
  ConfigureChcDeployVpc(data: ConfigureChcDeployVpcRequest, config?: AxiosRequestConfig): AxiosPromise<ConfigureChcDeployVpcResponse>;
  /** 创建分散置放群组 {@link CreateDisasterRecoverGroupRequest} {@link CreateDisasterRecoverGroupResponse} */
  CreateDisasterRecoverGroup(data: CreateDisasterRecoverGroupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDisasterRecoverGroupResponse>;
  /** 创建高性能计算集群 {@link CreateHpcClusterRequest} {@link CreateHpcClusterResponse} */
  CreateHpcCluster(data: CreateHpcClusterRequest, config?: AxiosRequestConfig): AxiosPromise<CreateHpcClusterResponse>;
  /** 创建镜像 {@link CreateImageRequest} {@link CreateImageResponse} */
  CreateImage(data: CreateImageRequest, config?: AxiosRequestConfig): AxiosPromise<CreateImageResponse>;
  /** 创建密钥对 {@link CreateKeyPairRequest} {@link CreateKeyPairResponse} */
  CreateKeyPair(data: CreateKeyPairRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKeyPairResponse>;
  /** 创建实例启动模板 {@link CreateLaunchTemplateRequest} {@link CreateLaunchTemplateResponse} */
  CreateLaunchTemplate(data: CreateLaunchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLaunchTemplateResponse>;
  /** 创建实例启动模板新版本 {@link CreateLaunchTemplateVersionRequest} {@link CreateLaunchTemplateVersionResponse} */
  CreateLaunchTemplateVersion(data: CreateLaunchTemplateVersionRequest, config?: AxiosRequestConfig): AxiosPromise<CreateLaunchTemplateVersionResponse>;
  /** 删除分散置放群组 {@link DeleteDisasterRecoverGroupsRequest} {@link DeleteDisasterRecoverGroupsResponse} */
  DeleteDisasterRecoverGroups(data: DeleteDisasterRecoverGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDisasterRecoverGroupsResponse>;
  /** 删除高性能计算集群 {@link DeleteHpcClustersRequest} {@link DeleteHpcClustersResponse} */
  DeleteHpcClusters(data: DeleteHpcClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteHpcClustersResponse>;
  /** 删除镜像 {@link DeleteImagesRequest} {@link DeleteImagesResponse} */
  DeleteImages(data: DeleteImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteImagesResponse>;
  /** 删除定时任务 {@link DeleteInstancesActionTimerRequest} {@link DeleteInstancesActionTimerResponse} */
  DeleteInstancesActionTimer(data: DeleteInstancesActionTimerRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteInstancesActionTimerResponse>;
  /** 删除密钥对 {@link DeleteKeyPairsRequest} {@link DeleteKeyPairsResponse} */
  DeleteKeyPairs(data: DeleteKeyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteKeyPairsResponse>;
  /** 删除实例启动模板 {@link DeleteLaunchTemplateRequest} {@link DeleteLaunchTemplateResponse} */
  DeleteLaunchTemplate(data: DeleteLaunchTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLaunchTemplateResponse>;
  /** 删除实例启动模板版本 {@link DeleteLaunchTemplateVersionsRequest} {@link DeleteLaunchTemplateVersionsResponse} */
  DeleteLaunchTemplateVersions(data: DeleteLaunchTemplateVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteLaunchTemplateVersionsResponse>;
  /** 查询用户配额详情 {@link DescribeAccountQuotaRequest} {@link DescribeAccountQuotaResponse} */
  DescribeAccountQuota(data?: DescribeAccountQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAccountQuotaResponse>;
  /** 查询CHC物理服务器禁止做的操作 {@link DescribeChcDeniedActionsRequest} {@link DescribeChcDeniedActionsResponse} */
  DescribeChcDeniedActions(data: DescribeChcDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChcDeniedActionsResponse>;
  /** 查询CHC物理服务器 {@link DescribeChcHostsRequest} {@link DescribeChcHostsResponse} */
  DescribeChcHosts(data?: DescribeChcHostsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeChcHostsResponse>;
  /** 查询置放群组配额 {@link DescribeDisasterRecoverGroupQuotaRequest} {@link DescribeDisasterRecoverGroupQuotaResponse} */
  DescribeDisasterRecoverGroupQuota(data?: DescribeDisasterRecoverGroupQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisasterRecoverGroupQuotaResponse>;
  /** 查询分散置放群组信息 {@link DescribeDisasterRecoverGroupsRequest} {@link DescribeDisasterRecoverGroupsResponse} */
  DescribeDisasterRecoverGroups(data?: DescribeDisasterRecoverGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisasterRecoverGroupsResponse>;
  /** 查看CDH实例列表 {@link DescribeHostsRequest} {@link DescribeHostsResponse} */
  DescribeHosts(data?: DescribeHostsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHostsResponse>;
  /** 查询高性能集群信息 {@link DescribeHpcClustersRequest} {@link DescribeHpcClustersResponse} */
  DescribeHpcClusters(data?: DescribeHpcClustersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeHpcClustersResponse>;
  /** 查询镜像配额上限 {@link DescribeImageQuotaRequest} {@link DescribeImageQuotaResponse} */
  DescribeImageQuota(data?: DescribeImageQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageQuotaResponse>;
  /** 查看镜像分享信息 {@link DescribeImageSharePermissionRequest} {@link DescribeImageSharePermissionResponse} */
  DescribeImageSharePermission(data: DescribeImageSharePermissionRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImageSharePermissionResponse>;
  /** 查看镜像列表 {@link DescribeImagesRequest} {@link DescribeImagesResponse} */
  DescribeImages(data?: DescribeImagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImagesResponse>;
  /** 查询外部导入镜像支持的OS列表 {@link DescribeImportImageOsRequest} {@link DescribeImportImageOsResponse} */
  DescribeImportImageOs(data?: DescribeImportImageOsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeImportImageOsResponse>;
  /** 查询所支持的实例机型族信息 {@link DescribeInstanceFamilyConfigsRequest} {@link DescribeInstanceFamilyConfigsResponse} */
  DescribeInstanceFamilyConfigs(data?: DescribeInstanceFamilyConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceFamilyConfigsResponse>;
  /** 查询实例带宽配置 {@link DescribeInstanceInternetBandwidthConfigsRequest} {@link DescribeInstanceInternetBandwidthConfigsResponse} */
  DescribeInstanceInternetBandwidthConfigs(data: DescribeInstanceInternetBandwidthConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceInternetBandwidthConfigsResponse>;
  /** 查询实例机型列表 {@link DescribeInstanceTypeConfigsRequest} {@link DescribeInstanceTypeConfigsResponse} */
  DescribeInstanceTypeConfigs(data?: DescribeInstanceTypeConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceTypeConfigsResponse>;
  /** 查询实例管理终端地址 {@link DescribeInstanceVncUrlRequest} {@link DescribeInstanceVncUrlResponse} */
  DescribeInstanceVncUrl(data: DescribeInstanceVncUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceVncUrlResponse>;
  /** 查看实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查询定时任务信息 {@link DescribeInstancesActionTimerRequest} {@link DescribeInstancesActionTimerResponse} */
  DescribeInstancesActionTimer(data?: DescribeInstancesActionTimerRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesActionTimerResponse>;
  /** 查询实例可调整配置 {@link DescribeInstancesModificationRequest} {@link DescribeInstancesModificationResponse} */
  DescribeInstancesModification(data: DescribeInstancesModificationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesModificationResponse>;
  /** 查询实例操作限制 {@link DescribeInstancesOperationLimitRequest} {@link DescribeInstancesOperationLimitResponse} */
  DescribeInstancesOperationLimit(data: DescribeInstancesOperationLimitRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesOperationLimitResponse>;
  /** 查看实例状态列表 {@link DescribeInstancesStatusRequest} {@link DescribeInstancesStatusResponse} */
  DescribeInstancesStatus(data?: DescribeInstancesStatusRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesStatusResponse>;
  /** 查询网络计费类型 {@link DescribeInternetChargeTypeConfigsRequest} {@link DescribeInternetChargeTypeConfigsResponse} */
  DescribeInternetChargeTypeConfigs(data?: DescribeInternetChargeTypeConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInternetChargeTypeConfigsResponse>;
  /** 查询密钥对列表 {@link DescribeKeyPairsRequest} {@link DescribeKeyPairsResponse} */
  DescribeKeyPairs(data?: DescribeKeyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKeyPairsResponse>;
  /** 查询实例模板版本信息 {@link DescribeLaunchTemplateVersionsRequest} {@link DescribeLaunchTemplateVersionsResponse} */
  DescribeLaunchTemplateVersions(data: DescribeLaunchTemplateVersionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLaunchTemplateVersionsResponse>;
  /** 查询实例启动模板 {@link DescribeLaunchTemplatesRequest} {@link DescribeLaunchTemplatesResponse} */
  DescribeLaunchTemplates(data?: DescribeLaunchTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeLaunchTemplatesResponse>;
  /** 查询地域列表 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 列出已购买的预留实例 {@link DescribeReservedInstancesRequest} {@link DescribeReservedInstancesResponse} */
  DescribeReservedInstances(data?: DescribeReservedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReservedInstancesResponse>;
  /** 查询预留实例机型配置参数 {@link DescribeReservedInstancesConfigInfosRequest} {@link DescribeReservedInstancesConfigInfosResponse} */
  DescribeReservedInstancesConfigInfos(data?: DescribeReservedInstancesConfigInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReservedInstancesConfigInfosResponse>;
  /** 列出可购买的预留实例配置 {@link DescribeReservedInstancesOfferingsRequest} {@link DescribeReservedInstancesOfferingsResponse} */
  DescribeReservedInstancesOfferings(data?: DescribeReservedInstancesOfferingsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeReservedInstancesOfferingsResponse>;
  /** 查询维修任务列表 {@link DescribeTaskInfoRequest} {@link DescribeTaskInfoResponse} */
  DescribeTaskInfo(data: DescribeTaskInfoRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeTaskInfoResponse>;
  /** 获取可用区机型配置信息 {@link DescribeZoneInstanceConfigInfosRequest} {@link DescribeZoneInstanceConfigInfosResponse} */
  DescribeZoneInstanceConfigInfos(data?: DescribeZoneInstanceConfigInfosRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZoneInstanceConfigInfosResponse>;
  /** 查询可用区列表 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data?: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 解绑密钥对 {@link DisassociateInstancesKeyPairsRequest} {@link DisassociateInstancesKeyPairsResponse} */
  DisassociateInstancesKeyPairs(data: DisassociateInstancesKeyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateInstancesKeyPairsResponse>;
  /** 解绑安全组 {@link DisassociateSecurityGroupsRequest} {@link DisassociateSecurityGroupsResponse} */
  DisassociateSecurityGroups(data: DisassociateSecurityGroupsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateSecurityGroupsResponse>;
  /** 进入救援模式 {@link EnterRescueModeRequest} {@link EnterRescueModeResponse} */
  EnterRescueMode(data: EnterRescueModeRequest, config?: AxiosRequestConfig): AxiosPromise<EnterRescueModeResponse>;
  /** 退出救援模式 {@link ExitRescueModeRequest} {@link ExitRescueModeResponse} */
  ExitRescueMode(data: ExitRescueModeRequest, config?: AxiosRequestConfig): AxiosPromise<ExitRescueModeResponse>;
  /** 导出自定义镜像 {@link ExportImagesRequest} {@link ExportImagesResponse} */
  ExportImages(data: ExportImagesRequest, config?: AxiosRequestConfig): AxiosPromise<ExportImagesResponse>;
  /** 外部镜像导入 {@link ImportImageRequest} {@link ImportImageResponse} */
  ImportImage(data: ImportImageRequest, config?: AxiosRequestConfig): AxiosPromise<ImportImageResponse>;
  /** 导入定时任务 {@link ImportInstancesActionTimerRequest} {@link ImportInstancesActionTimerResponse} */
  ImportInstancesActionTimer(data: ImportInstancesActionTimerRequest, config?: AxiosRequestConfig): AxiosPromise<ImportInstancesActionTimerResponse>;
  /** 导入密钥对 {@link ImportKeyPairRequest} {@link ImportKeyPairResponse} */
  ImportKeyPair(data: ImportKeyPairRequest, config?: AxiosRequestConfig): AxiosPromise<ImportKeyPairResponse>;
  /** 创建预留实例询价 {@link InquirePricePurchaseReservedInstancesOfferingRequest} {@link InquirePricePurchaseReservedInstancesOfferingResponse} */
  InquirePricePurchaseReservedInstancesOffering(data: InquirePricePurchaseReservedInstancesOfferingRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePricePurchaseReservedInstancesOfferingResponse>;
  /** 修改实例计费模式询价 {@link InquiryPriceModifyInstancesChargeTypeRequest} {@link InquiryPriceModifyInstancesChargeTypeResponse} */
  InquiryPriceModifyInstancesChargeType(data: InquiryPriceModifyInstancesChargeTypeRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceModifyInstancesChargeTypeResponse>;
  /** 续费CDH实例询价 {@link InquiryPriceRenewHostsRequest} {@link InquiryPriceRenewHostsResponse} */
  InquiryPriceRenewHosts(data: InquiryPriceRenewHostsRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewHostsResponse>;
  /** 续费实例询价 {@link InquiryPriceRenewInstancesRequest} {@link InquiryPriceRenewInstancesResponse} */
  InquiryPriceRenewInstances(data: InquiryPriceRenewInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRenewInstancesResponse>;
  /** 重装实例询价 {@link InquiryPriceResetInstanceRequest} {@link InquiryPriceResetInstanceResponse} */
  InquiryPriceResetInstance(data: InquiryPriceResetInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceResetInstanceResponse>;
  /** 调整实例带宽上限询价 {@link InquiryPriceResetInstancesInternetMaxBandwidthRequest} {@link InquiryPriceResetInstancesInternetMaxBandwidthResponse} */
  InquiryPriceResetInstancesInternetMaxBandwidth(data: InquiryPriceResetInstancesInternetMaxBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceResetInstancesInternetMaxBandwidthResponse>;
  /** 调整实例配置询价 {@link InquiryPriceResetInstancesTypeRequest} {@link InquiryPriceResetInstancesTypeResponse} */
  InquiryPriceResetInstancesType(data: InquiryPriceResetInstancesTypeRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceResetInstancesTypeResponse>;
  /** 扩容实例磁盘询价 {@link InquiryPriceResizeInstanceDisksRequest} {@link InquiryPriceResizeInstanceDisksResponse} */
  InquiryPriceResizeInstanceDisks(data: InquiryPriceResizeInstanceDisksRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceResizeInstanceDisksResponse>;
  /** 创建实例询价 {@link InquiryPriceRunInstancesRequest} {@link InquiryPriceRunInstancesResponse} */
  InquiryPriceRunInstances(data: InquiryPriceRunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceRunInstancesResponse>;
  /** 退还实例询价 {@link InquiryPriceTerminateInstancesRequest} {@link InquiryPriceTerminateInstancesResponse} */
  InquiryPriceTerminateInstances(data: InquiryPriceTerminateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquiryPriceTerminateInstancesResponse>;
  /** 修改CHC物理服务器的属性 {@link ModifyChcAttributeRequest} {@link ModifyChcAttributeResponse} */
  ModifyChcAttribute(data: ModifyChcAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyChcAttributeResponse>;
  /** 修改分散置放群组属性 {@link ModifyDisasterRecoverGroupAttributeRequest} {@link ModifyDisasterRecoverGroupAttributeResponse} */
  ModifyDisasterRecoverGroupAttribute(data: ModifyDisasterRecoverGroupAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDisasterRecoverGroupAttributeResponse>;
  /** 修改CDH实例的属性 {@link ModifyHostsAttributeRequest} {@link ModifyHostsAttributeResponse} */
  ModifyHostsAttribute(data: ModifyHostsAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHostsAttributeResponse>;
  /** 修改高性能计算集群属性 {@link ModifyHpcClusterAttributeRequest} {@link ModifyHpcClusterAttributeResponse} */
  ModifyHpcClusterAttribute(data: ModifyHpcClusterAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyHpcClusterAttributeResponse>;
  /** 修改镜像属性 {@link ModifyImageAttributeRequest} {@link ModifyImageAttributeResponse} */
  ModifyImageAttribute(data: ModifyImageAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyImageAttributeResponse>;
  /** 修改镜像共享信息 {@link ModifyImageSharePermissionRequest} {@link ModifyImageSharePermissionResponse} */
  ModifyImageSharePermission(data: ModifyImageSharePermissionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyImageSharePermissionResponse>;
  /** 修改实例的硬盘介质 {@link ModifyInstanceDiskTypeRequest} {@link ModifyInstanceDiskTypeResponse} */
  ModifyInstanceDiskType(data: ModifyInstanceDiskTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstanceDiskTypeResponse>;
  /** 修改实例的属性 {@link ModifyInstancesAttributeRequest} {@link ModifyInstancesAttributeResponse} */
  ModifyInstancesAttribute(data: ModifyInstancesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesAttributeResponse>;
  /** 修改实例计费模式 {@link ModifyInstancesChargeTypeRequest} {@link ModifyInstancesChargeTypeResponse} */
  ModifyInstancesChargeType(data: ModifyInstancesChargeTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesChargeTypeResponse>;
  /** 修改实例所属项目 {@link ModifyInstancesProjectRequest} {@link ModifyInstancesProjectResponse} */
  ModifyInstancesProject(data: ModifyInstancesProjectRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesProjectResponse>;
  /** 修改实例续费标识 {@link ModifyInstancesRenewFlagRequest} {@link ModifyInstancesRenewFlagResponse} */
  ModifyInstancesRenewFlag(data: ModifyInstancesRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesRenewFlagResponse>;
  /** 修改实例vpc属性 {@link ModifyInstancesVpcAttributeRequest} {@link ModifyInstancesVpcAttributeResponse} */
  ModifyInstancesVpcAttribute(data: ModifyInstancesVpcAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesVpcAttributeResponse>;
  /** 修改密钥对属性 {@link ModifyKeyPairAttributeRequest} {@link ModifyKeyPairAttributeResponse} */
  ModifyKeyPairAttribute(data: ModifyKeyPairAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyKeyPairAttributeResponse>;
  /** 修改实例启动模板默认版本 {@link ModifyLaunchTemplateDefaultVersionRequest} {@link ModifyLaunchTemplateDefaultVersionResponse} */
  ModifyLaunchTemplateDefaultVersion(data: ModifyLaunchTemplateDefaultVersionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyLaunchTemplateDefaultVersionResponse>;
  /** 在线烧录FPGA镜像 {@link ProgramFpgaImageRequest} {@link ProgramFpgaImageResponse} */
  ProgramFpgaImage(data: ProgramFpgaImageRequest, config?: AxiosRequestConfig): AxiosPromise<ProgramFpgaImageResponse>;
  /** 购买预留实例 {@link PurchaseReservedInstancesOfferingRequest} {@link PurchaseReservedInstancesOfferingResponse} */
  PurchaseReservedInstancesOffering(data: PurchaseReservedInstancesOfferingRequest, config?: AxiosRequestConfig): AxiosPromise<PurchaseReservedInstancesOfferingResponse>;
  /** 重启实例 {@link RebootInstancesRequest} {@link RebootInstancesResponse} */
  RebootInstances(data: RebootInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RebootInstancesResponse>;
  /** 清理CHC物理服务器的带外网络和部署网络 {@link RemoveChcAssistVpcRequest} {@link RemoveChcAssistVpcResponse} */
  RemoveChcAssistVpc(data: RemoveChcAssistVpcRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveChcAssistVpcResponse>;
  /** 清理CHC物理服务器的部署网络 {@link RemoveChcDeployVpcRequest} {@link RemoveChcDeployVpcResponse} */
  RemoveChcDeployVpc(data: RemoveChcDeployVpcRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveChcDeployVpcResponse>;
  /** 续费CDH实例 {@link RenewHostsRequest} {@link RenewHostsResponse} */
  RenewHosts(data: RenewHostsRequest, config?: AxiosRequestConfig): AxiosPromise<RenewHostsResponse>;
  /** 续费实例 {@link RenewInstancesRequest} {@link RenewInstancesResponse} */
  RenewInstances(data: RenewInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RenewInstancesResponse>;
  /** 管理维修任务 {@link RepairTaskControlRequest} {@link RepairTaskControlResponse} */
  RepairTaskControl(data: RepairTaskControlRequest, config?: AxiosRequestConfig): AxiosPromise<RepairTaskControlResponse>;
  /** 重装实例 {@link ResetInstanceRequest} {@link ResetInstanceResponse} */
  ResetInstance(data: ResetInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstanceResponse>;
  /** 调整实例带宽上限 {@link ResetInstancesInternetMaxBandwidthRequest} {@link ResetInstancesInternetMaxBandwidthResponse} */
  ResetInstancesInternetMaxBandwidth(data: ResetInstancesInternetMaxBandwidthRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstancesInternetMaxBandwidthResponse>;
  /** 重置实例密码 {@link ResetInstancesPasswordRequest} {@link ResetInstancesPasswordResponse} */
  ResetInstancesPassword(data: ResetInstancesPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstancesPasswordResponse>;
  /** 调整实例配置 {@link ResetInstancesTypeRequest} {@link ResetInstancesTypeResponse} */
  ResetInstancesType(data: ResetInstancesTypeRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstancesTypeResponse>;
  /** 扩容实例磁盘 {@link ResizeInstanceDisksRequest} {@link ResizeInstanceDisksResponse} */
  ResizeInstanceDisks(data: ResizeInstanceDisksRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeInstanceDisksResponse>;
  /** 创建实例 {@link RunInstancesRequest} {@link RunInstancesResponse} */
  RunInstances(data?: RunInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RunInstancesResponse>;
  /** 启动实例 {@link StartInstancesRequest} {@link StartInstancesResponse} */
  StartInstances(data: StartInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StartInstancesResponse>;
  /** 关闭实例 {@link StopInstancesRequest} {@link StopInstancesResponse} */
  StopInstances(data: StopInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StopInstancesResponse>;
  /** 同步镜像 {@link SyncImagesRequest} {@link SyncImagesResponse} */
  SyncImages(data: SyncImagesRequest, config?: AxiosRequestConfig): AxiosPromise<SyncImagesResponse>;
  /** 退还实例 {@link TerminateInstancesRequest} {@link TerminateInstancesResponse} */
  TerminateInstances(data: TerminateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateInstancesResponse>;
}

export declare type Versions = ["2017-03-12"];

export default Cvm;
