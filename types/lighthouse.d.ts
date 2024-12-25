/// <reference types="node" />

import { AxiosPromise, AxiosRequestConfig } from "axios";

/** 挂载信息 */
declare interface AttachDetail {
  /** 实例ID */
  InstanceId: string;
  /** 实例已挂载弹性云盘数量 */
  AttachedDiskCount: number;
  /** 可挂载弹性云盘数量 */
  MaxAttachCount: number;
}

/** 自动挂载并初始化该数据盘。 */
declare interface AutoMountConfiguration {
  /** 待挂载的实例ID。指定的实例必须与指定的数据盘处于同一可用区，实例状态必须处于“运行中”状态，且实例必须支持[自动化助手](https://cloud.tencent.com/document/product/1340/50752)。 */
  InstanceId: string | null;
  /** 实例内的挂载点。仅Linux操作系统的实例可传入该参数, 不传则默认挂载在“/data/disk”路径下。 */
  MountPoint?: string | null;
  /** 文件系统类型。取值: “ext4”、“xfs”。仅Linux操作系统的实例可传入该参数, 不传则默认为“ext4”。 */
  FileSystemType?: string | null;
}

/** 描述了镜像信息。 */
declare interface Blueprint {
  /** 镜像 ID ，是 Blueprint 的唯一标识。 */
  BlueprintId?: string;
  /** 镜像对外展示标题。 */
  DisplayTitle?: string;
  /** 镜像对外展示版本。 */
  DisplayVersion?: string;
  /** 镜像描述信息。 */
  Description?: string | null;
  /** 操作系统名称。 */
  OsName?: string;
  /** 操作系统平台。 */
  Platform?: string;
  /** 操作系统平台类型，如 LINUX_UNIX、WINDOWS。 */
  PlatformType?: string;
  /** 镜像类型，如 APP_OS、PURE_OS、PRIVATE。 */
  BlueprintType?: string;
  /** 镜像图片 URL。 */
  ImageUrl?: string;
  /** 镜像所需系统盘大小，单位 GB。 */
  RequiredSystemDiskSize?: number;
  /** 镜像状态。 */
  BlueprintState?: string;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string | null;
  /** 镜像名称。 */
  BlueprintName?: string;
  /** 镜像是否支持自动化助手。 */
  SupportAutomationTools?: boolean;
  /** 镜像所需内存大小, 单位: GB */
  RequiredMemorySize?: number;
  /** CVM镜像共享到轻量应用服务器轻量应用服务器后的CVM镜像ID。 */
  ImageId?: string | null;
  /** 官方网站Url。 */
  CommunityUrl?: string;
  /** 指导文章Url。 */
  GuideUrl?: string;
  /** 镜像关联使用场景Id列表。 */
  SceneIdSet?: string[] | null;
  /** Docker版本号。 */
  DockerVersion?: string | null;
  /** 镜像是否已共享。 */
  BlueprintShared?: boolean;
}

/** 描述镜像实例信息。 */
declare interface BlueprintInstance {
  /** 镜像信息。 */
  Blueprint?: Blueprint;
  /** 软件列表。 */
  SoftwareSet?: Software[];
  /** 实例 ID。 */
  InstanceId?: string;
}

/** BlueprintPrice	自定义镜像的价格参数。 */
declare interface BlueprintPrice {
  /** 镜像单价，原价。单位元。 */
  OriginalBlueprintPrice: number;
  /** 镜像总价，原价。单位元。 */
  OriginalPrice: number;
  /** 折扣。 */
  Discount: number;
  /** 镜像折扣后总价。单位元。 */
  DiscountPrice: number;
}

/** 套餐信息。 */
declare interface Bundle {
  /** 套餐 ID。 */
  BundleId?: string;
  /** 内存大小，单位 GB。 */
  Memory?: number;
  /** 系统盘类型。取值范围： CLOUD_SSD：SSD 云硬盘 CLOUD_PREMIUM：高性能云硬盘 */
  SystemDiskType?: string;
  /** 系统盘大小。单位GB。 */
  SystemDiskSize?: number;
  /** 每月网络流量，单位 GB。 */
  MonthlyTraffic?: number;
  /** 是否支持 Linux/Unix 平台。 */
  SupportLinuxUnixPlatform?: boolean;
  /** 是否支持 Windows 平台。 */
  SupportWindowsPlatform?: boolean;
  /** 套餐当前单位价格信息。 */
  Price?: Price;
  /** CPU 核数。 */
  CPU?: number;
  /** 峰值带宽，单位 Mbps。 */
  InternetMaxBandwidthOut?: number;
  /** 网络计费类型。 */
  InternetChargeType?: string;
  /** 套餐售卖状态,取值:‘AVAILABLE’(可用) , ‘SOLD_OUT’(售罄) */
  BundleSalesState?: string;
  /** 套餐类型。取值范围：STARTER_BUNDLE：入门型GENERAL_BUNDLE：通用型ENTERPRISE_BUNDLE：企业型STORAGE_BUNDLE：存储型EXCLUSIVE_BUNDLE：专属型HK_EXCLUSIVE_BUNDLE：香港专属型 CAREFREE_BUNDLE：无忧型BEFAST_BUNDLE：蜂驰型 */
  BundleType?: string;
  /** 套餐类型描述信息。 */
  BundleTypeDescription?: string | null;
  /** 套餐展示标签.取值范围:"ACTIVITY": 活动套餐,"NORMAL": 普通套餐"CAREFREE": 无忧套餐 */
  BundleDisplayLabel?: string;
}

/** 云联网关联的实例列表。 */
declare interface CcnAttachedInstance {
  /** 云联网ID。 */
  CcnId: string;
  /** 关联实例CIDR。 */
  CidrBlock: string[];
  /** 关联实例状态：• PENDING：申请中• ACTIVE：已连接• EXPIRED：已过期• REJECTED：已拒绝• DELETED：已删除• FAILED：失败的（2小时后将异步强制解关联）• ATTACHING：关联中• DETACHING：解关联中• DETACHFAILED：解关联失败（2小时后将异步强制解关联） */
  State: string;
  /** 关联时间。 */
  AttachedTime: string | null;
  /** 备注 */
  Description: string;
}

/** 用户执行TAT命令的数据结构。 */
declare interface Command {
  /** Base64编码后的命令内容，长度不可超过64KB。 */
  Content: string;
  /** 命令超时时间，默认60秒。取值范围[1, 86400]。 */
  Timeout?: number;
  /** 命令执行路径，对于 SHELL 命令默认为 /root，对于 POWERSHELL 命令默认为 C:\Program Files\qcloud\tat_agent\workdir。 */
  WorkingDirectory?: string;
  /** 在 Lighthouse 实例中执行命令的用户名称。默认情况下，在 Linux 实例中以 root 用户执行命令；在Windows 实例中以 System 用户执行命令。 */
  Username?: string;
}

/** 容器环境变量 */
declare interface ContainerEnv {
  /** 环境变量Key */
  Key: string;
  /** 环境变量值 */
  Value: string;
}

/** 数据盘价格 */
declare interface DataDiskPrice {
  /** 云硬盘ID。 */
  DiskId: string;
  /** 云硬盘单价。 */
  OriginalDiskPrice: number;
  /** 云硬盘总价。 */
  OriginalPrice: number;
  /** 折扣。 */
  Discount: number;
  /** 折后总价。 */
  DiscountPrice: number;
  /** 数据盘挂载的实例ID。 */
  InstanceId: string | null;
}

/** 限制操作。 */
declare interface DeniedAction {
  /** 限制操作名。 */
  Action?: string;
  /** 限制操作消息码。 */
  Code?: string;
  /** 限制操作消息。 */
  Message?: string;
}

/** 计费项目明细。 */
declare interface DetailPrice {
  /** 描述计费项目名称，目前取值"DiskSpace"代表云硬盘空间收费项。"DiskBackupQuota"代表云硬盘备份点配额收费项。 */
  PriceName: string;
  /** 云硬盘计费项维度单价。 */
  OriginUnitPrice: number;
  /** 云硬盘计费项维度总价。 */
  OriginalPrice: number;
  /** 云硬盘在计费项维度折扣。 */
  Discount: number;
  /** 云硬盘在计费项维度折后总价。 */
  DiscountPrice: number;
}

/** 套餐折扣详情（仅用于控制台调用询价相关接口返回）。 */
declare interface DiscountDetail {
  /** 计费时长。 */
  TimeSpan?: number;
  /** 计费单元。 */
  TimeUnit?: string;
  /** 总价。 */
  TotalCost?: number;
  /** 折后总价。 */
  RealTotalCost?: number;
  /** 折扣。 */
  Discount?: number;
  /** 具体折扣详情。 */
  PolicyDetail?: PolicyDetail;
}

/** 磁盘信息 */
declare interface Disk {
  /** 磁盘ID */
  DiskId?: string;
  /** 实例ID */
  InstanceId?: string;
  /** 可用区 */
  Zone?: string;
  /** 磁盘名称 */
  DiskName?: string;
  /** 磁盘类型 */
  DiskUsage?: string;
  /** 磁盘介质类型 */
  DiskType?: string;
  /** 磁盘付费类型 */
  DiskChargeType?: string;
  /** 磁盘大小 */
  DiskSize?: number;
  /** 续费标识 */
  RenewFlag?: string;
  /** 磁盘状态，取值范围：PENDING：创建中。 UNATTACHED：未挂载。ATTACHING：挂载中。ATTACHED：已挂载。DETACHING：卸载中。 SHUTDOWN：已隔离。 CREATED_FAILED：创建失败。TERMINATING：销毁中。 DELETING：删除中。 FREEZING：冻结中。 */
  DiskState?: string;
  /** 磁盘挂载状态 */
  Attached?: boolean;
  /** 是否随实例释放 */
  DeleteWithInstance?: boolean;
  /** 上一次操作 */
  LatestOperation?: string;
  /** 上一次操作状态 */
  LatestOperationState?: string;
  /** 上一次请求ID */
  LatestOperationRequestId?: string;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string | null;
  /** 到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  ExpiredTime?: string | null;
  /** 隔离时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  IsolatedTime?: string | null;
  /** 云硬盘的已有备份点数量。 */
  DiskBackupCount?: number;
  /** 云硬盘的备份点配额数量。 */
  DiskBackupQuota?: number;
}

/** 描述了云硬盘备份点相关信息。 */
declare interface DiskBackup {
  /** 云硬盘备份点ID。 */
  DiskBackupId?: string;
  /** 创建此云硬盘备份点的云硬盘类型。取值：DATA_DISK：数据盘 */
  DiskUsage?: string;
  /** 创建此云硬盘备份点的云硬盘 ID。 */
  DiskId?: string;
  /** 创建此云硬盘备份点的云硬盘大小，单位 GB。 */
  DiskSize?: number;
  /** 云硬盘备份点名称，用户自定义的云硬盘备份点别名。 */
  DiskBackupName?: string;
  /** 云硬盘备份点的状态。取值范围：NORMAL：正常。 CREATING：创建中。ROLLBACKING：回滚中。DELETING：删除中。 */
  DiskBackupState?: string;
  /** 创建或回滚云硬盘备份点进度百分比，成功后此字段取值为 100。 */
  Percent?: number;
  /** 上一次操作 */
  LatestOperation?: string | null;
  /** 上一次操作状态 */
  LatestOperationState?: string | null;
  /** 上一次请求ID */
  LatestOperationRequestId?: string | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string;
}

/** 云硬盘备份点操作限制列表。 */
declare interface DiskBackupDeniedActions {
  /** 云硬盘备份点ID。 */
  DiskBackupId: string;
  /** 操作限制列表。 */
  DeniedActions: DeniedAction[];
}

/** 云硬盘包年包月相关参数设置 */
declare interface DiskChargePrepaid {
  /** 新购周期。 */
  Period: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不自动续费，且不通知默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，云硬盘到期后将按月自动续费。 */
  RenewFlag?: string;
  /** 新购单位. 默认值: "m"。 */
  TimeUnit?: string;
}

/** 云硬盘配置 */
declare interface DiskConfig {
  /** 可用区。 */
  Zone: string;
  /** 云硬盘类型。 */
  DiskType: string;
  /** 云硬盘可售卖状态。 */
  DiskSalesState: string;
  /** 最大云硬盘大小。 */
  MaxDiskSize: number;
  /** 最小云硬盘大小。 */
  MinDiskSize: number;
  /** 云硬盘步长。 */
  DiskStepSize: number;
}

/** 磁盘操作限制列表详细信息 */
declare interface DiskDeniedActions {
  /** 云硬盘ID。 */
  DiskId: string;
  /** 操作限制列表。 */
  DeniedActions: DeniedAction[];
}

/** 云硬盘价格 */
declare interface DiskPrice {
  /** 云硬盘单价。 */
  OriginalDiskPrice: number;
  /** 云硬盘总价。 */
  OriginalPrice: number;
  /** 折扣。 */
  Discount: number;
  /** 折后总价。 */
  DiscountPrice: number;
  /** 计费项目明细列表。 */
  DetailPrices: DetailPrice[];
}

/** 可退还云硬盘详细信息 */
declare interface DiskReturnable {
  /** 云硬盘ID。 */
  DiskId?: string;
  /** 云硬盘是否可退还。 */
  IsReturnable?: boolean;
  /** 云硬盘退还失败错误码。 */
  ReturnFailCode?: number;
  /** 云硬盘退还失败错误信息。 */
  ReturnFailMessage?: string;
}

/** Docker活动信息 */
declare interface DockerActivity {
  /** 活动ID。 */
  ActivityId?: string;
  /** 活动名称。 */
  ActivityName?: string;
  /** 活动状态。取值范围： INIT：表示初始化，活动尚未执行OPERATING：表示活动执行中SUCCESS：表示活动执行成功FAILED：表示活动执行失败 */
  ActivityState?: string;
  /** 活动执行的命令输出，以base64编码。 */
  ActivityCommandOutput?: string;
  /** 容器ID列表。 */
  ContainerIds?: string[];
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 */
  CreatedTime?: string;
  /** 结束时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 */
  EndTime?: string | null;
}

/** Docker容器信息 */
declare interface DockerContainer {
  /** 容器ID */
  ContainerId: string;
  /** 容器名称 */
  ContainerName: string;
  /** 容器镜像地址 */
  ContainerImage: string;
  /** 容器Command */
  Command: string;
  /** 容器状态描述 */
  Status: string;
  /** 容器状态，和docker的容器状态保持一致，当前取值有：created, restarting, running, removing, paused, exited, or dead */
  State: string;
  /** 容器端口主机端口映射列表 */
  PublishPortSet: DockerContainerPublishPort[];
  /** 容器挂载本地卷列表 */
  VolumeSet: DockerContainerVolume[];
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 */
  CreatedTime: string;
}

/** Docker容器创建时的配置 */
declare interface DockerContainerConfiguration {
  /** 容器镜像地址 */
  ContainerImage: string;
  /** 容器名称 */
  ContainerName?: string;
  /** 环境变量列表 */
  Envs?: ContainerEnv[];
  /** 容器端口主机端口映射列表 */
  PublishPorts?: DockerContainerPublishPort[];
  /** 容器加载本地卷列表 */
  Volumes?: DockerContainerVolume[];
  /** 运行的命令 */
  Command?: string;
  /** 容器重启策略 */
  RestartPolicy?: string;
}

/** Docker容器映射的端口 */
declare interface DockerContainerPublishPort {
  /** 主机端口 */
  HostPort: number;
  /** 容器端口 */
  ContainerPort: number;
  /** 对外绑定IP，默认0.0.0.0 */
  Ip?: string | null;
  /** 协议，默认tcp，支持tcp/udp/sctp */
  Protocol?: string | null;
}

/** Docker容器挂载卷 */
declare interface DockerContainerVolume {
  /** 容器路径 */
  ContainerPath: string;
  /** 主机路径 */
  HostPath?: string;
}

/** >描述键值对过滤器，用于条件过滤查询。例如过滤名称等> * 若存在多个`Filter`时，`Filter`间的关系为逻辑与（`AND`）关系。> * 若同一个`Filter`存在多个`Values`，同一`Filter`下`Values`间的关系为逻辑或（`OR`）关系。>> 以DescribeInstances接口的`Filter`为例。若我们需要查询实例名称（`instance-name`）为test ***并且*** 实例内网IP（`private-ip-address`）为10.10.10.10的实例时，可如下实现：```Filters.0.Name=instance-name&Filters.0.Values.0=test&Filters.1.Name=private-ip-address&Filters.1.Values.0=10.10.10.10``` */
declare interface Filter {
  /** 需要过滤的字段。 */
  Name: string;
  /** 字段的过滤值。 */
  Values: string[];
}

/** 描述防火墙规则信息。 */
declare interface FirewallRule {
  /** 协议，取值：TCP，UDP，ICMP，ALL。 */
  Protocol: string;
  /** 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。 */
  Port?: string;
  /** IPv4网段或 IPv4地址(互斥)。示例值：0.0.0.0/0。和Ipv6CidrBlock互斥，两者都不指定时，如果Protocol不是ICMPv6，则取默认值0.0.0.0/0。 */
  CidrBlock?: string;
  /** 取值：ACCEPT，DROP。默认为 ACCEPT。 */
  Action?: string;
  /** 防火墙规则描述。 */
  FirewallRuleDescription?: string;
}

/** 描述防火墙规则详细信息。 */
declare interface FirewallRuleInfo {
  /** 应用类型，取值：自定义，HTTP(80)，HTTPS(443)，Linux登录(22)，Windows登录(3389)，MySQL(3306)，SQL Server(1433)，全部TCP，全部UDP，Ping-ICMP，ALL。 */
  AppType?: string;
  /** 协议，取值：TCP，UDP，ICMP，ALL。 */
  Protocol?: string;
  /** 端口，取值：ALL，单独的端口，逗号分隔的离散端口，减号分隔的端口范围。 */
  Port?: string;
  /** IPv4网段或 IPv4地址(互斥)。示例值：0.0.0.0/0。和Ipv6CidrBlock互斥，两者都不指定时，如果Protocol不是ICMPv6，则取默认值0.0.0.0/0。 */
  CidrBlock?: string;
  /** 取值：ACCEPT，DROP。默认为 ACCEPT。 */
  Action?: string;
  /** 防火墙规则描述。 */
  FirewallRuleDescription?: string;
}

/** 防火墙模板信息。 */
declare interface FirewallTemplate {
  /** 模板Id。 */
  TemplateId?: string;
  /** 模板名称。 */
  TemplateName?: string;
  /** 模板类型。 */
  TemplateType?: string;
  /** 模板状态。 */
  TemplateState?: string;
  /** 模板创建时间。 */
  CreatedTime?: string;
}

/** 防火墙模板应用记录。 */
declare interface FirewallTemplateApplyRecord {
  /** 任务ID。 */
  TaskId?: string;
  /** 应用模板的时间。 */
  ApplyTime?: string;
  /** 模板规则列表。 */
  TemplateRuleSet?: FirewallTemplateRule[];
  /** 应用模板的执行状态。- SUCCESS：成功- FAILED：失败 */
  ApplyState?: string;
  /** 应用成功的实例数量。 */
  SuccessCount?: number;
  /** 应用失败的实例数量。 */
  FailedCount?: number;
  /** 正在应用中的实例数量。 */
  RunningCount?: number;
  /** 应用模板的执行细节。 */
  ApplyDetailSet?: FirewallTemplateApplyRecordDetail[];
}

/** 防火墙模板应用记录详情。 */
declare interface FirewallTemplateApplyRecordDetail {
  /** 实例标识信息。 */
  Instance?: InstanceIdentifier;
  /** 防火墙模板应用状态。- SUCCESS：成功- FAILED：失败 */
  ApplyState?: string;
  /** 防火墙模板应用错误信息。 */
  ErrorMessage?: string;
}

/** 防火墙模板规则信息 */
declare interface FirewallTemplateRule {
  /** 防火墙模板规则ID。 */
  TemplateRuleId?: string;
  /** 防火墙规则。 */
  FirewallRule?: FirewallRule;
}

/** 防火墙模板规则信息 */
declare interface FirewallTemplateRuleInfo {
  /** 防火墙模板规则ID。 */
  TemplateRuleId?: string;
  /** 防火墙规则信息。 */
  FirewallRuleInfo?: FirewallRuleInfo;
}

/** 描述通用资源配额信息。 */
declare interface GeneralResourceQuota {
  /** 资源名称。 */
  ResourceName?: string;
  /** 资源当前可用数量。 */
  ResourceQuotaAvailable?: number;
  /** 资源总数量。 */
  ResourceQuotaTotal?: number;
}

/** 描述了实例信息。 */
declare interface Instance {
  /** 实例 ID。 */
  InstanceId?: string;
  /** 套餐 ID。 */
  BundleId?: string;
  /** 镜像 ID。 */
  BlueprintId?: string;
  /** 实例的 CPU 核数，单位：核。 */
  CPU?: number;
  /** 实例内存容量，单位：GB 。 */
  Memory?: number;
  /** 实例名称。 */
  InstanceName?: string;
  /** 实例计费模式。取值范围： PREPAID：表示预付费，即包年包月。 */
  InstanceChargeType?: string;
  /** 实例系统盘信息。 */
  SystemDisk?: SystemDisk;
  /** 实例主网卡的内网 IP。 注意：此字段可能返回 空，表示取不到有效值。 */
  PrivateAddresses?: string[];
  /** 实例主网卡的公网 IP。 注意：此字段可能返回 空，表示取不到有效值。 */
  PublicAddresses?: string[];
  /** 实例带宽信息。 */
  InternetAccessible?: InternetAccessible;
  /** 自动续费标识。取值范围： NOTIFY_AND_MANUAL_RENEW：表示通知即将过期，但不自动续费 NOTIFY_AND_AUTO_RENEW：表示通知即将过期，而且自动续费 。 */
  RenewFlag?: string;
  /** 实例登录设置。 */
  LoginSettings?: LoginSettings;
  /** 实例状态。取值范围： PENDING：表示创建中LAUNCH_FAILED：表示创建失败RUNNING：表示运行中STOPPED：表示关机STARTING：表示开机中STOPPING：表示关机中REBOOTING：表示重启中SHUTDOWN：表示停止待销毁TERMINATING：表示销毁中DELETING：表示删除中FREEZING：表示冻结中ENTER_RESCUE_MODE：表示进入救援模式中RESCUE_MODE：表示救援模式EXIT_RESCUE_MODE：表示退出救援模式中 */
  InstanceState?: string;
  /** 实例全局唯一 ID。 */
  Uuid?: string;
  /** 实例的最新操作。例：StopInstances、ResetInstance。注意：此字段可能返回 空值，表示取不到有效值。 */
  LatestOperation?: string;
  /** 实例的最新操作状态。取值范围： SUCCESS：表示操作成功 OPERATING：表示操作执行中 FAILED：表示操作失败 注意：此字段可能返回 空值，表示取不到有效值。 */
  LatestOperationState?: string;
  /** 实例最新操作的唯一请求 ID。 注意：此字段可能返回 空值，表示取不到有效值。 */
  LatestOperationRequestId?: string;
  /** 实例最新操作的开始时间。 */
  LatestOperationStartedTime?: string | null;
  /** 隔离时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  IsolatedTime?: string | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  CreatedTime?: string | null;
  /** 到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ 。 */
  ExpiredTime?: string | null;
  /** 操作系统平台类型，如 LINUX_UNIX、WINDOWS。 */
  PlatformType?: string;
  /** 操作系统平台。 */
  Platform?: string;
  /** 操作系统名称。 */
  OsName?: string;
  /** 可用区。 */
  Zone?: string;
  /** 实例绑定的标签列表。 */
  Tags?: Tag[];
  /** 实例封禁状态。取值范围：NORMAL实例正常。NETWORK_RESTRICT：网络封禁。 */
  InstanceRestrictState?: string;
  /** 创建实例后自动执行TAT命令的调用ID。 */
  InitInvocationId?: string;
  /** 实例违规详情。 */
  InstanceViolationDetail?: InstanceViolationDetail | null;
}

/** 描述了实例的计费模式 */
declare interface InstanceChargePrepaid {
  /** 购买实例的时长，单位：月。取值范围：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60。 */
  Period: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不自动续费，且不通知默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag?: string;
}

/** 实例操作限制列表。 */
declare interface InstanceDeniedActions {
  /** 实例 ID。 */
  InstanceId?: string | null;
  /** 操作限制列表。 */
  DeniedActions?: DeniedAction[];
}

/** 实例标识信息。 */
declare interface InstanceIdentifier {
  /** 实例ID。 */
  InstanceId: string;
  /** 实例地域。 */
  Region: string;
}

/** 关于Lighthouse Instance实例的价格信息 */
declare interface InstancePrice {
  /** 套餐单价原价。 */
  OriginalBundlePrice?: number;
  /** 原价。 */
  OriginalPrice?: number;
  /** 折扣。 */
  Discount?: number;
  /** 折后价。 */
  DiscountPrice?: number;
  /** 价格货币单位。取值范围CNY:人民币。USD:美元。 */
  Currency?: string | null;
}

/** 实例价格详细信息 */
declare interface InstancePriceDetail {
  /** 实例ID。 */
  InstanceId?: string | null;
  /** 询价信息。 */
  InstancePrice?: InstancePrice | null;
  /** 折扣梯度详情，每个梯度包含的信息有：时长，折扣数，总价，折扣价，折扣详情（用户折扣、官网折扣、最终折扣）。 */
  DiscountDetail?: DiscountDetail[] | null;
}

/** 实例可退还信息。 */
declare interface InstanceReturnable {
  /** 实例 ID。 */
  InstanceId?: string;
  /** 实例是否可退还。 */
  IsReturnable?: boolean;
  /** 实例退还失败错误码。 */
  ReturnFailCode?: number;
  /** 实例退还失败错误信息。 */
  ReturnFailMessage?: string;
}

/** 实例流量包详情 */
declare interface InstanceTrafficPackage {
  /** 实例ID。 */
  InstanceId?: string;
  /** 流量包详情列表。 */
  TrafficPackageSet?: TrafficPackage[];
}

/** 实例违规详情。 */
declare interface InstanceViolationDetail {
  /** 来源：RESTRICT：封禁、FREEZW：冻结 */
  Source?: string | null;
  /** 是否允许自助解封：1是，2否 */
  State?: string | null;
  /** 违规类型 */
  Reason?: string | null;
  /** 违规内容（URL、关联域名） */
  Content?: string | null;
}

/** 描述了启动配置创建实例的公网可访问性，声明了实例的公网使用计费模式，最大带宽等。 */
declare interface InternetAccessible {
  /** 网络计费类型，取值范围：按流量包付费：TRAFFIC_POSTPAID_BY_HOUR按带宽付费： BANDWIDTH_POSTPAID_BY_HOUR */
  InternetChargeType?: string;
  /** 公网出带宽上限，单位：Mbps。 */
  InternetMaxBandwidthOut?: number;
  /** 是否分配公网 IP。 */
  PublicIpAssigned?: boolean;
}

/** 描述密钥对信息。 */
declare interface KeyPair {
  /** 密钥对 ID ，是密钥对的唯一标识。 */
  KeyId?: string;
  /** 密钥对名称。 */
  KeyName?: string;
  /** 密钥对的纯文本公钥。 */
  PublicKey?: string;
  /** 密钥对关联的实例 ID 列表。 */
  AssociatedInstanceIds?: string[] | null;
  /** 创建时间。按照 ISO8601 标准表示，并且使用 UTC 时间。格式为：YYYY-MM-DDThh:mm:ssZ */
  CreatedTime?: string | null;
  /** 密钥对私钥。 */
  PrivateKey?: string | null;
}

/** 实例密码登录配置信息。 */
declare interface LoginConfiguration {
  /** "YES"代表选择自动生成密码，这时不指定Password字段。"NO"代表选择自定义密码，这时要指定Password字段。 */
  AutoGeneratePassword?: string;
  /** 实例登录密码。具体按照操作系统的复杂度要求。 `LINUX_UNIX` 实例密码必须 8-30 位，推荐使用 12 位以上密码，不能包含空格，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类：小写字母：[a-z]大写字母：[A-Z]数字：0-9特殊字符： ()\`\~!@#$%^&\*-+=\_|{}[]:;' <>,.?/ `WINDOWS` 实例密码必须 12-30 位，不能包含空格，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符：小写字母：[a-z]大写字母：[A-Z]数字：0-9特殊字符：()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/ */
  Password?: string;
  /** 密钥ID列表，最多同时指定5个密钥。关联密钥后，就可以通过对应的私钥来访问实例。密钥与密码不能同时指定，同时WINDOWS操作系统不支持指定密钥。密钥ID列表可以通过[DescribeKeyPairs](https://cloud.tencent.com/document/product/1207/55540)接口获取。 */
  KeyIds?: string[];
}

/** 描述了实例登录相关配置与信息。 */
declare interface LoginSettings {
  /** 密钥 ID 列表。关联密钥后，就可以通过对应的私钥来访问实例。注意：此字段可能返回 []，表示取不到有效值。 */
  KeyIds?: string[];
}

/** 描述了实例可变更的套餐。 */
declare interface ModifyBundle {
  /** 更改实例套餐后需要补的差价。 */
  ModifyPrice?: Price;
  /** 变更套餐状态。取值：SOLD_OUT：套餐售罄AVAILABLE：支持套餐变更UNAVAILABLE：暂不支持套餐变更 */
  ModifyBundleState?: string;
  /** 套餐信息。 */
  Bundle?: Bundle;
  /** 不支持套餐变更原因信息。变更套餐状态为"AVAILABLE"时, 该信息为空 */
  NotSupportModifyMessage?: string | null;
}

/** 折扣详情信息。 */
declare interface PolicyDetail {
  /** 用户折扣。 */
  UserDiscount?: number;
  /** 公共折扣。 */
  CommonDiscount?: number;
  /** 最终折扣。 */
  FinalDiscount?: number;
  /** 活动折扣。取值为null，表示无有效值，即没有折扣。 */
  ActivityDiscount?: number | null;
  /** 折扣类型。user：用户折扣; common：官网折扣; activity：活动折扣。 取值为null，表示无有效值，即没有折扣。 */
  DiscountType?: string | null;
}

/** 价格信息 */
declare interface Price {
  /** 实例价格。 */
  InstancePrice?: InstancePrice;
}

/** 描述地域信息。 */
declare interface RegionInfo {
  /** 地域名称，例如，ap-guangzhou。 */
  Region: string;
  /** 地域描述，例如，华南地区(广州)。 */
  RegionName: string;
  /** 地域是否可用状态，取值仅为AVAILABLE。 */
  RegionState: string;
  /** 是否中国大陆地域 */
  IsChinaMainland: boolean;
}

/** 续费云硬盘包年包月相关参数设置 */
declare interface RenewDiskChargePrepaid {
  /** 续费周期。 */
  Period?: number;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费DISABLE_NOTIFY_AND_MANUAL_RENEW：不自动续费，且不通知默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，云硬盘到期后将按月自动续费。 */
  RenewFlag?: string;
  /** 周期单位。取值范围：“m”(月)。默认值: "m"。 */
  TimeUnit?: string;
  /** 当前实例到期时间。如“2018-01-01 00:00:00”。指定该参数即可对齐云硬盘所挂载的实例到期时间。该参数与Period必须指定其一，且不支持同时指定。 */
  CurInstanceDeadline?: string;
}

/** 描述了镜像重置信息 */
declare interface ResetInstanceBlueprint {
  /** 镜像详细信息 */
  BlueprintInfo?: Blueprint;
  /** 实例镜像是否可重置为目标镜像 */
  IsResettable?: boolean;
  /** 不可重置信息.当镜像可重置时为"" */
  NonResettableMessage?: string;
}

/** 使用场景信息 */
declare interface Scene {
  /** 使用场景Id */
  SceneId?: string;
  /** 使用场景展示名称 */
  DisplayName?: string;
  /** 使用场景描述 */
  Description?: string;
}

/** 使用场景详细信息 */
declare interface SceneInfo {
  /** 使用场景Id。 */
  SceneId?: string;
  /** 使用场景展示名称。 */
  DisplayName?: string;
  /** 使用场景描述信息。 */
  Description?: string;
}

/** 描述了快照相关信息。 */
declare interface Snapshot {
  /** 快照 ID。 */
  SnapshotId?: string;
  /** 创建此快照的磁盘类型。取值：SYSTEM_DISK：系统盘 */
  DiskUsage?: string;
  /** 创建此快照的磁盘 ID。 */
  DiskId?: string;
  /** 创建此快照的磁盘大小，单位 GB。 */
  DiskSize?: number;
  /** 快照名称，用户自定义的快照别名。 */
  SnapshotName?: string;
  /** 快照的状态。取值范围：NORMAL：正常 CREATING：创建中ROLLBACKING：回滚中。 */
  SnapshotState?: string;
  /** 创建或回滚快照进度百分比，成功后此字段取值为 100。 */
  Percent?: number;
  /** 快照的最新操作，只有创建、回滚快照时记录。取值如 CreateInstanceSnapshot，RollbackInstanceSnapshot。 */
  LatestOperation?: string | null;
  /** 快照的最新操作状态，只有创建、回滚快照时记录。取值范围：SUCCESS：表示操作成功OPERATING：表示操作执行中FAILED：表示操作失败 */
  LatestOperationState?: string | null;
  /** 快照最新操作的唯一请求 ID，只有创建、回滚快照时记录。 */
  LatestOperationRequestId?: string | null;
  /** 快照的创建时间。 */
  CreatedTime?: string | null;
}

/** 快照操作限制列表。 */
declare interface SnapshotDeniedActions {
  /** 快照 ID。 */
  SnapshotId?: string;
  /** 操作限制列表。 */
  DeniedActions?: DeniedAction[];
}

/** 描述镜像软件信息。 */
declare interface Software {
  /** 软件名称。 */
  Name?: string;
  /** 软件版本。 */
  Version?: string;
  /** 软件图片 URL。 */
  ImageUrl?: string;
  /** 软件安装目录。 */
  InstallDir?: string;
  /** 软件详情列表。 */
  DetailSet?: SoftwareDetail[];
}

/** 描述镜像软件详细信息。 */
declare interface SoftwareDetail {
  /** 软件的属性标识 */
  Key?: string;
  /** 软件的属性标识描述 */
  Title?: string;
  /** 软件的属性值 */
  Value?: string;
}

/** 描述了操作系统所在块设备即系统盘的信息。 */
declare interface SystemDisk {
  /** 系统盘类型。取值范围： LOCAL_BASIC：本地硬盘 LOCAL_SSD：本地 SSD 硬盘 CLOUD_BASIC：普通云硬盘 CLOUD_SSD：SSD 云硬盘 CLOUD_PREMIUM：高性能云硬盘 */
  DiskType?: string;
  /** 系统盘大小，单位：GB。 */
  DiskSize?: number;
  /** 系统盘ID。 */
  DiskId?: string | null;
}

/** 标签 */
declare interface Tag {
  /** 标签键 */
  Key: string;
  /** 标签值 */
  Value: string;
}

/** 总计价格信息 */
declare interface TotalPrice {
  /** 原始总计价格。 */
  OriginalPrice?: number | null;
  /** 折扣总计价格。 */
  DiscountPrice?: number | null;
}

/** 流量包详情 */
declare interface TrafficPackage {
  /** 流量包ID。 */
  TrafficPackageId?: string;
  /** 流量包生效周期内已使用流量，单位字节。 */
  TrafficUsed?: number;
  /** 流量包生效周期内的总流量，单位字节。 */
  TrafficPackageTotal?: number;
  /** 流量包生效周期内的剩余流量，单位字节。 */
  TrafficPackageRemaining?: number;
  /** 流量包生效周期内超出流量包额度的流量，单位字节。 */
  TrafficOverflow?: number;
  /** 流量包生效周期开始时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  StartTime?: string | null;
  /** 流量包生效周期结束时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  EndTime?: string | null;
  /** 流量包到期时间。按照 ISO8601 标准表示，并且使用 UTC 时间。 格式为： YYYY-MM-DDThh:mm:ssZ。 */
  Deadline?: string | null;
  /** 流量包状态：NETWORK_NORMAL：正常OVERDUE_NETWORK_DISABLED：欠费断网 */
  Status?: string;
}

/** 可用区详细信息 */
declare interface ZoneInfo {
  /** 可用区 */
  Zone: string;
  /** 可用区中文名称 */
  ZoneName: string;
  /** 实例购买页可用区展示标签 */
  InstanceDisplayLabel: string;
}

declare interface ApplyDiskBackupRequest {
  /** 云硬盘ID，可通过[DescribeDisks](https://cloud.tencent.com/document/api/1207/66093)接口查询。 */
  DiskId: string;
  /** 云硬盘备份点ID，可通过[DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379)接口查询。 */
  DiskBackupId: string;
}

declare interface ApplyDiskBackupResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyFirewallTemplateRequest {
  /** 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。 */
  TemplateId: string;
  /** 应用防火墙模板的实例列表。列表长度最大值是100。 */
  ApplyInstances: InstanceIdentifier[];
}

declare interface ApplyFirewallTemplateResponse {
  /** 任务ID。 */
  TaskId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ApplyInstanceSnapshotRequest {
  /** 实例 ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/product/1207/47573) 接口返回值中的 InstanceId	获取。 */
  InstanceId: string;
  /** 快照 ID。可通过 [DescribeSnapshots](https://cloud.tencent.com/document/product/1207/54388) 接口返回值中的 SnapshotId 获取。 */
  SnapshotId: string;
}

declare interface ApplyInstanceSnapshotResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AssociateInstancesKeyPairsRequest {
  /** 密钥对 ID 列表，每次请求批量密钥对的上限为 100。可通过[DescribeKeyPairs](https://cloud.tencent.com/document/api/1207/55540)接口返回值中的KeyId获取。 */
  KeyIds: string[];
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds: string[];
}

declare interface AssociateInstancesKeyPairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachCcnRequest {
  /** 云联网实例ID。可通过[DescribeCcns](https://cloud.tencent.com/document/product/215/19199)接口返回值中的CcnId获取。 */
  CcnId: string;
}

declare interface AttachCcnResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface AttachDisksRequest {
  /** 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。 */
  DiskIds: string[];
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 自动续费标识。取值范围：NOTIFY_AND_AUTO_RENEW：通知过期且自动续费。 NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费，用户需要手动续费。 DISABLE_NOTIFY_AND_MANUAL_RENEW：不自动续费，且不通知。默认取值：NOTIFY_AND_MANUAL_RENEW。若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，云盘到期后将按月自动续费。 */
  RenewFlag?: string;
}

declare interface AttachDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CancelShareBlueprintAcrossAccountsRequest {
  /** 镜像ID, 可以通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回的BlueprintId获取。 */
  BlueprintId: string;
  /** 接收共享镜像的账号ID列表。账号ID不同于QQ号，查询用户账号ID请查看账号信息中的账号ID栏。账号个数取值最大为10。 */
  AccountIds: string[];
}

declare interface CancelShareBlueprintAcrossAccountsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateBlueprintRequest {
  /** 镜像名称。最大长度60。 */
  BlueprintName: string;
  /** 镜像描述。最大长度60。 */
  Description?: string;
  /** 需要制作镜像的实例ID。 */
  InstanceId?: string;
  /** 是否执行强制关机以制作镜像。取值范围：True：表示关机之后制作镜像False：表示开机状态制作镜像默认取值：True开机状态制作镜像，可能导致部分数据未备份，影响数据安全。 */
  ForcePowerOff?: boolean;
}

declare interface CreateBlueprintResponse {
  /** 自定义镜像ID。 */
  BlueprintId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDiskBackupRequest {
  /** 云硬盘ID，可通过 [DescribeDisks](https://cloud.tencent.com/document/api/1207/66093) 接口返回值中的 DiskId 获取。 */
  DiskId: string;
  /** 云硬盘备份点名称，最大长度为 90 。 */
  DiskBackupName?: string;
}

declare interface CreateDiskBackupResponse {
  /** 备份点ID。 */
  DiskBackupId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateDisksRequest {
  /** 可用区。可通过[DescribeZones](https://cloud.tencent.com/document/product/1207/57513)返回值中的Zone获取。 */
  Zone: string;
  /** 云硬盘大小, 单位: GB。 */
  DiskSize: number;
  /** 云硬盘介质类型。取值: "CLOUD_PREMIUM"(高性能云盘), "CLOUD_SSD"(SSD云硬盘)。 */
  DiskType: string;
  /** 云硬盘包年包月相关参数设置。 */
  DiskChargePrepaid: DiskChargePrepaid;
  /** 云硬盘名称。最大长度60。 */
  DiskName?: string;
  /** 云硬盘个数。取值范围: [1, 30]。默认值: 1。 */
  DiskCount?: number;
  /** 指定云硬盘备份点配额，取值范围: [0, 500]。不传时默认为不带备份点配额。 */
  DiskBackupQuota?: number;
  /** 是否自动使用代金券。默认不使用。 */
  AutoVoucher?: boolean;
  /** 自动挂载并初始化数据盘。 */
  AutoMountConfiguration?: AutoMountConfiguration;
}

declare interface CreateDisksResponse {
  /** 当通过本接口来创建云硬盘时会返回该参数，表示一个或多个云硬盘ID。返回云硬盘ID列表并不代表云硬盘创建成功。可根据 [DescribeDisks](https://cloud.tencent.com/document/product/1207/66093) 接口查询返回的DiskSet中对应云硬盘的ID的状态来判断创建是否完成；如果云硬盘状态由“PENDING”变为“UNATTACHED”或“ATTACHED”，则为创建成功。 */
  DiskIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFirewallRulesRequest {
  /** 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/1207/47573) 接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 防火墙规则列表。 */
  FirewallRules: FirewallRule[];
  /** 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。 */
  FirewallVersion?: number;
}

declare interface CreateFirewallRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFirewallTemplateRequest {
  /** 模板名称。 */
  TemplateName: string;
  /** 防火墙规则列表。 */
  TemplateRules?: FirewallRule[];
}

declare interface CreateFirewallTemplateResponse {
  /** 防火墙模板ID。 */
  TemplateId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateFirewallTemplateRulesRequest {
  /** 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。 */
  TemplateId: string;
  /** 防火墙模板规则列表。 */
  TemplateRules: FirewallRule[];
}

declare interface CreateFirewallTemplateRulesResponse {
  /** 规则ID列表。 */
  TemplateRuleIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstanceSnapshotRequest {
  /** 需要创建快照的实例 ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/product/1207/47573) 接口返回值中的 InstanceId	获取。 */
  InstanceId: string;
  /** 快照名称，最长为 60 个字符。 */
  SnapshotName?: string;
}

declare interface CreateInstanceSnapshotResponse {
  /** 快照 ID。 */
  SnapshotId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateInstancesRequest {
  /** 套餐ID。可以通过调用 [DescribeBundles](https://cloud.tencent.com/document/api/1207/47575) 接口获取。 */
  BundleId: string;
  /** 镜像ID。可以通过调用 [DescribeBlueprints](https://cloud.tencent.com/document/api/1207/47689) 接口获取。 */
  BlueprintId: string;
  /** 当前实例仅支持预付费模式，即包年包月相关参数设置，单位（月）。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。该参数必传。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
  /** 实例显示名称。 */
  InstanceName?: string;
  /** 购买实例数量。包年包月实例取值范围：[1，30]。默认取值：1。指定购买实例的数量不能超过用户所能购买的剩余配额数量 */
  InstanceCount?: number;
  /** 可用区列表。不填此参数，表示为随机可用区。 */
  Zones?: string[];
  /** 是否只预检此次请求。true：发送检查请求，不会创建实例。检查项包括是否填写了必需参数，请求格式，业务限制和库存。如果检查不通过，则返回对应错误码；如果检查通过，则返回RequestId.false（默认）：发送正常请求，通过检查后直接创建实例 */
  DryRun?: boolean;
  /** 用于保证请求幂等性的字符串。该字符串由客户生成，需保证不同请求之间唯一，最大值不超过64个ASCII字符。若不指定该参数，则无法保证请求的幂等性。 */
  ClientToken?: string;
  /** 实例登录密码信息配置。默认缺失情况下代表用户选择实例创建后设置登录密码。 */
  LoginConfiguration?: LoginConfiguration;
  /** 要创建的容器配置列表。 */
  Containers?: DockerContainerConfiguration[];
  /** 是否自动使用代金券。默认不使用。 */
  AutoVoucher?: boolean;
  /** 防火墙模板ID。若不指定该参数，则使用默认防火墙策略。 */
  FirewallTemplateId?: string;
  /** 标签键和标签值。如果指定多个标签，则会为指定资源同时创建并绑定该多个标签。同一个资源上的同一个标签键只能对应一个标签值。如果您尝试添加已有标签键，则对应的标签值会更新为新值。如果标签不存在会为您自动创建标签。数组最多支持10个元素。 */
  Tags?: Tag[];
  /** 创建实例后自动执行的命令。 */
  InitCommand?: Command;
}

declare interface CreateInstancesResponse {
  /** 当通过本接口来创建实例时会返回该参数，表示一个或多个实例ID。返回实例ID列表并不代表实例创建成功。可根据 DescribeInstances 接口查询返回的InstancesSet中对应实例的ID的状态来判断创建是否完成；如果实例状态由“启动中”变为“运行中”，则为创建成功。 */
  InstanceIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface CreateKeyPairRequest {
  /** 密钥对名称，可由数字，字母和下划线组成，长度不超过 25 个字符。 */
  KeyName: string;
}

declare interface CreateKeyPairResponse {
  /** 密钥对信息。 */
  KeyPair?: KeyPair;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteBlueprintsRequest {
  /** 镜像ID列表。镜像ID，可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。 */
  BlueprintIds: string[];
}

declare interface DeleteBlueprintsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteDiskBackupsRequest {
  /** 云硬盘备份点ID列表，可通过 [DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379)接口查询。 */
  DiskBackupIds: string[];
}

declare interface DeleteDiskBackupsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFirewallRulesRequest {
  /** 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/1207/47573) 接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 防火墙规则列表。 */
  FirewallRules: FirewallRule[];
  /** 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。 */
  FirewallVersion?: number;
}

declare interface DeleteFirewallRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFirewallTemplateRequest {
  /** 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。 */
  TemplateId: string;
}

declare interface DeleteFirewallTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteFirewallTemplateRulesRequest {
  /** 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。 */
  TemplateId: string;
  /** 防火墙模板规则ID列表。可通过[DescribeFirewallTemplateRules](https://cloud.tencent.com/document/product/1207/96875)接口返回值字段TemplateRuleSet获取。 */
  TemplateRuleIds: string[];
}

declare interface DeleteFirewallTemplateRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteKeyPairsRequest {
  /** 密钥对 ID 列表，每次请求批量密钥对的上限为 10。可通过[DescribeKeyPairs](https://cloud.tencent.com/document/api/1207/55540)接口返回值中的KeyId获取。 */
  KeyIds: string[];
}

declare interface DeleteKeyPairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DeleteSnapshotsRequest {
  /** 要删除的快照 ID 列表，可通过 DescribeSnapshots查询。 */
  SnapshotIds: string[];
}

declare interface DeleteSnapshotsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeAllScenesRequest {
  /** 使用场景ID列表。可通过[DescribeAllScenes](https://cloud.tencent.com/document/product/1207/83513)接口返回值中的SceneId获取。 */
  SceneIds?: string[];
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeAllScenesResponse {
  /** 使用场景详细信息列表。 */
  SceneInfoSet?: SceneInfo[];
  /** 使用场景详细信息总数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBlueprintInstancesRequest {
  /** 实例 ID 列表。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 当前最多支持1个。 */
  InstanceIds: string[];
}

declare interface DescribeBlueprintInstancesResponse {
  /** 符合条件的镜像实例数量。 */
  TotalCount?: number;
  /** 镜像实例列表信息。 */
  BlueprintInstanceSet?: BlueprintInstance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBlueprintsRequest {
  /** 镜像 ID 列表。 */
  BlueprintIds?: string[];
  /** 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Limit?: number;
  /** 过滤器列表。blueprint-id按照【镜像 ID】进行过滤。类型：String必选：否blueprint-type按照【镜像类型】进行过滤。取值：APP_OS（应用镜像 ）；PURE_OS（系统镜像）；DOCKER（Docker容器镜像）；PRIVATE（自定义镜像）；SHARED（共享镜像）。类型：String必选：否platform-type按照【镜像平台类型】进行过滤。取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）。类型：String必选：否blueprint-name按照【镜像名称】进行过滤。类型：String必选：否blueprint-state按照【镜像状态】进行过滤。类型：String必选：否scene-id按照【使用场景Id】进行过滤。类型：String必选：否每次请求的 Filters 的上限为 10，Filter.Values 的上限为 100。参数不支持同时指定 BlueprintIds 和 Filters 。 */
  Filters?: Filter[];
}

declare interface DescribeBlueprintsResponse {
  /** 符合条件的镜像数量。 */
  TotalCount?: number;
  /** 镜像详细信息列表。 */
  BlueprintSet?: Blueprint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBundleDiscountRequest {
  /** 套餐 ID。可通过[DescribeBundles](https://cloud.tencent.com/document/product/1207/47575)接口返回值中的BundleId获取。 */
  BundleId: string;
}

declare interface DescribeBundleDiscountResponse {
  /** 币种：CNY人民币，USD 美元。 */
  Currency?: string;
  /** 折扣梯度详情，每个梯度包含的信息有：时长，折扣数，总价，折扣价，折扣详情（用户折扣、官网折扣、最终折扣）。 */
  DiscountDetail?: DiscountDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeBundlesRequest {
  /** 套餐 ID 列表。可通过[DescribeBundles](https://cloud.tencent.com/document/product/1207/47575)接口返回值中的BundleId获取。 */
  BundleIds?: string[];
  /** 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Limit?: number;
  /** 过滤器列表。bundle-id按照【套餐 ID】进行过滤。类型：String必选：否support-platform-type按照【系统类型】进行过滤。取值： LINUX_UNIX(Linux/Unix系统) ;WINDOWS(Windows 系统)类型：String必选：否bundle-type按照 【套餐类型进行过滤】。取值：GENERAL_BUNDLE (通用型套餐); STORAGE_BUNDLE(存储型套餐);ENTERPRISE_BUNDLE( 企业型套餐);EXCLUSIVE_BUNDLE(专属型套餐);BEFAST_BUNDLE(蜂驰型套餐);STARTER_BUNDLE(入门型套餐);CAREFREE_BUNDLE(无忧型套餐);类型：String必选：否bundle-state按照【套餐状态】进行过滤。取值: ONLINE(在线); OFFLINE(下线);类型：String必选：否每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BundleIds 和 Filters。 */
  Filters?: Filter[];
  /** 可用区列表。默认为全部可用区。 */
  Zones?: string[];
}

declare interface DescribeBundlesResponse {
  /** 套餐详细信息列表。 */
  BundleSet?: Bundle[];
  /** 符合要求的套餐总数，用于分页展示。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeCcnAttachedInstancesRequest {
}

declare interface DescribeCcnAttachedInstancesResponse {
  /** 云联网关联的实例列表。 */
  CcnAttachedInstanceSet: CcnAttachedInstance[] | null;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiskBackupsDeniedActionsRequest {
  /** 云硬盘备份点 ID 列表, 可通过DescribeDiskBackups接口查询。 */
  DiskBackupIds: string[];
}

declare interface DescribeDiskBackupsDeniedActionsResponse {
  /** 云硬盘备份点操作限制列表详细信息。 */
  DiskBackupDeniedActionSet?: DiskBackupDeniedActions[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiskBackupsRequest {
  /** 查询的云硬盘备份点ID列表。最大支持 100 个。参数不支持同时指定 DiskBackupIds 和 Filters。 */
  DiskBackupIds?: string[];
  /** 过滤器列表。disk-backup-id按照【云硬盘备份点 ID】进行过滤。类型：String必选：否disk-id按照【云硬盘 ID】进行过滤。类型：String必选：否disk-backup-state按照【云硬盘备份点状态】进行过滤。类型：String必选：否取值：参考数据结构 DescribeSnapshots 下的DiskBackupState取值。disk-usage按照【云硬盘类型】进行过滤。类型：String必选：否取值：SYSTEM_DISK或DATA_DISK每次请求的 Filters 的上限为 10，Filter.Values 的上限为5。参数不支持同时指定DiskBackupIds 和 Filters。 */
  Filters?: Filter[];
  /** 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeDiskBackupsResponse {
  /** 云硬盘备份点的数量。 */
  TotalCount?: number;
  /** 云硬盘备份点信息列表。 */
  DiskBackupSet?: DiskBackup[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiskConfigsRequest {
  /** 过滤器列表。zone按照【可用区】进行过滤。类型：String必选：否 */
  Filters?: Filter[];
}

declare interface DescribeDiskConfigsResponse {
  /** 云硬盘配置列表。 */
  DiskConfigSet: DiskConfig[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDiskDiscountRequest {
  /** 云硬盘类型, 取值范围: CLOUD_PREMIUM: 高性能云硬盘，CLOUD_SSD: SSD云硬盘 */
  DiskType: string;
  /** 云硬盘大小, 单位: GB。 */
  DiskSize: number;
  /** 指定云硬盘备份点配额，不传时默认为不带备份点配额。目前只支持不带或设置1个云硬盘备份点配额。 */
  DiskBackupQuota?: number;
}

declare interface DescribeDiskDiscountResponse {
  /** 币种：CNY人民币，USD 美元。 */
  Currency?: string;
  /** 折扣梯度详情，每个梯度包含的信息有：时长，折扣数，总价，折扣价，折扣详情（用户折扣、官网折扣、最终折扣）。 */
  DiscountDetail?: DiscountDetail[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisksDeniedActionsRequest {
  /** 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。 */
  DiskIds: string[];
}

declare interface DescribeDisksDeniedActionsResponse {
  /** 云硬盘操作限制列表详细信息。 */
  DiskDeniedActionSet?: DiskDeniedActions[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisksRequest {
  /** 云硬盘ID列表。每次批量请求云硬盘的上限为 100。 */
  DiskIds?: string[];
  /** 过滤器列表。disk-id按照【云硬盘 ID】进行过滤。类型：String必选：否instance-id按照【实例ID】进行过滤。类型：String必选：否disk-name按照【云硬盘名称】进行过滤。类型：String必选：否zone按照【可用区】进行过滤。类型：String必选：否disk-usage按照【云硬盘类型】进行过滤。类型：String必选：否取值：SYSTEM_DISK或DATA_DISKdisk-state按照【云硬盘状态】进行过滤。类型：String必选：否取值：参考数据结构[Disk](https://cloud.tencent.com/document/api/1207/47576)中DiskState取值。每次请求的 Filters 的上限为 10，Filter.Values 的上限为 100。参数不支持同时指定 DiskIds 和 Filters。 */
  Filters?: Filter[];
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
  /** 云硬盘列表排序的依据字段。取值范围："CREATED_TIME"：依据云硬盘的创建时间排序。 "EXPIRED_TIME"：依据云硬盘的到期时间排序。"DISK_SIZE"：依据云硬盘的大小排序。默认按云硬盘创建时间排序。 */
  OrderField?: string;
  /** 输出云硬盘列表的排列顺序。取值范围："ASC"：升序排列。 "DESC"：降序排列。默认按降序排列。 */
  Order?: string;
}

declare interface DescribeDisksResponse {
  /** 云硬盘信息列表。 */
  DiskSet?: Disk[];
  /** 符合条件的云硬盘信息数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDisksReturnableRequest {
  /** 云硬盘ID列表。每次批量请求云硬盘的上限为 10。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。 */
  DiskIds?: string[];
  /** 返回数量，默认为20，最大值为100。 */
  Limit?: number;
  /** 偏移量，默认为0。 */
  Offset?: number;
}

declare interface DescribeDisksReturnableResponse {
  /** 可退还云硬盘详细信息列表。 */
  DiskReturnableSet?: DiskReturnable[];
  /** 符合条件的云硬盘数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDockerActivitiesRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** Docker活动ID列表。可通过[DescribeDockerActivities](https://cloud.tencent.com/document/product/1207/95476)接口返回值中的ActivityId获取。 */
  ActivityIds?: string[];
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 活动创建时间的起始值，时间戳秒数。 */
  CreatedTimeBegin?: number;
  /** 活动创建时间的结束值，时间戳秒数。 */
  CreatedTimeEnd?: number;
}

declare interface DescribeDockerActivitiesResponse {
  /** 总数量。 */
  TotalCount?: number;
  /** Docker活动列表。 */
  DockerActivitySet?: DockerActivity[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDockerContainerConfigurationRequest {
  /** 实例ID。 */
  InstanceId: string;
  /** 容器ID。 */
  ContainerId: string;
}

declare interface DescribeDockerContainerConfigurationResponse {
  /** Docker容器配置信息。 */
  ContainerConfiguration?: DockerContainerConfiguration;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDockerContainerDetailRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 容器ID。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。 */
  ContainerId: string;
}

declare interface DescribeDockerContainerDetailResponse {
  /** Docker容器详情，json字符串base64编码。 */
  ContainerDetail?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeDockerContainersRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。 */
  ContainerIds?: string[];
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 过滤器列表。container-id按照【容器ID】进行过滤。类型：String必选：否container-name按照【容器名称】进行过滤。类型：String必选：否每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 ContainerIds 和 Filters。 */
  Filters?: Filter[];
}

declare interface DescribeDockerContainersResponse {
  /** 总数量。 */
  TotalCount?: number;
  /** 容器列表。 */
  DockerContainerSet?: DockerContainer[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirewallRulesRequest {
  /** 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/1207/47573) 接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeFirewallRulesResponse {
  /** 符合条件的防火墙规则数量。 */
  TotalCount?: number;
  /** 防火墙规则详细信息列表。 */
  FirewallRuleSet?: FirewallRuleInfo[];
  /** 防火墙版本号。 */
  FirewallVersion?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirewallRulesTemplateRequest {
}

declare interface DescribeFirewallRulesTemplateResponse {
  /** 符合条件的防火墙规则数量。 */
  TotalCount: number;
  /** 防火墙规则详细信息列表。 */
  FirewallRuleSet: FirewallRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirewallTemplateApplyRecordsRequest {
  /** 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。 */
  TemplateId: string;
  /** 应用防火墙模板任务ID列表。可通过[ApplyFirewallTemplate](https://cloud.tencent.com/document/product/1207/96883)接口返回值TaskId字段获取。 */
  TaskIds?: string[];
}

declare interface DescribeFirewallTemplateApplyRecordsResponse {
  /** 防火墙模板应用记录列表。 */
  ApplyRecordSet?: FirewallTemplateApplyRecord[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirewallTemplateQuotaRequest {
}

declare interface DescribeFirewallTemplateQuotaResponse {
  /** 当前可用配额。 */
  Available?: number;
  /** 总配额。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirewallTemplateRuleQuotaRequest {
  /** 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。 */
  TemplateId: string;
}

declare interface DescribeFirewallTemplateRuleQuotaResponse {
  /** 当前可用配额。 */
  Available?: number;
  /** 总配额。 */
  Total?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirewallTemplateRulesRequest {
  /** 防火墙模板ID。 */
  TemplateId: string;
  /** 防火墙模板规则ID列表。 */
  TemplateRuleIds?: string[];
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeFirewallTemplateRulesResponse {
  /** 防火墙模板规则总数量。 */
  TotalCount?: number;
  /** 防火墙模板规则信息列表。 */
  TemplateRuleSet?: FirewallTemplateRuleInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeFirewallTemplatesRequest {
  /** 防火墙模板ID列表。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。列表长度最大值为100。 */
  TemplateIds?: string[];
  /** 过滤器列表。template-id按照【防火墙模板所属的ID】进行过滤。类型：String必选：否template-name按照【防火墙模板所属的名称】进行过滤。类型：String必选：否template-type按照【防火墙模板的类型】进行过滤。类型：String必选：否每次请求的 Filters 的上限为 10，Filter.Values 的上限为 100。参数不支持同时指定 TemplateIds 和 Filters。 */
  Filters?: Filter[];
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeFirewallTemplatesResponse {
  /** 模板总数量。 */
  TotalCount?: number;
  /** 防火墙模板列表。 */
  TemplateSet?: FirewallTemplate[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeGeneralResourceQuotasRequest {
  /** 资源名列表，可取值:- GENERAL_BUNDLE_INSTANCE 通用型套餐实例- STORAGE_BUNDLE_INSTANCE 存储型套餐实例 - ENTERPRISE_BUNDLE_INSTANCE 企业型套餐实例 - EXCLUSIVE_BUNDLE_INSTANCE 专属型套餐实例- BEFAST_BUNDLE_INSTANCE 蜂驰型套餐实例- STARTER_BUNDLE_INSTANCE 入门型套餐实例- HK_EXCLUSIVE_BUNDLE_INSTANCE 中国香港专属型套餐实例- CAREFREE_BUNDLE_INSTANCE 无忧型套餐实例- USER_KEY_PAIR 密钥对- SNAPSHOT 快照- BLUEPRINT 自定义镜像- FREE_BLUEPRINT 免费自定义镜像- DATA_DISK 数据盘- FIREWALL_RULE 防火墙规则 */
  ResourceNames: string[];
}

declare interface DescribeGeneralResourceQuotasResponse {
  /** 通用资源配额详细信息列表。 */
  GeneralResourceQuotaSet?: GeneralResourceQuota[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceLoginKeyPairAttributeRequest {
  /** 实例ID。 */
  InstanceId: string;
}

declare interface DescribeInstanceLoginKeyPairAttributeResponse {
  /** 是否允许使用默认密钥对登录，YES：允许登录 NO：禁止登录。 */
  PermitLogin: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstanceVncUrlRequest {
  /** 实例 ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
}

declare interface DescribeInstanceVncUrlResponse {
  /** 实例的管理终端地址。 */
  InstanceVncUrl: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesDeniedActionsRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds: string[];
}

declare interface DescribeInstancesDeniedActionsResponse {
  /** 实例操作限制列表详细信息。 */
  InstanceDeniedActionSet?: InstanceDeniedActions[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesDiskNumRequest {
  /** 实例ID列表。每次请求批量实例的上限为 100。可通过 DescribeInstances 接口返回值中的 InstanceId 获取。 */
  InstanceIds: string[];
}

declare interface DescribeInstancesDiskNumResponse {
  /** 挂载信息列表 */
  AttachDetailSet?: AttachDetail[];
  /** 挂载信息数量 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds?: string[];
  /** 过滤器列表。instance-name按照【实例名称】进行过滤。类型：String必选：否private-ip-address按照【实例主网卡的内网 IP】进行过滤。类型：String必选：否public-ip-address按照【实例主网卡的公网 IP】进行过滤。类型：String必选：否zone按照【可用区】进行过滤。类型：String必选：否instance-state按照【实例状态】进行过滤。类型：String必选：否tag-key按照【标签键】进行过滤。类型：String必选：否tag-value按照【标签值】进行过滤。类型：String必选：否 tag:tag-key按照【标签键值对】进行过滤。 tag-key使用具体的标签键进行替换。类型：String必选：否每次请求的 Filters 的上限为 10，Filter.Values 的上限为 100。参数不支持同时指定 InstanceIds 和 Filters。 */
  Filters?: Filter[];
  /** 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Limit?: number;
  /** 指定排序字段 。取值范围： "EXPIRED_TIME"：依据实例的到期时间排序。 不传入此字段时, 优先返回实例状态为“待回收”的实例, 其余实例以“创建时间”倒序返回。 */
  OrderField?: string;
  /** 输出实例列表的排列顺序。取值范围："ASC"：升序排列。"DESC"：降序排列。默认按升序排序。当传入该字段时，必须指定OrderField。 */
  Order?: string;
}

declare interface DescribeInstancesResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 实例详细信息列表。 */
  InstanceSet?: Instance[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesReturnableRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds?: string[];
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeInstancesReturnableResponse {
  /** 符合条件的实例数量。 */
  TotalCount?: number;
  /** 可退还实例详细信息列表。 */
  InstanceReturnableSet?: InstanceReturnable[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeInstancesTrafficPackagesRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds?: string[];
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeInstancesTrafficPackagesResponse {
  /** 符合条件的实例流量包详情数量。 */
  TotalCount?: number;
  /** 实例流量包详情列表。 */
  InstanceTrafficPackageSet?: InstanceTrafficPackage[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeKeyPairsRequest {
  /** 密钥对 ID 列表，每次请求批量密钥对的上限为 100。 */
  KeyIds?: string[];
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
  /** 过滤器列表。key-id按照【密钥对ID】进行过滤。类型：String必选：否key-name按照【密钥对名称】进行过滤（支持模糊匹配）。类型：String必选：否每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 KeyIds 和 Filters。 */
  Filters?: Filter[];
}

declare interface DescribeKeyPairsResponse {
  /** 符合条件的密钥对数量。 */
  TotalCount?: number;
  /** 密钥对详细信息列表。 */
  KeyPairSet?: KeyPair[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeModifyInstanceBundlesRequest {
  /** 实例 ID。可通过 DescribeInstances 接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 过滤器列表。bundle-id按照【套餐 ID】进行过滤。类型：String必选：否可通过 DescribeBundles 接口返回值中的 BundleId 获取。support-platform-type按照【系统类型】进行过滤。取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）类型：String必选：否bundle-type按照 【套餐类型进行过滤】。取值：GENERAL_BUNDLE (通用型套餐); STORAGE_BUNDLE(存储型套餐);ENTERPRISE_BUNDLE( 企业型套餐);EXCLUSIVE_BUNDLE(专属型套餐);BEFAST_BUNDLE(蜂驰型套餐);类型：String必选：否bundle-state按照【套餐状态】进行过滤。取值: ‘ONLINE’(在线); ‘OFFLINE’(下线);类型：String必选：否每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。 */
  Filters?: Filter[];
  /** 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Limit?: number;
}

declare interface DescribeModifyInstanceBundlesResponse {
  /** 符合条件的套餐数量。 */
  TotalCount?: number;
  /** 变更套餐详细信息。 */
  ModifyBundleSet?: ModifyBundle[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeRegionsRequest {
}

declare interface DescribeRegionsResponse {
  /** 地域数量。 */
  TotalCount?: number;
  /** 地域信息列表。 */
  RegionSet?: RegionInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeResetInstanceBlueprintsRequest {
  /** 实例ID。可通过 DescribeInstances 接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 偏移量，默认为 0。关于`Offset`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。关于`Limit`的更进一步介绍请参考 API [简介](https://cloud.tencent.com/document/product/1207/47578)中的相关小节。 */
  Limit?: number;
  /** 过滤器列表。blueprint-id按照【镜像 ID】进行过滤。类型：String必选：否可通过 DescribeBlueprints 接口返回值中的 BlueprintId 获取。blueprint-type按照【镜像类型】进行过滤。取值： APP_OS（应用镜像 ）；PURE_OS（ 系统镜像）；PRIVATE（自定义镜像）。类型：String必选：否platform-type按照【镜像平台类型】进行过滤。取值： LINUX_UNIX（Linux/Unix系统）；WINDOWS（Windows 系统）。类型：String必选：否blueprint-name按照【镜像名称】进行过滤。类型：String必选：否可通过 DescribeBlueprints 接口返回值中的 BlueprintName 获取。blueprint-state按照【镜像状态】进行过滤。类型：String必选：否可通过 DescribeBlueprints 接口返回值中的 BlueprintState 获取。每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 BlueprintIds 和 Filters 。 */
  Filters?: Filter[];
}

declare interface DescribeResetInstanceBlueprintsResponse {
  /** 符合条件的镜像数量。 */
  TotalCount?: number;
  /** 镜像重置信息列表 */
  ResetInstanceBlueprintSet?: ResetInstanceBlueprint[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeScenesRequest {
  /** 使用场景ID列表。可通过[DescribeScenes](https://cloud.tencent.com/document/product/1207/83512)接口返回值中的SceneId获取。 */
  SceneIds?: string[];
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeScenesResponse {
  /** 使用场景列表。 */
  SceneSet?: Scene[];
  /** 使用场景总数量。 */
  TotalCount?: number;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotsDeniedActionsRequest {
  /** 快照 ID 列表, 可通过 DescribeSnapshots 查询。 */
  SnapshotIds: string[];
}

declare interface DescribeSnapshotsDeniedActionsResponse {
  /** 快照操作限制列表详细信息。 */
  SnapshotDeniedActionSet?: SnapshotDeniedActions[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeSnapshotsRequest {
  /** 要查询快照的 ID 列表。每次请求批量快照的上限为 100。 可通过 [DescribeSnapshots](https://cloud.tencent.com/document/product/1207/54388) 接口返回值中的 SnapshotId 获取。参数不支持同时指定 SnapshotIds 和 Filters。 */
  SnapshotIds?: string[];
  /** 过滤器列表。snapshot-id按照【快照 ID】进行过滤。类型：String必选：否可通过 DescribeSnapshots 接口返回值中的 SnapshotId 获取。disk-id按照【磁盘 ID】进行过滤。类型：String必选：否可通过 DescribeDisks 接口返回值中的 DiskId 获取。snapshot-name按照【快照名称】进行过滤。类型：String必选：否可通过 DescribeSnapshots 接口返回值中的 SnapshotName 获取。instance-id按照【实例 ID 】进行过滤。类型：String必选：否可通过 DescribeInstances 接口返回值中的 InstanceId 获取。每次请求的 Filters 的上限为 10，Filter.Values 的上限为 5。参数不支持同时指定 SnapshotIds 和 Filters。 */
  Filters?: Filter[];
  /** 偏移量，默认为 0。 */
  Offset?: number;
  /** 返回数量，默认为 20，最大值为 100。 */
  Limit?: number;
}

declare interface DescribeSnapshotsResponse {
  /** 快照的数量。 */
  TotalCount?: number;
  /** 快照的详情列表。 */
  SnapshotSet?: Snapshot[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DescribeZonesRequest {
  /** 可用区列表排序的依据字段。取值范围：ZONE：依据可用区排序。INSTANCE_DISPLAY_LABEL：依据可用区展示标签排序，可用区展示标签包括：HIDDEN（隐藏）、NORMAL（普通）、SELECTED（默认选中），默认采用的升序排列为：['HIDDEN', 'NORMAL', 'SELECTED']。默认按可用区排序。 */
  OrderField?: string;
  /** 输出可用区列表的排列顺序。取值范围：ASC：升序排列。 DESC：降序排列。默认按升序排列。 */
  Order?: string;
}

declare interface DescribeZonesResponse {
  /** 可用区数量 */
  TotalCount?: number;
  /** 可用区详细信息列表 */
  ZoneInfoSet?: ZoneInfo[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachCcnRequest {
  /** 云联网实例ID。可通过[DescribeCcnAttachedInstances](https://cloud.tencent.com/document/product/1207/58797)接口返回值中的CcnId获取。 */
  CcnId: string;
}

declare interface DetachCcnResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DetachDisksRequest {
  /** 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。 */
  DiskIds: string[];
}

declare interface DetachDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface DisassociateInstancesKeyPairsRequest {
  /** 密钥对 ID 列表，每次请求批量密钥对的上限为 100。可通过[DescribeKeyPairs](https://cloud.tencent.com/document/api/1207/55540)接口返回值中的KeyId获取。 */
  KeyIds: string[];
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds: string[];
}

declare interface DisassociateInstancesKeyPairsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ImportKeyPairRequest {
  /** 密钥对名称，可由数字，字母和下划线组成，长度不超过 25 个字符。 */
  KeyName: string;
  /** 密钥对的公钥内容， OpenSSH RSA 格式。 */
  PublicKey: string;
}

declare interface ImportKeyPairResponse {
  /** 密钥对 ID。 */
  KeyId: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceCreateBlueprintRequest {
  /** 自定义镜像的个数。默认值为1。 */
  BlueprintCount?: number;
}

declare interface InquirePriceCreateBlueprintResponse {
  /** 自定义镜像的价格参数。 */
  BlueprintPrice: BlueprintPrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceCreateDisksRequest {
  /** 云硬盘大小, 单位: GB。 */
  DiskSize: number;
  /** 云硬盘介质类型。取值: "CLOUD_PREMIUM"(高性能云盘), "CLOUD_SSD"(SSD云硬盘)。 */
  DiskType: string;
  /** 新购云硬盘包年包月相关参数设置。 */
  DiskChargePrepaid: DiskChargePrepaid;
  /** 云硬盘个数, 默认值: 1。 */
  DiskCount?: number;
  /** 指定云硬盘备份点配额，不传时默认为不带备份点配额。目前只支持不带或设置1个云硬盘备份点配额。 */
  DiskBackupQuota?: number;
}

declare interface InquirePriceCreateDisksResponse {
  /** 云硬盘价格。 */
  DiskPrice: DiskPrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceCreateInstancesRequest {
  /** 实例的套餐 ID。可以通过调用[DescribeBundles](https://cloud.tencent.com/document/api/1207/47575)接口获取。 */
  BundleId: string;
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
  /** 创建数量，默认为 1。 */
  InstanceCount?: number;
  /** 应用镜像 ID，使用收费应用镜像时必填。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。 */
  BlueprintId?: string;
}

declare interface InquirePriceCreateInstancesResponse {
  /** 询价信息。 */
  Price?: Price;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceRenewDisksRequest {
  /** 云硬盘ID列表。每次批量请求云硬盘的上限为 1。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。 */
  DiskIds: string[];
  /** 续费云硬盘包年包月相关参数设置。 */
  RenewDiskChargePrepaid: RenewDiskChargePrepaid;
}

declare interface InquirePriceRenewDisksResponse {
  /** 云硬盘价格。 */
  DiskPrice?: DiskPrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface InquirePriceRenewInstancesRequest {
  /** 待续费的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573 )接口返回值中的InstanceId获取。每次请求批量实例的上限为50。 */
  InstanceIds: string[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
  /** 是否续费数据盘。默认值: false, 即不续费。 */
  RenewDataDisk?: boolean;
  /** 数据盘是否对齐实例到期时间。默认值: false, 即不对齐。 */
  AlignInstanceExpiredTime?: boolean;
}

declare interface InquirePriceRenewInstancesResponse {
  /** 询价信息。默认为列表中第一个实例的价格信息。 */
  Price?: Price;
  /** 数据盘价格信息列表。 */
  DataDiskPriceSet?: DataDiskPrice[] | null;
  /** 待续费实例价格列表。 */
  InstancePriceDetailSet?: InstancePriceDetail[] | null;
  /** 总计价格。 */
  TotalPrice?: TotalPrice;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateDisksRequest {
  /** 云硬盘ID列表。一个或多个待操作的云硬盘ID。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。每次请求退还数据盘数量总计上限为20。 */
  DiskIds: string[];
}

declare interface IsolateDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface IsolateInstancesRequest {
  /** 实例ID列表。一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。每次请求退还实例和数据盘数量总计上限为20。 */
  InstanceIds: string[];
  /** 是否退还挂载的数据盘。取值范围：TRUE：表示退还实例同时退还其挂载的数据盘。FALSE：表示退还实例同时不再退还其挂载的数据盘。默认取值：TRUE。 */
  IsolateDataDisk?: boolean;
}

declare interface IsolateInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyBlueprintAttributeRequest {
  /** 镜像 ID。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。 */
  BlueprintId: string;
  /** 设置新的镜像名称。最大长度60。 */
  BlueprintName?: string;
  /** 设置新的镜像描述。最大长度60。 */
  Description?: string;
}

declare interface ModifyBlueprintAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDiskBackupsAttributeRequest {
  /** 云硬盘备份点ID，可通过 [DescribeDiskBackups](https://cloud.tencent.com/document/api/1207/84379) 接口返回值中的 DiskBackupId 获取。 */
  DiskBackupIds: string[];
  /** 云硬盘备份点名称，最大长度 90 。 */
  DiskBackupName?: string;
}

declare interface ModifyDiskBackupsAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDisksAttributeRequest {
  /** 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。 */
  DiskIds: string[];
  /** 云硬盘名称。 */
  DiskName: string;
}

declare interface ModifyDisksAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDisksBackupQuotaRequest {
  /** 云硬盘ID列表，可通过[DescribeDisks](https://cloud.tencent.com/document/api/1207/66093)接口查询。列表最大长度为15。 */
  DiskIds: string[];
  /** 云硬盘备份点配额。取值范围: [0, 500]。调整后的配额必须不小于已存在的备份点数量。 */
  DiskBackupQuota: number;
}

declare interface ModifyDisksBackupQuotaResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDisksRenewFlagRequest {
  /** 云硬盘ID列表。每次批量请求云硬盘的上限为 100。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。 */
  DiskIds: string[];
  /** 自动续费标识。取值范围：- NOTIFY_AND_AUTO_RENEW：通知过期且自动续费- NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费- DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag: string;
}

declare interface ModifyDisksRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyDockerContainerRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 容器ID。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。 */
  ContainerId: string;
  /** 环境变量列表 */
  Envs?: ContainerEnv[];
  /** 容器端口主机端口映射列表 */
  PublishPorts?: DockerContainerPublishPort[];
  /** 容器加载本地卷列表 */
  Volumes?: DockerContainerVolume[];
  /** 运行的命令 */
  Command?: string;
  /** 容器重启策略，对应docker "--restart"参数。枚举值:no: 不自动重启。默认策略。on-failure[:max-retries]: 当容器退出码非0时重启容器。使用max-retries限制重启次数，比如on-failure:10，限制最多重启10次。always: 只要容器退出就重启。unless-stopped: 始终重新启动容器，包括在守护进程启动时，除非容器在 Docker 守护进程停止之前进入停止状态。 */
  RestartPolicy?: string;
}

declare interface ModifyDockerContainerResponse {
  /** Docker活动ID。 */
  DockerActivityId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFirewallRuleDescriptionRequest {
  /** 实例ID。可通过 [DescribeInstances](https://cloud.tencent.com/document/api/1207/47573) 接口返回值中的 InstanceId 获取。 */
  InstanceId: string;
  /** 防火墙规则。 */
  FirewallRule: FirewallRule;
  /** 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。 */
  FirewallVersion?: number;
}

declare interface ModifyFirewallRuleDescriptionResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFirewallRulesRequest {
  /** 实例 ID。实例的ID可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 防火墙规则列表。列表长度最大值是100。 */
  FirewallRules: FirewallRule[];
  /** 防火墙当前版本。用户每次更新防火墙规则时版本会自动加1，防止规则已过期，不填不考虑冲突。 */
  FirewallVersion?: number;
}

declare interface ModifyFirewallRulesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyFirewallTemplateRequest {
  /** 防火墙模板ID。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。 */
  TemplateId: string;
  /** 防火墙模板名称。可通过[DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874)接口返回值字段TemplateSet获取。 */
  TemplateName?: string;
}

declare interface ModifyFirewallTemplateResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesAttributeRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds: string[];
  /** 实例名称。可任意命名，但不得超过 60 个字符。 */
  InstanceName?: string;
}

declare interface ModifyInstancesAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesBundleRequest {
  /** 实例ID列表。一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。每次请求批量实例的上限为15。 */
  InstanceIds: string[];
  /** 待变更的套餐Id。可通过[DescribeBundles](https://cloud.tencent.com/document/api/1207/47575)接口返回值中的BundleId获取。 */
  BundleId: string;
  /** 是否自动抵扣代金券。取值范围：true：表示自动抵扣代金券false：表示不自动抵扣代金券默认取值：false。 */
  AutoVoucher?: boolean;
}

declare interface ModifyInstancesBundleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesLoginKeyPairAttributeRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。 */
  InstanceIds: string[];
  /** 是否允许使用默认密钥对登录，YES：允许登录；NO：禁止登录 */
  PermitLogin?: string;
}

declare interface ModifyInstancesLoginKeyPairAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifyInstancesRenewFlagRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds: string[];
  /** 自动续费标识。取值范围：- NOTIFY_AND_AUTO_RENEW：通知过期且自动续费- NOTIFY_AND_MANUAL_RENEW：通知过期不自动续费- DISABLE_NOTIFY_AND_MANUAL_RENEW：不通知过期不自动续费若该参数指定为NOTIFY_AND_AUTO_RENEW，在账户余额充足的情况下，实例到期后将按月自动续费。 */
  RenewFlag: string;
}

declare interface ModifyInstancesRenewFlagResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ModifySnapshotAttributeRequest {
  /** 快照 ID, 可通过 DescribeSnapshots 查询。 */
  SnapshotId: string;
  /** 新的快照名称，最长为 60 个字符。 */
  SnapshotName?: string;
}

declare interface ModifySnapshotAttributeResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RebootInstancesRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds: string[];
}

declare interface RebootInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RemoveDockerContainersRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。 */
  ContainerIds: string[];
}

declare interface RemoveDockerContainersResponse {
  /** Docker活动ID。 */
  DockerActivityId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenameDockerContainerRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 容器ID。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。 */
  ContainerId: string;
  /** 容器新的名称。 */
  ContainerName: string;
}

declare interface RenameDockerContainerResponse {
  /** Docker活动ID。 */
  DockerActivityId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewDisksRequest {
  /** 云硬盘ID列表。一个或多个待操作的云硬盘ID。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。每次请求续费数据盘数量总计上限为50。 */
  DiskIds: string[];
  /** 续费云硬盘包年包月相关参数设置。 */
  RenewDiskChargePrepaid: RenewDiskChargePrepaid;
  /** 是否自动使用代金券。默认不使用。 */
  AutoVoucher?: boolean;
}

declare interface RenewDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RenewInstancesRequest {
  /** 实例ID列表。一个或多个待操作的实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。每次请求批量实例的上限为100。 */
  InstanceIds: string[];
  /** 预付费模式，即包年包月相关参数设置。通过该参数可以指定包年包月实例的购买时长、是否设置自动续费等属性。若指定实例的付费模式为预付费则该参数必传。 */
  InstanceChargePrepaid: InstanceChargePrepaid;
  /** 是否续费弹性数据盘。取值范围：TRUE：表示续费实例同时续费其挂载的数据盘FALSE：表示续费实例同时不再续费其挂载的数据盘默认取值：TRUE。 */
  RenewDataDisk?: boolean;
  /** 是否自动抵扣代金券。取值范围：TRUE：表示自动抵扣代金券FALSE：表示不自动抵扣代金券默认取值：FALSE。 */
  AutoVoucher?: boolean;
}

declare interface RenewInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ReplaceFirewallTemplateRuleRequest {
  /** 防火墙模板ID。可通过 [DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874) 接口返回值中的 TemplateId 获取。 */
  TemplateId: string;
  /** 防火墙模板规则ID。可通过 [DescribeFirewallTemplateRules](https://cloud.tencent.com/document/product/1207/96875) 接口返回值中的 TemplateRuleId 获取。 */
  TemplateRuleId: string;
  /** 替换后的防火墙模板规则。 */
  TemplateRule: FirewallRule;
}

declare interface ReplaceFirewallTemplateRuleResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RerunDockerContainerRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 重新创建的容器配置。 */
  ContainerConfiguration: DockerContainerConfiguration;
  /** 容器ID。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。 */
  ContainerId: string;
}

declare interface RerunDockerContainerResponse {
  /** Docker活动ID。 */
  DockerActivityId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetAttachCcnRequest {
  /** 云联网实例ID。可通过[DescribeCcns](https://cloud.tencent.com/document/product/215/19199)接口返回值中的CcnId获取。 */
  CcnId: string;
}

declare interface ResetAttachCcnResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetFirewallTemplateRulesRequest {
  /** 防火墙模板ID。可通过 [DescribeFirewallTemplates](https://cloud.tencent.com/document/product/1207/96874) 接口返回值中的 TemplateId	获取。 */
  TemplateId: string;
  /** 重置后的防火墙模板规则列表。每次请求批量防火墙规则的上限为 100。 */
  TemplateRules: FirewallRule[];
}

declare interface ResetFirewallTemplateRulesResponse {
  /** 重置后的规则ID列表。 */
  TemplateRuleIdSet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstanceRequest {
  /** 实例 ID。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 镜像 ID。可通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回值中的BlueprintId获取。 */
  BlueprintId?: string;
  /** 要创建的容器配置列表。 */
  Containers?: DockerContainerConfiguration[];
  /** 实例登录信息配置。默认缺失情况下代表用户选择实例创建后设置登录密码或绑定密钥。 */
  LoginConfiguration?: LoginConfiguration;
}

declare interface ResetInstanceResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResetInstancesPasswordRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过 DescribeInstances 接口返回值中的 InstanceId 获取。 */
  InstanceIds: string[];
  /** 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下： `LINUX_UNIX` 实例密码必须 8-30 位，推荐使用 12 位以上密码，不能以“/”开头，至少包含以下字符中的三种不同字符，字符种类： 小写字母：[a-z] 大写字母：[A-Z] 数字：0-9 特殊字符： ()\`\~!@#$%^&\*-+=\_|{}[]:;' <>,.?/ `WINDOWS` 实例密码必须 12-30 位，不能以“/”开头且不包括用户名，至少包含以下字符中的三种不同字符 小写字母：[a-z] 大写字母：[A-Z] 数字： 0-9 特殊字符：()\`~!@#$%^&\*-+=\_|{}[]:;' <>,.?/ 如果实例即包含 `LINUX_UNIX` 实例又包含 `WINDOWS` 实例，则密码复杂度限制按照 `WINDOWS` 实例的限制。 */
  Password: string;
  /** 待重置密码的实例操作系统用户名。不得超过 64 个字符。 */
  UserName?: string;
}

declare interface ResetInstancesPasswordResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ResizeDisksRequest {
  /** 云硬盘ID列表，可通过[DescribeDisks](https://cloud.tencent.com/document/api/1207/66093)接口查询。列表最大长度为15。 */
  DiskIds: string[];
  /** 扩容后的云硬盘大小。单位: GB。高性能云硬盘大小取值范围：[10, 4000] ,SSD云硬盘大小取值范围：[20, 4000]。扩容后的云硬盘大小必须大于当前云硬盘大小。 */
  DiskSize: number;
}

declare interface ResizeDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RestartDockerContainersRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。 */
  ContainerIds: string[];
}

declare interface RestartDockerContainersResponse {
  /** Docker活动ID。 */
  DockerActivityId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface RunDockerContainersRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 要创建的容器列表。 */
  Containers: DockerContainerConfiguration[];
}

declare interface RunDockerContainersResponse {
  /** Docker活动ID列表。 */
  DockerActivitySet?: string[];
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface ShareBlueprintAcrossAccountsRequest {
  /** 镜像ID, 可以通过[DescribeBlueprints](https://cloud.tencent.com/document/product/1207/47689)接口返回的BlueprintId获取。 */
  BlueprintId: string;
  /** 接收共享镜像的账号Id列表。账号ID不同于QQ号，查询用户账号ID请查看账号信息中的账号ID栏。账号个数取值最大为10。 */
  AccountIds: string[];
}

declare interface ShareBlueprintAcrossAccountsResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartDockerContainersRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。 */
  ContainerIds: string[];
}

declare interface StartDockerContainersResponse {
  /** Docker活动ID。 */
  DockerActivityId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StartInstancesRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds: string[];
}

declare interface StartInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopDockerContainersRequest {
  /** 实例ID。可通过[DescribeInstances](https://cloud.tencent.com/document/product/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceId: string;
  /** 容器ID列表。可通过[DescribeDockerContainers](https://cloud.tencent.com/document/product/1207/95473)接口返回值中的ContainerId获取。 */
  ContainerIds: string[];
}

declare interface StopDockerContainersResponse {
  /** Docker活动ID。 */
  DockerActivityId?: string;
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface StopInstancesRequest {
  /** 实例 ID 列表。每次请求批量实例的上限为 100。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds: string[];
}

declare interface StopInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateDisksRequest {
  /** 云硬盘ID列表。可通过[DescribeDisks](https://cloud.tencent.com/document/product/1207/66093)接口返回值中的DiskId获取。 */
  DiskIds: string[];
}

declare interface TerminateDisksResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

declare interface TerminateInstancesRequest {
  /** 实例ID列表。可通过[DescribeInstances](https://cloud.tencent.com/document/api/1207/47573)接口返回值中的InstanceId获取。 */
  InstanceIds: string[];
}

declare interface TerminateInstancesResponse {
  /** 唯一请求 ID，每次请求都会返回。 */
  RequestId?: string;
}

/** {@link Lighthouse 轻量应用服务器} */
declare interface Lighthouse {
  (): Versions;
  /** 回滚云硬盘备份点 {@link ApplyDiskBackupRequest} {@link ApplyDiskBackupResponse} */
  ApplyDiskBackup(data: ApplyDiskBackupRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyDiskBackupResponse>;
  /** 应用防火墙模板 {@link ApplyFirewallTemplateRequest} {@link ApplyFirewallTemplateResponse} */
  ApplyFirewallTemplate(data: ApplyFirewallTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyFirewallTemplateResponse>;
  /** 回滚实例快照 {@link ApplyInstanceSnapshotRequest} {@link ApplyInstanceSnapshotResponse} */
  ApplyInstanceSnapshot(data: ApplyInstanceSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<ApplyInstanceSnapshotResponse>;
  /** 绑定密钥对 {@link AssociateInstancesKeyPairsRequest} {@link AssociateInstancesKeyPairsResponse} */
  AssociateInstancesKeyPairs(data: AssociateInstancesKeyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<AssociateInstancesKeyPairsResponse>;
  /** 关联云联网 {@link AttachCcnRequest} {@link AttachCcnResponse} */
  AttachCcn(data: AttachCcnRequest, config?: AxiosRequestConfig): AxiosPromise<AttachCcnResponse>;
  /** 挂载云硬盘 {@link AttachDisksRequest} {@link AttachDisksResponse} */
  AttachDisks(data: AttachDisksRequest, config?: AxiosRequestConfig): AxiosPromise<AttachDisksResponse>;
  /** 取消镜像跨账号共享 {@link CancelShareBlueprintAcrossAccountsRequest} {@link CancelShareBlueprintAcrossAccountsResponse} */
  CancelShareBlueprintAcrossAccounts(data: CancelShareBlueprintAcrossAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<CancelShareBlueprintAcrossAccountsResponse>;
  /** 创建镜像 {@link CreateBlueprintRequest} {@link CreateBlueprintResponse} */
  CreateBlueprint(data: CreateBlueprintRequest, config?: AxiosRequestConfig): AxiosPromise<CreateBlueprintResponse>;
  /** 创建云硬盘备份点 {@link CreateDiskBackupRequest} {@link CreateDiskBackupResponse} */
  CreateDiskBackup(data: CreateDiskBackupRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDiskBackupResponse>;
  /** 创建云硬盘 {@link CreateDisksRequest} {@link CreateDisksResponse} */
  CreateDisks(data: CreateDisksRequest, config?: AxiosRequestConfig): AxiosPromise<CreateDisksResponse>;
  /** 添加防火墙规则 {@link CreateFirewallRulesRequest} {@link CreateFirewallRulesResponse} */
  CreateFirewallRules(data: CreateFirewallRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFirewallRulesResponse>;
  /** 创建防火墙模板 {@link CreateFirewallTemplateRequest} {@link CreateFirewallTemplateResponse} */
  CreateFirewallTemplate(data: CreateFirewallTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFirewallTemplateResponse>;
  /** 创建防火墙模板规则 {@link CreateFirewallTemplateRulesRequest} {@link CreateFirewallTemplateRulesResponse} */
  CreateFirewallTemplateRules(data: CreateFirewallTemplateRulesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateFirewallTemplateRulesResponse>;
  /** 创建实例快照 {@link CreateInstanceSnapshotRequest} {@link CreateInstanceSnapshotResponse} */
  CreateInstanceSnapshot(data: CreateInstanceSnapshotRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstanceSnapshotResponse>;
  /** 创建实例 {@link CreateInstancesRequest} {@link CreateInstancesResponse} */
  CreateInstances(data: CreateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<CreateInstancesResponse>;
  /** 创建密钥对 {@link CreateKeyPairRequest} {@link CreateKeyPairResponse} */
  CreateKeyPair(data: CreateKeyPairRequest, config?: AxiosRequestConfig): AxiosPromise<CreateKeyPairResponse>;
  /** 删除镜像 {@link DeleteBlueprintsRequest} {@link DeleteBlueprintsResponse} */
  DeleteBlueprints(data: DeleteBlueprintsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteBlueprintsResponse>;
  /** 删除云硬盘备份点 {@link DeleteDiskBackupsRequest} {@link DeleteDiskBackupsResponse} */
  DeleteDiskBackups(data: DeleteDiskBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteDiskBackupsResponse>;
  /** 删除防火墙规则 {@link DeleteFirewallRulesRequest} {@link DeleteFirewallRulesResponse} */
  DeleteFirewallRules(data: DeleteFirewallRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFirewallRulesResponse>;
  /** 删除防火墙模板 {@link DeleteFirewallTemplateRequest} {@link DeleteFirewallTemplateResponse} */
  DeleteFirewallTemplate(data: DeleteFirewallTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFirewallTemplateResponse>;
  /** 删除防火墙模板规则 {@link DeleteFirewallTemplateRulesRequest} {@link DeleteFirewallTemplateRulesResponse} */
  DeleteFirewallTemplateRules(data: DeleteFirewallTemplateRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteFirewallTemplateRulesResponse>;
  /** 删除密钥对 {@link DeleteKeyPairsRequest} {@link DeleteKeyPairsResponse} */
  DeleteKeyPairs(data: DeleteKeyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteKeyPairsResponse>;
  /** 删除快照 {@link DeleteSnapshotsRequest} {@link DeleteSnapshotsResponse} */
  DeleteSnapshots(data: DeleteSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DeleteSnapshotsResponse>;
  /** 查询全地域使用场景列表 {@link DescribeAllScenesRequest} {@link DescribeAllScenesResponse} */
  DescribeAllScenes(data?: DescribeAllScenesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeAllScenesResponse>;
  /** 查询镜像实例信息 {@link DescribeBlueprintInstancesRequest} {@link DescribeBlueprintInstancesResponse} */
  DescribeBlueprintInstances(data: DescribeBlueprintInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlueprintInstancesResponse>;
  /** 查询镜像信息 {@link DescribeBlueprintsRequest} {@link DescribeBlueprintsResponse} */
  DescribeBlueprints(data?: DescribeBlueprintsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBlueprintsResponse>;
  /** 查询套餐折扣 {@link DescribeBundleDiscountRequest} {@link DescribeBundleDiscountResponse} */
  DescribeBundleDiscount(data: DescribeBundleDiscountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBundleDiscountResponse>;
  /** 查询套餐 {@link DescribeBundlesRequest} {@link DescribeBundlesResponse} */
  DescribeBundles(data?: DescribeBundlesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeBundlesResponse>;
  /** 查询云联网关联的实例信息 {@link DescribeCcnAttachedInstancesRequest} {@link DescribeCcnAttachedInstancesResponse} */
  DescribeCcnAttachedInstances(data?: DescribeCcnAttachedInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeCcnAttachedInstancesResponse>;
  /** 查看云硬盘备份点列表 {@link DescribeDiskBackupsRequest} {@link DescribeDiskBackupsResponse} */
  DescribeDiskBackups(data?: DescribeDiskBackupsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiskBackupsResponse>;
  /** 查看云硬盘备份点操作限制列表 {@link DescribeDiskBackupsDeniedActionsRequest} {@link DescribeDiskBackupsDeniedActionsResponse} */
  DescribeDiskBackupsDeniedActions(data: DescribeDiskBackupsDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiskBackupsDeniedActionsResponse>;
  /** 查看云硬盘配置 {@link DescribeDiskConfigsRequest} {@link DescribeDiskConfigsResponse} */
  DescribeDiskConfigs(data?: DescribeDiskConfigsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiskConfigsResponse>;
  /** 查询云硬盘折扣信息 {@link DescribeDiskDiscountRequest} {@link DescribeDiskDiscountResponse} */
  DescribeDiskDiscount(data: DescribeDiskDiscountRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDiskDiscountResponse>;
  /** 查询云硬盘 {@link DescribeDisksRequest} {@link DescribeDisksResponse} */
  DescribeDisks(data?: DescribeDisksRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisksResponse>;
  /** 查询云硬盘操作限制列表信息 {@link DescribeDisksDeniedActionsRequest} {@link DescribeDisksDeniedActionsResponse} */
  DescribeDisksDeniedActions(data: DescribeDisksDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisksDeniedActionsResponse>;
  /** 查看云硬盘是否可退还 {@link DescribeDisksReturnableRequest} {@link DescribeDisksReturnableResponse} */
  DescribeDisksReturnable(data?: DescribeDisksReturnableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDisksReturnableResponse>;
  /** 查询Docker活动列表 {@link DescribeDockerActivitiesRequest} {@link DescribeDockerActivitiesResponse} */
  DescribeDockerActivities(data: DescribeDockerActivitiesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDockerActivitiesResponse>;
  /** 查询Docker容器配置信息 {@link DescribeDockerContainerConfigurationRequest} {@link DescribeDockerContainerConfigurationResponse} */
  DescribeDockerContainerConfiguration(data: DescribeDockerContainerConfigurationRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDockerContainerConfigurationResponse>;
  /** 查询Docker容器详情 {@link DescribeDockerContainerDetailRequest} {@link DescribeDockerContainerDetailResponse} */
  DescribeDockerContainerDetail(data: DescribeDockerContainerDetailRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDockerContainerDetailResponse>;
  /** 查询容器列表 {@link DescribeDockerContainersRequest} {@link DescribeDockerContainersResponse} */
  DescribeDockerContainers(data: DescribeDockerContainersRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeDockerContainersResponse>;
  /** 查询防火墙规则 {@link DescribeFirewallRulesRequest} {@link DescribeFirewallRulesResponse} */
  DescribeFirewallRules(data: DescribeFirewallRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirewallRulesResponse>;
  /** 查询防火墙规则模板 {@link DescribeFirewallRulesTemplateRequest} {@link DescribeFirewallRulesTemplateResponse} */
  DescribeFirewallRulesTemplate(data?: DescribeFirewallRulesTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirewallRulesTemplateResponse>;
  /** 查询防火墙模板应用记录列表 {@link DescribeFirewallTemplateApplyRecordsRequest} {@link DescribeFirewallTemplateApplyRecordsResponse} */
  DescribeFirewallTemplateApplyRecords(data: DescribeFirewallTemplateApplyRecordsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirewallTemplateApplyRecordsResponse>;
  /** 查询防火墙模板配额 {@link DescribeFirewallTemplateQuotaRequest} {@link DescribeFirewallTemplateQuotaResponse} */
  DescribeFirewallTemplateQuota(data?: DescribeFirewallTemplateQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirewallTemplateQuotaResponse>;
  /** 查询防火墙模板规则配额 {@link DescribeFirewallTemplateRuleQuotaRequest} {@link DescribeFirewallTemplateRuleQuotaResponse} */
  DescribeFirewallTemplateRuleQuota(data: DescribeFirewallTemplateRuleQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirewallTemplateRuleQuotaResponse>;
  /** 查询防火墙模板规则列表 {@link DescribeFirewallTemplateRulesRequest} {@link DescribeFirewallTemplateRulesResponse} */
  DescribeFirewallTemplateRules(data: DescribeFirewallTemplateRulesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirewallTemplateRulesResponse>;
  /** 查询防火墙模板列表 {@link DescribeFirewallTemplatesRequest} {@link DescribeFirewallTemplatesResponse} */
  DescribeFirewallTemplates(data?: DescribeFirewallTemplatesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeFirewallTemplatesResponse>;
  /** 查询通用资源配额信息 {@link DescribeGeneralResourceQuotasRequest} {@link DescribeGeneralResourceQuotasResponse} */
  DescribeGeneralResourceQuotas(data: DescribeGeneralResourceQuotasRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeGeneralResourceQuotasResponse>;
  /** 查询实例默认登录密钥属性 {@link DescribeInstanceLoginKeyPairAttributeRequest} {@link DescribeInstanceLoginKeyPairAttributeResponse} */
  DescribeInstanceLoginKeyPairAttribute(data: DescribeInstanceLoginKeyPairAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceLoginKeyPairAttributeResponse>;
  /** 查询实例管理终端地址 {@link DescribeInstanceVncUrlRequest} {@link DescribeInstanceVncUrlResponse} */
  DescribeInstanceVncUrl(data: DescribeInstanceVncUrlRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstanceVncUrlResponse>;
  /** 查看实例列表 {@link DescribeInstancesRequest} {@link DescribeInstancesResponse} */
  DescribeInstances(data?: DescribeInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesResponse>;
  /** 查看实例操作限制列表 {@link DescribeInstancesDeniedActionsRequest} {@link DescribeInstancesDeniedActionsResponse} */
  DescribeInstancesDeniedActions(data: DescribeInstancesDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesDeniedActionsResponse>;
  /** 查询实例挂载云硬盘数量 {@link DescribeInstancesDiskNumRequest} {@link DescribeInstancesDiskNumResponse} */
  DescribeInstancesDiskNum(data: DescribeInstancesDiskNumRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesDiskNumResponse>;
  /** 查询实例是否可退还 {@link DescribeInstancesReturnableRequest} {@link DescribeInstancesReturnableResponse} */
  DescribeInstancesReturnable(data?: DescribeInstancesReturnableRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesReturnableResponse>;
  /** 查看实例流量包详情 {@link DescribeInstancesTrafficPackagesRequest} {@link DescribeInstancesTrafficPackagesResponse} */
  DescribeInstancesTrafficPackages(data?: DescribeInstancesTrafficPackagesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeInstancesTrafficPackagesResponse>;
  /** 查询用户密钥对列表 {@link DescribeKeyPairsRequest} {@link DescribeKeyPairsResponse} */
  DescribeKeyPairs(data?: DescribeKeyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeKeyPairsResponse>;
  /** 查询实例可变更套餐列表 {@link DescribeModifyInstanceBundlesRequest} {@link DescribeModifyInstanceBundlesResponse} */
  DescribeModifyInstanceBundles(data: DescribeModifyInstanceBundlesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeModifyInstanceBundlesResponse>;
  /** 查询地域列表 {@link DescribeRegionsRequest} {@link DescribeRegionsResponse} */
  DescribeRegions(data?: DescribeRegionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeRegionsResponse>;
  /** 查询重置实例的镜像信息 {@link DescribeResetInstanceBlueprintsRequest} {@link DescribeResetInstanceBlueprintsResponse} */
  DescribeResetInstanceBlueprints(data: DescribeResetInstanceBlueprintsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeResetInstanceBlueprintsResponse>;
  /** 查看使用场景列表 {@link DescribeScenesRequest} {@link DescribeScenesResponse} */
  DescribeScenes(data?: DescribeScenesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeScenesResponse>;
  /** 查看快照列表 {@link DescribeSnapshotsRequest} {@link DescribeSnapshotsResponse} */
  DescribeSnapshots(data?: DescribeSnapshotsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotsResponse>;
  /** 查看快照操作限制列表 {@link DescribeSnapshotsDeniedActionsRequest} {@link DescribeSnapshotsDeniedActionsResponse} */
  DescribeSnapshotsDeniedActions(data: DescribeSnapshotsDeniedActionsRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeSnapshotsDeniedActionsResponse>;
  /** 查询可用区列表 {@link DescribeZonesRequest} {@link DescribeZonesResponse} */
  DescribeZones(data?: DescribeZonesRequest, config?: AxiosRequestConfig): AxiosPromise<DescribeZonesResponse>;
  /** 解关联云联网 {@link DetachCcnRequest} {@link DetachCcnResponse} */
  DetachCcn(data: DetachCcnRequest, config?: AxiosRequestConfig): AxiosPromise<DetachCcnResponse>;
  /** 卸载云硬盘 {@link DetachDisksRequest} {@link DetachDisksResponse} */
  DetachDisks(data: DetachDisksRequest, config?: AxiosRequestConfig): AxiosPromise<DetachDisksResponse>;
  /** 解绑密钥对 {@link DisassociateInstancesKeyPairsRequest} {@link DisassociateInstancesKeyPairsResponse} */
  DisassociateInstancesKeyPairs(data: DisassociateInstancesKeyPairsRequest, config?: AxiosRequestConfig): AxiosPromise<DisassociateInstancesKeyPairsResponse>;
  /** 导入密钥对 {@link ImportKeyPairRequest} {@link ImportKeyPairResponse} */
  ImportKeyPair(data: ImportKeyPairRequest, config?: AxiosRequestConfig): AxiosPromise<ImportKeyPairResponse>;
  /** 创建镜像询价 {@link InquirePriceCreateBlueprintRequest} {@link InquirePriceCreateBlueprintResponse} */
  InquirePriceCreateBlueprint(data?: InquirePriceCreateBlueprintRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateBlueprintResponse>;
  /** 新购云硬盘询价 {@link InquirePriceCreateDisksRequest} {@link InquirePriceCreateDisksResponse} */
  InquirePriceCreateDisks(data: InquirePriceCreateDisksRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateDisksResponse>;
  /** 创建实例询价 {@link InquirePriceCreateInstancesRequest} {@link InquirePriceCreateInstancesResponse} */
  InquirePriceCreateInstances(data: InquirePriceCreateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceCreateInstancesResponse>;
  /** 续费云硬盘询价 {@link InquirePriceRenewDisksRequest} {@link InquirePriceRenewDisksResponse} */
  InquirePriceRenewDisks(data: InquirePriceRenewDisksRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceRenewDisksResponse>;
  /** 续费实例询价 {@link InquirePriceRenewInstancesRequest} {@link InquirePriceRenewInstancesResponse} */
  InquirePriceRenewInstances(data: InquirePriceRenewInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<InquirePriceRenewInstancesResponse>;
  /** 隔离云硬盘 {@link IsolateDisksRequest} {@link IsolateDisksResponse} */
  IsolateDisks(data: IsolateDisksRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateDisksResponse>;
  /** 隔离实例 {@link IsolateInstancesRequest} {@link IsolateInstancesResponse} */
  IsolateInstances(data: IsolateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<IsolateInstancesResponse>;
  /** 修改镜像属性 {@link ModifyBlueprintAttributeRequest} {@link ModifyBlueprintAttributeResponse} */
  ModifyBlueprintAttribute(data: ModifyBlueprintAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyBlueprintAttributeResponse>;
  /** 修改云硬盘备份点属性 {@link ModifyDiskBackupsAttributeRequest} {@link ModifyDiskBackupsAttributeResponse} */
  ModifyDiskBackupsAttribute(data: ModifyDiskBackupsAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDiskBackupsAttributeResponse>;
  /** 修改云硬盘属性 {@link ModifyDisksAttributeRequest} {@link ModifyDisksAttributeResponse} */
  ModifyDisksAttribute(data: ModifyDisksAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDisksAttributeResponse>;
  /** 调整云硬盘备份点配额 {@link ModifyDisksBackupQuotaRequest} {@link ModifyDisksBackupQuotaResponse} */
  ModifyDisksBackupQuota(data: ModifyDisksBackupQuotaRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDisksBackupQuotaResponse>;
  /** 修改云硬盘续费标识 {@link ModifyDisksRenewFlagRequest} {@link ModifyDisksRenewFlagResponse} */
  ModifyDisksRenewFlag(data: ModifyDisksRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDisksRenewFlagResponse>;
  /** 修改实例内的Docker容器 {@link ModifyDockerContainerRequest} {@link ModifyDockerContainerResponse} */
  ModifyDockerContainer(data: ModifyDockerContainerRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyDockerContainerResponse>;
  /** 修改防火墙规则描述 {@link ModifyFirewallRuleDescriptionRequest} {@link ModifyFirewallRuleDescriptionResponse} */
  ModifyFirewallRuleDescription(data: ModifyFirewallRuleDescriptionRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFirewallRuleDescriptionResponse>;
  /** 修改防火墙规则 {@link ModifyFirewallRulesRequest} {@link ModifyFirewallRulesResponse} */
  ModifyFirewallRules(data: ModifyFirewallRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFirewallRulesResponse>;
  /** 修改防火墙模板 {@link ModifyFirewallTemplateRequest} {@link ModifyFirewallTemplateResponse} */
  ModifyFirewallTemplate(data: ModifyFirewallTemplateRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyFirewallTemplateResponse>;
  /** 修改实例的属性 {@link ModifyInstancesAttributeRequest} {@link ModifyInstancesAttributeResponse} */
  ModifyInstancesAttribute(data: ModifyInstancesAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesAttributeResponse>;
  /** 变更实例套餐 {@link ModifyInstancesBundleRequest} {@link ModifyInstancesBundleResponse} */
  ModifyInstancesBundle(data: ModifyInstancesBundleRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesBundleResponse>;
  /** 修改实例默认登录密钥对属性 {@link ModifyInstancesLoginKeyPairAttributeRequest} {@link ModifyInstancesLoginKeyPairAttributeResponse} */
  ModifyInstancesLoginKeyPairAttribute(data: ModifyInstancesLoginKeyPairAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesLoginKeyPairAttributeResponse>;
  /** 修改实例续费标识 {@link ModifyInstancesRenewFlagRequest} {@link ModifyInstancesRenewFlagResponse} */
  ModifyInstancesRenewFlag(data: ModifyInstancesRenewFlagRequest, config?: AxiosRequestConfig): AxiosPromise<ModifyInstancesRenewFlagResponse>;
  /** 修改快照信息 {@link ModifySnapshotAttributeRequest} {@link ModifySnapshotAttributeResponse} */
  ModifySnapshotAttribute(data: ModifySnapshotAttributeRequest, config?: AxiosRequestConfig): AxiosPromise<ModifySnapshotAttributeResponse>;
  /** 重启实例 {@link RebootInstancesRequest} {@link RebootInstancesResponse} */
  RebootInstances(data: RebootInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RebootInstancesResponse>;
  /** 删除Docker容器 {@link RemoveDockerContainersRequest} {@link RemoveDockerContainersResponse} */
  RemoveDockerContainers(data: RemoveDockerContainersRequest, config?: AxiosRequestConfig): AxiosPromise<RemoveDockerContainersResponse>;
  /** 重命名Docker容器 {@link RenameDockerContainerRequest} {@link RenameDockerContainerResponse} */
  RenameDockerContainer(data: RenameDockerContainerRequest, config?: AxiosRequestConfig): AxiosPromise<RenameDockerContainerResponse>;
  /** 续费云硬盘 {@link RenewDisksRequest} {@link RenewDisksResponse} */
  RenewDisks(data: RenewDisksRequest, config?: AxiosRequestConfig): AxiosPromise<RenewDisksResponse>;
  /** 续费实例 {@link RenewInstancesRequest} {@link RenewInstancesResponse} */
  RenewInstances(data: RenewInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<RenewInstancesResponse>;
  /** 替换防火墙模板规则 {@link ReplaceFirewallTemplateRuleRequest} {@link ReplaceFirewallTemplateRuleResponse} */
  ReplaceFirewallTemplateRule(data: ReplaceFirewallTemplateRuleRequest, config?: AxiosRequestConfig): AxiosPromise<ReplaceFirewallTemplateRuleResponse>;
  /** 重新创建并运行Docker容器 {@link RerunDockerContainerRequest} {@link RerunDockerContainerResponse} */
  RerunDockerContainer(data: RerunDockerContainerRequest, config?: AxiosRequestConfig): AxiosPromise<RerunDockerContainerResponse>;
  /** 重新申请关联云联网 {@link ResetAttachCcnRequest} {@link ResetAttachCcnResponse} */
  ResetAttachCcn(data: ResetAttachCcnRequest, config?: AxiosRequestConfig): AxiosPromise<ResetAttachCcnResponse>;
  /** 重置防火墙模板规则 {@link ResetFirewallTemplateRulesRequest} {@link ResetFirewallTemplateRulesResponse} */
  ResetFirewallTemplateRules(data: ResetFirewallTemplateRulesRequest, config?: AxiosRequestConfig): AxiosPromise<ResetFirewallTemplateRulesResponse>;
  /** 重装系统 {@link ResetInstanceRequest} {@link ResetInstanceResponse} */
  ResetInstance(data: ResetInstanceRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstanceResponse>;
  /** 重置实例密码 {@link ResetInstancesPasswordRequest} {@link ResetInstancesPasswordResponse} */
  ResetInstancesPassword(data: ResetInstancesPasswordRequest, config?: AxiosRequestConfig): AxiosPromise<ResetInstancesPasswordResponse>;
  /** 扩容云硬盘 {@link ResizeDisksRequest} {@link ResizeDisksResponse} */
  ResizeDisks(data: ResizeDisksRequest, config?: AxiosRequestConfig): AxiosPromise<ResizeDisksResponse>;
  /** 重启Docker容器 {@link RestartDockerContainersRequest} {@link RestartDockerContainersResponse} */
  RestartDockerContainers(data: RestartDockerContainersRequest, config?: AxiosRequestConfig): AxiosPromise<RestartDockerContainersResponse>;
  /** 创建并运行Docker容器 {@link RunDockerContainersRequest} {@link RunDockerContainersResponse} */
  RunDockerContainers(data: RunDockerContainersRequest, config?: AxiosRequestConfig): AxiosPromise<RunDockerContainersResponse>;
  /** 跨账号共享镜像 {@link ShareBlueprintAcrossAccountsRequest} {@link ShareBlueprintAcrossAccountsResponse} */
  ShareBlueprintAcrossAccounts(data: ShareBlueprintAcrossAccountsRequest, config?: AxiosRequestConfig): AxiosPromise<ShareBlueprintAcrossAccountsResponse>;
  /** 启动Docker容器 {@link StartDockerContainersRequest} {@link StartDockerContainersResponse} */
  StartDockerContainers(data: StartDockerContainersRequest, config?: AxiosRequestConfig): AxiosPromise<StartDockerContainersResponse>;
  /** 启动实例 {@link StartInstancesRequest} {@link StartInstancesResponse} */
  StartInstances(data: StartInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StartInstancesResponse>;
  /** 停止Docker容器 {@link StopDockerContainersRequest} {@link StopDockerContainersResponse} */
  StopDockerContainers(data: StopDockerContainersRequest, config?: AxiosRequestConfig): AxiosPromise<StopDockerContainersResponse>;
  /** 关闭实例 {@link StopInstancesRequest} {@link StopInstancesResponse} */
  StopInstances(data: StopInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<StopInstancesResponse>;
  /** 销毁云硬盘 {@link TerminateDisksRequest} {@link TerminateDisksResponse} */
  TerminateDisks(data: TerminateDisksRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateDisksResponse>;
  /** 销毁实例 {@link TerminateInstancesRequest} {@link TerminateInstancesResponse} */
  TerminateInstances(data: TerminateInstancesRequest, config?: AxiosRequestConfig): AxiosPromise<TerminateInstancesResponse>;
}

export declare type Versions = ["2020-03-24"];

export default Lighthouse;
